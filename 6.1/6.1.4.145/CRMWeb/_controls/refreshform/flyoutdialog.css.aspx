<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.ms-crm-flyout-loadingcontent
{
text-align: center;
}

.ms-crm-LinkControl-content
{
display: none;
}

.ms-crm-FormBodyContainer div.ms-crm-Form-Area
{
position: relative;
}

.ui-flyout-dialog
{
position: absolute;
padding: 0px;
width: 300px;
border: 1px solid #D6D6D6;
background-color: #ffffff;
}

.ui-dialog-title
{
color: #666666;
font-size: <%= WebUtility.GetFontResourceForStyle("General.24px.font_size")%>;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts") %>;
font-weight: 100;
}

.ui-flyout-dialog .ui-dialog-titlebar .ui-dialog-titlebar-close
{
display: inline;
top: 10px;
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
left: 10px;
<% } else { %>
float: right;
right: 10px;
<% } %>
}

.ui-flyout-dialog .ui-dialog-content
{
position: relative;
border: 0;
padding-right: 14px;
padding-left: 9px;
background: none;
overflow: auto;
overflow-x: hidden;
zoom: 1;
}
.ui-flyout-dialog .ui-dialog-content.ui-flyout-dialog-opportunity-content
{
margin-top: 0px;
margin-bottom:0px;
}
.ui-flyout-dialog .ui-dialog-content.ui-flyout-dialog-moreCommands
{
padding-left: 0px;
padding-right: 0px;
overflow-y: hidden;
}
.ui-flyout-dialog .ui-QuickAddFlyout-Content
{
margin: 0px;
}

.ui-flyout-dialog .ui-InlineEditDropDown-Content-Form
{
padding: 0px;
}

.ui-flyout-dialog .ui-InlineEditDropDown-Content-Select
{
margin: 0px;
}

.ui-QuickAddFlyout-Content td
{
padding-left: 0px;
}
.ui-dialog .ui-dialog-titlebar
{
line-height: normal;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 11px;
<% } else { %>
padding-left: 11px;
<% } %>
position: relative;
margin: 5px,0px,15px,0px;
}

.composite-callout
{
padding: 1px 1px 0px 0px;
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<%} %>
}

.composite-border-callout
{
border: 1px solid #D6D6D6;
padding: 1px 1px;
}

.composite-callout .composite-notch
{
position: absolute;
top: 35px;
<%if(CrmStyles.IsRightToLeft) { %>
right: -10px;
<% } else { %>
left: -10px;
<%} %>
margin: 2px;
<%if(CrmStyles.IsRightToLeft) { %>
border-right: 0;
border-left: 8px solid #ffffff;
<% } else { %>
border-left: 0;
border-right: 8px solid #ffffff;
<%} %>
border-bottom: 8px solid transparent;
border-top: 8px solid transparent;

padding: 0;
width: 0;
height: 0;
font-size: 0;
line-height: 0;
}

.composite-callout .composite-notch.flyout-overflow
{
<%if(CrmStyles.IsRightToLeft) { %>
right: auto;
left: -10px;
border-left: 0;
border-right: 8px solid #ffffff;
<% } else { %>
left: auto;
right: -10px;
border-right: 0;
border-left: 8px solid #ffffff;
<%} %>
}

.composite-border-callout .composite-border-notch
{
<%if(CrmStyles.IsRightToLeft) { %>
border-left-color: #D6D6D6;
right: -11px;
<% } else { %>
border-right-color: #D6D6D6;
left: -11px;
<%} %>
}

.composite-border-callout .composite-border-notch.flyout-overflow
{
<%if(CrmStyles.IsRightToLeft) { %>
border-left-color: #FFFFFF;
right: auto;
border-right-color: #D6D6D6;
left: -11px;
<% } else { %>
border-right-color: #FFFFFF;
left: auto;
border-left-color: #D6D6D6;
right: -11px;
<%} %>
}

div.ui-dialog-minimal
{
border: none;
padding: 1px 0px 0px 0px;
overflow: visible;
}

div.ui-dialog-minimal-SubGrid-InlineEdit
{
border: none;
padding: 0px;
}

div.ui-dialog-minimal div.ms-crm-List-QuickAddButton-FlyOut
{
padding: 0px 0px 0px 1px;
overflow: hidden;
}

div.ui-dialog-minimal div.ui-helper-clearfix
{
display: none;
}

.ui-flyout-dialog .ui-dialog-content .ms-crm-List-QuickAddButton-FlyOut
{
background-color: white;
border-style:solid;
border-color:black;
padding: 0px;
overflow: hidden;
}

.ui-flyout-dialog .ui-dialog-buttonpane
{
position: relative;
border: 0;
padding: 0px 4px 0px 4px;
width: auto;
background-color: #F8F8F8;
overflow: auto;
margin: 0 0 0 0;
}

.ui-draggable .ui-dialog-titlebar { cursor: move; }

.ui-flyout-dialog .ui-dialog-buttonpane .ui-dialog-buttonset
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.ui-button-text
{
text-overflow: ellipsis;
display: block;
overflow: hidden;
white-space: nowrap;
word-wrap: normal;
padding: 0px 10px 0px 10px;
}

.ui-flyout-dialog .ui-dialog-buttonpane button
{
width: auto;
max-width: 125px;
height: 20px;
background-color: #FDFDFD;
border: 1px solid #C6C6C6;
cursor: pointer;
<% if (CrmStyles.IsRightToLeft) { %>
margin: 10px 0px 10px 10px;
<% } else { %>
margin: 10px 10px 10px 0px;
<% } %>
background-image: none;
text-align: center;
overflow: visible;
padding: 0px 0px 0px 0px;
color: #262626;
font-size: 11px;
}

.ui-flyout-dialog .ui-dialog-buttonpane .ui-state-disabled
{
border-color: #E1E1E1;
color: #B1B1B1;
}

.ui-flyout-dialog .ui-dialog-buttonpane .ui-state-hover:hover
{
background-color: #CDE6F7;
border-color: #92C0E0;
border-width: 1px;
}

.ui-flyout-dialog .ui-dialog-buttonpane button[disabled="disabled"]
{
cursor: default;
}

.ui-selectable {
font-size: <% = WebUtility.GetFontResourceForStyle("General.13px.font_size") %>
color: #666666;
}

.ui-selectee:hover {
background: #d7e8f9;
}

.ui-selected {
background: #d7e8f9;
}

.selectedstateconvertlead {
list-style-type: none;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: -40px;
<% } else { %>
margin-left: -40px;
<% } %>
}

.li-flyoutlistitem{
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
height: 18px;
margin: 0px 6px;
padding: 4px 4px;
}

div.won-lost-flyout-title,
div.delete-flyout-title
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts_Light") %>, Segoe UI, Arial, Sans-serif;
padding: 0px 14px 0px 14px;
font-size: 34px;
font-weight: lighter;
margin: 8px 6px 0px 6px;
}

div.won-flyout-subtitle,
div.delete-flyout-subtitle
{
padding: 4px 0px 5px 0px;
margin: 0px 22px;
font-weight: 600;
font-size: 12px;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts_Light") %>,Segoe UI Semibold, Arial, Sans-serif;
}

div.lost-flyout-subtitle
{
padding: 4px 20px 5px 20px;
margin: 16px 0px 0px 0px;
}

div.won-lost-attribute-label,
div.won-lost-statusreason-label,
div.delete-flyout-label
{
font-size: 12px;
font-family: Segoe UI, Arial, Sans-serif;
color:#666666;
padding: 12px 22px 3px 22px
}

div.won-lost-statusreason-label
{
padding-top: 0px;
padding-bottom: 0px;
}

div.won-lost-inline-edit-control
{
width: 295px;
}

div.won-lost-attribute-description-label
{
height: 60px;
}
div.productgridflyout li
{
cursor:pointer;
padding:0px 10px;
font-size:12px;
height:24px;
line-height:24px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
div.productgridflyout li:hover
div.productgridflyout li:focus
{
background:#D7EBF9;
}
.ui-flyout-dialog #ProductFlyout.ui-dialog-content
{
padding:1px;
overflow-y: hidden;
}
div.articleSearchMenu li:hover
{
background:#D7EBF9;
}

.ui-flyout-dialog .ui-dialog-content-Process-Configurator
{
overflow: hidden;
}

div.ui-dialog-Process-Configurator
{
margin-top: -350px;
margin-left: -400px;
}

.ui-dialog-Process-Configurator .ui-dialog-titlebar
{
position: relative;
padding-top: 25px;
padding-left: 35px;
padding-bottom: 10px;
padding-right: 10px;
}

.ui-dialog-Process-Configurator .ui-dialog-title
{
line-height:1;
}

.ui-dialog-Process-Configurator .ui-dialog-titlebar .ui-dialog-Process-Configurator-Main-Heading
{
font-size: 36px;
color: #262626;
font-family: Segoe UI, Arial, Sans-serif;
}

.ui-dialog-Process-Configurator .ui-dialog-titlebar .ui-dialog-Process-Configurator-Sub-Heading
{
font-size: 26px;
color: #000000;
font-family: Segoe UI, Arial, Sans-serif;
}

.ui-dialog-Process-Configurator .ui-dialog-titlebar .ui-dialog-Process-Configurator-Help-Button
{
position: absolute;
top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 10px;
<% if (CrmStyles.LocaleId != 1037) { %>
<%= FlipImage("h") %>
<% } %>
<% } else { %>
right: 10px;
<% } %>
}

.ui-dialog-Process-Configurator .ui-dialog-Process-Configurator-Button-Pane
{
margin: 0px 35px;
padding: 0px;
border-top: 1px solid #859CC2;
background-color: #FFFFFF;
}

.ui-dialog-Process-Configurator .ui-dialog-Process-Configurator-Button-Pane button
{
background-color: #FFFFFF;
margin: 0px 0px 0px 10px;
height:25px;
}

.ui-dialog-Process-Configurator .ui-dialog-Process-Configurator-Button-Pane button div
{
min-width:100px !important;
}

.ui-dialog-Process-Configurator .ui-dialog-Process-Configurator-Button-Pane .ui-dialog-buttonset
{
margin: 20px 0px;
}


.ui-dialog-Process-Configurator-Loading-Div
{
position: absolute;
top: 50%;
left: 50%;
margin-top: -35px;
margin-left: -25px;
text-align: center;
}

.ms-crm-ProcessSwitcher-Flyout
{

margin-left: -300px;

top: 50%;
left: 50%;
}

.ms-crm-ProcessSwitcher-Flyout .ui-dialog-titlebar
{
padding-top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 40px;
padding-right: 30px;
<% } else { %>
padding-left: 30px;
padding-right: 40px;
<% } %>
}

.ms-crm-ProcessSwitcher-Flyout .ui-dialog-content
{
padding-left: 30px;
padding-right: 30px;
}

.ms-crm-ProcessSwitcher-Flyout .ui-dialog-title
{
font-family: Segoe UI Light;
font-size: 36px;
color: #262625;
word-wrap: break-word;
}

.ms-crm-ProcessSwitcher-Flyout .ui-dialog-buttonset .ui-button
{
height: 23px;
min-width: 70px;
}

.ms-crm-ProcessSwitcher-Flyout .ui-dialog-buttonset
{
padding-right: 16px;
}

.ms-crm-ProcessSwitcher-Flyout .ui-dialog-buttonset .ui-button-text
{
min-width: 60px;
padding: 0px 5px;
}

.ms-crm-ProcessSwitcher-Flyout .ui-dialog-titlebar .ui-dialog-titlebar-close
{
top: 20px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 20px;
<% } else { %>
right: 20px;
<% } %>
}

.ms-crm-ProcessSwitcher-Subtitle
{
text-overflow: ellipsis;
}

.ms-crm-ProcessSwitcher-ProcessListBorder
{
border-color: #CDCDCD;
<% if (CrmStyles.IsRightToLeft) { %>
margin: 0px 0px 0px 5px;
<% } else { %>
margin: 0px 5px 0px 0px;
<% } %>
}

.ms-crm-ProcessSwitcher-ProcessList
{
height: 100%;
overflow-y: auto;
border-top: 1px solid #CDCDCD;
border-bottom: 1px solid #CDCDCD;
margin-top: 20px;
}

.ms-crm-ProcessSwitcher-Process
{
padding-top: 7px;
padding-bottom: 12px;
cursor: pointer;
}

.ms-crm-ProcessSwitcher-Process > input
{
margin: 5px 0px 0px 5px;
padding: 0px;
}

.ms-crm-ProcessSwitcher-Process-Selected
{
background: #F3D9A8;
}

.ms-crm-ProcessSwitcher-Radio
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
width: 14px;
}

.ms-crm-ProcessSwitcher-ProcessTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px;
padding-left: 80px;
<% } else { %>
padding-left: 8px;
padding-right: 80px;
<% } %>
padding-top: 2px;
}

.ms-crm-ProcessSwitcher-ProcessTitle
{
font-family: Segoe UI Semibold;
font-size: 14px;
color: #444444;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.ms-crm-ProcessSwitcher-ProcessDescription
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 27px;
padding-left: 84px;
<% } else { %>
padding-left: 27px;
padding-right: 84px;
<% } %>

margin-top: 6px;
margin-bottom: 0px;

line-height: 15px;
word-wrap: break-word;
}

div.dupWarnFlyout-attribute-label
{
font-size: 12px;
font-family: Segoe UI, Arial, Sans-serif;
color:#666666;
margin: 12px 2px 12px 30px;
display: inline-block;
vertical-align: middle;
}

div.dupWarnFlyout-warning-text
{
font-size: 12px;
font-family: Segoe UI, Arial, Sans-serif;
color:#666666;
padding: 30px 30px 5px 30px;
}

div.dupWarnFlyout-action-text
{
font-size: 12px;
font-family: Segoe UI, Arial, Sans-serif;
color:#666666;
padding: 10px 30px 30px 30px;
}

div.dupWarnFlyout-control-container
{
padding: 0px 0px 0px 0px
}

table.dupWarnFlyout-table
{
width: 100%;
table-layout: auto;
padding-left: 0px;
}

div.dupWarnFlyout-EmptyValue
{
text-transform: lowercase;
color: #1160b7;
font-style: italic;
min-width: 120px;
}

div.dupWarnFlyout-inline-edit-control
{
display:inline-block;
vertical-align:middle;
width: 200px;
}

.li-selectedflyoutbutton
{
background-color: #D7EBF9;
border-color: #D7EBF9;
}

.ui-widget-overlay-flyout
{
top: 0;
left: 0;
position: fixed;
opacity: 0;



filter: alpha(opacity=0);
background-image: url("/_imgs/imagestrips/transparent_spacer.gif");
}

.ui-widget-overlay-flyout-dark
{
background: #000000;
opacity: .35;


filter: alpha(opacity=.35);
}

.QuickContactCss div.ui-dialog-content
{
position: relative;
overflow: auto;
overflow-x: hidden;
padding: 0px;
margin: 1px 5px -20px 5px;
zoom: 1;
}

.FullNameCompositeCss div.ui-dialog-content
{
min-height: 95px !important;
}

.QuickContactCss .ui-dialog-content Table.ms-crm-FormSection td.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print
{
word-wrap: break-word;
vertical-align:top;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
position : relative;

height:160px !Important;
}

.QuickContactCss .ui-dialog-content Table.ms-crm-FormSection td.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print
div.ms-crm-QuickForm div.ms-crm-Form-Common-Dummy div.ms-crm-FormBodyContainer
{
position : relative;
top: -4px;
}

.CaseResolveCss div.ui-dialog-content
{
position: relative;
overflow: auto;
overflow-x: hidden;
padding: 0px;
margin: 1px 5px -22px 5px;
zoom: 1;
}

.CaseResolveCss .ui-dialog-content Table.ms-crm-FormSection td.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print div.ms-crm-QuickForm
{
position : relative;
}

.CaseResolveCss .ui-dialog-content Table.ms-crm-FormSection td.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print
div.ms-crm-QuickForm div.ms-crm-Form-Common-Dummy div.ms-crm-FormBodyContainer
{
position : relative;
top: -4px;
}

.QuickCaseCss div.ui-dialog-content
{
position: relative;
padding: 3px 9px 3px 9px;
overflow: auto;
overflow-x: hidden;
zoom: 1;
}

.CaseResearchCss div.ui-dialog-content
{
overflow: hidden !Important;
}

.CaseResearchCss div.ms-crm-ListArea-FixedRow-Lite
{
margin-top: 14px;
}

.CaseResearchCss div.ms-crm-ListArea div
{
height:100% !Important;
}

.CaseResearchCss div.ms-crm-grid-databodycontainer-Ex
{
margin-top: 5px;
}
.CaseResearchCss div.ui-dialog-content div.ms-crm-FormSection-Container Table.ms-crm-FormSection
{
padding-left: 0px;
padding-right: 0px;
padding-top: 15px;
}

.CaseResearchCss div.ui-dialog-titlebar
{
padding-right: 14px;
padding-left: 14px;
padding-top : 14px;
}

.CaseResearchCss div.ui-dialog-titlebar a.ui-dialog-titlebar-close
{
top: 14px;
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
left: 14px;
<% } else { %>
float: right;
right: 14px;
<% } %>
}

.CaseResearchCss div.ui-dialog-buttonpane
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 14px;
<% } else { %>
padding-left: 14px;
<% } %>
}

div.CaseResearchCss
{
border: 1px solid #0072c6 ;
}

.CaseResearchCss div.ui-dialog-content div.ms-crm-FormSection-Container Table.ms-crm-FormSection
td.ms-crm-Field-Data-Print div.ms-crm-Field-Data-Print .tabsControl
{
padding-left:0px !Important;
padding-right: 0px !Important;
}
.subjecttree-Dialog div.ui-dialog-content
{
margin-bottom: auto;
overflow-x : visible !Important;
overflow-y : auto !Important;
min-width: 210px;
padding-left: 0px;
padding-right: 0px;
}
.subjecttree-Dialog { overflow: auto;}

div.mscrm-globalqc-parentdiv
{
height: 37px;
position: absolute;
background-color: #ffffff;
box-shadow: 0px 0px 1em black;
}

.ms-crm-HighContrastMode-Border
{
border: 1px solid;
border-color: #FFFFFF;
}

div.mscrm-globalqc-entitycrossdiv
{
min-height: 37px;
}

img.mscrm-globalqc-loadingBar
{
margin-left: auto;
margin-right: auto;
display: block;
visibility: visible;
background-color: #ffffff;
}

div.mscrm-globalqc-entityname
{
max-width: 400px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-right: 23px;
<% } else { %>
float: left;
margin-left: 23px;
<% } %>
overflow: hidden;
text-overflow: ellipsis;
font-size: 21px;
font-family: "Segoe UI" , "Segoe" , Tahoma, Helvetica, Arial, sans-serif;
color: #262626;
}

div.mscrm-globalqc-cross
{
height: 37px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 40px;
<% } else { %>
float: right;
margin-right: 40px;
<% } %>
}

a.mscrm-globalqc-cross
{
height: 20px;
width: 20px;
top: 11px;
position: absolute;
}

a.mscrm-globalqc-cross:hover
{
background-color: #d7ebf9;
}

img.mscrm-globalqc-cross
{
padding: 2px;
}

div.mscrm-globalqc-cleardiv
{
clear: both;
}

div.mscrm-globalqc-errormessage
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 25px;
padding-right:8px;
<% } else { %>
margin-left: 25px;
padding-left:8px;
<% } %>
margin-right: 23px;
padding-top: 7px;
padding-bottom: 5px;
color: #666666;
font-size: 11px;
font-family: "Segoe UI" , "Segoe" , Tahoma, Helvetica, Arial, sans-serif;
font-color:#444444;
height:16px;
background-color:#FFF19D;
outline:1px solid #DDDDDD;

}

span.mscrm-globalqc-warningmessage
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
}

div.mscrm-globalqc-containerdiv
{
position: absolute;
background-color: #ffffff;
box-shadow: 0px 0px 1em black;
padding-top:5px;
}

iframe.mscrm-globalqc-iframe
{
width: 100%;
border: 0px;
}

div.mscrm-globalqc-actionsdiv
{
bottom:				0px;
width:				100%;
min-width:			288px;

height:				44px;
background-color: #f8f8f8;

<% if (CrmStyles.IsRightToLeft) { %>
text-align:			left;
<% } else { %>
text-align:			right;
<% } %>
}

.mscrm-globalqc-actionbutton
{
width:				auto;
min-width:			80px;
height:				24px;
margin-top:			10px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		11px;
<% } else { %>
margin-left:		11px;
<% } %>
font-size:			11px;
font-family:		"Segoe UI" , "Segoe" , Tahoma, Helvetica, Arial, sans-serif;
border:				1px solid #C6C6C6;
background-image:	none;
}

.mscrm-globalqc-actionbutton-last
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:		23px;
<% } else { %>
margin-right:		23px;
<% } %>
}
