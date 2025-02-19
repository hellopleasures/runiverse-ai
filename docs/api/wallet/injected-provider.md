On this page

# Ronin Injected Provider API

## Overview[​](/api/wallet/injected-provider#overview "Direct link to Overview")

This is a list of methods provided by the Ronin Wallet's Injected Provider API.

## Detecting the provider[​](/api/wallet/injected-provider#detecting-the-provider "Direct link to Detecting the provider")

### Browser extension[​](/api/wallet/injected-provider#browser-extension "Direct link to Browser extension")

When you install the Ronin Wallet browser extension, a `window.ronin` object is injected:

```
window.ronin = {  provider,};
```

The `window.ronin.provider` is an [EIP-1193 provider](https://eips.ethereum.org/EIPS/eip-1193).

### Mobile app[​](/api/wallet/injected-provider#mobile-app "Direct link to Mobile app")

When a web page is displayed in the in-app browser of the Ronin Wallet mobile app, an `isWalletApp` property is injected:

```
window.ronin = {  provider,};window.isWalletApp = true;
```

## Method reference[​](/api/wallet/injected-provider#method-reference "Direct link to Method reference")

### request()[​](/api/wallet/injected-provider#request "Direct link to request()")

Sends an RPC API request to the wallet and returns a promise that resolves to the result of the RPC method call.

```
interface RequestArguments {  method: string;  params?: unknown[] | object;}window.ronin.provider.request(args: RequestArguments): Promise<unknown>;
```

The following example shows how to send a sign request to the Ronin Wallet browser extension.

Live Editor

function PersonalSignRequest() {
  async function onClickSign() {    if (typeof window.ronin \=== "undefined") {      alert("Ronin Wallet extension is not installed");    }
    const provider \= window.ronin.provider;    const accounts \= await provider.request({ method: "eth\_requestAccounts" });    if (!accounts) {      return;    }    const signature \= await window.ronin.provider.request({      method: "personal\_sign",      params: \["Hello World", accounts\[0\]\],    });    alert(signature);  }
  return <button onClick\={onClickSign}\>Sign</button\>;
}

Result

Sign

### sendAsync()[​](/api/wallet/injected-provider#sendasync "Direct link to sendAsync()")

This method is similar to [`request()`](/api/wallet/injected-provider#request), but with JSON-RPC objects and a callback. This is a deprecated API and we suggest using `request()` instead.

```
interface JsonRpcRequest {  id: string | undefined  jsonrpc: '2.0'  method: string  params?: Array<any>}interface JsonRpcResponse {  id: string | undefined  jsonrpc: '2.0'  method: string  result?: unknown  error?: Error}window.ronin.provider.sendAsync(payload: JsonRpcRequest, callback: JsonRpcCallback)
```

## Event reference[​](/api/wallet/injected-provider#event-reference "Direct link to Event reference")

The Ronin provider emits events using the Node.js [EventEmitter](https://nodejs.org/api/events.html) API.

### accountsChanged[​](/api/wallet/injected-provider#accountschanged "Direct link to accountsChanged")

The provider emits this event when the list of approved accounts changes. This happens when the wallet is locked or when the user edits the session.

The result is equal to the response from `eth_requestAccounts` or `eth_accounts`.

```
window.ronin.provider.on('accountsChanged', (accounts: string) => void)
```

### chainChanged[​](/api/wallet/injected-provider#chainchanged "Direct link to chainChanged")

The provider emits this event when the current selected chain in the wallet changes.

The result is equal to the response from `eth_chainId`.

```
window.ronin.provider.on('accountsChanged', (chainId: number) => void)
```

## Error codes[​](/api/wallet/injected-provider#error-codes "Direct link to Error codes")

Status code

Name

Description

4001

User Rejected Request

The user rejected the request.

4100

Unauthorized

The requested method and/or account has not been authorized by the user.

4200

Unsupported Method

The provider does not support the requested method.

4900

Disconnected

The provider is disconnected from all chains.

4901

Chain Disconnected

The provider is not connected to the requested chain.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis
