import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        {/* <link rel="shorcut icon" href="" /> */}
        {/* <link rel="apple-touch-icon" href=""/> */}
        <meta
          name="description"
          content="A simple project start to work with React, Typescript, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
