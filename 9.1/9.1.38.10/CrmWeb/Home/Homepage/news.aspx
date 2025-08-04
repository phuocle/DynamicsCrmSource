<%@ Page Inherits="Microsoft.Crm.Web.Announcements.CrmAnnouncements" Language="c#" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<cnt:AppHeader id="crmHeader" runat="server" />
<body class="homepage_news_body">

<table id="tblNews" width="100%" height="100%" cellspacing="2" cellpadding="3" style="table-layout:fixed;">
<colgroup>
<col width="20" />
<col />
</colgroup>
<% =RenderAnnouncements(true) %>
<tr>
<td colspan="2" class="hp_news_td_SpanAnnouncments">
<br />
<span id="_SPAN_News" runat="server" tabindex="0" class="link" onclick="parent.location.href='home_news.aspx'">
<a onclick="return false;" href="#">
<loc:Text ResourceId="Web.Home.Homepage.news.aspx_84" runat="server"/>
</a>
</span>
</td>
</tr>
</table>

</body>
</html>
