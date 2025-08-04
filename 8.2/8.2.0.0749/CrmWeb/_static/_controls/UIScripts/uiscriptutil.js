Type.registerNamespace("Mscrm");
Mscrm.GlobalVars = function() {};
Mscrm.GlobalVars.get_sessionId = function() { return Mscrm.GlobalVars.$5 };
Mscrm.GlobalVars.set_sessionId = function(value) {
    Mscrm.GlobalVars.$5 = value;
    return value
};
Mscrm.GlobalVars.get_comments = function() { return Mscrm.GlobalVars.$X };
Mscrm.GlobalVars.set_comments = function(value) {
    Mscrm.GlobalVars.$X = value;
    return value
};
Mscrm.GlobalVars.get_sessionInProgress = function() { return Mscrm.GlobalVars.$C };
Mscrm.GlobalVars.set_sessionInProgress = function(value) {
    Mscrm.GlobalVars.$C = value;
    return value
};
Mscrm.ScriptSessionStage = function(element) {
    this.$$d_$w_3 = Function.createDelegate(this, this.$w_3);
    this.$$d_$1E_3 = Function.createDelegate(this, this.$1E_3);
    this.$$d_$1B_3 = Function.createDelegate(this, this.$1B_3);
    this.$$d_$17_3 = Function.createDelegate(this, this.$17_3);
    this.$$d_onBeforeUnload = Function.createDelegate(this, this.onBeforeUnload);
    this.$$d_$19_3 = Function.createDelegate(this, this.$19_3);
    this.$f_3 = window.INITIAL_SCRIPT_ID;
    this.cache = new Mscrm.ScriptCacheManager;
    Mscrm.ScriptSessionStage.initializeBase(this, [element]);
    this.$B_3 = element
};
Mscrm.ScriptSessionStage.prototype = {
    $B_3: null,
    $7_3: null,
    $Z_3: null,
    $i_3: null,
    $k_3: false,
    $2_3: null,
    $J_3: null,
    $E_3: null,
    $d_3: false,
    $K_3: false,
    $j_3: "",
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        attachWindowOnUnload(this.$$d_$19_3, window.self);
        attachWindowOnBeforeUnload(this.$$d_onBeforeUnload, window.self);
        Mscrm.GlobalVars.$C = true
    },
    $19_3: function($p0) {
        if (Mscrm.GlobalVars.$C) {
            Mscrm.GlobalVars.$C = false;
            Mscrm.ScriptActions.cancelSession(Mscrm.GlobalVars.$5, Mscrm.GlobalVars.$X)
        }
        this.$g_3()
    },
    $g_3: function() {
        try {
            !IsNull(window.top.opener) && window.self !== window.top.opener && window.opener.auto(4710)
        } catch ($$e_0) {
        }
    },
    onBeforeUnload: function(oEvent) {
        if (Mscrm.GlobalVars.$C) {
            oEvent.rawEvent.returnValue = window.LOCID_SCRIPT_CANCEL_WARNING;
            Mscrm.GlobalVars.$X = this.getComments();
            return LOCID_SCRIPT_CANCEL_WARNING
        }
    },
    loadControl: function(type, control) {
        switch (type) {
        case "group":
            this.$7_3 = control;
            break;
        case "hint":
            this.$Z_3 = control;
            break;
        default:
            break
        }
    },
    toggleButtons: function(showFinish, isFirstGroup, isLastGroup) {
        var $v_0 = "inline",
            $v_1 = "none",
            $v_2 = $get("butCancel"),
            $v_3 = $get("butFinish"),
            $v_4 = $get("butPrev"),
            $v_5 = $get("butNext");
        if (showFinish) {
            $v_2.style.display = $v_0;
            $v_3.style.display = $v_0;
            $v_4.style.display = $v_0
        } else {
            $v_2.style.display = $v_0;
            $v_3.style.display = $v_1
        }
        if (isFirstGroup) $v_4.style.display = $v_1;
        else if (!isLastGroup) $v_4.style.display = $v_0;
        if (isLastGroup) $v_5.style.display = $v_1;
        else $v_5.style.display = $v_0
    },
    showWaiting: function(showWait) {
        var $v_0 = $get("scriptWaiting"), $v_1 = $get("runScriptForm"), $v_2 = $get("waitLayout");
        if (showWait) {
            if (null !== $v_0) {
                $v_0.style.zIndex = 1;
                $v_2.style.cursor = "wait"
            }
            if (null !== $v_1) $v_1.style.zIndex = -1
        } else {
            if (null !== $v_0) {
                $v_0.style.zIndex = -1;
                $v_2.style.cursor = "default"
            }
            if (null !== $v_1) $v_1.style.zIndex = 1
        }
    },
    ShowHint: function(hintId) {
        this.$E_3 && this.HideHint(this.$E_3);
        this.$E_3 = hintId;
        if ($get(hintId)) {
            $get(hintId).style.display = "block";
            $get(hintId + "col").className = "highlight-Table-Col";
            $get(hintId + "_pre").style.height = ($get("wizardFormMain").clientHeight - 58).toString() + "px"
        }
    },
    ResizeHint: function() {
        if (this.$E_3) {
            if ($get(this.$E_3))
                $get(this.$E_3 + "_pre").style.height = ($get("wizardFormMain").clientHeight - 58).toString() + "px";
            if ($get("paneStripDiv"))
                $get("paneStripDiv").style.height = ($get("wizardFormMain").clientHeight + 1).toString() + "px"
        }
    },
    HideHint: function(hintId) {
        if ($get(hintId)) {
            $get(hintId).style.display = "none";
            $get(hintId + "col").className = "PromptResponse"
        }
    },
    Next: function() {
        if (Mscrm.Utilities.resetValidationFailedElement()) return;
        this.showWaiting(true);
        this.$v_3();
        window.setTimeout(this.$$d_$17_3, 0)
    },
    ShowSideStrip: function(show) {
        if (show) {
            $get("expandHintColumn").style.display = "";
            $get("hintColumn").style.display = "none";
            $get("promptResponseColumn").style.width = "auto";
            $get("promptResponseColumn").style.display = "";
            if (window.LOCID_UI_DIR === "RTL") $get("wizardFormMain").style.paddingLeft = "0px";
            else $get("wizardFormMain").style.paddingRight = "0px"
        } else {
            $get("expandHintColumn").style.display = "none";
            $get("hintColumn").style.display = "";
            $get("promptResponseColumn").style.width = "auto";
            $get("promptResponseColumn").style.display = "";
            if (window.LOCID_UI_DIR === "RTL") $get("wizardFormMain").style.paddingLeft = "0px";
            else $get("wizardFormMain").style.paddingRight = "0px"
        }
        window.setTimeout(this.$$d_$1B_3, 0)
    },
    $1B_3: function() {
        var $v_0 = $get("wizardFormBodyInner").style.display;
        if (IsNull($v_0) || !$v_0.length) $get("wizardFormBodyInner").style.display = "block";
        else $get("wizardFormBodyInner").style.display = ""
    },
    $v_3: function() {
        if ($get("scriptHintControl")) $get("scriptHintControl").style.top = "14px";
        if ($get("boundary")) $get("boundary").style.top = "0px";
        if ($get("paneStripDiv")) $get("paneStripDiv").style.top = "-1px";
        if ($get("collapseHint")) $get("collapseHint").style.top = "3px";
        if ($get("wizardFormMain")) $get("wizardFormMain").scrollTop = 0;
        window.setTimeout(this.$$d_$1B_3, 0)
    },
    $17_3: function() {
        this.HandleNavigation(true);
        this.$d_3 = false;
        window.setTimeout(this.$$d_$1E_3, 0)
    },
    $1E_3: function() {
        this.$7_3.addNotifications() && this.$n_3(true);
        this.showWaiting(false);
        this.$w_3()
    },
    $18_3: function() {
        var $v_0 = false;
        if (IsNull(this.$2_3)) {
            try {
                Mscrm.GlobalVars.$5 = Mscrm.ScriptActions
                    .createSession(window.INITIAL_SCRIPT_ID,
                        window.PRIMARY_ENTITY_ID,
                        parseInt(window.PRIMARY_ENTITY_TYPECODE))
            } catch ($$e_1) {
                Mscrm.GlobalVars.$C = false;
                this.Cancel()
            }
            this.$g_3();
            this.$i_3 = Mscrm.GlobalVars.$5;
            if (IsNull(Mscrm.GlobalVars.$5)) {
                this.$K_3 = true;
                return
            }
            try {
                var $v_1 = Mscrm.StatementNodeActions
                    .createCurrentWorkflowContext(this.$f_3,
                        this.$i_3,
                        Mscrm.GlobalVars.$5,
                        "",
                        window.PRIMARY_ENTITY_ID,
                        window.PRIMARY_ENTITY_TYPECODE);
                this.$2_3 = this.cache.getNextPage("", $v_1);
                if (IsNull(this.$2_3)) this.$J_3 = null;
                else {
                    this.$J_3 = IsNull(this.$2_3.$6_0)
                        ? null
                        : XUI.Xml.SelectSingleNode(this.$2_3.$6_0, "interactionActivities", null);
                    var $v_2 = this.$2_3.$Q_0, $v_3 = this.$2_3.$6_0;
                    this.$q_3($v_3, false);
                    if (null !== $v_2) {
                        var $v_4 = Mscrm.StatementNodeActions.getWorkflowInstanceId($v_2);
                        if ($v_4 !== Mscrm.GlobalVars.$5) {
                            !Mscrm.ScriptActions.endSession(Mscrm.GlobalVars.$5, this.getComments()) && this.Cancel();
                            Mscrm.GlobalVars.$5 = $v_4;
                            this.$g_3();
                            this.$f_3 = Mscrm.StatementNodeActions.getWorkflowActivationId($v_2)
                        }
                    }
                }
            } catch ($$e_6) {
                this.$n_3(true);
                this.toggleButtons(false, true, false);
                this.$h_3(false);
                this.$K_3 = true;
                return
            }
            $v_0 = true
        } else {
            var $v_5 = "";
            try {
                $v_5 = this.$7_3.groupResult()
            } catch ($$e_8) {
                this.$1D_3();
                this.$K_3 = true;
                return
            }
            try {
                var $v_6 = XUI.Xml.XMLSerializer.serializeToString(this.$2_3.$Q_0);
                $v_6 = Mscrm.StatementNodeActions.getLightweightWorkflowContextXml(this.$d_3 || this.$K_3, $v_6);
                this.$2_3 = this.cache.getNextPage($v_5, $v_6);
                if (IsNull(this.$2_3)) this.$J_3 = null;
                else {
                    this.$J_3 = IsNull(this.$2_3.$6_0)
                        ? null
                        : XUI.Xml.SelectSingleNode(this.$2_3.$6_0, "interactionActivities", null);
                    var $v_7 = this.$2_3.$Q_0, $v_8 = this.$2_3.$6_0;
                    this.$q_3($v_8, false);
                    if (null !== $v_7) {
                        var $v_9 = Mscrm.StatementNodeActions.getWorkflowInstanceId($v_7);
                        if ($v_9 !== Mscrm.GlobalVars.$5) {
                            !Mscrm.ScriptActions.endSession(Mscrm.GlobalVars.$5, this.getComments()) && this.Cancel();
                            Mscrm.GlobalVars.$5 = $v_9;
                            this.$g_3();
                            this.$f_3 = Mscrm.StatementNodeActions.getWorkflowActivationId(this.$J_3);
                            $v_0 = true
                        } else $v_0 = false
                    }
                }
            } catch ($$e_D) {
                $v_0 = false;
                this.$K_3 = true;
                return
            }
        }
        this.$1C_3($v_0);
        this.$K_3 = false;
        return
    },
    $1C_3: function($p0) {
        this.$7_3.disposeControls();
        if (IsNull(this.$J_3)) {
            this.$l_3();
            this.$h_3(true);
            this.toggleButtons(true, $p0, true)
        } else {
            this.$l_3();
            this.$7_3.clear();
            this.$Z_3.clear();
            this.$h_3(false);
            this.toggleButtons(false, $p0, false);
            this.$u_3(false)
        }
    },
    $q_3: function($p0, $p1) {
        if (null !== $p0) {
            if (!$p1) {
                var $v_0 = Mscrm.StatementNodeActions.allowBack($p0);
                "False" === $v_0 && this.cache.clear()
            }
            this.$j_3 = Mscrm.StatementNodeActions.getName($p0)
        }
    },
    $h_3: function($p0) {
        var $v_0 = "inline",
            $v_1 = "none",
            $v_2 = $get("finishScriptText"),
            $v_3 = $get("scriptRun"),
            $v_4 = $get("paneStripDiv"),
            $v_5 = $get("boundary"),
            $v_6 = $get("collapseHint"),
            $v_7 = $get("navLeftSpan"),
            $v_8 = $get("stripDividerSpan");
        $get("pageTitle").innerHTML = "";
        if ($p0) {
            $v_3.style.display = $v_1;
            $v_2.style.display = $v_0;
            if ($v_4) $v_4.className = "";
            if ($v_5) $v_5.className = "";
            if ($v_6) $v_6.className = "";
            if ($v_7) $v_7.innerHTML = "";
            if ($v_8) $v_8.innerHTML = ""
        } else {
            if ($v_4) $v_4.className = "ms-crm-control-SideStrip sideStrip";
            if ($v_5) $v_5.className = "boundary";
            if ($v_6) $v_6.className = "collapseHint";
            if ($v_7 && isNullOrEmptyString($v_7.innerHTML)
            )
                $v_7.innerHTML = '<img id="navLeftImg" src="/_imgs/navLeft.png" class="ms-crm-RTL-Flip" alt="' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_NORMAL_VIEW) +
                    '"/>';
            if ($v_8 && isNullOrEmptyString($v_8.innerHTML)
            ) $v_8.innerHTML = '<img alt="" src="/_imgs/grid/stripDivider.gif"/>';
            $v_2.style.display = $v_1;
            $v_3.style.display = $v_0
        }
    },
    $1D_3: function() { alert(window.LOCID_SCRIPT_ERROR_ALERT) },
    $u_3: function($p0) {
        $get("pageTitle").innerHTML = CrmEncodeDecode.CrmHtmlEncode(this.$j_3);
        var $v_0 = this.$2_3.getInteractionActivities($p0);
        this.$7_3.load($v_0, this.$Z_3)
    },
    $w_3: function() {
        if (!IsNull(this.$7_3) && this.$7_3.get_frameCount() > 0)
            try {
                var $v_0 = this.$7_3.$3_3[0];
                $v_0.setFocus()
            } catch ($$e_1) {
            }
    },
    $n_3: function($p0) {
        var $v_0 = $get("butNext");
        if ($p0) $v_0.disabled = true;
        else $v_0.disabled = false
    },
    $l_3: function() {
        this.HideHint(this.$E_3);
        for (var $v_0 = 0; $v_0 < this.$7_3.$3_3.length; $v_0++) {
            var $v_1 = this.$7_3.$3_3[$v_0], $v_2 = new Mscrm.PromptResponseFrame($v_1);
            this.cache.$Y_0[$v_1.$1_0] = $v_2
        }
    },
    getComments: function() {
        var $v_0 = $get("scriptCommentsControl");
        if (IsNull($v_0)) return "";
        var $v_1 = $v_0;
        return $v_1.value
    },
    HandleNavigation: function(moveNext) {
        if (moveNext) this.$18_3();
        else this.Previous()
    },
    Previous: function() {
        this.$v_3();
        this.$h_3(false);
        var $v_0 = IsNull(this.$2_3) || IsNull(this.$2_3.$6_0) ? true : false;
        this.$2_3 = this.cache.getPreviousPage();
        var $v_1 = null;
        if (!IsNull(this.$2_3)) {
            this.$d_3 = true;
            $v_1 = this.$2_3.$6_0
        }
        this.$n_3(false);
        var $v_2 = this.cache.previousGroupExists();
        if (!$v_2) this.toggleButtons(false, true, false);
        else this.toggleButtons(false, false, false);
        if (!$v_0) {
            this.$7_3.disposeControls();
            this.$l_3()
        }
        this.$7_3.clear();
        this.$Z_3.clear();
        this.$q_3($v_1, true);
        this.$u_3(true);
        window.setTimeout(this.$$d_$w_3, 0)
    },
    Cancel: function() {
        Mscrm.Utilities.isChrome() && window.open("", "_self", "");
        closeWindow()
    },
    Summary: function() { openObj(4710, Mscrm.GlobalVars.$5.toString()) },
    Finish: function() {
        Mscrm.GlobalVars.$C = false;
        this.handleClose();
        Mscrm.Utilities.isChrome() && window.open("", "_self", "");
        closeWindow()
    },
    handleClose: function() {
        !this.$k_3 && Mscrm.ScriptActions.endSession(Mscrm.GlobalVars.$5, this.getComments());
        this.$k_3 = true
    }
};
Mscrm.ScriptGroupControl = function(element) {
    Mscrm.ScriptGroupControl.initializeBase(this, [element]);
    this.$B_3 = element;
    this.$3_3 = [];
    this.$W_3 = 1;
    this.$S_3 = 1
};
Mscrm.ScriptGroupControl.prototype = {
    $B_3: null,
    $3_3: null,
    $W_3: 0,
    $S_3: 0,
    $U_3: false,
    get_frameCount: function() { return this.$3_3.length },
    get_frames: function() { return this.$3_3 },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $find("scriptSessionStage").loadControl("group", this)
    },
    clear: function() {
        this.$B_3.innerHTML = "";
        this.$z_3();
        Array.clear(this.$3_3);
        this.$3_3 = [];
        this.$W_3 = 1;
        this.$S_3 = 1;
        this.$U_3 = false
    },
    load: function(groupObject, hintControl) {
        var $v_0 = null, $v_1 = $find("scriptSessionStage"), $v_2 = $v_1.cache.$Y_0, $v_3 = false;
        if (groupObject.$e_0) {
            var $v_4 = groupObject.$F_0;
            if (null !== $v_4 && $v_4.hasChildNodes())
                for (var $v_5 = 0;
                    $v_5 < $v_4.childNodes.length;
                    $v_5++
                ) Array.add(this.$3_3, new Mscrm.ScriptFrame($v_4.childNodes[$v_5], hintControl))
        } else {
            $v_3 = true;
            for (var $v_6 = groupObject.$c_0, $v_7 = 0; $v_7 < $v_6.length; $v_7++) {
                $v_0 = $v_2[$v_6[$v_7]];
                Array.add(this.$3_3, new Mscrm.ScriptFrame($v_0.$F_0, hintControl))
            }
        }
        this.$1A_3($v_3, $v_2)
    },
    addNotifications: function() {
        for (var $v_0 = false, $v_1 = 0; $v_1 < this.$3_3.length; $v_1++) {
            var $v_2 = this.$3_3[$v_1];
            if ($v_2.showZeroRecordNotification) {
                $v_2.addNotification();
                $v_0 = true
            }
        }
        return $v_0
    },
    $z_3: function() {
        for (var $v_0 = 0; $v_0 < this.$3_3.length; $v_0++) {
            var $v_1 = this.$3_3[$v_0];
            if ($v_1.showZeroRecordNotification) {
                var $v_2 = $find($v_1.$1_0 + "_Notifications");
                $v_2.dispose()
            }
        }
    },
    groupResult: function() {
        for (var $v_0 = "", $v_1 = 0; $v_1 < this.$3_3.length; $v_1++) {
            var $v_2 = this.$3_3[$v_1];
            $v_0 += $v_2.interactionActivityResponse()
        }
        if (isNullOrEmptyString($v_0)) return "";
        else return String.format("<interactionActivities>{0}</interactionActivities>", $v_0)
    },
    disposeControls: function() {
        for (var $v_0 = 0; $v_0 < this.$3_3.length; $v_0++) {
            var $v_1 = this.$3_3[$v_0];
            $v_1.disposeControl()
        }
    },
    $1A_3: function($p0, $p1) {
        var $v_0 = null, $v_1 = document.createElement("table"), $v_2 = document.createElement("tbody");
        $v_1.className = "UIScriptTable";
        var $v_3 = document.createAttribute("cellspacing");
        $v_3.value = "0";
        $v_1.attributes.setNamedItem($v_3);
        for (var $v_4 = 0; $v_4 < this.$3_3.length; $v_4++) {
            var $v_5 = this.$3_3[$v_4];
            $v_0 = $p1[$v_5.$1_0];
            $v_5.$V_0 = !$p0 && !!$v_0 && $v_0.$O_0 !== $v_5.$R_0;
            this.$U_3 = !this.$U_3 ? $v_5.$V_0 : this.$U_3;
            var $v_6 = document.createElement("tr"), $v_7 = document.createElement("td");
            $v_7.className = "ms-crm-ScriptFrame";
            if ($v_0 && ($p0 || !isNullOrEmptyString($v_0.$O_0) && $v_0.$O_0 === $v_5.$R_0)) {
                $v_5.load(this.$W_3, this.$S_3);
                $v_7.appendChild($v_0.$a_0)
            } else $v_7.appendChild($v_5.render(this.$W_3, this.$S_3));
            $v_6.appendChild($v_7);
            $v_2.appendChild($v_6);
            this.$W_3 = $v_5.tabIndex;
            this.$S_3++
        }
        $v_1.appendChild($v_2);
        this.$B_3.appendChild($v_1);
        this.$y_3();
        this.$14_3(this.$U_3)
    },
    $y_3: function() {
        for (var $v_0 = 0; $v_0 < this.$3_3.length; $v_0++) {
            var $v_1 = this.$3_3[$v_0];
            $v_1.createControl()
        }
    },
    $14_3: function($p0) {
        var $v_0 = $p0 ? "block" : "none", $v_1 = $get("notificationWarning");
        $v_1.style.display = $v_0;
        for (var $v_2, $v_3 = 0; $v_3 < this.$3_3.length; $v_3++) {
            var $v_4 = this.$3_3[$v_3];
            $v_0 = $v_4.$V_0 ? "inline" : "none";
            $v_2 = $get($v_4.$1_0 + "_icon");
            if (!IsNull($v_2)) $v_2.style.display = $v_0
        }
    }
};
Mscrm.ScriptHintControl = function(element) {
    Mscrm.ScriptHintControl.initializeBase(this, [element]);
    this.$B_3 = element
};
Mscrm.ScriptHintControl.prototype = {
    $B_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $find("scriptSessionStage").loadControl("hint", this)
    },
    clear: function() { this.$B_3.innerHTML = "" },
    load: function(hintId, hint, hintForTitle, responseId) {
        var $v_0 = new Sys.StringBuilder('<div id="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(hintId) +
            '" class="HiddenHint">');
        $v_0.append('<table class="CueTable">');
        $v_0.append("<tr>");
        $v_0.append('<td class="TipPadding">');
        $v_0.append('<label class="CueTip">');
        $v_0.append(CrmEncodeDecode.CrmHtmlEncode(window.LOCID_CUE_TEXT));
        $v_0.append("</label>");
        $v_0.append("</td></tr>");
        $v_0.append("<tr><td>");
        $v_0.append('<pre style="word-wrap:break-word;margin:0px;overflow:hidden;" id="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(hintId + "_pre") +
            '">');
        $v_0.append('<label id="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(hintId + "label") +
            '" class="CueText" title="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(hintForTitle) +
            '" for="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(responseId) +
            '">');
        $v_0.append(hint);
        $v_0.append("</label>");
        $v_0.append("</pre>");
        $v_0.append("</td></tr>");
        $v_0.append("</table>");
        $v_0.append("</div>");
        this.$B_3.innerHTML += $v_0.toString()
    }
};
Mscrm.ScriptFrame = function(interactionActivity, hintControl) {
    this.$o_0 = new Mscrm
        .ScriptRegularExpression("<hyperlink>\\s*<name>(.*?)</name>\\s*<value>(.*?)</value>\\s*</hyperlink>", "gim");
    this.$D_0 = interactionActivity;
    this.$1_0 = Mscrm.StatementNodeActions.getName(interactionActivity);
    this.$8_0 = Mscrm.StatementNodeActions.getResponseContainerType(interactionActivity);
    this.$9_0 = Mscrm.StatementNodeActions.getResponseMetadataType(interactionActivity);
    this.$I_0 = Mscrm.StatementNodeActions.getLogResponseValue(interactionActivity);
    var $v_0 = Mscrm.StatementNodeActions.getIsResponseStatic(interactionActivity);
    if (!isNullOrEmptyString($v_0)) this.$H_0 = Boolean.parse($v_0);
    if ("Radio" === this.$8_0) this.$G_0 = "rad_" + this.$1_0 + "1";
    else this.$G_0 = this.$1_0;
    this.$T_0 = Mscrm.InteractiveWorkflowClientControlFactory.getControl(this);
    this.$R_0 = Mscrm.StatementNodeActions.getHashValue(interactionActivity);
    this.$p_0 = hintControl
};
Mscrm.ScriptFrame.validateUrlProtocol = function(url) {
    var $v_0 = Mscrm.CrmUri.create(url);
    if (isNullOrEmptyString($v_0.get_scheme())) return 0;
    switch ($v_0.get_scheme()) {
    case "http":
    case "https":
    case "ftp":
    case "ftps":
    case "onenote":
    case "tel":
    case "mailto":
        return 1;
    default:
        return 0
    }
};
Mscrm.ScriptFrame.prototype = {
    $D_0: null,
    $1_0: null,
    $8_0: null,
    $9_0: null,
    $I_0: null,
    $H_0: true,
    $G_0: null,
    showZeroRecordNotification: false,
    $T_0: null,
    $4_0: 0,
    $R_0: "",
    $p_0: null,
    $M_0: 0,
    $V_0: false,
    tabIndex: 0,
    get_defaultFocusId: function() { return this.$G_0 },
    get_logResponse: function() { return this.$I_0 },
    get_frameResponseContainerType: function() { return this.$8_0 },
    get_frameResponseMetadataType: function() { return this.$9_0 },
    get_isResponseStatic: function() { return this.$H_0 },
    get_unformattedPrompt: function() { return Mscrm.StatementNodeActions.getPromptText(this.$D_0) },
    get_interactionActivity: function() { return this.$D_0 },
    get_hash: function() { return this.$R_0 },
    get_name: function() { return this.$1_0 },
    get_frameId: function() { return this.$4_0 },
    get_showPromptChangeNotification: function() { return this.$V_0 },
    set_showPromptChangeNotification: function(value) {
        this.$V_0 = value;
        return value
    },
    load: function(tabId, prActivityNumber) {
        this.tabIndex = tabId;
        this.$4_0 = prActivityNumber;
        var $v_0 = "Radio" === this.$8_0 ? this.$1_0 + "_id" : this.$1_0;
        this.showZeroRecordNotification = !this
            .$H_0 &&
            Mscrm.StatementNodeActions.showZeroRecordNotification(this.$D_0);
        if (this.showZeroRecordNotification || this.$8_0 === "None") this.$G_0 = this.$4_0.toString() + "col";
        this.$p_0.load(this.$4_0.toString(),
            this.$15_0(),
            this.$b_0(Mscrm.StatementNodeActions.getCueText(this.$D_0), false),
            $v_0);
        this.tabIndex++
    },
    render: function(tabId, prActivityNumber) {
        this.load(tabId, prActivityNumber);
        var $v_0 = document.createElement("div"), $v_1 = new Sys.StringBuilder;
        $v_1.append('<table cellspacing="0" class="RowTable">');
        $v_1.append('<tr id="' + CrmEncodeDecode.CrmHtmlAttributeEncode(this.$4_0.toString() + "row") + '">');
        $v_1.append('<td class="PromptResponse" id="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$4_0.toString() + "col") +
            "\" onFocus=\"$find('scriptSessionStage').ShowHint('" +
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$4_0.toString()) +
            "')\" onClick=\"$find('scriptSessionStage').ShowHint('" +
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$4_0.toString()) +
            "')\">");
        $v_1.append('<pre style="word-wrap:break-word;margin:0px;">');
        $v_1.append('<img id="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0 + "_icon") +
            '" src="/_imgs/error/notif_icn_alert16.png" alt ="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PR_NOTIFICATION) +
            '" class="ms-crm-Dlg-prNotific" />');
        $v_1.append('<label class="PromptText" id="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0 + "_prompt") +
            '" promptid="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$4_0.toString()) +
            '">');
        $v_1.append(this.$13_0());
        $v_1.append("</label>");
        $v_1.append("</pre>");
        "None" === this.$8_0 && $v_1.append("<br/>");
        $v_1.append(this.$16_0());
        $v_1.append("</td>");
        $v_1.append("</tr>");
        $v_1.append("</table>");
        $v_0.innerHTML = $v_1.toString();
        return $v_0
    },
    $13_0: function() { return this.$b_0(this.get_unformattedPrompt(), true) },
    $16_0: function() {
        if (this.showZeroRecordNotification) return this.$x_0();
        else return Mscrm.StatementNodeActions.getResponseHtml(this.$D_0)
    },
    $x_0: function() {
        var $v_0 = '<div class="Notifications" id="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0) +
            '_Notifications" style="display:block" Size="3" MaxHeight="66">';
        $v_0 += "</div>";
        return $v_0
    },
    addNotification: function() {
        if (this.showZeroRecordNotification) {
            var $v_2 = $get(this.$1_0 + "_Notifications");
            Mscrm.CrmUIComponent.crmCreate(Mscrm.NotificationList, null, null, null, $v_2)
        }
        var $v_0 = $find(this.$1_0 + "_Notifications"), $v_1 = $v_0.GetNotifications();
        (IsNull($v_1) || $v_1.length < 1) &&
            $v_0.AddNotification(this.$1_0 + "_Notification",
                2,
                this.$1_0 + "_Notifications",
                window.LOCID_NO_RECORD_FETCHED)
    },
    $15_0: function() { return this.$b_0(Mscrm.StatementNodeActions.getCueText(this.$D_0), true) },
    $b_0: function($p0, $p1) {
        var $v_0 = "", $v_1 = false;
        if (this.$o_0.test($p0)) {
            $v_1 = true;
            for (var $v_2 = this.$o_0.exec($p0), $v_3 = $p0.split($v_2[0]), $v_4 = 0; $v_4 < $v_3.length - 1; $v_4++) {
                $v_0 += this.$b_0($v_3[$v_4], $p1);
                $v_0 += this.$12_0($v_2[1], $v_2[2], $p1)
            }
            $v_0 += this.$b_0($v_3[$v_3.length - 1], $p1);
            $p0 = $v_0;
            $v_0 = ""
        }
        if (!$v_1)
            if ($p1) return CrmEncodeDecode.CrmHtmlEncode($p0);
            else return $p0;
        return $p0
    },
    $12_0: function($p0, $p1, $p2) {
        var $v_0 = "";
        if (!isNullOrEmptyString($p1)) {
            $p1 = $p1.trim();
            if (Mscrm.ScriptFrame.validateUrlProtocol($p1) !== 1) $p1 = ""
        }
        if (isNullOrEmptyString($p0)) $p0 = $p1;
        if (isNullOrEmptyString($p1)) {
            this.$M_0++;
            if ($p2)
                $v_0 = '<a class="ScriptLink"  id=\'' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$4_0.toString() +
                        "frame" +
                        this.$M_0.toString() +
                        "link") +
                    '\'href = "#" title="#">' +
                    CrmEncodeDecode.CrmHtmlEncode($p0) +
                    "</a>";
            else
                $v_0 = '<a class="ScriptLink"  id=\'' +
                    this.$4_0.toString() +
                    "frame" +
                    this.$M_0.toString() +
                    'link\'href = "#" title="#">' +
                    $p0 +
                    "</a>"
        } else {
            this.$M_0++;
            if ($p2)
                $v_0 = '<a class="ScriptLink"  id=\'' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$4_0.toString() +
                        "frame" +
                        this.$M_0.toString() +
                        "link") +
                    "'href = \"" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p1) +
                    '" title = "' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($p1) +
                    '" target="#">' +
                    CrmEncodeDecode.CrmHtmlEncode($p0) +
                    "</a>";
            else
                $v_0 = '<a class="ScriptLink"  id=\'' +
                    this.$4_0.toString() +
                    "frame" +
                    this.$M_0.toString() +
                    "link'href = \"" +
                    $p1 +
                    '" title="' +
                    $p1 +
                    '" target="#">' +
                    $p0 +
                    "</a>"
        }
        return $v_0
    },
    interactionActivityResponse: function() { return this.$T_0.responseXml() },
    createControl: function() { this.$T_0.createControl() },
    disposeControl: function() { this.$T_0.disposeControl() },
    setFocus: function() { this.$T_0.setFocus() }
};
Mscrm.ResponseControlTypes = function() {};
Mscrm.ResponseMetadataType = function() {};
Mscrm.ScriptRegularExpression = function(expression, flags) { this.$A_0 = new RegExp(expression, flags) };
Mscrm.ScriptRegularExpression.prototype = {
    $A_0: null,
    get_global: function() { return this.$A_0.global },
    get_ignoreCase: function() { return this.$A_0.ignoreCase },
    get_multiline: function() { return this.$A_0.multiline },
    get_pattern: function() { return this.$A_0.pattern },
    exec: function(s) {
        this.$A_0.lastIndex = 0;
        return this.$A_0.exec(s)
    },
    test: function(s) {
        this.$A_0.lastIndex = 0;
        return this.$A_0.test(s)
    }
};
Mscrm.ScriptCacheManager = function() {
    this.$P_0 = [];
    this.$Y_0 = {}
};
Mscrm.ScriptCacheManager.prototype = {
    $2_0: null,
    get_frameDictionary: function() { return this.$Y_0 },
    clear: function() {
        Array.clear(this.$P_0);
        this.$Y_0 = {};
        this.$P_0 = []
    },
    getNextPage: function(resultXml, workflowContextXml) {
        var $v_0 = "";
        try {
            $v_0 = Mscrm.ScriptActions.getNextPage(resultXml, workflowContextXml)
        } catch ($v_2) {
            throw $v_2
        }
        var $v_1 = $find("scriptGroupControl");
        if (!IsNull(this.$2_0) && !IsNull(this.$2_0.$6_0) && !IsNull($v_1)) {
            var $v_3 = XUI.Xml.SelectSingleNode(this.$2_0.$6_0, "interactionActivities", null);
            !IsNull($v_3) && $v_3.parentNode.removeChild($v_3);
            var $v_4 = this.$10_0($v_1.$3_3);
            this.$2_0.$N_0 = $v_4;
            this.$P_0.push(this.$2_0)
        }
        if (isNullOrEmptyString($v_0)) return null;
        else {
            this.$2_0 = new Mscrm.Page(XUI.Xml.LoadXml($v_0));
            return this.$2_0
        }
    },
    getPreviousPage: function() {
        var $v_0 = this.$P_0.pop();
        this.$2_0 = $v_0;
        return $v_0
    },
    previousGroupExists: function() {
        if (0 === this.$P_0.length) return false;
        else return true
    },
    $10_0: function($p0) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < $p0.length; $v_1++) Array.add($v_0, $p0[$v_1].$1_0);
        return $v_0
    }
};
Mscrm.PromptResponseFrame = function($p0) {
    this.$F_0 = $p0.$D_0;
    this.$O_0 = $p0.$R_0;
    var $v_0 = this.$11_0($p0);
    if (!IsNull($v_0)) {
        this.$a_0 = document.createDocumentFragment();
        var $v_1 = document.createElement("table"), $v_2 = document.createAttribute("cellspacing");
        $v_2.value = "0";
        $v_1.attributes.setNamedItem($v_2);
        $v_1.className = "RowTable";
        var $v_3 = document.createElement("tbody");
        $v_1.appendChild($v_3);
        $v_3.appendChild($v_0.removeChild($get($p0.$4_0.toString() + "row", $v_0)));
        this.$a_0.appendChild($v_1)
    }
};
Mscrm.PromptResponseFrame.prototype = {
    $F_0: null,
    $O_0: "",
    $a_0: null,
    get_interactionActivity: function() { return this.$F_0 },
    get_hash: function() { return this.$O_0 },
    get_promptResponseFragment: function() { return this.$a_0 },
    $11_0: function($p0) {
        var $v_0 = $get($p0.$4_0.toString() + "row");
        if (IsNull($v_0) || IsNull($v_0.parentNode)) return null;
        return $v_0.parentNode
    }
};
Mscrm.ScriptActions = function() {};
Mscrm.ScriptActions.createSession = function(scriptId, regardingObjectId, regardingObjectTypeCode) {
    var $v_0 = new RemoteCommand("InteractiveWorkflowWebService", "CreateSession");
    $v_0.SetParameter("workflowId", scriptId);
    $v_0.SetParameter("regardingObjectId", regardingObjectId);
    $v_0.SetParameter("regardingObjectTypeCode", regardingObjectTypeCode);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else throw Error.create("Session couldn't be created")
};
Mscrm.ScriptActions.getNextScript = function(scriptId) {
    var $v_0 = new RemoteCommand("InteractiveWorkflowWebService", "GetNextScript");
    $v_0.SetParameter("scriptId", scriptId);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    return null
};
Mscrm.ScriptActions.endSession = function(sessionId, comments) {
    var $v_0 = new RemoteCommand("InteractiveWorkflowWebService", "EndSession");
    $v_0.SetParameter("sessionId", sessionId);
    $v_0.SetParameter("comments", comments);
    var $v_1 = $v_0.Execute();
    return $v_1.Success
};
Mscrm.ScriptActions.cancelSession = function(sessionId, comments) {
    var $v_0 = new RemoteCommand("InteractiveWorkflowWebService", "CancelSession");
    $v_0.SetParameter("sessionId", sessionId);
    $v_0.SetParameter("comments", comments);
    var $v_1 = $v_0.Execute();
    return $v_1.Success
};
Mscrm.ScriptActions.executeFetchAction = function(fetchXml) {
    var $v_0 = new RemoteCommand("InteractiveWorkflowWebService", "ExecuteFetchAction");
    $v_0.SetParameter("fetchXml", fetchXml);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else throw Error.create("Fetch did not succeed")
};
Mscrm.ScriptActions.getNextPage = function(resultXml, workflowContextXml) {
    var $v_0 = new RemoteCommand("InteractiveWorkflowWebService", "GetNextPage");
    $v_0.SetParameter("resultXml", resultXml);
    $v_0.SetParameter("workflowContextXml", workflowContextXml);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else throw Error.create("Next group couldn't be fetched")
};
Mscrm.InteractiveWorkflowClientControl = function(frame) { this.$0_0 = frame };
Mscrm.InteractiveWorkflowClientControl.prototype = {
    $0_0: null,
    get_frame: function() { return this.$0_0 },
    $r_0: function($p0) {
        if ($p0 === Number.NaN.toString()) return "";
        else return $p0
    },
    locStringToInt: function(number) {
        var $v_0 = Mscrm.NumberUtility.locStringToInt(number).toString();
        return this.$r_0($v_0)
    },
    locStringToFloat: function(number) {
        var $v_0 = Mscrm.NumberUtility.locStringToFloat(number).toString();
        return this.$r_0($v_0)
    },
    createControl: function() { return },
    disposeControl: function() { return },
    setFocus: function() { $get(this.$0_0.$G_0).focus() }
};
Mscrm.InteractiveWorkflowClientDateTimeControl = function(frame) {
    Mscrm.InteractiveWorkflowClientDateTimeControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientDateTimeControl.prototype = {
    responseXml: function() {
        var $v_0 = $get(this.$0_0.$1_0),
            $v_1 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_0),
            $v_2 = $v_1.get_dataValue(),
            $v_3 = "",
            $v_4 = "";
        if (!IsNull($v_2)) {
            var $v_5 = $v_2, $v_6 = FormatDateTime($v_5);
            $v_4 = $v_6;
            $v_3 = $v_6
        }
        return String
            .format('<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}" userTimeZone="{8}"/>', CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$1_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$9_0), CrmEncodeDecode.CrmXmlAttributeEncode($v_4), CrmEncodeDecode.CrmXmlAttributeEncode($v_3), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$I_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.get_unformattedPrompt()), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$8_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$H_0.toString()), CrmEncodeDecode.CrmXmlAttributeEncode(window.USER_TIMEZONE))
    },
    createControl: function() {
        var $v_0 = $get(this.$0_0.$4_0 + "row");
        Mscrm.FormInputControl.DateTimeBehaviorBase.registerDateTimeComponents($v_0)
    },
    disposeControl: function() {
        var $v_0 = $get(this.$0_0.$4_0 + "row");
        Mscrm.FormInputControl.DateTimeBehaviorBase.disposeDateTimeComponents($v_0)
    },
    setFocus: function() {
        Mscrm.Utilities.click($get(this.$0_0.$G_0));
        Mscrm.FormControlInputBehavior.GetBehavior(this.$0_0.$1_0).setFocus()
    }
};
Mscrm.InteractiveWorkflowClientTextControl = function(frame) {
    Mscrm.InteractiveWorkflowClientTextControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientTextControl.prototype = {
    responseXml: function() {
        var $v_0 = $get(this.$0_0.$1_0), $v_1 = $v_0, $v_2 = $v_1.value, $v_3 = $v_2;
        if ("int" === this.$0_0.$9_0) $v_2 = this.locStringToInt($v_2);
        else if ("float" === this.$0_0.$9_0) $v_2 = this.locStringToFloat($v_2);
        return String
            .format('<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}"/>', CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$1_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$9_0), CrmEncodeDecode.CrmXmlAttributeEncode($v_2), CrmEncodeDecode.CrmXmlAttributeEncode($v_3), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$I_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.get_unformattedPrompt()), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$8_0), "true")
    }
};
Mscrm.InteractiveWorkflowClientTextBoxControl = function(frame) {
    Mscrm.InteractiveWorkflowClientTextBoxControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientTextBoxControl.prototype = {
    $m_2: null,
    createControl: function() {
        var $v_0 = "int" === this.$0_0.$9_0 || "float" === this.$0_0.$9_0
                ? Mscrm.FormInputControl.NumberInputBehavior
                : Mscrm.FormInputControl.TextBoxInputBehavior,
            $v_1 = $get(this.$0_0.$1_0);
        Mscrm.CrmUIComponent.crmCreate($v_0, null, null, null, $v_1);
        this.$m_2 = Mscrm.FormControlInputBehavior.GetBehavior($v_1.id)
    },
    disposeControl: function() { this.$m_2.dispose() }
};
Mscrm.InteractiveWorkflowClientTextAreaControl = function(frame) {
    Mscrm.InteractiveWorkflowClientTextAreaControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientTextAreaControl.prototype = {
    createControl: function() {
        Mscrm.CrmUIComponent.crmCreate(Mscrm.FormInputControl.TextAreaInputBehavior,
            null,
            null,
            null,
            $get(this.$0_0.$1_0))
    },
    disposeControl: function() {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$0_0.$1_0);
        $v_0.dispose()
    }
};
Mscrm.InteractiveWorkflowClientNoneControl = function(frame) {
    Mscrm.InteractiveWorkflowClientNoneControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientNoneControl.prototype = {
    responseXml: function() {
        return String
            .format('<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}"/>', CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$1_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$9_0), "", "", "false", CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.get_unformattedPrompt()), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$8_0), "true")
    },
    setFocus: function() { Mscrm.Utilities.click($get(this.$0_0.$G_0)) }
};
Mscrm.InteractiveWorkflowClientRadioControl = function(frame) {
    Mscrm.InteractiveWorkflowClientRadioControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientRadioControl.prototype = {
    responseXml: function() {
        for (var $v_0 = document
                     .getElementsByName("rad_" + this.$0_0.$1_0),
            $v_1 = null,
            $v_2 = "",
            $v_3 = "",
            $v_4 = 0;
            $v_4 < $v_0.length;
            $v_4++) {
            var $v_5 = $v_0[$v_4];
            if ($v_5.checked) {
                $v_1 = $v_5;
                $v_2 = $v_1.value;
                $v_3 = $v_1.getAttribute("formattedValue")
            }
        }
        return String
            .format('<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}"/>', CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$1_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$9_0), CrmEncodeDecode.CrmXmlAttributeEncode($v_2), CrmEncodeDecode.CrmXmlAttributeEncode($v_3), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$I_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.get_unformattedPrompt()), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$8_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$H_0.toString()))
    }
};
Mscrm.InteractiveWorkflowClientSelectControl = function(frame) {
    Mscrm.InteractiveWorkflowClientSelectControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientSelectControl.prototype = {
    responseXml: function() {
        var $v_0 = $get(this.$0_0.$1_0), $v_1 = $v_0, $v_2 = "", $v_3 = "";
        if ($v_1.selectedIndex !== -1) {
            var $v_4 = $v_1.options[$v_1.selectedIndex];
            $v_2 = $v_4.value;
            $v_3 = $v_4.text
        }
        return String
            .format('<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}"/>', CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$1_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$9_0), CrmEncodeDecode.CrmXmlAttributeEncode($v_2), CrmEncodeDecode.CrmXmlAttributeEncode($v_3), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$I_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.get_unformattedPrompt()), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$8_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$H_0.toString()))
    }
};
Mscrm.InteractiveWorkflowClientLookupControl = function(frame) {
    Mscrm.InteractiveWorkflowClientLookupControl.initializeBase(this, [frame])
};
Mscrm.InteractiveWorkflowClientLookupControl.prototype = {
    responseXml: function() {
        var $v_0 = "",
            $v_1 = "",
            $v_2 = $get(this.$0_0.$1_0),
            $v_3 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_2),
            $v_4 = $v_3.Items(false, false, false, false, false);
        if (!IsNull($v_4) && $v_4.length >= 1) {
            var $v_5 = $v_4[0];
            $v_0 = $v_5.id + ";" + $v_5.typename;
            $v_1 = $v_5.name
        }
        return String
            .format('<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}"/>', CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$1_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$9_0), CrmEncodeDecode.CrmXmlAttributeEncode($v_0), CrmEncodeDecode.CrmXmlAttributeEncode($v_1), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$I_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.get_unformattedPrompt()), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$8_0), CrmEncodeDecode.CrmXmlAttributeEncode(this.$0_0.$H_0.toString()))
    },
    createControl: function() {
        Mscrm.CrmUIComponent.crmCreate(Mscrm.FormInputControl.PresenceLookupUIBehavior,
            null,
            null,
            null,
            $get(this.$0_0.$1_0))
    },
    disposeControl: function() {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$0_0.$1_0);
        $v_0.dispose()
    },
    setFocus: function() { Mscrm.FormControlInputBehavior.GetBehavior(this.$0_0.$1_0).setFocus(null) }
};
Mscrm.InteractiveWorkflowClientControlFactory = function() {};
Mscrm.InteractiveWorkflowClientControlFactory.getControl = function(frame) {
    switch (frame.$8_0) {
    case "None":
        return new Mscrm.InteractiveWorkflowClientNoneControl(frame);
    case "Textbox":
        return new Mscrm.InteractiveWorkflowClientTextBoxControl(frame);
    case "MultilineText":
        return new Mscrm.InteractiveWorkflowClientTextAreaControl(frame);
    case "Radio":
        return new Mscrm.InteractiveWorkflowClientRadioControl(frame);
    case "PickList":
        return new Mscrm.InteractiveWorkflowClientSelectControl(frame);
    case "Lookup":
        return new Mscrm.InteractiveWorkflowClientLookupControl(frame);
    case "DateOnly":
    case "DateTime":
        return new Mscrm.InteractiveWorkflowClientDateTimeControl(frame)
    }
    return null
};
Mscrm.Page = function(fullPageXml) {
    var $v_0 = XUI.Xml.DomUtils.GetFirstChild(fullPageXml);
    this.$6_0 = XUI.Xml.SelectSingleNode($v_0, "interactionPage", null);
    this.$Q_0 = XUI.Xml.SelectSingleNode($v_0, "InteractiveWorkflowContext", null)
};
Mscrm.Page.prototype = {
    $6_0: null,
    $Q_0: null,
    $N_0: null,
    get_interactionPageXml: function() { return this.$6_0 },
    set_interactionPageXml: function(value) {
        this.$6_0 = value;
        return value
    },
    get_workflowContext: function() { return this.$Q_0 },
    get_frameIdList: function() { return this.$N_0 },
    set_frameIdList: function(value) {
        this.$N_0 = value;
        return value
    },
    getInteractionActivities: function(isBackNavigated) {
        var $v_0 = null;
        if (isBackNavigated) $v_0 = new Mscrm.InteractionActivityObject(null, this.$N_0);
        else
            $v_0 = new Mscrm.InteractionActivityObject(XUI.Xml
                .SelectSingleNode(this.$6_0, "interactionActivities", null),
                this.$N_0);
        return $v_0
    }
};
Mscrm.InteractionActivityObject = function(interactionActivity, frameIds) {
    this.$F_0 = interactionActivity;
    this.$c_0 = frameIds;
    if (!IsNull(interactionActivity)) this.$e_0 = true
};
Mscrm.InteractionActivityObject.prototype = {
    $F_0: null,
    $c_0: null,
    $e_0: false,
    get_interactionActivity: function() { return this.$F_0 },
    get_frameIds: function() { return this.$c_0 },
    get_isXmlStored: function() { return this.$e_0 }
};
Mscrm.StatementNodeActions = function() {};
Mscrm.StatementNodeActions.getPromptText = function(node) { return Mscrm.StatementNodeActions.$t(node, "PromptText") };
Mscrm.StatementNodeActions.getCueText = function(node) { return Mscrm.StatementNodeActions.$t(node, "CueText") };
Mscrm.StatementNodeActions.getIsResponseStatic = function(node) {
    return Mscrm.StatementNodeActions.$L(node, "IsResponseStatic")
};
Mscrm.StatementNodeActions.getResponseContainerType = function(node) {
    return Mscrm.StatementNodeActions.$L(node, "ResponseContainerType")
};
Mscrm.StatementNodeActions.getResponseMetadataType = function(node) {
    return Mscrm.StatementNodeActions.$L(node, "ResponseMetadataType")
};
Mscrm.StatementNodeActions.getLogResponseValue = function(node) {
    return Mscrm.StatementNodeActions.$L(node, "LogResponse")
};
Mscrm.StatementNodeActions.getResponseMinValue = function(node) {
    return XUI.Xml.SelectSingleNode(node, "ResponseMetadataType", null).attributes.getNamedItem("minvalue").nodeValue
};
Mscrm.StatementNodeActions.getResponseMaxValue = function(node) {
    return XUI.Xml.SelectSingleNode(node, "ResponseMetadataType", null).attributes.getNamedItem("maxvalue").nodeValue
};
Mscrm.StatementNodeActions.getResponseHtml = function(node) {
    return Mscrm.StatementNodeActions.$L(node, "ResponseHtml")
};
Mscrm.StatementNodeActions.showZeroRecordNotification = function(node) {
    return Boolean.parse(Mscrm.StatementNodeActions.$L(node, "ShowZeroRecordNotification"))
};
Mscrm.StatementNodeActions.getTextBoxFormattedValue = function(node) {
    return XUI.Xml.SelectSingleNode(node, "ResponseDefaultValue", null).attributes.getNamedItem("value").nodeValue
};
Mscrm.StatementNodeActions.setTextBoxFormattedValue = function(node, value) {
    XUI.Xml.SelectSingleNode(node, "ResponseDefaultValue", null).attributes.getNamedItem("value").nodeValue = value
};
Mscrm.StatementNodeActions.isDefault = function(node) {
    if (!IsNull(node.attributes.getNamedItem("default")))
        if ("true" === CrmEncodeDecode.CrmXmlDecode(node.attributes.getNamedItem("default").nodeValue)) return true;
        else return false;
    else return false
};
Mscrm.StatementNodeActions.unsetDefault = function(node) {
    if (!IsNull(node.attributes.getNamedItem("default"))) node.attributes.getNamedItem("default").nodeValue = "false"
};
Mscrm.StatementNodeActions.setDefault = function(node) {
    if (!IsNull(node.attributes.getNamedItem("default"))) node.attributes.getNamedItem("default").nodeValue = "true";
    else {
        var $v_0 = node.ownerDocument, $v_1 = $v_0.createAttribute("default");
        $v_1.value = "true";
        node.attributes.setNamedItem($v_1)
    }
};
Mscrm.StatementNodeActions.getResponseAccuracy = function(node) {
    return CrmEncodeDecode.CrmXmlDecode(XUI.Xml.SelectSingleNode(node, "ResponseMetadataType", null).attributes
        .getNamedItem("accuracy").nodeValue)
};
Mscrm.StatementNodeActions.getName = function(node) { return node.attributes.getNamedItem("name").nodeValue };
Mscrm.StatementNodeActions.getResponseFormattedValue = function(node) {
    return node.attributes.getNamedItem("formattedvalue").nodeValue
};
Mscrm.StatementNodeActions.getResponseRawValue = function(node) { return XUI.Xml.GetText(node) };
Mscrm.StatementNodeActions.getHashValue = function(interactionActivity) {
    var $v_0 = XUI.Xml.SelectSingleNode(interactionActivity, "Hash", null),
        $v_1 = !IsNull($v_0) ? XUI.Xml.XMLSerializer.serializeToString($v_0) : "";
    return $v_1
};
Mscrm.StatementNodeActions
    .createCurrentWorkflowContext = function(workflowActivationId,
        originatingSessionId,
        currentSessionId,
        workflowStateXml,
        primaryEntityId,
        primaryEntityTypeCode) {
        var $v_0 = "<InteractiveWorkflowContext>{0}</InteractiveWorkflowContext>",
            $v_1 = '<WorkflowActivationId value="{0}" />',
            $v_2 = '<OriginatingWorkflowInstanceId value="{0}" />',
            $v_3 = '<WorkflowInstanceId value="{0}" />',
            $v_4 = '<WorkflowStateXml value="{0}" />',
            $v_5 = '<PrimaryEntityId value="{0}" />',
            $v_6 = '<PrimaryEntityTypeCode value="{0}" />',
            $v_7 = new Sys.StringBuilder;
        $v_7.append(String.format($v_1, CrmEncodeDecode.CrmXmlAttributeEncode(workflowActivationId)));
        $v_7.append(String.format($v_2, CrmEncodeDecode.CrmXmlAttributeEncode(originatingSessionId)));
        $v_7.append(String.format($v_3, CrmEncodeDecode.CrmXmlAttributeEncode(currentSessionId)));
        $v_7.append(String.format($v_4, CrmEncodeDecode.CrmXmlAttributeEncode(workflowStateXml)));
        $v_7.append(String.format($v_5, CrmEncodeDecode.CrmXmlAttributeEncode(primaryEntityId)));
        $v_7.append(String.format($v_6, CrmEncodeDecode.CrmXmlAttributeEncode(primaryEntityTypeCode.toString())));
        return String.format($v_0, $v_7.toString())
    };
Mscrm.StatementNodeActions.getWorkflowActivationId = function(contextRoot) {
    return Mscrm.StatementNodeActions.$s(XUI.Xml.SelectSingleNode(contextRoot, "WorkflowActivationId", null), "value")
};
Mscrm.StatementNodeActions.getWorkflowInstanceId = function(contextRoot) {
    return Mscrm.StatementNodeActions.$s(XUI.Xml.SelectSingleNode(contextRoot, "WorkflowInstanceId", null), "value")
};
Mscrm.StatementNodeActions.$s = function($p0, $p1) {
    if (null !== $p0 && null !== $p0.attributes.getNamedItem($p1)) return $p0.attributes.getNamedItem($p1).nodeValue;
    return null
};
Mscrm.StatementNodeActions.allowBack = function(node) { return Mscrm.StatementNodeActions.$L(node, "AllowBack") };
Mscrm.StatementNodeActions.$L = function($p0, $p1) {
    if (!IsNull(XUI.Xml.SelectSingleNode($p0, $p1, null)))
        return XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, $p1, null)).trim();
    return ""
};
Mscrm.StatementNodeActions.$t = function($p0, $p1) {
    var $v_0 = XUI.Xml.SelectSingleNode($p0, $p1, null);
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Xml.DomUtils.GetFirstChild($v_0);
        if (!IsNull($v_1)) return CrmEncodeDecode.CrmXmlDecode(XUI.Xml.XMLSerializer.serializeToString($v_1));
        return XUI.Xml.GetText($v_0)
    }
    return ""
};
Mscrm.StatementNodeActions.getLightweightWorkflowContextXml = function(isBackNavigated, workflowContextXml) {
    if (isBackNavigated) return workflowContextXml;
    else {
        var $v_0 = XUI.Xml.LoadXml(workflowContextXml),
            $v_1 = XUI.Xml.DomUtils.GetFirstChild($v_0),
            $v_2 = XUI.Xml.SelectSingleNode($v_1, "WorkflowStateXml", null);
        $v_2.attributes.getNamedItem("value").nodeValue = "";
        return XUI.Xml.XMLSerializer.serializeToString($v_1)
    }
};
Mscrm.GlobalVars.registerClass("Mscrm.GlobalVars");
Mscrm.ScriptSessionStage.registerClass("Mscrm.ScriptSessionStage", Mscrm.CrmUIControl);
Mscrm.ScriptGroupControl.registerClass("Mscrm.ScriptGroupControl", Mscrm.CrmUIControl);
Mscrm.ScriptHintControl.registerClass("Mscrm.ScriptHintControl", Mscrm.CrmUIControl);
Mscrm.ScriptFrame.registerClass("Mscrm.ScriptFrame");
Mscrm.ResponseControlTypes.registerClass("Mscrm.ResponseControlTypes");
Mscrm.ResponseMetadataType.registerClass("Mscrm.ResponseMetadataType");
Mscrm.ScriptRegularExpression.registerClass("Mscrm.ScriptRegularExpression");
Mscrm.ScriptCacheManager.registerClass("Mscrm.ScriptCacheManager");
Mscrm.PromptResponseFrame.registerClass("Mscrm.PromptResponseFrame");
Mscrm.ScriptActions.registerClass("Mscrm.ScriptActions");
Mscrm.InteractiveWorkflowClientControl.registerClass("Mscrm.InteractiveWorkflowClientControl");
Mscrm.InteractiveWorkflowClientDateTimeControl
    .registerClass("Mscrm.InteractiveWorkflowClientDateTimeControl", Mscrm.InteractiveWorkflowClientControl);
