<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Controls.ActivitiesControl.ActivitiesWallPage" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>


<div id="activitiesWallElementContainer" class="activitiesWallCell">

<div id="wall" >

<div id="header" class="header">
<div class="filterAndRefreshContainer">
<div class="wallActionsContainer">
<div class="refreshDiv">
<a id="refreshAllLink" class="refreshPostsLink" href="#" tabindex="3" title="Refresh the window">
<img class="refreshImage" alt="Refresh the window" src="<%= Microsoft.Crm.Application.ContentDelivery.HostBasedContentDeliveryService.GetCDNUrl().TrimEnd('/') + "/_imgs/refresh.png" %>" />
<span class="refreshLabel">
</span>
</a>
</div>
</div>
</div>
</div>

<script id="emptyMessage" type="text/html">
<div class="emptyBox">
<div class="emptyMessageContainer" title="{{html message}}">
<div id="messageContainerSeperator" class="emptyMessageSeparator">
<img src="/_imgs/EmptyStates/activity.png" alt="{{html message}}" class="emptyStatesActivityWallActivities" id="ActivityWallActivitiesTab" />
</div>
<div id="messageContainer" class="emptyMessage">{{html message}}</div>
</div>
</div>
</script>

<script id="postTemplate" type="text/html">
{{if objectTypeCode == Mscrm.EntityTypeCode.UntrackedEmail}}
<div id="${postId}" class="post untrackEmailPost" title="{{html text}}" style="cursor:pointer; min-height: 50px;" createdby="{{html createdBy}}" createdon="{{html createdOn}}" objecttypecode="{{html objectTypeCode}}" statecode="{{html state}}" entitylogicalname="{{html entityLogicalName}}" >
{{else}}
<div id="${postId}" class="post" title="{{html text}}" style="cursor:pointer; min-height: 50px;" createdby="{{html createdBy}}" createdon="{{html createdOn}}" objecttypecode="{{html objectTypeCode}}" statecode="{{html state}}" entitylogicalname="{{html entityLogicalName}}" >
{{/if}}
<div class="userThumbnailArea">
{{if objectTypeCode == Mscrm.EntityTypeCode.UntrackedEmail}}
<div class="userThumbnail" style="padding-right: 13px;margin-left: 2px;">
{{else}}
<div class="userThumbnail">
{{/if}}

{{if objectTypeCode == Mscrm.EntityTypeCode.UntrackedEmail}}
<div class="iconThumbnailUntrackEmail" style="margin-left: 12px;width: 40px;border: 1px solid grey;" exchangeweblink="{{html exchangeweblink}}"  objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}">
<a href="#" tabindex="-1">
{{html imageSource}}
</a>
</div>
{{else}}
<div class="iconThumbnail"  objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}">
<a href="#" tabindex="-1">
{{html imageSource}}
</a>
</div>
{{/if}}
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
<div id="${postId}_text" class="acSubject">{{html text}}</div>
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
{{if description}}
<div class="expandedAttributeDescription">{{html description}}</div>
{{/if}}
{{if leftVoicemail == true}}
<div class="clear"></div>
<div>{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.LEFT_VOICE_MAIL_MESSAGE_LOC_STRING) }}</div>
{{/if}}
{{/if}}
<div class="clear"></div>
{{if scheduledEnd}}
<div class="clear"></div>
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
{{/if}}
</div>
{{tmpl "#lastDivTemplate"}}

{{else objectTypeCode == Mscrm.EntityTypeCode.Email}}

{{if window.IS_EMAIL_CONVERSATION}}
{{tmpl "#emailTemplate"}}

{{else}}

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
<iframe class="emailContentFrame" title="email content" frameborder ="0" style="width: 100%; border: 0px;"></iframe>
</div>
{{/if}}
</div>
{{if scheduledEnd}}
<div id="${postId}_duedate" class="duedate" >
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
</div>
{{/if}}
<div id="${postId}_lastDIV" class="lastDiv" >

{{if window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE}}
{{if isemailfollowed == true && (statusReason == 2 || statusReason == 3)}}
<div class="acDetails">{{html modifiedOn}}</div>
<br/>
<div class ="emailSentOrOpenParentContianer">
<span class="emailSentOrOpenTextContianer"><img alt="Follow Email" src="/_imgs/inlineedit/FollowedEmail_16.png" class="emailFollowImageContianer" /></span>
<span class="emailSentOrOpenTextContianer" arai-label="{{html senton}}" title="{{html senton}}" >{{html senton}}</span>
<span class="emailSentOrOpenTextContianer">.</span>
<span class="emailSentOrOpenTextContianer" arai-label="{{html lastopenedtime}}" title="{{html lastopenedtime}}">{{html lastopenedtime}}</span>
</div>
{{else}}
{{if delayedemailsendtime != null && (statusReason == 1 || statusReason == 6)}}
<div class="acDetails">{{html modifiedOn}}</div>
<br/>
<div class ="emailSentOrOpenParentContianer">
<span class="emailSentOrOpenTextContianer" arai-label="{{html delayedemailsendtime}}" title="{{html delayedemailsendtime}}">{{html delayedemailsendtime}}</span>
</div>
{{else}}
<div class="acDetails">{{html modifiedOn}}</div>
{{/if}}
{{/if}}
{{else}}
<div class="acDetails">{{html modifiedOn}}</div>

{{/if}}
</div>
{{/if}}

{{else objectTypeCode == Mscrm.EntityTypeCode.UntrackedEmail}}
<div id="${postId}_firstDIV" class="wallbody" >
<a href="#"  title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
{{if from}}
<div id="${postId}_Sendername" class="acTitle acTitleUntrackedEmail" >{{html from[0].partyName}}</div>
{{else}}
<div class="acTitle acTitleUntrackedEmail" >{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.SENDER_NOT_FOUND_MESSAGE_LOC_STRING) }}</div>
{{/if}}
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
{{if objectTypeCode == Mscrm.EntityTypeCode.UntrackedEmail}}
<div id="${postId}_text" class="acSubjectUntrackEmail" exchangeweblink="{{html exchangeweblink}}"  objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}">{{html text}}</div>
{{else}}
<div id="${postId}_text" class="acSubject">{{html text}}</div>
{{/if}}
</div>
<div id="${postId}_expandedaccordion" class="emailexpandedaccordion" >
<div class="firstAttributeSpacer"></div>
<div style="display: table">
<div style="display: none">
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
<iframe class="emailContentFrame" title="email content" frameborder ="0" style="width: 100%; border: 0px;"></iframe>
</div>
{{/if}}
</div>
{{if scheduledEnd}}
<div id="${postId}_duedate" class="duedate" >
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
</div>
{{/if}}
<div id="${postId}_lastDIV" class="lastDivUntrackedEmail" >
<div class="acDetailsUntrackedEmail">{{html modifiedOn}}</div>
{{if statuscode_Value==1}}
<div class="untrackedEmailLabel" title={{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TRACK_PENDING_EMAIL_TOOLTIP) }}>
<span>{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TRACK_PENDING_EMAIL_TEXT) }}</span>
{{else}}
<div class="untrackedEmailLabel" title="">
<span>{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_UNTRACKED_EMAIL_TEXT_LOC_STRING) }}</span>
{{/if}}
</div>
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

{{else objectTypeCode == Mscrm.EntityTypeCode.OpportunityClose}}
<div id="${postId}_firstDIV" class="wallbody" >
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlEncode(regardingObjectIdName)}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
<div id="${postId}_text" class="acTitle">{{html String.format("{0}: {1}", CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_OPPORTUNITY_CLOSED_LOC_STRING), CrmEncodeDecode.CrmHtmlEncode(regardingObjectIdName))}}</div>
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
</div>
{{if actualRevenue}}
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACTUALREVENUE_LOC_STRING)}}</div>
<div class="expandedAttributeValue">{{html CrmEncodeDecode.CrmHtmlEncode(actualRevenue)}}</div>
{{/if}}
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
{{if (objectTypeCode == Mscrm.EntityTypeCode.Appointment || objectTypeCode == Mscrm.EntityTypeCode.RecurringAppointmentMaster) && isUnsafe == "True"}}
{{tmpl "#AppointmentNotificationTemplate"}}
{{/if}}
{{if description == null || description == " "}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion" entitylogicalname="{{html entityLogicalName}}">
{{if scheduledEnd == null || scheduledEnd == "" }}
<div class="noDescription"></div>
{{/if}}
{{else}}
{{if objectTypeCode == Mscrm.EntityTypeCode.Appointment || objectTypeCode == Mscrm.EntityTypeCode.RecurringAppointmentMaster}}
<div id="${postId}_expandedaccordion" class="emailexpandedaccordion">
<div class="expandedAttributeDescription" style="width: 100%;">
<div class="emailContentDiv" style="display:none;">{{html ActivitiesWall.UI.ActivitiesWall.fixDomStructure(ActivitiesWall.UI.ActivitiesWall.encodeDescriptionIfAppointmentRTEDisabled(description)) }}</div>
<iframe class="emailContentFrame" frameborder ="0" style="width: 100%; border: 0px;"></iframe>
</div>
{{else}}
<div id="${postId}_expandedaccordion" class="collapsedaccordion">
<div class="expandedAttributeDescription">{{html description}}</div>
{{/if}}
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

<script id="emailCollapse" type="text/html">
<div id="collapseIcon_${postId}" style = "display: inline-flex; width: 100%;padding-bottom:5px;padding-top:15px;" class="emailCollapseIcon"  aria-expanded="false" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_CONVERSATION_TOOL_TIP)}}" BaseConversationIndexHash="{{html baseconversationindexhash}}" postid="{{html postId}}">
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_CONVERSATION_TOOL_TIP)}}" class="imageExpandCollapse">
<img id="activitieswall_emailCollapse" class="ms-crm-InlineTabExpander ms-crm-ImageStrip-email_collpase" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_CONVERSATION_TOOL_TIP)}}" src="/_imgs/imagestrips/transparent_spacer.gif" />
</a>
<div id="${postId}" class="post" title="{{html text}}" style="cursor:pointer;width: calc(100% - 0px);display:inline;padding-top:0px;padding-bottom:0px;" createdby="{{html createdBy}}" createdon="{{html createdOn}}" objecttypecode="{{html objectTypeCode}}" statecode="{{html state}}" entitylogicalname="{{html entityLogicalName}}" >
<div class="userThumbnailArea" style="padding-top:0px;">
<div class="userThumbnail">
<div class="iconThumbnail"  objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}">
<a href="#" tabindex="-1">
{{html imageSource}}
</a>
</div>
</div>
</div>
<div id="${postId}_firstDIV" class="wallbody" style="display:block;">
<a href="#"  title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
<div id="${postId}_participantsList" class="acTitle" >
{{each(i, value) participants}} {{html value.partyName}};{{/each}}
</div>
<div id="${postId}_lastDIV" class="lastDivEmail" >
<div class="acDetailsEmail">{{html modifiedOn}}</div>
</div>
<div class="emailbodyContentDiv">{{html text}}</div>
</div>
</div>
</div>
</script>

<script id="wallLoading" type="text/html">
<div id="actionLoadingProgress" style="text-align: center; position: absolute;  left: 0px; right: 0px; z-index: 101; background-color: White;">
<img id="activitieswall_Progressbar" class="ms-crm-ImageStrip-activitieswall_Progressbar" src="/_imgs/WallControl/progressbar.gif" >
</div>
</script>

<script id="conversationLoading" type="text/html">
<div id="conversationLoadingProgress" class="conversationLoading">
<img id="activitieswall_ConversationContainer_Progressbar" style="width:55px; height:5px; overflow: hidden" src="/_imgs/ConvLoader_5x55_blue.gif" >
</div>
</script>

<script id="emailExpand" type="text/html">
<div id="expandIcon_${postId}" style = "display:none;" class="emailExpandIcon"  aria-expanded="true" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_CONVERSATION_TOOL_TIP)}}" BaseConversationIndexHash="{{html baseconversationindexhash}}" postid="{{html postId}}">
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_CONVERSATION_TOOL_TIP)}}" style="position: absolute;" class="imageExpandCollapse">
<img id="activitieswall_emailExpand" class="ms-crm-InlineTabExpander ms-crm-ImageStrip-email_expand" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_CONVERSATION_TOOL_TIP)}}" src="/_imgs/imagestrips/transparent_spacer.gif"/>
</a>
<div id="${postId}" style = "display:block;" class="conversationSubject" title="{{html text}}" style="cursor:pointer;" createdby="{{html createdBy}}" createdon="{{html createdOn}}" objecttypecode="{{html objectTypeCode}}" statecode="{{html state}}" entitylogicalname="{{html entityLogicalName}}" >
<div id="${postId}_firstDIV" class="wallbody" >
<a href="#"  title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
<div id="${postId}_participantsList" class="acTitle acParticipants" >
{{each(i, value) participants}} {{html value.partyName}};{{/each}}
</div>
<div id="${postId}_text" class="emailSubject">{{html text}}</div>
</div>
</div>
</div>
</script>

<script id="emailTemplate" type="text/html">
{{if objectTypeCode == Mscrm.EntityTypeCode.Email }}
<div id="${postId}_firstDIV" class="wallbody" >
<a href="#"  title="{{html text}}" onclick="Mscrm.Utilities.click(previousSibling);"></a>
<div id="${postId}_userName" class="userName"></div>
{{if from}}
<div id="${postId}_Sendername" class="acTitle" >{{html from[0].partyName}}
</div>
{{else}}
<div class="acTitle" >{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.SENDER_NOT_FOUND_MESSAGE_LOC_STRING) }}</div>
{{/if}}
<div class="postActions">
{{tmpl "#ActionsTemplate"}}
</div>
<div id="${postId}_text" class="acSubject">{{html text}}</div>
{{if (statusReason != 1)}}
<div class="emailbodyContentDiv">{{html text}}</div>
{{/if}}
<div id="${postId}_lastDIV" class="lastDivEmail_EmailEngagament" >
{{if window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE}}
{{if isemailfollowed == true && (statusReason == 2 || statusReason == 3)}}
<div class="acDetails">{{html modifiedOn}}</div>
<br/>
<div class ="emailSentOrOpenParentContianer">
<span class="emailSentOrOpenTextContianer"><img alt="Follow Email" src="/_imgs/inlineedit/FollowedEmail_16.png" class="emailFollowImageContianer" /></span>
<span class="emailSentOrOpenTextContianer" arai-label="{{html senton}}" title="{{html senton}}" >{{html senton}}</span>
<span class="emailSentOrOpenTextContianer">.</span>
<span class="emailSentOrOpenTextContianer" arai-label="{{html lastopenedtime}}" title="{{html lastopenedtime}}">{{html lastopenedtime}}</span>
</div>
{{else}}
{{if delayedemailsendtime != null && (statusReason == 1 || statusReason == 6)}}
<div class="acDetails">{{html modifiedOn}}</div>
<br/>
<div class ="emailSentOrOpenParentContianer">
<span class="emailSentOrOpenTextContianer" arai-label="{{html delayedemailsendtime}}" title="{{html delayedemailsendtime}}">{{html delayedemailsendtime}}</span>
</div>
{{else}}
<div class="acDetails">{{html modifiedOn}}</div>
{{/if}}
{{/if}}
{{else}}
<div class="acDetailsEmail">{{html modifiedOn}}</div>
{{/if}}
</div>
{{if scheduledEnd}}
<div id="${postId}_duedate" class="duedate" >
<div class="expandedAttributeName">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.DUEDATE_LOC_STRING) }}</div><div class="expandedAttributeValue">{{html scheduledEnd}}</div>
</div>
{{/if}}
</div>
<div id="${postId}_expandedaccordion" class="emailexpandedaccordion">
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
<iframe class="emailContentFrame" title="email content" frameborder ="0" style="width: 100%; border: 0px;"></iframe>
</div>
{{/if}}
</div>
{{/if}}
</script>

