# List Leaderboard | Mavis Docs

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
    

# List Leaderboard

GET 

## https://api-gateway.skymavis.com/origins/v2/leaderboards

List of current leaderboard players

## Request[​](/api/origins/list-leaderboard#request "Direct link to Request")

### 

Query Parameters

**limit** integer

The maximum number of players in the response

**Example:** 100

**offset** integer

The offset of players returned

**Example:** 0

## Responses[​](/api/origins/list-leaderboard#responses "Direct link to Responses")

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
{  "_etag": "ff5691349184631315f14510fdb6e1b4",  "_items": [    {      "userID": "1ec9eb6f-4949-6994-a60c-4eb291ec72cc",      "name": "akaringo",      "rank": "Challenger",      "tier": 0,      "topRank": 1,      "vstar": 697,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-4274-6ed4-a60c-80183b6b5506",      "name": "AndPanda",      "rank": "Challenger",      "tier": 0,      "topRank": 2,      "vstar": 602,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7b-4683-617a-a60c-135c8508aa15",      "name": "waje",      "rank": "Challenger",      "tier": 0,      "topRank": 3,      "vstar": 390,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6b89-648e-a60c-ea006236e67c",      "name": "Tomi SHA",      "rank": "Challenger",      "tier": 0,      "topRank": 4,      "vstar": 357,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-476c-600f-a60c-b412adec7370",      "name": "Sensi | Axie.gg | BDZ",      "rank": "Challenger",      "tier": 0,      "topRank": 5,      "vstar": 320,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-5fd2-6cac-a60c-672b4c97d1c1",      "name": "twitch.tv/elahzul | Chosen Ones",      "rank": "Challenger",      "tier": 0,      "topRank": 6,      "vstar": 316,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-55dd-6367-a60c-5d9c57bfc2b6",      "name": "AKG⚔||️Legacy🛡",      "rank": "Challenger",      "tier": 0,      "topRank": 7,      "vstar": 311,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-412b-653f-a60c-f59f19fde4e1",      "name": "SUPERSLAYIANZ BDZ",      "rank": "Challenger",      "tier": 0,      "topRank": 8,      "vstar": 311,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-7e53-66b8-a60c-76f371cdaa02",      "name": "Chan | Chosen Ones",      "rank": "Challenger",      "tier": 0,      "topRank": 9,      "vstar": 310,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6e2c-6a4f-a60c-096936a349e8",      "name": "BinsZ | Buoz.gg | I love Aina",      "rank": "Challenger",      "tier": 0,      "topRank": 10,      "vstar": 305,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-47fe-6ace-a60c-bfc5029f8754",      "name": "Hisoka",      "rank": "Challenger",      "tier": 0,      "topRank": 11,      "vstar": 300,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-659a-6db5-a60c-aeb096027882",      "name": "LG.GeckoCutie | Buoz.gg",      "rank": "Challenger",      "tier": 0,      "topRank": 12,      "vstar": 298,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-9dea-6eea-a60c-101205691787",      "name": "jkk89",      "rank": "Challenger",      "tier": 0,      "topRank": 13,      "vstar": 277,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecf05fd-85e9-65cd-b650-66392b28bcea",      "name": "SL",      "rank": "Challenger",      "tier": 0,      "topRank": 14,      "vstar": 270,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-53ce-6d64-a60c-35b0141fa965",      "name": "Heaven",      "rank": "Challenger",      "tier": 0,      "topRank": 15,      "vstar": 270,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-541b-63ac-a60c-3889366bcd2b",      "name": "SirVodka",      "rank": "Challenger",      "tier": 0,      "topRank": 16,      "vstar": 266,      "avatar": "0;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-3e2e-6684-a60c-b61e72bdeee4",      "name": "brGkrauze",      "rank": "Challenger",      "tier": 0,      "topRank": 17,      "vstar": 263,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6e6a-68e2-a60c-955e1a3a8d03",      "name": "Repo | SHA",      "rank": "Challenger",      "tier": 0,      "topRank": 18,      "vstar": 256,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-3cfb-6500-a60c-953d460be702",      "name": "HOOGA |TOP 1=Bloodlust Aoe Bug Abuser(&other TOP polpols)",      "rank": "Challenger",      "tier": 0,      "topRank": 19,      "vstar": 254,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-7b5c-6fb8-a60c-6bea9aae19a1",      "name": "METAT8 | tg",      "rank": "Challenger",      "tier": 0,      "topRank": 20,      "vstar": 253,      "avatar": "0;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-5f16-66bc-a60c-2ee170fbe517",      "name": "METAT8| 1437 @BattleforGiostone",      "rank": "Challenger",      "tier": 0,      "topRank": 21,      "vstar": 250,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-5d0e-622d-a60c-2a19fb1f24c5",      "name": "SPR | Nearly",      "rank": "Challenger",      "tier": 0,      "topRank": 22,      "vstar": 242,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-611e-6e0d-a60c-c3f35309c7af",      "name": "METAT8 | Ryan",      "rank": "Challenger",      "tier": 0,      "topRank": 23,      "vstar": 241,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-51ab-657d-a60c-b77f6f946c82",      "name": "AlphaOmegaX @ YOUTUBE § BDZ",      "rank": "Challenger",      "tier": 0,      "topRank": 24,      "vstar": 239,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecacd69-1c5c-6f35-902d-0dad72bc70ca",      "name": "gnaii | Chosen Ones",      "rank": "Challenger",      "tier": 0,      "topRank": 25,      "vstar": 236,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-369b-645c-a60c-dbdd29e886fc",      "name": "YAMATO",      "rank": "Challenger",      "tier": 0,      "topRank": 26,      "vstar": 234,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-26e7-69e4-a60c-94ba27f7e228",      "name": "Ora-Ora-Ora",      "rank": "Challenger",      "tier": 0,      "topRank": 27,      "vstar": 233,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-4033-61ee-a60c-a60a0ba6fc32",      "name": "YUUUUU | Lev0x | KATSUDON　#666",      "rank": "Challenger",      "tier": 0,      "topRank": 28,      "vstar": 232,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-7dc2-60a8-a60c-5d036152892d",      "name": "Sgt Squirtle | BDZ",      "rank": "Challenger",      "tier": 0,      "topRank": 29,      "vstar": 231,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb77-78ce-6106-a60c-446d97702d21",      "name": "Zeliaser | YGG 🍀",      "rank": "Challenger",      "tier": 0,      "topRank": 30,      "vstar": 231,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-8e15-65ec-a60c-485112a2f1c0",      "name": "Bikutaa",      "rank": "Challenger",      "tier": 0,      "topRank": 31,      "vstar": 231,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-80b7-6825-a60c-9bd23341ecef",      "name": "pengfa1",      "rank": "Challenger",      "tier": 0,      "topRank": 32,      "vstar": 230,      "avatar": "0;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-6e7d-6b11-a60c-a3ca02f388a4",      "name": "siomai | buoz.gg",      "rank": "Challenger",      "tier": 0,      "topRank": 33,      "vstar": 230,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6106-63be-a60c-cfcd056bc520",      "name": "Vlergh | twitch.tv/blerght",      "rank": "Challenger",      "tier": 0,      "topRank": 34,      "vstar": 229,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-61f6-6ba9-a60c-42d6f0c5a898",      "name": "Moonlyght | Lev0x",      "rank": "Challenger",      "tier": 0,      "topRank": 35,      "vstar": 227,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb77-4b91-6b0c-a60c-803a3910d14b",      "name": "YSAM",      "rank": "Challenger",      "tier": 0,      "topRank": 36,      "vstar": 226,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-38b9-684a-a60c-f31d8940c778",      "name": "K || HOK",      "rank": "Challenger",      "tier": 0,      "topRank": 37,      "vstar": 223,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-52bf-66d9-a60c-aec305962818",      "name": "SonLenonidas | CityeSports",      "rank": "Challenger",      "tier": 0,      "topRank": 38,      "vstar": 223,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecfee86-d84f-62b0-98f6-850b5d8ecaaa",      "name": "SURA | KAMISAMA",      "rank": "Challenger",      "tier": 0,      "topRank": 39,      "vstar": 222,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-57a0-62d1-a60c-e90667899dea",      "name": "imcute | Ancient8",      "rank": "Challenger",      "tier": 0,      "topRank": 40,      "vstar": 222,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6e96-6816-a60c-8b03cdd288b4",      "name": "METAT8 | KINGFISHER",      "rank": "Challenger",      "tier": 0,      "topRank": 41,      "vstar": 221,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7b-2956-6814-a60c-a757f2cd4acc",      "name": "turr0",      "rank": "Challenger",      "tier": 0,      "topRank": 42,      "vstar": 220,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecb7b73-91ee-65a9-8117-eec45c961bdf",      "name": "SonNippon | PA Capital",      "rank": "Challenger",      "tier": 0,      "topRank": 43,      "vstar": 219,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-6965-652f-a60c-5569120fea26",      "name": "Ohmychippu",      "rank": "Challenger",      "tier": 0,      "topRank": 44,      "vstar": 219,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-735a-613e-a60c-04ee73d67e67",      "name": "(° = ° )",      "rank": "Challenger",      "tier": 0,      "topRank": 45,      "vstar": 218,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6eaa-630a-a60c-33903f680d59",      "name": "Metaguild.com | Quasar273 | #nerfaoebloodlast",      "rank": "Challenger",      "tier": 0,      "topRank": 46,      "vstar": 218,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-5ca9-67e8-a60c-ba4091b904b8",      "name": "Ndar | YGG",      "rank": "Challenger",      "tier": 0,      "topRank": 47,      "vstar": 218,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-4792-6d17-a60c-2dd4f114c952",      "name": "TEAM MAGINOO",      "rank": "Challenger",      "tier": 0,      "topRank": 48,      "vstar": 217,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-4125-65f6-a60c-0cb1d0ac15f2",      "name": "Mirri - axielegend.com",      "rank": "Challenger",      "tier": 0,      "topRank": 49,      "vstar": 215,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7b-1f6c-641e-a60c-030b0081b1c0",      "name": "ImperatorGrany | Poison",      "rank": "Challenger",      "tier": 0,      "topRank": 50,      "vstar": 214,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-6e9a-6e57-a60c-5f4f9d594187",      "name": "Louie Mila to the moon ",      "rank": "Challenger",      "tier": 0,      "topRank": 51,      "vstar": 214,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-5741-624e-a60c-647c4afcd6a8",      "name": "BLUE|🐷KATSUDON🐷 #8",      "rank": "Challenger",      "tier": 0,      "topRank": 52,      "vstar": 213,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecfde09-3c49-6518-8021-9c9c8487a92f",      "name": "LuigiX#8691 / Looking for sponsor DM me",      "rank": "Challenger",      "tier": 0,      "topRank": 53,      "vstar": 213,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-94dd-6924-a60c-36d09e2b0c84",      "name": "sheesh | BGH_DAO",      "rank": "Challenger",      "tier": 0,      "topRank": 54,      "vstar": 213,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-329b-6a0e-a60c-9fbadd77b5de",      "name": "Shoe",      "rank": "Challenger",      "tier": 0,      "topRank": 55,      "vstar": 213,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-584b-64e7-a60c-1a7e4c269250",      "name": "Dealmaker | Chosen Ones",      "rank": "Challenger",      "tier": 0,      "topRank": 56,      "vstar": 212,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-61d8-691c-a60c-4a6a3410f57d",      "name": "kiyomi",      "rank": "Challenger",      "tier": 0,      "topRank": 57,      "vstar": 211,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-6b5a-6298-a60c-002965284656",      "name": "neirt",      "rank": "Challenger",      "tier": 0,      "topRank": 58,      "vstar": 211,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-9f61-68c3-a60c-7fdfbc853338",      "name": "TRICKZ | Madfam002",      "rank": "Challenger",      "tier": 0,      "topRank": 59,      "vstar": 211,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb77-51a9-612d-a60c-7a06354ee2de",      "name": "joshuahuahu4 | Buoz.gg",      "rank": "Challenger",      "tier": 0,      "topRank": 60,      "vstar": 210,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6ba6-6cfd-a60c-9189fd7a4134",      "name": "KroTez | Chosen Ones | Ohana",      "rank": "Challenger",      "tier": 0,      "topRank": 61,      "vstar": 208,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-5cd2-68ab-a60c-ab8f6f5b982f",      "name": "Ydlog | FSG",      "rank": "Challenger",      "tier": 0,      "topRank": 62,      "vstar": 208,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecba289-3724-6498-8631-f6428d4030b2",      "name": "R! | SPYG",      "rank": "Challenger",      "tier": 0,      "topRank": 63,      "vstar": 207,      "avatar": "0;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecc19a3-bbb8-6d9c-8fae-64a00168e792",      "name": "SURA | RALO",      "rank": "Challenger",      "tier": 0,      "topRank": 64,      "vstar": 207,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-6aeb-66a7-a60c-84ba7caeae00",      "name": "weng na winstreak?",      "rank": "Challenger",      "tier": 0,      "topRank": 65,      "vstar": 204,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1eca8141-d7f6-613e-ac06-6a76a2c1acb9",      "name": "Bonx",      "rank": "Challenger",      "tier": 0,      "topRank": 66,      "vstar": 204,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-662c-6d45-a60c-daf7dce4f986",      "name": "AG | Belerofonte",      "rank": "Challenger",      "tier": 0,      "topRank": 67,      "vstar": 203,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-7e27-6ddd-a60c-ef0e744646ee",      "name": "BESTOKO | Chosen Ones",      "rank": "Challenger",      "tier": 0,      "topRank": 68,      "vstar": 203,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-5ed8-655c-a60c-ec2b3f526a70",      "name": "METAT8 | Xero | JanineOng #1 Fan",      "rank": "Challenger",      "tier": 0,      "topRank": 69,      "vstar": 201,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-472a-6767-a60c-25cdd3d1140c",      "name": "Hiki | SHA",      "rank": "Challenger",      "tier": 0,      "topRank": 70,      "vstar": 200,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-5773-6a8f-a60c-46768ecced81",      "name": "Enaxx",      "rank": "Challenger",      "tier": 0,      "topRank": 71,      "vstar": 200,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-5630-6d76-a60c-4c9dc416bb3a",      "name": "Vous",      "rank": "Challenger",      "tier": 0,      "topRank": 72,      "vstar": 200,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-65bc-6ef9-a60c-efa43fe8572f",      "name": "4LPH4#6042|BR",      "rank": "Challenger",      "tier": 0,      "topRank": 73,      "vstar": 198,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6564-6118-a60c-186356568bfe",      "name": "YouTube/ChuckFresco",      "rank": "Challenger",      "tier": 0,      "topRank": 74,      "vstar": 197,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-73c7-66a4-a60c-51f5c48ef18e",      "name": "AlanHetfield23 🇦🇷",      "rank": "Challenger",      "tier": 0,      "topRank": 75,      "vstar": 197,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-74a9-6ed6-a60c-33093d7d85ec",      "name": "RGAxie | Origin PH",      "rank": "Challenger",      "tier": 0,      "topRank": 76,      "vstar": 197,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-5802-6287-a60c-6039c9caa529",      "name": "shield mode",      "rank": "Challenger",      "tier": 0,      "topRank": 77,      "vstar": 196,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-5b6f-6ab5-a60c-9f335853724d",      "name": "HaymKyut",      "rank": "Challenger",      "tier": 0,      "topRank": 78,      "vstar": 195,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-3a9a-6f7f-a60c-9643ba960815",      "name": "Avocado Shake",      "rank": "Challenger",      "tier": 0,      "topRank": 79,      "vstar": 195,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecc3d8f-d79c-6c85-bf23-93ca967a1ff6",      "name": "MVP | Khairru | Axie.gg | BDZ",      "rank": "Challenger",      "tier": 0,      "topRank": 80,      "vstar": 195,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-9a4b-6793-a60c-e79b3862d707",      "name": "xD // LFG PM me",      "rank": "Challenger",      "tier": 0,      "topRank": 81,      "vstar": 194,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb77-7c4e-6f79-a60c-cb55303930e2",      "name": " Venti | 3lock.gg",      "rank": "Challenger",      "tier": 0,      "topRank": 82,      "vstar": 194,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-9ee4-68bc-a60c-285a09c1756e",      "name": "IHS | Novy",      "rank": "Challenger",      "tier": 0,      "topRank": 83,      "vstar": 194,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-6f6f-6679-a60c-1753c0521219",      "name": "Disi | YGG",      "rank": "Challenger",      "tier": 0,      "topRank": 84,      "vstar": 194,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-3baf-60ec-a60c-1e40cd3c4677",      "name": "Double J",      "rank": "Challenger",      "tier": 0,      "topRank": 85,      "vstar": 194,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-a6f4-644f-a60c-26de4151dd6c",      "name": "xxVila ",      "rank": "Challenger",      "tier": 0,      "topRank": 86,      "vstar": 194,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb77-498e-67d3-a60c-3abb0c131306",      "name": "Twitch.Tv/FranBx7",      "rank": "Challenger",      "tier": 0,      "topRank": 87,      "vstar": 194,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-3cb5-6016-a60c-0c16abbc7e6b",      "name": "Grace^^",      "rank": "Challenger",      "tier": 0,      "topRank": 88,      "vstar": 193,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-83d4-6d63-a60c-214ec75c60ec",      "name": "SoulTree",      "rank": "Challenger",      "tier": 0,      "topRank": 89,      "vstar": 193,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecdcfc7-fe44-6127-abbd-7723e7f54366",      "name": "BUG ABUSERS GET GOOD",      "rank": "Challenger",      "tier": 0,      "topRank": 90,      "vstar": 193,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-5627-60b8-a60c-ccaf69c97429",      "name": "AKG | Insernity🛡| @EmpatiAxie",      "rank": "Challenger",      "tier": 0,      "topRank": 91,      "vstar": 192,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7e-68eb-6c8a-a60c-3855ff164bf1",      "name": "Moon2Mars | KFA",      "rank": "Challenger",      "tier": 0,      "topRank": 92,      "vstar": 191,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-474a-6b6b-a60c-5b95b1c9f8e4",      "name": "Eton TV",      "rank": "Challenger",      "tier": 0,      "topRank": 93,      "vstar": 191,      "avatar": null,      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-ac71-6f15-a60c-a40d94482345",      "name": "Brain",      "rank": "Challenger",      "tier": 0,      "topRank": 94,      "vstar": 190,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ecb1b4a-f534-6092-9fc2-7cb72129a807",      "name": "Kaneyan KATSUDON #30",      "rank": "Challenger",      "tier": 0,      "topRank": 95,      "vstar": 190,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-7aa8-6de9-a60c-40a2d2efae3c",      "name": "Russ",      "rank": "Challenger",      "tier": 0,      "topRank": 96,      "vstar": 190,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb6f-550e-6b25-a60c-a7391a7f65aa",      "name": "zann_zaki🐷KATSUDON🐷#214",      "rank": "Challenger",      "tier": 0,      "topRank": 97,      "vstar": 190,      "avatar": "1;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb73-b15b-6f76-a60c-f5d2e26a6aac",      "name": "de-hi Lev0x 🐷KATSUDON🐷#2",      "rank": "Challenger",      "tier": 0,      "topRank": 98,      "vstar": 190,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb77-6cbf-68c1-a60c-3d17083a4fd6",      "name": "MVP | Cee jay | Origin Ph",      "rank": "Challenger",      "tier": 0,      "topRank": 99,      "vstar": 190,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    },    {      "userID": "1ec9eb7b-4843-6e66-a60c-96206eb313c7",      "name": "Bagybags",      "rank": "Challenger",      "tier": 0,      "topRank": 100,      "vstar": 190,      "avatar": "2;0",      "_etag": "76b0e25027b3fac038fdff727b26a152"    }  ],  "_metadata": {    "limit": 100,    "offset": 0,    "hasNext": true  }}
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
curl -L 'https://api-gateway.skymavis.com/origins/v2/leaderboards' \-H 'Accept: application/json' \-H 'X-API-Key: <API_KEY_VALUE>'
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
