<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.LanguageSelection.LanguageSelectionPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>

<!DOCTYPE html>
<html>


<head>

<app:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">


    function CallbackParams(bClose, bReload, bRefreshGrid) {
        this.bClose = bClose;
        this.bReload = bReload;
        this.bRefreshGrid = bRefreshGrid;
    }

    var defaultRemoteCommandHandler = null;

    function doConfirm(langsChanged, parameters) {
        var dlgUrl = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_langsettings.aspx');
        dlgUrl.get_query()['langs_changed'] = langsChanged;

        var dialogOptions = new Xrm.DialogOptions();
        dialogOptions.height = 250;
        dialogOptions.width = 550;
        var params = parameters;
        var langSettingsCallBackObj = Mscrm.Utilities.createCallbackFunctionForXrmDialog(langSettingsCallBack, params);
        Xrm.Internal.openDialog(dlgUrl.toString(), dialogOptions, null, null, langSettingsCallBackObj);
    }

    function langSettingsCallBack(result, checkedRecordsCount, uncheckedRecordsCount, sDataXml) {
        if (result == false) {
            return;
        }


        var caption = "";
        if (checkedRecordsCount > 0) {
            caption = LOCID_WAIT_DIALOG_ENABLING;

            caption = caption.replace("{0}", checkedRecordsCount);
            if (uncheckedRecordsCount > 0) {
                caption += " " + LOCID_WAIT_DIALOG_DISABLING;
                caption = caption.replace("{0}", uncheckedRecordsCount);
            }
        } else if (uncheckedRecordsCount > 0) {
            caption = LOCID_WAIT_DIALOG_DISABLING;
            caption = caption.replace("{0}", uncheckedRecordsCount);
        }


        provisionLanguages(caption, sDataXml, remoteEntityCommandCallback);
    }

    function applychanges() {


        var sCustParams = "";


        var records = $find("gridLanguages").get_innerGrid().get_allRecords();
        var selectedRecordsCount = 0;
        var checkedRecordsCount = 0;
        var uncheckedRecordsCount = 0;

        var sDataXml = "<muiprovisioning><languages>";

        for (var i = 0; i < records.length; i++) {

            var lcid = records[i][3].getAttribute('lcid');
            var activated = records[i][3].getAttribute('isActivated');
            var checkbox = $get('gridBodyTable_ctl00_' + i, records[i][3]);
            var checked = 'false';
            if (checkbox.checked)
                checked = 'checked';


            if ((checked == "checked" && activated == "false") || (checked == "false" && activated == "true")) {
                selectedRecordsCount++;

                if (checked == "checked" && activated == "false") {

                    if (LOCID_IS_SRS_INSTALLED == "false") {
                        alert(LOCID_SRS_NOT_INSTALLED);
                        return;
                    }

                    sDataXml += "<language languageid='" + CrmEncodeDecode.CrmXmlEncode(lcid) + "' action='enable' />";
                    checkedRecordsCount++;
                }

                if (checked == "false" && activated == "true") {
                    sDataXml += "<language languageid='" + CrmEncodeDecode.CrmXmlEncode(lcid) + "' action='disable' />";
                    uncheckedRecordsCount++;
                }
            }
        }
        sDataXml += "</languages></muiprovisioning>";

        if (selectedRecordsCount == 0) {
            alert(LOCID_NO_ITEM_SELECTED);
            return;
        }

        if (checkedRecordsCount > 0) {
            var parameters = new Array(checkedRecordsCount, uncheckedRecordsCount, sDataXml);
            doConfirm(checkedRecordsCount + uncheckedRecordsCount, parameters);
        } else {

            var caption = "";

            if (uncheckedRecordsCount > 0) {
                caption = LOCID_WAIT_DIALOG_DISABLING;
                caption = caption.replace("{0}", uncheckedRecordsCount);
            }


            provisionLanguages(caption, sDataXml, remoteEntityCommandCallback);
        }

    }


    function provisionLanguages(caption, sDataXml, fCallback) {
        var importJobId = document.getElementById("importJobId");
        importJobId.value = Mscrm.Utilities.createGuid();
        var oCommand = new RemoteCommand("SystemCustomization", "ProvisionLanguagesWithJob");
        defaultRemoteCommandHandler = oCommand.ErrorHandler;
        oCommand.ErrorHandler = OverrideErrorHandler;
        oCommand.SetParameter("id", importJobId.value);
        oCommand.SetXmlParameter("data", sDataXml);
        oCommand.Execute(fCallback);
        $get("progressTbl").style.display = "";
        $get("gridTbl").style.display = "none";
        XUI.Html.SetText($get("provisionCaption"), caption);
        $get("butBegin").disabled = true;
        $get("cmdDialogCancel").disabled = true;
        window.setTimeout(CheckStatus, 3000);
    }


    function OverrideErrorHandler(sHResult, oXmlNode) {
        if ("ServerError" == sHResult) {


            return;
        }


        if (!IsNull(defaultRemoteCommandHandler)) {
            try {
                defaultRemoteCommandHandler(sHResult, oXmlNode);

                refreshLanguageGrid();
            } catch (e) {
            }
        }
    }


    function remoteEntityCommandCallback(oResult) {
        if (oResult.Success) {

            refreshLanguageGrid();
            return;
        }
    }

    function refreshLanguageGrid() {

        if ($get("cmdDialogCancel").disabled) {
            DeleteImportJob();
            $get("cmdDialogCancel").disabled = false;
        }

        $get("progressTbl").style.display = "none";
        $get("gridTbl").style.display = "block";

        $find("gridLanguages").Refresh();
        disableOKButton();

        var formSubmitId = $get("crmFormSubmitId");
        var number = formSubmitId.value - 0;
        number = number + 1;
        formSubmitId.value = number;
        return true;
    }


    function DeleteImportJob() {
        var importJobId = document.getElementById("importJobId");
        var oCommand = new RemoteCommand("ImportJob", "DeleteJob");


        oCommand.ErrorHandler = function() {};
        oCommand.SetParameter("importJobId", importJobId.value);
        oCommand.Execute();
        importJobId.value = "";
    }

    function CheckStatus() {
        if (!$get("cmdDialogCancel").disabled) {


            return;
        }
        var importJobId = document.getElementById("importJobId");
        var oCommand = new RemoteCommand("ImportJob", "RetrieveJobStatus");


        oCommand.ErrorHandler = function() {};
        oCommand.SetParameter("importJobId", importJobId.value);
        var oResult = oCommand.Execute();
        if (oResult.Success) {
            var oImportJob = oResult.ReturnValue;
            if (!IsNull(oImportJob) && oImportJob != "") {
                var oDataXml = XUI.Xml.LoadXml(oImportJob);
                if (!IsNull(oDataXml)) {

                    var root = XUI.Xml.SelectSingleNode(oDataXml, "importexportxml", null);
                    if (root != null) {


                        if (!IsNull(root.getAttribute("succeeded")) && root.getAttribute("succeeded") != "") {
                            if (root.getAttribute("succeeded") == "false") {
                                var errorCode = root.getAttribute("errorcode");
                                if (!IsNull(defaultRemoteCommandHandler)) {
                                    defaultRemoteCommandHandler(errorCode);
                                }
                            }
                            refreshLanguageGrid();
                            return;
                        }
                    }
                }
            }
        }

        window.setTimeout(CheckStatus, 3000);
    }


    function checkBoxClicked() {

        var records = $find("gridLanguages").get_innerGrid().get_allRecords();
        var count = 0;
        for (var i = 0; i < records.length; i++) {
            var activated = records[i][3].getAttribute('isActivated');
            var checkbox = $get('gridBodyTable_ctl00_' + i, records[i][3]);
            var checked = 'false';
            if (checkbox.checked) {
                checked = 'checked';
            }


            if ((checked == "checked" && activated == "false") || (checked == "false" && activated == "true")) {
                count++;
            }
        }

        if (count > 0)
            enableOKButton();
        else
            disableOKButton();
    }

    function disableOKButton() {
        var ok = document.getElementById("butBegin");
        XUI.Html.SetText(ok, LOCID_OK_BUTTON_CAPTION);
        ok.disabled = true;

        var cancel = document.getElementById("cmdDialogCancel");
        XUI.Html.SetText(cancel, LOCID_CANCEL_BUTTON_CAPTION);
    }

    function enableOKButton() {
        var ok = document.getElementById("butBegin");
        ok.disabled = false;
    }

    function cancel() {
        closeWindow();
    }

</script>
</head>


<body onload="disableOKButton()">
<frm:DialogForm id="crmForm" runat="server">
    <table id="progressTbl" style="display: none; cursor: wait; height: 100%; width: 100%">
        <tr>
            <td valign="middle" align="center">
                <img alt="" src="/_imgs/AdvFind/progress.gif"/>
                <br>
                <nobr id="provisionCaption">
                </nobr>
            </td>
        </tr>
    </table>
    <div id="gridTbl" style="display: block; width: 100%; height: 100%">
        <app:AppGrid id="gridLanguages" runat="server"/>
        <input type="hidden" id="crmFormSubmitId" name="crmFormSubmitId" value="0">

    </div>
    <input type="hidden" name="importJobId" id="importJobId" value=""/>
</frm:DialogForm>
</body>
</html>