import Document, { Html, Head, Main, NextScript } from 'next/document'

import { UMAMI_SRC, UMAMI_WEBSITE_ID } from '../constants/umami'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* umami self-hosted analytics */}
          <script
            async
            defer
            data-website-id={UMAMI_WEBSITE_ID}
            src={UMAMI_SRC}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
