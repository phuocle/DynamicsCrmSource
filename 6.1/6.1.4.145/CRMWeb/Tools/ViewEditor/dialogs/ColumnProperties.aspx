<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.ViewEditor.Dialogs.ColumnProperties" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.aspx_19" runat="server"/></title>

<script type="text/javascript">

var _isPresenceEnabled = false;
var _dataType = null;
var _rdWidth = null;
var _PresenceEnabled = null;

Sys.Application.add_load(function () {
var o = getDialogArguments();
_rdWidth = document.getElementsByTagName('rdWidth');
_dataType = $get('dataType');
_PresenceEnabled = Mscrm.FormControlInputBehavior.GetBehavior('PresenceEnabled');
XUI.Html.SetText($get('columnTitle'), o.fieldDesc);
XUI.Html.SetText($get('entityTitle'), o.entityDesc);
XUI.Html.SetText($get('tdSchemaName'), o.sSchemaName);
if (XUI.Html.GetText(_dataType) == "") {
XUI.Html.SetText(_dataType, o.fieldType);
}


if (_isPresenceEnabledAttribute) {
var iWidth = 10;


var oWidth;
var sAlias = "";
var oEntitiesXmlNode = o.EntitiesXml;
var oAlias = XUI.Xml.SelectSingleNode(oEntitiesXmlNode, "entities/entity[@relid=\"" + _sRelationshipId + "\"]/@alias", null);
if (oAlias != null) {
sAlias = oAlias.value;
if (sAlias !== "") {
var sFieldName = sAlias + "." + _sFieldName;
oWidth = o.FieldSizes[sFieldName];
if (oWidth != null) {

_isPresenceEnabled = true;
iWidth = oWidth;
}
}
}

if (_sRelationshipId == "") {
oWidth = o.FieldSizes[_sFieldName];
if (oWidth != null) {

_isPresenceEnabled = true;
iWidth = oWidth;
}
}

_PresenceEnabled.set_dataValue(_isPresenceEnabled);
_PresenceEnabled.set_disabled(iWidth != 10);
}

if (o.primary) {
tblWidth.style.display = "none";
divAuto.style.display = "inline";
}
});

function getWidth()
{
if($get('rd25').checked == true)
{
return $get('rd25').value;
}

else if ($get('rd50').checked == true) {
return $get('rd50').value;
}

else if ($get('rd75').checked == true) {
return $get('rd75').value;
}

else if ($get('rd100').checked == true) {
return $get('rd100').value;
}

else if ($get('rd125').checked == true) {
return $get('rd125').value;
}

else if ($get('rd150').checked == true) {
return $get('rd150').value;
}
        else if ($get('rd200').checked == true) {            return $get('rd200').value;        }

else if ($get('rd300').checked == true)
{
return $get('rd300').value;
}
else
{
return "100";
}
}

function applychanges()
{
var s = getWidth();
var oReturnValue = new Object();
oReturnValue.Size = s;
oReturnValue.PresenceEnabled = null;

if (_isPresenceEnabledAttribute)
{

if (_PresenceEnabled.get_dataValue() !== _isPresenceEnabled)
{
oReturnValue.PresenceEnabled = _PresenceEnabled.get_dataValue();

oReturnValue.FieldName = _sFieldName;
oReturnValue.RelationshipId = _sRelationshipId;
oReturnValue.EntityName = _sEntityName;
oReturnValue.PrimaryField = _primaryField;
}
}

Mscrm.Utilities.setReturnValue(oReturnValue);
closeWindow();
}

function cancel()
{
closeWindow();
}

function updateUI()
{
$get('butBegin').disabled = false;
}

</script>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">
<table border="0" cellspacing="0" cellpadding="8" width="100%" height="100%">
<tr>
<td class="ms-crm-Dialog-Main override-height-Auto">
<table width="100%" style="table-layout:fixed;" cellpadding="6" cellspacing="0">
<col width="150"><col>
<tr>
<td><loc:Text ResourceId="ColumnProperties_Entity_Name" runat="server"/></td>
<td id="entityTitle"></td>
</tr>
<tr>
<td><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.aspx_82" runat="server"/></td>
<td id="columnTitle"></td>
</tr>
<tr>
<td><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.aspx_86" runat="server"/></td>
<td id="dataType" runat="server"></td>
</tr>
<tr>
<td><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.aspx_90" runat="server"/></td>
<td id="tdSchemaName"></td>
</tr>
<tr id="trPresenceEnabled" runat="server" visible="false">
<td colspan="2"> <ui:CheckBox ID="PresenceEnabled" runat="server" onclick="updateUI();" value="true" />
<label for="PresenceEnabled"><loc:Text ResourceId="FormLabelIMPresenceEnabled" runat="server"/></label>
</td>
</tr>
<tr>
<td colspan="2">
<div class="ms-crm-Column-SelectWidth"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.aspx_96" runat="server"/></div>

<table id="tblWidth" width="100%" cellspacing="0" cellpadding="2" style="margin-top:10px;">
<col /><col width="52" /><col width="52" /><col width="52" /><col width="52" /><col width="52" /><col width="52" /><col width="52" /><col width="52" /><col />
<tr>
<td>&nbsp;</td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd25" value="25" <%if (_size=="25") { Response.Write ( "checked"); } %>></td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd50" value="50" <%if (_size=="50") { Response.Write ( "checked"); } %>></td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd75" value="75" <%if (_size=="75") { Response.Write ( "checked"); } %>></td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd100" value="100" <%if (_size=="100") { Response.Write ( "checked"); } %>></td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd125" value="125" <%if (_size=="125") { Response.Write ( "checked"); } %>></td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd150" value="150" <%if (_size=="150") { Response.Write ( "checked"); } %>></td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd200" value="200" <%if (_size=="200") { Response.Write ( "checked"); } %>></td>
<td align="center"><input type="radio" onclick="updateUI();" class="radio" name="rdWidth" id="rd300" value="300" <%if (_size=="300") { Response.Write ( "checked"); } %>></td>
<td>&nbsp;</td>
</tr>
<tr style="color:#555577;">
<td>&nbsp;</td>
<td align="center"><label for="rd25"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.25px" runat="server"/></label></td>
<td align="center"><label for="rd50"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.50px" runat="server"/></label></td>
<td align="center"><label for="rd75"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.75px" runat="server"/></label></td>
<td align="center"><label for="rd100"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.100px" runat="server"/></label></td>
<td align="center"><label for="rd125"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.125px" runat="server"/></label></td>
<td align="center"><label for="rd150"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.150px" runat="server"/></label></td>
<td align="center"><label for="rd200"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.200px" runat="server"/></label></td>
<td align="center"><label for="rd300"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.300px" runat="server"/></label></td>
<td>&nbsp;</td>
</tr>
</table>
<div style="display:none;" id="divAuto">
<br>
<loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ColumnProperties.aspx_116" runat="server"/>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
