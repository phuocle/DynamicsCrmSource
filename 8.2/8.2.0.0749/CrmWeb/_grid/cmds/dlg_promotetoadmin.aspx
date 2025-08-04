<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.PromoteToAdminDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        function applychanges() {
            var oCommand = new RemoteCommand("UserManager", "PromoteToAdmin");
            oCommand.SetParameter("userId", "<% = Request.QueryString["userid"] %>");
            oResult = oCommand.Execute();

            if (!oResult.Success) {
                if (oResult.ErrorCode == "0x8004F50F") {
                    alert(oResult.ErrorDescription);
                } else {
                    alert(LOCID_NO_PRIVILEGES_ERR);
                }
                window.returnValue = false;
            } else {
                window.returnValue = true;
            }

            closeWindow();
        }

        function cancel() {
            window.returnValue = false;
            closeWindow();
        }

    </script>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">
    <loc:Text ResourceId="Web._grid.cmds.dlg_promotetoadmin.aspx_message" runat="server"></loc:Text>
</frm:DialogForm>

</body>
</html>