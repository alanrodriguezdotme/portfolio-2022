import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Alan Rodriguez - Design/Development"
        />
        {/* <link rel="icon" href="/images/favicon.png" /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Halant:wght@400;700&family=Nunito:wght@300;400;900&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link rel="apple-touch-icon" href="/logo540.png" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
