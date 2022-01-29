import styles from './style.module.css';
import Header from "../../components/Header";
import React from "react";





const Main = () => {

    const Layout:React.FC = ({ children }) =>
        (<div className={styles.layout}>{ children }</div>);

    return (<>
        <div className={styles.gradientBg}>
            <Layout>
                <Header />
            </Layout>
        </div>
    </>)
}

export default Main;
