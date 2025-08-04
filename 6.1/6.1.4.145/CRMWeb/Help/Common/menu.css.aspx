<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
DIV.ms-crm-VS-Localizable
{
	<% if (CrmStyles.IsRightToLeft) { %>
		float: right;
	<% } else { %>
		float: left;
	<% } %>
}

LI.ms-crm-Menu,
LI.ms-crm-Menu-Spacer
{
	height: 23px;
<% if (CrmStyles.IsRightToLeft) { %>
	float: right;
<% } else { %>
	float: left;
<% } %>
}

LI.ms-crm-Menu-Read
{
<% if (CrmStyles.IsRightToLeft) { %>
	margin-left: 6px;
	padding-left: 2px;
<% } else { %>
	margin-right: 6px;
	padding-right: 2px;
<% } %>
}

LI.ms-crm-Menu-Jewel
{
	padding-top: 7px;
}

LI.ms-crm-Menu-Right,
{
	height: 23px;
<% if (CrmStyles.IsRightToLeft) { %>
	float: left;
<% } else { %>
	float: right;
<% } %>
}

LI.ms-crm-Menu-Spacer
{
	margin-top: 4px;
	height: auto;
}

LI.ms-crm-FilterPopupMenu
{
	height: 16px;
	<% if (CrmStyles.IsRightToLeft) { %>
	float: right;
	<% } else { %>
		float: left;
	<% } %>
}

table.ms-crm-FilterPopupContainer
{
	height:			18px;
	width:			20px;
	table-layout:		fixed;
	vertical-align:		middle;
}

td.ms-crm-FilterPopupContainerTD
{
	width:0px;
	<% if (CrmStyles.IsRightToLeft) { %>
	   text-align:right;
	<% } else { %>
	   text-align:left;
	<% } %>
}

/* Width of td element for right to left isn't calculated properly which affects the positioning of filter icon on ipad hence forcing it using css*/
table.ms-crm-FilterPopupContainer td
{
<% if (Util.IsIosDevice(Page.Request) && CrmStyles.IsRightToLeft) { %>
	max-width:	8px;
<% } %>
}

/* Represents a command bar button you can press - opens a menu or performs an action, on the top level.*/
SPAN.ms-crm-Menu-Label
{
	padding-left: 2px;
	padding-right: 2px;
<% if (Request.Browser.Browser != "IE") { %>
	padding-top: 3px;
<% } else { %>
	padding-top: 2px;
	padding-bottom: 1px;
<% } %>
	height: 19px;
	overflow: hidden;
	cursor: default;
	display:inline-block;
}

SPAN.ms-crm-FilterPopupMenu-Label
{
	height: 16px;
	padding-top: 1px;
	overflow-y: hidden;
	cursor: default;
}

A.ms-crm-FilterPopupMenu-Label:focus
{
	border: 1px dotted;
	position: absolute;
}

DIV.ms-crm-FilterPopupMenu-Label
{
	margin-top: 1px;
	cursor: default;
	position: relative;
<% if (Request.Browser.Browser == "IE") { %>	
	bottom: 1px;
<% } %>
}

DIV.ms-crm-FilterPopupMenu-Label A.DIV.ms-crm-FilterPopupMenu-Label
{
	display:block;
	width:16px;
	height:16px;
}

A.ms-crm-Menu-Label,
A.ms-crm-Menu-Label:link,
A.ms-crm-Menu-Label:visited,
A.ms-crm-Menu-Label:active,
A.ms-crm-Menu-Label:hover,
A.ms-crm-MenuLink,
A.ms-crm-MenuLink:link,
A.ms-crm-MenuLink:visited,
A.ms-crm-MenuLink:active,
A.ms-crm-MenuLink:hover
{
	cursor: default;
	white-space:nowrap;
	text-decoration: none;
}

.ms-crm-MenuBar * TD.ms-crm-Menu-ICRight
{
	padding-bottom: 14px;
}

SPAN.ms-crm-Menu-Label-Opened
{
	padding-left: 1px;
	padding-right: 1px;
<% if (Request.Browser.Browser != "IE") { %>
	padding-top: 2px;
<% } else { %>
	padding-top: 1px;
	padding-bottom: 1px;
<% } %>
	height: 18px;
	overflow: hidden;
	white-space: nowrap;
	display:inline-block;
	border-width: 1px;
	border-style: solid;
}

SPAN.ms-crm-Menu-Label-Hovered
{
	padding-left: 1px;
	padding-right: 1px;
<% if (Request.Browser.Browser != "IE") { %>
	padding-top: 2px;
<% } else { %>
	padding-top: 1px;
	padding-bottom: 1px;
<% } %>
	height: 18px;
	overflow: hidden;
	display:inline-block;
	border-width: 1px;
	border-style: solid;
}

.ms-crm-Menu-disabled *
{
color:#5b626c !important;
cursor:default !important;
}
img.ms-crm-Menu-Button-disabled 
{
	background-color:#fff !important;
	opacity:0.3;
}

/* The icon for the button or menu, potentially followed by text*/
img.ms-crm-Menu-Button,
img.ms-crm-Menu-ButtonFirst,
img.ms-crm-Menu-ButtonRTL,
img.ms-crm-Menu-ButtonLTR
{
	width: 16px;
	height: 16px;
	vertical-align: top;
}

/* The icon for the button used on the FilterPopup*/
img.ms-crm-Menu-ButtonFilter
{
	width: 14px;
	height: 14px;
}

SPAN.ms-crm-Menu-FilterImgWrapper,
SPAN.ms-crm-Menu-FilterImgWrapper-Hover,
SPAN.ms-crm-Menu-FilterImgWrapper-Open
{
	border-width:1px;
	border-style:solid;
}

DIV.ms-crm-Menu-FilterImgWrapper,
DIV.ms-crm-Menu-FilterImgWrapper-Hover,
DIV.ms-crm-Menu-FilterImgWrapper-Open
{
	border-width:1px;
	border-style:solid;
	width: 14px;
	height: 14px;
}

SPAN.ms-crm-MenuItem-Text,
SPAN.ms-crm-MenuItem-Text-MultiSelect-Populated
{
	margin: 0px 1px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

SPAN.ms-crm-MenuItem-Text-MultiSelect
{
	font-style:italic;
	color:#7e7e7e;
	text-align:center;
	padding-top: 2px;
	margin-top: 1px;
	height: 16px;
	margin-bottom: 4px;
}

SPAN.ms-crm-MenuItem-Text-MultiSelect-Populated
{
	width: 100px;
}

img.ms-crm-Menu-Button
{
	margin-left: 1px;
	margin-right: 1px;
}

SPAN.ms-crm-MenuItem-TextRTL,
img.ms-crm-Menu-ButtonRTL
{
	padding-left: 5px;
	padding-right: 4px;
<% if (Request.Browser.Browser != "IE") { %>
	padding-bottom: 3px;
<% } else { %>
	padding-bottom: 4px;
<% } %>>
}
img.ms-crm-Menu-ButtonLTR,
SPAN.ms-crm-MenuItem-TextLTR
{
	padding-left: 4px;
	padding-right: 5px;
<% if (Request.Browser.Browser != "IE") { %>
	padding-bottom: 3px;
<% } else { %>
	padding-bottom: 4px;
<% } %>>
}

/* The text on the button or menu on the command bar */
SPAN.ms-crm-MenuItem-Text,
SPAN.ms-crm-MenuItem-Text-MultiSelect-Populated,
SPAN.ms-crm-MenuItem-TextFirst,
SPAN.ms-crm-MenuItem-TextRTL,
SPAN.ms-crm-MenuItem-TextLTR
{
	height: 16px;
	vertical-align: top;
	color: #000000;
}

TD.ms-crm-MenuItem-Text
{
	color: #15428b;
}

/* The downarrow for a command bar item */
img.ms-crm-Menu-DownArrow
{
	width: 11px;
	height: 16px;
	vertical-align: top;
}

TD.ms-crm-MenuItem-Icon,
SPAN.ms-crm-MenuItem-Icon
{
	margin-left: 1px;
	margin-right: 1px;
	width: 30px;
}

SPAN.ms-crm-MenuItem-Icon-MultiSelect
{
	position: relative;
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: 5px;
	<% } else { %>
	margin-left: 5px;
	<% } %>
	width: 30px;
	margin-top:8px;
	
}
LI.ms-crm-MenuItem-Icon-MultiSelect
{
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: -16px;
	<% } else { %>
	margin-left: -16px;
	<% } %>
}


