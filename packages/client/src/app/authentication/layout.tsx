import { ILayouts } from "../../../../libs/sharedTypes";
import { AuthenticationLayout } from "@/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Page",
  description: "Authenticate yourself",
};
const AutenticationLayout: React.FC<ILayouts> = ({ children }) => {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
};
