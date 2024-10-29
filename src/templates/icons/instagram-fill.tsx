import {clsx} from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const InstagramFillSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M3.75 18C3.75 11.2825 3.75 7.92373 5.83686 5.83686C7.92373 3.75 11.2825 3.75 18 3.75C24.7175 3.75 28.0763 3.75 30.1632 5.83686C32.25 7.92373 32.25 11.2825 32.25 18C32.25 24.7175 32.25 28.0763 30.1632 30.1632C28.0763 32.25 24.7175 32.25 18 32.25C11.2825 32.25 7.92373 32.25 5.83686 30.1632C3.75 28.0763 3.75 24.7175 3.75 18Z" stroke="url(#paint0_linear_2028_1364)" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M24.75 18C24.75 21.728 21.728 24.75 18 24.75C14.2721 24.75 11.25 21.728 11.25 18C11.25 14.2721 14.2721 11.25 18 11.25C21.728 11.25 24.75 14.2721 24.75 18Z" stroke="url(#paint1_linear_2028_1364)" strokeWidth="1.5"/>
    <path d="M26.2615 9.75H26.248" stroke="url(#paint2_linear_2028_1364)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_2028_1364" x1="18" y1="3.75" x2="18" y2="32.25" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7638FA"/>
        <stop offset="0.5" stop-color="#D300C5"/>
        <stop offset="0.75" stop-color="#FF0069"/>
        <stop offset="0.875" stop-color="#FF7A00"/>
        <stop offset="1" stop-color="#FFD600"/>
      </linearGradient>
      <linearGradient id="paint1_linear_2028_1364" x1="18" y1="11.25" x2="18" y2="24.75" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7638FA"/>
        <stop offset="0.5" stop-color="#D300C5"/>
        <stop offset="0.75" stop-color="#FF0069"/>
        <stop offset="0.875" stop-color="#FF7A00"/>
        <stop offset="1" stop-color="#FFD600"/>
      </linearGradient>
      <linearGradient id="paint2_linear_2028_1364" x1="26.2548" y1="9.75" x2="26.2548" y2="10.75" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7638FA"/>
        <stop offset="0.5" stop-color="#D300C5"/>
        <stop offset="0.75" stop-color="#FF0069"/>
        <stop offset="0.875" stop-color="#FF7A00"/>
        <stop offset="1" stop-color="#FFD600"/>
      </linearGradient>
    </defs>
  </svg>
);

export const InstagramFill = ({className, ...rest}: TIconsProps) => (
  <SvgIcon component={InstagramFillSvg} className={clsx(className, '!align-middle')} {...rest} />
);
