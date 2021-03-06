Type.registerNamespace("Mscrm");
Mscrm.ActivityCommandBarButton = function(element) { Mscrm.ActivityCommandBarButton.initializeBase(this, [element]) };
Mscrm.ActivityCommandBarButtonMenu = function(parentDomElementId) {
    Mscrm.ActivityCommandBarButtonMenu.initializeBase(this, [parentDomElementId])
};
Mscrm.WallCommandBarButton = function(element) {
    Mscrm.WallCommandBarButton.initializeBase(this, [element]);
    this.$4_3 = new Mscrm.WallCommandBarButtonMenu(element.id)
};
Mscrm.WallCommandBarButton.prototype = {
    $4_3: null,
    get_menu: function() { return this.$4_3 },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$4_3) && this.$4_3.dispose();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.WallCommandBarButtonMenu = function(parentDomElementId) {
    this.$$d_$I_0 = Function.createDelegate(this, this.$I_0);
    this.$$d_$M_0 = Function.createDelegate(this, this.$M_0);
    this.$8_0 = parentDomElementId
};
Mscrm.WallCommandBarButtonMenu.$F = function($p0) {
    var $v_0 = String.format(".{0}", "moreActivityMenuSelected"), $v_1 = $P_CRM($v_0), $v_2;
    if ($p0.which === 40 || $p0.which === 9 && !$p0.shiftKey) {
        $v_2 = $v_1.next();
        if (!$v_2.length) $v_2 = $P_CRM("#moreActivitiesList").children(":first-child")
    } else {
        $v_2 = $v_1.prev();
        if (!$v_2.length) $v_2 = $P_CRM("#moreActivitiesList").children(":last-child")
    }
    $v_2.hasClass("ms-crm-RefreshForm-MoreMenu") && Mscrm.WallCommandBarButtonMenu.$G($v_2, $v_1)
};
Mscrm.WallCommandBarButtonMenu.$K = function($p0) {
    var $v_0 = $P_CRM($p0.target);
    if (!$v_0.hasClass("ms-crm-RefreshForm-MoreMenu")) {
        $v_0 = $v_0.parents("li");
        if ($v_0.length !== 1) return
    }
    var $v_1 = String.format(".{0}", "moreActivityMenuSelected"), $v_2 = $P_CRM($v_1);
    Mscrm.WallCommandBarButtonMenu.$G($v_0, $v_2)
};
Mscrm.WallCommandBarButtonMenu.$L = function($p0) {
    var $v_0 = $P_CRM($p0.target);
    if (!$v_0.hasClass("ms-crm-RefreshForm-MoreMenu")) {
        $v_0 = $v_0.parents("li");
        if ($v_0.length !== 1) return
    }
    $v_0.removeClass("moreActivityMenuSelected");
    $v_0.addClass("moreActivityMenuUnselected")
};
Mscrm.WallCommandBarButtonMenu.$G = function($p0, $p1) {
    $p1.addClass("moreActivityMenuUnselected");
    $p1.removeClass("moreActivityMenuSelected");
    $p0.removeClass("moreActivityMenuUnselected");
    $p0.addClass("moreActivityMenuSelected");
    $p0.find("a").focus()
};
Mscrm.WallCommandBarButtonMenu.prototype = {
    $3_0: false,
    $0_0: null,
    $1_0: null,
    $7_0: false,
    $2_0: null,
    $B_0: null,
    $C_0: 0,
    $D_0: 0,
    $8_0: null,
    $5_0: null,
    $6_0: 0,
    customFilter: false,
    processAndShowMenu: function() {
        this.$N_0();
        if (this.$3_0) {
            this.$0_0.hide();
            this.$3_0 = false;
            return
        }
        var $v_0 = this.$J_0();
        this.$H_0($v_0);
        this.$0_0.show($P_CRM(this.get_$A_0()), null);
        var $v_1 = $P_CRM("#moreActivitiesList").children(":first-child");
        $P_CRM(".ms-crm-RefreshForm-MoreMenu").show();
        $v_1.addClass("moreActivityMenuSelected");
        $v_1.removeClass("moreActivityMenuUnselected");
        this.$O_0($v_1);
        $P_CRM("#moreActivitiesList IMG").removeClass("moreActivityMenuUnselected");
        this.$3_0 = true;
        var $v_2 = $P_CRM("body");
        this.$C_0 = $v_2.height();
        this.$D_0 = $v_2.width();
        $P_CRM(window).bind("resize", this.$$d_$M_0)
    },
    $O_0: function($p0) {
        if (!IsNull($p0)) {
            var $$t_1 = this;
            window.setTimeout(function() { $p0.find("a").focus() }, 0)
        }
    },
    $M_0: function($p0) {
        if (this.$3_0) {
            var $v_0 = $P_CRM("body");
            if (this.$C_0 !== $v_0.height() || this.$D_0 !== $v_0.width()) {
                this.$0_0.hide();
                this.$3_0 = false
            }
        }
    },
    changeSelectedMenuItem: function(selectedItemId) {
        if (!selectedItemId.localeCompare(this.$5_0)) return;
        var $v_0 = null;
        if (IsNull(this.$2_0)) $v_0 = $get(selectedItemId);
        else $v_0 = $get(selectedItemId, $get(this.$2_0));
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.getElementsByTagName("A")[0],
                $v_2 = $v_1.getElementsByTagName("SPAN")[0],
                $v_3 = XUI.Html.GetText($v_2);
            $P_CRM(this.get_$A_0()).children(":first-child").text($v_3);
            var $v_4 = this.$2_0 ? "#" + this.$2_0 + " #" + selectedItemId : "#" + selectedItemId;
            $P_CRM($v_4).siblings("li").removeClass("moreActivityItemselected");
            $P_CRM($v_4).addClass("moreActivityItemselected");
            this.$5_0 = selectedItemId
        }
    },
    get_masterComponentId: function() { return this.$2_0 },
    set_masterComponentId: function(value) {
        this.$2_0 = value;
        return value
    },
    get_$A_0: function() {
        if (this.$2_0) return "#" + this.$2_0 + " #" + this.$8_0;
        else return "#" + this.$8_0
    },
    get_currentMenu: function() { return this.$5_0 },
    set_currentMenu: function(value) {
        this.$5_0 = value;
        return value
    },
    get_width: function() { return this.$6_0 },
    set_width: function(value) {
        this.$6_0 = value;
        return value
    },
    $I_0: function($p0) {
        switch ($p0.which) {
        case 13:
            var $v_0 = $P_CRM($p0.target);
            $v_0.click();
            break;
        case 9:
            if ($p0.target.tagName === "A") {
                $p0.preventDefault();
                Mscrm.WallCommandBarButtonMenu.$F($p0)
            }
            break;
        case 38:
        case 40:
            $p0.target.tagName === "A" && Mscrm.WallCommandBarButtonMenu.$F($p0);
            break;
        case 27:
            this.$0_0.hide();
            this.$3_0 = false;
            var $$t_2 = this;
            window.setTimeout(function() { $P_CRM($$t_2.get_$A_0() + " a").focus() }, 1);
            break
        }
        $p0.stopImmediatePropagation()
    },
    $N_0: function() {
        if (this.$7_0) return;
        this.$0_0 = new Mscrm.FlyOutDialog;
        this.$0_0.get_options().set_showButtonPane(false);
        this.$0_0.get_options().set_modal(true);
        this.$0_0.get_options().set_closeOnEscape(true);
        this.$0_0.set_shouldDisposeContent(false);
        var $$t_2 = this;
        this.$0_0.bind("flyout-canceled", function($p1_0) { $$t_2.$E_0() });
        var $$t_3 = this;
        this.$0_0.bind("flyout-closed", function($p1_0) { $$t_3.$E_0() });
        this.$7_0 = true
    },
    $H_0: function($p0) {
        var $v_0 = $P_CRM("<div class='ui-flyout-dialog-moreCommands'></div>"),
            $v_1 = $P_CRM("<ul id='moreActivitiesList'></ul>");
        $v_1.append($p0);
        $v_0.append($v_1);
        this.$B_0 = $v_0;
        this.$0_0.setContent($v_0);
        this.$1_0 = $P_CRM("#moreActivitiesList");
        this.$1_0.keydown(this.$$d_$I_0);
        this.$1_0.mouseover(Mscrm.WallCommandBarButtonMenu.$K);
        this.$1_0.mouseout(Mscrm.WallCommandBarButtonMenu.$L);
        var $$t_7 = this;
        this.$1_0.find("li").each(function($p1_0, $p1_1) {
            var $v_2 = $P_CRM($p1_1), $v_3 = $v_2.attr("onclick");
            if (!$$t_7.customFilter) {
                $v_2.click(function() {
                    $$t_7.$0_0.hide();
                    window.setTimeout($v_3, 0)
                });
                $v_2.prop("onclick", null)
            }
        });
        this.$0_0.set_position("bottom");
        if (this.$6_0) this.$0_0.get_options().set_width(this.$6_0);
        else this.$0_0.get_options().set_width(145);
        this.$0_0.get_options().set_minHeight(10);
        this.$0_0.get_options().set_showTitlePane(false)
    },
    $J_0: function() {
        var $v_0 = $P_CRM(this.get_$A_0() + "_Menu");
        return $v_0.html()
    },
    $E_0: function() {
        this.$1_0 && this.$1_0.unbind();
        if (this.$0_0) {
            this.$0_0.unbind();
            this.$0_0.dispose()
        }
        $P_CRM(window).unbind("resize", this.$$d_$M_0);
        this.$3_0 = false;
        this.$7_0 = false;
        this.$0_0 = null;
        this.$1_0 = null
    },
    dispose: function() { this.$B_0 && this.$E_0() }
};
Mscrm.WallCommandBarButton.registerClass("Mscrm.WallCommandBarButton", Mscrm.CrmUIControl);
Mscrm.ActivityCommandBarButton.registerClass("Mscrm.ActivityCommandBarButton", Mscrm.WallCommandBarButton);
Mscrm.WallCommandBarButtonMenu.registerClass("Mscrm.WallCommandBarButtonMenu");
Mscrm.ActivityCommandBarButtonMenu.registerClass("Mscrm.ActivityCommandBarButtonMenu", Mscrm.WallCommandBarButtonMenu)