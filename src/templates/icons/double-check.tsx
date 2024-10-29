import {clsx} from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const DoubleCheckSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" fill="none">
    <path d="M2.25 18.75L8.36361 24.8636C8.71507 25.2152 9.28493 25.2152 9.63639 24.8636L13.5 21"  strokeWidth="3.75" strokeLinecap="round"/>
    <path d="M24 10.5L18 16.5"  strokeWidth="3.75" strokeLinecap="round"/>
    <path d="M10.5 18L17.3635 24.8636C17.7151 25.2152 18.2849 25.2152 18.6365 24.8636L33 10.5"  strokeWidth="3.75" strokeLinecap="round"/>
  </svg>
);

export const DoubleCheck = ({className, ...rest}: TIconsProps) => (
  <SvgIcon component={DoubleCheckSvg} className={clsx(className, '!align-middle')} {...rest} />
);
