import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/Global.scss";
import { Provider } from "react-redux";
import { store } from "../providers";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Task Manager</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default CustomApp;
