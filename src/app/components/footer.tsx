import aboutUsBg from "/public/images/aboutUsLogo.svg"

import Image from "next/image";
import {Instagram} from "../../templates/icons/instagram";
import {Linkedin} from "../../templates/icons/linkedin";
import {Telegram} from "../../templates/icons/telegram";
import {XIcon} from "../../templates/icons/x";
import {Mailbox} from "../../templates/icons/mailbox";
import {Youtube} from "../../templates/icons/youtube";

const Footer = () => {
  return (
    <div className={"pt-[120px]"}>
      <div className={"w-full max-w-[1240px] mx-auto"}>
        <div  className={"mb-[84px]"}>
          <Image src={aboutUsBg} alt={'aboutUsBg'} className={"mx-auto"}/>
        </div>
        <div
          className={"flex justify-between gap-[32px] text-neutral text-buttonTextSmall px-32 w-full max-w-[860px] mx-auto"}>
          <div>
            درباره ما
          </div>
          <div>
            خدمات
          </div>
          <div>
            نمونه کارها
          </div>
          <div>
            تماس با ما
          </div>
        </div>
        <div className={"flex item-center gap-8 justify-between mt-[56px] mx-auto w-full max-w-[860px]"}>
          <Instagram/>
          <Linkedin/>
          <Telegram/>
          <XIcon/>
          <Youtube/>
          <Mailbox/>
        </div>
      </div>
      <div className={"bg-[linear-gradient(90deg,#5D5D5D_0%,#888_50%,#5D5D5D_100%)] w-full h-[1px] text-white mt-[56px]"}/>
      <div className={"text-white text-center py-[16px]"}>Copyright KHAT Digital Marketing Agency 2024 | Privacy
        Policy
      </div>
    </div>

  );
};

export default Footer;
