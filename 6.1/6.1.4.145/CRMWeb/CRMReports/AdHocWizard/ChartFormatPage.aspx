<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.ChartFormatPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">




function GetNextPageDefinition()
{
return new NextPageDefinition(getSummaryPageUrl());
}




function moveNext()
{

var _columnAxisFieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior('columnAxisField');
var _valueAxis1FieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior('valueAxis1Field');
var _valueAxis2FieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior('valueAxis2Field');
var _columnAxisLabelCtrl = Mscrm.FormControlInputBehavior.GetBehavior("columnAxisLabel");
var _valueAxis1LabelCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis1Label");
var _valueAxis2LabelCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis2Label");
_oChartLayoutXmlBuilder.SetChartOptions($get('showDataLabels').checked, $get('showLegend').checked);


var bIsPieChart = (_oChartLayoutXmlBuilder.GetChartType() == CHART_TYPE_PIE);


var sColumnAxisName = (bIsPieChart) ? _columnAxisFieldCtrl.get_selectedText() : _columnAxisLabelCtrl.get_dataValue();
_oChartLayoutXmlBuilder.SetColumnAxis(_columnAxisFieldCtrl.get_dataValue(), sColumnAxisName);


_oChartLayoutXmlBuilder.ClearValueAxes();


var sValueAxis1Name = (bIsPieChart) ? _valueAxis1FieldCtrl.get_selectedText() : _valueAxis1LabelCtrl.get_dataValue();
_oChartLayoutXmlBuilder.AddValueAxis(_valueAxis1FieldCtrl.get_dataValue(), sValueAxis1Name, _valueAxis1FieldCtrl.get_selectedOption().getAttribute("SummaryValue"));




if (!IsNull(_valueAxis2FieldCtrl.get_dataValue()) && !IsNull(_valueAxis2LabelCtrl.get_dataValue()) && !bIsPieChart)
{

_oChartLayoutXmlBuilder.AddValueAxis(_valueAxis2FieldCtrl.get_dataValue(), _valueAxis2LabelCtrl.get_dataValue(), _valueAxis2FieldCtrl.get_selectedOption().getAttribute("SummaryValue"));
}


WizardSetProperty("ChartLayoutXml", _oChartLayoutXmlBuilder.GetLayoutXml());

WizardNavigate(_WizardNavigateEnum.NEXT);
}


Sys.Application.add_load(chartFormatPage_onload)
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table class="stdTable" cellpadding="4" cellspacing="0">
<col /><col width="33%"/>
<tr>
<td valign="top" class="ms-crm-AdHocWizard-ChartFormat">
<table class="MaxWidth ChartFormat" cellpadding="3" cellspacing="0">
<col width="185" /><col />
<tr>
<td colspan="2" class="ms-crm-Form-Section" id="columnAxisSectionCell" runat="server" />
</tr>
<tr>
<frm:FormCell runat="server" ID="columnAxisFieldCell" ShowLabel="True" LabelResourceId="CustomReporting.AdHocWizard.ChartFormatPage.Field" RequiredLevel="Required"><ui:Select id="columnAxisField" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" ID="columnAxisLabelCell" ShowLabel="True" LabelResourceId="CustomReporting.AdHocWizard.ChartFormatPage.Label" RequiredLevel="Required"><ui:TextBox id="columnAxisLabel" MaxLength="250" OnChange="updatePreviewAxes();updateNextButton();" runat="server" /></frm:FormCell>
</tr>
<tr>
<td colspan="2" class="ms-crm-Form-Section ms-crm-AdHocWizard-NewSection" id="valueAxisSectionCell" runat="server" />
</tr>
<tr>
<frm:FormCell runat="server" ID="valueAxis1FieldCell" ShowLabel="True" LabelResourceId="CustomReporting.AdHocWizard.ChartFormatPage.Value1Data" RequiredLevel="Required"><ui:Select id="valueAxis1Field" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" ID="valueAxis1LabelCell" ShowLabel="True" LabelResourceId="CustomReporting.AdHocWizard.ChartFormatPage.Value1Label" RequiredLevel="Required"><ui:TextBox id="valueAxis1Label" MaxLength="250" OnChange="updatePreviewAxes();updateNextButton();" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" ID="valueAxis2FieldCell" ShowLabel="True" LabelResourceId="CustomReporting.AdHocWizard.ChartFormatPage.Value2Data"><ui:Select id="valueAxis2Field" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" ID="valueAxis2LabelCell" ShowLabel="True" LabelResourceId="CustomReporting.AdHocWizard.ChartFormatPage.Value2Label"><ui:TextBox id="valueAxis2Label" MaxLength="250" OnChange="updatePreviewAxes();updateNextButton();" runat="server" /></frm:FormCell>
</tr>
<tr>
<td colspan="2" class="ms-crm-Form-Section ms-crm-AdHocWizard-NewSection">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ChartFormatPage.FormatLabelsAndLegends" runat="server" />
</td>
</tr>
<tr>
<td colspan="2">
<table class="MaxWidth" cellpadding="0" cellspacing="0">
<col width="20" /><col />
<tr>
<td>
<ui:CheckBox ID="showDataLabels" runat="server" />
</td>
<td>
<label for="showDataLabels">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ChartFormatPage.ShowDataLabels" runat="server" />
</label>
</td>
</tr>
<tr>
<td>
<ui:CheckBox ID="showLegend" runat="server" />
</td>
<td>
<label for="showLegend">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ChartFormatPage.ShowLegend" runat="server" />
</label>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
<td valign="top">
<table class="MaxWidth" cellpadding="3" cellspacing="0">
<col width="50%" /><col width="50%" />
<tr>
<td class="ms-crm-Form-Section" colspan="2"><loc:Text ResourceId="CustomReporting.AdHocWizard.ChartFormatPage.ChartPreview" runat="server" /></td>
</tr>
<tr>
<td class="YAxis" id="yAxisCell" />
<td class="ms-crm-AdHocWizard-PreviewImage"><img src="" alt="" id="previewImage" class="ms-crm-AdHocWizard-PreviewImage" /></td>
</tr>
<tr>
<td></td>
<td class="XAxis" id="xAxisCell" />
</tr>
</table>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
