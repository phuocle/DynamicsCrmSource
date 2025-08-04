<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.ResourceSpecs.DetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server">
</cnt:AppHeader>
<script type="text/javascript" language="javascript">
var _oId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(oId) %>;

var _bReadOnly = (<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ReadOnly.ToString()) %> == 'True');
var _oTree = null;
var _bDirty = false;




function IsDirty()
{
return _bDirty;
}

function loadTree(sender)
{
_oTree = sender;
loadResourceSpecTree(_oTree, "GetTree", _oId);
setNotification();
_bDirty = false;
}

function registerNodeTypes(oTree)
{
var ico4000Info = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/ico_16_4000.gif'));
var ico8ImageInfo = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/ico_16_8.gif'));

oTree.RegisterNodeTypeWithImageStrip("equipment", ico4000Info.source, ico4000Info.cssClass, null, null, "ua_label", "description");
oTree.RegisterNodeType("resourcespec","/_imgs/tree/folder.gif", null, null, "ua_label", "description", false);
oTree.RegisterNodeType("constraintbasedgroup","/_imgs/ico_16_4007.gif", null, null, "ua_label", "description");
oTree.RegisterNodeTypeWithImageStrip("systemuser", ico8ImageInfo.source, ico8ImageInfo.cssClass, null, null, "ua_label", "description");
oTree.RegisterNodeType("team","/_imgs/ico_16_9.gif", null, null, "ua_label", "description");
if (!_bReadOnly)
{
oTree.RegisterNodeType("ua_node","/_imgs/error/notif_icn_warn16.png", null, null, ".", "", false);
}
}

function setNotification()
{
var parentForm = window.parent;
if (!IsNull(parentForm) && (typeof(parentForm.SetNotification) == "function"))
{

if (needNotification())
{
parentForm.SetNotification(LOCID_RESSPEC_NORESOURCES);
}
else
{
parentForm.SetNotification(null);
}
}

}

function needNotification()
{

var oXml = _oTree.get_xmlNode();








return (null != XUI.Xml.SelectSingleNode(oXml, "//resourcespec[(ua_node or not(node()) or not(*[@fulltree_id and (not(@fulltree_status)  or (@fulltree_status and @fulltree_status != \"deleted\"))])) and (not(@fulltree_status) or (@fulltree_status and @fulltree_status != \"deleted\"))]", null));
}

function setUaLabels(oTree)
{

var oXml = oTree.get_xmlNode();


var aoResourcespecNodes = XUI.Xml.SelectNodes(oXml, "//resourcespec", null);

var bAddHelper = false;
if (aoResourcespecNodes.length > 0)
{



bAddHelper = (XUI.Xml.SelectSingleNode(aoResourcespecNodes[0], "equipment|resourcespec|constraintbasedgroup|systemuser|team", null) == null);
}



for (var i = 0; i < aoResourcespecNodes.length ; i++)
{
var oResourceSpecNode = aoResourcespecNodes[i];

var bHasParent = oResourceSpecNode.parentNode.nodeName != "tree";
var bSameSite = DEFAULT_SAMESITE;
var iQuantity = DEFAULT_QUANTITY;
var sObjective = DEFAULT_OBJECTIVE;
var oInsertNode = oXml.ownerDocument.createElement("ua_label");


var oElement = XUI.Xml.SelectSingleNode(oResourceSpecNode, "samesite", null);
if (oElement !== null)
{
bSameSite = XUI.Xml.GetText(oElement) == "1";
}

oElement = XUI.Xml.SelectSingleNode(oResourceSpecNode, "requiredcount", null);
if (oElement !== null)
{
iQuantity = XUI.Xml.GetText(oElement);
}

oElement = XUI.Xml.SelectSingleNode(oResourceSpecNode, "objectiveexpression/Expression", null);
if (oElement !== null)
{
sObjective = oElement.xml;
}

var oCData = oXml.ownerDocument.createCDATASection(getRuleDisplayText(bHasParent, iQuantity, sObjective, bSameSite, bAddHelper));

bAddHelper = false;
if (oCData != null)
{
oInsertNode.appendChild(oCData);
}

oResourceSpecNode.appendChild(oInsertNode);
}


var aoGroupNodes = XUI.Xml.SelectNodes(oXml, "//constraintbasedgroup|//team", null);


for (var i = 0; i < aoGroupNodes.length ; i++)
{
var oGroupNode = aoGroupNodes[i];
var sName = "";
var oInsertNode = oXml.ownerDocument.createElement("ua_label");


var oElement = XUI.Xml.SelectSingleNode(oGroupNode, "name", null);
if (oElement !== null)
{
sName = XUI.Xml.GetText(oElement);
}

XUI.Xml.SetText(oInsertNode, formatString(LOCID_RESSPEC_NAMEFMTGRP, sName));

oGroupNode.appendChild(oInsertNode);
}


aoGroupNodes = XUI.Xml.SelectNodes(oXml, "//resourcespec[not(equipment|resourcespec|constraintbasedgroup|systemuser|team)]", null);


for (var i = 0; i < aoGroupNodes.length ; i++)
{
oGroupNode = aoGroupNodes[i];
oInsertNode = oXml.ownerDocument.createElement("ua_node");
oCData = oXml.ownerDocument.createCDATASection(getHelperNodeLabel());
if (oCData != null)
{
oInsertNode.appendChild(oCData);
}

oGroupNode.appendChild(oInsertNode);
}

var aoResourceNodes = XUI.Xml.SelectNodes(oXml, "//systemuser|//equipment", null);


for (var i = 0; i < aoResourceNodes.length ; i++)
{
var oResourceNode = aoResourceNodes[i];
var sName = "";
var bDisabled = false;
var oInsertNode = oXml.ownerDocument.createElement("ua_label");


var oElement = XUI.Xml.SelectSingleNode(oResourceNode, "name", null);
if (oElement !== null)
{
sName = XUI.Xml.GetText(oElement);
}
oElement = XUI.Xml.SelectSingleNode(oResourceNode, "isdisabled", null);
if (oElement !== null)
{
bDisabled = XUI.Xml.GetText(oElement) == "1";
}


if (bDisabled)
{
XUI.Xml.SetText(oInsertNode, formatString(LOCID_SCHEDDLG_DISABLED_RES, sName));
}
else
{
XUI.Xml.SetText(oInsertNode, sName);
}

oResourceNode.appendChild(oInsertNode);
}
}

