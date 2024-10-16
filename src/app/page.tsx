'use client'

import Header from "./components/header";
import MainSection from "./components/main-section";
import PageParticles from "./components/particles";
import Tilt from 'react-parallax-tilt';
import AboutUS from "./components/about-us";
import WhatWeDo from "./components/what-we-do";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import test from "../../public/images/header_img.webp"
import Services from "./components/services";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";
import {useEffect} from "react";



const Page = () => {





  return (
    <>
      <div className={"relative mx-auto w-full max-w-[1200px] px-[24px] "}>
        <div className={"z-100 relative"}>
          <Header/>
        </div>
        <div className={"relative"}>
          <PageParticles/>
        </div>
        <div className={"relative z-10 pt-[44px] pb-[56px]"}>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <MainSection/>
          </Tilt>
        </div>
      </div>

      <div className={"bg-[linear-gradient(#070707,#070707_68%,#fff_0,#fff)] "}>

        <SimpleParallax >
          <Image src={test} alt="image" height={504} className={"mx-auto max-h-[504px] w-full max-w-[788.5px]"}/>
        </SimpleParallax>

        {/*         <Parallax bgImage="/images/header_img.webp" className={"h-[502px] min-h-[502px] !w-full max-w-[1140px] mx-auto"}
                  strength={100}>

               </Parallax>*/}

      </div>
      <div id="aboutUS" className={"bg-white "}>
        <AboutUS/>
      </div>
      <div id="whatWeDo" className={"bg-white relative"}>
        <WhatWeDo/>
      </div>

      <div id="services" className={" pt-[164px] pb-[100px]"}>
        <Services/>
      </div>

      <div id="contactUs" className={"bg-white "}>
        <ContactUs/>
      </div>
      <div className={" "}>
        <Footer/>
      </div>
    </>
  );
};

export default Page;
