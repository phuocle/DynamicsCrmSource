<!DOCTYPE HTML>






<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Views.FormEditorPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript">

var _bSaving = false;

var _oActive;
var isMergeButtonClicked=false;
var _iTabs			= <%= totalTabs.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
var _entityId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(currentEntityId.ToString()) %>;
var _formXmlId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formXmlId.ToString()) %>;
Mscrm.FormEditorVariables.supportNotes		= '<%= supportNotes.ToString() %>';
Mscrm.FormEditorVariables.supportBingMaps	= '<%= supportBingMaps.ToString() %>';
Mscrm.FormEditorVariables.supportKMControl  = '<%= supportKMControl.ToString() %>';
Mscrm.FormEditorVariables.supportTimerControl	= '<%= supportTimerControl.ToString() %>';
Mscrm.FormEditorVariables.supportSocialInsights = '<%= supportSocialInsights.ToString() %>';
Mscrm.FormEditorVariables.supportACIControl	= '<%= supportACIControl.ToString() %>';
var _iNextTabId		= <%= totalTabs.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
var _objectTypeCode     =<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectCode) %>;
var _iMaxTabs		= 100;
var _sMode			= <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_mode.ToString()) %>;
var _bPreviewMode	= <%= _mode == Mode.Preview ? "true" : "false" %>;
var _entityFormtype = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formTypeName.ToString())  %>
var _isRefreshForm = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formPresentation) %>;
var _isFormMergeFcbEnabled = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(isFormMergeFcbEnabled) %>;
var newHeaderText = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(newHeaderCaption) %>;
var newFooterText = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(newFooterCaption) %>;
var invalidFormTypeSelectedText = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(invalidFormTypeSelectedCaption) %>;
var invalidFormPresentationSelectedText = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(invalidFormPresentationSelectedCaption) %>;
Mscrm.FormEditorVariables.webResourceRootUrl = '<%= (webResourceRootUrl)%>';
Mscrm.FormEditorVariables.canAssignRoles = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(canAssignRoles.ToString().ToLower()) %>;
Mscrm.FormEditorVariables.isCustomizabe = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(canCustomize.ToString().ToLower()) %>;
Mscrm.FormEditorVariables.canCreateForms = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(canCreateForms.ToString().ToLower()) %>;
Mscrm.FormEditorVariables.FormType = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formTypeName.ToString()) %>;
var _unNamedSections = 0;
var _unNamedTabs = 0;
var _draggedItem = null;
var _dropItem    = null;
Mscrm.FieldExplorerUtils.fieldExplorerCaption = '<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(fieldExplorerCaption).ToString() %>';
Mscrm.FieldExplorerUtils.relationshipExplorerCaption = '<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(relationshipExplorerCaption).ToString() %>';
Mscrm.FieldExplorerUtils.businessRulesExplorerCaption = '<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(businessRulesExplorerCaption).ToString() %>';
Mscrm.FormEditorVariables.currentFormId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formId.ToString("B")) %>;
Mscrm.FormEditorVariables.parentFormId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(parentFormId) %>;

Mscrm.FormEditorVariables.entityUnpublishedLabel = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(unpublishedEntityName) %>;
Mscrm.FormEditorVariables.entityLogicalName = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(unpublishedLogicalName) %>;
Mscrm.FormEditorVariables.iconPath = '<%= (entityIconPath) %>';
Mscrm.FormEditorVariables.defaultIconPath = '<% = (defaultEntityIconPath) %>';

var _previewer = null;
var _previewerRefresh = null;


var ROW_HEIGHT = "25";

var oFieldsXml;
var oFormXml;
var oPropertiesXml;


function hideProcessControl()
{
var processControlNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,"//control[@classid='{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}']",null);
if(!IsNull(processControlNode))
{
var rows = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,"//header/rows",null);
if(!IsNull(rows) && !IsNull(processControlNode.parentNode))
{
processControlRow = processControlNode.parentNode.parentNode;
rows.removeChild(processControlRow);
}
}
}

function loadXmls()
{
oFieldsXml = XUI.Xml.LoadXml(XUI.Html.GetText($get('preFieldsXml')));
oPropertiesXml = XUI.Xml.LoadXml(XUI.Html.GetText($get('prePropertiesXml')));
Mscrm.FormEditorVariables.formXml = XUI.Xml.LoadXml(XUI.Html.GetText($get('preFormXml')));
hideProcessControl();
}

function OnLoad()
{
attachWindowOnBeforeUnload(window_onbeforeunload);


if(!IsNull(window.top) && !IsNull(window.top.document))
window.top.document.title = window.document.title;
loadXmls();
Mscrm.FormEditorVariables.editorType = "formEditor";
RefreshFormEditor(Mscrm.Render.wholeCanvas);
Mscrm.TabUtils.clickFirstTab();
initializeExplorerFilters();

RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml,oPropertiesXml,oFieldsXml);

if(Mscrm.FormEditorVariables.isCustomizabe == 'true')
{
Mscrm.FormUtils.makeFormXmlDirty();
Mscrm.FormUndoRedo.initialize();
}
else
editorRootElement.disabled = true
Mscrm.TabUtils.enableDisableFormParts();

Mscrm.FormEditorVariables.addColumnsMessage = ADD_COL_MESSAGE;

_previewer = $get('Previewer');
_previewerRefresh = $get('PreviewerRefresh');




SetPreviewXml();
SetPreviewDefaultValues();
Mscrm.FormEditorVariables.initialFormXmlText = XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml);
var newFieldButton = $get('newField');
newFieldButton.title = LOCID_NEW_BUTTON_TOOL_TIP;
newFieldButton.style.width="auto";

var new1ToNRelationshipButton = $get('new1ToNRelationship');
new1ToNRelationshipButton.title = LOCID_NEW_1N_REL_TOOL_TIP;
new1ToNRelationshipButton.style.width="auto";
var newNToNRelationshipButton = $get('newNToNRelationship');
newNToNRelationshipButton.title = LOCID_NEW_NN_REL_TOOL_TIP;
newNToNRelationshipButton.style.width ="auto";

$addHandler(document, 'mouseup', OnDocumentMouseUp);
$addHandler(document, 'mousedown', OnDocumentMouseDown);
$addHandler(document, 'resize', AdjustNotificationOnFormEditor);

if(LOCID_UI_DIR == "RTL")
$get('fldExplorerImgContainer').setAttribute('align','left');
else
$get('fldExplorerImgContainer').setAttribute('align','right');


Mscrm.SectionUtils.showOrHideHeaderWarningMessage();

attachWindowOnUnload(OnPageUnload);


var notificationDiv = $get("crmNotifications");

if(!IsNull(isFormDeactivated) && isFormDeactivated === true)
{
notificationDiv.style.display = "block";
}
else
{
notificationDiv.style.display = "none";
}

AdjustNotificationOnFormEditor();
}


function CreateTab(rowNode,tabLabel)
{
var headerTab = Mscrm.FormEditorVariables.formXml.createElement("tab");
var headerLabels = Mscrm.FormEditorVariables.formXml.createElement("labels");
var headerLabel = Mscrm.FormEditorVariables.formXml.createElement("label");
var headerColumns = Mscrm.FormEditorVariables.formXml.createElement("columns");
var headerColumn = Mscrm.FormEditorVariables.formXml.createElement("column");
var headerSections = Mscrm.FormEditorVariables.formXml.createElement("sections");
var headerSection = Mscrm.FormEditorVariables.formXml.createElement("section");
headerTab.appendChild(headerLabels);
headerLabels.appendChild(headerLabel);
headerColumn.setAttribute("width","100%");
headerLabel.setAttribute("description",tabLabel);
headerLabel.setAttribute("languagecode",_langCode);
headerTab.setAttribute("id",createGuid());
headerSection.setAttribute("id",createGuid());
headerTab.appendChild(headerColumns);
headerColumns.appendChild(headerColumn);
headerColumn.appendChild(headerSections);
headerSections.appendChild(headerSection);
headerSection.appendChild(rowNode);
return headerTab;
}


function MergeEvents(selectedFormXml){
var eventsList = XUI.Xml.SelectNodes(selectedFormXml,'/entity/form/events/event',null);
var events = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/events", null);
if(IsNull(events) && eventsList.length!=0){
events = Mscrm.FormEditorVariables.formXml.createElement("events");
XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form",null).appendChild(events);
}
for(var i=0;i<eventsList.length;i++)
{

var eventName = eventsList[i].getAttribute("name");
var attributeName = eventsList[i].getAttribute("attribute");
var eventPath = "//events/event[@name='"+ eventName +"']";
if(!IsNull(attributeName))
{
var eventPath = "//events/event[@name='"+ eventName +"'][@attribute='"+ attributeName +"']";
}
var existingEvent = XUI.Xml.SelectSingleNode(events, eventPath, null);

if(IsNull(existingEvent))
{
events.appendChild(eventsList[i]);
}
else
{

AppendEventHandlersIfNotDuplicate(eventName, eventPath, "InternalHandlers", eventsList[i], existingEvent);


AppendEventHandlersIfNotDuplicate(eventName, eventPath, "Handlers", eventsList[i], existingEvent);
}
}
}


