Type.registerNamespace("Mscrm");
Mscrm.FrequencyControl = function(element) {
    this.$$d_$v_3 = Function.createDelegate(this, this.$v_3);
    this.$$d_$x_3 = Function.createDelegate(this, this.$x_3);
    this.$$d_$w_3 = Function.createDelegate(this, this.$w_3);
    this.$$d_$12_3 = Function.createDelegate(this, this.$12_3);
    this.$$d_$g_3 = Function.createDelegate(this, this.$g_3);
    this.$f_3 = -1;
    this.$7_3 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Mscrm.FrequencyControl.initializeBase(this, [element])
};
Mscrm.FrequencyControl.prototype = {
    $P_3: null,
    $U_3: null,
    $d_3: null,
    $b_3: null,
    $a_3: null,
    $e_3: null,
    $c_3: null,
    $S_3: null,
    $A_3: null,
    $5_3: null,
    $B_3: null,
    $6_3: null,
    $M_3: null,
    $T_3: null,
    $N_3: null,
    $R_3: null,
    $4_3: null,
    $3_3: null,
    $2_3: null,
    $9_3: null,
    $0_3: null,
    $F_3: null,
    $G_3: null,
    $H_3: null,
    $I_3: null,
    $J_3: null,
    $K_3: null,
    $L_3: null,
    $D_3: null,
    $C_3: null,
    $8_3: null,
    $Y_3: null,
    get_weekStartDayIndex: function() { return this.$f_3 },
    set_weekStartDayIndex: function(value) {
        this.$f_3 = value;
        return value
    },
    get_scheduleDefinitionXml: function() { return this.$U_3 },
    set_scheduleDefinitionXml: function(value) {
        this.$U_3 = value;
        return value
    },
    get_dataXml: function() { return this.$p_3() },
    get_frequency: function() { return this.$W_3() },
    get_startDate: function() { return this.$r_3() },
    set_startDate: function(value) {
        this.$1B_3(value);
        return value
    },
    get_endDate: function() { return this.$l_3() },
    set_endDate: function(value) {
        this.$s_3(value);
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Sys.Application.add_load(this.$$d_$g_3)
    },
    $g_3: function($p0, $p1) {
        this.$d_3 = $get("Freq_spanOnce", this.get_element());
        this.$b_3 = $get("Freq_spanHourly", this.get_element());
        this.$a_3 = $get("Freq_spanDaily", this.get_element());
        this.$e_3 = $get("Freq_spanWeekly", this.get_element());
        this.$c_3 = $get("Freq_spanMonthly", this.get_element());
        this.$S_3 = $get("Freq_roOnce", this.get_element());
        this.$A_3 = $get("Freq_roHourly", this.get_element());
        this.$5_3 = $get("Freq_roDaily", this.get_element());
        this.$B_3 = $get("Freq_roWeekly", this.get_element());
        this.$6_3 = $get("Freq_roMonthly", this.get_element());
        this.$M_3 = $get("Freq_roDayXEveryMonth", this.get_element());
        this.$T_3 = $get("Freq_roXYEveryMonth", this.get_element());
        this.$N_3 = $get("Freq_roEveryXDays", this.get_element());
        this.$R_3 = $get("Freq_roEveryWeekday", this.get_element());
        this.$4_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_numMinutes");
        this.$3_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_numHours");
        this.$2_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_numDays");
        this.$9_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_numWeeks");
        this.$0_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_numMonthlyDay");
        this.$F_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_cbWeekly0");
        this.$G_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_cbWeekly1");
        this.$H_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_cbWeekly2");
        this.$I_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_cbWeekly3");
        this.$J_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_cbWeekly4");
        this.$K_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_cbWeekly5");
        this.$L_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_cbWeekly6");
        this.$D_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_selMonthlyOrdinal");
        this.$C_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_selMonthlyDay");
        this.$8_3 = Mscrm.FormControlInputBehavior.GetBehavior("Freq_dtStartTime");
        this.$Y_3 = document.getElementsByName("Freq_radFrequency");
        this.$4_3.add_dataValueChanged(this.$$d_$12_3);
        this.$3_3.add_dataValueChanged(this.$$d_$12_3);
        this.$2_3.add_dataValueChanged(this.$$d_$12_3);
        this.$9_3.add_dataValueChanged(this.$$d_$12_3);
        this.$0_3.add_dataValueChanged(this.$$d_$12_3);
        $addHandler(this.$S_3, "click", this.$$d_$w_3);
        $addHandler(this.$A_3, "click", this.$$d_$w_3);
        $addHandler(this.$5_3, "click", this.$$d_$w_3);
        $addHandler(this.$B_3, "click", this.$$d_$w_3);
        $addHandler(this.$6_3, "click", this.$$d_$w_3);
        $addHandler(this.$M_3, "click", this.$$d_$x_3);
        $addHandler(this.$T_3, "click", this.$$d_$x_3);
        $addHandler(this.$N_3, "click", this.$$d_$v_3);
        $addHandler(this.$R_3, "click", this.$$d_$v_3);
        var $v_0 = new Date;
        this.$u_3(new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate()));
        this.$19_3();
        this.$x_3(null);
        this.$v_3(null);
        this.$w_3(null)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        for (var $v_0 = [this.$4_3, this.$3_3, this.$2_3, this.$9_3, this.$0_3],
            $$arr_1 = $v_0,
            $$len_2 = $$arr_1.length,
            $$idx_3 = 0;
            $$idx_3 < $$len_2;
            ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            $v_1 && !$v_1.get_isDisposed() && $v_1.remove_dataValueChanged(this.$$d_$12_3)
        }
        $removeHandler(this.$S_3, "click", this.$$d_$w_3);
        $removeHandler(this.$A_3, "click", this.$$d_$w_3);
        $removeHandler(this.$5_3, "click", this.$$d_$w_3);
        $removeHandler(this.$B_3, "click", this.$$d_$w_3);
        $removeHandler(this.$6_3, "click", this.$$d_$w_3);
        $removeHandler(this.$M_3, "click", this.$$d_$x_3);
        $removeHandler(this.$T_3, "click", this.$$d_$x_3);
        $removeHandler(this.$N_3, "click", this.$$d_$v_3);
        $removeHandler(this.$R_3, "click", this.$$d_$v_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $w_3: function($p0) {
        this.$d_3.style.display = "none";
        this.$b_3.style.display = "none";
        this.$a_3.style.display = "none";
        this.$e_3.style.display = "none";
        this.$c_3.style.display = "none";
        var $v_0 = null;
        switch (this.$W_3()) {
        case 0:
            $v_0 = this.$d_3;
            break;
        case 1:
            $v_0 = this.$b_3;
            break;
        case 2:
            $v_0 = this.$a_3;
            break;
        case 3:
            $v_0 = this.$e_3;
            break;
        case 4:
            $v_0 = this.$c_3;
            break
        }
        if (!IsNull($v_0)) $v_0.style.display = "inline"
    },
    $x_3: function($p0) {
        this.$0_3.set_disabled(true);
        this.$D_3.set_disabled(true);
        this.$C_3.set_disabled(true);
        if (!this.$m_3()) this.$0_3.set_disabled(false);
        else {
            this.$D_3.set_disabled(false);
            this.$C_3.set_disabled(false)
        }
        this.get_isInitialized() && this.$6_3.checked && this.SetFocus()
    },
    $v_3: function($p0) {
        this.$2_3.set_disabled(this.$k_3() === 1);
        this.get_isInitialized() && this.$5_3.checked && this.SetFocus()
    },
    $12_3: function($p0, $p1) {
        var $v_0 = $p0;
        IsNull($v_0.get_dataValue()) && $v_0.set_dataValue($v_0.get_min())
    },
    IsValid: function() {
        if (this.$A_3.checked && !this.$3_3.get_dataValue() && !this.$4_3.get_dataValue()) {
            alert(window.LOCID_INVALID_MINUTES_INTERVAL);
            return false
        }
        var $v_0 = this.$F_3.get_dataValue() ||
            this.$G_3.get_dataValue() ||
            this.$H_3.get_dataValue() ||
            this.$I_3.get_dataValue() ||
            this.$J_3.get_dataValue() ||
            this.$K_3.get_dataValue() ||
            this.$L_3.get_dataValue();
        if (this.$B_3.checked && !$v_0) {
            alert(window.LOCID_FREQ_MUST_SELECT_DAYS);
            return false
        }
        return true
    },
    SetFocus: function() {
        switch (this.$W_3()) {
        case 0:
            this.$S_3.focus();
            break;
        case 1:
            this.$A_3.focus();
            break;
        case 2:
            this.$5_3.focus();
            break;
        case 3:
            this.$B_3.focus();
            break;
        case 4:
            this.$6_3.focus();
            break
        }
    },
    GetFrequencySummary: function() {
        var $v_0 = window.LOCID_FREQ_ONCE_SUMMARY;
        switch (this.$W_3()) {
        case 1:
            $v_0 = String.format(window.LOCID_FREQ_HOURLY_SUMMARY,
                this.$3_3.get_dataValue().toString(),
                this.$4_3.get_dataValue().toString());
            break;
        case 2:
            if (!this.$k_3())
                $v_0 = String.format(window.LOCID_FREQ_EVERYXDAYS_SUMMARY, this.$2_3.get_dataValue().toString());
            else $v_0 = window.LOCID_FREQ_EVERYWEEKDAY_SUMMARY;
            break;
        case 3:
            for (var $v_1 = Sys.CultureInfo.CurrentCulture.dateTimeFormat["DayNames"],
                $v_2 = [
                    this.$F_3.get_dataValue(), this.$G_3.get_dataValue(), this.$H_3.get_dataValue(), this.$I_3
                    .get_dataValue(), this.$J_3.get_dataValue(), this.$K_3.get_dataValue(), this.$L_3.get_dataValue()
                ],
                $v_3 = "",
                $v_4 = 0,
                $v_5 = $v_1.length;
                $v_4 < $v_5;
                ++$v_4) {
                var $v_6 = (this.$f_3 + $v_4) % $v_2.length;
                if ($v_2[$v_6]) $v_3 += $v_1[$v_6] + window.LOCID_FREQ_DAY_SEPARATOR
            }
            $v_3 = $v_3.substring(0, $v_3.length - window.LOCID_FREQ_DAY_SEPARATOR.length);
            $v_0 = String.format(window.LOCID_FREQ_WEEKLY_SUMMARY, this.$9_3.get_dataValue().toString(), $v_3);
            break;
        case 4:
            if (!this.$m_3())
                $v_0 = String.format(window.LOCID_FREQ_DAYXMONTHLY_SUMMARY, this.$0_3.get_dataValue().toString());
            else
                $v_0 = String.format(window.LOCID_FREQ_XYMONTHLY_SUMMARY,
                    this.$D_3.get_selectedText(),
                    this.$C_3.get_selectedText());
            break
        }
        return $v_0
    },
    $W_3: function() {
        for (var $v_0 = 0, $v_1 = this.$Y_3.length; $v_0 < $v_1; ++$v_0) {
            var $v_2 = this.$Y_3[$v_0];
            if ($v_2.checked) return parseInt($v_2.value)
        }
        return -1
    },
    $k_3: function() { return this.$N_3.checked ? 0 : 1 },
    $m_3: function() { return this.$M_3.checked ? 0 : 1 },
    $1B_3: function($p0) {
        var $v_0 = this.$8_3.get_dataValueAsDate();
        this.$8_3.set_dataValueAsDate(new Date($p0.getFullYear(),
            $p0.getMonth(),
            $p0.getDate(),
            $v_0.getHours(),
            $v_0.getMinutes(),
            $v_0.getSeconds(),
            $v_0.getMilliseconds()))
    },
    $r_3: function() { return this.$8_3.get_dataValueAsDate() },
    $u_3: function($p0) {
        this.$8_3.set_dataValueAsDate($p0);
        this.$8_3.set_initialValue($p0)
    },
    $s_3: function($p0) {
        if (IsNull($p0)) this.$P_3 = null;
        else {
            $p0 = new Date($p0.getTime());
            this.$P_3 = new Date($p0.getFullYear(), $p0.getMonth(), $p0.getDate())
        }
    },
    $l_3: function() { return IsNull(this.$P_3) ? null : new Date(this.$P_3.getTime()) },
    $19_3: function() {
        if (isNullOrEmptyString(this.$U_3)) return;
        for (var $v_0 = XUI.Xml.LoadXml(this.$U_3),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "/CrmScheduleDefinition", null),
            $v_2 = $v_1.childNodes,
            $v_3 = 0,
            $v_4 = $v_2.length;
            $v_3 < $v_4;
            ++$v_3) {
            var $v_5 = $v_2[$v_3];
            switch ($v_5.nodeName) {
            case "StartDateTime":
                this.$u_3(ParseUtcDate(XUI.Xml.GetText($v_5)));
                break;
            case "EndDate":
                this.$s_3(ParseUtcDate(XUI.Xml.GetText($v_5)));
                break;
            case "CrmMonthlyDOWRecurrence":
                this.$16_3($v_5);
                break;
            case "CrmMonthlyRecurrence":
                this.$17_3($v_5);
                break;
            case "CrmWeeklyRecurrence":
                this.$18_3($v_5);
                break;
            case "CrmDailyRecurrence":
                this.$14_3($v_5);
                break;
            case "CrmMinuteRecurrence":
                this.$15_3($v_5);
                break
            }
        }
    },
    $16_3: function($p0) {
        for (var $v_0 = XUI.Xml.SelectSingleNode($p0, "WhichWeek", null),
            $v_1 = XUI.Xml.SelectSingleNode($p0, "DaysOfWeek", null),
            $v_2 = -1,
            $v_4 = 0,
            $v_5 = this.$7_3.length;
            $v_4 < $v_5;
            ++$v_4) {
            var $v_6 = XUI.Xml.SelectSingleNode($v_1, this.$7_3[$v_4], null);
            if (!IsNull($v_6) && XUI.Xml.GetText($v_6).toLowerCase() === "true") {
                $v_2 = $v_4;
                break
            }
        }
        var $v_3 = -1;
        switch (XUI.Xml.GetText($v_0)) {
        case "FirstWeek":
            $v_3 = 1;
            break;
        case "SecondWeek":
            $v_3 = 2;
            break;
        case "ThirdWeek":
            $v_3 = 3;
            break;
        case "FourthWeek":
            $v_3 = 4;
            break;
        case "LastWeek":
            $v_3 = 5;
            break
        }
        this.$C_3.set_dataValue($v_2);
        this.$D_3.set_dataValue($v_3);
        this.$T_3.checked = true;
        this.$6_3.checked = true
    },
    $17_3: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "Day", null), $v_1 = parseInt(XUI.Xml.GetText($v_0), 10);
        this.$0_3.set_dataValue($v_1);
        this.$M_3.checked = true;
        this.$6_3.checked = true
    },
    $18_3: function($p0) {
        for (var $v_0 = XUI.Xml.SelectSingleNode($p0, "WeeksInterval", null),
            $v_1 = XUI.Xml.SelectSingleNode($p0, "DaysOfWeek", null),
            $v_2 = [false, false, false, false, false, false, false],
            $v_3 = true,
            $v_5 = 0,
            $v_6 = this.$7_3.length;
            $v_5 < $v_6;
            ++$v_5) {
            var $v_7 = XUI.Xml.SelectSingleNode($v_1, this.$7_3[$v_5], null),
                $v_8 = !IsNull($v_7) && XUI.Xml.GetText($v_7).toLowerCase() === "true";
            if ((!$v_5 || $v_5 === 6) && $v_8) $v_3 = false;
            if ($v_5 > 0 && $v_5 < 6 && !$v_8) $v_3 = false;
            $v_2[$v_5] = $v_8
        }
        var $v_4 = parseInt(XUI.Xml.GetText($v_0), 10);
        if ($v_4 === 1 && $v_3) {
            this.$R_3.checked = true;
            this.$5_3.checked = true
        } else {
            this.$9_3.set_dataValue($v_4);
            this.$F_3.set_dataValue($v_2[0]);
            this.$G_3.set_dataValue($v_2[1]);
            this.$H_3.set_dataValue($v_2[2]);
            this.$I_3.set_dataValue($v_2[3]);
            this.$J_3.set_dataValue($v_2[4]);
            this.$K_3.set_dataValue($v_2[5]);
            this.$L_3.set_dataValue($v_2[6]);
            this.$B_3.checked = true
        }
    },
    $14_3: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "DaysInterval", null), $v_1 = parseInt(XUI.Xml.GetText($v_0), 10);
        this.$2_3.set_dataValue($v_1);
        this.$N_3.checked = true;
        this.$5_3.checked = true
    },
    $15_3: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "MinutesInterval", null),
            $v_1 = parseInt(XUI.Xml.GetText($v_0), 10),
            $v_2 = Math.floor($v_1 / 60),
            $v_3 = $v_1 % 60;
        this.$3_3.set_dataValue($v_2);
        this.$4_3.set_dataValue($v_3);
        this.$A_3.checked = true
    },
    $p_3: function() {
        var $v_0 = [];
        Array.add($v_0,
            '<CrmScheduleDefinition xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">');
        Array.add($v_0, "<StartDateTime>");
        Array.add($v_0, FormatUtcDate(this.$r_3()));
        Array.add($v_0, "</StartDateTime>");
        if (!IsNull(this.$l_3())) {
            Array.add($v_0, "<EndDate>");
            Array.add($v_0, FormatUtcDate(this.$l_3()));
            Array.add($v_0, "</EndDate>")
        }
        switch (this.$W_3()) {
        case 1:
            var $v_1 = this.$3_3.get_dataValue() * 60 + this.$4_3.get_dataValue();
            Array.add($v_0, "<CrmMinuteRecurrence>");
            Array.add($v_0, "<MinutesInterval>");
            Array.add($v_0, $v_1.toString());
            Array.add($v_0, "</MinutesInterval>");
            Array.add($v_0, "</CrmMinuteRecurrence>");
            break;
        case 2:
            if (!this.$k_3()) {
                Array.add($v_0, "<CrmDailyRecurrence>");
                Array.add($v_0, "<DaysInterval>");
                Array.add($v_0, this.$2_3.get_dataValue().toString());
                Array.add($v_0, "</DaysInterval>");
                Array.add($v_0, "</CrmDailyRecurrence>")
            } else {
                Array.add($v_0, "<CrmWeeklyRecurrence>");
                Array.add($v_0, "<WeeksInterval>1</WeeksInterval>");
                Array.add($v_0, this.$j_3([false, true, true, true, true, true, false]));
                Array.add($v_0, "</CrmWeeklyRecurrence>")
            }
            break;
        case 3:
            var $v_2 = [
                this.$F_3.get_dataValue(), this.$G_3.get_dataValue(), this.$H_3.get_dataValue(), this.$I_3
                .get_dataValue(), this.$J_3.get_dataValue(), this.$K_3.get_dataValue(), this.$L_3.get_dataValue()
            ];
            Array.add($v_0, "<CrmWeeklyRecurrence>");
            Array.add($v_0, "<WeeksInterval>");
            Array.add($v_0, this.$9_3.get_dataValue().toString());
            Array.add($v_0, "</WeeksInterval>");
            Array.add($v_0, this.$j_3($v_2));
            Array.add($v_0, "</CrmWeeklyRecurrence>");
            break;
        case 4:
            if (!this.$m_3()) {
                Array.add($v_0, "<CrmMonthlyRecurrence>");
                Array.add($v_0, "<Day>");
                Array.add($v_0, this.$0_3.get_dataValue().toString());
                Array.add($v_0, "</Day>");
                Array.add($v_0, "</CrmMonthlyRecurrence>")
            } else {
                var $v_3 = [false, false, false, false, false, false, false];
                $v_3[this.$C_3.get_dataValue()] = true;
                var $v_4 = ["FirstWeek", "SecondWeek", "ThirdWeek", "FourthWeek", "LastWeek"],
                    $v_5 = $v_4[this.$D_3.get_dataValue() - 1];
                Array.add($v_0, "<CrmMonthlyDOWRecurrence>");
                Array.add($v_0, "<WhichWeek>");
                Array.add($v_0, $v_5);
                Array.add($v_0, "</WhichWeek>");
                Array.add($v_0, this.$j_3($v_3));
                Array.add($v_0, "</CrmMonthlyDOWRecurrence>")
            }
            break
        }
        Array.add($v_0, "</CrmScheduleDefinition>");
        return $v_0.join("")
    },
    $j_3: function($p0) {
        var $v_0 = [];
        Array.add($v_0, "<DaysOfWeek>");
        for (var $v_1 = 0, $v_2 = this.$7_3.length; $v_1 < $v_2; ++$v_1) {
            var $v_3 = String.format("<{0}>{1}</{0}>", this.$7_3[$v_1], $p0[$v_1] ? "true" : "false");
            Array.add($v_0, $v_3)
        }
        Array.add($v_0, "</DaysOfWeek>");
        return $v_0.join("")
    }
};
Mscrm.ReportDeprecatedCodeHelper = function() {};
Mscrm.ReportDeprecatedCodeHelper.setDataValue = function(element, value) {
    Mscrm.ReportDeprecatedCodeHelper.setProperty(element, "DataValue", value)
};
Mscrm.ReportDeprecatedCodeHelper.setProperty = function(element, property, value) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
    if (!IsNull($v_0)) $v_0["set_" + Mscrm.ReportDeprecatedCodeHelper.$q(property)](value);
    else element[property] = value
};
Mscrm.ReportDeprecatedCodeHelper.getDataValue = function(element) {
    return Mscrm.ReportDeprecatedCodeHelper.getProperty(element, "DataValue")
};
Mscrm.ReportDeprecatedCodeHelper.getProperty = function(element, property) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
    if (!IsNull($v_0)) return $v_0["get_" + Mscrm.ReportDeprecatedCodeHelper.$q(property)]();
    else return element[property]
};
Mscrm.ReportDeprecatedCodeHelper.$q = function($p0) {
    var $v_0 = $p0.toLowerCase();
    return $v_0.charAt(0) + $p0.substr(1)
};
Mscrm.ReportDeprecatedCodeHelper.setFocus = function(element) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
    if (!IsNull($v_0)) $v_0.setFocus();
    else element.SetFocus()
};
Mscrm.ReportDeprecatedCodeHelper.isDirty = function(element) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
    if (!IsNull($v_0)) return Mscrm.ReportDeprecatedCodeHelper.getProperty(element, "isDirty");
    else return element.IsDirty()
};
Mscrm.ParameterControl = function(element) {
    this.$$d_$g_3 = Function.createDelegate(this, this.$g_3);
    this.$1_3 = [];
    Mscrm.ParameterControl.initializeBase(this, [element])
};
Mscrm.ParameterControl.prototype = {
    $Q_3: null,
    $Z_3: false,
    $i_3: 0,
    $O_3: false,
    get_returnOnlyDirtyParameters: function() { return this.$Z_3 },
    set_returnOnlyDirtyParameters: function(value) {
        this.$Z_3 = value;
        return value
    },
    get_dataXml: function() {
        !this.$O_3 && this.$g_3(null, null);
        return this.$p_3()
    },
    get_numControls: function() {
        !this.$O_3 && this.$g_3(null, null);
        return this.$i_3
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Sys.Application.add_load(this.$$d_$g_3)
    },
    $g_3: function($p0, $p1) {
        if (!this.$O_3) {
            for (var $v_0 = this.get_element().getElementsByTagName("*"), $v_1 = 0, $v_2 = $v_0.length;
                $v_1 < $v_2;
                ++$v_1) {
                var $v_3 = $v_0[$v_1],
                    $v_4 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_3),
                    $v_5 = $v_3.getAttribute("parametername");
                if (!IsNull($v_5)) {
                    Array.add(this.$1_3, $v_4);
                    if ($v_3.type !== "hidden") {
                        ++this.$i_3;
                        if (IsNull(this.$Q_3)) this.$Q_3 = $v_4
                    }
                }
            }
            this.$O_3 = true
        }
    },
    IsValid: function() {
        for (var $v_0 = 0, $v_1 = this.$1_3.length; $v_0 < $v_1; ++$v_0) {
            var $v_2 = this.$1_3[$v_0];
            if ($v_2.get_requiredLevel() === FIELD_REQUIRED && IsNull($v_2.get_dataValue())) {
                alert(String.format(window.LOCID_MISSING_PARAMETER, $v_2.get_element().getAttribute("prompt")));
                $v_2.setFocus();
                return false
            }
        }
        return true
    },
    SetFocus: function() { !IsNull(this.$Q_3) && this.$Q_3.setFocus() },
    SetFilterTextParameterValue: function(value) { this.$t_3("CRM_FilterText", value) },
    SetDrillThroughUrlParameterValue: function(value) { this.$t_3("CRM_URL", value) },
    $t_3: function($p0, $p1) {
        var $v_0 = this.$z_3($p0);
        !IsNull($v_0) && $v_0.set_dataValue($p1)
    },
    $z_3: function($p0) {
        for (var $v_0 = 0, $v_1 = this.$1_3.length; $v_0 < $v_1; ++$v_0) {
            var $v_2 = this.$1_3[$v_0], $v_3 = $v_2.get_element().getAttribute("parametername");
            if ($p0 === $v_3) return $v_2
        }
        return null
    },
    $p_3: function() {
        var $v_0 = [];
        Array.add($v_0,
            '<ArrayOfCrmParameterValue xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">');
        for (var $v_1 = true, $v_2 = 0, $v_3 = this.$1_3.length; $v_2 < $v_3; ++$v_2) {
            var $v_4 = this.$1_3[$v_2];
            if ($v_4.get_element().className !== "ms-crm-Hidden" && !this.$Z_3 || $v_4.get_isDirty()) {
                var $v_5 = $v_4.get_element().getAttribute("parametername"), $v_6 = $v_4.get_dataValue();
                Array.add($v_0, "<CrmParameterValue>");
                Array.add($v_0, "<Name>");
                Array.add($v_0, CrmEncodeDecode.CrmXmlEncode($v_5));
                Array.add($v_0, "</Name>");
                if (!IsNull($v_6)) {
                    var $v_7 = $v_4.get_element().className === "ms-crm-DateTime"
                        ? FormatUtcDate($v_6)
                        : $v_6.toString();
                    Array.add($v_0, "<Value>");
                    Array.add($v_0, CrmEncodeDecode.CrmXmlEncode(Mscrm.Utilities.trim($v_7, null)));
                    Array.add($v_0, "</Value>")
                }
                Array.add($v_0, "</CrmParameterValue>");
                $v_1 = false
            }
        }
        Array.add($v_0, "</ArrayOfCrmParameterValue>");
        return $v_1 ? "" : $v_0.join("")
    }
};
Mscrm.FilterEditor = function(element) {
    this.$$d_$13_3 = Function.createDelegate(this, this.$13_3);
    this.$$d_$1A_3 = Function.createDelegate(this, this.$1A_3);
    Mscrm.FilterEditor.initializeBase(this, [element])
};
Mscrm.FilterEditor.prototype = {
    $E_3: null,
    $h_3: null,
    $X_3: null,
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$X_3 = $find("advFind");
        if (!this.get_isDisabled()) {
            this.set_filterXml(this.get_defaultFilter());
            this.$11_3()
        }
    },
    $V_3: function() {
        if (IsNull(this.$E_3)) this.$E_3 = $get("divAFControls");
        return this.$E_3
    },
    get_defaultFilter: function() {
        var $v_0 = $get("xmlDefaultFilter");
        return !IsNull($v_0) ? XUI.Html.GetText($v_0) : null
    },
    get_filterXml: function() { return this.$o_3(Mscrm.AdvancedFind.fetchModeIgnoreEmpty) },
    set_filterXml: function(value) {
        var $v_0 = this.$V_3();
        while (XUI.Html.DomUtils.HasChildElements($v_0)) $v_0.removeChild(XUI.Html.DomUtils.GetFirstChild($v_0));
        for (var $v_1 = XUI.Xml.LoadXml(value),
            $v_2 = XUI.Xml.SelectNodes($v_1.documentElement, "/ReportFilter/ReportEntity", null),
            $v_3 = $v_2.length,
            $v_4 = 0;
            $v_4 < $v_3;
            $v_4++) this.$y_3($v_2[$v_4]);
        return value
    },
    get_filterExecXml: function() { return this.$o_3(Mscrm.AdvancedFind.fetchModeSkipEmpty) },
    get_filterSummary: function() {
        var $v_0 = XUI.Xml.LoadXml(this.$o_3(Mscrm.AdvancedFind.fetchModeSummary)),
            $v_1 = null,
            $$t_5 = this,
            $$t_6 = this;
        XUI.Xml.Load(Mscrm.CrmUri.create("/CRMReports/viewer/filterxmltosummary.xsl").toString(),
            false,
            function($p1_0) { $v_1 = $p1_0 },
            function() { $v_1 = null });
        var $v_2 = Mscrm.XmlUtil.createXslTemplate();
        $v_2.stylesheet = $v_1;
        var $v_3 = $v_2.createProcessor();
        $v_3.input = $v_0;
        $v_3.transform();
        return $v_3.output
    },
    get_isDirty: function() {
        if (this.get_isDisabled()) return false;
        var $v_0 = this.$V_3(), $v_1 = false, $$t_5 = this;
        XUI.Html.DomUtils.ForEachChild($v_0,
            function($p1_0) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($get("feAdvFindCtl", $p1_0)), $v_3 = $find($v_2.id);
                if ($v_3.get_isDirty()) {
                    $v_1 = true;
                    return true
                }
                return false
            });
        return $v_1
    },
    set_isDirty: function(value) {
        var $v_0 = this.$V_3(), $$t_5 = this;
        XUI.Html.DomUtils.ForEachChild($v_0,
            function($p1_0) {
                var $v_1 = XUI.Html.DomUtils.GetFirstChild($get("feAdvFindCtl", $p1_0)), $v_2 = $find($v_1.id);
                $v_2.set_isDirty(value);
                return false
            });
        return value
    },
    get_isDisabled: function() { return IsNull(this.$X_3) },
    get_fetchXmlLoaded: function() {
        var $v_0 = this.$V_3();
        if (IsNull($v_0) || !XUI.Xml.DomUtils.HasChildElements($v_0)) return false;
        var $v_1 = true, $$t_5 = this;
        XUI.Html.DomUtils.ForEachChild($v_0,
            function($p1_0) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($get("feAdvFindCtl", $p1_0)), $v_3 = $find($v_2.id);
                if (!$v_3.get_fetchXmlLoaded()) {
                    $v_1 = false;
                    return false
                }
                return true
            });
        return $v_1
    },
    $n_3: function($p0, $p1) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, $p1, null);
        if (!IsNull($v_0)) return XUI.Xml.GetText($v_0);
        return null
    },
    $10_3: function($p0, $p1, $p2) {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append(String.format("<div id='displayname' value='{0}", CrmEncodeDecode.CrmHtmlEncode($p0)));
        if (IsNull($p1)) $v_0.append("");
        else $v_0.append(String.format("'></div><div id='number' value='{0}'", $p1));
        if (IsNull($p2)) $v_0.append("");
        else $v_0.append(String.format("'></div><div id='donotconvert' value='{0}'", $p2));
        $v_0.append("'></div>");
        return $v_0.toString()
    },
    $y_3: function($p0) {
        var $v_0 = this.$n_3($p0, "@displayname"),
            $v_1 = this.$n_3($p0, "@number"),
            $v_2 = this.$n_3($p0, "@donotconvert"),
            $v_3 = CrmEncodeDecode.CrmHtmlEncode(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "@paramname", null))),
            $v_4 = this.$10_3($v_0, $v_1, $v_2),
            $v_5 = new Sys.StringBuilder;
        $v_5.append("<div id='feEntityProperties' style='display:none'>");
        $v_5.append(String.format("<div id='paramname' value='{0}'></div>", $v_3));
        $v_5.append($v_4);
        $v_5.append("</div><div class='feEntityHeadingBar'><table class='feEntityHeading'>");
        $v_5.append(String.format("<tr class='feEntityHeadingText'><td>{0}</td></tr></table></div>",
            CrmEncodeDecode.CrmHtmlEncode($v_0)));
        $v_5.append("<div id='feAdvFindCtl' class='feAdvFindCtl'></div>");
        var $v_6 = window.document.createElement("div");
        $v_6.innerHTML = $v_5.toString();
        $v_6 = this.$E_3.appendChild($v_6);
        this.$h_3 = $get("feAdvFindCtl", $v_6);
        var $v_7 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "@paramname", null)), $v_8 = {};
        $v_8["entityName"] = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "fetch/entity/@name", null));
        var $v_9 = this.$X_3.Clone(this.$$d_$1A_3, $v_7, $v_8);
        $v_9.style.position = "";
        Sys.UI.DomElement.removeCssClass($get("AdvFindDetailed", $v_9), "ms-crm-AdvFindDetailed-Container");
        var $v_A = $find($v_9.id);
        $v_A.ResetControl();
        $v_A.set_fetchXml(XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode($p0, "fetch", null)));
        $v_A.add_onChange(this.$$d_$13_3);
        var $$t_C = this;
        $v_A.set_onGetFetchAttributes(function() { return "<all-attributes />" })
    },
    $1A_3: function($p0) { this.$h_3.appendChild($p0) },
    $o_3: function($p0) {
        var $v_0 = new Sys.StringBuilder("<ReportFilter>"), $v_1 = this.$V_3(), $$t_C = this;
        XUI.Html.DomUtils.ForEachChild($v_1,
            function($p1_0) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($get("feAdvFindCtl", $p1_0)),
                    $v_3 = $find($v_2.id),
                    $v_4 = $get("feEntityProperties", $p1_0);
                $v_3.set_fetchMode($p0);
                var $v_5 = $v_3.get_fetchXml();
                if (IsNull($v_5)) return false;
                var $v_6 = $get("number", $v_4), $v_7 = $get("donotconvert", $v_4);
                $v_0.append('<ReportEntity paramname="');
                var $v_8 = $get("paramname", $v_4).attributes.getNamedItem("value").value;
                $v_0.append(CrmEncodeDecode.CrmHtmlEncode($v_8));
                $v_0.append('" displayname="');
                var $v_9 = $get("displayname", $v_4).attributes.getNamedItem("value").value;
                $v_0.append(CrmEncodeDecode.CrmHtmlEncode($v_9));
                if (!IsNull($v_6)) {
                    $v_0.append('" number="');
                    $v_0.append($v_6.getAttribute("value"))
                }
                if (!IsNull($v_7)) {
                    $v_0.append('" donotconvert="');
                    $v_0.append($v_7.getAttribute("value"))
                }
                $v_0.append('">');
                $v_0.append($v_5);
                $v_0.append("</ReportEntity>");
                return false
            });
        $v_0.append("</ReportFilter>");
        return $v_0.toString()
    },
    $13_3: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler("OnChange");
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Html.CreateDomEvent("change");
            $v_0(new Sys.UI.DomEvent($v_1))
        }
    },
    $11_3: function() {
        var $v_0 = $get("divMessage");
        $v_0.style.display = "none";
        this.$E_3.style.display = "block"
    }
};
Mscrm.FrequencyControl.registerClass("Mscrm.FrequencyControl", Mscrm.CrmUIControl);
Mscrm.ReportDeprecatedCodeHelper.registerClass("Mscrm.ReportDeprecatedCodeHelper");
Mscrm.ParameterControl.registerClass("Mscrm.ParameterControl", Mscrm.CrmUIControl);
Mscrm.FilterEditor.registerClass("Mscrm.FilterEditor", Mscrm.CrmUIControl);
Mscrm.FrequencyControl.FREQ_ONCE = 0;
Mscrm.FrequencyControl.FREQ_HOURLY = 1;
Mscrm.FrequencyControl.FREQ_DAILY = 2;
Mscrm.FrequencyControl.FREQ_WEEKLY = 3;
Mscrm.FrequencyControl.FREQ_MONTHLY = 4;
Mscrm.FrequencyControl.FREQ_DAILY_EVERYXDAYS = 0;
Mscrm.FrequencyControl.FREQ_DAILY_EVERYWEEKDAY = 1;
Mscrm.FrequencyControl.FREQ_MONTHLY_DAYXEVERYMONTH = 0;
Mscrm.FrequencyControl.FREQ_MONTHLY_THEXYEVERYMONTH = 1