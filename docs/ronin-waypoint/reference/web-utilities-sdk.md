# Deposit SDK (Web) | Mavis Docs

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
        
        -   [Deposit SDK (Web)](/mavis/ronin-waypoint/reference/web-utilities-sdk)
    -   Resources
        
    -   [UI guidelines](/mavis/ronin-waypoint/reference/ui-guidelines)
    -   [Glossary](/mavis/ronin-waypoint/reference/glossary)
    -   [Showcases](/mavis/ronin-waypoint/reference/showcases)
    -   [FAQ](/mavis/ronin-waypoint/reference/faq)
    -   [Troubleshooting](/mavis/ronin-waypoint/reference/troubleshooting)
    -   Advanced integrations
        
    -   [Sky Mavis Account](/mavis/mavis-account/overview)
        

On this page

# Deposit SDK (Web)

## Overview[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#overview "Direct link to Overview")

The Deposit SDK provides a simple way to integrate the Onramp service into your games/dapps. Allow users to purchase cryptocurrencies directly using fiat currencies via different payment methods such as card, bank transfer and other local payment methods through the Ronin Waypoint service.

![deposit-pop-up](/assets/images/deposit-pop-up-d968ec457237a7dc9e89bca255278596.png)![deposit-pop-up](/assets/images/deposit-transak-bdc194242cb9617efc0d5e53e88e5809.png)

## Prerequisites[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#prerequisites "Direct link to Prerequisites")

