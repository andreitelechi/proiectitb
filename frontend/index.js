// MetaMask Connection
const connectMetaMask = async () => {
    const status = document.getElementById("walletStatus");
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            status.textContent = `Connected to MetaMask: ${accounts[0]}`;
        } catch (error) {
            status.textContent = `MetaMask Connection Failed: ${error.message}`;
        }
    } else {
        alert("MetaMask is not installed. Please install it from https://metamask.io/");
    }
};

/* Sui Wallet Connection
const connectSuiWallet = async () => {
    const status = document.getElementById("walletStatus");
    if (window.sui) {
        console.log("Sui Wallet Detected:", window.sui);

        try {
            // Request account connection from the Sui Wallet
            const accounts = await window.sui.request({
                method: "sui_connect",
            });

            // Fetch the active address (default account)
            const activeAddress = await window.sui.request({
                method: "sui_getAccounts",
            });

            console.log("Sui Wallet Accounts:", activeAddress);
            status.textContent = `Connected to Sui Wallet: ${activeAddress[0]}`;
        } catch (error) {
            console.error("Sui Wallet Connection Error:", error);
            status.textContent = `Sui Wallet Connection Failed: ${error.message}`;
        }
    } else {
        console.warn("Sui Wallet not detected.");
        alert("Sui Wallet is not installed. Please install it from https://chromewebstore.google.com/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil");
    }
};
*/

const connectSuiWallet = async () => {
    const status = document.getElementById("walletStatus");

    
    if (typeof window.sui !== "undefined") {
        console.log("Sui Wallet Detected:", window.sui);

        try {
            if (typeof window.sui.request !== "function") {
                throw new Error("window.sui.request is not a function");
            }

            const accounts = await window.sui.request({
                method: "sui_connect",
            });

            console.log("Accounts after sui_connect:", accounts);

            if (!accounts || accounts.length === 0) {
                throw new Error("No accounts found in the Sui Wallet");
            }

            const activeAddress = await window.sui.request({
                method: "sui_getAccounts",
            });

            console.log("Active Address after sui_getAccounts:", activeAddress);

            if (!activeAddress || activeAddress.length === 0) {
                throw new Error("Failed to fetch active address from the Sui Wallet");
            }

            console.log("Sui Wallet Accounts:", activeAddress);
            status.textContent = `Connected to Sui Wallet: ${activeAddress[0]}`;
        } catch (error) {
            console.error("Sui Wallet Connection Error:", error);
            status.textContent = `Sui Wallet Connection Failed: ${error.message}`;
        }
    } else {
        console.warn("Sui Wallet not detected.");
        alert("Sui Wallet is not installed. Please install it from the [Sui Wallet Chrome Web Store](https://chromewebstore.google.com/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil).");
    }
};
console.log("Checking for Sui Wallet object:", window.sui);








// Handle Token Bridging Simulation
const bridgeTokens = async () => {
    const amount = document.getElementById("amount").value;
    const sourceChain = document.getElementById("sourceChain").value;
    const destinationChain = document.getElementById("destinationChain").value;
    const transactionStatus = document.getElementById("transactionStatus");

    if (!amount || amount <= 0) {
        transactionStatus.textContent = "Please enter a valid token amount.";
        return;
    }

    if (sourceChain === destinationChain) {
        transactionStatus.textContent = "Source and destination chains cannot be the same.";
        return;
    }

    // Simulate bridging logic
    transactionStatus.textContent = `Bridging ${amount} tokens from ${sourceChain} to ${destinationChain}...`;
    setTimeout(() => {
        transactionStatus.textContent = `Successfully bridged ${amount} tokens from ${sourceChain} to ${destinationChain}.`;
    }, 2000); // Simulated delay
};

// Add Event Listeners
document.getElementById("connectMetaMask").addEventListener("click", connectMetaMask);
document.getElementById("connectSuiWallet").addEventListener("click", connectSuiWallet);
document.getElementById("bridgeTokens").addEventListener("click", bridgeTokens);
