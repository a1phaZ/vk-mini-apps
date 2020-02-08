import React, { Component } from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";

export default class AddNote extends Component {
  state = {
    name: '',
    quantity: 1,
    price: 0,
    sum: 0,
    income: false
  };

  onChange = (e) => {
    const { name, value, checked, type } = e.currentTarget;
    if (type !== 'checkbox') {
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: checked });
    }
  };

  render() {
    const osname = platform();
    const {id, go} = this.props;
    return(
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton key={'back'} onClick={go} data-to={'balance'}>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</PanelHeaderButton>
          }
        >
          <PanelHeaderContent
            before={<PanelHeaderButton key={'qr'}><Icon24Qr /></PanelHeaderButton>}
          >
            Добавление записи
          </PanelHeaderContent>
        </PanelHeader>
        <FormLayout>
          <Input
            type={'text'}
            top={'Название'}
            name={'name'}
            value={this.state.name}
            onChange={this.onChange}
          />
          <Input
            type={'number'}
            top={'Количество'}
            name={'quantity'}
            value={this.state.quantity}
            onChange={this.onChange}
          />
          <Input
            type={'number'}
            top={'Цена'}
            name={'price'}
            value={this.state.price}
            onChange={this.onChange}
          />
          <Checkbox
            name={'income'}
            value={this.state.income}
            onChange={this.onChange}
          >Доход</Checkbox>

          <Button size="xl" mode={this.state.income ? "commerce" : "destructive"}>
            Добавить {this.state.income ? "доход" : "расход"}
          </Button>
        </FormLayout>
      </Panel>
    )
  }
}