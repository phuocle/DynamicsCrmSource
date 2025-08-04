<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.dplist-flyout-dialog
{
border: 1px solid #999999 !important;
margin-left:10px;
margin-bottom: 5px;
height: 400px !important;
}

.dplist-flyout-dialog-titlebar
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 32px !important;
<%} else { %>
padding-left: 32px !important;
<%} %>
margin-top: 11px !important;
}

.dplist-flyout-dialog-titlebar-close
{
<%if(CrmStyles.IsRightToLeft) { %>
direction: ltr !important;
left: 32px !important;
<%} else { %>
direction: rtl;
right: 32px !important;
<%} %>
}

.dplist-flyout-dialog-title
{
height: 40px;
width: inherit;
font-family: <% = WebUtility.GetFontResourceForStyle("Flyout_Dialog_Title.Font")%> !important;
font-size: <% = WebUtility.GetFontResourceForStyle("General.27px.font_size")%> !important;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Lighter.font_weight")%> !important;
color: #262626 !important;
}

.dplist-flyout-dialog-content
{
height: 272px !important;
margin-top: 15px;
overflow: hidden !important;
padding-right: 0px !important;
padding-left: 0px !important;
}

.dplist-flyout-dialog-content-temp
{
height: 207px !important;
margin-top: 15px;
overflow: hidden !important;
padding-right: 0px !important;
padding-left: 0px !important;
}

.dplist-flyout-dialog-innerContent
{
overflow: auto !important;
overflow-x: hidden !important;
height: 237px;
position: fixed !important;
width: 800px;
display: block !important;
}

.dplist-flyout-dialog-contentDiv
{
height: inherit !important;
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 17px;
margin-right: 24px;
<%} else { %>
margin-right: 17px;
margin-left: 24px;
<%} %>
}

.dplist-name-column
{

width: 130px;
max-width:130px;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.500.font_weight")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%> !important;
color:#444444;
word-wrap: break-word;
<%if(CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align:left;
<%} %>
}

.dplist-designtime-name-column
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 10px !important;
<% } else { %>
padding-left: 10px !important;
<%} %>
}

.dplist-designtime-name-column-value
{
width: 140px !important;
max-width: 140px !important;
}

.dplist-value-column
{
width: 170px;
max-width:170px;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout_Column.Font")%>;
vertical-align: top;
<%if(CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align:left;
<%} %>
}

.dplist-runtime-value-column
{
width: 170px;
max-width:170px;
}

.dplist-readOnly-column
{
min-width:70px;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout_Column.Font")%>;
<%if(CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-left: 10px;
<%} else { %>
text-align:left;
padding-right: 10px;
<%} %>
}

.dplist-row
{
height: 28px;
}

.dplist-Notifications
{
border: 1px solid #D7D889;
overflow: hidden;
background-color: #FFF19D;
}

.dplist-Notification
{
color: #444444;
display:table-cell;
vertical-align: middle;
height: 50px !important;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%>;
word-wrap: break-word;
}

.dplist-Notifications-strict
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-left: 5px;
margin-left: 32px;
<%} else { %>
padding-right: 5px;
margin-right: 32px;
<%} %>
height: 50px;
display: none;
}

.dplist-Notifications-strict-bottom
{
position: relative;
right: 0px;
left: 0px;
}

.dplist-div-Table-row
{
display:table-row;
}

.dplist-div-Table-cell
{
display:table-cell;
padding-right: 5px;
padding-left: 5px;
padding-top: 17px !important;
}

.dplist-flyout-instruction-text
{
width: inherit;
font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%>;
color: #262626;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
vertical-align: middle;
margin-bottom: 15px;
margin-top: 4px;
}

.dplist-flyout-designtime-instruction-text
{
margin-bottom: 25px !important;
}

.dplist-flyout-dialog-designtime-buttonpane
{
height: 40px;
bottom: 5px !important;
}

.dplist-flyout-dialog-runtime-buttonpane
{
height: 40px;
bottom: 9px !important;
}

.dplist-flyout-dialog-Table
{
margin-top: 0px !important;
}

.dplist-label-Details
{
width: 200px;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%>;
color:#444444;
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 32px !important;
text-align:right;
<%} else { %>
margin-left: 32px !important;
text-align:left;
<%} %>
}

.dplist-design-header-table
{
font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%>;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.500.font_weight")%>;
border-top: 1px solid #c6c6c6;
border-bottom: 1px solid #c6c6c6;
margin-left: 32px;
margin-right: 32px;
}

.dplist-flyout-dialog-buttonset
{
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 18px !important;
<%} else { %>
margin-right: 18px !important;
<%} %>
}

table.dplist-header-table  thead
{
color: rgb(127,127,127) !important;
display: block;
}

.dplist-design-header-table-propertynameColumn
{
width: 182px;
max-width:182px;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%> !important;
<%if(CrmStyles.IsRightToLeft) { %>
border-left: 1px solid #c6c6c6;
padding-right: 12px;
<%} else { %>
border-right: 1px solid #c6c6c6;
padding-left: 12px;
<%} %>
}

.dplist-design-header-table-defaultvalueColumn
{
<%if(CrmStyles.IsRightToLeft) { %>
border-left: 1px solid #c6c6c6;
<%} else { %>
border-right: 1px solid #c6c6c6;
<%} %>
width: 127px !important;
max-width: 127px !important;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%> !important;
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 12px;
text-align: right;
<%} else { %>
padding-left: 12px;
text-align: left;
<%} %>
}

.dplist-design-header-table-editableColumn
{
width: 70px;
max-width:70px;
font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size")%> !important;
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 12px;
text-align: right;
<%} else { %>
padding-left: 12px;
text-align: left;
<%} %>
}

.dplist-table-Inline-Value
{
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 20px !important;
<%} else { %>
margin-left: 20px !important;
<%} %>
white-space: normal;
word-break: break-word;

}

.dplist-table-Inline-Edit
{
<%if(CrmStyles.IsRightToLeft) { %>
margin-right: 20px !important;
margin-left: 2px !important;
<%} else { %>
margin-left: 20px !important;
margin-right: 6px !important;
<%} %>
}

.dplist-table-Inline-Chrome
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 4px !important;
<%} else { %>
padding-left: 4px !important;
<%} %>
}

table.dplist-table
{
max-width:712px;
width:100%;
}