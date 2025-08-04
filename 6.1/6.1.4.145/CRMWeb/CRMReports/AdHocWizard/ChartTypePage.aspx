<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.ChartTypePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

var _oaTypeOptions = null;
var _typeColumn = null;
var _typeBar = null;
var _typeLine = null;
var _typePie = null;





function GetNextPageDefinition()
{

var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/ChartFormatPage.aspx");


oUrl.get_query()["lcid"] = WizardGetProperty("Language");


oUrl.get_query()["type"] = _oChartLayoutXmlBuilder.GetChartType();

return new NextPageDefinition(oUrl);
}




function moveNext()
{

var sChartType = null;
for (var i = 0; i < _oaTypeOptions.length && IsNull(sChartType); i++)
{
var oTypeOption = _oaTypeOptions[i];
if (oTypeOption.checked)
{
sChartType = oTypeOption.value;
}
}


_oChartLayoutXmlBuilder.SetChartType(sChartType);


WizardSetProperty("ChartLayoutXml", _oChartLayoutXmlBuilder.GetLayoutXml());

WizardNavigate(_WizardNavigateEnum.NEXT);
}





function chartTypePage_onload()
{
_typeColumn = $get('typeColumn');
_typeBar = $get('typeBar');
_typeLine = $get('typeLine');
_typePie = $get('typePie');
initializeChartingCommon();


_oaTypeOptions = new Array(_typeColumn, _typeBar, _typeLine, _typePie);


var sChartType = _oChartLayoutXmlBuilder.GetChartType();
for (var i = 0; i < _oaTypeOptions.length; i++)
{
var oTypeOption = _oaTypeOptions[i];
oTypeOption.checked = (oTypeOption.value == sChartType);
}



if (!pieValueAxesAvailable())
{

if (_typePie.checked)
{
_typeColumn.checked = true;
}


_typePie.disabled = true;
$find("notifications").AddNotification("pieChartUnavailable", Mscrm.Severity.SEVERITYINFORMATION, "", LOCID_PIE_CHART_UNAVAILABLE);
}
}





function pieValueAxesAvailable()
{
var oaValueAxes = getValueAxes();

var pieValueAxesAvailable = false;
for (var i = 0; i < oaValueAxes.length; i++)
{
if (isValidForPieChart(oaValueAxes[i]))
{
pieValueAxesAvailable = true;
break;
}
}

return pieValueAxesAvailable;
}


Sys.Application.add_load(chartTypePage_onload);
</script>
<style type="text/css">
DIV.Notifications
{
margin-bottom: 10px;
}
</style>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<cnt:AppNotifications id="notifications" runat="server" />

<ul>
<li>
<img src="/_imgs/ReportWizard/chart_column.gif" alt="" class="ms-crm-AdHocWizard-ChartType" />
<input type="radio" name="type" id="typeColumn" value="Column" class="ms-crm-RadioButton" checked="checked"/>
<label for="typeColumn"><loc:Text ResourceId="CustomReporting.AdHocWizard.ChartTypePage.ColumnChart" runat="server" /></label>
</li>
<li>
<img src="/_imgs/ReportWizard/chart_bar.gif" alt="" class="ms-crm-AdHocWizard-ChartType" />
<input type="radio" name="type" id="typeBar" value="Bar" class="ms-crm-RadioButton" />
<label for="typeBar"><loc:Text ResourceId="CustomReporting.AdHocWizard.ChartTypePage.BarChart" runat="server" /></label>
</li>
<li>
<img src="/_imgs/ReportWizard/chart_line.gif" alt="" class="ms-crm-AdHocWizard-ChartType" />
<input type="radio" name="type" id="typeLine" value="Line" class="ms-crm-RadioButton" />
<label for="typeLine"><loc:Text ResourceId="CustomReporting.AdHocWizard.ChartTypePage.LineChart" runat="server" /></label>
</li>
<li>
<img src="/_imgs/ReportWizard/chart_pie.gif" alt="" class="ms-crm-AdHocWizard-ChartType" />
<input type="radio" name="type" id="typePie" value="Pie" class="ms-crm-RadioButton" />
<label for="typePie"><loc:Text ResourceId="CustomReporting.AdHocWizard.ChartTypePage.PieChart" runat="server" /></label>
</li>
</ul>
</frm:WizardForm>
</body>
</html>
