<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.WebResourceAttributeDependency" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title)%></title>
<script type="text/javascript" language="JavaScript">
window.parent.IS_ESCAPE_KEY_HANDLED = true;
var _objectTypeCode = "-1";
var parameterEditValues_listEditComponent;
var _maxWidthBehavior;
var _chkEnableImage;
var _selectedEntity;
var _dependencyXml;

function OnLoad() {

var oArgs = getDialogArguments();
_dependencyXml = oArgs["dependencyXml"];


_iFieldSelectWidth		= 165;
_iFieldSelectHeight		= 235;
_sFieldSelectLeftTitle	= LOCID_AVAILABLE_FIELDS;
_sFieldSelectRightTitle	= LOCID_DEPENDENT_FIELDS;
_bFieldSelectShowUp		= false;
_bFieldSelectShowDown	= false;
_selectedEntity = $get("PrimaryEntity").value;

var attributes = window.SelectedAttributeMetadata.split("\n");
DrawFieldSelectControl(attributes);
$addHandler(document, 'keydown', handleEscKey);
}


function handleEscKey(e) {
if(e.keyCode == 27)
{
cancel();
}
}

function DrawFieldSelectControl(attributes)
{
var sFieldsAry = new Array();
sFieldsAry[0] = new Array();
sFieldsAry[1] = new Array();
var i = 0, iLen = 0;

var sDependsAry = new Array();
sDependsAry[0] = new Array();
sDependsAry[1] = new Array();

for (var index in attributes)
{
var attributeId = attributes[index].split(":")[1];
var attributeName = attributes[index].split(":")[0];
var attrNodeIfPresent = XUI.Xml.SelectSingleNode(_dependencyXml,"/Dependencies/Dependency[@componentType='Attribute']/Attribute[@attributeId='" + attributeId + "']",null);
if (!IsNull(attrNodeIfPresent))
{
sDependsAry[0][iLen] = attributeId;
sDependsAry[1][iLen++] = attributeName;
}

sFieldsAry[0][i] = attributeId;
sFieldsAry[1][i++] = attributeName;
}

drawFieldSelect(sFieldsAry, sDependsAry);
}

function OnChangePrimaryEntity(){
var confirmed = confirm(LOCID_SELECTION_CLEAR_PROMPT);
if (confirmed)
{
_selectedEntity = $get("PrimaryEntity").value;
var metadataCommand = new RemoteCommand("FormEditorWebService", "GetEntityMetadata");
metadataCommand.SetParameter("entityName", $get("PrimaryEntity").value);
metadataCommand.Execute(callback);
}
else
{

var primaryEntity = $get("PrimaryEntity")
for (var i = 0; i < primaryEntity.options.length; i++)
{
var val = primaryEntity.options[i].value;
if (val.toUpperCase() === _selectedEntity.toUpperCase())
{
primaryEntity.options[i].selected = true;
break;
}
}
}
}

function callback(oResult)
{
var returnValue = oResult.ReturnValue;
DrawFieldSelectControl(returnValue.split("\n"));
}

function applychanges()
{
OkForDesktop();
}

function OkForDesktop() {

var sDependsAry	= new Array();
sDependsAry = GetReturnList();

var sDependsNameAry = new Array();
sDependsNameAry = GetReturnListOfNames();

var returnValue = {};

returnValue["attributes"] = [sDependsAry, sDependsNameAry];
returnValue["entity"] = $get("PrimaryEntity").value;

Mscrm.Utilities.setReturnValue(returnValue);
cancel();
}

function cancel()
{
var ButtonNode = window.parent.frames['contentIFrame0'].contentDocument;
if(ButtonNode == null)
{
ButtonNode = window.parent.frames['contentIFrame0'].document;
}
if (ButtonNode != null && ButtonNode.getElementById("attributeMenuBar") != null) {
if (ButtonNode.getElementById("attributeMenuBar").querySelector('a.ms-crm-Menu-Label') != null) {
ButtonNode.getElementById("attributeMenuBar").querySelector('a.ms-crm-Menu-Label').focus();
}
}
closeWindow();
}

Sys.Application.add_load(OnLoad);
</script>
<style>
div.ms-crm-Tab
{
width:auto;
height:auto;
}
.ms-crm-TabContainer
{
top:30px;
bottom:0px;
left:0px;
right:0px;
}

td.ms-crm-Picklist-Values
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
text-align: right !important;
<% } else { %>
text-align: left !important;
<% } %>
}
</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" style="height:100%">
<div style="width:100%;height:100%;position:relative">
<div  style="position:absolute;top:0px;left:0px;right:0px;bottom:42px;overflow-y:auto;">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div style="width:100%;height:100%;position:relative;min-width:400px">
<div style="vertical-align:top">
<div id="tab3" style="overflow-y:auto" runat="server">
<label for="PrimaryEntity">
<nobr style="width: 90%; text-overflow: ellipsis;">
<loc:Text ResourceId="Web.SFA.Workflow.WorkflowTemplate.WorkflowEntity" runat="server" />
</nobr>
</label>
<ui:select id="PrimaryEntity" name="PrimaryEntity" OnChange="OnChangePrimaryEntity();" runat="server" />
<span>&nbsp;</span>
<div id="divFieldSelect" width="100%">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
