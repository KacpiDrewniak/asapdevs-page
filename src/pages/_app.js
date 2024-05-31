import { useEffect, useState } from "react";
import useMagneticHover from "@/hooks/useMagneticHover";
import Script from "next/script";

import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "node_modules/react-modal-video/css/modal-video.css";
import {ThemeContext, ThemeContextProvider, useThemeContext} from "@/components/theme/ThemeProvider";
import {createGlobalStyle} from "styled-components";
export default function App({ Component, pageProps }) {
    const { toggleTheme, theme } = useThemeContext();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);




  return (
          <ThemeContextProvider>
              <InsideWrapper>
            <Component {...pageProps} />
            <Script id="wow" src="/js/wow.min.js"></Script>
            <Script
                id="initWow"
                strategy="lazyOnload"
            >{`new WOW().init();`}</Script>
              </InsideWrapper>
          </ThemeContextProvider>
  );
}

const InsideWrapper = ({children}) =>{
    const {theme} = useThemeContext()

    import ("../../public/assets/css/style2.css");


    return <>
        {theme === "dark" ? <GlobalStyleDark/> : <GlobalStyle/> }
        {
            children
        }</>
}


const GlobalStyle = createGlobalStyle`
  :root {
    --font-saira: "Saira", sans-serif;
    --white-color: black;
    --black-color: white;
    --black-color2: white;
    --gray-color: black;
    --paragraph-color: white;
    --theme-color: yellow;
    --body-color: black;
    --border-color: white;
    --black-soft-color: white;
  }
`

const GlobalStyleDark = createGlobalStyle`
  :root {
    --font-saira: "Saira", sans-serif;
    --white-color: #fff;
    --black-color: #000;
    --black-color2: #1D1D1D;
    --gray-color: #f7f7fd;
    --paragraph-color: #272727;
    --theme-color: #ff4e17;
    --body-color: #eaf1f5;
    --border-color: #232323;
    --black-soft-color: #7e7e7e;
  }
`
