import { type AppType } from "next/dist/shared/lib/utils";
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components'

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <FluentProvider theme={teamsDarkTheme}>
    <Component {...pageProps} />
  </FluentProvider>
};

export default MyApp;
