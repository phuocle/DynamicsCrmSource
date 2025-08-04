<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.FormRoleAssignment" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<cnt:AppHeader runat="server" id="crmHeader" />
<script type="text/javascript" language="javascript">

Mscrm.FormRoleAssignment.totalFallbackForms = <%= totalFallbackForms %>;
Mscrm.FormRoleAssignment.isFallbackForm = <%= currentFormIsFallbackForm.ToString().ToLower() %>;
Mscrm.FormRoleAssignment.canAssignRoles = <%= canAssignRoles.ToString().ToLower() %>;

Sys.Application.add_load(OnLoad);

function OnLoad() {
Mscrm.FormRoleAssignment.onLoadDialog();
}

function handleView(o) {

var crmGrid = $find("crmGrid");
crmGrid.SetParameter("oId", o.value);
crmGrid.Refresh();
}
function applychanges() {
if ($get('fallBackCheckBox').checked == false && Mscrm.FormRoleAssignment.totalFallbackForms == 1 && Mscrm.FormRoleAssignment.isFallbackForm =="true") {
alert(LOCID_NO_FALLBACK_FORM);
return;
}
Mscrm.Utilities.setReturnValue(Mscrm.FormRoleAssignment.onOkPress());
closeWindow();
}
function cancel() {
closeWindow();
}

</script>
<body>
<pre id="preDisplayConditionsXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(displayConditionsXml.ToString()) %></pre>
<pre id="preObjectId" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(formId.ToString()) %></pre>
<frm:DialogForm id="crmForm" runat="server">
<div style="height: 50px;top: 0px; position: absolute; width: 100%;">
<table cellpadding="0" cellspacing="0" height="100%" width="100%" style="table-layout: fixed;">
<col style="width:5%"/><col style="width:44%"/><col style="width:50%"/>
<tr style="height:25px">
<td><input name="visibleToEveryone" id="visibleToEveryone" type="radio" onclick="Mscrm.FormRoleAssignment.onClickVisibleToEveryone();" class="radio"></td>
<td colspan="2"><label for="visibleToEveryone"><loc:Text ResourceId="Dlg_Form_Role_Assignment_DisplayToEveryOne" runat="server"/></label></td>
</tr>
<tr style="height:25px">
<td><input name="visibleToSelectedRoles" id="visibleToSelectedRoles" type="radio" onclick="Mscrm.FormRoleAssignment.onClickVisibleToSelectedRoles();" class="radio"></td>
<td><label for="visibleToSelectedRoles"><loc:Text ResourceId="Dlg_Form_Role_Assignment_DisplayToSelectedRoles" runat="server"/></label></td>
<td>
<table class="stdTable" cellpadding="0" cellspacing="0" id="filterSection" style="display:none">
<tr>
<td class="home_role_td_SelBusinessUnit"><label for="selBusinessUnit"><span class="ms-crm-Bold-Header"><loc:Text ResourceId="Web.Tools.business.home_role.aspx_74" runat="server"/></span></label></td>
<td style="width:55%"><ui:Select id="selBusinessUnit" runat="server" onchange="handleView(this);"/></td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div style="position: absolute; top: 50px; bottom: 80px; width: 100%">
<![if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]>
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
<![if IE 7]>
</div>
<![endif]>
</div>
<div id="formFallbackSection"style="bottom: 10px; position: absolute; height: 70px; width: 100%;">
<table width="100%" height="100%" cellpadding="0" cellspacing="0">
<tr>
<td>
<fieldset>
<legend><loc:Text ResourceId="Dlg_Form_Role_Assignment_FallBackFormSection" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
<col width="5%"/><col width="95%"/>
<tr>
<td><ui:CheckBox id="fallBackCheckBox" onclick="Mscrm.FormRoleAssignment.onClickFallbackCheckBox();" runat="server"/></td>
<td><label for="fallBackCheckBox"><loc:Text ResourceId="Dlg_Form_Role_Assignment_EnabledForFallBack" runat="server"/></label></td>
</tr>
<tr id="fallBackFormInfoRow">
<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
<td><loc:Text ResourceId="Dlg_Form_Role_Assignment_FallBackFormDescription" runat="server"/></td>
</tr>
</table>
</fieldset>
</td>
</tr>
</table>
</div>
</frm:DialogForm>
</body>
</html>
