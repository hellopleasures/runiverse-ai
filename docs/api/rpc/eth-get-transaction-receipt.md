# eth_getTransactionReceipt | Mavis Docs

null!==e?t(e):window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,t("light"))}(),function(){try{const n=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of n)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}(),document.documentElement.setAttribute("data-announcement-bar-initially-dismissed",function(){try{return"true"===localStorage.getItem("docusaurus.announcement.dismiss")}catch(t){}return!1}())

((e,t,s,c,a,l,r,o)=>{let i=document.documentElement,m=\["light","dark"\];function d(t){(Array.isArray(e)?e:\[e\]).forEach((e=>{let s="class"===e,c=a;s?(i.classList.remove(...c),i.classList.add(t)):i.setAttribute(e,t)})),function(e){o&&m.includes(e)&&(i.style.colorScheme=e)}(t)}try{let e=localStorage.getItem("theme")||"system";d("system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e)}catch(e){}})("class",0,0,0,\["light","dark"\],0,0,!0)

[

![Sky Mavis logo](/img/logo-dark.png)

](/)[Docs](/)[API](/api)[Blog](/blog)[Showcase](/showcase)

[

![Sky Mavis logo](/img/logo-dark.png)

](/)

-   [Docs](/)
-   [API](/api)
-   [Blog](/blog)
-   [Showcase](/showcase)
-   

← Back to main menu

-   [Overview](/api)
    
-   [Axie Experience Points API](/api/axp/axp-endpoints)
    
-   [Axie Infinity Origins API](/api/origins/origins-endpoints)
    
-   [Mavis Market Partner API](/api/mavis-market/mavis-market-partner-api)
    
-   [Mavis Store API](/api/mavis-store)
-   [Ronin Injected Provider API](/api/wallet/injected-provider)
-   [Ronin JSON-RPC API](/api/rpc/ronin-json-rpc)
    
    -   [eth\_blockNumber](/api/rpc/eth-block-number)
    -   [eth\_call](/api/rpc/eth-call)
    -   [eth\_chainId](/api/rpc/eth-chain-id)
    -   [eth\_getBalance](/api/rpc/eth-get-balance)
    -   [eth\_getBlockByHash](/api/rpc/eth-get-block-by-hash)
    -   [eth\_getBlockByNumber](/api/rpc/eth-get-block-by-number)
    -   [eth\_getBlockTransactionCountByHash](/api/rpc/eth-get-block-transaction-count-by-hash)
    -   [eth\_getBlockTransactionCountByNumber](/api/rpc/eth-get-block-transaction-count-by-number)
    -   [eth\_getLogs](/api/rpc/eth-get-logs)
    -   [eth\_getTransactionByBlockHashAndIndex](/api/rpc/eth-get-transaction-by-block-hash-and-index)
    -   [eth\_getTransactionByBlockNumberAndIndex](/api/rpc/eth-get-transaction-by-block-number-and-index)
    -   [eth\_getTransactionByHash](/api/rpc/eth-get-transaction-by-hash)
    -   [eth\_getTransactionReceipt](/api/rpc/eth-get-transaction-receipt)
    -   [ronin\_getTransactionBySenderAndNonce](/api/rpc/ronin-get-transaction-by-sender-and-nonce)
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# eth\_getTransactionReceipt

POST 

## https://api-gateway.skymavis.com/rpc/

Returns the receipt of a transaction by transaction hash.

Parameters:

-   `hash`: the hash of a transaction.

Returns:

-   `result`: a transaction object, or `null` when no transaction was found.
-   `blockHash`: the hash of the block where this transaction is in.
-   `blockNumber`: the block number where this transaction is in.
-   `contractAddress`: the contract address created, if the transaction was a contract creation, otherwise `null`.
-   `cumulativeGasUsed`: the total amount of gas used when this transaction was executed in the block.
-   `effectiveGasPrice`: the effective gas price of the transaction.
-   `from`: the address of the sender.
-   `gasUsed`: the amount of gas used by this specific transaction alone.
-   `logsBloom`: the bloom filter for light clients to quickly retrieve related logs.
-   `status`: either `1` (success) or `0` (failure).
-   `to`: the address of the receiver, or `null` when it's a contract creation transaction.
-   `transactionHash`: the hash of the transaction.
-   `transactionIndex`: the integer of the transactions index position in the block.
-   `type`: the type of the transaction.
-   `logs`: an array of log objects, which this transaction generated.

Example:

```
"params": [   "0xcf1911356099c562421c4ce7bc47707a39866094f9102cb891cf2cb0194d95d1"]
```

## Request[​](/api/rpc/eth-get-transaction-receipt#request "Direct link to Request")

### 

Query Parameters

**apikey** stringrequired

Your API key

-   application/json

### 

Body

**id** integer

**jsonrpc** string

**method** string

**params** string\[\]

## Responses[​](/api/rpc/eth-get-transaction-receipt#responses "Direct link to Responses")

-   200

Successful response

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**jsonrpc** string

**id** integer

**result** string

```
{  "jsonrpc": "2.0",  "id": 1,  "result": null}
```

-   curl
-   python
-   go
-   nodejs
-   ruby
-   csharp
-   php
-   java
-   powershell

-   CURL

```
curl -L 'https://api-gateway.skymavis.com/rpc/' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-d '{  "id": 1,  "jsonrpc": "2.0",  "method": "eth_getTransactionReceipt",  "params": [    "0xcf1911356099c562421c4ce7bc47707a39866094f9102cb891cf2cb0194d95d1"  ]}'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com/rpc

Parameters

apikey — queryrequired

Body

{
  "id": 1,  "jsonrpc": "2.0",  "method": "eth\_getTransactionReceipt",  "params": \[    "0xcf1911356099c562421c4ce7bc47707a39866094f9102cb891cf2cb0194d95d1"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis
