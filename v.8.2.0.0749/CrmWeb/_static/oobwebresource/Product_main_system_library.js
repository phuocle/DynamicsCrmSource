Type.registerNamespace("Mscrm");
Mscrm.ProductMainSystemLibraryWebResource = function() {};
Mscrm.ProductMainSystemLibraryWebResource.get_validFromDate = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls
        .get("validfromdate"))) return Xrm.Page.ui.controls.get("validfromdate").getAttribute();
    else return null
};
Mscrm.ProductMainSystemLibraryWebResource.get_validToDate = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls
        .get("validtodate"))) return Xrm.Page.ui.controls.get("validtodate").getAttribute();
    else return null
};
Mscrm.ProductMainSystemLibraryWebResource.defaultUoMIdSetAdditionalParams = function() {
    var $v_0 = Xrm.Page.getAttribute("defaultuomscheduleid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()) && $v_0.getValue().length > 0) {
        var $v_1 = $v_0.getValue()[0].id,
            $v_2 = '<filter type="and"><condition attribute="uomscheduleid" operator="like" value="' +
                CrmEncodeDecode.CrmXmlEncode($v_1) +
                '"/></filter>';
        Xrm.Page.ui.controls.get("defaultuomid").addCustomFilter($v_2)
    }
};
Mscrm.ProductMainSystemLibraryWebResource
    .priceLevelIdSetAdditionalParams = function(context) {
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId()) &&
            Xrm.Page.ui.controls.get("pricelevelid").setParameter("parentId", Xrm.Page.data.entity.getId())
    };
