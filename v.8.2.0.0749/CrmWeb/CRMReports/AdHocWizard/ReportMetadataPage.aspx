<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.ReportMetadataPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="javascript" type="text/javascript">


    var _oFetchBuilder = null;
    var primaryEntityComponent;
    var secondaryEntityComponent;
    var primaryEntityBehavior;
    var secondaryEntityBehavior;
    var reportNameControl = null;
    var notificationsControl = null;

    Sys.Application.add_load(reportMetadataPage_onload);


    function GetNextPageDefinition() {
        return new NextPageDefinition(getNextPageUrl());
    }


    function getNextPageUrl() {


        var sExistingReportId = (reportWizardHasXmlProperty("ColumnXml")) ? WizardGetProperty("ReportId") : null;


        var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/FilterDataPage.aspx");


        oUrl.get_query()["primary"] = _oFetchBuilder.GetPrimaryEntityName();


        var sSecondaryEntity = _oFetchBuilder.GetSecondaryEntityName();
        if (!IsNull(sSecondaryEntity)) {
            oUrl.get_query()["secondary"] = sSecondaryEntity;
        }


        if (!IsNull(sExistingReportId)) {
            oUrl.get_query()["id"] = sExistingReportId;
        }

        return oUrl;
    }


    function initializeEntityControls() {
        var sPrimaryEntityName = _oFetchBuilder.GetPrimaryEntityName();

        primaryEntityComponent.set_dataValue(sPrimaryEntityName);
        if (primaryEntityComponent.get_dataValue() != sPrimaryEntityName) {
            notificationsControl.AddNotification("entityUnavailable",
                Mscrm.Severity.SEVERITYWARNING,
                "",
                LOCID_INVALID_PRIMARY_ENTITY);
        } else {
            updateSecondaryEntity();

            var sSecondaryEntityString = _oFetchBuilder.GetSecondaryEntityString();

            secondaryEntityComponent.set_dataValue(sSecondaryEntityString);
            if (secondaryEntityComponent.get_dataValue() != sSecondaryEntityString) {
                notificationsControl.AddNotification("entityUnavailable",
                    Mscrm.Severity.SEVERITYWARNING,
                    "",
                    LOCID_INVALID_SECONDARY_ENTITY);
            }
        }
    }


    function initializePage() {

        if (WizardHasProperty("ReportName")) {
            reportNameControl.set_dataValue(WizardGetProperty("ReportName"));
        } else {

            var iWizardMode = WizardGetProperty("WizardMode");

            if (!IsNull(iWizardMode) &&
                iWizardMode == EDIT_MODE_CREATE &&
                !IsNull(reportNameControl.get_dataValue()) &&
                reportNameControl.get_dataValue().length > 0) {
                var reportNameFormatString = Mscrm.ReportUtil.getReportCopySuffix(LOCID_REPORT_NAME_FORMAT);
                reportNameControl
                    .set_dataValue(formatString(reportNameFormatString, reportNameControl.get_dataValue()));
            }
        }


        if (WizardHasProperty("ReportDescription")) {
            Mscrm.FormControlInputBehavior.GetBehavior("reportDescription")
                .set_dataValue(WizardGetProperty("ReportDescription"));
        }

        primaryEntityBehavior = Mscrm.CrmUIBehavior
            .getBehaviorByName(primaryEntityComponent.get_element(), "EntitySelect");
        secondaryEntityBehavior = Mscrm.CrmUIBehavior
            .getBehaviorByName(secondaryEntityComponent.get_element(), "SetOptionsSelect");


        primaryEntityBehavior.set_cacheManager(new CacheManager());


        var oFetchXml;
        if (Mscrm.Utilities.isEdge()) {
            oFetchXml = getResultNode(WizardGetProperty("FetchXml"));
        } else {
            oFetchXml = WizardGetProperty("FetchXml");
        }
        _oFetchBuilder = new FetchBuilder();
        _oFetchBuilder.LoadXml(oFetchXml);
        if (!IsNull(oFetchXml)) {
            initializeEntityControls();
        }


        updateNextButton();
    }


    function loadWizardXml() {


        var sWizardXml = $get('wizardXml').value;
        if (!reportWizardHasXmlProperty("FetchXml") && !IsNull(sWizardXml) && sWizardXml.length > 0) {
            var oXmlDoc = XUI.Xml.LoadXml(sWizardXml);
            var oRootNode = XUI.Xml.SelectSingleNode(oXmlDoc, "/CustomReport", null);


            loadWizardXmlNode(oRootNode, "Query/fetch", "FetchXml");
            loadWizardXmlNode(oRootNode, "Groupings", "GroupingXml");
            loadWizardXmlNode(oRootNode, "Columns", "ColumnXml");
            loadWizardXmlNode(oRootNode, "TableLayout", "TableLayoutXml");
            loadWizardXmlNode(oRootNode, "ChartLayout", "ChartLayoutXml");
        }
    }


    function loadWizardXmlNode(oRootNode, sNodeXPath, sPropertyName) {
        var oXmlNode = XUI.Xml.SelectSingleNode(oRootNode, sNodeXPath, null);
        if (!IsNull(oXmlNode)) {
            WizardSetProperty(sPropertyName, XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(oXmlNode)));
        }
    }


    function moveNext() {

        if (Mscrm.ReportUtil.isValidReportName(reportNameControl.get_dataValue())) {
            WizardSetProperty("ReportName", reportNameControl.get_dataValue());
        } else {
            alert(LOCID_INVALID_REPORT_NAME);
            return;
        }


        WizardSetProperty("ReportDescription",
            Trim(Mscrm.FormControlInputBehavior.GetBehavior("reportDescription").get_value()));


        var sPrimaryEntityName = _oFetchBuilder.GetPrimaryEntityName();
        var sSecondaryEntityString = _oFetchBuilder.GetSecondaryEntityString();


        if ((!IsNull(sPrimaryEntityName) && sPrimaryEntityName != primaryEntityComponent.get_dataValue()) ||
            (!IsNull(sSecondaryEntityString) && sSecondaryEntityString != secondaryEntityComponent.get_dataValue())) {
            if (confirm(LOCID_ENTITY_CHANGE)) {

                WizardSetProperty("FetchXml", null);
                WizardSetProperty("DefaultFilter", null);
                WizardSetProperty("GroupingXml", null);
                WizardSetProperty("ColumnXml", null);
                WizardSetProperty("TableLayoutXml", null);
                WizardSetProperty("ChartLayoutXml", null);
                WizardSetProperty("DefaultSelectedQuery", null);
            } else {

                initializeEntityControls();

                return;
            }
        }


        if (Mscrm.Utilities.isEdge()) {
            _oFetchBuilder.LoadXml(getResultNode(WizardGetProperty("FetchXml")));
        } else {
            _oFetchBuilder.LoadXml(WizardGetProperty("FetchXml"));
        }


        _oFetchBuilder.SetPrimaryEntity(primaryEntityComponent.get_dataValue());


        _oFetchBuilder.SetSecondaryEntity(secondaryEntityComponent.get_dataValue());


        WizardSetProperty("FetchXml", _oFetchBuilder.GetXml());

        WizardNavigate(_WizardNavigateEnum.NEXT);
    }

    function reportMetadataPage_onload() {
        primaryEntityComponent = Mscrm.FormControlInputBehavior.GetBehavior('primaryEntity');
        secondaryEntityComponent = Mscrm.FormControlInputBehavior.GetBehavior('secondaryEntity');
        reportNameControl = Mscrm.FormControlInputBehavior.GetBehavior('reportName');
        notificationsControl = Mscrm.FormControlInputBehavior.GetBehavior("notifications");


        $addHandler(primaryEntityComponent.get_element(), 'change', updateSecondaryEntity);


        $addHandler(reportNameControl.get_element(), 'change', updateNextButton);
        $addHandler(primaryEntityComponent.get_element(), 'change', updateNextButton);


        loadWizardXml();


        initializePage();
    }


    function updateNextButton() {
        var bEnableNextButton = !IsNull(reportNameControl.get_dataValue()) &&
            !IsNull(primaryEntityComponent.get_dataValue());
        WizardSetButtonEnabled(bEnableNextButton, _WizardButtonsEnum.NEXTBUTTON);
    }


    function updateSecondaryEntity() {

        secondaryEntityComponent.set_disabled(true);


        var sOptions = primaryEntityBehavior.getLinkedEntityOptions();
        var sNewInnerHtml = IsNull(sOptions) ? "" : sOptions;


        secondaryEntityBehavior.setOptions(sNewInnerHtml);


        secondaryEntityComponent = Mscrm.FormControlInputBehavior.GetBehavior('secondaryEntity');


        secondaryEntityComponent.set_disabled(IsNull(sOptions));
    }


