<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
div.acwall
{
height: 100% !important;
width:auto;
}

.ie7 div.acwall
{
height: 100%;
}

.ie7 .activitiesWallElementContainer
{
position: relative;
overflow: auto;
}

.acwall .postArea .tearOffLink img
{
border: 0;
}

.ie7 .acwall h1.title
{
line-height: 53px;
}

.acwall .header
{
padding: 0px 0px 0px 0px;
position: relative;
top: 0px;
}

.acwall .header .postArea
{
margin: 0;
min-height: 22px;
}

.acwall .header .refreshDiv, .acwall .header .setDefaultDiv
{
float: right;
margin: 3px 0 0 0;
height: 20px;
color: #8E8D8D;
}

.ie7 .acwall .header .refreshDiv, .ie7 .acwall .header .setDefaultDiv
{
width: 16px;
}

.ie7.highContrast .acwall .header .refreshDiv
{
float: none;
display: inline;
}

.highContrast .acwall .header .refreshDiv a.refreshPostsLink
{
width: auto;
margin-top: -1px;
height: 16px;
}

.acwall .header .refreshDiv a.refreshPostsLink img, .acwall .header .setDefaultDiv a.setDefaultLink img
{
border: 0;
margin: 0;
padding: 0;
}

.acwall .header .refreshDiv a.refreshPostsLink:hover img
{
margin-top: -11px;
}

.acwall .header .refreshDiv a.refreshPostsLink
{
display: none;
}

.acwall .header .refreshDiv a.refreshPostsLink img.refreshImage
{
border: 0;
display: none;
}

.acwall .header .refreshDiv a.refreshPostsLink span.refreshLabel
{
display: none;
}

.highContrast .acwall .header .refreshDiv a.refreshPostsLink span.refreshLabel
{
display: inline;
width: auto;
}

.highContrast .acwall .refreshDiv a.refreshPostsLink img.refreshImage
{
display: none;
}

.acwall .filterAndRefreshContainer
{
margin-top: -20px;
display: block;
}

.ie7 .acwall .filterAndRefreshContainer
{
padding-top: -20px;
margin-top: 0;
}

.acwall .filterAndRefreshContainer .wallActionsContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
height: 23px;
}

.acwall .wallContainer
{
position: relative;
top: 0px;
bottom: 0px;
margin-top: 10px;
height:100%;
}

.acwall .post
{
margin-top: 10px;
margin-left: 0px;
margin-right: 0px;
clear: both;
line-height: 15px;
}

.acwall .post[statecode=Completed],
.acwall .post[statecode=Canceled],
.acwall .post[statecode=Closed]
{
padding-bottom: 8px;
padding-top: 8px;
margin-left: 0px;
margin-right: 0px;
clear: both;
line-height: 15px;
background-color: #f3f3f3;
}
.acwall .post[objecttypecode="4206"],
.acwall .post[objecttypecode="4208"]
{
background-color: #E0E0E0;
}

.acwall .post .body
{
margin: 0 0 0 54px;
min-height: 55px;
}


.acwall .post .userThumbnailArea
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-left: 11px;
<% } else { %>
float: left;
margin-right: 11px;
<% } %>
text-align: center;
}

.acwall .post .userThumbnail, .acwall .post .iconThumbnail
{
margin-top: 0px;
min-width: 44px;
height: 46px;
}

.acwall .post .iconThumbnail
{
height: 44px;
background-color: #F8F8F8;
}

.acwall .post .userThumbnailArea img
{
border: none;
cursor: pointer;
height: 44px;
width: 44px;
overflow: hidden;
}

.acwall .post .iconThumbnail a img, .acwall .post .userThumbnailArea .userThumbnail .iconThumbnail img
{
margin-top: 6px;
border: none;
cursor: pointer;
overflow: hidden;
width: 32px;
height: 32px;
}

.acwall .post .userName
{
padding: 0 0 0 0;
max-width: 250px;
white-space: nowrap;
font-weight: bolder;
color: #3ba4da;
display: none;
}

.acwall .post .userName a
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
color: #4e4e4e;
font-weight: normal;
}

.acwall .post .text
{
display: block;
margin: 0 0 0 0;
max-width: 615px;
overflow: hidden;
color: #757575;
word-wrap: break-word;
}

.acwall .post .text a
{
font-weight: normal;
}

.acwall .post .text a div
{
font-weight: normal;
}

.acwall .post .footer
{
display: block;
color: #686868;
line-height: 22px;
}

.acwall .post .footer .posted
{
color: #999999;
}

.acwall .post div.postActions
{
margin-top: -19px;
cursor: pointer;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
line-height: 13px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 3px;
<% } else { %>
margin-right: 3px;
<% } %>
position: relative;
}


@supports (-ms-accelerator:true){
@media screen and (-ms-high-contrast: active){

.ms-crm-ImageStrip-activitieswall_EditPostHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -19px -8px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Expand_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -37px -8px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Collapse_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -1px -32px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Collapse_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -19px -26px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Expand_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -37px -26px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_EditPost{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -1px -50px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Seperator{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -55px -8px;width:1px;height:12px;overflow:hidden;}
}
}

.rtl.ie7 .acwall .post div.postActions a
{
float: right;
}

.acwall .post div.postActions a.textAction
{
height: 19px;
padding: 0 7px 0 6px;
color: black;
}

.acwall .post .userThumbnailArea img, .recordWall .post .userThumbnailArea img
{
overflow: hidden;
}

.acwall .expandedaccordion, .acwall .emailexpandedaccordion, .acwall .lastDiv, .acwall .lastDivUntrackedEmail
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 55px;
<% } else { %>
margin-left: 55px;
<% } %>
color: #444444;
height: auto;
overflow: hidden;
}

.acwall .expandedaccordion .noDescription
{
height: 16px;
}

.acwall .collapsedaccordion, .acwall .duedate
{
overflow: hidden;
position: relative;
color: #000000;
height: 18px;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 55px;
<% } else { %>
margin-left: 55px;
<% } %>
}

.acwall .collapsedaccordion[entitylogicalname=task] , .acwall .collapsedaccordion[entitylogicalname=appointment]
{
height: 21px;
}

.acwall .collapsedaccordion .expandedAttributeDescription
{
white-space: nowrap;
width: 100%;
overflow: hidden;
word-wrap: normal;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
}
.acwall .clear
{
clear: both;
}

.acwall .firstAttributeSpacer
{
padding-top: 2px;
}

.acwall .expandedAttributeName
{
position: relative;
min-width: 50px;
overflow: hidden;
color: #444444;
line-height: 18px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-left: 10px;
<% } else { %>
float: left;
margin-right: 10px;
<% } %>
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
margin-top: 3px;
}

.acwall .expandedAttributeValue
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
position: relative;
color: #262626;
line-height: 18px;
margin-top: 3px;
vertical-align: top;
}

.acwall .expandedAttributeDescription
{
position: relative;
color: #000000;
line-height: 16px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
overflow: hidden;
overflow-x: hidden;
white-space: normal;
word-wrap: break-word;
-webkit-hyphens: auto;
hyphens: auto;

}

.acwall .emailContentSeparator
{
padding-top: 10px;
}

.acwall .acTitle
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
padding-bottom: 2px;
word-break: break-all;
-webkit-hyphens: auto;
white-space: nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 125px;
<% } else { %>
padding-right: 125px;
<% } %>
overflow: hidden;
word-wrap: normal;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
*margin-top: -15px;
*width: 10%;

}
.acwall .acTitle .clickable,
.acwall .acTitleUntrackedEmail .clickable
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
color: #000000;
cursor: pointer;
}

.acwall .acTitle .clickable:hover, .acwall .acTitleUntrackedEmail .clickable:hover
{
text-decoration: underline;
}

.acwall .completedBy,
.acwall .canceledBy,
.acwall .modifiedBy,
.acwall .acDetails,
.acwall .modifiedOnDate,
.acwall .posturl,
.acwall .profileDetails,
.acwall .sentimentValue,
.acwall .postMessageType,
.acwall .postedBy,
.acwall .postedOnDate,
.acwall .acDetailsUntrackedEmail
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color: #444444;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
line-height: 18px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-left: 5px
<% } else { %>
float: left;
margin-right: 5px
<% } %>
}

.acwall .acSubject
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #262626;
line-height: 18px;
margin-bottom: 3px;
}

.acwall .clickable
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
color: #000000;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
cursor: pointer;
}

.acwall .clickable:hover
{
text-decoration: underline;
}

.acwall .clickableOwner
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
cursor: pointer;
line-height: 18px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-left: 5px
<% } else { %>
float: left;
margin-right: 5px
<% } %>
}

.acwall .clickableOwner:hover, .acwall .postAction .markcomplete:hover, .acwall  .postAction .trackEmail:hover
{
text-decoration: underline;
}

.acwall .wallbody .modifiedOnDate
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color: #666666;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

.wallbody{
outline:none;
}

.acwall .emptyBox
{
position: relative;
height: 100%;
width:100%;
}

.acwall .emptyMessageContainer
{
position: absolute;
width: 230px;
height: 127px;
left: 50%;
margin-left: -115px;
right: 50%;
margin-right: -115px;
padding-top: 30%;
}

.acwall .emptyMessage
{
position:relative;
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color:#9B9B9B;
opacity: 1;
font-size:<%= WebUtility.GetFontResourceForStyle("General.18px.font_size") %>;
font-weight: lighter;
line-height: 24px;
letter-spacing: 0px;
text-align: center;
max-height: 72px;
overflow: hidden;
margin-right: -1em;
padding-right: 1em;
}

.acwall .emptyMessage:before
{
content: '...';
position: absolute;
right: 0;
bottom: 0;
}

.acwall .emptyMessage:after
{
content: '';
position: absolute;
right: 0;
width: 1em;
height: 1em;
margin-top: 0.2em;
background-color: white;
}

.rtl .acwall .emptyMessage
{
margin-left: -1em;
padding-left: 1em;
}

.rtl .acwall .emptyMessage:before
{
left: 0;
}

.rtl .acwall .emptyMessage:after
{
left: 0;
}

.acwall .emptyMessageSeparator
{
text-align: center;
margin-bottom: 20px;
}

.acwall .showMoreLink
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 15px;
<% } else { %>
padding-right: 15px;
<% } %>
display:block;
cursor: pointer;
clear: both;
}

.acwall .showMoreLink img.ms-crm-ImageStrip-activitieswall_Progressbar
{
display: none;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
border: 0;
margin: 5px 5px;
}

.acwall .postAction .markcomplete,
.acwall .postAction .trackEmail
{
padding-top: 2px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
width: 60px;
white-space: nowrap;
word-wrap: normal;
overflow: hidden;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
}

.acwall .postAction .markcomplete,
.acwall .postAction .ActionSeperator,
.acwall .postAction .openrecord,
.acwall .postAction .expandIcon,
.acwall .postAction .collapseIcon,
.acwall .postAction .trackEmail,
.acwall .postAction .openrecordUntrackEmail
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.acwall .post .postAction .markcomplete[statecode=Completed],
.acwall .post .postAction .markcomplete[statecode=Canceled],
.acwall .post .postAction .markcomplete[statecode=Closed],
.acwall .post .postAction .ActionSeperator[statecode=Completed],
.acwall .post .postAction .ActionSeperator[statecode=Canceled],
.acwall .post .postAction .ActionSeperator[statecode=Closed],
.acwall .post[statecode=Completed] .modifiedBy,
.acwall .post[statecode=Canceled] .modifiedBy,
.acwall .post[statecode=Closed] .modifiedBy,
.acwall .post[statecode=Open] .completedBy,
.acwall .post[statecode=Scheduled] .completedBy,
.acwall .post[statecode=Canceled] .completedBy,
.acwall .post[statecode=Open] .canceledBy,
.acwall .post[statecode=Scheduled] .canceledBy,
.acwall .post[statecode=Closed] .canceledBy,
.acwall .post[statecode=Completed] .canceledBy,
.acwall .post .you
{
display: none;
}



.acwall .postAction .ActionSeperator,.acwall .postAction .openrecord,.acwall .postAction .expandIcon, .acwall .postAction .collapseIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
}

.acwall .inlineerrormessage
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 55px;
<% } else { %>
margin-left: 55px;
<% } %>
color: #FF0000;
height: auto;
overflow: hidden;
}

.acwall .inlineerrormessage img,
.acwall .post .emailexpandedaccordion .emailnotification img
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 6px;
float:right
<% } else { %>
margin-right: 6px;
float:left
<% } %>

}
.rtl .acwall .showMoreLink img
{
<%= FlipImage("h") %>
}

.acwall .showMoreLink .text
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>

}

.acwall .showMoreLink .arrow
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-right: 2px;
<% } else { %>
float: right;
margin-left: 2px;
<% } %>

width: 10px;
height: 10px;
margin-top: 8px;
margin-bottom: 7px
}

.acwall .showMoreLinkProgress img
{
display: block !important;
}

.acwall .post .emailnotification
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #FF0000;
height: auto;
overflow: hidden;
padding-top: 20px;
padding-bottom: 10px;
}

.acwall .post .iconThumbnailUntrackEmail
{
height: 44px;
border: none;
background-color: #ffffff;
opacity: 0.5;
margin-left: 5px;
}

.acwall .untrackedEmail,
.acwall .untrackedEmailLabel
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color: #AA5D00;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
line-height: 18px;
}

.acwall .acTitleUntrackedEmail
{
Color: #999999;
}

.acwall .untrackEmailPost
{
border: 1px dashed #CCC;
}
.acwall .lastDiv .emailSentOrOpenParentContianer
{
background: #E9E9E9;
border-top-width: 1px;
border-top-style: solid;
min-height: 24px;
padding-right: 12px;
padding-left: 12px;
width :auto;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-right: 2px;
<% } else { %>
float: right;
margin-left: 2px;
<% } %>

display: table;
border-collapse: collapse;
border-top-color: #cccccc;

}

.acwall .lastDiv .emailSentOrOpenParentContianer .emailSentOrOpenTextContianer
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 7px;
<% } else { %>
padding-left: 7px;
<% } %>
margin-top : -4px;
display: table-cell;
vertical-align: middle;
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
color: #d43900;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

.acwall .acSubjectUntrackEmail
{
white-space: nowrap;
word-wrap: normal;
-o-text-overflow: ellipsis;
overflow: hidden;
text-overflow: ellipsis;
}

.acwall .lastDiv .emailSentOrOpenParentContianer .emailFollowImageContianer
{
vertical-align: middle;
}

span.emailSentOrOpenTextContianer:first-child{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 12px !important;
<% } else { %>
padding-left: 12px !important;
<% } %>

}

span.emailSentOrOpenTextContianer:last-child{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 12px;
<% } else { %>
padding-right: 12px;
<% } %>
}

.acwall .acDetailsUntrackedEmail:after{
content: ".";
}

.acwall .messageContainer{
text-align: center;
}

.acwall .messageContainerSeperator{
text-align: center;
}