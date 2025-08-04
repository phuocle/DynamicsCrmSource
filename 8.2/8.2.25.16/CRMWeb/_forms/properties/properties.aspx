<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.Properties" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Web.Sfa" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="javascript">

function applychanges()
{
cancel();
}

function cancel()
{
closeWindow();
}

</script>
<style type="text/css">

div.ms-crm-Dialog-Main
{
overflow-y: hidden;
}

</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">

<table style="table-layout:fixed;width:100%;" cellpadding="4" cellspacing="0" border="0">
<col style="width:125px"><col>
<tr>
<td colspan="2">
<div class="formproperties_div"><img alt="" src="/_imgs/ico_18_1.gif" align="absmiddle" class="form_properties_ImgLabel"><loc:Text ResourceId="Web._forms.properties.OverviewSection" runat="server"/></div>
<table class="form_properties_table_content" border="0" cellpadding="4" cellspacing="0">
<col style="width:150px"><col>
<tr>
<td><loc:Text ResourceId="Web._forms.properties.properties.aspx_40" runat="server"/></td>
<td id="createdBy" runat="server"></td>
</tr>
<tr>
<td><loc:Text ResourceId="Web._forms.properties.properties.aspx_44" runat="server"/></td>
<td id="createdOn" runat="server"></td>
</tr>
<tr>
<td><loc:Text ResourceId="Web._forms.properties.properties.aspx_48" runat="server"/></td>
<td id="modifiedBy" runat="server"></td>
</tr>
<tr>
<td><loc:Text ResourceId="Web._forms.properties.properties.aspx_52" runat="server"/></td>
<td id="modifiedOn" runat="server"></td>
</tr>
</table>
</td>
</tr>

<tr>
<td colspan="2">
<div class="formproperties_div"><img alt="" src="/_imgs/ico_18_secure.gif" align="absmiddle" class="form_properties_img_Security"><loc:Text ResourceId="Web._forms.properties.SecuritySection" runat="server"/></div>
<table class="form_properties_table_Security" border="0" cellpadding="2" cellspacing="0">
<col style="width:20px"><col><col style="width:50px"><col style="width:20px"><col><col>
<tr>
<td><crm:CheckBox id="chkRead" Disabled="true" runat="server"/></td>
<td><label for="chkRead"><loc:Text ResourceId="Web._forms.properties.properties.aspx_read" runat="server"/></label></td>
<td rowspan="3">&nbsp;</td>
<td><crm:CheckBox id="chkWrite" Disabled="true" runat="server"/></td>
<td><label for="chkWrite"><loc:Text ResourceId="Web._forms.properties.properties.aspx_write" runat="server"/></label></td>
<td rowspan="3">&nbsp;</td>
</tr>
<tr>
<td><crm:CheckBox id="chkAppend" Disabled="true" runat="server"/></td>
<td><label for="chkAppend"><loc:Text ResourceId="Web._forms.properties.properties.aspx_append" runat="server"/></label></td>
<td><crm:CheckBox id="chkAppendTo" Disabled="true" runat="server"/></td>
<td><label for="chkAppendTo"><loc:Text ResourceId="Web._forms.properties.properties.aspx_append_to" runat="server"/></label></td>
</tr>
<tr>
<td><crm:CheckBox id="chkShare" Disabled="true" runat="server"/></td>
<td><label for="ckhShare"><loc:Text ResourceId="Web._forms.properties.properties.aspx_share" runat="server"/></label></td>
<td><crm:CheckBox id="chkAssign" Disabled="true" runat="server"/></td>
<td><label for="chkAssign"><loc:Text ResourceId="Web._forms.properties.properties.aspx_assign" runat="server"/></label></td>
</tr>
<tr>
<td><crm:CheckBox id="chkDelete" Disabled="true" runat="server"/></td>
<td><label for="chkDelete"><loc:Text ResourceId="Web.Biz.Roles.edit_role.aspx_delete" runat="server"/></label></td>
<td colspan="2"></td>
</tr>
</table>

</td>
</tr>
<tbody runat="server" id="BackOfficeArea">
<tr>
<td colspan="2">
<div class="formproperties_div"><img alt="" src="/_imgs/ico_18_settings.gif" align="absmiddle" class="form_properties_img_BackOffice"><loc:Text ResourceId="Web._forms.properties.BOISection" runat="server"/></div>
</td>
</tr>
<tr>
<td class="form_properties_td_BackOffice"><loc:Text ResourceId="Web._forms.properties.properties.aspx_59" runat="server"/></td>
<td><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_stateCode)%></td>
</tr>
<tr>
<td class="form_properties_td_BackOfficeStateDesc" colspan="2"><label for="propertiesArea"><loc:Text ResourceId="Web._forms.properties.properties.aspx_63" runat="server"/></label><br>
<textarea id="propertiesArea" maxlength="10000" style="margin-top:4px;overflow-y:scroll; width:100%;height:60px;" readonly="true"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_stateDescription)%></textarea>
</td>
</tr>
</tbody>
</table>
</frm:DialogForm>
</body>
</html>
