<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ChangeWindowsLiveIdDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Components.UI"%>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="javascript">

        var userId;

        function saveWindowsLiveId() {
            var oResult;
            <% if (IsForm == "true")
               { %>
            var wlidtxt = document.getElementById("newUserWLID").value;

            <% } %>
            Mscrm.Utilities.setReturnValue(wlidtxt);
            closeWindow();
        }

        function cancel() {
            var r = confirm(LOCID_NOTIFY_WLID_CANCEL);
            if (r) {
                Mscrm.Utilities.setReturnValue(false);
                closeWindow();
            }
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div style="padding-left: 10px; padding-right: 10px">
        <table cellpadding="0" cellspacing="0">
            <col><col><col>
            <% if (dialogError)
               { %>
                <tr>
                    <td colspan="2">
                        <ui:LabelUI ID="ChangeWLIDError" runat="server"/>
                    </td>
                </tr>
            <% }
               else
               { %>
                <tr>
                    <td colspan="3" height="20px"></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>
                            <ui:LabelUI ID="UserName" runat="server"/>
                        </b>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" height="20px"></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <loc:text resourceid="Web._grid.cmds.dlg_ChangeWLID.aspx_content2" runat="server"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b><%= this.userWLID %></b>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" height="20px"></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <loc:text resourceid="Web._grid.cmds.dlg_ChangeWLID.aspx_content3" runat="server"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" height="10px"></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <sdk:EmailAddressControl ID="newUserWLID" runat="server"/>
                    </td>
                </tr>
            <% } %>
        </table>
    </div>
</frm:DialogForm>
</body>
</html>