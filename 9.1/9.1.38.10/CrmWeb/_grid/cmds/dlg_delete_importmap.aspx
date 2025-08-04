<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteImportMapConfirmationPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">


var _sAction = "delete";
var _iObjType = "<%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>";

function button_delete()
{
var crmDialog = new Mscrm.CrmDialog( Mscrm.CrmUri.create("/_grid/cmds/dlg_confirm_delete.aspx?ObjectTypeId=" + CrmEncodeDecode.CrmUrlEncode(_iObjType) + "&iTotal=" + <%=Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(iTotal.ToString("D", CultureInfo.InvariantCulture))%>), null, 350, 200, null);
crmDialog.setCallbackInfo("performDialogAction", this,null);
oResult = crmDialog.show();
}

function performDialogAction(oResult)
{
if (oResult)
{
prepUI();
_bActionStarted = true;
_sAction = "delete";
window.setTimeout("performAction()", 10);
}
}

function button_deactivate()
{
prepUI();

_bActionStarted = true;
_sAction = "deactivate";
window.setTimeout("performAction()", 10);
}

function prepUI()
{
$get("cmdDialogDelete").disabled		= true;
$get("cmdDialogDeactivate").disabled	= true;


PrepareFillBar();
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<% if(inProgressImportExists) {%>
<loc:Text ResourceId="Error_Message_0x80048465" runat="server"/>
<br>
<br>
<loc:Text ResourceId="CanNotDelete_ImportMap_Deactivate_Instruction" runat="server" />
<%} else { %>
<br>
<br>
<loc:Text ResourceId="Delete_ImportMap_Deactivate_Instruction" runat="server" />
<%} %>
</frm:DialogForm>

</body>
</html>
