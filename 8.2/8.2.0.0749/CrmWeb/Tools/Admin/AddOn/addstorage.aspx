<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.AddOn.AddStoragePage"
EnableViewState="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>

<script language="javascript" type="text/javascript">


    function GetNextPageDefinition() {

        var dataToPost = "";
        var sUrl = Mscrm.CrmUri.create("/tools/admin/addon/processing.aspx").toString();
        return new NextPageDefinition(sUrl, dataToPost);
    }


    function moveNext() {
        var PageId = WizardGetProperty("PageId");


        btn = $get('buttonBack');
        btn.disabled = false;


        if (PageId == "PurchasePage") {

            WizardSetProperty("PageId", "ConfirmPage");


            storage = CrmEncodeDecode.CrmXmlEncode($get('NumberOfStorageLicensesToAdd').value);

            txtbox = $get('NumberOfStorageLicensesToAdd');
            txtbox.style.display = "none";
            lblbox = $get('NumberOfStorageLicensesToAddLbl');
            XUI.Html.SetText(lblbox, storage);
            lblbox.style.display = "";

            $get('buttonNext')
                .innerHTML =
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Util.DecorateAccessKey((CurrentResourceManager.GetString("Wizard_Button_Text_Confirm")))) %>;
            $get('buttonNext')
                .value =
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Util.DecorateAccessKey((CurrentResourceManager.GetString("Wizard_Button_Text_Confirm")))) %>;
            $get('buttonNext')
                .accessKey =
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Util.GetAccessKey(CurrentResourceManager.GetString("Wizard_Button_Text_Confirm"))) %>;
            $get('buttonNext')
                .title =
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("Wizard_Button_Tooltip_Confirm")) %>;


            XUI.Html.SetText($get('spanTitle'), PAGE_TITLE_CONFIRM_PAGE);
            XUI.Html.SetText($get('PageDescription'), PAGE_DESCRIPTION_CONFIRM_PAGE);
            $get('CurrentChargesTable').setAttribute('summary',
                CrmEncodeDecode.CrmJavaScriptEncode(PAGE_DESCRIPTION_CONFIRM_PAGE));
            XUI.Html.SetText($get('LicenseToAddTableHeader'),
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("AddOnWizard.StorageLicenseInputPage.LicenseToAddHeaderAfterChange")) %>);
            $get('UserInputTable').setAttribute('summary',
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("AddOnWizard.StorageLicenseInputPage.LicenseToAddHeaderAfterChange")) %>);


            $get('AddonInputRow').className = 'ms-crm-addon-page-table-data-row-grey';


            setStorageLicenseUsageInfoText(STORAGE_LICENSES_TO_ADD_USAGE_INFO_CONFIRM_PAGE,
                (CURRENT_MONTHLY_CHARGES_STORAGE_QUANTITY * 1 + storage * 1 + STORAGE_LICENSES_INCLUDED * 1)
                .toFixed(NUMBER_OF_DIGITS_AFTER_DECIMAL_POINT_FOR_STORAGE),
                (STORAGE_LICENSES_AVAILABLE * 1 + storage * 1)
                .toFixed(NUMBER_OF_DIGITS_AFTER_DECIMAL_POINT_FOR_STORAGE));
        } else if (PageId == "ConfirmPage") {

            WizardSetProperty("ProcessingUrl", "/tools/admin/addon/addstoragecomplete.aspx");
            var postData = CrmEncodeDecode.CrmXmlEncode($get('NumberOfStorageLicensesToAdd').value) +
                ";" +
                CURRENT_MONTHLY_CHARGES_USER_LICENSES_QUANTITY +
                ";" +
                CURRENT_MONTHLY_CHARGES_STORAGE_QUANTITY;
            WizardSetProperty("ProcessingPostData", postData);

            WizardNavigate(_WizardNavigateEnum.NEXT);
        }

    }

    function moveBack() {

        btn = $get('buttonBack');
        btn.disabled = true;


        WizardSetProperty("PageId", "PurchasePage");


        txtbox = $get('NumberOfStorageLicensesToAdd');
        txtbox.style.display = "";

        lblbox = $get('NumberOfStorageLicensesToAddLbl');
        XUI.Html.SetText(lblbox, "");
        lblbox.style.display = "none";


        XUI.Html.SetText($get('spanTitle'), PAGE_TITLE_PURCHASE_PAGE);
        XUI.Html.SetText($get('PageDescription'), PAGE_DESCRIPTION_PURCHASE_PAGE);
        $get('CurrentChargesTable').setAttribute('summary',
            CrmEncodeDecode.CrmJavaScriptEncode(PAGE_DESCRIPTION_PURCHASE_PAGE));
        XUI.Html.SetText($get('LicenseToAddTableHeader'),
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("AddOnWizard.StorageLicenseInputPage.LicenseToAddHeader")) %>);
        $get('UserInputTable').setAttribute('summary',
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("AddOnWizard.StorageLicenseInputPage.LicenseToAddHeader")) %>);

        $get('buttonNext')
            .innerHTML =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Util.DecorateAccessKey((CurrentResourceManager.GetString("Wizard_Button_Text_Next")))) %>;
        $get('buttonNext')
            .value =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Util.DecorateAccessKey((CurrentResourceManager.GetString("Wizard_Button_Text_Next")))) %>;
        $get('buttonNext')
            .accessKey =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Util.GetAccessKey(CurrentResourceManager.GetString("Wizard_Button_Text_Next"))) %>;
        $get('buttonNext')
            .title =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("Wizard_Button_Tooltip_Next")) %>;


        $get('AddonInputRow').className = 'ms-crm-addon-page-table-data-row';


        setStorageLicenseUsageInfoText(STORAGE_LICENSES_TO_ADD_USAGE_INFO_PURCHASE_PAGE,
            (CURRENT_MONTHLY_CHARGES_STORAGE_QUANTITY * 1 + STORAGE_LICENSES_INCLUDED * 1)
            .toFixed(NUMBER_OF_DIGITS_AFTER_DECIMAL_POINT_FOR_STORAGE),
            STORAGE_LICENSES_AVAILABLE);
    }

    function UpdateTotalPrices(storage, valid) {
        if (!valid) {

            FormatToCurrencyAsync('StorageLicensesToAddPrice', LICENSES_TO_ADD_INITIAL_PRICE);
            $get('UpdatedTotalsTable').style.display = "none";
            $get('ErrorRow').style.display = "";
            if (!ValidateRange(storage)) {
                $get('InvalidLicenseCountErrorMessage')
                    .innerHTML =
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Application.Utility.Util.HtmlEncodeResource("AddOnWizard.LicenseInputPage.OutOfRangeAddStorageCountErrorMessage", Microsoft.Crm.Application.Utility.Util.CreateContactSupportHtml())) %>;
            } else {
                $get('InvalidLicenseCountErrorMessage')
                    .innerHTML =
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Application.Utility.Util.HtmlEncodeResource("AddOnWizard.LicenseInputPage.InvalidAddStorageCountErrorMessage", Microsoft.Crm.Application.Utility.Util.CreateContactSupportHtml())) %>;
            }
        } else {

            $get('UpdatedTotalsTable').style.display = "";
            $get('ErrorRow').style.display = "none";

            var storageLicensesToAddPrice = CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE * storage;
            var updatedTotalMonthlyChargesPrice = (CURRENT_MONTHLY_CHARGES_TOTAL_PRICE * 1 +
                (CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE * storage));

            if (!STORAGE_CHARGE_ENABLED) {
                storageLicensesToAddPrice = 0;
                updatedTotalMonthlyChargesPrice = CURRENT_MONTHLY_CHARGES_TOTAL_PRICE * 1;
            }

            var updatedAmount = FormatTaxBreakdown(updatedTotalMonthlyChargesPrice);

            FormatToCurrencyAsync('StorageLicensesToAddPrice',
                storageLicensesToAddPrice.toFixed(NUMBER_OF_DIGITS_AFTER_DECIMAL_POINT));
            FormatToCurrencyAsync('UpdatedTotalMonthlyChargesPrice',
                updatedAmount.toFixed(NUMBER_OF_DIGITS_AFTER_DECIMAL_POINT));
        }
    }


    function ValidateRange(quantity) {
        if (quantity > HIGHEST_CHANGE) {
            return false;
        }
        return true;
    }


    function storageLicensePage_onload() {
        Initialize();
    }


    Sys.Application.add_load(storageLicensePage_onload);

    function Initialize() {


        btn = $get('buttonNext');
        btn.disabled = true;

        XUI.Html.SetText($get('PageDescription'), PAGE_DESCRIPTION_PURCHASE_PAGE);
        $get('CurrentChargesTable').setAttribute('summary', PAGE_DESCRIPTION_PURCHASE_PAGE);

        XUI.Html.SetText($get('CurrentMonthlyChargesUserLicensesQuantity'),
            CURRENT_MONTHLY_CHARGES_USER_LICENSES_QUANTITY);
        FormatToCurrencyAsync('CurrentMonthlyChargesUserLicensesPrice', CURRENT_MONTHLY_CHARGES_USER_LICENSES_PRICE);
        FormatToCurrencyAsync('CurrentMonthlyChargesUserLicensesUnitPrice',
            CURRENT_MONTHLY_CHARGES_USER_LICENSES_UNIT_PRICE);
        XUI.Html.SetText($get('CurrentMonthlyChargesStorageQuantity'), CURRENT_MONTHLY_CHARGES_STORAGE_QUANTITY);
        FormatToCurrencyAsync('CurrentMonthlyChargesStoragePrice', CURRENT_MONTHLY_CHARGES_STORAGE_PRICE);

        XUI.Html.SetText($get('AdditionalStorageInfoText'), ADDITIONAL_STORAGE_INFO_TEXT);

        setStorageLicenseUsageInfoText(STORAGE_LICENSES_TO_ADD_USAGE_INFO_PURCHASE_PAGE,
            CURRENT_MONTHLY_CHARGES_STORAGE_QUANTITY * 1 + STORAGE_LICENSES_INCLUDED * 1,
            STORAGE_LICENSES_AVAILABLE);

        FormatToCurrencyAsync('StorageLicensesToAddPrice', LICENSES_TO_ADD_INITIAL_PRICE);

        if (STORAGE_CHARGE_ENABLED) {
            FormatToCurrencyAsync('CurrentMonthlyChargesStorageUnitPrice', CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE);
            FormatToCurrencyAsync('StorageLicensesToAddUnitPrice', CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE);
            $get('StorageLicensesUnitPriceBeforePromotionDiv').style.display = "none";
            $get('StorageLicensesToAddUnitPriceBeforePromotionDiv').style.display = "none";
            $get("StoragePromotionDiv").style.display = "none";
        } else {
            FormatToCurrencyAsync("CurrentMonthlyChargesStorageUnitPrice", 0);
            FormatToCurrencyAsync('StorageLicensesToAddUnitPrice', 0);
            FormatToCurrencyAsync('StorageLicensesUnitPriceBeforePromotion',
                CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE);
            FormatToCurrencyAsync('StorageLicensesToAddUnitPriceBeforePromotion',
                CURRENT_MONTHLY_CHARGES_STORAGE_UNIT_PRICE);
            XUI.Html.SetText($get('StoragePromotion'), STORAGE_PROMOTION_MESSAGE);
        }

        XUI.Html.SetText($get('LicenseToAddTableHeader'),
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("AddOnWizard.StorageLicenseInputPage.LicenseToAddHeader")) %>);
        $get('UserInputTable').setAttribute('summary',
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("AddOnWizard.StorageLicenseInputPage.LicenseToAddHeader")) %>);
        $get('ErrorRow').style.display = "none";


        WizardSetProperty("PageId", "PurchasePage");

        btnNext = $get('buttonNext');
        try {
            btnNext.onclick = "";
            $removeHandler(btnNext, 'click', moveNext);
        } catch (e) {
        }
        btnNext.onclick = function() {
            moveNext();
            return false;
        };


        btnBack = $get('buttonBack')
        $addHandler(btnBack, 'click', moveBack);
    }

    function setFocus() {
        $get('NumberOfStorageLicensesToAdd').focus();
    }

    function setStorageLicenseUsageInfoText(storageLicensesToAddUsageInfo, storageTotal, storageLicensesAvailable) {
        storageLicensesToAddUsageInfo = storageLicensesToAddUsageInfo.replace("{0}", storageTotal);
        storageLicensesToAddUsageInfo = storageLicensesToAddUsageInfo.replace("{1}", STORAGE_LICENSES_USED);
        storageLicensesToAddUsageInfo = storageLicensesToAddUsageInfo.replace("{2}", storageLicensesAvailable);
        XUI.Html.SetText($get('StorageLicensesToAddUsageInfo'), storageLicensesToAddUsageInfo);
    }

