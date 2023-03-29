import * as React from "react";
import Head from "next/head";
import MyHome from "app/components/home";
import styles from "styles/page.module.css";
import Layout from "app/layout";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <Layout>
            <div className={styles.main}>
                <MyHome />
            </div>
        </Layout>
    );
};

export default Home;
