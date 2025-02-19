# RNS glossary | Mavis Docs

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

# RNS glossary

## Overview[​](/ronin/rns/reference/glossary#overview "Direct link to Overview")

This reference page defines the key terms used in the Ronin Name Service (RNS).

## Controller[​](/ronin/rns/reference/glossary#controller "Direct link to Controller")

The account that edits the records of a name. The controller may be changed by the registrant or controller.

## Label[​](/ronin/rns/reference/glossary#label "Direct link to Label")

An individual element of a name, such as `hello` in `hello.ron`.

## Labelhash[​](/ronin/rns/reference/glossary#labelhash "Direct link to Labelhash")

The keccak256 hash of an individual label.

## Name[​](/ronin/rns/reference/glossary#name "Direct link to Name")

An RNS identifier, such as `hello.ron`.

## Namehash[​](/ronin/rns/reference/glossary#namehash "Direct link to Namehash")

The [algorithm](/ronin/rns/explanation/namehash) for generating a cryptographic hash from an RNS name. It takes a name as input and produces a node.

## Node[​](/ronin/rns/reference/glossary#node "Direct link to Node")

The output of the namehash algorithm, used to uniquely identify a domain name in RNS.

## Owner[​](/ronin/rns/reference/glossary#owner "Direct link to Owner")

The owner of a name is the entity referenced in the RNS registry's owner field. Owners may transfer ownership, set a resolver or time-to-live (TTL), and create or reassign subdomains.

## Registrar[​](/ronin/rns/reference/glossary#registrar "Direct link to Registrar")

The registrar is an RNS component responsible for allocating second-level `.ron` domain names. This is essentially a subdomain registrar for the TLD (top-level domain) `.ron`. When you register a `.ron` name, the registrar issues you an ERC-721 NFT.

The owner of that NFT is also called the registrant or owner of that name. It can be used to reclaim ownership of the name in the core registry—in other words, the registrant can overwrite the controller.

Architecturally, the registrar is located in the RNS Unified contract.

## Registration[​](/ronin/rns/reference/glossary#registration "Direct link to Registration")

A registration is a registrar's record of a user's ownership of a name. This is distinct from the owner field in the registry. The registrar contract stores information about registrations, including expiry dates and fees.

## Registrant[​](/ronin/rns/reference/glossary#registrant "Direct link to Registrant")

The owner of a registration. If necessary, the registrant may transfer the registration, set the controller, and reclaim ownership of the name in the registry.

## Registry[​](/ronin/rns/reference/glossary#registry "Direct link to Registry")

The core component of RNS, the registry maintains a mapping from domain names to the owner, resolver, label, expiry, and the parent domain. All RNS lookups start by querying the registry. Architecturally, the registry is located in the RNS Unified contract.

## Resolver[​](/ronin/rns/reference/glossary#resolver "Direct link to Resolver")

A resolver is a contract that maps a name to a resource (for example, cryptocurrency addresses or content hashes). Resolvers are pointed to by the resolver field of the registry.

## RNS Unified[​](/ronin/rns/reference/glossary#rns-unified "Direct link to RNS Unified")

The core contract combining the registry and registrar components.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis