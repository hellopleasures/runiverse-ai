# Integrate RNS in your app | Mavis Docs

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

# Integrate RNS in your app

## Overview[​](/ronin/rns/guides/integrate-rns#overview "Direct link to Overview")

This guide explains how to integrate the Ronin Name Service (RNS) in your app. A successful integration allows your app to look up a Ronin address for user's RNS name, and to fetch the RNS name for a user's Ronin address. Depending on your platform, you can integrate RNS in two ways:

-   Using the rnsjs library (for JavaScript clients).
-   Interacting with the RNS controller directly (for all other platforms).

## Prerequisites[​](/ronin/rns/guides/integrate-rns#prerequisites "Direct link to Prerequisites")

Install the rnsjs library along with [ethers.js](https://github.com/ethers-io/ethers.js) and [@ethersproject/providers@5.7.2](https://www.npmjs.com/package/@ethersproject/providers):

```
npm install ethers @ethersproject/providers@5.7.2 @roninnetwork/rnsjs
```

## Integrate RNS[​](/ronin/rns/guides/integrate-rns#integrate-rns "Direct link to Integrate RNS")

### Instantiate the RNS registry contract[​](/ronin/rns/guides/integrate-rns#instantiate-the-rns-registry-contract "Direct link to Instantiate the RNS registry contract")

To begin interacting with RNS, your app needs to get a reference to the RNS registry by instantiating the RNS Unified contract.

The following example uses rnsjs to set up the RNS instance, resolve `jihoz.ron` to the owner's address, and then in reverse: the address to the RNS name.

```
import { RNS } from '@roninnetwork/rnsjs';import { JsonRpcProvider } from '@ethersproject/providers';const providerUrl =  'https://api-gateway.skymavis.com/rpc?apikey=' +  process.env.SM_API_KEY; // Use your app's API key in the Developer Consoleconst chainId = 2020;const provider = new JsonRpcProvider(providerUrl); // Use wallet provider if you wantconst RNSInstance = new RNS();(async () => {  await RNSInstance.setProvider(provider, chainId as number);  const nameToAddress = await RNSInstance.getAddr('jihoz.ron');  console.log(`jihoz.ron address: ${nameToAddress}`);  const addressToName = await RNSInstance.getName(nameToAddress);  console.log(`${nameToAddress} name: ${addressToName!.name}`);})();
```

If you don't use the rnsjs library, then you can instantiate the RNS Unified contract using the [interface definition](https://github.com/axieinfinity/rns-contracts/blob/release/v0.2.0/src/interfaces/INSUnified.sol). To find addresses for the contract, see [Deployments](/ronin/rns/reference/deployments).

### Support name resolution[​](/ronin/rns/guides/integrate-rns#support-name-resolution "Direct link to Support name resolution")

#### Forward resolution[​](/ronin/rns/guides/integrate-rns#forward-resolution "Direct link to Forward resolution")

Many types of data can be associated with names, but cryptocurrency addresses are the most common.

Using the rnsjs library, you can resolve an RNS name to a Ronin address in the following way:

```
var address = await rns.getAddr('jihoz.ron');
```

When interacting with the RNS Unified contract directly, you can resolve an RNS name to a Ronin address in the following way:

1.  Hash the name—see [Namehashing](/ronin/rns/explanation/namehash) for details.
2.  Call `ownerOf()` on [RNS Unified](https://github.com/axieinfinity/rns-contracts/blob/release/v0.2.0/src/interfaces/INSUnified.sol), passing in the output of step 1. This returns the address of the name.

#### Reverse resolution[​](/ronin/rns/guides/integrate-rns#reverse-resolution "Direct link to Reverse resolution")

Forward resolution maps a name to an address, while reverse resolution maps an address back to its primary name. This allows apps to display primary RNS names instead of hexadecimal Ronin addresses. If a given address has no primary name, display the address as before.

Reverse resolution is accomplished through the special-purpose domain `addr.reverse` and the resolver function `name()`. The `addr.reverse` domain is owned by a special-purpose registrar contract that allocates domains to the owner of the matching address. For instance, the address `0xbd4bf317da1928cc2f9f4da9006401f3944a0ab5` can claim the name `bd4bf317da1928cc2f9f4da9006401f3944a0ab5.addr.reverse` and configure a resolver and records on it. The resolver supports the `name()` function, which returns the primary name associated with that address.

The rnsjs library provides a feature for reverse resolution:

```
const address = '0xbd4bf317da1928cc2f9f4da9006401f3944a0ab5';let rnsName = null;({ name: rnsName } = await rns.getName(address));rnsName = null;
```

Reverse resolution without a library follows the same pattern as forward resolution:

1.  Get the resolver for `bd4bf317da1928cc2f9f4da9006401f3944a0ab5.addr.reverse`, where `bd4bf317da1928cc2f9f4da9006401f3944a0ab5` is the address you want to reverse-resolve.
2.  Using the [name resolver interface](https://github.com/axieinfinity/rns-contracts/blob/release/v0.2.0/src/interfaces/resolvers/INameResolver.sol), call the `name()` function on that resolver.

## See also[​](/ronin/rns/guides/integrate-rns#see-also "Direct link to See also")

-   [Frontend design guidelines](/ronin/rns/reference/frontend-guidelines)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis