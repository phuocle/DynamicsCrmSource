




<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Grids.ExportDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Title_MultiPage_ExportXL" runat="server"/></title>

<script language="JavaScript" type="text/javascript">


var RESULT_CANCEL = -1;
var RESULT_BACK = -2;
var RESULT_CURRENTPAGE = 0;
var RESULT_ALLPAGES = 1;
var RESULT_LIVELIST = 2;
var RESULT_LIVEPIVOT = 3;
var RESULT_CURRENTPAGE_EXCEL = 4;
var RESULT_ALLPAGES_EXCEL = 5;

var _sEntityName;
var _oFetchXml;
var _oLayoutXml;
var _oEntitiesXml;
var _oFieldXml;
var _oPropertiesXml;
var _oGridControl;
var _bUseSqlQueryForLiveExport;
var _nextResourceId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(nextResourceId) %>;
var _exportResourceId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(exportResourceId) %>;

Sys.Application.add_load(windowOnLoad);
function windowOnLoad( )
{
setUI();


var oArgs = getDialogArguments();
_oGridControl = oArgs.gridControl;

<% if (enableLive) { %>
_bUseSqlQueryForLiveExport = Mscrm.Utilities.parseBoolean($get("useSqlQuery").getAttribute("value"));


if (_bUseSqlQueryForLiveExport) {


_oFetchXml = XUI.Xml.LoadXml(oArgs.effectiveFetchXml);
}
else if (!IsNull(oArgs.fetchXml)) {



_oFetchXml = XUI.Xml.LoadXml(oArgs.fetchXml);
}
else {


_oFetchXml = XUI.Xml.LoadXml($get("fetchXml").getAttribute('value'));
}

_oLayoutXml = XUI.Xml.LoadXml(oArgs.layoutXml);



var bEditableColumns = !isNullOrEmptyString(XUI.Xml.XMLSerializer.serializeToString(_oFetchXml));
if (bEditableColumns) {

var oEntityNode = XUI.Xml.SelectSingleNode(_oFetchXml, "/fetch/entity/@name", null);
_sEntityName = oEntityNode.value;


loadFieldAndPropertiesXml();

var oLayoutFields = XUI.Xml.SelectNodes(_oLayoutXml, "/grid/row/cell", null);
var iLen = oLayoutFields.length;
var sFieldName;
var oGridField;
for (var i=0; i<iLen; i++)
{
sFieldName = oLayoutFields[i].getAttribute("name");
oGridField = XUI.Xml.SelectSingleNode(_oFieldXml, "/entities/entity/fields/field[@name = '" + CrmEncodeDecode.CrmXmlEncode(sFieldName) + "']", null);
if (IsNull(oGridField))
{



var bIsValidRelatedAttribute = false ;
var aData = sFieldName.split(".");
if ( !IsNull(aData) && aData.length == 2 )
{
var sRelationshipDescription = aData[0] ;
var sAttribute = aData[1];

var linkEntity = XUI.Xml.SelectSingleNode(_oFetchXml, "/fetch/entity/link-entity[@alias = '" + sRelationshipDescription  + "']/attribute[@name= '" + sAttribute + "']", null);
if (!IsNull(linkEntity))
{
bIsValidRelatedAttribute = true ;
}
}


if (!bIsValidRelatedAttribute)
{
break;
}

}
}
}
<% } %>
}

function Result (iResult, bReimport, bUseSqlQuery, sFetchXml, sLayoutXml)
{
this.result = iResult;
this.reimport = bReimport;

if (sFetchXml)
{
this.useSqlQuery = bUseSqlQuery;
this.fetchXml = sFetchXml;
this.layoutXml = sLayoutXml;
}
}

function Ok(e)
{
if (e != null)
{
e = new Sys.UI.DomEvent(e);
}
if ($get("printCurrent") && $get("printCurrent").checked)
{
<% if ( ExportToExcelEnabled ) { %>
window.returnValue = new Result(RESULT_CURRENTPAGE_EXCEL, false);
<% } else { %>
window.returnValue = new Result(RESULT_CURRENTPAGE, $get("chkReimport") ? $get("chkReimport").checked : false);
<% } %>
}
else if ($get("printAll") && $get("printAll").checked)
{
<% if ( ExportToExcelEnabled ) { %>
window.returnValue = new Result(RESULT_ALLPAGES_EXCEL, false);
<% } else { %>
window.returnValue = new Result(RESULT_ALLPAGES, $get("chkReimport") ? $get("chkReimport").checked : false);
<% } %>
}
else if ($get("exportLiveList").checked)
{
window.returnValue = new Result(RESULT_LIVELIST, false, _bUseSqlQueryForLiveExport, XUI.Xml.XMLSerializer.serializeToString(_oFetchXml), XUI.Xml.XMLSerializer.serializeToString(_oLayoutXml));
}
else if ($get("exportLivePivot").checked)
{
window.returnValue = new Result(RESULT_LIVEPIVOT, false, _bUseSqlQueryForLiveExport, XUI.Xml.XMLSerializer.serializeToString(_oFetchXml), XUI.Xml.XMLSerializer.serializeToString(_oLayoutXml));
}

<% if (IsV5OutlookClient) {%>


Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create('/_static/_common/scripts/ribbonactions.js'), true);
Mscrm.ExportGridToExcel.performExcelExport(window.returnValue, _oGridControl, 'exportFrame');
var exportFrame = $get('exportFrame');
$addHandler(exportFrame, "readystatechange", OnIframeReady);
<%} else {%>
Mscrm.Utilities.setReturnValue(window.returnValue);
closeWindow();
<%} %>

