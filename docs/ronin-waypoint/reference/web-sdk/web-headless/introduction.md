# Introduction | Mavis Docs

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
        
        -   [Web Standard](/mavis/ronin-waypoint/reference/web-sdk/web-standard)
        -   [Web Headless](/mavis/ronin-waypoint/reference/web-sdk/web-headless)
            
            -   [Introduction](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction)
            -   [Delegate permissions](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation)
            -   [HeadlessClient](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect)
            -   [Example Code](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example)
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

# Introduction

## Overview[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction#overview "Direct link to Overview")

Once users grant their wallet permissions to the dapp, the `@sky-mavis/waypoint/headless` package enables the dapp to reconstruct the user's wallet provider. This provider is compatible with the [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) standard, allowing direct interaction with the user's keyless wallet without requiring user confirmation.

info

Due to *security risks* and *the less complex implementation*, user authorization and wallet creation must be managed by the **Ronin Waypoint**. This way, **Ronin Waypoint** can ensure the security of the user's wallet and assets while minimizing any negative impact on the user experience within the dapp.

## Prerequisites[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction#prerequisites "Direct link to Prerequisites")

Permission to use the Sky Mavis Account service. For more information, see [Setup and configuration](/mavis/ronin-waypoint/guides/get-started#steps).

## Installation[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction#installation "Direct link to Installation")

To install the SDK, use the following command:

-   npm
-   Yarn
-   pnpm

```
npm install @sky-mavis/waypoint
```

```
yarn add @sky-mavis/waypoint
```

```
pnpm add @sky-mavis/waypoint
```

## How it works[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction#how-it-works "Direct link to How it works")

-   **[Delegate wallet permissions](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation)**: The user delegates their wallet permissions to the dapp using the **Ronin Waypoint**.

Ronin WaypointWaypoint SDKApplicationRonin WaypointWaypoint SDKApplication#mermaid-svg-7907778{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}#mermaid-svg-7907778 .error-icon{fill:#a44141;}#mermaid-svg-7907778 .error-text{fill:#ddd;stroke:#ddd;}#mermaid-svg-7907778 .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-7907778 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-7907778 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-7907778 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-7907778 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-7907778 .marker{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-7907778 .marker.cross{stroke:lightgrey;}#mermaid-svg-7907778 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-7907778 .actor{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-7907778 text.actor>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-7907778 .actor-line{stroke:lightgrey;}#mermaid-svg-7907778 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:lightgrey;}#mermaid-svg-7907778 .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:lightgrey;}#mermaid-svg-7907778 #arrowhead path{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-7907778 .sequenceNumber{fill:black;}#mermaid-svg-7907778 #sequencenumber{fill:lightgrey;}#mermaid-svg-7907778 #crosshead path{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-7907778 .messageText{fill:lightgrey;stroke:none;}#mermaid-svg-7907778 .labelBox{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-7907778 .labelText,#mermaid-svg-7907778 .labelText>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-7907778 .loopText,#mermaid-svg-7907778 .loopText>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-7907778 .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:#81B1DB;fill:#81B1DB;}#mermaid-svg-7907778 .note{stroke:hsl(180, 0%, 18.3529411765%);fill:hsl(180, 1.5873015873%, 28.3529411765%);}#mermaid-svg-7907778 .noteText,#mermaid-svg-7907778 .noteText>tspan{fill:rgb(183.8476190475, 181.5523809523, 181.5523809523);stroke:none;}#mermaid-svg-7907778 .activation0{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-7907778 .activation1{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-7907778 .activation2{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-7907778 .actorPopupMenu{position:absolute;}#mermaid-svg-7907778 .actorPopupMenuPanel{position:absolute;fill:#1f2020;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));}#mermaid-svg-7907778 .actor-man line{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-7907778 .actor-man circle,#mermaid-svg-7907778 line{stroke:#81B1DB;fill:#1f2020;stroke-width:2px;}#mermaid-svg-7907778 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}1\. Request to delegate wallet permissions1.1 Generate asymmetric pair key1.2 Delegate authorization request with public key and wallet scope1.3 Confirm recovery password1.4 Encrypt shard A with public key1.5 Return encrypted shard A and Waypoint token1.6 Decrypt shard A with private key1.7 Return shard A and Waypoint token

-   **[Connect and interact to the keyless wallet](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect)**: The dapp connect and interact to the user's keyless wallet provider directly to send transactions, sign messages, and more.

Keyless ServiceWaypoint SDKApplicationKeyless ServiceWaypoint SDKApplication#mermaid-svg-6841458{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}#mermaid-svg-6841458 .error-icon{fill:#a44141;}#mermaid-svg-6841458 .error-text{fill:#ddd;stroke:#ddd;}#mermaid-svg-6841458 .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-6841458 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-6841458 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-6841458 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-6841458 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-6841458 .marker{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-6841458 .marker.cross{stroke:lightgrey;}#mermaid-svg-6841458 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-6841458 .actor{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-6841458 text.actor>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-6841458 .actor-line{stroke:lightgrey;}#mermaid-svg-6841458 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:lightgrey;}#mermaid-svg-6841458 .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:lightgrey;}#mermaid-svg-6841458 #arrowhead path{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-6841458 .sequenceNumber{fill:black;}#mermaid-svg-6841458 #sequencenumber{fill:lightgrey;}#mermaid-svg-6841458 #crosshead path{fill:lightgrey;stroke:lightgrey;}#mermaid-svg-6841458 .messageText{fill:lightgrey;stroke:none;}#mermaid-svg-6841458 .labelBox{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-6841458 .labelText,#mermaid-svg-6841458 .labelText>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-6841458 .loopText,#mermaid-svg-6841458 .loopText>tspan{fill:lightgrey;stroke:none;}#mermaid-svg-6841458 .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:#81B1DB;fill:#81B1DB;}#mermaid-svg-6841458 .note{stroke:hsl(180, 0%, 18.3529411765%);fill:hsl(180, 1.5873015873%, 28.3529411765%);}#mermaid-svg-6841458 .noteText,#mermaid-svg-6841458 .noteText>tspan{fill:rgb(183.8476190475, 181.5523809523, 181.5523809523);stroke:none;}#mermaid-svg-6841458 .activation0{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-6841458 .activation1{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-6841458 .activation2{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:#81B1DB;}#mermaid-svg-6841458 .actorPopupMenu{position:absolute;}#mermaid-svg-6841458 .actorPopupMenuPanel{position:absolute;fill:#1f2020;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));}#mermaid-svg-6841458 .actor-man line{stroke:#81B1DB;fill:#1f2020;}#mermaid-svg-6841458 .actor-man circle,#mermaid-svg-6841458 line{stroke:#81B1DB;fill:#1f2020;stroke-width:2px;}#mermaid-svg-6841458 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}loop​2\. Request to connect to keyless wallet with Waypoint token and shard A2.1 Return keyless wallet provider2.2 Interact with keyless wallet provider (e.g. send transaction, sign message,...)2.3 Return transaction response or signed message hash,...

## Next steps[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction#next-steps "Direct link to Next steps")

Let's learn to [delegate wallet permissions to the dapp](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation) to interact with the user's keyless wallet directly.

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)
-   [web-sdk](/tags/web-sdk)
-   [headless-sdk](/tags/headless-sdk)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis