# About RNS integration levels | Mavis Docs

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

# About RNS integration levels

## Overview[​](/ronin/rns/explanation/integration#overview "Direct link to Overview")

The Ronin Name Service (RNS) integration encompasses two levels, each of which can be implemented independently. The first level is the easiest and provides the highest impact for users, whereas the second level improves your dApp's usability and enhances your users' experience. This page explains each level in greater detail.

## Level 1. Configure RNS name resolution[​](/ronin/rns/explanation/integration#level-1-configure-rns-name-resolution "Direct link to Level 1. Configure RNS name resolution")

The first step to supporting RNS is to make your app understand RNS names and accept them anywhere an address is accepted. To understand how to do this, see [Resolve RNS names](/ronin/rns/guides/integrate-rns#forward-resolution).

When a user enters an RNS name instead of an address, remember the RNS name, not the address it currently resolves to. In the same way that your browser automatically redirects you to the new IP address of a website if its server changes, users can update their RNS names and have their apps automatically resolve to the new address as well.

If your app handles user funds or other critical resources, you may want to keep track of the address to which a name resolves and alert the user if it changes.

By accepting RNS names in your app, you eliminate the need for users to copy and paste or type out long Ronin addresses, such as `0x048360059c5afbbb460b8b17a0b41fc7e57cc11a`.

## Level 2. Support reverse resolution[​](/ronin/rns/explanation/integration#level-2-support-reverse-resolution "Direct link to Level 2. Support reverse resolution")

The second step of RNS integration is displaying primary RNS names wherever your app displays addresses.

If a user enters an RNS name, you should retain this name and show it to them whenever you would normally show the address.

If a user enters an address, or the address is obtained elsewhere, you may still be able to show an RNS name, by performing [reverse resolution](/ronin/rns/guides/integrate-rns#reverse-resolution). This way, you can display the primary name of an address when it's available. If no primary name is provided, your app can fall back to displaying the address as it did previously.

Reverse resolution makes it easier for your users to identify the accounts they interact with, because the accounts are associated with a short human-readable RNS name instead of a long Ronin address.

## See also[​](/ronin/rns/explanation/integration#see-also "Direct link to See also")

-   [Frontend design guidelines](/ronin/rns/reference/frontend-guidelines)
-   [Glossary](/ronin/rns/reference/glossary)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis