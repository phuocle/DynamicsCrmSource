<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.LanguageTranslationsImport.LanguageTranslationsImportPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head>
<title><loc:Text ResourceId="ImportTranslations_DialogTitle" runat="server"/></title>

<app:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">
function cancel()
{
closeWindow();
}
</script>
<style type="text/css">
body
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) {%>
direction: rtl;
<% } %>
}
.header
{
background-color: #ffffff;
}
.noborder
{
border: none;
}
</style>
</head>
<body scroll="no" onkeypress="if((new Sys.UI.DomEvent(event)).keyCode == 27){return closeWindow();}">
<frm:DialogForm id="crmForm" runat="server">
<span id="ImportTranslationsDialogDescription" class="ms-crm-Dialog-Description">
<loc:Text ResourceId="ImportTranslations_DialogDescription" runat="server"/>
</span>
<span id="FileSelectionSpan" style="display:block">

<iframe id="ImportTranslationsFormFrame" name="FormFrame" src="dlg_LangTranslationsImport.aspx?appSolutionId=<%=this.CurrentSolutionContext.SolutionId%>"
scrolling="no" style="height:42px; width:100%" frameborder="0">
</iframe>
<table cellspacing="0" cellpadding="0" width="100%">
<tr valign="top" style="width:100%" >
<td>
<table class="stdTable" cellspacing="0" cellpadding="3">
<tr>
<td valign="top" style="width:15%">
</td>
<td valign="top" style="width:66%">
</td>
<td id="ImportTranslationsCancelButton" class="ImportCustomizationsForm_td_BtnCancel" valign="top" align="left" style="width:19%">
<button id="btnCancel" onclick="cancel();"  class="button" style="width:90px"><loc:Text ResourceId="Button_Label_Cancel" runat="server"/></button>
</td>
</tr>
</table>
</td>
</tr>
</table>
</span>
<span id="WaitForImportSpan" style="display:none">
<table style="cursor:wait; height:70%; width:100%">
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif"/>
<br>
<loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.ImportingTranslations" Encoding="None" runat="server"/>
</td>
</tr>
</table>
</span>
<span id="ImportSuccessfulSpan" style="display:none">
<table style="height:70%; width:100%">
<tr>

<td valign="middle" class="ms-crm-Bold-Header LangTranslationsImport_td" style="height:30%">
<loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.ImportingTranslationsComplete" Encoding="None" runat="server"/>
</td>
</tr>
<tr>
<td valign="top" class="LangTranslationsImport_td">
<loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.ImportingTranslationsCompleteDetail" Encoding="None" runat="server"/>
</td>
</tr>
<tr style="height:115%">
<td id="Td" class="ImportCustomizationsForm_td_BtnClose" valign="top" style="width:19%" align="right" >
<button  id="ButtonCloseOnSuccess" onclick="cancel();"  class="button" style="width:90px"><loc:Text ResourceId="Button_Label_Close" runat="server"/></button>
</td>
</tr>

</table>
</span>
<span id="ImportFailedSpan" style="display:none">
<table style="height:70%; width:100%" cellpadding="10">
<tr>

<td valign="middle" style="height:30%" class="ms-crm-Bold-Header LangTranslationsImport_td">
<loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.ImportingTranslationsFailed" Encoding="None" runat="server"/>
</td>
</tr>
<tr>
<td valign="top" style="height:20%" class="LangTranslationsImport_td">
<loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.ImportingTranslationsFailureReason" Encoding="None" runat="server"/>
</td>
</tr>
<tr>
<td id="ErrorDescription" valign="top" class="LangTranslationsImport_td">
&nbsp;
</td>
</tr>
<tr id="Tab" style="display:none">
<td id="TabCol" valign="top" class="LangTranslationsImport_td">
&nbsp;
</td>
</tr>
<tr id="Row" style="display:none">
<td id="RowCol" valign="top" class="LangTranslationsImport_td">
&nbsp;
</td>
</tr>
</table>
</span>
</frm:DialogForm>
</body>
</html>
