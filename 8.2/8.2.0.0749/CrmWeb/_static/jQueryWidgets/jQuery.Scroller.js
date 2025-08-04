Type.registerNamespace("CrmJQueryWidget");
CrmJQueryWidget.Scroller = function(options, element) {
    CrmJQueryWidget.Scroller.initializeBase(this, [options, element])
};
CrmJQueryWidget.Scroller.$$cctor = function() { jQueryUIApi.WidgetFactory.register(CrmJQueryWidget.Scroller) };
CrmJQueryWidget.Scroller.prototype = {
    firstVisibleItemIndex: 0,
    lastVisibleItemIndex: 0,
    totalItems: 0,
    $1_1: null,
    $6_1: 0,
    $4_1: 0,
    $3_1: 0,
    $5_1: 0,
    $A_1: "scroller",
    $9_1: "rtl",
    $0_1: null,
    $2_1: null,
    _create: function() {
        this.element.data("scroller-create-start", Date.now());
        $P_CRM.Widget.prototype._create.call(this);
        this.$1_1 = this.options;
        this.element.attr(this.$9_1, this.$1_1.isRTL.toString());
        this.element.addClass(this.$A_1);
        this.$2_1 = this.element.find("ul").first();
        this.$0_1 = this.$2_1.find("li");
        this.totalItems = this.$2_1.children().length;
        this.$4_1 = Math.max(parseFloat(this.$0_1.css("width")),
            parseFloat(window.getComputedStyle(this.$0_1[0])["width"]));
        this.$3_1 = this.totalItems * this.$4_1;
        this.$5_1 = this.$1_1.itemsVisible * this.$4_1;
        this.element.width(Math.min(this.$3_1, this.$5_1));
        this.$2_1.width(this.$3_1);
        this.element.height(this.$2_1.outerHeight(true));
        this.firstVisibleItemIndex = 0;
        this.$C_1();
        this.$D_1();
        this.$7_1();
        this.$B_1();
        this.element.data("scroller-create-end", Date.now())
    },
    destroy: function() {
        this.element.data("scroller-destroy-start", Date.now());
        this.$8_1();
        this.element.removeClass(this.$A_1);
        this.element.removeAttr(this.$9_1);
        $P_CRM.Widget.prototype.destroy.call(this);
        this.element.data("scroller-destroy-end", Date.now())
    },
    scroll: function(scrollBy) {
        this.element.data("scroller-scroll-start", Date.now());
        this._trigger("scrollStart", null, null);
        this.$8_1();
        if (scrollBy > 0) scrollBy = Math.min(this.totalItems - this.lastVisibleItemIndex - 1, scrollBy);
        else scrollBy = Math.max(-this.firstVisibleItemIndex, scrollBy);
        this.firstVisibleItemIndex += scrollBy;
        this.$C_1();
        this.$D_1();
        this.$7_1();
        var $v_0 = this.$B_1(), $v_1 = new CrmJQueryWidget.ScrollEndEventData;
        $v_1.pixelMoved = $v_0;
        this._trigger("scrollEnd", null, $v_1);
        this.element.data("scroller-scroll-end", Date.now());
        return $v_0
    },
    reload: function() {
        this.element.data("scroller-reload-start", Date.now());
        var $v_0 = 0, $v_1 = -1, $v_2 = -1, $v_3 = this.$3_1, $v_4 = this.$5_1;
        this.$0_1 = this.$2_1.find("li");
        this.totalItems = this.$2_1.children().length;
        this.$4_1 = Math.max(this.$0_1.outerWidth(true), parseFloat(window.getComputedStyle(this.$0_1[0])["width"]));
        this.$3_1 = this.totalItems * this.$4_1;
        this.$5_1 = this.$1_1.itemsVisible * this.$4_1;
        this.element.width(Math.min(this.$3_1, this.$5_1));
        this.$2_1.width(this.$3_1);
        $v_0 = this.$1_1.isRTL ? $v_3 - this.$3_1 : 0;
        $v_1 = this.$0_1.filter(".first").index();
        $v_2 = this.$0_1.filter(".last").index();
        this.$8_1();
        this.firstVisibleItemIndex = $v_1;
        this.lastVisibleItemIndex = $v_2;
        this.$C_1();
        this.$D_1();
        this.$7_1();
        $v_0 += this.$B_1();
        var $v_5 = new CrmJQueryWidget.ReloadScrollerEventData;
        $v_5.pixelMoved = $v_0;
        $v_5.deltaWidth = this.$5_1 - $v_4;
        this._trigger("reload", null, $v_5);
        this.element.data("scroller-reload-end", Date.now())
    },
    $C_1: function() {
        if (this.firstVisibleItemIndex === -1)
            this.firstVisibleItemIndex = Math.max(this.lastVisibleItemIndex - this.$1_1.itemsVisible + 1, 0);
        if (this.firstVisibleItemIndex + this.$1_1.itemsVisible - 1 > this.totalItems - 1) {
            this.lastVisibleItemIndex = this.totalItems - 1;
            this.firstVisibleItemIndex = Math.max(this.lastVisibleItemIndex - this.$1_1.itemsVisible + 1, 0)
        } else
            this.lastVisibleItemIndex = Math.min(this.$1_1.itemsVisible + this.firstVisibleItemIndex - 1,
                this.totalItems - 1)
    },
    $8_1: function() {
        this.$0_1.filter(".first").removeClass("first");
        this.$0_1.filter(".last").removeClass("last")
    },
    $7_1: function() {
        this.$0_1.eq(this.firstVisibleItemIndex).addClass("first");
        this.$0_1.eq(this.lastVisibleItemIndex).addClass("last")
    },
    $D_1: function() {
        for (var $v_0 = 0; $v_0 <= this.totalItems; $v_0++)
            if ($v_0 >= this.firstVisibleItemIndex && $v_0 <= this.lastVisibleItemIndex
            ) this.$0_1.eq($v_0).removeClass("hideScrollerItem");
            else this.$0_1.eq($v_0).addClass("hideScrollerItem")
    },
    $B_1: function() {
        var $v_0 = this.$6_1;
        this.$6_1 = -this.$4_1 * this.firstVisibleItemIndex;
        var $v_1 = this.$1_1.isRTL ? "right" : "left";
        this.$2_1.css($v_1, this.$6_1.toString() + "px");
        var $v_2 = this.$6_1 - $v_0;
        $v_2 *= this.$1_1.isRTL ? -1 : 1;
        return $v_2
    }
};
CrmJQueryWidget.ScrollEndEventData = function() {};
CrmJQueryWidget.ScrollEndEventData.prototype = { pixelMoved: 0 };
CrmJQueryWidget.ReloadScrollerEventData = function() {};
CrmJQueryWidget.ReloadScrollerEventData.prototype = { pixelMoved: 0, deltaWidth: 0 };
CrmJQueryWidget.ScrollerOptions = function() {
    CrmJQueryWidget.ScrollerOptions.initializeBase(this);
    this.isRTL = false;
    this.itemsVisible = 3
};
CrmJQueryWidget.ScrollerOptions.prototype = { scrollStart: null, scrollEnd: null, reload: null, itemsVisible: 0 };
CrmJQueryWidget.Scroller.registerClass("CrmJQueryWidget.Scroller", $P_CRM.Widget);
CrmJQueryWidget.ScrollEndEventData.registerClass("CrmJQueryWidget.ScrollEndEventData");
CrmJQueryWidget.ReloadScrollerEventData.registerClass("CrmJQueryWidget.ReloadScrollerEventData");
CrmJQueryWidget.ScrollerOptions.registerClass("CrmJQueryWidget.ScrollerOptions", jQueryUIApi.WidgetOptions);
CrmJQueryWidget.Scroller.$$cctor()