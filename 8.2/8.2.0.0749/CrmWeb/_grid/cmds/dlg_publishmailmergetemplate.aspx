<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.PublishMailMergeTemplateForm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language=javascript>

        var _sAction = "publishmailmergetemplate";
        var _iObjType = <%= ObjType.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;

        function applychanges() {
            if (window.isInlined) {
                Mscrm.Utilities.setReturnValue(true);
            } else {

                window.isInlined = false;
            }
            go();
        }

        function cancel() {

            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }
    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
    <loc:Text ResourceId="PublishMailMergeTemplate_DialogText" runat="server"/>
</frm:DialogForm>

</body>
</html>