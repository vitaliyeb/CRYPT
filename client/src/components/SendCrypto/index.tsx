import styles from './style.module.css';
import {useContext} from "react";
import {TransactionContext} from "../../context/TransactionContext";
import TransactionForm from "../TransactionForm";

const SendCrypto = () => {
    const { address } = useContext(TransactionContext);

    const additions = ['Reliability', 'Security', 'Ethereum', 'Web 3.0', 'Low fees', 'Blockchain'];

    return (<div className={styles.wrapper}>
        <div className={styles.info}>
            <h1>Send Crypto <br/>across the world</h1>
            <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
            <div className={styles.table}>
                { additions.map(i => (<div key={i}>{ i }</div>))}
            </div>
        </div>
        <div>
            <div className={styles.card}>
                <div className={styles.iconsWrapper}>
                    <div className={styles.ethIcon}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" fontSize="21" color="#fff" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 255, 255)"}}><title></title><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"></path></svg>
                    </div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" fontSize="17" color="#fff" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 255, 255)"}}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
                </div>
                <p className={styles.address}>{`${address.slice(0, 8)}...${address.slice(-3)}`}</p>
                <p className={styles.cardTitle}>Ethereum</p>
            </div>
            <TransactionForm />
        </div>
    </div>)
}

export default SendCrypto;
