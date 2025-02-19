# Get internal tx transfers | Mavis Docs

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
    
-   [Skynet Web3 API](/api/web3/skynet-web-3-api)
    
    -   [Introduction](/api/web3/skynet-web-3-api)
    -   [Accounts](/api/web3/get-internal-tx-transfers)
        
        -   [Search for matched account activities](/api/web3/search-for-matched-account-activities)
        -   [Get owned NFTs of an address](/api/web3/get-owned-nf-ts-of-an-address)
        -   [Get fungible token balances of an address, including the native token (RON)](/api/web3/get-fungible-token-balances-of-an-address-including-the-native-token-ron)
        -   [Get list of collections having NFTs belonging to an address](/api/web3/get-list-of-collections-having-nf-ts-belonging-to-an-address)
        -   [Get NFT list of an address and contract](/api/web3/get-nft-list-of-an-address-and-contract)
        -   [Get balance of an address and contract](/api/web3/get-balance-of-an-address-and-contract)
        -   [Get balances of an address by multiple contracts](/api/web3/get-balances-of-an-address-by-multiple-contracts)
        -   [Get token transfers of an address](/api/web3/get-token-transfers-of-an-address)
        -   [Get token transfers of an address with a contract](/api/web3/get-token-transfers-of-an-address-with-a-contract)
        -   [Get transactions of an address](/api/web3/get-transactions-of-an-address)
        -   [Get internal tx transfers](/api/web3/get-internal-tx-transfers)
    -   [Blocks](/api/web3/get-internal-tx-transfers)
        
    -   [Logs](/api/web3/get-internal-tx-transfers)
        
    -   [Collections](/api/web3/get-internal-tx-transfers)
        
    -   [Contracts](/api/web3/get-internal-tx-transfers)
        
    -   [Transactions](/api/web3/get-internal-tx-transfers)
        
    -   [Token transfers](/api/web3/get-internal-tx-transfers)
        
    -   [NFTs](/api/web3/get-internal-tx-transfers)
        
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Get internal tx transfers

API Deprecation Notice

This API endpoint will be deprecated by the end of Q1 2025 as part of Skynet sunsetting. Please migrate to the Moralis alternative: [Get native transactions by Wallet](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-transactions-by-wallet)

GET 

## https://api-gateway.skymavis.com/skynet/ronin/web3/v2/accounts/:address/internal\_txs/transfers

Retrieve internal RON token transfers triggered by smart contract interactions (OpCode CALL) for a given address. [https://docs.skymavis.com/ronin/skynet/guides/get-all-ron-transfers-via-internal-transactions-of-a-wallet-address](https://docs.skymavis.com/ronin/skynet/guides/get-all-ron-transfers-via-internal-transactions-of-a-wallet-address)

## Request[​](/api/web3/get-internal-tx-transfers#request "Direct link to Request")

### 

Path Parameters

**address** stringrequired

Account address. Example: 0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3

### 

Query Parameters

**limit** integer

Paging limit

**cursor** string

Paging cursor

## Responses[​](/api/web3/get-internal-tx-transfers#responses "Direct link to Responses")

-   200
-   500

OK

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**

result

**

object

**

items

**

object\[\]

-   Array \[
    

**transactionHash** string

**order** integer

**opcode** string

**type** string

**value** string

**input** string

**from** string

**to** string

**success** boolean

**error** string

**blockNumber** integer

**blockHash** string

**blockTime** integer

-   \]
    

**

paging

**

object

**nextCursor** string

```
{  "result": {    "items": [      {        "transactionHash": "string",        "order": 0,        "opcode": "string",        "type": "string",        "value": "string",        "input": "string",        "from": "string",        "to": "string",        "success": true,        "error": "string",        "blockNumber": 0,        "blockHash": "string",        "blockTime": 0      }    ],    "paging": {      "nextCursor": "string"    }  }}
```

internal error

-   application/json

-   Schema
-   Example (from schema)

**Schema**

**errorCode** integer

**message** string

```
{  "errorCode": 0,  "message": "string"}
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
curl -L 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2/accounts/:address/internal_txs/transfers' \-H 'Accept: application/json' \-H 'X-API-KEY: <API_KEY_VALUE>'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com/skynet/ronin/web3/v2

Auth

ApiKeyAuth

Parameters

address — pathrequired

Show optional parameters

limit — query

cursor — query

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
