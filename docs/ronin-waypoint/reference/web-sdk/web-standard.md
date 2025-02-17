# Ronin Waypoint Web Standard SDK | Mavis Docs

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

# Ronin Waypoint Web Standard SDK

## Overview[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#overview "Direct link to Overview")

The Ronin Waypoint Web SDK lets developers integrate Ronin Waypoint into dapps developed with JavaScript or TypeScript.

The SDK provides the `WaypointProvider`, an [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)\-compatible wallet provider, letting developers use it with JavaScript Ethereum libraries, such as [Ethers.js](https://docs.ethers.org/v5/), [web3.js](https://web3js.readthedocs.io/en/v1.10.0/), or [viem](https://viem.sh/).

GitHub repository: [skymavis/waypoint-js](https://github.com/skymavis/waypoint-js).

## Features[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#features "Direct link to Features")

-   Authorize users: let users sign in to your app with Ronin Waypoint to connect their keyless wallet and an optional externally owned account (EOA) wallet.
-   Wallet provider: interact with the user's keyless wallet using the wallet provider, compatible with the [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) standard.

## Prerequisites[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#prerequisites "Direct link to Prerequisites")

Permission to use the Sky Mavis Account service. For more information, see [Setup and configuration](/mavis/ronin-waypoint/guides/get-started#steps).

## Setup[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#setup "Direct link to Setup")

### Installation[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#installation "Direct link to Installation")

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

### Initialization[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#initialization "Direct link to Initialization")

```
import { WaypointProvider } from "@sky-mavis/waypoint";const walletProvider = WaypointProvider.create({  clientId: "<YOUR_CLIENT_ID>",  chainId: chainId,});
```

Parameters for the `WaypointProvider.create` method:

Field

Required?

Description

`clientId`

Required

The client ID from the Developer Console. For more information, see [Waypoint service settings](/mavis/ronin-waypoint/guides/get-started#steps).

`chainId`

Required

The chain ID: 2021 for Saigon testnet, 2020 for Ronin mainnet.

`redirectUrl`

Optional

Equivalent to the **REDIRECT URI** configured in [Waypoint service settings](/mavis/ronin-waypoint/guides/get-started#step-3-configure-ronin-waypoint-settings). Default is `window.location.origin`.

`scopes`

Optional

The OAuth 2.0 scope. Available values are `openid`, `profile`, `email`, and `wallet`. In `WaypointProvider.create` method, *the default scopes* are `['openid','wallet']`.

More about scopes

This table describes the scopes available for authorization with Ronin Waypoint.

Scope

Type

Description

`openid`

OIDC

Informs the authorization server that your app is making an OpenID connect request. This is tied to the subject (`sub`) in the ID token, typically the user ID in Ronin Waypoint. Without this scope, the user can't authenticate.

`profile`

OIDC

Requests access to the user's profile name. Without this scope, your app can't access this information.

`email`

OIDC

Requests the user's email address. Without this scope, your app can't access this information.

`wallet`

Custom

An optional scope that allows your app to connect to the user's keyless wallet for blockchain transactions. Without this scope, your app can't access the wallet.

The `wallet` scope behavior:

-   If `wallet` is included, then when the user signs up or signs in, they must create a keyless wallet or connect the existing wallet. Ronin Waypoint returns the ID token and the user's wallet address. The client can access the wallet for blockchain interactions.
-   If `wallet` is not included, then when the user signs up or signs in, they can skip creating a keyless wallet. Ronin Waypoint returns the ID token that the client can use to verify the user's identity and issue an access token. The client can request the user to create a keyless wallet later.

## Usage[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#usage "Direct link to Usage")

### User authorization[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#user-authorization "Direct link to User authorization")

Initializes the authorization process, allowing a user to sign in or sign up for a Ronin Waypoint account, and connect their wallet. Returns an waypoint token and the user's addresses. Two methods are available for authorizing users: `popup` and `redirect`. See the [popup code example](https://github.com/skymavis/waypoint-js/blob/main/apps/playground/src/components/Authorize.tsx) and [redirect code example](https://github.com/skymavis/waypoint-js/blob/main/apps/playground/src/components/RedirectAuthorize.tsx).

-   *Popup mode* opens a new window for a user to authorize. After the user authorizes, the service closes the window and returns the result.
    
    ```
    import { authorize } from '@sky-mavis/waypoint';const result = await authorize({  mode: 'popup'  clientId: '<YOUR_CLIENT_ID>',  scopes: ['openid','wallet']});
    ```
    
-   *Redirect mode* redirects your site to the Ronin Waypoint authorization page. After the user authorizes, the service redirects back to your page with the *result in the URL*. For additional security, you can send a `state` parameter to the authorization page and get it back in the result.
    
    src/pages/auth/signIn.tsx
    
    ```
    import { authorize } from '@sky-mavis/waypoint';...authorize({  mode: 'redirect',  clientId: '<YOUR_CLIENT_ID>',  redirectUrl: '<YOUR_REDIRECT_URL>',  state: '<state>'  scopes: ['openid','wallet']});...
    ```
    
    src/pages/auth/callback.tsx
    
    ```
    import { parseRedirectUrl } from '@sky-mavis/waypoint';import { useEffect } from 'react';...useEffect(() => {  const result = parseRedirectUrl();}, []);...
    ```
    

Parameters for the `authorize` method:

Field

Required?

Description

`clientId`

Required

The client ID from the Developer Console. For more information, see [Get started](/mavis/ronin-waypoint/guides/get-started#steps).

`mode`

Required

The authorization mode: `popup` or `redirect`.

`redirectUrl`

Optional

Equivalent to the **REDIRECT URI** configured in [Waypoint service settings](/mavis/ronin-waypoint/guides/get-started#step-3-configure-ronin-waypoint-settings). Default is `window.location.origin`. If you use the `redirect` mode, when the user authorizes, the service redirects back to *this URL with the authorization result*.

`state`

Optional

An optional parameter to send to the authorization page and get back in the result (*available in redirect mode only*).

`scopes`

Optional

The OAuth 2.0 scope. The `openid`, `profile`, `email`, `wallet` scopes are available for authorization.

More about scopes

This table describes the scopes available for authorization with Ronin Waypoint.

Scope

Type

Description

`openid`

OIDC

Informs the authorization server that your app is making an OpenID connect request. This is tied to the subject (`sub`) in the ID token, typically the user ID in Ronin Waypoint. Without this scope, the user can't authenticate.

`profile`

OIDC

Requests access to the user's profile name. Without this scope, your app can't access this information.

`email`

OIDC

Requests the user's email address. Without this scope, your app can't access this information.

`wallet`

Custom

An optional scope that allows your app to connect to the user's keyless wallet for blockchain transactions. Without this scope, your app can't access the wallet.

The `wallet` scope behavior:

-   If `wallet` is included, then when the user signs up or signs in, they must create a keyless wallet or connect the existing wallet. Ronin Waypoint returns the ID token and the user's wallet address. The client can access the wallet for blockchain interactions.
-   If `wallet` is not included, then when the user signs up or signs in, they can skip creating a keyless wallet. Ronin Waypoint returns the ID token that the client can use to verify the user's identity and issue an access token. The client can request the user to create a keyless wallet later.

Result fields for the `authorize` or `parseRedirectUrl` method:

Field

Description

`token`

The waypoint token.

`address`

The user's keyless wallet address.

`secondaryAddress`

The user's seed phrase address.

`state`

The state parameter sent to the authorization page and returned in the result (*available in redirect mode only*).

### Wallet interactions[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#wallet-interactions "Direct link to Wallet interactions")

Follow the steps below to connect to the Ronin Waypoint service and interact with the user's keyless wallet.

#### Set up Ronin Waypoint SDK[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#set-up-ronin-waypoint-sdk "Direct link to Set up Ronin Waypoint SDK")

```
import {WaypointProvider} from '@sky-mavis/waypoint';export const waypointProvider = WaypointProvider.create({  // Replace the following variables with your own values  clientId: '9b577a44-ce2f-44b2-a59d-dfcadfd1a93b',  chainId: 2021,});
```

#### Connect with Ronin Waypoint[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#connect-with-ronin-waypoint "Direct link to Connect with Ronin Waypoint")

Live Editor

function Connect() {
  const \[connectedAddress, setConnectedAddress\] \= useState(null);
  const handleConnect \= async () \=> {    const result \= await waypointProvider.connect();    setConnectedAddress(result.address);  };
  const handleDisconnect \= () \=> {    waypointProvider.disconnect();    setConnectedAddress(null);  };
  if (!connectedAddress)    return (      <Button label\="Connect with Ronin Waypoint" onClick\={handleConnect} />    );
  return (    <LayoutBox\>      <span\>{\`You have connected to Ronin Waypoint with address: ${connectedAddress}\`}</span\>      <Button        label\="Disconnect Ronin Waypoint"        onClick\={handleDisconnect}        variant\="danger"      />    </LayoutBox\>  );
}

Result

Connect with Ronin Waypoint

#### Combine with Ethereum libraries[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#combine-with-ethereum-libraries "Direct link to Combine with Ethereum libraries")

After the user connects their wallet, you can interact with it using the wallet provider. The provider is compatible with the [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) standard, allowing you to use common Ethereum libraries to interact with the blockchain. Below are examples of how to use the provider with different libraries:

-   [Ethers.js (v5)](https://docs.ethers.org/v5/)
-   [web3.js](https://web3js.readthedocs.io/en/v1.10.0/)
-   [viem](https://viem.sh/)

-   Ethers.js (v5)
-   web3.js
-   viem
-   Standalone usage

```
import * as ethers from "ethers";const wrappedProvider = new ethers.providers.Web3Provider(provider);
```

```
import Web3 from "web3";const web3 = new Web3(provider);
```

```
import { createWalletClient, custom, http } from "viem";import { saigon } from "viem/chains";const publicClient = createPublicClient({  chain: saigon,  transport: http(),});const walletClient = createWalletClient({  chain: saigon,  transport: custom(provider),});
```

You can also use the SDK for standalone wallet operations:

```
const accounts = await provider.request<string[]>({  method: "eth_requestAccounts",});if (accounts.length) {  const balance = await provider.request<string>({    method: "eth_getBalance",    params: [accounts[0], "latest"],  });}
```

#### Sign messages with Ronin Waypoint[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#sign-messages-with-ronin-waypoint "Direct link to Sign messages with Ronin Waypoint")

Signs plain text messages with the user's wallet.

Live Editor

function PersonalSign() {
  const \[message, setMessage\] \= useState(null);  const \[result, setResult\] \= useState(null);
  const handleSign \= async () \=> {    const web3Provider \= new ethers.providers.Web3Provider(waypointProvider);    const accounts \= await web3Provider.listAccounts();
    if (!accounts.length) return alert('Connect to Ronin Waypoint to continue');
    const signature \= await web3Provider.getSigner().signMessage(message);    setResult(signature);  };
  return (    <LayoutBox\>      <Input        value\={message}        onChange\={e \=> setMessage(e.target.value)}        placeholder\="Sign everything with Ronin Waypoint..."      />      <Button label\="Sign message" onClick\={handleSign} />      {result && <p\>{\`Signature: ${result}\`}</p\>}    </LayoutBox\>  );
}

Result

Sign message

#### Activate Atia's Blessing with Ronin Waypoint[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#activate-atias-blessing-with-ronin-waypoint "Direct link to Activate Atia's Blessing with Ronin Waypoint")

Sends a transaction to the [Atia Shrine smart contract](https://saigon-app.roninchain.com/address/0xd5c5afefad9ea288acbaaebeacec5225dd3d6d2b) to activate the "Atia's Blessing" feature in Axie Infinity games.

Live Editor

function ActivateAtia() {
  const handleActivate \= async () \=> {    const web3Provider \= new ethers.providers.Web3Provider(waypointProvider);    const accounts \= await web3Provider.listAccounts();
    if (!accounts.length) return alert('Connect to Ronin Waypoint to continue');
    const contract \= new ethers.Contract(      Atia\_ADDRESS,      activateAtiaABI,      web3Provider.getSigner(),    );
    try {      await contract.activateStreak(accounts\[0\]);    } catch (error) {      alert(error);    }  };
  return <Button label\={\`Activate Atia's Blessing\`} onClick\={handleActivate} />;
}

Result

Activate Atia's Blessing

## Extra playground[​](/mavis/ronin-waypoint/reference/web-sdk/web-standard#extra-playground "Direct link to Extra playground")

Experience Ronin Waypoint in the [Ronin Waypoint playground](https://waypoint-playground.vercel.app/) built with Next.js and the Ronin Waypoint Web SDK. The playground demonstrates how to connect the user's keyless wallet and interact with the wallet provider. After creating a keyless wallet, fund it with testnet RON tokens from the [Ronin Faucet](https://faucet.roninchain.com).

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis