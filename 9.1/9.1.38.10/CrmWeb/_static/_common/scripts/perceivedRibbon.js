
function queryStringParameter(parameterName)
{
    var url = window.location.href;
    url = url.replace(/#/,"&");
    var i = url.indexOf("?");
    if(i >= 0)
    {
        parametersString = url.substring(i + 1);
        parameters = parametersString.split("&");
        for(var ind = 0; ind < parameters.length; ind++)
        {
            parameterPairs = parameters[ind].split("=");
            if(parameterPairs[0] == parameterName)
                return parameterPairs[1]
        }
    }
    return null
}
function cleanUpRibbon(ribbonElement)
{
    var cleanedUpRibbon = ribbonElement.innerHTML.replace(/currentRibbonElement="ribbonContainer0"/,'currentRibbonElement="ribbonContainer0" class=ms-crm-TopBarContainerForm');
    cleanedUpRibbon = cleanedUpRibbon.replace(/aria-describedby=[^\s^>^\/]*/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/aria-labelledby=[^\s^>^\/]*/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/aria-selected=[^\s^>^\/]*/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/title=\"[^\"]*\"/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/title=[^\s^>^\/]*/g,"");
    var l25 = cleanedUpRibbon.length;
    cleanedUpRibbon = cleanedUpRibbon.replace(/onclick=\"return false;\"/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/alt="[^"]*"/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/href=\"javascript:;\"/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/unselectable=\"on\"/g,"");
    cleanedUpRibbon = cleanedUpRibbon.replace(/id=[\"]?[^\"^\s^>^\/]+[\"]?/g,"");
    return cleanedUpRibbon
}
function addLightBox(ribbonElement,ribbonContent)
{
    var lightBoxContent = '<div id="perceivedRibbonLightBox" class="ms-crm-lightbox" style="top:' + ribbonElement.offsetTop + "px; left:" + ribbonElement.offsetLeft + "px; height:" + ribbonElement.offsetHeight + "px; width:" + ribbonElement.offsetWidth + 'px;"/>';
    ribbonContent += lightBoxContent;
    return ribbonContent
}
function AddInfoToTheKey(key)
{
    var extraqs = queryStringParameter("extraqs"),
        id = queryStringParameter("id"),
        newInfo = ":new-1";
    if(extraqs != null && (extraqs.indexOf("&id=") >= 0 || extraqs.indexOf("?id=") >= 0 || extraqs.indexOf("%26id%3d") >= 0 || extraqs.indexOf("%3fid%3d") >= 0 || extraqs.indexOf("%26id%3D") >= 0 || extraqs.indexOf("%3Fid%3D") >= 0) || id != null)
        newInfo = ":new-0";
    return key = key.replace(/:new-0/,newInfo)
}
function savePerceivedRibbon(ribbonId,key)
{
    key = AddInfoToTheKey(key);
    var res = false,
        ind = key.indexOf(":lang-");
    if(ind > 0)
    {
        var ribbonElement = document.getElementById(ribbonId);
        if(ribbonElement != null)
        {
            var ribbonContent = cleanUpRibbon(ribbonElement);
            ribbonContent = addLightBox(ribbonElement,ribbonContent);
            var subkey = key.substring(0,ind);
            try
            {
                var cachedKey = localStorage.getItem(subkey);
                if(cachedKey != null)
                {
                    var cachedRibbonContent = localStorage.getItem(cachedKey);
                    if(cachedRibbonContent != null)
                        if(key == cachedKey)
                            cachedRibbonContent != ribbonContent && 
                                localStorage.setItem(key,ribbonContent);
                        else
                        {
                            localStorage.removeItem(cachedKey);
                            localStorage.setItem(subkey,key);
                            localStorage.setItem(key,ribbonContent)
                        }
                }
                else
                {
                    localStorage.setItem(subkey,key);
                    localStorage.setItem(key,ribbonContent)
                }
            }
            catch(e)
            {
            }
        }
    }
    return res
}
function processLoadedRibbon()
{
    queryStringParameter("pagetype").toLowerCase() == "entityrecord" && isLocalStorageAvailable() && 
        savePerceivedRibbon("crmTopBar",PERCEIVED_RIBBON_KEY)
}
function isLocalStorageAvailable()
{
    try
    {
        return "localStorage"  in  window && window["localStorage"] !== null
    }
    catch(e)
    {
        return false
    }
}
function loadAndDisplayPerceivedRibbon(perceivedRibbonId,key)
{
    key = AddInfoToTheKey(key);
    var ribbonContent = localStorage.getItem(key);
    if(ribbonContent != null)
    {
        window.BeforePerceivedRibbonRenderingTimestamp = (new Date).getTime();
        document.getElementById(perceivedRibbonId).innerHTML = ribbonContent;
        window.setTimeout(function()
        {
            window.AfterPerceivedRibbonRenderingTimestamp = (new Date).getTime()
        },0)
    }
}
if(queryStringParameter("pagetype").toLowerCase() == "entityrecord")
{
    var perceivedRibbonId = "perceivedRibbonId";
    if(isLocalStorageAvailable() && typeof PERCEIVED_RIBBON_KEY != "undefined")
    {
        document.write("<div style='position:absolute;top:0;width:100%;display:block' id='" + perceivedRibbonId + "'></div>");
        loadAndDisplayPerceivedRibbon(perceivedRibbonId,PERCEIVED_RIBBON_KEY)
    }
}
