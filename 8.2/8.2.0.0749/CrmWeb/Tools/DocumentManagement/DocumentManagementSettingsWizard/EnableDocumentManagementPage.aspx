<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.EnableDocumentManagementPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        .ms-crm-Validation-Progress {
            height: 100%;
            width: 100%;
            background-color: #ffffff;
            top: 0px;
            bottom: 0px
        }
    </style>

    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        function selectAllEntities() {
            var entitySelectionTable = $get("entitySelectionTable");
            var checkAll = $get("checkAll");
            for (i = 0; i < entitySelectionTable.rows.length; i++) {
                var chkBox = XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(entitySelectionTable.rows[i]));
                chkBox.checked = checkAll.checked;
            }
            DOCM_ENTITY_COUNT_SELECTED = checkAll.checked ? ENTITY_COUNT : 0;
        }

        function onEntityCheckBoxClick(domEvent) {
            var chkBox = domEvent.target;
            var chkAll = $get("checkAll");

            if (chkBox.checked)
                DOCM_ENTITY_COUNT_SELECTED++;
            else
                DOCM_ENTITY_COUNT_SELECTED--;

            if (DOCM_ENTITY_COUNT_SELECTED == ENTITY_COUNT) {
                chkAll.checked = true;
            }
        }

        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri
                .create("/Tools/DocumentManagement/DocumentManagementSettingsWizard/SettingsFinalize.aspx");
            return new NextPageDefinition(oUrl, Mscrm.EnableDocumentManagementPageHelper.getWizardDataToPost());
        }


        function moveNext() {
            if (Mscrm.EnableDocumentManagementPageHelper.savePageProperties(ENTITY_COUNT)) {
                var siteUrl = WizardGetProperty("DefaultSiteUrl");
                if (!isNullOrEmptyString(siteUrl)) {
                    Mscrm.EnableDocumentManagementPageHelper.validateSiteURL();
                } else {
                    WizardSetProperty("ValidateResult", Mscrm.SPSiteValidateResult.noURLEntered);
                    WizardNavigate(_WizardNavigateEnum.NEXT);
                }
            }

        }

        function OnUserCancel() {
            WizardNavigate(_WizardNavigateEnum.CANCEL);
        }

        function pageLoad() {
            var entityTable = $get("entitySelectionTable");

            if (Mscrm.Utilities.isIE7()) {
                entityTable.style.width = "99.5%";
            } else {
                entityTable.style.width = "100%";
            }

            var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
            $get('buttonCancel').onclick = OnUserCancel;
            Mscrm.EnableDocumentManagementPageHelper.initializeControls(ENTITY_COUNT);
            $addHandler(txtSiteCollectionUrl, 'blur', OnSiteUrlTextBoxOnBlur);
            if (isNullOrEmptyString(txtSiteCollectionUrl.value)) {
                enableGrayTextOnSiteUrlTextBox();
            }

            var selectedEntitiesCount = 0;
            for (i = 0; i < entityTable.rows.length; i++) {
                var chkBox = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(entityTable.rows[i]));
                if (chkBox.checked) {
                    selectedEntitiesCount++;
                }
            }

            if (selectedEntitiesCount == ENTITY_COUNT) {
                var chkAll = $get("checkAll");
                chkAll.checked = true;
            }
        }

        Sys.Application.add_load(pageLoad);
        Sys.Application.add_unload(pageUnload);

        var bGrayTextOn = false;
        var oldFontStyle;
        var oldColor;
        var allowHTTPSites = <%= allowHTTPSites.ToString().ToLower() %>;

        function enableGrayTextOnSiteUrlTextBox() {
            var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
            bGrayTextOn = true;
            oldFontStyle = txtSiteCollectionUrl.style.fontStyle;
            oldColor = txtSiteCollectionUrl.style.color;
            txtSiteCollectionUrl.value = LOCID_DOCM_SITEURL_GRAYTEXT;
            txtSiteCollectionUrl.style.fontStyle = "italic";
            txtSiteCollectionUrl.style.color = "Gray";
            $addHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
        }

        function disableGrayTextOnSiteUrlTextBox() {
            var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
            bGrayTextOn = false;
            txtSiteCollectionUrl.value = "";
            txtSiteCollectionUrl.style.fontStyle = oldFontStyle;
            txtSiteCollectionUrl.style.color = oldColor;
            $removeHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
        }

        function OnSiteUrlTextBoxFocus() {
            disableGrayTextOnSiteUrlTextBox();
        }

        function OnSiteUrlTextBoxOnBlur() {
            if (isNullOrEmptyString($get("txtSiteCollectionUrl").value)) {
                enableGrayTextOnSiteUrlTextBox();
            }
        }

        function pageUnload() {
            var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
            try {
                $removeHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
                $removeHandler(txtSiteCollectionUrl, 'blur', OnSiteUrlTextBoxOnBlur);
            } catch (e) {
            }
        }
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">

    <table id="entityTable" width="100%" cellpadding=1 cellspacing=1>
        <tr>
            <td width="100%">
                <label style="font-weight: bold" tabindex="0">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.EntityTable.Title" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td width="100%">
                <label tabindex="0">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.EntityTable.Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
                <br/>

                <table class="mscrm-docmgmt-TableEntities" border="1" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="mscrm-docmgmt-HeaderColumn1">
                            <ui:CheckBox id="checkAll" onclick="selectAllEntities();" runat="server"/>
                        </td>
                        <td class="mscrm-docmgmt-HeaderColumn2">
                            <nobr>
                                <loc:Text ResourceId="Object_Plural_Entity" runat="server"/>
                            </nobr>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" height="100%">
                            <div class="mscrm-docmgmt-OverflowDiv">
                                <table id="entitySelectionTable" class="mscrm-docmgmt-TableGeneric" cellpadding="0" cellspacing="0" style="width: 100%" runat="server">
                                </table>
                            </div>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
    <table id="siteUrlTable" width="100%" cellpadding="1" cellspacing="1">
        <tr>
            <td width="100%">
                <br/><label style="font-weight: bold" id="siteUrlTitle" tabindex="0" runat="server">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.SiteCollectionUrl.Title" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td width="100%">
                <label id="siteUrlDescription" tabindex="0" runat="server">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.SiteCollectionUrl.Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
                <br/>
                <table width="100%" style="table-layout: fixed;" id=siteUrlTextTable>
                    <tr>
                        <td width="10%" id="siteUrlLabelCell" runat="server">
                            <label for="txtSiteCollectionUrl" id="siteUrlLabel" runat="server">
                                <b>
                                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.SiteCollectionUrl.Label" runat="server"/>
                                </b>
                            </label>
                        </td>
                        <td width="90%">
                            <ui:TextBox class="mscrm-docmgmt-SiteUrl" id="txtSiteCollectionUrl" MaxLength="255" runat="Server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <div id="showProgress" class="ms-crm-Validation-Progress" style="display: none;">
        <div id="progressInner" style="height: 100%; width: 100%">
            <div style="top: 45%; text-align: center; position: relative;">
                <img alt="" src="/_imgs/AdvFind/progress.gif"/>
                <br/>
                <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.Validating" runat="server"/>
            </div>
        </div>
    </div>
</frm:WizardForm>
</body>
</html>