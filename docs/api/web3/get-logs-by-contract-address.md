# Get logs by contract address | Mavis Docs

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
    -   [Accounts](/api/web3/get-logs-by-contract-address)
        
    -   [Blocks](/api/web3/get-logs-by-contract-address)
        
    -   [Logs](/api/web3/get-logs-by-contract-address)
        
        -   [Get logs by contract address](/api/web3/get-logs-by-contract-address)
        -   [Get logs by contract address and log topic](/api/web3/get-logs-by-contract-address-and-log-topic)
    -   [Collections](/api/web3/get-logs-by-contract-address)
        
    -   [Contracts](/api/web3/get-logs-by-contract-address)
        
    -   [Transactions](/api/web3/get-logs-by-contract-address)
        
    -   [Token transfers](/api/web3/get-logs-by-contract-address)
        
    -   [NFTs](/api/web3/get-logs-by-contract-address)
        
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Get logs by contract address

API Deprecation Notice

This API endpoint will be deprecated by the end of Q1 2025 as part of Skynet sunsetting. Please migrate to using the JSON-RPC `eth_getLogs` method directly with your preferred RPC provider.

GET 

## https://api-gateway.skymavis.com/skynet/ronin/web3/v2/logs/contracts/:contractAddress

For usage instructions, see [Get all logs of a contract](https://docs.skymavis.com/ronin/skynet/guides/get-all-logs-of-a-contract)

## Request[​](/api/web3/get-logs-by-contract-address#request "Direct link to Request")

### 

Path Parameters

**contractAddress** stringrequired

ContractAddress address. Example: 0x32950db2a7164ae833121501c797d79e7b79d74c

### 

Query Parameters

**limit** integer

Paging limit

**order** string

Paging order, valid values: "asc", "desc". Default: "desc"

**cursor** string

Paging cursor

## Responses[​](/api/web3/get-logs-by-contract-address#responses "Direct link to Responses")

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

**

items

**

object\[\]

-   Array \[
    

**address** string

**topics** string\[\]

**data** string

**blockNumber** integer

**transactionHash** string

**transactionIndex** integer

**blockHash** string

**logIndex** integer

**removed** boolean

-   \]
    

**

paging

**

object

**nextCursor** string

```
{  "result": {    "items": [      {        "address": "string",        "topics": [          "string"        ],        "data": "string",        "blockNumber": 0,        "transactionHash": "string",        "transactionIndex": 0,        "blockHash": "string",        "logIndex": 0,        "removed": true      }    ],    "paging": {      "nextCursor": "string"    }  }}
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
curl -L 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2/logs/contracts/:contractAddress' \-H 'Accept: application/json' \-H 'X-API-KEY: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com/skynet/ronin/web3/v2

Auth

ApiKeyAuth

Parameters

contractAddress — pathrequired

Show optional parameters

limit — query

order — query

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