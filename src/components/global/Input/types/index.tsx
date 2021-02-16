import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}