if (e != null) {
e.preventDefault();
}
}

<% if (IsV5OutlookClient) {%>
function OnIframeReady()
{
var exportFrame = $get('exportFrame');
if(exportFrame.readyState == 'interactive')
closeWindow();
}
<%} %>

function Close(e)
{
window.returnValue = new Result(RESULT_CANCEL);
closeWindow();
e.preventDefault();
}

function setUI()
{
var bStatic = ($get("printCurrent") && $get("printCurrent").checked)
|| ($get("printAll") && $get("printAll").checked);
var bLiveList = ($get("exportLiveList") && $get("exportLiveList").checked);
var bLivePivot = ($get("exportLivePivot") && $get("exportLivePivot").checked);
var bStaticMultiPage = ($get("printAll") && $get("printAll").checked);

var okButton = $get("dialogOkButton");

if ($get("trReimport"))
{
if(!bStatic && $get("chkReimport"))
{
$get("chkReimport").checked = false;
}

<% if (!enableReimport) {%>
$get("trReimport").disabled = true;
$get("chkReimport").disabled = true;
$get("updateViaImportNotification").style.display = "block";
<%} else { %>
if(!bStatic == true)
{
$get("trReimport").style.color = "#B1B1B1";
}
else
{
$get("trReimport").style.color ="";
}
$get("trReimport").disabled = !bStatic;
$get("chkReimport").disabled = !bStatic;
$get("updateViaImportNotification").style.display = $get("chkReimport").checked ? "block" : "none";
<% } %>
}

<% if ( ExportToExcelEnabled ) { %>

if ( $get("updateViaImportNotification") && $get("updateViaImportNotification").hasChildNodes() )
$get("updateViaImportNotification").style.display = "block";
<% } %>

var invokeFunction;
if (bStatic)
{
if(document.all)
{
okButton.innerText = _exportResourceId;
}
else
{
okButton.textContent = _exportResourceId;
}
invokeFunction = Ok;
}
else
{
if(document.all)
{
okButton.innerText = _nextResourceId;
}
else
{
okButton.textContent = _nextResourceId;
}
if (bLivePivot) {
invokeFunction = selectColumns;
}
if (bLiveList) {
invokeFunction = editColumns;
}
}
okButton.onclick = invokeFunction;


if (bStatic && !bStaticMultiPage)
{

if (pageRecordCountExceedsLimit == "1")
{
$get("maxWarningNotifications").style.display = "block";
}
else
{
$get("maxWarningNotifications").style.display = "none";
}
}
else
{

if (totalRecordCountExceedsLimit == "1")
{
$get("maxWarningNotifications").style.display = "block";
}
else
{
$get("maxWarningNotifications").style.display = "none";
}
}

<% if (!enableLive) { %>
$get("exportLivePivot").disabled = true;
$get("lblExportLiveList").disabled = true;
$get("lblExportLiveList").style.color="gray";
$get("lblExportLivePivot").disabled = true;
$get("lblExportLivePivot").style.color ="gray";
$get("exportLiveList").disabled = true;
<% } %>

}

