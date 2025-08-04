<%@ Page Language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.MailMergeCampaignPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <object id="_oMailMerge" classid='clsid:E19EA63A-8B6F-4AA3-9013-3DE5EBAFD7BF' style='display: none'>
    </object>
    <script language="javascript" type="text/javascript">

        var _iObjectTypeCode = null;
        var _aIds = null;
        var _oGridXml = null;
        var mc_MiniCampaignFor_int;
        var mc_MiniCampaignName_str;
        var mc_MailMergeDocType_int;
        Sys.Application.add_load(function() {
            attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            WizardSetButtonText(LOCID_MC_BTN_LAUNCHWORD, "", _WizardButtonsEnum.NEXTBUTTON);
            try {
                _oMailMerge.Initialize();
            } catch (e) {
            }
            var oArgs = parent.getDialogArguments();
            with (oArgs) {
                _iObjectTypeCode = ObjectTypeCode;
                _aIds = Ids;
                _oGridXml = GridXml;
            }

            var queryString = Mscrm.CrmUri.create("/MA/MiniCampaign/iframes/mailmergeForm.aspx?objectTypeCode=" +
                CrmEncodeDecode.CrmUrlEncode(_iObjectTypeCode)).toString();

            if (_iObjectTypeCode == List && _aIds != null && _aIds != "" && _aIds.length > 0) {
                queryString += "&objectId=" + CrmEncodeDecode.CrmUrlEncode(_aIds[0]);
            }
            $get('postToIframe').target = "mailMergeFormFrame";
            $get('postToIframe').action = queryString;
            $get('postToIframe').submit();
        });


        function WizardCloseMessage(oEvent) {
            oEvent = oEvent.rawEvent;
            oEvent.returnValue = " ";
            return " ";
        }

        function isMailMergeOption(item) {
            if (item && item.length >= 5)
                return (item == "mm_id");
            else
                return false;
        }

        function GetWizardData() {

            mc_MiniCampaignFor_int = _iObjectTypeCode;


            mc_TargetIds_str = "";
            if (_aIds != null && _aIds != "" && _aIds.length > 0) {
                mc_TargetIds_str += _aIds[0];
                for (var i = 1; i < _aIds.length; i++) {
                    mc_TargetIds_str += "," + _aIds[i];
                }
            }


            mc_FetchXml_str = _oGridXml;


            mc_MiniCampaignType_str = WizardGetProperty("SelectedItem");


            mc_MiniCampaignName_str = WizardGetProperty("CampaignName");

            mc_MailMergeDocType_int = 0;
            if (mc_MiniCampaignType_str == Letter) {
                mc_MailMergeDocType_int = 0;
            } else if (mc_MiniCampaignType_str == Email) {
                mc_MailMergeDocType_int = 4;
            } else if (mc_MiniCampaignType_str == Fax) {
                mc_MailMergeDocType_int = 5;
            }
        }

        function finish() {

            WizardSetButtonEnabled(false, _WizardButtonsEnum.BACKBUTTON);


            if (isMailMergeOption(WizardGetProperty("MailMergeSelect"))) {

                WizardSetButtonEnabled(false, _WizardButtonsEnum.BACKBUTTON);
                WizardSetButtonEnabled(false, _WizardButtonsEnum.CANCELBUTTON);


                GetWizardData();

                var objectType = mc_MiniCampaignFor_int;
                var objectId = "";
                if (mc_MiniCampaignFor_int == List) {
                    objectId = IsNull(_aIds[0]) ? "" : _aIds[0];
                }
                var lookupObjectType = $get('mailMergeFormFrame').contentWindow.getLookupType();
                var languageId = $get('mailMergeFormFrame').contentWindow.getLanguage();
                var templateId = $get('mailMergeFormFrame').contentWindow.getTemplateId();
                var currentPage = false;
                var ids = IsNull(mc_TargetIds_str) ? "" : mc_TargetIds_str;
                var gridXml = IsNull(mc_FetchXml_str) ? "" : mc_FetchXml_str;
                var tempLayoutXml = $get('mailMergeFormFrame').contentWindow.getLayoutXml(false);
                var layoutXml = IsNull(tempLayoutXml) ? "" : tempLayoutXml;
                var mergeType = mc_MailMergeDocType_int;
                var quickCampaignName = IsNull(mc_MiniCampaignName_str) ? "" : mc_MiniCampaignName_str;

                try {

                    var runMailMergeInCurrentProcess;
                    try {
                        runMailMergeInCurrentProcess = getOutlookHostedWindow()
                            .DoMailMerge(objectType,
                                objectId,
                                lookupObjectType,
                                languageId,
                                templateId,
                                currentPage,
                                ids,
                                gridXml,
                                layoutXml,
                                mergeType,
                                quickCampaignName);
                    } catch (e) {


                        runMailMergeInCurrentProcess = true;
                    }

                    if (runMailMergeInCurrentProcess) {

                        _oMailMerge.DoMailMerge(objectType,
                            objectId,
                            lookupObjectType,
                            languageId,
                            templateId,
                            currentPage,
                            ids,
                            gridXml,
                            layoutXml,
                            mergeType,
                            quickCampaignName);
                    }
                } catch (e) {
                    alert(<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("MailMerge_ErrorInAddin")) %>);
                    closeWindow();
                }

            }
        }

        function moveNext() {
            if ($get('mailMergeFormFrame').contentWindow.validateInputs()) {
                finish();
            } else {

                return;
            }

            if (!Mscrm.Utilities.isModalDialogSupported()) {
                try {
                    window.top.opener.auto(BulkOperation);
                } catch (e) {
                }
            }
            detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            WizardNavigate(_WizardNavigateEnum.CLOSE);
        }


    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table height="100%" width="100%" border="0" bordercolor="red" cellpadding="0" cellspacing="0">
        <tr>
            <td width="100%" height="100%" valign="top">
                <iframe name="mailMergeFormFrame" id="mailMergeFormFrame" width="100%" height="100%"
                        scrolling="auto" src='/_static/blank.htm' frameborder="0">
                </iframe>
            </td>
        </tr>
    </table>
    <form method='post' action='' target='' id='postToIframe'>
    </form>
</frm:WizardForm>
</body>
</html>