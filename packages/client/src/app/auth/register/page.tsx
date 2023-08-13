"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { Form } from "@/features";
import { registerInputs, RegisterSchema } from "@/features/Form";
import { useAuthFormConfirmMessage, useRegister } from "@/hooks";

const Register: NextPage = () => {
  const { data, error, register } = useRegister();
  const { confirmMessage, setConfirmMessage } = useAuthFormConfirmMessage(
    data,
    error
  );
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Registration page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form
        title={"Register"}
        inputs={registerInputs}
        resolverSchema={RegisterSchema}
        submitHandler={register}
        confirmMessage={confirmMessage}
        confirmMessageHandler={setConfirmMessage}
        linkMsg={"Already have an account?"}
        navigateTo={"login"}
      />
    </>
  );
};

export default Register;
