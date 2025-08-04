<%@ Page Inherits="Microsoft.Crm.Web.AdvancedFind.FetchData" Language="c#" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader runat="server" id="crmHeader"/>
    <script type="text/javascript">
        Sys.Application.add_load(FetchDataOnLoad);

        function FetchDataOnLoad() {
            var crmGrid = $find("crmGridControl");
            if (objecttypecode == Report) {
                crmGrid.add_onBeforeFormLoad(Mscrm.ReportUtil.handleReportDoubleClick);
            }

            crmGrid.SetParameter("disableDblClick", "0");


            if (objecttypecode == SavedQuery && USER_LANGUAGE_CODE != ORG_LANGUAGE_CODE) {
                crmGrid.SetParameter("disableDblClick", "1");
            }


            if (!IsNull(window.parent.ToggleSearchResultsContextualRibbon)) {
                window.parent.ToggleSearchResultsContextualRibbon();
            }
        }
    </script>
</head>
<body style="background-color: #fafafd;">
<ui:eventmanager runat="server" id="crmEventManager"/>
<div style="position: absolute; left: 10px; right: 10px; bottom: 10px; top: 10px;" id="fetchResults">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <sdk:gridcontrol id="crmGridControl" runat="server" IsLoadOnDemandEnabled=false style="display: block"/>
    </div>
</div>
</body>
</html>