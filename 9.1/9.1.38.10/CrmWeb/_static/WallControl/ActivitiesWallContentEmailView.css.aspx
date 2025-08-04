<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
div.acwallEmailView
{
height: 100%;
width:auto;
}

.ie7 div.acwallEmailView
{
height: auto;
}

.ie7 .activitiesWallElementContainer
{
position: relative;
overflow: auto;
}

.acwallEmailView .postArea .tearOffLink img
{
border: 0;
}

.ie7 .acwallEmailView h1.title
{
line-height: 53px;
}

.acwallEmailView .header
{
padding: 0px 0px 0px 0px;
position: relative;
top: 0px;
}

.acwallEmailView .header .postArea
{
margin: 0;
min-height: 22px;
}

.acwallEmailView .header .refreshDiv, .acwallEmailView .header .setDefaultDiv
{
float: right;
margin: 3px 0 0 0;
height: 20px;
color: #8E8D8D;
}

.ie7 .acwallEmailView .header .refreshDiv, .ie7 .acwallEmailView .header .setDefaultDiv
{
width: 16px;
}

.ie7.highContrast .acwallEmailView .header .refreshDiv
{
float: none;
display: inline;
}

.highContrast .acwallEmailView .header .refreshDiv a.refreshPostsLink
{
width: auto;
margin-top: -1px;
height: 16px;
}

.acwallEmailView .header .refreshDiv a.refreshPostsLink img, .acwallEmailView .header .setDefaultDiv a.setDefaultLink img
{
border: 0;
margin: 0;
padding: 0;
}

.acwallEmailView .header .refreshDiv a.refreshPostsLink:hover img
{
margin-top: -11px;
}

.acwallEmailView .header .refreshDiv a.refreshPostsLink img.refreshImage
{
border: 0;
display: none;
}

.acwallEmailView .header .refreshDiv a.refreshPostsLink span.refreshLabel
{
display: none;
}

.highContrast .acwallEmailView .header .refreshDiv a.refreshPostsLink span.refreshLabel
{
display: inline;
width: auto;
}

.highContrast .acwallEmailView .refreshDiv a.refreshPostsLink img.refreshImage
{
display: none;
}

.acwallEmailView .filterAndRefreshContainer
{
margin-top: -23px;
display: block;
}

.ie7 .acwallEmailView .filterAndRefreshContainer
{
padding-top: -20px;
margin-top: 0;
}

.acwallEmailView .filterAndRefreshContainer .wallActionsContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
height: 23px;
}

.acwallEmailView .wallContainer
{
clear: both;
position: relative;
top: 0px;
bottom: 0px;
padding-top: 5px;
}

.acwallEmailView .post
{
padding-bottom: 5px;
padding-top: 15px;
margin-top: 0px;
clear: both;
line-height: 15px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
padding-left: 10px;
<% } else { %>
padding-left: 15px;
padding-right: 10px;
<% } %>
}

.acwallEmailView .post[statecode=Completed],
.acwallEmailView .post[statecode=Canceled],
.acwallEmailView .post[statecode=Closed],
.acwallEmailView .post[statecode=Open]
{
padding-bottom: 5px;
padding-top: 15px;
clear: both;
line-height: 14px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
width: calc(100% - 20px) !important;
}
.acwallEmailView .post[statecode=Completed],
.acwallEmailView .post[statecode=Canceled],
.acwallEmailView .post[statecode=Closed]
{
background-color: #f3f3f3;
margin-bottom: 2px;
}
.emailExpandIcon .post[statecode=Open]
{
padding-bottom: 8px;
padding-top: 8px;
clear: both;
line-height: 15px;
background-color: #ffffff;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 30px;
<% } else { %>
padding-left: 30px;
<% } %>
}

.emailCollapseIcon .post[statecode=Open]
{
padding-bottom: 8px;
padding-top: 8px;
clear: both;
line-height: 15px;
background-color: #f3f3f3;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}


.acwallEmailView .post[objecttypecode="4206"],
.acwallEmailView .post[objecttypecode="4208"]
{
background-color: #E0E0E0;
}

.acwallEmailView .post .body
{
margin: 0 0 0 54px;
min-height: 55px;
}

.acwallEmailView .emailExpandIcon .conversationLoading
{
text-align: center;
left: 0px;
right: 0px;
z-index: 101;
padding: 5px;
background-color: #f3f3f3;
margin: 0 0.5px 0 0.5px;
}

.acwallEmailView .post .userThumbnailArea
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-left: 10px;
<% } else { %>
float: left;
margin-right: 10px;
<% } %>
text-align: center;
}

.acwallEmailView .post .userThumbnail
{
margin-top: 0px;
width:40px;
height: 40px;
}

.acwallEmailView .post .iconThumbnail
{
height: 38px;
width:38px;
border: 1px solid #d1d1d1;
background-color: #F8F8F8;
}

.acwallEmailView .post .userThumbnailArea img
{
border: none;
cursor: pointer;
height: 44px;
width: 44px;
overflow: hidden;
}

.acwallEmailView .post .iconThumbnail a img, .acwallEmailView .post .userThumbnailArea .userThumbnail .iconThumbnail img
{
margin-top: 6px;
border: none;
cursor: pointer;
overflow: hidden;
width: 32px;
height: 32px;
}

.acwallEmailView .post .userName
{
padding: 0 0 0 0;
max-width: 250px;
white-space: nowrap;
font-weight: bolder;
color: #3ba4da;
display: none;
}

.acwallEmailView .post .userName a
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
color: #4e4e4e;
font-weight: normal;
}

.acwallEmailView .post .text
{
display: block;
margin: 0 0 0 0;
max-width: 615px;
overflow: hidden;
color: #757575;
word-wrap: break-word;
}

.acwallEmailView .post .text a
{
font-weight: normal;
}

.acwallEmailView .post .text a div
{
font-weight: normal;
}

.acwallEmailView .post .footer
{
display: block;
color: #686868;
line-height: 22px;
}

.acwallEmailView .post .footer .posted
{
color: #999999;
}

.acwallEmailView .post div.postActions
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

.rtl.ie7 .acwallEmailView .post div.postActions a
{
float: right;
}

.acwallEmailView .post div.postActions a.textAction
{
height: 19px;
padding: 0 7px 0 6px;
color: black;
}

.acwallEmailView .post .userThumbnailArea img, .recordWall .post .userThumbnailArea img
{
overflow: hidden;
}

.acwallEmailView .emailexpandedaccordion
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

.acwallEmailView .emailExpandIcon .post[objecttypecode="4202"]
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px !important;
<% } else { %>
padding-left:15px !important;
<% } %>
margin: 0 0.5px 0 0.5px;
background-color:#F7F7F7;
min-height:40px !important;
}

.rtl .acwallEmailView .emailCollapseIcon img
{
<%= FlipImage("h") %>
}

.rtl .acwallEmailView .emailExpandIcon img
{
<%= FlipImage("h") %>
}

.emailCollapseIcon .post
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px !important;
<% } else { %>
padding-left:5px !important;
<% } %>
}

#activitieswall_emailCollapse, #activitieswall_emailExpand
{
margin-top:15px;
}

.acwallEmailView .expandedaccordion, .acwallEmailView .lastDiv
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 50px;
<% } else { %>
margin-left: 50px;
<% } %>
color: #444444;
height: auto;
overflow: hidden;
clear: both;
}

.acwallEmailView .lastDivEmail
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
color: #444444;
height: auto;
overflow: hidden;
}

.emailbodyContentDiv
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
height: 15px;
padding-top:0px;
color:#505050;
}

.acwallEmailView .collapsedaccordion, .acwallEmailView .duedate
{
overflow: hidden;
position: relative;
color: #000000;
height: 18px;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

.emailExpandIcon .conversationSubject
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
padding-bottom:5px;
padding-top:15px;
}

.emailExpandIcon .acSubject
{
display: none !important;
}

.acwallEmailView .expandedaccordion .noDescription
{
height: 16px;
}

.acwallEmailView .collapsedaccordion[entitylogicalname=task] , .acwallEmailView .collapsedaccordion[entitylogicalname=appointment]
{
height: 21px;
}

.acwallEmailView .collapsedaccordion .expandedAttributeDescription
{
white-space: nowrap;
width: 100%;
overflow: hidden;
word-wrap: normal;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
}
.acwallEmailView .clear
{
clear: both;
}

