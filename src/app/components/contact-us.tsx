import {Form, Input} from "antd";
import FloatLabel from "../../templates/ui/float-label";
import doubleCheck from '/public/icons/double-check.svg'
import Image from "next/image";


const ContactUs = () => {
  const [formRef] = Form.useForm();

  const handleSubmit = () => {

  }

  return (
    <div className={" h-[calc(100vh+80px)] center"}>
      <div className={" w-full max-w-[1240px] mx-auto"}>
        <div className={"!text-h2 !font-cairo mb-[80px]"}>
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
          <div className={"grid grid-cols-2 gap-x-[69px] gap-y-[16px]"}>
            <FloatLabel label={'نام و نام خانوادگی'} name={'exchangeName'}>
              <Form.Item
                name={'exchangeName'}
                validateFirst
                rules={[
                  {
                    required: true,
                    message: 'نام و نام خانوادگی را وارد کنید'
                  },
                ]}
              >
                <Input className={'w-full'}/>
              </Form.Item>
            </FloatLabel>
            <FloatLabel label={'شماره تماس'} name={'exchangeName'}>
              <Form.Item
                name={'exchangeName'}
                validateFirst
                rules={[
                  {
                    required: true,
                    message: 'شماره تماس را وارد کنید'
                  },
                ]}
              >
                <Input className={'w-full'}/>
              </Form.Item>
            </FloatLabel>
            <FloatLabel label={'ایمیل'} name={'exchangeName'}>
              <Form.Item
                name={'exchangeName'}
                validateFirst
                rules={[
                  {
                    required: true,
                    message: 'ایمیل را وارد کنید'
                  },
                ]}
              >
                <Input className={'w-full'}/>
              </Form.Item>
            </FloatLabel>
            <FloatLabel label={'توضیحات پروژه'} name={'exchangeName'} className={'col-span-2'}>
              <Form.Item
                name={'exchangeName'}
                validateFirst
                rules={[
                  {
                    required: true,
                    message: 'توضیحات پروژه را وارد کنید'
                  },
                ]}
              >
                <Input className={'w-full'}/>
              </Form.Item>
            </FloatLabel>
          </div>

          <div className={"text-buttonTextSmall"}>
            لورم ایپسوم متن ساختگی با (تولید سادگی)
          </div>

          <div className={"flex gap-8 text-buttonTextSmall mt-32"}>
            <div className={"py-[18px] px-[36px] border border-[#00000040] rounded-[20px]"}>
              ۵۰ میلیون
            </div>
            <div className={"py-[18px] px-[36px] border border-[#00000040] rounded-[20px]"}>
              ۶۰ میلیون
            </div>
            <div className={"py-[18px] px-[36px] border border-[#00000040] rounded-[20px]"}>
              ۷۰ میلیون
            </div>
            <div className={"py-[18px] px-[36px] border border-[#00000040] rounded-[20px]"}>
              ۸۰ میلیون
            </div>
          </div>

          <div
            className={"border border-black py-16 px-24 text-buttonTextSmall flex items-center gap-24 w-fit mt-56 hover:bg-primary-dark hover:text-white cursor-pointer transition-all"}>
            ارسال
            <Image src={doubleCheck} alt={'doubleCheck'} className={"text-[24px]"}/>

          </div>

        </Form>
      </div>
    </div>

  );
};

export default ContactUs;
