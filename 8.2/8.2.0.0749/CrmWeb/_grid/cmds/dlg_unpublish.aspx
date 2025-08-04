<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Dialogs.UnpublishDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_unpublish.aspx_33" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">


        var _sAction = "unpublish";
        var _iObjType = <%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>;

        function applychanges() {
            go();
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

    <loc:Text ResourceId="Web._grid.cmds.dlg_unpublish.aspx_61" runat="server"/>

</frm:DialogForm>

</body>
</html>