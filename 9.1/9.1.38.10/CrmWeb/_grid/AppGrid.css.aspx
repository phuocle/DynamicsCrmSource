<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>



.ms-crm-hidden-container-error
{
position: fixed;
z-index: 1;
white-space: normal;
display: none;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } %>
<% else { %>
text-align: left;
<% } %>
}

.ms-crm-Form-SubGrid-Layout-Lite,
.ms-crm-Form-SubGrid-Layout-Lite .ms-crm-List-Message-Lite
{
outline: none;
}


.ms-crm-ListControl
{
border-width: 1px;
border-style: solid;
border-top-width: 0px;
background-color:#FFFFFF;
}
.ms-crm-ListControl-Lite
{
border-width: 0px;
}
table.ms-crm-ListControl
{
width: 100%;
height: 100%;
table-layout: fixed;
background-color:#FFFFFF;
table-layout: fixed;
}

div.ms-crm-ListControl
{
position:absolute;
left:0px;
right:0px;
bottom:0px;
top:0px;
}
div.ms-crm-ListControl-Ex
{
width:100%;
}
div.ms-crm-grid-body
{
position:absolute;
top:0px;
left:0px;
right:0px;
}

div.ms-crm-grid-databodycontainer
{
position:absolute;
left:0px;
right:0px;
}

.ms-crm-MobileRefresh div.ms-crm-grid-databodycontainer
{
bottom: 0px !important;
}

.ms-crm-List-Data
{
table-layout: fixed;
width: 100%;
}

thead
{
color: #FFFFFF;
}

td.ms-crm-List-NonDataCell input.ms-crm-RowCheckBox
{
border: 0px !important;
clip: rect(0 0 0 0) !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
}

.ms-crm-ListArea
{
height: 100%;
width: 100%;
table-layout: fixed;
background-color:#FFFFFF;
}

.ms-crm-ListArea-FixedRow
{
width: 100%;
}

.ms-crm-ListArea-FixedRow-Lite
{
width: 100%;
}

.ms-crm-ListAreaEx
{
height: 100%;
width: 100%;
table-layout: fixed;
background-color:#FFFFFF;
border-top-style: solid;
border-top-width: 1px;
}
.ms-crm-List-DataBody
{
HEIGHT:100%;
}
.ms-crm-List-DataBody-Ex
{
HEIGHT:100%;
}

.ms-crm-List-DataArea
{
OVERFLOW-X:auto;
OVERFLOW-Y:auto;
width:100%;
height:100%;
}

.ms-crm-List-DataArea-Lite
{
OVERFLOW-X:scroll;
OVERFLOW-Y:auto;
width:100%;
height:100%;
}

.ms-crm-List-DataArea-Ex
{
OVERFLOW-X:auto;
width:100%;
}


.ms-crm-List-RefreshButton
{
table-layout:		fixed;
height:				18px;
width:				16px;
right:				0px;
top:				4px;
display:			inline;
z-index:			1;
<% if (CrmStyles.IsRightToLeft) { %>
position: relative;
float: left;
<% } else { %>
position: absolute;
<% } %>
}

.ms-crm-List-FilterButton,
.ms-crm-List-FilterButton-Hover,
.ms-crm-List-FilterButton-Selected,
.ms-crm-List-FilterButton-Selected-Hover
{
table-layout:		fixed;
height:				20px;
width:				20px;
position:			absolute;
display:			inline;
z-index:			1;
cursor:				default;
<% if (!this.IsVisualRefreshEnabled) { %>
top:				2px;
<% if (CrmStyles.IsRightToLeft) { %>
right: auto;
left: 30px;
<% } else { %>
right: 30px;
left: auto;

<% } %>
<%} else { %>
padding : 0px 5px 0px 5px;
top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
right: auto;
left: 30px;
margin-left: 0px;
<% } else { %>
right: 30px;
left: auto;
margin-right: 0px;
<% } } %>
}

.ms-crm-List-FilterButton-Hover
{
cursor: pointer;
background-color: #d7ebf9;
}

.ms-crm-List-QuickAddButton-FlyOut
{
background-color: white;
border-style:solid;
border-color:black;
}

.ms-crm-List-ErrorStatusIcon-FlyOut
{
background-color: white;
margin: 0px;
position: relative;
}

.ms-crm-List-ErrorStatusIcon
{
table-layout:		fixed;
height:				18px;
width:				16px;
z-index:			1;
display:			none;
cursor:				pointer;
<% if (this.IsVisualRefreshEnabled)
{ %>
padding-top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 2px;
<% } else { %>
padding-right: 2px;
<% } %>
<% } %>
}

img.ms-crm-add-button-icon
{
height:	16px;
width:	16px;
}
img.ms-crm-warning-icon
{
height:	16px;
width:	16px;
}
img.Pagination-Previous-Icon-Padding
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 20px;
margin-right: 0px;
<% } else { %>
margin-left: 0px;
margin-right: 20px;
<% } %>
}
img.Pagination-Next-Icon-Padding
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 0px;
margin-right: 20px;
<% } else { %>
margin-left: 20px;
margin-right: 0px;
<% } %>
}

div.ms-crm-List-StatusBar,
div.ms-crm-grid-footer
{
position:absolute;
bottom:0px;
left:0px;
right:0px;
}

div.ms-crm-grid-footer-Ex,
div.ms-crm-grid-footer
{
height:25px;
}

.ms-crm-Anchor-SideStrip
{
<% if (Request.Browser.Browser != "IE") { %>
display: block;
height: 100%;
<% } %>
}

.ms-crm-TableCell-Max
{
height: 100%;
}

.ms-crm-List-Paging
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
}

a.toolbarbutton,
a.toolbarbutton:active img,
a.toolbarbutton:hover img,
a.toolbarbutton:link img,
a.toolbarbutton:visited img
{
text-decoration: none;
border: none;
}

td.ms-crm-List-Sortable
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } %>
overflow: hidden;
text-overflow: ellipsis;
}

td.ms-crm-List-Sortable-Lite
{
word-wrap: normal;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } %>
overflow: hidden;
text-overflow: ellipsis;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

img.ms-crm-List-Sortable
{
vertical-align: middle;
visibility: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

img.ms-crm-Image-Margin
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 4px;
<% } %>
<% else { %>
margin-left: 4px;
<% } %>
}

table.ms-crm-List-UnSortable,
table.ms-crm-List-Sortable
{
height:100%;
width:100%;
table-layout: fixed;
}
table.ms-crm-List-Sortable,
a.ms-crm-List-Sortable
{
cursor:pointer;
<% if (this.IsVisualRefreshEnabled)
{ %>
position: relative;
<%} %>
}

a.ms-crm-List-Sortable
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
display: block;
text-overflow:ellipsis;
overflow:hidden;
}

a.ms-crm-List-Sortable > nobr.ms-crm-DataCell
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

label.ms-crm-List-Sortable
{
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } %>
}

.ms-crm-List-Header
{
width: 100%;
height: 21px;
table-layout: fixed;
border-top-width:1px;
border-top-style:solid;
border-bottom-width:1px;
border-bottom-style:solid;
word-wrap:normal;
}

.ms-crm-List-Header-Lite
{
width: 100%;
<% if (this.IsVisualRefreshEnabled)
{ %>
height: 30px;
border-top-width: 0px;
<% } else { %>
height: 22px;
border-top-width: 1px;
<% } %>
table-layout: fixed;
border-bottom-color: #d6d6d6;
border-bottom-style: solid;
border-bottom-width: 1px;
border-top-color: #d6d6d6;
border-top-style: solid;
}

div.ms-crm-grid-contextualActionsContainer,
div.ms-crm-grid-titlecontainer
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
<% } else { %>
text-align:right;
<% } %>
z-index: 1;
}

div.ms-crm-grid-titlecontainer
{
position: relative;
<% if (this.IsVisualRefreshEnabled)
{%>
border-bottom:1px solid #d6d6d6;
<%}%>
}

a.ms-crm-ImageStrip-addButtonDisable
{
cursor: default;
}

a.ms-crm-ImageStrip-addButton
{
cursor: pointer;
}

a.ms-crm-ImageStrip-openassociatedgridviewDisable
{
cursor: default;
}

a.ms-crm-ImageStrip-openassociatedgridview
{
cursor: pointer;
}

div.ms-crm-Grid-DataArea-VerticalScroll, .ms-crm-Grid-DataArea-NoVerticalScroll
{
overflow-y:hidden;
}

div.ms-crm-Grid-DataArea-VerticalScroll:hover
{
overflow-y:auto;
}

div.ms-crm-Grid-ContextualButtonsContainer
{
position:absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<% } %>
}

div.ms-crm-contextButton a
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:10px;
<% } else { %>
margin-left:10px;
<% } %>
}

.ms-crm-List-StatusBar-Label
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

.ms-crm-List-StatusBar-Label-Padding
{
padding-left:22px;
padding-right:22px;
padding-top:9px;
padding-bottom:9px;
}

.ms-crm-List-StatusBar-Label-Padding-For-Alphabet
{
padding-left:22px;
padding-right:22px;
}

.ms-crm-List-Title
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px;
padding-left: 2px;
<% } else { %>
padding-left: 8px;
padding-right: 2px;
<% } %>
}

tr.ms-crm-list-TitleFilter
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px;
<% } else { %>
padding-left: 8px;
<% } %>

height:30px;
}

.ms-crm-list-Separator-line
{
height: 1px;
}

.ms-crm-List-MultilineRow,
.ms-crm-List-Row,
.ms-crm-List-Row-Lite
{
padding-top: 1px;
margin-bottom: 1px;
border-top: none;
}

.ms-crm-List-Row
{
height : 28px;
}

.ms-crm-List-Row-Lite
{
border-bottom: none;
height: 28px;
}

TR.ms-crm-List-Row-Lite > TD
{
padding-top: 1px;
padding-bottom: 1px;
border-top-width: 0px;
border-bottom-width: 0px;
border-top-style: none;
border-bottom-style: none;
height: 28px;
}

<% if (this.IsVisualRefreshEnabled) { %>
TR.ms-crm-List-Row-Lite > TD.ms-crm-List-DeleteContainer
{
padding-left: 0px;
padding-right: 0px;
}
TR.ms-crm-List-SelectedRow-Lite > TD.ms-crm-List-DeleteContainer
{
padding-left: 0px;
padding-right: 0px;
}
<%}%>

.ms-crm-List-MultilineRow
{
vertical-align: top;
}

DIV.ms-crm-Grid-TitleText
{
text-overflow: ellipsis;
overflow: hidden;
display: inline-block;
vertical-align: top;
color: #000000;
width:100%;
position:relative;
}

DIV.ms-crm-Grid-Title
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% if (!this.IsVisualRefreshEnabled)
{ %>
padding-right:2px;
<% } %>
<% } else { %>
text-align: left;
<% if (!this.IsVisualRefreshEnabled)
{ %>
padding-left:2px;
<% } %>
<% } %>
padding-bottom: 5px;
font-size: 12px;
font-weight: bold;
*display: inline;
zoom: 1;
text-overflow: ellipsis;
white-space:nowrap;
word-wrap:normal;
}

.ms-crm-Inline-Lookup-Subgrid
{
display: none;
}

.ms-crm-Inline-Lookup-Subgrid.ms-crm-Inline-DynamicGutter.ui-dialog-content.ui-widget-content.ui-QuickAddFlyout-Content[targetentitytype="opportunityproduct"],
.ms-crm-Inline-Lookup-Subgrid.ms-crm-Inline-DynamicGutter.ui-dialog-content.ui-widget-content.ui-QuickAddFlyout-Content[targetentitytype="quotedetail"],
.ms-crm-Inline-Lookup-Subgrid.ms-crm-Inline-DynamicGutter.ui-dialog-content.ui-widget-content.ui-QuickAddFlyout-Content[targetentitytype="salesorderdetail"],
.ms-crm-Inline-Lookup-Subgrid.ms-crm-Inline-DynamicGutter.ui-dialog-content.ui-widget-content.ui-QuickAddFlyout-Content[targetentitytype="invoicedetail"]
{
width: 30% !important;
}

INPUT.ms-crm-HeaderCheckBox,
INPUT.ms-crm-RowCheckBox
{
width: 16px;
height: 1.2em;
cursor: pointer;
margin: 1px 0px;
padding: 0px;
visibility: hidden;
position: absolute;
}

img.ms-crm-grid-checkbox-image,
img.ms-crm-grid-checkbox-image-header
{
cursor : pointer;
}

img.ms-crm-grid-checkbox-image-header
{
<% if (this.IsVisualRefreshEnabled)
{ %>
padding-right: 0px;
padding-left: 0px;
<% } else {%>
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
<% } else { %>
padding-left: 2px;
<% } %>
<% } %>
<% if (this.IsVisualRefreshEnabled)
{ %>
position: relative;
<% } %>
}

img.ms-crm-grid-checkbox-image-header-Associated-Lite
{
cursor : pointer;
}

img.ms-crm-grid-checkbox-image-header-Lite
{
display: none;
}

#DlgHdBodyContainer img.ms-crm-grid-checkbox-image-header-Lite
{
display: block;
}

img.ms-crm-grid-checkbox-image,
img.ms-crm-grid-checkbox-image-Associated-Lite
{
visibility: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 60%;
<% } %>
<% else { %>
margin-left: 60%;
<% } %>
}

img.ms-crm-grid-checkbox-image-Lite
{
display: none;
}

INPUT.ms-crm-HeaderCheckBox-Lite,
INPUT.ms-crm-RowCheckBox-Lite,
INPUT.ms-crm-RowCheckBox-Associated-Lite
{
width: 1px;
z-index: -1000;
position: absolute;
top: -9000px;
}

#Grid1_ccDiv .ms-crm-List-Data .ms-crm-List-Row-Lite > td:nth-child(1)
{
visibility:hidden;
}

INPUT.ms-crm-HeaderCheckBox
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 1px;
margin-left: 0px;
<% } else { %>
margin-right: 0px;
margin-left: 1px;
<% } %>
}

.ms-crm-List-DataCell-DropDown-Chevron
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<%} %>
top: 2px;
}

.ms-crm-List-DataCell,
.ms-crm-List-NonDataCell,
.ms-crm-List-DataCell-Lite,
ms-crm-List-DataCell-Associated-Lite,
.ms-crm-List-DeleteContainer
{
border-top: none;
border-left: none;
border-right: none;
border-bottom: none;
}

TD.ms-crm-List-DataCell
{
overflow: hidden;
text-overflow: ellipsis;
padding-top: 0px;
padding-bottom: 0px;
height: 36px;
}

TD.ms-crm-List-DataCell-Lite,
TD.ms-crm-List-DataCell-Associated-Lite
{
border-bottom: none;
border-top: none;
word-wrap: normal;
font-size: 14px;
line-height:19px;
overflow: hidden;
text-overflow: ellipsis;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-left:5px;
<% } else { %>
text-align: left;
padding-right:5px;
<% } %>
}

TD.ms-crm-List-RoleDataCell-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 0px;
<% } else { %>
padding-right: 0px;
<% } %>
}

td.ms-crm-List-Disabled
{
border-bottom: 1px solid #dddddd;
cursor:default;
color: #999999;
}

.ms-crm-List-ResizeBar
{
cursor:		col-resize;
}

div.ms-crm-List-StatusBar,
div.ms-crm-List-StatusBar-Ex
{
height: 22px;
}

