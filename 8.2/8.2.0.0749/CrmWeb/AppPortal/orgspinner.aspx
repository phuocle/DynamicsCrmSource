<%@ Page Language="c#" MasterPageFile="~/AppPortal/common/plainglobal.master" Inherits="Microsoft.Crm.Application.Web.Pages.OrgSpinner"
CodeBehind="Microsoft.Crm.Application.Web.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<asp:Content ID="PageHeader" ContentPlaceHolderID="globalPageHeader" Runat="server">
</asp:Content>

<asp:Content ID="ResponsePageScript" ContentPlaceHolderID="globalPageScript" Runat="server">

    <% if (SpinnerContainer.Visible)
       {
    %>

        setTimeout(
        "window.location.replace(<%= this.BuildReplaceUrlString() %>);",
        <%= this.RefreshInterval %> * 1000
        );
    <%
       }
    %>

</asp:Content>

<asp:content id="OrgSpinnerPageContent" contentplaceholderid="globalPageContent"
             runat="server">
    <div id="AppPortalContentDiv" class="AppPortalContentDiv" style="overflow: hidden">
        <form id="OrgSpinnerForm" runat="server">

            <div ID="MainHeader" runat="server">
                <h1>
                    <loc:Text runat="server" ID="PageTitle"/>
                    <span runat="server" id="SpinnerContainer">
                        <asp:Image ID="Spinner" Width="16px" Height="16px" ImageUrl="/_imgs/appportal/spin.gif" runat="server"/>
                    </span>
                </h1>
            </div>

            <div runat="server" id="ButtonContainer">
                <div class="padb10"></div>
                <cnt:AppPortalButton ID="RedirectButton" ResourceId="OrgWaiting.Button.Redirect" runat="server" Strong="true"/>
            </div>

            <div runat="server" id="NonCompatibleBrowserContainer">
                <div class="padb10"></div>
                <div class="FloatLeft">
                    <asp:Image ID="ErrorIcon" Width="32px" Height="32px" ImageUrl="/_imgs/error/notif_icn_critical.png" runat="server"/>
                </div>
                <div class="H1MarginLeft">
                    <div>
                        <loc:Text ResourceId="OrgWaiting.Header.Ready" runat="server"/>
                    </div>
                    <div class="H1Spacer"></div>
                    <div>
                        <loc:Text ResourceId="Web._common.error.unsupported.action" runat="server"/>
                    </div>
                </div>
            </div>

            <div id="BookmarkContainer" runat="server">
                <div class="padb10"></div>
                <div width="700px">
                    <span id="MessageContainer" Visible="false" runat="server">
                        <loc:Text runat="server" ID="MainMessage"/>
                    </span>
                </div>
                <div class="padb40"></div>
                <div style="word-wrap: break-word;">
                    <div>
                        <loc:Text ResourceId="OrgWaiting.Organization.Bookmark.Instruction" runat="server"/>
                    </div>
                    <div class="padb5"></div>
                    <span class="LabelHeading">
                        <asp:Literal ID="CrmLink" runat="server"/>
                    </span>
                </div>
                <div class="padb20"></div>
                <div style="word-wrap: break-word;">
                    <div>
                        <loc:Text ResourceId="AppPortal.Office365.Instruction" runat="server"/>
                    </div>
                    <div class="padb5"></div>
                    <span class="LabelHeading">
                        <asp:Literal ID="OSDPLink" runat="server"/>
                    </span>
                </div>
            </div>
        </form>
    </div>
</asp:content>