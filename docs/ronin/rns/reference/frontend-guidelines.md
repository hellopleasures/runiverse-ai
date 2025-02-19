# RNS frontend design guidelines | Mavis Docs

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

-   [Ronin Name Service](/ronin/rns)
    
    -   How to
        
    -   [Quickstart](/ronin/rns/guides/rns-quickstart)
    -   [Integrate RNS](/ronin/rns/guides/integrate-rns)
    -   Reference
        
    -   [RNS deployments](/ronin/rns/reference/deployments)
    -   [Frontend design guidelines](/ronin/rns/reference/frontend-guidelines)
    -   [Library reference](/ronin/rns/reference/rnsjs)
    -   [Glossary](/ronin/rns/reference/glossary)
    -   Explanation
        
    -   [About RNS integration levels](/ronin/rns/explanation/integration)
    -   [About namehashing](/ronin/rns/explanation/namehash)

On this page

# RNS frontend design guidelines

## Overview[​](/ronin/rns/reference/frontend-guidelines#overview "Direct link to Overview")

The Ronin Name Service (RNS) is a tool to simplify your users' experience. Here are guidelines and tools that help you make design choices when implementing RNS in your app.

## When to show RNS names[​](/ronin/rns/reference/frontend-guidelines#when-to-show-rns-names "Direct link to When to show RNS names")

In every instance a user might otherwise see a Ronin address or content hash, you can instead display an RNS name.

There are two primary use cases for allowing users to display RNS names in your dApp:

-   Replacing Ronin addresses with RNS names: When users explore the frontend of your dApp, wherever you would display a Ronin address, you can instead display an RNS name.
-   Resolving input fields: You can allow users to enter RNS names rather than Ronin addresses in input fields that expect Ronin addresses.

### Display RNS names instead of Ronin addresses[​](/ronin/rns/reference/frontend-guidelines#display-rns-names-instead-of-ronin-addresses "Direct link to Display RNS names instead of Ronin addresses")

When replacing Ronin addresses with RNS names, consider these best practices.

-   Indicate the domain tier: You can associate an RNS name with its domain tier, which is related to the domain's pricing. ![rns-tiers](/assets/images/rns-tiers-26c458c6a928544fc31d6f46d2175671.png)
    
-   Design a truncated version of the RNS name: RNS names can be very long. When you display a truncated version of the name, you should allow users to expand it on hover to see the full name.
    

### Provide an option to see Ronin addresses associated with RNS names[​](/ronin/rns/reference/frontend-guidelines#provide-an-option-to-see-ronin-addresses-associated-with-rns-names "Direct link to Provide an option to see Ronin addresses associated with RNS names")

If you're displaying the full RNS name or its truncated version, consider the following guidelines:

-   Always provide the user with a way to display the full Ronin address: You can use a pop-up or tooltip.
-   Display both RNS name and Ronin address at the same time: If the pop-up only shows the address, it's less friendly than showing both.
-   Allow the user to copy the full Ronin address: Provide the user with the option to copy the full address via a copy button or by selecting it. In this case, tooltips displaying the RNS name should stay visible and not disappear automatically.
-   Make it possible to automatically open the Ronin address in the Ronin Block Explorer: This in an optional guideline.
-   Display the balance amount, but only to the currently logged in user: This in an optional guideline.

### Display RNS names and Ronin addresses together[​](/ronin/rns/reference/frontend-guidelines#display-rns-names-and-ronin-addresses-together "Direct link to Display RNS names and Ronin addresses together")

Sometimes you might want to display both the RNS name and the Ronin address to which it resolves. Layouts like these can be useful in the following situations:

-   Your app displays the currently connected user: For the user badge, for instance, you could display both the RNS name and a short version of the Ronin address.
-   The user types an RNS name in the input field: This is described in greater detail in the [next section](/ronin/rns/reference/frontend-guidelines#resolve-input-fields).
-   Various high-risk situations: If the user wants to confirm who a given user or address is, or if they keep tapping an RNS name because they want to see the Ronin address in the pop-up, then replace the simple version (only the RNS name) with one that displays both the name and the address.

## Resolve input fields[​](/ronin/rns/reference/frontend-guidelines#resolve-input-fields "Direct link to Resolve input fields")

Input fields where a user is supposed to insert Ronin addresses should also accept and resolve RNS names. These inputs indicate that the user wants to interact with another user's Ronin address or contract.

To create the best experience, follow these guidelines:

-   Wait before resolving the RNS name: Wait until the user types the last top-level domain (TLD), such as `.ron`, before resolving the name. Or wait until 0.2-1.0 seconds after the user stops typing in the input field.
-   Don't overwrite the input field with the Ronin address: Show the resolved RNS name near the input field instead.
-   Always display both the RNS name and the Ronin address together: Do this after the name or address is successfully resolved.

## Other guidelines[​](/ronin/rns/reference/frontend-guidelines#other-guidelines "Direct link to Other guidelines")

### Cache and update RNS names[​](/ronin/rns/reference/frontend-guidelines#cache-and-update-rns-names "Direct link to Cache and update RNS names")

When your app needs to display many Ronin addresses or RNS names in the user interface, consider caching the RNS name after it's resolved and verified or after the user enters the name.

Your optimistic UI can safely display the names from cache in all non-risky situations, for example when your user is simply browsing, and not making decisions, especially risky ones, based on the information provided.

In all risky situations, however, or when the user is interacting with another RNS name or Ronin address, consider performing a live resolution. This gives you the latest information from the RNS registry.

Additionally, keep in mind that users may change their information at any time, which may not be tracked by the onchain registry, so you should periodically verify the information you cached.

### Display Ronin addresses appropriately[​](/ronin/rns/reference/frontend-guidelines#display-ronin-addresses-appropriately "Direct link to Display Ronin addresses appropriately")

Even when RNS names aren't available, here are some good practices to follow when displaying Ronin addresses in your app:

-   Always show the initial `0x...` prefix to indicate that it's an address.
-   In shorthand versions, display the first four and last four characters of the address. There are users who check the beginning of the name and others who check the end of the name, so this is good practice.
-   Always provide a way to display the full Ronin address. Use the same pop-up component that you use to display RNS names, or a tooltip style.
-   Allow the user to copy the full Ronin address. This means that tooltips might not be suitable.
-   Optionally, allow the user to automatically open the address in the Ronin Block Explorer.

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis