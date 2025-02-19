# Search for matched account activities | Mavis Docs

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
    -   [Accounts](/api/web3/search-for-matched-account-activities)
        
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
    -   [Blocks](/api/web3/search-for-matched-account-activities)
        
    -   [Logs](/api/web3/search-for-matched-account-activities)
        
    -   [Collections](/api/web3/search-for-matched-account-activities)
        
    -   [Contracts](/api/web3/search-for-matched-account-activities)
        
    -   [Transactions](/api/web3/search-for-matched-account-activities)
        
    -   [Token transfers](/api/web3/search-for-matched-account-activities)
        
    -   [NFTs](/api/web3/search-for-matched-account-activities)
        
-   [Exchange Rate API](/api/exchange-rate/skymavis-exchangerate-api)
    

# Search for matched account activities

API Deprecation Notice

This API endpoint will be deprecated by the end of Q1 2025 as part of Skynet sunsetting. Please migrate to the Moralis alternative: [Get Wallet Transaction History](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-history)

POST 

## https://api-gateway.skymavis.com/skynet/ronin/web3/v2/accounts/:address/activities/search

Get an account's activities on the Ronin chain (Transfers, Approvals, Mint, Burn, Marketplace, Swap, Deposit, Staking, Add/Remove Liquidity).

## Request[​](/api/web3/search-for-matched-account-activities#request "Direct link to Request")

### 

Path Parameters

**address** stringrequired

Account address. Example: 0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3

-   application/json

### 

Body

**required**

Request body

**fromBlock** integer

**toBlock** integer

**activityTypes** string\[\]

**limit** string

**cursor** string

## Responses[​](/api/web3/search-for-matched-account-activities#responses "Direct link to Responses")

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
    

**address** string

**blockNumber** integer

**txIndex** integer

**txHash** string

**activity** string

**blockTime** integer

**

details

**

object

**

contract

**

object

**address** string

**name** string

**symbol** string

**standard** string

**creator** string

**createdAtBlock** integer

**verifiedName** string

**verifiedSymbol** string

**verifiedStandard** string

**

sends

**

object\[\]

-   Array \[
    

**from** string

**to** string

**amount** string

**tokenId** string

**

token

**

object

**contractAddress** string

**name** string

**symbol** string

**standard** string

**decimals** string

-   \]
    

**

receives

**

object\[\]

-   Array \[
    

**from** string

**to** string

**amount** string

**tokenId** string

**

token

**

object

**contractAddress** string

**name** string

**symbol** string

**standard** string

**decimals** string

-   \]
    

**

approvals

**

object\[\]

-   Array \[
    

**owner** string

**spender** string

**amount** string

**tokenId** string

**isAll** boolean

**

token

**

object

**contractAddress** string

**name** string

**symbol** string

**standard** string

**decimals** string

-   \]
    

**

orders

**

object\[\]

-   Array \[
    

**maker** string

**taker** string

**price** string

**

paymentToken

**

object

**contractAddress** string

**name** string

**symbol** string

**standard** string

**decimals** string

**

assets

**

object\[\]

-   Array \[
    

**tokenStandard** string

**

address

**

object

**contractAddress** string

**name** string

**symbol** string

**standard** string

**decimals** string

**tokenId** string

**amount** string

-   \]
    

-   \]
    

-   \]
    

**

paging

**

object

**nextCursor** string

```
{  "result": {    "items": [      {        "address": "string",        "blockNumber": 0,        "txIndex": 0,        "txHash": "string",        "activity": "string",        "blockTime": 0,        "details": {          "contract": {            "address": "string",            "name": "string",            "symbol": "string",            "standard": "string",            "creator": "string",            "createdAtBlock": 0,            "verifiedName": "string",            "verifiedSymbol": "string",            "verifiedStandard": "string"          },          "sends": [            {              "from": "string",              "to": "string",              "amount": "string",              "tokenId": "string",              "token": {                "contractAddress": "string",                "name": "string",                "symbol": "string",                "standard": "string",                "decimals": "string"              }            }          ],          "receives": [            {              "from": "string",              "to": "string",              "amount": "string",              "tokenId": "string",              "token": {                "contractAddress": "string",                "name": "string",                "symbol": "string",                "standard": "string",                "decimals": "string"              }            }          ],          "approvals": [            {              "owner": "string",              "spender": "string",              "amount": "string",              "tokenId": "string",              "isAll": true,              "token": {                "contractAddress": "string",                "name": "string",                "symbol": "string",                "standard": "string",                "decimals": "string"              }            }          ],          "orders": [            {              "maker": "string",              "taker": "string",              "price": "string",              "paymentToken": {                "contractAddress": "string",                "name": "string",                "symbol": "string",                "standard": "string",                "decimals": "string"              },              "assets": [                {                  "tokenStandard": "string",                  "address": {                    "contractAddress": "string",                    "name": "string",                    "symbol": "string",                    "standard": "string",                    "decimals": "string"                  },                  "tokenId": "string",                  "amount": "string"                }              ]            }          ]        }      }    ],    "paging": {      "nextCursor": "string"    }  }}
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
curl -L 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2/accounts/:address/activities/search' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'X-API-KEY: <API_KEY_VALUE>' \-d '{  "fromBlock": 0,  "toBlock": 0,  "activityTypes": [    "ContractInteraction",    "RONTransfer",    "ScatterDisperse",    "Transfer",    "KatanaSwap",    "Stake",    "Mint",    "Approve",    "ContractCreation",    "ClaimRewards",    "KatanaAddLiquidity",    "Unstake",    "Restake",    "Withdraw",    "KatanaRemoveLiquidity",    "Burn",    "Deposit",    "StakeRewards"  ],  "limit": "string",  "cursor": "string"}'
```

Request Collapse all

Base URL

Edit

https://api-gateway.skymavis.com/skynet/ronin/web3/v2

Auth

ApiKeyAuth

Parameters

address — pathrequired

Body required

{
  "fromBlock": 0,  "toBlock": 0,  "activityTypes": \[    "ContractInteraction",    "RONTransfer",    "ScatterDisperse",    "Transfer",    "KatanaSwap",    "Stake",    "Mint",    "Approve",    "ContractCreation",    "ClaimRewards",    "KatanaAddLiquidity",    "Unstake",    "Restake",    "Withdraw",    "KatanaRemoveLiquidity",    "Burn",    "Deposit",    "StakeRewards"  \],  "limit": "string",  "cursor": "string"
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
