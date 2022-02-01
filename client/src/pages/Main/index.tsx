import styles from './style.module.css';
import Header from "../../components/Header";
import React from "react";
import SendCrypto from "../../components/SendCrypto";
import Services from "../../components/Services";
import LastTransactions from "../../components/LastTransactions";





const Main = () => {

    const Layout:React.FC = ({ children }) =>
        (<div className={styles.layout}>{ children }</div>);

    return (<>
        <div className={styles.gradientBg}>
            <Layout>
                <Header />
                <SendCrypto />
            </Layout>
        </div>
        <div className={styles.defaultBg}>
            <Layout>
                <Services />
                <LastTransactions />
            </Layout>
        </div>

    </>)
}

export default Main;
