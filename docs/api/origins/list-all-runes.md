# List All Runes | Mavis Docs

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
    

# List All Runes

GET 

## https://api-gateway.skymavis.com/origins/v2/community/runes

Get list of all runes in Origins

## Request[​](/api/origins/list-all-runes#request "Direct link to Request")

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

## Responses[​](/api/origins/list-all-runes#responses "Direct link to Responses")

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
{  "_etag": "821d8294cc4648870d89c1d297f4e8f4",  "_items": [    {      "id": "rune_neutral_4011_s6_nondec",      "rune": "neutral_4011_s6_nondec",      "class": "Neutral",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1695784961,      "item": {        "id": "rune_neutral_4011_s6_nondec",        "displayOrder": 140112,        "category": "Special",        "rarity": "Mystic",        "description": "{Solo}. Until <Round> 2, when your turn ends, lose 2 <Energy Fragment>. After that, when your turn starts, gain 3 Fragments.",        "name": "Shady Exchange",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",        "updatedAt": 1695784928      },      "season": {        "id": 7,        "name": "Season 6"      },      "_etag": "99890641599d1da2879652261916ae7e"    },    {      "id": "rune_bird_3010_s7_nondec",      "rune": "bird_3010_s7_nondec",      "class": "Bird",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1704253961,      "item": {        "id": "rune_bird_3010_s7_nondec",        "displayOrder": 430102,        "category": "Special",        "rarity": "Epic",        "description": "{Solo}. When your turn starts, gain 1 <Fragment>. Attacks deal 7 DMG per Energy Spent to enemy Axies.",        "name": "Energy Guru",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",        "updatedAt": 1704253082      },      "season": {        "id": 8,        "name": "Season 7"      },      "_etag": "a0d5b33276c384d36fab361410acf4de"    },    {      "id": "rune_plant_2002_s0",      "rune": "plant_2002_s0",      "class": "Plant",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1663127051,      "item": {        "id": "rune_plant_2002_s0",        "displayOrder": 10520021,        "category": "Special",        "rarity": "Rare",        "description": "All teammates regen 4 HP when your turn ends. Increase Healing card effects by 10%.",        "name": "Healing Pulse",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",        "updatedAt": 1663127051      },      "season": {        "id": 1,        "name": "Season 0"      },      "_etag": "f8eccc0fe2605c616f831b31609f9d1b"    },    {      "id": "rune_bug_3010_s4_nft",      "rune": "bug_3010_s4_nft",      "class": "Bug",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1683690624,      "item": {        "id": "rune_bug_3010_s4_nft",        "displayOrder": 330100,        "category": "Special",        "rarity": "Epic",        "description": "{Solo}. When your turn starts, steal 35% Shield from the enemy Axie with the most Shield. If none have Shield, {Steal} 6 HP from enemy Axies.",        "name": "Leech",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1004017",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",        "updatedAt": 1681874003      },      "season": {        "id": 5,        "name": "Season 4"      },      "_etag": "d40150328b5cb2f25fb0db9ad306681e"    },    {      "id": "rune_neutral_2011_s3_nft",      "rune": "neutral_2011_s3",      "class": "Neutral",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1678247938,      "item": {        "id": "rune_neutral_2011_s3_nft",        "displayOrder": 120110,        "category": "Special",        "rarity": "Rare",        "description": "Other allied Axies' Heal and Shield cards have 10% bonus stats when played.",        "name": "Pure Skill",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1003002",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",        "updatedAt": 1678247860      },      "season": {        "id": 4,        "name": "Season 3"      },      "_etag": "ce33f1db77c4ebc199a55d8768d8408f"    },    {      "id": "rune_dusk_2010_s4_nondec",      "rune": "dusk_2010_s4_nondec",      "class": "Dusk",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1683690625,      "item": {        "id": "rune_dusk_2010_s4_nondec",        "displayOrder": 1020102,        "category": "Special",        "rarity": "Rare",        "description": "Before the battle starts, add 1 [Purge] to your Deck. This Axie's Cards gain +10% Stats.",        "name": "Dark Flame",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",        "updatedAt": 1681874004      },      "season": {        "id": 5,        "name": "Season 4"      },      "_etag": "f25ce1dc97d37794092ddbc358ae9172"    },    {      "id": "rune_bird_2011_s5",      "rune": "bird_2011_s5",      "class": "Bird",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1689219394,      "item": {        "id": "rune_bird_2011_s5",        "displayOrder": 420111,        "category": "Special",        "rarity": "Rare",        "description": "When your turn starts, randomly deal 10 DMG and apply 3 {Weak} to an enemy Axie without {Weak}.",        "name": "Frail Egg",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",        "updatedAt": 1688540555      },      "season": {        "id": 6,        "name": "Season 5"      },      "_etag": "ad2665ebbc2162ab1eb81c8af964548e"    },    {      "id": "rune_bird_2001_s0_nft",      "rune": "bird_2001_s0_nft",      "class": "Bird",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1663127051,      "item": {        "id": "rune_bird_2001_s0_nft",        "displayOrder": 10420010,        "category": "Special",        "rarity": "Rare",        "description": "Summons summoned by this Axie gain 14 bonus max HP.",        "name": "The Incubator",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1000009",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",        "updatedAt": 1663127051      },      "season": {        "id": 1,        "name": "Season 0"      },      "_etag": "90288a6cdc0aad3add56699fac61878a"    },    {      "id": "rune_plant_2011_s6_nft",      "rune": "plant_2011_s6_nft",      "class": "Plant",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1695784960,      "item": {        "id": "rune_plant_2011_s6_nft",        "displayOrder": 520110,        "category": "Special",        "rarity": "Rare",        "description": "This Axie's Summons gain +14 Max HP. When this Axie's Summons die, deal DMG equal to 8% of this Axie's Current HP to the closest enemy Axie.",        "name": "Destiny Leaf",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1006030",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",        "updatedAt": 1695784928      },      "season": {        "id": 7,        "name": "Season 6"      },      "_etag": "f983a4aed45290c75869186840ca8a5c"    },    {      "id": "rune_bird_2011_s3_nft",      "rune": "bird_2011_s3",      "class": "Bird",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1678247938,      "item": {        "id": "rune_bird_2011_s3_nft",        "displayOrder": 420110,        "category": "Special",        "rarity": "Rare",        "description": "When your turn starts, randomly apply Weak for 3 turns to an enemy Axie that doesn’t have Weak.",        "name": "Frail Egg",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1003023",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",        "updatedAt": 1678247860      },      "season": {        "id": 4,        "name": "Season 3"      },      "_etag": "e65aebb01bfc90b8fdf82eb9c89d0311"    },    {      "id": "rune_beast_4011_s8_nft",      "rune": "beast_4011_s8_nft",      "class": "Beast",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1710904868,      "item": {        "id": "rune_beast_4011_s8_nft",        "displayOrder": 240110,        "category": "Special",        "rarity": "Mystic",        "description": "{Solo}. On targets with Bleed, Single and <AoE> Attacks create <Bloodstorm> then double the {Bleed} stacks on targets with < 10 {Bleed}.",        "name": "Brutal Claw",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1008017",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_brutal_claw.png",        "updatedAt": 1710904821      },      "season": {        "id": 9,        "name": "Season 8"      },      "_etag": "d0deb9fd96946c68715eebea6e2357f4"    },    {      "id": "rune_bird_2011_s7_nondec",      "rune": "bird_2011_s7_nondec",      "class": "Bird",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1704253961,      "item": {        "id": "rune_bird_2011_s7_nondec",        "displayOrder": 420112,        "category": "Special",        "rarity": "Rare",        "description": "When your turn starts, randomly deal 10 DMG and apply 3 {Weak} to an enemy Axie without {Weak}.",        "name": "Frail Egg",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",        "updatedAt": 1704253082      },      "season": {        "id": 8,        "name": "Season 7"      },      "_etag": "6b6bfd5e318528728f06ea85112d9b94"    },    {      "id": "rune_reptile_4001_s0",      "rune": "reptile_4001_s0",      "class": "Reptile",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1663127051,      "item": {        "id": "rune_reptile_4001_s0",        "displayOrder": 10740011,        "category": "Special",        "rarity": "Mystic",        "description": "{Solo}. When your turn start, {Cleanse} 2 random debuffs if HP is above 75% or recover 10% of max HP if not.",        "name": "Regenerator",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",        "updatedAt": 1663127051      },      "season": {        "id": 1,        "name": "Season 0"      },      "_etag": "a843a32b34bcb24508c3a5d820924c8c"    },    {      "id": "rune_neutral_3011_s6_nondec",      "rune": "neutral_3011_s6_nondec",      "class": "Neutral",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1695784961,      "item": {        "id": "rune_neutral_3011_s6_nondec",        "displayOrder": 130112,        "category": "Special",        "rarity": "Epic",        "description": "{Solo}. When the battle starts, gain 1 <Energy Fragment> per unique Axie Class in your team. Creating an <Energy Burst> deals 30 DMG to all enemies and heals allied Axies for 30 HP.",        "name": "Energy Shard",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",        "updatedAt": 1695784928      },      "season": {        "id": 7,        "name": "Season 6"      },      "_etag": "f82a9f666173237ded9a3092d671b4b5"    },    {      "id": "rune_neutral_2001_s0",      "rune": "neutral_2001_s0",      "class": "Neutral",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1663127051,      "item": {        "id": "rune_neutral_2001_s0",        "displayOrder": 10120011,        "category": "Special",        "rarity": "Rare",        "description": "Healing and Shield cards gain 15% {Class Bonus}.        ",        "name": "Pure Skill",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",        "updatedAt": 1663127051      },      "season": {        "id": 1,        "name": "Season 0"      },      "_etag": "9474d05ddc7709b8078a40917aea73b0"    },    {      "id": "rune_reptile_2012_s2_nft",      "rune": "reptile_2012_s2_nft",      "class": "Reptile",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1673408817,      "item": {        "id": "rune_reptile_2012_s2_nft",        "displayOrder": 720120,        "category": "Special",        "rarity": "Rare",        "description": "When a Secret on any ally triggered, deal 10 <Pure DMG> to a random enemy Axie, then heal 10 HP to this Axie. (revealed Shield isn't a triggered Secret)",        "name": "Shellshock",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1002039",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",        "updatedAt": 1673408706      },      "season": {        "id": 3,        "name": "Season 2"      },      "_etag": "3d173b722243d68491854d36c88976cf"    },    {      "id": "rune_mech_2010_s5",      "rune": "mech_2010_s5",      "class": "Mech",      "craftable": false,      "weight": 0,      "hp": 0,      "hpPct": 0,      "updatedAt": 1689219394,      "item": {        "id": "rune_mech_2010_s5",        "displayOrder": 820101,        "category": "Special",        "rarity": "Rare",        "description": "Before the battle starts, add 1 [Scan] to your Deck. This Axie's Cards gain +10% Stats.",        "name": "Trap Nullifier",        "maxCopies": -1,        "tokenStandard": "",        "tokenAddress": "",        "tokenId": "",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",        "updatedAt": 1688540555      },      "season": {        "id": 6,        "name": "Season 5"      },      "_etag": "d3029b4a126db3b71ae285da9e2c95d1"    },    {      "id": "rune_bug_2010_s3_nft",      "rune": "bug_2010_s3",      "class": "Bug",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1678247938,      "item": {        "id": "rune_bug_2010_s3_nft",        "displayOrder": 320100,        "category": "Special",        "rarity": "Rare",        "description": "When the battle starts, this Axie gains 2 {Cocoon}. This Axie gains 15% bonus Shield from all sources.",        "name": "Way of Bug",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1003015",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",        "updatedAt": 1678247860      },      "season": {        "id": 4,        "name": "Season 3"      },      "_etag": "5c1066c38ea9dca4f09c07f50e1e70e6"    },    {      "id": "rune_neutral_3011_s8_nft",      "rune": "neutral_3011_s8_nft",      "class": "Neutral",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1710904868,      "item": {        "id": "rune_neutral_3011_s8_nft",        "displayOrder": 130110,        "category": "Special",        "rarity": "Epic",        "description": "{Solo}. When the battle starts, gain 1 <Fragment> per unique Axie Class in your team. Creating a <Burst> deals 30 DMG to all enemies and heals allied Axies for 30 HP.",        "name": "Energy Shard",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1008005",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",        "updatedAt": 1710904821      },      "season": {        "id": 9,        "name": "Season 8"      },      "_etag": "9ecc806631e9ddb7d4acd25a26423087"    },    {      "id": "rune_aquatic_4010_s5_nft",      "rune": "aquatic_4010_s5_nft",      "class": "Aquatic",      "craftable": true,      "weight": 100,      "hp": 0,      "hpPct": 0,      "updatedAt": 1689219394,      "item": {        "id": "rune_aquatic_4010_s5_nft",        "displayOrder": 640100,        "category": "Special",        "rarity": "Mystic",        "description": "{Solo}. When your turn starts, +1 {Bubble}. This Axie's {Bubble Bomb} deal +50% DMG.",        "name": "Heart of Ocean",        "maxCopies": -1,        "tokenStandard": "ERC1155",        "tokenAddress": "0xC25970724f032aF21d801978C73653c440CF787c",        "tokenId": "1005041",        "imageUrl": "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",        "updatedAt": 1688540555      },      "season": {        "id": 6,        "name": "Season 5"      },      "_etag": "08c204e87fc5086f1152053da4514d57"    }  ],  "_metadata": {    "limit": 20,    "offset": 0,    "total": 1935,    "hasNext": true  }}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/community/runes' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
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
