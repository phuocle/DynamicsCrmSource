
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.ViewEditor.Dialogs.AddColumns"   %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="System.Globalization"%>

<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="JavaScript">
var RESULT_CANCEL = -1;
var RESULT_BACK = -2;
var RESULT_EXPORT = 10;
var	_oLastGlow;

var _bQFAddSearch = <%=(Mode == "qfaddsearch").ToString().ToLower()%>;

var _sYomiArray = new Array(['null', 'null']);


var _bExportSelect = <%=(Mode == "exportselectcol").ToString().ToLower()%>;


var _bUpdateOnAttr = <%=(Mode == "updateonattr").ToString().ToLower()%>;


var _bSelectMode = <%=(Mode == "select").ToString().ToLower()%>;

var _oAllFieldsXml;
var _oAllFieldPropertiesXml;
var _oEntitiesXml;
var _sPrimaryEntityName;
var _oArgs = getDialogArguments();
var _bShowRelatedEntities;
var _oFetchXml;
var _oGridXml;
var _iSelectedColumns = 0;
var _bIsSystemView = false;

var entityListElement;
var entityListComponent;
var _chkAll;
var _tblGridBar;
var _FieldList = null;
var oEntityList;
var _Fields = null;
var _entitiesForDisplayingHiddenFields = ['sharepointdocument', 'lead'];


if (IsCalledFromScriptSharp())
{
_bShowRelatedEntities = _oArgs.showRelatedEntities;
}
else
{
_bShowRelatedEntities = _oArgs.ShowRelatedEntities;
}

Sys.Application.add_load(addColumnsPage_onload);
function addColumnsPage_onload()
{
_chkAll = $get('chkAll');
_tblGridBar = $get('tblGridBar');
entityListElement = $get('entityList');
_FieldList = $get('FieldList');
entityListComponent = Mscrm.FormControlInputBehavior.GetBehavior('entityList');

with(_oArgs)
{
if (IsCalledFromScriptSharp())
{
_sPrimaryEntityName = primaryEntityName;
_oAllFieldsXml = fieldsXml;
_oAllFieldPropertiesXml = fieldPropertiesXml;
$get("btnBack").style.visibility = "hidden";
}
else
{
_sPrimaryEntityName = PrimaryEntityName;
_oAllFieldsXml = FieldsXml;
_oAllFieldPropertiesXml = FieldPropertiesXml;
}

if (_bExportSelect || _bQFAddSearch)
{
if (IsCalledFromScriptSharp())
{
_oFetchXml = XUI.Xml.LoadXml(fetchXml);
}
else
{
_oFetchXml = FetchXml;
}

}
if (IsCalledFromScriptSharp())
{
if (!IsNull(gridXml))
{
_oGridXml = gridXml;
}
}
else
{
if (!IsNull(GridXml))
{
_oGridXml = GridXml;
}
}

_FieldList.style.top = "42px";

if (_bShowRelatedEntities)
{
if (IsCalledFromScriptSharp())
{
_oEntitiesXml = entitiesXml;
}
else
{
_oEntitiesXml = EntitiesXml;
}
$get('trEntityList').style.display = "inline";
_FieldList.style.top = "60px";
populateEntityList();
}
}
if(!IsNull(_oArgs.bIsSystemView))
{
_bIsSystemView = _oArgs.bIsSystemView;
}
if (( Mscrm.Utilities.isIE8OrLower() && isArrayContainsValue(_entitiesForDisplayingHiddenFields, _sPrimaryEntityName))
|| ( !Mscrm.Utilities.isIE8OrLower() && _entitiesForDisplayingHiddenFields.indexOf(_sPrimaryEntityName) >= 0))
{
BuildFieldList(true);
}
else
{
BuildFieldList();
}
var _FieldListContainer = $get('FieldListContainer');



if(_FieldListContainer.style.display == "inline")
{
_FieldListContainer.style.display="block";
}


_Fields = $get('Fields');

if (_bUpdateOnAttr)
{
SelectUpdateAttributes();
}

if(_bQFAddSearch)
{
_sYomiArray = new Array(<% = YomiFields %>);
SelectQuickFindFields();
}

if(_bSelectMode || _bExportSelect)
{
UpdateFromGridXml();
SetColumnsCountFromGridXml();
SetColumnsLabel();
}
if(	_bSelectMode)
{
_chkAll.disabled = true;
}
}

