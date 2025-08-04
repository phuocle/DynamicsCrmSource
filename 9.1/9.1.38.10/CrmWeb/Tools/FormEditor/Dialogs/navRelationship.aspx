<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.NavigationRelationship" %>
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
Sys.Application.add_load(OnLoad);
function OnLoad() {
var oArgs = getDialogArguments();
Mscrm.EditNavRelationship.relationName = oArgs.relationName;
Mscrm.EditNavRelationship.objectTypeCode = oArgs.objectTypeCode;
Mscrm.EditNavRelationship.displayName = oArgs.displayName;

if (oArgs.relationName.startsWith('hardcoded_'))
{
$get('divSchemaSection').style.display = "none";
$get('editSchemaPropButtonRow').style.display = "none";
$get('nometadataMessageRow').style.display = "";
$get('txtLabel').value = oArgs.displayName;

}
else
{
$get('divSchemaSection').style.display = "inline";
$get('editSchemaPropButtonRow').style.display = "";
$get('nometadataMessageRow').style.display = "none";
Mscrm.EditNavRelationship.populateNavRelationshipDialog();
}
}
function applychanges() {
if ($get('txtLabel').value != Mscrm.EditNavRelationship.originalDisplayName)
Mscrm.Utilities.setReturnValue(new Mscrm.NavigationRelationship($get('txtLabel').value));
else
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}
function cancel() {
closeWindow();
}


</script>
<style>
.ms-crm-TabContainer
{
top:20px;
bottom:22px;
left:0px;
right:0px;
}
</style>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">
<div style="width:100%;height:100%;position:relative;min-width:250px;">
<div class="ms-crm-TabBar-Cell formEditor-TabBar">



<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div class="ms-crm-TabContainer">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="tabDisplay" class="ms-crm-Tab">
<div id="divLabelSection" >
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_173" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px"><col width="65px"><col>
<tr>
<td colspan="2"><label for="txtLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_180" runat="server"/></label></td>
<td><ui:TextBox id="txtLabel" runat="server"/></td>
</tr>
</table>
</fieldset>
</div>
</div>



<div id="tabSchema" class="ms-crm-Tab">



<div id="divSchemaSection" >
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_198" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="110"><col>

<tr>
<td><label for="txtRelationshipDisplayName"><loc:Text ResourceId="Dlg_Update_Nav_Relationship_Display_Name" runat="server"/></label></td>
<td><ui:TextBox id="txtRelationshipDisplayName" Disabled="true" runat="server"/></td>
</tr>

<tr>
<td><label for="txtRelationshipSchemaName"><loc:Text ResourceId="Dlg_Update_Nav_Relationship_Name" runat="server"/></label></td>
<td><ui:TextBox id="txtRelationshipSchemaName" Disabled="true" runat="server"/></td>
</tr>

<tr>
<td id="oneToManyTD" valign="top"><label for="txtRelationshipEntityName"><loc:Text ResourceId="Dlg_Update_Nav_Relationship_Related_Entity_Name" runat="server"/></label></td>
<td id="manyToManyTD" valign="top"><label for="txtRelationshipEntityName"><loc:Text ResourceId="Dlg_Update_Nav_Relationship_Other_Entity_Name" runat="server"/></label></td>
<td><ui:TextBox id="txtRelationshipEntityName" Disabled="true" runat="server"/></textarea></td>
</tr>

<tr>
<td><label for="txtRelationshipDisplayOption"><loc:Text ResourceId="Dlg_Update_Nav_Relationship_Display_Option" runat="server"/></label></td>
<td><ui:TextBox id="txtRelationshipDisplayOption" Disabled="true" runat="server"/></td>
</tr>
</table>
</fieldset>
</div>

<table style="width:100%">
<tr id='editSchemaPropButtonRow'>
<td><ui:Button id="editSchProps" onclick="Mscrm.EditNavRelationship.editRelationshipSchema();" width="20" ResourceId="Edit_View_From_SubGrid" runat="server"/></ui:Button></td>
</tr>
<tr id="nometadataMessageRow" style="display:none">
<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
<td><loc:Text ResourceId="Dlg_Form_Nav_Relationship_No_Metadata_Message" runat="server"/></td>
</tr>

</table>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
