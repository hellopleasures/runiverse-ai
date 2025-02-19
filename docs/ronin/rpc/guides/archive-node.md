# Connect to an archive node | Mavis Docs

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

# Connect to an archive node

Skynet sunsetting by the end of Q1 2025

Sky Mavis is sunsetting Skynet services as part of Ronin's transition to a permissionless ecosystem. Please migrate to these alternative RPC providers:

-   **[Chainstack](https://chainstack.com/build-better-with-ronin/)** - RPC/WS node with a free tier available. Supports social logins like GitHub and crypto top-up for paid plans. Archive nodes available starting from the lowest paid plan.
-   **[dRPC](https://drpc.org/chainlist/ronin)** - Ronin and Saigon testnet globally distributed RPC nodes, with high uptime maintained by professional independent teams under one load balancer.
-   **[Moralis](https://docs.moralis.com/supported-networks)** - Enterprise grade RPC node API for Ronin and Saigon testnet. Supports full archive nodes and extended RPC methods. Free tier available.
-   **[Tenderly](https://tenderly.co/web3-gateway)** - Integrate a high-performance production Node RPC with built-in debugging tools and embedded development environments for any EVM chain.
-   **[Alchemy](https://www.alchemy.com/)** - Web3 developer platform that has powered top dApps for over half a decade. Access a full suite of RPC node APIs, Subgraphs, and NFT API (coming ~ February).

## Overview[​](/ronin/rpc/guides/archive-node#overview "Direct link to Overview")

Building dApps (decentralized applications) or data-driven projects on Ronin often requires access to the blockchain's historical layers. *Archive nodes* are nodes that maintain a complete history of all states changes since the inception of the blockchain, not just the recent data like standard RPC (remote procedure call) nodes. This comprehensive data access is crucial for complex queries such as extracting historical balances or changes in contract states.

## Prerequisites[​](/ronin/rpc/guides/archive-node#prerequisites "Direct link to Prerequisites")

-   An app created in the [Developer Console](https://developers.skymavis.com/console).
-   Permission to use the archive node. Request in the Developer Console under **your app > App Permission > Ronin Archive Node > Request Access**.

For more information, see [Get started](/get-started).

## Connect to the archive node[​](/ronin/rpc/guides/archive-node#connect-to-the-archive-node "Direct link to Connect to the archive node")

To connect to the archive node, point your dApp to the archive endpoint:

```
https://api-gateway.skymavis.com/rpc/archive
```

## See also[​](/ronin/rpc/guides/archive-node#see-also "Direct link to See also")

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