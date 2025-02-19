# Connect to Ronin Wallet using Reown | Mavis Docs

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

# Connect to Ronin Wallet using Reown

## Overview[​](/ronin/wallet/tutorials/connect-mobile#overview "Direct link to Overview")

This tutorial shows how to connect your decentralized app to the Ronin Wallet mobile app using Reown. By the end of this tutorial, your app can connect with Ronin Wallet, enabling you to make requests to the wallet.

## Prerequisites[​](/ronin/wallet/tutorials/connect-mobile#prerequisites "Direct link to Prerequisites")

-   A Next.js app. To set up, see the [official documentation](https://nextjs.org/docs/pages/api-reference/create-next-app).
-   An address on the Ronin chain. Sign up at [wallet.roninchain.com](https://wallet.roninchain.com/).

## Steps[​](/ronin/wallet/tutorials/connect-mobile#steps "Direct link to Steps")

### Step 1. Get Reown project ID[​](/ronin/wallet/tutorials/connect-mobile#step-1-get-reown-project-id "Direct link to Step 1. Get Reown project ID")

To use Reown, you need a Reown project ID. Follow these steps:

1.  Visit [cloud.reown.com](https://cloud.reown.com).
2.  Sign up for a Reown account or sign in if you already have an account.
3.  Create a new project or use an existing one.
4.  Locate and copy the project ID.

### Step 2. Install dependencies[​](/ronin/wallet/tutorials/connect-mobile#step-2-install-dependencies "Direct link to Step 2. Install dependencies")

First, install the Sky Mavis Tanto connect package by running the following command in your terminal.

-   npm
-   Yarn

```
npm install @sky-mavis/tanto-connect
```

```
yarn add @sky-mavis/tanto-connect
```

In your preferred code editor, open the file where you want to connect to Ronin Wallet mobile, and then add the following imports:

```
import { useState } from "react";import {  ConnectorEvent,  requestRoninWalletConnector,} from "@sky-mavis/tanto-connect";
```

### Step 3. Set up connecting component[​](/ronin/wallet/tutorials/connect-mobile#step-3-set-up-connecting-component "Direct link to Step 3. Set up connecting component")

Create a new component called `ConnectRoninWalletMobile` that will handle the connection to Ronin Mobile wallet. This component will contain a button that, when clicked, will display a QR code that the user can scan with the Ronin Wallet mobile app (if the user is on a desktop) or a deep link that the user can click to open the Ronin Wallet mobile app (if the user is on a mobile device).

```
import { useState } from "react";import {  ConnectorEvent,  requestRoninWalletConnector,} from "@sky-mavis/tanto-connect";function ConnectRoninWalletMobile(props) {  const [connector, setConnector] = useState(null);  const [connectedAddress, setConnectedAddress] = useState();  const [displayUri, setDisplayUri] = (useState < string) | (null > null);  return <button>Connect Ronin Wallet</button>;}export default ConnectRoninWalletMobile;
```

### Step 4. Configure Reown[​](/ronin/wallet/tutorials/connect-mobile#step-4-configure-reown "Direct link to Step 4. Configure Reown")

Add a configuration object for Reown. If you haven't completed [step 1](/ronin/wallet/tutorials/connect-mobile#step-1-get-a-reown-project-id) yet, don't worry, the `@sky-mavis/tanto-connect` package has already provided a default configuration for you. However, if you want to use your own configuration, you can define it as follows:

```
const wcOptions = {  projectId: "YOUR_PROJECT_ID",  metadata: {    name: "YOUR_APP_NAME",    description: "YOUR_APP_DESCRIPTION",    icons: ["YOUR_APP_ICON_URL"],    url: "https://wallet.roninchain.com",  },};
```

### Step 5. Request Ronin connector when component mounts[​](/ronin/wallet/tutorials/connect-mobile#step-5-request-ronin-connector-when-component-mounts "Direct link to Step 5. Request Ronin connector when component mounts")

We will use a `useEffect` hook that runs when the component mounts. This hook will call the `requestRoninWalletConnectConnector` function from the `@sky-mavis/tanto-connect` package to obtain the WalletConnect connector.

```
import { useState } from "react";import {  ConnectorEvent,  requestRoninWalletConnectConnector,} from "@sky-mavis/tanto-connect";function ConnectRoninWalletMobile(props) {  const [connector, setConnector] = useState(null);  const [connectedAddress, setConnectedAddress] = useState();  const [displayUri, setDisplayUri] = (useState < string) | (null > null);  useEffect(() => {    requestRoninWalletConnectConnector(wcOptions).then((wcConnector) => {      setConnector(wcConnector);    });  }, []);  return <button>Connect Ronin Wallet</button>;}export default ConnectRoninWalletMobile;
```

### Step 6. Get URI to connect to Ronin Wallet[​](/ronin/wallet/tutorials/connect-mobile#step-6-get-uri-to-connect-to-ronin-wallet "Direct link to Step 6. Get URI to connect to Ronin Wallet")

When connecting to Ronin Wallet mobile, a Reown session is established between your app and the wallet. Your app initializes the session and requests the wallet to connect through a URI.

To handle the URI, process the `ConnectorEvent.DISPLAY_URI` event emitted after the connection is established. The `connector.on` method listens for the event and sets the URI to the state.

```
import { useState } from "react";import {  ConnectorEvent,  requestRoninWalletConnectConnector,} from "@sky-mavis/tanto-connect";function ConnectRoninWalletMobile(props) {  const [connector, setConnector] = useState(null);  const [connectedAddress, setConnectedAddress] = useState();  const [displayUri, setDisplayUri] = (useState < string) | (null > null);  useEffect(() => {    requestRoninWalletConnectConnector(wcOptions).then((wcConnector) => {      setConnector(wcConnector);      wcConnector.on(ConnectorEvent.DISPLAY_URI, (uri) => setUri(uri));    });  }, []);  return <button>Connect Ronin Wallet</button>;}export default ConnectRoninWalletMobile;
```

You can show the URI to the user by using a QR code or attaching a deep link to a clickable component. In this example, we will use both methods. We will use an external QR code component from [qrcode.react](https://github.com/zpao/qrcode.react) to display the QR code.

```
<QRCode value={uri} />
```

After the user scans the QR code with their Ronin Wallet mobile app, your app is connected to Ronin Wallet.

caution

Using `window.open()` to open deep links isn't reliable. You should instead attach the link to a clickable component, such as an `<a>` tag.

### Step 7. Connect Ronin Wallet[​](/ronin/wallet/tutorials/connect-mobile#step-7-connect-ronin-wallet "Direct link to Step 7. Connect Ronin Wallet")

Let's add a **Connect Ronin Wallet** button. To do this, combine the code from the preceding steps, as shown in the following example.

This example implements the button by rendering the URI in a QR code. The code can be scanned by the Ronin Wallet mobile app or opened in the mobile app using a deep link.

Live Editor

function ConnectRoninWalletMobile(props) {
  const \[connector, setConnector\] \= useState(null);  const \[connectedAddress, setConnectedAddress\] \= useState();
  const \[displayUri, setDisplayUri\] \= (useState < string) | (null \> null);
  useEffect(() \=> {    requestRoninWalletConnectConnector().then((wcConnector) \=> {      setConnector(wcConnector);      wcConnector.on(ConnectorEvent.DISPLAY\_URI, (uri) \=> setDisplayUri(uri));    });  }, \[\]);
  async function connectRoninWallet() {    if (!connector) {      alert("Connector is not ready");    }
    const connectResult \= await connector?.connect();
    if (connectResult) {      setConnectedAddress(connectResult.account);    }  }
  if (connectedAddress \=== undefined) {    return (      <div\>        {displayUri && isMobile() && connector && (          <a href\={displayUri}\>Open mobile app</a\>        )}        {displayUri && !isMobile() && (          <\>            <div\>Scan me:</div\>            <QRCode value\={displayUri} />          </\>        )}        {!displayUri && (          <button onClick\={connectRoninWallet}\>Connect Ronin Wallet</button\>        )}      </div\>    );  }
  if (connectedAddress) {    return \`🎉 Ronin Wallet is connected, current address: ${connectedAddress}\`;  }
}

Result

ReferenceError: string is not defined

## See also[​](/ronin/wallet/tutorials/connect-mobile#see-also "Direct link to See also")

-   [Connect to Ronin Wallet using an injected provider](/ronin/wallet/tutorials/connect-web)
-   [@sky-mavis/tanto-connect in Github](https://github.com/skymavis/tanto-kit/tree/main/packages/connect)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis