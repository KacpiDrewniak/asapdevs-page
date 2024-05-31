import { Html, Head, Main, NextScript } from 'next/document'
import {useThemeContext} from "@/components/theme/ThemeProvider";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
