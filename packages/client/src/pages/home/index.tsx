import { NextPage } from "next";
import styles from "./index.module.scss";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { logo, navElements } from "@/constants";

const Index: NextPage = () => {
  return (
    <MainLayout logo={logo} navElements={navElements}>
      <div className={styles["container"]}>Home</div>
    </MainLayout>
  );
};

export default Index;
