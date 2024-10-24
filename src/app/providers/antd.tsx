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
          colorBgLayout: "#fff",
          fontFamily: "var(--fontFamily)"
        },

        components: {
          Form: {
            itemMarginBottom: 42,
            fontSize: 12,


          },

          Input: {
            controlHeight: 66,
            activeBorderColor: "#1890FF",
            colorPrimaryHover: "#1890FF",
            colorBorder: "#00000040",
            hoverBorderColor: "#000000",
            borderRadius: 20,
            fontSize: 16,
          },

          Button: {
            controlHeight: 41,
            colorPrimary: "#1890FF",
            defaultBorderColor: "#1890FF",
            defaultColor: "#1890FF",
            defaultBg: "#F0F2F5",
            fontWeight: 500
          },

        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
