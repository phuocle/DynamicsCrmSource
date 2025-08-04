Type.registerNamespace("Mscrm");
Mscrm.RoleItemControl = function(element) { Mscrm.RoleItemControl.initializeBase(this, [element]) };
Mscrm.RoleItemControl.prototype = {
    $4_3: 0,
    $0_3: 0,
    $3_3: 0,
    $2_3: 0,
    $1_3: 0,
    get_privilegeDepth: function() { return this.$0_3 },
    set_privilegeDepth: function(value) {
        this.$0_3 = value;
        this.$6_3(false);
        return value
    },
    get_min: function() { return this.$2_3 },
    set_min: function(value) {
        this.$2_3 = value;
        return value
    },
    get_max: function() { return this.$1_3 },
    set_max: function(value) {
        this.$1_3 = value;
        return value
    },
    get_privilegeValue: function() { return this.get_element().getAttribute("b") + ";" + this.$5_3() + ";" },
    get_validLevels: function() { return this.$3_3 },
    get_nextPrivilege: function() {
        var $v_0 = this.$0_3;
        if ($v_0 === this.$1_3) return this.$2_3;
        $v_0 <<= 1;
        if (!$v_0) $v_0 = 1;
        while (($v_0 & this.$3_3) <= 0 && $v_0 < this.$1_3) $v_0 <<= 1;
        return $v_0
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$0_3 = parseInt(this.get_element().getAttribute("d"), 10);
        this.$2_3 = parseInt(this.get_element().getAttribute("m"), 10);
        this.$1_3 = parseInt(this.get_element().getAttribute("x"), 10);
        this.$4_3 = parseInt(this.get_element().getAttribute("p"), 10);
        this.$3_3 = parseInt(this.get_element().getAttribute("l"), 10);
        this.$6_3(true)
    },
    reset: function() { this.set_privilegeDepth(this.$2_3) },
    $6_3: function($p0) {
        this.get_element().setAttribute("src",
            window.CDNURL + "/_imgs/ico_18_role_" + CrmEncodeDecode.CrmUrlEncode(this.$5_3()) + ".gif");
        var $v_0 = this.get_element().getAttribute("alt");
        if (!$p0 || isNullOrEmptyString($v_0))
            if (!IsNull(this.get_element().getAttribute("n"))) {
                $v_0 = this.$7_3();
                this.get_element().setAttribute("alt", $v_0);
                this.get_element().setAttribute("title", $v_0)
            } else {
                $v_0 = this.$8_3();
                this.get_element().setAttribute("alt", $v_0);
                this.get_element().setAttribute("title", $v_0)
            }
    },
    $8_3: function() {
        return window.self.GetEncodedPrivilegeAltTag(this.get_element().getAttribute("otn"), this.$4_3, this.$0_3)
    },
    $7_3: function() {
        return window.self.GetEncodedMiscPrivilegeAltTag(this.get_element().getAttribute("n"), this.$0_3)
    },
    $5_3: function() { return window.self.GetPrivilegeString(this.$0_3) }
};
Mscrm.RoleItemControl.registerClass("Mscrm.RoleItemControl", Mscrm.CrmUIControl)