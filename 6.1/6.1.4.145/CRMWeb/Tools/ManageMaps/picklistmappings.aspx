<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.ManageMaps.PicklistMappings" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
tr.gridheader
{
background-color:	#f0f0f0;
width:				200px;
height:				15px;
border:				1px solid #dbdac9;
border-bottom:		1px solid #c5c1b1;
}
</style>
<script language=javascript>
var dataXml = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(dataXml) %>;
var attributeXml = "";
var dataXmlDoc = null;
var attributeXmlDoc = null;
var entityTypeCode = "<%= entityTypeCode.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>";
var currentSourceSortFunc = sortArrayAsc;
var _selectedItem;
var _selectedSourceItem;
var _selectedTargetItem;
var _selectedSourceValueItem;
var _selectedTargetValueItem;
var defaultValText = "";
var totalValuesCount = 0;
var emptyLabel = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("DataManagement.ImportMap.PicklistMap.EmptySourceValue.Label"))%>;
var unmappedLabel = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("DataManagement.ImportMap.PicklistMap.UnmappedSourceValue.Label"))%>;

function window.onload()
{
btn_id_Map.title=LOCID_PICKLIST_MAP_TOOLTIP;
if(dataXml != "")
{
var attributecommand = new RemoteCommand("ImportWebService", "GetAttributeXmlForEntity");
attributecommand.SetParameter("entityTypeCode", entityTypeCode);
result = attributecommand.Execute();
if(result.Success == true)
{
attributeXml = result.ReturnValue;
}

dataXmlDoc = XUI.Xml.LoadXml(dataXml);
attributeXmlDoc = XUI.Xml.LoadXml(attributeXml);
btn_id_Map.disabled = true;
PopulateAttributeMappings();
}
}

function PopulateAttributeMappings()
{
var sourceAttributelistItemsHtml = new Array();
var targetAttributelistItemsHtml = new Array();
var nodeList = XUI.Xml.SelectNodes(dataXmlDoc, "//AttributeMap", null);
var sourceAttributelist = new Array();
if(!IsNull(nodeList))
{
for(var i = 0; i < nodeList.length; i++)
{
sourceAttributelist[i]= XUI.Xml.GetText(XUI.Xml.SelectSingleNode(nodeList[i], "SourceAttributeName", null));
}
}
sourceAttributelist.sort(currentSourceSortFunc);
for(var i = 0; i < sourceAttributelist.length; i++)
{
var displayName = "";
var sourceAttributeName = escapeSingleQuotesAndBackSlashes(sourceAttributelist[i]);
var attributeMapXPath = "//AttributeMap[SourceAttributeName=\"" + sourceAttributeName + "\" ]";
var attributeNode=XUI.Xml.SelectSingleNode(dataXmlDoc, attributeMapXPath, null);
if(attributeNode==null)
{
continue;
}
var sourceAttributeNode = XUI.Xml.SelectSingleNode(attributeNode, "SourceAttributeName", null);
var targetAttributeNode = XUI.Xml.SelectSingleNode(attributeNode, "TargetAttributeName", null);

var logicalName=XUI.Xml.GetText(targetAttributeNode);
var attributeXpath = "//Attribute[@logicalname=\"" + logicalName + "\" ]";
var node = XUI.Xml.SelectSingleNode(attributeXmlDoc, attributeXpath, null);

if(!IsNull(node))
{
displayName = node.getAttribute("displayname");
}

var pickListNode = XUI.Xml.SelectSingleNode(attributeNode, "PicklistMaps/PicklistMap", null);
var imgHtml = "";

if(!IsNull(pickListNode))
{



var emptyAndUnmappedMappingPresent = false;

if(!IsNull(XUI.Xml.SelectSingleNode(attributeNode, "PicklistMaps/PicklistMap[(SourceValue = \"\" and ProcessCode=\"Process\")]", null)))
{
emptyAndUnmappedMappingPresent = true;
}

if(emptyAndUnmappedMappingPresent && IsNull(XUI.Xml.SelectSingleNode(attributeNode, "PicklistMaps/PicklistMap[ProcessCode = \"Unmapped\"]", null)))
{
emptyAndUnmappedMappingPresent = false;
}

if(emptyAndUnmappedMappingPresent)
{
var pickListXpath = "PicklistMaps/PicklistMap[TargetValue=\"\"]";
var nodes = XUI.Xml.SelectNodes(attributeNode, pickListXpath, null);
if(nodes.length == 0)
{
imgHtml = "<img alt='' align='absmiddle' CLASS='dlg_create_RenderListItem_img' src='/_imgs/allpicklistvaluesmapped.gif'>";
}
}
}

sourceAttributelistItemsHtml[i] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:190' onmouseover='OnSourceItem(this)' onmouseout='OffSourceItem(this)' onclick='SelectSourceItem(this)' id='sourceattributeitem"+ i + "'>"+ imgHtml + CrmEncodeDecode.CrmHtmlEncode(XUI.Xml.GetText(sourceAttributeNode)) + "</li>";
targetAttributelistItemsHtml[i] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='max-height:20px;width:190' onmouseover='OnTargetItem(this)' onmouseout='OffTargetItem(this)' onclick='SelectTargetItem(this)' id='targetattributeitem"+ i + "'>"+ CrmEncodeDecode.CrmHtmlEncode(displayName) + "<input type='hidden'  style='max-height:20px' id='targetattributehiddenitem"+ i + "' value='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(logicalName) +"' /></li>";

}
document.getElementById("sourceAttributesList").innerHTML = sourceAttributelistItemsHtml.join("");
document.getElementById("targetAttributesList").innerHTML = targetAttributelistItemsHtml.join("");

if(sourceAttributelistItemsHtml.length > 0)
{
SelectSourceItem(document.getElementById("sourceattributeitem0"));
btn_id_Map.disabled = false;
}
}

