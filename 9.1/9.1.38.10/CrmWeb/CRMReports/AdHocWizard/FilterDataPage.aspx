
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.FilterDataPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
	<cnt:AppHeader id="crmHeader" runat="server" />
	<script language="javascript" type="text/javascript">
		var FilterEditor;
		// --------------------------------------------------------------------
		// Window onload event
		// --------------------------------------------------------------------
		function filterDataPage_onload()
		{
			initializePage();
		}

		// --------------------------------------------------------------------
		// Returns the information about the next page for use by the wizard
		// framework
		// --------------------------------------------------------------------
		function GetNextPageDefinition()
		{
			var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/TableLayoutPage.aspx?lcid=" + CrmEncodeDecode.CrmUrlEncode(WizardGetProperty("Language")));
			return new NextPageDefinition(oUrl);
		}

		// --------------------------------------------------------------------
		// Initialize global variables and page UI
		// --------------------------------------------------------------------
		function initializePage() {
			FilterEditor = $find("filterEditor");
			// If there is a default filter stored in the wizard xml, set it
			// to the control after the control is ready
			if (WizardHasProperty("DefaultFilter"))
			{
				window.setTimeout(initializeFilterEditor, 0);
			}

			// If there is a default selected query stored in the wizard, set it after the control is ready
			if (WizardHasProperty("DefaultSelectedQuery"))
			{
				window.setTimeout(initializeSavedQuerySelector, 0);
			}

			
			document.getElementById("buttonBack").onclick = moveBack;
		}

		// --------------------------------------------------------------------
		// Initialize filter editor control
		// --------------------------------------------------------------------
		function initializeFilterEditor() {
			FilterEditor.set_filterXml(WizardGetProperty("DefaultFilter"));
}
		// --------------------------------------------------------------------
		// Initialize saved query select control
		// --------------------------------------------------------------------
		function initializeSavedQuerySelector() {
			
			var savedQuerySelector = document.getElementById("savedQuerySelector");
			
			if (savedQuerySelector != null)
			{
				savedQuerySelector.selectedIndex = WizardGetProperty("DefaultSelectedQuery");
			}
		}

		// --------------------------------------------------------------------
		// Save page data to wizard results bag and move to the next page
		// --------------------------------------------------------------------
		function moveNext()
		{
			WizardSetProperty("DefaultFilter", FilterEditor.get_filterXml());
			SaveQueryFilterValue();
			
			WizardNavigate(_WizardNavigateEnum.NEXT);
		}

		// --------------------------------------------------------------------
		// Save page data to wizard results bag and move to the previous page
		// --------------------------------------------------------------------
		// Added this function to save page data while moving back in the wizard
		// as mentioned in the bug #160972
		function moveBack() 
		{
			WizardSetProperty("DefaultFilter", FilterEditor.get_filterXml());
			SaveQueryFilterValue();
			
			WizardNavigate(_WizardNavigateEnum.BACK);
		}

		// --------------------------------------------------------------------
		// Save the value in the saved query selector
		// --------------------------------------------------------------------
		function SaveQueryFilterValue() 
		{
			var savedQuerySelector = document.getElementById('savedQuerySelector');

			if (savedQuerySelector != null) 
			{
				WizardSetProperty("DefaultSelectedQuery", savedQuerySelector.selectedIndex.valueOf());
			}
		}

		// Attach application onload event
		Sys.Application.add_load(filterDataPage_onload);
	</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
	<div style="position:absolute; height:100%; width:100%">
		<cnt:AppFilterEditor id="filterEditor" runat="server" />
	</div>
</frm:WizardForm>
</body>
</html>
