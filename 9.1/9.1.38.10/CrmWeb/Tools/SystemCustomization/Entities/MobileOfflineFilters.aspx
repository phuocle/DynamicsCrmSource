<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Entities.MobileOfflineFilters"  %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">

DIV.ms-crm-AdvFind-Filter
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-right: 0px solid #A6BADA;
width: 100%;
<% } else { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-left: 0px solid #A6BADA;
width: 100%;
<% } %>
}
DIV.ms-crm-AdvFind-EmptyField
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-bottom: 1px solid #A6BADA;
border-right: 0px solid #A6BADA;
width: 100%;
<% } else { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-bottom: 1px solid #A6BADA;
border-left: 0px solid #A6BADA;
width: 100%;
<% } %>
}
<% if( parentFormObjectTypeCode == Microsoft.Crm.Util.MobileOfflineProfileItem ) {%>
DIV.ms-crm-AdvFind-AutoShowControl,
DIV.ms-crm-AdvFind-EmptyField,
SPAN.ms-crm-AdvFind-FieldMenu,
SPAN.ms-crm-AdvFind-SelectedFieldMenu
{
visibility: hidden !important;
display: none !important;
}
DIV.ms-crm-AdvFind-AutoShowLabel
{
display: block !important;
}
<% } %>
</style>
<script language="Javascript">
Sys.Application.add_load(SetFiltersPageOnLoad);
var _maxFilterCondition = <%= MaxConditionsForMobileOfflineFiltersValue %>;


function _populateOpNames() {
var oaOpNames = [];
oaOpNames["eq"] = LOCID_AF_EQUALS;
oaOpNames["ne"] = LOCID_AF_DOESNOTEQUAL;
oaOpNames["contains"] = LOCID_AF_CONTAINS;
oaOpNames["doesnotcontain"] = LOCID_AF_DOESNOTCONTAIN;
oaOpNames["contain-values"] = LOCID_AF_CONTAINVALUES;
oaOpNames["not-contain-values"] = LOCID_AF_DOESNOTCONTAINVALUES;
oaOpNames["not-null"] = LOCID_AF_CONTAINSDATA;
oaOpNames["null"] = LOCID_AF_DOESNOTCONTAINDATA;
oaOpNames["gt"] = LOCID_AF_ISGREATERTHAN;
oaOpNames["ge"] = LOCID_AF_ISGREATERTHANOREQUALTO;
oaOpNames["lt"] = LOCID_AF_ISLESSTHAN;
oaOpNames["le"] = LOCID_AF_ISLESSTHANOREQUALTO;
oaOpNames["in"] = LOCID_AF_IN;
oaOpNames["notin"] = LOCID_AF_NOTIN;
oaOpNames["on"] = LOCID_AF_ON;
oaOpNames["on-or-after"] = LOCID_AF_ONORAFTER;
oaOpNames["last-x-days"] = LOCID_AF_LASTXDAYS;
return oaOpNames;
}


function _createOpCtrl(aoOpNames, sOpList) {
var aoOpList = sOpList.split(";");
var oSelCtrl = new Select();
var iLen = aoOpList.length;
var sExp = "";
for (var i = 0; i < iLen; i++) {
aoOpList[i] = Trim(aoOpList[i]);

switch (aoOpList[i]) {
case "contains":
sExp = "fetchOp=\"like\" fetchVal=\"%{0}%\"";
break;
case "doesnotcontain":
sExp = "fetchOp=\"not-like\" fetchVal=\"%{0}%\"";
break;
}
oSelCtrl.AddOption(aoOpNames[aoOpList[i]], aoOpList[i], sExp);
}


oSelCtrl.Render();
return oSelCtrl;
}


