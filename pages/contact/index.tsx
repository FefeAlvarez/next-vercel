import Link from "next/link";
import { Fragment, ReactElement } from "react";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const ContactPage: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>Contact Page</h1>
            <h1 className={"title"}>
                Ir al <Link href="/">Home</Link>
            </h1>

            <p className={"description"}>
                Get started by editing{" "}
                <code className={"code"}>pages/contact/index.tsx</code>
            </p>
        </Fragment>
    );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
