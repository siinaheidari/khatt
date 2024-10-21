'use client'

import Header from "./components/header";
import MainSection from "./components/main-section";
import PageParticles from "./components/particles";
import Tilt from 'react-parallax-tilt';
import AboutUS from "./components/about-us";
import WhatWeDo from "./components/what-we-do";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import Services from "./components/services";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";
import mainSectionBanner from "/public/images/main-Section.svg"

import {useRef} from "react";

const Page = () => {

  const scrollbarRef = useRef(null);

  return (
    <>

      {/*<SmoothScroll ref={scrollbarRef}>*/}

      <div className={"relative mx-auto w-full max-w-[1240px] px-[24px] "}>
        <div className={"z-100 relative"}>
          <Header/>
        </div>
        <div className={"relative"}>
          <PageParticles/>
        </div>
        <div className={"relative z-10 pt-[44px] pb-[56px]"}>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03} transitionSpeed={3000}>
            <MainSection/>
          </Tilt>
        </div>
      </div>
      <div className={"bg-[linear-gradient(#070707,#070707_68%,#fff_0,#fff)] "}>
        <div className={" w-full !max-w-[1240px] mx-auto px-[24px]"}>
          <SimpleParallax scale={1.3}>
            <Image src={mainSectionBanner} alt="image"
                   className={"mx-auto "}/>
          </SimpleParallax>
        </div>


      </div>
      <div id="aboutUS" className={"!bg-white px-[24px]"}>

        <AboutUS/>
      </div>
      <div id="whatWeDo" className={"bg-white relative px-[24px] "}>
        <WhatWeDo/>
      </div>
      <div id="services" className={" px-[24px] "}>
        <Services/>
      </div>
      <div id="contactUs" className={"bg-white  px-[24px] "}>
        <ContactUs/>
      </div>
      <div className={" px-[24px]  "}>
        <Footer/>
      </div>
      {/*</SmoothScroll>*/}
    </>
  );
};

export default Page;