Mscrm.InteractiveWorkflowClientTextControl.registerClass("Mscrm.InteractiveWorkflowClientTextControl",
    Mscrm.InteractiveWorkflowClientControl);
Mscrm.InteractiveWorkflowClientTextBoxControl.registerClass("Mscrm.InteractiveWorkflowClientTextBoxControl",
    Mscrm.InteractiveWorkflowClientTextControl);
Mscrm.InteractiveWorkflowClientTextAreaControl
    .registerClass("Mscrm.InteractiveWorkflowClientTextAreaControl", Mscrm.InteractiveWorkflowClientTextControl);
Mscrm.InteractiveWorkflowClientNoneControl.registerClass("Mscrm.InteractiveWorkflowClientNoneControl",
    Mscrm.InteractiveWorkflowClientControl);
Mscrm.InteractiveWorkflowClientRadioControl.registerClass("Mscrm.InteractiveWorkflowClientRadioControl",
    Mscrm.InteractiveWorkflowClientControl);
Mscrm.InteractiveWorkflowClientSelectControl.registerClass("Mscrm.InteractiveWorkflowClientSelectControl",
    Mscrm.InteractiveWorkflowClientControl);
Mscrm.InteractiveWorkflowClientLookupControl.registerClass("Mscrm.InteractiveWorkflowClientLookupControl",
    Mscrm.InteractiveWorkflowClientControl);
