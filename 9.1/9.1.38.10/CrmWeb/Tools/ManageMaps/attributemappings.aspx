<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.ManageMaps.AttributeMappings" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Forms" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
tr.gridheader
{
background-color:	#f0f0f0;
font-size:			<%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
width:				200px;
height:				15px;
border:				1px solid #dbdac9;
border-bottom:		1px solid #c5c1b1;
}
</style>
<script language=javascript>
var attributeXml = "";
var mapXml = "";
var importMapId = "<%= importMapId.ToString("B", System.Globalization.CultureInfo.InvariantCulture) %>";
var entityTypeCode = "<%= entityTypeCode.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>";
var _selectedItem;
var _selectedSourceItem;
var _selectedTargetItem;
var mapXmlDoc = null;
var attributeXmlDoc = null;
var sampleDataXmlDoc = null;
var colMappingIdsToDelete = new Array();
var currentSourceSortFunc = sortArrayAsc;
var currentTargetSortFunc = sortArrayAsc;
var headerTotalCount = 0;
var entityName = "";
var ignoreAtributeLabel = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("DataManagement.ImportMap.AttributeMap.Ignored.Label"))%>;
var unmappedAttributeLabel = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("DataManagement.ImportMap.AttributeMap.Unmapped.Label"))%>;

function window.onload()
{
btn_id_Map.disabled = true;
btn_id_Ignore.disabled = true;
btn_id_Unmap.disabled = true;
btn_id_Map.title = LOCID_BUTTON_MAP_TOOLTIP;
btn_id_Ignore.title = LOCID_BUTTON_IGNORE_TOOLTIP;
btn_id_Unmap.title = LOCID_BUTTON_UNMAP_TOOLTIP;
btn_id_LoadDataFile.title= LOCID_BUTTON_LDDATFILE_TIP;

parent.document.getElementById("navPickList").disabled = false;

var attributecommand = new RemoteCommand("ImportWebService", "GetAttributeXmlForEntity");
attributecommand.SetParameter("entityTypeCode", entityTypeCode);
result = attributecommand.Execute();
if(result.Success == true)
{
attributeXml = result.ReturnValue;
}

entityName = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Metadata.MetadataCache.GetInstance(new OrganizationContext(UserInformation.Current.OrganizationId)).GetEntity(entityTypeCode).LogicalName) %>;

<% if(formState == FormState.Existing) { %>

var command = new RemoteCommand("ImportWebService", "GetImportMapXml");
command.SetParameter("importMapId", importMapId);
result = command.Execute();
if(result.Success == true)
{
mapXml = result.ReturnValue;
}

var sampleDataXml = parent.document.getElementById("sampleDataXml").value;
if(sampleDataXml != "")
{
sampleDataXmlDoc = XUI.Xml.LoadXml(sampleDataXml);
}

<% } else { %>

mapXml = "<Map Name=\"\"><Description></Description><EntityMaps><EntityMap TargetEntityName=\"" + entityName + "\" SourceEntityName=\"\"><AttributeMaps></AttributeMaps></EntityMap></EntityMaps></Map>";

<% } %>

mapXmlDoc = XUI.Xml.LoadXml(mapXml);
attributeXmlDoc = XUI.Xml.LoadXml(attributeXml);

PopulateSourceAndTargetList();

unmappedAttributeOptions.selectedIndex = 1;
SelectedAttributesChange();

}

function UpdateCounts()
{
var headerMapCount = 0;
for(var i=0; i < headerTotalCount; i++)
{
if(XUI.Html.GetText(document.getElementById("targetattributeitem" + i)) != "")
{
headerMapCount++;
}
}

XUI.Html.SetText(document.getElementById("mappedHeadersCountLabel"), formatString(LOCID_MAPPED_HEADER_COUNT, headerMapCount, headerTotalCount));

var bizreqMapCount = 0;
var xpath = "//Attribute[@businessrequired=\"true\"]";
var attriNodeList = XUI.Xml.SelectNodes(attributeXmlDoc, xpath, null);
for(var i = 0; i < attriNodeList.length; i++)
{
xpath = "//AttributeMap[TargetAttributeName=\"" + attriNodeList[i].getAttribute("logicalname") + "\"]";
var node = XUI.Xml.SelectSingleNode(mapXmlDoc, xpath, null);
if(!IsNull(node))
{
bizreqMapCount++;
}
}

XUI.Html.SetText(document.getElementById("bizReqdMapCount"), formatString(LOCID_MAPPED_BIZATTRI_COUNT, bizreqMapCount, attriNodeList.length));

}

function PopulateSourceAndTargetList()
{
var nodeList = XUI.Xml.SelectNodes(mapXmlDoc, "//AttributeMap", null);
var sourceAttributelist = new Array();
var duplicateFound = false;

if(!IsNull(nodeList))
{
for(var i = 0; i < nodeList.length; i++)
{
duplicateFound = false;
var sourceAttributeNode = XUI.Xml.SelectSingleNode(nodeList[i], "SourceAttributeName", null);
var sourceAttributeText = XUI.Xml.GetText(sourceAttributeNode);

for(var j = 0; j < sourceAttributelist.length; j++)
{
if(sourceAttributelist[j] == sourceAttributeText)
{
duplicateFound = true;
break;
}
}

if(!duplicateFound)
{
sourceAttributelist[sourceAttributelist.length] = sourceAttributeText;
}
}
}

if(sampleDataXmlDoc.xml !="")
{
var headerNodeList = XUI.Xml.SelectNodes(sampleDataXmlDoc, "//Header", null);
for(var i = 0; i < headerNodeList.length; i++)
{
duplicateFound = false;
for(var j = 0; j < sourceAttributelist.length; j++)
{
if(sourceAttributelist[j] == headerNodeList[i].getAttribute("name"))
{
duplicateFound = true;
break;
}
}

if(!duplicateFound)
{
sourceAttributelist[sourceAttributelist.length] = headerNodeList[i].getAttribute("name");
}
}
}

headerTotalCount = sourceAttributelist.length;
sourceAttributelist.sort(currentSourceSortFunc);
var sourceAttributelistItemsHtml = new Array();
var targetAttributelistItemsHtml = new Array();

for(var i = 0; i < sourceAttributelist.length; i++)
{
sourceAttributelistItemsHtml[i] = "<li class='ms-crm-Dialog-ListItem-ImportMap' onmouseover='OnSourceItem(this)' onmouseout='OffSourceItem(this)' onclick='SelectSourceItem(this)' title=\""+ CrmEncodeDecode.CrmHtmlAttributeEncode(sourceAttributelist[i]) + "\" id='sourceattributeitem"+ i + "' style='width:196'>"+ CrmEncodeDecode.CrmHtmlEncode(sourceAttributelist[i]) + "</li>";
var concatenatedLogicalName = "";
var displayHtml = "";
var toolTipText = unmappedAttributeLabel;


var xpath = "//AttributeMap[SourceAttributeName=\"" + escapeSingleQuotesAndBackSlashes(sourceAttributelist[i]) + "\" ]";
var nodes = XUI.Xml.SelectNodes(mapXmlDoc, xpath, null);

if(nodes.length > 0)
{
if(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(nodes[0], "ProcessCode", null)) == "Ignore")
{

targetAttributelistItemsHtml[i] = "<li style='font-style:italic;width:234' class='ms-crm-Dialog-ListItem-ImportMap' onmouseover='OnTargetItem(this)' onmouseout='OffTargetItem(this)' onclick='SelectTargetItem(this)' title=\""+ CrmEncodeDecode.CrmHtmlAttributeEncode(ignoreAtributeLabel) +"\" id='targetattributeitem"+ i + "'>"+ CrmEncodeDecode.CrmHtmlEncode(ignoreAtributeLabel) + "</li><input type='hidden'  style='max-height:20px' id='targetattributehiddenitem"+ i + "' value='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(concatenatedLogicalName) +"' />";
continue;
}

var targetAttributeNode = XUI.Xml.SelectSingleNode(nodes[0], "TargetAttributeName", null);
var attrXpath = "//Attribute[@logicalname=\"" + XUI.Xml.GetText(targetAttributeNode) + "\" ]";

for(var j = 0 ; j < nodes.length ; j++)
{
targetAttributeNode = XUI.Xml.SelectSingleNode(nodes[j], "TargetAttributeName", null);
attrXpath = "//Attribute[@logicalname=\"" + XUI.Xml.GetText(targetAttributeNode) + "\" ]";
node = XUI.Xml.SelectSingleNode(attributeXmlDoc, attrXpath, null);
if(!IsNull(node))
{
var displayName = node.getAttribute("displayname");
var logicalName = node.getAttribute("logicalname");
if(j > 0)
{
displayHtml += ";" + GetHtmlWithImages(logicalName, displayName);
toolTipText += ";" + node.getAttribute("displayname");
concatenatedLogicalName += ";" + logicalName;
}
else
{
displayHtml += GetHtmlWithImages(logicalName, displayName);
toolTipText = node.getAttribute("displayname");
concatenatedLogicalName = logicalName;
}
}
}
}
targetAttributelistItemsHtml[i] = "<li class='ms-crm-Dialog-ListItem-ImportMap' onmouseover='OnTargetItem(this)' onmouseout='OffTargetItem(this)' onclick='SelectTargetItem(this)' title=\"" + CrmEncodeDecode.CrmHtmlAttributeEncode(toolTipText) +"\" id='targetattributeitem"+ i + "' style='width:234'>"+ displayHtml + "</li><input type='hidden' id='targetattributehiddenitem"+ i + "' value='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(concatenatedLogicalName) +"' />";
}

document.getElementById("sourceAttributesList").innerHTML = sourceAttributelistItemsHtml.join("");
document.getElementById("targetAttributesList").innerHTML = targetAttributelistItemsHtml.join("");

if(sourceAttributelistItemsHtml.length > 0)
{
SelectSourceItem(document.getElementById("sourceattributeitem0"));
btn_id_Map.disabled = false;
btn_id_Ignore.disabled = false;
btn_id_Unmap.disabled = false;
}

UpdateCounts();
}

function GetMappedPicklistAttributes()
{
var nodeList = XUI.Xml.SelectNodes(mapXmlDoc, "//AttributeMap", null);
var xmlDoc = XUI.Xml.CreateDocument();
var attributeMapsNode = xmlDoc.createElement("AttributeMaps");

for(var i = 0; i< nodeList.length; i++)
{
var targetNode = XUI.Xml.SelectSingleNode(nodeList[i], "TargetAttributeName", null);
if(!IsNull(targetNode))
{
var xpath = "//Attribute[@logicalname=\"" + XUI.Xml.GetText(targetNode) + "\" and (@attributetype=\"picklist\" or @attributetype=\"boolean\" or @attributetype=\"bit\")]";
var nodeFound = XUI.Xml.SelectSingleNode(attributeXmlDoc, xpath, null);
if(!IsNull(nodeFound))
{
var candidateNode = nodeList[i].cloneNode(true);
var sourceNode = XUI.Xml.SelectSingleNode(candidateNode, "SourceAttributeName", null);

var pickListMapsNode = XUI.Xml.SelectSingleNode(candidateNode, "PicklistMaps", null);

if(IsNull(pickListMapsNode))
{
pickListMapsNode = xmlDoc.createElement("PicklistMaps");
}

if(!IsNull(sourceNode))
{
var xpath = "//Header[@name=\"" + escapeSingleQuotesAndBackSlashes(XUI.Xml.GetText(sourceNode)) + "\"]" ;
var node = XUI.Xml.SelectSingleNode(sampleDataXmlDoc, xpath, null);

if(!IsNull(node))
{
var dataNodes = XUI.Xml.SelectNodes(node, "DataValue", null);
for(var j = 0; j < dataNodes.length; j++)
{
var xpathExp = "//PicklistMap[SourceValue=\"" + escapeSingleQuotesAndBackSlashes(XUI.Xml.GetText(dataNodes[j])) + "\"]" ;
if(IsNull(XUI.Xml.SelectSingleNode(pickListMapsNode, xpathExp, null)))
{
var picklistMap = xmlDoc.createElement("PicklistMap");
var sourceValue = xmlDoc.createElement("SourceValue");
var targetValue = xmlDoc.createElement("TargetValue");
var processCode = xmlDoc.createElement("ProcessCode");

XUI.Xml.SetText(sourceValue, XUI.Xml.GetText(dataNodes[j]));
XUI.Xml.SetText(targetValue, "");
XUI.Xml.SetText(processCode, "Process");

picklistMap.appendChild(sourceValue);
picklistMap.appendChild(targetValue);
picklistMap.appendChild(processCode);
pickListMapsNode.appendChild(picklistMap);
}
}
}
}
candidateNode.appendChild(pickListMapsNode);
attributeMapsNode.appendChild(candidateNode);
}
}
}
return attributeMapsNode.xml;
}