function isArrayContainsValue(arrayContainer, targetValue)
{
if(!IsNull(arrayContainer) && arrayContainer instanceof Array)
{
for(var i=0; i<arrayContainer.length; i++)
{
if( arrayContainer[i] === targetValue)
{
return true;
}
}
}

return false;
}

function populateEntityList()
{
var oOption;
var oEntities = XUI.Xml.SelectNodes(_oEntitiesXml, "/entities/entity", null);

for(var i=0; i<oEntities.length; i++)
{


oOption = entityListComponent.AddOption(oEntities[i].getAttribute("displayname"), oEntities[i].getAttribute("relid"));
oOption.alias = oEntities[i].getAttribute("alias");
oOption.entityname = oEntities[i].getAttribute("name");

if (isNullOrEmptyString(oOption.alias))
{
oOption.selected = true;
}
}
entityListElement.currentEntityKey = entityListComponent.get_dataValue();

if(entityListElement.options.length <= 1)
{
entityListComponent.set_disabled(true);
}
else
{
entityListComponent.setFocus();
}
}


function SelectQuickFindFields()
{
_Fields = $get('Fields');
var oFetchXmlDOM, oQuickFindFields;

oQuickFindFields = XUI.Xml.SelectNodes(_oFetchXml, "/fetch/entity//filter[@isquickfindfields=1]", null);
if(oQuickFindFields.length == 0)
{




return;
}
oQuickFindFields = XUI.Xml.SelectNodes(oQuickFindFields[0], "condition", null);
var i = oQuickFindFields.length - 1;
var oCheckBox;
while(i >= 0)
{
var row = _Fields.rows.namedItem(oQuickFindFields[i].getAttribute("attribute"));
if (!IsNull(row))
{
oCheckBox = XUI.Html.DomUtils.GetFirstChild(row.cells[0]);
oCheckBox.checked = true;

chkClick(oCheckBox);
}
i--;
}
}



function SelectUpdateAttributes()
{
_Fields = $get('Fields');
var oAttrList
if (IsCalledFromScriptSharp())
{
oAttrList = _oArgs.gridXml;
}
else
{
oAttrList = _oArgs.GridXml;
}
var oAttrs = oAttrList.split(';');

var iLen = _Fields.rows.length;
for (var i = 0; i < iLen; i++)
{
var attrLength = oAttrs.length;
for (var j = 0; j < attrLength; j++)
{
if (_Fields.rows[i].id == oAttrs[j])
{
_Fields.rows[i].cells[0].children[0].checked = true;
break;
}
}
}
}


function IsCalledFromScriptSharp() {
return _oArgs.hasOwnProperty("primaryEntityName");
}


function back()
{
var oReturnValue = new Object();
oReturnValue.Action = RESULT_BACK;
window.returnValue = oReturnValue;
Mscrm.Utilities.setReturnValue(window.returnValue);
if (_bExportSelect)
{
if (!IsNull(window.opener) && !IsNull(window.opener.$get("dialogOkButton")))
{
window.opener.$get("dialogOkButton").focus();
}
}
closeWindow();
}


function cancel()
{
if(_bExportSelect)
{
var oReturnValue = new Object();
oReturnValue.Action = RESULT_CANCEL;
window.returnValue = oReturnValue;
Mscrm.Utilities.setReturnValue(window.returnValue);
}
closeWindow();
}


function getSelectedFields(oFields, aoSelectedFields, sEntityName, sAlias)
{
var i = 0;
var ii = 0;
var iLen = oFields.rows.length;
while (i < iLen)
{
if (XUI.Html.DomUtils.GetFirstChild(oFields.rows[i].cells[0]).getAttribute('returnvalue') == 1
|| XUI.Html.DomUtils.GetFirstChild(oFields.rows[i].cells[0]).checked)
{
aoSelectedFields.push(createFieldObj(oFields.rows[i], sEntityName, sAlias));
ii++;
}

i++;
}



if (_bUpdateOnAttr)
{
if (ii == iLen)
{
aoSelectedFields.push("true");
}
else
{
aoSelectedFields.push("false");
}
}

return ii;
}

function createFieldObj(oRow, sEntityName, sAlias)
{
var oDisplayNames = new Array(new LocalizedObj(XUI.Html.GetText(oRow.cells[1]), USER_LANGUAGE_CODE));
return new FieldObj(
XUI.Html.GetText(oRow.cells[2]).trim(),
XUI.Html.GetText(oRow.cells[3]).trim(),
oRow.getAttribute("orgrequired"),
oDisplayNames,
oDisplayNames,
null,
null,
null,
sEntityName,
sAlias
);
}


