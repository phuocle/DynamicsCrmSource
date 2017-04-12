<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.ServiceManagement.KBContentPage" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="km" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        function cancel() {
            closeWindow();
        }

        function Init() {

            var currentArticle = null;
            try {
                currentArticle = JSON.parse(articleRow);
                currentArticle.lastModifiedOn = IsNull(currentArticle.lastModifiedOn)
                    ? null
                    : new Date(currentArticle.lastModifiedOn);
                currentArticle.createdOn = IsNull(currentArticle.createdOn) ? null : new Date(currentArticle.createdOn);
                currentArticle.expiredDate = IsNull(currentArticle.expiredDate)
                    ? null
                    : new Date(currentArticle.expiredDate);
                if (!IsNull(currentArticle.question)) {
                    document.title = currentArticle.question;
                }
            } catch (e) {
                alert(INVALID_JSON);
                return;
            }

            if (!IsNull(currentArticle)) {
                Mscrm.SearchWidget.initializeLocalizedStrings();
                var articleContentObject = $P_CRM('#kmArticleContentTemplate').tmpl(currentArticle);
                $P_CRM('#articleContent').append(articleContentObject);
            }
        }

        Sys.Application.add_load(Init);
    </script>
    <style>
        .kbArticleContent .contentwallbody { height: 98%; }
    </style>
</head>
<body>
<Form id="contentForm" runat="server">
    <div id="articlewall" class="kmwall">
        <script id="kmArticleContentTemplate" type="text/html">
            <div id="articlePopContent_${articleId}" class="kmwall">
                <div id="${articleId}" class="articleRow contentArticleRow">
                    <div class="articleThumbnailArea">
                        <div class="iconThumbnail">
                            <a href="#" tabindex="-1">
                                <% if (HighContrastEnabled)
                                   { %>
                                    <img alt="KbRecord" src="/_imgs/searchwidget/SearchWidgetArticleIcon_24.png" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING}"/>
                                <% }
                                   else
                                   { %>
                                    <img alt="KbRecord" class="ms-crm-ImageStrip-searchwidget_articleicon" src="/_imgs/imagestrips/transparent_spacer.gif" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING}"/>
                                <% } %>
                            </a>
                        </div>
                    </div>
                    <div id="${articleId}_contentFirstDIV" class="contentwallbody">
                        <div class="kmTitle contentkmTitle">
                            <span>${question} </span>
                        </div>
                        <div id="LastDiv_${articleId}" class="lastDiv contentlastDiv">
                            <div id="kmArticleType" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}">
                                <% if (HighContrastEnabled)
                                   { %>
                                    <img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetPublicArticle_16.png">
                                <% }
                                   else
                                   { %>
                                    <img id="kmArticleTypeImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLE_TYPE_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_public_article" src="/_imgs/imagestrips/transparent_spacer.gif">
                                <% } %>
                            </div>
                            <div class="lastDivSeparator hideParatureDependencies">
                                <img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif"/>
                            </div>
                            <div id="kmLastModifiedDate" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_ICON_TOOLTIP_STRING} {{html Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn)}}">
                                ${Mscrm.SearchWidget.localizedStrings.KMWALL_LAST_MODIFIED_LABEL_STRING} {{html CrmEncodeDecode.CrmHtmlEncode(Mscrm.SearchWidgetContentHelper.parseDate(lastModifiedOn))}}
                            </div>
                            <div class="lastDivSeparator">
                                <img id="km_Seperator" class="ms-crm-ImageStrip-activitieswall_Seperator" src="/_imgs/imagestrips/transparent_spacer.gif"/>
                            </div>
                            {{if isParature}}
                            <div id="kmRating" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}">
                                <% if (HighContrastEnabled)
                                   { %>
                                    <img id="kmRatingImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_RATING_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetRating_16.png">
                                <% }
                                   else
                                   { %>
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
                            {{/if}}
                            <div id="kmAttachment" class="lastDivImageCell hideParatureDependencies" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}">
                                <% if (HighContrastEnabled)
                                   { %>
                                    <img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" src="/_imgs/searchwidget/SearchWidgetAttachment_16.png">
                                <% }
                                   else
                                   { %>
                                    <img id="kmAttachmentImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_ATTACHMENTS_ICON_TOOLTIP_STRING}" class="ms-crm-ImageStrip-searchwidget_attachment" src="/_imgs/imagestrips/transparent_spacer.gif">
                                <% } %>
                            </div>
                            <div id="kmAttachmentContent" class="lastDivContent hideParatureDependencies">
                                ${attachmentCount}
                            </div>
                            <div id="kmNoOfViews" class="lastDivImageCell" title="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_TOOLTIP_STRING}">
                                <% if (HighContrastEnabled)
                                   { %>
                                    <img id="kmNoOfViewsImage" alt="${Mscrm.SearchWidget.localizedStrings.KMWALL_NOOFVIEWS_ICON_ALT_STRING}" src="/_imgs/searchwidget/SearchWidgetViews_16.png">
                                <% }
                                   else
                                   { %>
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
                                {{html Mscrm.SearchWidgetContentHelper.saveResponse(CrmEncodeDecode.CrmJavaScriptEncode(parent+"_frame_"+articleId),answer) }}
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
        <div id="articleContent" class="kbArticleContent">
        </div>
    </div>
</Form>
</body>
</html>