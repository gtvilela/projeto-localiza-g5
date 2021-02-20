import React, { useCallback, useEffect, useState, forwardRef, PropsWithChildren } from 'react';
import { useField } from '@unform/core';

import { IPropsInput } from './types/InputDatepicker';
import { Container } from './StyledComponent/InputDatepicker';

const InputDatepicker: React.ForwardRefRenderFunction<HTMLInputElement, PropsWithChildren<IPropsInput>> = (
  props,
  ref
) => {
  const { name, containerStyle = {}, label, icon: Icon, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    //@ts-ignore
    setIsFilled(Boolean(ref.current?.value));
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      //@ts-ignore
      ref: ref.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle} isErrored={Boolean(error)} isFilled={isFilled} isFocused={isFocused}>
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
        ref={ref}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(InputDatepicker);
