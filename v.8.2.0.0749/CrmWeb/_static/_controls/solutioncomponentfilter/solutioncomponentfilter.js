Type.registerNamespace("Mscrm");
Mscrm.SolutionComponentFilter = function(element) {
    this.$$d_$3_3 = Function.createDelegate(this, this.$3_3);
    this.$$d_$4_3 = Function.createDelegate(this, this.$4_3);
    Mscrm.SolutionComponentFilter.initializeBase(this, [element])
};
Mscrm.SolutionComponentFilter.prototype = {
    $1_3: null,
    $0_3: null,
    filterMode: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$1_3 = this.$$d_$4_3;
        this.$0_3 = this.$$d_$3_3;
        this.$5_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = $get(this.get_element().id + "_typefilter");
        !IsNull($v_0) && $removeHandler($v_0, "change", this.$1_3);
        var $v_1 = $get(this.get_element().id + "_subfilter");
        !IsNull($v_1) && $removeHandler($v_1, "change", this.$0_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $5_3: function() {
        var $v_0 = $get(this.get_element().id + "_typefilter");
        !IsNull($v_0) && $addHandler($v_0, "change", this.$1_3);
        var $v_1 = $get(this.get_element().id + "_subfilter");
        !IsNull($v_1) && $addHandler($v_1, "change", this.$0_3)
    },
    $4_3: function($p0) {
        if (this.filterMode === "submit") {
            var $v_0 = Mscrm.CrmUri.create(window.location.toString()),
                $v_1 = $get(this.get_element().id + "_typefilter"),
                $v_2 = $get(this.get_element().id + "_mappingSelect"),
                $v_3 = Number.parseInvariant($v_1.options[$v_1.selectedIndex].value);
            if (!$v_3) window.self.Mscrm.TreeNavControl.navigateToNode();
            else
                for (var $v_4 = 0; $v_4 < $v_2.options.length; $v_4++) {
                    var $v_5 = Number.parseInvariant($v_2.options[$v_4].text);
                    if ($v_5 === $v_3) {
                        window.self.Mscrm.TreeNavControl.navigateToNode($v_2.options[$v_4].value);
                        break
                    }
                }
        } else {
            var $v_6 = $get(this.get_element().id + "_subfilter"),
                $v_7 = $get(this.get_element().id + "_typefilter"),
                $v_8 = $get("div_" + this.get_element().id + "_subfilter");
            while ($v_6.options.length > 0) $v_6.remove(0);
            var $v_9 = Number.parseInvariant($v_7.options[$v_7.selectedIndex].value);
            if ($v_9) {
                var $v_B = this.$2_3($v_9);
                if (!IsNull($v_B) && $v_B.indexOf("<option") >= 0) {
                    if ($v_B
                        .indexOf("SELECTED") >
                        0 &&
                        $v_B.indexOf("SELECTED=") < 0 &&
                        $v_B.indexOf("SELECTED =") < 0) $v_B = $v_B.replace("SELECTED", "");
                    for (var $v_C = XUI.Xml.LoadXml("<select>" + $v_B + "</select>"),
                        $v_D = "/select/option",
                        $v_E = XUI.Xml.SelectNodes($v_C, $v_D, null),
                        $v_F = 0;
                        $v_F < $v_E.length;
                        $v_F++) {
                        var $v_G = document.createElement("OPTION");
                        $v_G.value = $v_E[$v_F].attributes.getNamedItem("value").value;
                        $v_G.text = XUI.Xml.GetText($v_E[$v_F]);
                        $v_6.add($v_G)
                    }
                }
            }
            if ($v_6.options.length > 0) {
                $v_6.selectedIndex = 0;
                $v_8.style.display = "block"
            } else $v_8.style.display = "none";
            var $v_A = $find(this.get_element().getAttribute("gridid"));
            $v_A.SetParameter("componentTypeFilter", $v_9.toString());
            $v_6.selectedIndex >= 0 && $v_A.SetParameter("componentSubFilter", $v_6.options[$v_6.selectedIndex].value);
            $v_A.refresh()
        }
    },
    $3_3: function($p0) {
        var $v_0 = $get(this.get_element().id + "_subfilter"),
            $v_1 = $get(this.get_element().id + "_typefilter"),
            $v_2 = $v_1.options[$v_1.selectedIndex].value,
            $v_3 = $v_0.options[$v_0.selectedIndex].value,
            $v_4 = $find(this.get_element().getAttribute("gridid"));
        $v_4.SetParameter("componentTypeFilter", $v_2);
        $v_4.SetParameter("componentSubFilter", $v_3);
        $v_4.refresh()
    },
    $2_3: function($p0) {
        var $v_0 = new RemoteCommand("Solution", "CreateSubFilterHtml", null);
        $v_0.SetParameter("componentType", $p0);
        var $v_1 = $v_0.Execute(null);
        if (!IsNull($v_1) && !isNullOrEmptyString($v_1.ReturnValue)) return $v_1.ReturnValue;
        return null
    }
};
Mscrm.SolutionComponentFilter.registerClass("Mscrm.SolutionComponentFilter", Mscrm.CrmUIControl)