function AppendEventHandlersIfNotDuplicate(eventName, eventPath, handlerNode, event, existingEvent)
{
var handlersList = XUI.Xml.SelectNodes(event, eventPath + "/" + handlerNode + "/Handler", null);
var existingHandlers = XUI.Xml.SelectSingleNode(existingEvent, eventPath + "/" + handlerNode, null);

if(IsNull(existingHandlers) && handlersList.length != 0)
{
existingHandlers = Mscrm.FormEditorVariables.formXml.createElement(handlerNode);
XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, eventPath, null).appendChild(existingHandlers);
}
for(var j = 0; j < handlersList.length ; j++)
{

var functionName = handlersList[j].getAttribute("functionName");
var libraryName = handlersList[j].getAttribute("libraryName");
var existingEventHandler = XUI.Xml.SelectSingleNode(existingEvent, eventPath + "/" + handlerNode + "/Handler[@functionName='"+ functionName +"'][@libraryName='" + libraryName + "']", null);
if(IsNull(existingEventHandler))
{
existingHandlers.appendChild(handlersList[j]);
}
}
}


function CheckDuplicates(currentXmlResourceNode,selectedXmlResourceNode,attr){
var currentXmlResourceList = currentXmlResourceNode.childNodes;
var selectedXmlResourceList = selectedXmlResourceNode.childNodes;
var currentResourceCount = currentXmlResourceList.length;
for(var i=0;i<selectedXmlResourceList.length;i++){

if(selectedXmlResourceList[i].nodeType==3)
continue;
for(var j=0;j <currentResourceCount ;j++){
var a = selectedXmlResourceList[i].getAttribute(attr);
if(currentXmlResourceList[j].nodeType==3)
continue;
var b = currentXmlResourceList[j].getAttribute(attr);
if(a == b)
break;
}
if(j == currentResourceCount){
currentXmlResourceNode.appendChild(selectedXmlResourceList[i].cloneNode(true));
}
}
return currentXmlResourceNode;
}


function CreateResources(parent,child){
var parentNode = Mscrm.FormEditorVariables.formXml.createElement(parent);
var childNode = Mscrm.FormEditorVariables.formXml.createElement(child);
parentNode.appendChild(childNode);
return parentNode;
}


function MergeResources(selectedFormXml){

var currentXmlClientResources = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/clientresources",null);
var currentXmlInternalResources =  XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/clientresources/internalresources",null);


var selectedXmlClientIncludes = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/clientresources/internalresources/clientincludes", null);
var currentXmlClientIncludes = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/clientresources/internalresources/clientincludes", null);
if(!(IsNull(currentXmlClientIncludes) || IsNull(selectedXmlClientIncludes)))
currentXmlClientIncludes = CheckDuplicates(currentXmlClientIncludes,selectedXmlClientIncludes,'src');
else if(IsNull(currentXmlClientIncludes) && !IsNull(selectedXmlClientIncludes)){
if(IsNull(currentXmlClientResources))
{
var newClientIncludes = CreateResources('clientresources','internalresources');
newClientIncludes.childNodes[0].appendChild(selectedXmlClientIncludes);
XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form",null).appendChild(newClientIncludes);
}
else if(IsNull(currentXmlInternalResources))
{
var newInternalResourcesNode = Mscrm.FormEditorVariables.formXml.createElement('internalresources');
newInternalResourcesNode.appendChild(selectedXmlClientIncludes);
currentXmlClientResources.appendChild(newInternalResourcesNode);
}
else
currentXmlInternalResources.appendChild(selectedXmlClientIncludes);
}


var selectedXmlIsvClientIncludes = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/clientresources/isvresources/clientincludes", null)
var currentXmlIsvClientIncludes = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/clientresources/isvresources/clientincludes", null);
if(!(IsNull(currentXmlIsvClientIncludes) || IsNull(selectedXmlIsvClientIncludes)))
currentXmlIsvClientIncludes = CheckDuplicates(currentXmlIsvClientIncludes,selectedXmlIsvClientIncludes,'path');
else if(IsNull(currentXmlIsvClientIncludes) && !IsNull(selectedXmlIsvClientIncludes)){
if(IsNull(currentXmlClientResources))
{
var newIsvClientIncludes = CreateResources('clientresources','isvresources');
newIsvClientIncludes.childNodes[0].appendChild(selectedXmlIsvClientIncludes);
XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form",null).appendChild(newIsvClientIncludes);
}
else
currentXmlClientResources.appendChild(selectedXmlIsvClientIncludes.parentNode);
}


var selectedXmlClientVariables = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/clientresources/internalresources/clientvariables", null)
var currentXmlClientVariables = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/clientresources/internalresources/clientvariables", null);
if(!(IsNull(currentXmlClientVariables) || IsNull(selectedXmlClientVariables)))
currentXmlClientVariables = CheckDuplicates(currentXmlClientVariables,selectedXmlClientVariables,'name');
else if(IsNull(currentXmlClientVariables) && !IsNull(selectedXmlClientVariables)){
if(IsNull(currentXmlClientResources))
{
var newClientvariables = CreateResources('clientresources','internalresources');
newClientvariables.childNodes[0].appendChild(selectedXmlClientVariables);
XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form",null).appendChild(newClientvariables);
}
else if(IsNull(currentXmlInternalResources))
{
var newInternalResourcesNode = Mscrm.FormEditorVariables.formXml.createElement('internalresources');
newInternalResourcesNode.appendChild(selectedXmlClientVariables);
currentXmlClientResources.appendChild(newInternalResourcesNode);
}
else
currentXmlInternalResources.appendChild(selectedXmlClientVariables);
}


var selectedXmlFormLibraries = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/formLibraries", null)
var currentXmlFormLibraries = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/formLibraries", null);
if(!(IsNull(currentXmlFormLibraries) || IsNull(selectedXmlFormLibraries)))
currentXmlFormLibraries = CheckDuplicates(currentXmlFormLibraries,selectedXmlFormLibraries,'name');
else if(IsNull(currentXmlFormLibraries) && !IsNull(selectedXmlFormLibraries)){
XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form",null).appendChild(selectedXmlFormLibraries);
}
}



function EnableMergeButton() {
if (Mscrm.FormEditorVariables.FormType == 'main' && _isRefreshForm == '1' && _isFormMergeFcbEnabled=="True" && _isCustomEntity != "True")
return true;
return false;
}


function RetrieveForm(formId){
var command = new RemoteCommand("FormEditorWebService", "GetFormXml", null);
command.SetParameter("formId",formId);
var result = command.Execute(null);
return result;
}

function SetPreviewDefaultValues()
{
_previewer.fieldXml.setAttribute("defaultValue", _previewer.fieldXml.value);
_previewer.propertiesXml.setAttribute("defaultValue", _previewer.propertiesXml.value);
_previewer.formXml.setAttribute("defaultValue", _previewer.formXml.value);
}

function SetPreviewFieldDefaultValues()
{
_previewer.fieldXml.setAttribute("defaultValue", _previewer.fieldXml.value);
_previewer.propertiesXml.setAttribute("defaultValue", _previewer.propertiesXml.value);
}

function SetElementsPosition()
{
SetAttrExplorerePosition();
if(Mscrm.FormEditorVariables.FormType != 'quick' && Mscrm.FormEditorVariables.FormType != 'quickCreate')
{
SetNavigationBarPosition();
}
}

function SetAttrExplorerePosition()
{
var attrExpDivShow = $get('attrExpDivShow');
$get('fieldListDiv').style.top = (attrExpDivShow.offsetHeight + attrExpDivShow.offsetTop + 5) + "px";
}
function SetNavigationBarPosition()
{
var formSelectorDiv = $get('formSelectorDiv');
$get('formNavigationBarTD').style.top = (formSelectorDiv.offsetHeight + formSelectorDiv.offsetTop + 5) + "px";
}

function OnPageUnload()
{
$removeHandler(document, 'mouseup', OnDocumentMouseUp);
$removeHandler(document, 'mousedown', OnDocumentMouseDown);
$removeHandler(document, 'resize', AdjustNotificationOnFormEditor);
}

function window_onbeforeunload(oEvent)
{
if (!_bSaving)
{


if(!IsNull(_previewer))
{
SetPreviewXml();
if ((_previewer.fieldXml.getAttribute("defaultValue") != _previewer.fieldXml.value) || (_previewer.propertiesXml.getAttribute("defaultValue")!= _previewer.propertiesXml.value) || (_previewer.formXml.getAttribute("defaultValue") != _previewer.formXml.value))
{
oEvent.rawEvent.returnValue =  LOCID_FORMED_SAVECHANGES;
return LOCID_FORMED_SAVECHANGES;
}
}
}
}

function Preview(sTitle, sType)
{
var sTarget = "Preview" + sType;

var oWindowInfo = GetWindowInformation(Previewer.objectTypeCode.value);
var iX = oWindowInfo.Width;
var iY = oWindowInfo.Height;

var queryData = "";
var formPreviewer = null;

if ("True" == IsRefreshEnabled.value)
{
formPreviewer = _previewerRefresh;

queryData = "?etc=" + Previewer.objectTypeCode.value;
queryData += "&isPreview=" + true;
}
else
{
formPreviewer = _previewer;

_previewer.title.value = sTitle;
_previewer.previewType.value = sType;
}


formPreviewer.action = Mscrm.CrmUri.create(formPreviewer.action + queryData).toString();
formPreviewer.target = sTarget;

SetPreviewXml();

PostFormToNewWindow(formPreviewer, sTarget, iX, iY);
}

function PostFormToNewWindow(oForm, sTarget, iX, iY)
{
if (isOutlookHostedWindow())
{



var CrmUrlEncode = Mscrm.Utilities.isIE7() ? CrmEncodeDecode.CrmUrlEncodeIE7 : CrmEncodeDecode.CrmUrlEncode;

var postData = "formXml=" + CrmUrlEncode(oForm.formXml.value);
postData += "&previewFormId="+ CrmUrlEncode(oForm.previewFormId.value);

if ("True" != IsRefreshEnabled.value)
{
postData += "&title=" + CrmUrlEncode(oForm.title.value);
postData += "&previewType=" + CrmUrlEncode(oForm.previewType.value);
postData += "&objectTypeCode=" + CrmUrlEncode(oForm.objectTypeCode.value);
postData += "&fieldXml=" + CrmUrlEncode(oForm.fieldXml.value);
postData += "&propertiesXml=" + CrmUrlEncode(oForm.propertiesXml.value);
}

postData += "\n\n";

PostToNewWindow(oForm.action, sTarget, iX, iY, "status=1,resizable=1,scrollbars=0", postData);
}
else
{
openStdWin(Mscrm.CrmUri.create(""), sTarget, iX, iY, "status=1,resizable=1,scrollbars=0");
oForm.submit();
}
}

function SetPreviewXml()
{
_previewer.fieldXml.value = XUI.Xml.XMLSerializer.serializeToString(oFieldsXml);
_previewer.propertiesXml.value	= XUI.Xml.XMLSerializer.serializeToString(oPropertiesXml);


var previewXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml));


var cells = XUI.Xml.SelectNodes(previewXml, '/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell', null);
RemoveSpacerNodes(cells);


cells = XUI.Xml.SelectNodes(previewXml, '/entity/form/header/rows/row/cell', null);
RemoveSpacerNodes(cells);


cells = XUI.Xml.SelectNodes(previewXml, '/entity/form/footer/rows/row/cell', null);
RemoveSpacerNodes(cells);



cells = XUI.Xml.SelectNodes(previewXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[@auto='true']", null);
Mscrm.FieldPropertiesUtils.addHeightAttributeForAutoExpandingCells(cells,previewXml);

Mscrm.FormUtils.processFormXmlBeforePreview(previewXml);

oFormXml = XUI.Xml.XMLSerializer.serializeToString(previewXml);

_previewer.formXml.value = oFormXml;
_previewerRefresh.formXml.value = oFormXml;
_previewerRefresh.previewFormId.value = Mscrm.FormEditorVariables.currentFormId;
checkCardFormFieldsAndDisplayNotifaction(previewXml);
}

function RemoveSpacerNodes(cells)
{
for (var i = 0; i < cells.length; i++)
{
var controlNode = XUI.Xml.SelectSingleNode(cells[i], 'control', null);
if (XUI.Xml.GetText(controlNode.attributes.getNamedItem('id')).startsWith('spacer_'))
{
cells[i].removeChild(controlNode);
}
}
}

function checkCardFormFieldsAndDisplayNotifaction(formXml)
{
if ( Mscrm.FormEditorVariables.FormType != null && Mscrm.FormEditorVariables.FormType == "card")
{
var showWarning = false;
var numberOfFieldsAllowed = 4;
var numberOfColorStripFieldsAllowed = 1;
var xPath = "/entity/form/tabs/tab/columns/column/sections/section";

var sectionNodes = XUI.Xml.SelectNodes(formXml,xPath, null);
var isColorStrip = true;

for(var i=0;i<sectionNodes.length;i++)
{
var sectionNode = sectionNodes[i];

if (sectionNode.nodeType != XUI.Xml.DomUtils.NodeType.Element)
{
continue;
}

xPath = "rows/row/cell/control";
var controlNodes =  XUI.Xml.SelectNodes(sectionNodes[i], xPath, null);


if (isColorStrip)
{
if (controlNodes.length > numberOfColorStripFieldsAllowed)
{
showWarning = true;
}

isColorStrip = false;
}
else
{
if (controlNodes.length > numberOfFieldsAllowed)
{
var validAttributeCount = 0;

for(var j=0;j<controlNodes.length;j++)
{
var node = controlNodes[j];

if (node.attributes["classid"] !=  null)
{
validAttributeCount++;
}
}

if (validAttributeCount > numberOfFieldsAllowed)
{
showWarning = true;
}
}
}
}

var notificationDivForCardForm = $get("crmNotificationsForCardForm");

if (showWarning)
{
notificationDivForCardForm.style.display = "block";
}
else
{
notificationDivForCardForm.style.display = "none";
}

}
}

function Save(bClose)
{
if(Mscrm.FormUtils.isFormDirty() || bClose)
{
if (!_bSaving)
{
_bSaving = true;

if(bClose)
{
var cacheParams = {};
cacheParams["isCommand"] = true ;
cacheParams["eventCode"] = Mscrm.ScriptEvents.NavigateBackCheckpoint;

var parameters = {};
parameters["data"] = cacheParams ;

var retValues = Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.InsertCacheData,parameters);
var cmdId = retValues[0];
Submitter.crmCmdID.value = cmdId;
}

document.body.style.cursor = "wait";
Mscrm.FormNavigationUtils.processFormNavigationBeforePreview(Mscrm.FormEditorVariables.formXml);
Submitter.formXml.value		= XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml);
Submitter.close.value		= bClose;

Submitter.submit();

Mscrm.FormUndoRedo.dispose();

}
}
Mscrm.TabUtils.setTabStatesCookie();
}


function OnField(domEvent, node)
{
node.style.backgroundColor = "#c4ddff";
Mscrm.FieldExplorerUtils.saveFieldExplorerScrollPos();
if(node.getAttribute("type") == "cell")
{
RegisterDragObject(domEvent, "fromFieldExplorer");
}
else
{
RegisterDragObject(domEvent, "fromFieldExplorer");
}
}


function OffField(domEvent, node)
{
node.style.backgroundColor = "";
}


function on(o)
{
o.style.color = "#000000";
o.style.backgroundColor = "#E2E8F7";
}

function off(o)
{
o.style.color = "";
o.style.backgroundColor = "";
}

function hideAttrExp()
{
var attrExp = $get("attrExp");
attrExp.style.display = "none";

var hiddenAttExp = $get("hiddenAttrExpDiv");
hiddenAttExp.style.display = "inline";
if(LOCID_UI_DIR == "RTL")
{
$get('formDesigner').style.left= "45px";
}
else
{
$get('formDesigner').style.right= "45px";
}
}
function showAttrExp()
{
var attrExp = $get("attrExp");
attrExp.style.display = "inline";

var hiddenAttExp = $get("hiddenAttrExpDiv");
hiddenAttExp.style.display = "none";
if(LOCID_UI_DIR == "RTL")
{
$get('formDesigner').style.left= "235px";
}
else
{
$get('formDesigner').style.right= "235px";
}
}
window.onload = OnLoad;
</script>
<style type="text/css">

td.actions
{
background-color:	#ffffff;
border:				1px solid #889dc2;
padding:			10px;
vertical-align:		top;
filter:				progid:DXImageTransform.Microsoft.Gradient(GradientType=1, StartColorStr=#EAF1FF, EndColorStr=#ffffff);
}

</style>
<style type="text/css">
.fieldExpStyle
{
VERTICAL-ALIGN: bottom;
COLOR: #6699cc;
LINE-HEIGHT: 12px;
FONT-SIZE: 12px;
font-weight:bolder;
font-family:Tahoma;
}
td.field
{
overflow: hidden;
}
</style>
</head>
<body style="height:100%; min-width:440px">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<pre id="preFieldsXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_fieldXml.OuterXml) %></pre>
<pre id="prePropertiesXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_propertiesXml.OuterXml) %></pre>
<pre id="preFormXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_formXmlXDoc.ToString()) %></pre>
<input name="IsRefreshEnabled"	type="hidden" runat="server" id="IsRefreshEnabled">
<form id="Previewer" name="Previewer" action="/Tools/FormEditor/preview.aspx" method="post">
<input name="title"				type="hidden">
<input name="previewType"		type="hidden">
<input name="objectTypeCode"	type="hidden" runat="server" id="PreviewFormOtc">
<input name="fieldXml"			type="hidden">
<input name="propertiesXml"		type="hidden">
<input name="formXml"			type="hidden">
</form>
<form id="PreviewerRefresh" name="PreviewerRefresh" action="/_forms/read/page.aspx" method="post">
<input name="formXml"			type="hidden">
<input name="previewFormId"			type="hidden" />
</form>
<form id="Submitter" name="Submitter" action="formeditor.aspx?pagemode=iframe" method="post">
<input name="formId"			type="hidden" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(formId.ToString("B")) %>">
<input name="organizationId"	type="hidden" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Util.GuidToString(CurrentUser.OrganizationId)) %>">
<input name="formXml"			type="hidden" value="">
<input name="objectTypeCode"	type="hidden" runat="server" id="SubmitterFormOtc">
<input name="close"				type="hidden" value="false">
<input name="crmCmdID"			type="hidden" value="">
<% =CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/FormEditor/formeditor.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</form>
<div id="editorRootElement" style="position: fixed; height:100%; right:0px; left:0px;">
<div id="Notifications">
<div id="crmNotifications"  class="Notifications Notifications-strict " style="position:static;left:0px;right:0px;width:100%;display:none;border-bottom-style:solid;border-color:#c5c5c5;border-width:1px;border-top-style:none;">
<div role="alert" aria-live="polite" class="Notification">
<table cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td valign="top">
<img alt="" src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-Lookup-Item ms-crm-ImageStrip-notif_icn_warn16">
</td>
<td>
<span>
<loc:text resourceid="FormEditor_Deactivate_Notification" runat="server" />
</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div id="crmNotificationsForHeader"  class="Notifications Notifications-strict " style="position:static;left:0px;right:0px;width:100%;display:none;border-bottom-style:solid;border-color:#c5c5c5;border-width:1px;border-top-style:none;">
<div role="alert" aria-live="polite" class="Notification">
<table cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td valign="top">
<img alt="" src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-Lookup-Item ms-crm-ImageStrip-notif_icn_warn16">
</td>
<td>
<span>
<loc:text resourceid="FormEditor_HeaderWarning_Notification" runat="server" />
</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div id="crmNotificationsForCardForm"  class="Notifications Notifications-strict " style="position:static;left:0px;right:0px;width:100%;display:none;border-bottom-style:solid;border-color:#c5c5c5;border-width:1px;border-top-style:none;">
<div role="alert" aria-live="polite" class="Notification">
<table cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td valign="top">
<img alt="" src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-Lookup-Item ms-crm-ImageStrip-notif_icn_warn16">
</td>
<td>
<span>
<loc:text resourceid="FormEditor_CardFormWarning_Notification" runat="server" />
</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div id="formDesigner" class="Form-Designer ms-crm-NoUserSelect">
</div>
<div id='attrExp' class="ms-crm-NoUserSelect AttributeExplorer" >
<div id="attrExpDiv" style="position: absolute; bottom: 40px; top: 0px;width:100%;">
<div id="attrExpDivShow" style="width: 100%;">
<table id="shownAttrExp" width="100%" height="100%" class="shown-field-explorer">
<tbody>
<tr >
<td  width ="100%" height="40px">
<table width ="100%" height="20px" style="table-layout:fixed;">
<col width="80%"/><col width="20%"/>
<tbody>
<tr>
<td>
<a class="ms-crm-Menu-Label" ><SPAN id="expandedExplorer"" class="ms-crm-MenuItem-TextRTL" style="font-size:12px;font-weight:bold"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(fieldExplorerCaption) %></SPAN></a>
</td>
<td id="fldExplorerImgContainer">
<a class="ms-crm-Menu-Label" onclick="hideAttrExp()" ><IMG id='shownExplorerImage' class="Field-Explorer" alt="" src="/_imgs/Tools/ico_form_assistexpanded.png" /></a>
</td>
</tr>
</tbody>
</table>
<hr />
</td>
</tr>
<tr>
<td>
<table width="100%" height="100%" style="table-layout:fixed;border-bottom-style:solid;border-color:#a5acb5;border-width:1px;">
<col width="10%"/><col width="15%"/><col width="75%"/>
<tr>
<td colspan="2"><b>
<label for="txtDescription"><loc:Text ResourceId="Form_Editor_Filter_Caption" runat="server"/></label>
</b>
</td>
<td id="fieldFilterTD">
</td>
<td id="relationshipFilterTD" style="display:none">
</tr>
<tr>
<td><ui:CheckBox id="unusedFilter" onclick="Mscrm.FieldExplorerUtils.handlerFilterCheckBoxClick();" TabIndex="10" runat="server"/></td>
<td colspan="2">
<span id="unusedFieldLabelText" style="display:none;"><loc:Text ResourceId="Formeditor_FieldExplorer_CheckBox_Text" runat="server"/></span>
<span id="unusedRelationshipLabelText" style="display:none;"><loc:Text ResourceId="Formeditor_RelationshipExplorer_CheckBox_Text" runat="server"/></span>
<span id="fieldExplorerImageAltText" style="display:none;"><loc:Text ResourceId="Formeditor_FieldExplorer_Image_AltText" runat="server"/></span>
<span id="relationshipExplorerImageAltText" style="display:none;"><loc:Text ResourceId="Formeditor_RelationshipExplorer_Image_AltText" runat="server"/></span>
<label for="unusedFilter" id="unusedFilterLabel"><loc:Text ResourceId="Formeditor_FieldExplorer_CheckBox_Text" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<div class="list-container" id="fieldListDiv" style="position:absolute; bottom:0px; width: 230px;">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<ul   id='FieldList' class="field-explorer-list">
</ul>
</div>
</div>
</div>

