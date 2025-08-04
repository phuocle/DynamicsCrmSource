<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.AddOn.AddLicenseCompletePage"
EnableViewState="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="javascript" type="text/javascript">


        function licenseCompletePage_onload() {
            Initialize();
        }


        Sys.Application.add_load(licenseCompletePage_onload);

        function Initialize() {

            XUI.Html.SetText($get('TransactionInfoDescription'), PAGE_DESCRIPTION);
            XUI.Html.SetText($get('LicensesAdded'), LICENSE_CHANGE);
            XUI.Html.SetText($get('NewLicenseCount'), UPDATED_LICENSE_COUNT_USAGE_INFO);
            FormatToCurrencyAsync('ChangeInMonthlyCharge', CHANGE_IN_MONTHLY_CHARGE);
            XUI.Html.SetText($get('CurrentMonthlyChargesUserLicensesQuantity'),
                CURRENT_MONTHLY_CHARGES_USER_LICENSES_QUANTITY);
            FormatToCurrencyAsync('CurrentMonthlyChargesUserLicensesPrice',
                CURRENT_MONTHLY_CHARGES_USER_LICENSES_PRICE);
            FormatToCurrencyAsync('CurrentMonthlyChargesUserLicensesUnitPrice',
                CURRENT_MONTHLY_CHARGES_USER_LICENSES_UNIT_PRICE);
            XUI.Html.SetText($get('CurrentMonthlyChargesStorageQuantity'), CURRENT_MONTHLY_CHARGES_STORAGE_QUANTITY);
            FormatToCurrencyAsync('CurrentMonthlyChargesStoragePrice', CURRENT_MONTHLY_CHARGES_STORAGE_PRICE);

            if (STORAGE_CHARGE_ENABLED) {
                FormatToCurrencyAsync('CurrentMonthlyChargesStorageUnitPrice',
                    CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE);
                $get('CurrentMonthlyChargesStorageUnitPriceBeforePromotionDiv').style.display = "none";
                $get("StoragePromotionDiv").style.display = "none";
            } else {
                FormatToCurrencyAsync('CurrentMonthlyChargesStorageUnitPriceBeforePromotion',
                    CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE);
                FormatToCurrencyAsync('CurrentMonthlyChargesStorageUnitPrice', 0);
                XUI.Html.SetText($get('StoragePromotion'), STORAGE_PROMOTION_MESSAGE);
            }

            XUI.Html.SetText($get('AdditionalStorageInfoText'), ADDITIONAL_STORAGE_INFO_TEXT);
            $get('BillingSummaryTable').setAttribute('summary',
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("AddOnWizard.LicenseCompletePage.UpdatedBillingSummaryHeader")) %>);
            document.body.style.cursor = 'default';
        }

        function setFocus() {
            $get('buttonCancel').focus();
        }
    </script>

