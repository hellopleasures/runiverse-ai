# Sign-in with Ronin | Mavis Docs

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

# Sign-in with Ronin

## Overview[​](/ronin/wallet/guides/sign-in#overview "Direct link to Overview")

This guide shows you how to integrate "Sign-In with Ronin" into your dApp. "Sign-In with Ronin" is a standard extended from [Sign-In with Ethereum (SIWE)](https://eips.ethereum.org/EIPS/eip-4361) to help users sign in to your dApp easily, providing a better user experience and improved security.

From the end user's perspective, the sign-in process is as follows:

1.  **Connect Ronin Wallet**: The user connects their Ronin Wallet to your dApp.
2.  **Accept terms of service**: The user accepts your terms of service by signing a message with their Ronin Wallet.
3.  **Solve the challenge**: The user solves a security challenge to prove they are human.

1\. Connect Ronin Wallet

2\. Accept terms of service

![](/assets/images/sign-in-connect-a9076d90899a23c4d877a546928781d2.png)

![](/assets/images/sign-in-sign-d2729800bf32d1c983ff79de55fe8fe8.png)

## Prerequisites[​](/ronin/wallet/guides/sign-in#prerequisites "Direct link to Prerequisites")

[npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package installation.

## Steps[​](/ronin/wallet/guides/sign-in#steps "Direct link to Steps")

### Step 1. Install dependencies[​](/ronin/wallet/guides/sign-in#step-1-install-dependencies "Direct link to Step 1. Install dependencies")

Firstly, you will need to get the `@sky-mavis/tanto-connect` package to connect to Ronin Wallet, you can follow the steps from [Install Tanto Connect](/ronin/wallet/guides/install-tanto-connect)

The dependency needed for signing in is the `siwe` package. It helps you generate a formatted sign-in message more easily.

1.  Install the package using yarn or npm:

```
yarn add siwe@1.1.6 ethers@5.6.9
```

```
npm i siwe@1.1.6 ethers@5.6.9
```

2.  Import the package in your component:

```
import { SiweMessage } from "siwe";
```

### Step 2. Generate a SIWE message[​](/ronin/wallet/guides/sign-in#step-2-generate-a-siwe-message "Direct link to Step 2. Generate a SIWE message")

Using the `SiweMessage` class, you can generate a formatted sign-in message. The message includes the following parameters:

-   `domain`: The domain of your dApp.
-   `address`: The user's Ronin address.
-   `uri`: The URI of your dApp.
-   `version`: The version of the SIWE message.
-   `chainId`: The chain ID of the network. For the Ronin mainnet, use `2020`. For the Saigon testnet, use `2021`.
-   `nonce`: A unique nonce for the message.
-   `statement`: The terms of service that the user agrees to.
-   `expirationTime`: The expiration time of the message.

The following code snippet shows how to generate a SIWE message:

Live Editor

function SIWERequest() {
  const \[connector, setConnector\] \= useState(null);  const \[signature, setSignature\] \= useState();
  useEffect(() \=> {    requestRoninWalletConnector().then((connector) \=> {      setConnector(connector);    });  }, \[\]);
  async function onClickSignIn() {    if (!connector) {      return;    }
    const accounts \= await connector.requestAccounts();
    if (!accounts) {      return;    }
    const currentAccount \= accounts\[0\];
    const currentDate \= new Date();    currentDate.setDate(currentDate.getDate() + 1);
    const siweMessage \= new SiweMessage({      domain: window.location.hostname,      address: currentAccount,      uri: window.location.origin,      version: "1",      chainId: 2020,      nonce: "12345678",      statement:        "I accept the dApp's Terms of Service: https://example-dapp.com/terms-of-use",      expirationTime: currentDate.toISOString(),    });
    const provider \= await connector.getProvider();    const sig \= await provider.request({      method: "personal\_sign",      params: \[siweMessage.toMessage(), currentAccount\],    });    setSignature(sig);  }
  if (signature) {    return (      <div\>        <div\>🎉 Congratulations! You are signed in.</div\>        <button onClick\={() \=> setSignature(undefined)}\>Reload</button\>      </div\>    );  }
  return <button onClick\={onClickSignIn}\>Sign in with Ronin</button\>;
}

Result

Sign in with Ronin

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis