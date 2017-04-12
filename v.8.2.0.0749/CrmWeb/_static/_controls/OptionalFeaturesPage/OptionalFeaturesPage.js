Type.registerNamespace("Mscrm");
Mscrm.OptionalFeaturesPage = function(element) {
    this.$$d_$b_3 = Function.createDelegate(this, this.$b_3);
    this.$$d_$V_3 = Function.createDelegate(this, this.$V_3);
    this.$$d_retrieveOptionalFeatureStatusErrorHandler = Function
        .createDelegate(this, this.retrieveOptionalFeatureStatusErrorHandler);
    this.$$d_$I_3 = Function.createDelegate(this, this.$I_3);
    this.$$d_$d_3 = Function.createDelegate(this, this.$d_3);
    this.$$d_$10_3 = Function.createDelegate(this, this.$10_3);
    this.$$d_$q_3 = Function.createDelegate(this, this.$q_3);
    this.$$d_$r_3 = Function.createDelegate(this, this.$r_3);
    this.$$d_$s_3 = Function.createDelegate(this, this.$s_3);
    this.$$d_$p_3 = Function.createDelegate(this, this.$p_3);
    this.$$d_$o_3 = Function.createDelegate(this, this.$o_3);
    this.$$d_$v_3 = Function.createDelegate(this, this.$v_3);
    this.$$d_$w_3 = Function.createDelegate(this, this.$w_3);
    this.$$d_$u_3 = Function.createDelegate(this, this.$u_3);
    this.$$d_$t_3 = Function.createDelegate(this, this.$t_3);
    this.$$d_$l_3 = Function.createDelegate(this, this.$l_3);
    this.$$d_$m_3 = Function.createDelegate(this, this.$m_3);
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$$d_$y_3 = Function.createDelegate(this, this.$y_3);
    this.$$d_$z_3 = Function.createDelegate(this, this.$z_3);
    this.$$d_$x_3 = Function.createDelegate(this, this.$x_3);
    this.$5_3 = -1;
    Mscrm.OptionalFeaturesPage.initializeBase(this, [element])
};
Mscrm.OptionalFeaturesPage.prototype = {
    $E_3: 0,
    $3_3: false,
    $2_3: null,
    $A_3: null,
    $B_3: null,
    $8_3: null,
    $9_3: null,
    $7_3: false,
    $G_3: null,
    $F_3: null,
    $C_3: 0,
    get_$S_3: function() {
        if (!this.$A_3) {
            var $v_0 = $P_CRM("#previewContentDiv").find(":tabbable");
            this.$A_3 = $v_0[0]
        }
        return this.$A_3
    },
    get_$Q_3: function() {
        if (!this.$8_3) {
            var $v_0 = $P_CRM("#previewContentDiv1").find(":tabbable");
            this.$8_3 = $v_0[0]
        }
        return this.$8_3
    },
    get_$T_3: function() {
        if (!this.$B_3) {
            var $v_0 = $P_CRM("#previewContentDiv").find(":tabbable");
            this.$B_3 = $v_0[$v_0.length - 1]
        }
        return this.$B_3
    },
    get_$R_3: function() {
        if (!this.$9_3) {
            var $v_0 = $P_CRM("#previewContentDiv1").find(":tabbable");
            this.$9_3 = $v_0[$v_0.length - 1]
        }
        return this.$9_3
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$h_3();
        this.$11_3();
        this.$g_3();
        this.$i_3();
        this.$12_3();
        this.$4_3("Product Updates - Page Load")
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$c_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $11_3: function() {
        var $v_0 = $get("updateLink");
        $addHandler($v_0, "click", this.$$d_$x_3);
        $v_0 = $get("updateConfirmLink");
        $addHandler($v_0, "click", this.$$d_$z_3);
        $v_0 = $get("updateCancelLink");
        $addHandler($v_0, "click", this.$$d_$y_3);
        $v_0 = $get("enableFormsConfirmLink");
        $addHandler($v_0, "click", this.$$d_$n_3);
        $v_0 = $get("enableFormsCancelLink");
        $addHandler($v_0, "click", this.$$d_$m_3);
        $v_0 = $get("continueAfterEnablingFormsLink");
        $addHandler($v_0, "click", this.$$d_$l_3);
        $v_0 = $get("retryLink");
        $addHandler($v_0, "click", this.$$d_$t_3);
        $v_0 = $get("showPreviewLink1");
        $addHandler($v_0, "click", this.$$d_$u_3);
        $addHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("showPreviewLink2");
        $addHandler($v_0, "click", this.$$d_$u_3);
        $addHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("showPreviewLink3");
        $addHandler($v_0, "click", this.$$d_$v_3);
        $addHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("showPreviewLink4");
        $addHandler($v_0, "click", this.$$d_$v_3);
        $addHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("hidePreviewLink");
        $addHandler($v_0, "click", this.$$d_$o_3);
        $v_0 = $get("hidePreviewLink1");
        $addHandler($v_0, "click", this.$$d_$p_3);
        $v_0 = $get("popupPane");
        $addHandler($v_0, "click", this.$$d_$o_3);
        $v_0 = $get("previewContentDiv");
        $addHandler($v_0, "click", this.$$d_$s_3);
        $v_0 = $get("popupPane1");
        $addHandler($v_0, "click", this.$$d_$p_3);
        $v_0 = $get("previewContentDiv1");
        $addHandler($v_0, "click", this.$$d_$s_3);
        $v_0 = $get("previewContentDiv");
        $addHandler($v_0, "keydown", this.$$d_$r_3);
        $v_0 = $get("previewContentDiv1");
        $addHandler($v_0, "keydown", this.$$d_$q_3);
        $addHandler(window, "load", this.$$d_$10_3)
    },
    $c_3: function() {
        var $v_0 = $get("updateLink");
        $removeHandler($v_0, "click", this.$$d_$x_3);
        $v_0 = $get("updateConfirmLink");
        $removeHandler($v_0, "click", this.$$d_$z_3);
        $v_0 = $get("updateCancelLink");
        $removeHandler($v_0, "click", this.$$d_$y_3);
        $v_0 = $get("enableFormsConfirmLink");
        $removeHandler($v_0, "click", this.$$d_$n_3);
        $v_0 = $get("enableFormsCancelLink");
        $removeHandler($v_0, "click", this.$$d_$m_3);
        $v_0 = $get("continueAfterEnablingFormsLink");
        $removeHandler($v_0, "click", this.$$d_$l_3);
        $v_0 = $get("retryLink");
        $removeHandler($v_0, "click", this.$$d_$t_3);
        $v_0 = $get("showPreviewLink1");
        $removeHandler($v_0, "click", this.$$d_$u_3);
        $removeHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("showPreviewLink2");
        $removeHandler($v_0, "click", this.$$d_$u_3);
        $removeHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("showPreviewLink3");
        $removeHandler($v_0, "click", this.$$d_$v_3);
        $removeHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("showPreviewLink4");
        $removeHandler($v_0, "click", this.$$d_$v_3);
        $removeHandler($v_0, "keydown", this.$$d_$w_3);
        $v_0 = $get("hidePreviewLink");
        $removeHandler($v_0, "click", this.$$d_$o_3);
        $v_0 = $get("hidePreviewLink1");
        $removeHandler($v_0, "click", this.$$d_$p_3);
        $v_0 = $get("popupPane");
        $removeHandler($v_0, "click", this.$$d_$o_3);
        $v_0 = $get("previewContentDiv");
        $removeHandler($v_0, "click", this.$$d_$s_3);
        $v_0 = $get("previewContentDiv");
        $removeHandler($v_0, "keydown", this.$$d_$r_3);
        $v_0 = $get("popupPane1");
        $removeHandler($v_0, "click", this.$$d_$p_3);
        $v_0 = $get("previewContentDiv1");
        $removeHandler($v_0, "click", this.$$d_$s_3);
        $v_0 = $get("previewContentDiv1");
        $removeHandler($v_0, "keydown", this.$$d_$q_3);
        $removeHandler(window, "load", this.$$d_$10_3)
    },
    $h_3: function() {
        this.$7_3 = window.self._isHighContrastEnabled;
        this.$G_3 = window.self._stageInProgressText;
        this.$F_3 = window.self._stageDoneText
    },
    $i_3: function() {
        if (this.$7_3) {
            var $$t_6 = this,
                $v_0 = function($p1_0, $p1_1) {
                    $p1_1.style.paddingLeft = "0px";
                    $p1_1.style.paddingRight = "0px"
                },
                $v_1 = $P_CRM("#progressPanel").find(".ms-crm-of-progressItem");
            $v_1.each($v_0);
            $v_1 = $P_CRM("#progressBoxPage5").find(".ms-crm-of-progressItem");
            $v_1.each($v_0);
            for (var $v_2 = 1; $v_2 <= 3; $v_2++) {
                var $v_3 = String.format("progressAltTextStage{0}", $v_2);
                $get($v_3).style.display = "inline-block"
            }
        }
    },
    $g_3: function() { for (var $v_0 = 1; $v_0 < 7; $v_0++) this.$N_3($v_0) },
    $10_3: function($p0) { executeFunctionDeferred(this.$$d_$d_3, false, false) },
    $x_3: function($p0) {
        this.$4_3("Product Updates - Update Button Click");
        this.$1_3(2)
    },
    $z_3: function($p0) {
        this.$k_3();
        this.$I_3();
        this.$1_3(3)
    },
    $y_3: function($p0) { this.$1_3(1) },
    $n_3: function($p0) {
        this.$j_3("migrationWarningBoxPage5",
            "controlSection1Page5",
            "progressBoxPage5",
            "controlSection2Page5",
            "enablingProgressItem",
            "enabledProgressItem")
    },
    $m_3: function($p0) { this.$1_3(4) },
    $l_3: function($p0) { this.$1_3(4) },
    $u_3: function($p0) {
        this.$4_3("Product Updates - Screenshot Click");
        this.$16_3()
    },
    $v_3: function($p0) {
        this.$4_3("Product Updates - Screenshot Click");
        this.$17_3()
    },
    $w_3: function($p0) {
        switch ($p0.keyCode) {
        case 13:
            this.$3_3 = true;
            break;
        default:
            break
        }
    },
    $o_3: function($p0) { this.$O_3() },
    $p_3: function($p0) { this.$P_3() },
    $t_3: function($p0) { this.$1_3(1) },
    $s_3: function($p0) { $p0.stopPropagation() },
    $r_3: function($p0) {
        switch ($p0.keyCode) {
        case 27:
            this.$O_3();
            $p0.stopPropagation();
            break;
        case 9:
            if (this.$f_3($p0)) {
                $p0.stopPropagation();
                $p0.preventDefault()
            }
            break;
        default:
            break
        }
    },
    $q_3: function($p0) {
        switch ($p0.keyCode) {
        case 27:
            this.$P_3();
            $p0.stopPropagation();
            break;
        case 9:
            if (this.$e_3($p0)) {
                $p0.stopPropagation();
                $p0.preventDefault()
            }
            break;
        default:
            break
        }
    },
    $d_3: function() { $get("topLevelDiv").focus() },
    $f_3: function($p0) {
        if ($p0.shiftKey) {
            if ($p0.target === this.get_$S_3()) {
                this.get_$T_3().focus();
                return true
            }
        } else if ($p0.target === this.get_$T_3()) {
            this.get_$S_3().focus();
            return true
        }
        return false
    },
    $e_3: function($p0) {
        if ($p0.shiftKey) {
            if ($p0.target === this.get_$Q_3()) {
                this.get_$R_3().focus();
                return true
            }
        } else if ($p0.target === this.get_$R_3()) {
            this.get_$Q_3().focus();
            return true
        }
        return false
    },
    $12_3: function() {
        var $v_0 = Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.LeoServiceFeatures"),
            $v_1 = this.$U_3("FCB.LeoServiceFeatures", false);
        if ($v_1 === 1 || $v_1 === 2) {
            this.$H_3($v_1);
            this.$1_3(3);
            this.$Z_3()
        } else if ($v_0) this.$1_3(4);
        else this.$1_3(1)
    },
    $H_3: function($p0) {
        if ($p0 < this.$E_3) return;
        else this.$E_3 = $p0;
        if ($p0 < 0) return;
        if ($p0 <= 1) this.$6_3(1, false);
        else $p0 > 1 && this.$6_3(1, true);
        if ($p0 === 2) this.$6_3(2, false);
        else if ($p0 > 2) {
            this.$6_3(2, true);
            this.$6_3(3, true)
        }
    },
    $6_3: function($p0, $p1) {
        if (this.$7_3) {
            var $v_0 = String.format("progressAltTextStage{0}", $p0),
                $v_1 = $get($v_0),
                $v_2 = $p1 ? this.$F_3 : this.$G_3;
            XUI.Html.SetText($v_1, $v_2)
        } else {
            var $v_3 = String.format("progressStage{0}", $p0);
            this.$D_3($v_3, $p1)
        }
    },
    $D_3: function($p0, $p1) {
        var $v_0 = $get($p0),
            $v_1 = $p1 ? "/_imgs/tools/ico_checkmark.png" : "/_imgs/tools/ico_circularpreloader_grey.gif";
        if (!$v_0.style
            .backgroundImage ||
            $v_0.style.backgroundImage
            .indexOf($v_1) ===
            -1) $v_0.style.backgroundImage = String.format("url({0})", $v_1)
    },
    $I_3: function() { this.$U_3("FCB.LeoServiceFeatures", true) },
    $14_3: function($p0) {
        this.$H_3($p0);
        if ($p0 < 3) this.$Z_3();
        else if ($p0 === 3) {
            this.$4_3("Product Updates - Installation Success");
            this.$1_3(4)
        } else {
            this.$4_3("Product Updates - Installation Failure");
            this.$1_3(6)
        }
    },
    $Z_3: function() { window.setTimeout(this.$$d_$I_3, 3e4) },
    $N_3: function($p0) {
        var $v_0 = String.format("page{0}", $p0);
        this.$0_3($v_0, false)
    },
    $1_3: function($p0) {
        if (this.$5_3 === $p0) return;
        this.$5_3 > 0 && this.$N_3(this.$5_3);
        this.$5_3 = $p0;
        var $v_0 = String.format("page{0}", $p0);
        this.$0_3($v_0, true)
    },
    $16_3: function() {
        this.$Y_3(true);
        this.$2_3 = document.activeElement;
        $get("previewContentDiv").focus();
        var $v_0 = $get("popupPane"), $v_1 = $get("previewContentDiv");
        $v_0.scrollLeft = $v_0.scrollWidth - $v_0.clientWidth;
        $v_0.scrollTop = $v_1.offsetTop - 25
    },
    $17_3: function() {
        this.$X_3(true);
        this.$2_3 = document.activeElement;
        $get("previewContentDiv1").focus();
        var $v_0 = $get("popupPane1"), $v_1 = $get("previewContentDiv1");
        $v_0.scrollLeft = $v_0.scrollWidth - $v_0.clientWidth;
        $v_0.scrollTop = $v_1.offsetTop - 25
    },
    $O_3: function() {
        this.$3_3 && this.$2_3 && this.$2_3.focus();
        this.$3_3 = false;
        this.$2_3 = null;
        this.$Y_3(false)
    },
    $P_3: function() {
        this.$3_3 && this.$2_3 && this.$2_3.focus();
        this.$3_3 = false;
        this.$2_3 = null;
        this.$X_3(false)
    },
    $Y_3: function($p0) {
        this.$0_3("popupBackground", $p0);
        this.$0_3("popupPane", $p0);
        var $v_0 = $get("topLevelDiv");
        $v_0.style.overflow = $p0 ? "hidden" : "auto"
    },
    $X_3: function($p0) {
        this.$0_3("popupBackground", $p0);
        this.$0_3("popupPane1", $p0);
        var $v_0 = $get("topLevelDiv");
        $v_0.style.overflow = $p0 ? "hidden" : "auto"
    },
    $0_3: function($p0, $p1) {
        var $v_0 = $p1 ? "block" : "none", $v_1 = $get($p0);
        if ($v_1 && $v_1.style.display !== $v_0) $v_1.style.display = $v_0
    },
    $13_3: function($p0, $p1, $p2, $p3, $p4) {
        if ($p0) {
            this.$0_3($p1, false);
            this.$0_3($p2, false);
            this.$0_3($p3, true);
            this.$0_3($p4, false)
        } else {
            this.$0_3($p3, false);
            this.$0_3($p4, false);
            this.$0_3($p1, true);
            this.$0_3($p2, true)
        }
    },
    $W_3: function($p0, $p1, $p2, $p3) {
        if (!$p0) {
            this.$D_3($p1, false);
            this.$0_3($p1, true);
            this.$0_3($p2, false);
            this.$0_3($p3, false)
        } else {
            this.$0_3($p1, false);
            this.$D_3($p1, true);
            this.$D_3($p2, true);
            this.$0_3($p2, true);
            this.$0_3($p3, true)
        }
    },
    $k_3: function() {
        this.$H_3(0);
        this.$15_3("FCB.LeoServiceFeatures", true)
    },
    $j_3: function($p0, $p1, $p2, $p3, $p4, $p5) {
        this.$13_3(true, $p0, $p1, $p2, $p3);
        this.$W_3(false, $p4, $p5, $p3);
        this.$a_3()
    },
    $U_3: function($p0, $p1) {
        var $v_0 = new RemoteCommand("OptionalFeaturesWebService", "RetrieveOptionalFeatureStatus");
        $v_0.SetParameter("featureName", $p0);
        var $v_1 = -1;
        try {
            var $v_2 = null;
            if ($p1) {
                $v_0.ErrorHandler = this.$$d_retrieveOptionalFeatureStatusErrorHandler;
                $v_2 = this.$$d_$V_3
            }
            var $v_3 = $v_0.Execute($v_2);
            if (!$p1) if ($v_3.Success) $v_1 = $v_3.ReturnValue
        } catch ($$e_6) {
            $p1 && this.$V_3(null, null)
        }
        return $v_1
    },
    $V_3: function($p0, $p1) {
        var $v_0 = -1;
        if (!IsNull($p0) && $p0.Success) $v_0 = $p0.ReturnValue;
        this.$14_3($v_0)
    },
    retrieveOptionalFeatureStatusErrorHandler: function(result, errorXmlNode) {
        var $v_0 = false;
        if (result === "0x80044151" || result === "ServerError") $v_0 = true;
        if ($v_0 && this.$C_3 < 3e5) this.$C_3 += 3e4;
        else {
            this.$C_3 = 0;
            window.RemoteCommandDefaultErrorHandler(result, errorXmlNode)
        }
    },
    $15_3: function($p0, $p1) {
        var $v_0 = new RemoteCommand("OptionalFeaturesWebService", "SetOptionalFeatureStatus");
        $v_0.SetParameter("featureName", $p0);
        $v_0.SetParameter("newStatus", $p1);
        try {
            $v_0.Execute()
        } catch ($$e_3) {
        }
    },
    $a_3: function() {
        var $v_0 = new RemoteCommand("OptionalFeaturesWebService", "ClearCache");
        try {
            $v_0.Execute(this.$$d_$b_3)
        } catch ($$e_1) {
        }
    },
    $b_3: function($p0, $p1) { this.$W_3(true, "enablingProgressItem", "enabledProgressItem", "controlSection2Page5") },
    $4_3: function($p0) { Mscrm.MetricsReporting.instance().addCounterMetric($p0, 1) }
};
Mscrm.OptionalFeaturesPage.registerClass("Mscrm.OptionalFeaturesPage", Mscrm.CrmUIControl);
Mscrm.OptionalFeaturesPage.popupBackgroundId = "popupBackground";
Mscrm.OptionalFeaturesPage.popupPaneId = "popupPane";
Mscrm.OptionalFeaturesPage.popupPaneContentId = "previewContentDiv";
Mscrm.OptionalFeaturesPage.popupPaneId1 = "popupPane1";
Mscrm.OptionalFeaturesPage.popupPaneContentId1 = "previewContentDiv1";
Mscrm.OptionalFeaturesPage.topLevelDivId = "topLevelDiv";
Mscrm.OptionalFeaturesPage.installationProgressPanelId = "progressPanel";
Mscrm.OptionalFeaturesPage.clearCacheProgressBoxId = "progressBoxPage5";
Mscrm.OptionalFeaturesPage.updateLinkId = "updateLink";
Mscrm.OptionalFeaturesPage.updateConfirmLinkId = "updateConfirmLink";
Mscrm.OptionalFeaturesPage.updateCancelLinkId = "updateCancelLink";
Mscrm.OptionalFeaturesPage.enableFormsConfirmLinkId = "enableFormsConfirmLink";
Mscrm.OptionalFeaturesPage.enableFormsCancelLinkId = "enableFormsCancelLink";
Mscrm.OptionalFeaturesPage.continueAfterEnablingFormsLinkId = "continueAfterEnablingFormsLink";
Mscrm.OptionalFeaturesPage.showPreviewLink1Id = "showPreviewLink1";
Mscrm.OptionalFeaturesPage.showPreviewLink2Id = "showPreviewLink2";
Mscrm.OptionalFeaturesPage.showPreviewLink3Id = "showPreviewLink3";
Mscrm.OptionalFeaturesPage.showPreviewLink4Id = "showPreviewLink4";
Mscrm.OptionalFeaturesPage.hidePreviewLinkId = "hidePreviewLink";
Mscrm.OptionalFeaturesPage.hidePreviewLinkId1 = "hidePreviewLink1";
Mscrm.OptionalFeaturesPage.retryLinkId = "retryLink";
Mscrm.OptionalFeaturesPage.unknownInstallationStatus = 0;
Mscrm.OptionalFeaturesPage.queuedInstallationStatus = 1;
Mscrm.OptionalFeaturesPage.executingInstallationStatus = 2;
Mscrm.OptionalFeaturesPage.completedSuccessfullyInstallationStatus = 3;
Mscrm.OptionalFeaturesPage.completedWithErrorInstallationStatus = 4;
Mscrm.OptionalFeaturesPage.checkImage = "/_imgs/tools/ico_checkmark.png";
Mscrm.OptionalFeaturesPage.spinnerImage = "/_imgs/tools/ico_circularpreloader_grey.gif";
Mscrm.OptionalFeaturesPage.pageLoadMetricName = "Product Updates - Page Load";
Mscrm.OptionalFeaturesPage.screenshotClickMetricName = "Product Updates - Screenshot Click";
Mscrm.OptionalFeaturesPage.updateButtonClickMetricName = "Product Updates - Update Button Click";
Mscrm.OptionalFeaturesPage.installationSuccessMetricName = "Product Updates - Installation Success";
Mscrm.OptionalFeaturesPage.installationFailureMetricName = "Product Updates - Installation Failure"