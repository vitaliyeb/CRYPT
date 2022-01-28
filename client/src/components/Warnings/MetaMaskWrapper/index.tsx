import React, {useEffect, useRef} from "react";
import styles from './style.module.css';


const MetaMaskWrapper: React.FC<{
    children: React.ReactNode
}>= ({ children }) => {

    return (<div className={styles.wrapper}>
        <img
            src='images/metamaskLogo.svg'
            alt="logo"
            className={styles.logo}
        />
        { children }
    </div>)
}

export default MetaMaskWrapper;
