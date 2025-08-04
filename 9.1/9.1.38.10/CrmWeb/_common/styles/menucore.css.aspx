<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

DIV.ms-crm-Menu
{
height : 100%:
width : 100%;
overflow : hidden;
}

LI.ms-crm-MenuItem-NoOutline
{
outline: none;
}

DIV.ms-crm-RS-Menu
{
height : 100%:
width : 100%;

padding-left : 4px;
padding-right : 4px;

overflow : hidden;
}

LI.ms-crm-POPUP-MenuItem-Separator-h,
LI.ms-crm-VS-MenuItem-Separator-h
{
height: 3px;
line-height: 3px;
white-space: nowrap;
font-size: 0px;
}

DIV.ms-crm-VS-Loading-Menu
{
border : 1px solid #000000;
height : 100%:
width : 100%;
overflow : hidden;
}

UL.ms-crm-Menu
{
width : 100%;

display : block;

background-color : #ffffff;
border-left : 1px #d2d2d2 solid;
border-right : 1px #d2d2d2 solid;

overflow-y : auto ;
overflow-x : hidden;
}

UL.ms-crm-RS-Menu
{
display : block;

background-color : #ffffff;

overflow-y : auto ;
overflow-x : hidden;

height: 99%;
}

LI.ms-crm-MenuItem
{
display : inline ;
width : 100%;
}

LI.ms-crm-RS-MenuItem
{
width : 100%;
}

DIV.ms-crm-MenuItem-Spacer
{
height : 1px;
background-color : #000000;
display : block ;
}

LI.ms-crm-MenuItem-Spacer
{
height : 3px;
display : inline ;
}

DIV.ms-crm-MenuItem-Spacer
{
height : 1px;
background-color : #000000;

<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 18px;
<% } else { %>
margin-left: 18px;
<% } %>
}

A.ms-crm-MenuItem,
A.ms-crm-MenuItem:link,
A.ms-crm-MenuItem:visited,
A.ms-crm-MenuItem:active
{
width : 100%;
cursor: pointer;

white-space: nowrap;
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;
margin-left : 3px;
margin-right : 3px;
}

A.ms-crm-MenuItem-Hover
{
background-color : #e0e7f7;
height : 20px;
border : 1px solid #b0c0d0;
}

A.ms-crm-MenuItem-Rest
{
background-color : #ffffff;
height : 20px;
border : 1px solid #ffffff;
}

A.ms-crm-RS-MenuItem-Anchor,
A.ms-crm-RS-MenuItem-Anchor:link,
A.ms-crm-RS-MenuItem-Anchor:visited,
A.ms-crm-RS-MenuItem-Anchor:active
{
width : 100%;
cursor: pointer;

white-space: nowrap;
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;

height : 22px;
}

A.ms-crm-RS-MenuItem-Anchor-Hover
{
border-width: 1px;
border-style: solid;
}

A.ms-crm-RS-MenuItem-Anchor-Rest
{
padding: 1px;
}

A.ms-crm-RS-MenuItem-Anchor-Selected
{
border-width: 1px;
border-style: solid;
}

A.ms-crm-MenuItemIconTitle-Hover
{
height : 20px;
border : 1px solid #e0e7f7;
}

A.ms-crm-MenuItemIconTitle-Rest
{
height : 20px;
border : 1px solid #ffffff;
}

TR.ms-crm-MenuItem-Hover
{
background-color : #e0e7f7;
height : 20px;
border : 1px solid #b0c0d0;
}

TR.ms-crm-MenuItem-Rest
{
background-color : #ffffff;
height : 20px;
border : 1px solid #ffffff;
}

TD.ms-crm-MenuItem-PinIcon-Hover
{
background-color : #e0e7f7;
}

TD.ms-crm-MenuItem-PinIcon-UnHover
{
}

DIV.ms-crm-RecentlyViewed-Header
{
height : 24px;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
font-weight : bold;
}

NOBR.ms-crm-RV-Header-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 5px;
<% } else { %>
margin-left : 5px;
<% } %>
margin-top : 5px;

height : 20px;
width : 100%;

line-height : 16px;

display : inline-block;
vertical-align : top;

overflow : hidden;
}

SPAN.ms-crm-MenuItem-Icon
{
width : 20px;
display : block;
height : 100%;
}

IMG.ms-crm-MenuItem-Icon
{
height : 16px;
width : 16px;

align : middle;
margin-top : 2px;

margin-left : 8px;
margin-right : 8px;
}

IMG.ms-crm-RS-MenuItem-Icon
{
height : 16px;
width : 16px;

align : middle;

vertical-align : middle;

margin-left : 4px;
margin-right : 4px;
}

NOBR.ms-crm-MenuItem-Title
{
height : 100%;
width : 100%;
}

NOBR.ms-crm-RS-MenuItem-Title
{
width : 90%;
height : 100%;
margin-left : 2px;
margin-right : 2px;

overflow : hidden;
text-overflow : ellipsis;
}

SPAN.ms-crm-MenuItem-Title
{
overflow : hidden;
text-overflow : ellipsis;
margin-left : 4px;
margin-right : 4px;
margin-bottom : 3px;

color : #15428b;
}

SPAN.ms-crm-RS-MenuItem-Title
{
overflow : hidden;
text-overflow : ellipsis;
margin-left : 4px;
margin-right : 4px;

line-height : 22px;
vertical-align : middle;

}

DIV.ms-crm-Floating-Div
{
position : fixed;
left : 0;
top : 0;

cursor : default;

background-image : url("/_imgs/imagestrips/transparent_spacer.gif");
background-repeat : repeat-x ;
}

DIV.ms-crm-NavBar-Floating-Nav
{
z-index : 90 ;
}

#LoadingContainer
{

<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 80px;
<% } else { %>
margin-left: 80px;
<% } %>
}


DIV.ms-crm-LoadingContainer
{
height : 80px;
width : 60px;
}

DIV.ms-crm-LoadingTitle
{
align : center ;
}

IMG.ms-crm-LoadingIcon
{
}

DIV.ms-crm-RecordSelector-Header
{
height : 53px;

}

DIV.ms-crm-RecordSelector-Footer
{
height : 23px;
}

DIV.ms-crm-RS-Footer-Container
{
display : block;
margin-top : 4px;
text-align : center;
}

SPAN.ms-crm-RS-Footer-PageText
{
padding-left : 8px;
padding-right : 8px;
}

DIV.ms-crm-RS-Header-Title
{
height : 33px;
width : 100%;
overflow: hidden;
text-overflow: ellipsis;
}

NOBR.ms-crm-RS-Header-Title,
NOBR.ms-crm-RS-Header-Title-Value
{
display : inline;

line-height : 33px;

<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>

font-size : 14px;
font-family : Segoe UI;
font-weight : normal;

height : 100%;

width : 100%;
}

NOBR.ms-crm-RS-Header-Title-Value
{
font-weight:    <%= WebUtility.GetFontResourceForStyle("General.600.font_weight")%>;
}

A.ms-crm-CMenuItem,
A.ms-crm-CMenuItem:link,
A.ms-crm-CMenuItem:visited,
A.ms-crm-CMenuItem:active
{
width : 100%;
cursor: pointer;

white-space: nowrap;
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;

border-left : 1px solid gray;
border-right : 1px solid gray;
}

A.ms-crm-CMenuItem-Hover
{

}

A.ms-crm-CMenuItem-Rest
{
background-color : #ffffff;
height : 20px;
}


IMG.ms-crm-CMenuItem-Icon
{
height : 18px;
width : 20px;

background-color : lightgrey;

align : middle;

<% if (CrmStyles.IsRightToLeft){ %>
border-right: 1px solid #f0f2f5;
<% } else { %>
border-left: 1px solid #f0f2f5;
<% } %>

border-top : 1px solid lightgrey;
border-bottom : 1px solid lightgrey;
}

IMG.ms-crm-CMenuItem-Icon-Hover
{
background-color : #e0e7f7;

<% if (CrmStyles.IsRightToLeft){ %>
border-right: 1px solid #b0c0d0;
<% } else { %>
border-left: 1px solid #b0c0d0;
<% } %>


border-top : 1px solid #b0c0d0;
border-bottom : 1px solid #b0c0d0;

margin-bottom : 1px;
}



NOBR.ms-crm-CMenuItem-Title-Hover
{
background-color : #e0e7f7;

border-right : 1px solid #b0c0d0;
border-top : 1px solid #b0c0d0;
border-bottom : 1px solid #b0c0d0;
}

NOBR.ms-crm-CMenuItem-Title
{
width : 100%;
height : 100%;
margin-bottom : 2px;
margin-top : 1px;

position : absolute ;
}

SPAN.ms-crm-CMenuItem-Title
{
overflow : hidden;
text-overflow : ellipsis;
margin-left : 4px;
margin-right : 4px;
margin-bottom : 5px;
display : block;

color : #15428b;
}

SPAN.ms-crm-CMenuItem-Title-Hover
{
}

DIV.ms-crm-CMenu-Header
{
height : 1px;
background-color : gray;
display : inline;
width : 100%;
}

DIV.ms-crm-CMenu-Footer
{
height : 1px;
background-color : gray;
display : inline;
width : 100%;
}

DIV.ms-crm-MenuItem-Header
{
font-weight : 700;
font-size : 11px;
color : #000000;
}

SPAN.ms-crm-CMI-Header-Title
{
font-size : 12px;
font-weight : 800;
text-overflow : ellipsis;
overflow : hidden;
vertical-align : top;

<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 3px;
<% } else { %>
margin-left: 3px;
<% } %>
}

LI.ms-crm-CMI-Header
{
height : 20px;

display : block;
background-color : red;
}

DIV.ms-crm-RS-Column-Title
{
display : block;
height : 20px;

margin-left : 4px;
margin-right : 4px;
}

NOBR.ms-crm-RS-Column-Title
{
line-height : 20px;
height : 100%;

<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 30px;
<% } else { %>
margin-left: 30px;
<% } %>

font-size : 11px;
font-family : Segoe UI;
font-weight:    <%= WebUtility.GetFontResourceForStyle("General.600.font_weight")%>;

overflow : hidden;
text-overflow : ellipsis;
}

table.ms-crm-RS-Menu
{
display : block;

border : 1px #C1C8D0 solid;

height : 100%;
width : 100%;

overflow-y : auto ;
overflow-x : hidden;
}

table.ms-crm-VS-loadingmenu
{
display : block;

background-color : #f1f3f5;
border : 1px #C1C8D0 solid;

height : 100%;
width : 100%;

overflow-y : auto ;
overflow-x : hidden;
}

/**
** START - These are the styles for the Context Menu/MenuItems in Standards Mode
*/
DIv.ms-crm-CM-Menu
{
overflow : hidden;
overflow-y : auto;
}

UL.ms-crm-CM-Menu
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right : 1px;
<%}else{ %>
padding-left : 1px;
<%} %>

padding-top : 2px;
padding-bottom : 2px;
border : 1px solid #a1a5aa;
overflow-x : hidden;
overflow-y : hidden;
background-color : #ffffff;

width : 100%;
}

UL.ms-crm-in-CM-Menu
{
display : block;

}

LI.ms-crm-CM-MenuItem
{
width : 196px;
}

A.ms-crm-CM-MenuItem-Anchor
{
background-color : #ffffff;
width : 100%;
height : 20px;
display : inline-block;
cursor : pointer;
}

IMG.ms-crm-CM-MenuItem-Icon
{
margin-left : 3px;
margin-right : 3px;
margin-top : 1px;
vertical-align : center;
}

SPAN.ms-crm-CM-MenuItem-Icon
{
height : 18px;
width : 24px;
display : inline-block;
}

SPAN.ms-crm-CM-MenuItem-Icon-Rest
{

<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

SPAN.ms-crm-CM-MenuItem-Icon-Hover
{
<% if (CrmStyles.IsRightToLeft){ %>
border-right-width: 1px;
border-right-style: solid;
<% } else { %>
border-left-width: 1px;
border-left-style: solid;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

span.ms-crm-CM-MenuItem-Sep
{
display : inline-block;
height : 18px;
width : 1px;
vertical-align : top;

}

span.ms-crm-CM-MenuItem-Sep-Rest
{

padding-top : 1px;
padding-bottom : 1px;
}

SPAN.ms-crm-CM-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>

display : inline-block;
width : 90%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

NOBR.ms-crm-CM-MenuItem-Title
{
height : 18px;
width : 169px; /** = 200 - 31*/

line-height : 18px;

display : inline-block;
vertical-align : top;

overflow : hidden;
}

NOBR.ms-crm-CM-MenuItem-Title-Rest
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

NOBR.ms-crm-CM-MenuItem-Title-Hover
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width: 1px;
border-left-style: solid;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;

}


/**
* START - These are the styles for the Inline Context MenuItems in Standards Mode
*/
LI.ms-crm-in-CM-MenuItem
{
width : 196px;
}

A.ms-crm-in-CM-MenuItem-Anchor
{
background-color : #ffffff;
width : 100%;
height : 20px;
display : inline-block;
cursor : pointer;
}

IMG.ms-crm-in-CM-MenuItem-Icon
{
margin-left : 3px;
margin-right : 3px;
margin-top : 1px;
vertical-align : center;
}

SPAN.ms-crm-in-CM-MenuItem-Icon
{
height : 18px;
width : 24px;
display : inline-block;
}

SPAN.ms-crm-in-CM-MenuItem-Icon-Rest
{


<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

SPAN.ms-crm-in-CM-MenuItem-Icon-Hover
{

<% if (CrmStyles.IsRightToLeft){ %>
border-right-width: 1px;
border-right-style: solid;
<% } else { %>
border-left-width: 1px;
border-left-style: solid;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

span.ms-crm-in-CM-MenuItem-Sep
{
display : inline-block;
height : 18px;
width : 1px;
vertical-align : top;
}

span.ms-crm-in-CM-MenuItem-Sep-Rest
{
padding-top : 1px;
padding-bottom : 1px;
}

span.ms-crm-in-CM-MenuItem-Sep-Hover
{
border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

SPAN.ms-crm-in-CM-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>	display : inline-block;
width : 85%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

NOBR.ms-crm-in-CM-MenuItem-Title
{
height : 18px;
width : 169px; /** = 200-31 */

line-height : 18px;

display : inline-block;
vertical-align : top;

overflow : hidden;
}

NOBR.ms-crm-in-CM-MenuItem-Title-Rest
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

NOBR.ms-crm-in-CM-MenuItem-Title-Hover
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width: 1px;
border-left-style: solid;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;

}



/**
* START - These are the styles for the Context MenuItem (Header) in Standards Mode
*/
Li.ms-crm-CM-header-MenuItem
{
background-color : #ffffff ;
}

A.ms-crm-CM-header-MenuItem-Anchor
{
background-color : #ffffff;
width : 100%;
height : 24px;
display : inline-block;
cursor : normal;
}

SPAN.ms-crm-CM-header-MenuItem-Icon
{
height : 22px;
width : 24px;
display : inline-block;
}

SPAN.ms-crm-CM-header-MenuItem-Icon-Rest,SPAN.ms-crm-CM-header-MenuItem-Icon-Hover
{

<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

span.ms-crm-CM-header-MenuItem-Sep
{
display : inline-block;
height : 22px;
width : 1px;
vertical-align : top;

}

span.ms-crm-CM-header-MenuItem-Sep-Rest,span.ms-crm-CM-header-MenuItem-Sep-Hover
{
padding-top : 1px;
padding-bottom : 1px;
}


SPAN.ms-crm-CM-header-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>
display : inline-block;
width : 90%;
overflow : hidden;
text-overflow : ellipsis;
vertical-align: middle;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
font-weight : bold;
}

NOBR.ms-crm-CM-header-MenuItem-Title
{
height : 20px;
width : 169px; /** = 200 - 31 */

line-height : 18px;

display : inline-block;
vertical-align : top;

overflow : hidden;
}


/**
* START - These are the styles for the Context Menu/MenuItems in Quirks Mode
*/
DIv.ms-crm-CM-Menu-qrk
{
overflow : hidden;

}

UL.ms-crm-CM-Menu-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right : 1px;
<%}else{ %>
padding-left : 1px;
<%} %>

padding-top : 1px;
padding-bottom : 1px;
border : 1px solid #b6b9bd;
overflow-x : hidden;
overflow-y : hidden;
background-color : #ffffff;
}

UL.ms-crm-in-CM-Menu-qrk
{
display : block;
}

LI.ms-crm-CM-MenuItem-qrk
{
height : 20px;
margin : 0px;
padding : 0px;
border : none;
}

A.ms-crm-CM-MenuItem-Anchor-qrk
{
background-color : #ffffff;
width : 100%;
display : inline-block;
cursor : pointer;

height : 20px;
margin : 0px;
padding : 0px;
border : none;
}


IMG.ms-crm-CM-MenuItem-Icon-qrk
{
margin-left : 3px;
margin-right : 3px;
margin-top : 1px;
vertical-align : center;
}

SPAN.ms-crm-CM-MenuItem-Icon-qrk
{
height : 20px;
width : 24px;
display : inline-block;
vertical-align : top;
}

SPAN.ms-crm-CM-MenuItem-Icon-Rest-qrk,
SPAN.ms-crm-CM-MenuItem-Icon-Hover-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
border-right-width: 1px;
border-right-style: solid;
<% } else { %>
border-left-width: 1px;
border-left-style: solid;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

span.ms-crm-CM-MenuItem-Sep-qrk
{
display : inline-block;
height : 20px;
width : 1px;
vertical-align : top;

}

span.ms-crm-CM-MenuItem-Sep-Rest-qrk
{
padding-top : 1px;
padding-bottom : 1px;
}

span.ms-crm-CM-MenuItem-Sep-Hover,
span.ms-crm-CM-MenuItem-Sep-Hover-qrk
{
border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

SPAN.ms-crm-CM-MenuItem-Title-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>
display : inline-block;
width : 90%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

NOBR.ms-crm-CM-MenuItem-Title-qrk
{
height : 20px;
width : 171px; /** = 200-29 */
line-height : 18px;
display : inline-block;
vertical-align : top;
overflow : hidden;
}

NOBR.ms-crm-CM-MenuItem-Title-Rest-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left: 1px solid #ffffff;
<% } else { %>
border-right: 1px solid #ffffff;
<% } %>

border-top : 1px solid #ffffff;
border-bottom : 1px solid #ffffff;
}

NOBR.ms-crm-CM-MenuItem-Title-Hover-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width: 1px;
border-left-style: solid;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
<% } %>


border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
background-color : #fff6d7;
}

DIV.ms-crm-RV-MenuItem-Separator-v
{
width : 1px;
display : inline-block;
height : 5px;
}
/**
Removed the height from middle span element as it is calculated by program based on height of DIV element
and margin applied in this style
*/
SPAN.ms-crm-RV-MenuItem-Separator-vm
{
width : 1px;
display : block;

margin-top : 5px;
margin-bottom : 5px;
}


SPAN.ms-crm-RV-MenuItem-Separator-vf,SPAN.ms-crm-RV-MenuItem-Separator-vl
{
width : 1px;
display : none;
height : 3%;
}


LI.ms-crm-CM-MenuItem-Separator-h,DIV.ms-crm-CM-MenuItem-Separator-h
{
height : 5px;
line-height : 5px;
display : block;
width : 100%;
background-color : #ffffff;
}

SPAN.ms-crm-CM-MenuItem-Separator-hf
{
width : 25px;

height : 100%;
display : inline-block;
vertical-align : top;
}

SPAN.ms-crm-CM-MenuItem-Separator-hm
{
width : 1px;

height : 100%;
display : inline-block;
vertical-align : top;
}

SPAN.ms-crm-CM-MenuItem-Separator-hl
{
width : 157px; /** = 200 - 24 - 4 - 7 -7 */
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>

height : 1px;
display : inline-block;
vertical-align : top;
margin-top : 2px;
}



/* Start Multi Select control styles
/**
** START - These are the styles for the Multi Select Control Menu/MenuItems in Standards Mode
*/

DIV.ms-crm-MultiSelect-HeaderFooter
{
height : 24px;
background-color : #f8f9fa;

border-top : 1px #a1a5aa solid;
border-left : 1px #a1a5aa solid;
border-right : 1px #a1a5aa solid;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
font-weight : bold;
}

Div.ms-crm-MS-Menu
{
overflow : hidden;
overflow-y : auto;
}

UL.ms-crm-MS-Menu
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right : 1px;
<%}else{ %>
padding-left : 1px;
<%} %>

padding-top : 2px;
padding-bottom : 2px;
border : 1px solid #a1a5aa;
overflow-x : hidden;
overflow-y : hidden;
background-color : #ffffff;

width : 100%;
}

UL.ms-crm-in-MS-Menu
{
display : block;
}

LI.ms-crm-MS-MenuItem
{
width : 196px;
white-space:nowrap;
}

A.ms-crm-MS-MenuItem-Anchor
{
background-color : #ffffff;
width : 90%;
height : 20px;
display : inline-block;
cursor : pointer;
}

IMG.ms-crm-MS-MenuItem-Icon
{
margin-left : 3px;
margin-right : 3px;
margin-top : 1px;
vertical-align : center;
}

SPAN.ms-crm-MS-MenuItem-Icon
{
height : 18px;
width : 24px;
display : inline-block;
}

SPAN.ms-crm-MS-MenuItem-Icon-Rest
{
background-color : #f0f2f5;

<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

SPAN.ms-crm-MS-MenuItem-Icon-Hover
{
background-color : #fff6d7;

<% if (CrmStyles.IsRightToLeft){ %>
border-right: 1px solid #f3aa07;
<% } else { %>
border-left: 1px solid #f3aa07;
<% } %>

border-top : 1px solid #f3aa07;
border-bottom : 1px solid #f3aa07;
}

span.ms-crm-MS-MenuItem-Sep
{
display : none;
}

span.ms-crm-MS-MenuItem-Sep-Rest
{
}

span.ms-crm-MS-MenuItem-Sep-Hover
{
border-top : 1px solid #f3aa07;
border-bottom : 1px solid #f3aa07;
background-color : #fff6d7;
}

SPAN.ms-crm-MS-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>

display : inline-block;
width : 80%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

NOBR.ms-crm-MS-MenuItem-Title
{
height : 18px;
width : 169px; /** = 200 - 31*/

line-height : 18px;

display : inline-block;
vertical-align : top;

overflow : hidden;
}

NOBR.ms-crm-MS-MenuItem-Title-Rest
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

NOBR.ms-crm-MS-MenuItem-Title-Hover
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left: 1px solid #f3aa07;
<% } else { %>
border-right: 1px solid #f3aa07;
<% } %>

border-top : 1px solid #f3aa07;
border-bottom : 1px solid #f3aa07;

background-color : #fff6d7;
}


/**
* START - These are the styles for the Inline Multi Select Control MenuItems in Standards Mode
*/
LI.ms-crm-in-MS-MenuItem
{
width : 196px;
white-space:nowrap;
}

A.ms-crm-in-MS-MenuItem-Anchor
{
background-color : #ffffff;
width : 100%;
height : 20px;
display : inline-block;
cursor : pointer;
}

IMG.ms-crm-in-MS-MenuItem-Icon
{
margin-left : 3px;
margin-right : 3px;
margin-top : 1px;
vertical-align : center;
}

SPAN.ms-crm-in-MS-MenuItem-Icon
{
height : 18px;
width : 24px;
display : inline-block;
}

SPAN.ms-crm-in-MS-MenuItem-Icon-Rest
{
background-color : #f0f2f5;

<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

SPAN.ms-crm-in-MS-MenuItem-Icon-Hover
{
background-color : #fff6d7;

<% if (CrmStyles.IsRightToLeft){ %>
border-right: 1px solid #f3aa07;
<% } else { %>
border-left: 1px solid #f3aa07;
<% } %>

border-top : 1px solid #f3aa07;
border-bottom : 1px solid #f3aa07;
}

span.ms-crm-in-MS-MenuItem-Sep
{
display : none;
}

span.ms-crm-in-MS-MenuItem-Sep-Rest
{
}

span.ms-crm-in-MS-MenuItem-Sep-Hover
{
}

SPAN.ms-crm-in-MS-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 12px;
<% } else { %>
margin-left : 12px;
<% } %>	display : inline-block;
width : 85%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

NOBR.ms-crm-in-MS-MenuItem-Title
{
height : 18px;
width : 169px; /** = 200-31 */

line-height : 18px;

display : inline-block;
vertical-align : top;

overflow : hidden;
}

NOBR.ms-crm-in-MS-MenuItem-Title-Rest
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

NOBR.ms-crm-in-MS-MenuItem-Title-Hover
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left: 1px solid #f3aa07;
<% } else { %>
border-right: 1px solid #f3aa07;
<% } %>

border-top : 1px solid #f3aa07;
border-bottom : 1px solid #f3aa07;

background-color : #fff6d7;
}



/**
* START - These are the styles for the Multi Select Control MenuItem (Header) in Standards Mode
*/
Li.ms-crm-MS-header-MenuItem
{
background-color : #ffffff ;
}

A.ms-crm-MS-header-MenuItem-Anchor
{
background-color : #ffffff;
width : 100%;
height : 20px;
display : inline-block;
cursor : normal;
}

SPAN.ms-crm-MS-header-MenuItem-Icon
{
height : 18px;
width : 24px;
display : inline-block;
}

SPAN.ms-crm-MS-header-MenuItem-Icon-Rest,SPAN.ms-crm-MS-header-MenuItem-Icon-Hover
{
background-color : #f0f2f5;

<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

span.ms-crm-MS-header-MenuItem-Sep
{
display : inline-block;
height : 18px;
width : 1px;
vertical-align : top;

}

span.ms-crm-MS-header-MenuItem-Sep-Rest,span.ms-crm-MS-header-MenuItem-Sep-Hover
{
padding-top : 1px;
padding-bottom : 1px;
background-color : #b6b9bd;
}


SPAN.ms-crm-MS-header-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>
display : inline-block;
width : 90%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
font-weight : bold;
}

NOBR.ms-crm-MS-header-MenuItem-Title
{
height : 20px;
width : 169px; /** = 200 - 31 */

line-height : 18px;

display : inline-block;
vertical-align : top;

overflow : hidden;
}


/**
* START - These are the styles for the Multi Select Control Menu/MenuItems in Quirks Mode
*/
DIV.ms-crm-MS-Menu-qrk
{
border : 1px solid #a1a5aa;
overflow-x : hidden;
overflow-y : hidden;
background-color : #ffffff;
}

UL.ms-crm-MS-Menu-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right : 1px;
<%}else{ %>
padding-left : 1px;
<%} %>

padding-top : 1px;
padding-bottom : 1px;
overflow-x : hidden;
overflow-y : auto;
background-color : #ffffff;
height : 100%;
}

UL.ms-crm-in-MS-Menu-qrk
{
display : block;
}

DIV.ms-crm-MS-MenuItem-Separator-v
{
width : 1px;
display : inline-block;
height : 5px;
}

SPAN.ms-crm-MS-MenuItem-Separator-vm
{
width : 1px;
background-color : #b6b9bd;
display : block;

margin-top : 5px;
margin-bottom : 5px;
}


SPAN.ms-crm-MS-MenuItem-Separator-vf,SPAN.ms-crm-MS-MenuItem-Separator-vl
{
width : 1px;
display : none;
height : 3%;
}

LI.ms-crm-MS-header-MenuItem-qrk,
LI.ms-crm-MS-MenuItem,
LI.ms-crm-MS-MenuItem-qrk
{
background-color : #ffffff;
height : 22px;
display : block;
}

LI.ms-crm-MS-header-MenuItem-Rest-qrk,
LI.ms-crm-MS-MenuItem-Rest,
LI.ms-crm-MS-MenuItem-Rest-qrk
{
padding : 1px;
}

LI.ms-crm-MS-MenuItem-Hover,
LI.ms-crm-MS-MenuItem-Hover-qrk
{
border-width: 1px;
border-style: solid;
}

SPAN.ms-crm-MS-header-MenuItem-Icon-qrk,
SPAN.ms-crm-MS-MenuItem-Icon-qrk
{
display : none;
}

IMG.ms-crm-MS-header-MenuItem-Icon-qrk,
IMG.ms-crm-MS-MenuItem-Icon-qrk
{
height : 16px;
width : 16px;
align : middle;
vertical-align : middle;
}

A.ms-crm-MS-header-MenuItem-Anchor-qrk,
A.ms-crm-MS-MenuItem-Anchor-qrk
{
height : 100%;
width : 85%;
display : block;
overflow : hidden;
text-overflow : ellipsis;
white-space: nowrap;
}


NOBR.ms-crm-MS-header-MenuItem-Title-qrk,
NOBR.ms-crm-MS-MenuItem-Title-qrk
{
height : 22px;
line-height : 18px;
display : inline;
overflow : hidden;
text-overflow : ellipsis;
}

SPAN.ms-crm-MS-header-MenuItem-Title-qrk
{
font-weight : bold;
}

SPAN.ms-crm-MS-header-MenuItem-Title-qrk,
SPAN.ms-crm-MS-MenuItem-Title-qrk
{
height : 20px;
display : inline;
overflow : hidden;
text-overflow : ellipsis;
width: 100%;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

SPAN.ms-crm-MS-header-view-item-MenuItem-Title-qrk,
SPAN.ms-crm-MS-view-item-MenuItem-Title-qrk
{
color : #15428B;
}

A.ms-crm-MS-header-MenuItem-Aux-qrk,
A.ms-crm-MS-MenuItem-Aux-qrk
{
display:inline;
}

A.ms-crm-MS-header-MenuItem-Aux-Rest-qrk,
A.ms-crm-MS-MenuItem-Aux-Rest-qrk
{
padding : 1px;
}

A.ms-crm-MS-header-MenuItem-Aux-Hover-qrk,
A.ms-crm-MS-MenuItem-Aux-Hover-qrk
{
border-width: 1px;
border-style: solid;
}

SPAN.ms-crm-MS-header-MenuItem-Aux-qrk,
SPAN.ms-crm-MS-MenuItem-Aux-qrk
{
margin-top : 2px;
margin-bottom : 2px;
display : inline-block;
margin-left : 2px;
margin-right:2px;
display : inline;
overflow : hidden;
}

IMG.ms-crm-MS-header-MenuItem-Aux-qrk,
IMG.ms-crm-MS-MenuItem-Aux-qrk
{
height : 14px;
width : 14px;
align : middle;
margin-top : 3px;
}

LI.ms-crm-MS-header-MenuItemL-qrk,
LI.ms-crm-MS-MenuItemL-qrk
{
background-color : #ffffff;

}

IMG.ms-crm-MS-header-MenuItem-IconL-qrk,
IMG.ms-crm-MS-MenuItem-IconL-qrk
{
align : middle;
vertical-align : middle;
}




/* END MultiSelect control styles



/**
* START - These are the styles for the View Selector Menu/MenuItems in Standards Mode
*/


SPAN.ms-crm-AVS-MenuItem-Icon-Rest
{

<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

IMG.ms-crm-POPUP-MenuItem-Icon,
IMG.ms-crm-Ntfc-MenuItem-Icon-qrk,
IMG.ms-crm-Ntfc-MenuItem-Icon,
IMG.ms-crm-VS-MenuItem-Icon
{
margin-left : 3px;
margin-right : 3px;
}
IMG.ms-crm-VS-MenuItem-Icon
{
height : 16px;
width : 16px;
}
IMG.ms-crm-AVS-MenuItem-Icon
{
position: relative;
top: 2px;
<% if (CrmStyles.IsRightToLeft){ %>
right: 3px;
<% } else { %>
left: 3px;
<% } %>
}
IMG.ms-crm-BVS-MenuItem-Icon-qrk,
IMG.ms-crm-SVS-MenuItem-Icon-qrk,
IMG.ms-crm-TVS-MenuItem-Icon,
IMG.ms-crm-TVS-MenuItem-Icon-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-left : 3px;
margin-right : 4px;
<% } else { %>
margin-left : 4px;
margin-right : 3px;
<% } %>
}

SPAN.ms-crm-POPUP-MenuItem-Icon,
SPAN.ms-crm-Ntfc-MenuItem-Icon-qrk,
SPAN.ms-crm-Ntfc-MenuItem-Icon,
SPAN.ms-crm-BVS-MenuItem-Icon-qrk,
SPAN.ms-crm-SVS-MenuItem-Icon-qrk,
SPAN.ms-crm-TVS-MenuItem-Icon-qrk,
SPAN.ms-crm-AVS-MenuItem-Icon
{
height : 18px;
width : 24px;
display : inline-block;
vertical-align : top;
}
SPAN.ms-crm-Ntfc-MenuItem-Icon-qrk,
SPAN.ms-crm-Ntfc-MenuItem-Icon
{
margin-top: 3px;
text-align: center;
}





/**
*START - These are the styles for the View Selector MenuItem (Header) in Quirks Mode
*/
Li.ms-crm-Ntfc-MenuItem-qrk,
Li.ms-crm-Ntfc-MenuItem,
Li.ms-crm-VS-header-MenuItem
{
background-color : #ffffff ;
height : 24px;
}
A.ms-crm-Ntfc-MenuItem-Anchor-qrk,
A.ms-crm-Ntfc-MenuItem-Anchor,
A.ms-crm-VS-header-MenuItem-Anchor
{
background-color : #ffffff;
width : 100%;
height : 24px;
display : inline-block;
cursor : default;
}
A.ms-crm-Ntfc-MenuItem-Anchor-qrk,
A.ms-crm-Ntfc-MenuItem-Anchor
{
background-image: url('/_imgs/MessageBar/msgbar-center.png');
background-repeat: repeat-x;
}
SPAN.ms-crm-Ntfc-MenuItem-Title-qrk,
SPAN.ms-crm-Ntfc-MenuItem-Title,
SPAN.ms-crm-VS-header-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>
display : inline-block;
width : 90%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
font-weight : bold;
}
NOBR.ms-crm-Ntfc-MenuItem-Title-qrk,
NOBR.ms-crm-Ntfc-MenuItem-Title,
NOBR.ms-crm-VS-header-MenuItem-Title
{
height : 24px;
width : 253px;

line-height : 24px;

display : inline-block;
vertical-align : top;

overflow : hidden;
text-overflow : ellipsis;
}


/**
* START - These are the styles for the View Selector Menu/MenuItems in Quirks Mode
*/
LI.ms-crm-BVS-MenuItem-qrk
{
height : 20px;
margin-bottom : 3px;
padding : 0px;
border : none;
}
LI.ms-crm-POPUP-MenuItem,
LI.ms-crm-SVS-MenuItem-qrk,
LI.ms-crm-TVS-MenuItem-qrk,
LI.ms-crm-VS-MenuItem
{
height : 22px;
margin : 0px;
padding : 0px;
border : 0px;
white-space : nowrap;
}

LI.ms-crm-VS-MenuItem[disabled="true"] a,
LI.ms-crm-VS-MenuItem[disabled="true"] a:link,
LI.ms-crm-VS-MenuItem[disabled="true"] a:visited,
LI.ms-crm-VS-MenuItem[disabled="true"] a:active
{
color:gray;
}

LI.ms-crm-AVS-MenuItem
{
height: 24px;
white-space: nowrap;
}

A.ms-crm-POPUP-MenuItem-Anchor,
A.ms-crm-TVS-MenuItem-Anchor-qrk,
A.ms-crm-BVS-MenuItem-Anchor-qrk,
A.ms-crm-SVS-MenuItem-Anchor-qrk,
A.ms-crm-VS-MenuItem-Anchor,
A.ms-crm-AVS-MenuItem-Anchor
{
width : 100%;
display : inline-block;
cursor : pointer;
height : 20px;
margin : 0px;
padding : 0px;
border : 0px;
}

A.ms-crm-AVS-MenuItem-Anchor
{
width : auto;
}

A.ms-crm-POPUP-MenuItem-Anchor-Selected,
A.ms-crm-BVS-MenuItem-Anchor-Selected-qrk,
A.ms-crm-SVS-MenuItem-Anchor-Selected-qrk,
A.ms-crm-TVS-MenuItem-Anchor-Selected-qrk,
A.ms-crm-AVS-MenuItem-Anchor-Selected,
A.ms-crm-VS-MenuItem-Anchor-Selected
{
padding: 0px;
border: none;
margin: 0px;
}
A.ms-crm-BVS-MenuItem-Anchor-Selected-qrk,
A.ms-crm-SVS-MenuItem-Anchor-Selected-qrk,
A.ms-crm-TVS-MenuItem-Anchor-Selected-qrk,
A.ms-crm-TVS-MenuItem-Anchor-qrk,
A.ms-crm-BVS-MenuItem-Anchor-qrk,
A.ms-crm-SVS-MenuItem-Anchor-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>
}

DIV.ms-crm-POPUP-MenuItem-Separator-h,
DIV.ms-crm-AVS-MenuItem-Separator-h,
DIV.ms-crm-VS-MenuItem-Separator-h
{
height : 5px;
display : block;
width : 100%;
font-size: 0px;

}

SPAN.ms-crm-POPUP-MenuItem-Separator-hf,
SPAN.ms-crm-AVS-MenuItem-Separator-hf,
SPAN.ms-crm-VS-MenuItem-Separator-hf
{
width : 24px;
font-size: 0px;
height : 100%;
display : inline-block;
vertical-align : top;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 1px;
padding-right : 1px;
<% } else { %>
margin-left : 1px;
padding-left : 1px;
<% } %>
}

SPAN.ms-crm-POPUP-MenuItem-Separator-hm,
SPAN.ms-crm-AVS-MenuItem-Separator-hm,
SPAN.ms-crm-VS-MenuItem-Separator-hm
{
width : 1px;
font-size: 0px;
height : 100%;
display : inline-block;
vertical-align : top;
}


SPAN.ms-crm-POPUP-MenuItem-Separator-hl
{
width : 130px;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>

font-size: 0;
height : 1px;
line-height: 1px;
display : inline-block;
vertical-align : top;
margin-top : 2px;
margin-bottom: 2px;
overflow-y: hidden;
}

SPAN.ms-crm-AVS-MenuItem-Separator-hl,
SPAN.ms-crm-VS-MenuItem-Separator-hl
{
width : 241px;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>

font-size: 0;
height : 1px;
line-height: 1px;
display : inline-block;
vertical-align : middle;
margin-top : 1px;
margin-bottom: 1px;
overflow-y: hidden;
}

SPAN.ms-crm-POPUP-MenuItem-Icon,
SPAN.ms-crm-AVS-MenuItem-Icon,
SPAN.ms-crm-VS-MenuItem-Icon
{
height : 20px;
line-height : 20px;
width : 24px;
display : inline-block;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 1px;
<% } else { %>
margin-left: 1px;
<% } %>
padding-top: 1px;
padding-bottom: 1px;
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>
}

SPAN.ms-crm-POPUP-MenuItem-Icon-Hover,
SPAN.ms-crm-AVS-MenuItem-Icon-Hover,
SPAN.ms-crm-AVS-MenuItem-Icon-Selected,
SPAN.ms-crm-VS-MenuItem-Icon-Hover
{
padding-top:    0px;
padding-bottom: 0px;

<% if (CrmStyles.IsRightToLeft){ %>
border-right-width: 1px;
border-right-style: solid;
padding-right: 0px;
<% } else { %>
border-left-width: 1px;
border-left-style: solid;
padding-left: 0px;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

SPAN.ms-crm-POPUP-MenuItem-Icon-Hover,
SPAN.ms-crm-VS-MenuItem-Icon-Hover
{
height : 20px;
}

SPAN.ms-crm-AVS-MenuItem-Icon-Hover,
SPAN.ms-crm-AVS-MenuItem-Icon-Selected
{
height : 22px;
}

SPAN.ms-crm-POPUP-MenuItem-Title,
SPAN.ms-crm-SVS-MenuItem-Title-qrk,
SPAN.ms-crm-BVS-MenuItem-Title-qrk,
SPAN.ms-crm-TVS-MenuItem-Title-qrk,
SPAN.ms-crm-VS-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>

<% if (Request.Browser.Browser == "IE") { %>
display : inline-block;
<% } %>
width : 100%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

INPUT.ms-crm-VS-MenuItem-Title
{
height : auto;
}

SPAN.ms-crm-AVS-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>
width : 100%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

NOBR.ms-crm-MenuItem-Disabled
{
color: #5b626c;
}
span.ms-crm-Ntfc-MenuItem-Sep-qrk,
span.ms-crm-Ntfc-MenuItem-Sep,
span.ms-crm-VS-header-MenuItem-Sep
{
display : inline-block;
height : 24px;
width : 1px;
vertical-align : top;
}

span.ms-crm-POPUP-MenuItem-Sep,
span.ms-crm-BVS-MenuItem-Sep-qrk,
span.ms-crm-SVS-MenuItem-Sep-qrk,
span.ms-crm-TVS-MenuItem-Sep-qrk,
span.ms-crm-VS-MenuItem-Sep
{
display : inline-block;
height : 22px;
line-height : 22px;
width : 1px;
vertical-align : top;
padding : 0px;
}

span.ms-crm-AVS-MenuItem-Sep
{
display : inline-block;
height : 22px;
width : 1px;
vertical-align : top;
}

span.ms-crm-POPUP-MenuItem-Sep-Hover,
span.ms-crm-AVS-MenuItem-Sep-Hover,
span.ms-crm-VS-MenuItem-Sep-Hover
{
padding-top : 0px;
padding-bottom : 0px;
border-top-width: 1px;
border-top-style: solid;
border-bottom-width: 1px;
border-bottom-style: solid;
height : 20px;
line-height : 20px;
}
span.ms-crm-AVS-MenuItem-Sep-Hover{
height :22px;
}
SPAN.ms-crm-AVS-header-MenuItem-Icon-qrk,
SPAN.ms-crm-VS-header-MenuItem-Icon
{
height : 20px;
width : 24px;
display : inline-block;
padding-left: 1px;

<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 1px;
<% } else { %>
margin-left : 1px;
<% } %>

}
NOBR.ms-crm-TVS-MenuItem-Title-qrk,
NOBR.ms-crm-BVS-MenuItem-Title-qrk,
NOBR.ms-crm-SVS-MenuItem-Title-qrk
{
width :90%;
margin-left :8px;
margin-right :8px;
height : 20px;
border-left:1px solid #7e7e7e;
border-right:1px solid #7e7e7e;

<% if (CrmStyles.IsRightToLeft) { %>

margin-left: 8px;
<%} else { %>

margin-right: 8px;
<%} %>

}
NOBR.ms-crm-BVS-MenuItem-Title-qrk
{

border-bottom:1px solid #7e7e7e;

}
NOBR.ms-crm-TVS-MenuItem-Title-qrk
{
border-top:1px solid #7e7e7e;
}

NOBR.ms-crm-POPUP-MenuItem-Title,
NOBR.ms-crm-VS-MenuItem-Title
{
height : 20px;
line-height : 18px;

padding : 1px 0px;
display : inline-block;
vertical-align : top;

overflow : hidden;
}

NOBR.ms-crm-AVS-MenuItem-Title
{
display: inline-block;
line-height : 18px;
vertical-align : top;
overflow : hidden;
width : 233px;
height: 22px;
}

NOBR.ms-crm-BVS-MenuItem-Title-qrk,
NOBR.ms-crm-SVS-MenuItem-Title-qrk,
NOBR.ms-crm-TVS-MenuItem-Title-qrk,
NOBR.ms-crm-VS-MenuItem-Title,
.ms-crm-grid-metaphor-submenu NOBR.ms-crm-VS-MenuItem-Title
{
width : 253px;
}

NOBR.ms-crm-POPUP-MenuItem-Title
{
width: 140px;
}

NOBR.ms-crm-BVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-TVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-SVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-BVS-MenuItem-Title-Rest-qrk,
NOBR.ms-crm-TVS-MenuItem-Title-Rest-qrk,
NOBR.ms-crm-SVS-MenuItem-Title-Rest-qrk
{
width :90%;
margin-left :8px;
margin-right :8px;
height : 20px;
border-left:1px solid #7e7e7e;
border-right:1px solid #7e7e7e;

<% if (CrmStyles.IsRightToLeft) { %>

margin-left: 8px;
<%} else { %>

margin-right: 8px;
<%} %>

}
NOBR.ms-crm-BVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-BVS-MenuItem-Title-Rest-qrk
{
border-bottom:1px solid #7e7e7e;
}
NOBR.ms-crm-BVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-TVS-MenuItem-Title-Rest-qrk
{
border-top:1px solid #7e7e7e;
}

NOBR.ms-crm-POPUP-MenuItem-Title-Rest,
NOBR.ms-crm-AVS-MenuItem-Title-Rest,
NOBR.ms-crm-VS-MenuItem-Title-Rest
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<% } %>

padding-top : 1px;
padding-bottom : 1px;
}

NOBR.ms-crm-SVS-MenuItem-Title-Hover-qrk,
NOBR.ms-crm-BVS-MenuItem-Title-Hover-qrk,
NOBR.ms-crm-TVS-MenuItem-Title-Hover-qrk
{
width :90%;
margin-left :8px;
margin-right :8px;
height : 20px;
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width: 1px;
border-left-style: solid;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
<% } %>


border-left-width : 1px;
border-left-style : solid;
border-right-width : 1px;
border-right-style : solid;


}

NOBR.ms-crm-POPUP-MenuItem-Title-Hover,
NOBR.ms-crm-VS-MenuItem-Title-Hover
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width: 1px;
border-left-style: solid;
padding-left : 0px;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
padding-right : 0px;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
padding-top : 0px;
padding-bottom :0px;

}

NOBR.ms-crm-AVS-MenuItem-Title-Hover
{
border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

NOBR.ms-crm-TVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-SVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-BVS-MenuItem-Title-Selected-qrk,
NOBR.ms-crm-AVS-MenuItem-Title-Hover,
NOBR.ms-crm-AVS-MenuItem-Title-Selected
{
border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;

}

SPAN.ms-crm-AVS-MenuItem-Aux
{

width : 20px;
height : 20px;
line-height: 18px;
display : block;
}
SPAN.ms-crm-AVS-MenuItem-Aux
{
padding-top:    1px;
padding-bottom: 1px;
<% if (CrmStyles.IsRightToLeft){ %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<% } %>
}

SPAN.ms-crm-AVS-MenuItem-Aux-Hover
{
height: 22px;
border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width: 1px;
border-left-style: solid;
padding-left: 0px;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
padding-right: 0px;
<% } %>
padding-top: 0px;
padding-bottom: 0px;


}

IMG.ms-crm-AVS-MenuItem-Aux
{
margin-top: 2px;
<% if (CrmStyles.IsRightToLeft) { %>

<%= FlipImage("h") %>

<% } %>
}

A.ms-crm-AVS-MenuItem-Aux
{
cursor : pointer;
display : block;
}



/**
* START - These are the styles for the sub-menu MenuItem for ContextMenu in Standards mode
*/
LI.ms-crm-CMsub-MenuItem
{
background-color : #ffffff;
width : 196px;
display : block;
}

A.ms-crm-CMsub-MenuItem-Anchor
{
background-color : #ffffff;

height : 20px;
display : block;
cursor : pointer;
}

IMG.ms-crm-CMsub-MenuItem-Icon
{
margin-left : 3px;
margin-right : 3px;
margin-top : 1px;
vertical-align : center;
}

SPAN.ms-crm-CMsub-MenuItem-Icon
{
height : 18px;
width : 24px;
display : inline-block;
}


SPAN.ms-crm-CMsub-MenuItem-Icon-Rest,
SPAN.ms-crm-CMsub-MenuItem-Icon-Selected,
SPAN.ms-crm-CMsub-MenuItem-Icon-Hover
{

<% if (CrmStyles.IsRightToLeft){ %>
border-right-width: 1px;
border-right-style: solid;
<% } else { %>
border-left-width: 1px;
border-left-style: solid;
<% } %>

border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

span.ms-crm-CMsub-MenuItem-Sep
{
display : inline-block;
width : 1px;
vertical-align : top;
}


span.ms-crm-CMsub-MenuItem-Sep-Rest,
span.ms-crm-CMsub-MenuItem-Sep-Hover,
span.ms-crm-CMsub-MenuItem-Sep-Selected
{
height: 20px;
border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

span.ms-crm-CMsub-MenuItem-Sep-Hover
{
height : 18px;
}


SPAN.ms-crm-CMsub-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>

display : inline-block;
width : 85%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

NOBR.ms-crm-CMsub-MenuItem-Title
{
height : 18px;
width : 154px; /** = 200 - 46 */
line-height : 18px;
display : inline-block;
vertical-align : top;
overflow : hidden;
text-overflow : ellipsis;
}


NOBR.ms-crm-CMsub-MenuItem-Title-Rest,
NOBR.ms-crm-CMsub-MenuItem-Title-Hover,
NOBR.ms-crm-CMsub-MenuItem-Title-Selected
{
border-top-width : 1px;
border-top-style : solid;
border-bottom-width : 1px;
border-bottom-style : solid;
}

SPAN.ms-crm-CMsub-MenuItem-Aux
{
width : 16px;
height : 18px;
line-height: 18px;
display : block;
}

SPAN.ms-crm-CMsub-MenuItem-Aux-Rest
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width : 1px;
border-left-style : solid;
<% } else { %>
border-right-width : 1px;
border-right-style : solid;
<% } %>

border-top-width: 1px;
border-top-style: solid;
border-bottom-width: 1px;
border-bottom-style: solid;
}

SPAN.ms-crm-CMsub-MenuItem-Aux-Hover
{
<% if (CrmStyles.IsRightToLeft){ %>
border-left-width : 1px;
border-left-style : solid;
<% } else { %>
border-right-width : 1px;
border-right-style : solid;
<% } %>

border-top-width: 1px;
border-top-style: solid;
border-bottom-width: 1px;
border-bottom-style: solid;
}

SPAN.ms-crm-CMsub-MenuItem-Aux-Selected
{

<% if (CrmStyles.IsRightToLeft){ %>
border-left-width : 1px;
border-left-style : solid;
<% } else { %>
border-right-width : 1px;
border-right-style : solid;
<% } %>

border-top-width: 1px;
border-top-style: solid;
border-bottom-width: 1px;
border-bottom-style: solid;
}

IMG.ms-crm-CMsub-MenuItem-Aux
{

<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

A.ms-crm-CMsub-MenuItem-Aux
{
cursor : pointer;
display : block;
}

A.ms-crm-CMsub-MenuItem-Anchor
{
cursor : pointer;
}



LI.ms-crm-RV-view-header-MenuItem
{
background-color : #ffffff ;
height : 24px;
}

A.ms-crm-RV-view-header-MenuItem-Anchor
{
background-color : #ffffff;
width : 100%;
height : 24px;
display : inline-block;
cursor : normal;
overflow : hidden;
text-overflow : ellipsis;
}

SPAN.ms-crm-RV-view-header-MenuItem-Title
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 7px;
<% } else { %>
margin-left : 7px;
<% } %>
display : inline-block;
width : 90%;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
font-weight : bold;
}

NOBR.ms-crm-RV-view-header-MenuItem-Title
{
height : 24px;
width : 100%;

line-height : 24px;

display : inline;
vertical-align : top;

overflow : hidden;
}

DIV.ms-crm-RV-Menu
{
background-color : #ffffff;
overflow-y : auto;
overflow-x : hidden;
height : 100%;
}

UL.ms-crm-RV-Menu
{
background-color : #ffffff;
width : 100%;
}

UL.ms-crm-in-RV-Menu
{
overflow-x : hidden;
overflow-y : auto;
background-color : #ffffff;

margin-right: 1px;
margin-left: 1px;
}

LI.ms-crm-RV-MenuItem,
LI.ms-crm-RV-view-item-MenuItem
{
padding : 1px;
background-color : #ffffff;
height : 22px;
display : block;
}

LI.ms-crm-RV-MenuItem-Rest,
LI.ms-crm-RV-view-item-MenuItem-Rest
{
padding : 1px;
}

LI.ms-crm-RV-MenuItem-Hover,
LI.ms-crm-RV-view-item-MenuItem-Hover
{
padding : 0px;
border-width: 1px;
border-style: solid;
}

SPAN.ms-crm-RV-MenuItem-Icon,
SPAN.ms-crm-RV-view-item-MenuItem-Icon
{
margin-left : 7px;
margin-right : 7px;
margin-top : 3px;
display : inline-block;
}

IMG.ms-crm-RV-MenuItem-Icon,
IMG.ms-crm-RV-view-item-MenuItem-Icon
{
height : 16px;
width : 16px;
align : middle;
vertical-align : middle;
}

A.ms-crm-RV-MenuItem-Anchor,
A.ms-crm-RV-view-item-MenuItem-Anchor
{
height : 100%;
width : 85%;
display : block;
overflow : hidden;
text-overflow : ellipsis;
white-space: nowrap;
}

NOBR.ms-crm-RV-MenuItem-Title,
NOBR.ms-crm-RV-view-item-MenuItem-Title
{
width : 80%;
height : 22px;
line-height : 18px;
display : inline;
overflow : hidden;
text-overflow : ellipsis;
}

SPAN.ms-crm-RV-MenuItem-Title,
SPAN.ms-crm-RV-view-item-MenuItem-Title
{
height : 20px;
display : inline;
overflow : hidden;
text-overflow : ellipsis;

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

A.ms-crm-RV-MenuItem-Aux,
A.ms-crm-RV-view-item-MenuItem-Aux
{
display:inline;
}

A.ms-crm-RV-MenuItem-Aux-Rest,
A.ms-crm-RV-view-item-MenuItem-Aux-Rest
{
padding : 1px;
padding-top : 0px;
}

A.ms-crm-RV-MenuItem-Aux-Hover,
A.ms-crm-RV-view-item-MenuItem-Aux-Hover
{
border-width: 1px;
border-style: solid;
}

SPAN.ms-crm-RV-MenuItem-Aux,
SPAN.ms-crm-RV-view-item-MenuItem-Aux
{
margin-top : 2px;
margin-bottom : 2px;
display : inline-block;
margin-left : 2px;
margin-right:2px;
display : inline;
overflow : hidden;
}

IMG.ms-crm-RV-MenuItem-Aux,
IMG.ms-crm-RV-view-item-MenuItem-Aux
{
height : 15px;
width : 15px;
align : middle;
margin-top : 2px;
}


DIV.ms-crm-FS-Menu,
DIV.ms-crm-FS-Menu-qrk
{
border: 1px solid #A4AAB4;
overflow-x: hidden;
overflow-y: auto;
background-color: #ffffff;
}
UL.ms-crm-FS-Menu,
UL.ms-crm-FS-Menu-qrk
{
overflow: hidden;
}
LI.ms-crm-FS-MenuItem,
LI.ms-crm-FS-MenuItem-qrk
{

height: 23px;
margin: 0px;
padding: 0px;
border: none;
}

LI.ms-crm-LK-MenuItem,
LI.ms-crm-FS-MenuItem
{
white-space:nowrap;
}
LI.ms-crm-IL-MenuItem
{
white-space:nowrap;
}
LI.ms-crm-IL-MenuItem-Lookupmore
{
white-space:nowrap;
line-height :22px;
height :36px;
padding-top: 4px;
}
LI.ms-crm-IL-MenuItem-Lookupmore-Rest,
LI.ms-crm-IL-MenuItem-Lookupmore-Rest-qrk
{
background-color: #FFFFFF;
}
A.ms-crm-FS-MenuItem-Anchor,
A.ms-crm-FS-MenuItem-Anchor-qrk
{
width: 98%;
display: inline-block;
cursor: pointer;

height: 20px;
margin: 1px 0px;
padding: 0px;
border: none;
}
A.ms-crm-FS-MenuItem-Anchor-Selected,
A.ms-crm-FS-MenuItem-Anchor-Selected-qrk
{
border-width: 1px;
border-style: solid;
padding: 0px;
<% if (CrmStyles.IsRightToLeft){ %>
margin: 1px 1px 1px 0px;
<% } else { %>
margin: 1px 0px 1px 1px;
<% } %>
}

SPAN.ms-crm-FS-MenuItem-Title-qrk
{
display: inline-block;
width: 100%;
}
SPAN.ms-crm-FS-MenuItem-Title,
SPAN.ms-crm-FS-MenuItem-Title-qrk
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
overflow: hidden;
text-overflow: ellipsis;

font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}
NOBR.ms-crm-FS-MenuItem-Title,
NOBR.ms-crm-FS-MenuItem-Title-qrk
{
height: 20px;
width: 100%;

line-height: 18px;

display: inline-block;
vertical-align: top;

overflow: hidden;
}

NOBR.ms-crm-FS-MenuItem-Title-Rest,
NOBR.ms-crm-FS-MenuItem-Title-Selected,
NOBR.ms-crm-FS-MenuItem-Title-Rest-qrk,
NOBR.ms-crm-FS-MenuItem-Title-Selected-qrk
{
padding: 1px;
}
LI.ms-crm-RV-MenuItemL,
LI.ms-crm-RV-view-item-MenuItemL
{
background-color : #ffffff;

}
IMG.ms-crm-RV-MenuItem-IconL,
IMG.ms-crm-RV-view-item-MenuItem-IconL
{
align : middle;
vertical-align : middle;
}

LI.ms-crm-FixedMenuHover:hover{text-decoration :none;}
LI.ms-crm-FixedMenuHover:link{text-decoration: none;}
LI.ms-crm-FixedMenuHover:visited{text-decoration: none;}
LI.ms-crm-FixedMenuSelect:hover{text-decoration :none;}
LI.ms-crm-FixedMenuSelect:link{text-decoration: none;}
LI.ms-crm-FixedMenuselect:visited{text-decoration: none;}





DIV.ms-crm-IL-Menu-qrk
DIV.ms-crm-LK-Menu-qrk
{
height : 100%:
width : 100%;

overflow-x : hidden;
overflow-y : auto;
}

UL.ms-crm-IL-Menu-qrk,
UL.ms-crm-LK-Menu-qrk
{
display : block;

background-color : #ffffff;
border : #a1a5aa 1px solid

overflow-x : hidden;
overflow-y : auto;

height: 100%;
}

LI.ms-crm-LK-MenuItem-qrk
{
display : inline;
width : 100%;
}
LI.ms-crm-IL-MenuItem-qrk
{
background-color : #ffffff;
display : inline;
width : 100%;
}

LI.ms-crm-IL-MenuItem-Rest,
LI.ms-crm-IL-MenuItem-Rest-qrk
{
height : 22px;

background-color : #ffffff;
padding : 1px;
}

LI.ms-crm-LK-MenuItem-Rest,
LI.ms-crm-LK-MenuItem-Rest-qrk
{
height : 22px;

background-color : #ffffff;
padding : 1px;
}
LI.ms-crm-IL-MenuItem-Selected,
LI.ms-crm-IL-MenuItem-Selected-qrk
{
height : 22px;
background-color : #D7EBF9;
padding: 1px;
}
LI.ms-crm-IL-MenuItem-Hover,
LI.ms-crm-IL-MenuItem-Hover-qrk
{
height : 22px;
border:	1px solid #ffffff;
}
LI.ms-crm-LK-MenuItem-Hover,
LI.ms-crm-LK-MenuItem-Selected,
LI.ms-crm-LK-MenuItem-Hover-qrk,
LI.ms-crm-LK-MenuItem-Selected-qrk
{
height : 22px;

background-image : url(/_imgs/theme/outlook14silver/contextmenu_hover_20.png);
border : 1px solid #61a6e4;
}
A.ms-crm-IL-MenuItem-Anchor,
A.ms-crm-IL-MenuItem-Anchor-qrk
{
cursor: default;
display : block ;
overflow : hidden ;
white-space: nowrap;
height : 100%;
}

.mobile-refresh-form A.ms-crm-IL-MenuItem-Anchor
{
height: auto;
}

A.ms-crm-IL-MenuItem-Anchor-Lookupmore,
A.ms-crm-IL-MenuItem-Anchor-Lookupmore-qrk
{
cursor: pointer;
display : block ;
overflow : hidden ;
white-space: nowrap;
height : 100%;
vertical-align : middle;
}
A.ms-crm-LK-MenuItem-Anchor,
A.ms-crm-LK-MenuItem-Anchor-qrk
{
cursor: pointer;
display : block ;
overflow : hidden ;
white-space: nowrap;
}
IMG.ms-crm-IL-MenuItem-Icon,
IMG.ms-crm-IL-MenuItem-Icon-qrk,
IMG.ms-crm-LK-MenuItem-Icon,
IMG.ms-crm-LK-MenuItem-Icon-qrk,
IMG.ms-crm-IL-MenuItem-Icon-Lookupmore,
IMG.ms-crm-IL-MenuItem-Icon-Lookupmore-qrk
{
height : 16px;
width : 16px;
vertical-align : top;
margin-left : 4px;
margin-right : 4px;

margin-top : 1px;
}

.mobile-refresh-form IMG.ms-crm-IL-MenuItem-Icon
{
vertical-align : baseline;
}

ms-crm-IL-MenuItem-Icon-Lookupmore,
ms-crm-IL-MenuItem-Icon-Lookupmore-qrk
{
display: none;
}

ms-crm-IL-MenuItem-Sep-Lookupmore,
ms-crm-IL-MenuItem-Sep-Lookupmore-qrk
{
display: none;
}

NOBR.ms-crm-IL-MenuItem-Title,
NOBR.ms-crm-IL-MenuItem-Title-qrk,
NOBR.ms-crm-LK-MenuItem-Title,
NOBR.ms-crm-LK-MenuItem-Title-qrk,
NOBR.ms-crm-IL-MenuItem-Title-Lookupmore,
NOBR.ms-crm-IL-MenuItem-Title-Lookupmore-qrk
{
width : 85%;
height : 100%;
margin-left : 2px;
margin-right : 2px;

overflow : hidden;
text-overflow : ellipsis;

display : inline-block;
}
NOBR.ms-crm-LK-MenuItem-Title,
NOBR.ms-crm-LK-MenuItem-Title-qrk
{
margin-top : -2px;
}
DIV.ms-crm-IL-MenuItem-MoreInfo,
DIV.ms-crm-IL-MenuItem-MoreInfo-qrk
{
overflow : hidden;
text-overflow : ellipsis;
margin-left : 0px;
margin-right : 0px;

line-height : 18px;
vertical-align : middle;

display : block;

color : gray;

margin-top : -7px;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}
DIV.ms-crm-IL-MenuItem-MoreInfoItem,
DIV.ms-crm-IL-MenuItem-MoreInfoItem-qrk
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
float: right;
<% } else { %>
text-align:left;
float: left;
<% } %>
margin: 0px;
color:#666666;
overflow : hidden;
text-overflow : ellipsis;
white-space: nowrap;
display:inline-block;
}

SPAN.ms-crm-LK-MenuItem-Title,
SPAN.ms-crm-LK-MenuItem-Title-qrk
{
overflow : hidden;
text-overflow : ellipsis;
margin-left : 4px;
margin-right : 4px;

line-height : 22px;
vertical-align : middle;

display : block;

color : #15428b;

margin-top : -2px;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

SPAN.ms-crm-IL-MenuItem-Title,
SPAN.ms-crm-IL-MenuItem-Title-qrk
{
overflow : hidden;
text-overflow : ellipsis;
margin-left : 0px;
margin-right : 0px;

line-height : 22px;
vertical-align : middle;

display : block;

color : #444444;

margin-top : -2px;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

SPAN.ms-crm-IL-MenuItem-Title-Span-NotFound,
SPAN.ms-crm-IL-MenuItem-Title-Span-NotFound-qrk
{
overflow : hidden;
text-overflow : ellipsis;
margin-left : 4px;
margin-right : 4px;

line-height : 22px;
vertical-align : middle;

display : block;

color : #b1b1b1;

margin-top : -2px;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}



SPAN.ms-crm-IL-MenuItem-Title-Lookupmore,
SPAN.ms-crm-IL-MenuItem-Title-Lookupmore-qrk
{
text-align:center;
}

IMG.ms-crm-IL-MenuItem-Aux,
IMG.ms-crm-IL-MenuItem-Aux-qrk,
IMG.ms-crm-LK-MenuItem-Aux,
IMG.ms-crm-LK-MenuItem-Aux-qrk
{
margin-top : 2px;
}
IMG.ms-crm-IL-MenuItem-Aux-Rest,
IMG.ms-crm-IL-MenuItem-Aux-Rest-qrk,
IMG.ms-crm-LK-MenuItem-Aux-Rest,
IMG.ms-crm-LK-MenuItem-Aux-Rest-qrk
{
display : none ;
}
IMG.ms-crm-IL-MenuItem-Aux-Hover,
IMG.ms-crm-IL-MenuItem-Aux-Selected,
IMG.ms-crm-IL-MenuItem-Aux-Hover-qrk,
IMG.ms-crm-IL-MenuItem-Aux-Selected-qrk,
IMG.ms-crm-LK-MenuItem-Aux-Hover,
IMG.ms-crm-LK-MenuItem-Aux-Selected,
IMG.ms-crm-LK-MenuItem-Aux-Hover-qrk,
IMG.ms-crm-LK-MenuItem-Aux-Selected-qrk
{
display : inline ;
}
A.ms-crm-IL-MenuItem-Aux,
A.ms-crm-IL-MenuItem-Aux-qrk,
A.ms-crm-LK-MenuItem-Aux,
A.ms-crm-LK-MenuItem-Aux-qrk
{
height : 100%;
width : 16px;
}

UL.ms-crm-VS-Menu,
UL.ms-crm-AVS-Menu
{
padding:1px 0px;
}

DIV.ms-crm-VS-Menu SPAN.ms-crm-AVS-MenuItem-Aux{
width : 19px;
}
DIV.ms-crm-AVS-Menu-qrk,
DIV.ms-crm-AVS-Menu,
DIV.ms-crm-VS-Menu,
DIV.ms-crm-POPUP-Menu,
DIV.ms-crm-IL-Menu,
DIV.ms-crm-IL-MRU-Menu,
DIV.ms-crm-LK-Menu{
font-size : 0px;
}
DIV.ms-crm-AVS-Menu-qrk NOBR,
DIV.ms-crm-AVS-Menu NOBR,
DIV.ms-crm-VS-Menu NOBR,
DIV.ms-crm-POPUP-Menu NOBR,
DIV.ms-crm-IL-Menu NOBR,
DIV.ms-crm-LK-Menu NOBR,
DIV.ms-crm-IL-Menu .Notifications,
DIV.ms-crm-LK-Menu .Notifications
{
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

LI.popupMoreLinkItem
{
text-align: center;
background-color: #c4ddff;
color: #15428b;
}

<% if (this.IsVisualRefreshEnabled) { %>
SPAN.ms-crm-VS-header-MenuItem-Title,
SPAN.ms-crm-FS-MenuItem-Title,
SPAN.ms-crm-FS-MenuItem-Title-qrk,
.ms-crm-dashboard-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Title,
.ms-crm-dashboard-metaphor-dialog SPAN.ms-crm-VS-header-MenuItem-Title,
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-AVS-MenuItem-Title,
.ms-crm-grid-metaphor-submenu SPAN.ms-crm-VS-header-MenuItem-Title,
.ms-crm-grid-metaphor-submenu SPAN.ms-crm-VS-MenuItem-Title
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%>;
}

.ms-crm-grid-metaphor-dialog NOBR.ms-crm-AVS-MenuItem-Title-Selected
{
border: none;
}

.ms-crm-grid-metaphor-dialog NOBR.ms-crm-AVS-MenuItem-Title
{
height: 20px;
}

.ms-crm-grid-metaphor-dialog IMG.ms-crm-AVS-MenuItem-Icon
{
margin-left : 3px;
margin-right : 3px;
top: auto;
left: auto;
}

.ms-crm-grid-metaphor-dialog Li.ms-crm-AVS-MenuItem,
.ms-crm-grid-metaphor-dialog span.ms-crm-AVS-MenuItem-Sep
{
height: 30px !important;
}

.ms-crm-grid-metaphor-dialog A.ms-crm-AVS-MenuItem-Anchor
{
height: 26px !important;
}

.ms-crm-grid-metaphor-dialog NOBR.ms-crm-AVS-MenuItem-Title-Rest,
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-AVS-MenuItem-Title-Hover,
.ms-crm-grid-metaphor-dialog NOBR.ms-crm-AVS-MenuItem-Title-Selected,
.ms-crm-grid-metaphor-dialog IMG.ms-crm-AVS-MenuItem-Icon
{
padding-top: 4px !important;
padding-bottom: 4px !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 1px !important;
<% } else { %>
padding-right: 1px !important;
<% } %>
}

.ms-crm-grid-metaphor-dialog NOBR.ms-crm-AVS-MenuItem-Title-Hover
{
border: none !important;
}

.ms-crm-grid-metaphor-dialog SPAN.ms-crm-AVS-MenuItem-Icon,
.ms-crm-grid-metaphor-dialog SPAN.ms-crm-AVS-MenuItem-Icon-Hover
{
height: 20px !important;
padding-top: 4px !important;
padding-bottom: 4px !important;
border: none;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 1px !important;
<% } else { %>
padding-left: 1px !important;
<% } %>
}

.ms-crm-dashboard-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title,
.ms-crm-dashboard-metaphor-dialog NOBR.ms-crm-VS-header-MenuItem-Title
{
width : 318px;
}

NOBR.ms-crm-FS-MenuItem-Title,
NOBR.ms-crm-FS-MenuItem-Title-qrk,
NOBR.ms-crm-FS-MenuItem-Title-Rest,
NOBR.ms-crm-FS-MenuItem-Title-Selected
{
padding-top:4px;
padding-bottom:4px;
}

A.ms-crm-FS-MenuItem-Anchor,
A.ms-crm-FS-MenuItem-Anchor-qrk,
LI.ms-crm-FS-MenuItem,
LI.ms-crm-FS-MenuItem-qrk
{
height:28px;
}

DIV.ms-crm-FS-Menu,
DIV.ms-crm-FS-Menu-qrk
{
height:auto;
}

<% } %>


