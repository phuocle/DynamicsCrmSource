<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.OfflineData.OfflineDataPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE HTML>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">

var _boAnySettingChanged = false;
var restoreToDefaultCheck = false;
var noSyncImg = "/_imgs/no_sync.png";
var fromCrmImg = "/_imgs/crm_outlook.png";
var toCrmImg = "/_imgs/outlook_crm.png";
var bothImg = "/_imgs/bi_directional.png";
var AllowedSyncDirections = {
None: 4,
FromCrm: 8,
ToCrm: 16,
Both:32
}

Sys.Application.add_load(OfflineDataOnLoad);
function OfflineDataOnLoad()
{
var crmGrid = $find("crmGrid");
crmGrid.add_onBeforeFormLoad(handleDblClick);
crmGrid.SetParameter("disableDblClick", "0");
var crmGridInactive = $find("crmGridInactive");
crmGridInactive.add_onBeforeFormLoad(handleDblClickInactive);
crmGridInactive.SetParameter("disableDblClick", "0");
}

function handleDblClick(sender, args)
{
var oWindowInfo = GetWindowInformation(AppOfflineFilter);
var appId = (!isNullOrEmptyString(window.APP_MODULE_APPID) ? '&appid=' + CrmEncodeDecode.CrmUrlEncode(window.APP_MODULE_APPID) : '');
openStdDlg(Mscrm.CrmUri.create("/Tools/OfflineData/OfflineFilter.aspx?QueryId=" + CrmEncodeDecode.CrmUrlEncode(args.objectID) + "&QuerySource=userquery&QueryType=<%= CrmEncodeDecode.CrmUrlEncode(Request.QueryString["QueryType"]) %>" + appId), top.window, oWindowInfo.Width, oWindowInfo.Height);
$find("crmGrid").Refresh();
args.breakEvent = true;
}

function handleDblClickInactive(sender, args)
{
var oWindowInfo = GetWindowInformation(AppOfflineFilter);
var appId = (!isNullOrEmptyString(window.APP_MODULE_APPID) ? '&appid=' + CrmEncodeDecode.CrmUrlEncode(window.APP_MODULE_APPID) : '');
openStdDlg(Mscrm.CrmUri.create("/Tools/OfflineData/OfflineFilter.aspx?QueryId=" + CrmEncodeDecode.CrmUrlEncode(args.objectID) + "&QuerySource=savedquery&QueryType=<%= CrmEncodeDecode.CrmUrlEncode(Request.QueryString["QueryType"]) %>" + appId), top.window, oWindowInfo.Width, oWindowInfo.Height);
$find("crmGridInactive").Refresh();
$find("crmGrid").Refresh();
args.breakEvent = true;
}

function handleClickBothDirection(id) {
var theImg = document.getElementById(id),
x = theImg.src.split("/"),
t = x.length - 1,
y = x[t];
theImg.setAttribute("isDirty", "0");

var allowedSyncDirection = parseInt(theImg.getAttribute("allowedSyncDirection"));
var syncDirectionBit = 0;

switch(y)
{
case "no_sync.png":
syncDirectionBit = parseInt(AllowedSyncDirections.None);
break;
case "crm_outlook.png":
syncDirectionBit = parseInt(AllowedSyncDirections.FromCrm);
break;
case "outlook_crm.png":
syncDirectionBit = parseInt(AllowedSyncDirections.ToCrm);
break;
case "bi_directional.png":
syncDirectionBit = parseInt(AllowedSyncDirections.Both);
break;
}

var originalsynDirectionBit = syncDirectionBit;


syncDirectionBit = syncDirectionBit << 1;

while (originalsynDirectionBit != syncDirectionBit)
{

if (syncDirectionBit > parseInt(AllowedSyncDirections.Both))
{
syncDirectionBit = parseInt(AllowedSyncDirections.None);
}

var newSyncDirectionBit = syncDirectionBit & allowedSyncDirection;

switch (newSyncDirectionBit)
{
case parseInt(AllowedSyncDirections.None):
theImg.src = noSyncImg;
theImg.setAttribute("sd", "0");
theImg.alt = LOCID_SYNC_DIRECTION_NOSYNC;
theImg.setAttribute("isDirty", "1");
theImg.title = LOCID_SYNC_TOOTIP_NOSYNC;
break;
case parseInt(AllowedSyncDirections.FromCrm):
theImg.src = fromCrmImg;
theImg.setAttribute("sd", "1");
theImg.alt = LOCID_SYNC_DIRECTION_FROMCRM;
theImg.setAttribute("isDirty", "1");
theImg.title = LOCID_SYNC_TOOTIP_FROMCRM;
break;
case parseInt(AllowedSyncDirections.ToCrm):
theImg.src = toCrmImg;
theImg.setAttribute("sd", "2");
theImg.alt = LOCID_SYNC_DIRECTION_TOCRM;
theImg.setAttribute("isDirty", "1");
theImg.title = LOCID_SYNC_TOOTIP_TOCRM;
break;
case parseInt(AllowedSyncDirections.Both):
theImg.src = bothImg;
theImg.setAttribute("sd", "3");
theImg.alt = LOCID_SYNC_DIRECTION_BOTH;
theImg.setAttribute("isDirty", "1");
theImg.title = LOCID_SYNC_TOOTIP_BOTH;
break;
}


if (theImg.getAttribute("isDirty") == "1")
{
break;
}
else
{

syncDirectionBit = syncDirectionBit << 1;
}
}
}

