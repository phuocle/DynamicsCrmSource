<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Import.ImportFileUploadPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="Javascript" type="text/javascript">


    function SubmitForm() {


        if (currentFile && currentFile.name) {
            submitFile();
        } else {
            var fileName = document.getElementById("uploadFileNameId");
            showProgressScreen(fileName.value);
            document.getElementById("uploadFileform").submit();
        }
    }


    function showProgressScreen(fileName) {
        if (fileName != "") {
            var shortName = fileName;
            shortName = shortName.slice(shortName.lastIndexOf("\\") + 1);

            if (shortName.length > 40) {
                shortName = shortName.substring(0, 35);
            }

            var progressMessage = window.parent.document.getElementById("progressMessage");
            XUI.Html.SetText(progressMessage, formatString(LOCID_IW_FILEUPLOAD_PROGRESS, shortName));
        }

        var progressDiv = window.parent.document.getElementById("progressDiv");
        progressDiv.style.display = "inline";

        var mainBody = window.parent.document.getElementById("mainBody");
        mainBody.style.display = "none";
    }


    function handleError(errorCode, errorMessage, importId) {
        if (errorCode == "0x8004034A") {
            openErrorDlg(errorCode, errorMessage);
        } else {
            if (errorMessage != "") {
                alert(errorMessage);
            } else {
                $get("errorFrame").src = Mscrm.CrmUri.create("/_common/error/popuperror.aspx?hr=" + errorCode)
                    .toString();
            }
        }
        window.parent.FailureCallBackFromUpload(importId);
        var progressDiv = window.parent.document.getElementById("progressDiv");
        progressDiv.style.display = "none";
        var mainBody = window.parent.document.getElementById("mainBody");
        mainBody.style.display = "block";
    }


    function handleSuccess(fileName, importId, importFileId, importType, headerColumnIndexesToBeIgnoredCsv) {
        window.parent.SuccessCallBackFromUpload(
            fileName,
            importId,
            importFileId,
            importType,
            headerColumnIndexesToBeIgnoredCsv);
        var progressDiv = window.parent.document.getElementById("progressDiv");
        progressDiv.style.display = "none";
    }


    $addHandler(window, "load", PageOnLoad);

    draggingOver = 0;

    function PageOnLoad() {
        if ("<% = hasError %>" == "True") {
            handleError(
                <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorCode) %>,
                <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorMessage) %>,
                "<%= importId.ToString("B", CultureInfo.InvariantCulture) %>")
        } else if ("<% = hasError %>" == "False") {
            handleSuccess(
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(fileName) %>,
                "<%= importId.ToString("B", CultureInfo.InvariantCulture) %>",
                "<%= importFileId.ToString("B", CultureInfo.InvariantCulture) %>",
                "<%= importType.ToString() %>",
                "<%= headerColumnIndexesToBeIgnoredCsv %>");
        }

        document.getElementById("uploadFileNameId").addEventListener("change", validateFileSize, false);
        var dragDropDiv = document.getElementById("dragdropdiv");


        document.getElementById("errorFrame").setAttribute("tabindex", -1);
        dragDropDiv.ondragenter = function(event) {
            document.body.className = "displayBlueCloud";
            draggingOver++;
            event && event.preventDefault && event.preventDefault();
            event && event.stopPropagation && event.stopPropagation();
            if (fileDropDisabled)
                return false;

            return false;
        }

        dragDropDiv.ondragleave = function(event) {
            draggingOver--;
            if (draggingOver <= 0)
                document.body.removeAttribute("class");

            event && event.preventDefault && event.preventDefault();
            event && event.stopPropagation && event.stopPropagation();

            if (fileDropDisabled)
                return false;

            this.className = "dropZone";
            return false;
        }

        dragDropDiv.ondragover = function(event) {
            event.preventDefault();
        }

        dragDropDiv.ondrop = handleFiles;
    }

    var currentFile = null;


    function handleFiles(event) {
        document.body.removeAttribute("class");
        event && event.preventDefault && event.preventDefault();
        event && event.stopPropagation && event.stopPropagation();

        draggingOver = 0;

        if (fileDropDisabled)
            return false;

        var files = event.dataTransfer.files;

        if (files.length > 1) {
            window.alert(LOCID_FILEUPLOAD_FILECOUNT);
            this.className = "dropZone";
            return false;
        }

        currentFile = files[0];
        document.getElementById("dropText").innerHTML = currentFile.name;
        document.getElementById("uploadFileform").reset();
        window.parent.uploadFileNameChanged();
    }


    function submitFile() {
        showProgressScreen(currentFile.name);

        document.getElementById("uploadFileNameId").name = null;
        var form = document.createElement('form');
        form.setAttribute("id", "dragDropFileForm");
        form.setAttribute("name", "dragDropFileForm");
        form.setAttribute("enctype", "multipart/form-data");
        var div = document.createElement('div');
        div
            .innerHTML =
            '<% = CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ImportWizard/ImportFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>';
        form.appendChild(div);

        var formData = new FormData(form);
        formData.append("uploadFileName", currentFile);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "ImportFileUpload.aspx?action=fileUpload&responseType=json");
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(this.responseText);
                if (response["hasError"]) {
                    clearCurrentFile();
                    handleError(response["errorCode"], response["errorMessage"], response["importId"]);
                } else {
                    handleSuccess(
                        response["fileName"],
                        response["importId"],
                        response["importFileId"],
                        response["importType"],
                        response["headerColumnIndexesToBeIgnoredCsv"]);
                }
            } else {
                window.alert(LOCID_FILEUPLOAD_REQFAILED);
            }
        }

        xhr.send(formData);
        document.getElementById("uploadFileNameId").name = "uploadFileName";
        return false;
    }


    function handleKeyPress(eventObject) {
        if (eventObject.keyCode == 13) {
            return false;
        }
    }


    function clearCurrentFile() {
        currentFile = null;
        document.getElementById("dragdropdiv").className = "dropZone";
        document.getElementById("dropText").innerHTML = "";
    }

    var fileDropDisabled = false;


    function disableFileUpload() {
        document.getElementById("uploadFileNameId").disabled = true;


        document.getElementById("dragdropdiv").className = "dropZone disabled";
        fileDropDisabled = true;
    }


    function enableFileUpload() {
        document.getElementById("uploadFileNameId").disabled = false;


        document.getElementById("dragdropdiv").className = "dropZone";
        fileDropDisabled = false;
    }


    function getFileName() {
        if (currentFile && currentFile.name) {
            return currentFile.name;
        }

        return document.getElementById("uploadFileNameId").value;
    }

    function validateFileSize(eventObject) {
        window.parent.uploadFileNameChanged();
        var fileObject = eventObject.target.files;
        if (fileObject[0] != null) {
            var fileSize = fileObject[0].size;
            var maxAllowedFileSize = parseInt(<%= MaxAllowedFileSize %>);
            if (maxAllowedFileSize < parseInt(fileSize)) {
                document.getElementById("uploadFileNameId").value = "";
                alert(formatString(LOCID_UFP_ERROR_FILESIZE, maxAllowedFileSize / (1024 * 1024)));
            } else if (currentFile) {

                clearCurrentFile();
            }
        }
    }
</script>
</head>
<body scroll="auto" class="ms-crm-WizardForm-Main">
<div id="controlDiv" class="mscrm-iw-BorderedDivBlueBackground fileUploadDiv" scrolling="no">
    <form id="uploadFileform" name='uploadFileform' enctype='multipart/form-data' method='post' action='ImportFileUpload.aspx?action=fileUpload' style="padding: 6px;">
        <span class="mscrm-iw-PageWidth">
            <loc:Text ResourceId="ImportWizard.UploadFilePage.UploadIFrame.Header" runat="server"/>
        </span>
        <br/>
        <br/>
        <input id='uploadFileNameId' type='file' name='uploadFileName' class="mscrm-iw-PageWidth ms-crm-WhiteBackground" onkeypress="handleKeyPress(new Sys.UI.DomEvent(event))"/>
        <br/>
        <span class="mscrm-iw-PageWidth">
            <loc:Text ResourceId="ImportWizard.UploadFilePage.UploadIFrame.Footer.ExportToXlsx" runat="server"/>
        </span>
        <% = CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ImportWizard/ImportFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
    </form>
    <div id="dragdropdiv" class="dropZone">
        <img src="/_imgs/Office/upload_cloud_graphic_102x60.png" id="import_WhiteCloudImg" alt="<loc:Text ID="locDropFile" ResourceId="Web.UploadDocumentTemplatePage.DropFileHere" runat="server"/>" class="uploadTemplateDropFileImage whiteCloud" />
        <img src="/_imgs/Office/upload_cloud_graphic_HOVER_102x60.png"id="import_blueCloudImg" alt="<loc:Text ResourceId="Web.UploadDocumentTemplatePage.DropFileHere" runat="server"/>" class="uploadTemplateDropFileImage blueCloud" />
        <div class="dropMessage">
            <span>
                <loc:Text ResourceId="Web.UploadDocumentTemplatePage.DropFileHere" runat="server"/>
            </span>
        </div>
        <span id="dropText" class="dropText"></span>
    </div>

    <iframe id="errorFrame" name="errorFrame" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" width="0%" height="0%" scrolling="no" frameborder="0"></iframe>
</div>
<br/>
<br/>

<div id="enclosedDiv" class="mscrm-iw-InfoBarBlue" style="display: none; position: absolute; top: 320px;">
    <table width="100%" style="table-layout: fixed">
        <tr>
            <td>
                <div id="enclosedDivText" class="ms-crm-TextAutoEllipsis enclosedDivText"></div>
            </td>
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            <td align="left">
            <% }
               else
               { %>
                <td align="right">
                    <% } %>
                    <a id="linkRemoveFile" href='#' onclick="window.parent.removeUploadedFile()" class="ms-crm-Link">
                        <loc:Text ResourceId="ImportWizard.UploadFilePage.EnclosedDiv.Remove" runat="server"/>
                    </a>
                </td>
            </tr>
    </table>
</div>
</body>
</html>