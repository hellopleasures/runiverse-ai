# Verify user identity | Mavis Docs

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

# Verify user identity

## Overview[​](/mavis/ronin-waypoint/guides/validate-token#overview "Direct link to Overview")

When the user authenticates with Ronin Waypoint, your game receives an *ID token*, which is a JSON web token (JWT) containing the user's information.

To ensure the user is who they claim to be, you need to verify the ID token by sending it to your backend server and performing the verification as described in this guide. Once verified, your backend server can issue an *access token* to the user, allowing them to interact with your backend server securely.

## Steps[​](/mavis/ronin-waypoint/guides/validate-token#steps "Direct link to Steps")

### Step 1. Obtain the public keys[​](/mavis/ronin-waypoint/guides/validate-token#step-1-obtain-the-public-keys "Direct link to Step 1. Obtain the public keys")

To verify the ID token, you need to obtain the public keys used to sign the token. These keys are issued by Sky Mavis and are located at [https://waypoint.roninchain.com/.well-known/jwks.json](https://waypoint.roninchain.com/.well-known/jwks.json).

By default, the signing key is rotated every 6 weeks. This means you need to programmatically or manually update your keys as they rotate. The previous key remains valid for 7 days after rotation to allow time for you to make the update.

The following example shows two public keys: the current key used to sign all new tokens, and the previous key that has been rotated out. The example is a JSON Web Key Set (JWKS) object that contains a `keys` array of JWK keys. Each key contains the key type (`kty`), the key use (`use`), the key ID (`kid`), the curve (`crv`), and the `x` and `y` coordinates of the public key.

```
{  "keys": [    {      "kty": "EC",      "use": "sig",      "kid": "018e085d-353d-73ac-8006-c43f376631f1",      "crv": "P-256",      "x": "9rB5mWnYHdobqkn8wYG4BzM7-uC5-QOokatjct3DQU8",      "y": "cECJGhKRW__VSuYS7jxtnMDArwkrHff_P9B8xHMMhYI"    },    {      "kty": "EC",      "use": "sig",      "kid": "018e085d-2e3f-7474-8007-21c0408ba33e",      "crv": "P-256",      "x": "CGlCzoxUjGUoGnryNnmzwzyLgzqwxaSrieb0ufxliiw",      "y": "pK3QizTfodV9CFGnV-hC9dLEzBw6Gp7zldWbMWPqbog"    }  ]}
```

### Step 2. Verify the ID token[​](/mavis/ronin-waypoint/guides/validate-token#step-2-verify-the-id-token "Direct link to Step 2. Verify the ID token")

#### Verify manually[​](/mavis/ronin-waypoint/guides/validate-token#verify-manually "Direct link to Verify manually")

To verify the ID token manually, follow these steps:

1.  Copy the JWT token from the response.
    
2.  Visit [JSON Web Token Verifier](https://jwt.davetonge.co.uk/).
    
3.  Paste the JWT token into the **Enter JWT** field.
    
4.  Paste the URL of the JWKs endpoint (`https://waypoint.roninchain.com/.well-known/jwks.json`) into the **Enter jwks endpoint or issuer domain** field.
    
5.  Review the decoded token to ensure it contains the expected user information.
    
    ![](/assets/images/jwt-verifier-3729196c1f2314eb64fdac812e3bbdfb.png)

#### Verify programmatically[​](/mavis/ronin-waypoint/guides/validate-token#verify-programmatically "Direct link to Verify programmatically")

1.  Get the client ID for your app from the [Developer Console](https://developers.skymavis.com/console/) under **Products > Waypoint Service > CLIENT ID (APPLICATION ID)**.
    
    ![](/assets/images/dev-console-id-key-values-35e055c1f39071ef0819ad0eb3e950e8.png)
2.  Use the following code snippets to verify the ID token in your backend server:
    

-   Go
-   Python
-   JavaScript

```
package mainimport (	"context"	"encoding/json"	"fmt"	"net/http"	"github.com/coreos/go-oidc/v3/oidc")var (	issuer   = "https://id.skymavis.com"  // Example client ID	clientID = "52b85454-dd6f-4b0f-8d7a-9e30a33e387e"	certsURL = "https://waypoint.roninchain.com/.well-known/jwks.json"	// The Application Audience (AUD) tag for your application	config = &oidc.Config{		ClientID: clientID,	}	keySet   = oidc.NewRemoteKeySet(context.TODO(), certsURL)	verifier = oidc.NewVerifier(issuer, keySet, config))// AuthWaypointRequest represents the request body for authentication with Sky Mavistype AuthWaypointRequest struct {	IDToken string `json:"id_token"`}// AuthWaypointResponse body for authentication with Sky Mavistype AuthWaypointResponse struct {	AccessToken string `json:"access_token"`	// Other information}// AuthWaypoint is a handler to verify the ID token and issue an access tokenfunc AuthWaypoint(w http.ResponseWriter, r *http.Request) {	req := &AuthWaypointRequest{}	if err := json.NewDecoder(r.Body).Decode(req); err != nil {		http.Error(w, "malformed request body", 400)		return	}	// Verify the ID token	id, err := verifier.Verify(r.Context(), req.IDToken)	if err != nil {		http.Error(w, fmt.Sprintf("ID token is not valid: %s", err.Error()), 400)		return	}	// Perform verification and issue an access token for id.Subject	json.NewEncoder(w).Encode(&AuthWaypointResponse{		AccessToken: "Access token for " + id.Subject,	})}func main() {	http.HandleFunc("POST /auth/waypoint", AuthWaypoint)	http.ListenAndServe(":3000", nil)}
```

Install the required packages:

```
pip install flask requests PyJWT flask_json
```

Create a new `.py` file and add the following code:

```
from flask import Flask, requestimport jwtimport base64import jsonfrom flask_json import JsonError, json_response, as_jsonapp = Flask(__name__)app.config['JSON_ADD_STATUS'] = False# Example client IDclient_id = "52b85454-dd6f-4b0f-8d7a-9e30a33e387e"# Ronin Waypoint domain informationissuer = "https://id.skymavis.com"certURI = "https://waypoint.roninchain.com/.well-known/jwks.json"jwks_client = jwt.PyJWKClient(certURI, headers={'User-Agent': 'Python3'})@app.post('/auth/waypoint')@as_jsondef auth_waypoint():    body = request.get_json(force=True)    try:        id_token = str(body['id_token'])    except (KeyError, TypeError, ValueError):        raise JsonError(description='Invalid value.')    signing_key = jwks_client.get_signing_key_from_jwt(id_token)    # Decode the JWT token to get payload and header    try:        data = jwt.api_jwt.decode_complete(            id_token,            key=signing_key.key,            algorithms=["RS256"],            audience=client_id,        )    except:        raise JsonError(description='Invalid ID Token.')    payload = data["payload"]    # Perform verification and issue an access token for payload['sub']    return dict(access_token="access token for: " + payload['sub'])if __name__ == '__main__':    app.run(port=3000)
```

```
const express = require("express");const jwksClient = require("jwks-rsa");const jwt = require("jsonwebtoken");// The Application Client ID (AUD) tag for your appconst clientId =  process.env.SKYMAVIS_CLIENT_ID || "52b85454-dd6f-4b0f-8d7a-9e30a33e387e";const issuer = process.env.SKYMAVIS_ISSUER || "https://id.skymavis.com";const certURL = "https://waypoint.roninchain.com/.well-known/jwks.json";const client = jwksClient({  jwksUri: certURL,});const getKey = (header, callback) => {  client.getSigningKey(header.kid, function (err, key) {    callback(err, key?.getPublicKey());  });};// authWaypoint is a handler to verify the ID token and issue an access tokenconst authWaypoint = (req, res, next) => {  const token = req.body.id_token;  // Ensure the incoming request has the ID token  if (!token) {    return res.status(403).send({      status: false,      message: "missing required cf authorization token",    });  }  jwt.verify(token, getKey, { audience: clientId }, (err, decoded) => {    if (err) {      return res        .status(403)        .send({ status: false, message: "invalid token" + err });    }    // Perform verification and issue an access token for decoded.sub    return res.send({      accessToken: "access token for " + decoded.sub,    });  });};const app = express();app.use(express.json());app.post("/auth/waypoint", authWaypoint);app.listen(3000);
```

### Step 3. Issue an access token[​](/mavis/ronin-waypoint/guides/validate-token#step-3-issue-an-access-token "Direct link to Step 3. Issue an access token")

After verifying the ID token, issue an access token to the user. The access token allows the user to interact with your backend server.

## See also[​](/mavis/ronin-waypoint/guides/validate-token#see-also "Direct link to See also")

[ID Token and Access Token: What's the Difference? (auth0.com)](https://auth0.com/blog/id-token-access-token-what-is-the-difference/)

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