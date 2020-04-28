import React, {useState, useEffect, useContext, Fragment} from 'react';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform, Snackbar} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";
import {RouterContext} from "../contexts/routerContext";
import useApi from "../hooks/useApi";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon16Done from '@vkontakte/icons/dist/16/done';
import bridge from '@vkontakte/vk-bridge';
import prepare from "../handlers/prepare";

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
  const [, dispatch] = useContext(RouterContext);
  const [{response}, doApiFetch] = useApi('/day');
  const [receipts, doFnsFetch] = useApi('/day/receipt');
  const [startFetchData, setStartFetchData] = useState(false);
  const [checkReceipt, setCheckReceipt] = useState(false);
  const osname = platform();

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

  useEffect(() => {
    if (!response) return;
    setSnackbar(<Snackbar
      layout="vertical"
      onClose={() => setSnackbar(null)}
      before={<Avatar size={24} style={{backgroundColor: 'var(--accent)'}}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
    >
      {SUCCESS_MESSAGE}
    </Snackbar>)
  }, [response]);

  useEffect(() => {
    if (!qr) return;

    const action = checkReceipt ? 'receive' : 'check';

    const body = {
      method: 'POST',
      ...prepare.qr(qr),
      params: {
        action
      }
    }
    doFnsFetch(body);
  }, [qr, doFnsFetch, checkReceipt]);

  useEffect(() => {
    if (!receipts.response) return;
    setCheckReceipt(receipts.response.check);
    if (receipts.response.statusCode === 202) {
      const body = {
        method: 'POST',
        ...prepare.qr(qr),
        params: {
          action: 'receive'
        }
      }
      doFnsFetch(body);
    }
    if (receipts.response._id) {
      setCheckReceipt(false);
      setQR(null);
    }
  }, [receipts.response, doFnsFetch, qr]);

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
            <PanelHeaderButton
              key={'qr'}
              data-to={'qr'}
              onClick={() => {
                bridge.send('VKWebAppOpenCodeReader', {});
              }}
            ><Icon24Qr /></PanelHeaderButton>
          }
        >
          Добавление записи
        </PanelHeaderContent>
      </PanelHeader>
      <FormLayout>
        <Input
          type={'date'}
          top={'Дата'}
          name={'date'}
          value={date}
          onChange={(e)=>{setDate(e.currentTarget.value)}}
        />
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
        <Checkbox
          name={'income'}
          checked={income}
          onChange={(e)=>{setIncome(e.currentTarget.checked)}}
        >Доход</Checkbox>

        <Button
          size="xl"
          disabled={!date || !name || !quantity || !price}
          mode={income ? "commerce" : "destructive"}
          onClick={() => {setStartFetchData(true)}}
        >
          Добавить {income ? "доход" : "расход"}
        </Button>
      </FormLayout>

      {snackbar}
    </Fragment>
  )
};

export default AddDay;