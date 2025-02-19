# List User's Fighters | Mavis Docs

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
    

# List User's Fighters

GET 

## https://api-gateway.skymavis.com/origins/v2/community/users/fighters

List of Axie from an user

## Request[​](/api/origins/list-users-fighters#request "Direct link to Request")

### 

Query Parameters

**userID** stringrequired

Unique string that identifies a user.

**Example:** 1ec9eb6f-4d26-67e3-a60c-6773c6c577ed

**axieType** stringrequired

We have 2 types of Axie: \["starter", "ronin"\]

**Example:** starter

**limit** integer

The maximum number of Axies in the response

**Example:** 1

**offset** integer

The offset of Axies returned

**Example:** 0

## Responses[​](/api/origins/list-users-fighters#responses "Direct link to Responses")

-   200

OK

**Response Headers**

-   **Date**string
    
-   **Content-Type**string
    
-   **Content-Length**integer
    
-   **Connection**string
    
-   **Etag**string
    
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
{  "_etag": "0c955851f0f1067ca916ade0245c3eed",  "_items": [    {      "id": 1,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Beast",      "title": "Normal",      "name": "Buba",      "genes": "0x41000000000000000000000300000c0060030003000004002001000300000c0060030003000c046023010003000c0c606303000300000c006003",      "stats": {        "hp": 400,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 4,      "potentialPoints": {        "aquatic": 0,        "beast": 11,        "bird": 0,        "bug": 0,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 4,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Plant",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Beast",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Plant",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Beast",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Beast",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Beast",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 2,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Plant",      "title": "Normal",      "name": "Olek",      "genes": "0x180000000000010002412090000000000001000c046023010001000c04602301000100140ca06503000100400e0070030001000c046023010001000c04602301",      "stats": {        "hp": 350,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 4,      "potentialPoints": {        "aquatic": 0,        "beast": 0,        "bird": 0,        "bug": 0,        "dawn": 0,        "dusk": 0,        "mech": 2,        "plant": 11,        "reptile": 2      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Mech",          "part_value": 3,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Tail",          "part_class": "Plant",          "part_value": 1,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Back",          "part_class": "Plant",          "part_value": 1,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Mouth",          "part_class": "Plant",          "part_value": 1,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Ears",          "part_class": "Reptile",          "part_value": 3,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Eyes",          "part_class": "Plant",          "part_value": 1,          "part_skin": 0,          "part_stage": 0        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 3,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Aquatic",      "title": "Normal",      "name": "Puffy",      "genes": "0x200000000000010002c160b0000000000003001004802401000100000c00600300010010048024010001001004802401000100140ca065030001001004802401",      "stats": {        "hp": 355,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 4,      "potentialPoints": {        "aquatic": 11,        "beast": 2,        "bird": 0,        "bug": 0,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 0,        "reptile": 2      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Aquatic",          "part_value": 1,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Tail",          "part_class": "Aquatic",          "part_value": 1,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Back",          "part_class": "Reptile",          "part_value": 3,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Mouth",          "part_class": "Beast",          "part_value": 3,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Ears",          "part_class": "Aquatic",          "part_value": 1,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Eyes",          "part_class": "Aquatic",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 5,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Beast",      "title": "Normal",      "name": "Tripp",      "genes": "0x41000000000000000000000300001c00e007000300000800400200030000100080040003000c1c60e3070003004406203101000300002801400a",      "stats": {        "hp": 400,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 4,      "potentialPoints": {        "aquatic": 0,        "beast": 11,        "bird": 0,        "bug": 0,        "dawn": 2,        "dusk": 0,        "mech": 0,        "plant": 2,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Plant",          "part_value": 7,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Beast",          "part_value": 10,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Dawn",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Beast",          "part_value": 2,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Beast",          "part_value": 4,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Beast",          "part_value": 7,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 7,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Reptile",      "title": "Normal",      "name": "Venoki",      "genes": "0x28000000000041000341a0d0000000000003001404a025010003001404a025010003001404a025010003001404a025010003000c1460a3050003000404202101",      "stats": {        "hp": 400,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 4,      "potentialPoints": {        "aquatic": 0,        "beast": 0,        "bird": 0,        "bug": 2,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 2,        "reptile": 11      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Reptile",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Bug",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Plant",          "part_value": 5,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Reptile",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Reptile",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Reptile",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 12,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Bird",      "title": "Normal",      "name": "Momo",      "genes": "0x100000000000410001c0e0700000000000030008044022010003000804402201000300040c206103000300080440220100030008044022010003000804402201",      "stats": {        "hp": 400,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 5,      "potentialPoints": {        "aquatic": 0,        "beast": 0,        "bird": 13,        "bug": 2,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 0,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Bird",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Bird",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Bird",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Bird",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Bug",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Bird",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 16,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Plant",      "title": "Normal",      "name": "Ena",      "genes": "0x180000000000010002412090000000000003000c08604302000300001400a0050003000c206103080003000c0c606303000300440e207103000300440e207103",      "stats": {        "hp": 380,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 3,      "potentialPoints": {        "aquatic": 0,        "beast": 2,        "bird": 0,        "bug": 0,        "dawn": 4,        "dusk": 0,        "mech": 0,        "plant": 9,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Plant",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Dawn",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Dawn",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Beast",          "part_value": 5,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Plant",          "part_value": 8,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Plant",          "part_value": 2,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 17,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Bug",      "title": "Normal",      "name": "Pomodoro",      "genes": "0x8000000000001000140a05000000000000100080c406203000100001c00e0070001000420210108000100401600b005000100400e007003000100041420a105",      "stats": {        "hp": 350,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 2,      "potentialPoints": {        "aquatic": 0,        "beast": 2,        "bird": 2,        "bug": 7,        "dawn": 0,        "dusk": 0,        "mech": 4,        "plant": 0,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Mech",          "part_value": 5,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Tail",          "part_class": "Bug",          "part_value": 5,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Back",          "part_class": "Mech",          "part_value": 3,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Mouth",          "part_class": "Beast",          "part_value": 7,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Ears",          "part_class": "Bug",          "part_value": 8,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Eyes",          "part_class": "Bird",          "part_value": 3,          "part_skin": 0,          "part_stage": 0        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 21,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Beast",      "title": "Normal",      "name": "Xia",      "genes": "0x41000000000000000000000300140ca065030003000c0c606303000300003001800c00030000040020010003000004002001000300001400a005",      "stats": {        "hp": 400,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 4,      "potentialPoints": {        "aquatic": 0,        "beast": 11,        "bird": 0,        "bug": 0,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 2,        "reptile": 2      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Beast",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Beast",          "part_value": 5,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Beast",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Plant",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Beast",          "part_value": 12,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Reptile",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 22,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Beast",      "title": "Normal",      "name": "Bing",      "genes": "0x10000000000000000000003000020010008000300002c01600b000300002801400a000100001c00e0070001000c1c60e307000300001800c006",      "stats": {        "hp": 370,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 5,      "potentialPoints": {        "aquatic": 0,        "beast": 13,        "bird": 0,        "bug": 0,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 2,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Beast",          "part_value": 7,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Tail",          "part_class": "Beast",          "part_value": 6,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Plant",          "part_value": 7,          "part_skin": 0,          "part_stage": 0        },        {          "part_type": "Mouth",          "part_class": "Beast",          "part_value": 11,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Beast",          "part_value": 10,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Beast",          "part_value": 8,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 23,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Aquatic",      "title": "Normal",      "name": "Noir",      "genes": "0x200000000000410002c160b000000000000300100c8064030003001004802401000300102881440a00030000240120090003001020810408000300100c806403",      "stats": {        "hp": 400,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 5,      "potentialPoints": {        "aquatic": 13,        "beast": 2,        "bird": 0,        "bug": 0,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 0,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Beast",          "part_value": 9,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Aquatic",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Aquatic",          "part_value": 8,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Aquatic",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Aquatic",          "part_value": 10,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Aquatic",          "part_value": 3,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    },    {      "id": 24,      "axieType": "starter",      "userID": "1ec9eb6f-4d26-67e3-a60c-6773c6c577ed",      "class": "Aquatic",      "title": "Normal",      "name": "Rouge",      "genes": "0x200000000000010002c160b000000000000300101480a4050003001004802401000300102881440a0003000c246123090003001020810408000300041c20e107",      "stats": {        "hp": 380,        "speed": 0,        "skill": 0,        "morale": 0,        "protection": 0,        "vitality": 0,        "strength": 0,        "wisdom": 0      },      "pureness": 4,      "potentialPoints": {        "aquatic": 11,        "beast": 0,        "bird": 0,        "bug": 2,        "dawn": 0,        "dusk": 0,        "mech": 0,        "plant": 2,        "reptile": 0      },      "config": {        "charms": null,        "charmPoints": null,        "runes": null      },      "parts": [        {          "part_type": "Horn",          "part_class": "Plant",          "part_value": 9,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Tail",          "part_class": "Bug",          "part_value": 7,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Back",          "part_class": "Aquatic",          "part_value": 8,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Mouth",          "part_class": "Aquatic",          "part_value": 1,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Ears",          "part_class": "Aquatic",          "part_value": 10,          "part_skin": 0,          "part_stage": 1        },        {          "part_type": "Eyes",          "part_class": "Aquatic",          "part_value": 5,          "part_skin": 0,          "part_stage": 1        }      ],      "bannedInfo": {        "isBanned": false,        "banUntil": 0      },      "xp": null,      "_etag": "90cdf14646928e2b23a9212effbebae5"    }  ],  "_metadata": {    "limit": 20,    "offset": 0,    "total": 12,    "hasNext": false  }}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/community/users/fighters' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com

Auth

ApiKeyAuth

Parameters

userID — queryrequired

axieType — queryrequired

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
