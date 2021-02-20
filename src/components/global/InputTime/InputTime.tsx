import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { IPropsInput } from './types/index';
import { Container } from './styles';

const InputTime: React.FC<IPropsInput> = ({ name, containerStyle = {}, label, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const regexp = /^[0-9\b]+$/; // regex que aceita somente números

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(Boolean(inputRef.current?.value));
  }, []);

  const normalizeInputNumber = (event) => {
    let val = String(inputRef.current.value);

    if (val === '' || regexp.test(val) || val.charAt(2) === ':') {
      if (event.nativeEvent.inputType !== 'deleteContentBackward') {
        if (val.length == 2 && +val.substr(0, 2) > 23) {
          val = '';
        } else if (val.length == 5 && +val.substr(3, 2) > 60) {
          val = '';
        }
        if (val.length == 2) {
          val += ':';
        }
      }

      if (val.length >= 5 && (!(+val.substr(0, 2) >= 0) || !(+val.substr(3, 2) < 60))) {
        inputRef.current.value = '';
        val = '';
      } else if (val.length > 5) {
        inputRef.current.value = val.substr(0, 5);
        val = val.substr(0, 5);
      }
      inputRef.current.value = val;
    } else {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      data-testid="input-container"
      style={containerStyle}
      isErrored={Boolean(error)}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && (
        <div className="icon-container">
          <Icon size={18} />
        </div>
      )}
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        onFocus={handleInputFocus}
        type="text"
        onChange={normalizeInputNumber}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default InputTime;
