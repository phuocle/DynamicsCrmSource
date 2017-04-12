<%@ Page language="c#" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<%
    Response.Cache.SetCacheability(HttpCacheability.Public);
    Response.Cache.VaryByParams["*"] = true;
    Response.Expires = CachingTime.UrlVersionedExpiration;
%>
<div id="onenoteControlWall" class="onenoteControlWall">
    <div id="header" class="header">
        <div class="filterAndRefreshContainer">
            <div class="wallActionsContainer">
            </div>
        </div>
    </div>

    <script id="postTemplateForOneNote" type="text/html">
        <div id={{>
            rowId}}>
            <div class="onenoteSection">
                <div class="sectionTitle">
                    <div class="sectionName">
                        <a onclick="event.preventDefault();Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.OpenOneNoteSection('{{>editUrl}}', '{{>absoluteUrl}}', '{{>encodedname}}');" title="{{>tooltip}}" href="#">
                            <span class="onenoteSectionTitle">{{>displayname}}</span>
                        </a>
                    </div>
                </div>
                <div class="sectionContent">
                    <div class="modifiedBy" title="{{>modifiedBy}}">
                        {{>modifiedBy}}
                    </div> -
                    <div class="modifiedOn" title="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.AuditInformation.CreatedByTooltip")) %> {{>author}} {{>created}} &#13;<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.AuditInformation.ModifiedByTooltip")) %> {{>modifiedBy}} {{>modified}}">
                        {{>modified}}
                    </div>
                </div>
            </div>
        </div>
    </script>
    <script id="showMoreLinkTemplateForOneNote" type="text/html">
        <a class="showMoreLink" href="#"
           title="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.Loading")) %>"
           alt="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.Loading")) %>">
            <div class="text"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.Loading")) %></div>
        </a>
    </script>

    <table id="inlineMessageForOneNote" class="inlineMessage" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td>
                <div class="panel">
                    <div class="text" id="progressMessageForOneNote" style="display: none"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.Loading")) %></div>
                    <div class="text" id="customErrorMessageForOneNote" style="display: none">
                    </div>
                    <div class="text" id="defaultError" style="display: none"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.DefaultError")) %></div>
                </div>
            </td>
        </tr>
    </table>

    <table id="noRecordForOneNote" class="noRecordForOneNote" cellpadding="0" cellspacing="0" border="0" style="display: none">
        <tr>
            <td>
                <div class="panel">
                    <div class="text">
                        <%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.NoRecordAvailable")) %> <a href="#" onclick="event.preventDefault();Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.OpenNoteBook();" id="noteBookLink"><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("OneNote.NoteBookLink")) %></a>
                    </div>
                </div>
            </td>
        </tr>
    </table>

    <div id="onenoteControlWallContainer" class="wallContainer">
    </div>
</div>