<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
.RelatedInformationPaneContainer
{
padding-bottom:0px;
padding-top:0px;
}

.RelatedInformationPaneContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<% } %>
}

.RelatedInformationPaneCollapsedContainer
{
width:27px;
}
.RelatedInformationPaneExpandedContainer
{
width:208px;
height:100%;
}

DIV.RelatedInformationPane
{
width: 208px;
height: 100%;
vertical-align: top;
position: relative;
overflow: auto;
}

TD.RelatedInformationPane
{
width: 200px;
}

DIV.RelatedInformationPaneCollapsed
{
width: 25px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>

}

TR.RelatedInformationHeaderRow
{
padding: 4px;
}
TD.RelatedInformationTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:8px;
<% } else { %>
padding-left:8px;
<% } %>

}

TR.AreaHeading
{
padding-bottom: 2px;
padding-top: 1px;
}
DIV.AreaHeading
{
color: #606050;
}
SELECT.ContextSelect
{
margin-bottom: 2px;
width: 100%;
}
TD.RelatedInformationDataArea
{
height: 95%;
padding-top: 0px;
padding-bottom: 4px;
padding-left: 4px;
padding-right: 4px;
vertical-align: top;
}
span.InformationItem
{
text-decoration: none;
color: #003DB2;
width: 170px;
overflow-x: hidden;
text-overflow: ellipsis;
cursor: pointer;
}
span.underline
{
text-decoration: underline;
}
DIV.InformationLoading
{
border-width: thin;
text-align: center;
}
DIV.InformationMessage
{
width: 100%;
border-width: thin;
color: #FF0000;
padding: 4px;
}
TD.ContextSelectTD
{
padding-top: 4px;
vertical-align:top;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
}
DIV.CategoryList
{
top:25px;
overflow-y:auto;
overflow-x:hidden;
bottom:0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
}
.Hidden
{
display: none;
}
.ContextHelper
{
height: 0px;
width: 0px;
}
div.CategoryList
{
position:absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right:5px;
left:0px;
<% } else { %>
left:5px;
right:0px;
<% } %>
}
.InformationContents
{
position:absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right:5px;
left:0px;
<% } else { %>
left:5px;
right:0px;
<% } %>
}

TD.CategoryList
{
vertical-align:top;
}

.InformationContents
{
top:20px;
bottom:0px;
}


DIV.Category
{
margin-top: 4px;
vertical-align: top;
position: relative;
width: 100%;
}
div.CategoryHeading
{
padding-bottom: 2px;
padding-top: 1px;
height:24px;
}

span.CategoryHeadingImage
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
vertical-align: middle;
cursor: pointer;
padding-top: 2px;
padding-left: 3px;
left:0px;
<% } else { %>
text-align: right;
vertical-align: middle;
cursor: pointer;
padding-top: 2px;
padding-right: 3px;
right: 0px;
<% } %>
height: 22px;
top: 0px;
position:absolute;
}
div.CategoryBody
{
border-width: 1px;
border-style: solid;
padding: 0px;
}
DIV.ms-crm-Category-List
{
width: 100%;
margin-right: 2px;
margin-left: 2px;
margin-bottom: 2px;
border-width: 1px;
border-style: solid;
}

TABLE.CategorySearch,
TABLE.tbDurationControl
{
background-color: #FFFFFF;
width: 100%;
}

DIV.CategoryDataArea
{
margin: 4px;
}
DIV.CategoryData_FollowUp
{
background-color: #FFFFFF;
}


span.ftImage
{
width: 20px;
height: 26px;
display: inline-block;
vertical-align: bottom;
}
span.ftSelectTarget
{
<% if (CrmStyles.IsRightToLeft) { %>
vertical-align: middle;
margin-left: 0px;
margin-right: 0px;
<% } else { %>
margin-right: 10px;
<% } %>
height: 26px;
position: absolute;
}
span.ftOn
{
<% if (CrmStyles.IsRightToLeft) { %>
background-color: #a7cdf0;
<% } else { %>
background-color: #FF0000;
<% } %>
border: solid 1px #6893cf;
}
span.ftLabel
{
margin-right: 10px;
position: relative;
vertical-align: bottom;
top: -9px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 10px;
<% } else { %>
margin-right: 10px;
<% } %>
text-overflow: ellipsis;
overflow: hidden;
}
div.ftRow
{
white-space: nowrap;
margin-top: 0px;
margin-bottom: 0px;
padding-top: 0px;
padding-bottom: 0px;
cursor: pointer;
width: 166px;
overflow: hidden;
text-overflow: ellipsis;
position: relative;
}
div.fulltree
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
margin-bottom: 10px;
border: 0px solid #6489D4;
<% } else { %>
margin-left: 2px;
<% } %>
overflow: auto;
width: 100%;
height: 100%;
}