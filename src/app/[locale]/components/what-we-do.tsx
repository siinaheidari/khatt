import {motion} from "framer-motion";
import whatWeDo from "/public/images/what-we-do.png"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import {useTranslation} from "react-i18next";

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation('common')
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // @ts-ignore
      const containerTop = containerRef.current.offsetTop;
      // @ts-ignore
      const containerHeight = containerRef.current.offsetHeight;


      if (scrollPosition > containerTop) {
        const startScroll = containerTop;
        const endScroll = containerTop + containerHeight;
        const scrollRange = endScroll - startScroll;

        const currentScroll = scrollPosition - startScroll;

        const quarter = scrollRange / 4;

        if (currentScroll < quarter) {
          setActiveIndex(0);
        } else if (currentScroll < 2 * quarter) {
          setActiveIndex(1);
        } else if (currentScroll < 3 * quarter) {
          setActiveIndex(2);
        } else {
          setActiveIndex(3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={'bg-white h-[400vh] relative w-full px-[24px]'}>
      <div
        className={" w-full max-w-[1240px] mx-auto md:center md:h-screen !sticky top-0 flex items-center justify-start !overflow-hidden max-md:!mb-64"}>
        <div className={"flex justify-between max-md:flex-col items-center gap-x-[61px]"}>
          <Image layout={"responsive"} src={whatWeDo} alt="whatWeDo"
                 className={"mx-auto  max-h-[671px] !min-h-[400px] w-full max-w-[474px] min-w-[374px] max-md:hidden"}
                 placeholder={"blur"}/>
          <div className={"w-full text-caption max-lg:text-bodyText1 text-bodyText2 space-y-[24px]"}>
            <div className={"!text-h2 !font-cairo !text-black max-md:text-h3 max-lg:!text-h3 max-md:py-24 "}>
              {t('test')}
            </div>
            <motion.div
              key={activeIndex}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
            >
            </motion.div>
            <div className={clsx('opacity-10 transition-all duration-1000', {'!opacity-100': activeIndex >= 1})}>
              <div className={"text-primary mt-24"}>
                01.
              </div>
              <div className={""}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </div>
            </div>

            <div className={clsx('opacity-10 transition-all duration-1000', {'!opacity-100': activeIndex >= 2})}
                 data-aos-duration="1000">
              <div className={"text-primary  mt-24"}>
                02.
              </div>
              <div className={""}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                متون بلکه روزنامه و مجله
              </div>
            </div>

            <div className={clsx('opacity-10 transition-all duration-1000', {'!opacity-100': activeIndex >= 3})}>
              <div className={"text-primary  "}>
                03.
              </div>
              <div className={""}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                متون بلکه روزنامه و مجله در ستون
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
