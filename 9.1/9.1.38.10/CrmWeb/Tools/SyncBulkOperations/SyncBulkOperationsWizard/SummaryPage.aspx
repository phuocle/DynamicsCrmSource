<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SyncBulkOperations.SummaryPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">
var _fetchXml = "";
var _jobName = "";
var _sendEmail = false;
var _sCCRecipients = "";
var _isRecurring = false;
var ccReceipients;
var _isCriteriaDefined = false;
var _runNow = false;

function WizardCloseMessage(oEvent)
{
oEvent = oEvent.rawEvent;
oEvent.returnValue = " ";
return " ";
}

Sys.Application.add_load(SummaryPageOnLoad);
function SummaryPageOnLoad()
{
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
if (WizardHasProperty("fetchXml"))
{
_fetchXml = WizardGetProperty("fetchXml");
var fetchXmlDom = XUI.Xml.LoadXml(_fetchXml);

if(IsNull(XUI.Xml.GetParserError(fetchXmlDom)))
{
var conditionNode = XUI.Xml.SelectSingleNode(fetchXmlDom, "//condition", null);
if(IsNull(conditionNode))
{
_isCriteriaDefined = false;
$get("advancedFind").style.display = "none";
$get("noQuery").style.display = "inline";
XUI.Html.SetText($get("criteriaNotDefined"), LOCID_JOB_CRITERIANOTDEFINED);
}
else
{
_isCriteriaDefined = true;
$get("advancedFind").style.display = "block";
var advFind = $find("advFind");
advFind.Clear();
advFind.set_fetchXml(_fetchXml);
advFind.set_isDirty(false);
$get("noQuery").style.display = "none";
}
}
}

if(WizardHasProperty("jobName"))
{
_jobName = WizardGetProperty("jobName");
XUI.Html.SetText($get("jobName"), _jobName);
}

if(WizardHasProperty("entityName"))
{
XUI.Html.SetText($get("selectedQuery"), LOCID_ENTITY_IN_SELECTEDQUERY);
}

if(WizardHasProperty("sendEmail"))
{
_sendEmail = WizardGetProperty("sendEmail");
if(_sendEmail == false)
{
$get("notificationArea").style.display = "none";
}
else
{
$get("notificationArea").style.display = "inline";
}

var userEmail = WizardGetProperty("currentUserEmail")
if(!IsNull(userEmail) && userEmail != "")
{
XUI.Html.SetText($get("emailNotification"), formatString(LOCID_EMAILME, userEmail));
}
}

if(WizardHasProperty("emailCc"))
{
ccReceipients = WizardGetProperty("emailCc");
for(var index = 0; index < ccReceipients.length ; index++)
{
if (XUI.Html.GetText($get("emailNotification")) == "")
{
XUI.Html.SetText($get("emailNotification"), ccReceipients[index].name);
}
else
{
XUI.Html.SetText($get("emailNotification"), XUI.Html.GetText($get("emailNotification")) + LOCID_EMAIL_SEPARATOR + ccReceipients[index].name);
}
}
}

if(WizardHasProperty("isRecurring"))
{
_isRecurring = WizardGetProperty("isRecurring");
_iNumDays = WizardGetProperty("recurrenceDays");

var startDate = "<%=startDate %>";
var startTime = "<%=startTime %>";

if(_isRecurring == true)
{
XUI.Html.SetText($get("schedulingOption"), formatString(LOCID_JOB_RECURRING, startDate, _iNumDays, startTime));
}
else
{
XUI.Html.SetText($get("schedulingOption"), formatString(LOCID_JOB_NONRECURRING, startDate, startTime));
}
}

if (WizardHasProperty("runNow") && WizardGetProperty("entityName") != null && WizardGetProperty("entityName") == "asyncoperation")
{
_runNow = WizardGetProperty("runNow");
if (_runNow) {
XUI.Html.SetText($get("schedulingOption"), LOCID_JOB_SCHEDULENOW);
document.getElementById("summaryPageInfo").style.display = "none";
}
}


var _simpleToolBar = document.getElementById("SimpleToolBar");
if (!IsNull(_simpleToolBar))
{
_simpleToolBar.style.display = "inline";
_simpleToolBar.style.height = "0px";
}
document.getElementById("spnDetailed").style.border = "0px";
$get("AdvFindDetailed").style.top = "0px";


document.getElementById("buttonBack").onclick = moveBack;
}

function moveBack()
{
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.BACK);
}

