import styles from './style.module.css';
import MetaMaskWrapper from "../MetaMaskWrapper";


const InstallMetamask = () => {
    return (<MetaMaskWrapper>
        <p className={styles.title}>
            Please install the metamask extension<br/>
            <a
                target='_blank'
                className={styles.install}
                href="https://metamask.io/download/"
            >
                install
            </a>
        </p>
    </MetaMaskWrapper>)
}

export default InstallMetamask;
