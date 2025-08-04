<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.EmailSignatureManagerPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>

<script language="javascript" type="text/javascript">
var IS_EMAIL_SIGNATURE_GRID = true;

Sys.Application.add_load(function () {
HandleBackButtonIssues(null);
});
</script>
</head>

<body class="stage">
<div class="ms-crm-MailMerge">
<div class="ms-crm-QuickFindRow" style = "height: 56px;">
<table class="ms-crm-QuickFindTable ms-crm-ZeroedCellSpacing ms-crm-ZeroedCellPadding">
<col width = "70%"/><col width = "30%"/>
<tr>
<td><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="Web.Tools.EmailSignaturesTitle" runat="server"/></label></td>
<td><cnt:AppQuickFind id="crmQuickFind" runat="server"/></td>
</tr>
</table>
<table class="ms-crm-QuickFindTable ms-crm-ZeroedCellSpacing ms-crm-ZeroedCellPadding">
<col /><col /><col width="80%"/>
<tr>
<td nowrap style="padding-right:5px;"><label for="crmGrid_SavedQuerySelector"><span class="ms-crm-Bold-Header"><loc:Text ResourceId="Web.View_Label_70" runat="server"/></span></label></td>
<td><cnt:AppViewSelector runat="server" id="crmViewSelector"/></td>
<td align="center"><span style="margin-left:8px;width:8px;height:30px;">&nbsp;</span></td>
</tr>
</table>
</div>
<div class="ms-crm-home-menucontainer">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>

<div class="ms-crm-home-staticgridcontainer" style = "top: 94px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="true"/>
</div>
</div>
</div>
</body>
</html>