Mscrm.ProductMainSystemLibraryWebResource.formOnLoad = function() {
    var $v_0 = Xrm.Page.ui.getFormType(),
        $v_1 = Xrm.Page.context.getQueryStringParameters(),
        $v_2 = Xrm.Page.ui.controls.get("header_statecode"),
        $v_3 = Xrm.Page.ui.controls.get("defaultuomid"),
        $v_4 = Xrm.Page.ui.controls.get("defaultuomscheduleid"),
        $v_5 = Xrm.Page.getAttribute("defaultuomscheduleid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource
        .get_validFromDate()))
        Mscrm.ProductMainSystemLibraryWebResource.$0.$1_0 = Mscrm.ProductMainSystemLibraryWebResource
            .get_validFromDate().getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource
        .get_validToDate()))
        Mscrm.ProductMainSystemLibraryWebResource.$0.$2_0 = Mscrm.ProductMainSystemLibraryWebResource.get_validToDate()
            .getValue();
    Mscrm.ProductMainSystemLibraryWebResource.$4("notes", "notes", true);
    Mscrm.ProductMainSystemLibraryWebResource.$L($v_0);
    $v_0 !== 3 && $v_0 !== 4 && Mscrm.ProductMainSystemLibraryWebResource.$F();
    Mscrm.ProductMainSystemLibraryWebResource.$E();
    Mscrm.ProductMainSystemLibraryWebResource.$I();
    Mscrm.ProductMainSystemLibraryWebResource.$G($v_0, $v_3, $v_4, $v_5);
    Mscrm.ProductMainSystemLibraryWebResource.$M($v_4);
    (Mscrm.ProductMainSystemLibraryWebResource.$6() || Mscrm.ProductMainSystemLibraryWebResource.$7()) &&
        Mscrm.ProductMainSystemLibraryWebResource.$4("productassocaition_items",
            "productassocaition_items_section",
            true);
    !Mscrm.ProductMainSystemLibraryWebResource.$7() &&
        Mscrm.ProductMainSystemLibraryWebResource.$4("product_dynamic_properties",
            "product_dynamic_properties_section",
            true);
    Xrm.Page.context.client.getClient() === "Outlook" && Xrm.Page.ui.refreshRibbon();
    Mscrm.ProductMainSystemLibraryWebResource.$J($v_2, $v_1)
};
Mscrm.ProductMainSystemLibraryWebResource.$J = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        !Mscrm.InternalUtilities.JSTypes.isNull($p1) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($p1["revise"]) &&
            $p1["revise"] === "false" &&
            $p0.setVisible(false)
};
Mscrm.ProductMainSystemLibraryWebResource.$G = function($p0, $p1, $p2, $p3) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p2) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p3)) {
        Mscrm.InternalUtilities.JSTypes.isNull($p3.getValue()) && $p1.setDisabled(true);
        if ($p0 !== 1 && $p0 !== 4) {
            $p2.setDisabled(true);
            var $v_0 = Xrm.Page.ui.controls.get("pricelevelid");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setDisabled(false)
        }
    }
};
Mscrm.ProductMainSystemLibraryWebResource.$L = function($p0) {
    if (Xrm.Page.context.client.getClient() !== "Mobile") {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Internal
                .getResourceString("LOCID_PRODUCT_BUNDLE_FORM_TITLE")) &&
            $p0 === 1 &&
            Mscrm.ProductMainSystemLibraryWebResource.$6())
            Xrm.Internal.setFormEntityName(Xrm.Internal.getResourceString("LOCID_PRODUCT_BUNDLE_FORM_TITLE"));
        else if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Internal.getResourceString("LOCID_PRODUCTFAMILY_TITLE")) &&
            $p0 === 1 &&
            Mscrm.ProductMainSystemLibraryWebResource
            .$3()) Xrm.Internal.setFormEntityName(Xrm.Internal.getResourceString("LOCID_PRODUCTFAMILY_TITLE"));
        else {
            var $v_0 = Xrm.Page.getAttribute("name");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
                var $v_1 = null, $v_2 = null;
                if (Mscrm.ProductMainSystemLibraryWebResource.$6())
                    if (Mscrm.ProductMainSystemLibraryWebResource
                        .$7()) $v_1 = Xrm.Internal.getResourceString("LOCID_KIT_TITLE_PREFIX");
                    else $v_1 = Xrm.Internal.getResourceString("LOCID_PRODUCTBUNDLE_TITLE_PREFIX");
                else if (Mscrm.ProductMainSystemLibraryWebResource.$3())
                    if (Mscrm.ProductMainSystemLibraryWebResource
                        .$7()) $v_1 = Xrm.Internal.getResourceString("LOCID_KIT_TITLE_PREFIX");
                    else $v_1 = Xrm.Internal.getResourceString("LOCID_PRODUCTFAMILY_TITLE_PREFIX");
                else if (Mscrm.ProductMainSystemLibraryWebResource
                    .$7()) $v_1 = Xrm.Internal.getResourceString("LOCID_KIT_TITLE_PREFIX");
                else $v_1 = Xrm.Internal.getResourceString("LOCID_PRODUCT_TITLE_PREFIX");
                $v_2 = String.format("{0}: {1}", $v_1, $v_0.getValue());
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && Xrm.Internal.setFormEntityName($v_2)
            }
        }
        Mscrm.ProductMainSystemLibraryWebResource.SetParentProductLabel();
        Mscrm.ProductMainSystemLibraryWebResource.HandleKitFormUIConfiguration()
    }
};
Mscrm.ProductMainSystemLibraryWebResource.HandleKitFormUIConfiguration = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("iskit");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.getValue()) {
        var $v_1 = Xrm.Page.ui.tabs.get("productassocaition_items");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            $v_1.setLabel(Xrm.Internal.getResourceString("LOCID_KITPRODUCTS_SECTION_NAME"));
        Mscrm.ProductMainSystemLibraryWebResource.$8 = window.setInterval(function() {
                var $v_2 = Xrm.Page.getControl("productassocaition_items");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                    $v_2.setLabel(Xrm.Internal.getResourceString("LOCID_KITPRODUCTS_SECTION_NAME"));
                    window.clearInterval(Mscrm.ProductMainSystemLibraryWebResource.$8)
                }
            },
            200)
    }
};
Mscrm.ProductMainSystemLibraryWebResource.SetParentProductLabel = function() {
    if (Xrm.Page.ui.getFormType() !== 1) {
        var $v_0 = Xrm.Page.ui.controls.get("parentproductid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Internal.getResourceString("LOCID_PF_HIERARCHY_LABLE_NAME")) &&
            $v_0.setLabel(Xrm.Internal.getResourceString("LOCID_PF_HIERARCHY_LABLE_NAME"))
    }
};
Mscrm.ProductMainSystemLibraryWebResource.$M = function($p0) {
    if (Mscrm.ProductMainSystemLibraryWebResource.$3()) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("defaultuomid"))) {
            var $v_0 = Xrm.Page.data.entity.attributes.get("defaultuomid");
            $v_0.setRequiredLevel("none")
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("defaultuomscheduleid"))) {
            var $v_1 = Xrm.Page.getAttribute("statecode"),
                $v_2 = Xrm.Page.data.entity.attributes.get("defaultuomscheduleid");
            $v_2.setRequiredLevel("none");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                $v_1.getValue().toString() !== "1" &&
                $p0.setDisabled(false)
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("pricelevelid"))) {
            var $v_3 = Xrm.Page.data.entity.attributes.get("pricelevelid");
            $v_3.setRequiredLevel("none")
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("quantitydecimal"))) {
            var $v_4 = Xrm.Page.data.entity.attributes.get("quantitydecimal");
            $v_4.setRequiredLevel("none")
        }
        Mscrm.ProductMainSystemLibraryWebResource.$4("price_list_items", "price_list_items_section", false);
        Mscrm.ProductMainSystemLibraryWebResource.$4("price_list_items", "productsubstitute_items_section", false)
    } else {
        Mscrm.ProductMainSystemLibraryWebResource.$4("price_list_items", "price_list_items_section", true);
        Mscrm.ProductMainSystemLibraryWebResource.$4("price_list_items", "productsubstitute_items_section", true)
    }
};
Mscrm.ProductMainSystemLibraryWebResource.$I = function() {
    var $v_0 = Xrm.Page.ui.navigation;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.items)) {
        var $v_1 = $v_0.items.get("navKits");
        !Mscrm.InternalUtilities.JSTypes
            .isNull($v_1) &&
            $v_1.setVisible(Mscrm.ProductMainSystemLibraryWebResource.$6());
        var $v_2 = $v_0.items.get("navProductBundles");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
            !Mscrm.ProductMainSystemLibraryWebResource.$9() && $v_2.setVisible(false);
        if (Mscrm.ProductMainSystemLibraryWebResource.$3()) {
            var $v_3 = $v_0.items.get("navSubs");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setVisible(false);
            var $v_4 = $v_0.items.get("navComps");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setVisible(false);
            var $v_5 = $v_0.items.get("navSalesLit");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.setVisible(false)
        }
        if (Xrm.Page.ui.getFormType() !== 1 && Mscrm.ProductMainSystemLibraryWebResource.$9()) {
            var $v_6 = $v_0.items.get("navSubs");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_6) && $v_6.setVisible(true)
        }
    }
};
Mscrm.ProductMainSystemLibraryWebResource.defaultUoMScheduleIdOnChange = function() {
    var $v_0 = Xrm.Page.ui.controls.get("defaultuomid"),
        $v_1 = Xrm.Page.getAttribute("defaultuomid"),
        $v_2 = Xrm.Page.getAttribute("defaultuomscheduleid");
    if (!$v_1.getUserPrivilege().canCreate) $v_0.setDisabled(true);
    else
        $v_0.setDisabled(!Mscrm.ProductMainSystemLibraryWebResource.$3() &&
            Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue()));
    (Mscrm.ProductMainSystemLibraryWebResource.$3() && Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue()) ||
            $v_0.getDisabled()) &&
        $v_1.setValue([])
};
Mscrm.ProductMainSystemLibraryWebResource
    .quantityDecimalOnChange = function() { Mscrm.ProductMainSystemLibraryWebResource.$F() };
