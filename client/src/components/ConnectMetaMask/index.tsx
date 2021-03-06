import React, {useEffect, useState} from "react";
import InstallMetamask from "../Warnings/InstallMetamask";
import NetworkConnection from "../Warnings/NetworkConnection";
import ConnectWallet from "../Warnings/ConnectWallet";

const ConnectMetaMask: React.FC<{
    children: JSX.Element
}> = ({ children }) => {
    const ethereum = (window as any).ethereum;
    const isInstallMetaMask = typeof ethereum !== 'undefined' && ethereum.isMetaMask;
    const [isConnected, setIsConnected] = useState(ethereum?.isConnected());
    const [account, setAccount] = useState<string | null>(ethereum.selectedAddress);

    useEffect(() => {
        ethereum?.on('connect', ({ chainId }: { chainId: string }) => setIsConnected(ethereum.isConnected()));

        ethereum?.on('disconnect', (e: Error) => setIsConnected(ethereum.isConnected()));

        ethereum?.on('chainChanged', () => window.location.reload());

        ethereum?.on('accountsChanged', (accounts: string[]) => setAccount(accounts[0]))
    }, []);

    return (<>
        {
            isInstallMetaMask ?
                isConnected ?
                    account ?
                        React.cloneElement(children, { address: account }) :
                        <ConnectWallet setAccount={setAccount} />
                    :
                    <NetworkConnection />
                :
                <InstallMetamask />
        }
    </>)
};

export default ConnectMetaMask;
