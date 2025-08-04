<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.DisplayStrings.DisplayStringListPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>

<body class="displayStringList_body">
<div class="ms-crm-Form-Layout ms-crm-absolutePosition" style="bottom: 10px; left: 10px; right: 7px;">

    <div style="height: 25px">
        <mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
    </div>

    <div class="ms-crm-absolutePosition" style="top: 25px">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:AppGrid id="gridDisplayStrings" runat="server"/>
        </div>
    </div>
</div>
</body>

</html>