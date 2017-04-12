<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Reports.ReportSchedule.EditFilter" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<html xmlns:Crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="Title_EditFilter" runat="server"/>
    </title>
    <script language="javascript">


        var _sFilterXml;
        var _sReportName;
        var FilterEditor;

        Sys.Application.add_load(onApplicationLoad);

        function onApplicationLoad() {
            FilterEditor = $find("filterEditor");

            var oArgs = getDialogArguments();
            with (oArgs) {
                _sReportName = ReportName;
                _sFilterXml = FilterXml
            }


            XUI.Html.SetText(header, LOCID_HEADER);


            if (!IsNull(_sFilterXml)) {
                window.setTimeout(setFilterXml, 0);
            }
        }


        function setFilterXml() {
            FilterEditor.set_filterXml(_sFilterXml);
        }


        function save() {
            var oResult = null;

            if (FilterEditor.get_isDirty()) {
                oResult = new Object();
                oResult.filterXml = FilterEditor.get_filterExecXml();
            }


            window.returnValue = oResult;
            closeWindow();
        }


        function cancel() {
            window.returnValue = null;
            closeWindow();
        }

    </script>
</head>
<body scroll="no">
<div style="width: 100%; height: 100%">
    <div class="ms-crm-Dialog-Header" valign="middle">
        <div class="ms-crm-Dialog-Header-Title" id="header"></div>
        <div class="ms-crm-Dialog-Header-Desc">
            <loc:Text ResourceId="HeaderDesc_EditFilter" runat="server"/>
        </div>
    </div>
    <div class="ms-crm-absolutePosition" style="top: 55px; bottom: 55px;">
        <div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <div class="ms-crm-absolutePosition" style="top: 10px; right: 10px; bottom: 10px; top: 10px">
                <cnt:AppFilterEditor id="filterEditor" runat="server"/>
            </div>
        </div>
    </div>
    <div class="ms-crm-absolutePosition" style="height: 50px; top: auto">
        <div class="ms-crm-Dialog-Buttons">
            <ui:Button ID="btnSave" OnClick="save();" ResourceId="Button_Save" runat="server"></ui:Button>&nbsp;
            <ui:Button ID="btnCancel" OnClick="cancel();" ResourceId="Button_Cancel" runat="server"></ui:Button>
        </div>
    </div>
</div>
</body>
</html>