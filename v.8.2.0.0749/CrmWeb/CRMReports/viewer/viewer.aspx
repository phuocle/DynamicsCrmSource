<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Reporting.SrsViewer" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>

<script language="Javascript">

    var oFrame = null;
    var _currentReloadAttempt = 0;
    var _maxReloadAttempt = 300;
    var FilterEditor;
    var _filterEditorSpan;
    var _renderSpan;
    var _divResultFrame;
    var _compatNotification;
    var _edgeNotification;

    Sys.Application.add_load(ReportViewerOnLoad);

    function ReportViewerOnLoad() {
        _filterEditorSpan = $get('filterEditorSpan');
        _renderSpan = $get('renderSpan');
        _divResultFrame = $get('divResultFrameInner');
        _compatNotification = $get('compatibilityNotification');
        _edgeNotification = $get('edgeUnsupportedNotification');
        waitForControlsToLoad();
        <%
            if (Microsoft.Crm.Security.User.GetPrivilege(Util.Report, PrivilegeId.Write, Microsoft.Crm.Application.Security.UserInformation.Current) && (action == "editfilter"))
            {
        %>
        attachWindowOnBeforeUnload(OnBeforeUnloadHandler);
        <% } %>

        AddOpenInQuirksModeLink();
        AddSupportedBrowsersLink();
    }

    function AddOpenInQuirksModeLink() {
        if (!IsNull(_compatNotification)) {
            var notificationDiv = XUI.Html.DomUtils.GetFirstChild(_compatNotification);
            if (!IsNull(notificationDiv)) {
                var notificationMsg = $get(notificationDiv.id + "_text");
                notificationMsg.innerHTML = notificationMsg.innerText +
                    " <a href='#' class='default-link' onclick='openInQuirksMode();'>" +
                    LOCID_RPTVIEW_RENDERINQUIRKSMODE +
                    "</a>";
                var divRv = $get("divReportViewer");
                divRv.style["height"] = "90%";
            }
        }
    }

    function AddSupportedBrowsersLink() {
        if (!IsNull(_edgeNotification) && Mscrm.Utilities.isEdge()) {
            var notificationDiv = XUI.Html.DomUtils.GetFirstChild(_edgeNotification);
            if (!IsNull(notificationDiv)) {
                var notificationMsg = $get(notificationDiv.id + "_text");
                notificationMsg.innerHTML = notificationMsg.innerText +
                    " <a target='_blank' href='" +
                    LOCID_RPTVIEW_BROWSERSLINK +
                    "' class='default-link'>" +
                    LOCID_RPTVIEW_BROWSERSTEXT +
                    "</a>";
                var divRv = $get("divReportViewer");
                divRv.style["height"] = "90%";
            }
        }
    }

    function openInQuirksMode() {
        var uri = Mscrm.CrmUri.create(window.location.href);
        delete uri.get_query()["pagemode"];
        openStdWin(uri, null, window.screen.availWidth * .5, window.screen.availHeight * .65);
    }

    function reportLoaded() {

        $get('spnInProgress').style.display = "none";
        addToRecent();
    }

    function addToRecent() {
        try {
            var uri = Mscrm.CrmUri.create(window.location.href);

            if (uri.get_query()["context"] == "records") {

                return;
            }

            var item = new Mscrm.RecentlyViewedItem();

            item.Id = uri.get_query()["id"];


            delete uri.get_query()["id"];


            uri.get_query()["action"] = "run";

            item.Action = uri.get_queryString().replace("?", "");
            item.TypeCode = Mscrm.EntityTypeCode.Report;
            item.TypeName = ReportLogicalName;
            item.DisplayName = ReportDisplayName;
            item.Name = ReportName;
        } catch (e) {

            Mscrm.CrmDebug.fail('exception when trying to build recent-data for report');
        }

        try {
            window.opener.Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.RecentlyViewedAddItem, item);
        } catch (e) {

        }
    }

    function waitForControlsToLoad() {
        FilterEditor = $find("filterEditor");
        var DefaultFilterValue = FilterEditor.get_defaultFilter();
        var filerFetchXmlValue = FilterEditor.get_fetchXmlLoaded();


        _currentReloadAttempt = _currentReloadAttempt + 1;
        if (_currentReloadAttempt < _maxReloadAttempt) {
            if (IsNull(FilterEditor) ||
                IsNull(DefaultFilterValue) ||
                (DefaultFilterValue.length > 0 && !filerFetchXmlValue)) {
                window.setTimeout(waitForControlsToLoad, 100);
                return;
            }


            if (DefaultFilterValue.length > 0 && !_bIsOfflineAndScheduled) {
                try {
                    FilterEditor.get_filterExecXml();
                } catch (e) {
                    window.setTimeout(waitForControlsToLoad, 100);
                    return;
                }
            }
        }
        doLoad();
    }

    function doLoad() {
        if ($get("isImmediateExecute").getAttribute("value") == "1") {
            if ($get("isFilterableReport").getAttribute("value") != "1") {

                $get('btnEditFilter').style.display = "none";
            }
            var DefaultFilterValue = FilterEditor.get_defaultFilter();

            if (!_bIsOfflineAndScheduled) {

                var bExecuted = false;
                if (DefaultFilterValue.length > 0) {
                    bExecuted = executeReport(FilterEditor.get_filterExecXml());
                } else {
                    bExecuted = executeReport(DefaultFilterValue);
                }
                if (!bExecuted) {

                    switchToFilter();
                }
            } else {

                switchToReport();
            }
        } else {
            switchToFilter();
        }
    }

    function RunReport() {
        executeReport(FilterEditor.get_filterExecXml());
    }


    function executeReport(filterXmlBuilder) {
        var bForm = setValidReportForm(filterXmlBuilder);

        if (bForm) {

            _divResultFrame.removeChild(XUI.Html.DomUtils.GetFirstChild(_divResultFrame));

            oFrame = window.document.createElement("iframe");
            oFrame.setAttribute('name', 'resultFrame');
            oFrame.setAttribute('frameBorder', '0');
            oFrame.setAttribute('id', 'resultFrame');
            oFrame.setAttribute('src', '" + Mscrm.CrmUri.create("/_static/blank.htm").toString() + "');
            oFrame.setAttribute('border', '0');
            oFrame.setAttribute('marginwidth', 0);
            oFrame.setAttribute('width', '100%');
            oFrame.setAttribute('height', '100%');
            oFrame.setAttribute('scrolling', 'no');
            _divResultFrame.appendChild(oFrame);
            $get('resultFrame').contentWindow.name = 'resultFrame';


            $get('renderForm').submit();

            switchToReport();

            $get('spnInProgress').style.display = "block";

            oFrame.onload = reportLoaded;
            return true;
        }
        return false;
    }

    function setValidReportForm(filterXmlBuilder) {

        if (IsNull(filterXmlBuilder)) {
            return false;
        }

        if (filterXmlBuilder.length > 0) {
            $get('renderForm').CRM_Filter.value = filterXmlBuilder;

            $get('renderForm').CRM_FilterText.value = FilterEditor.get_filterSummary();
        }


        return true;
    }

    function switchToFilter() {
        _filterEditorSpan.style.display = "block";
        _renderSpan.style.display = "none";
        FilterEditor.add_onChange(onFilterDirty);
    }

    function switchToReport() {
        _filterEditorSpan.style.display = "none";
        _renderSpan.style.display = "block";
        var runBtn = $get("btnRun");
        if (!IsNull(runBtn)) {

            XUI.Html.SetText(runBtn, LOCID_RPTVIEW_RETURNTOREPORT);
            runBtn.onclick = switchToReport;
        }
    }

    function onFilterDirty() {

        var runBtn = $get("btnRun");
        if (!IsNull(runBtn)) {
            XUI.Html.SetText(runBtn, LOCID_RPTVIEW_RUNREPORT);
            runBtn.onclick = RunReport;
        }
    }

    function LaunchReportWizard() {

        var oUrl = Mscrm.CrmUri.create(location.href);
        var sReportId = oUrl.get_query()["id"];


        Mscrm.ReportUtil.runReportWizard(sReportId, null, newReportCallBackFunction);

    }

    function newReportCallBackFunction(sNewReportId) {

        if (!IsNull(sNewReportId)) {


            try {
                window.opener.auto(Report);
            } catch (e) {
            }


            var oUrl = Mscrm.CrmUri.create(location.href);
            oUrl.get_query()["id"] = sNewReportId;


            location.href = oUrl.toString();
        }
    }

    var _commandSaveDefaultFilter = new RemoteCommand("Reports", "SaveDefaultFilter");

    function OnBeforeUnloadHandler(oEvent) {
        oEvent = oEvent.rawEvent;

        if (FilterEditor.get_isDirty()) {
            switchToFilter();
            var line =
                "------------------------------------------------------------------------------------------------------------"
            var msg = line + "\n" + LOCID_RPTVIEW_MODIFIEDTITLE + "\n\n" + LOCID_RPTVIEW_MODIFIED + "\n" + line;
            oEvent.returnValue = msg;
            return msg;
        }
    }

    function SaveFilter() {
        var filerXmlValue = FilterEditor.get_filterXml();


        var bForm = setValidReportForm(FilterEditor.get_filterExecXml());
        if (bForm) {
            _commandSaveDefaultFilter.SetParameter("reportId", $get("reportId").getAttribute("value"));
            _commandSaveDefaultFilter.SetParameter("filterXml", filerXmlValue);


            DisplayActionMsg(LOCID_RPTVIEW_UPDATINGFILTER, 350, 150);
            window.setTimeout(saveFilterInternal, 100);
        }
    }

    function saveFilterInternal() {
        var result = _commandSaveDefaultFilter.Execute();
        HideActionMsg();
        $get('btnSave').blur();
        if (result.Success) {
            FilterEditor.set_isDirty(false);
        }
    }

