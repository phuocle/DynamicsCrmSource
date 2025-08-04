<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>



TABLE.ms-crm-AddUsers-SingleSelect
{
table-layout: fixed;
width: 400px;
}

DIV.ms-crm-AddUsers-SecurityRoles-Intro
{
padding-bottom: 10px;
}

DIV.ms-crm-AddUsers-FinishMessages
{
padding-bottom: 10px;
}

DIV.ms-crm-AddUsers-SecurityRoles
{
position:absolute;
top:50px;
bottom:0px;
width: 100%;
}

TABLE.ms-crm-AddUsers-MaxWidth
{
table-layout: fixed;
width: 100%;
}

DIV.ms-crm-AddUsers-RoleDescription
{
background-color: #EAF3FF;
border: #898C95 1px solid;
height: 80px;
margin: 10px;
padding: 10px;
table-layout: fixed;
}

DIV.ms-crm-AddUsers-Licensing-AccessModeLabel,
DIV.ms-crm-AddUsers-RoleDescription
{
padding-top: 3px;
}

INPUT.ms-crm-AddUsers-RadioButton
{
border: 0px;
cursor: pointer;
margin-left: 5px;
margin-right: 5px;
width:15px;
}

TABLE.ms-crm-AddUsers-Licensing
{
padding-bottom: 12px;
table-layout: fixed;
width: 66%;
}

TABLE.ms-crm-AddUsers-Licensing-LicenseCount
{
margin-top: 8px;
padding: 5px;
width: 400px;
}

TD.ms-crm-AddUsers-Licensing-LicenseCount-First
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right: 1px solid #A7CDF0;
<% }
   else
   { %>
    border-left: 1px solid #A7CDF0;
<% } %>
}

TD.ms-crm-AddUsers-Licensing-LicenseCount
{
border-bottom: 1px solid #A7CDF0;
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-left: 1px solid #A7CDF0;
<% }
   else
   { %>
    border-right: 1px solid #A7CDF0;
<% } %>
border-top: 1px solid #A7CDF0;
width: 33%;
}

TABLE.ms-crm-AddUsers-UserInput
{
padding-top: 1px;
padding-bottom: 1px;
}

TR.ms-crm-AddUsers-UserInputField
{
padding-bottom: 5px;
}

TD.ms-crm-AddUsers-UserInputButtons
{
text-align: center;
vertical-align: top;
}

TD.ms-crm-AddUsers-UserInputButtons BUTTON
{
margin-bottom: 7px;
margin-left: 5px;
margin-right: 5px;
margin-top: 3px;
}

TD.ms-crm-AddUsers-DomainsAndGroups-Option
{
height: 20px;
vertical-align: middle;
}

.ms-crm-AddUsers-Tree
{
border: #CCCCCC 1px solid;
height: 99%;
overflow: auto;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: .5%;
<% }
   else
   { %>
    padding-left: .5%;
<% } %>
width: 99.5%;
}

.ms-crm-AddUsers-Node
{
padding-right: 2px;
width: 100%;
}

.ms-crm-AddUsers-HoverNode
{
background-color: #c4ddff;
}

.ms-crm-AddUsers-SelectedNode
{
background-color: #a7cdf0;
border: solid 1px #6893cf;
}

DIV.ms-crm-AddUsers-SelectUsers-LookupContainer
{
width: 550px;
}

LI.ms-crm-InvitationOption
{
padding-top: 5px;
}

DIV.ms-crm-InvitationOption-SecondLine
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 30px;
<% }
   else
   { %>
    padding-left: 30px;
<% } %>
}

TD.ms-crm-AddUsers-Progress
{
cursor: wait;
text-align: center;
vertical-align: middle;
}

TD.ms-crm-AddUsers-TitleDescription-Spacing
{
padding-top: 10px;
}

TD.ms-crm-AddUsers-CalType-Select
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 12px;
    padding-left: 200px;
<% }
   else
   { %>
    padding-left: 12px;
    padding-right: 200px;
<% } %>

}

DIV.RolesPosition
{
position:absolute;
height:100%;
width:50%;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
<% }
   else
   { %>
    float:left;
<% } %>
}

DIV.DescriptionPosition
{
width:50%;
vertical-align:top;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float:left;
<% }
   else
   { %>
    float:right;
<% } %>
}