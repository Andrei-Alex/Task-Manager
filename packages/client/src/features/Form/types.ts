import { AnyObject, ObjectSchema } from "yup";
import type { IInput } from "@/components/Input";

export interface IForm {
  inputs: IInput[];
  submitHandler: () => void;
  title: string;
  resolverSchema: ObjectSchema<any, AnyObject, any, "">;
}
