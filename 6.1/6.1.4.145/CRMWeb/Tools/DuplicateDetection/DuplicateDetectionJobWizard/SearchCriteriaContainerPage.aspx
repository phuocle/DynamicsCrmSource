<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetectionJobWizard.SearchCriteriaContainerPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">

var cancelClicked = false;
function WizardCloseMessage(oEvent)
{
oEvent = oEvent.rawEvent;

if (!cancelClicked)
{
oEvent.returnValue = LOCID_DD_ALERT_CLOSE;
return LOCID_DD_ALERT_CLOSE;
}
}

function OnCancelClicked()
{
cancelClicked = true;
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

Sys.Application.add_load(SearchCriteriaContainerPageOnLoad);
function SearchCriteriaContainerPageOnLoad()
{
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);

$addHandler(document.getElementById("buttonBack"), "click", moveBack);
var cancelBtn = document.getElementById("buttonCancel");
cancelBtn.onclick = OnCancelClicked;

InitializePageControls();
}

function InitializePageControls()
{
var url = Mscrm.CrmUri.create("/Tools/BulkDelete/BulkDeleteWizard/SearchCriteriaPage.aspx");
var entityName;
var fetchXml;

url.appendToQuery("advFindPurpose=duplicatedetection");
if (WizardHasProperty("viewid") && WizardHasProperty("viewType"))
{
url.appendToQuery("viewid=" + WizardGetProperty("viewid"));
url.appendToQuery("viewType=" + WizardGetProperty("viewType"));
}



if (WizardHasProperty("fetchXml") && WizardHasProperty("entityName"))
{
entityName = WizardGetProperty("entityName");
fetchXml = WizardGetProperty("fetchXml");
url.appendToQuery("entityName=" + entityName);
}
else if (WizardHasProperty("objectTypeCode"))
{
url.appendToQuery("objectTypeCode=" + WizardGetProperty("objectTypeCode"));
}

var sUrl = url.toString();

var searchCriteriaFrame = document.getElementById("searchCriteriaFrame");
searchCriteriaFrame.src = sUrl;

function iframeOnLoad()
{
$removeHandler(searchCriteriaFrame, "load", iframeOnLoad);

var searchCriteriaForm = searchCriteriaFrame.contentWindow.document.getElementById("searchCriteriaForm");
var fetchXmlNode = $get("fetchXml", searchCriteriaForm);
fetchXmlNode.value = fetchXml;

searchCriteriaForm.action = sUrl;
searchCriteriaForm.submit();
}

$addHandler(searchCriteriaFrame, "load", iframeOnLoad, true);
}

function GetNextPageDefinition()
{
var ddWizardMode = WizardGetProperty("ddWizardMode");

var oUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/DuplicateDetectionJobWizard/AdditionalOptionsPage.aspx?ddWizardMode=" + ddWizardMode);
return new NextPageDefinition(oUrl);
}

function moveBack()
{
SavePageProperties();
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.BACK);
}

function moveNext()
{

var fetchXml = $get("searchCriteriaFrame").contentWindow.$find("advFind").get_fetchXml();


if(IsNull(fetchXml) || fetchXml == "")
{
return;
}

SavePageProperties();
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}

function SavePageProperties()
{
var advFind = $get("searchCriteriaFrame").contentWindow.$find("advFind");
var fetchXml = advFind.get_fetchXml();
var entityName = advFind.get_entityName();
var viewType = advFind.get_queryObjectType();
var viewId = advFind.get_queryId();

if (WizardHasProperty("jobName"))
{
var jobName = WizardGetProperty("jobName");
if (jobName == null || jobName == "")
{
jobName = GetJobNameFromView();
WizardSetProperty("jobName", jobName);
}
}
else
{
jobName = GetJobNameFromView();
WizardSetProperty("jobName", jobName);
}

WizardSetProperty("viewid", viewId);
WizardSetProperty("viewType", viewType);
WizardSetProperty("fetchXml", fetchXml);
WizardSetProperty("entityName", entityName);
}

function GetJobNameFromView()
{
var advFind = $get("searchCriteriaFrame").contentWindow.$find("advFind")
var command = new RemoteCommand("DuplicateDetection", "GetViewName");
command.SetParameter("viewId", advFind.get_queryId());
command.SetParameter("viewType", advFind.get_queryObjectType());
var jobName = formatString(LOCID_DD_JOBNAME_STR, command.Execute().ReturnValue, LOCID_USER_DATETIME);
return jobName;
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<iframe id="searchCriteriaFrame" name="searchCriteriaFrame" width="100%" height="100%" scrolling="no" frameborder="0">
</iframe>
</frm:WizardForm>
</body>
</html>
