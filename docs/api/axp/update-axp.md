# Update AXP | Mavis Docs

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
    
    -   [Introduction](/api/axp/axp-endpoints)
    -   [Check AXP gained](/api/axp/check-axp-gained)
    -   [Get AXP](/api/axp/get-axp)
    -   [Get AXP by game](/api/axp/get-axp-by-game)
    -   [Update AXP](/api/axp/update-axp)
-   [Axie Infinity Origins API](/api/origins/origins-endpoints)
    
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Update AXP

POST 

## https://api-gateway.skymavis.com/axp/update/update\_axp

Update axie's AXP. Do not test this endpoint in production.

Conditions:

-   All updates have to be unique by `game_id`, `axie_id`, and `timestamp`.

## Request[​](/api/axp/update-axp#request "Direct link to Request")

-   application/json

### 

Body

**

axp\_data\_list

**object\[\]

-   Array \[
    

**axie\_id** axie\_id (integer)required

**Default value:** `1`

Axie ID to increase AXP.

**xp** xp (number)required

**Default value:** `1`

Amount of AXP requesting to increase.

**timestamp** timestamp (number)required

**Default value:** `1000000000000000`

Time of requesting to increase AXP in milliseconds.

**metadata** object

JSON (optional). Metadata of increasing AXP action.

-   \]
    

## Responses[​](/api/axp/update-axp#responses "Direct link to Responses")

-   200

OK

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
curl -L 'https://api-gateway.skymavis.com/axp/update/update_axp' \-H 'Content-Type: application/json' \-H 'X-API-Key: <API_KEY_VALUE>' \-d '{  "axp_data_list": [    {      "axie_id": 1,      "xp": 1,      "timestamp": 1000000000000000,      "metadata": {        "game": "DOLL",        "action": "level_up"      }    }  ]}'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com

Auth

ApiKeyAuth

Body

{
  "axp\_data\_list": \[    {      "axie\_id": 1,      "xp": 1,      "timestamp": 1000000000000000,      "metadata": {        "game": "DOLL",        "action": "level\_up"      }    }  \]
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
