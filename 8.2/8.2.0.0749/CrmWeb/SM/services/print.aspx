<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.Services.ServicePrintPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="javascript">
        Sys.Application.add_load(function() {
            var oIframe = document.getElementById("IFRAME_RuleTree");
            if (!IsNull(oIframe)) {
                oIframe.parentNode.parentNode.height = "500px";
            }
        });
    </script>
</head>
<body>
<frm:PrintForm id="crmForm" RenderOnlyBody="false" runat="server"/>
</body>
</html>