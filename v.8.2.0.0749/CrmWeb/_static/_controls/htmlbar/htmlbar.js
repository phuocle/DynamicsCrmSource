Type.registerNamespace("Mscrm");
Mscrm.FormatEventArgs = function(command, commandValue) {
    Mscrm.FormatEventArgs.initializeBase(this);
    this.$H_1 = command;
    this.$I_1 = commandValue
};
Mscrm.FormatEventArgs.prototype = {
    $H_1: null,
    $I_1: null,
    $F_1: false,
    get_command: function() { return this.$H_1 },
    get_commandValue: function() { return this.$I_1 },
    get_isHandled: function() { return this.$F_1 },
    set_isHandled: function(value) {
        this.$F_1 = value;
        return value
    }
};
Mscrm.HtmlBarControl = function(element) {
    this.$$d_$N_3 = Function.createDelegate(this, this.$N_3);
    this.$$d_$Y_3 = Function.createDelegate(this, this.$Y_3);
    this.$$d_$R_3 = Function.createDelegate(this, this.$R_3);
    this.$$d_$S_3 = Function.createDelegate(this, this.$S_3);
    this.$$d_$T_3 = Function.createDelegate(this, this.$T_3);
    this.$J_3 = [
        ["#ffffcc", "#ffff99", "#ffff66", "#ffff33", "#ffff00", "#cccc00", "#999900", "#666600", "#333300"],
        ["#ffccff", "#ff99ff", "#ff66ff", "#ff33ff", "#ff00ff", "#cc00cc", "#990099", "#660066", "#330033"],
        ["#ccffff", "#99ffff", "#66ffff", "#33ffff", "#00ffff", "#00cccc", "#009999", "#006666", "#003333"],
        ["#ffcccc", "#ff9999", "#ff6666", "#ff3333", "#ff0000", "#cc0000", "#990000", "#660000", "#330000"],
        ["#ccffcc", "#99ff99", "#66ff66", "#33ff33", "#00ff00", "#00cc00", "#009900", "#006600", "#003300"],
        ["#ccccff", "#9999ff", "#6666ff", "#3333ff", "#0000ff", "#0000cc", "#000099", "#000066", "#000033"],
        ["#ffffff", "#cccccc", "#999999", "#666666", "#333333", "#ffcc00", "#ff9900", "#ff6600", "#ff3300"],
        ["#000000", "#ccff00", "#99ff00", "#66ff00", "#33ff00", "#00ccff", "#0099ff", "#0066ff", "#0033ff"]
    ];
    Mscrm.HtmlBarControl.initializeBase(this, [element])
};
Mscrm.HtmlBarControl.prototype = {
    $4_3: null,
    $0_3: null,
    $E_3: null,
    $7_3: null,
    $8_3: null,
    $5_3: null,
    $1_3: null,
    $2_3: null,
    $3_3: null,
    $9_3: false,
    $C_3: 0,
    get_$A_3: function() {
        if (!IsNull(this.$3_3)) return this.$3_3;
        var $v_0 = window.document.getElementById("descriptionIFrame");
        if (IsNull($v_0)) $v_0 = window.document.getElementById("WREditorIFrame");
        if (!IsNull($v_0)) this.$3_3 = $v_0.contentWindow.document.body;
        else {
            this.$3_3 = window.document.getElementById("ContentEditor");
            if (IsNull(this.$3_3)) this.$3_3 = window.document.getElementById("TemplateEditor")
        }
        return this.$3_3
    },
    add_formatChange: function(value) { this.get_events().addHandler("HtmlBarOnSaveEvent", value) },
    remove_formatChange: function(value) { this.get_events().removeHandler("HtmlBarOnSaveEvent", value) },
    $D_3: null,
    get_targetFrameId: function() { return this.$D_3 },
    set_targetFrameId: function(value) {
        this.$D_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = [];
        $v_0[0] = this.get_element();
        var $v_1 = null;
        do {
            $v_1 = $v_0.pop();
            var $$t_3 = this;
            XUI.Html.DomUtils.ForEachChild($v_1,
                function($p1_0) {
                    if ($p1_0.nodeType === 1) {
                        $p1_0.nodeName.toUpperCase() !== "TEXTAREA" && $$t_3.$X_3($p1_0);
                        XUI.Html.DomUtils.HasChildElements($p1_0) && $v_0.push($p1_0)
                    }
                    return false
                })
        } while ($v_0.length > 0);
        $v_0 = null;
        this.$E_3 = window.LOCID_HTMLBAR_DEFAULTFONTS.split(",");
        $addHandler(this.get_element(), "mouseover", this.$$d_$T_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$S_3);
        $addHandler(this.get_element(), "mousedown", this.$$d_$R_3);
        this.$C_3 = window.document.body.clientWidth;
        $addHandler(window, "resize", this.$$d_$Y_3);
        window.setTimeout(this.$$d_$N_3, 2)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mouseover", this.$$d_$T_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$S_3);
        $removeHandler(this.get_element(), "mousedown", this.$$d_$R_3);
        $removeHandler(window, "resize", this.$$d_$Y_3);
        var $v_0 = this.get_events().getHandler("HtmlBarOnSaveEvent");
        !IsNull($v_0) && this.remove_formatChange($v_0);
        this.$7_3 && this.$7_3.dispose();
        this.$8_3 && this.$8_3.dispose();
        this.$5_3 && this.$5_3.dispose();
        if (!IsNull(this.$1_3)) {
            window.parent.$removeHandler(window.parent.document.body, "mousedown", this.$1_3);
            !IsNull(this.$2_3) && $removeHandler(this.$2_3, "mousedown", this.$1_3)
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    htmlExecute: function(commandToExecute, commandValue) {
        !IsNull(window.self.saveEditorSelection) && window.self.saveEditorSelection();
        var $v_0 = window.document;
        if (!isNullOrEmptyString(this.$D_3)) {
            var $v_5 = $get(this.$D_3);
            $v_0 = $v_5.contentWindow.document
        }
        var $v_1;
        try {
            $v_1 = $v_0.activeElement
        } catch ($$e_5) {
            $v_1 = $v_0.body
        }
        var $v_2 = $v_1.getAttribute("applyformat");
        if (!IsNull($v_2) && !Mscrm.Utilities.parseBoolean($v_2)) return;
        if (IsNull(commandValue)) commandValue = null;
        var $v_3 = new Mscrm.FormatEventArgs(commandToExecute, commandValue);
        this.$Z_3($v_3);
        if ($v_3.$F_1) return;
        var $v_4 = false;
        if (!IsNull(window.self.crmExecuteCommand))
            $v_4 = window.self.crmExecuteCommand(commandToExecute, commandValue);
        !$v_4 && this.executeCommandAndHandleAlignmentIssue($v_0, commandToExecute, false, commandValue);
        (commandToExecute === "insertUnorderedList" ||
                commandToExecute === "insertOrderedList" ||
                commandToExecute === "indent" ||
                commandToExecute === "outdent") &&
            this.$O_3()
    },
    $O_3: function() {
        if (IsNull(this.get_$A_3())) return;
        for (var $v_0 = Mscrm.CrmUri.create(window.location.search),
            $v_1 = this.get_$A_3().getElementsByTagName("UL"),
            $v_2 = this.get_$A_3().getElementsByTagName("OL"),
            $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++) {
            var $v_4 = $v_1[$v_3];
            if (isNullOrEmptyString($v_4.className))
                if ($v_0.get_query()["etc"] == "127")
                    $v_4.className = "Articlesedit_article_div_secEdit RTE_list_style_position";
                else $v_4.className = "RTE_list_style_position"
        }
        for (var $v_5 = 0; $v_5 < $v_2.length; $v_5++) {
            var $v_6 = $v_2[$v_5];
            if (isNullOrEmptyString($v_6.className)) $v_6.className = "RTE_list_style_position"
        }
    },
    $P_3: function() {
        if (IsNull(this.get_$A_3())) return;
        for (var $v_0 = this.get_$A_3().getElementsByTagName("UL"),
            $v_1 = this.get_$A_3().getElementsByTagName("OL"),
            $v_2 = [],
            $v_4 = 0;
            $v_4 < $v_0.length;
            $v_4++) $v_2[$v_2.length] = $v_0[$v_4];
        for (var $v_5 = 0; $v_5 < $v_1.length; $v_5++) $v_2[$v_2.length] = $v_1[$v_5];
        for (var $v_3 = new RegExp("\\S"), $v_6 = 0; $v_6 < $v_2.length; $v_6++) {
            var $v_7 = $v_2[$v_6];
            if (!$v_3.test($v_7.innerHTML)) $v_7.style.display = "none";
            else {
                $v_7.style.display = "";
                var $$t_B = this;
                XUI.Html.DomUtils.ForEachChild($v_7,
                    function($p1_0) {
                        var $v_8 = XUI.Html.DomUtils.GetFirstChild($p1_0);
                        if (IsNull($v_8) || IsNull($v_8.tagName)) return false;
                        do {
                            var $v_9 = $v_8.getAttribute("align");
                            if (!(isNullOrEmptyString($v_9) ||
                                !($v_9 === "center" || $v_9 === "left" || $v_9 === "right"))) {
                                $p1_0.parentNode.style.textAlign = $v_9;
                                $v_8.removeAttribute("align");
                                return false
                            }
                            $v_8 = XUI.Html.DomUtils.GetFirstChild($v_8);
                            if (IsNull($v_8) || IsNull($v_8.tagName)) break;
                            if ("DIV" === $v_8.tagName.toUpperCase()) $v_8.style.display = "inline"
                        } while (true);
                        return false
                    })
            }
        }
    },
    $6_3: null,
    get_editableControl: function() { return this.$6_3 },
    set_editableControl: function(value) {
        this.$6_3 = value;
        return value
    },
    executeCommandAndHandleAlignmentIssue: function(targetDocument, command, displayUserInterface, commandValue) {
        switch (command) {
        case "justifyLeft":
        case "justifyCenter":
        case "justifyRight":
        case "insertUnorderedList":
        case "insertOrderedList":
            try {
                targetDocument.execCommand(command, displayUserInterface, commandValue)
            } catch ($v_0) {
                var $v_1 = $v_0.result;
                if ($v_1 === 2147500037) {
                    if (!IsNull(this.$6_3)) {
                        var $v_2 = targetDocument.createElement("DIV");
                        this.$6_3.insertBefore($v_2, XUI.Html.DomUtils.GetFirstChild(this.$6_3));
                        targetDocument.execCommand(command, displayUserInterface, commandValue);
                        $v_2.parentNode.removeChild($v_2)
                    }
                } else throw $v_0
            }
            Mscrm.Utilities.isIE() && this.$P_3();
            break;
        default:
            targetDocument.execCommand(command, displayUserInterface, commandValue);
            break
        }
    },
    handlePopupClick: function(commandName, sourceElement) {
        var $v_0 = null;
        while (!IsNull(sourceElement) && sourceElement.tagName.toUpperCase() !== "TD"
        ) sourceElement = sourceElement.parentNode;
        switch (commandName) {
        case "fontname":
            $v_0 = sourceElement.style.fontFamily;
            break;
        case "fontsize":
            $v_0 = sourceElement.getAttribute("val");
            break;
        case "ForeColor":
            $v_0 = sourceElement.getAttribute("data-color");
            break
        }
        this.htmlExecute(commandName, $v_0);
        this.$G_3(this.$4_3);
        if (!IsNull(this.$0_3)) {
            this.$0_3.hide();
            this.$0_3 = null
        }
    },
    $Z_3: function($p0) {
        var $v_0 = this.get_events().getHandler("HtmlBarOnSaveEvent");
        !IsNull($v_0) && $v_0(this, $p0)
    },
    $M_3: function($p0) {
        while (!IsNull($p0) && $p0.tagName.toUpperCase() !== "TD") {
            if ($p0.tagName.toUpperCase() === "BODY") {
                $p0 = null;
                break
            }
            $p0 = $p0.parentNode
        }
        if (IsNull($p0)) return null;
        if ($p0.className.indexOf("htmlBtn") >= 0) return $p0;
        return null
    },
    $G_3: function($p0) {
        if (!IsNull($p0)) {
            $p0.style.border = "1px solid transparent";
            $p0.style.backgroundColor = ""
        }
        if (!IsNull(this.$1_3)) {
            window.parent !== window.self &&
                window.parent.$removeHandler(window.parent.document.body, "mousedown", this.$1_3);
            window.top !== window.self && window.top.$removeHandler(window.top.document.body, "mousedown", this.$1_3);
            !IsNull(this.$2_3) && $removeHandler(this.$2_3, "mousedown", this.$1_3);
            this.$1_3 = null
        }
    },
    $T_3: function($p0) {
        var $v_0 = this.$M_3($p0.target);
        if (!IsNull($v_0)) {
            $v_0.style.border = "1px solid #F1C43F";
            $v_0.style.backgroundColor = "FDEEB3";
            if (!IsNull(this.$4_3) && this.$4_3.getAttribute("dropdown") === "true" && $v_0 !== this.$4_3) {
                if (!IsNull(this.$0_3)) {
                    this.$0_3.hide();
                    this.$0_3 = null
                }
                this.$G_3(this.$4_3)
            }
            this.$4_3 = $v_0
        }
    },
    $S_3: function($p0) {
        var $v_0 = this.$M_3($p0.target);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.getAttribute("dropdown");
            if ($v_1 !== "true" || IsNull(this.$0_3)) {
                this.$G_3($v_0);
                this.$4_3 = null
            }
        }
    },
    $L_3: function($p0) {
        var $v_0 = this.$0_3;
        if (!IsNull(this.$0_3)) {
            $v_0.show();
            var $v_1 = this, $$t_5 = this;
            this.$1_3 = function($p1_0) {
                $v_1.$G_3($p0);
                $v_0.hide()
            };
            window.parent !== window.self &&
                window.parent.$addHandler(window.parent.document.body, "mousedown", this.$1_3);
            window.top !== window.self && window.top.$addHandler(window.top.document.body, "mousedown", this.$1_3);
            if (IsNull(this.$2_3)) {
                var $v_2 = $get("descriptionIFrame");
                if (!IsNull($v_2)) this.$2_3 = $v_2.contentWindow.document.body
            }
            !IsNull(this.$2_3) && $addHandler(this.$2_3, "mousedown", this.$1_3)
        }
    },
    $K_3: function($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = $p5.createElement("div");
        $p0.appendChild($v_0);
        $v_0.style.position = "relative";
        $v_0.style.width = "0px";
        $v_0.style.height = "0px";
        var $v_1 = $p5.createElement("div");
        $v_0.appendChild($v_1);
        $v_1.style.border = "1px solid #999999";
        var $v_2 = Mscrm.Dialog.createDialog($v_1);
        if (!IsNull($v_2)) {
            $v_2.set_isModal(false);
            $v_2.set_top(5);
            $v_2.set_left(window.LOCID_UI_DIR === "RTL" ? $p0.offsetWidth : 0);
            $v_2.set_shiftHorizontal(false);
            $v_2.set_minHeight($p3);
            $v_2.set_isLoading(false);
            $v_2.set_enableShadow(false);
            $v_2.set_body($p1);
            $v_2.set_width($p2);
            $v_2.set_dialogId(this.get_element().id + $p4);
            $v_2.set_neverGrabFocus(true)
        }
        if (Mscrm.Utilities.isIosDevice()) $v_0.style.zIndex = $v_2.get_zIndex() + 3;
        return $v_2
    },
    $V_3: function($p0, $p1) {
        if (IsNull(this.$7_3)) {
            for (var $v_0 = Mscrm.Utilities.get_isLeftToRight() ? "left" : "right",
                $v_1 = String
                    .format("<table unselectable='on' class='htmlBarUnselectable' style='position:relative;font-size:14px;text-align:{0};width:140px;height:160px;border: 0px;cursor:pointer;' cellpadding='3' cellspacing='0'>", $v_0),
                $v_5 = 0;
                $v_5 < this.$E_3.length;
                ++$v_5)
                $v_1 += String
                    .format("<tr unselectable='on' class='htmlBarUnselectable'><td class='htmlFontCell htmlBarUnselectable' unselectable='on' style='font-family:{0}'><a class='htmlAnchorStyle' selectEnable='true' onclick='return false;' href='javascript:onclick();' target='_self'>{1}</a></td></tr>", CrmEncodeDecode.CrmHtmlAttributeEncode(this.$E_3[$v_5]), CrmEncodeDecode.CrmHtmlEncode(this.$E_3[$v_5]));
            $v_1 += "</table>";
            var $v_2 = $p0.createElement("div");
            $v_2.innerHTML = $v_1;
            var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2), $v_4 = this, $$t_9 = this;
            $addHandler($v_3, "click", function($p1_0) { $v_4.handlePopupClick("fontname", $p1_0.target) });
            this.$7_3 = this.$K_3($p1, $v_3, 140, 160, "fontName", $p0)
        }
        this.$0_3 = this.$7_3
    },
    $W_3: function($p0, $p1) {
        if (IsNull(this.$8_3)) {
            for (var $v_0 = Mscrm.Utilities.get_isLeftToRight() ? "left" : "right",
                $v_1 = String
                    .format("<table unselectable='on' class='htmlBarUnselectable' style='position:relative;font-size:14px;text-align:{0};width:120px;height:170px;border: 0px;cursor:pointer;' cellpadding='3' cellspacing='0'>", $v_0),
                $v_2 = 0,
                $v_9 = 0;
                $v_9 < 6;
                $v_9++) {
                $v_2 = $v_9 + $v_9 + 8;
                var $v_A = String.format(LOCID_HTMLBAR_FONT_SIZE, $v_2);
                $v_1 += String
                    .format("<tr unselectable='on' class='htmlBarUnselectable'><td unselectable='on' class='htmlFontCell htmlBarUnselectable' style='font-family:verdana;font-size:{0}' val='{1}'><a class='htmlAnchorStyle' selectEnable='true' onclick='return false;' href='javascript:onclick();' target='_self'>{2}</a></td></tr>", $v_2 + "pt", $v_9 + 1, $v_A)
            }
            $v_1 += "</table>";
            var $v_3 = $p0.createElement("div");
            $p0.body.appendChild($v_3);
            $v_3.style.fontSize = "" + $v_2 + "pt";
            $v_3.style.position = "absolute";
            $v_3.style.left = "-1000";
            $v_3.style.top = "-1000";
            $v_3.innerHTML = String.format(LOCID_HTMLBAR_FONT_SIZE, $v_2);
            var $v_4 = $v_3.clientWidth;
            $p0.body.removeChild($v_3);
            $v_3 = null;
            var $v_5 = $v_4 < 90 ? 120 : $v_4 + 30, $v_6 = $p0.createElement("div");
            $v_6.innerHTML = $v_1;
            var $v_7 = XUI.Html.DomUtils.GetFirstChild($v_6), $v_8 = this, $$t_E = this;
            $addHandler($v_7, "click", function($p1_0) { $v_8.handlePopupClick("fontsize", $p1_0.target) });
            this.$8_3 = this.$K_3($p1, $v_7, $v_5, 170, "fontSize", $p0)
        }
        this.$0_3 = this.$8_3
    },
    $U_3: function($p0, $p1) {
        if (IsNull(this.$5_3)) {
            for (var $v_0 =
                         "<table unselectable='on' class='htmlBarUnselectable' style='font-size:14px;width:150px;height:141px;border: 0px;cursor:pointer;border-collapse:collapse;' cellpadding='0' cellspacing='0'>",
                $v_4 = 0;
                $v_4 < this.$J_3.length;
                $v_4++) {
                $v_0 += "<tr unselectable='on' class='htmlBarUnselectable'>";
                for (var $v_5 = this
                             .$J_3[$v_4],
                    $v_6 = 0;
                    $v_6 < $v_5.length;
                    $v_6++)
                    $v_0 += String
                        .format("<td unselectable='on' class='htmlBarUnselectable' style='background-color:{0}' data-color='{0}'><a class='htmlAnchorStyle' selectEnable='true' onclick='return false;' href='javascript:onclick();' target='_self'>&nbsp;</a></td>", $v_5[$v_6]);
                $v_0 += "</tr>"
            }
            $v_0 += "</table>";
            var $v_1 = $p0.createElement("div");
            $v_1.innerHTML = $v_0;
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1), $v_3 = this, $$t_A = this;
            $addHandler($v_2, "click", function($p1_0) { $v_3.handlePopupClick("ForeColor", $p1_0.target) });
            this.$5_3 = this.$K_3($p1, $v_2, 150, 141, "foreColor", $p0)
        }
        this.$0_3 = this.$5_3
    },
    $R_3: function($p0) {
        var $v_0 = this.$M_3($p0.target);
        $p0.stopPropagation();
        if (!IsNull($v_0) && $v_0.getAttribute("dropdown") === "true") {
            var $v_1 = this.get_element().ownerDocument;
            switch ($v_0.getAttribute("command")) {
            case "fontName":
                this.$V_3($v_1, $v_0);
                this.$L_3($v_0);
                break;
            case "fontSize":
                this.$W_3($v_1, $v_0);
                this.$L_3($v_0);
                break;
            case "foreColor":
                this.$U_3($v_1, $v_0);
                this.$L_3($v_0);
                break
            }
        }
    },
    $X_3: function($p0) {
        $p0.setAttribute("unselectable", "on");
        Sys.UI.DomElement.addCssClass($p0, "htmlBarUnselectable")
    },
    $Y_3: function($p0) {
        var $v_0 = window.document.body.clientWidth, $v_1 = 5;
        if ($v_0 >= this.$C_3 - $v_1 && $v_0 < this.$C_3 + $v_1) return;
        this.$C_3 = $v_0;
        this.$N_3()
    },
    $N_3: function() {
        if (!IsNull(this.get_element())) {
            var $v_0 = this.$Q_3(),
                $v_1 = Mscrm.Utilities.getChildElementsByClassName(this.get_element(), "htmlBtnHideable", false);
            if (!this.$9_3 && this.get_element().offsetWidth < $v_0 + 25) {
                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) $v_1[$v_2].style.display = "none";
                this.$9_3 = true
            } else if (this.$9_3 && this.get_element().offsetWidth >= $v_0) {
                var $v_3 = this.get_element().offsetWidth - $v_0;
                this.$9_3 = false;
                for (var $v_4 = 0; $v_4 < $v_1.length && $v_3 > 0; $v_4++) {
                    $v_1[$v_4].style.display = "inline";
                    $v_3 -= $v_1[$v_4].offsetWidth;
                    if ($v_3 < 0) {
                        $v_1[$v_4].style.display = "none";
                        this.$9_3 = true
                    }
                }
            }
        }
    },
    $Q_3: function() {
        var $v_0 = 0;
        if (IsNull(this.get_element())) return $v_0;
        for (var $v_1 = this.get_element().getElementsByTagName("TD"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            if (!IsNull($v_3.getAttribute("ignoreforresize")) && $v_3.getAttribute("ignoreforresize")) continue;
            $v_0 += $v_3.offsetWidth
        }
        return $v_0
    }
};
Mscrm.FormatEventArgs.registerClass("Mscrm.FormatEventArgs", Sys.EventArgs);
Mscrm.HtmlBarControl.registerClass("Mscrm.HtmlBarControl", Mscrm.CrmUIControl)