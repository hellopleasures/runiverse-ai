# List All Charms | Mavis Docs

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
    

# List All Charms

GET 

## https://api-gateway.skymavis.com/origins/v2/community/charms

List All Charms

## Request[​](/api/origins/list-all-charms#request "Direct link to Request")

### 

Query Parameters

**offset** integer

**Default value:** `0`

The number of items to skip before starting to collect the result set.

**limit** integer

**Possible values:** `>= 1` and `<= 100`

**Default value:** `20`

The numbers of items to return.

**seasonId** integer

**Possible values:** `>= 1` and `<= 999`

**Default value:** `0`

The season id of the current season.

## Responses[​](/api/origins/list-all-charms#responses "Direct link to Responses")

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
{  "_etag": "a002979c272c97c2ac45c92080f4404a",  "_items": [    {      "id": "ecard_bird_4010_s2",      "class": "Bird",      "potentialPoint": 5,      "code": "S2_Bird_Weak",      "craftable": false,      "weight": 0,      "tags": [        "attack"      ],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1673408816,      "item": {        "id": "ecard_bird_4010_s2",        "displayOrder": 10440101,        "category": "Special",        "rarity": "Mystic",        "description": "(Alter Attack cards)\nThe card applies {Weak} for 2 turns to its targets.\nIt also deals 10% bonus DMG against enemies with {Weak}.",        "name": "Flamingo Hammer",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_bird_5005.png",        "updatedAt": 1673408706      },      "season": {        "id": 3,        "name": "Season 2"      },      "_etag": "1d15879f711e0dea39b18d0ee6f8752f"    },    {      "id": "ecard_reptile_2011_s1",      "class": "Reptile",      "potentialPoint": 2,      "code": "Reptile_Vitality_1",      "craftable": false,      "weight": 0,      "tags": [],      "energy": 0,      "hp": 10,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1672286044,      "item": {        "id": "ecard_reptile_2011_s1",        "displayOrder": 10720111,        "category": "Special",        "rarity": "Rare",        "description": "(Alter any card)\nThe card's owner's max HP +10.",        "name": "Reptile's Charm of Vitality I (S1.5)",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_reptile_4001.png",        "updatedAt": 1672286008      },      "season": {        "id": 2,        "name": "Season 1"      },      "_etag": "a60a5ff43d4122747f368efb5d55953a"    },    {      "id": "ecard_reptile_3001_s1_nft",      "class": "Reptile",      "potentialPoint": 3,      "code": "",      "craftable": true,      "weight": 100,      "tags": [],      "energy": 0,      "hp": 18,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1663127164,      "item": {        "id": "ecard_reptile_3001_s1_nft",        "displayOrder": 20730010,        "category": "Special",        "rarity": "Epic",        "description": "(Enhance any card)\nAxie's Max HP +18",        "name": "Reptile's Charm of Vitality II",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2001061",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_reptile_5001.png",        "updatedAt": 1663127187      },      "season": {        "id": 2,        "name": "Season 1"      },      "_etag": "8e29ff308334c240ff9932f61fe4c21d"    },    {      "id": "ecard_bug_3010_s7_offseason",      "class": "Bug",      "potentialPoint": 2,      "code": "S7Off_Bug_Endurance_2",      "craftable": false,      "weight": 0,      "tags": [        "shield"      ],      "energy": 0,      "hp": -6,      "damage": 0,      "shield": 15,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1710904863,      "item": {        "id": "ecard_bug_3010_s7_offseason",        "displayOrder": 10330099,        "category": "Special",        "rarity": "Epic",        "description": "(Alter Shields)\nShield +15. Max HP -6.",        "name": "Bug's Charm of Endurance II (S7.5)",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_bug_5001.png",        "updatedAt": 1710904822      },      "season": {        "id": 8,        "name": "Season 7"      },      "_etag": "b0bba2177e346eb4b940583eda6d9650"    },    {      "id": "ecard_neutral_2014_s7_nondec",      "class": "Neutral",      "potentialPoint": 1,      "code": "S7NonDec_Neutral_Faith_2",      "craftable": false,      "weight": 0,      "tags": [        "heal"      ],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 6,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1704253956,      "item": {        "id": "ecard_neutral_2014_s7_nondec",        "displayOrder": 10120142,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Heals)\nHeal +6.",        "name": "Charm of Faith II",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_neutral_2005.png",        "updatedAt": 1704253082      },      "season": {        "id": 8,        "name": "Season 7"      },      "_etag": "458ff2ee8cde0f691e5d0ed626aaf4a2"    },    {      "id": "ecard_bird_2011_s2_nft",      "class": "Bird",      "potentialPoint": 1,      "code": "S2NFT_Bird_Power_1",      "craftable": true,      "weight": 100,      "tags": [        "single_attack"      ],      "energy": 0,      "hp": 0,      "damage": 5,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1673408815,      "item": {        "id": "ecard_bird_2011_s2_nft",        "displayOrder": 10420110,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Single Attack cards)\nATK +5",        "name": "Bird's Charm of Power I",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2002031",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_bird_4001.png",        "updatedAt": 1673408706      },      "season": {        "id": 3,        "name": "Season 2"      },      "_etag": "f5c87af277f27c1045ee38ae869bc42b"    },    {      "id": "ecard_plant_2012_s7_offseason",      "class": "Plant",      "potentialPoint": 1,      "code": "S7Off_Plant_Faith_1",      "craftable": false,      "weight": 0,      "tags": [        "heal"      ],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 7,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1710904863,      "item": {        "id": "ecard_plant_2012_s7_offseason",        "displayOrder": 10520119,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Heals)\nHeal +7.",        "name": "Plant's Charm of Faith I (S7.5)",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_plant_4002.png",        "updatedAt": 1710904822      },      "season": {        "id": 8,        "name": "Season 7"      },      "_etag": "8dfd0eb771b1dfcafbf7f568920f95ed"    },    {      "id": "ecard_aquatic_3010_s7",      "class": "Aquatic",      "potentialPoint": 2,      "code": "S7_Aquatic_Power_2",      "craftable": false,      "weight": 0,      "tags": [        "single_attack",        "power_charm"      ],      "energy": 0,      "hp": -6,      "damage": 11,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1704253956,      "item": {        "id": "ecard_aquatic_3010_s7",        "displayOrder": 10630101,        "category": "Special",        "rarity": "Epic",        "description": "(Alter Single Attacks)\nATK +11. Max HP -6.",        "name": "Aquatic's Charm of Power II",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_aquatic_5002.png",        "updatedAt": 1704253082      },      "season": {        "id": 8,        "name": "Season 7"      },      "_etag": "b048b35a438154d9a6bea3cd7179fa48"    },    {      "id": "ecard_neutral_2015_s8_nft",      "class": "Neutral",      "potentialPoint": 2,      "code": "S8NFT_Neutral_Innate",      "craftable": true,      "weight": 100,      "tags": [],      "energy": 1,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1710904863,      "item": {        "id": "ecard_neutral_2015_s8_nft",        "displayOrder": 10120150,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Any)\n<Innate>. Energy Cost +1.",        "name": "Pre Order Tag",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2008006",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_neutral_5003.png",        "updatedAt": 1710904821      },      "season": {        "id": 9,        "name": "Season 8"      },      "_etag": "338d54e64c65bea76961b37466ad77f2"    },    {      "id": "ecard_bird_4010_s5_nft",      "class": "Bird",      "potentialPoint": 4,      "code": "S5NFT_Bird_Weak",      "craftable": true,      "weight": 100,      "tags": [        "attack"      ],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1689219391,      "item": {        "id": "ecard_bird_4010_s5_nft",        "displayOrder": 10440100,        "category": "Special",        "rarity": "Mystic",        "description": "(Alter Attacks)\nApply 2 {Weak}. +10% DMG to targets with {Weak}.",        "name": "Flamingo Hammer",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2005043",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_bird_5005.png",        "updatedAt": 1688540555      },      "season": {        "id": 6,        "name": "Season 5"      },      "_etag": "79348e66046dc95ea4acad95b820e94e"    },    {      "id": "ecard_neutral_2016_s3_nft",      "class": "Neutral",      "potentialPoint": 2,      "code": "S3NFT_Neutral_EarthStamp",      "craftable": true,      "weight": 100,      "tags": [        "single_attack"      ],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1678247936,      "item": {        "id": "ecard_neutral_2016_s3_nft",        "displayOrder": 10120160,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Single Attack cards)\nChange the card's target to a random enemy.",        "name": "Earth Stamp",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2003007",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_neutral_4001.png",        "updatedAt": 1678247860      },      "season": {        "id": 4,        "name": "Season 3"      },      "_etag": "c9ca8d9750d957e92a0e9efb4a1e63fe"    },    {      "id": "ecard_plant_3001_s0",      "class": "Plant",      "potentialPoint": 3,      "code": "plant_3001_s0",      "craftable": false,      "weight": 0,      "tags": [],      "energy": 0,      "hp": 18,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1663127051,      "item": {        "id": "ecard_plant_3001_s0",        "displayOrder": 20530011,        "category": "Special",        "rarity": "Epic",        "description": "(Enhance any card)\nAxie's max HP +18",        "name": "Plant's Charm of Vitality II",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_plant_5001.png",        "updatedAt": 1663127051      },      "season": {        "id": 1,        "name": "Season 0"      },      "_etag": "b0dcdfc00907958e958ebc3fce251c5f"    },    {      "id": "ecard_plant_3011_s5_nft",      "class": "Plant",      "potentialPoint": 2,      "code": "S5NFT_Plant_Faith_2",      "craftable": true,      "weight": 100,      "tags": [        "heal"      ],      "energy": 0,      "hp": -6,      "damage": 0,      "shield": 0,      "heal": 13,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1689219391,      "item": {        "id": "ecard_plant_3011_s5_nft",        "displayOrder": 10530110,        "category": "Special",        "rarity": "Epic",        "description": "(Alter Heals)\nHeal +13. Max HP -6.",        "name": "Plant's Charm of Faith II",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2005049",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_plant_5002.png",        "updatedAt": 1688540555      },      "season": {        "id": 6,        "name": "Season 5"      },      "_etag": "9c8baad52215b2c3c81f6560d6a014ac"    },    {      "id": "ecard_bird_3011_s6",      "class": "Bird",      "potentialPoint": 2,      "code": "S6_Bird_Focus_2",      "craftable": false,      "weight": 0,      "tags": [        "multihit",        "aoe_attack"      ],      "energy": 0,      "hp": -6,      "damage": 6,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1695784957,      "item": {        "id": "ecard_bird_3011_s6",        "displayOrder": 10430111,        "category": "Special",        "rarity": "Epic",        "description": "Alter Multihit & <AoE> Attacks)\nATK +6. Max HP -6.",        "name": "Bird's Charm of Focus II",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_bird_5002.png",        "updatedAt": 1695784928      },      "season": {        "id": 7,        "name": "Season 6"      },      "_etag": "3b2bb65608a2d5e667c852425e601ab6"    },    {      "id": "ecard_aquatic_3012_s4_nft",      "class": "Aquatic",      "potentialPoint": 4,      "code": "S4NFT_Aquatic_Retain",      "craftable": true,      "weight": 100,      "tags": [],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1683690621,      "item": {        "id": "ecard_aquatic_3012_s4_nft",        "displayOrder": 10630120,        "category": "Special",        "rarity": "Epic",        "description": "(Alter Any)\n<Retain>. If Retained, gain 1 <Energy Fragment> when played.",        "name": "Sticky Octopus",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2004059",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_aquatic_5004.png",        "updatedAt": 1681874004      },      "season": {        "id": 5,        "name": "Season 4"      },      "_etag": "07b1a5337072ef5b228fbbe37c74feac"    },    {      "id": "ecard_neutral_2012_s5_nft",      "class": "Neutral",      "potentialPoint": 1,      "code": "S5NFT_Neutral_Focus_2",      "craftable": true,      "weight": 100,      "tags": [        "multihit",        "aoe_attack"      ],      "energy": 0,      "hp": 0,      "damage": 2,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1689219391,      "item": {        "id": "ecard_neutral_2012_s5_nft",        "displayOrder": 10120120,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Multihit & <AoE> Attacks)\nATK +2.",        "name": "Charm of Focus II",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0x814A9C959a3Ef6CA44b5e2349e3bBa9845393947",        "tokenId": "2005003",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_neutral_2003.png",        "updatedAt": 1688540555      },      "season": {        "id": 6,        "name": "Season 5"      },      "_etag": "cddaac1980ceee8d0a2c026a3b867392"    },    {      "id": "ecard_neutral_2021_s6_nondec",      "class": "Neutral",      "potentialPoint": 4,      "code": "S6NonDec_Neutral_BasicAttack",      "craftable": false,      "weight": 0,      "tags": [],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1695784957,      "item": {        "id": "ecard_neutral_2021_s6_nondec",        "displayOrder": 10120210,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Any)\nWhen the battle starts, Exile this Card. +1 [Red Mirror] to your Deck.",        "name": "Red Mirror",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_neutral_red_mirror.png",        "updatedAt": 1695784928      },      "season": {        "id": 7,        "name": "Season 6"      },      "_etag": "db5feb376e33cb45c79f91cafde4224c"    },    {      "id": "ecard_neutral_3011_s4_nondec",      "class": "Neutral",      "potentialPoint": 3,      "code": "S4NonDec_Neutral_SunStamp",      "craftable": false,      "weight": 0,      "tags": [        "single_attack"      ],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1683690622,      "item": {        "id": "ecard_neutral_3011_s4_nondec",        "displayOrder": 10130112,        "category": "Special",        "rarity": "Epic",        "description": "(Alter Single Attacks)\nChange target to the furthest Enemy. Deal -15% DMG.",        "name": "Sun Stamp",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_neutral_4003.png",        "updatedAt": 1681874004      },      "season": {        "id": 5,        "name": "Season 4"      },      "_etag": "e0f97a446a0db7f388d96d054e3bfb51"    },    {      "id": "ecard_reptile_2013_s2",      "class": "Reptile",      "potentialPoint": 3,      "code": "S2_Reptile_Poison",      "craftable": false,      "weight": 0,      "tags": [        "attack"      ],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1673408816,      "item": {        "id": "ecard_reptile_2013_s2",        "displayOrder": 10720131,        "category": "Special",        "rarity": "Rare",        "description": "(Alter Attack cards)\nThe card applies 1 {Poison} to its targets.\nBonus 1 {Poison} if the target doesn't have {Poison}.",        "name": "Viper's Venom",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_reptile_5005.png",        "updatedAt": 1673408706      },      "season": {        "id": 3,        "name": "Season 2"      },      "_etag": "e847b1a013f1f5674ea3ba8a0b76e51b"    },    {      "id": "ecard_mech_4003",      "class": "Mech",      "potentialPoint": 4,      "code": "mech_4003",      "craftable": true,      "weight": 100,      "tags": [],      "energy": 0,      "hp": 0,      "damage": 0,      "shield": 0,      "heal": 0,      "hpPct": 0,      "damagePct": 0,      "shieldPct": 0,      "healPct": 0,      "updatedAt": 1663127051,      "item": {        "id": "ecard_mech_4003",        "displayOrder": 20830030,        "category": "Special",        "rarity": "Epic",        "description": "(Enhance any card)\nAll teammates gain 2 {Shield Boost}.",        "name": "Protection Cartridge",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/ecard_mech_4003.png",        "updatedAt": 1663127051      },      "season": {        "id": -2,        "name": "Unknown"      },      "_etag": "1c78ac84b80ca9f506369ee52653b9bf"    }  ],  "_metadata": {    "limit": 20,    "offset": 0,    "total": 2171,    "hasNext": true  }}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/community/charms' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
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

seasonId — query

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
