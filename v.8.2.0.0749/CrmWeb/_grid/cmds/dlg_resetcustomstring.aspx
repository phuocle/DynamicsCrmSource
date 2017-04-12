<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ResetCustomStringPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script language="JavaScript">


    var _sAction = "resetcustomstring";
    var _iObjType = DisplayString;

    function applychanges() {
        if (window.confirm(LOCID_RESET_CONFIRMATION)) {
            go();
        }
    }

    function cancel() {
        closeWindow();
    }

</script>

<loc:Text ResourceId="Grid_Action_ResetCustomMessage_Information" runat="server"/>