function GetPicklistMappingsXml()
{
var xmlDoc = XUI.Xml.LoadXml(dataXmlDoc.xml);
var xpath = "//PicklistMaps/PicklistMap[TargetValue=\"\"]";
var nodes = XUI.Xml.SelectNodes(xmlDoc, xpath, null);
if(!IsNull(nodes))
{
Mscrm.Utilities.removeAll(nodes);
}
return xmlDoc;
}

function onSourceGridColumnClick()
{
var aCells = tblGridBar.cells;
for (var i = 0; i < aCells.length; i++)
{
var oCell = aCells[i];
if (oCell.className == "gridheader")
{
var oImg = XUI.Html.DomUtils.GetFirstChild(oCell).children[1];
with (oImg.style)
{
filter	= (currentSourceSortFunc == sortArrayAsc) ? "" : "flipv()";
}
}
}

if(currentSourceSortFunc == sortArrayDesc)
{
currentSourceSortFunc = sortArrayAsc;
}
else
{
currentSourceSortFunc = sortArrayDesc;
}
PopulateAttributeMappings();
}

function OnSourceItem( e )
{
GetSrc( e );

if( e != _selectedSourceItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("source","target");
e.runtimeStyle.backgroundColor = "#c4ddff";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "#c4ddff";
}
}

function OffSourceItem( e )
{
GetSrc( e );

if( e != _selectedSourceItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("source","target");
e.runtimeStyle.backgroundColor = "";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "";
}
}

function OnSourceValueItem( e )
{
GetSrc( e );

if( e != _selectedSourceValueItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("source","target");
e.runtimeStyle.backgroundColor = "#c4ddff";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "#c4ddff";
}
}

function OffSourceValueItem( e )
{
GetSrc( e );

if( e != _selectedSourceValueItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("source","target");
e.runtimeStyle.backgroundColor = "";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "";
}
}

function OnTargetValueItem( e )
{
GetSrc( e );

if( e != _selectedTargetValueItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("source","target");
e.runtimeStyle.backgroundColor = "#c4ddff";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "#c4ddff";
}
}

function OffTargetValueItem( e )
{
GetSrc( e );

if( e != _selectedTargetValueItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("source","target");
e.runtimeStyle.backgroundColor = "";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "";
}
}

function OnTargetItem( e )
{
GetSrc( e );

if( e != _selectedTargetItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("target","source");
e.runtimeStyle.backgroundColor = "#c4ddff";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "#c4ddff";
}
}

function OffTargetItem( e )
{
GetSrc( e );

if( e != _selectedTargetItem )
{
var selectedItemId = e.id;
selectedItemId = selectedItemId.replace("target","source");
e.runtimeStyle.backgroundColor = "";
document.getElementById(selectedItemId).runtimeStyle.backgroundColor= "";
}
}

function On( e )
{
GetSrc( e );

if( e != _selectedItem )
{
e.runtimeStyle.backgroundColor = "#c4ddff";
}
}

function Off( e )
{
GetSrc( e );

if( e != _selectedItem )
{
e.runtimeStyle.backgroundColor = "";
}
}

function GetSrc(e)
{
if (e.tagName != "LI")
{
e = e.parentNode;
}
}

function SelectItem( e )
{
GetSrc( e );

if( e != _selectedItem )
{
e.runtimeStyle.backgroundColor = "#a7cdf0";
if( _selectedItem )
{
_selectedItem.runtimeStyle.backgroundColor = "";
}
_selectedItem = e;
}
}

function SelectSourceItem( e )
{
GetSrc( e );

if( e != _selectedSourceItem )
{
var id = e.id;
id = id.replace("source","target");
document.getElementById(id).runtimeStyle.backgroundColor="#a7cdf0";
e.runtimeStyle.backgroundColor = "#a7cdf0";
if( _selectedSourceItem )
{
var _selecteditemid = _selectedSourceItem.id;
_selecteditemid = _selecteditemid.replace("source","target");
_selectedSourceItem.runtimeStyle.backgroundColor = "";
document.getElementById(_selecteditemid).runtimeStyle.backgroundColor= "";
}
_selectedSourceItem = e;
_selectedTargetItem = document.getElementById(id);
PopulatePickListOptionsListItems();
XUI.Html.SetText(document.getElementById("sourceValueHeaderLabel"), XUI.Html.GetText(_selectedSourceItem));
document.getElementById("sourceValueHeaderLabel").title=XUI.Html.GetText(_selectedSourceItem);
XUI.Html.SetText(document.getElementById("targetValueHeaderLabel"), XUI.Html.GetText(_selectedTargetItem));
document.getElementById("targetValueHeaderLabel").title=XUI.Html.GetText(_selectedTargetItem);
}
}

function SelectTargetItem( e )
{
GetSrc( e );

if( e != _selectedTargetItem )
{
var id = e.id;
id = id.replace("target","source");
document.getElementById(id).runtimeStyle.backgroundColor="#a7cdf0";
e.runtimeStyle.backgroundColor = "#a7cdf0";
if( _selectedTargetItem )
{
var _selecteditemid = _selectedTargetItem.id;
_selecteditemid = _selecteditemid.replace("target","source");
_selectedTargetItem.runtimeStyle.backgroundColor = "";
document.getElementById(_selecteditemid).runtimeStyle.backgroundColor= "";
}
_selectedTargetItem = e;
_selectedSourceItem =  document.getElementById(id);
PopulatePickListOptionsListItems();
XUI.Html.SetText(document.getElementById("sourceValueHeaderLabel"), XUI.Html.GetText(_selectedSourceItem));
document.getElementById("sourceValueHeaderLabel").title=XUI.Html.GetText(_selectedSourceItem);
XUI.Html.SetText(document.getElementById("targetValueHeaderLabel"), XUI.Html.GetText(_selectedTargetItem));
document.getElementById("targetValueHeaderLabel").title=XUI.Html.GetText(_selectedTargetItem);
}
}

function SelectSourceValueItem( e )
{
GetSrc( e );

if( e != _selectedSourceValueItem )
{
var id = e.id;
id = id.replace("source","target");
document.getElementById(id).runtimeStyle.backgroundColor="#a7cdf0";
e.runtimeStyle.backgroundColor = "#a7cdf0";
if( _selectedSourceValueItem )
{
var _selecteditemid = _selectedSourceValueItem.id;
_selecteditemid = _selecteditemid.replace("source","target");
_selectedSourceValueItem.runtimeStyle.backgroundColor = "";
document.getElementById(_selecteditemid).runtimeStyle.backgroundColor= "";
}
_selectedSourceValueItem = e;
_selectedTargetValueItem = document.getElementById(id);
}
}

