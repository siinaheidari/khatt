import {FC} from "react";
import {clsx} from "clsx";

const DownLine:FC<{className?:string}> = ({className}) => {
  return (
    <div className={clsx("relative h-[140px] mb-16 w-[1px]",className) }>
      <div className={"bg-gradient-to-b from-white to-[#A2A2A2] h-[140px] w-[1px]"}/>
      <div className={"bg-[#A2A2A2] size-[7px] absolute left-[-3px] rotate-45"}/>
    </div>
  );
};

export default DownLine;
