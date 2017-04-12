<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.MicrosoftFlow.FlowTemplatesDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script>
        function cancel() {
            closeWindow();
        }
    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <div style="width: 100%; height: 100%; position: relative">
        <iframe id="FlowTemplatesFrame" name="FlowTemplates" frameborder="0" src="<%= TemplatesUrl %>" style='width: 100%; height: 100%; position: absolute; top: 0; left: 0;'></iframe>
    </div>
</frm:DialogForm>
</body>
</html>