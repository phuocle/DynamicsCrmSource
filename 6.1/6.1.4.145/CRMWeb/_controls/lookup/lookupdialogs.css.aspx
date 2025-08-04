<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

BODY
{
<% if (CrmStyles.IsRightToLeft) { %>
dir:    rtl;
<% } %>
background-color: #E3EFF;
}

TD.sel
{
cursor:		pointer;
}

TD.ms-crm-Dialog-Main
{
padding:	10px;
}

DIV.ms-crm-Dialog-Lookup-Objects
{
background:	#ffffff;
width:		100%;
border:		1px solid #D1CDBB;
overflow-y:	auto;
overflow-x:	hidden;
}

IMG.ms-crm-Lookup-Item
{
height:				16px;
width:				16px;
vertical-align:		middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:       2px;
margin-left:        5px;
<% } else { %>
margin-left:        2px;
margin-right:       5px;
<% } %>
}

IMG.ms-crm-Lookup-PresenceItem
{
height:				12px;
width:				12px;
vertical-align:		middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:       2px;
margin-left:        5px;
<% } else { %>
margin-left:        2px;
margin-right:       5px;
<% } %>
}


.ms-crm-Dialog-Lookup-SearchArea
{
vertical-align:		top;
<% %>
padding-left:		0px;
padding-right:		0px;
padding-bottom:		5px;
padding-top:		3px;
position: absolute;
width: 100%;
left: 0;
top: 0;
}

.ms-crm-Dialog-Lookup-ListHeaderBar
{
width: 100%;
height: 22px;
border: 1px solid #DBDAC9;
border-bottom: 1px solid #C5C1B1;
background-color: #f0f0f0;
}

table.ms-crm-Dialog-Lookup-InlineMsg
{
position: absolute;
width: 100%;
z-index: -1;
top: 55px;
}

td.ms-crm-Dialog-Lookup-InlineMsg
{
color: gray;
padding: 25px;
padding-top:0px;
}

.ms-crm-MobileRefresh .ms-crm-Dialog-Lookup-SearchArea
{
margin-top: -30px;
}

.ms-crm-MobileRefresh td.ms-crm-Lookup-SideTitle
{
display: none;
}

.ms-crm-MobileRefresh td.ms-crm-Lookup-RightBorder
{
display: none;
}

.ms-crm-MobileRefresh td.ms-crm-Lookup-BottomBorder
{
display: none;
}

.ms-crm-MobileRefresh .ms-crm-Lookup-MobileRefreshLabel
{
margin-bottom: 3px;
}

.ms-crm-MobileRefresh .ms-crm-RefreshDialog-Header-Title
{
display: none;
}

.ms-crm-MobileRefresh .ms-crm-RefreshDialog-Header-Desc
{
display: none;
}

.ms-crm-Dialog-Lookup-Header-MobileRefresh
{
display: none;
}

.ms-crm-MobileRefresh .ms-crm-Dialog-Lookup-Header-MobileRefresh
{
display: block;
font-size: 19px;
margin: 24px 5px 8px 5px;
}

.ms-crm-MobileRefresh .ms-crm-Dialog-Lookup-Header-MobileRefresh.results
{
display: block;
font-size: 13px;
margin: 12px 5px 5px 5px;
color: #10AB06;
}

.ms-crm-MobileRefresh TD.ms-crm-Dialog-Lookup-Types
{
padding-bottom: 10px;
}

.ms-crm-MobileRefresh .ms-crm-MobileRefresh-selectedResults
{
font-size: 13px;
margin: 15px 5px 1px 5px;
color: #10AB06;
font-weight: bold;
}

.tblFindGridContainer
{
padding-top: 5px;
position: absolute;
left:0px;
right:0px;
top: 0px;
}

.ms-crm-MobileRefresh .tblFindGridContainer
{
top: 40px;
}

.ms-crm-MobileRefresh SPAN.ms-crm-Lookup-DialogItem,
.ms-crm-MobileRefresh SPAN.ms-crm-Lookup-SelectedDialogItem
{
cursor: default;
}

.ms-crm-MobileRefresh ul.ms-crm-InlineLookupEdit
{
overflow-y: visible;
}
