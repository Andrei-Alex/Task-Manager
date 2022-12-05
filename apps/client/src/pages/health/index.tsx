import type { NextPage } from 'next';
import Head from 'next/head';
import { getHealthFromFrontEndAPI, HealthResponse } from '../../services';
import { DisplayHealth } from '../../components';
import styles from './index.module.scss';

const Health: NextPage = ({ status }: HealthResponse) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Display Health</title>
        <meta
          name="description"
          content="Display health fetched from Next API fetched from Nest API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayHealth status={status} />
    </div>
  );
};

export default Health;

export async function getServerSideProps(context) {
  const status = await getHealthFromFrontEndAPI();
  return {
    props: { status },
  };
}
