import React, {useEffect, useState} from "react";
import InstallMetamask from "../Warnings/InstallMetamask";
import NetworkConnection from "../Warnings/NetworkConnection";

const ConnectMetaMask: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const ethereum = (window as any).ethereum;
    const isInstallMetaMask = typeof ethereum !== 'undefined' && ethereum.isMetaMask;
    const [isConnected, setIsConnected] = useState(ethereum.isConnected());

    useEffect(() => {
        ethereum.on('connect', ({ chainId }: { chainId: string }) => setIsConnected(ethereum.isConnected()));

        ethereum.on('disconnect', (e: Error) => setIsConnected(ethereum.isConnected()));

        ethereum.on('chainChanged', () => window.location.reload());
    }, []);


    return (<div>
        {
            isInstallMetaMask ?
                isConnected ?
                    children :
                    <NetworkConnection />
                :
                <InstallMetamask />
        }
    </div>)
};

export default ConnectMetaMask;
