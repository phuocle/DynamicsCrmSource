<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.MobileOfflineProfileRuleFilters"  %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
DIV.ms-crm-RefreshDialog-Main
{
top: 85px;
}
DIV.ms-crm-AdvFindControl
{
margin: 30px 0px 0px 0px;
}

SPAN.ms-crm-AdvFind-Detailed
{
width:150%;
}

DIV.ms-crm-AdvFind-Filter
{
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
width: 100%;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
border-right: 0px solid #A6BADA;
<% } else { %>
border-left: 0px solid #A6BADA;
<% } %>
}
DIV.ms-crm-AdvFind-EmptyField
{
width: 100%;
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-bottom: 1px solid #A6BADA;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
border-right: 0px solid #A6BADA;
<% } else { %>
border-left: 0px solid #A6BADA;
<% } %>
}
</style>
<script language="Javascript">
Sys.Application.add_load(SetFiltersPageOnLoad);
var _maxFilterCondition = <%= MAX_CONDITIONS_FOR_MOBILEOFFLINE_FILTERS_VALUE %>;
var _recommendedFilterConditions = <%= RECOMMENDED_CONDITIONS_FOR_MOBILEOFFLINE_FILTERS_VALUE %>;


function populateOpNames() {
var oaOpNames = [];
oaOpNames["eq"] = LOCID_AF_EQUALS;
oaOpNames["ne"] = LOCID_AF_DOESNOTEQUAL;
oaOpNames["contains"] = LOCID_AF_CONTAINS;
oaOpNames["doesnotcontain"] = LOCID_AF_DOESNOTCONTAIN;
oaOpNames["not-null"] = LOCID_AF_CONTAINSDATA;
oaOpNames["null"] = LOCID_AF_DOESNOTCONTAINDATA;
oaOpNames["gt"] = LOCID_AF_ISGREATERTHAN;
oaOpNames["ge"] = LOCID_AF_ISGREATERTHANOREQUALTO;
oaOpNames["lt"] = LOCID_AF_ISLESSTHAN;
oaOpNames["le"] = LOCID_AF_ISLESSTHANOREQUALTO;
oaOpNames["on"] = LOCID_AF_ON;
oaOpNames["on-or-after"] = LOCID_AF_ONORAFTER;
oaOpNames["on-or-before"] = LOCID_AF_ONORBEFORE;
oaOpNames["today"] = LOCID_AF_TODAY;
oaOpNames["tomorrow"] = LOCID_AF_TOMORROW;
oaOpNames["anytime"] = LOCID_AF_ANYTIME;
oaOpNames["next-seven-days"] = LOCID_AF_INTHENEXT7DAYS;
oaOpNames["last-seven-days"] = LOCID_AF_INTHELAST7DAYS;
oaOpNames["next-week"] = LOCID_AF_NEXTWEEK;
oaOpNames["last-week"] = LOCID_AF_LASTWEEK;
oaOpNames["this-week"] = LOCID_AF_THISWEEK;
oaOpNames["next-month"] = LOCID_AF_NEXTMONTH;
oaOpNames["last-month"] = LOCID_AF_LASTMONTH;
oaOpNames["this-month"] = LOCID_AF_THISMONTH;
oaOpNames["next-year"] = LOCID_AF_NEXTYEAR;
oaOpNames["last-year"] = LOCID_AF_LASTYEAR;
oaOpNames["this-year"] = LOCID_AF_THISYEAR;
oaOpNames["next-x-days"] = LOCID_AF_NEXTXDAYS;
oaOpNames["last-x-days"] = LOCID_AF_LASTXDAYS;
oaOpNames["last-x-weeks"] = LOCID_AF_LASTXWEEKS;
oaOpNames["next-x-weeks"] = LOCID_AF_NEXTXWEEKS;
oaOpNames["last-x-months"] = LOCID_AF_LASTXMONTHS;
oaOpNames["next-x-months"] = LOCID_AF_NEXTXMONTHS;
oaOpNames["last-x-years"] = LOCID_AF_LASTXYEARS;
oaOpNames["next-x-years"] = LOCID_AF_NEXTXYEARS;
oaOpNames["eq-userid"] = LOCID_AF_EQUALSCURRENTUSER;
oaOpNames["ne-userid"] = LOCID_AF_DOESNOTEQUALCURRENTUSER;
oaOpNames["eq-userteams"] = LOCID_AF_EQUALSCURRENTUSERTEAMS;
oaOpNames["eq-useroruserteams"] = LOCID_AF_EQUALSCURRUSERORTEAMS;
oaOpNames["yesterday"] = LOCID_AF_YESTERDAY;
return oaOpNames;
}


