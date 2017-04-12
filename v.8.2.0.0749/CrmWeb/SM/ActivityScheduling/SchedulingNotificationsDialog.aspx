<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Dialogs.SM.SchedulingNotificationsDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">

        Sys.Application.add_load(ApplicationLoad);

        function ApplicationLoad() {
            var oArgs = getDialogArguments();
            if (!IsNull(oArgs)) {
                $find("Notifications").SetBusinessNotifications(oArgs);
            }
        }

        function DismissDialog(returnCode) {
            Mscrm.Utilities.setReturnValue(returnCode);
            closeWindow();
        }

        function cancel() {
            closeWindow();
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <cnt:AppNotifications id="Notifications" Size="5" runat="server"/>
</frm:DialogForm>
</body>
</html>