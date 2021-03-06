<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.AlternateKeys.AlternateKeysListPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>


<head>

    <app:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript" language="javascript">
        Sys.Application.add_load(AlternateKeysOnLoad);

        function AlternateKeysOnLoad() {
            var crmGrid = $find("gridAlternateKeys");
            crmGrid.add_onBeforeFormLoad(Mscrm.AlternateKeysGrid.onAlternateKeysGridDblClick);
        }
    </script>
</head>


<body>
<div class="stdTable">

    <div class="ms-crm-home-menucontainer">
        <crm:MenuBar id="menuBar" runat="server"/>
    </div>

    <div class="ms-crm-home-staticgridcontainer" style="top: 26px">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <app:AppGrid id="gridAlternateKeys" runat="server"/>
        </div>
    </div>
</div>
</body>

</html>