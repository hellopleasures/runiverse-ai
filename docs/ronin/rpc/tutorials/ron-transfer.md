# Transfer RON | Mavis Docs

!function(){function t(t){document.documentElement.setAttribute("data-theme",t)}var e=function(){try{return new URLSearchParams(window.location.search).get("docusaurus-theme")}catch(t){}}()||function(){try{return window.localStorage.getItem("theme")}catch(t){}}();null!==e?t(e):window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,t("light"))}(),function(){try{const n=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of n)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}(),document.documentElement.setAttribute("data-announcement-bar-initially-dismissed",function(){try{return"true"===localStorage.getItem("docusaurus.announcement.dismiss")}catch(t){}return!1}())

((e,t,s,c,a,l,r,o)=>{let i=document.documentElement,m=\["light","dark"\];function d(t){(Array.isArray(e)?e:\[e\]).forEach((e=>{let s="class"===e,c=a;s?(i.classList.remove(...c),i.classList.add(t)):i.setAttribute(e,t)})),function(e){o&&m.includes(e)&&(i.style.colorScheme=e)}(t)}try{let e=localStorage.getItem("theme")||"system";d("system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e)}catch(e){}})("class",0,0,0,\["light","dark"\],0,0,!0)

[Skip to main content](#__docusaurus_skipToContent_fallback)

Skynet services (RPC/WebSocket/Webhooks/Web3 API) will be deprecated by the end of Q1 2025 as part of Ronin's transition to a permissionless ecosystem. [Learn more](/deprecation-notice).

[

![Sky Mavis logo](/img/logo-dark.png)

](/)[Docs](/)[API](/api)[Blog](/blog)[Showcase](/showcase)

[Developer Console](https://developers.skymavis.com/console/applications/)

Search⌘K

[

![Sky Mavis logo](/img/logo-dark.png)

](/)

-   [Docs](/)
-   [API](/api)
-   [Blog](/blog)
-   [Showcase](/showcase)
-   [Developer Console](https://developers.skymavis.com/console/applications/)

← Back to main menu

-   [Ronin JSON-RPC](/ronin/rpc/overview)
    
    -   Tutorials
        
    -   [Transfer RON](/ronin/rpc/tutorials/ron-transfer)
    -   [Interact with a smart contract](/ronin/rpc/tutorials/smart-contract)
    -   [Batch-request and multicall smart contracts](/ronin/rpc/tutorials/batch-call)
    -   How to
        
    -   [Connect over WebSocket](/ronin/rpc/guides/websocket)
    -   [Connect to an archive node](/ronin/rpc/guides/archive-node)
    -   Reference
        
    -   [Troubleshooting](/ronin/rpc/reference/troubleshooting)

On this page

# Transfer RON

## Overview[​](/ronin/rpc/tutorials/ron-transfer#overview "Direct link to Overview")

This tutorial shows how to transfer RON from one account to another, and verify the transaction using Ronin JSON-RPC methods.

## Prerequisites[​](/ronin/rpc/tutorials/ron-transfer#prerequisites "Direct link to Prerequisites")

-   [Node.js](https://nodejs.org) or your preferred web3 client written in another language.
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package installation. This tutorial uses npm.
-   Basic knowledge of JavaScript.
-   Basic knowledge of HTTP.
-   Basic knowledge of JSON-RPC. For more information, see the [JSON-RPC specification](https://www.jsonrpc.org/specification).

## Environment[​](/ronin/rpc/tutorials/ron-transfer#environment "Direct link to Environment")

Throughout this tutorial, you use the public RPC endpoint for the Saigon testnet: `https://saigon-testnet.roninchain.com/rpc`.

note

We recommend using the public endpoint only for testing. For production, make sure to use the developer portal's endpoint `https://api-gateway.skymavis.com/rpc/testnet`.

## Step 1. Create a project[​](/ronin/rpc/tutorials/ron-transfer#step-1-create-a-project "Direct link to Step 1. Create a project")

1.  Create a new directory for your project and open the terminal in that directory:
    
    ```
    cd ~/mkdir ronin_rpc_contract_samplecd ronin_rpc_contract_sample
    ```
    
2.  Initialize a new Node.js project:
    
    ```
    npm init -y
    ```
    
    You should see output similar to this:
    
    ```
    Wrote to ** * /ronin_rpc_contract_sample/package.json:    {        "name": "ronin_rpc_sample",        "version": "1.0.0",        "description": "",        "main": "index.js",        "scripts": {            "test": "echo \"Error: no test specified\" && exit 1"        },        "keywords": [],        "author": "",        "license": "ISC"    }
    ```
    
3.  Install the `ethers.js` library:
    
    ```
    npm install ethers@5.7.2
    ```
    

This tutorial uses `ethers.js` version 5.7.2.

## Step 2. Create wallets[​](/ronin/rpc/tutorials/ron-transfer#step-2-create-wallets "Direct link to Step 2. Create wallets")

You need to create two wallets: one for the sender and one for the receiver. We recommend using the Ronin Wallet browser extension for wallet creation. To create a wallet, open the extension > select **Account** > **Create Account**.

1.  Create a sender's wallet. The example address used in this tutorial `0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3`.
2.  Create a receiver's wallet. The example address in this tutorial is `0x283b4baa1d0415603c81edc1c68fadd3c790837c`.
3.  Retrieve the private key from the sender's Ronin Wallet. Open the Ronin Wallet browser extension, go to **Account > Manage**, select the sender's account, and then click **View private key**.
4.  Claim some RON to the sender's wallet using [Ronin Faucet](https://faucet.roninchain.com/) before transferring to others. You can create up to five requests a day, 1 RON per request.

## Step 3. Create a script and run it[​](/ronin/rpc/tutorials/ron-transfer#step-3-create-a-script-and-run-it "Direct link to Step 3. Create a script and run it")

At this step, you create a script to transfer RON between wallets and verify the balance after.

1.  Create a file called `transfer_ron.js` and paste the following code:
    
    transfer\_ron.js
    
    ```
    const { ethers } = require("ethers");const { JsonRpcProvider } = require("@ethersproject/providers");const { resolveProperties } = require("@ethersproject/properties");// A wrapper to workaround the gasPrice issue in etherjs version 5 after// London hardfork when sending transaction//// This is a modified version based on @ethersproject/abstract-providerclass WrappedJsonProvider extends JsonRpcProvider {  async getFeeData() {    const { block, gasPrice } = await resolveProperties({      block: this.getBlock("latest"),      gasPrice: this.getGasPrice().catch((_) => {        return null;      }),    });    let lastBaseFeePerGas = null,      maxFeePerGas = null,      maxPriorityFeePerGas = null;    if (block && block.baseFeePerGas) {      lastBaseFeePerGas = block.baseFeePerGas;      maxPriorityFeePerGas =        gasPrice != null ? gasPrice : BigNumber.from("1500000000");      maxFeePerGas = block.baseFeePerGas.mul(2).add(maxPriorityFeePerGas);    }    return {      lastBaseFeePerGas,      maxFeePerGas,      maxPriorityFeePerGas,      gasPrice,    };  }}// Initialize the providerconst provider = new WrappedJsonProvider(  "https://saigon-testnet.roninchain.com/rpc",);
    ```
    

This code imports the required libraries and initializes the node provider, which is the public Ronin RPC endpoint.

2.  Create a function to send RON and verify the balance.
    
    Heads-up
    
    To run this code, you need the following:
    
    -   The private key from the sender's Ronin Wallet. Retrieve the private key in your Ronin Wallet browser extension:
        
        1.  Open the extension, and at the top right corner, click the profile icon.
        2.  Click **Manage**. You'll see a list of your accounts.
        3.  Select the account from which you wish to deploy the contract, then click **View private key**, and then enter your password.
    -   The receiver's wallet, which you created at the [previous step](/ronin/rpc/tutorials/ron-transfer#step-2-create-wallets).
        
    
    Replace `YOUR_PRIVATE_KEY` and `RECIPIENT_ADDRESS` with the sender's private key and receiver's wallet address, respectively.
    
    transfer\_ron.js
    
    ```
    const { ethers } = require("ethers");// Initialize the Providerconst provider = new ethers.providers.JsonRpcProvider(  "https://saigon-testnet.roninchain.com/rpc",);async function sendRON(privateKey, toAddress, amount) {  // Create a wallet from the private key  const wallet = new ethers.Wallet(privateKey, provider);  // Convert amount to Wei  const weiAmount = ethers.utils.parseEther(amount);  // Create a transaction object  const transaction = {    to: toAddress,    value: weiAmount,  };  // Sign and send the transaction  const transactionResponse = await wallet.sendTransaction(transaction);  console.log(transactionResponse);  // Wait for the transaction to be confirmed  await transactionResponse.wait();  // Verify the balance after the transaction  const balance = await provider.getBalance(wallet.address);  console.log(    "Balance after sending RON:",    ethers.utils.formatEther(balance),    "RON",  );}// Call the sendRON function with the necessary parametersconst privateKey = "YOUR_PRIVATE_KEY";const toAddress = "RECIPIENT_ADDRESS";const amount = "0.1"; // Amount of RON to sendsendRON(privateKey, toAddress, amount);
    ```
    
3.  Execute the code by running the following command:
    
    ```
    node transfer_ron.js
    ```
    
    You should see output similar to this:
    
    ```
    {    nonce: 55925,    gasPrice: BigNumber {        _hex: '0x04a817c800',        _isBigNumber: true    },    gasLimit: BigNumber {        _hex: '0x5208',        _isBigNumber: true    },    to: '0x283b4Baa1d0415603C81edc1C68FadD3C790837C',    value: BigNumber {        _hex: '0x016345785d8a0000',        _isBigNumber: true    },    data: '0x',    chainId: 2021,    v: 4078,    r: '0x384a2ed47a690349e47383af78b065d9b36c2a8e716d3027fc386d7b0f354106',    s: '0x51b068a8f9ff66daa1b52611ad87dffb434179d5f615dfe3d97497fbd60dee97',    from: '0xf6fd5FcA4Bd769BA495B29B98dba5F2eCF4CEED3',    hash: '0x0c11bfd6035665c34377d0eb9de4cff98ed9e27ada4ab087aa842a8eaa6fa55d',    type: null,    confirmations: 0,    wait: [Function(anonymous)]}Balance after sending RON: 976242834.971306728277726832 RON
    ```
    

## Step 4. Verify the result[​](/ronin/rpc/tutorials/ron-transfer#step-4-verify-the-result "Direct link to Step 4. Verify the result")

### Verify the transaction details[​](/ronin/rpc/tutorials/ron-transfer#verify-the-transaction-details "Direct link to Verify the transaction details")

#### Verify using the Ronin app[​](/ronin/rpc/tutorials/ron-transfer#verify-using-the-ronin-app "Direct link to Verify using the Ronin app")

Open the [Ronin app](https://saigon-app.roninchain.com/) and paste the transaction hash in the search field.

#### Verify using the Ronin JSON-RPC API[​](/ronin/rpc/tutorials/ron-transfer#verify-using-the-ronin-json-rpc-api "Direct link to Verify using the Ronin JSON-RPC API")

Make a request to the `eth_getTransactionReceipt` method by running the following command:

```
curl --location 'https://saigon-testnet.roninchain.com/rpc' \--header 'Content-Type: application/json' \--data '{	"jsonrpc":"2.0",	"method":"eth_getTransactionReceipt",	"params":[		"0x0c11bfd6035665c34377d0eb9de4cff98ed9e27ada4ab087aa842a8eaa6fa55d"	],	"id":1}'
```

The response is the transaction's receipt:

```
{  "jsonrpc": "2.0",  "id": 1,  "result": {    "blockHash": "0x0dcaa2ebb57531322c80e2b9d8165d5d947f25ee0aa66745349b5c4067a7c80e",    "blockNumber": "0x116fcd5",    "contractAddress": null,    "cumulativeGasUsed": "0x5208",    "effectiveGasPrice": "0x4a817c800",    "from": "0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3",    "gasUsed": "0x5208",    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",    "status": "0x1",    "to": "0x283b4baa1d0415603c81edc1c68fadd3c790837c",    "transactionHash": "0x0c11bfd6035665c34377d0eb9de4cff98ed9e27ada4ab087aa842a8eaa6fa55d",    "transactionIndex": "0x0",    "type": "0x0",    "logs": []  }}
```

### Verify recipient balance[​](/ronin/rpc/tutorials/ron-transfer#verify-recipient-balance "Direct link to Verify recipient balance")

#### Using Ronin app[​](/ronin/rpc/tutorials/ron-transfer#using-ronin-app "Direct link to Using Ronin app")

Open the [Ronin app](https://saigon-app.roninchain.com/) and paste the recipient's address in the search field.

#### Using JSON-RPC API[​](/ronin/rpc/tutorials/ron-transfer#using-json-rpc-api "Direct link to Using JSON-RPC API")

Make a request to the `eth_getBalance` method by running the following command:

```
curl --location 'https://saigon-testnet.roninchain.com/rpc' \--header 'Content-Type: application/json' \--data '{	"jsonrpc":"2.0",	"method":"eth_getBalance",	"params":[        "0x283b4baa1d0415603c81edc1c68fadd3c790837c",        "latest"	],	"id":1}'
```

The `latest` parameter is used to request the most recent result, which means that the response you receive may be different from the example:

```
{  "jsonrpc": "2.0",  "id": 1,  "result": "0x110c3344c12ff03a994c5d"}
```

## Code explanation[​](/ronin/rpc/tutorials/ron-transfer#code-explanation "Direct link to Code explanation")

This section walks you through the code of the `sendRON` function.

1.  This line creates a wallet using the private key by creating a new `Wallet` object with the private key and provider.
    
    ```
    const wallet = new ethers.Wallet(privateKey, provider);
    ```
    
2.  This line converts the amount of RON to Wei using the `parseEther` function from `ethers.js`:
    
    ```
    const weiAmount = ethers.utils.parseEther(amount);
    ```
    
3.  Here, the code creates a transaction object with the recipient address and the Wei amount:
    
    ```
    const transaction = {  to: toAddress,  value: weiAmount,};
    ```
    
4.  The following line signs and sends the transaction by using the `sendTransaction` method of the wallet:
    
    ```
    const transactionResponse = await wallet.sendTransaction(transaction);
    ```
    
    The RPC methods used by this function are as follows:
    
    eth\_getTransactionCount
    
    ```
    {  "method": "eth_getTransactionCount",  "params": ["<YOUR_PUBLIC_KEY (detect from YOUR_PRIVATE_KEY)>", "pending"],  "id": 47,  "jsonrpc": "2.0"}
    ```
    
    eth\_gasPrice
    
    ```
    {  "method": "eth_gasPrice",  "params": [],  "id": 50,  "jsonrpc": "2.0"}
    ```
    
    eth\_estimateGas
    
    ```
    {  "method": "eth_estimateGas",  "params": [    {      "gasPrice": "0x4a817c800",      "value": "0x8ac7230489e80000",      "from": "<YOUR_PUBLIC_KEY (detect from YOUR_PRIVATE_KEY)>",      "to": "<RECIPIENT_ADDRESS>"    }  ],  "id": 52,  "jsonrpc": "2.0"}
    ```
    
    eth\_sendRawTransaction
    
    ```
    {  "method": "eth_sendRawTransaction",  "params": ["<Signature when use YOUR_PRIVATE_KEY to sign transaction>"],  "id": 56,  "jsonrpc": "2.0"}
    ```
    
5.  This line waits for the transaction to be confirmed using the `wait` method of the transaction response.
    
    ```
    await transactionResponse.wait();
    ```
    
    The RPC method used by this function is `eth_getTransactionReceipt`:
    
    eth\_getTransactionReceipt
    
    ```
    {  "method": "eth_getTransactionReceipt",  "params": [    "<Your transaction hash after call eth_sendRawTransaction success>"  ],  "id": 68,  "jsonrpc": "2.0"}
    ```
    
6.  The following line verifies the balance after the transaction by getting the balance of the wallet's address using the `getBalance` method of the provider and printing it out in RON using the `formatEther` function.
    
    ```
    const balance = await provider.getBalance(wallet.address);
    ```
    
    The RPC method used by this function is `eth_getBalance`:
    
    ```
    {  "method": "eth_getBalance",  "params": ["<YOUR_PUBLIC_KEY (detect from YOUR_PRIVATE_KEY)>", "latest"],  "id": 72,  "jsonrpc": "2.0"}
    ```
    

## See also[​](/ronin/rpc/tutorials/ron-transfer#see-also "Direct link to See also")

[Ronin JSON-RPC API reference](/api/rpc/ronin-json-rpc)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis