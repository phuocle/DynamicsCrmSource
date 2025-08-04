<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


body{
background-color: #FFFFFF;
overflow:auto;
}


@media (min-width:380px){
.app-module-panel{
margin-left: 50px;
margin-right: 50px;
}
}

@media (max-width:380px){
.app-module-panel{
margin-left: 5px;
margin-right: 5px;
}
}



.tiles-header {
display: inline-block;
color: #333333;
font-size: 23px;
line-height: 100%;
margin-top: 10px;
font-family: Segoe UI, Arial, Sans-Serif;
font-weight: 300;
padding : 10px 0px;
width: calc(100% - 186.6px);
}

.tile-ellipsis {
display: inline-block;
float:right;
font-size: 14px;
font-family: Segoe UI Symbol, Arial, Sans-Serif;
color: #333333;
font-weight:bold;
letter-spacing: 4px;
width:16px;
height:20px;
background-repeat:no-repeat;
}

.tile-ellipsis:before {
content:url('/_imgs/more_16.png');
}

.hide-ellipsis {
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
}

.tiles-createNewApp-container {
display: inline-block;
width: 100%;
}

.tiles-createNewApp-img{
width: 14px;
height: 14px;
overflow: hidden;
vertical-align: top;
padding-right: 6px;
}

.tiles-createNewApp-button {
color: #333333;
max-width: 158.6px;
height: 10px;
font-size: 12px;
margin-top: 10px;
float: right;
font-family: Segoe UI, Arial, Sans-Serif;
font-weight: normal;
border: #cccccc 1px solid;
text-transform: uppercase;
line-height: 100%;
padding: 9px 5px;
cursor: pointer;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.tiles-createNewApp-button:hover {
background:#D7EBF9;
border: #D7EBF9 1px solid;
}







.tile-filters-container {
margin-top: 35px;
display: inline-block;
width: 100%;
line-height: 100%
}

.tile-filters-publishedApps {
display: inline-block;
font-size: 18px;
font-family: Segoe UI, Arial, Sans-Serif;
line-height: 100%;
color: #666666;
cursor: pointer;
}

.tile-filters-draftApps {
display: inline-block;
font-family: Segoe UI, Arial, Sans-Serif;
font-size: 18px;
line-height: 100%;
color:#666666;
cursor: pointer;
}

.tile-filters-active{
color:#000000;
}

.tile-filters-separator{
color: grey;
background-color: grey;
font-size: 15px;
display: inline;
margin-left: 24px;
margin-right: 24px;
border: solid;
border-width: 0px 0px 0px 1px;
}



.tile-group {
padding: 0;
display: inline-block;
width: 100%;
}

.tile-row, .tile-subgroup {
display: inline-block;
width: 100%;
}

.tile-panel {
margin-top: 20px;
}

.tile-button-container{
display: inline-block;
width: 300px;
border: #ECECFB 1px solid;
margin-right: 12px;
height: 100px;
margin-bottom: 12px;
}

.tile-button {
background-color: #ECECFB;
height: 100%;
display: inline-block;
cursor: pointer;
position: relative;
width: 100%;
}
.tile-button-icon {
background-color: #002050;
height: 100px;
width: 100px;
display: inline-block;
position: relative;
}

.tile-button-icon-img{
max-width: 100%;
max-height: 100%;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
word-wrap: break-word;
word-break: break-all;
-ms-word-wrap: break-word;
-ms-word-break: break-all;
}
.tile-button-data {
width: calc(202px - 16px);
display: inline-block;
height: 82px;
vertical-align: top;
margin: 8px 0px 8px 8px;
}
.tile-button-data-title {
font-size: 14px;
font-family: Segoe UI, Arial, Sans-Serif;
font-weight:600;
color:#333333;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
line-height: 17px;
min-height: 17px;
}
.tile-button-data-description {
letter-spacing: -0.3px;
font-size: 14px;
font-family: Segoe UI, Arial, Sans-Serif;
color: #333333;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
line-height: 17px;
min-height: 17px;
}

.tile-button-data-footer {
font-family: Segoe UI, Arial, Sans-Serif;
width: 100%;
bottom:0px;
padding-top: 12px;
}

.tile-button-footer-formfactor{
display: inline-block;
font-family:Segoe UI, Arial, Sans-Serif;
color:#666666;
font-size:12px;
width: calc(100% - 20px);
}

.tile-button-footer-publishdetails{
display: inline-block;
font-family:Segoe UI, Arial, Sans-Serif;
color:#666666;
font-size:12px;
width: calc(100% - 30px);
}

.tile-button-publishername{
max-width: 75px;
overflow:hidden;
white-space: nowrap;
text-overflow: ellipsis;
margin-right: 2px;
float: left;
}

.tile-button-publishedon{
width: 77px;
margin-right: 2px;
margin-left: 2px;
}

.tile-button-supportedclients{
font-family:Segoe UI, Arial, Sans-Serif;
color:#666666;
font-size:12px;
}






.tiles-moreInfoFlyout-container {
position: absolute;
background-color: #FFFFFF;
z-index: 10;
letter-spacing: 0px;
border: #cccccc 1px solid;
display: table;
width: -moz-max-content;
top: 100px;
right: 0;
}

.tiles-moreInfoFlyout-row {
font-size: 12px;
height: 11px;
color: #444444;
font-family: Segoe UI, Arial, Sans-Serif;
padding: 7px 10px 7px 10px;
line-height: 100%;
font-weight:normal;
}

.tiles-moreInfoFlyout-row:hover{
background:#D7EBF9;
}








.ms-crm-RefreshDialog-Header-Desc {
overflow: hidden;
line-height: 15px;
min-height: 15px;
position: relative;
max-height: 45px;
text-align: justify;
}

.ms-crm-RefreshDialog-Header-Desc:before {
content: '...';
position: absolute;
right: 0;
bottom: 0;
background-color: white;
}

.ms-crm-RefreshDialog-Header-Desc:after {
content: '';
position: absolute;
right: 0;
width: 1em;
height: 1em;
background: #FFFFFF;
margin-top: 0.2em;
}



.managerole-rolelabel {
font-size:12px;
font-weight:bold;
font-family: 'Segoe UI', Arial, Sans-Serif;
}

.managerole-appUrlLabel {
font-family: 'Segoe UI', Arial, Sans-Serif;
white-space: nowrap;
}

.managerole-AppURLTextWrap {
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

.managerole-Grid {
position: absolute;
top: 125px;
bottom: 80px;
width: 100%;
height: calc(100% - 120px);
}

.managerole-URLText {
font-family: 'Segoe UI', Arial, Sans-Serif;
max-width:93%;
}

.managerole-fontStyle {
color:#000000;
font-size:12px;
display:inline-block;
width: -moz-max-content;
}

.managerole-appNameTextBox {
width: 300px;
font-family: 'Segoe UI', Arial, Sans-Serif;
}






.display-Loader-Background-Container {
background: #000;
opacity:0.7;
position: fixed;
width: 100%;
height: 100%;
left:0;
top:0;
z-index:1005;
}

.display-Loader-Container {
width: 100%;
height: 100%;
position: fixed;
color: #fff;
z-index:1008;
top:0;
}

.display-Loader-Container p {
font-weight: 300;
font-size: 18px;
margin: 6px;
}




.rtl-model .tiles-header {
float: right;
}

.rtl-model .tiles-createNewApp-button {
float: left;
}

.rtl-model .tile-ellipsis {
float: left;
}

.rtl-model .tile-button-publishername{
float: right;
}

.rtl-model #tileAdminOptionsFlyoutContainerId{
left:0;
right:auto;
}

.rtl-model .tile-button-data{
margin: 8px 8px 8px 0px;
}

.rtl-model .tiles-createNewApp-img{
padding-left:6px;
padding-right:initial;
}




.tile-button-data-description-for-non-admin,.tile-button-data-title-for-non-admin {
letter-spacing: -0.3px;
font-size: 14px;
font-family: Segoe UI, Arial, Sans-Serif;
color: #333333;
overflow: hidden;
line-height: 17px;
min-height: 17px;
position: relative;
max-height: 34px;
text-align: justify;
width: 178px;
padding-right: 8px;
}

.tile-button-data-title-for-non-admin
{
font-weight:600;
}

.tile-button-data-description-for-non-admin
{
padding-top:5px;
}

.tile-button-data-description-for-non-admin:before, .tile-button-data-title-for-non-admin:before {
content: '...';
position: absolute;
right: 0;
bottom: 0;
}

.tile-button-data-description-for-non-admin:after, .tile-button-data-title-for-non-admin:after {
content: '';
position: absolute;
right: 0;
width: 1em;
height: 1em;
background:#ECECFB;
margin-top: 0.2em;
}




.rtl-model .tile-button-data-description-for-non-admin, .rtl-model .tile-button-data-title-for-non-admin
{
padding-right : 0px;
padding-left : 8px;
}

.rtl-model .tile-button-data-description-for-non-admin, .rtl-model .tile-button-data-title-for-non-admin,
.rtl-model .tile-button-data-description-for-non-admin:before, .rtl-model .tile-button-data-title-for-non-admin:before,
.rtl-model .tile-button-data-description-for-non-admin:after, .rtl-model .tile-button-data-title-for-non-admin:after
{
right:initial;
left : 0;
}