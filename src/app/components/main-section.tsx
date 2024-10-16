import {LineArrowLeft} from "../../templates/icons/line-arrow-left";
import StaggerText from "react-stagger-text";

const MainSection = () => {
  return (
    <>
      <div className={"text-white text-h1 mx-auto text-center w-full max-w-[818px]"}>
        <div className={"!font-cairo"}>لورم ایپسوم برای </div>
        <div className={"text-primary !font-cairo bg-[linear-gradient(158deg,#dc832e_13.94%,#FFD60A_111.1%)] inline-block text-transparent bg-clip-text"}>طراحی متون ساختگی</div>

        <div className={"text-bodyText1 text-white mt-[56px] text-center"}>
          <StaggerText startDelay={1500}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </StaggerText>

        </div>

        <div className={"border border-neutral text-buttonTextLarge mt-[72px] mx-auto px-[24px] py-18 w-fit cursor-pointer hover:bg-primary-dark "}>
          ما اینجاییم
          <LineArrowLeft className="ms-24"/>
        </div>

      </div>
    </>
  );
};

export default MainSection;
