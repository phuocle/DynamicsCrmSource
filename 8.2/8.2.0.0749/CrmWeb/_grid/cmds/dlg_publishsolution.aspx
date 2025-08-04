<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.PublishSolutionDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">
        var _sAction = "publishsolution";
        var _iObjType = <%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>;

        function confirmMode(b) {
            window.returnValue = b;
            closeWindow();
        }

        function applychanges() {
            <%= dialogActionOk %>
        }


        function cancel() {
            closeWindow();
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <loc:Text id="FormTextTitle" ResourceId="Web._grid.cmds.dlg_publishsolution.aspx_1" runat="server">
                <loc:Argument runat="server"><%= LocalizedObjectName %></loc:Argument>
            </loc:Text>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>