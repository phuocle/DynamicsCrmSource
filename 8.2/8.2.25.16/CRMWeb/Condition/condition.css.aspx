<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>




SPAN.cndDetailed
{
height: 100%;
width: 99.8%;
border-top: 0px;
}


TABLE.cndConditionGroup
{
width: 100%;
height: 100%;
display: block;
white-space:nowrap;
margin-top: 2px;
margin-bottom: 2px;
border-bottom: #a5acb5;
vertival-align: top;
}

.cndGroupLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<%} %>
}

.cndGroupPadding
{
min-width: 3px;
}


DIV.cndConditionFieldNew
{
border-bottom: 1px solid #a5acb5;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid #a5acb5;
<% } else { %>
border-left: 1px solid #a5acb5;
<% } %>
height: 25px;
width: 100%;
vertical-align: middle;
display: block;
overflow:hidden;
white-space: nowrap;
}



SPAN.cndFldValue
{
width: 200px;
height: 100%;
vertical-align: middle;
}

TD.cndFormAssistantArea
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:7px;
<% } else { %>
padding-left:7px;
<% } %>
}
.ms-crm-MenuBlock
{
position: absolute;
left: 0px;
right: 0px;
height: 49px;
}
.ms-crm-Condition-Control
{
display: block;
height : auto;
margin: 0px 1px;
}

.cndCondition
{
width: 100%;
height: 100%;
position:absolute;
overflow:auto;
}

DIV.ms-crm-AdvFind-EmptyField
{
border: 0px;
}

.Condition_td_AppCondition
{
position:absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right:10px;
<% } else { %>
left:10px;
<%} %>
top:10px;
bottom:10px;
border:1px solid #a5acb5;
overflow:auto;
background-color:#FFF;
}
.RelatedInformationPaneContainer
{
position: absolute;
width: 208px;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<%} %>
}

.ms-crm-ActionBar
{
border:none
}
.DuplicateRuleCondition_div_Status
{
height:15%;
width: 100%;
bottom:0px;
position:relative;
padding-top: 3px;
padding-bottom: 3px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 21px;
padding-left: 3px;
<% } else { %>
padding-left: 21px;
padding-right: 3px;
<% } %>
}
.DuplicateRuleCondition_div_Container
{
height:85%;
width: 100%;
top:0px;
position:relative;
overflow-y: auto;
overflow-x: hidden;
}
.DuplicateRuleCondition_div_AppCondition
{
top: 0px;
bottom: 0px;
position: absolute;
}
span.fixedHeight
{
height:150px !important;
overflow:auto !important;
}
div.fixedHeight
{
left:0.5% !important;
right:0.5% !important;
width:98% !important;
height:auto !important;
border: 1px solid #a5acb5 !important;
}
span.autoGrow
{
height:auto !important;
overflow:hidden !important;
}
div.autoGrow
{
width:auto !important;
height:auto !important;
position:relative !important;
border: 1px solid #a5acb5 !important;
margin:1px !important;
}
