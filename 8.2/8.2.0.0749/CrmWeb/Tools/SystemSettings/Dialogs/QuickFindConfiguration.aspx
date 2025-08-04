<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.QuickFindConfiguration" CodeBehind="Microsoft.Crm.Application.Pages.dll" EnableViewState="false" %>
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
    <div>
        <span for="NoteString" class="ms-crm-QuickFindConfigDialog-NoteString" id="NoteString" runat="server"/>
        <span for="NoteForCategorizedSearchText" class="ms-crm-QuickFindConfigDialog-NoteLabel" id="NoteForCategorizedSearchText" runat="server"/>
    </div>
    <div id="QuickFindConfigMenu" class="ms-crm-Dialog-MenuBar">
        <mnu:appgenericmenubar id="crmMenuBar" runat="server"/>
    </div>
    <div id="QuickFindConfigHeader" class="ms-crm-QuickFindConfigDialog-Header">
        <h1 class="titleFont noMargin" id="PageHeader" runat="server"/>
        <h4 class="descriptionFont noMargin" id="PageDescription" runat="server"/>
    </div>
    <div id="QuickFindConfigBody" class="ms-crm-QuickFindConfigDialog-Main">
        <form id="ConsoleForm" method="post" action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderFormAction()) %>">

            <div id="QuickFindAvailableEntitiesCol" class="ms-crm-QuickFindConfigDialog-AvailableAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'AvailableEntities');">
                <label for="AvailableEntities" class="boldText ms-crm-QuickFindConfigDialog-ListLabel" id="AvailableEntitiesText" runat="server"/>
                <div class="ms-crm-QuickFindConfigDialog-List" id="AvailableEntities" hidefocus="true" runat="server"/>
            </div>

            <div id="QuickFindBodyButtonsCol" class="ms-crm-QuickFindConfigDialog-ButtonsColumn">
                <ul id="QuickFindConfigButtonList">
                    <li>
                        <ui:Button id="AddButton" OnClick="MoveRight();" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="RemoveButton" OnClick="MoveLeft();" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="MoveUpButton" OnClick="MoveUp(false);" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li>
                        <ui:Button id="MoveDownButton" OnClick="MoveDown(false);" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                </ul>
            </div>

            <div id="QuickFindSelectedEntitiesCol" class="ms-crm-QuickFindConfigDialog-SelectedAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'SelectedEntities');">
                <label for="SelectedEntities" class="boldText ms-crm-QuickFindConfigDialog-ListLabel" id="SelectedEntitiesText" runat="server"/>
                <div class="ms-crm-QuickFindConfigDialog-List" id="SelectedEntities" hidefocus="true" runat="server"/>
            </div>

            <% RenderWrpcToken(); %>
        </form>
    </div>
</frm:DialogForm>
</body>
</html>