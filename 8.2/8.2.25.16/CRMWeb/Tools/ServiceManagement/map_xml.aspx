<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage" %>

<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Partner" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<page id="0">
<title><loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_1" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_2" runat="server"/></subtitle>


<sections>
<section>
<title><loc:Text ResourceId="Web.Tools.ServiceManagement.section.map_xml.aspx_title1" runat="server"/></title>

<%	if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadQueue, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="01">
<title><loc:Text ResourceId="Web.Tools.ServiceManagement.ServiceQueus.map_xml.aspx" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_44_queue.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Queue%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="queue" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.ServiceQueus.Description.map_xml.aspx" runat="server"/></help>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.WriteTeam, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>		<page id="10">
<title><loc:Text ResourceId="Web._grid.cmds.dlg_casehierarchy.ServiceManagement_Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Parent_Child_Case_Settings_44.png</icon>
<help><loc:Text ResourceId="Web._grid.cmds.dlg_casehierarchy.ServiceManagement_Help_Title" runat="server"/></help>
<link inline="0">
var oCommand = new RemoteCommand("CustomerService", "FetchIncidentEntityFieldList");
var oResult = oCommand.Execute();
var availableFields=oResult.ReturnValue;
var _xmlOptionsDocument=XUI.Xml.LoadXml(availableFields);
var dialogArguments = {};
dialogArguments["valuesXml"] =_xmlOptionsDocument;
dialogArguments["sSelectedValues"]="";
var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_casehierarchy.aspx");
var crmDialog = new Mscrm.CrmDialog(oUrl, dialogArguments, 700, 500, null);
crmDialog.show();
</link>
<help><loc:Text ResourceId="Web._grid.cmds.dlg_casehierarchy.aspx_1" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadRoutingRule, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>

<page id="02">
<title><loc:Text ResourceId="NamePlural_RoutingRule" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Routing_44.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.RoutingRule%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="routingrule" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_5" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadConvertRule, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>

<page id="18">
<title><loc:Text ResourceId="NamePlural_AutomaticCaseCreationRule" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Email_To_Case_Settings_44.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ConvertRule%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="convertrule" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_7" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSubject, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="08">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_278" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_subjectManager.gif</icon>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.Subjects.Description.map_xml.aspx" runat="server"/></help>
<link inline="1">/_static/loading.htm</link>
<url>../subjectmanager/subjecteditor.aspx</url>
</page>
<%
}
%>


<%
if (ShouldTopicModelBeVisible())
{
%>
<page id="20">
<title><loc:Text ResourceId="Web.Tools.TopicModelTitle" runat="server"/></title>
<icon>/_imgs/Tools/AutoCaseTopic_48.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.TopicModel%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="topicmodel" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.TopicModelHelp" runat="server"/></help>
</page>
<%
}
%>

</section>
<section>
<title><loc:Text ResourceId="Web.Tools.ServiceManagement.section.map_xml.aspx_title2" runat="server"/></title>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSLA, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>

<page id="05">
<title><loc:Text ResourceId="NamePlural_SLA" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/SLA_44.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.SLA%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="sla" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_6" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEntitlement, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>

<page id="03">
<title><loc:Text ResourceId="NamePlural_Entitlement" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Entitlement_44.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Entitlement%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="entitlement" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_3" runat="server"/></help>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadCalendar, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="07">
<title><loc:Text ResourceId="SM_Holiday_Schedule_Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Holiday_Schedule_44.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Calendar%>">/_static/loading.htm</link>
<url><%=Microsoft.Crm.Application.Utility.CrmUri.Create("/_root/homepage.aspx?etc=4003&amp;pagemode=iframe&amp;oId="+Microsoft.Crm.Application.Utility.ServiceCalendarType.HolidaySchedule, Microsoft.Crm.Application.Security.UserInformation.Current).ToString()%></url>
<help><loc:Text ResourceId="SM_Holiday_Schedule" runat="server"/></help>
</page>
<%
}
%>





<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>
<page id="19">
<title><loc:Text ResourceId="SM_Service_Configuration_Settings_Link_Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Service_Settings_Configuaration_48.png</icon>
<help><loc:Text ResourceId="SM_Service_Configuration_Settings_Link_Description" runat="server"/></help>--%>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 600;dialogOptions.width = 900;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/systemsettings/dialogs/systemsettings.aspx?selectedTab=11").toString(), dialogOptions, {}, null, null);</link>
</page>
<%
}
%>





<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadCalendar, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="06">
<title><loc:Text ResourceId="SM_Customer_Service_Schedule_Link_Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Customer_Service_Schedule_44.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Calendar%>">/_static/loading.htm</link>
<url><%=Microsoft.Crm.Application.Utility.CrmUri.Create("/_root/homepage.aspx?etc=4003&amp;pagemode=iframe", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()%></url>
<help><loc:Text ResourceId="SM_Customer_Service_Schedule_Link_Description" runat="server"/></help>
</page>
<%
}
%>

</section>



