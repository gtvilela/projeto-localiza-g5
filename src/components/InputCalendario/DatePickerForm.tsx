import moment from 'moment';
import React, { FC, InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import DatePicker from './Datepicker';
import { FiCalendar } from 'react-icons/fi'
import InputDatepicker from './InputDatepicker';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    background?: string;
    color?: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    label?: string;
    type: string; 
}

const DatePickerForm: FC<IProps> = ({
    background = '#ffffff', color = '#000000', iconStart, iconEnd, label, type, ...rest
}) => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    
    const regexp = /^[0-9\b]+$/; // regex que aceita somente números
    
    const toggleDatepicker = (open: boolean) => {setOpen(open)};

    const outputDate = (outputDate: string) => {
        setDate(outputDate);
        inputRef.current.focus();
    }

    const normalizeInputNumber = (event, value) => {
        
        let val = String(value);

        if (value === '' || regexp.test(val) || val.charAt(2) === '/' || val.charAt(5) === '/') {
            if (event.nativeEvent.inputType !== 'deleteContentBackward') {
                if (val.length == 2 && +val.substr(0,2) > 31) {
                    val = '';
                } else if (val.length == 5 && +val.substr(3,2) > 12) {
                    val = '';
                }
                if(val.length == 2 || val.length == 5){
                    val += '/';
                }
            }
            
            if (val.length >= 10 && (!(+val.substr(6,4) > 1902) || !(+val.substr(6,4) < 2050))) {
                setDate('');
                return '';
            } else if (val.length >= 10 && moment(val, 'DD-MM-YYYY').isValid()) {
                setDate(val);
                return val.substr(0, 10);
            }
            setDate(val);
            return val;
        } else {
            setDate('');
            return '';
        }
    }

    return (
        <div onClick={() => toggleDatepicker(!open)}>
            <InputDatepicker
                
                name="date" label="Data da retirada" icon={FiCalendar} 
                onChange={(event) => {
                    const {value} = event.target
                    event.target.value = normalizeInputNumber(event, value)
                }}
                value={date}
                background={background} 
                color={color}
                autoComplete={'off'}
                maxLength={10}
                ref={inputRef}
                {...rest}
            />
            {open && (
                <DatePicker selectedDate={date} outputDate={e => outputDate(e)}></DatePicker>
            )}
        </div>
    );
};

export default DatePickerForm;