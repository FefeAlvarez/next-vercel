import Link from "next/link";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { Fragment } from "react";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

const AboutPage: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>About Page</h1>
            <h1 className={"title"}>
                Ir al <Link href="/">Home</Link>
            </h1>

            <p className={"description"}>
                Get started by editing{" "}
                <code className={"code"}>pages/about.tsx</code>
            </p>
        </Fragment>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
