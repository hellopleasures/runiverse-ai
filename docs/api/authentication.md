# Authentication | Mavis Docs

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

-   [Overview](/api)
    
    -   [Authentication](/api/authentication)
    -   [Rate limits](/api/rate-limits)
    -   [Error codes](/api/status-codes)
-   [Axie Experience Points API](/api/axp/axp-endpoints)
    
-   [Axie Infinity Origins API](/api/origins/origins-endpoints)
    
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

On this page

# Authentication

## Overview[​](/api/authentication#overview "Direct link to Overview")

To access Sky Mavis APIs, you need to authenticate your requests. This page explains how to authenticate requests to Sky Mavis APIs using an API key.

## Get your API key[​](/api/authentication#get-your-api-key "Direct link to Get your API key")

1.  Go to the [Developer Console](https://developers.skymavis.com/console/applications/).
2.  Select your app or create a new one.
3.  On the **Information** tab, locate the **KEY** field. This is your API key.

![](/assets/images/app-id-api-key-3f402ee89ed2fa417d64d291ee64d469.png)

## Use your API key in requests[​](/api/authentication#use-your-api-key-in-requests "Direct link to Use your API key in requests")

To sign a request, add your API key to the `X-API-Key` HTTP header or append it as a query parameter.

Example using the `X-API-Key` header:

```
curl -L -X GET 'https://api-gateway.skymavis.com/{API_NAME}/resource/operation' \-H 'Accept: application/json' \-H 'X-API-Key: {YOUR_API_KEY}' \
```

Example using a query parameter:

```
curl -L -X GET 'https://api-gateway.skymavis.com/{API_NAME}/resource/operation?apiKey={YOUR_API_KEY}' \-H 'Accept: application/json'
```

## Send requests in the API documentation[​](/api/authentication#send-requests-in-the-api-documentation "Direct link to Send requests in the API documentation")

To send a request from the API reference pages, paste your API key in the **ApiKeyAuth** field and send the request.

![](/assets/images/add-api-key-743884994f0b4b03985d9c9eab9401ae.png)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis