<%@ Page language="c#" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<%
Response.Cache.SetCacheability(HttpCacheability.Public);
Response.Cache.SetVaryByCustom("Accept-Encoding");
Response.Cache.SetOmitVaryStar(true);
Response.Expires = CachingTime.UrlVersionedExpiration;
Response.Headers.Add("X-Content-Type-Options", "nosniff");
%>
<div id="notesWall" class="notesWall">
<div id="header" class="header">
<div class="filterAndRefreshContainer">
<div class="wallActionsContainer">
</div>
</div>
</div>

<script id="postTemplate" type="text/html">
<div title="{{if ($data.text != null && $data.text != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(CrmEncodeDecode.CrmHtmlDecode(text))}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.NewNoteHintText")) %>{{/if}}" id="${postId}"
class="post readMode{{if ($data.title == null || $data.title == '') }} emptyTitle{{/if}} {{if ($data.text == null || $data.text == '') }} emptyText{{/if}} {{if ($data.fileName == null || $data.fileName == '') }} emptyAttachment{{/if}}"
tabIndex='0'
title ="{{if ($data.text != null && $data.text != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(CrmEncodeDecode.CrmHtmlDecode(text))}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.NewNoteHintText")) %>{{/if}}"
onkeydown="if (event.keyCode==46 || event.keyCode==127){ dispatchNoteCommand(this, 'delete', '${postId}'); return false;} else if(event.keyCode==13){dispatchNoteCommand(this, 'edit', '${postId}');} else if(event.keyCode==27){dispatchNoteCommand(this, 'discard', '${postId}');var domEvent=new Sys.UI.DomEvent(event); domEvent.stopPropagation();return false;}"
>
<div class="notesTextBoxDiv">
<div class="notesTextBoxSpacer">
{{if $data.postId != 'createNote' && $data.postId.substring(0,4) != 'temp' }}
<div id="deletenoteaction_${postId}" class="deleteNotesAction">
<div class="deleteActionGradientMask"></div>
<a id="deleteLink"  href="#" onclick="dispatchNoteCommand(this,'delete', '${postId}'); return false;">
<img class="imageAction"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DeleteNoteTitle")) %>"
title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DeleteNoteTitle")) %>"
src="/_imgs/notesv2_delete.png" />
</a>
</div>
{{/if}}
<label for="${postId}_notesTitleBox">
<input id="${postId}_notesTitleBox" class="ms-crm-InlineInput notesTitleBox" maxLength="500" type="text"
title="{{if ($data.title != null && $data.title != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(title)}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.TitleHintText")) %>{{/if}}"
alt="{{if ($data.title != null && $data.title != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(title)}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.TitleHintText")) %>{{/if}}"
aria-label="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.TitleHintText")) %>"
onkeydown="if (event.keyCode==46 || event.keyCode==127){ var domEvent=new Sys.UI.DomEvent(event); domEvent.stopPropagation();} else if (event.keyCode==13 && event.shiftKey ){ dispatchNoteCommand(this, 'post', '${postId}'); return false;} else if(event.keyCode==9){dispatchNoteCommand(this, 'onblur', '${postId}');}"
onfocus="dispatchNoteCommand(this, 'edit', '${postId}');return false;"
value='{{if ($data.title != null && $data.title != '')}}${CrmEncodeDecode.CrmHtmlAttributeEncode(title)}{{/if}}'>
<div class="ms-crm-Inline-GradientMask notesTitleGradient"></div></input>
</label>
<textarea id="${postId}_notesTextBox"  class="notesTextBox{{if $data.postId == 'createNote' || ($data.text == null || $data.text == '')}} watermark{{/if}}" type="text"
{{if $data.postId == 'createNote'}}
alt="{{if ($data.text != null && $data.text != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(CrmEncodeDecode.CrmHtmlDecode(text))}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DescriptionHintText")) %>{{/if}}"
title="{{if ($data.text != null && $data.text != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(CrmEncodeDecode.CrmHtmlDecode(text))}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.NewNoteHintText")) %>{{/if}}"
WatermarkText="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.NewNoteHintText")) %>"
{{else}}
title="{{if ($data.text != null && $data.text != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(CrmEncodeDecode.CrmHtmlDecode(text))}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DescriptionHintText")) %>{{/if}}"
alt="{{if ($data.text != null && $data.text != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(CrmEncodeDecode.CrmHtmlDecode(text))}{{else}}<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DescriptionHintText")) %>{{/if}}"
aria-label="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DescriptionHintText")) %>"
WatermarkText="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DescriptionHintText")) %>"
{{/if}}
role="textfield"
MinHeight="20" DeltaHeight="-2" rows="1"
onkeydown="if (event.keyCode==46 || event.keyCode==127){ var domEvent=new Sys.UI.DomEvent(event); domEvent.stopPropagation();} else if (event.keyCode==13 && event.shiftKey ){ dispatchNoteCommand(this, 'post', '${postId}'); return false;} else if(event.keyCode==9){dispatchNoteCommand(this, 'onblur', '${postId}');}"
onfocus="dispatchNoteCommand(this, 'edit', '${postId}');return false;"
>{{if ($data.text == null || $data.text == '') }}{{if $data.postId == 'createNote'}}<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.NewNoteHintText")) %>{{else}}<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.DescriptionHintText")) %>{{/if}}{{else}}${text}{{/if}}</textarea>
</div>
<div class="footer">
<span id="actionsSpacer" class="actionArea">
<div id="attachSpacer" class="attachAction" onclick="dispatchNoteCommand(this, 'edit', '${postId}');return false;">
<img alt=" " width="16" height="16" class="imageAction attachImage" src="/_imgs/ico_16_attach.gif"
onclick="dispatchNoteCommand(this, 'attach', '${postId}');return false;"
/>
<button href="#" id="attachButton" class="attachLink"
title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Attach")) %>"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Attach")) %>"
onclick="dispatchNoteCommand(this, 'attach', '${postId}');return false;" >
<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.Attach")) %>
</button>
{{if $data.postId.substring(0,4) != 'temp' }}
<iframe id="${postId}_attachFileIframe" class='notesAttachmentIframe' frameBorder="0" style="display:none" ></iframe>
{{/if}}
<div id="attachment_${postId}" class="attachmentNameSpacer">
<a class="attachmentFileName"
{{if ($data.fileName != null && $data.fileName != '') }}
title='${CrmEncodeDecode.CrmHtmlAttributeEncode(fileName)}'
alt='${CrmEncodeDecode.CrmHtmlAttributeEncode(fileName)}'
{{/if}}
{{if $data.postId != 'createNote' && $data.postId.substring(0,4) != 'temp' }}
href=${window.self._notesV2DownloadUrl + "&AttachmentId=" + postId +  window.self._notesV2DownloadToken} target="_blank" rel="noopener noreferrer" onclick="var domEvent=new Sys.UI.DomEvent(event); domEvent.stopPropagation();"
onkeydown="if (event.keyCode==46 || event.keyCode==127){ dispatchNoteCommand(this, 'deleteattachment', '${postId}'); var domEvent=new Sys.UI.DomEvent(event); domEvent.stopPropagation(); return false;}"
{{/if}}
>
{{if ($data.fileName != null && $data.fileName != '') }}${CrmEncodeDecode.CrmHtmlAttributeEncode(fileName)}{{/if}}
<div class="ms-crm-Inline-GradientMask"></div>
</a>
</div>
{{if $data.postId.substring(0,4) != 'temp' && postId!='createNote' }}
<div id="deleteattachmentaction_${postId}" class="deleteAttachmentAction" >
<div class="deleteActionGradientMask"></div>
<a id="deleteAttachmentLink" href="#" onclick="dispatchNoteCommand(this,'deleteattachment', '${postId}'); return false;">
<img class="imageAction"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DeleteNoteAttachment")) %>"
title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.DeleteNoteAttachment")) %>"
src="/_imgs/notesv2_delete.png" />
</a>
</div>
{{/if}}
</div>
<div id="doneSpacer" class="doneAction">
<button href="#" id="postButton" class="doneLink"
title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Done.Tooltip")) %>"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Done.Tooltip")) %>"
onclick="dispatchNoteCommand(this, 'post', '${postId}'); var domEvent=new Sys.UI.DomEvent(event); domEvent.stopPropagation(); return false;"
onblur="dispatchNoteCommand(this, 'onblur', '${postId}');return false;" >
<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.Done")) %>
</button>
</div>
</span>
{{if $data.postId == 'createNote' }}
<input id="createdPostIdHiddenField" type="hidden" />
{{else}}
<div class="auditInformation"
title='<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.AuditInformation.CreatedByTooltip")) %> ${createdBy.get_name()} ${formatNoteDate(createdOn, formattedCreatedOn)}&#10;<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.AuditInformation.ModifiedByTooltip")) %> ${modifiedBy.get_name()} ${formatNoteDate(modifiedOn, formattedModifiedOn)}'
alt='<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.AuditInformation.CreatedByTooltip")) %> ${createdBy.get_name()} ${formatNoteDate(createdOn, formattedCreatedOn)}&#10;<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.AuditInformation.ModifiedByTooltip")) %> ${modifiedBy.get_name()} ${formatNoteDate(modifiedOn, formattedModifiedOn)}'>
<div id="${postId}_userName" class="userName">{{html formatNameWithWindowOpenLink(modifiedBy)}}</div>&nbsp;-&nbsp;
<span class="posted">${formatNoteDate(modifiedOn, formattedModifiedOn)}</span>
</div>
{{/if}}
</div>
</div>
</div>
</script>

