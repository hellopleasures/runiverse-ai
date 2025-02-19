# Troubleshooting | Mavis Docs

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

# Troubleshooting

## Overview[​](/ronin/rpc/reference/troubleshooting#overview "Direct link to Overview")

This page lists known issues and solutions for developers making RPC calls to the Ronin blockchain. If you encounter an issue that is not listed here, [contact us](mailto:developersupport@skymavis.com).

## Known issues[​](/ronin/rpc/reference/troubleshooting#known-issues "Direct link to Known issues")

### Underpriced transaction using Ethers.js v5[​](/ronin/rpc/reference/troubleshooting#underpriced-transaction-using-ethersjs-v5 "Direct link to Underpriced transaction using Ethers.js v5")

#### Issue[​](/ronin/rpc/reference/troubleshooting#issue "Direct link to Issue")

An underpriced transaction occurs when sending a transaction using Ethers.js v5 without explicitly providing the `gasPrice` and `type` fields. This applies to transactions sent *after the Ronin hardfork scheduled on July 3, 2024*, which enables the London hardfork. After the hardfork, Ethers.js v5 will choose to create a dynamic fee transaction (EIP 1559) with `gasTipCap` = `gasFeeCap` = 1.5 GWei (see [GitHub](https://github.com/ethers-io/ethers.js/blob/v5.7.1/packages/abstract-provider/src.ts/index.ts#L252)).

#### Solution[​](/ronin/rpc/reference/troubleshooting#solution "Direct link to Solution")

-   Create a wrapper around the JSON provider as described in [Transfer RON](/ronin/rpc/tutorials/ron-transfer#step-3-create-a-script-and-run-it) and [Interact with a smart contract](/ronin/rpc/tutorials/smart-contract#step-2-create-and-run-a-script) tutorials.
-   Set `gasPrice` to at least 20 GWei when sending transactions.
-   [Upgrade](https://docs.ethers.org/v6/migrating/) to Ethers.js v6.

### Error when calling debug\_traceBlockByNumber[​](/ronin/rpc/reference/troubleshooting#error-when-calling-debug_traceblockbynumber "Direct link to Error when calling debug_traceBlockByNumber")

#### Issue[​](/ronin/rpc/reference/troubleshooting#issue-1 "Direct link to Issue")

An error occurs when calling the `debug_traceBlockByNumber` method through the archive endpoint `https://api-gateway.skymavis.com/rpc/archive`.

```
{  "message": "Method is not whitelist: debug_traceBlockByNumber"}
```

This is an expected behavior as the method `debug_traceBlockByNumber` is disabled for performance reasons.

#### Solution[​](/ronin/rpc/reference/troubleshooting#solution-1 "Direct link to Solution")

-   Consider using other node providers, such as [Chainstack](https://docs.chainstack.com/reference/ronin-traceblockbynumber).
-   Make requests using the standard RPC endpoint `https://api-gateway.skymavis.com/rpc`.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis