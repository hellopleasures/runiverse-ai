# Get Rune By ID | Mavis Docs

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
        
        -   [List All Runes](/api/origins/list-all-runes)
        -   [Get Rune By ID](/api/origins/get-rune-by-id)
        -   [List All Charms](/api/origins/list-all-charms)
        -   [Get Charm By ID](/api/origins/get-charm-by-id)
        -   [List All Items](/api/origins/list-all-items)
        -   [Get Item By ID](/api/origins/get-item-by-id)
    -   [User Fighter](/api/origins/user-fighter)
        
    -   [Leaderboard](/api/origins/leaderboard)
        
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
    

# Get Rune By ID

GET 

## https://api-gateway.skymavis.com/origins/v2/community/runes/:rune

Get rune information for a single rune by ID

## Request[​](/api/origins/get-rune-by-id#request "Direct link to Request")

### 

Path Parameters

**rune** stringrequired

Unique string that identifies a rune.

**Example:** rune\_aquatic\_2001\_s0

## Responses[​](/api/origins/get-rune-by-id#responses "Direct link to Responses")

-   200

OK

**Response Headers**

-   **Date**string
    
-   **Content-Type**string
    
-   **Transfer-Encoding**string
    
-   **Connection**string
    
-   **Etag**string
    
-   **Strict-Transport-Security**string
    

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
{  "id": "rune_aquatic_2001_s0",  "rune": "aquatic_2001_s0",  "class": "Aquatic",  "craftable": false,  "weight": 0,  "hp": 0,  "hpPct": 0,  "updatedAt": 1663127051,  "item": {    "id": "rune_aquatic_2001_s0",    "displayOrder": 10620011,    "category": "Special",    "rarity": "Rare",    "description": "At the beginning of your turn, gain Shield equal to 4% of max HP.",    "name": "Calcium Armor",    "maxCopies": -1,    "tokenStandard": "",    "tokenAddress": "",    "tokenId": "",    "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",    "updatedAt": 1663127051  },  "season": {    "id": 1,    "name": "Season 0"  },  "_etag": "937a83767474912da821cf94db3a8981"}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/community/runes/:rune' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com

Auth

ApiKeyAuth

Parameters

rune — pathrequired

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
