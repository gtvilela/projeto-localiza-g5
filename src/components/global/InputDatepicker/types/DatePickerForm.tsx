import { InputHTMLAttributes, ReactNode } from "react";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    background?: string;
    color?: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    label?: string;
    type: string; 
}