<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.CloneRolePage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">

        var _sAction = "clonerole";
        var _iObjType = Role;

        Sys.Application.add_load(init);

        function init() {
            $get("butBegin").setAttribute("disabled", true);
            attachWindowOnBeforeUnload(window_onbeforeunload_CloneRole);
            $addHandler(document, "keydown", onKeyHandler);
            $addHandler(window,
                "unload",
                function() {
                    $removeHandler(document, "keydown", onKeyHandler);
                });
        }

        function applychanges() {
            __dialogXml = "<role><name>" +
                CrmEncodeDecode.CrmHtmlEncode($get("rolename").value) +
                "</name><roletoclone>";
            __dialogXml += CrmEncodeDecode
                .CrmHtmlEncode(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(RoleId) %>);
            __dialogXml += "</roletoclone></role>";


            _a = new Array(1);
            _renderFillBar = false;

            DisplayActionMsg(LOCID_SAVING_MESSAGE, 310, 150);

            window.setTimeout("go()", 50);
        }

        function onKeyHandler(ev) {
            ev = new Sys.UI.DomEvent(ev)
            var o = Mscrm.Utilities.getEventElement(ev);
            if (o.getAttribute("id") != "cmdDialogCancel" &&
                ev.keyCode == KEY_ENTER &&
                !$get("butBegin").getAttribute("disabled")) {
                ev.preventDefault();
                applychanges();
            }
        }

        function window_onbeforeunload_CloneRole(oEvent) {
            if (($get("openrole").checked) && _xmlhttp.readyState > 0) {
                var xmlhttpResponseXMLNode = _xmlhttp.responseXML;

                if (XUI.Xml.SelectSingleNode(xmlhttpResponseXMLNode, "/OK/roleid", null) != null) {
                    var roleId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlhttpResponseXMLNode, "/OK/roleid", null));

                    Mscrm.Utilities.setReturnValue(roleId);
                }
            }
        }

        function cancel() {
            closeWindow(true);
        }

        function UpdateUI() {
            if (Trim($get("rolename").value) == "") {
                $get("butBegin").setAttribute("disabled", true);
            } else {
                $get("butBegin").removeAttribute("disabled");
            }

        }

    </script>

</head>
<body>

<frm:DialogForm id="crmForm" runat="server">

    <table width="100%" cellpadding="0" cellspacing="5" style="table-layout: fixed">
        <col width="140px"/><col/>
        <tr valign="top">
            <td>
                <loc:Text ResourceId="Web._grid.cmds.dlg_clonerole.aspx_76" runat="server"/>
            </td>
            <td>
                <div><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(RoleName) %></div>
            </td>
        </tr>
        <tr valign="top">
            <td>
                <label for="rolename">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_clonerole.aspx_82" runat="server"/>
                </label>
            </td>
            <td>
                <input type="text" id="rolename" maxlength="50" onkeyup="UpdateUI();">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <br>
                <input type="checkbox" id="openrole" class="checkbox" checked>
                <label for="openrole">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_clonerole.aspx_90" runat="server"/>
                </label>
            </td>
        </tr>

    </table>

</frm:DialogForm>

</body>
</html>