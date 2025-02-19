# Connect over WebSocket | Mavis Docs

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

# Connect over WebSocket

Skynet sunsetting by the end of Q1 2025

Sky Mavis is sunsetting Skynet services as part of Ronin's transition to a permissionless ecosystem. Please migrate to these alternative RPC providers:

-   **[Chainstack](https://chainstack.com/build-better-with-ronin/)** - RPC/WS node with a free tier available. Supports social logins like GitHub and crypto top-up for paid plans. Archive nodes available starting from the lowest paid plan.
-   **[dRPC](https://drpc.org/chainlist/ronin)** - Ronin and Saigon testnet globally distributed RPC nodes, with high uptime maintained by professional independent teams under one load balancer.
-   **[Moralis](https://docs.moralis.com/supported-networks)** - Enterprise grade RPC node API for Ronin and Saigon testnet. Supports full archive nodes and extended RPC methods. Free tier available.
-   **[Tenderly](https://tenderly.co/web3-gateway)** - Integrate a high-performance production Node RPC with built-in debugging tools and embedded development environments for any EVM chain.
-   **[Alchemy](https://www.alchemy.com/)** - Web3 developer platform that has powered top dApps for over half a decade. Access a full suite of RPC node APIs, Subgraphs, and NFT API (coming ~ February).

## Overview[​](/ronin/rpc/guides/websocket#overview "Direct link to Overview")

Ronin WebSocket facilitate a persistent, real-time data stream directly from Ronin, enabling your decentralized applications (dApps) to respond instantly to on-chain events. This is essential for dApps that thrive on immediacy and interactivity, such as gaming platforms or trading apps.

note

WebSocket connections are limited to Ethereum namespaces within the Ronin WebSocket infrastructure.

## Prerequisites[​](/ronin/rpc/guides/websocket#prerequisites "Direct link to Prerequisites")

-   An API key. Retrieve your API key from the [Developer Console](https://developers.skymavis.com/console/applications/) under **your app > Information > KEY** section.
-   Permission to use Ronin WebSocket. Request in the Developer Console under **your app > App Permission > Ronin Websocket > Request Access**.

For more information, see [Get started](/get-started).

## Subscribe to and retrieve messages[​](/ronin/rpc/guides/websocket#subscribe-to-and-retrieve-messages "Direct link to Subscribe to and retrieve messages")

Connect to the WebSocket server at the following URL:

-   Mainnet: `wss://api-gateway.skymavis.com/rpc/socket`
-   Testnet: `wss://api-gateway.skymavis.com/rpc/testnet-socket` (to get access, ask your Sky Mavis point of contact)

You can use any WebSocket client library to establish the connection. For example, `ws` for Node.js.

```
const WebSocket = require("ws");const options = {  headers: {    "X-API-KEY": "YOUR-API-KEY",  },};const ws = new WebSocket("wss://api-gateway.skymavis.com/rpc/socket", options);const message = {  method: "eth_subscribe",  params: ["newHeads"],  id: 1,  jsonrpc: "2.0",};ws.on("open", function open() {  ws.send(JSON.stringify(message));});ws.on("message", function message(data) {  console.log("received: %s", data);});
```

## Subscription types[​](/ronin/rpc/guides/websocket#subscription-types "Direct link to Subscription types")

### newHeads[​](/ronin/rpc/guides/websocket#newheads "Direct link to newHeads")

Receives notifications each time a new block header is added to the blockchain.

Example request:

```
{  "method": "eth_subscribe",  "params": ["newHeads"],  "id": 1,  "jsonrpc": "2.0"}
```

Response:

```
{  "jsonrpc": "2.0",  "method": "eth_subscription",  "params": {    "subscription": "0xeb7dcdfe2bfc5e0bbcf2b776ba681d3c",    "result": {      "parentHash": "0x961d7ae5602fdf5da4425844c25d56f3e230706b5435269af3e7c0c426e9c680",      "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",      "miner": "0xae53daac1bf3c4633d4921b8c3f8d579e757f5bc",      "stateRoot": "0xa581fd1d5b0f99f37ee267c4c0946d9dd125398ccb5a71fbcb7a0203329aae02",      "transactionsRoot": "0xb0c66c47c42d8f641e2197a43194a227a3aa86df791974a7528a6589a5809f21",      "receiptsRoot": "0x9f7532c324f8ca7f0b1a0a3ebd7aee11a7646266e04da2a773a6fdbae8356335",      "logsBloom": "0x00000000080000000000000000000000100000080000004000000000000000000800800000002000002001000000800000404000000000000000000000080004000000000000000000000008000000000000600000800000000000000000000000000000000001000000000004000000000080000000000000000014000000200100000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000200000000000000000000822000000000000020000000000000000000000000010000000000a00000000200000000000000000000000000000000800000000000040000000000000",      "difficulty": "0x7",      "number": "0x177a012",      "gasLimit": "0x5f5e100",      "gasUsed": "0x2ac19",      "timestamp": "0x6479637c",      "extraData": "0xd683020502846765746886676f312e3137856c696e757800000000000000000073aa5aff3ad3a20354f3ec7d30a630d26cd027366a6eec125a4833f6649cbc8f09ce0bbad23ebb679e69e143666a17098b6bfd221c66e65368269f736a4df89a00",      "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",      "nonce": "0x0000000000000000",      "baseFeePerGas": null,      "hash": "0xbd13f924e30908b63e14c49890fc32efec1de3c3131e9e6af28b347a75f33ade"    }  }}
```

### newPendingTransactions[​](/ronin/rpc/guides/websocket#newpendingtransactions "Direct link to newPendingTransactions")

Tracks new transactions as soon as they are added to the pending pool.

Example request:

```
{  "method": "eth_subscribe",  "params": ["newPendingTransactions"],  "id": 1,  "jsonrpc": "2.0"}
```

Response:

```
{  "jsonrpc": "2.0",  "method": "eth_subscription",  "params": {    "subscription": "0xec9cc07bfb60a076695ce1999dba59db",    "result": "0xf0887b1b728e5ecaba5678f8829eb80089f99c190fbf943f5fadb7108b9a0955"  }}
```

### logs[​](/ronin/rpc/guides/websocket#logs "Direct link to logs")

Monitor specific contract logs in real-time, essential for applications that need to track specific events such as transfers or updates within contracts.

Example request: subscribe to `Transfer()` events of a specific contract.

```
{  "method": "eth_subscribe",  "params": [    "logs",    {      "address": "0xc99a6A985eD2Cac1ef41640596C5A5f9F4E19Ef5",      "topics": [        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"      ]    }  ],  "id": 1,  "jsonrpc": "2.0"}
```

Response:

```
{  "jsonrpc": "2.0",  "method": "eth_subscription",  "params": {    "subscription": "0x98a829e969ef490f074bc445ba5363b7",    "result": {      "address": "0x814a9c959a3ef6ca44b5e2349e3bba9845393947",      "topics": [        "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",        "0x000000000000000000000000fff9ce5f71ca6178d3beecedb61e7eff1602950e",        "0x000000000000000000000000cfe5b7b3502145c62d41492c7f04c1a6dbe29076",        "0x00000000000000000000000099cf2aa4177984b1c437304ae963a88eeb2066d8"      ],      "data": "0x00000000000000000000000000000000000000000000000000000000001e94500000000000000000000000000000000000000000000000000000000000000001",      "blockNumber": "0x177a268",      "transactionHash": "0x7be22488e41e395a81b717a4969b258b59f43d9caa6a853e293a7117cacbadf0",      "transactionIndex": "0x3",      "blockHash": "0xafca38bcea645165e6bceb8ea3c6eda6e37686bec7596e7fc797baf1a25611bd",      "logIndex": "0x8",      "removed": false    }  }}
```

## See also[​](/ronin/rpc/guides/websocket#see-also "Direct link to See also")

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