'use client';


import {FC, PropsWithChildren, useEffect, useState} from 'react';
import khatLogo from '../../../public/images/appLogo.svg'
import Image from "next/image";
import {clsx} from "clsx";

const SplashScreen: FC<PropsWithChildren> = ({children}) => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => setSplashScreenVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    return () => {
      window?.scroll({top: 0})
    };
  }, []);


  return (
    <>
      {
         <div className={clsx("bg-black fixed z-999 inset-0 w-full h-dvh center !overflow-hidden transition-all duration-1000",{"opacity-0 !z-0":!splashScreenVisible})}>
          <div data-aos={'fade-up'} className="text-bodySm text-white items-center size-[250px] ">
            <Image  src={khatLogo} alt={'khatLogo'} className={"size-full"}/>
          </div>
        </div>
      }

      <div className={clsx({"invisible [&>div]:!h-0 [&>div]:!overflow-y-hidden": splashScreenVisible})}>
        {children}
      </div>
    </>

  );


};

export default SplashScreen;
