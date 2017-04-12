Type.registerNamespace("Mscrm");
Mscrm.Contract_main_system_library = function() {};
Mscrm.Contract_main_system_library.get_activeOn = function() {
    return Xrm.Page.ui.controls.get("activeon").getAttribute()
};
Mscrm.Contract_main_system_library.get_expiresOn = function() {
    return Xrm.Page.ui.controls.get("expireson").getAttribute()
};
Mscrm.Contract_main_system_library.get_billingStartOn = function() {
    return Xrm.Page.ui.controls.get("billingstarton").getAttribute()
};
Mscrm.Contract_main_system_library.get_billingEndOn = function() {
    return Xrm.Page.ui.controls.get("billingendon").getAttribute()
};
Mscrm.Contract_main_system_library.serviceAddressOnClick = function() {};
Mscrm.Contract_main_system_library.billToAddressOnClick = function() {};
Mscrm.Contract_main_system_library.serviceAddressSetAdditionalParams1 = function(context) {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        var $v_1 = Xrm.Page.ui.controls.get("serviceaddress");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = Mscrm.InternalUtilities.Utilities.createAndFilterXmlString("customerid", "eq", $v_0);
            $v_1.addCustomFilter($v_2, "contract")
        }
    }
};
Mscrm.Contract_main_system_library.serviceAddressSetAdditionalParams0 = function(context) {
    var $v_0 = true, $v_1 = Xrm.Page.data.entity.getId();
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
        var $v_2 = Xrm.Page.ui.controls.get("serviceaddress");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            var $v_5 = Mscrm.InternalUtilities.Utilities.createAndFilterXmlString("customerid", "eq", $v_1);
            $v_2.addCustomFilter($v_5, "contract")
        }
        var $v_3 = Xrm.Page.data.entity.attributes.get("customerid"), $v_4 = $v_3.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
            var $v_6 = '<filter><filter><condition attribute="parentId" operator="eq" value="';
            $v_6 += CrmEncodeDecode.CrmXmlAttributeEncode($v_4[0].id);
            $v_6 += '"/></filter><filter><condition attribute="parentType" operator="eq" value="';
            $v_6 += CrmEncodeDecode.CrmXmlAttributeEncode($v_4[0].name);
            $v_6 += "/></filter></filter>";
            $v_2.setParameter("parentId", $v_4[0].id);
            var $v_7 = Xrm.Internal.getEntityCode($v_4[0].entityType).toString();
            $v_2.setParameter("parentType", $v_7);
            $v_2.addCustomFilter($v_6, "contract")
        } else {
            $v_2.setNotification(Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER"));
            $v_0 = false
        }
    }
    return $v_0
};
Mscrm.Contract_main_system_library.billingCustomerIdOnChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("billingcustomerid"),
        $v_1 = Xrm.Page.ui.controls.get("billtoaddress");
    $v_1.setDisabled(Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()))
};
Mscrm.Contract_main_system_library.billToAddressSetAdditionalParams = function(context) {
    var $v_0 = true, $v_1 = Xrm.Page.data.entity.getId();
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
        var $v_2 = Xrm.Page.ui.controls.get("billtoaddress");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            var $v_5 = Mscrm.InternalUtilities.Utilities.createAndFilterXmlString("billingcustomerid", "eq", $v_1);
            $v_2.addCustomFilter($v_5, "contract")
        }
        var $v_3 = Xrm.Page.data.entity.attributes.get("billingcustomerid"), $v_4 = $v_3.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
            $v_2.setParameter("parentId", $v_4[0].id);
            var $v_6 = Xrm.Internal.getEntityCode($v_4[0].entityType).toString();
            $v_2.setParameter("parentType", $v_6)
        } else {
            $v_2.setNotification(Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_BT_CST"));
            $v_0 = false
        }
    }
    return $v_0
};
Mscrm.Contract_main_system_library.formOnLoad = function() {
    Mscrm.Contract_main_system_library.$6(Mscrm.Contract_main_system_library.get_activeOn());
    Mscrm.Contract_main_system_library.$6(Mscrm.Contract_main_system_library.get_expiresOn());
    Mscrm.Contract_main_system_library.$1.$4_0 = Mscrm.Contract_main_system_library.get_activeOn().getValue();
    Mscrm.Contract_main_system_library.$1.$5_0 = Mscrm.Contract_main_system_library.get_expiresOn().getValue();
    Mscrm.Contract_main_system_library.$0.$3_0 = Mscrm.Contract_main_system_library.get_billingStartOn().getValue();
    Mscrm.Contract_main_system_library.$0.$2_0 = Mscrm.Contract_main_system_library.get_billingEndOn().getValue()
};
Mscrm.Contract_main_system_library.$6 = function($p0) {
    !Mscrm.InternalUtilities.JSTypes.isNull($p0.getValue()) &&
        $p0.setValue(Mscrm.Contract_main_system_library.cloneDate($p0.getValue()))
};
Mscrm.Contract_main_system_library.customerIdOnChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("serviceaddress");
    $v_0.setValue([]);
    var $v_1 = Xrm.Page.ui.controls.get("serviceaddress"), $v_2 = Xrm.Page.data.entity.attributes.get("customerid");
    $v_1.setDisabled(Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue()));
    var $v_3 = Xrm.Page.data.entity.attributes.get("billingcustomerid");
    Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue()) && $v_3.setValue($v_2.getValue())
};
Mscrm.Contract_main_system_library.serviceAddressOnChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("customerid"),
        $v_1 = Xrm.Page.data.entity.attributes.get("billingcustomerid"),
        $v_2 = $v_0.getValue(),
        $v_3 = $v_1.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !Mscrm.InternalUtilities.JSTypes.isNull($v_3))
        if ($v_2 === $v_3) {
            var $v_4 = Xrm.Page.data.entity.attributes.get("billtoaddress"), $v_5 = $v_4.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5)) {
                var $v_6 = Xrm.Page.data.entity.attributes.get("serviceaddress"), $v_7 = $v_6.getValue();
                $v_4.setValue($v_7)
            }
        }
};
Mscrm.Contract_main_system_library.activeOnOnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$1
        .$4_0))
        Mscrm.Contract_main_system_library.$1.$4_0 = Mscrm.Contract_main_system_library.get_activeOn().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$1
        .$5_0))
        Mscrm.Contract_main_system_library.$1.$5_0 = Mscrm.Contract_main_system_library.get_expiresOn().getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.get_expiresOn()) &&
        Mscrm.CommandBarActions.isStartDateLessThanEndDate(Mscrm.Contract_main_system_library.get_activeOn(),
            Mscrm.Contract_main_system_library.get_expiresOn(),
            "activeon",
            Mscrm.Contract_main_system_library.$1.$4_0,
            Mscrm.Contract_main_system_library.$1.$5_0)) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("billingstarton");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
            $v_0.setValue(Mscrm.Contract_main_system_library.get_activeOn().getValue());
            Mscrm.Contract_main_system_library.$0.$3_0 = Mscrm.Contract_main_system_library.get_activeOn().getValue()
        }
        Mscrm.Contract_main_system_library.calculateDuration()
    }
};
Mscrm.Contract_main_system_library.expiresOnOnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$1
        .$4_0))
        Mscrm.Contract_main_system_library.$1.$4_0 = Mscrm.Contract_main_system_library.get_activeOn().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$1
        .$5_0))
        Mscrm.Contract_main_system_library.$1.$5_0 = Mscrm.Contract_main_system_library.get_expiresOn().getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.get_expiresOn()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.get_expiresOn().getValue()) &&
        Mscrm.CommandBarActions.isStartDateLessThanEndDate(Mscrm.Contract_main_system_library.get_activeOn(),
            Mscrm.Contract_main_system_library.get_expiresOn(),
            "expireson",
            Mscrm.Contract_main_system_library.$1.$4_0,
            Mscrm.Contract_main_system_library.$1.$5_0)) {
        var $v_0 = Mscrm.Contract_main_system_library
            .cloneDate(Mscrm.Contract_main_system_library.get_expiresOn().getValue());
        $v_0.setHours(23);
        $v_0.setMinutes(59);
        $v_0.setSeconds(59);
        if ($v_0.getTime() !== Mscrm.Contract_main_system_library.get_expiresOn().getValue().getTime()) {
            var $v_2 = Xrm.Page.data.entity.attributes.get("expireson");
            $v_2.setValue(Mscrm.Contract_main_system_library.cloneDate($v_0))
        }
        var $v_1 = Xrm.Page.data.entity.attributes.get("billingendon");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) {
            $v_1.setValue(Mscrm.Contract_main_system_library.get_expiresOn().getValue());
            Mscrm.Contract_main_system_library.$0.$2_0 = Mscrm.Contract_main_system_library.get_expiresOn().getValue()
        }
        Mscrm.Contract_main_system_library.calculateDuration()
    }
};
Mscrm.Contract_main_system_library.calculateDuration = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.get_activeOn().getValue()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.get_expiresOn().getValue())) {
        var $v_0 = (new Date(Mscrm.Contract_main_system_library.get_expiresOn().getValue()) -
                    new Date(Mscrm.Contract_main_system_library.get_activeOn().getValue())) /
                8.64e7,
            $v_1 = Xrm.Page.data.entity.attributes.get("duration");
        $v_1.setValue($v_0)
    }
};
Mscrm.Contract_main_system_library.billingStartOnOnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$0
        .$3_0))
        Mscrm.Contract_main_system_library.$0.$3_0 = Mscrm.Contract_main_system_library.get_billingStartOn().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$0
        .$2_0))
        Mscrm.Contract_main_system_library.$0.$2_0 = Mscrm.Contract_main_system_library.get_billingEndOn().getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library
        .get_billingStartOn()))
        return Mscrm.CommandBarActions
            .isStartDateLessThanEndDate(Mscrm.Contract_main_system_library.get_billingStartOn(),
                Mscrm.Contract_main_system_library.get_billingEndOn(),
                "billingstarton",
                Mscrm.Contract_main_system_library.$0.$3_0,
                Mscrm.Contract_main_system_library.$0.$2_0);
    else return true
};
Mscrm.Contract_main_system_library.billingEndOnOnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$0
        .$3_0))
        Mscrm.Contract_main_system_library.$0.$3_0 = Mscrm.Contract_main_system_library.get_billingStartOn().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.$0
        .$2_0))
        Mscrm.Contract_main_system_library.$0.$2_0 = Mscrm.Contract_main_system_library.get_billingEndOn().getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.Contract_main_system_library.get_billingEndOn().getValue())) {
        var $v_0 = Mscrm.Contract_main_system_library
            .cloneDate(Mscrm.Contract_main_system_library.get_billingEndOn().getValue());
        $v_0.setHours(23);
        $v_0.setMinutes(59);
        $v_0.setSeconds(59);
        if ($v_0.getTime() !== Mscrm.Contract_main_system_library.get_billingEndOn().getValue().getTime()) {
            var $v_1 = Xrm.Page.data.entity.attributes.get("billingendon");
            $v_1.setValue(Mscrm.Contract_main_system_library.cloneDate($v_0))
        }
    }
    return Mscrm.CommandBarActions
        .isStartDateLessThanEndDate(Mscrm.Contract_main_system_library.get_billingStartOn(),
            Mscrm.Contract_main_system_library.get_billingEndOn(),
            "billingendon",
            Mscrm.Contract_main_system_library.$0.$3_0,
            Mscrm.Contract_main_system_library.$0.$2_0)
};
Mscrm.Contract_main_system_library.cloneDate = function(oDate) {
    var $v_0;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(oDate)) {
        var $v_1 = Mscrm.Contract_main_system_library.localDateTimeNow();
        $v_1.setTime(oDate.getTime());
        $v_0 = $v_1
    } else $v_0 = null;
    return $v_0
};
Mscrm.Contract_main_system_library.localDateTimeNow = function() {
    var $v_0 = new Date;
    $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset() + Xrm.Page.context.getTimeZoneOffsetMinutes());
    return $v_0
};
Mscrm.PreviousDateTimeValues = function() {};
Mscrm.PreviousDateTimeValues.prototype = {
    $4_0: null,
    get_activeOnDate: function() { return this.$4_0 },
    set_activeOnDate: function(value) {
        this.$4_0 = value;
        return value
    },
    $5_0: null,
    get_expireOnDate: function() { return this.$5_0 },
    set_expireOnDate: function(value) {
        this.$5_0 = value;
        return value
    }
};
Mscrm.PreviousBillingDateTimeValues = function() {};
Mscrm.PreviousBillingDateTimeValues.prototype = {
    $3_0: null,
    get_billingStartOnDate: function() { return this.$3_0 },
    set_billingStartOnDate: function(value) {
        this.$3_0 = value;
        return value
    },
    $2_0: null,
    get_billingEndOnDate: function() { return this.$2_0 },
    set_billingEndOnDate: function(value) {
        this.$2_0 = value;
        return value
    }
};
Mscrm.Contract_main_system_library.registerClass("Mscrm.Contract_main_system_library");
Mscrm.PreviousDateTimeValues.registerClass("Mscrm.PreviousDateTimeValues");
Mscrm.PreviousBillingDateTimeValues.registerClass("Mscrm.PreviousBillingDateTimeValues");
Mscrm.Contract_main_system_library.$1 = new Mscrm.PreviousDateTimeValues;
Mscrm.Contract_main_system_library.$0 = new Mscrm.PreviousBillingDateTimeValues;
Type.registerNamespace("Mscrm");
Mscrm.serviceaddress_onclick = Mscrm.Contract_main_system_library.serviceAddressOnClick;
Mscrm.billtoaddress_onclick = Mscrm.Contract_main_system_library.billToAddressOnClick;
Mscrm.serviceaddress_setadditionalparams_1 = Mscrm.Contract_main_system_library.serviceAddressSetAdditionalParams1;
Mscrm.serviceaddress_setadditionalparams_0 = Mscrm.Contract_main_system_library.serviceAddressSetAdditionalParams0;
Mscrm.billtoaddress_setadditionalparams = Mscrm.Contract_main_system_library.billToAddressSetAdditionalParams;
Mscrm.Form_onload = Mscrm.Contract_main_system_library.formOnLoad;
Mscrm.customerid_onchange = Mscrm.Contract_main_system_library.customerIdOnChange;
Mscrm.serviceaddress_onchange = Mscrm.Contract_main_system_library.serviceAddressOnChange;
Mscrm.activeon_onchange = Mscrm.Contract_main_system_library.activeOnOnChange;
Mscrm.expireson_onchange = Mscrm.Contract_main_system_library.expiresOnOnChange;
Mscrm.CalculateDuration = Mscrm.Contract_main_system_library.calculateDuration;
Mscrm.billingcustomerid_onchange = Mscrm.Contract_main_system_library.billingCustomerIdOnChange;
Mscrm.billingstarton_onchange = Mscrm.Contract_main_system_library.billingStartOnOnChange;
Mscrm.billingendon_onchange = Mscrm.Contract_main_system_library.billingEndOnOnChange