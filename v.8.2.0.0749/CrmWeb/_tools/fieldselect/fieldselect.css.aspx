<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TD.sel,
TD.currSel
{
cursor: pointer;
white-space: nowrap;
}

NOBR.sel-nobr
{
width: 90%;
}

TD.primary
{
color: #999999;
cursor: default;
}

TD.currSel
{
border-top: 1px solid WHITE;
border-bottom: 1px solid BLACK;
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right: 1px solid WHITE;
<% }
   else
   { %>
    border-left: 1px solid WHITE;
<% } %>
}

B.label
{
color: #666666;
}

DIV.divList
{
background: #ffffff;
border: 1px solid #a4abb2;
overflow-y: auto;
overflow-x: hidden;
}