IMG.ms-crm-SubMenu-RightArrow
{
	position:	absolute;
<% if (CrmStyles.IsRightToLeft) { %>
	left:		6px;
<% } else { %>
	right:		6px;
<% } %>
	width:		4px;
	height:		7px;
	margin-top:	5px;
}
SPAN.ms-crm-Menu-Group,
SPAN.ms-crm-Menu-Group-Opened,
SPAN.ms-crm-Menu-Group-Hovered
{
	background-repeat: repeat-y;
	color:		#7e7e7e;
	background-color: #e9e9e9;
	<% if (CrmStyles.IsRightToLeft) { %>
	background-position:right;
	<% } %>
}

SPAN.ms-crm-Menu-Group,
SPAN.ms-crm-Menu-Group-Opened,
SPAN.ms-crm-Menu-Group-Hovered,
TABLE.ms-crm-MenuItem-Notification-Label,
SPAN.ms-crm-MenuItem-Label,
SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered
{
	cursor: default;
	width: 100%;
	margin-top: 1px;
}

SPAN.ms-crm-Menu-Group,
SPAN.ms-crm-Menu-Group-Opened,
SPAN.ms-crm-Menu-Group-Hovered,
SPAN.ms-crm-MenuItem-Label
{
	height: 22px;
	padding: 3px;
}

SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered
{
	padding: 2px;
	height: 20px;
	border-width: 1px;
	border-style: solid;

}

SPAN.ms-crm-Menu-MultiSelect
{
	padding: 3px;
}

SPAN.ms-crm-Menu-MultiSelect,
SPAN.ms-crm-Menu-MultiSelect-Hovered
{
	height: 21px;
	cursor: default;
	margin-top: 1px;
	width: 100%;
}

SPAN.ms-crm-Menu-MultiSelect-Hovered
{
	padding: 2px;
	border: #ffb74c 1px solid;
	background-color: ffe6a0;
}

IMG.ms-crm-Menu-JewelButton
{
	margin-top: 2px;
	margin-left: 5px;
	margin-right: 5px;
}
UL.ms-crm-MenuBar-Left,
UL.ms-crm-MenuBar-Right
{
	margin: 0px;
	padding: 0px;
	list-style: none;
	<% if(Util.IsIosDevice(Page.Request)) { %>
		<% if (CrmStyles.IsRightToLeft) { %>
			margin-right: 40px;
		<%} else { %>
			margin-left: 40px;
		<% } %>

	<% } %>
	margin-top:2px;
}


DIV.ms-crm-MenuBar UL.ms-crm-MenuBar-Left,
{
<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: -4px;
<%} else { %>
	margin-left: -4px;
<% } %>
}

.ms-crm-GridActionBar * UL.ms-crm-MenuBar-Left,
.ms-crm-GridActionBar * UL.ms-crm-MenuBar-Right,
.ms-crm-ActionBar * UL.ms-crm-MenuBar-Left,
.ms-crm-ActionBar * UL.ms-crm-MenuBar-Right
{
	margin-top: 0px;
}

UL.ms-crm-MenuBar-Right
{
	<% if (CrmStyles.IsRightToLeft) { %>
	float:left;
	<% } else { %>
		float:right;
	<% } %>
}

UL.ms-crm-MenuBar-Left
{
	<% if (!CrmStyles.IsRightToLeft) { %>
	float:left;
	<% } %>
}

LI.ms-crm-MenuItem-Boxed
{
	background-image: url(/_imgs/ico_16_insertCheck.gif);
	<% if (CrmStyles.IsRightToLeft) { %>
	background-position:right;
	<% } %>
}

LI.ms-crm-MenuItem-Unboxed
{
	background-image: url(/_imgs/ico/16_L_check.gif);
	<% if (CrmStyles.IsRightToLeft) { %>
	background-position:right;
	<% } %>
}

table.scroll
{
	width:100%;
	height:100%;
	behavior: url(<%=CrmUri.Create("/_static/_common/scripts/scroll.htc", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()%>);
}

UL.ms-crm-MenuList
{
	list-style: none;
	border: 1px solid #7e7e7e;
	margin: 0px;
	padding: 0px;
	display: none;
	width: 100%;
	background: #ffffff;
	background-repeat: repeat-y;
	<% if (CrmStyles.IsRightToLeft) { %>
	background-position:right;
	<% } %>
}
/*Style used when there is popup sub menu.*/
UL.ms-crm-MenuListMenu
{
	border: 0px solid #7e7e7e;
}
/* CRM SE 11263
Style used when there is popup sub menu.*/
TD.ms-crm-MenuListTD
{
	border: 1px solid #7e7e7e;
	margin: 0px;
	padding: 0px;
	width: 100%;
	background: #ffffff;
	background-repeat: repeat-y;
	background-image: url(/_imgs/menu_margin.gif);
	<% if (CrmStyles.IsRightToLeft) { %>
	background-position:right;
	<% } %>
}
LI.ms-crm-Group-Spacer
{
	display: inline;
	width: 100%;
	height: 23px;
	white-space: nowrap;
}
LI.ms-crm-SubMenu
{
	display: inline;
	width: 100%;
	height: 23px;
	white-space: nowrap;
}

LI.ms-crm-MenuItem-Notification-Label,
LI.ms-crm-MenuItem-Label
{
	width: 100%;
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: -16px;
	<%} else { %>
	margin-left: -16px;
	<%} %>
}

LI.ms-crm-MenuItem-Label
{
	height: 23px;
	white-space: nowrap;
}

LI.ms-crm-MenuItem-Notification-Label
{
	background-color: #ffffae;
	border: 1px solid #c5c5c5;
}


LI.ms-crm-Menu-MultiSelect-Spacer
{
	margin-bottom: 8px;
	border:1px solid #7e7e7e;	
}

LI.ms-crm-Menu-MultiSelect-Populated-Top
{
	margin-top:1px;
}

LI.ms-crm-Menu-MultiSelect-Populated-Bottom
{
	margin-bottom:1px;
}

LI.ms-crm-Menu-MultiSelect-Spacer,
LI.ms-crm-Menu-MultiSelect-Populated-Top,
LI.ms-crm-Menu-MultiSelect-Populated-Picklist-Top,
LI.ms-crm-Menu-MultiSelect-Populated-Middle,
LI.ms-crm-Menu-MultiSelect-Populated-Bottom
{
	height: 23px;
	width: 100%;	
	white-space: nowrap;
}


LI.ms-crm-menu-MultiSelect-Picklist-Message
{
	border-top:1px solid #7e7e7e;
	border-left:1px solid #7e7e7e;
	border-right:1px solid #7e7e7e;
	margin-top:9px;
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: 19px;
	margin-left: 8px;
	<%} else { %>
	margin-left: 19px;
	margin-right: 8px;
	<%} %>
}

UL.ms-crm-MultiSelect-container
{
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: -16px;
	<%} else { %>
	margin-left: -16px;
	<%} %>
	
	overflow-y:auto;
	overflow-x:hidden;
}

LI.ms-crm-MultiSelect-container
{
	border:1px solid #7e7e7e;
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: 35px;
	margin-left: 8px;
	<%} else { %>
	margin-left: 35px;
	margin-right: 8px;
	<%} %>
	margin-bottom:8px;
	
}
LI.ms-crm-Picklist-Container-WithImage
{
	margin-top:-20px;
}
LI.ms-crm-Picklist-Container-WithoutImage
{
	margin-top:-14px;
}
SPAN.ms-crm-Menu-Button
{
	<% if (CrmStyles.IsRightToLeft) { %>
	text-align:left;
	<%} else { %>
	text-align:right;
	<%} %>
	height: 21px;
	cursor: default;
	margin-top: 5px;
	margin-bottom: 5px;
	 <% if (CrmStyles.IsRightToLeft) { %>
	margin-left: 8px;
	<%} else { %>
	margin-right: 8px;
	<%} %>
	width: 100%;
}
BUTTON.ms-crm-Menu-Button
{
	width:60px;
   <% if (CrmStyles.IsRightToLeft) { %>
	margin-right: 5px;
	<%} else { %>
	margin-left: 5px;
	<%} %>
}

DIV.ms-crm-MenuBar
{
	color: #000000;
	height: 44px;
	overflow: hidden;
	width: 100%;
	background-repeat: repeat-x;
	display:inline-block;
	padding-top:3px;
}

DIV.ms-crm-AppMenuBar
{
	color: #000000;
	height: 27px;
	overflow: hidden;
	padding-left: 4px;
	padding-right: 4px;
	background-image: url(/_imgs/appmenu_back.gif);
	background-repeat: repeat-x;
}
.ms-crm-GridActionBar,
.ms-crm-ActionBar
{
	color: #000000;
	overflow: hidden;
	display:block;
	background-repeat: repeat-x;
}

.ms-crm-ActionBar
{
	height: 25px;
	border-left-width: 1px;
	border-left-style: solid;
	border-right-width: 1px;
	border-right-style: solid;	
	border-top-width: 1px;
	border-top-style: solid;
}

li.ms-crm-MenuList-Spacer
{
	display: inline;
	height: 2px;
	margin-top: -7px;
	margin-bottom: -7px;
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: 35px;
	<%} else { %>
	margin-left: 35px;
	<%} %>
}

span.ms-crm-Menu-JewelButton-first-span
{
	width: 14px;
	display:inline-block;
}
span.ms-crm-Menu-JewelButton-third-span
{
	width: 14px;
	display:inline-block;
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-left: 12px;
	<%} else { %>
	margin-right: 12px;
	<%} %>
}

span.ms-crm-Menu-JewelButton-second-span
{
	color: #ffffff;
	display:inline-block;
	vertical-align: top;

}

span.ms-crm-Menu-Jewel-label
{
	margin-top: 5px;
	display:inline-block;
}

td.ms-crm-MenuBar-Items
{
	vertical-align: top;
	width: 85%;
}
td.ms-crm-Menu-ICRight
{
	position: absolute;
	<% if (CrmStyles.IsRightToLeft) { %>
	left: 0px;
	text-align:left;
	<% } else { %>
	right: 0px;
	text-align:right;
	<% } %>
}

div.ms-crm-Menu-Title
{
	cursor: default;
	color: #000000;
	padding-top: 3px;
}

div.ms-crm-Menu-Right
{
	<% if (CrmStyles.IsRightToLeft) { %>
	text-align: left;
	padding-left: 5px;
	<% } else { %>
	text-align: right;
	padding-right: 5px;
	<% } %>
}


hr.ms-crm-MenuList-Spacer
{
	height: 1px;
	color: #c5c5c5;
	width: 100%;
}
 

div.ms-crm-MenuBar-Shadow
{
	border-top:1px solid #A8AEB5;
	border-bottom:1px solid #ffffff;
}

div.ms-crm-ToolBar-Shadow
{
	border-bottom-width: 1px;
	border-bottom-style: solid;
	line-height:0px;
}

table.ms-crm-Form-Title
{
	width:				100%;
	height:				48px;
	table-layout:		fixed;
}
table.ms-crm-Form-Title-NoNav
{
	padding-top:			6px;
	width:				100%;
	height:				54px;
	table-layout:		fixed;
}

td.ms-crm-Form-Title
{
	<% if (CrmStyles.IsRightToLeft) { %>
	text-align:     right;
	padding-right:  1px;
	padding-left:   1px;
	<% } else { %>
	text-align:     left;
	padding-left:   1px;
	padding-right:  1px;
	<% } %>
	overflow: hidden;
	text-overflow: ellipsis;
}

td.ms-crm-solution-title
{
	<% if (CrmStyles.IsRightToLeft) { %>
	text-align:     left;
	padding-right:  10px;
	padding-left:   10px;
	<% } else { %>
	text-align:     right;
	padding-left:   10px;
	padding-right:  10px;
	<% } %>
	overflow: hidden;
	text-overflow: ellipsis;
}

td.ms-crm-Picklist-Values
{
	vertical-align:	top;
	height:190px;
	 <% if (CrmStyles.IsRightToLeft) { %>
	text-align: left;
	padding-left: 2px;
	<% } else { %>
	text-align: right;
	padding-right: 2px;
	<% } %>
}



IMG.ms-crm-Form-Breadcrumb-Nav
{
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-left:    8px;
	<% } else { %>
	margin-right:   8px;
	<% } %>
	vertical-align:	middle;
}

span.ms-crm-Form-Title
{
	line-height:	16px;
	vertical-align:	bottom;
}

span.ms-crm-solution-title
{
	line-height:	16px;
	vertical-align:	bottom;
	<% if (CrmStyles.IsRightToLeft) { %>
	text-align:     left;
	<% } else { %>
	text-align:     right;
	<% } %>
}

div.ms-crm-Standard-Popup
{
	border: 1px solid #7e7e7e;
	margin: 0px;
	padding: 0px;
	display: none;
	width: 100%;
	background: #ffffff;
	background-repeat: repeat-y;
	<% if (CrmStyles.IsRightToLeft) { %>
	background-position:right;
	<% } %>
}

div.ms-crm-Standard-Item
{
	width: 100%;
	margin-top: 1px;
	height: 22px;
	padding: 3px;
	<% if (CrmStyles.IsRightToLeft) { %>
	padding-right: 35px;
	text-align: right;
	<%} else { %>
	padding-left: 35px;
	text-align: left;
	<%} %>
	cursor:pointer;
}

div.ms-crm-Standard-Item-Glow
{
	height: 22px;
	width: 100%;
	margin-top: 1px;
	padding: 2px;
	border-width: 1px ;
	border-style: solid;
	<% if (CrmStyles.IsRightToLeft) { %>
	padding-right: 34px;
	text-align: right;
	<%} else { %>
	padding-left: 34px;
	text-align: left;
	<%} %>
	cursor:pointer;
}

hr.ms-crm-Standard-Item
{
	height: 2px;
	height: 1px;
	color: #c5c5c5;
	width: 100%;
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-left: 7px;
	margin-right: 35px;
	<%} else { %>
	margin-left: 35px;
	margin-right: 7px;
	<%} %>
}

INPUT.ms-crm-MenuItem-Input,
INPUT.ms-crm-MenuItem-Input-VSA,
INPUT.ms-crm-MenuItem-Input-SelectAll
{
	BORDER: 0px;
	COLOR: #000000;
}

INPUT.ms-crm-MenuItem-Input
{
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-left: 10px;
	<%} else { %>
	margin-right: 10px;
	<%} %>
}

INPUT.ms-crm-MenuItem-Input-VSA
{
	<% if (CrmStyles.IsRightToLeft) { %>
	margin-right: 8px;
	<%} else { %>
	margin-left: 8px;
	<%} %>
}

UL.ms-crm-AVS-Menu-qrk,
UL.ms-crm-AVS-Menu,
UL.ms-crm-VS-Menu,
UL.ms-crm-POPUP-Menu
{
	width : 100%;
	height: auto;
	margin-left:0px;
	padding-left:0px;
	list-style:none;
	overflow:hidden;
}
DIV.ms-crm-AVS-Menu-qrk,
DIV.ms-crm-AVS-Menu,
DIV.ms-crm-POPUP-Menu,
DIV.ms-crm-LK-Menu
{
	border : 1px solid #a1a5aa;
	overflow-x : hidden;
	overflow-y : auto;
	background-color : #ffffff;
}
DIV.ms-crm-VS-Menu
{
	overflow-x : hidden;
	overflow-y : auto;
	background-color : #ffffff;
}
DIV.ms-crm-IL-MRU-Menu,
DIV.ms-crm-IL-Menu
{
	border-right : 1px solid #c6c6c6;
	border-bottom : 1px solid #cccccc;
	border-left : 1px solid #c6c6c6;
	overflow-x : hidden;
	overflow-y : auto;
	background-color : #ffffff;
}
DIV.ms-crm-IL-Menu
{
	border-top : 1px solid #c6c6c6;
}
DIV.ms-crm-modalDialog
{
	z-index : 2001;
	height: 100%;
	width :100%;
	overflow :hidden;
	background-color: #ffffff;
}