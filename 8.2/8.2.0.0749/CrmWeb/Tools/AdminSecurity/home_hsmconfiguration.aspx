<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.AdminSecurity.HierarchySecurityModelingSettings" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="crc" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<!DOCTYPE html>
<html>
<head id="Head1" runat="server">
    <script type="text/javascript">
        function OpenPositionWindow() {
            if (IsHSMCheckBoxEnabled()) {
                openStdDlg(Mscrm.CrmUri.create('/Tools/business/home_position.aspx'), null, 905, 602, true);
            } else {
                return false;
            }

        }

        function OpenUserWindow() {
            if (IsHSMCheckBoxEnabled()) {
                openStdDlg(Mscrm.CrmUri.create('/Tools/business/home_user.aspx'), null, 905, 602, true);
            } else {
                return false;
            }
        }

        function IsHSMCheckBoxEnabled() {
            var ckEnableHSMConfiguration = document.getElementById("ckEnableHSMConfiguration");
            if (!IsNull(ckEnableHSMConfiguration) &&
                ckEnableHSMConfiguration.checked == true &&
                ckEnableHSMConfiguration.disabled == false) {
                return true;
            } else {
                return false;
            }

        }

        function validate() {
            var checkHSMOn = document.getElementById("ckEnableHSMConfiguration");
            var nodes = document.getElementById("QuickFindConfigBody").getElementsByTagName('*');
            var radioControls = document.getElementById("hsmRadioControls").getElementsByTagName('*');
            if (checkHSMOn.checked) {
                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].disabled = false;
                }
                for (var i = 0; i < radioControls.length; i++) {
                    radioControls[i].disabled = false;
                }
            } else {
                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].disabled = true;
                }
                for (var i = 0; i < radioControls.length; i++) {
                    radioControls[i].disabled = true;
                }
            }
        }

        function onLoadFunction() {
            var hierarchyDepth = document.getElementById("txtHierarchyDepth");
            if (!IsNull(hierarchyDepth)) {
                if (IsHSMCheckBoxEnabled()) {
                    hierarchyDepth.disabled = false;
                } else {
                    hierarchyDepth.disabled = true;
                }
            }

        }

    </script>
    <meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8"/>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <base target="_self"/>
</head>
<body onload="onLoadFunction()">
<div class="ms-crm-MainDiv">
    <div id="wrapper" class="ms-crm-Wrapper">
        <div class="ms-crm-home-menucontainer">
            <crc:MenuBar id="menuBar" runat="server"/>
        </div>
        <div id="QuickFindConfigHeader" class="ms-PageHeader">
            <label id="PageHeader" runat="server">
            </label>
        </div>
        <div id="Div1" class="ms-PageTitle">
            <label class="subtitle" id="PageDescription" runat="server"/>
        </div>
        <div class="ms-TurnHSM">
            <label style="margin-top: 30px;">
                <loc:Text ResourceId="Web.Tools.aspx_xml.aspx_HSMLable" runat="server"/>
            </label>
        </div>
        <div class="ms-CheckControlHSM">
            <ui:CheckBox id="ckEnableHSMConfiguration" runat="server" onclick="validate()"/>
            <label for="ckEnableHSMConfiguration">
                <loc:Text ResourceId="Web.Tools.aspx_xml.aspx_HSMLableTurn" runat="server"/>
            </label>
        </div>
        <div id="hsmRadioControls">
            <div class="ms-SelectHSM">
                <label>
                    <loc:Text ResourceId="Web.Tools.aspx_xml.aspx_HSMLableSelect" runat="server"/>
                </label>
            </div>
            <div class="ms-RadioControlHSM">
                <ui:Radio id="rdSelectHierarchyType" runat="server"/>
            </div>
            <div class="ms-crm-ManagerLinkButton">
                <a href="#" onclick="OpenUserWindow()">
                    <span style="color: Blue;" id="aUserLink">
                        <loc:Text ResourceId="HSM_Configure" runat="server"/>
                    </span>
                </a>
            </div>
            <div class="ms-crm-PositionLinkButton">
                <a href="#" onclick="OpenPositionWindow()">
                    <span style="color: Blue;" id="aPositionLink">
                        <loc:Text ResourceId="HSM_Configure" runat="server"/>
                    </span>
                </a>
            </div>
            <div class="ms-HierarchyDepth">
                <table summary="<loc:Text ResourceId="Web.Tools.HSMConfiguration.HierarchyDepth.Table" runat="server"/>">
                <tr>
                    <td>
                        <label for="txtHierarchyDepth">
                            <loc:Text ResourceId="Web.Tools.aspx_xml_HierarchyDepth" class="mx-BoldText" runat="server"/>
                        </label>
                    </td>
                    <td>
                        <ui:Number id="txtHierarchyDepth" runat="server"/>
                    </td>
                </tr>
                </table>
            </div>
            <div class="ms-SelectHSM">
                <label>
                    <loc:Text ResourceId="Web.Tools.aspx_xml.aspx_HSMLableExcludeEntity" runat="server"/>
                </label>
            </div>
        </div>
    </div>
    <div id="QuickFindConfigBody" class="ms-crm-HSMConfigDialog-Main">
        <form id="ConsoleForm">
            <div id="HSMConfigAvailableEntitiesCol" class="ms-crm-HSMConfigDialog-AvailableAttributesColumn">
                <div style="margin-bottom: 8px;">
                    <label for="AvailableEntities" class="ms-crm-HSMConfigDialog-ListLabel" id="AvailableEntitiesText"
                           runat="server"/>
                </div>
                <div class="ms-crm-HSMConfigDialog-List" id="AvailableEntities" hidefocus="true"
                     runat="server"/>
            </div>
            <div id="HSMConfigBodyButtonsCol" class="ms-crm-QuickFindConfigDialog-ButtonsColumn">
                <ul id="QuickFindConfigButtonList" style="width: 70px;">
                    <li>
                        <ui:Button id="AddButton" OnClick="MoveRight();" runat="server" CssClass="ms-crm-Add-Remove-button">
                        </ui:Button>
                    </li>
                    <li style="padding-top: 20px;">
                        <ui:Button id="RemoveButton" OnClick="MoveLeft();" runat="server" CssClass="ms-crm-Add-Remove-button">
                        </ui:Button>
                    </li>
                </ul>
            </div>
            <div id="HSMConfigSelectedEntitiesCol" class="ms-crm-HSMConfigDialog-SelectedAttributesColumn">
                <div style="margin-bottom: 8px;">
                    <label for="SelectedEntities" class="ms-crm-HSMConfigDialog-ListLabel" id="SelectedEntitiesText"
                           runat="server"/>
                </div>
                <div class="ms-crm-HSMConfigDialog-List" id="SelectedEntities" hidefocus="true" runat="server"/>
            </div>
        </form>
    </div>
</div>
</body>
</html>