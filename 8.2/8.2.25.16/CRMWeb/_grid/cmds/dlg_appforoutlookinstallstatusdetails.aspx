<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.AppForOutlookInstallStatusDetailsDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
<title>

</title>
<cnt:appheader id="crmHeader" runat="server" />
<style type="text/css">
.navTourClose {
display: inline-block;
height: 40px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
{ %>
float: left;
<% }
else
{ %>
float:right;
<% } %>
}
.navTourCloseButton {
height: 40px;
vertical-align: top;
}
.navTourCloseDiv
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
{ %>
padding-left:18px;
<% }
else
{ %>
padding-right:18px;
<% } %>
padding-top:20px;
}
.pendingDetailsDiv, .errorDetailsDiv{
padding-left: 30px !important;
padding-right: 30px !important;
padding-bottom: 0px !important;
}
.ms-crm-RefreshDialog-Warning
{
position: static !important;
}
.anchorLink{
font-family:'Segoe UI' !important;
font-size:13px !important;
color:blue !important;
text-decoration:underline !important;
cursor:pointer !important;
}
.spanText{
font-family:'Segoe UI';
font-size:13px !important;
}
.exceptionText{
font-weight:bold !important;
}
.closeButton{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
{ %>
float: left;
<% }
else
{ %>
float:right;
<% } %>
}
.textAreaText{
overflow:scroll;
}
.ms-crm-Dialog-CloseButton
{
height: 18px;
border: 1px #C6C6C6 !important;
border-style:solid !important;
width: 60px !important;
background-color: #FFFFFF !important;
line-height: 16px;
text-align: center;
cursor: pointer;
background-repeat: repeat-x;
padding-left: 5px;
padding-right: 5px;
padding-top:4px;
}
span.ms-crm-Dialog-CloseButton:hover,a.anchorText:hover
{
background-color: #B1D6F0 !important;
border:1px #C6C6C6 !important;
}
.detailsLinkDiv
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
{ %>
padding-right:20px;
<% }
else
{ %>
padding-left:20px;
<% } %>
}
.closeButtonDiv
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
{ %>
padding-left:17px;
<% }
else
{ %>
padding-right:17px;
padding-top:7px;
<% } %>
}
.anchorText
{
color:#444444 !important;
}
.closeButtonImage
{
margin-right:-12px;
padding-right: 17px;
}
.dialogTitleDiv
{
font-size:36px;
font-family:Segoe UI Light;
color:#262626;
padding-top:20px;
padding-left:30px;
padding-bottom:5px;
display:inline-block;
}
.closeButtonSpanText
{
font-family:'Segoe UI' !important;
font-size:11px !important;
}
.ms-crm-dialog-footer
{

height: 59px\9 !important;
background-color: #F8F8F8\9 !important;

background-color :#F8F8F8;
height:46px;
position: fixed;
width:100%;
bottom:0px;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.ms-crm-dialog-footer
{
height: 59px !important;
background-color: #F8F8F8 !important;
position:fixed;
width:100%;
bottom:0px;
}
</style>
<script type="text/javascript" language="JavaScript">
window.onload = function () {
var appForCrm = new Mscrm.AppsForCrm.AppsForCrmInstallStatusDetails();
appForCrm.ApplicationOnLoad();
};
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div>
<div>
<div id="errorDetailsDialogTitle" class="dialogTitleDiv" runat="server">
<span tabindex="0">
<loc:Text ResourceId="MailApp.Generic.Details" runat="server" />
</span>
</div>
<div class="navTourClose" runat="server" tabindex="0">
<a class="navTourCloseButton" href="javascript:closeWindow(true);" id="buttonClose" tabindex="-1">
<div class="navTourCloseDiv"><img class="closeButtonImage" alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" src="/_imgs/NavTourNew/icon_x-close_13x13.png" unselectable="on"/></div>
</a>
</div>
</div>
<div id="pendingDetailsBody" class="pendingDetailsDiv" runat="server">
<span tabindex="0" id="detailsSpan" class="spanText" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Grid.Column.Status.Value.Pending.Details' runat='server'/>">
<loc:Text Resourceid="MailApp.RootPage.Grid.Column.Status.Value.Pending.Details" runat="server" />
</span>
&nbsp
<a id="statusLink" href="#" class="anchorLink" runat="server">
<loc:Text Resourceid="MailApp.RootPage.Grid.Column.Status.Value.Pending.Link" runat="server" />
</a>
</div>
<div id="errorDetailsBody" class="errorDetailsDiv" runat="server">
<div>
<span tabindex="0" class="spanText" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Grid.Column.Status.Value.Issue.Details' runat='server'/>">
<loc:Text Resourceid="MailApp.RootPage.Grid.Column.Status.Value.Issue.Details" runat="server" />
</span>
</div>
<br />
<div>
<span tabindex="0" id="exceptionTypeSpan"  class="spanText exceptionText" runat="server"></span>
&nbsp
<span>:</span>
&nbsp
<span tabindex="0" id="exceptionTypeCodeSpan" class="spanText exceptionText" runat="server"></span>
</div>
<div>
<div>
<table>
<tr>
<td>
<div>
<a tabindex="0" id="helpLink" target="_blank" class="anchorLink" runat="server">
<loc:Text Resourceid="MailApp.RootPage.Grid.Column.Status.Value.Issue.Help" runat="server" />
</a>
</div>
</td>
<td>
<div class="detailsLinkDiv">
<a  tabindex="0" id="detailsLink" class="anchorLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.Details' runat='server'/>">
<loc:Text Resourceid="MailApp.Generic.Details" runat="server" />
</a>
</div>
</td>
</tr>
</table>
</div>
<div>
<textarea tabindex="0" id="exceptionDetails" rows="10" name="S1" class="spanText textAreaText" contenteditable="false" runat="server"></textarea>
</div>
</div>
</div>
<div>
<br />
<div class="ms-crm-dialog-footer">
<div class="closeButtonDiv">
<span tabindex="0" class="ms-crm-Dialog-CloseButton closeButton" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.TestExchangeServerProfile.CloseButton' runat='server'/>">
<a href="#" class="closeButtonSpanText exceptionText anchorText" target="_self" id="closeButton" tabindex="-1" onclick="closeWindow(true);">
<loc:Text Resourceid="EmailConnector.TestExchangeServerProfile.CloseButton" runat="server" /></a>
</span>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
