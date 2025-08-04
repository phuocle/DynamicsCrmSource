<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.NewDocument" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<title><loc:Text id="dialogTitle" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
.ms-crm-RefreshDialog-Main
{
top: 74px !important;
}
#dialogHeaderTitle
{
color:#000000  !important ;
font-size:36px !important ;
font-family:Segoe UI !important ;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-right: 30px;
<% }else{ %>
margin-left: 30px;
<% } %>
margin-top: 11px;
}
.ms-crm-dlglabel
{
vertical-align:top;
font-family:Segoe UI;
color:#444444;
font-size:12px;
font-weight:normal !important;
}
a#btnCross {
top: 10px !important;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left: 30px;
<% }else{ %>
right: 30px;
<% } %>
}
#butBegin
{
margin-right:2px !important;
}
</style>
<script type="text/javascript" language="javascript">
Sys.Application.add_load(PageLoad);


function PageLoad()
{
window.setTimeout(function () {
document.getElementById("documentNameText").focus();
}, 20);
}

function applychanges() {
var oUrl = Mscrm.CrmUri.create(location.href);
var documentNameControl = $get("documentNameText");
var documentLocationControl = $get("documentLocations");

if (!validateAndShowError())
{
return;
}

if (Mscrm.FormUtility.isControlDirty(documentNameControl) || Mscrm.FormUtility.isControlDirty(documentTitleControl)) {
var oReturn = new Object();
oReturn.regardingObjectId = oUrl.get_query()["regardingObjectId"];
oReturn.locationId = documentLocationControl.value;
oReturn.regardingTypeCode = oUrl.get_query()["regardingTypeCode"];
oReturn.filename = documentNameControl.value;
oReturn.documentType = $get('tdFileExtension').innerHTML;
oReturn.isPersonalSitePresent = window.isPersonalSitePresent;
Mscrm.Utilities.setReturnValue(oReturn);
}
closeWindow(true);
return;
}

function cancel() {
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

function validateAndShowError()
{
hideErrors();
if (Mscrm.Utilities.isNullOrEmptyGuid($get("documentLocations").value) && isNullOrEmptyString($get("documentNameText").value)) {
$get("error_document_name_loc").style.display = "inline";
return false;
}
else if (isNullOrEmptyString($get("documentNameText").value))
{
$get("error_document_name").style.display = "inline";
return false;
}
else if (Mscrm.Utilities.isNullOrEmptyGuid($get("documentLocations").value))
{
$get("error_document_loc").style.display = "inline";
return false;
}
else
{
return true;
}
}

function hideErrors()
{
$get("error_document_name_loc").style.display = "none";
$get("error_document_name").style.display = "none";
$get("error_document_loc").style.display = "none";
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table id="documentProperties" style="width:100%">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar ms-crm-Field-Required" style="white-space: nowrap;width:150px;">
<label for="name" class="ms-crm-dlglabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web._grid.cmds.dlg_editdocumentproperties.DocumentName' runat='server'/>">
<loc:Text ResourceId="Web._grid.cmds.dlg_editdocumentproperties.DocumentName" runat="server"/>
</label>
<img class="ms-crm-ImageStrip-frm_required ms-crm-Inline-RequiredLevel" alt="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Forms.Required.AltTag"))%>" src="/_imgs/frm_required.gif" />
</td>
<td style="padding-left:10">
<sdk:TextBoxControl Required="true" id="documentNameText" runat="server"/>
</td>
<td style="padding-left:10" id="tdFileExtension" runat="server">
</td>
</tr>
<tr>
<td class="mscrm-docmgmt-LeftColumn">
<label for="documentLocations" class="ms-crm-dlglabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_DlgSettings_Label_Text' runat='server'/>"><loc:Text ResourceId="Odb_DlgSettings_Label_Text" runat="server"/></label>
</td>
<td style="padding-left: 10">
<sdk:PicklistControl runat="server" id="documentLocations" />
</td>
<td style="padding-left:10"></td>
</tr>
<tr>
<td></td>
<td colspan="2">
<div style="padding-top:5px;padding-bottom:5px" >
<div id="error_document_name" style="display: none;" tabindex="0">
<table>
<tr>
<td><img style="margin-right:10px" src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_NewUpload_Dlg_Error_Msg_Document_Name' runat='server'/>" /></td>
<td><div style="color:#D80303">
<loc:text resourceid="Odb_NewUpload_Dlg_Error_Msg_Document_Name" runat="server" />
</div>
</td>
</tr>
</table>
</div>
<div id="error_document_loc" style="display: none;" tabindex="0">
<table>
<tr>
<td><img style="margin-right:10px" src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_NewUpload_Dlg_Error_Msg_Document_Name' runat='server'/>" /></td>
<td><div style="color:#D80303">
<loc:text resourceid="Odb_NewUpload_Dlg_Error_Msg_Document_Location" runat="server" />
</div>
</td>
</tr>
</table>


</div>
<div id="error_document_name_loc" style="display: none;" tabindex="0">
<table>
<tr>
<td><img style="margin-right:10px" src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_NewUpload_Dlg_Error_Msg_Document_Name' runat='server'/>" /></td>
<td><div style="color:#D80303">
<loc:text resourceid="Odb_NewUpload_Dlg_Error_Msg_Document_Name_Location" runat="server" />
</div>
</td>
</tr>
</table>

</div>
</div>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>