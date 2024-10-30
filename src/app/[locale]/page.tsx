'use client'


import Tilt from 'react-parallax-tilt';
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import mainSectionBanner from "/public/images/main-Section (3).jpg"
import {useEffect, useRef, useState} from "react";
import Lottie from "lottie-react";
import upLottie from "../../../public/lottie/up.json";
import {clsx} from "clsx";
import dynamic from "next/dynamic";


const Header = dynamic(() => import('./components/header'));
const PageParticles = dynamic(() => import('@/app/[locale]/components/particles'));
const MainSection = dynamic(() => import('@/app/[locale]/components/main-section'));
const AboutUS = dynamic(() => import('@/app/[locale]/components/about-us'));
const WhatWeDo = dynamic(() => import('@/app/[locale]/components/what-we-do'));
const Services = dynamic(() => import('@/app/[locale]/components/services'));
const ContactUs = dynamic(() => import('@/app/[locale]/components/contact-us'));
const Footer = dynamic(() => import('@/app/[locale]/components/footer'));


const Page = () => {

  const targetRef = useRef<any>();
  // const {scrollYProgress} = useScroll({target: targetRef})
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])


  const [showScrollTop, setShowScrollTop] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > 1300) {

        setShowScrollTop(true)
      } else {
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

      <div className={"relative bg-black"}>
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
            <Image placeholder={"blur"} layout={"responsive"} loading="lazy" height={500} src={mainSectionBanner} alt="image"
                   className={"!aspect-auto mx-auto max-md:h-[500px] max-md:object-cover "}/>
          </SimpleParallax>
        </div>
      </div>
      <div id="aboutUS" className={" px-[24px] bg-[#fff]"}>
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

      <div onClick={() => window.scrollTo(0, 0)}
           className={clsx("opacity-0  cursor-pointer transition-all duration-1000 z-[900]", {"!opacity-100 fixed bottom-40 left-24": showScrollTop})}>
        <Lottie className={" w-full max-w-[40px] "} animationData={upLottie}/>
      </div>

    </>
  );
};

export default Page;
