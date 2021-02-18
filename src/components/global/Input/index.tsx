import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { IPropsInput } from './types/index';
import { Container } from './styles';

const Input: React.FC<IPropsInput> = ({ name, containerStyle = {}, label, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(Boolean(inputRef.current?.value));
  }, []);

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
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
