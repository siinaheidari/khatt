
import { clsx } from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const LineArrowLeftSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    <path d="M19.4998 28.5L10.0604 19.0606C9.47464 18.4749 9.47464 17.5251 10.0604 16.9394L19.4998 7.5" stroke="#F6F6F6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29.5 28.5V7.5" stroke="#F6F6F6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const LineArrowLeft = ({ className, ...rest }: TIconsProps) => (
  <SvgIcon component={ LineArrowLeftSvg } className={ clsx(className, '!align-middle') } { ...rest } />
);
