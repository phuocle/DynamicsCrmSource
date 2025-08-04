<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ApproveEmailAddressDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <title>
        <loc:Text id="dialogTitle" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        var _sAction = "approve_emailaddress";
        var _iObjType = <%= ObjType %>;
        var _customAction = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CustomAction) %>;

        function applychanges() {
            go();
        }


        function getCustParamsForItem(index) {
            switch (_customAction.toLowerCase()) {
            case "approveemail":
                return "&customAction=approveemail";
            case "rejectemail":
                return "&customAction=rejectemail";
            }
        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div>
        <p><%= disclaimerText %></p>
        <p><%= dialogBody %></p>
    </div>
</frm:DialogForm>
</body>
</html>