function SelectTargetValueItem( e )
{
GetSrc( e );

if( e != _selectedTargetValueItem )
{
var id = e.id;
id = id.replace("target","source");
document.getElementById(id).runtimeStyle.backgroundColor="#a7cdf0";
e.runtimeStyle.backgroundColor = "#a7cdf0";
if( _selectedTargetValueItem )
{
var _selecteditemid = _selectedTargetValueItem.id;
_selecteditemid = _selecteditemid.replace("target","source");
_selectedTargetValueItem.runtimeStyle.backgroundColor = "";
document.getElementById(_selecteditemid).runtimeStyle.backgroundColor= "";
}
_selectedTargetValueItem = e;
_selectedSourceValueItem =  document.getElementById(id);
}
}

function PopulatePickListOptionsListItems()
{

var hiddenInputItemId = _selectedTargetItem.id;
hiddenInputItemId = hiddenInputItemId.replace("targetattributeitem","targetattributehiddenitem");

var logicalName = document.getElementById(hiddenInputItemId).value;

var xpath = "//Attribute[@logicalname=\"" + logicalName + "\"]";
var node = XUI.Xml.SelectSingleNode(attributeXmlDoc, xpath, null);

xpath = "//AttributeMap[TargetAttributeName=\"" + logicalName + "\" and SourceAttributeName=\"" + escapeSingleQuotesAndBackSlashes(XUI.Html.GetText(_selectedSourceItem)) + "\"]";
var node = dataXmlDoc.selectSingleNode(xpath);
var targetAttributeNode = XUI.Xml.SelectSingleNode(node, "TargetAttributeName", null);
var command = new RemoteCommand("ImportWebService", "GetPickListValuesXml");
command.SetParameter("entityTypeCode", entityTypeCode);
command.SetParameter("attributeLogicalName", XUI.Xml.GetText(targetAttributeNode));
result = command.Execute();
if(result.Success == true)
{
var optionXml = result.ReturnValue;
var optionXmlDoc = XUI.Xml.LoadXml(optionXml);
var optionNodeList = XUI.Xml.SelectNodes(optionXmlDoc, "Options/Option", null);
var pickListOptionsListItemsHtml = new Array();
if(optionNodeList != null)
{

for(var i = 0; i < optionNodeList.length; i++)
{
var displayName = optionNodeList[i].getAttribute("displayname");
var isdefault = optionNodeList[i].getAttribute("isdefault");
var value = optionNodeList[i].getAttribute("targetvalue");

if(isdefault == "true")
{
defaultValText = displayName;
displayName = "<b>" + CrmEncodeDecode.CrmHtmlEncode(displayName) + "</b>";
}
else
{
displayName = CrmEncodeDecode.CrmHtmlEncode(displayName);
}

pickListOptionsListItemsHtml[i] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:336;max-height:20px' onmouseover='On(this)' onmouseout='Off(this)' onclick='SelectItem(this)' ondblclick='btnMap()' id='picklistoptionitem"+ i + "'><input type='hidden' id='picklistoptionvalue"+ i + "' value='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(value) +"' style='width:20px; border:none'/>"+ displayName + "</li>";
}
document.getElementById("pickListOptionsList").innerHTML = pickListOptionsListItemsHtml.join("");


var sourceValuelistItemsHtml = new Array();
var targetValuelistItemsHtml = new Array();


sourceValuelistItemsHtml[0] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:165;max-height:20px' onmouseover='OnSourceValueItem(this)' onmouseout='OffSourceValueItem(this)' onclick='SelectSourceValueItem(this)' title='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(emptyLabel) + "' id='sourcevalueitem0'>"+ CrmEncodeDecode.CrmHtmlEncode(emptyLabel) + "</li>";
targetValuelistItemsHtml[0] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:165;max-height:20px' onmouseover='OnTargetValueItem(this)' onmouseout='OffTargetValueItem(this)' onclick='SelectTargetValueItem(this)' id='targetvalueitem0'></li>";


sourceValuelistItemsHtml[1] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='max-height:20px' onmouseover='OnSourceValueItem(this)' onmouseout='OffSourceValueItem(this)' onclick='SelectSourceValueItem(this)' title='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(unmappedLabel) + "' id='sourcevalueitem1'>"+ CrmEncodeDecode.CrmHtmlEncode(unmappedLabel) + "</li>";
targetValuelistItemsHtml[1] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:165;max-height:20px' onmouseover='OnTargetValueItem(this)' onmouseout='OffTargetValueItem(this)' onclick='SelectTargetValueItem(this)' id='targetvalueitem1'></li>";


var pickListMapNodes = XUI.Xml.SelectNodes(node, "PicklistMaps/PicklistMap", null);
for(var i = 0; i < pickListMapNodes.length; i++)
{
var sourceValue = XUI.Xml.SelectSingleNode(pickListMapNodes[i], "SourceValue", null);
var targetValue = XUI.Xml.SelectSingleNode(pickListMapNodes[i], "TargetValue", null);
var processCode = XUI.Xml.SelectSingleNode(pickListMapNodes[i], "ProcessCode", null);

var optionXpath = "//Options/Option[@targetvalue=\"" + XUI.Xml.GetText(targetValue) + "\"]";

var targetDisplayName = "";
var targetNode = XUI.Xml.SelectSingleNode(optionXmlDoc, optionXpath, null);
if(!IsNull(targetNode))
{
var isdefault = targetNode.getAttribute("isdefault");
var displayName = targetNode.getAttribute("displayname");

if(isdefault == "true")
{
targetDisplayName = "<b>" + CrmEncodeDecode.CrmHtmlEncode(displayName) + "</b>";
}
else
{
targetDisplayName = CrmEncodeDecode.CrmHtmlEncode(displayName);
}
}

var processCodeText = XUI.Xml.GetText(processCode);
var sourceValueText = XUI.Xml.GetText(sourceValue);

if(sourceValueText == "" && processCodeText == "Process")
{
targetValuelistItemsHtml[0] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:165;max-height:20px' onmouseover='OnTargetValueItem(this)' onmouseout='OffTargetValueItem(this)' onclick='SelectTargetValueItem(this)' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(displayName) + "' id='targetvalueitem0'>"+ targetDisplayName + "</li>";

continue;
}

if(processCodeText == "Unmapped")
{
targetValuelistItemsHtml[1] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:165;max-height:20px' onmouseover='OnTargetValueItem(this)' onmouseout='OffTargetValueItem(this)' onclick='SelectTargetValueItem(this)' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(displayName) + "' id='targetvalueitem1'>"+ targetDisplayName + "</li>";

continue;
}

sourceValuelistItemsHtml[sourceValuelistItemsHtml.length] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:165;max-height:20px' onmouseover='OnSourceValueItem(this)' onmouseout='OffSourceValueItem(this)' onclick='SelectSourceValueItem(this)' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(sourceValueText) + "' id='sourcevalueitem"+ sourceValuelistItemsHtml.length + "'>"+ CrmEncodeDecode.CrmHtmlEncode(sourceValueText) + "</li>";
targetValuelistItemsHtml[targetValuelistItemsHtml.length] = "<li class='ms-crm-Dialog-ListItem-ImportMap' style='width:165;max-height:20px' onmouseover='OnTargetValueItem(this)' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(displayName) + "' onmouseout='OffTargetValueItem(this)' onclick='SelectTargetValueItem(this)' id='targetvalueitem"+ targetValuelistItemsHtml.length + "'>"+ targetDisplayName + "</li>";
}

document.getElementById("SourceValueItemsList").innerHTML = sourceValuelistItemsHtml.join("");
document.getElementById("TargetValueItemsList").innerHTML = targetValuelistItemsHtml.join("");

if(sourceValuelistItemsHtml.length > 0)
{
totalValuesCount = sourceValuelistItemsHtml.length;
SelectSourceValueItem(document.getElementById("sourcevalueitem0"));
}
if(pickListOptionsListItemsHtml.length > 0)
{
SelectItem(document.getElementById("picklistoptionitem0"));
}
}
}

}

