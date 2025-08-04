<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.tabContainer #notescontrolactivityContainer_notescontrol
{
padding-top: 8px;
}

DIV.activity-button-div
{
background-color: #f8f8f8;
padding-bottom: 10px;
padding-top: 10px;
position: relative;
<%if(CrmStyles.IsRightToLeft) { %>
padding-left: 14px;
padding-right:7px;
text-align: left;
<% } else { %>
padding-right: 14px;
padding-left:7px;
text-align:right;
<%} %>

}

.activity-button-image
{
width: 18px;
vertical-align: middle;
}

.activity-button-text
{
white-space: nowrap;
width: 10%
display: inline-block;
overflow: hidden;
}

.activity-bar-label
{
color: #666666;
font-size: 12px;
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 15px;
margin-right: 5px;
<% } else { %>
margin-right: 15px;
margin-left: 5px;
<%} %>
}

.activity-button_cold, .activity-button_hover, .activity-button_click
{
border: 1px solid #D7D889;
}

a.activity-Button:hover span
{
background-repeat: no-repeat;
}

button.activity-button-container:hover
{
border-width: 1px;
}

button.activity-button-container
{
text-align: center;
border: 1px solid #c6c6c6;
padding: 0px;
background-color: #FDFDFD;
position:relative;
min-width:60px;
height:20px;
width:auto;
background-image:url("");
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<%} %>

}

.activity-lable textarea
{
border: 1px solid #cccccc;
overflow: auto;
padding-top: 2px;
padding-bottom: 3px;
word-wrap: break-word;
}

.notch
{
border-top: 10px solid #000000;
border-right: 10px solid transparent;
border-left: 10px solid transparent;
border-bottom: 0;
_border-right-color: pink;
_border-left-color: pink;
_filter: chroma(color=pink);
}

.callout
{
position: relative;
margin-top: 14px;
padding: 1px 1px 0px 0px;
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 4px;
<% } else { %>
margin-right: 4px;
<%} %>
}

.callout .notch
{
position: absolute;
top: -10px;
margin: 2px;
border-top: 0;
border-left: 8px solid transparent;
border-right: 8px solid transparent;
border-bottom: 8px solid #ffffff;
padding: 0;
width: 0;
height: 0;
font-size: 0;
line-height: 0;
_border-right-color: pink;
_border-left-color: pink;
_filter: chroma(color=pink);
}

.border-callout
{
border: 1px solid #0072C6;
padding: 1px 1px;
}

.border-callout .border-notch
{
border-bottom-color: #0072C6;
top: -11px;
}

.activity-lable
{
padding-top:1px;

<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px;
padding-left: 11px;
<% } else { %>
padding-left: 8px;
padding-right: 11px;
<% } %>

}
.activity-lable DIV.ms-crm-Form-Area
{
height:auto;
}

.leftvoicemail
{
margin-top:3px;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% }
else { %>
float:left
<% } %>
}

.leftvoicemailcheckbox
{
width:20px;
margin-top:4px;
<%if(CrmStyles.IsRightToLeft) { %>
float:right;
<%}
else { %>
float:left;
<%} %>
}
.activitybuttons
{
vertical-align: middle;
}

.activity-lable table.ms-crm-FormSection
{
margin-top:6px;
}

img.activity-filter-image
{
vertical-align: middle;
outline: none;
<%if(CrmStyles.IsRightToLeft) { %>
padding-left: 8px;
padding-right:15px;
<%}	else { %>
padding-right:8px;
padding-left:15px;
<%} %>
}

img.activity-filter-separator
{
vertical-align: top;
outline: none;
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 10px;
float:right;
<%}	else { %>
margin-right: 10px;
float:left;
<%} %>
}

#moreActivitiesList
{
border: 1px #c6c6c6;
}

#activityWallSortButton
{
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 5px;
<%}	else { %>
margin-right: 5px;
<%} %>
}

.activityWallSortImage
{
vertical-align: middle;
}

#moreActivitiesList .ms-crm-RefreshForm-MoreMenu
{
padding : 0px 0px 0px 3px;
margin:0px;
min-height:25px;
}

a.activityFiltersDropdown
{
font-weight:600;
color:#444444;
text-decoration: none;
margin-top:1px;
display:block;
}

span.ms-crm-ActivityGridButtons
{
background-color: #ffffff;
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
z-index: 1;
height: 20px;
}

a.activityFilters
{
font-weight:600;
min-width:65px;
color:#444444;
text-decoration: none;
}

#moreActivitiesButton
{
padding-right:5px;
padding-left:5px;
}

#OpenAssociatedGridView
{
margin-left: 2px;
}

.ms-crm-ActivityGridButtons
{
<%if(CrmStyles.IsRightToLeft) { %>
float:left;
margin-left:5px;
<% } else { %>
float:right;
margin-right:5px;
<%} %>
}

#moreActivitiesList .ms-crm-MenuItem-TextRTL
{
color:#444444;
padding-top:5px;
}

.activityMoreCommands
{
<%if(CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<%} %>
}

a.activityfilterdisabled
{
color:#8b8b8b;
cursor:default;
background-color:white !important;
text-decoration: none;
}

img.activityfilterdisabled
{
cursor:default;
background-color:white !important;
}

.activityMoreCommandsImage
{
vertical-align: middle;
}

a.activityfilterText
{
text-decoration: none;
outline:none;
}
