On this page

# Handle wallets in a user account

## Overview[​](/mavis/ronin-waypoint/guides/handle-wallets#overview "Direct link to Overview")

This guide walks you through the ways to handle the different wallets associated with a user's Ronin Waypoint account, which includes keyless and EOA wallets.

## About user wallets[​](/mavis/ronin-waypoint/guides/handle-wallets#about-user-wallets "Direct link to About user wallets")

A user's Ronin Waypoint account includes the following information:

```
{  "account.wallet.default": "wallet.secondary", // Default wallet for the account  "account.wallet.identity": "0x123...", // Keyless wallet address  "account.wallet.identity.has_backup": "true", // Indicates if the keyless wallet has a backup  "account.wallet.secondary": "0x456...", // Optional EOA wallet linked to the account  "profile.name": "Lunacian" // User's profile name}
```

Key

Description

Use case

`account.wallet.default`

The default wallet for the user's account as set by the user on the [account management](https://accounts.skymavis.com/dashboard/account) page.

Use this wallet as the primary wallet for the user's account.

`account.wallet.identity`

The user's keyless wallet created either through the Ronin Waypoint page, or in the Ronin Wallet mobile app or browser extension.

Treat this wallet as the user's spending account for in-game transactions and purchases, enabling the user to purchase, swap, and mint assets across Ronin games. It also supports actions like collecting daily check-ins and sending tokens or NFTs to other users.

`account.wallet.identity.has_backup`

Indicates if a shard of the keyless wallet is backed up to the Sky Mavis server.

The service will prompt the user to continue the setup process if the wallet isn't backed up.

`account.wallet.secondary`

An optional EOA (externally owned account) wallet—a seed phrase Ronin Wallet that is present if the user linked it to their Ronin Waypoint account.

Treat this wallet as the user's savings account for staking tokens or NFTs for rewards and governance, and storing valuable assets.

`profile.name`

The user's display name that appears in games such as Axie Infinity.

Use this name to personalize the user experience.

### Ways to set up a keyless wallet[​](/mavis/ronin-waypoint/guides/handle-wallets#ways-to-set-up-a-keyless-wallet "Direct link to Ways to set up a keyless wallet")

If the user doesn't have a keyless `account.wallet.identity` wallet, they can set it up in one of the following ways:

-   By going through the Ronin Waypoint onboarding process on the [waypoint.roninchain.com](https://waypoint.roninchain.com) page.
-   By going through the onboarding process in a game or dApp that supports Ronin Waypoint. For example, [Axie Classic](https://hub.skymavis.com/games/classic) or the Ronin Wallet mobile app or browser extension. For information on using the Ronin Wallet, see [Creating Wallet with Email Address or Social Account](https://support.roninchain.com/hc/en-us/articles/14037076528283-Getting-Started-on-Ronin-Mobile-Wallet).

### Ways to link an EOA wallet[​](/mavis/ronin-waypoint/guides/handle-wallets#ways-to-link-an-eoa-wallet "Direct link to Ways to link an EOA wallet")

The user can link an `account.wallet.secondary` address to their Ronin Waypoint account by connecting it on the [account management](https://accounts.skymavis.com/dashboard/account) page. After linking, the user can't disconnect the wallet for the next 30 days. Similarly, if a user recently disconnected a Ronin Wallet address from their account, they can't reconnect the wallet to another account for the next 30 days. The user can, however, reconnect it to the old account immediately, as long as the account isn't linked to a different wallet yet.

### Setting a default wallet[​](/mavis/ronin-waypoint/guides/handle-wallets#setting-a-default-wallet "Direct link to Setting a default wallet")

The user has the option to set either keyless or EOA wallet as the default wallet for their account on the [account management page](https://accounts.skymavis.com/dashboard/account). The keyless wallet is the default wallet if the user doesn't link an EOA wallet.

## Prerequisites[​](/mavis/ronin-waypoint/guides/handle-wallets#prerequisites "Direct link to Prerequisites")

-   An app created in the [Developer Console](https://developers.skymavis.com/console/applications/).
-   Permission to use the Sky Mavis Account service. Request in the Developer Console under **your app > App Permission > Sky Mavis Account (OAuth 2.0) > Request Access**.
-   The user ID of the Ronin Waypoint account whose information you want to retrieve. You can retrieve this ID from the `sub` claim in the ID token after the user connects their Ronin Waypoint account to your app.

## Steps[​](/mavis/ronin-waypoint/guides/handle-wallets#steps "Direct link to Steps")

### Step 1. Retrieve user account details[​](/mavis/ronin-waypoint/guides/handle-wallets#step-1-retrieve-user-account-details "Direct link to Step 1. Retrieve user account details")

To retrieve user information and wallet addresses, send a GET request to the user profile endpoint with the user ID.

warning

Make sure to send the request *server-side* to protect your API key from being exposed and misused.

Request:

```
curl --location 'https://api-gateway.skymavis.com/account/v2/rpc/get-user-profile/{user_id}' \--header 'X-api-key: {YOUR_API_KEY}' \--header 'X-app-id: {YOUR_APP_ID}'
```

Parameters:

-   `{user_id}`: the user ID of the account you want to retrieve information for. For example, `1eda5fc0-76e1-6de4-8449-b3a0fde29125`.
-   `{YOUR_API_KEY}`: your app's API key from the [Developer Console](https://developers.skymavis.com/console/applications).
-   `{YOUR_APP_ID}`: your app's unique ID from the Developer Console.

Response:

```
{  "account.wallet.default": "wallet.secondary", // Default wallet for the account  "account.wallet.identity": "0x123", // Keyless wallet address  "account.wallet.identity.has_backup": "true", // Indicates if the keyless wallet has a backup  "account.wallet.secondary": "0x456...", // Optional EOA wallet linked to the account  "profile.name": "Lunacian" // User's profile name}
```

### Step 2. Handle wallets[​](/mavis/ronin-waypoint/guides/handle-wallets#step-2-handle-wallets "Direct link to Step 2. Handle wallets")

Depending on the number of wallet addresses associated with a Ronin Waypoint account, you can choose one of the following implementations:

Number of wallet addresses

Suggested implementation

One address

Query this wallet for all transactions and authentication needs.

Two addresses

Choose one of the following:

-   **Query both wallets**: retrieve information from both the `identity` and `secondary` wallets.
-   **Pick only one wallet**: prioritize the `identity` wallet over the `secondary` wallet.
-   **Let the user choose which wallet to use**: provide an interface allowing the user to select which wallet to use.
