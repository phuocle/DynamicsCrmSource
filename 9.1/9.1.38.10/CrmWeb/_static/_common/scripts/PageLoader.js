
function isTopAccessible()
{
    try
    {
        return !!window.top.location && !!window.top.location.href
    }
    catch(error)
    {
        return false
    }
}
function getInitActionQueue()
{
    try
    {
        var top = isTopAccessible() ? window.top : window.self;
        if(top.initActionQueue)
            return top.initActionQueue
    }
    catch(e)
    {
        if(e.number != -2146828218)
            throw e
    }
    return window.initActionQueue
}
function isActionQueueActive()
{
    return getInitActionQueue() != null
}
function destroyObject(o)
{
    for(var prop in o)
        try
        {
            o[prop] = null;
            delete o[prop]
        }
        catch(e)
        {
        }
}
function stopAndCleanExecuteActionQueue()
{
    window.initActionQueueStop = true;
    destroyObject(window.initActionQueue);
    destroyObject(window.initActionQueueParams);
    window.initActionQueue = null;
    window.initActionQueueParams = null
}
function executeActionQueue()
{
    if(window.initActionQueueStop)
        return;
    if(window.initActionQueue && window.initActionQueue.length > 0)
    {
        var action = window.initActionQueue.shift(),
            actionParams = window.initActionQueueParams[action];
        if(actionParams && actionParams.doNotUseSetTimeout)
        {
            executeAction(action);
            executeActionQueue()
        }
        else
            window.setTimeout(function()
            {
                executeAction(action);
                executeActionQueue()
            },0)
    }
    else
    {
        window.initActionQueue = null;
        window.initActionQueueParams = null;
        window.InitActionQueueCompletedTime = (new Date).getTime()
    }
}
var _actionQueuePerfMarkers = [];
function executeAction(action)
{
    var actionName = getFuncName(action);
    if(actionName == "")
        actionName = "anonymous";
    var st = (new Date).getTime();
    try
    {
        action()
    }
    catch(e)
    {
        if(e.number != -2146823277)
            throw e
    }
    var et = (new Date).getTime();
    _actionQueuePerfMarkers.push({name:actionName,startTime:st,endTime:et})
}
var numberOfChildRetries = 0;
function applyActionQueue(actionQueue)
{
    var actionQueueWnd = isTopAccessible() ? window.top : window.self,
        childWindow = actionQueueWnd != window,
        needsToStartActionQueue = false;
    if(!actionQueueWnd.initActionQueue)
        actionQueueWnd = window;
    if(!actionQueueWnd.initActionQueue)
    {
        actionQueueWnd.initActionQueue = [];
        needsToStartActionQueue = true
    }
    var insertAtIdx = -1;
    if(childWindow)
        for(var i = 0; i < actionQueueWnd.initActionQueue.length; i++)
            if(actionQueueWnd.initActionQueue[i] == actionQueueWnd.WaitForContents)
            {
                insertAtIdx = i;
                break
            }
    if(insertAtIdx >= 0)
        insertAtIdx++;
    else
        insertAtIdx = actionQueueWnd.initActionQueue.length;
    for(var i = 0; i < actionQueue.length; i++)
    {
        actionQueueWnd.initActionQueue.splice(insertAtIdx,0,actionQueue[i]);
        insertAtIdx++
    }
    if(childWindow)
        window.actionQueueInitializationComplete = true;
    needsToStartActionQueue && 
        actionQueueWnd.executeActionQueue();
    destroyObject(actionQueue);
    actionQueue = null
}
function executeFunctionDeferred(func,isHighPriority,fallbackToApplicationAddLoad)
{
    var actionQueue = getInitActionQueue();
    if(actionQueue)
        if(isHighPriority)
            Array.insert(actionQueue,0,func);
        else
            actionQueue.push(func);
    else
        if(fallbackToApplicationAddLoad && window.Sys && window.Sys.Application)
            window.Sys.Application.add_load(func);
        else
            window.setTimeout(func,0)
}
function getFuncName(func)
{
    var funcStr = func.toString();
    funcStr = funcStr.substring(0,funcStr.indexOf("("));
    return funcStr.replace(" ","").replace("function","").replace("(","").replace(")","")
}
var _isIE = navigator.appName == "Microsoft Internet Explorer",
    _isFirefox = navigator.appName == "Netscape";
