<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ActivateDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">


        var _sAction = "activate";
        var _iObjType = <%= ObjType %>;
        var _statusCode;

        $addHandler(window, "load", activatePage_onload);

        function activatePage_onload() {
            if (_iObjType == SystemUser && !IsNull(_bCheckLicenseNeeded) && _bCheckLicenseNeeded) {
                CheckRemainingLicenses();
            }
        }

        function confirmMode(b) {
            Mscrm.Utilities.setReturnValue(b);
            closeWindow(true);
        }

        function applychanges() {
            if (Mscrm.Utilities.enforceStateTransitions()) {
                bulkChangeState(true);
            } else {
                <%= dialogActionOk %>;
            }
        }

        function bulkChangeState(b) {
            if (b) {
                var iStatusCode = -1;
                _statusCode = Mscrm.FormControlInputBehavior.GetBehavior('statusCode');
                if (!IsNull(_statusCode)) {
                    iStatusCode = _statusCode.get_dataValue();
                }
                _custParams += "&iStateCode=0&iStatusCode=" + iStatusCode;
                go();
            } else {
                Mscrm.Utilities.setReturnValue(b);
                closeWindow(true);
            }
        }


        function CheckRemainingLicenses() {
            var userIds = getDialogArguments();
            if (userIds === null || userIds == "") {
                return;
            }

            sIds = userIds[0];
            iLen = userIds.length;
            for (var i = 1; i < iLen; i++) {
                sIds += ";" + userIds[i];
            }

            var xmlhttp = new XMLHttpRequest();
            var oDoc = XUI.Xml.LoadXml("<ids>" + CrmEncodeDecode.CrmXmlEncode(sIds) + "</ids>");

            var submitUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_activate.aspx?iObjType=" +
                _iObjType +
                "&iTotal=" +
                iLen);

            var boSuccess = true;
            xmlhttp.open("POST", submitUrl.toString(), false);
            Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
            SetTokenInHeader(xmlhttp, submitUrl);

            boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, oDoc);

            if (boSuccess) {
                var oResultXml = xmlhttp.responseXML;

                var status = handleXMLErr(oResultXml, false);
                if (status == ERROR_STOP) {
                    closeWindow(true);
                }
            }
        }

        <%


            if (dialogActionCancel != String.Empty)
            {
        %>
        function cancel() {
            <%= dialogActionCancel %>
        }
        <%
            }
        %>

    </script>
</head>
<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <loc:Text id="FormTextTitle" ResourceId="Web._grid.cmds.dlg_activate.aspx_55" runat="server">
                <loc:Argument runat="server"><%= LocalizedObjectName %></loc:Argument>
                <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(statusString) %></loc:Argument>
            </loc:Text>
        </tr>
        <%
            if (extraInformationLine1 != String.Empty)
            {
        %>
            <br/>
            <tr>
                <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(extraInformationLine1) %></loc:Argument>
            </tr>
            <br/>
            <tr>
                <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(extraInformationLine2) %></loc:Argument>
            </tr>
        <%
            }
        %>
        <tr>
            <td>
                <div id="StatusPickerDiv" runat="server">
                    <br/>
                    <table cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed">
                        <col width="80"><col>
                        <tr>
                            <td class="dlg_deactivate_td_status">
                                <label for="statusCode">
                                    <loc:Text ResourceId="Web._grid.cmds.dlg_deactivate.aspx_87" runat="server"/>
                                </label>
                            </td>
                            <td>
                                <sdk:PicklistStatusControl runat="server" id="statusCode"/>

                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div id="WarningMessageDiv" runat="server">
                    <br/>
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td class="ms-crm-Dialog-Info-Icon" valign="middle">
                                <img alt="" src="/_imgs/error/notif_icn_info16.png"/>
                            </td>
                            <td>
                                <loc:Text id="WarningTextTitle" ResourceId="Web._grid.cmds.dlg_deactivate.aspx_90" runat="server"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>