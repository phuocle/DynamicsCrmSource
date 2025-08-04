<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.SuccessFailurePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">



function moveNext()
{
WizardSetDialogReturnValue((_sNewReportId.length == 0) ? null : _sNewReportId);
WizardNavigate(_WizardNavigateEnum.CLOSE);
}





function successFailurePage_onload()
{


$get('hdnReportId').value = _sNewReportId;
}


$addHandler(window, "load", successFailurePage_onload);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<ui:Hidden ID="hdnReportId" runat="server" />
<loc:Text ResourceId="CustomReporting.AdHocWizard.SuccessFailurePage.Intro" runat="server" />
<ul class="WelcomeSteps">
<li><loc:Text ResourceId="CustomReporting.AdHocWizard.SuccessFailurePage.List1" runat="server" /></li>
<li><loc:Text ResourceId="CustomReporting.AdHocWizard.SuccessFailurePage.List2" runat="server" /></li>
</ul>
</frm:WizardForm>
</body>
</html>
