<%@ Page language="c#" Inherits="Microsoft.Crm.Service.SM.ResourceSpecifications.ResourceRulePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script type="text/javascript">
    var sAllValue = LOCID_RESRULE_ALL;
    var fInfinity = 0x7F800000;

    var quantityPickerControl = null;
    var criteriaPickerComponent = null;
    var quantity;
    var samesite;
    var objective;
    var description;
    var sitePicker;
    var criteriaPicker;
    var effort;

    Sys.Application.add_load(onApplicationLoad);


    function onApplicationLoad() {
        quantity = $get("quantity");
        samesite = $get("samesite");
        objective = $get("objective");
        description = $get("description");
        sitePicker = $get("sitePicker");
        criteriaPicker = $get("criteriaPicker");
        effort = $get("effort");

        var oArguments = getDialogArguments();
        if (oArguments) {
            quantity.value = oArguments.iQuantity;
            effort.value = oArguments.fEffort;
            samesite.value = oArguments.bSameSite;
            objective.value = oArguments.sObjective;
            description.value = oArguments.sDescription;
        }
        quantityPickerControl = $find("quantityPicker");

        quantityPickerControl.setValue(quantity.value);


        sitePicker.value = samesite.value;

        criteriaPickerComponent = Mscrm.FormControlInputBehavior.GetBehavior('criteriaPicker');


        var expressionId = convertExpressionToId(objective.value);
        if (expressionId == OBJECTIVE_CUSTOM_ID) {
            criteriaPickerComponent.AddOption(LOCID_RESRULE_CUSTOM, OBJECTIVE_CUSTOM_ID, null);
        }
        criteriaPickerComponent.set_dataValue(expressionId);


        if (effort.value == fInfinity) {
            effort.value = sAllValue;
        }
    }


    function applychanges() {

        quantity.value = Mscrm.NumberUtility.fullWidthToHalfWidth(quantityPickerControl.get_returnValueProperty());


        samesite.value = sitePicker.value;


        if (criteriaPicker.value != OBJECTIVE_CUSTOM_ID) {
            objective.value = convertIdToExpression(criteriaPicker.value);
        }


        quantity.value = Trim(quantity.value);
        effort.value = Mscrm.NumberUtility.fullWidthToHalfWidth(Trim(effort.value.toLowerCase()));
        description.value = Trim(description.value);


        if (isQuantityValid(quantity.value) && isEffortValid()) {

            var oReturnArguments = new ruleArgs(quantity.value,
                (effort.value.toLowerCase() == sAllValue.toLowerCase()) ? fInfinity : effort.value,
                samesite.value,
                objective.value,
                description.value);
            if (oReturnArguments) {
                Mscrm.Utilities.setReturnValue(oReturnArguments);
            }
            closeWindow();
        }
    }

    function isQuantityValid(quantityValue) {
        if (quantityValue.length > 0) {

            if (quantityValue == sAllValue) {
                return true;
            }


            quantityValue = Mscrm.NumberUtility.fullWidthToHalfWidth(quantityValue);


            if (!isNotANumber(quantityValue, sDecimalSeparator) &&
                (quantityValue > 0 || quantityValue == -1) &&
                quantityValue.indexOf(".") == -1 &&
                quantityValue <= iMaxInt) {
                return true;
            }
        }

        alert(LOCID_RESRULE_QUANERR);

        criteriaPickerComponent.setFocus();

        quantityPickerControl.setFocus();
        return false;
    }

    function isEffortValid() {
        if (effort != null &&
            effort.value.length > 0 &&
            ((!isNotANumber(effort.value, sDecimalSeparator) &&
                    (makeFloatValue(effort.value, sDecimalSeparator) >= 0)) ||
                (effort.value.toLowerCase() == sAllValue.toLowerCase()))) {
            return true;
        } else {
            alert(LOCID_RESRULE_CAPERR);
            if (!bShowAdvanced) {
                Mscrm.Utilities.click($get("ShowHideImage"));
            }

            effort.focus();
            effort.select();
            return false;
        }
    }


    function handleKey(event) {
        var i = event.keyCode;
        switch (i) {
        case KEY_SPACE:
        case KEY_ENTER:
            toggleAdvanced(event.target);
            break;
        }
    }


    function toggleAdvanced(element) {
        var windowWidth = Sys.Browser.agent === Sys.Browser.InternetExplorer
            ? window.document.body.clientWidth
            : window.outerWidth;
        var windowHeight = Sys.Browser.agent === Sys.Browser.InternetExplorer
            ? document.documentElement.offsetHeight
            : window.outerHeight;

        if (!bShowAdvanced) {

            XUI.Html.DomUtils.GetNextSibling(element.parentNode.parentNode.parentNode.parentNode).style.display = "";


            resizeWindow(windowWidth, windowHeight + ADVANCED_SECTION_HEIGHT);
            bShowAdvanced = true;
            $get("ShowHideImage").src = "/_imgs/up.gif";
            $get("ShowHideImage").alt = LOCID_RESRULE_HIDE;
        } else {

            XUI.Html.DomUtils.GetNextSibling(element.parentNode.parentNode.parentNode.parentNode).style
                .display = "none";


            resizeWindow(windowWidth, windowHeight - ADVANCED_SECTION_HEIGHT);
            bShowAdvanced = false;
            $get("ShowHideImage").src = "/_imgs/down.gif";
            $get("ShowHideImage").alt = LOCID_RESRULE_EXPAND;
        }
    }


    function cancel() {
        closeWindow();
    }
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <input type="hidden" id="quantity" name="quantity">
    <input type="hidden" id="objective" name="objective">
    <input type="hidden" id="samesite" name="samesite">
    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td valign="top">
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr height="27">
                        <td width="40%" class="ms-crm-Field-Required" style="vertical-align: top" id="quantity_c">
                            <label for="quantityPicker">
                                <loc:Text ResourceId="Web.SM.ResourceSpecs.ResourceRule.aspx_120" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                            </label>
                        </td>
                        <td style="vertical-align: top">
                            <ui:EditableSelect id="quantityPicker" TabIndex="1" runat="server"/>
                        </td>
                    </tr>
                    <tr height="84">
                        <td width="40%" style="vertical-align: top">
                            <label for="description">
                                <loc:Text ResourceId="Web.SM.ResourceSpecs.ResourceRule.aspx_136" runat="server"/>
                            </label>
                        </td>
                        <td style="vertical-align: top">
                            <ui:TextArea id="description" tabIndex="2" Height="75px" MaxLength="256" runat="server"/>
                        </td>
                    </tr>
                    <tr height="27" id="SiteTd" runat="server">
                        <td width="40%" style="vertical-align: top">
                            <label for="sitePicker">
                                <loc:Text ResourceId="Resource_Rule_Dialog_Site" runat="server"/>
                            </label>
                        </td>
                        <td style="vertical-align: top">
                            <ui:Select id="sitePicker" TabIndex="3" runat="server"/>
                        </td>
                    </tr>
                    <tr height="24">
                        <td class="rrdDivider">
                            <loc:Text ResourceId="Resource_Rule_Dialog_Other_Settings" runat="server"/>
                        </td>
                        <td class="rrdDivider rsc_resourcerule_td_toggle">
                            <img id="ShowHideImage" class="rrdImage" runat="server" tabIndex="4" border="0" onkeydown="handleKey(new Sys.UI.DomEvent(event));" onclick="toggleAdvanced(this);"/>
                        </td>
                    </tr>
                </table>
                <table width="100%" cellspacing="0" cellpadding="0" id="AdvancedTable" runat="server">
                    <tr height="5">
                        <td>&nbsp;</td>
                    </tr>
                    <tr height="27">
                        <td width="40%" style="vertical-align: top">
                            <label for="criteriaPicker">
                                <loc:Text ResourceId="Resource_Rule_Dialog_Selection_Criteria" runat="server"/>
                            </label>
                        </td>
                        <td style="vertical-align: top">
                            <ui:Select id="criteriaPicker" TabIndex="5" runat="server"/>
                        </td>
                    </tr>
                    <tr height="27">
                        <td width="40%" class="ms-crm-Field-Required" style="vertical-align: top">
                            <label for="effort">
                                <loc:Text ResourceId="Web.SM.ResourceSpecs.ResourceRule.aspx_128" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                            </label>
                        </td>
                        <td style="vertical-align: top">
                            <input type="text" id="effort" name="effort" tabIndex="6" maxlength="10" Style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>