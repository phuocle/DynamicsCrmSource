<!DOCTYPE html>

<%@ Page Language="C#" Inherits="Microsoft.Crm.Application.Pages.Common.ExportToExcelOnlineTour" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:appheader id="crmHeader" runat="server" />
</head>
<script>
function setSessionExcelOnlineTourCookie() {
Mscrm.Utilities.setCookie("sessionExcelOnlineTourCookie", "HideExcelOnlineTour", null);
}
function setPersistentExcelOnlineTourCookie() {
Mscrm.Utilities.setCookie("persistentExcelOnlineTourCookie", "HideExcelOnlineTour", 60 * 24 * 365 * 100);
}
function close() {
setExcelOnlineTourCookie();
closeWindow();
}
function setExcelOnlineTourCookie() {
setSessionExcelOnlineTourCookie();
if ($P_CRM("#donotShowAgain").is(':checked')) {
setPersistentExcelOnlineTourCookie();
}
}
</script>
<body class="excelOnlineTour">
<frm:DialogForm id="crmForm" runat="server">
<div id="excelOnlineTourPage">
<div id="excelOnlineTourPageHeader">
<a class="excelOnlineTourCloseButton" href="javascript:close();" id="buttonClose">
<img class="excelOnlineTourButtonImage" src="/_imgs/ExcelOnlineTour/ExcelOnlineTourClose.png" unselectable="on">
</a>
</div>
<div id="excelOnlineTourPageView">
<div class="excelOnlineTourPageContentHead">
<div class="excelOnlineTourPageContentHeadText">
<loc:Text ResourceId="Web.ExcelOnlineTourPage.PageHeader" runat="server" />
</div>
</div>
<div class="excelOnlineTourPageContent">
<div class="excelOnlineTourImg">
<img id="ExcelOnlineTourImage" src="#" runat="server" />
</div>
</div>
<div class="excelOnlineTourPageText">
<div class="excelOnlineTourPageContentText">
<loc:Text ResourceId="Web.ExcelOnlineTourPage.PageContentText1" Encoding="none" runat="server" />
<br />
<b>
<loc:Text ResourceId="Web.ExcelOnlineTourPage.Note" Encoding="none" runat="server" />
</b>
<loc:Text ResourceId="Web.ExcelOnlineTourPage.PageContentText3" Encoding="none" runat="server" />
</div>
<div class="excelOnlineTourPageContentLinkText">
<a href="http://go.microsoft.com/fwlink/?LinkID=521617" style="color: #1160b7" target="_blank">
<loc:Text ResourceId="Web.ExcelOnlineTourPage.LearnMore" Encoding="none" runat="server" />
</a>
<loc:Text ResourceId="Web.ExcelOnlineTourPage.PageContentText2" Encoding="none" runat="server" />
</div>
<div class="excelOnlineTourPageContentSmallText">
<span style="vertical-align: top;">
<input type="checkbox" id="donotShowAgain" class="ms-crm-CheckBox" />
</span>
<label for="donotShowAgain">
<loc:Text ResourceId="Web.ExcelOnlineTourPage.DontShowAgain" Encoding="none" runat="server" />
</label>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