</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <ui:Hidden ID="wizardXml" runat="server"/>
    <table cellpadding="0" cellspacing="5" width="100%" style="padding: 5px; table-layout: fixed;">
        <col width="220"/>
        <col/>
        <tr>
            <td colspan="2">
                <cnt:AppNotifications id="notifications" runat="server"/>
            </td>
        </tr>
        <tr style="padding-bottom: 10px;">
            <td colspan="2" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
                <loc:Text ResourceId="CustomReporting.AdHocWizard.ReportMetadataPage.NameDescriptionSection" runat="server"/>
            </td>
        </tr>
        <tr>
            <frm:FormCell runat="server" ID="reportNameCell" ShowLabel="True">
                <sdk:TextBoxControl id="reportName" runat="server"/>
            </frm:FormCell>
        </tr>
        <tr>
            <frm:FormCell runat="server" ID="reportDescriptionCell" ShowLabel="True">
                <sdk:TextAreaControl id="reportDescription" height="45px" runat="server"/>
            </frm:FormCell>
        </tr>
        <tr style="padding-top: 20px;">
            <td colspan="2" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
                <loc:Text ResourceId="CustomReporting.AdHocWizard.ReportMetadataPage.EntitySection" runat="server"/>
            </td>
        </tr>
        <tr style="padding-bottom: 10px;">
            <td colspan="2">
                <loc:Text ResourceId="CustomReporting.AdHocWizard.ReportMetadataPage.EntitySectionDescription" runat="server"/>
            </td>
        </tr>
        <tr>
            <frm:FormCell runat="server" id="primaryEntityCell" ShowLabel="True" RequiredLevel="Required">
                <ui:Select id="primaryEntity" runat="server"/>
            </frm:FormCell>
        </tr>
        <tr>
            <frm:FormCell runat="server" id="secondaryEntityCell" ShowLabel="True">
                <ui:Select id="secondaryEntity" Disabled="true" runat="server"/>
            </frm:FormCell>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>