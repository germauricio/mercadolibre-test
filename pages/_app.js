import '../styles/SearchBox.module.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Pauluk Challenge</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
