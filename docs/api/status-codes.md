# Error codes | Mavis Docs

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

# Error codes

## Overview[​](/api/status-codes#overview "Direct link to Overview")

This page provides a list of possible error codes returned by Sky Mavis APIs. The error codes are divided into two categories: HTTP error codes and RPC error codes.

## HTTP error codes[​](/api/status-codes#http-error-codes "Direct link to HTTP error codes")

Code

Message

Description

`400`

Bad Request

The request was invalid.

`401`

Unauthorized

One or more security requirements were not met, such as incorrect API key, invalid token, or missing authentication.

`403`

Forbidden

The request is valid, but the server is refusing to respond to it. For example, you may not have the necessary permission to access the service in the [Developer Console](https://developers.skymavis.com/console/applications/). For more information, see [Request access to services](/get-started#manage-permissions).

`404`

Not Found

The requested resource couldn't be found.

`429`

Too Many Requests

The request was refused due to [rate limiting](/api/rate-limits).

`500`

Internal Server Error

The server encountered an unexpected condition that prevented it from fulfilling the request. If you encounter this error, send an email to [developersupport@skymavis.com](mailto:developersupport@skymavis.com).

`503`

Service Unavailable

The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. If you encounter this error, try again later.

Example:

```
{  "errorCode": 404,  "message": "Not Found"}
```

## RPC error codes[​](/api/status-codes#rpc-error-codes "Direct link to RPC error codes")

Code

Message

Description

`-32700`

Parse error

Invalid JSON format.

`-32600`

Invalid request

JSON is not a valid request object.

`-32601`

Method not found

Specified method doesn't exist.

`-32602`

Invalid params

Parameters don't match method requirements.

`-32603`

Internal error

An internal JSON-RPC error occurred. If you encounter this error, send an email to [developersupport@skymavis.com](mailto:developersupport@skymavis.com).

`-32608`

Request timeout

The request took too long to process.

`-32609`

Request cancelled

The request was cancelled.

`-32000`

Server error

Reserved for implementation-defined server errors.

Example:

```
{  "jsonrpc": "2.0",  "id": 1,  "error": {    "code": -32601,    "message": "the method eth_getLogss does not exist/is not available"  }}
```

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis