import React, { forwardRef, PropsWithChildren, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

import {
  DatePickerBodyContainer,
  DatePickerContainer,
  DatePickerHeaderContainer,
  SubHeaderDatePickerContainer
} from '../InputDatepicker/StyledComponent/DatePickerStyle';
import { IPropsDatePicker } from './types/Datepicker';
import DatePickerButton from './DatePickerButton';
import { IDay } from './types/Day';

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const DatePicker: React.ForwardRefRenderFunction<HTMLDivElement, PropsWithChildren<IPropsDatePicker>> = (
  props,
  ref
) => {
  let { selectedDate, outputDate } = props;

  let defaultDay = useRef(+moment().format('DD'));
  let defaultMonth = useRef(+moment().format('MM'));
  let defaultYear = useRef(+moment().format('YYYY'));

  const [days, setDays] = useState([]);
  const [monthName, setMonthName] = useState('');
  const [yearName, setYearName] = useState('');

  const getDays = () => {
    let days: IDay[];
    days = new Array();

    const dateStart = moment(new Date(defaultYear.current, defaultMonth.current - 1));
    const dateEnd = moment(new Date(defaultYear.current, defaultMonth.current - 1)).add(
      moment(new Date(defaultYear.current, defaultMonth.current - 1)).daysInMonth() - 1,
      'days'
    );

    for (let i = 0; dateEnd.diff(dateStart, 'days') >= 0; i++) {
      if (
        +selectedDate.toString().substr(0, 2) - 1 === i &&
        +selectedDate.toString().substr(3, 2) === +defaultMonth.current
      ) {
        days.push({ day: dateStart.format('D'), selected: true, disabled: false });
      } else {
        days.push({ day: dateStart.format('D'), selected: false, disabled: false });
      }

      dateStart.add(1, 'days');
    }

    return days;
  };

  const selectDate = (clickButton?: boolean) => {
    defaultDay.current = +selectedDate.substr(0, 2);
    if (selectedDate.length >= 10) {
      let outDate = '';

      if (!clickButton) {
        defaultMonth.current = +selectedDate.substr(3, 2);
        defaultYear.current = +selectedDate.substr(6, 4);
      }

      if (defaultMonth.current < 10) {
        outDate =
          selectedDate.substr(0, 2) + '/0' + defaultMonth.current.toString() + '/' + defaultYear.current.toString();
      } else {
        outDate =
          selectedDate.substr(0, 2) + '/' + defaultMonth.current.toString() + '/' + defaultYear.current.toString();
      }

      outputDate(outDate);
    } else {
      selectedDate += '0' + defaultMonth.current.toString() + '/' + defaultYear.current.toString();

      if (outputDate !== undefined) {
        outputDate(selectedDate);
      }
    }

    setYearName(getYearNumber());
    setMonthName(getMonthName());
    setDays(getDays());
  };

  const getMonthName = () =>
    moment(new Date(defaultYear.current, defaultMonth.current - 1))
      .locale('pt-br')
      .format('MMMM');

  const getYearNumber = () =>
    moment(new Date(defaultYear.current, defaultMonth.current - 1))
      .locale('pt-br')
      .format('YYYY');

  const selectingDay = (value: number) => {
    let val = value < 10 ? '0' + value.toString() : value.toString();

    selectedDate = val + '/' + selectedDate.substr(3, 10);
    selectDate(true);
  };

  const handleOnClick = (side: string) => {
    if (side === 'left') {
      if (defaultMonth.current === 1) {
        defaultMonth.current = 12;
        defaultYear.current -= 1;
        setYearName(getYearNumber());
        setMonthName(getMonthName());
        setDays(getDays());
      } else {
        defaultMonth.current -= 1;
        setMonthName(getMonthName());
        setDays(getDays());
      }
    } else {
      if (defaultMonth.current === 12) {
        defaultMonth.current = 1;
        defaultYear.current += 1;
        setYearName(getYearNumber());
        setMonthName(getMonthName());
        setDays(getDays());
      } else {
        defaultMonth.current += 1;
        defaultDay.current++;
        setMonthName(getMonthName());
        setDays(getDays());
      }
    }
  };

  useEffect(() => {
    setDays(getDays());
    setMonthName(getMonthName());
    setYearName(getYearNumber());
  }, []);

  useEffect(() => {
    if (selectedDate.length < 10) {
      return;
    }

    selectDate();
  }, [selectedDate]);

  return (
    <>
      <DatePickerContainer ref={ref}>
        <DatePickerHeaderContainer>
          <DatePickerButton
            width={'20%'}
            onClick={() => handleOnClick('left')}
            icon={<RiArrowDropLeftLine size={30} />}
            selected={false}
          />

          <label htmlFor="">
            {monthName} &nbsp; {yearName}
          </label>

          <DatePickerButton
            width={'20%'}
            onClick={() => handleOnClick('right')}
            icon={<RiArrowDropRightLine size={30} />}
            selected={false}
          />
        </DatePickerHeaderContainer>

        <SubHeaderDatePickerContainer>
          {daysOfWeek.map((day, id) => (
            <div key={id}>{day}</div>
          ))}
        </SubHeaderDatePickerContainer>

        <DatePickerBodyContainer>
          {days.map((day: IDay, key) =>
            key !== 0 ? (
              <DatePickerButton
                key={key}
                value={day.day}
                selected={true}
                selectedDay={day.selected}
                selectingDay={(e) => selectingDay(e)}
              />
            ) : (
              <DatePickerButton
                key={key}
                value={day.day}
                selected={true}
                selectedDay={day.selected}
                selectingDay={(e) => selectingDay(e)}
                gridColumnsStart={
                  //@ts-ignore
                  +moment(moment(new Date(defaultYear.current, defaultMonth.current - 1)).startOf('month')._d).format(
                    'd'
                  ) + 1
                }
              />
            )
          )}
        </DatePickerBodyContainer>
      </DatePickerContainer>
    </>
  );
};

export default forwardRef(DatePicker);
