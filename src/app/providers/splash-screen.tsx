'use client';


import {FC, PropsWithChildren, useEffect, useState} from 'react';
import khatLogo from '../../../public/images/appLogo.svg'
import Image from "next/image";
import {clsx} from "clsx";

const SplashScreen: FC<PropsWithChildren> = ({children}) => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  console.log(splashScreenVisible)

  useEffect(() => {
    const timer = setTimeout(() => setSplashScreenVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // useLockBodyScroll(splashScreenVisible)

  useEffect(() => {
    return () => {
      window?.scroll({top: 0})
    };
  }, []);


  return (
    <>
      {
        splashScreenVisible && <div className="bg-black fixed z-999 inset-0 w-full h-dvh center !overflow-hidden">
          <div className="text-bodySm text-white items-center size-[250px] ">
            <Image src={khatLogo} alt={'khatLogo'} className={"size-full"}/>
          </div>
        </div>
      }

      <div className={clsx({"invisible [&>div]:h-0": splashScreenVisible})}>
        {children}
      </div>
    </>

  );


};

export default SplashScreen;