function restoreToDefault()
{
var images = document.getElementsByClassName("rowImage");

for (var i = 0 ; i < images.length; i++)
{

images[i].setAttribute("isdirty", "0");
var parentDefaultSyncDirection = Number(images[i].getAttribute("D"));
var defaultSyncDirection = parentDefaultSyncDirection;

var childMappingNames = images[i].getAttribute("childmappings");
if (childMappingNames != null && childMappingNames.length > 0) {
var firstChild;
if (childMappingNames.indexOf(",") > -1)
{
childMappingNamesList = childMappingNames.split(",");

firstChild = childMappingNamesList[0];
}
else
{
firstChild = childMappingNames;
}

var imageID = images[i].getAttribute("id").split("_");

var entityName = imageID[imageID.length - 1];

var childMappingImageID = firstChild + "_" + entityName;
var childMapping = document.getElementById(childMappingImageID);
if (childMapping != null)
{

var childDefaultSyncDirection = Number(childMapping.getAttribute("D"));

defaultSyncDirection = parentDefaultSyncDirection | childDefaultSyncDirection;
}
}
switch (defaultSyncDirection)
{
case 0:
images[i].src = noSyncImg;
images[i].alt = LOCID_SYNC_DIRECTION_NOSYNC;
break;
case 1:
images[i].src = fromCrmImg;
images[i].alt = LOCID_SYNC_DIRECTION_FROMCRM;
break;
case 2:
images[i].src = toCrmImg;
images[i].alt = LOCID_SYNC_DIRECTION_TOCRM;
break;
case 3:
images[i].src = bothImg;
images[i].alt = LOCID_SYNC_DIRECTION_BOTH;
break;
}
}

restoreToDefaultCheck = true;
return false;
}

function GetRestoreToDefault()
{
if (restoreToDefaultCheck == true)
{
return "<RestoreToDefault>true</RestoreToDefault>";
}
else
{
return "";
}
}

function GetSyncAttributes() {
var images = document.getElementsByClassName("rowImage");
var xml = "";
if (images.length > 0) {
for (var i = 0 ; i < images.length; i++) {
var syncDirection = CrmEncodeDecode.CrmXmlEncode(images[i].getAttribute("sd"));
var imageAttributeID = CrmEncodeDecode.CrmXmlEncode(images[i].getAttribute("ID"));
var isDirty = images[i].getAttribute("isdirty");
var childMappings = "";
if (images[i].hasAttribute("childMappings")) {
childMappings = CrmEncodeDecode.CrmXmlAttributeEncode(images[i].getAttribute("childMappings"));
}
if (isDirty == "1") {
xml = xml + "<" + imageAttributeID + " childMappings=\"" + childMappings + "\"" + ">" + syncDirection + "</" + imageAttributeID + ">";
}
}
if (xml != "") {
xml = "<SyncAttributes>" + xml + "</SyncAttributes>";
}
}
return xml;
}

