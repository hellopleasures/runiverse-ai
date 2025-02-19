# Batch-request and multicall smart contracts | Mavis Docs

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

# Batch-request and multicall smart contracts

## Overview[​](/ronin/rpc/tutorials/batch-call#overview "Direct link to Overview")

Interacting with the Ronin blockchain can be optimized using batch JSON-RPC requests or multicall contracts. This approach is particularly effective for actions that require data consistency across multiple queries, such as fetching token balances from different contracts at a specific block height.

Advantages:

-   **Reduced latency**: By sending multiple requests at once, you reduce round trip times.
-   **Data consistency**: Ensures that all sub-requests relate to the same blockchain state, avoiding discrepancies in rapidly updating environments.

This tutorial will guide you through the process of making batch JSON-RPC requests and using multicall contracts to retrieve ERC-20 token balances (WETH, AXS, USDC, SLP) from a single address in one request.

## Prerequisites[​](/ronin/rpc/tutorials/batch-call#prerequisites "Direct link to Prerequisites")

-   Knowledge of HTTP and JavaScript.
-   Understanding of JSON-RPC; see the [JSON-RPC specification](https://www.jsonrpc.org/specification) for details.
-   [Node.js](https://nodejs.org) installed on your machine.
-   Package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

## Environment setup[​](/ronin/rpc/tutorials/batch-call#environment-setup "Direct link to Environment setup")

Use the Saigon testnet public RPC endpoint for testing purposes: `https://saigon-testnet.roninchain.com/rpc`. For production, switch to the secured endpoint `https://api-gateway.skymavis.com/rpc/testnet`

## Step 1. Set up your project[​](/ronin/rpc/tutorials/batch-call#step-1-set-up-your-project "Direct link to Step 1. Set up your project")

1.  Initialize your project:
    
    ```
    mkdir ronin_rpc_contract_samplecd ronin_rpc_contract_samplenpm init -y
    ```
    
    You should see output similar to this:
    
    ```
    Wrote to ***/ronin_rpc_contract_sample/package.json:{    "name": "ronin_rpc_sample",    "version": "1.0.0",    "description": "",    "main": "index.js",    "scripts": {        "test": "echo \"Error: no test specified\" && exit 1"    },    "keywords": [],    "author": "",    "license": "ISC"}
    ```
    
2.  Install necessary libraries:
    
    ```
    npm install ethers@5.7.2 axios
    ```
    
    `ethers.js` is a library that interacts with Ethereum and is compatible with Ronin. `axios` is used for making HTTP requests.
    

## Step 2. Implement a batch JSON-RPC request[​](/ronin/rpc/tutorials/batch-call#step-2-implement-a-batch-json-rpc-request "Direct link to Step 2. Implement a batch JSON-RPC request")

### About batch requests[​](/ronin/rpc/tutorials/batch-call#about-batch-requests "Direct link to About batch requests")

Batch requests allow you to execute multiple JSON-RPC calls in a single HTTP request.

Example of a batch request to fetch the block number four times:

```
curl https://saigon-testnet.roninchain.com/rpc \-X POST \-H "Content-Type: application/json" \-d '[{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []},{"jsonrpc": "2.0", "id": 2, "method": "eth_blockNumber", "params": []},{"jsonrpc": "2.0", "id": 3, "method": "eth_blockNumber", "params": []},{"jsonrpc": "2.0", "id": 4, "method": "eth_blockNumber", "params": []}]'
```

Example response:

```
[  {    "jsonrpc": "2.0",    "id": 1,    "result": "0x119ab0e"  },  {    "jsonrpc": "2.0",    "id": 2,    "result": "0x119ab0e"  },  {    "jsonrpc": "2.0",    "id": 3,    "result": "0x119ab0e"  },  {    "jsonrpc": "2.0",    "id": 4,    "result": "0x119ab0e"  }]
```

### Retrieve multiple balances using batch requests[​](/ronin/rpc/tutorials/batch-call#retrieve-multiple-balances-using-batch-requests "Direct link to Retrieve multiple balances using batch requests")

1.  Create a `batch_request.js` script to query ERC-20 balances:
    
    batch\_request.js
    
    ```
    // Import libraryconst { ethers } = require("ethers");const axios = require("axios");// Define your contract ABI and addressesconst contractABI = [  {    constant: true,    inputs: [      {        name: "_owner",        type: "address",      },    ],    name: "balanceOf",    outputs: [      {        name: "balance",        type: "uint256",      },    ],    payable: false,    stateMutability: "view",    type: "function",  },];// Define contract interfaceconst ERC20ContractInterface = new ethers.utils.Interface(contractABI);// Array of contract addresses on Saigon testnetconst contractAddresses = [  "0x29c6f8349a028e1bdfc68bfa08bdee7bc5d47e16", //WETH  "0x3c4e17b9056272ce1b49f6900d8cfd6171a1869d", //AXS  "0x067FBFf8990c58Ab90BaE3c97241C5d736053F77", //USDC  "0x82f5483623d636bc3deba8ae67e1751b6cf2bad2", //SLP];const callArray = [];contractAddresses.forEach((contractAddress, index) => {  callArray.push({    jsonrpc: "2.0",    method: "eth_call",    params: [      {        to: contractAddress,        data: ERC20ContractInterface.encodeFunctionData("balanceOf", [          "0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3",        ]),      },      "latest",    ],    id: Math.floor(Math.random() * 100000),  });});axios  .post("https://saigon-testnet.roninchain.com/rpc", callArray)  .then((response) => {    const results = response.data;    results.forEach((result, index) => {      console.log(        `Balance of ${contractAddresses[index]}: ${BigInt(result.result)}`,      );    });  });
    ```
    
    -   This script constructs a batch request to fetch balances of WETH, AXS, USDC, and SLP for a specified address.
    -   Responses are matched with requests using the `id` field.
2.  Execute your script:
    
    ```
    node batch_request.js
    ```
    
    You should see output similar to this:
    
    ```
    Balance of 0x29c6f8349a028e1bdfc68bfa08bdee7bc5d47e16: 11201224440355637251309597Balance of 0x3c4e17b9056272ce1b49f6900d8cfd6171a1869d: 42316291079920745148389Balance of 0x067FBFf8990c58Ab90BaE3c97241C5d736053F77: 714649238541Balance of 0x82f5483623d636bc3deba8ae67e1751b6cf2bad2: 109999995842674717
    ```
    

### Code explanation[​](/ronin/rpc/tutorials/batch-call#code-explanation "Direct link to Code explanation")

Let's walk through the contents of `batch_request.js`.

-   The script starts by importing `ethers` for blockchain interaction and `axios` for HTTP requests.
    
    ```
    const { ethers } = require("ethers");const axios = require("axios");
    ```
    
-   The contract ABI for ERC-20's `balanceOf` function is defined to interact with the blockchain. The ABI is an array of objects that describe the contract's functions, inputs, outputs, and other properties.
    
    ```
    const contractABI = [  {    constant: true,    inputs: [      {        name: "_owner",        type: "address",      },    ],    name: "balanceOf",    outputs: [      {        name: "balance",        type: "uint256",      },    ],    payable: false,    stateMutability: "view",    type: "function",  },];
    ```
    
-   An `ethers` interface is created for encoding and decoding calls to the smart contract.
    
    ```
    const ERC20ContractInterface = new ethers.utils.Interface(contractABI);
    ```
    
-   For each token contract, a JSON-RPC call object is crafted to query the balance and added to the batch request.
    
    ```
    const contractAddresses = [  "0x29c6f8349a028e1bdfc68bfa08bdee7bc5d47e16", //WETH  "0x3c4e17b9056272ce1b49f6900d8cfd6171a1869d", //AXS  "0x067FBFf8990c58Ab90BaE3c97241C5d736053F77", //USDC  "0x82f5483623d636bc3deba8ae67e1751b6cf2bad2", //SLP];
    ```
    
-   An empty array is initiated that will store the JSON-RPC call objects for each contract.
    
    ```
    const callArray = [];
    ```
    
-   A loop iterates over each contract address in `contractAddresses`. For each address, a JSON-RPC call object is created and added to the array `callArray`.
    
-   The JSON-RPC call object follows the JSON-RPC 2.0 specification. It specifies the method `eth_call`, the parameters for the call, including the contract address and the encoded function data, and an identifier `id`.
    
-   The `encodeFunctionData` method of `ERC20ContractInterface` is used to encode the function name (`balanceOf`) and its arguments (the address `0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3`) into the contract's function call data.
    
    ```
    contractAddresses.forEach((contractAddress, index) => {  callArray.push({    jsonrpc: "2.0",    method: "eth_call",    params: [      {        to: contractAddress,        data: ERC20ContractInterface.encodeFunctionData("balanceOf", [          "0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3",        ]),      },      "latest",    ],    id: Math.floor(Math.random() * 100000),  });});
    ```
    
-   The batch of requests is sent using `axios`, and responses are handled to display the balances.
    
    ```
    axios  .post("https://saigon-testnet.roninchain.com/rpc", callArray)  .then((response) => {    const results = response.data;    results.forEach((result, index) => {      console.log(        `Balance of ${contractAddresses[index]}: ${BigInt(result.result)}`,      );    });  });
    ```
    

**Note:** The code assumes you make a `balanceOf` call on each contract for the address `0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3`. Make sure to adjust the address or edit the code example accordingly.

## Step 3. Use a multicall smart contract[​](/ronin/rpc/tutorials/batch-call#step-3-use-a-multicall-smart-contract "Direct link to Step 3. Use a multicall smart contract")

### About multicall contracts[​](/ronin/rpc/tutorials/batch-call#about-multicall-contracts "Direct link to About multicall contracts")

Multicall contracts streamline interactions by allowing a single contract call to execute multiple actions.

Benefits:

-   Efficiency: reduces the number of RPC calls.
-   Atomicity: ensures all calls are executed at the same block state.
-   Consistency: optionally returns the block number to verify the timeliness of data.

### Retrieve multiple balances using multicall contracts[​](/ronin/rpc/tutorials/batch-call#retrieve-multiple-balances-using-multicall-contracts "Direct link to Retrieve multiple balances using multicall contracts")

In this tutorial, you make requests to a multicall contract that's already deployed on the Saigon testnet at the address `0x31c9ef8a631e2489e69833df3b2cb4bf0dc413bc`. You can view it in the [Ronin app](https://saigon-app.roninchain.com/address/ronin:31c9ef8a631e2489e69833df3b2cb4bf0dc413bc?t=contract).

1.  Create a `multicall_contract.js` script to query ERC-20 balances:
    
    multicall\_contract.js
    
    ```
    // Import libraryconst { ethers } = require("ethers");// Initialize the providerconst provider = new ethers.providers.JsonRpcProvider(  "https://saigon-testnet.roninchain.com/rpc",);// Define your ERC-20 contract ABI and interfaceconst contractABI = [  {    constant: true,    inputs: [      {        name: "_owner",        type: "address",      },    ],    name: "balanceOf",    outputs: [      {        name: "balance",        type: "uint256",      },    ],    payable: false,    stateMutability: "view",    type: "function",  },];const ERC20ContractInterface = new ethers.utils.Interface(contractABI);const multicallContractABI = [  {    constant: false,    inputs: [      {        internal_type: "",        name: "_calls",        type: "tuple[]",        components: [          {            internal_type: "",            name: "target",            type: "address",          },          {            internal_type: "",            name: "callData",            type: "bytes",          },        ],        indexed: false,      },    ],    name: "aggregate",    outputs: [      {        internal_type: "",        name: "_blockNumber",        type: "uint256",        indexed: false,      },      {        internal_type: "",        name: "_returnData",        type: "bytes[]",        indexed: false,      },    ],    payable: false,    stateMutability: "nonpayable",    type: "function",    anonymous: false,  },];const multicallInterface = new ethers.utils.Interface(multicallContractABI);// Array of contract addressesconst contractAddresses = [  "0x29c6f8349a028e1bdfc68bfa08bdee7bc5d47e16", //WETH  "0x3c4e17b9056272ce1b49f6900d8cfd6171a1869d", //AXS  "0x067FBFf8990c58Ab90BaE3c97241C5d736053F77", //USDC  "0x82f5483623d636bc3deba8ae67e1751b6cf2bad2", //SLP];const callArray = [];contractAddresses.forEach((contractAddress, index) => {  callArray.push([    contractAddress,    ERC20ContractInterface.encodeFunctionData("balanceOf", [      "0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3",    ]),  ]);});provider  .call({    to: "0x31c9ef8a631e2489e69833df3b2cb4bf0dc413bc",    data: multicallInterface.encodeFunctionData("aggregate", [callArray]),  })  .then((response) => {    const callResult = multicallInterface.decodeFunctionResult(      "aggregate",      response,    );    const results = callResult._returnData;    results.forEach((result, index) => {      console.log(        `Balance of ${contractAddresses[index]}: ${BigInt(result)}`,      );    });  });
    ```
    
    This script uses a deployed multicall contract to execute multiple balance checks in one transaction.
    
2.  Execute your script:
    
    ```
    node multicall_contract.js
    ```
    
    You should see output similar to this:
    
    ```
    Balance of 0x29c6f8349a028e1bdfc68bfa08bdee7bc5d47e16: 11201224440355637251309597Balance of 0x3c4e17b9056272ce1b49f6900d8cfd6171a1869d: 42316291079920745148389Balance of 0x067FBFf8990c58Ab90BaE3c97241C5d736053F77: 714649238541Balance of 0x82f5483623d636bc3deba8ae67e1751b6cf2bad2: 109999995842674717
    ```
    

### Code explanation[​](/ronin/rpc/tutorials/batch-call#code-explanation-1 "Direct link to Code explanation")

Let's walk through the contents of `multicall_contract.js`.

-   The script starts by importing `ethers` for blockchain interaction.
    
    ```
    const { ethers } = require("ethers");
    ```
    
-   A JSON-RPC provider is created using the URL of the Ronin node.
    
    ```
    const provider = new ethers.providers.JsonRpcProvider(  "https://saigon-testnet.roninchain.com/rpc",);
    ```
    
-   The ABI and interface of an ERC-20 contract are defined. The `contractABI` variable holds the ABI of an ERC-20 contract. The `ERC20ContractInterface` is created using the `ethers.utils.Interface` class and the contract's ABI.
    
    ```
    const contractABI = [...]; // ERC20 contract ABIconst ERC20ContractInterface = new ethers.utils.Interface(contractABI);
    ```
    
-   The ABI and interface of a multicall contract are defined. The `multicallContractABI` variable holds the ABI of a multicall contract, and the `multicallInterface` is created using the `ethers.utils.Interface` class.
    
    ```
    const multicallContractABI = [...]; // Multicall contract ABIconst multicallInterface = new ethers.utils.Interface(multicallContractABI);
    ```
    
-   An array of contract addresses is defined. The contracts represent the ERC-20 contracts for which you want to retrieve the balance.
    
    ```
    const contractAddresses = [...]; // Array of contract addresses
    ```
    
-   Calls are prepared for each token, specifying the contract and method to be invoked.
    
    ```
    const callArray = [];contractAddresses.forEach((contractAddress, index) => {  callArray.push([    contractAddress,    ERC20ContractInterface.encodeFunctionData("balanceOf", [      "0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3",    ]),  ]);});
    ```
    
-   A multicall is made, and the results are processed to print the balances.
    
    ```
    provider  .call({    to: "0x31c9ef8a631e2489e69833df3b2cb4bf0dc413bc",    data: multicallInterface.encodeFunctionData("aggregate", [callArray]),  })  .then((response) => {    const callResult = multicallInterface.decodeFunctionResult(      "aggregate",      response,    );    const results = callResult._returnData;    results.forEach((result, index) => {      console.log(        `Balance of ${contractAddresses[index]}: ${BigInt(result)}`,      );    });  });
    ```
    

## See also[​](/ronin/rpc/tutorials/batch-call#see-also "Direct link to See also")

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