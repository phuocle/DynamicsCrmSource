<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.selectEntitiesDialog .ms-crm-RefreshDialog-Warning {
top: 0;
bottom: 0;
right: 0;
left: 0;
}

.selectEntitiesDialog .ms-crm-RefreshDialog-Main-HeaderLess {
bottom: 0px;
}

#selectEntitiesPage {
width: 100%;
height: 100%;
overflow: hidden;
}

#selectEntitiesHeader {
width: 100%;
height: 70px;
padding-top: 5px;
}

#selectEntitiesWarningMessage {
font-size: 13px;
color: #000000;
font-family: Segoe UI;
font-style: regular;
padding: 0px 30px 15px 30px;
word-wrap: break-word;
}

a.selectEntitiesAnchor {
font-size: 13px;
color: #1878c9;
font-family: Segoe UI;
font-style: regular;
text-decoration: underline;
}

.selectEntitiesEntityListText {
font-size: 30px;
vertical-align: middle;
color: #000;
font-family: Segoe UI Light;
padding-top: 10px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 30px;
<% }
   else
   { %>
    padding-left: 30px;
<% } %>
}

.selectEntitiesDropdown{
display: inline-block;
width: 170px;
padding-left: 10px;
padding-bottom: 15px;
vertical-align: middle;
}

.displayInline{
display: inline-block;
}

.selectEntitiesClose {
display: inline-block;
padding: 15px 15px 0px 15px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
}

.selectEntitiesCloseButton {
display: table-cell;
vertical-align: middle;
}

.relationshipTitleText {
padding-left: 0x;
font-size: 22px;
font-family: Segoe UI;
font-style: regular;
font-weight: normal;
color: #1878c9;
}

.helpContainer {
display: none;
float:right;
padding-right: 0px;
padding-top: 5px;
width: 20px;
z-index: 300;
}

.relationshipGrids {
width: 100%;
padding: 0px;
}

.selectEntitiesGridArea {
width: 33%;
padding: 0px;
display: inline-block;
}

.gridOneToN
{
padding-left: 30px;
padding-right: 15px;
}

.gridNToOne
{
padding-left: 15px;
padding-right: 15px;
}

.gridNToN
{
padding-left: 15px;
padding-right: 30px;
}

.selectEntitiesGrid {
padding-top: 5px;
height: 420px;
}

.selectEntities img {
padding: 20px;
}

.indicatorOff {
position: absolute;
display: none;
}

.indicatorOn {
display: block;
visibility: visible;
position: absolute;
z-index: 999;
width: 100%;
height: 100%;
top: 0px;
left: 0px;
text-align: center;
filter: alpha(opacity=75);
opacity: 0.75;
}

.progressImage {
position: absolute;
}

.downloadedTitle {
display: none;
font-size: 27px;
font-family: Segoe UI Light;
text-align: center;
}

.hideCloseButton {
display: none;
}