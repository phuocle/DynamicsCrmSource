<%@ Page Language="c#" MasterPageFile="~/AppPortal/common/appportal.master" Inherits="Microsoft.Crm.Application.Web.Pages.ConfigurePage"
CodeBehind="Microsoft.Crm.Application.Web.Pages.dll" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<asp:content id="WelcomePageContent" contentplaceholderid="globalPageContent" runat="server">

<script type="text/javascript">
function DisableAppPortalConfigureButtons()
{
document.getElementById("globalPageContent_ConfigureButton").disabled = "disabled";
}
</script>

<form id="FirstRunConfigureForm" runat="server" onsubmit="DisableAppPortalConfigureButtons()">
<div>
<div id="AppPortalContentDiv" class="AppPortalContentDiv">
<div class="AppPortalConfigureHeaderWidth">
<h1><loc:Text ResourceId="AppPortal.ConfigurePage.Heading1" runat="server" /></h1>
</div>
<div class="H2Spacer"></div>
<div>
<p>
<loc:Text ResourceId="AppPortal.ConfigurePage.Description" runat="server" />
</p>
</div>
<div class="padb60"></div>
<div>
<h2>
<loc:Text ResourceId="AppPortal.ConfigurePage.BaseCurrencyTitle" runat="server" />
</h2>
</div>
<div class="H2Spacer"></div>
<div>
<p>
<loc:Text ResourceId="AppPortal.ConfigurePage.BaseCurrencyDescription" runat="server" />
</p>
</div>
<div>
<p>
<loc:Text ResourceId="AppPortal.ConfigurePage.BaseCurrencyDescriptionSecondParagraph" runat="server" />
</p>
</div>
<div class="H1Spacer"></div>
<div class="CurrencyDiv">
<loc:Text ResourceId="AppPortal.ConfigurePage.CurrencyLabel" runat="server" />
</div>
<div class="CurrencyValueDiv">
<asp:Literal ID="CurrencyText" runat="server"></asp:Literal>
<div class="ClearBoth"></div>
<div class="CurrencyLinkDiv">
<a href="/appportal/currencypicker.aspx" id="ChangeCurrencyLink">
<loc:Text ResourceId="AppPortal.ConfigurePage.CurrencyChangeLink" runat="server" />
</a>
</div>
</div>
<div class="ClearBoth padb70"></div>
<div class="ConfigureCRM">
<cnt:AppPortalButton ID="ConfigureButton" Submit="true" ResourceId="AppPortal.ConfigureButton" runat="server" Primary="true"/>
</div>
</div>
</div>
</form>
</asp:content>
