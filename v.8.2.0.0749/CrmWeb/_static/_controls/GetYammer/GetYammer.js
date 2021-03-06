Type.registerNamespace("Mscrm");
Mscrm.GetYammer = function(element) {
    this.$$d_$5_3 = Function.createDelegate(this, this.$5_3);
    this.$$d_$6_3 = Function.createDelegate(this, this.$6_3);
    Mscrm.GetYammer.initializeBase(this, [element])
};
Mscrm.GetYammer.prototype = {
    $3_3: null,
    $4_3: null,
    $2_3: null,
    $1_3: null,
    $0_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$3_3 = $P_CRM(this.get_element());
        this.$4_3 = this.$3_3.find(".getYammerOptionContent");
        this.$2_3 = this.$3_3.find("a.getYammerLink");
        this.$2_3.click(this.$$d_$6_3);
        this.$0_3 = new Mscrm.FlyOutDialog;
        this.$0_3.get_options().set_width(282);
        this.$0_3.get_options().set_minHeight(40);
        this.$0_3.get_options().set_height(0);
        this.$0_3.get_options().set_modal(true);
        this.$0_3.set_position("bottom");
        this.$0_3.get_options().set_showButtonPane(false);
        this.$0_3.initialize(this.$4_3.clone(true));
        this.$1_3 = this.$0_3.dialogChrome().find(".getYammerCloseText");
        this.$1_3.click(this.$$d_$5_3);
        $P_CRM(window).resize(this.$$d_$5_3)
    },
    $6_3: function($p0) {
        if (window.YAMMER_HAS_CONFIGURE_PRIVILEGE) {
            var $v_0 = Mscrm.CrmUri.create("/tools/admin/admin.aspx?pagemode=iframe&pid=16&web=true");
            openStdWin($v_0, "yammerConfig", 1024, 600, "status=1,resizable=1")
        } else {
            $p0.preventDefault();
            this.$0_3.show(this.$2_3);
            this.$0_3.dialogChrome().css("border-color", "#949494");
            this.$1_3.blur();
            this.$0_3.dialogChrome().blur()
        }
    },
    $5_3: function($p0) { this.$0_3.hide() },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$2_3) && this.$2_3.unbind("click", this.$$d_$6_3);
        !IsNull(this.$1_3) && this.$1_3.unbind("click", this.$$d_$5_3);
        $P_CRM(window).unbind("resize", this.$$d_$5_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.GetYammer.registerClass("Mscrm.GetYammer", Mscrm.CrmUIControl)