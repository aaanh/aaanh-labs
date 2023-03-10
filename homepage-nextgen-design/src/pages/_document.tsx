import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="mytheme">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/37283437?v=4"
          ></meta>
        </Head>
        <body className={`leading-base text-lg antialiased`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
