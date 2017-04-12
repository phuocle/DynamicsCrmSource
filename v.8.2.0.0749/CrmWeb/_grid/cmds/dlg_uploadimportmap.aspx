<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.UploadImportMapDialogForm" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <title>
        <loc:text resourceid="UploadImportMap_DialogTitle" runat="server"/>
    </title>

    <script language="javascript">

        var g_mapXml = "";

        function MapValidationFailureCallBackFromUpload(errorDetails) {

            $get("PageBody1").style.display = "none";


            changeOKHandlerForPageBody3();

            $get("PageBody3").style.display = "inline-block";
            if (errorDetails) {
                XUI.Html.SetText($get("mapErrorsArea"), errorDetails.split(";").join("\r\n"))
            }
        }

        function CheckForDuplicateMapResultCallBackFromUpload(mapXml, mapName, duplicateFound, suggestedName) {

            if (duplicateFound == "True") {
                $get("mapname").value = suggestedName;
                g_mapXml = mapXml;

                $get("PageBody1").style.display = "none";


                changeOKHandlerForPageBody2();

                $get("PageBody2").style.display = "inline-block";
            } else {
                var command = new RemoteCommand("ImportWebService", "UploadMapXml");


                command.SetXmlParameter("mapXml", mapXml);
                command.SetParameter("mapName", "");
                command.ErrorHandler = UploadErrorHandler;

                oResult = command.Execute();
                if (oResult.Success) {
                    Mscrm.Utilities.setReturnValue(true);
                    closeWindow();
                }
            }
        }

        function UploadErrorHandler(sHResult, oXmlNode) {
            var sErrMessage = "";
            if (oXmlNode != null) {
                var oDescription = XUI.Xml.SelectSingleNode(oXmlNode, "error/description", null);
                if (!IsNull(oDescription)) {
                    sErrMessage = XUI.Xml.GetText(oDescription);
                }
            }


            if (sHResult == "0x0" && !IsNull(sErrMessage)) {
                alert(sErrMessage);
            } else {
                RemoteCommandDefaultErrorHandler(sHResult, oXmlNode);
            }
        }

        function applychanges() {
            var uploadFileFrame = $get("uploadFileFrame");
            var fileUpload = uploadFileFrame.contentWindow.document.getElementById("fileUpload");
            if (fileUpload.value == "") {
                alert(LOCID_UPLOADMAP_MISSINGFILE_ERR);
                return;
            }

            if (fileUpload.value != "") {

                var shortName = fileUpload.value;
                shortName = shortName.slice(shortName.lastIndexOf("\\") + 1);
                var fileExtension = shortName.slice(shortName.lastIndexOf(".") + 1).toLowerCase();

                if (fileExtension != "map" && fileExtension != "xml") {
                    alert(LOCID_IW_UNSUPPORTED_FILETYPE);
                    return;
                }

                try {
                    var fileUploadForm = uploadFileFrame.contentWindow.document.getElementById("fileUploadForm");
                    fileUploadForm.submit();
                } catch (e) {
                    alert(LOCID_UPLOADMAP_INVALIDFILE_ERR);
                }
            }
        }

        function btnContinue() {
            var command = new RemoteCommand("ImportWebService", "UploadMapXml");


            command.SetXmlParameter("mapXml", g_mapXml);
            command.SetParameter("mapName", $get("mapname").value);
            command.ErrorHandler = UploadErrorHandler;

            oResult = command.Execute();
            if (oResult.Success) {
                Mscrm.Utilities.setReturnValue(true);
                closeWindow();
            }
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

    </script>
    <style type="text/css">
        BUTTON.ms-crm-Button { width: 84px; }

        TD.ms-crm-Dialog-Header {
            height: 35px;
            padding: 0.5%;
        }

        #PageBody1 {
            border-bottom-style: none;
            background-color: transparent;
        }

        #PageBody2 { border-bottom-style: none; }

        #PageBody3 { border-bottom-style: none; }
    </style>
</head>
<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
    <div id="PageBody1" class="ms-crm-Dialog-Main" style="display: inline; padding: 0px">
        <iframe id="uploadFileFrame" name="uploadFileFrame" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ManageMaps/ImportMapFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" scrolling="no" frameborder="0" width="80%"></iframe>
    </div>
    <div id="PageBody2" class="ms-crm-Dialog-Main" style="display: none; height: 100%; width: 100%">
        <div>
            <br/>
            <loc:text resourceid="DuplicateMap_DialogText" runat="server"/>
            <br/>
            <br/>
            <nobr>
                <label for="mapname">
                    <loc:text resourceid="DuplicateMap_DialogNameLabel" runat="server"/>
                </label> <sdk:textboxcontrol width=80 id="mapname" required="false" maxlength="150" runat="server"/>
            </nobr>
        </div>

    </div>
    <div id="PageBody3" class="ms-crm-Dialog-Main" style="display: none; height: 100%; width: 100%;">
        <div>
            <br/>
            <label for="mapErrorsArea">
                <loc:text resourceid="ImportMapError_Dialog_Text" runat="server"/>
            </label>
            <br/>
            <br/>
            <ui:textarea id="mapErrorsArea" height="100px" maxlength="2000" runat="server"/>
        </div>
    </div>
</frm:DialogForm>

<script language="javascript">
    function changeOKHandlerForPageBody3() {
        $get("butBegin").onclick = cancel;


        $get("dialogHeaderTitle").innerHTML = LOCID_ERR_DIALOG_HEADER_TITLE;
        $get("dialogHeaderDesc").innerHTML = LOCID_ERR_DIALOG_HEADER_DESC;
    }

    function changeOKHandlerForPageBody2() {

        $get("butBegin").onclick = btnContinue;
        $get("butBegin").innerHTML = LOCID_BUT_CONTINUE_LABEL;


        $get("dialogHeaderTitle").innerHTML = LOCID_DUP_DIALOG_HEADER_TITLE;
        $get("dialogHeaderDesc").innerHTML = LOCID_DUP_DIALOG_HEADER_DESC;
    }
</script>
</body>
</html>