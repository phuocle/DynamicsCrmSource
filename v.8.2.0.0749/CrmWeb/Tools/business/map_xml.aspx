<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Partner" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<page id="0">
<title>
    <loc:Text ResourceId="Web.Tools.Business.map_xml.aspx_1" runat="server"/>
</title>
<showstagetitle>1</showstagetitle>
<subtitle>
    <loc:Text ResourceId="Web.Tools.Business.map_xml.aspx_2" runat="server"/>
</subtitle>


<%
    if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
    {
%>
    <page id="01">
        <title>
            <loc:Text ResourceId="SystemCustomization.SettingsPage.FiscalYearSettings.Title" runat="server"/>
        </title>
        <subtitle>
            <loc:Text ResourceId="SystemCustomization.SettingsPage.FiscalYearSettings.Subtitle" runat="server"/>
        </subtitle>
        <icon>/_imgs/tools/ico_fiscalYearSettings.gif</icon>
        <help>
            <loc:Text ResourceId="SystemCustomization.SettingsPage.FiscalYearSettings.Help" runat="server"/>
        </help>
        <link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 450;dialogOptions.width = 700;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/fiscalsettings/dialogs/fiscalsettings.aspx").toString(), dialogOptions, null, null, null);</link>
    </page>
<%
    }
%>


<%
    if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadMetric, Microsoft.Crm.Application.Security.UserInformation.Current))
    {
%>
    <page id="14">
        <title>
            <loc:Text ResourceId="NamePlural_Metric" runat="server"/>
        </title>
        <icon>/_imgs/Tools/ico_metric.png</icon>
        <help>
            <loc:Text ResourceId="Web.Settings.BusinessManagement.Metric" runat="server"/>
        </help>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Metric %>">/_static/loading.htm</link>
        <url>
            <app:FlatHomepageUrlControl EntityLogicalName="metric" XmlEncode="true" runat="server"/>
        </url>
    </page>
<%
    }
%>


<%
    {
%>
    <page id="02">
        <title>
            <loc:Text ResourceId="SM_Business_Closures_Title" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_business_closures.gif</icon>
        <link inline="1">/_static/loading.htm</link>
        <url>home_bc.aspx<%= Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode("?cType=bc&" + "oType=" + Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Microsoft.Crm.Util.SystemUser.ToString(CultureInfo.InvariantCulture)) + CurrentWrpcContext.GetWrpcTokenAsQueryString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/business/home_bc.aspx", Microsoft.Crm.Application.Security.UserInformation.Current))) %></url>
        <help>
            <loc:Text ResourceId="SM_Business_Closures" runat="server"/>
        </help>
    </page>
<%
    }
%>

<%
    if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEquipment, Microsoft.Crm.Application.Security.UserInformation.Current))
    {
%>
    <page id="03">
        <title>
            <loc:Text ResourceId="SM_Title_Resources" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_resource.gif</icon>
        <link inline="1">/_static/loading.htm</link>
        <url>home_resource.aspx</url>
        <help>
            <loc:Text ResourceId="SM_Resources" runat="server"/>
        </help>
    </page>
<%
    }
%>


<% if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadQueue, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="04">
        <title>
            <loc:Text ResourceId="NamePlural_Queue" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_44_queue.png</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Queue %>">/_static/loading.htm</link>
        <url>
            <app:FlatHomepageUrlControl EntityLogicalName="queue" XmlEncode="true" runat="server"/>
        </url>
        <help>
            <loc:Text ResourceId="Web.Tools.ServiceManagement.ServiceQueus.Description.map_xml.aspx" runat="server"/>
        </help>
    </page>
<%
   }
%>


<%
   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEquipment, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="05">
        <title>
            <loc:Text ResourceId="SM_Title_Resource_Groups" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_resource_group.gif</icon>

        <link inline="1">/_static/loading.htm</link>
        <url>home_resource_groups.aspx</url>
        <help>
            <loc:Text ResourceId="SM_Resource_Groups" runat="server"/>
        </help>
    </page>
<%
   }
%>


<%
   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadTerritory, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="07">
        <title>
            <loc:Text ResourceId="Web.Tools.map_xml.aspx_119" runat="server"/>
        </title>
        <icon>/_imgs/tools/ico_territory.gif</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Territory %>">/_static/loading.htm</link>
        <url>
            <app:FlatHomepageUrlControl EntityLogicalName="territory" XmlEncode="true" runat="server"/>
        </url>
        <help>
            <loc:Text ResourceId="Web.Tools.map_xml.aspx_123" runat="server"/>
        </help>
    </page>
<%
   }
%>



