import { motion } from "framer-motion";
import whatWeDo from "/public/images/what-we-do.svg"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import TypedComponent from "@/app/components/typed-component";

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null); // برای گرفتن ارتفاع دقیق دیو والد

  console.log(activeIndex)

  // تابعی که اسکرول رو مانیتور می‌کنه
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight; // مقدار اسکرول فعلی به همراه ارتفاع پنجره
      // @ts-ignore
      const containerTop = containerRef.current.offsetTop; // موقعیت بالای دیو 500vh نسبت به صفحه
      // @ts-ignore
      const containerHeight = containerRef.current.offsetHeight; // ارتفاع دیو والد (500vh)

      // بررسی کنیم که وقتی دیو وارد صفحه شد، محاسبات اسکرول رو انجام بدیم
      if (scrollPosition > containerTop) {
        const startScroll = containerTop; // شروع اسکرول دیو
        const endScroll = containerTop + containerHeight; // پایان اسکرول دیو
        const scrollRange = endScroll - startScroll; // بازه اسکرول دیو

        const currentScroll = scrollPosition - startScroll; // مقدار اسکرولی که داخل دیو انجام شده

        // تقسیم بندی اسکرول برای نمایش هر بخش
        const quarter = scrollRange / 4; // هر بخش 1/4 از ارتفاع کل دیو 500vh

        if (currentScroll < quarter) {
          setActiveIndex(0); // بخش اول
        } else if (currentScroll < 2 * quarter) {
          setActiveIndex(1); // بخش دوم
        } else if (currentScroll < 3 * quarter) {
          setActiveIndex(2); // بخش سوم
        } else {
          setActiveIndex(3); // بخش چهارم
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={'bg-white h-[400vh] relative w-full'}>
    <div className={" w-full max-w-[1240px] mx-auto center h-screen  !sticky top-0 flex items-center justify-start !overflow-hidden"}>
      <div className={"flex justify-between gap-x-[61px]"}>
        <Image data-aos={"zoom-in"} src={whatWeDo} height={696} alt="whatWeDo"
               className={"mx-auto "}/>
        <div className={"w-full text-caption text-bodyText2 space-y-[24px]"}>
          <div data-aos={"fade-up"} className={"text-h2 !font-cairo !text-black"}>
            ما چیکار می کنیم؟
          </div>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            // style={{ width: '80%', height: '80%', backgroundColor: 'lightblue' }}
          >
          </motion.div>
          <div data-aos-={"fade-up"} >
            <div className={"text-primary  mt-24"}>
              01.
            </div>
            <div className={"relative"}>
              <div className=' text-black/10'>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.
              </div>

              {activeIndex >= 1 &&
                <TypedComponent className={clsx('absolute inset-0')} content={'              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.'} />
              }

            </div>
          </div>

          <div data-ao-s={"fade-up"}  data-aos-duration="1000">
            <div className={"text-primary  mt-24"}>
              02.
            </div>
            <div className={"relative"}>
              <div className=' text-black/10'>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.
              </div>

              {activeIndex >= 2 &&
                <TypedComponent className={clsx('absolute inset-0')} content={'              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.'} />
              }
            </div>
          </div>

          <div data-aos-={"fade-up"} >
            <div className={"text-primary  "}>
              03.
            </div>
            <div className={"relative"}>
              <div className=' text-black/10'>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.
              </div>

              {activeIndex >= 3 &&
                <TypedComponent className={clsx('absolute inset-0')} content={'              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.'} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhatWeDo;
