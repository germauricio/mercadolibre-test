import '../styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/productDetail.css';
import '../styles/css/productMiniature.css';
import '../styles/css/searchBox.css';
import React from 'react';
import Head from 'next/head';
function MyApp({Component, pageProps}) { // eslint-disable-line
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Pauluk Challenge</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
