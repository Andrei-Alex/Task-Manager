import React from "react";
import { IMainLayout, styles } from "./index";
import { Header } from "@/components";
const MainLayout: React.FC<IMainLayout> = ({ children, logo, navElements }) => {
  return (
    <div className={styles.page}>
      <header>
        <Header logo={logo} navElements={navElements} />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default MainLayout;
