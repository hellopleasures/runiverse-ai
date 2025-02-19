# eth_getLogs | Mavis Docs

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
    

# eth\_getLogs

POST 

## https://api-gateway.skymavis.com/rpc/

Returns an array of all logs matching a given filter object. For details, see [eth\_getLogs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs).

Parameters:

-   `object`: the transaction filter object that contains the following parameters:
-   `fromBlock` and `toBlock`: block numbers or the strings 'latest', 'earliest', 'pending'. The maximum allowed block range is 500 and log responses cannot exceed 10 MB or 10,000 logs. If `blockHash` is present in the filter criteria, then neither `fromBlock` nor `toBlock` are allowed.
-   `address`: the contract address or a list of addresses which the logs should originate from.
-   `topics`: an array of data which must be present in the logs.
-   `blockHash`: optional, restricts the logs returned to the single block referenced in the 32-byte hash

Returns:

-   `result`: an array of logs.

note

For "pending" blocks, the API forwards requests to RPC nodes, and returns back to clients the responses received from the RPC nodes.

Example:

```
"params": [    {      "blockHash": "0x1677a2e21a890075524a5bda614213cf8765062b98374a1c42fd0f220f066b0e",      "address": "0x80ea8489ae1f3f389af94bc3b95e461a6c19dd20"    }  ]
```

## Request[​](/api/rpc/eth-get-logs#request "Direct link to Request")

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

**params**object\[\]

-   Array \[
    

**blockHash** string

**address** string

-   \]
    

## Responses[​](/api/rpc/eth-get-logs#responses "Direct link to Responses")

-   200

Successful response

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**jsonrpc** string

**id** integer

**result** object\[\]

```
{  "jsonrpc": "2.0",  "id": 1,  "result": []}
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
curl -L 'https://api-gateway.skymavis.com/rpc/' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-d '{  "id": 1,  "jsonrpc": "2.0",  "method": "eth_getLogs",  "params": [    {      "blockHash": "0x1677a2e21a890075524a5bda614213cf8765062b98374a1c42fd0f220f066b0e",      "address": "0x80ea8489ae1f3f389af94bc3b95e461a6c19dd20"    }  ]}'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com/rpc

Parameters

apikey — queryrequired

Body

{
  "id": 1,  "jsonrpc": "2.0",  "method": "eth\_getLogs",  "params": \[    {      "blockHash": "0x1677a2e21a890075524a5bda614213cf8765062b98374a1c42fd0f220f066b0e",      "address": "0x80ea8489ae1f3f389af94bc3b95e461a6c19dd20"    }  \]
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
