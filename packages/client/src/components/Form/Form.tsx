import React from "react";
import { Button, Input } from "../../atoms";
import { IForm, IInputs } from ".";

/**
 * Reusable Form.
 *
 * ## Usage
 * ```jsx
 * <Label>{Text *}</Label>
 * <Input />
 * <Button />
 * ```
 * @param {array} inputs - map array to display inputs
 * @param {function} submitHandler - On submit handler
 * @return {JSX} Display inputs and submit Button
 */
export const Form: React.FC<IForm> = ({ inputs, submitHandler }) => {
  return (
    <div>
      {inputs.map((input: IInputs) => (
        <Input
          key={input.id}
          label={input.label}
          placeholder={input.placeholder}
          required={input.required}
          id={input.id}
        />
      ))}
      <Button text={"Submit"} callback={submitHandler} />
    </div>
  );
};

export default Form;
