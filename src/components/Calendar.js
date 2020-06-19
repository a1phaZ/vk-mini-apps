import React, { useContext } from 'react';
import {format, addMonths, subMonths} from 'date-fns';
import { ru } from 'date-fns/locale'
import {Group, List, Cell, Button} from "@vkontakte/vkui";
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import {RouterContext} from "../contexts/routerContext";

const Calendar = () => {
  const [state, dispatch] = useContext(RouterContext);
  const dateFormat = 'LLLL yyyy';

  const nextMonth = () => {
    dispatch({type: 'SET_DATE', payload: { date: (addMonths(state.currentDate, 1))}});
  };

  const prevMonth = () => {
    dispatch({type: 'SET_DATE', payload: { date: (subMonths(state.currentDate, 1))}});
  };

  return(
    <Group>
      <List>
        <Cell
          before={<Button onClick={prevMonth} mode={'secondary'}><Icon24BrowserBack /></Button>}
          asideContent={<Button onClick={nextMonth} mode={'secondary'}><Icon24BrowserForward /></Button>}
          style={{textAlign: 'center', fontWeight: 'bold'}}
        >
          {format(state.currentDate, dateFormat, {locale: ru}).toLocaleUpperCase()}
        </Cell>
      </List>
    </Group>
  )
};

export default Calendar;