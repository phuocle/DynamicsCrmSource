<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ManageQuotaPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>
<title>
    <loc:Text ResourceId="Web._grid.cmds.dlg_addquota.aspx_9" runat="server"/>
</title>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="javascript">

    var aValues = new Array(13);
    var _sPrevTransCurId = null;
    var _a = getDialogArguments();
    var bSaved = false;
    var _year = null;
    var _yearDisplay = null;
    var _select = null;
    var _transCurId = null;
    var grdQuota = null;

    Sys.Application.add_load(function() {


        _transCurId = Mscrm.FormControlInputBehavior.GetBehavior('transCurId');
        grdQuota = Mscrm.FormControlInputBehavior.GetBehavior('grdQuota');
        _select = Mscrm.FormControlInputBehavior.GetBehavior('selFY');

        if ((undefined != _a) && (1 < _a.length)) {
            if (!window.confirm(LOCID_MULTI_USER_QUOTA_CHANGE)) {
                closeWindow();
            }
        }
        var dataValue = _transCurId.get_dataValue();
        if (!IsNull(dataValue)) {
            grdQuota.oTransCurId = dataValue[0].id;
            grdQuota.oTransCurName = dataValue[0].name;
        }
        _transCurId.add_change(toggleOkButton);
        toggleOkButton();

        StoreInitialValues();
        if (_a != null) {
            LoadQuotaYear();
        }

        attachWindowOnBeforeUnload(window_onbeforeunload);
    });

    function window_onbeforeunload(oEvent) {
        oEvent = oEvent.rawEvent;

        if (!IsFormUnchanged() && !bSaved) {
            oEvent.returnValue = LOCID_QUIT_WITHOUT_SAVE;
            return LOCID_QUIT_WITHOUT_SAVE;
        }
    }

    function IsFormUnchanged() {
        var dataValue = _transCurId.get_dataValue();
        if (!((IsNull(_sPrevTransCurId) && IsNull(dataValue)) || (dataValue[0].id == _sPrevTransCurId))) {
            return false;
        }

        var oTD = null;
        var rowlen = grdQuota.rows.length;
        for (i = 0; i < rowlen; i++) {

            oTD = XUI.Html.DomUtils.GetFirstChild(grdQuota.rows[i].cells[4]).rows[0].cells[1];
            if (aValues[i] != XUI.Html.DomUtils.GetFirstChild(oTD).value) {
                return false;
            }
        }
        return true;
    }

    function toggleOkButton() {
        $get("butBegin").disabled = IsNull(_transCurId.get_dataValue());
    }

    function StoreInitialValues() {

        var oTD = null;
        var rowlen = grdQuota.rows.length;
        for (i = 0; i < rowlen; i++) {

            oTD = XUI.Html.DomUtils.GetFirstChild(grdQuota.rows[i].cells[4]).rows[0].cells[1];
            aValues[i] = XUI.Html.DomUtils.GetFirstChild(oTD).value;
        }

        if (_select) {
            _year = selFY.get_dataValue();
            _yearDisplay = selFY.get_selectedText();
        } else {
            _year = XUI.Html.GetText(divYear);
        }


        _transCurId.set_disabled((grdQuota.oRecordExists == 1));

        if (grdQuota.oTransCurId.length > 0) {
            var aLkupCtrlItms = new Array();
            aLkupCtrlItms.push(new LookupControlItem(grdQuota
                .oTransCurId,
                TransactionCurrency,
                grdQuota.oTransCurName));
            _transCurId.set_dataValue(aLkupCtrlItms);
            _sPrevTransCurId = grdQuota.oTransCurId;
        } else {
            _transCurId.set_dataValue(null);
            _sPrevTransCurId = null;
        }
    }

    function LoadQuotaYear(o) {
        if (!IsFormUnchanged()) {
            if (!window.confirm(LOCID_FISCAL_DATA_NOT_SAVED_HEAD +
                "\n\n" +
                LOCID_FISCAL_DATA_NOT_SAVED_OK +
                "\n" +
                LOCID_FISCAL_DATA_NOT_SAVED_CNCL)) {
                selFY.set_value(_year);
                return;
            } else {
                $get("cmdDialogApply").disabled = true;
            }
        }

        var oXmlHttp = new XMLHttpRequest();

        var oYear = "";
        if (_select) {
            oYear = selFY.get_value();
        } else {
            oYear = "<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(gregorianYear) %>";
        }

        if (_a.length == 1) {
            oXmlHttp.open("POST",
                Mscrm.CrmUri.create("/_grid/cmds/getquotas.aspx?id=" + _a[0] + "&y=" + oYear).toString(),
                false);
        } else {
            oXmlHttp.open("POST", Mscrm.CrmUri.create("/_grid/cmds/getquotas.aspx?y=" + oYear).toString(), false);
        }

        oXmlHttp.send();

        divQuotaInfo.innerHTML = oXmlHttp.responseText;

        StoreInitialValues();

        var iLen = quotaForm.childNodes.length;
        var oCtrl, i;

        for (i = 0; i < iLen; i++) {
            oCtrl = quotaForm.getElementById(i);
            if (!IsNull(oCtrl.IsMoney)) {
                $addHandler(oCtrl, "change", Enable_button_apply);

            }
        }
    }

    function applychanges() {
        save(true);
    }

    function save(bCloseWindow) {
        document.body.style.cursor = "wait";
        var boSuccess = true;
        if (!IsFormUnchanged()) {
            bSaved = true;


            var retval = "<calendar>";


            if (_select) {
                retval += "<year>" + selFY.get_value() + "</year>";
            } else {
                retval += "<year>" + XUI.Html.GetText(divYear) + "</year>";
            }

            if (grdQuota.oid.length > 0) {
                retval += "<userfiscalcalendarid>" + grdQuota.oid + "</userfiscalcalendarid>";
            }
            var dataValue = _transCurId.get_dataValue();
            if (!IsNull(dataValue)) {
                retval += "<transactioncurrencyid>" + dataValue[0].id + "</transactioncurrencyid>";
            }

            var i;
            var oTD = null;
            var rowlen = grdQuota.rows.length;
            for (var i = 0; i < rowlen; i++) {
                oInput = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(grdQuota.rows[i].cells[4])
                    .rows[0].cells[1]);
                var oInputControl = Mscrm.FormControlInputBehavior.GetElementBehavior(oInput);
                if (IsNull(oInputControl.get_dataValue())) {
                    oInputControl.set_dataValue(0);
                }
                retval += "<quota" + (i + 1) + ">" + oInputControl.get_dataValue() + "</quota" + (i + 1) + ">";
            }
            retval += "</calendar>";

            var xmlQuotas = XUI.Xml.LoadXml(retval);


            window.returnValue = false;
            var xmlhttp = new XMLHttpRequest();
            if (_a) {
                for (var i = 0; i < _a.length; i++) {
                    xmlhttp.open("POST",
                        Mscrm.CrmUri.create("/_grid/cmds/dlg_addquota.aspx?iTotal=1&id=" + _a[i]).toString(),
                        false);
                    Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
                    SetTokenInHeader(xmlhttp, Mscrm.CrmUri.create("/_grid/cmds/dlg_addquota.aspx"));

                    boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, xmlQuotas);
                }
            } else {
                xmlhttp.open("POST",
                    Mscrm.CrmUri.create("/_grid/cmds/dlg_addquota.aspx?iTotal=1&id=" + quotaForm.txtSPId.value)
                    .toString(),
                    false);
                Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
                SetTokenInHeader(xmlhttp, Mscrm.CrmUri.create("/_grid/cmds/dlg_addquota.aspx"));
                boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, xmlQuotas);
            }

            if (boSuccess) {


                var oXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(xmlhttp.responseXML));
                bSaved = handleXMLErr(oXml);
                window.returnValue = bSaved;

                grdQuota.oRecordExists = 1;
                var transactionCurrencyDataValue = _transCurId.get_dataValue()[0];
                grdQuota.oTransCurId = transactionCurrencyDataValue.id;
                grdQuota.oTransCurName = transactionCurrencyDataValue.name;
            }
        }
        if (bCloseWindow && boSuccess) {
            closeWindow();
        } else {
            StoreInitialValues();
        }

        document.body.style.cursor = "auto";

        return true;
    }

    function Enable_button_apply() {
        if ($get("cmdDialogApply") != null) {
            $get("cmdDialogApply").disabled = false;
        }

        return true;
    }

    function button_apply() {

        if (save(false)) {
            alert(LOCID_QUOTA_SAVED);
            $get("cmdDialogApply").disabled = true;
        }
    }

    function cancel() {
        closeWindow();
    }

</script>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">


    <form id="quotaForm">
        <table width="100%" height="100%" cellpadding="8" cellspacing="0" style="table-layout: fixed; margin-bottom: -20px;">
            <tr height="30">
                <td width="220">
                    <label for="selFY">
                        <loc:Text ResourceId="Web._grid.cmds.dlg_addquota.aspx_176" runat="server"/>
                    </label>
                </td>
                <td>
                    <crm:Select id="selFY" OnChange="LoadQuotaYear(this)" runat="server" TabIndex="1"/>
                    <div id="divYear"><% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(divYear) %></div>
                </td>
            </tr>
            <tr height="30">
                <td width="220">
                    <label for="transCurId">
                        <loc:Text ResourceId="Web._grid.cmds.dlg_addquota.aspx_177" runat="server"/>
                    </label>
                </td>
                <td>
                    <sdk:LookupControl id="transCurId" AccessibilityLabelResourceId="Web._grid.cmds.dlg_addquota.aspx_177" LookupStyle="single" runat="server" TabIndex="2"/>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div id='divQuotaInfo' class='gridDockContent' style='background-color: ffffff; border: 1px solid #cccccc;'>
                        <cnt:AppQuotaGrid id="grdQuota" ShowHeader="true" ShowRefresh="false" runat="server"/>
                    </div>
                </td>
            </tr>
        </table>
    </form>
</frm:DialogForm>

</body>
</html>