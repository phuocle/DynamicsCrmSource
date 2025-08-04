<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.ManageMaps.ManageMapsDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">

var selectedEntity;
var _oArea;
var sampleDataXml = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(sampleDataXml)%>;

Sys.Application.add_load(function()
{
document.getElementById("sampleDataXml").value = sampleDataXml;
$find("crmForm").add_onSave(Save);
});

function Save(sender, args)
{

if(args.getSaveMode() == 47)
{
return;
}

if(document.getElementById("name").value == "")
{
alert(LOCID_EMPTY_MAPNAME_ALERT);
args.preventDefault();
return false;
}
var picklistMappingXmlDoc = null;
var mappingXmlDoc = null;
var importMapId;
var colMappingIdsToDelete = new Array();

colMappingIdsToDelete.type = "guid";
var importMapId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(importMapId) %>;
var mapXml = "";
if(importMapId == "")
{
mapXml = "<Map Name=\"\"><Description></Description><EntityMaps><EntityMap TargetEntityName=\"\" SourceEntityName=\"\"></EntityMap></EntityMaps></Map>";
}
else
{
mapXml = "<Map Name=\"\" Id=\""+ importMapId + "\"><Description></Description><EntityMaps><EntityMap TargetEntityName=\"\" SourceEntityName=\"\"></EntityMap></EntityMaps></Map>";
}
mappingXmlDoc = XUI.Xml.LoadXml(mapXml);
var mapNode = XUI.Xml.SelectSingleNode(mappingXmlDoc, "//Map", null);
mapNode.setAttribute("Name", document.getElementById("name").value);

var descNode = XUI.Xml.SelectSingleNode(mappingXmlDoc, "//Map/Description", null);
XUI.Xml.SetText(descNode, document.getElementById("description").value);

var command = new RemoteCommand("ImportWebService", "CreateOrUpdateImportMapFromApp");
command.SetParameter("mapXml", XUI.Xml.XMLSerializer.serializeToString(mappingXmlDoc));
command.SetParameter("colMappingIdsToDelete", colMappingIdsToDelete);
result = command.Execute();
if(result.Success == false)
{
args.preventDefault();
return false;
}
importMapId = result.ReturnValue;

args.preventDefault();
if(args.getSaveMode() == 59)
{
$find("crmForm").detachCloseAlert();
var url = window.location.href;
if(url.indexOf("?") != -1)
{
url = url.substr(0, url.indexOf("?"));
}
if(url.indexOf("#") != -1)
{
url = url.substr(0, url.indexOf("#"));
}
window.location.href= url + "?refreshgrid=1";

}
if(args.getSaveMode() == 2)
{
$find("crmForm").detachCloseAlert();
var objectType = $get("crmFormSubmitObjectType").value;
window.opener.auto(objectType);
closeWindow();
}
if(args.getSaveMode() == 1)
{
$find("crmForm").detachCloseAlert();
var url = window.location.href;
if(url.indexOf("?") != -1)
{
url = url.substr(0, url.indexOf("?"));
}
if(url.indexOf("#") != -1)
{
url = url.substr(0, url.indexOf("#"));
}
sampleDataXmlForm.action = url + "?id=" + importMapId;
sampleDataXmlForm.submit();
}
}
</script>
<style>
.ms-crm-Form-Nav-Container
{
padding-top:4px;
width:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
}
.ms-crm-NRForm-Main-Container
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
<% } else { %>
left:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
<% } %>
}
</style>
</head>
<body scroll="no">
<div class="ms-crm-Form-Layout">
<div style="height:98px">
<div>
<mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
</div>
</div>
<div class="ms-crm-NRForm-Background">
<div class = "ms-crm-Form-Nav-Container">
<cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>
<div id="tdAreas" class="ms-crm-NRForm-Main-Container">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="areaForm">
<frm:CrudForm id="crmForm" runat="server" />
</div>
</div>
<form id="sampleDataXmlForm" method="post" target="_self">
<input type="hidden" id="sampleDataXml" name="sampleDataXml" />
</form>
</div>
</div>
<div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
<sdk:RenderStatusControl id="crmRenderStatus" runat="server" />
</div>
</div>

</body>
</html>
