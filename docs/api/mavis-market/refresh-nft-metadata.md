# Refresh NFT metadata | Mavis Docs

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
    
    -   [Introduction](/api/mavis-market/mavis-market-partner-api)
    -   [Metadata](/api/mavis-market/refresh-nft-metadata)
        
        -   [Refresh NFT metadata](/api/mavis-market/refresh-nft-metadata)
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Refresh NFT metadata

POST 

## https://api-gateway.skymavis.com/mavis-market-partner/collections/:token\_address/refresh\_metadata

Refresh the metadata for all tokens in the collection `token_address`, given a list of up to 100 token IDs per request. Request access to the API by following the steps in [Refresh NFT metadata on Mavis Market using the API](/mavis/mavis-market/guides/refresh-metadata).

## Request[​](/api/mavis-market/refresh-nft-metadata#request "Direct link to Request")

### 

Path Parameters

**token\_address** stringrequired

Token contract address.

-   application/json

### 

Body

**required**

**token\_ids** string\[\]

**Possible values:** `<= 100`

## Responses[​](/api/mavis-market/refresh-nft-metadata#responses "Direct link to Responses")

-   200
-   400
-   401
-   403
-   429

OK

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**message** string

```
{  "message": "Metadata refresh initiated"}
```

Bad Request

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**message** string

```
{  "message": "'Token not found' or 'Too many token ids, max number of token ids allowed is 100"}
```

Unauthorized

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**message** string

```
{  "message": "Invalid authentication credentials"}
```

Forbidden

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**message** string

```
{  "message": "You cannot consume this service"}
```

Too Many Requests

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**message** string

```
{  "message": "API rate limit exceeded"}
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
curl -L 'https://api-gateway.skymavis.com/mavis-market-partner/collections/:token_address/refresh_metadata' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>' \-d '{  "token_ids": [    "1",    "2",    "3",    "4",    "5",    "6"  ]}'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com/mavis-market-partner

Auth

ApiKeyAuth

Parameters

token\_address — pathrequired

Body required

{
  "token\_ids": \[    "1",    "2",    "3",    "4",    "5",    "6"  \]
}
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