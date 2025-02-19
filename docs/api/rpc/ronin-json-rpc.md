# Ronin JSON-RPC | Mavis Docs

null!==e?t(e):window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,t("light"))}(),function(){try{const n=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of n)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}(),document.documentElement.setAttribute("data-announcement-bar-initially-dismissed",function(){try{return"true"===localStorage.getItem("docusaurus.announcement.dismiss")}catch(t){}return!1}())

((e,t,s,c,a,l,r,o)=>{let i=document.documentElement,m=\["light","dark"\];function d(t){(Array.isArray(e)?e:\[e\]).forEach((e=>{let s="class"===e,c=a;s?(i.classList.remove(...c),i.classList.add(t)):i.setAttribute(e,t)})),function(e){o&&m.includes(e)&&(i.style.colorScheme=e)}(t)}try{let e=localStorage.getItem("theme")||"system";d("system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e)}catch(e){}})("class",0,0,0,\["light","dark"\],0,0,!0)

[

![Sky Mavis logo](/img/logo-dark.png)

](/)[Docs](/)[API](/api)[Blog](/blog)[Showcase](/showcase)

[

![Sky Mavis logo](/img/logo-dark.png)

](/)

-   [Docs](/)
-   [API](/api)
-   [Blog](/blog)
-   [Showcase](/showcase)
-   

← Back to main menu

-   [Overview](/api)
    
-   [Axie Experience Points API](/api/axp/axp-endpoints)
    
-   [Axie Infinity Origins API](/api/origins/origins-endpoints)
    
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
    -   [eth\_blockNumber](/api/rpc/eth-block-number)
    -   [eth\_call](/api/rpc/eth-call)
    -   [eth\_chainId](/api/rpc/eth-chain-id)
    -   [eth\_getBalance](/api/rpc/eth-get-balance)
    -   [eth\_getBlockByHash](/api/rpc/eth-get-block-by-hash)
    -   [eth\_getBlockByNumber](/api/rpc/eth-get-block-by-number)
    -   [eth\_getBlockTransactionCountByHash](/api/rpc/eth-get-block-transaction-count-by-hash)
    -   [eth\_getBlockTransactionCountByNumber](/api/rpc/eth-get-block-transaction-count-by-number)
    -   [eth\_getLogs](/api/rpc/eth-get-logs)
    -   [eth\_getTransactionByBlockHashAndIndex](/api/rpc/eth-get-transaction-by-block-hash-and-index)
    -   [eth\_getTransactionByBlockNumberAndIndex](/api/rpc/eth-get-transaction-by-block-number-and-index)
    -   [eth\_getTransactionByHash](/api/rpc/eth-get-transaction-by-hash)
    -   [eth\_getTransactionReceipt](/api/rpc/eth-get-transaction-receipt)
    -   [ronin\_getTransactionBySenderAndNonce](/api/rpc/ronin-get-transaction-by-sender-and-nonce)
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

Version: 1.0.0

# Ronin JSON-RPC

Skynet Sunsetting at end of Q1 2025

Sky Mavis is sunsetting Skynet services as part of Ronin's transition to a permissionless ecosystem. Please migrate to these alternative RPC providers:

-   **[Chainstack](https://chainstack.com/build-better-with-ronin/)** - RPC/WS node with a free tier available. Supports social logins like GitHub and crypto top-up for paid plans. Archive nodes available starting from the lowest paid plan.
-   **[dRPC](https://drpc.org/chainlist/ronin)** - Ronin and Saigon testnet globally distributed RPC nodes, with high uptime maintained by professional independent teams under one load balancer.
-   **[Moralis](https://docs.moralis.com/supported-networks)** - Enterprise grade RPC node API for Ronin and Saigon testnet. Supports full archive nodes and extended RPC methods. Free tier available.
-   **[Tenderly](https://tenderly.co/web3-gateway)** - Integrate a high-performance production Node RPC with built-in debugging tools and embedded development environments for any EVM chain.
-   **[Alchemy](https://www.alchemy.com/)** - Web3 developer platform that has powered top dApps for over half a decade. Access a full suite of RPC node APIs, Subgraphs, and NFT API (coming ~ February).

A collection of Ronin JSON-RPC API endpoints. The Ronin JSON-RPC API is a stateless, light-weight, and efficient API that allows you to interact with the Ronin network.

Base URLs:

Mainnet

```
https://api-gateway.skymavis.com/rpc
```

Testnet

```
https://api-gateway.skymavis.com/rpc/testnet
```

## Authentication[​](/api/rpc/ronin-json-rpc#authentication "Direct link to Authentication")

-   API Key: ApiKeyAuth

Security Scheme Type:

apiKey

Header parameter name:

X-API-KEY

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis
