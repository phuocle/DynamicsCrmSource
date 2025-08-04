<%@ Page Language="c#" MasterPageFile="~/AppPortal/common/appportal.master" Inherits="Microsoft.Crm.Application.Web.Pages.ConfigWait"
CodeBehind="Microsoft.Crm.Application.Web.Pages.dll" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>

<asp:content id="ConfigWaitContent" contentplaceholderid="globalPageContent" runat="server">
    <form id="FirstRunConfigWaitForm" runat="server">
        <div>
            <div id="AppPortalContentDiv">
                <iframe id="OrgSpinnerFrame" name="OrgSpinnerFrame" scrolling="no" width="100%" height="330px" frameborder="0" runat="server"></iframe>

                <div class="VideoTitle">
                    <h1>
                        <loc:Text ResourceId="AppPortal.GettingStarted.Video" runat="server"/>
                    </h1>
                </div>

                <div id="SpinnerExternalContentDiv" class="SpinnerExternalContentMargin" visible="true" runat="server">
                    <iframe id="ExternalFrameContent" name="ExternalFrameContent" scrolling="no" width="100%" height="500px" frameborder="0" runat="server"></iframe>
                </div>
            </div>
        </div>
    </form>
</asp:content>