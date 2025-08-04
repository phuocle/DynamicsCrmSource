<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"  %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


.ms-crm-CompositeControl
{
overflow: hidden;
height:100%;
width: 99.9%;
position: relative;
}
.ms-crm-CompCntrlBrdr
{
border-style: solid;
border-width: 1px;
top:0px;
left:0px;
right:0px;
bottom:0px;
position:absolute;
height:auto !important;
width:auto !important;
}
.ms-crm-visualizationpane-contentarea
{
OVERFLOW-X:auto;
OVERFLOW-Y:hidden;
width:100%;
height:100%;
background-color: #FFFFFF;
}

.ms-crm-emptyvizpane
{
height:100%;
}

.ms-crm-getAddButtonType {
border:0;
background:transparent;
height:auto;
width:auto;
padding-left:0px;
padding-right:0px;
font-family: Segoe\000020UI,Tahoma,Arial;
}

.ms-crm-commonChartTypeButtonIcons
{
border:0;
background:transparent;
line-height:23px;
height:auto;
width:auto;
padding-left:0px;
padding-right:0px;
}

.ms-crm-commonChartTypeButtonIcons img{
padding-bottom: 2px;
}

span.ms-crm-removeSeriesBtnSpan
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
<% } else{ %>
padding-left:5px;
<% } %>
}

.ms-crm-visualizationpane-contentarea-topborder
{
border-top: solid 1px;
}

.ms-crm-PaneControl-LeftRight-footer
{
height:43px;
border-top-width:1px;
border-top-style:solid;
}
.ms-crm-PaneControl-TopDown-footer
{
height:21px;
border-top-style:solid;
border-top-width:1px;
}

label.ms-crm-drillDown-info
{
width  :100%;
white-space:nowrap;
overflow:hidden;
cursor:default;
text-overflow:ellipsis;
text-align:justify;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
<% } else {%>
padding-left:5px;
<% } %>
}
table.ms-crm-FixedTableLayout
{
width:100%;
height:100%;
table-layout:fixed;
}

.ms-crm-visualization-list-row
{
height: 21px;
background-color: #FFFFFF;
overflow: hidden;
width: 100%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:3px;
<% } else {%>
padding-left:3px;
<% } %>
}

.ms-crm-chartLabel
{
width:50px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}

.ms-crm-control-strip-table
{
table-layout: fixed;
cursor: pointer;
border: 1px solid;
}

TD.ms-crm-control-SideStrip-LeftRight
{
width:22px;
height:100%;
}

.ms-crm-CC-GridSS-All-0-LR,
.ms-crm-CC-GridSS-All-1-LR,
.ms-crm-CC-GridSS-All-2-LR,
.ms-crm-CC-GridSS-All-4-LR,
.ms-crm-CC-GridSS-All-3-LR
{
position:absolute;
display:none;
width:37px;
height:100%;
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
<% } else { %>
left:0px;
<% } %>
}

.ms-crm-CC-GridSS-All-2-LR
{
display:inline-block !important;
}

.ms-crm-CC-PaneSS-All-0-LR,
.ms-crm-CC-PaneSS-All-1-LR,
.ms-crm-CC-PaneSS-All-2-LR,
.ms-crm-CC-PaneSS-All-4-LR,
.ms-crm-CC-PaneSS-All-3-LR
{
position:absolute;
display:none;
width:22px;
height:100%;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<% } %>

}

.ms-crm-CC-PaneSS-All-0-LR
{
display:inline-block !important;
}


.ms-crm-CC-splitter-Chart-0-LR,
.ms-crm-CC-splitter-Chart-1-LR,
.ms-crm-CC-splitter-Chart-2-LR,
.ms-crm-CC-splitter-Chart-4-LR,
.ms-crm-CC-splitter-Chart-3-LR,
.ms-crm-CC-splitter-Chart-0-TB,
.ms-crm-CC-splitter-Chart-1-TB,
.ms-crm-CC-splitter-Chart-2-TB,
.ms-crm-CC-splitter-Chart-4-TB,
.ms-crm-CC-splitter-Chart-3-TB
{
display:none;

}

