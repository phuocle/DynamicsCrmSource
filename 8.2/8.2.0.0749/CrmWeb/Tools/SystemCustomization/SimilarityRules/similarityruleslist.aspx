<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.SimilarityRules.SimilarityRulesListPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>


<head>

    <app:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript">
        Sys.Application.add_load(SimilaritySettingsOnLoad);

        function SimilaritySettingsOnLoad() {
            var crmGrid = $find("gridSimilarityRules");
            crmGrid.add_onBeforeFormLoad(Mscrm.SimilaritySettingsGrid.onSimilaritySettingsGridClick);
        }

        function onFilterChange() {
            var gridSimilarityRules = $find("gridSimilarityRules");
            gridSimilarityRules.SetParameter("similarityFilter",
                Mscrm.FormControlInputBehavior.GetBehavior("selFilter").get_dataValue());
            gridSimilarityRules.ResetPageNumber();
            gridSimilarityRules.Refresh();
        }
    </script>
</head>


<body>
<div class="stdTable">

    <div class="ms-crm-home-querycontainer">
        <table style="width: 100%" cellpadding="0" cellspacing="0">
            <tr>
                <td class="similarityRuleList_td_Filter" style="white-space: nowrap">
                    <label for="selFilter">
                        <span class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="SystemCustomization.SimilarityRulesListPage.Labels.Filter" runat="server"/>
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
            <app:AppGrid id="gridSimilarityRules" runat="server"/>
        </div>
    </div>
</div>
</body>

</html>