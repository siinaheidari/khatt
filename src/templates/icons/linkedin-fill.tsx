import {clsx} from 'clsx';
import {TIconsProps, TIconsSvgProps} from "./types/icons";
import SvgIcon from "./svg-icon";


const LinkedinFillSvg = (props: TIconsSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M6.75 14.25H6C4.58579 14.25 3.87869 14.25 3.43934 14.6893C3 15.1287 3 15.8358 3 17.25V30C3 31.4142 3 32.1213 3.43934 32.5606C3.87869 33 4.58579 33 6 33H6.75C8.16421 33 8.87131 33 9.31066 32.5606C9.75 32.1213 9.75 31.4142 9.75 30V17.25C9.75 15.8358 9.75 15.1287 9.31066 14.6893C8.87131 14.25 8.16421 14.25 6.75 14.25Z" stroke="url(#paint0_linear_2028_1388)" strokeWidth="1.5"/>
    <path d="M9.75 6.375C9.75 8.23896 8.23896 9.75 6.375 9.75C4.51104 9.75 3 8.23896 3 6.375C3 4.51104 4.51104 3 6.375 3C8.23896 3 9.75 4.51104 9.75 6.375Z" stroke="url(#paint1_linear_2028_1388)" strokeWidth="1.5"/>
    <path d="M18.489 14.25H17.25C15.8358 14.25 15.1287 14.25 14.6893 14.6893C14.25 15.1287 14.25 15.8358 14.25 17.25V30C14.25 31.4142 14.25 32.1213 14.6893 32.5606C15.1287 33 15.8358 33 17.25 33H18C19.4142 33 20.1213 33 20.5606 32.5606C21 32.1213 21 31.4142 21 30L21.0002 24.7501C21.0002 22.2649 21.7922 20.2502 24.1319 20.2502C25.3016 20.2502 26.25 21.2576 26.25 22.5002V29.2501C26.25 30.6643 26.25 31.3714 26.6894 31.8108C27.1286 32.2501 27.8358 32.2501 29.25 32.2501H29.998C31.4119 32.2501 32.1189 32.2502 32.5582 31.811C32.9976 31.3718 32.9977 30.6648 32.998 29.2509L33.0001 21.0003C33.0001 17.2725 29.4546 14.2504 25.9452 14.2504C23.9474 14.2504 22.1651 15.2296 21.0002 16.761C21 15.8158 21 15.3433 20.7948 14.9925C20.6648 14.7703 20.4797 14.5853 20.2575 14.4553C19.9067 14.25 19.4342 14.25 18.489 14.25Z" stroke="url(#paint2_linear_2028_1388)" strokeWidth="1.5" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_2028_1388" x1="6.375" y1="14.25" x2="6.375" y2="33" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#0A66C2"/>
      </linearGradient>
      <linearGradient id="paint1_linear_2028_1388" x1="6.375" y1="3" x2="6.375" y2="9.75" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#0A66C2"/>
      </linearGradient>
      <linearGradient id="paint2_linear_2028_1388" x1="23.6251" y1="14.25" x2="23.6251" y2="33" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#0A66C2"/>
      </linearGradient>
    </defs>
  </svg>
);

export const LinkedinFill = ({className, ...rest}: TIconsProps) => (
  <SvgIcon component={LinkedinFillSvg} className={clsx(className, '!align-middle')} {...rest} />
);
