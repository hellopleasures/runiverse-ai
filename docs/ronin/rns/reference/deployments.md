# RNS deployments | Mavis Docs

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

-   [Ronin Name Service](/ronin/rns)
    
    -   How to
        
    -   [Quickstart](/ronin/rns/guides/rns-quickstart)
    -   [Integrate RNS](/ronin/rns/guides/integrate-rns)
    -   Reference
        
    -   [RNS deployments](/ronin/rns/reference/deployments)
    -   [Frontend design guidelines](/ronin/rns/reference/frontend-guidelines)
    -   [Library reference](/ronin/rns/reference/rnsjs)
    -   [Glossary](/ronin/rns/reference/glossary)
    -   Explanation
        
    -   [About RNS integration levels](/ronin/rns/explanation/integration)
    -   [About namehashing](/ronin/rns/explanation/namehash)

On this page

# RNS deployments

## Overview[​](/ronin/rns/reference/deployments#overview "Direct link to Overview")

If you use the [rnsjs library](/ronin/rns/reference/rnsjs), it automatically finds the RNS deployment you need. Otherwise, you need to interact with RNS directly and use the supported RNS deployments listed on this page.

## Mainnet[​](/ronin/rns/reference/deployments#mainnet "Direct link to Mainnet")

Name

Contract address

RNS Unified

`0x67c409dab0ee741a1b1be874bd1333234cfdbf44`

RNS Auction

`0xd55e6d80aea1ff4650bc952c1653ab3cf1b940a9`

Name Checker

`0x486334ab27ffdc989fd6cbaf44e711ffa80a7bc2`

RNS Domain Price

`0x2bdc555a87db9207e5d175f0c12b237736181675`

RNS Reverse Registrar

`0xb8618a73cc08d2c4097d5c0e0f32fa4af4547e2f`

Public Resolver

`0xadb077d236d9e81fb24b96ae9cb8089ab9942d48`

RON Registrar Controller

`0x662852853614cbbb5d04bf2e29955b97e3c50b69`

## Testnet[​](/ronin/rns/reference/deployments#testnet "Direct link to Testnet")

Name

Contract address

RNS Unified

`0xf0c99c9677eda0d13291c093b27e6512e4acdf83`

RNS Auction

`0xb962edded164f55d136e491a3022246815e1b5a8`

Name Checker

`0xbc07dfda8f91aae03141b98278cb2321e36ec2f3`

RNS Domain Price

`0x51caf51678f469e9dd4c878a7b0cebebbd4a4ab5`

RNS Reverse Registrar

`0x0cc07f120dffdf507a6e983c54bcb402fc6bf716`

Public Resolver

`0x803c459dcb8771e5354d1fc567ecc6885a9fd5e6`

RON Registrar Controller

`0x512699b52ac2dc2b2ad505d9f29dcdad078fa799`

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis