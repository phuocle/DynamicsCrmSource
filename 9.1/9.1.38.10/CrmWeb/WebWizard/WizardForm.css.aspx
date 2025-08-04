<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
BODY
{
background-color: #ffffff;
overflow: auto;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;
}

DIV.ms-crm-WizardForm-Header,
DIV.ms-crm-WizardForm-Main,
.ms-crm-WizardForm-Footer{
min-width:400px;
}

DIV.ms-crm-WizardForm-Header
{
position: absolute;
top:0px;
height: 40px;
width: 100%;
left: 0px;
right: 0px;
}

DIV.ms-crm-WizardForm-Header-Title
{
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% } else { %>
margin-left: 30px;
<% } %>

}

DIV.ms-crm-WizardForm-Header-Help
{
padding-top: 10px;

<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
float: left;
margin-left: 30px;
<% } else { %>
text-align: right;
float: right;
margin-right: 30px;
<% } %>
width: 115px;
}

img.ms-crm-WizardForm-Header-Help
{
cursor: pointer;
border: 0;
height: 16px;
width: 16px;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
margin-left: 1%;
<% } else { %>
margin-right: 1%;
<% } %>
}

SPAN.ms-crm-WizardForm-Header-Title
{
padding-top: 10px;

<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 1%;
float: right;
<% } else { %>
padding-right: 1%;
float: left;
<% } %>
}

DIV.ms-crm-WizardForm-Print
{
text-align: right;
}

img.ms-crm-WizardForm-Print-Icon
{
cursor: pointer;
border: 0;
height: 16px;
width:  16px;
vertical-align: top;
margin-right: 1%;
}

SPAN.ms-crm-WizardForm-Print-Label
{
color: #15428b;
}

DIV.ms-crm-WizardForm-Main
{
position:		absolute;
top:			40px;
bottom:			41px;
width:          96%;

vertical-align:	top;
border-bottom-width: 1px;
border-bottom-style:  solid;
overflow: auto;

padding-top: 10px;
padding-bottom: 10px;
left: 0px;
right: 0px;
border: none;
}

.ms-crm-WizardForm-Description
{
position: absolute;

padding-top: 10px;
height: 40px;
width: 90%;
margin-left: 30px;
margin-right: 30px;
}

DIV.ms-crm-WizardForm-BodyTop-Without-Description
{
top: 10px;
}

DIV.ms-crm-WizardForm-BodyTop-With-Description
{
top: 60px;
}

.ms-crm-WizardForm-Body
{
position: absolute;
padding: 0px;
bottom: 0px;
width: 100%;
}

DIV.ms-crm-WizardForm-Body-Inner
{
position: absolute;

height: 99%;
width: 90%;
margin-left: 30px;
margin-right: 30px;
}

.ms-crm-WizardForm-Footer
{
position:absolute;
bottom:0px;
width:100%;

height: 30px;
padding-top: 10px;


<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
}

.ms-crm-WizardForm-FooterButton
{
height: 22px;
overflow: visible;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
min-width: 84px;
width: auto;
}

.ms-crm-ImageStrip-frm_required
{
<% if (Request.Browser.Browser != "IE") { %>
left: initial !important;
top: initial !important;
<% } else { %>
left: auto !important;
top: auto !important;
<% } %>
}