function applychanges()
{
_Fields = $get('Fields');

if (_bSelectMode && (_iSelectedColumns > <%= MaxSelectedColumns %>))
{
alert(formatString(LOCID_MAXCOLUMN_ERROR, <%= MaxSelectedColumns %>, _iSelectedColumns));
return;
}

var aoFields = new Array();
var oDisplayNames;

var i = 0;
var ii = 0;

if(!_bShowRelatedEntities)
{
ii = getSelectedFields(_Fields, aoFields, _sPrimaryEntityName, null);
}
else
{


saveEntityFieldsState(entityListElement.currentEntityKey);
var oEntities = entityListElement.options;
for(var j=0; j<oEntities.length; j++)
{
var oFieldListInfo = _aoFieldLists[oEntities[j].value];
if(!IsNull(oFieldListInfo))
{
UpdateFieldList(oFieldListInfo, false);

_Fields = $get('Fields');
ii += getSelectedFields(_Fields, aoFields, oEntities[j].entityname, oEntities[j].alias);
}
}
}


if (ii == 0 && _bQFAddSearch)
{
alert(LOCID_QUICK_FIND_FIELD_REQUIRED);
return false;
}

if(_bShowRelatedEntities)
{

var oReturnValue = new Object();
oReturnValue.Action = RESULT_EXPORT;
oReturnValue.FieldObjs = (!aoFields.length) ? false : aoFields;

if(!IsNull(_oAllFieldsXml))
{
oReturnValue.FieldsXml = Trim(XUI.Xml.XMLSerializer.serializeToString(_oAllFieldsXml));
}

if(!IsNull(_oAllFieldPropertiesXml))
{
oReturnValue.FieldPropertiesXml = Trim(XUI.Xml.XMLSerializer.serializeToString(_oAllFieldPropertiesXml));
}

if(!IsNull(_oGridXml))
{
oReturnValue.GridXml = Trim(XUI.Xml.XMLSerializer.serializeToString(_oGridXml));
}

if(!IsNull(_oFetchXml))
{
oReturnValue.FetchXml = Trim(XUI.Xml.XMLSerializer.serializeToString(_oFetchXml));
}

Mscrm.Utilities.setReturnValue(oReturnValue);
}
else
{
Mscrm.Utilities.setReturnValue((!aoFields.length) ? false : aoFields);
}
closeWindow();
}


function FieldListInfo(sHTML, sSortColumnName, bSortOrderAscend, bSelectAll)
{
this.sHTML = sHTML;
this.sSortColumnName = sSortColumnName;
this.bSortOrderAscend = bSortOrderAscend;
this.bSelectAll = bSelectAll;
}


var _aoFieldLists = new Array();
function entityChanged(e)
{
var oEntityList = e.target;
var sKey = entityListComponent.get_dataValue();
var sCurrentEntityKey = oEntityList.currentEntityKey;


var oOption = oEntityList.options[entityListComponent.indexOf(sKey)];
var sFieldsXml = GetFieldsXml(oOption.entityname, oOption.alias, _bIsSystemView);
if(IsNull(sFieldsXml))
{

entityListComponent.set_dataValue(sCurrentEntityKey);
return;
}


saveEntityFieldsState(sCurrentEntityKey);

_FieldList.innerHTML = "";


_oFieldXmlDoc = XUI.Xml.LoadXml(sFieldsXml);
var oFieldListInfo = _aoFieldLists[sKey];
if(oFieldListInfo == null)
{
_sSortColumnName = "displayname";
_bSortOrderAscend = true;
_chkAll.checked = false;
UpdateFieldList(null, false);
_aoFieldLists[sKey] = new FieldListInfo(_FieldList.innerHTML, _sSortColumnName, _bSortOrderAscend, _chkAll.checked);

if (_bSelectMode ||  _bExportSelect)
{
UpdateFromGridXml();
}
}
else
{
UpdateFieldList(oFieldListInfo, false);
if (_bSelectMode)
{
UpdateFromGridXml();
}
}
entityListElement.currentEntityKey = sKey;
}

function saveEntityFieldsState(sEntityKey)
{

var oFieldListInfo = _aoFieldLists[sEntityKey];
if(oFieldListInfo == null)
{

_aoFieldLists[sEntityKey] = new FieldListInfo(_FieldList.innerHTML, _sSortColumnName, _bSortOrderAscend, _chkAll.checked);
}
else
{

oFieldListInfo.sHTML = _FieldList.innerHTML;
oFieldListInfo.sSortColumnName = _sSortColumnName;
oFieldListInfo.bSortOrderAscend = _bSortOrderAscend;
oFieldListInfo.bSelectAll = _chkAll.checked;
}
}


