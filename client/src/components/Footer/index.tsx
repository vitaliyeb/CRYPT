import styles from './style.module.css';

const Footer = () => {

    const navigations = ['Market', 'Exchange', 'Tutorials', 'Wallets'];

    return (<footer className={styles.footer}>
        <img src={'./images/logo.png'}/>
        <nav>
            {
                navigations.map(link => (<a key={link} href={`./${link}`}>{ link }</a>))
            }
        </nav>
    </footer>)
}

export default Footer;
