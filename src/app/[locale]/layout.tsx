import "../globals.css";
import {Layout} from "antd";
import {Cairo, Poppins} from "next/font/google";
import localFont from "next/font/local";
import SplashScreen from "../providers/splash-screen";
import AosProvider from "../providers/aos";
import 'react-toastify/ReactToastify.min.css';
import {ToastContainer} from "react-toastify";
import TranslationsProvider from "@/app/providers/translation-provider";
import initTranslations from "@/i18n";
import {FC, PropsWithChildren} from "react";
import i18nConfig from "@/i18n-config";
import {Metadata} from "next";

const poppins = Poppins({subsets: ['latin'], variable: '--poppins', weight: ['300', '400', '500', '700']});

const cairo = Cairo({subsets: ["latin"], variable: "--cairo", weight: ["300", "400", "500", "700"]})

const shabnamFont = localFont({
  src: [
    {
      path: '../../assets/fonts/shabnam/Shabnam.ttf',
      weight: '400'
    },
    {
      path: '../../assets/fonts/shabnam/Shabnam-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../assets/fonts/shabnam/Shabnam-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--shabnam'
});


const namespaces = [
  'common',
];


export const metadata: Metadata = {
  title: 'khat',
  description: 'khat website',
  keywords:"test,test2"
}

export const generateStaticParams = async () => i18nConfig?.locales?.map(locale => ({locale}));


const RootLayout: FC<PropsWithChildren & { params: any }> = async ({children, params: {locale}}) => {
  const {resources, i18n: {dir}} = await initTranslations(locale, namespaces);





  return (
    <html lang={locale} dir={dir()}
          className={shabnamFont?.variable + " " + cairo.variable + " " + poppins.variable + ' !min-h-dvh'}>
    <body>
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      <AosProvider>
        <ToastContainer
          position={dir() === 'rtl' ? 'top-right' : 'top-left'}
          autoClose={4000}
          rtl={dir() === 'rtl'}
          draggable
          theme="colored"
          closeButton
          bodyClassName="text-[0.875rem] font-dynamicFont"
          stacked/>

            <SplashScreen>
              <Layout className={"!min-h-dvh"}>
                {children}
              </Layout>
            </SplashScreen>

      </AosProvider>
    </TranslationsProvider>
    </body>
    </html>
  );
};

export default RootLayout;


