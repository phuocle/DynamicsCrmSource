<%@ Page Language="c#" MasterPageFile="~/AppPortal/common/appportal.master" Inherits="Microsoft.Crm.Application.Web.Pages.CurrencyPicker"
EnableViewState="true" CodeBehind="Microsoft.Crm.Application.Web.Pages.dll" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<asp:content id="PageScript" contentplaceholderid="globalPageScript" runat="server">


function InitializeDOMElements()
{
Mscrm.CurrencyValidator.InitializeDomElements(
"BuiltInCurrencyDiv",
"CustomCurrencyDiv",
"globalPageContent_BuiltInCurrencyInput",
"globalPageContent_CustomCurrencyInput",
<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CustomCurrencyCode.ClientID) %>,
<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CustomCurrencySymbol.ClientID) %>,
<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CustomCurrencyName.ClientID) %>,
"globalPageContent_RequiredInputNote",
<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ErrorLabel.ClientID) %>,
<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(PrecisionDropDown.ClientID)%>,
<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrencyList.ClientID) %>,
<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(RegionDropDown.ClientID) %>,
"SpecifyCustomCurrencyLink",
"CustomCurrencyHeader"
)
}


function InitializeCurrencyPicker()
{
var IsCustom = 0;
if(IsCustomCurrency() == true)
{
IsCustom = 1;
}

Mscrm.CurrencyValidator.InitializeCurrencyPicker(IsCustom);
}

function IsCustomCurrency()
{
var IsCustom = false;
if(document.getElementById('globalPageContent_CustomCurrencyInput').checked == true)
{
IsCustom = true;
}

return IsCustom;
}

function InitializePage()
{
InitializeDOMElements();
InitializeCurrencyPicker();
}

AddOnLoadEvent(InitializePage);

</asp:content>
<asp:content id="CurrencyPickerContent" contentplaceholderid="globalPageContent"
runat="server">
<form id="CurrencyPickerForm" runat="server">
<div id="AppPortalContentDiv" class="AppPortalContentDiv">
<div class="padb10"></div>
<div class="CurrencyTitleContainer">
<h2><loc:Text ResourceId="CurrencyPicker.Title" runat="server" /></h2>
</div>
<div class="CurrencyTileHelpIcon">
<a href="/appportal/currencyhelp.aspx" target="_blank" rel="noopener noreferrer">
<img border="0" height="16px" width="16px" src="/_imgs/Ribbon/Help_16.png" alt=""/>
</a>
</div>
<div class="ClearBoth"></div>
<div class="padb25">
</div>
<div>
<p>
<loc:Text ResourceId="CurrencyPicker.Instruction" runat="server" />
</p>
</div>
<div class="H1Spacer"></div>
<div>
<asp:radiobutton class="CurrencyMode" id="BuiltInCurrencyInput" groupname="CurrencySelector" runat="server" onclick="Mscrm.CurrencyValidator.EnableBuiltInDisableCustomDiv();"></asp:radiobutton>
</div>
<div class="H1Spacer"></div>
<div>
<div id="BuiltInCurrencyDiv">
<div class="BaseCurrencyColumns">
<div class="FloatLeft">
<span><loc:Text ResourceId="CurrencyPicker.CountryLabel" runat="server" /></span>
</div>
<div class="FloatRight">
<asp:ListBox id="RegionDropDown" name="RegionDropDown" class="FormDropDown"
rows="1" OnSelectedIndexChanged="RegionListChanged_OnSelectedIndexChanged" runat="server">
</asp:ListBox>
</div>
</div>
<div class="ClearBoth"></div>
<div class="H2Spacer"></div>
<div class="BaseCurrencyColumns">
<div class="FloatLeft">
<span><loc:Text ResourceId="CurrencyPicker.CurrencyLabel" runat="server" /></span>
</div>
<div class="FloatRight">
<asp:ListBox id="CurrencyList" rows="6" runat="server" class="CurrencyList"></asp:ListBox>
</div>
</div>

