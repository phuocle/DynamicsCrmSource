<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DownloadOutlookClientDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
div.Desc
{
font-size: 12px;
padding-top: 10px;
padding-bottom: 18px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}
.Step
{
font-size: 21px;
font-weight: lighter;
}
.ms-crm-RefreshDialog-FirstTopButton,
.ms-crm-RefreshDialog-SecondTopButton
{
top: 15px;
}
.ms-crm-RefreshDialog-Header-Title
{
margin-top: 10px;
font-size: 28px;
}

.ms-crm-RefreshDialog-Main
{
top: 65px;
}
.ms-crm-Input-Container-ReadOnly
{
border-width: 1px;
border-color: #c6c6c6;
line-height: 20px;
}
.ms-crm-ReadOnly
{
font-size: 12px;
}
a.default-link:link, a.default-link:visited, a.default-link:active
{
color: #115FB7;
}
</style>
<script type="text/javascript">
Sys.Application.add_load(function ()
{
$get('orgUrlText').value = SERVER_URL;
var oArgs = getDialogArguments();
if (oArgs != undefined && !IsNull(oArgs))
{
$get('downloadLink').href = oArgs["downloadUrl"];
}
});
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table width="100%" height="90%" cellspacing="0" cellpadding="0">
<tr>
<td valign="top">
<div class="Step"><loc:Text ResourceId="Dialog.DownloadClient.Step1" runat="server"/></div>
<div class="Desc">
<loc:Text ResourceId="Dialog.DownloadClient.Step1Desc" runat="server"/>
<a id='downloadLink' class="default-link" href='#' target="_blank" rel="noopener noreferrer">
<span><loc:Text ResourceId="Dialog.DownloadClient.DownloadLink" runat="server"/></span>
</a>
<br/>
<loc:Text ResourceId="Dialog.DownloadClient.Step1Desc2" runat="server"/>
</div>
</td>
</tr>
<tr>
<td valign="top">
<div class="Step">
<loc:Text ResourceId="Dialog.DownloadClient.Step2" runat="server"/>
</div>
<div class="Desc"><loc:Text ResourceId="Dialog.DownloadClient.Step2Desc" runat="server"/>
<div style="margin-top: 10px;">
<ui:TextBox id="orgUrlText" runat="server"/>
</div>
</div>
</td>
</tr>
<tr>
<td valign="top">
<div class="Step"><loc:Text ResourceId="Dialog.DownloadClient.Step3" runat="server"/></div>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