</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <b>
        <loc:Text ResourceId="AddOnWizard.LicenseCompletePage.TransactionInfoHeader" runat="server"/>
    </b>

    <div class="ms-crm-Syshealth-Spacer"></div>
    <label id="TransactionInfoDescription">
    </label>
    <br/>
    <br/>
    <b>
        <loc:Text ResourceId="AddOnWizard.LicenseCompletePage.SummaryInfoHeader" runat="server"/>
    </b>

    <div class="ms-crm-Syshealth-Spacer"></div>

    <div class="ms-crm-LeftSideBox">
        <loc:Text ResourceId="AddOnWizard.LicenseCompletePage.LicensesAddedDescription" runat="server"/>
    </div>
    <div class="ms-crm-LeftSideBox">
        <label id="LicensesAdded">
        </label>
    </div>
    <br/>

    <div class="ms-crm-LeftSideBox">
        <loc:Text ResourceId="AddOnWizard.LicenseCompletePage.NewLicenseCountDescription" runat="server"/>
    </div>
    <div class="ms-crm-LeftSideBox">
        <label id="NewLicenseCount">
        </label>
    </div>
    <br/>

    <div class="ms-crm-LeftSideBox">
        <loc:Text ResourceId="AddOnWizard.LicenseCompletePage.ChangeInMonthlyChargeDescription" runat="server"/>
    </div>
    <div class="ms-crm-LeftSideBox">
        <label id="ChangeInMonthlyCharge">
        </label>
    </div>
    <br/>
    <br/>

    <b>
        <loc:Text ResourceId="AddOnWizard.LicenseCompletePage.UpdatedBillingSummaryHeader"
                  runat="server"/>
    </b>
    <table class="ms-crm-updated-billing-summary" id="BillingSummaryTable">
        <tr>
            <td colspan="4">
                <img alt="" src="/_imgs/tools/hr.gif" align="middle" height="1" width="100%"/>
            </td>
        </tr>
        <tr class="ms-crm-summary-sub-header">
            <th class="ms-crm-LicenseToAddSubHeaderUnitPrice">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderUnitPrice"
                          runat="server"/>
            </th>
            <th class="ms-crm-LicenseToAddSubHeaderDescription">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderDescription"
                          runat="server"/>
            </th>
            <th class="ms-crm-LicenseToAddSubHeaderQuantity">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderQuantity"
                          runat="server"/>
            </th>
            <th class="ms-crm-LicenseToAddSubHeaderPrice">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderPrice"
                          runat="server"/>
            </th>
        </tr>
        <tr>
            <td colspan="4">
                <img alt="" src="/_imgs/tools/hr.gif" align="middle" height="1" width="100%"/>
            </td>
        </tr>
        <tr class="ms-crm-summary-data-row">
            <td class="ms-crm-SummaryUnitPrice">
                <label id="CurrentMonthlyChargesUserLicensesUnitPrice">
                </label>
            </td>
            <td>
                <span class="ms-crm-left-padding">
                    <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesUserLicensesText"
                              runat="server"/>
                </span>
                <div class="ms-crm-left-padding-secondline">
                    <span class="ms-crm-gray-text-left-description">
                        <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesUserLicensesInfoText"
                                  runat="server"/>
                    </span>
                </div>
            </td>
            <td class="ms-crm-align-center">
                <label id="CurrentMonthlyChargesUserLicensesQuantity">
                </label>
            </td>
            <td class="ms-crm-summary-quantity">
                <label id="CurrentMonthlyChargesUserLicensesPrice">
                </label>
            </td>
        </tr>
        <tr class="ms-crm-summary-data-row">
            <td class="ms-crm-SummaryUnitPrice">
                <div id="CurrentMonthlyChargesStorageUnitPriceBeforePromotionDiv">
                    <label id="CurrentMonthlyChargesStorageUnitPriceBeforePromotion" class="ms-crm-strikethrough"></label>
                </div>
                <label id="CurrentMonthlyChargesStorageUnitPrice">
                </label>
            </td>
            <td>
                <span class="ms-crm-left-padding">
                    <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesAdditionalStorageText"
                              runat="server"/>
                </span>
                <div class="ms-crm-left-padding-secondline">
                    <span class="ms-crm-gray-text-left-description">
                        <label id="AdditionalStorageInfoText"></label>
                    </span>
                </div>
            </td>
            <td class="ms-crm-align-center">
                <label id="CurrentMonthlyChargesStorageQuantity">
                </label>
            </td>
            <td class="ms-crm-summary-quantity">
                <label id="CurrentMonthlyChargesStoragePrice">
                </label>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <img alt="" src="/_imgs/tools/hr.gif" align="middle" height="1" width="100%" style="margin-bottom: 10px;"/>
            </td>
        </tr>
    </table>
    <asp:Table ID="CurrentChargesTableSummary" CssClass="ms-crm-addon-page-footer" runat="server"></asp:Table>
    <br/>
    <div class="ms-crm-storagearea ms-crm-gradientbox" id="StoragePromotionDiv">
        <label id="StoragePromotion"/>
    </div>
</frm:WizardForm>
</body>
</html>