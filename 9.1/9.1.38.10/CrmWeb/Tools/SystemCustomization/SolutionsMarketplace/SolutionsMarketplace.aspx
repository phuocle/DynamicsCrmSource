<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.SolutionsMarketplace"   %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
$addHandler(window, 'load', Mscrm.SolutionsMarketplace.initializePage);
</script>
<style type="text/css">
.content
{
width:100%;
height:100%;
position:absolute;
overflow:auto;
}
</style>
</head>
<body style="background-color:#FFFFFF">
<div id='contentDiv' width=100% class='content'>
<div class='navigationsubtitle subtitle marketplaceTitle'>
<loc:Text ResourceId="Tools.Customization.SolutionsMarketplace" runat="server" />
</div>

<div id="borderdiv" class='border'>
<div id="solutionTabsContainer" class='tabContainer'>
<div id="popularSolutionsContainer" class='solutionsTab selectedTab'>
<span id="popularSolutions" class='listingType'><a href="#" class='listingText'><loc:Text ResourceId="Tools.Customization.SolutionsMarketplace.Popular" runat="server" /></a></span>
</div>
<div id="newestSolutionsContainer" class='solutionsTab'>
<span id="newestSolutions" class='listingType'><a href="#" class='listingText'><loc:Text ResourceId="Tools.Customization.SolutionsMarketplace.Newest" runat="server" /></a></span>
</div>
<div id="staffPicksSolutionsContainer" class='solutionsTab'>
<span id="staffPicksSolutions" class='listingType'><a href="#" class='listingText'><loc:Text ResourceId="Tools.Customization.SolutionsMarketplace.StaffPicks" runat="server" /></a></span>
</div>
<div id="popularSolutionsMoreContainer" class='solutionsTab'>
<span class='listingType'><a id="popularSolutionsMoreLink" target="_blank" rel="noopener noreferrer" runat="server"><loc:Text ResourceId="Solutions.Marketplace.More.Link" runat="server" /></a></span>
</div>
<div id="newestSolutionsMoreContainer" class='solutionsTab'>
<span class='listingType'><a id="newestSolutionsMoreLink" target="_blank" rel="noopener noreferrer" runat="server"><loc:Text ResourceId="Solutions.Marketplace.More.Link" runat="server" /></a></span>
</div>
<div id="staffPicksSolutionsMoreContainer" class='solutionsTab'>
<span class='listingType'><a id="staffPicksSolutionsMoreLink" target="_blank" rel="noopener noreferrer" runat="server"><loc:Text ResourceId="Solutions.Marketplace.More.Link" runat="server" /></a></span>
</div>
<span class="tabbottomborder"><img width="100%" height="1px" align="middle" alt="" src="/_imgs/tools/hr.gif"/></span>
</div>
<div class='horizontalSpacer' />
<cnt:SolutionsListControl id="popularSolutionsList" runat="server" />
<cnt:SolutionsListControl id="newestSolutionsList" runat="server" />
<cnt:SolutionsListControl id="staffPicksSolutionsList" runat="server" />
</div>
</div>
<div id="warningDiv" class="warningDiv" style="display:none">
<span class="warningImage">
<img src="/_imgs/error/notif_icn_warn.png" alt=""/>
</span>
<span class="warningText">
<% if (Microsoft.Crm.Security.UserUtility.IsSystemAdministrator)
{
%>
<loc:Text ResourceId="Tools.Customization.SolutionsMarketplace.ProxyNotConfigured.Admin" runat="server" />
<%
}
else
{
%>
<loc:Text ResourceId="Tools.Customization.SolutionsMarketplace.ProxyNotConfigured.NonAdmin" runat="server" />
<%
}
%>
</span>
</div>
</body>
</html>
