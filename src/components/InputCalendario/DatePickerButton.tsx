import React, { FC } from 'react';
import { DatePickerButtonContainer } from './StyledComponent/DatePickerStyle';
import { IProps } from './types/DatePickerButton';

const DatePickerButton: FC<IProps> = ({
    onClick,
    icon,
    type = 'button',
    ...rest
}) => {
    return (
        <DatePickerButtonContainer type={type} onClick={onClick}>{icon}</DatePickerButtonContainer>
    )
};

export default DatePickerButton;