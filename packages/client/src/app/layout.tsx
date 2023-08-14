import "../styles/Global.scss";
import { ILayouts } from "../../../libs/sharedTypes";
import { AppWrapper } from "@/containers";

const RootLayout: React.FC<ILayouts> = ({ children }) => {
  return (
    <html lang={"en"}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
};
export default RootLayout;
