<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.cellTop
{
BORDER-TOP:			silver 1px solid;
}
.cellRight
{
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-LEFT:		silver 1px solid;
<% } else { %>
BORDER-RIGHT:		silver 1px solid;
<% } %>
}
.cellLeft
{
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-RIGHT:		silver 1px solid;
<% } else { %>
BORDER-LEFT:		silver 1px solid;
<% } %>
}
.cellBottom
{
BORDER-BOTTOM:		silver 1px solid;
}
.cellTopRight
{
BORDER-TOP:			silver 1px solid;
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-LEFT:		silver 1px solid;
<% } else { %>
BORDER-RIGHT:		silver 1px solid;
<% } %>
}
.cellTopLeft
{
BORDER-TOP:			silver 1px solid;
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-RIGHT:		silver 1px solid;
<% } else { %>
BORDER-LEFT:		silver 1px solid;
<% } %>
}
.cellTopLeftRight
{
BORDER-TOP:			silver 1px solid;
BORDER-LEFT:		silver 1px solid;
BORDER-RIGHT:		silver 1px solid;
}
.cellBottomRight
{
BORDER-BOTTOM:		silver 1px solid;
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-LEFT:		silver 1px solid;
<% } else { %>
BORDER-RIGHT:		silver 1px solid;
<% } %>
}
.cellBottomLeft
{
BORDER-BOTTOM:		silver 1px solid;
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-RIGHT:		silver 1px solid;
<% } else { %>
BORDER-LEFT:		silver 1px solid;
<% } %>
}
.cellBottomLeftRight
{
BORDER-BOTTOM:		silver 1px solid;
BORDER-LEFT:		silver 1px solid;
BORDER-RIGHT:		silver 1px solid;
}
.cellTopBottom
{
BORDER-TOP:			silver 1px solid;
BORDER-BOTTOM:		silver 1px solid;
}
.cellTopBottomRight
{
BORDER-TOP:			silver 1px solid;
BORDER-BOTTOM:		silver 1px solid;
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-LEFT:		silver 1px solid;
<% } else { %>
BORDER-RIGHT:		silver 1px solid;
<% } %>
}
.cellTopBottomLeft
{
BORDER-TOP:			silver 1px solid;
BORDER-BOTTOM:		silver 1px solid;
<% if (CrmStyles.IsRightToLeft) { %>
BORDER-RIGHT:		silver 1px solid;
<% } else { %>
BORDER-LEFT:		silver 1px solid;
<% } %>
}
.cellTopBottomLeftRight
{
BORDER:				silver 1px solid;
}

TR.effortCellTr
{
BACKGROUND-COLOR:	#F8F8F8;
}
TR.breakCellTr
{
BACKGROUND-COLOR:	#EEEEEE;
}
TD.effortTd,
TD.ruleTypeTd
{
width:				80px;
}
TD.endTd,
TD.startTd
{
width:				100px;

}
TD.actionsTd
{
width:				auto;
}
.columnHeaderTd
{
border-bottom:		1px solid #C5C1B1;
background-color:	#f0f0f0;
overflow:			hidden;
text-overflow:		ellipsis;
}
.columnHeaderLeftRightTd
{
border-right:		1px solid #DBDAC9;
border-left:		1px solid #DBDAC9;
border-bottom:		1px solid #C5C1B1;
overflow:			hidden;
text-overflow:		ellipsis;
background-color:	#f0f0f0;
}
.columnHeaderLeftTd
{
<% if (CrmStyles.IsRightToLeft) { %>
border-right:		1px solid #DBDAC9;
<% } else { %>
border-left:		1px solid #DBDAC9;
<% } %>
border-bottom:		1px solid #C5C1B1;
overflow:			hidden;
text-overflow:		ellipsis;
background-color:	#f0f0f0;
}
TD.refreshButtonTd
{
width:				16px;
cursor:				pointer;
}
DIV.headerFooterTr
{
height:				21px;
}
TABLE.TimeSheetFooterTable,
TABLE.TimeSheetHeaderTable,
TABLE.TimeSheetRowsTable
{
width:				100%;
border-collapse:	collapse;
}
DIV.TimeSheetDiv
{
width:				100%;
height:				100%;
overflow-x:			hidden;
}
BUTTON.actionButton
{
width:				160px;
}
.RefreshDialog-Button_Override
{
margin-top: 0px !important;
}

IMG.menuButton
{
width:				18px;
height:				19px;
}