.ms-crm-CC-splitter-All-0-LR,
.ms-crm-CC-splitter-All-1-LR,
.ms-crm-CC-splitter-All-2-LR,
.ms-crm-CC-splitter-All-4-LR,
.ms-crm-CC-splitter-All-3-LR
{
position:absolute;
display:none;
width:3px;
cursor: col-resize;
border-top-width:1px;
border-bottom-width:1px;
border-bottom-style: solid;
border-top-style: solid;
top:0px;
bottom:0px;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<% } %>
}

.ms-crm-CC-splitter-All-0-LR
{
<% if (CrmStyles.IsRightToLeft) { %>
left:37px;
<% } else { %>
right:37px;
<% } %>
display: inline-block !important;
}

.ms-crm-CC-splitter-All-1-LR
{
<% if (CrmStyles.IsRightToLeft) { %>
left:32%px;
right:auto;
<% } else { %>
right:32%;
left:auto;
<% } %>
display: inline-block !important;
}

.ms-crm-CC-splitter-All-2-LR
{

<% if (CrmStyles.IsRightToLeft) { %>
left:auto;
right:37px;
<% } else { %>
right:auto;
left:37px;
<% } %>
display: inline-block !important;
}

.ms-crm-CC-splitter-All-3-LR
{
display:inline-block;
}

.ms-crm-CC-grid-Grid-4-LR,
.ms-crm-CC-pane-Chart-2-LR,
.ms-crm-CC-pane-Chart-2-TB
{
height:100%;
width:100%;
}

.ms-crm-CC-PaneSS-Chart-0-TB,
.ms-crm-CC-PaneSS-Chart-0-TB,
.ms-crm-CC-PaneSS-Chart-4-TB,
.ms-crm-CC-PaneSS-Chart-0-LR,
.ms-crm-CC-PaneSS-Chart-4-LR,
.ms-crm-CC-pane-Chart-1-TB,
.ms-crm-CC-pane-Chart-2-TB,
.ms-crm-CC-pane-Chart-3-TB,
.ms-crm-CC-pane-Chart-1-LR,
.ms-crm-CC-pane-Chart-2-LR,
.ms-crm-CC-pane-Chart-3-LR
{
display:block;
height:100%;
width:100%;
}

.ms-crm-CC-PaneSS-Chart-1-TB,
.ms-crm-CC-PaneSS-Chart-2-TB,
.ms-crm-CC-PaneSS-Chart-3-TB,
.ms-crm-CC-PaneSS-Chart-1-LR,
.ms-crm-CC-PaneSS-Chart-2-LR,
.ms-crm-CC-PaneSS-Chart-3-LR,
.ms-crm-CC-pane-Chart-0-TB,
.ms-crm-CC-pane-Chart-0-LR,
.ms-crm-CC-pane-Chart-4-TB,
.ms-crm-CC-pane-Chart-4-LR
{
display:none;
}

.ms-crm-CC-pane-0-LR,
.ms-crm-CC-pane-All-1-LR,
.ms-crm-CC-pane-All-2-LR,
.ms-crm-CC-pane-All-3-LR,
.ms-crm-CC-grid-All-0-LR,
.ms-crm-CC-grid-All-1-LR,
.ms-crm-CC-grid-All-2-LR,
.ms-crm-CC-grid-All-3-LR
{
position:absolute;
display:inline-block;
height:100%;
}

.ms-crm-CC-grid-All-4-LR,
.ms-crm-CC-pane-All-4-LR
{
display:block;
height:100%;
}

.ms-crm-CC-grid-All-1-LR
{

<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
width:68%;
<% } else { %>
left:0px;
width:68%;
<% } %>
}
.ms-crm-CC-grid-All-0-LR
{
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
left:40px;
<% } else { %>
left:0px;
right:40px;
<% } %>
}
.ms-crm-CC-grid-All-2-LR
{
display:none;
}
.ms-crm-CC-grid-All-4-LR
{
width:100%;
}
.ms-crm-CC-grid-All-3-LR
{
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
left:auto;
<% } else { %>
left:0px;
right:auto;
<% } %>
}

.ms-crm-CC-pane-All-1-LR
{
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
width:32%;
<% } else { %>
right:0px;
width:32%;
<% } %>

}
.ms-crm-CC-pane-All-0-LR
{
display:none;
}
.ms-crm-CC-pane-All-2-LR
{
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
right:40px;
<% } else { %>
right:0px;
left:40px;
<% } %>
}
.ms-crm-CC-pane-All-4-LR
{
display:none;
}
.ms-crm-CC-pane-All-3-LR
{
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
right:auto;
<% } else { %>
right:0px;
left:auto;
<% } %>
}

.ms-crm-CC-GridSS-All-0-TB,
.ms-crm-CC-GridSS-All-1-TB,
.ms-crm-CC-GridSS-All-2-TB,
.ms-crm-CC-GridSS-All-4-TB,
.ms-crm-CC-GridSS-All-3-TB
{
position:absolute;
display:none;
bottom:0px;
height:37px;
width:100%;
}

.ms-crm-CC-GridSS-All-2-TB
{
display:block !important;
}

.ms-crm-CC-PaneSS-All-0-TB,
.ms-crm-CC-PaneSS-All-1-TB,
.ms-crm-CC-PaneSS-All-2-TB,
.ms-crm-CC-PaneSS-All-4-TB,
.ms-crm-CC-PaneSS-All-3-TB
{
position:absolute;
display:none;
top:0px;
height:37px;
width:100%;
}

.ms-crm-CC-PaneSS-All-0-TB
{
display:block !important;
}

.ms-crm-CC-splitter-All-0-TB,
.ms-crm-CC-splitter-All-1-TB,
.ms-crm-CC-splitter-All-2-TB,
.ms-crm-CC-splitter-All-4-TB,
.ms-crm-CC-splitter-All-3-TB
{
position:absolute;
display:none;
top:0px;
left:0px;
right:0px;
height:3px;
cursor: row-resize;
border-left-width:1px;
border-right-width:1px;
border-left-style: solid;
border-right-style: solid;
}

.ms-crm-CC-splitter-All-0-TB
{
top:37px;
bottom:auto;
display: block !important;
}

.ms-crm-CC-splitter-All-1-TB
{
top:50%;
bottom:auto;
display: block !important;
}

.ms-crm-CC-splitter-All-2-TB
{
top:auto;
bottom:37px;
display: block !important;
}

.ms-crm-CC-splitter-All-3-TB
{
display:block;
left:0px;
right:0px;
width:auto !important;
}

.ms-crm-CC-pane-0-TB,
.ms-crm-CC-pane-All-1-TB,
.ms-crm-CC-pane-All-2-TB,
.ms-crm-CC-pane-All-4-TB,
.ms-crm-CC-pane-All-3-TB,
.ms-crm-CC-grid-All-0-TB,
.ms-crm-CC-grid-All-1-TB,
.ms-crm-CC-grid-All-2-TB,
.ms-crm-CC-grid-All-4-TB,
.ms-crm-CC-grid-All-3-TB
{
position:absolute;
display:block;
width:100%;
}
.ms-crm-CC-grid-All-1-TB
{
bottom:0px;
}
.ms-crm-CC-grid-All-0-TB
{
bottom:0px;
top:40px;
}
.ms-crm-CC-grid-All-2-TB
{
display:none;
}
.ms-crm-CC-grid-All-4-TB
{
height:100%;
}
.ms-crm-CC-grid-All-3-TB
{
bottom:0px;
top:auto;
}

.ms-crm-CC-pane-All-1-TB
{
top:0px;
height:50%;
}
.ms-crm-CC-pane-All-0-TB
{
display:none;
}
.ms-crm-CC-pane-All-2-TB
{
top:0px;
bottom:40px;
}
.ms-crm-CC-pane-All-4-TB
{
display:none;
}
.ms-crm-CC-pane-All-3-TB
{
top:0px;
bottom:auto;
}

TD.ms-crm-gridPaneSepVerTD
{
border-left: 1px solid;
border-right: 1px solid;
}
div.ms-crm-gridPaneSepDivVer
{
height: 3px;
position: fixed;
width: 100%;
}



.ms-crm-control-SideStrip-BottomUp
{
height:22px;
}

.ms-crm-control-SideStrip
{
height: 100%;
overflow: hidden;
}
.ms-crm-control-SideStrip-Hovered
{
height: 100%;
overflow: hidden;
}
.ms-crm-stripRotateClockwise
{
position: relative;
margin-left: 5px;
transform: rotate(90deg);
-o-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
-moz-transform: rotate(90deg);
-ms-transform: rotate(90deg);
}
.ms-crm-stripRotateCounterClockwise
{
position: relative;
margin-right: 14px;
transform: rotate(-90deg);
-o-transform: rotate(-90deg);
-webkit-transform: rotate(-90deg);
-moz-transform: rotate(-90deg);
-ms-transform: rotate(-90deg);
}
.ms-crm-stripLabelLeftRight
{
font-weight: normal;
font-family: Segoe UI Light, Arial, Sans-Serif;
color: #444444;
font-size: 18px;
}

.ms-crm-stripNavBarLeftRight
{
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>
<%if (CrmStyles.IsRightToLeft) {%>
writing-mode: tb-rl;
<% } else { %>
writing-mode: tb-rl;
filter: flipv fliph;
<% } %>

<% } else { %>
display: inline-block;
<%if (CrmStyles.IsRightToLeft) {%>
-o-transform: rotate(90deg);
transform: rotate(90deg);
-webkit-transform: rotate(90deg);
-moz-transform: rotate(90deg);
-ms-transform: rotate(90deg);
<% } else { %>
margin-left: -20px;
-o-transform: rotate(270deg);
transform: rotate(270deg);
-webkit-transform: rotate(270deg);
-moz-transform: rotate(270deg);
-ms-transform: rotate(270deg);
<% } %>
<% } %>
}

.ms-crm-stripNavBarCommon
{
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>
font-family: Tahoma;
<% } else { %>
font-family: Segoe UI;
<% } %>
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
color: #666666;
white-space: nowrap;
text-overflow: ellipsis;
}

.ms-crm-stripNavBarEA
{
display:block !important;
margin-left:0px !important;
<% if (Request.Browser.Browser == "IE") { %>
writing-mode: tb-rl;
padding-left:10px;
<% } else { %>
-o-transform: rotate(90deg) !important;
transform: rotate(90deg) !important;
-webkit-transform: rotate(90deg) !important;
-moz-transform: rotate(90deg) !important;
-ms-transform: rotate(90deg) !important;
<% } %>
}

.ms-crm-stripNavBarLabelLeftRight
{
text-align: center;
<% if (CrmStyles.IsRightToLeft) { %>
<% } else { %>
background-color: rgb(243,243,243);
<% } %>
<% if (Request.Browser.Browser != "IE") { %>
height: 14px;
overflow: visible;
<% } %>
}

.visualizationImageTable:hover .ms-crm-stripNavBarLabelLeftRight
{
background-color: rgb(214,235,255);
}

LABEL.ms-crm-stripNavBarLabelLeftRight:hover
{
color: #0072c6;
cursor: pointer;
}

.ms-crm-stripChartLabelLeftRight
{
<% if (CrmStyles.IsRightToLeft) { %>
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>
filter: flipv fliph;
<% } %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
<% if (Request.Browser.Browser != "IE" || Request.Browser.MajorVersion >= 9) { %>
display: block;
height: 14px;
overflow: visible;
<% } %>
}
.ms-crm-stripGridLabelLeftRight
{
<% if (!CrmStyles.IsRightToLeft) { %>
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>
filter: flipv fliph;
<% } %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
<% if (Request.Browser.Browser != "IE" || Request.Browser.MajorVersion >= 9) { %>
display: block;
height: 14px;
overflow: visible;
<% } %>
}

.ms-crm-stripLabelBottomUp
{
font-weight: normal;
font-family: Segoe UI Light, Arial, Sans-Serif;
color: #444444;
font-size: 18px;
margin-top: 12px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}


TABLE.ms-crm-VisualizationPaneDesigner-Table
{
height: 100%;
width: 100%;
table-layout :fixed
}
TD.ms-crm-VisualizationPaneHeader-Td
{
<% if (!CrmStyles.IsRightToLeft) { %>
text-align :left;
<% }  else { %>
text-align : right;
<% } %>
padding: 0px;
}

A.ms-crm-VisualizationPaneDesigner-NewChartLink,
A.ms-crm-VisualizationPaneDesigner-NewChartLink:link,
A.ms-crm-VisualizationPaneDesigner-NewChartLink:visited,
A.ms-crm-VisualizationPaneDesigner-NewChartLink:active
{
text-decoration: underline;
cursor: pointer;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}
A.ms-crm-VisualizationPaneDesigner-NewChartLink:hover
{
text-decoration:    underline;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}



A.ms-crm-VisualizationPaneDesigner-ShowHideLabel,
A.ms-crm-VisualizationPaneDesigner-ShowHideLabel:link{text-decoration: none; }
A.ms-crm-VisualizationPaneDesigner-ShowHideLabel:visited{text-decoration: none; }
A.ms-crm-VisualizationPaneDesigner-ShowHideLabel:active{text-decoration: none; }
A.ms-crm-VisualizationPaneDesigner-ShowHideLabel:hover
{
text-decoration: underline;
color: blue;
cursor: pointer;
}
A.ms-crm-VisualizationPaneDesigner-ClearLabel,
A.ms-crm-VisualizationPaneDesigner-ClearLabel:link{text-decoration: none; }
A.ms-crm-VisualizationPaneDesigner-ClearLabel:visited{text-decoration: none; }
A.ms-crm-VisualizationPaneDesigner-ClearLabel:active{text-decoration: none; }
A.ms-crm-VisualizationPaneDesigner-ClearLabel:hover
{
text-decoration: underline;
color: blue;
cursor: pointer;
}
LABEL.ms-crm-VisualizationPaneDesigner-NameHint
{
display: none;
position: absolute;
padding: 4px 5px;
color: #7e7e7e;
text-decoration: italic;
overflow: hidden;
height: 20px;
}
INPUT.ms-crm-VisualizationPaneDesigner-Name
{
background-color: #ffffff;
padding: 2px 0px;
}

.ms-crm-VisualizationPaneDesigner-ImageContainer
{
text-align:center;
background-color: #ffffff;
border: 1px solid silver;
}
.ms-crm-VisualizationPaneDesigner-ImageTable
{
width: 100%;
height: 100%;
background-color: #ffffff;
position: relative;
}
.ms-crm-VisualizationPaneDesigner-ImageTable
{
width: 295px;
margin: auto;
}
DIV.ms-crm-VisualizationPaneDesigner
{
OVERFLOW-Y:auto;
height:100%;
position: relative;
}
TD.ms-crm-VisualizationPaneDesigner-AdvanceOptionTd
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
<% } else { %>
text-align:right;
<% } %>
}
LABEL.ms-crm-VisualizationPaneDesigner-AdvanceOptionLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
<% } else { %>
text-align:right;
<% } %>
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}
LABEL.ms-crm-VisualizationPaneDesigner-SeriesLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}
LABEL.ms-crm-VisualizationPaneDesigner-topLeftLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	10px;
display:none;
<% } else { %>
padding-left:	10px;
<% } %>
overflow:hidden;
text-align:center;
height:140px;
white-space:nowrap;
text-overflow:ellipsis;
writing-mode:tb-rl;
color: #757575;
}
LABEL.VD-filter
{
transform: scale(-1, -1);
}
LABEL.ms-crm-VisualizationPaneDesigner-topRightLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	10px;
<% } else { %>
padding-left:	10px;
display:none;
<% } %>
overflow:hidden;
text-align:center;
height:140px;
white-space:nowrap;
text-overflow:ellipsis;
writing-mode:tb-rl;
transform: scale(-1, -1);
color: #7e7e7e;
}
LABEL.ms-crm-VisualizationPaneDesigner-bottomLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	5px;
<% } else { %>
padding-left:	5px;
<% } %>
color: #757575;
width: 200px;
}
IMG.ms-crm-VisualizationPaneDesigner-StaticTopImg
{
position: absolute;
opacity:0.3;
}
IMG.ms-crm-VisualizationPaneDesigner-StaticBottomImg
{
opacity:0.3;
}
.ms-crm-VisualizationPaneDesigner-TDSeriesSelector
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
margin-bottom: 4px;
}
.ms-crm-VisualizationPaneDesigner-TDSeriesSelector input
{
width: auto;
height: auto;
}
.ms-crm-VisualizationPaneDesigner-TDSeriesSelector span
{
vertical-align: top;
}
.ms-crm-VisualizationPaneDesigner-TDSeriesSelector span select
{
margin-top: 2px;
margin-bottom: 2px;
}
SPAN SELECT.ms-crm-VisualizationPaneDesigner-SeriesSelector
{
width: 38%;
}
SPAN SELECT.ms-crm-VisualizationPaneDesigner-SelectAggregate
{
width: 28%;
<% if (!CrmStyles.IsRightToLeft) { %>
margin-left: 3px;
<% } else { %>
margin-right: 3px;
<% } %>
}
SELECT.ms-crm-VisualizationPaneDesigner-GroupingSelector
{
display: none;
<% if (!CrmStyles.IsRightToLeft) { %>
margin-left: 3px;
<% } else { %>
margin-right: 3px;
<% } %>
}
TD.ms-crm-VPD-Desc
{
padding-bottom: 5px;
}

#tdVisualizationDescription div
{
<% if (!CrmStyles.IsRightToLeft) { %>
margin-left: 20px;
<% } else { %>
margin-right: 20px;
<% } %>
width: 100%;
}

#tdVisualizationDescription
{
<% if (!CrmStyles.IsRightToLeft) { %>
padding-right: 40px;
<% } else { %>
padding-left: 40px;
<% } %>
}

TR.ms-crm-VisualizationPaneDesigner-row
{
cursor:pointer;
}
INPUT.ms-crm-VisualizationPaneDesigner-Inputbox
{
background-color: #E6E6E6;
}
TABLE.ms-crm-VisualizationPaneDesigner-AdvancedOptions
{
border: 1px solid;
width: 100%;
padding-left: 6px;
background-color: #E6E6E6;
border-width: 1px;
}

TABLE.ms-crm-VisualizationPaneDesigner-InnerAdvancedOptions
{
width: 100%;
border: 1px solid;
border-width: 1px;
}

label.ms-crm-Info-Label
{
color:#9b9b9b;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
cursor:default;
}

.ms-crm-visualizationpane-toolbar
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
text-align: right;
margin-left: 15px;
<% } else { %>
right: 0px;
text-align: left;
margin-right: 15px;
<% } %>
position: absolute;
top: 0;
width: 100%;
height: 20px;
margin-top: 14px;
margin-bottom: 7px;
z-index:1;
}

.ms-crm-visualizationpane-toolbar.ms-crm-visualizationpane-toolbar-scrollbar-offset
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 25px;
<% } else { %>
right: 25px;
<% } %>
}

span.ms-crm-visualizationpane-toolbar-buttons
{
<% if (Request.Browser.Browser == "Safari") { %>
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<% } %>
<% } else { %>
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 20px;
<% } else { %>
margin-left: 20px;
<% } %>
<% } %>
}

.ms-crm-visualizationpane-greyout
{
background-color: #e6e1e1;
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 101;
visibility: visible;
}

.ms-crm-visualizationpane-enlarge
{
position: fixed;
top: 0;
left: 0;
padding-top: 30px;
padding-bottom: 30px;
z-index: 102;
visibility: visible;
}

.ms-crm-visualizationpane-enlarge #paneContent
{
border: 1px solid #0076A3;
}

.ms-crm-visualizationpane-close-enlarge
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 20px;
<% } else { %>
right: 20px;
<% } %>
top: 20px;
position: absolute;
z-index: 103;
}

.ms-crm-visualizationpane-close-enlarge a:link
{
text-decoration: underline;
color: #15428b;
cursor: pointer;
}

iframe.ms-crm-visualizationpane-close-enlarge
{
z-index: 102;
}

INPUT.ms-crm-visualizationpane-radio
{
width:10px;
position:left;
}

INPUT.ms-crm-visualizationpane-textbox
{
size:30;
position:absolute;
}

table.ms-crm-visualization-error-table,
table.ms-crm-Visualization-Table
{
cursor: auto;
margin-left:auto;
margin-right:auto;
}

table.ms-crm-DrillDown-Table
{
border: 1px solid #c0c0c0;
}

div.ms-crm-drillDownBox,
div.ms-crm-inlineActionsBox
{
display: none;
position:absolute;
background-color: #ffffff;
}
div.ms-crm-inlineChartActionsBox
{
display: none;
position:absolute;
background-color: #ffffff;
}
div.ms-crm-inlineTopBottomActionsBox
{
display: none;
position:absolute;
background-color: #ffffff;
}
div.ms-crm-drillDownBox
{
width: 194px;
}
.ms-crm-VisualizationPaneDesigner-TableAttributesSelector
{
position: relative;
padding-top: 5px;
}
div.ms-crm-inlineChartActionsBox
{
height: 26px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
border: 1px solid #aeb2b7;
}
div.ms-crm-inlineTopBottomActionsBox
{
width: 111px;
height: 26px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
border: 1px solid #aeb2b7;
}
div.ms-crm-Designer-AddButton
{
<% if (!CrmStyles.IsRightToLeft) { %>
text-align: left;
margin-left: 20px;
<% } else { %>
text-align: right;
margin-right: 20px;
<% } %>
margin-bottom: 15px;
margin-top: 12px;
}
div.ms-crm-Designer-Label
{
<% if (!CrmStyles.IsRightToLeft) { %>
text-align: left;
margin-left: 20px;
<% } else { %>
text-align: right;
margin-right: 20px;
<% } %>
margin-bottom: 5px;
}
span.ms-crm-AddSeries-Button
{
background-color: transparent;
border: 1px solid transparent;
padding: 3px 3px 1px 3px;
display: inline-block;
cursor: pointer;
}
span.ms-crm-AddSeries-Button-hover
{
padding: 3px 3px 1px 3px;
display: inline-block;
cursor: pointer;
}
.ms-crm-AddSeries-Button *,
.ms-crm-AddSeries-Button-hover *
{
display: inline-block;
cursor: pointer;
}
.ms-crm-AddSeries-Button span,
.ms-crm-AddSeries-Button-hover span
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
vertical-align: top;
}

tr.ms-crm-drillDownBox-Row
{
height: 22px;
margin: 1px;
}
td.ms-crm-drillDownBox-ButtonsCell
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}
td.ms-crm-drillDownBox-OKCell
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
}
td.ms-crm-drillDownBox-Button
{
margin-bottom: 1px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 1px;
<% } else { %>
margin-right: 1px;
<% } %>
}
img.ms-crm-inlineBox-Button
{
margin-top: 1px;
margin-bottom: 1px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 4px;
<% } else { %>
margin-right: 4px;
<% } %>
}
td.ms-crm-drillDownBox-Button
{
height: 22px;
}
div.ms-crm-updateDiv
{
display: none;
width: 100px;
position:absolute;
padding-left:	5px;
padding-right:	5px;
margin-left:	10px;
margin-right:	10px;
}
table.ms-crm-errorDiv
{
table-layout: fixed;
padding:1;
width:99%;
height:99%;
COLOR: #999999;
}
img.ms-crm-errorImg
{
vertical-align: bottom;
}

label.ms-crm-Error-Label
{
color: red;
margin:	5px;
cursor:default;
}

label.ms-crm-DrillDown-Label
{
cursor:default;
width:200px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	5px;
<% } else { %>
padding-left:	5px;
<% } %>
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}

label.ms-crm-DrillDown-Header
{
cursor:default;
width:200px;
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	5px;
<% } else { %>
padding-left:	5px;
<% } %>
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}
BUTTON.ms-crm-Drilldown-Dialog-Buttons
{
text-overflow:ellipsis;
overflow:hidden;
}
A.ms-crm-DrillDown-back-disabled
{
color:#676767;
cursor:default;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 3px;
<% } else { %>
margin-left: 3px;
<% } %>
}
A.ms-crm-DrillDown-back-Link,
A.ms-crm-DrillDown-back-Link:link,
A.ms-crm-DrillDown-back-Link:visited,
A.ms-crm-DrillDown-back-Link:active
{
color: #15428b;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 3px;
<% } else { %>
margin-left: 3px;
<% } %>
}
A.ms-crm-DrillDown-back-Link:hover
{
color: #0000ff;
text-decoration:    underline;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 3px;
<% } else { %>
margin-left: 3px;
<% } %>
}
IMG.ms-crm-DrillDown-back-imageDisabled
{
opacity:0.4;
width:11px;
height:11px;
}
IMG.ms-crm-DrillDown-back-imageEnabled
{
width:11px;
height:11px;
}
.flipImage
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

.paneControl
{
position:relative;
}

.ms-crm-StripLabel-Rotation
{
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>
<%if (CrmStyles.IsRightToLeft) {%>
writing-mode: tb-rl;
filter: flipv fliph;
<% } else { %>
writing-mode: tb-rl;
<% } %>
<% }%>
}

<% if (this.IsVisualRefreshEnabled) { %>
.ms-crm-visualizationpane-toolbar
{
padding-top: 10px;
padding-bottom: 10px;
margin-top: 0px;
margin-bottom: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 0px;
<% } else { %>
margin-right: 0px;
<% } %>
}

span.ms-crm-headerchartTitle
{
cursor: pointer;
padding-top:1px;
padding-bottom:1px;
overflow: hidden;
height: 18px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
<% } else {%>
padding-left:15px;
<%} %>
width : calc(100% - 140px);
text-overflow: ellipsis;
white-space: nowrap;
}
span.ms-crm-headerchartSubTitle
{
cursor: pointer;
position:absolute;
top:40px;
padding-top:15px;
width:calc(100% - 15px);
background-color: #FFFFFF;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
right: 0px;
text-align: right;
<% } else {%>
padding-left:15px;
left: 0px;
text-align: left;
<%} %>
border-top:1px solid #d6d6d6;
}

div.ms-crm-charttoolbarContainer
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0;
padding-left:10px;
<% } else {%>
right: 0;
padding-right:10px;
<%} %>
display: flex;
display: -webkit-flex;




<% if (Request.Browser.Browser == "Safari") { %>
width: 130px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
<% } %>
}

table.ms-crm-errorDiv td img
{
padding-bottom : 10px;
}


@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
div.ms-crm-charttoolbarContainer
{
top: 10px; !important;
}
.ms-crm-visualizationpane-toolbar
{
display:-ms-flexbox;
}
}


<% } else { %>
.ms-crm-visualizationpane-toolbar
{
background-color: #FFFFFF;
}
<%}%>