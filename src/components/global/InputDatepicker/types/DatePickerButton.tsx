import { ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: Object,
    width?: string;
    gridColumnsStart?: number;
    selectedDay?: boolean;
    selected: boolean;
    selectingDay?: any;
}