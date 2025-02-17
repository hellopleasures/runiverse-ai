# Ronin Waypoint Android SDK | Mavis Docs

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

# Ronin Waypoint Android SDK

## Overview[​](/mavis/ronin-waypoint/reference/android-sdk#overview "Direct link to Overview")

The Ronin Waypoint Android SDK lets developers integrate the account and wallet features of the Ronin Waypoint service into Android apps developed with Kotlin. After the integration, users can sign in to your game with their Ronin Waypoint account and connect their keyless wallet for instant in-game transactions.

Usage

-   All functions of the SDK return a string in the format of the deep link schema that you registered in the [Developer Console](https://developers.skymavis.com/console/applications). For example, `mydapp://callback`.
-   To parse deep links returned by the SDK, use the [Deep link parser](/mavis/ronin-waypoint/reference/android-sdk#deep-link-parser) utility or implement your own parser.

GitHub repository: [skymavis/waypoint-android](https://github.com/skymavis/waypoint-android).

## Features[​](/mavis/ronin-waypoint/reference/android-sdk#features "Direct link to Features")

-   Authorize users: let users sign in to your app with Ronin Waypoint and connect wallet.
-   Send transactions: transfer RON, ERC-20 tokens, and make contract calls for in-game transactions.
-   Sign messages and typed data: prove ownership of a wallet or sign structured data.

## Prerequisites[​](/mavis/ronin-waypoint/reference/android-sdk#prerequisites "Direct link to Prerequisites")

-   [Android API level 24](https://developer.android.com/about/versions/nougat) or later.
-   An app created in the [Developer Console](https://developers.skymavis.com/console/applications/).
-   Permission to use the Sky Mavis Account service. Request in the Developer Console under **your app > App Permission > Sky Mavis Account (OAuth 2.0) > Request Access**.
-   A client ID that you can find in the Developer Console under **Products > Waypoint Service > CLIENT ID (APPLICATION ID)**.
-   A redirect URI registered in the Developer Console under **Products > Waypoint Service > REDIRECT URI**.

For more information about the initial setup, see [Get started](/mavis/ronin-waypoint/guides/get-started).

## Example app[​](/mavis/ronin-waypoint/reference/android-sdk#example-app "Direct link to Example app")

The Android SDK includes an example app that demonstrates the SDK features. To run the app, clone the [skymavis/waypoint-android](https://github.com/skymavis/waypoint-android) repository, then open the project in Android Studio.

Make sure to fill in the client ID and redirect URI that you registered in the [Developer Console](https://developers.skymavis.com/console/applications).

## Setup[​](/mavis/ronin-waypoint/reference/android-sdk#setup "Direct link to Setup")

### Installation[​](/mavis/ronin-waypoint/reference/android-sdk#installation "Direct link to Installation")

#### Import the library[​](/mavis/ronin-waypoint/reference/android-sdk#import-the-library "Direct link to Import the library")

1.  In your Android project, create a `libs` directory.
2.  Download the [Ronin Waypoint Android SDK](https://github.com/skymavis/waypoint-android/releases) release package and extract the contents into `libs`.
3.  In your app's `build.gradle` file, add the following dependency:

```
dependencies {    implementation files("libs/waypoint-0.1.0.aar")}
```

#### Configure Gradle[​](/mavis/ronin-waypoint/reference/android-sdk#configure-gradle "Direct link to Configure Gradle")

In `settings.gradle`, include the Maven repository URL:

```
maven {    url = uri("https://maven.pkg.github.com/skymavis/waypoint-android")}
```

Add the dependency to `build.gradle`:

```
dependencies {    implementation("com.skymavis.sdk:waypoint:0.1.0")}
```

#### Configure Android Manifest[​](/mavis/ronin-waypoint/reference/android-sdk#configure-android-manifest "Direct link to Configure Android Manifest")

Update your app's `AndroidManifest.xml` file with the redirect URI that you registered in the Developer Console:

```
<intent-filter android:label="waypoint.open">    <action android:name="android.intent.action.VIEW" />    <category android:name="android.intent.category.DEFAULT" />    <category android:name="android.intent.category.BROWSABLE" />    <!-- Accepts URIs that begin with "deeplinkSchema://callback -->    <data android:scheme="${deeplink_Schema}" android:host="callback" /></intent-filter>
```

### Initialization[​](/mavis/ronin-waypoint/reference/android-sdk#initialization "Direct link to Initialization")

Initialize the client:

```
// Testnet configurationval redirectUri = "mydapp://callback"val clientId = "{YOUR_CLIENT_ID}"val waypointOrigin = "https://waypoint.roninchain.com"val chainId = 2021val rpcUrl = "https://saigon-testnet.roninchain.com/rpc"client = Waypoint(    waypointOrigin,    clientId,    rpcUrl,    chainId)
```

Parameters:

-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `clientId`: the client ID registered in the Developer Console.
-   `waypointOrigin`: the base URL of Ronin Waypoint for all API calls as `https://waypoint.roninchain.com`.
-   `chainId`: the ID of the Ronin chain you want to connect to. Use `2021` for the Saigon testnet and `2020` for the Ronin mainnet.
-   `rpcUrl`: the RPC endpoint through which you want to connect to Ronin. The example uses a public endpoint for the Saigon testnet: `https://saigon-testnet.roninchain.com/rpc`. For more information, see [RPC endpoints](/ronin/rpc/overview#rpc-endpoints).

## Usage[​](/mavis/ronin-waypoint/reference/android-sdk#usage "Direct link to Usage")

### User authorization and wallet connection[​](/mavis/ronin-waypoint/reference/android-sdk#user-authorization-and-wallet-connection "Direct link to User authorization and wallet connection")

Use the `authorize` function to sign the user up or log in with the Ronin Waypoint service and connect the user's wallet. The function opens the Ronin Waypoint login page. After the user authenticates, Ronin Waypoint redirects back to your app and returns an ID token and the user's wallet addresses, which includes the keyless wallet address and optional EOA (externally owned account) wallet address, if the user connected one on the [account management site](https://accounts.skymavis.com/dashboard/account). For more information about the response format, see [authorization response](/mavis/ronin-waypoint/reference/android-sdk#authorization-response).

```
fun authorize(context: Context, redirectUri: String): String
```

Parameters:

-   `context`: the Android context of the app.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).

Example:

```
// Request IDval state = client.authorize(context, redirectUri)// Parse the URI and create a Result object containing the response datavar result = Result.from(uri)println("Is success: ${result.isSuccess}")println("Method: ${result.method}")println("Address: ${result.address}")println("Secondary address: ${result.secondaryAddress}")println("Data: ${result.data}")println("State: ${result.state}")
```

### Wallet interactions[​](/mavis/ronin-waypoint/reference/android-sdk#wallet-interactions "Direct link to Wallet interactions")

#### RON transfer[​](/mavis/ronin-waypoint/reference/android-sdk#ron-transfer "Direct link to RON transfer")

Use the `sendTransaction` function to send RON tokens to a recipient's address. The function returns a [transaction response](/mavis/ronin-waypoint/reference/android-sdk#transaction-response) containing the transaction hash.

```
fun sendTransaction(context: Context, redirectUri: String, to: String, value: String): String
```

Parameters:

-   `context`: the Android context of the app.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `to`: the recipient address.
-   `value`: the amount of RON to send, specified in wei (1 RON = 10^18 wei).

Example: transfer 0.1 RON to another address.

```
import com.skymavis.sdk.waypoint.Waypointimport com.skymavis.sdk.waypoint.Result// Recipient addressval to = "0xD36deD8E1927dCDD76Bfe0CC95a5C1D65c0a807a";// 0.1 RON in weival value = "1000000000000000000";// Request IDval state = client.sendTransaction(context, redirectUri, to, value);// Parse the URI and create a Result object containing the response datavar result = Result.from(uri)println("Is success: ${result.isSuccess}")println("Method: ${result.method}")println("Address: ${result.address}")println("Data: ${result.data}")println("State: ${result.state}")
```

#### Message signing[​](/mavis/ronin-waypoint/reference/android-sdk#message-signing "Direct link to Message signing")

Use the `signMessage` function to sign plain text messages with the user's wallet. The function returns a [transaction response](/mavis/ronin-waypoint/reference/android-sdk#transaction-response) containing the signature.

```
fun signMessage(context: Context, redirectUri: String, message: String): String
```

Parameters:

-   `context`: the Android context of the app.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `message`: the message to sign.

Example: sign the message accepting the terms and conditions.

```
// Message to signval message = "I accept the terms and conditions.";// Request IDval state = client.personalSign(context, redirectUri, message)// Parse the URI and create a Result object containing the response datavar result = Result.from(uri)println("Is success: ${result.isSuccess}")println("Method: ${result.method}")println("Address: ${result.address}")println("Data: ${result.data}")println("State: ${result.state}")
```

#### Typed data signing[​](/mavis/ronin-waypoint/reference/android-sdk#typed-data-signing "Direct link to Typed data signing")

Use the `signTypedData` function to sign typed data structured according to the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) standard, returning a [transaction response](/mavis/ronin-waypoint/reference/android-sdk#transaction-response) containing the signature.

```
fun signTypedData(context: Context, redirectUri: String, typedData: String): String
```

Parameters:

-   `context`: the Android context of the app.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `typedData`: a JSON string that specifies the EIP-712 typed structured data to be signed by the user.

Example: sign typed data for an order on Axie Marketplace.

```
// Typed data to signval typedData = """{"types":{"Asset":[{"name":"erc","type":"uint8"},{"name":"addr","type":"address"},{"name":"id","type":"uint256"},{"name":"quantity","type":"uint256"}],"Order":[{"name":"maker","type":"address"},{"name":"kind","type":"uint8"},{"name":"assets","type":"Asset[]"},{"name":"expiredAt","type":"uint256"},{"name":"paymentToken","type":"address"},{"name":"startedAt","type":"uint256"},{"name":"basePrice","type":"uint256"},{"name":"endedAt","type":"uint256"},{"name":"endedPrice","type":"uint256"},{"name":"expectedState","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"marketFeePercentage","type":"uint256"}],"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}]},"domain":{"name":"MarketGateway","version":"1","chainId":2021,"verifyingContract":"0xfff9ce5f71ca6178d3beecedb61e7eff1602950e"},"primaryType":"Order","message":{"maker":"0xd761024b4ef3336becd6e802884d0b986c29b35a","kind":"1","assets":[{"erc":"1","addr":"0x32950db2a7164ae833121501c797d79e7b79d74c","id":"2730069","quantity":"0"}],"expiredAt":"1721709637","paymentToken":"0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5","startedAt":"1705984837","basePrice":"500000000000000000","endedAt":"0","endedPrice":"0","expectedState":"0","nonce":"0","marketFeePercentage":"425"}}""";// Request IDval state = client.signTypedData(context, redirectUri, typedData)// Parse the URI and create a Result object containing the response datavar result = Result.from(uri)println("Is success: ${result.isSuccess}")println("Method: ${result.method}")println("Address: ${result.address}")println("Data: ${result.data}")println("State: ${result.state}")
```

#### Contract function calls[​](/mavis/ronin-waypoint/reference/android-sdk#contract-function-calls "Direct link to Contract function calls")

Use the `callContract` function to execute a function on a smart contract, returning a [transaction response](/mavis/ronin-waypoint/reference/android-sdk#transaction-response) containing the transaction hash.

```
fun callContract(context: Context, redirectUri: String, contractAddress: String, data: String, value: String): String
```

Parameters:

-   `context`: the Android context of the app.
-   `redirectUri`: the redirect URI registered in the [Developer Console](https://developers.skymavis.com/console/applications).
-   `contractAddress`: the address of the smart contract to interact with.
-   `data`: the transaction data to send to the smart contract, encoded as a hex string.
-   `value`: the amount of RON in wei (1 RON = 10^18 wei) to send along with the transaction. For non-payable smart contracts, the value is `0x0`.

Example: allow another contract to spend 1 AXS on user's behalf.

```
// Contract addressval contractAddress = "0x3c4e17b9056272ce1b49f6900d8cfd6171a1869d";// Data for approving 1 AXSval data ="0x095ea7b30000000000000000000000006b190089ed7f75fe17b3b0a17f6ebd69f72c3f630000000000000000000000000000000000000000000000000de0b6b3a7640000";// No RON is being sentval value = "0x0"// Request IDval state = client.callContract(    context,    redirectUri,    contractAddress,    data,    value)// Parse the URI and create a Result object containing the response datavar result = Result.from(uri)println("Is success: ${result.isSuccess}")println("Method: ${result.method}")println("Address: ${result.address}")println("Data: ${result.data}")println("State: ${result.state}")
```

## Utilities[​](/mavis/ronin-waypoint/reference/android-sdk#utilities "Direct link to Utilities")

### Deep link parser[​](/mavis/ronin-waypoint/reference/android-sdk#deep-link-parser "Direct link to Deep link parser")

Use the `Result.from(uri: Uri)` function to parse a deep link returned by a function and assign it to a `Result` object. This object contains information about the response, including whether the operation was successful, the method called, and additional details such as the user's wallet addresses, data like transaction hashes, and state.

```
import com.skymavis.sdk.waypoint.Result// Parse the deep link URI into a Result objectvar result = Result.from(uri)// Access and print the parsed response detailsprintln("Is success: ${result.isSuccess}")println("Method: ${result.method}")println("Address: ${result.address}")println("Secondary address: ${result.secondaryAddress}")println("Data: ${result.data}")println("State: ${result.state}")
```

## Reference[​](/mavis/ronin-waypoint/reference/android-sdk#reference "Direct link to Reference")

### Function summary[​](/mavis/ronin-waypoint/reference/android-sdk#function-summary "Direct link to Function summary")

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

### Response types[​](/mavis/ronin-waypoint/reference/android-sdk#response-types "Direct link to Response types")

#### Authorization response[​](/mavis/ronin-waypoint/reference/android-sdk#authorization-response "Direct link to Authorization response")

Ronin Waypoint returns an authorization response after a user connects their wallet to your app.

##### Authorization success[​](/mavis/ronin-waypoint/reference/android-sdk#authorization-success "Direct link to Authorization success")

```
mydapp://callback?state=2ab49965-249a-48c7-896e-90967778383b&method=auth&version=1.4&type=success&data=ey...&address=0x16...ac&secondary_address=0x3f...d3
```

Response parameters:

-   `state`: a unique random identifier used to manage requests from the client to Ronin Waypoint.
-   `method`: the method used for the request (`auth`).
-   `version`: the version of the Ronin Waypoint service.
-   `type`: the response type (`success`).
-   `data`: the ID token that contains encoded user information.
-   `address`: the user's keyless wallet address.
-   `secondary_address`: the user's externally owned account (EOA) wallet address, if connected.

##### Authorization error[​](/mavis/ronin-waypoint/reference/android-sdk#authorization-error "Direct link to Authorization error")

```
mydapp://callback?state=84d18549-df10-451f-8235-184b594e3706&method=auth&version=1.4&type=fail&code=1000&message=%5BWALLET_USER_CANCEL%5D+User+rejected
```

Response parameters:

-   `type`: the response type (`fail`).
-   `code`: the error code.
-   `message`: a message describing the error.

#### Transaction response[​](/mavis/ronin-waypoint/reference/android-sdk#transaction-response "Direct link to Transaction response")

Ronin Waypoint returns a transaction response after a user sends a transaction, signs a message, signs typed data, or calls a contract on the blockchain.

##### Transaction success[​](/mavis/ronin-waypoint/reference/android-sdk#transaction-success "Direct link to Transaction success")

```
mydapp://callback?state=0bccde82-01d5-4403-90fd-f8edcfdd2ed4&method=send&version=1.4&type=success&data=0x3a..0d
```

Response parameters:

-   `state`: a unique random identifier used to manage requests from the client to Ronin Waypoint.
-   `method`: the method used for the request (`send` for transactions and `sign` for signing).
-   `version`: the version of the Ronin Waypoint service.
-   `type`: the response type (`success`).
-   `data`: the transaction hash.

##### Transaction error[​](/mavis/ronin-waypoint/reference/android-sdk#transaction-error "Direct link to Transaction error")

```
mydapp://callback?state=84d18549-df10-451f-8235-184b594e3706&method=send&version=1.4&type=fail&code=1000&message=%5BWALLET_USER_CANCEL%5D+User+rejected
```

Response parameters:

-   `type`: the response type (`fail`).
-   `code`: the error code.
-   `message`: a message describing the error.

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