<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.AutoCreateExternalPartyEnabledConfiguration" CodeBehind="Microsoft.Crm.Application.Pages.dll" EnableViewState="false" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8"/>

    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
    <div id="AutoCreateExternalPartyEnabledConfigMenu" class="ms-crm-Dialog-MenuBar">
        <mnu:appgenericmenubar id="crmMenuBar" runat="server"/>
    </div>
    <div id="AutoCreateExternalPartyEnabledConfigHeader" class="ms-crm-ExternalPartyEnabledConfigDialog-Header">
        <h1 class="titleFont noMargin" id="PageHeader" runat="server"/>
        <h4 class="descriptionFont noMargin" id="PageDescription" runat="server"/>
    </div>
    <div id="AutoCreateExternalPartyEnabledConfigBody" class="ms-crm-ExternalPartyEnabledConfigDialog-Main">
        <form id="ConsoleForm" method="post" action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAutoCreateExternalPartyFormAction()) %>">

            <div id="AutoCreateExternalPartyEnabledAvailableEntitiesCol" class="ms-crm-ExternalPartyEnabledConfigDialog-AvailableAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'ExternalPartyEnabledEntities');">
                <label for="ExternalPartyEnabledEntities" class="boldText ms-crm-ExternalPartyEnabledConfigDialog-ListLabel" id="ExternalPartyEnabledEntitiesText" runat="server"/>
                <div class="ms-crm-ExternalPartyEnabledConfigDialog-List" id="ExternalPartyEnabledEntities" hidefocus="true" runat="server"/>
            </div>

            <div id="AutoCreateExternalPartyEnabledBodyButtonsCol" class="ms-crm-ExternalPartyEnabledConfigDialog-ButtonsColumn">
                <ul id="AutoCreateExternalPartyEnabledConfigButtonList">
                    <li>
                        <ui:Button id="AddButton" OnClick="MoveRight();" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="RemoveButton" OnClick="MoveLeft();" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                </ul>
            </div>

            <div id="AutoCreateExternalPartyEnabledSelectedEntitiesCol" class="ms-crm-ExternalPartyEnabledConfigDialog-SelectedAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'SelectedAutoCreateExternalPartyEntities');">
                <label for="SelectedAutoCreateExternalPartyEntities" class="boldText ms-crm-ExternalPartyEnabledConfigDialog-ListLabel" id="SelectedAutoCreateExternalPartyEntitiesText" runat="server"/>
                <div class="ms-crm-ExternalPartyEnabledConfigDialog-List" id="SelectedAutoCreateExternalPartyEntities" hidefocus="true" runat="server"/>
            </div>
        </form>
    </div>
</frm:DialogForm>
</body>
</html>