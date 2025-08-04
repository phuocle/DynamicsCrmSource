<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.ShowUsagePage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>





<div class="page_container">

<div class="header">
<div class="header_image"><img alt="" src="/_imgs/error/error_ico_general_1.gif"></div>
<div class="header_text"><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_message) %></div>
</div>
<div class="ms-crm-absolutePosition list_area">

<div id="divFormsHeader" class="secton_header"><loc:Text ResourceId="SystemCustomization.ShowUsagePage.Sections.Forms.Title" runat="server"/></div>
<div id="divForms" class="secton_list"></div>

<div id="divSystemViewsHeader" class="secton_header"><loc:Text ResourceId="SystemCustomization.ShowUsagePage.Sections.SystemViews.Title" runat="server"/></div>
<div id="divSystemViews" class="secton_list"></div>

<div id="divRelationshipMappingsHeader" class="secton_header"><loc:Text ResourceId="SystemCustomization.ShowUsagePage.Sections.RelationshipMappings.Title" runat="server"/></div>
<div id="divRelationshipMappings" class="secton_list"></div>

<div id="divWorkflowsHeader" class="secton_header"><loc:Text ResourceId="SystemCustomization.ShowUsagePage.Sections.Workflows.Title" runat="server"/></div>
<div id="divWorkflows" class="secton_list"></div>
</div>
</div>
