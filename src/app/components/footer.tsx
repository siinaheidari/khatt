import aboutUsBg from "/public/images/aboutUsLogo.svg"

import Image from "next/image";
import {Instagram} from "../../templates/icons/instagram";
import {Linkedin} from "../../templates/icons/linkedin";
import {Telegram} from "../../templates/icons/telegram";
import {XIcon} from "../../templates/icons/x";
import {Mailbox} from "../../templates/icons/mailbox";
import {Youtube} from "../../templates/icons/youtube";
import {YoutubeFill} from "@/templates/icons/youtube-fill";
import {useState} from "react";
import {InstagramFill} from "@/templates/icons/instagram-fill";
import {LinkedinFill} from "@/templates/icons/linkedin-fill";
import {XFill} from "@/templates/icons/x-fill";
//@ts-ignore
import {Link} from "react-scroll";


const Footer = () => {

  const [icons, setIcons] = useState("")

  console.log(icons)

  return (
    <div className={"pt-[120px]"}>
      <div className={"w-full max-w-[1240px] mx-auto"}>
        <div className={"mb-[84px]"}>
          <Image src={aboutUsBg} alt={'aboutUsBg'} className={"mx-auto"}/>
        </div>
        <div className={"flex justify-between gap-[32px] text-neutral text-buttonTextSmall px-32 w-full max-w-[860px] mx-auto [&>a]:text-neutral"}>
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
        <div className={"flex item-center gap-8 justify-between mt-[56px] mx-auto w-full max-w-[860px]"}>
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
