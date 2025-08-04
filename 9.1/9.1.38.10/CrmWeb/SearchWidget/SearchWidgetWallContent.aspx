<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Controls.SearchWidget.SearchWidgetPage" %>
<div id="articlewall" class="kmwall">
<iframe tabindex="-1" sandbox="allow-same-origin"  security="restricted"  id="resultsHolder" height="0"   width="0" frameBorder="0"></iframe>

<script id="kmErrorMessageTemplate" type="text/html">
<div id="kmErrorMessageCause" class="errorMessageCause">${message}</div>
</script>

<script id="kmwallControlErrorMessageTemplate" type="text/html">
<div id="kmControlErrorMessageCause" class="errorMessageCause">${cause}</div>
<br />
<div id="kmControlErrorMessageAction" class="errorMessageAction">${action}</div>
</script>
<script id="kmPostTemplate" type="text/html">
<div id="kmSearchPane">
{{each posts}}
<span style="display: none;" id="articleId">
${articleId}
</span>
<div id="searchPane_${articleId}" class="searchPane">
<div id="${articleId}" class="articleRow">
<div class="articleThumbnailArea">
<div class="articleThumbnail">
<div class="iconThumbnail" articleid="${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_PRIVATE_ARTICLE_ICON_TOOLTIP_STRING}">
<a href="#" tabindex="-1"><img id="kmArticleImage"  alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_PRIVATE_ARTICLE_ICON_TOOLTIP_STRING}" /></a>
</div>
</div>
</div>
<div id="${articleId}_firstDIV" class="wallbody">
<div class="kmTitle kmTitle-PostContent">
<a href="#" title="${question}"> <sup class="superScript"> ${Mscrm.SearchWidgetContentHelper.getSuperScript(expiredDate, published, stateCode)} </sup> ${question} </a>
</div>
<div id="articleActions_${articleId}" class="articleActions">
<div class="actionSeperator" id="kmAssociateArticleDiv_${articleId}">
<a href="#" id="kmAssociateArticle_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmAssociateArticle" src="/_imgs/searchwidget/SearchWidgetAssociateArticle_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmAssociateArticle" class="ms-crm-ImageStrip-searchwidget_associate_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmDisassociateArticleDiv_${articleId}">
<a href="#" id="kmDisassociateArticle_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmDisAssociateArticleImg_${articleId}" src="/_imgs/searchwidget/SearchWidgetDisassociateArticle_16_Grey.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmDisAssociateArticleImg_${articleId}" class="ms-crm-ImageStrip-searchwidget_disassociate_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmCopyLinkArticleDiv_${articleId}">
<a href="#" id="kmCopyLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_ALT_STRING}" id="kmCopyLink" src="/_imgs/searchwidget/SearchWidgetCopyLink_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_ALT_STRING}" id="kmCopyLink" class="ms-crm-ImageStrip-searchwidget_copylink" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmEmailLinkArticleDiv_${articleId}">
<a href="#" id="kmEmailLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_ALT_STRING}" id="kmEmailLink" src="/_imgs/searchwidget/SearchWidgetEmailLink_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_ALT_STRING}" id="kmEmailLink" class ="ms-crm-ImageStrip-searchwidget_emaillink" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmEmailContentLinkArticleDiv_${articleId}">
<a href="#" id="kmEmailContentLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_ALT_STRING}" id="kmEmailContentLink" src="/_imgs/searchwidget/SearchWidgetEmailArticle.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_ALT_STRING}" id="kmEmailContentLink" class ="ms-crm-ImageStrip-searchwidget_emailarticle" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmPopOutArticleDiv_${articleId}">
<a href="#" id="kmPopOut_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_ARTICLE_ICON_ALT_STRING}" id="kmPopOut" src="/_imgs/searchwidget/SearchWidgetPopOut_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_ARTICLE_ICON_ALT_STRING}" id="kmPopOut" class="ms-crm-ImageStrip-searchwidget_popout" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div id="articlePopOut_flyoutLoadingArea_${articleId}"></div>
</div>
<div class="searchBlurb">

{{html  Mscrm.SearchWidgetContentHelper.filterResponse(CrmEncodeDecode.CrmJavaScriptEncode("results_"+articleId),searchBlurb) }}
</div>
<div id="lastDIV_${articleId}" class="lastDiv">
<div id="kmArticleType" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetPublicArticle_16.png">
<% } else { %>
<img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_public_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div class="lastDivSeparator hideParatureDependencies">
<img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif" />
</div>
<div id="kmLastModifiedDate" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_ICON_TOOLTIP_STRING} {{html Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn)}}">
${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_LABEL_STRING} {{html Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn)}}
</div>
<div class="lastDivSeparator">
<img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif" />
</div>
<div id="kmRating" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}">
<span class="kmwall lastDivContent">
<% if (HighContrastEnabled) { %>
<img id="kmRatingImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetRating_16.png">
<% } else { %>
<img id="kmRatingImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_rating" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</span>
</div>
<div id="kmRatingContent" class="lastDivContent">
{{if (Mscrm.SearchWidget.localizedStrings.KMWALL_LOCID_UI_DIR == "RTL")}}
${Mscrm.SearchWidget.localizedStrings.KMWALL_MAX_RATING_VALUE_RTL_STRING}${rating}
{{else}}
${rating}${Mscrm.SearchWidget.localizedStrings.KMWALL_MAX_RATING_VALUE_STRING}
{{/if}}
</div>
<div id="kmAttachment" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}">
<span class="kmwall lastDivContent">
<% if (HighContrastEnabled) { %>
<img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetAttachment_16.png">
<% } else { %>
<img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_attachment" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</span>
</div>
<div id="kmAttachmentContent" class="lastDivContent hideParatureDependencies">
${attachmentCount}
</div>
<div id="kmNoOfViews" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmNoOfViewsImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_ALT_STRING}" src="/_imgs/searchwidget/SearchWidgetViews_16.png">
<% } else { %>
<img id="kmNoOfViewsImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_ALT_STRING}" class="ms-crm-ImageStrip-searchwidget_views" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div id="kmNoOfViewsContent" class="lastDivContent">
${timesViewed}
</div>
</div>
</div>
</div>
</div>
{{/each}}
</div>
</script>
<script id="kmArticleContentTemplate" type="text/html">
<div id="articleContent_${articleId}" class="articleContentInner">
<div id="backbutton" class="contentBackbutton">
<div class="backimage">
<% if (HighContrastEnabled) { %>
<img id="backimage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_BACK_BUTTON_STRING}" src="/_imgs/searchwidget/SearchWidgetBack.png" class="backStyle" />
<% } else { %>
<img id="backimage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_BACK_BUTTON_STRING}" class="ms-crm-ImageStrip-searchwidget_back backStyle" src="/_imgs/imagestrips/transparent_spacer.gif" />
<% } %>
<a class="backStyle" href="#" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_BACK_BUTTON_TOOLTIP_STRING}" onclick="dispatchSearchWidgetWallCommand(this, 'hidearticlecontent'); return false;">${Mscrm.SearchWidget.localizedStrings.KMWALL_BACK_BUTTON_STRING} </a>
</div>
<div id="articleAction_${articleId}" class="contentArticleActions">
<div class="actionSeperator" id="kmAssociateArticleDiv_${articleId}">
<a href="#" id="kmAssociateArticle_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmContentAssociateArticle" src="/_imgs/searchwidget/SearchWidgetAssociateArticle_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmContentAssociateArticle" class="ms-crm-ImageStrip-searchwidget_associate_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmDisassociateArticleDiv_${articleId}">
<a href="#" id="kmDisassociateArticle_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmContentDisAssociateArticle" src="/_imgs/searchwidget/SearchWidgetDisassociateArticle_16_Grey.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmContentDisAssociateArticle" class="ms-crm-ImageStrip-searchwidget_disassociate_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmCopyLinkArticleDiv_${articleId}">
<a href="#" id="kmCopyLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_ALT_STRING}" id="kmContentCopyLink" src="/_imgs/searchwidget/SearchWidgetCopyLink_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_ALT_STRING}" id="kmContentCopyLink" class="ms-crm-ImageStrip-searchwidget_copylink" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmEmailLinkArticleDiv_${articleId}">
<a href="#" id="kmEmailLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_ALT_STRING}" id="kmContentEmailLink" src="/_imgs/searchwidget/SearchWidgetEmailLink_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_ALT_STRING}" id="kmContentEmailLink" class="ms-crm-ImageStrip-searchwidget_emaillink" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmEmailContentLinkArticleDiv_${articleId}">
<a href="#" id="kmEmailContentLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_ALT_STRING}" id="kmContentEmailContent" src="/_imgs/searchwidget/SearchWidgetEmailArticle.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_ALT_STRING}" id="kmContentEmailContent" class ="ms-crm-ImageStrip-searchwidget_emailarticle" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmPopOutArticleDiv_${articleId}">
<a href="#" id="kmPopOut_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_ARTICLE_ICON_ALT_STRING}" id="kmContentPopOut" src="/_imgs/searchwidget/SearchWidgetPopOut_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_ARTICLE_ICON_ALT_STRING}" id="kmContentPopOut" class="ms-crm-ImageStrip-searchwidget_popout" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
</div>
</div>
<div id="${articleId}" class="articleRow answerContentArticleRow">
<div class="articleThumbnailArea">
<div class="articleThumbnail">
<div class="iconThumbnail">
<a href="#" tabindex="-1">
<% if (HighContrastEnabled) { %>
<img alt="KbRecord" id="kmContentArticleImage" src="/_imgs/searchwidget/SearchWidgetArticleIcon_24.png" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING}" />
<% } else { %>
<img alt="KbRecord" id="kmContentArticleImage" class="ms-crm-ImageStrip-searchwidget_articleicon" src="/_imgs/imagestrips/transparent_spacer.gif" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING}" />
<% } %>
</a>
</div>
</div>
</div>
<div id="${articleId}_contentFirstDIV" class="contentwallbody">
<div class="kmTitle contentkmTitle">
<sup class="superScript"> ${Mscrm.SearchWidgetContentHelper.getSuperScript(expiredDate, published, stateCode)} </sup> <span>${question} </span>
</div>
<div id="LastDiv_${articleId}" class="lastDiv contentlastDiv">
<div id="kmArticleType" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_PUBLIC_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetPublicArticle_16.png">
<% } else { %>
<img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_public_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div class="lastDivSeparator hideParatureDependencies">
<img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif" />
</div>
<div id="kmLastModifiedDate" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_ICON_TOOLTIP_STRING} {{html Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn)}}">
${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_LABEL_STRING} {{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn))}}
</div>
<div class="lastDivSeparator">
<img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif" />
</div>
<div id="kmRating" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmRatingImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetRating_16.png">
<% } else { %>
<img id="kmRatingImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_rating" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div id="kmRatingContent" class="lastDivContent">
{{if (Mscrm.SearchWidget.localizedStrings.KMWALL_LOCID_UI_DIR == "RTL")}}
${Mscrm.SearchWidget.localizedStrings.KMWALL_MAX_RATING_VALUE_RTL_STRING}${rating}
{{else}}
${rating}${Mscrm.SearchWidget.localizedStrings.KMWALL_MAX_RATING_VALUE_STRING}
{{/if}}
</div>
<div id="kmAttachment" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetAttachment_16.png">
<% } else { %>
<img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_attachment" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div id="kmAttachmentContent" class="lastDivContent hideParatureDependencies">
{{html CrmEncodeDecode.CrmHtmlEncode(attachmentCount)}}
</div>
<div id="kmNoOfViews" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmNoOfViewsImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_ALT_STRING}" src="/_imgs/searchwidget/SearchWidgetViews_16.png">
<% } else { %>
<img id="kmNoOfViewsImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_ALT_STRING}" class="ms-crm-ImageStrip-searchwidget_views" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div id="kmNoOfViewsContent" class="lastDivContent">
${timesViewed}
</div>
</div>

<div class="articleDescription">
<span style="white-space: pre-line;">
{{if sanitized}}
<iframe id="{{html CrmEncodeDecode.CrmJavaScriptEncode(parent+"_frame_"+articleId)}}" width="100%" height="100%" frameBorder="0"></iframe>
{{else}}
<iframe sandbox="allow-same-origin allow-popups" id="{{html CrmEncodeDecode.CrmJavaScriptEncode(parent+"_frame_"+articleId)}}" width="100%" height="100%" frameBorder="0"></iframe>
{{/if}}
{{html  Mscrm.SearchWidgetContentHelper.saveResponse(CrmEncodeDecode.CrmJavaScriptEncode(parent+"_frame_"+articleId),answer) }}
<{{if articleId!=''}}script{{/if}}>
setTimeout(function()
{
Mscrm.SearchWidgetContentHelper.setContent(CrmEncodeDecode.CrmJavaScriptEncode("${parent}_frame_${articleId}"));
},100);
</{{if articleId!=''}}script{{/if}}>
</span>
</div>
</div>
</div>
</div>
</script>
<script id="kmArticlePopOutContentTemplate" type="text/html">
<div id="articlePopContent_${articleId}" class="kmwall">
<div class="subtitle">
<span>${Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_SUBTITLE}</span>
</div>
<div id="articleAction_${articleId}" class="contentArticleActions">
<div class="actionSeperator" id="kmAssociateArticleDiv_${articleId}">
<a href="#" id="kmAssociateArticle_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmAssociateArticle" src="/_imgs/searchwidget/SearchWidgetAssociateArticle_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmAssociateArticle" class="ms-crm-ImageStrip-searchwidget_associate_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmDisassociateArticleDiv_${articleId}">
<a href="#" id="kmDisassociateArticle_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmContentDisAssociateArticle" src="/_imgs/searchwidget/SearchWidgetDisassociateArticle_16_Grey.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_DISASSOCIATE_ARTICLE_ICON_ALT_STRING}" id="kmContentDisAssociateArticle" class="ms-crm-ImageStrip-searchwidget_disassociate_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmCopyLinkArticleDiv_${articleId}">
<a href="#" id="kmCopyLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_ALT_STRING}" id="kmContentCopyLink" src="/_imgs/searchwidget/SearchWidgetCopyLink_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_COPY_ARTICLE_ICON_ALT_STRING}" id="kmContentCopyLink" class="ms-crm-ImageStrip-searchwidget_copylink" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmEmailLinkArticleDiv_${articleId}">
<a href="#" id="kmEmailLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_ALT_STRING}" id="kmContentEmailLink" src="/_imgs/searchwidget/SearchWidgetEmailLink_16.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_ICON_ALT_STRING}" id="kmContentEmailLink" class="ms-crm-ImageStrip-searchwidget_emaillink" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
<div class="actionSeperator" id="kmEmailContentLinkArticleDiv_${articleId}">
<a href="#" id="kmEmailContentLink_${articleId}" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_ALT_STRING}" id="kmEmailContentLink" src="/_imgs/searchwidget/SearchWidgetEmailArticle.png">
<% } else { %>
<img alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_EMAIL_ARTICLE_CONTENT_ICON_ALT_STRING}" id="kmEmailContentLink" class ="ms-crm-ImageStrip-searchwidget_emailarticle" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</a>
</div>
</div>
<div id="${articleId}" class="articleRow">
<div class="articleThumbnailArea">
<div class="iconThumbnail">
<a href="#" tabindex="-1">
<% if (HighContrastEnabled) { %>
<img alt="KbRecord" id="kmContentPopOutArticleImageHighContrast" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING}" />
<% } else { %>
<img alt="KbRecord" id="kmContentPopOutArticleImage" class="ms-crm-ImageStrip-searchwidget_articleicon" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING}" />
<% } %>
</a>
</div>
</div>
<div id="${articleId}_contentFirstDIV" class="contentwallbody">
<div class="kmTitle contentkmTitle">
<sup class="superScript"> ${Mscrm.SearchWidgetContentHelper.getSuperScript(expiredDate, published, stateCode)} </sup> <span>${question} </span>
</div>
<div id="LastDiv_${articleId}" class="lastDiv contentlastDiv">
<div id="kmArticleType" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetPublicArticle_16.png">
<% } else { %>
<img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_public_article" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div class="lastDivSeparator hideParatureDependencies">
<img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif" />
</div>
<div id="kmLastModifiedDate" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_ICON_TOOLTIP_STRING} {{html Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn)}}">
${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_LABEL_STRING} {{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn))}}
</div>
<div class="lastDivSeparator">
<img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif" />
</div>
<div id="kmRating" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmRatingImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetRating_16.png">
<% } else { %>
<img id="kmRatingImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_rating" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div id="kmRatingContent" class="lastDivContent">
{{if (Mscrm.SearchWidget.localizedStrings.KMWALL_LOCID_UI_DIR == "RTL")}}
${Mscrm.SearchWidget.localizedStrings.KMWALL_MAX_RATING_VALUE_RTL_STRING}${rating}
{{else}}
${rating}${Mscrm.SearchWidget.localizedStrings.KMWALL_MAX_RATING_VALUE_STRING}
{{/if}}
</div>
<div id="kmAttachment" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetAttachment_16.png">
<% } else { %>
<img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_attachment" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div id="kmAttachmentContent" class="lastDivContent hideParatureDependencies">
${attachmentCount}
</div>
<div id="kmNoOfViews" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_TOOLTIP_STRING}">
<% if (HighContrastEnabled) { %>
<img id="kmNoOfViewsImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_ALT_STRING}" src="/_imgs/searchwidget/SearchWidgetViews_16.png">
<% } else { %>
<img id="kmNoOfViewsImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_ALT_STRING}" class="ms-crm-ImageStrip-searchwidget_views" src="/_imgs/imagestrips/transparent_spacer.gif">
<% } %>
</div>
<div id="kmNoOfViewsContent" class="lastDivContent">
${timesViewed}
</div>
</div>
<div tabindex="0" class="articleDescription">
<span style="white-space: pre-line;">
{{if sanitized}}
<iframe id="{{html CrmEncodeDecode.CrmJavaScriptEncode("popout_"+articleId)}}" width="100%" height="100%" frameBorder="0"></iframe>
{{else}}
<iframe sandbox="allow-same-origin allow-popups" id="{{html CrmEncodeDecode.CrmJavaScriptEncode("popout_"+articleId)}}" width="100%" height="100%" frameBorder="0"></iframe>
{{/if}}
{{html  Mscrm.SearchWidgetContentHelper.saveResponse(CrmEncodeDecode.CrmJavaScriptEncode("popout_"+articleId),answer) }}
<{{if articleId!=''}}script{{/if}}>
setTimeout(function()
{
Mscrm.SearchWidgetContentHelper.setContent(CrmEncodeDecode.CrmJavaScriptEncode("popout_${articleId}"));
},100);
</{{if articleId!=''}}script{{/if}}>
</span>
</div>
</div>
</div>
</div>
</script>
<script id="showMoreLinkTemplate" type="text/html">
<a class="showMoreLink" href="#" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_SHOWMORE_TOOLTIP}">
<div class="textAndArrow" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_SHOWMORE_TOOLTIP}">
<div class="arrow">
<% if (HighContrastEnabled) { %>
<img id="articleswall_SeeMoreArrow" src="/_imgs/seeMoreArrows.png" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_SHOWMORE_TOOLTIP}"></img>
<% } else { %>
<img id="articleswall_SeeMoreArrow" class="ms-crm-ImageStrip-activitieswall_SeeMoreArrow" src="/_imgs/imagestrips/transparent_spacer.gif" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_SHOWMORE_TOOLTIP}"></img>
<% } %>
</div>
<div class="text">${Mscrm.SearchWidget.localizedStrings.KMWALL_SHOWMORE_TEXT}</div>
</div>
<img id="articleswall_Progressbar" class="ms-crm-ImageStrip-articleswall_Progressbar" src="/_imgs/imagestrips/transparent_spacer.gif" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_SHOWMOREPROGRESS_ALT}" />
</a>
<div id="DialogLoadingMoreDiv" class="kmwall-loading"><table class="ms-crm-LoadingContainer"><tr class='ms-crm-LoadingContainer'><td align='center'><img id='DialogLoadingDivImg' alt='${Mscrm.SearchWidget.localizedStrings.KMWALL_SEARCHING}' src='/_imgs/AdvFind/progress.gif' /><br />${Mscrm.SearchWidget.localizedStrings.KMWALL_SEARCHING}</td></tr></table></div>
</script>
<div id="kmwallErrorMessageContainer" class="wallMessageContainer"></div>
<div id="kmwallContainer" class="wallContainer"></div>
<div id="articleContent" class="articleContent"></div>
</div>