.acwallEmailView .firstAttributeSpacer
{
padding-top: 2px;
}

.acwallEmailView .expandedAttributeName
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

.acwallEmailView .expandedAttributeValue
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
position: relative;
color: #262626;
line-height: 18px;
margin-top: 3px;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.acwallEmailView .expandedAttributeDescription
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

.acwallEmailView .emailContentSeparator
{
padding-top: 10px;
}

.acwallEmailView .acTitle
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
padding-bottom: 5px;
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

.acwallEmailView .emailExpandIcon .post .acTitle
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
padding-bottom: 5px;
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
line-height:14px;
*margin-top: -15px;
*width: 10%;
}

.acwallEmailView .acTitle .clickable
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
color: #000000;
cursor: pointer;
}

.acwallEmailView .acTitle .clickable:hover
{
text-decoration: underline;
}

.acwallEmailView .acParticipants
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

.acwallEmailView .completedBy,
.acwallEmailView .canceledBy,
.acwallEmailView .modifiedBy,
.acwallEmailView .acDetails,
.acwallEmailView .you,
.acwallEmailView .modifiedOnDate,
.acwallEmailView .posturl,
.acwallEmailView .profileDetails,
.acwallEmailView .sentimentValue,
.acwallEmailView .postMessageType,
.acwallEmailView .postedBy,
.acwallEmailView .postedOnDate
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color: #444444;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
line-height: 18px;
display: flex;
flex-grow: 1;
}

.acwallEmailView .modifiedOnDate
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 0px
<% } else { %>
float: right;
margin-right: 0px
<% } %>

}

.acwallEmailView .acDetailsEmail
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color: #505050;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
line-height: 14px;
padding:1px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 0px;
<% } else { %>
float: right;
margin-right: 0px;
<% } %>
}

.acwallEmailView .acSubject , .acwallEmailView .emailSubject
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #505050;
line-height: 14px;
padding-bottom:5px;
}

.acwallEmailView .emailSubject
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

.acwallEmailView .clickable
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
color: #000000;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
cursor: pointer;
}

.acwallEmailView .clickable:hover
{
text-decoration: underline;
}

.acwallEmailView .clickableOwner
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

.acwallEmailView .clickableOwner:hover, .acwallEmailView .postAction .markcomplete:hover
{
text-decoration: underline;
}

.acwallEmailView .wallbody .modifiedOnDate
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color: #666666;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

.wallbody{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 50px;
<% } else { %>
margin-left: 50px;
<% } %>
outline:none;
}

.acwallEmailView .emptyMessage
{
position:relative;
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color:#9B9B9B;
font-size:<%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
text-align: center;
opacity:1;
padding-left:15px;
padding-right:15px;
font-weight: lighter;
line-height:24px;
padding-top:10px;
}

.acwallEmailView .emptyMessageSeparator hr
{
color: #D6D6D6;
background-color: #D6D6D6;
height: 1px;
border: 0px;
}

.acwallEmailView .showMoreLink
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

.acwallEmailView .showMoreLink img.ms-crm-ImageStrip-activitieswall_Progressbar
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

.acwallEmailView .postAction .markcomplete
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

.acwallEmailView .postAction .markcomplete,
.acwallEmailView .postAction .ActionSeperator,
.acwallEmailView .postAction .openrecord,
.acwallEmailView .postAction .expandIcon,
.acwallEmailView .postAction .collapseIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.acwallEmailView .post .postAction .markcomplete[statecode=Completed],
.acwallEmailView .post .postAction .markcomplete[statecode=Canceled],
.acwallEmailView .post .postAction .markcomplete[statecode=Closed],
.acwallEmailView .post .postAction .ActionSeperator[statecode=Completed],
.acwallEmailView .post .postAction .ActionSeperator[statecode=Canceled],
.acwallEmailView .post .postAction .ActionSeperator[statecode=Closed],
.acwallEmailView .post[statecode=Completed] .modifiedBy,
.acwallEmailView .post[statecode=Canceled] .modifiedBy,
.acwallEmailView .post[statecode=Closed] .modifiedBy,
.acwallEmailView .post[statecode=Open] .completedBy,
.acwallEmailView .post[statecode=Scheduled] .completedBy,
.acwallEmailView .post[statecode=Canceled] .completedBy,
.acwallEmailView .post[statecode=Open] .canceledBy,
.acwallEmailView .post[statecode=Scheduled] .canceledBy,
.acwallEmailView .post[statecode=Closed] .canceledBy,
.acwallEmailView .post[statecode=Completed] .canceledBy,
.acwallEmailView .post .you
{
display: none;
}



.acwallEmailView .postAction .ActionSeperator,.acwallEmailView .postAction .openrecord,.acwallEmailView .postAction .expandIcon, .acwallEmailView .postAction .collapseIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
}

.acwallEmailView .inlineerrormessage
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

.acwallEmailView .inlineerrormessage img,
.acwallEmailView .post .emailexpandedaccordion .emailnotification img
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 6px;
float:right
<% } else { %>
margin-right: 6px;
float:left
<% } %>

}
.rtl .acwallEmailView .showMoreLink img
{
<%= FlipImage("h") %>
}

.acwallEmailView .showMoreLink .text
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>

}

.acwallEmailView .showMoreLink .arrow
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

.acwallEmailView .imageExpandCollapse
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<% } else { %>
padding-left: 0px;
<% } %>
}
.acwallEmailView .showMoreLinkProgress img
{
display: block !important;
}

.acwallEmailView .post .emailnotification
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #FF0000;
height: auto;
overflow: hidden;
padding-top: 20px;
padding-bottom: 10px;
}

.acwallEmailView .post[objecttypecode="4220"]
{
padding-left: 0px;
padding-right: 0px;
}

.acwallEmailView .post .iconThumbnailUntrackEmail
{
height: 44px;
border: none;
background-color: #ffffff;
opacity: 0.5;
margin-left: 5px;
}

.acwallEmailView .untrackEmailPost
{
border: 1px dashed #CCC;
}

.acwallEmailView .acTitleUntrackedEmail .clickable
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
color: #000000;
cursor: pointer;
}

.acwallEmailView .acTitleUntrackedEmail .clickable:hover
{
text-decoration: underline;
}

.acwallEmailView .postAction .trackEmail,
.acwallEmailView .postAction .openrecordUntrackEmail
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.acwallEmailView .untrackedEmail,
.acwallEmailView .untrackedEmailLabel
{
font-family: <%= WebUtility.GetFontResourceForStyle("ActivitiesWall.Font") %>;
color: #AA5D00;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
line-height: 18px;
}

.acwallEmailView .post .iconThumbnailUntrackEmail
{
height: 44px;
border: none;
background-color: #ffffff;
opacity: 0.5;
margin-left: 5px;
}

.acwallEmailView .acTitleUntrackedEmail
{
Color: #999999;
}

.acwallEmailView .untrackEmailPost
{
border: 1px dashed #CCC;
}

.acwallEmailView .acSubjectUntrackEmail
{
white-space: nowrap;
word-wrap: normal;
-o-text-overflow: ellipsis;
overflow: hidden;
text-overflow: ellipsis;
}

.acwallEmailView .acDetailsUntrackedEmail
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

.acwallEmailView  .postAction .trackEmail:hover
{
text-decoration: underline;
}

.acwallEmailView .postAction .trackEmail
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

.acwallEmailView .lastDivUntrackedEmail
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

.acwallEmailView .lastDivEmail_EmailEngagament .emailSentOrOpenParentContianer .emailFollowImageContianer
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

.acwallEmailView .lastDivEmail_EmailEngagament .emailSentOrOpenParentContianer
{
background: #E9E9E9;
border-top-width: 1px;
border-top-style: solid;
min-height: 24px;
padding-right: 12px;
padding-left: 12px;
width :auto;
display: table;
border-collapse: collapse;
border-top-color: #cccccc;

}

.acwallEmailView .lastDivEmail_EmailEngagament .emailSentOrOpenParentContianer .emailSentOrOpenTextContianer
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

.acwallEmailView .lastDivEmail_EmailEngagament
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #444444;
height: auto;
overflow: hidden;
display:flex;
flex-direction:row;
align-items:flex-end;
flex-grow:1;
}
.showMoreLink .textAndArrow
{
height : 20px !important;
}
