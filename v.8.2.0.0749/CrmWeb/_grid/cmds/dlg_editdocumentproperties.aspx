<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.EditDocumentPropertiesDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:Text id="dialogTitle" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        .ms-crm-RefreshDialog-Main { top: 70; }
    </style>
    <script type="text/javascript" language="javascript">
        var _a = null;

        $addHandler(window, "load", editDocumentPropertiesPage_onload);

        function editDocumentPropertiesPage_onload() {
            var oArgs = getDialogArgs();
            if (oArgs.useFallback === 0) {
                var documentNameControl = $get("documentNameText");
                var documentTitleControl = $get("documentTitleText");
                documentNameControl.value = getFileName(oArgs.fullName);
                documentTitleControl.value = oArgs.title;
                var tdFileExtension = $get('tdFileExtension');
                var ext = getFileExtension(oArgs.fullName);
                tdFileExtension.innerText = ext;
                $get("documentNameText").maxLength = $get("documentNameText").maxLength - ext.length;
                var dateTimeformat = "<%= dateTimeFormat %>";
                var createdArguments = [oArgs.createdOn.format(dateTimeformat), oArgs.createdBy];
                var modifiedArguments = [oArgs.modifiedOn.format(dateTimeformat), oArgs.modifiedBy];
                var created = "<%= createdInformationText %>";
                var modified = "<%= modifiedInformationText %>";
                $get('bottomCaption').innerHTML = "<br/><br/>" +
                    stringFormat(created, createdArguments) +
                    "<br/>" +
                    stringFormat(modified, modifiedArguments);
            }
        }

        function applychanges() {
            var oArgs = getDialogArgs();
            var oUrl = Mscrm.CrmUri.create(location.href);
            var documentNameControl = $get("documentNameText");
            var documentTitleControl = $get("documentTitleText");
            if (documentNameControl.value == "") {
                alert(LOCID_DOCUMENT_NAME_REQUIRED);
                return;
            }
            var sharepointdocumentid = "<%= sharePointDocumentId %>";
            if (Mscrm.FormUtility.isControlDirty(documentNameControl) ||
                Mscrm.FormUtility.isControlDirty(documentTitleControl)) {
                var oReturn = new Object();
                oReturn.entityName = Mscrm.InternalUtilities.EntityNames.SharePointDocument;
                oReturn.documentId = oUrl.get_query()["documentId"];
                oReturn.locationId = oUrl.get_query()["locationId"];
                oReturn.sharePointDocumentId = sharepointdocumentid;
                oReturn.name = documentNameControl.value;
                oReturn.extension = $get('tdFileExtension').innerText;
                oReturn.title = documentTitleControl.value;
                Mscrm.Utilities.setReturnValue(oReturn);
            }
            closeWindow(true);
            return;
        }

        function getDialogArgs() {
            if (IsNull(_a)) {
                _a = getDialogArguments();
            }
            return _a;
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(null);
            closeWindow();
        }

        function getFileExtension(filename) {
            var a = filename.split(".");


            if (a.length === 1 || (a[0] === "" && a.length === 2)) {
                return "";
            }
            return "." + a.pop().toLowerCase();
        }

        function getFileName(filename) {
            return filename.indexOf(".") < 0 ? filename : filename.slice(0, filename.lastIndexOf("."));
        }

        function stringFormat(str, args) {
            for (var i = 0; i < args.length; i++) {
                var reg = new RegExp("\\{" + i + "\\}", "");
                str = str.replace(reg, args[i]);
            }
            return str;
        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table id="documentProperties" style="width: 100%">
        <tr>
            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar ms-crm-Field-Required" style="white-space: nowrap">
                <label for="name">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_editdocumentproperties.DocumentName" runat="server"/>
                </label>
                <img class="ms-crm-ImageStrip-frm_required ms-crm-Inline-RequiredLevel" alt="Required" src="/_imgs/frm_required.gif"/>
            </td>
            <td style="padding-left: 10">
                <sdk:TextBoxControl Required="true" id="documentNameText" runat="server"/>
            </td>
            <td style="padding-left: 10" id="tdFileExtension" runat="server">
            </td>
        </tr>
        <tr>
            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="white-space: nowrap">
                <br/>
                <label for="title">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_editdocumentproperties.DocumentTitle" runat="server"/>
                </label>
            </td>
            <td style="padding-left: 10">
                <sdk:TextBoxControl id="documentTitleText" runat="server"/>
            </td>
            <td/>
        </tr>
        <tr>
            <td colspan="3" class="ms-crm-Field-Label-Print" id="bottomCaption">
                <br/>
                <br/>
                <%= createdInformationText %>
                <br/>
                <%= modifiedInformationText %>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>