
var NpsConstants = {CloseNpsDialog:"closeNpsDialog",NPSUrlOrigin:"https://nps.onyx.azure.net",ResizeNpsDialog:"thankyouNpsDialog",Brand:"powerappslse",WaitTime:3e4},
    renderUrlTemplate = "",
    displayUrlTemplate = "";
window.onload = function()
{
    var puid = window.USER_GUID;
    if(puid)
        puid = puid.substring(1,puid.length - 1);
    Xrm.WebApi.retrieveRecord("systemuser",window.USER_GUID,null).then(function(result)
    {
        if(result.azureactivedirectoryobjectid != null)
            puid = result.azureactivedirectoryobjectid
    },function(errorResult)
    {
        console.log("Error while retrieving the azure active directory object id from systemuser entity : " + errorResult.message)
    });
    var culture = window.__cultureInfo.name.toLowerCase(),
        version = window.APPLICATION_FULL_VERSION;
    if(puid && culture)
    {
        puid = puid.toLowerCase();
        if(!version)
        {
            displayUrlTemplate = NpsConstants.NPSUrlOrigin + "/display/" + NpsConstants.Brand + "/?culture=" + culture + "&puid=" + puid;
            renderUrlTemplate = NpsConstants.NPSUrlOrigin + "/render/" + NpsConstants.Brand + "/?culture=" + culture + "&puid=" + puid + "&custom=%7B%22appName%22%3A%22PowerApps%20-%20Solution%20Explorer%22%7D"
        }
        else
        {
            displayUrlTemplate = NpsConstants.NPSUrlOrigin + "/display/" + NpsConstants.Brand + "/?culture=" + culture + "&productVersion=" + version + "&puid=" + puid;
            renderUrlTemplate = NpsConstants.NPSUrlOrigin + "/render/" + NpsConstants.Brand + "/?culture=" + culture + "&productVersion=" + version + "&puid=" + puid + "&custom=%7B%22appName%22%3A%22PowerApps%20-%20Solution%20Explorer%22%7D"
        }
        setTimeout(npsCallAndRender,NpsConstants.WaitTime);
        function npsCallAndRender()
        {
            var request = $.ajax({type:"GET",url:displayUrlTemplate,success:function(response)
                {
                    try
                    {
                        var display = JSON.parse(JSON.stringify(response));
                        if(display["display"])
                        {
                            createNpsFrame();
                            var npsHost = document.getElementById("npsHost");
                            npsHost.classList.add("npsDialog")
                        }
                    }
                    catch(e)
                    {
                        console.error(e)
                    }
                },error:function()
                {
                    console.error("Error during NPS request")
                }})
        }
    }
};
function createNpsFrame()
{
    var link = renderUrlTemplate,
        iframe = document.createElement("iframe");
    iframe.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
    iframe.id = "npsFrame";
    iframe.setAttribute("src",link);
    var npsHost = document.getElementById("npsHost");
    npsHost && 
        npsHost.appendChild(iframe)
}
function receiveMessage(event)
{
    if(!event || !event.origin)
        return;
    if(NpsConstants.NPSUrlOrigin.toLowerCase() !== event.origin.toLowerCase())
        return;
    var msg = event.data;
    if(msg && msg.msgType)
        if(msg.msgType === NpsConstants.CloseNpsDialog)
            destroyIFrameListener();
        else
            if(msg.msgType === NpsConstants.ResizeNpsDialog)
                afterSubmitNpsHost();
            else
                console.warn("NpsHost.ReceiveMessage","Unknown event type: " + msg.msgType)
}
window.addEventListener("message",receiveMessage);
function destroyIFrameListener()
{
    window.removeEventListener("message",receiveMessage);
    var frameToRemove = document.getElementById("npsHost");
    frameToRemove && frameToRemove.parentNode && 
        frameToRemove.parentNode.removeChild(frameToRemove)
}
function afterSubmitNpsHost()
{
    var npsFrame = document.getElementById("npsFrame");
    npsFrame && 
        npsFrame.classList.add("thankyoudialog")
}
