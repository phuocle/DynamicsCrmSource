Type.registerNamespace("Mscrm");
Mscrm.RecurrencePatternType = function() {};
Mscrm.RecurrencePatternType.prototype = { daily: 0, weekly: 1, monthly: 2, yearly: 3, invalid: 4 };
Mscrm.RecurrencePatternType.registerEnum("Mscrm.RecurrencePatternType", false);
Mscrm.PropertyType = function() {};
Mscrm.PropertyType.prototype = { date: 1, "int": 2 };
Mscrm.PropertyType.registerEnum("Mscrm.PropertyType", false);
Mscrm.RecurrenceValidationErrorType = function() {};
Mscrm.RecurrenceValidationErrorType.prototype = {
    invalidRecurrencePattern: 0,
    incorrectIntervalMin: 1,
    incorrectIntervalMax: 2,
    incorrectDaysOfWeekMask: 3,
    incorrectDayOfMonth: 4,
    incorrectMonthOfYear: 5,
    incorrectInstance: 6,
    incorrectStartEndTime: 7,
    incorrectPatternStartDate: 8,
    incorrectPatternEndDate: 9,
    incorrectOccurrences: 10,
    incorrectDuration: 11,
    monthsWarning: 12,
    incorrectStartDateRange: 13,
    february29Warning: 14,
    incorrectStartDateLessThanToday: 15,
    incorrectEndDateLessThanToday: 16
};
Mscrm.RecurrenceValidationErrorType.registerEnum("Mscrm.RecurrenceValidationErrorType", false);
Mscrm.PatternOptionsContainerControl = function(element) {
    this.$$d_$1E_3 = Function.createDelegate(this, this.$1E_3);
    this.$$d_$1L_3 = Function.createDelegate(this, this.$1L_3);
    Mscrm.PatternOptionsContainerControl.initializeBase(this, [element]);
    this.$P_3 = false;
    var $v_0 = this.get_element().getAttributeNode("contentDisabled");
    if (!IsNull($v_0)) this.$O_3 = Mscrm.Utilities.parseBoolean($v_0.value)
};
Mscrm.PatternOptionsContainerControl.$l = function($p0, $p1) {
    if (IsNull($p0)) return;
    var $v_0 = "set_disabled";
    if (!IsNull($p0[$v_0])) {
        $p0[$v_0]($p1);
        return
    }
    if (!IsNull($p0.Disabled)) {
        $p0.Disabled = $p1;
        if (!IsNull($p0.disabled)) $p0.disabled = $p1;
        return
    }
    $p0.disabled = $p1;
    if ($p1) Sys.UI.DomElement.addCssClass($p0, "ms-crm-ReadOnly");
    else Sys.UI.DomElement.removeCssClass($p0, "ms-crm-ReadOnly")
};
Mscrm.PatternOptionsContainerControl.prototype = {
    $K_3: null,
    $L_3: null,
    $e_3: 0,
    $P_3: false,
    $O_3: false,
    $Q_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$u_3();
        this.$Q_3 = this.$$d_$1L_3;
        $addHandler(this.get_element(), "click", this.$Q_3);
        window.setTimeout(this.$$d_$1E_3, 1)
    },
    $1E_3: function() {
        if (this.$O_3) this.$16_3();
        else this.$10_3()
    },
    $u_3: function() {
        if (this.$P_3) return;
        var $v_0 = this.get_element(), $v_1 = $v_0.getAttributeNode("OptionsCount");
        this.$e_3 = Number.parseInvariant($v_1.value);
        var $v_2 = $v_0.id, $v_3 = [];
        Array.add($v_3, "INPUT");
        Array.add($v_3, "SELECT");
        Array.add($v_3, "TABLE");
        this.$K_3 = [];
        this.$L_3 = {};
        for (var $v_4 = 1; $v_4 <= this.$e_3; $v_4++) {
            var $v_5 = "rad_" + $v_2 + "Option" + $v_4.toString(), $v_6 = $get($v_5);
            !IsNull($v_6) && Array.add(this.$K_3, $v_6);
            var $v_7 = $get($v_2 + "Control_" + $v_4.toString()), $v_8 = $v_7.getAttributeNode("relatedOptionNumber");
            if (IsNull($v_8)) continue;
            var $v_9 = this.$p_3($v_7, $v_3);
            if ($v_9.length > 0) {
                var $v_A = $v_9[0];
                !IsNull($v_A.id) && $v_A.id === $v_5 && Array.removeAt($v_9, 0)
            }
            this.$L_3[$v_5] = $v_9
        }
        this.$P_3 = true
    },
    $1L_3: function($p0) {
        $p0.target.nodeName.toUpperCase() === "INPUT" &&
            $p0.target.id.startsWith("rad_" + this.get_element().id + "Option") &&
            this.$10_3()
    },
    $10_3: function() {
        for (var $v_0 = 0;
            $v_0 < this.$K_3.length;
            $v_0++
        )
            for (var $v_1 = this.$K_3[$v_0], $v_2 = !$v_1.checked || this.$O_3, $v_3 = this.$L_3[$v_1.id], $v_4 = 0;
                $v_4 < $v_3.length;
                $v_4++) Mscrm.PatternOptionsContainerControl.$l($v_3[$v_4], $v_2)
    },
    $16_3: function() {
        var $$dict_3 = this.$L_3;
        for (var $$key_4 in $$dict_3)
            for (var $v_0 = { key: $$key_4, value: $$dict_3[$$key_4] }, $v_1 = $v_0.value, $v_2 = 0;
                $v_2 < $v_1.length;
                $v_2++) Mscrm.PatternOptionsContainerControl.$l($v_1[$v_2], true)
    },
    $p_3: function($p0, $p1) {
        var $v_0 = [];
        if (!IsNull($p0) && !IsNull($p0.tagName)) {
            if (!IsNull($p0.disable) || !IsNull($p0.Disabled) || Array.contains($p1, $p0.tagName))
                if ($p0.tagName !== "TABLE") {
                    Array.add($v_0, $p0);
                    return $v_0
                } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-DateTime")) {
                    Array.add($v_0, Mscrm.FormControlInputBehavior.GetBehavior($p0.id));
                    return $v_0
                }
            for (var $v_1 = $p0.children, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = this.$p_3($v_1[$v_2], $p1);
                if (!IsNull($v_3) && $v_3.length > 0) $v_0 = $v_0.concat($v_3)
            }
        }
        return $v_0
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$Q_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.RecurrenceDialogLoader = function() {};
Mscrm.RecurrenceDialogLoader
    .displayRecurrenceDialog = function(entityType, id, isDefault, enableEndSeries, recurrenceValues, callback) {
        var $v_0 = Mscrm.CrmUri.create("/activities/act_dlgs/recurrencedialog.aspx");
        $v_0.get_query()["objectType"] = entityType;
        $v_0.get_query()["Id"] = id;
        $v_0.get_query()["default"] = isDefault ? 1 : 0;
        $v_0.get_query()["endEn"] = enableEndSeries ? 1 : 0;
        var $v_1 = parseInt(window.LOCID_RECURDLG_HEIGHT, 10),
            $v_2 = parseInt(window.LOCID_RECURDLG_WIDTH, 10),
            $v_3 = new Mscrm.CrmDialog($v_0, recurrenceValues, $v_2, $v_1, "scroll:no");
        $v_3.setCallbackReference(callback);
        $v_3.show()
    };
Mscrm.RecurrenceDialogLoader.openRecurrenceDialog = function(entityType, id, endSeries) {
    var $v_0 = false;
    if (!Xrm.Page.data.entity.getId()) $v_0 = true;
    var $v_1 = $v_0, $v_2 = Mscrm.RecurrenceDialogLoader.$1B();
    try {
        var $v_3 = window.LOCID_SERVER_MAX_INSTANCE_WARN,
            $v_4 = [entityType],
            $v_5 = Mscrm.Utilities
                .createCallbackFunctionObject("addRecurrenceCallback", Mscrm.RecurrenceDialogLoader, $v_4, false);
        Mscrm.RecurrenceDialogLoader.displayRecurrenceDialog(entityType, id, $v_1, endSeries, $v_2, $v_5)
    } catch ($$e_9) {
    }
    return null
};
Mscrm.RecurrenceDialogLoader.addRecurrenceCallback = function(returnValue, entityType) {
    try {
        if (!IsNull(returnValue)) {
            var $v_0 = returnValue;
            if (!IsNull($v_0["seriesstatus"])) {
                if (!$v_0["seriesstatus"]) {
                    Mscrm.RecurrenceUtil.refreshRelatedParentGrids(entityType);
                    Xrm.Page.ui.close()
                }
            } else {
                Mscrm.RecurrenceDialogLoader.$1Q($v_0);
                var $v_1 = $v_0["recurrencedescription"];
                if (!IsNull($v_1)) {
                    var $v_2 = $find("crmNotifications");
                    if ($v_2) {
                        $v_2.clearFormNotification("recurrenceDescription");
                        for (var $v_3 = $v_2.GetNotifications(), $v_4 = [], $v_5 = 0; $v_5 < $v_3.length; $v_5++)
                            if ($v_3[$v_5].Source === "Server") {
                                var $v_6 = $v_3[$v_5].Id;
                                $v_4[$v_4.length] = $v_6
                            }
                        for (var $v_7 = 0;
                            $v_7 < $v_4.length;
                            $v_7++
                        )
                            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4[$v_7]) &&
                                $v_2.clearFormNotification($v_4[$v_7]);
                        Mscrm.RecurrenceUtil.setNotificationsForRecurrence("recurrenceDescription", 0, "rdialog", $v_1)
                    }
                }
            }
        }
    } catch ($$e_A) {
    }
    return returnValue
};
Mscrm.RecurrenceDialogLoader.$1B = function() {
    for (var $v_0 = {}, $v_1 = Mscrm.RecurrenceProperties.allProperties, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2], $v_4 = Xrm.Page.getAttribute($v_3);
        if (!IsNull($v_4)) $v_0[$v_3] = $v_4.getValue()
    }
    return $v_0
};
Mscrm.RecurrenceDialogLoader.$1Q = function($p0) {
    for (var $v_0 = Mscrm.RecurrenceProperties.allProperties, $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1], $v_3 = $p0[$v_2], $v_4 = $get($v_2);
        if (!IsNull($v_3)) {
            var $v_5 = Xrm.Page.getAttribute($v_2);
            if (!IsNull($v_5) && !IsNull($v_3.toString())) {
                if (isNullOrEmptyString($v_3.toString())) {
                    $v_5.setValue(null);
                    continue
                }
                var $v_6 = $v_5.getAttributeType();
                switch ($v_6) {
                case "datetime":
                    $v_5.setValue(ParseUtcDate($v_3.toString()));
                    break;
                case "integer":
                    $v_5.setValue(parseInt($v_3.toString(), 10));
                    break;
                default:
                    $v_5.setValue($v_3.toString());
                    break
                }
            } else $v_4.DataValue = $v_3.toString()
        }
    }
};
Mscrm.RecurrenceDialogLoader.hasRecurrenceValuesChanged = function(oldValues, newValues) {
    var $v_0 = Mscrm.RecurrenceProperties.patternTypeProperties,
        $v_1 = Mscrm.RecurrenceProperties.rangeProperties,
        $v_2 = [];
    $v_2 = $v_2.concat.apply($v_2, [$v_0].concat($v_1));
    for (var $v_3 = new Mscrm.RecurrenceProperties, $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
        var $v_5 = $v_2[$v_4];
        if ($v_5 !== "patternenddate" &&
            $v_5 !== "occurences" &&
            !$v_3.compareProperties(oldValues[$v_5], newValues[$v_5], $v_5)) return true
    }
    if ("3" === newValues["patternendtype"].toString() &&
        !$v_3
        .compareProperties(oldValues["patternenddate"], newValues["patternenddate"], "patternenddate")) return true;
    else if ("1" !== newValues["patternendtype"].toString() &&
        !$v_3.compareProperties(oldValues["occurrences"], newValues["occurrences"], "occurrences")) return true;
    return false
};
Mscrm.RecurrenceDialog = function($p0) {
    this.$$d_$1S_0 = Function.createDelegate(this, this.$1S_0);
    this.$$d_$1M_0 = Function.createDelegate(this, this.$1M_0);
    this.$$d_$s_0 = Function.createDelegate(this, this.$s_0);
    this.$$d_$1C_0 = Function.createDelegate(this, this.$1C_0);
    this.$$d_$t_0 = Function.createDelegate(this, this.$t_0);
    this.$$d_$1D_0 = Function.createDelegate(this, this.$1D_0);
    this.$$d_$1c_0 = Function.createDelegate(this, this.$1c_0);
    this.$$d_$c_0 = Function.createDelegate(this, this.$c_0);
    this.$$d_$17_0 = Function.createDelegate(this, this.$17_0);
    this.$$d_$1W_0 = Function.createDelegate(this, this.$1W_0);
    this.$$d_$1G_0 = Function.createDelegate(this, this.$1G_0);
    this.$D_0 = ["daily", "weekly", "monthly", "yearly"];
    this.$9_0 = $p0;
    Sys.Application.add_init(this.$$d_$1G_0);
    Sys.Application.add_unload(this.$$d_$1W_0)
};
Mscrm.RecurrenceDialog.get_instance = function() { return Mscrm.RecurrenceDialog.$G };
Mscrm.RecurrenceDialog.set_instance = function(value) { return value };
Mscrm.RecurrenceDialog.initialize = function() {
    var $v_0 = window._bIsNew;
    Mscrm.RecurrenceDialog.$G = new Mscrm.RecurrenceDialog($v_0)
};
Mscrm.RecurrenceDialog.$3 = function($p0) {
    if (IsNull(Mscrm.RecurrenceDialog.$4)) {
        Mscrm.RecurrenceDialog.$4 = [];
        Mscrm.RecurrenceDialog.$4[0] = window.LOCID_RDIALOG_INVALID_RPAT;
        Mscrm.RecurrenceDialog.$4[9] = window.LOCID_RDIALOG_INVALID_ENDDATE;
        Mscrm.RecurrenceDialog.$4[8] = window.LOCID_RDIALOG_INVALID_STARTDATE;
        Mscrm.RecurrenceDialog.$4[6] = window.LOCID_RDIALOG_INVALID_INSTANCES;
        Mscrm.RecurrenceDialog.$4[11] = window.LOCID_RDIALOG_INVALID_DURATION;
        Mscrm.RecurrenceDialog.$4[1] = window.LOCID_RDIALOG_INVALID_NUMBER;
        Mscrm.RecurrenceDialog.$4[4] = window.LOCID_RDIALOG_INVALID_MONTH;
        Mscrm.RecurrenceDialog.$4[12] = window.LOCID_RDIALOG_MONTHWARN;
        Mscrm.RecurrenceDialog.$4[1] = window.LOCID_RDIALOG_INVALID_NUMBER;
        Mscrm.RecurrenceDialog.$4[13] = window.LOCID_RDIALOG_STARTDTERROR;
        Mscrm.RecurrenceDialog.$4[15] = window.LOCID_RDIALOG_STDTLESSTHANTODY;
        Mscrm.RecurrenceDialog.$4[16] = window.LOCID_RDIALOG_ENDDTLESSTHANTODY;
        Mscrm.RecurrenceDialog.$4[14] = window.LOCID_RDIALOG_FEB29_WARN
    }
    alert(Mscrm.RecurrenceDialog.$4[$p0])
};
Mscrm.RecurrenceDialog.$19 = function($p0) {
    var $v_0 = $p0, $v_1 = 0, $v_2 = 0, $v_3 = $p0.offsetWidth, $v_4 = $p0.offsetHeight;
    while (!IsNull($v_0) && !IsNull($v_0.nodeName) && $v_0.nodeName.toLowerCase() !== "body") {
        var $v_5 = $v_0.clientLeft;
        if (IsNull($v_5)) $v_5 = 0;
        var $v_6 = $v_0.clientTop;
        if (IsNull($v_6)) $v_6 = 0;
        $v_1 += $v_0.offsetLeft + $v_5;
        $v_2 += $v_0.offsetTop + $v_6;
        $v_0 = $v_0.offsetParent
    }
    return new Sys.UI.Bounds($v_1, $v_2, $v_3, $v_4)
};
Mscrm.RecurrenceDialog.$B = function($p0) {
    if (IsNull($p0) || $p0.toString() === "" || $p0 == "NaN") return false;
    return true
};
Mscrm.RecurrenceDialog.$j = function($p0, $p1, $p2, $p3) {
    if (isNaN($p0)) {
        Mscrm.RecurrenceDialog.$3(0);
        return false
    }
    if ($p0 < $p1) {
        Mscrm.RecurrenceDialog.$3(1);
        return false
    }
    if (IsNull($p3) || $p3 === "") {
        $p3 = window.LOCID_RDIALOG_INVALID_NUMBER2;
        $p3 = String.format($p3, $p2)
    }
    if ($p0 > $p2) {
        alert($p3);
        return false
    }
    return true
};
Mscrm.RecurrenceDialog.$12 = function($p0, $p1, $p2) {
    $p1 = parseInt($p1.toString(), 10);
    $p0 = parseInt($p0.toString(), 10);
    var $v_0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ($p1 > 12 || $p1 < 1) return false;
    var $v_1 = window.LOCID_RDIALOG_INVALID_MONTH;
    if (!Mscrm.RecurrenceDialog.$j($p0, 1, $v_0[$p1 - 1], $v_1)) return false;
    if (!Mscrm.RecurrenceDialog.$1Z($p0, $p1, $p2)) return false;
    return true
};
Mscrm.RecurrenceDialog.$1Z = function($p0, $p1, $p2) {
    $p1 = parseInt($p1.toString(), 10);
    $p0 = parseInt($p0.toString(), 10);
    if ($p1 === 2 && $p0 === 29) {
        var $v_0 = Mscrm.RecurrenceDialog.$G, $v_1 = $v_0.get_$C_0().get_dataValue();
        if (!Mscrm.RecurrenceDialog.$1I($v_1.getFullYear())) {
            Mscrm.RecurrenceDialog.$3(0);
            return false
        }
        if ($p2) {
            var $v_2 = $get("yearlyOption1_interval"), $v_3 = parseInt($v_2.value, 10);
            $v_3 > 1 && Mscrm.RecurrenceDialog.$3(14)
        }
    }
    return true
};
Mscrm.RecurrenceDialog.$1I = function($p0) { return (new Date($p0, 1, 29)).getDate() === 29 };
Mscrm.RecurrenceDialog.$11 = function($p0, $p1) {
    var $v_0 = parseInt(window._minDaysInMonth, 10), $v_1 = parseInt(window._maxDaysInMonth, 10);
    if (!Mscrm.RecurrenceDialog.$j($p0, 1, $v_1, null)) return false;
    if ($p1 && $p0 > $v_0) {
        var $v_2 = window.LOCID_RDIALOG_MONTHWARN;
        alert(String.format($v_2, $p0));
        return true
    }
    return true
};
Mscrm.RecurrenceDialog.$1a = function($p0) {
    if (IsNull($p0)) {
        Mscrm.RecurrenceDialog.$3(0);
        return false
    }
    if (isNaN($p0) || $p0.toString() === "0") {
        Mscrm.RecurrenceDialog.$3(0);
        return false
    }
    return true
};
Mscrm.RecurrenceDialog.numberChanged = function(eventObject) {
    var $v_0 = eventObject.target, $v_1 = Mscrm.RecurrenceDialog.$G;
    $v_1.$I_0($v_0);
    eventObject.preventDefault()
};
Mscrm.RecurrenceDialog.$y = function($p0) { return Mscrm.NumberUtility.locStringToInt($p0) };
Mscrm.RecurrenceDialog.$x = function($p0) { return Mscrm.NumberUtility.addFormatting($p0, 0) };
Mscrm.RecurrenceDialog.monthChanged = function(domEventObject) {
    var $v_0 = domEventObject.target, $v_1 = false, $v_2 = Mscrm.RecurrenceDialog.$y($v_0.value), $v_3 = true;
    if ($v_0.id === "yearlyOption2_dayofmonth") {
        var $v_4 = $get("yearlyOption2_monthofyear"), $v_5 = parseInt($v_4.value, 10);
        $v_3 = Mscrm.RecurrenceDialog.$12($v_2, $v_5, $v_1)
    } else $v_3 = Mscrm.RecurrenceDialog.$11($v_2, $v_1);
    if (!$v_3) {
        $v_0.value = "1";
        window.setTimeout(function() { $v_0.focus() }, 10);
        window.setTimeout(function() { $v_0.select() }, 10);
        return
    }
    $v_0.value = Mscrm.RecurrenceDialog.$x($v_2)
};
Mscrm.RecurrenceDialog.dateChanged = function(eventObject) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(eventObject.target.id), $v_1 = false;
    if ($v_0.get_id() === "rangeOption1_patternstartdate") $v_1 = true;
    var $v_2 = Mscrm.RecurrenceDialog.$G;
    if (!$v_2.$1Y_0($v_1)) {
        var $v_3 = CloneDate($v_0.get_prevDataValue());
        if (!IsNull($v_3)) $v_0.set_dataValue($v_3);
        else {
            var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior("rangeOption1_patternStartDate"),
                $v_5 = Mscrm.FormControlInputBehavior.GetBehavior("rangeOption3_patternenddate"),
                $v_6 = new Mscrm.RecurrenceProperties;
            $v_4.set_dataValue($v_6.recurrenceDefaults["patternstartdate"]);
            $v_4.set_prevDataValue($v_6.recurrenceDefaults["patternstartdate"]);
            $v_5.set_dataValue($v_6.recurrenceDefaults["patternenddate"]);
            $v_5.set_prevDataValue($v_6.recurrenceDefaults["patternenddate"])
        }
        window.setTimeout(function() { $v_0.setFocus() }, 10)
    } else {
        var $v_7 = $v_0.get_dataValue();
        $v_0.set_prevDataValue($v_7)
    }
};
Mscrm.RecurrenceDialog.prototype = {
    $f_0: null,
    $6_0: null,
    $E_0: null,
    $a_0: null,
    $N_0: null,
    $d_0: null,
    $U_0: null,
    $T_0: null,
    $b_0: null,
    $Y_0: null,
    $h_0: null,
    $X_0: null,
    $R_0: null,
    $H_0: null,
    $2_0: null,
    $1_0: null,
    $5_0: null,
    $0_0: null,
    $9_0: false,
    $S_0: false,
    $F_0: 0,
    get_$i_0: function() {
        if (IsNull(this.$d_0)) this.$d_0 = Mscrm.FormControlInputBehavior.GetBehavior("scheduledstart");
        return this.$d_0
    },
    get_$o_0: function() {
        if (IsNull(this.$U_0)) this.$U_0 = Mscrm.FormControlInputBehavior.GetBehavior("scheduledend");
        return this.$U_0
    },
    get_$Z_0: function() {
        if (IsNull(this.$Y_0)) this.$Y_0 = Mscrm.FormControlInputBehavior.GetBehavior("rangeOption3_patternenddate");
        return this.$Y_0
    },
    get_$C_0: function() {
        if (IsNull(this.$b_0)) this.$b_0 = Mscrm.FormControlInputBehavior.GetBehavior("rangeOption1_patternstartdate");
        return this.$b_0
    },
    get_$n_0: function() {
        if (IsNull(this.$T_0)) this.$T_0 = Mscrm.FormControlInputBehavior.GetBehavior("scheduleddurationminutes");
        return this.$T_0
    },
    $1G_0: function($p0, $p1) {
        window.setTimeout(this.$$d_$17_0, 10);
        this.$14_0();
        InitDateVars();
        this.$u_0();
        this.placePatternTypePicklist();
        this.$1K_0();
        this.$1N_0();
        this.$1P_0();
        this.$k_0(false);
        this.$15_0();
        window.setTimeout(this.$$d_$c_0, 10);
        this.get_$i_0().setFocus()
    },
    $1W_0: function($p0, $p1) { this.$1T_0() },
    $14_0: function() {
        var $v_0 = window.LOCID_SERVER_MAX_INSTANCE_WARN;
        this.$9_0 && Mscrm.RecurrenceUtil.setNotificationsForRecurrence("instanceWarn", 2, "rdialog", $v_0)
    },
    $17_0: function() { this.$m_0(false) },
    $18_0: function() { this.$m_0(true) },
    $m_0: function($p0) {
        var $v_0 = $get("divProgress");
        $v_0.style.zIndex = 100;
        $v_0.style.display = "inline";
        var $v_1 = $p0 ? "divValidating" : "divLoading", $v_2 = $get("divLoading"), $v_3 = $get("divValidating");
        if ($p0) {
            $v_2.style.display = "none";
            $v_3.style.display = "inline"
        } else {
            $v_2.style.display = "inline";
            $v_3.style.display = "none"
        }
    },
    $1d_0: function($p0, $p1) {
        var $v_0 = new RemoteCommand("ActivitiesWebService", "ValidateRule", null);
        $v_0.ErrorHandler = this.$$d_$1c_0;
        var $v_1 = this.$1R_0($p0), $v_2 = window._seriesTimeZoneCode;
        $v_0.SetXmlParameter("content", $v_1);
        $v_0.SetParameter("checkOccurrences", $p1);
        $v_0.SetParameter("seriesTimeZoneCode", $v_2);
        try {
            var $v_3 = $v_0.Execute(null);
            this.$c_0();
            if (!IsNull($v_3) && !IsNull($v_3.Success) && $v_3.Success) {
                $p0["recurrencedescription"] = $v_3.ReturnValue;
                this.$1U_0()
            }
        } catch ($$e_6) {
        }
    },
    $1c_0: function($p0, $p1) {
        if (parseInt($p0, 16) === 2147803429) {
            var $v_0 = "";
            if (!IsNull($p1)) {
                var $v_1 = XUI.Xml.SelectSingleNode($p1, "error/description", null);
                if (!IsNull($v_1)) {
                    $v_0 = XUI.Xml.GetText($v_1);
                    this.$c_0();
                    alert($v_0)
                }
            }
        } else {
            Mscrm.RecurrenceUtil.handleError($p0);
            this.$c_0()
        }
    },
    $1R_0: function($p0) {
        var $v_0 = Mscrm.RecurrenceProperties.allProperties, $v_1 = new Sys.StringBuilder;
        $v_1.append("<recurrencerule>");
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2], $v_4 = $p0[$v_3];
            if (!IsNull($v_4) && $v_4 !== "") {
                var $v_5 = String.format("<{0}>{1}</{0}>",
                    CrmEncodeDecode.CrmXmlEncode($v_3),
                    CrmEncodeDecode.CrmXmlEncode($v_4));
                $v_1.append($v_5)
            }
        }
        $v_1.append("</recurrencerule>");
        return $v_1.toString()
    },
    $c_0: function() {
        var $v_0 = $get("divProgress");
        $v_0.style.display = "none";
        document.body.style.cursor = "pointer"
    },
    placePatternTypePicklist: function() {
        var $v_0 = Mscrm.RecurrenceDialog.$19(this.$f_0),
            $v_1 = $v_0.x,
            $v_2 = -1,
            $v_3 = $v_0.width,
            $v_4 = $v_0.height,
            $v_5 = Math.max($v_1 + $v_3 + 20, 170);
        if (window.LOCID_UI_DIR.toLowerCase() === "rtl") {
            var $v_6 = parseInt(this.$E_0.style.width, 10);
            $v_5 = Math.min($v_1 - $v_6 - 20, 270)
        }
        this.$E_0.style.left = String.format("{0}px", $v_5);
        this.$E_0.style.top = String.format("{0}px", $v_2);
        this.$E_0.style.zIndex = 2;
        this.$E_0.style.display = "inline"
    },
    $15_0: function() {
        $addHandler(this.$6_0, "change", this.$$d_$1D_0);
        $addHandler(this.$X_0, "click", this.$$d_$t_0);
        $addHandler(this.$R_0, "click", this.$$d_$1C_0);
        $addHandler(this.$H_0, "click", this.$$d_$s_0);
        $addHandler(document, "keydown", this.$$d_$1M_0)
    },
    $1M_0: function($p0) {
        switch ($p0.keyCode) {
        case 67:
            if ($p0.altKey) {
                $p0.preventDefault();
                $p0.stopPropagation();
                this.$M_0()
            }
            break;
        case 69:
            if ($p0.altKey && Mscrm.Utilities.isChrome() && !this.$H_0.disabled) {
                $p0.preventDefault();
                $p0.stopPropagation()
            } else if ($p0.altKey && Mscrm.Utilities.isFirefox() && !this.$H_0.disabled) {
                $p0.preventDefault();
                $p0.stopPropagation();
                this.$s_0($p0);
                return
            }
            break;
        case 83:
            if ($p0.altKey && Mscrm.Utilities.isFirefox()) {
                $p0.preventDefault();
                $p0.stopPropagation();
                this.$t_0($p0)
            }
            break
        }
    },
    $1D_0: function($p0) { this.$k_0(true) },
    $k_0: function($p0) {
        var $v_0 = this.$6_0.selectedIndex;
        if (IsNull($v_0)) return;
        for (var $v_1 = new Array(4), $v_2 = 0; $v_2 < 4; $v_2++) {
            $v_1[$v_2] = $get(this.$D_0[$v_2] + "Pattern");
            $v_1[$v_2].style.display = "none"
        }
        this.$2_0["recurrencepatterntype"] = $v_0.toString();
        $p0 && this.$w_0();
        this.$1O_0();
        $v_0 = this.$6_0.selectedIndex;
        $v_1[$v_0].style.display = "inline";
        window.setTimeout(this.$$d_$1S_0, 0)
    },
    $1S_0: function() {
        var $v_0 = this.$6_0.selectedIndex, $v_1 = this.$D_0[$v_0] + "Pattern", $v_2 = $get($v_1).style.display;
        if (isNullOrEmptyString($v_2)) $get($v_1).style.display = "inline";
        else $get($v_1).style.display = ""
    },
    $t_0: function($p0) {
        if (Mscrm.Utilities.resetValidationFailedElement()) return;
        this.$1_0 = this.$1V_0();
        this.$1b_0(this.$1_0)
    },
    $1X_0: function() {
        if (Mscrm.RecurrenceDialog.$B(this
            .$0_0["patternstartdate"]))
            this.$0_0["patternstartdate"] = new Date(this.$0_0["patternstartdate"].toString());
        if (Mscrm.RecurrenceDialog.$B(this
            .$0_0["patternenddate"])) this.$0_0["patternenddate"] = new Date(this.$0_0["patternenddate"].toString());
        if (Mscrm.RecurrenceDialog.$B(this
            .$0_0["starttime"])) this.$0_0["starttime"] = new Date(this.$0_0["starttime"].toString());
        if (Mscrm.RecurrenceDialog.$B(this
            .$0_0["endtime"])) this.$0_0["endtime"] = new Date(this.$0_0["endtime"].toString())
    },
    $1U_0: function() {
        var $v_0 = false;
        if (!this.$9_0) {
            $v_0 = Mscrm.RecurrenceDialogLoader.hasRecurrenceValuesChanged(this.$0_0, this.$1_0);
            if ($v_0) {
                var $v_1 = String.format("/activities/act_dlgs/dlg_seriesaction.aspx?actionType=2"),
                    $v_2 = Number.parseInvariant(window.LOCID_RDIALOG_SERIESDLG_HEIGHT),
                    $v_3 = Number.parseInvariant(window.LOCID_RDIALOG_SERIESDLG_WIDTH),
                    $v_4 = [$v_0, this.$1_0],
                    $v_5 = new Mscrm.CrmDialog(Mscrm.CrmUri.create($v_1), null, $v_3, $v_2, "scroll:no");
                $v_5.setCallbackInfo("recurrenceChangedCallback", this, $v_4);
                $v_5.show();
                return
            }
        }
        (this.$9_0 || $v_0 && Mscrm.Utilities.isModalDialogSupported()) && Mscrm.Utilities.setReturnValue(this.$1_0);
        this.$M_0()
    },
    recurrenceChangedCallback: function(returnValue, hasRecurrenceChanged, newProperties) {
        if (IsNull(returnValue) || false === returnValue) return;
        else hasRecurrenceChanged = true;
        hasRecurrenceChanged && Mscrm.Utilities.setReturnValue(newProperties);
        this.$M_0()
    },
    $1C_0: function($p0) { this.$M_0() },
    $s_0: function($p0) {
        if (Mscrm.Utilities.resetValidationFailedElement()) return;
        var $v_0 = window._entityId,
            $v_1 = window._entityTypeCode,
            $v_2 = Mscrm.Utilities.createCallbackFunctionObject("handleEndSeriesAction", this, null, false);
        Mscrm.RecurrenceUtil.endSeries($v_1, $v_0, $v_2)
    },
    handleEndSeriesAction: function(endSeriesSuccess) {
        if (endSeriesSuccess) {
            this.$1_0 = {};
            this.$1_0["seriesstatus"] = 0;
            Mscrm.Utilities.setReturnValue(this.$1_0);
            this.$M_0()
        }
    },
    $1N_0: function() {
        this.$0_0 = getDialogArguments();
        this.$1X_0();
        if (Mscrm.RecurrenceDialog.$B(this.$0_0["starttime"])) this.$2_0["starttime"] = this.$0_0["starttime"];
        if (Mscrm.RecurrenceDialog.$B(this.$0_0["endtime"])) this.$2_0["endtime"] = this.$0_0["endtime"];
        if (!IsNull(this
                .$0_0["duration"]) &&
            this.$0_0["duration"] !== "") this.$2_0["duration"] = this.$0_0["duration"];
        if (IsNull(this.$0_0["patternstartdate"]) ||
            this.$0_0["patternstartdate"] === "" ||
            this.$0_0["patternstartdate"] == "NaN") return;
        if (Mscrm.RecurrenceDialog.$B(this
            .$0_0["patternstartdate"])) this.$0_0["patternstartdate"] = this.$0_0["patternstartdate"];
        if (Mscrm.RecurrenceDialog.$B(this
            .$0_0["patternenddate"])) this.$0_0["patternenddate"] = this.$0_0["patternenddate"];
        if (!IsNull(this.$0_0["recurrencepatterntype"])) this.$6_0.selectedIndex = this.$0_0["recurrencepatterntype"];
        if (!IsNull(this.$0_0["isnthmonthly"]) && this.$0_0["isnthmonthly"]) {
            this.$7_0(2, 2);
            this.$2_0["isnthmonthly"] = this.$0_0["isnthmonthly"]
        }
        for (var $v_0 = 0; $v_0 < Mscrm.RecurrenceProperties.allProperties.length; $v_0++) {
            var $v_1 = Mscrm.RecurrenceProperties.allProperties[$v_0];
            if (!IsNull(this.$0_0[$v_1]) &&
                this.$0_0[$v_1] !== "" &&
                this.$0_0[$v_1] !== "-1" &&
                !(this.$0_0[$v_1] == "NaN")) this.$2_0[$v_1] = this.$0_0[$v_1]
        }
        if (!IsNull(this.$0_0["patternendtype"])) this.$F_0 = this.$0_0["patternendtype"]
    },
    $1O_0: function() {
        var $v_0 = this.$2_0["recurrencepatterntype"],
            $v_1 = this.$2_0["interval"],
            $v_2 = IsNull(this.$2_0["isnthmonthly"]) ? false : this.$2_0["isnthmonthly"],
            $v_3 = IsNull(this.$2_0["isnthyearly"]) ? false : this.$2_0["isnthyearly"],
            $v_4 = IsNull(this.$2_0["isweekdaypattern"]) ? false : this.$2_0["isweekdaypattern"],
            $v_5 = IsNull(this.$2_0["isregenerate"]) ? false : this.$2_0["isregenerate"],
            $v_6 = window._weekDays,
            $v_7 = this.$2_0["daysofweekmask"];
        if ($v_0 === "0" || $v_0 === "1" && $v_4 && !IsNull($v_7) && $v_6.toString() === $v_7.toString()) {
            this.$8_0(0, 1);
            if ($v_0 === "1") {
                this.$7_0(0, 2);
                this.$6_0.selectedIndex = 0
            } else if ($v_5) {
                this.$8_0(0, 3);
                this.$7_0(0, 3)
            } else this.$7_0(0, 1);
            return
        }
        if ($v_0 === "1") {
            this.$8_0(1, 1);
            if ($v_5) {
                this.$8_0(1, 2);
                this.$7_0(1, 2)
            } else {
                this.$7_0(1, 1);
                for (var $v_8 = this
                             .$2_0["daysofweekmask"],
                    $v_9 = 0,
                    $v_A = 1;
                    $v_9 < 7;
                    $v_9++, $v_A = $v_A * 2) if ($v_A & $v_8) this.$N_0[$v_9].checked = true
            }
            return
        }
        if ($v_0 === "2") {
            this.$8_0(2, 1);
            this.$8_0(2, 2);
            if ($v_2) this.$7_0(2, 2);
            else if ($v_5) {
                this.$8_0(2, 3);
                this.$7_0(2, 3)
            } else this.$7_0(2, 1);
            return
        }
        if ($v_0 === "3") {
            this.$8_0(3, 1);
            this.$8_0(3, 2);
            this.$8_0(3, 3);
            if ($v_3) this.$7_0(3, 3);
            else if ($v_5) {
                this.$8_0(3, 4);
                this.$7_0(3, 4)
            } else this.$7_0(3, 2)
        }
    },
    $8_0: function($p0, $p1) {
        for (var $v_0 = this.$D_0[$p0] + "Option" + $p1.toString(), $v_1 = this.$5_0[$v_0], $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            var $v_3 = $v_1[$v_2], $v_4 = $v_0 + "_" + $v_3, $v_5 = $get($v_4);
            $v_5.value = this.$2_0[$v_3]
        }
    },
    $7_0: function($p0, $p1) {
        this.$2_0["recurrencepatterntype"] = $p0;
        var $v_0 = "rad_" + this.$D_0[$p0] + "PatternOption" + $p1.toString(), $v_1 = $get($v_0);
        if (!IsNull($v_1)) {
            Mscrm.Utilities.click($v_1);
            $v_1.checked = true
        }
    },
    $w_0: function() {
        for (var $v_0 = new Mscrm.RecurrenceProperties,
            $v_1 = Mscrm.RecurrenceProperties.patternTypeProperties,
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            var $v_3 = $v_1[$v_2], $v_4 = $v_0.recurrenceDefaults[$v_3];
            if (!IsNull($v_4)) this.$2_0[$v_3] = $v_4
        }
    },
    $1J_0: function() {
        for (var $v_0 = new Mscrm.RecurrenceProperties, $v_1 = Mscrm.RecurrenceProperties.rangeProperties, $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            var $v_3 = $v_1[$v_2], $v_4 = $v_0.recurrenceDefaults[$v_3];
            if (!IsNull($v_4)) this.$2_0[$v_3] = $v_4
        }
        this.$F_0 = $v_0.$J_0
    },
    $1K_0: function() {
        this.$2_0 = {};
        this.$2_0["recurrencepatterntype"] = "1";
        this.$6_0.selectedIndex = 1;
        this.$w_0();
        this.$1J_0()
    },
    $1P_0: function() {
        this.get_$i_0().set_dataValue(this.$2_0["starttime"]);
        this.get_$o_0().set_dataValue(this.$2_0["endtime"]);
        if (!IsNull(this.$2_0["duration"]) && this.$2_0["duration"] !== "") {
            var $v_2 = parseInt(this.$2_0["duration"], 10);
            this.get_$n_0().set_dataValue($v_2)
        }
        skipInitialXMLValue = true;
        initDates();
        endTimeChanged();
        this.get_$C_0().set_dataValue(this.$2_0["patternstartdate"]);
        $get("rangeOption2_occurrences").value = this.$2_0["occurrences"];
        this.get_$Z_0().set_dataValue(this.$2_0["patternenddate"]);
        if (this.$F_0 < 1 || this.$F_0 > 3) this.$F_0 = 2;
        var $v_0 = "rad_recurrenceRangeOption" + this.$F_0.toString(), $v_1 = $get($v_0);
        Mscrm.Utilities.click($v_1)
    },
    $u_0: function() {
        this.$f_0 = $get("recurrencePatternSection");
        this.$E_0 = $get("recurrencePatDiv");
        this.$6_0 = $get("recurrencePatternType");
        this.$X_0 = $get("button_ok");
        this.$R_0 = $get("button_cancel");
        this.$H_0 = $get("button_endSeries");
        this.$h_0 = $get("rangeOption2_occurrences");
        this.$N_0 = new Array(7);
        for (var $v_0 = 0, $v_1 = 1;
            $v_0 < 7;
            $v_0++, $v_1 = $v_1 * 2
        ) this.$N_0[$v_0] = $get("chkWeekday" + $v_1.toString());
        this.$a_0 = new Array(4);
        for (var $v_2 = 0; $v_2 < 4; $v_2++) {
            this.$a_0[$v_2] = $get(this.$D_0[$v_2] + "Pattern");
            this.$a_0[$v_2].style.display = "none"
        }
        this.$5_0 = {};
        this.$5_0["dailyOption1"] = ["interval"];
        this.$5_0["dailyOption2"] = [];
        this.$5_0["dailyOption3"] = ["interval"];
        this.$5_0["weeklyOption1"] = ["interval"];
        this.$5_0["weeklyOption2"] = ["interval"];
        this.$5_0["monthlyOption1"] = ["dayofmonth", "interval"];
        this.$5_0["monthlyOption2"] = ["instance", "interval", "daysofweekmask"];
        this.$5_0["monthlyOption3"] = ["interval"];
        this.$5_0["yearlyOption1"] = ["interval"];
        this.$5_0["yearlyOption2"] = ["monthofyear", "dayofmonth"];
        this.$5_0["yearlyOption3"] = ["instance", "daysofweekmask", "monthofyear"];
        this.$5_0["yearlyOption4"] = ["interval"]
    },
    $z_0: function($p0, $p1) {
        for (var $v_0 = this.$D_0[$p0] + "Option" + $p1.toString(), $v_1 = this.$5_0[$v_0], $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            var $v_3 = $v_1[$v_2], $v_4 = $v_0 + "_" + $v_3, $v_5 = $get($v_4), $v_6 = $v_5.value;
            this.$1_0[$v_3] = $v_6
        }
    },
    $1V_0: function() {
        this.$1_0 = {};
        for (var $v_0 = Mscrm.RecurrenceProperties
                     .allProperties,
            $v_9 = 0;
            $v_9 < $v_0.length;
            $v_9++) this.$1_0[$v_0[$v_9]] = "";
        var $v_1 = this.get_$i_0().get_dataValue(),
            $v_2 = this.get_$o_0().get_dataValue(),
            $v_3 = this.get_$C_0().get_dataValue(),
            $v_4 = this.get_$Z_0().get_dataValue();
        if (IsNull($v_1) || IsNull($v_1) || IsNull($v_3) || IsNull($v_4)) return null;
        this.$1_0["starttime"] = FormatDateTime($v_1);
        this.$1_0["endtime"] = FormatDateTime($v_2);
        this.$1_0["duration"] = this.get_$n_0().get_dataValue();
        $v_3 = new Date($v_3.getFullYear(), $v_3.getMonth(), $v_3.getDate());
        $v_4 = new Date($v_4.getFullYear(), $v_4.getMonth(), $v_4.getDate());
        this.$1_0["patternstartdate"] = FormatDateTime($v_3);
        this.$1_0["isregenerate"] = 0;
        this.$1_0["isnthmonthly"] = 0;
        this.$1_0["isnthyearly"] = 0;
        this.$1_0["isweekdaypattern"] = 0;
        var $v_5 = this.$6_0.value;
        if ($v_5 === "3") {
            var $v_A = $get("yearlyOption2_monthofyear"), $v_B = parseInt($v_A.value, 10);
            this.$1_0["monthofyear"] = $v_B
        } else this.$1_0["monthofyear"] = 0;
        var $v_6 = this.$W_0("recurrenceRange", 3);
        if ($v_6 === 3) {
            this.$1_0["patternenddate"] = FormatDateTime($v_4);
            this.$1_0["occurrences"] = ""
        } else if ($v_6 !== 1) this.$1_0["occurrences"] = this.$h_0.value;
        this.$1_0["patternendtype"] = $v_6;
        var $v_7 = this.$6_0.selectedIndex;
        this.$1_0["recurrencepatterntype"] = $v_7;
        var $v_8 = this.$W_0(this.$D_0[$v_7] + "Pattern", 3);
        if ($v_8 === -1) $v_8 = 1;
        this.$z_0($v_7, $v_8);
        if ($v_7 === 0 && $v_8 === 2) {
            var $v_C = window._weekDays;
            this.$1_0["isweekdaypattern"] = 1;
            this.$1_0["recurrencepatterntype"] = 1;
            this.$1_0["daysofweekmask"] = $v_C
        }
        if ($v_7 === 1)
            if ($v_8 === 1) {
                for (var $v_D = 0, $v_E = 0, $v_F = 1;
                    $v_E < 7;
                    $v_E++, $v_F = $v_F * 2
                ) if (this.$N_0[$v_E].checked) $v_D = $v_D | $v_F;
                this.$1_0["daysofweekmask"] = $v_D.toString()
            } else this.$1_0["isregenerate"] = 1;
        if ($v_7 === 2) {
            if ($v_8 === 3) this.$1_0["isregenerate"] = 1;
            if ($v_8 === 2) this.$1_0["isnthmonthly"] = 1
        }
        if ($v_7 === 3) {
            this.$z_0($v_7, 1);
            if ($v_8 === 3) this.$1_0["isnthyearly"] = 1;
            if ($v_8 === 4) this.$1_0["isregenerate"] = 1
        }
        return this.$1_0
    },
    $M_0: function() {
        try {
            window.setTimeout(closeWindow, 5)
        } catch ($$e_0) {
        }
    },
    $W_0: function($p0, $p1) {
        for (var $v_0 = 1; $v_0 <= $p1; $v_0++) {
            var $v_1 = "rad_" + $p0 + "Option" + $v_0.toString(), $v_2 = $get($v_1);
            if (!IsNull($v_2)) if ($v_2.checked) return $v_0
        }
        return -1
    },
    $1A_0: function($p0) {
        if ($p0.toString() === "0") return 0;
        if ($p0.toString() === "1") return 1;
        if ($p0.toString() === "2") return 2;
        if ($p0.toString() === "3") return 3;
        return 4
    },
    $1b_0: function($p0) {
        this.$S_0 = false;
        if (IsNull($p0)) {
            Mscrm.RecurrenceDialog.$3(0);
            return
        }
        var $v_0 = IsNull($p0["isnthmonthly"]) ? false : $p0["isnthmonthly"],
            $v_1 = IsNull($p0["isnthyearly"]) ? false : $p0["isnthyearly"],
            $v_2 = IsNull($p0["isweekdaypattern"]) ? false : $p0["isweekdaypattern"];
        if (IsNull($p0["recurrencepatterntype"])) {
            Mscrm.RecurrenceDialog.$3(0);
            return
        }
        var $v_3 = $p0["recurrencepatterntype"], $v_4 = this.$1A_0($v_3);
        if (IsNull($p0["starttime"])) {
            Mscrm.RecurrenceDialog.$3(0);
            $get("scheduledstart").focus();
            return
        }
        if (IsNull($p0["endtime"])) {
            Mscrm.RecurrenceDialog.$3(0);
            $get("scheduledstart").focus();
            return
        }
        if (IsNull($p0["patternstartdate"])) {
            Mscrm.RecurrenceDialog.$3(0);
            $get("rangeOption1_patternstartdate").focus();
            return
        }
        if (IsNull($p0["patternenddate"])) {
            Mscrm.RecurrenceDialog.$3(0);
            $get("rangeOption3_patternenddate").focus();
            return
        }
        if (!$v_4) {
            var $v_6 = $get("dailyOption1_interval");
            if (!this.$I_0($v_6)) return
        }
        if ($v_4 === 1)
            if (!$v_2) {
                var $v_7 = $get("weeklyOption1_interval");
                if (!this.$I_0($v_7)) return;
                if (!Mscrm.RecurrenceDialog.$1a($p0["daysofweekmask"])) {
                    var $v_8 = Mscrm.DateTimeUtility.localDateTimeNow(),
                        $v_9 = Math.pow(2, $v_8.getDay()),
                        $v_A = $get("chkWeekday" + $v_9.toString());
                    $v_A.checked = true;
                    return
                }
            }
        if ($v_4 === 2)
            if (!$v_0) {
                if (!Mscrm.RecurrenceDialog.$11($p0["dayofmonth"], true)) {
                    $get("monthlyOption1_dayofmonthl").focus();
                    return
                }
                var $v_B = $get("monthlyOption1_interval");
                if (!this.$I_0($v_B)) return
            } else {
                var $v_C = $get("monthlyOption2_interval");
                if (!this.$I_0($v_C)) return
            }
        if ($v_4 === 3) {
            var $v_D = $get("yearlyOption1_interval");
            if (!this.$I_0($v_D)) return;
            if (!$v_1)
                if (!Mscrm.RecurrenceDialog.$12($p0["dayofmonth"], $p0["monthofyear"], true)) {
                    $get("yearlyOption2_dayofmonth").focus();
                    return
                }
        }
        var $v_5 = this.$W_0("recurrenceRange", 3);
        if ($v_5 === 3) {
            if (this.$v_0(true)) return
        } else if ($v_5 === 2)
            if (!this.$9_0) {
                var $v_E = this.$0_0["occurrences"],
                    $v_F = $p0["occurrences"],
                    $v_G = this.$0_0["recurrencepatterntype"],
                    $v_H = $p0["recurrencepatterntype"];
                if (parseInt($v_F) !== parseInt($v_E) || parseInt($v_G) !== parseInt($v_H)) this.$S_0 = true
            }
        this.$18_0();
        var $$t_J = this;
        window.setTimeout(function() { $$t_J.$1d_0($p0, $$t_J.$S_0) }, 100)
    },
    $v_0: function($p0) {
        var $v_0 = this.$W_0("recurrenceRange", 3);
        if ($v_0 !== 3) return false;
        else {
            var $v_1 = this.get_$C_0().get_dataValue();
            if (IsNull($v_1)) {
                Mscrm.RecurrenceDialog.$3(0);
                return false
            }
            $v_1 = new Date($v_1.getFullYear(), $v_1.getMonth(), $v_1.getDate());
            var $v_2 = this.get_$Z_0().get_dataValue();
            if (IsNull($v_2)) {
                Mscrm.RecurrenceDialog.$3(0);
                return false
            }
            var $v_3 = $v_1.getTime(), $v_4 = $v_2.getTime();
            if ($v_3 > $v_4) {
                var $v_5 = new Mscrm.RecurrenceProperties;
                if ($p0) Mscrm.RecurrenceDialog.$3(8);
                else Mscrm.RecurrenceDialog.$3(9);
                return true
            }
        }
        return false
    },
    $1Y_0: function($p0) {
        var $v_0 = this.get_$C_0().get_dataValue();
        if (IsNull($v_0)) {
            Mscrm.RecurrenceDialog.$3(0);
            return false
        }
        $v_0 = new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate());
        var $v_1 = this.get_$Z_0().get_dataValue();
        if (IsNull($v_1)) {
            Mscrm.RecurrenceDialog.$3(0);
            return false
        }
        this.$v_0($p0);
        var $v_2 = window._pastExpansionWindow, $v_3 = Mscrm.DateTimeUtility.today(), $v_4 = $v_3.getTime();
        if ($p0) {
            if (!IsNull($v_2)) {
                var $v_5 = Mscrm.DateTimeUtility.localDateTimeNow(), $v_6 = $v_5.getMonth();
                $v_6 = $v_6 - $v_2;
                var $v_7 = new Date($v_5.getFullYear(), $v_6, $v_5.getDate()),
                    $v_8 = $v_0.getTime(),
                    $v_9 = $v_7.getTime();
                if ($v_8 < $v_9) {
                    var $v_A = new Date($v_7.getFullYear(), $v_7.getMonth(), $v_7.getDate() - 1),
                        $v_B = window.LOCID_RDIALOG_STARTDTERROR;
                    alert(String.format($v_B,
                        Mscrm.DateTimeUtility.formatDate($v_7),
                        Mscrm.DateTimeUtility.formatDate($v_A)));
                    this.get_$C_0().set_dataValue($v_7)
                } else if (!this.$9_0) {
                    var $v_C = this.$0_0["patternstartdate"], $v_D = $v_C.getTime();
                    if ($v_8 <= $v_4 && $v_D < $v_4) {
                        Mscrm.RecurrenceDialog.$3(15);
                        this.get_$C_0().set_dataValue($v_C)
                    }
                }
            }
        } else if (!this.$9_0) {
            var $v_E = this.$0_0["patternenddate"], $v_F = $v_E.getTime(), $v_G = $v_1.getTime();
            if ($v_G < $v_4 && $v_F !== $v_G) {
                Mscrm.RecurrenceDialog.$3(15);
                this.get_$C_0().set_dataValue($v_E)
            }
        }
        return true
    },
    $I_0: function($p0) {
        var $v_0 = $p0,
            $v_1 = Number.parseInvariant($v_0.attributes.getNamedItem("max").value),
            $v_2 = Number.parseInvariant($v_0.attributes.getNamedItem("min").value),
            $v_3 = Mscrm.RecurrenceDialog.$y($v_0.value);
        if (!Mscrm.RecurrenceDialog.$j($v_3, $v_2, $v_1, null)) {
            $v_0.value = $v_2.toString();
            var $$t_5 = this;
            window.setTimeout(function() { $v_0.focus() }, 10);
            var $$t_6 = this;
            window.setTimeout(function() { $v_0.select() }, 10);
            return false
        }
        $v_0.value = Mscrm.RecurrenceDialog.$x($v_3);
        return true
    },
    $1T_0: function() {
        $removeHandler(this.$6_0, "change", this.$$d_$1D_0);
        $removeHandler(this.$X_0, "click", this.$$d_$t_0);
        $removeHandler(this.$R_0, "click", this.$$d_$1C_0);
        $removeHandler(this.$H_0, "click", this.$$d_$s_0);
        $removeHandler(document, "keydown", this.$$d_$1M_0)
    }
};
Mscrm.RecurrenceProperties = function() { this.initialize() };
Mscrm.RecurrenceProperties.prototype = {
    compareProperties: function(a, b, propertyName) {
        var $v_0 = IsNull(a), $v_1 = IsNull(b);
        if ($v_0 !== $v_1) return false;
        if ($v_0) return true;
        var $v_2 = this.recurrenceTypes[propertyName];
        if ($v_2 === 2) return a.toString().toUpperCase() === b.toString().toUpperCase();
        if ($v_2 === 1) {
            var $v_3 = typeof a === "string" ? ParseUtcDate(a) : a, $v_4 = typeof b === "string" ? ParseUtcDate(b) : b;
            return $v_3.toString().toUpperCase() === $v_4.toString().toUpperCase()
        }
        return false
    },
    recurrenceDefaults: null,
    recurrenceTypes: null,
    get_defaultEndRecurrenceRange: function() { return this.$J_0 },
    initialize: function() {
        this.recurrenceDefaults = {};
        this.$1F_0();
        this.recurrenceTypes = {};
        this.$1H_0()
    },
    $1F_0: function() {
        var $v_0 = Mscrm.DateTimeUtility.localDateTimeNow();
        this.recurrenceDefaults["interval"] = 1;
        this.recurrenceDefaults["monthofyear"] = $v_0.getMonth() + 1;
        var $v_1 = $v_0.getDate();
        this.recurrenceDefaults["dayofmonth"] = $v_1;
        this.recurrenceDefaults["daysofweekmask"] = Math.pow(2, $v_0.getDay());
        var $v_2 = Math.ceil($v_1 / 7);
        $v_2 = Math.min($v_2, 5);
        this.recurrenceDefaults["instance"] = $v_2;
        this.recurrenceDefaults["isnthmonthly"] = 0;
        this.recurrenceDefaults["isnthyearly"] = 0;
        this.recurrenceDefaults["isweekdaypattern"] = 0;
        this.recurrenceDefaults["patternstartdate"] = $v_0;
        this.recurrenceDefaults["patternenddate"] = new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate() + 60);
        this.recurrenceDefaults["occurrences"] = window._defaultOccurrences;
        var $v_3 = $v_0.getMinutes(), $v_4 = $v_0.getHours();
        if ($v_3 < 30) $v_3 = 30;
        else {
            $v_3 = 0;
            $v_4++
        }
        this.recurrenceDefaults["starttime"] = new Date($v_0
            .getFullYear(),
            $v_0.getMonth(),
            $v_0.getDate(),
            $v_4,
            $v_3);
        this.recurrenceDefaults["endtime"] = new Date($v_0.getFullYear(),
            $v_0.getMonth(),
            $v_0.getDate(),
            $v_4,
            $v_3 + 30);
        this.$J_0 = window._defaultRecurrenceEndRangeType;
        this.recurrenceDefaults["patternendtype"] = this.$J_0
    },
    $1H_0: function() {
        this.recurrenceTypes["endtime"] = 1;
        this.recurrenceTypes["interval"] = 2;
        this.recurrenceTypes["monthofyear"] = 2;
        this.recurrenceTypes["effectiveenddate"] = 1;
        this.recurrenceTypes["daysofweekmask"] = 2;
        this.recurrenceTypes["starttime"] = 1;
        this.recurrenceTypes["occurrences"] = 2;
        this.recurrenceTypes["isnthmonthly"] = 2;
        this.recurrenceTypes["isnthyearly"] = 2;
        this.recurrenceTypes["isweekdaypattern"] = 2;
        this.recurrenceTypes["effectivestartdate"] = 1;
        this.recurrenceTypes["dayofmonth"] = 2;
        this.recurrenceTypes["isregenerate"] = 2;
        this.recurrenceTypes["duration"] = 2;
        this.recurrenceTypes["recurrencepatterntype"] = 2;
        this.recurrenceTypes["instance"] = 2;
        this.recurrenceTypes["patternenddate"] = 1;
        this.recurrenceTypes["patternstartdate"] = 1;
        this.recurrenceTypes["firstdayofweek"] = 2;
        this.recurrenceTypes["patternendtype"] = 2
    },
    $J_0: 0
};
Mscrm.PatternOptionsContainerControl.registerClass("Mscrm.PatternOptionsContainerControl", Mscrm.CrmUIControl);
Mscrm.RecurrenceDialogLoader.registerClass("Mscrm.RecurrenceDialogLoader");
Mscrm.RecurrenceDialog.registerClass("Mscrm.RecurrenceDialog");
Mscrm.RecurrenceProperties.registerClass("Mscrm.RecurrenceProperties");
Mscrm.RecurrenceDialog.$G = null;
Mscrm.RecurrenceDialog.$4 = null;
Mscrm.RecurrenceProperties.allProperties = [
    "endtime", "interval", "monthofyear", "effectiveenddate", "daysofweekmask", "starttime", "occurrences",
    "isnthmonthly", "isnthyearly", "isweekdaypattern", "effectivestartdate", "dayofmonth", "isregenerate", "duration",
    "recurrencepatterntype", "instance", "patternenddate", "patternstartdate", "firstdayofweek", "patternendtype"
];
Mscrm.RecurrenceProperties.patternTypeProperties = [
    "interval", "monthofyear", "daysofweekmask", "isnthmonthly", "isnthyearly", "isweekdaypattern", "dayofmonth",
    "isregenerate", "recurrencepatterntype", "instance", "firstdayofweek"
];
Mscrm.RecurrenceProperties.rangeProperties = [
    "endtime", "starttime", "duration", "occurrences", "patternenddate", "patternstartdate", "patternendtype"
];
Mscrm.RecurrenceProperties.otherProperties = ["effectiveenddate", "effectivestartdate"]