<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.treeList
{
background-color: #ffffff;
padding: 4px;
height: 100%;
width: 100%;
border: 1px solid #bbd4f6;
}

.treeNode
{
cursor: pointer;
height: 24px;
padding: 2px;
margin: 2px;
}

.treeNodeOn
{
background-color: #a7cdf0;
}
.treeNodeGlow
{
background-color: #c4ddff;
}

ul.treeNodeArea
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 16px;
<% } else { %>
padding-left: 16px;
<% } %>
}

ul, li
{
margin: 0;
padding: 0;
list-style: none;
}
