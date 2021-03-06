Type.registerNamespace("Mscrm");
Mscrm.MonthCalendarControl = function(element) {
    this.$$d_$C_3 = Function.createDelegate(this, this.$C_3);
    this.$$d_$D_3 = Function.createDelegate(this, this.$D_3);
    this.$$d_$B_3 = Function.createDelegate(this, this.$B_3);
    Mscrm.MonthCalendarControl.initializeBase(this, [element])
};
Mscrm.MonthCalendarControl.prototype = {
    $2_3: null,
    $1_3: null,
    $0_3: true,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $addHandler(this.get_element(), "click", this.$$d_$B_3);
        $addHandler(this.get_element(), "mouseover", this.$$d_$D_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$C_3);
        this.$1_3 = $get("frmGrid")
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_$B_3);
        $removeHandler(this.get_element(), "mouseover", this.$$d_$D_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$C_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    get_isEditable: function() { return this.$0_3 },
    set_isEditable: function(value) {
        if (!value && this.$0_3) this.$0_3 = false;
        return value
    },
    editSelectedEntity: function(keys, values) {
        if (this.$0_3 && !IsNull(this.$2_3)) {
            var $v_0 = Mscrm.CrmUri.create("");
            $v_0.get_query()["id"] = this.$2_3.getAttribute("itemId");
            openCrmEntity(this.$2_3, appendQueryString($v_0.get_queryString(), keys, values))
        }
    },
    editEntity: function(eventObject, keys, values) {
        if (this.$0_3) {
            var $v_0 = this.$5_3(eventObject.target);
            if ($v_0.className === "ms-crm-Cal-Month-Day-Appointment") {
                var $v_1 = Mscrm.CrmUri.create("");
                $v_1.get_query()["id"] = $v_0.getAttribute("itemId");
                openCrmEntity($v_0, appendQueryString($v_1.get_queryString(), keys, values))
            }
        }
    },
    selectEntity: function(eventObject) {
        var $v_0 = this.$5_3(eventObject.target);
        if (this
            .$0_3 &&
            $v_0.className === "ms-crm-Cal-Month-Day-Appointment" &&
            this.$1_3.itemSelect.value === "true") {
            eventObject.preventDefault();
            this.$A_3($v_0);
            this.$2_3 = $v_0
        }
    },
    itemTouch: function(eventObject, keys, values) {
        var $v_0 = eventObject.rawEvent.targetTouches;
        if (IsNull($v_0)) return;
        $v_0.length === 2 && this.editEntity(eventObject, keys, values)
    },
    $B_3: function($p0) {
        var $v_0 = this.$4_3($p0.target);
        if (this.$0_3 && !IsNull($v_0)) {
            $p0.preventDefault();
            this.$9_3($v_0, $p0.ctrlKey)
        }
    },
    $D_3: function($p0) {
        var $v_0 = this.$4_3($p0.target);
        if (!IsNull($v_0)) {
            $p0.preventDefault();
            this.$6_3($v_0, "hover")
        }
    },
    $C_3: function($p0) {
        var $v_0 = this.$4_3($p0.target);
        if (!IsNull($v_0)) {
            $p0.preventDefault();
            this.$6_3($v_0, "leave")
        }
    },
    $3_3: function($p0, $p1, $p2, $p3) {
        if (IsNull($p3)) $p3 = "";
        $p1 = $p1.toUpperCase();
        var $v_0 = $p0;
        while (IsNull($v_0.tagName) ||
            $v_0.tagName.toUpperCase() !== $p1 ||
            $p3.length > 0 && $v_0.className.indexOf($p3) === -1) {
            $v_0 = $v_0.parentNode;
            if ($v_0.tagName.toUpperCase() === "BODY") return null;
            $p2--;
            if ($p2 <= 0) return null
        }
        return $v_0
    },
    $5_3: function($p0) {
        var $v_0 = this.$3_3($p0, "SPAN", 5, null);
        return IsNull($v_0) ? $p0 : $v_0
    },
    $4_3: function($p0) {
        var $v_0 = this.$3_3($p0, "TD", 8, "ms-crm-Cal-Month-Day");
        if (IsNull($v_0)) return null;
        if (this.$1_3.cellSelect.value === "true") return $v_0;
        return null
    },
    $9_3: function($p0, $p1) {
        var $v_0 = this.$3_3($p0, "TABLE", 8, null);
        if (IsNull($v_0)) return;
        for (var $v_1 = $p0.getAttribute("d"), $v_2 = new Array(0), $v_3 = 0, $v_4 = $v_0.rows.length;
            $v_3 < $v_4;
            $v_3++)
            for (var $v_5 = 0, $v_6 = $v_0.rows[$v_3].cells.length; $v_5 < $v_6; $v_5++) {
                var $v_7 = $v_0.rows[$v_3].cells[$v_5], $v_8 = $v_7.getAttribute("d");
                if (!IsNull($v_8)) {
                    if ($v_8 === $v_1) Sys.UI.DomElement.toggleCssClass($v_7, "cmCellSelected");
                    else !$p1 && Sys.UI.DomElement.removeCssClass($v_7, "cmCellSelected");
                    Sys.UI.DomElement.containsCssClass($v_7, "cmCellSelected") && Array.add($v_2, $v_8)
                }
            }
        this.$1_3.selectedDates.value = $v_2.join(",")
    },
    $6_3: function($p0, $p1) {
        var $v_0 = this.$7_3($p0);
        if (IsNull($v_0)) return;
        if ($p1 === "hover") Sys.UI.DomElement.addCssClass($p0, "ms-crm-Cal-Month-Day-Today-Hovered");
        else $p1 === "leave" && Sys.UI.DomElement.removeCssClass($p0, "ms-crm-Cal-Month-Day-Today-Hovered")
    },
    $A_3: function($p0) {
        var $v_0 = this.$8_3($p0, 7);
        if ($v_0.tagName.toUpperCase() !== "TABLE") return;
        for (var $v_1 = 0, $v_2 = $v_0.rows.length; $v_1 < $v_2; $v_1++)
            for (var $v_3 = 0, $v_4 = $v_0.rows[$v_1].cells.length; $v_3 < $v_4; $v_3++) {
                var $v_5 = $v_0.rows[$v_1].cells[$v_3];
                if (!IsNull($v_5.getAttribute("d"))) {
                    var $v_6 = XUI.Html.DomUtils
                        .GetFirstChild(XUI.Html.DomUtils
                            .GetNextSibling(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_5))));
                    if (!IsNull($v_6)) {
                        var $$t_9 = this;
                        XUI.Html.DomUtils.ForEachChild($v_6,
                            function($p1_0) {
                                XUI.Html.DomUtils.GetFirstChild($p1_0)
                                    .className = $p0.getAttribute("itemId") === $p1_0.getAttribute("itemId")
                                    ? "ms-crm-Cal-Month-Day-Appointment-Selected"
                                    : "";
                                return false
                            })
                    }
                }
            }
        this.$1_3.selectedItem.value = $p0.getAttribute("itemId");
        this.$1_3.selectedItemType.value = $p0.getAttribute("itemType")
    },
    $8_3: function($p0, $p1) {
        while ($p1-- > 0 && !IsNull($p0)) $p0 = $p0.parentNode;
        return $p0
    },
    $7_3: function($p0) {
        var $v_0 = this.$3_3($p0, "TABLE", 8, null);
        return IsNull($v_0) ? null : $v_0
    }
};
Mscrm.MonthCalendarControl.registerClass("Mscrm.MonthCalendarControl", Mscrm.CrmUIControl)