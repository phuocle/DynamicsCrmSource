<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

DIV.ms-crm-Cal-Month-Table
{
height:100%;
}
TABLE.ms-crm-Cal-Month-Table
{
height: 100%;
width: 100%;
table-layout: fixed;
border-collapse: collapse;
}
TABLE.ms-crm-Cal-Month-DayOfWeek-Header
{
height: 100%;
width: 100%;
table-layout: fixed;
border-collapse: collapse;
}
TR.ms-crm-Cal-Month-DayOfWeek-Header
{
height: 23px;
}
#emptyDayCell
{
width:17px;
}
DIV.ms-crm-Cal-Month-Day-Appointments
{
width: 100%;
height: 100%;
overflow-y: auto;
overflow-x: hidden;
}


SPAN.ms-crm-Cal-Month-Day-Appointment
{
cursor: pointer;
width: 100%;
height: 20px;
display: block;
}

DIV.ms-crm-Cal-Month-Day-Number
{
height: 18px;
background-color: #ecf4ff;
padding: 0px 4px;
}

TD.ms-crm-Cal-Month-Day
{
border-width: 1px;
border-style: solid;
height: 80px;

vertical-align: top;
overflow: hidden;
}
TD.ms-crm-Cal-Month-Day-Today
{
border: 2px solid #ffb74c;
}
TD.ms-crm-Cal-Month-Day-Today-Hovered
{
border: 2px solid #61a6e4;
}
TD.ms-crm-Cal-Month-DayOfWeek
{
text-align: center;
vertical-align: middle;
border-width: 1px;
border-style: solid;
border-bottom: 0px;
height:25px;
}

NOBR.ms-crm-Cal-Month-Day-Appointment-Selected
{
border-top: 1px solid #ffffff;
border-bottom: 1px solid #333333;
background-color: #a7cdf0;
}
td.cmCellSelected
{
border: 2px solid #FF0101;
}

IMG.ms-crm-Cal-Month-Day-Entity
{
vertical-align: middle;
}

IFRAME.ms-crm-Home-Cal-Month
{
width: 100%;
height: 100%;
}

NOBR
{
display:block;
white-space:nowrap;
}


DIV.ms-crm-Cal-Month-Header-Row
{
height:25px;
position:relative;
}

DIV.ms-crm-Cal-Month-DayOfWeek-Refresh
{
cursor: pointer;

filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#ffffff, EndColorStr=#cecfde);
background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#cecfde));
background: -moz-linear-gradient(top, #ffffff, #cecfde);
background: linear-gradient(top, #ffffff, #cecfde);

width: 16px;
height: 25px;
border: 1px solid #6699cc;
position:absolute;
top:0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left:0px;
<% }
   else
   { %>
    right:0px;
<% } %>
}
DIV.ms-crm-Cal-Month-DayOfWeek-Refresh A
{
display: block;
padding: 4px 2px;
}
DIV.ms-crm-Cal-Month-Calendar-Row
{
width: 100%;
height: 100%;
overflow-y: scroll;
overflow-x: hidden;
height:auto;
position:absolute;
top:25px;
left:0px;
right:0px;
bottom:0px;
height:auto;
width:100%
}
TR.ms-crm-Cal-Month-HiddenRow
{
display:none;
}


DIV.ms-crm-Cal-Month-Frame-Wrapper
{
height: 100%;
}


DIV.ms-crm-Cal-Month-Content
{
position:relative;
height:100%;
}
DIV.ms-crm-Cal-Month-Content DIV.ms-crm-Cal-Month-Nav-Row
{
height: 23px;
}
DIV.ms-crm-Cal-Month-Content DIV.ms-crm-Cal-Month-Content-Row
{
position:absolute;
top:23px;
left:0px;
right:0px;
bottom:0px;
height:auto;
}


DIV.ms-crm-Cal-Month-Biz-Body
{
position: absolute;
margin: 10px;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
width: auto;
height: auto;
}
DIV.ms-crm-Cal-Month-Biz-Body DIV.ms-crm-Tab
{
position:absolute;
top:21px;
bottom:12px;
left:0px;
right:0px;
height:auto !important;
width:auto;
}
DIV.ms-crm-Cal-Month-Biz-Body DIV.ms-crm-Cal-Month-TabBar-Row
{
height:21px;
}
DIV.ms-crm-Cal-Month-Biz-Body DIV.ms-crm-Cal-Month-MenuBar-Row
{
height:44px;
}
DIV.ms-crm-Cal-Month-MenuBar-Row DIV.ms-crm-MenuBar
{
padding-top:0px;
}
DIV.ms-crm-Cal-Month-MenuBar-Row DIV.ms-crm-MenuBar UL
{
margin-top:5px;
}
DIV.ms-crm-Cal-Month-MenuBar-Row DIV.ms-crm-MenuBar UL LI.ms-crm-Menu-Spacer
{
margin-top:0px;
}
DIV.ms-crm-Cal-Month-Biz-Body DIV.ms-crm-Cal-Month-Content-Row
{
position:absolute;

top:54px;
bottom:10px;
right:10px;
left:10px;
}
#timezonetext
{
position:absolute;
height:12px;
widht:100%;
bottom:0px;
left:0px;
width: 100%;
}


DIV.ms-crm-Cal-Month-Tab
{
display: inline;
padding: 10px;
}
DIV.ms-crm-Cal-Month-Biz-Content
{
height:100%;
position:relative;
}
DIV.ms-crm-Cal-Month-Biz-Content DIV.ms-crm-Cal-Month-NavRow
{
height:23px;
}
DIV.ms-crm-Cal-Month-Biz-Content DIV.ms-crm-Cal-Month-Content-Row
{
position:absolute;
top:23px;
right:0px;
bottom:0px;
left:0px;
width:auto;
height:auto;
}