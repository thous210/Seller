//import detectEthereumProvider from '@metamask/detect-provider';
//import MetaMaskSDK from '@metamask/sdk';

function submitForm() {
    var form = document.getElementById("myForm");

    var data = {};
    data["amount"] = parseInt(form.elements.amount.value);
    data["price"] = parseFloat(form.elements.price.value);
    data["event_name"] = form.elements.event_name.value;
    data["image"] = form.elements.image.value;
    data["explanation"] = form.elements.description.value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/new', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}


/*
const MMSDK = new MetaMaskSDK(options);

const ethereum = MMSDK.getProvider();

function connect () {
ethereum.request({ method: 'eth_requestAccounts', params: [] });
}
document.getElementById('connectButton', connect);
*/

/*
const provider = await detectEthereumProvider();

if (provider) {
    startApp(provider);
} else {
    console.log('Please install MetaMask!');
}

function startApp(provider) {
    if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
    }
}

const chainId = await ethereum.request({ method: 'eth_chainId' });

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
    window.location.reload();
}

let currentAccount = null;
ethereum
    .request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
        console.error(err);
    });

ethereum.on('accountsChanged', handleAccountsChanged);

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
    }
}

document.getElementById('connectButton', connect);

function connect() {
    ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
}
*/
