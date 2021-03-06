Type.registerNamespace("Mscrm");
Mscrm.HierarchyContainer = function(element) {
    this.$$d_$8_3 = Function.createDelegate(this, this.$8_3);
    this.$$d_$N_3 = Function.createDelegate(this, this.$N_3);
    this.$$d_$h_3 = Function.createDelegate(this, this.$h_3);
    this.$$d_$b_3 = Function.createDelegate(this, this.$b_3);
    this.$$d_$j_3 = Function.createDelegate(this, this.$j_3);
    this.$$d_$Q_3 = Function.createDelegate(this, this.$Q_3);
    Mscrm.HierarchyContainer.initializeBase(this, [element])
};
Mscrm.HierarchyContainer.prototype = {
    $4_3: null,
    $M_3: null,
    $5_3: null,
    $9_3: null,
    $A_3: null,
    $2_3: null,
    $3_3: null,
    $B_3: false,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$4_3 = $P_CRM(".hierarchyContainer");
        this.$M_3 = $P_CRM("#folderView_" + this.get_id());
        this.$5_3 = $P_CRM("#splitter_" + this.get_id());
        this.$9_3 = $P_CRM("#tileFormSelector_hierarchyContainer");
        this.$A_3 = $P_CRM("div.formSelectorImageHolder");
        this.$k_3();
        var $v_0 = $P_CRM("#HeaderTitleElement").first();
        $v_0.css("max-width", Mscrm.Utilities.getTitleMaxWidth() + "px");
        window.setTimeout(this.$$d_$Q_3, 100);
        this.$V_3();
        this.$T_3();
        this.$U_3();
        this.$S_3()
    },
    $k_3: function() {
        this.get_eventManager().subscribeEvent(104, this.get_id());
        this.get_eventManager().subscribeEvent(106, this.get_id());
        this.get_eventManager().subscribeEvent(105, this.get_id());
        this.get_eventManager().subscribeEvent(107, this.get_id());
        this.get_eventManager().subscribeEvent(50, this.get_id())
    },
    $S_3: function() {
        this.$4_3.bind("showDataLoadingOverlay", this.$$d_$j_3);
        this.$4_3.bind("hideDataLoadingOverlay", this.$$d_$b_3)
    },
    $U_3: function() {
        this.$2_3 = document.createElement("div");
        this.$2_3.id = "dataLoadingOverlayDiv";
        this.$2_3.className = "hierarchyOverlay dataLoadingOverlay";
        this.$2_3.tabIndex = 0;
        $P_CRM(this.$2_3).appendTo(document.body)
    },
    $j_3: function($p0) {
        if (this.$B_3) return;
        this.$2_3.style.display = "block";
        this.$2_3.focus();
        this.$B_3 = true
    },
    $b_3: function($p0) {
        if (!this.$B_3) return;
        this.$2_3.style.display = "none";
        this.$B_3 = false
    },
    $V_3: function() {
        var $v_0 = document.createElement("div");
        $v_0.className = "hierarchyOverlay formSwitcherOverlayDiv";
        $v_0.id = "formSwitcherOverlayDiv";
        if (Mscrm.Utilities.isIosDevice()) $v_0.style.cursor = "pointer";
        this.$3_3 = $P_CRM($v_0);
        this.$3_3.appendTo(document.body)
    },
    $T_3: function() {
        this.$A_3.click(this.$$d_$h_3);
        var $$t_A = this;
        this.$A_3.bind("keydown",
            function($p1_0) {
                $p1_0.which === 13 && $$t_A.$N_3();
                if ($P_CRM("div.formSelectorListHolder").hasClass("show")) {
                    $p1_0.which === 9 && $$t_A.$8_3($p1_0);
                    if ($p1_0.which === 38) {
                        var $v_2 = $P_CRM("a.tileFormAnchor").last();
                        $v_2 && $v_2.focus()
                    }
                    if ($p1_0.which === 40) {
                        var $v_3 = $P_CRM("a.tileFormAnchor").first();
                        $v_3 && $v_3.focus();
                        $p1_0.preventDefault()
                    }
                    $p1_0.which === 27 && $$t_A.$8_3($p1_0)
                }
                if ($p1_0.which !== 9) {
                    $p1_0.stopPropagation();
                    $p1_0.preventDefault()
                }
            });
        var $$t_B = this;
        $P_CRM("a.tileFormAnchor").bind("keydown",
            function($p1_0) {
                if ($p1_0.which === 40) {
                    var $v_4 = XUI.Html.DomUtils.GetNextSibling($p1_0.target);
                    $v_4 && $v_4.focus();
                    $p1_0.stopPropagation();
                    $p1_0.preventDefault()
                }
                if ($p1_0.which === 38) {
                    var $v_5 = XUI.Html.DomUtils.GetPrevSibling($p1_0.target);
                    $v_5 && $v_5.focus();
                    $p1_0.stopPropagation();
                    $p1_0.preventDefault()
                }
                if ($p1_0.which === 27) {
                    $$t_B.$8_3($p1_0);
                    $P_CRM("div.formSelectorImageHolder img").focus();
                    $p1_0.stopPropagation()
                }
                $p1_0.which === 9 && $$t_B.$8_3($p1_0);
                $p1_0.preventDefault()
            });
        var $v_0 = false, $v_1 = 0, $$t_C = this;
        this.$9_3.bind("mouseenter",
            function($p1_0) {
                if ($v_0) {
                    window.clearTimeout($v_1);
                    $v_0 = false
                }
                window.setTimeout($$t_C.$$d_$N_3, 600)
            });
        var $$t_D = this;
        this.$9_3.bind("mouseleave",
            function($p1_0) {
                $v_1 = window.setTimeout(function() { $$t_D.$8_3($p1_0) }, 600);
                $v_0 = true
            });
        this.$3_3.click(this.$$d_$8_3)
    },
    $N_3: function() {
        $P_CRM("div.formSelectorListHolder").addClass("show");
        this.$3_3.css("display", "block")
    },
    $8_3: function($p0) {
        $P_CRM("div.formSelectorListHolder").removeClass("show");
        this.$3_3.css("display", "none")
    },
    $h_3: function($p0) {
        !$P_CRM("div.formSelectorListHolder").hasClass("show") && this.$N_3();
        $p0.stopPropagation()
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 104:
            this.$l_3(parameters["data"]);
            break;
        case 106:
        case 105:
            this.$o_3(eventCode);
            break;
        case 20:
            this.$Q_3();
            break;
        case 107:
        case 50:
            this.$P_3().refresh();
            break
        }
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    $l_3: function($p0) {
        if (IsNull($p0));
        this.$n_3($p0);
        this.$m_3($p0)
    },
    $n_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDataForTile($p0, "_entity", "Name", false),
            $v_1 = $get("ms_crm_hierarchyheader_title");
        $v_1.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_0);
        $v_1.setAttribute("title", $v_0)
    },
    $m_3: function($p0) {
        var $v_0 = $get("hierarchyheader_pic_image");
        if (IsNull($v_0)) return;
        var $v_1 = Mscrm.Utilities.getDataForTile($p0, "entityimage_url", "value", false);
        if ($v_1.length <= 0) return;
        $v_1 = CrmEncodeDecode.CrmHtmlDecode($v_1);
        $v_0.setAttribute("src", $v_1)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $P_CRM("#formSelectorList a").unbind();
        this.$A_3.unbind();
        this.$3_3.unbind();
        this.$4_3.unbind();
        this.$9_3.unbind();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $o_3: function($p0) {
        var $v_0 = this.$P_3(), $v_1 = this.$Z_3();
        if ($v_0.get_HeroNodeId() === $v_1.get_HeroNodeId()) return;
        if ($p0 === 106) {
            $v_0.refreshHeroNode($v_1.get_HeroNodeId(), false);
            this.$4_3.attr("heroNodeId", $v_1.get_HeroNodeId())
        } else {
            $v_1.refresh($v_0.get_HeroNodeId(), false);
            this.$4_3.attr("heroNodeId", $v_0.get_HeroNodeId())
        }
    },
    $P_3: function() {
        var $v_0 = $P_CRM(".tileView"), $v_1 = $find($v_0[0].id);
        return $v_1
    },
    $Z_3: function() {
        var $v_0 = $P_CRM(".folderView"), $v_1 = $find($v_0[0].id);
        return $v_1
    },
    $Q_3: function() {
        var $v_0 = 0, $v_1 = this.get_element().clientWidth, $v_2 = 0, $v_3 = $find(this.$5_3[0].id);
        $v_3.setLeftValue(10, $v_1 - 10);
        var $v_4 = window.LOCID_UI_DIR === "RTL";
        $v_0 = this.$a_3($v_1, $v_3, $v_4);
        $v_2 = this.$i_3($v_0);
        var $v_5 = "layout_tileView_" + this.get_id(), $v_6 = $get($v_5);
        if ($v_4) {
            this.$5_3.parent()[0].style.right = $v_0.toString() + "px";
            $v_6.style.right = ($v_0 + 10).toString() + "px"
        } else {
            this.$5_3.parent()[0].style.left = $v_0.toString() + "px";
            $v_6.style.left = ($v_0 + 10).toString() + "px"
        }
        $v_6.style.width = ($v_1 - $v_2 - 20).toString() + "px"
    },
    $i_3: function($p0) {
        var $v_0 = $p0 - 10;
        this.$M_3.parent().width($v_0);
        return $v_0
    },
    $a_3: function($p0, $p1, $p2) {
        var $v_0 = $p2 ? $p0 - this.$5_3[0].offsetLeft : this.$5_3[0].offsetLeft;
        if ($v_0 > $p0) {
            $v_0 = $p0 * .2;
            $p1.handleWindowResizeOverflow($v_0)
        }
        return $v_0
    }
};
Mscrm.HierarchySplitterControl = function(element) {
    this.$$d_$g_3 = Function.createDelegate(this, this.$g_3);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    this.$$d_$R_3 = Function.createDelegate(this, this.$R_3);
    this.$$d_$e_3 = Function.createDelegate(this, this.$e_3);
    this.$$d_$d_3 = Function.createDelegate(this, this.$d_3);
    Mscrm.HierarchySplitterControl.initializeBase(this, [element]);
    this.get_element().innerHTML = Mscrm.HierarchySplitterControl.get_$W();
    this.get_element().style.height = "100%";
    this.$H_3 = this.$$d_$d_3;
    this.$I_3 = this.$$d_$e_3;
    this.$J_3 = this.$$d_$R_3;
    this.$G_3 = this.$$d_$c_3;
    this.$L_3 = this.$$d_$g_3;
    this.$K_3 = this.get_element().getElementsByTagName("img")[0];
    $addHandler(this.$K_3, "keydown", this.$G_3);
    this.$6_3 = this.get_element().getElementsByTagName("div")[0];
    $addHandler(this.$6_3, "mousedown", this.$H_3);
    $addHandler(this.$6_3, "touchstart", this.$L_3);
    this.$1_3 = document.createElement("div");
    this.$1_3.className = "ms-crm-overlay";
    XUI.Html.SetOpacity(this.$1_3, 0);
    document.body.appendChild(this.$1_3);
    $addHandler(this.$1_3, "mouseup", this.$J_3);
    $addHandler(this.$1_3, "mousemove", this.$I_3);
    this.$0_3 = document.createElement("DIV");
    this.$0_3.className = "ms-crm-Splitter ms-crm-SplitterMotion layout-splitter";
    this.$0_3.innerHTML = Mscrm.HierarchySplitterControl.get_$f();
    document.body.appendChild(this.$0_3)
};
Mscrm.HierarchySplitterControl.get_$W = function() {
    var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
        .create(window.CDNURL + "/_imgs/hierarchysplittergripper.gif"));
    return String
        .format('<div class="ms-crm-hierarchySplitter" ><div class="HierarchySplitter"><img valign="middle" class="ms-crm-HierarchySplitter {0}" src="{1}" alt="{2}" title="{2}" tabindex="0"/></div></div>', $v_0.cssClass, $v_0.source, window.SPLITTER_ALT_TEXT_AND_TITLE)
};
Mscrm.HierarchySplitterControl.get_$f = function() {
    return "<div style='height:100%; cursor: col-resize'><div class='HierarchySplitter'></div></div>"
};
Mscrm.HierarchySplitterControl.prototype = {
    $D_3: 0,
    $C_3: 0,
    $7_3: null,
    $E_3: 0,
    $1_3: null,
    $0_3: null,
    $6_3: null,
    $K_3: null,
    $H_3: null,
    $J_3: null,
    $I_3: null,
    $G_3: null,
    $L_3: null,
    $F_3: null,
    setLeftValue: function(minValue, maxValue) {
        this.$D_3 = minValue;
        this.$C_3 = maxValue
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$F_3 = $find("hierarchyContainer");
        this.$7_3 = new Array(3);
        this.$7_3[0] = .1;
        this.$7_3[1] = .5;
        this.$7_3[2] = .9;
        this.$E_3 = 1
    },
    $g_3: function($p0) { this.$O_3() },
    $c_3: function($p0) {
        $p0.keyCode === 13 && this.$O_3();
        $p0.stopPropagation()
    },
    $O_3: function() {
        this.$0_3.style.left = (this.$C_3 * this.$7_3[this.$E_3]).toString() + "px";
        this.$E_3 = (this.$E_3 + 1) % 3;
        this.$R_3(null)
    },
    $R_3: function($p0) {
        this.set_left(parseInt(this.$0_3.style.left));
        this.$1_3.style.display = "none";
        this.$0_3.style.display = "none";
        this.$F_3.handleEvent(20, null, null)
    },
    $e_3: function($p0) {
        var $v_0 = $p0.clientX;
        if ($p0.clientX < this.$D_3 || $p0.clientX > this.$C_3) $v_0 = $p0.clientX < this.$D_3 ? this.$D_3 : this.$C_3;
        this.$0_3.style.left = $v_0.toString() + "px";
        $p0.preventDefault()
    },
    $d_3: function($p0) {
        this.$1_3.style.display = "inline";
        this.get_element().style.top = this.$0_3.style.top;
        this.$0_3.style.left = this.get_element().offsetLeft.toString() + "px";
        this.$0_3.style.height = this.get_element().parentNode.clientHeight.toString() + "px";
        this.$0_3.style.width = "1px";
        this.$0_3.style.display = "inline";
        this.$0_3.focus();
        $p0.preventDefault()
    },
    handleWindowResizeOverflow: function(offset) {
        this.$0_3.style.left = offset.toString() + "px";
        this.set_left(parseInt(this.$0_3.style.left));
        this.$F_3.handleEvent(20, null, null)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.$1_3, "mouseup", this.$J_3);
        $removeHandler(this.$1_3, "mousemove", this.$I_3);
        $removeHandler(this.$6_3, "mousedown", this.$H_3);
        $removeHandler(this.$6_3, "touchstart", this.$L_3);
        $removeHandler(this.$K_3, "keydown", this.$G_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.HierarchyContainer.registerClass("Mscrm.HierarchyContainer", Mscrm.CrmUIControl);
Mscrm.HierarchySplitterControl.registerClass("Mscrm.HierarchySplitterControl", Mscrm.CrmUIControl)