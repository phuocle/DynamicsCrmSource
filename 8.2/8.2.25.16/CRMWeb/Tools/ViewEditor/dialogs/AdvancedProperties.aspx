#ifdef DEBUG
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AdvancedProperty.AdvancedPropertyPage"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_3" runat="server"/></title>
<script language="javascript">
var _queryApi;
var _rootName;
var _rowName;
var _objectType;
var _idColumn;
var _objIdColumn;
var _ckIcon;
var _ckPreview;
var _ckCheck;
var _ckCust;
var _ckQuickFind;
var _ckDefault;

Sys.Application.add_load(function () {
var oArgs = getDialogArguments();
_queryApi = $get('queryApiId');
_rootName = $get('rootNameId');
_rowName = $get('rowNameId');
_objectType = $get('objectTypeId');
_objIdColumn = $get('objIdColumnId');
_ckIcon = $get('ckIcon');
_ckPreview = $get('ckPreview');
_ckCheck = $get('ckCheck');
_ckCust = $get('ckCust');
_ckQuickFind = $get('ckQuickFind');
_ckDefault = $get('ckDefault');
_idColumn = $get('idColumnId');
with (oArgs) {
var SelectQueryType = new Select();
SelectQueryType.ID = "queryType";
SelectQueryType.Selected = sQueryType;
SelectQueryType.OnChange = "updateUI(this)";
SelectQueryType.AddOption(LOCID_STANDARD_VIEW, "0");
SelectQueryType.AddOption(LOCID_ADVANCED_FIND_VIEW, "1");
SelectQueryType.AddOption(LOCID_ASSOCIATED_VIEW, "2");
SelectQueryType.AddOption(LOCID_QUICK_FIND_VIEW, "4");

SelectQueryType.AddToControl($get('tdQueryType'));

_queryApi.value = sQueryApi;
_rootName.value = sRootName;
_rowName.value = sRowName;
_objectType.value = sReturnTypeCode;
_idColumn.value = sIdCol;

if (sMultiObjId) {
_objIdColumn.value = sMultiObjId;
}

_ckIcon.checked = bGridIcon;
_ckPreview.checked = bGridPreview;
_ckCheck.checked = bGridCheck;
_ckCust.checked = bViewCustomizable;
_ckQuickFind.checked = bViewQuickFind;
_ckDefault.checked = bViewDefault;



_queryApi.defaultValue = sQueryApi;

if (_queryApi.value == "") {
_rootName.value = "resultset";
_rowName.value = "result";
}
else {
_rootName.disabled = false;
_rowName.disabled = false;
}
}
});


function Ok()
{
if (_objectType.value == "")
{
alert(LOCID_NEED_RETURN_OTC);
_objectType.focus();
return false;
}

if (_queryApi.value != "" && _queryApi.value != _queryApi.defaultValue)
{
if (!confirm(LOCID_REMOVE_FETCH_XML))
{
return false;
}
}

if (_rootName.value == "")
{
if (confirm(LOCID_ERR_BLANK_ROOT_NODE))
{
_rootName.value = "resultset";
}
else
{
return false;
}
}

var o = new Object();
o.sQueryApi = _queryApi.value;
o.sRootName = _rootName.value;
o.sRowName = _rowName.value;
o.sQueryType		= queryType.value;
o.sIdCol = _idColumn.value;
o.sReturnTypeCode = _objectType.value;
o.sMultiObjId = _objIdColumn.value;
o.bGridPreview = _ckPreview.checked;
o.bGridIcon = _ckIcon.checked;
o.bGridCheck = _ckCheck.checked;
o.bViewCustomizable = _ckCust.checked;
o.bViewQuickFind = _ckQuickFind.checked;
o.bViewDefault = _ckDefault.checked;

window.returnValue = o;
closeWindow();
}


function updateUI()
{
_rootName.disabled = (_queryApi.value == "");
_rowName.disabled = _rootName.disabled;



var i = parseInt(_objectType.value, 10);
_objectType.value = (isNaN(i) ? "" : i);

if (_queryApi.value == "AUTO" || _queryApi.value == "")
{
_rootName.disabled = true;
_rowName.disabled = true;

if (_queryApi.value == "AUTO")
{
_rootName.value = "*";
_rowName.value = "*";
}
else
{
_rootName.value = "resultset";
_rowName.value = "result";
}
}

if (_objectType.value != "" && _idColumn.value != "")
{
btnDialogOk.disabled = false;
}
}

</script>


</head>
<body>

