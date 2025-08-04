<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.OneDriveforBusinessSettingsPage" %>

<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>

    <script type="text/javascript" language="javascript">
        <% if (!string.IsNullOrEmpty(ErrorData))
           { %>
        var errorUrl = '<%= ErrorData %>';
        if (errorUrl != "") {
            var options = new Xrm.DialogOptions();
            options.height = 250;
            options.width = 660;
            Xrm.Internal.openDialog(Mscrm.CrmUri.create(errorUrl).toString(), options, null, null, null);
        }
        <% } %>

        Sys.Application.add_load(PageLoad);

        function PageLoad() {
            window.setTimeout(function() {
                    document.getElementById("txtDocumentLocation").focus();
                },
                20);
        }

        function cancel() {
            closeWindow(true);
        }

        function applychanges() {
            var _txtDocumentLoc = $get('txtDocumentLocation');

            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(_txtDocumentLoc.value)) {
                alert(LOCID_ENTER_SP_FOLDER_NAME);
                _txtDocumentLoc.select();
                return;
            }
            if (_txtDocumentLoc.value.startsWith("_") || !isNaN(_txtDocumentLoc.value.substring(0, 1))) {
                alert(LOCID_ALPHANUMERIC_ONLY);
                _txtDocumentLoc.select();
                return;
            }

            if (isValidFolderName(_txtDocumentLoc.value)) {
                disableControls();
                submitFolderRename();
            }
        }

        function disableControls() {
            document.getElementById("cmdDialogCancel").disabled = true;
            document.getElementById("butBegin").disabled = true;

        }

        function isValidFolderName(folderName) {
            var regEx = new RegExp(Mscrm.DocumentLocationHelper.specialCharatersRegExString, "g");
            if (regEx.test(folderName)) {
                alert(window.LOCID_INVALID_FOLDERNAME);
                return false
            }
            if (folderName.length > Mscrm.DocumentLocationHelper.sP_FOLDERNAME_MAXLENGTH) {
                alert(window.LOCID_DOCM_FOLDERNAME_MAXLENGTH);
                return false
            }
            return true
        }

        function submitFolderRename() {
            var data = new FormData();
            var error;
            data.append('txtDocumentLocation', document.getElementById("txtDocumentLocation").value);

            var request = new XMLHttpRequest;
            var uri = Mscrm.CrmUri.create(window.document.location.href);
            request.open("POST", uri.toString(), false);
            request.setRequestHeader("cache-control", "no-cache");
            Mscrm.Utilities.setResponseTypeToMSXml(request);
            SetTokenInHeader(request);
            request.send(data);

            if (request.responseXML != undefined) {
                var xml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(request.responseXML));

                if (handleXMLErr(xml)) {
                    Mscrm.Utilities.setReturnValue(false);
                    closeWindow(true);
                } else {
                    document.getElementById("cmdDialogCancel").disabled = false;
                    document.getElementById("butBegin").disabled = false;
                }
            } else {
                document.getElementById("cmdDialogCancel").disabled = false;
                document.getElementById("butBegin").disabled = false;
            }
        }

    </script>
    <style type="text/css">
        .ms-crm-dlglabel {
            vertical-align: top;
            font-family: Segoe UI;
            color: #444444;
            font-size: 12px;
            font-weight: normal !important;
            padding-right: 5px;
        }

        #DlgHdTitle {
            color: #000000 !important;
            font-size: 36px !important;
            font-family: Segoe UI !important;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            margin-right: 30px;
            <% }
               else
               { %>
            margin-left: 30px;
            <% } %>
            margin-top: 11px;
        }
    </style>
</head>
<body>
<form name="changeLocation" id="changeLocation" method="POST">
    <table cellpadding="0" cellspacing="0" style="table-layout: fixed">
        <tr>
            <td style="width: 135px;">
                <label for="txtDocumentLocation" class="ms-crm-dlglabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_DlgSettings_Label_Text' runat='server'/>">
                    <loc:Text ResourceId="Odb_DlgSettings_Label_Text" runat="server"/>
                </label>
            </td>
            <td style="vertical-align: top;">
                <label>/&nbsp;</label><input type="text" name="txtDocumentLocation" id="txtDocumentLocation" value="<%= OneDriveFolderName %>" style="width: 400px"/>
            </td>
        </tr>
        <tr>
            <td style="width: 135px;">&nbsp;</td>
            <td >&nbsp;</td>
        </tr>
        <tr>
            <td style="width: 135px;">&nbsp;</td>
            <td style="vertical-align: top; padding-left: 5px">
                <loc:Text ResourceId="Odb_DlgSettings_Description" runat="server"/>
            </td>
        </tr>
    </table>
</form>
</body>
</html>