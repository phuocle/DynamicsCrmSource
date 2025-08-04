<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.BulkDelete.SearchCriteriaContainerPage" %>
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

var isAdvfindLoaded = false;
function WizardCloseMessage(oEvent)
{
oEvent = oEvent.rawEvent;
oEvent.returnValue = " ";
return " ";
}

Sys.Application.add_load(SearchCriteriaContainerPageOnLoad);
function SearchCriteriaContainerPageOnLoad()
{
$addHandler(document.getElementById("buttonBack"), "click", moveBack);

InitializePageControls();
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
}

function InitializePageControls()
{
var url = Mscrm.CrmUri.create("/Tools/BulkDelete/BulkDeleteWizard/SearchCriteriaPage.aspx");
var entityName;
var fetchXml;

url.appendToQuery("advFindPurpose=bulkdelete");
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
$addHandler(searchCriteriaFrame, "load", onAdvancedFindLoaded);

var searchCriteriaForm = searchCriteriaFrame.contentWindow.document.getElementById("searchCriteriaForm");
var fetchXmlNode = $get("fetchXml", searchCriteriaForm);
fetchXmlNode.value = fetchXml;

searchCriteriaForm.action = sUrl;
searchCriteriaForm.submit();
}
function onAdvancedFindLoaded() {
$removeHandler(searchCriteriaFrame, "load", onAdvancedFindLoaded);
isAdvfindLoaded = true;
}
$addHandler(searchCriteriaFrame, "load", iframeOnLoad, true);
}



function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/Tools/BulkDelete/BulkDeleteWizard/AdditionalOptionsPage.aspx");
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




if (isAdvfindLoaded == false) {
return;
}
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);


var fetchXml = $get("searchCriteriaFrame").contentWindow.$find("advFind").get_fetchXml();


if(IsNull(fetchXml) || fetchXml == "")
{
return;
}

var fetchXmlDom = XUI.Xml.LoadXml(fetchXml);
if(IsNull(XUI.Xml.GetParserError(fetchXmlDom)))
{
var conditionNode = XUI.Xml.SelectSingleNode(fetchXmlDom, "//condition", null);
if(IsNull(conditionNode))
{
if(!window.confirm(LOCID_AF_CRITERIANOTDEFINED))
{
return;
}
}
}

SavePageProperties();
WizardNavigate(_WizardNavigateEnum.NEXT);
}

function SavePageProperties()
{






if (isAdvfindLoaded == false)
{
return;
}
var advFind = $get("searchCriteriaFrame").contentWindow.$find("advFind");
var fetchXml = advFind.get_fetchXml();
var entityName = advFind.get_entityName();

var viewType = advFind.get_queryObjectType();
var viewId = advFind.get_queryId();

WizardSetProperty("viewid", viewId);
WizardSetProperty("viewType", viewType);
WizardSetProperty("fetchXml", fetchXml);
WizardSetProperty("entityName", entityName);
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
