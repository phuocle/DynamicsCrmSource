<%@ Page Language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.FormActivityPage" %>
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
<script language="javascript" type="text/javascript">
    var _templateCheckBox;
    var _oMCCreatedFrom;
    var mc_EmailTemplateId_str;
    var _lastSub = "";
    var _lastDesc = "";
    var _lastTemplateInnerHTML = "";
    var idDescription;
    var dataDescription;
    var callPopulateEmailBody;


    Sys.Application.add_load(function() {
        _templateCheckBox = Mscrm.FormControlInputBehavior.GetBehavior('templateCheckBox');
        var oArgs = parent.getDialogArguments();
        with (oArgs) {
            _oMCCreatedFrom = CreatedFromOtc;
        }

        var templateDivVisible = false;
        if (WizardGetProperty("SelectedItem") == Email) {
            $get('templateDiv').style.display = "inline";
            templateDivVisible = true;
        } else {
            $get('templateDiv').style.display = "none";
            templateDivVisible = false;
        }

        var queryString = Mscrm.CrmUri.create("/MA/MiniCampaign/iframes/activityForm.aspx?objectTypeCode=" +
            WizardGetProperty("SelectedItem"));
        $get('postToIframe').target = "activityFormFrame";
        $get('postToIframe').action = queryString;
        $get('postToIframe').submit();


        UpdateActivityFormContainerHeight(templateDivVisible);
        document.getElementById("buttonBack").onclick = moveBack;
    });

    function UpdateActivityFormContainerHeight(templateDivVisible) {
        var height = templateDivVisible ? 40 : 0;
        $get("activityFormContainer").style.top = height.toString() + "px";
        return;
    }

    function selectTemplate() {
        if (_templateCheckBox.get_dataValue()) {
            var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx?bulkemail=false" +
                "&objectTypeCode=" +
                _oMCCreatedFrom +
                "&targetType=4406");
            var callbackFunction = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterBulkEmail", this, false);
            var crmDialog = new Mscrm.CrmDialog(oUrl, args, oFeatures.width, oFeatures.height, null);
            crmDialog.setCallbackReference(callbackFunction);
            return crmDialog.show();
        }
    }

    function performActionAfterBulkEmail(sResponse) {
        var templateName = $get("templateName");
        if (sResponse != null) {
            templateName.innerHTML = sResponse.innerHTML + CrmEncodeDecode.CrmHtmlEncode(sResponse.tmplTitle);
            _lastTemplateInnerHTML = templateName.innerHTML;
            mc_EmailTemplateId_str = sResponse.tmplId;
            WizardSetProperty("EmailTemplate", mc_EmailTemplateId_str);
        }
    }

    function enableTemplate() {
        var selectTemplate = $get("selectTemplate");
        var useTemplateLblDiv = $get("useTemplateLblDiv");
        var templateNameDiv = $get("templateNameDiv");
        var templateName = $get("templateName");
        if (_templateCheckBox.get_dataValue()) {
            selectTemplate.disabled = false;
            useTemplateLblDiv.disabled = false;
            templateNameDiv.disabled = false;
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_disabled(true);
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').useTemplate(true);
            templateName.innerHTML = _lastTemplateInnerHTML;
            _lastSub = _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').get_value();
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_dataValue("");
            _lastDesc = _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').get_dataValue();
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').set_dataValue("");

        } else {
            selectTemplate.disabled = true;
            useTemplateLblDiv.disabled = true;
            templateNameDiv.disabled = true;
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_disabled(false);
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').useTemplate(false);
            templateName.innerHTML = "";
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_dataValue(_lastSub);
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').set_dataValue(_lastDesc);
        }
    }

    function toggleProgressIndicator(bShowProgress) {
        document.getElementById("progressIndicator").style.display = (bShowProgress) ? "block" : "none";
        document.getElementById("progressInner").style.cursor = (bShowProgress) ? "wait" : "default";
        document.getElementById("activityFormFrame").style.display = (bShowProgress) ? "none" : "inline";
    }


    function overrideClose() {
        if ($get('activityFormFrame') && $get('activityFormFrame').contentWindow.$find("crmForm")) {
            $get('activityFormFrame').contentWindow.$find("crmForm").set_saving(true);
        }
    }

    function populateFormData() {
        var frameBehavior = _activityFormFrame.Mscrm.FormControlInputBehavior;
        if (WizardHasProperty("idArray") && WizardHasProperty("dataArray") && WizardHasProperty("OldSelectedItem")) {
            if (WizardGetProperty("SelectedItem") == WizardGetProperty("OldSelectedItem")) {
                var idArray = new Array();
                var dataArray = new Array();
                idArray = WizardGetProperty('idArray');
                dataArray = WizardGetProperty('dataArray')
                for (var i = 0; i < idArray.length; i++) {
                    if (typeof (frameBehavior.GetBehavior(idArray[i]).Items) != "undefined") {
                        if (!IsNull(frameBehavior.GetBehavior(idArray[i]).get_dataValue())) {
                            frameBehavior.GetBehavior(idArray[i])
                                .RemoveItem(frameBehavior.GetBehavior(idArray[i]).get_dataValue()[0].id);
                        }
                        frameBehavior.GetBehavior(idArray[i]).AddItems(dataArray[i]);
                    } else if (typeof (frameBehavior.GetBehavior(idArray[i]).set_dataValueAsDate) != "undefined") {
                        frameBehavior.GetBehavior(idArray[i]).set_dataValue(new Date(dataArray[i]));
                    } else if (frameBehavior.GetBehavior(idArray[i])._name == "EmailBodyInputBehavior") {
                        if (Sys.Browser.agent == Sys.Browser.Firefox || Mscrm.SessionInfo.isOutlookClient()) {
                            frameBehavior.GetBehavior(idArray[i]).set_dataValue(dataArray[i]);
                        } else {
                            idDescription = idArray[i];
                            dataDescription = dataArray[i];
                            callPopulateEmailBody = function() { populateEmailBody(idDescription, dataDescription) };
                            $addHandler(frameBehavior.GetBehavior(idArray[i]).get_frame(),
                                'load',
                                callPopulateEmailBody);
                        }
                        _lastDesc = dataArray[i];
                    } else if (idArray[i] == "subject") {
                        frameBehavior.GetBehavior(idArray[i]).set_dataValue(dataArray[i]);
                        _lastSub = dataArray[i];
                    } else {
                        frameBehavior.GetBehavior(idArray[i]).set_dataValue(dataArray[i]);
                    }
                }
            }
        }

        if (WizardHasProperty("templateName")) {
            var templateName = $get("templateName");
            templateName.innerHTML = WizardGetProperty("templateName");
            _lastTemplateInnerHTML = templateName.innerHTML;
        }
        if (WizardHasProperty("templateCheckBox")) {
            _templateCheckBox.set_dataValue(WizardGetProperty("templateCheckBox"));
            enableTemplate();
        }
    }

    function populateEmailBody(id, data) {
        _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior(id).set_dataValue(data);
    }

    function onActivityFormLoad() {
        attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
        _activityFormFrame = $get('activityFormFrame').contentWindow;
        toggleProgressIndicator(false);
        if (!IsNull(_activityFormFrame.$get) && !IsNull(_activityFormFrame.$get('crmForm'))) {
            window.setTimeout("populateFormData()", 50);
            _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').setFocus();
            overrideClose();
        }
    }

    function GetNextPageDefinition() {
        var oUrl = Mscrm.CrmUri.create("/MA/minicampaign/Summary.aspx");
        return new NextPageDefinition(oUrl);
    }

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

    function openTemplate() {
        var templateName = $get("templateName");
        if (XUI.Html.GetText(templateName) != "") {
            var oUrl = Mscrm.CrmUri.create("/tools/emailtemplateeditor/emailtemplateeditor.aspx?id=" +
                mc_EmailTemplateId_str);
            openStdDlg(oUrl, null, 800, 600);
        }
    }

    function moveBack() {
        saveFormControls();
        detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
        WizardNavigate(_WizardNavigateEnum.BACK);
    }

    function moveNext() {

        if (WizardGetProperty("SelectedItem") == Email) {

            if (_templateCheckBox.get_dataValue()) {
                var templateName = $get("templateName");
                if (XUI.Html.GetText(templateName) == "") {
                    alert(LOCID_MC_TEMPLATE_MANDATORY);
                    return;
                }
            }
            isValid = _activityFormFrame.$find("crmForm").IsValid();

        } else if (!isMailMergeOption(WizardGetProperty("MailMergeSelect"))) {
            isValid = _activityFormFrame.$find("crmForm").IsValid();
        }


        if (isValid == false) {

            return;
        }
        if (!isMailMergeOption(WizardGetProperty('MailMergeSelect'))) {
            _activityFormFrame.$find("crmForm").BuildXml(false, false);
            WizardSetProperty("ActivityXml",
                _activityFormFrame.document.getElementById('crmFormSubmit').crmFormSubmitXml.value);
        }

        overrideClose();
        WizardSetProperty("Subject", _activityFormFrame.$get('crmForm').subject.value);
        saveFormControls();
        detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
        WizardNavigate(_WizardNavigateEnum.NEXT);
    }

    function saveFormControls() {
        if (!isMailMergeOption(WizardGetProperty('MailMergeSelect'))) {
            _activityFormFrame.$find("crmForm").BuildXml(false, false);
            var formXml = XUI.Xml.LoadXml(_activityFormFrame.document.getElementById('crmFormSubmit').crmFormSubmitXml
                .value);
            if (!IsNull(formXml) && !IsNull(formXml.firstChild)) {
                var firstNode = formXml.firstChild.firstChild;
                var dataArray = new Array();
                var idArray = new Array();
                for (var i = 0; i < formXml.firstChild.childNodes.length; i++) {
                    if (_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior(firstNode.nodeName) != null) {
                        idArray[i] = firstNode.nodeName;
                        if (typeof (_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior(firstNode.nodeName)
                                .Items) !=
                            "undefined") {
                            dataArray[i] = _activityFormFrame.Mscrm.FormControlInputBehavior
                                .GetBehavior(firstNode.nodeName).Items(false, true, undefined, undefined, true);
                        } else if (_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior(firstNode.nodeName)
                            .get_dataValueAsDate) {
                            dataArray[i] = _activityFormFrame.Mscrm.FormControlInputBehavior
                                .GetBehavior(firstNode.nodeName).get_dataValueAsDate().toString();
                        } else {
                            dataArray[i] = _activityFormFrame.Mscrm.FormControlInputBehavior
                                .GetBehavior(firstNode.nodeName).get_dataValue();
                        }
                    }
                    firstNode = firstNode.nextSibling;
                }
                WizardSetProperty("idArray", idArray);
                WizardSetProperty("dataArray", dataArray);
                WizardSetProperty("OldSelectedItem", WizardGetProperty("SelectedItem"));
                var templateName = $get("templateName");
                WizardSetProperty("templateName", templateName.innerHTML);
                WizardSetProperty("templateCheckBox", _templateCheckBox.get_dataValue());
                try {
                    $removeHandler(_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('idDescription')
                        .get_frame(),
                        'load',
                        callPopulateEmailBody);
                } catch (e) {
                }
            }
        }
    }

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <div style="height: 100%; width: 100%; position: absolute;">
        <div style="position: absolute; height: 40px; display: none" id="templateDiv">
            <table id="templateTable" width="100%" height="100%" cellspacing="0" cellpadding="0">
                <colgroup>
                    <col/>
                    <col width="auto"/>
                    <col/>
                    <col width="50%"/>
                </colgroup>
                <tr height="20" style="padding: 10px 10px 4px 10px">
                    <td>
                        <cui:CheckBox tabindex="1" id="templateCheckBox" name="chkEnableTemplate" onclick="enableTemplate()" runat="server"/>
                    </td>
                    <td style="padding-left: 0px; padding-right: 0px;">
                        <div id="useTemplateLblDiv" style="padding: 0px 0px 0px 0px" disabled="true">
                            <nobr>
                                <label for="templateCheckBox" width="100%">
                                    <loc:Text ID="useTemplateLbl" ResourceId="MA_UseTemplate" runat="server"/>
                                </label>
                            </nobr>
                        </div>
                    </td>
                    <td>
                        <table style="table-layout: auto;">
                            <tr id="templateSelection">
                                <td>
                                    <table id="templateLookupTable" class="ms-crm-Lookup" cellpadding="0" cellspacing="0"
                                           style="table-layout: fixed;">
                                        <tr>
                                            <td>
                                                <div id="templateNameDiv" ime-mode="auto" class="ms-crm-Lookup" disabled="true" onkeypress="openTemplate()" style="min-width: 180px">
                                                    <ul style="float: left">
                                                        <li style="display: inline">
                                                            <span id="templateName" contenteditable="false" class="ms-crm-Lookup-Item"
                                                                  onclick="openTemplate()">
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <div id="temp1" ime-mode="auto" tabindex="2" onkeypress="selectTemplate()">
                                        <a id="selectTemplate" href="#" onclick="selectTemplate()" disabled="true">
                                            <img id="insertTemplateImg" src="/_imgs/htmlbar/cmd-insertField.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_BulkEmail_Template_SubTitle' runat='server'/>"/>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
        </div>
        <div id="activityFormContainer" style="position: absolute; width: 100%; bottom: 0px;">
            <div id="progressIndicator" style="height: 100%; width: 100%; background-color: #ffffff;">
                <table id="progressInner" height="100%" width="100%">
                    <col/>
                    <tr>
                        <td valign="middle" align="center">
                            <img alt="" src="/_imgs/AdvFind/progress.gif"/><br/>
                            <loc:text resourceid="PageLoadingMessage" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <iframe name="activityFormFrame" id="activityFormFrame" onload="onActivityFormLoad();"
                    style="position: absolute; width: 100%; height: 100%" scrolling="auto" src='/_static/blank.htm' frameborder="0">
            </iframe>
        </div>
    </div>
    <form method='post' action='' target='' id='postToIframe'>
    </form>
</frm:WizardForm>
</body>
</html>