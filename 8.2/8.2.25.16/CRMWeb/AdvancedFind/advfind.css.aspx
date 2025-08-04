<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


SPAN.ms-crm-AdvFind-MsgDisabled
{
background-color:	#ffffae;
border:				1px solid #c5c5c5;
width:				100%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:		5px;
<% } else { %>
padding-left:		5px;
<% } %>
}


DIV.ms-crm-AdvFindControl
{
border-width: 1px;
border-style: solid;
border-top-width:0px;
}


DIV.ms-crm-AdvFindControlEx
{
height: auto;
width: 100%;
}

.ms-crm-AdvFindDetailed-Container
{
position:absolute;
bottom:0px;
width:100%;
}


.ms-crm-menutopborder
{
border-top-width: 1px;
border-top-style: solid;
}

TABLE.ms-crm-AdvFind-Title-table-WithTopBorder
{
border-top-width: 1px;
border-top-style: solid;
border-bottom-width: 1px;
border-bottom-style: solid;
}


DIV.ms-crm-AdvFind-TitleArea
{
height: 30px;
vertical-align: middle;
}


TD.ms-crm-AdvFind-TitleLabel
{
vertical-align: middle;
padding-right: 5px;
padding-left: 5px;
background-color: #6693cf;
}


TD.ms-crm-AdvFind-Title
{
vertical-align: middle;
background-color: #6693cf;
}


TD.ms-crm-AdvFind-Label
{
vertical-align: middle;
padding-right: 5px;
padding-left: 5px;
}


TD.ms-crm-AdvFind-EntityList
{
vertical-align: middle;
height: 25px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
<% } else { %>
padding-right: 10px;
<% } %>
}



TD.ms-crm-AdvFind-QueryList
{
vertical-align: middle;
height: 25px;
}


SPAN.ms-crm-AdvFind-Detailed
{
height: 100%;
overflow-y: auto;
overflow-x: hidden;
display: block;
min-width:600px;
}


SPAN.ms-crm-AdvFind-DetailedEx
{
height: auto;
width: 100%;
min-width:500px;
}


SPAN.ms-crm-AdvFind-Message
{
height: 100%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
display: none;
border: 1px solid #6693cf;
border-top: 0px;
}




DIV.ms-crm-AdvFind-Filter
{
<% if (CrmStyles.IsRightToLeft) { %>
margin: 0px 20px 0px 0px;
<% } else { %>
margin: 0px 0px 0px 20px;
<% } %>
padding: 0px 0px 0px 0px;
}


DIV.ms-crm-AdvFind-EmptyField
{
<% if (CrmStyles.IsRightToLeft) { %>
margin: 0px 20px 0px 0px;
<% } else { %>
margin: 0px 0px 0px 20px;
<% } %>
padding: 0px 0px 2px 0px;
vertical-align: middle;
display: block;
overflow: hidden;
height: 23px;

<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 20px 0px 0px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-top-width: 1px;
border-top-style: solid;
border-right-width: 1px;
border-right-style: solid;	<% } else { %>
padding: 0px 0px 0px 20px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-top-width: 1px;
border-top-style: solid;
border-left-width: 1px;
border-left-style: solid;		<% } %>
}

SPAN.ms-crm-AdvFind-EmptyField
{
width: 300px;
height: 100%;
vertical-align: middle;
display: block;
}


DIV.afEntityControls
{
<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 20px 0px 0px;
<% } else { %>
padding: 0px 0px 0px 20px;
<% } %>
}




TABLE.ms-crm-AdvFind-FilterGroup
{
width: 100%;
white-space:nowrap;
height: 100%;
margin-top: 2px;
margin-bottom: 2px;
}


TD.ms-crm-AdvFind-GroupName
{
height: 100%;
width: 40px;
background-color: #EEEEEE;
border: 1px solid #A6BADA;
vertical-align: middle;
}

TD.ms-crm-AdvFind-SelectedGroup
{
height: 100%;
width: 40px;
background-color: #a7cdf0;
border: 1px solid #A6BADA;
vertical-align: middle;
}


SPAN.ms-crm-AdvFind-GroupMenu
{
width: 15px;
height: 15px;
vertical-align: middle;
text-align: center;
display: inline-block;
}


SPAN.ms-crm-AdvFind-SelectedGroupMenu
{
width: 15px;
height: 15px;
cursor: pointer;
background-color: #a7cdf0;
vertical-align: middle;
text-align: center;
display: inline-block;
}


SPAN.ms-crm-AdvFind-GroupLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>
display: inline-block;
vertical-align: middle;
}


TD.ms-crm-AdvFind-GroupPadding
{
width: 3px;
}


SPAN.ms-crm-AdvFind-ControlsGroup
{
width:100%;
white-space: normal;
display: inline-block;
vertical-align: top;
}



DIV.ms-crm-AdvFind-FilterNewField
{
border-bottom: 1px solid #FFFFFF;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid #A6BADA;
<% } else { %>
border-left: 1px solid #A6BADA;
<% } %>
height: 25px;
width: 100%;
vertical-align: middle;
display: block;
overflow:hidden;
}

DIV.ms-crm-AdvFind-SelectedFilterField
{
border-bottom-width: 1px;
border-bottom-style: solid;
border-top-width: 1px;
border-top-style: solid;
}

DIV.ms-crm-AdvFind-SelectedFilterField,
DIV.ms-crm-AdvFind-FilterField,
DIV.ms-crm-AdvFind-FilterSimpleField
{
height: 25px;
width: 100%;
vertical-align: middle;
display: block;
overflow: visible;
}

.ms-crm-AdvFindDetailed-Container DIV.ms-crm-AdvFind-Filter
{
overflow-x: auto;
}

.ms-crm-AdvFindDetailed-Container DIV.ms-crm-AdvFind-FilterField
{
white-space: nowrap;
overflow: visible !important;
}

.ms-crm-AdvFindDetailed-Container TABLE.ms-crm-AdvFind-FilterGroup
{
table-layout: fixed;
}


SPAN.ms-crm-AdvFind-FilterFieldError
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
vertical-align: middle;
}


SPAN.ms-crm-AdvFind-FieldList
{
width: 150px;
height: 100%;
vertical-align: middle;
display: inline-block;
}


SPAN.ms-crm-AdvFind-SimpleFieldList
{
height: 100%;
vertical-align: middle;
display: inline-block;
}

SPAN.ms-crm-AdvFind-ClientControl,
SPAN.ms-crm-AdvFind-OperatorList
{
width: auto;
height: 100%;
vertical-align: middle;
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 3px;
<% } %>
}


SPAN.ms-crm-AdvFind-SimpleOperatorList
{
height: 100%;
vertical-align: middle;
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 5px;
<% } else { %>
padding-right: 5px;
<% } %>
}


SPAN.ms-crm-AdvFind-HiddenFieldLabel
{
color: Black;
text-decoration: none;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
vertical-align: middle;
display: inline-block;
margin-bottom: 5px;
}


SPAN.ms-crm-AdvFind-SelectedFieldMenu
{
cursor: pointer;
background-color: #a7cdf0;
width: 20px;
height: 100%;
vertical-align: middle;
text-align: center;
display: inline-block;
}



DIV.ms-crm-AdvFind-AutoShow
{
width : 150px;
height: 20px;
display: block;
padding: 0px;
margin: 0px;
border: 0px;
vertical-align: middle;
overflow: visible;
}


DIV.ms-crm-AdvFind-SimpleAutoShow
{
height: 20px;
display:block;
padding: 0px;
margin: 0px;
border: 0px;
vertical-align: middle;
overflow:hidden;
<% if (CrmStyles.IsRightToLeft) { %>
direction: rtl;
<%} %>
margin-top: 3px;
}


DIV.ms-crm-AdvFind-AutoShowControl
{
overflow : hidden;
display : inline;
margin-top : 0px;
<% if (CrmStyles.IsRightToLeft) { %>
right : 0px;
<% } else { %>
left : 0px;
<% } %>
}


DIV.ms-crm-AdvFind-AutoShowLabel
{
text-decoration: underline;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
<% if (CrmStyles.IsRightToLeft) { %>
right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
width : 145px;
margin-top: 3px;
}


DIV.ms-crm-AdvFind-SimpleAutoShowLabel
{
display: inline;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
margin-top: 3px;
<% if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}


DIV.ms-crm-AdvFind-AutoShowEmptyControlLabel
{
display: block;
text-decoration: underline;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
margin-top: 3px;
width : 150px;
}



DIV.ms-crm-AdvFind-FilterEntity
{
overflow: hidden;
height: 25px;
white-space: nowrap;
background-color: #a7cdf0;
vertical-align: middle;
border: 1px solid #000064;
<% if (CrmStyles.IsRightToLeft) { %>
border-left: 1px solid #6693cf;
text-align:right;
<% } else { %>
border-right: 1px solid #6693cf;
<% } %>
}


DIV.ms-crm-AdvFind-FilterEntityError
{
overflow: hidden;
height: 25px;
width: 100%;
white-space: nowrap;
background-color: #a7cdf0;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

SPAN.ms-crm-AdvFind-FieldMenu,
SPAN.ms-crm-AdvFind-FilterEntityMenu
{
height: 100%;
width: 20px;
text-align: center;
display: inline-block;
vertical-align: middle;
}
SPAN.ms-crm-AdvFind-FieldMenu
{
vertical-align: middle;
}

SPAN.ms-crm-AdvFind-FilterEntitySelectedMenu
{
cursor: pointer;
background-color: #CCCCCC;
height: 100%;
width: 20px;
vertical-align: middle;
text-align: center;
display: inline-block;
}


DIV.ms-crm-AdvFind-FilterEntityControl
{
display: block;
}


SPAN.ms-crm-AdvFind-EntitySelector
{
height: 25px;
display: inline-block;
vertical-align: middle;
}

.FilterControl
{
display: block;
}

DIV.ms-crm-FilterControlOnHover
{
background-color: #a7cdf0;
}