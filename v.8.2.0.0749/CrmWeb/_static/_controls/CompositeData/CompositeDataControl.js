Type.registerNamespace("Mscrm");
Mscrm.CompositeDataControlUtilities = function() {};
Mscrm.CompositeDataControlUtilities.initializeNameCompositeControl = function(linkControlObj) {
    if (linkControlObj.get_flyOutDialog() && linkControlObj.get_flyOutDialog().get_options()) {
        linkControlObj.get_flyOutDialog().get_options().set_showCloseButton(false);
        linkControlObj.get_flyOutDialog().get_options().set_width(335);
        Mscrm.CompositeDataControlUtilities.$C(linkControlObj)
    }
};
Mscrm.CompositeDataControlUtilities.$C = function($p0) {
    switch (window.FullNameConventionCode) {
    case 0:
    case 1:
    case 6:
    case 7:
        var $v_0 = Mscrm.CompositeDataControlUtilities.$A($p0.get_flyOutDialog().get_id());
        if ($v_0) {
            var $v_1 = Xrm.Page.ui.controls.get($v_0.attr("id"));
            if ($v_1) {
                $v_1.setVisible(false);
                $v_0.parents("tr").first().hide();
                $p0.get_flyOutDialog().get_options().set_minHeight(100)
            }
        }
        break
    }
};
Mscrm.CompositeDataControlUtilities.$A = function($p0) {
    for (var $v_0 = null, $v_1 = $P_CRM("#" + $p0).find(".ms-crm-Inline-Chrome"), $v_2 = 0; $v_2 < $v_1.length; $v_2++)
        if ($v_1[$v_2] && $v_1[$v_2].getAttribute("id")) {
            $v_0 = $v_1[$v_2].getAttribute("id");
            if ($v_0.endsWith("middlename")) return $P_CRM($v_1[$v_2])
        }
    return null
};
Mscrm.CompositeDataControlUtilities.initializeAddressCompositeControl = function(linkControlObj) {
    if (linkControlObj.get_flyOutDialog() && linkControlObj.get_flyOutDialog().get_options()) {
        linkControlObj.get_flyOutDialog().get_options().set_showCloseButton(false);
        linkControlObj.get_flyOutDialog().get_options().set_width(335)
    }
};
Mscrm.CompositeDataControlUtilities.$B = function($p0) {
    if ($p0.startsWith("yomi")) return "yomi";
    else return ""
};
Mscrm.CompositeDataControlUtilities.$0 = function($p0) {
    var $v_0 = "", $v_1 = Xrm.Page.data.entity.attributes.get($p0);
    if (!IsNull($v_1) && !IsNull($v_1.getValue())) $v_0 = $v_1.getValue();
    return $v_0
};
Mscrm.CompositeDataControlUtilities.$9 = function($p0) {
    var $v_0 = $p0.indexOf("_");
    if ($v_0 > 0) return $p0.substring(0, $v_0) + "_";
    else throw Error.create("Invalid Argument")
};
Mscrm.CompositeDataControlUtilities.$4 = function($p0, $p1) {
    if (Xrm.Internal.isTurboForm()) return Mscrm.CompositeDataControlUtilities.$7($p0, $p1);
    var $v_0, $v_1 = null, $v_2 = new Mscrm.FormDataEntity;
    $v_2 = Mscrm.InlineEditDataService.get_formEntity();
    for (var $v_3 = 0; $v_3 < $p1.length; $v_3++) {
        $v_0 = Mscrm.InlineEditDataService.get_formEntity().get_attributes().get($p0 + $p1[$v_3]);
        if (!IsNull($v_0)) {
            $v_1 = $v_2.validateValueForCompositeField($v_0, 2);
            if (!$v_1.isValid) {
                Mscrm.ErrorStatusControl.showError($v_1.errorText);
                $v_0.get_firstAvailableControl().setFocus();
                return false
            }
        }
    }
    Mscrm.ErrorStatusControl.hide(10);
    return true
};
Mscrm.CompositeDataControlUtilities.$7 = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
        var $v_1 = Xrm.Page.data.entity.attributes.get($p0 + $p1[$v_0]);
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.controls;
            if (!$v_1.getIsValid())
                if (!IsNull($v_2) && $v_2.getLength() > 0) {
                    Mscrm.CompositeDataControlUtilities.$D($p0, $p1);
                    return false
                }
        }
    }
    return true
};
Mscrm.CompositeDataControlUtilities.$D = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
        var $v_1 = Xrm.Page.data.entity.attributes.get($p0 + $p1[$v_0]);
        if (!IsNull($v_1) && $v_1.getRequiredLevel() === "required") {
            var $v_2 = $v_1.controls;
            if (!IsNull($v_2) && $v_2.getLength() > 0) {
                $v_2.getByIndex(0).setFocus();
                return
            }
        }
    }
};
Mscrm.CompositeDataControlUtilities.$6 = function($p0) {
    for (var $v_0 = false, $v_1 = $P_CRM("#" + $p0).find(".ms-crm-Inline-Chrome"), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++
    )
        if ($v_1[$v_2] && $v_1[$v_2].getAttribute("hasError")
        ) $v_0 = $v_0 || Boolean.parse($v_1[$v_2].getAttribute("hasError").toString());
    return $v_0
};
Mscrm.CompositeDataControlUtilities.checkForComposeFullName = function(linkControlObj) {
    var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = "";
    !Mscrm.Utilities.isTurboForm() && Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_4 = Mscrm.CompositeDataControlUtilities.$B(linkControlObj.get_fieldName());
    if (Mscrm.CompositeDataControlUtilities.$4($v_4, Mscrm.CompositeDataControlUtilities.$5) &&
        !Mscrm.CompositeDataControlUtilities.$6(linkControlObj.get_flyOutDialog().get_id())) {
        $v_0 = Mscrm.CompositeDataControlUtilities.$0($v_4 + "firstname");
        $v_1 = Mscrm.CompositeDataControlUtilities.$0($v_4 + "middlename");
        $v_2 = Mscrm.CompositeDataControlUtilities.$0($v_4 + "lastname");
        $v_3 = Mscrm.InternalUtilities.FullNameGenerator
            .generateFullName(window.FullNameConventionCode, $v_0, $v_1, $v_2);
        if (Mscrm.Utilities.isTurboForm()) {
            var $v_5 = Xrm.Page.data.entity.attributes.get($v_4 + Mscrm.CompositeDataControlUtilities.$2);
            $v_5.setValue($v_3)
        } else {
            var $v_6 = Mscrm.InlineEditDataService.get_formEntity();
            $v_6.get_attributes().get($v_4 + Mscrm.CompositeDataControlUtilities.$2).setValueForCompositeField($v_3)
        }
        linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(true)
    } else linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(false)
};
Mscrm.CompositeDataControlUtilities.$8 = function($p0) {
    var $v_0 = Mscrm.CompositeDataControlUtilities.$0($p0 + "line1"),
        $v_1 = Mscrm.CompositeDataControlUtilities.$0($p0 + "line2"),
        $v_2 = Mscrm.CompositeDataControlUtilities.$0($p0 + "line3");
    return Mscrm.CompositeDataControlUtilities.combineStreetValues($v_0, $v_1, $v_2)
};
Mscrm.CompositeDataControlUtilities.combineStreetValues = function(street1, street2, street3) {
    var $v_0 = street1;
    if (!isNullOrEmptyString($v_0) && !isNullOrEmptyString(street2)) $v_0 = $v_0 + "\r\n";
    $v_0 = $v_0 + street2;
    if (!isNullOrEmptyString($v_0) && !isNullOrEmptyString(street3)) $v_0 = $v_0 + "\r\n";
    $v_0 = $v_0 + street3;
    return $v_0
};
Mscrm.CompositeDataControlUtilities.checkForComposeAddress = function(linkControlObj) {
    var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = "", $v_4 = "";
    !Mscrm.Utilities.isTurboForm() && Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_5 = "";
    $v_5 = Mscrm.CompositeDataControlUtilities.$9(linkControlObj.get_fieldName());
    if (Mscrm.CompositeDataControlUtilities.$4($v_5, Mscrm.CompositeDataControlUtilities.$3) &&
        !Mscrm.CompositeDataControlUtilities.$6(linkControlObj.get_flyOutDialog().get_id())) {
        $v_0 = Mscrm.CompositeDataControlUtilities.$8($v_5);
        $v_1 = Mscrm.CompositeDataControlUtilities.$0($v_5 + "city");
        $v_2 = Mscrm.CompositeDataControlUtilities.$0($v_5 + "stateorprovince");
        $v_3 = Mscrm.CompositeDataControlUtilities.$0($v_5 + "postalcode");
        $v_4 = Mscrm.CompositeDataControlUtilities.$0($v_5 + "country");
        Mscrm.CompositeDataControlUtilities.setComposeAddress($v_5, $v_0, $v_1, $v_2, $v_3, $v_4);
        linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(true)
    } else linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(false)
};
Mscrm.CompositeDataControlUtilities
    .setComposeAddress = function(addressPrefix, street, city, state, postalCode, country) {
        var $v_0 = new Mscrm.AddressComputation(street, city, state, postalCode, country), $v_1 = $v_0.buildAddress();
        if (Mscrm.Utilities.isTurboForm()) {
            var $v_2 = Xrm.Page.data.entity.attributes.get(addressPrefix + Mscrm.CompositeDataControlUtilities.$1);
            $v_2.setValue($v_1)
        } else {
            var $v_3 = Mscrm.InlineEditDataService.get_formEntity();
            $v_3.get_attributes().get(addressPrefix + Mscrm.CompositeDataControlUtilities.$1)
                .setValueForCompositeField($v_1)
        }
    };
Mscrm.CompositeDataControlUtilities.registerClass("Mscrm.CompositeDataControlUtilities");
Mscrm.CompositeDataControlUtilities.$2 = "fullname";
Mscrm.CompositeDataControlUtilities.$1 = "composite";
Mscrm.CompositeDataControlUtilities.$5 = ["firstname", "middlename", "lastname"];
Mscrm.CompositeDataControlUtilities.$3 = ["line1", "line2", "line3", "city", "stateorprovince", "postalcode", "country"]