<% if (enableLive) { %>


function editColumns(e)
{
var oArgs = new Object();
oArgs.FetchXml	= XUI.Xml.XMLSerializer.serializeToString(_oFetchXml);
oArgs.LayoutXml = XUI.Xml.XMLSerializer.serializeToString(_oLayoutXml);

var oURL = Mscrm.CrmUri.create("/AdvancedFind/dialogs/dlg_editview.aspx?EntityName=" + CrmEncodeDecode.CrmUrlEncode(_sEntityName) + "&FromExportExcel=1");
var crmDialog = new Mscrm.CrmDialog(oURL, oArgs, 800, 450, null);
crmDialog.setCallbackInfo("performActionAfterEditColumns", window , null);
crmDialog.show();
}

function performActionAfterEditColumns(oResult)
{
if (IsNull(oResult) || (oResult.Action == RESULT_CANCEL))
{
closeWindow();
}
else if (oResult.Action == RESULT_BACK)
{
return;
}
else
{
if(oResult.IsDirty)
{

_oLayoutXml = XUI.Xml.LoadXml(oResult.LayoutXml);
_oFetchXml = XUI.Xml.LoadXml(oResult.FetchXml);
Ok(null);
}
}
}


function loadFieldAndPropertiesXml()
{
var oCommand = new RemoteCommand("View", "GetFieldAndPropertiesXml");
oCommand.SetParameter("otc", OBJECT_TYPE_CODE);
oCommand.SetParameter("fetchXml", XUI.Xml.XMLSerializer.serializeToString(_oFetchXml));
var oResult = oCommand.Execute();

if (oResult.Success)
{
var oResultXml = XUI.Xml.LoadXml(oResult.ReturnValue);
_oPropertiesXml = XUI.Xml.LoadXml(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oResultXml, "/fieldpropertiesxml/propertiesxml", null)));
_oFieldXml = XUI.Xml.LoadXml(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oResultXml, "/fieldpropertiesxml/fieldxml", null)));
}
}


function loadEntitiesXml()
{
var oCommand = new RemoteCommand("View", "GetEntitiesXml");
oCommand.SetParameter("otc", OBJECT_TYPE_CODE);
oCommand.SetParameter("fetchXml", XUI.Xml.XMLSerializer.serializeToString(_oFetchXml));
var oResult = oCommand.Execute();

if (oResult.Success)
{
_oEntitiesXml = XUI.Xml.LoadXml(oResult.ReturnValue);
}
}


function selectColumns(e)
{

if (IsNull(_oEntitiesXml))
{
loadEntitiesXml();
}


var oArgs = new Object();
oArgs.PrimaryEntityName			= _sEntityName;
oArgs.EntitiesXml			= _oEntitiesXml;
oArgs.FieldsXml				= _oFieldXml;
oArgs.FieldPropertiesXml		= _oPropertiesXml;
oArgs.FetchXml				= _oFetchXml;
oArgs.GridXml				= _oLayoutXml;
oArgs.ShowRelatedEntities		= true;
var oURL = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx?mode=exportselectcol");

var crmDialog = new Mscrm.CrmDialog(oURL, oArgs, 570, 450, null);
crmDialog.setCallbackInfo("performActionAfterSelectColumns", window , null);
crmDialog.show();
}

function performActionAfterSelectColumns(oResult)
{
if (IsNull(oResult) || (oResult.Action == RESULT_CANCEL))
{
closeWindow();
}
else if (oResult.Action == RESULT_BACK)
{
return;
}
else
{

_oLayoutXml = XUI.Xml.LoadXml(oResult.GridXml);
_oFetchXml = XUI.Xml.LoadXml(oResult.FetchXml);
Ok(null);
}
}

function findFieldObjByName (oFieldObjs, sName)
{
for (var i=0; i<oFieldObjs.length; i++)
{
if (oFieldObjs[i].FieldName == sName)
{
return oFieldObjs[i];
}
}
return null;
}

<% } %>

</script>
<style type="text/css">
input.radioButton
{
border:0px;
width:20px;
cursor:pointer;
}

.ms-crm-export-fixlayout
{
position:absolute;
width:100%;
top:0px;
}

.ms-crm-export-dialog-border
{
position:absolute;
width:100%;
border-top-color: #a4abb2;
border-top-width: 1px;
bottom:52px;
}

#crmDialogFooter .ms-crm-Button
{
background-color: white;
}

#cmdDialogCancel
{
margin-right: 20px;
margin-left: 8px;
}

.ms-crm-export-outerdiv
{
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
width:100%;
height:100%;
}
</style>
</head>
<body>
<div id="divParameters" style="display:none" runat="server"></div>
<form name="crmDialog" style="height:100%">
<div class="ms-crm-export-outerdiv">
<div class="ms-crm-RefreshDialog-Header">
<a href="#" class="ms-crm-RefreshDialog-FirstTopButton" id="btnCross" tabindex="1"><img src="/_imgs/CloseDialog.png" style="height:16px;width:16px;" onclick="Close(new Sys.UI.DomEvent(event));"/></a>
<div class="ms-crm-RefreshDialog-Header-Title"><loc:Text ResourceId="Title_MultiPage_ExportXL" runat="server"/></div>
<div class="ms-crm-RefreshDialog-Header-Desc"><loc:Text ResourceId="Header_ExportXL" runat="server"/></div>
</div>
<div style="vertical-align:middle; margin-left:25px; margin-right:25px;" class="ms-crm-RefreshDialog-Main">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; position:absolute;">
<col width="20"/>
<col width="100%"/>
<col width="170"/>
<tr>
<td colspan="3">
<b><loc:Text ResourceId="Instructions_ExportXL" runat="server"/></b>
</td>
</tr>
<tr>
<td colspan="3">
<cnt:AppNotifications id="Notifications" runat="server"/>
</td>
</tr>
<tr>
<td colspan="3">
<cnt:AppNotifications id="maxWarningNotifications" runat="server"/>
</td>
</tr>