function SelectedAttributesChange()
{
switch(unmappedAttributeOptions.selectedIndex)
{
case 0:
var nodeList = XUI.Xml.SelectNodes(mapXmlDoc, "//AttributeMap", null);
var xpath = "//Attribute[@businessrequired=\"true\"]";
var attriNodeList = XUI.Xml.SelectNodes(attributeXmlDoc, xpath, null);
var businessRequiredArray = new Array();
var displayToLogicalNameArray = new Array();

for(var i = 0, index =0; i < attriNodeList.length; i++)
{
xpath = "//AttributeMap[TargetAttributeName=\"" + attriNodeList[i].getAttribute("logicalname") + "\"]";
var node = XUI.Xml.SelectSingleNode(mapXmlDoc, xpath, null);
if(IsNull(node))
{
var displayName = attriNodeList[i].getAttribute("displayname");
if(displayName != "")
{
businessRequiredArray[index] = displayName;
displayToLogicalNameArray[displayName] = attriNodeList[i].getAttribute("logicalname");
index++;
}
}
}

businessRequiredArray.sort(currentTargetSortFunc);
var businessRequiredlistItemsHtml = new Array();
for(var index=0; index < businessRequiredArray.length ; index++)
{
var displayHtml = GetHtmlWithImages(displayToLogicalNameArray[businessRequiredArray[index]], businessRequiredArray[index]);
var textIndentStyle = IsIndentationRequired(displayToLogicalNameArray[businessRequiredArray[index]]) ? "style='text-indent:19px'" : "" ;

businessRequiredlistItemsHtml[index] = "<li "+ textIndentStyle + " class='ms-crm-Dialog-ListItem-ImportMap' style='width:280' onmouseover='On(this)' onmouseout='Off(this)' onclick='SelectItem(this)' title=\"" + CrmEncodeDecode.CrmHtmlAttributeEncode(businessRequiredArray[index]) + "\" ondblclick='btnMap()' id='entityattributeitem"+ index + "'>"+ displayHtml + "<input type='hidden' id='entityattributehiddenitem"+ index + "' value='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(displayToLogicalNameArray[businessRequiredArray[index]]) +"' /></li>";
}
if(businessRequiredlistItemsHtml.length > 0)
{
document.getElementById("entityAttributeList").innerHTML = businessRequiredlistItemsHtml.join("");
SelectItem(document.getElementById("entityattributeitem0"));
}
else
{
document.getElementById("entityAttributeList").innerHTML = "";
}
break;
case 1:
var nodeList = XUI.Xml.SelectNodes(mapXmlDoc, "//AttributeMap", null);
var attriNodeList = XUI.Xml.SelectNodes(attributeXmlDoc, "//Attribute", null);
var allAttributesArray = new Array();
var displayToLogicalNameArray = new Array();

for(var i = 0, index =0; i < attriNodeList.length; i++)
{
xpath = "//AttributeMap[TargetAttributeName=\"" + attriNodeList[i].getAttribute("logicalname") + "\"]";
var node = XUI.Xml.SelectSingleNode(mapXmlDoc, xpath, null);
if(IsNull(node))
{
var displayName = attriNodeList[i].getAttribute("displayname");
if(displayName != "")
{
allAttributesArray[index] = displayName;
displayToLogicalNameArray[displayName] = attriNodeList[i].getAttribute("logicalname");
index++;
}
}
}

allAttributesArray.sort(currentTargetSortFunc);
var allAttributelistItemsHtml = new Array();
for(var index=0; index < allAttributesArray.length ; index++)
{
var displayHtml = GetHtmlWithImages(displayToLogicalNameArray[allAttributesArray[index]], allAttributesArray[index]);
var textIndentStyle = IsIndentationRequired(displayToLogicalNameArray[allAttributesArray[index]]) ? "style='text-indent:19px'" : "" ;

allAttributelistItemsHtml[index] = "<li "+ textIndentStyle + " style='width:280' class='ms-crm-Dialog-ListItem-ImportMap' onmouseover='On(this)' onmouseout='Off(this)' onclick='SelectItem(this)' ondblclick='btnMap()' title=\"" + CrmEncodeDecode.CrmHtmlAttributeEncode(allAttributesArray[index]) + "\" id='entityattributeitem"+ index + "'>"+ displayHtml + "<input type='hidden' id='entityattributehiddenitem"+ index + "' value='"+ CrmEncodeDecode.CrmHtmlAttributeEncode(displayToLogicalNameArray[allAttributesArray[index]]) +"'/></li>";
}

if(allAttributelistItemsHtml.length > 0)
{
document.getElementById("entityAttributeList").innerHTML = allAttributelistItemsHtml.join("");
SelectItem(document.getElementById("entityattributeitem0"));
}
else
{
document.getElementById("entityAttributeList").innerHTML = "";
}
break;
}
}

function GetAttributeMappingsXml()
{
return mapXmlDoc;
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
PopulateSourceAndTargetList();
}

function onAttributeGridColumnClick()
{
var aCells = targetentityattributes.cells;
for (var i = 0; i < aCells.length; i++)
{
var oCell = aCells[i];
if (oCell.className == "gridheader")
{
var oImg = XUI.Html.DomUtils.GetFirstChild(oCell).children[1];
with (oImg.style)
{
filter	= (currentTargetSortFunc == sortArrayAsc) ? "" : "flipv()";
}
}
}

if(currentTargetSortFunc == sortArrayDesc)
{
currentTargetSortFunc = sortArrayAsc;
}
else
{
currentTargetSortFunc = sortArrayDesc;
}
SelectedAttributesChange();
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
}
}

function IsIndentationRequired(logicalName)
{
var attrXpath = "//Attribute[@logicalname=\"" + logicalName + "\" ]";
var node = XUI.Xml.SelectSingleNode(attributeXmlDoc, attrXpath, null);
if(!IsNull(node))
{
var attributeType = node.getAttribute("attributetype");
switch(attributeType)
{
case "bit":
case "boolean":
case "picklist":
case "lookup":
return false;
default :
return true;
}
}
}

