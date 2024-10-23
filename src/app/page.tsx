'use client'

import Header from "./components/header";
import MainSection from "./components/main-section";
import PageParticles from "./components/particles";
import Tilt from 'react-parallax-tilt';
import AboutUS from "./components/about-us";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import Services from "./components/services";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";
import mainSectionBanner from "/public/images/main-Section.svg"
import {useEffect, useRef, useState} from "react";

import WhatWeDo from "@/app/components/what-we-do";
import Lottie from "lottie-react";
import upLottie from "../../public/lottie/up.json";
import {clsx} from "clsx";

const Page = () => {


  const targetRef = useRef<any>();
  // const {scrollYProgress} = useScroll({target: targetRef})
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])


  const [showScrollTop, setShowScrollTop] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >1300) {

        setShowScrollTop(true)
      }
      else {
        setShowScrollTop(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>


      <div className={"relative  bg-black"}>
        <div className={" w-full max-w-[1240px] px-[24px]  mx-auto"}>
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

      </div>
      <div className={"bg-[linear-gradient(#070707,#070707_68%,#fff_0,#fff)] "}>
        <div className={" w-full !max-w-[1240px] mx-auto px-[24px]"}>
          <SimpleParallax scale={1.2}>
            <Image src={mainSectionBanner} alt="image"
                   className={"mx-auto "}/>
          </SimpleParallax>
        </div>

      </div>
      <div id="aboutUS" className={" px-[24px]"}>
        <AboutUS/>
      </div>


      <div id="whatWeDo" ref={targetRef} className={""}>
        <WhatWeDo/>
      </div>



      <div id="services" className={"bg-black px-[24px] "}>
        <Services/>
      </div>
      <div className={"bg-white  px-[24px] "}>
        <ContactUs/>
      </div>
      <div className={" px-[24px] bg-black relative z-20"}>
        <Footer/>
      </div>

      <div onClick={() => window.scrollTo(0, 0)} className={ clsx("opacity-0  cursor-pointer transition-all duration-1000",{"!opacity-100 fixed bottom-40 left-24":showScrollTop}) }>
        <Lottie className={" w-full max-w-[40px] "} animationData={upLottie}/>
      </div>

    </>
  );
};

export default Page;
