import type { NextPage } from 'next';
import Head from 'next/head';
import Styles from './Styles.module.scss';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>Login</p>
      </div>
    </>
  );
};

export default Login;
