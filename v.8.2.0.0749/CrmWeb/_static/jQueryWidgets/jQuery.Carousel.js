Type.registerNamespace("CrmJQueryWidget");
CrmJQueryWidget.Carousel = function(options, element) {
    this.$$d_$9_2 = Function.createDelegate(this, this.$9_2);
    this.$$d_$A_2 = Function.createDelegate(this, this.$A_2);
    this.$$d_$B_2 = Function.createDelegate(this, this.$B_2);
    CrmJQueryWidget.Carousel.initializeBase(this, [options, element])
};
CrmJQueryWidget.Carousel.$$cctor = function() { jQueryUIApi.WidgetFactory.register(CrmJQueryWidget.Carousel) };
CrmJQueryWidget.Carousel.prototype = {
    $7_2: "prev",
    $6_2: "next",
    $5_2: "scrollDirection",
    $3_2: "toClean",
    $1_2: null,
    $0_2: null,
    $2_2: null,
    _create: function() {
        this.element.data("carousel-create-start", Date.now());
        CrmJQueryWidget.Scroller.prototype._create.call(this);
        this.$2_2 = this.options;
        this.$1_2 = this.element.find("." + this.$7_2);
        this.$0_2 = this.element.find("." + this.$6_2);
        var $v_0 =
                "<input type='button' \r\n\t\t\t\t\t\t\t\t\t\tid='{0}' \r\n\t\t\t\t\t\t\t\t\t\tclass='{1}' \r\n\t\t\t\t\t\t\t\t\t\tvalue='{2}' \r\n\t\t\t\t\t\t\t\t\t\ttitle='{3}' />",
            $v_1 = this.element.children("ul");
        if (!this.$1_2.length) {
            this.$1_2 = $P_CRM(String.format($v_0,
                this.$2_2.previousButton.id,
                this.$7_2,
                this.$2_2.previousButton.text,
                this.$2_2.previousButton.tooltip));
            this.$1_2.attr(this.$3_2, this.$3_2);
            $v_1.before(this.$1_2)
        }
        if (!this.$0_2.length) {
            this.$0_2 = $P_CRM(String.format($v_0,
                this.$2_2.nextButton.id,
                this.$6_2,
                this.$2_2.nextButton.text,
                this.$2_2.nextButton.tooltip));
            this.$0_2.attr(this.$3_2, this.$3_2);
            $v_1.after(this.$0_2)
        }
        this.$0_2.attr(this.$5_2, "1");
        this.$1_2.attr(this.$5_2, "-1");
        this.$8_2();
        this.$1_2.click(this.$$d_$B_2);
        this.$0_2.click(this.$$d_$A_2);
        this.element.attr("tabIndex", "0");
        this.element.keyup(this.$$d_$9_2);
        this.element.data("carousel-create-end", Date.now())
    },
    reload: function() {
        CrmJQueryWidget.Scroller.prototype.reload.call(this);
        this.$8_2()
    },
    scroll: function(scrollBy) {
        var $v_0 = CrmJQueryWidget.Scroller.prototype.scroll.call(this, scrollBy);
        this.$8_2();
        return $v_0
    },
    $A_2: function($p0) { this.$4_2(this.$0_2) },
    $B_2: function($p0) { this.$4_2(this.$1_2) },
    $9_2: function($p0) {
        if ($p0.which === this.$2_2.previousButton.keyCode) this.$4_2(this.$1_2);
        else $p0.which === this.$2_2.nextButton.keyCode && this.$4_2(this.$0_2)
    },
    $4_2: function($p0) {
        var $v_0 = this.$2_2.scrollBy * Number.parseLocale($p0.attr(this.$5_2));
        this.scroll($v_0)
    },
    $8_2: function() {
        var $v_0 = "disabled";
        if (!this.firstVisibleItemIndex) this.$1_2.attr($v_0, $v_0);
        else this.$1_2.removeAttr($v_0);
        if (this.lastVisibleItemIndex === this.totalItems - 1) this.$0_2.attr($v_0, $v_0);
        else this.$0_2.removeAttr($v_0)
    },
    destroy: function() {
        this.element.data("carousel-destroy-start", Date.now());
        var $v_0 = "click", $v_1 = "keyup";
        this.$1_2.unbind($v_0, this.$$d_$B_2);
        this.$0_2.unbind($v_0, this.$$d_$A_2);
        this.element.unbind($v_1, this.$$d_$9_2);
        this.$1_2.attr(this.$3_2) === this.$3_2 && this.$1_2.remove();
        this.$0_2.attr(this.$3_2) === this.$3_2 && this.$0_2.remove();
        CrmJQueryWidget.Scroller.prototype.destroy.call(this);
        this.element.data("carousel-destroy-end", Date.now())
    }
};
CrmJQueryWidget.CarouselOptions = function() {
    CrmJQueryWidget.CarouselOptions.initializeBase(this);
    this.scrollBy = 1;
    this.nextButton = new CrmJQueryWidget.ButtonOptions;
    this.previousButton = new CrmJQueryWidget.ButtonOptions;
    var $v_0 = "next";
    this.nextButton.text = $v_0;
    this.nextButton.tooltip = $v_0;
    this.nextButton.id = $v_0;
    this.nextButton.keyCode = 39;
    var $v_1 = "prev";
    this.previousButton.text = $v_1;
    this.previousButton.tooltip = $v_1;
    this.previousButton.id = $v_1;
    this.previousButton.keyCode = 37
};
CrmJQueryWidget.CarouselOptions.prototype = { previousButton: null, nextButton: null, scrollBy: 0 };
CrmJQueryWidget.ButtonOptions = function() {
    CrmJQueryWidget.ButtonOptions.initializeBase(this);
    var $v_0 = "button";
    this.text = $v_0;
    this.tooltip = $v_0;
    this.id = $v_0;
    this.keyCode = 32
};
CrmJQueryWidget.ButtonOptions.prototype = { text: null, keyCode: 0, tooltip: null, id: null };
CrmJQueryWidget.Carousel.registerClass("CrmJQueryWidget.Carousel", CrmJQueryWidget.Scroller);
CrmJQueryWidget.CarouselOptions.registerClass("CrmJQueryWidget.CarouselOptions", CrmJQueryWidget.ScrollerOptions);
CrmJQueryWidget.ButtonOptions.registerClass("CrmJQueryWidget.ButtonOptions", jQueryUIApi.WidgetOptions);
CrmJQueryWidget.Carousel.$$cctor()