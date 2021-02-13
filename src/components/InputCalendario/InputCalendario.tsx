import React, { FC, InputHTMLAttributes, ReactNode, useState } from 'react';
import DatePicker from './Datepicker';
import { InputContainer, InputText, LabelContainer } from './StyledComponent/InputStyle';

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
}) => {
    const [open, setOpen] = useState(false);
    const toggle = (open: boolean) => {setOpen(open)};

    return (
        <label htmlFor="">
            <LabelContainer>{label}</LabelContainer>
            <InputContainer
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}>
                {/* <div>{iconStart}</div> */}
                <InputText background={background} color={color} {...rest} />
                {/* <div>{iconEnd}</div> */}
            </InputContainer>
            {open && (
                <DatePicker></DatePicker>
            )}
        </label>
    );
};

export default InputCalendario;