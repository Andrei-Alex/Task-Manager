import { NextPage } from "next";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { logo, navElements } from "@/constants";
import { withAuth } from "@/Hocs/withAuth/withAuth";

const Index: NextPage = () => {
  return (
    <MainLayout logo={logo} navElements={navElements}>
      <div>Home</div>
    </MainLayout>
  );
};

export default withAuth(Index);
