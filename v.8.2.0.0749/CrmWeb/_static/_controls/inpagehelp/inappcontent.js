Type.registerNamespace("Mscrm");
Mscrm.InAppContent = function() {
    this.$$d_$A_2 = Function.createDelegate(this, this.$A_2);
    this.$$d_$2_2 = Function.createDelegate(this, this.$2_2);
    this.$$d_$8_2 = Function.createDelegate(this, this.$8_2);
    this.$$d_$9_2 = Function.createDelegate(this, this.$9_2);
    this.$$d_$6_2 = Function.createDelegate(this, this.$6_2);
    this.$$d_$7_2 = Function.createDelegate(this, this.$7_2);
    Mscrm.InAppContent.initializeBase(this)
};
Mscrm.InAppContent.prototype = {
    $0_2: null,
    initialize: function() {
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        this
            .$0_2 =
            "<TABLE width='100%' height='100%' style='font-size:11px;font-family:Segoe UI, Tahoma, Arial'><TR><TD ID='loadingMessage' align='center'><IMG id='imgLoading' alt='{0}' src='" + window.CDNURL + "/_imgs/advfind/progress.gif'><br>{0}</TD></TR></TABLE>";
        this.$0_2 = String.format(this.$0_2, CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PAGELOADING_MSG));
        var $v_0 = $get("inPageHelpIframe");
        $addHandler($v_0, "load", this.$$d_$7_2);
        $v_0.contentWindow.document.write(this.$0_2);
        $v_0.contentWindow.document.close();
        var $v_1 = $get("inPageHelpCollapseDiv");
        $addHandler($v_1, "click", this.$$d_$6_2);
        $addHandler($v_1, "mouseover", this.$$d_$9_2);
        $addHandler($v_1, "mouseout", this.$$d_$8_2);
        !Mscrm.PageManager.isFlatUIPage() && window.setTimeout(this.$$d_$2_2, 20)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIComponent.prototype.dispose.call(this);
        var $v_0 = $get("inPageHelpIframe");
        $removeHandler($v_0, "load", this.$$d_$7_2);
        var $v_1 = $get("inPageHelpCollapseDiv");
        $removeHandler($v_1, "click", this.$$d_$6_2);
        $removeHandler($v_1, "mouseover", this.$$d_$9_2);
        $removeHandler($v_1, "mouseout", this.$$d_$8_2)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIComponent.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 74:
            window.setTimeout(this.$$d_$2_2, 20);
            break
        }
        return null
    },
    $2_2: function() {
        var $v_0 = $get("inPageHelpIframe"), $v_1 = this.$1_2($v_0);
        if (IsNull($v_0
                .getAttribute("state")) &&
            Mscrm.Utilities.parseBoolean($v_1.getAttribute("expanded").toString())) {
            $v_0.src = $v_1.getAttribute("src").toString();
            $v_0.setAttribute("state", "loaded")
        }
    },
    $7_2: function($p0) {
        var $v_0 = $get("inPageHelpIframe");
        if (!IsNull($v_0)) {
            var $v_1 = null;
            try {
                $v_1 = $v_0.contentWindow.location.href
            } catch ($$e_3) {
            }
            if (!IsNull($v_1)) {
                var $v_2 = $v_0.contentWindow.document;
                if (this.$C_2($v_1)) {
                    this.$5_2($v_2, "div_column1_item1");
                    this.$5_2($v_2, "div_column1_item2")
                }
                if (!Mscrm.Utilities.isIE())
                    for (var $v_5 = 1; $v_5 <= 3; $v_5++) {
                        var $v_6 = null;
                        try {
                            $v_6 = $v_2.getElementById("ec" + $v_5).children
                        } catch ($$e_7) {
                        }
                        if (!IsNull($v_6))
                            for (var $v_7 = 1; $v_7 <= $v_6.length; $v_7++)
                                try {
                                    var $v_8 = $v_2.getElementById("column" + $v_5 + "_item" + $v_7),
                                        $v_9 = $v_8.getAttribute("onclick").toString(),
                                        $v_A = $v_8.getAttribute("onkeypress").toString();
                                    if (!IsNull($v_9) && $v_9.indexOf("ExecuteAction") !== -1) {
                                        $v_8.setAttribute("onclick", "");
                                        $v_8.setAttribute("onclick", this.$3_2($v_9, "onclick"))
                                    }
                                    if (!IsNull($v_A) && $v_A.indexOf("ExecuteAction") !== -1) {
                                        $v_8.setAttribute("onkeypress", "");
                                        $v_8.setAttribute("onkeypress", this.$3_2($v_A, "onkeypress"))
                                    }
                                } catch ($$e_C) {
                                }
                    }
                var $v_3 = $v_2.getElementsByTagName("head")[0], $v_4 = $v_3.ownerDocument.createElement("script");
                $v_3.appendChild($v_4);
                $v_4.setAttribute("type", "text/javascript");
                $v_4.setAttribute("src", "/_static/_controls/inpagehelp/inpagehelpiframe.js");
                attachWindowOnUnload(this.$$d_$A_2, $v_0.contentWindow)
            }
        }
    },
    $B_2: function() {
        return window.IS_OUTLOOK_CLIENT || window.IS_OUTLOOK_LAPTOP_CLIENT || window.IS_OUTLOOK_14_CLIENT
    },
    $C_2: function($p0) {
        if (!this.$B_2() || window.CLIENT_MAJOR_VERSION > 4) return false;
        $p0 = $p0.toLowerCase();
        if ($p0
            .endsWith("contacts_outlook_user_visor.html") ||
            $p0.endsWith("contacts_outlook_admin_visor.html")) return true;
        return false
    },
    $5_2: function($p0, $p1) {
        var $v_0 = $p0.getElementById($p1);
        !IsNull($v_0) && $v_0.parentNode.removeChild($v_0)
    },
    $9_2: function($p0) { this.$4_2($p0, true) },
    $8_2: function($p0) { this.$4_2($p0, false) },
    $A_2: function($p0) {
        var $v_0 = $get("inPageHelpIframe");
        if (!IsNull($v_0)) {
            detachWindowOnUnload(this.$$d_$A_2, $v_0.contentWindow);
            $v_0.contentWindow.document.body.innerHTML = ""
        }
    },
    $3_2: function($p0, $p1) {
        var $v_0 = false;
        switch ($p1) {
        case "onclick":
            if ($p0.indexOf("event") === -1) $v_0 = true;
            break;
        case "onkeypress":
            if ($p0.indexOf("event", $p0.indexOf("{")) === -1) $v_0 = true;
            break
        }
        if ($v_0) {
            $p0 = $p0.slice(0, $p0.lastIndexOf(")"));
            $p0 += ", event); return false;"
        }
        return $p0
    },
    $6_2: function($p0) {
        var $v_0 = this.$1_2($p0.target),
            $v_1 = $get("inPageHelpIframe"),
            $v_2 = $get("inPageHelpCollapseDiv"),
            $v_3 = $get("inPageHelpCollapseImage"),
            $v_4;
        if (Mscrm.Utilities.parseBoolean($v_0.getAttribute("expanded").toString())) {
            $v_0.setAttribute("expanded", "0");
            $v_1.style.display = "none";
            $v_2.className = "visor-sliver-dn";
            $v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/helpvisor/visorclose.png"));
            $v_2.title = window.LOCID_CLICK_TO_EXPAND;
            $v_3.alt = window.LOCID_CLICK_TO_EXPAND;
            $v_0.style.borderWidth = "0px";
            document.cookie = window.INPAGEHELP_COOKIE_NAME + "=1; expires = Tue, 01-Jan-2999 00:00:00 GMT"
        } else {
            $v_0.setAttribute("expanded", "1");
            this.$2_2();
            $v_1.style.display = "block";
            $v_2.className = "visor-sliver-up";
            $v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/helpvisor/visoropen.png"));
            $v_2.title = window.LOCID_CLICK_TO_COLLAPSE;
            $v_3.alt = window.LOCID_CLICK_TO_COLLAPSE;
            $v_0.style.borderWidth = "1px";
            var $v_5 = new Date;
            $v_5.setTime($v_5.getTime() - 1);
            document.cookie = window.INPAGEHELP_COOKIE_NAME + "=; expires = " + $v_5.toGMTString()
        }
        $v_3.src = $v_4.source;
        $v_3.className = $v_4.cssClass
    },
    $4_2: function($p0, $p1) {
        var $v_0 = this.$1_2($p0.target), $v_1;
        if (Mscrm.Utilities.parseBoolean($v_0.getAttribute("expanded")
            .toString())) $v_1 = $p1 ? "/_imgs/helpvisor/visoropenhover.png" : "/_imgs/helpvisor/visoropen.png";
        else $v_1 = $p1 ? "/_imgs/helpvisor/visorclosehover.png" : "/_imgs/helpvisor/visorclose.png";
        var $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create($v_1)), $v_3 = $get("inPageHelpCollapseImage");
        $v_3.src = $v_2.source;
        $v_3.className = $v_2.cssClass
    },
    $1_2: function($p0) {
        while (IsNull($p0.getAttribute("expanded"))) $p0 = $p0.parentNode;
        return $p0
    }
};
Mscrm.InAppContent.registerClass("Mscrm.InAppContent", Mscrm.CrmUIComponent)