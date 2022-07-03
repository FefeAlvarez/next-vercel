import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>App de Fede</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Ir al <a href="/about">About Page</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>
            </main>
        </div>
    );
};

export default HomePage;
