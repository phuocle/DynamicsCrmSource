Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.ILookupUIBehaviorProxy = function() {};
Mscrm.FormInputControl.ILookupUIBehaviorProxy.registerInterface("Mscrm.FormInputControl.ILookupUIBehaviorProxy");
Mscrm.FormInputControl.IPresenceLookupBehavior = function() {};
Mscrm.FormInputControl.IPresenceLookupBehavior.registerInterface("Mscrm.FormInputControl.IPresenceLookupBehavior");
Mscrm.FormInputControl.IMockLookupUIBehaviorProxy = function() {};
Mscrm.FormInputControl.IMockLookupUIBehaviorProxy
    .registerInterface("Mscrm.FormInputControl.IMockLookupUIBehaviorProxy");
Mscrm.FormInputControl.LookupUIBehaviorProxy = function() {};
Mscrm.FormInputControl.LookupUIBehaviorProxy.prototype = {
    $W_0: null,
    get_element: function() { return this.$W_0 },
    set_element: function(value) {
        this.$W_0 = value;
        return value
    },
    getLookupWebServiceRequest: function(reference, webMethodName) {
        var $v_0 = new Mscrm.Proxies.RemoteCommandProxy;
        !IsNull(this.$W_0) && $v_0.set_element(this.$W_0.getLookupWebServiceRequest(reference, webMethodName));
        return $v_0
    }
};
Mscrm.FormInputControl.ImageLookupParty = function(element) {
    Mscrm.FormInputControl.ImageLookupParty.initializeBase(this, [element])
};
Mscrm.FormInputControl.ImageLookupParty.prototype = {
    initialize: function() {
        Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype.initialize.call(this);
        this.$U_4 = true
    },
    get_isTouchSkinEnabled: function() { return false },
    get_dataXml: function() { return this.GetDataXml(null) },
    GetDataXml: function(attributeName) {
        var $v_0 = this.Items(false, true, false, false, false),
            $v_1 = isNullOrEmptyString(attributeName) ? this.get_element().id : attributeName;
        return Mscrm.Utilities.partyListXml($v_1, $v_0)
    }
};
Mscrm.FormInputControl.ImageLookupTransactionCurrency = function(element) {
    this.$$d_$2J_6 = Function.createDelegate(this, this.$2J_6);
    this.$$d_$55_6 = Function.createDelegate(this, this.$55_6);
    Mscrm.FormInputControl.ImageLookupTransactionCurrency.initializeBase(this, [element])
};
Mscrm.FormInputControl.ImageLookupTransactionCurrency.prototype = {
    $1K_6: null,
    $e_6: null,
    $Q_6: null,
    _currencyPrecision: 0,
    $1M_6: 0,
    get_form: function() { return this.$e_6 },
    set_form: function(value) {
        this.$e_6 = value;
        return value
    },
    get_$1e_6: function() { return this.get_element().getAttribute("cursymclm") },
    get_isTouchSkinEnabled: function() { return false },
    initialize: function() {
        Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype.initialize.call(this);
        this.$1M_6 = window.DefaultCurrencyPrecision;
        this._currencyPrecision = this.$1M_6;
        this.AddBindingColumn(this.get_$1e_6());
        this.AddBindingColumn("currencyprecision");
        this.$1K_6 = this.get_dataValue();
        this.add_internalBeforeChange(this.$$d_$55_6);
        this.add_change(this.$$d_$2J_6);
        var $v_0 = this.get_element();
        while (!IsNull($v_0) && $v_0.tagName !== "BODY") {
            if (this.isControlsContainer($v_0)) {
                this.$e_6 = $v_0;
                break
            }
            $v_0 = $v_0.parentNode
        }
    },
    isControlsContainer: function(domNode) {
        if (!isNullOrEmptyString(domNode.tagName) && domNode.tagName.toUpperCase() === "FORM") return true;
        else return false
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.remove_internalBeforeChange(this.$$d_$55_6);
        this.remove_change(this.$$d_$2J_6);
        Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype.dispose.call(this)
    },
    currencyCheckRequired: function() {
        if (IsNull(this.$e_6) || !IsNull(this.get_dataValue())) return false;
        for (var $v_0 = Sys.Application.getComponents(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if (this.$2n_6($v_2)) {
                var $v_3 = $v_2;
                if (!$v_3.get_isBaseCurrency() && !IsNull($v_2.get_dataValue())) return true
            }
        }
        return false
    },
    $55_6: function($p0, $p1) {
        var $v_0 = $p1, $v_1 = $v_0.$8_1.items;
        if (this.currencyCheckRequired()) {
            if (!this.get_isInlineLookup()) {
                alert(window.LOCID_CURRENCY_CANNOT_BE_NULL);
                this.set_dataValue(this.$1K_6)
            }
            $v_0.$h_1 = false;
            return
        }
        this.$1K_6 = this.get_dataValue();
        var $v_2 = null, $v_3 = null;
        if (!IsNull($v_1) && $v_1.length > 0) {
            var $v_4 = $v_1[0].keyValues;
            $v_2 = $v_4[this.get_$1e_6()];
            $v_3 = $v_4["currencyprecision"]
        }
        if (!IsNull($v_2))
            if (!IsNull($v_2.value)) this.$Q_6 = $v_2.value.toString();
            else this.$Q_6 = $v_2.toString();
        else this.$Q_6 = "";
        if (!IsNull($v_3))
            if (!IsNull($v_3.value)) this._currencyPrecision = Number.parseInvariant($v_3.value.toString());
            else this._currencyPrecision = Number.parseInvariant($v_3.toString());
        else this._currencyPrecision = this.$1M_6;
        $v_0.$h_1 = true
    },
    $2J_6: function($p0, $p1) {
        if (!IsNull(this.$e_6)) {
            !IsNull(Mscrm.DeferredInlineEditOnDemandInitializer) &&
                Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
            for (var $v_0 = this.$e_6.getElementsByTagName("*"), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
                var $v_3 = $v_0[$v_2];
                if (IsNull($v_3)) continue;
                var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_3.id), $v_5;
                if (this.$2n_6($v_4)) {
                    $v_5 = $v_4;
                    if (!$v_5.get_isBaseCurrency()) {
                        $v_5.set_currencySymbol(this.$Q_6);
                        $v_5.set_currencyPrecision(this._currencyPrecision)
                    }
                }
            }
        }
    },
    $2n_6: function($p0) { return !IsNull($p0) && !IsNull($p0.get_isMoney) && $p0.get_isMoney() },
    SetCurrency: function(transactionCurrencyId) {
        if (!isNullOrEmptyString(transactionCurrencyId)) {
            var $v_0 = new RemoteCommand("TransactionCurrencyWebService", "Retrieve");
            $v_0.SetParameter("transactionCurrencyId", transactionCurrencyId);
            var $v_1 = $v_0.Execute();
            if ($v_1.Success && typeof $v_1.ReturnValue === "string") {
                var $v_2 = XUI.Xml.LoadXml($v_1.ReturnValue),
                    $v_3 = XUI.Xml.SelectSingleNode($v_2, "/TransactionCurrency/CurrencySymbol", null);
                this.$Q_6 = XUI.Xml.GetText($v_3);
                var $v_4 = new LookupControlItem;
                $v_4.id = transactionCurrencyId;
                var $v_5 = XUI.Xml.SelectSingleNode($v_2, "/TransactionCurrency/CurrencyName", null);
                $v_4.name = XUI.Xml.GetText($v_5);
                $v_4.type = "9105";
                $v_4.values = [];
                $v_4.keyValues = {};
                $v_4.keyValues[this.get_$1e_6()] = this.$Q_6;
                $v_4.keyValues["currencyprecision"] = this._currencyPrecision;
                var $v_6 = [];
                $v_6[0] = $v_4;
                this.set_dataValue($v_6)
            }
        } else {
            this.set_dataValue(null);
            this.$Q_6 = ""
        }
        if (this.get_disabled()) this.$2J_6(this, Sys.EventArgs.Empty);
        else this.fireOnChange()
    },
    SetCurrencyIsoCurrencyCode: function(transactionCurrencyName, isoCurrencyCode, currencySymbol) {
        if (!isNullOrEmptyString(isoCurrencyCode) && !isNullOrEmptyString(currencySymbol)) {
            var $v_0 = new RemoteCommand("TransactionCurrencyWebService", "RetrieveTransactionCurrencyId");
            $v_0.SetParameter("currencyIsoCode", isoCurrencyCode);
            var $v_1 = $v_0.Execute();
            if ($v_1.Success && typeof $v_1.ReturnValue === "string") {
                var $v_2 = new LookupControlItem;
                $v_2.id = $v_1.ReturnValue.toString();
                $v_2.name = transactionCurrencyName;
                $v_2.type = "9105";
                $v_2.values = [];
                $v_2.keyValues = {};
                $v_2.keyValues[this.get_$1e_6()] = currencySymbol;
                $v_2.keyValues["currencyprecision"] = this._currencyPrecision;
                var $v_3 = [];
                $v_3[0] = $v_2;
                this.set_dataValue($v_3)
            }
        } else {
            this.set_dataValue(null);
            this.$Q_6 = ""
        }
        if (this.get_disabled()) this.$2J_6(this, Sys.EventArgs.Empty);
        else this.fireOnChange()
    }
};
Mscrm.FormInputControl.FilterRelationshipData = function(name, id, type, dependantAttributeName) {
    this.$f_0 = name;
    this.$R_0 = id;
    this.$i_0 = type;
    this.$b_0 = dependantAttributeName
};
Mscrm.FormInputControl.FilterRelationshipData.prototype = {
    $b_0: null,
    $f_0: null,
    $R_0: null,
    $i_0: null,
    get_dependantAttributeName: function() { return this.$b_0 },
    set_dependantAttributeName: function(value) {
        this.$b_0 = value;
        return value
    },
    get_name: function() { return this.$f_0 },
    set_name: function(value) {
        this.$f_0 = value;
        return value
    },
    get_id: function() { return this.$R_0 },
    set_id: function(value) {
        this.$R_0 = value;
        return value
    },
    get_relationshipType: function() { return this.$i_0 },
    set_relationshipType: function(value) {
        this.$i_0 = value;
        return value
    }
};
Mscrm.FormInputControl.LookupItemData = function(name, value) {
    this.name = name;
    this.value = value
};
Mscrm.FormInputControl.LookupItemData.prototype = {
    name: null,
    value: null,
    get_name: function() { return this.name },
    get_value: function() { return this.value }
};
Mscrm.FormInputControl.ShowDialogEventArgs = function(lookupField) {
    Mscrm.FormInputControl.ShowDialogEventArgs.initializeBase(this);
    this.$1x_1 = lookupField
};
Mscrm.FormInputControl.ShowDialogEventArgs.prototype = {
    $1x_1: null,
    $1A_1: null,
    $1I_1: null,
    get_callbackForShowDialog: function() { return this.$1I_1 },
    set_callbackForShowDialog: function(value) {
        this.$1I_1 = value;
        return value
    },
    get_lookupField: function() { return this.$1x_1 },
    get_lookupItems: function() { return this.$1A_1 },
    set_lookupItems: function(value) {
        this.$1A_1 = value;
        return value
    }
};
Mscrm.FormInputControl.GenerateDataXmlEventArgs = function() {
    Mscrm.FormInputControl.GenerateDataXmlEventArgs.initializeBase(this)
};
Mscrm.FormInputControl.GenerateDataXmlEventArgs.prototype = {
    $8_1: null,
    get_result: function() { return this.$8_1 },
    set_result: function(value) {
        this.$8_1 = value;
        return value
    }
};
Mscrm.FormInputControl.ResultEventArgs = function() {
    Mscrm.FormInputControl.ResultEventArgs.initializeBase(this);
    this.$8_1 = new LookupItems;
    this.$h_1 = true;
    this.$K_1 = true
};
Mscrm.FormInputControl.ResultEventArgs.prototype = {
    $8_1: null,
    $h_1: false,
    $K_1: false,
    get_needAssociate: function() { return this.$K_1 },
    set_needAssociate: function(value) {
        this.$K_1 = value;
        return value
    },
    get_result: function() { return this.$8_1 },
    set_result: function(value) {
        this.$8_1 = value;
        return value
    },
    get_success: function() { return this.$h_1 },
    set_success: function(value) {
        this.$h_1 = value;
        return value
    }
};
Mscrm.FormInputControl.LookupTypeIcon = function() {
    this.$I_0 = "";
    this.$d_0 = true
};
Mscrm.FormInputControl.LookupTypeIcon.prototype = {
    $I_0: null,
    $d_0: false,
    get_source: function() { return this.$I_0 },
    set_source: function(value) {
        this.$I_0 = value;
        return value
    },
    get_flip: function() { return this.$d_0 },
    set_flip: function(value) {
        this.$d_0 = value;
        return value
    }
};
Mscrm.FormInputControl.LookupUIBehavior = function(control) {
    this.$$d_$4g_4 = Function.createDelegate(this, this.$4g_4);
    this.$$d_$2l_4 = Function.createDelegate(this, this.$2l_4);
    this.$$d_$4S_4 = Function.createDelegate(this, this.$4S_4);
    this.$$d_$4k_4 = Function.createDelegate(this, this.$4k_4);
    this.$$d_$4p_4 = Function.createDelegate(this, this.$4p_4);
    this.$$d_$50_4 = Function.createDelegate(this, this.$50_4);
    this.$$d_autoResolveHandler = Function.createDelegate(this, this.autoResolveHandler);
    this.$$d_RefreshLookupItemImage = Function.createDelegate(this, this.RefreshLookupItemImage);
    this.$$d_$4r_4 = Function.createDelegate(this, this.$4r_4);
    this.$$d_$3o_4 = Function.createDelegate(this, this.$3o_4);
    this.$$d_$41_4 = Function.createDelegate(this, this.$41_4);
    this.$$d_$3l_4 = Function.createDelegate(this, this.$3l_4);
    this.$$d_showLookupDialog = Function.createDelegate(this, this.showLookupDialog);
    this.$$d_$1m_4 = Function.createDelegate(this, this.$1m_4);
    this.$$d_$4h_4 = Function.createDelegate(this, this.$4h_4);
    this.$$d_focusEdit = Function.createDelegate(this, this.focusEdit);
    this.$$d_$49_4 = Function.createDelegate(this, this.$49_4);
    this.$$d_$4G_4 = Function.createDelegate(this, this.$4G_4);
    this.$$d_$4I_4 = Function.createDelegate(this, this.$4I_4);
    this.$$d_$4J_4 = Function.createDelegate(this, this.$4J_4);
    this.$$d_$44_4 = Function.createDelegate(this, this.$44_4);
    this.$$d_$4O_4 = Function.createDelegate(this, this.$4O_4);
    this.$$d_$4L_4 = Function.createDelegate(this, this.$4L_4);
    this.$$d_$4F_4 = Function.createDelegate(this, this.$4F_4);
    this.$$d_$4H_4 = Function.createDelegate(this, this.$4H_4);
    this.$$d_setFocus = Function.createDelegate(this, this.setFocus);
    this.$$d_$43_4 = Function.createDelegate(this, this.$43_4);
    this.$$d_$4N_4 = Function.createDelegate(this, this.$4N_4);
    this.$$d_$4M_4 = Function.createDelegate(this, this.$4M_4);
    this.$$d_$3C_4 = Function.createDelegate(this, this.$3C_4);
    this.$$d_Focus = Function.createDelegate(this, this.Focus);
    this.$$d_$P_4 = Function.createDelegate(this, this.$P_4);
    this.$$d_$48_4 = Function.createDelegate(this, this.$48_4);
    this.$$d_$2s_4 = Function.createDelegate(this, this.$2s_4);
    this.$$d_onLookup = Function.createDelegate(this, this.onLookup);
    this.$O_4 = [];
    this.$j_4 = [];
    this.$1s_4 = new RegExp("[^{]+{[ \\n\\t]*");
    this.$1t_4 = new RegExp("[ \\n\\t]*}[ \\n\\t]*$");
    this.$2K_4 = new RegExp('^[^@\\s\\"<>)(\\[\\]:;,]+@[^@\\s\\"<>)(\\[\\]:;,]+$');
    this.$E_4 = [];
    this.$6_4 = {};
    this.$1_4 = -1;
    this.$z_4 = [];
    this.$10_4 = [];
    this.getDataXml = this.GetDataXml;
    this.isValid = this.IsValid;
    this.isPermissibleType = this.IsPermissibleType;
    Mscrm.FormInputControl.LookupUIBehavior.initializeBase(this, [control]);
    this.$m_4 = this.get_useTouchSkin() ? true : false
};
Mscrm.FormInputControl.LookupUIBehavior.lookupItemsDifferent = function(itemsA, itemsB) {
    if (IsNull(itemsA) && IsNull(itemsB)) return false;
    if (IsNull(itemsA) || IsNull(itemsB)) return true;
    if (itemsA.length !== itemsB.length) return true;
    var $v_0 = itemsA.length - 1;
    while ($v_0 >= 0) {
        if (!Mscrm.FormInputControl.LookupUIBehavior.$46(itemsA[$v_0], itemsB)) return true;
        $v_0--
    }
    return false
};
Mscrm.FormInputControl.LookupUIBehavior.$3B = function($p0, $p1) {
    return !Mscrm.LookupAttribute.compareGuids($p0.id, $p1.id) && !!$p1.type ||
        Mscrm.LookupAttribute.undefinedAndEmptyToNull($p1.type) !==
        Mscrm.LookupAttribute.undefinedAndEmptyToNull($p0.type) ||
        Mscrm.LookupAttribute.undefinedAndEmptyToNull($p1.name) !==
        Mscrm.LookupAttribute.undefinedAndEmptyToNull($p0.name)
};
Mscrm.FormInputControl.LookupUIBehavior.$46 = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++)
        if (!Mscrm.FormInputControl.LookupUIBehavior.$3B($p0, $p1[$v_0])) return true;
    return false
};
Mscrm.FormInputControl.LookupUIBehavior.prototype = {
    $a_4: null,
    $L_4: null,
    $1L_4: "",
    $22_4: null,
    $5_4: null,
    $Z_4: false,
    $1E_4: false,
    $D_4: false,
    $1J_4: null,
    $1z_4: false,
    $1U_4: false,
    $S_4: "",
    $7_4: null,
    $1y_4: null,
    $G_4: null,
    $U_4: false,
    $1w_4: null,
    $18_4: null,
    $0_4: null,
    $9_4: null,
    $H_4: false,
    $1Q_4: true,
    $1X_4: false,
    $1O_4: true,
    $17_4: "",
    $1u_4: 0,
    $m_4: false,
    $1q_4: false,
    $1P_4: null,
    $1Z_4: null,
    $1b_4: null,
    add_setadditionalparams: function(value) { this.get_events().addHandler("OnSetAdditionalParamsEvent", value) },
    remove_setadditionalparams: function(value) {
        this.get_events()
            .removeHandler("OnSetAdditionalParamsEvent", value)
    },
    add_setAdditionalParams: function(value) { this.get_events().addHandler("OnSetAdditionalParamsEvent", value) },
    remove_setAdditionalParams: function(value) {
        this.get_events()
            .removeHandler("OnSetAdditionalParamsEvent", value)
    },
    add_change: function(value) { this.get_events().addHandler("OnChangeEvent", value) },
    remove_change: function(value) { this.get_events().removeHandler("OnChangeEvent", value) },
    add_onSetValue: function(value) { this.get_events().addHandler("OnSetValueEvent", value) },
    remove_onSetValue: function(value) { this.get_events().removeHandler("OnSetValueEvent", value) },
    add_internalBeforeChange: function(value) { this.get_events().addHandler("OnInternalBeforeChangeEvent", value) },
    remove_internalBeforeChange: function(value) {
        this.get_events().removeHandler("OnInternalBeforeChangeEvent", value)
    },
    add_onafterselect: function(value) { this.get_events().addHandler("OnAfterSelectEvent", value) },
    remove_onafterselect: function(value) { this.get_events().removeHandler("OnAfterSelectEvent", value) },
    add_afterSelect: function(value) { this.get_events().addHandler("OnAfterSelectEvent", value) },
    remove_afterSelect: function(value) { this.get_events().removeHandler("OnAfterSelectEvent", value) },
    add_generateDataXml: function(value) { this.get_events().addHandler("OnGeneratedDataXml", value) },
    remove_generateDataXml: function(value) { this.get_events().removeHandler("OnGeneratedDataXml", value) },
    add_showDialog: function(value) { this.get_events().addHandler("OnShowDialog", value) },
    remove_showDialog: function(value) { this.get_events().removeHandler("OnShowDialog", value) },
    add_globalQuickCreateSuccess: function(value) { this.get_events().addHandler("OnGlobalQuickCreateSuccess", value) },
    remove_globalQuickCreateSuccess: function(value) {
        this.get_events().removeHandler("OnGlobalQuickCreateSuccess", value)
    },
    add_onshowdialog: function(value) { this.get_events().addHandler("OnShowDialog", value) },
    remove_onshowdialog: function(value) { this.get_events().removeHandler("OnShowDialog", value) },
    get_disableInlineLookup: function() { return this.$m_4 },
    set_disableInlineLookup: function(value) {
        this.$m_4 = value;
        return value
    },
    get_disableNewButton: function() { return this.$1q_4 },
    set_disableNewButton: function(value) {
        this.$1q_4 = value;
        return value
    },
    get_enableInlineLookupForEditForms: function() {
        if (this.get_lookupStyle() === "subject" || this.$2A_4()) return false;
        return Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.Orion.Air")
    },
    get_lookupItems: function() { return this.$1w_4 },
    get_searchRecords: function() { return this.$E_4 },
    get_inlineLookupMenu: function() { return this.$0_4 },
    get_readOnly: function() { return this.get_disabled() },
    set_readOnly: function(value) {
        this.set_disabled(value);
        return value
    },
    get_enableSearchResults: function() { return this.$1O_4 },
    set_enableSearchResults: function(value) {
        this.$1O_4 = value;
        return value
    },
    get_lastFocusItem: function() { return this.$5_4 },
    get_lookupStyle: function() { return this.get_element().getAttribute("lookupstyle") },
    set_lookupStyle: function(value) {
        var $v_0 = this.get_element().getAttribute("lookupstyle");
        !IsNull($v_0) && $v_0 !== value && this.set_crmAttributeId("");
        this.get_element().setAttribute("lookupstyle", value);
        return value
    },
    get_lookupTypes: function() { return this.get_element().getAttribute("lookuptypes") },
    set_lookupTypes: function(value) {
        var $v_0 = this.get_element().getAttribute("lookuptypes");
        !IsNull($v_0) && $v_0 !== value && this.set_crmAttributeId("");
        this.get_element().setAttribute("lookuptypes", value);
        this.get_useTouchSkin() && this.updateTouchLookupEntitySelector();
        return value
    },
    get_viewIdForResolveItem: function() { return this.get_element().getAttribute("ViewIdForResolveItem") },
    set_viewIdForResolveItem: function(value) {
        this.get_element().setAttribute("ViewIdForResolveItem", value);
        return value
    },
    get_lookupTypeNames: function() { return this.get_element().getAttribute("lookuptypenames") },
    set_lookupTypeNames: function(value) {
        this.get_element().setAttribute("lookuptypenames", value);
        return value
    },
    get_crmAttributeId: function() { return this.get_element().getAttribute("crmattributeid") },
    set_crmAttributeId: function(value) {
        this.get_element().setAttribute("crmattributeid", value);
        return value
    },
    get_lookupTypeIcons: function() { return this.get_element().getAttribute("lookuptypeIcons") },
    set_lookupTypeIcons: function(value) {
        this.get_element().setAttribute("lookuptypeIcons", value);
        return value
    },
    get_showProperty: function() {
        var $v_0 = this.get_element().getAttribute("showproperty");
        return IsNull($v_0) ? 0 : parseInt($v_0.toString())
    },
    set_showProperty: function(value) {
        this.get_element().setAttribute("showproperty", value);
        return value
    },
    get_bindingColumns: function() { return this.$G_4 },
    set_bindingColumns: function(value) {
        this.$G_4 = value;
        return value
    },
    get_additionalParams: function() { return this.get_element().getAttribute("additionalparams") },
    set_additionalParams: function(value) {
        this.get_element().setAttribute("additionalparams", value);
        return value
    },
    get_defaultType: function() {
        var $v_0 = this.get_element().getAttribute("defaulttype");
        return IsNull($v_0) ? null : parseInt($v_0.toString())
    },
    set_defaultType: function(value) {
        this.get_element().setAttribute("defaulttype", value);
        return value
    },
    get_forField: function() { return this.get_element().getAttribute("forfield") },
    set_forField: function(value) {
        this.get_element().setAttribute("forfield", value);
        return value
    },
    get_allowUnknownItems: function() { return this.$U_4 },
    set_allowUnknownItems: function(value) {
        this.$U_4 = value;
        return value
    },
    get_autoResolve: function() {
        var $v_0 = this.get_element().getAttribute("autoresolve");
        return IsNull($v_0) || Mscrm.Utilities.parseBoolean($v_0.toString())
    },
    set_autoResolve: function(value) {
        this.get_element().setAttribute("autoresolve", value);
        return value
    },
    get_resolveEmailAddress: function() {
        var $v_0 = this.get_element().getAttribute("resolveemailaddress");
        return IsNull($v_0) || Mscrm.Utilities.parseBoolean($v_0.toString())
    },
    set_resolveEmailAddress: function(value) {
        this.get_element().setAttribute("resolveemailaddress", value);
        return value
    },
    get_allowUnresolvedPartiesOnEmailSend: function() {
        var $v_0 = this.get_element().getAttribute("allowUnresolvedPartiesOnEmailSend");
        return !IsNull($v_0) && Mscrm.Utilities.parseBoolean($v_0.toString())
    },
    get_controlMode: function() {
        var $v_0 = this.get_element().getAttribute("data-controlmode");
        if (IsNull($v_0)) return "";
        else return $v_0
    },
    get_createPermissionDictionary: function() {
        var $v_0 = this.get_element().getAttribute("createpermissiondictionary");
        if (IsNull($v_0)) return "";
        else return $v_0
    },
    set_createPermissionDictionary: function(value) {
        this.get_element().setAttribute("createpermissiondictionary", value);
        return value
    },
    get_lookupBrowse: function() {
        var $v_0 = this.get_element().getAttribute("lookupbrowse");
        if (IsNull($v_0)) return false;
        return Mscrm.Utilities.parseBoolean($v_0.toString())
    },
    set_lookupBrowse: function(value) {
        var $v_0 = this.get_element().getAttribute("lookupbrowse");
        !IsNull($v_0) && Mscrm.Utilities.parseBoolean($v_0.toString()) !== value && this.set_crmAttributeId("");
        this.get_element().setAttribute("lookupbrowse", value);
        return value
    },
    get_defaultValue: function() { return IsNull(this.$a_4) ? null : this.$a_4 },
    set_defaultValue: function(value) {
        this.$a_4 = value;
        return value
    },
    get_isDisplayOnly: function() {
        return Mscrm.Utilities.parseBoolean(this.get_element().getAttribute("isDisplayOnly").toString())
    },
    set_isDisplayOnly: function(value) {
        this.get_element().setAttribute("isDisplayOnly", value);
        return value
    },
    get_customViews: function() { return IsNull(this.$L_4) ? null : this.$L_4 },
    set_customViews: function(value) {
        this.$L_4 = value;
        return value
    },
    get_filterRelationshipId: function() {
        var $v_0 = this.get_element().getAttribute("RelationshipId");
        return IsNull($v_0) ? null : $v_0
    },
    set_filterRelationshipId: function(value) {
        this.get_element().setAttribute("RelationshipId", value);
        return value
    },
    get_dependantAttributeName: function() {
        var $v_0 = this.get_element().getAttribute("DependantAttributeName");
        return IsNull($v_0) ? null : $v_0
    },
    set_dependantAttributeName: function(value) {
        this.get_element().setAttribute("DependantAttributeName", value);
        return value
    },
    get_dependantAttributeType: function() {
        var $v_0 = this.get_element().getAttribute("DependantAttributeType");
        return IsNull($v_0) ? null : $v_0
    },
    set_dependantAttributeType: function(value) {
        this.get_element().setAttribute("DependantAttributeType", value);
        return value
    },
    get_dataProviderOverride: function() { return IsNull(this.$1L_4) ? null : this.$1L_4 },
    set_dataProviderOverride: function(value) {
        this.$1L_4 = value;
        return value
    },
    get_isDirty: function() { return this.$3Y_4() },
    get_innerText: function() {
        var $v_0 = this.Items(false, false, false, false, false);
        return !$v_0.length ? "" : XUI.Html.GetText(this.getLookupField())
    },
    get_dataXml: function() { return this.GetDataXml(null) },
    get_dataValue: function() { return this.$1G_4(false, false) },
    set_dataValue: function(value) {
        this.setValue(value);
        return value
    },
    get_typedDataValue: function() { return this.get_dataValue() },
    set_typedDataValue: function(value) {
        this.set_dataValue(value);
        return value
    },
    get_disabled: function() { return Mscrm.Utilities.parseBoolean(this.get_element().getAttribute("lookupdisabled")) },
    set_disabled: function(value) {
        this.setDisabled(value);
        return value
    },
    get_isVisible: function() { return this.get_rootControl().style.display !== "none" },
    set_isVisible: function(value) {
        this.get_rootControl().style.display = value ? "block" : "none";
        return value
    },
    get_defaultViewId: function() { return this.getDefaultView() },
    set_defaultViewId: function(value) {
        this.setDefaultView(value);
        return value
    },
    get_rootControl: function() {
        if (IsNull(this.$1J_4)) this.$1J_4 = this.get_element().parentNode.parentNode.parentNode.parentNode;
        return this.$1J_4
    },
    get_inlineResultsSorted: function() { return this.$1Q_4 },
    set_inlineResultsSorted: function(value) {
        this.$1Q_4 = value;
        return value
    },
    get_showInlineLookupHeader: function() { return this.$1X_4 },
    set_showInlineLookupHeader: function(value) {
        this.$1X_4 = value;
        return value
    },
    get_inlineLookupHeaderText: function() { return this.$17_4 },
    set_inlineLookupHeaderText: function(value) {
        this.$17_4 = value;
        return value
    },
    get_isInlineLookup: function() {
        if (this.get_useTouchSkin()) return false;
        if (IsNull(this.get_element().getAttribute("isInline"))) return false;
        return this.get_element().getAttribute("isInline")
    },
    get_isFolderTracking: function() {
        if (this.get_useTouchSkin()) return false;
        if (IsNull(this.get_element().getAttribute("isFolderTracking"))) return false;
        return this.get_element().getAttribute("isFolderTracking")
    },
    get_isLookupResolving: function() { return this.$D_4 },
    set_isLookupResolving: function(value) {
        this.$D_4 = value;
        return value
    },
    get_$1c_4: function() { return this.get_element().id.replace(new RegExp("_i$"), "") },
    AddCustomView: function(viewGuid, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        var $v_0 = 0;
        try {
            var $v_3 = new RemoteCommand("LookupService", "RetrieveTypeCode");
            $v_3.SetParameter("entityName", entityName);
            var $v_4 = $v_3.Execute();
            if ($v_4.Success && typeof $v_4.ReturnValue === "number") $v_0 = $v_4.ReturnValue;
            else return
        } catch ($v_5) {
            return
        }
        if (!IsNull(viewGuid)) viewGuid = viewGuid.toUpperCase();
        if (isDefault) {
            this.get_defaultType() !== $v_0 && this.set_defaultType($v_0);
            this.set_defaultViewId(viewGuid)
        }
        if (IsNull(this.$L_4)) this.$L_4 = new Array(0);
        for (var $v_1 = null, $v_2 = this.$L_4.length, $v_6 = 0; $v_6 < $v_2; $v_6++)
            if (this.$L_4[$v_6].id === viewGuid) {
                $v_1 = this.$L_4[$v_6];
                break
            }
        if (!IsNull($v_1)) {
            $v_1.recordType = $v_0;
            $v_1.name = viewDisplayName;
            $v_1.fetchXml = fetchXml;
            $v_1.layoutXml = layoutXml
        } else {
            $v_1 = new CustomView(viewGuid, $v_0, viewDisplayName, fetchXml, layoutXml);
            Array.add(this.$L_4, $v_1)
        }
    },
    getDefaultView: function() {
        return IsNull(this.get_element().getAttribute("defaultViewId"))
            ? null
            : this.get_element().getAttribute("defaultViewId")
    },
    setDefaultView: function(viewGuid) { this.get_element().setAttribute("defaultViewId", viewGuid) },
    get_useTouchSkin: function() { return this.get_isTouchSkinEnabled() && this.isTouchClientDialog() },
    get_isTouchSkinEnabled: function() { return false },
    isTouchClientDialog: function() {
        if (!IsNull(this.get_element())) {
            var $v_0 = Mscrm.CrmUri.create(this.get_element().ownerDocument.URL), $v_1 = $v_0.get_query()["dType"];
            return !IsNull($v_1) && $v_1 === "2"
        }
        return false
    },
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        if (!this.get_useTouchSkin()) {
            $addHandler(this.get_element(), "click", this.$$d_onLookup);
            $addHandler(this.get_element(), "keyup", this.$$d_$2s_4);
            $addHandler(this.get_element(), "mouseover", this.$$d_$48_4);
            $addHandler(this.get_element(), "mouseout", this.$$d_$P_4);
            $addHandler(this.get_element(), "focus", this.$$d_Focus);
            $addHandler(this.get_element(), "blur", this.$$d_$3C_4);
            this.$U_4 = false;
            this.set_isDisplayOnly(false);
            this.$3q_4();
            if (Mscrm.FormControlInputBehavior.isSlugSupportEnabled()) {
                var $v_0 = this.$3d_4(), $v_1 = this.get_element().id;
                if (!IsNull($v_0)) {
                    var $$t_5 = this;
                    Sys.Application.add_init(function($p1_0, $p1_1) {
                        var $v_2 = {};
                        $v_2["innerControlId"] = $v_1;
                        $create(Mscrm.FormInputControl.TableLookupUIControl, $v_2, null, null, $v_0)
                    })
                }
            }
            Mscrm.LookupAttribute.compareGuids(this.getDefaultView(), "{1A364391-BF41-407b-B91F-5C326BAF0A3B}") &&
                this.set_disableInlineLookup(true);
            this.get_enableInlineLookupForEditForms() &&
                this.get_element().setAttribute("isEnableInlineLookupForEditForms", "1")
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!this.get_useTouchSkin()) {
            if (IsNull(this.get_element())) return;
            $removeHandler(this.get_element(), "click", this.$$d_onLookup);
            $removeHandler(this.get_element(), "keyup", this.$$d_$2s_4);
            $removeHandler(this.get_element(), "mouseover", this.$$d_$48_4);
            $removeHandler(this.get_element(), "mouseout", this.$$d_$P_4);
            $removeHandler(this.get_element(), "focus", this.$$d_Focus);
            $removeHandler(this.get_element(), "blur", this.$$d_$3C_4);
            try {
                var $v_0 = this.getLookupField();
                if (!IsNull($v_0))
                    if (Mscrm.Utilities.isMobileRefresh()) {
                        $removeHandler($v_0, "click", this.$$d_$4M_4);
                        $removeHandler($v_0, "focus", this.$$d_$4N_4)
                    } else {
                        $removeHandler($v_0, "blur", this.$$d_$3C_4);
                        $removeHandler($v_0, "dblclick", this.$$d_$43_4);
                        $removeHandler($v_0, "focus", this.$$d_setFocus);
                        $removeHandler($v_0, "keyup", this.$$d_$2s_4);
                        $removeHandler($v_0, "keypress", this.$$d_$4H_4);
                        $removeHandler($v_0, "keydown", this.$$d_$4F_4)
                    }
                this.$2V_4()
            } catch ($$e_1) {
            }
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $2V_4: function() {
        var $v_0 = this.getLookupEdit();
        if (!IsNull($v_0)) {
            if (Mscrm.Utilities.isMobileRefresh()) {
                $removeHandler($v_0, "click", this.$$d_$4L_4);
                $removeHandler($v_0, "focus", this.$$d_$4O_4)
            } else {
                $removeHandler($v_0, "dblclick", this.$$d_$44_4);
                $removeHandler($v_0, "keyup", this.$$d_$4J_4);
                $removeHandler($v_0, "keypress", this.$$d_$4I_4);
                $removeHandler($v_0, "keydown", this.$$d_$4G_4);
                $removeHandler($v_0, "blur", this.$$d_$49_4);
                $removeHandler($v_0, "focus", this.$$d_focusEdit)
            }
            !this.get_isInlineLookup() &&
                this.get_enableInlineLookupForEditForms() &&
                $removeHandler(document.documentElement, "click", this.$$d_$4h_4)
        }
    },
    AddDependantParameters: function(dependantFieldId) {
        if (isNullOrEmptyString(dependantFieldId)) return;
        var $v_0 = this.$s_4();
        if (IsNull($v_0)) return;
        var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior(dependantFieldId);
        if (IsNull($v_1) && this.get_isInlineLookup())
            $v_1 = Mscrm.FormControlInputBehavior.GetBehavior(dependantFieldId + "_i");
        if (IsNull($v_1)) return;
        var $v_2 = $v_1.get_typedDataValue();
        if (!IsNull($v_2) && $v_2.length > 0)
            if ($v_2[0].id.length) {
                this.AddParam("rId", $v_2[0].id);
                this.AddParam("rType", $v_2[0].type)
            }
    },
    AddParam: function(name, value) {
        var $v_0 = String.format("&{0}={1}", CrmEncodeDecode.CrmUrlEncode(name), CrmEncodeDecode.CrmUrlEncode(value));
        if (!isNullOrEmptyString(this.get_additionalParams())) {
            var $v_1 = this.get_additionalParams().indexOf(name);
            if ($v_1 > -1) {
                var $v_2 = $v_1 - 1, $v_3 = this.get_additionalParams().indexOf("&", $v_1);
                if ($v_3 === -1) $v_3 = this.get_additionalParams().length;
                this.set_additionalParams(this.get_additionalParams().substring(0, $v_2) +
                    this.get_additionalParams().substring($v_3, this.get_additionalParams().length))
            }
            this.set_additionalParams(this.get_additionalParams() + $v_0)
        } else this.set_additionalParams($v_0)
    },
    AddBindingColumn: function(name) {
        if (!IsNull(this.$G_4)) {
            if (this.$G_4.indexOf(name.toLowerCase()) === -1) this.$G_4 += "," + name
        } else this.$G_4 = name
    },
    setDisabled: function(value) {
        this.endContentEditing(true);
        this.get_element().setAttribute("lookupdisabled", value);
        this.$2R_4(null);
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetFirstChild(this.get_element().parentNode.parentNode));
        if (value) {
            Sys.UI.DomElement.addCssClass(this.get_element(), "ms-crm-ReadOnly");
            Sys.UI.DomElement.addCssClass(this.get_element(), "ms-crm-Lookup-ReadOnly");
            $v_0.setAttribute("Tabindex", "-1")
        } else {
            Sys.UI.DomElement.removeCssClass(this.get_element(), "ms-crm-ReadOnly");
            Sys.UI.DomElement.removeCssClass(this.get_element(), "ms-crm-Lookup-ReadOnly");
            $v_0.setAttribute("Tabindex", "0")
        }
        this.get_element().style.cursor = value ? "auto" : "pointer";
        var $v_1 = this.get_element();
        if (this.get_isInlineLookup())
            !this.$D_4 &&
                Mscrm.ImageStrip.changeImage($v_1,
                    value ? window.CDNURL + "/_imgs/search_disable.png" : "/_imgs/search_normal.gif");
        else
            Mscrm.ImageStrip.changeImage($v_1,
                value ? window.CDNURL + "/_imgs/btn_dis_lookup.png" : "/_imgs/btn_off_lookup.png");
        var $v_2 = this.$2g_4();
        $v_1.alt = value ? "" : $v_2;
        $v_1.setAttribute("title", value ? "" : $v_2);
        XUI.Html.DomUtils.GetNextSibling(this.get_element()).setAttribute("title", $v_1.getAttribute("title"))
    },
    getLookupField: function() {
        if (this.get_useTouchSkin()) return null;
        try {
            return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetFirstChild(this.get_element().parentNode.parentNode))
        } catch ($$e_0) {
            return null
        }
    },
    Clear: function(executeDataChangeHandler) {
        if (this.get_useTouchSkin()) return;
        this.get_isInlineMultiLookup() && this.$2V_4();
        XUI.Html.SetText(XUI.Html.DomUtils.GetFirstChild(this.getLookupField()), "");
        this.get_element().setAttribute("value", "");
        (IsNull(executeDataChangeHandler) || executeDataChangeHandler) && this.handleDataValueChangedEvent()
    },
    Lookup: function(ignoreOnClick, noDialog, searchValue, asyncOperation) {
        if (this.get_useTouchSkin()) return;
        if (this.get_readOnly()) return;
        var $v_0 = this.get_element().onclick;
        if (ignoreOnClick || IsNull($v_0)) {
            !noDialog && !Mscrm.Utilities.isIosDevice() && this.setFocus(null);
            this.RaiseSetAdditionalParamsEvent();
            var $v_1 = this.getLookupField(), $v_2 = null;
            if (noDialog) {
                this.$3c_4(asyncOperation);
                return
            }
            var $v_3 = new Mscrm.FormInputControl.ShowDialogEventArgs($v_1), $v_4 = [$v_2];
            $v_3.$1I_1 = Mscrm.Utilities.createCallbackFunctionObject("callbackForShowDialog", this, $v_4, false);
            if (this.$4T_4($v_3)) $v_2 = $v_3.$1A_1;
            else {
                var $v_5 = this.$24_4(), $v_6 = this.$s_4(), $v_7 = this.$1i_4($v_6), $v_8 = this.$25_4($v_6);
                if (!IsNull($v_6) && !isNullOrEmptyString($v_7)) {
                    this.AddParam("currentid", $v_7);
                    !isNullOrEmptyString($v_8) && this.AddParam("currentObjectType", $v_8)
                }
                Mscrm.MobileUtility.isHostedInWindowsPhoneApp() && this.AddParam("HostedInWindowsPhoneApp", "true");
                var $v_9 = this.get_element().getAttribute("allowFilterOff");
                $v_9 = !isNullOrEmptyString($v_9) ? $v_9 : null;
                var $v_A = this.get_element().getAttribute("disableQuickFind");
                $v_A = !isNullOrEmptyString($v_A) ? $v_A : null;
                var $v_B = this.get_element().getAttribute("disableViewPicker");
                $v_B = !isNullOrEmptyString($v_B) ? $v_B : null;
                var $v_C = this.get_element().getAttribute("availableViewIds");
                $v_C = !isNullOrEmptyString($v_C) ? $v_C : null;
                var $v_D = this.get_element().getAttribute("disableMru");
                $v_D = !isNullOrEmptyString($v_D) ? $v_D : null;
                var $v_E = this.get_element().getAttribute("lookupDialogMultipleSelect");
                $v_E = !isNullOrEmptyString($v_E) ? $v_E : "0";
                var $v_F = Mscrm.Utilities.createCallbackFunctionObject("handleAfterLookup", this, null, false),
                    $v_G = this.get_lookupTypes() === "9940" ||
                        this.get_lookupTypes() === "4200" ||
                        this.get_lookupTypes() === "4003" ||
                        this.get_lookupTypes() === "99" ||
                        this.get_lookupTypes() === "1049" ||
                        this.get_lookupTypes() === "9935" ||
                        this.get_lookupTypes() === "9750" ||
                        this.get_lookupTypes() === "9333" && this.get_disableNewButton()
                        ? 0
                        : 1;
                $v_2 = LookupObjectsWithCallback($v_F,
                    $v_1,
                    $v_E === "1" ? "multi" : this.get_lookupStyle(),
                    this.get_lookupTypes(),
                    this.get_lookupBrowse(),
                    this.$G_4,
                    this.get_additionalParams(),
                    $v_G,
                    this.get_showProperty(),
                    false,
                    this.get_defaultType(),
                    searchValue,
                    this.get_dataProviderOverride(),
                    this.get_defaultViewId(),
                    this.get_customViews(),
                    $v_5.$f_0,
                    $v_5.$R_0,
                    $v_5.$i_0,
                    $v_5.$b_0,
                    $v_9,
                    $v_A,
                    $v_B,
                    $v_C,
                    this.$z_4.join("="),
                    this.$10_4.join(","),
                    this.get_crmAttributeId())
            }
            Mscrm.Utilities.isModalDialogSupported() && this.handleAfterLookup($v_2)
        }
    },
    showInlineLookupMenu: function() {
        if (this.get_useTouchSkin()) return;
        if (this.get_readOnly()) return;
        this.isMruEnabled() && !IsNull(this.$7_4) && this.$7_4.set_isInlineSearchMenuOpening(true);
        !IsNull(this.$0_4) && this.hideInlineMenu();
        this.$6_4["onClickCallback"] = this.$$d_$1m_4;
        this.$6_4["inlineMenuId"] = this.get_element().id + "_IMenu";
        this.$6_4["enableShowMore"] = true;
        this.$6_4["showMoreCallback"] = this.$$d_showLookupDialog;
        var $v_0 = this.getLookupEdit(), $v_1 = this.getLookupField();
        this.$1_4 = -1;
        this.$H_4 = false;
        if (window.UseTabletExperience) {
            this.$6_4["focusElementOnShow"] = null;
            this.$6_4["focusElementOnHide"] = null
        } else if (!IsNull($v_0) && $v_0.className !== "ms-crm-Hidden-NoBehavior") {
            this.$6_4["focusElementOnShow"] = $v_0;
            this.$6_4["focusElementOnHide"] = $v_0
        } else if (!IsNull($v_1)) {
            this.$6_4["focusElementOnShow"] = $v_1;
            this.$6_4["focusElementOnHide"] = $v_1
        }
        this.$4n_4();
        var $v_2 = this.$3a_4(), $v_3 = {};
        if (Mscrm.Utilities.isJQuerySupported())
            $v_3 = Mscrm.Utilities.getILMenuDimension(this.get_rootControl(), this.$E_4.length > 7, $v_2);
        else {
            var $v_5 = Mscrm.Utilities.getXYPos(this.get_rootControl(), !Mscrm.Utilities.get_isLeftToRight());
            $v_3["top"] = $v_5["y"] + this.get_rootControl().offsetHeight;
            var $v_6 = $v_5["x"], $v_7 = Mscrm.Utilities.getILMenuWidth(this.get_rootControl());
            if (!this.get_isInlineLookup()) {
                var $v_8 = 50;
                if ($v_7 < 300 - $v_8) {
                    var $v_H = 300 - $v_8;
                    $v_6 = $v_6 - ($v_H - $v_7);
                    $v_7 = $v_H
                }
                if (!Mscrm.Utilities.get_isLeftToRight()) {
                    $v_6 += $v_7;
                    if ((Mscrm.Utilities
                            .isIE9() ||
                            Mscrm.Utilities.isIE10()) &&
                        this.$3z_4(this.get_rootControl())) $v_6 += 16
                }
                var $v_9 = this.get_rootControl(),
                    $v_A = $v_9.ownerDocument,
                    $v_B = $v_A.body.clientHeight,
                    $v_C = Mscrm.Utilities.getXYPos($v_A.documentElement, !Mscrm.Utilities.get_isLeftToRight()),
                    $v_D = $v_C["y"],
                    $v_E = $v_B,
                    $v_F = $v_2,
                    $v_G = $v_D + $v_E - $v_3["top"];
                if ($v_F > $v_G) {
                    var $v_I = $v_2, $v_J = $v_3["top"] - $v_D - this.get_rootControl().offsetHeight;
                    if ($v_J > $v_I) {
                        $v_3["top"] = $v_3["top"] - this.get_rootControl().offsetHeight - $v_2 - 1;
                        this.$6_4["maxHeight"] = $v_2
                    } else if ($v_G > $v_J) {
                        this.$6_4["maxHeight"] = $v_2 - ($v_F - $v_G) - 1;
                        $v_2 = this.$6_4["maxHeight"]
                    } else {
                        this.$6_4["maxHeight"] = $v_2 - ($v_I - $v_J) - 2;
                        $v_2 = this.$6_4["maxHeight"];
                        $v_3["top"] = $v_3["top"] - this.get_rootControl().offsetHeight - $v_2 - 1
                    }
                    this.$6_4["height"] = $v_2
                } else {
                    this.$6_4["maxHeight"] = $v_2;
                    this.$6_4["height"] = $v_2
                }
            }
            $v_3["width"] = $v_7;
            $v_3["left"] = $v_6;
            $v_3["valid"] = !this.get_rootControl().clientHeight ? false : true
        }
        var $v_4 = $v_3["valid"];
        if ($v_4) {
            this.$6_4["top"] = $v_3["top"];
            this.$6_4["left"] = $v_3["left"];
            this.$6_4["width"] = $v_3["width"];
            this.$6_4["inlineMenu"] = this.$0_4;
            this.$36_4();
            this.$35_4();
            this.$P_4(null);
            this.$0_4 = Mscrm.Utilities.showInlineMenu(this.$E_4, this.$6_4);
            if (this.$0_4 && this.$0_4.get_menuItems().length > 0)
                if (this.$0_4.get_menuItems()[0]) {
                    var $$t_K = this;
                    window.setTimeout(function() {
                            $$t_K.$0_4.get_menuItems()[0].displayHoverStyle();
                            $$t_K.$0_4.get_menuItems()[0].get_itemContents().scrollIntoView(false);
                            $$t_K.$0_4.get_menuItems()[0].get_itemContents().focus()
                        },
                        200)
                }
        } else this.$P_4(null);
        var $$t_L = this;
        this.$1u_4 = window.setTimeout(function() {
                window.clearTimeout($$t_L.$1u_4);
                $$t_L.isMruVisible() && $$t_L.$t_4();
                !IsNull($$t_L.$7_4) && $$t_L.$7_4.set_isInlineSearchMenuOpening(false)
            },
            120)
    },
    $3z_4: function($p0) {
        var $v_0 = false, $v_1 = $p0;
        while (!IsNull($p0) && document.documentElement !== $p0) {
            if ($p0.scrollHeight > $p0.offsetHeight) {
                $v_0 = true;
                break
            }
            if ($p0 !== $v_1) {
                $p0 = $p0.parentNode;
                continue
            }
            $p0 = $p0.parentNode
        }
        return $v_0
    },
    addCustomFilter: function(fetchXmlFilter, entityType) {
        if (IsNull(entityType)) entityType = "";
        Array.add(this.$10_4, entityType);
        Array.add(this.$z_4, CrmEncodeDecode.CrmUrlEncode(fetchXmlFilter))
    },
    $3a_4: function() {
        var $v_0, $v_1 = this.$E_4.length > 6 ? 6 : this.$E_4.length;
        if (!$v_1) $v_1++;
        if (this.get_isInlineLookup()) {
            $v_0 = 37 * $v_1 + 24;
            $v_0 += this.$E_4.length > 6 ? 37 : 24
        } else {
            $v_0 = 0;
            if (this.$E_4.length > 0)
                for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
                    var $v_3 = this.$E_4[$v_2];
                    if ($v_3.get_resultColumns().length > 0) $v_0 += 37;
                    else $v_0 += 24
                }
            else $v_0 += 24;
            $v_0 += 24
        }
        return $v_0
    },
    $4n_4: function() {
        this.$6_4["itemHeight"] = 35;
        this.$6_4["maxHeight"] = 284
    },
    linkControlId: function() {
        var $v_0 = $get(this.get_$1c_4());
        if (IsNull($v_0)) return "";
        var $v_1 = $v_0.getAttribute("associatedLinkControlId"), $v_2 = null;
        if (!IsNull($v_1)) $v_2 = $v_1.toString();
        else $v_2 = "";
        return $v_2
    },
    inlineNewFlyOutId: function() {
        if (IsNull(this.$1b_4)) return null;
        else return this.$1b_4.get_flyOutId()
    },
    showAddNewButton: function() { return true },
    showErrorMessage: function(message, iconPath) { return },
    hideErrorMessage: function() { return },
    $35_4: function() {
        var $v_0 = $get(this.get_element().id.substring(0, this.get_element().id.length - 2));
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.getAttribute("entityDisplayName"),
                $v_2 = $v_0.getAttribute("entityLogicalName"),
                $v_3 = false,
                $v_4 = $v_0.getAttribute("isInlineNewEnabled") === "1" && !!$v_2.length,
                $v_5 = $v_0.getAttribute("openFullForm");
            if (!IsNull($v_2)) {
                var $v_8 = this.get_element().getAttribute("createpermissiondictionary");
                if (!isNullOrEmptyString($v_8))
                    for (var $v_9 = $v_8
                                 .split(","),
                        $v_A = 0;
                        $v_A < $v_9.length;
                        $v_A++)
                        if ($v_9[$v_A].split(":")[0]
                            .toUpperCase() ===
                            $v_2.toUpperCase()) $v_3 = Mscrm.Utilities.parseBoolean($v_9[$v_A].split(":")[1])
            }
            var $v_6 = document.createElement("DIV");
            Sys.UI.DomElement.addCssClass($v_6, "ms-crm-IL-Footer");
            var $v_7 = document.createElement("DIV");
            if (this.$E_4.length > 0) {
                var $v_B = LOCID_INLINELOOKUP_RESULTS;
                if (this.$E_4.length === 1) $v_B = LOCID_INLINELOOKUP_RESULT;
                var $v_C = String.format(LOCID_INLINELOOKUP_RFORMAT, this.$E_4.length.toString(), $v_B);
                XUI.Html.SetText($v_7, $v_C);
                $v_7.setAttribute("aria-label", $v_C)
            }
            $v_7.tabIndex = 0;
            Sys.UI.DomElement.addCssClass($v_7, "ms-crm-InlineLookup-FooterSection-TopResults");
            $v_6.appendChild($v_7);
            if ($v_4 &&
                $v_3 &&
                this.showAddNewButton() &&
                Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().canAddItems()) {
                var $v_D = document.createElement("DIV");
                Sys.UI.DomElement.addCssClass($v_D, "ms-crm-InlineLookup-FooterSection-AddNew");
                $v_6.appendChild($v_D);
                this.$9_4 = document.createElement("A");
                $v_D.appendChild(this.$9_4);
                this.$9_4.href = "javascript:void(0);";
                this.$9_4.title = String.format(window.LOCID_INLINELOOKUP_NEW_RECORD, $v_1);
                this.$9_4.tabIndex = 0;
                Sys.UI.DomElement.addCssClass(this.$9_4, "ms-crm-InlineLookup-FooterSection-AddAnchor");
                if ($v_5 === "1") {
                    var $$t_S = this;
                    $addHandler(this.$9_4,
                        "click",
                        function($p1_0) {
                            var $v_F,
                                $$t_Q,
                                $$t_R,
                                $v_G = ($$t_R = $$t_S.$2f_4($$t_Q = { val: $v_F }), $v_F = $$t_Q.val, $$t_R),
                                $v_H = $$t_S.getLookupSearchText();
                            if (!IsNull($$t_S.$0_4) && $$t_S.$0_4.get_isVisible()) {
                                $$t_S.$0_4.set_focusElementOnHide(null);
                                $$t_S.$0_4.updateDialogFocusElementOnHide(null);
                                $$t_S.hideInlineMenu()
                            }
                            var $v_I = $$t_S.get_lookupTypes().split(",");
                            Mscrm.ReadFormUtilities.set_forceNavigationAway(true);
                            if ($v_I.length === 1 && Mscrm.EntityPropUtil.isActivityTypeCode(parseInt($v_I[0]))) {
                                var $v_J = $$t_S.$s_4(),
                                    $v_K = parseInt($v_I[0]),
                                    $v_L = $$t_S.$1i_4($v_J),
                                    $v_M = parseInt($$t_S.$25_4($v_J));
                                Mscrm.AddActivity.addActivityToFormFromsubgrid($v_K, $v_L, $v_M)
                            } else Mscrm.Utilities.selectAddButton($v_2, $$t_S.get_element().id, $v_G, $v_F, $v_H);
                            window.setTimeout("Mscrm.ReadFormUtilities.set_forceNavigationAway(false)", 500)
                        })
                } else if ($v_0.getAttribute("showGlobalQuickCreate")) {
                    var $v_N = String.format("{0}_lookup_quickcreate", this.get_element().id),
                        $v_O = this.get_element().style.zIndex + 990;
                    if (IsNull(this.$1P_4))
                        this.$1P_4 = new Mscrm.GlobalQuickCreate
                            .LookupGlobalQuickCreateCallbacks($v_N, $v_O, this.$$d_$3l_4);
                    this.$1Z_4 = this.$9_4;
                    $addHandler(this.$9_4, "click", this.$$d_$41_4)
                }
                var $v_E = document.createElement("IMG");
                $v_E.src = "/_imgs/add_10.png";
                Sys.UI.DomElement.addCssClass($v_E, "ms-crm-InlineLookup-FooterSection-AddImage");
                this.$9_4.appendChild($v_E);
                this.$9_4.innerHTML += CrmEncodeDecode.CrmHtmlEncode(LOCID_INLINELOOKUP_NEW)
            }
            this.$6_4["inlineMenuFooterDOM"] = $v_6
        }
    },
    $3l_4: function($p0) {
        this.$4C_4();
        this.$51_4($p0)
    },
    $51_4: function($p0) {
        var $v_0 = $find("PrimaryEntity");
        if (IsNull($v_0)) $v_0 = window.parent.$find(Mscrm.ClientApiConstants.primaryEntityId);
        var $v_1 = $get(this.get_element().id.substring(0, this.get_element().id.length - 2)),
            $v_2 = $v_1.getAttribute(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName).toString(),
            $v_3 = $v_0.get_attributes().get($v_2),
            $v_4 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.get_element());
        if (!IsNull($v_3)) {
            var $v_5 = this.$2e_4($p0);
            if (this.$C_4() && !IsNull($v_3.get_value())) {
                var $v_7 = this.Items(false, true, false, false, false);
                $v_3.set_value($v_7.concat($v_5))
            } else $v_3.set_value($v_5);
            var $v_6 = new LookupControlItem;
            $v_6.id = $p0.Id;
            $v_6.type = $p0.TypeCode.toString();
            $v_6.name = isNullOrEmptyString($p0.Name) ? window.LOCID_INLINELOOKUP_NONAME : $p0.Name;
            $v_6.typename = $p0.TypeName;
            this.resolveLookupMruItem($v_6, true);
            $v_3.fireOnChange()
        } else if (!IsNull($v_4)) {
            var $v_8 = this.$2e_4($p0);
            if (this.$C_4() && !IsNull($v_4.get_dataValue())) {
                var $v_9 = this.Items(false, true, false, false, false);
                $v_4.set_dataValue($v_9.concat($v_8))
            } else $v_4.set_dataValue($v_8);
            $v_4.fireOnChange()
        }
    },
    $41_4: function($p0) {
        var $v_0 = this.getLookupSearchText();
        this.$2i_4($p0, this.$$d_$41_4);
        var $v_1 = this.get_$1c_4(),
            $v_2 = $get($v_1),
            $v_3 = $v_2.getAttribute("entityDisplayName"),
            $v_4 = Mscrm.InlineEditUtilities.getLinkedDataObject($P_CRM($v_2)),
            $v_5 = String.format("globalqctimestamps_{0}", $v_1),
            $v_6 = null;
        if (!IsNull($v_4) && $v_5 in $v_4) $v_6 = $v_4[$v_5];
        var $v_7, $$t_A, $$t_B, $v_8 = ($$t_B = this.$2f_4($$t_A = { val: $v_7 }), $v_7 = $$t_A.val, $$t_B);
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .launchGlobalQuickCreate(this.$1P_4,
                $v_3,
                parseInt($v_2.getAttribute("entityTypeCode")),
                $v_6,
                $v_8,
                $v_7,
                $v_0)
    },
    $2f_4: function($p0) {
        var $v_0 = $find("PrimaryEntity");
        if (IsNull($v_0)) $v_0 = window.parent.$find(Mscrm.ClientApiConstants.primaryEntityId);
        $p0.val = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[$v_0.get_typeName()];
        return $v_0.get_recordId()
    },
    $2i_4: function($p0, $p1) {
        $p0.preventDefault();
        this.$0_4.hide();
        var $v_0 = this.getLookupEdit();
        if (!IsNull($v_0)) $v_0.value = "";
        !IsNull($p1) && !IsNull(this.$1Z_4) && $removeHandler(this.$1Z_4, "click", $p1)
    },
    discardView: function() { return },
    $2e_4: function($p0) {
        var $v_0 = [], $v_1 = {};
        $v_1["id"] = $p0.Id;
        $v_1["entityType"] = $p0.TypeName;
        $v_1["name"] = isNullOrEmptyString($p0.Name) ? window.LOCID_INLINELOOKUP_NONAME : $p0.Name;
        $v_1["type"] = $p0.TypeCode;
        $v_0[0] = $v_1;
        return $v_0
    },
    $36_4: function() {
        if (this.$1X_4 && !isNullOrEmptyString(this.$17_4)) {
            var $v_0 = document.createElement("DIV");
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-IL-Header");
            XUI.Html.SetText($v_0, this.$17_4);
            if (!this.$E_4.length) $v_0.style.display = "none";
            this.$6_4["inlineMenuHeaderDOM"] = $v_0
        }
    },
    $3o_4: function($p0) {
        var $v_0 = !isNullOrEmptyString(this.linkControlId()) ? this.$$d_$3o_4 : null;
        this.$2i_4($p0, $v_0);
        this.$1b_4.openFlyOut($p0)
    },
    showLookupDialog: function(item) {
        this.hideInlineMenu();
        this.Lookup(true, false, this.getLookupEdit().value, true)
    },
    $4k_4: function($p0) { this.onLookup(null) },
    $1m_4: function($p0) {
        if ($p0.get_isSearchMore()) {
            this.showLookupDialog($p0);
            return
        }
        var $v_0 = this.$E_4[$p0.get_reference()];
        if (!IsNull($v_0)) {
            var $v_1 = new LookupControlItem;
            $v_1.id = $v_0.get_objectId();
            $v_1.type = $v_0.get_entityTypeCode().toString();
            $v_1.typename = $v_0.get_entityLogicalName();
            $v_1.name = isNullOrEmptyString($v_0.get_title().get_value())
                ? window.LOCID_INLINELOOKUP_NONAME
                : $v_0.get_title().get_value();
            $v_1.onclick = "openlui(new Sys.UI.DomEvent(event));";
            $v_1.displayClass = "ms-crm-Lookup-Item";
            $v_1.data = "";
            $v_1.keyValues = {};
            for (var $v_2 = 0; $v_2 < $v_0.get_hiddenColumns().length; $v_2++) {
                var $v_3 = $v_0.get_hiddenColumns()[$v_2];
                $v_1.keyValues[$v_3.get_columnName()] = new Mscrm.FormInputControl
                    .LookupItemData($v_3.get_columnName(), $v_3.get_value());
                if ($v_3.get_columnName() === "processid") $v_1.processId = $v_3.get_value();
                if ($v_3.get_columnName() === "processts") $v_1.processTimestamp = $v_3.get_value()
            }
            this.selectAndRaiseEvent($v_1)
        }
    },
    selectAndRaiseEvent: function(lookupItem) {
        var $v_0 = false, $v_1 = new Array(1);
        $v_1[0] = lookupItem;
        $v_0 = this.checkIfItemsChangedAndAdd($v_1);
        var $v_2 = new Mscrm.FormInputControl.ResultEventArgs;
        $v_2.$8_1.items = $v_1;
        $v_2.$K_1 = true;
        this.$2v_4($v_2, $v_0)
    },
    checkIfItemsChangedAndAdd: function(itemsAfter) {
        var $v_0 = false, $v_1 = null;
        if (this.get_isInlineMultiLookup()) $v_1 = this.Items(false, false, false, false, false);
        else $v_1 = this.Items(false, true, false, false, false);
        this.Clear(false);
        if (!IsNull(itemsAfter) && !IsNull(itemsAfter[0])) {
            if (this.get_isInlineMultiLookup()) {
                for (var $v_2 = [], $v_3 = 0; $v_3 < $v_1.length; $v_3++) Array.add($v_2, $v_1[$v_3]);
                for (var $v_4 = 0; $v_4 < itemsAfter.length; $v_4++) Array.add($v_2, itemsAfter[$v_4]);
                this.AddItems($v_2, false)
            } else this.addItem(itemsAfter[0]);
            $v_0 = Mscrm.LookupAttribute.itemsDifferent($v_1, itemsAfter)
        } else $v_0 = !IsNull($v_1) && !IsNull($v_1[0]);
        return $v_0
    },
    callbackForShowDialog: function(args, lookupItems) {
        lookupItems = args.$1A_1;
        this.handleAfterLookup(lookupItems)
    },
    AddItems: function(lookupControlItems, executeDataChangeHandler) {
        this.$2T_4("start");
        for (var $v_0 = true,
            $v_1 = lookupControlItems.length,
            $v_2 = this.Items(false, true, false, false, false),
            $v_3 = "",
            $v_4 = 0;
            $v_4 < $v_1;
            $v_4++) {
            if (this.$2m_4(lookupControlItems[$v_4], $v_2)) {
                $v_0 = false;
                continue
            }
            var $v_5 = this.$2M_4(lookupControlItems[$v_4], false);
            if (isNullOrEmptyString($v_5)) $v_0 = false;
            else $v_3 += $v_5;
            $v_2.push(lookupControlItems[$v_4])
        }
        if (this.get_isInlineMultiLookup()) {
            var $v_6 = new Sys.StringBuilder;
            $v_6.append(String.format('<LI style="float:{0};white-space:nowrap;height:16px">',
                Mscrm.Utilities.get_isLeftToRight() ? "left" : "right"));
            $v_6.append(String.format('<input style="border:0px;padding:0px" id="{0}" >',
                this.get_element().id + "_ledit_multi"));
            $v_6.append("</LI>");
            $v_3 += $v_6
        }
        if (!isNullOrEmptyString($v_3)) {
            XUI.Html.DomUtils.GetFirstChild(this.getLookupField()).innerHTML += $v_3;
            this.get_isInlineMultiLookup() && this.$30_4();
            this.$k_4();
            this.$1a_4()
        }
        this.$2z_4();
        this.initializeLookupPresence();
        (IsNull(executeDataChangeHandler) || executeDataChangeHandler) && this.handleDataValueChangedEvent();
        return $v_0
    },
    $2m_4: function($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++)
            if (!Mscrm.LookupAttribute.areItemsDifferent($p1[$v_0], $p0) && this.$3H_4($p1[$v_0], $p0)) return true;
        return false
    },
    Items: function(addUnresolvedText, addUnresolvedItems, clearOnClickMethod, resetClassName, serializeValues) {
        if (this.get_useTouchSkin()) return this.get_dataValue();
        addUnresolvedItems = typeof addUnresolvedItems !== "undefined" && addUnresolvedItems;
        clearOnClickMethod = typeof clearOnClickMethod !== "undefined" && clearOnClickMethod;
        resetClassName = typeof resetClassName !== "undefined" && resetClassName;
        var $v_0 = this.getLookupField(), $v_1 = [];
        if (IsNull(XUI.Html.DomUtils.GetFirstChild($v_0))) return $v_1;
        for (var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_0).childNodes,
            $v_3 = $v_2.length,
            $v_4,
            $v_5 = null,
            $v_6 = 0;
            $v_6 < $v_3;
            $v_6++) {
            $v_5 = null;
            if ($v_2[$v_6].nodeName
                .toUpperCase() ===
                "LABEL") $v_5 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetLastChild($v_2[$v_6]));
            if ($v_2[$v_6].nodeName.toUpperCase() === "LI") $v_5 = XUI.Html.DomUtils.GetFirstChild($v_2[$v_6]);
            else if ($v_2[$v_6].nodeName.toLowerCase() === "#text") $v_5 = XUI.Html.DomUtils.GetFirstChild($v_2[$v_6]);
            if (IsNull($v_5)) continue;
            if ($v_5.nodeName.toLowerCase() === "#text") {
                if (addUnresolvedText)
                    if (this.$C_4())
                        for (var $v_A = $v_5.nodeValue.split(";"), $v_B = $v_A.length, $v_C = 0; $v_C < $v_B; $v_C++) {
                            var $v_D = $v_A[$v_C].trim();
                            $v_D.length > 0 && Array.add($v_1, $v_D)
                        }
                    else Array.add($v_1, $v_5.nodeValue.trim());
                continue
            }
            var $v_7 = parseInt($v_5.getAttribute("category"));
            if (($v_7 === 1 || $v_7 === 2) && !addUnresolvedItems) continue;
            $v_4 = new LookupControlItem;
            $v_4.id = $v_5.getAttribute("oid");
            $v_4.type = $v_5.getAttribute("otype");
            $v_4.typename = this.$O_4[parseInt($v_4.type, 10)];
            if (typeof $v_4
                .typename ===
                "undefined" &&
                Mscrm.EntityPropUtil.isActivityTypeCode($v_4.type)) $v_4.typename = this.$O_4[4200];
            $v_4.resourceSpecId = $v_5.getAttribute("resourcespecid");
            $v_4.effort = $v_5.getAttribute("effort");
            $v_4.exchangeEntryId = $v_5.getAttribute("exchangeentryid");
            $v_4.activityPartyId = $v_5.getAttribute("activitypartyid");
            $v_4.name = this.get_isInlineMultiLookup()
                ? XUI.Html.GetText($v_5).substr(0, XUI.Html.GetText($v_5).length - 1)
                : XUI.Html.GetText($v_5);
            for (var $v_E = 0;
                $v_E < XUI.Html.DomUtils.GetFirstChild(this.get_element().parentNode.parentNode).childNodes.length;
                $v_E++)
                if (XUI.Html.DomUtils.GetFirstChild(this.get_element().parentNode.parentNode).childNodes[$v_E]
                    .getAttribute("class") ===
                    "ms-crm-Hidden-NoBehavior" &&
                    XUI.Html.DomUtils.GetFirstChild(this.get_element().parentNode.parentNode).childNodes[$v_E]
                    .nodeName ===
                    "DIV") {
                    XUI.Html.DomUtils.GetFirstChild(this.get_element().parentNode.parentNode).childNodes[$v_E]
                        .innerHTML = null;
                    XUI.Html.DomUtils.GetFirstChild(this.get_element().parentNode.parentNode).childNodes[$v_E]
                        .innerHTML = CrmEncodeDecode
                        .CrmHtmlEncode(XUI.Html.DomUtils.GetFirstChild(this.get_element().parentNode.parentNode)
                            .childNodes[$v_E + 1].innerHTML) +
                        " " +
                        CrmEncodeDecode.CrmHtmlEncode($v_4.name);
                    break
                }
            $v_4.category = !isNaN($v_7) && isFinite($v_7) ? $v_7 : 0;
            $v_4.ambiguousRecordsXml = $v_5.getAttribute("ambiguousRecordsXml");
            $v_4.selected = $v_5.getAttribute("selected");
            $v_4.onclick = null;
            $v_4.values = this.$2Z_4($v_5.getAttribute("values"), new String, serializeValues);
            $v_4.keyValues = this.$2Z_4($v_5.getAttribute("keyValues"), new String, serializeValues);
            var $v_8 = $v_4.keyValues["processid"], $v_9 = $v_4.keyValues["processts"];
            if (!IsNull($v_8) && !IsNull($v_9)) {
                $v_4.processId = $v_8.value;
                $v_4.processTimestamp = $v_9.value;
                $v_5.setAttribute("processid", $v_4.processId);
                $v_5.setAttribute("processts", $v_4.processTimestamp)
            } else {
                $v_4.processId = $v_5.getAttribute("processid");
                $v_4.processTimestamp = $v_5.getAttribute("processts")
            }
            if ($v_5.nodeName.toUpperCase() === "SPAN") {
                var $v_F = null;
                if (this.get_isInlineMultiLookup()) $v_F = $v_5.getAttribute("onCtrlEnter");
                else $v_F = $v_5.getAttribute("onclick");
                if (!IsNull($v_F) && !clearOnClickMethod) {
                    $v_4.onclick = $v_F.toString();
                    $v_4.onclick = $v_4.onclick.replace(this.$1s_4, "");
                    $v_4.onclick = $v_4.onclick.replace(this.$1t_4, "");
                    $v_4.callback = $v_4.onclick
                }
                $v_4.displayClass = resetClassName ? "ms-crm-Lookup-Item" : $v_5.className;
                $v_4.data = $v_5.getAttribute("data");
                Array.add($v_1, $v_4)
            } else if ($v_5.nodeName
                .toUpperCase() ===
                "A" &&
                addUnresolvedText) Array.add($v_1, XUI.Html.GetText($v_5).trim());
            else if ($v_5.nodeName.toUpperCase() === "INPUT" && addUnresolvedText && this.get_isInlineMultiLookup()) {
                var $v_G = this.getLookupEdit();
                !IsNull($v_G) && $v_G.value.trim().length > 0 && Array.add($v_1, $v_G.value.trim())
            }
        }
        return $v_1
    },
    RemoveItem: function(guid) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()), $v_1 = $v_0.getElementsByTagName("LI");
        if (!$v_1.length) return false;
        var $v_2 = $v_1.length - 1;
        while ($v_2 >= 0) {
            var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_1[$v_2]), $v_4 = $v_3.getAttribute("oid");
            if ($v_4 === guid) {
                var $v_5 = $v_3.getAttribute("onclick"), $v_6 = IsNull($v_5) ? "" : $v_5.toString();
                $v_6 = $v_6.replace(this.$1s_4, "");
                $v_6 = $v_6.replace(this.$1t_4, "");
                $v_3.setAttribute("otype", IsNull($v_3.getAttribute("otype")) ? "" : $v_3.getAttribute("otype"));
                $v_3.className = IsNull($v_3.className) ? "" : $v_3.className;
                this.get_element().setAttribute("data",
                    IsNull(this.get_element().getAttribute("data")) ? "" : this.get_element().getAttribute("data"));
                var $v_7 = new LookupControlItem;
                $v_7.id = $v_4;
                $v_7.type = $v_3.getAttribute("otype");
                $v_7.name = this.get_isInlineMultiLookup()
                    ? XUI.Html.GetText($v_3).substr(0, XUI.Html.GetText($v_3).length - 1)
                    : XUI.Html.GetText($v_3);
                $v_7.onclick = $v_6;
                $v_7.displayClass = $v_3.className;
                $v_7.data = $v_3.getAttribute("data");
                $v_7.typename = this.$O_4[parseInt($v_3.getAttribute("otype"), 10)];
                $v_0.removeChild($v_1[$v_2]);
                this.$k_4();
                return $v_7
            }
            $v_2--
        }
        this.$P_4(null);
        return null
    },
    IsValid: function() {
        !this.$D_4 && this.get_autoResolve() && this.hasUnresolvedText() && this.resolveAndExitEdit(true, false);
        if (this.$D_4) {
            alert(window.LOCID_LU_MSG_HASUNRESOLVEDITEMS);
            return false
        }
        for (var $v_0 = this
                     .Items(true, true, false, false, false),
            $v_1 = $v_0.length,
            $v_2 = 0;
            $v_2 < $v_1;
            $v_2++) {
            var $v_3 = $v_0[$v_2].category;
            if ($v_3 === 1 || $v_3 === 2) {
                alert(window.LOCID_LU_MSG_HASUNRESOLVEDITEMS);
                return false
            }
            if ($v_3 === 6) {
                alert("The Lookup MRU Item that you have selected hasn't been resolved yet.");
                return false
            }
        }
        return true
    },
    RaiseOnAfterSelectEvent: function(args) {
        if (IsNull(args)) {
            args = new Mscrm.FormInputControl.ResultEventArgs;
            args.$8_1.items = this.Items(false, false, false, false, false);
            args.$K_1 = true
        }
        var $v_0 = this.get_events().getHandler("OnAfterSelectEvent");
        !IsNull($v_0) && $v_0(this, args)
    },
    RaiseOnChangeEvent: function(args) {
        if (IsNull(args)) {
            args = new Mscrm.FormInputControl.ResultEventArgs;
            args.$8_1.items = this.Items(false, false, false, false, false);
            args.$K_1 = true
        }
        this.fireControlEvent("OnInternalBeforeChangeEvent", args);
        args.$h_1 && this.fireControlEvent("OnChangeEvent", args)
    },
    RaiseSetAdditionalParamsEvent: function() {
        this.$z_4 = [];
        this.$10_4 = [];
        var $v_0 = this.get_events().getHandler("OnSetAdditionalParamsEvent");
        !IsNull($v_0) && $v_0(this, Sys.EventArgs.Empty)
    },
    AreValuesDifferent: function(items) {
        return Mscrm.LookupAttribute.itemsDifferent(items,
            this
            .$1G_4(false, false))
    },
    RefreshLookupItemImage: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.getLookupField();
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.getElementsByTagName("Img");
        if (!IsNull($v_1))
            for (var $v_2 = $v_1.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
                var $v_4 = $v_1[$v_3];
                if (!IsNull($v_4)) {
                    var $v_5 = $v_4.getAttribute("imageSrc");
                    if (!IsNull($v_5)) $v_4.src = $v_5
                }
            }
    },
    GetLookupTypeIcon: function(currentType, unresolvedCategory) {
        if (this.get_useTouchSkin()) return null;
        var $v_0 = new Mscrm.FormInputControl.LookupTypeIcon;
        $v_0.$d_0 = Mscrm.IconUtil.isIconFlipped(currentType, 0);
        if (Mscrm.EntityPropUtil.isActivityTypeCode(currentType) &&
            (this.get_lookupTypes() === "4200" ||
                this.get_lookupTypes().indexOf("4200,") !== -1 ||
                this.get_lookupTypes().indexOf(",4200") !== -1) ||
            currentType === 9005) $v_0.$I_0 = Mscrm.IconUtil.getIconPath(currentType, 0).toString();
        else {
            if (!IsNull(this.get_lookupTypes()) &&
                !IsNull(this.get_lookupTypeIcons()) &&
                this.get_lookupTypes().length > 0 &&
                this.get_lookupTypeIcons().length > 0)
                for (var $v_1 = this.get_lookupTypes().split(","),
                    $v_2 = this.get_lookupTypeIcons().split(":"),
                    $v_3 = $v_1.length,
                    $v_4 = 0;
                    $v_4 < $v_3;
                    $v_4++) if ($v_1[$v_4] === currentType.toString()) $v_0.$I_0 = $v_2[$v_4];
            if (currentType === 9206) {
                $v_0.$I_0 = window.CDNURL + "/_imgs/ico_16_9206.gif";
                $v_0.$d_0 = false
            } else if (unresolvedCategory === 1) $v_0.$I_0 = window.CDNURL + "/_imgs/error/notif_icn_warn16.png";
            else if (unresolvedCategory === 2) $v_0.$I_0 = window.CDNURL + "/_imgs/error/notif_icn_crit16.png"
        }
        return $v_0
    },
    Focus: function(eventObject) {
        if (this.get_useTouchSkin()) return;
        this.tryStopFocusEventPropagation(eventObject);
        if (this.get_isInlineMultiLookup()) this.$2F_4();
        else {
            var $v_0 = this.getLookupField(), $v_1 = this.getLookupEdit();
            if (IsNull($v_1) || $v_1.className === "ms-crm-Hidden-NoBehavior") {
                try {
                    $v_0.style.backgroundColor = "#abc0e7";
                    $v_0.focus()
                } catch ($$e_3) {
                }
                if (!IsNull($v_1)) $v_1.disabled = true
            } else
                try {
                    $v_1.focus()
                } catch ($$e_4) {
                }
        }
    },
    tryStopFocusEventPropagation: function(eventObject) {
        if (this.get_isInlineLookup())
            if (!IsNull(eventObject)) {
                eventObject.stopPropagation();
                return true
            }
        return false
    },
    UpdateItem: function(guid, lookupControlItem, fireOnChange) {
        if (this.get_useTouchSkin()) return false;
        if (!this.IsPermissibleType(lookupControlItem) ||
            IsNull(lookupControlItem.name) ||
            IsNull(lookupControlItem.displayClass)) return false;
        for (var $v_0 = this.$C_4(),
            $v_1 = this.getLookupField().getElementsByTagName("SPAN"),
            $v_2 = $v_1.length,
            $v_3 = 0;
            $v_3 < $v_2;
            $v_3++) {
            var $v_4 = $v_1[$v_3];
            if ($v_4.getAttribute("oid") === guid) {
                if ($v_0) {
                    var $v_7 = XUI.Html.DomUtils
                        .GetNextSibling(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_4)));
                    if (!IsNull($v_7)) {
                        $v_7.nodeValue = lookupControlItem.name;
                        XUI.Html.SetText($v_7, lookupControlItem.name)
                    }
                } else {
                    var $v_8 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_4));
                    if (!IsNull($v_8)) {
                        $v_8.nodeValue = lookupControlItem.name;
                        XUI.Html.SetText($v_8, lookupControlItem.name)
                    }
                }
                $v_4.title = lookupControlItem.name;
                !IsNull(lookupControlItem.id) && $v_4.setAttribute("oid", lookupControlItem.id);
                if (!IsNull(lookupControlItem.type)) {
                    $v_4.setAttribute("otype", lookupControlItem.type);
                    $v_4.setAttribute("otypename",
                        IsNull(lookupControlItem.typename)
                        ? this.$O_4[parseInt(lookupControlItem.type, 10)]
                        : lookupControlItem.typename);
                    var $v_9 = XUI.Html.DomUtils.GetFirstChild($v_4);
                    if ($v_0) $v_9 = XUI.Html.DomUtils.GetFirstChild($v_9);
                    $v_9.src = this.GetLookupTypeIcon(parseInt(lookupControlItem.type),
                        parseInt(lookupControlItem.category)).$I_0
                }
                if (!IsNull(lookupControlItem.displayClass)) $v_4.className = lookupControlItem.displayClass;
                if (this.get_isInlineMultiLookup()) {
                    $v_4.setAttribute("onclick",
                        String
                        .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).selectInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)));
                    $v_4.setAttribute("onkeydown",
                        String
                        .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).keyDownInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)));
                    $v_4.setAttribute("tabindex", "0");
                    if (!IsNull(lookupControlItem.onclick)) {
                        $v_4.setAttribute("onCtrlEnter", lookupControlItem.onclick);
                        $v_4.setAttribute("ondblclick", lookupControlItem.onclick)
                    }
                } else !IsNull(lookupControlItem.onclick) && $v_4.setAttribute("onclick", lookupControlItem.onclick);
                !IsNull(lookupControlItem.data) && $v_4.setAttribute("data", lookupControlItem.data);
                !IsNull(lookupControlItem.category) && $v_4.setAttribute("category", lookupControlItem.category);
                !IsNull(lookupControlItem.ambiguousRecordsXml) &&
                    $v_4.setAttribute("ambiguousRecordsXml", lookupControlItem.ambiguousRecordsXml);
                !IsNull(lookupControlItem.resourceSpecId) &&
                    $v_4.setAttribute("resourcespecid", lookupControlItem.resourceSpecId);
                !IsNull(lookupControlItem.effort) && $v_4.setAttribute("effort", lookupControlItem.effort);
                !IsNull(lookupControlItem.exchangeEntryId) &&
                    $v_4.setAttribute("exchangeentryid", lookupControlItem.exchangeEntryId);
                !IsNull(lookupControlItem.activityPartyId) &&
                    $v_4.setAttribute("activitypartyid", lookupControlItem.activityPartyId);
                typeof lookupControlItem.values !== "undefined" &&
                    $v_4.setAttribute("values", this.$1n_4(lookupControlItem.values));
                typeof lookupControlItem.keyValues !== "undefined" &&
                    $v_4.setAttribute("keyValues", this.$1n_4(lookupControlItem.keyValues));
                var $v_5 = new Mscrm.FormInputControl.ResultEventArgs;
                $v_5.$K_1 = true;
                $v_5.$8_1.items = this.Items(false, false, false, false, false);
                if (!$v_0)
                    if (!IsNull($v_5.$8_1
                            .items) &&
                        $v_5.$8_1.items.length > 0) $v_5.$8_1.items[0].keyValues = lookupControlItem.keyValues;
                this.RaiseOnAfterSelectEvent($v_5);
                if (fireOnChange) {
                    $v_5 = new Mscrm.FormInputControl.ResultEventArgs;
                    $v_5.$K_1 = true;
                    $v_5.$8_1.items = this.Items(false, false, false, false, false);
                    if (!$v_0)
                        if (!IsNull($v_5.$8_1
                                .items) &&
                            $v_5.$8_1.items.length > 0) $v_5.$8_1.items[0].keyValues = lookupControlItem.keyValues;
                    this.RaiseOnChangeEvent($v_5)
                }
                var $v_6 = [];
                Array.add($v_6, $v_4);
                this.queryLookupPresence($v_6);
                this.$k_4();
                this.$1a_4();
                return true
            }
        }
        return false
    },
    IsPermissibleType: function(lookupControlItem) {
        if (typeof lookupControlItem === "string") return true;
        if (parseInt(lookupControlItem.category) === 5) return true;
        if (this
            .$U_4 &&
            !parseInt(lookupControlItem.type, 10) ||
            parseInt(lookupControlItem.type, 10) === 9206) return true;
        if (!this.$D_4 && !this.hasUnresolvedText()) if (!this.get_isDirty()) return true;
        if (!IsNull(lookupControlItem.typename) && !isNullOrEmptyString(lookupControlItem.typename)) {
            if (isNullOrEmptyString(this.get_lookupTypeNames())) return false;
            this.$22_4 = new RegExp("(?:^|,)\\s*" +
                lookupControlItem.typename +
                "\\s*:\\s*([0-9]+)\\s*:\\s*([^,]+)\\s*(?:,|$)",
                "i");
            var $v_0 = this.$22_4.exec(this.get_lookupTypeNames());
            if (!IsNull($v_0)) lookupControlItem.type = $v_0[1];
            else return false
        } else if (!IsNull(lookupControlItem.type) && !isNaN(parseInt(lookupControlItem.type, 10))) {
            var $v_1 = parseInt(lookupControlItem.type, 10) === 9005 ? 4700 : lookupControlItem.type;
            if (Mscrm.EntityPropUtil.isActivityTypeCode($v_1) &&
            (this.get_lookupTypes() === "4200" ||
                this.get_lookupTypes().indexOf("4200,") !== -1 ||
                this.get_lookupTypes().indexOf(",4200") !== -1)) return true;
            if (isNullOrEmptyString(this.get_lookupTypes())) return false;
            if ($v_1.toString() !== this.get_lookupTypes())
                if (this.get_lookupTypes().indexOf($v_1 + ",") === -1) {
                    if (this.get_lookupTypes().indexOf("," + $v_1) === -1) return false;
                    lookupControlItem.typename = this.$O_4[parseInt(lookupControlItem.type, 10)]
                }
        } else return false;
        return true
    },
    GetDataXml: function(attributeName) {
        var $v_0 = "", $v_1 = null, $v_2 = this.$4B_4();
        if (!IsNull($v_2.$8_1)) $v_0 = $v_2.$8_1;
        else {
            var $v_3 = !IsNull(attributeName) ? attributeName : this.get_element().id;
            $v_0 = "<" + CrmEncodeDecode.CrmXmlEncode($v_3);
            if (this.get_lookupStyle()
                .toLowerCase() ===
                "single" ||
                this.get_lookupStyle().toLowerCase() === "subject") {
                $v_1 = this.Items(false, false, false, false, false);
                if ($v_1.length > 0) {
                    $v_0 += ' type="' + CrmEncodeDecode.CrmXmlAttributeEncode($v_1[0].type) + '"';
                    $v_0 += ' name="' + CrmEncodeDecode.CrmXmlAttributeEncode($v_1[0].name) + '"';
                    $v_0 += ">" + CrmEncodeDecode.CrmXmlEncode($v_1[0].id)
                } else {
                    var $v_4 = this.get_defaultValue();
                    $v_0 += ' type="';
                    if (IsNull($v_4)) $v_0 += '0">';
                    else {
                        $v_0 += CrmEncodeDecode.CrmXmlAttributeEncode(this.$a_4[0].type);
                        $v_0 += '" name="' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$a_4[0].name) + '">'
                    }
                }
            } else if (this.get_lookupStyle().toLowerCase() === "multi") {
                $v_0 += ">";
                $v_1 = this.Items(false, false, false, false, false);
                for (var $v_5 = $v_1
                             .length,
                    $v_6 = 0;
                    $v_6 < $v_5;
                    $v_6++)
                    $v_0 += String.format("<item><id>{0}</id><type>{1}</type><name>{2}</name></item>",
                        CrmEncodeDecode.CrmXmlEncode($v_1[$v_6].id),
                        CrmEncodeDecode.CrmXmlEncode($v_1[$v_6].type),
                        CrmEncodeDecode.CrmXmlEncode($v_1[$v_6].name))
            } else $v_0 += ">dataxml NYI for lookup of style = " + CrmEncodeDecode.CrmXmlEncode(this.get_lookupStyle());
            $v_0 += "</" + CrmEncodeDecode.CrmXmlEncode($v_3) + ">"
        }
        return $v_0
    },
    setFocus: function(eventObject) {
        if (this.get_useTouchSkin()) return;
        this.tryStopFocusEventPropagation(eventObject);
        if (this.$Z_4) {
            this.$Z_4 = false;
            return
        }
        if (this.get_isInlineMultiLookup()) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()),
                $v_1 = $P_CRM($v_0).find(".ms-crm-selected-Lookup-Item"),
                $v_2 = this.$28_4();
            if ($v_1.length <= 0 && !IsNull($v_2)) this.$4e_4();
            else if ($v_1.length > 0)
                try {
                    $v_1[0].focus()
                } catch ($$e_4) {
                }
        }
        this.$5_4 = "start";
        if (!IsNull(eventObject) && eventObject.shiftKey) this.$5_4 = "end";
        if (!IsNull(eventObject) && !IsNull(eventObject.target)) {
            var $v_3 = eventObject.target;
            switch ($v_3.className.toLowerCase()) {
            case "ms-crm-lookup-item":
            case "ms-crm-lookup-partyitem-noaddress":
            case "ms-crm-lookup-partyitem-unresolved":
            case "ms-crm-lookup-ambiguous":
            case "ms-crm-lookup-unresolved":
                switch ($v_3.tagName.toUpperCase()) {
                case "SPAN":
                case "IMG":
                    return
                }
                break
            }
        }
        if (!this.get_disabled()) {
            var $v_4 = this.getLookupEdit();
            if (!IsNull($v_4) && !this.get_isInlineMultiLookup()) $v_4.disabled = true;
            var $v_5 = !IsNull(eventObject) && eventObject.type === "focus";
            if (this.isEditable() && !$v_5) {
                var $v_8 = this.$s_4();
                !IsNull($v_8) && !IsNull($v_8.GetTab) && $v_8.GetTab(this.get_element(), true)
            }
            var $v_6 = this.getLookupField();
            if (XUI.Html.GetText($v_6).length <= 0 && !this.Items(true, true, false, false, false).length)
                if (isControlVisible(this.get_element())) this.$2y_4();
                else return;
            var $v_7 = XUI.Html.DomUtils.GetFirstChild($v_6);
            if (!Mscrm.Utilities.get_isLeftToRight() && !IsNull($v_6) && !IsNull($v_7)) {
                var $v_9 = XUI.Html.DomUtils.GetFirstChild($v_7);
                if (!IsNull($v_9)) {
                    var $v_A = $v_9;
                    $v_A.scrollIntoView(false)
                }
            }
            if (!IsNull(eventObject) && !IsNull(eventObject.target) && eventObject.target === this.get_element()
            ) return;
            if (this.get_isInlineMultiLookup()) {
                this.$2F_4();
                var $v_B = this.getLookupEdit();
                !IsNull($v_B) && $v_B.removeAttribute("onfocus")
            } else this.$2Y_4()
        }
    },
    fireOnChange: function() { this.RaiseOnChangeEvent(null) },
    onLookup: function(domEvent) {
        if (!this.$m_4 &&
            (this.get_enableInlineLookupForEditForms() || this.get_isInlineLookup()) &&
            this.$1j_4() !== 127)
            if (!IsNull(this.get_element().getAttribute("isDeDupLookup")) &&
                this.get_element().getAttribute("isDeDupLookup").toString() === "1" &&
                !isNullOrEmptyString(this.$2c_4())) this.$4q_4();
            else this.showSearchResults();
        else this.Lookup(false, false, "", false)
    },
    $2q_4: function() {
        return String.format("Mscrm.FormControlInputBehavior.GetBehavior({0}).showResultsForUnresolved()",
            CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id))
    },
    $2Y_4: function() {
        var $v_0 = XUI.Html.CreateDomEvent("focus");
        XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
    },
    $4q_4: function() {
        if (this.get_readOnly()) return;
        this.$4j_4(this.$$d_$4r_4)
    },
    $4j_4: function($p0) {
        var $v_0 = null, $v_1 = this.$1j_4();
        $v_0 = new RemoteCommand("LookupService", "RetrieveDuplicates");
        $v_0.SetParameter("leadId", this.$2c_4());
        $v_0.SetParameter("lookupType", $v_1);
        $v_0.SetParameter("defaultViewId", this.get_defaultViewId());
        Mscrm.MetricsReporting.instance().addMetric("MatchRecords", $v_1.toString());
        $v_0.Execute($p0)
    },
    $1j_4: function() { return parseInt(this.get_element().getAttribute("lookuptypes").toString()) },
    $4r_4: function($p0, $p1) {
        this.$2U_4($p0);
        this.showInlineLookupMenu()
    },
    $2c_4: function() { return window._id },
    $4T_4: function($p0) {
        var $v_0 = this.get_events().getHandler("OnShowDialog");
        if (!IsNull($v_0)) {
            $v_0(this, $p0);
            return true
        }
        return false
    },
    $4C_4: function() {
        var $v_0 = this.get_events().getHandler("OnGlobalQuickCreateSuccess");
        !IsNull($v_0) && $v_0(this, null)
    },
    focusEdit: function(domEvent) {
        if (this.$1E_4) {
            this.$1E_4 = false;
            return
        }
        if (this.get_isInlineMultiLookup()) {
            var $v_0 = this.getLookupEdit().parentNode,
                $v_1 = $v_0.parentNode,
                $v_2 = $P_CRM($v_1).find(".ms-crm-selected-Lookup-Item");
            $v_2.removeClass("ms-crm-selected-Lookup-Item")
        }
        if (!this.get_isInlineMultiLookup()) {
            var $v_3 = XUI.Html.CreateDomEvent("focus");
            XUI.Html.DispatchDomEvent(this.get_element(), $v_3)
        } else Mscrm.Utilities.isIE9() && this.tryStopFocusEventPropagation(domEvent)
    },
    $s_4: function() {
        if (!this.get_isInlineLookup()) {
            var $v_0 = this.get_element();
            while (!IsNull($v_0) && $v_0.tagName !== "FORM") $v_0 = $v_0.parentNode;
            if (IsNull($v_0)) return null;
            return $v_0.className === "ms-crm-Form" ? $find($v_0.id) : null
        } else return $find(this.get_element().getAttribute("data-fdeid"))
    },
    $2y_4: function() {
        if (this.$1k_4()) {
            var $v_0 = this.getLookupEdit(),
                $v_1 = this.getLookupField(),
                $v_2 = this.$C_4() && XUI.Html.GetText($v_1).length > 0;
            if (!IsNull($v_0)) {
                $v_0.disabled = false;
                if (this.get_isInlineLookup()) $v_0.className = "ms-crm-InlineInput ms-crm-InlineLookupEdit";
                else $v_0.className = "ms-crm-Normal";
                !this.get_isInlineMultiLookup() &&
                    Sys.UI.DomElement.addCssClass($v_1,
                        $v_2 && !this.get_isInlineLookup() ? "ms-crm-FloatLookup" : "ms-crm-Hidden-NoBehavior");
                try {
                    $v_0.focus()
                } catch ($$e_3) {
                }
                if ($v_2 || this.get_isInlineMultiLookup()) {
                    $v_1.style.top = ($v_1.offsetTop + $v_0.offsetHeight).toString() + "px";
                    $v_1.style.width = $v_1.parentNode.offsetWidth.toString() + "px"
                } else $v_1.style.width = "0px"
            }
        }
    },
    endContentEditing: function(isOnBlur) {
        if (this.get_useTouchSkin()) return;
        this.$t_4();
        !IsNull(this.$0_4) && this.$0_4.get_isVisible() && this.hideInlineMenu();
        var $v_0 = this.getLookupEdit(), $v_1 = this.getLookupField();
        if (!IsNull($v_0) && $v_0.className !== "ms-crm-Hidden-NoBehavior") {
            if ($v_1.className.indexOf("ms-crm-FloatLookup") >= 0) {
                $v_1.style.top = (Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($v_1, "top")) - $v_0.offsetHeight)
                    .toString() +
                    "px";
                $v_1.style.width = "100%"
            } else $v_1.style.width = "100%";
            if (!this.get_isInlineMultiLookup()) $v_0.className = "ms-crm-Hidden-NoBehavior";
            Sys.UI.DomElement.removeCssClass($v_1, "ms-crm-FloatLookup");
            Sys.UI.DomElement.removeCssClass($v_1, "ms-crm-Hidden-NoBehavior");
            $v_0.value = ""
        }
    },
    $30_4: function() {
        var $v_0 = this.getLookupEdit();
        if (IsNull($v_0)) return;
        if (Mscrm.Utilities.isMobileRefresh()) {
            $addHandler($v_0, "click", this.$$d_$4L_4);
            $addHandler($v_0, "focus", this.$$d_$4O_4)
        } else {
            $addHandler($v_0, "dblclick", this.$$d_$44_4);
            $addHandler($v_0, "keyup", this.$$d_$4J_4);
            $addHandler($v_0, "keypress", this.$$d_$4I_4);
            $addHandler($v_0, "keydown", this.$$d_$4G_4);
            $addHandler($v_0, "blur", this.$$d_$49_4);
            $addHandler($v_0, "focus", this.$$d_focusEdit)
        }
        !this.get_isInlineLookup() &&
            this.get_enableInlineLookupForEditForms() &&
            $addHandler(document.documentElement, "click", this.$$d_$4h_4);
        this.$2R_4($v_0)
    },
    $4O_4: function($p0) { this.$2Q_4() },
    $4L_4: function($p0) {
        this.$2Q_4();
        this.onLookup($p0);
        $p0.stopPropagation();
        $p0.preventDefault()
    },
    $2Q_4: function() {
        var $v_0 = this.getLookupEdit();
        !IsNull($v_0) && $v_0.blur()
    },
    $4h_4: function($p0) {
        if (IsNull(this.get_element())) return;
        if ($p0.target === this.get_element() ||
            $p0.target === this.getLookupEdit() ||
            this.isMruVisible() ||
            !IsNull(this.$0_4) && this.$0_4.get_isVisible() ||
            !IsNull(this.getLookupField()) &&
            ($p0.target === this.getLookupField() || $p0.target === this.getLookupField().parentNode)) return;
        this.resolveAndExitEdit(true, true)
    },
    $2R_4: function($p0) {
        if (IsNull($p0)) $p0 = this.getLookupEdit();
        if (IsNull($p0)) return;
        if (!this.get_isInlineMultiLookup()) $p0.disabled = true;
        var $v_0 = this.$1k_4();
        if ($v_0 && $p0.style.display === "none") $p0.style.display = "inline";
        else if (!$v_0 && $p0.style.display !== "none") $p0.style.display = "none"
    },
    $1k_4: function() { return this.get_autoResolve() && !this.getLookupField().disabled && this.isEditable() },
    get_$40_4: function() {
        var $v_0 = this.getLookupEdit();
        if (this.get_isInlineMultiLookup())
            return XUI.Html.DomUtils.GetNextSibling($v_0.parentNode.parentNode.parentNode);
        else return XUI.Html.DomUtils.GetPrevSibling($v_0)
    },
    get_isInlineMultiLookup: function() { return this.$C_4() && this.get_isInlineLookup() },
    $3q_4: function() {
        var $v_0 = this.getLookupField();
        if (Mscrm.Utilities.isMobileRefresh()) {
            $addHandler($v_0, "click", this.$$d_$4M_4);
            $addHandler($v_0, "focus", this.$$d_$4N_4)
        } else {
            $addHandler($v_0, "dblclick", this.$$d_$43_4);
            $addHandler($v_0, "keyup", this.$$d_$2s_4);
            $addHandler($v_0, "keypress", this.$$d_$4H_4);
            $addHandler($v_0, "keydown", this.$$d_$4F_4);
            $addHandler($v_0, "focus", this.$$d_setFocus);
            $addHandler($v_0, "blur", this.$$d_$3C_4)
        }
        this.$30_4();
        this.get_element().title = this.get_element().alt = this.get_disabled() ? "" : this.$2g_4();
        XUI.Html.DomUtils.GetNextSibling(this.get_element()).title = this.get_element().title;
        var $v_1 = this.getLookupEdit();
        if (!IsNull($v_1)) {
            XUI.Html.SetText(this.get_$40_4(), this.$2d_4());
            (Mscrm.Utilities.isIosDevice() || window.UseTabletExperience) &&
                this.$1k_4() &&
                !Mscrm.Utilities.isMobileRefresh() &&
                $v_0.setAttribute("contentEditable", "true")
        }
        this.$a_4 = this.$1G_4(false, false);
        this.set_forceSubmit(false);
        var $v_2 = this.get_lookupTypeNames();
        if (!isNullOrEmptyString($v_2)) {
            var $v_3 = new RegExp("(?:^|,)\\s*([^:]+)\\s*:\\s*([0-9]+)\\s*:\\s*([^,]+)\\s*", "ig"), $v_4 = null;
            while (!IsNull($v_4 = $v_3.exec($v_2))) {
                this.$O_4[parseInt($v_4[2], 10)] = $v_4[1];
                this.$j_4[parseInt($v_4[2], 10)] = $v_4[3]
            }
        }
        this.$3t_4()
    },
    $4N_4: function($p0) { this.$2P_4() },
    $4M_4: function($p0) {
        this.$2P_4();
        this.onLookup($p0);
        $p0.stopPropagation();
        $p0.preventDefault()
    },
    $2P_4: function() {
        var $v_0 = this.getLookupField();
        !IsNull($v_0) && $v_0.blur()
    },
    $2g_4: function() {
        if (this.get_isInlineLookup()) return window.LOCID_INLINELOOKUP_SELECT_VALUE;
        var $v_0 = this.$2d_4();
        return !isNullOrEmptyString($v_0)
            ? String.format(window.LOCID_LU_SELECT_VALUE_FOR, $v_0)
            : window.LOCID_LU_SELECT_VALUE
    },
    $2d_4: function() {
        if (!IsNull(this.get_forField())) return this.get_forField();
        var $v_0 = XUI.Html.DomUtils.GetPrevSibling(this.get_element().parentNode.parentNode.parentNode.parentNode
            .parentNode);
        if (!IsNull($v_0)) {
            var $v_2 = XUI.Html.GetText($v_0);
            if (!isNullOrEmptyString($v_2)) return $v_2.trim()
        }
        var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.get_element().parentNode.parentNode);
        if (!IsNull($v_1)) {
            var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_1);
            if (!IsNull($v_3)) {
                $v_0 = XUI.Html.DomUtils.GetNextSibling($v_3);
                if (!IsNull($v_0)) {
                    var $v_4 = XUI.Html.GetText($v_0);
                    if (!isNullOrEmptyString($v_4)) return $v_4
                }
            }
        }
        return ""
    },
    $44_4: function($p0) {
        var $v_0 = this.getLookupEdit();
        if ($v_0.className !== "ms-crm-Hidden-NoBehavior") {
            if (!$v_0.value.length)
                if (this.isMruEnabled() && !this.isMruVisible()) {
                    this.$2H_4(true);
                    return
                }
            this.Lookup(true, true, $v_0.value, false);
            this.endContentEditing(false)
        }
    },
    $43_4: function($p0) {
        var $v_0 = $p0.target;
        while ($v_0.tagName.toUpperCase() !== "DIV") $v_0 = $v_0.parentNode;
        if (!this.get_disabled() && XUI.Html.GetText($v_0) === " ") {
            this.Focus(null);
            Mscrm.Utilities.click(this.get_element())
        }
    },
    $38_4: function($p0) {
        for (var $v_0 = $p0
                     .length,
            $v_1 = 0;
            $v_1 < $v_0;
            $v_1++) $p0[$v_1].typename = this.$O_4[parseInt($p0[$v_1].type, 10)]
    },
    $3j_4: function($p0) {
        var $v_0 = this.get_lookupTypeNames();
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = new RegExp("(?:^|,)\\s*" + $p0 + "\\s*:\\s*([0-9]+)\\s*:\\s*([^,]+)\\s*(?:,|$)", "i");
            if ($v_1.test($v_0)) return $v_1.exec($v_0)[1]
        }
        return 0
    },
    $3N_4: function($p0) {
        for (var $v_0 = $p0.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = $p0[$v_1], $v_3 = $v_2.values;
            if (!IsNull($v_3) && typeof $v_3 === "string")
                $v_2.values = Sys.Serialization.JavaScriptSerializer.deserialize($v_3);
            var $v_4 = $v_2.keyValues;
            if (!IsNull($v_4) && typeof $v_4 === "string")
                $v_2.keyValues = Sys.Serialization.JavaScriptSerializer.deserialize($v_4)
        }
    },
    $3X_4: function($p0) {
        if (IsNull($p0)) return null;
        else if (!IsNull($p0.get_objectTypeName)) return $p0.get_objectTypeName();
        else return $p0.get_typeName()
    },
    $1i_4: function($p0) {
        if (IsNull($p0)) return null;
        else if (!IsNull($p0.get_objectId)) return $p0.get_objectId();
        else return $p0.get_recordId()
    },
    $25_4: function($p0) {
        if (IsNull($p0)) return null;
        else if (!IsNull($p0.get_objectTypeCode)) return $p0.get_objectTypeCode();
        else return Mscrm.EntityPropUtil.EntityTypeName2CodeMap[$p0.get_typeName()]
    },
    get_filterRelationshipData: function() { return this.$24_4() },
    $24_4: function() {
        var $v_0 = this.get_filterRelationshipId(),
            $v_1 = "",
            $v_2 = "",
            $v_3 = this.get_element().getAttribute("DependantAttributeName"),
            $v_4 = this.get_element().getAttribute("DependantAttributeType");
        if (!isNullOrEmptyString($v_0))
            if (!isNullOrEmptyString($v_3) && !isNullOrEmptyString($v_4)) {
                var $v_5 = this.$s_4();
                if (!IsNull($v_5)) {
                    var $v_6 = $v_3.split(".");
                    if ($v_6.length > 1)
                        if ($v_6[0] !== this.$3X_4($v_5)) {
                            $v_1 = this.$1i_4($v_5);
                            $v_2 = this.$25_4($v_5)
                        } else {
                            var $v_7 = Xrm.Page.getAttribute($v_6[1]);
                            if (!IsNull($v_7))
                                if ($v_7.getAttributeType() === "lookup") {
                                    var $v_8 = $v_7.getValue();
                                    if (!IsNull($v_8) && !IsNull($v_8[0]) && $v_8[0].type === $v_4) {
                                        $v_1 = $v_8[0].id;
                                        $v_2 = $v_8[0].type
                                    }
                                } else {
                                    $v_2 = $v_4;
                                    $v_1 = $v_7.getValue()
                                }
                        }
                }
                if (IsNull($v_1) || IsNull($v_2) || IsNull($v_3) || $v_1 === "" || $v_2 === "" || $v_3 === "") {
                    $v_1 = "";
                    $v_2 = "";
                    $v_0 = "";
                    $v_3 = ""
                }
            }
        return new Mscrm.FormInputControl.FilterRelationshipData($v_0, $v_1, $v_2, $v_3)
    },
    $47_4: function($p0) {
        if (IsNull($p0)) return null;
        if (IsNull($p0.tagName)) return null;
        do {
            if ($p0.tagName.toUpperCase() === "DIV" ||
                $p0.tagName.toUpperCase() === "SPAN" ||
                $p0.tagName.toUpperCase() === "LI")
                if ($p0.className.toLowerCase().indexOf("ms-crm-lookup") >= 0) return $p0;
            if (IsNull($p0.parentNode) || $p0.parentNode === $p0) return null;
            $p0 = $p0.parentNode
        } while (true)
    },
    $4J_4: function($p0) {
        switch ($p0.keyCode) {
        case 13:
        case 27:
        case 127:
        case 38:
        case 40:
        case 9:
        case 16:
        case 17:
        case 18:
            $p0.stopPropagation();
            $p0.preventDefault();
            break;
        default:
            if ((this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms()) &&
                !IsNull(this.$0_4) &&
                this.$0_4.get_isVisible()) {
                if (this.$1_4 !== -1) {
                    var $v_0 = this.$0_4.get_menuItems()[this.$1_4];
                    !IsNull($v_0) && $v_0.displayRestStyle()
                }
                this.$1_4 = -1
            } else this.$2H_4(false);
            this.get_isInlineMultiLookup() && $p0.stopPropagation();
            break
        }
    },
    $2s_4: function($p0) {
        switch ($p0.keyCode) {
        case 8:
            $p0.preventDefault();
            $p0.stopPropagation();
            break;
        case 13:
            $p0.preventDefault();
            $p0.stopPropagation();
            break;
        case 85:
            $p0.ctrlKey && $p0.stopPropagation();
            break
        }
    },
    $4I_4: function($p0) {
        switch ($p0.keyCode) {
        case 13:
            $p0.preventDefault();
            $p0.stopPropagation();
            break;
        case 11:
        case 75:
            $p0.ctrlKey && $p0.preventDefault();
            break;
        default:
            this.get_isInlineMultiLookup() && $p0.stopPropagation();
            break
        }
    },
    $4H_4: function($p0) {
        switch ($p0.keyCode) {
        case 8:
            $p0.stopPropagation();
            $p0.preventDefault();
            return;
        case 13:
            $p0.stopPropagation();
            $p0.preventDefault();
            break;
        case 11:
        case 75:
            if ($p0.ctrlKey) {
                $p0.preventDefault();
                return
            }
            break;
        case 85:
            if ($p0.ctrlKey) {
                $p0.stopPropagation();
                $p0.preventDefault();
                return
            }
            break
        }
    },
    getLookupEdit: function() {
        try {
            if (this.get_useTouchSkin()) return null;
            if (this.get_isInlineMultiLookup()) {
                var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                        .GetFirstChild(this.get_element().parentNode.parentNode)),
                    $v_1 = $v_0.getElementsByTagName("INPUT");
                return $v_1[0]
            }
            return XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils
                .GetFirstChild(this.get_element().parentNode.parentNode))
        } catch ($$e_2) {
            return null
        }
    },
    $3d_4: function() {
        var $v_0 = this.get_element(), $v_1 = this.get_element().ownerDocument.body;
        do {
            $v_0 = $v_0.parentNode;
            if (!IsNull($v_0)) {
                if ($v_0.className === "ms-crm-Lookup" && $v_0.tagName.toUpperCase() === "TABLE") return $v_0
            } else return null
        } while ($v_0 !== $v_1);
        return null
    },
    $2T_4: function($p0) {
        if (IsNull(this.$5_4) || typeof this.$5_4 === "string") {
            this.$5_4 = $p0;
            return
        }
        this.$5_4.style.border = "";
        this.$5_4 = $get($p0)
    },
    resolveAndExitEdit: function(isBlur, asyncOperation) {
        if (this.get_useTouchSkin()) return;
        var $v_0 = this.getLookupEdit();
        if (IsNull($v_0)) return;
        if (this.get_autoResolve() && this.hasUnresolvedText()) {
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()), $v_2 = $v_1.getElementsByTagName("li");
            if (this.get_isInlineMultiLookup()) {
                for (var $v_3 = "", $v_4 = 0; $v_4 < $v_2.length - 1; $v_4++) $v_3 += XUI.Html.GetOuterHTML($v_2[$v_4]);
                $v_1.innerHTML = String.format('{0}<LI style="display:inline">{1}</LI>',
                    $v_3,
                    CrmEncodeDecode.CrmHtmlEncode($v_0.value))
            } else if (this.$C_4())
                $v_1.innerHTML = String.format('{0}<LI style="display:inline">{1}</LI>',
                    $v_1.innerHTML,
                    CrmEncodeDecode.CrmHtmlEncode($v_0.value));
            else
                $v_1.innerHTML = String.format('<LI style="display:inline">{0}</LI>',
                    CrmEncodeDecode.CrmHtmlEncode($v_0.value));
            this.$k_4();
            this.Lookup(true, true, $v_0.value, asyncOperation)
        }
        this.endContentEditing(isBlur);
        if (!this.get_isInlineMultiLookup()) $v_0.disabled = true
    },
    hasUnresolvedText: function() {
        var $v_0 = this.getLookupEdit();
        return !IsNull($v_0) && $v_0.value.trim().length > 0
    },
    $49_4: function($p0) {
        if (this.get_isInlineLookup()) return;
        var $v_0 = this.getLookupEdit();
        if (this.isMruVisible()) {
            !IsNull($v_0) && $v_0.focus();
            return
        }
        if (!IsNull($v_0) && !Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Hidden-NoBehavior")) {
            this.$Z_4 = true;
            var $$t_2 = this;
            window.setTimeout(function() { $$t_2.$Z_4 = false }, 50)
        }
        !this.get_enableInlineLookupForEditForms() && this.resolveAndExitEdit(true, true)
    },
    toggleSwallowFocusEdit: function() { this.$1E_4 = false },
    $3C_4: function($p0) {
        this.$1E_4 = true;
        this.$2T_4("end");
        var $v_0 = this.getLookupField();
        $v_0.style.backgroundColor = ""
    },
    $48_4: function($p0) {
        if (this.get_disabled()) return;
        this.setonImage()
    },
    setonImage: function() {
        if (this.get_useTouchSkin()) return;
        if (this
            .get_isInlineLookup() ||
            this.get_isFolderTracking()) this.get_element().src = "/_imgs/search_hover.gif";
        else this.get_element().src = "/_imgs/btn_on_lookup.png"
    },
    $P_4: function($p0) {
        if (this.get_disabled()) return;
        this.setoffImage()
    },
    setoffImage: function() {
        if (this.get_useTouchSkin()) return;
        if (this
            .get_isInlineLookup() ||
            this.get_isFolderTracking()) this.get_element().src = "/_imgs/search_normal.gif";
        else this.get_element().src = "/_imgs/btn_off_lookup.png"
    },
    $2C_4: function() {
        if (this.get_disabled()) return;
        this.get_element().src = "/_imgs/btn_lookup_resolving.gif"
    },
    $1G_4: function($p0, $p1) {
        !this.$D_4 && this.get_autoResolve() && this.hasUnresolvedText() && this.resolveAndExitEdit(true, false);
        var $v_0 = this.Items($p0, $p1, false, false, false);
        if (!$v_0.length) return null;
        return $v_0
    },
    setValue: function(items) {
        this.Clear(false);
        if (!IsNull(items)) {
            this.AddItems(items, false);
            this.endContentEditing(false);
            this.fireControlEvent("OnSetValueEvent", Sys.EventArgs.Empty)
        } else if (this.get_isInlineMultiLookup()) this.$4m_4();
        else {
            var $v_0 = this.getLookupEdit();
            if (!IsNull($v_0)) $v_0.value = ""
        }
        this.verify();
        this.handleDataValueChangedEvent()
    },
    $4m_4: function() {
        var $v_0 = new Array(0);
        this.AddItems($v_0, false);
        this.endContentEditing(false);
        var $v_1 = this.getLookupEdit();
        if (!IsNull($v_1)) $v_1.value = ""
    },
    verify: function() { return true },
    $3H_4: function($p0, $p1) {
        if (this
            .get_isInlineMultiLookup() &&
            parseInt($p1.type, 10) === 9206)
            return Mscrm.LookupAttribute.undefinedAndEmptyToNull($p1.name) ===
                Mscrm.LookupAttribute.undefinedAndEmptyToNull($p0.name);
        return true
    },
    $k_4: function() { this.$18_4 = null },
    $3Y_4: function() {
        if (this.$18_4) return this.$18_4;
        var $v_0 = this.get_defaultValue();
        if (!IsNull($v_0) && $v_0.length > 0)
            for (var $v_2 = $v_0
                         .length,
                $v_3 = 0;
                $v_3 < $v_2;
                $v_3++) if (!IsNull($v_0[$v_3].name)) $v_0[$v_3].name = Mscrm.Utilities.trimSpaces($v_0[$v_3].name);
        var $v_1 = Mscrm.LookupAttribute.itemsDifferent(this.$1G_4(false, false), this.get_defaultValue());
        if (!$v_1) {
            var $v_4 = this.$1G_4(true, true);
            if (!IsNull($v_4) && $v_4.length > 0)
                for (var $v_5 = $v_4.length, $v_6 = 0; $v_6 < $v_5; $v_6++) {
                    var $v_7 = $v_4[$v_6];
                    if (!IsNull($v_7) && ($v_7.category === 1 || $v_7.category === 2)) {
                        $v_1 = true;
                        break
                    }
                }
        }
        this.$18_4 = $v_1;
        return $v_1
    },
    $2z_4: function() { Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_RefreshLookupItemImage, 2) },
    addItem: function(lookupControlItem) {
        var $v_0 = this.$2M_4(lookupControlItem, true);
        return !!$v_0.length
    },
    $2M_4: function($p0, $p1) {
        if (this.$C_4() && parseInt($p0.type, 10) === 9206) $p0.category = 3;
        if (this.get_lookupStyle() === "single" && this.getLookupField().getElementsByTagName("SPAN").length) return "";
        if (!this.IsPermissibleType($p0)) return "";
        if (typeof $p1 === "undefined") $p1 = true;
        var $v_0 = this.getLookupField();
        if (typeof $p0 === "string") {
            var $v_1 = $p0;
            if ($p1) {
                XUI.Html.DomUtils.GetFirstChild($v_0).innerHTML += $v_1;
                this.$k_4()
            }
            return $v_1
        } else {
            if ($p1) {
                var $v_E = this.Items(false, true, false, false, false);
                if (this.$2m_4($p0, $v_E)) return ""
            }
            if (this.get_isInlineLookup() &&
                $p0.category === 3 &&
                !this.get_allowUnresolvedPartiesOnEmailSend() &&
                this.get_controlMode() !== "deactivated") $p0.category = 2;
            var $v_2 = new Sys.StringBuilder;
            $v_2.append(String
                .format('<LI style="float:{1};white-space:nowrap;{2}"><SPAN id="lookupItem" contentEditable="false" oid="{0}" otype="', CrmEncodeDecode.CrmHtmlAttributeEncode($p0.id), Mscrm.Utilities.get_isLeftToRight() ? "left" : "right", this.get_isInlineMultiLookup() ? "margin-bottom: 3px; " + (Mscrm.Utilities.get_isLeftToRight() ? "margin-right: 3px" : "margin-left: 3px") : ""));
            if (IsNull($p0.type)) $p0.type = this.$3j_4($p0.typename);
            $v_2.append(String.format('{0}" otypename="{1}"',
                CrmEncodeDecode.CrmHtmlAttributeEncode($p0.type),
                CrmEncodeDecode.CrmHtmlAttributeEncode($p0.typename)));
            var $v_3, $v_4;
            if (this.get_isInlineLookup()) {
                $v_3 = window.LOCID_INLINELOOKUP_MOREMATCHES;
                $v_4 = window.LOCID_INLINELOOKUP_NOMATCH;
                $v_2.append(' isInlineLookup="true" ')
            } else {
                $v_3 = window.LOCID_LU_LOOKUPAMBIGUOUSTOOLTIP;
                $v_4 = window.LOCID_LU_LOOKUPUNRESOLVEDTOOLTIP
            }
            if (parseInt($p0.category) === 1) {
                $p0.displayClass = !this.get_isInlineLookup() ? "ms-crm-Lookup-Ambiguous" : null;
                $v_2.append(String.format(' category="{0}" title="{1}" ambiguousRecordsXml="{2}',
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category),
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_3),
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p0.ambiguousRecordsXml)))
            } else if (parseInt($p0.category) === 2) {
                $p0.displayClass = !this.get_isInlineLookup() ? "ms-crm-Lookup-Unresolved" : null;
                $v_2.append(String.format(' category="{0}" title="{1}',
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category),
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_4)))
            } else if (parseInt($p0.category) === 3) {
                $p0.displayClass = !this.get_isInlineLookup() ? "ms-crm-Lookup-PartyItem-Unresolved" : null;
                if (IsNull($p0.onclick))
                    $p0.onclick = String.format("ResolveUnkownParty(new Sys.UI.DomEvent(event), {0}, {1})",
                        CrmEncodeDecode.CrmJavaScriptEncode($p0.name),
                        CrmEncodeDecode.CrmJavaScriptEncode(this.get_$1c_4()));
                $v_2.append(String.format(' category="{0}', CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category)))
            } else if (parseInt($p0.category) === 4) {
                $p0.displayClass = "ms-crm-Lookup-Item-NonEntity";
                $p0.onclick = ""
            } else if (parseInt($p0.category) === 5) {
                $p0.displayClass = "ms-crm-Lookup-Item-NonEntity";
                $v_2.append(' category="' + CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category))
            } else if (parseInt($p0.category) === 6)
                $v_2.append(String.format(' category="{0}" title="{1}',
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category),
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p0.name)));
            else {
                if (!isNullOrEmptyString($p0.processId) && !isNullOrEmptyString($p0.processTimestamp)) {
                    var $v_F = '{0} = "{1}" {2} = "{3}"';
                    $v_2.append(String.format($v_F,
                        "processid",
                        "processts",
                        CrmEncodeDecode.CrmHtmlAttributeEncode($p0.processId),
                        CrmEncodeDecode.CrmHtmlAttributeEncode($p0.processTimestamp)))
                }
                $p0.displayClass = "ms-crm-Lookup-Item";
                $v_2.append('title="' + CrmEncodeDecode.CrmHtmlAttributeEncode($p0.name))
            }
            $v_2.append('" class="');
            $v_2.append(IsNull($p0.displayClass)
                ? "ms-crm-Lookup-Item"
                : CrmEncodeDecode.CrmHtmlAttributeEncode($p0.displayClass));
            if (this.get_isInlineLookup() && parseInt($p0.category) === 1) {
                $v_2.append(" ms-crm-LookupItemText-Color");
                $v_2.append('" onclick="');
                if (this.get_isInlineMultiLookup()) {
                    $v_2.append(String
                        .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).selectInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)));
                    $v_2.append('" tabindex="0');
                    $v_2.append('" onkeydown="');
                    $v_2.append(String
                        .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).keyDownInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)));
                    $v_2.append('" onCtrlEnter="')
                } else $v_2.append(this.$2q_4());
                $v_2.append('" style="text-decoration:none; "')
            } else if (!this.get_isInlineLookup() || parseInt($p0.category) !== 2)
                if (this.get_isInlineMultiLookup()) {
                    $v_2.append('" onclick="');
                    $v_2.append(String
                        .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).selectInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)));
                    $v_2.append('" tabindex="0');
                    $v_2.append('" onkeydown="');
                    $v_2.append(String
                        .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).keyDownInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)));
                    var $v_G = IsNull($p0.onclick)
                        ? "openlui(new Sys.UI.DomEvent(event))"
                        : CrmEncodeDecode.CrmHtmlAttributeEncode($p0.onclick);
                    $v_2.append(String.format('" onCtrlEnter="{0}', $v_G));
                    $v_2.append(String.format('" ondblclick="{0}', $v_G))
                } else {
                    $v_2.append('" onclick="');
                    if (this
                        .get_enableInlineLookupForEditForms()
                    )
                        $v_2.append(IsNull($p0.onclick)
                            ? this.$2q_4()
                            : CrmEncodeDecode.CrmHtmlAttributeEncode($p0.onclick));
                    else
                        $v_2.append(IsNull($p0.onclick)
                            ? "openlui(new Sys.UI.DomEvent(event))"
                            : CrmEncodeDecode.CrmHtmlAttributeEncode($p0.onclick))
                }
            else if (this.get_isInlineMultiLookup() && $p0.category === 2) {
                $v_2.append('" tabindex="0');
                $v_2.append('" onclick="');
                $v_2.append(String
                    .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).selectInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)));
                $v_2.append('" onkeydown="');
                $v_2.append(String
                    .format("Mscrm.FormControlInputBehavior.GetBehavior({0}).keyDownInlineMultiLookupItem(new Sys.UI.DomEvent(event))", CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id)))
            }
            (IsNull(this.get_additionalParams()) ||
                    this.get_additionalParams().toUpperCase().indexOf("DISABLECONTEXTMENU=1") === -1) &&
                $v_2.append('" oncontextmenu="handleGridRightClick(new Sys.UI.DomEvent(event))');
            if (!IsNull($p0.data)) {
                $v_2.append('" data="');
                $v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($p0.data))
            }
            !IsNull($p0.resourceSpecId) &&
                $v_2.append('" resourcespecid="' + CrmEncodeDecode.CrmHtmlAttributeEncode($p0.resourceSpecId));
            !IsNull($p0.effort) && $v_2.append('" effort="' + CrmEncodeDecode.CrmHtmlAttributeEncode($p0.effort));
            var $v_5 = $p0.exchangeEntryId;
            !IsNull($v_5) && $v_2.append('" exchangeentryid="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_5));
            var $v_6 = $p0.activityPartyId;
            !IsNull($v_6) && $v_2.append('" activitypartyid="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_6));
            var $v_7 = $p0.values;
            if (!IsNull($v_7)) {
                var $v_H = this.$1n_4($v_7);
                $v_2.append('" values="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_H))
            }
            var $v_8 = $p0.keyValues;
            if (!IsNull($v_8)) {
                var $v_I = this.$1n_4($v_8);
                $v_2.append('" keyValues="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_I))
            }
            this.get_isInlineMultiLookup() &&
                $p0.category !== 1 &&
                $p0.category !== 2 &&
                $v_2.append('" style="background-color: rgb(204, 227, 244);');
            $v_2.append('">');
            this.$C_4() &&
                $v_2.append('<SPAN contentEditable="false" unselectable="on" wrapper="true" aria-hidden="true">');
            var $v_9 = this.get_lookupTypes().split(","),
                $v_A = Mscrm.Utilities.isIE() &&
                    (Number.parseInvariant($v_9[0]) === 2 || Number.parseInvariant($v_9[0]) === 8),
                $v_B = IsNull($p0.category) || parseInt($p0.category) !== 4 && parseInt($p0.category) !== 5;
            $v_B = $v_B &&
                !(this.get_isInlineLookup() && (parseInt($p0.category) === 1 || parseInt($p0.category) === 2));
            $v_B = !this.get_isInlineMultiLookup() && $v_B && !(this.get_isInlineLookup() && $v_9.length < 2 && !$v_A);
            if ($v_B) {
                var $v_J = this.GetLookupTypeIcon(parseInt($p0.type), parseInt($p0.category)),
                    $v_K = this.$3e_4($v_J.$I_0);
                $v_2.append('<IMG alt="');
                $v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($v_K));
                $v_2.append('" class="ms-crm-Lookup-Item" imageSrc="');
                $v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($v_J.$I_0));
                $v_2.append('"');
                !Mscrm.Utilities.get_isLeftToRight() &&
                    $v_J.$d_0 &&
                    $v_2.append(' style="' + Mscrm.Utilities.flipImage("h") + '"');
                $v_2.append(">")
            }
            var $v_C = String.format("Mscrm.FormControlInputBehavior.GetBehavior({0}).RemoveItem({1}); return false;",
                CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id),
                CrmEncodeDecode.CrmJavaScriptEncode($p0.id));
            if (Mscrm.Utilities.isMobileRefresh()) {
                var $v_L = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/messagebar/msgbar_close_button_cold.png"));
                $v_2
                    .append('<a class="atLink ms-crm-LookupItem-MobileRefresh-Delete" href="javascript:onclick();" onclick="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_C) + '" tabIndex="-1" title="' + CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_LOOKUP_ITEM_REMOVE) + "\"><img class='" + CrmEncodeDecode.CrmHtmlAttributeEncode($v_L.cssClass) + "' src='" + CrmEncodeDecode.CrmHtmlAttributeEncode($v_L.source) + "' /></a>")
            }
            $v_2.append("<SPAN class='ms-crm-LookupItem-Name");
            this.get_isInlineLookup() &&
                parseInt($p0.category) === 1 &&
                $v_2.append(" ms-crm-Inline-LookupItem-Ambiguous-Name");
            this.get_isInlineMultiLookup() &&
                ($p0.category === 1 || $p0.category === 2 || $p0.category === 3) &&
                $v_2.append(" ms-crm-Inline-MultiLookupItem-Unresolved");
            $v_2.append("' wrapper='true'>" + CrmEncodeDecode.CrmHtmlEncode($p0.name));
            $v_2.append("</SPAN>");
            if (parseInt($p0.category) !== 4 && !window.UseTabletExperience) {
                $v_2.append("<a contentEditable='false' id=\"at");
                $v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($p0.id));
                $v_2
                    .append('" tabindex=-1 onclick="return false;" href="javascript:onclick();" target="_self" title="');
                $v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($p0.name));
                $v_2.append("\" class='atLink'></a>")
            }
            if (this.$29_4()) {
                $v_2.append('<a class="atLink" href="javascript:onclick();" onclick="' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_C) +
                    '" tabIndex="-1" title="' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_LOOKUP_ITEM_REMOVE) +
                    '"></a>');
                $v_2
                    .append('<a class="atLink" href="javascript:onclick();" onclick="openlui(new Sys.UI.DomEvent(event));" tabIndex="-1" title="' + CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_LOOKUP_ITEM_PROPERTIES) + '"></a>')
            }
            $v_2.append('<b class="IMG_lu_htc_b"></b>');
            if (this.$C_4()) {
                $v_2.append("</SPAN>");
                if (this.get_isInlineMultiLookup()) {
                    $v_2.append("<SPAN wrapper='true' class='");
                    if ($p0
                        .category ===
                        1 ||
                        $p0.category === 2 ||
                        $p0.category === 3)
                        $v_2.append(" ms-crm-LookupItem-Seperator ms-crm-Inline-MultiLookupItem-Unresolved");
                    else $v_2.append(" ms-crm-LookupItem-Seperator");
                    $v_2.append("' >;</SPAN>")
                }
            }
            $v_2.append("</SPAN>");
            Mscrm.Utilities.isMobileRefresh() &&
                !this.get_isInlineLookup() &&
                $v_2.append("<div class='ms-crm-LookupItem-Type' title='" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p0.typename) +
                    "'>" +
                    CrmEncodeDecode.CrmHtmlEncode($p0.typename) +
                    "</div>");
            $v_2.append("</LI>");
            $v_0.innerHTML === "&nbsp;" && XUI.Html.SetText($v_0, "");
            var $v_D = $v_2.toString();
            if ($p1) {
                XUI.Html.DomUtils.GetFirstChild($v_0).innerHTML += $v_D;
                this.$k_4();
                this.$1a_4()
            }
            this.queryLookupPresence(XUI.Html.DomUtils.GetFirstChild($v_0).getElementsByTagName("span"));
            return $v_D
        }
    },
    resizeAndShowHideMultiLookupInputElement: function() {
        var $v_0 = this.getLookupEdit();
        if (IsNull($v_0)) return;
        var $v_1 = $v_0, $v_2 = $v_1.parentNode;
        if (!IsNull(this.$28_4())) $v_1.style.display = "none";
        else {
            var $v_3 = $v_2.parentNode, $v_4 = 0;
            if (!IsNull(XUI.Html.DomUtils.GetPrevSibling($v_2)))
                if (Mscrm.Utilities.get_isLeftToRight())
                    $v_4 = $v_3.offsetWidth -
                        XUI.Html.DomUtils.GetPrevSibling($v_2).offsetLeft -
                        XUI.Html.DomUtils.GetPrevSibling($v_2).offsetWidth;
                else $v_4 = XUI.Html.DomUtils.GetPrevSibling($v_2).offsetLeft - $v_3.offsetLeft;
            var $v_5 = $v_4 - 3;
            $v_1.style.display = "block";
            $v_1.style.width = ($v_5 < 50 ? $v_3.offsetWidth : $v_5) + "px";
            !IsNull(this.$0_4) && this.$0_4.get_isVisible() && this.hideInlineMenu()
        }
    },
    $28_4: function() {
        var $v_0 = this.getLookupEdit();
        if (IsNull($v_0)) return null;
        var $v_1 = $v_0, $v_2 = $v_1.parentNode, $v_3 = XUI.Html.DomUtils.GetPrevSibling($v_2);
        if (!IsNull($v_3)) {
            var $v_4 = XUI.Html.DomUtils.GetFirstChild($v_3);
            if (!IsNull($v_4)) if (this.$u_4($v_4)) return $v_4
        }
        return null
    },
    selectInlineMultiLookupItem: function(eventObj) {
        var $v_0 = this.$26_4(eventObj),
            $v_1 = $v_0.parentNode,
            $v_2 = $v_1.parentNode,
            $v_3 = $P_CRM($v_2).find(".ms-crm-selected-Lookup-Item");
        if (eventObj.ctrlKey || -1 !== $v_0.className.indexOf("ms-crm-selected-Lookup-Item")) {
            this.$2r_4(eventObj);
            eventObj.stopPropagation()
        }
        $v_3.length > 0 && $v_3.removeClass("ms-crm-selected-Lookup-Item");
        this.$3p_4($v_0);
        this.$4s_4($v_0)
    },
    $26_4: function($p0) {
        var $v_0 = $p0.target;
        while ($v_0.tagName !== "SPAN" ||
            !IsNull($v_0
                .getAttribute("wrapper")) &&
            $v_0.getAttribute("wrapper").toString() === "true") $v_0 = $v_0.parentNode;
        return $v_0
    },
    $3p_4: function($p0) {
        var $v_0 = $P_CRM($p0);
        if (!$v_0.hasClass("ms-crm-selected-Lookup-Item")) {
            $v_0.addClass("ms-crm-selected-Lookup-Item");
            var $v_1 = $v_0.find(".ms-crm-LookupItem-Name");
            !IsNull($v_1) && $v_1.addClass("ms-crm-selected-Lookup-Item");
            var $v_2 = $v_0.find(".ms-crm-LookupItem-Seperator");
            !IsNull($v_2) && $v_2.addClass("ms-crm-selected-Lookup-Item")
        }
    },
    normalizeMultiLookupItem: function(spanElement) {
        this.normalizeLookupItem(spanElement, "ms-crm-selected-Lookup-Item")
    },
    normalizeLookupItem: function(spanElement, cssClass) {
        var $v_0 = $P_CRM(spanElement);
        !IsNull($v_0) && $v_0.hasClass(cssClass) && $v_0.removeClass(cssClass);
        var $v_1 = $v_0.find(".ms-crm-LookupItem-Name");
        !IsNull($v_1) && $v_1.hasClass(cssClass) && $v_1.removeClass(cssClass);
        var $v_2 = $v_0.find(".ms-crm-LookupItem-Seperator");
        !IsNull($v_2) && $v_2.hasClass(cssClass) && $v_2.removeClass(cssClass)
    },
    keyDownInlineMultiLookupItem: function(domEvent) {
        var $v_0 = this.$26_4(domEvent), $v_1 = $v_0.parentNode;
        switch (domEvent.keyCode) {
        case 38:
            if (this.$1l_4(false, false)) return;
            domEvent.stopPropagation();
            break;
        case 40:
            if (this.lookupDownKeyEdit(domEvent)) return;
            domEvent.stopPropagation();
            break;
        case 39:
            this.normalizeMultiLookupItem($v_0);
            var $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1);
            if (!IsNull($v_2)) {
                var $v_6 = XUI.Html.DomUtils.GetFirstChild($v_2);
                if (!IsNull($v_6)) {
                    $v_6.click();
                    $v_6.focus();
                    !this.$u_4($v_6) && !IsNull(this.$0_4) && this.$0_4.get_isVisible() && this.hideInlineMenu()
                }
            }
            domEvent.stopPropagation();
            break;
        case 37:
            var $v_3 = $P_CRM($v_0);
            if (this.$u_4($v_0) && !$v_3.hasClass("ms-crm-selected-Lookup-Item")) {
                $v_0.click();
                $v_0.focus();
                this.showResultsForUnresolved();
                domEvent.stopPropagation();
                return
            }
            var $v_4 = XUI.Html.DomUtils.GetPrevSibling($v_1);
            if (!IsNull($v_4)) {
                var $v_7 = XUI.Html.DomUtils.GetFirstChild($v_4);
                if (!IsNull($v_7)) {
                    $v_7.click();
                    $v_7.focus();
                    this.normalizeMultiLookupItem($v_0)
                }
            }
            domEvent.stopPropagation();
            break;
        case 127:
            this.$2S_4($v_1);
            this.$3L_4($v_1);
            domEvent.stopPropagation();
            break;
        case 8:
            this.$2S_4($v_1);
            var $v_5 = $v_1.parentNode;
            $v_4 = XUI.Html.DomUtils.GetPrevSibling($v_1);
            if (!IsNull($v_4)) {
                var $v_8 = XUI.Html.DomUtils.GetFirstChild($v_4);
                if (!IsNull($v_8)) {
                    $v_8.click();
                    $v_8.focus()
                }
            } else {
                $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1);
                if (!IsNull($v_2)) {
                    var $v_9 = XUI.Html.DomUtils.GetFirstChild($v_2);
                    if (!IsNull($v_9)) {
                        $v_9.click();
                        $v_9.focus()
                    }
                }
            }
            $v_5.removeChild($v_1);
            this.resizeAndShowHideMultiLookupInputElement();
            domEvent.stopPropagation();
            domEvent.preventDefault();
            break;
        case 13:
            if (!IsNull(this.$0_4) && this.$0_4.get_isVisible() && this.$1_4 !== -1) {
                this.$1m_4(this.$0_4.get_menuItems()[this.$1_4]);
                domEvent.stopPropagation();
                domEvent.preventDefault();
                return
            }
            if (domEvent.ctrlKey || -1 !== $v_0.className.indexOf("ms-crm-selected-Lookup-Item"))
                if (this.$u_4($v_0)) this.showResultsForUnresolved();
                else this.$2r_4(domEvent);
            domEvent.stopPropagation();
            break;
        case 9:
            break;
        default:
            domEvent.stopPropagation();
            break
        }
    },
    $4s_4: function($p0) {
        if (this.$u_4($p0)) this.showResultsForUnresolved();
        else !IsNull(this.$0_4) && this.$0_4.get_isVisible() && this.hideInlineMenu()
    },
    $u_4: function($p0) {
        var $v_0 = 0;
        if (!IsNull($p0.getAttribute("category"))) $v_0 = parseInt($p0.getAttribute("category").toString());
        if ($v_0 === 1 || $v_0 === 2) return true;
        return false
    },
    $2S_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        this.$u_4($v_0) && this.hideErrorMessage()
    },
    $2r_4: function($p0) {
        var $v_0 = this.$26_4($p0);
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.getAttribute("onCtrlEnter");
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.toString();
            if (Mscrm.Utilities.get_ieBrowserVersion() !== 8) event = $p0;
            eval(String.format($v_2))
        }
        $p0.stopPropagation()
    },
    $3L_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetNextSibling($p0), $v_1 = $p0.parentNode;
        $v_1.removeChild($p0);
        this.resizeAndShowHideMultiLookupInputElement();
        if (!IsNull($v_0)) {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_0);
            !IsNull($v_2) && $v_2.tagName.toLowerCase() === "input" && this.getLookupField().focus();
            if (!IsNull($v_2)) {
                $v_2.click();
                $v_2.focus()
            }
        }
    },
    $3e_4: function($p0) {
        switch ($p0) {
        case "/_imgs/error/notif_icn_warn16.png":
            return window.LOCID_LU_LOOKUPAMBIGUOUSTOOLTIP;
        case "/_imgs/error/notif_icn_crit16.png":
            return window.LOCID_LU_LOOKUPUNRESOLVEDTOOLTIP
        }
        return ""
    },
    $2k_4: function() {
        for (var $v_0 = this
                     .Items(true, false, false, false, false),
            $v_1 = $v_0.length,
            $v_2 = 0;
            $v_2 < $v_1;
            $v_2++) {
            var $v_3 = $v_0[$v_2];
            if (typeof $v_3 === "string") return true
        }
        return false
    },
    $3c_4: function($p0) {
        this.$D_4 = true;
        if (typeof $p0 === "undefined") $p0 = true;
        try {
            var $v_0 = {}, $v_1 = this.getLookupWebServiceRequest($v_0, "RetrieveItem"), $v_2 = $v_0.values;
            if ($v_2 !== "") {
                this.$2C_4();
                this.set_disabled(true);
                if ($p0) $v_1.Execute(this.$$d_autoResolveHandler);
                else this.autoResolveHandler($v_1.Execute(), null)
            } else this.$D_4 = false
        } catch ($$e_4) {
            alert(window.LOCID_LU_ERROR_RESOLVED)
        }
    },
    showSearchResults: function() {
        if (this.get_readOnly()) return;
        if (this.$m_4) {
            this.onLookup(null);
            return
        }
        this.$2C_4();
        this.RaiseSetAdditionalParamsEvent();
        if (!this.$1O_4) return;
        var $$t_0 = this;
        window.setTimeout(function() { $$t_0.$4u_4() }, 0)
    },
    $4u_4: function() {
        Mscrm.Utilities.addControlMarker(this.get_element().id,
            "Lookup",
            "StartLoadTimestamp",
            (new Date).getTime().toString());
        var $v_0 = null;
        try {
            $v_0 = this.$3g_4()
        } catch ($$e_1) {
            alert(window.LOCID_INLINELOOKUP_ERROR_SEARCH)
        }
        this.$2U_4($v_0);
        this.showInlineLookupMenu();
        Mscrm.Utilities.addControlMarker(this.get_element().id,
            "Lookup",
            "FinishLoadTimestamp",
            (new Date).getTime().toString())
    },
    $3g_4: function() {
        var $v_0 = this.getLookupSearchText();
        if (!IsNull($v_0)) {
            var $v_1 = {}, $v_2 = this.$3b_4($v_1), $v_3 = [], $v_4 = [];
            $v_3.type = "string";
            $v_4.type = "int";
            Array.add($v_3, $v_0);
            Array.add($v_4, 0);
            $v_1.values = $v_3;
            $v_2.SetParameter("lookupValues", $v_3);
            $v_2.SetParameter("positions", $v_4);
            var $v_5 = $v_2.Execute();
            return $v_5
        }
        return null
    },
    $2U_4: function($p0) {
        Array.clear(this.$E_4);
        if (!IsNull($p0) && $p0.Success && typeof $p0.ReturnValue === "string") {
            var $v_0 = XUI.Xml.LoadXml($p0.ReturnValue),
                $v_1 = {},
                $v_2 = {},
                $v_3 = XUI.Xml.SelectNodes($v_0.documentElement, "/SearchResults/Layout/Entity", null);
            if (!IsNull($v_3))
                for (var $v_7 = $v_3.length, $v_8 = 0; $v_8 < $v_7; $v_8++) {
                    var $v_9 = [],
                        $v_A = XUI.Xml.GetText($v_3[$v_8].attributes.getNamedItem("otc")),
                        $v_B = {},
                        $v_C = XUI.Xml.SelectSingleNode($v_3[$v_8], "Columns", null),
                        $v_D = XUI.Xml.DomUtils.GetFirstChild($v_C);
                    if (!IsNull($v_D)) {
                        Array.add($v_9, $v_D);
                        var $v_E = $v_D.nodeName,
                            $v_F = Number.parseInvariant(XUI.Xml.GetText($v_D.attributes.getNamedItem("width")));
                        $v_B[$v_E] = $v_F;
                        var $v_G = XUI.Xml.DomUtils.GetNextSibling($v_D);
                        if (!IsNull($v_G)) {
                            Array.add($v_9, $v_G);
                            var $v_H = $v_G.nodeName,
                                $v_I = Number.parseInvariant(XUI.Xml.GetText($v_G.attributes.getNamedItem("width")));
                            $v_B[$v_H] = $v_I
                        }
                    }
                    $v_1[$v_A] = $v_B;
                    $v_2[$v_A] = $v_9
                }
            for (var $v_4 = this.$3W_4(),
                $v_5 = XUI.Xml.SelectNodes($v_0.documentElement, "/SearchResults/items/records", null),
                $v_6 = $v_5.length,
                $v_J = 0;
                $v_J < $v_6;
                $v_J++)
                for (var $v_K = XUI.Xml.SelectNodes($v_5[$v_J], "record", null), $v_L = 0; $v_L < $v_K.length; $v_L++) {
                    var $v_M = $v_K[$v_L], $v_N = new Mscrm.SearchRecord;
                    $v_N.set_resultColumns([]);
                    var $v_O = XUI.Xml.GetText($v_M.attributes.getNamedItem("otype"));
                    $v_N.set_entityTypeCode(Number.parseInvariant($v_O));
                    $v_N.set_title(new Mscrm.SearchRecordColumn);
                    $v_N.get_title().set_value(XUI.Xml.GetText($v_M.attributes.getNamedItem("oname")));
                    $v_N.set_objectId(XUI.Xml.GetText($v_M.attributes.getNamedItem("oid")));
                    if (!isNullOrEmptyString($v_4) && $v_N.get_objectId() === $v_4) continue;
                    $v_N.set_entityLogicalName(XUI.Xml.GetText($v_M.attributes.getNamedItem("otypename")));
                    var $v_P = $v_1[$v_O];
                    if (!IsNull($v_P)) {
                        var $v_Q = $v_2[$v_O][0];
                        this.$2L_4($v_Q, $v_M, $v_P, $v_N);
                        var $v_R = $v_2[$v_O][1];
                        this.$2L_4($v_R, $v_M, $v_P, $v_N)
                    }
                    this.$34_4($v_M, $v_N);
                    Array.add(this.$E_4, $v_N)
                }
        }
    },
    $3W_4: function() {
        var $v_0 = this.$s_4(), $v_1 = this.$1i_4($v_0), $v_2 = "";
        if (!IsNull($v_0) && !isNullOrEmptyString($v_1)) $v_2 = $v_1;
        return $v_2
    },
    $34_4: function($p0, $p1) {
        $p1.set_hiddenColumns([]);
        var $$t_6 = this;
        XUI.Xml.DomUtils.ForEachChild($p0,
            function($p1_0) {
                var $v_0 = $p1_0.nodeName, $v_1 = XUI.Xml.GetText($p1_0), $v_2 = new Mscrm.SearchRecordColumn;
                $v_2.set_columnName($v_0);
                $v_2.set_value($v_1);
                Array.add($p1.get_hiddenColumns(), $v_2);
                return false
            })
    },
    $2L_4: function($p0, $p1, $p2, $p3) {
        if (!IsNull($p0)) {
            var $v_0 = new Mscrm
                    .SearchRecordColumn,
                $v_1 = "",
                $v_2 = XUI.Xml.SelectSingleNode($p1, $p0.nodeName, null);
            if (!IsNull($v_2)) {
                $v_1 = XUI.Xml.GetText($v_2);
                if (IsNull($v_1)) $v_1 = ""
            }
            $v_0.set_columnName($p0.nodeName);
            $v_0.set_value($v_1);
            $v_0.set_columnWidth($p2[$p0.nodeName]);
            Array.add($p3.get_resultColumns(), $v_0)
        }
    },
    $3b_4: function($p0) {
        var $v_0 = this.getLookupWebServiceRequest($p0, "RetrieveInlineSearchResults");
        $v_0.SetParameter("sortResults", this.$1Q_4);
        return $v_0
    },
    getLookupWebServiceRequest: function(reference, webMethodName) {
        var $v_0 = null;
        try {
            var $v_1 = this.Items(true, true, false, false, false),
                $v_2 = this.get_lookupTypes().split(","),
                $v_3 = $v_2.length,
                $v_4 = new Array($v_3);
            $v_4.type = "int";
            for (var $v_5 = 0, $v_5 = 0; $v_5 < $v_3; $v_5++) $v_4[$v_5] = parseInt($v_2[$v_5], 10);
            var $v_6 = [], $v_7 = [];
            $v_6.type = "string";
            $v_7.type = "int";
            for ($v_5 = 0; $v_5 < $v_1.length; $v_5++) {
                var $v_E = $v_1[$v_5];
                if (typeof $v_E === "string") {
                    Array.add($v_6, $v_E);
                    Array.add($v_7, $v_5)
                }
            }
            var $v_8 = this.get_defaultViewId();
            if (!isNullOrEmptyString(this.get_viewIdForResolveItem())) $v_8 = this.get_viewIdForResolveItem();
            var $v_9 = this.get_customViews(), $v_A = null;
            if (!IsNull($v_9)) {
                var $v_F = $v_9.length;
                for ($v_5 = 0; $v_5 < $v_F; $v_5++)
                    if ($v_9[$v_5].id === $v_8) {
                        $v_A = $v_9[$v_5];
                        break
                    }
            }
            var $v_B = this.get_additionalParams(), $v_C = this.$24_4();
            if (!isNullOrEmptyString($v_C.$R_0)) {
                $v_B += "&filterrelationship=true&relationshipid=" + CrmEncodeDecode.CrmUrlEncode($v_C.$f_0);
                $v_B += "&oId=" + CrmEncodeDecode.CrmUrlEncode($v_C.$R_0);
                $v_B += "&oType=" + CrmEncodeDecode.CrmUrlEncode($v_C.$i_0);
                $v_B += "&rDependAttr=" + CrmEncodeDecode.CrmUrlEncode($v_C.$b_0)
            }
            $v_B += "&IsInlineLookup=true";
            $v_B += "&customFilter=" + CrmEncodeDecode.CrmUrlEncode(this.$z_4.join("="));
            $v_B += "&customFilterTypes=" + CrmEncodeDecode.CrmUrlEncode(this.$10_4.join(","));
            $v_0 = new RemoteCommand("LookupService", webMethodName);
            $v_0.SetParameter("typesArray", $v_4);
            $v_0.SetParameter("bindingColumns", IsNull(this.$G_4) ? "" : this.$G_4);
            $v_0.SetParameter("additionalParameters", $v_B);
            $v_0.SetParameter("positions", $v_7);
            $v_0.SetParameter("resolveEmailAddress", this.get_resolveEmailAddress());
            $v_0.SetParameter("savedQueryTypeParameter", this.get_element().getAttribute("savedquerytype"));
            if ($v_3 !== 1 && (this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms())
            ) $v_0.SetParameter("defaultViewId", "");
            else $v_0.SetParameter("defaultViewId", $v_8);
            if (!IsNull($v_A)) {
                $v_0.SetParameter("defaultViewId", "{00000000-0000-0000-0000-000000000000}");
                $v_0.SetParameter("defaultViewType", $v_A.recordType);
                $v_0.SetParameter("defaultViewFetchXml", $v_A.fetchXml);
                $v_0.SetParameter("defaultViewLayoutXml", $v_A.layoutXml)
            }
            if (!IsNull(reference)) reference.values = $v_6;
            var $v_D = $v_6;
            !isNullOrEmptyString($v_D) && $v_0.SetParameter("lookupValues", $v_6)
        } catch ($$e_I) {
            alert(window.LOCID_LU_ERROR_RESOLVED)
        }
        return $v_0
    },
    isEditable: function() {
        return (this.get_lookupStyle() === "single" ||
                this.get_lookupStyle() === "multi" ||
                this.get_lookupStyle() === "subject") &&
            !this.get_disabled() &&
            this.get_autoResolve()
    },
    $C_4: function() { return this.get_lookupStyle() === "multi" },
    $29_4: function() { return this.get_isDisplayOnly() },
    $1n_4: function($p0) {
        return typeof $p0 === "string" ? $p0 : Sys.Serialization.JavaScriptSerializer.serialize($p0)
    },
    $2Z_4: function($p0, $p1, $p2) {
        if (isNullOrEmptyString($p0)) return $p2 ? Sys.Serialization.JavaScriptSerializer.serialize($p1) : $p1;
        return $p2 ? $p0 : Sys.Serialization.JavaScriptSerializer.deserialize($p0)
    },
    isMruEnabled: function() {
        if (!this.$1U_4) {
            try {
                if (IsNull(this.$7_4) && typeof Mscrm.LookupMruListUI !== "undefined") {
                    this.$7_4 = new Mscrm.LookupMruListUI(this.get_isInlineLookup() ||
                        this.get_enableInlineLookupForEditForms(),
                        this.get_rootControl());
                    this.$7_4.set_onDeleteCallback(this.$$d_$50_4);
                    this.$7_4.set_shouldDisplayMru(this.$$d_$4p_4)
                }
            } catch ($$e_0) {
                this.$7_4 = null
            }
            this.$1U_4 = !this.$2A_4() &&
                !IsNull(this.$7_4) &&
                !IsNull(Mscrm.LookupMruListUI.get_mruList()) &&
                !(IsNull(this.get_element().getAttribute("disableMru")) ||
                    Mscrm.Utilities.parseBoolean(this.get_element().getAttribute("disableMru")))
        }
        return this.$1U_4
    },
    $4p_4: function() {
        return this.isMruEnabled() &&
            !IsNull(this.getLookupEdit()) &&
            this.getLookupEdit().className !== "ms-crm-Hidden-NoBehavior"
    },
    isMruVisible: function() { return this.isMruEnabled() && this.$7_4.isVisible() },
    $3t_4: function() {
        if (this.$1z_4) return;
        this.$1z_4 = true
    },
    $2D_4: function() {
        var $v_0 = this.getLookupEdit();
        $v_0.value = this.$S_4
    },
    $2H_4: function($p0) {
        if (!this.isMruEnabled()) return;
        if (!IsNull(this.$0_4) && this.$0_4.get_isVisible()) return;
        var $v_0 = this.getLookupEdit(), $v_1 = this.$3h_4($v_0), $v_2 = this.$7_4.lookupMruSelectedItemTitle();
        if (!$p0 && isNullOrEmptyString($v_1)) {
            this.$S_4 = "";
            this.$t_4();
            return
        }
        if ($v_1 !== this.$S_4 && $v_1 !== $v_2) this.$S_4 = $v_1;
        else if (!$p0) return;
        if (this.isMruVisible()) this.$7_4.refreshLookupMruList(this.$S_4, false, 0);
        else {
            var $v_3 = this.mruXYPosition(), $v_4 = $v_3["x"], $v_5 = $v_3["y"];
            if (this.get_isInlineMultiLookup())
                $v_5 = $v_5 + (this.get_rootControl().scrollHeight - $v_0.parentNode.scrollHeight);
            var $v_6 = $v_0.scrollWidth;
            if (this.get_isInlineLookup()) $v_6 = Mscrm.Utilities.getILMenuWidth(this.get_rootControl());
            var $v_7 = $v_0.parentNode.scrollHeight;
            this.$7_4.set_searchMoreCallback(this.$$d_$4k_4);
            this.$7_4.showLookupMruItems($v_4, $v_5, $v_6, $v_7, this.get_lookupTypes(), this.$S_4, this.$$d_$4S_4)
        }
    },
    mruXYPosition: function() {
        var $v_0 = $get("contentDiv");
        if (IsNull($v_0)) $v_0 = document.body;
        var $v_1 = this.getLookupEdit(),
            $v_2 = Mscrm.Utilities.getXYPos($v_1, !Mscrm.Utilities.get_isLeftToRight(), $v_0),
            $v_3 = parseInt($v_2["x"], 10),
            $v_4 = parseInt($v_2["y"], 10);
        if (!Mscrm.Utilities.get_isLeftToRight()) {
            $v_3 += $v_1.parentNode.parentNode.scrollWidth;
            $v_3 -= 7
        }
        var $v_5 = {};
        $v_5["x"] = $v_3;
        $v_5["y"] = $v_4;
        return $v_5
    },
    $1a_4: function() {
        if (!this.isMruEnabled()) return;
        this.$S_4 = "";
        var $v_0 = this.Items(false, false, false, false, false), $v_1 = $v_0.length;
        if (!IsNull($v_0) && $v_1 > 0) {
            for (var $v_2 = new Array(0), $v_3 = 0; $v_3 < $v_1; $v_3++) {
                var $v_4 = $v_0[$v_3];
                if ($v_4.name.trim().length > 0) {
                    var $v_5 = this.$j_4[parseInt($v_4.type, 10)];
                    if (typeof $v_5 === "undefined" && Mscrm.EntityPropUtil.isActivityTypeCode($v_4.type)
                    ) $v_5 = this.$j_4[4200];
                    Array.add($v_2,
                        Mscrm.LookupMruItem.createLookupMruItem($v_4.id, $v_4.type, $v_4.typename, $v_4.name, $v_5))
                }
            }
            $v_2.length > 0 && this.$7_4.addLookupMruItems($v_2)
        }
    },
    $t_4: function() {
        if (!this.isMruEnabled()) return;
        this.$2l_4();
        window.setTimeout(this.$$d_$2l_4, 0)
    },
    $2l_4: function() {
        if (!this.isMruEnabled()) return;
        this.$7_4.hideLookupMruItems()
    },
    selectPreviousLookupItem: function() { return this.$2w_4(false) },
    selectNextLookupItem: function() { return this.$2w_4(true) },
    $2w_4: function($p0) {
        var $v_0 = Mscrm.Utilities.selectMenuItemOnNavigation($p0, this.$0_4, this.$1_4, "InlineLookupmenu");
        this.$1_4 = $v_0["itemindex"];
        if (IsNull($v_0["itemtitle"])) return "";
        else return $v_0["itemtitle"].toString()
    },
    $1l_4: function($p0, $p1) {
        var $v_0 = null;
        if ((this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms()) &&
            !IsNull(this.$0_4) &&
            this.$0_4.get_isVisible()) {
            if (!IsNull(this.$9_4) &&
                Sys.UI.DomElement.containsCssClass(this.$9_4, "ms-crm-InlineLookup-FooterSection-AddAnchor-Selected")) {
                Sys.UI.DomElement.removeCssClass(this.$9_4, "ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
                this.$H_4 = false;
                if ($p0) this.$1_4 = -1;
                else this.$1_4 = this.$0_4.get_menuItems().length
            }
            if ($p0) $v_0 = this.selectNextLookupItem();
            else $v_0 = this.selectPreviousLookupItem();
            return true
        } else if (this.isMruEnabled()) {
            if ($p0) {
                if ($p1) {
                    if (!this.isMruVisible()) {
                        this.$2H_4(true);
                        return true
                    }
                } else if (this.isMruVisible()) $v_0 = this.$7_4.selectNextLookupMruItem()
            } else if (this.isMruVisible() && !$p1) $v_0 = this.$7_4.selectPreviousLookupMruItem();
            this.$52_4($v_0);
            return true
        } else return false
    },
    $52_4: function($p0) {
        if (!IsNull($p0) && $p0.length) this.$53_4(this.getLookupEdit(), $p0);
        else this.$2D_4()
    },
    $2u_4: function($p0) {
        var $v_0 = new Mscrm.FormInputControl.ResultEventArgs;
        $v_0.$8_1.items = $p0;
        $v_0.$K_1 = this.get_additionalParams().toUpperCase().indexOf("NEEDASSOCIATE=1") > -1;
        this.RaiseOnAfterSelectEvent($v_0);
        this.RaiseOnChangeEvent($v_0)
    },
    $27_4: function() {
        var $v_0 = null;
        if (this.$C_4()) return $v_0;
        var $v_1 = this.getLookupField(), $v_2 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1));
        if (!IsNull($v_2))
            if ($v_2.nodeName === "LI" || $v_2.nodeName === "#text") $v_0 = XUI.Html.DomUtils.GetFirstChild($v_2);
        return $v_0
    },
    $54_4: function($p0) {
        var $v_0 = this.$27_4(), $v_1 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_0));
        XUI.Html.SetText($v_1, $p0)
    },
    $31_4: function($p0) {
        var $v_0 = this.$27_4();
        if (IsNull($v_0)) return;
        $v_0.setAttribute("category", $p0);
        if (!this.get_isInlineLookup()) {
            var $v_1 = this.$3Z_4($p0);
            if (!isNullOrEmptyString($v_1)) XUI.Html.DomUtils.GetFirstChild($v_0).src = $v_1
        } else {
            var $v_2 = this.Items(false, true, false, false, false);
            if (!IsNull($v_2) && $v_2.length && $p0 === 2) {
                var $v_3 = $v_2[0];
                $v_3.type > 0 &&
                    this.showErrorMessage(window.LOCID_INLINELOOKUP_NOMATCH,
                        window.CDNURL + "/_imgs/inlineedit/warning.png")
            }
        }
    },
    $3Z_4: function($p0) {
        switch ($p0) {
        case 2:
            return window.CDNURL + "/_imgs/error/notif_icn_crit16.png";
        default:
            return null
        }
    },
    $3M_4: function() {
        if (!this.isMruVisible()) return;
        var $v_0 = this.$7_4.deleteCurrLookupMruItem();
        if (!IsNull($v_0)) this.getLookupEdit().value = $v_0
    },
    $50_4: function($p0) { if (!IsNull($p0)) this.getLookupEdit().value = $p0 },
    $3h_4: function($p0) { return $p0.value },
    $53_4: function($p0, $p1) { $p0.value = $p1 },
    autoResolveHandler: function(result, cmd) {
        if (!this.$2k_4()) {
            this.set_disabled(false);
            this.$D_4 = false;
            this.$P_4(null);
            return
        }
        var $v_0 = this.Items(true, true, false, false, false);
        if (result.Success && typeof result.ReturnValue === "string")
            for (var $v_1 = XUI.Xml.LoadXml(result.ReturnValue),
                $v_2 = XUI.Xml.SelectNodes($v_1.documentElement, "/items/records", null),
                $v_3 = $v_2.length,
                $v_4 = 0;
                $v_4 < $v_3;
                $v_4++) {
                var $v_5 = new LookupControlItem;
                $v_5.values = [];
                $v_5.keyValues = {};
                $v_5.data = "";
                var $v_6 = XUI.Xml.SelectSingleNode($v_2[$v_4], "@position", null),
                    $v_7 = parseInt(XUI.Xml.GetText($v_6)),
                    $v_8 = $v_0[$v_7],
                    $v_9 = XUI.Xml.SelectNodes($v_2[$v_4], "record", null);
                if ($v_9.length === 1) {
                    var $v_A = $v_9[0];
                    $v_5.id = XUI.Xml.GetText($v_A.attributes.getNamedItem("oid"));
                    $v_5.name = XUI.Xml.GetText($v_A.attributes.getNamedItem("oname"));
                    $v_5.type = XUI.Xml.GetText($v_A.attributes.getNamedItem("otype"));
                    var $$t_K = this;
                    XUI.Xml.DomUtils.ForEachChild($v_A,
                        function($p1_0) {
                            var $v_B = $p1_0.nodeName, $v_C = XUI.Xml.GetText($p1_0);
                            Array.add($v_5.values, new Mscrm.FormInputControl.LookupItemData($v_B, $v_C));
                            $v_5.keyValues[$v_B] = new Mscrm.FormInputControl.LookupItemData($v_B, $v_C);
                            return false
                        })
                } else if ($v_9.length > 1) {
                    $v_5.id = (new Date).getTime() + $v_4.toString();
                    $v_5.name = $v_8;
                    this.$U_4 = true;
                    $v_5.type = 0;
                    $v_5.category = 1;
                    $v_5.ambiguousRecordsXml = XUI.Xml.XMLSerializer.serializeToString($v_2[$v_4])
                } else {
                    var $v_D = $v_8;
                    $v_5 = this.$2h_4($v_D, $v_4)
                }
                $v_0[$v_7] = $v_5
            }
        else
            for (var $v_E = 0; $v_E < $v_0.length; $v_E++) {
                var $v_F = $v_0[$v_E];
                $v_0[$v_E] = this.$2h_4($v_F, $v_E)
            }
        for (var $v_G = 0; $v_G < $v_0.length - 1; $v_G++) {
            if (!IsNull($v_0[$v_G].values) && !$v_0[$v_G].values.toString().length) $v_0[$v_G].values = [];
            if (!IsNull($v_0[$v_G].keyValues) && !$v_0[$v_G].keyValues.toString().length) $v_0[$v_G].keyValues = {}
        }
        this.set_disabled(false);
        this.$D_4 = false;
        this.$P_4(null);
        $v_0.items = $v_0;
        if (this.get_isInlineMultiLookup() && this.$2k_4()) {
            this.$Z_4 = true;
            this.getLookupField().focus();
            if (Mscrm.Utilities.isIE10OrHigher()) {
                var $$t_L = this;
                window.setTimeout(function() { $$t_L.$Z_4 = false }, 50)
            }
        }
        this.handleAfterLookup($v_0)
    },
    $2h_4: function($p0, $p1) {
        var $v_0 = new LookupControlItem;
        $v_0.values = [];
        $v_0.keyValues = {};
        $v_0.id = (new Date).getTime() + $p1.toString();
        $v_0.name = $p0;
        this.$U_4 = true;
        if (this.get_resolveEmailAddress() &&
            (this.$2K_4.test($p0) || Mscrm.EmailUtility.isValidEmailWithQuotedString($p0))) {
            $v_0.category = 3;
            $v_0.type = 9206;
            $v_0.data = $p0
        } else {
            $v_0.category = 2;
            $v_0.type = 0;
            $v_0.data = ""
        }
        return $v_0
    },
    $4e_4: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()), $v_1 = this.$28_4();
        if (!IsNull($v_0) && !IsNull($v_1)) {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1)),
                $v_3 = XUI.Html.GetText($v_2),
                $v_4 = XUI.Html.DomUtils.GetLastChild($v_0),
                $v_5 = XUI.Html.DomUtils.GetPrevSibling($v_4);
            if (!IsNull($v_5)) {
                $v_0.removeChild($v_5);
                this.resizeAndShowHideMultiLookupInputElement();
                this.hideErrorMessage();
                var $v_6 = this.getLookupEdit();
                $v_6.value = $v_3;
                $v_6.setAttribute("onfocus", "this.value=this.value;");
                this.showSearchResults()
            }
        }
    },
    $4S_4: function($p0) { this.$2E_4($p0) },
    $2E_4: function($p0) {
        var $v_0 = false;
        if (this.$2A_4() || !this.isMruEnabled()) return $v_0;
        var $v_1 = this.$7_4.lookupMruSelectedMruItem();
        if (IsNull($v_1)) $v_1 = $p0;
        if (!IsNull($v_1)) {
            var $v_2 = new LookupControlItem;
            $v_2.id = $v_1.get_objectId();
            $v_2.type = $v_1.get_entityTypeCode().toString();
            $v_2.name = $v_1.get_title();
            $v_2.onclick = "openlui(new Sys.UI.DomEvent(event));";
            $v_2.displayClass = "ms-crm-Lookup-Item";
            $v_2.data = "";
            $v_2.typename = $v_1.get_entityTypeName();
            $v_2.category = 6;
            if (this.get_isInlineMultiLookup()) this.selectAndRaiseEvent($v_2);
            else {
                this.Clear(false);
                this.addItem($v_2);
                this.RefreshLookupItemImage();
                this.$S_4 = "";
                this.$2D_4();
                this.resolveAndExitEdit(false, false);
                this.getLookupField().focus();
                this.resolveLookupMruItem($v_2, true)
            }
            $v_0 = true
        }
        return $v_0
    },
    $2A_4: function() { return this.$C_4() && !this.get_isInlineLookup() },
    resolveLookupMruItem: function(lookupItem, needAssociate) {
        this.$2C_4();
        this.RaiseSetAdditionalParamsEvent();
        this.AddParam("needAssociate", needAssociate ? "1" : "0");
        var $v_0 = this.getLookupWebServiceRequest(null, "RetrieveItem"), $v_1 = [];
        Array.add($v_1, lookupItem.id);
        $v_1.type = "string";
        $v_0.SetParameter("guidValues", $v_1);
        $v_0.Reference = lookupItem.id;
        $v_0.Execute(this.$$d_$4g_4)
    },
    $4g_4: function($p0, $p1) {
        if (this.$C_4()) {
            this.$2u_4(this.Items(false, false, false, false, false));
            this.$P_4(null);
            return
        }
        if ($p0.Success)
            try {
                var $v_0 = $p0.ReturnValue;
                if ($v_0.indexOf("</record>") > 0) {
                    this.$1y_4 = XUI.Xml.LoadXml($v_0);
                    var $v_1 = XUI.Xml.SelectSingleNode(this.$1y_4.documentElement, "/items/records/record", null),
                        $v_2 = $v_1.attributes.getNamedItem("oid").nodeValue,
                        $v_3 = $v_1.attributes.getNamedItem("oname").nodeValue,
                        $v_4 = this.Items(false, false, false, false, false),
                        $v_5 = $v_4[0];
                    if (!IsNull($v_1.childNodes)) {
                        var $v_6 = {}, $$t_F = this;
                        XUI.Xml.DomUtils.ForEachChild($v_1,
                            function($p1_0) {
                                $v_6[$p1_0.nodeName] = new Mscrm.FormInputControl
                                    .LookupItemData($p1_0.nodeName, XUI.Xml.GetText($p1_0));
                                return false
                            });
                        var $v_7 = this.$27_4();
                        !IsNull($v_7) &&
                            $v_7.setAttribute("keyValues", Sys.Serialization.JavaScriptSerializer.serialize($v_6))
                    }
                    if (Mscrm.LookupAttribute.compareGuids($v_5.id, $v_2)) {
                        this.$31_4(0);
                        this.$P_4(null);
                        this.$2u_4(this.Items(false, false, false, false, false));
                        if ($v_3 !== $v_5.name) {
                            this.$54_4($v_3);
                            var $v_8 = new Array(1), $v_9 = this.$j_4[parseInt($v_5.type, 10)];
                            Array.add($v_8,
                                Mscrm.LookupMruItem.createLookupMruItem($v_5.id, $v_5.type, $v_5.typename, $v_3, $v_9));
                            this.$7_4.updateLookupMruItems($v_8)
                        }
                    }
                } else {
                    var $v_A = this.Items(false, false, false, false, false)[0];
                    if (this.get_isInlineLookup()) $v_A.onclick = "return false;";
                    if ($v_A.id === $p0.RemoteCommand.Reference) {
                        this.$31_4(2);
                        this.$P_4(null)
                    }
                }
            } catch ($v_B) {
            }
    },
    $4B_4: function() {
        var $v_0 = new Mscrm.FormInputControl.GenerateDataXmlEventArgs,
            $v_1 = this.get_events().getHandler("OnGeneratedDataXml");
        !IsNull($v_1) && $v_1(this, $v_0);
        return $v_0
    },
    handleAfterLookup: function(lookupItems) {
        if (IsNull(lookupItems)) return;
        var $v_0 = false, $v_1 = lookupItems.items;
        if (!IsNull($v_1)) {
            this.$38_4($v_1);
            var $v_3 = this.Items(false, true, false, false, false);
            this.Clear(false);
            this.AddItems($v_1, false);
            $v_0 = Mscrm.LookupAttribute.itemsDifferent($v_3, this.Items(false, true, false, false, false));
            this.$1w_4 = $v_1;
            this.$3N_4($v_1)
        }
        var $v_2 = new Mscrm.FormInputControl.ResultEventArgs;
        $v_2.$8_1 = lookupItems;
        $v_2.$K_1 = true;
        this.$2v_4($v_2, $v_0)
    },
    $2v_4: function($p0, $p1) {
        this.exitEditing();
        this.raiseEvents($p0, $p1)
    },
    showResultsForUnresolved: function() {
        var $v_0 = this.Items(false, true, false, false, false);
        if (!IsNull($v_0) && $v_0.length) {
            var $v_1 = $v_0[$v_0.length - 1];
            switch ($v_1.category) {
            case 1:
                this.onLookup(null);
                break;
            case 2:
                Array.clear(this.$E_4);
                this.showInlineLookupMenu();
                break;
            default:
                break
            }
        }
    },
    getLookupSearchText: function() {
        var $v_0 = "", $v_1 = this.Items(false, true, false, false, false);
        if (this.hasUnresolvedText()) $v_0 = this.getLookupEdit().value;
        else if (this.$3w_4()) $v_0 = "";
        else if (!IsNull($v_1) &&
            $v_1.length &&
            $v_1[$v_1.length - 1].name.localeCompare(window
                .LOCID_INLINELOOKUP_NONAME)) $v_0 = $v_1[$v_1.length - 1].name;
        return $v_0
    },
    $3w_4: function() {
        var $v_0 = this.getLookupEdit();
        if (this.get_isInlineMultiLookup() &&
            !IsNull($v_0) &&
            !$v_0.value.trim().length &&
            $v_0.style.display !== "none") return true;
        return false
    },
    raiseEvents: function(args, changed) {
        !this.get_isInlineLookup() && !this.get_useTouchSkin() && this.$2Y_4();
        this.RaiseOnAfterSelectEvent(args);
        changed && this.RaiseOnChangeEvent(args)
    },
    exitEditing: function() {
        if (this.get_useTouchSkin()) return;
        this.$2z_4();
        this.endContentEditing(false);
        this.$k_4();
        this.$1a_4();
        this.setFocus(null)
    },
    $2B_4: function($p0) {
        var $v_0 = null, $v_1 = -1;
        if (this.$1_4 > -1) {
            var $v_2 = this.$0_4.get_menuItems()[this.$1_4];
            !IsNull($v_2) && $v_2.displayRestStyle()
        }
        if (this.$1_4 === this.$0_4.get_menuItems().length - 1 && !$p0 && !IsNull(this.$9_4) && !this.$H_4) {
            Sys.UI.DomElement.addCssClass(this.$9_4, "ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
            this.$H_4 = true;
            return
        }
        if (!this.$1_4 && $p0 && !IsNull(this.$9_4) && !this.$H_4) {
            Sys.UI.DomElement.addCssClass(this.$9_4, "ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
            this.$H_4 = true;
            return
        }
        if (!IsNull(this.$9_4) &&
            Sys.UI.DomElement.containsCssClass(this.$9_4, "ms-crm-InlineLookup-FooterSection-AddAnchor-Selected")) {
            Sys.UI.DomElement.removeCssClass(this.$9_4, "ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
            this.$H_4 = false;
            if ($p0) this.$1_4 = this.$0_4.get_menuItems().length;
            else this.$1_4 = -1
        }
        if ($p0)
            if (!this.$1_4) $v_1 = this.$0_4.get_menuItems().length - 1;
            else if (this.$1_4 >= 0 && this.$1_4 <= this.$0_4.get_menuItems().length - 1) $v_1 = 0;
            else $v_1 = this.$1_4 - 1;
        else if (this.$1_4 === this.$0_4.get_menuItems().length - 1) $v_1 = 0;
        else if (this
            .$1_4 >=
            0 &&
            this.$1_4 < this.$0_4.get_menuItems().length - 1) $v_1 = this.$0_4.get_menuItems().length - 1;
        else $v_1 = this.$1_4 + 1;
        this.$1_4 = $v_1;
        if ($v_1 !== -1) {
            $v_0 = this.$0_4.get_menuItems()[$v_1];
            $v_0.displayHoverStyle();
            $v_0.get_itemContents().scrollIntoView(false);
            if ($v_0.get_isNotFound()) {
                this.$2B_4($p0);
                return
            }
        }
    },
    $4G_4: function($p0) {
        var $v_0 = this.getLookupEdit();
        switch ($p0.keyCode) {
        case 38:
            if (this.$1l_4(false, false)) {
                $p0.stopPropagation();
                $p0.preventDefault();
                return
            }
            break;
        case 40:
            if (this.lookupDownKeyEdit($p0)) return;
            this.get_isInlineMultiLookup() && $p0.stopPropagation();
            break;
        case 27:
            if (this.isMruVisible()) {
                this.$2D_4();
                this.$t_4();
                $p0.stopPropagation();
                $p0.preventDefault();
                return
            }
            if ((this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms()) &&
                !IsNull(this.$0_4) &&
                this.$0_4.get_isVisible()) {
                this.hideInlineMenu();
                $p0.stopPropagation();
                $p0.preventDefault();
                return
            }
            break;
        case 13:
            if (this.isMruVisible()) {
                if (this.$2E_4(null)) {
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return
                }
                this.$t_4()
            }
            if (!this.get_readOnly()) {
                $p0.stopPropagation();
                $p0.preventDefault();
                if (this.$1j_4() === 127) this.Lookup(true, false, "", false);
                else if (!(this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms())) {
                    var $v_1 = $v_0.value;
                    $v_0.value = "";
                    this.Lookup(true, false, $v_1, false);
                    this.endContentEditing(false)
                } else {
                    if (this.$H_4) {
                        this.$H_4 = false;
                        this.$9_4.click();
                        $p0.stopPropagation();
                        $p0.preventDefault();
                        return
                    }
                    if (!IsNull(this.$0_4) && this.$0_4.get_isVisible() && this.$1_4 !== -1) {
                        this.$1m_4(this.$0_4.get_menuItems()[this.$1_4]);
                        $p0.stopPropagation();
                        $p0.preventDefault();
                        return
                    } else this.$1j_4() !== 127 && this.showSearchResults()
                }
                return
            }
            break;
        case 127:
            if ($p0.ctrlKey && !$p0.altKey && !$p0.shiftKey)
                if (this.$7_4.isSelected()) {
                    this.$3M_4();
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return
                }
            this.get_isInlineMultiLookup() && $p0.stopPropagation();
            break;
        case 75:
            if (!this.get_readOnly() && $p0.ctrlKey && this.get_autoResolve()) {
                this.resolveAndExitEdit(false, true);
                $p0.stopPropagation();
                $p0.preventDefault();
                this.$2F_4()
            }
            break;
        case 9:
            if (this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms())
                if ((!this.$C_4() || this.get_isInlineMultiLookup()) && !IsNull(this.$0_4) && this.$0_4.get_isVisible())
                    if (this.$1_4 !== -1) {
                        this.$2B_4($p0.shiftKey);
                        $p0.stopPropagation();
                        $p0.preventDefault();
                        return
                    } else {
                        this.hideInlineMenu();
                        this.resolveAndExitEdit(true, true)
                    }
                else this.resolveAndExitEdit(true, true);
            else this.resolveAndExitEdit(true, true);
            if (this.isMruVisible()) {
                if (this.$2E_4(null)) {
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return
                }
                this.$t_4()
            }
            if ($v_0.tabIndex >= 0)
                if (!$p0.shiftKey) {
                    if (!this.get_isInlineMultiLookup()) {
                        var $v_2 = $get(this.get_$1c_4());
                        if (!IsNull($v_2) && !IsNull($v_2.getAttribute("addLookupImageButton"))) {
                            var $v_3 = $v_2.getAttribute("addLookupImageButton").toString();
                            if (!isNullOrEmptyString($v_3)) {
                                var $v_4 = $get($v_3);
                                if (!IsNull($v_4))
                                    try {
                                        $v_4.focus();
                                        $p0.stopPropagation();
                                        $p0.preventDefault();
                                        return
                                    } catch ($$e_6) {
                                    }
                            }
                        }
                    }
                    this.$Z_4 = true;
                    this.getLookupField().focus();
                    return
                }
            break;
        case 123:
            if ($p0.shiftKey && $v_0.className !== "ms-crm-Hidden-NoBehavior" && $v_0.value.length > 0) {
                this.Lookup(true, true, $v_0.value, false);
                this.endContentEditing(false)
            }
            break;
        case 83:
            if (!this.get_readOnly() && $p0.ctrlKey) {
                if ($p0.altKey) return;
                this.resolveAndExitEdit(false, false);
                if (this.$45_4()) {
                    $p0.stopPropagation();
                    $p0.preventDefault()
                }
            }
            break;
        case 37:
        case 8:
            this.$3k_4($p0);
            break;
        default:
            this.get_isInlineMultiLookup() && $p0.stopPropagation();
            break
        }
    },
    $45_4: function() {
        for (var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()),
            $v_1 = $v_0.children.length,
            $v_2 = null,
            $v_3 = 0;
            $v_3 < $v_1;
            $v_3++) {
            $v_2 = null;
            var $v_4 = XUI.Html.DomUtils.GetChildElementAt($v_0, $v_3);
            if ($v_4.nodeName.toUpperCase() === "LI") {
                $v_2 = XUI.Html.DomUtils.GetFirstChild($v_4);
                if (IsNull($v_2)) continue
            }
            var $v_5 = parseInt($v_2.getAttribute("category"));
            if ($v_5 === 1 || $v_5 === 2) return true
        }
        return false
    },
    $3k_4: function($p0) {
        if (this.get_isInlineMultiLookup()) {
            var $v_0 = this.getLookupEdit();
            if (!IsNull($v_0) && isNullOrEmptyString($v_0.value)) {
                var $v_1 = $p0.target, $v_2 = $v_1.parentNode;
                if (8 === $p0.keyCode) {
                    var $v_3 = $v_2.parentNode, $v_4 = XUI.Html.DomUtils.GetPrevSibling($v_2);
                    if (!IsNull($v_4)) {
                        $v_3.removeChild($v_4);
                        this.resizeAndShowHideMultiLookupInputElement()
                    }
                } else if (37 === $p0.keyCode) {
                    var $v_5 = XUI.Html.DomUtils.GetPrevSibling($v_2);
                    if (!IsNull($v_5)) {
                        var $v_6 = XUI.Html.DomUtils.GetFirstChild($v_5);
                        if (!IsNull($v_6)) {
                            $v_6.click();
                            $v_6.focus();
                            $p0.preventDefault()
                        }
                    }
                }
            }
            $p0.stopPropagation()
        }
    },
    hideInlineMenu: function() {
        if (!IsNull(this.$0_4)) {
            this.$0_4.clear();
            this.$0_4.hide()
        }
    },
    lookupDownKeyEdit: function(eventObject) {
        if (this.$1l_4(true, eventObject.altKey && !eventObject.ctrlKey && !eventObject.shiftKey)) {
            eventObject.stopPropagation();
            eventObject.preventDefault();
            return true
        }
        return false
    },
    $4F_4: function($p0) {
        var $v_0 = this.$47_4(IsNull(this
                .$5_4) ||
            this.$5_4 === "end" ||
            this.$5_4 === "start"
            ? $p0.target
            : this.$5_4);
        if (IsNull($v_0)) return;
        if (!this.$C_4()) {
            var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if ($v_0.tagName.toUpperCase() === "DIV" && !IsNull($v_3)) {
                $v_0 = $v_3;
                for (var $v_4 = $v_0.getElementsByTagName("SPAN"), $v_5 = $v_4.length, $v_6 = 0; $v_6 < $v_5; $v_6++) {
                    var $v_7 = $v_4[$v_6];
                    if ($v_7.tagName.toUpperCase() === "SPAN") {
                        $v_0 = $v_7;
                        break
                    }
                }
            }
        }
        switch ($p0.keyCode) {
        case 16:
        case 17:
        case 18:
            return;
        case 27:
            if ((this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms()) &&
                !IsNull(this.$0_4) &&
                this.$0_4.get_isVisible()) {
                this.hideInlineMenu();
                $p0.stopPropagation();
                $p0.preventDefault();
                return
            }
            break;
        case 38:
            if ((this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms()) &&
                !IsNull(this.$0_4) &&
                this.$0_4.get_isVisible())
                if (this.$1l_4(false, false)) {
                    this.hideInlineMenu();
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return
                }
            break;
        case 32:
        case 13:
            if (this.$H_4) {
                this.$H_4 = false;
                this.$9_4.click();
                $p0.preventDefault();
                $p0.stopPropagation();
                return
            }
            if (!IsNull(this.$0_4) && this.$0_4.get_isVisible() && this.$1_4 !== -1) {
                this.$1m_4(this.$0_4.get_menuItems()[this.$1_4]);
                $p0.preventDefault();
                $p0.stopPropagation();
                return
            }
            if (!this.get_readOnly()) {
                if (!(this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms())) {
                    this.Lookup(true, false, null, false);
                    this.endContentEditing(false)
                } else this.showSearchResults();
                $p0.stopPropagation();
                $p0.preventDefault();
                return
            }
            if ($v_0.tagName.toUpperCase() === "SPAN" || $v_0.tagName.toUpperCase() === "LI") {
                Mscrm.Utilities.click($v_0);
                $p0.preventDefault();
                $p0.stopPropagation();
                return
            }
            break;
        case 40:
            if ((this.get_isInlineLookup() || this.get_enableInlineLookupForEditForms()) &&
                !IsNull(this.$0_4) &&
                this.$0_4.get_isVisible())
                if (this.lookupDownKeyEdit($p0)) {
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return
                }
            if (this.lookupDownKey($p0, $v_0)) return;
            break;
        case 83:
            if (($p0.ctrlKey || $p0.altKey) && !($p0.ctrlKey && $p0.altKey)) {
                $p0.preventDefault();
                return
            }
            break;
        case 85:
            if ($p0.ctrlKey)
                if ($v_0.className === "ms-crm-Lookup-Item") {
                    Mscrm.Utilities.click($v_0);
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return
                }
            break;
        case 67:
            if ($p0.ctrlKey) {
                $p0.preventDefault();
                return
            }
            break;
        case 8:
        case 127:
            if (Mscrm.Utilities.isMobileRefresh() && ($p0.keyCode === 8 || $p0.keyCode === 127)) return;
            if (this.get_isInlineMultiLookup()) {
                $p0.preventDefault();
                $p0.stopPropagation();
                return
            }
            if ($p0.keyCode === 8 && !this.get_isInlineLookup()) {
                $p0.preventDefault();
                $p0.stopPropagation()
            }
            if (this.$29_4() || !this.get_readOnly())
                if ($v_0.tagName.toUpperCase() !== "SPAN" && $v_0.tagName.toUpperCase() !== "LI") {
                    if ($p0.keyCode === 127 || $p0.keyCode === 8 && (this.get_isInlineLookup() || !this.$C_4())) {
                        this.Clear(false);
                        this.RaiseOnChangeEvent(null)
                    }
                } else {
                    if (this.$C_4() && this.$29_4()) {
                        for (var $v_8 = this.Items(false, false, false, false, false), $v_9 = $v_8.length, $v_A = 0;
                            $v_A < $v_9;
                            $v_A++) $v_8[$v_A].selected && this.RemoveItem($v_8[$v_A].id);
                        this.getLookupField().focus()
                    } else {
                        var $v_B = XUI.Html.DomUtils.GetPrevSibling($v_0.parentNode),
                            $v_C = !IsNull($v_B) ? $v_B : XUI.Html.DomUtils.GetNextSibling($v_0.parentNode);
                        XUI.Html.DomUtils.GetFirstChild(this.getLookupField()).removeChild($v_0.parentNode);
                        if (!IsNull($v_C)) {
                            $v_C = XUI.Html.DomUtils.GetFirstChild($v_C);
                            if (IsNull($v_C)) {
                                this.$5_4 = "start";
                                this.Focus(null)
                            } else {
                                this.$5_4 = $v_C;
                                this.$5_4.style.border = "BLUE 1 DOTTED";
                                this.$5_4.scrollIntoView(false);
                                this.getLookupField().focus()
                            }
                        }
                        this.$P_4(null)
                    }
                    this.RaiseOnChangeEvent(null)
                }
            break;
        case 9:
            if (!this.$C_4() && !IsNull(this.$0_4) && this.$0_4.get_isVisible())
                if (this.$1_4 !== -1) {
                    this.$2B_4($p0.shiftKey);
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return
                } else {
                    this.hideInlineMenu();
                    this.resolveAndExitEdit(true, true)
                }
            else this.resolveAndExitEdit(true, true);
            if (!this.$C_4() || this.get_isInlineMultiLookup()) return;
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()),
                $v_2 = this.Items(false, true, false, false, false);
            if (!$v_2.length) return;
            if (IsNull(this.$5_4) || this.$5_4 === ($p0.shiftKey ? "start" : "end")) return;
            if (this.$5_4 === ($p0.shiftKey ? "end" : "start")) {
                var $v_D = $v_2[$p0.shiftKey ? $v_2.length - 1 : 0].id, $$t_I = this;
                XUI.Html.DomUtils.ForEachChild($v_1,
                    function($p1_0) {
                        var $v_E = XUI.Html.DomUtils.GetFirstChild($p1_0);
                        if ($v_E.getAttribute("oid") === $v_D) {
                            $v_E.style.border = "BLACK 1 DOTTED";
                            $v_E.scrollIntoView(false);
                            $$t_I.$5_4 = $v_E;
                            $p0.stopPropagation();
                            $p0.preventDefault();
                            return true
                        }
                        return false
                    })
            } else {
                this.$5_4.style.border = "";
                var $v_F = $p0.shiftKey
                    ? XUI.Html.DomUtils.GetPrevSibling(this.$5_4.parentNode)
                    : XUI.Html.DomUtils.GetNextSibling(this.$5_4.parentNode);
                if (!IsNull($v_F)) {
                    $v_F = XUI.Html.DomUtils.GetFirstChild($v_F);
                    if (!IsNull($v_F) && $v_F.tagName.toUpperCase() === "SPAN") {
                        this.$5_4 = $v_F;
                        this.$5_4.style.border = "BLUE 1 DOTTED";
                        this.$5_4.scrollIntoView(false);
                        $p0.stopPropagation();
                        $p0.preventDefault();
                        return
                    }
                }
                this.$5_4 = null;
                return
            }
            return
        }
        if (!this.get_isInlineLookup() && ($p0.keyCode === 8 || $p0.keyCode === 127)) if (this.$C_4()) return;
        (this.isEditable() || this.$1k_4()) && this.$2y_4()
    },
    lookupDownKey: function(eventObject, selectedElement) {
        if (eventObject.altKey)
            if (selectedElement.className === "ms-crm-Lookup-Ambiguous") {
                Mscrm.Utilities.click(selectedElement);
                eventObject.preventDefault();
                return true
            }
        return false
    },
    updateTouchLookupEntitySelector: function() {},
    $2F_4: function() {
        var $v_0 = this.getLookupEdit();
        if (!IsNull($v_0))
            try {
                if (Mscrm.Utilities.isIE9()) XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("focus"));
                else $v_0.focus()
            } catch ($$e_1) {
            }
    },
    populateType: function() {
        var $v_0 = this.get_lookupTypeNames();
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = new RegExp("(?:^|,)\\s*([^:]+)\\s*:\\s*([0-9]+)\\s*:\\s*([^,]+)\\s*", "ig"), $v_2 = null;
            this.$O_4 = [];
            this.$j_4 = [];
            while (!IsNull($v_2 = $v_1.exec($v_0))) {
                this.$O_4[parseInt($v_2[2], 10)] = $v_2[1];
                this.$j_4[parseInt($v_2[2], 10)] = $v_2[3]
            }
        }
    }
};
Mscrm.FormInputControl.TouchLookupMatchesBar = function(parentElement) {
    this.$$d_$2t_1 = Function.createDelegate(this, this.$2t_1);
    this.$$d_$4K_1 = Function.createDelegate(this, this.$4K_1);
    this.$$d_$4P_1 = Function.createDelegate(this, this.$4P_1);
    Mscrm.FormInputControl.TouchLookupMatchesBar.initializeBase(this);
    this.$n_1 = false;
    this.$r_1 = false;
    this.$D_1 = false;
    this.$J_1 = [];
    this.$A_1 = $P_CRM(window.document.createElement("div"));
    parentElement.append(this.$A_1)
};
Mscrm.FormInputControl.TouchLookupMatchesBar.get_barHeight = function() { return 84 };
Mscrm.FormInputControl.TouchLookupMatchesBar.get_$4U = function() { return window.parent.pageYOffset };
Mscrm.FormInputControl.TouchLookupMatchesBar.get_$3u = function() { return $P_CRM(window.parent).innerHeight() };
Mscrm.FormInputControl.TouchLookupMatchesBar.get_$56 = function() {
    return $P_CRM(window.parent.document.body).height()
};
Mscrm.FormInputControl.TouchLookupMatchesBar.prototype = {
    $A_1: null,
    $p_1: null,
    $1B_1: null,
    $1D_1: null,
    $X_1: null,
    $n_1: false,
    $r_1: false,
    $D_1: false,
    $J_1: null,
    $2_1: null,
    $1W_1: 0,
    init: function() {
        if (!this.$n_1) {
            this.$n_1 = true;
            this.$3K_1();
            this.$1F_1(2);
            this.$4i_1();
            this.$2t_1();
            this.$2O_1()
        }
    },
    cleanUp: function() { this.$n_1 && this.unbindControlHandlers() },
    get_visible: function() { return this.$r_1 },
    set_visible: function(value) {
        if (this.$r_1 !== value) {
            this.$r_1 = value;
            !this.$n_1 && this.init();
            !this.$r_1 && this.clearContents();
            this.$A_1.toggle()
        }
        return value
    },
    get_resolving: function() { return this.$D_1 },
    set_resolving: function(value) {
        if (!this.$D_1 && value) {
            this.$D_1 = true;
            this.$4t_1()
        }
        if (this.$D_1 && !value) {
            this.$D_1 = false;
            this.$3n_1()
        }
        return value
    },
    get_matches: function() { return this.$J_1 },
    set_matches: function(value) {
        if (!value) this.$J_1 = [];
        else this.$J_1 = value;
        this.$4X_1();
        return value
    },
    get_element: function() { return this.$A_1 },
    clearContents: function() {
        this.$J_1 = [];
        this.$1F_1(2)
    },
    add_userSelectedMatchEvent: function(value) { this.get_events().addHandler("userselectedmatch", value) },
    remove_userSelectedMatchEvent: function(value) { this.get_events().removeHandler("userselectedmatch", value) },
    add_nativeBridgeInitializedEvent: function(value) {
        this.get_events()
            .addHandler("nativeBridgeInitialized", value)
    },
    remove_nativeBridgeInitializedEvent: function(value) {
        this.get_events().removeHandler("nativeBridgeInitialized", value)
    },
    $2X_1: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    },
    $3K_1: function() {
        var $v_0 = new Sys.StringBuilder, $v_1;
        $v_1 = $P_CRM('<div class="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode("listRoot") +
            '" data-id="lookupBar"></div>');
        $v_0.append('<div class="' + CrmEncodeDecode.CrmHtmlAttributeEncode("noMatchesFoundMessage") + '"><span>');
        var $v_2 = window.LOCID_LOOKUPMATCHBAR_NOMATCH;
        $v_0.append(CrmEncodeDecode.CrmHtmlEncode($v_2));
        $v_0.append("</span></div>");
        this.$1B_1 = $P_CRM($v_0.toString());
        $v_0.clear();
        $v_0.append('<div class="' + CrmEncodeDecode.CrmHtmlAttributeEncode("refineQueryMessage") + '"><span>');
        var $v_3 = window.LOCID_LOOKUPMATCHBAR_REFINE;
        $v_0.append(CrmEncodeDecode.CrmHtmlEncode($v_3));
        $v_0.append("</span></div>");
        this.$1D_1 = $P_CRM($v_0.toString());
        this.$X_1 = $P_CRM('<div class="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode("touchLookupSimpleListView") +
            '"></div>');
        this.$p_1 = $P_CRM('<div class="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode("scrollRegion") +
            " " +
            CrmEncodeDecode.CrmHtmlAttributeEncode("touchLookupScrollingElement") +
            '"></div>');
        this.$p_1.append(this.$1D_1);
        this.$p_1.append(this.$1B_1);
        this.$p_1.append(this.$X_1);
        $v_1.append(this.$p_1);
        this.$A_1.append($v_1);
        this.$A_1.addClass("touchLookupMatchesBar")
    },
    $4i_1: function() {
        this.$2_1 = null;
        this.$1W_1 = 0;
        var $v_0 = window.dialogArguments;
        if (!IsNull($v_0)) {
            var $v_2 = $v_0.nativeBridge;
            if (!IsNull($v_2)) this.$2_1 = $v_2;
            this.$1W_1 = $v_0.screenHeight
        }
        var $v_1 = new Mscrm.FormatArguments;
        $v_1.returnValue = this.$2_1;
        this.$2X_1("nativeBridgeInitialized", $v_1)
    },
    $2t_1: function() {
        var $v_0 = 0, $v_1 = 0, $v_2 = 0, $v_3 = 0, $v_4 = 0;
        if (!IsNull(this.$2_1) && this.$2_1.get_device().get_IsAvailable()) {
            $v_0 = this.$1W_1;
            var $v_6 = $P_CRM(window.frameElement);
            $v_1 = $v_6.height();
            $v_2 = $v_6.offset().top;
            $v_3 = Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()
                ? Mscrm.FormInputControl.TouchLookupMatchesBar.get_$56() -
                Mscrm.FormInputControl.TouchLookupMatchesBar.get_$3u()
                : this.$2_1.get_device().get_DeviceState().get_KeyboardHeight();
            $v_4 = Mscrm.FormInputControl.TouchLookupMatchesBar.get_$4U() +
                this.$2_1.get_device().get_DeviceState().get_ExternalWindowScrollAmount()
        }
        var $v_5 = $v_2 + $v_1 + $v_3 - $v_4 - $v_0;
        $v_5 = $v_5 >= 0 ? $v_5 : 0;
        this.$A_1.css("bottom", $v_5 + "px")
    },
    $2O_1: function() {
        this.bindDeviceEventListeners();
        if (!IsNull(this.$2_1) &&
            this.$2_1.get_device().get_IsAvailable() &&
            Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()) {
            $P_CRM(window.parent).bind("resize", this.$$d_$4P_1);
            $P_CRM(window.parent).bind("scroll", this.$$d_$4P_1)
        }
        this.$A_1.click(this.$$d_$4K_1)
    },
    $4P_1: function($p0) { this.$2t_1() },
    unbindControlHandlers: function() {
        this.unbindDeviceEventListeners();
        if (!IsNull(this.$2_1) &&
            this.$2_1.get_device().get_IsAvailable() &&
            Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()) {
            $P_CRM(window.parent).unbind("resize", this.$$d_$4P_1);
            $P_CRM(window.parent).unbind("scroll", this.$$d_$4P_1)
        }
        this.$A_1.unbind("click", this.$$d_$4K_1)
    },
    bindDeviceEventListeners: function() {
        if (!IsNull(this.$2_1) && this.$2_1.get_device().get_IsAvailable()) {
            this.$2_1.get_device().get_DeviceState().AddPropertyChangedListener("KeyboardHeight", this.$$d_$2t_1);
            this.$2_1.get_device().get_DeviceState().AddPropertyChangedListener("KeyboardVisible", this.$$d_$2t_1);
            this.$2_1.get_device().get_DeviceState()
                .AddPropertyChangedListener("ExternalWindowScrollAmount", this.$$d_$2t_1)
        }
    },
    unbindDeviceEventListeners: function() {
        if (!IsNull(this.$2_1) && this.$2_1.get_device().get_IsAvailable()) {
            this.$2_1.get_device().get_DeviceState().RemovePropertyChangedListener("KeyboardHeight", this.$$d_$2t_1);
            this.$2_1.get_device().get_DeviceState().RemovePropertyChangedListener("KeyboardVisible", this.$$d_$2t_1);
            this.$2_1.get_device().get_DeviceState()
                .RemovePropertyChangedListener("ExternalWindowScrollAmount", this.$$d_$2t_1)
        }
    },
    $4K_1: function($p0) { $p0.stopPropagation() },
    $1F_1: function($p0) {
        this.$X_1.empty();
        if ($p0 === 1) this.$1D_1.show();
        else this.$1D_1.hide();
        if (!$p0) this.$1B_1.show();
        else this.$1B_1.hide();
        this.set_resolving(false)
    },
    $4X_1: function() {
        if (!this.$J_1.length) this.$1F_1(0);
        else if (this.$J_1.length >= 1 && this.$J_1.length <= 25) {
            this.$1F_1(2);
            for (var $v_0 = 0; $v_0 < this.$J_1.length; $v_0++) this.$37_1(this.$J_1[$v_0])
        } else this.$1F_1(1)
    },
    $37_1: function($p0) {
        var $v_0 = $P_CRM('<div class="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode("listItem") +
                '" data-id="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode($p0.id.toLowerCase().replace("{", "").replace("}", "")) +
                '"></div>'),
            $v_1 = $P_CRM("<span>" + $p0.name + "</span>");
        $v_0.append($v_1);
        var $$t_5 = this;
        $v_0.click(function($p1_0) {
            var $v_2 = new Mscrm.FormatArguments;
            $v_2.returnValue = $p0;
            $$t_5.$2X_1("userselectedmatch", $v_2);
            $p1_0.stopPropagation()
        });
        this.$X_1.append($v_0)
    },
    $4t_1: function() {
        this.$X_1.empty();
        for (var $v_0 = $P_CRM('<div class="' +
                     CrmEncodeDecode.CrmHtmlAttributeEncode("indeterminateProgressBar") +
                     '"></div>'),
            $v_1 = 1;
            $v_1 < 6;
            $v_1++) {
            var $v_2 = $P_CRM(window.document.createElement("div"));
            $v_2.addClass("progressDot");
            $v_2.addClass("progressDot" + $v_1);
            $v_2.append($P_CRM(window.document.createElement("div")));
            $v_0.append($v_2)
        }
        this.$X_1.append($v_0)
    },
    $3n_1: function() {
        var $v_0 = this.$X_1.find(".indeterminateProgressBar");
        $v_0 && $v_0.addClass("hideProgressBar")
    }
};
Mscrm.FormInputControl.PresenceLookupUIBehavior = function(element) {
    this.$$d_initializeLookupPresence = Function.createDelegate(this, this.initializeLookupPresence);
    this.$$d_$4Y_5 = Function.createDelegate(this, this.$4Y_5);
    this.$$d_autoResolveHandlerDetached = Function.createDelegate(this, this.autoResolveHandlerDetached);
    this.$$d_$4D_5 = Function.createDelegate(this, this.$4D_5);
    this.$$d_$3Q_5 = Function.createDelegate(this, this.$3Q_5);
    this.$$d_$2s_5 = Function.createDelegate(this, this.$2s_5);
    this.$$d_$4A_5 = Function.createDelegate(this, this.$4A_5);
    this.$$d_initializeNativeBridge = Function.createDelegate(this, this.initializeNativeBridge);
    this.$$d_$4Z_5 = Function.createDelegate(this, this.$4Z_5);
    Mscrm.FormInputControl.PresenceLookupUIBehavior.initializeBase(this, [element]);
    if (this.get_useTouchSkin()) {
        this.$A_5 = $P_CRM(element);
        this.$1r_5 = this.$A_5.find(".editablePanel");
        this.$x_5 = this.$A_5.find(".controlDisplay");
        this.$c_5 = this.$A_5.find(".comboBox");
        this.$Y_5 = this.$A_5.find(".textbox");
        this.$1V_5 = this.$A_5.find(".partyList");
        this.$F_5 = new Mscrm.FormInputControl.TouchLookupMatchesBar($P_CRM(document.body));
        this.$4_5 = new Array(0)
    }
};
Mscrm.FormInputControl.PresenceLookupUIBehavior.$2p = function($p0, $p1) {
    if (IsNull($p0) || IsNull($p1)) return false;
    return $p0.isSameNode($p1)
};
Mscrm.FormInputControl.PresenceLookupUIBehavior.$4W = function($p0) {
    for (var $v_0 = [], $v_1 = 0, $v_2 = XUI.Xml.SelectNodes($p0.documentElement, "/items/records", null), $v_3 = 0;
        $v_3 < $v_2.length;
        $v_3++)
        for (var $v_4 = XUI.Xml.SelectNodes($v_2[$v_3], "record", null), $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
            var $v_6 = $v_4[$v_5], $v_7 = new LookupControlItem;
            $v_7.values = [];
            $v_7.keyValues = {};
            $v_7.data = "";
            $v_7.id = XUI.Xml.GetText($v_6.attributes.getNamedItem("oid"));
            $v_7.name = XUI.Xml.GetText($v_6.attributes.getNamedItem("oname"));
            $v_7.type = XUI.Xml.GetText($v_6.attributes.getNamedItem("otype"));
            XUI.Xml.DomUtils.ForEachChild($v_6,
                function($p1_0) {
                    var $v_8 = $p1_0.nodeName, $v_9 = XUI.Xml.GetText($p1_0);
                    Array.add($v_7.values, new Mscrm.FormInputControl.LookupItemData($v_8, $v_9));
                    $v_7.keyValues[$v_8] = new Mscrm.FormInputControl.LookupItemData($v_8, $v_9);
                    return false
                });
            $v_0[$v_1] = $v_7;
            $v_1++
        }
    return $v_0
};
Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype = {
    $A_5: null,
    $x_5: null,
    $1r_5: null,
    $c_5: null,
    $Y_5: null,
    $1V_5: null,
    $l_5: null,
    $F_5: null,
    $12_5: false,
    $21_5: false,
    $1T_5: false,
    $19_5: 0,
    $4_5: null,
    $20_5: null,
    $1v_5: null,
    $2_5: null,
    $q_5: false,
    $1C_5: null,
    $T_5: null,
    get_isTouchSkinEnabled: function() { return true },
    get_disableInlineLookup: function() {
        return this.get_useTouchSkin()
            ? true
            : Mscrm.FormInputControl.LookupUIBehavior.prototype.get_disableInlineLookup.call(this)
    },
    set_disableInlineLookup: function(value) {
        Mscrm.FormInputControl.LookupUIBehavior.prototype.set_disableInlineLookup
            .call(this, this.get_useTouchSkin() ? true : value);
        return value
    },
    get_lookupStyle: function() {
        var $v_0 = Mscrm.FormInputControl.LookupUIBehavior.prototype.get_lookupStyle.call(this);
        if (this.get_useTouchSkin())
            if (!isNullOrEmptyString($v_0) && $v_0 === "subject") {
                Mscrm.FormInputControl.LookupUIBehavior.prototype.set_lookupStyle.call(this, "single");
                this.$2j_5();
                $v_0 = "single"
            }
        return $v_0
    },
    set_lookupStyle: function(value) {
        if (this.get_useTouchSkin()) {
            if (isNullOrEmptyString(value) || this.get_lookupStyle() === "subject") return value;
            if (this.get_lookupStyle() !== value) {
                Mscrm.FormInputControl.LookupUIBehavior.prototype.set_lookupStyle.call(this, value);
                this.$2j_5()
            }
        } else Mscrm.FormInputControl.LookupUIBehavior.prototype.set_lookupStyle.call(this, value);
        return value
    },
    get_enableInlineLookupForEditForms: function() {
        return this.get_useTouchSkin()
            ? false
            : Mscrm.FormInputControl.LookupUIBehavior.prototype.get_enableInlineLookupForEditForms.call(this)
    },
    get_dataValue: function() {
        if (this.get_useTouchSkin()) return this.get_$2I_5();
        else return Mscrm.FormInputControl.LookupUIBehavior.prototype.get_dataValue.call(this)
    },
    set_dataValue: function(value) {
        if (this.get_useTouchSkin()) {
            this.set_$2I_5(value);
            this.handleDataValueChangedEvent()
        } else Mscrm.FormInputControl.LookupUIBehavior.prototype.set_dataValue.call(this, value);
        return value
    },
    get_$2I_5: function() {
        if (IsNull(this.$4_5)) this.$4_5 = new Array(0);
        if (!this.$4_5.length) return null;
        return this.$4_5
    },
    set_$2I_5: function($p0) {
        this.$1d_5();
        if (!IsNull($p0) && isArray($p0)) {
            var $v_0 = $p0;
            this.get_lookupStyle() === "single" && $v_0.length === 1 && this.$1p_5($v_0[0]);
            if (this.get_lookupStyle() === "multi")
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) this.$1p_5($v_0[$v_1])
        }
        return $p0
    },
    get_rootControl: function() {
        return this.get_useTouchSkin()
            ? this.get_element()
            : Mscrm.FormInputControl.LookupUIBehavior.prototype.get_rootControl.call(this)
    },
    initialize: function() {
        Mscrm.FormInputControl.LookupUIBehavior.prototype.initialize.call(this);
        if (this.get_useTouchSkin()) this.$3s_5();
        else this.$3r_5()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (this.get_useTouchSkin()) this.$3P_5();
        else this.$3O_5();
        Mscrm.FormInputControl.LookupUIBehavior.prototype.dispose.call(this)
    },
    setDisabled: function(value) {
        if (this.get_useTouchSkin()) {
            this.get_element().setAttribute("lookupdisabled", value);
            value && this.set_$1f_5(false)
        } else Mscrm.FormInputControl.LookupUIBehavior.prototype.setDisabled.call(this, value)
    },
    get_selectedEntity: function() {
        var $v_0 = this.$c_5.find("option:selected").val();
        return parseInt($v_0, 10)
    },
    $3s_5: function() {
        if (!this.$21_5) {
            this.set_$4x_5(true);
            this.set_$2I_5(this.get_initialTouchLookupItems());
            this.updateTouchLookupEntitySelector();
            this.$4w_5();
            this.$2O_5();
            this.$1H_5()
        }
    },
    $3P_5: function() {
        this.$4z_5();
        this.$F_5.cleanUp();
        this.$4y_5()
    },
    $4w_5: function() {
        this.$F_5.add_userSelectedMatchEvent(this.$$d_$4Z_5);
        this.$F_5.add_nativeBridgeInitializedEvent(this.$$d_initializeNativeBridge)
    },
    $4z_5: function() {
        this.$F_5.remove_userSelectedMatchEvent(this.$$d_$4Z_5);
        this.$F_5.remove_nativeBridgeInitializedEvent(this.$$d_initializeNativeBridge)
    },
    set_$4x_5: function($p0) {
        this.$21_5 = true;
        return $p0
    },
    get_initialTouchLookupItems: function() { return this.get_useTouchSkin() ? this.$1v_5 : null },
    set_initialTouchLookupItems: function(value) {
        var $v_0 = [];
        if (!IsNull(value) && isArray(value))
            for (var $v_1 = value, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (!IsNull($v_3)) {
                    var $v_4 = new LookupItem;
                    $v_4.id = $v_3.Id;
                    $v_4.type = $v_3.Type.toString();
                    $v_4.name = $v_3.Name;
                    Array.add($v_0, $v_4)
                }
            }
        this.$1v_5 = $v_0;
        return value
    },
    set_$1f_5: function($p0) {
        if (this.$12_5 !== $p0) {
            this.$12_5 = $p0;
            if (this.$12_5) {
                this.$q_5 = false;
                this.$4o_5();
                this.$A_5.addClass("activeTouchControl");
                this.$x_5.hide();
                this.$33_5()
            } else {
                this.$A_5.removeClass("activeTouchControl");
                this.$1H_5();
                this.$x_5.show();
                if (this.$q_5) {
                    var $v_0 = new Mscrm.FormInputControl.ResultEventArgs, $v_1 = new LookupItems;
                    $v_1.items = this.$4_5;
                    $v_0.$8_1 = $v_1;
                    this.raiseEvents($v_0,
                        Mscrm.FormInputControl.LookupUIBehavior.lookupItemsDifferent(this.$20_5, this.$4_5))
                }
            }
            this.$4v_5(this.$12_5);
            this.$1r_5.toggle()
        }
        return $p0
    },
    $4o_5: function() { this.$20_5 = Array.clone(this.$4_5) },
    $4v_5: function($p0) {
        var $v_0 = $P_CRM(window.frameElement),
            $v_1 = $v_0.height(),
            $v_2 = $p0
                ? $v_1 + Mscrm.FormInputControl.TouchLookupMatchesBar.get_barHeight()
                : $v_1 - Mscrm.FormInputControl.TouchLookupMatchesBar.get_barHeight();
        $v_0.css("height", $v_2.toString() + "px");
        this.$F_5.set_visible($p0)
    },
    updateTouchLookupEntitySelector: function() {
        if (this.get_useTouchSkin()) {
            this.$3E_5();
            var $v_0 = this.get_lookupTypeNames();
            if (!isNullOrEmptyString($v_0))
                for (var $v_1 = $v_0.split(","), $v_2 = $v_1.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
                    var $v_4 = $v_1[$v_3].split(":");
                    this.$39_5($v_4[1], $v_4[2])
                }
        }
    },
    $3E_5: function() { this.$c_5.empty() },
    $39_5: function($p0, $p1) {
        this.$c_5.append('<option value="' + $p0 + '">' + CrmEncodeDecode.CrmHtmlEncode($p1) + "</option>")
    },
    $1H_5: function() {
        var $v_0 = "---";
        if (this.$v_5()) {
            if (this.get_lookupStyle() === "single") $v_0 = this.$4_5[0].name;
            if (this.get_lookupStyle() === "multi") {
                for (var $v_1 = new Sys.StringBuilder, $v_2 = 0; $v_2 < this.$4_5.length; $v_2++) {
                    $v_2 > 0 && $v_1.append(", ");
                    $v_1.append(this.$4_5[$v_2].name)
                }
                $v_0 = $v_1.toString()
            }
        }
        this.$x_5.text($v_0)
    },
    $33_5: function() {
        var $v_0 = "";
        if (this.get_lookupStyle() === "single" && this.$v_5()) $v_0 = this.$4_5[0].name;
        this.$Y_5.val($v_0)
    },
    $3G_5: function() {
        this.$Y_5.val("");
        this.$F_5.clearContents()
    },
    $2O_5: function() {
        this.$c_5.bind("change", this.$$d_$4A_5);
        this.$Y_5.bind("keyup", this.$$d_$2s_5);
        if (Mscrm.Utilities.isIosDevice()) {
            this.$l_5 = $P_CRM(document).find("body > div:first");
            !IsNull(this.$l_5) && this.$l_5.click(this.$$d_$3Q_5)
        }
        $P_CRM(document).click(this.$$d_$4D_5)
    },
    $4y_5: function() {
        this.$c_5.unbind("change", this.$$d_$4A_5);
        this.$Y_5.unbind("keyup", this.$$d_$2s_5);
        if (Mscrm.Utilities.isIosDevice()) !IsNull(this.$l_5) && this.$l_5.unbind("click", this.$$d_$3Q_5);
        $P_CRM(document).unbind("click", this.$$d_$4D_5)
    },
    $2j_5: function() {
        if (this.get_lookupStyle() === "single") {
            if (this.$v_5()) {
                var $v_0 = this.$4_5[0];
                this.$1d_5();
                this.$1p_5($v_0)
            }
            this.$3F_5()
        }
        this.$1H_5()
    },
    $4D_5: function($p0) {
        !this.get_disabled() && this.set_$1f_5(this.$3x_5($p0.target));
        $p0.stopPropagation()
    },
    $3Q_5: function($p0) {},
    $3x_5: function($p0) {
        var $v_0 = this.$A_5.get(0), $v_1 = this.$F_5.$A_1.get(0);
        return Mscrm.FormInputControl.PresenceLookupUIBehavior.$2p($v_0, $p0) ||
            XUI.Html.DomUtils.Contains($v_0, $p0) ||
            Mscrm.FormInputControl.PresenceLookupUIBehavior.$2p($v_1, $p0) ||
            XUI.Html.DomUtils.Contains($v_1, $p0)
    },
    $4A_5: function($p0) {
        this.$3G_5();
        $p0.stopPropagation()
    },
    $2s_5: function($p0) {
        switch ($p0.which) {
        case 13:
            $p0.preventDefault();
            $p0.stopPropagation();
            break;
        case 27:
            this.clearLookupDetached();
            this.set_$1f_5(false);
            $p0.stopPropagation();
            break;
        case 16:
        case 17:
        case 18:
        case 20:
        case 40:
        case 38:
        case 34:
        case 33:
        case 9:
        case 35:
        case 36:
        case 37:
        case 39:
            break;
        default:
            if (this.get_lookupStyle() === "single" && this.$v_5()) {
                this.$q_5 = true;
                this.$1d_5()
            }
            var $v_0 = this.get_selectedEntity();
            if (!($v_0 >= 0)) return;
            this.beginLookupDetached(this.$Y_5.val(), $v_0, true);
            break
        }
    },
    $4Z_5: function($p0, $p1) {
        var $v_0 = $p1;
        if (!IsNull($v_0)) {
            this.$q_5 = true;
            var $v_1 = $v_0.returnValue;
            this.$1p_5($v_1);
            this.$F_5.clearContents()
        }
    },
    initializeNativeBridge: function(sender, args) {
        var $v_0 = args;
        this.$2_5 = $v_0.returnValue
    },
    $v_5: function() { return this.$4_5.length > 0 },
    $1d_5: function() { this.$4_5 = new Array(0) },
    $1p_5: function($p0) {
        var $v_0 = false;
        if (this.get_lookupStyle() === "single")
            if (!this.$v_5()) {
                this.$2N_5($p0);
                this.set_$1f_5(false);
                $v_0 = true
            }
        if (this.get_lookupStyle() === "multi") {
            for (var $v_1 = true, $v_2 = 0; $v_2 < this.$4_5.length; $v_2++)
                if (this.$4_5[$v_2].type === $p0.type && this.$4_5[$v_2].id === $p0.id) {
                    $v_1 = false;
                    break
                }
            if ($v_1) {
                this.$2N_5($p0);
                this.$3A_5($p0);
                $v_0 = true
            }
        }
        if ($v_0) {
            this.$1H_5();
            this.$33_5()
        }
    },
    $2N_5: function($p0) { if (!IsNull($p0)) this.$4_5[this.$4_5.length] = $p0 },
    $4d_5: function($p0) {
        if (this.$v_5()) {
            if (this.get_lookupStyle() === "single")
                this.$4_5[0].type === $p0.type && this.$4_5[0].id === $p0.id && this.$1d_5();
            if (this.get_lookupStyle() === "multi")
                for (var $v_0 = 0; $v_0 < this.$4_5.length; $v_0++)
                    if (this.$4_5[$v_0].type === $p0.type && this.$4_5[$v_0].id === $p0.id) {
                        for (var $v_1 = [], $v_2 = 0;
                            $v_2 < this.$4_5.length;
                            $v_2++
                        ) $v_2 !== $v_0 && Array.add($v_1, this.$4_5[$v_2]);
                        this.$4_5 = $v_1;
                        break
                    }
            this.$q_5 = true;
            this.$1H_5()
        }
    },
    $3I_5: function($p0) {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append('<div class="' + CrmEncodeDecode.CrmHtmlAttributeEncode("partyListItem") + '" tabindex="-1">');
        $v_0.append('<div class="' + CrmEncodeDecode.CrmHtmlAttributeEncode("partyListItemLabel") + '" tabindex="-1">');
        $v_0.append("<span>" + $p0.name + "</span>");
        $v_0.append("</div>");
        $v_0
            .append('<div class="' +
                CrmEncodeDecode
                .CrmHtmlAttributeEncode("partyListItemDelete") +
                '" tabindex="-1">');
        $v_0.append('<span class="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode("Clear-symbol") +
            " " +
            CrmEncodeDecode.CrmHtmlAttributeEncode("symbolFont") +
            '"></span>');
        $v_0.append("</div>");
        $v_0.append("</div>");
        var $v_1 = $P_CRM($v_0.toString()), $$t_4 = this;
        $v_1.find(".partyListItemDelete").click(function($p1_0) {
            $$t_4.$4d_5($p0);
            $v_1.remove();
            $p1_0.stopPropagation()
        });
        return $v_1
    },
    $3A_5: function($p0) {
        var $v_0 = this.$3I_5($p0);
        this.$1V_5.append($v_0)
    },
    $3F_5: function() { this.$1V_5.empty() },
    beginLookupDetached: function(searchValue, lookupType, asyncOperation) {
        this.clearLookupDetached();
        var $$t_3 = this;
        this.$19_5 = window.setTimeout(function() { $$t_3.$42_5(searchValue, lookupType, asyncOperation) }, 300)
    },
    clearLookupDetached: function() {
        if (this.$19_5) {
            window.clearTimeout(this.$19_5);
            this.$19_5 = 0
        }
    },
    $42_5: function($p0, $p1, $p2) {
        if (isNullOrEmptyString($p0)) {
            this.$F_5.set_matches(null);
            return
        }
        this.RaiseSetAdditionalParamsEvent();
        if (typeof $p2 === "undefined") $p2 = true;
        try {
            var $v_0 = this.$3f_5($p0, $p1, "RetrieveItem");
            this.onResolvingDetached();
            if ($p2) $v_0.Execute(this.$$d_autoResolveHandlerDetached);
            else this.autoResolveHandlerDetached($v_0.Execute(), null)
        } catch ($$e_4) {
            alert(window.LOCID_LU_ERROR_RESOLVED)
        }
    },
    onResolvingDetached: function() { this.$F_5.set_resolving(true) },
    onResolvedDetached: function() { this.$F_5.set_resolving(false) },
    $3f_5: function($p0, $p1, $p2) {
        var $v_0 = null;
        try {
            var $v_1 = new Array(1);
            $v_1.type = "int";
            $v_1[0] = $p1;
            var $v_2 = [], $v_3 = [];
            $v_2.type = "string";
            $v_3.type = "int";
            Array.add($v_2, $p0);
            Array.add($v_3, 0);
            var $v_4 = this.get_defaultViewId(),
                $v_5 = this.get_additionalParams(),
                $v_6 = this.get_filterRelationshipData();
            if (!isNullOrEmptyString($v_6.$R_0)) {
                $v_5 += "&filterrelationship=true&relationshipid=" + CrmEncodeDecode.CrmUrlEncode($v_6.$f_0);
                $v_5 += "&oId=" + CrmEncodeDecode.CrmUrlEncode($v_6.$R_0);
                $v_5 += "&oType=" + CrmEncodeDecode.CrmUrlEncode($v_6.$i_0);
                $v_5 += "&rDependAttr=" + CrmEncodeDecode.CrmUrlEncode($v_6.$b_0)
            }
            $v_0 = new RemoteCommand("LookupService", $p2);
            $v_0.SetParameter("typesArray", $v_1);
            $v_0.SetParameter("bindingColumns", IsNull(this.$G_4) ? "" : this.$G_4);
            $v_0.SetParameter("additionalParameters", $v_5);
            $v_0.SetParameter("positions", $v_3);
            $v_0.SetParameter("resolveEmailAddress", this.get_resolveEmailAddress());
            $v_0.SetParameter("savedQueryTypeParameter", null);
            $v_0.SetParameter("defaultViewId", $v_4);
            var $v_7 = $v_2;
            !isNullOrEmptyString($v_7) && $v_0.SetParameter("lookupValues", $v_2)
        } catch ($$e_B) {
            alert(window.LOCID_LU_ERROR_RESOLVED)
        }
        return $v_0
    },
    autoResolveHandlerDetached: function(result, cmd) {
        var $v_0;
        if (this.$3y_5(cmd) && this.$3v_5(cmd) && result.Success && typeof result.ReturnValue === "string") {
            var $v_1 = null;
            if (!IsNull(this
                    .$2_5) &&
                this.$2_5.get_device().get_IsAvailable()) $v_1 = Sys.Net.XMLDOM(result.ReturnValue);
            else $v_1 = XUI.Xml.LoadXml(result.ReturnValue);
            $v_0 = Mscrm.FormInputControl.PresenceLookupUIBehavior.$4W($v_1)
        } else $v_0 = [];
        this.onResolvedDetached();
        this.$F_5.set_matches($v_0)
    },
    $3v_5: function($p0) {
        if (IsNull($p0)) return false;
        var $v_0 = $p0.GetParameter("typesArray");
        if (IsNull($v_0) || isNullOrEmptyString($v_0.Value)) return false;
        var $v_1 = null;
        if (!IsNull(this.$2_5) && this.$2_5.get_device().get_IsAvailable()) {
            var $v_3 = Sys.Net.XMLDOM($v_0.Value);
            $v_1 = $v_3.firstChild
        } else {
            var $v_4 = XUI.Xml.LoadXml($v_0.Value);
            $v_1 = XUI.Xml.DomUtils.GetFirstChild($v_4)
        }
        if (IsNull($v_1)) return false;
        var $v_2 = parseInt(XUI.Xml.GetText($v_1), 10);
        if ($v_2 === this.get_selectedEntity()) return true;
        return false
    },
    $3y_5: function($p0) {
        if (IsNull($p0)) return false;
        var $v_0 = $p0.GetParameter("lookupValues");
        if (IsNull($v_0) || isNullOrEmptyString($v_0.Value)) return false;
        var $v_1 = null;
        if (!IsNull(this.$2_5) && this.$2_5.get_device().get_IsAvailable()) {
            var $v_4 = Sys.Net.XMLDOM($v_0.Value);
            $v_1 = $v_4.firstChild
        } else {
            var $v_5 = XUI.Xml.LoadXml($v_0.Value);
            $v_1 = XUI.Xml.DomUtils.GetFirstChild($v_5)
        }
        if (IsNull($v_1)) return false;
        var $v_2 = XUI.Xml.GetText($v_1), $v_3 = this.$Y_5.val();
        if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_3) && $v_2.indexOf($v_3) > -1) return true;
        return false
    },
    initializeLookupPresence: function() {
        if (this.get_isDisposed() || this.get_$2o_5()) return;
        if (!this.get_useTouchSkin()) {
            var $v_0 = this.$3i_5();
            !IsNull($v_0) && this.queryLookupPresence($v_0)
        }
    },
    queryLookupPresence: function(spans) {
        if (this.get_useTouchSkin() ||
            !window._bPresenceEnabled ||
            IsNull(spans) ||
            !spans.length ||
            this.$1T_5 ||
            this.get_lookupStyle() !== "single" ||
            this.get_$2o_5()) return;
        this.get_presenceService().set_populatePresenceViewsDelegate(this.$$d_$4Y_5);
        this.get_presenceService().querySipInfo()
    },
    get_$2o_5: function() { return window.location.href.indexOf("crmreports/viewer/viewer.aspx") >= 0 },
    $4Y_5: function() {
        !IsNull(this.$T_5) && this.$T_5.dispose();
        return this.get_presenceView()
    },
    $3r_5: function() { Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_initializeLookupPresence, 2) },
    $3O_5: function() {
        if (IsNull(this.$T_5)) return;
        this.$T_5.dispose()
    },
    $3i_5: function() {
        try {
            var $v_0 = this.getLookupField();
            return !IsNull($v_0) ? $v_0.getElementsByTagName("SPAN") : null
        } catch ($$e_1) {
            return null
        }
    },
    get_presenceService: function() {
        if (IsNull(this.$1C_5))
            this.$1C_5 = new LookupBehavior.Services.PresenceService(Mscrm.Caching.LocalCaches.sipIDs);
        return this.$1C_5
    },
    set_presenceService: function(value) {
        this.$1C_5 = value;
        return value
    },
    get_presenceView: function() {
        var $v_0 = new Mscrm.Proxies.DomElementProxy;
        $v_0.set_element(this.getLookupField());
        var $v_1 = $v_0.querySelector(".ms-crm-Lookup-Item"), $v_2 = IsNull($v_1);
        if ($v_2) return null;
        this.$T_5 = new LookupBehavior.Views.PresenceView;
        this.$T_5.set_elementProxy($v_1);
        return this.$T_5
    },
    set_presenceView: function(value) {
        this.$T_5 = value;
        return value
    },
    get_isHeaderTile: function() { return this.$1T_5 },
    set_isHeaderTile: function(value) {
        this.$1T_5 = value;
        return value
    }
};
Mscrm.FormInputControl.TableLookupUIControl = function(element) {
    this.$$d_setFocus = Function.createDelegate(this, this.setFocus);
    Mscrm.FormInputControl.TableLookupUIControl.initializeBase(this, [element])
};
Mscrm.FormInputControl.TableLookupUIControl.prototype = {
    $1R_3: null,
    $1S_3: null,
    get_dataValue: function() { return this.get_innerControl().get_dataValue() },
    set_dataValue: function(value) {
        this.get_innerControl().set_dataValue(value);
        return value
    },
    get_innerDataXml: function() { return this.get_innerControl().get_dataXml() },
    get_innerControlId: function() { return this.$1S_3 },
    set_innerControlId: function(value) {
        this.$1S_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $addHandler(this.get_element(), "focus", this.$$d_setFocus);
        Mscrm.FormControlInputBehavior.createSlugSupportIfNeeded(this.get_element())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.get_element()) && $removeHandler(this.get_element(), "focus", this.$$d_setFocus);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    fireOnChange: function() { this.get_innerControl().RaiseOnChangeEvent(null) },
    setFocus: function(eventObject) { this.get_innerControl().Focus(eventObject) },
    get_innerControl: function() {
        if (IsNull(this.$1R_3)) this.$1R_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$1S_3);
        return this.$1R_3
    }
};
Mscrm.FormInputControl.MockLookupUIBehaviorProxy = function() {};
Mscrm.FormInputControl.MockLookupUIBehaviorProxy.prototype = {
    $13_0: null,
    $15_0: null,
    $W_0: null,
    $14_0: null,
    get_element: function() { return this.$W_0 },
    set_element: function(value) {
        this.$W_0 = value;
        return value
    },
    items: function(addUnresolvedText, addUnresolvedItems, clearOnClickMethod, resetClassName, serializeValues) {
        if (IsNull(this.$13_0)) return null;
        return this.$13_0(addUnresolvedText, addUnresolvedItems, clearOnClickMethod, resetClassName, serializeValues)
    },
    getLookupWebServiceRequest: function(reference, webMethodName) {
        if (IsNull(this.$15_0)) return null;
        return this.$15_0(reference, webMethodName)
    },
    get_itemsDelegate: function() { return this.$13_0 },
    set_itemsDelegate: function(value) {
        this.$13_0 = value;
        return value
    },
    get_lookupWebServiceDelegate: function() { return this.$15_0 },
    set_lookupWebServiceDelegate: function(value) {
        this.$15_0 = value;
        return value
    },
    get_getItemsInvocationsQueue: function() {
        if (IsNull(this.$14_0)) this.$14_0 = [];
        return this.$14_0
    },
    set_getItemsInvocationsQueue: function(value) {
        this.$14_0 = value;
        return value
    }
};
Type.registerNamespace("LookupBehavior.Services");
LookupBehavior.Services.IPresenceService = function() {};
LookupBehavior.Services.IPresenceService.registerInterface("LookupBehavior.Services.IPresenceService");
LookupBehavior.Services.PresenceService = function(sipIdCache) {
    this.$$d_$4R_0 = Function.createDelegate(this, this.$4R_0);
    this.$w_0 = sipIdCache
};
LookupBehavior.Services.PresenceService.prototype = {
    $w_0: null,
    $N_0: null,
    $M_0: null,
    $o_0: null,
    $g_0: null,
    get_presenceHelperProxy: function() {
        if (IsNull(this.$N_0)) this.$N_0 = new Mscrm.Proxies.PresenceHelperProxy;
        return this.$N_0
    },
    set_presenceHelperProxy: function(value) {
        this.$N_0 = value;
        return value
    },
    get_presenceControlProxy: function() {
        if (IsNull(this.$M_0)) this.$M_0 = Mscrm.Presence.PresenceControlFactory.get_instance();
        return this.$M_0
    },
    set_presenceControlProxy: function(value) {
        this.$M_0 = value;
        return value
    },
    get_querySipInfoCommand: function() {
        if (IsNull(this.$o_0)) {
            this.$o_0 = new Mscrm.Proxies.RemoteCommandProxy;
            var $v_0 = new RemoteCommand("PresenceService", "QuerySipInfo");
            this.$o_0.set_element($v_0)
        }
        return this.$o_0
    },
    set_querySipInfoCommand: function(value) {
        this.$o_0 = value;
        return value
    },
    get_populatePresenceViewsDelegate: function() { return this.$g_0 },
    set_populatePresenceViewsDelegate: function(value) {
        this.$g_0 = value;
        return value
    },
    querySipInfo: function() {
        if (IsNull(this.$g_0) || IsNull(this.$w_0)) return;
        var $v_0 = this.$g_0();
        if (IsNull(this.get_presenceControlProxy()) ||
            IsNull($v_0) ||
            !this.get_presenceControlProxy().get_presenceEnabled() ||
            !$v_0.get_entityTypeCodeSupportsPresence() ||
            isNullOrEmptyString($v_0.get_recordId())) return;
        var $v_1 = this.$2b_0($v_0), $v_2 = this.$w_0.get_item($v_1), $v_3 = !isNullOrEmptyString($v_2);
        if ($v_3) {
            $v_0.set_sipId($v_2);
            $v_0.enablePresence();
            return
        }
        $v_0.renderPlaceholder();
        var $v_4 = new Sys.StringBuilder,
            $v_5 = this.get_presenceHelperProxy().addSipRequest($v_0.get_recordId(), $v_0.get_entityTypeCode());
        $v_4.append($v_5);
        $v_4 = new Sys.StringBuilder(String.format("<grid>{0}</grid>", $v_4));
        this.get_querySipInfoCommand().setParameter("entityListXml", $v_4.toString());
        var $v_6 = this.$$d_$4R_0;
        this.get_querySipInfoCommand().execute($v_6)
    },
    $2b_0: function($p0) {
        return String.format("{0}/{1}",
            $p0.get_entityTypeCode(),
            $p0.get_recordId()
            .toLowerCase())
    },
    $4R_0: function($p0, $p1) {
        if (IsNull($p0) || IsNull($p0.get_returnValue()) || IsNull($p1) || IsNull(this.$g_0)) return;
        var $v_0 = $p0.get_returnValue().toString(), $v_1 = this.$g_0();
        if (IsNull($v_1)) return;
        if (!$p0.get_success() || isNullOrEmptyString($v_0)) {
            $v_1.removePlaceholder();
            return
        }
        var $v_2 = this.get_presenceHelperProxy().createPresenceInfoArray($p0);
        if (!$v_2.length) {
            $v_1.removePlaceholder();
            return
        }
        for (var $$arr_5 = $v_2, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_3 = $$arr_5[$$idx_7];
            if ($v_1.get_recordId() !== $v_3.get_recordId()) continue;
            $v_1.set_sipId($v_3.get_sipId());
            if (!IsNull(this.$w_0)) {
                var $v_4 = this.$2b_0($v_1);
                this.$w_0.set_item($v_4, $v_1.get_sipId())
            }
            break
        }
        $v_1.enablePresence()
    }
};
Type.registerNamespace("LookupBehavior.Views");
LookupBehavior.Views.IPresenceView = function() {};
LookupBehavior.Views.IPresenceView.registerInterface("LookupBehavior.Views.IPresenceView");
LookupBehavior.Views.PresenceView = function() {
    this.$$d_$3D_0 = Function.createDelegate(this, this.$3D_0);
    this.$$d_$4Q_0 = Function.createDelegate(this, this.$4Q_0);
    this.$$d_$4E_0 = Function.createDelegate(this, this.$4E_0)
};
LookupBehavior.Views.PresenceView.prototype = {
    $11_0: null,
    $16_0: null,
    $N_0: null,
    $M_0: null,
    $B_0: null,
    $V_0: null,
    $3_0: null,
    $1Y_0: null,
    $y_0: null,
    $1N_0: false,
    get_state: function() { return this.$1Y_0 },
    set_state: function(value) {
        this.$1Y_0 = value;
        return value
    },
    get_chromeElement: function() { return this.$V_0 },
    set_chromeElement: function(value) {
        this.$V_0 = value;
        return value
    },
    get_elementProxy: function() { return this.$B_0 },
    set_elementProxy: function(value) {
        this.$B_0 = value;
        return value
    },
    get_crmEncodeDecodeProxy: function() {
        if (IsNull(this.$y_0)) this.$y_0 = new Mscrm.Proxies.CrmEncodeDecodeProxy;
        return this.$y_0
    },
    set_crmEncodeDecodeProxy: function(value) {
        this.$y_0 = value;
        return value
    },
    get_domHelperProxy: function() {
        if (IsNull(this.$11_0)) this.$11_0 = new Mscrm.Proxies.DomHelperProxy;
        return this.$11_0
    },
    set_domHelperProxy: function(value) {
        this.$11_0 = value;
        return value
    },
    get_imageStripProxy: function() {
        if (IsNull(this.$16_0)) this.$16_0 = new Mscrm.Proxies.ImageStripProxy;
        return this.$16_0
    },
    set_imageStripProxy: function(value) {
        this.$16_0 = value;
        return value
    },
    get_presenceHelperProxy: function() {
        if (IsNull(this.$N_0)) this.$N_0 = new Mscrm.Proxies.PresenceHelperProxy;
        return this.$N_0
    },
    set_presenceHelperProxy: function(value) {
        this.$N_0 = value;
        return value
    },
    get_presenceControlProxy: function() {
        if (IsNull(this.$M_0)) this.$M_0 = Mscrm.Presence.PresenceControlFactory.get_instance();
        return this.$M_0
    },
    set_presenceControlProxy: function(value) {
        this.$M_0 = value;
        return value
    },
    get_recordId: function() {
        var $v_0 = this.$B_0.getAttribute("oid");
        if (IsNull($v_0)) return "";
        $v_0 = this.get_crmEncodeDecodeProxy().crmHtmlDecode($v_0.toString());
        return $v_0.toString()
    },
    set_recordId: function(value) {
        if (IsNull(this.$B_0)) return value;
        this.$B_0.setAttribute("oid", value);
        return value
    },
    get_sipId: function() {
        var $v_0 = this.$B_0.getAttribute("sip");
        if (IsNull($v_0)) return "";
        return $v_0.toString()
    },
    set_sipId: function(value) {
        this.$B_0.setAttribute("sip", value);
        return value
    },
    get_entityTypeCode: function() {
        if (IsNull(this.$B_0)) return -1;
        var $v_0 = this.$B_0.getAttribute("otype");
        if (IsNull($v_0)) return -1;
        return this.$4V_0($v_0)
    },
    set_entityTypeCode: function(value) {
        if (IsNull(this.$B_0)) return value;
        this.$B_0.setAttribute("otype", value.toString());
        return value
    },
    $4V_0: function($p0) {
        var $v_0 = Number.parseInvariant($p0.toString());
        if (isNaN($v_0) || !isFinite($v_0)) $v_0 = -1;
        return $v_0
    },
    get_entityTypeCodeSupportsPresence: function() {
        if (IsNull(this.get_presenceHelperProxy())) return false;
        var $v_0 = this.get_entityTypeCode();
        if ($v_0 === -1) return false;
        return this.get_presenceHelperProxy().isPresenceType($v_0)
    },
    set_entityTypeCodeSupportsPresence: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_presenceEnabled: function() {
        if (IsNull(this.get_presenceControlProxy())) return false;
        return this.get_presenceControlProxy().get_presenceEnabled()
    },
    set_presenceEnabled: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    enablePresence: function() {
        this.dispose();
        if (isNullOrEmptyString(this.get_sipId()) ||
            isNullOrEmptyString(this.get_recordId()) ||
            !this.get_presenceEnabled()) return;
        this.$4f_0();
        var $v_0 = this.get_presenceControlProxy().getStatus(this.get_sipId(), this.get_recordId());
        this.$32_0($v_0);
        this.$4b_0();
        this.$4c_0();
        this.$4a_0();
        this.$1N_0 = true
    },
    $4f_0: function() {
        this.$3_0 = this.$3J_0();
        var $v_0 = this.$2W_0();
        if (IsNull($v_0)) {
            var $v_1 = this.$23_0();
            if (IsNull($v_1)) {
                var $v_2 = this.get_domHelperProxy().getFirstChild(this.$B_0);
                this.$B_0.insertBefore(this.$3_0, $v_2)
            } else this.$B_0.replaceChild(this.$3_0, $v_1)
        } else this.$B_0.replaceChild(this.$3_0, $v_0)
    },
    renderPlaceholder: function() {
        var $v_0 = this.$23_0(), $v_1 = this.$2W_0();
        if (IsNull($v_1) && IsNull($v_0) && IsNull(this.$3_0)) {
            var $v_2 = new Mscrm.Proxies.PresenceHelperProxy,
                $v_3 = $v_2.getPresenceUri(-1),
                $v_4 = this.get_imageStripProxy().getImage($v_3);
            $v_4.setAttribute("class", "ms-crm-Lookup-PresenceItem placeholder");
            this.$B_0.insertBefore($v_4, this.$B_0.get_firstChild())
        }
    },
    removePlaceholder: function() {
        var $v_0 = this.$23_0();
        !IsNull($v_0) && this.$B_0.get_element().removeChild($v_0.get_element())
    },
    dispose: function() {
        if (!this.$1N_0) return;
        if (!IsNull(this.$3_0)) {
            if (!IsNull(this.$3_0.get_element())) {
                $removeHandler(this.$3_0.get_element(), "mouseover", this.$$d_$4E_0);
                $removeHandler(this.$3_0.get_element(), "focus", this.$$d_$4E_0);
                $removeHandler(this.$3_0.get_element(), "mouseout", this.$$d_$4E_0);
                $removeHandler(this.$3_0.get_element(), "blur", this.$$d_$4E_0)
            }
            this.$3_0.set_element(null);
            this.$3_0 = null
        }
        !IsNull(this.get_presenceControlProxy()) &&
            this.get_presenceControlProxy().remove_onPresenceStatusChange(this.$$d_$4Q_0);
        !Mscrm.InternalUtilities.JSTypes.isNull(this.$V_0) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(this.$V_0.get_element()) &&
            $removeHandler(this.$V_0.get_element(), "keydown", this.$$d_$3D_0);
        this.$1N_0 = false
    },
    $4c_0: function() {
        if (IsNull(this.get_presenceControlProxy())) return;
        this.get_presenceControlProxy().add_onPresenceStatusChange(this.$$d_$4Q_0)
    },
    $4b_0: function() {
        if (IsNull(this.$3_0)) return;
        this.get_domHelperProxy().addEventHandler(this.$3_0, "mouseover", this.$$d_$4E_0);
        this.get_domHelperProxy().addEventHandler(this.$3_0, "focus", this.$$d_$4E_0);
        this.get_domHelperProxy().addEventHandler(this.$3_0, "mouseout", this.$$d_$4E_0);
        this.get_domHelperProxy().addEventHandler(this.$3_0, "blur", this.$$d_$4E_0)
    },
    $4a_0: function() {
        if (IsNull(this.$V_0)) return;
        this.get_domHelperProxy().addEventHandler(this.$V_0, "keydown", this.$$d_$3D_0)
    },
    $3D_0: function($p0) {
        if (this.$1Y_0.get_currentState() !== 1) return;
        if ($p0.altKey && $p0.shiftKey && $p0.keyCode === 121) {
            this.$2G_0(0);
            this.get_presenceControlProxy().focusContactCard()
        }
    },
    $4Q_0: function($p0, $p1) {
        if (IsNull($p0) || IsNull($p1) || $p1.get_sipId() !== this.get_sipId()) return;
        this.$32_0($p1.get_status())
    },
    $4E_0: function($p0) {
        switch ($p0.type.toLowerCase()) {
        case "mouseover":
            this.$2G_0(0);
            break;
        case "focus":
            this.$2G_0(1);
            break;
        case "mouseout":
        case "blur":
            this.$3m_0();
            break
        }
    },
    $3m_0: function() {
        if (IsNull(this.get_presenceControlProxy())) return;
        this.get_presenceControlProxy().hideContactCard()
    },
    $2G_0: function($p0) {
        if (IsNull(this.get_presenceControlProxy())) return;
        var $v_0 = this.get_presenceHelperProxy().getImageLocation(this.$3_0);
        this.get_presenceControlProxy().showContactCard(this.get_sipId(),
            $p0,
            $v_0.get_locationX(),
            $v_0.get_locationY())
    },
    $3J_0: function() {
        var $v_0 = this.get_presenceHelperProxy().getPresenceUri(18), $v_1 = this.get_imageStripProxy().getImage($v_0);
        $v_1.setAttribute("class", "ms-crm-Lookup-PresenceItem");
        $v_1.setAttribute("state", 18);
        return $v_1
    },
    $32_0: function($p0) {
        if (IsNull(this.$3_0) || IsNull(this.$3_0.get_element())) return;
        var $v_0 = this.$3_0.getAttribute("state");
        if (IsNull($v_0)) return;
        var $v_1 = Number.parseInvariant($v_0.toString());
        if (isNaN($v_1) || $p0.get_status() === $v_1) return;
        var $v_2 = this.get_presenceHelperProxy().getPresenceUri($p0.get_status());
        this.$3_0.setAttribute("class", "ms-crm-Lookup-PresenceItem");
        this.$3_0.setAttribute("imageSrc", $v_2.toString());
        this.$3_0.setAttribute("src", $v_2.toString());
        this.$3_0.setAttribute("state", $p0.get_status().toString());
        this.$3_0.setAttribute("sipuri", this.get_sipId());
        this.$3_0.setAttribute("alt", $p0.get_description());
        this.$3_0.setAttribute("title", $p0.get_description())
    },
    $23_0: function() {
        var $v_0 = this.$B_0.querySelector(".ms-crm-Lookup-PresenceItem");
        return $v_0
    },
    $2W_0: function() { return this.$B_0.querySelector("img.ms-crm-Lookup-Item") }
};
Mscrm.FormInputControl.LookupUIBehaviorProxy.registerClass("Mscrm.FormInputControl.LookupUIBehaviorProxy",
    null,
    Mscrm.FormInputControl.ILookupUIBehaviorProxy);
