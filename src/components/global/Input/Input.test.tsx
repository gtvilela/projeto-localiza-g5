import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FiMail } from 'react-icons/fi';

import theme from '../../../styles/theme';
import Input from '../Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('<Input>', () => {
  it('should be able to render an input', () => {
    const { getByLabelText } = render(<Input name="email" icon={FiMail} label="E-mail" />);

    expect(getByLabelText('E-mail')).toBeTruthy();
  });
});
