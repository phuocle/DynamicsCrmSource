<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

NOBR.Paging
{
width: auto;
behavior: url(<%= CrmUri.Create("/_static/_controls/paging/paging.htc", UserInformation.Current).ToString() %>);
color: #666666;
}