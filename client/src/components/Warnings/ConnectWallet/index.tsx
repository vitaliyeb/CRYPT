import React, {Dispatch, SetStateAction, useState} from "react";
import classNames from "classnames";
import MetaMaskWrapper from "../MetaMaskWrapper";
import styles from './style.module.css';
import Loader from "../../Loader";


const ConnectWallet: React.FC<{
    setAccount: Dispatch<SetStateAction<string | null>>;
}> = ({ setAccount }) => {
    const [isLoad, setIsLoad] = useState(false);

    const connect = () => {
        if (isLoad) return;
        setIsLoad(true);

        (window as any).ethereum.request({ method: 'eth_requestAccounts' })
            .then((accounts: string[]) => setAccount(accounts[0]))
            .catch((err: any) => {
                console.log('err', err)
            })
            // .finally(() => setIsLoad(false));
    }

    return (<MetaMaskWrapper>
        <div className={styles.wrapper}>
            <p className={styles.title}>Please connect your wallet</p>
            <div
                onClick={connect}
                className={classNames(styles.connect, {[styles.disabled]: isLoad})}
            >
                connect
                {
                    isLoad &&
                    <div className={styles.wrapperLoader}><Loader /></div>
                }
            </div>
        </div>
    </MetaMaskWrapper>)
}

export default ConnectWallet;
