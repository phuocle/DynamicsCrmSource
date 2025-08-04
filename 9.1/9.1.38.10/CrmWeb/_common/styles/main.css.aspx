<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

html,
body
{
height: 100%;
overflow: hidden;
}

#outer
{
height: 100%;
min-height: 100%;
}

html>body #outer
{
height: auto;
}

div.crmUserInfo
{
<% if (CrmStyles.IsRightToLeft) { %>
align: left;
text-align: left;
<% } else { %>
align: right;
text-align: right;
<% } %>
top: 0;
position: fixed;
vertical-align: top;
height: 50px;
max-width: 250px;
text-overflow: ellipsis;
overflow: hidden;
}

div.crmContentPanel
{
display: block;
position: absolute;
top: 135px;
bottom: 0px;
width: 100%;
padding-right: 4px;
}

a.crmContentPanel
{
position: fixed;
}

div.ms-crm-TopBarContainer
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
top: 0px;
width: 100%;
}

div.ms-crm-TopBarContainer.newNavBarMode
{
top: 50px;
background-size:auto 0px;
overflow: hidden;
}

div.ms-crm-TopBarContainerGlobal
{
background-repeat: no-repeat;
}

div.ms-crm-TopBarContainerForm
{
background-repeat : repeat-x;
}

div.crmAppNav
{
<% if (CrmStyles.IsRightToLeft) {%>
border-left-width: 1px;
border-left-style: solid;
<% } else {%>
border-right-width: 1px;
border-right-style: solid;
<% } %>

display: block;
position: fixed;
z-index: 100;
left: 0;
overflow: hidden;
}

div.crmRibbonErrorBody
{
border-bottom-color: #6693cf;
border-top-color: #6693cf;
border-bottom-style: solid;
border-top-style: solid;
border-bottom-width: 1px;
border-top-width: 1px;
}


span.warningHeader
{
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size:<%= WebUtility.GetFontResourceForStyle("General.22px.font_size") %>;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #990000
}

span.warningDescription
{
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size:<%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
}

#crmUrlAddressableWidgetHolder
{
display:none;
height: calc(100% - 50px);
position:absolute;
top:50px;
overflow: hidden;
<% if (CrmStyles.IsRightToLeft) {%>
left:0;
<% } else {%>
right:0;
<% } %>
}

#crmUrlAddressableWidget
{
width: 100%;
height: 100%;
border: 0;
}

#expandCollapse
{
width:16px;
height:16px;
background-repeat: no-repeat;
display:block;
}

@media screen and (-ms-high-contrast: black-on-white)
{
#expandCollapse[data-state="expanded"]
{
background-image: url("/_imgs/navRight_HC_B.png") !important;
}
#expandCollapse[data-state="collapsed"]
{
background-image: url("/_imgs/navLeft_HC_B.png") !important;
}
}

@media screen and (-ms-high-contrast: active)
{
#crmUrlAddressableWidgetHolder
{
border: 1px solid;
z-index: 999;
}
#expandCollapse[data-state="expanded"]{
background-image: url("/_imgs/navRight_HC_W.png");
}
#expandCollapse[data-state="collapsed"]{
background-image: url("/_imgs/navLeft_HC_W.png");
}
}

#expandCollapse {
<% if (CrmStyles.IsRightToLeft) {%>
padding-right: 10px;
<% } else {%>
padding-left: 10px;
<% } %>
padding-top: 7px;
background-position: bottom;
background-position-x: right;
background-position-y: bottom;
}

#expandCollapseDiv {
width: 36px;
margin-left: 4px;
height: 30px;
margin-top: 5px;
padding: 0;
}

#expandCollapseDiv:hover
{
background-color:#D7EBF9;
}

#expandCollapseHolder{
background-color: #f8f8f8;
height: 40px;
overflow: auto;
overflow-y: hidden;
overflow-x: hidden;
<% if (CrmStyles.IsRightToLeft) {%>
border-right: 1px solid #e8e8e8;
<% } else {%>
border-left: 1px solid #e8e8e8;
<% } %>
}