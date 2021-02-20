import moment from 'moment';
import React, { FC, useEffect, useRef, useState } from 'react';
import DatePicker from './Datepicker';
import { FiCalendar } from 'react-icons/fi';
import InputDatepicker from './InputDatepicker';
import { IProps } from './types/DatePickerForm';

const DatePickerForm: FC<IProps> = ({
  background = '#ffffff',
  color = '#000000',
  iconStart,
  iconEnd,
  label,
  type,
  name,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const visibleRef = useRef<HTMLDivElement>(null);

  const regexp = /^[0-9\b]+$/; // regex que aceita somente números

  useEffect(() => {
    visibleRef.current.style.display = 'none';
    inputRef.current.value = date;
  }, []);

  const toggleDatepicker = (open: boolean) => {
    if (open) {
      visibleRef.current.style.display = 'block';
    } else {
      visibleRef.current.style.display = 'none';
    }
    setOpen(open);
  };

  const outputDate = (outputDate: string) => {
    setDate(outputDate);
    inputRef.current.focus();
    inputRef.current.value = outputDate;
    visibleRef.current.style.display = 'none';
  };

  const normalizeInputNumber = (event) => {
    let val = String(inputRef.current.value);

    if (val === '' || regexp.test(val) || val.charAt(2) === '/' || val.charAt(5) === '/') {
      if (event.nativeEvent.inputType !== 'deleteContentBackward') {
        if (val.length == 2 && +val.substr(0, 2) > 31) {
          val = '';
        } else if (val.length == 5 && +val.substr(3, 2) > 12) {
          val = '';
        }
        if (val.length == 2 || val.length == 5) {
          val += '/';
        }
      }

      if (val.length >= 10 && (!(+val.substr(6, 4) > 1902) || !(+val.substr(6, 4) < 2050))) {
        setDate('');
        inputRef.current.value = '';
      } else if (val.length >= 10 && moment(val, 'DD-MM-YYYY').isValid()) {
        setDate(val);
        inputRef.current.value = val.substr(0, 10);
      }
      setDate(val);
      inputRef.current.value = val;
    } else {
      setDate('');
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <div onClick={() => toggleDatepicker(!open)}>
        <InputDatepicker
          name={name}
          label={label}
          icon={FiCalendar}
          onChange={(event) => normalizeInputNumber(event)}
          background={background}
          color={color}
          autoComplete={'off'}
          maxLength={10}
          ref={inputRef}
          {...rest}
        />
      </div>

      <>
        <DatePicker selectedDate={date} outputDate={(e) => outputDate(e)} ref={visibleRef} />
      </>
    </>
  );
};

export default DatePickerForm;
