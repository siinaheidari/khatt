import {FC, PropsWithChildren, useState} from "react";
import {Form} from "antd";
import {clsx} from "clsx";
const FloatLabel:FC<PropsWithChildren<{label?:string,name:string,className?:string,value?:any}>> = ({children, label, name,className,value}) => {

  const formRef=Form.useFormInstance()

  const getValue = Form.useWatch(name, formRef)||value

  const [focus, setFocus] = useState(false);

  const labelClass = focus || ( getValue &&  getValue.length !== 0) ? "label label-float" : "label";

  return (
    <div
      className={clsx("float-label w-full",className)}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
