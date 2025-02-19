# Register your app in Ronin Wallet's Trusted Domain System (TDS) | Mavis Docs

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

-   [Ronin Wallet](/ronin/wallet/overview)
    
    -   Tutorials
        
    -   [Connect using injected provider](/ronin/wallet/tutorials/connect-web)
    -   [Connect using Reown](/ronin/wallet/tutorials/connect-mobile)
    -   How to
        
    -   [Install Tanto Connect](/ronin/wallet/guides/install-tanto-connect)
    -   [Get user wallet addresses](/ronin/wallet/guides/get-user-addresses)
    -   [Send a transaction request](/ronin/wallet/guides/request-user-transactions)
    -   [Sign-in with Ronin](/ronin/wallet/guides/sign-in)
    -   [Open URLs with deep links](/ronin/wallet/guides/use-deep-links)
    -   [Register your app in Ronin Wallet](/ronin/wallet/guides/tds)
    -   Reference
        
    -   [TantoKit](https://github.com/skymavis/tanto-kit)

On this page

# Register your app in Ronin Wallet's Trusted Domain System (TDS)

## Overview[​](/ronin/wallet/guides/tds#overview "Direct link to Overview")

The Ronin Wallet's Trusted Domain System (TDS) categorizes apps into various trust levels based on the reputation of their developers. Each level has a corresponding font color and badge that indicates the app's trustworthiness.

For game and dApp developers building on Ronin, registering your app in the TDS is essential to ensure that users can trust your app and interact with it safely. Registered apps are categorized as "Mavis' Friends," which assures users that these apps are safe to use. Unregistered apps may be categorized as "Unknown," which could inadvertently deter users from engaging with them due to perceived security concerns.

## Steps[​](/ronin/wallet/guides/tds#steps "Direct link to Steps")

### Step 1. Understand trust levels[​](/ronin/wallet/guides/tds#step-1-understand-trust-levels "Direct link to Step 1. Understand trust levels")

#### Mavis' dApp[​](/ronin/wallet/guides/tds#mavis-dapp "Direct link to Mavis' dApp")

Projects that are built and deployed by Sky Mavis or Ronin are given a "Mavis' dApp" badge. Users can feel safe interacting with these apps.

![](/assets/images/mavis-56413a7aaaff980aee81dc0ff8a805b2.png)

Examples:

-   [Katana](https://katana.roninchain.com)
-   [Ronin app](https://app.roninchain.com)

#### Mavis' Friends[​](/ronin/wallet/guides/tds#mavis-friends "Direct link to Mavis' Friends")

Projects that are built by business partners of Sky Mavis or Ronin are given a "Mavis' Friend" badge. This is the highest trust level for third-party apps, and the level you get after registering your app in the TDS.

![](/assets/images/mavis-friend-c883b91d70e050aab18f3c99f99d6adb.png)

Examples:

-   [Metalend](https://metalend.tech/)
-   [Ragnarok: Monster World](https://ragmon.gg/)

#### Unverified apps[​](/ronin/wallet/guides/tds#unverified-apps "Direct link to Unverified apps")

Projects that haven't been registered in the TDS are indicated as unverified, using a yellow font and an exclamatory mark. Users are advised to proceed with caution when interacting with these apps.

![](/assets/images/unknown-ef4b2e4f6506cb56e31f2928ba151979.png)

#### Banned apps[​](/ronin/wallet/guides/tds#banned-apps "Direct link to Banned apps")

Projects that are identified as malicious or harmful to users are added to the TDS denylist. These apps are marked with a red font and an exclamation mark. Users can't interact with these apps.

![](/assets/images/known-threat-c11b68232cba3578030677d5e3af15d4.png)

### Step 2. Register your app[​](/ronin/wallet/guides/tds#step-2-register-your-app "Direct link to Step 2. Register your app")

To register your app in the TDS, submit your app's information by opening a pull request in the [Ronin Ecosystem Projects](https://github.com/ronin-chain/ronin-ecosystem-projects) repository. For more information, refer to the repository's README file.

### Step 3. Wait for approval[​](/ronin/wallet/guides/tds#step-3-wait-for-approval "Direct link to Step 3. Wait for approval")

After your submission is approved and processed by the Sky Mavis team, your app will be assigned a "Mavis' Friends" badge in Ronin Wallet.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis