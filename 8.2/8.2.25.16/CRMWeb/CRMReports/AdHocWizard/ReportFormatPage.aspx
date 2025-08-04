<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.ReportFormatPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">




function GetNextPageDefinition()
{
var oUrl = ($get("layoutTableOnly").checked) ? getSummaryPageUrl() : Mscrm.CrmUri.create("/CRMReports/AdHocWizard/ChartTypePage.aspx");
return new NextPageDefinition(oUrl);
}




function moveNext()
{
if ($get("layoutTableOnly").checked)
{

_oWizardXmlBuilder.SetTableIsDrillthrough(false);


WizardSetProperty("ChartLayoutXml", null);
}
else
{

_oWizardXmlBuilder.SetTableIsDrillthrough($get("tableLayoutDrillthrough").checked);



WizardSetProperty("ChartLayoutXml", _oChartLayoutXmlBuilder.GetLayoutXml());
}


WizardSetProperty("TableLayoutXml", _oWizardXmlBuilder.GetTableLayoutXml());

WizardNavigate(_WizardNavigateEnum.NEXT);
}





function reportFormatPage_onload()
{
initializeChartingCommon();


if (reportWizardHasXmlProperty("ChartLayoutXml"))
{
$get("layoutChartAndTable").checked = true;

if (_oWizardXmlBuilder.GetTableIsDrillthrough())
{
$get("tableLayoutDrillthrough").checked = true;
}
else
{
$get("tableLayoutNormal").checked = true;
}
}
else
{
$get("layoutTableOnly").checked = true;
}

if (!valueAxesAvailable())
{

var sNotificationText = (_iColumnAxisType == PROPERTY_PAGE_TYPE_GROUP) ? LOCID_CHART_UNAVAILABLE_GROUPING : LOCID_CHART_UNAVAILABLE_COLUMN;
$find("notifications").AddNotification("chartUnavailable", Mscrm.Severity.SEVERITYINFORMATION, "", sNotificationText);


$get("layoutChartAndTable").disabled = true;


$get("layoutTableOnly").checked = true;
}


updateEnabledRadioOptions();
}





function updateEnabledRadioOptions()
{
var bTableOnly = $get("layoutTableOnly").checked;
$get("tableLayoutDrillthrough").disabled = bTableOnly;
$get("tableLayoutNormal").disabled = bTableOnly;
}





function valueAxesAvailable()
{
var oaValueAxes = getValueAxes()
return (oaValueAxes.length > 0);
}


Sys.Application.add_load(reportFormatPage_onload);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<cnt:AppNotifications id="notifications" runat="server" />

<ul>
<li>
<div class="ms-crm-Bold-Header">
<input type="radio" name="layout" id="layoutTableOnly" class="ms-crm-RadioButton" onclick="updateEnabledRadioOptions()" />
<label for="layoutTableOnly"><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportFormatPage.TableOnly" runat="server" /></label>
</div>
<img src="/_imgs/ReportWizard/table.gif" alt="" class="ms-crm-AdHocWizard-FormatType" />
</li>
<li>
<div class="ms-crm-Bold-Header">
<input type="radio" name="layout" id="layoutChartAndTable" class="ms-crm-RadioButton" onclick="updateEnabledRadioOptions()" checked="checked" />
<label for="layoutChartAndTable"><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportFormatPage.ChartAndTable" runat="server" /></label>
</div>
<ul class="ms-crm-AdHocWizard-MinorReportFormat">
<li>
<div>
<input type="radio" name="tableLayout" id="tableLayoutNormal" class="ms-crm-RadioButton" checked="checked" />
<label for="tableLayoutNormal"><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportFormatPage.TableNormal" runat="server" /></label>
</div>
<img src="/_imgs/ReportWizard/charttable1.gif" alt="" class="ms-crm-AdHocWizard-FormatType" />
</li>
<li>
<div>
<input type="radio" name="tableLayout" id="tableLayoutDrillthrough" class="ms-crm-RadioButton" />
<label for="tableLayoutDrillthrough"><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportFormatPage.TableDrillthrough" runat="server" /></label>
</div>
<img src="/_imgs/ReportWizard/charttable2.gif" alt="" class="ms-crm-AdHocWizard-FormatType" />
</li>
</ul>
</li>
</ul>
</frm:WizardForm>
</body>
</html>
