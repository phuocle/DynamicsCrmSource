Type.registerNamespace("Mscrm");
Mscrm.ApplicationUserConstants = function() {};

function assignControl(controlName, value) {
    var $v_0 = Xrm.Page.getControl(controlName);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Xrm.Page.getAttribute(controlName).setValue(value)
}

function hideParentControl(controlName) {
    var $v_0 = Xrm.Page.getControl(controlName);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getParent();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            $v_1.setVisible(false);
            return true
        }
    }
    return false
}

function InitializeAccountInfo() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.context.isCrmOnline()) && Xrm.Page.context.isCrmOnline()) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.context
                .isOffice365()) &&
            !Xrm.Page.context.isOffice365())
            hideParentControl("domainname") && Xrm.Page.getAttribute("domainname").setRequiredLevel("none");
        else hideParentControl("windowsliveid");
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getControl("caltype")) &&
            Xrm.Page.getControl("caltype").setVisible(false)
    } else hideParentControl("windowsliveid")
}

function InitializeEmailDelivery() {
    var $v_0 = 0, $v_1 = 0;
    $v_0 && assignControl("incomingemaildeliverymethod", $v_0);
    $v_1 && assignControl("outgoingemaildeliverymethod", $v_1)
}

function domainNameOnChange() {
    var $v_0 = Xrm.Page.getAttribute("domainname");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
            var $v_2 = Xrm.Page.ui.formSelector.getCurrentItem(),
                $v_3 = Mscrm.InternalUtilities.JSTypes.isNull($v_2) ? "" : $v_2.getId();
            if ($v_3.toLowerCase() !== "d26924ef-4d80-46f7-ab1d-e6ae80a54ce8") {
                var $v_4 = Xrm.Internal.retrieveADUserProperties($v_1);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                    var $$dict_7 = $v_4;
                    for (var $$key_8 in $$dict_7) {
                        var $v_5 = { key: $$key_8, value: $$dict_7[$$key_8] }, $v_6 = Xrm.Page.getAttribute($v_5.key);
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) && $v_6.setValue($v_5.value)
                    }
                }
            }
        }
    }
}

function applicationIdOnChange() {
    var $v_0 = Xrm.Page.getAttribute("applicationid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
            var $v_2 = Xrm.Page.ui.controls.get("applicationid"),
                $v_3 = new
                    RegExp("^(\\{){0,1}[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}(\\}){0,1}$"),
                $v_4 = $v_3.test($v_1);
            if (!$v_4) {
                $v_2.setNotification(Xrm.Internal.getResourceString("LOCID_INVALID_APPLICATIONID"));
                $v_2.setFocus()
            } else $v_2.clearNotification()
        }
    }
}

function primaryemailOnChange() {
    var $v_0 = Xrm.Page.ui.formSelector.getCurrentItem(),
        $v_1 = Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? "" : $v_0.getId();
    if ($v_1.toLowerCase() === "d26924ef-4d80-46f7-ab1d-e6ae80a54ce8") {
        var $v_2 = Xrm.Page.getAttribute("internalemailaddress");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            var $v_3 = $v_2.getValue(), $v_4 = Xrm.Page.getAttribute("domainname");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_4) &&
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3) &&
                $v_4.setValue($v_3)
        }
    }
}

function $2($p0) {
    var $v_0 = $p0.getControlType();
    $v_0 !== "iframe" && $v_0 !== "webresource" && $v_0 !== "subgrid" && $p0.setDisabled(true)
}

function $1($p0) {
    var $v_0 = Xrm.Page.ui.controls.get($p0);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $2($v_0)
}

function $3() { Xrm.Page.ui.controls.forEach(function($p1_0, $p1_1) { $2($p1_0) }) }

function $0($p0, $p1) { $p0.removeOption($p1) }

function $4($p0, $p1) {
    var $v_0 = Xrm.Page.ui.tabs.get($p0);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setVisible($p1)
}

function onPageInitialized() {
    var $v_0 = Xrm.Page.context.isCrmOnline(),
        $v_1 = Xrm.Page.context.isOffice365(),
        $v_2 = Xrm.Internal.getDisabledAttributes("systemuser"),
        $v_3 = Xrm.Page.ui.formSelector.getCurrentItem(),
        $v_4 = Mscrm.InternalUtilities.JSTypes.isNull($v_3) ? "" : $v_3.getId();
    if ($v_4.toLowerCase() === "d26924ef-4d80-46f7-ab1d-e6ae80a54ce8") {
        var $v_6 = Xrm.Page.getAttribute("applicationid"), $v_7 = Xrm.Page.getAttribute("azureactivedirectoryobjectid");
        $v_6.setRequiredLevel("required");
        $v_7.setRequiredLevel("required")
    }
    if ($v_0 && $v_1 && $v_4.toLowerCase() !== "d26924ef-4d80-46f7-ab1d-e6ae80a54ce8")
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) $3();
        else if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
            for (var $$arr_7 = $v_2, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
                var $v_8 = $$arr_7[$$idx_9];
                $1($v_8);
                $v_8 === "firstname" && $1("fullname");
                $v_8 === "address1_country" && $1("address1_composite")
            }
        else {
            $1("domainname");
            $1("windowsliveid")
        }
    var $v_5 = Xrm.Page.ui.controls.get("accessmode");
    if ($v_5)
        if ($v_0 && $v_4.toLowerCase() !== "d26924ef-4d80-46f7-ab1d-e6ae80a54ce8") {
            $0($v_5, 2);
            var $v_9 = Xrm.Page.getAttribute("accessmode");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9)) {
                var $v_A = $v_9.getValue();
                $v_A !== 3 && $0($v_5, 3);
                $v_A !== 5 && $0($v_5, 5);
                ($v_A === 3 || $v_A === 5) && $2($v_5)
            } else $2($v_5)
        } else {
            $0($v_5, 3);
            $0($v_5, 4);
            $0($v_5, 5);
            var $v_B = Xrm.Internal.isMaxNoOfReadOnlyUsersReached();
            $v_B && $0($v_5, 2)
        }
    $v_0 && $v_4.toLowerCase() !== "d26924ef-4d80-46f7-ab1d-e6ae80a54ce8" && $1("setupuser");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Internal.getResourceString("IS_MOCAOFFLINE_FEATURE_AVAILABLE"))) {
        var $v_C = Xrm.Internal.getResourceString("IS_MOCAOFFLINE_FEATURE_AVAILABLE").toString() === "true";
        $4("MobileOfflineProfile_TAB", $v_C)
    }
}

Mscrm.ApplicationUserConstants.registerClass("Mscrm.ApplicationUserConstants");
Mscrm.ApplicationUserConstants.applicationUserFormId = "d26924ef-4d80-46f7-ab1d-e6ae80a54ce8";
Type.registerNamespace("Mscrm");
var _gArrDependentPicklists = null;
Mscrm.domainname_onchange = domainNameOnChange;
Mscrm.applicationid_onchange = applicationIdOnChange;
Mscrm.internalemailaddress_onchange = primaryemailOnChange;
Mscrm.accessmode_onchange = function() {
    paramParentFieldId = "accessmode";
    paramChildFieldId = "caltype";
    for (var depPickList in _gArrDependentPicklists) {
        var DependentPicklist = _gArrDependentPicklists[depPickList];
        if (DependentPicklist.ParentFieldId === paramParentFieldId &&
            DependentPicklist.ChildFieldId === paramChildFieldId) {
            var ParentFieldControl = Xrm.Page.ui.controls.get(paramParentFieldId),
                ParentField = Xrm.Page.data.entity.attributes.get(paramParentFieldId),
                ChildFieldControl = Xrm.Page.ui.controls.get(DependentPicklist.ChildFieldId),
                ChildField = Xrm.Page.data.entity.attributes.get(DependentPicklist.ChildFieldId),
                CurrentChildFieldValue = ChildField.getValue();
            if (ParentField.getValue() == null) {
                ChildField.setValue(null);
                ChildField.setSubmitMode("always");
                ChildField.fireOnChange();
                ChildFieldControl.setDisabled(true);
                return
            }
            for (var og in DependentPicklist.OptionsGroup) {
                var OptionsGroup = DependentPicklist.OptionsGroup[og];
                if (ParentField.getValue() == OptionsGroup.ParentValue) {
                    ChildFieldControl.setDisabled(false);
                    var bCurrentValueIsValid = false;
                    ChildFieldControl.clearOptions();
                    for (var i = 0; i < OptionsGroup.Options.length; i++) {
                        ChildFieldControl.addOption(OptionsGroup.Options[i]);
                        if (CurrentChildFieldValue == OptionsGroup.Options[i].value) bCurrentValueIsValid = true
                    }
                    ChildFieldControl.removeOption("");
                    if (bCurrentValueIsValid) ChildField.setValue(CurrentChildFieldValue);
                    else {
                        ChildField.setValue(OptionsGroup.Options[0].value);
                        ChildField.setSubmitMode("always")
                    }
                    OptionsGroup.Options.length == 1 && ChildFieldControl.setDisabled(true);
                    break
                }
            }
        }
    }
};
Mscrm.Form_onload = function() {
    var CRM_FORM_TYPE_CREATE = 1, CRM_FORM_TYPE_UPDATE = 2;
    InitializeAccountInfo();
    onPageInitialized();
    selectedForm = Xrm.Page.ui.formSelector
        .getCurrentItem(), selectedFormId = Mscrm.InternalUtilities.JSTypes.isNull(selectedForm)
        ? ""
        : selectedForm.getId();
    if (selectedFormId.toLowerCase() === Mscrm.ApplicationUserConstants.applicationUserFormId) return;
    switch (Xrm.Page.ui.getFormType()) {
    case CRM_FORM_TYPE_CREATE:
    case CRM_FORM_TYPE_UPDATE:
        _gArrDependentPicklists = [
            {
                ParentFieldId: "accessmode",
                ChildFieldId: "caltype",
                ChildFieldLabel: "License Type",
                OptionsGroup: [
                    { ParentValue: "0", ChildOptionValues: ["5", "6", "2", "4", "0", "3", "7", "8"] },
                    { ParentValue: "1", ChildOptionValues: ["1"] }, { ParentValue: "2", ChildOptionValues: ["2", "4"] }
                ]
            }
        ];
        for (var depPickList in _gArrDependentPicklists) {
            var DependentPicklist = _gArrDependentPicklists[depPickList],
                options = Xrm.Page.data.entity.attributes.get(DependentPicklist.ChildFieldId).getOptions();
            for (var og in DependentPicklist.OptionsGroup) {
                var OptionsGroup = DependentPicklist.OptionsGroup[og], aOptionGroup = [];
                for (var value in OptionsGroup
                    .ChildOptionValues)
                    for (var opt in options)
                        OptionsGroup.ChildOptionValues[value] == options[opt].value && aOptionGroup.push(options[opt]);
                OptionsGroup.Options = aOptionGroup
            }
        }
        for (var depPickList in _gArrDependentPicklists) {
            var DependentPicklist = _gArrDependentPicklists[depPickList];
            Xrm.Page.data.entity.attributes.get(DependentPicklist.ParentFieldId).fireOnChange()
        }
        break
    }
    if (Xrm.Page.context.client.getClient() === "Mobile") return;
    InitializeEmailDelivery()
}