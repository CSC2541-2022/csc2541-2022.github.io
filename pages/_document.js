import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

        </Head>
        <body class="h-screen v-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;