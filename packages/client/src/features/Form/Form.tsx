import React, {useCallback, useEffect, useState} from "react";
import { Button } from "../../atoms";
import { Input } from "../../components";
import { IInput } from "../../components/Input";
import { IForm, styles } from "./index";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ConfirmMessage } from "../../components";
import Link from "next/link";

/**
 * Reusable Form.
 * With yupResolver and react-hook-form
 *
 * ## Usage
 * ```jsx
 * <Form
 *  *   inputs={[
 *  *     {
 *  *       id: "email",
 *  *       width: "100%",
 *  *       icon: <HiOutlineMail />,
 *  *       label: "Email",
 *  *       placeholder: "Enter your email",
 *  *       required: true,
 *  *     },
 *  *     {
 *  *       id: "password",
 *  *       width: "100%",
 *  *       icon: <HiOutlineKey />,
 *  *       label: "Password",
 *  *       placeholder: "Enter your password",
 *  *       required: true,
 *  *     },
 *  *   ]}
 *  *   submitHandler={(data) => {
 *  *     // Handle form submission
 *  *     console.log(data);
 *  *   }}
 *  *   title="Login Form"
 *  *   resolverSchema={yourResolverSchema}
 *  *   confirmMessage={{
 *  *     successMsg: "Form submitted successfully",
 *  *     errorMsg: "Error submitting form",
 *  *   }}
 *  *   confirmMessageHandler={(message) => {
 *  *     // Handle confirm message display
 *  *     console.log(message);
 *  *   }}
 *  *   linkMsg="Forgot password?"
 *  *   navigateTo="/forgot-password"
 *  * />
 * ```
 * @Example Login or register form
 * @param {array} inputs map array to display loginInputs
 * @param {function} submitHandler On submit handler
 * @param {string} title On submit handler
 * @param {object} resolverSchema Yup resolver loginSchema
 * @param {string} confirmMessage Form submission message
 * @param {string} errorMsg Error message on bad credentials
 * @return {JSX} Display loginInputs and submit Button
 */
export const Form: React.FC<IForm> = ({
  inputs,
  submitHandler,
  title,
  resolverSchema,
  confirmMessage,
  confirmMessageHandler,
  linkMsg,
  navigateTo,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(resolverSchema) });

  const onSubmitHandler = (data: FieldValues) => {
    reset();
    submitHandler(data);
  };
  const onChangeHandler = () => {
    confirmMessageHandler &&
    confirmMessageHandler({ successMsg: null, errorMsg: null });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          {inputs.map((input: IInput) => (
            <div key={input.id}>
              <Input
                onChangeHandler={onChangeHandler}
                width={input.width}
                icon={input.icon}
                register={{ ...register(input.id) }}
                label={input.label}
                placeholder={input.placeholder}
                required={input.required}
                id={input.id}
                containerStyle={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />
              <p className={styles.alert}>
                {errors[input.id]?.message as string}
              </p>
            </div>
          ))}
          {linkMsg && (
            <div>
              <Link href={navigateTo} className={styles.link}>
                {linkMsg}
              </Link>
            </div>
          )}
        </div>
        <div>
          <ConfirmMessage
            success={confirmMessage?.successMsg}
            error={confirmMessage?.errorMsg}
          />
          <Button
            variant={'gradient'}
            gradient={{from: 'blue', to: "purple"}}
            type={"submit"}
            text={"Submit"}
            containerStyle={{ width: "100%" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
