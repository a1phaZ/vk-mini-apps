import React, {useState, useEffect, useContext, Fragment, useCallback} from 'react';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform, FixedLayout, Alert} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";
import {RouterContext} from "../contexts/routerContext";
import useApi from "../hooks/useApi";
import bridge from '@vkontakte/vk-bridge';
import prepare from "../handlers/prepare";
import CustomSnackBar from "../components/CustomSnackbar";

const AddDay = () => {
  const SUCCESS_MESSAGE = 'Добавление прошло успешно';
  const [name, setName] = useState('');
  const [date, setDate] = useState(() => {
    const date = new Date();
    const m = date.getMonth()+1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`;
    const d = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    return `${date.getFullYear()}-${m}-${d}`;
  });
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const [income, setIncome] = useState(false);
  const [snackbar, setSnackbar] = useState(null);
  const [qr, setQR] = useState(null);
  const [state, dispatch] = useContext(RouterContext);
  const [{response, error}, doApiFetch] = useApi('/day');
  const [receipts, doFnsFetch] = useApi('/day/receipt');
  const [startFetchData, setStartFetchData] = useState(false);
  const [checkReceipt, setCheckReceipt] = useState(false);
  const osname = platform();

  const onClose = useCallback(() => {
    dispatch({ type: 'UNSET_ERROR'});
    setSnackbar(null);
  }, [dispatch]);

  /***
   * Подписываемся на события
   */
  useEffect(()=>{
    bridge.subscribe(({ detail: { type, data }}) => {
      switch (type) {
        case 'VKWebAppOpenCodeReaderResult':
          setQR(data.code_data);
          break;
        case 'VKWebAppOpenCodeReaderFailed':
          console.log('add day error', data);
          break;
        default:
          break;
      }
    });
  }, []);

  /***
   * Добавляем данные на сервер
   */
  useEffect(() => {
    if (!startFetchData) return;
    const body = {
      method: 'POST',
      date: date,
      items: [
        {
          name,
          quantity,
          price: price * 100,
          sum: price * 100 * quantity,
          income,
          modifiers: [],
          properties: [],
        }
      ]
    };
    doApiFetch(body);

    setName('');
    setQuantity(1);
    setIncome(false);
    setPrice('');
    setStartFetchData(false);
  }, [startFetchData, setStartFetchData, date, doApiFetch, income, name, price, quantity]);

  /**
   * Выводим сообщение об успехе
   */
  useEffect(() => {
    if (!response) return;
    setSnackbar(<CustomSnackBar message={SUCCESS_MESSAGE} isError={false} onClose={onClose}/>)
  }, [response, onClose]);

  /**
   * Добавление QR кода
   */
  useEffect(() => {
    if (!qr) return;

    const preparedQR = prepare.qr(qr);

    if (preparedQR.error) {
      const e = preparedQR.error;
      dispatch({ type: 'SET_ERROR', payload: { error: e }});
      setQR(null);
      setCheckReceipt(false);
      return;
    }

    // const action = checkReceipt ? 'receive' : 'check';

    const body = {
      method: 'POST',
      ...preparedQR
    }
    doFnsFetch(body);
  }, [qr, doFnsFetch, checkReceipt, dispatch]);

  /**
   * Костыль. Проверка есть ли тело в ответе от ФНС. Сохраняем чек на сервере
   */
  useEffect(() => {
    if (!receipts.response) return;
    if (receipts.response._id) {
      setSnackbar(<CustomSnackBar message={SUCCESS_MESSAGE} isError={false} onClose={onClose}/>)
      setCheckReceipt(false);
      setQR(null);
    }
  }, [receipts.response, doFnsFetch, qr, onClose]);

  /**
   * Вывод сообщения об ощибке
   */
  useEffect(() => {
    if (!state.error) return;
    dispatch({
      type: 'SET_ERROR',
      payload: {
        error: receipts.error || error
      }
    })
    setSnackbar(<CustomSnackBar message={state.error.message} isError={true} onClose={onClose}/>);
    setCheckReceipt(false);
    setQR(null);

  }, [receipts.error, error, dispatch, state.error, onClose]);

  const popout = (
    <Alert
      actions={[{
        title: 'Отмена',
        autoclose: true,
        mode: 'cancel'
      }, {
        title: 'Заполнить',
        autoclose: true,
        action: () => dispatch({type: 'SET_VIEW', payload: { view: 'profile', panel: 'edit'}})
      }]}
      onClose={() => dispatch({type: 'SET_POPOUT', payload: { popout: null }})}
    >
      <h2>Незаполнен профиль</h2>
      <p>Для сканирования QR кодов и получения детально информации по чекам необходимо заполнить профиль, ввести email, телефон и получить пароль с сервера ФНС.</p>
    </Alert>
  )

  return(
    <Fragment>
      <PanelHeader
        left={
          <PanelHeaderButton key={'back'} onClick={(e) => {
            dispatch({type: 'SET_PANEL', payload: { panel: e.currentTarget.dataset.to}});
          }} data-to={'home'}>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</PanelHeaderButton>
        }
      >
        <PanelHeaderContent
          before={
            bridge.supports('VKWebAppOpenCodeReader') &&
            <PanelHeaderButton
              key={'qr'}
              data-to={'qr'}
              onClick={() => {
                dispatch({ type: 'UNSET_ERROR'});
                if (!(!!state.currentUser.email && !!state.currentUser.phone && !!state.currentUser.password)) {
                  dispatch({type: 'SET_POPOUT', payload: { popout: popout }});
                } else {
                  bridge.send('VKWebAppOpenCodeReader', {});
                }
              }}
            ><Icon24Qr /></PanelHeaderButton>
          }
        >
          Добавление записи
        </PanelHeaderContent>
      </PanelHeader>
      <FormLayout style={{paddingBottom: 40}}>
        <Input
          type={'date'}
          top={'Дата'}
          name={'date'}
          value={date}
          onChange={(e)=>{setDate(e.currentTarget.value)}}
        />
        <Checkbox
          name={'income'}
          checked={income}
          onChange={(e)=>{setIncome(e.currentTarget.checked)}}
        >Доход</Checkbox>
        <Input
          type={'text'}
          top={'Название'}
          name={'name'}
          value={name}
          onChange={(e)=>{setName(e.currentTarget.value)}}
        />
        <Input
          type={'number'}
          top={'Количество'}
          name={'quantity'}
          value={quantity}
          onChange={(e)=>{setQuantity(e.currentTarget.value)}}
        />
        <Input
          type={'number'}
          top={'Цена'}
          name={'price'}
          value={price}
          onChange={(e)=>{setPrice(e.currentTarget.value)}}
        />

        <FixedLayout style={{marginBottom: '1em'}} vertical="bottom">
          <Button
            size="xl"
            disabled={!date || !name || !quantity || !price}
            mode={income ? "commerce" : "destructive"}
            onClick={() => {setStartFetchData(true)}}
          >
            Добавить {income ? "доход" : "расход"}
          </Button>
        </FixedLayout>

        
      </FormLayout>

      {snackbar}
    </Fragment>
  )
};

export default AddDay;