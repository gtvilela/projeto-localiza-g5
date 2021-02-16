import React, { FC, useEffect, useRef, useState } from 'react';
import { DatePickerBodyContainer, DatePickerContainer, DatePickerHeaderContainer, SubHeaderDatePickerContainer } from './StyledComponent/DatePickerStyle';
import { IPropsDatePicker } from './types/Datepicker';
import moment from 'moment';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import DatePickerButton from './DatePickerButton';
import { IDay } from './types/Day';

const DatePicker: FC<IPropsDatePicker> = ({ selectedDate, outputDate, minDate, maxDate }) => {

    let defaultDay = useRef(+moment().format('DD'));
    let defaultMonth = useRef(+moment().format('MM'));
    let defaultYear = useRef(+moment().format('YYYY'));

    const [days, setDays] = useState([]);
    const [monthName, setMonthName] = useState('');
    const [yearName, setYearName] = useState('');

    useEffect(() => {
        setDays(getDays());
        setMonthName(getMonthName());
        setYearName(getYearNumber());
    }, []);

    useEffect(() => {
        if (selectedDate.length >= 10) {
            selectDate();
        }
    }, [selectedDate]);

    const getDays = () => {
        // console.log(selectedDate);
        // console.log(+selectedDate.toString().substr(3,2));
        // console.log(+defaultMonth.current);
        // console.log(+selectedDate.toString().substr(0,2) - 1);
        
        
        let days: IDay[];
        days = new Array();
        const dateStart = moment(new Date(defaultYear.current, defaultMonth.current - 1))
        const dateEnd = moment(new Date(defaultYear.current, defaultMonth.current - 1))
            .add(moment(new Date(defaultYear.current, defaultMonth.current - 1))
            .daysInMonth() - 1, 'days')
        for (let i = 0; dateEnd.diff(dateStart, 'days') >= 0; i++) {
            
            
            if (+selectedDate.toString().substr(0,2) - 1 === i && +selectedDate.toString().substr(3,2) === +defaultMonth.current) {
                // console.log('aqui');
                // console.log(+selectedDate.toString().substr(0,2));
                
                
                days.push({day: dateStart.format('D'), selected: true, disabled: false});
            } else {
                days.push({day: dateStart.format('D'), selected: false, disabled: false});
            }
            dateStart.add(1, 'days');
        }   
        // console.log(days);
        
        return days
    }

    const selectDate = (clickButton?: boolean) => {
        defaultDay.current = +selectedDate.substr(0,2);
        if (selectedDate.length >= 10) {
            let outDate = '';
            if (!clickButton) {
                defaultMonth.current = +selectedDate.substr(3,2);
                defaultYear.current = +selectedDate.substr(6,4);
            }
            if (defaultMonth.current < 10) {
                outDate = selectedDate.substr(0,2) + '/0' + defaultMonth.current.toString() + '/' + defaultYear.current.toString();
            } else {
                outDate = selectedDate.substr(0,2) + '/' + defaultMonth.current.toString() + '/' + defaultYear.current.toString();
            }
            outputDate(outDate);
        } else {
            selectedDate += '0' + (defaultMonth.current).toString() + '/' + defaultYear.current.toString();
            // console.log(selectedDate);
            if (outputDate !== undefined) {
                outputDate(selectedDate);
            }
        }
        setYearName(getYearNumber());
        setMonthName(getMonthName());
        setDays(getDays());
    }

    const getMonthName = () => {
        return moment(new Date(defaultYear.current, defaultMonth.current - 1)).locale('pt-br').format('MMMM');    
    }

    const getYearNumber = () => {
        return moment(new Date(defaultYear.current, defaultMonth.current - 1)).locale('pt-br').format('YYYY');  
    }

    const selectingDay = (value: number) => {
        // console.log(selectedDate);
        let val = value < 10 ? '0' + value.toString() : value.toString();
        selectedDate = val + '/' + selectedDate.substr(3,10);
        // console.log(selectedDate);
        selectDate(true);
    }

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>, side: string) => {
        // const botaoClicado = event.currentTarget.innerText;
        event.currentTarget.blur();
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
    }

    return (
        <>
            <DatePickerContainer>
                <DatePickerHeaderContainer>
                    <DatePickerButton width={'20%'} onClick={x => handleOnClick(x, 'left')} icon={<RiArrowDropLeftLine size={30} />} selected={false}/>
                    <label htmlFor="">{monthName} &nbsp; {yearName}</label>
                    <DatePickerButton width={'20%'} onClick={x => handleOnClick(x, 'right')} icon={<RiArrowDropRightLine size={30} />} selected={false}/>
                </DatePickerHeaderContainer>
                <SubHeaderDatePickerContainer>
                    <div>Dom</div>
                    <div>Seg</div>
                    <div>Ter</div>
                    <div>Qua</div>
                    <div>Qui</div>
                    <div>Sex</div>
                    <div>Sab</div>
                </SubHeaderDatePickerContainer>
                <DatePickerBodyContainer>
                    {
                        days.map((day: IDay, key) => 
                            key !== 0 ? <DatePickerButton key={key} value={day.day} selected={true} 
                                            selectedDay={day.selected} selectingDay={e => selectingDay(e)}></DatePickerButton> : 
                            <DatePickerButton key={key} value={day.day} selected={true} selectedDay={day.selected} selectingDay={e => selectingDay(e)}
                                gridColumnsStart={+moment(moment(new Date(defaultYear.current, defaultMonth.current - 1))
                                    .startOf('month')._d).format('d') + 1}>                                    
                            </DatePickerButton>
                        )
                    }
                </DatePickerBodyContainer>
            </DatePickerContainer>
        </>
    );
};

export default DatePicker;