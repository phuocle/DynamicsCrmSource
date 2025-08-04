<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.SwitchScenario" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript"  language="javascript">

var _boAnySettingChanged = false;
var _sAction = "SwitchRole";
var _aOriginalRoles = new Array();
var sScenarios;


var scenario = {
None: 0,
Sales: 1,
Service: 2,
FieldService: 3,
ProjectService: 4,
AdministeringCRM : 5
}

$addHandler(window, 'load', PageLoad);

function PageLoad()
{
if(rdSales.checked == true)
{
_aOriginalRoles.push(scenario.Sales);
}

if (rdService.checked == true) {
_aOriginalRoles.push(scenario.Service);
}

if (rdBoth.checked == true) {
_aOriginalRoles.push(scenario.AdministeringCRM);
}

if (rdFieldService.checked == true) {
_aOriginalRoles.push(scenario.FieldService);
}

if (rdProjectService.checked == true) {
_aOriginalRoles.push(scenario.ProjectService);
}


if (! <%:FieldServiceLocalesToEnableUI.ToString().ToLower() %>) {
document.getElementById("FSTile").style.display = "none";
}

if ( ! <%:ProjectServiceLocalesToEnableUI.ToString().ToLower() %>) {
document.getElementById("PSTile").style.display = "none";
}


var obutBegin = document.getElementById("butBegin");
obutBegin.disabled = true;
}

function applychanges()
{

sScenarios = "<scenarios>";
var scenariosToAdd = "";
var scenariosToRemove = "";


if ($get("rdSales").checked && _aOriginalRoles.indexOf(scenario.Sales) == -1)
{
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>"+ scenario.Sales+"</scenario>";
}

if ($get("rdService").checked && _aOriginalRoles.indexOf(scenario.Service) == -1)
{
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>"+ scenario.Service+"</scenario>";
}

if ($get("rdBoth").checked && _aOriginalRoles.indexOf(scenario.Both) == -1)
{
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>"+ scenario.AdministeringCRM+"</scenario>";
}

if ($get("rdFieldService").checked && _aOriginalRoles.indexOf(scenario.FieldService) == -1) {
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>" + scenario.FieldService + "</scenario>";
}

if ($get("rdProjectService").checked && _aOriginalRoles.indexOf(scenario.ProjectService) == -1) {
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>" + scenario.ProjectService + "</scenario>";
}

if (false == _boAnySettingChanged)
{
closeWindow();
return;
}

sScenarios += "<add>" + scenariosToAdd + "</add>";

for(index = 0; index < _aOriginalRoles.length; ++index)
{
scenariosToRemove += "<scenario>"+_aOriginalRoles[index]+"</scenario>";
}

sScenarios += "<remove>" + scenariosToRemove + "</remove>";

sScenarios += "</scenarios>";

if (sScenarios == "<scenarios></scenarios>")
{
return;
}

__dialogXml = sScenarios;

var obutBegin = document.getElementById("butBegin");
obutBegin.disabled = true;
PrepUI();
window.setTimeout(performSwitchRoleAction, 100);
}

function performSwitchRoleAction(){

var xmlhttp = new XMLHttpRequest();
var oDoc = XUI.Xml.LoadXml(sScenarios);
var submitUrl = Mscrm.CrmUri.create("/Tools/Trial/SwitchScenario.aspx" );

var boSuccess = true;
var _isAsynch = isAsynchOperation();
xmlhttp.open("POST", submitUrl.toString(), _isAsynch);
Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
SetTokenInHeader(xmlhttp, submitUrl);

boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, oDoc);

if(boSuccess)
{
var oResult = xmlhttp.responseText;
Mscrm.Utilities.setReturnValue(oResult.toLowerCase());
window.top.location.reload();
closeWindow();
}
}