Mscrm.InteractiveWorkflowClientControlFactory.registerClass("Mscrm.InteractiveWorkflowClientControlFactory");
Mscrm.Page.registerClass("Mscrm.Page");
Mscrm.InteractionActivityObject.registerClass("Mscrm.InteractionActivityObject");
Mscrm.StatementNodeActions.registerClass("Mscrm.StatementNodeActions");
Mscrm.GlobalVars.$5 = null;
Mscrm.GlobalVars.$X = null;
Mscrm.GlobalVars.$C = false;
Mscrm.ResponseControlTypes.none = "None";
Mscrm.ResponseControlTypes.picklist = "PickList";
Mscrm.ResponseControlTypes.radio = "Radio";
Mscrm.ResponseControlTypes.textbox = "Textbox";
Mscrm.ResponseControlTypes.multilineText = "MultilineText";
Mscrm.ResponseControlTypes.lookup = "Lookup";
Mscrm.ResponseControlTypes.dateOnly = "DateOnly";
Mscrm.ResponseControlTypes.dateTime = "DateTime";
Mscrm.ResponseMetadataType.dt_int = "int";
Mscrm.ResponseMetadataType.dt_float = "float";
Mscrm.ResponseMetadataType.dt_string = "string";
Mscrm.ResponseMetadataType.dt_lookup = "lookup";
Mscrm.ResponseMetadataType.dt_dateonly = "dateonly";
Mscrm.ResponseMetadataType.dt_datetime = "datetime";
Mscrm.InteractiveWorkflowClientControl
    .interactionActivityResultTemplate =
    '<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}"/>';
Mscrm.InteractiveWorkflowClientDateTimeControl
    .interactionActivityResultTemplate =
    '<interactionActivity name="{0}" type="{1}" value="{2}" label="{3}" LogResponse="{4}" promptText = "{5}" responseContainerType="{6}" isResponseStatic="{7}" userTimeZone="{8}"/>'