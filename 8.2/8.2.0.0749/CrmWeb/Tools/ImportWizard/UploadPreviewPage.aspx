<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.UploadPreviewPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>

<script language="javascript" type="text/javascript">

    var isDelimiterDirty;

    var cancelClicked = false;

    function OnBeforeWindowUnload(oEvent) {
        oEvent = oEvent.rawEvent;

        if (cancelClicked) {
            if (WizardGetProperty("MapChanged") == true) {
                oEvent.returnValue = LOCID_MAPPING_WILLBE_LOST;
                return LOCID_MAPPING_WILLBE_LOST;
            }
        } else {
            oEvent.returnValue = " ";
            return " ";
        }
    }


    function GetNextPageDefinition() {
        var nextPageUrl = GetNextWizardPageUrl("UploadPreviewPage");
        var postData = ConstructPostData(new Array("ImportId", "ImportFileName"));

        return new NextPageDefinition(nextPageUrl, postData);
    }

    function WantToSkip() {
        var importType = WizardGetProperty("ImportType");
        if (importType == ImportType_CreateWithTemplate) {
            return true;
        }
        return false;
    }


    function moveNext() {
        SaveDelimiterStateIfDirty();
        disableAllButtons();
        if (WizardGetProperty("UploadPreviewPageWSError") == true) {
            SetProgressMessageDisplayState(true);
            var propertiesToPost = new Array("ImportId",
                "FieldDelimiter",
                "DataDelimiter",
                "IsFirstRowHeader",
                "ImportFileName",
                "OriginalImportFileId");


            var command = new RemoteCommand("ImportWebService", "UpdateDelimiters");
            var wizardDataXml = ConstructPostData(propertiesToPost);
            command.SetParameter("wizardDataXml", wizardDataXml);
            command.ErrorHandler = ErrHandler;
            command.Execute(delimitersUpdationDone);

        } else {
            detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            WizardNavigate(_WizardNavigateEnum.NEXT);
        }
    }


    function moveBack() {
        SaveDelimiterStateIfDirty();
        detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
        WizardNavigate(_WizardNavigateEnum.BACK);
    }


    function ErrHandler(sHResult, oXmlNode) {
        if (sHResult == "0x" + LOCID_EMPTYFILE_ERRORCODE)
            alert(LOCID_EMPTY_FILE_DETECTED);
        else
            RemoteCommandDefaultErrorHandler(sHResult, oXmlNode);
    }


    function delimitersUpdationDone(oResult) {
        if (oResult.Success == true) {
            if (oResult.ReturnValue == false)
                if (confirm(LOCID_ONE_HEADER_DETECTED) == false) {
                    IncorrectDelimiterUpdate();
                    return;
                }

            WizardSetProperty("UploadPreviewPageWSError", false);
            WizardSetProperty("DelimitersUpdated", true);
            detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            WizardNavigate(_WizardNavigateEnum.NEXT);
        } else
            IncorrectDelimiterUpdate();
    }

    function IncorrectDelimiterUpdate() {
        WizardSetProperty("UploadPreviewPageWSError", true);

        enableAllButtons();
        SetProgressMessageDisplayState(false);
    }

    function SaveDelimiterStateIfDirty() {
        if (displayDelimiterSection == false) {
            return;
        }

        var existingFieldDelimiter = WizardGetProperty("FieldDelimiter");
        var existingDataDelimiter = WizardGetProperty("DataDelimiter");
        var existingIsFirstRowHeader = WizardGetProperty("IsFirstRowHeader");
        var dataDelimiterValue = Mscrm.FormControlInputBehavior.GetBehavior("dataDelimiter").get_dataValue();
        if (IsNull(existingFieldDelimiter) ||
            (existingFieldDelimiter != Mscrm.FormControlInputBehavior.GetBehavior("fieldDelimiter").get_dataValue())) {
            WizardSetProperty("FieldDelimiter",
                Mscrm.FormControlInputBehavior.GetBehavior("fieldDelimiter").get_dataValue());
            isDelimiterDirty = true;
        }

        if (IsNull(existingDataDelimiter) || (existingDataDelimiter != dataDelimiterValue)) {
            WizardSetProperty("DataDelimiter", dataDelimiterValue);
            isDelimiterDirty = true;
        }

        var firstRowIsHeaders = $get("firstRowIsHeaders");
        if (IsNull(existingIsFirstRowHeader) || (existingIsFirstRowHeader != $get("firstRowIsHeaders").checked)) {
            WizardSetProperty("IsFirstRowHeader", $get("firstRowIsHeaders").checked);
            isDelimiterDirty = true;
        }

        if (isDelimiterDirty == true)
            WizardSetProperty("UploadPreviewPageWSError", true);
    }

    function ToggleDelimiterSection() {
        var delimiterDisplayStyle = "none";
        if ($get("delimiterSettings").style.display == "none") {
            delimiterDisplayStyle = "block";
            $get("sectionToggleArrowImg").src = "/_imgs/tab_section_down.png";
        } else {
            $get("sectionToggleArrowImg").src = "/_imgs/tab_section_right.png";
        }
        $get("delimiterSettings").style.display = delimiterDisplayStyle;
    }

    function OnCancelClicked() {
        cancelClicked = true;
        WizardNavigate(_WizardNavigateEnum.CANCEL);
    }

    Sys.Application.add_load(PageOnLoad);

    function PageOnLoad() {
        var cancelBtn = document.getElementById("buttonCancel");
        cancelBtn.onclick = OnCancelClicked;

        isDelimiterDirty = false;
        if (displayDelimiterSection == true) {
            $get("delimiterSection").style.display = "block";
        } else {
            return;
        }

        var fieldDelimiterValue = WizardGetProperty("FieldDelimiter");
        var dataDelimiterValue = WizardGetProperty("DataDelimiter");
        var isFirstRowHeaderValue = WizardGetProperty("IsFirstRowHeader");
        var dataDelimiterControl = Mscrm.FormControlInputBehavior.GetBehavior("dataDelimiter");
        if (!IsNull(fieldDelimiterValue)) {
            Mscrm.FormControlInputBehavior.GetBehavior("fieldDelimiter").set_dataValue(fieldDelimiterValue);
        }
        if (!IsNull(dataDelimiterValue)) {
            dataDelimiterControl.set_dataValue(dataDelimiterValue);
        }
        if (!IsNull(isFirstRowHeaderValue)) {
            $get("firstRowIsHeaders").checked = isFirstRowHeaderValue;
        }

        if (!WantToSkip()) {
            attachWindowOnUnload(OnWizardUnload, parent.window);
            attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
        }
    }


