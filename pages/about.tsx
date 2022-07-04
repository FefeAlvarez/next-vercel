import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next/types";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

const AboutPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>App de Fede</title>
                <meta name="description" content="About Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <h1>Contact Page</h1>
                <h1 className={styles.title}>
                    Ir al <Link href="/">Home</Link>
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
