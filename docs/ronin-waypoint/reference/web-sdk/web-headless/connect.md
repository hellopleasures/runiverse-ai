# HeadlessClient | Mavis Docs

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
            
            -   [Introduction](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction)
            -   [Delegate permissions](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation)
            -   [HeadlessClient](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect)
            -   [Example Code](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example)
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

# HeadlessClient

## Initialization[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#initialization "Direct link to Initialization")

```
import { HeadlessClient } from '@sky-mavis/waypoint/headless';export const headlessClient = HeadlessClient.create({  chainId: <chain_id>,});
```

Parameters for the `HeadlessClient.create` method:

Field

Required?

Description

`chainId`

Required

The chain ID of Ronin network. For example, choose `2020` for the Ronin mainnet or `2021` for Ronin testnet.

## Usage[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#usage "Direct link to Usage")

### Delegation Authorization[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#delegation-authorization "Direct link to Delegation Authorization")

After the user delegates their wallet permissions to the dApp, you can retrieve the `waypointToken` and `clientShard` from the URL parameters or the returned data. For more information, see [Delegate wallet permissions to the dapp](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#delegation-authorization).

### Connect to user's keyless wallet[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#connect-to-users-keyless-wallet "Direct link to Connect to user's keyless wallet")

Connect to the user's keyless wallet by using the `headlessClient.connect` method, providing both the `waypointToken` and the user's `clientShard`.

```
const { provider, address } = await headlessClient.connect({  waypointToken: "<waypoint_token>",  clientShard: "<client_shard>",});
```

Parameters for the `headlessClient.connect` method:

Field

Required?

Description

`waypointToken`

Required

The token from the [authorization step](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#delegation-authorization).

`clientShard`

Required

The client shard from the [authorization step](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#delegation-authorization).

Returns an object with the following fields:

Field

Description

`provider`

The [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible wallet provider.

`address`

The user's keyless wallet address.

### Optional: Handle reconnect to the keyless wallet[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#optional-handle-reconnect-to-the-keyless-wallet "Direct link to Optional: Handle reconnect to the keyless wallet")

-   When the user refreshes the page, you can reconnect to their keyless wallet using the `headlessClient.connect` method again. This method requires the `waypointToken` and the user's `clientShard`, both of which should be stored in client storage. For more information, see [Store the token and client shard](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#optional-store-the-clientshard-and-token-in-client-storage).
    
    ```
    const { provider, address } = await headlessClient.connect({  waypointToken: sessionStorage.getItem("waypointToken"),  clientShard: sessionStorage.getItem("clientShard"),});
    ```
    

Condition

The `waypointToken` must not be expired. If the token has expired, you will need to ask the user to [authorize](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#delegation-authorization) again to obtain a new `waypointToken`. For validating the token expiration, see [Validate token expiration](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#optional-validate-token-expiration).

### Optional: Combine with the Ethereum libraries[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#optional-combine-with-the-ethereum-libraries "Direct link to Optional: Combine with the Ethereum libraries")

After the user connects their wallet, they can interact with it using the wallet provider *without user confirmation*. Because the provider is compatible the [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) standard, you can use common Ethereum libraries to interact with the blockchain:

-   [Ethers.js (v5)](https://docs.ethers.io/v5/)
-   [web3.js](https://web3js.readthedocs.io/en/v1.10.0/)
-   [viem](https://viem.sh/)

The following are examples of how to use the provider with these libraries:

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
import { createPublicClient, createWalletClient, custom, http } from "viem";import { saigon } from "viem/chains";const publicClient = createPublicClient({  chain: saigon,  transport: http(),});const walletClient = createWalletClient({  chain: saigon,  transport: custom(provider),});
```

You can also use the SDK for standalone wallet operations:

```
const accounts = await provider.request<string[]>({  method: "eth_requestAccounts",});if (accounts.length) {  const balance = await provider.request<string>({    method: "eth_getBalance",    params: [accounts[0], "latest"],  });}
```

## Error handling[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#error-handling "Direct link to Error handling")

The `@sky-mavis/waypoint/headless` package provides `HeadlessClientError` class to handle errors. You can catch the error and display the message to the user.

```
import { HeadlessClientError } from "@sky-mavis/waypoint/headless";
```

You can see the list of error codes below:

Error Name

Error Code

Description

InvalidWaypointTokenError

\-1100

The waypoint token provided is invalid, which may affect the ability to locate the required service.

InvalidClientShardError

\-1101

The client shard specified is invalid, possibly due to incorrect formatting or an unrecognized shard.

UnsupportedTransactionTypeError

\-1102

The transaction type specified is not supported by the current system or configuration.

PrepareTransactionError

\-1103

An error occurred while preparing the transaction; check for missing fields or incorrect parameters.

UnsupportedChainIdError

\-1104

The Chain ID provided is not supported by this application, leading to potential compatibility issues.

AddressIsNotMatch

\-1105

The provided address does not match the expected format or value, which may indicate a configuration error.

ParseTypedDataError

\-1106

An error occurred while parsing typed data, possibly due to incorrect structure or unexpected values.

**Socket Errors**

OpenSocketError

\-2200

Failed to open the socket for communication, which may indicate a resource issue or configuration error.

ListenSocketMessageError

\-2201

An error occurred while listening for messages on the socket; verify that the socket is properly initialized.

MissingMessageError

\-2202

The expected message type (DATA or DONE) was not processed, which may disrupt communication protocols.

**WASM Init Errors**

WebAssemblyNotSupportedError

\-3300

The environment does not support WebAssembly, which is required for certain functionalities.

InstantiateError

\-3301

An error occurred during the instantiation of the WebAssembly module, possibly due to missing dependencies.

SetupGoWasmEnvError

\-3302

An error occurred while setting up the Go WebAssembly environment, which is necessary for execution.

CreateWasmInstanceError

\-3303

Failed to create an instance of the WebAssembly module, potentially due to resource limitations.

**WASM Action Errors**

HandlerNotFoundError

\-3304

No handler was found for the specified action, which may indicate a misconfiguration or missing implementation.

WasmGetProtocolResultError

\-3305

An error occurred while retrieving the protocol result from the WebAssembly context, possibly due to internal state issues.

WasmReceiveSocketDataError

\-3306

Failed to receive socket data in the WebAssembly module; check for network issues or handler errors.

WasmTriggerSignError

\-3307

An error occurred while attempting to trigger a sign action in the WebAssembly context.

WasmTriggerKeygenError

\-3308

An error occurred while triggering key generation in the WebAssembly environment.

**Action Errors**

AuthenticateError

\-4400

An error occurred during the authentication process, possibly due to invalid credentials or communication issues.

DecryptClientShardError

\-4401

Failed to decrypt the client shard, which may indicate issues with the encryption keys or algorithms used.

EncryptClientShardError

\-4402

An error occurred during the encryption of the client shard, potentially due to invalid input data.

BackupClientShardError

\-4403

An error occurred while attempting to back up the client shard, which may affect data recovery processes.

InvalidSignatureError

\-4404

The provided signature is invalid, which may compromise the integrity of the transaction or message.

SendTransactionError

\-4405

An error occurred while attempting to send the transaction; verify that all required fields are correctly populated.

UnknownError

\-9900

An unspecified error occurred, which may require further investigation to identify the root cause.

## Next steps[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect#next-steps "Direct link to Next steps")

See implementation examples of the `@sky-mavis/waypoint/headless` package in the [Example code](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example).

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)
-   [web-sdk](/tags/web-sdk)
-   [headless-sdk](/tags/headless-sdk)
-   [connect-wallet](/tags/connect-wallet)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis