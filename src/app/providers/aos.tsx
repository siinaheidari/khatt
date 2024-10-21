'use client';

import {FC, PropsWithChildren, useEffect} from "react";
import 'aos/dist/aos.css';
//@ts-ignore
import AOS from "aos";
const AosProvider:FC<PropsWithChildren> = ({children}) => {

  useEffect(() => {
    AOS.init({
      duration: 600,


    });
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default AosProvider;
