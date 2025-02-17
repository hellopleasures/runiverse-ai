On this page

# Ronin Waypoint glossary

## Overview[​](/mavis/ronin-waypoint/reference/glossary#overview "Direct link to Overview")

This page defines key terms and concepts used in Ronin Waypoint.

## Terms[​](/mavis/ronin-waypoint/reference/glossary#terms "Direct link to Terms")

### Keyless wallet[​](/mavis/ronin-waypoint/reference/glossary#keyless-wallet "Direct link to Keyless wallet")

A wallet created without the need for the user or developer to handle private keys directly. The wallet's private key is generated using MPC technology and is never fully assembled in one place. The user signs in to the wallet using a recovery password.

### MPC[​](/mavis/ronin-waypoint/reference/glossary#mpc "Direct link to MPC")

MPC (multi-party computation) is a cryptographic technology used to generate private keys in a decentralized manner and sign transactions without ever fully assembling the private key in one place.

### MPC wallet[​](/mavis/ronin-waypoint/reference/glossary#mpc-wallet "Direct link to MPC wallet")

The same as the "keyless wallet." These two terms are used interchangeably.

### Private key[​](/mavis/ronin-waypoint/reference/glossary#private-key "Direct link to Private key")

In traditional blockchain wallets, a private key is a long string of random characters that must be kept secret. Anyone who has access to the private key can sign transactions on behalf of the wallet owner. In MPC, what we refer to as the "private key" is conceptually the same entity but it's never actually instantiated or held by any single party in its entirety.

### Private key shard[​](/mavis/ronin-waypoint/reference/glossary#private-key-shard "Direct link to Private key shard")

A piece of a private key held by one party in the MPC signing process.

### Public key[​](/mavis/ronin-waypoint/reference/glossary#public-key "Direct link to Public key")

A wallet address used for sending and receiving transactions. The public key is derived from the private key.

### Recovery password[​](/mavis/ronin-waypoint/reference/glossary#recovery-password "Direct link to Recovery password")

A user-defined password used to access the wallet each time the user initiates a new session or signs in on a different device. This password encrypts and decrypts the private key shard stored on the user's device whenever the user needs to sign a transaction. This password can't be recovered if lost, and it can't be reset.

### Ronin Waypoint account[​](/mavis/ronin-waypoint/reference/glossary#ronin-waypoint-account "Direct link to Ronin Waypoint account")

An account in the Sky Mavis system that the user creates when signing up through the Ronin Waypoint service or through a Ronin Wallet mobile app or browser extension. The account is represented by a unique user ID and a keyless wallet ("Ronin Waypoint wallet") address bound to the user ID. Optionally, the user can link an EOA Ronin Wallet address to their Ronin Waypoint account.

### Ronin Waypoint wallet[​](/mavis/ronin-waypoint/reference/glossary#ronin-waypoint-wallet "Direct link to Ronin Waypoint wallet")

The keyless wallet generated when a user signs up for a Ronin Waypoint account. The wallet is used for in-game transactions and purchases, such as buying, swapping, and minting assets across Ronin games.

### Sky Mavis Account[​](/mavis/ronin-waypoint/reference/glossary#sky-mavis-account "Direct link to Sky Mavis Account")

Same as the "Ronin Waypoint account."
