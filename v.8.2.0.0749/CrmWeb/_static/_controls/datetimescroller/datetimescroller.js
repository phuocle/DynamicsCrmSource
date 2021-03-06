Type.registerNamespace("Mscrm");
Mscrm.DateScroller = function($p0, $p1, $p2) {
    this.$$d_$m_1 = Function.createDelegate(this, this.$m_1);
    Mscrm.DateScroller.initializeBase(this);
    this.$1_1 = $p1;
    this.$0_1 = $p0;
    this.setShortDatePattern($p2);
    this.$9_1 = new Mscrm.DateTimeScrollerComponent(this.$0_1.find(".dayComponent"));
    this.$9_1.set_date(this.$1_1);
    this.$9_1.set_dateComponent("day");
    this.$9_1.$4_2 = this.$W_1(this.$9_1.$3_2);
    var $$t_9 = this;
    this.$9_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_9.set_date($$t_9.$9_1.$1_2) });
    this.$9_1.add_showPopupEvent(this.$$d_$m_1);
    this.$9_1.activate();
    this.$D_1 = new Mscrm.DateTimeScrollerComponent(this.$0_1.find(".monthComponent"));
    this.$D_1.set_date(this.$1_1);
    this.$D_1.set_dateComponent("month");
    this.$D_1.$4_2 = this.$W_1(this.$D_1.$3_2);
    var $$t_A = this;
    this.$D_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_A.set_date($$t_A.$D_1.$1_2) });
    this.$D_1.add_showPopupEvent(this.$$d_$m_1);
    this.$D_1.activate();
    this.$G_1 = new Mscrm.DateTimeScrollerComponent(this.$0_1.find(".yearComponent"));
    this.$G_1.set_date(this.$1_1);
    this.$G_1.set_dateComponent(this.$I_1.indexOf("g") >= 0 ? "yearwithera" : "year");
    this.$G_1.$4_2 = this.$W_1(this.$G_1.$3_2);
    var $$t_B = this;
    this.$G_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_B.set_date($$t_B.$G_1.$1_2) });
    this.$G_1.add_showPopupEvent(this.$$d_$m_1);
    this.$G_1.activate()
};
Mscrm.DateScroller.prototype = {
    $0_1: null,
    $1_1: null,
    $9_1: null,
    $D_1: null,
    $G_1: null,
    $5_1: null,
    $I_1: null,
    get_attachedElement: function() { return this.$0_1 },
    get_date: function() { return this.$1_1 },
    set_date: function($p0) {
        if (this.$1_1 !== $p0) {
            if (IsNull($p0) || !Date.isInstanceOfType($p0)) this.$1_1 = new Date;
            else this.$1_1 = $p0;
            this.$9_1.set_date(this.$1_1);
            this.$D_1.set_date(this.$1_1);
            this.$G_1.set_date(this.$1_1);
            this.$n_1("date")
        }
        return $p0
    },
    add_dateChangedEvent: function($p0) { this.get_events().addHandler("date", $p0) },
    remove_dateChangedEvent: function($p0) { this.get_events().removeHandler("date", $p0) },
    $n_1: function($p0) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, new Sys.PropertyChangedEventArgs($p0))
    },
    add_showPopupEvent: function($p0) { this.get_events().addHandler("showPopupEvent", $p0) },
    remove_showPopupEvent: function($p0) { this.get_events().removeHandler("showPopupEvent", $p0) },
    $H_1: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    },
    hideSubcomponents: function() {
        this.$9_1.set_showingPopup(false);
        this.$D_1.set_showingPopup(false);
        this.$G_1.set_showingPopup(false)
    },
    $m_1: function($p0, $p1) { this.$H_1("showPopupEvent", new Mscrm.FormatArguments) },
    setShortDatePattern: function($p0) {
        this.$I_1 = $p0;
        this.$5_1 = {};
        var $v_0 = null, $v_1 = new RegExp("(d)\\1+");
        $v_0 = this.$I_1.match($v_1);
        this.$5_1["day"] = IsNull($v_0) || !$v_0.length ? "%d" : $v_0[0];
        $v_1 = new RegExp("(M)\\1+");
        $v_0 = this.$I_1.match($v_1);
        this.$5_1["month"] = IsNull($v_0) || !$v_0.length ? "%M" : $v_0[0];
        $v_1 = new RegExp("(y)\\1+");
        $v_0 = this.$I_1.match($v_1);
        this.$5_1["year"] = IsNull($v_0) || !$v_0.length ? "yyyy" : $v_0[0];
        this.$5_1["yearwithera"] = this.$5_1["year"]
    },
    get_$w_1: function() {
        if (!this.$5_1) {
            this.$5_1 = {};
            this.$5_1["day"] = "dd";
            this.$5_1["month"] = "MM";
            this.$5_1["year"] = "yyyy";
            this.$5_1["yearwithera"] = "yyyy"
        }
        return this.$5_1
    },
    $W_1: function($p0) { return this.get_$w_1()[$p0] }
};
Mscrm.DateTimeScroller = function(element) {
    this.$$d_$16_1 = Function.createDelegate(this, this.$16_1);
    this.$$d_$1B_1 = Function.createDelegate(this, this.$1B_1);
    this.$$d_$1D_1 = Function.createDelegate(this, this.$1D_1);
    this.$$d_$1A_1 = Function.createDelegate(this, this.$1A_1);
    Mscrm.DateTimeScroller.initializeBase(this);
    this.$2_1 = new Date;
    this.$M_1 = "date";
    this.$T_1 = false;
    this.$K_1 = false;
    this.$L_1 = false;
    this.$O_1 = true;
    this.$N_1 = true;
    this.$U_1 = true;
    this.$8_1 = null;
    this.$6_1 = null;
    this.add_formatChangedEvent(this.$$d_$1A_1);
    this.$0_1 = element;
    this.$e_1 = this.$0_1.find("span.controlValue")
};
Mscrm.DateTimeScroller.$14 = function($p0, $p1) {
    if (IsNull($p0) || IsNull($p1)) return false;
    return $p0.isSameNode($p1)
};
Mscrm.DateTimeScroller.prototype = {
    $M_1: null,
    $2_1: null,
    $0_1: null,
    $e_1: null,
    $8_1: null,
    $6_1: null,
    $T_1: false,
    $K_1: false,
    $L_1: false,
    $O_1: false,
    $U_1: false,
    $N_1: false,
    $I_1: "M/d/yyyy",
    $J_1: "HH:mm",
    activate: function() {
        if (!this.$T_1) {
            this.$T_1 = true;
            this.$8_1 = new Mscrm.DateScroller(this.$0_1.find(".dateScroller"), this.$2_1, this.$I_1);
            var $$t_8 = this;
            this.$8_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_8.$t_1($$t_8.$8_1.$1_1) });
            var $$t_9 = this;
            this.$8_1.add_showPopupEvent(function($p1_0, $p1_1) { $$t_9.$g_1() });
            this.$6_1 = new Mscrm.TimeScroller(this.$0_1.find(".timeScroller"), this.$2_1, this.$J_1);
            var $$t_A = this;
            this.$6_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_A.$u_1($$t_A.$6_1.$1_1) });
            var $$t_B = this;
            this.$6_1.add_showPopupEvent(function($p1_0, $p1_1) { $$t_B.$g_1() });
            this.$k_1();
            this.$r_1()
        }
    },
    dispose: function() {
        if (this.$T_1) {
            this.$1J_1();
            this.set_$V_1(false)
        }
    },
    get_date: function() { return this.$2_1 },
    set_date: function(value) {
        if (this.$2_1 !== value) {
            if (IsNull(value) || !Date.isInstanceOfType(value)) {
                this.$N_1 = true;
                this.$2_1 = new Date
            } else {
                this.$N_1 = false;
                this.$2_1 = value
            }
            this.$o_1();
            !IsNull(this.$8_1) && this.$8_1.set_date(this.$2_1);
            !IsNull(this.$6_1) && this.$6_1.set_date(this.$2_1)
        }
        return value
    },
    get_format: function() { return this.$M_1 },
    set_format: function(value) {
        if (this.$M_1 !== value) {
            this.$M_1 = value === "date" || value === "time" || value === "datetime" ? value : "date";
            this.$H_1("FormatChanged", new Mscrm.FormatArguments)
        }
        return value
    },
    get_shortDatePattern: function() { return this.$I_1 },
    set_shortDatePattern: function(value) {
        this.$I_1 = value;
        return value
    },
    get_shortTimePattern: function() { return this.$J_1 },
    set_shortTimePattern: function(value) {
        this.$J_1 = value;
        return value
    },
    get_isDisabled: function() { return this.$L_1 },
    set_isDisabled: function(value) {
        if (this.$L_1 && !value) this.$L_1 = false;
        if (!this.$L_1 && value) {
            this.$L_1 = true;
            this.$K_1 && this.set_$V_1(false)
        }
        return value
    },
    get_isTimeEditable: function() { return this.$O_1 },
    set_isTimeEditable: function(value) {
        if (this.$O_1 !== value) {
            this.$O_1 = value;
            this.$k_1()
        }
        return value
    },
    get_showTime: function() { return this.$U_1 },
    set_showTime: function(value) {
        if (this.$U_1 !== value) {
            this.$U_1 = value;
            this.$o_1()
        }
        return value
    },
    setDate: function(date) {
        if (isNullOrEmptyString(date)) this.set_date(null);
        else {
            var $v_0 = Mscrm.DateTimeUtility.parseDate(date),
                $v_1 = new Date($v_0.getFullYear(),
                    $v_0.getMonth(),
                    $v_0.getDate(),
                    this.$2_1.getHours(),
                    this.$2_1.getMinutes());
            this.set_date($v_1)
        }
    },
    getDate: function() {
        if (this.$N_1) return "";
        else return Mscrm.DateTimeUtility.formatDate(this.$2_1)
    },
    setTime: function(time) {
        if (isNullOrEmptyString(time)) this.set_date(null);
        else {
            var $v_0 = parseTime(time, 0),
                $v_1 = new Date(this.$2_1.getFullYear(),
                    this.$2_1.getMonth(),
                    this.$2_1.getDate(),
                    $v_0.getHours(),
                    $v_0.getMinutes());
            this.set_date($v_1)
        }
    },
    clearAll: function() {
        if (!this.$N_1) {
            this.set_date(null);
            this.$H_1("DateChanged", new Mscrm.FormatArguments);
            var $v_0 = new Mscrm.FormatArguments;
            $v_0.inputValue = timeToString(this.$2_1, 0);
            this.$H_1("TimeChanged", $v_0)
        }
    },
    add_dateChangedEvent: function(value) { this.get_events().addHandler("DateChanged", value) },
    remove_dateChangedEvent: function(value) { this.get_events().removeHandler("DateChanged", value) },
    add_timeChangedEvent: function(value) { this.get_events().addHandler("TimeChanged", value) },
    remove_timeChangedEvent: function(value) { this.get_events().removeHandler("TimeChanged", value) },
    add_formatChangedEvent: function(value) { this.get_events().addHandler("FormatChanged", value) },
    remove_formatChangedEvent: function(value) { this.get_events().removeHandler("FormatChanged", value) },
    add_undoChangesEvent: function(value) { this.get_events().addHandler("UndoChanges", value) },
    remove_undoChangesEvent: function(value) { this.get_events().removeHandler("UndoChanges", value) },
    add_confirmChangesEvent: function(value) { this.get_events().addHandler("ConfirmChanges", value) },
    remove_confirmChangesEvent: function(value) { this.get_events().removeHandler("ConfirmChanges", value) },
    set_$V_1: function($p0) {
        if (this.$K_1 !== $p0) {
            this.$K_1 = $p0;
            if (this.$K_1) {
                this.$0_1.addClass("activeDateTimeControl");
                this.$e_1.hide()
            } else {
                this.$g_1();
                this.$0_1.removeClass("activeDateTimeControl");
                this.$e_1.show()
            }
            var $v_0 = this.$0_1.find(".dateTimeEditablePanel");
            $v_0.toggle()
        }
        return $p0
    },
    $t_1: function($p0) {
        if (this.$2_1 === $p0) return;
        $p0.setHours(this.$2_1.getHours());
        $p0.setMinutes(this.$2_1.getMinutes());
        this.set_date($p0);
        this.$H_1("DateChanged", new Mscrm.FormatArguments);
        this.$0_1.focus()
    },
    $u_1: function($p0) {
        if (this.$2_1 === $p0) return;
        $p0.setDate(this.$2_1.getDate());
        $p0.setMonth(this.$2_1.getMonth());
        $p0.setFullYear(this.$2_1.getFullYear());
        this.set_date($p0);
        var $v_0 = new Mscrm.FormatArguments;
        $v_0.inputValue = timeToString(this.$2_1, 0);
        this.$H_1("TimeChanged", $v_0);
        this.$0_1.focus()
    },
    $o_1: function() {
        var $v_0 = "";
        if (this.$N_1) $v_0 = "---";
        else
            switch (this.$M_1) {
            case "date":
                $v_0 = Mscrm.DateTimeUtility.formatDate(this.$2_1);
                break;
            case "time":
                $v_0 = this.$2_1.localeFormat("t");
                break;
            case "datetime":
                $v_0 = Mscrm.DateTimeUtility.formatDate(this.$2_1);
                if (this.$U_1) $v_0 += " " + this.$2_1.localeFormat("t");
                break
            }
        this.$e_1.text($v_0)
    },
    $k_1: function() {
        if (this.$T_1)
            switch (this.$M_1) {
            case "date":
                this.$8_1.$0_1.show();
                this.$6_1.$0_1.hide();
                break;
            case "time":
                this.$8_1.$0_1.hide();
                this.$O_1 && this.$6_1.$0_1.show();
                break;
            case "datetime":
                this.$8_1.$0_1.show();
                if (this.$O_1) this.$6_1.$0_1.show();
                else this.$6_1.$0_1.hide();
                break
            }
    },
    $g_1: function() {
        this.$8_1.hideSubcomponents();
        this.$6_1.hideSubcomponents()
    },
    $13_1: function($p0) {
        var $v_0 = this.$0_1.get(0);
        return Mscrm.DateTimeScroller.$14($v_0, $p0) || XUI.Html.DomUtils.Contains($v_0, $p0)
    },
    $r_1: function() {
        this.$0_1.keydown(this.$$d_$1D_1);
        $P_CRM(document).click(this.$$d_$1B_1);
        this.$0_1.find(".scrollerButton").click(this.$$d_$16_1)
    },
    $1J_1: function() {
        this.$0_1.unbind("keydown", this.$$d_$1D_1);
        $P_CRM(document).unbind("click", this.$$d_$1B_1);
        this.$0_1.find(".scrollerButton").unbind("click", this.$$d_$16_1)
    },
    $H_1: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    },
    $1A_1: function($p0, $p1) { this.$k_1() },
    $1B_1: function($p0) {
        if (!this.$L_1) {
            var $v_0 = this.$13_1($p0.target);
            if (this.$K_1)
                if ($v_0) this.$g_1();
                else this.$H_1("ConfirmChanges", new Mscrm.FormatArguments);
            this.set_$V_1($v_0)
        }
        $p0.stopPropagation()
    },
    $1D_1: function($p0) {
        if (this.$K_1)
            if ($p0.which === 27) {
                this.$H_1("UndoChanges", new Mscrm.FormatArguments);
                this.set_$V_1(false);
                this.$0_1.blur()
            } else if ($p0.which === 13) {
                this.$H_1("ConfirmChanges", new Mscrm.FormatArguments);
                this.set_$V_1(false);
                this.$0_1.blur()
            }
        $p0.stopPropagation()
    },
    $16_1: function($p0) {
        this.clearAll();
        this.set_$V_1(false);
        this.$H_1("ConfirmChanges", new Mscrm.FormatArguments);
        $p0.stopPropagation()
    }
};
Mscrm.DateTimeScrollerComponent = function($p0) {
    Mscrm.DateTimeScrollerComponent.initializeBase(this, [$p0]);
    this.$1_2 = new Date
};
Mscrm.DateTimeScrollerComponent.prototype = {
    $1_2: null,
    $3_2: null,
    $4_2: "",
    get_date: function() { return this.$1_2 },
    set_date: function($p0) {
        if (this.$1_2 !== $p0) {
            if (IsNull($p0) || !Date.isInstanceOfType($p0)) this.$1_2 = new Date;
            else this.$1_2 = $p0;
            this.$B_1 && this.updateScrollerComponent();
            this.onPropertyChanged("Date")
        }
        return $p0
    },
    get_dateComponent: function() { return this.$3_2 },
    set_dateComponent: function($p0) {
        if (this.$3_2 !== $p0) {
            this.$3_2 = $p0;
            this.$B_1 && this.updateScrollerComponent()
        }
        return $p0
    },
    get_shortFormatPattern: function() { return this.$4_2 },
    set_shortFormatPattern: function($p0) {
        this.$4_2 = $p0;
        return $p0
    },
    add_dateChangedEvent: function($p0) { this.get_events().addHandler("Date", $p0) },
    remove_dateChangedEvent: function($p0) { this.get_events().removeHandler("Date", $p0) },
    updateScrollerComponent: function() {
        this.$0_1.empty();
        var $v_0 = Mscrm.DateTimeScrollerItem.create();
        $v_0.$4_2 = this.$4_2;
        $v_0.set_date(this.$1_2);
        $v_0.set_dateComponent(this.$3_2);
        $v_0.set_isCurrentItem(true);
        this.$0_1.append($v_0.$0_1)
    },
    initializePopup: function() {
        if (IsNull(this.$7_1)) {
            this.$7_1 = Mscrm.DateTimeScrollerPopup.create($P_CRM(document.body));
            var $v_1 = this.$0_1.offset().left;
            this.$7_1.$0_1.css("left", $v_1.toString() + "px")
        }
        var $v_0 = this.$7_1;
        $v_0.set_date(this.$1_2);
        $v_0.set_dateComponent(this.$3_2);
        $v_0.$4_2 = this.$4_2;
        var $$t_7 = this;
        $v_0.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_7.set_date($v_0.$1_2) });
        var $$t_8 = this;
        $v_0.add_triggerHidePopupEvent(function($p1_0, $p1_1) { $$t_8.set_showingPopup(false) });
        if ($v_0.get_hasMaxItems()) {
            var $v_2 = this.$0_1.offset().top;
            $v_0.$0_1.css("top", $v_2.toString() + "px")
        }
        $v_0.activate()
    }
};
Mscrm.DateTimeScrollerItem = function($p0) {
    this.$$d_$19_2 = Function.createDelegate(this, this.$19_2);
    this.$$d_$18_2 = Function.createDelegate(this, this.$18_2);
    Mscrm.DateTimeScrollerItem.initializeBase(this, [$p0]);
    this.$1_2 = null;
    this.$3_2 = null;
    this.add_dateChangedEvent(this.$$d_$18_2);
    this.add_dateComponentChangedEvent(this.$$d_$19_2)
};
Mscrm.DateTimeScrollerItem.create = function() {
    return new Mscrm.DateTimeScrollerItem($P_CRM(window.document.createElement("div")))
};
Mscrm.DateTimeScrollerItem.prototype = {
    $1_2: null,
    $3_2: null,
    $4_2: null,
    get_date: function() { return this.$1_2 },
    set_date: function($p0) {
        if (this.$1_2 !== $p0) {
            this.$1_2 = $p0;
            this.onPropertyChanged("Date")
        }
        return $p0
    },
    get_dateComponent: function() { return this.$3_2 },
    set_dateComponent: function($p0) {
        if (this.$3_2 !== $p0) {
            this.$3_2 = $p0;
            this.onPropertyChanged("DateComponent");
            if (this.$3_2 === "yearwithera") this.$0_1.addClass("yearWithEra");
            else this.$0_1.removeClass("yearWithEra")
        }
        return $p0
    },
    add_dateChangedEvent: function($p0) { this.get_events().addHandler("Date", $p0) },
    remove_dateChangedEvent: function($p0) { this.get_events().removeHandler("Date", $p0) },
    add_dateComponentChangedEvent: function($p0) { this.get_events().addHandler("DateComponent", $p0) },
    remove_dateComponentChangedEvent: function($p0) { this.get_events().removeHandler("DateComponent", $p0) },
    $18_2: function($p0, $p1) { $p1.get_propertyName() === "Date" && this.$q_2() },
    $19_2: function($p0, $p1) { $p1.get_propertyName() === "DateComponent" && this.$q_2() },
    $q_2: function() {
        if (!IsNull(this.$1_2) && !IsNull(this.$3_2)) {
            var $v_0 = "";
            switch (this.$3_2) {
            case "year":
                $v_0 = "";
                break;
            case "yearwithera":
                $v_0 = "gg";
                break;
            case "month":
                $v_0 = "MMMM";
                break;
            case "day":
                $v_0 = "dddd";
                break;
            case "hour":
            case "minute":
            case "period":
                $v_0 = "";
                break
            }
            !isNullOrEmptyString(this.$4_2) && this.set_text(Mscrm.DateTimeUtility.formatDate(this.$1_2, this.$4_2));
            !isNullOrEmptyString($v_0) && this.set_smallText(Mscrm.DateTimeUtility.formatDate(this.$1_2, $v_0))
        }
    },
    get_shortFormatPattern: function() { return this.$4_2 },
    set_shortFormatPattern: function($p0) {
        this.$4_2 = $p0;
        return $p0
    }
};
Mscrm.DateTimeScrollerPopup = function($p0) { Mscrm.DateTimeScrollerPopup.initializeBase(this, [$p0]) };
Mscrm.DateTimeScrollerPopup.create = function($p0) {
    var $v_0 = $P_CRM(window.document.createElement("div"));
    $p0.append($v_0);
    return new Mscrm.DateTimeScrollerPopup($v_0)
};
Mscrm.DateTimeScrollerPopup.prototype = {
    $1_2: null,
    $3_2: null,
    $4_2: null,
    get_date: function() { return this.$1_2 },
    set_date: function($p0) {
        if (this.$1_2 !== $p0) {
            if (IsNull($p0) || !Date.isInstanceOfType($p0)) this.$1_2 = new Date;
            else this.$1_2 = $p0;
            this.$B_1 && this.initializeItems();
            this.onPropertyChanged("Date")
        }
        return $p0
    },
    get_dateComponent: function() { return this.$3_2 },
    set_dateComponent: function($p0) {
        this.$3_2 = $p0;
        if (this.$3_2 === "period") this.$Y_1 = 2;
        return $p0
    },
    add_dateChangedEvent: function($p0) { this.get_events().addHandler("Date", $p0) },
    remove_dateChangedEvent: function($p0) { this.get_events().removeHandler("Date", $p0) },
    createItem: function($p0) {
        var $v_0 = Mscrm.DateTimeScrollerItem.create();
        $v_0.$4_2 = this.$4_2;
        $v_0.set_date(this.$z_2($p0));
        $v_0.set_dateComponent(this.$3_2);
        $v_0.set_isCurrentItem(this.$15_2($p0));
        var $$t_3 = this;
        $v_0.$0_1.click(function($p1_0) {
            $v_0.set_isCurrentItem(true);
            $$t_3.fireEvent("triggerHidePopupEvent", new Mscrm.FormatArguments);
            $$t_3.set_date($v_0.$1_2);
            $p1_0.stopImmediatePropagation()
        });
        return $v_0
    },
    $z_2: function($p0) {
        var $v_0 = new Date(this.$1_2.toString());
        switch (this.$3_2) {
        case "year":
        case "yearwithera":
            var $v_1 = $v_0.getFullYear() + $p0;
            if ($v_1 < 1753) $v_1 -= 8247 * Math.floor($p0 / 8247);
            else if ($v_1 > 9999) $v_1 -= 8247 * Math.ceil($p0 / 8247);
            $v_0.setYear($v_1);
            break;
        case "month":
            var $v_2 = $v_0.getDate();
            $v_0.setDate(1);
            $v_0.setMonth($v_0.getMonth() + $p0);
            $v_0.setYear(this.$1_2.getFullYear());
            var $v_3 = this.$h_2($v_0);
            if ($v_2 > $v_3) $v_0.setDate($v_3);
            else $v_0.setDate($v_2);
            break;
        case "day":
            var $v_4 = this.$h_2($v_0), $v_5 = $v_0.getDate() - 1, $v_6 = ($v_5 + $v_4 + $p0) % $v_4 + 1;
            $v_0.setDate($v_6);
            break;
        case "hour":
            var $v_7 = 12, $v_8 = this.$4_2.indexOf("h") < 0;
            if ($v_8) $v_7 = 24;
            var $v_9 = ($v_0.getHours() % $v_7 + $p0) % $v_7;
            if ($v_9 < 0) $v_9 += $v_7;
            if (!$v_8 && $v_0.getHours() >= 12) $v_9 += 12;
            $v_0.setHours($v_9 % 24);
            break;
        case "minute":
            var $v_A = ($v_0.getMinutes() + $p0) % 60;
            if ($v_A < 0) $v_A += 60;
            $v_0.setMinutes($v_A);
            break;
        case "period":
            $v_0.setHours(($v_0.getHours() + Math.abs($p0) * 12) % 24);
            break
        }
        return $v_0
    },
    $h_2: function($p0) {
        var $v_0 = new Date($p0.toString());
        $v_0.setMonth($v_0.getMonth() + 1);
        $v_0.setDate(0);
        return $v_0.getDate()
    },
    $15_2: function($p0) {
        switch (this.$3_2) {
        case "year":
        case "yearwithera":
            return !$p0;
        case "month":
            return !($p0 % 12);
        case "day":
            return !($p0 % this.$h_2(this.$1_2));
        case "hour":
            return !($p0 % 12);
        case "minute":
            return !($p0 % 60);
        case "period":
            return !($p0 % 2)
        }
        return false
    },
    get_shortFormatPattern: function() { return this.$4_2 },
    set_shortFormatPattern: function($p0) {
        this.$4_2 = $p0;
        return $p0
    }
};
Mscrm.ScrollerComponent = function($p0) {
    this.$$d_$17_1 = Function.createDelegate(this, this.$17_1);
    Mscrm.ScrollerComponent.initializeBase(this);
    this.$B_1 = false;
    this.$R_1 = false;
    this.$7_1 = null;
    this.$0_1 = $p0
};
Mscrm.ScrollerComponent.prototype = {
    $7_1: null,
    $0_1: null,
    $B_1: false,
    $R_1: false,
    get_attachedElement: function() { return this.$0_1 },
    get_currentPopup: function() { return this.$7_1 },
    set_currentPopup: function($p0) {
        this.$7_1 = $p0;
        return $p0
    },
    get_isActive: function() { return this.$B_1 },
    get_showingPopup: function() { return this.$R_1 },
    set_showingPopup: function($p0) {
        if (!this.$R_1 && $p0) {
            this.fireEvent("showPopupEvent", new Mscrm.FormatArguments);
            this.$1H_1();
            this.$R_1 = true
        }
        if (this.$R_1 && !$p0) {
            this.$11_1();
            this.$R_1 = false
        }
        return $p0
    },
    add_showPopupEvent: function($p0) { this.get_events().addHandler("showPopupEvent", $p0) },
    remove_showPopupEvent: function($p0) { this.get_events().removeHandler("showPopupEvent", $p0) },
    fireEvent: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    },
    onPropertyChanged: function($p0) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, new Sys.PropertyChangedEventArgs($p0))
    },
    activate: function() {
        this.$B_1 = true;
        this.updateScrollerComponent();
        this.$0_1.click(this.$$d_$17_1)
    },
    updateScrollerComponent: function() {},
    initializePopup: function() {},
    $17_1: function($p0) {
        this.set_showingPopup(true);
        $p0.stopPropagation()
    },
    $1H_1: function() {
        this.initializePopup();
        if (!IsNull(this.$7_1)) {
            this.$7_1.$S_1 = this.$0_1.offset().top;
            this.$7_1.set_isVisible(true)
        }
    },
    $11_1: function() { this.$7_1.set_isVisible(false) }
};
Mscrm.ScrollerItem = function($p0) {
    this.$$d_$1C_1 = Function.createDelegate(this, this.$1C_1);
    this.$$d_$1F_1 = Function.createDelegate(this, this.$1F_1);
    Mscrm.ScrollerItem.initializeBase(this);
    this.$a_1 = null;
    this.$b_1 = null;
    this.$X_1 = false;
    $p0.addClass("scrollerItem");
    $p0.append('<span class="scrollerItemMainLabel"></span>');
    $p0.append('<span class="scrollerItemSmallLabel"></span>');
    this.$0_1 = $p0;
    this.add_textChangedEvent(this.$$d_$1F_1);
    this.add_smallTextChangedEvent(this.$$d_$1F_1);
    this.add_isCurrentItemChangedEvent(this.$$d_$1C_1)
};
Mscrm.ScrollerItem.prototype = {
    $b_1: null,
    $a_1: null,
    $X_1: false,
    $0_1: null,
    get_attachedElement: function() { return this.$0_1 },
    get_text: function() { return this.$b_1 },
    set_text: function($p0) {
        if (this.$b_1 !== $p0) {
            this.$b_1 = $p0;
            this.onPropertyChanged("Text")
        }
        return $p0
    },
    get_smallText: function() { return this.$a_1 },
    set_smallText: function($p0) {
        if (this.$a_1 !== $p0) {
            this.$a_1 = $p0;
            this.onPropertyChanged("SmallText")
        }
        return $p0
    },
    get_isCurrentItem: function() { return this.$X_1 },
    set_isCurrentItem: function($p0) {
        if (this.$X_1 !== $p0) {
            this.$X_1 = $p0;
            this.onPropertyChanged("IsCurrentItem")
        }
        return $p0
    },
    add_textChangedEvent: function($p0) { this.get_events().addHandler("Text", $p0) },
    remove_textChangedEvent: function($p0) { this.get_events().removeHandler("Text", $p0) },
    add_smallTextChangedEvent: function($p0) { this.get_events().addHandler("SmallText", $p0) },
    remove_smallTextChangedEvent: function($p0) { this.get_events().removeHandler("SmallText", $p0) },
    add_isCurrentItemChangedEvent: function($p0) { this.get_events().addHandler("IsCurrentItem", $p0) },
    remove_isCurrentItemChangedEvent: function($p0) { this.get_events().removeHandler("IsCurrentItem", $p0) },
    onPropertyChanged: function($p0) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, new Sys.PropertyChangedEventArgs($p0))
    },
    $1F_1: function($p0, $p1) {
        var $v_0 = null;
        if ($p1.get_propertyName() === "Text") {
            $v_0 = this.$0_1.find("span.scrollerItemMainLabel");
            $v_0.text(this.$b_1)
        } else if ($p1.get_propertyName() === "SmallText") {
            $v_0 = this.$0_1.find("span.scrollerItemSmallLabel");
            $v_0.text(this.$a_1)
        }
    },
    $1C_1: function($p0, $p1) {
        if ($p1.get_propertyName() === "IsCurrentItem")
            if (this.$X_1) this.$0_1.addClass("currentScrollerItem");
            else this.$0_1.removeClass("currentScrollerItem")
    }
};
Mscrm.ScrollerPopup = function($p0) {
    this.$$d_$1E_1 = Function.createDelegate(this, this.$1E_1);
    this.$d_1 = -1;
    Mscrm.ScrollerPopup.initializeBase(this);
    this.$B_1 = false;
    this.$Q_1 = false;
    this.$0_1 = $p0;
    this.$f_1 = 0
};
Mscrm.ScrollerPopup.prototype = {
    $f_1: 0,
    $Y_1: 0,
    $P_1: null,
    $c_1: 0,
    $S_1: 0,
    $Q_1: false,
    $B_1: false,
    $0_1: null,
    get_attachedElement: function() { return this.$0_1 },
    get_isActive: function() { return this.$B_1 },
    get_isVisible: function() { return this.$Q_1 },
    set_isVisible: function($p0) {
        if (!this.$Q_1 && $p0) {
            this.$Q_1 = true;
            this.$1G_1()
        }
        if (this.$Q_1 && !$p0) {
            this.$Q_1 = false;
            this.$10_1()
        }
        return $p0
    },
    get_unexpandedControlTop: function() { return this.$S_1 },
    set_unexpandedControlTop: function($p0) {
        this.$S_1 = $p0;
        return $p0
    },
    onPropertyChanged: function($p0) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, new Sys.PropertyChangedEventArgs($p0))
    },
    add_triggerHidePopupEvent: function($p0) { this.get_events().addHandler("triggerHidePopupEvent", $p0) },
    remove_triggerHidePopupEvent: function($p0) { this.get_events().removeHandler("triggerHidePopupEvent", $p0) },
    fireEvent: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    },
    activate: function() {
        if (!this.$B_1) {
            this.$B_1 = true;
            this.$0_1.addClass("popup");
            this.$0_1.addClass("scrollerPopup");
            this.$0_1.scroll(this.$$d_$1E_1)
        }
    },
    initializeItems: function() {
        if (IsNull(this.$P_1)) {
            this.$P_1 = $P_CRM(window.document.createElement("div"));
            this.$0_1.append(this.$P_1)
        }
        this.$v_1();
        this.$p_1()
    },
    $1G_1: function() {
        this.initializeItems();
        this.$0_1.show();
        this.$12_1()
    },
    $10_1: function() { this.$0_1.hide() },
    $1E_1: function($p0) { this.$p_1() },
    $v_1: function() {
        this.$P_1.empty();
        this.$d_1 = -1;
        this.$c_1 = 0;
        this.$f_1 = 0
    },
    $12_1: function() { this.$0_1.scrollTop(this.$s_1(0)) },
    $s_1: function($p0) {
        var $v_0 = 88 - this.$S_1 % 88, $v_1 = $v_0 === 88 ? 0 : $v_0, $v_2 = 2640, $v_3 = $p0 * 88;
        return $v_1 + $v_2 + $v_3
    },
    $p_1: function() {
        var $v_0 = this.$0_1.scrollTop(), $v_1;
        if (!$v_0) $v_1 = Math.floor(-this.$S_1 / 88);
        else $v_1 = Math.floor($v_0 / 88) + this.$c_1;
        var $v_2 = this.$S_1 % 88, $v_3 = Math.ceil((this.$0_1.height() - $v_2) / 88), $v_4 = $v_1 + $v_3 - 1;
        if (this.$c_1 > $v_1 - 2) while (this.$c_1 > $v_1 - 30 && !this.get_$j_1()) this.$l_1(true);
        if (this.$d_1 < $v_4 + 2) while (this.$d_1 < $v_4 + 30 && !this.get_$j_1()) this.$l_1(false)
    },
    get_$j_1: function() { return this.get_hasMaxItems() && this.$f_1 >= this.$Y_1 },
    $l_1: function($p0) {
        var $v_0 = $p0 ? --this.$c_1 : ++this.$d_1;
        if (this.get_$j_1()) return;
        var $v_1 = this.createItem($v_0);
        if ($p0) {
            this.$P_1.prepend($v_1.$0_1);
            this.$0_1.scrollTop(this.$0_1.scrollTop() + 88)
        } else this.$P_1.append($v_1.$0_1);
        this.$f_1++
    },
    get_maxItems: function() { return this.$Y_1 },
    set_maxItems: function($p0) {
        this.$Y_1 = $p0;
        return $p0
    },
    get_hasMaxItems: function() { return this.$Y_1 > 0 }
};
Mscrm.TimeScroller = function($p0, $p1, $p2) {
    this.$$d_$m_1 = Function.createDelegate(this, this.$m_1);
    Mscrm.TimeScroller.initializeBase(this);
    this.$1_1 = $p1;
    this.$0_1 = $p0;
    this.setShortTimePattern($p2);
    this.$A_1 = new Mscrm.DateTimeScrollerComponent(this.$0_1.find(".hourComponent"));
    this.$A_1.set_date(this.$1_1);
    this.$A_1.set_dateComponent("hour");
    this.$A_1.$4_2 = this.$W_1(this.$A_1.$3_2);
    var $$t_9 = this;
    this.$A_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_9.set_date($$t_9.$A_1.$1_2) });
    this.$A_1.add_showPopupEvent(this.$$d_$m_1);
    this.$A_1.activate();
    this.$C_1 = new Mscrm.DateTimeScrollerComponent(this.$0_1.find(".minuteComponent"));
    this.$C_1.set_date(this.$1_1);
    this.$C_1.set_dateComponent("minute");
    this.$C_1.$4_2 = this.$W_1(this.$C_1.$3_2);
    var $$t_A = this;
    this.$C_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_A.set_date($$t_A.$C_1.$1_2) });
    this.$C_1.add_showPopupEvent(this.$$d_$m_1);
    this.$C_1.activate();
    this.$E_1 = new Mscrm.DateTimeScrollerComponent(this.$0_1.find(".periodComponent"));
    this.$E_1.set_date(this.$1_1);
    this.$E_1.set_dateComponent("period");
    this.$E_1.$4_2 = this.$W_1(this.$E_1.$3_2);
    var $$t_B = this;
    this.$E_1.add_dateChangedEvent(function($p1_0, $p1_1) { $$t_B.set_date($$t_B.$E_1.$1_2) });
    this.$E_1.add_showPopupEvent(this.$$d_$m_1);
    this.$E_1.activate()
};
Mscrm.TimeScroller.prototype = {
    $0_1: null,
    $1_1: null,
    $A_1: null,
    $C_1: null,
    $E_1: null,
    $J_1: null,
    $F_1: null,
    get_attachedElement: function() { return this.$0_1 },
    get_date: function() { return this.$1_1 },
    set_date: function($p0) {
        if (this.$1_1 !== $p0) {
            if (IsNull($p0) || !Date.isInstanceOfType($p0)) this.$1_1 = new Date;
            else this.$1_1 = $p0;
            this.$A_1.set_date(this.$1_1);
            this.$C_1.set_date(this.$1_1);
            this.$E_1.set_date(this.$1_1);
            this.$n_1("date")
        }
        return $p0
    },
    add_dateChangedEvent: function($p0) { this.get_events().addHandler("date", $p0) },
    remove_dateChangedEvent: function($p0) { this.get_events().removeHandler("date", $p0) },
    $n_1: function($p0) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, new Sys.PropertyChangedEventArgs($p0))
    },
    add_showPopupEvent: function($p0) { this.get_events().addHandler("showPopupEvent", $p0) },
    remove_showPopupEvent: function($p0) { this.get_events().removeHandler("showPopupEvent", $p0) },
    $H_1: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    },
    hideSubcomponents: function() {
        this.$A_1.set_showingPopup(false);
        this.$C_1.set_showingPopup(false);
        this.$E_1.set_showingPopup(false)
    },
    $m_1: function($p0, $p1) { this.$H_1("showPopupEvent", new Mscrm.FormatArguments) },
    setShortTimePattern: function($p0) {
        this.$J_1 = $p0;
        this.$F_1 = {};
        var $v_0 = null, $v_1 = new RegExp("(h)+");
        $v_0 = this.$J_1.match($v_1);
        if (IsNull($v_0) || !$v_0.length) {
            $v_1 = new RegExp("(H)+");
            $v_0 = this.$J_1.match($v_1);
            this.$F_1["hour"] = IsNull($v_0) || !$v_0.length ? "%h" : $v_0[0].length === 1 ? "%" + $v_0[0] : $v_0[0]
        } else this.$F_1["hour"] = $v_0[0].length === 1 ? "%" + $v_0[0] : $v_0[0];
        $v_1 = new RegExp("(m)\\1+");
        $v_0 = this.$J_1.match($v_1);
        this.$F_1["minute"] = IsNull($v_0) || !$v_0.length ? "%m" : $v_0[0];
        $v_1 = new RegExp("(t)\\1+");
        $v_0 = this.$J_1.match($v_1);
        this.$F_1["period"] = IsNull($v_0) || !$v_0.length ? "" : $v_0[0]
    },
    get_$1I_1: function() {
        if (!this.$F_1) {
            this.$F_1 = {};
            this.$F_1["hour"] = "%h";
            this.$F_1["minute"] = "%m";
            this.$F_1["period"] = "tt"
        }
        return this.$F_1
    },
    $W_1: function($p0) { return this.get_$1I_1()[$p0] }
};
Mscrm.DateScroller.registerClass("Mscrm.DateScroller", Sys.Component);
Mscrm.DateTimeScroller.registerClass("Mscrm.DateTimeScroller", Sys.Component);
Mscrm.ScrollerComponent.registerClass("Mscrm.ScrollerComponent", Sys.Component);
Mscrm.DateTimeScrollerComponent.registerClass("Mscrm.DateTimeScrollerComponent", Mscrm.ScrollerComponent);
Mscrm.ScrollerItem.registerClass("Mscrm.ScrollerItem", Sys.Component);
Mscrm.DateTimeScrollerItem.registerClass("Mscrm.DateTimeScrollerItem", Mscrm.ScrollerItem);
Mscrm.ScrollerPopup.registerClass("Mscrm.ScrollerPopup", Sys.Component);
Mscrm.DateTimeScrollerPopup.registerClass("Mscrm.DateTimeScrollerPopup", Mscrm.ScrollerPopup);
Mscrm.TimeScroller.registerClass("Mscrm.TimeScroller", Sys.Component);
Mscrm.DateScroller.showPopupEventKey = "showPopupEvent";
Mscrm.DateScroller.datePropertyName = "date";
Mscrm.DateTimeScroller.dateChangedEventKey = "DateChanged";
Mscrm.DateTimeScroller.timeChangedEventKey = "TimeChanged";
Mscrm.DateTimeScroller.formatChangedEventKey = "FormatChanged";
Mscrm.DateTimeScroller.undoChangesEventKey = "UndoChanges";
Mscrm.DateTimeScroller.confirmChangesEventKey = "ConfirmChanges";
Mscrm.DateTimeScroller.dateComponentYear = "year";
Mscrm.DateTimeScroller.dateComponentYearWithEra = "yearwithera";
Mscrm.DateTimeScroller.dateComponentMonth = "month";
Mscrm.DateTimeScroller.dateComponentDay = "day";
Mscrm.DateTimeScroller.dateComponentHour = "hour";
Mscrm.DateTimeScroller.dateComponentMinute = "minute";
Mscrm.DateTimeScroller.dateComponentPeriod = "period";
Mscrm.DateTimeScrollerComponent.datePropertyName = "Date";
Mscrm.DateTimeScrollerItem.datePropertyName = "Date";
Mscrm.DateTimeScrollerItem.dateComponentPropertyName = "DateComponent";
Mscrm.DateTimeScrollerPopup.datePropertyName = "Date";
Mscrm.ScrollerItem.textPropertyName = "Text";
Mscrm.ScrollerItem.smallTextPropertyName = "SmallText";
Mscrm.ScrollerItem.isCurrentItemPropertyName = "IsCurrentItem";
Mscrm.ScrollerItem.textClassName = "scrollerItemMainLabel";
Mscrm.ScrollerItem.smallTextClassName = "scrollerItemSmallLabel";
Mscrm.ScrollerItem.scrollerItemClassName = "scrollerItem";
Mscrm.ScrollerPopup.triggerHidePopupEventKey = "triggerHidePopupEvent";
Mscrm.TimeScroller.datePropertyName = "date";
Mscrm.TimeScroller.showPopupEventKey = "showPopupEvent";
Type.registerNamespace("XUI");
XUI.ClipboardManager = function() {
    var _this = this, _mimeType = GetMimeType(), _clipboardContext;

    function GetMimeType() {
        if (Sys.Browser
            .agent ==
            Sys.Browser.Safari ||
            Sys.Browser.agent == Sys.Browser.AppleWebKit) return "text/plain";
        else if (Sys.Browser.agent == Sys.Browser.Firefox) return "text/unicode";
        else return "text"
    }

    var clipboardApi = {
            SetData: function(data) {
                window.clipboardData.setData(_mimeType, data);
                return true
            },
            GetData: function(data) { return window.clipboardData.getData(_mimeType) }
        },
        componentsApi = {
            SetData: function(data) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                var stringComp = Components.classes["@mozilla.org/supports-string;1"]
                        .createInstance(Components.interfaces.nsISupportsString),
                    transfComp = Components.classes["@mozilla.org/widget/transferable;1"]
                        .createInstance(Components.interfaces.nsITransferable);
                transfComp.addDataFlavor(_mimeType);
                var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"]
                    .getService(Components.interfaces.nsIClipboard);
                stringComp.data = data;
                transfComp.setTransferData(_mimeType, stringComp, data.length * 2);
                clipboardService.setData(transfComp, null, Components.interfaces.nsIClipboard.kGlobalClipboard);
                return true
            },
            GetData: function(data) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"]
                        .getService(Components.interfaces.nsIClipboard),
                    transfComp = Components.classes["@mozilla.org/widget/transferable;1"]
                        .createInstance(Components.interfaces.nsITransferable);
                transfComp.addDataFlavor(_mimeType);
                var dataComp = {}, length = {};
                clipboardService.getData(transfComp, Components.interfaces.nsIClipboard.kGlobalClipboard);
                transfComp.getTransferData(_mimeType, dataComp, length);
                dataComp = dataComp && dataComp.value.QueryInterface(Components.interfaces.nsISupportsString);
                return dataComp && dataComp.data.substring(0, length.value / 2)
            }
        },
        internalApi = {
            SetData: function(data) {
                _clipboardContext = {};
                _clipboardContext[_mimeType] = data;
                return true
            },
            GetData: function(data) { return _clipboardContext && _clipboardContext[_mimeType] }
        };

    function SelectApi(apiName) {
        if (window.clipboardData && window.clipboardData.setData) return clipboardApi[apiName];
        else if (window.Components)
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                return componentsApi[apiName]
            } catch (e) {
                return internalApi[apiName]
            }
        else return internalApi[apiName]
    }

    this.SetData = function(data) {
        this.SetData = SelectApi("SetData");
        return this.SetData(data)
    };
    this.GetData = function() {
        this.GetData = SelectApi("GetData");
        return this.GetData()
    }
};
Type.registerNamespace("XUI");
XUI.DomUtilities = function() {
    var NodeType = { Element: 1, TextNode: 3, Document: 9 };

    function Trim(strValue) {
        if (strValue != null) return strValue.replace(/^\s*/, "").replace(/\s*$/, "");
        return strValue
    }

    function IsEnumerable(domNode) {
        var nodeType = domNode.nodeType;
        if (nodeType == NodeType.Element) return true;
        if (nodeType == NodeType.TextNode) {
            var textContent = domNode.nodeValue;
            return textContent && Trim(textContent).length > 0
        }
        return false
    }

    function FindEnumerableNode(domNode, sPrevNextSibling) {
        var r = domNode;
        while (r != null && !IsEnumerable(r)) r = r[sPrevNextSibling];
        return r
    }

    var functionsRequiringInit = [
        {
            name: "Contains",
            selector: function() {
                return document.body.contains != null
                    ? function(domNode, otherDomNode) { return domNode && domNode.contains(otherDomNode) }
                    : function(domNode, otherDomNode) {
                        return domNode && domNode.compareDocumentPosition(otherDomNode) >= 16
                    }
            }
        }
    ];

    function UpdateStub(fnInfo) {
        api[fnInfo.name] = function() {
            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments)
        }
    }

    for (var api = {
                 NodeType: NodeType,
                 HasChildElements: function(domNode, countEmptyNodes) {
                     if (domNode.hasChildNodes()) {
                         var childNodes = domNode.childNodes;
                         if (countEmptyNodes) return childNodes.length > 0;
                         else return this.GetFirstChild(domNode) != null
                     } else return false
                 },
                 GetFirstChild: function(domNode) { return FindEnumerableNode(domNode.firstChild, "nextSibling") },
                 GetLastChild: function(domNode) { return FindEnumerableNode(domNode.lastChild, "previousSibling") },
                 GetNextSibling: function(domNode) { return FindEnumerableNode(domNode.nextSibling, "nextSibling") },
                 GetPrevSibling: function(domNode) {
                     return FindEnumerableNode(domNode.previousSibling, "previousSibling")
                 },
                 ForEachChild: function(domNode, fnProcessElement) {
                     var curNode = this.GetFirstChild(domNode);
                     while (curNode != null && !fnProcessElement(curNode)) curNode = this.GetNextSibling(curNode);
                     return curNode
                 },
                 GetChildElementAt: function(domNode, index) {
                     var idx = 0;

                     function ProcessNode(node) { return idx++ == index }

                     return this.ForEachChild(domNode, ProcessNode)
                 },
                 GetBaseName: function(domNode) { return domNode.localName || domNode.baseName || domNode.nodeName },
                 Contains: function(domNode, otherDomNode) {}
             },
        i = 0;
        i < functionsRequiringInit.length;
        i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();
Type.registerNamespace("XUI");
XUI.Html = function() {
    var functionsRequiringInit = [
        {
            name: "SetText",
            selector: function() {
                return "textContent" in document.body
                    ? function(domNode, newVal) { domNode.textContent = newVal }
                    : function(domNode, newVal) { domNode.innerText = newVal }
            }
        }, {
            name: "GetText",
            selector: function() {
                return "textContent" in document.body
                    ? function(domNode) { return domNode.textContent }
                    : function(domNode) {
                        if (domNode.nodeName == "INPUT" &&
                            Sys.Browser.agent == Sys.Browser.InternetExplorer &&
                            Sys.Browser.version < 9) return domNode.value;
                        else return domNode.innerText
                    }
            }
        }, {
            name: "GetOuterHTML",
            selector: function() {
                return "outerHTML" in document.body
                    ? function(domNode) { return domNode.outerHTML }
                    : function(domNode) {
                        if ("outerHTML" in domNode) return domNode.outerHTML;
                        else {
                            var oDoc = domNode.ownerDocument,
                                oClone = domNode.cloneNode(true),
                                oTemp = oDoc.createElement("div");
                            oDoc.documentElement.appendChild(oTemp);
                            oTemp.appendChild(oClone);
                            var sHTML = oTemp.innerHTML;
                            oDoc.documentElement.removeChild(oTemp);
                            return sHTML
                        }
                    }
            }
        }, {
            name: "SetOuterHTML",
            selector: function() {
                return "outerHTML" in document.body
                    ? function(domNode, newVal) { domNode.outerHTML = newVal }
                    : function(domNode, newVal) {
                        var oTemp = document.createElement("div");
                        document.body.appendChild(oTemp);
                        oTemp.innerHTML = newVal;
                        var parentNode = domNode.parentNode;
                        parentNode.replaceChild(oTemp.firstChild.cloneNode(true), domNode);
                        document.body.removeChild(oTemp)
                    }
            }
        }, {
            name: "GetComputedStyle",
            selector: function() {
                return document.body.currentStyle != null
                    ? function(domNode, camelStyleName) {
                        var temp = domNode.currentStyle == null ? domNode.children : null,
                            r = domNode.currentStyle[camelStyleName];
                        if (r.indexOf("%") > 0 || r.indexOf("em") > 0) throw"RelativeMeasurementInComputedStyle";
                        return r
                    }
                    : function(domNode, camelStyleName) {
                        var computedStyle = document.defaultView.getComputedStyle(domNode, null);
                        return computedStyle != null ? computedStyle[camelStyleName] : null
                    }
            }
        }, {
            name: "SetFloat",
            selector: function() {
                return document.body.style.styleFloat != null
                    ? function(domNode, newVal) { domNode.style.styleFloat = newVal }
                    : function(domNode, newVal) { domNode.style.cssFloat = newVal }
            }
        }, {
            name: "SetOpacity",
            selector: function() {
                return document.body.style.opacity != null
                    ? function(domNode, newVal) { domNode.style.opacity = newVal }
                    : function(domNode, newVal) {
                        domNode.style.filter = newVal == 1 ? "" : "alpha(opacity=" + newVal * 100 + ")"
                    }
            }
        }, {
            name: "GetOpacity",
            selector: function() {
                return document.body.style.opacity != null
                    ? function(domNode) {
                        var o = domNode.style.opacity;
                        return o != null && o != "" ? parseFloat(o) : 1
                    }
                    : function(domNode) {
                        var f = domNode.style.filter;
                        return f != null && f != ""
                            ? parseInt(f.replace("alpha(opacity=", "").replace(")", "")) / 100
                            : 1
                    }
            }
        }, {
            name: "RemoveOpacity",
            selector: function() {
                return document.body.style.opacity != null
                    ? function(domNode) { domNode.style.opacity = "" }
                    : function(domNode) { domNode.style.filter = "" }
            }
        }, {
            name: "IsContentEditable",
            selector: function() {
                return document.body.isContentEditable != null
                    ? function(domNode) { return domNode.isContentEditable }
                    : function(domNode) { return domNode.contentEditable }
            }
        }, {
            name: "RotateElement",
            selector: function() {
                if (document.body.style.MozTransform != null)
                    return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                        domNode.style.MozTransform = "rotate(" + degrees + "deg)"
                    };
                if (document.body.style.OTransform != null)
                    return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                        domNode.style.OTransform = "rotate(" + degrees + "deg)"
                    };
                if (document.body.style
                    .WebkitTransform !=
                    null)
                    return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                        domNode.style.WebkitTransform = "rotate(" + degrees + "deg)"
                    };
                return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                    var deg2radians = Math.PI * 2 / 360,
                        radians = degrees * deg2radians,
                        costheta = Math.cos(radians),
                        sintheta = Math.sin(radians),
                        newHeight = origHeight * Math.abs(costheta) + origWidth * Math.abs(sintheta),
                        newWidth = origWidth * Math.abs(costheta) + origHeight * Math.abs(sintheta),
                        newXNear = origXMid - newWidth / 2,
                        newYTop = origYMid - newHeight / 2;
                    domNode.style.left = newXNear + "px";
                    domNode.style.top = newYTop + "px";
                    domNode.filters.item(0).M11 = costheta;
                    domNode.filters.item(0).M12 = -sintheta;
                    domNode.filters.item(0).M21 = sintheta;
                    domNode.filters.item(0).M22 = costheta
                }
            }
        }, {
            name: "CreateDomEvent",
            selector: function() {
                return "createEvent" in document
                    ? function(eventType) {
                        var eventObj = document.createEvent("Event");
                        eventObj.initEvent(eventType, true, true);
                        return eventObj
                    }
                    : function(eventType) {
                        var eventObj = document.createEventObject();
                        eventObj.type = eventType;
                        return eventObj
                    }
            }
        }, {
            name: "DispatchDomEvent",
            selector: function() {
                return "dispatchEvent" in document
                    ? function(domNode, eventObj) { return domNode.dispatchEvent(eventObj) }
                    : function(domNode, eventObj) { return domNode.fireEvent("on" + eventObj.type, eventObj) }
            }
        }
    ];

    function UpdateStub(fnInfo) {
        api[fnInfo.name] = function() {
            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments)
        }
    }

    for (var api = {
                 DomUtils: XUI.DomUtilities,
                 GetDirection: function() { return document.documentElement.getAttribute("dir") },
                 SetText: function(domNode, newVal) {},
                 GetText: function(domNode) {},
                 GetOuterHTML: function(domNode) {},
                 SetOuterHTML: function(domNode, newVal) {},
                 GetComputedStyle: function(domNode, camelStyleName) {},
                 SetFloat: function(domNode, newVal) {},
                 SetOpacity: function(domNode, newVal) {},
                 GetOpacity: function(domNode) {},
                 RemoveOpacity: function(domNode) {},
                 IsContentEditable: function(domNode) {},
                 RotateElement: function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {},
                 CreateDomEvent: function(eventType) {},
                 DispatchDomEvent: function(domNode, eventObj) {}
             },
        i = 0;
        i < functionsRequiringInit.length;
        i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();
Type.registerNamespace("XUI");
XUI.Xml = function() {
    function GetActiveXObject() {
        for (var progIDs = [
                     "Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0",
                     "Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument", "MSXML.DOMDocument"
                 ],
            i = 0;
            i < progIDs.length;
            i++)
            try {
                var xmlDoc = new ActiveXObject(progIDs[i]);
                return xmlDoc
            } catch (ex) {
            }
        return null
    }

    MSXML_DOMParser = function() {};
    MSXML_DOMParser.prototype.parseFromString = function(sValue, contentType) {
        var xmlDoc = GetActiveXObject();
        if (xmlDoc != null)
            try {
                xmlDoc.async = false;
                xmlDoc.loadXML(sValue);
                xmlDoc.setProperty("SelectionLanguage", "XPath");
                return xmlDoc
            } catch (e) {
            }
        return null
    };
    MSXML_XMLSerializer = function() {};
    MSXML_XMLSerializer.prototype.serializeToString = function(node) { return node.xml || "" };
    MSXML_XPathResult = function() {
        this.singleNodeValue = null;
        this._resultNodes = null;
        var curItemIdx = 0;
        this.iterateNext = function() {
            return curItemIdx < this._resultNodes.length ? this._resultNodes[curItemIdx++] : null
        }
    };
    var ORDERED_NODE_ITERATOR_TYPE = window.XPathResult != null ? XPathResult.ORDERED_NODE_ITERATOR_TYPE : 5,
        FIRST_ORDERED_NODE_TYPE = window.XPathResult != null ? XPathResult.FIRST_ORDERED_NODE_TYPE : 9;
    MSXML_XPathEvaluator = function() {};
    MSXML_XPathEvaluator.prototype.evaluate = function(sXPath,
        contextNode,
        namespaceResolver,
        resultType,
        xPathResultObj) {
        var executeNamespaceResolver = typeof namespaceResolver === "undefined" ||
            typeof window.PreventNamespaceResolver !== "undefined" && window.PreventNamespaceResolver == true
            ? false
            : true;
        executeNamespaceResolver && namespaceResolver();
        var result;
        if (resultType == ORDERED_NODE_ITERATOR_TYPE) {
            result = new MSXML_XPathResult;
            result._resultNodes = customSelectNodes(contextNode, sXPath)
        } else if (resultType == FIRST_ORDERED_NODE_TYPE) {
            result = new MSXML_XPathResult;
            result.singleNodeValue = customSelectSingleNode(contextNode, sXPath)
        }
        return result
    };

    function isPreventNamespaceResolver() {
        return typeof window.PreventNamespaceResolver !== "undefined" && window.PreventNamespaceResolver == true
    }

    function customSelectNodes(contextNode, sXPath) {
        if (!isPreventNamespaceResolver() && typeof contextNode.selectNodes !== "undefined"
        ) return contextNode.selectNodes(sXPath);
        else if (isPreventNamespaceResolver() || typeof isMobileClient !== "undefined" && isMobileClient) {
            var tag = selectTag(contextNode), cssSelector = transformXPathSelectorToCSSSelector(sXPath, tag);
            try {
                return $(contextNode).find(cssSelector)
            } catch (e) {
                return contextNode.getElementsByTagName(cssSelector)
            }
        } else return querySelectorAllNodes(contextNode, sXPath)
    }

    function customSelectSingleNode(contextNode, sXPath) {
        if (!isPreventNamespaceResolver() && typeof contextNode.selectSingleNode !== "undefined"
        ) return contextNode.selectSingleNode(sXPath);
        else if (isPreventNamespaceResolver() || typeof isMobileClient !== "undefined" && isMobileClient) {
            var tag = selectTag(contextNode), cssSelector = transformXPathSelectorToCSSSelector(sXPath, tag), selected;
            try {
                selected = $(contextNode).find(cssSelector)[0]
            } catch (e) {
                selected = contextNode.getElementsByTagName(cssSelector)[0]
            }
            if (typeof selected == "undefined") {
                var allNodes;
                try {
                    allNodes = $(contextNode).find("*")
                } catch (e) {
                    allNodes = contextNode.getElementsByTagName("*")
                }
                for (var searchTag = transformXPathSelectorToTagName(sXPath, tag), i = 0;
                    i < allNodes.length;
                    i++
                ) if (selectTag(allNodes[i]) == searchTag) return allNodes[i]
            }
            return selected
        } else return querySelectorNode(contextNode, sXPath)
    }

    function selectTag(node) {
        var tag;
        if (!isNullOrEmptyString(node.tagName)) tag = node.tagName;
        else if (typeof node
            .documentElement !==
            "undefined" &&
            !isNullOrEmptyString(node.documentElement.tagName)) tag = node.documentElement.tagName;
        return tag
    }

    function querySelectorAllNodes(contextNode, sXPath) {
        var cssSelector = transformXPathSelectorToCSSSelector(sXPath, "");
        cssSelector = cssSelector.replace(/@/g, "");
        cssSelector = cssSelector.replace(/[\w]+\\:/g, function(x) { return "*|" });
        return contextNode.querySelectorAll(cssSelector)
    }

    function querySelectorNode(contextNode, sXPath) {
        var cssSelector = transformXPathSelectorToCSSSelector(sXPath, "");
        cssSelector = cssSelector.replace(/@/g, "");
        cssSelector = cssSelector.replace(/[\w]+\\:/g, function(x) { return "*|" });
        return contextNode.querySelector(cssSelector)
    }

    function transformXPathSelectorToCSSSelector(sXPath, tag) {
        var cssSelector = sXPath;
        cssSelector = cssSelector.replace(new RegExp("default:", "g"), "");
        cssSelector = cssSelector.replace(new RegExp(":", "g"), "\\:");
        tag = tag.replace(new RegExp(":", "g"), "\\:");
        cssSelector = cssSelector.replace(new RegExp("/", "g"), " ");
        if (typeof Mscrm.MobileUtility !== "undefined" && Mscrm.MobileUtility.isHostedInWindowsPhoneApp()) {
            cssSelector = cssSelector.replace(/\[@id='(.*)\'\]/g, "#$1");
            cssSelector = cssSelector.replace(new RegExp("@", "g"), "")
        }
        cssSelector = cssSelector.trim();
        if (cssSelector.charAt(0) == ".") cssSelector = cssSelector.substr(1);
        else if (!isNullOrEmptyString(tag) &&
            cssSelector.substr(0, tag.length) == tag &&
            cssSelector.length != tag.length) cssSelector = cssSelector.substr(tag.length);
        cssSelector = cssSelector.trim();
        return cssSelector
    }

    function transformXPathSelectorToTagName(sXPath, tag) {
        var tagName = sXPath;
        tagName = tagName.replace(new RegExp("default:", "g"), "");
        tagName = tagName.replace(new RegExp("/", "g"), " ");
        if (typeof Mscrm.MobileUtility !== "undefined" && Mscrm.MobileUtility.isHostedInWindowsPhoneApp()) {
            tagName = tagName.replace(/\[@id='(.*)\'\]/g, "#$1");
            tagName = tagName.replace(new RegExp("@", "g"), "")
        }
        tagName = tagName.trim();
        if (tagName.charAt(0) == ".") tagName = tagName.substr(1);
        else if (!isNullOrEmptyString(tag) && tagName.substr(0, tag.length) == tag && tagName.length != tag.length
        ) tagName = tagName.substr(tag.length);
        tagName = tagName.trim();
        return tagName
    }

    function ShouldUseActiveXObject() {
        if ("ActiveXObject" in window)
            try {
                new ActiveXObject("Microsoft.XMLDOM");
                return true
            } catch (e) {
                return false
            }
        return false
    }

    function GetDOMParser() {
        if (ShouldUseActiveXObject()) return new MSXML_DOMParser;
        else {
            if (window.XMLDocument != null &&
            (navigator.userAgent.indexOf(" MSIE ") > -1 ||
                (navigator.userAgent.indexOf("Trident/7.0") > -1 || navigator.userAgent.indexOf("rv:11.0") > -1))) {
                if (window.XMLDocument.prototype
                    .setProperty ==
                    null) window.XMLDocument.prototype.setProperty = function(k, v) {};
                if (window.XMLDocument.prototype
                    .getProperty ==
                    null) window.XMLDocument.prototype.getProperty = function(k) { return "" };
                if (window.XMLDocument.prototype
                    .selectSingleNode ==
                    null)
                    window.XMLDocument.prototype
                        .selectSingleNode = function(expression) { return querySelectorNode(this, expression) };
                if (window.XMLDocument.prototype
                    .selectNodes ==
                    null)
                    window.XMLDocument.prototype
                        .selectNodes = function(expression) { return querySelectorAllNodes(this, expression) }
            }
            return new DOMParser
        }
    }

    function GetXMLSerializer() {
        if (ShouldUseActiveXObject()) return new MSXML_XMLSerializer;
        else return new XMLSerializer
    }

    function GetXPathEvaluator() {
        if (window.ActiveXObject != null || !window.XPathEvaluator) return new MSXML_XPathEvaluator;
        else
            try {
                var evaluator = new XPathEvaluator,
                    contextNode = GetDOMParser()
                        .parseFromString("<root />", "text/xml");
                evaluator.evaluate("/root", contextNode, null, FIRST_ORDERED_NODE_TYPE, null);
                return evaluator
            } catch (e) {
                return new MSXML_XPathEvaluator
            }
    }

    var reusableOjbects = {
        DOMParser: { instance: null, constructor: GetDOMParser },
        XMLSerializer: { instance: null, constructor: GetXMLSerializer },
        XPathEvaluator: { instance: null, constructor: GetXPathEvaluator }
    };

    function GetReusableObject(name) {
        if (reusableOjbects[name].instance == null)
            reusableOjbects[name].instance = reusableOjbects[name].constructor();
        return reusableOjbects[name].instance
    }

    var defaultReturnIfXmlDocNoSetproperty = function(contextNode, oNamespaces) {
            if (oNamespaces != null) return function(sPrefix) { return oNamespaces[sPrefix] };
            return null
        },
        functionsRequiringInit = [
            {
                name: "GetParserError",
                selector: function(xmlDoc) {
                    var fnGetParserError;
                    if (xmlDoc != null && xmlDoc.parseError != null)
                        fnGetParserError = function(xmlDoc) {
                            var parserError;
                            if (xmlDoc.parseError != 0) {
                                var props = ["errorCode", "reason", "line", "linepos", "srcText", "url", "filepos"];
                                parserError = "";
                                for (var i = 0;
                                    i < props.length;
                                    i++
                                ) parserError += props[i] + ": " + xmlDoc.parseError[props[i]] + "\n"
                            }
                            return parserError
                        };
                    else
                        fnGetParserError = function(xmlDoc) {
                            var parserError;
                            if (xmlDoc.documentElement.namespaceURI ==
                                "http://www.mozilla.org/newlayout/xml/parsererror.xml" &&
                                xmlDoc.documentElement
                                .tagName ==
                                "parsererror") parserError = xmlDoc.documentElement.textContent;
                            else if (xmlDoc.documentElement.firstChild &&
                                xmlDoc.documentElement.firstChild
                                .tagName ==
                                "parsererror") parserError = xmlDoc.documentElement.firstChild.textContent;
                            return parserError
                        };
                    return fnGetParserError
                }
            }, {
                name: "GetText",
                selector: function(contextNode) {
                    return function(contextNode) {
                        if (contextNode == null) return "";
                        return "textContent" in contextNode ? contextNode.textContent : contextNode.text
                    }
                }
            }, {
                name: "SetText",
                selector: function(contextNode) {
                    return function(contextNode, newValue) {
                        if (contextNode != null)
                            "textContent" in contextNode
                                ? (contextNode.textContent = newValue)
                                : (contextNode.text = newValue)
                    }
                }
            }, {
                name: "GetNamespaceResolver",
                selector: function(contextNode) {
                    var xmlDoc = contextNode.nodeType == XUI.DomUtilities.NodeType.Document
                        ? contextNode
                        : contextNode.ownerDocument;
                    return "setProperty" in xmlDoc
                        ? function(contextNode, oNamespaces) {
                            return function(sPrefix) {
                                var xmlDoc = contextNode.nodeType == XUI.DomUtilities.NodeType.Document
                                    ? contextNode
                                    : contextNode.ownerDocument;
                                try {
                                    xmlDoc.setProperty("SelectionLanguage", "XPath")
                                } catch (ex) {
                                    Mscrm.CrmDebug.fail("Can't access setProperty method in XmlDoc");
                                    return defaultReturnIfXmlDocNoSetproperty
                                }
                                if (oNamespaces != null) {
                                    var nsDeclarations = [], nsString = "xmlns:{0}='{1}'";
                                    for (var prefix in oNamespaces
                                    ) nsDeclarations.push(String.format(nsString, prefix, oNamespaces[prefix]));
                                    xmlDoc.setProperty("SelectionNamespaces", nsDeclarations.join(" "))
                                }
                            }
                        }
                        : defaultReturnIfXmlDocNoSetproperty
                }
            }, {
                name: "CreateElementNS",
                selector: function(xmlDoc) {
                    return "createElementNS" in xmlDoc
                        ? function(xmlDoc, namespaceURI, qualifiedName) {
                            return xmlDoc.createElementNS(namespaceURI, qualifiedName)
                        }
                        : function(xmlDoc, namespaceURI, qualifiedName) {
                            return xmlDoc.createNode(1, qualifiedName, namespaceURI)
                        }
                }
            }, {
                name: "CreateDocument",
                selector: function() {
                    return "implementation" in document &&
                        "createDocument" in document.implementation &&
                        !ShouldUseActiveXObject()
                        ? function() { return document.implementation.createDocument(null, null, null) }
                        : function() { return GetActiveXObject() }
                }
            }
        ];

    function UpdateStub(fnInfo) {
        api[fnInfo.name] = function() {
            api[fnInfo.name] = fnInfo.selector(arguments[0]);
            return api[fnInfo.name].apply(api, arguments)
        }
    }

    for (var api = {
                 DomUtils: XUI.DomUtilities,
                 DOMParser: GetReusableObject("DOMParser"),
                 XMLSerializer: GetReusableObject("XMLSerializer"),
                 XPathEvaluator: GetReusableObject("XPathEvaluator"),
                 Load: function(sUrl, bAsync, fnOnSuccess, fnOnFailure) {
                     var xmlhttp = new XMLHttpRequest;
                     if (bAsync) xmlhttp.onreadystatechange = WaitForReadyState;
                     try {
                         xmlhttp.open("GET", sUrl, bAsync);
                         Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
                         xmlhttp.send()
                     } catch (ex) {
                         fnOnFailure(400, null);
                         return null
                     }
                     !bAsync && CheckXmlHttpResult();

                     function WaitForReadyState() {
                         if (xmlhttp.readyState == 4) {
                             xmlhttp.onreadystatechange = function() {};
                             CheckXmlHttpResult()
                         }
                     }

                     function CheckXmlHttpResult() {
                         if (xmlhttp.status == 200) fnOnSuccess(xmlhttp.responseXML);
                         else fnOnFailure(xmlhttp.status, xmlhttp.responseXML)
                     }
                 },
                 LoadXml: function(sXml) { return this.DOMParser.parseFromString(sXml, "text/xml") },
                 SelectNodes: function(contextNode, sXPath, oNamespaces) {
                     var result = [],
                         xPathNodes = this.XPathEvaluator
                             .evaluate(sXPath,
                                 contextNode,
                                 this.GetNamespaceResolver(contextNode, oNamespaces),
                                 ORDERED_NODE_ITERATOR_TYPE,
                                 null);
                     if (xPathNodes != null) {
                         var node = xPathNodes.iterateNext();
                         while (node != null) {
                             result.push(node);
                             node = xPathNodes.iterateNext()
                         }
                     }
                     return result
                 },
                 SelectSingleNode: function(contextNode, sXPath, oNamespaces) {
                     var xPathNode = this.XPathEvaluator
                         .evaluate(sXPath,
                             contextNode,
                             this.GetNamespaceResolver(contextNode, oNamespaces),
                             FIRST_ORDERED_NODE_TYPE,
                             null);
                     return xPathNode != null ? xPathNode.singleNodeValue : null
                 },
                 CreateNSDictionary: function(contextNode) {
                     var resolver = {};
                     if (contextNode)
                         for (var attribList = contextNode.attributes, attribLength = attribList.length, i = 0;
                             i < attribLength;
                             i++) {
                             var attrib = attribList.item(i);
                             if (attrib.prefix == "xmlns")
                                 resolver[XUI.DomUtilities.GetBaseName(attrib)] = attrib.nodeValue;
                             else if (attrib.nodeName == "xmlns") resolver["default"] = attrib.nodeValue
                         }
                     return resolver
                 },
                 GetParserError: function(xmlDoc) {},
                 GetText: function(contextNode) {},
                 SetText: function(contextNode, newValue) {},
                 GetNamespaceResolver: function(contextNode, oNamespaces) {},
                 CreateElementNS: function(xmlDoc, namespaceURI, qualifiedName) {},
                 CreateDocument: function() {}
             },
        i = 0;
        i < functionsRequiringInit.length;
        i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();

function RemoteCommand(sObject, sCommand, sUrlBase, commandNameSpace) {
    this.Service = sObject;
    this.Command = sCommand;
    this.GetParameter = getParameter;
    this.ErrorHandler = RemoteCommandDefaultErrorHandler;
    this.Reference = null;
    this.Aborted = false;
    this.IgnoreCurrentSolutionContext = false;
    this.IncludeContextInPath = false;
    this.Query = null;
    var sXmlDocumentStart = "",
        sXmlDocumentEnd = "",
        oXmlHttp = new XMLHttpRequest,
        aParameters = [],
        sCommandNamespace = _sWebServicesNamespace;
    if (!IsNull(commandNameSpace)) sCommandNamespace = commandNameSpace;
    if (IsNull(sUrlBase)) sUrlBase = "/AppWebServices/";
    var sUrl = Mscrm.CrmUri.create(sUrlBase + sObject + ".asmx").toString();
    sXmlDocumentStart += '<?xml version="1.0" encoding="utf-8" ?>';
    sXmlDocumentStart +=
        '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">';
    sXmlDocumentStart += "<soap:Body>";
    sXmlDocumentStart += "<" + CrmEncodeDecode.CrmXmlEncode(sCommand) + ' xmlns="' + sCommandNamespace + '">';
    sXmlDocumentEnd += "</" + CrmEncodeDecode.CrmXmlEncode(sCommand) + ">";
    sXmlDocumentEnd += "</soap:Body>";
    sXmlDocumentEnd += "</soap:Envelope>";
    this.Execute = execute;
    this.SetParameter = setParameter;
    this.SetXmlParameter = setXmlParameter;
    this.Abort = abort;

    function getParameter(sName) {
        var i = aParameters[sName];
        if (!IsNull(i)) return aParameters[i];
        return null
    }

    function setParameter(sName, oValue) {
        var sValue;
        if (IsNull(oValue)) sValue = "";
        else if (isArray(oValue)) {
            var sType = oValue.type;
            if (IsNull(sType) && oValue.length > 0) sType = "object";
            sValue = "";
            for (var i = 0; i < oValue.length; i++)
                sValue += "<" +
                    CrmEncodeDecode.CrmXmlEncode(sType) +
                    ">" +
                    CrmEncodeDecode.CrmXmlEncode(oValue[i]) +
                    "</" +
                    CrmEncodeDecode.CrmXmlEncode(sType) +
                    ">"
        } else sValue = CrmEncodeDecode.CrmXmlEncode(oValue);
        var oParameter = new CommandParameter(sName, sValue);
        pushCommandParameter(oParameter)
    }

    function setXmlParameter(sName, sXmlValue) {
        var oParameter = new CommandParameter(sName, IsNull(sXmlValue) ? "" : sXmlValue);
        pushCommandParameter(oParameter)
    }

    function pushCommandParameter(oParameter) {
        if (!IsNull(aParameters[oParameter.Name])) aParameters[aParameters[oParameter.Name]] = oParameter;
        else {
            aParameters[oParameter.Name] = aParameters.length;
            aParameters.push(oParameter)
        }
    }

    function abort() {
        if (!this.Aborted) {
            this.Aborted = true;
            oXmlHttp.abort()
        }
    }

    function execute(funAsyncCallbackFunction, timeout, ignoreExceptions) {
        var sXmlDocument = sXmlDocumentStart, noEx = IsNull(ignoreExceptions) ? false : ignoreExceptions;
        oXmlHttp.readyState > 0 && oXmlHttp.readyState < 4 && this.Abort();
        oXmlHttp.onreadystatechange = null;
        for (var i = 0; i < aParameters.length; i++) sXmlDocument += aParameters[i].GetXml();
        sXmlDocument += sXmlDocumentEnd;
        var async = !IsNull(funAsyncCallbackFunction), requestSw = null;
        if (Mscrm.MetricsStopwatch) {
            requestSw = new Mscrm.MetricsStopwatch("RemoteCommand.Execute");
            requestSw.properties = { IsAsync: async, Service: this.Service };
            requestSw.start()
        }
        if (async) {
            var oAsyncResultHandler = new AsyncResultHandler(this, oXmlHttp, funAsyncCallbackFunction);
            oXmlHttp.onreadystatechange = oAsyncResultHandler.ReadyStateChanged;
            oXmlHttp.metricsStopwatch = requestSw
        }
        var bTryAgain, remoteCmdResult = null, fullUrl = IsNull(this.Query) ? sUrl : sUrl + "?" + this.Query;
        do {
            bTryAgain = false;
            var commandUrl = Mscrm.CrmUri.create(fullUrl);
            commandUrl.set_includeContextInPath(this.IncludeContextInPath);
            oXmlHttp.open("POST", commandUrl.toString(), async);
            Mscrm.Utilities.setResponseTypeToMSXml(oXmlHttp);
            Mscrm.MetricsReporting && Mscrm.MetricsReporting.instance().addXMLHttpRequestHeaders(oXmlHttp);
            oXmlHttp.setRequestHeader("SOAPAction", sCommandNamespace + "/" + sCommand);
            oXmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
            oXmlHttp.setRequestHeader("Content-Length", sXmlDocument.length);
            SetTokenInHeader(oXmlHttp, Mscrm.CrmUri.create(fullUrl));
            !this.IgnoreCurrentSolutionContext && Mscrm.SolutionDecorater.setSolutionIdInRequestHeader(oXmlHttp);
            this.Aborted = false;
            try {
                if (!IsNull(timeout) && timeout >= 0)
                    try {
                        oXmlHttp.timeout = timeout
                    } catch (e) {
                        if (!noEx) throw e
                    }
                oXmlHttp.send(sXmlDocument);
                if (oXmlHttp.readyState == 0) {
                    oXmlHttp.onreadystatechange = function() {};
                    abort()
                } else if (!async) {
                    remoteCmdResult = new RemoteCommandResult(this, oXmlHttp, false);
                    if (remoteCmdResult.Success == false) bTryAgain = remoteCmdResult.Retry;
                    else if (requestSw != null) {
                        var reqId = oXmlHttp.getResponseHeader("REQ_ID");
                        if (reqId != null) requestSw.properties["ReqId"] = reqId;
                        requestSw.stop()
                    }
                }
            } catch (e) {
                var sErrorText = LOCID_REMOTECOMMAND_ERROR;
                if (noEx) bTryAgain = false;
                else bTryAgain = window.confirm(sErrorText)
            }
            if (bTryAgain) oXmlHttp = new XMLHttpRequest
        } while (bTryAgain);
        if (!async) return remoteCmdResult
    }
}

function RemoteCommandDefaultErrorHandler(sHResult, oXmlNode) {
    if (sHResult == null) sHResult = "Not available";
    var sErrMessage = "";
    if (oXmlNode != null) {
        var oDescription = XUI.Xml.SelectSingleNode(oXmlNode,
            "error/description",
            XUI.Xml.CreateNSDictionary(oXmlNode.ownerDocument.documentElement));
        if (!IsNull(oDescription)) sErrMessage = XUI.Xml.GetText(oDescription)
    }
    var errInfo = Mscrm.ErrorInformation.createFromDoc(oXmlNode), callbackFunction = null;
    if (!IsNull(window
            .closeParent) &&
        window.closeParent == true)
        callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("doErrorPostProcessing", window, null, false);
    openErrorDlg(sHResult, sErrMessage, errInfo, null, null, callbackFunction)
}

function doErrorPostProcessing() { closeWindow() }

function AsyncResultHandler(oRemoteCommand, oXmlHttp, functionCallback) {
    this.ReadyStateChanged = readyStateChanged;
    this.metricsStopwatch = null;

    function readyStateChanged() {
        if (oXmlHttp.readyState == 4) {
            oXmlHttp.onreadystatechange = null;
            if (!oRemoteCommand.Aborted && oXmlHttp.status != 0) {
                if (this.metricsStopwatch != null) {
                    if (oXmlHttp != null) {
                        var reqId = oXmlHttp.getResponseHeader("REQ_ID");
                        if (reqId != null) {
                            if (this.metricsStopwatch.properties == null) this.metricsStopwatch.properties = {};
                            this.metricsStopwatch.properties["ReqId"] = reqId
                        }
                    }
                    this.metricsStopwatch.stop()
                }
                var result = new RemoteCommandResult(oRemoteCommand, oXmlHttp, true);
                if (Mscrm.Utilities
                    .isIE11StandardOrIE11CompatibleMode())
                    window.setTimeout(function() { functionCallback(result, oRemoteCommand) }, 0);
                else functionCallback(result, oRemoteCommand);
                oXmlHttp.abort()
            }
        }
    }
}

function CommandParameter(sName, sValue) {
    this.Name = sName;
    this.Value = sValue;
    this.GetXml = getParameterXml;

    function getParameterXml() {
        var sXml = "<" + CrmEncodeDecode.CrmXmlEncode(this.Name) + ">";
        sXml += this.Value;
        sXml += "</" + CrmEncodeDecode.CrmXmlEncode(this.Name) + ">";
        return sXml
    }
}

function RemoteCommandResult(oRemoteCommand, oXmlHttp, bIsAsync) {
    var sCommand = oRemoteCommand.Command, oXml = oXmlHttp.responseXML;
    this.RemoteCommand = oRemoteCommand;
    this.RawResponse = oXml;
    this.Xml = null;
    this.ReturnValue = null;
    var soapBodyNode = null, defaultNSName = null;
    if (!IsNull(oXml)) {
        var sNamespace = "";
        if (XUI.DomUtilities.HasChildElements(oXml)) sNamespace = XUI.DomUtilities.GetLastChild(oXml).prefix + ":";
        var soapBodyNode = XUI.Xml.SelectSingleNode(oXml,
                "/" + sNamespace + "Envelope/" + sNamespace + "Body",
                XUI.Xml.CreateNSDictionary(oXml.documentElement)),
            soadpBodyFirstChild = soapBodyNode ? XUI.DomUtilities.GetFirstChild(soapBodyNode) : null,
            xmlNSAttribute = null;
        if (!IsNull(soadpBodyFirstChild)) xmlNSAttribute = soadpBodyFirstChild.attributes.getNamedItem("xmlns");
        var defaultNSName = xmlNSAttribute ? xmlNSAttribute.nodeValue : null;
        this.Xml = defaultNSName
            ? XUI.Xml.SelectSingleNode(soapBodyNode,
                "./default:" + sCommand + "Response/default:" + sCommand + "Result",
                { "default": defaultNSName })
            : null;
        this.ReturnValue = ReadXml(this.Xml)
    }
    var oResult = handleSoapResponse(oXmlHttp, bIsAsync);
    this.Success = oResult.Success;
    this.Retry = oResult.Retry;
    this.ConvertToObject = ReadXml;
    this.ErrorCode = oResult.ErrorCode;
    this.ErrorDescription = oResult.ErrorDescription;

    function handleSoapResponse(oXmlHttp, bAsyncRequest) {
        var sHResult = null,
            oXmlNode = null,
            oErrorNode,
            bSuccess = true,
            oXml = oXmlHttp.responseXML,
            nsDictionary = null,
            sNamespace = "",
            parseError = null,
            errorDescription = "";
        if (!IsNull(oXml)) {
            nsDictionary = XUI.Xml.CreateNSDictionary(oXml.documentElement);
            sNamespace = XUI.DomUtilities
                .HasChildElements(oXml)
                ? XUI.DomUtilities.GetLastChild(oXml).prefix + ":"
                : "";
            parseError = XUI.Xml.GetParserError(oXml)
        }
        if (parseError) {
            sHResult = "XmlParseError";
            bSuccess = false
        } else if (oXmlHttp.status == 401) {
            sHResult = "0x80040277";
            bSuccess = false
        } else if (oXmlHttp.status != 200) {
            oXmlNode = !IsNull(oXml)
                ? XUI.Xml.SelectSingleNode(oXml,
                    "/" + sNamespace + "Envelope/" + sNamespace + "Body/" + sNamespace + "Fault",
                    nsDictionary)
                : null;
            if (!IsNull(oXmlNode)) {
                oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "error/code", nsDictionary);
                if (!IsNull(oErrorNode)) sHResult = XUI.Xml.GetText(oErrorNode);
                else {
                    oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "detail/error/code", nsDictionary);
                    if (!IsNull(oErrorNode)) sHResult = XUI.Xml.GetText(oErrorNode)
                }
            } else sHResult = "ServerError";
            bSuccess = false
        }
        if (bSuccess) {
            var soapBodyNode = XUI.Xml.SelectSingleNode(oXml,
                    "/" + sNamespace + "Envelope/" + sNamespace + "Body",
                    nsDictionary),
                soadpBodyFirstChild = soapBodyNode ? XUI.DomUtilities.GetFirstChild(soapBodyNode) : null,
                xmlNSAttribute = null;
            if (soadpBodyFirstChild != null) xmlNSAttribute = soadpBodyFirstChild.attributes.getNamedItem("xmlns");
            var defaultNSName = xmlNSAttribute ? xmlNSAttribute.nodeValue : null;
            oXmlNode = defaultNSName
                ? XUI.Xml.SelectSingleNode(soapBodyNode,
                    "./default:" + sCommand + "Response",
                    { "default": defaultNSName })
                : null;
            if (IsNull(oXmlNode)) {
                sHResult = "SoapError";
                bSuccess = false
            }
        }
        if (!bSuccess) {
            var bRetry = false;
            if (sHResult == ERRORCODE_ETM) {
                if (!bAsyncRequest) bRetry = window.confirm(LOCID_ERRMSG_ETM_RETRY)
            } else oRemoteCommand.ErrorHandler && oRemoteCommand.ErrorHandler(sHResult, oXmlNode)
        }
        if (sHResult == "0x8004F50F") {
            oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "error/description", nsDictionary);
            if (!IsNull(oErrorNode)) errorDescription = XUI.Xml.GetText(oErrorNode);
            else {
                oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "detail/error/description", nsDictionary);
                if (!IsNull(oErrorNode)) errorDescription = XUI.Xml.GetText(oErrorNode)
            }
            return { Success: bSuccess, Retry: bRetry, ErrorCode: sHResult, ErrorDescription: errorDescription }
        } else return { Success: bSuccess, Retry: bRetry }
    }

    function ReadXml(oXml) {
        var oReturnFromLoop = false, oReturnValue = {};
        if (IsNull(oXml)) return oReturnValue;
        var sReturnValue = "";
        XUI.DomUtilities.ForEachChild(oXml,
            function(oChildNode) {
                var oChildNodeBaseName = XUI.DomUtilities.GetBaseName(oChildNode);
                switch (oChildNode.nodeType) {
                case 1:
                    var oChildObject = ReadXml(oChildNode);
                    if (IsNull(oReturnValue[oChildNodeBaseName])) oReturnValue[oChildNodeBaseName] = oChildObject;
                    else {
                        if (!isArray(oReturnValue[oChildNodeBaseName])) {
                            var property = oReturnValue[oChildNodeBaseName];
                            oReturnValue[oChildNodeBaseName] = [];
                            oReturnValue[oChildNodeBaseName].push(property)
                        }
                        oReturnValue[oChildNodeBaseName].push(oChildObject)
                    }
                    break;
                case 3:
                    var parsedValue = fromString(oChildNode.nodeValue);
                    if (sReturnValue.length > 0 || typeof parsedValue == "string") {
                        sReturnValue += fromString(oChildNode.nodeValue);
                        oReturnFromLoop = true
                    } else {
                        oReturnValue = parsedValue;
                        oReturnFromLoop = true;
                        return true
                    }
                    break;
                case 4:
                    sReturnValue += XUI.Xml.GetText(oChildNode);
                    oReturnFromLoop = true;
                    break;
                default:
                    break
                }
                return false
            });
        if (sReturnValue.length > 0) oReturnValue = sReturnValue;
        if (oReturnFromLoop) return oReturnValue;
        if (IsNull(oReturnValue.xmlAttributes)) {
            var attributes = oXml.attributes;
            if (attributes.length > 0) {
                oReturnValue.xmlAttributes = {};
                for (var i = 0;
                    i < attributes.length;
                    i++
                )
                    oReturnValue.xmlAttributes[XUI.DomUtilities
                        .GetBaseName(attributes.item(i))] = fromString(attributes.item(i).nodeValue)
            }
        }
        return oReturnValue
    }

    function fromString(sValue) {
        if (sValue.toLowerCase() == "true") return true;
        else if (sValue.toLowerCase() == "false") return false;
        var intValue = parseInt(sValue, 10);
        if (!isNaN(intValue) && intValue.toString() == sValue) return intValue;
        var floatValue = parseFloat(sValue);
        if (!isNaN(floatValue) && floatValue.toString() == sValue) return floatValue;
        if (sValue.length > 19) return sValue;
        var dateValue = new Date(sValue);
        if (isNaN(dateValue) && !Date.prototype.toISOString) dateValue = ParseUTCDateFromISOString(sValue);
        if (dateValue != null && !isNaN(dateValue) && dateValue.getFullYear() >= 1900 && dateValue.getFullYear() < 5e3
        ) return dateValue;
        return sValue
    }

    function ParseUTCDateFromISOString(s) {
        var dateRegex = /^(\d{4}\-\d\d\-\d\d([tT]\d\d:\d\d:\d\d*)?)$/, dateValid = dateRegex.exec(s);
        if (dateValid == null) return null;
        if (s.length > 10)
            return new Date(Date.UTC(parseInt(s.substr(0, 4), 10),
                parseInt(s.substr(5, 2), 10) - 1,
                parseInt(s.substr(8, 2), 10),
                parseInt(s.substr(11, 2), 10),
                parseInt(s.substr(14, 2), 10),
                parseInt(s.substr(17, 2), 10)));
        else
            return new Date(Date.UTC(parseInt(s.substr(0, 4), 10),
                parseInt(s.substr(5, 2), 10) - 1,
                parseInt(s.substr(8, 2), 10)))
    }
}

function ConvertUserTypeToLike(searchValue) {
    for (var s = "", sChar = "", iLength = searchValue.length, i = 0; i < iLength; i++) {
        sChar = searchValue.charAt(i);
        switch (sChar) {
        case "%":
            s += "[%]";
            break;
        case "_":
            s += "[_]";
            break;
        case "[":
            s += "[[]";
            break;
        case "*":
            s += "%";
            break;
        default:
            s += sChar;
            break
        }
    }
    return s
}

function GetNodeValue(input, searchName, bNoDecode) {
    if (!input || !searchName) return "";
    var rootStart = input.indexOf("<" + searchName + ">");
    if (rootStart == -1) {
        rootStart = input.indexOf("<" + searchName + " ");
        if (rootStart == -1) return ""
    }
    var startIndex = input.indexOf(">", rootStart) + 1, endIndex = input.indexOf("</" + searchName + ">", startIndex);
    if (endIndex == -1) return "";
    else
        return bNoDecode
            ? input.substring(startIndex, endIndex)
            : CrmEncodeDecode.CrmXmlDecode(input.substring(startIndex, endIndex))
}

function GetCachedSetting(settingName, defaultValue) {
    if (window.top.oSettingsCache != null) {
        var stateValue = window.top.oSettingsCache[settingName];
        if (stateValue != null) return stateValue
    }
    return defaultValue
}

function SetCachedSetting(settingName, stateValue) {
    if (window.top.oSettingsCache == null) window.top.oSettingsCache = {};
    window.top.oSettingsCache[settingName] = stateValue
}

function ScrollVerticalList(oContainer, oSelected, iSelectedIndex, iNumItems, bAlignToTop) {
    (oContainer.scrollTop > iSelectedIndex / iNumItems * oContainer.scrollHeight ||
            oContainer
            .scrollTop +
            oContainer.clientHeight <
            (iSelectedIndex + 1) / iNumItems * oContainer.scrollHeight) &&
        oSelected.scrollIntoView(bAlignToTop)
}

function getNumDigits(iVal) {
    if (isNaN(iVal)) return -1;
    if (iVal == null) return 0;
    var tempVal = iVal, countDigits = 0;
    while (tempVal != 0) {
        tempVal = tempVal / 10;
        tempVal = parseInt(tempVal, 10);
        countDigits++
    }
    return countDigits
}

function GetEntityIdAndDisplayName(entityData) {
    var resultsXmlDoc = null, entityId = "", displayName = "";
    try {
        resultsXmlDoc = XUI.Xml.LoadXml(entityData);
        var entityIdNode = XUI.Xml.SelectSingleNode(resultsXmlDoc, "//EntityId", null),
            displayNameNode = XUI.Xml.SelectSingleNode(resultsXmlDoc, "//DisplayName", null);
        entityId = IsNull(entityIdNode) ? "" : XUI.Xml.GetText(entityIdNode);
        displayName = IsNull(displayNameNode) ? "" : XUI.Xml.GetText(displayNameNode)
    } catch (e) {
    }
    return { EntityId: entityId, DisplayName: displayName }
}

function toBool(sValue) { return sValue.toLowerCase() == "true" }

function QualifyLeadSuppressDeDup() {
    var leadQualifyDataXmlDoc = XUI.Xml.LoadXml(_qualifyLeadData),
        oShowNew = toBool(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlShowNew", null))),
        oCreateAccount = toBool(XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateAccount", null))),
        oCreateContact = toBool(XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateContact", null))),
        oCreateOpportunity = toBool(XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateOpportunity", null))),
        oNewStatus = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//ulNewStatus", null)),
        oOppCurrencyId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlOppCurrencyId", null)),
        oOpportunityParentType = XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlOpportunityParentType", null)),
        oOpportunityParentId = XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlOpportunityParentId", null)),
        oLeadId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlLeadId", null)),
        ocampaignId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCampaignId", null)),
        ocampaignType = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCampaignType", null)),
        formEntityOtc = parseInt(document.getElementById("crmFormSubmitObjectType").value, 10);
    if (formEntityOtc == Mscrm.EntityTypeCode.CampaignResponse
    )
        QualifyLead(oLeadId,
            oShowNew,
            oCreateAccount,
            oCreateContact,
            oCreateOpportunity,
            oOpportunityParentType,
            oOpportunityParentId,
            true);
    else
        formEntityOtc == Mscrm.EntityTypeCode.Lead &&
            qualifyLead(oShowNew,
                oCreateAccount,
                oCreateContact,
                oCreateOpportunity,
                oOpportunityParentType,
                oOpportunityParentId,
                oOppCurrencyId,
                oNewStatus,
                true)
}

function CheckForDuplicates(iEventType, sRedirectUrl) {
    var dataXml = "",
        crmFormCtrl = $find("crmForm"),
        success = crmFormCtrl.BuildXml(false, false, true),
        xml = window.document.getElementById("crmFormSubmitXml");
    dataXml = xml.value;
    var oUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/ViewDuplicates/ViewDuplicatesOnline.aspx?source=1"),
        oid = window.document.getElementById("crmFormSubmitId");
    if (oid && oid.value && oid.value != "") oUrl.get_query()["oid"] = oid.value;
    var dataXmlObj = {};
    dataXmlObj.xml = dataXml;
    var changedDataXmlObj = {};
    changedDataXmlObj.xml = _changedFormData;
    var dataXmlArray;
    if (typeof _dupActionName != "undefined") dataXmlArray = [dataXmlObj, changedDataXmlObj, _dupActionName];
    else dataXmlArray = [dataXmlObj, changedDataXmlObj];
    var innerPageManager = $find("crmInlinePageManager");
    if (IsNull(innerPageManager)) innerPageManager = $find("crmPageManager");
    var parameters = [iEventType, sRedirectUrl, crmFormCtrl, innerPageManager],
        callbackFunction = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterViewDuplicates", this, parameters),
        entityData = openStdDlgWithCallback(oUrl, dataXmlArray, 560, 560, callbackFunction, false, false);
    isOutlookHostedWindow() &&
        performActionAfterViewDuplicates(entityData, iEventType, sRedirectUrl, crmFormCtrl, innerPageManager)
}

function performActionAfterViewDuplicates(entityData, iEventType, sRedirectUrl, crmFormCtrl, innerPageManager) {
    entityData == "QualifyLead" && QualifyLeadSuppressDeDup();
    var entityId = "", displayName = "", returnValues;
    if (entityData && entityData != "") {
        returnValues = GetEntityIdAndDisplayName(entityData);
        if (!IsNull(returnValues)) {
            entityId = returnValues.EntityId;
            displayName = returnValues.DisplayName
        }
    }
    if (entityId && entityId != "") {
        crmFormCtrl.detachCloseAlert();
        if (iEventType == 2) {
            if (!IsNull(Mscrm.PageManager) &&
                Mscrm.PageManager.isFlatUIPage() &&
                !IsNull(Mscrm.PageManager.get_instance())) {
                innerPageManager.executeDeferredActions();
                return
            }
            var oType = window.document.getElementById("crmFormSubmitObjectType").value;
            try {
                if (window.opener.location.href
                    .indexOf("resolve.aspx") >
                    0) window.opener.auto(oType, displayName, entityId);
                else window.opener.auto(oType)
            } catch (e) {
            }
            closeWindow()
        } else if (iEventType == 1) {
            if (!IsNull(Mscrm.PageManager) &&
                Mscrm.PageManager.isFlatUIPage() &&
                !IsNull(Mscrm.PageManager.get_instance())) {
                var parameters = {};
                parameters["newId"] = entityId;
                innerPageManager.executeDeferredActions(parameters);
                return
            }
            var sLocation = location.href, separator = sLocation.indexOf("?") != -1 ? "&" : "?", poundIndex = -1;
            if ((poundIndex = sLocation.indexOf("#")) != -1) sLocation = sLocation.substr(0, poundIndex);
            if (sLocation.indexOf("?id=") == -1 && sLocation.indexOf("&id=") == -1) {
                sLocation = sLocation + separator + "id=" + entityId;
                separator = "&"
            }
            if (sLocation
                .indexOf("?refreshgrid=") ==
                -1 &&
                sLocation.indexOf("&refreshgrid=") == -1) sLocation = sLocation + separator + "refreshgrid=1";
            window.location.href = sLocation
        } else if (iEventType == 59) {
            if (!IsNull(Mscrm.PageManager) &&
                Mscrm.PageManager.isFlatUIPage() &&
                !IsNull(Mscrm.PageManager.get_instance())) {
                var parameters = {};
                parameters["newId"] = entityId;
                innerPageManager.executeDeferredActions(parameters);
                return
            }
            window.location.href = sRedirectUrl
        }
    }
}

function customErrorHandler(ex, iEventType, sUrl) {
    if (ex == "0x80040333") {
        CheckForDuplicates(iEventType, sUrl);
        return true
    }
    return false
}

function escapeSingleQuotesAndBackSlashes(s) {
    s = s.replace(/\\/g, "\\\\");
    return s.replace(/'/g, "\\'")
}

function FormatDateTime(dDateTime) {
    var DATE_SEPARATOR = "-", DATETIME_SEPARATOR = "T", TIME_SEPARATOR = ":", oBuilder = new StringBuilder;
    oBuilder.Append(dDateTime.getFullYear());
    oBuilder.Append(DATE_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getMonth() + 1));
    oBuilder.Append(DATE_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getDate()));
    oBuilder.Append(DATETIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getHours()));
    oBuilder.Append(TIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getMinutes()));
    oBuilder.Append(TIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getSeconds()));
    return oBuilder.ToString()
}

function PadNumber(iNumber, iLength) {
    var PAD_CHAR = "0", DEFAULT_LENGTH = 2;
    if (iLength == null) iLength = DEFAULT_LENGTH;
    for (var sNumber = new String(iNumber), oBuilder = new StringBuilder, i = 0;
        i < iLength - sNumber.length;
        i++
    ) oBuilder.Append(PAD_CHAR);
    oBuilder.Append(sNumber);
    return oBuilder.ToString()
}

function isControlVisible(oElement) { return XUI.Html.GetComputedStyle(oElement, "display") === "none" ? false : true }

function isDocumentHidden() {
    if (typeof document.visibilityState !== "undefined") {
        if (document.visibilityState == "hidden") return true;
        return false
    }
    if (document.body.offsetHeight == 0) return true;
    if (document.body.offsetWidth == 0) return true;
    return false
}