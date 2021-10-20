import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Loved+by+the+King&display=swap"
          rel="stylesheet"
        />
        <title>Happy Day</title>
        <meta name="description" content="Happy 20/10 to you" />
        <link rel="icon" href="/images/rose.png" />
      </Head>

      <div className={styles.container}>
        <div className={styles.boxTopRight}>
          <h1 className={styles.quoteTopRight}>
            Happy day to my beloved friends, sisters, and special person.
          </h1>
        </div>
        <div className={styles.boxBottomLeft}>
          <h1 className={styles.quoteBottomLeft}>
            May not only today, but every day will be special, every moment will
            be memorable for you.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
