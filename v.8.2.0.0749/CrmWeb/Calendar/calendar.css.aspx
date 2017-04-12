<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

body.ms-crm-Cal-Body
{
background-color: #ffffff;
padding: 10px;
border-width: 1px;
border-style: solid;
}
body.ms-crm-Cal-Day-Body
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:0px;
<% }
   else
   { %>
    padding-right:0px;
<% } %>
}


#hoursArea DIV
{
width: 100%;
padding: 2px;
}
DIV.ms-crm-Cal-Week-Header
{
padding-left: 2px;
padding-right: 2px;
border-bottom-width: 1px;
border-bottom-style: solid;
}
A.ms-crm-Cal-Week-Header,
A.ms-crm-Cal-Week-Header:link,
A.ms-crm-Cal-Week-Header:visited,
A.ms-crm-Cal-Week-Header:active,
A.ms-crm-Cal-Week-Header:hover
{
color: #15428b;
}


DIV.d
{
padding: 0px;
padding-left: 38px;
color: #bbbbbb;
}

DIV.ms-crm-Cal-Appointment-None
{
color: #000000;
height: 18px;
}

DIV.ms-crm-Cal-Appointment
{
color: #0000ff;
text-decoration: underline;
cursor: pointer;
height: 16px;

padding-top: 3px;
padding-bottom: 3px;
}

DIV.ms-crm-Cal-Appointment-Conflicting
{
color: #ff0000;
}

TD.ms-crm-Cal-Day-Time
{
text-align: right;
padding-top: 3px;
padding-right: 3px;
}

TD.ms-crm-Cal-Day-Time-Selected
{
background-color: #a7cdf0;
}

#hoursArea IMG
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 2px;
<% }
   else
   { %>
    margin-right: 2px;
<% } %>
}
TD.ms-crm-Cal-DeleteIconCell
{
text-align: right;
}


BODY.ms-crm-Cal-Day-Body
{
position: absolute;
height: auto;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
}
DIV.ms-crm-Cal-Day-Content
{
overflow-x: hidden;
overflow-y: auto;
padding: 0px;
height: auto;
position: absolute;
top: 10px;
bottom: 10px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
    right: 10px;
<% }
   else
   { %>
    left: 10px;
    right: 0px;
<% } %>
}


BODY.ms-crm-Cal-Week-Body
{
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
height: auto;
overflow: auto;
}
DIV.ms-crm-Cal-Week-Content
{
padding: 0px;
width: auto;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
}


DIV.ms-crm-Home-Cal-Content
{
height: 100%;
}
DIV.ms-crm-Home-Cal-InAppContent
{
height: 0px;
}
#topTR
{
height: 100%;
}
DIV.ms-crm-Home-Cal-Body
{
position: absolute;
height: auto;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
min-height:300px;
}
DIV.ms-crm-Home-Cal-Header-Row
{
position: absolute;
width: 100%;
top: 0px;
left: 0px;
height: 22px;
}
DIV.ms-crm-Home-Cal-Header
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 36px;
<% }
   else
   { %>
    margin-right: 36px;
<% } %>
}
DIV.ms-crm-Home-Cal-Header SPAN
{
line-height: 16px;
}
DIV.ms-crm-Home-Cal-Refresh
{
height: 16px;
widht: 16px;
position: absolute;
top: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
}
DIV.ms-crm-Home-Cal-Refresh IMG
{
cursor: pointer;
}
DIV.ms-crm-Home-Cal-Content-Row
{
position: absolute;
height: auto;
top: 22px;
bottom: 0px;
left: 0px;
right: 0px;
}
DIV.ms-crm-Home-Cal-Content-Row DIV.ms-crm-Home-Cal-View
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 220px;
<% }
   else
   { %>
    margin-right: 220px;
<% } %>
position: absolute;
height: auto;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
}
DIV.ms-crm-Home-Cal-Content-Row DIV.ms-crm-Home-Cal-Right-Panel
{
position: absolute;
top: 10px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
width: 170px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 40px;
    padding-right: 10px;
<% }
   else
   { %>
    padding-left: 10px;
    padding-right: 40px;
<% } %>
}
DIV.ms-crm-Home-Cal-MiniCal
{
height: 144px;
margin: 0 auto;
width: 170px;
text-align: center;
}
IFRAME.ms-crm-Home-Cal-Workplace
{
width: 100%;
height: 100%;
}


DIV.ms-crm-Home-Cal-Views-Title
{
margin-top: 13px;
}
UL.ms-crm-Home-Cal-Views-Items,
UL.ms-crm-Home-Cal-CreateNew-Items
{
width: 100%;
}
UL.ms-crm-Home-Cal-Views-Items LI,
UL.ms-crm-Home-Cal-CreateNew-Items LI
{
cursor: pointer;
}
UL.ms-crm-Home-Cal-Views-Items LI,
UL.ms-crm-Home-Cal-CreateNew-Items LI
{
padding: 1px;
height: 16px;
margin-bottom: 1px;
}
UL.ms-crm-Home-Cal-Views-Items LI A,
UL.ms-crm-Home-Cal-CreateNew-Items LI A
{
height: 16px;
width: 16px;
}
UL.ms-crm-Home-Cal-Views-Items LI.ms-crm-CalendarView-Selected
{
padding: 0px;
height: 16px;
border-width: 1px;
border-style: solid;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align:right;
<% }
   else
   { %>
    text-align:left;
<% } %>
}
UL.ms-crm-Home-Cal-CreateNew-Items
{
padding-top: 6px;
}
DIV.ms-crm-Home-Cal-CreateNew-Title
{
margin-top: 13px;
}
SPAN.ms-crm-AlignTo16Image
{
cursor: pointer;
}