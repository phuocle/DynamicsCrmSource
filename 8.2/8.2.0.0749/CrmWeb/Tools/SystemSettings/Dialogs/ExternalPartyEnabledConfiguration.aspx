<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.ExternalPartyEnabledConfiguration" CodeBehind="Microsoft.Crm.Application.Pages.dll" EnableViewState="false" %>
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
    <div id="ExternalPartyEnabledConfigMenu" class="ms-crm-Dialog-MenuBar">
        <mnu:appgenericmenubar id="crmMenuBar" runat="server"/>
    </div>
    <div id="ExternalPartyEnabledConfigHeader" class="ms-crm-ExternalPartyEnabledConfigDialog-Header">
        <h1 class="titleFont noMargin" id="PageHeader" runat="server"/>
        <h4 class="descriptionFont noMargin" id="PageDescription" runat="server"/>
    </div>
    <div id="ExternalPartyEnabledConfigBody" class="ms-crm-ExternalPartyEnabledConfigDialog-Main">
        <form id="ConsoleForm" method="post" action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderExternalPartyFormAction()) %>">

            <div id="ExternalPartyEnabledAvailableEntitiesCol" class="ms-crm-ExternalPartyEnabledConfigDialog-AvailableAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'AvailableEntities');">
                <label for="AvailableEntities" class="boldText ms-crm-ExternalPartyEnabledConfigDialog-ListLabel" id="AvailableEntitiesText" runat="server"/>
                <div class="ms-crm-ExternalPartyEnabledConfigDialog-List" id="AvailableEntities" hidefocus="true" runat="server"/>
            </div>

            <div id="ExternalPartyEnabledBodyButtonsCol" class="ms-crm-ExternalPartyEnabledConfigDialog-ButtonsColumn">
                <ul id="ExternalPartyEnabledConfigButtonList">
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

            <div id="ExternalPartyEnabledSelectedEntitiesCol" class="ms-crm-ExternalPartyEnabledConfigDialog-SelectedAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'SelectedEntities');">
                <label for="SelectedEntities" class="boldText ms-crm-ExternalPartyEnabledConfigDialog-ListLabel" id="SelectedEntitiesText" runat="server"/>
                <div class="ms-crm-ExternalPartyEnabledConfigDialog-List" id="SelectedEntities" hidefocus="true" runat="server"/>
            </div>
        </form>
    </div>
</frm:DialogForm>
</body>
</html>