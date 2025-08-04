<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.BulkDelete.DeleteImportedRecords" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<html xmlns:Crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript">
        var _sCCRecipients = "";
        var _sAction = "deleteimportedrecords";
        var _iObjType = 0;
        var _sDeleteMode = "";
        var _recipients = null;
        var txtJobName;
        var checkNotify;

        function WizardCloseMessage(oEvent) {
            oEvent = oEvent.rawEvent;
            oEvent.returnValue = " ";
            return " ";
        }

        Sys.Application.add_load(function() {
            _recipients = Mscrm.FormControlInputBehavior.GetBehavior('recipients');
            txtJobName = $get('txtJobName');
            checkNotify = $get("checkNotify");
            XUI.Html.SetText($get("checkNotifyText"), LOCID_EMAILOPTIONSTEXT);
            txtJobName.value = formatString(LOCID_AF_JOBNAMEFORMAT, LOCID_USER_DATETIME);
            _sDeleteMode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["DeleteMode"]) %>;
            attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
        });

        function applychanges() {
            if (Trim(txtJobName.value) == "") {
                txtJobName.value = "";
                txtJobName.focus();
                alert(LOCID_JOBNAME_EMPTY);
                return;
            }

            if (checkNotify.checked == true) {
                if (collectRecipients() == false || validateEmailRecipients() == false) {
                    alert(LOCID_INVALID_EMAIL);
                    return;
                }
            }

            __dialogXml = "<dataxml><jobname>" +
                CrmEncodeDecode.CrmHtmlEncode(Trim(txtJobName.value)) +
                "</jobname><ccrecipients>" +
                CrmEncodeDecode.CrmHtmlEncode(_sCCRecipients) +
                "</ccrecipients><deleteimport>" +
                CrmEncodeDecode.CrmHtmlEncode($get("deleteImportHistory").checked) +
                "</deleteimport><sendemail>" +
                CrmEncodeDecode.CrmHtmlEncode(checkNotify.checked) +
                "</sendemail><DeleteMode>" +
                CrmEncodeDecode.CrmHtmlEncode(_sDeleteMode) +
                "</DeleteMode></dataxml>";
            detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            Mscrm.Utilities.setReturnValue(true);
            go();
        }

        function cancel() {

            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

        function collectRecipients() {
            _sCCRecipients = "";
            var aItems = _recipients.Items(false, true);
            if (aItems && aItems.length > 0) {
                for (j = 0; j < aItems.length - 1; j++) {

                    if (aItems[j].id) {
                        _sCCRecipients = _sCCRecipients + aItems[j].id + ",";
                    } else {
                        return false;
                    }
                }


                if (aItems[j].id) {
                    _sCCRecipients = _sCCRecipients + aItems[j].id;
                } else {
                    return false;
                }
            }

            return true;
        }


        function validateEmailRecipients() {


            var command = new RemoteCommand("DuplicateDetection", "ValidateEmailRecipients");


            command.SetParameter("recipients", _sCCRecipients);


            var result = command.Execute();

            if (result) {
                return result.ReturnValue;
            } else {
                return false;
            }
        }


        function onClickChkNotify() {
            _recipients.set_disabled(!checkNotify.checked);
        }

        function Cancel() {

        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" cellpadding=0 cellspacing=0>
        <tr>
            <td class="BulkDeleteWizard_td_page3">
                <table width="100%" cellpadding=0 cellspacing=0>
                    <tr>
                        <td>
                            <loc:Text ResourceId="BulkDelete.DeleteImporteRecords.Info" runat="server"/>
                        </td>
                    </tr>
                    <tr height=15>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="BulkDeleteWizard_td_page3">
                <table width="100%" cellpadding=0 cellspacing=0>
                    <tr height=10>
                        <td>
                            <loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.Description" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label class="ms-crm-Bold-Header" for="txtJobName">
                                <loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.JobName" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 5px; padding-bottom: 10px;">
                            <input class="text" type="text" size="83" id="txtJobName" maxlength=200 name="txtName"/>
                        </td>
                    </tr>
                    <tr height=15>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr valign="top">
            <td class="BulkDeleteWizard_td_starttime">
                <table width="100%" cellpadding=0 cellspacing=0>
                    <col width=20><col>
                    <tr>
                        <td>
                            <ui:CheckBox id="checkNotify" onclick="onClickChkNotify();" runat="Server"/>
                        </td>
                        <td id="emailNotification">
                            <label for="checkNotify" id="checkNotifyText"></label>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <table width="100%">
                                <tr>
                                    <td>
                                        <label for="recipients">
                                            <loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.AlsoNotifyText" runat="server"/>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                            <table width="100%">
                                <col width="70%"><col>
                                <tr>
                                    <td>
                                        <sdk:PartyListControl id="recipients" LookupStyle="multi" runat="server"/>
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr valign="top">
            <td class="BulkDeleteWizard_td_starttime">
                <table width="100%" cellpadding=0 cellspacing=0>
                    <tr>
                        <td>
                            <ui:CheckBox id="deleteImportHistory" runat="Server"/>
                        </td>
                        <td id="deleteImport">
                            <label for="deleteImportHistory" id="deleteImportHistoryText">
                                <loc:Text ResourceId="BulkDelete.DeleteImporteRecords.DeleteImportHistory" runat="server"/>
                            </label>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>