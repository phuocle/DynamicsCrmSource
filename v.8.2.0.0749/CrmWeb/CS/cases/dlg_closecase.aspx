<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Dialogs.CloseCasePage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        .ms-crm-IE7-td-Texarea-Container,
        .ms-crm-IE7-Texarea { position: static; }
    </style>
    <script language="javascript">

        $addHandler(window, "load", windowOnLoad)

        function windowOnLoad() {
            $get('totaltimespent').value = formatDuration(_iTotalTime);

            if (typeof(LOCID_CONFIRM_PARENT) != "undefined" && !confirm(LOCID_CONFIRM_PARENT)) {
                closeWindow();
            }

            if (typeof(LOCID_CONFIRM_CONTRACTDETAILSTAT) != "undefined" && !confirm(LOCID_CONFIRM_CONTRACTDETAILSTAT)) {
                closeWindow();
            }
        }

        function applychanges() {
            if (Trim($get('subject').value).length > 0) {
                var _billabletimespent = Mscrm.FormControlInputBehavior.GetBehaviorForForm("billabletimespent");
                var parseCurrentValue = _billabletimespent.parseDuration($get('billabletimespentSelectInput').value);

                var timeSpent = _billabletimespent.get_dataValue();


                if (timeSpent != parseCurrentValue) {
                    timeSpent = parseCurrentValue;
                }

                var description = Mscrm.FormControlInputBehavior.GetBehaviorForForm("description").get_dataValue();
                description = description ? description : "";

                if (IsNull(timeSpent) || isNaN(timeSpent) || timeSpent < 0) {
                    alert(LOCID_ERROR_INVALID_BILLABLETIME);
                    $get('billabletimespentSelectInput').blur();
                    return;
                }

                if (typeof(_bIsTimeAllotment) != "undefined") {
                    if (_bIsTimeAllotment &&
                        _iAllotmentsRemaining < _billabletimespent.get_dataValue() &&
                        !confirm(LOCID_CONFIRM_ALLOTMENT)) {
                        return false;
                    } else {
                        if (_iAllotmentsRemaining < 1 && !confirm(LOCID_CONFIRM_ALLOTMENT)) {
                            return false;
                        }
                    }
                }

                var xml = "<incidentresolution>";
                xml += "<timespent>" + timeSpent + "</timespent>";
                xml +=
                    "<activityid><%= SequentialGuid.CreateGuid().ToString("B", CultureInfo.InvariantCulture).ToUpper(CultureInfo.InvariantCulture).Replace("{", "").Replace("}", "") %></activityid>";
                xml += "<description>" + CrmEncodeDecode.CrmXmlEncode(description) + "</description>";
                xml += "<subject>" + CrmEncodeDecode.CrmXmlEncode($get('subject').value) + "</subject>";
                xml += "<incidentid>" + _iId + "</incidentid>";
                xml += "</incidentresolution>";


                var oResult = new Object();
                oResult.TimeSpent = timeSpent;
                oResult.Description = description;
                oResult.Subject = $get('subject').value;
                oResult.StatusCode = Mscrm.FormControlInputBehavior.GetBehaviorForForm("selResolution").get_dataValue();
                oResult.ActivityXml = xml;

                Mscrm.Utilities.setReturnValue(oResult);
                closeWindow();

            } else {
                alert(LOCID_MISSING_RESOLUTION);
                $get('subject').focus();
            }

        }

        function cancel() {
            closeWindow();
        }

    </script>
    <style>
        input { width: 98%; }
    </style>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">

    <table width="100%" cellpadding="0" cellspacing="3">
        <col width="100"><col>
        <tr>
            <td class="ms-crm-Field-Required">
                <label for="selResolution">
                    <loc:Text ResourceId="Web.CS.cases.dlg_closecase.aspx_69" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <sdk:PicklistStatusControl id="selResolution" runat="server"/>
            </td>
        </tr>
        <tr>
            <td class="ms-crm-Field-Required">
                <label for="subject">
                    <loc:Text ResourceId="Web.CS.cases.dlg_closecase.aspx_73" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input type="text" id="subject" maxlength="200" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>">
            </td>
        </tr>
        <tr>
            <td class="ms-crm-Field-Normal">
                <label for="totaltimespent">
                    <loc:Text ResourceId="Web.CS.cases.dlg_closecase.aspx_81" runat="server"/>
                </label>
            </td>
            <td>
                <input id="totaltimespent" type="text" style="ro" maxlength="15" disabled class="dlg_closecase_td_CloseCase">
            </td>
        </tr>
        <tr>
            <td class="ms-crm-Field-Required">
                <label for="billabletimespent">
                    <loc:Text ResourceId="Web.CS.cases.dlg_closecase.aspx_85" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td><ui:Duration id="billabletimespent" runat="server"/>
        </tr>
        <tr>

            <td style="padding-top: 20px" colspan="2">
                <label for="description">
                    <loc:Text ResourceId="Web.SFA.case.aspx_60.dlg_close" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <ui:TextArea id="description" Height="75px" maxlength="100000" runat="server"/>
            </td>
        </tr>
    </table>

</frm:DialogForm>

</body>
</html>