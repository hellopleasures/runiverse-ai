On this page

# Troubleshooting

## Overview[​](/mavis/ronin-waypoint/reference/troubleshooting#overview "Direct link to Overview")

This page provides lists known issues and error codes that you may encounter when working with Ronin Waypoint

## Issues and solutions[​](/mavis/ronin-waypoint/reference/troubleshooting#issues-and-solutions "Direct link to Issues and solutions")

### Gas sponsorship compatibility[​](/mavis/ronin-waypoint/reference/troubleshooting#gas-sponsorship-compatibility "Direct link to Gas sponsorship compatibility")

#### Issue[​](/mavis/ronin-waypoint/reference/troubleshooting#issue "Direct link to Issue")

External indexers using [go-ethereum](https://geth.ethereum.org) may encounter issues with the Ronin Waypoint sponsored transaction type `0x64` (`100`), as it's not supported by default in go-ethereum.

#### Solution[​](/mavis/ronin-waypoint/reference/troubleshooting#solution "Direct link to Solution")

To resolve this issue, use the go-ethereum version from the Ronin protocol instead of the default version by adding the following line to your `go.mod` file:

```
replace github.com/ethereum/go-ethereum => github.com/axieinfinity/ronin v1.10.4-0.20240701101813-265bf110a20e
```

## SDK error codes[​](/mavis/ronin-waypoint/reference/troubleshooting#sdk-error-codes "Direct link to SDK error codes")

Error code

Message

1000

User rejected the operation

1001

Missing the message or typed data to sign

1003

Invalid payload

1004

Invalid authorization payload

2000

Unknown error

2001

Can't get user address

3000

Can't create the wallet

4000

Can't simulate contract request

4001

User rejected the request.
