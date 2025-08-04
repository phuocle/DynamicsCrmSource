<%@ Page language="c#" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<%
Response.Cache.SetCacheability(HttpCacheability.Public);
Response.Cache.VaryByParams["*"] = true;
Response.Expires = CachingTime.UrlVersionedExpiration;
%>

<script id="postTemplateForActionCards" type="text/html">
<iframe frameborder="0" id="iFrmActionCards" style="min-height:342px;" name="actionCards" class="ms-crm-Custom" delayinitialize="0" src="{{html CrmEncodeDecode.CrmHtmlAttributeEncode(iframeUrlWithOrg)}}" ></iframe>
</script>

<table id="noRecordForActionHub" class="noRecordForActionHub" cellpadding="0" cellspacing="0" border="0" style="display:none" >
<tr>
<td>
<div class="panel">
<div class="text no-action-message" style="text-align: center;"><img id="imgNoRecordForActionHub" tabindex="0" alt="<%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("DelveActionHub.NoRecordsMessage")) %>" class="imageAction no-record" src="/_imgs/delve_noactions.png" />
<div><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("DelveActionHub.NoRecordsMessage")) %></div>
</div>
</div>
</td>
</tr>
</table>

<div id="actionhubControlWallContainer" class="wallContainer" >
</div>
