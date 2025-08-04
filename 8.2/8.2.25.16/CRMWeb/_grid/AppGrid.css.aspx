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

div.ms-crm-grid-Title-Data-Lite
{
margin-top:8px;
color:#8b8b8b;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
<% } else { %>
padding-left: 2px;
<% } %>
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
OVERFLOW-X:auto;
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
top:				2px;
position:			absolute;
display:			inline;
z-index:			1;
cursor:				default;
<% if (CrmStyles.IsRightToLeft) { %>
right: auto;
left: 30px;
<% } else { %>
right: 30px;
left: auto;
<% } %>
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
}

img.ms-crm-add-button-icon
{
height:	16px;
width:	16px;
}
img.ms-crm-openAssociatedGridView-button-icon
{
height:	13px;
width:	13px;
}
img.ms-crm-warning-icon
{
height:	16px;
width:	16px;
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
}

a.ms-crm-List-Sortable
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
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
height: 22px;
table-layout: fixed;
border-bottom-color: #d6d6d6;
border-bottom-style: solid;
border-bottom-width: 1px;
border-top-color: #d6d6d6;
border-top-style: solid;
border-top-width: 1px;
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
top:0px;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<% } %>
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
div.ms-crm-contextButton a
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:10px;
<% } else { %>
margin-left:10px;
<% } %>
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

.ms-crm-List-StatusBar-Label
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
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
width:75%;
}

DIV.ms-crm-Grid-Title
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right:2px;
<% } else { %>
text-align: left;
padding-left:2px;
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
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
<% } else { %>
padding-left: 2px;
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
height: 28px;
}

TD.ms-crm-List-DataCell-Lite,
TD.ms-crm-List-DataCell-Associated-Lite
{
border-bottom: none;
border-top: none;
word-wrap: normal;
font-size: 12px;
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

TD.ms-crm-List-NonDataCell
{
padding-top: 0px;
padding-bottom: 0px;
height: 28px;
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
table-layout: fixed;
border-top-width: 1px;
border-top-style: solid;
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

.ms-crm-List-MessageText,
{
text-align: center;
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
height : 28px;
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
background-color: #ffffff;
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
top: 2px;
z-index: 1;
height: 20px;
}

Table.Totals-Section TR:nth-child(3) TD .ms-crm-Inline-Value:before
{
content:"{"
}

Table.Totals-Section TR:nth-child(3) TD .ms-crm-Inline-Value:after
{
content:"}"
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
top: 0px !important;
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
position: relative;
height: 80%;
min-height: 50px;
top: 0px !important;
bottom: 0px !important;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-DataBody
{
position: relative;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-DataArea-Lite
{
position: relative;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-List-StatusBar-Lite
{
position: relative;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-databodycontainer .ms-crm-List-DataBody .ms-crm-List-DataArea-Lite
{

position: initial;
}

.ms-crm-Form-Area .ms-crm-Form-AssociatedGrid-Layout-Lite .ms-crm-grid-footer
{
position: relative;
}
