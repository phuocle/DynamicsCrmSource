<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<page id="0">

    <%
        if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadProduct, Microsoft.Crm.Application.Security.UserInformation.Current))
        {
    %>


        <page id="01">
            <title>
                <loc:Text ResourceId="NamePlural_ProdFamily" runat="server"/>
            </title>
            <icon>/_imgs/Tools/ico_product.gif</icon>
            <help>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.Families.1" runat="server"/>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.Families.2" runat="server"/>
            </help>
            <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Product %>">/_static/loading.htm</link>
            <url>
                <app:FlatHomepageUrlControl EntityLogicalName="product" XmlEncode="true" runat="server"/>
            </url>
        </page>


        <page id="03">
            <title>
                <loc:Text ResourceId="NamePlural_PriceLevel" runat="server"/>
            </title>
            <icon>/_imgs/Tools/ico_priceList.gif</icon>
            <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.PriceLevel %>">/_static/loading.htm</link>
            <url>
                <app:FlatHomepageUrlControl EntityLogicalName="pricelevel" XmlEncode="true" runat="server"/>
            </url>
            <help>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.PriceLists.1" runat="server"/>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.PriceLists.2" runat="server"/>
            </help>
        </page>


        <page id="04">
            <title>
                <loc:Text ResourceId="NamePlural_DiscType" runat="server"/>
            </title>
            <icon>/_imgs/tools/ico_discount.gif</icon>
            <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.DiscountType %>">/_static/loading.htm</link>
            <url>
                <app:FlatHomepageUrlControl EntityLogicalName="discounttype" XmlEncode="true" runat="server"/>
            </url>
            <help>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.DiscountList.1" runat="server"/>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.DiscountList.2" runat="server"/>
            </help>
        </page>


        <page id="05">
            <title>
                <loc:Text ResourceId="NamePlural_UOMSched" runat="server"/>
            </title>
            <icon>/_imgs/tools/ico_unitGroup.gif</icon>
            <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.UoMSchedule %>">/_static/loading.htm</link>
            <url>
                <app:FlatHomepageUrlControl EntityLogicalName="uomschedule" XmlEncode="true" runat="server"/>
            </url>
            <help>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.UnitGroups.1" runat="server"/>
                <loc:Text ResourceId="Web.Tools.ProductCatalog.productManager.UnitGroups.2" runat="server"/>
            </help>
        </page>


        <%
            if (ShouldProductRecommendationsBeVisible())
            {
        %>
            <page id="06">
                <title>
                    <loc:Text ResourceId="NamePlural_RecommendationModel" runat="server"/>
                </title>
                <icon>/_imgs/Tools/ProductRecommendations_48.png</icon>
                <url>../RecommendationModel/RecommendationModelRedirectionPage.aspx</url>
                <help>
                    <loc:Text ResourceId="NamePlural_RecommendationModel.Help" runat="server"/>
                </help>
            </page>
        <%
            }
        %>

    <%
        }
    %>
</page>