function UpdateFromGridXml()
{
_Fields = $get('Fields');

var sKey = entityListComponent.get_dataValue();
var oOption = entityListElement.options[entityListComponent.indexOf(sKey)];
var sAlias = oOption.alias;

var oCells = XUI.Xml.SelectNodes(_oGridXml, "/grid/row/cell", null);

var oRow;
var oCheckBox;
var iPos;
var oFieldName;
for (var i=0; i< oCells.length; ++i)
{
oFieldName = GetFieldAliasName(oCells[i].getAttribute("name"));

if (sAlias == oFieldName.Alias)
{
oRow = _Fields.rows.namedItem(oFieldName.FieldName);
if (!IsNull(oRow))
{
oCheckBox = XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]);
oCheckBox.checked = true;
}
}

}
}


function UpdateGridAndFetchXml(sFieldName, oElement)
{



var sKey = entityListComponent.get_dataValue();
var oOption = entityListElement.options[entityListComponent.indexOf(sKey)];
var sAlias = oOption.alias;
var sEntityName = oOption.entityname;

var sFieldName;

if (!IsNull(sAlias) && sAlias != "")
{
sFieldName = sAlias + "." + sFieldName;
}


var oCell = XUI.Xml.SelectSingleNode(_oGridXml, "grid/row/cell[@name=\"" + sFieldName + "\"]", null);
if(oElement.checked && IsNull(oCell))
{

var oNewCell = _oGridXml.createElement("cell");
var oAttribute = _oGridXml.createAttribute("name");
oAttribute.nodeValue = sFieldName;
oNewCell.setAttributeNode(oAttribute);

var oRow = XUI.Xml.SelectSingleNode(_oGridXml, "grid/row", null);
oRow.appendChild(oNewCell);

if (_bSelectMode)
{

++_iSelectedColumns;
SetColumnsLabel();
}

if (_bExportSelect)
{

var oRowElement = oElement.parentNode.parentNode;
var oFieldObj = createFieldObj(oRowElement, sEntityName, sAlias)
addFieldToFetch(_oFetchXml, oFieldObj, sFieldName, _oEntitiesXml);
}
}
else if (!oElement.checked && !IsNull(oCell))
{

var oRow = XUI.Xml.SelectSingleNode(_oGridXml, "grid/row", null);
oRow.removeChild(oCell);

if (_bSelectMode)
{

--_iSelectedColumns;
SetColumnsLabel();
}

if (_bExportSelect)
{

removeFieldFromFetch(_oFetchXml, sFieldName);
}
}
}


function SetColumnsCountFromGridXml()
{
var oCells = XUI.Xml.SelectNodes(_oGridXml, "grid/row/cell", null);
if (!IsNull(oCells))
{
_iSelectedColumns = oCells.length;
}
}


function SetColumnsLabel()
{
var columnLabel = document.getElementById("SelectedColumnsLabel");
if (columnLabel)
{
var maxSelectedColumns = <%= MaxSelectedColumns %>;
XUI.Html.SetText(columnLabel, formatString(LOCID_COLUMNS_SELECTED, IsNull(_iSelectedColumns)? 0 : _iSelectedColumns, maxSelectedColumns));
}
}


function SelectAll(e)
{
_Fields = $get('Fields');
var o = e.target;
var bIsChecked = o.checked;
var iLen = _Fields.rows.length;

for (i = 0; i < iLen; i++)
{
var checkbox = XUI.Html.DomUtils.GetFirstChild(_Fields.rows[i].cells[0]);
checkbox.checked  = bIsChecked;
if (bIsChecked)
{
checkbox.setAttribute("checked", "checked");
}
else
{
checkbox.removeAttribute("checked");
}
if (_bExportSelect)
{
chkClick(XUI.Html.DomUtils.GetFirstChild(_Fields.rows[i].cells[0]));
}
}
e.stopPropagation();
}

function on(e)
{
_oLastGlow = e.target;

while (_oLastGlow.tagName !=  "TR" )
{
_oLastGlow = _oLastGlow.parentNode;
}

_oLastGlow.className = "field-List-Row";
}

function off(e)
{
if (_oLastGlow)	_oLastGlow.className = "";
}