<div class="ClearBoth"></div>
<div class="H1Spacer"></div>
<div class="BaseCurrencyColumns">
<div class="FloatRight CustomCurrencyLink">
<a id="SpecifyCustomCurrencyLink" href="#"><loc:Text ResourceId="CurrencyPicker.SpecifyCurrency" runat="server" /></a>
</div>
</div>
</div>
<div id="CustomCurrencyHeader" class="CustomCurrencyHidden">
<div class="ClearBoth"></div>
<div class="H1Spacer"></div>
<asp:radiobutton class="CurrencyMode" id="CustomCurrencyInput" groupname="CurrencySelector" runat="server" onclick="Mscrm.CurrencyValidator.DisableBuiltInEnableCustomDiv();"></asp:radiobutton>
</div>
<div id="CustomCurrencyDiv" class="CustomCurrencyHidden">
<div class="H1Spacer"></div>
<div class="BaseCurrencyColumns">
<div>
<asp:Label ID="RequiredInputNote" runat="server"/>
</div>
</div>
<div class="H1Spacer"></div>
<div class="BaseCurrencyColumns">
<div class="FloatLeft">
<span class="RedText">*</span>
<span><loc:Text ResourceId="CurrencyPicker.CustomCurrencyCode" runat="server" /></span>
</div>
<div class="FloatRight">
<cnt:WatermarkTextBox Width="200px" id="CustomCurrencyCode" WatermarkResourceId="CurrencyPicker.CurrencyCodeWatermark"
MaxLength="150" OnBlur="Mscrm.CurrencyValidator.ValidateCurrencyCodeInput()" runat="server"/>
</div>
</div>
<div class="ClearBoth"></div>

<div class="H2Spacer"></div>
<div class="BaseCurrencyColumns">
<div class="FloatLeft">
<span class="RedText">*</span>
<span><loc:Text ResourceId="CurrencyPicker.CustomCurrencySymbol" runat="server" /></span>
</div>
<div class="FloatRight">
<cnt:WatermarkTextBox Width="200px" id="CustomCurrencySymbol" WatermarkResourceId="CurrencyPicker.CurrencySymbolWatermark"
OnBlur="Mscrm.CurrencyValidator.ValidateCurrencySymbolInput()" MaxLength="150" runat="server" />
</div>
</div>
<div class="ClearBoth"></div>

<div class="H2Spacer"></div>
<div class="BaseCurrencyColumns">
<div class="FloatLeft">
<span class="RedText">*</span>
<span><loc:Text ResourceId="CurrencyPicker.CustomCurrencyName" runat="server" /></span>
</div>
<div class="FloatRight">
<cnt:WatermarkTextBox Width="200px" id="CustomCurrencyName" WatermarkResourceId="CurrencyPicker.CurrencyNameWatermark"
OnBlur="Mscrm.CurrencyValidator.ValidateCurrencyNameInput()" MaxLength="150" runat="server" />
</div>
</div>
<div class="ClearBoth"></div>

<div class="H2Spacer"></div>
<div class="BaseCurrencyColumns">
<div class="FloatLeft">
<span class="RedText">*</span>
<span><loc:Text ResourceId="CurrencyPicker.CustomCurrencyPrecision" runat="server" /></span>
</div>
<div class="FloatRight">
<asp:ListBox id="PrecisionDropDown" width="203px" name="PrecisionDropDown" class="FormDropDown"
rows="1" runat="server" OnBlur="Mscrm.CurrencyValidator.ValidatePrecisionInput()">
</asp:ListBox>
</div>
</div>

<div class="ClearBoth"></div>
</div>
<div class="H1Spacer"></div>
<div>
<asp:Label ID="ErrorLabel" runat="server" class="errorMessageText" />
</div>

</div>
<div class="H2Spacer"></div>
<div class="CurrencyPickerButtonsContainer">
<span class="ButtonDivider">
<cnt:AppPortalButton ID="OkButton" ResourceId="CurrencyPicker.OkButton" runat="server" Primary="true" />
</span>
<cnt:AppPortalButton ID="CancelButton" ResourceId="CurrencyPicker.CancelButton" runat="server" navigateurl="/appportal/configure.aspx"/>
</div>
</div>

<div class="aspNetHidden">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
</div>
<script type="text/javascript">

function submitEvent(eventTarget, eventArgument) {
var _wForm = document.getElementById('<%=this.Form.ClientID%>');
_wForm.__EVENTTARGET.value = eventTarget;
_wForm.__EVENTARGUMENT.value = eventArgument;
_wForm.submit();
}

var regionDropDown = document.getElementById('<%=this.RegionDropDown.ClientID%>');
regionDropDown.onchange = function () {
setTimeout(function () {
submitEvent(regionDropDown.name, '');
}, 0);
};

var okButton = document.getElementById('<%=this.OkButton.ClientID%>');
okButton.onclick = function () {
if (IsCustomCurrency() && !Mscrm.CurrencyValidator.ValidateInput()) {
return false;
}

okButton.disabled = true;
submitEvent('OkButton', '');
};

</script>
</form>
</asp:content>
