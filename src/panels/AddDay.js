import React, {useState, useEffect, useContext, Fragment, useCallback} from 'react';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform, FixedLayout, Alert, Textarea, Radio} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";
import {RouterContext} from "../contexts/routerContext";
import useApi from "../hooks/useApi";
import bridge from '@vkontakte/vk-bridge';
import prepare from "../handlers/prepare";
import CustomSnackBar from "../components/CustomSnackbar";
import {format} from 'date-fns';
import Validation from "../handlers/validation";
import './styles.css';

const AddDay = () => {
  const SUCCESS_MESSAGE = 'Успешно';
  const [state, dispatch] = useContext(RouterContext);
  const [editedItem, setEditedItem] = useState(() => {
    return state.item || null;
  })
  const [name, setName] = useState(() => {
    return editedItem?.name || '';
  });
  const [date, setDate] = useState(() => {
    const d = editedItem?.dateTime || new Date();
    return format(new Date(d), 'yyyy-MM-dd');
  });
  const [quantity, setQuantity] = useState(() => {
    return editedItem?.quantity || 1
  });
  const [price, setPrice] = useState(() => {
    return editedItem?.price / 100 || ''
  });
  const [income, setIncome] = useState(() => {
    return editedItem?.income || false
  });

  const [description, setDescription] = useState(() => {
    return editedItem?.description || ''
  });
  const [groups, setGroups] = useState(() => {
    return editedItem?.groups || []
  });
  const [snackbar, setSnackbar] = useState(null);
  const [qr, setQR] = useState(null);
  const [{response, error}, doApiFetch] = useApi('/day');
  const [receipts, doFnsFetch] = useApi('/day/receipt');
  const [startFetchData, setStartFetchData] = useState(false);
  const [checkReceipt, setCheckReceipt] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [statusQuantity, setStatusQuantity] = useState(true);
  const [statusPrice, setStatusPrice] = useState(true);
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
          description,
          groups,
          canDelete: true,
        }
      ]
    };

    body.method = editedItem ? 'PUT' : body.method;
    body.method = deleteItem ? 'DELETE' : body.method;
    if (editedItem && editedItem._id) {body.id = editedItem._id}
    doApiFetch(body);
    setEditedItem(null);
    setName('');
    setQuantity(1);
    setIncome(false);
    setPrice('');
    setStartFetchData(false);
    setDescription('');
    setGroups([]);
    setDeleteItem(false);
  }, [startFetchData, setStartFetchData, date, doApiFetch, income, name, price, editedItem, quantity, description, groups, deleteItem]);

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

  const deletePopout = (
    <Alert
      actions={
        [{
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        }, {
          title: 'Удалить',
          autoclose: true,
          mode: 'destructive',
          action: () => {
            setDeleteItem(true);
            setStartFetchData(true);
          }
        }]
      }
      onClose={() => dispatch({type: 'SET_POPOUT', payload: { popout: null }})}
    >
      <h2>Подтвердите действие</h2>
      <p>Вы действительно хотите удалить? Удаление пройдет безвозвратно. Отменить операцию будет нельзя.</p>
    </Alert>
  )

  const dateInput = (editedItem) => {
    if (!editedItem) {
      return (
        <Input
          type={'date'}
          top={'Дата'}
          name={'date'}
          value={date}
          onChange={(e)=>{
            if (!!e.currentTarget.value) {
              setDate(Validation.overDate(e.currentTarget.value));
            }}
          }
        />
      )
      } else {
        return null
      }
  }

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
          {editedItem ? `Редактировать`: 'Добавить'}
        </PanelHeaderContent>
      </PanelHeader>
      <FormLayout style={{paddingBottom: 40}}>
        {dateInput(editedItem)}
        <div>
          <Radio name={'income'} value={false} onChange={() => {setIncome(false)}} defaultChecked={!income}>Расход</Radio>
          <Radio name={'income'} value={false} onChange={() => {setIncome(true)}} defaultChecked={income}>Доход</Radio>
        </div>
        <Input
          type={'text'}
          top={'Название'}
          name={'name'}
          value={name}
          onChange={(e)=>{setName(Validation.overSize(e, 20))}}
          bottom={`Введено ${name.length} из 20`}
        />
        <Input
          className={'number-input'}
          type={'number'}
          top={'Количество'}
          name={'quantity'}
          value={quantity}
          onChange={(e)=>{
            setQuantity(Validation.overSize(e, 6));
          }}
          onKeyDown={ (e) => {
            setStatusQuantity(e.target.validity.valid);
            Validation.typeNumber(e)
          } }
          step={'0.01'}
          bottom={!statusQuantity && 'Введите корректное значение'}
          status={!statusQuantity && 'error'}
        />
        <Input
          className={'number-input'}
          type={'number'}
          top={'Цена'}
          name={'price'}
          value={price}
          onChange={(e)=>{
            setPrice(Validation.overSize(e, 6));
          }}
          onKeyDown={ (e) => {
            setStatusPrice(e.target.validity.valid);
            Validation.typeNumber(e)
          } }
          step={'0.01'}
          bottom={!statusPrice && 'Введите корректное значение'}
          status={!statusPrice && 'error'}
        />
        {!income &&
          <Textarea
            top={'Описание'}
            placeholder={'Почему вы потратили на это деньги?'}
            name={'description'}
            value={description}
            onChange={e => setDescription(Validation.overSize(e,50))}
						bottom={`Введено ${description.length} из 50`}
          />
        }
        {
          editedItem?.canDelete
          &&
          <Button
            size="xl"
            mode={'destructive'}
            onClick={() => {dispatch({type: 'SET_POPOUT', payload: { popout: deletePopout }})}}
          >
            Удалить {income ? "доход" : "расход"}
          </Button>
        }
        <FixedLayout className={'fixed-button'} style={{marginBottom: '1em',}} vertical="bottom">
          {
            editedItem
              ?
                <Button
                  size="xl"
                  disabled={!date || !name || !quantity || !price}
                  mode={"commerce"}
                  onClick={() => setStartFetchData(true)}
                >
                  Сохранить изменения
                </Button>
              :
                <Button
                  size="xl"
                  disabled={!date || !name || !quantity || !price}
                  mode={"commerce"}
                  onClick={() => {
                    setStartFetchData(true)
                  }}
                >
                  Добавить {income ? "доход" : "расход"}
                </Button>
          }
        </FixedLayout>
      </FormLayout>
      {snackbar}
    </Fragment>
  )
};

export default AddDay;