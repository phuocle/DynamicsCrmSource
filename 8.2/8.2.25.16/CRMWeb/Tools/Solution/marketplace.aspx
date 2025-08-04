<!DOCTYPE html >

<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.MarketplacePage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery-2.1.1.min.js"></script>
<script type="text/javascript" language="javascript">

function SendMessageToMarketplace()
{
var iframe = $('#marketplaceFrame')[0];
var iframewindow = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument.defaultView;
iframewindow.postMessage({ msgType: "loadMarketplace", "hostData": { firstName: Marketplace_UserFirstName, lastName: Marketplace_UserLastName, workEmail: Marketplace_UserWorkEmail, sessionId: Marketplace_TelemetrySessionId } }, Marketplace_Host);
}

function ReceiveMessageFromMarketplace(msg)
{
var origin = msg.origin || event.origin || event.originalEvent.origin;
if (origin !== Marketplace_Host) {
return;
}

if (msg.data.msgType == 'acquireApp') {
var gladosUrl = GladosMarketplace_Url + "&telemetrySessionId=" + Marketplace_TelemetrySessionId + "&data=" + encodeURIComponent(JSON.stringify(msg.data));
window.open(gladosUrl);
closeWindow();
}

if (msg.data.msgType == 'closeSaasMarketplace'){
closeWindow();
}
}

$(document).ready(function ()
{
if (window.addEventListener) {
window.addEventListener("message", ReceiveMessageFromMarketplace, false);
} else {
window.attachEvent("onmessage", ReceiveMessageFromMarketplace);
}

$('#marketplaceFrame').attr('src', Marketplace_Url);

$('#marketplaceFrame').load(function () {
SendMessageToMarketplace();
});
});

</script>
</head>
<style>
#marketplaceFrameContainer
{
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
}
#marketplaceFrame
{
display: block;
width: 100%;
height: 100%;
border: 0px;
}
</style>
<body>

<frm:DialogForm id="crmForm" runat="server">
<div id="marketplaceFrameContainer">
<iframe id="marketplaceFrame" src="">
</iframe>
</div>
</frm:DialogForm>
</body>
</html>
