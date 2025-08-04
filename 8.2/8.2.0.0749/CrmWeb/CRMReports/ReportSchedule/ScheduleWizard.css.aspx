<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

DIV.slide
{
display: none;
height: 99%;
overflow:auto;
}

SPAN.ReportName
{
overflow:hidden;
text-overflow:ellipsis;
width:650px;
}

TABLE.ReportName
{
table-layout: auto;
height: 20px;
margin-bottom: 20px;
border-bottom: 1px solid #949E9C;
width: 100%;
}

DIV.WizardMain
{
padding-left: 15px;
padding-right: 15px;
padding-top: 15px;
}

SPAN.Param_Parameter
{
padding: 5px 5px 5px 5px;
width: 100%;
height: 80%;
overflow: auto;
}

TABLE.Freq_Frequency
{
padding: 5px 5px 5px 5px;
width: 100%;
table-layout: fixed;
vertical-align: top;
}

TABLE.Freq_FrequencyDetail
{
width: 100%;
padding: 5px 5px 5px 5px;
table-layout: fixed;
vertical-align: top;
}

TD.Freq_Navigation
{
width: 90px;
vertical-align: top;
}

TD.Freq_NumberControlCell,
TD.Freq_StartTimeSpacer
{
width: 40px;
}

TD.Freq_OrdinalCell,
TD.Freq_StartTime
{
width: 100px;
}

TD.Freq_DetailSpacer
{
width: 10px;
}

TD.Freq_WeekdayCell
{
width: 125px;
}

TD.Freq_DetailHeader
{
height: 20px;
}

TD.Param_ParameterLabel
{
vertical-align: top;
width: auto;
max-width: 50%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin: 2px 2px 2px 20px;
<% }
   else
   { %>
    margin: 2px 20px 2px 2px;
<% } %>
}

TD.Param_ParameterEdit
{
width: 100%;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %> %>
margin: 2px 2px 2px 2px;
}

UL.ms-crm-ReportScheduleList
{
list-style-type: disc;
margin-bottom: 15px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 25px;
<% }
   else
   { %>
    margin-left: 25px;
<% } %>
margin-top: 15px;
}

IMG.ms-crm-ScheduleWizard-Failure
{
display: none;
vertical-align: middle;
}