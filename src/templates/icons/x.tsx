import {clsx} from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const XSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path
      d="M4.5 31.5L15.8226 20.1774M15.8226 20.1774L4.5 4.5H12L20.1774 15.8226M15.8226 20.1774L24 31.5H31.5L20.1774 15.8226M31.5 4.5L20.1774 15.8226"
      stroke="#E7E7E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const XIcon = ({className, ...rest}: TIconsProps) => (
  <SvgIcon component={XSvg} className={clsx(className, '!align-middle')} {...rest} />
);
