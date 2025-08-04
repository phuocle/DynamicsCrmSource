<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.SolutionInformation"   %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
Sys.Application.add_load(function () {




var parentIFrame = $get('IFRAME_SolutionsMarketplace', window.top.document);
if (!IsNull(parentIFrame)) {
parentIFrame.setAttribute('scrolling', 'no');
}
});

</script>
</head>
<body>
<div style="width:100%;height:100%" class="framebackground">
<table id="MarketplaceContent" runat="server">
<tr>
<td style="width:120px">
<loc:Text ResourceId="Tools.Customization.SolutionInformation.ProductName" runat="server" />
</td>
<td style="width:550px">
<a href="#" target="_blank" id="productName" runat="server" style="color:blue"/>
</td>
<td style="width:100px">
<loc:Text ResourceId="Tools.Customization.SolutionInformation.Ratings" runat="server" />
</td>
<td style="width:200px">
<asp:Label id="solutionRatings" runat="server" />
</td>
<td style="width:200px" rowspan=2>
<img id="certifiedForDynamics" src="/_imgs/SystemCustomization/ico_certifiedForDynamicsLogo.jpg" alt="" runat="server" visible="false"/>
</td>
<td style="width:100px" rowspan=2>
<img id="certificationLogo" src="/_imgs/SystemCustomization/ico_goldCertifiedPartner.jpg" alt="" runat="server" visible="false"/>
</td>
</tr>
<tr>
<td style="width:100px">
<loc:Text ResourceId="Tools.Customization.SolutionInformation.CompanyName" runat="server" />
</td>
<td style="width:250px">
<a href="#" target="_blank" id="publisher" runat="server" style="color:blue"/>
</td>
<td style="width:100px">
<loc:Text ResourceId="Tools.Customization.SolutionInformation.Reviews" runat="server" />
</td>
<td style="width:200px">
<a href="#" target="_blank" id="reviews" runat="server" style="color:blue"/>
</td>
</tr>
<tr>
<td colspan="6" style="padding-top:20px">
<h3 class="ms-crm-Form"><loc:Text ResourceId="Tools.Customization.SolutionInformation.SolutionsBlog" runat="server" /></h3>
</td>
</tr>
<tr><td colspan="6"><img alt="" src="/_imgs/tools/hr.gif" align="middle" height="1" width="100%" /></td></tr>
<tr>
<td colspan="6" style="padding-top:10px">
<TextArea id="content" runat="server" style="width:99%;height:200px" class="ms-crm-ReadOnly" readonly="readonly"/>
</td>
</tr>
</table>
<asp:Label id="PageMessage" runat="server" />
</div>
</body>
</html>
