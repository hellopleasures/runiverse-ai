# List Fighter Config of User | Mavis Docs

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
        
        -   [List User's Fighters](/api/origins/list-users-fighters)
        -   [List Fighter Config of User](/api/origins/list-fighter-config-of-user)
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
    

# List Fighter Config of User

GET 

## https://api-gateway.skymavis.com/origins/v2/community/users/fighters/configs

List of all fighter configs from an user

## Request[​](/api/origins/list-fighter-config-of-user#request "Direct link to Request")

### 

Query Parameters

**userID** stringrequired

Unique string that identifies a user.

**Example:** 1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6

**limit** integer

The maximum number of Axies in the response

**Example:** 1

**offset** integer

The offset of Axies returned

**Example:** 0

## Responses[​](/api/origins/list-fighter-config-of-user#responses "Direct link to Responses")

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
{  "_etag": "e489bb13c59332be78d9bb6606ef989b",  "_items": [    {      "id": 102984360,      "name": "Default",      "charms": {        "eyes": "",        "mouth": "",        "ears": "",        "horn": "",        "back": "",        "tail": ""      },      "charmPoints": {},      "runes": [        "rune_neutral_offensive_1"      ],      "role": "none",      "axieID": 11199437,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "ec8de6c52fee72910d281d9e7d8395e8"    },    {      "id": 102984361,      "name": "Default",      "charms": {        "eyes": "",        "mouth": "",        "ears": "",        "horn": "",        "back": "",        "tail": ""      },      "charmPoints": {},      "runes": [        "rune_neutral_offensive_1"      ],      "role": "none",      "axieID": 8906488,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "dd458ae74018790965bd73af4a435140"    },    {      "id": 102984362,      "name": "Default",      "charms": {        "eyes": "",        "mouth": "",        "ears": "",        "horn": "",        "back": "",        "tail": ""      },      "charmPoints": {},      "role": "none",      "axieID": 3157,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "df3dff7e95126c9b4a5d5f84e555ade2"    },    {      "id": 115595902,      "name": "Default",      "charms": {        "eyes": "",        "mouth": "ecard_bird_2012_s8",        "ears": "ecard_bird_2012_s8",        "horn": "ecard_bird_3012_s8",        "back": "ecard_bird_momo_1",        "tail": "ecard_neutral_3012_s8_nondec"      },      "charmPoints": {        "ears": {          "charm": "ecard_bird_2012_s8",          "points": {            "bird": 1          }        },        "horn": {          "charm": "ecard_bird_3012_s8",          "points": {            "bird": 4          }        },        "tail": {          "charm": "ecard_neutral_3012_s8_nondec",          "points": {            "beast": 3,            "bird": 2          }        },        "mouth": {          "charm": "ecard_bird_2012_s8",          "points": {            "bird": 1          }        },        "back": {          "charm": "ecard_bird_momo_1",          "points": {            "bird": 4          }        }      },      "runes": [        "rune_beast_2010_s8_nondec"      ],      "role": "none",      "axieID": 11675039,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "1d6e4bba9fd8a9bebe109cb7098a8868"    },    {      "id": 115595914,      "name": "Default",      "charms": {        "eyes": "",        "mouth": "",        "ears": "",        "horn": "",        "back": "",        "tail": ""      },      "charmPoints": {},      "role": "none",      "axieID": 11625427,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "17d02e312c3f927d22aeab904803e738"    },    {      "id": 115601133,      "name": "Default",      "charms": {        "eyes": "",        "mouth": "",        "ears": "",        "horn": "ecard_neutral_1004",        "back": "ecard_neutral_1005",        "tail": ""      },      "charmPoints": {        "horn": {          "charm": "ecard_neutral_1004",          "points": {            "plant": 1          }        },        "back": {          "charm": "ecard_neutral_1005",          "points": {            "dawn": 1          }        }      },      "runes": [        "rune_beast_tripp_1"      ],      "role": "none",      "axieID": 5,      "axieType": "starter",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "a402968b3956552d47f4baab00440172"    },    {      "id": 115601417,      "name": "Default",      "charms": {        "eyes": "",        "mouth": "",        "ears": "",        "horn": "",        "back": "",        "tail": ""      },      "charmPoints": {},      "runes": [        "rune_neutral_offensive_1"      ],      "role": "none",      "axieID": 9156440,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "1c47c4ae6703e1b211a86f27f73f91c6"    },    {      "id": 127397086,      "name": "Default",      "charms": {        "eyes": "ecard_neutral_2010_s8",        "mouth": "ecard_neutral_2017_s8",        "ears": "ecard_reptile_2011_s8",        "horn": "ecard_reptile_3013_s8_nondec",        "back": "ecard_reptile_3012_s8_nondec",        "tail": ""      },      "charmPoints": {        "eyes": {          "charm": "ecard_neutral_2010_s8",          "points": {            "beast": 1,            "reptile": 1          }        },        "ears": {          "charm": "ecard_reptile_2011_s8",          "points": {            "reptile": 2          }        },        "horn": {          "charm": "ecard_reptile_3013_s8_nondec",          "points": {            "reptile": 4          }        },        "mouth": {          "charm": "ecard_neutral_2017_s8",          "points": {            "beast": 3          }        },        "back": {          "charm": "ecard_reptile_3012_s8_nondec",          "points": {            "reptile": 4          }        }      },      "runes": [        "rune_reptile_3012_s8_nondec"      ],      "role": "none",      "axieID": 5490812,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "19d4d24acb27730145ca8fcfa89d4472"    },    {      "id": 162367971,      "name": "Default",      "charms": {        "eyes": "ecard_plant_2012_s8",        "mouth": "ecard_plant_2013_s8",        "ears": "ecard_plant_2013_s8",        "horn": "ecard_plant_2013_s8",        "back": "ecard_plant_3012_s8",        "tail": "ecard_plant_2012_s8"      },      "charmPoints": {        "eyes": {          "charm": "ecard_plant_2012_s8",          "points": {            "plant": 1          }        },        "ears": {          "charm": "ecard_plant_2013_s8",          "points": {            "plant": 3          }        },        "horn": {          "charm": "ecard_plant_2013_s8",          "points": {            "plant": 3          }        },        "tail": {          "charm": "ecard_plant_2012_s8",          "points": {            "plant": 1          }        },        "mouth": {          "charm": "ecard_plant_2013_s8",          "points": {            "plant": 3          }        },        "back": {          "charm": "ecard_plant_3012_s8",          "points": {            "plant": 4          }        }      },      "runes": [        "rune_plant_3011_s8_nft"      ],      "role": "none",      "axieID": 11122759,      "axieType": "ronin",      "userID": "1ec9eb73-a184-6f7d-a60c-90f3c97b0fb6",      "isCurrent": true,      "_etag": "74d19073d4e647be06682641e06083ad"    }  ],  "_metadata": {    "limit": 20,    "offset": 0,    "hasNext": false  }}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/community/users/fighters/configs' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com

Auth

ApiKeyAuth

Parameters

userID — queryrequired

Show optional parameters

limit — query

offset — query

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
