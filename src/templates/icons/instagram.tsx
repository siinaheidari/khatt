
import { clsx } from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const InstagramSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M3.75 18C3.75 11.2825 3.75 7.92373 5.83686 5.83686C7.92373 3.75 11.2825 3.75 18 3.75C24.7175 3.75 28.0763 3.75 30.1632 5.83686C32.25 7.92373 32.25 11.2825 32.25 18C32.25 24.7175 32.25 28.0763 30.1632 30.1632C28.0763 32.25 24.7175 32.25 18 32.25C11.2825 32.25 7.92373 32.25 5.83686 30.1632C3.75 28.0763 3.75 24.7175 3.75 18Z" stroke="#E7E7E7" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M24.75 18C24.75 21.728 21.728 24.75 18 24.75C14.2721 24.75 11.25 21.728 11.25 18C11.25 14.2721 14.2721 11.25 18 11.25C21.728 11.25 24.75 14.2721 24.75 18Z" stroke="#E7E7E7" stroke-width="1.5"/>
    <path d="M26.2615 9.75H26.248" stroke="#E7E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const Instagram = ({ className, ...rest }: TIconsProps) => (
  <SvgIcon component={ InstagramSvg } className={ clsx(className, '!align-middle') } { ...rest } />
);
