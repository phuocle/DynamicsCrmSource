
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.SummaryPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">





function GetNextPageDefinition()
{
return new NextPageDefinition(getNextPageUrl(), getWizardXml());
}




function getNextPageUrl()
{

var wrpcTokenString = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentWrpcContext.GetWrpcTokenAsQueryString(Microsoft.Crm.Application.Utility.CrmUri.Create("/CRMReports/AdHocWizard/SuccessFailurePage.aspx", Microsoft.Crm.Application.Security.UserInformation.Current))) %>;

if(wrpcTokenString.length > 0 && wrpcTokenString[0] == '&')
{
wrpcTokenString = wrpcTokenString.substring(1, wrpcTokenString.length);
}

var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/SuccessFailurePage.aspx?" + wrpcTokenString);



oUrl = AppendSolutionIdToTheUrl(oUrl);

if(WizardHasProperty("isOrgReport"))
{
oUrl.get_query()["isOrgReport"] = WizardGetProperty("isOrgReport");
}

oUrl.get_query()["id"] = (WizardGetProperty("WizardMode") == EDIT_MODE_UPDATE) ? WizardGetProperty("ReportId") : "";

return oUrl;
}




function getWizardXml()
{

var oStringBuilder = new StringBuilder();
oStringBuilder.Append("<CustomReport>");


oStringBuilder.Append("<ReportName>");
oStringBuilder.Append(CrmEncodeDecode.CrmXmlEncode(WizardGetProperty("ReportName")));
oStringBuilder.Append("</ReportName>");


oStringBuilder.Append("<Description>");
oStringBuilder.Append(CrmEncodeDecode.CrmXmlEncode(WizardGetProperty("ReportDescription")));
oStringBuilder.Append("</Description>");


oStringBuilder.Append("<Language>");
oStringBuilder.Append(CrmEncodeDecode.CrmXmlEncode(WizardGetProperty("Language")));
oStringBuilder.Append("</Language>");


oStringBuilder.Append("<Query>");
oStringBuilder.Append(XUI.Xml.XMLSerializer.serializeToString(WizardGetProperty("FetchXml")));
oStringBuilder.Append("</Query>");


oStringBuilder.Append("<DefaultFilter>");
oStringBuilder.Append(WizardGetProperty("DefaultFilter"));
oStringBuilder.Append("</DefaultFilter>");


oStringBuilder.Append(XUI.Xml.XMLSerializer.serializeToString(WizardGetProperty("GroupingXml")));


oStringBuilder.Append(XUI.Xml.XMLSerializer.serializeToString(WizardGetProperty("ColumnXml")));


oStringBuilder.Append(XUI.Xml.XMLSerializer.serializeToString(WizardGetProperty("TableLayoutXml")));


if (reportWizardHasXmlProperty("ChartLayoutXml"))
{
oStringBuilder.Append(XUI.Xml.XMLSerializer.serializeToString(WizardGetProperty("ChartLayoutXml")));
}


oStringBuilder.Append("</CustomReport>");
return oStringBuilder.ToString();
}




function initializePage()
{

XUI.Html.SetText($get('nameCell'), WizardGetProperty("ReportName"));


var sDescription = WizardGetProperty("ReportDescription");
XUI.Html.SetText($get('descriptionCell'), sDescription);
if (sDescription.length == 0)
{
$get('descriptionRow').style.display = "none";
}


XUI.Html.SetText($get('primaryEntityCell'), LOCID_PRIMARY_ENTITY);


XUI.Html.SetText($get('secondaryEntityCell'), LOCID_SECONDARY_ENTITY);
if (LOCID_SECONDARY_ENTITY.length == 0)
{
$get('secondaryEntityRow').style.display = "none";
}
}




function moveNext()
{
WizardNavigate(_WizardNavigateEnum.NEXT);
}




function summaryPage_onload()
{
initializePage();
}


Sys.Application.add_load(summaryPage_onload);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table>
<col width="150" /><col />
<tr>
<td><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportMetadataPage.ReportName" runat="server" /></td>
<td id="nameCell"></td>
</tr>
<tr id="descriptionRow">
<td><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportMetadataPage.ReportDescription" runat="server" /></td>
<td id="descriptionCell"></td>
</tr>
<tr>
<td><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportMetadataPage.PrimaryEntity" runat="server" /></td>
<td id="primaryEntityCell"></td>
</tr>
<tr id="secondaryEntityRow">
<td><loc:Text ResourceId="CustomReporting.AdHocWizard.ReportMetadataPage.SecondaryEntity" runat="server" /></td>
<td id="secondaryEntityCell"></td>
</tr>
</table>




</frm:WizardForm>
</body>
</html>
