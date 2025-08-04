<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TABLE.ms-crm-Form-Editor-Body
{
<% if (Request.Browser.Browser != "IE") { %>
width: 100%;
<% } %>
}

TABLE.section
{
background-color:#f6f8fa;
border:			1px dashed #6d6e70;
width:			100%;
cursor:			pointer;
table-layout:	fixed;
}

html
{
overflow: hidden;
}

TABLE.cell
{
width:			100%;
height:	         100%;
table-layout:	fixed;
}

TD.section
{
background-color:#f6f8fa;
color:			#606050;
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
padding-bottom:	2px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	0px;
<% } else { %>
padding-left:	0px;
<% } %>
}

TD.cell,
TD.webresource,
TD.iframe,
TD.subgrid,
TD.quickformcollection
TD.bingmap
TD.timercontrol
{
background-color:#e9edf1;
border:			1px dashed #6d6e70;
height:			auto;
}

DIV.field,
TD.field,
TD.dashboardfield,
TD.previewField
{
background:		#ffffff;
color:			#cccccc;
border:			1px solid #cccccc;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	2px;
<% } else { %>
padding-left:	2px;
<% } %>
}

DIV.field,
TD.dashboardfield,
TD.previewField
{
width:			100%;
}

DIV.field,
TD.field
{
height:		19px;
}

TD.previewField
{
height:			100%;
text-align:     center;
}

TD.rofield
{
background:		#eaf3ff;
color:			#cccccc;
border:			1px solid #c5c5c5;
height:			19px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	2px;
<% } else { %>
padding-left:	2px;
<% } %>
overflow: hidden;
}

TD.reqField
{
background-color:	<%= WebUtility.GetFontResourceForStyle("Required_Fields_Background_Color")%>;
}

TD.recField
{
background-color:	<%= WebUtility.GetFontResourceForStyle("Recommended_Fields_Background_Color")%>;
}

DIV.ms-crm-Tab
{
padding:		6px;
width:			100%;
height:			100%;
border:			1px dashed #6d6e70;
}
div.ms-crm-Form-StatusBar,
TD.ms-crm-Form-StatusBar
{
background-image: url(/_imgs/statusbar_back.gif);
background-repeat: repeat-x;
color:				#000000;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:		5px;
<% } else { %>
padding-left:		5px;
<% } %>
height:				24px;
border-bottom:		1px solid #485673;
}


IMG.imgLock
{
vertical-align:		bottom;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:		2px;
<% } else { %>
margin-right:		2px;
<% } %>
}
IMG.imgWarning
{
vertical-align:		bottom;
width: 10px;
height: 11px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
<% } else { %>
margin-left:		2px;
<% } %>
}
IMG.Field-Explorer
{
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:		4px;
cursor:pointer;
align:left;
<%= FlipImage("h") %>
<% } else { %>
margin-right:		4px;
align:right;
cursor:pointer;
<% } %>
}

table.header,
table.footer,
table.ms-crm-Tab,
table.section,
td.cell
{
outline: none;
}

TD.ms-crm-Tab
{
background-color:#ffffff;
}
div.form-editor-nav-style
{
<% if (CrmStyles.IsRightToLeft) { %>
border-left-style: solid;
<% } else { %>
border-right-style: solid;
<% } %>
border-width: 1px;
border-color:#a5acb5;
background-color:#f6f8fa;
}
DIV.Form-Editor-Breadcrumb-Container
{
position:absolute;
top: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
right: 64px;
<% } else { %>
left: 64px;
right: 0px;
<% } %>
height;64px;
}
DIV.ms-crm-Form-Editor-Entity-Icon
{
width: 44px;
<% if ( CrmStyles.IsRightToLeft ) { %>
padding-left:10px;
padding-right:8px;
<% } else { %>
padding-left:8px;
padding-right:10px;
<% } %>
height:64px;
}
LI.navGroup
{
border:1px dashed #6d6e70;
margin-bottom: 1px;
}
LI.navItem
{
border:1px dashed #6d6e70;
margin-bottom: 4px;
}
TD.fld-explorer-img-alignment
{
<% if ( CrmStyles.IsRightToLeft ) { %>
align:left;
<% } else { %>
align:right;
<% } %>
}
TABLE.shown-field-explorer
{
padding-left: 5px;
table-layout:fixed;
background-color:#f1f3f5
}
TABLE.hidden-field-explorer
{
table-layout:fixed;
background-color:#f6f8fa;
}
TD.fieldExpStyle
{
width:100%;
cursor:pointer;
font-size:18;
font-weight:bolder;
vertical-align:top;
padding-top: 100px;
}

DIV.Form-Designer
{
vertical-align:top;
position:absolute;
top : 0px;
bottom : 0px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 235px;
right: 0px;
<% } else { %>
left: 0px;
right: 235px;
<% } %>
}
#attrExpDiv,#hiddenAttrExpDiv
{
border:	1px solid #898c95;
}

#formNavigationRoot
{
vertical-align: top;
}

.AttrExp-stripLeftRight
{
text-overflow: ellipsis;
white-space: nowrap;
font-size: 18px;
line-height: 24px;

<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>
<%if (CrmStyles.IsRightToLeft) {%>
writing-mode: tb-rl;
filter: flipv fliph;
<% } else { %>
writing-mode: tb-rl;
<% } %>

<% } else { %>
display:block;
<%if (CrmStyles.IsRightToLeft) {%>
-o-transform: rotate(270deg);
transform: rotate(270deg);
-webkit-transform: rotate(270deg);
-moz-transform: rotate(270deg);
-ms-transform: rotate(270deg);
<% } else { %>
-o-transform: rotate(deg);
transform: rotate(90deg);
-webkit-transform: rotate(90deg);
-moz-transform: rotate(90deg);
-ms-transform: rotate(90deg);
<% } %>
<% } %>
}
UL.field-explorer-list
{
border-width:1px;
background-color:#FFFFFF;
width:100%;
height:100%;
overflow-y:auto;
}
UL.nav-container
{
border-color:#898c95;
border-width:1px;
background-color:#FFFFFF;
width:100%;
height:100%;
overflow-y:auto;
overflow-x:hidden;
}
DIV.Form-Editor-Body
{
vertical-align:top;
position:absolute;
height:100%;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
right: 185px;
<% } else { %>
left: 185px;
right: 0px;
<% } %>
}
DIV.Form-Editor-Body-No-Nav
{
vertical-align:top;
position:absolute;
height:100%;
width:100%;
}

DIV.AttributeExplorer
{
vertical-align:top;
position:absolute;
width:230px;

top : 0px;
bottom : 0px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
}
DIV.HiddenAttributeExplorer
{
position: absolute;
top: 0px;
width:40px;
bottom : 0px;
display:none;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
}
UL.nav-container-with-overflow
{
border-color:#898c95;
border-width:1px;
background-color:#FFFFFF;
width:100%;
height:100%;
}

TD.list-container
{
border-width:1px;
border-color:#c0c0c0;
border-style:solid;
}
.ms-crm-NoUserSelect
{
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