div.ms-crm-List-StatusBar-Lite
{
height: 22px;
position: absolute;
bottom: 0px;
}
div.ms-crm-List-StatusBar-Ex-Lite
{
height : 22px;
visibility: hidden;
}

tr.ms-crm-List-StatusBar
{
height: 22px;
}

table.ms-crm-List-StatusBar
{
height: 22px;
width: 100%;
<% if (!this.IsVisualRefreshEnabled)
{ %>
table-layout: fixed;
<% } %>
border-top-width: 1px;
border-top-style: solid;
}

table.ms-crm-List-StatusBar-Height
{
height: 40px;
background:#f3f3f3;
}

.ms-crm-List-Index
{
width: 100%;
cursor: pointer;
text-align: center;
table-layout: fixed;
border-top-width: 1px;
border-top-style: solid;
height: 28px;
padding-top: 4px;
white-space: nowrap;
}

.ms-crm-List-Index-Padding
{
padding-top: 0px;
}
.ms-crm-List-Index > tbody > tr > td
{
overflow-x: hidden;
}

.ms-crm-List-Message
{
table-layout: fixed;
padding:1;
width:100%;
height:100%;
text-align:center;
COLOR: #999999;
}

.ms-crm-List-Message-Lite,
.ms-crm-List-Message-Associated-Lite
{
table-layout: fixed;
padding:1;
width:100%;
height:100%;
color: #444444;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
vertical-align:	top;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-Message-Lite #GridLoadingMessage
{
vertical-align: middle;
}

.ms-crm-List-MessageText,
.ms-crm-List-MessageText-Lite,
.ms-crm-List-MessageText-Associated-Lite
{
top: 49%;
width: 100%;
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion == 7) { %>
height: 99%;
<%} %>
}

.ms-crm-List-MessageText-Lite,
.ms-crm-List-MessageText-Associated-Lite
{
color:#444444;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right: 2px;
<% } else { %>
padding-left: 2px;
text-align: left;
<% } %>
vertical-align:	top;
padding-top: 8px;
}

td.ms-crm-List-ErrorMessageLite
{
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
width: inherit;
word-wrap: normal;
}

td#GridLoadingMessage
{
width: 100%;
}

A.ms-crm-List-LoadOnDemand
{
cursor: pointer;
text-decoration: underline;
color: #0000ff;
text-align: center;
}

.ms-crm-List-PreviewLabel,
TD.previewData
{
vertical-align:	top;
overflow:		hidden;
text-overflow:	ellipsis;
}
.ms-crm-List-Spacer
{
width: 2px;
}

TD.previewDataDatetime,
TD.previewDataNum
{
vertical-align:	top;
overflow:		hidden;
text-overflow:	ellipsis;
direction:		ltr;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<%} %>
}

SPAN.previewDirSpan
{
direction:		ltr;
}

.ms-crm-List-PreviewRow
{
padding:	5px;
height:		auto;
}

.ms-crm-List-Preview
{
width: 100%;
border-left: 1px solid #cccccc;
border-right: 1px solid #cccccc;
border-bottom: 1px solid #999999;
}

IMG.ms-crm-PreviewImage
{
cursor: pointer;
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

.ms-crm-List-PreviewCell
{
cursor: default;
padding-bottom: 2px;
border-bottom: 1px solid #dddddd;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 17px 2px 0px;
<% } else { %>
padding: 0px 0px 2px 17px;
<% } %>
}

TR.ms-crm-List-HoveredMultilineRow,
TR.ms-crm-List-SelectedMultilineRow,
TR.ms-crm-List-HoveredRow,
TR.ms-crm-List-SelectedRow,
TR.ms-crm-List-SelectedRow-Lite
{
padding-top: 1px;
color: #000000;
border-bottom: 1px solid #DBDEE1;
border-top: none;
}

.ms-crm-List-Row,
TR.ms-crm-List-HoveredRow,
TR.ms-crm-List-SelectedRow
{
<% if (this.IsVisualRefreshEnabled)
{ %>
height: 36px;
border-bottom: 1px solid #E0E0E0;
<% } else { %>
height : 28px;
<% } %>
}

.ms-crm-List-Row-header-spacer
{
opacity: 0.5;
width: 3px;
height: 21px;
border: 1px solid #4A4A4A;
cursor: col-resize;
}

TR.ms-crm-List-SelectedRow-Lite
{
height: 28px;
border-bottom: none;
}

TR.ms-crm-List-SelectedRow-Lite > TD
{
height: 28px;
}

TR.ms-crm-List-SelectedRow-Lite-HighContrast > TD
{
padding-top: 0px;
padding-bottom: 0px;
border-top-width: 1px;
border-bottom-width: 1px;
border-top-style: solid;
border-bottom-style: solid;
}

TR.ms-crm-List-HoveredMultilineRow,
TR.ms-crm-List-SelectedMultilineRow
{
vertical-align: top;
}

NOBR.ms-crm-List-RowLine a ul
{
display: table-cell;
}

NOBR.ms-crm-List-RowLine
{
width: 100%;
overflow: hidden;
text-overflow: ellipsis;
height: 18px;
}

A.ms-crm-subgrid-suggestion-link:hover,
TR.ms-crm-List-Row-Lite A.ms-crm-subgrid-suggestion-link,
TR.ms-crm-List-Row A.ms-crm-subgrid-add-link, SPAN.ms-crm-list-ErrorLink
{
color: #0000FF;
text-decoration:underline;
}

A.ms-crm-List-Link:hover,
A.ms-crm-gridurl:hover,
TR.ms-crm-List-SelectedRow A.ms-crm-list-Link,
TR.ms-crm-List-SelectedRow-Lite A.ms-crm-list-Link,
TR.ms-crm-List-SelectedMultilineRow A.ms-crm-list-Link,
TR.ms-crm-List-SelectedRow SPAN.gridLui,
TR.ms-crm-List-SelectedRow-Lite SPAN.gridLui,
TR.ms-crm-List-SelectedMultilineRow SPAN.gridLui,
SPAN.ms-crm-list-ErrorLink
{
text-decoration:	underline;
cursor:				pointer;
}

A.ms-crm-List-Link
{
color:#0078D7 !important;
}

TR.ms-crm-List-SelectedRow-Lite A.ms-crm-subgrid-suggestion-link,
TR.ms-crm-List-SelectedRow-Lite A.ms-crm-subgrid-add-link
{
color: #0000FF;
text-decoration:underline;
visibility:visible;
}

A.ms-crm-subgrid-add-link
{
visibility:hidden;
}

A.ms-crm-subgrid-add-link-selected
{
font-size: 12px;
font-weight: bold;
}


.mobile A.ms-crm-subgrid-add-link
{
visibility:visible;
}

.mobile TR.ms-crm-List-Row-Lite A.ms-crm-subgrid-add-link
{
color: #0000FF;
text-decoration:underline;
}

TR.ms-crm-List-Row:hover A.ms-crm-subgrid-add-link,
TR.ms-crm-List-Row-Lite:hover A.ms-crm-subgrid-add-link
{
color: #0000FF;
text-decoration:underline;
visibility:visible;
}

IMG.ms-crm-Lookup-Item
{
vertical-align:		middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
margin-left:		5px;
<% } else { %>
margin-left:		2px;
margin-right:		5px;
<% } %>
}

IMG.ms-crm-Lookup-PresenceItem
{
height:				12px;
width:				12px;
vertical-align:		top;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
margin-left:		5px;
<% } else { %>
margin-left:		2px;
margin-right:		5px;
<% } %>
}

.ms-crm-Grid-DataColumn-ImgItem
{
top:                2px;
display: inline-block;
height:				16px;
width:				16px;
position: relative;
<% if (CrmStyles.IsRightToLeft) { %>
float: 			  right;
margin-left: 		10px;
<% } else { %>
float:			   left;
margin-right: 		10px;
<% } %>
}

.ms-crm-List-Link IMG.ms-crm-Lookup-PresenceItem
{
margin-top:			4px;
}

col.ms-crm-List-NonDataColumnHeader
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:1px;
<% } else { %>
padding-left:1px;
<% } %>
}

nobr.num,
nobr.datetime
{
direction: ltr;
}

table.ms-crm-Grid-Control-Bar
{
display:table;
padding-right: 40px;
}

.ms-crm-Grid-Control-Bar td:first-child
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
<% } else { %>
padding-left:5px;
<% } %>
}


.ms-crm-home-menucontainer
{
height:26px;
}
.ms-crm-home-querycontainer
{
height:34px;
}

.ms-crm-home-staticgridcontainer
{
top:60px;
position:absolute;
left:0px;
right:0px;
bottom:0px;
}

.inner-grid-cellPadding
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

.floatingCell-suggestions-removeBorder
{
border-style:hidden;
}

td.ms-crm-List-Empty-Cell
{
background-color : #FFF;
line-height:1px;
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion == 7) { %>
height: 1%;
<%}else{ %>
height:1px;
<%} %>
}

.gridcellpadding
{
display:block;
width:auto;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
<% } else { %>
padding-left: 2px;
<% } %>
height:19px;
line-height:19px;
padding-top: 4px;
padding-bottom: 4px;
}

.gridcellpadding span{
color:#505050;
}

.ms-crm-InlineTabContainer img.ms-crm-grid-checkbox-image-Lite {
display: block;
visibility: hidden;
}

a.ms-crm-List-DeleteButton
{
top: -2px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
position: absolute;
margin-top: 0px;
}

div.ms-crm-List-DeleteContainer-Div
{
width: 100%;
position: relative;
height: 16px;
}


Table.Totals-Section
{
table-layout:fixed !important;
}
Table.Totals-Section .ms-crm-ReadField-Normal
{
font-weight:700;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left !important;
<% } else { %>
text-align:right !important;
<% } %>
}

Table.Totals-Section .ms-crm-InlineEditLabel span
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

Table.Totals-Section .ms-crm-InlineEditLabel .ms-crm-Inline-RequiredLevel
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

Table.Totals-Section .ms-crm-Inline-Value
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left !important;
float:none;
<% } else { %>
text-align:right !important;
float:none;
<% } %>
}

Table.Totals-Section .ms-crm-Inline-EditHintState
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:13px;
<% } else { %>
margin-left: 13px;
<% } %>
}
Table.Totals-Section .ms-crm-Inline-GradientMask
{
display:none !important;
}

Table.Totals-Section TR:nth-child(2) TD,
Table.Totals-Section TR:nth-child(5) TD,
Table.Totals-Section TR:nth-child(8) TD
{
border-top:1px solid #D6D6D6;
border-bottom:1px solid #D6D6D6;
background: #F5F5F5;
}

span.ms-crm-GridButtons
{
position: absolute;
z-index: 1;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
top: 2px;
<% if (!this.IsVisualRefreshEnabled)
{ %>
height: 20px;
<%} else  {%>
height: 35px;
width : 60px;
<%} %>
background-color: #ffffff !important;
}

Table.Totals-Section TR:nth-child(3) TD .ms-crm-Inline-Value:before
{
content:"{"
}

Table.Totals-Section TR:nth-child(3) TD .ms-crm-Inline-Value:after
{
content:"}";
<% if (Request.Browser.Browser == "IE") { %>
position: static;
<% } else { %>
position: initial;
<% } %>
}

Table.Totals-Section TR:nth-child(3) TD .ms-crm-Inline-Value.ms-crm-Inline-NoValue:before
{
content:""
}

Table.Totals-Section TR:nth-child(3) TD .ms-crm-Inline-Value.ms-crm-Inline-NoValue:after
{
content:""
}



.ms-crm-MobileRefresh .ms-crm-List-Data
{
border-spacing:0 !important;
border-collapse:collapse !important;
table-layout: auto !important;
}

.ms-crm-MobileRefresh #crmGrid_gridBodyContainer
{
margin-top: -24px;
}

.ms-crm-MobileRefresh td.ms-crm-List-CheckBoxColumn.ms-crm-List-NonDataCell
{
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 8px;
<% } else { %>
padding-right: 8px;
<% } %>
width: 1px;
padding-top: 5px;
}

.ms-crm-MobileRefresh .ms-crm-List-CheckBoxColumn.ms-crm-List-NonDataCell INPUT.ms-crm-RowCheckBox
{
width: auto;
height: auto;
margin: 0;
visibility: visible !important;
position: static;
}

.ms-crm-MobileRefresh td.gridCell
{
padding-left: 0px;
padding-right: 0px;
padding-top: 5px;
padding-bottom: 0px;
word-wrap: break-word;
vertical-align: top;
border-width: 0;
font-size: 26px;
display:block;
text-decoration:none;
color: #000000;
line-height: 29px;
width: 99%;
}

.ms-crm-MobileRefresh .gridCell.lastColumn
{
font-size: 14px;
color: #666666;
}

.ms-crm-MobileRefresh .ms-crm-List-StatusBar
{
display: none;
}

.ms-crm-MobileRefresh tr.ms-crm-List-SelectedRow
{
background-color: white;
border-bottom: 0;
}

.ms-crm-MobileRefresh .tblFindGridContainer .ms-crm-List-Data tr.ms-crm-List-Row,
.ms-crm-MobileRefresh .tblFindGridContainer .ms-crm-List-Data tr.ms-crm-List-SelectedRow
{
height: auto;
}

.ms-crm-MobileRefresh img.ms-crm-grid-checkbox-image
{
display: none;
}

td.emptyColumn
{
display: none;
}



body.ms-crm-AreaPage
{
overflow-y: auto;
overflow-x: hidden;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite
{
position: fixed;
height: 94%;
width: 100%;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
overflow-y: auto;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-absolutePosition
{
position: relative;
height: 90%;
<% if (!this.IsVisualRefreshEnabled) { %>
top: 0px !important;
<% } %>
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-IE7-Height-Fix-Dummy-Container
{
position: relative;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-CC-grid-All-4-LR
{
position: relative;
height: 100%;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-ListControl-Lite
{
position: relative;
height: 100%;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-body
{
position: relative;
height: 93%;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-BodyContainer
{
position: relative;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-databodycontainer
{
<% if (!this.IsVisualRefreshEnabled) { %>
position: relative;
height: 80%;
min-height: 50px;
top: 0px !important;
bottom: 0px !important;
<% } %>
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-DataBody
{
position: relative;
overflow-y: auto;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-DataArea-Lite
{
position: relative;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-StatusBar-Lite
{
position: relative;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-footer
{
position: relative;
}

div.openAssociatedGridViewImageButton
{
position: absolute;
top: 1px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 8px;
<% } else { %>
right: 8px;
<% } %>
}

div.ms-crm-grid-Title-Data-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
<% } else { %>
padding-left: 2px;
<% } %>
}

TD.ms-crm-List-NonDataCell
{
padding-top: 0px;
padding-bottom: 0px;
height: 28px;
}

<% if (this.IsVisualRefreshEnabled) { %>

.ms-crm-grid-databodycontainer-Ex .ms-crm-IE7-Height-Fix-Dummy-Container-Ex .ms-crm-List-DataBody-Ex .ms-crm-List-DataAreaEx-Lite{
padding-bottom:0px !important;
}

#baseRecordsGrid div.ms-crm-List-StatusBar{
height:0px !important;
}

#baseRecordsGrid span.ms-crm-GridButtons{
background-color:transparent !important;
}

.KBSearch_div_ViewArticle .ms-crm-ListControl,
.ms-crm-CC-grid-All-4-LR .ms-crm-ListControl{
bottom:0px !important;
}

img.ms-crm-grid-checkbox-image,
img.ms-crm-grid-checkbox-image-Associated-Lite
{
visibility: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30%;
<% } %>
<% else { %>
margin-left: 30%;
<% } %>
}

table.ms-crm-List-StatusBar
{
border-bottom-style: solid;
border-bottom-width: 1px;
}

.ms-crm-Form-Main-Container-Print .ms-crm-List-DataAreaEx .ms-crm-List-Message-Lite
{
width:auto;
}

div.ms-crm-Grid-ContextualButtonsContainer
{
<% if (Request.Browser.Browser == "Firefox" ){ %>
top: 2px;
<% } else { %>
top: 0px;
<% } %>
}

.workflowTemplatePage_templateGrid .ms-crm-ListControl
{
bottom: 0px !important;
}

div.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print .ms-crm-List-DataAreaEx-Lite table.ms-crm-List-Data TR.ms-crm-List-Row-Lite TD
{
padding-left:15px;
padding-right:15px;
}

div.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print .ms-crm-List-DataAreaEx-Lite table.ms-crm-List-Data .ms-crm-List-SelectedRow-Lite TD
{
padding-left:15px;
padding-right:15px;
}

div.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print .ms-crm-List-DataAreaEx-Lite table.ms-crm-List-Data tr td.ms-crm-List-NonDataCell
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:1px;
<% } else { %>
padding-left:1px;
<% } %>
}

div.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print .ms-crm-List-DataAreaEx-Lite table.ms-crm-List-Data tr td.ms-crm-List-DeleteContainer
{
padding-left:0px;
padding-right:0px;
}

.ms-crm-metaphor-appgridmenubar-hr
{
border:none;
}

.ms-crm-metaphor-grid-container
{
background-color: #F1F1F1 !important;
}

.ms-crm-metaphor-grid-header
{
position: relative;
height: 150px;
background-color: #FFFFFF !important;
}

.ms-crm-metaphor-grid-header-bg-color
{
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
}

.ms-crm-grid-content-container
{
position: relative;
height: calc(100% - 30px);
width: calc(100% - 30px);
margin: 15px;
}

.ms-crm-metaphor-grid-container #homepageTableCell
{
margin-left: 30px !important;
margin-right: 30px !important;
margin-bottom: 0px !important;
top: 80px !important;
background-color: white;
}

.ms-crm-metaphor-grid-notification-bar #homepageTableCell
{
top: 120px !important;
}

.ms-crm-metaphor-grid-container #crmGrid_findCriteriaImg
{
background-color: white;
}
.ms-crm-metaphor-grid-header .homepage_table, .ms-crm-metaphor-grid-container .ms-crm-appgridmenubar
{
position: absolute;
top: 0;
left: 0;
padding-top: 40px;
padding-left: 30px;
border: none;
}

.ms-crm-metaphor-grid-header .homepage_table
{
z-index: 1;
padding-top: 20px;
}

.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-metaphor-appgridmenubar-hr,
.ms-crm-metaphor-grid-multiRowPresent .ms-crm-metaphor-appgridmenubar-hr
{
border: none;
z-index: 1;
height: 2px;
margin: 0px;
position: absolute;
color: #dedede;
background-color: #dedede;
top: 105px;
width: calc(100% - 90px);
<% if (CrmStyles.IsRightToLeft) { %>
right: 45px;
<% } %>
<% else { %>
left: 45px;
<% } %>
}

.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-appgridmenubar,
.ms-crm-metaphor-grid-multiRowPresent .ms-crm-list-TitleFilter
{
padding: 0px !important;
z-index: 1;
top: 114px !important;
width: calc(100% - 90px) !important;
<% if (CrmStyles.IsRightToLeft) { %>
right: 45px !important;
<% } %>
<% else { %>
left: 45px !important;
<% } %>
}

.ms-crm-metaphor-grid-multiRowPresent .ms-crm-list-TitleFilter
{
position: absolute;
}

.ms-crm-metaphor-grid-multiRowPresent .ms-crm-list-TitleFilter td:first-child
{
display: block;
}

.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-appgridmenubar .ms-crm-GridActionBar
{
background-image: none;
}

.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-grid-content-container,
.ms-crm-metaphor-grid-multiRowPresent .ms-crm-grid-content-container
{
margin-top: 0px;
top: 70px;
height: calc(100% - 85px);
}

.ms-crm-metaphor-grid-container span.ms-crm-ViewSelector-title-associated-lite, .ms-crm-metaphor-grid-container span.ms-crm-View-Name-associated-lite, .ms-crm-metaphor-grid-container span.ms-crm-ViewSelector-title-Document
{
font-size: 24px;
color: #505050 !important;
line-height: 32px;
}

.ms-crm-metaphor-grid-container .ms-crm-grid-BodyContainer .ms-crm-ListControl
{
height: 100%;
}

.ms-crm-metaphor-grid-container #crmQuickFindTD
{
display: inline-block;
width: 343px;
padding-top: 3px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.ms-crm-metaphor-grid-container A.ms-crm-FindButton
{
width: 30px;
height: 30px;
}
.ms-crm-metaphor-grid-container A.ms-crm-View-Name:hover
{
background-color: rgba(255, 255, 255, 0.3) !important;
}

.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title
{
width: 320px;
}

.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-header-MenuItem-Title,
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Title
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%>;
}

.ms-crm-grid-metaphor-dialog Li.ms-crm-VS-header-MenuItem,
.ms-crm-grid-metaphor-dialog A.ms-crm-VS-header-MenuItem-Anchor,
.ms-crm-grid-metaphor-dialog span.ms-crm-VS-header-MenuItem-Sep
{
height: 30px !important;
}
.ms-crm-grid-metaphor-dialog LI.ms-crm-VS-MenuItem,
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-header-MenuItem-Icon,
.ms-crm-grid-metaphor-dialog span.ms-crm-VS-MenuItem-Sep,
.ms-crm-grid-metaphor-dialog span.ms-crm-VS-MenuItem-Sep-Hover
{
height: 28px !important;
}
.ms-crm-grid-metaphor-dialog A.ms-crm-VS-MenuItem-Anchor
{
height: 26px !important;
}
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Rest,
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Hover,
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Selected,
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-header-MenuItem-Title-Rest,
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-header-MenuItem-Title-Hover,
.ms-crm-grid-metaphor-dialog IMG.ms-crm-VS-MenuItem-Icon
{
padding-top: 4px !important;
padding-bottom: 4px !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 1px !important;
<% } else { %>
padding-right: 1px !important;
<% } %>
}
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Hover
{
<% if (CrmStyles.IsRightToLeft) { %>

padding-left: 0px !important;
border-left-width : 1px !important;
border-left-style : solid !important;
<% } else { %>

padding-right: 0px !important;
border-right-width : 1px !important;
border-right-style : solid !important;
<% } %>
border-color: #EFEFEF !important;
}
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Icon.ms-crm-VS-MenuItem-Icon-Hover
{
<% if (CrmStyles.IsRightToLeft) { %>

padding-right: 0px !important;
border-right-width : 1px !important;
border-right-style : solid !important;
<% } else { %>

padding-left: 0px !important;
border-left-width : 1px !important;
border-left-style : solid !important;
<% } %>
border-color: #EFEFEF !important;
}
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Icon.ms-crm-VS-MenuItem-Icon-Hover,
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Sep.ms-crm-VS-MenuItem-Sep-Hover,
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Hover
{

padding-top: 3px !important;
border-top-width : 1px !important;
border-top-style : solid !important;
border-top-color: #EFEFEF !important;

padding-bottom: 3px !important;
border-bottom-width : 1px !important;
border-bottom-style : solid! important;
border-bottom-color: #EFEFEF !important;
}
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Sep.ms-crm-VS-MenuItem-Sep-Hover
{
height: 20px !important;
}
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Icon,
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Icon-Hover
{

height: 20px !important;
padding-top: 4px !important;
padding-bottom: 4px !important;
border: none;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 1px !important;
<% } else { %>
padding-left: 1px !important;
<% } %>
}

@media screen and (min-width: 501px) and (max-width: 1024px)
{
.ms-crm-metaphor-grid-header
{
height: 80px;
}

.ms-crm-metaphor-grid-header .homepage_table
{
padding-top : 10px !important;
}
}

@media screen and (max-width: 500px)
{
.ms-crm-metaphor-grid-header
{
height: 250px;
}
}

@media screen and (min-width: 1921px)
{
.ms-crm-metaphor-grid-header .homepage_table
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: calc(2.3% - 30px) !important;
<% } else { %>
padding-left: calc(2.3% - 30px) !important;
<% } %>
margin-left: calc((100% - 1860px)/2) !important;
margin-right: calc((100% - 1860px)/2) !important;
width: 1860px !important;
z-index: 1;
}
.ms-crm-metaphor-grid-container #homepageTableCell
{
margin-left: calc((100% - 1860px)/2) !important;
margin-right: calc((100% - 1860px)/2) !important;
width: 1860px !important;
}
.ms-crm-metaphor-appgridmenubar-hr,
.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-appgridmenubar,
.ms-crm-metaphor-grid-multiRowPresent .ms-crm-list-TitleFilter
{
width: 1830px !important;
<% if (CrmStyles.IsRightToLeft) { %>
right: calc(((100% - 1860px)/2) + 15px) !important;
<% } %>
<% else { %>
left: calc(((100% - 1860px)/2) + 15px) !important;
<% } %>
}

}

@media screen and (max-width: 768px)
{
.ms-crm-metaphor-grid-container .ms-crm-List-Title
{
<% if (Request.Browser.Browser == "IE") { %>
display: table-row;
<% } else { %>
display : inline-flex;
<% } %>
}
.ms-crm-metaphor-grid-container .ms-crm-List-Title > td
{
display: inline-block;
}
.ms-crm-metaphor-grid-container #homepageTableCell
{
top: 59px !important;
}
.ms-crm-metaphor-appgridmenubar-hr
{
top: 145px !important;
}
.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-appgridmenubar,
.ms-crm-metaphor-grid-multiRowPresent .ms-crm-list-TitleFilter
{
top: 154px !important;
}
.ms-crm-metaphor-grid-notification-bar #homepageTableCell
{
top: 160px !important;
}
.ms-crm-metaphor-grid-container #crmQuickFindTD
{
<% if (Request.Browser.Browser != "IE") { %>
padding-top: 10px;
float: none;
<% } else {%>
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
margin-top:-32px;
<% } %>
}
}

@media screen and (max-width: 750px)
{
.ms-crm-metaphor-grid-notification-bar #homepageTableCell
{
top: 173px !important;
}
}

DIV.ms-crm-Grid-TitleText
{
<% if (CrmStyles.IsRightToLeft) { %>
padding: 10px 15px 5px 0px;
<% } else { %>
padding: 10px 0px 5px 15px;
<% } %>





width:calc(100% - 51px);
}

DIV#opportunityproductsGrid_titleWithErrors .ms-crm-Grid-TitleText,
DIV#quotedetailsGrid_titleWithErrors .ms-crm-Grid-TitleText,
DIV#invoicedetailsGrid_titleWithErrors .ms-crm-Grid-TitleText,
DIV#salesorderdetailsGrid_titleWithErrors .ms-crm-Grid-TitleText
{
width : 75% !important;
}

DIV.ms-crm-Grid-Title-Background-color
{
width:100%;
}
table.ms-crm-List-Header-Lite > tbody > tr > td
{
padding:0px;
}

.ms-crm-List-Sortable-Lite a.ms-crm-List-Sortable
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
display: block;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-ListControl-Lite table.ms-crm-List-Header-Lite table.ms-crm-List-UnSortable td.ms-crm-List-Sortable-Lite,
.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-ListControl-Lite table.ms-crm-List-Header-Lite table.ms-crm-List-Sortable td.ms-crm-List-Sortable-Lite
{
padding-left: 10px;
padding-right: 10px;
}

.ms-crm-ListArea .ms-crm-grid-BodyContainer .ms-crm-ListArea-FixedRow-Lite,
table.ms-crm-List-Header-Lite th.ms-crm-List-Sortable table.ms-crm-List-Sortable tr:first-child,
table.ms-crm-List-Data tr.ms-crm-List-Row-Lite,
table.ms-crm-List-Data tr.ms-crm-List-Row-Lite:first-child,
table.ms-crm-List-Header-Lite th table.ms-crm-List-UnSortable tr:first-child
{
height:28px;
}

table.ms-crm-List-Header-Lite th.ms-crm-List-Sortable table.ms-crm-List-Sortable td.ms-crm-List-Sortable-Lite,
table.ms-crm-List-Header-Lite th.ms-crm-List-Sortable table.ms-crm-List-UnSortable td.ms-crm-List-Sortable-Lite
{
padding-top:0px;
padding-bottom:0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

TABLE.ms-crm-List-Header-Lite TH TABLE TD.ms-crm-List-Sortable-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left : 0px !important;
<% } else { %>
padding-right : 0px !important;
<% } %>
}

TABLE.ms-crm-List-Header-Lite TH TABLE TD.ms-crm-List-Sortable-Lite nobr.ms-crm-DataCell-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 0px !important;
<% } else { %>
padding-left : 0px !important;
<% } %>
}

td.ms-crm-List-DataCell-Lite
{
padding-top:7px;
padding-bottom:7px;
}

table.ms-crm-List-Data TR.ms-crm-List-Row-Lite .ms-crm-CurrencyTable-Refresh td
{
padding: 0px !important;
}

table.ms-crm-List-Data TR.ms-crm-List-Row-Lite TD
{
padding-top: 7px;
padding-bottom:7px;
height:16px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px !important;
<% } else { %>
padding-left: 10px !important;
<% } %>
}

table.ms-crm-List-Data TR.ms-crm-List-Row-Lite TD.ms-crm-List-DeleteContainer
{
padding-left: 0px !important;
padding-right: 0px !important;
}

.ms-crm-List-DataCell-Lite .gridcellpadding
{
height: 17px;
line-height: 17px;
padding-top: 5px;
padding-bottom: 5px;
}

.ms-crm-Grid-TitleText table tr td
{
padding:0px;
}
.ms-crm-Grid-Title .ms-crm-Grid-TitleText table tr:first-child
{
height:20px;
}

.ms-crm-Grid-Title .ms-crm-Grid-TitleText table tr table tr td a.ms-crm-View-Name,
.ms-crm-Grid-Title .ms-crm-Grid-TitleText table tr table tr td div
{
height:20px;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-Grid-Title .ms-crm-Grid-TitleText
{
<% if (CrmStyles.IsRightToLeft) { %>
padding: 5px 15px 5px 0px;
<% } else { %>
padding: 5px 0px 5px 15px;
<% } %>




width:calc(100% - 15px) !important;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-Grid-Title .ms-crm-Grid-TitleText table tr table tr td div
{
height: 40px !important;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-Grid-Title .ms-crm-Grid-TitleText table tr table tr td a.ms-crm-View-Name
{
height: 32px !important;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite table.ms-crm-List-Header-Lite
{
height: 40px;
margin-top: 30px;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-databodycontainer
{
margin-top: 10px;
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-MessageText-Associated-Lite .ms-crm-grid-img-text
{
color: #757575;
font-size:<%= WebUtility.GetFontResourceForStyle("General.18px.font_size") %>;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight:300;
line-height:20px;
width:99%;
}

.ms-crm-metaphor-dashboard-container .ms-crm-List-Title
{
padding-left: 0px;
padding-right: 0px;
}

.ms-crm-grid-img
{
position: absolute;
left: CALC(50% - 32px);
top: CALC(50% - 32px);
}

.ms-crm-grid-img-text
{
position: absolute;
top: CALC(50% + 32px);
width: 100%;
margin-top: 28px;
text-align: center;
}

.ms-crm-grid-img-subgrid
{
position : absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right : CALC(50% - 32px);
<% } else { %>
left : CALC(50% - 32px);
<% } %>
top: CALC(50% - 66px);
}

.ms-crm-grid-img-subgrid-text
{
position: absolute;
top: CALC(50% - 4px);
width: CALC(100% - 28px);
text-align:center;
margin-top: 10px;
word-spacing: 3px;
}

div.ms-crm-Field-Data-Print[rowspan="5"]  .ms-crm-grid-img-subgrid-text,
div.ms-crm-Field-Data-Print[rowspan="4"]  .ms-crm-grid-img-subgrid-text,
div.ms-crm-Field-Data-Print[rowspan="3"]  .ms-crm-grid-img-subgrid-text,
div.ms-crm-Field-Data-Print[rowspan="1"]  .ms-crm-grid-img-subgrid-text
{
top: CALC(50% - 28px);
margin-top: 10px;
}
div.ms-crm-Field-Data-Print[rowspan="2"]  .ms-crm-grid-img-subgrid-text
{
top: CALC(50% + 37px);
margin-top: 10px;
}

div.ms-crm-Field-Data-Print[rowspan="8"]  .ms-crm-grid-img-subgrid-text,
div.ms-crm-Field-Data-Print[rowspan="7"]  .ms-crm-grid-img-subgrid-text
{
top:calc(50% - 18px);
}

div.ms-crm-Field-Data-Print[rowspan="6"]  .ms-crm-grid-img-subgrid-text
{
top:calc(50% - 2px);
}

div.ms-crm-Field-Data-Print[rowspan="6"]  .ms-crm-grid-img-subgrid img
{
position:relative;
top:20px;
}

div[id="marketing_lists_grid_d"] .ms-crm-grid-img-subgrid
{
top: CALC(50% - 46px);
}

div[id="marketing_lists_grid_d"] .ms-crm-grid-img-subgrid-text
{
top: CALC(50% + 16px);
}

@media screen and (max-width: 4000px) and (min-width: 2048px)
{
.ms-crm-Field-Data-Print[rowspan="4"] .ms-crm-Field-Data-Print .ms-crm-grid-img-subgrid-text
{
max-height : 32px;
}
}

@media screen and (max-width: 6000px) and (min-width: 4000px)
{
.ms-crm-Field-Data-Print[rowspan="4"] .ms-crm-Field-Data-Print .ms-crm-grid-img-subgrid-text {
z-index:-1;
}
}

.ms-crm-List-MessageText
{
vertical-align: middle;
}

.ms-crm-List-MessageText > img
{
margin-bottom:28px;
}

.ms-crm-List-MessageText-Lite
{
text-align: center;
}

.ms-crm-List-MessageText-Lite div
{
font-size: 14px;
color: #9B9B9B;
}

img.ms-crm-openAssociatedGridView-button-icon
{
height:	16px;
width:	16px;
}

div.ms-crm-contextButton
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left : 2px;
<% } else { %>
float: right;
margin-right: 2px;
<% } %>
}

div.openAssociatedGridViewImageButton
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}

div.openAssociatedGridViewImageButton
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px !important;
<% } else { %>
padding-left: 10px !important;
<% } %>
}

div.ms-crm-grid-Title-Data-Lite
{
color:#9B9B9B;
font-size: 14px;
}

TD.ms-crm-List-NonDataCell:nth-child(1)
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 12px;
<% } else { %>
padding-left: 12px;
<% } %>
}

td.ms-crm-Field-Data-Print span[type="subgrid"]
{
margin-left:-15px;
margin-right:-15px;
}

div.ms-crm-Field-Data-Print[rowspan="5"]  .ms-crm-grid-img-subgrid,
div.ms-crm-Field-Data-Print[rowspan="4"]  .ms-crm-grid-img-subgrid,
div.ms-crm-Field-Data-Print[rowspan="3"]  .ms-crm-grid-img-subgrid,
div.ms-crm-Field-Data-Print[rowspan="2"]  .ms-crm-grid-img-subgrid,
div.ms-crm-Field-Data-Print[rowspan="1"]  .ms-crm-grid-img-subgrid
{
display:none;
}

div.ms-crm-Field-Data-Print[rowspan="8"]  .ms-crm-grid-img-subgrid img,
div.ms-crm-Field-Data-Print[rowspan="7"]  .ms-crm-grid-img-subgrid img,
div.ms-crm-Field-Data-Print[rowspan="6"]  .ms-crm-grid-img-subgrid img
{
height:28px;
width:28px;
}

div.ms-crm-Field-Data-Print[rowspan="8"]  .ms-crm-grid-img-subgrid,
div.ms-crm-Field-Data-Print[rowspan="7"]  .ms-crm-grid-img-subgrid,
div.ms-crm-Field-Data-Print[rowspan="6"]  .ms-crm-grid-img-subgrid
{
left: CALC(50% - 14px);
top:calc(50% - 46px);
}

.ms-crm-Field-Data-Print .ms-crm-grid-img-subgrid-text {
overflow: hidden;
position: absolute;
max-height : 40px;
}

.ms-crm-IE7-Height-Fix-Dummy-Container-PrintForm .ms-crm-Field-Data-Print .ms-crm-grid-img-subgrid-text {
overflow: hidden;
position: relative;
max-height : 39px;
}

.ms-crm-Field-Data-Print .ms-crm-grid-img-subgrid-text:before {
content: '...';
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 1px;
<% } else { %>
right: 1px;
<% } %>
bottom: 0;
background: #FFFFFF;
}

.ms-crm-Field-Data-Print .ms-crm-grid-img-subgrid-text:after {
content: '';
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 1px;
<% } else { %>
right: 1px;
<% } %>
width: 9px;
height: 16px;
margin-top: 3px;
background: #FFFFFF;
}

table.ms-crm-List-Data tr.ms-crm-List-SelectedRow-Lite:first-child {
height:28px;
}

table.ms-crm-List-Data TR.ms-crm-List-SelectedRow-Lite TD {
padding-top: 7px;
padding-bottom:7px;
height:16px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:12px;
<% } else { %>
padding-left:12px;
<% } %>
}

@-moz-document url-prefix() {
.ms-crm-grid-img-subgrid-text
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 15px;
<% } else { %>
left: 15px;
<% } %>
}
}

.ms-crm-metaphor-grid-multiRowPresent .ms-crm-list-TitleFilter .home_cases_td_Label{
position:relative;
top:5px;
}

.ms-crm-List-Message
{
position: relative;
min-height: 200px;
overflow-x: hidden;
overflow-y: hidden;
}

.ms-crm-List-RefreshButton
{
height : 20px;
width : 20px;
margin-right: 0px;
margin-left: 0px;
top: 12px;
<% if (this.IsVisualRefreshEnabled)
{ %>
padding-right: 5px;
padding-left: 5px;
<%} %>
}

.ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-viewSelectorContainer-associatedGrid-lite .ms-crm-grid-titlecontainer
{
border-bottom:none;
}



body.ms-crm-AreaPage
{

overflow: hidden !important;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-viewSelectorContainer-associatedGrid-lite .ms-crm-grid-titlecontainer
{

background: rgba(0,0,0,0);
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite
{

position: relative;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
height: calc(100% - 30px);
width: calc(100% - 30px);
margin: 15px;
padding-top: 0px !important;
overflow: hidden;
display: flex;
flex-direction: column;
}
@media (max-height:768px) and (max-width:1366px)
{
.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite{
height:100%;
margin: 2px 15px;
}
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-absolutePosition
{

position: absolute;
height: auto;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-ListControl-Lite
{

position: static;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-viewSelectorContainer-associatedGrid-lite .ms-crm-Grid-Title .ms-crm-Grid-TitleText
{

padding: 0px;
width: 100% !important;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-viewSelectorContainer-associatedGrid-lite .ms-crm-Grid-Title .ms-crm-Grid-TitleText .ms-crm-ViewSelector-title-associated-lite
{

line-height: 26px !important;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-quickFindContainer-associatedGrid-lite
{

padding-top: 0px !important;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-BodyContainer .ms-crm-grid-body
{

position: absolute;
height: initial;

border-width: 1px;
border-style: solid;
border-top-width: 0px;
background-color: #FFFFFF;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-databodycontainer
{

margin-top: 0px !important;
top: 40px !important;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-databodycontainer .ms-crm-List-DataBody .ms-crm-List-DataArea-Lite
{

position: initial;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-databodycontainer table.ms-crm-List-Message-Associated-Lite
{

height: 95%;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-databodycontainer .ms-crm-List-MessageText-Associated-Lite
{

width: 99%;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-filterContainer-associatedGrid-lite
{

max-width: none !important;
margin-top: 0px !important;
margin-bottom: 0px !important;
padding-top: 4px;
padding-bottom: 8px;
border-top: 1px solid;
border-top-color: #D6D6D6;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite #associatedGridRibbon
{

border-top: 1px solid;
border-top-color: #D6D6D6;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-filterContainer-associatedGrid-lite TABLE#AppGridFilterContainer
{

max-width: 540px;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-filterContainer-associatedGrid-lite TABLE#AppGridFilterContainer SPAN.ms-crm-Filter-Label
{

color: #505050;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite table.ms-crm-List-Header-Lite
{

margin-top: 0px;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-StatusBar-Lite
{

position: absolute;
width: 100%;
}

@media
(max-device-width: 800px)
and (orientation: portrait) {
span.ms-crm-GridButtons
{
top:0px;
}
}

@media
(max-device-width: 1280px)
and (orientation: landscape) {
span.ms-crm-GridButtons
{
top:0px;
}
}

.GanttControlFrame_div_AppGrid .ms-crm-ListArea .ms-crm-grid-BodyContainer
{
height : 26px !important;
}

.GanttControlFrame_div_AppGrid .ms-crm-ListArea .ms-crm-grid-databodycontainer
{
top : 26px !important;
bottom : 26px !important;
}

.GanttControlFrame_div_AppGrid .ms-crm-ListArea .ms-crm-List-DataArea .ms-crm-List-Row,
.GanttControlFrame_div_AppGrid .ms-crm-ListArea .ms-crm-List-DataArea TR.ms-crm-List-HoveredRow,
.GanttControlFrame_div_AppGrid .ms-crm-ListArea .ms-crm-List-DataArea TR.ms-crm-List-SelectedRow,
.GanttControlFrame_div_AppGrid .ms-crm-ListArea .ms-crm-List-DataArea TR TD.ms-crm-List-DataCell
{
height : 26px !important;
}



div#crmGridControl_divDataArea.ms-crm-List-DataArea
{
position:absolute;
}

.ms-crm-ListArea-FixedRow-Lite
{
width: auto !important;
}

table.ms-crm-List-Message-Lite tr td.ms-crm-List-NonDataCell,
table.ms-crm-List-Data tr td.ms-crm-List-NonDataCell
{
padding:0px !important;
}

div[gridid="ResourceGroupsGrid"] table.ms-crm-List-Data tr td.ms-crm-List-NonDataCell{
padding:0 12px
}

DIV.ms-crm-grid-databodycontainer-Ex TABLE.ms-crm-List-Data TR.ms-crm-List-Row-Lite TD.ms-crm-List-DataCell-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:0px !important;
<% } else { %>
padding-right:0px !important;
<% } %>
}

@media screen and (max-width: 768px) {

.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-appgridmenubar, .ms-crm-metaphor-grid-multiRowPresent .ms-crm-list-TitleFilter {
top: 63px !important;
}

.ms-crm-metaphor-appgridmenubar-hr {
top: 97px !important;
}

.ms-crm-metaphor-appgridmenubar-enabled .ms-crm-grid-content-container, .ms-crm-metaphor-grid-multiRowPresent .ms-crm-grid-content-container {
margin-top: 0px;
top: 45px;
height: calc(100% - 42px);
}
}

<% } else {%>
div.ms-crm-Grid-ContextualButtonsContainer
{
top:0px;
}
.ms-crm-List-MessageText
{
text-align: center;
}

div.ms-crm-grid-Title-Data-Lite
{
margin-top:8px;
color:#8b8b8b;
}

div.ms-crm-contextButton
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left : 4px;
<% } else { %>
float: right;
margin-right: 4px;
<% } %>

}

img.ms-crm-openAssociatedGridView-button-icon
{
height:	13px;
width:	13px;
}

<% } %>



.BreadCrumbControl
{
display: inline-block;
white-space: nowrap;
height: 30px;
margin-top: -3px;
}

.ms-crm-breadcrumb-item
{
list-style-type: none;
font-family: "Segoe UI";
font-size: 14px;
font-weight: 500;
background-color: #ffffff;
text-decoration: none;
white-space: nowrap;
overflow: hidden;
color: #505050 !important;
opacity: 1;
height: 30px;
display: none;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } %>
<% else { %>
text-align: left;
<% } %>
}

.ms-crm-breadcrumb-chevron
{
font-style: normal;
font-weight: 400;
display: inline-block;
speak: none;
color: #444444;
vertical-align: bottom;
height: 30px;
}

.ms-crm-breadcrumb-chevron::before
{
font-family: SimSun, "Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif ;
content: '\003e';
font-size:16px;
}

a.ms-crm-breadcrumb-link
{
display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
padding-right: 7px;
padding-left: 7px;
margin-right: 4px;
margin-top: 8px;
margin-bottom: 8px;
margin-left: 4px;
text-align: center;
}
/*
* Depending on viewPort size, decide number of breadcrumb items to be shown and the overflow size for each one of those.
* min-width and max-width refer to the containing iframes's width and not the browser width.
*/
@media only screen and (min-width: 320px) and (max-width: 479px)
{
a.ms-crm-breadcrumb-link
{
max-width: 100px;
}
li.ms-crm-breadcrumb-item:nth-last-of-type(-n+2)
{
display: inline-block;
}
}
@media only screen and (min-width: 480px) and (max-width: 767px)
{
a.ms-crm-breadcrumb-link
{
max-width: 125px;
}
li.ms-crm-breadcrumb-item:nth-last-of-type(-n+3)
{
display: inline-block;
}
}
@media only screen and (min-width: 768px) and (max-width: 1023px)
{
a.ms-crm-breadcrumb-link
{
max-width: 150px;
}
li.ms-crm-breadcrumb-item:nth-last-of-type(-n+4)
{
display: inline-block;
}
}
@media only screen and (min-width: 1024px) and (max-width: 1199px)
{
a.ms-crm-breadcrumb-link
{
max-width: 160px;
}
li.ms-crm-breadcrumb-item:nth-last-of-type(-n+5)
{
display: inline-block;
}
}
@media only screen and (min-width: 1200px)
{
a.ms-crm-breadcrumb-link
{
max-width: 200px;
}
li.ms-crm-breadcrumb-item:nth-last-of-type(-n+5)
{
display: inline-block;
}
}

a.ms-crm-breadcrumb-link-last
{
background-color:#eeeeee;
font-weight: 600;
cursor:default;
pointer-events:none;
}

div#crmGrid_titleText
{
font-size: 24px !important;
font-weight: 100 !important;
}

div#documentrecommendations_id_StatusBar table#gridStatusBar
{
table-layout: fixed;
}