</script>
</head>
<body>
<frm:wizardform id="crmForm" runat="server">
    <div id="mainBody">
        <loc:Text ResourceId="ImportWizard.UploadPreviewPage.PreviewSectionHeading" runat="server"/>
        <br/>
        <br/>
        <div id="infoBalloon" class="mscrm-iw-InfoBarBlue">
            <img alt='' class="mscrm-iw-InfoBarBalloon" src='/_imgs/importwizardinfo.gif'>&nbsp;&nbsp;<span id="infoBalloonText" class="mscrm-iw-InfoBarText" runat="server"></span>
        </div>
        <br/>
        <div class="mscrm-iw-BorderedDivWhiteBackground">
            <table cellpadding="0" cellspacing="0" width="100%">
                <colgroup>
                    <col width="50%"/>
                    <col width="50%"/>
                </colgroup>
                <tr class="mscrm-iw-Table-HeaderRow">
                    <td class="mscrm-iw-Table-Col1" tabindex=0>
                        <nobr>
                            <loc:Text ResourceId="ImportWizard.UploadPreviewPage.PreviewTable.Column2Header" runat="server"/>
                        </nobr>
                    </td>
                    <td class="mscrm-iw-Table-Col2" tabindex=0>
                        <nobr>
                            <loc:Text ResourceId="ImportWizard.UploadPreviewPage.PreviewTable.Column3Header" runat="server"/>
                        </nobr>
                    </td>
                </tr>
            </table>
            <div class="mscrm-iw-UploadPreviewPage-DataTable">
                <table id="filePreviewTable" class="mscrm-iw-TableGeneric" cellpadding="0" cellspacing="0" runat="server">
                    <colgroup>
                        <col width="50%"/>
                        <col width="50%"/>
                    </colgroup>
                </table>
            </div>
        </div>
        <br/>

        <div id="delimiterSection" style="display: none;">
            <table id="delimiterSettingsHeaderTable" class="mscrm-iw-PageWidth" cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                    <td valign="bottom">
                        <a class="mscrm-iw-Anchor" href="javascript:ToggleDelimiterSection();">
                            <img id="sectionToggleArrowImg" src="/_imgs/tab_section_right.png"/>
                        </a>
                    </td>
                    <td width="100%">
                        <a id="viewSettings" href="javascript:ToggleDelimiterSection();" class="ms-crm-InlineTabHeaderText">
                            <nobr>
                                <loc:Text ResourceId="ImportWizard.UploadPreviewPage.DelimiterSectionHeading" runat="server"/>
                            </nobr>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <img alt="Section Seperator" class="mscrm-iw-PageWidth" src="/_imgs/importwizard_blueseperator.gif"/>
            <div id="delimiterSettings" style="display: none; width: 75%">
                <span class="mscrm-iw-PageWidth">
                    <loc:Text ResourceId="ImportWizard.UploadPreviewPage.DelimiterSectionDescription" runat="server"/>
                </span>
                <br/>
                <br/>
                <div class="mscrm-iw-BorderedDivWhiteBackground" style="width: 100%">
                    <table class="mscrm-iw-TableGeneric">
                        <colgroup>
                            <col width="30%"/>
                            <col width="45%"/>
                            <col/>
                        </colgroup>
                        <tr>
                            <td>
                                <label for="fieldDelimiter">
                                    <loc:Text ResourceId="ImportWizard.UploadPreviewPage.FirstDelimiterHeading" runat="server"/>
                                </label>
                            </td>
                            <td>
                                <cui:Select id="fieldDelimiter" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="dataDelimiter"><loc:Text ResourceId="ImportWizard.UploadPreviewPage.SecondDelimiterHeading" runat="server"/>
                            </td>
                            <td>
                                <cui:Select id="dataDelimiter" runat="server"/></label>
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <input id="firstRowIsHeaders" type="checkbox" checked="checked" style="width: auto"/>
                    <label for="firstRowIsHeaders">
                        <loc:Text ResourceId="ImportWizard.UploadPreviewPage.CheckboxDescription" runat="server"/>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div id="progressDiv" class="mscrm-iw-ProgressDiv">
        <table class="mscrm-iw-ProgressTable">
            <tr>
                <td valign='middle' align='center'>
                    <img alt='' src='/_imgs/AdvFind/progress.gif'/>
                    <br/>
                    <label id="progressMessage">
                        <loc:Text ResourceId="ImportWizard.UploadPreviewPage.ProgressMessage" runat="server"/>
                    </label>
                </td>
            </tr>
        </table>
    </div>
</frm:wizardform>
</body>
</html>