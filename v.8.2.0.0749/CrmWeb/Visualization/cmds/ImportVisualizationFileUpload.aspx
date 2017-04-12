<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Charts.ImportVisualizationFileUploadPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:Crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">
        Sys.Application.add_load(windowOnLoad);
        Sys.Application.add_unload(windowOnUnLoad);

        var fileUploadBox;

        function windowOnLoad() {
            try {
                fileUploadBox = $get("fileUpload");
                window.parent.Mscrm.ImportVisualizationDialog.showImportWaitingSpan(false);
                <% if (xmlValidationErrorOccurred)
                   { %>
                window.parent.Mscrm.ImportVisualizationDialog
                    .visualizationImportFailureCallBack(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(validationErrors) %>);

                <% }
                   else if (!String.IsNullOrEmpty(visualizationXml))
                   { %>
                window.parent.Mscrm.ImportVisualizationDialog.proceedWithImport(CrmEncodeDecode
                    .CrmXmlEncode(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(visualizationXml) %>),
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(visualizationName) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(visualizationDescription) %>,
                    Mscrm.Utilities
                    .parseBoolean(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(duplicateFound.ToString(CultureInfo.InvariantCulture)) %>),
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(suggestedName) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(entityLogicalName) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(visualizationId) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(duplicateVisId) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(duplicateVisIdName) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(((int) duplicateVisType).ToString(CultureInfo.InvariantCulture)) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(entityDisplayName) %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(entityPluralDisplayName) %>,
                    Mscrm.Utilities
                    .parseBoolean(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(isUserUpdateAllowed.ToString(CultureInfo.InvariantCulture)) %>),
                    Mscrm.Utilities
                    .parseBoolean(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(isUserCreateAllowed.ToString(CultureInfo.InvariantCulture)) %>),
                    <%= duplicateCount %>);

                <% }
                   else
                   { %>
                window.parent.Mscrm.ImportVisualizationDialog.showImportWaitingSpan(false);
                fileUploadBox.focus();
                <% } %>

                $addHandler(document, 'keydown', handleEscKey);
                $addHandler(fileUploadBox, 'keydown', handleEnterKey);
            } catch (e) {
                window.parent.Mscrm.ImportVisualizationDialog.showImportWaitingSpan(false)
            };
        }

        function windowOnUnLoad() {
            try {
                $removeHandler(document, 'keydown', handleEscKey);
                $removeHandler(fileUploadBox, 'keydown', handleEnterKey);
            } catch (e) {
            }
        }

        function handleEscKey(e) {
            if (e.keyCode == 27)
                closeWindow();
        }

        function handleEnterKey(e) {
            if (e.keyCode == 13)
                e.preventDefault();
        }

    </script>
    <style type="text/css">
        .ms-crm-viz-contentUpload {
            overflow: auto;
            width: 100%;
            height: 100%;
            position: absolute;
        }
    </style>
</head>
<body>
<div class="ms-crm-viz-contentUpload">
    <table width="100%">
        <tr>
            <td style="padding-left: 15px; padding-right: 15px; vertical-align: top">
                <label for="fileUpload">
                    <loc:Text ID="Text1" ResourceId="UploadMapFile_Label" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td style="padding-left: 15px; padding-right: 15px; vertical-align: top">
                <form id="fileUploadForm" name="fileUploadForm" enctype='multipart/form-data' method='post' action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/Visualization/cmds/ImportVisualizationFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>">
                    <input type="file" name="fileUpload" id="fileUpload" style="width: 100%;"/>
                    <input type="hidden" name="vizType" id="vizType"/>
                    <%= CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Visualization/cmds/ImportVisualizationFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
                </form>
            </td>
        </tr>
    </table>
</div>
</body>
</html>