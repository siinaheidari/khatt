
import { clsx } from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const TelegramSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M17.9781 23.1124L22.8402 28.6404C24.6416 30.6883 25.5423 31.7124 26.4851 31.4631C27.4278 31.2138 27.7512 29.8662 28.3977 27.1707L31.9844 12.2188C32.9802 8.06748 33.4781 5.99181 32.3712 4.968C31.2645 3.9442 29.346 4.70587 25.5092 6.22923L7.70814 13.2967C4.6394 14.5151 3.10502 15.1243 3.00761 16.1712C2.99763 16.2783 2.99747 16.3861 3.00711 16.4932C3.10131 17.5405 4.63382 18.1549 7.69883 19.3834C9.08757 19.9401 9.78195 20.2185 10.2798 20.7516C10.3358 20.8114 10.3896 20.8735 10.4412 20.9376C10.8999 21.5076 11.0956 22.2556 11.4871 23.7516L12.2198 26.5515C12.6008 28.0072 12.7912 28.7352 13.2901 28.8345C13.789 28.9336 14.2234 28.33 15.0921 27.1228L17.9781 23.1124ZM17.9781 23.1124L17.5014 22.6156C16.9589 22.0501 16.6877 21.7675 16.6877 21.4162C16.6877 21.0649 16.9589 20.7822 17.5014 20.2167L22.8609 14.6311" stroke="#E7E7E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const Telegram = ({ className, ...rest }: TIconsProps) => (
  <SvgIcon component={ TelegramSvg } className={ clsx(className, '!align-middle') } { ...rest } />
);
