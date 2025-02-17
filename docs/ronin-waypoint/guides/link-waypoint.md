# Link Ronin Waypoint to your existing account service | Mavis Docs

!function(){function t(t){document.documentElement.setAttribute("data-theme",t)}var e=function(){try{return new URLSearchParams(window.location.search).get("docusaurus-theme")}catch(t){}}()||function(){try{return window.localStorage.getItem("theme")}catch(t){}}();null!==e?t(e):window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,t("light"))}(),function(){try{const n=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of n)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}(),document.documentElement.setAttribute("data-announcement-bar-initially-dismissed",function(){try{return"true"===localStorage.getItem("docusaurus.announcement.dismiss")}catch(t){}return!1}())

((e,t,s,c,a,l,r,o)=>{let i=document.documentElement,m=\["light","dark"\];function d(t){(Array.isArray(e)?e:\[e\]).forEach((e=>{let s="class"===e,c=a;s?(i.classList.remove(...c),i.classList.add(t)):i.setAttribute(e,t)})),function(e){o&&m.includes(e)&&(i.style.colorScheme=e)}(t)}try{let e=localStorage.getItem("theme")||"system";d("system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e)}catch(e){}})("class",0,0,0,\["light","dark"\],0,0,!0)

[Skip to main content](#__docusaurus_skipToContent_fallback)

Skynet services (RPC/WebSocket/Webhooks/Web3 API) will be deprecated by the end of Q1 2025 as part of Ronin's transition to a permissionless ecosystem. [Learn more](/deprecation-notice).

[

![Sky Mavis logo](/img/logo-dark.png)

](/)[Docs](/)[API](/api)[Blog](/blog)[Showcase](/showcase)

[Developer Console](https://developers.skymavis.com/console/applications/)

Search⌘K

[

![Sky Mavis logo](/img/logo-dark.png)

](/)

-   [Docs](/)
-   [API](/api)
-   [Blog](/blog)
-   [Showcase](/showcase)
-   [Developer Console](https://developers.skymavis.com/console/applications/)

← Back to main menu

-   [Ronin Waypoint](/mavis/ronin-waypoint/overview)
    
    -   [Try it out](/mavis/ronin-waypoint/try-it-out)
    -   [Set up and configure](/mavis/ronin-waypoint/guides/get-started)
    -   [Get user profile](/mavis/ronin-waypoint/guides/get-user-profile)
    -   [Verify user identity](/mavis/ronin-waypoint/guides/validate-token)
    -   [Link to account services](/mavis/ronin-waypoint/guides/link-waypoint)
    -   [Use gas sponsorship](/mavis/ronin-waypoint/guides/sponsor-gas)
    -   SDKs
        
    -   [Unity SDK](/mavis/ronin-waypoint/reference/unity-sdk/)
        
    -   [Web SDKs](/mavis/ronin-waypoint/reference/web-sdk)
        
    -   [Android SDK](/mavis/ronin-waypoint/reference/android-sdk)
    -   [iOS SDK](/mavis/ronin-waypoint/reference/ios-sdk)
    -   [React Native SDK](/mavis/ronin-waypoint/reference/react-native-sdk)
    -   [Utilities SDKs](/mavis/ronin-waypoint/reference/utils-sdk)
        
    -   Resources
        
    -   [UI guidelines](/mavis/ronin-waypoint/reference/ui-guidelines)
    -   [Glossary](/mavis/ronin-waypoint/reference/glossary)
    -   [Showcases](/mavis/ronin-waypoint/reference/showcases)
    -   [FAQ](/mavis/ronin-waypoint/reference/faq)
    -   [Troubleshooting](/mavis/ronin-waypoint/reference/troubleshooting)
    -   Advanced integrations
        
    -   [Sky Mavis Account](/mavis/mavis-account/overview)
        

On this page

# Link Ronin Waypoint to your existing account service

## Overview[​](/mavis/ronin-waypoint/guides/link-waypoint#overview "Direct link to Overview")

If your game already has an account system, there are two ways you can link Ronin Waypoint to it: as a wallet provider or as an identity provider (IdP). This guide walks you through the steps for implementing both methods.

### Use cases[​](/mavis/ronin-waypoint/guides/link-waypoint#use-cases "Direct link to Use cases")

Method

Use case

**Wallet provider**

Treat Ronin Waypoint as only a payment method for in-game purchases. Your game can use the keyless wallet without having to go through the Sky Mavis Account authorization to make Web3 transactions.

**Identity provider**

Link the Ronin Waypoint user ID to your existing account system. Your game can use Ronin Waypoint as another identity provider for the existing system.

## Use Ronin Waypoint as a wallet provider[​](/mavis/ronin-waypoint/guides/link-waypoint#use-ronin-waypoint-as-a-wallet-provider "Direct link to Use Ronin Waypoint as a wallet provider")

This section guides you through linking a user's wallet address to their account in your system.

### Process flow[​](/mavis/ronin-waypoint/guides/link-waypoint#process-flow "Direct link to Process flow")

#mermaid-svg-3383908{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}#mermaid-svg-3383908 .error-icon{fill:#a44141;}#mermaid-svg-3383908 .error-text{fill:#ddd;stroke:#ddd;}#mermaid-svg-3383908 .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-3383908 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-3383908 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-3383908 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-3383908 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-3383908 .marker{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-3383908 .marker.cross{stroke:lightgrey;}#mermaid-svg-3383908 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-3383908 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#ccc;}#mermaid-svg-3383908 .cluster-label text{fill:#F9FFFE;}#mermaid-svg-3383908 .cluster-label span,#mermaid-svg-3383908 p{color:#F9FFFE;}#mermaid-svg-3383908 .label text,#mermaid-svg-3383908 span,#mermaid-svg-3383908 p{fill:#ccc;color:#ccc;}#mermaid-svg-3383908 .node rect,#mermaid-svg-3383908 .node circle,#mermaid-svg-3383908 .node ellipse,#mermaid-svg-3383908 .node polygon,#mermaid-svg-3383908 .node path{fill:#1f2020;stroke:#81B1DB;stroke-width:1px;}#mermaid-svg-3383908 .flowchart-label text{text-anchor:middle;}#mermaid-svg-3383908 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-svg-3383908 .node .label{text-align:center;}#mermaid-svg-3383908 .node.clickable{cursor:pointer;}#mermaid-svg-3383908 .arrowheadPath{fill:lightgrey;}#mermaid-svg-3383908 .edgePath .path{stroke:lightgrey;stroke-width:2.0px;}#mermaid-svg-3383908 .flowchart-link{stroke:lightgrey;fill:none;}#mermaid-svg-3383908 .edgeLabel{background-color:hsl(0, 0%, 34.4117647059%);text-align:center;}#mermaid-svg-3383908 .edgeLabel rect{opacity:0.5;background-color:hsl(0, 0%, 34.4117647059%);fill:hsl(0, 0%, 34.4117647059%);}#mermaid-svg-3383908 .labelBkg{background-color:rgba(87.75, 87.75, 87.75, 0.5);}#mermaid-svg-3383908 .cluster rect{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:rgba(255, 255, 255, 0.25);stroke-width:1px;}#mermaid-svg-3383908 .cluster text{fill:#F9FFFE;}#mermaid-svg-3383908 .cluster span,#mermaid-svg-3383908 p{color:#F9FFFE;}#mermaid-svg-3383908 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(20, 1.5873015873%, 12.3529411765%);border:1px solid rgba(255, 255, 255, 0.25);border-radius:2px;pointer-events:none;z-index:100;}#mermaid-svg-3383908 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#ccc;}#mermaid-svg-3383908 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}

Authorize user with Ronin Waypoint

Submit ID token to server with user credentials

Verify ID token

Fetch user wallets from Sky Mavis

Add to user wallets in database

### Implementation steps[​](/mavis/ronin-waypoint/guides/link-waypoint#implementation-steps "Direct link to Implementation steps")

Example database schema

Here's an example of how you might structure your database to store user wallets:

```
create users (  id text primary key,  email text,  created_at timestamp,  updated_at timestamp)create user_wallets (  id text primary key,  user_id int references users(id),  address string,  kind string)
```

In this example, `id` is a text field, but in practice, it can be an integer, UUID, or any other unique identifier.

Example data fixture

Here's an example of what the user data might look like in JSON format:

```
users = [  {    "id": "user-1",    "email": "a@gmail.com",    "created_at": "2024-08-30 12:00",    "updated_at": "2024-08-30 12:00",    "wallets": [      {        "id": "user-1-wallet-1",        "address": "0xaaa...",        "kind": "ronin"      },      {        "id": "user-1-wallet-2",        "address": "0xbbb...",        "kind": "keyless"      }    ]  },  {    "id": "user-2",    "email": "b@gmail.com",    "created_at": "2024-08-30 12:00",    "updated_at": "2024-08-30 12:00",    "wallets": [      {        "id": "user-2-wallet-1",        "address": "0xccc...",        "kind": "ronin"      }    ]  },]
```

Let's link `user-2`'s keyless wallet to their account in your system. Follow these steps:

1.  **Authorize the user**: use Ronin Waypoint to authorize the user and receive an ID token. For more information, see [Ronin Waypoint Unity SDK](/mavis/ronin-waypoint/reference/unity-sdk/0.4.0#user-authorization).
    
2.  **Submit ID token**: have the user send this token to your backend server with their own credentials (such as their access token). For example:
    
    ```
    curl -X POST https://account.example.com/users/link-to-waypoint-wallet \  -H 'Authorization: Bearer {user_access_token}' \  --data-binary @- << EOF{    "id_token": "{ronin_waypoint_id_token}"}EOF
    ```
    
3.  **Verify ID token**: on your server, verify the ID token submitted by the user. For more information, see [Validate ID token](/mavis/ronin-waypoint/guides/validate-token).
    
4.  **Update the database**: take the wallet address associated with this user (through the UUID in the `sub` field in the ID token) and update the user's wallet in your database.
    
    -   `account.wallet.identity`: the keyless wallet address bound to the user's identity. This wallet address is *immutable* and can't be changed by the user.
    -   `account.wallet.secondary`: the EOA wallet address linked by the user on the [account management](https://accounts.skymavis.com/dashboard/account) page. This address *can be changed* by the user, so plan your implementation accordingly.
    
    For more details on handling these two wallet types, see [Get user profile](/mavis/ronin-waypoint/guides/get-user-profile).
    
5.  **Append user's wallet address**: add the wallet address to the list of wallets associated with this user in your database:
    
    ```
    // Example JSON array for demonstration// Not a valid SQL queryusers[2].wallets.append({  "id": "user-2-wallet-2",  "kind": "keyless",  "address": "{account.wallet.identity}"})users[2].wallets.append({  "id": "user-2-wallet-3",  "kind": "ronin",  "address": "{account.wallet.secondary}"})
    ```
    

## Use Ronin Waypoint as an identity provider[​](/mavis/ronin-waypoint/guides/link-waypoint#use-ronin-waypoint-as-an-identity-provider "Direct link to Use Ronin Waypoint as an identity provider")

This section explains how to link the user ID associated with the user's Ronin Waypoint account to their existing account in your system.

### Process flow[​](/mavis/ronin-waypoint/guides/link-waypoint#process-flow-1 "Direct link to Process flow")

#mermaid-svg-859296{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}#mermaid-svg-859296 .error-icon{fill:#a44141;}#mermaid-svg-859296 .error-text{fill:#ddd;stroke:#ddd;}#mermaid-svg-859296 .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-859296 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-859296 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-859296 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-859296 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-859296 .marker{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-859296 .marker.cross{stroke:lightgrey;}#mermaid-svg-859296 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-859296 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#ccc;}#mermaid-svg-859296 .cluster-label text{fill:#F9FFFE;}#mermaid-svg-859296 .cluster-label span,#mermaid-svg-859296 p{color:#F9FFFE;}#mermaid-svg-859296 .label text,#mermaid-svg-859296 span,#mermaid-svg-859296 p{fill:#ccc;color:#ccc;}#mermaid-svg-859296 .node rect,#mermaid-svg-859296 .node circle,#mermaid-svg-859296 .node ellipse,#mermaid-svg-859296 .node polygon,#mermaid-svg-859296 .node path{fill:#1f2020;stroke:#81B1DB;stroke-width:1px;}#mermaid-svg-859296 .flowchart-label text{text-anchor:middle;}#mermaid-svg-859296 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-svg-859296 .node .label{text-align:center;}#mermaid-svg-859296 .node.clickable{cursor:pointer;}#mermaid-svg-859296 .arrowheadPath{fill:lightgrey;}#mermaid-svg-859296 .edgePath .path{stroke:lightgrey;stroke-width:2.0px;}#mermaid-svg-859296 .flowchart-link{stroke:lightgrey;fill:none;}#mermaid-svg-859296 .edgeLabel{background-color:hsl(0, 0%, 34.4117647059%);text-align:center;}#mermaid-svg-859296 .edgeLabel rect{opacity:0.5;background-color:hsl(0, 0%, 34.4117647059%);fill:hsl(0, 0%, 34.4117647059%);}#mermaid-svg-859296 .labelBkg{background-color:rgba(87.75, 87.75, 87.75, 0.5);}#mermaid-svg-859296 .cluster rect{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:rgba(255, 255, 255, 0.25);stroke-width:1px;}#mermaid-svg-859296 .cluster text{fill:#F9FFFE;}#mermaid-svg-859296 .cluster span,#mermaid-svg-859296 p{color:#F9FFFE;}#mermaid-svg-859296 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(20, 1.5873015873%, 12.3529411765%);border:1px solid rgba(255, 255, 255, 0.25);border-radius:2px;pointer-events:none;z-index:100;}#mermaid-svg-859296 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#ccc;}#mermaid-svg-859296 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}

Authorize user with Ronin Waypoint

Submit ID token to server with user credentials

Verify ID token

Add to user accounts in database

Access wallet information

### Implementation steps[​](/mavis/ronin-waypoint/guides/link-waypoint#implementation-steps-1 "Direct link to Implementation steps")

Example database schema

Here's an example of how you might structure your database to store user accounts:

```
create users (  id text primary key,  email text,  created_at timestamp,  updated_at timestamp)create accounts (  id text,  user_id text references users(id),  provider string,  kind string,  primary key(id, provider))
```

In this example, `id` is a text field, but in practice, it can be an integer, UUID, or any other unique identifier.

Example data fixture

Here's an example of what the user data might look like in JSON format:

```
users = [  {    "id": "user-1",    "email": "a@gmail.com",    "created_at": "2024-08-30 12:00",    "updated_at": "2024-08-30 12:00",    "accounts": [      {        "id": "123",        "provider": "google",        "kind": "social"      },      {        "id": "0xaaa...",        "provider": "metamask",        "kind": "wallet"      }    ]  },  {    "id": "user-2",    "email": "b@gmail.com",    "created_at": "2024-08-30 12:00",    "updated_at": "2024-08-30 12:00",    "accounts": [      {        "id": "456",        "address": "google",        "kind": "social"      }    ]  },]
```

Let's link the user ID of the Ronin Waypoint account `user-2` to their account in your system. Follow these steps:

1.  **Authorize the user**: use Ronin Waypoint to authorize the user and receive an ID token. For more information, see [Ronin Waypoint Unity SDK](/mavis/ronin-waypoint/reference/unity-sdk/0.4.0#user-authorization).
    
2.  **Submit ID token**: have the user submit the ID token to your backend server with their own credentials (such as their access token). For example:
    
    ```
    curl -X POST https://account.example.com/users/link-to-waypoint-account \  -H 'Authorization: Bearer {user_access_token}' \  --data-binary @- << EOF{    "id_token": "{ronin_waypoint_id_token}"}EOF
    ```
    
3.  **Verify ID token**: on your server, verify the ID token submitted by the user. For more information, see [Validate ID token](/mavis/ronin-waypoint/guides/validate-token).
    
4.  **Update the database and append the account**: take the UUID (`sub` in the ID token) and append the value to the list of accounts associated with this user in your database:
    
    ```
    // Example JSON array for demonstration// Not a valid SQL queryusers[2].accounts.append({  "id": "{sub in the ID token}",  "provider": "waypoint",  "kind": "social",})
    ```
    
5.  **Access wallet information**: to access the user's wallets, follow the steps in [Get user profile](/mavis/ronin-waypoint/guides/get-user-profile).
    

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis