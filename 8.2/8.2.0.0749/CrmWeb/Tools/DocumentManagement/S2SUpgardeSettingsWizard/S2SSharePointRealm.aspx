<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.S2SSharePointRealm" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="javascript" type="text/javascript">
    Sys.Application.add_load(windowOnLoad);
    Sys.Application.add_unload(pageUnload);

    var bGrayTextOn = {};
    var oldFontStyle = {};
    var oldColor = {};
    var greytextvalue = {};
    greytextvalue["txtsharepointrealmid"] = LOCID_DOCM_SPREALM_GRAYTEXT;
    greytextvalue["txtsharepointTenantid"] = LOCID_DOCM_SPTENANT_GRAYTEXT;

    var isCRMOnline = <%= isOnline ? "true" : "false" %>;
    var allowHTTPSites = <%= allowHTTPSites ? "true" : "false" %>;

    var isSiteEmpty = true;

    function moveBack() {
        WizardNavigate(_WizardNavigateEnum.BACK);
    }

    function GetNextPageDefinition() {
        var oUrl = Mscrm.CrmUri.create("/Tools/DocumentManagement/S2SUpgardeSettingsWizard/S2SValidateSites.aspx");
        return new NextPageDefinition(oUrl);
    }

    function moveNext() {
        if (!isTextUrlVisible() || Mscrm.S2SUpgradePageHelper.saveSharePointSiteUrl()) {
            if (!isCRMOnline && (!WizardGetProperty("isSharePointOnline"))) {
                WizardSetProperty("SharePointRealmId", $get("txtsharepointrealmid").value);
                Mscrm.S2SUpgradePageHelper
                    .updateGlobalSharePointSettings($get("txtsharepointrealmid").value, false, false);
            } else if (!isCRMOnline && (WizardGetProperty("isSharePointOnline"))) {
                WizardSetProperty("SharePointTenantId", $get("txtsharepointTenantid").value);
                Mscrm.S2SUpgradePageHelper
                    .updateGlobalSharePointSettings($get("txtsharepointTenantid").value, true, true);
            } else {
                Mscrm.S2SUpgradePageHelper
                    .updateGlobalSharePointSettings("", WizardGetProperty("isSharePointOnline"), true);
            }
        }
    }

    function OnUserCancel() {
        Mscrm.S2SUpgradePageHelper.logMetricsforWizard(Mscrm.S2SUpgradePageHelper.TelemetryLogEventWizardCancel,
            "S2SSharePointRealm");
        WizardNavigate(_WizardNavigateEnum.CANCEL);
    }

    function OnSiteUrlTextBoxFocus() {
        if (isSiteEmpty) {
            disableGrayTextOn("txtSiteCollectionUrl");
        }
    }

    function OnSiteUrlTextBoxOnBlur() {
        if (isNullOrEmptyString($get("txtSiteCollectionUrl").value)) {
            isSiteEmpty = true;
            enableGrayTextOn("txtSiteCollectionUrl", LOCID_DOCM_SITEURL_GRAYTEXT);
        } else {
            isSiteEmpty = false;
        }
        enabledisablenext();
    }

    function OnSharePointTextBoxFocus(domElementId) {
        if (window.bGrayTextOn[domElementId]) {
            disableGrayTextOn(domElementId);
        }
    }

    function OnSharePointTextBoxOnBlur(domElementId) {
        if (isNullOrEmptyString($get(domElementId).value)) {
            enableGrayTextOn(domElementId, greytextvalue[domElementId]);
        }
        enabledisablenext();
    }

    function disableGrayTextOn(textBoxDomid) {
        var textBox = $get(textBoxDomid);
        bGrayTextOn[textBoxDomid] = false;
        textBox.value = "";
        textBox.style.fontStyle = oldFontStyle[textBoxDomid];
        textBox.style.color = oldColor[textBoxDomid];
    }

    function enableGrayTextOn(textBoxDomid, graytext) {
        var textBox = $get(textBoxDomid);
        bGrayTextOn[textBoxDomid] = true;
        oldFontStyle[textBoxDomid] = textBox.style.fontStyle;
        oldColor[textBoxDomid] = textBox.style.color;
        textBox.value = graytext;
        textBox.style.fontStyle = "italic";
        textBox.style.color = "Gray";
    }

    function pageUnload() {
        var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
        $removeHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
        $removeHandler(txtSiteCollectionUrl, 'blur', OnSiteUrlTextBoxFocus);
    }

    function windowOnLoad() {
        Mscrm.S2SUpgradePageHelper.renderStageControl(Mscrm.S2SIntegrationStage.prepareSites)
        $get('formcontent').style.display = "none";
        $get('showProgress').style.display = "";
        $get('buttonCancel').onclick = OnUserCancel;
        $get('buttonBack').onclick = moveBack;
        $get('buttonNext').disabled = true;

        var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
        if (txtSiteCollectionUrl != null) {
            $addHandler(txtSiteCollectionUrl, 'blur', OnSiteUrlTextBoxOnBlur);
            $addHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
            Mscrm.S2SUpgradePageHelper.initializeControls();
            OnSiteUrlTextBoxOnBlur();
        }

        var txtsharepointrealm = $get("txtsharepointrealmid");
        if (txtsharepointrealm != null) {
            OnSharePointTextBoxOnBlur('txtsharepointrealmid');
        }

        var txtsharepointTenant = $get("txtsharepointTenantid");
        if (txtsharepointTenant != null) {
            OnSharePointTextBoxOnBlur('txtsharepointTenantid');
        }

        Mscrm.S2SUpgradePageHelper.retrieveSites(Mscrm.S2SIntegrationStage.prepareSites);
        Mscrm.S2SUpgradeWizardRerunHelper
            .setDomElementsInWizard(Mscrm.S2SIntegrationStage.prepareSites, WizardGetProperty("isSharePointOnline"));

        if (!isCRMOnline) {
            if (!WizardGetProperty("isSharePointOnline")) {
                $('.CrmopSpop').css({ "display": "inline" });
                $('.CrmopSpop-WithoutInline').css({ "display": "" });

                $get("setupDescription").innerHTML = '<%= descriptionCRMOnPremiseSPOnPremise.ToString() %>';

            } else {
                $('.CrmopSpon').css({ "display": "inline" });
                $('.CrmopSpon-WithoutInline').css({ "display": "" });

                document.getElementById("setupDescription")
                    .innerHTML = '<%= descriptionCRMOnPremiseSPOnline.ToString() %>';

            }
        } else {
            if (!WizardGetProperty("isSharePointOnline")) {
                $('.CrmonSpop').css({ "display": "inline" });

                document.getElementById("setupDescription")
                    .innerHTML = '<%= descriptionCRMOnlineSPOnPremise.ToString() %>';

            } else {
                $('.CrmonSpon').css({ "display": "inline" });

                document.getElementById("txtOneShowURL").style.display = "none";
                document.getElementById("txtOneShowsites").style.display = "none";
            }
        }
        enabledisablenext();
    }

    function setGreyTextOff(domElementId) {
        var textBox = $get(domElementId);
        bGrayTextOn[domElementId] = false;
        textBox.style.fontStyle = oldFontStyle[domElementId];
        textBox.style.color = oldColor[domElementId];
    }

    function isSharepointTextValid() {
        if (isCRMOnline) {
            return true;
        } else {
            if (!WizardGetProperty("isSharePointOnline")) {
                return (!window.bGrayTextOn["txtsharepointrealmid"] &&
                    !isNullOrEmptyString(document.getElementById("txtsharepointrealmid").value));
            } else {
                return (!window.bGrayTextOn["txtsharepointTenantid"] &&
                    !isNullOrEmptyString(document.getElementById("txtsharepointTenantid").value));
            }
        }
    }

    function isTextUrlVisible() {
        var rowCount = document.getElementById("ShowExistingSites").rows.length;
        if (rowCount > 0) {

            return false;
        }
        return true;
    }

    function isSiteUrlValid() {
        if (!isTextUrlVisible()) {
            return true;
        }
        if (!window.bGrayTextOn["txtSiteCollectionUrl"] &&
            !isNullOrEmptyString(document.getElementById("txtSiteCollectionUrl").value)) {
            return true;
        }
        return false;
    }

    function enabledisablenext() {
        $get('buttonNext').disabled = !(isSharepointTextValid() && isSiteUrlValid());
    }

    function openfwdlink() {
        var url = "http://go.microsoft.com/fwlink/?LinkID=517594";
        if ((!isCRMOnline) && (!WizardGetProperty("isSharePointOnline"))) {
            url = "http://go.microsoft.com/fwlink/?LinkID=517597";
        } else if ((!isCRMOnline) && (WizardGetProperty("isSharePointOnline"))) {
            url = "http://go.microsoft.com/fwlink/?LinkID=517596";
        } else if ((isCRMOnline) && (!WizardGetProperty("isSharePointOnline"))) {
            url = "http://go.microsoft.com/fwlink/?LinkID=517595";
        }
        window.open(url);
    }


</script>
</head>
<body>
<frm:wizardform id="crmForm" runat="server">
    <div id="formcontent">
        <div id="S2SIntegrationStageControl" style="width: 100%; margin-bottom: 28px; margin-top: 3px"></div>
        <div id="CrmopSpopHeading" style="display: none;" class="CrmopSpop mscrm-text-SelectedStage mscrm-text-dark">
            <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.CrmopSpopHeading"
                      runat="server"/>
        </div>
        <div id="CrmopSponHeading" class="CrmopSpon mscrm-text-SelectedStage mscrm-text-dark" style="display: none">
            <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.CrmopSponHeading"
                      runat="server"/>
        </div>
        <div id="CrmonSpopHeading" style="display: none;" class="CrmonSpop mscrm-text-SelectedStage mscrm-text-dark">
            <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.CrmonSpopHeading"
                      runat="server"/>
        </div>
        <div id="CrmonSpon" style="display: none;" class="CrmonSpon mscrm-text-SelectedStage mscrm-text-dark">
            <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.CrmonSponHeading"
                      runat="server"/>
        </div>
        <table id="Showsites" style="display: none; margin-top: 12px">
            <tr>
                <td>
                    <span id="txtOneShowsites">
                        <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Number1" runat="server"/>
                    </span>
                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Description20"
                              runat="server"/>
                </td>
            </tr>
            <tr>
                <td class="ms-crm-S2SPadding">
                    <table id="ShowExistingSites" style="margin-top: 10px" class="sharepointSites" runat="server">
                    </table>
                </td>
            </tr>
        </table>
        <table id="ShowURL" style="display: none; margin-top: 12px; width: 100%">
            <tr>
                <td colspan="2">
                    <span id="txtOneShowURL">
                        <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Number1" runat="server"/>
                    </span>
                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.EnterURL" runat="server"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td style="width: 1px; white-space: nowrap" class="ms-crm-S2SPadding">
                    <label for="txtSiteCollectionUrl">
                        <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.URL" runat="server"/>
                    </label>
                </td>
                <td style="padding-left: 22px">
                    <input type="text" class="mscrm-docmgmt-SiteUrl" id="txtSiteCollectionUrl" MaxLength="255" oninput="enabledisablenext();return;" runat="Server"/>
                </td>
            </tr>
        </table>
        <div style="height: 8px">
        </div>
        <div id="configHybridAuth" style="display: none" class="CrmopSpon CrmonSpop mscrm-text-S2Swizard">
            <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Number2" runat="server"/>&nbsp;<loc:Text
                                                                                                                    ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Config1" runat="server"/>
        </div>
        <div id="configServerBasedAuth" class="CrmopSpop mscrm-text-S2Swizard" style="display: none">
            <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Number2" runat="server"/>&nbsp;<loc:Text
                                                                                                                    ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Config2" runat="server"/>
        </div>
        <div class="mscrm-text-S2Swizard ms-crm-S2SPadding" style="display: inline;">
            <p class="ms-crm-S2SPadding" id="setupDescription">
            </p>
        </div>
        <div id="ServerBasedInfo" class="CrmopSpop-WithoutInline" style="display: none;">
            <p class="mscrm-text-S2Swizard ms-crm-S2SPadding" style="margin-top: 0px; margin-bottom: 0px;">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.auth2" runat="server"/>
            </p>
        </div>
        <table id="CrmrealmTable" style="display: none; margin-top: 23px" class="CrmopSpop" width="100%">
            <tr>
                <td class="mscrm-text-S2Swizard ms-crm-S2SPadding">
                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.CRMRealmID"
                              runat="server"/>
                </td>
                <td class="mscrm-text-S2Swizard ms-crm-S2SPadding">
                    <label id="crmRealmIDLabel" runat="server"></label>
                </td>
            </tr>
        </table>
        <div style="height: 18px">
        </div>
        <table id="SharePointRealm" style="display: none; width: 100%" class="CrmopSpop-WithoutInline">
            <tr>
                <td colspan="2">
                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Number3" runat="server"/>
                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.EnterRealmID"
                              runat="server"/>
                </td>
            </tr>
            <tr style="height: 40px">
                <td class="ms-crm-S2SPadding" style="width: 1px; white-space: nowrap">
                    <label for="txtsharepointrealmid">
                        <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.SPRealmID" runat="server"/>
                    </label>
                </td>
                <td style="padding-left: 22px">
                    <input type="text" class="mscrm-docmgmt-SiteUrl" id="txtsharepointrealmid" oninput="enabledisablenext();return;" onfocus="OnSharePointTextBoxFocus('txtsharepointrealmid');return;"
                           onblur="OnSharePointTextBoxOnBlur('txtsharepointrealmid');return;" maxlength="255" runat="Server"/>
                </td>
            </tr>
        </table>
        <table id="SharePointTenant" style="display: none; width: 100%;" class="CrmopSpon-WithoutInline">
            <tr>
                <td colspan="2">
                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.Number3" runat="server"/>
                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.EntertenantID"
                              runat="server"/>
                </td>
            </tr>
            <tr style="height: 40px">
                <td class="ms-crm-S2SPadding" style="width: 1px; white-space: nowrap">
                    <label for="txtsharepointTenantid">
                        <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SSharePointRealm.SPtenantID"
                                  runat="server"/>
                    </label>
                </td>
                <td style="padding-left: 22px">
                    <input type="text" class="mscrm-docmgmt-SiteUrl" id="txtsharepointTenantid" oninput="enabledisablenext();return;" onfocus="OnSharePointTextBoxFocus('txtsharepointTenantid');return;"
                           onblur="OnSharePointTextBoxOnBlur('txtsharepointTenantid');return;" maxlength="255" runat="Server"/>

                </td>
            </tr>
        </table>
    </div>
    <div id="showProgress" class="ms-crm-Validation-Progress">
        <div id="progressInner" style="height: 100%; width: 100%">
            <div style="top: 45%; text-align: center; position: relative;">
                <img alt="" src="/_imgs/AdvFind/progress.gif"/>
                <br/>
                <loc:Text ResourceId="OrgWaiting.Spinner.Alt" runat="server"/>
            </div>
        </div>
    </div>
</frm:wizardform>
</body>
</html>