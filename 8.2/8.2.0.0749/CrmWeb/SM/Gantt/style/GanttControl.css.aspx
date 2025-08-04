<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

body.ganttFrame
{
overflow: visible;
background-color: #E0E3E8;
}

td.ganttHeaderRowTop
{
width: 100%;
height: 21px;
}

div.ganttHeaderTop
{
position : absolute;
top : 0px;
height : 21px;
padding-top : 2px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right-width: solid;
    border-right-style: solid;
    padding-right : 1px;
<% }
   else
   { %>
    border-left-width: 1px;
    border-left-style: solid;
    padding-left : 1px;
<% } %>
color: #000000;
}

div.ganttHeaderRowTop
{
width: 100%;
overflow-x: hidden;
height: 21px;
}

td.ganttHeaderRowBottom
{
width: 100%;
height: 24px;
border-bottom-width: 1px;
border-bottom-style: solid;
}

div.ganttHeaderBottom
{
position : absolute;
bottom : 0px;
height : 24px;
padding-top : 1px;
border: 1px solid #A0A0A4;
border-bottom: 1px solid #A0A0A4;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right : 1px;
    border-left: 0px;
<% }
   else
   { %>
    border-right: 0px;
    padding-left : 1px;
<% } %>
}

div.ganttHeaderRowBottom
{
width: 100%;
overflow-x: hidden;
height: 21px;
}

div.bottomSpacerBar
{
height: 47px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-left: 0px;
<% }
   else
   { %>
    border-right: 0px;
<% } %>
border-bottom: 1px solid #C5C1B1;
position: absolute;
bottom: 0px;
left: 0px;
right: 0px;
}

div.ganttContainer
{
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
border-width: 1px;
border-style: solid;
}

div.ganttWrapper
{
background-color: #ffffff;
position: absolute;
top: 0px;
bottom: 47px;
left: 0px;
right: 0px;
}


div.ganttRowSelectOn,
div.ganttRowSelectOff
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    right:0px;
<% }
   else
   { %>
    left:0px;
<% } %>
height: 28px;
position: absolute;
border-top: 1px solid #ffffff;
}

div.ganttRowSelectOn
{
border-bottom: 1px solid #333333;
background-color: #5A7EBF;
}

div.ganttRowSelectOff
{
border-bottom: 1px solid #CDD4E3;
background-color: #ffffff;
}

div.ganttBlockBase,
div.ganttBlockOverlapped,
div.ganttBlockWorkingHours,
div.ganttBlockTimeOff,
div.ganttBlockHoliday
{
position:absolute;
text-overflow:ellipsis;
overflow:hidden;
vertical-align:middle;
top:0px;
}

div.ganttBlockBase
{
background-color: #8089D4;
cursor: pointer;
border: 1px solid #849CE7;
height: 16px;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}

div.ganttBlockText
{
text-overflow:ellipsis;
overflow:hidden;
padding: 0px 5px;
width: 100%;
}

div.ganttBlockOverlapped,
div.ganttBlockOverlappedInversive
{
border: 1px solid #858585;
height: 16px;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}

div.ganttBlockOverlapped
{
<%= CssGradient("#B9B9B9", "#858585", true) %>
}
div.ganttBlockOverlappedInversive
{
<%= CssGradient("#858585", "#B9B9B9", true) %>
}

div.ganttBlockWorkingHours
{
height:27px;
background-color: #F1F1F1;
}

div.ganttBlockTimeOff
{
height:27px;
background-color: lightcoral;
}

div.ganttBlockHoliday
{
height:27px;
background-color: gold;
}

div.ganttGuide
{
position: absolute;
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right:1px dotted #808080;
<% }
   else
   { %>
    border-left:1px dotted #808080;
<% } %>
width: 1px;
top: 0px;
bottom: 0px;
}

div.ganttEdge
{
background-color: lightgrey;
position: absolute;
top: 0px;
bottom: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
}

div.crmGridColumn
{
background-color:#E0E3E8;
width: 207px;
position: absolute;
top: 0px;
bottom: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: 0px;
<% }
   else
   { %>
    left: 0px;
<% } %>
}

div.gridSpacer
{
height:20px;
display:block;
border-width:1px;
border-style: solid;
border-bottom-width:0px;
background-color:#ffffff;
position: absolute;
top: 0px;
left: 0px;
right: 0px;
}

div.gridContainer
{
position: absolute;
top: 21px;
bottom: 0px;
left: 0px;
right: 0px;
}

div.crmGanttColumn
{
position: absolute;
top: 0px;
bottom: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
}

div.ganttSheet
{
background-color: #ffffff;
width: 100%;
height: 100%;
border: 0px;
overflow-x: hidden;
position: absolute;
top: 0px;
bottom: 47px;
left: 0px;
right: 0px;
}

div.ganttSheetHeader
{
height: 46px;
position: absolute;
top: 0px;
left: 0px;
right: 0px;
}

div.ganttContentWrapper
{
position: absolute;
top: 47px;
bottom: 0px;
left: 0px;
right: 0px;
}

div.ganttContent
{
position: absolute;
width: 100%;
height: 100%;
overflow: scroll;
}

table.ganttHeaderWrapper
{
position:absolute;
width:100%;
height:100%;
}

div.ganttBlockSelected
{
border-color:Black;
}

div.GanttControlFrame_div_AppGrid
{
position: absolute;
margin-top:0px;
width:100%;
padding-top:0px;
height:100%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:0px;
    margin-right:0px;
<% }
   else
   { %>
    padding-left:0px;
    margin-left:0px;
<% } %>
}

div.ganttBlockserviceappointmentStatus1,
div.ganttBlockserviceappointmentStatus1Inversive
{
border: 1px solid #849CE7;
}
div.ganttBlockserviceappointmentStatus1
{
<%= CssGradient("#DFE5F9", "#849CE7", true) %>
}
div.ganttBlockserviceappointmentStatus1Inversive
{
<%= CssGradient("#849CE7", "#DFE5F9", true) %>
}

div.ganttBlockserviceappointmentStatus2,
div.ganttBlockserviceappointmentStatus2Inversive
{
border: 1px solid #CCCCCC;
}
div.ganttBlockserviceappointmentStatus2
{
<%= CssGradient("#EFEFEF", "#CCCCCC", true) %>
}
div.ganttBlockserviceappointmentStatus2Inversive
{
<%= CssGradient("#CCCCCC", "#EFEFEF", true) %>
}

div.ganttBlockserviceappointmentStatus3,
div.ganttBlockserviceappointmentStatus3Inversive
{
border: 1px solid #A5CEC6;
}
div.ganttBlockserviceappointmentStatus3
{
<%= CssGradient("#E8F2F0", "#A5CEC6", true) %>
}
div.ganttBlockserviceappointmentStatus3Inversive
{
<%= CssGradient("#A5CEC6", "#E8F2F0", true) %>
}

div.ganttBlockserviceappointmentStatus4,
div.ganttBlockserviceappointmentStatus4Inversive
{
border: 1px solid #848284;
}
div.ganttBlockserviceappointmentStatus4
{
<%= CssGradient("#CEC7BD", "#848284", true) %>
}
div.ganttBlockserviceappointmentStatus4Inversive
{
<%= CssGradient("#848284", "#CEC7BD", true) %>
}

div.ganttBlockserviceappointmentStatus6,
div.ganttBlockserviceappointmentStatus6Inversive
{
border: 1px solid #669999;
}
div.ganttBlockserviceappointmentStatus6
{
<%= CssGradient("#99CCCC", "#669999", true) %>
}
div.ganttBlockserviceappointmentStatus6Inversive
{
<%= CssGradient("#669999", "#99CCCC", true) %>
}

div.ganttBlockserviceappointmentStatus7,
div.ganttBlockserviceappointmentStatus7Inversive
{
border: 1px solid #C6A5F7;
}
div.ganttBlockserviceappointmentStatus7
{
<%= CssGradient("#F0E7FD", "#C6A5F7", true) %>
}
div.ganttBlockserviceappointmentStatus7Inversive
{
<%= CssGradient("#C6A5F7", "#F0E7FD", true) %>
}

div.ganttBlockserviceappointmentStatus8,
div.ganttBlockserviceappointmentStatus8Inversive
{
border: 1px solid #A5DE63;
}
div.ganttBlockserviceappointmentStatus8
{
<%= CssGradient("#E7F6D6", "#A5DE63", true) %>
}
div.ganttBlockserviceappointmentStatus8Inversive
{
<%= CssGradient("#A5DE63", "#E7F6D6", true) %>
}

div.ganttBlockserviceappointmentStatus9,
div.ganttBlockserviceappointmentStatus9Inversive
{
border: 1px solid #FF9484;
}
div.ganttBlockserviceappointmentStatus9
{
<%= CssGradient("#FFE3DF", "#FF9484", true) %>
}
div.ganttBlockserviceappointmentStatus9Inversive
{
<%= CssGradient("#FF9484", "#FFE3DF", true) %>
}

div.ganttBlockserviceappointmentStatus10,
div.ganttBlockserviceappointmentStatus10Inversive
{
border: 1px solid #FFB573;
}
div.ganttBlockserviceappointmentStatus10
{
<%= CssGradient("#FFECDB", "#FFB573", true) %>
}
div.ganttBlockserviceappointmentStatus10Inversive
{
<%= CssGradient("#FFB573", "#FFECDB", true) %>
}

div.ganttBlockappointmentStatus3
{
background-color: #A5DE63;
}

div.ganttBlockappointmentStatus4
{
background-color: #FF9484;
}

div.ganttBlockappointmentStatus5
{
background-color: #4E6CC9;
}

div.ganttBlockappointmentStatus6
{
background-color: #848284;
}

td.progressCell
{
margin: 0px;
padding: 0px;
vertical-align: bottom;
}