<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.SharePointValidatePage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script language="JavaScript">
        $addHandler(window, "load", SharepointValidationOnLoad);

        function SharepointValidationOnLoad() {
            attachWindowOnBeforeUnload(closeButtonX);


            window.setTimeout(Mscrm.SharePointSiteValidationHelper.process, 100);
        }

        function cancel() {
            closeWindow();
        }

        function closeButtonAction() {


            closeWindow();
        }

        function errorLogButtonAction() {
            document.getElementById('errorlogtextid').value = CrmEncodeDecode
                .CrmHtmlDecode(XUI.Html.GetText(document.getElementById('errorlogtextid')));
            if (document.getElementById('textHolder').style.display == 'inline') {
                document.getElementById('textHolder').style.display = 'none';
            } else {
                document.getElementById('textHolder').style.display = 'inline';
            }
        }

        function closeButtonX(oEvent) {
            Mscrm.Utilities.setReturnValue(null);

            oEvent = oEvent.rawEvent;

            if (Mscrm.SharePointSiteValidationHelper.isValidationRunning()) {
                var msg =
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("Dialog_SharePoint_Site_Validation_ConfirmMsg")) %>;
                oEvent.returnValue = msg;
                return msg;
            }

        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <p>
        <b>
            <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_SubHeading1" runat="server"/>
        </b>
    </p>
    <table id="validationStatus" border="0">
        <tr>
            <td class="mscrm-validate-summaryColumn1">
                <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_ToBeValidated" runat="server"/>
            </td>
            <td class="mscrm-validate-summaryColumn2" id="toBeValidated"> 0 </td>
        </tr>
        <tr>
            <td class="mscrm-validate-summaryColumn1">
                <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_TotalValidated" runat="server"/>
            </td> <td class="mscrm-validate-summaryColumn2" id="totalValidated"> 0 </td>
        </tr>
        <tr>
            <td class="mscrm-validate-summaryColumn1">
                <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_SuccessCount" runat="server"/>
            </td> <td class="mscrm-validate-summaryColumn2" id="successCount"> 0 </td>
        </tr>
        <tr>
            <td class="mscrm-validate-summaryColumn1">
                <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_FailureCount" runat="server"/>
            </td> <td class="mscrm-validate-summaryColumn2" id="failureCount"> 0 </td>
        </tr>
    </table>
    <p>
        <b>
            <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_SubHeading2" runat="server"/>
        </b>
    </p>
    <table class="mscrm-validate-TableGeneric" border="1" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <table id="siteValidationTableHeader" class="mscrm-validate-TableGeneric" border="0" cellpadding="0" cellspacing="0" runat="server">
                    <tr>
                        <td class="mscrm-validate-HeaderColumn mscrm-validate-Column1-width" id="columnHeader1">
                            <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_HeaderColumn0" runat="server"/>
                        </td>
                        <td class="mscrm-validate-HeaderColumn mscrm-validate-Column2-width" id="columnHeader2">
                            <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_HeaderColumn1" runat="server"/>
                        </td>
                        <td class="mscrm-validate-HeaderColumn mscrm-validate-Column3-width" id="columnHeader3">
                            <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_HeaderColumn2" runat="server"/>
                        </td>
                        <td class="mscrm-validate-HeaderColumn mscrm-validate-Column4-width" id="columnHeader4">
                            <loc:Text ResourceId="Dialog_SharePoint_Site_Validation_HeaderColumn3" runat="server"/>
                        </td>

                    </tr>
                </table>
            </td>
        </tr>

        <tr style="height: 100%">
            <td>
                <div class="mscrm-validate-OverflowDiv">
                    <table class="mscrm-validate-TableGeneric" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>

                                <table id="siteValidationTable" class="mscrm-validate-TableGeneric" style="height: auto" cellpadding="0" cellspacing="0" runat="server">
                                    <tbody id="validationTableBody"/>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
    <table style="margin-bottom: 10px; margin-top: 50px;" id="errortextHolder" width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td >
                <div id="textHolder" style="display: none; padding-bottom: 30px">
                    <textarea id="errorlogtextid" rows="5" name="S1" cols="50" style="width: 98% !important; background-color: #eeeeee" readonly></textarea>
                </div>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>