import "./globals.css";

import {Layout} from "antd";


import {Cairo, Poppins} from "next/font/google";
import localFont from "next/font/local";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import AntdProvider from "./providers/antd";
import SplashScreen from "./providers/splash-screen";
import AosProvider from "./providers/aos";
import SmoothScroll from "./providers/smooth-scroll";
import {RemoveScrollBar} from "react-remove-scroll-bar";


const poppins = Poppins({subsets: ["latin"], variable: "--poppins", weight: ["300", "400", "500", "700"]})
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

        <html className={shabnamFont?.variable + " " + cairo.variable + ' !min-h-dvh '}>
        <body>
        {/*<SmoothScroll>*/}

            <AosProvider>
                <AntdRegistry>
                    <AntdProvider>
                        <SplashScreen>
                            <Layout className={"!min-h-dvh overflow-x-hidden !scroll-smooth"}>
                                {children}
                            </Layout>
                        </SplashScreen>
                    </AntdProvider>
                </AntdRegistry>
            </AosProvider>
        {/*</SmoothScroll>*/}

        </body>
        </html>
    );
}
