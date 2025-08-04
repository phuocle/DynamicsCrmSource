<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.MocaPreviewUnavailable" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        cancel = function() {
            closeWindow();
        };

        applychanges = function() {
            closeWindow();
        };

    </script>
</head>
<body>
<body>
<frm:dialogform id="crmForm" runat="server">
    <div id="Container">
        <span id="label" unselectable="on">
            <loc:Text ResourceId="MoCA_Previewer_Unavailable_Label" runat="server"/>
        </span>
    </div>
</frm:dialogform>
</body>
</html>