<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.BuildTopicModelDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader ID="crmHeader" runat="server"/>
    <title></title>
    <script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery1.7.2.min.js"></script>
    <script language="JavaScript">

        var _sAction = "buildtopicmodel";
        var _iObjType = <%= ObjType.ToString(CultureInfo.InvariantCulture) %>;

        function applychanges() {
            go();
        }

        function cancel() {
            closeWindow();
        }

    </script>

    <style type="text/css">
        #loadingContainer {
            height: 100%;
            width: 100%;
            position: relative;
            background-color: white;
            opacity: 0.9;
        }

        #loadingContainer td {
            vertical-align: middle;
            text-align: center;
        }
    </style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server">
    <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td></td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>