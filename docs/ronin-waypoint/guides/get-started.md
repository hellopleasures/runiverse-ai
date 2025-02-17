# Set up and configure Ronin Waypoint | Mavis Docs

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
        
    -   Resources
        
    -   [UI guidelines](/mavis/ronin-waypoint/reference/ui-guidelines)
    -   [Glossary](/mavis/ronin-waypoint/reference/glossary)
    -   [Showcases](/mavis/ronin-waypoint/reference/showcases)
    -   [FAQ](/mavis/ronin-waypoint/reference/faq)
    -   [Troubleshooting](/mavis/ronin-waypoint/reference/troubleshooting)
    -   Advanced integrations
        
    -   [Sky Mavis Account](/mavis/mavis-account/overview)
        

On this page

# Set up and configure Ronin Waypoint

## Overview[​](/mavis/ronin-waypoint/guides/get-started#overview "Direct link to Overview")

This guide walks you through the setup and configuration steps for integrating Ronin Waypoint into your game. You'll set up your app in the Developer Console, configure the Waypoint service settings, and register smart contracts for transaction policy.

## Prerequisites[​](/mavis/ronin-waypoint/guides/get-started#prerequisites "Direct link to Prerequisites")

-   See the [launch announcement](https://roninchain.com/blog/posts/introducing-ronin-waypoint) on the Ronin blog.
-   Visit the [Ronin Waypoint overview](/mavis/ronin-waypoint/overview) page to understand the service's features.
-   Explore the interactive [Ronin Waypoint playground](https://waypoint-playground.vercel.app/) to experience the service as a user.

## Steps[​](/mavis/ronin-waypoint/guides/get-started#steps "Direct link to Steps")

### Step 1. Sign up for Sky Mavis Account[​](/mavis/ronin-waypoint/guides/get-started#step-1-sign-up-for-sky-mavis-account "Direct link to Step 1. Sign up for Sky Mavis Account")

Register for a Sky Mavis Account to access our Developer Console:

1.  Go to the [Developer Console](https://developers.skymavis.com/console).
2.  Create an account using an email and password or social login.

Your Sky Mavis Account is ready to use.

### Step 2. Create an app in Developer Console[​](/mavis/ronin-waypoint/guides/get-started#step-2-create-an-app-in-developer-console "Direct link to Step 2. Create an app in Developer Console")

Next, create an app in the Developer Console:

1.  Log in to the [Developer Console](https://developers.skymavis.com/console) with your Sky Mavis Account.
    
2.  Click **Create application**.
    
3.  Enter your app's name, then click **Create**.
    
4.  Select the app you created, then click **Edit**, and then on the **Information** tab, fill in the **Website URL**, **Project Type** and **App Logo** fields.
    
    ![](/assets/images/dev-console-setup-info-73b2d4434c25cfa7c86cba39593b8095.png)
5.  Click **Save**.
    

### Step 3. Configure Ronin Waypoint settings[​](/mavis/ronin-waypoint/guides/get-started#step-3-configure-ronin-waypoint-settings "Direct link to Step 3. Configure Ronin Waypoint settings")

Required parameters

Redirect URI, Origin URI, and Client ID are required to initialize the Ronin Waypoint SDK. Failure to provide these parameters will result in errors during the integration process.

Complete the setup steps to configure Ronin Waypoint for your app:

1.  In the Developer Console, select your app, then **App Permission > Sky Mavis Account (OAuth 2.0) > Request Access**.
    
    ![](/assets/images/dev-console-id-request-e2f13dee635e52e468f9273189b4ecc9.png)
2.  When your request is approved, you see **OAuth 2.0** and **Waypoint Service** under **Products**. Ignore **OAuth 2.0**.
    
3.  Click **Waypoint Service**, then click **Edit**.
    
    ![](/assets/images/dev-console-settings-edit-f7bf829e2b1a103f08b8bb5e86af66b3.png)
4.  Configure your app for Ronin Waypoint:
    
    -   In **Token Expire Duration**, define the expiration period for the ID token that is returned after user authorization with Ronin Waypoint. The recommended duration is 1 hour and at least 5 minutes. After expiration, you need to re-authorize Ronin Waypoint to issue a new ID token with the set duration.
        
    -   In **Redirect URI** (required), define the URIs to which Ronin Waypoint navigates back after an authorization or transaction operation is completed. For mobile platforms, the redirect URI is your mobile app's deep link (for example, `mydapp://callback`).
        
        Make sure to allowlist your redirect URIs
        
        Share your redirect URIs with your Sky Mavis point of contact to allowlist them for your app.
        
    -   In **Origin URI** (required), define your app's origin URI. This is the URI that's authorized to access the Ronin Waypoint service. The origin URI must have either the `http` or `https` scheme.
        
    -   Click **Save**.
        
    
    ![](/assets/images/dev-console-settings-save-b79eb2d2b548ef692348e135350030ae.png)
    
    You have now configured the settings for your app, and are ready to integrate Ronin Waypoint.
    
5.  Copy the value from the **CLIENT ID (APPLICATION ID)** field. You will need this value for the next step.
    
    ![](/assets/images/dev-console-client-id-842753109ce608daffc985161a8eb210.png)

### Step 4. Register smart contracts[​](/mavis/ronin-waypoint/guides/get-started#step-4-register-smart-contracts "Direct link to Step 4. Register smart contracts")

For security reasons, we require you to register your smart contracts with Ronin Waypoint to enable users to interact with them. This process ensures that only authorized smart contracts can be accessed by users.

1.  Construct your game's smart contracts and deploy them to Ronin, or migrate your existing smart contracts from another chain.
2.  Give the contract addresses to your Sky Mavis point of contact.
3.  We will map the contracts to your app's client ID.

### Step 5. (Optional) Apply for gas sponsorship[​](/mavis/ronin-waypoint/guides/get-started#step-5-optional-apply-for-gas-sponsorship "Direct link to Step 5. (Optional) Apply for gas sponsorship")

You can apply for gas sponsorship to cover the transaction fees for your users. For more information, [Use gas sponsorship](/mavis/ronin-waypoint/guides/sponsor-gas).

## Next steps[​](/mavis/ronin-waypoint/guides/get-started#next-steps "Direct link to Next steps")

After the setup is complete, you can integrate Ronin Waypoint into your game using the SDK that best fits your platform:

-   [Ronin Waypoint Unity SDK](/mavis/ronin-waypoint/reference/unity-sdk/)
-   [Ronin Waypoint Web SDK](/mavis/ronin-waypoint/reference/web-sdk/web-standard)
-   [Ronin Waypoint Android SDK](/mavis/ronin-waypoint/reference/android-sdk)
-   [Ronin Waypoint iOS SDK](/mavis/ronin-waypoint/reference/ios-sdk)
-   [Ronin Waypoint React Native SDK](/mavis/ronin-waypoint/reference/react-native-sdk)

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis