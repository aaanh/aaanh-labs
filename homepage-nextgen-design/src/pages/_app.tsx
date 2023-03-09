import { type AppType } from "next/dist/shared/lib/utils";
import { FluentProvider, webLightTheme } from '@fluentui/react-components'

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <FluentProvider theme={webLightTheme}>
    <Component {...pageProps} />
  </FluentProvider>
};

export default MyApp;
