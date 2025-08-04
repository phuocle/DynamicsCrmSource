<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ApproveDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_approve.aspx_27" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">


        var _sAction = "approve";
        var _iObjType = <%= ObjType %>;

        function applychanges() {
            go();
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

    <loc:Text ResourceId="Web._grid.cmds.dlg_approve.aspx_55" runat="server"/>

</frm:DialogForm>

</body>
</html>