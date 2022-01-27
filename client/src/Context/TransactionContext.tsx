import React, {useEffect} from "react";
import {ethers} from "ethers";
import {TransactionContextType} from "./TransactionContextTypes";

export const TransactionContext = React.createContext<TransactionContextType>({});


const TransactionProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {

    const checkIfWalletIsConnected = () => {
    }


    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (<TransactionContext.Provider value={{test: 'test 1'}}>
        {
                children
        }
    </TransactionContext.Provider>)
}

export default TransactionProvider;