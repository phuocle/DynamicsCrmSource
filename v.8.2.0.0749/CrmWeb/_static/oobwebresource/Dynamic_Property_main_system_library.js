Type.registerNamespace("Mscrm");
Mscrm.DynamicPropertyMainSystemLibraryWebResource = function() {};
Mscrm.DynamicPropertyMainSystemLibraryWebResource.form_OnLoad = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("dynamicpropertyid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setSubmitMode("never");
    if (!Mscrm.DynamicPropertyMainSystemLibraryWebResource.$8) {
        var $v_1 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.saveDynamicProperty;
        Xrm.Page.data.entity.addOnSave($v_1);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource.$8 = true
    }
    Mscrm.DynamicPropertyMainSystemLibraryWebResource.loadMetadataMinMaxValues()
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource.loadMetadataMinMaxValues = function() {
    Mscrm.DynamicPropertyMainSystemLibraryWebResource.$1 = Xrm.Page.data.entity.attributes.get("defaultvaluedecimal")
        .getMax();
    Mscrm.DynamicPropertyMainSystemLibraryWebResource.$2 = Xrm.Page.data.entity.attributes.get("defaultvaluedecimal")
        .getMin();
    Mscrm.DynamicPropertyMainSystemLibraryWebResource.$6 = Xrm.Page.data.entity.attributes.get("defaultvaluedouble")
        .getMin();
    Mscrm.DynamicPropertyMainSystemLibraryWebResource.$3 = Xrm.Page.data.entity.attributes.get("defaultvaluedouble")
        .getMax();
    Mscrm.DynamicPropertyMainSystemLibraryWebResource.$5 = Xrm.Page.data.entity.attributes.get("defaultvalueinteger")
        .getMin();
    Mscrm.DynamicPropertyMainSystemLibraryWebResource.$4 = Xrm.Page.data.entity.attributes.get("defaultvalueinteger")
        .getMax()
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource.saveDynamicProperty = function(context) {
    var $v_0 = true,
        $v_1 = true,
        $v_2 = true,
        $v_3 = Xrm.Page.data.entity.attributes.get("datatype"),
        $v_4 = $v_3.getValue();
    if ($v_4 === 1) {
        $v_0 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateMinMaxValues("minvaluedecimal", "maxvaluedecimal", "defaultvaluedecimal", context);
        $v_1 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValue("minvaluedecimal", "maxvaluedecimal", "defaultvaluedecimal", context);
        $v_2 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValueExistsForReadOnlyAndRequiredProperty("defaultvaluedecimal", context)
    } else if ($v_4 === 2) {
        $v_0 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateMinMaxValues("minvaluedouble", "maxvaluedouble", "defaultvaluedouble", context);
        $v_1 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValue("minvaluedouble", "maxvaluedouble", "defaultvaluedouble", context);
        $v_2 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValueExistsForReadOnlyAndRequiredProperty("defaultvaluedouble", context)
    } else if ($v_4 === 4) {
        $v_0 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateMinMaxValues("minvalueinteger", "maxvalueinteger", "defaultvalueinteger", context);
        $v_1 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValue("minvalueinteger", "maxvalueinteger", "defaultvalueinteger", context);
        $v_2 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValueExistsForReadOnlyAndRequiredProperty("defaultvalueinteger", context)
    } else if ($v_4 === 3) {
        $v_1 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultStringLength("maxlengthstring", "defaultvaluestring", context);
        $v_2 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValueExistsForReadOnlyAndRequiredProperty("defaultvaluestring", context)
    } else if (!$v_4)
        $v_2 = Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValueExistsForReadOnlyAndRequiredProperty("defaultvalueoptionset", context);
    if (!($v_0 && $v_1 && $v_2)) {
        context.getEventArgs().preventDefault();
        return
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) return;
    context.getEventArgs().preventDefault();
    if (!Mscrm.DynamicPropertyMainSystemLibraryWebResource.$7) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource.$7 = true;
        var $v_5 = new Xrm.LookupObject, $v_6 = Xrm.Page.getAttribute("regardingobjectid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6)) {
            var $v_A = $v_6.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A)) $v_5 = $v_A[0]
        }
        var $v_7 = Xrm.Page.data.entity.getEntityName(),
            $v_8 = {},
            $v_9 = Mscrm.SdkSerializationHelper
                .getEntityObject($v_7, Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_8);
        Xrm.Internal.messages.create($v_9).then(function($p1_0) {
                var $v_B = $p1_0,
                    $v_C = $v_B.id.toString(),
                    $v_D = Xrm.Page.data.entity.attributes
                        .get("dynamicpropertyid");
                !Mscrm.InternalUtilities.JSTypes.isNull($v_D) && $v_D.setValue($v_C);
                if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
                    var $v_E = Xrm.Page.getAttribute("name");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_E) &&
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_E.getValue()) &&
                        Xrm.Internal.setFormEntityName($v_E.getValue().toString())
                }
                Xrm.Page.data.setFormDirty(false);
                Xrm.Page.data.refresh(false);
                if (Mscrm.CommandBarActions.isOutlookClient()) {
                    var $v_F = Xrm.Internal.getEntityCode("dynamicproperty");
                    Xrm.Internal.refreshParentGrid($v_F, "", $v_C)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource.onDynamicProperty_DataType_Change = function(context) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("datatype"), $v_1 = Xrm.Page.ui.controls.get("regardingobjectid");
    $v_1.setDisabled(true);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_2 = false;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) $v_2 = !$v_0.getValue();
        var $v_3 = $v_0.getValue() === 1,
            $v_4 = $v_0.getValue() === 2,
            $v_5 = $v_0.getValue() === 3,
            $v_6 = $v_0.getValue() === 4;
        Mscrm.DynamicPropertyMainSystemLibraryWebResource.setOptionSetDataTypeRelatedControlsVisibility($v_2);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDecimalDataTypeControlsVisibilityAndMandatoryFields($v_3, context);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDoubleDataTypeControlsVisibilityAndMandatoryFields($v_4, context);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setIntegerDataTypeControlsVisibilityAndMandatoryFields($v_6, context);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setStringDataTypeControlsVisibilityAndMandatoryFields($v_5, context);
        if ($v_4) {
            var $v_7 = Xrm.Page.data.entity.attributes.get("precision");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7)) {
                var $v_8 = $v_7.getValue();
                !Mscrm.InternalUtilities.JSTypes.isNull($v_8) &&
                    Mscrm.DynamicPropertyMainSystemLibraryWebResource.updateDoubleDataPrecision()
            }
        }
    }
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource.updateDoubleDataPrecision = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("precision");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) $v_1 = 0;
        var $v_2 = Xrm.Page.data.entity.attributes.get("defaultvaluedouble"),
            $v_3 = Xrm.Page.data.entity.attributes.get("minvaluedouble"),
            $v_4 = Xrm.Page.data.entity.attributes.get("maxvaluedouble"),
            $v_5 = Xrm.Page.ui.controls.get("defaultvaluedouble"),
            $v_6 = $v_2.getValue(),
            $v_7 = $v_3.getValue(),
            $v_8 = $v_4.getValue();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setPrecision($v_1);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setPrecision($v_1);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setPrecision($v_1);
        if (!(Mscrm.InternalUtilities.JSTypes.isNull($v_7) || Mscrm.InternalUtilities.JSTypes.isNull($v_8)))
            if ($v_6 < $v_7 || $v_6 > $v_8)
                Mscrm.DynamicPropertyMainSystemLibraryWebResource
                    .$E("minvaluedouble", "maxvaluedouble", "defaultvaluedouble", $v_5);
            else $v_5.clearNotifications()
    }
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setOptionSetDataTypeRelatedControlsVisibility = function(optionSetEnabled) {
        var $v_0 = Xrm.Page.ui.tabs.get("dynamic_property_properties"),
            $v_1 = $v_0.getSections(),
            $v_2 = $v_1.get("dynamic_property_properties_3"),
            $v_3 = Xrm.Page.ui.controls.get("defaultvalueoptionset");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setVisible(optionSetEnabled);
        var $v_4 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$9();
        if ($v_4 && !Mscrm.InternalUtilities.JSTypes.isNull($v_3)) $v_3.setVisible(optionSetEnabled);
        else {
            var $v_5 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$D;
            Xrm.Page.data.addOnLoad($v_5)
        }
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$D = function($p0) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("datatype");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = false;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) $v_1 = !$v_0.getValue();
        var $v_2 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$9();
        if ($v_2) {
            var $v_3 = Xrm.Page.ui.controls.get("defaultvalueoptionset");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setVisible($v_1)
        }
    }
    Xrm.Page.data.removeOnLoad(Mscrm.DynamicPropertyMainSystemLibraryWebResource.$D)
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_MinMaxValueDouble_Change = function(context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateMinMaxValues("minvaluedouble", "maxvaluedouble", "defaultvaluedouble", context)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_MinMaxValueDecimal_Change = function(context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateMinMaxValues("minvaluedecimal", "maxvaluedecimal", "defaultvaluedecimal", context)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_MinMaxValueInteger_Change = function(context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateMinMaxValues("minvalueinteger", "maxvalueinteger", "defaultvalueinteger", context)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DefaultValueInteger_Change = function(context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValue("minvalueinteger", "maxvalueinteger", "defaultvalueinteger", context)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DefaultValueDecimal_Change = function(context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValue("minvaluedecimal", "maxvaluedecimal", "defaultvaluedecimal", context)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DefaultValueDouble_Change = function(context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultValue("minvaluedouble", "maxvaluedouble", "defaultvaluedouble", context)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DeaultValueString_Change = function(context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .validateDefaultStringLength("maxlengthstring", "defaultvaluestring", context)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .precision_onChange = function() { Mscrm.DynamicPropertyMainSystemLibraryWebResource.updateDoubleDataPrecision() };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .validateMinMaxValues = function(minattr, maxattr, defaultattr, context) {
        var $v_0 = Xrm.Page.data.entity.attributes.get(minattr),
            $v_1 = $v_0.getValue(),
            $v_2 = Xrm.Page.data.entity.attributes.get(maxattr),
            $v_3 = $v_2.getValue(),
            $v_4 = 0,
            $v_5 = 0;
        switch (defaultattr) {
        case "defaultvalueinteger":
            $v_4 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$4;
            $v_5 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$5;
            break;
        case "defaultvaluedecimal":
            $v_4 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$1;
            $v_5 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$2;
            break;
        case "defaultvaluedouble":
            $v_4 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$3;
            $v_5 = Mscrm.DynamicPropertyMainSystemLibraryWebResource.$6;
            break
        }
        if (!(Mscrm.InternalUtilities.JSTypes.isNull($v_1) || Mscrm.InternalUtilities.JSTypes.isNull($v_3)))
            if ($v_3 < $v_1) {
                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_WARN_MINIMUMVALUE"), null);
                !Mscrm.InternalUtilities.JSTypes.isNull(context.getEventArgs()) &&
                    context.getEventArgs().preventDefault();
                return false
            }
        return true
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$E = function($p0, $p1, $p2, $p3) {
    $p3.clearNotifications();
    var $v_0 = Xrm.Page.data.entity.attributes.get($p0),
        $v_1 = Xrm.Page.data.entity.attributes.get($p1),
        $v_2 = Xrm.Page.data.entity.attributes.get($p2);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        var $v_3 = "";
        if ($v_0.getAttributeType() === "integer")
            $v_3 = String.format(Xrm.Internal.getResourceString("LOCID_NUMBER_RANGE_MASK"),
                $v_0.getValue(),
                $v_1.getValue());
        else if ($v_0
            .getAttributeType() ===
            "decimal" ||
            $v_0.getAttributeType() === "double")
            $v_3 = String.format(Xrm.Internal.getResourceString("LOCID_FLOAT_RANGE_MASK"),
                $v_0.getValue(),
                $v_1.getValue());
        $p3.setNotification($v_3, $p2)
    }
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .validateDefaultValue = function(minattr, maxattr, defaultattr, context) {
        var $v_0 = Xrm.Page.data.entity.attributes.get(minattr),
            $v_1 = $v_0.getValue(),
            $v_2 = Xrm.Page.data.entity.attributes.get(maxattr),
            $v_3 = $v_2.getValue(),
            $v_4 = Xrm.Page.data.entity.attributes.get(defaultattr),
            $v_5 = $v_4.getValue(),
            $v_6 = Xrm.Page.ui.controls.get(defaultattr);
        if (!(Mscrm.InternalUtilities.JSTypes.isNull($v_1) ||
                Mscrm.InternalUtilities.JSTypes.isNull($v_3) ||
                Mscrm.InternalUtilities.JSTypes.isNull($v_5)) &&
            ($v_5 < $v_1 || $v_3 < $v_5)) {
            Mscrm.DynamicPropertyMainSystemLibraryWebResource.$E(minattr, maxattr, defaultattr, $v_6);
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_WARN_DEFAULTVALUE"), null);
            !Mscrm.InternalUtilities.JSTypes.isNull(context.getEventArgs()) && context.getEventArgs().preventDefault();
            return false
        }
        $v_6.clearNotifications();
        return true
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .validateDefaultStringLength = function(maxlengthstring, defaultvalue, context) {
        var $v_0 = Xrm.Page.data.entity.attributes.get(maxlengthstring),
            $v_1 = $v_0.getValue(),
            $v_2 = Xrm.Page.data.entity.attributes.get(defaultvalue),
            $v_3 = $v_2.getValue();
        if (!(Mscrm.InternalUtilities.JSTypes.isNull($v_1) || Mscrm.InternalUtilities.JSTypes.isNull($v_3)))
            if ($v_3.length > $v_1) {
                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_WARN_DEFAULTSTRING"), null);
                !Mscrm.InternalUtilities.JSTypes.isNull(context.getEventArgs()) &&
                    context.getEventArgs().preventDefault();
                return false
            }
        return true
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .validateDefaultValueExistsForReadOnlyAndRequiredProperty = function(defaultValueAttribute, context) {
        var $v_0 = Xrm.Page.data.entity.attributes.get(defaultValueAttribute),
            $v_1 = $v_0.getValue(),
            $v_2 = Xrm.Page.data.entity.attributes.get("isreadonly"),
            $v_3 = $v_2.getValue(),
            $v_4 = Xrm.Page.data.entity.attributes.get("isrequired"),
            $v_5 = $v_4.getValue(),
            $v_6 = Xrm.Page.data.entity.attributes.get("datatype"),
            $v_7 = $v_6.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_5) &&
            $v_3 &&
            $v_5)
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                if (!$v_7 && Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
                    Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_WARN_OPTIONSET"), null);
                    return false
                }
                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_WARN_READONLYREQUIRED"), null);
                !Mscrm.InternalUtilities.JSTypes.isNull(context.getEventArgs()) &&
                    context.getEventArgs().preventDefault();
                return false
            }
        return true
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setIntegerDataTypeControlsVisibilityAndMandatoryFields = function(integerEnabled, context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("defaultvalueinteger", integerEnabled, null, null, false);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("maxvalueinteger",
                integerEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$4,
                "max",
                true);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("minvalueinteger",
                integerEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$5,
                "min",
                true);
        if (integerEnabled)
            Mscrm.DynamicPropertyMainSystemLibraryWebResource
                .validateDefaultValue("minvalueinteger", "maxvalueinteger", "defaultvalueinteger", context);
        else {
            Xrm.Page.ui.controls.get("defaultvalueinteger").clearNotifications();
            Xrm.Page.ui.controls.get("maxvalueinteger").clearNotifications();
            Xrm.Page.ui.controls.get("minvalueinteger").clearNotifications()
        }
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setDecimalDataTypeControlsVisibilityAndMandatoryFields = function(decimalEnabled, context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("defaultvaluedecimal", decimalEnabled, null, null, false);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("maxvaluedecimal",
                decimalEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$1,
                "max",
                true);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("minvaluedecimal",
                decimalEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$2,
                "min",
                true);
        if (decimalEnabled)
            Mscrm.DynamicPropertyMainSystemLibraryWebResource
                .validateDefaultValue("minvaluedecimal", "maxvaluedecimal", "defaultvaluedecimal", context);
        else {
            Xrm.Page.ui.controls.get("defaultvaluedecimal").clearNotifications();
            Xrm.Page.ui.controls.get("maxvaluedecimal").clearNotifications();
            Xrm.Page.ui.controls.get("minvaluedecimal").clearNotifications()
        }
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setDoubleDataTypeControlsVisibilityAndMandatoryFields = function(doubleEnabled, context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("defaultvaluedouble", doubleEnabled, null, null, false);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("maxvaluedouble",
                doubleEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$3,
                "max",
                true);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("minvaluedouble",
                doubleEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$B,
                "min",
                true);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("precision",
                doubleEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$C,
                null,
                true);
        if (doubleEnabled)
            Mscrm.DynamicPropertyMainSystemLibraryWebResource
                .validateDefaultValue("minvaluedouble", "maxvaluedouble", "defaultvaluedouble", context);
        else {
            Xrm.Page.ui.controls.get("defaultvaluedouble").clearNotifications();
            Xrm.Page.ui.controls.get("maxvaluedouble").clearNotifications();
            Xrm.Page.ui.controls.get("minvaluedouble").clearNotifications();
            Xrm.Page.ui.controls.get("precision").clearNotifications()
        }
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setStringDataTypeControlsVisibilityAndMandatoryFields = function(stringEnabled, context) {
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("defaultvaluestring", stringEnabled, null, null, false);
        Mscrm.DynamicPropertyMainSystemLibraryWebResource
            .setDataTypesControlsVisibilityAndMandatoryFields("maxlengthstring",
                stringEnabled,
                Mscrm.DynamicPropertyMainSystemLibraryWebResource.$A,
                "max",
                true)
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setDataTypesControlsVisibilityAndMandatoryFields =
    function(id, dataTypeEnabled, defaultValue, valueType, isMandatoryRequired) {
        var $v_0 = Xrm.Page.ui.controls.get(id);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_1 = Xrm.Page.data.entity.attributes.get(id);
            $v_0.setVisible(dataTypeEnabled);
            if (dataTypeEnabled) {
                var $v_2 = $v_1.getValue();
                Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) && $v_1.setValue(defaultValue);
                isMandatoryRequired && $v_1.setRequiredLevel("required")
            } else {
                $v_1.setRequiredLevel("none");
                $v_1.setValue(null)
            }
        }
    };
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$9 = function() {
    var $v_0 = "{00000000-0000-0000-0000-000000000000}",
        $v_1 = Xrm.Page.data.entity.getId(),
        $v_2 = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1) && $v_1 !== $v_0;
    return $v_2
};
Mscrm.DynamicPropertyCommandActions = function() {};
Mscrm.DynamicPropertyCommandActions.overrideDynamicPropertyCommandAction = function(dynamicPropertyId, action) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_overrideDynamicProperty.aspx?action=" +
        CrmEncodeDecode.CrmUrlEncode(action));
    Mscrm.DynamicPropertyCommandActions.$0 = Xrm.Page.context.getQueryStringParameters();
    var $v_1 = Mscrm.DynamicPropertyCommandActions.$0["_CreateFromId"].toString(), $v_2 = new Xrm.DialogOptions;
    $v_2.width = 470;
    $v_2.height = 280;
    var $v_3 = [dynamicPropertyId, $v_1], $v_4 = null;
    switch (action) {
    case "override":
        $v_4 = Mscrm.CommandBarActions
            .createCallbackFunctionFactory(Mscrm.DynamicPropertyCommandActions
                .overrideDynamicPropertyCommandActionSuccess,
                $v_3);
        break;
    case "overwrite":
        $v_4 = Mscrm.CommandBarActions
            .createCallbackFunctionFactory(Mscrm.DynamicPropertyCommandActions
                .overwriteDynamicPropertyCommandActionSuccess,
                $v_3);
        break
    }
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, $v_4)
};
Mscrm.DynamicPropertyCommandActions.overrideDynamicPropertyCommandActionSuccess = function($p0, $p1, $p2) {
    if ($p0) {
        var $v_0 = Xrm.Page.data.entity.getEntityName(),
            $v_1 = null,
            $v_2 = {},
            $v_3 = Mscrm.SdkSerializationHelper
                .getEntityObject($v_0, Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_2),
            $v_4 = new Xrm.Objects.EntityReference("dynamicproperty",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p1));
        if (!IsNull(Mscrm.DynamicPropertyCommandActions
            .$0["_CreateFromType"]))
            $v_1 = new Xrm.Objects.EntityReference(parseInt(Mscrm.DynamicPropertyCommandActions.$0["_CreateFromType"]
                    .toString()) ===
                1024
                ? "product"
                : "productassociation",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p2));
        $v_3.setValue("basedynamicpropertyid", $v_4);
        $v_3.setValue("regardingobjectid", $v_1);
        $v_3.get_changedFieldNames().add("basedynamicpropertyid");
        Xrm.Internal.messages.create($v_3).then(function($p1_0) { Mscrm.DynamicPropertyCommandActions.$G($p1_0, $p2) },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.DynamicPropertyCommandActions.$G = function($p0, $p1) {
    if (!IsNull($p0.id)) {
        var $v_0 = {};
        $v_0["_skipNavigateBackCount"] = 1;
        $v_0["_canDelete"] = true;
        $v_0["_canOverride"] = false;
        $v_0["_isReadOnly"] = false;
        $v_0["_CreateFromId"] = $p1;
        $v_0["_CreateFromType"] = Mscrm.DynamicPropertyCommandActions.$0["_CreateFromType"];
        Xrm.Utility.openEntityForm("dynamicproperty", $p0.id.toString(), $v_0)
    }
};
Mscrm.DynamicPropertyCommandActions.overwriteDynamicPropertyCommandActionSuccess = function($p0, $p1, $p2) {
    if ($p0) {
        var $v_0 = Xrm.Page.data.entity.getEntityName(),
            $v_1 = {},
            $v_2 = null,
            $v_3 = Mscrm.SdkSerializationHelper
                .getEntityObject($v_0, Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_1),
            $v_4 = new Xrm.Objects.EntityReference("dynamicproperty",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p1));
        if (!IsNull(Mscrm.DynamicPropertyCommandActions
            .$0["_CreateFromType"]))
            $v_2 = new Xrm.Objects.EntityReference(parseInt(Mscrm.DynamicPropertyCommandActions.$0["_CreateFromType"]
                    .toString()) ===
                1024
                ? "product"
                : "productassociation",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p2));
        $v_3.setValue("basedynamicpropertyid", $v_4);
        $v_3.setValue("regardingobjectid", $v_2);
        !$v_3.get_changedFieldNames().contains("basedynamicpropertyid") &&
            $v_3.get_changedFieldNames().add("basedynamicpropertyid");
        Xrm.Internal.messages.create($v_3).then(function($p1_0) { Mscrm.DynamicPropertyCommandActions.$H($p1_0, $p2) },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.DynamicPropertyCommandActions.$H = function($p0, $p1) {
    if (!IsNull($p0)) {
        var $v_0 = {};
        $v_0["_skipNavigateBackCount"] = 1;
        $v_0["_canDelete"] = true;
        $v_0["_canOverride"] = false;
        $v_0["_canOverwrite"] = false;
        $v_0["_isReadOnly"] = false;
        $v_0["_CreateFromId"] = $p1;
        $v_0["_CreateFromType"] = Mscrm.DynamicPropertyCommandActions.$0["_CreateFromType"];
        Xrm.Utility.openEntityForm("dynamicproperty", $p0.id.toString(), $v_0)
    }
};
Mscrm.DynamicPropertyCommandActions.canOverrideDynamicProperty = function() {
    var $v_0 = false, $v_1 = Xrm.Page.context.getQueryStringParameters(), $v_2 = $v_1["_canOverride"];
    if (!IsNull($v_2)) $v_0 = Boolean.parse($v_2);
    return $v_0
};
Mscrm.DynamicPropertyCommandActions.canOverwriteDynamicProperty = function() {
    var $v_0 = false, $v_1 = null, $v_2 = Xrm.Page.context.getQueryStringParameters();
    if (!IsNull($v_1 = $v_2["_canOverwrite"])) $v_0 = Boolean.parse($v_1);
    return $v_0
};
Mscrm.DynamicPropertyCommandActions.canDeleteDynamicProperty = function() {
    var $v_0 = false, $v_1 = Xrm.Page.context.getQueryStringParameters();
    if (IsNull($v_1["_canDelete"])) $v_0 = true;
    else $v_0 = Boolean.parse($v_1["_canDelete"].toString());
    return $v_0
};
Mscrm.DynamicPropertyCommandActions.editProperties = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("productid"),
        $v_1 = Xrm.Page.data.entity.getEntityName(),
        $v_2 = $v_0.getValue()[0].name.toString(),
        $v_3 = Mscrm.DynamicPropertyCommandActions.$F($v_1),
        $v_4 = Xrm.Page.data.entity.attributes.get($v_3 + "id"),
        $v_5 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    if ($v_4.getValue() && $v_4.getValue().length > 0)
        $v_5 = new Microsoft.Crm.Client.Core.Framework.Guid($v_4.getValue()[0].id.toString());
    var $v_6 = ["statecode"];
    Xrm.Internal.messages.retrieve($v_3, $v_5.toString(), $v_6).then(function($p1_0) {
            var $v_7 = $p1_0.entity, $v_8 = $v_7.getValue("statecode"), $v_9 = $v_8.get_value(), $v_A = false;
            if ($v_9 !== 0) $v_A = true;
            var $v_B = Xrm.Internal.getEntityCode($v_1),
                $v_C = Mscrm.GlobalImported.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_DynamicProperty.aspx");
            $v_C.get_query()["ProductId"] = Xrm.Page.data.entity.getId();
            $v_C.get_query()["ProductName"] = $v_2;
            $v_C.get_query()["IsDraftProduct"] = false;
            $v_C.get_query()["DpPreviewMode"] = false;
            $v_C.get_query()["otc"] = $v_B;
            $v_C.get_query()["IsReadOnly"] = $v_A;
            var $v_D = new Xrm.DialogOptions;
            $v_D.height = 400;
            $v_D.width = 800;
            Xrm.Internal.openDialog($v_C.toString(), $v_D, null, null, null)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.DynamicPropertyCommandActions.$F = function($p0) {
    switch ($p0) {
    case "opportunityproduct":
        return "opportunity";
    case "quotedetail":
        return "quote";
    case "salesorderdetail":
        return "salesorder";
    case "invoicedetail":
        return "invoice";
    default:
        return null
    }
};
Mscrm.DynamicPropertyMainSystemLibraryWebResource.registerClass("Mscrm.DynamicPropertyMainSystemLibraryWebResource");
Mscrm.DynamicPropertyCommandActions.registerClass("Mscrm.DynamicPropertyCommandActions");
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$7 = false;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$8 = false;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$2 = 0;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$1 = 0;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$6 = 0;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$3 = 0;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$5 = 0;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$4 = 0;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$C = 2;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$A = 100;
Mscrm.DynamicPropertyMainSystemLibraryWebResource.$B = 0;
Mscrm.DynamicPropertyCommandActions.$0 = null;
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.DynamicPropertyMainSystemLibraryWebResource.form_OnLoad;
loadMetadataMinMaxValues = Mscrm.DynamicPropertyMainSystemLibraryWebResource.loadMetadataMinMaxValues;
saveDynamicProperty = Mscrm.DynamicPropertyMainSystemLibraryWebResource.saveDynamicProperty;
Mscrm.onDynamicProperty_DataType_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DataType_Change;
SetOptionSetDataTypeRelatedControlsVisibility = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setOptionSetDataTypeRelatedControlsVisibility;
SetIntegerDataTypeRelatedControlsVisibility = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setIntegerDataTypeRelatedControlsVisibility;
SetDecimalDataTypeRelatedControlsVisibility = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setDecimalDataTypeRelatedControlsVisibility;
SetDoubleDataTypeRelatedControlsVisibility = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setDoubleDataTypeRelatedControlsVisibility;
SetStringDataTypeRelatedControlsVisibility = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .setStringDataTypeRelatedControlsVisibility;
Mscrm.precision_onchange = Mscrm.DynamicPropertyMainSystemLibraryWebResource.precision_onChange;
UpdateDoubleDataPrecision = Mscrm.DynamicPropertyMainSystemLibraryWebResource.updateDoubleDataPrecision;
Mscrm.onDynamicProperty_MinMaxValueDouble_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_MinMaxValueDouble_Change;
Mscrm.onDynamicProperty_MinMaxValueDecimal_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_MinMaxValueDecimal_Change;
Mscrm.onDynamicProperty_MinMaxValueInteger_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_MinMaxValueInteger_Change;
Mscrm.onDynamicProperty_DefaultValueInteger_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DefaultValueInteger_Change;
Mscrm.onDynamicProperty_DefaultValueDecimal_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DefaultValueDecimal_Change;
Mscrm.onDynamicProperty_DefaultValueDouble_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DefaultValueDouble_Change;
Mscrm.onDynamicProperty_DeaultValueString_Change = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .onDynamicProperty_DeaultValueString_Change;
ValidateMinMaxValues = Mscrm.DynamicPropertyMainSystemLibraryWebResource.validateMinMaxValues;
ValidateDefaultValue = Mscrm.DynamicPropertyMainSystemLibraryWebResource.validateDefaultValue;
ValidateDefaultStringLength = Mscrm.DynamicPropertyMainSystemLibraryWebResource.validateDefaultStringLength;
ValidateDefaultValueExistsForReadOnlyAndRequiredProperty = Mscrm.DynamicPropertyMainSystemLibraryWebResource
    .validateDefaultValueExistsForReadOnlyAndRequiredProperty