<% if (showStatic) { %>
<tr style="vertical-align: middle">
<td><input type="radio" name="exportType" id="printCurrent" tabindex="1" class="radioButton" checked="checked" onclick="setUI()"></td>
<td colspan="2"><label for="printCurrent" style="cursor:pointer;"><loc:Text ResourceId="Ribbon.HomepageGrid.Data.Export.StaticExcelExport" runat="server"/></label></td>
</tr>
<% if ( showReimport && !ExportToExcelEnabled) { %>


<tr style="vertical-align: middle">
<td colspan="3"><table width="90%">
<colgroup><col width="10%"><col width="90%"></colgroup>
<tr id="trReimport" disabled="true">
<td align="right"><input type="checkbox" id="chkReimport" tabindex="1" class="checkbox" onclick="setUI();"/></td>
<td><label for="chkReimport" style="cursor:pointer;"><loc:Text ResourceId="Label_PrintDlg_ExportForReimport" runat="server"/></label></td>
</tr>
</table></td>
</tr>
<% } %>
<% if ( showMultiplePage ) { %>

<tr style="vertical-align: middle">
<td><input type="radio" name="exportType" id="printAll" tabindex="1" class="radioButton" onclick="setUI()"></td>
<td colspan="2"><label for="printAll" style="cursor:pointer;"><loc:Text ResourceId="Ribbon.HomepageGrid.Data.Export.StaticExcelExportAll" runat="server"/></label></td>
</tr>
<% } %>
<% } %>
<tr id="trExportLivePivot" style="vertical-align: middle" <% if (!enableLive) {%> disabled="true"<%}%> >
<td><input type="radio" name="exportType" id="exportLivePivot" tabindex="1" onclick="setUI()" class="radioButton"></td>
<td>
<label for="exportLivePivot" id="lblExportLivePivot" style="cursor:pointer;"><loc:Text ResourceId="Label_PrintDlg_LivePivot" runat="server"/>
</label>
</td>
</tr>
<tr id="trExportLiveList" style="vertical-align: middle"<% if (!enableLive) {%> disabled="true"<%}%>>
<td><input type="radio" name="exportType" id="exportLiveList" tabindex="1" onclick="setUI()" class="radioButton"></td>
<td>
<label for="exportLiveList" id="lblExportLiveList" style="cursor:pointer;"><loc:Text ResourceId="Label_PrintDlg_LiveList" runat="server"/>
</label>
</td>
</tr>
</table>
</div>
<% if (( showStatic && showReimport ) || ExportToExcelEnabled ) { %>
<div>
<table cellpadding="0" cellspacing="5" class="ms-crm-export-dialog-border" style="table-layout: fixed">
<col width="20">
<col width="100%">
<tr>
<td colspan="2">
<cnt:AppNotifications id="updateViaImportNotification" AutoRegisterClientComponent="false" runat="server"/>
<script language="javascript">crmCreate(Mscrm.NotificationList, {}, null, null, $get('updateViaImportNotification'));</script>
</td>
</tr>
</table>
</div>
<% } %>
<div id="crmDialogFooter" class="ms-crm-RefreshDialog-Footer">
<div class="ms-crm-RefreshDialog-Buttons ms-crm-Bottom-Border">
<ui:Button ID="dialogOkButton" tabindex="1" CssClass="ms-crm-RefreshDialog-Button" OnClick="Ok(new Sys.UI.DomEvent(event));" ResourceId="Button_ExportXL" runat=server></ui:Button>
<ui:Button ID="cmdDialogCancel" tabindex="1" CssClass="ms-crm-RefreshDialog-Button" OnClick="Close(new Sys.UI.DomEvent(event));" ResourceId="C5C18B6A-47D1-4176-BD01-CD39ACF15234" runat="server"></ui:Button>
</div>
</div>
</div>
</form>
<% if (IsV5OutlookClient) {%>
<iframe id="exportFrame" name="exportFrame" title="" style="display:none" src="/_static/blank.htm"/>
<%} %>
</body>
</html>
