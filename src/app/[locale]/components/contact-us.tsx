import {Button, Form, Input, Spin} from "antd";

import {DoubleCheck} from "@/templates/icons/double-check";
import {useEffect, useState} from "react";
import {clsx} from "clsx";
import DownLine from "@/templates/ui/down-line";
import {Tick} from "@/templates/icons/tick";
import {toast} from "react-toastify";
import axios from "axios";
import FloatLabel from "@/templates/ui/float-label";
import {useTranslation} from "react-i18next";

type TServices = {
  title: string,
  id: string
}

const {TextArea} = Input;

const ContactUs = () => {
  const [formRef] = Form.useForm();
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [saveError, setSaveError] = useState<string[]>([]);
  const mobileWatch = Form.useWatch("phoneNumber", formRef)
  const {t} = useTranslation('common')

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
          toast.success(t('Your request has been successfully registered'))
          formRef.resetFields()
        })

    } catch (e: any) {
      setSaveError(e?.errorFields?.map((item: any) => item?.name[0]))
      toast.error(t("Please complete the form information"))
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
          name: 'phoneNumber',
          value: mobileWatch.replace(/\D/g, ''),
          errors: [""]
        }
      ])

      formRef.validateFields(["phoneNumber"]).then(() => {
        setSaveError(current => current.filter(item => item !== "phoneNumber"))
      }).catch(() => {
        setSaveError(current => ([...current, 'phoneNumber']))
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
            {t('contactUs')}
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
                <FloatLabel label={t('full name')} name={'firstName'}
                            className={clsx({"[&>label]:!text-red-500 max-md:col-span-2": saveError.includes("firstName")})}>
                  <Form.Item
                    name={'firstName'}
                    validateFirst
                    rules={[
                      {
                        required: true,
                        message: t('Please enter the full name')
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
                <FloatLabel label={t('phone number')} name={'phoneNumber'}
                            className={clsx({"[&>label]:!text-red-500": saveError.includes("phoneNumber")})}>
                  <Form.Item
                    name={'phoneNumber'}
                    validateFirst
                    rules={[
                      {
                        required: true,
                        message: t('Please enter the phone number')
                      },
                      {
                        validator: (_, value) => {
                          if (value.length) {
                            if (value.length > 1 && !value.startsWith('09')) {
                              setSaveError(current => ([...current, 'phoneNumber']))
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
                              setSaveError(current => ([...current, 'phoneNumber']))
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
                        setSaveError(current => current?.filter(item => item !== "phoneNumber"))
                      } else {
                        setSaveError(current => ([...current, 'phoneNumber']))
                      }
                    }}
                           className={'w-full'}
                           minLength={11}
                           maxLength={11}
                    />
                  </Form.Item>
                </FloatLabel>
                <FloatLabel label={t('email')} name={'email'}
                            className={clsx({"[&>label]:!text-red-500": saveError.includes("email")})}>
                  <Form.Item
                    name={'email'}
                    validateFirst
                    rules={[
                      {
                        required: true,
                        message: t('Please enter the email')
                      },
                      {
                        validator: (_, value) => {
                          if (value.length) {
                            if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)) {
                              setSaveError(current => ([...current, 'email']))
                              return Promise.reject(new Error(t('Please enter the valid email')));
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

                <FloatLabel label={t('description')} name={'description'}
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
                             message: t('Please select at least one item')
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
                <Button onClick={handleSubmit}


                        className={"max-md:mx-auto border py-16 group mt-20"}
                >
                  <div
                    className={"mx-auto flex justify-between gap-24 items-center pe-[24px] ps-[20px] w-[135px] h-[68px] "}>
                    <div>
                      {t("Send")}
                    </div>

                    <DoubleCheck className={"text-[32px] group-hover:text-[36px] stroke-black "}/>

                  </div>


                </Button>
              </div>
            </Spin>
          </Form>

        </div>
      </div>


    </div>

  );
};

export default ContactUs;