Mscrm.ProductMainSystemLibraryWebResource
    .priceLevelIdOnChange = function() { Mscrm.ProductMainSystemLibraryWebResource.$E() };
Mscrm.ProductMainSystemLibraryWebResource.$F = function() {
    var $v_0 = Xrm.Page.getAttribute("quantityonhand"), $v_1 = Xrm.Page.getAttribute("quantitydecimal");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_2 = $v_1.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_2 = 0;
        $v_0.setPrecision($v_2)
    }
};
Mscrm.ProductMainSystemLibraryWebResource.$E = function() {
    var $v_0 = Xrm.Page.ui.getFormType(), $v_1 = Xrm.Page.getAttribute("pricelevelid");
    if ($v_0 !== 1 &&
        !Mscrm.ProductMainSystemLibraryWebResource.$3() &&
        (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue()))) {
        var $v_2 = Xrm.Internal.getResourceString("LOCID_ERRORMISSINGPLPRE") +
            " " +
            Xrm.Internal.getResourceString("LOCID_ERRORMISSINGPL");
        Xrm.Page.ui.setFormNotification($v_2, "WARNING", "product_missing_default_price_list")
    } else Xrm.Page.ui.clearFormNotification("product_missing_default_price_list")
};
Mscrm.ProductMainSystemLibraryWebResource.$6 = function() {
    var $v_0 = Xrm.Page.getAttribute("productstructure");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.getValue() === 3) return true;
    return false
};
Mscrm.ProductMainSystemLibraryWebResource.$7 = function() {
    var $v_0 = Xrm.Page.getAttribute("iskit"), $v_1 = Xrm.Page.getAttribute("productstructure");
    return !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        $v_0.getValue() &&
        $v_1.getValue() === 1
};
Mscrm.ProductMainSystemLibraryWebResource.$9 = function() {
    var $v_0 = Xrm.Page.getAttribute("iskit"), $v_1 = Xrm.Page.getAttribute("productstructure");
    return !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        !$v_0.getValue() &&
        $v_1.getValue() === 1
};
Mscrm.ProductMainSystemLibraryWebResource.$4 = function($p0, $p1, $p2) {
    var $v_0 = Xrm.Page.ui.tabs.get($p0);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.sections.get($p1);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            $v_0.setVisible($p2);
            $v_1.setVisible($p2)
        }
    }
};
Mscrm.ProductMainSystemLibraryWebResource.$3 = function() {
    var $v_0 = Xrm.Page.getAttribute("productstructure"), $v_1 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) if ($v_0.getValue() === 2) $v_1 = true;
    return $v_1
};
Mscrm.ProductMainSystemLibraryWebResource.validFromDateOnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.$0
        .$1_0))
        Mscrm.ProductMainSystemLibraryWebResource.$0.$1_0 = Mscrm.ProductMainSystemLibraryWebResource
            .get_validFromDate().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.$0
        .$2_0))
        Mscrm.ProductMainSystemLibraryWebResource.$0.$2_0 = Mscrm.ProductMainSystemLibraryWebResource.get_validToDate()
            .getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.get_validFromDate()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource
            .get_validToDate()))
        return Mscrm.ProductMainSystemLibraryWebResource
            .isStartDateLessThanEndDate(Mscrm.ProductMainSystemLibraryWebResource.get_validFromDate(),
                Mscrm.ProductMainSystemLibraryWebResource.get_validToDate(),
                "validfromdate",
                Mscrm.ProductMainSystemLibraryWebResource.$0.$1_0,
                Mscrm.ProductMainSystemLibraryWebResource.$0.$2_0);
    return false
};
Mscrm.ProductMainSystemLibraryWebResource.validToDateOnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.$0
        .$1_0))
        Mscrm.ProductMainSystemLibraryWebResource.$0.$1_0 = Mscrm.ProductMainSystemLibraryWebResource
            .get_validFromDate().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.$0
        .$2_0))
        Mscrm.ProductMainSystemLibraryWebResource.$0.$2_0 = Mscrm.ProductMainSystemLibraryWebResource.get_validToDate()
            .getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.get_validFromDate()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource
            .get_validToDate()))
        return Mscrm.ProductMainSystemLibraryWebResource
            .isStartDateLessThanEndDate(Mscrm.ProductMainSystemLibraryWebResource.get_validFromDate(),
                Mscrm.ProductMainSystemLibraryWebResource.get_validToDate(),
                "validtodate",
                Mscrm.ProductMainSystemLibraryWebResource.$0.$1_0,
                Mscrm.ProductMainSystemLibraryWebResource.$0.$2_0);
    return false
};
Mscrm.ProductMainSystemLibraryWebResource.formOnSave = function(context) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.get_validFromDate()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ProductMainSystemLibraryWebResource.get_validToDate()))
        if (!Mscrm.ProductMainSystemLibraryWebResource
            .isStartDateLessThanEndDate(Mscrm.ProductMainSystemLibraryWebResource.get_validFromDate(),
                Mscrm.ProductMainSystemLibraryWebResource.get_validToDate(),
                "validfromdate",
                Mscrm.ProductMainSystemLibraryWebResource.$0.$1_0,
                Mscrm.ProductMainSystemLibraryWebResource.$0.$2_0)) {
            context.getEventArgs().preventDefault();
            return false
        } else {
            Mscrm.ProductMainSystemLibraryWebResource.$0.$1_0 = Mscrm.ProductMainSystemLibraryWebResource
                .get_validFromDate().getValue();
            Mscrm.ProductMainSystemLibraryWebResource.$0.$2_0 = Mscrm.ProductMainSystemLibraryWebResource
                .get_validToDate().getValue()
        }
    return true
};
Mscrm.ProductMainSystemLibraryWebResource
    .isStartDateLessThanEndDate = function(oBeginDate, oEndDate, oSourceCtrl, oBeginDateValue, oEndDateValue) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(oBeginDate.getValue()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(oEndDate.getValue()) &&
            oBeginDate.getValue() > oEndDate.getValue()) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_TODATE_LT_FROMDATE"), null);
            switch (oSourceCtrl) {
            case "validfromdate":
                oBeginDate.setValue(oBeginDateValue);
                break;
            default:
                oEndDate.setValue(oEndDateValue);
                break
            }
            return false
        }
        return true
    };
