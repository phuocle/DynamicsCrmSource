<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.ms-crm-flyout-loadingcontent
{
text-align: center;
}

.ms-crm-flyout-loadingcontent img
{
margin-top: 35%;
margin-bottom: 40%;
}

.ms-crm-LinkControl-content
{
display: none;
}

.ms-crm-FormBodyContainer div.ms-crm-Form-Area
{
position: relative;
}

.ms-crm-qoi-productgrid-anchor-link-text
{
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.ui-flyout-dialog
{
position: absolute;
padding: 0px;
width: 300px;
border: 1px solid #D6D6D6;
background-color: #ffffff;
}

.ui-suggestion-flyout-productaddnotification-message
{
height: 20px;
width: inherit;
display: inline-block;
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 32px;
float: right;
<% } else { %>
margin-left: 32px;
float: left;
<%} %>
}

#productaddnotification-div-id
{
margin:10px 0px;
}

.ui-suggestion-flyout-productaddnotification-message-span
{
line-height: 20px;
vertical-align: middle;
text-align: left;
font-family:<% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout.Font")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
color:#666666;
display: inline-block;
<%if(CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<%} %>
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 60px;
}

.ui-suggestion-flyout-productaddnotification-message-span-count
{
line-height: 20px;
vertical-align: middle;
text-align: left;
font-family:<% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout.Font")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-weight:<% = WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
color:#262626;
}

.ui-suggestion-flyout-product-name
{
vertical-align: middle;
font-family: Segoe UI Light, <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout.Font")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.27px.font_size")%>;
color: #444444;
margin-top: 6px;
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
text-align: right;
<% } else { %>
margin-left: 30px;
text-align: left;
<%} %>
}

.ui-suggestion-flyout-productmessagenotification-message
{
height: 30px;
width: inherit;
background: #FFF19D;
border: 1px solid #D7D889;
margin-top: 12px;
}

.ui-suggestion-flyout-productmessagenotification-message-span
{
line-height: 30px;
vertical-align: middle;
font-family:<% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout.Font")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
color:#444444;
display: inline-block;
<%if(CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<%} %>
}

.ui-suggestion-flyout-productmessagenotification-message-warning
{
line-height: 30px;
vertical-align: middle;
padding-left:5px;
padding-right:5px;
}

.ui-suggestion-flyout-productmessagenotification-message-close
{
display: inline-block;
line-height: 30px;
vertical-align: middle;
<%if(CrmStyles.IsRightToLeft) { %>
float: left;
padding-left: 5px;
<% } else { %>
float: right;
padding-right: 5px;
<%} %>
}

.ui-dialog-title
{
color: #666666;
font-size: <%= WebUtility.GetFontResourceForStyle("General.24px.font_size")%>;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.100.font_weight")%>;
}

#ui-dialog-title-ProductSuggestions_LinkControl_flyoutLoadingArea
{
color: #333333;
font-family: Segoe UI Regular, <%= WebUtility.GetFontResourceForStyle("Flyout_Dialog_Title.Font")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.36px.font_size")%>;
text-transform: uppercase;
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% } else { %>
margin-left: 30px;
<%} %>
}

#ui-dialog-title-ProductSuggestions_ProductList
{
width: 185px;
height: 20px;
}

#ui-dialog-title-ProductSuggestions_PicklistName
{
display: inline-block;
width: 80px;
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

.ui-suggestionflyout-dialog-titlebar
{
margin-bottom: 0px !important;
margin-top: 30px !important;
}

.ui-suggestionflyout-dialog-content
{
overflow-y:scroll;
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
<% if (Request.Browser.Browser == "IE") { %>
height:auto !important;
<% } %>
}

#ProductSuggestions_LinkControl_flyoutLoadingArea
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px !important;
<% } else { %>
padding-left: 6px !important;
<% } %>
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
<% if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "InternetExplorer") { %>
height:auto !important;
<% } %>
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
margin-top: 5px;
margin-bottom: 15px;
}

.ui-suggestion-flyout-titlebar
{
line-height: normal;
position: relative;
margin-top: 10px !important;
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 30px;
margin-right: 18px;
<% } else { %>
margin-left: 18px;
margin-right: 30px;
<%} %>
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

<% if (this.IsVisualRefreshEnabled) { %>
.composite-border-callout .ms-crm-FormSection
{
border:none;
}
<% } %>

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
font-size: <%= WebUtility.GetFontResourceForStyle("General.0px.font_size")%>;
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

.composite-callout-top
{
padding: 0px 1px 1px 0px;
margin-top: 8px;
}

.composite-border-callout-top
{
border: 1px solid #D6D6D6;
padding: 1px 1px;
}

.composite-callout-top .composite-notch-top
{
position: absolute;
<%if(CrmStyles.IsRightToLeft) { %>
right: 45px;
<% } else { %>
left: 45px;
<%} %>
top: -10px;
margin: 2px;
border-top: 0;
border-bottom: 8px solid #ffffff;
border-left: 8px solid transparent;
border-right: 8px solid transparent;
padding: 0;
width: 0;
height: 0;
font-size: <%= WebUtility.GetFontResourceForStyle("General.0px.font_size")%>;
line-height: 0;
}

.composite-border-callout-top .composite-border-notch-top
{
border-bottom-color: #D6D6D6;
top: -11px;
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

.ui-suggestion-flyout-dialog-buttonset
{
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 16px !important;
<% } else { %>
margin-right: 16px !important;
<%} %>
}

.ui-suggestion-flyout-dialog-buttonpane button
{
color: #444444 !important;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%> !important;
}

.ui-suggestion-flyout-dialog-buttonpane
{
padding: 1px 4px 0px 4px !important;
}

#ProductSuggestions_LinkControl_flyoutLoadingArea-close
{
<%if(CrmStyles.IsRightToLeft) { %>
left: 28px !important;
<% } else { %>
right: 28px !important;
<%} %>
margin-top: -7px !important;
}


#ProductSuggestions_LinkControl_flyoutLoadingArea_flyOut
{
top: 50% !important;
left: 50% !important;
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
font-size: <% = WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
}

.ui-flyout-dialog .ui-dialog-buttonpane .ui-state-disabled
{
border-color: #E1E1E1;
color: #B1B1B1;
}

.ui-flyout-dialog .ui-dialog-buttonpane .ui-state-hover:hover
{
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
font-size: <% = WebUtility.GetFontResourceForStyle("General.34px.font_size")%>;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.Lighter.font_weight")%>;
margin: 8px 6px 0px 6px;
}

div.won-flyout-subtitle,
div.delete-flyout-subtitle
{
padding: 4px 0px 5px 0px;
margin: 0px 22px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
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
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
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
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
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
font-size: <% = WebUtility.GetFontResourceForStyle("General.36px.font_size")%>;
color: #262626;
font-family: <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
}
.ui-dialog-Process-Configurator .ui-dialog-titlebar .ui-dialog-Process-Configurator-Sub-Heading
{
font-size: <% = WebUtility.GetFontResourceForStyle("General.26px.font_size")%>;
color: #000000;
font-family: <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
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

top: 46%;
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
font-family: <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Light.Font")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.36px.font_size")%>;
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
font-family: <% = WebUtility.GetFontResourceForStyle("ProcessSwitcher_ProcessTitle.Font")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.14px.font_size")%>;
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
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
color:#666666;
margin: 12px 2px 12px 30px;
display: inline-block;
vertical-align: middle;
}

div.dupWarnFlyout-warning-text
{
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
color:#666666;
padding: 30px 30px 5px 30px;
}

div.dupWarnFlyout-action-text
{
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
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
font-style: italic;
min-width: 120px;
}

div.dupWarnFlyout-inline-edit-control
{
display:inline-block;
vertical-align:middle;
width: 200px;
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

.CaseResearchCss div.ms-crm-List-DataBody-Ex
{
height: inherit !Important
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
<% if (this.IsVisualRefreshEnabled) { %>
height:37px;
<% } else { %>
min-height: 37px;
<% } %>
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
overflow: hidden;
text-overflow: ellipsis;
font-size: <% = WebUtility.GetFontResourceForStyle("General.24px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Global_Entity_Name.Font")%>;
<% if (this.IsVisualRefreshEnabled) { %>
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
<% } else {%>
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-right: 23px;
<% } else { %>
float: left;
margin-left: 23px;
<% } %>
<% } %>
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
font-size: <% = WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Global_Entity_Name.Font")%>;
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
font-size:			<% = WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
font-family:		<% = WebUtility.GetFontResourceForStyle("Global_Entity_Name.Font")%>;
<% if (!this.IsVisualRefreshEnabled){ %>
border:				1px solid #C6C6C6;
<% } %>
background-image:	none;
}

.mscrm-globalqc-actionsavebutton
{
width:				auto;
min-width:			80px;
height:				24px;
margin-top:			10px;
background-color:#3380D9;
color:#FFFFFF;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		11px;
<% } else { %>
margin-left:		11px;
<% } %>
font-size:			<% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family:		<% = WebUtility.GetFontResourceForStyle("Global_Entity_Name.Font")%>;
background-image:	none;
}

.mscrm-globalqc-actioncancelbutton
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
font-size:			<% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family:		<% = WebUtility.GetFontResourceForStyle("Global_Entity_Name.Font")%>;
border-width:				1px;
border-style:				solid;
background-color: #FFFFFF;
color:#3380D9;
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