function PrepUI() {
var oWarning = document.getElementById("divWarning");
oWarning.style.display = "none";
if (_renderFillBar) {
var oHeader = document.getElementById("tdDialogHeader");
var oFooter = document.getElementById("tdDialogFooter");
var oFillBar = document.getElementById("divFillBg");
var oStatus = document.getElementById("divStatus");
var oFill = document.getElementById("divFill");

var nHeaderHeight = (oHeader == null) ? 0 : parseInt(oHeader.scrollHeight, 10);
var nFooterHeight = (oFooter == null) ? 0 : parseInt(oFooter.scrollHeight, 10);
var nFillBarHeight = (oFillBar == null) ? 0 : parseInt(oFillBar.style.height, 10);
var nDialogHeight = window.document.body.clientHeight;


var nVerticalPosition = ((nDialogHeight - (nHeaderHeight + nFooterHeight)) / 2) + nHeaderHeight - (nFillBarHeight / 2);
_nFillBarWidth = window.document.body.clientWidth - 70;

oFillBar.style.display = "inline";
oStatus.style.display = "inline";
oFill.style.display = "inline";

var initialFillPosition = _nFillBarWidth * 3 / 4;
_iStep = _nFillBarWidth / 4;


SetFillBarDimensions(oFillBar, nVerticalPosition, _nFillBarWidth);
SetFillBarDimensions(oFill, nVerticalPosition, initialFillPosition);
SetFillBarDimensions(oStatus, nVerticalPosition, _nFillBarWidth);
SetFillBarDimensions(XUI.Html.DomUtils.GetFirstChild(oStatus), 0, _nFillBarWidth);
}
}


function cancel() {
closeWindow();
}

function EnableConfirm() {
var obutBegin = document.getElementById("butBegin");
obutBegin.disabled = false;
}

function clearOtherCheckboxes(e) {
var selected = e;
if (e.tagName === "DIV") {
selected = e.childNodes[1];
}
var checkboxes = document.querySelectorAll('input[type=checkbox]');
for (var i = 0; i < checkboxes.length; i++) {
if (checkboxes[i] == selected) {
checkboxes[i].checked = true;
}
else {
checkboxes[i].checked = false;
}
};
EnableConfirm();
}

</script>

<style type="text/css">

.ms-crm-RefreshDialog-Header {
padding-top: 0px;
}

#btnCross {
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left: 16px;
<% } else { %>
right: 16px;
<% } %>
top: 16px;
}

#dialogHeaderTitle {
margin: 20px 20px 0px 20px;
font-size: 20px;
color: #006CCB;
font-weight:normal;
font-family: "Segoe UI", "SegoeUI-Regular-final", Segoe, Tahoma, Helvetica, Arial, sans-serif;
}


.ms-crm-RefreshDialog-Header-Desc {
padding-top: 5px;
font-size: 15px;
font-weight: lighter;
font-family: "Segoe UI", "SegoeUI-Regular-final", Segoe, Tahoma, Helvetica, Arial, sans-serif;
overflow-y: auto;
margin-left: 20px;
margin-right: 20px;
}

#btnCross {
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left: 16px;
<% } else { %>
right: 16px;
<% } %>
top: 16px;
}

.ms-crm-RefreshDialog-Button
{
font-family: "Segoe UI", "SegoeUI-Regular-final", Segoe, Tahoma, Helvetica, Arial, sans-serif;
font-size:20px;
background-color: #002050;
color:white;
font-weight:normal;
padding: 17px 20px 20px 20px;
height: 50px;
width: 150px !important;
}

.ms-crm-RefreshDialog-Button:Enabled:Hover
{
border-color: #006CCB;
background-color:#4c60c0;
}

.ms-crm-RefreshDialog-Main {
margin-top: 10px;
overflow: visible;
top: 80px;
}

.ms-crm-Input-Container {
overflow: hidden;
}

.ms-crm-RefreshDialog-Footer {
height: auto;
background-color: transparent;
display: flex;
margin: 16px 0px 15px 12px;
}
#divWarning {
top: 0px;
}

.ms-crm-RefreshDialog-Warning {
right: 20px;
left: 20px;
}

#loadingContainer {
height: 100%;
width: 100%;
position: relative;
background-color: white;
opacity: 0.9;
}

#loadingContainer td {
vertical-align: middle;
text-align: center;
}

.ms-crm-SwitchRoleDescription
{
height:auto;
font-size: 15px;
margin-top: 20px;
font-weight: 400;
font-family: "Segoe UI", "SegoeUI-Regular-final", Segoe, Tahoma, Helvetica, Arial, sans-serif;
color: #666666;
width: 464px;
}

.radioLabel,
.radioLabelBoth {
cursor: default;
font-size: 20px;
font-weight: 400;
font-family: "Segoe UI", "SegoeUI-Regular-final", Segoe, Tahoma, Helvetica, Arial, sans-serif;
color: #FFFFFF;
line-height: 18px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left: 34px;
<% } else { %>
margin-right: 34px;
<% } %>
}

