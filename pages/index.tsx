import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { Fragment, ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <h1 className={"title"}>
                Ir al <Link href="/about">About Page</Link>
            </h1>

            <p className={"description"}>
                Get started by editing{" "}
                <code className={"code"}>pages/index.tsx</code>
            </p>
        </Fragment>
    );
};

export default HomePage;

//para un Layout por página asigno la propiedad getLayout (que es una funcion que recibe page)
//para TypeScript page es de tipo ReactElement y el componente página es de tipo NextPageWithLayout configurados en _App.js
HomePage.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
