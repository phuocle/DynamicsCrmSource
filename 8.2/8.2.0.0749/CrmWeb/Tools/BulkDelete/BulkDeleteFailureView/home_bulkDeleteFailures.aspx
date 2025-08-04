<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.BulkDelete.BulkDeleteFailures" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE HTML>
<html>
<head>
    <cnt:appheader runat="server" id="crmHeader"/>
    <script type="text/javascript">

        Sys.Application.add_load(function() {

            var queryTypeSelector = $get('queryTypeSelector');
            var tdQueryTypeLabel = $get('tdQueryTypeLabel');
            if (queryTypeSelector.length == 1) {
                queryTypeSelector.style.visibility = "hidden";
                tdQueryTypeLabel.style.visibility = "hidden";
            }
        });

        function OnQueryTypeChange(oSelect) {

            oGrid = $find("crmGrid");


            if (IsNull(oGrid)) {
                alert(LOCID_GRID_NOT_FOUND);
                return;
            }

            oGrid
                .SetParameter("queryindex", Mscrm.FormControlInputBehavior.GetElementBehavior(oSelect).get_dataValue());
            oGrid.Refresh();
        }
    </script>
</head>
<body class="stage">
<div style="position: relative" class="stdTable">
    <div style="height: 30px; padding-top: 5px">
        <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td id="tdQueryTypeLabel" align="right" nowrap style="padding-right: 3px;">
                    <span class="ms-crm-Bold-Header">
                        <loc:text resourceid="Selected_Query_BulkDeleteFailureView_Label" runat="server"/>
                    </span>
                </td>
                <td id="tdQueryTypeSelector" style="padding-right: 3px;">
                    <ui:select id="queryTypeSelector" runat="server" onchange="OnQueryTypeChange(this);"/>
                </td>
            </tr>
        </table>
    </div>
    <div style="height: 25px">
        <mnu:appgridmenubar id="crmMenuBar" runat="server"/>
    </div>
    <div class="ms-crm-absolutePosition" style="top: 60px">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:appgrid runat="server" id="crmGrid"/>
        </div>
    </div>
</div>
</body>
</html>