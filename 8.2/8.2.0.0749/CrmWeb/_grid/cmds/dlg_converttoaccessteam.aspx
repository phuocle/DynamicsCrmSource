<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ConvertToAccessTeamPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:text resourceid="Ribbon.Form.team.MainTab.Actions.ConvertToAccessTeam" runat="server"/>
    </title>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script type="text/javascript">
        var _sAction = "converttoaccessteam";

        function applychanges() {
            go();
        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %></div>
</frm:DialogForm>
</body>
</html>