</script>
<style>
    .report_viewer_td_BtnEditFilter {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        float: right;
        <% }
           else
           { %>
        float: left;
        <% } %>
    }

    button.ms-crm-ReportViewer-Button {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        margin-right: 4px;
        <% }
           else
           { %>
        margin-left: 4px;
        <% } %>
    }

</style>
</head>


<body scroll="no">

<div id="divRenderForm" runat="server" style="display: none">
</div>
<div id="divViewerProps" style="display: none" runat="server"></div>
<div style="width: 100%">
    <cnt:AppNotifications id="compatibilityNotification" runat="server"/>
</div>
<div style="width: 100%">
    <cnt:AppNotifications id="edgeUnsupportedNotification" runat="server"/>
</div>
<div id="divReportViewer" style="position: relative; height: 100%; width: 100%">
    <div style="padding-bottom: 5px">
        <mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
    </div>

    <div class="viewer_td_FilterEditor" style="position: absolute; top: 50px; bottom: 0px;">
        <div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <div id="filterEditorSpan" style="height: 100%; display: none">
                <div style="padding-bottom: 25px; top: 0px; bottom: 30px; left: 10px; right: 10px" class="ms-crm-absolutePosition">
                    <div id="dummyDiv1" class="ms-crm-IE7-Height-Fix-Dummy-Container">
                        <cnt:AppFilterEditor id="filterEditor" runat="Server"/>
                    </div>
                </div>
                <div class="report_viewer_td_buttons" style="bottom: 0px; position: absolute">
                    <div id="divButtons" runat="server"/>
                </div>
            </div>

            <div id="renderSpan" style="display: none; left: 10px; right: 10px; bottom: 10px; top: 0px; position: absolute">
                <div id="dummyDiv2" class="ms-crm-IE7-Height-Fix-Dummy-Container">
                    <div id="trEditFilter">
                        <div class="report_viewer_td_BtnEditFilter">
                            <cui:Button ID="btnEditFilter" OnClick="switchToFilter()" ResourceId="Web.Reports.viewer.aspx_Button_Edit_Filtering" runat="server"></cui:Button>
                        </div>
                        <div class="viewer_td_Warnings">
                            <cnt:AppNotifications id="notifications" runat="server"/>
                        </div>
                    </div>
                    <div id="spnInProgress" class="slide" style="display: block; width: 100%; height: 100%; position: absolute; overflow: hidden; z-index: 1">
                        <table height="100%" width="100%">
                            <tr>
                                <td valign="middle" align="center">
                                    <img alt="" src="/_imgs/AdvFind/progress.gif"/><br>
                                    <loc:Text ResourceId="InProgress_ProcessingRequest" runat="server"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="divResultFrame" class="ms-crm-absolutePosition" style="border-width: 2px; border-color: #000000; top: 32px;">
                        <div id="divResultFrameInner" class="ms-crm-IE7-Height-Fix-Dummy-Container">
                            <iframe name="resultFrame" id="resultFrame" src="/_static/blank.htm" frameborder="0" style="border: 0px; margin: 0px; padding: 0px; width: 100%; height: 100%;"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>