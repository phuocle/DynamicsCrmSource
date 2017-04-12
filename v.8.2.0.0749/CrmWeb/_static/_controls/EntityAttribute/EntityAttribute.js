Type.registerNamespace("Mscrm");
Mscrm.EntityAttributeSelect = function(element) {
    this.$$d_valueEntityChange = Function.createDelegate(this, this.valueEntityChange);
    Mscrm.EntityAttributeSelect.initializeBase(this, [element]);
    this.$4_3 = element.id + "_EntitySelector";
    this.$3_3 = element.id + "_AttributeSelector";
    this.$0_3 = $get(this.$4_3);
    this.$1_3 = $get(this.$3_3);
    if (!IsNull(this.$0_3)) {
        $addHandler(this.$0_3, "change", this.$$d_valueEntityChange);
        this.$5_3 = this.$0_3.options.length - 1
    }
    this.$2_3 = XUI.Xml.LoadXml("<entities></entities>")
};
Mscrm.EntityAttributeSelect.prototype = {
    $2_3: null,
    $0_3: null,
    $1_3: null,
    $5_3: 0,
    $4_3: null,
    $3_3: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.$0_3, "change", this.$$d_valueEntityChange);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    valueEntityChange: function(domEvent) {
        this.$0_3.options.length > this.$5_3 && this.$0_3.remove(0);
        if (!isNullOrEmptyString(this.$0_3.value))
            while (!this.$7_3()) {
                var $v_0 = XUI.Xml.LoadXml(this.$6_3());
                if ($v_0) {
                    var $v_1 = $v_0.getElementsByTagName("entity")[0],
                        $v_2 = this.$2_3.getElementsByTagName("entities")[0];
                    $v_2.appendChild($v_1)
                }
            }
    },
    $7_3: function() {
        var $v_0 = this.$2_3.getElementsByTagName("entity");
        if ($v_0) {
            while (this.$1_3.options.length > 0) this.$1_3.remove(0);
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++)
                if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0[$v_1], "name", null)) === this.$0_3.value) {
                    for (var $v_2 = XUI.Xml.SelectNodes($v_0[$v_1], "attribute", null), $v_3 = 0;
                        $v_3 < $v_2.length;
                        $v_3++) {
                        var $v_4 = document.createElement("OPTION");
                        $v_4.value = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2[$v_3], "logicalname", null));
                        $v_4.text = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2[$v_3], "displayname", null));
                        this.$1_3.options.add($v_4)
                    }
                    return true
                }
        }
        return false
    },
    $6_3: function() {
        var $v_0 = new RemoteCommand("Workflow", "GetEntityAttributesXml", null);
        $v_0.SetParameter("entityLogicalName", this.$0_3.value);
        var $v_1 = $v_0.Execute();
        if ($v_1.Success) return $v_1.ReturnValue;
        else return ""
    }
};
Mscrm.EntityAttributeSelect.registerClass("Mscrm.EntityAttributeSelect", Mscrm.CrmUIControl)