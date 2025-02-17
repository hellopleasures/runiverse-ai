On this page

# Unity SDK v0.4.0 change log

## Overview[​](/mavis/ronin-waypoint/reference/unity-sdk/upgrading/changelog-0.4.0#overview "Direct link to Overview")

This guide provides information on the breaking changes introduced in the [Ronin Waypoint Unity SDK version 0.4.0](/mavis/ronin-waypoint/reference/unity-sdk/0.4.0).

## Breaking changes[​](/mavis/ronin-waypoint/reference/unity-sdk/upgrading/changelog-0.4.0#breaking-changes "Direct link to Breaking changes")

1.  Converted Ronin Waypoint SDK to the Unity Package Manager (UPM) format, allowing easier installation and version management. Users can now [install the SDK directly via a git URL](https://docs.unity3d.com/Manual/upm-ui-giturl.html) with [extended syntax](https://docs.unity3d.com/Manual/upm-git.html#syntax):
    
    ```
    https://github.com/skymavis/waypoint-unity.git#v0.4.0
    ```
    
    warning
    
    Remember to clear the old Ronin Waypoint plugin completely.
    
2.  Introduced new API methods to replace older, deprecated ones. Deprecated methods remain available for backward compatibility but will be removed in the next major release.
    
    -   `Waypoint.BindOnResponse(callback)` and `Waypoint.UnBindOnResponse(callback)` are deprecated. The `Waypoint.RespondReceived` C# event is the new recommended replacement.
    -   Additional deprecated methods and their replacements:
        -   `Waypoint.Init(sessionID, port)` ➔ `Waypoint.SetUp(WaypointSettings)`
        -   `Waypoint.Init(clientID, keepLinkSchema, isTestNet)` ➔ `Waypoint.SetUp(WaypointSettings)`
        -   `Waypoint.OnAuthorize()` ➔ `Waypoint.Authorize()`
        -   `Waypoint.OnGetIDToken()` ➔ `Waypoint.Authorize()`
        -   `Waypoint.OnPersonalSign(message, from)` ➔ `Waypoint.PersonalSign(message, from)`
        -   `Waypoint.OnSignTypeData(typedData, from)` ➔ `Waypoint.SignTypedData(typedData, from)`
        -   `Waypoint.SendTransaction(receiverAddress, value, from)` ➔ `Waypoint.SendNativeToken(receiverAddress, value, from)`
        -   `Waypoint.OnCallContract(contractAddress, data, value, from)` ➔ `Waypoint.WriteContract(contractAddress, humanReadableAbi, functionParameters, value, from)`
    
    warning
    
    Deprecated methods will be fully removed in version 0.5.0.
    
3.  Introduced `Waypoint.CleanUp()` to release managed resources when the SDK is no longer in use. This method is now required for proper cleanup of the SDK's resources.
