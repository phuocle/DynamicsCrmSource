<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>


.ms-crm-Setting-ContextHeader-Title
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    direction: rtl;
<% }
   else
   { %>
    direction: ltr;
<% } %>
}


#framecontainer
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    direction: rtl;
<% }
   else
   { %>
    direction: ltr;
<% } %>
}


.wsdlTitle
{
font-size: 14px;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight: bold;
padding-top: 16px;
}

.wsdlSubTitle
{
font-size: 12px;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight: bold;
padding-top: 10px;
}

div.wsdlData
{
font-size: 11px;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;;
max-width: 500px;
}

div.wsdlMargin
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 12px;
<% }
   else
   { %>
    margin-left: 12px;
<% } %>
width:48%;
min-width:510px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}
span.mscrm-link-title.ms-crm-TextAutoEllipsis
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}
.mscrm-link-title
{
width: 100px;
display: inline-block;
}
.mscrm-link-container
{
line-height: 2rem;
}

img.wsdlIcon
{
margin-top: 2px;
margin-bottom: 2px;
margin-right: 5px;
margin-left: 5px;
}

input.wsdlLink,.wsdlData a
{
text-decoration: none;
width: 380px;
padding: 2px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 10px;
<% }
   else
   { %>
    margin-left: 10px;
<% } %>

}

input.wsdlLink
{
direction: ltr !important;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

a.wsdlLink:hover,
.wsdlData a:hover
{
text-decoration: underline;
}
.wsdlData a
{
padding:0;
margin:0;
}

.devresourcepage-link-container
{
line-height:2rem;
}
.devresourcepage-link
{
padding-left: 12px;
padding-right: 12px;
}