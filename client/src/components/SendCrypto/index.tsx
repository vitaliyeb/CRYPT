import styles from './style.module.css';

const SendCrypto = () => {

    const additions = ['Reliability', 'Security', 'Ethereum', 'Web 3.0', 'Low fees', 'Blockchain'];

    return (<div className={styles.wrapper}>
        <div className={styles.info}>
            <h1>Send Crypto <br/>across the world</h1>
            <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
            <div className={styles.table}>
                { additions.map(i => (<div>{ i }</div>))}
            </div>
        </div>
        <div>

        </div>
    </div>)
}

export default SendCrypto;
