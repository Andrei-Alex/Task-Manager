import type { NextPage } from 'next';
import Head from 'next/head';
import Styles from './Styles.module.scss';

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Registration page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>Register</p>
      </div>
    </>
  );
};

export default Register;