<script id="ActionsTemplate" type="text/html">
<div id="postActions_${postId}" class ="postAction">
{{if objectTypeCode == Mscrm.EntityTypeCode.UntrackedEmail}}
{{if statuscode_Value!=1}}
<div id="TrackEmailAction_${postId}" class="trackEmail" entityid="{{html postId}}" entitylogicalname="{{html entityLogicalName}}" exchangeitemid="{{html exchangeitemid}}" statecode="{{html state}}" objecttypecode="{{html objectTypeCode}}">
<a href="#" tabindex="-1" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TRACK_UNTRACKED_EMAIL_TOOLTIP)}}">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TRACK_UNTRACKED_EMAIL_TEXT) }}</a>
</div>
<div class="ActionSeperator" statecode="{{html state}}">
<img alt="" id="activitieswall_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif" />
</div>
{{/if}}
{{else objectTypeCode != Mscrm.EntityTypeCode.Email && objectTypeCode != Mscrm.EntityTypeCode.SocialActivity}}
<div id="MarkCompleteAction_${postId}" class="markcomplete" entityid="{{html postId}}" entitylogicalname="{{html entityLogicalName}}" statecode="{{html state}}" objecttypecode="{{html objectTypeCode}}">
<a href="#" tabindex="-1" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COMPLETE_BUTTON_TOOLTIP)}}">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COMPLETE_BUTTON_TEXT) }}</a>
</div>
<div class="ActionSeperator" statecode="{{html state}}">
<img alt="" id="activitieswall_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif"/>
</div>
{{/if}}
{{if objectTypeCode == Mscrm.EntityTypeCode.UntrackedEmail}}
<div id="openRecordAction_${postId}" class="openrecordUntrackEmail" exchangeweblink="{{html exchangeweblink}}" objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}" style="display:inline-block">
<a href="#" tabindex="-1" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}">
<img id="activitieswall_EditPost" class="ms-crm-ImageStrip-activitieswall_EditPost" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}"  src="/_imgs/imagestrips/transparent_spacer.gif" onmouseover="this.className='ms-crm-ImageStrip-activitieswall_EditPostHover'" onmouseout="this.className='ms-crm-ImageStrip-activitieswall_EditPost'"/>
</a>
</div>
<div class="ActionSeperator" statecode="Open">
<img alt="" id="activitieswall_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif"/>
</div>
{{else}}
<div id="openRecordAction_${postId}" class="openrecord" objecttypecode="{{html objectTypeCode}}" postid="{{html postId}}" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}">
<a href="#" tabindex="-1" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}">
<img id="activitieswall_EditPost" class="ms-crm-ImageStrip-activitieswall_EditPost" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.CLICK_OPEN_RECORD_TOOLTIP)}}"  src="/_imgs/imagestrips/transparent_spacer.gif" onmouseover="this.className='ms-crm-ImageStrip-activitieswall_EditPostHover'" onmouseout="this.className='ms-crm-ImageStrip-activitieswall_EditPost'"/>
</a>
</div>
<div class="ActionSeperator" statecode="Open">
<img alt="" id="activitieswall_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif"/>
</div>
{{/if}}
<div id="expandIcon_${postId}" class="expandIcon" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_ICON_TOOL_TIP)}}">
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_ICON_TOOL_TIP)}}">
<img id="activitieswall_Expand_16" class="ms-crm-ImageStrip-activitieswall_Expand_16" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EXPAND_ICON_TOOL_TIP)}}" src="/_imgs/imagestrips/transparent_spacer.gif" onmouseover="this.className='ms-crm-ImageStrip-activitieswall_Expand_Hover_16'" onmouseout="this.className='ms-crm-ImageStrip-activitieswall_Expand_16'"/>
</a>
</div>
<div id="expandIcon_${postId}" class="collapseIcon" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_ICON_TOOL_TIP)}}">
<a href="#" title="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_ICON_TOOL_TIP)}}">
<img id="activitieswall_Collapse_16" class="ms-crm-ImageStrip-activitieswall_Collapse_16" alt="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COLLAPSE_ICON_TOOL_TIP)}}" src="/_imgs/imagestrips/transparent_spacer.gif" onmouseover="this.className='ms-crm-ImageStrip-activitieswall_Collapse_Hover_16'" onmouseout="this.className='ms-crm-ImageStrip-activitieswall_Collapse_16'"/>
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
{{if objectTypeCode == Mscrm.EntityTypeCode.Appointment || objectTypeCode == Mscrm.EntityTypeCode.RecurringAppointmentMaster}}
<div id="${postId}_lastDIV" style="clear:none" class="lastDiv" >
{{else}}
<div id="${postId}_lastDIV" class="lastDiv" >
{{/if}}
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

<script id="AppointmentNotificationTemplate" type="text/html">
<div id="appointmentnotification" class = "emailnotification">
<img id="activitieswall_Warning" class="ms-crm-ImageStrip-activitieswall_Warning" src="/_imgs/imagestrips/transparent_spacer.gif" alt="" />
<div id="warningmessage" class ="warningmessage">{{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.APPOINTMENT_BADCONTENT_WARNING_LOC_STRING) }}</div>
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