function createOpCtrl(aoOpNames, sOpList) {
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


function overrideOpAdvFind(clientCache) {
var oaOpNames = populateOpNames();
var oaOperator = [];
oaOperator["number"] = createOpCtrl(oaOpNames, "eq;ne;gt;ge;lt;le;not-null;null");
oaOperator["string"] = createOpCtrl(oaOpNames, "eq;ne;contains;doesnotcontain;not-null;null");
oaOperator["date"] = createOpCtrl(oaOpNames, "on;on-or-after;on-or-before;yesterday;today;tomorrow;next-seven-days;last-seven-days;next-week;last-week;this-week;next-month;last-month;this-month;next-year;last-year;this-year;last-x-days;next-x-days;last-x-weeks;next-x-weeks;last-x-months;next-x-months;last-x-years;next-x-years;anytime");
oaOperator["dateonly"] = createOpCtrl(oaOpNames, "on;on-or-after;on-or-before;yesterday;today;tomorrow;next-seven-days;last-seven-days;next-week;last-week;this-week;next-month;last-month;this-month;next-year;last-year;this-year;last-x-days;next-x-days;last-x-weeks;next-x-weeks;last-x-months;next-x-months;last-x-years;next-x-years;anytime");
oaOperator["picklist"] = createOpCtrl(oaOpNames, "eq;ne;not-null;null");
oaOperator["picklistwithname"] = createOpCtrl(oaOpNames, "eq;ne;not-null;null");
oaOperator["owner"] = createOpCtrl(oaOpNames, "eq-userid;ne-userid;eq-userteams;eq-useroruserteams;eq;ne");
oaOperator["ownerwithname"] = createOpCtrl(oaOpNames, "eq-userid;ne-userid;eq-userteams;eq-useroruserteams;eq;ne");
for (var dataType in oaOperator) {
clientCache.PutElement("Operator", dataType, oaOperator[dataType]);
}
}


function overrideFieldList(clientCache, entityname) {
var datatype;
if (Boolean.parse('<%= GetSlidingWindowFCBValue %>'))
{

datatype = ["nvarchar", "picklist", "int", "state", "status", "datetime", "date", "owner", "ownerwithname"];
}
else if(Boolean.parse('<%= IsProfileItemAssociationPage  %>'))
{

datatype = ["nvarchar", "picklist", "int", "state", "status"];
}
else
{

datatype = ["nvarchar", "picklist", "int", "state", "status", "owner", "ownerwithname"];
}
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


if (!IsNull(fieldListElement) && !IsNull(filterRowElements)) {
if (filterRowElements.length > _recommendedFilterConditions + 1) {
showFilterConditionCountWarning(true);
}
else {
showFilterConditionCountWarning(false);
}
}
}

function disableAdvFindCondition() {
var fieldListElement = $find("advFindE_fieldList");
var advFindE = $find("advFindE");
var filterRowElements = null;
if (!IsNull(advFindE)) {
filterRowElements = advFindE._element.getElementsByTagName("crm:filterfield");
}


if (!IsNull(fieldListElement) && !IsNull(filterRowElements)) {
if (filterRowElements.length > _recommendedFilterConditions) {
showFilterConditionCountWarning(true);
}
else {
showFilterConditionCountWarning(false);
}
}

if (!IsNull(fieldListElement) && !IsNull(filterRowElements)
&& (filterRowElements.length >= _maxFilterCondition || filterRowElements.length > _recommendedFilterConditions)) {
if (filterRowElements.length >= _maxFilterCondition)
{
fieldListElement.set_visible(false);
}
for (i = 0; i < filterRowElements.length; i++) {
filterRowElements[i].removeEventListener = enableAdvFindCondition;
}
}
}


function showFilterConditionCountWarning(showWarning)
{
var notifCtrl = $find("filterNotifications");
if (showWarning && !notifCtrl.get_visible())
{
var notification = notifCtrl.CreateNotification("NotifyFilterConditionCount", 2, "Server", NOTIFICATION_TEXT);
var notifArr = new Array(notification);
notifCtrl.SetNotifications(notifArr, "Server");
}
notifCtrl.set_visible(showWarning);
}

function SetFiltersPageOnLoad() {
var oArgs = getDialogArguments();
var advFind = $find("advFind");


var clientCache = advFind.get_clientCache();
if (!IsNull(clientCache)) {
overrideFieldList(clientCache, advFind.get_entityName());
overrideOpAdvFind(clientCache);
advFind.StartNew();
}


var fieldListElement = $find("advFindE_fieldList");
if (!IsNull(fieldListElement)){
fieldListElement.add_onChange(disableAdvFindCondition);
}


if (!isNullOrEmptyString(oArgs.sFilterXml)) {
advFind.ResetControl();
advFind.set_fetchXml(oArgs.sFilterXml);
disableAdvFindCondition();
}
}

function applychanges() {
var advFind = $find("advFind");
var sFilterXml = advFind.get_fetchXml();

if (IsNull(sFilterXml)) { return; }

Mscrm.Utilities.setReturnValue(sFilterXml);
closeWindow();
}

function cancel() {
closeWindow();
}
</script>
</head>

<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
<div>
<cnt:AppNotifications id="filterNotifications" runat="server"/>
</div>
<cnt:AppAdvancedFind id="advFind" SaveChangesAlert=false runat="Server"/>
</frm:DialogForm>
</body>
</html>