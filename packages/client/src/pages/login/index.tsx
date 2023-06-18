import type { NextPage } from "next";
import Head from "next/head";
import { useLogin } from "@/hooks";
import { Form } from "@/features";
import { AuthenticationLayout } from "@/layouts";
import { loginInputs, loginSchema } from "@/features/Form";
import { useAuthFormConfirmMessage } from "@/hooks/";

const Login: NextPage = () => {
  const { data, error, login } = useLogin();
  const { confirmMessage, setConfirmMessage } = useAuthFormConfirmMessage(
    data,
    error
  );

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthenticationLayout>
        <Form
          title={"Login"}
          inputs={loginInputs}
          resolverSchema={loginSchema}
          submitHandler={login}
          confirmMessage={confirmMessage}
          confirmMessageHandler={setConfirmMessage}
          linkMsg={"Not registered ?"}
          navigateTo={{
            pathname: "/register",
          }}
        />
      </AuthenticationLayout>
    </>
  );
};

export default Login;