<%
   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadService, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="08">
        <title>
            <loc:Text ResourceId="SM_Title_Services" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_service.gif</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Service %>">/_static/loading.htm</link>
        <url>home_service.aspx</url>
        <help>
            <loc:Text ResourceId="SM_Services" runat="server"/>
        </help>
    </page>
<%
   }

   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSite, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="09">
        <title>
            <loc:Text ResourceId="SM_Title_Sites" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_site.gif</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.Site %>">/_static/loading.htm</link>
        <url>home_site.aspx</url>
        <help>
            <loc:Text ResourceId="SM_Sites" runat="server"/>
        </help>
    </page>
<%
   }
%>

<%
   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSubject, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="10">
        <title>
            <loc:Text ResourceId="Web.Tools.map_xml.aspx_278" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_subjectManager.gif</icon>
        <help>
            <loc:Text ResourceId="Web.Tools.map_xml.aspx_280" runat="server"/>
        </help>
        <link inline="1">/_static/loading.htm</link>
        <url>../subjectmanager/subjecteditor.aspx</url>
    </page>
<%
   }
%>


<%

   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadTransactionCurrency, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="11">
        <title>
            <loc:Text ResourceId="TransactionCurrencyAreaTitle" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_TransactionCurrency.gif</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.TransactionCurrency %>">/_static/loading.htm</link>
        <url>home_transactioncurrency.aspx</url>
        <help>
            <loc:Text ResourceId="TransactionCurrencyAreaDescription" runat="server"/>
        </help>
    </page>
<%
   }
%>


<%
   {
%>
    <page id="12">
        <title>
            <loc:Text ResourceId="ConnectionRole_Title" runat="server"/>
        </title>
        <icon>/_imgs/tools/ico_connectionrole.png</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.ConnectionRole %>">/_static/loading.htm</link>
        <url><%= Microsoft.Crm.Application.Utility.CrmUri.Create("/_root/homepage.aspx?etc=3231&amp;pagemode=iframe", Microsoft.Crm.Application.Security.UserInformation.Current).ToString() %></url>
        <help>
            <loc:Text ResourceId="ConnectionRole_Help" runat="server"/>
        </help>
    </page>
<%
   }
%>


<%
   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadRelationshipRole, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>
    <page id="13">
        <title>
            <loc:Text ResourceId="RelationshipRole_Title" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/ico_relationship_role_manager.gif</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.RelationshipRole %>">/_static/loading.htm</link>
        <url>../relationshiprolemanager/home.aspx</url>
        <help>
            <loc:Text ResourceId="RelationshipRole_Help" runat="server"/>
        </help>
    </page>
<%
   }
%>


<%
   if (Microsoft.Crm.Application.Utility.Util.IsLive() && Microsoft.Crm.Security.User.GetPrivilege(Privileges.ConfigureInternetMarketing, Microsoft.Crm.Application.Security.UserInformation.Current)
       && !Microsoft.Crm.Application.Utility.Util.IsOsdpOrganization() && PartnerUtility.IsOnlineMarketingFeatureEnabled() && PartnerUtility.IsPartnerSolutionCreated((string) LocatorService.Instance.GetSiteSetting(PartnerUtility.OnlineMarketingSolutionName))
       && (Microsoft.Crm.Security.Organization.GetSettings(Microsoft.Crm.Application.Security.UserInformation.Current).LanguageCode == 1033)
       )
   {
%>

    <page id="13">
        <title>
            <loc:Text ResourceId="OLM.Area.Title" runat="server"/>
        </title>
        <help>
            <loc:Text ResourceId="OLM.Area.Help" runat="server"/>
        </help>
        <icon>/_imgs/tools/ico_olm.gif</icon>
        <link inline="0">var oUrl = Mscrm.CrmUri.create('/partner/partnerredir.aspx');oUrl.get_query()['Name']='olm';oUrl.get_query()['redirId']='6';openStdWin(oUrl,null,925,725,true);</link>
    </page>


<%
   }
%>

<%
   if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadConvertRule, Microsoft.Crm.Application.Security.UserInformation.Current))
   {
%>

    <page id="18">
        <title>
            <loc:Text ResourceId="NamePlural_AutomaticCaseCreationRule" runat="server"/>
        </title>
        <showstagetitle>1</showstagetitle>
        <icon>/_imgs/tools/Email_To_Case_Settings_44.png</icon>
        <link inline="1" entitytype="<%= Microsoft.Crm.Application.Utility.EntityNames.ConvertRule %>">/_static/loading.htm</link>
        <url>
            <app:FlatHomepageUrlControl EntityLogicalName="convertrule" XmlEncode="true" runat="server"/>
        </url>
        <help>
            <loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_7" runat="server"/>
        </help>
    </page>
<%
   }
%>

</page>