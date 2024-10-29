import {clsx} from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const MailboxSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M9.75 13.5H12.75" stroke="#E7E7E7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.25 12V6C26.25 4.34314 27.5931 3 29.25 3"  strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round"/>
    <path d="M18.75 27V33" stroke="#E7E7E7" strokeWidth="1.5" strokeLinecap="round"/>
    <path
      d="M26.25 7.73833C24.8026 7.5 22.8886 7.5 20.0625 7.5H15.9375C11.5601 7.5 9.37136 7.5 7.71453 8.38559C6.40632 9.08484 5.33484 10.1563 4.63558 11.4645C3.75 13.1214 3.75 15.3101 3.75 19.6875C3.75 22.314 3.75 23.6272 4.28136 24.6213C4.70091 25.4062 5.3438 26.0491 6.12872 26.4687C7.12281 27 8.43604 27 11.0625 27H24.9375C27.564 27 28.8772 27 29.8713 26.4687C30.6562 26.0491 31.2991 25.4062 31.7187 24.6213C32.25 23.6272 32.25 22.314 32.25 19.6875C32.25 15.3101 32.25 13.1214 31.3644 11.4645C31.1034 10.9763 30.7907 10.5211 30.4331 10.1059"
       strokeWidth="1.5" strokeLinecap="round"/>
    <path
      d="M18.7509 27V16.5C18.7509 15.1065 18.7509 14.4097 18.6585 13.8267C18.1503 10.6175 15.6333 8.10062 12.4241 7.59233C12.3013 7.57289 12.1735 7.55753 12.0352 7.54541"
       strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const Mailbox = ({className, ...rest}: TIconsProps) => (
  <SvgIcon component={MailboxSvg} className={clsx(className, '!align-middle')} {...rest} />
);
