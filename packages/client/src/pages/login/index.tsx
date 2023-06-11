import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Styles.module.scss";
import { useLogin } from "@/hooks";
import { Form } from "@/features";
import { loginInputs, loginSchema } from "@/features/Form";
import { useConfirmMessage } from "@/hooks/";

const Login: NextPage = () => {
  const { data, error, login } = useLogin();
  const { confirmMessage, setConfirmMessage } = useConfirmMessage(data, error);

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page}>
        <Form
          title={"Login"}
          inputs={loginInputs}
          resolverSchema={loginSchema}
          submitHandler={login}
          confirmMessage={confirmMessage}
          confirmMessageHandler={setConfirmMessage}
        />
      </main>
    </>
  );
};

export default Login;