function _overrideOpAdvFind(clientCache) {
var oaOpNames = _populateOpNames();
var _oaOperator = [];
_oaOperator["number"] = _createOpCtrl(oaOpNames, "eq;ne;gt;ge;lt;le;not-null;null");
_oaOperator["string"] = _createOpCtrl(oaOpNames, "eq;ne;contains;doesnotcontain;not-null;null");
_oaOperator["date"] = _createOpCtrl(oaOpNames, "on;on-or-after;last-x-days");
_oaOperator["dateonly"] = _createOpCtrl(oaOpNames, "on;on-or-after;last-x-days");
_oaOperator["picklist"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null");
_oaOperator["picklistwithname"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null");
_oaOperator["multiselectpicklist"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null;contain-values;not-contain-values");
_oaOperator["multiselectpicklistwithname"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null;contain-values;not-contain-values");
for (var dataType in _oaOperator) {
clientCache.PutElement("Operator", dataType, _oaOperator[dataType]);
}
}


function _overrideFieldList(clientCache, entityname) {
var datatype = ["nvarchar", "picklist", "int", "state", "status", "datetime", "date"];
var innerValidXml = "";
var fieldList = clientCache.GetElement("Field", entityname, null);
var fieldXml = "<optgroup>" + fieldList + "</optgroup>";
var xmlDoc = XUI.Xml.LoadXml(fieldXml);
var xmlDocOptGrpElement = xmlDoc.getElementsByTagName("optgroup")[0];
var xmlDocElements = xmlDoc.getElementsByTagName("option");
for (var i = 0; i < xmlDocElements.length; i++) {
xmlDocElement = xmlDocElements[i];
if (datatype.indexOf(xmlDocElement.getAttribute("datatype")) != -1) {
innerValidXml += XUI.Xml.XMLSerializer.serializeToString(xmlDocElement)
}
}
clientCache.PutElement("Field", entityname, innerValidXml);
}

function enableAdvFindCondition() {
var fieldListElement = $find("advFindE_fieldList");
var advFindE = $find("advFindE");
var filterRowElements = null;
if (!IsNull(advFindE)) {
filterRowElements = advFindE._element.getElementsByTagName("crm:filterfield");
}
if (!IsNull(fieldListElement) && !IsNull(filterRowElements) && filterRowElements.length <= _maxFilterCondition) {
fieldListElement.set_visible(true);
}
}

function disableAdvFindCondition() {
var fieldListElement = $find("advFindE_fieldList");
var advFindE = $find("advFindE");
var filterRowElements = null;
if (!IsNull(advFindE)) {
filterRowElements = advFindE._element.getElementsByTagName("crm:filterfield");
}
if (!IsNull(fieldListElement) && !IsNull(filterRowElements) && filterRowElements.length >= _maxFilterCondition) {
fieldListElement.set_visible(false);
for (i = 0; i < filterRowElements.length; i++) {
filterRowElements[i].removeEventListener = enableAdvFindCondition;
}
}
}

function SetFiltersPageOnLoad() {
var oArgs = getDialogArguments();
var advFind = $find("advFind");

<% if (parentFormObjectTypeCode == Microsoft.Crm.Util.MobileOfflineProfileItem) {%>

oArgs.sFetchXml = <%= fetchXml %>;
<% }%>


var clientCache = advFind.get_clientCache();
if (!IsNull(clientCache)) {
_overrideFieldList(clientCache, advFind.get_entityName());
_overrideOpAdvFind(clientCache);
advFind.StartNew();
}


var advFindElement = $find("advFindE");
if(!IsNull(advFindElement)){
var filterEntites = advFindElement._element.getElementsByTagName("crm:filterentity");

for (index = filterEntites.length - 1; index >= 0; index--) {
filterEntites[index].parentNode.removeChild(filterEntites[index]);
}
}
advFind.set_fetchXml("<fetch/>");


var fieldListElement = $find("advFindE_fieldList");
if (!IsNull(fieldListElement)){
fieldListElement.add_onChange(disableAdvFindCondition);
}


if (!isNullOrEmptyString(oArgs.sFetchXml)) {
advFind.ResetControl();
advFind.set_fetchXml(oArgs.sFetchXml);
disableAdvFindCondition();
}
}

function applychanges() {
var advFind = $find("advFind");
var sFetchXml = advFind.get_fetchXml();

if (IsNull(sFetchXml)) { return; }

var oReturn = new Object();

oReturn.sFetchXml = sFetchXml;
oReturn.bIsDirty = advFind.get_isDirty();
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
}

function cancel() {
closeWindow();
}
</script>
</head>

<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
<cnt:AppAdvancedFind id="advFind" SaveChangesAlert=false runat="Server"/>
</frm:DialogForm>
</body>
</html>