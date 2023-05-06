import * as yup from "yup";
export const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .max(32, "Maximum 32 characters")
    .required("Password is required"),
});
export const inputs = [
  {
    label: "Email",
    placeholder: "username@mail.com",
    required: true,
    id: "email",
  },
  {
    label: "Password",
    placeholder: "password",
    required: true,
    id: "password",
  },
];
