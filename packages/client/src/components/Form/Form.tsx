import React from "react";
import { Button, Input } from "../../atoms";
import { IForm, IInputs, styles } from ".";

/**
 * Reusable Form.
 *
 * ## Usage
 * ```jsx
 * <Label>{Text *}</Label>
 * <Input />
 * <Button />
 * ```
 * @Example Login form
 * @param {array} inputs - map array to display inputs
 * @param {function} submitHandler - On submit handler
 * @return {JSX} Display inputs and submit Button
 */
export const Form: React.FC<IForm> = ({ inputs, submitHandler, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {inputs.map((input: IInputs) => (
        <Input
          key={input.id}
          label={input.label}
          placeholder={input.placeholder}
          required={input.required}
          id={input.id}
          containerStyle={{ marginTop: "20px", marginBottom: "20px" }}
        />
      ))}
      <Button text={"Submit"} callback={submitHandler} />
    </div>
  );
};

export default Form;