<section>
<title><loc:Text ResourceId="Web.Tools.ServiceManagement.section.map_xml.aspx_title5" runat="server"/></title>
<% if (Microsoft.Crm.Application.Utility.Util.IsKnowledgebaseFeatureAvailable(Microsoft.Crm.Application.Security.UserInformation.Current) && Microsoft.Crm.Util.IsOnline() && Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEntity, Microsoft.Crm.Application.Security.UserInformation.Current) && Microsoft.Crm.Security.User.GetPrivilege(Privileges.WriteEntity, Microsoft.Crm.Application.Security.UserInformation.Current) && Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateRelationship, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="18">
<title><loc:Text ID="KnowledgeMgmtSetting" ResourceId="KnowledgeManagement.RootPage.SettingsOption.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Knowledge_Management_44.png</icon>
<link inline="0">openStdWin(Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=72ff6cc0-0e08-4d3a-aa8b-0fbb25092c4e"), null, 600, 710, null);</link>
<url></url>
<help><loc:Text ResourceId="KnowledgeManagement.RootPage.SettingsOption.Help" runat="server"/></help>
</page>


<%
if (ShouldKnowledgeSearchModelBeVisible())
{
%>
<page id="22">
<title><loc:Text ResourceId="Web.Tools.KnowledgeSearchModelTitle" runat="server"/></title>
<icon>/_imgs/Tools/KnowledgeSearchField_48.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.KnowledgeSearchModel%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="knowledgesearchmodel" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.KnowledgeSearchModelHelp" runat="server"/></help>
</page>
<%
}
}
if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.Categories, Microsoft.Crm.Application.Security.UserInformation.Current) && Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadCategory, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="23">
<title><loc:Text ID="CategoriesConfiguration" ResourceId="Web.Tools.CategoriesConfigurationTitle" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/HierarchyCategory_48.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Category%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="category" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.CategoriesConfiguration.aspx_23" runat="server"/></help>
</page>
<%
}
%>
</section>

<section>
<title><loc:Text ResourceId="Web.Tools.ServiceManagement.section.map_xml.aspx_title3" runat="server"/></title>
<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEntitlementTemplate, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>

<page id="04">
<title><loc:Text ResourceId="NamePlural_EntitlementTemplate" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/Entitlement_Template_44.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.EntitlementTemplate%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="entitlementtemplate" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ServiceManagement.map_xml.aspx_4" runat="server"/></help>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEmailTemplate, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="11">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_170" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_email_template.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Template%>">/_static/loading.htm</link>
<url>../emailtemplatemanager/home.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_173" runat="server"/></help>
</page>
<%
}
%>




<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadArticleTemplate, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="12">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_144" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_kb_template.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.KbArticleTemplate%>">/_static/loading.htm</link>
<url>../KBTemplateManager/home.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_147" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadContractTemplate, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="13">
<title><loc:Text ResourceId="NamePlural_ContractTempl" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_contract_template.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ContractTemplate%>">/_static/loading.htm</link>
<url>../ContractTypeManager/home.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_135" runat="server"/></help>
</page>
<%
}
%>

</section>
<section>
<title><loc:Text ResourceId="Web.Tools.ServiceManagement.section.map_xml.aspx_title4" runat="server"/></title>



<%
{
%>
<page id="14">
<title><loc:Text ResourceId="SM_Business_Closure_Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_business_closures.gif</icon>
<link inline="1">/_static/loading.htm</link>
<url>../business/home_bc.aspx<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode("?cType=bc&" + "oType=" + Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Microsoft.Crm.Util.SystemUser.ToString(CultureInfo.InvariantCulture)) + CurrentWrpcContext.GetWrpcTokenAsQueryString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/business/home_bc.aspx", Microsoft.Crm.Application.Security.UserInformation.Current))) %></url>
<help><loc:Text ResourceId="SM_Business_Closures" runat="server"/></help>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadService, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="09">
<title><loc:Text ResourceId="SM_Title_Services" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_service.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Service%>">/_static/loading.htm</link>
<url>../business/home_service.aspx</url>
<help><loc:Text ResourceId="SM_Services" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEquipment, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="15">
<title><loc:Text ResourceId="SM_Title_Resources" runat="server" /></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_resource.gif</icon>
<link inline="1">/_static/loading.htm</link>
<url>../business/home_resource.aspx</url>
<help><loc:Text ResourceId="SM_Resources" runat="server" /></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEquipment, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="16">
<title><loc:Text ResourceId="SM_Title_Resource_Groups" runat="server" /></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_resource_group.gif</icon>
<link inline="1">/_static/loading.htm</link>
<url>../business/home_resource_groups.aspx</url>
<help><loc:Text ResourceId="SM_Resource_Groups" runat="server" /></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSite, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="17">
<title><loc:Text ResourceId="SM_Title_Sites" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_site.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Site%>">/_static/loading.htm</link>
<url>../business/home_site.aspx</url>
<help><loc:Text ResourceId="SM_Sites" runat="server"/></help>
</page>
<%
}
%>
</section>

</sections>
</page>