function btnMap()
{

if(defaultValText == XUI.Html.GetText(_selectedItem))
{
_selectedTargetValueItem.innerHTML = "<b>" + XUI.Html.GetText(_selectedItem) + "</b>";
}
else
{
XUI.Html.SetText(_selectedTargetValueItem, XUI.Html.GetText(_selectedItem));
}

_selectedTargetValueItem.title = XUI.Html.GetText(_selectedItem);

var hiddenInputItemId = _selectedTargetItem.id;
hiddenInputItemId = hiddenInputItemId.replace("targetattributeitem","targetattributehiddenitem");
var logicalName = document.getElementById(hiddenInputItemId).value;

var xpath = "//Attribute[@logicalname=\"" + logicalName + "\"]";
var node = XUI.Xml.SelectSingleNode(attributeXmlDoc, xpath, null);
xpath = "//AttributeMap[TargetAttributeName=\"" + logicalName + "\" and SourceAttributeName=\"" + escapeSingleQuotesAndBackSlashes(XUI.Html.GetText(_selectedSourceItem)) + "\"]";
var node = XUI.Xml.SelectSingleNode(dataXmlDoc, xpath, null);
var isUnmappedValuesMapping = false;
var isEmptyValueMapping = false;

if(XUI.Html.GetText(_selectedSourceValueItem) == emptyLabel)
{
isEmptyValueMapping = true;
xpath = "PicklistMaps/PicklistMap[SourceValue=\"\"]";
}
else if(XUI.Html.GetText(_selectedSourceValueItem) == unmappedLabel)
{
isUnmappedValuesMapping = true;
xpath = "PicklistMaps/PicklistMap[ProcessCode=\"Unmapped\"]";
}
else
{
xpath = "PicklistMaps/PicklistMap[SourceValue=\""+ escapeSingleQuotesAndBackSlashes(XUI.Html.GetText(_selectedSourceValueItem)) + "\"]";
}

var pickListMapNode = XUI.Xml.SelectSingleNode(node, xpath, null);

var picklistOptionaValueID = _selectedItem.id.replace("picklistoptionitem","picklistoptionvalue");
var targetvalue = document.getElementById(picklistOptionaValueID).value;

if(!IsNull(pickListMapNode))
{
var targetValueNode = XUI.Xml.SelectSingleNode(pickListMapNode, "TargetValue", null);
XUI.Xml.SetText(targetValueNode, targetvalue);
var processCode = XUI.Xml.SelectSingleNode(pickListMapNode, "ProcessCode", null);
if(isUnmappedValuesMapping)
{
XUI.Xml.SetText(processCode, "Unmapped");
}
else
{
XUI.Xml.SetText(processCode, "Process");
}
}
else if(isEmptyValueMapping || isUnmappedValuesMapping)
{
var xmlDoc = XUI.Xml.CreateDocument();
var picklistMap = xmlDoc.createElement("PicklistMap");
var sourceValue = xmlDoc.createElement("SourceValue");
var targetValue = xmlDoc.createElement("TargetValue");
var processCode = xmlDoc.createElement("ProcessCode");

XUI.Xml.SetText(sourceValue, "");
XUI.Xml.SetText(targetValue, targetvalue);

if(isUnmappedValuesMapping)
{
XUI.Xml.SetText(processCode, "Unmapped");
}
else
{
XUI.Xml.SetText(processCode, "Process");
}

picklistMap.appendChild(sourceValue);
picklistMap.appendChild(targetValue);
picklistMap.appendChild(processCode);
xmlDoc.appendChild(picklistMap);
var pickListMapsNode = XUI.Xml.SelectSingleNode(node, "PicklistMaps", null);
pickListMapsNode.appendChild(picklistMap);
}

UpdateMappingInAttributeMappings(node);
ShowCheckMark();
UpdateMappingStatus();
}

