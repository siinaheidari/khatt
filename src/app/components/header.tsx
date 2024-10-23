'use client'

import appLogo from "../../../public/images/appLogo.svg"
import Image from "next/image";

//@ts-ignore
import {Link} from "react-scroll";

const Header = () => {


  return (
    <>
      <div className={"flex justify-between items-center pt-[20px] pb-8 px-[39px] max-md:px-24 max-md:!py-0 "}>
        <Image src={appLogo} alt={'appLogo'} className={"hover:transition-all hover:scale-110 hover:ease-in-out hover:duration-300 cursor-pointer"}/>
        <div className={"flex justify-center gap-[48px] text-neutral text-[18px] [&>a]:text-neutral [&>a]:!font-[400] max-md:hidden"}>
          <Link
            to="aboutUS"
          >
            درباره ما
          </Link>

          <Link
            to="whatWeDo"
          >
            خدمات
          </Link>

          <Link
            to="services"
          >
            نمونه کارها
          </Link>

          <Link
            to="contactUs"
          >
            تماس با ما
          </Link>

        </div>
        <div className={"text-white text-buttonTextSmall cursor-pointer font-[400] text-[18px]"}>
          EN
        </div>
      </div>
      <div className={"bg-[linear-gradient(90deg,#5D5D5D_0%,#888_50%,#5D5D5D_100%)] w-full h-[1px]"}/>
    </>
  );
};

export default Header;