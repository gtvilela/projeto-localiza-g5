import moment from 'moment';
import React, { FC, InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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
    const [date, setDate] = useState('');
    const toggle = (open: boolean) => {setOpen(open)};
    const { register, handleSubmit } = useForm();

    const regexp = /^[0-9\b]+$/;

    const normalizeCardNumber = (event, value) => {
        let val = String(value);

        if (value === '' || regexp.test(val) || val.charAt(2) === '/' || val.charAt(5) === '/') {
            if (event.nativeEvent.inputType !== 'deleteContentBackward') {
                if(val.length == 2 || val.length == 5){
                    val += '/';
                }
            }
    
            if (val.length >= 10) {
                setDate(val);
                return val.substr(0, 10);
            }

            return val;
        } else {
            return '';
        }
    }

    const validateInput = async (value) => {
        console.log(value);
        
        if (date.length >= 10) {
            console.log(moment(date).isValid());
             return false;
        }
        return false;
    }

    return (
        <label htmlFor="">
            <LabelContainer>{label}</LabelContainer>
            <InputContainer
            // onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}>
                {/* <div>{iconStart}</div> */}
                <InputText 
                    name={'inputDatepicker'}
                    onChange={(event) => {
                        const {value} = event.target
                        event.target.value = normalizeCardNumber(event, value)
                    }}
                    placeholder={'01/01/2021'}
                    background={background} color={color}
                    ref={register({ validate: validateInput })}
                    {...rest} />
                {/* <div>{iconEnd}</div> */}
            </InputContainer>
            {open && (
                <DatePicker selectedDate={date}></DatePicker>
            )}
        </label>
    );
};

export default InputCalendario;