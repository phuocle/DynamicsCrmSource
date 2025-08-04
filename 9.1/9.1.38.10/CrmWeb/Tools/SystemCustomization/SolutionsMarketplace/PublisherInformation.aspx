<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.PublisherInformation" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">
Sys.Application.add_load(function () {



var solutionMarketPlaceIframe = $get('IFRAME_SolutionsMarketplace', window.top.document);
if(!IsNull(solutionMarketPlaceIframe))
{
solutionMarketPlaceIframe.setAttribute('scrolling', 'no');
}
});

</script>
</head>
<body scroll="no">
<div style="width: 100%; height: 100%;" class="framebackground">
<asp:label id="PageMessage" runat="server" />
<div id="MarketplaceContent" runat="server" style="height: 100%">
<div class="publisherLabels">
<table>
<tr>
<td style="width: 110px;">
<loc:text resourceid="Tools.Customization.PublisherInformation.ProductName" runat="server" />
</td>
<td style="width: 375px" colspan="3">
<a href="#" target="_blank" rel="noopener noreferrer" id="publisherName" runat="server" style="color: blue" />
</td>
</tr>
<tr>
<td style="width: 110px">
<loc:text resourceid="Tools.Customization.PublisherInformation.Ratings" runat="server" />
</td>
<td style="width: 80px">
<asp:label id="ratings" runat="server" />
</td>
<td style="width: 100px">
<loc:text resourceid="Tools.Customization.PublisherInformation.Reviews" runat="server" />
</td>
<td style="width: 50px">
<a href="#" target="_blank" rel="noopener noreferrer" id="reviews" runat="server" style="color: blue" />
</td>
</tr>
</table>
</div>
<div class="publisherImages">
<table cellspacing="10">
<tr>
<td style="width: 150px">
<img id="certifiedForDynamics" src="/_imgs/SystemCustomization/ico_certifiedForDynamicsLogo.jpg"
alt="" runat="server" visible="false" />
</td>
<td style="width: 100px">
<img id="certificationLogo" src="/_imgs/SystemCustomization/ico_goldCertifiedPartner.jpg"
alt="" runat="server" visible="false" />
</td>
</tr>
</table>
</div>
<div class="horizontalSpacer"/>
<div class="relatedProducts" style="width: 100%">
<table cellpadding="0" cellspacing="0" id="areaForm" class="ms-crm-Form-Area" style="height: 350px">
<tr>
<td style="height: 10px">
<h3 class="ms-crm-Form">
<loc:text resourceid="Tools.Customization.PublisherInformation.Solutions" runat="server" />
</h3>
</td>
</tr>
<tr>
<td style="height: 10px">
<img alt="" src="/_imgs/tools/hr.gif" align="middle" height="1" width="100%" />
</td>
</tr>
<tr>
<td width="100%">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid id="crmGrid" runat="server" />
</div>
</td>
</tr>
</table>
</div>
</div>
</div>
</body>
</html>