Permission to use the Sky Mavis Account service. For more information, see [Setup and configuration](/mavis/ronin-waypoint/guides/get-started#steps).

## Installation[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#installation "Direct link to Installation")

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

## Usage[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#usage "Direct link to Usage")

### Initialize[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#initialize "Direct link to Initialize")

```
import { Deposit } from "@sky-mavis/waypoint/deposit";const deposit = new Deposit({  clientId: "<client_id>",});
```

Parameters for the `Deposit` class include:

Field

Required?

Description

`clientId`

Required

The client ID from the Developer Console. For more information, see [Waypoint service settings](/mavis/ronin-waypoint/guides/get-started#steps).

`redirectUri`

Optional

Equivalent to the **REDIRECT URI** configured in [Waypoint service settings](/mavis/ronin-waypoint/guides/get-started#step-3-configure-ronin-waypoint-settings). Default is `window.location.origin`.

`theme`

Optional

The theme of the deposit modal. Available values are `light` and `dark`.

### Open the deposit pop-up[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#open-the-deposit-pop-up "Direct link to Open the deposit pop-up")

```
deposit.start();
```

The `start` method also accepts an object with the following parameters to pre-fill the user's information:

Field

Required?

Description

`walletAddress`

Optional

The Ronin wallet address of the customer.

`fiatAmount`

Optional

The initial amount of fiat currency you want the customer to buy cryptocurrency.

`fiatCurrency`

Optional

The code of the fiat currency you want the customer to buy cryptocurrency, e.g. `USD`, `EUR`, `VND` etc. For more information, see [Fiat Currency Coverage](/mavis/ronin-waypoint/reference/web-utilities-sdk#fiat-currency-coverage).

`cryptoCurrency`

Optional

The code of the cryptocurrency you want the customer to buy, e.g `RON`, `SLP`, `AXS` etc. For more information, see [Crypto Currency Coverage](/mavis/ronin-waypoint/reference/web-utilities-sdk#crypto-currency-coverage).

`email`

Optional

The email that will be used to identify your customer and their order.

warning

In the **Ramp provider**, when a user enters their wallet address manually, the address must include the `ronin:` prefix. For example, `ronin:1234567890abcdef1234567890abcdef12345678`.

The `start` method returns a `Promise` that resolves with an object containing the transaction details.

Field

Description

`provider`

The provider used for the transaction.

`transactionHash`

The hash of the transaction.

`fiatCurrency`

The fiat currency used in the transaction.

`cryptoCurrency`

The cryptocurrency used in the transaction.

`fiatAmount`

The amount of fiat currency involved in the transaction.

`cryptoAmount`

The amount of cryptocurrency involved in the transaction.

If the transaction is failed or cancelled, the `Promise` will reject with an object containing the error details.

Field

Description

`code`

The error code indicating the type of error.

`message`

The reason for the error or cancellation.

The deposit error codes are as follows:

Code

Description

`4001`

The user has closed the deposit pop-up.

`-32603`

The deposit transaction has failed.

### Sample code[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#sample-code "Direct link to Sample code")

Here is an example of how to implement *Onramp service* in your application:

#### Step 1: Initialize an instance from the `Deposit` class[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#step-1-initialize-an-instance-from-the-deposit-class "Direct link to step-1-initialize-an-instance-from-the-deposit-class")

```
import {Deposit} from '@sky-mavis/waypoint/deposit';export const deposit = new Deposit({  clientId: '4d24b378-aa36-4952-8faa-bda63c9a4932',});
```

#### Step 2: Open the deposit pop-up[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#step-2-open-the-deposit-pop-up "Direct link to Step 2: Open the deposit pop-up")

Live Editor

function StartDeposit() {
  const \[result, setResult\] \= useState(null);
  const handleDeposit \= async () \=> {    try {      const result \= await deposit.start({        fiatCurrency: 'USD',        cryptoCurrency: 'RON',        fiatAmount: 100,      });      setResult(result);    } catch (error) {      alert(error);    }  };
  return (    <LayoutBox\>      <Button label\="Deposit with Ronin Waypoint" onClick\={handleDeposit} />      {result && (        <span\>{\`You have deposited ${result.cryptoAmount} ${result.cryptoCurrency} to your Wallet\`}</span\>      )}    </LayoutBox\>  );
}

Result

Deposit with Ronin Waypoint

## Additional Information[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#additional-information "Direct link to Additional Information")

### Supported crypto currencies[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#supported-crypto-currencies "Direct link to Supported crypto currencies")

Details

Cryptocurrency

Code

Ronin

RON

Axie Infinity Shard

AXS

Smooth Love Potion

SLP

USD Coin

USDC

Ronin Wrapped Ether

WETH

PIXEL

PIXEL

BANANA

BANANA

Apeiros

APRS

### Supported fiat currencies[​](/mavis/ronin-waypoint/reference/web-utilities-sdk#supported-fiat-currencies "Direct link to Supported fiat currencies")

Details

Currency Name

Currency Code

US Dollar

USD

British Pound

GBP

Indian Rupee

INR

Euro

EUR

Swiss Franc

CHF

Swedish Krona

SEK

Polish Zloty

PLN

Norwegian Krone

NOK

Danish Krone

DKK

New Zealand Dollar

NZD

Mexican Peso

MXN

Canadian Dollar

CAD

Australian Dollar

AUD

Argentine Peso

ARS

Brazilian Real

BRL

Chilean Peso

CLP

Costa Rican Colon

CRC

Dominican Peso

DOP

Indonesian Rupiah

IDR

Israeli Shekel

ILS

Japanese Yen

JPY

South Korean Won

KRW

Malaysian Ringgit

MYR

Paraguayan Guarani

PYG

Peruvian Sol

PEN

Philippine Peso

PHP

Singapore Dollar

SGD

Fiji Dollar

FJD

Forint

HUF

Kenyan Shilling

KES

Moldovan Leu

MDL

Bermudian Dollar

BMD

Falkland Islands Pound

FKP

Czech Koruna

CZK

Iceland Krona

ISK

Romanian Leu

RON

Kwanza

AOA

Belize Dollar

BZD

Brunei Dollar

BND

Comoro Franc

KMF

Djibouti Franc

DJF

East Caribbean Dollar

XCD

Lari

GEL

Quetzal

GTQ

Lempira

HNL

Hong Kong Dollar

HKD

Tenge

KZT

Som

KGS

Malagasy Ariary

MGA

Kwacha

MWK

Ouguiya

MRU

Rial Omani

OMR

Kina

PGK

Rwanda Franc

RWF

Dobra

STN

Seychelles Rupee

SCR

Solomon Islands Dollar

SBD

Surinam Dollar

SRD

Lilangeni

SZL

Somoni

TJS

Pa’anga

TOP

Turkmenistan New Manat

TMT

Peso Uruguayo

UYU

Colombian Peso

COP

Taiwanese Dollar

TWD

Ghanaian Cedi

GHS

UAE Dirham

AED

Cambodian Riel

KHR

Serbian Dinar

RSD

Bahraini Dinar

BHD

Macedonian Denar

MKD

Kuwaiti Dinar

KWD

Armenian Dram

AMD

Netherlands Antilles Guilder

ANG

Azerbaijani Manat

AZN

Bahamian Dollar

BSD

Cayman Islands Dollar

KYD

Cape Verdean Escudo

CVE

BH Convertible Mark

BAM

Jordanian Dinar

JOD

Trinidad & Tobago Dollar

TTD

Panamanian Balboa

PAB

Algerian Dinar

DZD

Bulgarian Lev

BGN

Egyptian Pound

EGP

Sri Lankan Rupee

LKR

Nigerian Naira

NGN

Thai Baht

THB

Turkish Lira

TRY

Vietnamese Dong

VND

South African Rand

ZAR

Botswana Pula

BWP

Mozambican Metical

MZN

Lao Kip

LAK

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)
-   [web-sdk](/tags/web-sdk)
-   [web-utilities-sdk](/tags/web-utilities-sdk)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis