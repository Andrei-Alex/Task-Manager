import { AnyObject, ObjectSchema } from "yup";
import type { IInput } from "@/components/Input";
import { FieldValue, FieldValues } from "react-hook-form";
import { ConfirmMessage } from "@/hooks/authentication/types";

export interface IForm {
  inputs: IInput[];
  submitHandler: (values: FieldValue<FieldValues>) => void;
  title: string;
  resolverSchema: ObjectSchema<any, AnyObject, any, "">;
  confirmMessage?: ConfirmMessage;
  confirmMessageHandler?: (arg: ConfirmMessage) => void;
  linkMsg?: string;

  //TODO: Change navigateToType
  navigateTo?: any;
}
