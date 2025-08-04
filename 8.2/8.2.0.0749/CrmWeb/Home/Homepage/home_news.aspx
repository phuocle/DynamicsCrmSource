<!DOCTYPE html>
<%@ Page Inherits="Microsoft.Crm.Web.Announcements.CrmAnnouncements" Language="c#" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<div class="announcementsOuterDiv">
    <table cellspacing="2" cellpadding="3" class="announcementsInnerTable">
        <col style="width: 20px"/><col/>
        <% = RenderAnnouncements(false) %>
        <tr style="height: 100%">
            <td colspan="2">&nbsp;</td>
        </tr>
    </table>
</div>
</body>
</html>