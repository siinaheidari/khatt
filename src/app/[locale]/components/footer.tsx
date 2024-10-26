import aboutUsBg from "/public/images/aboutUsLogo.svg"

import Image from "next/image";

import {useState} from "react";

//@ts-ignore
import {Link} from "react-scroll";
import {InstagramFill} from "@/templates/icons/instagram-fill";
import {Instagram} from "@/templates/icons/instagram";
import {LinkedinFill} from "@/templates/icons/linkedin-fill";
import {Linkedin} from "@/templates/icons/linkedin";
import {Telegram} from "@/templates/icons/telegram";
import {XIcon} from "@/templates/icons/x";
import {XFill} from "@/templates/icons/x-fill";
import {Youtube} from "@/templates/icons/youtube";
import {YoutubeFill} from "@/templates/icons/youtube-fill";
import {Mailbox} from "@/templates/icons/mailbox";


const Footer = () => {

  const [icons, setIcons] = useState("")



  return (
    <div className={""}>
      <div className={"w-full max-w-[1240px] mx-auto"}>
        <div className={"mt-[64px] mb-[50px]"}>
          <Image src={aboutUsBg} alt={'aboutUsBg'} className={"mx-auto size-[87px]"}/>
        </div>
        <div className={"flex gap-[5vw] lg:gap-[112px] justify-center max-md:justify-between text-neutral w-full mx-auto text-[18px]  [&>a]:text-neutral [&>a]:!font-[400]"}>
          <Link
            to="aboutUS"
          >
            درباره ما
          </Link>

          <Link
            to="whatWeDo"
          >
            خدمات
          </Link>

          <Link
            to="services"
          >
            نمونه کارها
          </Link>

          <Link
            to="contactUs"
          >
            تماس با ما
          </Link>

        </div>
        <div className={"flex item-center justify-center max-md:justify-between mt-[56px] gap-[5vw] lg:gap-[89px]"}>
          <div onMouseEnter={() => setIcons("instagram")} onMouseLeave={() => setIcons("")}>
            {icons!=="instagram"?
              <Instagram/>
              :<InstagramFill className={" hover:scale-125 duration-200 cursor-pointer"}/>
            }
          </div>

          <div onMouseEnter={() => setIcons("linkedin")} onMouseLeave={() => setIcons("")}>
            {icons!=="linkedin"?
              <Linkedin/>
              :<LinkedinFill className={"hover:scale-125 duration-200 cursor-pointer"}/>
            }
          </div>

          <Telegram className={"stroke-neutralLightest hover:stroke-[#24A1DE] hover:scale-125 duration-200 cursor-pointer"}/>
          <div onMouseEnter={() => setIcons("x")} onMouseLeave={() => setIcons("")}>
            {icons!=="x"?
              <XIcon/>
              :<XFill className={"hover:scale-125 duration-200 cursor-pointer"}/>
            }
          </div>

          <div onMouseEnter={() => setIcons("youtube")} onMouseLeave={() => setIcons("")}>
            {icons!=="youtube"?
              <Youtube/>
              :<YoutubeFill className={"hover:scale-125 duration-200 cursor-pointer"}/>
            }
          </div>


          <Mailbox className={"stroke-neutralLightest hover:stroke-primary-dark hover:scale-125 duration-200 cursor-pointer"}/>

        </div>
      </div>
      <div
        className={"bg-[linear-gradient(90deg,#5D5D5D_0%,#888_50%,#5D5D5D_100%)] w-full h-[1px] text-white mt-[56px]"}/>
      <div className={" text-white text-[12px] font-[400] text-center pt-[16px] pb-[55px]"}>Copyright KHAT Digital Marketing Agency 2024 | Privacy
        Policy
      </div>
    </div>

  );
};

export default Footer;
