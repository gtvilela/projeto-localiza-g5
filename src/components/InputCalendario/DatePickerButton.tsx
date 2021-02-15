import React, { FC, useState } from 'react';
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
    hover,
    ...rest
}) => {
    const [backGround, setBackGround] = useState('');

    onClick = () => {
        if (hover)
            backGround === '' ? setBackGround('#00984a') : setBackGround('');
    }
    return (
        <DatePickerButtonContainer type={type} onClick={onClick} width={width} backGroundColor={backGround}
            value={value} gridColumnsStart={gridColumnsStart}>{icon}{value}</DatePickerButtonContainer>
    )
};

export default DatePickerButton;