import Head from "next/head";
import { NextPage } from "next/types";
import styles from "../styles/Home.module.css";

const AboutPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>App de Fede</title>
                <meta name="description" content="About Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Ir al <a href="/">Home</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/about.tsx</code>
                </p>
            </main>
        </div>
    );
};

export default AboutPage;