function chkSwitch(ele, ev)
{
ele.checked = !ele.checked;
chkClick(ele, ev);
}


function chkClick(ele, ev)
{
if (!IsNull(ev))
{
ev.stopPropagation();
}


if (ele.checked)
{
ele.setAttribute("checked", "checked");
}
else
{
ele.removeAttribute("checked");
}

id = ele.id;
var realId = new String(id);
realId = realId.replace(/^ch_/, "");

if(_bShowRelatedEntities)
{


var oCheck = ele.checked ? 1 : 0;

ele.setAttribute("returnvalue", oCheck);

if (_bSelectMode || _bExportSelect)
{

UpdateGridAndFetchXml(realId, ele);
}
}


var i = 0;

while(_sYomiArray[i][0] != "null")
{
var mainObj = null;
var pairObj = null;

if(realId == _sYomiArray[i][0])
{
mainObj = document.getElementById("ch_" + _sYomiArray[i][0]);
pairObj = document.getElementById("ch_" + _sYomiArray[i][1]);
}

if(realId == _sYomiArray[i][1])
{
mainObj = document.getElementById("ch_" + _sYomiArray[i][1]);
pairObj = document.getElementById("ch_" + _sYomiArray[i][0]);
}


if(mainObj != null && pairObj != null)
{
if(mainObj.checked == true)
{
pairObj.checked = true;
}
else
{
pairObj.checked = false;
}
}

i++;
}
}
</script>

<style type="text/css">
div.ms-crm-DialogStrict-Main
{
-webkit-overflow-scrolling:touch;
}
button#btnBack
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
margin-right: 30px !important;
float:right !important;
<% }else{ %>
margin-left: 30px !important;
float:left !important;
<% } %>
}
</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div height="25px" id="trEntityList" style="display:none">
<div style="display: inline-block; width: 150px">
<nobr><label for="entityList"><loc:Text ResourceId="Label_AddColumns_RecordType" runat="server" />&nbsp;</label></nobr>
</div>
<div style="display: inline-block; width: 200px">
<ui:Select runat="server" id="entityList" onchange="entityChanged(new Sys.UI.DomEvent(event))"/>
</div>
</div>
<div height="22px" style = "position: relative; top: 20px;">
<table id="tblGridBar" cellpadding="0" cellspacing="0" class="ms-crm-ViewForm-Header">
<tr onclick="onGridColumnClick(new Sys.UI.DomEvent(event));" onmouseover="onGridColumnMouseOver(new Sys.UI.DomEvent(event));">
<td width="5%" class="AddColumns_td_SelectAll"><input id="chkAll" type="checkbox" class="checkbox" onclick="SelectAll(new Sys.UI.DomEvent(event));" title="<loc:Text ResourceId='Grid.CheckAll.ViewColumns.Title' runat='server'/>" /></td>
<td class="ms-crm-ViewForm-Spacer"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th width="35%" class="ViewForm_AddFields_th_gridheader" field="displayname"><nobr><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AddColumns.aspx_208" runat="server"/><img alt="" src="/_imgs/grid/bar_up.gif" class="addFields_img_barUp"></nobr></th>
<td class="ms-crm-ViewForm-Spacer"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th class="ViewForm_AddFields_th_gridheader" field="name" width="29%"><nobr><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AddColumns.aspx_210" runat="server"/><img alt="" src="/_imgs/grid/bar_up.gif" class="addFields_img_barUp"></nobr></th>
<td class="ms-crm-ViewForm-Spacer"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th class="ViewForm_AddFields_th_gridheader" field="datatype" width="29%"><nobr><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.AddColumns.aspx_212" runat="server"/><img alt="" src="/_imgs/grid/bar_up.gif" class="addFields_img_barUp"></nobr></th>
<td class="ms-crm-ViewForm-Spacer"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<td width="14px">&nbsp;</td>
</tr>
</table>
</div>
<% if (Mode == "select") {%>
<div height="80%">
<% } else {%>
<div>
<% } %>
<div id="FieldListContainer" valign="top" style="display:inline;">
<div id="FieldList" class="AddColumns_div_FieldList" ></div>
</div>
</div>
<% if (Mode == "select") {%>
<div style="position:absolute;bottom:0px;">
<div valign="bottom" >
<ui:LabelUI ID="SelectedColumnsLabel" runat=server> </ui:LabelUI>
</div>
</div>
<% } %>
</frm:DialogForm>
</body>
</html>
