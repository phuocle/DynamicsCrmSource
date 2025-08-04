<%@ Page Language="c#" MasterPageFile="~/AppPortal/common/appportal.master" Inherits="Microsoft.Crm.Application.Web.Pages.AppPortalPage"
CodeBehind="Microsoft.Crm.Application.Web.Pages.dll" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<asp:content id="CurrencyHelpContent" contentplaceholderid="globalPageContent" runat="server">
<form id="FirstRunCurrencyHelp" runat="server">
<div>
<div id="AppPortalContentDiv" class="AppPortalContentDiv">

<span class="LabelHeading">
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.BillingHeader" runat="server"  />
</p>
</span>
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.BillingInfo" runat="server" />
</p>

<span class="LabelHeading">
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.LanguageHeader" runat="server"  />
</p>
</span>
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.LanguageInfo" runat="server" />
</p>

<span class="LabelHeading">
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.CurrencyHeader" runat="server"  />
</p>
</span>
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.CurrencyInfo" runat="server" />
</p>
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.CurrencyInfo2" runat="server" />
</p>
<span class="LabelHeading">
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.SetBaseCurrency.Header" runat="server"  />
</p>
</span>
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.SetBaseCurrency.Description" runat="server" />
</p>
<span class="LabelHeading">
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.SelectByCountry" runat="server"  />
</p>
</span>
<p class="ActionDetails CurrencyHelpPadding">
<loc:Text ResourceId="CurrencyHelpPage.SelectByCountry.Step1" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectByCountry.Step2" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectByCountry.Step3" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectByCountry.Step4" runat="server" /><BR />
</p>
<span class="LabelHeading">
<p class="ActionDetails">
<loc:Text ResourceId="CurrencyHelpPage.SelectCustomCurrency" runat="server"  />
</p>
</span>
<p class="ActionDetails CurrencyHelpPadding">
<loc:Text ResourceId="CurrencyHelpPage.SelectCustomCurrency.Step1" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectCustomCurrency.Step2" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectCustomCurrency.Step3" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectCustomCurrency.Step4" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectCustomCurrency.Step5" runat="server" /><BR />
<loc:Text ResourceId="CurrencyHelpPage.SelectCustomCurrency.Step6" runat="server" /><BR />
</p>

<div class="H2Spacer"></div>
<div class="FloatRight">
<cnt:AppPortalButton ID="CloseButton" ResourceId="CurrencyHelpPage.CloseButton" runat="server" Primary="true" onclick="javascript:self.close();"/>
</div>
<div class="H1Spacer"></div>

</div>
</div>
</form>
</asp:content>
