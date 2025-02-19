# Ronin Name Service | Mavis Docs

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

# Ronin Name Service

## Overview[​](/ronin/rns#overview "Direct link to Overview")

Ronin Name Service (RNS) is a distributed naming system based on the Ronin blockchain that lets users assign a human-readable `.ron` domain name to their Ronin address.

![turn-this-into-this](/assets/images/turn-this-into-this-3c6bc47ba895e5f433a99e10997168fb.png)

By using an RNS name instead of the Ronin address, users can interact more easily with blockchain apps. RNS also works in reverse, where the user enters their Ronin address, and the system looks up the name associated with it.

RNS is integrated with Ronin Wallet, Sky Mavis Account, App.Axie, Mavis Market, Axie Infinity Origins, Axie Infinity: Homeland, and other apps in the Sky Mavis ecosystem.

RNS is deployed on the Ronin mainnet and Saigon testnet. If you use a library such as [rnsjs](https://github.com/axieinfinity/ronin-daisho/tree/main/packages/rnsjs), or an end-user app, it automatically detects the network you're interacting with and uses the RNS deployment on that network.

info

Looking for RNS end-user docs? Visit [docs.roninchain.com](https://docs.roninchain.com/apps/rns).

## Registration[​](/ronin/rns#registration "Direct link to Registration")

When users want to obtain a `.ron` domain for the first time, they must interact with a *controller*. This is a smart contract that has approval for the top-level `.ron` domain and specifies rules for allocating second-level domain names, such as `axieinfinity.ron`.

RNS domain names must conform to the following guidelines:

-   Domains can contain the English-language letters a-z, and the digits 0-9.
-   Hyphens can also be used but not at the beginning and at the end of a domain name. Two hyphens together aren't permitted either.
-   The minimum length is three characters.
-   Domain names are case-sensitive and can only contain lowercase letters.

An owner of a `.ron` domain name also receives a `.ron.id` domain name for apps compatible with the Ethereum Name System (ENS), such as Metamask. For example, `axieinfinity.ron` and `axieinfinity.ron.id`.

Registering new RNS domains is possible via the RNS app on [id.roninchain.com](https://id.roninchain.com). For a name that's already registered, a user can make an offer to its owner on [Mavis Market](https://marketplace.skymavis.com).

## Architecture[​](/ronin/rns#architecture "Direct link to Architecture")

Architecturally, RNS has two main components: the *registry* and *resolvers*.

RNS registryron\- owner: 0x1234...axieinfinity.ron\- owner: 0x2345...\- resolver: 0x3456...kingofthepirates.ron\- owner: 0x4567...\- resolver: 0x5678...Resolvers

This page provides an overview of each.

### Registry[​](/ronin/rns#registry "Direct link to Registry")

The RNS registry is located in a combined smart contract called RNS Unified, which also has the capability of the registrar. The contract operates as an ERC-721 standard, wherein each unique ID corresponds to a distinct RNS domain. This contract also stores critical pieces of information about each domain:

-   The owner of the domain.
-   The resolver of the domain.
-   The label of the domain, such as `axieinfinity` in `axieinfinity.ron`.
-   The expiry of the domain.
-   The parent domain, such as `.ron`.

Owners of domains in the RNS registry can do the following:

-   Set the domain as their primary name to represent the 42-character address across dApps.
-   Transfer domain ownership to another address.
-   List the domain on the Mavis Market for sale.
-   Extend domain ownership.

### Resolvers[​](/ronin/rns#resolvers "Direct link to Resolvers")

Resolvers are responsible for translating RNS names into Ronin addresses.

The process of resolving a name in RNS consists of two steps: first, ask the registry which resolver is responsible for the name, and then ask that resolver to answer your query.

In the following example, an app is trying to find the Ronin address pointed to by `axieinfinity.ron`. The app first asks the registry which resolver is responsible for `axieinfinity.ron`. Next, it queries that resolver for the address of `axieinfinity.ron`.

ResolverRNS registryUser codeResolverRNS registryUser code#mermaid-svg-6665009{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}#mermaid-svg-6665009 .error-icon{fill:#a44141;}#mermaid-svg-6665009 .error-text{fill:#ddd;stroke:#ddd;}#mermaid-svg-6665009 .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-6665009 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-6665009 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-6665009 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-6665009 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-6665009 .marker{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-6665009 .marker.cross{stroke:lightgrey;}#mermaid-svg-6665009 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-6665009 .actor{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-6665009 text.actor>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-6665009 .actor-line{stroke:lightgrey;}#mermaid-svg-6665009 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:lightgrey;}#mermaid-svg-6665009 .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:lightgrey;}#mermaid-svg-6665009 #arrowhead path{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-6665009 .sequenceNumber{fill:black;}#mermaid-svg-6665009 #sequencenumber{fill:lightgrey;}#mermaid-svg-6665009 #crosshead path{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-6665009 .messageText{fill:lightgrey;stroke:none;}#mermaid-svg-6665009 .labelBox{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-6665009 .labelText,#mermaid-svg-6665009 .labelText>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-6665009 .loopText,#mermaid-svg-6665009 .loopText>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-6665009 .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:#81B1DB;fill:#81B1DB;}#mermaid-svg-6665009 .note{stroke:hsl(180, 0%, 18.3529411765%);fill:hsl(180, 1.5873015873%, 28.3529411765%);}#mermaid-svg-6665009 .noteText,#mermaid-svg-6665009 .noteText>tspan{fill:rgb(183.8476190475, 181.5523809523, 181.5523809523);stroke:none;}#mermaid-svg-6665009 .activation0{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-6665009 .activation1{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-6665009 .activation2{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-6665009 .actorPopupMenu{position:absolute;}#mermaid-svg-6665009 .actorPopupMenuPanel{position:absolute;fill:#1f2020;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));}#mermaid-svg-6665009 .actor-man line{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-6665009 .actor-man circle,#mermaid-svg-6665009 line{stroke:#81B1DB;fill:#1f2020;stroke-width:2px;}#mermaid-svg-6665009 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}Resolver at 0x3456...getRecord('axieinfinity.ron).mut.resolver0x3456...addr('axieinfinity.ron')0x2345...

### Name processing[​](/ronin/rns#name-processing "Direct link to Name processing")

A smart contract's resource constraints make it inefficient to interact directly with human-readable names, so RNS uses 256-bit cryptographic hashes instead. A process called *Namehash* is used to generate the hash from a name while preserving its hierarchical properties. For example, the namehash of `axieinfinity.ron` is `0xf3b9e034ea07d5b34e2ae5b85144910ad9de59f7dfd654ded27441c7ea941594`. This is a name used exclusively within RNS.

Namehash produces a unique hash for every valid domain name via a recursive process. Using the namehash of any domain, such as `.ron`, you can calculate the namehash of any second-level domain like `axieinfinity.ron`, without knowing the original human-readable name. It's thanks to this property that RNS can provide a hierarchical system without using human-readable text strings directly.

## Next steps[​](/ronin/rns#next-steps "Direct link to Next steps")

### Try RNS as a user[​](/ronin/rns#try-rns-as-a-user "Direct link to Try RNS as a user")

You can try RNS out for yourself now by using the [RNS app](https://id.roninchain.com).

### Use RNS in an example app[​](/ronin/rns#use-rns-in-an-example-app "Direct link to Use RNS in an example app")

Check out the [RNS quickstart guide](/ronin/rns/guides/rns-quickstart) to quickly install an example app and see RNS name resolution in action.

### Add RNS support to your dApp[​](/ronin/rns#add-rns-support-to-your-dapp "Direct link to Add RNS support to your dApp")

Follow the [integration guide](/ronin/rns/guides/integrate-rns) to support RNS in your dApp.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis