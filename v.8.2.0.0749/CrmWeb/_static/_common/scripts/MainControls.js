Type.registerNamespace("Mscrm");
Mscrm.RecordSetStringKeys = function() {};
Mscrm.RecordSetStringKeys.prototype = { records: 0, moreRecords: 1, gridXml: 2, remoteCommand: 3, refreshData: 4 };
Mscrm.RecordSetStringKeys.registerEnum("Mscrm.RecordSetStringKeys", false);
Mscrm.LayoutManager = function() {
    this.$$d_$1P_2 = Function.createDelegate(this, this.$1P_2);
    Mscrm.LayoutManager.initializeBase(this)
};
Mscrm.LayoutManager.prototype = {
    $j_2: 0,
    $h_2: 0,
    $B_2: null,
    $N_2: null,
    $k_2: null,
    $I_2: null,
    $d_2: null,
    $F_2: null,
    $13_2: false,
    appNavWidth: 0,
    navBarStatus: null,
    $M_2: null,
    get_ribbonManager: function() { return this.$M_2 },
    set_ribbonManager: function(value) {
        this.$M_2 = value;
        return value
    },
    $f_2: null,
    get_appNav: function() { return this.$f_2 },
    set_appNav: function(value) {
        this.$f_2 = value;
        return value
    },
    $T_2: null,
    get_appMessageBar: function() { return this.$T_2 },
    set_appMessageBar: function(value) {
        this.$T_2 = value;
        return value
    },
    $A_2: null,
    get_splitterControl: function() { return this.$A_2 },
    set_splitterControl: function(value) {
        this.$A_2 = value;
        return value
    },
    $U_2: null,
    get_contentPanel: function() { return this.$U_2 },
    set_contentPanel: function(value) {
        this.$U_2 = value;
        return value
    },
    $a_2: null,
    get_navBar: function() { return this.$a_2 },
    set_navBar: function(value) {
        this.$a_2 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        $addHandler(window, "resize", this.$$d_$1P_2);
        this.$B_2 = {};
        this.$N_2 = {};
        this.$k_2 = {};
        this.$I_2 = {};
        this.$d_2 = {};
        this.$F_2 = {};
        this.$F_2["crmSplitterControl"] = this.$B_2;
        this.$F_2["crmAppNav"] = this.$N_2;
        this.$F_2["crmAppMessageBar"] = this.$k_2;
        this.$F_2["crmContentPanel"] = this.$I_2;
        this.$F_2["navBar"] = this.$d_2;
        this.$13_2 = (IsNull(this.$f_2) || IsNull(this.$A_2)) && IsNull(this.$a_2)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 9:
            var $v_0 = Mscrm.CrmUri.create(window.location.href).get_query()["pagetype"];
            if (!isNullOrEmptyString($v_0)) $v_0 = $v_0.toUpperCase();
            $v_0 !== "ENTITYRECORD" && this.$1c_2();
            break;
        case 20:
            this.$1e_2();
            break;
        case 44:
            return this.$1b_2();
        default:
            break
        }
        return null
    },
    $2D_2: function() {
        !Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari() &&
            !IsNull(this.$U_2) &&
            !IsNull(this.$U_2.get_contentUrl()) &&
            this.$U_2.get_contentUrl().get_path().toString().toUpperCase().endsWith("/MAIN.ASPX") &&
            !IsNull(this.$M_2) &&
            this.$M_2.set_height(62)
    },
    dispose: function() {
        $removeHandler(window, "resize", this.$$d_$1P_2);
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    },
    $16_2: function($p0) {
        this.$j_2 = 0;
        this.$2D_2();
        if (!IsNull(this.$M_2)) this.$j_2 = this.$M_2.get_hideCommandBar() ? 0 : this.$M_2.get_height();
        else this.$j_2 = window.UseTabletExperience ? 54 : 135;
        this.$h_2 = 0;
        var $v_0 = 0, $v_1 = 0;
        if (!IsNull(this.$T_2) && this.$T_2.get_isVisible()) {
            this.$h_2 = this.$T_2.get_actualHeight();
            $v_0 = 1;
            $v_1 = 1
        }
        var $v_2 = IsNull(this.$a_2) || this.$1S_2() ? 0 : 50,
            $v_3 = document.body,
            $v_4 = document.documentElement,
            $v_5 = $v_3.offsetHeight,
            $v_6 = Mscrm.Utilities.isIE() ? $v_4.clientWidth : $v_3.offsetWidth;
        this.$F_2["bodyHeight"] = $v_5;
        this.$F_2["bodyWidth"] = $v_6;
        var $v_7 = this.$j_2 + this.$h_2 + $v_0 + $v_1 + $v_2, $v_8 = $v_5 - $v_7;
        if ($v_8 < 0) $v_8 = 0;
        this.$I_2["top"] = $v_7;
        this.$I_2["height"] = $v_8;
        if (this.$13_2) {
            this.$I_2["width"] = $v_6;
            this.$I_2["left"] = "0";
            return this.$F_2
        }
        var $v_9 = !IsNull(this.$a_2);
        if ($v_9) {
            this.$d_2["top"] = 0;
            this.$d_2["height"] = this.$1S_2() ? 0 : 40;
            this.$d_2["width"] = $v_6
        } else {
            var $v_A = 0;
            this.$B_2["defaultXPos"] = window.LOCID_UI_DIR === "RTL"
                ? $v_6 - this.appNavWidth - this.$A_2.get_width()
                : this.appNavWidth;
            this.$B_2["height"] = $v_8;
            this.$B_2["width"] = this.$A_2.get_width();
            this.$B_2["top"] = $v_7;
            this.$B_2["minLeft"] = window.LOCID_UI_DIR === "RTL" ? $v_6 / 2 - this.$A_2.get_width() : 40;
            this.$B_2["maxLeft"] = window.LOCID_UI_DIR === "RTL" ? $v_6 - 40 - this.$A_2.get_width() : $v_6 / 2;
            if (!$p0 && !window.UseTabletExperience) {
                $v_A = Mscrm.LayoutManager.$m
                    ? window.LOCID_UI_DIR === "RTL"
                    ? $v_6 - this.$A_2.get_left() - this.$A_2.get_width()
                    : this.$A_2.get_left()
                    : this.appNavWidth;
                this.$B_2["left"] = this.$A_2.get_left()
            } else {
                $v_A = !Mscrm.LayoutManager.$m ? this.appNavWidth : this.$f_2.get_width();
                this.$B_2["left"] = window.LOCID_UI_DIR === "RTL" ? $v_6 - $v_A - this.$A_2.get_width() : $v_A
            }
            if ($v_A > $v_6 / 2) {
                $v_A = $v_6 / 2;
                this.$B_2["left"] = window.LOCID_UI_DIR === "RTL" ? $v_6 - $v_A - this.$A_2.get_width() : $v_A
            }
            this.$N_2["top"] = $v_7;
            this.$N_2["height"] = $v_8;
            this.$N_2["width"] = $v_A;
            this.$I_2["width"] = $v_6 - $v_A - this.$A_2.get_width();
            if ($v_A > 0)
                if (window.LOCID_UI_DIR === "LTR") {
                    this.$N_2["left"] = 0;
                    this.$I_2["left"] = $v_A + this.$A_2.get_width()
                } else {
                    this.$N_2["left"] = $v_6 - $v_A;
                    this.$I_2["left"] = 0
                }
        }
        this.$k_2["height"] = this.$h_2;
        this.$k_2["width"] = $v_6 - 6;
        return this.$F_2
    },
    $1S_2: function() {
        return !isNullOrEmptyString(this.navBarStatus) && this.navBarStatus.toLocaleLowerCase() === "off"
    },
    $1b_2: function() { return this.$16_2(false) },
    $1e_2: function() {
        var $v_0 = this.$16_2(false);
        $v_0["sizeChanged"] = false;
        this.raiseEvent(14, $v_0)
    },
    $1c_2: function() {
        if (!Mscrm.LayoutManager.$m) {
            this.$1P_2(null);
            Mscrm.LayoutManager.$m = true
        }
    },
    $1P_2: function($p0) {
        var $v_0 = this.$16_2(true);
        $v_0["sizeChanged"] = true;
        this.raiseEvent(14, $v_0)
    }
};
Mscrm.UserInfo = function($p0) {
    this.$$d_$1L_3 = Function.createDelegate(this, this.$1L_3);
    this.$$d_$1i_3 = Function.createDelegate(this, this.$1i_3);
    this.$$d_$2C_3 = Function.createDelegate(this, this.$2C_3);
    this.$z_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
        .create(window.CDNURL + "/_imgs/ribbon/arrow_ribboncollapse.png"));
    this.$10_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
        .create(window.CDNURL + "/_imgs/ribbon/arrow_ribbonexpand.png"));
    Mscrm.UserInfo.initializeBase(this, [$p0])
};
Mscrm.UserInfo.prototype = {
    userName: null,
    organizationName: null,
    showSignoutUrl: false,
    signoutText: null,
    helpImgAlt: null,
    minimizeRibbonAlt: null,
    unminimizeRibbonAlt: null,
    $Y_3: null,
    get_launchMobileExpressText: function() { return this.$Y_3 },
    set_launchMobileExpressText: function(value) {
        this.$Y_3 = value;
        return value
    },
    $x_3: null,
    get_crmBrand: function() { return this.$x_3 },
    set_crmBrand: function(value) {
        this.$x_3 = value;
        return value
    },
    $G_3: null,
    $11_3: null,
    $1_3: null,
    $Q_3: null,
    $C_3: null,
    $L_3: 260,
    get_maxWidth: function() { return this.$L_3 },
    set_maxWidth: function(value) {
        if (value >= 0) this.$L_3 = value;
        return value
    },
    get_currentRibbonManager: function() { return this.$Q_3 },
    set_currentRibbonManager: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_$o_3: function() { return Sys.UI.DomElement.containsCssClass(this.$G_3, "ms-crm-MastHead-Button-Selected") },
    set_$o_3: function($p0) {
        if ($p0) {
            Sys.UI.DomElement.removeCssClass(this.$G_3, this.$z_3.cssClass);
            Sys.UI.DomElement.addCssClass(this.$G_3, this.$10_3.cssClass)
        } else {
            Sys.UI.DomElement.removeCssClass(this.$G_3, this.$10_3.cssClass);
            Sys.UI.DomElement.addCssClass(this.$G_3, this.$z_3.cssClass)
        }
        Sys.UI.DomElement.addCssClass(this.$G_3, !$p0 ? "ms-crm-MastHead-Button" : "ms-crm-MastHead-Button-Selected");
        Sys.UI.DomElement.removeCssClass(this.$G_3, $p0 ? "ms-crm-MastHead-Button" : "ms-crm-MastHead-Button-Selected");
        this.$G_3.alt = this.$11_3.title = $p0 ? this.unminimizeRibbonAlt : this.minimizeRibbonAlt;
        return $p0
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 14:
            this.$1h_3(parameters);
            break;
        case 37:
            var $v_0 = parameters, $v_1 = $v_0.Minimized;
            !IsNull($v_1) && typeof $v_1 === "boolean" && this.set_$o_3($v_1);
            break;
        case 67:
            this.$1L_3(null);
            break;
        case 69:
            this.$1f_3(parameters);
            break
        }
        return null
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = Mscrm.CrmUri.create(window.location.href).get_query()["pagetype"];
        if (!isNullOrEmptyString($v_0)) $v_0 = $v_0.toUpperCase();
        this.get_element().style.visibility = "hidden";
        var $v_1 = document.createElement("SPAN");
        $v_1.className = "ms-crm-MastHead-UserInfo ms-crm-MastHead-SignIn-User";
        $v_1.className += $v_0 === "ENTITYRECORD"
            ? " ms-crm-MastHead-UserInfo-Record"
            : " ms-crm-MastHead-UserInfo-Other";
        $v_1.id = "lblUserName";
        XUI.Html.SetText($v_1, this.userName);
        $v_1.title = this.userName;
        var $v_2 = document.createElement("SPAN");
        $v_2.className = "ms-crm-MastHead-UserInfo ms-crm-MastHead-SignIn-Org autoellipsis";
        $v_2.className += $v_0 === "ENTITYRECORD"
            ? " ms-crm-MastHead-UserInfo-Record"
            : " ms-crm-MastHead-UserInfo-Other";
        $v_2.id = "lblOrgName";
        XUI.Html.SetText($v_2, this.organizationName);
        $v_2.title = this.organizationName;
        var $v_3 = null;
        if (!isNullOrEmptyString($v_0)) this.showSignoutUrl = false;
        if (Mscrm.SessionInfo.isOutlookClient() && !Mscrm.SessionInfo.isOnline()) this.showSignoutUrl = false;
        if (this.showSignoutUrl) {
            var $v_F = document.createElement("A");
            $v_F.className = $v_0 === "ENTITYRECORD"
                ? " ms-crm-MastHead-UserInfo-Record-SignOut"
                : " ms-crm-MastHead-UserInfo-SignOut";
            $v_F.className += " ms-crm-MastHead-SignOut-Link";
            XUI.Html.SetText($v_F, this.signoutText);
            $v_F.title = this.signoutText;
            $v_F.tabIndex = 0;
            $v_F.href = "#";
            $addHandler($v_F, "click", this.$$d_$2C_3);
            $v_3 = document.createElement("SPAN");
            $v_3.className = "ms-crm-MastHead-UserInfo ms-crm-MastHead-SignOut";
            $v_3.className += $v_0 === "ENTITYRECORD"
                ? " ms-crm-MastHead-UserInfo-Record-SignOut"
                : " ms-crm-MastHead-UserInfo-SignOut";
            $v_3.id = "tdSignOut";
            $v_3.appendChild($v_F);
            if (window.UseTabletExperience) {
                var $v_G = Mscrm.ImageStrip.getImage(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/theme/tablet/login_downarrow_white_7x4.png"));
                Sys.UI.DomElement.addCssClass($v_G, "ms-crm-MastHead-UserInfo-SignOut");
                $v_G.alt = $v_G.title = this.signoutText;
                $v_F.appendChild($v_G)
            }
        }
        var $v_4 = document.createElement("span"), $v_5 = document.createElement("a"), $v_6;
        if (window.LOCID_UI_DIR.toLowerCase() === "rtl" && window.USER_LANGUAGE_CODE !== 1037)
            if (window.UseTabletExperience)
                $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/theme/tablet/help_white_20x20_rtl.png"));
            else $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/ico/17_help_rtl.png"));
        else if (window.UseTabletExperience)
            $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/theme/tablet/help_white_20x20.png"));
        else $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/ico/17_help.png"));
        $v_4.appendChild($v_5);
        $v_5.appendChild($v_6);
        $v_6.alt = $v_5.title = this.helpImgAlt;
        $v_5.id = "helponthispage";
        $v_5.tabIndex = 0;
        $v_5.href = "#";
        $addHandler($v_5, "click", this.$$d_$1i_3);
        Sys.UI.DomElement.addCssClass($v_6, "ms-crm-MastHead-Button");
        Sys.UI.DomElement.addCssClass($v_4, "ms-crm-MastHead-Button");
        var $v_7 = window.UseTabletExperience || this.$Q_3.get_hideChrome(), $v_8 = null;
        if (!$v_7) {
            var $v_H = document.createElement("a");
            $v_8 = document.createElement("span");
            var $v_I = Mscrm.ImageStrip.getImage(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/ribbon/arrow_ribboncollapse.png"));
            $v_8.appendChild($v_H);
            $v_H.appendChild($v_I);
            $v_I.alt = $v_H.title = this.minimizeRibbonAlt;
            $v_H.id = "minimizeribbon";
            $v_H.tabIndex = 0;
            $v_H.href = "#";
            $addHandler($v_H, "click", this.$$d_$1L_3);
            Sys.UI.DomElement.addCssClass($v_I, "ms-crm-MastHead-Button");
            Sys.UI.DomElement.addCssClass($v_8, "ms-crm-MastHead-Button");
            this.$G_3 = $v_I;
            this.$11_3 = $v_H;
            this.set_$o_3(IsNull(this.$Q_3) || window.UseTabletExperience ? true : this.$Q_3.get_isMinimized())
        }
        this.$1k_3();
        var $v_9 = document.createElement("table");
        $v_9.setAttribute("cellSpacing", "0");
        var $v_A = document.createElement("tbody");
        $v_9.appendChild($v_A);
        var $v_B = document.createElement("tr");
        $v_A.appendChild($v_B);
        var $v_C = document.createElement("td");
        $v_C.appendChild($v_1);
        $v_C.appendChild($v_2);
        this.showSignoutUrl && $v_C.appendChild($v_3);
        $v_B.appendChild($v_C);
        var $v_D = document.createElement("td");
        $v_D.appendChild($v_4);
        $v_D.appendChild(document.createElement("br"));
        !$v_7 && $v_D.appendChild($v_8);
        $v_B.appendChild($v_D);
        this.get_element().appendChild($v_9);
        var $$t_J = this;
        Sys.Application.add_init(function() { $create(Mscrm.AutoToolTip, null, null, null, $v_2) });
        this.$1_3 = document.createElement("IMG");
        this.$1_3.alt = "";
        this.$1_3.style.position = "fixed";
        this.$1_3.style.display = "none";
        this.$1_3.style.top = "0px";
        var $v_E = this.get_element();
        if (window.UseTabletExperience) {
            this.$1_3.src = "/_imgs/theme/tablet/dynamicscrmlogo_white.png";
            this.$1_3.style.width = "268px";
            this.$1_3.style.height = "30px";
            $v_E = this.get_element().parentNode
        } else this.$1_3.src = "/_imgs/crmmastheadlogo.png";
        $v_E.appendChild(this.$1_3)
    },
    $1M_3: function($p0) {
        if (window.LOCID_UI_DIR.toLowerCase() === "rtl") this.$1o_3($p0);
        else this.$1n_3($p0)
    },
    $1n_3: function($p0) {
        var $v_0 = window.UseTabletExperience ? 268 : 140;
        if (!IsNull(this.$1_3.offsetWidth) && this.$1_3.offsetWidth > 0) $v_0 = this.$1_3.offsetWidth;
        var $v_1 = $v_0;
        $v_0 += 12;
        var $v_2 = 0;
        if (!IsNull($p0)) {
            var $v_4 = Mscrm.Utilities.getXYPos($p0, false);
            $v_2 = $v_4["x"] + $p0.offsetWidth
        }
        var $v_3 = document.body.offsetWidth - this.$L_3;
        if ($v_3 - $v_2 < $v_0) {
            this.$1_3.style.display = "none";
            return
        }
        this.$1_3.style.display = "inline";
        if (window.UseTabletExperience) {
            this.$1_3.style.left = "8px";
            this.$1_3.style.top = "8px"
        } else {
            this.$1_3.style.width = $v_1.toString() + "px";
            var $v_5 = document.body.offsetWidth / 2 - this.$L_3, $v_6 = document.body.offsetWidth / 2 - $v_2;
            if ($v_6 >= $v_0 / 2 && $v_5 >= $v_0 / 2)
                this.$1_3.style.left = ((document.body.offsetWidth - $v_0) / 2).toString() + "px";
            else this.$1_3.style.left = (($v_3 + $v_2 - $v_0) / 2).toString() + "px"
        }
    },
    $1o_3: function($p0) {
        var $v_0 = window.UseTabletExperience ? 268 : 140;
        if (!IsNull(this.$1_3.offsetWidth) && this.$1_3.offsetWidth > 0) $v_0 = this.$1_3.offsetWidth;
        var $v_1 = $v_0;
        $v_0 += 12;
        var $v_2 = document.body.offsetWidth;
        if (!IsNull($p0)) {
            var $v_4 = Mscrm.Utilities.getXYPos($p0, false);
            $v_2 = $v_4["x"]
        }
        var $v_3 = this.$L_3;
        if ($v_2 - $v_3 < $v_0) {
            this.$1_3.style.display = "none";
            return
        }
        this.$1_3.style.display = "inline";
        if (window.UseTabletExperience) {
            this.$1_3.style.left = document.body.offsetWidth - $v_0 + "px";
            this.$1_3.style.top = "8px"
        } else {
            this.$1_3.style.width = $v_1.toString() + "px";
            var $v_5 = document.body.offsetWidth / 2 - this.$L_3, $v_6 = $v_2 - document.body.offsetWidth / 2;
            if ($v_5 >= $v_0 / 2 && $v_6 >= $v_0 / 2)
                this.$1_3.style.left = ((document.body.offsetWidth - $v_0) / 2).toString() + "px";
            else this.$1_3.style.left = (($v_2 + $v_3 - $v_0) / 2).toString() + "px"
        }
    },
    $1h_3: function($p0) {
        var $v_0 = this.get_element().scrollWidth, $v_1 = $p0["bodyWidth"];
        if (window.LOCID_UI_DIR.toLowerCase() === "rtl") this.set_left(0);
        else this.set_left($v_1 - this.$L_3);
        this.get_element().style.visibility = "visible";
        var $v_2 = $get("crmTopBar");
        if (!IsNull($v_2))
            if (window.LOCID_UI_DIR.toLowerCase() === "rtl") $v_2.style.backgroundPosition = "0px 0px";
            else {
                var $v_3 = 429;
                $v_2.style.backgroundPosition = ($v_1 - $v_3).toString() + "px 0px"
            }
        if (window.UseTabletExperience) {
            this.$1M_3(null);
            this.$1p_3()
        }
    },
    $1f_3: function($p0) { this.$1M_3($p0["lastContextualTabElement"]) },
    $2C_3: function($p0) { this.raiseEvent(24, null) },
    $1i_3: function($p0) {
        if (window.UseTabletExperience) Mscrm.Help.loadHelp(null);
        else executeRibbonCommand("|NoRelationship||Mscrm.LoadHelp")
    },
    $1L_3: function($p0) {
        this.set_$o_3(!this.get_$o_3());
        this.$Q_3.set_isMinimized(this.get_$o_3())
    },
    $1k_3: function() {
        if (window.UseTabletExperience) {
            var $v_0 = document.createElement("nobr"), $v_1 = document.createElement("span");
            XUI.Html.SetText($v_1, this.$Y_3);
            var $v_2 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/theme/tablet/open_white_20x20.png"));
            Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Masthead-go");
            $v_2.alt = $v_2.title = this.$Y_3;
            !Mscrm.Utilities.get_isLeftToRight() && Mscrm.Utilities.flipElementHorizontally($v_2);
            $v_0.appendChild($v_2);
            $v_0.appendChild($v_1);
            var $v_3 = document.createElement("A");
            $v_3.className = "ms-crm-Masthead-LaunchMobileExpress";
            $v_3.title = this.$Y_3;
            $v_3.tabIndex = 0;
            $v_3.href = Mscrm.MobileUtility.getMobileUrl(0, null, null, false).toString();
            $v_3.appendChild($v_0);
            var $v_4 = document.createElement("SPAN");
            $v_4.className = "ms-crm-Masthead-LaunchMobileExpress";
            $v_4.appendChild($v_3);
            this.$C_3 = document.createElement("DIV");
            this.$C_3.style.top = "20px";
            this.$C_3.style.position = "relative";
            this.$C_3.style.display = "inline";
            this.$C_3.appendChild($v_4)
        }
        !IsNull(this.$C_3) && this.get_element().parentNode.appendChild(this.$C_3)
    },
    $1p_3: function() {
        if (!IsNull(this.$C_3))
            if (window.LOCID_UI_DIR
                .toLowerCase() ===
                "rtl") this.$C_3.style.right = document.body.offsetWidth / 2 - 20 + "px";
            else this.$C_3.style.left = document.body.offsetWidth / 2 - 20 + "px"
    }
};
Mscrm.RecordSetControlBase = function(element) {
    this.$$d_recNavDownKeyPressed = Function.createDelegate(this, this.recNavDownKeyPressed);
    this.$$d_recNavDownClick = Function.createDelegate(this, this.recNavDownClick);
    this.$$d_recNavDownFocusOut = Function.createDelegate(this, this.recNavDownFocusOut);
    this.$$d_recNavDownFocusIn = Function.createDelegate(this, this.recNavDownFocusIn);
    this.$$d_recNavDownBlur = Function.createDelegate(this, this.recNavDownBlur);
    this.$$d_recNavDownHover = Function.createDelegate(this, this.recNavDownHover);
    this.$$d_recNavUpKeyPressed = Function.createDelegate(this, this.recNavUpKeyPressed);
    this.$$d_recNavUpClick = Function.createDelegate(this, this.recNavUpClick);
    this.$$d_recNavUpFocusOut = Function.createDelegate(this, this.recNavUpFocusOut);
    this.$$d_recNavUpFocusIn = Function.createDelegate(this, this.recNavUpFocusIn);
    this.$$d_recNavUpBlur = Function.createDelegate(this, this.recNavUpBlur);
    this.$$d_recNavUpHover = Function.createDelegate(this, this.recNavUpHover);
    this._upDisabledUri = window.CDNURL + "/_imgs/recnav/up_disabled.png";
    this._upEnabledUri = window.CDNURL + "/_imgs/recnav/up_enabled.png";
    this._downDisabledUri = window.CDNURL + "/_imgs/recnav/down_disabled.png";
    this._downEnabledUri = window.CDNURL + "/_imgs/recnav/down_enabled.png";
    Mscrm.RecordSetControlBase.initializeBase(this, [element])
};
Mscrm.RecordSetControlBase.prototype = {
    _toolbar: null,
    _navUp: null,
    _navDown: null,
    setNavUpStyleDisabled: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navUp);
        this._navUp.className = "recnav-up " + this.getRecNavClassName("recnav-up-disabled");
        Mscrm.ImageStrip.changeImage($v_0, this._upDisabledUri)
    },
    setNavUpStyleEnabled: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navUp);
        this._navUp.className = "recnav-up " + this.getRecNavClassName("recnav-up-rest");
        Mscrm.ImageStrip.changeImage($v_0, this._upEnabledUri)
    },
    setNavUpStyleHover: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navUp);
        this._navUp.className = "recnav-up " + this.getRecNavClassName("recnav-up-hover");
        Mscrm.ImageStrip.changeImage($v_0, this._upEnabledUri)
    },
    setNavUpStyleSelect: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navUp);
        this._navUp.className = "recnav-up " + this.getRecNavClassName("recnav-up-selected");
        Mscrm.ImageStrip.changeImage($v_0, this._upEnabledUri)
    },
    recNavUpHover: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavUpStyleHover()
    },
    recNavUpBlur: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavUpStyleEnabled()
    },
    recNavUpFocusIn: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavUpStyleHover()
    },
    recNavUpFocusOut: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavUpStyleEnabled()
    },
    recNavUpClick: function(domEvent) {
        domEvent.stopPropagation();
        !domEvent.button && this.previousRecord()
    },
    recNavUpKeyPressed: function(domEvent) {
        domEvent.stopPropagation();
        (domEvent.keyCode === 13 || domEvent.keyCode === 32) && this.previousRecord()
    },
    setNavDownStyleDisabled: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navDown);
        this._navDown.className = "recnav-down " + this.getRecNavClassName("recnav-down-disabled");
        Mscrm.ImageStrip.changeImage($v_0, this._downDisabledUri)
    },
    setNavDownStyleEnabled: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navDown);
        this._navDown.className = "recnav-down " + this.getRecNavClassName("recnav-down-rest");
        Mscrm.ImageStrip.changeImage($v_0, this._downEnabledUri)
    },
    setNavDownStyleHover: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navDown);
        this._navDown.className = "recnav-down " + this.getRecNavClassName("recnav-down-hover");
        Mscrm.ImageStrip.changeImage($v_0, this._downEnabledUri)
    },
    setNavDownStyleSelect: function() {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._navDown);
        this._navDown.className = "recnav-down " + this.getRecNavClassName("recnav-down-selected");
        Mscrm.ImageStrip.changeImage($v_0, this._downEnabledUri)
    },
    recNavDownHover: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavDownStyleHover()
    },
    recNavDownBlur: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavDownStyleEnabled()
    },
    recNavDownFocusIn: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavDownStyleHover()
    },
    recNavDownFocusOut: function(domEvent) {
        domEvent.stopPropagation();
        this.setNavDownStyleEnabled()
    },
    recNavDownClick: function(domEvent) {
        domEvent.stopPropagation();
        !domEvent.button && this.nextRecord()
    },
    recNavDownKeyPressed: function(domEvent) {
        domEvent.stopPropagation();
        (domEvent.keyCode === 13 || domEvent.keyCode === 32) && this.nextRecord()
    },
    getRecNavClassName: function(defaultClassName) {
        var $v_0 = "";
        switch (defaultClassName) {
        case "recnav-dropdown-disabled":
        case "recnav-dropdown-rest":
        case "recnav-down-disabled":
        case "recnav-down-rest":
        case "recnav-up-disabled":
        case "recnav-up-rest":
            $v_0 = "ms-crm-recnav-default";
            break;
        case "recnav-dropdown-hover":
        case "recnav-down-hover":
        case "recnav-up-hover":
            $v_0 = "ms-crm-recnav-hover";
            break;
        case "recnav-dropdown-selected":
        case "recnav-down-selected":
        case "recnav-up-selected":
            $v_0 = "ms-crm-recnav-selected";
            break;
        default:
            return defaultClassName
        }
        return $v_0
    },
    nextRecord: function() {},
    previousRecord: function() {}
};
Mscrm.RecordSetControl = function(element) {
    this.$$d_$21_4 = Function.createDelegate(this, this.$21_4);
    this.$$d_$1z_4 = Function.createDelegate(this, this.$1z_4);
    this.$$d_$2B_4 = Function.createDelegate(this, this.$2B_4);
    this.$$d_$2A_4 = Function.createDelegate(this, this.$2A_4);
    this.$$d_$1v_4 = Function.createDelegate(this, this.$1v_4);
    this.$$d_$1w_4 = Function.createDelegate(this, this.$1w_4);
    this.$$d_$1H_4 = Function.createDelegate(this, this.$1H_4);
    this.$$d_$1x_4 = Function.createDelegate(this, this.$1x_4);
    this.$$d_$1V_4 = Function.createDelegate(this, this.$1V_4);
    this.$$d_$1u_4 = Function.createDelegate(this, this.$1u_4);
    this.$$d_$1t_4 = Function.createDelegate(this, this.$1t_4);
    this.$$d_$1r_4 = Function.createDelegate(this, this.$1r_4);
    this.$$d_$1q_4 = Function.createDelegate(this, this.$1q_4);
    this.$$d_$1s_4 = Function.createDelegate(this, this.$1s_4);
    this.$$d_$1K_4 = Function.createDelegate(this, this.$1K_4);
    Mscrm.RecordSetControl.initializeBase(this, [element])
};
Mscrm.RecordSetControl.$4 = function($p0, $p1) {
    switch ($p0) {
    case 0:
        return String.format("page_{0}_Records", $p1);
    case 1:
        return String.format("page_{0}_moreRecords", $p1);
    case 2:
        return String.format("page_{0}_gridXml", $p1);
    case 3:
        return String.format("page_{0}_RemoteCommand", $p1);
    case 4:
        return String.format("page_{0}_RefreshData", $p1);
    default:
        break
    }
    return ""
};
Mscrm.RecordSetControl.prototype = {
    $r_4: null,
    get_formControl: function() {
        if (IsNull(this.$r_4)) this.$r_4 = $find("crmForm");
        return this.$r_4
    },
    $17_4: null,
    $X_4: null,
    $y_4: false,
    showRecordSetMenu: false,
    viewPrefix: null,
    pagingMask: null,
    firstPageToolTip: null,
    previousPageToolTip: null,
    nextPageToolTip: null,
    openActionTitle: null,
    openInNewWindowActionTitle: null,
    copyShortcutActionTitle: null,
    sendShortcutActionTitle: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!IsNull(this.get_formControl()) && !this.get_formControl().get_isNew())
            if (window.IsTurboForm) this.$1K_4();
            else if (Mscrm.InternalUtilities.Utilities
                .isRefreshForm()) Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$1K_4, 2);
            else executeFunctionDeferred(this.$$d_$1K_4, false, false)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.raiseEvent(85, null);
        this.$1j_4();
        this.$1O_4();
        this.$H_4 = null;
        this.$1G_4();
        !IsNull(this.$X_4) && $removeHandler(document.documentElement, "keydown", this.$X_4);
        this.$X_4 = null;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $1K_4: function() {
        var $v_0 = {};
        if (!IsNull(this.get_$1A_4()) && !IsNull(Mscrm.PageManager.get_instance().get_parentWindowPageManager())) {
            $v_0["targetPageManager"] = Mscrm.PageManager.get_instance().get_parentWindowPageManager();
            this.raiseEvent(11, $v_0)
        }
        this.$1l_4();
        this.$5_4 && this.raiseEvent(84, null)
    },
    $1G_4: function() {
        !IsNull(this._navDown) && $clearHandlers(this._navDown);
        !IsNull(this.$7_4) && $clearHandlers(this.$7_4);
        !IsNull(this._navUp) && $clearHandlers(this._navUp)
    },
    $7_4: null,
    $R_4: null,
    $W_4: null,
    $s_4: null,
    $25_4: function() {
        this.$22_4();
        this.setNavUpStyleDisabled();
        this.setNavDownStyleDisabled()
    },
    $22_4: function() {
        this.$7_4.className = "recnav-dropdown " + this.getRecNavClassName("recnav-dropdown-disabled");
        Mscrm.ImageStrip.changeImage(this.$W_4, window.CDNURL + "/_imgs/recnav/disabled_arrow.png");
        this.$R_4.className = "recnav-dropdown recnav-dropdown-disabled"
    },
    $1C_4: function() {
        this.$7_4.className = "recnav-dropdown " + this.getRecNavClassName("recnav-dropdown-rest");
        Mscrm.ImageStrip.changeImage(this.$W_4, window.CDNURL + "/_imgs/recnav/enabled_arrow.png");
        this.$R_4.className = "recnav-dropdown recnav-dropdown-rest " + this.getRecNavClassName("recnav-dropdown-rest")
    },
    $23_4: function() {
        this.$7_4.className = "recnav-dropdown " + this.getRecNavClassName("recnav-dropdown-hover");
        Mscrm.ImageStrip.changeImage(this.$W_4, window.CDNURL + "/_imgs/recnav/enabled_arrow.png");
        this.$R_4.className = "recnav-dropdown recnav-dropdown-hover " +
            this.getRecNavClassName("recnav-dropdown-hover")
    },
    $24_4: function() {
        this.$7_4.className = "recnav-dropdown " + this.getRecNavClassName("recnav-dropdown-selected");
        Mscrm.ImageStrip.changeImage(this.$W_4, window.CDNURL + "/_imgs/recnav/enabled_arrow.png");
        this.$R_4.className = "recnav-dropdown recnav-dropdown-selected " +
            this.getRecNavClassName("recnav-dropdown-selected")
    },
    $1l_4: function() {
        this.$O_4();
        var $v_0 = $get("recordSetToolBar");
        if (IsNull($v_0)) return;
        this.$7_4 = XUI.Html.DomUtils.GetFirstChild($v_0);
        this.$R_4 = XUI.Html.DomUtils.GetFirstChild(this.$7_4);
        this.$W_4 = XUI.Html.DomUtils.GetNextSibling(this.$R_4);
        this._navUp = XUI.Html.DomUtils.GetNextSibling(this.$7_4);
        this.$s_4 = this._navUp;
        this._navDown = XUI.Html.DomUtils.GetNextSibling(this._navUp);
        this.$25_4();
        if (this.$5_4) {
            if (this.get_hasPreviousRecord()) {
                this._navUp.tabIndex = 0;
                this.setNavUpStyleEnabled();
                $addHandler(this._navUp, "mouseover", this.$$d_recNavUpHover);
                $addHandler(this._navUp, "mouseout", this.$$d_recNavUpBlur);
                $addHandler(this._navUp, "focusin", this.$$d_recNavUpFocusIn);
                $addHandler(this._navUp, "focusout", this.$$d_recNavUpFocusOut);
                $addHandler(this._navUp, "click", this.$$d_recNavUpClick);
                $addHandler(this._navUp, "keydown", this.$$d_recNavUpKeyPressed)
            }
            if (this.get_hasNextRecord()) {
                this._navDown.tabIndex = 0;
                this.setNavDownStyleEnabled();
                $addHandler(this._navDown, "mouseover", this.$$d_recNavDownHover);
                $addHandler(this._navDown, "mouseout", this.$$d_recNavDownBlur);
                $addHandler(this._navDown, "focusin", this.$$d_recNavDownFocusIn);
                $addHandler(this._navDown, "focusout", this.$$d_recNavDownFocusOut);
                $addHandler(this._navDown, "click", this.$$d_recNavDownClick);
                $addHandler(this._navDown, "keydown", this.$$d_recNavDownKeyPressed)
            }
            if (this.showRecordSetMenu) {
                this.$7_4.tabIndex = 0;
                this.$1C_4();
                $addHandler(this.$7_4, "mouseover", this.$$d_$1s_4);
                $addHandler(this.$7_4, "mouseout", this.$$d_$1q_4);
                $addHandler(this.$7_4, "focusin", this.$$d_$1s_4);
                $addHandler(this.$7_4, "focusout", this.$$d_$1q_4);
                $addHandler(this.$7_4, "click", this.$$d_$1r_4);
                $addHandler(this.$7_4, "keydown", this.$$d_$1t_4)
            }
        }
    },
    $1s_4: function($p0) {
        if (!this.$i_4) {
            $p0.stopPropagation();
            this.$23_4()
        }
    },
    $1q_4: function($p0) {
        if (!this.$i_4) {
            $p0.stopPropagation();
            this.$1C_4()
        }
    },
    $1r_4: function($p0) {
        if (!$p0.button) {
            $p0.stopPropagation();
            this.$1N_4()
        }
    },
    $1t_4: function($p0) {
        if ($p0.keyCode === 13 || $p0.keyCode === 32) {
            $p0.stopPropagation();
            this.$1N_4()
        }
    },
    $1J_4: function() {
        var $v_0 = Mscrm.Utilities.getXYPos(this.$s_4, window.LOCID_UI_DIR === "RTL");
        $v_0["y"] = $v_0["y"] + this.$s_4.offsetHeight;
        return $v_0
    },
    $i_4: false,
    $1N_4: function() {
        this.$i_4 = true;
        this.$24_4();
        this.showRecordSelector(this.$1J_4())
    },
    $1v_4: function($p0) {
        this.$i_4 = false;
        this.$1C_4()
    },
    $u_4: null,
    get_$e_4: function() {
        if (IsNull(this.$u_4)) this.$u_4 = this.$$d_$1u_4;
        return this.$u_4
    },
    $1a_4: function() {
        var $v_0 = document.createElement("DIV");
        $v_0.className = "ms-crm-RecordSelector-Header";
        var $v_1 = this.get_$3_4()["viewName"], $v_2 = this.get_$3_4()["displayFieldColumnLabel"];
        $v_0.innerHTML = String
            .format("\r\n\t\t<div class='ms-crm-RS-Header-Title'>\r\n\t\t\t\t<nobr class='ms-crm-RS-Header-Title' title='{1}'>{0}&nbsp</nobr><nobr class='ms-crm-RS-Header-Title-Value'>{1}</nobr>\r\n\t\t</div>\r\n\t\t<div class='ms-crm-RS-Column-Title'>\r\n\t\t\t<nobr class='ms-crm-RS-Column-Title' title='{2}'>{2}</nobr>\r\n\t\t</div>\r\n\t\t", this.viewPrefix, CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2));
        $addHandler($v_0, "click", this.$$d_$1V_4);
        return $v_0
    },
    $1V_4: function($p0) { $p0.stopPropagation() },
    $1Z_4: function($p0) {
        var $v_0 = true, $v_1 = true, $v_2 = true;
        if (!IsNull($p0)) {
            var $v_B = $p0["firstEnabled"];
            if (!IsNull($v_B)) $v_0 = $v_B;
            $v_B = $p0["previousEnabled"];
            if (!IsNull($v_B)) $v_1 = $v_B;
            $v_B = $p0["nextEnabled"];
            if (!IsNull($v_B)) $v_2 = $v_B
        }
        var $v_3 = $p0["pageNumber"],
            $v_4 = String.format(this.pagingMask, $v_3),
            $v_5 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create($v_0 ? window.CDNURL + "/_imgs/grid/page_fl1.gif" : "/_imgs/grid/page_fl0.gif")),
            $v_6 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create($v_1 ? window.CDNURL + "/_imgs/grid/page_l1.gif" : "/_imgs/grid/page_l0.gif")),
            $v_7 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create($v_2 ? window.CDNURL + "/_imgs/grid/page_r1.gif" : "/_imgs/grid/page_r0.gif")),
            $v_8 = String
                .format("\r\n\t\t\t<div class='ms-crm-RS-Footer-Container'>\r\n\t\t\t\t<span><a page='f' title='{0}'><img class='bidi {7}' src='{1}' alt='{0}'/></a></span>\r\n\t\t\t\t<span><a page='p' title='{2}'><img class='bidi {8}' src='{3}' alt='{2}'/></a></span>\r\n\t\t\t\t<span class='ms-crm-RS-Footer-PageText'>{4}</span>\r\n\t\t\t\t<span><a page='n' title='{5}'><img class='bidi {9}' src='{6}' alt='{5}'/></a></span>\r\n\t\t\t</div>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0 ? this.firstPageToolTip : ""), CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.source), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1 ? this.previousPageToolTip : ""), CrmEncodeDecode.CrmHtmlAttributeEncode($v_6.source), CrmEncodeDecode.CrmHtmlAttributeEncode($v_4), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2 ? this.nextPageToolTip : ""), CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.source), CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.cssClass), CrmEncodeDecode.CrmHtmlAttributeEncode($v_6.cssClass), CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.cssClass)),
            $v_9 = document.createElement("DIV");
        $v_9.className = "ms-crm-RecordSelector-Footer";
        $v_9.innerHTML = $v_8;
        var $v_A = $v_9.getElementsByTagName("A");
        if ($v_0) {
            $v_A[0].style.cursor = "hand";
            $v_A[0].tabIndex = 0;
            $addHandler($v_A[0], "click", this.get_$e_4());
            $addHandler($v_A[0], "keypress", this.get_$e_4())
        }
        if ($v_1) {
            $v_A[1].style.cursor = "hand";
            $v_A[1].tabIndex = 0;
            $addHandler($v_A[1], "click", this.get_$e_4());
            $addHandler($v_A[1], "keypress", this.get_$e_4())
        }
        if ($v_2) {
            $v_A[2].style.cursor = "hand";
            $v_A[2].tabIndex = 0;
            $addHandler($v_A[2], "click", this.get_$e_4());
            $addHandler($v_A[2], "keypress", this.get_$e_4())
        }
        $addHandler($v_9, "click", this.$$d_$1V_4);
        return $v_9
    },
    getRecordSelectorContextMenu: function() {
        var $v_0 = document.createElement("div");
        $get("FormCell").appendChild($v_0);
        var $v_1 = Mscrm.Menu.createMenu($v_0);
        $v_1.set_stylePrefix("CM");
        var $v_2 = Mscrm.MenuItem.createMenuItem(this.openActionTitle);
        $v_2.set_reference(0);
        $v_2.set_actionCallback(this.$$d_$1x_4);
        $v_1.addItem($v_2);
        if (Mscrm.NavigationMode.DefaultNavigationMode === 1) {
            var $v_5 = Mscrm.MenuItem.createMenuItem(this.openInNewWindowActionTitle);
            $v_5.set_reference(1);
            $v_5.set_actionCallback(this.$$d_$1x_4);
            $v_1.addItem($v_5)
        }
        var $v_3 = Mscrm.MenuItem.createMenuItem(this.copyShortcutActionTitle);
        $v_3.set_reference(2);
        $v_3.set_actionCallback(this.$$d_$1x_4);
        $v_3.set_disabled(!Mscrm.Utilities.get_ieBrowserVersion());
        $v_1.addItem($v_3);
        var $v_4 = Mscrm.MenuItem.createMenuItem(this.sendShortcutActionTitle);
        $v_4.set_reference(3);
        $v_4.set_actionCallback(this.$$d_$1x_4);
        $v_1.addItem($v_4);
        $v_1.set_width(200);
        return $v_1
    },
    $6_4: null,
    $p_4: 0,
    $q_4: 0,
    $12_4: false,
    $O_4: function() {
        if (this.$12_4) return;
        this.$12_4 = true;
        if (IsNull(Mscrm.PageManager.get_instance())) {
            this.$5_4 = false;
            return
        }
        if (!IsNull(this.get_$3_4()) && this.get_currentRecordPosition() >= 0) {
            this.$6_4 = new Array(1);
            this.$X_4 = this.$$d_$1H_4;
            $addHandler(document.documentElement, "keydown", this.$X_4)
        }
    },
    $1H_4: function($p0) {
        if ($p0.ctrlKey && $p0.keyCode === 190) {
            $p0.stopPropagation();
            $p0.preventDefault();
            this.nextRecord()
        }
        if ($p0.ctrlKey && $p0.keyCode === 188) {
            $p0.stopPropagation();
            $p0.preventDefault();
            this.previousRecord()
        }
    },
    showRecordSelector: function(parameters) {
        this.$O_4();
        this.$p_4 = parameters["x"];
        this.$q_4 = parameters["y"];
        var $v_0 = this.get_$3_4()[Mscrm.RecordSetControl.$4(0, this.get_$8_4())],
            $v_1 = this.get_$8_4(),
            $v_2 = this.$6_4[$v_1];
        if (!IsNull(parameters["pageNumber"])) {
            var $v_3 = parameters["pageNumber"], $v_4 = parameters[Mscrm.RecordSetControl.$4(0, $v_3)];
            if (!IsNull($v_4) && $v_4.length > 0) {
                $v_1 = $v_3;
                $v_0 = parameters[Mscrm.RecordSetControl.$4(0, $v_3)];
                $v_2 = this.$6_4[$v_1]
            }
        }
        if (IsNull($v_2)) {
            var $v_5 = this.getRecordSelectorContextMenu(),
                $v_6 = this.get_$3_4()["displayFieldColumnName"],
                $v_7 = document.createElement("div");
            document.body.appendChild($v_7);
            $v_2 = Mscrm.Menu.createMenu($v_7);
            $v_2.set_launchesRight(false);
            $v_2.set_stylePrefix("RS");
            $v_2.set_loadingClassName("ms-crm-VS-loadingmenu");
            for (var $v_9 = 0; $v_9 < $v_0.length; $v_9++) {
                var $v_A = $v_0[$v_9], $v_B = Mscrm.MenuItem.createMenuItem($v_A[$v_6]);
                $v_B.set_iconPath(Mscrm.Utilities.getIconPath($v_A["otype"]));
                $v_A["menuitem"] = $v_B;
                var $v_C = {};
                $v_C["index"] = $v_9;
                $v_C["pageNumber"] = $v_1;
                $v_B.set_reference($v_C);
                $v_B.set_actionCallback(this.$$d_$1w_4);
                $v_B.set_contextMenu($v_5);
                $v_2.addItem($v_B);
                if ($v_1 === this.get_$8_4() && $v_9 === this.get_currentRecordPosition()) {
                    $v_B.set_isSelected(true);
                    $v_2.set_activeItem($v_B)
                }
            }
            $v_2.set_hideCallback(this.$$d_$1v_4);
            $v_2.set_shiftVertical(false);
            var $v_8 = {};
            $v_8["pageNumber"] = $v_1;
            if ($v_1 === 1) {
                $v_8["firstEnabled"] = false;
                $v_8["previousEnabled"] = false
            }
            if (!this.$19_4($v_1)) $v_8["nextEnabled"] = false;
            $v_2.set_footer(this.$1Z_4($v_8));
            $v_2.set_header(this.$1a_4());
            this.$6_4[$v_1] = $v_2
        }
        $v_2.set_left(this.$p_4);
        $v_2.set_top(this.$q_4);
        $v_2.set_maxHeight(412);
        $v_2.set_minHeight(412);
        $v_2.set_width(260);
        this.get_$D_4() !== $v_1 && !IsNull(this.$6_4[this.get_$D_4()]) && this.$6_4[this.get_$D_4()].hide();
        this.$V_4 = $v_1;
        $v_2.show()
    },
    $1u_4: function($p0) {
        var $v_0 = false;
        if ($p0.type === "click" && !$p0.button) $v_0 = true;
        if ($p0.type === "keypress" && ($p0.charCode === 13 || $p0.charCode === 32)) $v_0 = true;
        if (!$v_0) return;
        $p0.stopPropagation();
        $p0.preventDefault();
        var $v_1 = Mscrm.Utilities.getEventElement($p0.rawEvent, "A");
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.attributes.getNamedItem("page");
            if (!IsNull($v_2))
                switch ($v_2.value) {
                case "f":
                    this.$26_4();
                    break;
                case "n":
                    this.$27_4();
                    break;
                case "p":
                    this.$29_4();
                    break
                }
        }
    },
    $26_4: function() { this.$1D_4(1) },
    $29_4: function() { this.$1D_4(this.get_$D_4() - 1) },
    $27_4: function() { this.$1D_4(this.get_$D_4() + 1) },
    $1D_4: function($p0) {
        if ($p0 <= 0) return;
        this.$O_4();
        if (!IsNull(this.$6_4[$p0])) {
            this.$6_4[this.get_$D_4()].hide();
            this.$V_4 = $p0;
            var $v_1 = this.$1J_4();
            this.$6_4[$p0].set_left($v_1["x"]);
            this.$6_4[$p0].set_top($v_1["y"]);
            this.$6_4[$p0].show();
            return
        }
        var $v_0 = this.get_$3_4()[Mscrm.RecordSetControl.$4(0, $p0)];
        if (!IsNull($v_0)) {
            var $v_2 = {};
            $v_2["oldPageNumber"] = this.get_$8_4();
            $v_2["newPageNumber"] = $p0;
            $v_2[Mscrm.RecordSetControl.$4(0, $p0)] = $v_0;
            $v_2["pageNumber"] = $p0;
            $v_2["x"] = this.$p_4;
            $v_2["y"] = this.$q_4;
            this.showRecordSelector($v_2);
            return
        }
        this.$6_4[this.get_$D_4()].set_reference($p0);
        this.$6_4[this.get_$D_4()].set_isLoading(true);
        this.$6_4[this.get_$D_4()].show(this.$$d_$2A_4)
    },
    $2A_4: function($p0) {
        var $v_0 = $p0.get_reference();
        if ($v_0 <= 0) {
            $p0.set_reference(null);
            return
        }
        var $v_1 = {};
        $v_1["oldPageNumber"] = this.get_$8_4();
        $v_1["newPageNumber"] = $v_0;
        this.$1Q_4($v_1, this.$$d_$2B_4)
    },
    $2B_4: function($p0, $p1) {
        var $v_0 = $p1.get_reference(),
            $v_1 = $v_0["data"],
            $v_2 = $v_1["newPageNumber"],
            $v_3 = $v_1["oldPageNumber"],
            $v_4 = this.$1R_4($p0, $v_2, $v_3);
        this.$6_4[this.get_$D_4()].set_isLoading(false);
        if (!this.$6_4[this.get_$D_4()].get_isVisible()) return;
        if (!IsNull($v_4)) {
            $v_1[Mscrm.RecordSetControl.$4(0, $v_2)] = $v_4;
            $v_1["pageNumber"] = $v_2;
            $v_1["x"] = this.$p_4;
            $v_1["y"] = this.$q_4;
            this.showRecordSelector($v_1)
        }
    },
    $1x_4: function($p0) {
        var $v_0 = $p0.get_parentMenu(), $v_1 = $p0.get_reference();
        switch ($v_1) {
        case 0:
            this.$1E_4($v_0.get_contextItem(), 1);
            break;
        case 1:
            this.$1E_4($v_0.get_contextItem(), 0);
            break;
        case 2:
            this.$1F_4($v_0.get_contextItem(), false);
            break;
        case 3:
            this.$1F_4($v_0.get_contextItem(), true);
            break
        }
    },
    $1E_4: function($p0, $p1) {
        var $v_0 = $p0.get_reference(), $v_1 = $v_0["index"], $v_2 = $v_0["pageNumber"];
        this.moveRecordSetTo($v_1, $v_2, $p1)
    },
    $1F_4: function($p0, $p1) {
        var $v_0 = $p0.get_reference(), $v_1 = $v_0["pageNumber"], $v_2 = $v_0["index"], $v_3 = this.$c_4($v_1);
        if (IsNull($v_3) || !$v_3.length || $v_2 < 0 || $v_2 > $v_3.length) return;
        var $v_4 = $v_3[$v_2], $v_5 = new Mscrm.RecentlyViewedItem;
        $v_5.TypeCode = $v_4["otype"];
        $v_5.Id = $v_4["oid"];
        var $v_6 = this.get_$3_4()["displayFieldColumnName"];
        $v_5.Name = $v_4[$v_6];
        Mscrm.Utilities.sendSelectedRecordsUrl($p1, [$v_5], $v_5.TypeCode, false)
    },
    $1w_4: function($p0) {
        var $v_0 = $p0.get_reference(), $v_1 = $v_0["index"], $v_2 = $v_0["pageNumber"];
        this.moveRecordSetTo($v_1, $v_2, Mscrm.NavigationMode.DefaultNavigationMode)
    },
    $1Y_4: function($p0) {
        if (isNullOrEmptyString($p0)) return null;
        for (var $v_0 = this.get_$8_4(); $v_0 > 0; $v_0--) {
            var $v_1 = this.$c_4($v_0);
            if (IsNull($v_1) || !$v_1.length) continue;
            for (var $v_2 = 0; $v_2 < $v_1.length; ++$v_2) {
                var $v_3 = $v_1[$v_2];
                if ($v_3["oid"] === $p0) return $v_3
            }
        }
        for (var $v_4 = this.get_$8_4() + 1; this.$19_4($v_4); $v_4++) {
            var $v_5 = this.$c_4($v_4);
            if (IsNull($v_5) || !$v_5.length) continue;
            for (var $v_6 = 0; $v_6 < $v_5.length; ++$v_6) {
                var $v_7 = $v_5[$v_6];
                if ($v_7["oid"] === $p0) return $v_7
            }
        }
        return null
    },
    $1X_4: function($p0, $p1, $p2) {
        while (true) {
            if ($p1 + $p2 < 0 || $p1 + $p2 >= $p0.length) break;
            var $v_0 = $p0[$p1 + $p2];
            if (!IsNull($v_0) && !IsNull($v_0["oid"])) return $p1 + $p2;
            $p2 += $p2 > 0 ? 1 : -1
        }
        return -1
    },
    $S_4: null,
    get_$1A_4: function() {
        if (!IsNull(this.$S_4)) return this.$S_4;
        if (!this.$5_4) return null;
        var $v_0 = Mscrm.Utilities.getContentUrl(this);
        if (window.IsTurboForm) {
            var $v_1 = $v_0.getParametersFromFragment();
            this.$S_4 = $v_1["rskey"]
        } else this.$S_4 = $v_0.get_query()["rskey"];
        if (IsNull(this.$S_4)) this.$5_4 = false;
        return this.$S_4
    },
    $H_4: null,
    get_$3_4: function() {
        if (!IsNull(this.$H_4)) return this.$H_4;
        if (!this.$5_4) return null;
        var $v_0 = {};
        $v_0["key"] = this.get_$1A_4();
        var $v_1 = this.raiseEvent(10, $v_0);
        this.$H_4 = $v_1[0];
        if (IsNull(this.$H_4)) this.$5_4 = false;
        else {
            var $v_2 = this.get_$8_4(), $v_3 = Mscrm.RecordSetControl.$4(0, $v_2);
            if (typeof this.$H_4[$v_3] === "string")
                this.$H_4[$v_3] = Sys.Serialization.JavaScriptSerializer.deserialize(this.$H_4[$v_3])
        }
        return this.$H_4
    },
    $t_4: null,
    get_$1m_4: function() {
        if (IsNull(this.$t_4)) this.$t_4 = new RegExp("<pageNum>[0-9]+</pageNum>");
        return this.$t_4
    },
    $g_4: -1,
    get_$8_4: function() {
        if (this.$g_4 !== -1) return this.$g_4;
        if (!this.$5_4) return -1;
        var $v_0 = this.get_$3_4()["pageNumber"];
        if (IsNull($v_0)) this.$5_4 = false;
        this.$g_4 = parseInt($v_0, 10);
        return this.$g_4
    },
    $V_4: -2,
    get_$D_4: function() {
        if (this.$V_4 === -2) this.$V_4 = this.get_$8_4();
        return this.$V_4
    },
    $P_4: null,
    get_$l_4: function() {
        if (!IsNull(this.$P_4)) return this.$P_4;
        if (!this.$5_4) return null;
        this.$P_4 = this.get_$3_4()[Mscrm.RecordSetControl.$4(0, this.get_$8_4())];
        if (IsNull(this.$P_4) || !this.$P_4.length) this.$5_4 = false;
        return this.$P_4
    },
    $5_4: true,
    $J_4: -2,
    get_currentRecordPosition: function() {
        if (this.$J_4 > -1) return this.$J_4;
        if (!this.$5_4) return -1;
        this.$O_4();
        this.$J_4 = -1;
        var $v_0 = this.get_$3_4()["rpos"];
        if ($v_0 >= 0 && $v_0 < this.get_$l_4().length) if (this.$1T_4($v_0)) return this.$J_4;
        $v_0 = 0;
        while ($v_0 < this.get_$l_4().length) {
            if (this.$1T_4($v_0)) break;
            $v_0++
        }
        return this.$J_4
    },
    $1T_4: function($p0) {
        var $v_0 = this.get_$l_4()[$p0];
        if (!IsNull($v_0) && $v_0["oid"] === this.get_formControl().get_objectId()) {
            this.$J_4 = $p0;
            return true
        }
        return false
    },
    $c_4: function($p0) {
        if (!this.$5_4) return null;
        return this.get_$3_4()[Mscrm.RecordSetControl.$4(0, $p0)]
    },
    $19_4: function($p0) {
        if (!this.$5_4) return false;
        var $v_0 = false, $v_1 = this.get_$3_4()[Mscrm.RecordSetControl.$4(1, $p0)];
        if (!IsNull($v_1)) $v_0 = $v_1;
        return $v_0
    },
    get_hasNextRecord: function() {
        return this.get_$l_4().length - 1 > this.get_currentRecordPosition() || this.get_$18_4()
    },
    get_hasPreviousRecord: function() { return this.get_currentRecordPosition() > 0 || this.get_$8_4() > 1 },
    get_$18_4: function() { return this.$19_4(this.get_$8_4()) },
    $K_4: null,
    get_$w_4: function() {
        if (IsNull(this.$K_4)) {
            var $v_0 = document.createElement("div");
            document.body.appendChild($v_0);
            this.$K_4 = Mscrm.Dialog.createDialog($v_0);
            this.$K_4.set_top(document.body.offsetHeight / 2 - 20);
            this.$K_4.set_left(document.body.offsetWidth / 2 - 30);
            this.$K_4.set_enableShadow(false);
            this.$K_4.set_isLoading(true)
        }
        return this.$K_4
    },
    moveRecordSetTo: function(position, itemPageNumber, mode) {
        if (!this.$5_4) return;
        var $v_0 = this.$c_4(itemPageNumber);
        if (IsNull($v_0) || !$v_0.length || position < 0 || position > $v_0.length) return;
        var $v_1 = $v_0[position], $v_2 = $v_1["otype"], $v_3 = $v_1["oid"], $v_4 = $v_1["subject"], $v_5 = {};
        $v_5["checkpoint"] = true;
        this.get_$3_4()["pageNumber"] = itemPageNumber;
        this.get_$3_4()["rpos"] = position;
        var $v_6 = null, $v_7 = Mscrm.Utilities.getContentUrl(this), $v_8;
        if (window.IsTurboForm) {
            $v_6 = $v_7.getParametersFromFragment();
            delete $v_6.etc;
            delete $v_6.etn;
            delete $v_6.id;
            delete $v_6.preloadcache;
            delete $v_6.extraqs;
            delete $v_6.pagemode;
            delete $v_6.pagetype
        } else {
            $v_8 = parseInt($v_7.get_query()["etc"].toString(), 10);
            delete $v_7.get_query().etc;
            delete $v_7.get_query().etn;
            delete $v_7.get_query().id;
            delete $v_7.get_query().preloadcache;
            delete $v_7.get_query().extraqs;
            delete $v_7.get_query().pagemode;
            delete $v_7.get_query().pagetype;
            if (!IsNull(this.get_formControl()
                    .get_currentFormId()) &&
                $v_8 === $v_2) $v_7.get_query()["formid"] = this.get_formControl().get_currentFormId()
        }
        var $v_9 = false, $v_A = Mscrm.CrmUri.create(window.top.location.href);
        if (!window.IsTurboForm) $v_9 = $v_A.get_query()["newWindow"];
        else {
            var $v_C = $v_A.getParametersFromFragment();
            $v_9 = $v_C["newWindow"]
        }
        var $v_B = masterWindow().isEditMode($v_2.toString());
        if (this.get_$8_4() !== itemPageNumber) {
            var $v_D = {};
            $v_D["data"] = this.$1y_4(this.get_$3_4(), this.get_$8_4(), itemPageNumber);
            $v_D["key"] = this.get_$1A_4();
            this.raiseEvent(5, $v_D)
        }
        if (!$v_B || $v_9) {
            var $v_E = window.IsTurboForm ? $v_7.buildFragmentStringFromDictionary($v_6) : $v_7.get_queryString();
            $v_5["sameWindow"] = true;
            if (!window.IsTurboForm || !this.$y_4 && Mscrm.TurboForm.Control.PageBootstrapper.hasPageLoaded) {
                this.$y_4 = true;
                openObj($v_2, $v_3, $v_E, null, Mscrm.NavigationMode.DefaultNavigationMode, $v_5)
            }
        } else {
            this.$28_4();
            var $v_F = {};
            $v_F["title"] = $v_4;
            $v_F["deactivateRecordSitemap"] = true;
            Mscrm.PageManager.get_instance().raiseEvent(93, $v_F);
            this.$J_4 = position;
            this.$1U_4($v_2, $v_3, $v_7, $v_5)
        }
    },
    $1j_4: function() {
        var $v_0 = window.top.document.getElementById("errorBackDiv");
        if (!IsNull($v_0)) {
            $v_0.innerHTML = "";
            window.top.document.getElementById("crmContentPanel").removeChild($v_0);
            var $v_1 = window.top.document.getElementById("crmRibbonManager");
            if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) $v_1.style.visibility = "visible"
        }
    },
    $28_4: function() {
        var $v_0 = window.top.document.getElementById("errorBackDiv");
        if (IsNull($v_0)) {
            $v_0 = window.top.document.createElement("div");
            $v_0.id = "errorBackDiv";
            $v_0.style.position = "absolute";
            $v_0.style.top = "0";
            $v_0.style.left = "0";
            $v_0.style.zIndex = 1e3;
            $v_0.style.width = "100%";
            $v_0.style.height = "100%";
            XUI.Html.SetOpacity($v_0, 1);
            $v_0.style.backgroundColor = "gray";
            window.top.document.getElementById("crmContentPanel").appendChild($v_0);
            var $v_1 = window.top.document.getElementById("crmRibbonManager");
            if (Mscrm.Utilities.isRefreshForm() && $v_1) $v_1.style.visibility = "hidden"
        } else this.$1O_4()
    },
    $1O_4: function() {
        if (!isNullOrEmptyString(this.$Z_4)) {
            var $v_0 = {};
            $v_0["messageId"] = this.$Z_4;
            $v_0["add"] = false;
            this.raiseEvent(99, $v_0);
            this.$Z_4 = null
        }
    },
    $Z_4: null,
    $1U_4: function($p0, $p1, $p2, $p3) {
        this.$Z_4 = "test" + this.$17_4;
        var $v_0 = [];
        Array.add($v_0, $p0);
        Array.add($v_0, $p1);
        Array.add($v_0, $p2);
        Array.add($v_0, $p3);
        var $v_1 = new Mscrm.Message;
        $v_1.ActionButtonText = window.LOCID_RECORDNAV_POPOUT;
        $v_1.MessageText = window.LOCID_RECORDNAV_NONREFRESH;
        $v_1.ButtonAction = 12;
        $v_1.Data = $v_0;
        $v_1.MessageType = 11;
        $v_1.SeverityLevel = 0;
        this.$17_4 = Mscrm.Utilities.createGuid();
        $v_1.Id = this.$Z_4;
        $v_1.Title = "";
        $v_1.CloseButtonTooltip = window.LOCID_MESSAGEBAR_CLOSE;
        var $v_2 = {};
        $v_2["message"] = $v_1;
        $v_2["add"] = true;
        this.raiseEvent(99, $v_2)
    },
    moveRecordSet: function(iPos, itemPageNumber) {
        if (!this.$5_4) return;
        if (this.get_currentRecordPosition() < 0) return;
        var $v_0 = this.$c_4(itemPageNumber), $v_1 = this.$1X_4($v_0, this.get_currentRecordPosition(), iPos);
        if ($v_1 >= 0) {
            this.moveRecordSetTo($v_1, itemPageNumber, Mscrm.NavigationMode.DefaultNavigationMode);
            return
        }
        $v_0 = null;
        if (itemPageNumber === 1 && iPos < 0 || !this.get_$18_4() && iPos > 0) return;
        var $v_2 = iPos > 0 && this.get_$18_4(), $v_3 = itemPageNumber + ($v_2 ? 1 : -1);
        $v_0 = this.$c_4($v_3);
        if (!IsNull($v_0) && $v_0.length > 0) {
            $v_1 = $v_2 ? 0 : $v_0.length - 1;
            $v_3 = itemPageNumber + ($v_2 ? 1 : -1);
            this.get_$3_4()["pageNumber"] = $v_3;
            this.moveRecordSetTo($v_1, $v_3, Mscrm.NavigationMode.DefaultNavigationMode);
            return
        }
        var $v_4 = {};
        $v_4["iPos"] = iPos;
        $v_4["oldPageNumber"] = itemPageNumber;
        $v_4["newPageNumber"] = $v_3;
        $v_4["isNextPage"] = $v_2;
        this.$20_4($v_4, this.$$d_$1z_4);
        return
    },
    $1z_4: function($p0, $p1) {
        var $v_0 = $p1.get_reference(),
            $v_1 = $v_0["data"],
            $v_2 = $v_1["newPageNumber"],
            $v_3 = $v_1["oldPageNumber"],
            $v_4 = $v_1["isNextPage"],
            $v_5 = this.$1R_4($p0, $v_2, $v_3);
        if (IsNull($v_5)) return;
        if (!this.get_$w_4().get_isVisible()) return;
        this.get_$w_4().hide();
        var $v_6 = $v_3 + ($v_4 ? 1 : -1);
        this.get_$3_4()["pageNumber"] = $v_3 + ($v_4 ? 1 : -1);
        var $v_7 = $v_4 ? 0 : $v_5.length - 1;
        this.moveRecordSetTo($v_7, $v_6, Mscrm.NavigationMode.DefaultNavigationMode)
    },
    $20_4: function($p0, $p1) {
        $p0["loadingCallback"] = $p1;
        this.get_$w_4().set_reference($p0);
        this.get_$w_4().show(this.$$d_$21_4)
    },
    $21_4: function($p0) {
        var $v_0 = $p0.get_reference(), $v_1 = $v_0["loadingCallback"];
        this.$1Q_4($v_0, $v_1)
    },
    $1Q_4: function($p0, $p1) {
        var $v_0 = $p0["oldPageNumber"],
            $v_1 = $p0["newPageNumber"],
            $v_2 = this.get_$3_4()[Mscrm.RecordSetControl.$4(3, $v_1)];
        if (!IsNull($v_2) && !$v_2.get_aborted()) return;
        var $v_3 = {};
        $v_3["data"] = $p0;
        $v_3["callback"] = $p1;
        var $v_4 = new Mscrm.RemoteCommandXml("AppGridWebService", "Refresh");
        $v_4.set_reference($v_3);
        var $v_5 = this.get_$3_4()[Mscrm.RecordSetControl.$4(2, $v_1 - 1)];
        if (isNullOrEmptyString($v_5)) $v_5 = this.get_$3_4()[Mscrm.RecordSetControl.$4(2, $v_1 + 1)];
        if (isNullOrEmptyString($v_5)) $v_5 = this.get_$3_4()[Mscrm.RecordSetControl.$4(2, $v_0)];
        $v_5 = $v_5.replace(this.get_$1m_4(), "<pageNum>" + $v_1 + "</pageNum>");
        $v_4.setContent($v_5);
        this.get_$3_4()[Mscrm.RecordSetControl.$4(3, $v_1)] = $v_4;
        $v_4.execute($p1)
    },
    $1R_4: function($p0, $p1, $p2) {
        var $v_0 = null;
        if ($p0.get_success() && !IsNull($p0.get_returnValue())) {
            var $v_1 = XUI.Xml.LoadXml($p0.get_returnValue());
            if (Mscrm.NavigationMode
                .DefaultNavigationMode ===
                1) this.get_$3_4()[Mscrm.RecordSetControl.$4(4, $p1)] = $p0.get_returnValue();
            var $v_2 = document.createElement("div");
            $v_2.innerHTML = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "gridXml/gridHtml", null));
            var $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_2)).attributes
                .getNamedItem("morerecords").value ===
                "1";
            this.get_$3_4()[Mscrm.RecordSetControl.$4(1, $p1)] = $v_3;
            var $v_4 = new Array(1);
            $v_4[0] = this.get_$3_4()["displayFieldColumnName"];
            $v_0 = Mscrm.Grid.getGridRecords(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_2)),
                $v_4,
                this.get_$3_4()["layoutXml"]);
            this.get_$3_4()[Mscrm.RecordSetControl.$4(0, $p1)] = $v_0;
            var $v_5 = XUI.Xml.LoadXml(this.get_$3_4()[Mscrm.RecordSetControl.$4(2, $p2)]),
                $v_6 = XUI.Xml.SelectSingleNode($v_5, "grid/pagingCookie", null),
                $v_7 = XUI.Xml.SelectSingleNode($v_1, "gridXml/pagingCookie", null);
            XUI.Xml.SelectSingleNode($v_5, "grid", null).replaceChild($v_7, $v_6);
            XUI.Xml.SelectSingleNode($v_5, "grid/pageNum", null).text = $p1;
            this.get_$3_4()[Mscrm.RecordSetControl.$4(2, $p1)] = XUI.Xml.XMLSerializer.serializeToString($v_5)
        }
        return $v_0
    },
    previousRecord: function() {
        this.$O_4();
        this.moveRecordSet(-1, this.get_$8_4())
    },
    $1y_4: function($p0, $p1, $p2) {
        var $v_0 = {}, $$dict_7 = $p0;
        for (var $$key_8 in $$dict_7) {
            var $v_1 = { key: $$key_8, value: $$dict_7[$$key_8] },
                $v_2 = $v_1.key === Mscrm.RecordSetControl.$4(0, $p1),
                $v_3 = $v_1.key === Mscrm.RecordSetControl.$4(3, $p2);
            if (!$v_2 && !$v_3) $v_0[$v_1.key] = $v_1.value
        }
        return $v_0
    },
    nextRecord: function() {
        this.$O_4();
        this.moveRecordSet(1, this.get_$8_4())
    },
    recordDeleted: function() {
        if (Mscrm.NavigationMode.DefaultNavigationMode === 1) {
            this.$O_4();
            if (!this.$5_4) return;
            if (this.get_currentRecordPosition() < 0) return;
            var $v_0 = this.get_$l_4()[this.get_currentRecordPosition()];
            $v_0["otype"] = null;
            $v_0["oid"] = null
        }
    },
    recordUpdating: function() {
        this.$O_4();
        if (this.$5_4) {
            var $v_0 = this.get_$3_4()["displayFieldColumnName"];
            this.$1d_4(this.get_formControl().get_objectId(), this.get_formControl().getFieldValue($v_0))
        }
    },
    $1d_4: function($p0, $p1) {
        var $v_0 = this.$1Y_4($p0);
        if (!IsNull($v_0)) {
            var $v_1 = this.get_$3_4()["displayFieldColumnName"];
            $v_0[$v_1] = $p1;
            var $v_2 = $v_0["menuitem"];
            if (!IsNull($v_2)) {
                var $v_3 = this.$6_4[this.get_$8_4()];
                !IsNull($v_3) && $v_3 === $v_2.get_parentMenu() && $v_2.set_title($p1)
            }
        }
    }
};
Mscrm.RecordSetControlProxy = function(element) {
    this.$$d_$1H_4 = Function.createDelegate(this, this.$1H_4);
    Mscrm.RecordSetControlProxy.initializeBase(this, [element])
};
Mscrm.RecordSetControlProxy.prototype = {
    $0_4: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this._toolbar = $get("recordSetToolBarProxy");
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this._toolbar), $v_1 = XUI.Html.DomUtils.GetNextSibling($v_0);
        this._navUp = XUI.Html.DomUtils.GetLastChild($v_1);
        var $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1);
        this._navDown = XUI.Html.DomUtils.GetLastChild($v_2);
        this._upDisabledUri = window.CDNURL + "/_imgs/recnav/up_disabled_proxy.png";
        this._upEnabledUri = window.CDNURL + "/_imgs/recnav/up_enabled_proxy.png";
        this._downDisabledUri = window.CDNURL + "/_imgs/recnav/down_disabled_proxy.png";
        this._downEnabledUri = window.CDNURL + "/_imgs/recnav/down_enabled_proxy.png";
        Sys.UI.DomElement.addCssClass(this._toolbar, "recordSetControlProxy contextualAction");
        this.setNavDownStyleDisabled();
        this.setNavUpStyleDisabled();
        this._navUp.tabIndex = 0;
        var $$t_F = this;
        $addHandler(this._navUp,
            "mouseover",
            function($p1_0) {
                !IsNull($$t_F.$0_4) &&
                    $$t_F.$0_4.get_hasPreviousRecord() &&
                    $$t_F
                    .recNavUpHover($p1_0)
            });
        var $$t_G = this;
        $addHandler(this._navUp,
            "mouseout",
            function($p1_0) { !IsNull($$t_G.$0_4) && $$t_G.$0_4.get_hasPreviousRecord() && $$t_G.recNavUpBlur($p1_0) });
        var $$t_H = this;
        $addHandler(this._navUp,
            "focusin",
            function($p1_0) {
                !IsNull($$t_H.$0_4) && $$t_H.$0_4.get_hasPreviousRecord() && $$t_H.recNavUpFocusIn($p1_0)
            });
        var $$t_I = this;
        $addHandler(this._navUp,
            "focusout",
            function($p1_0) {
                !IsNull($$t_I.$0_4) && $$t_I.$0_4.get_hasPreviousRecord() && $$t_I.recNavUpFocusOut($p1_0)
            });
        var $$t_J = this;
        $addHandler(this._navUp,
            "click",
            function($p1_0) {
                !IsNull($$t_J.$0_4) &&
                    $$t_J.$0_4.get_hasPreviousRecord() &&
                    $$t_J
                    .recNavUpClick($p1_0)
            });
        var $$t_K = this;
        $addHandler(this._navUp,
            "keydown",
            function($p1_0) {
                !IsNull($$t_K.$0_4) && $$t_K.$0_4.get_hasPreviousRecord() && $$t_K.recNavUpKeyPressed($p1_0)
            });
        this._navDown.tabIndex = 0;
        var $$t_L = this;
        $addHandler(this._navDown,
            "mouseover",
            function($p1_0) { !IsNull($$t_L.$0_4) && $$t_L.$0_4.get_hasNextRecord() && $$t_L.recNavDownHover($p1_0) });
        var $$t_M = this;
        $addHandler(this._navDown,
            "mouseout",
            function($p1_0) { !IsNull($$t_M.$0_4) && $$t_M.$0_4.get_hasNextRecord() && $$t_M.recNavDownBlur($p1_0) });
        var $$t_N = this;
        $addHandler(this._navDown,
            "focusin",
            function($p1_0) {
                !IsNull($$t_N.$0_4) &&
                    $$t_N.$0_4.get_hasNextRecord() &&
                    $$t_N
                    .recNavDownFocusIn($p1_0)
            });
        var $$t_O = this;
        $addHandler(this._navDown,
            "focusout",
            function($p1_0) {
                !IsNull($$t_O.$0_4) &&
                    $$t_O.$0_4.get_hasNextRecord() &&
                    $$t_O
                    .recNavDownFocusOut($p1_0)
            });
        var $$t_P = this;
        $addHandler(this._navDown,
            "click",
            function($p1_0) { !IsNull($$t_P.$0_4) && $$t_P.$0_4.get_hasNextRecord() && $$t_P.recNavDownClick($p1_0) });
        var $$t_Q = this;
        $addHandler(this._navDown,
            "keydown",
            function($p1_0) {
                !IsNull($$t_Q.$0_4) && $$t_Q.$0_4.get_hasNextRecord() && $$t_Q.recNavDownKeyPressed($p1_0)
            });
        $addHandler(document.documentElement, "keydown", this.$$d_$1H_4)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$1G_4();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $1G_4: function() {
        !IsNull(this._navDown) && $clearHandlers(this._navDown);
        !IsNull(this._navUp) && $clearHandlers(this._navUp)
    },
    $1H_4: function($p0) {
        if (!IsNull(this.$0_4)) {
            if ($p0.ctrlKey && $p0.keyCode === 190) {
                $p0.stopPropagation();
                $p0.preventDefault();
                this.nextRecord()
            }
            if ($p0.ctrlKey && $p0.keyCode === 188) {
                $p0.stopPropagation();
                $p0.preventDefault();
                this.previousRecord()
            }
        }
    },
    nextRecord: function() { !IsNull(this.$0_4) && this.$0_4.nextRecord() },
    previousRecord: function() { !IsNull(this.$0_4) && this.$0_4.previousRecord() },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 84:
            var $v_0 = $get("crmContentPanel"),
                $v_1 = $v_0.attributes.getNamedItem("currentContentId"),
                $v_2 = null,
                $v_3 = false;
            if (!IsNull($v_1) && $v_1.specified) $v_2 = $get($v_1.value);
            if (!IsNull($v_2)) {
                var $v_4 = $v_2.contentWindow;
                if (typeof $v_4.Mscrm !== "undefined") {
                    var $v_5 = $v_4.Mscrm.Utilities;
                    if (IsNull($v_5)) break;
                    $v_3 = $v_5.isRefreshForm()
                } else $v_3 = !Mscrm.Utilities.isTurboForm();
                this.$0_4 = sourceComponent;
                if ($v_3) {
                    this._toolbar.style.display = "";
                    if (this.$0_4.get_hasNextRecord()) this.setNavDownStyleEnabled();
                    else this.setNavDownStyleDisabled();
                    if (this.$0_4.get_hasPreviousRecord()) this.setNavUpStyleEnabled();
                    else this.setNavUpStyleDisabled()
                }
            }
            break;
        case 85:
            this._toolbar.style.display = "none";
            this.setNavDownStyleDisabled();
            this.setNavUpStyleDisabled();
            this.$0_4 = null;
            break;
        case 14:
            this.$1g_4(parameters);
            break
        }
        return null
    },
    $1g_4: function($p0) {
        var $v_0 = $p0["crmAppMessageBar"];
        if (!IsNull($v_0) && typeof $v_0["height"] !== "undefined") {
            var $v_1 = $v_0["height"];
            this._toolbar.parentNode.style.top = $v_1.toString() + "px"
        }
    }
};
Mscrm.LayoutManager.registerClass("Mscrm.LayoutManager", Mscrm.CrmUIComponent);
Mscrm.UserInfo.registerClass("Mscrm.UserInfo", Mscrm.CrmUIControl);
Mscrm.RecordSetControlBase.registerClass("Mscrm.RecordSetControlBase", Mscrm.CrmUIControl);
Mscrm.RecordSetControl.registerClass("Mscrm.RecordSetControl", Mscrm.RecordSetControlBase);
Mscrm.RecordSetControlProxy.registerClass("Mscrm.RecordSetControlProxy", Mscrm.RecordSetControlBase);
Mscrm.LayoutManager.$m = false