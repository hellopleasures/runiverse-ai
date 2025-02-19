# Get user wallet addresses | Mavis Docs

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

# Get user wallet addresses

## Overview[​](/ronin/wallet/guides/get-user-addresses#overview "Direct link to Overview")

This guide explains how to fetch a user's Ronin addresses from using `connector` from Tanto Connect.

## Get user addresses[​](/ronin/wallet/guides/get-user-addresses#get-user-addresses "Direct link to Get user addresses")

To obtain the current account's addresses, you can use two methods:

-   `connector.requestAccounts()`
-   `connector.getAccounts()`

### connector.requestAccounts[​](/ronin/wallet/guides/get-user-addresses#connectorrequestaccounts "Direct link to connector.requestAccounts")

The `connector.requestAccounts` method requests the user to approve a session between your app and wallet. If the user rejects the session, an error is returned. If the user approves the session, the method resolves the list of the user's approved addresses.

```
const requestSession = async () => {  try {    const approvedAddress = await connector.requestAccounts();    return addresses;  } catch (error) {    alert("User has rejected the request.");  }};requestSession();
```

### connector.getAccounts[​](/ronin/wallet/guides/get-user-addresses#connectorgetaccounts "Direct link to connector.getAccounts")

The `connector.getAccounts` method resolves with the list user addresses only. If the wallet is locked or there is no session between your app and wallet, the method returns an empty array.

```
const getUserAddresses = async () => {  const addresses = await connector.getAccounts();  return addresses;};getUserAddresses();
```

## Detect account change[​](/ronin/wallet/guides/get-user-addresses#detect-account-change "Direct link to Detect account change")

Users can change their account when using Ronin Wallet. The provider emits the `accountChanged` event upon changing accounts.

```
const listenToAccountChange = async () => {  const addresses = connector.on(    ConnectorEvent.ACCOUNTS_CHANGED,    (newAddresses) => {      console.log("Account is changed to: ", newAddresses[0]);    },  );};listenToAccountChange();
```

The `ConnectorEvent` is an enum from Tanto Connect that contains all the events emitted by the provider.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis