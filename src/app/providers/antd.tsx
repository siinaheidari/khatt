'use client'

import {ConfigProvider} from "antd";
import faIR from "antd/locale/fa_IR";
import enUs from "antd/locale/en_US";
import {FC, PropsWithChildren} from "react";
import {useTranslation} from "react-i18next";

const AntdProvider: FC<PropsWithChildren> = ({children}) => {
  const {i18n: {dir}} = useTranslation()

  return (
    <ConfigProvider
      direction={dir()}
      locale={dir() === 'ltr' ? faIR : enUs}
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
            controlHeight: 68,
            defaultHoverBg: '#FFD60A',
            defaultHoverColor: '#070707',
            defaultHoverBorderColor: '#070707',
            defaultBorderColor: '#070707',
            defaultColor: '#070707',

            fontWeight: 500,
            borderRadius: 20,
            fontSize:20
          },

        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
