<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Grids.PrintPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head runat="server">
<cnt:AppHeader id="crmHeader" runat="server" />
<style>
@media print
{
.body
{
height: auto !important;
}

.ms-crm-grid-body,
.ms-crm-ListControl,
.ms-crm-IE7-Height-Fix-Dummy-Container,
.gridprintcontainer,
.ms-crm-grid-BodyContainer,
.ms-crm-List-DataArea,
.ms-crm-List-StatusBar,
.ms-crm-ListArea,
.ms-crm-grid-databodycontainer
{
position:static !important;
}

.printheader
{
display:none;
}

.gridprintcontainer
{
top:30px !important;
overflow:visible;
}

.ms-crm-grid-BodyContainer,
.ms-crm-List-DataArea
{
overflow:visible !important;
}

}

</style>
<script language="JavaScript">
Sys.Application.add_load(PrintOnLoad);
function PrintOnLoad()
{
if (bForReports)
{
$find("crmGrid").add_onBeforeFormLoad(Mscrm.ReportUtil.handleReportDoubleClick);
}
}

</script>
</head>
<body>
<div class="stdTable">
<div id="printHeader" style="height:44px" class="printheader">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server" />
</div>
<div style="height:30px">
<div class="ms-crm-Grid-Title-Print"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(GridTitle)%></div>
</div>
<div class="ms-crm-absolutePosition gridprintcontainer" style="top:74px">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" />
</div>
</div>
</div>
</body>
</html>
