import {LineArrowLeft} from "../../../templates/icons/line-arrow-left";
import StaggerText from "react-stagger-text";
//@ts-ignore
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
import {clsx} from "clsx";

//bg-[linear-gradient(158deg,#dc832e_13.94%,#FFD60A_111.1%)]

const MainSection = () => {

  const {t,i18n:{language}} = useTranslation('common')


  return (
    <>
      <div className={"text-white text-h1  mx-auto text-center w-full max-w-[818px]"}>
        <div className={"!font-cairo max-md:text-h3"}>لورم ایپسوم برای</div>
        <div
          className={"text-primary max-md:text-h2 !font-cairo bg-primary inline-block text-transparent bg-clip-text"}>طراحی
          متون ساختگی
        </div>

        <div className={"text-bodyText1  text-white mt-[56px] text-center"}>
          <StaggerText startDelay={1500}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </StaggerText>

        </div>


        <div className={"border border-neutral rounded-[20px] group text-buttonTextLarge overflow-hidden mt-[72px] mx-auto px-[24px] h-[70px] center w-fit cursor-pointer hover:bg-primary [&>a]:hover:!text-black duration-500 [&>a]:!text-neutralLightest"}>
          <Link
            duration={5000}
            to="contactUs"
          >
            {t('Let’s Talk')}
            <LineArrowLeft className={clsx( "ms-24 group-hover:!stroke-black stroke-white duration-200",{"rotate-180 group-hover:rotate-90 !d-ltr":language==="en","group-hover:-rotate-90":language==="fa"})}/>
          </Link>

        </div>

      </div>
    </>
  );
};

export default MainSection;