function getStartTemplate()
{

var sRuleChildren =
makeTag("ua_label","<![CDATA[" + getRuleDisplayText(false, 1, OBJECTIVE_RANDOM_EXPRESSION, 1, true) + "]]>") +
makeTag("name", CrmEncodeDecode.CrmHtmlEncode(LOCID_RESSPEC_NAMEIMPL)) +
makeTag("requiredcount", DEFAULT_QUANTITY) +
makeTag("effortrequired", DEFAULT_EFFORT) +
makeTag("samesite", DEFAULT_SAMESITE) +
makeTag("objectiveexpression", OBJECTIVE_RANDOM_EXPRESSION) +
makeTag("description");
return makeTag("tree", makeTag("resourcespec", sRuleChildren, "fulltree_status=\"new\""));
}


function Save()
{
if (_bDirty || _oId.length == 0)
{
var oCommand = new RemoteCommand("ResourceSpecTree", "SaveTree");
if (oCommand != null)
{
var oTreeXml = _oTree.get_xmlNode();
oCommand.SetParameter("dataXml", XUI.Xml.XMLSerializer.serializeToString(oTreeXml));

var oResult = oCommand.Execute();
if (oResult.Success)
{
_bDirty = false;
return oResult.ReturnValue;
}
else
{
return null;
}
}
}
}






function getSelectedResourceSpec()
{
var oResourcespec = -1;
if (_oTree == null)
{
alert(LOCID_RESSPEC_TREENOTLOADED);
return -2;
}
if (_oTree.get_count() > 0)
{
oResourcespec = _oTree.get_selectedNodeId();
if (oResourcespec < 0)
{
alert(LOCID_RESSPEC_NOPARENTSEL);
return -2;
}
else
{

var sElementType = "";
var nodeElement = _oTree.GetNodeElement(oResourcespec);
if (nodeElement != null)
{
sElementType = nodeElement.nodeName;
}
if (sElementType != "resourcespec")
{
alert(LOCID_RESSPEC_NORULESEL);
return -2;
}
}
}
if (oResourcespec < 0 || _oTree.get_count() == 0)
{
oResourcespec = -1;
}
return oResourcespec;
}




function getHelperNodeText()
{

return "<ua_node><![CDATA[&lt;" + getHelperNodeLabel() + "&gt;]]>" + "</ua_node>";
}




function getHelperNodeLabel()
{


var sResourceLink = makeLink(LOCID_RESSPEC_HLPLINKRES, "selectParent(event);AddResource();");
var sResourceGroupLink = makeLink(LOCID_RESSPEC_HLPLINKRG, "selectParent(event);AddResourceGroup();");
var sRuleLink = makeLink(LOCID_RESSPEC_HLPLINKRULE, "selectParent(event);AddRule();");


return formatString(CrmEncodeDecode.CrmHtmlEncodeForFormatString(LOCID_RESSPEC_HLPLINKFMT), sResourceLink, sResourceGroupLink, sRuleLink);
}




function getRuleDisplayText(bHasParent, iQuantity, sObjective, bSameSite, bAddHelper)
{
var sLinkEdit = "selectNode(event);EditSelectedItem();";
var sQuantity = (iQuantity == "-1")? LOCID_RESSPEC_ALL : iQuantity;

var sChoiceLink = _bReadOnly ? sQuantity : makeLink(sQuantity, sLinkEdit);


var sCriteria = "";
var iCriteriaId = convertExpressionToId(sObjective);
if (iCriteriaId != OBJECTIVE_RANDOM_ID)
{
var sCriteriaLabel = "";
if (iCriteriaId == OBJECTIVE_LEAST_BUSY_ID)
{
sCriteriaLabel = LOCID_RESSPEC_LEAST_BUSY;
}
else if (iCriteriaId == OBJECTIVE_MOST_BUSY_ID)
{
sCriteriaLabel = LOCID_RESSPEC_MOST_BUSY;
}
else if (iCriteriaId == OBJECTIVE_CUSTOM_ID)
{
sCriteriaLabel = LOCID_RESSPEC_CUSTOM;
}
sCriteria = _bReadOnly ? sCriteriaLabel : makeLink(sCriteriaLabel, sLinkEdit);
}


var sSite = "";
if (!bHasParent)
{
sSite = (bSameSite == "1") ? LOCID_RESSPEC_SITESAME : LOCID_RESSPEC_SITEANY;
sSite = _bReadOnly ? sSite : makeLink(sSite, sLinkEdit);
}


var sHelper = "";
if (bAddHelper && !_bReadOnly)
{
var sQuantityLink = "<span><a onclick=\"editroot(event)\" class=\"rsHelperlink\">" + CrmEncodeDecode.CrmHtmlEncode(LOCID_RESSPEC_FMTQTY) + "</a></span>";
var sLabel = formatString(CrmEncodeDecode.CrmHtmlEncodeForFormatString(LOCID_RESSPEC_FMTLBL), sQuantityLink);
sHelper = formatString(" &lt;<img alt=\"\" src=\"/_imgs/error/notif_icn_warn16.png\"> {0}&gt;", sLabel);
}


var sFormatName = "";
if (sCriteria.length > 0)
{
if (sSite.length > 0)
{

sFormatName = LOCID_RESSPEC_FMTNMCS;
}
else
{

sFormatName = LOCID_RESSPEC_FMTNMC_;
}
}
else
{
if (sSite.length > 0)
{

sFormatName = LOCID_RESSPEC_FMTNM_S;
}
else
{

sFormatName = LOCID_RESSPEC_FMTNM__;
}
}
return formatString(CrmEncodeDecode.CrmHtmlEncodeForFormatString(sFormatName), sChoiceLink, sCriteria, sSite, sHelper);
}




function selectNode(eventObject)
{
eventObject = eventObject || window.event;
_oTree.set_selectedNodeId(_oTree.GetNodeId(eventObject.target || eventObject.srcElement));
}




function selectParent(eventObject)
{
eventObject = eventObject || window.event;
_oTree.set_selectedNodeId(_oTree.GetParentId(eventObject.target || eventObject.srcElement));
}





function AddRule()
{
var oParent = getSelectedResourceSpec();
if (oParent < 0)
{

return;
}


var oArguments = new ruleArgs(DEFAULT_QUANTITY, DEFAULT_EFFORT, DEFAULT_SAMESITE, DEFAULT_OBJECTIVE, "");
var oUrl = Mscrm.CrmUri.create("/SM/ResourceSpecs/ResourceRule.aspx?mode=add");


var dialogOptions = new Xrm.DialogOptions();
dialogOptions.height = 300;
dialogOptions.width = 400;
var addRuleCallBackObj = Mscrm.Utilities.createCallbackFunctionForXrmDialog(addRuleCallBack, [oParent, _bDirty]);
Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oArguments, null, addRuleCallBackObj);
}

