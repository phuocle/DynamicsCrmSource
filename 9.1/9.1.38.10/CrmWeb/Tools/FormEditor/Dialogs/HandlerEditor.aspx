<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.HandlerEditor" %>
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
<script type="text/javascript" language="javascript">
var _name = "";
function OnLoad() {
Mscrm.EventHandlerEditor.onLoadHandlerEditor();
}
function applychanges() {
var functionName = $get('functionName');
if (functionName.value.length == 0) {
alert(LOCID_FUNCTION_NAME_REQUIRED);
functionName.select();
return;
}
Mscrm.Utilities.setReturnValue(Mscrm.EventHandlerEditor.handleOkPress());
closeWindow();
}
function cancel() {
closeWindow();
}
Sys.Application.add_load(OnLoad);
</script>
<style>
div.ms-crm-Tab
{
width:auto;
height:auto;
}
.ms-crm-TabContainer
{
top:30px;
bottom:0px;
left:0px;
right:0px;
}
</style>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">
<div style="width:100%;height:100%;position:relative;min-width:350px">
<div class="ms-crm-TabBar-Cell" style="padding-top:10px">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">
<div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="overflow-y:auto;" runat="server" >
<fieldset>
<table style="width:100%;height:100%">
<tr>
<td>
<table width="100%" cellpadding="0" cellspacing="5" style="table-layout:fixed;">
<col width=1%/><col width=15%/><col width=50%/><col width=30%/>
<tr>
<td />
<td><label id="Label1" for="librarySelector"><loc:Text ResourceId="Dialog_Handler_Editor_Library_Caption" runat="server"/></label></td>
<td >
<ui:Select id="librarySelector" runat="server"/>
</td>
<td/>
</tr>
<tr>
<td/>
<td class="ms-crm-Field-Required" id="function_c"><label id="functionNameLabel" for="functionName"><loc:Text ResourceId="Dialog_Handler_Editor_Function_Caption" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td ><ui:TextBox id="functionName" MaxLength="255" runat="server"/></td>
<td/>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<table width="100%" cellpadding="0" cellspacing="2" style="table-layout:fixed;" >
<col width=2%/><col width=5%/><col width=60%/><col width=28% /><col width=2%/>
<tr  >
<td/>
<td ><ui:CheckBox id="enabledCheckBox" Checked="true" runat="server"/></td>
<td><label id="enabledCheckBoxLabel" for="enabledCheckBox"><loc:Text ResourceId="Dialog_Handler_Editor_Enabled_CheckBox_Label" runat="server"/></label></td>
<td/>
</tr>
<tr>
<td><br /></td>
</tr>
<tr >
<td />
<td colspan="2"><loc:Text ResourceId="Dialog_Handler_Editor_Parameters_Caption" runat="server"/></td>
<td />
</tr>
<tr >
<td />
<td colspan=3><hr/></td>
<td />
</tr>
<tr >
<td/>
<td ><ui:CheckBox id="passExecContextCheckBox" runat="server"/></td>
<td><label id="passExecContextCheckBoxLabel" for="passExecContextCheckBox"><loc:Text ResourceId="Dialog_Handler_Editor_ExecutionContext_CheckBox_Label" runat="server"/></label></td>
<td/>
</tr>
<tr><td colspan="4"></td></tr>
<tr >
<td />
<td colspan=3><label id="functionParametersLabel" for="functionParameters"><loc:Text ResourceId="Dialog_Handler_Editor_Parameters_TextBox_Description" runat="server"/></label></td>
<td />
</tr>
<tr >
<td />
<td colspan=3 style="height:60px"><ui:TextArea id="functionParameters" Height="55px" runat="server" /></td>
<td />
</tr>
</table>
</td>
</tr>
</table>
</fieldset>
</div>
<div id="tab1" class="ms-crm-Tab ms-crm-TabContaine" runat="server">
<div class="ms-crm-Dialog-Desc" style="padding-bottom: 5px;">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.event.aspx_206" runat="server"/>
</div>
<span>&nbsp;</span>
<div id="divFieldSelect" width="100%">
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
