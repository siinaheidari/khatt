'use client'

import appLogo from "../../../../public/images/appLogo.svg"
import Image from "next/image";

//@ts-ignore
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "@/app/[locale]/components/language-switcher";
import {Suspense} from "react";

const Header = () => {
  const {t} = useTranslation('common')

  return (
    <>
      <div className={"flex justify-between items-center pt-[20px] pb-8 px-[39px] max-md:px-24 max-md:!py-0 "}>
        <Image src={appLogo} alt={'appLogo'} className={"hover:transition-all hover:scale-110 hover:ease-in-out hover:duration-300 cursor-pointer"}/>
        <div className={"flex justify-center gap-[48px] text-neutral text-[18px] [&>a]:text-neutral [&>a]:!font-[400] max-md:hidden"}>
          <Link
            to="aboutUS"
          >
            {t('aboutUs')}

          </Link>

          <Link
            to="whatWeDo"
          >
            {t('whatWeDo')}
          </Link>

          <Link
            to="services"
          >
            {t('services')}
          </Link>

          <Link
            to="contactUs"
          >
            {t('contactUs')}
          </Link>

        </div>
        <Suspense>
          <LanguageSwitcher/>
        </Suspense>

      </div>
      <div className={"bg-[linear-gradient(90deg,#5D5D5D_0%,#888_50%,#5D5D5D_100%)] w-full h-[1px]"}/>
    </>
  );
};

export default Header;