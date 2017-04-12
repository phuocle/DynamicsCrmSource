<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.RelevanceSearchFacetsAndFiltersConfiguration" CodeBehind="Microsoft.Crm.Application.Pages.dll" EnableViewState="false" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <script>
        var availableEntityAttributeCollection = <%= availableEntityAttributeCollection %>;
    </script>
    <style type="text/css">
        div.ms-crm-RefreshDialog-Header { height: 68px; }

        div.ms-crm-RefreshDialog-Main { top: 77px; }

        #filterCombo { width: 339px; }

        div.ms-crm-RefreshDialog-Header-Desc, h4.ms-crm-RefreshDialog-Header-Desc { padding-top: 0; }
    </style>
    <meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8"/>

    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
    <div id="QuickFindConfigMenu" class="ms-crm-Dialog-MenuBar">
        <mnu:appgenericmenubar id="crmMenuBar" runat="server"/>
    </div>
    <div id="QuickFindConfigHeader" class="ms-crm-QuickFindConfigDialog-Header" style="padding: 0">
        <h1 class="titleFont noMargin" id="PageHeader" runat="server" style="padding: 0;"/>
        <h4 class="descriptionFont noMargin" id="PageDescription" runat="server"/>
        <h4 class="ms-crm-RefreshDialog-Header-Desc" id="PageNote" style="-webkit-margin-before: 0; -webkit-margin-after: 10px; font-weight: normal;" runat="server">
            <b>
                <loc:text resourceid="ExternalSearch_Customization_Dialog_DescriptionNote" runat="server"/>
            </b>
            <loc:text resourceid="ExternalSearch_Customization_Dialog_NoteDescription" runat="server"/>
        </h4>

        <div class="ms-crm-RefreshDialog-Header-Desc" style="margin-bottom: 10px;">
            <label for="filterCombo" class="boldText" id="FilterEntityComboText" runat="server" style="font-weight: normal;"/>
            <ui:select id="filterCombo" name="filterCombo" role="FilterBox" runat="server" class="textbox allowTextSelection" style="width: 20% !important;" onchange="onFilterBoxChange();">
            </ui:select>
        </div>
    </div>
    <div id="QuickFindConfigBody" class="ms-crm-QuickFindConfigDialog-Main" style="margin-bottom: 0px; top: 56px; bottom: 0;">
        <form id="ConsoleForm" method="post" action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderFormAction()) %>">

            <div id="QuickFindAvailableEntitiesCol" class="ms-crm-QuickFindConfigDialog-AvailableAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'AvailableEntities');">
                <label for="AvailableEntities" class="boldText ms-crm-QuickFindConfigDialog-ListLabel" id="AvailableEntitiesText" runat="server"/>
                <div class="ms-crm-QuickFindConfigDialog-List" id="AvailableEntities" hidefocus="true" runat="server" style="top: 16px;"/>
            </div>
            <div id="hiddenDiv" style="display: none; visibility: hidden;" runat="server">
            </div>

            <div id="QuickFindBodyButtonsCol" class="ms-crm-QuickFindConfigDialog-ButtonsColumn" style="left: 365px;">
                <ul id="QuickFindConfigButtonList" style="top: 100px;">
                    <li>
                        <ui:Button id="AddButton" OnClick="MoveRight();" onkeydown="return HandleAddButtonEvents(new Sys.UI.DomEvent(event));" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="RemoveButton" OnClick="MoveLeft();" onkeydown="return HandleRemoveButtonEvents(new Sys.UI.DomEvent(event));" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="MoveUpButton" OnClick="MoveUp(false);" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="MoveDownButton" OnClick="MoveDown(false);" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="DefaultButton" OnClick="SetDefault(false);" runat="server" CssClass="consoleButton">
                        </ui:Button>
                    </li>
                </ul>
            </div>

            <div id="QuickFindSelectedEntitiesCol" class="ms-crm-QuickFindConfigDialog-SelectedAttributesColumn" onkeydown="return HandleKeyDown(new Sys.UI.DomEvent(event), 'SelectedEntities');">
                <label for="SelectedEntities" class="boldText ms-crm-QuickFindConfigDialog-ListLabel" id="SelectedEntitiesText" runat="server"/>
                <div class="ms-crm-QuickFindConfigDialog-List" id="SelectedEntities" hidefocus="true" runat="server" style="top: 16px;"/>
            </div>
            <% RenderWrpcToken(); %>
        </form>
    </div>

</frm:DialogForm>
</body>
</html>