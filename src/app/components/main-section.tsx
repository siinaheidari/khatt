import {LineArrowLeft} from "../../templates/icons/line-arrow-left";
import StaggerText from "react-stagger-text";
//@ts-ignore
import {Link} from "react-scroll";


const MainSection = () => {
  return (
    <>
      <div className={"text-white text-h1 mx-auto text-center w-full max-w-[818px]"}>
        <div className={"!font-cairo"}>لورم ایپسوم برای</div>
        <div
          className={"text-primary !font-cairo bg-[linear-gradient(158deg,#dc832e_13.94%,#FFD60A_111.1%)] inline-block text-transparent bg-clip-text"}>طراحی
          متون ساختگی
        </div>

        <div className={"text-bodyText1 text-white mt-[56px] text-center"}>
          <StaggerText startDelay={1500}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </StaggerText>

        </div>

        <div className={"border border-neutral rounded-[20px] group text-buttonTextLarge mt-[72px] mx-auto px-[24px] py-18 w-fit cursor-pointer hover:bg-primary-dark [&>a]:hover:!text-black duration-200 [&>a]:!text-white"}>
          <Link
            duration={5000}
            to="contactUs"
          >
            ما اینجاییم
            <LineArrowLeft className="ms-24 group-hover:!stroke-black stroke-white group-hover:-rotate-90 duration-200"/>
          </Link>

        </div>

      </div>
    </>
  );
};

export default MainSection;