.radioLabelBoth {
color:#000000;
}
#rdBoth {
border: 1px solid black;
}
input[type=checkbox]{
width:18px;
height: 18px;
position: absolute;
top: 0px;
margin-top: 12px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left: 0px;
margin-left: 16px;
<% } else { %>
right: 0px;
margin-right: 16px;
<% } %>
}

.tilecontentcontainer {
display: flex;
position: relative;
width: 104px;
height: 108px;
padding: 12px 16px 16px 16px;
}

#SalesTile {
background-color: #001CA5;
float: left;
}
#SalesTile:hover {
background-color: #000460;
}
#ServiceTile {
background-color: #006FC8;
float: left;
}
#ServiceTile:hover {
background-color: #063D81;
}
#FSTile {
background-color: #00863D;
float: left;
}
#FSTile:hover {
background-color: #0F4E1D;
}
#PSTile {
background-color: #5C2D91;
float: left;
}
#PSTile:hover {
background-color: #340C61;
}
#AllTile {
background-color: #FFC000;
float: left;
}
#AllTile:hover {
background-color: #FFDC70;
}
.tileIcon {
position: absolute;
bottom: 0px;
margin: 16px;
height: 20px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
}

</style>

</head>

<body>
<frm:DialogForm id="crmForm" runat="server">

<table width="auto" cellspacing="2" cellpadding="0" class="ms-crm-List-Header">
<tr>
<td>
<div class="tilecontentcontainer" onclick="clearOtherCheckboxes(this)" id="SalesTile">
<input type="checkbox" id="rdSales"  name="rdScenario" runat="server" onclick="clearOtherCheckboxes(this)" />
<label class="radioLabel" for="rdSales">
<loc:Text ResourceId="Dialog_SwitchRole_Scenario_Sales" runat="server" />
</label>
<img src="/_imgs/Tools/Sales.png" class="tileIcon" runat="server" />
</div>
</td>

<td>
<div class="tilecontentcontainer" onclick="clearOtherCheckboxes(this)" id="ServiceTile">
<input type="checkbox" id="rdService" name="rdScenario" runat="server" onclick="clearOtherCheckboxes(this)" />
<label class="radioLabel" for="rdService">
<loc:Text ResourceId="Dialog_SwitchRole_Scenario_Service" runat="server" />
</label>
<img src="/_imgs/Tools/Service.png" class="tileIcon" runat="server" />
</div>
</td>

<td>
<div class="tilecontentcontainer" onclick="clearOtherCheckboxes(this)"  id="FSTile">
<input type="checkbox" id="rdFieldService" name="rdScenario" runat="server" onClick="clearOtherCheckboxes(this)" />
<label class="radioLabel" for="rdFieldService">
<loc:Text ResourceId="Dialog_SwitchRole_Scenario_FieldService" runat="server" />
</label>
<img src="/_imgs/Tools/FieldService.png" class="tileIcon" runat="server" />
</div>
</td>

<td>
<div class="tilecontentcontainer" onclick="clearOtherCheckboxes(this)"  id="PSTile">
<input type="checkbox" id="rdProjectService" name="rdScenario" runat="server" onClick="clearOtherCheckboxes(this)" />
<label class="radioLabel" for="rdProjectService">
<loc:Text ResourceId="Dialog_SwitchRole_Scenario_ProjectService" runat="server" />
</label>
<img src="/_imgs/Tools/ProjectService.png" class="tileIcon" runat="server" />
</div>
</td>

<td>
<div class="tilecontentcontainer" onclick="clearOtherCheckboxes(this)" id="AllTile">
<input type="checkbox" id="rdBoth" name="rdScenario" runat="server" onClick="clearOtherCheckboxes(this)" />
<label class="radioLabelBoth" for="rdBoth">
<loc:Text ResourceId="Dialog_SwitchRole_Scenario_Both" runat="server" />
</label>
<img src="/_imgs/Tools/AdministeringCRM.png" class="tileIcon" runat="server" />
</div>
</td>
</tr>

</table>

<div class="ms-crm-SwitchRoleDescription">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription)%>
</div>

</frm:DialogForm>
</body>
</html>