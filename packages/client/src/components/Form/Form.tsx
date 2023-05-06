import React from "react";
import { Button, Input } from "../../atoms";
import { IForm, IInputs, styles } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

/**
 * Reusable Form.
 * With yupResolver
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
 * @param {object} resolverSchema Yup resolver schema
 * @return {JSX} Display inputs and submit Button
 */
export const Form: React.FC<IForm> = ({
  inputs,
  submitHandler,
  title,
  resolverSchema,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(resolverSchema) });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {inputs.map((input: IInputs) => (
          <>
            <Input
              key={input.id}
              label={input.label}
              placeholder={input.placeholder}
              required={input.required}
              id={input.id}
              containerStyle={{ marginTop: "20px", marginBottom: "20px" }}
              {...register(input.id)}
            />
            <p className={styles.alert}>{errors.email?.message as string}</p>
          </>
        ))}
        <Button text={"Submit"} callback={submitHandler} />
      </form>
    </div>
  );
};

export default Form;
