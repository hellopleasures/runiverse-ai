# Ronin Waypoint React Native SDK | Mavis Docs

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

# Ronin Waypoint React Native SDK

## Overview[​](/mavis/ronin-waypoint/reference/react-native-sdk#overview "Direct link to Overview")

The Ronin Waypoint React Native SDK lets developers integrate the account and wallet features of the Ronin Waypoint service into Android and iOS apps developed with React Native. After the integration, users can sign in to your app with their Ronin Waypoint account and connect their keyless wallet for instant in-app transactions.

Usage

-   All functions of the SDK return a string in the format of the deep link schema that you registered in the [Developer Console](https://developers.skymavis.com/console/applications). For example, `mydapp://callback`.
-   To parse deep links returned by the SDK, use the [Deep link parser](/mavis/ronin-waypoint/reference/react-native-sdk#deep-link-parser) utility or implement your own parser.

Package repository: [@sky-mavis/waypoint-native](https://www.npmjs.com/package/@sky-mavis/waypoint-native).

## Features[​](/mavis/ronin-waypoint/reference/react-native-sdk#features "Direct link to Features")

-   Authorize users: let users sign in to your app with Ronin Waypoint to connect their keyless wallet and an optional externally owned account (EOA) wallet.
-   Send transactions: transfer RON, ERC-20 tokens, and make contract calls for in-game transactions.
-   Sign messages and typed data: have users sign messages and structured data to prove ownership of their wallet and authorize transactions.

## Prerequisites[​](/mavis/ronin-waypoint/reference/react-native-sdk#prerequisites "Direct link to Prerequisites")

-   [React Native](https://reactnative.dev/) version 0.65 or later.
-   To deploy to Android, [Android API level 24](https://developer.android.com/about/versions/nougat) or later.
-   To deploy to iOS, [iOS 13.0](https://developer.apple.com/ios/) or later and [Xcode](https://developer.apple.com/xcode/) 15.4 or later.
-   An app created in the [Developer Console](https://developers.skymavis.com/console/applications/).
-   Permission to use the Sky Mavis Account service. Request in the Developer Console under **your app > App Permission > Sky Mavis Account (OAuth 2.0) > Request Access**.
-   A client ID that you can find in the Developer Console under **Products > Waypoint Service > CLIENT ID (APPLICATION ID)**.
-   A redirect URI registered in the Developer Console under **Products > Waypoint Service > REDIRECT URI**.

For more information about the initial setup, see [Get started](/mavis/ronin-waypoint/guides/get-started).

## Example app[​](/mavis/ronin-waypoint/reference/react-native-sdk#example-app "Direct link to Example app")

The React Native SDK includes an example app that demonstrates the SDK features. To run the app, follow these steps:

1.  Clone the [skymavis/waypoint-native](https://github.com/skymavis/waypoint-native) repository.
2.  Run `yarn` to install the dependencies.
3.  For Android example, run `yarn example android` to build and run the app on an Android emulator or device. For iOS, run `yarn example ios`.

## Setup[​](/mavis/ronin-waypoint/reference/react-native-sdk#setup "Direct link to Setup")

### Installation[​](/mavis/ronin-waypoint/reference/react-native-sdk#installation "Direct link to Installation")

#### Set Android SDK version[​](/mavis/ronin-waypoint/reference/react-native-sdk#set-android-sdk-version "Direct link to Set Android SDK version")

For Android apps, set the minimum Android SDK version to 24 in the `gradle.properties` file:

```
WaypointNative_minSdkVersion=24
```

#### Set up navigation and deep linking[​](/mavis/ronin-waypoint/reference/react-native-sdk#set-up-navigation-and-deep-linking "Direct link to Set up navigation and deep linking")

To handle the deep links returned by the server, set up navigation and deep linking in your app. For more information, see the following guides:

-   [React Navigation: Stack Navigator](https://reactnavigation.org/docs/stack-navigator)
-   [React Navigation: Deep Linking](https://reactnavigation.org/docs/deep-linking/)

After this setup, your `App.tsx` file should look like this:

```
import { NavigationContainer } from "@react-navigation/native";import { createNativeStackNavigator } from "@react-navigation/native-stack";import { HomeScreen } from "./Home";const prefix = "mydapp://"; // Example: mydapp://callbackconst Stack = createNativeStackNavigator();export default function App() {  const linking = {    prefixes: [prefix],    config: {      screens: {        Home: "callback",      },    },  };  return (    <NavigationContainer linking={linking}>      <Stack.Navigator initialRouteName="Home">        <Stack.Screen name="Home" component={HomeScreen} />      </Stack.Navigator>    </NavigationContainer>  );}
```

#### Install the package[​](/mavis/ronin-waypoint/reference/react-native-sdk#install-the-package "Direct link to Install the package")

Run the following command to install the SDK:

-   npm
-   Yarn
-   pnpm

```
npm install @sky-mavis/waypoint-native
```

```
yarn add @sky-mavis/waypoint-native
```

```
pnpm add @sky-mavis/waypoint-native
```

### Initialization[​](/mavis/ronin-waypoint/reference/react-native-sdk#initialization "Direct link to Initialization")

Initialize the client:

```
// Import the Waypoint classimport Waypoint from '@sky-mavis/waypoint-native';// Initialize the clientconst waypoint = new Waypoint(  '<waypoint_origin>',  '<client_id>',  '<rpc_url>',  <chain_id>);
```

Parameters:

-   `waypointOrigin`: the base URL of Ronin Waypoint for all API calls as `https://waypoint.roninchain.com`.
-   `client_id`: the client ID registered in the Developer Console.
-   `rpc_url`: the RPC endpoint through which you want to connect to Ronin. The example uses a public endpoint for the Saigon testnet: `https://saigon-testnet.roninchain.com/rpc`. For more information, see [RPC endpoints](/ronin/rpc/overview#rpc-endpoints).
-   `chain_id`: the ID of the Ronin chain you want to connect to. Use `2021` for the Saigon testnet and `2020` for the Ronin mainnet.

To capture the response, use the `waypoint.onResponse` method and `Waypoint.parseCallbackMessage` utility:

```
const route = useRoute();useEffect(() => {  if (route.path) waypoint.onResponse(route.path);}, [route.path]);const showDialogResult = async (url: string) => {  const response = Waypoint.parseCallbackMessage(url);  Alert.alert(    "Response",    `Success: ${response.success}\nState: ${response.state}\nMethod: ${response.method}\nAddress: ${response.address}\nData: ${response.data}`,  );};
```

## Usage[​](/mavis/ronin-waypoint/reference/react-native-sdk#usage "Direct link to Usage")

### User authorization and wallet connection[​](/mavis/ronin-waypoint/reference/react-native-sdk#user-authorization-and-wallet-connection "Direct link to User authorization and wallet connection")

Use the `authorize` function to sign in to a Ronin Waypoint account, connect the user's wallet, and return an ID token and the user's keyless wallet address.

```
authorize(state: string, redirectUri: string): Promise<AuthorizationResult>
```

Parameters:

-   `state`: a unique random identifier used to manage requests from the client to Ronin Waypoint.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).

Example:

```
const authorize = async () => {  const state = uuidv4();  const result = await waypoint.authorize(state, redirectUri);  showDialogResult(result);};
```

### Wallet interactions[​](/mavis/ronin-waypoint/reference/react-native-sdk#wallet-interactions "Direct link to Wallet interactions")

#### RON transfer[​](/mavis/ronin-waypoint/reference/react-native-sdk#ron-transfer "Direct link to RON transfer")

Use the `sendTransaction` function to send RON tokens to a recipient's address. The function returns a response containing the transaction hash.

```
sendTransaction(state: string, redirectUri: string, to: string, value: string): Promise<TransactionResult>
```

Parameters:

-   `state`: a unique random identifier used to manage requests from the client to Ronin Waypoint.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `to`: the recipient address.
-   `value`: the amount of RON to send, specified in wei (1 RON = 10^18 wei).

Example: transfer 0.1 RON to another address.

```
const sendTransaction = async () => {  const state = uuidv4();  const to = "0xD36deD8E1927dCDD76Bfe0CC95a5C1D65c0a807a";  const value = "100000000000000000";  const result = await waypoint.sendTransaction(state, redirectUri, to, value);  showDialogResult(result);};
```

#### Message signing[​](/mavis/ronin-waypoint/reference/react-native-sdk#message-signing "Direct link to Message signing")

Use the `personalSign` function to sign plain text messages with the user's wallet. The function returns a response containing the signature.

```
personalSign(state: string, redirectUri: string, message: string): Promise<SignatureResult>
```

Parameters:

-   `state`: a unique random identifier used to manage requests from the client to Ronin Waypoint.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `message`: the message to sign.

Example: sign the message accepting the terms and conditions.

```
const personalSign = async () => {  const state = uuidv4();  const message = "I accept the terms and conditions.";  const result = await waypoint.personalSign(state, redirectUri, message);  showDialogResult(result);};
```

#### Typed data signing[​](/mavis/ronin-waypoint/reference/react-native-sdk#typed-data-signing "Direct link to Typed data signing")

Use the `signTypedData` function to sign typed data structured according to the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) standard. The function returns a response containing the signature.

```
signTypedData(state: string, redirectUri: string, typedData: string): Promise<SignatureResult>
```

Parameters:

-   `state`: a unique random identifier used to manage requests from the client to Ronin Waypoint.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `typedData`: a JSON string that specifies the EIP-712 typed structured data to be signed by the user.

Example: sign typed data for an order on Axie Marketplace.

```
const signTypedData = async () => {  const state = uuidv4();  const typedData = `{"types":{"Asset":[{"name":"erc","type":"uint8"},{"name":"addr","type":"address"},{"name":"id","type":"uint256"},{"name":"quantity","type":"uint256"}],"Order":[{"name":"maker","type":"address"},{"name":"kind","type":"uint8"},{"name":"assets","type":"Asset[]"},{"name":"expiredAt","type":"uint256"},{"name":"paymentToken","type":"address"},{"name":"startedAt","type":"uint256"},{"name":"basePrice","type":"uint256"},{"name":"endedAt","type":"uint256"},{"name":"endedPrice","type":"uint256"},{"name":"expectedState","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"marketFeePercentage","type":"uint256"}],"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}]},"domain":{"name":"MarketGateway","version":"1","chainId":2021,"verifyingContract":"0xfff9ce5f71ca6178d3beecedb61e7eff1602950e"},"primaryType":"Order","message":{"maker":"0xd761024b4ef3336becd6e802884d0b986c29b35a","kind":"1","assets":[{"erc":"1","addr":"0x32950db2a7164ae833121501c797d79e7b79d74c","id":"2730069","quantity":"0"}],"expiredAt":"1721709637","paymentToken":"0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5","startedAt":"1705984837","basePrice":"500000000000000000","endedAt":"0","endedPrice":"0","expectedState":"0","nonce":"0","marketFeePercentage":"425"}}`;  const result = await waypoint.signTypedData(state, redirectUri, typedData);  showDialogResult(result);};
```

#### Contract function calls[​](/mavis/ronin-waypoint/reference/react-native-sdk#contract-function-calls "Direct link to Contract function calls")

Use the `callContract` function to execute a function on a smart contract. The function returns a response containing the transaction hash.

```
callContract(state: string, redirectUri: string, contractAddress: string, data: string, value: string): Promise<TransactionResult>
```

Parameters:

-   `state`: a unique random identifier used to manage requests from the client to Ronin Waypoint.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `contractAddress`: the address of the smart contract on which to execute the transaction.
-   `data`: the transaction data to send to the smart contract, encoded as a hex string.
-   `value`: the amount of RON in wei (1 RON = 10^18 wei) to send along with the transaction. For non-payable smart contracts, the value is `0x0`.

Example: allow another contract to spend 1 AXS on user's behalf.

```
const callContract = async () => {  const state = uuidv4();  const contractAddress = "0x3c4e17b9056272ce1b49f6900d8cfd6171a1869d";  const value = "0x0";  const data =    "0xa9059cbb000000000000000000000000edb40e7abaa613a0b06d86260dd55c7eb2df2447000000000000000000000000000000000000000000000000016345785d8a0000";  const result = await waypoint.callContract(    state,    redirectUri,    contractAddress,    data,    value,  );  showDialogResult(result);};
```

## Utilities[​](/mavis/ronin-waypoint/reference/react-native-sdk#utilities "Direct link to Utilities")

### Deep link parser[​](/mavis/ronin-waypoint/reference/react-native-sdk#deep-link-parser "Direct link to Deep link parser")

Use the `Waypoint.parseCallbackMessage(deeplink)` utility to parse a deep link returned by a function, and assign it to a `CallbackMessage` object.

```
Waypoint.parseCallbackMessage(deeplink);
```

### CallbackMessage type[​](/mavis/ronin-waypoint/reference/react-native-sdk#callbackmessage-type "Direct link to CallbackMessage type")

The `CallbackMessage` type represents the structure of the response returned by the SDK functions. It contains information about the response, including whether the operation was successful, the method called, and additional details such as the user's keyless wallet address, data like transaction hashes, and state.

```
type CallbackMessage = {  success: boolean;  state: string;  method: string;  address?: string;  data?: string;};
```

## Reference[​](/mavis/ronin-waypoint/reference/react-native-sdk#reference "Direct link to Reference")

### Function summary[​](/mavis/ronin-waypoint/reference/react-native-sdk#function-summary "Direct link to Function summary")

Function

Description

Use case

`authorize`

Signs user in to Ronin Waypoint and returns their wallet address.

Used for user sign-in and wallet connection.

`sendTransaction`

Sends RON tokens to a recipient address.

Supports in-game purchases or token transfers.

`signMessage`

Signs plain text messages with the user's wallet.

Proves wallet ownership or agreement to terms.

`signTypedData`

Signs structured data following the EIP-712 standard.

Useful for complex data structures, such as marketplace orders.

`callContract`

Executes functions on smart contracts.

Supports in-game ERC-20 token transfers, approvals, and other contract interactions.

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