function handleEntityTypeChange()
{
var independentMapping = document.getElementsByName("independentMapping");
for (var i = 0; i < independentMapping.length; i++)
{

independentMapping[i].style.display = "none";
}

var computedMapping = document.getElementsByName("computedMapping");
for (var i = 0; i < computedMapping.length; i++)
{

computedMapping[i].style.display = "none";
}

var selectedValue = Mscrm.FormControlInputBehavior.GetBehavior("EntityTypeSelector").get_dataValue();
var visibleAttributeRows = document.getElementsByClassName(selectedValue.toLowerCase());

for (var i = 0; i < visibleAttributeRows.length; i++)
{

if ((visibleAttributeRows[i].getAttribute("name") == "independentMapping") || (visibleAttributeRows[i].getAttribute("name") == "computedMapping"))
{
visibleAttributeRows[i].style.display = "";
}
}
}

function applychanges()
{
var retval = new StringBuilder();
retval.Append("<organization>");
retval.Append(GetSyncAttributes());
retval.Append(GetRestoreToDefault());
retval.Append("</organization>");

var boSuccess = true;
var xml = XUI.Xml.LoadXml(retval.ToString());
var xmlhttp = new XMLHttpRequest();
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/cmds/cmd_update.aspx");
xmlhttp.open("POST", oUrl.toString(), false);
Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
SetTokenInHeader(xmlhttp, oUrl);

boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, xml);
if (boSuccess) {
boSuccess = handleXMLErr(xmlhttp.responseXML);
}
if (boSuccess) {
closeWindow();
}
}

function cancel()
{
closeWindow();
}
</script>
<style type="text/css">
.rowImage[direction=RTL] {
-webkit-transform: rotate(180deg);
-moz-transform: rotate(180deg);
-ms-transform: rotate(180deg);
-o-transform: rotate(180deg);
transform: rotate(180deg);
}

.configurable:hover {
opacity: 0.6;
}
</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
<div style="position:absolute; top:5px; bottom:5px; left:10px; right:10px">
<div style="height:22px">
<div class="ms-crm-absolutePosition" style="width:45%;<%= Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ? "right:auto" : "left:auto" %>">
</div>
</div>
<div style="height:22px">
<div class="ms-crm-TabBar-Cell">
<cnt:AppTabBar id="crmTabBar" runat="server" />
</div>
</div>
<div class="ms-crm-absolutePosition" style="top:43px; bottom:10px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="tab0" class="ms-crm-Tab">
<div style="height: 25px; width: 100%">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server" />
</div>

<div id="GridContainer" class="ms-crm-absolutePosition" style="top:35px;bottom:0px;left:11px;right:11px;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" />
</div>
</div>
</div>
<div id="tab1" class="ms-crm-Tab">
<div style="height: 25px; width: 100%">
<mnu:AppGridMenuBar id="crmMenuBarInactive" runat="server" />
</div>

<div id="GridContainerInactive" class="ms-crm-absolutePosition" style="top:35px;bottom:0px;left:11px;right:11px;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGridInactive" />
</div>
</div>
</div>
<div id="fieldLevelSyncTab" class="ms-crm-Tab">
<%=RenderFieldLevelSyncTitle()%>

<div id="GridContainerInactive2" class="ms-crm-absolutePosition" style="top: 35px; bottom: 0px; left: 11px; right: 11px;">
<div style="top: 5px; bottom: 20px;">
<table>
<tr>
<td width="30%">
<label for="EntityTypeSelector">
<loc:Text ResourceId="SystemCustomization.OfflineData.FieldLevelSync.Labels.EntityType" runat="server" />
</label>
</td>
<td width="70%">
<crm:Select id="EntityTypeSelector" runat="server" onchange="handleEntityTypeChange();" />
</td>
</tr>
</table>
</div>
<div style="width:98%">
<hr>
<%=RenderFieldLevelSyncTableHeader() %>
<hr>
</div>
<div style="overflow-y: scroll; height: 65%">
<%= ReturnFieldLevelSyncRows()  %>
</div>
<hr>

<div>
<%=RenderFieldLevelSyncFootNote()%>
</div>
</div>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