function UpdateMappingInAttributeMappings(node)
{
var xpath = "//AttributeMap[TargetAttributeName=\"" + XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "TargetAttributeName", null)) + "\" and SourceAttributeName=\"" + escapeSingleQuotesAndBackSlashes(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "SourceAttributeName", null))) + "\"]";
var attributeMapNode = XUI.Xml.SelectSingleNode(parent.document.frames["areaAttributesFrame"].mapXmlDoc, xpath, null);
attributeMapNode.parentNode.replaceChild(node.cloneNode(true), attributeMapNode);
}

function UpdateMappingStatus()
{
var allItemsMapped = true;
var nodeList = XUI.Xml.SelectNodes(dataXmlDoc, "//AttributeMap", null);
for(var i = 0; i < nodeList.length; i++)
{
allItemsMapped = IsAttributeMapped(nodeList[i]);
if(allItemsMapped == false)
{
break;
}
}

if(parent != null)
{
parent.isMapped = allItemsMapped;
}
}

function IsAttributeMapped(pickListNodeParent)
{
var pickListNode = XUI.Xml.SelectSingleNode(pickListNodeParent, "PicklistMaps/PicklistMap", null);
if(IsNull(pickListNode))
{
return false;
}
if((!IsNull(XUI.Xml.SelectSingleNode(pickListNodeParent, "PicklistMaps/PicklistMap[(SourceValue = \"\" and ProcessCode=\"Process\")]", null)))
&& (!IsNull(XUI.Xml.SelectSingleNode(pickListNodeParent, "PicklistMaps/PicklistMap[ProcessCode = \"Unmapped\"]", null))))
{
var pickListXpath = "PicklistMaps/PicklistMap[TargetValue=\"\"]";
var nodes = XUI.Xml.SelectNodes(pickListNodeParent, pickListXpath, null);
if(nodes.length == 0)
{
return true;
}
}
return false;
}

