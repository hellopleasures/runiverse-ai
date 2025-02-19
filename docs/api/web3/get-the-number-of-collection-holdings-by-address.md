# Get the number of collection holdings by address | Mavis Docs

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

-   [Overview](/api)
    
-   [Axie Experience Points API](/api/axp/axp-endpoints)
    
-   [Axie Infinity Origins API](/api/origins/origins-endpoints)
    
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
    -   [Introduction](/api/web3/skynet-web-3-api)
    -   [Accounts](/api/web3/get-the-number-of-collection-holdings-by-address)
        
    -   [Blocks](/api/web3/get-the-number-of-collection-holdings-by-address)
        
    -   [Logs](/api/web3/get-the-number-of-collection-holdings-by-address)
        
    -   [Collections](/api/web3/get-the-number-of-collection-holdings-by-address)
        
        -   [Get owners of an NFT](/api/web3/get-owners-of-an-nft)
        -   [Get token transfers of an NFT](/api/web3/get-token-transfers-of-an-nft)
        -   [Get detail of an NFT](/api/web3/get-detail-of-an-nft)
        -   [Refresh NFTs of a collection in synchronous manner](/api/web3/refresh-nf-ts-of-a-collection-in-synchronous-manner)
        -   [Refresh NFTs of a collection in asynchronous manner](/api/web3/refresh-nf-ts-of-a-collection-in-asynchronous-manner)
        -   [Get details of multiple NFTs](/api/web3/get-details-of-multiple-nf-ts)
        -   [Get NFTs from a collection](/api/web3/get-nf-ts-from-a-collection)
        -   [Get the number of collection holdings by address](/api/web3/get-the-number-of-collection-holdings-by-address)
        -   [Get collection holder list](/api/web3/get-collection-holder-list)
        -   [Get collection token transfers](/api/web3/get-collection-token-transfers)
        -   [Get collection detail](/api/web3/get-collection-detail)
        -   [Get details of multiple collections](/api/web3/get-details-of-multiple-collections)
    -   [Contracts](/api/web3/get-the-number-of-collection-holdings-by-address)
        
    -   [Transactions](/api/web3/get-the-number-of-collection-holdings-by-address)
        
    -   [Token transfers](/api/web3/get-the-number-of-collection-holdings-by-address)
        
    -   [NFTs](/api/web3/get-the-number-of-collection-holdings-by-address)
        
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Get the number of collection holdings by address

API Deprecation Notice

This API endpoint will be deprecated by the end of Q1 2025 as part of Skynet sunsetting. Please migrate to the Moralis alternative: [Get NFT collections by wallet](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-nft-collections-by-wallet)

GET 

## https://api-gateway.skymavis.com/skynet/ronin/web3/v2/collections/:contractAddress/owners/:address

Get the number of collection holdings by address

## Request[​](/api/web3/get-the-number-of-collection-holdings-by-address#request "Direct link to Request")

### 

Path Parameters

**contractAddress** stringrequired

ContractAddress address. Example: 0x32950db2a7164ae833121501c797d79e7b79d74c

**address** stringrequired

Account address. Example: 0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3

### 

Query Parameters

**limit** integer

Paging limit

**cursor** string

Paging cursor

## Responses[​](/api/web3/get-the-number-of-collection-holdings-by-address#responses "Direct link to Responses")

-   200
-   500

OK

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**

result

**

object

**address** string

**balance** string

**tokenCount** integer

```
{  "result": {    "address": "string",    "balance": "string",    "tokenCount": 0  }}
```

internal error

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**errorCode** integer

**message** string

```
{  "errorCode": 0,  "message": "string"}
```

-   curl
-   python
-   go
-   nodejs
-   ruby
-   csharp
-   php
-   java
-   powershell

-   CURL

```
curl -L 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2/collections/:contractAddress/owners/:address' \-H 'Accept: application/json' \-H 'X-API-KEY: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com/skynet/ronin/web3/v2

Auth

ApiKeyAuth

Parameters

contractAddress — pathrequired

address — pathrequired

Show optional parameters

limit — query

cursor — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis