<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.QueueItemRemoveDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        div.Desc {
            padding-top: 5px;
            color: #444444;
        }
    </style>

    <script type="text/javascript">


        var _sAction = "queueitemremove";

        function applychanges() {
            go();
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
</frm:DialogForm>
</body>
</html>