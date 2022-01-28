import styles from './style.module.css';

const Loader = () => {
    return (<div id={styles.circularWrapper}>
        {
            Array.from({length: 8}).map((e, i) =>
                (<div id={styles[`circularG_${++i}`]} className={styles.circularG} key={i} />))
        }
    </div>)
}

export default Loader;
