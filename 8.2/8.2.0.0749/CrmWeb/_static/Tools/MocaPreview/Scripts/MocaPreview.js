Type.registerNamespace("Microsoft.Crm.Tools.MocaPreview.Scripts");
Microsoft.Crm.Tools.MocaPreview.Scripts.ButtonState = function() {};
Microsoft.Crm.Tools.MocaPreview.Scripts.ButtonState.prototype = { unselected: 0, hover: 1, selected: 2 };
Microsoft.Crm.Tools.MocaPreview.Scripts.ButtonState
    .registerEnum("Microsoft.Crm.Tools.MocaPreview.Scripts.ButtonState", false);
Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager = function() {
    this.$O_0 = {
        "1": new Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewResolution("1024px", "768px", "", 2),
        "2": new Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewResolution("360px", "640px", "", 3)
    };
    this.$N_0 = [0, 2, 7]
};
Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager.prototype = {
    $2_0: 0,
    $A_0: false,
    get_showUnsuportedLanguageDialog: function() { return this.$A_0 },
    set_showUnsuportedLanguageDialog: function(value) {
        this.$A_0 = value;
        return value
    },
    set_$J_0: function($p0) {
        if ($p0 !== 3 && $p0 !== 2) throw Error.argument("Unsupported form factor");
        if (this.$2_0 !== $p0) this.$2_0 = $p0;
        return $p0
    },
    get_$8_0: function() {
        var $v_0 = Mscrm.CrmSessionStorage.getItem("previewForm_formType");
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = Number.parseInvariant($v_0);
            if (this.$P_0($v_1)) return $v_1
        }
        return 100
    },
    get_$Z_0: function() { return Mscrm.CrmSessionStorage.getItem("previewForm_dashboardName") },
    get_$D_0: function() { return Mscrm.CrmSessionStorage.getItem("previewForm_EntityLogicalName") },
    SetupPreviewPage: function() {
        if (!this.$P_0(this.get_$8_0())) {
            this.$G_0("/tools/formeditor/dialogs/mocapreviewunavailable.aspx");
            return
        }
        if (this.$A_0) {
            this.$G_0("/tools/formeditor/dialogs/MocaLanguageUnsupported.aspx");
            return
        }
        this.$g_0();
        this.$M_0();
        this.$h_0();
        var $v_0 = this.$b_0();
        if (this.$k_0($v_0)) this.set_$J_0($v_0);
        else {
            this.$G_0("/tools/formeditor/dialogs/mocapreviewunavailable.aspx");
            return
        }
        var $v_1 = $P_CRM(".previewBarItem");
        $v_1.css("visibility", "visible");
        this.$C_0(this.$2_0, 2);
        this.$K_0();
        var $v_2 = $P_CRM("#deviceMock");
        $v_2.css("display", "block");
        this.$T_0()
    },
    $P_0: function($p0) { return Array.contains(this.$N_0, $p0) },
    $k_0: function($p0) { return $p0 === 3 || $p0 === 2 },
    $G_0: function($p0) {
        var $v_0 = Mscrm.CrmUri.create($p0), $v_1 = new Xrm.DialogOptions;
        $v_1.height = 250;
        $v_1.width = 600;
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
    },
    $c_0: function() {
        var $v_0 = String.format("{0}: {1}", Xrm.Internal.getResourceString("LOCID_MPREV_PAGE"), "");
        switch (this.get_$8_0()) {
        case 0:
            var $v_1 = this.get_$Z_0();
            return isNullOrEmptyString($v_1)
                ? $v_0
                : String.format("{0}: {1}", Xrm.Internal.getResourceString("LOCID_MPREV_PAGE"), $v_1);
        case 2:
        case 7:
            var $v_2 = this.get_$D_0();
            return isNullOrEmptyString($v_2)
                ? $v_0
                : String.format("{0}: {1}",
                    Xrm.Internal.getResourceString("LOCID_MPREV_PAGE"),
                    Xrm.Internal.getEntityDisplayName($v_2));
        default:
            return $v_0
        }
    },
    $g_0: function() {
        var $v_0 = $P_CRM("#descriptionLabel"), $v_1 = this.$c_0();
        $v_0.text($v_1);
        $v_0.attr("title", $v_1);
        var $v_2 = $P_CRM("#platformLabel");
        $v_1 = String.format("{0}:", Xrm.Internal.getResourceString("LOCID_MPREV_PLATFORM"));
        $v_2.text($v_1);
        $v_2.attr("title", $v_1);
        var $v_3 = Xrm.Internal.getResourceString("LOCID_MPREV_TABLET"), $v_4 = $P_CRM("#tabletButton");
        $v_4.attr("title", $v_3);
        var $v_5 = $P_CRM("#tabletIcon");
        $v_5.attr("alt", $v_3);
        var $v_6 = Xrm.Internal.getResourceString("LOCID_MPREV_PHONE"), $v_7 = $P_CRM("#phoneButton");
        $v_7.attr("title", $v_6);
        var $v_8 = $P_CRM("#phoneIcon");
        $v_8.attr("alt", $v_6);
        var $v_9 = Xrm.Internal.getResourceString("LOCID_MPREV_EMPTYFORM"), $v_A = $P_CRM("#addEntityLabel");
        $v_A.attr("title", $v_9);
        $v_A.text($v_9);
        var $v_B = Xrm.Internal.getResourceString("LOCID_MPREV_CREATEREC"), $v_C = $P_CRM("#createRecordLabel");
        $v_C.attr("title", $v_B);
        $v_C.text($v_B)
    },
    $h_0: function() {
        var $v_0 = $P_CRM("#addEntityLabel"), $v_1 = $P_CRM("#createRecordButton");
        if (this.get_$8_0() !== 2) {
            $v_0.hide();
            $v_1.hide()
        } else {
            $v_0.show();
            $v_1.show()
        }
    },
    $f_0: function() {
        if (this.get_$8_0() !== 2)
            throw Error.invalidOperation(String.format("Creating records for FormType '{0}' is not supported",
                this.get_$8_0()));
        if (isNullOrEmptyString(this.get_$D_0()))
            throw Error.invalidOperation("Entity code cannot be retrieved when entity logical name is null or empty");
        var $v_0 = Xrm.Internal.getEntityCode(this.get_$D_0());
        openFrmObj(null, "CreateRecordWindowName", $v_0, null, Mscrm.NavigationMode.DefaultNavigationMode, null)
    },
    $b_0: function() {
        var $v_0 = Xrm.Page.context.getQueryStringParameters();
        if (!IsNull($v_0))
            if (!IsNull($v_0["phone"])) {
                var $v_1 = $v_0["phone"].toString();
                if ($v_1 === "true") return 3;
                else if ($v_1 === "false") return 2;
                else return 0
            }
        return 0
    },
    $T_0: function() {
        var $v_0 = $P_CRM("#phoneButton"), $$t_H = this;
        $v_0.mouseenter(function($p1_0) { return $$t_H.$B_0(3, true) });
        var $$t_I = this;
        $v_0.mouseleave(function($p1_0) { return $$t_I.$B_0(3, false) });
        var $$t_J = this;
        $v_0.click(function($p1_0) { return $$t_J.$I_0(3) });
        var $v_1 = $P_CRM("#tabletButton"), $$t_K = this;
        $v_1.mouseenter(function($p1_0) { return $$t_K.$B_0(2, true) });
        var $$t_L = this;
        $v_1.mouseleave(function($p1_0) { return $$t_L.$B_0(2, false) });
        var $$t_M = this;
        $v_1.click(function($p1_0) { return $$t_M.$I_0(2) });
        var $v_2 = $P_CRM("#createRecordButton"), $$t_N = this;
        $v_2.click(function($p1_0) { return $$t_N.$f_0() })
    },
    $B_0: function($p0, $p1) {
        if (this.$2_0 === $p0) return;
        var $v_0 = $p0 === 3 ? $P_CRM("#phoneIcon") : $P_CRM("#tabletIcon"),
            $v_1 = $p1 ? 1 : 0,
            $v_2 = this.$H_0($p0, $v_1);
        $v_0.attr("src", $v_2)
    },
    $K_0: function() {
        var $v_0 = null, $$dict_3 = this.$O_0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] }, $v_2 = $v_1.value;
            if ($v_2.$0_0 === this.$2_0) {
                $v_0 = $v_2;
                break
            }
        }
        this.$X_0($v_0)
    },
    $I_0: function($p0) {
        if (this.$2_0 === $p0) return;
        this.$M_0();
        this.$C_0($p0, 2);
        this.$W_0($p0)
    },
    $M_0: function() {
        this.$C_0(3, 0);
        this.$C_0(2, 0)
    },
    $C_0: function($p0, $p1) {
        var $v_0 = $p0 === 3 ? $P_CRM("#phoneIcon") : $P_CRM("#tabletIcon"), $v_1 = this.$H_0($p0, $p1);
        $v_0.attr("src", $v_1)
    },
    $W_0: function($p0) {
        this.set_$J_0($p0);
        this.$K_0()
    },
    $X_0: function($p0) {
        this.$Y_0();
        this.$Q_0($p0);
        this.$R_0($p0);
        this.$S_0($p0);
        this.$e_0($p0)
    },
    $Y_0: function() {
        var $v_0 = $P_CRM("#contentFrame");
        $v_0.attr("src", "")
    },
    $Q_0: function($p0) {
        var $v_0 = $p0.$0_0,
            $v_1 = $P_CRM("#PreviewBar"),
            $v_2 = $P_CRM("#contextBar"),
            $v_3 = $v_0 === 2 ? "1268px" : "760px";
        $v_1.css("min-width", $v_3);
        $v_2.css("min-width", $v_3)
    },
    $R_0: function($p0) {
        var $v_0 = $P_CRM("#deviceMock");
        $v_0.css("min-width", $p0.$1_0);
        $v_0.width($p0.$1_0);
        $v_0.height($p0.$4_0)
    },
    $S_0: function($p0) {
        var $v_0 = $P_CRM("#contentFrame");
        $v_0.width($p0.$1_0);
        $v_0.height($p0.$4_0)
    },
    $d_0: function() {
        var $v_0 = !IsNull(window
                    .IS_ONPREMISE) &&
                window.IS_ONPREMISE,
            $v_1 = !IsNull(window.IS_SPLA) && window.IS_SPLA;
        return $v_0 && !$v_1
    },
    $e_0: function($p0) {
        var $v_0 = (new Microsoft.Crm.Tools.MocaPreview.Scripts
                    .PreviewUrlBuilder(Xrm.Page.context.getClientUrl(),
                        Xrm.Page.context.getOrgUniqueName(),
                        this.$d_0()))
                .withFormFactor($p0.$0_0).withAppMetadataSync(true).build(),
            $v_1 = $P_CRM("#contentFrame");
        $v_1.attr("src", $v_0);
        var $v_2 = $v_1[0];
        this.$j_0($v_2.contentWindow)
    },
    $j_0: function($p0) {
        for (var $v_0 = [
                     "previewForm_EntityLogicalName", "previewForm_dashboardName", "previewForm_formType",
                     "previewForm_formXml", "previewForm_formId", "previewForm_etc", "previewForm_formAccessType"
                 ],
            $$arr_2 = $v_0,
            $$len_3 = $$arr_2.length,
            $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4], $v_2 = Mscrm.CrmSessionStorage.getItem($v_1);
            this.$i_0($p0, $v_1, $v_2)
        }
    },
    $i_0: function($p0, $p1, $p2) { $p0.sessionStorage.setItem($p1, $p2) },
    $H_0: function($p0, $p1) {
        if ($p0 !== 3 && $p0 !== 2) throw Error.argument("Unsupported form factor");
        if ($p0 === 3)
            switch ($p1) {
            case 0:
                return "/_imgs/formeditor/mocapreview/phone_portrait_default.png";
            case 1:
                return "/_imgs/formeditor/mocapreview/phone_portrait_hover.png";
            case 2:
                return "/_imgs/formeditor/mocapreview/phone_portrait_selected.png";
            default:
                throw Error.argumentOutOfRange("buttonState")
            }
        else
            switch ($p1) {
            case 0:
                return "/_imgs/formeditor/mocapreview/tablet_landscape_default.png";
            case 1:
                return "/_imgs/formeditor/mocapreview/tablet_landscape_hover.png";
            case 2:
                return "/_imgs/formeditor/mocapreview/tablet_landscape_selected.png";
            default:
                throw Error.argumentOutOfRange("buttonState")
            }
    }
};
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewResolution = function(width, height, caption, formFactor) {
    this.$1_0 = width;
    this.$4_0 = height;
    this.$9_0 = caption;
    this.$0_0 = formFactor
};
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewResolution.prototype = {
    $1_0: null,
    get_width: function() { return this.$1_0 },
    set_width: function(value) {
        this.$1_0 = value;
        return value
    },
    $4_0: null,
    get_height: function() { return this.$4_0 },
    set_height: function(value) {
        this.$4_0 = value;
        return value
    },
    $9_0: null,
    get_caption: function() { return this.$9_0 },
    set_caption: function(value) {
        this.$9_0 = value;
        return value
    },
    $0_0: 0,
    get_formFactor: function() { return this.$0_0 },
    set_formFactor: function(value) {
        this.$0_0 = value;
        return value
    }
};
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder = function(server, organizationName, isOnPremiseNonIfd) {
    this.$0_0 = 2;
    this.$6_0 = false;
    this.$3_0 = server;
    this.$5_0 = organizationName;
    this.$F_0 = isOnPremiseNonIfd
};
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder.prototype = {
    $0_0: 0,
    $3_0: null,
    $5_0: null,
    $F_0: false,
    $6_0: false,
    withFormFactor: function(formFactor) {
        this.$0_0 = formFactor;
        return this
    },
    withAppMetadataSync: function(sync) {
        this.$6_0 = sync;
        return this
    },
    build: function() {
        if (isNullOrEmptyString(this.$5_0)) throw Error.create("Organization name is null or empty");
        if (isNullOrEmptyString(this.$3_0)) throw Error.create("Server is null or empty");
        return this.$F_0 ? this.$V_0() : this.$U_0()
    },
    $V_0: function() {
        var $v_0 = this.$3_0.substring(0, this.$3_0.lastIndexOf("/" + this.$5_0));
        return String.format("{0}/nga/preview.htm?{1}={2}&{3}={4}&{5}={6}",
            $v_0,
            "org",
            CrmEncodeDecode.CrmUrlEncode(this.$5_0),
            "phone",
            this.$0_0 === 3 ? "true" : "false",
            "syncappmeta",
            this.$6_0 ? "true" : "false")
    },
    $U_0: function() {
        return String.format("{0}/nga/preview.htm?{1}={2}&{3}={4}&{5}={6}&{7}={8}",
            this.$3_0,
            "org",
            CrmEncodeDecode.CrmUrlEncode(this.$5_0),
            "server",
            CrmEncodeDecode.CrmUrlEncode(this.$3_0),
            "phone",
            this.$0_0 === 3 ? "true" : "false",
            "syncappmeta",
            this.$6_0 ? "true" : "false")
    }
};
Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager
    .registerClass("Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager");
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewResolution
    .registerClass("Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewResolution");
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder
    .registerClass("Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder");
Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager.previewPageFormXmlKey = "previewForm_formXml";
Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager.previewPageFormIdKey = "previewForm_formId";
Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager.previewPageEntityTypeCodeKey = "previewForm_etc";
Microsoft.Crm.Tools.MocaPreview.Scripts.MocaPreviewManager.previewPageFormAccessTypeKey = "previewForm_formAccessType";
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder
    .mobileClientUrlTemplate = "{0}/nga/preview.htm?{1}={2}&{3}={4}&{5}={6}&{7}={8}";
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder
    .onPremisesNonIfdMobileClientUrlTemplate = "{0}/nga/preview.htm?{1}={2}&{3}={4}&{5}={6}";
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder.organizationUrlParameterName = "org";
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder.serverUrlParameterName = "server";
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder.phoneUrlParameterName = "phone";
Microsoft.Crm.Tools.MocaPreview.Scripts.PreviewUrlBuilder.syncAppMetadataParameterName = "syncappmeta"