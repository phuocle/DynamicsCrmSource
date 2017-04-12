Type.registerNamespace("Mscrm");
Mscrm.IDateNavigationHost = function() {};
Mscrm.IDateNavigationHost.registerInterface("Mscrm.IDateNavigationHost");
Mscrm.DateNavigationBar = function(element) {
    this.$$d_handleDateChange = Function.createDelegate(this, this.handleDateChange);
    Mscrm.DateNavigationBar.initializeBase(this, [element])
};
Mscrm.DateNavigationBar.prototype = {
    $2_3: null,
    $5_3: 12,
    $6_3: null,
    $4_3: null,
    $8_3: null,
    $3_3: null,
    $0_3: null,
    $B_3: false,
    get_$9_3: function() {
        if (IsNull(this.$6_3)) this.$6_3 = $get("dateValue");
        return this.$6_3
    },
    get_$K_3: function() { return this.get_$9_3().value },
    get_$R_3: function() { return $get("crmGrid") },
    get_$L_3: function() { return $get("frmGrid") },
    get_dateIncrement: function() { return this.$5_3 },
    set_dateIncrement: function(value) {
        this.$5_3 = value;
        return value
    },
    get_baseButtonId: function() { return this.$4_3 },
    set_baseButtonId: function(value) {
        this.$4_3 = value;
        return value
    },
    get_useLocal: function() { return this.$B_3.toString().toLowerCase() === "true" },
    set_useLocal: function(value) {
        this.$B_3 = value;
        return value
    },
    get_$S_3: function() {
        if (IsNull(this.$8_3) && !IsNull(this.$4_3)) this.$8_3 = $get(String.format("{0}1", this.$4_3));
        return this.$8_3
    },
    get_$C_3: function() { return this.$3_3.get_currentDateUTC() },
    set_$C_3: function($p0) {
        this.$3_3.set_currentDateUTC($p0);
        return $p0
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$J_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_$9_3(), "change", this.$$d_handleDateChange);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $J_3: function() {
        InitCalendar(window.USER_DATE_FORMATSTRING, window.USER_DATE_SEPARATOR, window.ORG_DATE_START_DAY, null, null);
        this.$2_3 = this.get_$R_3();
        if (!IsNull(this.$2_3)) this.$3_3 = new Mscrm.GridControlHost(this.$2_3);
        else {
            this.$2_3 = this.get_$L_3();
            this.$3_3 = new Mscrm.FormElementHost(this.$2_3)
        }
        this.$0_3 = this.get_useLocal() ? Mscrm.DateTimeUtility.localDateTimeNow() : new Date;
        if (IsNull(this.$2_3));
        $addHandler(this.get_$9_3(), "change", this.$$d_handleDateChange)
    },
    handleDateChange: function(eventArgs) {
        this.$0_3.setTime(Mscrm.DateTimeUtility.parseDate(this.get_$K_3()).getTime());
        this.set_$C_3(this.$0_3);
        this.$G_3();
        this.$I_3()
    },
    $F_3: function($p0) {
        this.$0_3 = this.get_$C_3();
        this.$0_3.setDate(1);
        this.$0_3.setMonth(this.$0_3.getMonth() + this.$5_3 * $p0);
        this.set_$C_3(this.$0_3);
        this.$G_3();
        this.$I_3()
    },
    nextDate: function() { this.$F_3(1) },
    previousDate: function() { this.$F_3(-1) },
    launchCalendar: function(domEventObject) {
        var $v_0 = $get("calendarContainer");
        if (IsNull($v_0)) {
            $v_0 = document.createElement("span");
            $v_0.id = "calendarContainer";
            $v_0.innerHTML = domEventObject.target.innerHTML;
            domEventObject.target.innerHTML = "";
            domEventObject.target.appendChild($v_0)
        }
        LaunchCalendar($v_0, this.get_$9_3(), this.$0_3, 1, false, null, "ReturnDate(this, true);", 0, null, true)
    },
    $I_3: function() { this.$3_3.refresh() },
    $G_3: function() {
        var $v_0 = parseInt(this.$5_3) === 12
            ? Mscrm.DateTimeUtility.getCalendarYear(this.$0_3)
            : Mscrm.DateTimeUtility.formatDate(this.$0_3, "y");
        this.get_$S_3().innerHTML = String.format("&nbsp;{0}&nbsp;", CrmEncodeDecode.CrmHtmlEncode($v_0))
    }
};
Mscrm.GridControlHost = function($p0) { this.$1_0 = $p0 };
Mscrm.GridControlHost.prototype = {
    $1_0: null,
    $7_0: null,
    get_$E_0: function() {
        if (IsNull(this.$7_0)) this.$7_0 = $find(this.$1_0.id);
        return this.$7_0
    },
    get_currentDateUTC: function() { return ParseUtcDate(this.get_$E_0().GetParameter("date")) },
    set_currentDateUTC: function($p0) {
        this.get_$E_0().SetParameter("date", FormatUtcDate($p0));
        return $p0
    },
    refresh: function() { this.get_$E_0().Refresh() }
};
Mscrm.FormElementHost = function($p0) { this.$1_0 = $p0 };
Mscrm.FormElementHost.prototype = {
    $1_0: null,
    get_currentDateUTC: function() {
        var $v_0 = this.$1_0.date, $v_1 = $v_0.value;
        return ParseUtcDate($v_1)
    },
    set_currentDateUTC: function($p0) {
        var $v_0 = this.$1_0.date;
        $v_0.value = FormatUtcDate($p0);
        return $p0
    },
    refresh: function() { this.$1_0.submit() }
};
Mscrm.DateNavigationBar.registerClass("Mscrm.DateNavigationBar", Mscrm.CrmUIControl);
Mscrm.GridControlHost.registerClass("Mscrm.GridControlHost", null, Mscrm.IDateNavigationHost);
Mscrm.FormElementHost.registerClass("Mscrm.FormElementHost", null, Mscrm.IDateNavigationHost)