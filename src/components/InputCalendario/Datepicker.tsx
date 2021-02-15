import React, { FC, useEffect, useRef, useState } from 'react';
import { DatePickerBodyContainer, DatePickerContainer, DatePickerHeaderContainer, SubHeaderDatePickerContainer } from './StyledComponent/DatePickerStyle';
import { IPropsDatePicker } from './types/Datepicker';
import moment from 'moment';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import DatePickerButton from './DatePickerButton';

const DatePicker: FC<IPropsDatePicker> = ({ selectedDate, minDate, maxDate }) => {

    let defaultDay = useRef(+moment().format('DD'));
    let defaultMonth = useRef(+moment().format('MM'));
    let defaultYear = useRef(+moment().format('YYYY'));

    const [days, setDays] = useState([]);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        setDays(getDays());
        setMonth(getMonthName());
        setYear(getYearNumber());
    }, []);

    useEffect(() => {
        if (selectedDate.length >= 10) {
            selectDate();
        }
    }, [selectedDate]);

    const getDays = () => {
        let days = []
        const dateStart = moment(new Date(defaultYear.current, defaultMonth.current - 1))
        const dateEnd = moment(new Date(defaultYear.current, defaultMonth.current - 1))
            .add(moment(new Date(defaultYear.current, defaultMonth.current - 1))
            .daysInMonth() - 1, 'days')
        while (dateEnd.diff(dateStart, 'days') >= 0) {
            days.push(dateStart.format('D'))
            dateStart.add(1, 'days')
        }   
        
        return days
    }

    const selectDate = () => {
        defaultDay.current = +selectedDate.substr(0,2);
        defaultMonth.current = +selectedDate.substr(3,2);
        defaultYear.current = +selectedDate.substr(6,4);
        setYear(getYearNumber());
        setMonth(getMonthName());
        setDays(getDays());
    }

    const getMonthName = () => {
        return moment(new Date(defaultYear.current, defaultMonth.current - 1)).locale('pt-br').format('MMMM');    
    }

    const getYearNumber = () => {
        return moment(new Date(defaultYear.current, defaultMonth.current - 1)).locale('pt-br').format('YYYY');  
    }

    // const handleOnClickButton = (key: number) => {
    //     days[key].sele
    //     return defaultDay.current += key + 1;
    // }

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>, side: string) => {
        const botaoClicado = event.currentTarget.innerText;
        event.currentTarget.blur();
        if (side === 'left') {
            if (defaultMonth.current === 0) {
                defaultMonth.current = 11;
                defaultYear.current -= 1;
                setYear(getYearNumber());
                setMonth(getMonthName());
                setDays(getDays());
            } else {
                defaultMonth.current -= 1;
                setMonth(getMonthName());
                setDays(getDays());
            }
        } else {
            if (defaultMonth.current === 11) {
                defaultMonth.current = 0;
                defaultYear.current += 1;
                setYear(getYearNumber());
                setMonth(getMonthName());
                setDays(getDays());
            } else {
                defaultMonth.current += 1;
                defaultDay.current++;
                setMonth(getMonthName());
                setDays(getDays());
            }
        }
    }

    return (
        <>
            <DatePickerContainer>
                <DatePickerHeaderContainer>
                    <DatePickerButton width={'20%'} onClick={x => handleOnClick(x, 'left')} icon={<RiArrowDropLeftLine size={30} />} hover={false}/>
                    <label htmlFor="">{month} &nbsp; {year}</label>
                    <DatePickerButton width={'20%'} onClick={x => handleOnClick(x, 'right')} icon={<RiArrowDropRightLine size={30} />} hover={false}/>
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
                        days.map((day, key) => 
                            key !== 0 ? <DatePickerButton key={key} value={day} hover={true}></DatePickerButton> : 
                            <DatePickerButton key={key} value={day} hover={true}
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