Mscrm.ProductMainSystemLibraryWebResource.stateTransition = function(stateTransitionType) {
    if (!Xrm.Page.data.getIsValid()) return;
    Mscrm.ProductMainSystemLibraryWebResource.showStateTransitionDialog(stateTransitionType)
};
Mscrm.ProductMainSystemLibraryWebResource.showStateTransitionDialog = function(stateTransitionType) {
    var $v_0 = Xrm.Page.data.entity.getId(),
        $v_1 = [$v_0, stateTransitionType, "false"],
        $v_2 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_productStateTransition.aspx?stateTransitionType=" +
            CrmEncodeDecode.CrmUrlEncode(stateTransitionType) +
            "&productId=" +
            CrmEncodeDecode.CrmUrlEncode($v_0) +
            "&isBundle=" +
            CrmEncodeDecode.CrmUrlEncode(Mscrm.ProductMainSystemLibraryWebResource.$6().toString()) +
            "&isProductFamily=" +
            CrmEncodeDecode.CrmUrlEncode(Mscrm.ProductMainSystemLibraryWebResource.$3().toString()));
    Mscrm.ProductMainSystemLibraryWebResource.openProductTransitionConfirmationDialog($v_2, $v_1)
};
Mscrm.ProductMainSystemLibraryWebResource
    .showStateTransitionDialogFromGrid = function(stateTransitionType, item, records) {
        var $v_0 = [records[0].Id, stateTransitionType, "true"],
            $v_1 = (Mscrm.ProductMainSystemLibraryWebResource.getCellValue("productstructure", item, records[0].Id) ===
                (2).toString()).toString(),
            $v_2 = (Mscrm.ProductMainSystemLibraryWebResource.getCellValue("iskit", item, records[0].Id) === "1")
                .toString(),
            $v_3 = Mscrm.GlobalImported.CrmUri
                .create("/_grid/cmds/dlg_productStateTransition.aspx?stateTransitionType=" +
                    CrmEncodeDecode.CrmUrlEncode(stateTransitionType) +
                    "&productId=" +
                    CrmEncodeDecode.CrmUrlEncode(records[0].Id.toString()) +
                    "&isBundle=" +
                    CrmEncodeDecode.CrmUrlEncode($v_2) +
                    "&isProductFamily=" +
                    CrmEncodeDecode.CrmUrlEncode($v_1));
        Mscrm.ProductMainSystemLibraryWebResource.openProductTransitionConfirmationDialog($v_3, $v_0)
    };