function GetHtmlWithImages(logicalName, displayName)
{
var attrXpath = "//Attribute[@logicalname=\"" + logicalName + "\" ]";
var node = XUI.Xml.SelectSingleNode(attributeXmlDoc, attrXpath, null);
var htmlObj = new Object();
htmlObj.imgHtml = "";
htmlObj.businessrequiredImgHtml = "";

if(!IsNull(node))
{
var attributeType = node.getAttribute("attributetype");
switch(attributeType)
{
case "bit":
case "boolean":
case "picklist":
htmlObj.imgHtml = "<img alt='' align='absmiddle' CLASS='dlg_create_RenderListItem_img' src='/_imgs/picklist.gif'>";
break;

case "lookup":
htmlObj.imgHtml = "<img alt='' align='absmiddle' CLASS='dlg_create_RenderListItem_img' src='/_imgs/lookup.gif'>";
break;
}

var businessrequired = node.getAttribute("businessrequired");
if(businessrequired == "true")
{
htmlObj.businessrequiredImgHtml = "<img alt='' align='absmiddle' CLASS='dlg_create_RenderListItem_img' src='/_imgs/frm_required.gif'>";
}
}

return htmlObj.imgHtml + CrmEncodeDecode.CrmHtmlEncode(displayName) + htmlObj.businessrequiredImgHtml;
}

function btnMap()
{
if(btn_id_Map.disabled == true)
{
return;
}


var _selecteditemid = _selectedItem.id;
_selecteditemid = _selecteditemid.replace("entityattributeitem","entityattributehiddenitem");
var logicalName = document.getElementById(_selecteditemid).value;

var hiddenInputItemId = _selectedTargetItem.id;
hiddenInputItemId = hiddenInputItemId.replace("targetattributeitem","targetattributehiddenitem");

var logicalNameHiddenInput = "";


if(XUI.Html.GetText(_selectedTargetItem) == "" ||XUI.Html.GetText(_selectedTargetItem) == ignoreAtributeLabel)
{
var str = GetHtmlWithImages(logicalName, XUI.Html.GetText(_selectedItem));

logicalNameHiddenInput = "<input type='hidden' id='" + hiddenInputItemId + "' value='" + logicalName + "'/>";
str = str.concat(logicalNameHiddenInput);
if(XUI.Html.GetText(_selectedTargetItem) == ignoreAtributeLabel)
{
RemoveIgnoredColumnMappingForSelectItem();
}
_selectedTargetItem.innerHTML = str;
}
else
{
var htmlWithImage = GetHtmlWithImages(logicalName, XUI.Html.GetText(_selectedItem));
str = _selectedTargetItem.innerHTML.concat(";" + htmlWithImage);
_selectedTargetItem.innerHTML = str;
document.getElementById(hiddenInputItemId).value = document.getElementById(hiddenInputItemId).value.concat(";" + logicalName);
}
_selectedTargetItem.title = XUI.Html.GetText(_selectedTargetItem);
_selectedTargetItem.style.fontStyle = 'normal';


var xmlDoc = XUI.Xml.CreateDocument();
var attributeMap = xmlDoc.createElement("AttributeMap");
var sourceAttribute = xmlDoc.createElement("SourceAttributeName");
var targetAttribute = xmlDoc.createElement("TargetAttributeName");
var processCode = xmlDoc.createElement("ProcessCode");

sourceAttribute.text = XUI.Html.GetText(_selectedSourceItem);


var xpath = "//Attribute[@logicalname=\"" + logicalName + "\"]";
var node = XUI.Xml.SelectSingleNode(attributeXmlDoc, xpath, null);
XUI.Xml.SetText(targetAttribute, node.getAttribute("logicalname"));
XUI.Xml.SetText(processCode, "Process");

attributeMap.appendChild(sourceAttribute);
attributeMap.appendChild(targetAttribute);
attributeMap.appendChild(processCode);
xmlDoc.appendChild(attributeMap);

if(node.getAttribute("attributetype") == "picklist")
{
if(parent != null)
parent.isMapped = false;
}

if(node.getAttribute("attributetype") == "lookup"  || node.getAttribute("attributetype") == "customer")
{
var attributecommand2 = new RemoteCommand("ImportWebService", "GetLookupValuesXml");
attributecommand2.SetParameter("entityTypeCode", entityTypeCode);
attributecommand2.SetParameter("attributeLogicalName", XUI.Xml.GetText(targetAttribute));
var result2 = attributecommand2.Execute();
if(result2.Success == true)
{
var attributeXmlDoc2 = XUI.Xml.LoadXml(result2.ReturnValue);
var lookupmapsNode = XUI.Xml.SelectSingleNode(attributeXmlDoc2, "//LookupMaps", null));
if(lookupmapsNode != null)
{
attributeMap.appendChild(lookupmapsNode);
}
}
}

var attriMapsNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//AttributeMaps", null);

if(IsNull(attriMapsNode))
{
attriMapsNode = xmlDoc.createElement("AttributeMaps");
attriMapsNode.appendChild(attributeMap);
var entityMapNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//EntityMap", null);
if(IsNull(entityMapNode))
{
var entityMapsNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//EntityMaps", null);
entityMapNode = xmlDoc.createElement("EntityMap");
entityMapNode.setAttribute("TargetEntityName", entityName);
entityMapNode.setAttribute("SourceEntityName","");
entityMapNode.appendChild(attriMapsNode);
entityMapsNode.appendChild(entityMapNode);
}
else
{
entityMapNode.appendChild(attriMapsNode);
}
}
else
{
attriMapsNode.appendChild(attributeMap);
}

SelectedAttributesChange();
UpdateCounts();
}

function btnUnmap()
{
if(XUI.Html.GetText(_selectedTargetItem) == "")
{

return;
}

if(XUI.Html.GetText(_selectedTargetItem) == ignoreAtributeLabel)
{
RemoveIgnoredColumnMappingForSelectItem();
}
else
{
var _selecteditemid = _selectedTargetItem.id;
_selecteditemid = _selecteditemid.replace("targetattributeitem","targetattributehiddenitem");

var targetAttributes = document.getElementById(_selecteditemid).value.split(";");

for(var i = 0; i < targetAttributes.length; i++)
{
var xpath = "//AttributeMap[TargetAttributeName=\"" + targetAttributes[i] + "\" and SourceAttributeName=\"" + escapeSingleQuotesAndBackSlashes(XUI.Html.GetText(_selectedSourceItem)) + "\"]";
var attributeNode = XUI.Xml.SelectSingleNode(mapXmlDoc, xpath, null);
var attriMapsNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//AttributeMaps", null);
attriMapsNode.removeChild(attributeNode);

if(!IsNull(attributeNode.getAttributeNode("Id")))
{
colMappingIdsToDelete[colMappingIdsToDelete.length] = attributeNode.getAttribute("Id");
}
}
}



var doc = XUI.Xml.CreateDocument();

var xpath = "//Header[@name=\"" + XUI.Html.GetText(_selectedSourceItem) + "\"]";
if(IsNull(XUI.Xml.SelectSingleNode(sampleDataXmlDoc, xpath, null)))
{
if(XUI.Html.GetText(_selectedSourceItem) != "")
{
var headerNode = doc.createElement("Header");
headerNode.setAttribute("name", XUI.Html.GetText(_selectedSourceItem));
var csvDataNode = "";

if(sampleDataXmlDoc.xml == "")
{
csvDataNode = doc.createElement("CsvData");
csvDataNode.appendChild(headerNode);
sampleDataXmlDoc.appendChild(csvDataNode);
}
else
{
csvDataNode = XUI.Xml.SelectSingleNode(sampleDataXmlDoc, "//CsvData", null);
csvDataNode.appendChild(headerNode);
}
}
}

XUI.Html.SetText(_selectedTargetItem, "");
_selectedTargetItem.title = unmappedAttributeLabel;

SelectedAttributesChange();
UpdateCounts();
}

function RemoveIgnoredColumnMappingForSelectItem()
{

xpath = "//AttributeMap[ProcessCode=\"Ignore\" and SourceAttributeName=\"" + escapeSingleQuotesAndBackSlashes(XUI.Html.GetText(_selectedSourceItem)) + "\"]";
var attributeNode = XUI.Xml.SelectSingleNode(mapXmlDoc, xpath, null);
var attriMapsNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//AttributeMaps", null);
attriMapsNode.removeChild(attributeNode);

if(!IsNull(attributeNode.getAttributeNode("Id")))
{
colMappingIdsToDelete[colMappingIdsToDelete.length] = attributeNode.getAttribute("Id");
}
}

