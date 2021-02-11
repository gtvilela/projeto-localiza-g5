import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { InputContainer, InputText, LabelContainer } from './StyledComponent';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    background?: string;
    color?: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    label: string;
    type: string; 
}

const InputCalendario: FC<IProps> = ({
    background = '#ffffff', color = '#000000', iconStart, iconEnd, label, type, ...rest
}) => (
    <label htmlFor="">
        <LabelContainer>{label}</LabelContainer>
        <InputContainer>
            <div>{iconStart}</div>
            <InputText background={background} color={color} {...rest} />
        </InputContainer>
    </label>
);

export default InputCalendario;