function getFirefoxVersion()
{
    if(_isFirefox)
    {
        var browserAgentStr = navigator.userAgent,
            startIndex = browserAgentStr.indexOf("Firefox");
        if(startIndex >= 0)
        {
            startIndex += 8;
            var endIndex = browserAgentStr.indexOf(".",startIndex);
            if(endIndex == -1)
                return browserAgentStr.substr(startIndex);
            else
                return browserAgentStr.substr(startIndex,endIndex - startIndex)
        }
    }
    return "0"
}
function loadScriptAdv(sScriptSrc,sId,preloaderOutlookCookies,onLoad)
{
    if(preloaderOutlookCookies)
    {
        var oXmlHttpRequest = new XMLHttpRequest;
        oXmlHttpRequest.open("GET",sUrl,false);
        oXmlHttpRequest.send()
    }
    var cdnUrl = "";
    if(sScriptSrc.indexOf("/_static") == 0)
        cdnUrl = window.CDNURL.replace(/\/$/,"");
    var oScript = document.createElement("script");
    oScript.id = sId.toLowerCase();
    oScript.type = "text/javascript";
    oScript.src = cdnUrl + sScriptSrc;
    if(!_isFirefox || getFirefoxVersion() < 28 || sScriptSrc.indexOf("jquery-3.6.0.min.js") == -1 && sScriptSrc.indexOf("jquery.tmpl.min.js") == -1)
        oScript.async = true;
    oScript.onload = function()
    {
        var state = oScript.readyState;
        if(!state || /loaded|complete/.test(state))
        {
            oScript.setAttribute("loaded","true");
            onLoad && 
                onLoad(oScript)
        }
    };
    oScript.setAttribute("dynamic","true");
    document.body.appendChild(oScript);
    return oScript
}
function waitForJScriptsToLoad()
{
    if(!checkForAllJScriptsLoaded())
        isActionQueueActive() && getInitActionQueue().unshift(arguments.callee)
}
function checkForAllJScriptsLoaded()
{
    for(var arrScripts = document.getElementsByTagName("script"),
        i = 0; i < arrScripts.length; i++)
    {
        var script = arrScripts[i];
        if(script.type != "text/javascript")
            continue;
        if(_isIE)
        {
            if(!/loaded|complete/.test(script.readyState))
                return false
        }
        else
            if(script.getAttribute("dynamic") == "true")
                if(script.src && script.src != "undefined" && (script.src.indexOf("/msdyn_LoadNPSSurvey.js") != -1 || script.src.indexOf("/activity.js") != -1 || script.src.indexOf("/Marketing_CommandActions.js") != -1))
                    script.onload = null;
                else
                    if(script.getAttribute("loaded") != "true" && !/loaded|complete/.test(script.readyState))
                        return false;
                    else
                        script.onload = null
    }
    return true
}
function notifyOnAllScriptsLoaded(callback)
{
    if(!checkForAllJScriptsLoaded())
    {
        window.setTimeout(function()
        {
            notifyOnAllScriptsLoaded(callback)
        },0);
        return
    }
    callback && 
        callback()
}
function getScriptHashKey(scriptRelativePath)
{
    for(var hash = 0,
        i = 0; i < scriptRelativePath.length; i++)
    {
        char = scriptRelativePath.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
        hash = hash & hash
    }
    return Math.abs(hash)
}
var ScriptHashKeyPrefix = "SHK_",
    _loadedScriptsByHash = {},
    _jsProviderScripts = {};