function moveNext()
{

collectRecipients();

var fetchXml = "";
if(_isCriteriaDefined)
{
fetchXml =_fetchXml
}

var oXmlHttp = new XMLHttpRequest();

var fetchXmlData = XUI.Xml.LoadXml(fetchXml);

if (fetchXmlData)
{
var syncBulkOpsUri = Mscrm.CrmUri.create("/Tools/SyncBulkOperations/SyncBulkOperationsWizard/cmds/cmd_bulksyncoperations.aspx?");
syncBulkOpsUri.get_query()["syncBulkOperationType"] = WizardGetProperty("syncBulkOperationType");




oXmlHttp.open("POST", syncBulkOpsUri.toString(), false);
Mscrm.Utilities.setResponseTypeToMSXml(oXmlHttp);
SetTokenInHeader(oXmlHttp, Mscrm.CrmUri.create("/Tools/SyncBulkOperations/SyncBulkOperationsWizard/cmds/cmd_bulksyncoperations.aspx"));

oXmlHttp.send(fetchXmlData);


var oErrorCodeNode = XUI.Xml.SelectSingleNode(oXmlHttp.responseXML, "error/code", null);


if (oXmlHttp.status === 200 && !oErrorCodeNode)
{
AddTelemetryLog("", WizardGetProperty("syncBulkOperationType"), "Success", oXmlHttp.status);

if (!Mscrm.Utilities.isModalDialogSupported())
{
try { window.top.opener.auto(); } catch (e) { }
}
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.CLOSE);
}
else
{
AddTelemetryLog(oErrorCodeNode, WizardGetProperty("syncBulkOperationType"), "Failure", oXmlHttp.status);


openErrorDlg(oXmlHttp.status);
}
}
}

function AddTelemetryLog(errorMsg, jobType, result, statusCode)
{
try
{
var arguments = {};
arguments["errorMsg"] = errorMsg;
arguments["jobType"] = jobType;
arguments["result"] = result;
arguments["statusCode"] = statusCode;
Mscrm.MetricsReporting.instance().addMetric("syncbulkops", arguments);
}
catch (e) {

}
}

function collectRecipients()
{
_sCCRecipients = "";
var aItems = ccReceipients;
if (aItems && aItems.length >0)
{
for (j = 0; j< aItems.length -1; j++)
{

if (aItems[j].id)
{
_sCCRecipients = _sCCRecipients + aItems[j].id + "," ;
}
else
{
return false;
}
}

if (aItems[j].id)
{
_sCCRecipients = _sCCRecipients + aItems[j].id;
}
else
{
return false;
}
}
return true;
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table width="100%" cellpadding=0 cellspacing=0>
<tr valign="top"  id="summaryPageInfo">
<td>
<loc:Text ResourceId="BulkDeleteWizard.SummaryPage.Info2" runat="server"/>
</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
</table>
<table width="100%" cellpadding=0 cellspacing=0>
<col width="10%"/><col width="90%"/>
<tr>
<td><loc:Text ResourceId="BulkDeleteWizard.SummaryPage.JobName" runat="server"/></td>
<td align="left">
<label id="jobName"></label>
</td>
</tr>
<tr>
<td><loc:Text ResourceId="SyncBulkOperationsWizard.SummaryPage.SyncBulkJobType" runat="server"/></td>
<td align="left">
<label id="jobType"><%=bulkOperationType%></label>
</td>
</tr>
</table>
<table width="100%" cellpadding=0 cellspacing=0>
<tr>
<td>
<label id="schedulingOption"></label>
</td>
</tr>
</table>
<table width="100%" cellpadding=0 cellspacing=0>
<col width="16%"/><col width="84%"/>
<tr id="notificationArea">
<td><loc:Text ResourceId="BulkDeleteWizard.SummaryPage.EmailNotofication" runat="server"/></td>
<td align="left">
<label id="emailNotification"></label>
</td>
</tr>
</table>
<table width="100%" cellpadding=0 cellspacing=0>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td><label id ="selectedQuery"></label></td>
</tr>
</table>
<div style="position:relative;">
<div id="advancedFind" style="vertical-align:top; height:180px">
<cnt:AppAdvancedFind id="advFind" TitleVisible=false IncludeAPIQuery=false DisableValueControlInSimpleMode=true RenderToolBars=false runat="Server"/>
</div>
<div id="noQuery" style="display:none">
<label id="criteriaNotDefined"></label>
</div>
</div>
<table width="100%" cellpadding=0 cellspacing=10>
<tr>
<td><loc:Text ResourceId="SyncBulkOperationsWizard.SummaryPage.Note" runat="server"/></td>
</tr>
<tr>
<td><%=executionTimeNote%></td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
