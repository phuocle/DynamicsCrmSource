<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Application.Pages.Tools.Business.Salesperson" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>

<style type="text/css">

.ms-crm-sales-Title
{
position:absolute;
top:0px;
height:50px;
left:0px;
right:0px;
}

.ms-crm-sales-MenuBar
{
position:absolute;
top:50px;
height:25px;
left:0px;
right:0px;
}

.ms-crm-sales-GridArea
{
position:absolute;
top:75px;
bottom:0px;
left:0px;
right:0px;
}


.ms-crm-sales-error
{
position:absolute;
top:50px;
bottom:0px;
left:10px;
right:0px;
}


</style>
<script type="text/javascript">
Sys.Application.add_load(HandleBackButtonIssues);
</script>
</head>

<body class="stage">
<div class="stdTable">
<div class="ms-crm-absolutePosition">
<div class="ms-crm-sales-Title">
<div class="subtitle" style="padding:5px;"><loc:Text ResourceId="Web.Tools.business.home_salesperson.aspx_83" runat="server"/></div>
<img alt="" src="/_imgs/tools/hr.gif" align="middle" height="1" width="100%" style="margin-bottom:10px;"/>
</div>
<%
if (int.Parse(period) > 0)
{
%>
<div class="ms-crm-sales-MenuBar">
<div><mnu:AppGridMenuBar id="crmMenuBar" runat="server"/></div>
</div>
<div class="ms-crm-sales-GridArea">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" />
</div>
</div>
<%
}
else
{
%>
<div class="ms-crm-sales-error ms-crm-Salesperson-Error">
<loc:Text ResourceId="Web.Tools.business.home_salesperson.aspx_103" runat="server"><loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Formatting.CrmFormatter.FormatDate(dt, CurrentUser.SystemUserId, new Microsoft.Crm.OrganizationContext(CurrentUser.OrganizationId)))%></loc:Argument></loc:Text>
</div>
<%
}
%>
</div>
</div>
</body>
</html>