</script>

</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <div class="ms-crm-header-spacer">
        <label id="PageDescription">
        </label>
    </div>

    <div style="font-weight: bold; margin-bottom: 5px">
        <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesHeader" runat="server"/>
    </div>

    <table class="ms-crm-CurrentChargesTable" id="CurrentChargesTable">
        <tr class="ms-crm-CurrentCharges-sub-header">
            <th class="ms-crm-LicenseToAddSubHeaderUnitPrice">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderUnitPrice"
                          runat="server"/>
            </th>
            <td>
                <div class="ms-crm-ColumnSeparator-gray"></div>
            </td>
            <th class="ms-crm-LicenseToAddSubHeaderDescription">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderDescription"
                          runat="server"/>
            </th>
            <td>
                <div class="ms-crm-ColumnSeparator-gray"></div>
            </td>
            <th class="ms-crm-LicenseToAddSubHeaderQuantity">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderQuantity"
                          runat="server"/>
            </th>
            <td>
                <div class="ms-crm-ColumnSeparator-gray"></div>
            </td>
            <th class="ms-crm-LicenseToAddSubHeaderPrice">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.CurrentMonthlyChargesSubHeaderPrice"
                          runat="server"/>
            </th>
        </tr>
        <tr class="ms-crm-CurrentCharges-data-row">
            <td class="ms-crm-CurrentChargesUnitPrice" colspan="2">
                <label id="CurrentMonthlyChargesUserLicensesUnitPrice">
                </label>
            </td>
            <td class="ms-crm-CurrentChargesDescription">
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
            <td class="ms-crm-CurrentChargesQuantity" colspan="3">
                <label id="CurrentMonthlyChargesUserLicensesQuantity">
                </label>
            </td>
            <td class="ms-crm-CurrentChargesPrice">
                <label id="CurrentMonthlyChargesUserLicensesPrice">
                </label>
            </td>
        </tr>
        <tr class="ms-crm-CurrentCharges-data-row">
            <td class="ms-crm-CurrentChargesUnitPrice" colspan="2">
                <div id="StorageLicensesUnitPriceBeforePromotionDiv">
                    <label id="StorageLicensesUnitPriceBeforePromotion" class="ms-crm-strikethrough"></label>
                </div>
                <label id="CurrentMonthlyChargesStorageUnitPrice">
                </label>
            </td>
            <td class="ms-crm-CurrentChargesDescription">
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
            <td class="ms-crm-CurrentChargesQuantity" colspan="3">
                <label id="CurrentMonthlyChargesStorageQuantity">
                </label>
                <span class="ms-crm-space-between-number-and-text"></span>
                <loc:Text ResourceId="AddOnWizard.Common.MeasureOfStorageSize" runat="server"/>
            </td>
            <td class="ms-crm-CurrentChargesPrice">
                <label id="CurrentMonthlyChargesStoragePrice">
                </label>
            </td>
        </tr>
    </table>
    <asp:Table ID="CurrentChargesTableSummary" CssClass="ms-crm-CurrentChargesTable" runat="server"></asp:Table>
    <br/>
    <br/>

    <div style="font-weight: bold; margin-bottom: 5px">
        <label id="LicenseToAddTableHeader"></label>
    </div>

    <table id="UserInputTable" class="ms-crm-UserInputTable">
        <tr class="ms-crm-addon-page-table-sub-header">
            <th class="ms-crm-LicenseToAddSubHeaderUnitPrice">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.LicenseToAddSubHeaderUnitPrice"
                          runat="server"/>
            </th>
            <td>
                <div class="ms-crm-ColumnSeparator-gray"></div>
            </td>
            <th class="ms-crm-LicenseToAddSubHeaderDescription">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.LicenseToAddSubHeaderDescription"
                          runat="server"/>
            </th>
            <td>
                <div class="ms-crm-ColumnSeparator-gray"></div>
            </td>
            <th class="ms-crm-LicenseToAddSubHeaderQuantity">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.LicenseToAddSubHeaderQuantity"
                          runat="server"/>
            </th>
            <td>
                <div class="ms-crm-ColumnSeparator-gray"></div>
            </td>
            <th class="ms-crm-LicenseToAddSubHeaderPrice">
                <loc:Text ResourceId="AddOnWizard.LicenseInputPage.LicenseToAddSubHeaderPrice" runat="server"/>
            </th>
        </tr>
        <tr class="ms-crm-addon-page-table-data-row" id="AddonInputRow">
            <td class="ms-crm-LicensesToAddUnitPrice" colspan="2" style="border-top: 1px solid">
                <div id="StorageLicensesToAddUnitPriceBeforePromotionDiv">
                    <label id="StorageLicensesToAddUnitPriceBeforePromotion" class="ms-crm-strikethrough"></label>
                </div>
                <label id="StorageLicensesToAddUnitPrice">
                </label>
            </td>
            <td style="border-top: 1px solid">
                <span class="ms-crm-left-padding">
                    <loc:Text ResourceId="AddOnWizard.StorageLicenseInputPage.LicensesToAddStorageLicensesText"
                              runat="server"/>
                </span>
                <div class="ms-crm-left-padding-secondline">
                    <span class="ms-crm-gray-text-left-description">
                        <label id="StorageLicensesToAddUsageInfo">
                        </label>
                    </span>
                </div>
            </td>
            <td class="ms-crm-align-center" colspan="3" style="border-top: 1px solid">
                <input name="NumberOfStorageLicensesToAdd" class="SmallInputBox" type="text" id="NumberOfStorageLicensesToAdd"
                       onkeyup="ValidateInput(this, new Sys.UI.DomEvent(event));" runat="server"/>
                <label id="NumberOfStorageLicensesToAddLbl">
                </label>
                <span class="ms-crm-space-between-number-and-text"></span>
                <loc:Text ResourceId="AddOnWizard.Common.MeasureOfStorageSize"
                          runat="server"/>
            </td>
            <td class="ms-crm-LicensesToAddPrice" style="border-top: 1px solid">
                <label id="StorageLicensesToAddPrice">
                </label>
            </td>
        </tr>
    </table>
    <br/>
    <hr/>
    <asp:Table ID="UpdatedTotalsTable" CssClass="ms-crm-addon-page-footer" runat="server"></asp:Table>
    <table class="ms-crm-addon-page-footer">
        <tr id="ErrorRow">
            <td class="ms-crm-errorrow-FooterTaxInfo">
                <asp:Label ID="TaxNoteErrorRow" runat="server">
                    <i>
                        <loc:Text ResourceId="AddOnWizard.LicenseInputPage.FooterTaxInfo" runat="server"/>
                    </i>
                </asp:Label>
            </td>
            <td class="ms-crm-align-right">
                <label id="InvalidLicenseCountErrorMessage" class="ms-crm-red-text-description"></label>
            </td>
        </tr>
    </table>
    <br/>
    <div class="ms-crm-storagearea ms-crm-gradientbox" id="StoragePromotionDiv">
        <label id="StoragePromotion"/>
    </div>
</frm:WizardForm>
</body>
</html>