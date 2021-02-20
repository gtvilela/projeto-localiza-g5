import React, { FC, useEffect, useState } from 'react';
import { DatePickerButtonContainer } from './StyledComponent/DatePickerStyle';
import { IProps } from './types/DatePickerButton';

const DatePickerButton: FC<IProps> = ({
    onClick,
    icon,
    type = 'button',
    width,
    value,
    gridColumnsStart,
    selectedDay,
    selected,
    selectingDay,
    ...rest
}) => {
    const [backGround, setBackGround] = useState('');

    useEffect(() => {
        if (selectedDay) {
            setBackGround('#00984a');
        } else {
            setBackGround('');
        }        
    }, [selectedDay]);

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (selectedDay !== undefined) {
            selectingDay(value);
        }
        if (onClick !== undefined){
            onClick(event);            
        } 
        if (selected) {
            backGround === '' ? setBackGround('#00984a') : setBackGround('');
        }
    }
    return (
        <DatePickerButtonContainer type={type} onClick={handleOnClick} width={width} backGroundColor={backGround}
            value={value} gridColumnsStart={gridColumnsStart}>{icon}{value}</DatePickerButtonContainer>
    )
};

export default DatePickerButton;