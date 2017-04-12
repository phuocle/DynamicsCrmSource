<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.CancelDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>

<html>
<head>
    <title>
        <loc:Text ResourceId="A7AFEF10-4A11-4559-BC97-E794995AD8CC" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">


        var _sAction = "cancel";
        var _iObjType = <%= ObjType %>;

        function applychanges() {
            go();
        }

        function cancel() {
            closeWindow();
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>

</frm:DialogForm>

</body>
</html>