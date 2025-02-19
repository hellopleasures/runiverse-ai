# List All Items | Mavis Docs

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
    

# List All Items

GET 

## https://api-gateway.skymavis.com/origins/v2/community/items

Get list of all item in Origins, including runes, charms, crafting materials, free starter Axies, etc ...

## Request[​](/api/origins/list-all-items#request "Direct link to Request")

### 

Query Parameters

**offset** integer

**Default value:** `0`

The number of items to skip before starting to collect the result set.

**limit** integer

**Possible values:** `>= 1` and `<= 100`

**Default value:** `20`

The numbers of items to return.

## Responses[​](/api/origins/list-all-items#responses "Direct link to Responses")

-   200

OK

**Response Headers**

-   **Date**string
    
-   **Content-Type**string
    
-   **Transfer-Encoding**string
    
-   **Connection**string
    
-   **Etag**string
    
-   **CF-Cache-Status**string
    
-   **Expect-CT**string
    
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
{  "_etag": "6b710a3b58f6c36f4bc681b42f28c16d",  "_items": [    {      "id": "moon_crystal",      "displayOrder": 10,      "category": "Material",      "rarity": "Rare",      "description": "Used when crafting: Reduced chance of Rare.\nLimited to Intermediate Recipes and above.",      "inventoryDisplay": true,      "name": "Moon Dust (Basic)",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/moon_crystal.png",      "updatedAt": 1663127051,      "_etag": "4f5aa7ac0d905036bed04f4fefa36d94"    },    {      "id": "lunar_blessing",      "displayOrder": 11,      "category": "Material",      "rarity": "Epic",      "description": "Used when crafting: Reduced chance of Rare and increased chance of Epic.\nLimited to Intermediate Recipes and above.",      "inventoryDisplay": true,      "name": "Moon Dust (Epic)",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/lunar_blessing.png",      "updatedAt": 1663127051,      "_etag": "e20aaaf216f6abbf010b4a661b8fbcd1"    },    {      "id": "ancient_crescent_epic",      "displayOrder": 14,      "category": "Material",      "rarity": "Epic",      "description": "Used when crafting: Increased chance of a Rune. Reduced chance of Rare and increased chance of Epic.\nLimited to Intermediate Recipes and above.",      "inventoryDisplay": true,      "name": "Ancient Moonstone (Epic)",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ancient_crescent_epic.png",      "updatedAt": 1705464242,      "_etag": "8c955e94a5ff53f719526ac6e9ab4e7c"    },    {      "id": "ancient_crescent_mystic",      "displayOrder": 15,      "category": "Material",      "rarity": "Mystic",      "description": "Used when crafting: Increased chance of a Rune. Reduced chance of Rare and increased chance of Mystic.\nLimited to Master Recipes.",      "inventoryDisplay": true,      "name": "Ancient Moonstone (Mystic)",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ancient_crescent_mystic.png",      "updatedAt": 1705464242,      "_etag": "8f0b4b20a6366c97abb39e4e518f6b53"    },    {      "id": "axie_mit",      "displayOrder": 5,      "category": "Axie",      "rarity": "Rare",      "description": "Starter Axie. Class: Plant.",      "name": "Mit",      "maxCopies": 1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/axie_mit.png",      "updatedAt": 1710904815,      "_etag": "9c82305d7f7e2d7d832b53127cb3ff5a"    },    {      "id": "rune_beast_2001_s0",      "displayOrder": 10220011,      "category": "Special",      "rarity": "Rare",      "description": "Cannot gain Shield. Take 15% less DMG.",      "name": "Pangolin Scale",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",      "updatedAt": 1663127051,      "_etag": "fb143548efc30fadf827adc2ec84b1e0"    },    {      "id": "eclipse_stone",      "displayOrder": 12,      "category": "Material",      "rarity": "Mystic",      "description": "Used when crafting: Reduced chance of Rare and increased chance of Mystic.\nLimited to Master Recipes.",      "inventoryDisplay": true,      "name": "Moon Dust (Mystic)",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/eclipse_stone.png",      "updatedAt": 1663127051,      "_etag": "d052bb51177f02c0b599a92a966047f7"    },    {      "id": "axie_noir",      "displayOrder": 5,      "category": "Axie",      "rarity": "Rare",      "description": "Starter Axie. Class: Aquatic.",      "name": "Noir",      "maxCopies": 1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/axie_noir.png",      "updatedAt": 1696932344,      "_etag": "4646ab6e6fb1f7d8dedfdc84e8bdbac6"    },    {      "id": "axie_rouge",      "displayOrder": 5,      "category": "Axie",      "rarity": "Rare",      "description": "Starter Axie. Class: Aquatic.",      "name": "Rouge",      "maxCopies": 1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/axie_rouge.png",      "updatedAt": 1696932344,      "_etag": "933b1ac4fe360f3947c684804855da43"    },    {      "id": "ecard_dusk_5004",      "displayOrder": 21040020,      "category": "Special",      "rarity": "Mystic",      "description": "(Enhance any cards)\nAdd <Retain>.",      "name": "Cursed Doll",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_dusk_5004.png",      "updatedAt": 1663127051,      "_etag": "481fae8328a1590cdf9ba582f6fb78fc"    },    {      "id": "feature_battle_pause",      "category": "Special",      "rarity": "Common",      "name": "Pause Battle",      "maxCopies": 2,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/secret.png",      "updatedAt": 1663127051,      "_etag": "6ede4cfbbf4e96469b6f321f17ca0ef4"    },    {      "id": "maxs",      "displayOrder": 5,      "category": "Material",      "rarity": "Epic",      "description": "Automatically converted to AXS at a 1000:1 ratio and sent to your Ronin wallet at the end of the season.",      "inventoryDisplay": true,      "name": "mAXS",      "maxCopies": -1,      "tokenStandard": "ERC20",      "tokenAddress": "0x97a9107c1793bc407d6f527b77e7fff4d812bece",      "tokenId": "0",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/maxs.png",      "updatedAt": 1663127051,      "_etag": "4aaa5f1f71565f7face6c24f923f8fd9"    },    {      "id": "emaxs",      "displayOrder": 6,      "category": "Material",      "rarity": "Epic",      "description": "Automatically converted to AXS at a 1000:1 ratio and sent to your Ronin wallet at the end of the season.",      "inventoryDisplay": true,      "name": "EmAXS",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/emaxs.png",      "updatedAt": 1689219255,      "_etag": "950a54bf34423604311ab86b266fd710"    },    {      "id": "stk_angry",      "displayOrder": 1,      "category": "Cosmetic",      "rarity": "Common",      "description": "Default Sticker",      "name": "Angry",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/sticker/Angry.png",      "updatedAt": 1663127051,      "_etag": "da3cb170354bfca7699e93167ba607a7"    },    {      "id": "stk_ano",      "displayOrder": 1,      "category": "Cosmetic",      "rarity": "Common",      "description": "Default Sticker",      "name": "Ano",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/sticker/Ano.png",      "updatedAt": 1663127051,      "_etag": "54a975009741e133f4fd980c1a91ee55"    },    {      "id": "stk_bark",      "displayOrder": 1,      "category": "Cosmetic",      "rarity": "Common",      "description": "Default Sticker",      "name": "Bark",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/sticker/Bark.png",      "updatedAt": 1663127051,      "_etag": "4118ac0eaadc5d88be30b893875a1abb"    },    {      "id": "stk_bonk",      "displayOrder": 1,      "category": "Cosmetic",      "rarity": "Common",      "description": "Default Sticker",      "name": "Bonk",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/sticker/Bonk.png",      "updatedAt": 1663127051,      "_etag": "d4f8e8a11b0f233b5b039e00a9cda7d4"    },    {      "id": "stk_cheer",      "displayOrder": 1,      "category": "Cosmetic",      "rarity": "Common",      "description": "Earned from reaching the final milestone in the Contest: \"Plantstravaganza\"",      "name": "Cheers",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/sticker/Cheer.png",      "updatedAt": 1663127051,      "_etag": "689a405ba2f09d34f770e095815e655d"    },    {      "id": "ecard_beast_4003_s0",      "displayOrder": 20240031,      "category": "Special",      "rarity": "Mystic",      "description": "(Enhance an Attack card)\nAttacks appy {Bleed} for 4 turns.",      "name": "Hidden Razor",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_beast_5005.png",      "updatedAt": 1663127051,      "_etag": "8642aa16bbaf8d547eba9908afc6aa4c"    },    {      "id": "ecard_neutral_5004_s0",      "displayOrder": 20150041,      "category": "Special",      "rarity": "Mystic",      "description": "(Enhance any card)\nAdd <Banish>.",      "name": "Energy Drink M",      "maxCopies": -1,      "tokenStandard": "",      "tokenAddress": "",      "tokenId": "",      "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_neutral_5005.png",      "updatedAt": 1663127051,      "_etag": "056680cac81f85f81a6278b4d5bb266f"    }  ],  "_metadata": {    "limit": 20,    "offset": 0,    "total": 4696,    "hasNext": true  }}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/community/items' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com

Auth

ApiKeyAuth

ParametersShow optional parameters

offset — query

limit — query

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
