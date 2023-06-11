import type { NextPage } from "next";
import Head from "next/head";
import Styles from "./Styles.module.scss";
import styles from "@/pages/login/Styles.module.scss";
import { Form } from "@/features";
import { registerInputs, RegisterSchema } from "@/features/Form";
import { registerRequest } from "@/services";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Registration page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page}>
        <Form
          title={"Login"}
          inputs={registerInputs}
          resolverSchema={RegisterSchema}
          submitHandler={registerRequest}
          // confirmMessage={confirmMessage}
          // confirmMessageHandler={setConfirmMessage}
        />
      </main>
    </>
  );
};

export default Register;
