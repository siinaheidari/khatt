'use client'

import appLogo from "../../../public/images/appLogo.svg"
import Image from "next/image";

//@ts-ignore
import {Link} from "react-scroll";

const Header = () => {


  return (
    <>
      <div className={"flex justify-between items-center pt-[20px] pb-8 px-[39px]"}>
        <Image src={appLogo} alt={'appLogo'} className={""}/>
        <div className={"flex justify-center gap-[32px] text-neutral text-buttonTextSmall [&>a]:text-neutral "}>
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
        <div className={"text-white text-buttonTextSmall hover:text-primary-dark cursor-pointer"}>
          EN
        </div>
      </div>
      <div className={"bg-[linear-gradient(90deg,#5D5D5D_0%,#888_50%,#5D5D5D_100%)] w-full h-[1px]"}/>
    </>
  );
};

export default Header;