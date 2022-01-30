import styles from './style.module.css';
import React, {useState} from "react";

const TransactionForm = () => {
    const [formInputs, setFormInputs] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    });

    const formData = [{
        placeholder: 'Address To',
        key: 'addressTo'
    },{
        placeholder: 'Amount (ETH)',
        key: 'amount'
    },{
        placeholder: 'Keyword (Gif)',
        key: 'keyword'
    },{
        placeholder: 'Enter Message',
        key: 'message'
    }] as const;

    const changeField = (key: keyof typeof formInputs) =>
        (e: React.ChangeEvent<HTMLInputElement>) => setFormInputs({...formInputs, [key]: e.target.value});

    return (<form className={styles.form}>
        {
            formData.map(({placeholder, key}) => (<input
                placeholder={placeholder}
                key={key}
                onChange={changeField(key)}
                type="text"/>))
        }
        <hr color='#9ca3af'/>
        <button>Send Now</button>
    </form>)
}

export default TransactionForm;
