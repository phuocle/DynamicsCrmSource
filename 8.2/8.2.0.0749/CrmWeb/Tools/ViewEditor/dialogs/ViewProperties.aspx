<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Views.ViewPropertiesDialog" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript">
        var _viewName;
        var _viewDesc;
        Sys.Application.add_load(function() {
            var o = getDialogArguments();
            _viewName = $get('viewName');
            _viewDesc = $get('viewDescId');
            _viewName.value = o[0];
            _viewDesc.value = o[1];

            var headerTitle = $get("headerTitle");
            var headerDescr = $get("headerDescr");
            XUI.Html.SetText(headerTitle, LOCID_VIEW_HEAD_TITLE);
            XUI.Html.SetText(headerDescr, LOCID_VIEW_HEAD_DESC);
        });

        function applychanges() {
            if (_viewName.value == "") {
                alert(LOCID_VIEW_NAME_REQUIRED);
            } else {
                Mscrm.Utilities.setReturnValue(new Array(_viewName.value, _viewDesc.value));
                closeWindow();
            }
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(null);
            closeWindow();
        }

        function updateUI() {
            $get('butBegin').disabled = (!_viewName.readOnly && (_viewName.value == ""));
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table border="0" cellspacing="0" cellpadding="8" width="100%" height="100%">
        <tr>
            <td class="ms-crm-Dialog-Header">
                <div id="headerTitle" class="ms-crm-Dialog-Header-Title"></div>
                <div id="headerDescr" class="ms-crm-Dialog-Header-Desc"></div>
            </td>
        </tr>
        <tr>
            <td class="ms-crm-Dialog-Main override-height-Auto">

                <table cellpadding="0" cellspacing="5" width="100%" height="100%">
                    <col width="100"></col>
                    <tr style="height: 25px">
                        <td id="nameLabel" class="ms-crm-Field-Required">
                            <label for="viewName">
                                <loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ViewProperties.aspx_54" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                            </label>
                        </td>
                        <td>
                            <ui:TextBox id="viewName" name="viewName" onblur="value = Trim(value);" maxlength="100" onkeyup="updateUI();" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <label for="viewDescId">
                                <loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ViewProperties.aspx_57" runat="server"/>
                            </label>
                        </td>
                        <td valign="top">
                            <ui:Textarea id="viewDescId" name="viewDesc" maxlength="200" style="height: 400px; overflow-y: auto;" onkeyup="updateUI();" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>