function addRuleCallBack(oResult, oParent)
{
if (oResult)
{

var sRuleChildren =
makeTag("ua_label","<![CDATA[" + getRuleDisplayText(true, oResult.iQuantity, oResult.sObjective, oResult.bSameSite, false) + "]]>") +
makeTag("name", CrmEncodeDecode.CrmHtmlEncode(LOCID_RESSPEC_NAMEIMPL)) +
makeTag("requiredcount", oResult.iQuantity) +
makeTag("effortrequired", oResult.fEffort) +
makeTag("samesite", oResult.bSameSite) +
makeTag("objectiveexpression", oResult.sObjective) +
makeTag("description", CrmEncodeDecode.CrmXmlEncode(oResult.sDescription)) +
makeTag("type", ResourceSpec) +
getHelperNodeText();

var sRuleXml = makeTag("tree", makeTag("resourcespec", sRuleChildren));


removeHelperNodeById(oParent);


_oTree.InsertChildNode(oParent, sRuleXml);
setNotification();

_bDirty = true;
}
}





function AddResource()
{
var sItemsToLookup =
formatString("{0},{1},{2},{3}", SystemUser, Team, Equipment, ResourceGroup);
AddItems(sItemsToLookup);
}





function AddResourceGroup()
{
AddItems(ResourceGroup);
}





function AddItems(sTypesToAdd)
{
var oParent = getSelectedResourceSpec();
if (oParent < 0)
{

return;
}

var sLookupSelectionStatus = "multi";
var parameters = new Array(sTypesToAdd, oParent);
var callbackFunctionObject = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterLookUpAddAddItems", this, parameters, false);
LookupObjectsWithCallback(callbackFunctionObject, null, sLookupSelectionStatus, sTypesToAdd, 0);
}

function performActionAfterLookUpAddAddItems(aoRetval, sTypesToAdd, oParent)
{
if (!aoRetval || aoRetval.items.length == 0)
{

return;
}
else
{



if (aoRetval.items.length > 1){
var parameters = new Array(aoRetval, sTypesToAdd, oParent);
askAboutGroups(parameters);
}
else
{
refreshResourceGroupList(aoRetval,sTypesToAdd,oParent);
}
}
}

function askAboutGroups(parameters)
{


var oUrl = Mscrm.CrmUri.create("/SM/ResourceSpecs/creategroup.aspx");
var callBackFunction = Mscrm.Utilities.createCallbackFunctionForXrmDialog(callerConvertToGroup, parameters)
var dialogOptions = new Xrm.DialogOptions();
dialogOptions.height = 295;
dialogOptions.width = 460;
Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, parameters, null, callBackFunction);
}

function callerConvertToGroup(oResult, aoRetval, sTypesToAdd, oParent)
{


if (oResult == undefined || oResult.OK == false)
{

return;
}
var sGroupName = oResult.name;
if (sGroupName != "")
{
aoRetval.items = convertToGroup(aoRetval.items, sGroupName);
}
refreshResourceGroupList(aoRetval,sTypesToAdd,oParent);
}
function refreshResourceGroupList(aoRetval,sTypesToAdd,oParent)
{

removeHelperNodeById(oParent);

var sMemberXml = "<tree>";
var sNodeTypeName = "";


for (i=0; i<aoRetval.items.length; i++)
{
sNodeTypeName = entityName(aoRetval.items[i].type);
var sNodeChildren = makeTag("id", aoRetval.items[i].id) +
makeTag("type", aoRetval.items[i].type) +
makeTag("name", CrmEncodeDecode.CrmHtmlEncode(aoRetval.items[i].name)) +
makeTag("description", CrmEncodeDecode.CrmHtmlEncode(aoRetval.items[i].name));
if (sNodeTypeName == "constraintbasedgroup" || sNodeTypeName == "team")
{
sNodeChildren += makeTag("ua_label", formatString(LOCID_RESSPEC_NAMEFMTGRP , CrmEncodeDecode.CrmHtmlEncode(aoRetval.items[i].name)));
}
else if (sNodeTypeName == "systemuser" || sNodeTypeName == "equipment")
{
sNodeChildren += makeTag("ua_label", CrmEncodeDecode.CrmHtmlEncode(aoRetval.items[i].name));
}

sMemberXml += makeTag(CrmEncodeDecode.CrmHtmlEncode(sNodeTypeName), sNodeChildren);
}

sMemberXml += "</tree>";


_oTree.InsertChildNode(oParent, sMemberXml);
setNotification();
_bDirty = true;
}

