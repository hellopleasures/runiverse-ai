# Example Code | Mavis Docs

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

# Example Code

## Overview[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example#overview "Direct link to Overview")

This example demonstrates how to implement hybrid flow into a browser dapps developed with TypeScript or JavaScript. For a insight into the flow, see the [diagram](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction#how-it-works).

## Initialization[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example#initialization "Direct link to Initialization")

```
import { HeadlessClient } from '@sky-mavis/waypoint/headless';export const headlessClient = HeadlessClient.create({  chainId: 2021});
```

## User delegation authorization[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example#user-delegation-authorization "Direct link to User delegation authorization")

This is the [step 1.2](/mavis/ronin-waypoint/reference/web-sdk/web-headless/introduction#how-it-works) in the flow. The user must authorize the dapp to interact with their keyless wallet.

```
import { delegationAuthorize } from '@sky-mavis/waypoint';export const handleDelegationAuthorize = async () => {  return delegationAuthorize({    scopes: ['openid', 'wallet', 'email', 'profile'],    mode: 'popup',    clientId: '9b577a44-ce2f-44b2-a59d-dfcadfd1a93b'  });};
```

Live Editor

function Authorize() {
  const \[connectedAddress, setConnectedAddress\] \= useState(null);
  const handleAuthorizeWithRonin \= async () \=> {    const result \= await handleDelegationAuthorize();    if (result) {      setConnectedAddress(result.address);
      // Save the waypoint token to client storage      window.sessionStorage.setItem('WAYPOINT:TOKEN', result.token);      window.localStorage.setItem('WAYPOINT:CLIENTSHARD', result.clientShard);
      // Connect to user's keyless wallet      await headlessClient.connect({        waypointToken: result.token,        clientShard: result.clientShard      });
      console.log('Waypoint token:', result.token);      console.log('Client shard:', result.clientShard);    }  };
  if (!connectedAddress)    return (      <Button        label\='Delegation Authorize with Ronin Waypoint'        onClick\={handleAuthorizeWithRonin}      />    );
  return (    <LayoutBox\>      <span\>        You have authorized with Ronin Waypoint with address: {connectedAddress}      </span\>      <b\>See your waypoint token and client shard in the browser console</b\>    </LayoutBox\>  );
}

Result

Delegation Authorize with Ronin Waypoint

## Interact with the user's keyless wallet[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example#interact-with-the-users-keyless-wallet "Direct link to Interact with the user's keyless wallet")

### Sign a message[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example#sign-a-message "Direct link to Sign a message")

Signs plain text messages with the user's wallet.

Live Editor

function PersonalSign() {
  const \[message, setMessage\] \= useState(null);  const \[result, setResult\] \= useState(null);
  const handleSign \= async () \=> {    if (!headlessClient.isSignable())      return alert('Delegation authorize your wallet first!');
    const provider \= headlessClient.getProvider();
    const web3Provider \= new ethers.providers.Web3Provider(provider);    const signature \= await web3Provider.getSigner().signMessage(message);    setResult(signature);  };
  return (    <LayoutBox\>      <Input        value\={message}        onChange\={e \=> setMessage(e.target.value)}        placeholder\="Sign everything with Ronin Waypoint..."      />      <Button label\="Sign message" onClick\={handleSign} />      {result && <p\>{\`Signature: ${result}\`}</p\>}    </LayoutBox\>  );
}

Result

Sign message

### Make a transaction: Activate Atia's Blessing[​](/mavis/ronin-waypoint/reference/web-sdk/web-headless/example#make-a-transaction-activate-atias-blessing "Direct link to Make a transaction: Activate Atia's Blessing")

Sends a transaction to the [Atia Shrine smart contract](https://saigon-app.roninchain.com/address/0xd5c5afefad9ea288acbaaebeacec5225dd3d6d2b) to activate the "Atia's Blessing" feature in Axie Infinity games.

Live Editor

function ActivateAtia() {
  const handleActivate \= async () \=> {    if (!headlessClient.isSignable())      return alert('Delegation authorize your wallet first!');
    const provider \= headlessClient.getProvider();
    const web3Provider \= new ethers.providers.Web3Provider(provider);    const accounts \= await web3Provider.listAccounts();
    const contract \= new ethers.Contract(      Atia\_ADDRESS,      activateAtiaABI,      web3Provider.getSigner(),    );
    try {      await contract.activateStreak(accounts\[0\]);      alert(\`Atia's Blessing activated!\`);    } catch (error) {      alert(error);    }  };
  return <Button label\={\`Activate Atia's Blessing\`} onClick\={handleActivate} />;
}

Result

Activate Atia's Blessing

**Tags:**

-   [ronin-waypoint](/tags/ronin-waypoint)
-   [web-sdk](/tags/web-sdk)
-   [example](/tags/example)
-   [waypoint-headless](/tags/waypoint-headless)

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis