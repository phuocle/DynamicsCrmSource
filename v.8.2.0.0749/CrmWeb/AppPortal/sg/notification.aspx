<%@ Page Language="c#" MasterPageFile="~/AppPortal/common/appportal.master"
Inherits="Microsoft.Crm.Application.Web.Pages.NotificationPage"
CodeBehind="Microsoft.Crm.Application.Web.Pages.dll" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<asp:Content ID="notificationContent" ContentPlaceHolderID="globalPageContent" runat="server">
    <form id="frmFeatureNotification" runat="server">
        <div class="AppPortalContentDiv">
            <h1>
                <loc:Text ResourceId="NotificationPage.Title" runat="server"/>
            </h1>
            <div class="padb30"></div>
            <div id="divNotifications" runat="server" class="NotificationDiv">
            </div>
            <iframe id="notificationsIFrame" width="700px" height="800px" frameborder="0" scrolling="no" runat="server"/>
        </div>
    </form>
</asp:Content>