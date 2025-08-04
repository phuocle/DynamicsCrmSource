
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

		// --------------------------------------------------------------------
		// Returns the information about the next page for use by the wizard
		// framework
		// --------------------------------------------------------------------
		function GetNextPageDefinition()
		{
            return new NextPageDefinition(getNextPageUrl(), getWizardXml());
		}

		// --------------------------------------------------------------------
		// Returns the url for the next wizard page
		// --------------------------------------------------------------------
		function getNextPageUrl()
		{
			var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/SuccessFailurePage.aspx?");
			
			
			// Append Solution Id
			oUrl = AppendSolutionIdToTheUrl(oUrl);
			
			if(WizardHasProperty("isOrgReport"))
			{
				oUrl.get_query()["isOrgReport"] = WizardGetProperty("isOrgReport");
			}
			// Append report id if update
			oUrl.get_query()["id"] = (WizardGetProperty("WizardMode") == EDIT_MODE_UPDATE) ? WizardGetProperty("ReportId") : "";

			return oUrl;
		}

		// --------------------------------------------------------------------
		// Builds the complete wizard xml string for submission
		// --------------------------------------------------------------------
		function getWizardXml()
		{
			// Create a StringBuilder for assembling Wizard Xml
			var oStringBuilder = new StringBuilder();
			oStringBuilder.Append("<CustomReport>");

			// Append report name
			oStringBuilder.Append("<ReportName>");
			oStringBuilder.Append(CrmEncodeDecode.CrmXmlEncode(WizardGetProperty("ReportName")));
			oStringBuilder.Append("</ReportName>");

			// Append report description
			oStringBuilder.Append("<Description>");
			oStringBuilder.Append(CrmEncodeDecode.CrmXmlEncode(WizardGetProperty("ReportDescription")));
			oStringBuilder.Append("</Description>");

			// Append language
			oStringBuilder.Append("<Language>");
			oStringBuilder.Append(CrmEncodeDecode.CrmXmlEncode(WizardGetProperty("Language")));
			oStringBuilder.Append("</Language>");

			// Append fetch
			oStringBuilder.Append("<Query>");
			oStringBuilder.Append(WizardGetProperty("FetchXml"));
			oStringBuilder.Append("</Query>");

			// Append default filter
			oStringBuilder.Append("<DefaultFilter>");
			oStringBuilder.Append(WizardGetProperty("DefaultFilter"));
			oStringBuilder.Append("</DefaultFilter>");

			// Append grouping xml
			oStringBuilder.Append(WizardGetProperty("GroupingXml"));
			// Append column xml
			oStringBuilder.Append(WizardGetProperty("ColumnXml"));
			// Append table layout xml
			oStringBuilder.Append(WizardGetProperty("TableLayoutXml"));
			// Append chart layout xml (if appropriate)
			if (WizardHasProperty("ChartLayoutXml"))
			{
				oStringBuilder.Append(WizardGetProperty("ChartLayoutXml"));
			}

			// Return wizard xml
			oStringBuilder.Append("</CustomReport>");
			return oStringBuilder.ToString();
		}

		// --------------------------------------------------------------------
		// Initialize global variables and page UI
		// --------------------------------------------------------------------
		function initializePage()
		{
			// Show report name
			XUI.Html.SetText($get('nameCell'), WizardGetProperty("ReportName"));

			// Optionally show report description
			var sDescription = WizardGetProperty("ReportDescription");
			XUI.Html.SetText($get('descriptionCell'), sDescription);
			if (sDescription.length == 0)
			{
				$get('descriptionRow').style.display = "none";
			}

			// Show primary entity
			XUI.Html.SetText($get('primaryEntityCell'), LOCID_PRIMARY_ENTITY);

			// Optionally show secondary entity
			XUI.Html.SetText($get('secondaryEntityCell'), LOCID_SECONDARY_ENTITY);
			if (LOCID_SECONDARY_ENTITY.length == 0)
			{
				$get('secondaryEntityRow').style.display = "none";
            }

			//Create a div for the hidden input with the WRPC token
			var WRPCTokendsDiv = document.createElement('div');
			WRPCTokendsDiv.innerHTML = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/CRMReports/AdHocWizard/SuccessFailurePage.aspx"))) %>;
			var form = parent.document.getElementById("wizardpagepostform");
			form.appendChild(WRPCTokendsDiv);
		}

		// --------------------------------------------------------------------
		// Save page data to wizard results bag and move to the next page
		// --------------------------------------------------------------------
		function moveNext()
		{
			WizardNavigate(_WizardNavigateEnum.NEXT);
		}

		// --------------------------------------------------------------------
		// Window onload event
		// --------------------------------------------------------------------
		function summaryPage_onload()
		{
			initializePage();
		}

		// Attach window onload event - preferable to using window.onload
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
