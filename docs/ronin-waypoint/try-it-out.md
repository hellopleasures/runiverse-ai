# Try it out | Mavis Docs

null!==e?t(e):window.matchMedia("(prefers-color-scheme: dark)").matches?t("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,t("light"))}(),function(){try{const n=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of n)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}(),document.documentElement.setAttribute("data-announcement-bar-initially-dismissed",function(){try{return"true"===localStorage.getItem("docusaurus.announcement.dismiss")}catch(t){}return!1}())

((e,r,s,u,d,m,l,h)=>{let c=document.documentElement,v=\["light","dark"\];function p(i){(Array.isArray(e)?e:\[e\]).forEach(y=>{let k=y==="class",S=k&&m?d.map(f=>m\[f\]||f):d;k?(c.classList.remove(...S),c.classList.add(i)):c.setAttribute(y,i)}),R(i)}function R(i){h&&v.includes(i)&&(c.style.colorScheme=i)}function a(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let i=localStorage.getItem(r)||s,y=l&&i==="system"?a():i;p(y)}catch(i){}})("class","theme","system",null,\["light","dark"\],null,true,true)

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
        

# Try it out

Test out Ronin Waypoint.

http://localhost:3000

1.  1
    
    Connect to Waypoint
    
    Connect

-   2
    
    Sign a Message
    
    Sign

Your address:

Your address:

Your signature:

  

-   Web
-   Unity
-   iOS
-   Android
-   React Native

```
  const onAuthorizeClicked = async () => {    const { address } = await waypointProvider.connect()  }  const onPersonalSignClicked = async () => {    const signature = await waypointProvider.request<`0x${string}`>({      method: 'personal_sign',      params: [        '0x5369676e20796f7572206669727374206d657373616765207769746820526f6e696e20576179706f696e7421',        address      ]    })  }
```

```
  private Task<string> WaitForResponse(string requestID)  {      var tcs = new TaskCompletionSource<string>();      Waypoint.ResponseReceived += Callback;      return tcs.Task;      void Callback(string state, string data)      {          if (state == requestID)          {              Waypoint.ResponseReceived -= Callback;              tcs.SetResult(data);          }      }  }  public async void OnAuthorizeClicked()  {      string scope = "email profile openid wallet";      _responseId = Waypoint.Authorize(scope);      string responseData = await WaitForResponse(_responseId);  }  public async void OnPersonalSignClicked()  {      string message = "Sign your first message with Ronin Waypint!";      _responseId = Waypoint.PersonalSign(message);      string responseData = await WaitForResponse(_responseId);  }
```

```
  @objc func onAuthorizeTapped() {      let state = UUID().uuidString.lowercased()      Task {          let responseData = await waypoint.authorize(state: state)      }  }  @objc func onPersonalSignTapped() {      let state = UUID().uuidString.lowercased()      let message = "Sign your first message with Ronin Waypint!"      Task {          let responseData = await waypoint.personalSign(state: state, message: message)      }  }
```

```
  fun onAuthorizeTapped() {    val state = UUID.randomUUID().toString().lowercase()      waypoint.authorizeAsync(context, state, null).thenAccept { responseData ->        // Handle the response data      }  }  fun onPersonalSignTapped() {    val state = UUID.randomUUID().toString().lowercase()    val message = "Sign your first message with Ronin Waypint!";      waypoint.personalSignAsync(context, state, message, null).thenAccept { responseData ->        // Handle the response data      }  }
```

```
  const onAuthorizeTapped = async () => {    const state = uuidv4();    const responseData = await waypoint.authorize(state);  };  const onPersonalSignTapped = async () => {    const state = uuidv4();    const message = 'Sign your first message with Ronin Waypint!';    const responseData = await waypoint.personalSign(state, message);  };
```

Was this page helpful?

Yes👍

No👎

[Powered by Happy React](https://happyreact.com/?utm_source=https://docs.skymavis.com&utm_medium=widget&utm_campaign=footer)

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis

Contact us

-   [Developer support](mailto:developersupport@skymavis.com)

Tools

-   [Ronin Faucet](https://faucet.roninchain.com/)

Copyright © 2025 Sky Mavis
