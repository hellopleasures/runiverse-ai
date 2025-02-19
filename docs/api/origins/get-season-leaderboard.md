# Get season leaderboard | Mavis Docs

null!==e?t(e):window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,t("light"))}(),function(){try{const n=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of n)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}(),document.documentElement.setAttribute("data-announcement-bar-initially-dismissed",function(){try{return"true"===localStorage.getItem("docusaurus.announcement.dismiss")}catch(t){}return!1}())

((e,t,s,c,a,l,r,o)=>{let i=document.documentElement,m=\["light","dark"\];function d(t){(Array.isArray(e)?e:\[e\]).forEach((e=>{let s="class"===e,c=a;s?(i.classList.remove(...c),i.classList.add(t)):i.setAttribute(e,t)})),function(e){o&&m.includes(e)&&(i.style.colorScheme=e)}(t)}try{let e=localStorage.getItem("theme")||"system";d("system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e)}catch(e){}})("class",0,0,0,\["light","dark"\],0,0,!0)

[

![Sky Mavis logo](/img/logo-dark.png)

](/)[Docs](/)[API](/api)[Blog](/blog)[Showcase](/showcase)

[

![Sky Mavis logo](/img/logo-dark.png)

](/)

-   [Docs](/)
-   [API](/api)
-   [Blog](/blog)
-   [Showcase](/showcase)
-   

← Back to main menu

-   [Overview](/api)
    
-   [Axie Experience Points API](/api/axp/axp-endpoints)
    
-   [Axie Infinity Origins API](/api/origins/origins-endpoints)
    
    -   [Introduction](/api/origins/origins-endpoints)
    -   [Item](/api/origins/item)
        
    -   [User Fighter](/api/origins/user-fighter)
        
    -   [Leaderboard](/api/origins/leaderboard)
        
        -   [List Leaderboard](/api/origins/list-leaderboard)
        -   [Get season leaderboard](/api/origins/get-season-leaderboard)
    -   [Battle Log](/api/origins/battle-log)
        
    -   [Burned Items](/api/origins/burned-items)
        
    -   [Card](/api/origins/card)
        
    -   [Season](/api/origins/season)
        
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Get season leaderboard

GET 

## https://api-gateway.skymavis.com/origins/v2/season-leaderboards

List of current leaderboard players by Era

## Request[​](/api/origins/get-season-leaderboard#request "Direct link to Request")

### 

Query Parameters

**limit** integer

**Example:** 100

**offset** integer

**Example:** 0

**milestone** integer

**Example:** 1

## Responses[​](/api/origins/get-season-leaderboard#responses "Direct link to Responses")

-   200

OK

**Response Headers**

-   **Date**string
    
-   **Content-Type**string
    
-   **Transfer-Encoding**string
    
-   **Connection**string
    
-   **Etag**string
    
-   **Access-Control-Allow-Origin**string
    
-   **Access-Control-Allow-Credentials**boolean
    
-   **Access-Control-Allow-Methods**string
    
-   **Access-Control-Allow-Headers**string
    
-   **Access-Control-Max-Age**integer
    
-   **CF-Cache-Status**string
    
-   **Report-To**string
    
-   **NEL**string
    
-   **Server**string
    
-   **CF-RAY**string
    
-   **Content-Encoding**string
    
-   **alt-svc**string
    

-   application/json

-   Schema
-   Example (from schema)
-   Example

**Schema**

object

```
{}
```

```
{  "_etag": "2c2819ab5430d61e25c9b17ba7440453",  "_items": [    {      "userID": "1ec90941-5da5-648c-bba7-55c8e38c23de",      "name": "Thien axie",      "rank": "Chick",      "tier": 4,      "topRank": 1,      "vstar": 160,      "avatar": null,      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    },    {      "userID": "1ec90941-5da5-648c-bba7-55c8e38c23de",      "name": "Thien axie",      "rank": "Chick",      "tier": 4,      "topRank": 1,      "vstar": 160,      "avatar": null,      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    },    {      "userID": "1ed71f1f-165f-63c5-908f-ff694cbe1142",      "name": "acc_sg_testnet03@mailinator.com",      "rank": "Egg",      "tier": 3,      "topRank": 2,      "vstar": 40,      "avatar": "xmas22;wood_s2",      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    },    {      "userID": "1ed7480f-acb4-6e99-a2e6-a43068cce4e3",      "name": "acc_sg_testnet04@mailinator.com",      "rank": "Egg",      "tier": 4,      "topRank": 3,      "vstar": 30,      "avatar": "13;silver_s1",      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    },    {      "userID": "1ec7cbbf-5ecc-6565-a1af-c73d251bbc47",      "name": "Nhat Quang",      "rank": "Egg",      "tier": 4,      "topRank": 4,      "vstar": 30,      "avatar": "1;0",      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    },    {      "userID": "1ed75f6c-ea0d-6a31-b316-83c0db43e183",      "name": "Guest Wiwifiwi",      "rank": "Egg",      "tier": 4,      "topRank": 5,      "vstar": 0,      "avatar": null,      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    },    {      "userID": "1ed75f85-5a67-69f0-945f-709c3e04f1e2",      "name": "Guest Nitocila",      "rank": "Egg",      "tier": 4,      "topRank": 6,      "vstar": 0,      "avatar": null,      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    },    {      "userID": "1ed75fa7-6b0f-69d9-b316-08e15fabb020",      "name": "Guest Waxepono",      "rank": "Egg",      "tier": 4,      "topRank": 7,      "vstar": 0,      "avatar": null,      "_etag": "b86cb0f289a61144d98a6fa4513af8ff"    }  ],  "_metadata": {    "limit": 100,    "offset": 0,    "hasNext": false  }}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/season-leaderboards' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com

Auth

ApiKeyAuth

ParametersShow optional parameters

limit — query

offset — query

milestone — query

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
