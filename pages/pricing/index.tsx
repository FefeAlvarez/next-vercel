import { Fragment, ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { MainLayout } from "../../components/layouts/MainLayout";

const Pricing: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>Pricing Page</h1>
            <h1 className={"title"}>
                Ir a <Link href="/">Home Page</Link>
            </h1>

            <p className={"description"}>
                Get started by editing{" "}
                <code className={"code"}>pages/pricing/index.tsx</code>
            </p>
        </Fragment>
    );
};

export default Pricing;

Pricing.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
