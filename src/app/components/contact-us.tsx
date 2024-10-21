import {Form, Input} from "antd";
import FloatLabel from "../../templates/ui/float-label";
import {DoubleCheck} from "@/templates/icons/double-check";
import {useState} from "react";
import {clsx} from "clsx";
import DownLine from "@/templates/ui/down-line";



type TServices = {
  title: string,
  id: string
}

const ContactUs = () => {
  const [formRef] = Form.useForm();
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [saveError, setSaveError] = useState<string[]>([]);
  const handleSelectedServices = (value: TServices) => setSelectedServices(current => current?.includes(value?.id) ?
    current?.filter(item => item !== value?.id) : ([...current, value?.id]));


  const handleSubmit = async () => {
    try {
      setSaveError([])
      await formRef.validateFields()
      if (!selectedServices.length) {
        alert("ssssssssssssss")
      }
    } catch (e: any) {
      setSaveError(e?.errorFields?.map((item: any) => item?.name[0]))

    }
  }



  const services: TServices[] = [
    {
      title: "طراحی سایت",
      id: "1"
    },
    {
      title: "طراحی اپلیکیشن",
      id: "2"
    },
    {
      title: "آنالیز و بهینه سازی",
      id: "3"
    },
    {
      title: "استراتژی و برندینگ",
      id: "4"
    },
    {
      title: "مشاوره و راه اندازی کسب و کار",
      id: "5"
    },
    {
      title: "مدیریت شبکه های اجتماعی",
      id: "6"
    },
    {
      title: "اینفلوئنسر مارکتینگ",
      id: "7"
    },
    {
      title: "تولید محتوای متنی و تصویری",
      id: "8"
    },
    {
      title: "طراحی و اجرای کمپین",
      id: "9"
    },
    {
      title: "طراحی هویت بصری و لوگو",
      id: "10"
    },

  ]


  return (
    <div className={" mb-[52px] center relative  w-full max-w-[1240px] mx-auto overflow-hidden"}>
      <div data-aos={"fade-down"} className={"absolute !top-[05px] !end-[200px]"}>
        <DownLine />
      </div>
      <div className={"mt-[252px]"}>
        <div data-aos={"fade-up"} className={"!text-h2 !font-cairo mb-[80px]"}>
          تماس با ما
        </div>

        <Form
          form={formRef}
          name="basic"
          className={'w-full'}
          labelCol={{
            span: 24
          }}
          wrapperCol={{
            span: 24
          }}
          onFinish={handleSubmit}
          autoComplete="off"

        >
          <div data-aos={"fade-left"} className={"grid grid-cols-2 gap-x-[69px] gap-y-[16px]"}>
            <FloatLabel label={'نام و نام خانوادگی'} name={'firstName'}
                        className={clsx({"[&>label]:!text-red-500": saveError.includes("firstName")})}>
              <Form.Item
                name={'firstName'}
                rules={[
                  {
                    required: true,
                    message: 'نام و نام خانوادگی را وارد کنید'
                  },
                ]}
              >
                <Input className={'w-full'} onChange={(e) => {
                  if (e?.target?.value) {
                    setSaveError(current => current?.filter(item => item !== "firstName"))
                  } else {
                    setSaveError(current => ([...current, 'firstName']))
                  }
                }}
                />
              </Form.Item>
            </FloatLabel>
            <FloatLabel label={'شماره تماس'} name={'phone'}
                        className={clsx({"[&>label]:!text-red-500": saveError.includes("phone")})}>
              <Form.Item
                name={'phone'}
                validateFirst
                rules={[
                  {
                    required: true,
                    message: 'شماره تماس را وارد کنید'
                  },
                ]}
              >
                <Input onChange={(e) => {
                  if (e?.target?.value) {
                    setSaveError(current => current?.filter(item => item !== "phone"))
                  } else {
                    setSaveError(current => ([...current, 'phone']))
                  }
                }} className={'w-full'}/>
              </Form.Item>
            </FloatLabel>
            <FloatLabel label={'ایمیل'} name={'email'}
                        className={clsx({"[&>label]:!text-red-500": saveError.includes("phone")})}>
              <Form.Item
                name={'email'}
                validateFirst
                rules={[
                  {
                    required: true,
                    message: 'ایمیل را وارد کنید'
                  },
                ]}
              >
                <Input onChange={(e) => {
                  if (e?.target?.value) {
                    setSaveError(current => current?.filter(item => item !== "email"))
                  } else {
                    setSaveError(current => ([...current, 'email']))
                  }
                }} className={'w-full'}/>
              </Form.Item>
            </FloatLabel>
            <FloatLabel label={'توضیحات پروژه'} name={'description'}
                        className={clsx("col-span-2", {"[&>label]:!text-red-500": saveError.includes("phone")})}>
              <Form.Item
                name={'description'}
                validateFirst
                rules={[
                  {
                    required: true,
                    message: 'توضیحات پروژه را وارد کنید'
                  },
                ]}
              >
                <Input onChange={(e) => {
                  if (e?.target?.value) {
                    setSaveError(current => current?.filter(item => item !== "description"))
                  } else {
                    setSaveError(current => ([...current, 'description']))
                  }
                }} className={'w-full'}/>
              </Form.Item>
            </FloatLabel>
          </div>

          <div data-aos={"fade-left"} className={"text-buttonTextSmall"}>
            لورم ایپسوم متن ساختگی با (تولید سادگی)
          </div>

          <div className={"flex flex-wrap gap-x-8 gap-y-16 text-buttonTextSmall mt-32"}>

            {
              services?.map(item =>
                <div data-aos={"fade-left"} onClick={() => handleSelectedServices(item)} key={item?.id}
                     className={`${selectedServices.includes(item?.id) ? 'bg-primary-dark !text-black' :
                       'bg-white'} py-[18px] text-neutralDarker w-fit px-[36px] border border-[#00000040] rounded-[20px] cursor-pointer`}>
                  {item?.title}
                </div>
              )
            }

          </div>
          <div data-aos={"fade-left"} className={"h-[100px]"}>
            <div onClick={handleSubmit}
                 className={"border border-black py-16 px-24 group rounded-[20px] text-buttonTextSmall flex items-center gap-24 w-[155px] h-[68px] mt-[56px] hover:bg-primary-dark cursor-pointer transition-all"}>
              ارسال
              <DoubleCheck className={"text-[32px] group-hover:text-[36px] stroke-black "}/>

            </div>
          </div>


        </Form>
      </div>
    </div>

  );
};

export default ContactUs;
