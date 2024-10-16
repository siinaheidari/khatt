
import aboutUsBg from "/public/images/aboutUsLogo.svg"
import Image from "next/image";

const AboutUS = () => {
  return (
    <div className={"center h-screen"}>
      <div className={" w-full max-w-[1104px] mx-auto"}>
        <div data-aos="fade-left" className={"text-h2 !font-cairo"}>
          درباره ما
        </div>
        <div className={"flex justify-between gap-[61px]"}>
          <div data-aos="fade-left" className={" w-full max-w-[664px] text-caption"}>
            <div className={"text-bodyText1"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.
            </div>
            <div className={"text-bodyText1 mt-[16px]"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </div>
          </div>
          <div data-aos="fade-right">
            <Image src={aboutUsBg} alt={'aboutUsBg'}/>
          </div>

        </div>

      </div>
    </div>

  );
};

export default AboutUS;
