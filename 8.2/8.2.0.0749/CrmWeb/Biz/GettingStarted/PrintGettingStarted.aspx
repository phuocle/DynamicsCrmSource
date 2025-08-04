<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.GettingStarted.PrintGettingStartedHome" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <script language="JavaScript" type="text/javascript">
        $addHandler(window, 'load', PageOnLoad);

        function PageOnLoad() {
            $get("mnucrmMenuBarhelp").style.display = "none";
        }
    </script>
</head>

<body>
<div border="0" cellspacing="0" cellpadding="0" width="100%" height="23">
    <div id="printHeader" style="display: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CanShowMenu) %>">
        <div height="23">
            <mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
        </div>
    </div>
</div>
</body>
</html>