import React, { useState } from 'react';
import { ConnectButton, useWallet, WalletProvider } from '@mysten/wallet-kit';
import Web3 from 'web3';

function App() {
    const { wallets, connected, select, disconnect, account } = useWallet();
    const [ethAccount, setEthAccount] = useState(null);

    // Connect to Metamask
    const connectMetamask = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setEthAccount(accounts[0]);
            } catch (error) {
                console.error("Error connecting to Metamask: ", error);
            }
        } else {
            alert("Metamask not found! Please install the Metamask extension.");
        }
    };

    // Render UI
    return (
        <div style={{ padding: '20px' }}>
            <h1>Bridge Application</h1>

            <div>
                <h2>Connect to Ethereum (Metamask)</h2>
                {ethAccount ? (
                    <p>Connected Account: {ethAccount}</p>
                ) : (
                    <button onClick={connectMetamask}>Connect Metamask</button>
                )}
            </div>

            <hr />

            <div>
                <h2>Connect to Sui Wallet</h2>
                <ConnectButton />
                {connected ? (
                    <div>
                        <p>Connected Sui Address: {account?.address}</p>
                        <button onClick={disconnect}>Disconnect</button>
                    </div>
                ) : (
                    <p>No Sui Wallet connected.</p>
                )}
            </div>
        </div>
    );
}

export default App;
