# Rate limits | Mavis Docs

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

# Rate limits

## Overview[​](/api/rate-limits#overview "Direct link to Overview")

Requests to Sky Mavis APIs are rate-limited. A *rate limit* is the number of API requests an app can make within a given time period.

If the rate limit is exceeded, then subsequent requests fail and the API returns a `HTTP 429` status code with the following body:

```
{ "message": "API rate limit exceeded" }
```

Rate limit can be increased for some APIs.

## View current rate limits[​](/api/rate-limits#view-current-rate-limits "Direct link to View current rate limits")

You can view your current rate limits in the Developer Console under **your app > Rate limit**.

![](/assets/images/view-rate-limits-d3ab086260a6c66b1d381b4211e60e77.png)

## Request a rate limit increase[​](/api/rate-limits#request-a-rate-limit-increase "Direct link to Request a rate limit increase")

Depending on the Sky Mavis API you use, you may be able to request a rate limit increase.

There are three rate limit tiers:

-   **Basic** (default)
-   **Intermediate**
-   **Advanced**

note

While any app can be upgraded from **Basic** to the **Intermediate** tier, the **Advanced** tier is only available to projects that signed a partnership agreement with Sky Mavis, or to outstanding community projects.

If your usage of a Sky Mavis API is more than half of the current tier, you can increase the limit as follows:

1.  On the **Rate limit** tab, find the API for which you want to increase the rate limit, and then click **Upgrade**.
    
    ![](/assets/images/upgrade-rate-limit-b4d253518678c738cb53a02560af67d3.png)
2.  Select the tier you need, and click **Next**.
    

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis