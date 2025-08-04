<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteLineItemDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="JavaScript">

        var _oArgs = getDialogArguments();
        var parentObjWin = null;
        var _a = null;
        var editPageWin = null;
        if (_oArgs.length > 1) {
            var parentObjWin = _oArgs[0];
            var _a = _oArgs[1];
            var editPageWin = _oArgs[2];
        } else {
            var _a = new Array();
            _a[0] = _oArgs[0];
        }

        function applychanges() {


            window.closeParent = true;
            var xmlDoc = null;


            if (window.isMobileClient) {
                xmlDoc = Sys.Net.XMLDOM("<node/>");
            } else {
                xmlDoc = XUI.Xml.LoadXml("<node/>");
            }

            for (i = 0; i < _a.length; i++) {
                var xmlhttp = new XMLHttpRequest();
                var submitUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_deleteqoiproduct.aspx?iObjType=" +
                    _iObjType +
                    "&sId=" +
                    _a[i] +
                    "&sParentId=" +
                    _sParentId);
                xmlhttp.open("POST", submitUrl.toString(), false);
                Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
                SetTokenInHeader(xmlhttp, submitUrl);
                xmlhttp.send(xmlDoc);
                var responseXml = null;

                if (window.isMobileClient) {
                    responseXml = xmlhttp.responseXML;
                } else {
                    responseXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(xmlhttp.responseXML));
                }
                var success = handleXMLErr(responseXml);

                if (success) {
                    var oXml = responseXml;
                    switch (_iObjType) {
                    case OpportunityProduct:
                        if (!IsNull(parentObjWin) && !parentObjWin.closed) {
                            var refreshFunc = parentObjWin.RefreshEstimatedRevenue;
                            if (!IsNull(editPageWin) && typeof (editPageWin.RefreshEstimatedRevenue) != "undefined") {
                                if (IsNull(refreshFunc))
                                    refreshFunc = editPageWin.RefreshEstimatedRevenue;


                                refreshFunc(_iObjType, _oArgs);
                            }
                        }
                        break;

                    case QuoteDetail:
                    case SalesOrderDetail:
                    case InvoiceDetail:
                        if (!IsNull(parentObjWin) && !parentObjWin.closed) {
                            var refreshFunc = parentObjWin.RefreshRevenueFields;
                            if (!IsNull(editPageWin) && typeof (editPageWin.RefreshRevenueFields) != "undefined") {
                                if (IsNull(refreshFunc))
                                    refreshFunc = editPageWin.RefreshRevenueFields;


                                refreshFunc(_iObjType, _oArgs);
                            }
                        }
                        break;
                    }
                    window.closeParent = null;
                }
            }
            if (IsNull(window.closeParent)) {


                Mscrm.Utilities.setReturnValue(true);

                closeWindow();
            }
        }

        function GetRevFldVal(oXml, sFldName) {
            var node = XUI.Xml.SelectSingleNode(oXml, '//*/' + sFldName, null);
            if (!IsNull(node))
                return parseInt(XUI.Xml.GetText(node), 10);
            else
                return null;
        }

        function cancel() {
            closeWindow();
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>

</frm:DialogForm>

</body>
</html>