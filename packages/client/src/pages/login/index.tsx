import type { NextPage } from "next";
import Head from "next/head";
import Styles from "./Styles.module.scss";
import { useLogin } from "@/hooks";
import { Form } from "@/features";
import { inputs, loginSchema } from "@/features/Form";

const Login: NextPage = () => {
  const { data, error, fetchData } = useLogin(
    `http://${process.env.NEXT_PUBLIC_SERVER}/api/auth/login`
  );
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Form
          title={"Login"}
          inputs={inputs}
          resolverSchema={loginSchema}
          submitHandler={fetchData}
        />
      </div>
    </>
  );
};

export default Login;
