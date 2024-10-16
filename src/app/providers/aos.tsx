'use client';

import {FC, PropsWithChildren, useEffect} from "react";
import 'aos/dist/aos.css';
//@ts-ignore
import AOS from "aos";
const AosProvider:FC<PropsWithChildren> = ({children}) => {

  useEffect(() => {
    AOS.init({
/*      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,*/
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default AosProvider;
