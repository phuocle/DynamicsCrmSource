<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.WelcomePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">


        Sys.Application.add_load(welcomePage_onload);

        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/ModeAndLanguagePage.aspx");
            if (WizardHasProperty("ReportId")) {
                oUrl.get_query()["id"] = WizardGetProperty("ReportId");
            }
            return new NextPageDefinition(oUrl);
        }


        function WantToSkip() {


            var oUrl = Mscrm.CrmUri.create(window.parent.location.search);
            var sReportId = oUrl.get_query()["WizardInput"];
            if (!IsNull(sReportId) && !WizardHasProperty("WizardMode")) {
                WizardSetProperty("ReportId", sReportId);
            }


            return true;

        }


        function welcomePage_onload() {
            var oArgs = parent.getDialogArguments();
            if (!IsNull(oArgs) && !IsNull(oArgs.isOrgReport)) {
                WizardSetProperty("isOrgReport", oArgs.isOrgReport);
            }
        }

    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
</frm:WizardForm>
</body>
</html>