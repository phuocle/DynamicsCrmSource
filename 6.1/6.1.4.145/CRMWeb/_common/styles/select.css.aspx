<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

input.ms-crm-SelectBox
{
width: 100%;
margin: 0px;
border: 0px;
cursor: default;
padding-top: 0px;
padding-left: 0px;
padding-bottom: 0px;

<% if (!CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<%} %>
}
td.ms-crm-Select-Input-Container
{
border: 1px solid #E2E3EA;
border-top: 1px solid #ABADB3;
<% if (CrmStyles.IsRightToLeft) { %>
border-left: 0px;
<% } else { %>
border-right: 0px;
<% } %>
}

span.ms-crm-SelectBox
{
height: 21px;
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<%} %>
}

SELECT.ms-crm-SelectBox
{
width:				100%;
}

SELECT.ms-crm-SelectBox-WorkflowDesigner
{
width:				150px;
}
