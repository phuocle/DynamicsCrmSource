<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Application.Controls.ReopenDialog.ReopenDialogPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<html>
<head>

    <%
        CurrentHeader.SetStyleSheet("/_common/styles/Dialogs.css.aspx");
        CurrentHeader.CreateClientAjaxComponent("Mscrm.DialogsControl", null);
    %>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="Web.SFA.opps.dlg_reopen.aspx_20" runat="server"/>
    </title>
    <script language="JavaScript">
        function go() {
            Mscrm.Utilities.setReturnValue(true);
            closeWindow();
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }
    </script>
</head>

<body>

<table style="width: 100%; height: 100%;" cellspacing="0" cellpadding="8">
    <tr>
        <td class="ms-crm-Dialog-Header">
            <div class="ms-crm-Dialog-Header-Title">
                <loc:Text ResourceId="Web.SFA.opps.dlg_reopen.aspx_44" runat="server"/>
            </div>
        </td>
    </tr>
    <tr>
        <td style="border-bottom: 1px solid #999999;" valign="top">
            <div id="divWarning">
                <loc:Text ResourceId="Web.SFA.opps.dlg_reopen.aspx_35" runat="server"/>
            </div>
            <div id="divStatus" class="opp_dlg_reopen_div_status"></div>
            <div id="divFill" class="opp_dlg_reopen_div_fill">&nbsp;</div>
        </td>
    </tr>
    <tr height="20">
        <td class="opp_dlg_reopen_td_buttons" style="border-top: 1px solid #ffffff;">
            <ui:Button ID="butBegin" OnClick="go();" ResourceId="A4A4842B-7564-4BCF-B21D-4D6A78F17BE1" runat="server"></ui:Button>
            &nbsp;
            <ui:Button OnClick="cancel();" ResourceId="C5C18B6A-47D1-4176-BD01-CD39ACF15234" runat="server"></ui:Button>
        </td>
    </tr>
</table>

</body>
</html>