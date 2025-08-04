<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.OneDriveforBusinessPage" %>

<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
<script type="text/javascript">
Sys.Application.add_load(hideFooter);

function hideFooter() {
crmDialogFooter = $get('crmDialogFooter');
crmDialogFooter.style.display = 'none';
dlgHdBodyContainer = $get("DlgHdBodyContainer");
dlgHdBodyContainer.style.bottom = "10px";
dlgHdBodyContainer.style.top = "70px";
}

function cancel() {
if (Xrm.Page.context.client.getClient() === Xrm.ClientName.outlook) {
Mscrm.Utilities.setReturnValue(null);
closeWindow(true);
}
else {
Mscrm.InlineDialogUtility.closeAllInlineDialogs();
}
}

function ChangeLocation() {
var url = Mscrm.CrmUri.create("/tools/documentmanagement/onedrive/OneDriveforBusinessSettings.aspx");
var options = new Xrm.DialogOptions;
options.height = 230;
options.width = Xrm.Page.context.client.getClient() === Xrm.ClientName.mobile ? 600 : 660;
var callbackFunction = Mscrm.Utilities.createCallbackFunctionForXrmDialog(RenameFolderCallback, []);
Xrm.Internal.openDialog(url.toString(), options, null, null, callbackFunction);
}

function ConfirmCreateODBFolder() {
var oUrl = Mscrm.CrmUri.create(location.href);
var oReturn = new Object();
oReturn.regardingObjectId = CrmEncodeDecode.CrmUrlDecode(oUrl.get_query()["regardingObjectId"]);
oReturn.regardingTypeCode = CrmEncodeDecode.CrmUrlDecode(oUrl.get_query()["regardingTypeCode"]);
oReturn.foldername = CrmEncodeDecode.CrmUrlDecode(oUrl.get_query()["foldername"]);
oReturn.siteType = CrmEncodeDecode.CrmUrlDecode(oUrl.get_query()["siteType"]);
oReturn.filename = CrmEncodeDecode.CrmUrlDecode(oUrl.get_query()["fileName"]);
Mscrm.Utilities.setReturnValue(oReturn);
return;
}

function ContinueBtnAction() {
ConfirmCreateODBFolder();
closeWindow(true);
return;
}

function RenameFolderCallback() {
ConfirmCreateODBFolder();

window.setTimeout(function () {
closeWindow(true);
}, 1)

return;
}
</script>
<style type="text/css">
.dialog-body-content {
font-weight: Lighter;
font-size: 13px;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
color: grey;
cursor: default;
}

.dialog-body-content-Link
{
font-weight: Lighter;
font-size: 13px;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
color: #1160B7;
cursor:default;
}

.dialog-body-content-Link:hover
{
font-weight: Lighter;
font-size: 13px;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
color: #1160B7;
text-decoration: underline;
cursor: pointer;
}

.odbContinueLinkText {
position: relative;
top: 50%;
transform: translateY(-20%);
}

.displayInline {
display: inline-block;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-right:5px;
<% }else{ %>
padding-left:5px;
<% } %>
}

.odbContinueSmallText {
font-size: 20px;
white-space: nowrap;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
}

.odbContinueLinkDirection{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
text-align:left;
<% }else{ %>
text-align:right;
<% } %>
}
.arrowFlipImage{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
filter: FlipH();
-webkit-transform: scaleX(-1);
-moz-transform: scaleX(-1);
-o-transform: scaleX(-1);
transform: scaleX(-1);
<% } %>
}
</style>
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
<tr>
<td rowspan="4" style="width:175px;">
<img src="/_imgs/OneDriveBusiness/associated_grid_dialog.png" width="173px" height="161px"  alt="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Odb_Dlg_Title"))%>"/>
</td>
<td>
<label for="contentmsg" class="dialog-body-content" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_Dlg_Body_Content_Msg' runat='server'/>">
<loc:Text ResourceId="Odb_Dlg_Body_Content_Msg" runat="server" />
</label>
</td>
</tr>
<tr>
<td style="vertical-align: top;">
<label for="contentpathmsg" class="dialog-body-content" title="<%=defaultFolderName%>">
<%=defaultFolderName%>
</label>
</td>
</tr>
<tr>
<td style="vertical-align: top;">
<a class="odbContinueLinkText" href="#" onclick="ChangeLocation();" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_Dlg_Body_Path_Link_Text' runat='server'/>">
<label for="contentpathlink" class="dialog-body-content-Link" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_Dlg_Body_Path_Link_Text' runat='server'/>">
<loc:Text ResourceId="Odb_Dlg_Body_Path_Link_Text" runat="server" />
</label>
</a>
</td>
</tr>
<tr>
<td style="vertical-align: top;">
<label for="contentpathdesc" class="dialog-body-content" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_Dlg_Body_Desc' runat='server'/>">
<loc:Text ResourceId="Odb_Dlg_Body_Desc" runat="server" />
</label>
</td>
</tr>
<tr>
<td colspan="2" class="odbContinueLinkDirection">
<a class="odbContinueLinkText" href="#" onclick="ContinueBtnAction();" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Button_Label_Continue' runat='server'/>">
<div class="odbContinueLinkText odbContinueSmallText displayInline" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Button_Label_Continue' runat='server'/>">
<loc:Text ResourceId="Button_Label_Continue" runat="server" />
</div>
<div class="displayInline" unselectable="on">
<img class="arrowFlipImage" src="/_imgs/OneDriveBusiness/next_arrow_black.png" unselectable="on" alt="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Button_Label_Continue"))%>">
</div>
</a>
</td>
</tr>
</table>
</body>
</html>
