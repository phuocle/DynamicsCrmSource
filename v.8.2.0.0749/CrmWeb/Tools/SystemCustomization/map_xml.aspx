<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.MapXml" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<page id="0">
    <title>
        <loc:Text ResourceId="SystemCustomization.RootPage.Title" runat="server"/>
    </title>
    <showstagetitle>1</showstagetitle>
    <subtitle>
        <loc:Text ResourceId="SystemCustomization.RootPage.Subtitle" runat="server"/>
    </subtitle>


    <%
        if (SystemCustomizationSecurity.CheckSolutionPrivileges() && SystemCustomizationSecurity.IsBaseLanguage())
        {
    %>
        <page id="09">
            <title>
                <loc:Text ResourceId="Web.Tools.Solution.map_xml.DefaultSolution.Title" runat="server"/>
            </title>
            <icon>/_imgs/solution/CustomizeSystem.png</icon>
            <link inline="0">openObj(7100, '<%= SolutionConstants.DefaultSolutionId.ToString("B") %>', null, null, true, null);</link>
            <help>
                <loc:Text ResourceId="Web.Tools.Solution.map_xml.DefaultSolution.Description" runat="server"/>
            </help>
        </page>
    <%
        }
    %>


    <%
        if (SystemCustomizationSecurity.CheckPublisherPrivileges() && SystemCustomizationSecurity.IsBaseLanguage())
        {
    %>
        <page id="10">
            <title>
                <loc:Text ResourceId="Web.Tools.Publisher.map_xml.aspx_1" runat="server"/>
            </title>
            <icon>/_imgs/solution/SolutionPublisher.png</icon>
            <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Publisher %>">/_static/loading.htm</link>
            <url><%= Microsoft.Crm.Application.Utility.CrmUri.Create("/_root/HomePage.aspx?etc=7101", Microsoft.Crm.Application.Security.UserInformation.Current).ToString() %></url>
            <help>
                <loc:Text ResourceId="Web.Tools.Publisher.map_xml.aspx_2" runat="server"/>
            </help>
        </page>
    <%
        }
    %>


    <%
        if (SystemCustomizationSecurity.CheckSolutionPrivileges() && SystemCustomizationSecurity.IsBaseLanguage())
        {
    %>
        <page id="11">
            <title>
                <loc:Text ResourceId="Web.Tools.Solution.map_xml.aspx_1" runat="server"/>
            </title>
            <icon>/_imgs/solution/Solutions.png</icon>
            <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Solution %>">/_static/loading.htm</link>
            <url><%= Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(Microsoft.Crm.SystemCustomization.SCUtil.SolutionHomepageLink().ToString()) %></url>
            <help>
                <loc:Text ResourceId="Web.Tools.Solution.map_xml.aspx_2" runat="server"/>
            </help>
        </page>
    <%
        }
    %>

    <%
        if (SystemCustomizationSecurity.CheckCustomizeEntityPrivileges() &&
            !SystemCustomizationSecurity.IsBaseLanguage())
        {
    %> <note>
        <icon>/_imgs/error/err_48_2.gif</icon>
        <help>
            <loc:Text ResourceId="Web.Tools.cust.map_xml.aspx_warning" runat="server"/>
        </help>
    </note>
    <%
        }
    %>



    <%
        {
    %>
        <page id="05">
            <title>
                <loc:Text ResourceId="SystemCustomization.WsdlProgramming.Title" runat="server"/>
            </title>
            <showstagetitle>1</showstagetitle>
            <subtitle>
                <loc:Text ResourceId="SystemCustomization.WsdlProgramming.Subtitle" runat="server"/>
            </subtitle>
            <icon>/_imgs/SystemCustomization/ico_downloadWebServiceDesc.gif</icon>
            <help>
                <loc:Text ResourceId="SystemCustomization.WsdlProgramming.Help" runat="server"/>
            </help>
            <link inline="1">/_static/loading.htm</link>
            <url>WsdlProgramming/wsdlProgramming.aspx</url>
        </page>
    <%
        }
    %>


    <%
        if (FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.Theme, UserInformation.Current) && Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadTheme, Microsoft.Crm.Application.Security.UserInformation.Current))
        {
    %>
        <page id="12">
            <title>
                <loc:Text ResourceId="Web.Tools.Theme.map_xml.aspx_1" runat="server"/>
            </title>
            <showstagetitle>1</showstagetitle>
            <icon>/_imgs/solution/Theme.png</icon>
            <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Theme %>">/_static/loading.htm</link>
            <url>
                <app:FlatHomepageUrlControl EntityLogicalName="theme" XmlEncode="true" runat="server"/>
            </url>
            <help>
                <loc:Text ResourceId="Web.Tools.Theme.map_xml.aspx_2" runat="server"/>
            </help>
        </page>
    <%
        }
    %>
</page>