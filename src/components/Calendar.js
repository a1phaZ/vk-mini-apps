import React, { useState, useEffect } from 'react';
import {format, addMonths, subMonths} from 'date-fns';
import { ru } from 'date-fns/locale'
import {Group, List, Cell, Button} from "@vkontakte/vkui";
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';

const Calendar = ({setDateFromCalendar}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateFormat = 'LLLL yyyy';

  useEffect(() => {
    setDateFromCalendar(currentDate);
  }, [currentDate, setDateFromCalendar]);

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return(
    <Group>
      <List>
        <Cell
          before={<Button onClick={prevMonth} mode={'secondary'}><Icon24BrowserBack /></Button>}
          asideContent={<Button onClick={nextMonth} mode={'secondary'}><Icon24BrowserForward /></Button>}
          style={{textAlign: 'center', fontWeight: 'bold'}}
        >
          {format(currentDate, dateFormat, {locale: ru}).toLocaleUpperCase()}
        </Cell>
      </List>
    </Group>
  )
};

export default Calendar;