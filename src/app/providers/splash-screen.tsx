'use client';


import {FC, PropsWithChildren, useEffect, useState} from 'react';
import khatLogo from '../../../public/images/appLogo.svg'
import Image from "next/image";
import {clsx} from "clsx";
import {useLockBodyScroll} from "react-use";

const SplashScreen: FC<PropsWithChildren> = ({children}) => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplashScreenVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useLockBodyScroll(splashScreenVisible)


  useEffect(() => {

    return () => {
        window?.scroll({top:0})
    };
  }, []);

  return (
    <>
      {
        splashScreenVisible && <div className="bg-black fixed z-999 inset-0 w-full h-dvh center !overflow-hidden">
          <div data-aos="fade-up" data-aos-duration="1000" className="text-bodySm text-white items-center size-[250px] ">
            <Image src={khatLogo} alt={'khatLogo'} className={"size-full"}/>
          </div>
        </div>
      }
      <div className={clsx({"invisible": splashScreenVisible})}>
        {children}
      </div>
    </>

  );


};

export default SplashScreen;
