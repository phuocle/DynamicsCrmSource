<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

table.Tree
{
width: 100%;
height: 100%;
table-layout: fixed;
}

tr.Tree
{
height:100%;
}

td.Tree
{
height:100%;
vertical-align: top;
}

div.TreeContainer
{
overflow: auto;
padding-top: 3px;
padding-bottom: 3px;
height: 100%;
width:100%;
}

div.ScrollingTreeContainer
{
overflow: auto;
padding: 3px;
height: auto;
}

INPUT.hiddenRadio
{
position:absolute;
left:0px;
top:-500px;
width:1px;
height:1px;
overflow:hidden;
z-index:-1;
border:0px;;
}
