<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

Div.wfWorkflowStepArea
{
overflow: auto;
height: 100%;
background-color : #CFD4DA;
background-image: url(/_imgs/app_back.png);
background-repeat: repeat-x;
}

TEXTAREA.wfStepDescriptionReadOnly,
DIV.wfStepDescriptionReadOnly
{
height: auto;
border: 1px solid #c4c8ce;
background-color:#F0F0F0;
color:black;
vertical-align: bottom;
padding-top: 3px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
overflow-y: hidden;
}

TEXTAREA.wfStageDescriptionReadOnly,
DIV.wfStageDescriptionReadOnly
{
height: auto;
border: none;
background-color: none;
vertical-align: middle;
color:Black;
padding-top: 3px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
overflow-y: hidden;
}

TEXTAREA.wfStageStepDescriptionReadOnly,
DIV.wfStageStepDescriptionReadOnly
{
height: auto;
border: 1px solid #c4c8ce;
background-color:#E5E5E5;
font-weight:bold;
color:black;
vertical-align: middle;
padding-top: 3px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
overflow-y: hidden;
}

.wfStepDescription
{
height: 20px;
border: 1px solid #c4c8ce;
color:#000000;
vertical-align: middle;
padding-top: 2px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
}

.wfStageDescription
{
width: auto;
height: 20px;
border: none;
background: none;
color:#000000;
vertical-align: middle;
padding-top: 2px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
}

.wfStageStepDescription
{
height: 20px;
border: 1px solid #c4c8ce;
color:#000000;
vertical-align: middle;
padding-top: 2px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
}

Div.wfWorkflowStepLine
{
padding-top: 2px;
padding-bottom: 2px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:35px;
<% }
   else
   { %>
    padding-left:35px;
<% } %>
}

table.wfWorkflowDefinitionContainer
{
width: 100%;
height: 100%;
table-layout: fixed;
background-color:#FFFFFF;
border:1px solid #a5acb5;
padding:0px;
}
Div.wfWorkflowDefinitionContainer
{
width: 100%;
height: 100%;
background-color:#FFFFFF;
padding:0px;
position:absolute;
}
.wfGridDefinitionContainer, .wfMenuBarContainer
{
border-color:#a5acb5;
border-style:solid;
}

.wfGridDefinitionContainer
{
border-width:0px 1px 1px 1px;
top:30px;
}

.wfMenuBarContainer
{
border-width:1px 1px 0px 1px;
height:30px;
}

table.wfWorkflowDisabledContainer
{
width: 100%;
height: 100%;
table-layout: fixed;
background-color:#FFFFFF;
padding:0px;
}

table.ms-crm-workflow
{
width: 100%;
padding:0px;
border-width:1;
}

table.ms-crm-workflow-lookup
{
width: 150px;
table-layout: fixed;
padding:0px;
}

td.wfWorkflowDisabled
{
cursor:default;
color: #999999;
text-align: center;
}

A.ms-crm-workflow:link,
A.ms-crm-workflow:visited,
A.ms-crm-workflow:active {
color: #3366CC;
}

A.ms-crm-workflow:hover {
color: #0000FF;
text-decoration: underline;
}

table.ms-crm-workflow-inner,
table.ms-crm-workflow-outer
{
width:100%;
padding-top:1px;
margin:0px;
}

table.ms-crm-workflow-outer-selected
{
width:100%;
padding:0px;
margin:0px;
border: 1px solid #A7CDF0;
background-color: #A7CDF0;
}

td.ms-crm-workflow-composite-link
{
padding-top:4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:1px;
    text-align: left;
<% }
   else
   { %>
    padding-right:1px;
<% } %>
width:35px;
}

td.ms-crm-workflow-page-title
{
padding-top:4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:1px;
    text-align: left;
<% }
   else
   { %>
    padding-right:1px;
<% } %>
width:30px;
}


td.ms-crm-workflow-title
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:20px;
<% }
   else
   { %>
    padding-right:20px;
<% } %>
padding-bottom:2px;
padding-top:2px;
}

td.ms-crm-workflow-stepData
{
padding-top:2px;
color: #000000;
}

td.ms-crm-workflow-response-not-logged
{
color: #CCCCCC;
}

td.wfCustomActivityParameter
{
height:25px;
valign:absmiddle;
}

img.expandCollapseImg
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    <%= FlipImage("h") %>
<% } %>
padding-left:6px;
padding-right:6px;
}

img.stepImg
{
padding-left:6px;
padding-right:6px;
}

.workflowstepmenu
{
height:30px !important;
padding-top:0px !important;
}

.workflowstepmenu ul.ms-crm-MenuBar-Left,
.workflowstepmenu ul.ms-crm-MenuBar-Right,
{
margin:0px;
}
INPUT
{
width:97%;
}
input.wfStageDescription{
display:block;
width:auto;
}
.stdTable td
{
overflow:hidden;
text-overflow: ellipsis;
}


div.gridContainer-WFStopMessage
{
position:absolute;
top:104px;
bottom:0px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    right: 0px;
    left: 208px;
<% }
   else
   { %>
    left:0px;
    right:208px;
<% } %>
}

div.ms-crm-Form-Area-WFStopMessage
{
position:absolute;

top:104px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    left:0px;
<% }
   else
   { %>
    right:0px;
<% } %>
}