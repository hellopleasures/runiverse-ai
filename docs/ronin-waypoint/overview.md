# Ronin Waypoint | Mavis Docs

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

# Ronin Waypoint

## Overview[​](/mavis/ronin-waypoint/overview#overview "Direct link to Overview")

Ronin Waypoint is a service that lets you onboard both Web2 and Web3 users to your game. It includes the following components:

-   Account: a single sign-on authentication experience offering familiar social login options or email and password registration.
-   Wallet: a non-custodial wallet accessible on all devices, without the need to manage private keys.

![](/assets/images/banner-f65f4e43d20d82eb72c6cccfcd06e578.png)

## Features[​](/mavis/ronin-waypoint/overview#features "Direct link to Features")

-   **Instant player onboarding**: maximize user conversion with 3-Click wallet creation and registration options including email and social login through Facebook, Google and Apple.
-   **Seamless transactions and account recovery**: offer simple verification methods like PIN and OTP, and facilitate a player's first on-chain transaction, in-game.
-   **Strengthened security**: safeguard players from scams and phishing attacks with MPC technology.
-   **Gas sponsoring**: reduce friction and introduce gas-free gaming experiences to players.
-   **Player behavioral analytics**: monitor performance and gain insights into your players, helping you optimize rewards and create engaging gameplay experiences (coming soon).
-   **In-game marketplaces**: integrate marketplace features and drive monetization of on-chain transactions in-game (coming soon).

Try it out

Experience Ronin Waypoint in the [Ronin Waypoint playground](https://waypoint-playground.vercel.app/). After creating a keyless wallet, fund it with testnet RON tokens from the [Ronin Faucet](https://faucet.roninchain.com).

## Showcases[​](/mavis/ronin-waypoint/overview#showcases "Direct link to Showcases")

See the games that have integrated Ronin Waypoint to provide a seamless user experience, such as [Axie Classic](/mavis/ronin-waypoint/reference/showcases).

## Ways to integrate[​](/mavis/ronin-waypoint/overview#ways-to-integrate "Direct link to Ways to integrate")

Ronin Waypoint is available in two integration options: *Standard* and *Hybrid*. The following table provides a comparison of the two options:

Category

Standard integration

Hybrid integration

Overview

Simplifies integration with account service and wallet interface for managing transaction details, recipient info, smart contracts, and sponsored gas vouchers.

Provides raw SDKs for wallet interactions (message signing and transaction sending) so a game or dApp can handle transactions without confirmation pop-ups.

Supported platforms

Unity, Android, iOS, Web, React Native

Web

Integration effort and complexity

Simpler integration, requires less effort thanks to the default Ronin Waypoint UI, and complex wallet creation, backup, security being pre-handled.

Require medium effort: first, integration with the standard Ronin Waypoint SDK to create Ronin Waypoint account and keyless wallet. Then, using the Headless Waypoint SDK to handle wallet interactions, with your own UI.

Use cases

Games with infrequent transactions, where browser pop-ups during transactions are an acceptable user experience.

Games with frequent, complex transactions and context switching, where continuous pop-ups are disruptive to the user experience.

UI and flow

Default UI and flow provided by Ronin Waypoint SDK.

Customized UI and flow, hidden Web3 interactions in the background.

Ideal for

Small to medium partners, lacking resources and solid Web3 knowledge, who are looking a quick, ready-made, low-effort integration.

Medium to large partners, with resources and solid Web3 knowledge.

## Available SDKs[​](/mavis/ronin-waypoint/overview#available-sdks "Direct link to Available SDKs")

Integration option

Browser game

Unity

Android apps

iOS apps

Standard Ronin Waypoint integration

[Ronin Waypoint Web SDK](/mavis/ronin-waypoint/reference/web-sdk/web-standard)

[Ronin Waypoint Unity SDK](/mavis/ronin-waypoint/reference/unity-sdk/)

[Ronin Waypoint Android SDK](/mavis/ronin-waypoint/reference/android-sdk) or [Ronin Waypoint React Native SDK](/mavis/ronin-waypoint/reference/react-native-sdk)

[Ronin Waypoint iOS SDK](/mavis/ronin-waypoint/reference/ios-sdk) or [Ronin Waypoint React Native SDK](/mavis/ronin-waypoint/reference/react-native-sdk)

## Next steps[​](/mavis/ronin-waypoint/overview#next-steps "Direct link to Next steps")

[Set up and configure Ronin Waypoint](/mavis/ronin-waypoint/guides/get-started)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis