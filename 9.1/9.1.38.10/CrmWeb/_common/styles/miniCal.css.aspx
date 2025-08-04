







<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TABLE.ms-crm-MiniCal
{
table-layout: fixed;
<% if (CrmStyles.IsRightToLeft) { %>
direction: rtl;
<%} %>
width: 100%;
background: white;
}
TABLE.ms-crm-MiniCal TD
{
line-height:normal;
}
TD.ms-crm-MiniCal-Header
{
text-align: center;
height: 18px;
background-repeat: repeat-x;
}
TR.ms-crm-MiniCal-Nav
{
cursor: pointer;
height: 18px;
}
TD.ms-crm-MiniCal-DayOfWeek
{
cursor: default;
height: 18px;
text-align: center;
width: 20px;
}
TD.ms-crm-MiniCal-Week-Number
{
border-width: 0px;
border-style: solid;
color: #0000ff;
cursor: default;
height: 18px;
text-align: center;
width: 20px;
}
TD.ms-crm-MiniCal-Day
{
height: 18px;
text-align: center;
width: 20px;
}
TD.ms-crm-MiniCal-Day-Hilited-NotCurrent
{
background-color: #a7cdf0;
color: #ffffff;
}
TD.ms-crm-MiniCal-Day-Selected
{
background-color: #D9E0EE;
}
TR.ms-crm-MiniCal-TodayBar
{
height: 19px;
line-height:19px;
}
TD.ms-crm-MiniCal-Month
{
cursor: pointer;
text-align: center;
}
TD.ms-crm-MiniCal-TodayBar,
TD.ms-crm-MiniCal-TodayBar-Hovered
{
border-top-width: 1px;
border-top-style: solid;
cursor: pointer;
text-align: center;
}
DIV.ms-crm-MiniCal-TodayBar
{
background-repeat: repeat-x;
height: 16px;
}

IMG.ms-crm-MiniCal
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}





TABLE.ms-crm-MiniCal TR
{
height: auto;
}