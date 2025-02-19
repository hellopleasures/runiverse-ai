# Ronin Wallet | Mavis Docs

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

# Ronin Wallet

## Overview[​](/ronin/wallet/overview#overview "Direct link to Overview")

[Ronin Wallet](https://wallet.roninchain.com) is a non-custodial blockchain wallet for managing digital assets and accessing decentralized apps (dApps) on the Ronin chain.

![](/assets/images/ronin-wallet-image-53b028c8dacb924b96f488edda46bfd6.png)

The wallet is available as a mobile app and a browser extension:

-   Mobile app: [Google Play Store](https://play.google.com/store/apps/details?id=com.skymavis.genesis&hl=vi&gl=US), [Apple App Store](https://apps.apple.com/us/app/ronin-wallet/id1592675001).
-   Browser extension: [Chrome Web Store](https://chrome.google.com/webstore/detail/ronin-wallet/fnjhmkhhmkbjkkabndcnnogagogbneec), [Add-ons for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ronin-wallet/).

## Connect your app to Ronin Wallet[​](/ronin/wallet/overview#connect-your-app-to-ronin-wallet "Direct link to Connect your app to Ronin Wallet")

By connecting your app to Ronin Wallet, you can read users' addresses and have them sign transactions and messages. Ronin Wallet integrates with your app in the following ways:

-   **Web apps**: when a Ronin Wallet user visits a website, Ronin Wallet injects a Ronin provider into the browser (compatible with Web3 standards).
-   **Mobile apps**: Ronin Wallet integrates with mobile apps using deep linking and the [Reown](https://reown.com/) communication protocol to enable secure and seamless interactions.

## Next steps[​](/ronin/wallet/overview#next-steps "Direct link to Next steps")

-   [Connect using injected provider](/ronin/wallet/tutorials/connect-web)
-   [Connect using Reown](/ronin/wallet/tutorials/connect-mobile)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis