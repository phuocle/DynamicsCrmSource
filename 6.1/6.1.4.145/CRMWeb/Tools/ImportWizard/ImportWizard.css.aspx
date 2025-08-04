<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

A.mscrm-iw-Anchor
{
text-decoration: underline;
cursor: pointer;
}

TABLE.mscrm-iw-TableGeneric
{
width: 100%;

}

TABLE.mscrm-iw-ProgressTable
{
position:absolute;
height: 100%;
width: 100%;
}

TABLE.mscrm-iw-TableGenericWidth
{
width: 100%;
table-layout: fixed;
}

DIV.mscrm-iw-DivGeneric
{
width: 100%;
height: 100%;
}

DIV.mscrm-iw-UploadPreviewPage-DataTable,
DIV.mscrm-iw-OverFlowDiv
{
overflow-y: auto;
overflow-x: hidden;
}

DIV.mscrm-iw-ProgressDiv
{
display: none;
width: 100%;
height: 100%;
cursor: wait;
}

DIV.mscrm-iw-InfoBarBlue,
DIV.mscrm-iw-InfoBarYellow,
DIV.mscrm-iw-InfoBarGreen
{
<% if (CrmStyles.IsRightToLeft){ %>
text-align: right;
<%}else{ %>
text-align: left;
<%} %>
vertical-align: middle;
padding-top: 2px;
padding-bottom: 2px;
}

IMG.mscrm-iw-InfoBarBalloon,
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 5px;
<%}else{ %>
padding-left: 5px;
<%} %>
}

DIV.mscrm-iw-BorderedDivBlueBackground,
DIV.mscrm-iw-InfoBarBlue
{
background-color: #E3EFFF;
}

DIV.mscrm-iw-InfoBarYellow
{
background-color: #FFFFCC;
}

DIV.mscrm-iw-InfoBarGreen
{
background-color: #EBF1DE;
}

SPAN.mscrm-iw-InfoBarText
{
vertical-align: 40%;
}

DIV.mscrm-iw-BorderedDivBlueBackground
{
padding: 5px;
}

DIV.mscrm-iw-InfoBarBlue,
DIV.mscrm-iw-InfoBarYellow,
DIV.mscrm-iw-InfoBarGreen,
DIV.mscrm-iw-BorderedDivWhiteBackground,
DIV.mscrm-iw-BorderedDivBlueBackground,
.mscrm-iw-PageWidth
{
width: 75%;
}

DIV.mscrm-iw-PopupDivInner,
DIV.mscrm-iw-InfoBarBlue,
DIV.mscrm-iw-InfoBarYellow,
DIV.mscrm-iw-InfoBarGreen,
DIV.mscrm-iw-BorderedDivWhiteBackground,
DIV.mscrm-iw-BorderedDivBlueBackground,
.mscrm-iw-Border
{
border: #7f9db9 1px solid;
}

TR.mscrm-iw-Table-HeaderRow
{
height: 25px;
font-weight: <%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #376092;
background-color: #F2F2F2;
}

A.ms-crm-InlineTabHeaderText,
TR.mscrm-iw-Table-HeaderRow
{
color: #376092;
}
TR.mscrm-iw-Table-DataRow
{
height: 23px;
}

TD.mscrm-iw-Table-Col1,
TD.mscrm-iw-Table-Col2,
TD.mscrm-iw-Table-Col2Scroll
{
width: 50%;
border-width: 0px 0px 1px 0px;
border-style: solid;
border-color: #BFBFBF;
border-spacing: 0px;
<% if (CrmStyles.IsRightToLeft){ %>
text-align: right;
<%}else{ %>
text-align: left;
<%} %>
vertical-align: middle;
}

TD.mscrm-iw-Table-Col0
{
width: 20px;
border-width: 0px 0px 1px 0px;
border-style: solid;
border-color: #BFBFBF;
border-spacing: 0px;
text-align: center;
vertical-align: middle;
}

TD.mscrm-iw-Table-Col1
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 30px;
<%}else{ %>
padding-left: 30px;
<%} %>
}

TR.mscrm-iw-Table-HeaderRow TD.mscrm-iw-Table-Col1
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width: 1px;
<%}else{ %>
border-right-width: 1px;
<%} %>
}

TD.mscrm-iw-Table-Col2
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 10px;
<%}else{ %>
padding-left: 10px;
<%} %>

}

TD.mscrm-iw-Table-Col2Scroll
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 18px;
<%}else{ %>
padding-left: 18px;
<%} %>
}

TR.mscrm-iw-ContainerTable-Row,
TD.mscrm-iw-ContainerTable-Cell
{
height: 100%;
vertical-align: top;
}

IFRAME.mscrm-iw-UploadFilePage-UploadFileFrame
{
width: 100%;
height: 100%;
}

DIV.mscrm-iw-UploadPreviewPage-DataTable
{
width: 100%;
min-height: 69px;
}

SPAN.mscrm-iw-PopupDivElement
{
width: 95%;
height: auto;
}

DIV.mscrm-iw-PopupDiv
{
display: none;
z-index: 10;
position: absolute;
width: 100%;
height: auto;
overflow: hidden;
}

DIV.mscrm-iw-PopupDivInner
{
background-color: #c6d5e9;
}

DIV.mscrm-iw-PopupDiv iframe
{
position: absolute;
top: 0;
<% if (CrmStyles.IsRightToLeft){ %>
right: 0;
<%}else{ %>
left: 0;
<%} %>
z-index: -1;
width: 100%;
height: 100%;
}

SPAN.mscrm-iw-PopupImageSpan
{
width: 16px;
height: 16px;
}

SPAN.mscrm-iw-PopupSelectSpan
{
width: 60%;
}

SPAN.mscrm-iw-PopupImageSpan,
SPAN.mscrm-iw-PopupSelectSpan
{
vertical-align: middle;
}

TD.mscrm-iw-AMP-LeftColumnHeader
{
width: 100%;
border-style: solid;
border-width: 1px 1px 0px 1px;
border-color: #BFBFBF;
background-color: #558ED5;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: white;
}

TD.mscrm-iw-AMP-LeftColumnBody
{
background-color: #C6D9F1;
height: 100%;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
width: 100%;
color: #376092;
vertical-align: top;
border-style: solid;
border-width: 1px;
border-color: #BFBFBF;
}

UL.mscrm-iw-AMP-EntityList
{
list-style-type: none;
margin: 0px 0px 0px 0px;
width: 100%;
display: block;
}

LI.mscrm-iw-AMP-EntityListItem
{
font-family: Tahoma;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
height: auto;
color: Black;
width: 100%;
border: none 2px #e9c855;
borderwidth: 1px;
borderstyle: hidden;
overflow: hidden;
}

LI.mscrm-iw-AMP-EntityListItem SPAN
{
vertical-align: top;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 5px;
<%}else{ %>
margin-left: 5px;
<%} %>

}

DIV.mscrm-iw-AMP-SelectEntityMessage
{
text-align: center;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
color: Gray;
}

TD.mscrm-iw-AMP-MainSection
{
height: 100%;
border: 1px solid #bfbfbf;
padding: 0px;
vertical-align: middle;
}
TD.mscrm-iw-AMP-LeftColumnHeader,
TD.mscrm-iw-AMP-RightColumnHeader
{
height: 29px;
}

TD.mscrm-iw-AMP-RightColumnHeader
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: white;
background-color: #558ED5;
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 4px;
<%}else{ %>
padding-left: 4px;
<%} %>
}

TD.mscrm-iw-AMP-Col1
{
width: 48%;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 4px;
<%}else{ %>
padding-left: 4px;
<%} %>

}

TD.mscrm-iw-AMP-Col2
{
width: 52%;
border-style: solid;
border-width: 0px 1px 1px 1px;
border-color: #BFBFBF;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

TABLE.mscrm-iw-AMP-AttributeTable
{
width: 100%;
table-layout: fixed;
}

TR.mscrm-iw-AMP-MapSectionHeaderRow
{
height: 28px;
}

TR.mscrm-iw-AMP-MapSectionDataRow
{
height: 25px;
}


TD.mscrm-iw-AMP-AttributeTypeHeader
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #376092;
background-color: #F2F2F2;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
}

.mscrm-iw-AMP-wait
{
cursor: wait !important;
}

SPAN.mscrm-iw-AMP-TargetSelectWithImage,
SELECT.mscrm-iw-AMP-TargetSelectWithImage
{
width: 85%;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 5px;
<%}else{ %>
margin-left: 5px;
<%} %>
}

SPAN.mscrm-iw-AMP-TargetSelectWithoutImage,
SELECT.mscrm-iw-AMP-TargetSelectWithoutImage
{
width: 85%;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 23px;
<%}else{ %>
margin-left: 23px;
<%} %>
}

TR.mscrm-iw-AMP-PopupHeader
{
background-color: #558ed5;
height: 16px;
}

SPAN.mscrm-iw-AMP-PopupTitle
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 10px;
float: right;
<%}else{ %>
padding-left: 10px;
float: left;
<%} %>
}

SPAN.mscrm-iw-AMP-CrossImage
{
<% if (CrmStyles.IsRightToLeft){ %>
float: left;
<%}else{ %>
float: right;
<%} %>
}

SPAN.mscrm-iw-CustomizeImportPage-SectionHeader
{
margin-top: 30px;
margin-bottom: 10px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