<script id="deleteNoteTemplate" type="text/html">
<div id="undeletePost_${postId}" class="deleteNoteDiv"
onmouseover=" $P_CRM(window).data('undeletePostMessageAnimationCallback_${postId}')( $P_CRM(window).data('undeletePostMessageAnimationObject_${postId}'), '${postId}', false);"
onmouseout=" $P_CRM(window).data('undeletePostMessageAnimationCallback_${postId}')( $P_CRM(window).data('undeletePostMessageAnimationObject_${postId}'), '${postId}', true);"
onfocus=" $P_CRM(window).data('undeletePostMessageAnimationCallback_${postId}')( $P_CRM(window).data('undeletePostMessageAnimationObject_${postId}'), '${postId}', false);"
onblur=" $P_CRM(window).data('undeletePostMessageAnimationCallback_${postId}')( $P_CRM(window).data('undeletePostMessageAnimationObject_${postId}'), '${postId}', true);"
>
<span class="undoText"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.NoteHasBeenDeleted")) %></span>
<a class="undoLink" href="#" onclick="dispatchNoteCommand(this, 'undodeletepost', '${postId}'); return false;"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Undo")) %>"
title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Undo")) %>">
<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.Undo")) %>
</a>
</div>
</script>

<script id="undeleteNoteAttachmentTemplate" type="text/html">
<div id="undeleteAttachment_${postId}" class="deleteAttachmentDiv"
onmouseover=" $P_CRM(window).data('undeleteAttachmentAnimationCallback_${postId}')( $P_CRM(window).data('undeleteAttachmentAnimationObject_${postId}'), '${postId}', false);"
onmouseout=" $P_CRM(window).data('undeleteAttachmentAnimationCallback_${postId}')( $P_CRM(window).data('undeleteAttachmentAnimationObject_${postId}'), '${postId}', true);"
onfocus=" $P_CRM(window).data('undeleteAttachmentAnimationCallback_${postId}')( $P_CRM(window).data('undeleteAttachmentAnimationObject_${postId}'), '${postId}', false);"
onblur=" $P_CRM(window).data('undeleteAttachmentAnimationCallback_${postId}')( $P_CRM(window).data('undeleteAttachmentAnimationObject_${postId}'), '${postId}', true);"
>
<span class="undoText"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.AttachmentHasBeenDeleted")) %></span>
<a class="undoLink" href="#" onclick="dispatchNoteCommand(this, 'undodeleteattachment', '${postId}'); return false;"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Undo")) %>"
title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("NotesV2.Undo")) %>">
<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.Undo")) %>
</a>
</div>
</script>

<script id="showMoreLinkTemplate" type="text/html">
<a class="showMoreLink" href="#" title="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("ShowMore_ToolTip")) %>">
<div class="textAndArrow" title="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("ShowMore_ToolTip")) %>">
<div class="arrow">
<img id="activitieswall_SeeMoreArrow" class="ms-crm-ImageStrip-activitieswall_SeeMoreArrow" src="/_imgs/imagestrips/transparent_spacer.gif" alt="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("ActivityWall.ShowMoreActivitiesToolTip")) %>"></img>
</div>
<div class="text"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("ActivityWall.ShowMoreActivitiesText")) %></div>
</div>
<img id="activitieswall_Progressbar" class="ms-crm-ImageStrip-activitieswall_Progressbar" src="/_imgs/imagestrips/transparent_spacer.gif" alt="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("ActivityWall.Loading")) %>" />
</a>
</script>

<table id="progressTemplate" class="progressTemplate" cellpadding="0" cellspacing="0" border="0" >
<tr>
<td>
<div class="panel">
<div class="text"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.Loading")) %></div>
</div>
</td>
</tr>
</table>

<table id="firstRunContent" class="firstRunContent" cellpadding="0" cellspacing="0" border="0" >
<tr>
<td>
<div class="panel">
<div class="emptyBox">
<div class="emptyMessageContainer" title="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.NoNotesToShow")) %>">
<div id="messageContainerSeperator" class="emptyMessageSeparator">
<img src="/_imgs/EmptyStates/notes.png" alt="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.NoNotesAvailable")) %>" class="emptyStatesActivityWallActivities" id="ActivityWallActivitiesTab" />
</div>
<div class="text"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.NoNotesAvailable")) %></div>
<div class="noNotesToShow"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("NotesV2.NoNotesToShow")) %></div>
</div>
</div>
</div>
</td>
</tr>
</table>

<div id="notesWallContainer" class="wallContainer" >
</div>
</div>