function btnIgnore()
{
var targetAttributes = "";
if(XUI.Html.GetText(_selectedTargetItem) == ignoreAtributeLabel)
{

return;
}

if(XUI.Html.GetText(_selectedTargetItem) != "")
{
var _selecteditemid = _selectedTargetItem.id;
_selecteditemid = _selecteditemid.replace("targetattributeitem","targetattributehiddenitem");

targetAttributes = document.getElementById(_selecteditemid).value.split(";");
for(var i = 0; i < targetAttributes.length; i++)
{
xpath = "//AttributeMap[TargetAttributeName=\"" + targetAttributes[i] + "\" and SourceAttributeName=\"" + escapeSingleQuotesAndBackSlashes(XUI.Html.GetText(_selectedSourceItem)) + "\"]";
var attributeNode = XUI.Xml.SelectSingleNode(mapXmlDoc, xpath, null);
var attriMapsNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//AttributeMaps", null);
attriMapsNode.removeChild(attributeNode);

if(!IsNull(attributeNode.getAttributeNode("Id")))
{
colMappingIdsToDelete[colMappingIdsToDelete.length] = attributeNode.getAttribute("Id");
}
}
}


XUI.Html.SetText(_selectedTargetItem, ignoreAtributeLabel);
_selectedTargetItem.title = ignoreAtributeLabel;
_selectedTargetItem.style.fontStyle='italic';


var xmlDoc = XUI.Xml.CreateDocument();
var attributeMap = xmlDoc.createElement("AttributeMap");
var sourceAttribute = xmlDoc.createElement("SourceAttributeName");
var targetAttribute = xmlDoc.createElement("TargetAttributeName");
var processCode = xmlDoc.createElement("ProcessCode");

sourceAttribute.text = XUI.Html.GetText(_selectedSourceItem);
XUI.Xml.SetText(processCode, "Ignore");

attributeMap.appendChild(sourceAttribute);
attributeMap.appendChild(targetAttribute);
attributeMap.appendChild(processCode);
xmlDoc.appendChild(attributeMap);

var attriMapsNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//AttributeMaps", null);

if(IsNull(attriMapsNode))
{
attriMapsNode = xmlDoc.createElement("AttributeMaps");
attriMapsNode.appendChild(attributeMap);
var entityMapNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//EntityMap", null);
if(IsNull(entityMapNode))
{
var entityMapsNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "//EntityMaps", null);
entityMapNode = xmlDoc.createElement("EntityMap");
entityMapNode.setAttribute("TargetEntityName", entityName);
entityMapNode.setAttribute("SourceEntityName","");
entityMapNode.appendChild(attriMapsNode);
entityMapsNode.appendChild(entityMapNode);
}
else
{
entityMapNode.appendChild(attriMapsNode);
}
}
else
{
attriMapsNode.appendChild(attributeMap);
}

SelectedAttributesChange();
UpdateCounts();
}

