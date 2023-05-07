import * as yup from "yup";
import { IInput } from "@/components/Input";
export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Minimum 4 characters")
    .max(32, "Maximum 32 characters")
    .required("Password is required"),
});
export const inputs: IInput[] = [
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
