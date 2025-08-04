<%@ Page language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.MiniCampaigns.Home" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>

    <script type="text/javascript" language="JavaScript">

        var _sSearchResults = LOCID_SEARCH_RESULTS;
        Sys.Application.add_load(homeMinicampsLoad);

        function homeMinicampsLoad() {
            HandleBackButtonIssues("minicamps");
        }

        function handleMiniCampView(o) {
            var crmGrid = $find("crmGrid");
            var SavedQuerySelector = document.getElementById("crmGrid_SavedQuerySelector");
            var viewId = SavedQuerySelector.options[SavedQuerySelector.selectedIndex].value;
            if (viewId == _sSearchResults) {
                viewId = SavedQuerySelector.quickFindQuery;
                crmGrid.SetParameter("viewid", viewId);
                crmGrid.SetParameter("quickfind", sQuickFind);

                crmGrid.SetParameter("filter", "");

                crmGrid.Reset();
            } else {
                quickFindReset();
                handleView(o, crmGrid);
            }

            var crmGridJumpBar = $find('crmGrid_JumpBar');
            if (!IsNull(crmGridJumpBar)) {
                crmGridJumpBar.Reset();
            }
        }


        function quickFindReset() {

            var SavedQuerySelector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector");
            SavedQuerySelector.RemoveOption(_sSearchResults);


            var quickFindContainer = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_quickFindContainer");
            quickFindContainer.NotifyExitedQuickFind();
            sQuickFind = "";
        }

        function quickFind(oGrid) {
            try {
                var findCriteria = document.getElementById(oGrid.id + "_findCriteria");
                var sFindCriteria = Trim(findCriteria.value.replace(/[\*]+/, "*"));

                sFindCriteria = sFindCriteria.replace(/^\u3000+|\u3000+$/g, "");
                findCriteria.value = sFindCriteria;
                if (sFindCriteria == "") {
                    alert(LOCID_SEARCH_ALERT_NO_CRITERIA);
                    return false;
                }

                sQuickFind = sFindCriteria;

                var SavedQuerySelector = document.getElementById("crmGrid_SavedQuerySelector");
                if (SavedQuerySelector.value != _sSearchResults) {

                    var o = $find("crmGrid_SavedQuerySelector").AddOption(_sSearchResults, _sSearchResults);
                    o.Search = true;
                    o.Type = SavedQuery;


                    SavedQuerySelector.value = _sSearchResults;
                }
                handleMiniCampView(this);

            } catch (e) {
                alert(LOCID_SEARCH_LIST_NOT_OPEN);
                return false;
            }
            return true;
        }

        function clearFind() {
            quickFindReset();
            handleMiniCampView(this);
        }

    </script>
</head>

<body class="stage">
<div style="position: relative" class="stdTable">
    <div class="ms-crm-home-querycontainer">
        <table class="home_minicamps_table" width="100%" cellpadding="0" cellspacing="0">
            <col width="60%"><col width="20"><col><col width="40%">
            <tr>
                <td>
                    <cnt:AppQuickFind id="crmQuickFind" runat="server"/>
                </td>
                <td align="center">
                    <span class="home_minicamps_span_QuickFindSpacer">&nbsp;</span>
                </td>
                <td nowrap class="home_minicamps_td_Label">
                    <span class="ms-crm-Bold-Header">
                        <loc:Text ResourceId="Web.View_Label_70" runat="server"/>
                    </span>
                </td>
                <td>
                    <crm:ViewSelector runat="server" id="crmGrid_SavedQuerySelector"/>
                </td>
            </tr>
        </table>
    </div>
    <div class="ms-crm-home-menucontainer">
        <mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
    </div>
    <div id="mcGridContainer" class="ms-crm-absolutePosition" runat="server">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="true"/></td>
        </div>
    </div>
</div>

</body>
</html>