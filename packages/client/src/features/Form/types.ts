import { AnyObject, ObjectSchema } from "yup";
import type { IInput } from "@/components/Input";
import { FieldValue, FieldValues } from "react-hook-form";

export interface IForm {
  inputs: IInput[];
  submitHandler: (values: FieldValue<FieldValues>) => void;
  title: string;
  resolverSchema: ObjectSchema<any, AnyObject, any, "">;
  successMsg: string | null;
  errorMsg: string | null;
}
