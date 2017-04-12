Type.registerNamespace("Mscrm.Performance");
Mscrm.Performance.PerfMarkerArea = function($p0, $p1, $p2, $p3, $p4, $p5) {
    this.x = $p0;
    this.y = $p1;
    this.width = $p2;
    this.height = $p3;
    this.message = $p4;
    this.fillStyle = $p5
};
Mscrm.Performance.PerfMarkerArea.prototype = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    message: null,
    fillStyle: null,
    marker: null,
    isSelected: false,
    overlapsWith: function($p0) {
        var $v_0 = this.x >= $p0.x + $p0.width - 1 ||
            $p0.x >= this.x + this.width - 1 ||
            this.y > $p0.y + $p0.height ||
            $p0.y > this.y + this.height;
        return !$v_0
    },
    hitTest: function($p0, $p1) {
        var $v_0 = new Mscrm.Performance.PerfMarkerArea($p0 - 1, $p1 - 1, 3, 3, "", null);
        return this.overlapsWith($v_0)
    },
    render: function($p0) {
        if (this.marker && this.marker.type === 1) {
            $p0.save();
            $p0.fillStyle = "gray";
            $p0.beginPath();
            $p0.moveTo(this.x, 3);
            $p0.lineTo(this.x, 3e3);
            $p0.stroke();
            $p0.fillStyle = this.fillStyle;
            $p0.beginPath();
            $p0.moveTo(this.x, this.y);
            $p0.lineTo(this.x + this.width, this.y + this.height / 2);
            $p0.lineTo(this.x, this.y + this.height);
            $p0.lineTo(this.x, this.y);
            $p0.fill();
            this.isSelected && $p0.stroke();
            $p0.restore();
            return
        }
        $p0.fillStyle = this.fillStyle;
        $p0.fillRect(this.x, this.y, this.width, this.height);
        if (this.isSelected) {
            $p0.save();
            if (this.marker && this.marker.type === 1) $p0.globalAlpha = 1;
            $p0.fillStyle = "black";
            $p0.lineWidth = 2;
            $p0.strokeRect(this.x + 1, this.y + 1, this.width - 2, this.height - 2);
            $p0.restore()
        }
        var $v_0 = this.width / Mscrm.Performance.PerfMarkerArea.$N,
            $v_1 = $v_0 < this.message.length
                ? this.message.substr(0, Math.max($v_0 - 3, 0)) + ($v_0 >= 3 ? "..." : "")
                : this.message;
        $p0.font = Mscrm.Performance.PerfMarkerArea.$L;
        $p0.fillStyle = Mscrm.Performance.PerfMarkerArea.$M;
        $p0.fillText($v_1, this.x + 4, this.y + this.height / 2 + 3)
    }
};
Mscrm.Performance.PerformanceCenter = function() {
    this.$$d_$O_0 = Function.createDelegate(this, this.$O_0);
    this.$$d_$d_0 = Function.createDelegate(this, this.$d_0);
    this.$$d_$s_0 = Function.createDelegate(this, this.$s_0);
    this.$$d_$c_0 = Function.createDelegate(this, this.$c_0);
    this.$$d_$o_0 = Function.createDelegate(this, this.$o_0);
    this.$$d_$k_0 = Function.createDelegate(this, this.$k_0);
    this.$$d_$b_0 = Function.createDelegate(this, this.$b_0);
    this.$$d_$Z_0 = Function.createDelegate(this, this.$Z_0);
    this.$$d_$q_0 = Function.createDelegate(this, this.$q_0);
    this.$$d_$r_0 = Function.createDelegate(this, this.$r_0);
    this.$$d_$l_0 = Function.createDelegate(this, this.$l_0);
    this.$$d_$j_0 = Function.createDelegate(this, this.$j_0);
    this.$0_0 = []
};
Mscrm.Performance.PerformanceCenter.$$cctor = function() {
    Mscrm.Performance.PerformanceCenter.registerEventHandlersForWindow()
};
Mscrm.Performance.PerformanceCenter.get_instance = function() {
    if (!Mscrm.Performance.PerformanceCenter.$2) {
        if (window.top !== window.self)
            if (window.top.Mscrm && window.top.Mscrm.Performance) {
                var $v_0 = window.top.Mscrm.Performance.PerformanceCenter;
                Mscrm.Performance.PerformanceCenter.$2 = $v_0.get_instance()
            }
        if (!Mscrm.Performance.PerformanceCenter.$2)
            Mscrm.Performance.PerformanceCenter.$2 = new Mscrm.Performance.PerformanceCenter
    }
    return Mscrm.Performance.PerformanceCenter.$2
};
Mscrm.Performance.PerformanceCenter.registerEventHandlersForWindow = function() {
    $addHandler(window.self, "unload", Mscrm.Performance.PerformanceCenter.$S);
    $addHandler(window.self.document, "keyup", Mscrm.Performance.PerformanceCenter.$R)
};
Mscrm.Performance.PerformanceCenter.$S = function($p0) {
    window.top === window.self && Mscrm.Performance.PerformanceCenter.get_instance().$m_0();
    $removeHandler(window.self, "unload", Mscrm.Performance.PerformanceCenter.$S);
    $removeHandler(window.self.document, "keyup", Mscrm.Performance.PerformanceCenter.$R);
    Mscrm.Performance.PerformanceCenter.$2 = null
};
Mscrm.Performance.PerformanceCenter.$R = function($p0) {
    var $v_0 = $p0.keyCode;
    switch ($v_0) {
    case 69:
    case 81:
        ($p0.ctrlKey || $p0.altKey) &&
            $p0.shiftKey &&
            Mscrm.Performance.PerformanceCenter.get_instance().TogglePerformanceResultsVisibility();
        break
    }
};
Mscrm.Performance.PerformanceCenter.$I = function($p0) {
    var $v_0 = window.document.getElementById($p0);
    if ($v_0) $v_0.value = ""
};
Mscrm.Performance.PerformanceCenter.prototype = {
    $m_0: function() {
        var $$t_1 = this;
        this.$6_0(this.get_$G_0(), function($p1_0) { $removeHandler($p1_0, "click", $$t_1.$$d_$j_0) })
    },
    createPerformanceDiv: function() {
        if (this.$1_0) return;
        this.$1_0 = this.$K_0("perfDiv", "PerfDiv", "<div class='PerfDivHeader'>Performance Center</div>");
        var $v_0 = window.innerWidth;
        if (IsNull($v_0)) $v_0 = document.documentElement.clientWidth;
        var $v_1 = window.innerHeight;
        if (IsNull($v_1)) $v_1 = document.documentElement.clientHeight;
        var $v_2 = $v_0 * .95, $v_3 = $v_1 * .6;
        this.$1_0.style.display = "none";
        this.$1_0.style.width = $v_2 + "px";
        this.$1_0.style.marginLeft = -($v_2 / 2) + "px";
        var $v_4 = this.$K_0("perfTabs_container",
            null,
            "<ul id='perfTabs'><li class='active'><span tabIdx='1' data-initialized='1'>Performance Markers</span></li><li><span tabIdx='2' data-initialized='0'>Global Objects Count</span></li></ul>");
        this.$1_0.appendChild($v_4);
        this.$3_0 = this.$K_0("perfTabs_content_container");
        this.$1_0.appendChild(this.$3_0);
        var $v_5 = this.$K_0("perfTab1", "perfTabContent");
        $v_5.style.display = "block";
        this.$3_0.appendChild($v_5);
        var $v_6 = this.$K_0("perfTab2", "perfTabContent");
        this.$3_0.appendChild($v_6);
        document.body.appendChild(this.$1_0);
        var $$t_8 = this;
        this.$6_0(this.get_$G_0(), function($p1_0) { $addHandler($p1_0, "click", $$t_8.$$d_$j_0) });
        this.$i_0($v_5, $v_2, $v_3);
        this.$h_0($v_6, $v_2, $v_3)
    },
    TogglePerformanceResultsVisibility: function() {
        this.createPerformanceDiv();
        if (this.$1_0.style.display === "none") {
            this.$1_0.style.display = "";
            this.$T_0()
        } else this.$1_0.style.display = "none"
    },
    $J_0: function() { this.TogglePerformanceResultsVisibility() },
    $1_0: null,
    $3_0: null,
    $K_0: function($p0, $p1, $p2) {
        var $v_0 = window.document.createElement("div");
        $v_0.setAttribute("id", $p0);
        if ($p1) $v_0.className = $p1;
        if ($p2) $v_0.innerHTML = $p2;
        return $v_0
    },
    get_$G_0: function() {
        var $v_0 = $get("perfTabs_container");
        return IsNull($v_0) ? null : $v_0.getElementsByTagName("li")
    },
    $j_0: function($p0) {
        var $$t_6 = this;
        this.$6_0(this.get_$G_0(), function($p1_0) { $p1_0.className = "" });
        $p0.target.className = "active";
        var $$t_7 = this;
        this.$6_0(this.$3_0.childNodes, function($p1_0) { $p1_0.style.display = "none" });
        var $v_0 = $p0.target.getAttribute("tabIdx"), $v_1 = $get("perfTab" + $v_0);
        $v_1.style.display = "block";
        var $v_2 = $v_1.getAttribute("data-initialized");
        if ($v_2 === "0" && $v_0 === "2") {
            this.$F_0();
            $v_1.setAttribute("data-initialized", "1")
        }
        $p0.stopPropagation();
        $p0.preventDefault()
    },
    $6_0: function($p0, $p1) {
        if (IsNull($p0)) return;
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) $p1($p0[$v_0])
    },
    getRequestExecutionTime: function(requestId) {
        var $v_0 = new XMLHttpRequest, $v_1 = Mscrm.CrmUri.create("/Tools/Diagnostics/diag.aspx/GetMetrics");
        $v_1.set_useOrganizationName(true);
        (this.$8_0(window.self, "IS_LIVE") || this.$8_0(window.self, "IS_SPLA")) && $v_1.set_useOrganizationName(false);
        try {
            $v_0.open("POST", $v_1.toString(), false);
            $v_0.setRequestHeader("content-type", "application/json; charset=utf-8");
            $v_0.setRequestHeader("cache-control", "no-cache");
            $v_0.send("{'requestId':'" + requestId + "'}");
            if ($v_0.readyState === 4 && $v_0.status === 200) return eval("(" + $v_0.responseText + ").d")
        } catch ($$e_3) {
        }
        return null
    },
    $g_0: function($p0, $p1) { return this.$8_0($p0, $p1) },
    $8_0: function($p0, $p1) { return $p0[$p1] },
    get_$a_0: function() {
        var $v_0 = $get("crmContentPanel");
        if ($v_0) {
            var $v_1 = $v_0.attributes.getNamedItem("currentContentId"), $v_2 = null;
            if (!IsNull($v_1) && $v_1.specified) $v_2 = $get($v_1.value);
            if (!IsNull($v_2)) return $v_2.contentWindow
        }
        return window.self
    },
    $h_0: function($p0, $p1, $p2) {
        var $v_0 = $p2 * .6, $v_1 = window.document.createElement("textarea");
        $v_1.setAttribute("id", "globalObjectCountsTextArea");
        $v_1.className = "perfTextArea";
        $v_1.setAttribute("readonly", "1");
        $v_1.style.height = $v_0 + "px";
        $v_1.style.width = $p1 - 10 + "px";
        $p0.appendChild($v_1);
        var $v_2 = window.document.createElement("button");
        $v_2.setAttribute("type", "button");
        $v_2.className = "PerfButtonRight";
        var $$t_9 = this;
        $addHandler($v_2, "click", function($p1_0) { $$t_9.$J_0() });
        XUI.Html.SetText($v_2, "Close");
        $p0.appendChild($v_2);
        var $v_3 = window.document.createElement("button");
        $v_3.setAttribute("type", "button");
        $v_3.className = "PerfButtonRight";
        $addHandler($v_3, "click", this.$$d_$l_0);
        XUI.Html.SetText($v_3, "Refresh");
        $p0.appendChild($v_3);
        var $v_4 = window.document.createElement("button");
        $v_4.setAttribute("id", "enableGlobalObjectTrackingButton");
        $v_4.setAttribute("type", "button");
        $v_4.className = "PerfButtonRight";
        $addHandler($v_4, "click", this.$$d_$r_0);
        XUI.Html.SetText($v_4,
            Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled() ? "Disable" : "Enable");
        $p0.appendChild($v_4);
        this.$F_0()
    },
    $r_0: function($p0) {
        Mscrm.Performance.GlobalObjectTrackingManager
            .set_trackingEnabled(!Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled());
        var $v_0 = $get("enableGlobalObjectTrackingButton");
        XUI.Html.SetText($v_0,
            Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled() ? "Disable" : "Enable")
    },
    $l_0: function($p0) {
        this.$Y_0();
        this.$F_0()
    },
    $Y_0: function() { Mscrm.Performance.PerformanceCenter.$I("globalObjectCountsTextArea") },
    $F_0: function() {
        for (var $v_0 = Mscrm.Performance.GlobalObjectTrackingManager.collectGlobalObjectCounts(), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) {
            var $v_2 = $v_0[$v_1];
            this.$A_0($v_2.Description);
            var $v_3 = [], $$dict_5 = $v_2.ObjectCounts;
            for (var $$key_6 in $$dict_5) {
                var $v_4 = { key: $$key_6, value: $$dict_5[$$key_6] };
                Array.add($v_3, $v_4.key)
            }
            $v_3.sort();
            for (var $v_5 = 0; $v_5 < $v_3.length; $v_5++)
                this.$A_0(String.format("\t{0}: {1}", $v_3[$v_5], $v_2.ObjectCounts[$v_3[$v_5]]));
            this.$A_0("")
        }
    },
    $A_0: function($p0) {
        var $v_0 = $get("globalObjectCountsTextArea");
        if ($v_0) $v_0.value += $p0 + "\r\n"
    },
    $i_0: function($p0, $p1, $p2) {
        var $v_0 = $p2 * .6, $v_1 = $p2 * .2;
        if (this.get_$9_0()) {
            var $v_B = $p1 - 20, $v_C = this.$K_0("perfTimelineWrapper");
            $v_C.style.width = $p1 + "px";
            $v_C.style.height = $v_0 + "px";
            $p0.appendChild($v_C);
            var $v_D = window.document.createElement("canvas");
            $v_D.setAttribute("id", "perfTimelineCanvas");
            $v_D.setAttribute("height", $v_0.toString());
            $v_D.setAttribute("width", $v_B.toString());
            $addHandler($v_D, "click", this.$$d_$q_0);
            $v_C.appendChild($v_D)
        } else $v_1 += $v_0;
        var $v_2 = window.document.createElement("textarea");
        $v_2.setAttribute("id", "perfTextArea");
        $v_2.className = "perfTextArea";
        $v_2.setAttribute("readonly", "1");
        $v_2.style.height = $v_1 + "px";
        $v_2.style.width = $p1 - 10 + "px";
        $p0.appendChild($v_2);
        var $v_3 = window.document.createElement("button");
        $v_3.setAttribute("type", "button");
        $v_3.className = "PerfButtonRight";
        var $$t_J = this;
        $addHandler($v_3, "click", function($p1_0) { $$t_J.$J_0() });
        XUI.Html.SetText($v_3, "Close");
        $p0.appendChild($v_3);
        var $v_4 = window.document.createElement("button");
        $v_4.setAttribute("type", "button");
        $v_4.className = "PerfButtonRight";
        $addHandler($v_4, "click", this.$$d_$Z_0);
        XUI.Html.SetText($v_4, "Clear");
        $p0.appendChild($v_4);
        var $v_5 = window.document.createElement("button");
        $v_5.setAttribute("type", "button");
        $v_5.className = "PerfButtonRight";
        $addHandler($v_5, "click", this.$$d_$b_0);
        XUI.Html.SetText($v_5, "Copy All");
        $p0.appendChild($v_5);
        var $v_6 = window.document.createElement("button");
        $v_6.setAttribute("type", "button");
        $v_6.className = "PerfButtonRight";
        $addHandler($v_6, "click", this.$$d_$k_0);
        XUI.Html.SetText($v_6, "Refresh");
        $p0.appendChild($v_6);
        if (this.get_$9_0()) {
            var $v_E = window.document.createElement("button");
            $v_E.setAttribute("type", "button");
            $v_E.className = "PerfButtonRight";
            $addHandler($v_E, "click", this.$$d_$o_0);
            XUI.Html.SetText($v_E, "Select Major");
            $p0.appendChild($v_E)
        }
        var $v_7 = window.document.createElement("button");
        $v_7.setAttribute("type", "button");
        $v_7.className = "PerfButtonRight";
        $addHandler($v_7, "click", this.$$d_$c_0);
        XUI.Html.SetText($v_7, "Create CSV");
        $p0.appendChild($v_7);
        var $v_8 = window.document.createElement("button");
        $v_8.setAttribute("type", "button");
        $v_8.setAttribute("id", "enableMarkerCollectionButton");
        $v_8.className = "PerfButtonRight";
        $addHandler($v_8, "click", this.$$d_$s_0);
        XUI.Html.SetText($v_8,
            Mscrm.Performance.PerformanceMarkerManager.get_instance().get_isEnabled() ? "Disable" : "Enable");
        $p0.appendChild($v_8);
        var $v_9 = window.document.createElement("input");
        $v_9.setAttribute("id", "findMarkersSearchCriteria");
        $v_9.style.width = 150 + "px";
        $addHandler($v_9, "keyup", this.$$d_$d_0);
        $p0.appendChild($v_9);
        var $v_A = window.document.createElement("button");
        $v_A.setAttribute("type", "button");
        $v_A.setAttribute("id", "findMarkersButton");
        $v_A.className = "PerfButton";
        $addHandler($v_A, "click", this.$$d_$O_0);
        XUI.Html.SetText($v_A, "Find");
        $p0.appendChild($v_A)
    },
    $5_0: 20,
    $B_0: 4,
    get_$9_0: function() { return !Mscrm.Utilities.isIE8OrLower() },
    $T_0: function() {
        this.clearLogBox();
        var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance();
        this.$V_0();
        var $v_1 = $v_0.get_allMarkers();
        if (!$v_1) return;
        var $v_2 = Number.MAX_VALUE, $v_3 = Number.MIN_VALUE, $v_4 = [], $$dict_7 = $v_1;
        for (var $$key_8 in $$dict_7) {
            var $v_6 = { key: $$key_8, value: $$dict_7[$$key_8] }, $v_7 = $v_6.value;
            if ($v_7.timestamp < $v_2) $v_2 = $v_7.timestamp;
            if ($v_7.timestamp > $v_3) $v_3 = $v_7.timestamp;
            if ("StartMarker" in $v_7.linkedMarkers) continue;
            Array.add($v_4, $v_6.value)
        }
        this.$p_0($v_4);
        var $v_5 = {};
        if (!this.get_$9_0()) {
            this.clearLogBox();
            for (var $v_8 = 0; $v_8 < $v_4.length; $v_8++) {
                var $v_9 = $v_4[$v_8];
                if ($v_9.id in $v_5) continue;
                if ("StopMarker" in $v_9.linkedMarkers) {
                    var $v_A = $v_0.getMarkerById($v_9.linkedMarkers["StopMarker"]);
                    if ($v_A) {
                        var $v_B = $v_A.timestamp - $v_9.timestamp;
                        this.addMessageToLogBox($v_A.toString() + " (" + $v_B + " ms)");
                        $v_5[$v_A.id] = true
                    } else this.addMessageToLogBox($v_A.toString() + " (? ms)")
                } else {
                    var $v_C = $v_9.name;
                    $v_C += String.format(" (-> {0} ms)", $v_9.timestamp - $v_2);
                    if (!isNullOrEmptyString($v_9.parameter)) $v_C += String.format(" - {0}", $v_9.parameter);
                    if ($v_9.type === 1) $v_C += " **********************";
                    this.addMessageToLogBox($v_C)
                }
            }
        } else {
            var $v_D = this.$P_0(),
                $v_E = $v_D.width,
                $v_F = 0,
                $v_G = 10,
                $v_H = 15,
                $v_I = ($v_E - 2 * $v_G) / ($v_3 - $v_2);
            this.$0_0 = [];
            for (var $v_J = 0; $v_J < $v_4.length; $v_J++) {
                var $v_K = $v_4[$v_J];
                if ($v_K.id in $v_5) continue;
                var $v_L = "#" + Math.floor(Math.abs(this.$f_0($v_K.name)) / 2147483647 * 16777215).toString(16),
                    $v_M = $v_G + ($v_K.timestamp - $v_2) * $v_I,
                    $v_N = this.$5_0,
                    $v_O = null;
                if ("StopMarker" in $v_K.linkedMarkers) {
                    var $v_P = $v_0.getMarkerById($v_K.linkedMarkers["StopMarker"]);
                    if ($v_P) {
                        var $v_Q = $v_P.timestamp - $v_K.timestamp, $v_R = Math.max(1, $v_Q * $v_I), $v_S = "";
                        $v_S = " (" + $v_Q + " ms)";
                        $v_O = new Mscrm.Performance
                            .PerfMarkerArea($v_M, $v_N, $v_R, $v_H, $v_P.toString() + $v_S, $v_L);
                        $v_5[$v_P.id] = true
                    } else
                        $v_O = new Mscrm.Performance
                            .PerfMarkerArea($v_M, $v_N, 50, $v_H, $v_K.toString() + " (? ms)", $v_L)
                } else {
                    var $v_T = $v_K.name;
                    $v_T += String.format(" (-> {0} ms)", $v_K.timestamp - $v_2);
                    if (!isNullOrEmptyString($v_K.parameter)) $v_T += String.format(" - {0}", $v_K.parameter);
                    $v_O = new Mscrm.Performance.PerfMarkerArea($v_M, $v_N, 1, $v_H, $v_T, $v_L)
                }
                if ($v_O) {
                    $v_O.marker = $v_K;
                    if ($v_K.type !== 1)
                        for (var $v_U = 0; $v_U < this.$0_0.length;)
                            if ($v_O.overlapsWith(this.$0_0[$v_U])) {
                                $v_O.y += $v_H + 1;
                                $v_U = 0
                            } else $v_U++;
                    else {
                        $v_O.y = this.$B_0;
                        $v_O.height = this.$5_0 - 8;
                        $v_O.width = 10
                    }
                    $v_F = Math.max($v_F, $v_O.y + $v_O.height + 5);
                    Array.add(this.$0_0, $v_O)
                }
            }
            $v_D.height = $v_F;
            $v_D.setAttribute("data-padding", $v_G);
            $v_D.setAttribute("data-headerHeight", this.$5_0);
            $v_D.setAttribute("data-totalTime", $v_3 - $v_2);
            this.$4_0()
        }
    },
    $E_0: function() {
        var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance(), $$t_8 = this;
        return function($p1_0, $p1_1) {
            var $v_1 = $p1_0, $v_2 = $p1_1, $v_3 = $v_1.timestamp - $v_2.timestamp;
            if (!$v_3)
                if ("StopMarker" in $v_1.linkedMarkers && "StopMarker" in $v_2.linkedMarkers) {
                    var $v_4 = $v_0.getMarkerById($v_1.linkedMarkers["StopMarker"]),
                        $v_5 = $v_0.getMarkerById($v_2.linkedMarkers["StopMarker"]);
                    $v_3 = $v_5.timestamp - $v_4.timestamp
                }
            return $v_3 > 0 ? 1 : $v_3 < 0 ? -1 : 0
        }
    },
    $p_0: function($p0) {
        for (var $v_0 = this.$E_0(), $v_1 = 0; $v_1 < $p0.length; $v_1++)
            for (var $v_2 = $p0[$v_1], $v_3 = $v_1 + 1; $v_3 < $p0.length; $v_3++) {
                var $v_4 = $p0[$v_3];
                if ($v_0($v_2, $v_4) > 0) {
                    $p0[$v_1] = $v_4;
                    $p0[$v_3] = $v_2;
                    $v_2 = $v_4
                }
            }
    },
    $W_0: function($p0) {
        for (var $v_0 = this.$E_0(), $v_1 = 1; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1], $v_3 = $v_1;
            while ($v_3 > 0) {
                var $v_4 = $p0[$v_3 - 1];
                if ($v_0($v_2, $v_4) >= 0) break;
                else {
                    $p0[$v_3] = $v_4;
                    $v_3--
                }
            }
            $p0[$v_3] = $v_2
        }
    },
    $4_0: function() {
        var $v_0 = this.$P_0();
        if (!$v_0) return;
        var $v_1 = $v_0.getContext("2d");
        $v_1.clearRect(0, 0, $v_0.width, $v_0.height);
        $v_1.globalAlpha = .7;
        this.$n_0($v_0, $v_0.getAttribute("data-totalTime"));
        for (var $v_2 = 0; $v_2 < this.$0_0.length; $v_2++) {
            var $v_3 = this.$0_0[$v_2];
            $v_3.render($v_1)
        }
    },
    $P_0: function() { return $get("perfTimelineCanvas") },
    $n_0: function($p0, $p1) {
        if (!$p0) return;
        var $v_0 = parseInt($p0.getAttribute("data-padding")),
            $v_1 = parseInt($p0.getAttribute("data-headerHeight")),
            $v_2 = $p0.getContext("2d");
        $v_2.beginPath();
        $v_2.moveTo($v_0, $v_1 - 2);
        $v_2.lineTo($p0.width - $v_0, $v_1 - 2);
        $v_2.stroke();
        $v_2.font = "10px Verdana";
        $v_2.fillStyle = "black";
        for (var $v_3 = 10,
            $v_4 = $p0.width - 2 * $v_0,
            $v_5 = Math.floor($v_4 / $v_3),
            $v_6 = Math.floor($p1 / $v_3),
            $v_7 = $v_1 / 2 + this.$B_0,
            $v_8 = 0;
            $v_8 < $v_3;
            $v_8++) {
            var $v_9 = $v_0 + $v_8 * $v_5;
            $v_2.fillText(($v_8 * $v_6).toString() + " ms", $v_9, $v_7);
            $v_2.beginPath();
            $v_2.moveTo($v_9, $v_1 - 2);
            $v_2.lineTo($v_9, $v_1 - 4);
            $v_2.stroke()
        }
    },
    $f_0: function($p0) {
        var $v_0 = 0;
        if (isNullOrEmptyString($p0) || !$p0.length) return $v_0;
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0.charCodeAt($v_1);
            $v_0 = ($v_0 << 5) - $v_0 + $v_2;
            $v_0 = $v_0 & $v_0
        }
        return $v_0
    },
    retrievePerfMarkersTreeViewRootNode: function() {
        var $v_0 = this.$Q_0("CRM Form Load", Number.MIN_VALUE, Number.MAX_VALUE),
            $v_1 = this.$Q_0("Async Process", Number.MIN_VALUE, Number.MAX_VALUE),
            $v_2 = [],
            $v_3 = [];
        $v_2.push($v_0);
        $v_3.push($v_1);
        var $v_4 = Mscrm.Performance.PerformanceMarkerManager.get_instance();
        this.$V_0();
        var $v_5 = $v_4.get_allMarkers();
        if (IsNull($v_5)) return null;
        var $v_6 = [], $v_7 = [], $$dict_C = $v_5;
        for (var $$key_D in $$dict_C) {
            var $v_8 = { key: $$key_D, value: $$dict_C[$$key_D] }, $v_9 = $v_8.value;
            if ("StartMarker" in $v_9.linkedMarkers) continue;
            if (!("StopMarker" in $v_9.linkedMarkers)) continue;
            else {
                var $v_A = $v_4.getMarkerById($v_9.linkedMarkers["StopMarker"]);
                if (!isNullOrEmptyString($v_A.parameter)) {
                    var $v_B = Sys.Serialization.JavaScriptSerializer.deserialize($v_A.parameter);
                    if ("SpanAcrossMajorMarkers" in $v_B && $v_B["SpanAcrossMajorMarkers"]) continue;
                    if ("IsAsync" in $v_B && $v_B["IsAsync"]) {
                        Array.add($v_7, $v_8.value);
                        continue
                    }
                }
            }
            Array.add($v_6, $v_8.value)
        }
        this.$W_0($v_6);
        this.$W_0($v_7);
        for (var $v_C = 0; $v_C < $v_6.length; $v_C++) this.$H_0($v_2, $v_6[$v_C], false);
        for (var $v_D = 0; $v_D < $v_7.length; $v_D++) this.$H_0($v_3, $v_7[$v_D], true);
        if (!IsNull($v_1.childNodeIdList))
            for (var $v_E = $v_1
                         .childNodeIdList,
                $v_F = 0;
                $v_F < $v_E.length;
                $v_F++) Array.add($v_0.childNodeIdList, $v_E[$v_F]);
        return $v_0
    },
    $H_0: function($p0, $p1, $p2) {
        if (IsNull($p1) || $p1.get_startTimestamp() === -1 || $p1.get_stopTimestamp() === -1) return;
        var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance(), $v_1 = this.$E_0();
        if ($p2) {
            for (var $v_2 = $p0.length - 1, $v_4 = 0; $v_4 < $v_2; $v_4++) $p0.pop();
            var $v_3 = $p0[$p0.length - 1];
            Array.add($v_3.childNodeIdList, $p1.id);
            $p0.push($p1);
            return
        }
        while ($p0.length > 0) {
            var $v_5 = $p0[$p0.length - 1];
            if ($p1.isDescendantOf($v_5)) {
                var $v_6 = null, $v_7 = [];
                if (IsNull($v_5.childNodeIdList)) $v_5.childNodeIdList = [];
                for (var $v_8 = 0, $v_8 = 0; $v_8 < $v_5.childNodeIdList.length; $v_8++) {
                    var $v_9 = $v_0.getMarkerById($v_5.childNodeIdList[$v_8]);
                    if ($v_9.isDescendantOf($p1)) {
                        Array.add($v_7, $v_9.id);
                        continue
                    }
                    if ($v_7.length) break;
                    if ($p1.isDescendantOf($v_9)) {
                        $v_6 = $v_9;
                        break
                    }
                    if ($v_1($p1, $v_9) < 0) break
                }
                if ($v_7.length) {
                    if (IsNull($p1.childNodeIdList)) $p1.childNodeIdList = [];
                    for (var $v_A = 0; $v_A < $v_7.length; $v_A++) {
                        var $v_B = $v_7[$v_A];
                        Array.remove($v_5.childNodeIdList, $v_B);
                        Array.add($p1.childNodeIdList, $v_B)
                    }
                    Array.add($v_5.childNodeIdList, $p1.id);
                    $p0.push($p1);
                    break
                }
                if (!IsNull($v_6)) {
                    $p0.push($v_6);
                    continue
                }
                Array.add($v_5.childNodeIdList, $p1.id);
                $p0.push($p1);
                for (var $v_C = $v_5.childNodeIdList
                        .length -
                        1;
                    $v_C > $v_8;
                    $v_C--) $v_5.childNodeIdList[$v_C] = $v_5.childNodeIdList[$v_C - 1];
                $v_5.childNodeIdList[$v_8] = $p1.id;
                break
            } else {
                $p0.pop();
                continue
            }
        }
    },
    $Q_0: function($p0, $p1, $p2) {
        var $v_0 = new Mscrm.Performance.PerformanceMarker;
        $v_0.name = $p0;
        $v_0.childNodeIdList = [];
        var $v_1 = new Mscrm.Performance.PerformanceMarker;
        $v_1.name = $p0;
        $v_0.timestamp = $p1;
        $v_1.timestamp = $p2;
        $v_0.linkedMarkers["StopMarker"] = $v_1.id;
        $v_1.linkedMarkers["StartMarker"] = $v_0.id;
        return $v_0
    },
    $U_0: function($p0, $p1) {
        var $v_0 = "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
        $v_0 = $v_0.substr(1, $p1);
        var $v_1 = !$p1
            ? $p0.name
            : $v_0 + $p0.name + " " + String.format("{0} ms", $p0.get_stopTimestamp() - $p0.get_startTimestamp());
        console.log($v_1);
        var $v_2 = Mscrm.Performance.PerformanceMarkerManager.get_instance();
        if (IsNull($p0.childNodeIdList)) return;
        for (var $v_3 = 0;
            $v_3 < $p0.childNodeIdList.length;
            $v_3++
        ) this.$U_0($v_2.getMarkerById($p0.childNodeIdList[$v_3]), $p1 + 1)
    },
    printPerfMarkerInTreeView: function() {
        var $v_0 = this.retrievePerfMarkersTreeViewRootNode();
        $v_0.name = "CRM Form Load";
        this.$U_0($v_0, 0)
    },
    $D_0: null,
    $V_0: function() {
        var $v_0 = this.get_$a_0(), $v_1 = this.$8_0($v_0, "REQ_ID");
        if (this.$D_0 === $v_1) return;
        this.$D_0 = $v_1;
        var $v_2 = Mscrm.Performance.PerformanceMarkerManager.get_instance(),
            $v_3 = this.$g_0(window.self, "InnerIFrameSrcChangeTimestamp");
        if (!IsNull($v_1)) {
            var $v_4 = this.getRequestExecutionTime($v_1);
            if ($v_4) {
                var $v_5 = $v_3, $$dict_7 = $v_4;
                for (var $$key_8 in $$dict_7) {
                    var $v_6 = { key: $$key_8, value: $$dict_7[$$key_8] };
                    $v_2.addRetroactiveStopwatch("Server: " + $v_6.key, $v_5, $v_5 + parseInt($v_6.value))
                }
            }
        }
    },
    $q_0: function($p0) {
        var $v_0 = $p0.target,
            $v_1 = $v_0.getBoundingClientRect(),
            $v_2 = $p0.clientX,
            $v_3 = $p0.clientY,
            $v_4 = $v_2 - $v_1.left,
            $v_5 = $v_3 - $v_1.top;
        this.clearLogBox();
        for (var $v_6 = 0; $v_6 < this.$0_0.length; $v_6++) {
            var $v_7 = this.$0_0[$v_6];
            $v_7.isSelected = false;
            if ($v_7.hitTest($v_4, $v_5)) {
                this.addMessageToLogBox($v_7.message);
                $v_7.isSelected = true
            }
        }
        this.$4_0()
    },
    $Z_0: function($p0) {
        this.clearLogBox();
        var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance();
        $v_0.clearAllMarkers();
        this.$0_0 = [];
        this.$4_0()
    },
    $b_0: function($p0) {
        if (this.get_$9_0()) {
            this.clearLogBox();
            for (var $v_1 = 0; $v_1 < this.$0_0.length; $v_1++) {
                var $v_2 = this.$0_0[$v_1];
                this.addMessageToLogBox($v_2.message)
            }
        }
        var $v_0 = window.document.getElementById("perfTextArea");
        if (!IsNull($v_0)) {
            $v_0.select();
            if (window.self.clipboardData) {
                var $v_3 = new XUI.ClipboardManager;
                $v_3.SetData(XUI.Html.GetText($v_0))
            }
        }
    },
    $o_0: function($p0) {
        this.clearLogBox();
        for (var $v_0 = 0; $v_0 < this.$0_0.length; $v_0++) {
            var $v_1 = this.$0_0[$v_0];
            if ($v_1.marker.type === 1) {
                this.addMessageToLogBox($v_1.message);
                $v_1.isSelected = true
            } else $v_1.isSelected = false
        }
        this.$4_0()
    },
    clearLogBox: function() { Mscrm.Performance.PerformanceCenter.$I("perfTextArea") },
    addMessageToLogBox: function(message) {
        var $v_0 = window.document.getElementById("perfTextArea");
        if ($v_0) $v_0.value += message + "\r\n"
    },
    $s_0: function($p0) {
        Mscrm.Performance.PerformanceMarkerManager.get_instance()
            .set_isEnabled(!Mscrm.Performance.PerformanceMarkerManager.get_instance().get_isEnabled());
        var $v_0 = $get("enableMarkerCollectionButton");
        XUI.Html.SetText($v_0,
            Mscrm.Performance.PerformanceMarkerManager.get_instance().get_isEnabled() ? "Disable" : "Enable")
    },
    $k_0: function($p0) { this.$T_0() },
    $c_0: function($p0) {
        this.clearLogBox();
        this.addMessageToLogBox("Marker,Start,End,Duration");
        var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance().get_allMarkers(),
            $v_1 = Mscrm.Performance.PerformanceMarkerManager.get_instance(),
            $v_2 = {},
            $$dict_9 = $v_0;
        for (var $$key_A in $$dict_9) {
            var $v_3 = { key: $$key_A, value: $$dict_9[$$key_A] }, $v_4 = $v_3.value;
            if ($v_4.id in $v_2) continue;
            if ("StopMarker" in $v_4.linkedMarkers) {
                var $v_5 = $v_1.getMarkerById($v_4.linkedMarkers["StopMarker"]);
                if ($v_5) {
                    var $v_6 = $v_5.timestamp - $v_4.timestamp, $v_7 = new RegExp('"', "g");
                    this.addMessageToLogBox('"' +
                        $v_5.toString().replace($v_7, '""') +
                        '",' +
                        $v_4.timestamp +
                        "," +
                        $v_5.timestamp +
                        "," +
                        $v_6);
                    $v_2[$v_5.id] = true
                }
            }
        }
    },
    $O_0: function($p0) {
        this.clearLogBox();
        for (var $v_0 = $get("findMarkersSearchCriteria").value.toLowerCase(), $v_1 = 0;
            $v_1 < this.$0_0.length;
            $v_1++) {
            var $v_2 = this.$0_0[$v_1];
            if ($v_2.message.toLowerCase().indexOf($v_0) >= 0) {
                this.addMessageToLogBox($v_2.message);
                $v_2.isSelected = true
            } else $v_2.isSelected = false
        }
        this.$4_0()
    },
    $d_0: function($p0) {
        if ($p0.keyCode === 13) {
            this.$O_0(null);
            $p0.stopPropagation();
            $p0.preventDefault()
        }
    }
};
Mscrm.Performance.PerfMarkerArea.registerClass("Mscrm.Performance.PerfMarkerArea");
Mscrm.Performance.PerformanceCenter.registerClass("Mscrm.Performance.PerformanceCenter");
Mscrm.Performance.PerfMarkerArea.$L = "10px Verdana";
Mscrm.Performance.PerfMarkerArea.$M = "black";
Mscrm.Performance.PerfMarkerArea.$N = 6;
Mscrm.Performance.PerformanceCenter.$2 = null;
Mscrm.Performance.PerformanceCenter.$$cctor()