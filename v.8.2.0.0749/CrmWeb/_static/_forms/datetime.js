Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.IDateControl = function() {};
Mscrm.FormInputControl.IDateControl.registerInterface("Mscrm.FormInputControl.IDateControl");
Mscrm.FormInputControl.ITimeControl = function() {};
Mscrm.FormInputControl.ITimeControl.registerInterface("Mscrm.FormInputControl.ITimeControl");
Mscrm.FormInputControl.IDateTimeControl = function() {};
Mscrm.FormInputControl.IDateTimeControl.registerInterface("Mscrm.FormInputControl.IDateTimeControl");
Mscrm.FormInputControl.DateTimeBehaviorBase = function(element) {
    this.$$d_onSelectValidate = Function.createDelegate(this, this.onSelectValidate);
    this.$$d_parseTimeInput = Function.createDelegate(this, this.parseTimeInput);
    this.$$d_parseDateInput = Function.createDelegate(this, this.parseDateInput);
    this.$$d_$o_4 = Function.createDelegate(this, this.$o_4);
    Mscrm.FormInputControl.DateTimeBehaviorBase.initializeBase(this, [element]);
    this._timeControl = null;
    this._dateControl = null;
    this.$L_4 = true;
    this.$3_4 = "";
    this.$C_4 = true;
    this.$F_4 = true;
    this.$H_4 = false;
    this.$6_4 = false;
    this.$4_4 = null;
    this.$A_4 = false;
    this.$M_4 = false;
    this._noValidationAlert = false;
    this.$7_4 = true;
    this.$I_4 = true
};
Mscrm.FormInputControl.DateTimeBehaviorBase.registerDateTimeComponents = function(field, events) {
    var $v_0 = field.getElementsByTagName("table");
    if ($v_0.length > 0) {
        var $v_1 = $v_0[0];
        if (isNullOrEmptyString($v_1.id)) $v_1.id = field.id + "_dateTimeControl";
        var $v_2 = null, $v_3 = $v_1.getElementsByTagName("img");
        if ($v_3.length > 0 && !IsNull(XUI.Html.DomUtils.GetNextSibling($v_3[0]))) {
            $v_2 = $v_3[0];
            $v_2.id = field.id + "img";
            XUI.Html.DomUtils.GetNextSibling($v_2).id = field.id + "CalContainer"
        }
        var $v_4 = {};
        $v_4["dateTimeControlId"] = $v_1.id;
        var $v_5 = $v_1.getAttribute("format");
        if ($v_5 === "datetime" || $v_5 === "time") {
            var $v_6 = $v_1.getElementsByTagName("span");
            if ($v_6.length > 0) {
                $v_6[0].id = $v_1.id + "Time";
                $create(Mscrm.EditableSelectControl, null, null, null, $v_6[0])
            }
        }
        $create(Mscrm.FormInputControl.DateTimeBehavior, null, events, null, $v_1);
        !IsNull($v_2) && $create(Mscrm.FormInputControl.DateTimeImage, $v_4, null, null, $v_2)
    }
};
Mscrm.FormInputControl.DateTimeBehaviorBase.disposeDateTimeComponents = function(field) {
    var $v_0 = field.getElementsByTagName("table");
    if ($v_0.length > 0) {
        var $v_1 = $v_0[0], $v_2 = null, $v_3 = $v_1.getElementsByTagName("img");
        if ($v_3.length > 0) $v_2 = $v_3[0];
        if (!IsNull($v_2)) {
            var $v_6 = Mscrm.CrmUIBehavior.getBehaviorByName($v_2, "DateTimeImage");
            !IsNull($v_6) && $v_6.dispose()
        }
        var $v_4 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_1);
        !IsNull($v_4) && $v_4.dispose();
        var $v_5 = $v_1.getElementsByTagName("span");
        if ($v_5.length > 0) {
            var $v_7 = $find($v_5[0].id);
            !IsNull($v_7) && $v_7.dispose()
        }
    }
};
Mscrm.FormInputControl.DateTimeBehaviorBase.prototype = {
    _timeControl: null,
    _dateControl: null,
    $L_4: false,
    $3_4: null,
    $C_4: false,
    $F_4: false,
    $H_4: false,
    $6_4: false,
    $0_4: null,
    $4_4: null,
    $A_4: false,
    $M_4: false,
    $8_4: false,
    $a_4: null,
    _noValidationAlert: false,
    $7_4: false,
    $I_4: false,
    get_initialized: function() { return this.$A_4 },
    set_initialized: function(value) {
        this.$A_4 = value;
        return value
    },
    get_value: function() { return this.$0_4 },
    get_format: function() { return this.$3_4 },
    add_change: function(value) { this.get_events().addHandler("OnChangeEvent", value) },
    remove_change: function(value) { this.get_events().removeHandler("OnChangeEvent", value) },
    add_initComplete: function(value) { this.get_events().addHandler("InitCompleteEvent", value) },
    remove_initComplete: function(value) { this.get_events().removeHandler("InitCompleteEvent", value) },
    add_focus: function(value) { this.get_events().addHandler("FocusEvent", value) },
    remove_focus: function(value) { this.get_events().removeHandler("FocusEvent", value) },
    add_propertyChangedEvent: function(value) { this.get_events().addHandler("PropertyChangedEvent", value) },
    remove_propertyChangedEvent: function(value) { this.get_events().removeHandler("PropertyChangedEvent", value) },
    get_showTime: function() {
        if (this.$3_4 === "time") return true;
        if (this.$3_4 === "datetime" && this.$C_4) return true;
        return false
    },
    set_showTime: function(value) {
        this.setShowTime(value);
        return value
    },
    get_allowTimeEdit: function() { return this.$F_4 },
    set_allowTimeEdit: function(value) {
        this.$u_4(value);
        return value
    },
    get_initDisable: function() { return this.$H_4 },
    set_initDisable: function(value) {
        this.$H_4 = value;
        return value
    },
    get_allDayDisplay: function() { return this.$6_4 },
    set_allDayDisplay: function(value) {
        this.$6_4 = value;
        this.$D_4(this.$0_4);
        return value
    },
    get_isDirty: function() { return !this.$Y_4(this.$0_4, this.$4_4) || !this.$Z_4(this.$0_4, this.$4_4) },
    fireOnChange: function() { this.raiseEvent("OnChangeEvent") },
    setDisplay: function(visibility) {
        var $v_0 = visibility ? "" : "none";
        if (!IsNull(this.get_element())) this.get_element().style.display = $v_0
    },
    get_dataXml: function() {
        var $v_0 = "";
        if (!IsNull(this.$0_4)) $v_0 = FormatUtcDate(new Date(this.$0_4.getTime()));
        return String.format("<{0}>{1}</{0}>", this.get_element().id, $v_0)
    },
    get_dataValue: function() { return IsNull(this.$0_4) || isNaN(this.$0_4) ? null : new Date(this.$0_4.getTime()) },
    set_dataValue: function(value) {
        this.$d_4(value);
        return value
    },
    get_dataValueAsDate: function() { return this.get_dataValue() },
    set_dataValueAsDate: function(value) {
        this.set_dataValue(value);
        return value
    },
    get_prevDataValue: function() { return this.$a_4 },
    set_prevDataValue: function(value) {
        this.$a_4 = value;
        return value
    },
    get_disabled: function() {
        if (IsNull(this.get_element().getAttribute("contentEditable")))
            if (IsNull(this.get_element().disabled)) return false;
            else return this.get_element().disabled.toString() === "true";
        else return this.get_element().getAttribute("contentEditable").toString() === "false"
    },
    set_disabled: function(value) {
        this.setDisabled(value);
        return value
    },
    get_innerText: function() {
        var $v_0 = "";
        switch (this.$3_4) {
        case "datetime":
            if (this.$C_4) {
                $v_0 = this._dateControl.get_value() + " " + this._timeControl.get_returnValueProperty();
                break
            }
            $v_0 = this._dateControl.get_value();
            break;
        case "date":
            $v_0 = this._dateControl.get_value();
            break;
        case "time":
            $v_0 = this._timeControl.get_returnValueProperty();
            break
        }
        return $v_0
    },
    get_willSubmit: function() { return this.$8_4 },
    set_willSubmit: function(value) {
        this.$8_4 = value;
        return value
    },
    setFocus: function() { this.onSetFocus(null, null) },
    get_isDateValid: function() { return this.$7_4 },
    get_isTimeValid: function() { return this.$I_4 },
    get_noValidationAlert: function() { return this._noValidationAlert },
    set_noValidationAlert: function(value) {
        this.setNoValidationAlert(value);
        return value
    },
    get_initialValue: function() { return this.$4_4 },
    set_initialValue: function(value) {
        this.$0_4 = value;
        this.$4_4 = value;
        return value
    },
    initialize: function() {
        this.add_focus(this.$$d_$o_4);
        this.$H_4 = this.$J_4("initialDisableInit");
        if (!this.$H_4) {
            this.$8_4 = true;
            this.$3_4 = this.get_element().getAttribute("format");
            this.createControls();
            var $v_0 = this.get_element().getAttribute("initialValue");
            if (!isNullOrEmptyString($v_0)) {
                this.$0_4 = ParseUtcDate($v_0);
                this.$4_4 = ParseUtcDate($v_0)
            }
            this.subscribeToControlEvents();
            this.$C_4 = this.$J_4("initialShowTime");
            this.$F_4 = this.$J_4("initialAllowTimeEdit");
            this.$L_4 = this.$J_4("initialAllowBlankDate");
            this.$6_4 = this.$J_4("initialAllDayDisplayMode");
            this.$M_4 = this.$J_4("cacheValuesOnClient");
            this.$A_4 = true;
            var $v_1 = this.get_element().getAttribute("cachedDataValue");
            if (this.$M_4 && !isNullOrEmptyString($v_1)) {
                var $v_2 = Date.parse($v_1);
                if (!isNaN($v_2)) {
                    var $v_3 = new Date($v_2);
                    this.$d_4($v_3);
                    this.$0_4 = $v_3;
                    this.$4_4 = $v_3
                }
            }
            if (!this.$p_4()) {
                var $v_4 = this.$0_4;
                this.$0_4 = null;
                if ($v_4 === "null") $v_4 = null;
                this.$d_4($v_4)
            }
            this.raiseEvent("InitCompleteEvent")
        }
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this)
    },
    get_isDataSlugSupported: function() { return true },
    $o_4: function($p0) {
        var $v_0 = new Mscrm.FormatArguments;
        $v_0.type = $p0.type;
        this.onSetFocus($p0.target, $v_0)
    },
    $J_4: function($p0) {
        var $v_0 = this.get_element().getAttribute($p0);
        return !IsNull($v_0) && Mscrm.Utilities.parseBoolean($v_0.toString())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.remove_focus(this.$$d_$o_4);
        try {
            this.unsubscribeFromControlEvents()
        } catch ($$e_0) {
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    resetDefault: function() {
        if (!IsNull(this.$0_4)) {
            this.$4_4 = new Date(this.$0_4);
            this.$D_4(this.$0_4);
            this.$K_4(this.$0_4)
        }
    },
    updateControlValue: function(newValue) {
        this.$0_4 = IsNull(newValue) ? null : new Date(newValue);
        this.$D_4(this.$0_4);
        this.$K_4(this.$0_4)
    },
    onChange: function() {
        this.handleDataValueChangedEvent();
        this.raiseEvent("OnChangeEvent")
    },
    refreshTimeValue: function() { !IsNull(this._timeControl) && this.$c_4("ReturnValue") },
    handleInvalidDateInput: function(eventObject) {
        this.$D_4(this.$0_4);
        !IsNull(eventObject) && eventObject.type === "blur" && eventObject.preventDefault();
        this._dateControl.focus()
    },
    handleInvalidTimeInput: function(formatArgs) { formatArgs.returnValue = false },
    raiseEvent: function(eventId) {
        var $v_0 = eventId;
        switch (eventId) {
        case "OnChangeEvent":
            $v_0 = "change";
            break;
        case "FocusEvent":
            $v_0 = "focus";
            break
        }
        var $v_1 = XUI.Html.CreateDomEvent($v_0), $v_2 = this.get_events().getHandler(eventId);
        if (!IsNull($v_2)) {
            var $v_3 = new Sys.UI.DomEvent($v_1);
            $v_3.target = this.get_element();
            $v_2($v_3)
        }
    },
    $p_4: function() {
        if (IsNull(this.$0_4)) return false;
        var $v_0 = this.get_innerText(), $v_1 = Date.parse($v_0);
        if (isNaN($v_1)) return false;
        if (this.$6_4) $v_0 += 8.64e7;
        var $v_2 = new Date($v_0);
        if (!IsNull(this._dateControl) && !this.$Y_4($v_2, this.$0_4)) return false;
        if (!IsNull(this._timeControl) && !this.$Z_4($v_2, this.$0_4)) return false;
        return true
    },
    setShowTime: function(visible) {
        if (this.$3_4 === "datetime" && visible !== this.$C_4) {
            this._timeControl.setDisplay(visible);
            this.$C_4 = visible;
            this.$c_4("showTimeProperty")
        }
    },
    setNoValidationAlert: function(value) { this._noValidationAlert = value },
    $E_4: function($p0) {
        this.$0_4 = $p0;
        if (this.$M_4) {
            var $v_0 = window.document.createAttribute("cachedDataValue");
            $v_0.value = this.$0_4;
            this.get_element().attributes.setNamedItem($v_0)
        }
    },
    $d_4: function($p0) {
        if (!isNaN($p0) && !IsNull($p0)) $p0 = new Date($p0.valueOf());
        else $p0 = null;
        if (!this.$A_4) {
            this.$E_4($p0);
            return
        }
        if (this.$7_4 && this.$Y_4($p0, this.$0_4) && this.$Z_4($p0, this.$0_4)) return;
        if (this.$Q_4($p0) && (this.$3_4 === "time" || !this.$L_4)) return;
        !IsNull(this._dateControl) && this.$D_4($p0);
        if (!IsNull(this._timeControl)) {
            this.$K_4($p0);
            if (IsNull($p0)) this._timeControl.disable();
            else !this.get_disabled() && this._timeControl.enable()
        }
        this.$E_4($p0);
        this.handleDataValueChangedEvent()
    },
    $D_4: function($p0) {
        if (IsNull(this._dateControl)) return;
        if (!this.$Q_4($p0))
            this._dateControl.set_value(Mscrm.DateTimeUtility
                .formatDate(!this.$6_4 ? $p0 : decrementDayAcrossTimeZones($p0)));
        else this._dateControl.set_value("")
    },
    $K_4: function($p0) {
        if (IsNull(this._timeControl)) return;
        this.$I_4 = true;
        if (this.$Q_4($p0)) this._timeControl.setValue("", null, true);
        else {
            var $v_0 = timeToString($p0, 0);
            this._timeControl.setValue($v_0, null, true)
        }
    },
    $x_4: function($p0) {
        if (this.$6_4) $p0 = incrementDayAcrossTimeZones($p0);
        if (IsNull(this.$0_4)) this.$E_4($p0);
        else
            this.$E_4(new Date($p0.getFullYear(),
                $p0.getMonth(),
                $p0.getDate(),
                this.$0_4.getHours(),
                this.$0_4.getMinutes(),
                this.$0_4.getSeconds(),
                this.$0_4.getMilliseconds()))
    },
    $y_4: function($p0) { this.$i_4($p0.getHours(), $p0.getMinutes(), $p0.getSeconds(), $p0.getMilliseconds()) },
    $z_4: function() { this.$i_4(0, 0, 0, 0) },
    $i_4: function($p0, $p1, $p2, $p3) {
        if (!IsNull(this.$0_4)) {
            this.$E_4(new Date(this.$0_4.getFullYear(), this.$0_4.getMonth(), this.$0_4.getDate(), $p0, $p1, $p2, $p3));
            if (!$p0 && !$p1 && !$p2 && !$p3) this.$0_4 = this.$e_4(this.$0_4);
            ($p0 !== this.$0_4.getHours() || $p1 !== this.$0_4.getMinutes()) && this.$K_4(this.$0_4)
        } else this.$3_4 === "time" && this.$E_4($get("dtNewTime"))
    },
    $e_4: function($p0) {
        var $v_0 = $p0.getHours(),
            $v_1 = new Date($p0.getFullYear(),
                $p0.getMonth(),
                $p0.getDate(),
                $p0.getHours(),
                $p0.getMinutes(),
                $p0.getSeconds());
        if (!$v_0) return $p0;
        $v_0 > 12 && $v_0 <= 23 && $v_1.setDate($v_1.getDate() + 1);
        for (var $v_2, $v_4, $v_5 = 0, $v_3 = 0; $v_3 < 3; $v_3++) {
            switch ($v_3) {
            case 0:
                $v_5 = 25;
                break;
            case 1:
            case 2:
                $v_5 = 61;
                break
            }
            for ($v_4 = 0; $v_4 < $v_5; $v_4++) {
                $v_2 = new Date($v_1.getFullYear(),
                    $v_1.getMonth(),
                    $v_1.getDate(),
                    !$v_3 ? $v_1.getHours() - 1 : $v_1.getHours(),
                    $v_3 === 1 ? $v_1.getMinutes() - 1 : $v_1.getMinutes(),
                    $v_3 === 2 ? $v_1.getSeconds() - 1 : $v_1.getSeconds());
                if ($v_2.getDate() === $v_1.getDate()) $v_1 = $v_2;
                else $v_4 = $v_5
            }
        }
        return $v_1
    },
    $Y_4: function($p0, $p1) {
        var $v_0 = this.$Q_4($p0), $v_1 = this.$Q_4($p1);
        if ($v_0 && $v_1) return true;
        if ($v_0 && !$v_1 ||
            !$v_0 && $v_1 ||
            $p0.getFullYear() !== $p1.getFullYear() ||
            $p0.getMonth() !== $p1.getMonth() ||
            $p0.getDate() !== $p1.getDate()) return false;
        return true
    },
    $Q_4: function($p0) { return isNaN($p0) || IsNull($p0) },
    $Z_4: function($p0, $p1) {
        if (IsNull($p0) && IsNull($p1)) return true;
        if (IsNull($p0) && !IsNull($p1) ||
            !IsNull($p0) && IsNull($p1) ||
            $p0.getHours() !== $p1.getHours() ||
            $p0.getMinutes() !== $p1.getMinutes() ||
            $p0.getSeconds() !== $p1.getSeconds() ||
            $p0.getMilliseconds() !== $p1.getMilliseconds()) return false;
        return true
    },
    validateDate: function() { this.parseDateInput(null) },
    parseDateInput: function(eventObject) {
        if (this.get_disabled() || IsNull(this._dateControl)) return;
        this._dateControl.set_value(Mscrm.Utilities.trim(this._dateControl.get_value(), null));
        var $v_0 = this._dateControl.get_value();
        if (!IsNull(this.$0_4)) {
            var $v_1 = this.$6_4
                ? Mscrm.DateTimeUtility.formatDate(decrementDayAcrossTimeZones(this.$0_4))
                : Mscrm.DateTimeUtility.formatDate(this.$0_4);
            if ($v_1 === $v_0) {
                this.$7_4 = true;
                return
            }
        }
        if (!$v_0.length)
            if (this.$L_4) {
                this.$7_4 = true;
                if (!IsNull(this.$0_4)) {
                    if (!IsNull(this._timeControl)) {
                        this.$K_4(null);
                        this._timeControl.disable()
                    }
                    this.$E_4(null);
                    this.fireOnChange()
                }
            } else {
                this.setValidationFailedAttribute();
                alert(window.LOCID_DTM_BLANK_DATE_ERROR);
                this.$D_4(this.$0_4);
                !IsNull(eventObject) && eventObject.type === "blur" && eventObject.preventDefault();
                this._dateControl.focus()
            }
        else {
            var $v_2 = Mscrm.DateTimeUtility.parseDate($v_0,
                this._noValidationAlert,
                this._dateControl.get_elementForValidation());
            if (!IsNull($v_2)) {
                this.$7_4 = true;
                $v_2 = this.$e_4($v_2);
                if (!this.$Y_4($v_2, this.$0_4) || this.$6_4) {
                    var $v_3 = IsNull(this.$0_4);
                    this.$x_4($v_2);
                    this.$D_4(this.$0_4);
                    if (IsNull(this._timeControl)) this.$z_4();
                    else if ($v_3) {
                        this._timeControl.enable();
                        $v_2.setHours(8);
                        this.$K_4($v_2);
                        if (!IsNull(eventObject) && eventObject.type === "blur") {
                            eventObject.preventDefault();
                            this._timeControl.setFocus()
                        }
                    }
                    this.fireOnChange()
                }
            } else {
                this.$7_4 = false;
                this.handleInvalidDateInput(eventObject)
            }
        }
    },
    parseTimeInput: function(sender, args) {
        var $v_0 = args;
        if ($v_0.type === "validate") return OnSelectValidate(sender, args);
        if (this.get_disabled() || IsNull(this._timeControl)) return;
        var $v_1 = parseTime($v_0.inputValue, 0);
        this.$I_4 = !isNaN($v_1.getTime());
        if (this.$I_4 && !this.$Z_4($v_1, this.$0_4)) {
            this.$y_4($v_1);
            this.fireOnChange()
        }
    },
    onSelectValidate: function(sender, args) {
        var $v_0 = args;
        if ($v_0.type === "returnvaluechange") {
            this.parseTimeInput(sender, args);
            return
        }
        var $v_1 = Mscrm.Utilities.trim($v_0.inputValue, null), $v_2 = parseTime($v_1, 0);
        if (isNaN($v_2.getTime())) {
            this.setValidationFailedAttribute();
            !this._noValidationAlert && alert(window.LOCID_DTM_BLANK_TIME_ERROR);
            this.handleInvalidTimeInput($v_0)
        } else $v_0.formattedValue = timeToString($v_2, 0)
    },
    $u_4: function($p0) {
        if (!IsNull(this._timeControl) && $p0 !== this.$F_4) {
            this._timeControl.set_allowValueEditProperty($p0);
            this.$F_4 = $p0;
            this.$c_4("allowTimeEditProperty")
        }
    },
    $c_4: function($p0) {
        var $v_0 = this.get_events().getHandler("PropertyChangedEvent");
        !IsNull($v_0) && $v_0(this, new Sys.PropertyChangedEventArgs($p0))
    }
};
Mscrm.FormInputControl.DateControlWrapper = function(control) { this.$1_0 = control };
Mscrm.FormInputControl.DateControlWrapper.prototype = {
    $1_0: null,
    get_value: function() { return this.$1_0.value },
    set_value: function(value) {
        this.$1_0.value = value;
        return value
    },
    get_element: function() { return this.$1_0 },
    get_elementForValidation: function() { return this.$1_0 },
    get_form: function() { return this.$1_0.form },
    focus: function() { this.$1_0.focus() },
    select: function() { this.$1_0.select() },
    setAttribute: function(attribute, value) { this.$1_0.setAttribute(attribute, value) }
};
Mscrm.FormInputControl.DateScrollerControlWrapper = function(control) { this.$1_0 = control };
Mscrm.FormInputControl.DateScrollerControlWrapper.prototype = {
    $1_0: null,
    get_value: function() { return this.$1_0.getDate() },
    set_value: function(value) {
        this.$1_0.setDate(value);
        return value
    },
    get_element: function() { return null },
    get_elementForValidation: function() { return null },
    get_form: function() { return null },
    focus: function() {},
    select: function() {},
    setAttribute: function(attribute, value) {}
};
Mscrm.FormInputControl.TimeControlWrapper = function(control) { this.$1_0 = control };
Mscrm.FormInputControl.TimeControlWrapper.prototype = {
    $1_0: null,
    get_returnValueProperty: function() { return this.$1_0.get_returnValueProperty() },
    get_element: function() { return this.$1_0.get_element() },
    get_allowKeyDownPropagation: function() { return this.$1_0.get_allowKeyDownPropagation() },
    set_allowKeyDownPropagation: function(value) {
        this.$1_0.set_allowKeyDownPropagation(value);
        return value
    },
    add_onValueChanged: function(value) { this.$1_0.add_returnValueChange(value) },
    remove_onValueChanged: function(value) { this.$1_0.remove_returnValueChange(value) },
    add_onValidate: function(value) { this.$1_0.add_validate(value) },
    remove_onValidate: function(value) { this.$1_0.remove_validate(value) },
    add_onFindNextSmallestEntry: function(value) { this.$1_0.add_findNextSmallestEntry(value) },
    remove_onFindNextSmallestEntry: function(value) { this.$1_0.remove_findNextSmallestEntry(value) },
    add_onControlFocus: function(value) { this.$1_0.add_controlFocus(value) },
    remove_onControlFocus: function(value) { this.$1_0.remove_controlFocus(value) },
    get_allowValueEditProperty: function() { return this.$1_0.get_allowValueEditProperty() },
    set_allowValueEditProperty: function(value) {
        this.$1_0.set_allowValueEditProperty(value);
        return value
    },
    markAsTimeControl: function() { this.$1_0.markAsTimeControl() },
    enable: function() { this.$1_0.enable() },
    disable: function() { this.$1_0.disable() },
    setValue: function(value, returnValue, doNotFire) { this.$1_0.setValue(value, returnValue, doNotFire) },
    setFocus: function() { this.$1_0.setFocus() },
    setDisplay: function(visible) { this.$1_0.get_element().style.display = visible ? "inline" : "none" }
};
Mscrm.FormInputControl.TimeScrollerControlWrapper = function(control) { this.$1_0 = control };
Mscrm.FormInputControl.TimeScrollerControlWrapper.prototype = {
    $1_0: null,
    get_returnValueProperty: function() { return timeToString(this.$1_0.get_date(), 0) },
    get_element: function() { return null },
    get_allowKeyDownPropagation: function() { return false },
    set_allowKeyDownPropagation: function(value) { return value },
    add_onValueChanged: function(value) {},
    remove_onValueChanged: function(value) {},
    add_onValidate: function(value) {},
    remove_onValidate: function(value) {},
    add_onFindNextSmallestEntry: function(value) {},
    remove_onFindNextSmallestEntry: function(value) {},
    add_onControlFocus: function(value) {},
    remove_onControlFocus: function(value) {},
    get_allowValueEditProperty: function() { return this.$1_0.get_isTimeEditable() },
    set_allowValueEditProperty: function(value) {
        this.$1_0.set_isTimeEditable(value);
        return value
    },
    markAsTimeControl: function() {},
    enable: function() { this.$1_0.set_isTimeEditable(true) },
    disable: function() { this.$1_0.set_isTimeEditable(false) },
    setValue: function(value, returnValue, doNotFire) { this.$1_0.setTime(value) },
    setFocus: function() {},
    setDisplay: function(visible) { this.$1_0.set_showTime(visible) }
};
Mscrm.FormInputControl.DateTimeBehavior = function(element) {
    this.$$d_$g_5 = Function.createDelegate(this, this.$g_5);
    this.$$d_$h_5 = Function.createDelegate(this, this.$h_5);
    this.$$d_$l_5 = Function.createDelegate(this, this.$l_5);
    this.$$d_$k_5 = Function.createDelegate(this, this.$k_5);
    Mscrm.FormInputControl.DateTimeBehavior.initializeBase(this, [element])
};
Mscrm.FormInputControl.DateTimeBehavior
    .registerDateTimeComponents = function(field, events) {
        Mscrm.FormInputControl.DateTimeBehaviorBase.registerDateTimeComponents(field, events)
    };
Mscrm.FormInputControl.DateTimeBehavior.prototype = {
    get_timeControl: function() { return this._timeControl },
    createControls: function() {
        if (this.$3_4 === "date" || this.$3_4 === "datetime") {
            var $v_0 = $get("DateInput", this.get_element());
            this._dateControl = new Mscrm.FormInputControl.DateControlWrapper($v_0)
        }
        if (this.$3_4 === "datetime" || this.$3_4 === "time") {
            var $v_1 = $find(this.get_element().id + "Time");
            this._timeControl = new Mscrm.FormInputControl.TimeControlWrapper($v_1)
        }
        this.$3_4 !== "time" && !IsNull(this._timeControl) && this._timeControl.markAsTimeControl()
    },
    subscribeToControlEvents: function() {
        if (!IsNull(this._dateControl)) {
            $addHandler(this._dateControl.get_element(), "blur", this.$$d_parseDateInput);
            $addHandler(this._dateControl.get_element(), "change", this.$$d_parseDateInput);
            $addHandler(this._dateControl.get_element(), "focus", this.$$d_$k_5);
            $addHandler(this._dateControl.get_element(), "keydown", this.$$d_$l_5)
        }
        if (!IsNull(this._timeControl)) {
            this._timeControl.add_onValueChanged(this.$$d_parseTimeInput);
            this._timeControl.add_onValidate(this.$$d_onSelectValidate);
            this._timeControl.add_onFindNextSmallestEntry(this.$$d_$h_5)
        }
    },
    unsubscribeFromControlEvents: function() {
        if (!IsNull(this._dateControl)) {
            $removeHandler(this._dateControl.get_element(), "blur", this.$$d_parseDateInput);
            $removeHandler(this._dateControl.get_element(), "change", this.$$d_parseDateInput);
            $removeHandler(this._dateControl.get_element(), "focus", this.$$d_$k_5);
            $removeHandler(this._dateControl.get_element(), "keydown", this.$$d_$l_5)
        }
        if (!IsNull(this._timeControl))
            try {
                this._timeControl.remove_onValueChanged(this.$$d_parseTimeInput);
                this._timeControl.remove_onValidate(this.$$d_onSelectValidate);
                this._timeControl.remove_onFindNextSmallestEntry(this.$$d_$h_5);
                this._timeControl.remove_onControlFocus(this.$$d_$g_5)
            } catch ($$e_0) {
            }
    },
    setValidationFailedAttribute: function() {
        if (!IsNull(this._dateControl)) {
            this._dateControl.setAttribute("ValidationFailed", true);
            var $v_0 = this._dateControl.get_element(), $$t_1 = this;
            window.setTimeout(function() { $v_0.removeAttribute("ValidationFailed") }, 50)
        }
    },
    setDisabled: function(disable) {
        if (this.get_element().disabled !== disable) {
            var $v_0 = this.$f_5();
            $v_0.setAttribute("contentEditable", "false");
            if (!IsNull(this._dateControl)) {
                this._dateControl.setAttribute("contentEditable", disable ? "false" : "true");
                this._dateControl.get_element().className = disable ? "ms-crm-ReadOnlyDateTime" : "ms-crm-Input";
                this._dateControl.get_element().disabled = disable;
                $v_0.src = disable ? "/_imgs/btn_dis_cal.gif" : "/_imgs/btn_off_cal.gif";
                $v_0.disabled = disable;
                $v_0.style.cursor = disable ? "default" : "pointer";
                this.get_element().disabled = disable
            }
            if (!IsNull(this._timeControl))
                if (disable) this._timeControl.disable();
                else (!IsNull(this.$0_4) || this.$3_4 === "time") && this._timeControl.enable()
        }
    },
    onSetFocus: function(sender, args) {
        if (!this.get_element().disabled && this.$A_4) {
            var $v_0 = args;
            if (!IsNull(this._dateControl)) {
                if (!(!IsNull($v_0) && $v_0.type === "focus")) {
                    if (!IsNull(this._dateControl.get_form())) {
                        var $v_1 = this._dateControl.get_form().id, $v_2 = $find($v_1);
                        !IsNull($v_2) &&
                            $v_2.get_element().className === "ms-crm-Form" &&
                            $v_2.GetTab(this.get_element(), true)
                    }
                    if (isControlVisible(this.get_element())) {
                        this._dateControl.focus();
                        this._dateControl.select()
                    }
                }
            } else this._timeControl.get_element().focus()
        }
    },
    $k_5: function($p0) {
        var $v_0 = new Mscrm.FormatArguments;
        $v_0.type = $p0.type;
        $v_0.returnValue = $p0.returnValue;
        $v_0.inputValue = $p0.inputValue;
        this.$g_5($p0.target, $v_0)
    },
    $l_5: function($p0) { $p0.keyCode === 32 && this.$s_5() },
    $s_5: function() {
        var $v_0 = this.$f_5();
        !IsNull($v_0) && $v_0.click()
    },
    $f_5: function() {
        return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetNextSibling(XUI.Html.DomUtils.GetNextSibling(this._dateControl.get_element().parentNode)))
    },
    $g_5: function($p0, $p1) {
        var $v_0 = $p1;
        if ($v_0.type === "returnvaluechange") {
            this.parseTimeInput($p0, $v_0);
            return
        }
        this.raiseEvent("FocusEvent");
        if (Mscrm.FormControlInputBehavior.isSlugSupportEnabled()) {
            var $v_1 = XUI.Html.CreateDomEvent("focus");
            XUI.Html.DispatchDomEvent(this.get_element(), $v_1)
        }
    },
    $h_5: function($p0, $p1) {
        var $v_0 = $p1;
        if ($v_0.type === "returnvaluechange") {
            this.parseTimeInput($p0, $p1);
            return
        }
        var $v_1 = $v_0.inputValue;
        if (IsNull($v_1)) $v_1 = this.get_dataValue().toString();
        var $v_2 = parseTime($v_1, 0);
        if (!$v_2.getMinutes()) $v_2.setMinutes(-30);
        else if ($v_2.getMinutes() <= 30) $v_2.setMinutes(0);
        else $v_2.setMinutes(30);
        $v_0.sEntry = timeToString($v_2, 0)
    }
};
Mscrm.FormInputControl.MocaDateTimeBehavior = function(element) {
    this.$$d_$11_5 = Function.createDelegate(this, this.$11_5);
    this.$$d_$t_5 = Function.createDelegate(this, this.$t_5);
    this.$$d_$j_5 = Function.createDelegate(this, this.$j_5);
    Mscrm.FormInputControl.MocaDateTimeBehavior.initializeBase(this, [element]);
    this.$N_5 = null;
    this.$2_5 = null
};
Mscrm.FormInputControl.MocaDateTimeBehavior.prototype = {
    $N_5: null,
    $2_5: null,
    initialize: function() {
        Mscrm.FormInputControl.DateTimeBehaviorBase.prototype.initialize.call(this);
        if (!IsNull(this.$2_5)) {
            this.$2_5.set_isTimeEditable(this.get_showTime());
            this.$2_5.set_isDisabled(this.get_disabled());
            this.$2_5.set_showTime(this.get_showTime())
        }
    },
    createControls: function() {
        this.$N_5 = this.$0_4;
        this.$2_5 = new Mscrm.DateTimeScroller($P_CRM(this.get_element()));
        this.$2_5.set_date(this.$0_4);
        this.$2_5.set_format(this.$3_4);
        this.$2_5.set_shortDatePattern(this.get_element().getAttribute("shortDatePattern"));
        this.$2_5.set_shortTimePattern(this.get_element().getAttribute("shortTimePattern"));
        if (this
            .$3_4 ===
            "date" ||
            this.$3_4 === "datetime")
            this._dateControl = new Mscrm.FormInputControl.DateScrollerControlWrapper(this.$2_5);
        if (this
            .$3_4 ===
            "datetime" ||
            this.$3_4 === "time") this._timeControl = new Mscrm.FormInputControl.TimeScrollerControlWrapper(this.$2_5);
        this.$2_5.activate()
    },
    subscribeToControlEvents: function() {
        this.$2_5.add_dateChangedEvent(this.$$d_$j_5);
        this.$2_5.add_timeChangedEvent(this.$$d_parseTimeInput);
        this.$2_5.add_undoChangesEvent(this.$$d_$t_5);
        this.$2_5.add_confirmChangesEvent(this.$$d_$11_5)
    },
    unsubscribeFromControlEvents: function() {
        this.$2_5.remove_dateChangedEvent(this.$$d_$j_5);
        this.$2_5.remove_timeChangedEvent(this.$$d_parseTimeInput);
        this.$2_5.remove_undoChangesEvent(this.$$d_$t_5);
        this.$2_5.remove_confirmChangesEvent(this.$$d_$11_5)
    },
    setDisabled: function(disable) {
        if (this.get_element().disabled !== disable) {
            this.get_element().disabled = disable;
            this.$2_5.set_isDisabled(disable)
        }
    },
    setNoValidationAlert: function(value) { this._noValidationAlert = false },
    setValidationFailedAttribute: function() {},
    onSetFocus: function(sender, args) {},
    $j_5: function($p0, $p1) { this.parseDateInput(null) },
    $t_5: function($p0, $p1) { this.updateControlValue(this.$N_5) },
    $11_5: function($p0, $p1) { this.$N_5 = this.$0_4 }
};
Mscrm.FormInputControl.DateTimeImage = function(element) {
    this.$$d_onOut = Function.createDelegate(this, this.onOut);
    this.$$d_onOver = Function.createDelegate(this, this.onOver);
    this.$$d_$q_3 = Function.createDelegate(this, this.$q_3);
    Mscrm.FormInputControl.DateTimeImage.initializeBase(this, [element])
};
Mscrm.FormInputControl.DateTimeImage.optimizeForMobile = function(dialog) {
    var $v_0 = $P_CRM("#tdToday");
    $v_0.length > 0 && $v_0.focus();
    window.setTimeout(Mscrm.FormInputControl.DateTimeImage.$10, 0)
};
Mscrm.FormInputControl.DateTimeImage.$10 = function() {
    var $v_0 = 402, $v_1 = 44, $v_2 = $P_CRM("div.ms-crm-modalDialog.ms-crm-MiniCal-Border");
    if ($v_2.length > 0) {
        var $v_3 = $P_CRM(window).width() / 2 - $v_0 / 2, $v_4 = 0;
        if ($P_CRM("body").hasClass("androidStatic"))
            $P_CRM("body div.ms-crm-Floating-Div").height($P_CRM("#crmForm").height() + $v_1);
        else {
            $v_4 += $v_1;
            $v_4 += $P_CRM(window).scrollTop()
        }
        $v_3 = $v_3 < 0 ? 0 : $v_3;
        $v_4 = $v_4 < 0 ? 0 : $v_4;
        $v_2.removeAttr("style");
        $v_2.css("left", $v_3.toString() + "px");
        $v_2.css("top", $v_4.toString() + "px")
    }
};
Mscrm.FormInputControl.DateTimeImage.prototype = {
    $T_3: null,
    $S_3: null,
    $9_3: null,
    get_$W_3: function() {
        if (IsNull(this.$S_3)) this.$S_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$T_3);
        return this.$S_3
    },
    get_dateTimeControlId: function() { return this.$T_3 },
    set_dateTimeControlId: function(value) {
        this.$T_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        $addHandler(this.get_element(), "click", this.$$d_$q_3);
        $addHandler(this.get_element(), "mouseover", this.$$d_onOver);
        $addHandler(this.get_element(), "mouseout", this.$$d_onOut);
        $addHandler(this.get_element(), "keydown", this.$$d_$q_3);
        if (this.get_element().disabled) this.get_element().style.cursor = "default"
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$9_3) && $clearHandlers(this.$9_3);
        $removeHandler(this.get_element(), "click", this.$$d_$q_3);
        $removeHandler(this.get_element(), "mouseover", this.$$d_onOver);
        $removeHandler(this.get_element(), "mouseout", this.$$d_onOut);
        $removeHandler(this.get_element(), "keydown", this.$$d_$q_3);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $q_3: function($p0) {
        if (!this.get_$W_3().get_disabled()) {
            if ($p0.type === "keydown" && $p0.keyCode !== 13) return;
            this.$9_3 = XUI.Xml.DomUtils.GetFirstChild(XUI.Xml.DomUtils
                .GetPrevSibling(XUI.Xml.DomUtils.GetPrevSibling(this.get_element().parentNode)));
            !Mscrm.Utilities.isMobileRefresh() && this.$9_3.focus();
            var $v_0 = this.get_$W_3().get_dataValue();
            if (IsNull($v_0)) $v_0 = Mscrm.DateTimeUtility.localDateTimeNow();
            var $v_1 = !IsNull(window.USER_DATE_FORMATSTRING)
                    ? window.USER_DATE_FORMATSTRING
                    : window.parent.USER_DATE_FORMATSTRING,
                $v_2 = !IsNull(window.parent.USER_DATE_SEPARATOR)
                    ? window.USER_DATE_SEPARATOR
                    : window.parent.USER_DATE_SEPARATOR,
                $v_3 = !IsNull(window.parent.ORG_DATE_START_DAY)
                    ? window.ORG_DATE_START_DAY
                    : window.parent.ORG_DATE_START_DAY,
                $v_4 = null;
            InitCalendar($v_1, $v_2, $v_3, $v_4, $v_4);
            if (!Mscrm.Utilities.isMobileRefresh())
                LaunchCalendar(XUI.Html.DomUtils.GetNextSibling(this.get_element()),
                    this.$9_3,
                    $v_0,
                    1,
                    false,
                    $v_4,
                    null,
                    window.HILITE_DAY,
                    $v_0,
                    false,
                    null,
                    SetDefaultFocus);
            else
                LaunchCalendar(XUI.Html.DomUtils.GetNextSibling(this.get_element()),
                    this.$9_3,
                    $v_0,
                    1,
                    false,
                    $v_4,
                    null,
                    window.HILITE_DAY,
                    $v_0,
                    false,
                    null,
                    Mscrm.FormInputControl.DateTimeImage.optimizeForMobile)
        }
    },
    onOver: function(eventObject) {
        if (!this.get_$W_3().get_disabled()) this.get_element().src = "/_imgs/btn_on_cal.gif"
    },
    onOut: function(eventObject) {
        if (!this.get_$W_3().get_disabled()) this.get_element().src = "/_imgs/btn_off_cal.gif"
    }
};
Mscrm.FormInputControl.Duration = function(element) {
    this.$$d_$h_4 = Function.createDelegate(this, this.$h_4);
    this.$$d_$R_4 = Function.createDelegate(this, this.$R_4);
    this.$$d_$r_4 = Function.createDelegate(this, this.$r_4);
    this.$0_4 = null;
    Mscrm.FormInputControl.Duration.initializeBase(this, [element])
};
Mscrm.FormInputControl.Duration.prototype = {
    $5_4: null,
    $b_4: 0,
    $V_4: false,
    $4_4: 0,
    $G_4: false,
    $O_4: 0,
    $P_4: 0,
    $8_4: false,
    $U_4: false,
    $B_4: true,
    get_$m_4: function() { return XUI.Html.DomUtils.GetNextSibling(this.get_element()) },
    get_defaultValue: function() { return this.$4_4 },
    set_defaultValue: function(value) {
        this.$4_4 = isNaN(value) ? this.$0_4 : value;
        return value
    },
    get_isDirty: function() { return this.$0_4 !== this.$4_4 },
    get_dataXml: function() {
        var $v_0 = this.get_element().id.toLowerCase(), $v_1 = "";
        if (!IsNull(this.$0_4) && !isNaN(this.$0_4)) $v_1 = this.$0_4.toString();
        return "<" + $v_0 + ">" + $v_1 + "</" + $v_0 + ">"
    },
    get_dataValue: function() { return isNaN(this.$0_4) ? null : this.$0_4 },
    set_dataValue: function(value) {
        if (!IsNull(value)) {
            if (typeof value !== "number" ||
                parseInt(value.toString()) < this.$P_4 ||
                parseInt(value.toString()) > this.$O_4) {
                this.showErrorMessage(String.format(window.LOCID_DURATION_BADTYPE, this.$P_4, this.$O_4));
                return value
            }
            value = Math.floor(parseInt(value.toString()))
        }
        var $v_0 = value;
        if (parseInt($v_0) !== this.$0_4) {
            var $v_1 = "";
            if (!isNullOrEmptyString($v_0)) {
                $v_1 = Mscrm.NumberUtility.formatDuration(parseInt($v_0));
                if (isNullOrEmptyString($v_1)) {
                    this.showErrorMessage(window.LOCID_ERROR_SAVE_DURATION);
                    return value
                }
            }
            this.$0_4 = parseInt($v_0);
            this.get_element().setAttribute("CurrentValue", this.$0_4);
            this.$w_4($v_1)
        }
        this.handleDataValueChangedEvent();
        return value
    },
    get_disabled: function() { return this.$G_4 },
    set_disabled: function(value) {
        if (value !== this.$G_4) {
            this.$G_4 = value;
            if (value) this.$5_4.disable();
            else this.$5_4.enable()
        }
        return value
    },
    get_displayValue: function() {
        if (!IsNull(this.$0_4)) return Mscrm.NumberUtility.formatDuration(this.$0_4);
        else return ""
    },
    get_willSubmit: function() { return this.$8_4 },
    set_willSubmit: function(value) {
        this.$8_4 = value;
        return value
    },
    get_durationSelect: function() { return this.$5_4 },
    set_durationSelect: function(value) {
        this.$5_4 = value;
        return value
    },
    get_isDurationValid: function() { return this.$B_4 },
    add_change: function(value) { this.get_events().addHandler("OnChangeEvent", value) },
    remove_change: function(value) { this.get_events().removeHandler("OnChangeEvent", value) },
    add_onInitComplete: function(value) { this.get_events().addHandler("OnInitCompleteEvent", value) },
    remove_onInitComplete: function(value) { this.get_events().removeHandler("OnInitCompleteEvent", value) },
    initialize: function() {
        var $v_0 = this.get_$m_4();
        if ($v_0) this.$5_4 = $find($v_0.id);
        this.initializeDuration()
    },
    initializeDuration: function() {
        this.$8_4 = true;
        this.$O_4 = parseInt(this.get_element().getAttribute("MaxMinutes").toString());
        this.$P_4 = parseInt(this.get_element().getAttribute("MinMinutes").toString());
        if (!IsNull(this.get_element()
            .getAttribute("IsOnlyDays")))
            this.$U_4 = this.get_element().getAttribute("IsOnlyDays").toString().toLowerCase() === "true";
        var $v_0 = this.get_element().getAttribute("InitialValue");
        if (!IsNull($v_0) && $v_0.toString().length) {
            this.$0_4 = parseInt($v_0.toString());
            this.$4_4 = this.$0_4;
            this.get_element().setAttribute("CurrentValue", this.$0_4)
        }
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        if (this.$5_4) {
            this.$5_4.add_validate != null &&
                this.$5_4.add_validate != undefined &&
                this.$5_4.add_validate(this.$$d_$r_4);
            this.$5_4.add_returnValueChange != null &&
                this.$5_4.add_returnValueChange != undefined &&
                this.$5_4.add_returnValueChange(this.$$d_$R_4);
            this.$5_4.add_findNextSmallestEntry != null &&
                this.$5_4.add_findNextSmallestEntry != undefined &&
                this.$5_4.add_findNextSmallestEntry(this.$$d_$h_4)
        }
        var $v_1 = this.get_element().getAttribute("setdisabled");
        if (!IsNull($v_1) && $v_1.toString() === "1") this.$G_4 = true;
        this.fireControlEvent("OnInitCompleteEvent", Sys.EventArgs.Empty)
    },
    handleInvalidDurationInput: function(formatArgs, errorMessage) {
        this.showErrorMessage(errorMessage);
        formatArgs.returnValue = false
    },
    $R_4: function($p0, $p1) {
        var $v_0 = 0, $v_1 = this.$5_4.get_returnValueProperty();
        if (!IsNull($v_1) && $v_1.toString().length)
            if (!this.$V_4) $v_0 = this.parseDuration($v_1.toString());
            else {
                $v_0 = this.$b_4;
                this.$V_4 = false
            }
        if (this.$0_4 !== $v_0) {
            this.$0_4 = $v_0;
            this.get_element().setAttribute("CurrentValue", this.$0_4);
            this.fireOnChange()
        }
    },
    $r_4: function($p0, $p1) {
        this.$B_4 = true;
        var $v_0 = $p1;
        if ($v_0.type === "returnvaluechange") {
            this.$R_4($p0, $v_0);
            return
        }
        if (typeof $v_0.inputValue === "undefined") {
            this.$R_4($p0, $v_0);
            return
        }
        if (!$v_0.inputValue.length) {
            if (IsNull($v_0.returnValue)) $v_0.returnValue = true;
            $v_0.formattedValue = ""
        } else {
            var $v_1 = this.parseDuration($v_0.inputValue);
            if (isNaN($v_1) || $v_1 < this.$P_4 || $v_1 > this.$O_4) {
                this.$B_4 = false;
                this.handleInvalidDurationInput($v_0, window.LOCID_VALID_DURATION)
            } else {
                this.$b_4 = $v_1;
                this.$V_4 = true;
                var $v_2 = Mscrm.NumberUtility.formatDuration($v_1);
                if (isNullOrEmptyString($v_2)) {
                    this.showErrorMessage(window.LOCID_ERROR_SAVE_DURATION);
                    $v_0.returnValue = false
                } else {
                    $v_0.returnValue = true;
                    $v_0.formattedValue = $v_2
                }
            }
        }
    },
    $h_4: function($p0, $p1) {
        var $v_0 = $p1;
        if ($v_0.type === "returnvaluechange") {
            this.$R_4($p0, $v_0);
            return
        }
        if (typeof $v_0.inputValue === "undefined") {
            this.$R_4($p0, $v_0);
            return
        }
        var $v_1 = $v_0.inputValue;
        this.$v_4($v_0, $v_1)
    },
    $v_4: function($p0, $p1) {
        if (!$p1.length) $p0.sEntry = "";
        else {
            var $v_0 = this.parseDuration($p1);
            if (!this.$U_4) {
                if ($v_0 <= 5)
                    $p0.sEntry = String.format(window.LOCID_ONE_MINUTE_MASK, Mscrm.NumberUtility.addFormatting(1, 0));
                else if ($v_0 <= 15)
                    $p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK, Mscrm.NumberUtility.addFormatting(5, 0));
                else if ($v_0 <= 30)
                    $p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK, Mscrm.NumberUtility.addFormatting(15, 0));
                else if ($v_0 <= 45)
                    $p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK, Mscrm.NumberUtility.addFormatting(30, 0));
                else if ($v_0 <= 60)
                    $p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK, Mscrm.NumberUtility.addFormatting(45, 0));
                else if ($v_0 <= 90)
                    $p0.sEntry = String.format(window.LOCID_ONE_HOUR_MASK, Mscrm.NumberUtility.addFormatting(1, 0));
                else if ($v_0 <= 120)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(1.5, 0));
                else if ($v_0 <= 150)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(2, 0));
                else if ($v_0 <= 180)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(2.5, 0));
                else if ($v_0 <= 210)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(3, 0));
                else if ($v_0 <= 240)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(3.5, 0));
                else if ($v_0 <= 270)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(4, 0));
                else if ($v_0 <= 300)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(4.5, 0));
                else if ($v_0 <= 330)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(5, 0));
                else if ($v_0 <= 360)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(5.5, 0));
                else if ($v_0 <= 390)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(6, 0));
                else if ($v_0 <= 420)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(6.5, 0));
                else if ($v_0 <= 450)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(7, 0));
                else if ($v_0 <= 480)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(7.5, 0));
                else if ($v_0 <= 510)
                    $p0.sEntry = String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(8, 0))
            } else if ($v_0 <= 2880)
                $p0.sEntry = String.format(window.LOCID_ONE_DAY_MASK, Mscrm.NumberUtility.addFormatting(1, 0));
            else if ($v_0 <= 4320)
                $p0.sEntry = String.format(window.LOCID_N_DAYS_MASK, Mscrm.NumberUtility.addFormatting(2, 0));
            else $p0.sEntry = String.format(window.LOCID_N_DAYS_MASK, Mscrm.NumberUtility.addFormatting(3, 0))
        }
    },
    resetDefault: function(value) {
        if (IsNull(value)) this.$4_4 = this.$0_4;
        else this.$4_4 = value
    },
    resetToDefault: function() {
        this.set_dataValue(this.$4_4);
        this.$0_4 = this.$4_4;
        this.get_element().setAttribute("CurrentValue", this.$0_4)
    },
    setFocus: function() {
        if (!this.$G_4) {
            if (!IsNull(this.get_element().getAttribute("form")) &&
                this.get_element().getAttribute("form").getAttribute("className").toString() === "ms-crm-Form");
            this.$5_4.setFocus()
        }
    },
    $w_4: function($p0) {
        if (IsNull($p0)) this.$5_4.setValue("", null, true);
        else this.$5_4.setValue($p0, null, true)
    },
    parseDuration: function(durationValue) {
        if (IsNull(durationValue)) {
            this.$B_4 = false;
            return Number.NaN
        }
        var $v_0 = durationValue.trim(),
            $v_1 = new RegExp("^" +
                window.LOCID_SINGULAR_MINUTE +
                "\\s|\\s" +
                window.LOCID_SINGULAR_MINUTE +
                "$|^" +
                window.LOCID_PLURAL_MINUTE +
                "\\s|\\s" +
                window.LOCID_PLURAL_MINUTE +
                "$",
                "i"),
            $v_2 = new RegExp("^" +
                window.LOCID_SINGULAR_HOUR +
                "\\s|\\s" +
                window.LOCID_SINGULAR_HOUR +
                "$|^" +
                window.LOCID_PLURAL_HOUR +
                "\\s|\\s" +
                window.LOCID_PLURAL_HOUR +
                "$",
                "i"),
            $v_3 = new RegExp("^" +
                window.LOCID_SINGULAR_DAY +
                "\\s|\\s" +
                window.LOCID_SINGULAR_DAY +
                "$|^" +
                window.LOCID_PLURAL_DAY +
                "\\s|\\s" +
                window.LOCID_PLURAL_DAY +
                "$",
                "i"),
            $v_4 = 0;
        if ($v_1.test($v_0)) {
            $v_0 = $v_0.replace($v_1, "");
            $v_4 = 0
        } else if ($v_2.test($v_0)) {
            $v_0 = $v_0.replace($v_2, "");
            $v_4 = 1
        } else if ($v_3.test($v_0)) {
            $v_0 = $v_0.replace($v_3, "");
            $v_4 = 2
        } else {
            $v_4 = 0;
            if (this.$U_4) $v_4 = 2
        }
        $v_0 = $v_0.trim();
        var $v_5 = Mscrm.NumberUtility.locStringToFloat($v_0);
        if (isNaN($v_5)) {
            this.$B_4 = false;
            return Number.NaN
        }
        switch ($v_4) {
        case 0:
            return Math.round($v_5);
        case 1:
            return Math.round($v_5 * 60);
        case 2:
            return Math.round($v_5 * 1440);
        default:
            this.$B_4 = false;
            return Number.NaN
        }
    },
    fireOnChange: function() {
        var $v_0 = XUI.Html.CreateDomEvent("OnChangeEvent"), $v_1 = this.get_events().getHandler("OnChangeEvent");
        if (!IsNull($v_1)) {
            var $v_2 = new Sys.UI.DomEvent($v_0);
            $v_2.target = this.get_element();
            $v_1($v_2)
        }
    },
    showErrorMessage: function(message) {
        if (!IsNull(this.get_element())) {
            this.get_element().setAttribute("ValidationFailed", true);
            var $v_0 = this.get_element(), $$t_2 = this;
            window.setTimeout(function() { $v_0.removeAttribute("ValidationFailed") }, 50)
        }
        alert(message)
    }
};
Mscrm.FormInputControl.DateTimeBehaviorBase.registerClass("Mscrm.FormInputControl.DateTimeBehaviorBase",
    Mscrm.FormControlInputBehavior,
    Mscrm.FormInputControl.IDateTimeControl);