Mscrm.ProductMainSystemLibraryWebResource.getCellValue = function(columnName, gird, rowId) {
    var $v_0 = gird.getGrid().getRows().getByName(rowId);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getData().getEntity().getAttributes().getByName(columnName);
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_1) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) return $v_1.getValue().toString()
    }
    return null
};
Mscrm.ProductMainSystemLibraryWebResource
    .openProductTransitionConfirmationDialog = function(dialogConversionUrl, parameters) {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = 200;
        $v_0.width = 520;
        var $v_1 = Mscrm.CommandBarActions
            .createCallbackFunctionFactory(Mscrm.ProductMainSystemLibraryWebResource
                .performRefreshedAction,
                parameters);
        Xrm.Internal.openDialog(dialogConversionUrl.toString(), $v_0, null, null, $v_1)
    };
Mscrm.ProductMainSystemLibraryWebResource
    .performRefreshedAction = function(func, entityId, stateTransitionType, fromGrid) {
        !Mscrm.InternalUtilities.JSTypes.isNull(func) &&
            func &&
            Mscrm.ProductMainSystemLibraryWebResource.productStateTransition(entityId, stateTransitionType, fromGrid)
    };
Mscrm.ProductMainSystemLibraryWebResource
    .productStateTransition = function(entityId, stateTransitionType, calledFromGrid) {
        var $v_0 = "product";
        switch (stateTransitionType) {
        case "revise":
            Xrm.Internal.messages.setState($v_0, entityId, 3, -1)
                .then(function($p1_0) {
                        Mscrm.ProductMainSystemLibraryWebResource.$5($p1_0, entityId, $v_0, calledFromGrid)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break;
        case "publish":
            Xrm.Internal.messages.setState($v_0, entityId, 0, -1)
                .then(function($p1_0) {
                        Mscrm.ProductMainSystemLibraryWebResource.$5($p1_0, entityId, $v_0, calledFromGrid)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break;
        case "revert":
            var $v_1 = new Xrm.Objects.EntityReference($v_0, new Microsoft.Crm.Client.Core.Framework.Guid(entityId));
            Xrm.Internal.messages.revertProduct($v_1).then(function($p1_0) {
                    Mscrm.ProductMainSystemLibraryWebResource.$5($p1_0, entityId, $v_0, calledFromGrid)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break;
        case "retire":
            Xrm.Internal.messages.setState($v_0, entityId, 1, -1)
                .then(function($p1_0) {
                        Mscrm.ProductMainSystemLibraryWebResource.$5($p1_0, entityId, $v_0, calledFromGrid)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break;
        case "retirehierarchy":
            Xrm.Internal.messages.setState($v_0, entityId, 1, -1)
                .then(function($p1_0) {
                        Mscrm.ProductMainSystemLibraryWebResource.$5($p1_0, entityId, $v_0, calledFromGrid)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break;
        case "publishhierarchy":
            var $v_2 = new Xrm.Objects.EntityReference($v_0, new Microsoft.Crm.Client.Core.Framework.Guid(entityId));
            Xrm.Internal.messages.publishProductHierarchy($v_2)
                .then(function($p1_0) {
                        Mscrm.ProductMainSystemLibraryWebResource.$5($p1_0, entityId, $v_0, calledFromGrid)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback).fail(function($p1_0) {
                    Mscrm.ProductMainSystemLibraryWebResource.$B();
                    Mscrm.ProductMainSystemLibraryWebResource.$A(entityId, $v_0)
                });
            break;
        default:
            break
        }
    };
Mscrm.ProductMainSystemLibraryWebResource.$A = function($p0, $p1) {
    if ($p1) {
        var $v_0 = Xrm.Internal.getEntityCode($p1);
        Xrm.Internal.refreshParentGrid($v_0, "", $p0)
    }
};
Mscrm.ProductMainSystemLibraryWebResource.$B = function() {
    var $v_0 = Xrm.Page.context.getQueryStringParameters();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0["revise"])) {
        delete $v_0.revise;
        Xrm.Utility.openEntityForm("product", Xrm.Page.data.entity.getId(), $v_0);
        return false
    }
    return true
};
Mscrm.ProductMainSystemLibraryWebResource.$5 = function($p0, $p1, $p2, $p3) {
    var $v_0 = Boolean.parse($p3.toString());
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
        if (!$v_0) {
            Xrm.Page.data.refresh(Mscrm.ProductMainSystemLibraryWebResource.$B());
            Mscrm.ProductMainSystemLibraryWebResource.showStateCode()
        }
        Mscrm.ProductMainSystemLibraryWebResource.$A($p1, $p2)
    }
};
Mscrm.ProductMainSystemLibraryWebResource.showStateCode = function() {
    var $v_0 = Xrm.Page.getControl("header_statecode");
    $v_0.setVisible(true)
};
Mscrm.PreviousDateTimeValues = function() {};
Mscrm.PreviousDateTimeValues.prototype = {
    $1_0: null,
    get_beginDate: function() { return this.$1_0 },
    set_beginDate: function(value) {
        this.$1_0 = value;
        return value
    },
    $2_0: null,
    get_endDate: function() { return this.$2_0 },
    set_endDate: function(value) {
        this.$2_0 = value;
        return value
    }
};
Mscrm.ProductCommandActions = function() {};
Mscrm.ProductCommandActions.openPublishedProductFormUnderRevision = function() {
    var $v_0 = {};
    $v_0["revise"] = false;
    Xrm.Utility.openEntityForm("product", Xrm.Page.data.entity.getId(), $v_0)
};
Mscrm.ProductCommandActions.showPreview = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("name"),
        $v_1 = Xrm.Page.data.entity.attributes.get("statecode"),
        $v_2 = Xrm.Page.data.entity.getEntityName(),
        $v_3 = Xrm.Internal.getEntityCode($v_2),
        $v_4 = Mscrm.GlobalImported.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_DynamicProperty.aspx");
    $v_4.get_query()["ProductId"] = Xrm.Page.data.entity.getId();
    $v_4.get_query()["ProductName"] = $v_0.getValue();
    $v_4.get_query()["otc"] = $v_3;
    var $v_5 = Xrm.Page.context.getQueryStringParameters(), $v_6 = $v_5["revise"];
    if ($v_1.getValue() === 2) $v_4.get_query()["IsDraftProduct"] = true;
    else if ($v_1
        .getValue() ===
        3 &&
        Mscrm.InternalUtilities.JSTypes.isNull($v_6)) $v_4.get_query()["IsDraftProduct"] = true;
    else $v_4.get_query()["IsDraftProduct"] = false;
    $v_4.get_query()["DpPreviewMode"] = true;
    var $v_7 = new Xrm.DialogOptions;
    $v_7.height = 400;
    $v_7.width = 800;
    Xrm.Internal.openDialog($v_4.toString(), $v_7, null, null, null)
};
Mscrm.ProductCommandActions.cloneFromForm = function() {
    var $v_0 = null, $v_1 = null, $v_2;
    $v_1 = new Xrm.Objects.EntityReference("product",
        new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_1.LogicalName = "product";
    $v_0 = [$v_1, "form"];
    var $v_3 = Xrm.Page.data.entity.attributes.get("productstructure");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_3.toString())) $v_2 = parseInt($v_3.getValue().toString());
    else $v_2 = 1;
    Mscrm.ProductCommandActions.$D($v_0, $v_2)
};
Mscrm.ProductCommandActions.$D = function($p0, $p1) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_product_clone.aspx");
    $v_0.get_query()["productStructure"] = $p1;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 560;
    var $v_2 = Mscrm.ProductCommandActions.performActionAfterClone,
        $v_3 = Mscrm.CommandBarActions.createCallbackFunctionFactory($v_2, $p0);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_3)
};
Mscrm.ProductCommandActions.performActionAfterClone = function(result, product, source) {
    result &&
        Xrm.Internal.messages.cloneProduct(product).then(function($p1_0) {
                Mscrm.ProductCommandActions.$H($p1_0, product, source)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.ProductCommandActions.$H = function($p0, $p1, $p2) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        if ($p2 === "grid") Xrm.Internal.refreshParentGrid(1024, null, $p1.Id.toString());
        else if ($p2 === "form" && !Mscrm.InternalUtilities.JSTypes.isNull($p0.clonedProduct)) {
            var $v_0 = $p0.clonedProduct.Id.toString();
            Xrm.Utility.openEntityForm("product", $v_0, null);
            Xrm.Internal.refreshParentGrid(1024, null, $v_0)
        }
};
Mscrm.ProductCommandActions.isNotViewPublishedProductForm = function() {
    var $v_0 = Xrm.Page.context.getQueryStringParameters();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0["revise"])) return Boolean.parse($v_0["revise"].toString());
    return true
};
Mscrm.ProductCommandActions.isPublishVisible = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode"),
        $v_1 = Xrm.Page.data.entity.attributes.get("productstructure");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        if ($v_1.getValue() === 2 && $v_0.getValue() !== 1) return true;
        else if ($v_0.getValue() === 2 || $v_0.getValue() === 3) return true;
    return false
};
Mscrm.ProductCommandActions.isRetireVisible = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode"),
        $v_1 = Xrm.Page.data.entity.attributes.get("productstructure");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        if ($v_1.getValue() === 2 && $v_0.getValue() !== 2) return true;
        else if ($v_0.getValue() === 0 || $v_0.getValue() === 3) return true;
    return false
};
Mscrm.ProductGridCommandActions = function() {};
Mscrm.ProductGridCommandActions.cloneFromGrid = function(item, records) {
    var $v_0 = null, $v_1 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(records) && records.length === 1) {
        $v_1 = new Xrm.Objects.EntityReference("product", records[0].Id);
        $v_1.LogicalName = "product";
        $v_0 = [$v_1, "grid"];
        var $v_2;
        if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString(Mscrm.ProductMainSystemLibraryWebResource
                .getCellValue("productstructure", item, records[0].Id.toString()))
        )
            $v_2 = parseInt(Mscrm.ProductMainSystemLibraryWebResource
                .getCellValue("productstructure", item, records[0].Id.toString()));
        else $v_2 = 1;
        Mscrm.ProductCommandActions.$D($v_0, $v_2)
    }
};
Mscrm.ProductGridCommandActions.reclassify = function(gridControl, selectedRecords, entityTypeCode) {
    var $v_0 = Mscrm.InternalUtilities.GridUtilities
        .generateStandardActionUri("reclassify", entityTypeCode, selectedRecords.length);
    Mscrm.InternalUtilities.GridUtilities
        .executeStandardAction($v_0,
            selectedRecords,
            420,
            200,
            Mscrm.GridCommandActions.createRefreshGridCallback(gridControl))
};
Mscrm.ProductGridCommandActions.openBundleForm = function(item, entityTypeName, records) {
    var $v_0 = Mscrm.ProductGridCommandActions.$C(item, records);
    if (!$v_0) $v_0 = {};
    $v_0["productstructure"] = 3;
    Xrm.Utility.openEntityForm(entityTypeName, null, $v_0)
};
Mscrm.ProductGridCommandActions.openProductForm = function(item, entityTypeName, records) {
    var $v_0 = Mscrm.ProductGridCommandActions.$C(item, records);
    Xrm.Utility.openEntityForm(entityTypeName, null, $v_0)
};
Mscrm.ProductGridCommandActions.$C = function($p0, $p1) {
    var $v_0 = null;
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($p0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p1) &&
        $p1.length === 1) {
        var $v_1 = Number.parseInvariant(Mscrm.ProductMainSystemLibraryWebResource
            .getCellValue("productstructure", $p0, $p1[0].Id));
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1 !== 2) $v_0 = null;
        else {
            $v_0 = {};
            $v_0["_CreateFromId"] = $p1[0].Id.toString();
            $v_0["_CreateFromType"] = $p1[0].TypeCode
        }
    }
    return $v_0
};
Mscrm.ProductGridCommandActions.isStateRetired = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("statecode", item, records[0].Id.toString());
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0 === "Inactive") return true
    }
    return false
};
Mscrm.ProductGridCommandActions.isNotProductKit = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("iskit", item, records[0].Id.toString());
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0 === "0") return true;
        else if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return false
    }
    return true
};
Mscrm.ProductGridCommandActions.isProductOrKit = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("productstructure", item, records[0].Id);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && parseInt($v_0) === 1) return true
    }
    return false
};
Mscrm.ProductGridCommandActions.noParentProductExists = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("parentproductid", item, records[0].Id);
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return true
    }
    return false
};
Mscrm.ProductGridCommandActions.isProductFamily = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("productstructure", item, records[0].Id);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && parseInt($v_0) === 2) return true;
        else if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return false
    }
    return true
};
Mscrm.ProductGridCommandActions.isProductRetired = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("productstructure", item, records[0].Id),
            $v_1 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("statecode", item, records[0].Id);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1))
            if ($v_1 !== "Inactive" && parseInt($v_0) === 2) return true;
            else if ($v_1 === "Draft" || $v_1 === "Under Revision") return true
    }
    return false
};
Mscrm.ProductGridCommandActions.isProductNotInDraft = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("statecode", item, records[0].Id),
            $v_1 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("productstructure", item, records[0].Id);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1))
            if (parseInt($v_1) === 2 && $v_0 !== "Draft") return true;
            else if ($v_0 === "Active" || $v_0 === "Under Revision") return true
    }
    return false
};
Mscrm.ProductGridCommandActions.isProductActive = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("statecode", item, records[0].Id);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0 === "Active") return true
    }
    return false
};
Mscrm.ProductGridCommandActions.isProductRevised = function(item, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.ProductMainSystemLibraryWebResource.getCellValue("statecode", item, records[0].Id);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0 === "Under Revision") return true
    }
    return false
};
Mscrm.ProductMainSystemLibraryWebResource.registerClass("Mscrm.ProductMainSystemLibraryWebResource");
Mscrm.PreviousDateTimeValues.registerClass("Mscrm.PreviousDateTimeValues");
Mscrm.ProductCommandActions.registerClass("Mscrm.ProductCommandActions");
Mscrm.ProductGridCommandActions.registerClass("Mscrm.ProductGridCommandActions");
Mscrm.ProductMainSystemLibraryWebResource.$0 = new Mscrm.PreviousDateTimeValues;
Mscrm.ProductMainSystemLibraryWebResource.$8 = 0;
Mscrm.ProductGridCommandActions.$K = {};
Type.registerNamespace("Mscrm");
Mscrm.defaultuomid_setadditionalparams = Mscrm.ProductMainSystemLibraryWebResource.defaultUoMIdSetAdditionalParams;
Mscrm.pricelevelid_setadditionalparams = Mscrm.ProductMainSystemLibraryWebResource.priceLevelIdSetAdditionalParams;
Mscrm.Form_onload = Mscrm.ProductMainSystemLibraryWebResource.formOnLoad;
HandleNavigationVisibility = Mscrm.ProductMainSystemLibraryWebResource.HandleNavigationVisibility;
Mscrm.defaultuomscheduleid_onchange = Mscrm.ProductMainSystemLibraryWebResource.defaultUoMScheduleIdOnChange;
Mscrm.quantitydecimal_onchange = Mscrm.ProductMainSystemLibraryWebResource.quantityDecimalOnChange;
Mscrm.pricelevelid_onchange = Mscrm.ProductMainSystemLibraryWebResource.priceLevelIdOnChange;
UpdateQuantityOnHandDecimals = Mscrm.ProductMainSystemLibraryWebResource.UpdateQuantityOnHandDecimals;
Mscrm.ShowNotificationIfNeccesary = Mscrm.ProductMainSystemLibraryWebResource.ShowNotificationIfNeccesary;
Mscrm.IsBundle = Mscrm.ProductMainSystemLibraryWebResource.IsBundle;
Mscrm.IsKit = Mscrm.ProductMainSystemLibraryWebResource.IsKit;
Mscrm.IsProduct = Mscrm.ProductMainSystemLibraryWebResource.IsProduct;
Mscrm.HideUnhideSection = Mscrm.ProductMainSystemLibraryWebResource.HideUnhideSection;
Mscrm.IsProductFamily = Mscrm.ProductMainSystemLibraryWebResource.IsProductFamily;
Mscrm.validfromdate_onchange = Mscrm.ProductMainSystemLibraryWebResource.validFromDateOnChange;
Mscrm.validtodate_onchange = Mscrm.ProductMainSystemLibraryWebResource.validToDateOnChange;
Mscrm.Form_onsave = Mscrm.ProductMainSystemLibraryWebResource.formOnSave