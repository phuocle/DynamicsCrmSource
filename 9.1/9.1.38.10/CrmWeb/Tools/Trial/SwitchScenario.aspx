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
AdministeringCRM : 5,
DeveloperEdition : 6,
SMBSales : 7,
SMBMarketing : 8
}

$addHandler(window, 'load', PageLoad);

function PageLoad()
{
if(SalesImg.style.display === "")
{
_aOriginalRoles.push(scenario.Sales);
}

if (ServiceImg.style.display === "") {
_aOriginalRoles.push(scenario.Service);
}

if (AdministeringCRMImg.style.display === "") {
_aOriginalRoles.push(scenario.AdministeringCRM);
}

if (FieldServiceImg.style.display === "") {
_aOriginalRoles.push(scenario.FieldService);
}

if (ProjectServiceImg.style.display === "") {
_aOriginalRoles.push(scenario.ProjectService);
}

if (SmbSalesImg.style.display === "") {
_aOriginalRoles.push(scenario.SMBSales);
}

if (SmbMarketingImg.style.display === "") {
_aOriginalRoles.push(scenario.SMBMarketing);
}


if (! <%:FieldServiceLocalesToEnableUI.ToString().ToLower() %>) {
document.getElementById("FieldService").style.display = "none";
}

if ( ! <%:ProjectServiceLocalesToEnableUI.ToString().ToLower() %>) {
document.getElementById("ProjectService").style.display = "none";
}

var obutBegin = document.getElementById("butBegin");
obutBegin.disabled = true;

resizeDialog();
}

function resizeDialog()
{
var fixedHeight = 450;
var switchScenarioContainerDiv;
switchScenarioContainerDiv = parent.document.getElementById("InlineDialog");
if (switchScenarioContainerDiv){
switchScenarioContainerDiv.style.height = fixedHeight + "px";
var viewPortHeight = window.top.document.body.clientHeight;
var remainingHeight = viewPortHeight - fixedHeight;
var topInPercent = remainingHeight / 2 / viewPortHeight * 100;
topInPercent = Math.max(topInPercent, 2.5);
switchScenarioContainerDiv.style.top = topInPercent + "%";
}
}

function applychanges()
{

sScenarios = "<scenarios>";
var scenariosToAdd = "";
var scenariosToRemove = "";


if ($get("SalesImg").style.display === "" && _aOriginalRoles.indexOf(scenario.Sales) == -1)
{
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>"+ scenario.Sales+"</scenario>";
}

if ($get("ServiceImg").style.display === "" && _aOriginalRoles.indexOf(scenario.Service) == -1)
{
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>"+ scenario.Service+"</scenario>";
}

if ($get("AdministeringCRMImg").style.display === "" && _aOriginalRoles.indexOf(scenario.Both) == -1)
{
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>"+ scenario.AdministeringCRM+"</scenario>";
}

if ($get("FieldServiceImg").style.display === "" && _aOriginalRoles.indexOf(scenario.FieldService) == -1) {
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>" + scenario.FieldService + "</scenario>";
}

if ($get("ProjectServiceImg").style.display === ""  && _aOriginalRoles.indexOf(scenario.ProjectService) == -1) {
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>" + scenario.ProjectService + "</scenario>";
}

if ($get("SmbSalesImg").style.display === "" && _aOriginalRoles.indexOf(scenario.SMBSales) == -1) {
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>" + scenario.SMBSales + "</scenario>";
}

if ($get("SmbMarketingImg").style.display === "" && _aOriginalRoles.indexOf(scenario.SMBMarketing) == -1) {
_boAnySettingChanged = true;
scenariosToAdd += "<scenario>" + scenario.SMBMarketing + "</scenario>";
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

function setRole(tile) {
var role = tile.id;
var tileContainers = document.querySelectorAll('.tileContainer');
for (var i = 0; i < tileContainers.length; i++) {
if (tileContainers[i] == tile ) {

tileContainers[i].childNodes[1].style.display = "";

if (tile.id !== "AdministeringCRM"){
tileContainers[i].style.backgroundColor = "#00B7C3";
}
else{

tileContainers[i].childNodes[3].style.display = "none";
}
}
else {
tileContainers[i].style.backgroundColor = "";

tileContainers[i].childNodes[1].style.display = "none";
if (tileContainers[i].id === "AdministeringCRM"){
tileContainers[i].childNodes[3].style.display = "";
}
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
color: #002050 !important;
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
overflow: hidden;
}

#btnCross {
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left: 16px;
<% } else { %>
right: 16px;
<% } %>
top: 16px;
}

#butBegin,
.ms-crm-RefreshDialog-Button
{
font-family: "SegoeUI-Light-final","Segoe UI Light","Segoe UI",Segoe,Tahoma,Helvetica,Arial,Sans-Serif;
font-size: 18px;
background-color: #00B7C3 !important;
color: #002050;
font-weight: 400;
padding: 10px 30px;
height: 50px;
width: 150px !important;
text-align: center;
cursor: pointer;
border: none;
font-weight:bold;
}

#butBegin:Enabled:Hover,
.ms-crm-RefreshDialog-Button:Enabled:Hover
{
border: 1px solid #000000;
background-color: #00B7C3 !important;
color: #002050;
}

#butBegin:disabled,
.ms-crm-RefreshDialog-Button:disabled
{
color: #FFFFFF !important;
background-color: #aaa !important;
cursor: default !important;
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

body .sales {
display: inline-block;
width:94px;
height:94px;
color: white;
flex: 1 1 auto;
position: relative;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left: 50px;
<% } else { %>
margin-right: 50px;
<% } %>
}
body .sales:hover {
background-color: #00B7C3;
}

body .scenarioName
{
position:absolute;
color: #002050;
margin-top: 22px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<% } %>
line-height: 20px;
font-size: 16px;
}

body .tilecheckbox {
background-image: url('/_imgs/Tools/check_black_72.png');
background-repeat: no-repeat;
background-position: center;
width: 18px;
height: 18px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
background-color: white;
border: 1px solid black;
}

body .tileicon {
position: relative;
bottom: 0px;
height: 70px;
width: 70px;
background-repeat: no-repeat;
}

body #SalesIcon {
background-image: url('/_imgs/Tools/Dynamics_icons_Sales_64.png');
background-position: center;
}

body {
font-family: "SegoeUI-Light-final","Segoe UI Light","Segoe UI",Segoe,Tahoma,Helvetica,Arial,Sans-Serif;
font-weight: normal;
}

body .padb10
{
padding:10px;
}

body .service {
display: inline-block;
width:94px;
height:94px;
color: white;
flex: 1 1 auto;
position: relative;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left: 50px;
<% } else { %>
margin-right: 50px;
<% } %>
}
body .service:hover {
background-color: #00B7C3;
}
body #ServiceIcon {
background-image: url('/_imgs/Tools/Dynamics_icons_Customer_service_64.png');
background-position: center;
}

body .fieldService {
display: inline-block;
width:94px;
height:94px;
color: white;
flex: 1 1 auto;
position: relative;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left: 50px;
<% } else { %>
margin-right: 50px;
<% } %>
}

body .fieldService:hover {
background-color: #00B7C3;
}

body #FieldServiceIcon {
background-image: url('/_imgs/Tools/Dynamics_icons_Field_service_64.png');
background-position: center;
}

body .projectService {
display: inline-block;
width:94px;
height:94px;
color: white;
flex: 1 1 auto;
position: relative;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left: 1px;
<% } else { %>
margin-right: 1px;
<% } %>
}

body .projectService:hover {
background-color: #00B7C3;
}

body #ProjectServiceIcon {
background-image: url('/_imgs/Tools/Dynamics_icons_Project_services_64.png');
background-position: center;
}

body #AdministeringCRM {
display: inline-block;
position: relative;
}

body #AdministeringCRMicon {
background-image: url('/_imgs/Tools/Dynamics_icons_Field_service_64.png');
background-size: cover;
}

body .adminTilecheckbox {
background-image: url('/_imgs/Tools/check_black_72.png');
background-repeat: no-repeat;
background-position: center;
width: 18px;
height: 18px;
background-color: white;
border: 1px solid black;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float: left;
margin-right:10px;
<% } else { %>
float: right;
margin-left:10px;
<% } %>
}

body .emptycheckbox {
height: 18px;
width: 18px;
background-color: white;
border: 1px solid black;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float: left;
margin-right:10px;
<% } else { %>
float: right;
margin-left:10px;
<% } %>
}

