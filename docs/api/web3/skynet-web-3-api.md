# Skynet Web3 API | Mavis Docs

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
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
    -   [Introduction](/api/web3/skynet-web-3-api)
    -   [Accounts](/api/web3/skynet-web-3-api)
        
    -   [Blocks](/api/web3/skynet-web-3-api)
        
    -   [Logs](/api/web3/skynet-web-3-api)
        
    -   [Collections](/api/web3/skynet-web-3-api)
        
    -   [Contracts](/api/web3/skynet-web-3-api)
        
    -   [Transactions](/api/web3/skynet-web-3-api)
        
    -   [Token transfers](/api/web3/skynet-web-3-api)
        
    -   [NFTs](/api/web3/skynet-web-3-api)
        
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

Version: v3.1.6

# Skynet Web3 API

Skynet sunsetting by the end of Q1 2025

Sky Mavis is sunsetting Skynet services as part of Ronin's transition to a permissionless ecosystem. For NFT data, token transfers, and blockchain data querying capabilities, please migrate to:

-   **[Moralis](https://docs.moralis.com/web3-data-api/evm/api-reference)**: Comprehensive APIs and real-time webhooks for wallet, token, NFT, and price data.
-   Coming Soon **[Alchemy](https://www.alchemy.com/)** - Web3 developer platform that has powered top dApps for over half a decade. Access a full suite of RPC node APIs, Subgraphs, and NFT API (coming ~ February).

Our cutting-edge Web3 API provides enhanced functionality and superior performance across key blockchain operations, including Accounts, NFTs, Blocks, Collections, Contracts, and Transactions. Designed with the latest technology, our API offers a seamless experience for developers, enabling efficient and scalable interactions with blockchain networks.

## Authentication[​](/api/web3/skynet-web-3-api#authentication "Direct link to Authentication")

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
