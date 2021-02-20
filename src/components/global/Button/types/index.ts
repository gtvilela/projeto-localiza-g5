import { ButtonHTMLAttributes } from 'react';

export interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'yellow' | 'red';
  size?: 'large' | 'medium';
  radius?: boolean;
  fullwidth?: boolean;
}