body .adminscenarioName
{
position:relative;
color: #002050;
width: auto;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-left:10px;
<% } else { %>
padding-right:10px;
<% } %>
font-size: 24px;
display:inline-block;
}

body .tilesContainer
{
line-height: 20px;
}

body .marketing {
display: inline-block;
width:94px;
height:94px;
color: white;
flex: 1 1 auto;
position: relative;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left: 50px;
<% } else { %>
margin-right: 50px;
<% } %>
}
body .marketing:hover {
background-color: #00B7C3;
}
body #SmbMarketingIcon {
background-image: url('/_imgs/Tools/Dynamics_icons_Marketing_64.png');
background-position: center;
}

body #SmbSalesIcon {
background-image: url('/_imgs/Tools/Dynamics_icons_Sales_64.png');
background-position: center;
}
</style>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">

<div id="smbTiles" class="tilesContainer" <% if (!OrgHasSmbRoles) { %>  style="display:none" <% }  %>>
<div class="padb10"></div>
<div class="sales tileContainer" id="SmbSales" runat="server" onclick="setRole(this)">
<div class="tilecheckbox" id="SmbSalesImg" runat="server" style="display:none"></div>
<div class="tileicon" id="SmbSalesIcon"></div>
<div class="scenarioName"><loc:Text ResourceId="Dialog_SwitchRole_Scenario_Sales" runat="server" /></div>
</div>

<div class="marketing tileContainer" id="SmbMarketing" runat="server" onclick="setRole(this)">
<div class="tilecheckbox" id="SmbMarketingImg" runat="server" style="display:none"></div>
<div class="tileicon" id="SmbMarketingIcon"></div>
<div class="scenarioName"><loc:Text ResourceId="Dialog_SwitchRole_Scenario_Marketing" runat="server" /></div>
</div>
</div>

<div id="enterpriseTiles" class="tilesContainer" <% if (OrgHasSmbRoles) { %>  style="display:none" <% }  %>>
<div class="padb10"></div>

<div id="AdministeringCRM" class="tileContainer" onclick="setRole(this)">
<div class="adminTilecheckbox" id="AdministeringCRMImg" runat="server" style="display:none"></div>
<div class="emptycheckbox" id="AdministeringCRMEmpty" runat="server"></div>
<div class="adminscenarioName"><loc:Text ResourceId="Dialog_SwitchRole_Scenario_Both" runat="server" /></div>
</div>

<div class="padb10"></div>

<div class="sales tileContainer" id="Sales" runat="server" onclick="setRole(this)">
<div class="tilecheckbox" id="SalesImg" runat="server" style="display:none"></div>
<div class="tileicon" id="SalesIcon"></div>
<div class="scenarioName"><loc:Text ResourceId="Dialog_SwitchRole_Scenario_Sales" runat="server" /></div>
</div>

<div class="service tileContainer" id="Service" runat="server" onclick="setRole(this)">
<div class="tilecheckbox" id="ServiceImg" runat="server" style="display:none"></div>
<div class="tileicon" id="ServiceIcon"></div>
<div class="scenarioName"><loc:Text ResourceId="Dialog_SwitchRole_Scenario_Service" runat="server" /></div>
</div>

<div class="fieldService tileContainer" id="FieldService" runat="server" onclick="setRole(this)">
<div class="tilecheckbox" id="FieldServiceImg" runat="server" style="display:none"></div>
<div class="tileicon" id="FieldServiceIcon"></div>
<div class="scenarioName"><loc:Text ResourceId="Dialog_SwitchRole_Scenario_FieldService" runat="server" /></div>
</div>

<div class="projectService tileContainer" id="ProjectService" runat="server" onclick="setRole(this)">
<div class="tilecheckbox" id="ProjectServiceImg" runat="server" style="display:none"></div>
<div class="tileicon" id="ProjectServiceIcon"></div>
<div class="scenarioName"><loc:Text ResourceId="Dialog_SwitchRole_Scenario_ProjectService" runat="server" /></div>
</div>
</div>
<div class="padb10"></div>
<div class="padb10"></div>
<div class="ms-crm-SwitchRoleDescription">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription)%>
</div>
</frm:DialogForm>
</body>
</html>