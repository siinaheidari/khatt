import aboutUsBg from "/public/images/aboutUsLogo.svg"
import Image from "next/image";
import DownLine from "@/templates/ui/down-line";

const AboutUS = () => {


  return (
    <div className={"center h-screen relative w-full max-w-[1240px] mx-auto"}>
      <div data-aos={"fade-down"} className={"absolute !top-[90px] !end-[100px]"}>
        <DownLine/>
      </div>

      <div className={"flex w-full justify-between items-center gap-[61px]"}>
        <div className={""}>
          <div data-aos={"fade-right"} className={"text-h2 !font-cairo"}>
            درباره ما
          </div>
          <div data-aos={"fade-right"} className={" w-full max-w-[664px] text-caption text-bodyText2"}>
            <div className={""}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
              متنوع.
            </div>
            <div className={" mt-[16px]"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </div>
          </div>
        </div>
        <div data-aos={"fade-left"}>
          <Image src={aboutUsBg} alt={'aboutUsBg'}/>
        </div>

      </div>
      <div data-aos={"fade-down"} className={"absolute !bottom-[-5px] !start-[100px]"}>
        <DownLine/>
      </div>
    </div>

  );
};

export default AboutUS;
