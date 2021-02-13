import React, { FC } from 'react';
import { DatePickerContainer, DatePickerHeader } from './StyledComponent/DatePickerStyle';
import { IPropsDatePicker } from './types/Datepicker';
import moment from 'moment';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import DatePickerButton from './DatePickerButton';

const DatePicker: FC<IPropsDatePicker> = ({ minDate, maxDate }) => {

    const dateDefault = moment();
    let selectedDate: Date;
    let defaultDay = +moment().format('DD');
    let defaultMonth = +moment().format('MM');
    let defaultYear = +moment().format('YYYY');

    // const YEARS = () => {
    //     let years = []
    //     const dateStart = moment()
    //     const dateEnd = moment().add(10, 'y')
    //     while (dateEnd.diff(dateStart, 'years') >= 0) {
    //       years.push(dateStart.format('YYYY'))
    //       dateStart.add(1, 'year')
    //     }
    //     years = sort(years);
    //     return years
    // }

    // const MONTHS = () => {
    //     let months = []
    //     const dateStart = moment()
    //     const dateEnd = moment().add(12, 'month')
    //     while (dateEnd.diff(dateStart, 'months') >= 0) {
    //      months.push(dateStart.format('M'))
    //      dateStart.add(1, 'month')
    //     }
    //     // console.log(moment().locale('pt-br').format('MMMM'));        
    //     months = sort(months);
    //     return months
    // }

    const DAYS = () => {
        let days = []
        const dateStart = moment(new Date(defaultYear, defaultMonth))
        const dateEnd = moment(new Date(defaultYear, defaultMonth)).add(30, 'days')
        while (dateEnd.diff(dateStart, 'days') >= 0) {
         days.push(dateStart.format('D'))
         dateStart.add(1, 'days')
        }
        days = sort(days);
        return days
    }

    const sort = (array: Array<any>) => {
        return array.sort((x, y) => x - y);
    }

    const monthName = (date?: Date) => {
        // if (date) {
            return moment(new Date(defaultYear, defaultMonth - 1)).locale('pt-br').format('MMMM');    
        // } else {
        //     return moment().locale('pt-br').format('MMMM');
        // }
    }

    const year = (date?: Date) => {
        // if (date) {
            return moment(new Date(defaultYear, defaultMonth - 1)).locale('pt-br').format('YYYY');  
        // } else {
        //     return moment().locale('pt-br').format('YYYY');  
        // }
    }

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>, side: string) => {
        const botaoClicado = event.currentTarget.innerText;
        event.currentTarget.blur();
        if (side === 'left') {
            if (defaultMonth === 0) {
                defaultMonth = 11;
                defaultYear -= 1;
            } else {
                defaultMonth -= 1;
            }
        } else {
            if (defaultMonth === 11) {
                defaultMonth = 0;
                defaultYear += 1;
            } else {
                defaultMonth += 1;
            }
        }
        // console.log(event);
        // console.log(typeof(+moment().format('MM')));
        // console.log(moment(new Date(2021, 0)).format('MM'));
        // console.log(moment(dateDefault));
        console.log(defaultYear);
        console.log(defaultMonth);
        
    }

    return (
        <>
            <DatePickerContainer>
                <DatePickerHeader>
                    <DatePickerButton onClick={x => handleOnClick(x, 'left')} icon={<RiArrowDropLeftLine size={30} />}/>
                    <label htmlFor="">{monthName()} &nbsp; {year()}</label>
                    <DatePickerButton onClick={x => handleOnClick(x, 'right')} icon={<RiArrowDropRightLine size={30} />}/>
                </DatePickerHeader>
                <div>
                    {
                        DAYS().map((day, key) => 
                            <button key={key}>{day}</button>
                        )
                    }
                </div>
            </DatePickerContainer>
        </>
    );
};

export default DatePicker;