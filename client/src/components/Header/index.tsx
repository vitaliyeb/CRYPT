import styles from './style.module.css';


const Header = () => {

    const links = ['Market', 'Exchange', 'Tutorials', 'Wallets'];

    return (<div className={styles.wrapper}>
        <img className={styles.logo} src="./images/logo.png" alt=""/>
        <nav className={styles.navigate}>
            {
                links.map(i => (<a href={`/${i}`} key={i} className={styles.link}>{ i }</a>))
            }
        </nav>
        <p className={styles.login}>Login</p>
    </div>)
}

export default Header;
