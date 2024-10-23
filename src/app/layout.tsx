import "./globals.css";

import {Layout} from "antd";


import {Cairo} from "next/font/google";
import localFont from "next/font/local";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import AntdProvider from "./providers/antd";
import SplashScreen from "./providers/splash-screen";
import AosProvider from "./providers/aos";
import 'react-toastify/ReactToastify.min.css';
import {ToastContainer} from "react-toastify";


const cairo = Cairo({subsets: ["latin"], variable: "--cairo", weight: ["300", "400", "500", "700"]})

const shabnamFont = localFont({
  src: [
    {
      path: '../assets/fonts/shabnam/Shabnam.ttf',
      weight: '400'
    },
    {
      path: '../assets/fonts/shabnam/Shabnam-Medium.ttf',
      weight: '500'
    },
    {
      path: '../assets/fonts/shabnam/Shabnam-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--shabnam'
});


export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {


  return (

    <html className={shabnamFont?.variable + " " + cairo.variable + ' !min-h-dvh'}>
    <body>

    <AosProvider>
      <ToastContainer position={'top-right'}
                      autoClose={4000}
                      rtl
                      draggable
                      theme="colored"
                      closeButton
                      bodyClassName="text-[0.875rem] font-dynamicFont"
                      stacked/>
      <AntdRegistry>
        <AntdProvider>
          <SplashScreen>
            <Layout className={"!min-h-dvh "}>
              {children}
            </Layout>
          </SplashScreen>
        </AntdProvider>
      </AntdRegistry>
    </AosProvider>


    </body>
    </html>
  );
}
