import aboutUsBg from "/public/images/aboutUsLogo.svg"
import Image from "next/image";
import DownLine from "@/templates/ui/down-line";

const AboutUS = () => {


  return (
    <div className={"center min-h-screen relative w-full max-w-[1240px] mx-auto !overflow-hidden"}>
      <div data-aos={"fade-down"} className={"absolute !top-[90px] !end-[100px] max-md:!top-0 max-md:!end-[30px]"}>
        <DownLine/>
      </div>


      <div className={"flex w-full max-md:flex-col justify-between items-center gap-[61px] max-md:!py-[180px]"}>
        <div className={""}>
          <div data-aos={"fade-right"} className={"text-h2 !font-cairo max-md:text-h3  max-md:pb-24"}>
            درباره ما
          </div>
          <div data-aos={"fade-right"} className={" w-full max-w-[664px] text-caption text-bodyText2  max-md:text-bodyText1"}>
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
          <Image src={aboutUsBg} alt={'aboutUsBg'} className={"max-md:size-[200px]"}/>
        </div>

      </div>
      <div data-aos={"fade-down"} className={"absolute !bottom-[-5px] !start-[100px] max-md:!bottom-0 max-md:!start-[30px]"}>
        <DownLine/>
      </div>
    </div>

  );
};

export default AboutUS;
