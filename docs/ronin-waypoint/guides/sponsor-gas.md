# Use gas sponsorship | Mavis Docs

!function(){function t(t){document.documentElement.setAttribute("data-theme",t)}var e=function(){try{return new URLSearchParams(window.location.search).get("docusaurus-theme")}catch(t){}}()||function(){try{return window.localStorage.getItem("theme")}catch(t){}}();null!==e?t(e):window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,t("light"))}(),function(){try{const n=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of n)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}(),document.documentElement.setAttribute("data-announcement-bar-initially-dismissed",function(){try{return"true"===localStorage.getItem("docusaurus.announcement.dismiss")}catch(t){}return!1}())

((e,r,s,u,d,m,l,h)=>{let c=document.documentElement,v=\["light","dark"\];function p(i){(Array.isArray(e)?e:\[e\]).forEach(y=>{let k=y==="class",S=k&&m?d.map(f=>m\[f\]||f):d;k?(c.classList.remove(...S),c.classList.add(i)):c.setAttribute(y,i)}),R(i)}function R(i){h&&v.includes(i)&&(c.style.colorScheme=i)}function a(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let i=localStorage.getItem(r)||s,y=l&&i==="system"?a():i;p(y)}catch(i){}})("class","theme","system",null,\["light","dark"\],null,true,true)

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

# Use gas sponsorship

## Overview[​](/mavis/ronin-waypoint/guides/sponsor-gas#overview "Direct link to Overview")

This guides walks you through the process of implementing gas sponsorship using Ronin Waypoint. The process involves allowlisting your game's smart contract, obtaining a payer wallet from Sky Mavis, and sending transactions using the Ronin Waypoint SDK.

### How gas sponsorship works[​](/mavis/ronin-waypoint/guides/sponsor-gas#how-gas-sponsorship-works "Direct link to How gas sponsorship works")

Sky Mavis supports two types of gas sponsorship programs: *global gas sponsorship* and *local studio gas sponsorship*. The global gas sponsorship program is funded by Sky Mavis, while the local studio gas sponsorship program is funded by the studio and Sky Mavis in a joint effort.

#### Global gas sponsorship[​](/mavis/ronin-waypoint/guides/sponsor-gas#global-gas-sponsorship "Direct link to Global gas sponsorship")

-   Each new Ronin Waypoint user is eligible for a number free gas transactions. A new user is defined as a user who registers Ronin Waypoint service from the date defined by Sky Mavis.
-   The five free gas transactions can be used in all games/dApps that integrated and use Ronin Waypoint.
-   The funds for global gas sponsorship are provided by Sky Mavis.
-   The rules, eligibility criteria, and expiration date of the global gas sponsorship program are determined by Sky Mavis.
-   The payer wallet and the private key are controlled by Sky Mavis.

#### Local studio gas sponsorship[​](/mavis/ronin-waypoint/guides/sponsor-gas#local-studio-gas-sponsorship "Direct link to Local studio gas sponsorship")

-   The funds are jointly provided by Sky Mavis and the studio. For example, Sky Mavis provides 50% of the funds, and the studio provides the other 50%. Or the studio can sponsor 100% of the funds.
-   The program applies to all the users who interact with the allowlisted smart contract address and specific functions in the game.
-   The rules, eligibility criteria, and expiration date of the local gas sponsorship program are determined by the studio, using a template provided by Sky Mavis.
-   The payer wallet and the private key are controlled either by Sky Mavis or the studio, subject to the agreement between the two parties.

#### Gas sponsorship priority[​](/mavis/ronin-waypoint/guides/sponsor-gas#gas-sponsorship-priority "Direct link to Gas sponsorship priority")

When a user submits a transaction, Ronin Waypoint checks the user's eligibility for gas sponsorship. The priority of check is as follows:

1.  Local studio gas sponsorship. The system checks whether the user meets the eligibility criteria defined by the studio, and if yes, automatically applies the gas discount. **Note:** if the payer wallet balance is less than 0.02 RON, the system switches to global gas sponsorship.
    
2.  Global gas sponsorship. The system checks whether the user is eligible for global gas sponsorship based on the following criteria:
    
    -   Age of the user account
    -   Remaining free gas transactions
    
    If the user meets the criteria, the system automatically applies the gas discount.
    
3.  No gas sponsorship. If the user does not meet the criteria for local or global gas sponsorship, the system does not apply any gas discount and the user must bear the gas fees.
    

## Prerequisites[​](/mavis/ronin-waypoint/guides/sponsor-gas#prerequisites "Direct link to Prerequisites")

Have a smart contract that you want to sponsor gas for deployed to Ronin. For more information, see [Deploy a smart contract](https://docs.roninchain.com/developers/smart-contracts/deploy).

## Steps[​](/mavis/ronin-waypoint/guides/sponsor-gas#steps "Direct link to Steps")

### Step 1. Apply for gas sponsorship[​](/mavis/ronin-waypoint/guides/sponsor-gas#step-1-apply-for-gas-sponsorship "Direct link to Step 1. Apply for gas sponsorship")

1.  Contact your Sky Mavis point of contact to apply for the "Local studio gas sponsorship" program.
    
2.  Using the provided template, provide the following information:
    
    -   The number of free gas transactions you want to sponsor.
    -   The contract address.
    -   The contract function names that you want to sponsor.
    -   The start and end date for the sponsorship.
3.  Submit the provided template to Sky Mavis so that we can enable gas sponsorship for your smart contract in the system.
    
4.  Depending on the agreement, Sky Mavis will either provide you with a payer wallet, or you will use your own wallet to sponsor gas.
    

### Step 2. Send transactions using the Ronin Waypoint SDK[​](/mavis/ronin-waypoint/guides/sponsor-gas#step-2-send-transactions-using-the-ronin-waypoint-sdk "Direct link to Step 2. Send transactions using the Ronin Waypoint SDK")

1.  Using the Ronin Waypoint SDK, implement transaction functions to send transactions to your allowlisted smart contract.
    
2.  When a user initiates a transaction to this contract, Ronin Waypoint automatically applies the gas voucher.
    
    ![](/assets/images/sponsored-transaction-05d2874f91ed46e4bda944d439356b01.png)

Refer to a video demonstration of transaction signing and subsequent view of the transaction in the explorer.

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