function convertToGroup(aoItems, sGroupName)
{







var aGuids = new Array();
aGuids.type = "guid";
for (var i=0; i<aoItems.length; i++)
{
aGuids.push(aoItems[i].id);
}


var aReturnItems = new Array();

var oCommand = new RemoteCommand("ResourceGroupUI", "CreateConstraintBasedGroup");
if (oCommand != null)
{
oCommand.SetParameter("name", sGroupName);
oCommand.SetParameter("members", aGuids);

var oResult = oCommand.Execute();
if (oResult.Success)
{

var oReturnItem = new Object();
oReturnItem.id = oResult.ReturnValue;
oReturnItem.name = sGroupName;
oReturnItem.type = ResourceGroup.toString();

aReturnItems.push(oReturnItem);
}
}
return aReturnItems;
}

function removeHelperNodeById(sParentId)
{

removeHelperNode(_oTree.GetNodeElement(sParentId));
}

function removeHelperNode(oParentNode)
{
if (oParentNode != null)
{
var oUaNode = XUI.Xml.SelectSingleNode(oParentNode, "ua_node", null);
if (oUaNode != null)
{
oParentNode.removeChild(oUaNode);
}
}
}




function editroot(eventObject)
{
selectNode(eventObject);
EditSelectedItem();
}





function EditSelectedItem()
{
if (_oTree == null)
{
alert(LOCID_RESSPEC_TREENOTLOADED);
return;
}


var sItem = _oTree.get_selectedNodeId();
if (sItem < 0)
{
alert(LOCID_RESSPEC_NOSEL);
return;
}


var oTargetNode = _oTree.GetNodeElement(sItem);
var sElementType = "";
if (oTargetNode !== null)
{
var sParent = oTargetNode.parentNode.nodeName;
sElementType = oTargetNode.nodeName;

if (sElementType == "ua_node")
{

}

else if (sElementType == "resourcespec")
{

var iQuantity = DEFAULT_QUANTITY;
var fEffort = DEFAULT_EFFORT;
var sObjective = OBJECTIVE_RANDOM_EXPRESSION;
var sDescription = "";
var bSameSite = DEFAULT_SAMESITE;


var oElement = XUI.Xml.SelectSingleNode(oTargetNode, "requiredcount", null);
if (oElement !== null)
{
iQuantity = XUI.Xml.GetText(oElement);
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "effortrequired", null);
if (oElement !== null)
{
fEffort = XUI.Xml.GetText(oElement);
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "objectiveexpression/Expression", null);
if (oElement !== null)
{


sObjective = convertIdToExpression(convertExpressionToId(XUI.Xml.XMLSerializer.serializeToString(oElement)));
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "samesite", null);
if (oElement !== null)
{
bSameSite = XUI.Xml.GetText(oElement);
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "description", null);
if (oElement !== null)
{
sDescription = XUI.Xml.GetText(oElement);
}


var oArguments = new ruleArgs(iQuantity, fEffort, bSameSite, sObjective, sDescription);


var showAdvanced = sObjective != OBJECTIVE_RANDOM_EXPRESSION || (fEffort != DEFAULT_EFFORT);
var oUrl = Mscrm.CrmUri.create("/SM/ResourceSpecs/ResourceRule.aspx?mode=" +
((sParent == "tree") ? "editroot" : "editnested") +
"&showadvanced=" + ((showAdvanced) ? "1" : "0"));


var dialogOptions = new Xrm.DialogOptions();
dialogOptions.height = ((sParent == "tree") ? 315 : 300) + (showAdvanced ? ADVANCED_SECTION_HEIGHT : 0);
dialogOptions.width = 400;
var editSelectedItemCallBackObj = Mscrm.Utilities.createCallbackFunctionForXrmDialog(editSelectedItemCallBack, [oTargetNode, sParent, _bDirty]);
Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oArguments, null, editSelectedItemCallBackObj);
}
else
{

var iType = 0;
var sId = "";


var oElement = XUI.Xml.SelectSingleNode(oTargetNode, "id", null);
if (oElement !== null)
{
sId = XUI.Xml.GetText(oElement);
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "type", null);
if (oElement !== null)
{
iType = Number(XUI.Xml.GetText(oElement));
}

if (iType > 0 && sId.length > 0)
{
openObj(iType, sId, null, null, Mscrm.NavigationMode.NavigationModeNewWindow, null);
}
else
{
alert(LOCID_RESSPEC_NOIDTYPE);
}
}
}
}

