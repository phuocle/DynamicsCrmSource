<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Web.Pages.DocumentLocations" %>

<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="rbn" Namespace="Microsoft.Crm.Application.Ribbon" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">
function CreateOrSelectDocumentLocation() {
if(typeof(autocreatelocation) != "undefined" && autocreatelocation)
{
document.getElementById("showProgress").style.display = "inline";

if (typeof(defaultLocationUrl) != "string" || isNullOrEmptyString(defaultLocationUrl))
{
Mscrm.DocumentLocationHelper.showNotification("LOCID_DOCM_SPLOC_INVALIDPARENT", "");
}
else
{
Mscrm.DocumentLocationHelper.autoCreateLocation(siteCollectionUrl, defaultLocationUrl, defaultLocationId, defaultLocationType, entityLogicalName, entityDisplayName, folderName, entityCentricPrimaryName, entityCentricEntityName, entityCentricPrimaryId, entityCentricEntityType);
}
}
else
{
var _locationId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_locationId) %>;
if (!IsNull(_locationId) && _locationId != "") {
var locationSelectorControl = $find("documentsGrid_DocumentLocationSelector");
locationSelectorControl.setSelectedLocationItemInMenu(_locationId);
}
else if(typeof(errorMessage) != "undefined")
{
Mscrm.DocumentLocationHelper.showNotification(errorMessage, "");
}
else
{
document.getElementById("errorMessageArea").style.display = "inline";
}
}





if(document.getElementById("showProgress").style.display != "none")
{
var gridProgress=parent.document.getElementById("progress");
if(!IsNull(gridProgress))
{
gridProgress.style.display="none";
}
}
}
</script>
</head>
<body class="ms-crm-AreaPage">
<ui:eventmanager runat="server" id="crmEventManager"></ui:eventmanager>
<div class="ms-crm-Form-AssociatedGrid-Layout">
<div class="associatedGrid_viewRow" style="height: 32px; position:absolute; top:0px; left:0px; right:0px;">
<div class="ms-crm-VS-Localizable ms-crm-TextAutoEllipsis" style="display: inline-block; height: 32px; position:absolute; left:8px; top:0px; bottom:0px; right:40px;">
<div class="ms-crm-VS-Localizable ms-crm-TextAutoEllipsis" style="display: inline-block; height:32px;">
<span id="newViewSelector" class="ms-crm-View-Entity-Name ms-crm-ViewSelector-title-associated-lite">
<loc:text resourceid="DocumentManagement.LocationSelectorPage.Label" runat="server" />
</span>
</div>
<div class="ms-crm-VS-Localizable" style="display: inline-block; height:32px;">
<a id="documentsGrid_DocumentLocationSelector" class="ms-crm-View-Name ms-crm-View-Name-View-Lite" title="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.LocationSelector.Title' runat='server'/>"
onclick="return false;" href="javascript:;"><span class="ms-crm-View-Name ms-crm-ViewSelector-title-Document" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis; display:inline-block;">
<loc:text resourceid="DocumentManagement.LocationSelector.Label" runat="server" />
</span><span class="ms-crm-View-icon">
<img alt="" src="/_imgs/grid/Dropdown_Arrow.png" /></span> </a>
</div>
</div>
<div class="ms-crm-VS-Localizable" style="display: inline-block; height:24px; width:40px;"></div>
<div style="position: absolute; top: 36px; bottom: 0px; left: 0px; right: 0px;">
<rbn:ribbonmanager  id="crmRibbonManager" runat="server"></rbn:ribbonmanager>
</div>
</div>
<div style="position: absolute; top: 72px; bottom: 0px; left: 0px; right: 0px; display: none;"
id="documentGrid">
<div style="position: absolute; top: 0px; bottom: 0px; left: 0px;right: 0px; width: 100%; height: 100%;">
<iframe id="gridIframe" style="width:100%; height:100%" name="gridIframe" frameborder="0" scrolling="no" src="">
</iframe>
</div>
</div>
<div style="position: absolute; top: 33px; bottom: 0px; left: 0px; right: 0px; vertical-align: middle; text-align:center; display: none;" id="errorMessageArea">
<div style="vertical-align: middle; text-align:center; margin: 0px auto; position:absolute; bottom:50%; left:0px; right:0px;">
<img id="errorImage" style="display: none; vertical-align: middle" alt="" src="/_imgs/error/notif_icn_crit16.png" />&nbsp;<label
id="errorMessageLabel"><loc:text resourceid="DocumentManagement.AddLocation.BlankPageMessage1"
runat="server" />&nbsp;<a href="javascript:Mscrm.DocumentLocationHelper.addLocation();"
class="ms-crm-Link"><loc:text resourceid="DocumentManagement.AddLocation.BlankPageMessage2"
runat="server" /></a></label>
</div>
</div>
<div style="position: absolute; top: 33px; bottom: 0px; left: 0px; right: 0px; vertical-align: middle; text-align:center; display: none;"
id="showProgress">
<div style="vertical-align: middle; text-align:center; margin: 0px auto; position:absolute; bottom:50%; left:0px; right:0px;">
<img alt="" src="/_imgs/AdvFind/progress.gif" /><br />
<loc:text resourceid="PageLoadingMessage" runat="server" />
</div>
</div>
</div>
</body>
</html>
