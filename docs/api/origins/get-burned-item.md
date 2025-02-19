# Get Burned Item | Mavis Docs

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
        
    -   [Battle Log](/api/origins/battle-log)
        
    -   [Burned Items](/api/origins/burned-items)
        
        -   [Get Burned Item](/api/origins/get-burned-item)
    -   [Card](/api/origins/card)
        
    -   [Season](/api/origins/season)
        
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Get Burned Item

GET 

## https://api-gateway.skymavis.com/origins/v2/community/users/:user/items/burned

Get Burned Item

## Request[​](/api/origins/get-burned-item#request "Direct link to Request")

### 

Path Parameters

**user** stringrequired

Unique string that identifies a user.

**Example:** 1ec9eb6f-4d26-67e3-a60c-6773c6c577ed

### 

Query Parameters

**startAt** integerrequired

Start time to query

**Example:** 1661128000

**endAt** integerrequired

End time to query

**Example:** 1668484800

**itemID** stringrequired

The item id you want to filter: \[slp, axs\]

**Example:** slp

## Responses[​](/api/origins/get-burned-item#responses "Direct link to Responses")

-   200

OK

**Response Headers**

-   **Date**string
    
-   **Content-Type**string
    
-   **Content-Length**integer
    
-   **Connection**string
    
-   **Strict-Transport-Security**string
    
-   **Access-Control-Allow-Origin**string
    
-   **Access-Control-Allow-Credentials**boolean
    
-   **Access-Control-Allow-Methods**string
    
-   **Access-Control-Allow-Headers**string
    
-   **Access-Control-Max-Age**integer
    

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
{  "name": "slp",  "total": 2950}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/community/users/:user/items/burned' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com

Auth

ApiKeyAuth

Parameters

user — pathrequired

startAt — queryrequired

endAt — queryrequired

itemID — queryrequired

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
