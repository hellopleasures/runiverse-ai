# Open URLs with deep links | Mavis Docs

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

# Open URLs with deep links

## Overview[​](/ronin/wallet/guides/use-deep-links#overview "Direct link to Overview")

To open your dApp's URL directly within the mobile Ronin Wallet's in-app browser, you can use a deep link. You can initiate a deep link from either a web app or a native app.

## Configure a deep link[​](/ronin/wallet/guides/use-deep-links#configure-a-deep-link "Direct link to Configure a deep link")

To configure a deep link, you need to create a URL that includes the `roninwallet://in_app_browser?url=[your_url]` format. This URL opens the Ronin Wallet's in-app browser and load the specified URL.

### Deep link format[​](/ronin/wallet/guides/use-deep-links#deep-link-format "Direct link to Deep link format")

```
roninwallet://in_app_browser?url=[your_url]
```

Encore the `url` parameter with the URL you want to open in the in-app browser. For example:

-   Original: `https://app.roninchain.com`
-   Encoded: `https%3A%2F%2Fapp.roninchain.com`

info

For both Android and iOS, replace the `roninwallet://` prefix with `https://wallet.roninchain.com/` to create a Universal/App Link. This format ensures compatibility across both platforms.

### Full URL example[​](/ronin/wallet/guides/use-deep-links#full-url-example "Direct link to Full URL example")

```
roninwallet://in_app_browser?url=https%3A%2F%2Fapp.roninchain.com
```

### Universal/App Link example[​](/ronin/wallet/guides/use-deep-links#universalapp-link-example "Direct link to Universal/App Link example")

```
https://wallet.roninchain.com/in_app_browser?url=https%3A%2F%2Fapp.roninchain.com
```

This format works on both iOS and Android platforms, letting users open the specified URL within the Ronin Wallet in-app browser.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis