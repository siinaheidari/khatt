import {Form, Input, Spin} from "antd";
import FloatLabel from "../../templates/ui/float-label";
import {DoubleCheck} from "@/templates/icons/double-check";
import {useEffect, useState} from "react";
import {clsx} from "clsx";
import DownLine from "@/templates/ui/down-line";
import {Tick} from "@/templates/icons/tick";
import {toast} from "react-toastify";
import axios from "axios";

type TServices = {
  title: string,
  id: string
}

const {TextArea} = Input;

const ContactUs = () => {
  const [formRef] = Form.useForm();
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [saveError, setSaveError] = useState<string[]>([]);
  const mobileWatch = Form.useWatch("phone", formRef)

  const [loading, setLoading] = useState(false);

  const handleSelectedServices = (value: TServices) => setSelectedServices(current => current?.includes(value?.id) ?
    current?.filter(item => item !== value?.id) : ([...current, value?.id]));


  const handleSubmit = async () => {
    try {

      setSaveError([])
      await formRef.validateFields()
      setLoading(true)
      const values = formRef.getFieldsValue(true)
      await axios.post(`https://jsonplaceholder.typicode.com/users`, {values})
        .then(res => {
          toast.success("درخواست شما با موفقیت ثبت شد")

        })

    } catch (e: any) {
      setSaveError(e?.errorFields?.map((item: any) => item?.name[0]))
      // toast.error("درخواست شما موفقیت آمیز نبود")
    } finally {
      setLoading(false)
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


  useEffect(() => {
    if (mobileWatch) {
      formRef.setFields([
        {
          name: 'phone',
          value: mobileWatch.replace(/\D/g, ''),
          errors: [""]
        }
      ])

      formRef.validateFields(["phone"]).then(() => {
        setSaveError(current => current.filter(item => item !== "phone"))
      }).catch(() => {
        setSaveError(current => ([...current, 'phone']))
      })
    }


  }, [mobileWatch]);


  return (
    <div className={" mb-[52px] relative w-full max-w-[1240px] mx-auto overflow-hidden"}>

      <div className={"w-full max-w-[1000px]"}>
        <div data-aos={"fade-down"} className={"absolute !top-[05px] !start-[100px]"}>
          <DownLine/>
        </div>
        <div className={"mt-[252px] max-md:mt-[150px]"} id="contactUs">


          <div data-aos={"fade-up"} className={"!text-h2 !font-cairo mb-[80px] max-md:!text-h3"}>
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
            <Spin spinning={loading}>
              <div data-aos={"fade-left"} className={"md:grid md:grid-cols-2 gap-x-[69px]"}>
                <FloatLabel label={'نام و نام خانوادگی'} name={'firstName'}
                            className={clsx({"[&>label]:!text-red-500 max-md:col-span-2": saveError.includes("firstName")})}>
                  <Form.Item
                    name={'firstName'}
                    validateFirst
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
                      {
                        validator: (_, value) => {
                          if (value.length) {
                            if (value.length > 1 && !value.startsWith('09')) {
                              setSaveError(current => ([...current, 'phone']))
                              return Promise.reject(new Error('شماره موبایل باید با 09 شروع شود'));
                            }
                          }
                          return Promise.resolve();
                        },
                      },
                      {
                        pattern: new RegExp(/^[0-9]+$/),
                        message: 'شماره همراه معتبر وارد کنید',
                      },
                      {
                        validator: (_, value) => {
                          if (value.length) {
                            if (value.length < 11) {
                              setSaveError(current => ([...current, 'phone']))
                              return Promise.reject(new Error('شماره همراه معتبر وارد کنید'));
                            }
                          }
                          return Promise.resolve();
                        },
                      }
                    ]}
                  >
                    <Input onChange={(e) => {
                      if (e?.target?.value) {
                        setSaveError(current => current?.filter(item => item !== "phone"))
                      } else {
                        setSaveError(current => ([...current, 'phone']))
                      }
                    }}
                           className={'w-full'}
                           minLength={11}
                           maxLength={11}
                    />
                  </Form.Item>
                </FloatLabel>
                <FloatLabel label={'ایمیل'} name={'email'}
                            className={clsx({"[&>label]:!text-red-500": saveError.includes("email")})}>
                  <Form.Item
                    name={'email'}
                    validateFirst
                    rules={[
                      {
                        required: true,
                        message: 'ایمیل را وارد کنید'
                      },
                      {
                        validator: (_, value) => {
                          if (value.length) {
                            if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)) {
                              setSaveError(current => ([...current, 'email']))
                              return Promise.reject(new Error('ایمیل معتبر وارد کنید'));
                            }
                          }
                          return Promise.resolve();
                        },
                      }
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
                            className={clsx("col-span-2", {"[&>label]:!text-red-500": saveError.includes("description")})}>
                  <Form.Item
                    name={'description'}>
                    <TextArea className={'w-full'} rows={4}/>

                  </Form.Item>
                </FloatLabel>
              </div>

              <div data-aos={"fade-left"} className={"text-buttonTextSmall max-md:!text-bodyText3"}>
                لورم ایپسوم متن ساختگی با (تولید سادگی)
              </div>

              <Form.Item name={"selectedServices"}
                         rules={[
                           {
                             required: true,
                             message: 'حداقل یک مورد را انتخاب کنید'
                           },
                         ]}
              >
                <div data-aos={"fade-left"} className={"flex flex-wrap gap-x-8 gap-y-16 text-buttonTextSmall mt-32"}>
                  {
                    services?.map(item =>
                      <div
                        onClick={() => {
                          handleSelectedServices(item)
                          formRef.setFieldsValue({"selectedServices": item})
                        }}
                        key={item?.id}
                        className={clsx(' py-[16px] text-neutralDarker w-fit px-[16px] bg-white flex border border-[#00000040] rounded-[20px] cursor-pointer hover:text-black  hover:border-black relative', {'!bg-primary  !text-black border-black': selectedServices.includes(item?.id)})}
                      >
                        <div className={'invisible'}>
                          {item?.title}
                        </div>

                        <div
                          className={clsx('absolute  w-full text-center start-0 transition-all duration-100', {'!start-[-16px]': selectedServices.includes(item?.id)})}>
                          {item?.title}
                        </div>

                        <Tick
                          className={clsx({"transition-all duration-500": selectedServices.includes(item?.id)}, {"!opacity-0 ": !selectedServices.includes(item?.id)})}/>
                      </div>
                    )
                  }


                </div>
              </Form.Item>


              <div className={"mb-32 w-full "}>
                <div onClick={handleSubmit}
                     className={"max-md:mx-auto border border-black py-16 px-24 group rounded-[20px] text-buttonTextSmall flex items-center gap-24 w-[155px] h-[68px] mt-[56px] hover:bg-primary cursor-pointer transition-all"}>
                  ارسال
                  <DoubleCheck className={"text-[32px] group-hover:text-[36px] stroke-black "}/>

                </div>
              </div>
            </Spin>
          </Form>

        </div>
      </div>


    </div>

  );
};

export default ContactUs;
