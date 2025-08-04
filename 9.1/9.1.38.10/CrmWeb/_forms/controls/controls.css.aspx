<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


body[contentEditable=true] BLOCKQUOTE
{
margin-top:0px;
margin-bottom:0px;
}

TEXTAREA
{
width: 100%;
resize: none;
overflow:auto;
}

INPUT
{
width: 100%;
}

.ms-crm-UnsetWhiteSpace
{
white-space: unset !important;
}

.ms-crm-ltrcontrol
{
direction:ltr;
}

.ms-crm-HeaderTileElement.ms-crm-Inline-EditHintState
{
background: #F3F1F1;
}

.ms-crm-AdvFind-Filter DIV.ms-crm-Lookup {
height:18px;
}

.ms-crm-div-NotVisible
{
position:absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right:-10000px;
<% } else { %>
left:-10000px;
<% } %>
top:auto;
width:1px;
height:1px;
overflow:hidden;
}

.ms-crm-div-NotSelectable
{
user-select : none;
}

.ms-crm-div-element-NotVisible
{
position: absolute !important;
height: 1px; width: 1px;
overflow: hidden;
clip: rect(1px 1px 1px 1px);
clip: rect(1px, 1px, 1px, 1px);
white-space:nowrap;
}

.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print
{
width: 100%!important;
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<% } else { %>
direction:ltr;
<% } %>
}

.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print .ms-crm-Inline-Edit.ms-crm-HeaderTile
{
width: 200px !important;
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<% } else { %>
direction:ltr;
<% } %>
}










.ms-crm-ltrcontrol.ms-crm-Inline-Chrome .ms-crm-Inline-EmptyValue,
.ms-crm-ltrcontrol.ms-crm-Inline-Chrome .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<% } else { %>
direction:ltr;
<% } %>
}



INPUT.radio
{
height:				20px;
}

TEXTAREA.ms-crm-ReadOnly,
INPUT[type=text].ms-crm-ReadOnly,
.ms-crm-Input
{
border: 0px;
margin: 0px;
padding-top: 0px;
padding-left: 0px;
padding-bottom: 0px;

<% if (!CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<%} %>
}

INPUT.ms-crm-ReadOnlyDateTime
{
background-color: #FFFFFF;
color: #000000;
border: 0px;
margin: 0px;
padding-top: 0px;
padding-left: 0px;
padding-bottom: 0px;

<% if (!CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<%} %>
}

.ms-crm-hidden-container
{
display:none;
}

.ms-crm-Input-Container
{
padding: 1px;
background-color:#ffffff;
border-width: 1px;
border-style: solid;
}

<% if (this.IsVisualRefreshEnabled) { %>
.ms-crm-Inline-Value.ms-crm-Input-Container
{
padding: 2px 0px 3px 0px !important;
}
<% }%>

.ms-crm-Input-Container.focus
{
outline-color: -webkit-focus-ring-color;
outline-width: 1px;
outline-style: auto;
}

.ms-crm-Inline-Value.ms-crm-Inline-NoValue.ms-crm-Input-Container
{
top: 0px;
border-top-color: #C6C6C6;
border-width: 1px;
border-style: solid;
}

.ms-crm-Input:focus
{
outline: none;
}
.ms-crm-DateTime-Container-Input
{

<% if (!CrmStyles.IsRightToLeft) { %>
padding-left: 5px;
<%} else { %>
padding-right: 5px;
<% } %>
<% if (this.IsVisualRefreshEnabled) { %>
padding-top:1px;
padding-bottom:1px;
height :19px;
<% } %>
}

TABLE.ms-crm-DateTime .ms-crm-DateTime-Container
{
overflow: hidden;
}
.ms-crm-Input-Container-ReadOnly
{
border-top-width:2px;
border-top-color:#696969;
<% if (CrmStyles.IsRightToLeft) { %>
border-right-width:2px;
border-right-color:#696969;
<% } else { %>
border-left-width:2px;
border-left-color:#696969;
<% } %>
}
td.DateTimeUI_RenderDateControl_td TEXTAREA.ms-crm-ReadOnly,
td.DateTimeUI_RenderDateControl_td INPUT.ms-crm-ReadOnly,
td.DateTimeUI_RenderDateControl_td .ms-crm-ReadOnly
{
padding-bottom:2px;
width:90%;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:4px;
<% } else { %>
margin-right:4px;
<% } %>
}
.ms-crm-IE7-Texarea-Container{
position:relative;
height: 100%;
}
.ms-crm-IE7-Texarea{
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
padding:0px;
}
.ms-crm-IE7-td-Texarea-Container{
position:absolute;
top:3px;
bottom:2px;
<% if (CrmStyles.IsRightToLeft) { %>
left:2px;
right:3px;
<% } else { %>
left:3px;
right:2px;
<% } %>
}
INPUT.ms-crm-RadioButton
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
margin-left: 3px;
<% } else { %>
margin-left: 8px;
margin-right: 3px;
<% } %>
width: 15px;
border: 0px;
cursor: pointer;
vertical-align: middle;
margin-top: 0px;
}

DIV.ms-crm-RadioButton
{

}

INPUT.ms-crm-Email-Address,
INPUT.ms-crm-LiveId-Email-Address
{
text-decoration: underline;

direction: ltr ;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right ;
<% } %>
}

INPUT.ms-crm-Ticker
{
color: #0000ff;
text-decoration: underline;
}



INPUT.ms-crm-CheckBox
{
margin-top: 1px;
width: 16px;

}

INPUT.ms-crm-Url
{
text-decoration: underline;

<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } %>
}

INPUT.ms-crm-Number
{

<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } %>
}

INPUT.ms-crm-Money
{

direction:ltr;
border-left-width: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } %>
}

BUTTON.ms-crm-Button
{
overflow: visible;


min-width: 84px;
width: auto;
white-space:nowrap;
}

TABLE.ms-crm-DateTime td
{
padding:0 !important;
}

TABLE.ms-crm-DateTime TR
{
vertical-align : middle;
}

TABLE.ms-crm-Money
{

}

INPUT.ms-crm-Text
{

}

DIV.ms-crm-IL-MRU-Header,
DIV.ms-crm-IL-Header,
DIV.ms-crm-IL-MRU-Footer,
.ms-crm-Inline-Value,
.ms-crm-Inline-Edit input.ms-crm-InlineInput,
.ms-crm-Inline-Edit input.ms-crm-Input,
.processStep.emptyValue .bit .ms-crm-Inline-Value,
.ms-crm-Inline-Validation{
font-family: Segoe UI, Arial, sans-serif;
}

DIV.ms-crm-IL-MRU-Header,
DIV.ms-crm-IL-Header
{
background-color:	#FFFFFF;
border-top: 	1px solid #c6c6c6;
border-right: 	1px solid #c6c6c6;
border-left: 	1px solid #c6c6c6;
height:			11px;
font-size: 11px;
color: #666666;
padding-top: 5px;
padding-bottom: 5px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% } else { %>
padding-left: 6px;
<% } %>
}

DIV.ms-crm-IL-MRU-Footer
{
background-color:	#FFFFFF;
border-right: 	1px solid #c6c6c6;
border-left: 	1px solid #c6c6c6;
height:	11px;
font-size: 11px;
color: #666666;
padding-top: 5px;
padding-bottom: 5px;
text-align:center;
}

DIV.ms-crm-IL-Footer
{
background-color:	#FFFFFF;
border-right: 		1px solid #c6c6c6;
border-bottom: 		1px solid #c6c6c6;
border-left: 		1px solid #c6c6c6;
padding:			0px 6px;
height:				22px;
}

UL.ms-crm-InlineLookupEdit
{
font-size:	12px;
width:	100%;
<% if (this.IsVisualRefreshEnabled) { %>
line-height:14px;
overflow-y: hidden;
height : 16px !important;
<% } %>
overflow-x:	hidden;
<% if (CrmStyles.IsRightToLeft) { %>
float:	right;
text-align:	right;
<% } else { %>
float:	left;
text-align:	left;
<% } %>
}

DIV#header_process_CaseResearch_LinkControl_subjectlookup_lookupDiv UL.ms-crm-InlineLookupEdit{
overflow-y: hidden;
}

UL.ms-crm-InlineMultiLookupEdit
{
min-height: 19px;
}

TD.ms-crm-InlineLookupEdit-Box
{
width: 6px;
}

TD.ms-crm-InlineMultiLookupEdit-Box
{
width: 5px;
}

IMG.ms-crm-Inline-MultiLookupEdit
{
padding-top:	2px;
padding-bottom:	2px;
}

DIV.ms-crm-InlineLookupEdit
{
overflow-y: hidden !important;
height: 15px !important;
padding-top: 2px;
<% if (this.IsVisualRefreshEnabled) { %>
padding-bottom: 3px;
<%} else { %>
padding-bottom: 0px;
<%}%>

<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

.partylist .ms-crm-Inline-Value.ms-crm-Inline-Lookup.ms-crm-Inline-EditHintState
{
min-height: 16px;
}

INPUT.ms-crm-InlineLookupEdit
{
height:		15px !important;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:	-1px;
<% } else { %>
margin-left:	-1px;
<% } %>
}

.processStepValue DIV.ms-crm-InlineLookupEdit
{
overflow-y: hidden !important;
padding-top:	1px;
padding-bottom:	1px;
height:		16px !important;
}

.processStepValue INPUT.ms-crm-InlineLookupEdit
{
height:		16px !important;
}

.processStepValue IMG.ms-crm-InlineLookupEdit
{
height:	16px !important;
padding-top: 0px;
padding-bottom:	0px;
}

DIV.ms-crm-InlineLookup-FooterSection-TopResults
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>

<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>

width: 45%;
color: #444444;
padding: 4px 0px;
}

DIV.ms-crm-InlineLookup-FooterSection-AddNew
{
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>

<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
<% } else { %>
text-align:right;
<% } %>

<% if (CrmStyles.IsRightToLeft) { %>
padding: 4px 0px 2px 4px;
<% } else { %>
padding: 4px 2px 0px 4px;
<% } %>

width: 45%;
}

IMG.ms-crm-InlineLookup-FooterSection-AddImage
{
height: 10px;
width: 10px;

<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 4px;
<% } else { %>
padding-right: 4px;
<% } %>
}
A.ms-crm-InlineLookup-FooterSection-AddAnchor
{
color: #262626;
border:	1px solid #ffffff;
padding-left: 2px;
padding-right: 2px;
}
A.ms-crm-InlineLookup-FooterSection-AddAnchor-Selected
{
background-color:	#D7EBF9;
}

SPAN.ms-crm-Lookup-Item
{
margin-top: -1px;
cursor:	pointer;
margin-left: 1px;
margin-right: 1px;
<% if (this.IsVisualRefreshEnabled) { %>
height : 16px;
<% } %>
}

<% if (this.IsVisualRefreshEnabled) { %>
DIV .ms-crm-Inline-Lookup.ms-crm-Inline-NoValue
{
height:16px;
}
<% } %>


SPAN.ms-crm-BreadCrumb-Lookup-Parent-Container
{
width: 100%;
display:inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<% } else { %>
direction:ltr;
<% } %>
}

SPAN.ms-crm-BreadCrumb-Lookup-Parent-Container span
{
min-width: 0% !important;
vertical-align:inherit;
}

SPAN.ms-crm-BreadCrumb-Lookup-Parent-Container-Child
{
width: 100%;
display:inline-block;
overflow:hidden;
<% if (CrmStyles.IsRightToLeft) { %>
direction:ltr;
<% } else { %>
direction:rtl;
<% } %>
}

SPAN.ms-crm-BreadCrumb-Lookup-Item
{
margin-top: -1px;
cursor:       pointer;
margin-left: 1px;
margin-right: 1px;
display:inline-block;
overflow:hidden;
text-overflow:ellipsis;
max-width:200px;
vertical-align:bottom;
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<% } else { %>
direction:ltr;
<% } %>
}

SPAN.ms-crm-focus-breadcrumb-item
{
border-width: 1px;
border-style: dotted;
border-color : blue;
}

SPAN.ms-crm-hide-breadcrumb-extra
{
display:none !important;
}

SPAN.ms-crm-BreadCrumb-Lookup-Item-Seperator
{
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<% } else { %>
direction:ltr;
<% } %>
}

SPAN.ms-crm-selected-Lookup-Item
{
background-color: rgb(0, 114, 198) !important;
color: rgb(255,250,250) !important;
}

A.ms-crm-List-Link:hover
{
text-decoration: <%= WebUtility.GetFontResourceForStyle("controls.css.aspx.SPAN.lui.text_decoration")%>;
}

.ms-crm-SubGrid-InlineEdit-Anchor
{
text-decoration: None !important;
}

.ms-crm-SubGrid-InlineEdit-Span
{
text-decoration: None;
}

DIV.ms-crm-SubGrid-InlineEdit
{
position: relative;
padding: 0px;
margin: 0px;
background-color: rgb(0,0,0,0);
}

DIV.ms-crm-SubGrid-InlineEdit-Nobr-Div
{
overflow: hidden;
text-overflow: ellipsis;
}

DIV.ms-crm-SubGrid-InlineEdit:hover
{
background-color: white;
}

SPAN.ms-crm-Lookup-DialogItem
{
margin-top: -1px;
color: #000000;
cursor:	pointer;
margin-left: 1px;
margin-right: 1px;
}

SPAN.ms-crm-Lookup-SelectedDialogItem
{
margin-top: -1px;
cursor:	pointer;
background-color: #a7cdf0;
color: #000000;
margin-left: 1px;
margin-right: 1px;
}

SPAN.ms-crm-Lookup-SelectedDialogItem-NoFocus
{
margin-top: -1px;
cursor:	pointer;
background-color: #cdcdcd;
color: #000000;
margin-left: 1px;
margin-right: 1px;
}


SPAN.ms-crm-Lookup-SelectedDialogItemIE11
{
margin-top: 0px;
cursor:	pointer;
background-color: #a7cdf0;
color: #000000;
margin-left: 1px;
margin-right: 1px;
}


SPAN.ms-crm-Lookup-SelectedDialogItem-NoFocusIE11
{
margin-top: 0px;
cursor:	pointer;
background-color: #cdcdcd;
color: #000000;
margin-left: 1px;
margin-right: 1px;
}

SPAN.ms-crm-Lookup-Item-NonEntity
{
margin-top: -1px;
color: #000000;
text-decoration: none;
cursor:	default;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>
word-break: break-all;
}

SPAN.ms-crm-Lookup-Ambiguous,
SPAN.ms-crm-Lookup-PartyItem-NoAddress,
SPAN.ms-crm-Lookup-PartyItem-Unresolved,
SPAN.ms-crm-Lookup-Unresolved
{
color:				#EB0000;
text-decoration:	underline;
cursor:				pointer;
}

SPAN.ms-crm-Inline-LookupItem-Ambiguous-Name
{
text-decoration:	underline;
}

SPAN.ms-crm-Lookup-Item SPAN.ms-crm-LookupItem-Name.ms-crm-Inline-MultiLookupItem-Unresolved,
SPAN.ms-crm-Lookup-Item SPAN.ms-crm-LookupItem-Seperator.ms-crm-Inline-MultiLookupItem-Unresolved,
SPAN.ms-crm-Inline-MultiLookupItem-Unresolved
{
color:	#FF0000;
}

IMG.ms-crm-Lookup-Item
{
<% if (this.IsVisualRefreshEnabled) { %>
vertical-align:		top;
<% } else { %>
vertical-align:		middle;
<% } %>
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
margin-left:		5px;
<% } else { %>
margin-left:		2px;
margin-right:		5px;
<% } %>
}

.partylist DIV.ms-crm-InlineLookupEdit
{
overflow-y:			auto !important;
height:				auto !important;
max-height:			56px !important;
}

.partylist IMG.ms-crm-Lookup-Item
{
<% if (this.IsVisualRefreshEnabled) { %>
margin-top: 0px;
<% } else { %>
margin-top: -4px;
<% } %>
}

.partylist SPAN.ms-crm-Lookup-Item SPAN.ms-crm-selected-Lookup-Item:hover
{
cursor: pointer;
}

.partylist SPAN.ms-crm-Lookup-Item:hover
{
cursor: text;
}

.partylist SPAN.ms-crm-Lookup-Item-Read:hover
{
cursor: text;
}

IMG.ms-crm-Lookup-PresenceItem
{
height:				12px;
width:				12px;
margin-top:		    1px;
vertical-align:		middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
margin-left:		9px;
<% } else { %>
margin-left:		2px;
margin-right:		9px;
<% } %>
}

.ms-crm-Inline-Lookup IMG.ms-crm-Lookup-PresenceItem
{
margin-bottom:	    3px;
}

.ms-crm-List-Link IMG.ms-crm-Lookup-PresenceItem
{
margin-bottom:		8px;
}

DIV.ms-crm-FloatLookup
{
position: absolute;
height: 50px!important;
}
INPUT.ms-crm-LookupNormal
{
margin-top: -1px;
margin-bottom: -1px;
}

DIV.ms-crm-Lookup
{
overflow-y:			auto;
overflow-x:         hidden;
outline:            none;
word-wrap:			break-word;
min-height:18px;
height:auto;
background:			window;
width:				100%;
}

DIV.ms-crm-Lookup-Party
{
overflow-y: auto;
width: 100%;
word-wrap: break-word;
background: window;
height: 20px;
padding-top: 2px;
}

DIV.ms-crm-Lookup-DisplayOnly
{
height:				80px;
}

TABLE.ms-crm-Lookup
{

}

TABLE.ms-crm-Lookup td {
padding: 0 !important;
}

DIV.ms-crm-ReadOnly
{
overflow-y:			auto;
height:				18px;
width:				100%;
background-color:	#FFFFFF;
border-color:		#C5C5C5;
}

DIV.ms-crm-Lookup-Required
{
background-color:	<%= WebUtility.GetFontResourceForStyle("Required_Fields_Background_Color")%>;
}

DIV.ms-crm-Lookup-Recommended
{
background-color:	<%= WebUtility.GetFontResourceForStyle("Recommended_Fields_Background_Color")%>;
}

IMG.ms-crm-Lookup
{
cursor:				pointer;
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-Lookup-Party
{
cursor:				pointer;
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-Lookup-TransactionCurrency
{
cursor:				pointer;
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-DateTime
{
cursor:				pointer;
}

IFRAME.ms-crm-Email-Body
{
background-color:	#ffffff;
height:				100%;
width:				100%;
overflow:			auto;
border-width:		0px;
}
TD.ms-crm-Email-Body
{
border-width:		1px;
border-style:		solid;
}

TABLE.ms-crm-Email-Body {}

TABLE.ms-crm-Email-Body-Error
{
background-color:	#ffffae;
border:				1px solid #c5c5c5;
width:				100%;
table-layout:		fixed;
padding-top:		20px;
padding-bottom:		20px;
}

TABLE.ms-crm-Inline-Email-Body-Error
{
padding-top:		5px;
padding-bottom:		5px;
border-bottom-width: 0px;
}


SPAN.ms-crm-DataSlugBody
{
border:	1px solid #c5c5c5;
background-color: #FFFFFF;
overflow-y: auto;
}

SPAN.ms-crm-DataSlugBodySingleSlug
{
border:	1px solid #c5c5c5;
background-color: #FFFFFF;
overflow: hidden;
}

SPAN.ms-crm-DataSlug
{
background-color: #FFFF33;
height: 15px;
padding-top: 1px;
padding-right: 2px;
padding-left: 2px;
overflow: hidden;
margin-bottom: 0px;
vertical-align: middle;
}

SPAN.ms-crm-DataSlug:focus
{
border-width: 1px;
border-style: dotted;
border-color : blue;
}

SPAN.ms-crm-DataSlugBody P
{
margin:0px;
}

td.ms-crm-Money-CurrencySymbol
{
text-align: center;
border-top-width: 1px;
border-right-width: 0px;
border-bottom-width: 1px;

border-left-width: 1px;
border-style: solid;
border-right-style:inset;
border-color: #e2e3ea;
border-top-color: #abadb3;
width: 1px;
white-space:nowrap;
}

td.ms-crm-CurrencySymbol-Refresh
{
text-align: center;
padding-right: 2px;
padding-left: 2px;
width: 1px;
white-space:nowrap;
word-wrap: normal;
}

.ms-crm-CurrencyTable-Refresh
{
width: 100%;
white-space:nowrap;

}

table.ms-crm-CurrencyTable-Refresh td{
padding:0 !important;
}

.ms-crm-Money .ms-crm-Input-Container
{

border-left-width: 0;
padding-left: 0px;
}

span.ms-crm-Money-CurrencySymbol
{
padding-right:1px;
}

DIV.ms-crm-CheckBoxList
{
height: 100%;
overflow: auto;
width: 100%;
}

DIV.ms-crm-NextButton
{
padding: 5px;
}

IMG.ms-crm-NextButton
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<%} %>
vertical-align: middle;
}

SPAN.ms-crm-NextButton
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<%} %>
padding-left: 10px;
color:  #15428B;
}

A.ms-crm-NextButton-Disabled
{
cursor: default;
}

TABLE.ms-crm-ReportControl
{
background-color: #FFFFFF;
border-left: 1px solid #6893CF;
border-top: 2px solid #6893CF;
border-right: 1px solid #6893CF;
border-bottom: 1px solid #6699CC;
}

BUTTON#btnRemoveValue
{
width: auto;
}

.crm-divLeft
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
padding-right: 2%;
text-align: right;
<% } else { %>
float:left;
padding-left: 2%;
text-align: left;
<% } %>
width: 48%;
padding-top:1%;
padding-bottom:1%;
}
.crm-divRight
{
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
padding-right: 2%;
text-align: right;
<% } else { %>
float:right;
padding-left: 2%;
text-align: left;
<% } %>
width: 48%;
padding-top:1%;
padding-bottom:1%;
}
input[type="text"]:disabled,
textarea:disabled,
select:disabled,
option:disabled {
color: #666666;
}

input.ms-crm-SelectBox:disabled{
color:#666666;
}

td.AppAttachment_Render_td6,
td.AppAttachment_Render_td5
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:3px;
text-align: right;
<% } else { %>
padding-left:3px;
text-align: left;
<% } %>
}

.RTE_list_style_position
{
list-style-position:inside;
}


.RTE_list_style_position LI>:first-child
{
display:inline;
}

INPUT.ms-crm-Url.ms-crm-ReadOnly,
INPUT.ms-crm-Email-Address.ms-crm-ReadOnly
{
color:#666666;
}

INPUT.ms-crm-Phone
{

direction:ltr;
border-left-width: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } %>
}


.ms-crm-Inline-Chrome
{
width: 100%;
position:relative;
}

.ms-crm-Inline-Chrome:focus, .ms-crm-Inline-Chrome *:focus
{
outline: none;
}

.ms-crm-Inline-Edit.ms-crm-Inline-Lookup
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: -1px;
<% } else { %>
margin-right: -1px;
<% } %>
z-index: 200;
Overflow: Visible;
position: relative;
}

.ms-crm-Inline-Edit.ms-crm-Inline-CheckBox
{
display:inline-block;
}

.partylist .ms-crm-Inline-Value.ms-crm-Inline-Lookup
{
white-space: inherit;
max-height: 50px;
overflow: hidden;
}

#lost-competitor .ms-crm-Inline-Edit.ms-crm-Inline-Lookup
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 5px;
margin-left: 6px \0/;
<% } else { %>
margin-right: 5px;
margin-right: 6px \0/;
<% } %>
}

#_lost_revenue .ms-crm-Inline-Edit.ms-crm-Inline-Currency,
#_won_revenue .ms-crm-Inline-Edit.ms-crm-Inline-Currency
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 12px;
margin-left: 14px \0/;
<% } else { %>
margin-right: 12px;
margin-right: 14px \0/;
<% } %>
}

#_lost_closedate .ms-crm-Inline-Edit,
#_won_closedate .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 6px;
margin-left: 7px \0/;
<% } else { %>
margin-right: 6px;
margin-right: 7px \0/;
<% } %>
}

#_lost_statusreason .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 7px;
margin-left: 9px \0/;
<% } else { %>
margin-right: 7px;
margin-right: 9px \0/;
<% } %>
}

.ms-crm-Inline-DateTimeSpacer
{
padding-right: 9px;
}

.processStepValue .ms-crm-Inline-Value,
.processStepValue .ms-crm-Inline-Edit input.ms-crm-InlineInput
{
padding-top: 1px;
padding-bottom: 1px;
}

.processStepValue .ms-crm-Inline-Value span.ms-crm-Lookup-Item-Read,
.processStepValue .ntext .ms-crm-Inline-Value
{
height: 16px;
}

.processStepValue .ntext .ms-crm-Inline-Value
{
overflow-x: hidden;
}

.processStepValue .ms-crm-Inline-Value span.ms-crm-Lookup-Item-Read img
{
margin-top: -1px
}

.processStepValue .ms-crm-Inline-Edit ul.ms-crm-InlineLookupEdit img
{
margin-top: -1px
}

.highContrast .ms-crm-Inline-Value
{
padding:3px 1px 4px 1px;
border-width:0px;
}

.highContrast .ms-crm-Inline-Value.ms-crm-Inline-EditHintState
{
padding:2px 0px 3px 0px;
border-width:1px;
border-style:dashed;
}

.ms-crm-Inline-Value
{
overflow: hidden;
<% if (CrmStyles.IsTextWrapEnabled) { %>
line-height: 16px;
<% if (this.IsVisualRefreshEnabled) { %>
max-height: 48px !important;
<% } else { %>
max-height: 32px;
<% } %>
<% } else { %>
white-space: nowrap;
<% } %>

<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
margin-right: 23px;
padding-right: 0px;
<% } else { %>
text-align: left;
margin-left: 23px;
padding-left: 0px;
<% } %>
}

div.ms-crm-dataDownloadFilter-container:after
{
content: none !important;
}

div.ms-crm-dataDownloadFilter-container a
{
text-decoration: underline !important;
}

.ms-crm-HeaderTileElement.ms-crm-Inline-EditHintState .ms-crm-Inline-Lookup span{
overflow:hidden;
white-space:nowrap !important;
text-overflow:ellipsis;
width:calc(100% - 25px);
}

.ms-crm-HeaderTileElement .ms-crm-InlineEditLabel.ms-crm-HeaderTileLabel .ms-crm-InlineEditLabelText{
overflow:hidden;
white-space:nowrap !important;
text-overflow:ellipsis;
}

.ms-crm-HeaderTileElement.ms-crm-Inline-EditHintState .ms-crm-Inline-Lookup .ms-crm-Inline-EditIcon{
display:block;
}
.ms-crm-Form-AreaContainer table.ms-crm-FormSection.ms-crm-Theme-BackgoundImage .ms-crm-Inline-Value:after,
.ms-crm-Form-AreaContainer table.ms-crm-FormSection.ms-crm-Theme-BackgoundImage .ms-crm-Inline-Value:after,
.ms-crm-Form-AreaContainer table.ms-crm-FormSection.ms-crm-Theme-BackgoundImage .ms-crm-Inline-Value:after
{
<% if (this.IsVisualRefreshEnabled) { %>
background-image:none;
<% } else { %>
background: rgba(255, 255, 255, 0.25);
<% } %>
}


.ms-crm-Form-HeaderContainer .ms-crm-Inline-Value:after,
.ms-crm-Form-AreaContainer .ms-crm-Inline-Value:after,
.ms-crm-Form-HeaderContainer .ms-crm-Inline-Value label:after,
.ms-crm-Form-FooterContainer div.ms-crm-Inline-Value.ms-crm-Inline-Locked:after,
.ms-crm-Form-AreaContainerQuick .ms-crm-Inline-Value:after
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
z-index:1;
height:16px;
content: "";
position: absolute;
bottom: 0px;
width: 15px;

<% if (CrmStyles.IsRightToLeft) { %>
text-align: right !important;
left: 1px;
<% } else { %>
right: 1px;
<% } %>

<% if (this.IsVisualRefreshEnabled) { %>
height:auto;
width:100%;
left:0;
right:0;
top:32px;
background-image: linear-gradient(to bottom, rgba(255,255,255,0) 25%, rgba(255,255,255, 1) 90%);
<% } else { %>
background: rgba(255, 255, 255, 0.25);

background: -moz-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
<% if (CrmStyles.IsRightToLeft) { %>
left,
right,
<% } else { %>
right,
left,
<%} %>
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -ms-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#FFFFFF',
endColorstr='#40FFFFFF',
GradientType=1);
<% } else { %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);
<%} %>

background: linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);
<% } %>
<% } %>
}

.ms-crm-Form-AreaContainer .ms-crm-Inline-Value.ms-crm-Inline-EmptyValue:after{
<% if (CrmStyles.IsTextWrapEnabled) { %>
position:relative;
<% } %>
}

.ms-crm-Inline-Value.ms-crm-Email-Body-Value
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
}

.money > .ms-crm-HeaderTile
{
white-space: nowrap;
text-align: left;
margin-left: 23px;
padding-left: 0px;
}

table[name="email description"] tr td .ntext
{
overflow: hidden;
height: 100%;
}

table[name="appointment description"] tr td .ntext
{
overflow: hidden;
height: 100%;
}

.ntext .ms-crm-Inline-Value
{
overflow-x: auto;
white-space: normal;
word-wrap: break-word;
color:#BDC3C7;
}

.ms-crm-Inline-DynamicGutter .ms-crm-Inline-Value
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
}

.ms-crm-Inline-Value.ms-crm-Inline-EditHintState
{
top: 0px;
box-shadow: 1px 1px 2px #ccc;
}

.ntext .ms-crm-Inline-Value.ms-crm-Inline-NoValue.ms-crm-Inline-EditHintState
{
top: 0px;
}

.ms-crm-Inline-Value a,
.ms-crm-Inline-Value span
{
display: inline-block;
}

.ms-crm-HeaderTileElement .ms-crm-Field-Data-Print .ms-crm-Inline-Value span,
.ms-crm-HeaderTileElement .ms-crm-Field-Number-Print .ms-crm-Inline-Value label
{
<% if (this.IsVisualRefreshEnabled) { %>
white-space: initial;
<% } %>
}

.ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>

margin-right: 23px;
margin-left: 6px;
margin-left: 7px \0/;
<% } else { %>

margin-left: 23px;

margin-right: 6px;
margin-right: 7px \0/;
<% } %>
}

.ms-crm-Inline-fieldChangeIndicatorIcon
{
top:3px;
height:16px;
background: transparent none;
margin: 0;
padding: 0;
position: absolute;
z-index: 10;
}

.ms-crm-fieldchangeIndicator-spacer {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 23px !important;
<% } else { %>
margin-left: 23px !important;
<% } %>
}

.ms-crm-Inline-Edit-Theme-Margin
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 0px;
<% } %>
}

.ms-crm-Inline-Value-email-body
{
margin-left: 0px;
white-space: normal;
}

.ms-crm-FormSection .ms-crm-Inline-Value-email-border
{
border: 1px solid;
border-color: #D6D6D6;
}

.ms-crm-Inline-Edit-email-body
{
margin-left: 0px;
height:100%
}

.ms-crm-Inline-Value.ms-crm-Inline-Value-email-body
{
font-weight: normal;
overflow-y: auto;
height:100%
}

.ms-crm-Inline-DynamicGutter .ms-crm-Inline-Edit.ms-crm-Inline-OptionSet,
.ms-crm-Inline-DynamicGutter .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px !important;
<% } else { %>
margin-left: 0px !important;
<% } %>
}

.datetime .ms-crm-Inline-Edit,
.ms-crm-Duration .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 0px;
<% } else { %>
margin-right: 0px;
<% } %>
}

.ms-crm-QuickAdd-FlyOut-Lookup-Control
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
}

.ms-crm-Inline-Value,
.ms-crm-Inline-Edit input.ms-crm-InlineInput,
.ms-crm-Inline-Edit input.ms-crm-Input
{

<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>
color: #000000;
font-size: 12px;
min-width: 20px;
}

#customerpane_qfc_customerpane_qfc_account_name > .ms-crm-Inline-Value,
#customerpane_qfc_customerpane_qfc_contact_fullname > .ms-crm-Inline-Value
{
font-size: 18px ! important;
}

.ms-crm-Inline-Value.ms-crm-Inline-Lookup
{
color: #000000;
}

.ms-crm-Inline-Edit input.ms-crm-InlineInput
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
padding-right: 5px \0/;
<% } else { %>
padding-left: 4px;
padding-left: 5px \0/;
<% } %>
}

.ms-crm-Inline-Edit.ms-crm-Inline-OptionSet
{

<% if (this.IsVisualRefreshEnabled) { %>
height:23px;
<% } else { %>
height:22px;
<% } %>
height:23px \0/;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 22px;
margin-left: 0px;
margin-right: 21px \0/;
margin-left: 2px \0/;
<% } else { %>
margin-left: 22px;
margin-right: 0px;
margin-left: 21px \0/;
margin-right: 2px \0/;
<% } %>
}

:root .ms-crm-Inline-Edit.ms-crm-Inline-OptionSet
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 1px \0/IE9;
<% } else { %>
margin-right: 1px \0/IE9;
<% } %>
}

div.ms-crm-FieldLabel-LeftAlign
{
color: #444444;
}

span.ms-crm-InlineEditLabelWap
{
word-wrap:break-word !important;
white-space: normal !important;
}

.ms-crm-InlineEditLabel span:first-child
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
text-align: right !important;
<% } else { %>
float: left;
<% } %>
display: inline-block;
<% if (CrmStyles.IsTextWrapEnabled) { %>
max-height: 32px;
<% if (this.IsVisualRefreshEnabled) { %>
line-height: 16px;
max-height:48px;
overflow: hidden;
<% } else { %>
line-height: 18px;
<% } %>
<% } else { %>
white-space: nowrap;
<% } %>
}

.ms-crm-InlineEditLabel img:first-child
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
text-align: right !important;
<% } else { %>
float: left;
<% } %>
display: inline-block;
<% if (CrmStyles.IsTextWrapEnabled) { %>
width: 16px;
height: 16px;
line-height: 16px;
<% } %>
}

<% if (this.IsVisualRefreshEnabled) { %>
.ms-crm-FormSectionNoBorder SPAN.ms-crm-InlineEditLabelText:after,
DIV#notescontrol_c SPAN.ms-crm-InlineEditLabelText:after
{
background-image:none !important;
}
<% } %>

.ms-crm-InlineEditLabelText:empty:after,
.ms-crm-InlineEditLabel span:first-child:empty:after{
<% if (CrmStyles.IsTextWrapEnabled) { %>
display:none;
<% } %>
}

.ms-crm-InlineEditLabelText:after,
.ms-crm-InlineEditLabel span:first-child:after
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
height:16px;
content: "";
position: absolute;
bottom: 0;
width: 15px;

<% if (CrmStyles.IsRightToLeft) { %>
text-align: right !important;
left: 0px;
<% } else { %>
right:0px;
<% } %>

<% if (this.IsVisualRefreshEnabled) { %>
width:100%;
left:0;
right:0;
top:32px;
background-image: linear-gradient(to bottom, rgba(255,255,255,0) 25%, rgba(255,255,255, 1) 100%);
<% } else { %>
background: rgba(255, 255, 255, 0.25);

background: -moz-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
<% if (CrmStyles.IsRightToLeft) { %>
left,
right,
<% } else { %>
right,
left,
<%} %>
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -ms-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#FFFFFF',
endColorstr='#40FFFFFF',
GradientType=1);
<% } else { %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);
<%} %>

background: linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);
<% } %>
<% } %>
}

.ms-crm-InlineEditLabel .ms-crm-Inline-RequiredLevel
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.ms-crm-Inline-Value.ms-crm-HeaderTile
{
color: #000000;
<% if (CrmStyles.IsRightToLeft) { %>
margin: 0px 0px 0 6px;
<% } else { %>
margin: 0px 6px 0 0px;
<% } %>
padding: 0;
font-size: 15px;
<% if (CrmStyles.IsTextWrapEnabled) { %>
max-height: 32px;
<% } else { %>
height: 20px;
<% } %>
overflow: hidden;
}

.ms-crm-Inline-Value.ms-crm-HeaderTile .ms-crm-Lookup-Item-Read img.ms-crm-Lookup-Item
{
display:none;
}

.ms-crm-Inline-Value.ms-crm-HeaderTile .ms-crm-Lookup-Item-Read
{
display: inline-block;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile .Lookup_RenderButton_td img
{
background-color: #FFFFFF;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile
{
margin: 1px 6px 0 2px;
margin: 2px 7px 0 2px\9;
*margin: 2px 6px 0 2px\9;
}

:root .ms-crm-Inline-Edit.ms-crm-HeaderTile
{
margin: 1px 7px 0 2px \0/IE9;
}

.datetime .ms-crm-Inline-Edit.ms-crm-HeaderTile
{
margin: -1px 2px 0px 2px;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile.ms-crm-Inline-Lookup
{
<% if (CrmStyles.IsRightToLeft) { %>
margin: -2px 3px 0 1px;
<% } else { %>
margin: -2px 1px 0 3px;
<% } %>
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile.ms-crm-Inline-OptionSet
{
margin: 0px 2px 0 2px;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile select.ms-crm-SelectBox
{
margin: 0;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile input.ms-crm-InlineInput
{
padding-top: 2px;
padding-top: 1px \0/;
padding-bottom: 2px;
border: none;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile input.ms-crm-InlineInput.ms-crm-InlineLookupEdit
{
border: 1px solid #CCCCCC;
padding: 3px 2px 2px 2px;
}

.ms-crm-Inline-Value.ms-crm-HeaderTile.ms-crm-Inline-HasError,
.ms-crm-Inline-Edit.ms-crm-HeaderTile.ms-crm-Inline-HasError,
.ms-crm-Inline-DynamicGutter .ms-crm-Inline-Value.ms-crm-Inline-HasError,
.ms-crm-Inline-DynamicGutter .ms-crm-Inline-Edit.ms-crm-Inline-HasError,
.ms-crm-Inline-DynamicGutter .ms-crm-Inline-Value.ms-crm-Inline-Locked,
.refresh-form-footer .ms-crm-Inline-Value.ms-crm-Inline-Locked,
.ms-crm-Inline-Value.ms-crm-HeaderTile.ms-crm-Inline-Locked
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 16px;
<% } else { %>
margin-left: 16px;
<% } %>
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile.ms-crm-Inline-Currency.ms-crm-Inline-HasError,
.datetime .ms-crm-Inline-Edit.ms-crm-HeaderTile.ms-crm-Inline-HasError
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 23px;
<% } else { %>
margin-left: 23px;
<% } %>
}

.ms-crm-HeaderTileLabel
{
margin: 0px;
font-size: 12px;
color: #444444;
}

.ms-crm-HeaderTileElement .ms-crm-Field-Data-Print {

<% if (CrmStyles.IsTextWrapEnabled) { %>
margin-top:7px;
height: 32px;
max-height:48px;
<% } else { %>
padding-bottom: 3px;
<% } %>
}

.ms-crm-HeaderTileElement .ms-crm-ReadField-Normal {
<% if (CrmStyles.IsTextWrapEnabled) { %>
padding-bottom: 2px;
height:16px;
padding-top: 0px;
<% } else { %>
padding-top: 2px;
<% } %>
position:relative;
}

.ms-crm-HeaderTilesWrapperElement
{
<% if (!(this.IsVisualRefreshEnabled) && !Microsoft.Crm.Application.Utility.Util.IsForOutlookClient())
{ %>
position:fixed;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<% } %>
<% } %>
z-index:1;
}

.ms-crm-HeaderTilesWrapperElement .ms-crm-HeaderTitleShowLabel
{
margin-top : 20px;
}

.ms-crm-Inline-Edit input.ms-crm-InlineInput
{
border: 1px solid #CCCCCC;
margin: 0;
}

.mscrm-pbleditor .highContrast textarea.ms-crm-InlineInput,
.mscrm-pbleditor .highContrast .ms-crm-Inline-Edit input.ms-crm-InlineInput
{
<% if (Request.Browser.Browser == "Firefox") { %>
border:auto;
<% } %>
}

.ms-crm-InlineInput::-ms-clear
{
display: none;
}

.ms-crm-Inline-Edit select.ms-crm-SelectBox
{
font-size: 12px;
border: 1px solid #CCCCCC;
margin: 1px 0 0 0;
width: 100%;


<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 1px;
margin-left: 2px \0/;
<% } else { %>
margin-left: 1px;
margin-left: 2px \0/;
<% } %>
}

.ms-crm-Inline-EmptyValue
{
<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>
}

.ms-crm-Inline-EmptyValue
{
font-size: 12px;
}

.processControlContainer .ms-crm-Inline-EmptyValue , .processControlContainer SPAN.ms-crm-Lookup-Item
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
}

.ms-crm-Inline-NoValue
{
border-top: 0.6px dashed #828181;
position: relative;
top: 10px;
border-width: 1px;
}

#effectivitycalendar .ms-crm-Inline-NoValue
{
border:none;
}

.ms-crm-HeaderTileElement .ms-crm-Inline-EmptyValue
{
font-style: normal;
color: #444444;
}

.processStepValue .ms-crm-Inline-EmptyValue
{
text-transform: lowercase;
<% if (CrmStyles.AllowFontStyling) { %>
font-style: italic;
<% } %>
}

.disabled .processStepValue .ms-crm-Inline-EmptyValue,
.processStepValue .deactivated .ms-crm-Inline-EmptyValue
{
color: #b1b1b1;
font-style: normal;
}

.processStepValue .ntext
{
overflow: inherit;
height: auto;
}

.ms-crm-Inline-EditHintState
{
border-width: 1px;
border-style: solid;
border-color: #ccc;
}

.ms-crm-Inline-toggleclickState
{
border: 1px solid #CCCCCC;
background-color: #FFFFFF;
}

.ms-crm-Inline-Edit-SubGrid-Cell-Indentation
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 12px !important;
<% } else { %>
padding-left : 12px !important;
<% } %>
}

.ms-crm-Inline-Validation
{
position: fixed;
z-index: 1500;
background-color: #FFFFFF;
border: 1px solid;
border-color: #D6D6D6;
width: 300px;
padding-top: 0px;
padding-bottom: 2px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
padding-left: 2px;
<% } else { %>
padding-left: 5px;
padding-right: 2px;
<% } %>
font-size:12px;
color:#262626;
}

.ms-crm-Inline-WarningIcon, .ms-crm-Inline-LockIcon, .ms-crm-LockIcon-quickform
{
background: transparent none;
margin: 0;
padding: 0;
position: absolute;
z-index: 10;
}

.ms-crm-Inline-WarningIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
bottom:4px;
right:1px;
<% } else { %>
top: 3px;
<% } %>
height: 16px;
}

.processStepValue .ms-crm-Inline-WarningIcon
{
bottom: -1px;
}

.ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
right: -5px;
<% } else { %>
left: -5px;
<% } %>
top: 3px;
}

#crmFormFooter .ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 5px;
<% } else { %>
left: 5px;
<% } %>
top: 3px;
}

#quotedetailsGrid .ms-crm-Inline-LockIcon,
#invoicedetailsGrid .ms-crm-Inline-LockIcon,
#opportunityproductsGrid .ms-crm-Inline-LockIcon,
#salesorderdetailsGrid .ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
right: -5px !important;
<% } else { %>
left: -5px !important;
<% } %>
}

#footer_statuscode .ms-crm-Inline-LockIcon {
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

.Totals-Section .ms-crm-Inline-LockIcon {
<% if (CrmStyles.IsRightToLeft) { %>
right: 5px;
<% } else { %>
left: 5px;
<% } %>
}

#accountcquickform_name .ms-crm-Inline-LockIcon,
#contactcquickform_fullname .ms-crm-Inline-LockIcon
{
top: 6px;
}

.processStepValue .ms-crm-Inline-LockIcon
{
bottom: 0px;
}

.ms-crm-HeaderTileElement .ms-crm-Inline-WarningIcon
{
bottom: 0px;
}

.ms-crm-HeaderTileElement .ms-crm-Inline-LockIcon
{
bottom: 2px;
top:auto;
}

.ms-crm-Inline-ErrorArrowIcon
{
position: fixed;
z-index: 1500;
height :11px;
width : 12px;
background-color: transparent;
margin-top: 4px;
}

.ms-crm-VerticalFlip
{
<%= FlipImage("v") %>
}

.ms-crm-VerticalFlipMargin
{
margin-top: -1px;
}

.ms-crm-Inline-ErrorArrowIcon img
{
display: block;
}



@media screen and (max-width: 769px)
{
.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTileElement.ms-crm-HeaderTileElementPosition1,
.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTileElement.ms-crm-HeaderTileElementPosition2,
.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTileElement.ms-crm-HeaderTileElementPosition3,
.ms-crm-HeaderTileTabletContainer .headertile-collapse-button
{
display: none;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement
{
width: 560px;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement.collapsed
{
width: 180px;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement
{
width: 147px;
}
}

@media screen and (min-width: 769px) and (max-width: 1025px)
{
.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTileElement.ms-crm-HeaderTileElementPosition3,
.ms-crm-HeaderTileTabletContainer .headertile-collapse-button
{
display: none;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement
{
width: 570px;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement.collapsed
{
width: 400px;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement
{
width: 395px;
}
}

@media screen and (max-width: 1025px)
{
.ms-crm-HeaderTileTabletContainer .collapsed .headertile-collapse-button
{
display: none;
}

.ms-crm-HeaderTileTabletContainer .expanded .headertile-collapse-button
{
display: block;
}

.ms-crm-HeaderTileTabletContainer .collapsed .headertile-expand-button
{
display: block;
}

.ms-crm-HeaderTileTabletContainer .expanded .headertile-expand-button
{
display: none;
}
}

@media screen and (min-width: 1025px)
{
.ms-crm-HeaderTileTabletContainer .headertile-collapse-button,
.ms-crm-HeaderTileTabletContainer .headertile-expand-button
{
display: none;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement
{
width: 600px;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement
{
width: 519px;
}
}

@media screen and (min-width: 1536px)
{
.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement
{
width: 950px;
}
}

.ms-crm-HeaderTileTabletContainer
{
overflow: hidden;
}

.ms-crm-HeaderTileTabletContainer .expanded .ms-crm-HeaderTileElement.ms-crm-HeaderTileElementPosition1,
.ms-crm-HeaderTileTabletContainer .expanded .ms-crm-HeaderTileElement.ms-crm-HeaderTileElementPosition2,
.ms-crm-HeaderTileTabletContainer .expanded .ms-crm-HeaderTileElement.ms-crm-HeaderTileElementPosition3
{
display: block;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement.expanded
{
width: 519px;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement
{
min-width: 0px;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement .ms-crm-HeaderTilesActionsContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement .headertile-expand-button,
.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement .headertile-collapse-button
{
background: #F4D89D;
color: black;
width: 23px;
padding-top: 12px;
height: 30px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
margin-right: 4px;
<% } else { %>
padding-left: 5px;
margin-left: 4px;
<% } %>
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesWrapperLayoutElement
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
position: static;
}

.ms-crm-HeaderTileTabletContainer .ms-crm-HeaderTilesTitleWrapperElement
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}


.ms-crm-HeaderTileElement
{
border: solid;
display: inline-block;
min-width: 120px;
max-width: 120px;
overflow: hidden;
vertical-align: top;
float: left;
<% if (CrmStyles.IsTextWrapEnabled) { %>
height: 66px;
<% } else { %>
height: 42px;
<% } %>
<% if (CrmStyles.IsRightToLeft) { %>
border-width: 0px 3px 0px 0px;
<% } else { %>
border-width: 0px 0px 0px 3px;
<% } %>
}

.ms-crm-HeaderTileElement.ms-crm-Field-DatePickerTimePicker-Print{
max-width: 210px;
}

.ms-crm-HeaderTileElement:hover .ms-crm-HeaderTileLabel,
.ms-crm-HeaderTileElement:hover .ms-crm-Inline-Value,
.ms-crm-HeaderTileElement:hover .ms-crm-Inline-Value.ms-crm-Inline-Lookup span.ms-crm-Lookup-Item-Read
{
color: #444444;
}

.ms-crm-HeaderTileElement.noScroll
{
overflow: visible;
}

.ms-crm-HeaderTilesWrapperLayoutElement
{
display: inline-block;
height: 42px;
vertical-align: bottom;
}

div.ms-crm-Form-Breadrumb.ms-crm-HeaderTilesTitleWrapperElement
{
padding-bottom: 0px;
}

.inEdit .ms-crm-Inline-Chrome textarea {
position: relative;
width: 195px;
z-index: 10;
height: 150px;
overflow: auto;
word-wrap: break-word;
}

.ie7 .inEdit .ms-crm-Inline-Chrome textarea {
width: 135px;
}

.processStepValue .ms-crm-Inline-Value {
white-space: nowrap;
}

.processStep.emptyValue .ms-crm-Inline-Value {
<% if (CrmStyles.AllowFontStyling) { %>
font-style: italic;
<% } %>
font-weight: normal;
}

.processStep.emptyValue .bit.locked .ms-crm-Inline-Value,
.readonly .processStep.emptyValue .bit .ms-crm-Inline-Value {
color: #444;
font-style: normal;
}


.ms-crm-Inline-Edit.ms-crm-Inline-OptionSet.ms-crm-Inline-HideByZeroHeight,
.ms-crm-Inline-HideByZeroHeight {
height: 0;
overflow: hidden;
}


select.ms-crm-Inline-HideByZeroHeight-Ie7 {
*height: 0;
}


.ms-crm-InlineEditLabel div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% } else { %>
right:0px;
<%} %>
}

.ms-crm-InlineEditLabel div.ms-crm-Inline-GradientMask.withReqIcon {
<% if (CrmStyles.IsRightToLeft) { %>
left:10px;
<% } else { %>
right:10px;
<%} %>
}

.ms-crm-InlineEditLabel div.ms-crm-InlineField.withReqIcon {
<% if (CrmStyles.IsRightToLeft) { %>
left:10px;
<% } else { %>
right:10px;
<%} %>
}

.ms-crm-InlineEditLabel.ms-crm-HeaderTileLabel .ms-crm-Inline-RequiredLevel {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:-2px;
<% } else { %>
margin-left:-2px;
<%} %>
}


.ms-crm-InlineEditLabel.ms-crm-HeaderTileLabel div.ms-crm-Inline-GradientMask.withReqIcon {
<% if (CrmStyles.IsRightToLeft) { %>
left:8px;
<% } else { %>
right:8px;
<%} %>
}

img.rollup.refreshImage
{
border:0px;
display:block;
padding-top:1px;
}

.highContrast img.rollup.refreshImage
{
border:0px;
display:block;
padding-top:0px;
}

img.calculateImage
{
height:16px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:4px;
<% } else { %>
padding-right:4px;
<%} %>
padding-bottom:2px;
vertical-align:middle;
}

div.ms-crm-Inline-EditHintState div.rollup.recalculate
{
display: inline;
}

div.rollup.recalculate
{
position: absolute;
z-index: 2;
bottom: 0px;
top: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 0px;
<% } else { %>
border-left: 0px;
<%} %>
border-width: 1px;
padding: 2px;
cursor: pointer;
}

.hideControl
{
display: none;
}

.tablet .rollup.recalculate
{
display: inline-block;
background-color: transparent;
border: none;
position: relative;
padding: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 16px;
<% } else { %>
margin-left: 14px;
<%} %>
margin-top:-5px;
}

.tablet .ms-crm-HeaderTile .rollup.recalculate
{
display: inline;
background-color: #F3F1F1;
position: absolute;
padding: 2px;
padding-top: 0px;
border-style: solid;
border-width: 1px;
border-color: #C6C6C6;
padding-left:1px;
}

.ms-crm-HeaderTile .rollup.recalculate
{
height:18px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:1px;
padding-right:3px;
border-right-style: solid;
border-right-color: #c6c6c6;
<% } else { %>
margin-right:1px;
border-left-style: solid;
border-left-color: #c6c6c6;
<%} %>
margin-top:-1px;
padding-top: 0px;
}

.ms-crm-HeaderTile a.rolluprefreshPostsLinkSpinningWheel
{
margin:0px;
}

a.rolluprefreshPostsLinkSpinningWheel
{
background-color:transparent;
padding-bottom:4px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:5px;
<% } else { %>
margin-right:5px;
<%} %>
}

.tablet a.rolluprefreshPostsLinkSpinningWheel
{
padding-bottom:0px;
}

a.rolluprefreshPostsLink
{
display:block;
height:13px;
width:11px;
overflow:hidden;
float:right;
border:0;
margin-top:2px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:7px;
margin-right:2px;
<% } else { %>
margin-right:7px;
margin-left:2px;
<%} %>
}

.highContrast a.rolluprefreshPostsLink
{
overflow:visible;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:4px;
<% } else { %>
margin-right:9px;
<%} %>
}

.highContrast .ms-crm-HeaderTile a.rolluprefreshPostsLink
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:0px;
margin-right:4px;
<% } else { %>
margin-right:5px;
margin-left:0px;
<%} %>
}

.tablet .highContrast a.rolluprefreshPostsLink
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:4px;
<% } else { %>
margin-left:0px;
<%} %>
}

.highContrast a.rolluprefreshPostsLink:hover img
{
margin-top:0px;
}

a.rolluprefreshPostsLink:hover img , a.rolluprefreshPostsLink.hover img
{
margin-top: -13px;
}

a.rolluprefreshPostsLink:focus img
{
margin-top: -13px;
}

div.rollup.Inline-value-alignment
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:0px !important;
<% } else { %>
padding-left:0px !important;
<%} %>
padding-bottom:0px;
height:19px;
}

div.rollup.CommandBarOverlayFlyOut
{
width: 100%;
height: 100%;
z-index: 1001;
position: absolute;
padding:1px;
}

.ms-crm-HeaderTile a.rolluprefreshPostsLink
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:2px;
<% } else { %>
margin-right:3px;
<%} %>
margin-top:4px;
}

div.ms-crm-Inline-EditIcon,
div.recalculate
{
position: absolute;
z-index: 2;
bottom: 0px;
top: 0px;
display: none;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<%} %>
border-width: 1px;
border-style: solid;
background-color: #FFFFFF;
}

div.ms-crm-Inline-MultiLookupEditIcon
{
border-bottom-color: #FFF;
<% if (CrmStyles.IsRightToLeft) { %>
box-shadow: 0px 2px 2px #FFF;
border-left-color: #FFF;
<% } else { %>
box-shadow: 2px 2px 2px #FFF;
border-right-color: #FFF;
<%} %>
}

img.ms-crm-EditLookup-Image
{
border-width: 0px;
vertical-align: middle;
margin-top: 1px;
}

img.ms-crm-EditMultiLookup-Image
{
vertical-align: middle;
margin-bottom: 1px;
box-shadow: 1px 1px 2px #CCC;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 2px 0px 1px 1px;
border-width: 0px 0px 1px 1px;
<% } else { %>
padding: 2px 1px 1px 0px;
border-width: 0px 1px 1px 0px;
<%} %>
}

img.ms-crm-EditLookup-Process-Image
{
border-width: 0px;
vertical-align: top;
margin-top: 0px;
}

.ms-crm-Inline-Value.ms-crm-Input-Container div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
left: 1px;
<% } else { %>
right: 1px;
<%} %>
}

.ms-crm-Inline-Value div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<%} %>
}

.ms-crm-InlineEditLabel div.ms-crm-Inline-GradientMask,
.ms-crm-Inline-Value div.ms-crm-Inline-GradientMask {
<% if (!CrmStyles.IsTextWrapEnabled) { %>
position: absolute;
width: 15px;
height: 20px;
z-index: 1;
top: 1px;
background: rgba(255, 255, 255, 0.25);

background: -moz-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
<% if (CrmStyles.IsRightToLeft) { %>
left,
right,
<% } else { %>
right,
left,
<%} %>
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);
background: -ms-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);



<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#FFFFFF',
endColorstr='#40FFFFFF',
GradientType=1);
<% } else { %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);
<%} %>

background: linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);
<%} %>
}

.ms-crm-HeaderTileElement .ms-crm-Inline-Value.ms-crm-HeaderTile.ms-crm-Inline-NoValue div.ms-crm-Inline-GradientMask,
.ms-crm-Inline-Value.ms-crm-Inline-NoValue div.ms-crm-Inline-GradientMask {
width: 0px;
}

.ms-crm-InlineEditLabel div.ms-crm-Inline-GradientMask {
position: relative;
top: 0;
display: inline-block;
background: none;
line-height: 0;
height: 1px;
width: 1px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<%} %>
}

.ms-crm-InlineEditLabel div.ms-crm-Inline-GradientMask:after {
position: absolute;
display: block;
content: '';
width: 15px;
height: 20px;
bottom: 100%;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0;
<% } else { %>
right: 0;
<%} %>
}

background: rgba(255, 255, 255, 0.25);

background: -moz-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
<% if (CrmStyles.IsRightToLeft) { %>
left,
right,
<% } else { %>
right,
left,
<%} %>
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);
background: -ms-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);



<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#FFFFFF',
endColorstr='#40FFFFFF',
GradientType=1);
<% } else { %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);
<%} %>

background: linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);
}

.money .ms-crm-Inline-Value div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
background: -moz-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
right,
left,
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -ms-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);

right: 23px;
right: auto;
<% } %>
}

.money .ms-crm-Inline-Value.ms-crm-Inline-EditHintState div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
right: 23px;
right: auto;
<% } %>
}

.money .ms-crm-Inline-Value.ms-crm-Inline-EmptyValue div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
background: -moz-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
left,
right,
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -ms-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);

right: auto;
left: 0px;
<% } %>
}

.money .ms-crm-Inline-Value.ms-crm-Inline-EmptyValue.ms-crm-Inline-EditHintState div.ms-crm-Inline-GradientMask
{
<% if (CrmStyles.IsRightToLeft) { %>
right: auto;
left: 0px;
<% } %>
}

.ms-crm-HeaderTile.ms-crm-Inline-Value.ms-crm-Inline-Lookup .ms-crm-Inline-EditIcon,
.ms-crm-HeaderTile.ms-crm-Inline-Value.ms-crm-Inline-Lookup .recalculate
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 2px;
<% } else { %>
right: 2px;
<%} %>
top: -3px;
}

.ms-crm-HeaderTileElement .money .ms-crm-Inline-Value.ms-crm-HeaderTile div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
background: -moz-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
right,
left,
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -ms-linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: linear-gradient(
right,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#03FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);

right: 0px;
left: auto;
<% } %>
}

.ms-crm-HeaderTileElement.ms-crm-Inline-EditHintState .money .ms-crm-Inline-Value.ms-crm-HeaderTile div.ms-crm-Inline-GradientMask {
<% if (CrmStyles.IsRightToLeft) { %>
background: -moz-linear-gradient(
right,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: -webkit-gradient(
linear,
right,
left,
color-stop(25%, rgb(243, 241, 241)),
color-stop(100%, rgba(243, 241, 241, 0)));

background: -webkit-linear-gradient(
right,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: -o-linear-gradient(
right,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: -ms-linear-gradient(
right,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: linear-gradient(
right,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#03E9AC30',
endColorstr='#E9AC30',
GradientType=1);

right: 0px;
<% } %>
}

.ms-crm-HeaderTileElement .money .ms-crm-Inline-Value.ms-crm-HeaderTile.ms-crm-Inline-EmptyValue div.ms-crm-Inline-GradientMask {
background: rgba(255, 255, 255, 0.15);

<% if (CrmStyles.IsRightToLeft) { %>
background: -moz-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
left,
right,
color-stop(25%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: -ms-linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

background: linear-gradient(
left,
rgb(255, 255, 255) 25%,
rgba(255, 255, 255, 0) 100%);

filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#03FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);

right: 0px;
<% } %>
}

.ms-crm-HeaderTileElement.ms-crm-Inline-EditHintState .money .ms-crm-Inline-Value.ms-crm-HeaderTile.ms-crm-Inline-EmptyValue div.ms-crm-Inline-GradientMask {
background: rgba(243, 241, 241, 0.15);

<% if (CrmStyles.IsRightToLeft) { %>
background: -moz-linear-gradient(
left,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: -webkit-gradient(
linear,
left,
right,
color-stop(25%, rgb(243, 241, 241)),
color-stop(100%, rgba(243, 241, 241, 0)));

background: -webkit-linear-gradient(
left,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: -o-linear-gradient(
left,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: -ms-linear-gradient(
left,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

background: linear-gradient(
left,
rgb(243, 241, 241) 25%,
rgba(243, 241, 241, 0) 100%);

filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#03C07E03',
endColorstr='#C07E03',
GradientType=1);

right: 0px;
<% } %>
}

.ms-crm-HeaderTileElement .ms-crm-Inline-Value.ms-crm-HeaderTile div.ms-crm-Inline-GradientMask {
position: absolute;
width: 40px;
height: 24px;
z-index: 1;
top: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<%} %>
}

.ms-crm-HeaderTileElement .ms-crm-Inline-Value.ms-crm-HeaderTile div.ms-crm-Inline-GradientMask,
.ms-crm-HeaderTileElement .ms-crm-InlineEditLabel div.ms-crm-Inline-GradientMask {
background: rgba(255, 255, 255, 0.15);

background: -moz-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 15%,
rgba(255, 255, 255, 0) 100%);

background: -webkit-gradient(
linear,
<% if (CrmStyles.IsRightToLeft) { %>
left,
right,
<% } else { %>
right,
left,
<%} %>
color-stop(15%, rgb(255, 255, 255)),
color-stop(100%, rgba(255, 255, 255, 0)));

background: -webkit-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 15%,
rgba(255, 255, 255, 0) 100%);

background: -o-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 15%,
rgba(255, 255, 255, 0) 100%);

background: -ms-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 15%,
rgba(255, 255, 255, 0) 100%);



<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){%>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#FFFFFF',
endColorstr='#03FFFFFF',
GradientType=1);
<% } else { %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#03FFFFFF',
endColorstr='#FFFFFF',
GradientType=1);
<%} %>

background: linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(255, 255, 255) 15%,
rgba(255, 255, 255, 0) 100%);
}

.ms-crm-HeaderTileElement img.ms-crm-ImageStrip-Recalculate_16
{
padding-bottom:4px;
vertical-align: middle;
}

.ms-crm-InlineDateTime {
table-layout: fixed;
width: 100%;
border-collapse: collapse;
}

.ms-crm-InlineDateTime-HiddenCell {
display: none;
}

.ms-crm-InlineDateTime-IconCell, .ms-crm-InlineDuration-IconCell {
border: 1px solid #CCCCCC;
font-size:0;
line-height:0;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile .ms-crm-InlineDateTime-IconCell
{
background-color: #FFFFFF;
}

.ms-crm-InlineDateTime-Icon, .ms-crm-InlineDuration-Icon {
border: 1px solid transparent;
}

.ms-crm-InlineDateTime-Icon:hover, .ms-crm-InlineDuration-Icon:hover,
.ms-crm-InlineDateTime-Icon:focus, .ms-crm-InlineDuration-Icon:focus {
border: 1px solid #859CC2;
}

td#tdPrv:focus , td#tdCaption:focus , td#tdNxt:focus , table.ms-crm-MiniCal td:focus{
background-color: #B1D6F0 !important;
}

.ms-crm-InlineDateTime-TimeCell {
border: 1px solid #CCCCCC;
}

.ms-crm-InlineDuration-InputTable {
table-layout: fixed;
border-collapse: collapse;
width: 100%;
}

.ms-crm-InlineDuration-Icon {
cursor: pointer;
}

.ms-crm-InlineDuration-InputTable .ms-crm-Select-Input-Container,
.ms-crm-InlineDuration-InputTable .ms-crm-InlineDuration-IconCell {
border: 1px solid #CCCCCC;
}

.ms-crm-InlineDateTime .ms-crm-Select-Input-Container,
.ms-crm-InlineDateTime .ms-crm-InlineDuration-IconCell {
border: 0;
}

.ms-crm-Select-Input-Container
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 1px;
<% } %>
}

.ms-crm-InlineDateTime .ms-crm-InlineDuration-InputTable .ms-crm-InlineDuration-IconCell {
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid #CCCCCC;
<% } else { %>
border-left: 1px solid #CCCCCC;
<% } %>
}

.ms-crm-Inline-OptionSet-AutoOpen {
position: relative;
z-index: 10000;
}

.won-lost-inline-edit-control .ms-crm-Inline-Edit INPUT.ms-crm-Input,
.won-lost-inline-edit-control .ms-crm-Inline-Edit INPUT.ms-crm-InlineInput,
.won-lost-inline-edit-control textarea.ms-crm-InlineInput,
.ms-crm-HeaderTile.ms-crm-Inline-Value {
font-weight:500;
}

.ms-crm-InlineDateTime-TimeCell INPUT.ms-crm-SelectBox
{
<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>
}

.ms-crm-InlineTimerControl
{
width: auto;
vertical-align:middle !important;
}

.ms-crm-InlineTimerControl-Icon
{
width:16px;
height:16px;
margin-top:4px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:4px;
float:right;
<% } else { %>
margin-right:4px;
float:left;
<% }%>
}

DIV.ms-crm-InlineTimerControl-MainDiv
{
height:100%;
position:relative;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:-3px;
padding-right:3px;
<% } else { %>
margin-left:-3px;
padding-left:3px;
<% }%>
}

.ms-crm-InlineTimerControl-InnerDiv
{
position:absolute;
top:25%;
<% if (CrmStyles.IsRightToLeft) { %>
left:0%;
right:1%;
<% } else { %>
left:1%;
right:0%;
<% }%>
}

.ms-crm-InlineTimerControl-Time
{
font-family: <%= WebUtility.GetFontResourceForStyle("TimerControl.css.aspx.Time.font_family") %>;
font-weight:600;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
display:block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:2px;
<% } else { %>
margin-right:2px;
<% }%>
}

.TimerControlTimerRow
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.18px.font_size") %>;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
color:#000000;
}
.TimerControlTimerRow-Warning
{
color:#f09b21;
}
.TimerControlTimerRow-Expired
{
color:#ff0000;
}
.TimerControlTimerRow-Failed
{
color:#ff0000;
}
.TimerControlTimerRow-Succeeded
{
color:#5c9559;
}

.TimerControlLabel
{
color:#666666 !important;
white-space:nowrap;
overflow:hidden;
}





img.recnav-leftcap,
img.recnav-rightcap
{
height : 21px;
width : 2px;

<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

img.recnav-dropdown
{
height : 21px;
width : 15px;
}

span.recnav-dropdown
{
width : 100px;
height : 19px;
margin-bottom : 4px;
max-width: 142px;
}

img.recnav-dropdownfiller-disabled,
img.recnav-dropdownfiller-rest,
span.recnav-dropdown-rest
{

color : #23272c;
}

span.recnav-dropdown-disabled
{

color: #999999;
}

span.recnav-dropdown-hover,
img.recnav-dropdownfiller-hover
{

color : #23272c;
}
span.recnav-dropdown-selected,
img.recnav-dropdownfiller-selected
{

color : #23272c;
}
span.recnav-dropdown
{
overflow : hidden;
text-overflow : ellipsis;

height : 21px;
width : 100px;
display: inline-block;

vertical-align : top;

line-height : 21px;

<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
margin-right : 5px;
<% } else { %>
margin-left : 5px;
<% } %>

font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
}
img.recnav-dropdown-filler
{
height : 21px;
width : 5px;
}

span.ms-crm-Form-RecNav
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 7px;
<% } else { %>
right: 7px;
<% } %>
}
span.ms-crm-Form-RecNav.recordSetControlProxy
{
position: static;
line-height: 28px;
}