Mscrm.FormInputControl.LookupUIBehavior.registerClass("Mscrm.FormInputControl.LookupUIBehavior",
    Mscrm.FormControlInputBehavior,
    Mscrm.ILookupUIBehavior,
    Mscrm.ICrmUIFormDataComponent);
Mscrm.FormInputControl.PresenceLookupUIBehavior
    .registerClass("Mscrm.FormInputControl.PresenceLookupUIBehavior",
        Mscrm.FormInputControl.LookupUIBehavior,
        Mscrm.FormInputControl.IPresenceLookupBehavior);
Mscrm.FormInputControl.ImageLookupParty.registerClass("Mscrm.FormInputControl.ImageLookupParty",
    Mscrm.FormInputControl.PresenceLookupUIBehavior);
Mscrm.FormInputControl.ImageLookupTransactionCurrency
    .registerClass("Mscrm.FormInputControl.ImageLookupTransactionCurrency",
        Mscrm.FormInputControl.PresenceLookupUIBehavior);
Mscrm.FormInputControl.FilterRelationshipData.registerClass("Mscrm.FormInputControl.FilterRelationshipData");
Mscrm.FormInputControl.LookupItemData.registerClass("Mscrm.FormInputControl.LookupItemData");
Mscrm.FormInputControl.ShowDialogEventArgs.registerClass("Mscrm.FormInputControl.ShowDialogEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.GenerateDataXmlEventArgs
    .registerClass("Mscrm.FormInputControl.GenerateDataXmlEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.ResultEventArgs.registerClass("Mscrm.FormInputControl.ResultEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.LookupTypeIcon.registerClass("Mscrm.FormInputControl.LookupTypeIcon");
Mscrm.FormInputControl.TouchLookupMatchesBar.registerClass("Mscrm.FormInputControl.TouchLookupMatchesBar",
    Sys.Component);
Mscrm.FormInputControl.TableLookupUIControl.registerClass("Mscrm.FormInputControl.TableLookupUIControl",
    Mscrm.CrmUIControl);
Mscrm.FormInputControl.MockLookupUIBehaviorProxy
    .registerClass("Mscrm.FormInputControl.MockLookupUIBehaviorProxy",
        null,
        Mscrm.FormInputControl.ILookupUIBehaviorProxy,
        Mscrm.FormInputControl.IMockLookupUIBehaviorProxy);
LookupBehavior.Services.PresenceService.registerClass("LookupBehavior.Services.PresenceService",
    null,
    LookupBehavior.Services.IPresenceService);
LookupBehavior.Views.PresenceView.registerClass("LookupBehavior.Views.PresenceView",
    null,
    LookupBehavior.Views.IPresenceView,
    Sys.IDisposable);
Mscrm.FormInputControl.LookupUIBehavior.selectionClass = "ms-crm-selected-Lookup-Item";
Mscrm.FormInputControl.LookupUIBehavior.unresolvedLookupItemClass = "ms-crm-Inline-MultiLookupItem-Unresolved";
Mscrm.FormInputControl.LookupUIBehavior.multiLookupStyle = "multi";
Mscrm.FormInputControl.LookupUIBehavior.singleLookupStyle = "single";
Mscrm.FormInputControl.LookupUIBehavior.subjectLookupStyle = "subject";
Mscrm.FormInputControl.LookupUIBehavior.disableAttribute = "lookupdisabled"