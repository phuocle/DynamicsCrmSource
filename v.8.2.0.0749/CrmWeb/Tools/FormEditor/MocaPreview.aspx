<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.MocaPreview" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript">
        Sys.Application.add_load(OnLoad);

        function OnLoad() {

            var serializedPreviewData =
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.Form["formPreviewData"]) %>;
            if (serializedPreviewData) {
                var formPreviewData = JSON.parse(serializedPreviewData);

                Mscrm.CrmSessionStorage.setItem('<%= PreviewPageFormXmlKey %>',
                    formPreviewData['<%= PreviewPageFormXmlKey %>']);
                Mscrm.CrmSessionStorage.setItem('<%= PreviewPageEntityLogicalNameKey %>',
                    formPreviewData['<%= PreviewPageEntityLogicalNameKey %>']);
                Mscrm.CrmSessionStorage.setItem('<%= PreviewPageDashboardNameKey %>',
                    formPreviewData['<%= PreviewPageDashboardNameKey %>']);
                Mscrm.CrmSessionStorage.setItem('<%= PreviewPageEntityFormTypeKey %>',
                    formPreviewData['<%= PreviewPageEntityFormTypeKey %>']);
                Mscrm.CrmSessionStorage.setItem('<%= PreviewPageFormIdKey %>',
                    formPreviewData['<%= PreviewPageFormIdKey %>']);
                Mscrm.CrmSessionStorage.setItem('<%= PreviewPageEntityTypeCodeKey %>',
                    formPreviewData['<%= PreviewPageEntityTypeCodeKey %>']);
                Mscrm.CrmSessionStorage.setItem('<%= PreviewPageFormAccessTypeKey %>',
                    formPreviewData['<%= PreviewPageFormAccessTypeKey %>']);
            }

            var pageManager = new Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager();
            pageManager.set_showUnsuportedLanguageDialog(Boolean.parse('<%= ShowLanguageUnsupportedWarning() %>'));
            pageManager.SetupPreviewPage();
        }
    </script>
</head>
<body>
<div id="PreviewBar" class="previewBar">
    <span class="leftContainer" unselectable="on">
        <span class="previewBarItem" unselectable="on">
            <span id="descriptionLabel" class="centeredItem previewBarLabel segoeUISemiBold" unselectable="on"></span>
        </span>
    </span>
    <span class="rightContainer" unselectable="on">
        <span class="previewBarItem" id="platformItem" unselectable="on">
            <span id="platformLabel" class="centeredItem previewBarLabel segoeUILight" unselectable="on"></span>
            <span id="tabletButton" class="centeredItem tabletButton">
                <a class="previewBarButton" unselectable="on" onkeypress="return true;" role="button" onclick="return false;" href="javascript:;">
                    <span class="imageContainer" unselectable="on">
                        <img id="tabletIcon" class="tabletImage image" unselectable="on" src="//:0"/>
                    </span>
                </a>
            </span>
            <span id="phoneButton" class="centeredItem">
                <a class="previewBarButton" unselectable="on" onkeypress="return true;" role="button" onclick="return false;" href="javascript:;">
                    <span class="imageContainer" unselectable="on">
                        <img id="phoneIcon" class="phoneImage image" unselectable="on" src="//:0"/>
                    </span>
                </a>
            </span>
        </span>
    </span>
</div>
<div id="contextBar" class="contextBar">
    <span class="rightContainer">
        <span class="contextBarItem" unselectable="on">
            <span id="addEntityLabel" class="centeredItem contextBarLabel contextFont" unselectable="on"></span>
            <span id="createRecordButton" class="centeredItem">
                <a class="contextBarButton" unselectable="on" onkeypress="return true;" role="button" onclick="return false;" href="javascript:;">
                    <span id="createRecordLabel" class="contextBarLabel contextFont contextButton" unselectable="on"></span>
                </a>
            </span>
        </span>
    </span>
</div>
<div class="contentWrapper" unselectable="on">
    <div unselectable="on" id="deviceMock" class="deviceMock" style="display: none;" unselectable="on">
        <iframe unselectable="on" id="contentFrame" class="contentFrame"/>
    </div>
</div>
</body>
</html>