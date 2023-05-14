import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Styles.module.scss";
import { useLogin } from "@/hooks";
import { Form } from "@/features";
import { inputs, loginSchema } from "@/features/Form";
import { useConfirmMessage } from "@/hooks/";

const Login: NextPage = () => {
  const { data, error, login } = useLogin(
    `http://${process.env.NEXT_PUBLIC_SERVER}/api/auth/login`
  );
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
          inputs={inputs}
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
