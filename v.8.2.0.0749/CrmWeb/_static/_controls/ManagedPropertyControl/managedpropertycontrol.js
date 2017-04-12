Type.registerNamespace("Mscrm");
Mscrm.ManagedPropertyControl = function(element) {
    this.$$d_$N_3 = Function.createDelegate(this, this.$N_3);
    this.$$d_$K_3 = Function.createDelegate(this, this.$K_3);
    Mscrm.ManagedPropertyControl.initializeBase(this, [element])
};
Mscrm.ManagedPropertyControl.prototype = {
    $1_3: null,
    $4_3: false,
    $2_3: null,
    $B_3: 0,
    $A_3: null,
    $D_3: null,
    $C_3: null,
    get_xmlData: function() {
        var $v_0 = XUI.Xml.CreateDocument(),
            $v_1 = $v_0.createElement("root"),
            $v_2 = $v_0.createElement("object"),
            $v_3 = $v_0.createAttribute("typecode");
        $v_3.nodeValue = this.$B_3.toString(10);
        var $v_4 = $v_0.createAttribute("objectid");
        $v_4.nodeValue = this.$A_3;
        $v_2.attributes.setNamedItem($v_3);
        $v_2.attributes.setNamedItem($v_4);
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        this.$2_3.$H_0(this.$2_3, $v_2);
        return XUI.Xml.XMLSerializer.serializeToString($v_0)
    },
    set_xmlData: function(value) {
        this.$D_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$E_3(CrmEncodeDecode.CrmXmlDecode(this.$D_3));
        this.$C_3 = this.get_xmlData();
        this.$1_3 = this.$$d_$K_3;
        this.$L_3();
        this.$I_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$J_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    isDirty: function() { return this.get_xmlData() !== this.$C_3 },
    $L_3: function() { this.$8_3() },
    $J_3: function() { this.$9_3() },
    $8_3: function() { this.$2_3 && this.$2_3.$8_0(this.$1_3) },
    $9_3: function() { this.$2_3 && this.$2_3.$9_0(this.$1_3) },
    $K_3: function($p0, $p1) {
        var $v_0 = $p0.get_element();
        while ($v_0.tagName !== "DIV") {
            $v_0 = $v_0.parentNode;
            if (!$v_0) break
        }
        if (!IsNull($v_0)) {
            this.$M_3($v_0);
            this.$I_3()
        }
    },
    $I_3: function() { window.setTimeout(this.$$d_$N_3, 2) },
    $N_3: function() {
        var $v_0 = $get("ms-crm-tablebox");
        if (!IsNull($v_0)) $v_0.style.width = "100%"
    },
    $M_3: function($p0) {
        var $v_0 = $p0.id, $v_1 = this.$2_3.getManagedPropertyById($v_0);
        if (!$v_1) return;
        var $v_2 = Mscrm.FormControlInputBehavior.GetBehavior($p0.id), $v_3 = $v_2.get_dataValue();
        if (IsNull($v_3)) $v_1.set_$7_0(-1);
        else $v_1.set_$7_0($v_3 ? 1 : 0)
    },
    $E_3: function($p0) {
        var $v_0 = XUI.Xml.LoadXml($p0),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "root", null),
            $v_2 = XUI.Xml.SelectSingleNode($v_1, "object", null);
        this.$4_3 = $v_2.attributes.getNamedItem("ismanaged").nodeValue === "1";
        this.$B_3 = Number.parseInvariant($v_2.attributes.getNamedItem("typecode").nodeValue);
        this.$A_3 = $v_2.attributes.getNamedItem("objectid").nodeValue;
        var $v_3 = XUI.Xml.SelectNodes($v_2, "managedproperty", null);
        if ($v_3.length > 0) this.$2_3 = new Mscrm.ManagedProperty($v_3[0], this.$4_3)
    }
};
Mscrm.ManagedProperty = function($p0, $p1) {
    this.$0_0 = [];
    this.$4_0 = $p1;
    this.$E_0(this, $p0)
};
Mscrm.ManagedProperty.prototype = {
    $G_0: null,
    $3_0: null,
    $5_0: 0,
    $4_0: false,
    $1_0: null,
    $E_0: function($p0, $p1) {
        $p0.$G_0 = $p1.attributes.getNamedItem("displayname").nodeValue;
        $p0.$3_0 = $p1.attributes.getNamedItem("name").nodeValue;
        var $v_0 = $p1.attributes.getNamedItem("value").nodeValue;
        if (isNullOrEmptyString($v_0)) $p0.set_$7_0(-1);
        else $p0.set_$7_0(Number.parseInvariant($v_0));
        for (var $v_1 = XUI.Xml.SelectNodes($p1, "managedproperty", null), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = new Mscrm.ManagedProperty($v_1[$v_2], this.$4_0);
            this.$E_0($v_3, $v_1[$v_2]);
            Array.add(this.$0_0, $v_3)
        }
    },
    $H_0: function($p0, $p1) {
        var $v_0 = $p1.ownerDocument.createElement("managedproperty"),
            $v_1 = $p1.ownerDocument.createAttribute("name"),
            $v_2 = $p1.ownerDocument.createAttribute("value");
        $v_1.value = $p0.$3_0;
        var $v_3 = Mscrm.FormControlInputBehavior.GetBehavior($p0.$3_0);
        if (!IsNull($v_3)) {
            var $v_4 = $v_3.get_dataValue();
            if (IsNull($v_4)) $p0.set_$7_0(-1);
            else $p0.set_$7_0($v_4 ? 1 : 0)
        }
        $v_2.value = $p0.$5_0.toString();
        $v_0.attributes.setNamedItem($v_1);
        $v_0.attributes.setNamedItem($v_2);
        $p1.appendChild($v_0);
        if (!$p0.$0_0 || $p0.$0_0.length < 1) return;
        for (var $v_5 = 0; $v_5 < $p0.$0_0.length; $v_5++) this.$H_0($p0.$0_0[$v_5], $v_0)
    },
    set_$7_0: function($p0) {
        this.$5_0 = $p0;
        if (!this.$5_0 || this.$4_0)
            for (var $v_0 = 0; $v_0 < this.$0_0.length; $v_0++) {
                var $v_1 = this.$0_0[$v_0];
                !this.$5_0 && $v_1.$5_0 === 1 && $v_1.set_$7_0(0);
                var $v_2 = $get($v_1.$3_0);
                $v_2.disabled = true;
                for (var $v_3 = $v_2
                             .getElementsByTagName("INPUT"),
                    $v_4 = 0;
                    $v_4 < $v_3.length;
                    $v_4++) $v_3[$v_4].disabled = true;
                this.$1_0 && $v_1.$9_0(this.$1_0)
            }
        else if (this.$5_0 === 1)
            for (var $v_5 = 0; $v_5 < this.$0_0.length; $v_5++) {
                var $v_6 = this.$0_0[$v_5], $v_7 = $get($v_6.$3_0);
                $v_7.disabled = false;
                for (var $v_8 = $v_7
                             .getElementsByTagName("INPUT"),
                    $v_9 = 0;
                    $v_9 < $v_8.length;
                    $v_9++) $v_8[$v_9].disabled = false;
                this.$1_0 && $v_6.$8_0(this.$1_0)
            }
        return $p0
    },
    $8_0: function($p0) {
        this.$1_0 = $p0;
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$3_0);
        $v_0.add_change(this.$1_0);
        if (this.$0_0 && this.$0_0.length > 0)
            for (var $v_1 = 0; $v_1 < this.$0_0.length; $v_1++) this.$0_0[$v_1].$8_0($p0)
    },
    $9_0: function($p0) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$3_0);
        if (!$v_0) return;
        $v_0.remove_change(this.$1_0);
        if (this.$0_0 && this.$0_0.length > 0)
            for (var $v_1 = 0; $v_1 < this.$0_0.length; $v_1++) this.$0_0[$v_1].$9_0($p0)
    },
    getManagedPropertyById: function($p0) {
        if (this.$3_0 === $p0) return this;
        if (this.$0_0 && this.$0_0.length > 0)
            for (var $v_0 = 0; $v_0 < this.$0_0.length; $v_0++) {
                var $v_1 = this.$0_0[$v_0].getManagedPropertyById($p0);
                if ($v_1) return $v_1
            }
        return null
    }
};
Mscrm.ManagedPropertyNodeConstants = function() {};
Mscrm.ManagedPropertyControl.registerClass("Mscrm.ManagedPropertyControl", Mscrm.CrmUIControl);
Mscrm.ManagedProperty.registerClass("Mscrm.ManagedProperty");
Mscrm.ManagedPropertyNodeConstants.registerClass("Mscrm.ManagedPropertyNodeConstants");
Mscrm.ManagedPropertyNodeConstants.root = "root";
Mscrm.ManagedPropertyNodeConstants.object = "object";
Mscrm.ManagedPropertyNodeConstants.typeCode = "typecode";
Mscrm.ManagedPropertyNodeConstants.objectId = "objectid";
Mscrm.ManagedPropertyNodeConstants.Name = "name";
Mscrm.ManagedPropertyNodeConstants.displayName = "displayname";
Mscrm.ManagedPropertyNodeConstants.isManaged = "ismanaged";
Mscrm.ManagedPropertyNodeConstants.managedProperty = "managedproperty";
Mscrm.ManagedPropertyNodeConstants.value = "value"