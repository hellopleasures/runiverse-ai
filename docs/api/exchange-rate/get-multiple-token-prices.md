# get multiple token prices | Mavis Docs

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
    
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    
    -   [Introduction](/api/exchange-rate/skymavis-exchangerate-api)
    -   [Legacy](/api/exchange-rate/get-multiple-token-prices)
        
    -   [V2](/api/exchange-rate/get-multiple-token-prices)
        
        -   [get all token prices](/api/exchange-rate/get-all-token-prices)
        -   [get multiple token prices](/api/exchange-rate/get-multiple-token-prices)
        -   [get token price by symbol](/api/exchange-rate/get-token-price-by-symbol)

# get multiple token prices

GET 

## https://exchange-rate.skymavis.com/v2/prices

get multiple token prices

## Request[​](/api/exchange-rate/get-multiple-token-prices#request "Direct link to Request")

### 

Query Parameters

**addresses** string

token address list, separated by the comma(",")

**timestamp** number

to request price at timestamp, in unix seconds

**vs\_currencies** string

specify interested currencies only, otherwise, all currencies are returned

## Responses[​](/api/exchange-rate/get-multiple-token-prices#responses "Direct link to Responses")

-   200
-   500

OK

-   application/json

-   Schema
-   Example (from schema)

**

Schema

**

**

result

**

object

**

property name\*

**

object

**symbol** string

**

price

**

object

**

property name\*

**

object

**fiat** string

**price** number

```
{  "result": {}}
```

internal error

-   application/json

-   Schema
-   Example (from schema)

**

Schema

**

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
curl -L 'https://exchange-rate.skymavis.com/v2/prices' \-H 'Accept: application/json'
```

Request Collapse all

Base URL

Edit

https://exchange-rate.skymavis.com

ParametersShow optional parameters

addresses — query

timestamp — query

vs\_currencies — query

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
