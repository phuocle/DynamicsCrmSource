<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.EditAttributesDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_title" runat="server"/>
    </title>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">


        var _sAction = "editattribute";
        var _iObjType = "";
        var _boAnySettingChanged = false;
        var auditStatus = "";
        var searchStatus = "";
        var requireLevel = "";


        function applychanges() {
            auditStatus = getControlValue("rdIsAuditingEnabled");
            searchStatus = getControlValue("rdIsSearchable");
            requireLevel = getControlValue("slRequiredLevel");
            if (_boAnySettingChanged == true) {
                go();
            } else {
                closeWindow();
            }
        }

        function getCustParamsForItem(i) {
            var sCustParamsForItem = "&iEntityId=<%= iEntityId.ToString("B") %>" +
                "&iAuditStatus=" +
                auditStatus +
                "&iSearchable=" +
                searchStatus +
                "&iRequiredLevel=" +
                requireLevel;

            return sCustParamsForItem;
        }

        function getControlValue(controlId) {
            var control = $get(controlId);
            if (Mscrm.FormUtility.isControlDirty(control)) {
                _boAnySettingChanged = true;
                var controlBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior(control);
                return controlBehavior.get_dataValue();
            }
            return "";
        }

        function onClickEnableAuditCheck() {
            var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdIsAuditingEnabled");
            if (Mscrm.FormUtility.isControlDirty(ctrl)) {
                if (ctrl.get_dataValue() == 0) {
                    var confirmation = confirm(LOCID_CONFIRM_AUDIT_DISABLE);
                    if (confirmation == false) {
                        ctrl.set_dataValue(null);
                    }
                }
            }
        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table id="requirement_settings" style="width: 100%">
        <col style="width: 50%"/><col style="width: 50%"/>
        <tr>
            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom; white-space: nowrap" colspan="2">
                <br/>
                <loc:Text ResourceId="Web._grid.cmds.dlg_editattributes.aspx_requirement_level" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="slRequiredLevel">
                    <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_requirement_level" runat="server"/>
                </label>
            </td>
            <td>
                <ui:select id="slRequiredLevel" runat="server"/>
            </td>
        </tr>
    </table>
    <table id="searchable_settings" style="width: 100%">
        <col style="width: 50%"/><col style="width: 50%"/>
        <tr>
            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom; white-space: nowrap" colspan="2">
                <br/>
                <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_searchable" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="rdIsSearchable">
                    <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_searchable" runat="server"/>
                </label>
            </td>
            <td>
                <ui:radio id="rdIsSearchable" runat="server"/>
            </td>
        </tr>
    </table>
    <table id="audit_settings" style="width: 100%">
        <col style="width: 50%"/><col style="width: 50%"/>
        <tr>
            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom; white-space: nowrap" colspan="2">
                <br/>
                <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_auditing" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="rdIsAuditingEnabled">
                    <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_auditing" runat="server"/>
                </label>
            </td>
            <td>
                <ui:radio id="rdIsAuditingEnabled" onchange="onClickEnableAuditCheck();" runat="server"/>
            </td>
        </tr>
        <tr class="param" id="txtFieldAuditAlertMessage" runat="server">
            <td colspan="2">
                <img src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>"/>
                <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_entity_auditing_off" runat="server"/>
            </td>
        </tr>
        <tr class="param" id="txtFieldAuditAlertMessageGlobal" runat="server">
            <td colspan="2">
                <img src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>"/>
                <loc:text resourceid="Web._grid.cmds.dlg_editattributes.aspx_global_auditing_off" runat="server"/>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>