function ShowCheckMark()
{
var allPicklistMapped = true;
for(var i=0; i < totalValuesCount; i++)
{
if(XUI.Html.GetText(document.getElementById("targetvalueitem" + i)) == "")
{
allPicklistMapped = false;
break;
}
}

if(allPicklistMapped)
{
_selectedSourceItem.innerHTML =  "<img alt='' align='absmiddle' CLASS='dlg_create_RenderListItem_img' src='/_imgs/allpicklistvaluesmapped.gif'>" + XUI.Html.GetText(_selectedSourceItem);
}
else
{
_selectedSourceItem.innerHTML = XUI.Html.GetText(_selectedSourceItem);
}
}
function sortArrayAsc(x, y)
{
var str1 = x.toLowerCase();
var str2 = y.toLowerCase();

if (str1 < str2) return -1;
if (str1 > str2) return 1;
return 0;
}

function sortArrayDesc(x, y)
{
var str1 = x.toLowerCase();
var str2 = y.toLowerCase();

if (str1 < str2) return 1;
if (str1 > str2) return -1;
return 0;
}

</script>
</head>
<body scroll="no" style="background-color:#D9EAFF;border-left:1px solid #6893cf;">
<table style="background-color:#ecf2ff;border:1px solid #8C8E94; margin-bottom:20px; margin-left:10px; margin-right:5px; width:420">
<tr>
<td>
<table cellpadding="0" style="margin-top:10px; margin-left:10px">
<tr>
<td>
<loc:Text ResourceId="DataManagement.ImportMap.PicklistMap.Header.Text" runat="server"/>
</td>
</tr>
<tr></tr>
</table>
<table style="margin-left:5px">
<tr style="padding-top:20px">
<td style="padding-left:10px">
<b><loc:Text ResourceId="DataManagement.ImportMap.PicklistMap.SourceHeader.Label" runat="server"/></b>
</td>
<td style="padding-left:10px">
<b><loc:Text ResourceId="DataManagement.ImportMap.PicklistMap.TargetHeader.Label" runat="server"/></b>
</td>
</tr>
<tr>
<td>
<div style="padding:5px;background-color:#C4DDFF;width:390;height:450px;margin-left:5px;border:1px solid #8C8E94;">
<table id="tblGridBar" width="400" cellpadding="0" height="100%">
<tr class="gridHeader" valign="bottom" onclick="onSourceGridColumnClick();">
<td>
<div>
<table width="380">
<col width="195"/><col/><col width="185"/>
<tr>
<td class="ms-crm-List-Header" field="cn">
<label style="width:184;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("DataManagement.ImportMap.PicklistMap.SourceHeaderList.Label"))%>">
<nobr><b><loc:Text ResourceId="DataManagement.ImportMap.PicklistMap.SourceHeaderList.Label" runat="server"/>
</b><img alt="" src="/_imgs/grid/bar_up.gif" class="addFields_img_barUp"></nobr>
</label>
</td>
<td><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<td class="ms-crm-List-Header" field="cn">
<label style="width:184;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("DataManagement.ImportMap.PicklistMap.TargetHeaderList.Label"))%>">
<nobr><b><loc:Text ResourceId="DataManagement.ImportMap.PicklistMap.TargetHeaderList.Label" runat="server"/></b></nobr>
</label>
</td>
</tr>
</table>
</div>
</td>
</tr>
<tr style="height:400">
<td>
<div class="ms-crm-Dialog-List" style="overflow:auto; background-color:#C4DDFF;">
<table width="390">
<col width="195"/><col width="195"/>
<tr>
<td>
<ul id="sourceAttributesList" class="ms-crm-Dialog-List" style="height:400; background-color:#FFFFFF"></ul>
</td>
<td>
<ul id="targetAttributesList" class="ms-crm-Dialog-List" style="height:400;background-color:#FFFFFF"></ul>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</div>
</td>
<td>
<div style="padding:5px; background-color:#C4DDFF;width:340px;height:450px;margin-left:10px;margin-right:10px;border:1px solid #8C8E94;">
<table id="tblvaluemappings" width="340" cellpadding="0">
<tr class="gridHeader" valign="bottom">
<td>
<div>
<table width="340">
<col width="170"/><col/><col width="170"/>
<tr>
<td class="ms-crm-List-Header" field="cn">
<label style="width:160;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" >
<loc:Text ResourceId="DataManagement.ImportMap.PicklistMap.SourceValueList.Label" runat="server"/>:&nbsp;
<label id="sourceValueHeaderLabel" style="width:100;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></label>
<img alt="" src="/_imgs/grid/bar_up.gif" class="addFields_img_barUp">
</label>
</td>
<td><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<td class="ms-crm-List-Header" field="cn">
<label style="width:160;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" >
<loc:Text ResourceId="DataManagement.ImportMap.PicklistMap.TargetValueList.Label" runat="server"/>:&nbsp;
<label style="width:100;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" id="targetValueHeaderLabel"></label>
</label>
</td>
</tr>
</table>
</div>
</td>
</tr>
<tr class="main" style="height:200">
<td>
<div class="ms-crm-Dialog-List" style="overflow:auto; background-color:#C4DDFF">
<table width="340">
<col width="170"/><col width="170"/>
<tr>
<td>
<ul id="SourceValueItemsList" class="ms-crm-Dialog-List" style="height:190; background-color:#FFFFFF"></ul>
</td>
<td>
<ul id="TargetValueItemsList" class="ms-crm-Dialog-List" style="height:190;background-color:#FFFFFF"></ul>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table width="345" id="pickListOptions" style="margin-top:10px">
<tr>
<td><b><loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.PickValue.Label" runat="server"/></b></td>
</tr>
<tr height="135">
<td valign="bottom">
<div class="ms-crm-Dialog-List" style="overflow:auto">
<ul id="pickListOptionsList" class="ms-crm-Dialog-List" style="height:120"></ul>
</div>
</td>
</tr>
<tr style="margin-top:25px">
<td align="right"><cui:Button ID="btn_id_Map" OnClick="btnMap();" ResourceId="DataManagement.ImportMap.AttributeMap.Button.Map" runat="server"></cui:Button></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr style="height:10px"></tr>
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
</table>
</body>
</html>
