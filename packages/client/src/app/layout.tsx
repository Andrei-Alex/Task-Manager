"use client";
import "../styles/Global.scss";
import { ILayouts } from "../../../libs/sharedTypes";
import { Provider } from "react-redux";
import { store } from "@/providers";

const RootLayout: React.FC<ILayouts> = ({ children }) => {
  return (
    <html lang={"en"}>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
};
export default RootLayout;
