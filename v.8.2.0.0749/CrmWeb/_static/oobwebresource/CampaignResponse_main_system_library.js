Type.registerNamespace("Mscrm");
Mscrm.CampaignResponseMainSystemLibraryWebResource = function() {};
Mscrm.CampaignResponseMainSystemLibraryWebResource.Form_onload = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
        var $v_1 = Xrm.Page.data.entity.attributes.get("receivedon");
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) {
            var $v_2 = new Date;
            $v_2.setMinutes($v_2.getMinutes() + $v_2.getTimezoneOffset() + Xrm.Page.context.getTimeZoneOffsetMinutes());
            var $v_3 = $v_2;
            $v_3.setHours(0);
            $v_1.setValue($v_3)
        }
    }
    var $v_0 = Xrm.Page.ui.controls.get("customer").getAttribute();
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
        $v_0.addOnChange(Mscrm.CampaignResponseMainSystemLibraryWebResource.Customer_OnChange);
        Mscrm.CampaignResponseMainSystemLibraryWebResource.$0($v_0)
    }
};
Mscrm.CampaignResponseMainSystemLibraryWebResource
    .Customer_OnChange = function(context) {
        !Mscrm.InternalUtilities.JSTypes.isNull(context) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(context.getEventSource()) &&
            Mscrm.CampaignResponseMainSystemLibraryWebResource.$0(context.getEventSource())
    };
Mscrm.CampaignResponseMainSystemLibraryWebResource.$0 = function($p0) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = parseInt($v_0.getValue().toString());
        if ($v_1 !== 1 && !Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
            var $v_2 = $p0;
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_2
                .getValue())) Mscrm.CampaignResponseMainSystemLibraryWebResource.EnableNewCustomerFields();
            else Mscrm.CampaignResponseMainSystemLibraryWebResource.DisableAndClearNewCustomerFields()
        }
    }
};
Mscrm.CampaignResponseMainSystemLibraryWebResource
    .EnableNewCustomerFields = function() {
        Mscrm.CampaignResponseMainSystemLibraryWebResource.DisableNewCustomerFields(false)
    };
Mscrm.CampaignResponseMainSystemLibraryWebResource.DisableAndClearNewCustomerFields = function() {
    Mscrm.CampaignResponseMainSystemLibraryWebResource.DisableNewCustomerFields(true);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("companyname", "");
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("lastname", "");
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("firstname", "");
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("telephone", "");
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("emailaddress", "");
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("yomicompanyname", "");
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("yomilastname", "");
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue("yomifirstname", "")
};
Mscrm.CampaignResponseMainSystemLibraryWebResource.DisableNewCustomerFields = function(disabled) {
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("companyname", disabled);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("lastname", disabled);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("firstname", disabled);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("telephone", disabled);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("emailaddress", disabled);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("yomicompanyname", disabled);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("yomilastname", disabled);
    Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled("yomifirstname", disabled)
};
Mscrm.CampaignResponseMainSystemLibraryWebResource.SetControlDisabled = function(controlName, disabled) {
    var $v_0 = Xrm.Page.getControl(controlName);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setDisabled(disabled)
};
Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue = function(name, value) {
    var $v_0 = Xrm.Page.data.entity.attributes.get(name);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue(value)
};
Mscrm.CampaignResponseMainSystemLibraryWebResource.registerClass("Mscrm.CampaignResponseMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.CampaignResponseMainSystemLibraryWebResource.Form_onload;
Mscrm.Customer_OnChange = Mscrm.CampaignResponseMainSystemLibraryWebResource.Customer_OnChange;
Mscrm.enableNewCustomerFields = Mscrm.CampaignResponseMainSystemLibraryWebResource.EnableNewCustomerFields;
Mscrm.disableAndClearNewCustomerFields = Mscrm.CampaignResponseMainSystemLibraryWebResource
    .DisableAndClearNewCustomerFields;
Mscrm.disableNewCustomerFields = Mscrm.CampaignResponseMainSystemLibraryWebResource.DisableNewCustomerFields;
Mscrm.setControlDisabled = Mscrm.CampaignResponseMainSystemLibraryWebResource.setControlDisabled;
Mscrm.setFieldValue = Mscrm.CampaignResponseMainSystemLibraryWebResource.SetFieldValue