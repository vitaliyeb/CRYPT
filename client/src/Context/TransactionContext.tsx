import React, {useEffect} from "react";
import {ethers} from "ethers";
import {TransactionContextType} from "./TransactionContextTypes";

export const TransactionContext = React.createContext<TransactionContextType>({});


const TransactionProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();


    return (<TransactionContext.Provider value={{test: 'test 1'}}>
        {
                children
        }
    </TransactionContext.Provider>)
}

export default TransactionProvider;
