<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Attributes.AttributeListPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>


<head>


    <app:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript">
        _oConst.sDisableDoubleClick = "<%= disableDoubleClick %>";
    </script>
</head>


<body>
<div class="stdTable" style="position: relative; margin: 0px 7px 0px 10px;">

    <div class="ms-crm-home-querycontainer">
        <table style="width: 100%" cellpadding="0" cellspacing="0">
            <tr>
                <td class="attributeList_td_Filter" style="white-space: nowrap">
                    <label for="selFilter">
                        <span class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="SystemCustomization.EntityListPage.Labels.Filter" runat="server"/>
                        </span>
                    </label>
                </td>
                <td style="width: 100%">
                    <ui:Select id="selFilter" OnChange="onFilterChange();" runat="server"/>
                </td>
            </tr>
        </table>
    </div>

    <div class="ms-crm-home-menucontainer">
        <crm:MenuBar id="menuBar" runat="server"/>
    </div>

    <div class="ms-crm-home-staticgridcontainer" style="bottom: 10px;">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <app:AppGrid id="gridAttributes" runat="server"/>
        </div>
    </div>
</div>
</body>

</html>