.recnav-up,
.recnav-down
{
display: inline-block;
}
div.recnav-down
{
position: relative;
margin-left: -5px;
}
a.recnav-down
{
margin-left: -1px;
}
a.recnav-up,
a.recnav-down,
a.recnav-dropdown
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
display: inline-block;
vertical-align: top;
text-align: left;
height: 21px;
}
a.recnav-dropdown
{
border-width: 1px;
border-style: solid;
}
a.recnav-up,
a.recnav-down
{
border-top-width: 1px;
border-top-style: solid;
border-bottom-width: 1px;
border-bottom-style: solid;

<% if (CrmStyles.IsRightToLeft) { %>
border-left-width: 1px;
border-left-style: solid;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
<% } %>
}
#contextualActionBar
{
position: absolute;
top: 0;
<% if (CrmStyles.IsRightToLeft) { %>
left: 8px;
<% } else { %>
right: 0px;
<% } %>
}
.recordSetControlProxy > .recnav-up,
.recordSetControlProxy > .recnav-down
{
border: 0;
height: auto;
}
#popoutButton,#hierarchyButton,#closeButton
{
vertical-align: top;
font-size: 0;
}
#popoutButton a ,#closeButton a
{
display: inline-block;
}
.contextualAction
{
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 1px;
<% } else { %>
margin-left: 1px;
<% } %>
}


.ms-crm-InlineMultiPicklist
{
display:block;
}

.ms-crm-InlineMultiPicklist INPUT.ms-crm-InlineMultiPicklist-Checkbox
{
width: auto;
}

.ms-crm-InlineMultiPicklist .ms-crm-selectedmultiboxitem
{
width:auto;
background-color:#eeeeee;
margin-left:2px;
margin-right:2px;
}

.ms-crm-InlineMultiPicklist nobr
{
display: block;
height: 24px;
}

.ms-crm-InlineMultiPicklist .ms-crm-InlineMultiPicklist-Checkbox
{
vertical-align: middle;
height:24px;
padding:0px;
<% if (CrmStyles.IsRightToLeft) { %>
margin:0px 8px 0px 0px;
<% } else { %>
margin:0px 0px 0px 8px;
<% } %>
}
.ms-crm-InlineMultiPicklist label
{
width: 80%;
<% if (CrmStyles.IsRightToLeft) { %>
margin:0px 8px 0px 0px;
<% } else { %>
margin:0px 0px 0px 8px;
<% } %>
display: inline-block;
white-space: nowrap;
overflow-x: hidden;
text-overflow: ellipsis;
color: #000000;
padding: 0px 0px 2px 0px;
vertical-align: middle;
}

.ms-crm-InlineMultiPicklist .ms-crm-selectedmultiboxitem .ms-crm-InlineMultiPicklist-Checkbox
{
<% if (CrmStyles.IsRightToLeft) { %>
margin:0px 6px 0px 0px;
<% } else { %>
margin:0px 0px 0px 6px;
<% } %>
}

.rollupError .ui-dialog-title
{
font-size: 35px;
padding-left: 30px;
max-width: 615px;
}

.rollupError div.rollupRuntimeError-dialog-icon
{
padding-left: 30px;
}

.rollupError .rollupRuntimeError-dialog-detail
{
position: absolute;
top: 15px;
left: 100px;
}

.closeButton
{
margin: 5px 6px 6px 5px;
width: 17px;
height: 17px;
overflow: hidden;
}

.EmailActivityMainContainer
{
width:100%;
border-bottom: 1px solid darkGrey;
margin-top: -8px;
}

.InteractionViewMainContainer
{
width:100%;
border-bottom: 1px solid darkGrey;
max-height: 300px;
overflow: auto;
}

.EmailActivityChildContainer
{
padding-top:20px;
width: 24%;
display: inline-table;
text-align: center;
padding-bottom:20px;
min-width:63px;
}

#EmailopendCount, #EmailClickedCount, #EmailAttachmentViewCount, #EmailRepliedCount
{
font-family: 'Segoe UI';
font-size: 24px;
color: #444444;
<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>
}

#EmailRecipentActivityViewContainer .EmailRecipientActivityImage
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
}

#EmailAttachmentViewImage.EmailRecipientActivityImage
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
}

#EmailRecipentActivityViewContainer .EmailRecipientActivityText
{
font-family:'Segoe UI';
font-size: 14px;
color: #444444;
}

.RecipientActivityMainContianer {
<%if( Request.Browser.MajorVersion <= 10 && Request.Browser.Browser == "IE" ){ %>
<% } else { %>
display: table;
<% } %>
width : 100%;
height: 100%;
position: relative;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
margin-top: 10px;
}

.interactionViewChildContainer {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width : 95%;
}

.interactionViewChildContainer .cell {
text-align: center;
min-width: 50px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
webkit-box-orient: vertical;
webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
}

.interactionViewChildContainer .wrapperContainer{
border-bottom: 1px solid #cccccc;
margin: 13px;
margin-bottom: 0px;
}

.interactionViewChildContainer .cell.left
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: center;
padding-right:10px;
<% } else { %>
text-align: left;
padding-left:10px;
<% } %>
-ms-flex: 0  0 10%;
flex: 0  0 10%;
}

.interactionViewChildContainer .halfContainer{
width: 50%;
<% if (CrmStyles.IsRightToLeft) { %>
border-left:1px solid #cccccc;
<% } else { %>
border-right:1px solid #cccccc;
<% } %>
}

.interactionViewChildContainer .top,.interactionViewChildContainer .bottom {
min-height:20.25px;
display:flex;
display: -ms-flexbox;
flex-direction:row;
}

.interactionViewChildContainer .bottom{
flex:1;
}

.RecipientActivityMainContianer .mapDiv{
height: 340px;
background:white;
position:relative;
top:0px;
}

span.mapSpanClass
{
margin: 10px;
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
}

span.mapSpanTitle
{
margin: 8px 10px;
display: inline-block;
}

.RecipientActivityMainContianer .interactionViewContainerOpenMap{
height: 370px;
width: 100%;
top: -10000px;
left: -10000px;
background: white;
position: absolute;
z-index:3;
box-shadow:10px 10px 5px #888888;
border: 1px solid black;
}

.interactionViewChildContainer .cell.right span.keyboardFocusClass:focus {
border: 2px dashed !important;
outline: none !important;
outline-offset: 1px !important;
}

.interactionViewChildContainer .cell.right a.keyboardFocusClass:focus {
border: 2px dashed !important;
outline: none !important;
outline-offset: 1px !important;
}

.closeButton.mapCloseButton{
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
margin-top: 9px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 10px;
<% } else { %>
margin-right: 10px;
<% } %>
}

.ee_anchorMapButton{
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
}

.ms-crm-ImageStrip-popout.mapPopoutButton{
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 3px;
<% } else { %>
margin-right: 3px;
<% } %>
}

.RecipientActivityMainContianer .triangle{
top: 340px;
left: 292px;
position: relative;
overflow:hidden;
width:100px;
height:100px;
}

.RecipientActivityMainContianer .triangle:after{
content: "";
position: absolute;
width: 32px;
height: 32px;
background: #fff;
-webkit-transform: rotate(45deg);
-ms-transform:rotate(45deg);
top: -25px;
left: 25px;
box-shadow: 17px 3px 22px -6px rgb(136, 136, 136);
border: 1px solid #0e0e0e;
}

#EmailEngagementParentcontainer
{
width: 100%;
border-collapse: collapse;
}

[name="emailengagementactions"] .ms-crm-Form-SectionBar {
display: none;
}

#EmailEngagementParentcontainer .ChildContainer
{
display: table;
margin-bottom: 10px;
}

#EmailEngagementParentcontainer .thumbnailImg
{
width: 50px;
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast .thumbnailImg
{
border: 1px solid #d1d1d1;
}

#EmailEngagementParentcontainer .activityText
{
display: table-cell;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
}

#EmailEngagementParentcontainer .activityLink
{
margin-top: 2px;
font-family:'Segoe UI';
}

#EmailEngagementParentcontainer .activityText p
{
font-family:'Segoe UI';
font-size:12px;
color:#000000;
font-weight: normal;
}

#EmailEngagementParentcontainer .emailActivityLink
{
display: block;
}

#EmailEngagementParentcontainer .activityLink a
{
font-family:'Segoe UI';
font-size:12px;
color:#0059B2;
<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>
margin-right:15px;
display: inline-block;
max-width: 120px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:15px;
margin-right:0px;
<% } else { %>
margin-right:15px;
margin-left:0px;
<% } %>
}

#EmailEngagementParentcontainer .icon
{
text-align: center;
width: 50px;
height: 50px;
vertical-align:middle;
display:table-cell;
}


#EmailEngagementParentcontainer #EmailEngagementActionsTitle #EmailEngagementActionsHeader
{
margin-bottom: 20px;
border-bottom: 1px solid #BBBBBB;
padding-bottom: 8px;
}

#emailrecipientactivitycontrol #EmailRecipientActivityTitle #EmailRecipientActivityHeader
{
border-bottom: 1px solid #BBBBBB;
padding-bottom: 8px;
margin-bottom: 5px;
}

#EmailEngagementParentcontainer #email_followed .thumbnailImg .icon
{
background-color:#42A447;
}

#EmailEngagementParentcontainer #email_cannot_be_followed .thumbnailImg .icon, #EmailEngagementParentcontainer #email_not_followed .thumbnailImg .icon, #EmailEngagementParentcontainer #email_cannot_be_followed_for_preference .thumbnailImg .icon
{
background-color:#E74C3C;
}

#EmailEngagementParentcontainer #reminderNotSet .thumbnailImg .icon
{
background-color:#CCCCCC;
}

#EmailEngagementParentcontainer #reminderSet .thumbnailImg .icon
{
background-color:#2594C1;
}

#EmailEngagementParentcontainer #reminderSetAndHasWarning .thumbnailImg .icon
{
background-color:#E74C3C;
}

#EmailEngagementParentcontainer #reminderMet .thumbnailImg .icon
{
background-color:#CCCCCC;
}

#EmailEngagementParentcontainer #delaySendNotSet .thumbnailImg .icon
{
background-color:#CCCCCC;
}

#EmailEngagementParentcontainer #delaySendNotSet_hassuggestion .thumbnailImg .icon
{
background-color:#2594C1;
}

#EmailEngagementParentcontainer #delaySendSet .thumbnailImg .icon
{
background-color:#42A447;
}

#EmailEngagementParentcontainer #emailSent .thumbnailImg .icon
{
background-color:#CCCCCC;
}

#EmailEngagementParentcontainer .emailLink-disabled
{
pointer-events: none;
cursor: default;
opacity: 0.6;
}

.interactionViewChildContainer .cell.right span
{
word-break: break-all;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}

.interactionViewChildContainer .cell.right
{
flex: 0 0 70%;
}

.interactionViewChildContainer:last-child .cell.right
{
padding-bottom: 20px;
}
.interactionViewChildContainer .LeftTextAlign
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}

.anchorForMapControl
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 10px;
<% } else { %>
margin-right: 10px;
<% } %>
}

.clsRecipientActivityHeader, .clsEmailEngagementActions{
font-family:"Segoe UI";
font-size:12px;
color:#444444;
font-weight:bold;
}

.interactionViewChildContainer .InteractionViewLink{
font-family:"Segoe UI";
font-size:12px;
color:#000000  !important;

<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>
}


#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #email_followed .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/activity_followed_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #email_followed .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/activity_followed_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #email_cannot_be_followed .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/do_not_prefer_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #email_cannot_be_followed .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/do_not_prefer_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #email_cannot_be_followed_for_preference .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/do_not_prefer_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #email_cannot_be_followed_for_preference .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/do_not_prefer_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #email_not_followed .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/do_not_prefer_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #email_not_followed .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/do_not_prefer_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #delaySendNotSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #delaySendNotSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #delaySendNotSet_hassuggestion .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #delaySendNotSet_hassuggestion .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #delaySendSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #delaySendSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #emailSent .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #emailSent .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/email_scheduled_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #reminderNotSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #reminderNotSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon.png');
}


#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #reminderSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #reminderSet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #reminderSetAndHasWarning .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #reminderSetAndHasWarning .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon.png');
}

#EmailEngagementParentcontainer.EmailEngagementActions-HighContrast #reminderMet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon_hc.png');
}

#EmailEngagementParentcontainer:not(.EmailEngagementActions-HighContrast) #reminderMet .thumbnailImg .icon:before
{
content: url('/_imgs/inlineedit/need_a_reminder_icon.png');
}





#EmailRecipentActivityViewContainer.EmailRecipientActivity-HighContrast #EmailopendImage:before
{
content: url('/_imgs/inlineedit/OpenEmail_32_hc.png');
}

#EmailRecipentActivityViewContainer:not(.EmailRecipientActivity-HighContrast) #EmailopendImage:before
{
content: url('/_imgs/inlineedit/OpenEmail_Icon_32.png');
}

#EmailRecipentActivityViewContainer.EmailRecipientActivity-HighContrast #EmailAttachmentViewImage:before
{
content: url('/_imgs/inlineedit/AttachmentViews_32_hc.png');
}

#EmailRecipentActivityViewContainer:not(.EmailRecipientActivity-HighContrast) #EmailAttachmentViewImage:before
{
content: url('/_imgs/inlineedit/AttachmentViews_32.png');
}

#EmailRecipentActivityViewContainer.EmailRecipientActivity-HighContrast #EmailClickedImage:before
{
content: url('/_imgs/inlineedit/LinksClicked_32_hc.png');
}

#EmailRecipentActivityViewContainer:not(.EmailRecipientActivity-HighContrast) #EmailClickedImage:before
{
content: url('/_imgs/inlineedit/LinksClicked_32.png');
}

#EmailRecipentActivityViewContainer.EmailRecipientActivity-HighContrast #EmailRepliedImage:before
{
content: url('/_imgs/inlineedit/RepliedEmail_32_hc.png');
}

#EmailRecipentActivityViewContainer:not(.EmailRecipientActivity-HighContrast) #EmailRepliedImage:before
{
content: url('/_imgs/inlineedit/RepliedEmail_32.png');
}



#EmailEngagementParentcontainer .activityText .emailEngagementHelpIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
cursor: pointer
}

#EmailEngagementParentcontainer #emailFollowUnfollow #email_cannot_be_followed
{
width: 98%;
}

#EmailEngagementParentcontainer #emailFollowUnfollow #email_cannot_be_followed_for_preference
{
width: 98%;
}


#cloud_attachments
{
border: 1px solid #C6C6C6;
border-bottom:none;
table-layout:fixed;
}
.ms-crm-cloudattachment-cell-div
{
display: flex;
flex-direction: row;
flex-wrap: wrap;
width:100%
}

.ms-crm-cloud-attachment {
margin-left: 10px;
margin-top: 5px;
margin-bottom: 5px;
margin-right: 10px;
vertical-align: middle;
display: flex;
line-height: 30px;
background: #eeeeee;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
padding-left: 15px;
<% } else { %>
padding-left: 10px;
padding-right: 15px;
<% } %>
font-size: 12px;
font-family: Segoe UI;
color: #000000;
}





.ms-crm-Inline-RecommendationIcon {
top: -12px;
position: absolute;
font-size: 20px;
font-weight: 400;
color: #0075DA;
}

.ms-crm-Inline-RecommendationIcon:hover,
.ms-crm-Inline-RecommendationIcon:focus
{
color: #000000;
}
.ms-crm-Inline-RecommendationIcon:before {
content: "\24D8";
position: relative;
top: 11px;
}

.ms-crm-Inline-RecommendationIcon:focus:before {
outline-color: #000000;
outline-width: 1px;
outline-style: dotted;
}
.ms-crm-Inline-RecommendationIcon .ms-crm-ImageStrip-inlineedit_alert {
display: none;
}

.ms-crm-Inline-Recommendation .ms-crm-Inline-RecommendationText {
font-weight: normal;
margin-top: 10px;
font-size: 12px;
line-height: 12px;
margin-bottom: 10px;
}

.ms-crm-Inline-Recommendation .ms-crm-Inline-RecommendationText.multipleRecommendation:last-child {
padding-bottom: 17px;
padding-top: 17px;
}
.ms-crm-Inline-Recommendation {
position: fixed;
z-index: 1500;
background-color: #ffffff;
border: 1px solid;
border-color: #D6D6D6;
width: 230px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
font-size: 12px;
font-weight: bold;
color: #444;
}

.ms-crm-Inline-Recommendation .ms-crm-Inline-RecommendationText.multipleRecommendation {
display: inline-block;
width: 70%;
position: relative;
top: 0%;
margin-bottom: 5px;
float: right;
}

.ms-crm-Inline-Recommendation .ms-crm-Inline-RecommendationApply {
background-image: none;
background-color: #0075DA;
border-color: #0075DA;
color: #ffffff;
width: 75px;
height: 28px;
font-size: 12px;
display: inline-block;
padding-bottom: 5px;
margin-bottom: 2px;
opacity: 0.85;
filter: alpha(opacity=85);
}

.ms-crm-Inline-multipleRecommendation {
width: 100%;
margin-bottom: 13px;
float: right;
}

.ms-crm-Inline-Recommendation .ms-crm-Inline-multipleRecommendation .ms-crm-Inline-RecommendationApply {
position: fixed;
margin-top: 10px;
margin-left: 13px;
display: inline-block;
}

.ms-crm-Inline-RecommendationDismiss {
border: 1px solid #000000;
background-color: #ffffff;
color: #000000;
background-image: none;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 15px;
<% } else { %>
margin-left: 15px;
<% } %>
width: 75px;
height: 28px;
font-size: 12px;
padding-bottom: 7px;
padding-top: 2px;
margin-top: 2px;
opacity: 0.85;
filter: alpha(opacity=85);
}

button.ms-crm-Inline-RecommendationDismiss.ms-crm-Inline-multipleRecommendation {
margin-left: 0px;
margin-bottom: 1px;
margin-top: 10px;
}

.ms-crm-Inline-Recommendation .ms-crm-Inline-RecommendationApply:focus,
.ms-crm-Inline-Recommendation .ms-crm-Inline-RecommendationApply:hover,
button.ms-crm-Inline-RecommendationDismiss:focus,
button.ms-crm-Inline-RecommendationDismiss:hover
{
outline-color: #000000;
outline-width: 1px;
outline-style: dotted;
color: #000000;
}

IMG.ms-crm-InlineLookupEdit
{
cursor:	pointer;
vertical-align:	middle;
height:	18px !important;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: none;
<% } else { %>
border-left: none;
<% } %>
}

.ms-crm-InlineEditLabel
{
color: #444444;
overflow: hidden;
position: relative;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right !important;
<% } else { %>
text-align: left;
<% } %>
<% if (!CrmStyles.IsTextWrapEnabled) { %>
white-space: nowrap;
<% } %>
}

textarea.ms-crm-InlineInput
{
border: 1px solid #CCCCCC;
margin: 0;
padding: 2px 5px 3px 5px;
font-size: 12px;
display: block;
width: auto;
word-wrap: break-word;
<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>.ms-crm-headercolor-Text
}

<% if (this.IsVisualRefreshEnabled) { %>


div.ms-crm-InlineLookupEdit[role="list"] UL.ms-crm-InlineLookupEdit{
height:auto !important;
}

div.ms-crm-InlineLookupEdit[role="list"] div.ms-crm-Inline-EditIcon,
div.ms-crm-InlineLookupEdit[role="list"] div.recalculate{
max-height: 50px;
}


.ms-crm-HeaderTile.ms-crm-Inline-Value.ms-crm-Inline-Lookup .ms-crm-Inline-EditIcon,
.ms-crm-HeaderTile.ms-crm-Inline-Value.ms-crm-Inline-Lookup .recalculate
{
top:0px;
}



.ms-crm-Form-AreaContainer .ms-crm-Inline-Lookup.ms-crm-Inline-EditHintState,
.ms-crm-Form-AreaContainerQuick .ms-crm-Inline-Lookup.ms-crm-Inline-EditHintState{
max-height:23px !important;
}

.ms-crm-Form-AreaContainer .ms-crm-Inline-Value.ms-crm-Inline-Lookup.ms-crm-Inline-EditHintState span,
.ms-crm-Form-AreaContainerQuick .ms-crm-Inline-Value.ms-crm-Inline-Lookup.ms-crm-Inline-EditHintState span{
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width:calc(100% - 16px);
}

.ms-crm-Form-AreaContainer div[lookupstyle='single'] .ms-crm-Inline-Value.ms-crm-Inline-Lookup.ms-crm-Inline-EditHintState span,
.ms-crm-Form-AreaContainerQuick div[lookupstyle='single'] .ms-crm-Inline-Value.ms-crm-Inline-Lookup.ms-crm-Inline-EditHintState span{
min-width:50%;
}

.ms-crm-BreadCrumb-Lookup-Parent-Container-Child span{
width:auto !important;
}

div.ms-crm-Inline-EditIcon,
div.recalculate
{
max-height:21px;
}




div#effectivitycalendar .ms-crm-Inline-Value:after
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
background-image: none !important;
position:relative;
<% } %>
}

.ms-crm-Form-HeaderPosition .ms-crm-HeaderTilesWrapperLayoutElement
{
height:65px;
}

DIV.ms-crm-Inline-Value.ms-crm-HeaderTile span.ms-crm-Inline-DateTimeSpacer
{
width: auto;
}

.treeWidget .ms-crm-FormClipboardBgColor
{
display:none;
}
.ms-crm-HeaderTileElement .ms-crm-Inline-LockIcon
{
top:0px;
}
.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print .ms-crm-Inline-Chrome
{
width:100% !important;
}

.ms-crm-HeaderTileElement ms-crm-Field-DateTime-Print.ms-crm-Field-DatePickerTimePicker-Print
{
width:150px !important;
}

div#header_scheduledend_d.ms-crm-Field-Data-Print.ms-crm-Field-DateTime-Print.ms-crm-Field-DatePickerTimePicker-Print,
div#header_scheduledend_d.ms-crm-Inline-Chrome.datetime.ms-crm-Inline-Chrome.nvarchar,
.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print .ms-crm-Inline-Edit.ms-crm-HeaderTile,
.ms-crm-Inline-Edit.ms-crm-HeaderTile select.ms-crm-SelectBox
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<% } else { %>
padding-left: 0px;
<% } %>
}

.ms-crm-Form-HeaderContainer .ms-crm-Inline-Value:after,
.ms-crm-Inline-Value.ms-crm-HeaderTile
{
position:relative;
}

.ms-crm-HeaderTileLabel .ms-crm-InlineEditLabel
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
max-height: 34px;
<% } %>
font-size:<%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
}

.ms-crm-HeaderTileLabel,
.ms-crm-Inline-Value.ms-crm-HeaderTile
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
<% if (this.IsVisualRefreshEnabled) { %>
max-height: 48px;
<% } else { %>
max-height: 34px;
<% } %>
<% } %>
width:130px;
}

.ms-crm-HeaderTilesWrapperLayoutElement
{
margin-top:0px !important;
}

.ms-crm-HeaderTileElement
{
min-width: 180px !important;
max-width: 200px !important;
padding-left:10px;
padding-right:10px;
<% if (CrmStyles.IsTextWrapEnabled) { %>

height: 71px;
<% } else { %>
height: 42px;
<% } %>
<% if (CrmStyles.IsRightToLeft) { %>
border-width: 0px 1px 0px 0px;
<% } else { %>
border-width: 0px 0px 0px 1px;
<% } %>
}

.ms-crm-HeaderTilesWrapperLayoutElement .ms-crm-HeaderTileElement:hover
{
background-color: rgba(255,255,255,0.3) !important;
}

.ms-crm-HeaderTilesWrapperLayoutElement .ms-crm-HeaderTileElement:hover .ms-crm-InlineEditLabelText:after
{
display: none !important;
}

<% if (this.IsVisualRefreshEnabled) { %>
div[id$=_composite] .ms-crm-Inline-Value
{
min-height:80px !important;
}

div[id$=_composite] .ms-crm-Inline-NoValue
{
min-height:30px !Important;
}
<% } %>

TABLE.ms-crm-FormSection .ms-crm-Inline-DynamicGutter
.ntext
{
min-height:40px;
}

#dashboardAreaForm TABLE.ms-crm-FormSection .ms-crm-Inline-DynamicGutter
.ntext
{
border: 1px solid #BDC3C7;
}

.ms-crm-FormControlNoBorder
{
border: none !important;
}

TABLE.ms-crm-FormSection .ms-crm-Inline-DynamicGutter
.lookup
{
max-height:22px;
}

img.ms-crm-EditLookup-Image
{
margin-top: 0px;
}

@media screen and (max-width:800px)
{
.ms-crm-HeaderTilesTitleWrapperElement
{
padding-top:10px;
}
}

@media screen and (min-width:801px)
{
.ms-crm-HeaderTilesTitleWrapperElement
{
height:65px;
}
}

@media screen and (max-width:660px)
{
div#HeaderTilesWrapperLayoutElement.ms-crm-HeaderTilesWrapperLayoutElement
{
height:auto;
min-width:0px !important;
}
}

@media screen and (max-width:900px)
{
.ms-crm-HeaderTileElement
{
min-width: 100px !important;
max-width: 100px !important;
}
}

@media screen and (max-width:768px)
{

.ms-crm-HeaderTileElement ms-crm-Field-DateTime-Print.ms-crm-Field-DatePickerTimePicker-Print
{
width:100px !important;
}

.ms-crm-HeaderTileLabel,
.ms-crm-Inline-Value.ms-crm-HeaderTile
{
width:90px;
<% if (CrmStyles.IsTextWrapEnabled) { %>
<% if (this.IsVisualRefreshEnabled) { %>
max-height: 51px;
<% } else { %>
max-height: 34px;
<% } %>
<% } %>
}

div#header_scheduledend_d.ms-crm-Field-Data-Print.ms-crm-Field-DateTime-Print.ms-crm-Field-DatePickerTimePicker-Print,
div#header_scheduledend_d.ms-crm-Inline-Chrome.datetime.ms-crm-Inline-Chrome.nvarchar,
.ms-crm-Inline-Edit.ms-crm-HeaderTile select.ms-crm-SelectBox
{
width:90px !important;
}

.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print .ms-crm-Inline-Edit.ms-crm-HeaderTile
{
width:90px !important;
min-width:90px !important;
}

}

.ms-crm-HeaderTilesWrapperLayoutElement
{
vertical-align: top;
}

.ms-crm-Inline-Value span a.ms-crm-gridurl
{
display:block;
}

<% if (Request.Browser.Browser == "Chrome" && this.IsVisualRefreshEnabled && CrmStyles.IsTextWrapEnabled) { %>
DIV.ms-crm-QuickForm DIV.ms-crm-ltrcontrol .ms-crm-Inline-Value span a:empty
{
display:none !important;
}
<% } %>

TABLE.ms-crm-FormSection td .ms-crm-Inline-ErrorArrowIcon,
TABLE.ms-crm-FormSection td .ms-crm-Inline-LockIcon,
TABLE.ms-crm-FormSection td .ms-crm-Inline-WarningIcon,
TABLE.ms-crm-FormSection td .ms-crm-Inline-RecommendationIcon,
TABLE.ms-crm-FormSection td .ms-crm-Inline-fieldChangeIndicatorIcon,
TABLE.ms-crm-QuickFormSection.ms-crm-FormSectionNoBorder td .ms-crm-Inline-WarningIcon,
TABLE.ms-crm-QuickFormSection.ms-crm-FormSectionNoBorder td .ms-crm-Inline-RecommendationIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:-15px;
<% } else { %>
margin-left:-15px;
<% } %>
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Edit.ms-crm-Inline-OptionSet
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
}

.ms-crm-Inline-Edit input.ms-crm-InlineInput,
.ms-crm-Inline-Edit input.ms-crm-Input,
.ms-crm-Inline-Edit textarea.ms-crm-InlineInput
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
}

.ms-crm-Inline-Edit textarea.ms-crm-InlineInput
{
font-weight: normal;
}

.ms-crm-Inline-Value,
.ms-crm-Inline-Edit input.ms-crm-InlineInput
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 0px;
<% } else { %>
padding-right: 0px;
<% } %>
}

.ms-crm-headercolor-Text
{
width: 65%;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 12px;
<% } else { %>
margin-right: 12px;
<% } %>
}

.ms-crm-subgridheader-Color
{
width: 32%;
<% if (!CrmStyles.IsRightToLeft) { %>
margin-left: 68%;
<% } else { %>
margin-right: 68%;
<% } %>
margin-top: -19px;
border: 1px;
}

.ms-crm-Inline-Value.ms-crm-Inline-EditHintState
{
padding: 2px 0px 3px 0px !important;
}

td.ms-crm-Field-Data-Print .lookup:not(#configurationused):not(#contactquickform_contactquickform_lookup_field):not[data-attributename="resolvebykpiid"]:not[data-attributename="firstresponsebykpiid"]
{
min-height : 25px !important;
max-height : 48px !important;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Value.ms-crm-Inline-EditHintState
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 1px;
<% } else { %>
margin-left: 1px;
<% } %>
}

IMG.ms-crm-InlineLookupEdit
{
padding-top: 0px;
padding-bottom: 0px;
}

.ms-crm-Form-HeaderContainer IMG.ms-crm-InlineLookupEdit{
padding-top:2px;
padding-bottom:2px;
}

.Lookup_RenderButton_td IMG.ms-crm-InlineLookupEdit
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:2px;
<% } else { %>
padding-left:2px;
<% } %>
}

DIV.processStepsContainer IMG.ms-crm-InlineLookupEdit
{
padding-top: 0px;
padding-bottom: 0px;
}

.ms-crm-Inline-Edit table tr:first-child
{
height:20px;
}

div.ms-crm-InlineEditLabel-Padding div.ms-crm-Inline-EditHintState div.ms-crm-Inline-EditIcon
{
height: 24px;
}

.ms-crm-Form-Container .ms-crm-Field-Data-Print td.Lookup_RenderButton_td ,.ms-crm-rof-quickForm td.Lookup_RenderButton_td,
table.ms-crm-Lookup td.Lookup_RenderButton_td
{
border-top: 1px solid #CCCCCC;
border-bottom: 1px solid #CCCCCC;
<% if (CrmStyles.IsRightToLeft) { %>
border-left: 1px solid #CCCCCC;
border-right: none;
<% } else { %>
border-right: 1px solid #CCCCCC;
border-left: none;
<% } %>
}

table#record2id_lookupTable td.Lookup_RenderButton_td,
table#record2roleid_lookupTable td.Lookup_RenderButton_td{
border:none ;
}

.dlg_merge_Main_td table.ms-crm-Lookup td.Lookup_RenderButton_td
{
border: none;
}

IMG.ms-crm-ImageStrip-search_normal
{
border-width: 0px;
}

IFRAME.ms-crm-Custom
{
<% if (Request.Browser.Browser == "IE"){ %>
outline: 1px solid #BFC5C6 !important;
<% } else { %>
border:	1px solid #BFC5C6 !important;
<% } %>
height:100%;
width:100%;
}

.ms-crm-InlineEditLabel
{
display: flex;
display: -ms-flexbox;
flex-direction:row;
position:relative;
padding-bottom:1px;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Edit,
TABLE.ms-crm-FormSection td .ms-crm-Inline-Value,
TABLE.ms-crm-QuickFormSection td .ms-crm-Inline-Value,
TABLE.ms-crm-QuickFormSection td .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Value,
TABLE.ms-crm-QuickFormSection td .ms-crm-Inline-Value
{
padding : 3px 0px 4px;
max-height: 30px;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-NoValue,
TABLE.ms-crm-QuickFormSection td .ms-crm-Inline-NoValue
{
padding : 2px 0px 4px;
}

.ms-crm-Inline-Value :not(.ntext)
{
-ms-overflow-style: none;
}

.ms-crm-Form-AreaContainer .ntext .ms-crm-Inline-Value:after
{
width: 0px;
}

td .ms-crm-InlineEditLabel .ms-crm-Inline-RequiredLevel
{
position:absolute !important;
<% if (CrmStyles.IsRightToLeft) { %>
right:10px;
<% } else { %>
left:10px;
<% } %>
top:0;
}

<% if (this.IsVisualRefreshEnabled) { %>

#dashboardAreaForm .ms-crm-InlineEditLabelText:after,
#dashboardAreaForm .ms-crm-InlineEditLabel span:first-child:after{
position:relative;
background:none;
}

.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print{
width: calc(100% - 20px)!important;
}

.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print .ms-crm-Inline-Value.ms-crm-HeaderTile{
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
width:100%;
}

span.ms-crm-InlineEditLabel > img.ms-crm-Inline-RequiredLevel
{
left : 0px;
right: 0px;
position : relative !important;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Value,
TABLE.ms-crm-QuickFormSection td .ms-crm-Inline-Value
{
min-height: 23px !important;
box-sizing: border-box;
-moz-box-sizing: border-box;
-ms-box-sizing: border-box;
-webkit-box-sizing: border-box;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:-5px;
<% } else { %>
margin-left:-5px;
<% } %>
}

#cc_ContractCalendar_lock
{
display: none !important;
}

div#AssociatedCategoriesGrid_divDataBody TABLE.ms-crm-List-Data tr td span.ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:-10px;
<% } else { %>
margin-left:-10px;
<% } %>
}

div.processStepLabel span.ms-crm-InlineEditLabel > img.ms-crm-Inline-RequiredLevel{
position: absolute !important;
<% if (CrmStyles.IsRightToLeft) { %>
right:9px;
<% } else { %>
left:9px;
<% } %>
top: 0;
}

.ms-crm-Inline-Edit TABLE.ms-crm-InlineDuration td
{
padding: 0px !important;
}

.ms-crm-Inline-Edit TABLE.ms-crm-InlineDuration td.ms-crm-Select-Input-Container
{
height : 19px !important;
padding-top : 1px !important;
}
<% } %>

@-moz-document url-prefix() {
.ms-crm-InlineEditLabel span:first-child
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
<% if (this.IsVisualRefreshEnabled) { %>
max-height:51px;
<% } else { %>
max-height: 34px;
<% } %>
line-height: 17px;
<% } else { %>
white-space: nowrap;
<% } %>
}
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Edit table.ms-crm-DateTime tr:first-child
{
height:20px;
}

.ms-crm-Inline-Edit.ms-crm-Inline-Lookup UL.ms-crm-InlineLookupEdit
{
height:auto;
}

DIV.ms-crm-InlineLookupEdit
{
height:18px !important;
}

TABLE.ms-crm-Email-Body td{
padding:0 !important;
}
<% } else { %>

.ms-crm-HeaderTileElement .ms-crm-Field-DatePickerTimePicker-Print{
min-width:200px;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Edit table.ms-crm-DateTime tr td .ms-crm-DateTime-Container-Input[type="text"]
{
padding:4px;
}

.ms-crm-InlineEditLabel
{
display: block;
}

IFRAME.ms-crm-Custom
{
width:	99.5%;
height:	100%;
border: 1px solid;
}

IMG.ms-crm-InlineLookupEdit
{
padding-top: 1px;
padding-bottom:	1px;
}

DIV.ms-crm-Inline-Edit.ms-crm-Inline-Lookup TABLE TD img#quickCreateActivity4210controlId_to_i
{
padding-top: 3px;
padding-bottom: 3px;
}

.ms-crm-Inline-Value.ms-crm-Inline-EditHintState
{
padding-right: 5px;
padding-left: 5px;
}

.ms-crm-Inline-Value,
.ms-crm-Inline-Edit input.ms-crm-InlineInput
{
padding-top: 2px;
padding-bottom: 3px;
}

IMG.ms-crm-InlineLookupEdit
{
border:	#c6c6c6 1px solid;
height:	18px !important;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: none;
<% } else { %>
border-left: none;
<% } %>
}

<% } %>

div#SectionDialogHeader span,div#SectionDialogHeader h2
{
font-size: 12px;
display: block;
color: initial;
font-weight: initial;
font-family: Segoe UI, Tahoma, Arial;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

div#SectionDialogHeader span.ms-crm-Inline-Label,div#SectionDialogHeader h2.ms-crm-Inline-Label
{
font-weight: bold;
}

#SectionDialogHeader h2.ms-crm-Inline-Label
{
margin : 0px;
}

#SectionDialogHeader.ms-crm-RefreshDialog-Header-Title-MDD .ms-crm-Inline-Label
{
font-size: 24px;
display: block;
color: #0074d9;
font-weight: Lighter;
font-family:	<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_SemiLight") %>;
}

#tdDialogHeader.ms-crm-RefreshDialog-TabHeader-MDD .ms-crm-Inline-Label
{
font-size: 24px;
color: #0074d9;
font-weight: Lighter;
font-family:	<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_SemiLight") %>;
}

#tdDialogHeader.ms-crm-RefreshDialog-FormHeader-MDD .ms-crm-Inline-Label,
#tdDialogHeader.ms-crm-RefreshDialog-FormHeader-MDD #lbl_reactivatecase
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.24px.font_size") %>;
color: #0074d9;
font-weight: Lighter;
font-family:	<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_SemiLight") %>;
}

.ms-crm-Inline-Label
{
font-size: 24px;
}

div.ms-crm-InlineTab-TabHeader
{
top: 18px;
position:relative;
}

<% if (this.IsVisualRefreshEnabled) { %>


TABLE.ms-crm-FormSection div.ms-crm-TextArea-Placeholder.ms-crm-Inline-HasError ~ .ms-crm-Inline-RecommendationIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
}

.ms-crm-HeaderTileElement .ms-crm-Field-Data-Print .ms-crm-Inline-Value span.ms-crm-Lookup-Item
{
width: calc(100% - 20px);
display:inline;
}

table[name="email description"] tr td .ntext
{
overflow-x: auto;
}

table[name="appointment description"] tr td .ntext
{
overflow-x: auto;
}

TABLE.ms-crm-Email-Body
{
min-width: 650px;
}


TABLE.ms-crm-FormSection div.ms-crm-TextArea-Placeholder.ms-crm-Inline-NoValue.ms-crm-Inline-HasError.ms-crm-Inline-EditHintState
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 16px;
<% } else { %>
margin-left: 16px;
<% } %>
}


.ms-crm-HeaderTileLabel,
.ms-crm-Inline-Value.ms-crm-HeaderTile
{
width: auto;
}

TABLE.ms-crm-FormSection div.ms-crm-Inline-Value.ms-crm-TextArea-Placeholder.ms-crm-Inline-NoValue.ms-crm-Inline-HasError
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 22px;
<% } else { %>
margin-left: 22px;
<% } %>
}

.tileContentTextWrap::after
{
background:none;
}

table.ms-crm-List-Message-Lite  td.ms-crm-List-DataCell-Lite .ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
}

table.ms-crm-List-Data tr td div span.ms-crm-Inline-WarningIcon,
table.ms-crm-List-Data tr td div span.ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 3px;
<% } else { %>
left: 3px;
<% } %>

}

div.ms-crm-HeaderTileElement div.ms-crm-Inline-Value.ms-crm-HeaderTile label
{
display:table-footer-group;
}

div.ms-crm-HeaderTileElement div.ms-crm-Inline-Value.ms-crm-HeaderTile.rollup label
{
display:inline;
}

div.ms-crm-Form-FooterContainer table.ms-crm-Form-StandaloneSection td.ms-crm-Field-Data-Print-Bold
{
padding: 10px 15px 10px 15px;
}


div.ms-crm-Form-FooterContainer table.ms-crm-Form-StandaloneSection td.ms-crm-ReadField-Normal-Footer
{
<% if (CrmStyles.IsRightToLeft) { %>
padding: 10px 15px 10px 0px;
<% } else { %>
padding: 10px 0px 10px 15px;
<% } %>

}
div.ms-crm-Form-FooterContainer table.ms-crm-Form-StandaloneSection td.ms-crm-Field-Data-Print-Bold div.ntext
{
overflow:visible;
}

DIV.ms-crm-Inline-Value.ms-crm-Inline-Lookup > SPAN
{
vertical-align:top;
}

DIV.ms-crm-Inline-Value.ms-crm-Inline-Lookup.ms-crm-HeaderTile > SPAN,
DIV.ms-crm-Inline-Value.ms-crm-Inline-Lookup SPAN.ms-crm-Lookup-Item
{
vertical-align:initial;
}

<% } %>

.ms-crm-Inline-NoValue.rollup{
border:none !important;
top:0px;
}

.ms-crm-Inline-NoValue.rollup span{
width:100%;
}

.ms-crm-Inline-NoValue.rollup span.calculateImage-no-value{
border-top: 0.6px dashed rgb(130, 129, 129);
position: absolute;
top:10px;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Value.rollup.ms-crm-Inline-EditHintState{
border: 1px solid rgb(204,204,204) !important;
}

TABLE.ms-crm-FormSection td .ms-crm-Inline-Value.ms-crm-Inline-EditHintState span.calculateImage-no-value{
border-top:none !important;
}