import { FunctionComponent, ReactElement } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar/Navbar";
import styles from "./MainLayout.module.css";

interface Props {
    children: ReactElement;
}

export const MainLayout: FunctionComponent<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>App de Fede</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </div>
    );
};
