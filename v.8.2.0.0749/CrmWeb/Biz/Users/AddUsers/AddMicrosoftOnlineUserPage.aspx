<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.AddMicrosoftOnlineUserPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">


        function moveNext() {
            safeWindowOpen(Mscrm.CrmUri
                .create(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(MSOnlinePortalUrl.ToString()) %>),
                null,
                null);
            WizardNavigate(_WizardNavigateEnum.CLOSE);
        }

    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <div id="addUserDescription" runat="server">
    </div>
</frm:WizardForm>
</body>
</html>