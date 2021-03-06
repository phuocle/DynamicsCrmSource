Type.registerNamespace("Mscrm");
Mscrm.TimerControl = function(element) {
    this.$$d_$i_3 = Function.createDelegate(this, this.$i_3);
    this.$$d_$g_3 = Function.createDelegate(this, this.$g_3);
    Mscrm.TimerControl.initializeBase(this, [element]);
    this.initialize()
};
Mscrm.TimerControl.prototype = {
    $5_3: null,
    $Q_3: null,
    $R_3: null,
    $M_3: null,
    $N_3: null,
    $T_3: null,
    $U_3: null,
    $K_3: null,
    $L_3: null,
    $O_3: null,
    $P_3: null,
    $4_3: null,
    $G_3: null,
    $9_3: null,
    $H_3: null,
    $8_3: null,
    $D_3: null,
    $B_3: null,
    $A_3: null,
    $S_3: 0,
    $6_3: 0,
    $F_3: 0,
    $3_3: false,
    $7_3: false,
    $2_3: null,
    $0_3: null,
    $C_3: null,
    $1_3: null,
    $E_3: null,
    get_isQuickViewForm: function() { return Mscrm.TimerControl.$X },
    set_isQuickViewForm: function(value) {
        Mscrm.TimerControl.$X = value;
        return value
    },
    get_oldViewObject: function() { return this.$C_3 },
    set_oldViewObject: function(value) {
        this.$C_3 = value;
        return value
    },
    get_failureDateTime: function() { return this.$A_3 },
    set_failureDateTime: function(value) {
        this.$A_3 = value;
        return value
    },
    get_failureDateTimeUtcString: function() { return this.$4_3 },
    set_failureDateTimeUtcString: function(value) {
        this.$4_3 = value;
        return value
    },
    get_failureTimeField: function() { return this.$5_3 },
    set_failureTimeField: function(value) {
        this.$5_3 = value;
        return value
    },
    get_successConditionName: function() { return this.$Q_3 },
    set_successConditionName: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_failureConditionValue: function() { return this.$N_3 },
    set_failureConditionValue: function(value) {
        this.$N_3 = value;
        return value
    },
    get_failureConditionName: function() { return this.$M_3 },
    set_failureConditionName: function(value) {
        this.$M_3 = value;
        return value
    },
    get_successConditionValue: function() { return this.$R_3 },
    set_successConditionValue: function(value) {
        this.$R_3 = value;
        return value
    },
    get_warningConditionName: function() { return this.$T_3 },
    set_warningConditionName: function(value) {
        this.$T_3 = value;
        return value
    },
    get_warningConditionValue: function() { return this.$U_3 },
    set_warningConditionValue: function(value) {
        this.$U_3 = value;
        return value
    },
    get_cancelConditionName: function() { return this.$K_3 },
    set_cancelConditionName: function(value) {
        this.$K_3 = value;
        return value
    },
    get_cancelConditionValue: function() { return this.$L_3 },
    set_cancelConditionValue: function(value) {
        this.$L_3 = value;
        return value
    },
    get_timeDifferenceInSeconds: function() { return this.$6_3 },
    set_timeDifferenceInSeconds: function(value) {
        this.$6_3 = value;
        return value
    },
    get_serverOffset: function() { return this.$F_3 },
    set_serverOffset: function(value) {
        this.$F_3 = value;
        return value
    },
    get_pauseConditionName: function() { return this.$O_3 },
    set_pauseConditionName: function(value) {
        this.$O_3 = value;
        return value
    },
    get_pauseConditionValue: function() { return this.$P_3 },
    set_pauseConditionValue: function(value) {
        this.$P_3 = value;
        return value
    },
    get_timeRemainingInMilliseconds: function() { return this.$S_3 },
    set_timeRemainingInMilliseconds: function(value) {
        this.$S_3 = value;
        return value
    },
    get_formDataEntityId: function() { return this.$2_3 },
    set_formDataEntityId: function(value) {
        this.$2_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$g_3, 2)
    },
    $g_3: function() {
        var $v_0 = window._timeDifferenceInSeconds,
            $v_1 = window._severOffset,
            $v_2 = window._serverUtcTimesXml,
            $v_3 = window._targetRecordId;
        this.$1_3 = $find(this.$2_3);
        if (IsNull($v_0) || IsNull($v_1) || IsNull($v_2) || $v_3 !== this.$1_3.get_recordId()) {
            var $v_4 = new RemoteCommand("DateTimeService", "GetCurrentServerDateTimeInUtc");
            $v_4.SetParameter("entityName", this.$1_3.get_typeName());
            $v_4.SetParameter("entityId", this.$1_3.get_recordId());
            var $v_5 = $v_4.Execute();
            if ($v_5.Success && $v_5.ReturnValue) {
                var $v_6 = "Times",
                    $v_7 = XUI.Xml.LoadXml($v_5.ReturnValue),
                    $v_8 = XUI.Xml.SelectSingleNode($v_7, $v_6, null);
                if ($v_8) {
                    var $v_9 = this.$J_3($v_8, "ServerTime");
                    this.$F_3 = Number.parseInvariant(this.$J_3($v_8, "Offset").toString());
                    var $v_A = new Date, $v_B = new Date($v_9);
                    if ($v_B.toString() === "NaN" && Mscrm.Utilities.isIE8OrLower()) {
                        $v_9 = this.$J_3($v_8, "ServerTimeForIE8");
                        $v_B = new Date($v_9)
                    }
                    this.$6_3 = Math.floor((Date.parse($v_A.toUTCString()) - Date.parse($v_B.toUTCString())) / 1e3);
                    this.$4_3 = this.$J_3($v_8, this.$5_3)
                }
            }
            setAttributeInWindow("_timeDifferenceInSeconds", this.$6_3.toString());
            setAttributeInWindow("_severOffset", this.$F_3.toString());
            setAttributeInWindow("_serverUtcTimesXml", $v_5.ReturnValue);
            setAttributeInWindow("_targetRecordId", this.$1_3.get_recordId())
        } else {
            this.$6_3 = Number.parseInvariant($v_0.toString());
            this.$F_3 = Number.parseInvariant($v_1.toString());
            var $v_C = "Times",
                $v_D = XUI.Xml.LoadXml($v_2.toString()),
                $v_E = XUI.Xml.SelectSingleNode($v_D, $v_C, null);
            if ($v_E) this.$4_3 = this.$J_3($v_E, this.$5_3)
        }
        this.$b_3();
        this.$c_3();
        this.$a_3()
    },
    $J_3: function($p0, $p1) {
        var $v_0 = null;
        if (!IsNull($p0)) if ($p0.attributes.getNamedItem($p1)) $v_0 = $p0.attributes.getNamedItem($p1).nodeValue;
        return $v_0
    },
    $a_3: function() {
        var $v_0 = this.$h_3();
        $v_0.render();
        Mscrm.Utilities.isRefreshForm() && this.$j_3($v_0, this.get_element())
    },
    $c_3: function() {
        this.$I_3(this.$B_3);
        this.$I_3(this.$G_3);
        this.$I_3(this.$9_3);
        this.$I_3(this.$8_3);
        this.$I_3(this.$H_3);
        this.$I_3(this.$D_3);
        if ("PrimaryEntity" === this.$2_3) this.$e_3();
        else this.$d_3()
    },
    $e_3: function() { Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(this.$$d_$i_3) },
    $k_3: function() {
        !Mscrm.InlineEditDataService.get_dataService().get_isDisposed() &&
            Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(this.$$d_$i_3)
    },
    $i_3: function($p0, $p1) {
        this.$Y_3();
        this.refresh()
    },
    $d_3: function() {
        var $v_0 = $find(this.$2_3), $$t_2 = this;
        this.$E_3 = function($p1_0) {
            $$t_2.$Y_3();
            $$t_2.refresh()
        };
        $v_0 && $v_0.addOnRecordIdChanged(this.$E_3, false)
    },
    $I_3: function($p0) {
        if (!IsNull($p0)) {
            var $$t_2 = this;
            $p0.addOnChange(function($p1_0) {
                "PrimaryEntity" !== $$t_2.$2_3 && $p0 === $$t_2.$B_3 && $$t_2.$Y_3();
                $$t_2.refresh()
            })
        }
    },
    $Z_3: function($p0) {
        if (!$p0) this.$3_3 = true;
        else this.$3_3 = false
    },
    $V_3: function($p0, $p1) {
        if (!isNullOrEmptyString($p0) && !this.$3_3) {
            this.$1_3 = $find(this.$2_3);
            var $v_0 = this.$1_3.get_attributes().get($p0);
            $p1.val = $v_0;
            this.$Z_3($p1.val);
            if (!this.$3_3) {
                var $v_1 = new Xrm.FormDataAttributePrivilege($v_0.get_userPrivilegeMask());
                if (!$v_1.canRead) this.$7_3 = false
            }
        }
        return !this.$3_3 && this.$7_3
    },
    $Y_3: function() {
        var $v_0 = new RemoteCommand("DateTimeService", "RetrieveDateTimeAttributesInUtc");
        $v_0.SetParameter("entityName", this.$1_3.get_typeName());
        $v_0.SetParameter("entityId", this.$1_3.get_recordId());
        var $v_1 = $v_0.Execute();
        if ($v_1.Success && $v_1.ReturnValue) {
            var $v_2 = "AttributeUtcTimes",
                $v_3 = XUI.Xml.LoadXml($v_1.ReturnValue),
                $v_4 = XUI.Xml.SelectSingleNode($v_3, $v_2, null);
            if ($v_4) this.$4_3 = this.$J_3($v_4, this.$5_3)
        }
    },
    $f_3: function() {
        this.$1_3 = $find(this.$2_3);
        if (!IsNull(this.$1_3)) this.$1_3.get_id().startsWith("qf_fde_") && this.set_isQuickViewForm(true);
        var $v_0 = this.$1_3.get_attributes().get(this.$5_3);
        this.$B_3 = $v_0;
        this.$Z_3(this.$B_3);
        if (!this.$3_3) {
            var $v_1 = new Xrm.FormDataAttributePrivilege($v_0.get_userPrivilegeMask());
            if (!$v_1.canRead) this.$7_3 = false
        }
        return !this.$3_3 && this.$7_3
    },
    $b_3: function() {
        this.$7_3 = true;
        var $$t_0, $$t_1, $$t_2, $$t_3, $$t_4, $$t_5, $$t_6, $$t_7, $$t_8, $$t_9;
        if (($$t_1 = this.$V_3(this.$Q_3, $$t_0 = { val: this.$G_3 }), this.$G_3 = $$t_0.val, $$t_1) &&
            ($$t_3 = this.$V_3(this.$T_3, $$t_2 = { val: this.$H_3 }), this.$H_3 = $$t_2.val, $$t_3) &&
            ($$t_5 = this.$V_3(this.$M_3, $$t_4 = { val: this.$9_3 }), this.$9_3 = $$t_4.val, $$t_5) &&
            ($$t_7 = this.$V_3(this.$K_3, $$t_6 = { val: this.$8_3 }), this.$8_3 = $$t_6.val, $$t_7) &&
            ($$t_9 = this.$V_3(this.$O_3, $$t_8 = { val: this.$D_3 }), this.$D_3 = $$t_8.val, $$t_9) &&
            this.$f_3()) {
            this.$A_3 = this.$B_3.getValue();
            !IsNull(this.$A_3) && !isNullOrEmptyString(Xrm.Page.data.entity.getId()) && this.$l_3()
        }
    },
    $l_3: function() {
        var $v_0 = new Date;
        $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset());
        var $v_1 = $v_0.toUTCString();
        this.$S_3 = Date.parse(this.$4_3) - Date.parse($v_1) + this.$6_3 * 1e3
    },
    $W_3: function($p0) { return $p0.getValue().toString() },
    $h_3: function() {
        if (!this.$7_3) this.$0_3 = new Mscrm.InlineTimerControlNoPrivilegeView(this);
        else if (IsNull(this
                .$A_3) ||
            isNullOrEmptyString(this.$4_3) ||
            this.$3_3) this.$0_3 = new Mscrm.InlineTimerControlNotSetView(this);
        else if (!isNullOrEmptyString(this.$M_3) &&
            !isNullOrEmptyString(this.$N_3) &&
            !IsNull(this.$9_3.getValue()) &&
            this.$N_3 === this.$W_3(this.$9_3)) this.$0_3 = new Mscrm.InlineTimerControlFailureView(this);
        else if (!isNullOrEmptyString(this.$K_3) &&
            !isNullOrEmptyString(this.$L_3) &&
            !IsNull(this.$8_3.getValue()) &&
            this.$L_3 === this.$W_3(this.$8_3)) this.$0_3 = new Mscrm.InlineTimerControlCanceledView(this);
        else if (!isNullOrEmptyString(this.$Q_3) &&
            !isNullOrEmptyString(this.$R_3) &&
            !IsNull(this.$G_3.getValue()) &&
            this.$R_3 === this.$W_3(this.$G_3)) this.$0_3 = new Mscrm.InlineTimerControlSuccessView(this);
        else if (!isNullOrEmptyString(this.$O_3) &&
            !isNullOrEmptyString(this.$P_3) &&
            !IsNull(this.$D_3.getValue()) &&
            this.$P_3 === this.$W_3(this.$D_3)) this.$0_3 = new Mscrm.InlineTimerControlPausedView(this);
        else if (this.$S_3 > 0)
            if (!isNullOrEmptyString(this.$T_3) &&
                !isNullOrEmptyString(this.$U_3) &&
                !IsNull(this.$H_3.getValue()) &&
                this.$U_3 === this.$W_3(this.$H_3)) this.$0_3 = new Mscrm.InlineTimerControlWarningView(this);
            else this.$0_3 = new Mscrm.InlineTimerControlInProgressView(this);
        else this.$0_3 = new Mscrm.InlineTimerControlViolatedView(this);
        return this.$0_3
    },
    $j_3: function($p0, $p1) {
        var $v_0 = Xrm.Page.ui;
        if (IsNull($v_0.controls)) $v_0.controls = new Xrm.XrmControls;
        $v_0.controls.add($p0);
        Mscrm.InlineEditInitializerUtility.associateControlWithParentSection($p1, $p0)
    },
    refresh: function() {
        if (!IsNull(this.$0_3)) {
            var $v_0 = Xrm.Page.ui;
            !IsNull($v_0.controls) && $v_0.controls.remove(this.$0_3);
            this.$0_3.dispose();
            this.$0_3 = null
        }
        if (!IsNull(this.$C_3)) {
            this.$C_3.dispose();
            this.$C_3 = null
        }
        this.$b_3();
        this.$a_3()
    },
    dispose: function() {
        var $v_0 = $find(this.$2_3);
        if ($v_0 && !IsNull(this.$E_3)) {
            $v_0.removeOnRecordIdChanged(this.$E_3);
            this.$E_3 = null
        }
        this.$k_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.TimerControl.registerClass("Mscrm.TimerControl", Mscrm.CrmUIControl);
Mscrm.TimerControl.$X = false