function editSelectedItemCallBack(oResult, oTargetNode, sParent)
{
if (oResult)
{

var oElement = XUI.Xml.SelectSingleNode(oTargetNode, "ua_label", null);
if (oElement !== null)
{


XUI.Xml.SetText(oElement, getRuleDisplayText((sParent != "tree"), oResult.iQuantity, oResult.sObjective, oResult.bSameSite, false));
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "requiredcount", null);
if (oElement !== null)
{
XUI.Xml.SetText(oElement, oResult.iQuantity);
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "effortrequired", null);
if (oElement !== null)
{
XUI.Xml.SetText(oElement, oResult.fEffort);
}


if (oResult.sObjective.length > 0)
{
oElement = XUI.Xml.SelectSingleNode(oTargetNode, "objectiveexpression", null);
if (oElement !== null)
{
var oExpression = XUI.Html.DomUtils.GetFirstChild(oElement);
if (oExpression != null)
{
oElement.removeChild(oExpression);
}
var xmlDoc = XUI.Xml.LoadXml(oResult.sObjective);
if (xmlDoc != null)
{
var oRoot = xmlDoc.documentElement;
if (oRoot != null)
{
var oChildNode = oRoot.cloneNode(true);


oElement.appendChild(oChildNode);
}
}
}
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "samesite", null);
if (oElement !== null)
{
XUI.Xml.SetText(oElement, oResult.bSameSite);
}

oElement = XUI.Xml.SelectSingleNode(oTargetNode, "description", null);
if (oElement !== null)
{
XUI.Xml.SetText(oElement, oResult.sDescription);
}


_oTree.UpdateNode(oTargetNode, oTargetNode);
_bDirty = true;
}
}

function DeleteSelectedItem()
{
if (_oTree == null)
{
alert(LOCID_RESSPEC_TREENOTLOADED);
return;
}


var sItem = _oTree.get_selectedNodeId();
if (sItem < 0)
{
alert(LOCID_RESSPEC_DELNOTSEL);
return;
}

var oItem = _oTree.GetNodeElement(sItem);
var oParent = oItem.parentNode;
var sParent = oParent.nodeName;
if (sParent == "tree")
{

alert(LOCID_RESSPEC_NODELROOT);
return;
}

if (oItem.nodeName == "ua_node")
{

removeHelperNode(oParent);
_oTree.RenderTree();
}
else
{

if (!confirm(LOCID_RESSPEC_DELCONFIRM))
{
return;
}

_oTree.DeleteNode(sItem);




if (XUI.Xml.SelectSingleNode(oParent, "*[@fulltree_id and (not(@fulltree_status) or (@fulltree_status and @fulltree_status !=\"deleted\"))]", null) == null)
{

var sHelperXml = makeTag("tree", getHelperNodeText());

var oParentId = XUI.Xml.SelectSingleNode(oParent, "@fulltree_id", null);

if (oParentId != null)
{

_oTree.InsertChildNode(oParentId.value, sHelperXml);
}
}
setNotification();
}


_oTree.set_selectedNodeId(-1);
_bDirty = true;
}

function entityName(entityType)
{
switch(entityType)
{
case "8":
return "systemuser";
case "9":
return "team";
case "4000":
return "equipment";
case "4006":
return "resourcespec";
case "4007":
return "constraintbasedgroup";
}
return "node";
}

function handleDoubleClick()
{
if (_oTree != null && _oTree.get_selectedNodeId() >= 0)
{
EditSelectedItem();
}
}
</script>
<style type="text/css">

div.fulltree
{
padding-left:1%;
padding-right:1%;
width:98%;
overflow:auto;
}

div.ms-crm-Form-Layout
{
position:relative;
min-height:300px;
}
</style>
</head>
<body style="overflow-x: hidden; overflow-y: auto; background-color: #EEF0F6">
<div class="ms-crm-Form-Layout">
<div id="taskBoxContainer" class="ResourcespecsEdit_TaskBox ms-crm-absolutePosition" runat="server">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div style="height: 100%; width: 100%">
<crm:TaskBox runat="server" id="crmTaskBox" />
</div>
</div>
</div>
<div id="treeContainer" class="ResourcespecsEdit_TreeCell ms-crm-absolutePosition" runat="server">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div style="height: 100%;overflow:hidden;">
<ui:FullTree runat="server" id="crmFullTree" oninitcomplete="loadTree" tabindex="0" />
</div>
</div>
</div>
</div>
</body>
</html>