<table border="0" cellspacing="0" cellpadding="8" width="100%" height="100%">
<tr>
<td class="ms-crm-Dialog-Header">
<div class="ms-crm-Dialog-Header-Title"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_156" runat="server"/></div>
<div class="ms-crm-Dialog-Header-Desc"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_157" runat="server"/></div>
</td>
</tr>
<tr>
<td class="ms-crm-Dialog-Main override-height-Auto">

<table width="100%" cellspacing="0" cellpadding="4">
<col width="135"><col>
<tr>
<td colspan="2"><div class="secTitle"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_166" runat="server"/></div></td>
</tr>
<tr height="20">
<td><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_169" runat="server"/></td>
<td id="tdQueryType"></td>
</tr>
<tr title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_172' runat='server'/>">
<td><label for="objectTypeId"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_173" runat="server"/></label></td>
<td><input type="text" id="objectTypeId" name="objectType" onkeyup="updateUI();" maxlength="4"/></td>
</tr>
<tr>
<td colspan="2"><div class="secTitle" style="margin-top:10px;"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_177" runat="server"/></div></td>
</tr>
<tr title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_179' runat='server'/>">
<td><label for="queryApiId"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_180" runat="server"/></label></td>
<td><input type="text" id="queryApiId" name="queryApi" onkeyup="updateUI();" maxlength="100"/></td>
</tr>
<tr title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_183' runat='server'/>">
<td><label for="rootNameId"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_184" runat="server"/></label></td>
<td><input type="text" id="rootNameId" name="rootName" onkeyup="updateUI();" maxlength="50" disabled /></td>
</tr>
<tr title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_187' runat='server'/>">
<td><label for="rowNameId"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_188" runat="server"/></label></td>
<td><input type="text" id="rowNameId" name="rowName" onkeyup="updateUI();" maxlength="50" disabled /></td>
</tr>
<tr title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_191' runat='server'/>">
<td><label for="idColumnId"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_193" runat="server"/></label></td>
<td><input type="text" id="idColumnId" name="idColumn" onkeyup="updateUI();" maxlength="50"/></td>
</tr>
<tr title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_195' runat='server'/>">
<td><label for="objIdColumnId"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_196" runat="server"/></label></td>
<td><input type="text" id="objIdColumnId" name="objIdColumn" onkeyup="updateUI();" maxlength="50"/></td>
</tr>
</table>

<table cellpadding="0" width="100%" style="table-layout:fixed;margin-top:13px;">
<col><col width="16"></col>
<tr>
<td valign="top">

<div class="secTitle"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_206" runat="server"/></div>

<table width="100%" cellspacing="0" cellpadding="4" class="AdvancedProperties_table">
<col width="20"><col>
<tr>
<td><input type="checkbox" class="checkbox" onclick="updateUI();" id="ckIcon"></td>
<td><label for="ckIcon"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_212" runat="server"/></label></td>
</tr>
<tr>
<td><input type="checkbox" class="checkbox" onclick="updateUI();" id="ckPreview"></td>
<td><label for="ckPreview"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_216" runat="server"/></label></td>
</tr>
<tr>
<td><input type="checkbox" class="checkbox" onclick="updateUI();" id="ckCheck"></td>
<td><label for="ckCheck"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_220" runat="server"/></label></td>
</tr>
</table>

</td>
<td>&nbsp;</td>
<td valign="top">
<div class="secTitle"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_227" runat="server"/></div>

<table width="100%" cellspacing="0" cellpadding="4" class="AdvancedProperties_table_Title">
<col width="20"><col>
<tr>
<td><input type="checkbox" class="checkbox" onclick="updateUI();" id="ckCust"></td>
<td><label for="ckCust"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_233" runat="server"/></label></td>
</tr>
<tr>
<td><input type="checkbox" class="checkbox" onclick="updateUI();" id="ckQuickFind"></td>
<td><label for="ckQuickFind"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_237" runat="server"/></label></td>
</tr>
<tr>
<td><input type="checkbox" class="checkbox" onclick="updateUI();" id="ckDefault"></td>
<td><label for="ckDefault"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AdvancedProperties.aspx_241" runat="server"/></label></td>
</tr>
</table>

</td>
</tr>
</table>
</td>
</tr>
<tr>
<td class="ms-crm-Dialog-Buttons">
<ui:Button ID="btnDialogOk" OnClick="Ok();" Disabled=true ResourceId="A4A4842B-7564-4BCF-B21D-4D6A78F17BE1" runat="server"></ui:Button>
&nbsp;
<ui:Button OnClick="closeWindow();" ResourceId="C5C18B6A-47D1-4176-BD01-CD39ACF15234" runat="server"></ui:Button>
</td>
</tr>
</table>

</body>
</html>
#endif
