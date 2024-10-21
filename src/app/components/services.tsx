import Lottie from "lottie-react";
import appLottie from "../../../public/lottie/pc.json"

const Services = () => {
  return (
    <div className={" w-full max-w-[1240px] mx-auto pb-[88px] text-white text-bodyText2 overflow-hidden"}>
      <div data-aos={"fade-down"} className={" h-[140px]  w-[1px] mx-auto mb-24" }>
        <div className={"bg-gradient-to-b from-neutralDarker to-white h-[130px] w-[1px]"}/>
        <div className={"bg-white size-[7px] absolute left-[-3px] rotate-45"}/>
      </div>
      <div className={"h-screen"}>
        <div>
          <div data-aos={"fade-up"} className={"!text-h2 !font-cairo text-center"}>
            خدمات ما
          </div>
          <div data-aos={"fade-up"} className={" !font-cairo text-center text-bodyText1"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </div>
        </div>
        <div>

          <div className={"flex justify-between items-center gap-[60px] mt-[102px]"}>


            <Lottie data-aos={"flip-right"} className={" w-full max-w-[749px] "} animationData={appLottie}/>

            <div data-aos={"fade-left"} className={"w-full max-w-[664px] text-white "}>
              <div
                className={"bg-[linear-gradient(90deg,#FFE943_0%,#CE9300_50%,#FFD60A_100%)] inline-block text-transparent bg-clip-text !text-h3"}>
                لورم ایپسوم ساختگی
              </div>
              <div className={""}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                متنوع
                با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className={"h-screen flex justify-between items-center gap-x-[60px]"}>
        <div data-aos={"fade-left"} className={" w-full max-w-[664px] text-white "}>
          <div
            className={"bg-[linear-gradient(90deg,#FFE943_0%,#CE9300_50%,#FFD60A_100%)]  inline-block text-transparent bg-clip-text !text-h3"}>
            لورم ایپسوم ساختگی
          </div>
          <div className={""}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          </div>

        </div>
        <Lottie data-aos={"flip-left"} className={" w-full max-w-[749px] "} animationData={appLottie}/>
      </div>
      <div className={"h-screen flex justify-between items-center gap-[60px] mt-[20px]"}>
        <Lottie data-aos={"flip-right"} className={" w-full max-w-[749px] "} animationData={appLottie}/>
        <div data-aos={"flip-right"} className={" w-full max-w-[664px] text-white "}>
          <div
            className={"bg-[linear-gradient(90deg,#FFE943_0%,#CE9300_50%,#FFD60A_100%)]  inline-block text-transparent bg-clip-text !text-h3"}>
            لورم ایپسوم ساختگی
          </div>

          <div className={"text-bodyText2"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          </div>

        </div>

      </div>
    </div>
  );
};

export default Services;
