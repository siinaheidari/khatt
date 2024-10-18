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
        <div className={"flex justify-center gap-[32px] text-neutral text-buttonTextSmall group group-hover:text-primary-dark [&>a]:text-white "}>
          <Link
            to="aboutUS"
          >
            درباره ما
          </Link>

          <Link
            activeClass="active"
            to="whatWeDo"



          >
            خدمات
          </Link>

          <Link
            activeClass="active"
            to="services"

            smooth={true}

            // offset={50}
          >
            نمونه کارها
          </Link>

          <Link
            activeClass="active"
            to="contactUs"
            spy={true}
            smooth={true}
            duration={500}
            // offset={50}
          >
            تماس با ما
          </Link>

        </div>
        <div className={"text-white text-buttonTextSmall"}>
          EN
        </div>
      </div>
      <div className={"bg-[linear-gradient(90deg,#5D5D5D_0%,#888_50%,#5D5D5D_100%)] w-full h-[1px]"}/>
    </>
  );
};

export default Header;

