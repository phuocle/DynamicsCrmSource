<%@ Page language="c#" Inherits="Microsoft.Crm.Web.BusinessManagement.TransactionCurrencyDetailPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server" />
<style>
.ms-crm-Form-Nav-Container
{
padding-top:4px;
width:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
}
.ms-crm-NRForm-Main-Container
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
<% } else { %>
left:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
<% } %>
}
</style>
<script type="text/javascript">
Sys.Application.add_load(CurrencyOnLoad);
function CurrencyOnLoad()
{
var currencyprecision = $get("currencyprecision");
var currencysymbol = $get("currencysymbol");
var currencyname = $get("currencyname");
var General = document.querySelector('table.ms-crm-InlineTabHeader td.ms-crm-InlineTabHeaderExpander a')
var GeneralTab = document.querySelector('td.ms-crm-InlineTabHeaderText a.ms-crm-InlineTabHeaderText')
var notification = $get("Notification0");
var GeneralHeader = $get("general_header_h2");
if(currencyprecision != null && currencyprecision.getAttribute("tabindex") != null)
{
currencyprecision.setAttribute("tabindex","0");
}
if(currencysymbol != null &&  currencysymbol.getAttribute("tabindex") != null)
{
currencysymbol.setAttribute("tabindex","0");
}
if(currencyname != null && currencyname.getAttribute("tabindex") != null)
{
currencyname.setAttribute("tabindex","0");
}
if(General != null && General.getAttribute("tabindex") != null)
{
General.setAttribute("tabindex","0");
}
if(GeneralTab != null && GeneralTab.getAttribute("tabindex") != null)
{
GeneralTab.setAttribute("tabindex","-1");
}
if(notification != null && notification.getAttribute("tabindex") != null)
{
notification.setAttribute("tabindex","-1");
}
if(GeneralHeader != null)
{
GeneralHeader.setAttribute("tabindex","0");
}
}
</script>
<%= RefreshParentGridScript %>
</head>
<body>
<div class="ms-crm-Form-Layout">
<div style="height:98px">
<div>
<mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
</div>
</div>
<div class="ms-crm-NRForm-Background">
<div class = "ms-crm-Form-Nav-Container">
<cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>
<div id="mainContainer">
<div id="tdAreas" class="ms-crm-NRForm-Main-Container">
<div id="areaForm">
<frm:CrudForm id="crmForm" runat="server" />
</div>
</div>
</div>
</div>
<div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
<sdk:RenderStatusControl id="crmRenderStatus" runat="server" />
</div>
</div>
</body>
</html>
