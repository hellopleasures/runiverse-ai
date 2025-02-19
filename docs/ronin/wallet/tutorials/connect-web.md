# Connect to Ronin Wallet using an injected provider (EIP-6963) | Mavis Docs

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

# Connect to Ronin Wallet using an injected provider (EIP-6963)

## Overview[​](/ronin/wallet/tutorials/connect-web#overview "Direct link to Overview")

This tutorial shows how to connect your decentralized web app to the Ronin Wallet browser extension using an injected provider. By the end of this tutorial, your app will be able to connect with Ronin Wallet, enabling you to make requests to the connected user's wallet.

An *injected provider* acts as a bridge between your app and a user's web3-enabled browser, facilitating communication and accessing blockchain data and functionalities.

When a user accesses your app, the injected provider injects a web3 object into the app's JavaScript runtime environment. This web3 object allows the app to interact with the underlying blockchain network. An example of such interaction is managing the user's blockchain accounts. The provider gives access to the user's public and private keys, allowing the app to sign and send transactions on behalf of the user. This integration simplifies the user experience, because users don't need to manually enter their account details for each interaction with the app.

An injected provider is available in the following scenarios:

-   Users who use a web browser with the Ronin Wallet extension.
-   Users who use the in-app browser inside the Ronin Wallet mobile app.

## Prerequisites[​](/ronin/wallet/tutorials/connect-web#prerequisites "Direct link to Prerequisites")

