On this page

# FAQ

## Overview[​](/mavis/ronin-waypoint/reference/faq#overview "Direct link to Overview")

This page contains answers to frequently asked questions about Ronin Waypoint.

## FAQ[​](/mavis/ronin-waypoint/reference/faq#faq "Direct link to FAQ")

### What is Ronin Waypoint?[​](/mavis/ronin-waypoint/reference/faq#what-is-ronin-waypoint "Direct link to What is Ronin Waypoint?")

Ronin Waypoint is a service that lets you onboard both Web2 and Web3 users to your game. It includes the following components:

-   Account: a single sign-on authentication experience offering familiar social login options or email and password registration.
-   Wallet: a non-custodial wallet accessible on all devices, without the need to manage private keys.

### What if I just want to use the Ronin Waypoint account?[​](/mavis/ronin-waypoint/reference/faq#what-if-i-just-want-to-use-the-ronin-waypoint-account "Direct link to What if I just want to use the Ronin Waypoint account?")

You can let users sign in to your game with Ronin Waypoint without creating a wallet. To do that, ignore the `wallet` scope when authenticating the user, and just pass the `openid email profile` scopes. For more information, see [Scopes](/mavis/ronin-waypoint/reference/glossary#scopes).

The SDK will return an ID token with the user's profile information, such as the user ID, email, and profile name. You can use this information to create a user account in your game.

### What if my game already has an account service?[​](/mavis/ronin-waypoint/reference/faq#what-if-my-game-already-has-an-account-service "Direct link to What if my game already has an account service?")

If your game has its own account service, consider the following options:

-   Use the Ronin Waypoint keyless wallet as only a payment method for in-game purchases.
-   Treat Ronin Waypoint as another identity provider for your existing account service.

For more information, see [Link to account service](/mavis/ronin-waypoint/guides/link-waypoint).

### What are sponsored transactions?[​](/mavis/ronin-waypoint/reference/faq#what-are-sponsored-transactions "Direct link to What are sponsored transactions?")

Sponsored transactions are transactions where you pay the gas fees for your users transacting with your smart contracts. This feature is available through Ronin Waypoint. Sky Mavis sets up a payer wallet for your project and funds it with RON. You set eligibility criteria for your users to qualify for gas sponsorship. When a user interacts with your smart contract, Ronin Waypoint automatically applies sponsorship and charges the payer wallet.

### How do I retrieve the user's profile information?[​](/mavis/ronin-waypoint/reference/faq#how-do-i-retrieve-the-users-profile-information "Direct link to How do I retrieve the user's profile information?")

Using the user ID in the `sub` claim of an ID token, you can retrieve the user's profile information, such as the externally owned account (EOA) wallet address linked to the Ronin Waypoint account, or the user's profile name. For more information, see [Get user profile](/mavis/ronin-waypoint/guides/get-user-profile).

### Can users link other wallets to their Ronin Waypoint account?[​](/mavis/ronin-waypoint/reference/faq#can-users-link-other-wallets-to-their-ronin-waypoint-account "Direct link to Can users link other wallets to their Ronin Waypoint account?")

Users can link a seed-phrase Ronin Wallet to their Ronin Waypoint account on the [account management](https://accounts.skymavis.com/dashboard/account) page.

### Can my game access the user's social login type and ID from Ronin Waypoint?[​](/mavis/ronin-waypoint/reference/faq#can-my-game-access-the-users-social-login-type-and-id-from-ronin-waypoint "Direct link to Can my game access the user's social login type and ID from Ronin Waypoint?")

No, the Ronin Waypoint service doesn't provide the user's social login type and ID due to security reasons.
