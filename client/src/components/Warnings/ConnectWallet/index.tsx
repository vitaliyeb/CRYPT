import MetaMaskWrapper from "../MetaMaskWrapper";
import styles from './style.module.css';


const ConnectWallet = () => {
    return (<MetaMaskWrapper>
        <p className={styles.title}>
            Please connect your wallet<br/>
            <span className={styles.connect}>connect</span>
        </p>
    </MetaMaskWrapper>)
}

export default ConnectWallet;
