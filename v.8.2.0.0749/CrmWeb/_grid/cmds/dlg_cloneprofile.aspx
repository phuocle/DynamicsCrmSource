<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.CloneProfilePage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
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
        var _sAction = "cloneprofile";
        var _iObjType = Mscrm.InternalUtilities.EntityTypeCode.ChannelAccessProfile;
        Sys.Application.add_load(init);

        function init() {
            $get("butBegin").setAttribute("disabled", true);
            $addHandler(document, "keydown", onKeyHandler);
            $addHandler(window,
                "unload",
                function() {
                    $removeHandler(document, "keydown", onKeyHandler);
                });
        }

        function applychanges() {
            __dialogXml = "<profile><name>" +
                CrmEncodeDecode.CrmHtmlEncode($get("profileName").value) +
                "</name><profiletoclone>";
            __dialogXml += CrmEncodeDecode
                .CrmHtmlEncode(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ProfileId) %>);
            __dialogXml += "</profiletoclone></profile>";
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

        function cancel() {
            closeWindow(true);
        }

        function UpdateUI() {
            if (Trim($get("profileName").value) == "") {
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
        <col width="140px"/>
        <col/>
        <tr valign="top">
            <td>
                <loc:Text ResourceId="Web._grid.cmds.dlg_cloneprofile.aspx_76" runat="server"/>
            </td>
            <td>
                <div><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ProfileName) %></div>
            </td>
        </tr>
        <tr valign="top">
            <td>
                <label for="profileName">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_cloneprofile.aspx_82" runat="server"/>
                </label>
            </td>
            <td>
                <input type="text" id="profileName" maxlength="50" onkeyup="UpdateUI();">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <br>
                <input type="checkbox" id="openProfile" class="checkbox" checked>
                <label for="openProfile">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_cloneprofile.aspx_90" runat="server"/>
                </label>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>