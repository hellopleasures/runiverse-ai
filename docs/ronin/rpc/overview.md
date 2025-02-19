# Ronin RPC | Mavis Docs

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

# Ronin RPC

## Overview[​](/ronin/rpc/overview#overview "Direct link to Overview")

The Ronin RPC (remote procedure call) services are built to power any web3 application on Ronin that needs a reliable source of blockchain data. Using the RPC services, developers don't have to set up and maintain their own Ronin nodes to interact with the blockchain.

info

API reference: [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)

## RPC endpoints[​](/ronin/rpc/overview#rpc-endpoints "Direct link to RPC endpoints")

### Public RPC endpoints[​](/ronin/rpc/overview#public-rpc-endpoints "Direct link to Public RPC endpoints")

Public RPC endpoints provide universal access to the blockchain via straightforward URLs, no authentication needed. This open-door approach ensures that anyone can start interacting with Ronin’s blockchain effortlessly.

Name

Endpoint

Luganodes

`https://ronin.lgns.net/rpc`

Ronin mainnet

`https://api.roninchain.com/rpc`

Saigon testnet

`https://saigon-testnet.roninchain.com/rpc`

### Private RPC endpoints[​](/ronin/rpc/overview#private-rpc-endpoints "Direct link to Private RPC endpoints")

Skynet sunsetting by the end of Q1 2025

Sky Mavis is sunsetting Skynet services as part of Ronin's transition to a permissionless ecosystem. Please migrate to these alternative RPC providers:

-   **[Chainstack](https://chainstack.com/build-better-with-ronin/)** - RPC/WS node with a free tier available. Supports social logins like GitHub and crypto top-up for paid plans. Archive nodes available starting from the lowest paid plan.
-   **[dRPC](https://drpc.org/chainlist/ronin)** - Ronin and Saigon testnet globally distributed RPC nodes, with high uptime maintained by professional independent teams under one load balancer.
-   **[Moralis](https://docs.moralis.com/supported-networks)** - Enterprise grade RPC node API for Ronin and Saigon testnet. Supports full archive nodes and extended RPC methods. Free tier available.
-   **[Tenderly](https://tenderly.co/web3-gateway)** - Integrate a high-performance production Node RPC with built-in debugging tools and embedded development environments for any EVM chain.
-   **[Alchemy](https://www.alchemy.com/)** - Web3 developer platform that has powered top dApps for over half a decade. Access a full suite of RPC node APIs, Subgraphs, and NFT API (coming ~ February).

Opt for our private RPC endpoints for enhanced control and scalability, maintained by dedicated node providers. These nodes come in various service tiers, from complimentary basic access to premium levels offering higher request limits and advanced features.

#### Sky Mavis's endpoints[​](/ronin/rpc/overview#sky-maviss-endpoints "Direct link to Sky Mavis's endpoints")

Node

Endpoint

Rate limit

Mainnet RPC

`https://api-gateway.skymavis.com/rpc`

100 requests per second; 140,000 requests per day

Testnet RPC

`https://api-gateway.skymavis.com/rpc/testnet`

100 requests per second; 140,000 requests per day

Mainnet archive RPC

`https://api-gateway.skymavis.com/rpc/archive`

100 requests per second; 140,000 requests per day

Testnet archive RPC

`https://api-gateway.skymavis.com/rpc/testnet-archive`

100 requests per second; 140,000 requests per day

RPC over WebSocket

`wss://api-gateway.skymavis.com/rpc/socket`

10 requests per second; 100 requests per day

## Using the API with Web3.js and ethers.js[​](/ronin/rpc/overview#using-the-api-with-web3js-and-ethersjs "Direct link to Using the API with Web3.js and ethers.js")

### Web3.js example[​](/ronin/rpc/overview#web3js-example "Direct link to Web3.js example")

Web3.js

```
const options = {  headers: [{ name: "x-api-key", value: "xxxxxx" }],};const web3Provider = new Web3.providers.HttpProvider(  "https://api-gateway.skymavis.com/rpc",  options,);const web3 = new Web3(web3Provider);console.log("Latest block number:", await web3.eth.getBlockNumber());
```

### Ethers.js example[​](/ronin/rpc/overview#ethersjs-example "Direct link to Ethers.js example")

Ethers.js

```
const connection = {  url: "https://api-gateway.skymavis.com/rpc",  headers: {    "x-api-key": "xxxxx",  },};const provider = new ethers.providers.JsonRpcProvider(connection);console.log("Latest block number:", await provider.getBlockNumber());
```

### Adding API key in request header[​](/ronin/rpc/overview#adding-api-key-in-request-header "Direct link to Adding API key in request header")

For simpler scenarios, you can include your API key directly in the query string:

Web3.js

```
const apiKey = "YOUR_API_KEY";const web3Provider = new Web3.providers.HttpProvider(  "https://api-gateway.skymavis.com/rpc?apikey=" + apiKey,);
```

Ethers.js

```
const apiKey = "YOUR_API_KEY";const provider = new ethers.providers.JsonRpcProvider(  "https://api-gateway.skymavis.com/rpc?apikey=" + apiKey,);
```

cURL

```
curl --location --request POST 'https://api-gateway.skymavis.com/rpc?apikey=YOUR_API_KEY' \--header 'Content-Type: application/json' \--data-raw '{    "jsonrpc": "2.0",    "method": "eth_blockNumber",    "params": [    ],    "id": 1}'
```

## See also[​](/ronin/rpc/overview#see-also "Direct link to See also")

[JSON-RPC API reference](/api/rpc/ronin-json-rpc)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis