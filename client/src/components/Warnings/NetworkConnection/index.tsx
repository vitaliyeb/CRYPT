import styles from './style.module.css';
import MetaMaskWrapper from "../MetaMaskWrapper";
import Loader from "../../Loader";


const NetworkConnection = () => {

    return (<MetaMaskWrapper>
        <div className={styles.wrapper}>
            <div>
                <Loader />
            </div>
            <p className={styles.title}>Network connection</p>
        </div>
    </MetaMaskWrapper>)
}

export default NetworkConnection;
