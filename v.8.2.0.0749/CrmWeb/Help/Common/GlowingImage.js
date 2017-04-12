Type.registerNamespace("Mscrm");
Mscrm.GlowingImage = function(element) {
    this.$$d_$1_3 = Function.createDelegate(this, this.$1_3);
    this.$$d_$2_3 = Function.createDelegate(this, this.$2_3);
    this.$$d_$3_3 = Function.createDelegate(this, this.$3_3);
    this.$$d_$4_3 = Function.createDelegate(this, this.$4_3);
    Mscrm.GlowingImage.initializeBase(this, [element])
};
Mscrm.GlowingImage.prototype = {
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        $addHandler(this.get_element(), "mouseover", this.$$d_$4_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$3_3);
        $addHandler(this.get_element(), "mousedown", this.$$d_$2_3);
        $addHandler(this.get_element(), "mouseup", this.$$d_$1_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mouseover", this.$$d_$4_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$3_3);
        $removeHandler(this.get_element(), "mousedown", this.$$d_$2_3);
        $removeHandler(this.get_element(), "mouseup", this.$$d_$1_3);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $0_3: function($p0) {
        var $v_0 = this.get_element().getAttribute("imgBase");
        $v_0 += $p0;
        var $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create($v_0)), $v_2 = this.get_element();
        $v_2.src = $v_1.source;
        this.get_element().className = Mscrm.ImageStrip
            .replaceExistingImageStripClass(this.get_element().className, $v_1.cssClass)
    },
    $4_3: function($p0) { this.$0_3("hover.gif") },
    $3_3: function($p0) { this.$0_3(".gif") },
    $2_3: function($p0) {
        var $v_0 = this.get_element().getAttribute("hideDown");
        IsNull($v_0) && this.$0_3("down.gif")
    },
    $1_3: function($p0) { this.$0_3(".gif") }
};
Mscrm.GlowingImage.registerClass("Mscrm.GlowingImage", Mscrm.CrmUIBehavior)