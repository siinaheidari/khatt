import {ConfigProvider} from "antd";
import faIR from "antd/locale/fa_IR";
import {FC, PropsWithChildren} from "react";

const AntdProvider: FC<PropsWithChildren> = ({children}) => {

  return (
    <ConfigProvider
      direction={"rtl"}
      locale={faIR}
      theme={{
        token: {
          colorBgLayout: "#070707",
          fontFamily: "var(--fontFamily)"
        },

        components: {


          Form: {
            itemMarginBottom: 20,
            verticalLabelMargin: 0,
            verticalLabelPadding: .7,
            fontSize:12,
          },


          Input: {
            controlHeight: 66,
            activeBorderColor: "#1890FF",
            colorPrimaryHover: "#1890FF",
            colorBorder:"#00000040",
            borderRadius:20
          },




          Button: {
            controlHeight: 41,
            colorPrimary: "#1890FF",
            defaultBorderColor:"#1890FF",
            defaultColor:"#1890FF",
            defaultBg:"#F0F2F5",
            fontWeight:500
          },

          Switch: {
            colorPrimary: "#1890FF",
          },


          Checkbox: {
            colorPrimary: "#1890FF",
            colorPrimaryHover: "#1890FF"
          },

          Breadcrumb: {
            lastItemColor:"#1890FF"
          },
          DatePicker: {
            controlHeight:41,
            colorBorder:"#ADADAD",
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
