Type.registerNamespace("Mscrm");
Mscrm.ZoomOnSelectChangeArgs = function(selectedLevel) {
    Mscrm.ZoomOnSelectChangeArgs.initializeBase(this);
    this.$0_1 = selectedLevel
};
Mscrm.ZoomOnSelectChangeArgs.prototype = { $0_1: 0, get_selectedLevel: function() { return this.$0_1 } };
Mscrm.ZoomControl = function(element) {
    this.$$d_$k_3 = Function.createDelegate(this, this.$k_3);
    this.$$d_$b_3 = Function.createDelegate(this, this.$b_3);
    this.$$d_$d_3 = Function.createDelegate(this, this.$d_3);
    this.$$d_$e_3 = Function.createDelegate(this, this.$e_3);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    this.$0_3 = -1;
    this.$L_3 = 37;
    this.$M_3 = 39;
    Mscrm.ZoomControl.initializeBase(this, [element])
};
Mscrm.ZoomControl.prototype = {
    $2_3: null,
    $H_3: null,
    $I_3: null,
    $C_3: null,
    $E_3: null,
    $D_3: null,
    $B_3: null,
    $F_3: null,
    $1_3: 0,
    $A_3: null,
    $9_3: null,
    $8_3: null,
    $7_3: null,
    $6_3: null,
    $5_3: null,
    $G_3: 0,
    $J_3: 0,
    $K_3: 0,
    $S_3: 7,
    get_selectedLevel: function() { return this.$0_3 },
    set_selectedLevel: function(value) {
        if (value !== this.$0_3) {
            this.$V_3(this.$0_3);
            this.$P_3(value);
            this.$0_3 = value
        }
        return value
    },
    get_count: function() { return this.$1_3 },
    set_count: function(value) {
        this.$1_3 = value;
        return value
    },
    add_onSelectChange: function(value) { this.get_events().addHandler("ZoomOnSelectChange", value) },
    remove_onSelectChange: function(value) { this.get_events().removeHandler("ZoomOnSelectChange", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (window.LOCID_UI_DIR === "RTL") {
            this.$L_3 = 39;
            this.$M_3 = 37
        }
        this.$A_3 = this.$3_3(11, 16);
        this.$9_3 = this.$3_3(11, 16);
        this.$8_3 = this.$3_3(11, 16);
        this.$7_3 = this.$3_3(11, 16);
        this.$6_3 = this.$3_3(11, 16);
        this.$5_3 = this.$3_3(11, 16);
        this.$C_3 = this.$$d_$c_3;
        this.$E_3 = this.$$d_$e_3;
        this.$D_3 = this.$$d_$d_3;
        this.$B_3 = this.$$d_$b_3;
        this.$F_3 = this.$$d_$k_3;
        $addHandler(this.get_element(), "mousedown", this.$C_3);
        $addHandler(this.get_element(), "mouseover", this.$E_3);
        $addHandler(this.get_element(), "mouseout", this.$D_3);
        $addHandler(this.get_element(), "keydown", this.$B_3);
        $addHandler(window, "resize", this.$F_3);
        this.$4_3(window.CDNURL + "/_imgs/zoom/dotselected.gif", this.$A_3);
        this.$4_3(window.CDNURL + "/_imgs/zoom/dotunselected.gif", this.$9_3);
        this.$4_3(window.CDNURL + "/_imgs/zoom/zoomplusover.gif", this.$8_3);
        this.$4_3(window.CDNURL + "/_imgs/zoom/zoomplus.gif", this.$7_3);
        this.$4_3(window.CDNURL + "/_imgs/zoom/zoomminusover.gif", this.$6_3);
        this.$4_3(window.CDNURL + "/_imgs/zoom/zoomminus.gif", this.$5_3);
        var $v_0 = $get("zoomtable", this.get_element());
        this.$2_3 = $get("zoomheader", this.get_element());
        this.$K_3 = $v_0.scrollWidth;
        this.$G_3 = this.$K_3 + this.$S_3;
        this.$J_3 = this.$G_3 - this.$2_3.scrollWidth;
        this.$P_3(this.$0_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.get_events().getHandler("ZoomOnSelectChange");
        !IsNull($v_0) && this.remove_onSelectChange($v_0);
        $removeHandler(this.get_element(), "mousedown", this.$C_3);
        $removeHandler(this.get_element(), "mouseover", this.$E_3);
        $removeHandler(this.get_element(), "mouseout", this.$D_3);
        $removeHandler(this.get_element(), "keydown", this.$B_3);
        $removeHandler(window, "resize", this.$F_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    get_$Y_3: function() {
        if (!this.$H_3) {
            var $v_0 = $get("zoomminus", this.get_element());
            this.$H_3 = $v_0
        }
        return this.$H_3
    },
    get_$a_3: function() {
        if (!this.$I_3) {
            var $v_0 = $get("zoomplus", this.get_element());
            this.$I_3 = $v_0
        }
        return this.$I_3
    },
    $4_3: function($p0, $p1) {
        var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create($p0));
        $p1.src = $v_0.source;
        $p1.className = Mscrm.ImageStrip.replaceExistingImageStripClass($p1.className, $v_0.cssClass)
    },
    $k_3: function($p0) {
        var $v_0 = this.get_element().scrollWidth;
        if ($v_0 > this.$G_3) {
            this.$2_3.style.display = "inline";
            this.$Q_3(true)
        } else if ($v_0 > this.$J_3) {
            this.$2_3.style.display = "none";
            this.$Q_3(true)
        } else {
            this.$2_3.style.display = "none";
            this.$Q_3(false)
        }
    },
    $Q_3: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$1_3; $v_0++) {
            var $v_1 = "dot" + $v_0, $v_2 = $get($v_1, this.get_element());
            $v_2.style.display = $p0 ? "inline" : "none"
        }
    },
    $N_3: function($p0) {
        this.set_selectedLevel($p0);
        this.$j_3()
    },
    $P_3: function($p0) { this.$W_3($p0, this.$A_3) },
    $V_3: function($p0) { this.$W_3($p0, this.$9_3) },
    $h_3: function() {
        var $v_0 = this.get_$Y_3();
        $v_0.src = this.$6_3.src;
        $v_0.className = this.$6_3.className
    },
    $f_3: function() {
        var $v_0 = this.get_$Y_3();
        $v_0.src = this.$5_3.src;
        $v_0.className = this.$5_3.className
    },
    $i_3: function() {
        var $v_0 = this.get_$a_3();
        $v_0.src = this.$8_3.src;
        $v_0.className = this.$8_3.className
    },
    $g_3: function() {
        var $v_0 = this.get_$a_3();
        $v_0.src = this.$7_3.src;
        $v_0.className = this.$7_3.className
    },
    $X_3: function() { this.$0_3 < this.$1_3 - 1 && this.$N_3(this.$0_3 + 1) },
    $Z_3: function() { this.$0_3 > 0 && this.$N_3(this.$0_3 - 1) },
    $W_3: function($p0, $p1) {
        if ($p0 >= 0 && $p0 < this.$1_3) {
            var $v_0 = "dot" + $p0, $v_1 = $get($v_0, this.get_element());
            if (!IsNull($v_1)) {
                $v_1.src = $p1.src;
                $v_1.className = $p1.className
            }
        }
    },
    $j_3: function() {
        var $v_0 = new Mscrm.ZoomOnSelectChangeArgs(this.$0_3),
            $v_1 = this.get_events().getHandler("ZoomOnSelectChange");
        !IsNull($v_1) && $v_1(this, $v_0)
    },
    $c_3: function($p0) {
        var $v_0 = this.$O_3($p0.target);
        if ($v_0 && $v_0.length > 0)
            switch ($v_0) {
            case "zoomplus":
                this.$X_3();
                break;
            case "zoomminus":
                this.$Z_3();
                break;
            default:
                var $v_1 = this.$R_3($v_0);
                !isNaN($v_1) && this.$N_3($v_1);
                break
            }
    },
    $e_3: function($p0) {
        var $v_0 = this.$O_3($p0.target);
        if ($v_0 && $v_0.length > 0)
            switch ($v_0) {
            case "zoomplus":
                this.$i_3();
                break;
            case "zoomminus":
                this.$h_3();
                break;
            default:
                var $v_1 = this.$R_3($v_0);
                !isNaN($v_1) && $v_1 !== this.$0_3 && this.$P_3($v_1);
                break
            }
    },
    $d_3: function($p0) {
        var $v_0 = this.$O_3($p0.target);
        if ($v_0 && $v_0.length > 0)
            switch ($v_0) {
            case "zoomplus":
                this.$g_3();
                break;
            case "zoomminus":
                this.$f_3();
                break;
            default:
                var $v_1 = this.$R_3($v_0);
                !isNaN($v_1) && $v_1 !== this.$0_3 && this.$V_3($v_1);
                break
            }
    },
    $O_3: function($p0) {
        var $v_0 = $p0.className;
        if (!IsNull($v_0) &&
        ($v_0.indexOf("zoomtick") !== -1 ||
            $v_0.indexOf("zoomplus") !== -1 ||
            $v_0.indexOf("zoomminus") !== -1 ||
            $v_0.indexOf("ms-crm-ImageStrip") !== -1)) return $p0.id;
        return ""
    },
    $b_3: function($p0) {
        if ($p0.keyCode === this.$M_3) {
            this.$X_3();
            $p0.preventDefault()
        } else if ($p0.keyCode === this.$L_3) {
            this.$Z_3();
            $p0.preventDefault()
        }
    },
    $3_3: function($p0, $p1) {
        var $v_0 = document.createElement("img");
        $v_0.height = $p1;
        $v_0.width = $p0;
        return $v_0
    },
    $R_3: function($p0) {
        if ($p0.length > 3) {
            var $v_0 = $p0.substr(3);
            return parseInt($v_0, 10)
        } else return Number.NaN
    }
};
Mscrm.ZoomOnSelectChangeArgs.registerClass("Mscrm.ZoomOnSelectChangeArgs", Sys.EventArgs);
Mscrm.ZoomControl.registerClass("Mscrm.ZoomControl", Mscrm.CrmUIControl)