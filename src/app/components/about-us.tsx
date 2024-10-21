import aboutUsBg from "/public/images/aboutUsLogo.svg"
import Image from "next/image";

const AboutUS = () => {


  return (
    <div className={"center h-screen relative"}>
      <div className={" w-full max-w-[1240px] mx-auto"}>
        <div data-aos={"fade-right"} className={"text-h2 !font-cairo"}>
          درباره ما
        </div>
        <div className={"flex justify-between gap-[61px]"}>
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
          <div data-aos={"fade-left"}>
            <Image src={aboutUsBg} alt={'aboutUsBg'}/>
          </div>

        </div>

      </div>
    </div>

  );
};

export default AboutUS;
