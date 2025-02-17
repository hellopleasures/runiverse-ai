# Delegate wallet permissions to the dapp | Mavis Docs

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
        
        -   [Web Standard](/mavis/ronin-waypoint/reference/web-sdk/web-standard)
        -   [Web Headless](/mavis/ronin-waypoint/reference/web-sdk/web-headless)
            
            -   [Introduction](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction)
            -   [Delegate permissions](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation)
            -   [HeadlessClient](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect)
            -   [Example Code](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example)
    -   [Android SDK](/mavis/ronin-waypoint/reference/android-sdk)
    -   [iOS SDK](/mavis/ronin-waypoint/reference/ios-sdk)
    -   [React Native SDK](/mavis/ronin-waypoint/reference/react-native-sdk)
    -   [Utilities SDKs](/mavis/ronin-waypoint/reference/utils-sdk)
        
    -   Resources
        
    -   [UI guidelines](/mavis/ronin-waypoint/reference/ui-guidelines)
    -   [Glossary](/mavis/ronin-waypoint/reference/glossary)
    -   [Showcases](/mavis/ronin-waypoint/reference/showcases)
    -   [FAQ](/mavis/ronin-waypoint/reference/faq)
    -   [Troubleshooting](/mavis/ronin-waypoint/reference/troubleshooting)
    -   Advanced integrations
        
    -   [Sky Mavis Account](/mavis/mavis-account/overview)
        

On this page

# Delegate wallet permissions to the dapp

## Usage[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#usage "Direct link to Usage")

### Delegation authorization[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#delegation-authorization "Direct link to Delegation authorization")

The user can authorize the dapp to interact with the keyless wallet, ensuring a seamless experience. You can use either the `popup` or `redirect` mode to obtain user authorization.

info

The `wallet` scope is *required* and is *automatically included* in the scopes parameter when using the `delegationAuthorize` method.

-   *Popup mode* opens a new window for a user to authorize. After the user authorizes, the service closes the window and returns the result.
    
    ```
    import { delegationAuthorize } from '@sky-mavis/waypoint';const result = await delegationAuthorize({  mode: 'popup'  clientId: '<YOUR_CLIENT_ID>',  scopes: ['email','openid','profile','wallet']});
    ```
    
-   *Redirect mode* redirects your site to the Ronin Waypoint authorization page. After the user authorizes, the service redirects back to your page with the *result in the URL*. For additional security, you can send a `state` parameter to the authorization page and get it back in the result.
    
    src/pages/auth/signIn.tsx
    
    ```
    import { delegationAuthorize } from '@sky-mavis/waypoint';...delegationAuthorize({  mode: 'redirect',  clientId: '<YOUR_CLIENT_ID>',  redirectUrl: '<YOUR_REDIRECT_URL>',  state: '<state>'  scopes: ['email','openid','profile','wallet']});...
    ```
    
    src/pages/auth/callback.tsx
    
    ```
    import { parseRedirectUrlWithShard } from '@sky-mavis/waypoint';import { useEffect } from 'react';...useEffect(() => {  const result = parseRedirectUrlWithShard().then((result) => {    // Store the clientShard and token  });}, []);...
    ```
    

Parameters for the `delegationAuthorize` method:

Field

Required?

Description

`clientId`

Required

The client ID from the Developer Console. For more information, see [Get started](/mavis/ronin-waypoint/guides/get-started#steps).

`mode`

Required

The authorization mode: `popup` or `redirect`.

`redirectUrl`

Optional

Equivalent to the **REDIRECT URI** configured in [Waypoint service settings](/mavis/ronin-waypoint/guides/get-started#step-3-configure-ronin-waypoint-settings). Default is `window.location.origin`. If you use the `redirect` mode, when the user authorizes, the service redirects back to *this URL with the authorization result*.

`state`

Optional

An optional parameter to send to the authorization page and get back in the result (*available in redirect mode only*).

`scopes`

Optional

The OAuth 2.0 scope. The `openid`, `profile`, `email`, `wallet` scopes are available for authorization. In the `delegationAuthorize` method, the `wallet` scope is required and is automatically included in the scopes.

More about scopes

This table describes the scopes available for authorization with Ronin Waypoint.

Scope

Type

Description

`openid`

OIDC

Informs the authorization server that your app is making an OpenID connect request. This is tied to the subject (`sub`) in the ID token, typically the user ID in Ronin Waypoint. Without this scope, the user can't authenticate.

`profile`

OIDC

Requests access to the user's profile name. Without this scope, your app can't access this information.

`email`

OIDC

Requests the user's email address. Without this scope, your app can't access this information.

`wallet`

Custom

An optional scope that allows your app to connect to the user's keyless wallet for blockchain transactions. Without this scope, your app can't access the wallet.

The `wallet` scope behavior:

-   If `wallet` is included, then when the user signs up or signs in, they must create a keyless wallet or connect the existing wallet. Ronin Waypoint returns the ID token and the user's wallet address. The client can access the wallet for blockchain interactions.
-   If `wallet` is not included, then when the user signs up or signs in, they can skip creating a keyless wallet. Ronin Waypoint returns the ID token that the client can use to verify the user's identity and issue an access token. The client can request the user to create a keyless wallet later.

Result fields for the `delegationAuthorize` or `parseRedirectUrlWithShard` method:

Field

Description

`token`

The Waypoint token.

`address`

The user's keyless wallet address.

`secondaryAddress`

The user's seed phrase address.

`state`

The state parameter sent to the authorization page and returned in the result (*available in redirect mode only*).

`clientShard`

The decrypted shard is used to connect to the keyless wallet.

### Optional: Store the clientShard and token in client storage[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#optional-store-the-clientshard-and-token-in-client-storage "Direct link to Optional: Store the clientShard and token in client storage")

Once the user authorizes the dApp, you can save the `clientShard` and `token` in client storage, like `sessionStorage`. This makes it easier to reconnect to the keyless wallet later without having to go through reauthorization again.

```
const handleStore = (clientShard: string, token: string) => {  sessionStorage.setItem("clientShard", clientShard);  sessionStorage.setItem("waypointToken", token);};
```

### Optional: Validate token expiration[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#optional-validate-token-expiration "Direct link to Optional: Validate token expiration")

The token returned from authorization has an expiration time based on the [configuration in the Waypoint service](/mavis/ronin-waypoint/guides/get-started#step-3-configure-ronin-waypoint-settings). You can validate the token's expiration time by following the guide below.

```
import { jwtDecode } from "jwt-decode";const validateToken = (waypointToken: string) => {  const decoded = jwtDecode(waypointToken);  return decoded.exp > Date.now() / 1000;};
```

## Next steps[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/delegation#next-steps "Direct link to Next steps")

Let's learn how to [connect to the user's keyless wallet](/mavis/ronin-waypoint/reference/web-sdk/web-headless/connect) using the `@sky-mavis/waypoint/headless` package.

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)
-   [web-sdk](/tags/web-sdk)
-   [headless-sdk](/tags/headless-sdk)
-   [delegation-permissions](/tags/delegation-permissions)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis