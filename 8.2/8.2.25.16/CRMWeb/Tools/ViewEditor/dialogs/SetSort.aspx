<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.ViewEditor.Dialogs.SetSort"   %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_14" runat="server"/></title>

<script language="javascript">

var pAttrSort, pAttrSortOrder, sAttrSort, sAttrSortOrder;
var sortColCtrl = null;
var sortCol2Ctrl = null;
var _rdDescend = null;
var _rdDescend2 = null;
var _rdAscend = null;
var _rdAscend2 = null;
Sys.Application.add_load(PageLoad)
function PageLoad()
{
var oArgs = getDialogArguments();
var oNodes = XUI.Xml.SelectNodes(oArgs.oGridXml, "//row/cell", null);
var sEntityName = oArgs.sEntityName;
_rdDescend = $get('rdDescend');
_rdDescend2 = $get('rdDescend2');
_rdAscend = $get('rdAscend');
_rdAscend2 = $get('rdAscend2');
sortColCtrl = Mscrm.FormControlInputBehavior.GetBehavior('sortCol');
sortCol2Ctrl = Mscrm.FormControlInputBehavior.GetBehavior('sortCol2');

var oOrderNodes = oArgs.sSortCol;
pAttrSort = oOrderNodes[0].getAttribute("attribute");
pAttrSortOrder = oOrderNodes[0].getAttribute("descending") == "true" ? true : false;
sAttrSort = "undefinedselectattribute";
sAttrSortOrder = false;

if(oOrderNodes.length > 1)
{
sAttrSort = oOrderNodes[1].getAttribute("attribute");
sAttrSortOrder = oOrderNodes[1].getAttribute("descending") == "true" ? true : false;
}




var SelectSortCol		= new Select();
SelectSortCol.ID		= "sortCol";
SelectSortCol.Selected	= pAttrSort;
SelectSortCol.OnChange = "primarySortCoumnChangeHandler()";

var SelectSortCol2 = new Select();
SelectSortCol2.ID = "sortCol2";
SelectSortCol2.Selected = sAttrSort;
SelectSortCol2.AddOption(LOCID_AF_SORT_SELECT, "undefinedselectattribute");

var iLen = oNodes.length;
for (var i=0; i < iLen; i++)
{
var sFieldName = oNodes[i].getAttribute("name");
if (isSortableField(oArgs.oFieldsXml, sEntityName, sFieldName))
{
SelectSortCol.AddOption(GetFieldDisplayName(oArgs.oPropertiesXml, sEntityName, sFieldName), sFieldName);
if(sFieldName != pAttrSort)
{
SelectSortCol2.AddOption(GetFieldDisplayName(oArgs.oPropertiesXml, sEntityName, sFieldName), sFieldName);
}
}
}
SelectSortCol.AddToControl($get('sortColumn'));
SelectSortCol2.AddToControl($get('sortColumn2'));
sortColCtrl = Mscrm.FormControlInputBehavior.GetBehavior('sortCol');
sortCol2Ctrl = Mscrm.FormControlInputBehavior.GetBehavior('sortCol2');


if(pAttrSortOrder == true)
{
_rdDescend.checked = true;
}
else
{
_rdAscend.checked = true;
}


if(sAttrSortOrder == true)
{
_rdDescend2.checked = true;
}
else
{
_rdAscend2.checked = true;
}
}

function applychanges()
{
var change = false;
var checkedDesc = _rdDescend.checked;
var sortColSelectedValue = sortColCtrl.get_dataValue();

var checkedDesc2 = _rdDescend2.checked;
var sortColSelectedValue2 = sortCol2Ctrl.get_dataValue();
if (pAttrSortOrder != checkedDesc || sortColCtrl.get_defaultValue() != sortColSelectedValue)
{
change = true;
}




if (sortCol2Ctrl.get_defaultValue() == "undefinedselectattribute" && sortColSelectedValue2 != "undefinedselectattribute")
{
change = true;
}
else if (sortCol2Ctrl.get_defaultValue() != "undefinedselectattribute" && (sAttrSortOrder != checkedDesc2 || sortCol2Ctrl.get_defaultValue() != sortColSelectedValue2))
{
change = true
}
Mscrm.Utilities.setReturnValue(new Array(change, checkedDesc, sortColSelectedValue, checkedDesc2, sortColSelectedValue2));
closeWindow();
}

function primarySortCoumnChangeHandler()
{
var oNodes = XUI.Xml.SelectNodes(getDialogArguments().oGridXml, "//row/cell", null);
var sEntityName = getDialogArguments().sEntityName;
var iLen = oNodes.length;
var selectedSecondaryOption = sortCol2Ctrl.get_dataValue();
var existingOptions = sortCol2Ctrl.get_options();
for (var i = 1; i < existingOptions.length; i++)
{
sortCol2Ctrl.RemoveOption(existingOptions[i].DataValue);
}

var selectedIndex = 0;
for (var i=0, j = 0; i < iLen; i++)
{
var sFieldName = oNodes[i].getAttribute("name");
if (isSortableField(getDialogArguments().oFieldsXml, sEntityName, sFieldName))
{
if (sFieldName != sortColCtrl.get_dataValue())
{
sortCol2Ctrl.AddOption(GetFieldDisplayName(getDialogArguments().oPropertiesXml, sEntityName, sFieldName), sFieldName);
j++;
if(sFieldName == selectedSecondaryOption)
{
selectedIndex = j;
}
}

}
}
sortCol2Ctrl.set_selectedIndex(selectedIndex);
}
function cancel()
{
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="110"/><col/>


<tr height="25">
<td style="overflow:hidden; text-overflow:ellipsis;"><nobr><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_64" runat="server"/></nobr></td>
<td id="sortColumn"></td>
</tr>
<tr>
<td valign="top">&nbsp;</td>
<td>
<table width="100%" cellspacing="0" cellpadding="0">
<col width="20"><col>
<tr>
<td><input type="radio" class="radio" name="rdDir" id="rdAscend"></td>
<td><label for="rdAscend"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_74" runat="server"/></label></td>
</tr>
<tr>
<td><input type="radio" class="radio" name="rdDir" id="rdDescend"></td>
<td><label for="rdDescend"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_78" runat="server"/></label></td>
</tr>
</table>
</td>
</tr>


<tr height="25">
<td style="overflow:hidden; text-overflow:ellipsis;"><nobr><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_68" runat="server"/></nobr></td>
<td id="sortColumn2"></td>
</tr>
<tr>
<td valign="top">&nbsp;</td>
<td>
<table width="100%" cellspacing="0" cellpadding="0">
<col width="20"><col>
<tr>
<td><input type="radio" class="radio" name="rdDir2" id="rdAscend2"></td>
<td><label for="rdAscend2"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_74" runat="server"/></label></td>
</tr>
<tr>
<td><input type="radio" class="radio" name="rdDir2" id="rdDescend2"></td>
<td><label for="rdDescend2"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_78" runat="server"/></label></td>
</tr>
</table>
</td>
</tr>

</table>
</frm:DialogForm>
</body>
</html>
