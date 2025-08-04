<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.SaveAs" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<style type="text/css">
.ms-crm-IE7-td-Texarea-Container,
.ms-crm-IE7-Texarea
{
position: static;
}
</style>

<script type="text/javascript">
function OnLoad() {
Mscrm.SaveAs.onLoadSaveAs();
}
function applychanges() {
var formName = $get('formName');
if (formName.value.length == 0) {
alert(LOCID_EMPTY_FORM_NAME);
formName.focus();
formName.select();
return;
}
Mscrm.Utilities.setReturnValue(Mscrm.SaveAs.onOkPress(formName.value, $get('formDescription').value));
closeWindow();
}
function cancel() {
closeWindow();
}
Sys.Application.add_load(OnLoad);
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="5" width="100%">
<col width="100" />


<tr style="height:25px" >
<td><label id="formNameLabel" for="formName"><loc:Text ResourceId="Dlg_Form_SaveAs_Name_Title" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td ><ui:TextBox id="formName" MaxLength="255" runat="server"/></td>
</tr>

<tr >
<td valign="top"><label id="formDescriptionLabel" for="formDescription"><loc:Text ResourceId="Dlg_Form_SaveAs_Description_Title" runat="server"/></label></td>
<td valign="top"><ui:TextArea id="formDescription" Height="80px" runat="server"/></td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
