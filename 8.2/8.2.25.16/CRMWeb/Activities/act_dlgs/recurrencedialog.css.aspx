<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TD.ms-crm-recurrence-dialog-Number,
TD.Spacer
{
width: 40px;
}

TD.ms-crm-recurrence-dialog-Picklist,
TD.ms-crm-recurrence-dialog-WeekdayCell
{
width: 125px;
}

COL.ms-crm-recurrence-dialog-listheader,
TD.ms-crm-recurrence-dialog-datecontrol
{
width:140px
}

TR.ms-crm-recurrence-dialog-rowspacer
{
height:15px
}

TR.ms-crm-recurrence-dialog-sectionspacer
{
height:20px
}

DIV.ms-crm-recurrence-dialog-progresscover
{
position:absolute;
width:100%;
height:100%;
background-color:#ffffff;
z-index: 100;
}

INPUT.ms-crm-recurrence-dialog-RadioButton
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
margin-left: 3px;
<% } else { %>
margin-left: 0px;
margin-right: 3px;
<% } %>
width: 15px;
height: 20px;
border: 0px;
cursor: pointer;
vertical-align: middle;
}

TABLE.ms-crm-localizableOptionControl
{
cellspacing:8;
}

Label.ms-crm-RadioTextColor
{
color: #000000;
}