Mscrm.FormInputControl.DateControlWrapper.registerClass("Mscrm.FormInputControl.DateControlWrapper",
    null,
    Mscrm.FormInputControl.IDateControl);
Mscrm.FormInputControl.DateScrollerControlWrapper
    .registerClass("Mscrm.FormInputControl.DateScrollerControlWrapper", null, Mscrm.FormInputControl.IDateControl);
Mscrm.FormInputControl.TimeControlWrapper.registerClass("Mscrm.FormInputControl.TimeControlWrapper",
    null,
    Mscrm.FormInputControl.ITimeControl);
Mscrm.FormInputControl.TimeScrollerControlWrapper
    .registerClass("Mscrm.FormInputControl.TimeScrollerControlWrapper", null, Mscrm.FormInputControl.ITimeControl);
Mscrm.FormInputControl.DateTimeBehavior.registerClass("Mscrm.FormInputControl.DateTimeBehavior",
    Mscrm.FormInputControl.DateTimeBehaviorBase);
Mscrm.FormInputControl.MocaDateTimeBehavior.registerClass("Mscrm.FormInputControl.MocaDateTimeBehavior",
    Mscrm.FormInputControl.DateTimeBehaviorBase);
Mscrm.FormInputControl.DateTimeImage.registerClass("Mscrm.FormInputControl.DateTimeImage", Mscrm.CrmUIBehavior);
Mscrm.FormInputControl.Duration.registerClass("Mscrm.FormInputControl.Duration", Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.DateTimeBehaviorBase.formaT_DATEONLY = "date";
Mscrm.FormInputControl.DateTimeBehaviorBase.formaT_DATETIME = "datetime";
Mscrm.FormInputControl.DateTimeBehaviorBase.formaT_TIMEONLY = "time";
Mscrm.FormInputControl.DateTimeBehaviorBase.focusEventKey = "FocusEvent"