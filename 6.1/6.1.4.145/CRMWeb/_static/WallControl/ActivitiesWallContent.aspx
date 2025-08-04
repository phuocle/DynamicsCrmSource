<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Controls.ActivitiesControl.ActivitiesWallPage" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>


<div id="activitiesWallElementContainer" class="activitiesWallCell">
<div id="wall" class="acwall">
<div id="header" class="header">
<div class="filterAndRefreshContainer">
<div class="wallActionsContainer">
<div class="refreshDiv">
<a id="refreshAllLink" class="refreshPostsLink" href="#" tabindex="3" title="Refresh the window">
<img class="refreshImage" alt="Refresh the window" src="/_imgs/refresh.png" />
<span class="refreshLabel">
</span>
</a>
</div>
</div>
</div>
</div>
<script id="emptyMessage" type="text/html">
<div id="messageContainerSeperator" class="emptyMessageSeparator"> <hr> </div>
<div id="messageContainer" class="emptyMessage">{{html message}}</div>
</script>
<script id="postTemplate" type="text/html">
<div id="${postId}" class="post" title="{{html text}}" style="cursor:pointer;" createdby="{{html createdBy}}" createdon="{{html createdOn}}" objecttypecode="{{html objectTypeCode}}" statecode="{{html state}}" entitylogicalname="{{html entityLogicalName}}" >
<div class="userThumbnailArea">
<div class="userThumbnail">
<div class="iconThumbnail"  objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}">
<a href="#" tabindex="-1">
{{html imageSource}}
</a>
</div>
</div>
</div>
{{if objectTypeCode == Mscrm.EntityTypeCode.PhoneCall}}
<div id="${postId}_firstDIV" class="wallbody" >
<a href="#"  title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
{{if directionCode}}
{{if to}}
<div class="acTitle">
{{each to}}
<span> {{html partyName}} </span>
{{if to.length > 1 }};{{/if}}
{{/each}}
</div>
{{else}}
<div class="acTitle" >{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.SENDER_NOT_FOUND_MESSAGE_LOC_STRING) }}</div>
{{/if}}
{{else}}
{{if from}}
<div id="${postId}_callwithname" class="acTitle" >{{html from[0].partyName}}</div>
{{else}}
<div class="acTitle" >{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.SENDER_NOT_FOUND_MESSAGE_LOC_STRING) }}</div>
{{/if}}
{{/if}}
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
</div>
{{if description == null || description == " "}}
{{if scheduledEnd == null || scheduledEnd == "" }}
<div id="${postId}_expandedaccordion" class="collapsedaccordion">
<div class="noDescription"></div>
{{else}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion" entitylogicalname="{{html entityLogicalName}}">
{{/if}}
{{if leftVoicemail == true}}
<div>{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.LEFT_VOICE_MAIL_MESSAGE_LOC_STRING) }}</div>
{{/if}}
{{else}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion">
{{if leftVoicemail == true}}
<div>{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.LEFT_VOICE_MAIL_MESSAGE_LOC_STRING) }}</div>
{{/if}}
<div class="expandedAttributeDescription">{{html description}}</div>
{{/if}}
<div class="clear"></div>
{{if scheduledEnd}}
<div class="clear"></div>
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
{{/if}}
</div>
{{tmpl "#lastDivTemplate"}}
{{else objectTypeCode == Mscrm.EntityTypeCode.Email}}
<div id="${postId}_firstDIV" class="wallbody" >
<a href="#"  title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
{{if from}}
<div id="${postId}_Sendername" class="acTitle" >{{html from[0].partyName}}</div>
{{else}}
<div class="acTitle" >{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.SENDER_NOT_FOUND_MESSAGE_LOC_STRING) }}</div>
{{/if}}
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
<div id="${postId}_text" class="acSubject">{{html text}}</div>
</div>
<div id="${postId}_expandedaccordion" class="emailexpandedaccordion" >
<div class="firstAttributeSpacer"></div>
<div style="display: table">
<div style="display: table-row">
<div class="expandedAttributeName" style="display: table-cell">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.TO_LOC_STRING) }}</div>
{{if to}}
<div class="expandedAttributeValue" style="display: table-cell">{{each(i, value) to}}
{{tmpl(value) "#activitypartyTemplate"}};{{/each}}
</div>
{{/if}}
</div>
<div class="clear"></div>
{{if cc}}
<div style="display: table-row">
<div class="expandedAttributeName" style="display: table-cell">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CC_LOC_STRING) }}</div>
<div class="expandedAttributeValue" style="display: table-cell">{{each(i,value) cc}}
{{tmpl(value) "#activitypartyTemplate"}};{{/each}}
</div>
</div>
<div class="clear"></div>
{{/if}}
</div>
<div class="emailContentSeparator"></div>
{{if isUnsafe == "True"}}
{{tmpl "#EmailNotificationTemplate"}}
{{/if}}
{{if description == null || description == " "}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion" entitylogicalname="{{html entityLogicalName}}"> </div>
{{else}}
<div class="expandedAttributeDescription" style="width: 100%;">
<div class="emailContentDiv" style="display:none;">{{html CrmEncodeDecode.CrmHtmlEncode(ActivitiesWall.UI.ActivitiesWall.fixDomStructure(description)) }}</div>
<iframe class="emailContentFrame" frameborder ="0" style="width: 100%; border: 0px;"></iframe>
</div>
{{/if}}
</div>
{{if scheduledEnd}}
<div id="${postId}_duedate" class="duedate" >
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
</div>
{{/if}}
<div id="${postId}_lastDIV" class="lastDiv" >
<div class="acDetails">{{html modifiedOn}}</div>
</div>

{{else objectTypeCode == Mscrm.EntityTypeCode.Task}}
<div id="${postId}_firstDIV" class="wallbody">
<a href="#" tabindex="-1" title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
<div id="${postId}_text" class="acTitle">{{html text}}</div>
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
</div>
{{if description == null || description == " "}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion" entitylogicalname="{{html entityLogicalName}}">
{{else}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion">
<div class="expandedAttributeDescription">{{html description}}</div>
{{/if}}

{{if scheduledEnd}}
<div class="clear"></div>
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
{{/if}}

{{if priority}}
<div class="clear"></div>
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.PRIORITYCODE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html priority}}</div>
{{/if}}
</div>
{{tmpl "#lastDivTemplate"}}

{{else objectTypeCode == Mscrm.EntityTypeCode.SocialActivity}}
<div id="${postId}_firstDIV" class="wallbody">
<a href="#" tabindex="-1" title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
<div id="${postId}_text" class="acTitle">{{html text}}</div>
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
</div>
<div id="${postId}_expandedaccordion" class="emailexpandedaccordion" >
<div class="firstAttributeSpacer"></div>
{{if socialPostContent == null || socialPostContent == " "}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion" style="margin-left:0px;margin-right:0px" entitylogicalname="{{html entityLogicalName}}">
{{else}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion" style="margin-left:0px;margin-right:0px">
<div class="expandedAttributeDescription">{{html socialPostContent}}</div>
{{/if}}
</div>
{{if postUrl}}
<div class="clear"></div>
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode('Post URL') }}</div>
<div class="expandedAttributeValue">
<a href="#" title="{{html postUrl}}" onclick="window.open('{{html CrmEncodeDecode.CrmHtmlEncode(postUrl) }}', '_blank')">
<span class="clickableOwner">{{html CrmEncodeDecode.CrmHtmlEncode(postUrl)}}</span>
</a>
</div>
{{/if}}
</div>
{{tmpl "#lastDivTemplate"}}

{{else}}
<div id="${postId}_firstDIV" class="wallbody" >
<a href="#"  title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
<div id="${postId}_text" class="acTitle">{{html text}}</div>
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
</div>
{{if description == null || description == " "}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion" entitylogicalname="{{html entityLogicalName}}">
{{if scheduledEnd == null || scheduledEnd == "" }}
<div class="noDescription"></div>
{{/if}}
{{else}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion">
<div class="expandedAttributeDescription">{{html description}}</div>
{{/if}}

{{if scheduledEnd}}
<div class="clear"></div>
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
{{/if}}
</div>
{{tmpl "#lastDivTemplate"}}
{{/if}}
</div>

</script>
<script id="ActionsTemplate" type="text/html">
<div id="postActions_${postId}" class ="postAction">
{{if objectTypeCode != Mscrm.EntityTypeCode.Email && objectTypeCode != Mscrm.EntityTypeCode.SocialActivity}}
<div id="MarkCompleteAction_${postId}" class="markcomplete" entityid="{{html postId}}" entitylogicalname="{{html entityLogicalName}}" statecode="{{html state}}" objecttypecode="{{html objectTypeCode}}">
<a href="#" tabindex="-1" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COMPLETE_BUTTON_TOOLTIP)}}">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COMPLETE_BUTTON_TEXT) }}</a>
</div>
<div class="ActionSeperator" statecode="{{html state}}">
<img alt="" id="activitieswall_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif">
</div>
{{/if}}
<div id="openRecordAction_${postId}" class="openrecord" objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}" >
<a href="#" tabindex="-1" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}">
<img id="activitieswall_EditPost" class="ms-crm-ImageStrip-activitieswall_EditPost" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}"  src="/_imgs/imagestrips/transparent_spacer.gif" onmouseover="this.className='ms-crm-ImageStrip-activitieswall_EditPostHover'" onmouseout="this.className='ms-crm-ImageStrip-activitieswall_EditPost'"
</a>
</div>
<div class="ActionSeperator" statecode="Open">
<img alt="" id="activitieswall_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif">
</div>
<div id="expandIcon_${postId}" class="expandIcon">
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_ICON_TOOL_TIP)}}">
<img id="activitieswall_Expand_16" class="ms-crm-ImageStrip-activitieswall_Expand_16" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_ICON_TOOL_TIP)}}" src="/_imgs/imagestrips/transparent_spacer.gif" onmouseover="this.className='ms-crm-ImageStrip-activitieswall_Expand_Hover_16'" onmouseout="this.className='ms-crm-ImageStrip-activitieswall_Expand_16'">
</a>
</div>
<div id="expandIcon_${postId}" class="collapseIcon">
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_ICON_TOOL_TIP)}}">
<img id="activitieswall_Collapse_16" class="ms-crm-ImageStrip-activitieswall_Collapse_16" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_ICON_TOOL_TIP)}}" src="/_imgs/imagestrips/transparent_spacer.gif" onmouseover="this.className='ms-crm-ImageStrip-activitieswall_Collapse_Hover_16'" onmouseout="this.className='ms-crm-ImageStrip-activitieswall_Collapse_16'">
</a>
</div>
<div class="clear"></div>
</div>
</script>
<script id="InlineErrorMessage" type="text/html">
<div id="inlineerrormessage" class = "inlineerrormessage">
<img src="/_imgs/imagestrips/transparent_spacer.gif" alt="" class="ms-crm-ImageStrip-activitieswall_Warning" id="activitieswall_Warning"/>
<div id="errormessage" class ="errormessage">{{html message}}</div>
</div>
</script>
<script id="showMoreLinkTemplate" type="text/html">
<a class="showMoreLink" href="#" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_SHOWMORE_TOOLTIP) }}">
<div class="textAndArrow" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_SHOWMORE_TOOLTIP) }}">
<div class="arrow">
<img id="activitieswall_SeeMoreArrow" class="ms-crm-ImageStrip-activitieswall_SeeMoreArrow" src="/_imgs/imagestrips/transparent_spacer.gif" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_SHOWMORE_TOOLTIP) }}"></img>
</div>
<div class="text">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_SHOWMORE_TEXT) }}</div>
</div>
<img id="activitieswall_Progressbar" class="ms-crm-ImageStrip-activitieswall_Progressbar" src="/_imgs/imagestrips/transparent_spacer.gif" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_SHOWMOREPROGRESS_ALT) }}" />
</a>
</script>
<script id="lastDivTemplate" type="text/html">
{{if objectTypeCode == Mscrm.EntityTypeCode.SocialActivity}}
<div id="${postId}_lastDIV" class="lastDiv" >
{{if postFromProfileId != null }}
<div class="postedBy">
<span>{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_POSTED_BY_LOC_STRING) }}</span>
</div>
<div class="profileDetails">
<a href="#" title="{{html postFromProfileId.name}}" onclick="Wall.Control.Utils.WindowUtils.openObject({{html postFromProfileId.typecode}},'{{html postFromProfileId.id}}'); return false;">
<span class="clickableOwner">{{html postFromProfileId.name}}</span>
</a>
</div>
{{/if}}
<div class="postedOnDate">{{html modifiedOn}}</div>
<div class="clear"></div>
<div class="sentimentValue">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_SENTIMENT_VALUE_LOC_STRING) }} {{html sentimentValue}}</div>
{{if postMessageType != null }}
<div class="postMessageType">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_POSTED_AS_LOC_STRING) }} {{html postMessageType}}</div>
{{/if}}
<div class="clear"></div>
</div>
{{else}}
<div id="${postId}_lastDIV" class="lastDiv" >
<div class="modifiedBy">
<span>{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_MODIFIED_BY_LOC_STRING) }}</span>
</div>
<div class="completedBy">
<span>{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_COMPLETED_BY_LOC_STRING) }}</span>
</div>
<div class="canceledBy">
<span>{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_CANCELED_BY_LOC_STRING) }}</span>
</div>
<div class="acDetails">
<a href="#" title="{{html modifiedBy.name}}" onclick="Wall.Control.Utils.WindowUtils.openObject({{html modifiedBy.typecode}},'{{html modifiedBy.id}}'); return false;">
<span class="clickableOwner">{{html modifiedBy.name}}</span>
</a>
</div>
<div class="you">
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_YOU)}}" onclick="Wall.Control.Utils.WindowUtils.openObject(${Mscrm.EntityTypeCode.SystemUser}, '${Xrm.Page.context.getUserId()}'); return false;">
<span class="clickableOwner">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_YOU)}}</span>
</a>
</div>
<div class="modifiedOnDate">{{html modifiedOn}}</div>
<div class="clear"></div>
</div>
{{/if}}
</script>
<script id="EmailNotificationTemplate" type="text/html">
<div id="emailnotification" class = "emailnotification">
<img id="activitieswall_Warning" class="ms-crm-ImageStrip-activitieswall_Warning" src="/_imgs/imagestrips/transparent_spacer.gif" alt="" />
<div id="warningmessage" class ="warningmessage">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMAIL_BADCONTENT_WARNING_LOC_STRING) }}</div>
</div>
</script>
<script id="activitypartyTemplate" type="text\html">
{{if partyID}}
<a href="#" onclick="Wall.Control.Utils.WindowUtils.openObject({{html partyObjectTypeCode}},'{{html partyID}}'); return false;" title="{{html partyName}}">
<span class="clickable">
{{html partyName}}</span></a>
{{else}}
<span class="unresolvedparty">{{html partyName}}</span>
{{/if}}
</script>
<div id="wallContainer" class="wallContainer">
</div>
</div>
</div>