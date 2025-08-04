
var map,
    searchManager,
    mapLocale,
    mapDiv,
    addressString = "",
    initialMapBounds,
    lastFocusedControl,
    mapDivTouchStartTime,
    mapDivClickIsValid = false,
    mapLoadMetricsStopwatch = new Mscrm.MetricsStopwatch("BingMapLoad"),
    mapLoadedCallbackName,
    request_num = 0,
    refreshBingMapTimeout,
    entityName = "",
    script;
function hideMap()
{
    if(Exists(mapDiv))
        mapDiv.style.display = "none"
}
function clearMap()
{
    if(Exists(map))
    {
        map.dispose();
        map = null
    }
}
function CallbackNullCheckAndExecute(callback)
{
    callback != null && callback != undefined && 
        callback()
}
function refreshbingmapcallback()
{
    if(Mscrm && Mscrm.TurboForm && Mscrm.TurboForm.Control && Mscrm.TurboForm.Control.PageManager && Mscrm.TurboForm.Control.PageManager.get_instance() && Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState() && Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().formData && refreshBingMapTimeout)
    {
        clearTimeout(refreshBingMapTimeout);
        RefreshBingMap(Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().formData)
    }
}
function RefreshBingMap(entityJson,mapLoadedCallback)
{
    mapLoadedCallbackName = mapLoadedCallback;
    entityName = entityJson != null && entityJson != "undefined" ? entityJson._entity != null && entityJson._entity != "undefined" ? entityJson._entity.TypeName : "" : "";
    switch(window.LOCID_MAP_MODE)
    {
        case "NotRendered":
            CallbackNullCheckAndExecute(mapLoadedCallback);
            return;
        case "RenderAsLink":
            var addressAnchor = document.getElementById("bingAddressLink");
            if(Exists(addressAnchor))
            {
                addressString = getAddress(entityJson,addressAnchor.getAttribute("addressField"));
                addressAnchor.setAttribute("href",getAddressUrl())
            }
            CallbackNullCheckAndExecute(mapLoadedCallback);
            break;
        case "RenderAsMap":
            if(typeof Microsoft == "undefined" || typeof Microsoft.Maps == "undefined" || typeof Microsoft.Maps.loadModule == "undefined")
            {
                refreshBingMapTimeout = window.setTimeout(function()
                {
                    RefreshBingMap(entityJson)
                },100);
                CallbackNullCheckAndExecute(mapLoadedCallback);
                return
            }
            RenderAsMap(entityJson,mapLoadedCallback);
            break
    }
}
function RenderAsMap(entityJson,mapLoadedCallback)
{
    setPerfMarkerTimestamp("StartRefreshMap");
    if(Exists(map))
    {
        var address = getAddress(entityJson,mapDiv.getAttribute("addressField"));
        if(address != addressString)
        {
            addressString = address;
            CallbackNullCheckAndExecute(mapLoadedCallback);
            if(IsStringAvailable(addressString))
                Microsoft.Maps.loadModule("Microsoft.Maps.Search",{callback:geoCodeAndRender});
            else
            {
                map.setView({bounds:initialMapBounds});
                map.entities.clear()
            }
        }
    }
    else
    {
        mapDiv = document.getElementById("mapcontrol_container");
        if(Exists(mapDiv))
        {
            addressString = getAddress(entityJson,mapDiv.getAttribute("addressField"));
            var bingMapKey = mapDiv.getAttribute("bingMapsApiKey"),
                geocodeRequest = document.location.protocol + "//dev.virtualearth.net/REST/v1/Locations?query=" + CrmEncodeDecode.CrmUrlEncode(addressString) + "&output=json&jsonp=geocodeRequestCallback&key=" + CrmEncodeDecode.CrmUrlEncode(bingMapKey);
            if(script)
            {
                script.parentNode.removeChild(script);
                script = null
            }
            script = document.createElement("script");
            script.setAttribute("type","text/javascript");
            script.setAttribute("src",geocodeRequest);
            mapLoadMetricsStopwatch.start();
            document.body.appendChild(script);
            RegisterBingMapControlForXrmUI(mapDiv)
        }
        else
            CallbackNullCheckAndExecute(mapLoadedCallback)
    }
}
function RegisterBingMapControlForXrmUI(mapDiv)
{
    var properties = [];
    properties["id"] = mapDiv.id;
    properties["controlComplexity"] = "true";
    Mscrm.Utilities.registerControlForXrmUI(mapDiv,properties)
}
function Exists(object)
{
    return typeof object != "undefined" && object != null
}
function IsStringAvailable(variable)
{
    return !(variable === undefined || IsNull(variable) || variable == "")
}
function getAddress(entityJson,addressField)
{
    if(!IsStringAvailable(addressField))
        return "";
    var address = Mscrm.InlineEditUtilitiesProxy.getDecodedValue(entityJson[addressField],true);
    if(address != null)
    {
        address = address.replace(/\r\n/g," ").replace(/\r/g," ").replace(/\n/g," ");
        return IsStringAvailable(address) ? address : ""
    }
    else
        return ""
}
function createSearchManager()
{
    if(!searchManager)
        searchManager = new Microsoft.Maps.Search.SearchManager(map)
}
function configureMap(location)
{
    if(Xrm.Internal.isTurboForm() && !Mscrm.TurboForm.Control.PageBootstrapper.hasPageLoaded || map == null)
        return;
    map.entities.clear();
    if(Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid() && Mscrm.CrmBrowser.get_currentBrowser().get_version() >= 29)
        map.setView({center:location,zoom:10});
    else
        map.setView({center:location,zoom:15});
    var pin1 = new Microsoft.Maps.Pushpin(location,null);
    map.entities.push(pin1);
    var infobox = new Microsoft.Maps.Infobox(location,{title:addressString,pushpin:pin1});
    infobox.setOptions({visible:true,showCloseButton:false});
    infobox.setMap(map);
    Microsoft.Maps.Events.addHandler(pin1,"mouseover",function()
    {
        infobox.setOptions({visible:true,showCloseButton:false})
    });
    Microsoft.Maps.Events.addHandler(pin1,"mouseout",function()
    {
        infobox.setOptions({visible:false,showCloseButton:false})
    })
}
function handleClick(e)
{
    openBingWebsite()
}
function handleViewChangeStart(e)
{
    var mapDiv = document.getElementById("mapcontrol_container");
    if(mapDiv != null)
        for(var images = mapDiv.getElementsByTagName("img"),
            i = 0; i < images.length; i++)
        {
            images[i].removeEventListener("touchstart",handleMapDivTouchStart);
            images[i].removeEventListener("touchmove",handleMapDivTouchMove)
        }
}
function handleViewChangeEnd(e)
{
    var mapDiv = document.getElementById("mapcontrol_container");
    if(mapDiv != null)
        for(var images = mapDiv.getElementsByTagName("img"),
            i = 0; i < images.length; i++)
        {
            images[i].addEventListener("touchstart",handleMapDivTouchStart,false);
            images[i].addEventListener("touchmove",handleMapDivTouchMove,false)
        }
}
function handleMapDivTouchStart(e)
{
    mapDivTouchStartTime = (new Date).getTime();
    mapDivClickIsValid = true
}
function handleMapDivTouchMove(e)
{
    mapDivClickIsValid = false
}
function handleMapDivTouchEnd(e)
{
    var currentTime = (new Date).getTime();
    mapDivClickIsValid && currentTime - mapDivTouchStartTime > 100 && 
        openBingWebsite();
    mapDivClickIsValid = false
}
function openBingWebsite()
{
    window.open(getAddressUrl())
}
function getAddressUrl()
{
    var addressParameter = Mscrm.InlineEditUtilitiesProxy.normalizeNewLineForTextArea(addressString);
    addressParameter = addressParameter.split("\r").join(" ");
    return "http://www.bing.com/maps/?where1=" + CrmEncodeDecode.CrmUrlEncode(addressParameter) + "&mkt=" + CrmEncodeDecode.CrmUrlEncode(window.LOCID_MAP_LOCALE)
}
function geoCodeAndRender(address)
{
    request_num = 0;
    mapLoadMetricsStopwatch.start();
    sendRequest()
}
function onGeocodeSuccess(result,userData)
{
    setPerfMarkerTimestamp("FinishGeocode");
    if(result)
    {
        var topResult = result.results && result.results[0];
        topResult && 
            configureMap(topResult.location)
    }
    request_num = 0;
    setPerfMarkerTimestamp("FinishRefreshMap");
    mapLoadMetricsStopwatch.stop();
    AddTelemetryLog("BingMapLoadSuccess",entityName,mapLoadMetricsStopwatch.get_elapsedMilliseconds())
}
function onGeocodeFailed(result,userData)
{
    setPerfMarkerTimestamp("FinishGeocode");
    setPerfMarkerTimestamp("FinishRefreshMap");
    if(Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari() && request_num <= 12)
    {
        request_num++;
        sendRequest()
    }
    else
    {
        request_num = 0;
        setPerfMarkerTimestamp("FinishRefreshMap");
        mapLoadMetricsStopwatch.stop()
    }
    AddTelemetryLog("BingMapLoadFail",entityName,mapLoadMetricsStopwatch.get_elapsedMilliseconds())
}
function geocodeRequestCallback(result)
{
    var mapDiv = document.getElementById("mapcontrol_container"),
        bingMapKey = mapDiv.getAttribute("bingMapsApiKey");
    if(result && result.resourceSets && result.resourceSets.length > 0 && result.resourceSets[0].resources && result.resourceSets[0].resources.length > 0)
    {
        var latitude = result.resourceSets[0].resources[0].point.coordinates[0],
            longitude = result.resourceSets[0].resources[0].point.coordinates[1],
            location = new Microsoft.Maps.Location(latitude,longitude),
            mapOptions = {credentials:bingMapKey,center:location,enableSearchLogo:false,showScalebar:false,showDashboard:false};
        map = new Microsoft.Maps.Map(mapDiv,mapOptions);
        CallbackNullCheckAndExecute(mapLoadedCallbackName);
        configureMap(location);
        AddMapEventHandlers();
        mapLoadMetricsStopwatch.stop();
        AddTelemetryLog("BingMapLoad",entityName,mapLoadMetricsStopwatch.get_elapsedMilliseconds())
    }
    else
    {
        lastFocusedControl = document.activeElement;
        map = new Microsoft.Maps.Map(mapDiv,{credentials:bingMapKey,showDashboard:false,enableSearchLogo:false,showScalebar:false});
        !IsNull(lastFocusedControl) && 
            lastFocusedControl.focus();
        CallbackNullCheckAndExecute(mapLoadedCallbackName);
        AddMapEventHandlers();
        Microsoft.Maps.loadModule("Microsoft.Maps.Search",{callback:geoCodeAndRender})
    }
}
function AddMapEventHandlers()
{
    if(window.UseTabletExperience)
    {
        Microsoft.Maps.Events.addHandler(map,"viewchangestart",handleViewChangeStart);
        Microsoft.Maps.Events.addHandler(map,"viewchangeend",handleViewChangeEnd);
        mapDiv.addEventListener("touchend",handleMapDivTouchEnd,false)
    }
    else
        Microsoft.Maps.Events.addHandler(map,"click",handleClick);
    initialMapBounds = map.getBounds()
}
function sendRequest()
{
    createSearchManager();
    var userData = {name:"Maps Test User",id:"XYZ" + request_num},
        request = {where:addressString,count:5,bounds:map.getBounds(),callback:onGeocodeSuccess,errorCallback:onGeocodeFailed,userData:userData};
    setPerfMarkerTimestamp("StartGeocode");
    searchManager.geocode(request)
}
function AddTelemetryLog(operationName,entityName,elapsedTime)
{
    try
    {
        var entityId = Xrm.Internal.getEntityCode(entityName),
            userRoleId = window.USER_ROLES.toString(),
            arguments = {};
        arguments["bingmapLoadElapsedTime"] = elapsedTime;
        arguments["bingmapVersion"] = Microsoft.Maps.Map.getVersion();
        arguments["entityId"] = entityId.toString();
        arguments["operationName"] = operationName;
        arguments["userRoleId"] = userRoleId;
        Mscrm.MetricsReporting.instance().addMetric("bingmapsload",arguments)
    }
    catch(e)
    {
    }
}
