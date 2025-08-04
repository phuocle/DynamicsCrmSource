<%@ Page Language="c#" Inherits="Microsoft.Crm.Mobile.Application.Pages.ConsoleEntityConfig" CodeBehind="Microsoft.Crm.Mobile.Application.Pages.dll" EnableViewState="false" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8"/>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <base target="_self"/>
    <style type="text/css">
        DIV.ms-crm-EntityConfigDialog-Header {
            border-bottom-style: solid;
            border-bottom-width: 1px;
            vertical-align: top;
            padding: 5px;
        }

        DIV.ms-crm-EntityConfigDialog-Main {
            position: absolute;
            width: 100%;
            vertical-align: top;
            border-bottom-style: none;
            background-color: rgb(233, 237, 241);
        }

        .ms-crm-EntityConfigDialog-AvailableAttributesColumn,
        .ms-crm-EntityConfigDialog-ButtonsColumn,
        .ms-crm-EntityConfigDialog-SelectedAttributesColumn {
            top: 5px;
            bottom: 5px;
            position: absolute;
        }

        .ms-crm-EntityConfigDialog-AvailableAttributesColumn {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: 5px;
            <% }
               else
               { %>
            left: 5px;
            <% } %>
            width: 40%;
        }

        .ms-crm-EntityConfigDialog-ButtonsColumn {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: 40%;
            <% }
               else
               { %>
            left: 40%;
            <% } %>
        }

        .ms-crm-EntityConfigDialog-ButtonsColumn > ul { position: relative; }

        .ms-crm-EntityConfigDialog-SelectedAttributesColumn {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            left: 5px;
            <% }
               else
               { %>
            right: 5px;
            <% } %>
            width: 40%;
        }

        .ms-crm-EntityConfigDialog-ListLabel { height: 10px; }

        DIV.ms-crm-EntityConfigDialog-List {
            position: absolute;
            left: 0px;
            bottom: 0px;
            overflow-y: scroll;
            width: 100%;
            background-color: #FFFFFF;
            border: 1px solid #949E9C;
        }
    </style>
</head>
<body>
<div id="formEditorMenu" class="ms-crm-Dialog-MenuBar">
    <mnu:appgenericmenubar id="crmMenuBar" runat="server"/>
</div>
<div id="formEditorHeader" class="ms-crm-EntityConfigDialog-Header">
    <h1 class="titleFont noMargin" id="EntityConfigNameTitle" runat="server"/>
    <h4 class="descriptionFont noMargin" id="SelectFieldsToShowDescription" runat="server"/>
</div>
<div id="formEditorBody" class="ms-crm-EntityConfigDialog-Main">
    <form id="ConsoleForm" method="post" action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderFormAction()) %>">
        <input type="hidden" id="FormXml" name="FormXml"/>
        <input type="hidden" id="FormName" name="FormName"/>
        <input type="hidden" id="FormDescription" name="FormDescription"/>
        <input type="hidden" id="ClosePage" name="ClosePage"/>
        <input type="hidden" id="ParentFormId" name="ParentFormId"/>

        <div id="formEditorBodyAvailableAttributesCol" class="ms-crm-EntityConfigDialog-AvailableAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'AvailableAttributes');">
            <label for="AvailableAttributes" class="boldText ms-crm-EntityConfigDialog-ListLabel" id="AvailableAttributesText" runat="server"/>
            <div class="ms-crm-EntityConfigDialog-List" id="AvailableAttributes" hidefocus="true" runat="server"/>
        </div>

        <div id="formEditorBodyButtonsCol" class="ms-crm-EntityConfigDialog-ButtonsColumn">
            <ul id="formEditorBodyButtonList">
                <li>
                    <ui:Button id="AddButton" OnClick="MoveRight();" runat="server" CssClass="consoleButton">
                    </ui:Button>
                </li>
                <li>
                    <ui:Button id="AddAllButton" OnClick="MoveRightAll();" runat="server" CssClass="consoleButton">
                    </ui:Button>
                </li>
                <li style="padding-top: 20px;">
                    <ui:Button id="RemoveButton" OnClick="MoveLeft();" runat="server" CssClass="consoleButton">
                    </ui:Button>
                </li>
                <li>
                    <ui:Button id="RemoveAllButton" OnClick="MoveLeftAll();" runat="server" CssClass="consoleButton">
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
                <li>
                    <ui:Button id="ReadOnlyButton" OnClick="MarkReadonly();" runat="server" CssClass="consoleButton">
                    </ui:Button>
                </li>
            </ul>
        </div>

        <div id="formEditorBodySelectedAttributesCol" class="ms-crm-EntityConfigDialog-SelectedAttributesColumn">
            <label for="SelectedAttributes" class="boldText ms-crm-EntityConfigDialog-ListLabel" id="SelectedAttributesText" runat="server"/>
            <div class="ms-crm-EntityConfigDialog-List" id="SelectedAttributes" hidefocus="true" runat="server"/>
        </div>

        <% RenderWrpcToken(); %>
    </form>
</div>
</body>
</html>