function btnLoadDataFile()
{
var dataXml = openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_uploadsampledata.aspx"), null, 400, 300, true, false, "maximize:no;minimize:no");
if(dataXml != "")
{
var dataXmlDoc = XUI.Xml.LoadXml(dataXml);

if(sampleDataXmlDoc.xml != "")
{


var csvDataNode = XUI.Xml.SelectSingleNode(dataXmlDoc, "//CsvData", null);
var headerNodes = XUI.Xml.SelectNodes(sampleDataXmlDoc, "//Header", null);

for(var index = 0; index < headerNodes.Count ; index++)
{
var xpath = "//Header[@name=\"" + headerNodes[index].getAttribute("name") + "\"]";
if(IsNull(XUI.Xml.SelectSingleNode(dataXmlDoc, xpath, null)))
{
csvDataNode.appendChild(headerNodes[index]);
}
}
}
sampleDataXmlDoc = dataXmlDoc;
PopulateSourceAndTargetList();
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
<div class="ms-crm-InlineTabContainer" style="height:100%;width:100%;overflow:auto">
<table style="background-color:#ecf2ff;border:1px solid #8C8E94; margin-bottom:20px; margin-left:10px; margin-right:10px">
<tr>
<td>
<table cellpadding="0" class="table.attrMap_table_header">
<tr>
<td>
<loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.Header.Text" runat="server"/>
</td>
</tr>
<tr></tr>
</table>
<table class="attrMap_table_header2">
<tr style="padding-top:20px">
<td class="attrMap_td_headerLabel">
<b><loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.SourceHeader.Label" runat="server"/></b>
</td>
<td class="attrMap_td_headerLabel">
<b><loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.TargetHeader.Label" runat="server"/></b>
</td>
</tr>
<tr>
<td>
<div style="padding:5px;background-color:#C4DDFF;width:450px;margin-left:5px;margin-right:5px;;border:1px solid #8C8E94;">
<table id="tblGridBar" width="400" cellpadding="0">
<tr valign="top" class="gridHeader" onclick="onSourceGridColumnClick();">
<td>
<div>
<table width="440">
<col width="200"/><col/><col width="240"/>
<tr>
<td class="ms-crm-List-Header" field="cn">
<label style="width:196;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("DataManagement.ImportMap.AttributeMap.SourceHeaderList.Label"))%>">
<b>
<loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.SourceHeaderList.Label" runat="server"/>
</b>
<img alt="" src="/_imgs/grid/bar_up.gif" class="addFields_img_barUp">
</label>
</td>
<td>
<img alt="" src="/_imgs/grid/bar_line.gif"></td>
<td class="ms-crm-List-Header" field="cn">
<label style="width:234;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("DataManagement.ImportMap.AttributeMap.TargetHeaderList.Label"))%>">
<b>
<loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.TargetHeaderList.Label" runat="server"/>
</b>
</label>
</td>
</tr>
</table>
</div>
</td>
</tr>
<tr style="height:360" valign="top">
<td>
<div class="ms-crm-Dialog-List" style="overflow:auto;background-color:#C4DDFF">
<table width="440">
<col width="200"/><col width="240"/>
<tr>
<td>
<ul id="sourceAttributesList" class="ms-crm-Dialog-List" style="height:350; background-color:#FFFFFF">
</ul>
</td>
<td>
<ul id="targetAttributesList" class="ms-crm-Dialog-List" style="height:350;background-color:#FFFFFF">
</ul>
</td>
</tr>
</table>
</div>
</td>
</tr>
<tr><td><label id="mappedHeadersCountLabel"></label></td></tr>
<tr style="height:20px">
<td>
<div>
<table width="440" style="table-layout:fixed;">
<col width="200"/><col width="240"/>
<tr>
<td>
<cui:Button ID="btn_id_LoadDataFile" OnClick="btnLoadDataFile();" ResourceId="DataManagement.ImportMap.AttributeMap.Button.LoadDataFile" runat="server"></cui:Button>
</td>
<td>
<table width="50">
<col width="25"/><col width="25"/>
<tr class="attrMap_tr_buttons">
<td>
<cui:Button ID="btn_id_Ignore" OnClick="btnIgnore();" ResourceId="DataManagement.ImportMap.AttributeMap.Button.Ignore" runat="server"></cui:Button>
</td>
<td>
<cui:Button ID="btn_id_Unmap" OnClick="btnUnmap();" ResourceId="DataManagement.ImportMap.AttributeMap.Button.Unmap" runat="server"></cui:Button>
</td>
</tr>
</table>
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
<div style="padding:5px;background-color:#C4DDFF;width:210px;height:360px;margin-left:5px;margin-right:5px;border:1px solid #8C8E94;">
<table id="targetentityattributes" width="310" cellpadding="0" style="table-layout:fixed">
<tr style="height:40">
<td>
<table>
<tr>
<td style="width:165px">
<loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.UnmappedAttributes.Text" runat="server"/>
</td>
<td style="width:145px">
<cui:Select id="unmappedAttributeOptions" onchange="SelectedAttributesChange();" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr class="gridHeader" valign="bottom" onclick="onAttributeGridColumnClick();">
<td class="gridheader attrMap_td_gridHeader" field="cn" width="30"><label style="width:194;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(entityTypeCode, NameFormatStyle.Singular)) %>" ><b><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(entityTypeCode, NameFormatStyle.Singular)) %></b><img alt="" src="/_imgs/grid/bar_up.gif" class="addFields_img_barUp"></label></td>
</tr>
<tr style="height:300">
<td>
<div class="ms-crm-Dialog-List" style="overflow:auto">
<table width="280">
<tr>
<td>
<ul id="entityAttributeList" class="ms-crm-Dialog-List" style="height:295;">
</ul>
</td>
</tr>
</table>
</div>
</td>
</tr>
<tr style="height:30"><td><label id="bizReqdMapCount"></label></td></tr>
<tr style="height:40">
<td valign="bottom">
<table width="270" style="table-layout:fixed;">
<col width="140"/><col width="130"/>
<tr>
<td class="attrMap_td_btnMap">
<cui:Button ID="btn_id_Map" OnClick="btnMap();" ResourceId="DataManagement.ImportMap.AttributeMap.Button.Map" runat="server"></cui:Button>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</td>
</tr>
<tr>
<td colspan=2  class="attrMap_td_MapFile">
<table style="table-layout:fixed" width="300px">
<col width="135px"/><col width="165px"/>
<tr>
<td class="attrMap_td_MapFile">
<label class="attrMap_td_LegendText" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("DataManagement.ImportMap.AttributeMap.Legend.Text"))%>">
<b><loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.Legend.Text" runat="server"/></b>
</label>
</td>
<td>
<img src="/_imgs/picklist.gif" alt="<loc:Text ResourceId='DataManagement.ImportMap.AttributeMap.PickListLegend.Text' runat='server'/>"/>
&nbsp;<label class="attrMap_label_LegendLabel" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("DataManagement.ImportMap.AttributeMap.PickListLegend.Text"))%>">
<loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.PickListLegend.Text" runat="server"/></label>
</td>
</tr>
<tr>
<td></td>
<td>
<img src="/_imgs/lookup.gif" alt="<loc:Text ResourceId='DataManagement.ImportMap.AttributeMap.LookupLegend.Text' runat='server'/>"/>
&nbsp;<label class="attrMap_label_LegendLabel" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("DataManagement.ImportMap.AttributeMap.LookupLegend.Text"))%>">
<loc:Text ResourceId="DataManagement.ImportMap.AttributeMap.LookupLegend.Text" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</body>
</html>
