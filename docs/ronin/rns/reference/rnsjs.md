# rnsjs library reference | Mavis Docs

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

# rnsjs library reference

## Overview[​](/ronin/rns/reference/rnsjs#overview "Direct link to Overview")

This is a rerefence document for rnsjs—a JavaScript library for interacting with the Ronin Name Service (RNS). With rnsjs, your dApp can support forward resolution (RNS name to Ronin address) and reverse resolution (Ronin address to RNS name).

## Prerequisites[​](/ronin/rns/reference/rnsjs#prerequisites "Direct link to Prerequisites")

Install the rnsjs library along with [ethers.js](https://github.com/ethers-io/ethers.js) and [@ethersproject/providers@5.7.2](https://www.npmjs.com/package/@ethersproject/providers):

```
npm install ethers @ethersproject/providers@5.7.2 @roninnetwork/rnsjs
```

## Use rnsjs[​](/ronin/rns/reference/rnsjs#use-rnsjs "Direct link to Use rnsjs")

### Create an RNS instance[​](/ronin/rns/reference/rnsjs#create-an-rns-instance "Direct link to Create an RNS instance")

```
import { JsonRpcProvider } from "@ethersproject/providers"import { RNS } from '@roninnetwork/rnsjs'const provider = new JsonRpcProvider(providerUrl) // Use wallet provider if you wantconst RNSInstance = new RNS()await RNSInstance.setProvider(provider, chainId as number)
```

### Batch function calls[​](/ronin/rns/reference/rnsjs#batch-function-calls "Direct link to Batch function calls")

The batch function is a significant part of this library. You can use it in a wide range of situations.

**Note:** Only functions with the `GeneratedRawFunction` type can be batched together.

```
/* Batch functions can be called like this, with the function as the first item in an array and the following items being the function's arguments */const batched = await RNSInstance.batch(  RNSInstance.getText.batch('test.eth', 'foo'),  RNSInstance.getAddr.batch('test.eth'),  RNSInstance.getOwner.batch('test.eth'));/* The response is formatted as follows:  [    response1,    response2,    response3,    ...etc,  ]*/
```

### Use custom graph node URIs[​](/ronin/rns/reference/rnsjs#use-custom-graph-node-uris "Direct link to Use custom graph node URIs")

If you want to use your own graph-node URI, such as a local graph-node URI, you can pass it through when creating a new RNS instance. Otherwise, the default graph is used.

```
import { RNS } from '@roninnetwork/rnsjs';/* If you want to use a custom URI */const RNSInstance = new RNS({  graphURI:    'http://localhost:8000/subgraphs/name/graphprotocol/ens'});
```

### Use single-call proividers[​](/ronin/rns/reference/rnsjs#use-single-call-proividers "Direct link to Use single-call proividers")

If you want to use a specific provider to make a single call occasionally, you can easily do so.

```
import { RNS } from '@roninnetwork/rnsjs';const RNSInstance = new RNS();const callWithProvider = await RNSInstance.withProvider(  otherProvider).getText('test.eth', 'foo');
```

### Write transaction options[​](/ronin/rns/reference/rnsjs#write-transaction-options "Direct link to Write transaction options")

Some write functions have an `options` argument that allows you to pass an address or index for an account array to ethers for specifying the signer of the transaction.

## Internal structure[​](/ronin/rns/reference/rnsjs#internal-structure "Direct link to Internal structure")

### Raw functions[​](/ronin/rns/reference/rnsjs#raw-functions "Direct link to Raw functions")

Raw functions are crucial to how rnsjs works. You need to define both `raw` and `decode` functions in the function file, with the export being an object with those properties.

This way, the encoding and decoding of contract calls can be split, letting you batch multiple calls together.

To call a raw function, the raw and decode functions are stitched together with a provider call. This is done using the `importGenerator` function, which is explained in the next section.

#### importGenerator[​](/ronin/rns/reference/rnsjs#importgenerator "Direct link to importGenerator")

The `importGenerator` function generates a wrapped function for any given input.

The result of the wrapped function obfuscates rnsjs processing and exposes a cleaner API to the user and developer.

We do this to achieve the following:

1.  Pass through all the required variables for the function.
2.  Split individual functions from the main class.
3.  Dynamically load functions and their dependencies.
4.  Allow each function's dependencies to be imported regularly.
5.  Remove duplicate code.
6.  Make it easier to isolate errors.
7.  Stitch `raw` and `decode` functions together.

#### ContractManager[​](/ronin/rns/reference/rnsjs#contractmanager "Direct link to ContractManager")

The contract manager is where all the contracts are dynamically loaded in and resolved based on the network.

A new instance of `ContractManager` is created every time you switch providers.

#### GqlManager[​](/ronin/rns/reference/rnsjs#gqlmanager "Direct link to GqlManager")

The GQL manager is used as to separate the reliance of rnsjs from GQL. It only loads in GQL when it is needed, or not at all if specified in the constructor of the RNS class. Very simply, it just exposes the core functions needed for rnsjs which can then be accessed.

#### initialProvider[​](/ronin/rns/reference/rnsjs#initialprovider "Direct link to initialProvider")

The `initialProvider`, and similarly `checkInitialProvider` are used when creating single-use class instances with `withProvider`. It allows `withProvider` to act as a new RNS instance without having to await a promise, which simplifies the API. `checkInitialProvider` is run on every function call given that it's lightweight.

### Individual functions[​](/ronin/rns/reference/rnsjs#individual-functions "Direct link to Individual functions")

### Utils[​](/ronin/rns/reference/rnsjs#utils "Direct link to Utils")

Utils can be imported as follows:

```
import { encodeContenthash } from '@roninnetwork/rnsjs';
```

#### getName[​](/ronin/rns/reference/rnsjs#getname "Direct link to getName")

Gets the primary name for a specified address.

Input:

-   `address`: string
-   Target address

Output:

-   `name`: string | null
-   Resolved name

#### getAddr[​](/ronin/rns/reference/rnsjs#getaddr "Direct link to getAddr")

Gets an address record for a specified name.

Input:

-   `name`: string
-   Target name

Output:

-   string | null
-   Address record value

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis