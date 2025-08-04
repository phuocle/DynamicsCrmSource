<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

.ms-crm-IE7-Height-Fix-Dummy-Container
{
position: relative !important;
}

#contentDiv.contentDiv,
.ms-crm-absolutePosition
{
position:relative !important;
}

.ms-crm-appgridmenubar
{
border: 0px;
}
.ms-crm-InlineTabBody
{
height: 100%;
display: block;
}
.ms-crm-Input-Container TEXTAREA
{
position: relative;
}
.ms-crm-Form-StatusBar-Container
{
position: absolute;
left: 0px;
right: 0px;
bottom: 0px;
height: 25px;
}
#tab0, #tab1, #tab2{
width: 98%;
height: 98%;
padding: 1%;
overflow: auto;
position:relative;
}
iframe.noteData{
width: 94%;
height: 91%;
position: absolute;
}

ms-crm-containerabsolutePosition{
height: 70%;
width: 100%
}
#PP_Container table.stdTable, #PP_Container Div.stdTable
{
height: auto;
}

.ms-crm-Form-Nav-Container
{
width:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
}
.ms-crm-Form-Main-Container
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    right:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
<% }
   else
   { %>
    left:<%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
<% } %>
margin-top:20px;
}

.wfWorkflowDefinitionContainer
{
bottom:10px;
}