"use client";
import "../styles/Global.scss";
import { ILayouts } from "../../../libs/sharedTypes";
import { ReduxProvider, store } from "@/providers";

const RootLayout: React.FC<ILayouts> = ({ children }) => {
  return (
    <html lang={"en"}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};
export default RootLayout;
