import whatWeDo from "/public/images/what-we-do.svg"
import SimpleParallax from "simple-parallax-js";
import Image from "next/image";

const WhatWeDo = () => {
  return (
        <div className={" w-full max-w-[1240px] mx-auto center h-screen"}>
          <div className={"flex justify-between gap-x-[61px]"}>
              <Image data-aos={"flip-left"} src={whatWeDo} height={696} alt="whatWeDo"
                     className={"mx-auto "}/>
            <div className={"w-full text-caption text-bodyText2 space-y-[24px]"}>
              <div data-aos={"fade-up"} className={"text-h2 !font-cairo !text-black"}>
                ما چیکار می کنیم؟
              </div>
              <div data-aos={"fade-up"}>
                <div className={"text-primary  mt-24"}>
                  01.
                </div>
                <div  className={""}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                  متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع.
                </div>
              </div>

              <div data-aos={"fade-up"} data-aos-duration="1000">
                <div className={"text-primary  mt-24" }>
                  02.
                </div>
                <div className={""}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                  متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع.
                </div>
              </div>

              <div data-aos={"fade-up"}>
                <div className={"text-primary  "}>
                  03.
                </div>
                <div className={""}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                  متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع.
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default WhatWeDo;
