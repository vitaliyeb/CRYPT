import React, {useEffect, useState} from "react";
import InstallMetamask from "../Warnings/InstallMetamask";
import NetworkConnection from "../Warnings/NetworkConnection";
import ConnectWallet from "../Warnings/ConnectWallet";

const ConnectMetaMask: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const ethereum = (window as any).ethereum;
    const isInstallMetaMask = typeof ethereum !== 'undefined' && ethereum.isMetaMask;
    const [isConnected, setIsConnected] = useState(ethereum?.isConnected());
    const [account, setAccount] = useState(null);

    useEffect(() => {
        ethereum?.on('connect', ({ chainId }: { chainId: string }) => setIsConnected(ethereum.isConnected()));

        ethereum?.on('disconnect', (e: Error) => setIsConnected(ethereum.isConnected()));

        ethereum?.on('chainChanged', () => window.location.reload());

        // ethereum.request({ method: 'eth_requestAccounts' })
        //     .then((e: any) => {
        //         console.log('then', e)
        //     })
        //     .catch((err: any) => {
        //         console.log('err', err)
        //     })

    }, []);


    return (<>
        {
            isInstallMetaMask ?
                isConnected ?
                    account ?
                        children :
                        <ConnectWallet />
                    :
                    <NetworkConnection />
                :
                <InstallMetamask />
        }
    </>)
};

export default ConnectMetaMask;
