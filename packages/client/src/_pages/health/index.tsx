import type { NextPage } from "next";
import Head from "next/head";
import { getHealthFromFrontEndAPI, IHealthResponse } from "../../services";
import { DisplayHealth } from "../../atoms";
import styles from "./index.module.scss";

const Health: NextPage<IHealthResponse> = ({ status }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Display Health</title>
        <meta
          name="description"
          content="Display health fetched from Next AUTH_API fetched from Nest AUTH_API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayHealth status={status} />
    </div>
  );
};

export default Health;

export async function getServerSideProps() {
  const status = await getHealthFromFrontEndAPI();
  return {
    props: { status },
  };
}
