<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
html, body
{
height: 100%;
}

DIV.ms-crm-HSMConfigDialog-Main
{
position: relative;
width: 575px;
border-bottom-style: none;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-right:15px;
<% }
   else
   { %>
    margin-left:15px;
<% } %>
hieght:100%;
font-size:12px;
color:#444444;
font-family:Segoe UI;
margin-top:15px;
display: inline-block;
}
DIV.ms-crm-MainDiv
{
position: absolute;
width: 100%;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;
overflow-y: auto;
}

label
{
cursor: default !important;
}

DIV.ms-crm-HSMConfigDialog-List
{
position: absolute;
left: 0px;
right: 0px;
bottom: 0px;
overflow-y: scroll;
width: 226px;
border: 1px #c6c6c6 solid;
top:15px;
hieght:100%;
margin-top:8px;
}
.ms-crm-HSMConfigDialog-AvailableAttributesColumn
{
margin-bottom: 5px;
position: absolute;
height:230px;
width:226px;
display:inherit;
}

.ms-crm-HSMConfigDialog-SelectedAttributesColumn
{
margin-bottom: 5px;
position: absolute;
height:230px;
width:226px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    right:70%;
<% }
   else
   { %>
    left:70%;
<% } %>
display:inherit;
}

.ms-crm-Wrapper
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-right: 15px;
<% }
   else
   { %>
    margin-left: 15px;
<% } %>
}

.ms-crm-ManagerLinkButton
{
top: 8px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-right: 26px;
<% }
   else
   { %>
    margin-left: 26px;
<% } %>
}

.ms-crm-PositionLinkButton
{
position: relative;
top: -13px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-right: 225px;
<% }
   else
   { %>
    margin-left: 225px;
<% } %>
}


.ms-PageHeader
{
font-size:36px;
color:#000000;
font-family:Segoe UI light;
position:relative;
}

.ms-PageTitle
{
font-size:12px;
color:#444444;
font-family:Segoe UI;
vertical-align:top;
top:10px;
position:relative;
font-weight:normal;
}

.subtitle
{
font-weight: normal !important;
font-size: 12px !important;
}
.ms-TurnHSM
{
position: relative;
margin-top:30px;
color:#000000;
font-weight:bold;
font-family:Segoe UI;
font-size: 12px !important;
}

input[type="checkbox"]
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-right:0px !important;
<% }
   else
   { %>
    margin-left:0px !important;
<% } %>
}

.titleFont
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    padding-right:0px !important;
<% }
   else
   { %>
    padding-left:0px !important;
<% } %>
}
.ms-CheckControlHSM
{
position: relative;
margin-top:16px;
font-size:12px;
color:#000000;
font-family:Segoe UI;
}

.ms-SelectHSM
{
position: relative;
margin-top:30px;
font-size:12px;
color:#000000;
font-family:Segoe UI;
font-weight:bold;
}

.ms-HierarchyDepth
{
position: relative;
margin-top:10px;
font-size:12px;
color:#000000;
font-family:Segoe UI;
width:400px;
font-weight:bold;


}
.ms-HierarchyDepth table
{
border-spacing: 0px !important;
}

.ms-HierarchyDepth table tr td
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    padding-right:0px !important;
<% }
   else
   { %>
    padding-left:0px !important;
<% } %>
}

.ms-RadioControlHSM table
{
border-spacing: 0px !important;
}

.ms-RadioControlHSM table tr td
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    padding-right:0px !important;
<% }
   else
   { %>
    padding-left:0px !important;
<% } %>
}

.mx-BoldText
{
font-weight:bold;
}

input.ms-crm-RadioButton
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-left:10px !important;
<% }
   else
   { %>
    margin-right:10px !important;
<% } %>

}

.ms-RadioControlHSM
{
position: relative;
margin-top:16px;
font-size:12px;
color:#000000;
font-family:Segoe UI;
width: 450px;
}

.ms-crm-QuickFindConfigDialog-ButtonsColumn
{
top: 85px;
bottom: 5px;
position: absolute;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    right:47%;
<% }
   else
   { %>
    left:47%;
<% } %>
width:114px;
display:inherit;
}

.ms-crm-QuickFindConfigDialog-AvailableAttributesColumn
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    right: 5px;
<% }
   else
   { %>
    left: 5px;
<% } %>
width: 40%;
}


.ms-crm-QuickFindConfigDialog-ButtonsColumn > ul
{
position: relative;
}

.ms-crm-QuickFindConfigDialog-SelectedAttributesColumn
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    left: 5px;
<% }
   else
   { %>
    right: 5px;
<% } %>
width: 40%;
}
.ms-crm-Add-Remove-button
{
max-width: 100px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.ms-crm-HSMConfigDialog-ListLabel
{
height: 10px;
font-size:12px;
color:#444444;
font-family:Segoe UI;
}