<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<page id="0" onecolumn="1">
<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadProduct, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_233" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.aspx_78" runat="server"/></subtitle>
<icon>/_imgs/tools/ico_productCatalog.gif</icon>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_236" runat="server"/></help>



<page id="01">
<title><loc:Text ResourceId="NamePlural_DiscType" runat="server"/></title>
<icon>/_imgs/tools/ico_discount.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.DiscountType%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="discounttype" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.DiscountList.1" runat="server"/>
<loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.DiscountList.2" runat="server"/></help>

</page>


<page id="02">
<title><loc:Text ResourceId="NamePlural_UOMSched" runat="server"/></title>
<icon>/_imgs/tools/ico_unitGroup.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.UoMSchedule%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="uomschedule" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.UnitGroups.1" runat="server"/>
<loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.UnitGroups.2" runat="server"/></help>
</page>


<page id="03">
<title><loc:Text ResourceId="NamePlural_PriceLevel" runat="server"/></title>
<icon>/_imgs/Tools/ico_priceList.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.PriceLevel%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="pricelevel" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.PriceLists.1" runat="server"/>
<loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.PriceLists.2" runat="server"/></help>
</page>


<page id="04">
<title><loc:Text ResourceId="NamePlural_Prod" runat="server"/></title>
<icon>/_imgs/Tools/ico_product.gif</icon>
<help><loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.Products.1" runat="server"/>
<loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.Products.2" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Product%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="product" XmlEncode="true" runat="server" /></url>
</page>
<%
}
%>
</page>
