# Get user profile and wallet addresses from Ronin Waypoint | Mavis Docs

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

# Get user profile and wallet addresses from Ronin Waypoint

## Overview[​](/mavis/ronin-waypoint/guides/get-user-profile#overview "Direct link to Overview")

This guide walks you through the steps to retrieve user information and wallet addresses associated with a Ronin Waypoint account by sending a request to the user profile endpoint. Based on the number of wallet addresses associated with the account, you can choose how to handle the wallets in your game.

## Prerequisites[​](/mavis/ronin-waypoint/guides/get-user-profile#prerequisites "Direct link to Prerequisites")

-   An app created in the [Developer Console](https://developers.skymavis.com/console/applications/).
-   Permission to use the Sky Mavis Account service. Request in the Developer Console under **your app > App Permission > Sky Mavis Account (OAuth 2.0) > Request Access**.
-   The unique ID of the Ronin Waypoint account whose information you want to retrieve. You can retrieve this ID from the `sub` claim in the JWT token returned by Ronin Waypoint after authentication.

## Steps[​](/mavis/ronin-waypoint/guides/get-user-profile#steps "Direct link to Steps")

### Step 1. Understand the user's account and wallets[​](/mavis/ronin-waypoint/guides/get-user-profile#step-1-understand-the-users-account-and-wallets "Direct link to Step 1. Understand the user's account and wallets")

The user's Ronin Waypoint account includes the following information:

```
{  "account.wallet.default": "wallet.secondary", // Default wallet set by the user  "account.wallet.identity": "0x123...", // Keyless wallet address  "account.wallet.identity.has_backup": "true", // Whether the keyless wallet is backed up  "account.wallet.secondary": "0x456...", // Optional seed-phrase Ronin Wallet, if linked by the user  "profile.name": "Lunacian" // User's profile name}
```

Key

Description

Use for

`account.wallet.default`

The default wallet for the user's account as set by the user on the [account management](https://accounts.skymavis.com/dashboard/account) page.

Use this wallet as the primary wallet for the user's account.

`account.wallet.identity`

The user's keyless wallet created either through the [waypoint.roninchain.com](https://waypoint.roninchain.com) page, or in the Ronin Wallet mobile app or browser extension.

Treat this wallet as the user's spending account for in-game transactions and purchases, enabling the user to purchase, swap, and mint assets across Ronin games. It also supports actions like collecting daily check-ins and sending tokens or NFTs to other users.

`account.wallet.identity.has_backup`

Indicates if a shard of the keyless wallet is backed up to the Sky Mavis server.

The service will prompt the user to continue the setup process if the wallet isn't backed up.

`account.wallet.secondary`

A seed phrase Ronin Wallet that is present if the user linked it on the [account management](https://accounts.skymavis.com/dashboard/account) page.

Treat this wallet as the user's savings account for staking tokens or NFTs for rewards and governance, and storing valuable assets.

`profile.name`

The user's display name that appears in games such as Axie Infinity.

Use this name to personalize the user experience.

### Step 2. Send the request[​](/mavis/ronin-waypoint/guides/get-user-profile#step-2-send-the-request "Direct link to Step 2. Send the request")

To retrieve user information and wallet addresses, send a GET request to the user profile endpoint with the user ID.

warning

Make sure to send the request *server-side* to protect your API key from being exposed and misused.

Request:

```
curl --location 'https://api-gateway.skymavis.com/account/v2/rpc/get-user-profile/{user_id}' \--header 'X-api-key: {YOUR_API_KEY}' \--header 'X-app-id: {YOUR_APP_ID}'
```

Parameters:

-   `{user_id}`: the user ID of the account you want to retrieve information for. For example, `1eda5fc0-76e1-6de4-8449-b3a0fde29125`.
-   `{YOUR_API_KEY}`: your app's API key from the [Developer Console](https://developers.skymavis.com/console/applications).
-   `{YOUR_APP_ID}`: your app's unique ID from the Developer Console.

Response:

```
{  "account.wallet.default": "wallet.secondary", // Default wallet set by the user  "account.wallet.identity": "0x123...", // Keyless wallet address  "account.wallet.identity.has_backup": "true", // Whether the keyless wallet is backed up  "account.wallet.secondary": "0x456...", // Optional seed-phrase Ronin Wallet, if linked by the user  "profile.name": "Lunacian" // User's profile name}
```

### Step 3. Choose how to handle the wallets[​](/mavis/ronin-waypoint/guides/get-user-profile#step-3-choose-how-to-handle-the-wallets "Direct link to Step 3. Choose how to handle the wallets")

Depending on the number of wallet addresses associated with a Ronin Waypoint account, you can choose one of the following implementations:

-   **One wallet address**: query this wallet for all transactions and authentication needs.
-   **Two wallet addresses**: choose one of the following:
    -   **Query both wallets**: retrieve information from both the `identity` and `secondary` wallets.
    -   **Pick only one wallet**: prioritize the `identity` wallet over the `secondary` wallet.
    -   **Let the user choose which wallet to use**: provide an interface allowing the user to select which wallet to use.

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