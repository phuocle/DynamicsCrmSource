<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetectionJobWizard.WelcomePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
var ddWizardMode = Mscrm.DuplicateDetectionWizardMode.systemWide;
var cancelClicked = false;

function WizardCloseMessage(oEvent)
{
oEvent = oEvent.rawEvent;

if (!cancelClicked)
{
oEvent.returnValue = " ";
return " ";
}
}





function GetNextPageDefinition()
{
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
var nextPageUrl;
if (ddWizardMode == Mscrm.DuplicateDetectionWizardMode.systemWide)
nextPageUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/DuplicateDetectionJobWizard/SearchCriteriaContainerPage.aspx");
else
nextPageUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/DuplicateDetectionJobWizard/AdditionalOptionsPage.aspx?ddWizardMode=" + ddWizardMode);

return new NextPageDefinition(nextPageUrl);
}

function moveNext()
{
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}

function OnLoad()
{
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
var cancelBtn = document.getElementById("buttonCancel");
cancelBtn.onclick = OnCancelClicked;

if(_wizardStartError == true)
{
var desc1Row = document.getElementById("description1");
desc1Row.style.display = "none";

var desc2Row = document.getElementById("description2");
XUI.Html.SetText(XUI.Html.DomUtils.GetFirstChild(desc2Row), _wizardStartErrorText);

var nextBtn = document.getElementById("buttonNext");
nextBtn.disabled = true;
return;

}

if(!WizardHasProperty("wizardStartTime"))
{
WizardSetProperty("wizardStartTime",_wizardStartTime);
}


var objectTypeCode = "<%= Microsoft.Crm.Util.None.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>";
var targetRecordIds = "";
var gridXml = "";
var viewName = "";
var jobName = "";

ddWizardMode = Mscrm.DuplicateDetectionWizardMode.systemWide;

var oArgs = getDialogArguments();
if(isNullOrEmptyString(oArgs))
{
oArgs = window.top.getDialogArguments();
}

if (isNullOrEmptyString(oArgs))
{
oArgs = window.parent.getDialogArguments();
}
if(!isNullOrEmptyString(oArgs) && typeof(oArgs) != "undefined")
{
with (oArgs)
{
ddWizardMode = iOption;
objectTypeCode = ObjectTypeCode;
gridXml = GridXml;
viewName = ViewName;


if(Ids != null && Ids != "" && Ids.length > 0)
{
targetRecordIds += Ids[0];
for(var i=1; i<Ids.length; i++)
{
targetRecordIds += "," + Ids[i];
}
}
}
}


if (ddWizardMode == Mscrm.DuplicateDetectionWizardMode.forSelectedRecords)
{
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
var command = new RemoteCommand("DuplicateDetection", "GetEntityDisplayNameFromTypeCode");
command.SetParameter("entityTypeCode", objectTypeCode);
jobName = formatString(LOCID_DD_JOBNAME_SELECTED_STR, command.Execute().ReturnValue, LOCID_USER_DATETIME);
}
else if (ddWizardMode == Mscrm.DuplicateDetectionWizardMode.forAllRecordsAllPage)
{
jobName = formatString(LOCID_DD_JOBNAME_STR, viewName, LOCID_USER_DATETIME);
}

WizardSetProperty("ddWizardMode", ddWizardMode);
WizardSetProperty("objectTypeCode", objectTypeCode);
WizardSetProperty("targetRecordIds", targetRecordIds);
WizardSetProperty("gridXml", gridXml);
WizardSetProperty("jobName", jobName);

}

function WantToSkip()
{
if (ddWizardMode != Mscrm.DuplicateDetectionWizardMode.systemWide)
return true;
else
return false;
}

function OnCancelClicked()
{
cancelClicked = true;
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

</script>

</head>

<body onload="OnLoad()">
<frm:WizardForm id="crmForm" runat="server">
<div width="100%">
<div valign="top">
<span>
<loc:Text ResourceId="DuplicateDetection_Wizard_Page1_IntroText" runat="server"/>
</span>
</div>
<div>
<span>
&nbsp;
</span>
</div>
<div id="description1" valign="top">
<span>

<loc:Text ResourceId="DuplicateDetection_Wizard_Page1_IntroText2" runat="server"/>
<ul style="margin-top:2px;margin-bottom:20px;margin-left:30px;margin-right:30px; list-style:disc;">
<li>
<loc:Text ResourceId="DuplicateDetection_Wizard_Page1_IntroText3" runat="server" />
</li>
<li>
<loc:Text ResourceId="DuplicateDetection_Wizard_Page1_IntroText4" runat="server" />
</li>
<li>
<loc:Text ResourceId="DuplicateDetection_Wizard_Page1_IntroText5" runat="server" />
</li>
</ul>
</span>
</div>
<div id="description2" valign="top">
<span>
<loc:Text ResourceId="DuplicateDetection_Wizard_Page1_Continue" runat="server"/>
</span>
</div>
</div>
</frm:WizardForm>
</body>
</html>
