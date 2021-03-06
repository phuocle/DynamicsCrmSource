Type.registerNamespace("Mscrm");
Mscrm.CustomActivity = function() {};
Mscrm.CustomActivity.onIsActivityCheckBoxClick = function(activityCheckBox) {
    if (!IsNull(activityCheckBox) && !IsNull(activityCheckBox.disabled) && !activityCheckBox.disabled) {
        var $v_0 = activityCheckBox;
        if ($v_0.checked) Mscrm.CustomActivity.$A();
        else Mscrm.CustomActivity.$B()
    }
};
Mscrm.CustomActivity.onSurfaceActivityCheckBoxClick = function(activityCheckBox) {
    if (!IsNull(activityCheckBox) && !IsNull(activityCheckBox.disabled) && !activityCheckBox.disabled) {
        var $v_0 = activityCheckBox;
        if (!$v_0.checked) {
            var $v_1 = window.LOCID_CONFIRM_ACTIVITY_DISPLAY;
            if (confirm($v_1)) return;
            else Mscrm.CustomActivity.$0("checkIsCommunicationActivity", false, true)
        }
    }
};
Mscrm.CustomActivity.$A = function() {
    var $v_0 = $get("selOwnershipType");
    $v_0.value !== "UserOwned" && alert(window.LOCID_ACTIVITY_OWNERSHIPALERT);
    $v_0.value = "UserOwned";
    if (IsNull(Mscrm.CustomActivity.$2)) Mscrm.CustomActivity.$2 = new Mscrm.CustomizationFormState;
    Mscrm.CustomActivity.$2.save();
    $v_0.disabled = true;
    Mscrm.CustomActivity.$0("checkIsCommunicationActivity", false, true);
    Mscrm.CustomActivity.$0("chkRCOffline", true, true);
    Mscrm.CustomActivity.$0("EnableMailMergeCheck", true, false);
    Mscrm.CustomActivity.$0("chkAENotes", true, true);
    Mscrm.CustomActivity.$0("chkAEFeedback", true, true);
    Mscrm.CustomActivity.$0("chkAEActivities", true, false);
    Mscrm.CustomActivity.$0("chkCConnections", true, true);
    Mscrm.CustomActivity.$0("enableKnowledgeMgmt", true, false);
    Mscrm.CustomActivity.$9(true, false);
    Mscrm.CustomActivity.$0("chkCollaboration", true, true);
    var $v_1 = $get("chkAutoRoute");
    Mscrm.CustomActivity.$0("chkAutoRoute", false, $v_1.checked);
    Mscrm.CustomActivity.$0("chkAEEnableEmail", true, false);
    Mscrm.CustomActivity.$7()
};
Mscrm.CustomActivity.$B = function() {
    if (!IsNull(Mscrm.CustomActivity.$2)) {
        Mscrm.CustomActivity.$2.restore();
        var $v_0 = $get("schemaNamePrefix");
        $v_0.style.display = "inline"
    }
};
Mscrm.CustomActivity.$0 = function($p0, $p1, $p2) {
    var $v_0 = $get($p0);
    if (!IsNull($v_0)) {
        $v_0.checked = $p2;
        $v_0.disabled = $p1
    }
};
Mscrm.CustomActivity.$9 = function($p0, $p1) {
    for (var $v_0 = ["chkDA0", "chkDA1", "chkDA2", "chkDA3", "chkDA4", "chkDA5"], $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++
    ) Mscrm.CustomActivity.$0($v_0[$v_1], $p0, $p1)
};
Mscrm.CustomActivity.$7 = function() {
    var $v_0 = $get("txtAttributeSchemaName");
    $v_0.value = window._activityPrAttrName;
    $v_0.disabled = true;
    var $v_1 = $get("schemaNamePrefix");
    $v_1.style.display = "none";
    var $v_2 = $get("numMaxAttributeLen");
    $v_2.value = window._activityPrAttrLength;
    $v_2.disabled = true;
    var $v_3 = $get("txtAttributeDisplayName");
    $v_3.value = window._activityPrAttrDispName;
    $v_3.disabled = true;
    var $v_4 = $get("txtAttributeDescription");
    $v_4.value = window._activityPrAttrDesc;
    $v_4.disabled = true;
    var $v_5 = $get("selAttributeReqLevel"), $v_6 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_5);
    $v_6.set_dataValue("Required");
    $v_5.disabled = true
};
Mscrm.EntityCustomizationControlIds = function() {};
Mscrm.FormControlState = function() {};
Mscrm.FormControlState.$6 = function($p0) {
    var $v_0 = new Mscrm.FormControlState, $v_1 = $get($p0);
    $v_0.$3_0 = $p0;
    $v_0.$5_0 = $v_1.disabled;
    var $v_2 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_1);
    if (!IsNull($v_2) && !IsNull($v_2.get_dataValue())) $v_0.$4_0 = $v_2.get_dataValue();
    return $v_0
};
Mscrm.FormControlState.$8 = function($p0) {
    var $v_0 = $get($p0.$3_0);
    if (!IsNull($v_0)) {
        $v_0.disabled = $p0.$5_0;
        var $v_1 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_0);
        !IsNull($v_1) && $v_1.set_dataValue($p0.$4_0)
    }
};
Mscrm.FormControlState.prototype = {
    $3_0: null,
    $4_0: null,
    $5_0: false,
    get_disabled: function() { return this.$5_0 },
    set_disabled: function($p0) {
        this.$5_0 = $p0;
        return $p0
    },
    get_dataValue: function() { return this.$4_0 },
    set_dataValue: function($p0) {
        this.$4_0 = $p0;
        return $p0
    },
    get_controlId: function() { return this.$3_0 },
    set_controlId: function($p0) {
        this.$3_0 = $p0;
        return $p0
    }
};
Mscrm.CustomizationFormState = function() {};
Mscrm.CustomizationFormState.prototype = {
    $1_0: null,
    save: function() {
        var $v_0 = Mscrm.EntityCustomizationControlIds.allControls;
        this.$1_0 = [];
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $get($v_0[$v_1]);
            if (!IsNull($v_2)) this.$1_0 = this.$1_0.concat(Mscrm.FormControlState.$6($v_0[$v_1]))
        }
    },
    restore: function() {
        if (!IsNull(this.$1_0)) {
            for (var $v_0 = 0; $v_0 < this.$1_0.length; $v_0++) Mscrm.FormControlState.$8(this.$1_0[$v_0]);
            this.$1_0 = null
        }
    }
};
Mscrm.CustomActivity.registerClass("Mscrm.CustomActivity");
Mscrm.EntityCustomizationControlIds.registerClass("Mscrm.EntityCustomizationControlIds");
Mscrm.FormControlState.registerClass("Mscrm.FormControlState");
Mscrm.CustomizationFormState.registerClass("Mscrm.CustomizationFormState");
Mscrm.CustomActivity.$2 = null;
Mscrm.EntityCustomizationControlIds.ownershipTypeSelect = "selOwnershipType";
Mscrm.EntityCustomizationControlIds.enableOfflineAvailablityCheckBox = "chkRCOffline";
Mscrm.EntityCustomizationControlIds.enableMailMergeCheckBox = "EnableMailMergeCheck";
Mscrm.EntityCustomizationControlIds.associatedNotesCheckBox = "chkAENotes";
Mscrm.EntityCustomizationControlIds.associatedFeedbackCheckBox = "chkAEFeedback";
Mscrm.EntityCustomizationControlIds.associatedActivitiesCheckBox = "chkAEActivities";
Mscrm.EntityCustomizationControlIds.enableConnectionsCheckBox = "chkCConnections";
Mscrm.EntityCustomizationControlIds.enableKMCheckBox = "enableKnowledgeMgmt";
Mscrm.EntityCustomizationControlIds.displayWorkplaceCheckBox = "chkDA0";
Mscrm.EntityCustomizationControlIds.displaySalesCheckBox = "chkDA1";
Mscrm.EntityCustomizationControlIds.displayMarketingCheckBox = "chkDA2";
Mscrm.EntityCustomizationControlIds.displayServiceCheckBox = "chkDA3";
Mscrm.EntityCustomizationControlIds.displaySettingCheckBox = "chkDA4";
Mscrm.EntityCustomizationControlIds.displayResourceCenterCheckBox = "chkDA5";
Mscrm.EntityCustomizationControlIds.enableQueueCheckBox = "chkCollaboration";
Mscrm.EntityCustomizationControlIds.enableAutoRouteCheckBox = "chkAutoRoute";
Mscrm.EntityCustomizationControlIds.enableActivityPartyCheckBox = "chkAEEnableEmail";
Mscrm.EntityCustomizationControlIds.surfaceActivityCheckBox = "checkIsCommunicationActivity";
Mscrm.EntityCustomizationControlIds.primaryAttributeNameInput = "txtAttributeSchemaName";
Mscrm.EntityCustomizationControlIds.primaryAttributeLengthInput = "numMaxAttributeLen";
Mscrm.EntityCustomizationControlIds.primaryAttributePrefix = "schemaNamePrefix";
Mscrm.EntityCustomizationControlIds.primaryAttributeReqLevel = "selAttributeReqLevel";
Mscrm.EntityCustomizationControlIds.primaryAttributeDisplayName = "txtAttributeDisplayName";
Mscrm.EntityCustomizationControlIds.primaryAttributeDescription = "txtAttributeDescription";
Mscrm.EntityCustomizationControlIds.allControls = [
    "selOwnershipType", "chkRCOffline", "EnableMailMergeCheck", "chkAENotes", "chkAEFeedback", "chkAEActivities",
    "chkAEEnableEmail", "chkCConnections", "enableKnowledgeMgmt", "chkDA0", "chkDA1", "chkDA2", "chkDA3", "chkDA4",
    "chkDA5", "chkCollaboration", "chkAutoRoute", "txtAttributeSchemaName", "selAttributeReqLevel",
    "numMaxAttributeLen", "schemaNamePrefix", "txtAttributeDisplayName", "txtAttributeDescription",
    "checkIsCommunicationActivity"
]