Type.registerNamespace("CrmJQueryWidget");
CrmJQueryWidget.Tile = function(options, element) { CrmJQueryWidget.Tile.initializeBase(this, [options, element]) };
CrmJQueryWidget.Tile.$$cctor = function() { jQueryUIApi.WidgetFactory.register(CrmJQueryWidget.Tile) };
CrmJQueryWidget.Tile.prototype = {
    $0_1:
        "<div class='body'>\r\n\t\t\t\t\t\t\t\t\t\t\t{{for attributes}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{>name}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t:-\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{>value}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t{{/for}}\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class='media'>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href='' title=''>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src='' alt='' />\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href='' title=''>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src='' alt='' />\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t",
    _create: function() {
        var $v_0 = this.options, $v_1 = $P_CRM.templates(this.$0_1);
        this.element.html($v_1.render($v_0.data));
        this.element.addClass("tile")
    },
    destroy: function() {
        this.element.empty();
        this.element.removeClass("tile");
        $P_CRM.Widget.prototype.destroy.call(this)
    }
};
CrmJQueryWidget.TileOptions = function() { CrmJQueryWidget.TileOptions.initializeBase(this) };
CrmJQueryWidget.TileOptions.prototype = { data: null };
CrmJQueryWidget.TileWidget = function(options, element) {
    CrmJQueryWidget.TileWidget.initializeBase(this, [options, element])
};
CrmJQueryWidget.TileWidget.$$cctor = function() { jQueryUIApi.WidgetFactory.register(CrmJQueryWidget.TileWidget) };
CrmJQueryWidget.TileWidget.prototype = {
    _create: function() {
        var $v_0 = Boolean.parse(this.element.attr("rtl")),
            $v_1 = this.options,
            $v_2 = this.element.find("div.tileImage");
        if ($v_2.length > 0) {
            $v_2.addClass("tileImageDiv");
            var $v_3 = this.element.find("img.tileImage").attr("src");
            if ($v_3.length <= 0) {
                this.element.find("img.tileImage").css("display", "none");
                $v_2.append(String
                    .format('<div  rtl={0} class= "tileEntityImg entity-symbol entityPlaceHolderImage "></div>', $v_0))
            }
        }
        this.element.append(String
            .format('<div rtl={0} class= "tilePopOut"><div  rtl={0} class="tilePopOutImg tilePopOutImgUnchecked" /></div><div  rtl={0} class="tileCheckBox"></div>', $v_0));
        $v_1.disabled && this.element.append(String.format('<span  rtl={0} class= "Lock-symbol"></span>', $v_0));
        this.element.find("div.tileCheckBox").addClass("checkboxUnSelected");
        this.element.find("div.tilePopOut").attr("title", $v_1.showPopupToolTip);
        this.element.find("div.tileCheckBox").attr("title", $v_1.showTileCheckBoxToolTip);
        this.element.addClass("tileContainer tileUnSelected");
        Mscrm.InternalUtilities.Utilities.isHighContrastEnabled() && this.element.addClass("high-contrast");
        if (!$v_1.isFocusTile) {
            this.element.addClass("tileNormal");
            this.element.find("div.tileTitle").addClass("normalTileTextColor");
            this.element.find("div.tileContent").addClass("normalTileTextColor");
            this.element.find("div.tilePopOutImg").addClass("normalTilePopOutImg");
            $v_2.length > 0 && this.element.find("div.tileImage").addClass("normalTileImageDiv");
            this.element.find("span.Lock-symbol").addClass("Lock-symbol-normal");
            this.element.find("div.entityPlaceHolderImage").addClass("normalTilePlaceHolderImageColor")
        } else this.$2_1();
        this.element.find("div.tileCheckBox").attr("tabindex", "-1");
        this.element.find("div.tilePopOut").attr("tabindex", "0");
        this.$1_1($v_1)
    },
    $1_1: function($p0) {
        var $v_0 = 0, $v_1 = false;
        this.element.find("div.tilePopOut").click($p0.onPopOutIconClick);
        var $$t_9 = this;
        this.element.bind("click",
            function($p1_0) {
                if (!$v_1)
                    if ($p1_0.target.className.indexOf("ms-crm-Lookup-Item-Read") >= 0) $p1_0.stopPropagation();
                    else
                        $p1_0.target.className !== "ms-crm-gridurl" &&
                            $p1_0.target.className.indexOf("tileCheckBox") === -1 &&
                            $$t_9._trigger("onTileClick", $p1_0, [Date.now()]);
                else $v_1 = false
            });
        var $$t_A = this;
        this.element.bind("keydown",
            function($p1_0) {
                if ($p1_0.which === 13)
                    $p1_0.target.className !== "ms-crm-gridurl" && $$t_A._trigger("onTileClick", $p1_0, [Date.now()]);
                else if ($p1_0.which === 32) {
                    $$t_A._trigger("onCheckBoxClick");
                    $p1_0.preventDefault()
                }
                $p1_0.stopPropagation()
            });
        var $$t_B = this;
        this.element.find("div.tilePopOut").bind("keydown",
            function($p1_0) {
                $p1_0.which === 13 && $$t_B._trigger("onPopOutIconClick");
                $p1_0.stopPropagation()
            });
        var $$t_C = this;
        this.element.bind("mousedown",
            function($p1_0) {
                ($p1_0.which === 3 || !$p1_0.target.className.indexOf("tileCheckBox")) &&
                    $$t_C._trigger("onCheckBoxClick");
                $v_0 = window.setTimeout(function() {
                        if ($p1_0.target.className.indexOf("tilePopOutImg") === -1 &&
                            $p1_0.target.className.indexOf("tileCheckBox") === -1) {
                            $$t_C._trigger("onCheckBoxClick");
                            $v_1 = true
                        }
                    },
                    750)
            });
        var $$t_D = this;
        this.element.bind("mouseup",
            function($p1_0) {
                if ($p1_0.target.className.indexOf("Lock-symbol") > -1) {
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                }
                window.clearTimeout($v_0)
            });
        var $$t_E = this;
        this.element.bind("contextmenu", function($p1_0) { $p1_0.preventDefault() })
    },
    destroy: function() {
        this.element.find("div.tilePopOut").unbind("keydown");
        this.element.unbind("mouseup");
        this.element.unbind("contextmenu");
        this.element.unbind("mousedown");
        this.element.unbind("keydown");
        this.element.unbind("click");
        this.element.removeClass();
        this.element.empty();
        $P_CRM.Widget.prototype.destroy.call(this)
    },
    $2_1: function() { this.element.addClass("centerTileColor") }
};
CrmJQueryWidget.TileWidgetOptions = function() {
    CrmJQueryWidget.TileWidgetOptions.initializeBase(this);
    this.disabled = false;
    this.showCheckBox = true
};
CrmJQueryWidget.TileWidgetOptions.prototype = {
    data: null,
    isFocusTile: false,
    showCheckBox: false,
    onCheckBoxClick: null,
    onPopOutIconClick: null,
    onTileClick: null,
    showPopupToolTip: null,
    showTileCheckBoxToolTip: null
};
CrmJQueryWidget.Tile.registerClass("CrmJQueryWidget.Tile", $P_CRM.Widget);
CrmJQueryWidget.TileOptions.registerClass("CrmJQueryWidget.TileOptions", jQueryUIApi.WidgetOptions);
CrmJQueryWidget.TileWidget.registerClass("CrmJQueryWidget.TileWidget", $P_CRM.Widget);
CrmJQueryWidget.TileWidgetOptions.registerClass("CrmJQueryWidget.TileWidgetOptions", jQueryUIApi.WidgetOptions);
CrmJQueryWidget.Tile.$$cctor();
CrmJQueryWidget.TileWidget.$$cctor()