function loadScriptsAdv(scriptRelativePaths)
{
    if(scriptRelativePaths == null || !(scriptRelativePaths instanceof Array))
        return;
    for(var ids = [],
        i = 0; i < scriptRelativePaths.length; i++)
    {
        var scriptRelativePath = scriptRelativePaths[i];
        if(scriptRelativePath != null && typeof scriptRelativePath == "string")
        {
            if(window.CDNURL != null)
            {
                var cdnUrl = window.CDNURL.replace(/\/$/,"");
                if(scriptRelativePath.indexOf(cdnUrl) != -1)
                    scriptRelativePath = scriptRelativePath.replace(cdnUrl,"")
            }
            var existingScriptFile = scriptRelativePath;
            if(window.VERSION_STAMP != null)
                existingScriptFile += "?ver=" + VERSION_STAMP;
            if(document.getElementById(existingScriptFile.toLowerCase()))
                continue;
            var scriptHashKey = getScriptHashKey(scriptRelativePath);
            if(!_loadedScriptsByHash[ScriptHashKeyPrefix + scriptHashKey])
            {
                ids.push(scriptHashKey);
                _loadedScriptsByHash[ScriptHashKeyPrefix + scriptHashKey] = true;
                _jsProviderScripts[scriptRelativePath.toLowerCase()] = true
            }
        }
    }
    var idsStr = ids.join("-"),
        jsProviderUrl = "/_common/JsProvider.ashx?ids=" + idsStr;
    if(window.VERSION_STAMP != null)
        jsProviderUrl += "&ver=" + VERSION_STAMP;
    if(typeof window.IS_LIVE != "undefined" && typeof window.IS_SPLA != "undefined" && typeof window.ORG_UNIQUE_NAME != "undefined" && (!window.IS_LIVE && !window.IS_SPLA && window.ORG_UNIQUE_NAME))
        jsProviderUrl = "/" + window.ORG_UNIQUE_NAME + jsProviderUrl;
    loadScriptAdv(jsProviderUrl,"group_" + idsStr);
    return getScriptHashKey(idsStr)
}
function isFileIncludedInJSProvider(scriptRelativePath)
{
    if(_jsProviderScripts[scriptRelativePath])
        return true;
    return false
}
function isScriptLoaded(scriptRelativePath)
{
    return _loadedScriptsByHash[ScriptHashKeyPrefix + getScriptHashKey(scriptRelativePath)] == true
}
function isScriptGroupLoaded(scriptGroupHash)
{
    return window["JsGroupLoadTime_" + scriptGroupHash] > 0
}
function waitForContentToStartLoading()
{
    var contentIframeElement = document.getElementById("contentIFrame");
    if(!contentIframeElement || contentIframeElement.contentWindow.document.readyState != "complete" && contentIframeElement.contentWindow.document.readyState != "loaded" || !contentIframeElement.contentWindow.location.pathname.endsWith("edit.aspx") || !contentIframeElement.contentWindow.actionQueueInitializationComplete)
        isActionQueueActive() && getInitActionQueue().unshift(arguments.callee)
}
function registerEvents(element,eventName,handler)
{
    if(element.addEventListener)
        element.addEventListener(eventName,handler,false);
    else
        element.attachEvent && 
            element.attachEvent("on" + eventName,handler)
}
function unregisterEvents(element,eventName,handler)
{
    if(element.removeEventListener)
        element.removeEventListener(eventName,handler,false);
    else
        element.detachEvent && 
            element.detachEvent("on" + eventName,handler)
}
var _preloadStartTime = (new Date).getTime();
function startLoadContent()
{
    loadCachedPage(document.getElementById("contentIFrame").getAttribute("contentSrc"));
    window.StartLoadContentPanel = (new Date).getTime()
}
var _preloadTimeout = 1500;
function loadCachedPage(contentUrl)
{
    try
    {
        var currentContentIframeSrc = document.getElementById("contentIFrame").getAttribute("src");
        if(currentContentIframeSrc !== "/_static/loading.htm")
            return;
        var wndToCheckForPreload = window.opener ? window.opener : window.top;
        if(wndToCheckForPreload)
        {
            wndToCheckForPreload = wndToCheckForPreload.masterWindow();
            var cUrl = wndToCheckForPreload.isPreloadComplete(contentUrl);
            if(!cUrl)
            {
                var timeNow = (new Date).getTime();
                if(timeNow - _preloadStartTime < _preloadTimeout)
                {
                    window.setTimeout(function()
                    {
                        loadCachedPage(contentUrl)
                    },50);
                    return
                }
                window.PreLoadContentPageWaitTimeout = (new Date).getTime()
            }
            else
                contentUrl = cUrl
        }
    }
    catch(e)
    {
    }
    window.InnerIFrameSrcChangeTimestamp = (new Date).getTime();
    document.getElementById("contentIFrame").contentWindow.location.replace(contentUrl);
    document.getElementById("crmContentPanel").setAttribute("currentContentId","contentIFrame")
}
(function(root,factory)
{
    if(typeof exports == "object")
        module.exports = factory(root);
    else
        if(typeof define == "function" && define.amd)
            define([],factory.bind(root,root));
        else
            factory(root)
})(typeof global != "undefined" ? global : this,function(root)
{
    if(root.CSS && root.CSS.escape)
        return root.CSS.escape;
    var cssEscape = function(value)
        {
            if(arguments.length == 0)
                throw new TypeError("`CSS.escape` requires an argument.");
            var string = String(value),
                length = string.length,
                index = -1,
                codeUnit,
                result = "",
                firstCodeUnit = string.charCodeAt(0);
            while(++index < length)
            {
                codeUnit = string.charCodeAt(index);
                if(codeUnit == 0)
                {
                    result += "\ufffd";
                    continue
                }
                if(codeUnit >= 1 && codeUnit <= 31 || codeUnit == 127 || index == 0 && codeUnit >= 48 && codeUnit <= 57 || index == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45)
                {
                    result += "\\" + codeUnit.toString(16) + " ";
                    continue
                }
                if(index == 0 && length == 1 && codeUnit == 45)
                {
                    result += "\\" + string.charAt(index);
                    continue
                }
                if(codeUnit >= 128 || codeUnit == 45 || codeUnit == 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122)
                {
                    result += string.charAt(index);
                    continue
                }
                result += "\\" + string.charAt(index)
            }
            return result
        };
    if(!root.CSS)
        root.CSS = {};
    root.CSS.escape = cssEscape;
    return cssEscape
})