<div style="position:absolute; height:40px; bottom:0px;width:100%;">
<table width="100%" height="100%" style="padding-left: 5px;table-layout:fixed;">
<col width="2%"/><col /><col /><col width="2%"/>
<tr>
<td />
<td id="newFieldTD" width="100%" >
<ui:Button id="newField" tabindex="10" onclick="if(Mscrm.FormEditorVariables.isCustomizabe == 'true'){AddAttribute();}" ResourceId="Create_New_Field_Caption" runat="server"/></ui:Button>
</td>
<td id="new1ToNRelationshipTD" width="48%" style="display:none" >
<ui:Button id="new1ToNRelationship" tabindex="10" onclick="Mscrm.RelatioShipExplorerUtils.createNewRelationship(Mscrm.Utilities.eventToDomEvent(event), 'referenced');" ResourceId="Create_New_One_To_Many_Relationship_Caption" runat="server"/></ui:Button>
</td>
<td id="newNToNRelationshipTD" width="48%" style="display:none">
<ui:Button id="newNToNRelationship" tabindex="10" onclick="Mscrm.RelatioShipExplorerUtils.createNewRelationship(Mscrm.Utilities.eventToDomEvent(event), 'many');" ResourceId="Create_New_Many_To_Many_Relationship_Caption" runat="server"/></ui:Button>
</td>
<td id="newBusinessRuleTD" style="display:none">
<ui:Button id="newBusinessRule" tabindex="10" onclick="Mscrm.BusinessRulesExplorer.openBusinessRuleEditorForCreate(0);" ResourceId="Create_New_Business_Rule_Caption" runat="server"/></ui:Button>
</td>
<td />
</tr>
</table>
</div>
</div>
<div id="hiddenAttrExpDiv" class="HiddenAttributeExplorer">
<table id="hiddenAttrExp" width="100%" height="100%" class="hidden-field-explorer" onclick ="showAttrExp()" >
<tbody>
<tr height="20px">
<td>
<center style=" width:100%"><IMG id='hiddenExplorerImage' class="Field-Explorer" alt="" src="/_imgs/Tools/ico_form_assistcollapsed.png" /></center>
</td>
</tr>
<tr id="hiddenAttrExpTR">
<td id="hiddenAttrExpTD" class="fieldExpStyle">
<label id="collapsedExplorer" class="AttrExp-stripLeftRight"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(fieldExplorerCaption) %></label>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</body>
</html>