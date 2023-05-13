import React, { useState } from "react";
import { Button } from "../../atoms";
import { Input } from "../../components";
import { IInput } from "../../components/Input";
import { IForm, styles } from "./index";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ConfirmMessage } from "../../components";

/**
 * Reusable Form.
 * With yupResolver and react-hook-form
 *
 * ## Usage
 * ```jsx
 * <Label>{Text *}</Label>
 * <Input />
 * <Button />
 * ```
 * @Example Login form
 * @param {array} inputs map array to display inputs
 * @param {function} submitHandler On submit handler
 * @param {string} title On submit handler
 * @param {object} resolverSchema Yup resolver loginSchema
 * @param {string} successMsg Success message on logged in
 * @param {string} errorMsg Error message on bad credentials
 * @return {JSX} Display inputs and submit Button
 */
export const Form: React.FC<IForm> = ({
  inputs,
  submitHandler,
  title,
  resolverSchema,
  successMsg,
  errorMsg,
}) => {
  const [successMessage, setSuccessMessage] = useState(successMsg);
  const [errorMessage, setErrorMessage] = useState(errorMsg);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(resolverSchema) });
  console.log(errorMsg);
  const onSubmitHandler = (data: FieldValues) => {
    submitHandler(data);
    reset();
  };
  console.log(successMsg);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          {inputs.map((input: IInput) => (
            <div key={input.id}>
              <Input
                onChangeHandler={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
                }}
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
        </div>
        <div>
          <ConfirmMessage success={successMessage} error={errorMessage} />
          <Button
            buttonType={"submit"}
            text={"Submit"}
            onClick={() => {
              console.log("test");
              setSuccessMessage(successMsg);
              setErrorMessage(errorMsg);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
