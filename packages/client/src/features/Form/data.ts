import * as yup from "yup";
import { IInput } from "@/components/Input";

const loginFields = {
  username: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Minimum 4 characters")
    .max(32, "Maximum 32 characters")
    .required("Password is required"),
};
const registerFields = {
  fullName: yup
    .string()
    .min(4, "Minimum 4 characters")
    .max(32, "Maximum 32 characters")
    .required("Full name is required"),
  ...loginFields,
};
export const loginSchema = yup.object().shape(loginFields);
export const RegisterSchema = yup.object().shape(registerFields);
export const loginInputs: IInput[] = [
  {
    icon: "HiMail",
    label: "Email",
    width: "90%",
    placeholder: "username@mail.com",
    required: true,
    id: "username",
  },
  {
    icon: "MdOutlinePassword",
    width: "90%",
    label: "Password",
    placeholder: "password",
    required: true,
    id: "password",
  },
];
export const registerInputs: IInput[] = [
  {
    icon: "HiMail",
    label: "Full name",
    width: "90%",
    placeholder: "FirstName LastName",
    required: true,
    id: "fullName",
  },
  ...loginInputs,
];