-   A Next.js app. To set up, see the [official documentation](https://nextjs.org/docs/pages/api-reference/create-next-app).
-   An address on the Ronin chain. Sign up at [wallet.roninchain.com](https://wallet.roninchain.com/).

## Steps[​](/ronin/wallet/tutorials/connect-web#steps "Direct link to Steps")

### Step 1. Install dependencies[​](/ronin/wallet/tutorials/connect-web#step-1-install-dependencies "Direct link to Step 1. Install dependencies")

First, install the Sky Mavis Tanto connect package by running the following command in your terminal.

-   npm
-   Yarn

```
npm install @sky-mavis/tanto-connect
```

```
yarn add @sky-mavis/tanto-connect
```

In your preferred code editor, open the `page.tsx` file, and then add the following imports:

```
import {  ConnectorError,  ConnectorErrorType,  requestRoninWalletConnector,} from "@sky-mavis/tanto-connect";
```

### Step 2. Set up connecting component[​](/ronin/wallet/tutorials/connect-web#step-2-set-up-connecting-component "Direct link to Step 2. Set up connecting component")

Create a new component called `ConnectRoninWalletButton` that will handle the connection to Ronin Wallet. This component will contain a button that, when clicked, will connect the user's Ronin Wallet to your app.

```
import { useState } from "react";import {  ConnectorError,  ConnectorErrorType,  requestRoninWalletConnector,} from "@sky-mavis/tanto-connect";function ConnectRoninWalletButton(props) {  const [connector, setConnector] = useState(null);  const [connectedAddress, setConnectedAddress] = useState();  return <button>Connect Ronin Wallet</button>;}export default ConnectRoninWalletButton;
```

### Step 3. Detect Ronin Wallet provider[​](/ronin/wallet/tutorials/connect-web#step-3-detect-ronin-wallet-provider "Direct link to Step 3. Detect Ronin Wallet provider")

Before interacting with an injected provider, your app must verify the existence of this provider.

If a user already installed Ronin Wallet, a `window.ronin` object is available for access. If Ronin Wallet is not installed, your app must redirect the user to [Ronin Wallet's website](https://wallet.roninchain.com/) for installation.

`tanto-connect` provides a helper function to request the Ronin Wallet connector, which wraps the ronin injected provider. If the user hasn't installed the Ronin Wallet or if any error occurs, the function will throw a `ConnectorError` with the `PROVIDER_NOT_FOUND` error type.

```
const getRoninWalletConnector = async () => {  try {    const connector = await requestRoninWalletConnector();    return connector;  } catch (error) {    if (error instanceof ConnectorError) {      // Handling the case where the user hasn't installed the Ronin Wallet here      console.error(error);    }    return null;  }};
```

To handle the case where the user hasn't installed the Ronin Wallet, we can redirect the user to the Ronin Wallet's website.

```
if (error.name === ConnectorErrorType.PROVIDER_NOT_FOUND) {  window.open("https://wallet.roninchain.com", "_blank");  return;}
```

### Step 4. Get Ronin Wallet connector when component mounts[​](/ronin/wallet/tutorials/connect-web#step-4-get-ronin-wallet-connector-when-component-mounts "Direct link to Step 4. Get Ronin Wallet connector when component mounts")

We will use a `useEffect` hook that runs when the component mounts. This hook will call the `getRoninWalletConnector` function to obtain the Ronin Wallet connector and detect any errors that occur.

```
import { useEffect, useState } from 'react';import {  ConnectorError,  ConnectorErrorType,  requestRoninWalletConnector} from '@sky-mavis/tanto-connect';function ConnectRoninWalletButton(props) {  const [connector, setConnector] = useState(null);  const [connectedAddress, setConnectedAddress] = useState();  const [error, setError] = useState(null)  const getRoninWalletConnector = async () => {    try {      const connector = await requestRoninWalletConnector();      return connector;    } catch (error) {    if (error instanceof ConnectorError) {      setError(error.name)    }    return null;  };  useEffect(() => {    getRoninWalletConnector().then((connector) => {      setConnector(connector);    });  }, [])  return <button>Connect Ronin Wallet</button>}export default ConnectRoninWalletButton;
```

### Step 5. Prompt user to unlock wallet[​](/ronin/wallet/tutorials/connect-web#step-5-prompt-user-to-unlock-wallet "Direct link to Step 5. Prompt user to unlock wallet")

If the user's wallet is locked, call `connector.connect()` to prompt the user to unlock it:

```
await connector.connect();
```

In the following example, the function `connectRoninWallet` is called when the button is clicked. This function will prompt the user to unlock the wallet. If the user unlocks the wallet, the result will contain the user's current address, which will be set in the `connectedAddress` state.

```
import {  ConnectorError,  ConnectorErrorType,  requestRoninWalletConnector} from '@sky-mavis/tanto-connect';/** Previous code*/const getRoninWalletConnector = async () => {  try {    const connector = await requestRoninWalletConnector();    return connector;  } catch (error) {  if (error instanceof ConnectorError) {    setError(error.name)  }  return null;};const connectRoninWallet = async () => {  const connectResult = await connector?.connect();  if (connectResult) {    setConnectedAddress(connectResult.account);  }}
```

### Step 6. Get all user addresses[​](/ronin/wallet/tutorials/connect-web#step-6-get-all-user-addresses "Direct link to Step 6. Get all user addresses")

After the user unlocks the wallet, use `getAccounts` to get the user's addresses:

```
await connector.getAccounts();
```

Here's the example implementation:

```
import {  ConnectorError,  ConnectorErrorType,  requestRoninWalletConnector} from '@sky-mavis/tanto-connect';/** Previous code*/const [userAddresses, setUserAddresses] = useState();const getRoninWalletConnector = async () => {  try {    const connector = await requestRoninWalletConnector();    return connector;  } catch (error) {  if (error instanceof ConnectorError) {    setError(error.name)  }  return null;};const connectRoninWallet = async () => {  const connectResult = await connector?.connect();  if (connectResult) {    setConnectedAddress(connectResult.account);  }  const accounts = await connector?.getAccounts();  if (accounts) {    setUserAddresses(accounts);  }}
```

### Step 7. Switch chain (EIP-3326)[​](/ronin/wallet/tutorials/connect-web#step-7-switch-chain-eip-3326 "Direct link to Step 7. Switch chain (EIP-3326)")

Ronin supports the EIP-3326 standard, which allows users to switch between different chains. To switch between chains, call the `switchChain` method on the connector object.

```
await connector.switchChain(chainId);
```

Here's an example implementation, we will implement a function `switchChain` that will switch the chain when the user clicks the button. We will also store the current chain id in the state and update it when the user switches the chain, or when the user connects the wallet:

```
import {  ChainIds,  ConnectorError,  ConnectorErrorType,  requestRoninWalletConnector,} from "@sky-mavis/tanto-connect";/* * Previous code */const [currentChainId, setCurrentChainId] = useState(null);const switchChain = async (chainId) => {  try {    await connector?.switchChain(chainId);    setCurrentChainId(chainId);  } catch (error) {    console.error(error);  }};const connectRoninWallet = async () => {  const connectResult = await connector?.connect();  if (connectResult) {    setConnectedAddress(connectResult.account);    setCurrentChainId(connectResult.chainId);  }  const accounts = await connector?.getAccounts();  if (accounts) {    setUserAddresses(accounts);  }};
```

### Step 8. Implement Ronin Wallet connection[​](/ronin/wallet/tutorials/connect-web#step-8-implement-ronin-wallet-connection "Direct link to Step 8. Implement Ronin Wallet connection")

Let's implement a **Connect Ronin Wallet** button that connects your app with the Ronin Wallet provider and a button that will switch between two chains: Ronin Mainnet and Ronin Testnet. To do this, you need to combine the code from the preceding steps, as shown in the following example.

Here, if the user's wallet is locked, the button requests that they unlock it. After that's done, the user's address is displayed.

You can paste this example into your `page.tsx` file and run it locally.

```
"use client"; // Mark this component as client-side onlyimport { useEffect, useState } from "react";import {  ChainIds,  ConnectorError,  ConnectorErrorType,  requestRoninWalletConnector,} from "@sky-mavis/tanto-connect";function ConnectRoninWalletButton(props) {  const [connector, setConnector] = useState(null);  const [connectedAddress, setConnectedAddress] = useState();  const [error, setError] = useState(null);  const [userAddresses, setUserAddresses] = useState();  const [currentChainId, setCurrentChainId] = useState(null);  const switchChain = async (chainId) => {    try {      await connector?.switchChain(chainId);      setCurrentChainId(chainId);    } catch (error) {      console.error(error);    }  };  const getRoninWalletConnector = async () => {    try {      const connector = await requestRoninWalletConnector();      return connector;    } catch (error) {      if (error instanceof ConnectorError) {        setError(error.name);      }      return null;    }  };  const connectRoninWallet = async () => {    if (!connector && error === ConnectorErrorType.PROVIDER_NOT_FOUND) {      window.open("https://wallet.roninchain.com", "_blank");      return;    }    const connectResult = await connector?.connect();    if (connectResult) {      setConnectedAddress(connectResult.account);      setCurrentChainId(connectResult.chainId);    }    const accounts = await connector?.getAccounts();    if (accounts) {      setUserAddresses(accounts);    }  };  useEffect(() => {    getRoninWalletConnector().then((connector) => {      setConnector(connector);    });  }, []);  const formatConnectedChain = (chainId) => {    switch (chainId) {      case ChainIds.RoninMainnet:        return `Ronin Mainnet - ${chainId}`;      case ChainIds.RoninTestnet:        return `Saigon Testnet - ${chainId}`;      case null:        return "Unknown Chain";      default:        return `Unknown Chain - ${chainId}`;    }  };  return (    <>      {connectedAddress && (        <>          <button            onClick={() =>              switchChain(                currentChainId === ChainIds.RoninMainnet                  ? ChainIds.RoninTestnet                  : ChainIds.RoninMainnet,              )            }          >            Switch chain          </button>          <p>Current Chain: {formatConnectedChain(currentChainId)}</p>        </>      )}      <button onClick={connectRoninWallet}>Connect Ronin Wallet</button>      {connectedAddress && (        <p>          🎉 Ronin Wallet is connected, current address: {connectedAddress}. All          addresses: {userAddresses}        </p>      )}    </>  );}export default ConnectRoninWalletButton;
```

Or try it right in the browser by clicking the **Connect Ronin Wallet** button at the bottom:

Live Editor

function ConnectRoninWalletButton(props) {
  const \[connector, setConnector\] \= useState(null);  const \[connectedAddress, setConnectedAddress\] \= useState();  const \[error, setError\] \= useState(null);
  const \[userAddresses, setUserAddresses\] \= useState();  const \[currentChainId, setCurrentChainId\] \= useState(null);
  const switchChain \= async (chainId) \=> {    try {      await connector?.switchChain(chainId);      setCurrentChainId(chainId);    } catch (error) {      console.error(error);    }  };
  const getRoninWalletConnector \= async () \=> {    try {      const connector \= await requestRoninWalletConnector();
      return connector;    } catch (error) {      if (error instanceof ConnectorError) {        setError(error.name);      }
      return null;    }  };
  const connectRoninWallet \= async () \=> {    if (!connector && error \=== ConnectorErrorType.PROVIDER\_NOT\_FOUND) {      window.open("https://wallet.roninchain.com", "\_blank");      return;    }
    const connectResult \= await connector?.connect();
    if (connectResult) {      setConnectedAddress(connectResult.account);      setCurrentChainId(connectResult.chainId);    }
    const accounts \= await connector?.getAccounts();
    if (accounts) {      setUserAddresses(accounts);    }  };
  useEffect(() \=> {    getRoninWalletConnector().then((connector) \=> {      setConnector(connector);    });  }, \[\]);
  const formatConnectedChain \= (chainId) \=> {    switch (chainId) {      case ChainIds.RoninMainnet:        return \`Ronin Mainnet - ${chainId}\`;      case ChainIds.RoninTestnet:        return \`Saigon Testnet - ${chainId}\`;      default:        return \`Unknown Chain - ${chainId}\`;    }  };
  return (    <\>      {connectedAddress && (        <\>          <button            onClick\={() \=>              switchChain(                currentChainId \=== ChainIds.RoninMainnet                  ? ChainIds.RoninTestnet                  : ChainIds.RoninMainnet,              )            }          \>            Switch chain          </button\>          <p\>Current Chain: {formatConnectedChain(currentChainId)}</p\>        </\>      )}      <button onClick\={connectRoninWallet}\>Connect Ronin Wallet</button\>      {connectedAddress && (        <p\>          🎉 Ronin Wallet is connected, current address: {connectedAddress}. All          addresses: {userAddresses}        </p\>      )}    </\>  );
}

Result

Connect Ronin Wallet

## See also[​](/ronin/wallet/tutorials/connect-web#see-also "Direct link to See also")

-   [Connect to Ronin Wallet using WalletConnect](/ronin/wallet/tutorials/connect-mobile)
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