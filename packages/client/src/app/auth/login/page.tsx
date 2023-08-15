"use client";
import { useLogin } from "@/hooks";
import { Form } from "@/features";
import { loginInputs, loginSchema } from "@/features/Form";
import { useAuthFormConfirmMessage } from "@/hooks";
import React from "react";

const Login: React.FC = () => {
  const { data, error, login } = useLogin();
  const { confirmMessage, setConfirmMessage } = useAuthFormConfirmMessage(
    data,
    error
  );

  return (
    <Form
      title={"Login"}
      inputs={loginInputs}
      resolverSchema={loginSchema}
      submitHandler={login}
      confirmMessage={confirmMessage}
      confirmMessageHandler={setConfirmMessage}
      linkMsg={"Not registered ?"}
      navigateTo={{
        pathname: "/auth/register",
      }}
    />
  );
};

export default Login;
