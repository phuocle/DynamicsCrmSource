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
top : 70;
}
</style>
<script type="text/javascript" language="javascript">
var _a = null;

function applychanges() {
var oUrl = Mscrm.CrmUri.create(location.href);
var documentNameControl = $get("documentNameText");
if (documentNameControl.value == "") {
alert(LOCID_DOCUMENT_NAME_REQUIRED);
return;
}
if (Mscrm.FormUtility.isControlDirty(documentNameControl) || Mscrm.FormUtility.isControlDirty(documentTitleControl)) {
var oReturn = new Object();
oReturn.regardingObjectId = oUrl.get_query()["regardingObjectId"];
oReturn.locationId = oUrl.get_query()["locationId"];
oReturn.regardingTypeCode = oUrl.get_query()["regardingTypeCode"];
oReturn.filename = documentNameControl.value;
oReturn.documentType = $get('tdFileExtension').innerHTML;
Mscrm.Utilities.setReturnValue(oReturn);
}
closeWindow(true);
return;
}

function cancel() {
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table id="documentProperties" style="width:100%">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar ms-crm-Field-Required" style="white-space: nowrap">
<label for="name">
<loc:Text ResourceId="Web._grid.cmds.dlg_editdocumentproperties.DocumentName" runat="server"/>
</label>
<img class="ms-crm-ImageStrip-frm_required ms-crm-Inline-RequiredLevel" alt="Required" src="/_imgs/frm_required.gif" />
</td>
<td style="padding-left:10">
<sdk:TextBoxControl Required="true" id="documentNameText" runat="server"/>
</td>
<td style="padding-left:10" id="tdFileExtension" runat="server">
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>