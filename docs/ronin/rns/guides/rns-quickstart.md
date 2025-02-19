# RNS quickstart | Mavis Docs

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

-   [Ronin Name Service](/ronin/rns)
    
    -   How to
        
    -   [Quickstart](/ronin/rns/guides/rns-quickstart)
    -   [Integrate RNS](/ronin/rns/guides/integrate-rns)
    -   Reference
        
    -   [RNS deployments](/ronin/rns/reference/deployments)
    -   [Frontend design guidelines](/ronin/rns/reference/frontend-guidelines)
    -   [Library reference](/ronin/rns/reference/rnsjs)
    -   [Glossary](/ronin/rns/reference/glossary)
    -   Explanation
        
    -   [About RNS integration levels](/ronin/rns/explanation/integration)
    -   [About namehashing](/ronin/rns/explanation/namehash)

On this page

# RNS quickstart

## Overview[​](/ronin/rns/guides/rns-quickstart#overview "Direct link to Overview")

RNS aims to simplify long Ronin addresses with human-readable names. This makes it easier for users to interact with your app.

This quickstart guides you through:

-   [Step 1: Installing the example app](/ronin/rns/guides/rns-quickstart#step-1-install-the-app)
-   [Step 2: Resolving from a Ronin address to an RNS name](/ronin/rns/guides/rns-quickstart#step-2-resolve-from-an-address-to-an-rns-name)
-   [Step 3: Resolving from an RNS name to a Ronin address](/ronin/rns/guides/rns-quickstart#step-3-resolve-from-an-rns-name-to-a-ronin-address)

## Prerequisites[​](/ronin/rns/guides/rns-quickstart#prerequisites "Direct link to Prerequisites")

-   Sign up for a Ronin address on [wallet.roninchain.com](https://wallet.roninchain.com/)
-   Register for a `.ron` domain name on [id.roninchain.com](https://id.roninchain.com)

## Steps[​](/ronin/rns/guides/rns-quickstart#steps "Direct link to Steps")

### Step 1. Install the app[​](/ronin/rns/guides/rns-quickstart#step-1-install-the-app "Direct link to Step 1. Install the app")

For the sake of simplicity, we prepared an example RNS-enabled app in React for you to work with.

1.  Clone the example app:
    
    ```
    git clone git@github.com:axieinfinity/demo-rnsjs.git
    ```
    
2.  Install the dependencies:
    
    ```
    yarn install
    ```
    
3.  Run the app:
    
    ```
    yarn dev
    ```
    
4.  Connect your Ronin Wallet by clicking **Connect Wallet**.
    
    ![qsg-connect](/assets/images/qsg-connect-167686eb20d1452564bf6436ce3193e9.png)
    

### Step 2. Resolve from an address to an RNS name[​](/ronin/rns/guides/rns-quickstart#step-2-resolve-from-an-address-to-an-rns-name "Direct link to Step 2. Resolve from an address to an RNS name")

To resolve from a Ronin address to an RNS name, paste any Ronin address in the `0x...` format in the top field, and then click **Resolve**.

![qsg-reverse](/assets/images/qsg-reverse-9150b80bfda60f5797d4a3146c5e6d03.png)

The result is the primary RNS name set by the owner for this Ronin address.

![qsg-reverse-success](/assets/images/qsg-reverse-success-96b10c4ba923705980cf27bdf65d53e5.png)

This process is called *reverse resolution*. You can learn more about it in [Support reverse resolution](/ronin/rns/explanation/integration#level-2-support-reverse-resolution).

### Step 3. Resolve from an RNS name to a Ronin address[​](/ronin/rns/guides/rns-quickstart#step-3-resolve-from-an-rns-name-to-a-ronin-address "Direct link to Step 3. Resolve from an RNS name to a Ronin address")

To resolve from an RNS to a Ronin address, paste any RNS name into the bottom text field, and then click **Resolve**.

![qsg-forward](/assets/images/qsg-forward-f5c914bc2de6f43dda1f8154a652fa4d.png)

The result is the Ronin address of the RNS name's owner.

![qsg-forward-success](/assets/images/qsg-forward-success-e9436180b37a0515765c3ec3e615c65a.png)

This process is called *forward resolution*. You can learn more about it in [Configure RNS name resolution](/ronin/rns/explanation/integration#level-1-configure-rns-name-resolution).

## Next steps[​](/ronin/rns/guides/rns-quickstart#next-steps "Direct link to Next steps")

[Integrate RNS into your dApp](/ronin/rns/guides/integrate-rns)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis