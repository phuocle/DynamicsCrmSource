Type.registerNamespace("Mscrm");
Mscrm.ArticleAction = function() {};
Mscrm.ArticleAction.prototype = { associate: 0, disassociate: 1, copyLink: 2, emailLink: 3, popOut: 4 };
Mscrm.ArticleAction.registerEnum("Mscrm.ArticleAction", false);
Mscrm.SearchWidgetCommand = function() {};
Mscrm.SearchWidgetCommand.prototype = { articlesFilter: 0, languageFilter: 1, departmentFilter: 2, sortFilter: 3 };
Mscrm.SearchWidgetCommand.registerEnum("Mscrm.SearchWidgetCommand", false);
Mscrm.SearchWidgetContext = function() {};
Mscrm.SearchWidgetContext.prototype = { notConfigured: 0, notEnabled: 1, isOutlookClient: 2, onPremise: 3, unknown: 4 };
Mscrm.SearchWidgetContext.registerEnum("Mscrm.SearchWidgetContext", false);
Mscrm.FiltersName = function() {};
Mscrm.FiltersName.prototype = {
    searchString: 0,
    articlesFilter: 1,
    languageFilter: 2,
    departmentFilter: 3,
    sortFilter: 4,
    portalDomain: 5,
    primaryCustomer: 6,
    checkSignedIn: 7,
    publicLinkPrefix: 8
};
Mscrm.FiltersName.registerEnum("Mscrm.FiltersName", false);
Mscrm.XrmReturnValue = function() {};
Mscrm.XrmReturnValue.prototype = { invalidArgument: -1, unsuccessful: 0, successful: 1 };
Mscrm.XrmReturnValue.registerEnum("Mscrm.XrmReturnValue", false);
Mscrm.SearchWidgetWallFilter = function() {};
Mscrm.SearchWidgetWallFilter
    .get_parentFormInitializationCompleted = function() { return Mscrm.SearchWidgetWallFilter.$l };
Mscrm.SearchWidgetWallFilter.set_parentFormInitializationCompleted = function(value) {
    Mscrm.SearchWidgetWallFilter.$l = value;
    return value
};
Mscrm.SearchWidgetWallFilter.commandBarClick = function(select, command, eventObject) {
    if (!Mscrm.SearchWidgetWallFilter.$l) return;
    var $v_0 = !select.getAttribute("masterComponentId") ? "" : select.getAttribute("masterComponentId"),
        $v_1 = Mscrm.SearchWidgetWallFilter.$1k($v_0),
        $v_2 = Mscrm.SearchWidgetWallFilter.$1m($v_1);
    $v_2 && $v_2.showMenu(command)
};
Mscrm.SearchWidgetWallFilter.articleFilterMenu = function(id, masterComponentId) {
    Mscrm.SearchWidgetWallFilter.$1L(masterComponentId, 0, id)
};
Mscrm.SearchWidgetWallFilter.languageFilterMenu = function(id, masterComponentId) {
    Mscrm.SearchWidgetWallFilter.$1L(masterComponentId, 1, id)
};
Mscrm.SearchWidgetWallFilter.departmentFilterMenu = function(id, masterComponentId) {
    Mscrm.SearchWidgetWallFilter.$1L(masterComponentId, 2, id)
};
Mscrm.SearchWidgetWallFilter.sortFilterMenu = function(id, masterComponentId) {
    Mscrm.SearchWidgetWallFilter.$1L(masterComponentId, 3, id)
};
Mscrm.SearchWidgetWallFilter.$1L = function($p0, $p1, $p2) {
    var $v_0 = Mscrm.SearchWidgetWallFilter.$1k($p0),
        $v_1 = Mscrm.SearchWidgetWallFilter.$1m($v_0),
        $v_2 = $v_1.getCurrentMenuItem($p1);
    if ($v_2 === $p2) return;
    $v_1.changeSelectedMenuItem($p1, $p2);
    $v_1.searchInternal(true)
};
Mscrm.SearchWidgetWallFilter.$1k = function($p0) {
    var $v_0 = $get($p0);
    if (!$v_0) return $p0 + "_container";
    var $v_1 = $P_CRM($v_0).find("#articlewall")[0], $v_2 = $P_CRM($v_1).parent()[0];
    return $v_2.id
};
Mscrm.SearchWidgetWallFilter.$1m = function($p0) { return $find($p0) };
Mscrm.SearchWidgetConstants = function() {};
Mscrm.SearchWidgetConstants.articleFilterButtons = function() {
    return [
        "SearchWidget_Filters_AllArticles", "SearchWidget_Filters_AllDraftArticles",
        "SearchWidget_Filters_AllPublishedArticles", "SearchWidget_Filters_PublishedPrivateArticles",
        "SearchWidget_Filters_PublishedPublicArticles", "SearchWidget_Filters_AllApprovedArticles"
    ]
};
Mscrm.SearchWidgetConstants.sortFilterButtons = function() {
    return [
        "SearchWidget_Filters_Relevance", "SearchWidget_Filters_Rating", "SearchWidget_Filters_NumberOfViews",
        "SearchWidget_Filters_LastModifiedDate_NewestFirst", "SearchWidget_Filters_LastModifiedDate_OldestFirst"
    ]
};
Mscrm.ArticleTypes = function() {};
Mscrm.SortTypes = function() {};
Mscrm.SearchWidget = function(element) {
    this.$$d_$2L_3 = Function.createDelegate(this, this.$2L_3);
    this.$$d_$2K_3 = Function.createDelegate(this, this.$2K_3);
    this.$$d_$2I_3 = Function.createDelegate(this, this.$2I_3);
    this.$$d_$1b_3 = Function.createDelegate(this, this.$1b_3);
    this.$$d_$1i_3 = Function.createDelegate(this, this.$1i_3);
    this.$1J_3 = new Sales.Common.Framework.Loaders.ConcurrentContentLoader;
    this.$1a_3 = -1;
    Mscrm.SearchWidget.initializeBase(this, [element])
};
Mscrm.SearchWidget.initializeLocalizedStrings = function() {
    if (!Mscrm.SearchWidget.localizedStrings) Mscrm.SearchWidget.localizedStrings = window.self.searchWidgetWallStrings
};
Mscrm.SearchWidget.$2P = function($p0) {
    if (IsNull($p0) || !Mscrm.InternalUtilities.Utilities.isRefreshForm()) return;
    var $v_0 = $find($p0.id), $v_1 = new Mscrm.InlineSearchWidgetView($v_0), $v_2 = Xrm.Page.ui;
    if (IsNull($v_2.controls)) $v_2.controls = new Xrm.XrmControls;
    if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
        $v_2.controls.add($v_1);
        Mscrm.SearchWidget.$25($p0, $v_1)
    } else {
        $v_2.addControl($v_1);
        Mscrm.InlineEditInitializerUtility.associateControlWithParentSection($p0, $v_1)
    }
};
Mscrm.SearchWidget.$25 = function($p0, $p1) {
    if (!IsNull($p0)) {
        var $v_0 = Xrm.Page.ui,
            $v_1 = $P_CRM($p0).parents("table.ms-crm-FormSection:first"),
            $v_2 = IsNull($v_1) ? "" : $v_1.attr("name");
        if (isNullOrEmptyString($v_2)) return;
        var $v_3 = $P_CRM($p0).parents("div.ms-crm-InlineTab-Read:first"), $v_4 = IsNull($v_3) ? "" : $v_3.attr("name");
        if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_4)) {
            var $v_5 = $v_0.tabs.get($v_4);
            if (!IsNull($v_5)) {
                var $v_6 = $v_5.sections.get($v_2);
                !IsNull($v_6) && $v_6.controls.add($p1.getWrapper())
            }
        }
    }
};
Mscrm.SearchWidget.$s = function($p0) { $p0 && $p0() };
Mscrm.SearchWidget.prototype = {
    $k_3: null,
    $h_3: null,
    $d_3: null,
    $i_3: null,
    $1P_3: false,
    $1e_3: false,
    $r_3: null,
    $10_3: false,
    $R_3: false,
    $1O_3: null,
    $z_3: null,
    $1X_3: false,
    $1H_3: 0,
    $Y_3: null,
    $17_3: false,
    $18_3: false,
    $c_3: null,
    $1S_3: true,
    $1Y_3: false,
    $7_3: null,
    $T_3: null,
    $9_3: null,
    $O_3: null,
    $Q_3: null,
    $P_3: null,
    $J_3: null,
    $g_3: null,
    $13_3: null,
    $t_3: false,
    $1Z_3: false,
    $S_3: false,
    $e_3: false,
    $1D_3: false,
    $1E_3: false,
    $1A_3: null,
    $1I_3: null,
    $12_3: false,
    $N_3: "",
    $11_3: false,
    $C_3: false,
    $A_3: false,
    $X_3: false,
    $1B_3: false,
    $8_3: null,
    $v_3: null,
    $1c_3: 0,
    $1y_3: 200,
    $1g_3: false,
    $1W_3: 0,
    $q_3: false,
    $1C_3: false,
    $D_3: "",
    $I_3: false,
    $Z_3: false,
    $y_3: 0,
    $U_3: null,
    $14_3: false,
    $w_3: null,
    get_wallCommandDispatcher: function() { return this.$7_3 },
    set_wallCommandDispatcher: function(value) {
        this.$7_3 = value;
        return value
    },
    get_$1j_3: function() {
        var $v_0 = isNullOrEmptyString(this.$r_3) ? 0 : Number.parseInvariant(this.$r_3);
        if (this.$I_3) $v_0 = !$v_0 || $v_0 === 1 ? 3 : $v_0;
        else $v_0 = !$v_0 || $v_0 === 6 ? 1 : $v_0;
        return Mscrm.SearchWidgetConstants.articleFilterButtons()[$v_0 - 1]
    },
    get_selectedPost: function() { return this.$8_3 },
    set_selectedPost: function(value) {
        this.$8_3 = value;
        return value
    },
    $1Q_3: null,
    $16_3: null,
    get_wallContentPageUrl: function() { return this.$1Q_3 },
    set_wallContentPageUrl: function(value) {
        this.$1Q_3 = value;
        return value
    },
    get_searchForAutoSuggestionsUsing: function() { return this.$h_3 },
    set_searchForAutoSuggestionsUsing: function(value) {
        this.$h_3 = value;
        return value
    },
    get_autoSuggestionSource: function() { return this.$d_3 },
    set_autoSuggestionSource: function(value) {
        this.$d_3 = value;
        return value
    },
    get_showRatingUsing: function() { return this.$w_3 },
    set_showRatingUsing: function(value) {
        this.$w_3 = value;
        return value
    },
    get_enableRating: function() { return this.$14_3 },
    set_enableRating: function(value) {
        this.$14_3 = value;
        return value
    },
    get_selectPrimaryCustomer: function() { return this.$i_3 },
    set_selectPrimaryCustomer: function(value) {
        this.$i_3 = value;
        return value
    },
    get_showLanguageFilter: function() { return this.$1P_3 },
    set_showLanguageFilter: function(value) {
        this.$1P_3 = value;
        return value
    },
    get_showDepartmentFilter: function() { return this.$1e_3 },
    set_showDepartmentFilter: function(value) {
        this.$1e_3 = value;
        return value
    },
    get_filterResults: function() { return this.$r_3 },
    set_filterResults: function(value) {
        this.$r_3 = value;
        return value
    },
    get_allowChangingFiltersOnUI: function() { return this.$10_3 },
    set_allowChangingFiltersOnUI: function(value) {
        this.$10_3 = value;
        return value
    },
    get_enableAutoSuggestions: function() { return this.$R_3 },
    set_enableAutoSuggestions: function(value) {
        this.$R_3 = value;
        return value
    },
    get_isControlReadOnly: function() { return this.$1X_3 },
    set_isControlReadOnly: function(value) {
        this.$1X_3 = value;
        return value
    },
    get_numberOfResults: function() { return this.$1H_3 },
    set_numberOfResults: function(value) {
        this.$1H_3 = value;
        return value
    },
    get_showContextualActions: function() { return this.$1O_3 },
    set_showContextualActions: function(value) {
        this.$1O_3 = value;
        return value
    },
    get_actionList: function() { return this.$z_3 },
    set_actionList: function(value) {
        this.$z_3 = value;
        return value
    },
    get_masterComponentId: function() { return this.$k_3 },
    set_masterComponentId: function(value) {
        this.$k_3 = value;
        return value
    },
    get_portalDomain: function() { return this.$g_3 },
    set_portalDomain: function(value) {
        this.$g_3 = value;
        return value
    },
    get_isKMEnabled: function() { return this.$t_3 },
    set_isKMEnabled: function(value) {
        this.$t_3 = value;
        return value
    },
    get_isKMConfigured: function() { return this.$1Z_3 },
    set_isKMConfigured: function(value) {
        this.$1Z_3 = value;
        return value
    },
    get_isParatureConfigured: function() { return this.$S_3 },
    set_isParatureConfigured: function(value) {
        this.$S_3 = value;
        return value
    },
    get_departmentId: function() { return this.$13_3 },
    set_departmentId: function(value) {
        this.$13_3 = value;
        return value
    },
    get_relationShipName: function() { return this.$Y_3 },
    set_relationShipName: function(value) {
        this.$Y_3 = value;
        return value
    },
    get_havePrivilegeForAssociate: function() { return this.$17_3 },
    set_havePrivilegeForAssociate: function(value) {
        this.$17_3 = value;
        return value
    },
    get_havePrivilegeForDisassociate: function() { return this.$18_3 },
    set_havePrivilegeForDisassociate: function(value) {
        this.$18_3 = value;
        return value
    },
    get_intersectTableName: function() { return this.$1A_3 },
    set_intersectTableName: function(value) {
        this.$1A_3 = value;
        return value
    },
    get_referencedEntityColumnName: function() { return this.$1I_3 },
    set_referencedEntityColumnName: function(value) {
        this.$1I_3 = value;
        return value
    },
    get_canCreateEmail: function() { return this.$12_3 },
    set_canCreateEmail: function(value) {
        this.$12_3 = value;
        return value
    },
    get_blockResult: function() { return this.$11_3 },
    set_blockResult: function(value) {
        this.$11_3 = value;
        return value
    },
    get_isUsdContext: function() { return this.$C_3 },
    set_isUsdContext: function(value) {
        this.$C_3 = value;
        return value
    },
    get_externalServiceUrl: function() { return this.$16_3 },
    set_externalServiceUrl: function(value) {
        this.$16_3 = value;
        Mscrm.SearchWidgetControl.Runtime.UrlUtility.set_externalServiceUri(Mscrm.CrmUri.create(value.toString()));
        return value
    },
    get_publicLinkPrefix: function() { return this.$D_3 },
    set_publicLinkPrefix: function(value) {
        this.$D_3 = value;
        return value
    },
    get_isHostedInTabbedControl: function() { return this.$A_3 },
    set_isHostedInTabbedControl: function(value) {
        this.$A_3 = value;
        return value
    },
    get_useNativeCrm: function() { return this.$I_3 },
    set_useNativeCrm: function(value) {
        this.$I_3 = value;
        return value
    },
    get_useExternalPortal: function() { return this.$Z_3 },
    set_useExternalPortal: function(value) {
        this.$Z_3 = value;
        return value
    },
    get_totalResultCount: function() { return this.$y_3 },
    set_totalResultCount: function(value) {
        this.$y_3 = value;
        return value
    },
    get_selectDefaultLanguage: function() { return this.$U_3 },
    set_selectDefaultLanguage: function(value) {
        this.$U_3 = value;
        return value
    },
    add_OnResultOpened: function(value) { this.get_events().addHandler("OnResultOpened", value) },
    remove_OnResultOpened: function(value) { this.get_events().removeHandler("OnResultOpened", value) },
    add_OnSelection: function(value) { this.get_events().addHandler("OnSelection", value) },
    remove_OnSelection: function(value) { this.get_events().removeHandler("OnSelection", value) },
    add_OnSearchComplete: function(value) { this.get_events().addHandler("OnSearchComplete", value) },
    remove_OnSearchComplete: function(value) { this.get_events().removeHandler("OnSearchComplete", value) },
    add_OnPreSearch: function(value) { this.get_events().addHandler("OnPostSearch", value) },
    remove_OnPreSearch: function(value) { this.get_events().removeHandler("OnPostSearch", value) },
    add_OnPostSearch: function(value) { this.get_events().addHandler("OnPreSearch", value) },
    remove_OnPostSearch: function(value) { this.get_events().removeHandler("OnPreSearch", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Mscrm.SearchWidget.initializeLocalizedStrings();
        this.$1D_3 = Mscrm.SessionInfo.isOutlookClient();
        this.$1E_3 = !Mscrm.SessionInfo.isOnline();
        if (this.$1E_3) {
            this.$2B_3();
            return
        }
        this.$e_3 = this.$t_3 && !this.$1D_3 && !this.$1E_3 && Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable();
        if (this.$e_3) {
            this.$28_3();
            this.$2O_3();
            this.$2G_3();
            this.$2C_3()
        }
        this.$2J_3();
        this.$2D_3();
        if (this.$A_3 && !IsNull(this.get_eventManager())) {
            this.get_eventManager().subscribeEvent(111, this.get_id());
            if (this.$R_3) this.$X_3 = true
        }
        if (Mscrm.InternalUtilities.Utilities.isTurboForm()) this.$1i_3();
        else Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$1i_3, 2)
    },
    $2B_3: function() {
        var $v_0 = $P_CRM($get(this.get_element().id));
        !IsNull($v_0) && $v_0.parent().parent().hide()
    },
    $2F_3: function() {
        var $v_0 = this.$2A_3();
        this.$7_3.dispatchCommand("showerrorcontent",
            Mscrm.SearchWidgetErrorHelper.getErrorCause($v_0),
            Mscrm.SearchWidgetErrorHelper.getErrorAction($v_0))
    },
    $2A_3: function() {
        if (!Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable() && window.IS_ONPREMISE) return 3;
        else if (!this.$t_3) return 1;
        else if (this.$1D_3) return 2;
        return 4
    },
    $2O_3: function() {
        var $v_0 = this.get_element().id.substr(0, this.get_element().id.lastIndexOf("_container"));
        this.$T_3 = $get($v_0 + "_findCriteriaButton", this.get_element().parentNode);
        this.$9_3 = $get($v_0 + "_searchTextBox", this.get_element().parentNode);
        $addHandler(this.$T_3, "click", this.$$d_$1b_3);
        $addHandler(this.$9_3, "keydown", this.$$d_$2I_3);
        $addHandler(this.$9_3, "cut", this.$$d_$2K_3);
        $addHandler(this.$9_3, "paste", this.$$d_$2K_3)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 111:
            if (this.$A_3 && (this.$q_3 || this.$I_3)) {
                var $v_0 = this.get_element().id.substr(0, this.get_element().id.lastIndexOf("_container"));
                Mscrm.SearchWidgetReflowHelper.reflowControl($v_0, this.$A_3);
                if (this.$1B_3) {
                    this.$1B_3 = false;
                    this.$X_3 = false;
                    this.$1t_3()
                } else if (this.$X_3 && !IsNull(this.$7_3)) {
                    this.$X_3 = false;
                    this.searchInternal(false)
                }
            }
            break
        }
        return null
    },
    get_articleFilterButton: function() { return this.$O_3 },
    get_languageFilterButton: function() { return this.$Q_3 },
    get_departmentFilterButton: function() { return this.$P_3 },
    get_sortFilterButton: function() { return this.$J_3 },
    $2D_3: function() {
        this.$k_3 = this.get_element().parentNode.id;
        this.$O_3 = this.$19_3("kmWallFilterButton", this.get_$1j_3());
        this.$Q_3 = this.$19_3("kmWallFilterLanguageButton", "lang_" + this.$U_3);
        this.$P_3 = this.$19_3("kmWallFilterDepartmentButton", "-1");
        this.$J_3 = this.$19_3("kmWallFilterSortButton", Mscrm.SearchWidgetConstants.sortFilterButtons()[0]);
        this.setFilterMenuWidths()
    },
    setFilterMenuWidths: function() {
        this.$1K_3(this.$O_3, "kmWallFilterButton");
        this.$1K_3(this.$Q_3, "kmWallFilterLanguageButton");
        this.$1K_3(this.$J_3, "kmWallFilterSortButton");
        this.$1K_3(this.$P_3, "kmWallFilterDepartmentButton")
    },
    $1K_3: function($p0, $p1) {
        if (!IsNull($p0) && !IsNull($p0.get_menu())) {
            var $v_0 = $P_CRM("#" + $p1, this.get_element().parentNode).outerWidth();
            $p0.get_menu().set_width($v_0 < 200 ? 200 : $v_0)
        }
    },
    $1s_3: function() { this.$7_3 = new Mscrm.SearchWidgetWallCommandDispatcher(this) },
    $19_3: function($p0, $p1) {
        var $v_0 = $get($p0, this.get_element().parentNode);
        if (!$v_0) return null;
        var $v_1 = Mscrm.CrmUIComponent.crmCreate(Mscrm.WallCommandBarButton, null, null, null, $v_0);
        $v_1.get_menu().set_masterComponentId(this.$k_3);
        if (!IsNull($p1)) {
            $p1 = $p1 !== "-1" ? $p1 : this.$27_3($v_0);
            $p1 && $v_1.get_menu().changeSelectedMenuItem($p1)
        }
        return $v_1
    },
    $2C_3: function() {
        if (!this.$R_3 ||
            !this.$e_3 ||
            Mscrm.FeatureControl.get_Current()
            .isFeatureEnabled("FCB.ServiceCaseTopicAnalysis") &&
            this.$d_3 === "1") return;
        var $v_0 = Xrm.Page.getAttribute(this.$h_3);
        !IsNull($v_0) && $v_0.addOnChange(this.$$d_$2L_3)
    },
    $2G_3: function() {
        if (!this.$14_3 || IsNull(this.$w_3)) return;
        var $v_0 = Xrm.Page.getAttribute(this.$w_3);
        if (!IsNull($v_0));
    },
    $27_3: function($p0) {
        var $v_0 = $p0.getAttribute("mastercomponentid"), $v_1 = $get($v_0);
        if (!$v_1) return null;
        var $v_2 = $get($p0.id + "_Menu", $v_1), $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
        if (!$v_3) return null;
        return $v_3.id
    },
    $1b_3: function($p0) {
        this.searchInternal(true);
        $p0.stopPropagation()
    },
    $K_3: function($p0) {
        if (!$p0) return null;
        return $p0.get_menu().get_currentMenu()
    },
    $2I_3: function($p0) {
        if (this.$v_3) {
            window.clearTimeout(this.$v_3);
            this.$v_3 = null
        }
        if ($p0.keyCode === 13) {
            this.$1b_3($p0);
            $p0.stopPropagation();
            $p0.preventDefault()
        } else {
            var $$t_1 = this;
            window.setTimeout(function() {
                    if ($p0
                        .keyCode ===
                        8 ||
                        $p0.keyCode === 127) $$t_1.$1c_3 !== $$t_1.$9_3.value.length && $$t_1.$1U_3($p0);
                    else $$t_1.$2H_3($p0.keyCode) && $$t_1.$1U_3($p0)
                },
                1)
        }
    },
    $2K_3: function($p0) {
        var $$t_1 = this;
        window.setTimeout(function() { $$t_1.$1U_3($p0) }, 1)
    },
    $1U_3: function($p0) {
        if (this.$9_3.value.length > 3) {
            var $$t_2 = this, $v_0 = function() { $$t_2.$1b_3($p0) };
            this.$v_3 = window.setTimeout($v_0, this.$1y_3)
        }
    },
    $2H_3: function($p0) {
        switch ($p0) {
        case 8:
        case 46:
        case 9:
        case 11:
        case 16:
        case 17:
        case 18:
        case 27:
        case 32:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 113:
        case 115:
        case 120:
        case 121:
        case 123:
        case 34:
        case 33:
        case 20:
        case 45:
        case 91:
        case 92:
        case 112:
        case 117:
        case 118:
            return false
        }
        return true
    },
    $28_3: function() {
        WatermarkTextBox_OnLoad();
        Mscrm.SearchWidgetWallFilter.$l = true
    },
    $2J_3: function() {
        var $$t_1 = this;
        this.$1J_3.loadContent(this.$1Q_3,
            "html",
            function($p1_0) {
                $$t_1.$c_3 = $p1_0;
                if ($$t_1.$1S_3 && isNullOrEmptyString($$t_1.get_element().innerHTML)) {
                    $$t_1.get_element().innerHTML = $$t_1.$c_3;
                    $$t_1.$1s_3();
                    if ($$t_1.$e_3) $$t_1.$1u_3();
                    else $$t_1.$2F_3();
                    $$t_1.$1g_3 = true
                }
                _Type.hasMethod($$t_1, "get_wallCommandDispatcher") && !$$t_1.$7_3 && $$t_1.$1s_3()
            })
    },
    $1u_3: function() {
        if (!this.$1Y_3) this.$1Y_3 = true;
        else return;
        this.$I_3 &&
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.KnowledgeArticle") &&
            this.$7_3.dispatchCommand("showerrorcontent",
                Mscrm.SearchWidget.localizedStrings.KMWALL_KNOWLEDGEARTICLE_NOTAVALIABLE,
                "");
        this.$d_3 === "1" &&
            window.ORG_LANGUAGE_CODE !== 1033 &&
            this.$7_3.dispatchCommand("showerrorcontent",
                Mscrm.SearchWidget.localizedStrings.KMWALL_TEXTANALYTICSCONFIGURE_ERROR_STRING,
                "");
        if (this.$S_3) {
            var $$t_2 = this, $$t_3 = this;
            Mscrm.SearchWidgetControl.Runtime.AuthenticationService.get_checkSignedIn().done(function($p1_0) {
                $$t_2.$1C_3 = true;
                if (!$p1_0)
                    $$t_2.$7_3.dispatchCommand("showerrorcontent",
                        Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_CONNECTION_ERROR_STRING,
                        "");
                else {
                    $$t_2.$q_3 = true;
                    $$t_2.$1v_3()
                }
            }).fail(function($p1_0) {
                $$t_3.$1C_3 = true;
                $$t_3.$7_3.dispatchCommand("showerrorcontent", Mscrm.SearchWidgetErrorHelper.getErrorMessage($p1_0), "")
            })
        } else this.$1v_3()
    },
    $1v_3: function() {
        if (!this.$C_3) {
            var $$t_2 = this;
            window.setTimeout(function() {
                    if (!$$t_2.$A_3 || $$t_2.$1w_3()) {
                        var $v_0 = $$t_2.get_element().id.substr(0, $$t_2.get_element().id.lastIndexOf("_container"));
                        Mscrm.SearchWidgetReflowHelper.reflowControl($v_0, $$t_2.$A_3);
                        $$t_2.$1t_3()
                    } else if ($$t_2.$A_3) $$t_2.$1B_3 = true
                },
                1e3)
        } else {
            var $v_1 = this.get_element().id.substr(0, this.get_element().id.lastIndexOf("_container"));
            Mscrm.SearchWidgetReflowHelper.reflowControl($v_1, this.$A_3);
            this.searchInternal(true)
        }
    },
    $1t_3: function() {
        var $$t_0 = this;
        this.$21_3(function() {
            $$t_0.$7_3.dispatchCommand("getassociatedarticles",
                $$t_0.$N_3,
                $$t_0.$1V_3(),
                $$t_0.$1r_3(),
                $$t_0.$1p_3(),
                $$t_0.$K_3($$t_0.$J_3),
                $$t_0.$g_3,
                $$t_0.$i_3,
                true,
                $$t_0.$D_3)
        })
    },
    $1i_3: function() {
        if (isNullOrEmptyString(this.get_element().innerHTML) && !IsNull(this.$c_3)) {
            this.get_element().innerHTML = this.$c_3;
            this.$1u_3()
        }
        Mscrm.SearchWidget.$2P(this.get_element());
        var $v_0 = this.get_element().id.substr(0, this.get_element().id.lastIndexOf("_container")), $$t_2 = this;
        $P_CRM(window).resize(function($p1_0) { Mscrm.SearchWidgetReflowHelper.reflowControl($v_0, $$t_2.$A_3) });
        if (this.$S_3)
            this.$1a_3 = window.setInterval(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.ping, 1.2e5);
        this.$1S_3 = true
    },
    dispatchWallCommand: function(commandName, parameters) { this.$7_3.dispatchCommand(commandName, parameters) },
    dispose: function() {
        if (this.get_isDisposed()) return;
        window.clearInterval(this.$1a_3);
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.dispose(null);
        !IsNull(this.$1J_3) && this.$1J_3.dispose();
        if (!IsNull(this.$7_3)) {
            this.$7_3.dispose();
            this.$7_3 = null
        }
        this.$c_3 = null;
        $P_CRM(this.get_element()).empty().remove();
        if (this.$e_3) {
            $removeHandler(this.$T_3, "click", this.$$d_$1b_3);
            $removeHandler(this.$9_3, "keydown", this.$$d_$2I_3);
            $removeHandler(this.$9_3, "cut", this.$$d_$2K_3);
            $removeHandler(this.$9_3, "paste", this.$$d_$2K_3);
            $P_CRM(window).unbind("resize")
        }
        if (this.$R_3)
            if (!IsNull(Xrm.Page.data.entity) && !IsNull(Xrm.Page.data.entity.attributes)) {
                var $v_0 = null;
                try {
                    $v_0 = Xrm.Page.getAttribute(this.$h_3)
                } catch ($$e_1) {
                }
                !IsNull($v_0) && $v_0.removeOnChange(this.$$d_$2L_3)
            }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $1l_3: function($p0) {
        switch ($p0) {
        case 0:
            return !this.$O_3 ? null : this.$O_3.get_menu();
        case 1:
            return !this.$Q_3 ? null : this.$Q_3.get_menu();
        case 2:
            return !this.$P_3 ? null : this.$P_3.get_menu();
        case 3:
            return !this.$J_3 ? null : this.$J_3.get_menu()
        }
        return null
    },
    getCurrentMenuItem: function(command) {
        switch (command) {
        case 0:
            return this.$K_3(this.$O_3);
        case 1:
            return this.$K_3(this.$Q_3);
        case 2:
            return this.$K_3(this.$P_3);
        case 3:
            return this.$K_3(this.$J_3)
        }
        return null
    },
    changeSelectedMenuItem: function(command, id) {
        var $v_0 = this.$1l_3(command);
        $v_0 && $v_0.changeSelectedMenuItem(id)
    },
    showMenu: function(command) {
        var $v_0 = this.$1l_3(command);
        $v_0 && $v_0.processAndShowMenu()
    },
    setSearchString: function(searchString) {
        this.$9_3.value = searchString;
        WatermarkTextBox_OnChange(this.$9_3)
    },
    getSelectedResults: function() {
        if (this.$8_3) return Sys.Serialization.JavaScriptSerializer.serialize(this.$8_3);
        else return null
    },
    getTotalResultCount: function() { return this.$y_3 },
    openSearchResult: function(resultNumber, mode) {
        var $v_0 = this.$7_3.openArticle(resultNumber, mode);
        return $v_0
    },
    setSearchQuery: function(value) { return this.Search(value) },
    Search: function(value) {
        try {
            this.setSearchString(value);
            this.$23_3();
            return 1
        } catch ($$e_1) {
            return 0
        }
    },
    $23_3: function() {
        window.clearTimeout(this.$1W_3);
        if (!this.$1g_3) {
            var $$t_0 = this;
            this.$1W_3 = window.setTimeout(function() { $$t_0.$23_3() }, 1e3)
        } else this.searchInternal(true)
    },
    searchInternal: function(isUserTriggered) {
        if (this.$S_3 && !this.$1C_3) return;
        var $v_0 = this.$1p_3(), $v_1 = this.$1r_3(), $v_2 = this.$K_3(this.$J_3);
        this.$N_3 = "WatermarkTextBox_Gray" === this.$9_3.className ? "" : this.$9_3.value;
        this.$1c_3 = this.$9_3.value.length;
        this.$2Z_3();
        !this.$C_3 &&
            Mscrm.MetricsReporting.instance().addMetric("SearchWidget.Search",
                Mscrm.TelemetryHelper.getDetailsForTelemetry());
        if (!isUserTriggered) {
            var $$t_4 = this;
            this.$21_3(function() {
                $$t_4.$7_3.dispatchCommand("refreshall",
                    $$t_4.$N_3,
                    $$t_4.$1V_3(),
                    $v_1,
                    $v_0,
                    $v_2,
                    $$t_4.$g_3,
                    $$t_4.$i_3,
                    $$t_4.$q_3,
                    $$t_4.$D_3)
            })
        } else
            this.$7_3.dispatchCommand("refreshall",
                this.$N_3,
                this.$1V_3(),
                $v_1,
                $v_0,
                $v_2,
                this.$g_3,
                this.$i_3,
                this.$q_3,
                this.$D_3);
        this.$2Y_3()
    },
    $1V_3: function() {
        var $v_0 = this.$K_3(this.$O_3);
        if (!$v_0 || !this.$10_3) $v_0 = this.get_$1j_3();
        return $v_0
    },
    $1r_3: function() {
        var $v_0 = this.$K_3(this.$Q_3);
        if (!$v_0 || !this.$1P_3) {
            if (!IsNull(this.$U_3) &&
                !isNullOrEmptyString(this.$U_3.toString()) &&
                this.$U_3
                .toString() !==
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()) return this.$U_3.toString();
            return ""
        } else $v_0 = $v_0.substring(5, $v_0.length);
        return $v_0 === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() ? "" : $v_0
    },
    $1p_3: function() {
        var $v_0 = this.$K_3(this.$P_3);
        if (isNullOrEmptyString($v_0)) $v_0 = this.$13_3;
        return $v_0
    },
    $29_3: function($p0) {
        var $v_0 = "";
        if (!this.$R_3) {
            Mscrm.SearchWidget.$s($p0);
            return
        }
        if (this.$I_3 &&
            Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.ServiceCaseTopicAnalysis") &&
            this.$d_3 === "1") {
            var $v_1 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
                    new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId())),
                $$t_9 = this,
                $$t_A = this;
            Xrm.Internal.messages.retrieveKeyPhrasesForKnowledgeSearch($v_1).then(function($p1_0) {
                    var $v_2 = $p1_0;
                    if (!IsNull($v_2.keyPhrases) && $v_2.keyPhrases.length > 0) {
                        $v_0 = $v_2.keyPhrases[0];
                        for (var $v_3 = 1; $v_3 < $v_2.keyPhrases.length; $v_3++) $v_0 += " " + $v_2.keyPhrases[$v_3]
                    }
                    $$t_9.$N_3 = $v_0;
                    Mscrm.SearchWidget.$s($p0)
                },
                function($p1_0) {
                    $$t_A.$7_3.dispatchCommand("showerrorcontent",
                        Mscrm.SearchWidget.localizedStrings.KMWALL_AUTOSUGGESTION_ANALYTICSSERVICE_GENERICERROR,
                        "")
                })
        } else {
            var $v_4 = Xrm.Page.getAttribute(this.$h_3);
            if (!IsNull($v_4)) {
                switch ($v_4.getAttributeType()) {
                case "lookup":
                    var $v_5 = $v_4.getValue();
                    if (!IsNull($v_5) && $v_5.length > 0) $v_0 = $v_5[0].name;
                    break;
                default:
                    $v_0 = $v_4.getValue();
                    break
                }
                if (!IsNull($v_0)) $v_0 = $v_0.replace(new RegExp("\x0a", "g"), " ")
            }
            this.$N_3 = $v_0;
            Mscrm.SearchWidget.$s($p0)
        }
    },
    $21_3: function($p0) {
        if (!this.$R_3) {
            Mscrm.SearchWidget.$s($p0);
            return
        }
        var $$t_1 = this;
        this.$29_3(function() {
            !isNullOrEmptyString($$t_1.$N_3) && $$t_1.setSearchString($$t_1.$N_3);
            Mscrm.SearchWidget.$s($p0)
        })
    },
    $2L_3: function($p0) {
        this.$X_3 = false;
        if (!this.$A_3 || this.$1w_3()) this.searchInternal(false);
        else if (this.$A_3) this.$X_3 = true
    },
    $1w_3: function() {
        var $v_0 = "searchwidgetcontrol_",
            $v_1 = this.get_id().substr(0,
                this.get_id()
                .lastIndexOf("_container")),
            $v_2;
        if ($v_1.indexOf($v_0) >= 0 && $v_1.length > $v_0.length) {
            var $v_3 = $v_1.substr($v_0.length);
            $v_2 = $find($v_3);
            if (!IsNull($v_2)) return $v_2.getActiveTabId() === "ArticlesTab"
        }
        return false
    },
    $22_3: function($p0) {
        var $v_0 = new Mscrm.ArticleEventArgs($p0);
        this.fireControlEvent("OnResultOpened", $v_0)
    },
    $1h_3: function($p0) {
        var $v_0 = new Mscrm.ArticleEventArgs($p0);
        this.fireControlEvent("OnSelection", $v_0)
    },
    $2a_3: function() { this.fireControlEvent("OnSearchComplete", new Sys.EventArgs) },
    $2Z_3: function() { this.fireControlEvent("OnPostSearch", new Sys.EventArgs) },
    $2Y_3: function() { this.fireControlEvent("OnPreSearch", new Sys.EventArgs) },
    setFocus: function() { this.$9_3.focus() }
};
Mscrm.ArticleEventArgs = function(articlePost) {
    Mscrm.ArticleEventArgs.initializeBase(this);
    this.articlePost = articlePost
};
Mscrm.ArticleEventArgs.prototype = { articlePost: null };
Mscrm.SearchWidgetActionHelper = function() {};
Mscrm.SearchWidgetActionHelper.generateExternalLink = function(publicLinkPrefix, articleId) {
    return publicLinkPrefix + CrmEncodeDecode.CrmUrlEncode(articleId)
};
Mscrm.SearchWidgetActionHelper.generateUrl = function(iPostObject, useNativeCrm, isCopy, publicLinkPrefix) {
    if (useNativeCrm) return Mscrm.SearchWidgetActionHelper.generateUrlForNativeCrm(iPostObject, publicLinkPrefix);
    var $v_0 = "Public", $v_1 = iPostObject.get_published();
    if ($v_1 && $v_0 === "Public")
        return Mscrm.SearchWidgetActionHelper.generateExternalLink(publicLinkPrefix, iPostObject.get_articleId());
    else if ($v_1 && $v_0 === "Private") {
        isCopy && alert(Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_PRIVATE_ARTICLE);
        return CrmEncodeDecode.CrmUrlDecode(iPostObject.get_serviceDeskUri())
    } else {
        isCopy && alert(Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_DRAFT_ARTICLE);
        return CrmEncodeDecode.CrmUrlDecode(iPostObject.get_serviceDeskUri())
    }
};
Mscrm.SearchWidgetActionHelper.generateUrlForNativeCrm = function(iPostObject, publicLinkPrefix) {
    if (!iPostObject.get_published()) {
        alert(Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_UNPUBLISHED_ARTICLE);
        return ""
    } else if (publicLinkPrefix) {
        var $v_0 = "{kbnum}", $v_1 = iPostObject.get_articleId().split("_")[0];
        return publicLinkPrefix.replace($v_0, $v_1)
    } else return ""
};
Mscrm.SearchWidgetActionHelper.incrementKnowledgeArticleViewCount = function(article) {
    var $v_0 = new Xrm.Objects.EntityReference("knowledgearticle",
            new Microsoft.Crm.Client.Core.Framework.Guid(article.get_articleUId())),
        $v_1 = new Date;
    Xrm.Internal.messages.incrementKnowledgeArticleViewCount($v_0, $v_1, 1, 1)
        .then(Mscrm.InternalUtilities.ClientApiUtility.actionCompleteCallback,
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    article.set_timesViewed(article.get_timesViewed() + 1)
};
Mscrm.SearchWidgetActionHelper.markArticleSentToCustomer = function(knowledgeArticleId, incidentId) {
    var $v_0 =
            "<fetch version='1.0' mapping='logical'><entity name='knowledgearticleincident'><attribute name='issenttocustomer'/><filter type='and'><condition attribute='incidentid' operator='eq' value='" + incidentId + "' /><condition attribute='knowledgearticleid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(knowledgeArticleId) + "' /></filter></entity></fetch>",
        $v_1 = null;
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            $v_1 = $p1_0.entityCollection;
            if ($v_1.get_count() > 0 && !$v_1.get_item(0).getValue("issenttocustomer").get_value()) {
                var $v_2 = $v_1.get_entities()[0];
                Mscrm.SearchWidgetActionHelper.$2b($v_2.get_identifier().Id, true)
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.SearchWidgetActionHelper.$2b = function($p0, $p1) {
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(1), $v_3 = "issenttocustomer";
    $v_2[0] = $v_3;
    $v_0[$v_3] = 0;
    $v_1[$v_3] = $p1;
    var $v_4 = new Xrm.Objects.EntityReference("knowledgearticleincident", $p0),
        $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_4,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_5.get_changedFieldNames().addRange($v_2);
    Xrm.Internal.messages.update($v_5).then(Mscrm.InternalUtilities.ClientApiUtility.actionCompleteCallback,
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.SearchWidgetActionHelper
    .openEmailLinkActivity = function(activityTypeCode, articleId, question, articleLink, selectPrimaryCustomer) {
        var $v_0 = Xrm.Page.data.entity.getId(),
            $v_1 = Xrm.Page.data.entity.getPrimaryAttributeValue(),
            $v_2 = Xrm.Page.data.entity.getEntityName(),
            $v_3 = "";
        if (!IsNull(articleId)) $v_3 = String.format("articleid=" + CrmEncodeDecode.CrmUrlEncode(articleId));
        else {
            var $v_5 = "<a href=" +
                CrmEncodeDecode.CrmUrlEncode(articleLink) +
                "> " +
                CrmEncodeDecode.CrmUrlEncode(question) +
                "</a>";
            $v_3 = String.format("description=" + CrmEncodeDecode.CrmUrlEncode(CrmEncodeDecode.CrmUrlEncode($v_5)))
        }
        $v_3 += String.format("&regardingobjectid={0}&regardingobjecttypecode={1}&regardingobjectidname={2}",
            CrmEncodeDecode.CrmUrlEncode($v_0),
            CrmEncodeDecode.CrmUrlEncode($v_2),
            CrmEncodeDecode.CrmUrlEncode($v_1));
        if (!IsNull(selectPrimaryCustomer))
            if (!IsNull(Mscrm.SearchWidgetActionHelper.$1o(selectPrimaryCustomer))) {
                var $v_6 = Mscrm.SearchWidgetActionHelper.$1o(selectPrimaryCustomer);
                $v_3 += "&partyid=" + CrmEncodeDecode.CrmUrlEncode($v_6[0].id);
                $v_3 += "&partytype=" +
                    CrmEncodeDecode.CrmUrlEncode(Xrm.Internal.getEntityCode($v_6[0].entityType).toString());
                $v_3 += "&partyname=" + CrmEncodeDecode.CrmUrlEncode($v_6[0].name)
            }
        var $v_4 = {};
        $v_4["preservePreviousContent"] = true;
        openFrmObj($v_3, null, activityTypeCode, null, Mscrm.NavigationMode.DefaultNavigationMode, $v_4)
    };
Mscrm.SearchWidgetActionHelper.$1o = function($p0) {
    var $v_0 = null, $v_1 = Xrm.Page.getAttribute($p0);
    if (!IsNull($v_1)) $v_0 = $v_1.getValue();
    return $v_0
};
Mscrm.SearchWidgetWall = function(wallService, objSearchWidget) {
    this.$$d_$2X_0 = Function.createDelegate(this, this.$2X_0);
    this.set_wallService(wallService);
    this.$0_0 = objSearchWidget;
    this.$3_0 = $P_CRM($get(this.get_searchWidgetWallId()));
    this.$B_0 = this.$3_0.find("#kmwallContainer");
    this.$1T_0 = this.$3_0.find("#kmPostTemplate");
    this.$1R_0 = this.$3_0.find("#kmwallErrorMessageContainer");
    this.$15_0 = this.$3_0.find("#kmErrorMessageTemplate");
    this.$1N_0 = this.$3_0.find("#kmwallControlErrorMessageTemplate");
    this.$1F_0 = this.$3_0.parent().find("#DialogLoadingDiv");
    this.$1f_0 = this.$3_0.find("#showMoreLinkTemplate");
    this.$2R_0(objSearchWidget.$z_3, objSearchWidget.$1O_3)
};
Mscrm.SearchWidgetWall.disposeArticleRow = function(articleRow, isPopOut) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(articleRow)) {
        articleRow.unbind("mouseenter");
        articleRow.unbind("mouseleave");
        articleRow.unbind("focus");
        articleRow.unbind("click");
        if (!isPopOut) {
            var $v_1 = articleRow.find(".kmTitle"),
                $v_2 = !IsNull($v_1) ? $v_1.children("a") : null,
                $v_3 = !IsNull($v_2) ? $v_2.first() : null,
                $v_4 = articleRow.find(".iconThumbnail a:first");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
                $v_3.unbind("click");
                $v_3.unbind("focus")
            }
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                $v_4.unbind("click");
                $v_4.unbind("focus")
            }
        }
        var $v_0 = articleRow.find(isPopOut ? ".contentArticleActions" : ".articleActions");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_5 = $v_0.find(".actionSeperator");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5)) {
                $v_5.unbind("mouseenter");
                $v_5.unbind("mouseleave");
                $v_5.unbind("click")
            }
        }
    }
};
Mscrm.SearchWidgetWall.setArticleActionsReflow = function(articleTitle) {
    var $v_0 = articleTitle.width(),
        $v_1 = articleTitle.parents(".wallbody").width(),
        $v_2 = articleTitle.parent().find(".articleActions"),
        $v_3 = $v_1 - $v_0 <= 112;
    $v_2.toggleClass("articleActionreflow", $v_3)
};
Mscrm.SearchWidgetWall.setImageProperties = function(articleRow, currentPost) {
    var $v_0 = articleRow.find("#kmArticleImage");
    Mscrm.SearchWidgetContentHelper
        .setHighContrastBasedImageSource($v_0,
            window.CDNURL + "/_imgs/searchwidget/searchwidgetarticleicon_24.png",
            "ms-crm-ImageStrip-searchwidget_articleicon");
    $v_0.attr("alt", Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING)
};
Mscrm.SearchWidgetWall.prototype = {
    $V_0: null,
    $L_0: 0,
    $0_0: null,
    $a_0: null,
    $F_0: null,
    $3_0: null,
    $B_0: null,
    $1T_0: null,
    $1R_0: null,
    $1N_0: null,
    $15_0: null,
    $1f_0: null,
    $1F_0: null,
    $1G_0: null,
    $T_0: null,
    $m_0: false,
    $o_0: false,
    $n_0: false,
    $p_0: false,
    $b_0: false,
    _disposed: false,
    get_externalServiceUrl: function() { return this.$0_0.$16_3 },
    get_canShowDisassociateAction: function() { return this.$o_0 && this.get_havePrivilegeForDisassociate() },
    set_canShowDisassociateAction: function(value) {
        this.$o_0 = value;
        return value
    },
    get_canShowAssociateAction: function() { return this.$m_0 && this.get_havePrivilegeForAssociate() },
    set_canShowAssociateAction: function(value) {
        this.$m_0 = value;
        return value
    },
    get_canShowCopyAction: function() {
        return this.$n_0 &&
            Mscrm.CrmBrowser.get_currentBrowser().get_agent() === 1 &&
            (!this.get_useNativeCrm() || this.$0_0.$Z_3)
    },
    set_canShowCopyAction: function(value) {
        this.$n_0 = value;
        return value
    },
    get_canShowEmailAction: function() {
        return this.$p_0 && this.get_havePrivilegeForAssociate() && this.get_canCreateEmail()
    },
    set_canShowEmailAction: function(value) {
        this.$p_0 = value;
        return value
    },
    get_canShowPopOutAction: function() { return this.$b_0 },
    set_canShowPopOutAction: function(value) {
        this.$b_0 = value;
        return value
    },
    get_wallContainerId: function() { return this.$V_0 },
    set_wallContainerId: function(value) {
        this.$V_0 = value;
        return value
    },
    get_isDisposed: function() { return this._disposed },
    get_searchWidgetWallId: function() { return this.$0_0.get_element().id },
    get_wallService: function() { return this.$a_0 },
    set_wallService: function(value) {
        this.$a_0 = value;
        return value
    },
    get_pageSize: function() { return this.$0_0.$1H_3 },
    get_relationShipName: function() { return this.$0_0.$Y_3 },
    get_havePrivilegeForAssociate: function() { return this.$0_0.$17_3 },
    get_havePrivilegeForDisassociate: function() { return this.$0_0.$18_3 },
    get_pageNumber: function() { return this.$L_0 },
    set_pageNumber: function(value) {
        this.$L_0 = value;
        return value
    },
    get_canCreateEmail: function() { return this.$0_0.$12_3 },
    get_useNativeCrm: function() { return this.$0_0.$I_3 },
    get_isParatureConfigured: function() { return this.$0_0.$S_3 },
    get_posts: function() { return this.$F_0 },
    getWallJQuery: function() { return this.$3_0 },
    refreshAll: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    fetchAll: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    loadSearchResults: function(isAppend) {
        for (var parameters = [], $$pai_9 = 1;
            $$pai_9 < arguments.length;
            ++$$pai_9
        ) parameters[$$pai_9 - 1] = arguments[$$pai_9];
        setPerfMarkerTimestamp("LoadSearchResultsStart");
        var $v_0 = parameters[0], $v_1 = parameters[7];
        if (!this.$0_0.$I_3 && !$v_1) {
            this.showError(Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_CONNECTION_ERROR_STRING, "");
            return
        }
        if (this.$0_0.$I_3 && !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.KnowledgeArticle")) {
            this.showError(Mscrm.SearchWidget.localizedStrings.KMWALL_KNOWLEDGEARTICLE_NOTAVALIABLE, "");
            return
        }
        if (isNullOrEmptyString($v_0)) return;
        if (!IsNull(parameters[6])) Mscrm.SearchWidgetWall.$u = parameters[6].toString();
        if (!IsNull(parameters[8])) Mscrm.SearchWidgetWall.$D = parameters[8].toString();
        setPerfMarkerTimestamp("ParatureSearchResultStart");
        var $v_2 = new Mscrm.RetrieveArticlePostRequest;
        $v_2.set_pagingCookie(null);
        $v_2.set_parameters({});
        $v_2.get_parameters()["searchString"] = parameters[0];
        $v_2.get_parameters()["pagesize"] = this.get_pageSize();
        $v_2.get_parameters()["startpage"] = this.$L_0 + 1;
        if (this.$0_0.$I_3) this.$2S_0.apply(this, [$v_2].concat(parameters));
        else this.$2U_0.apply(this, [$v_2].concat(parameters));
        if (!this.$0_0.$C_3) this.$2V_0();
        else
            !IsNull(this.$3_0.parents("#SearchControlContainerDiv")) &&
                this.$3_0.parents("#SearchControlContainerDiv").css("height", "auto");
        this.$3_0.parent().find(".filterdiv").removeClass("hideFilter");
        this.$j_0(true, isAppend);
        this.$F_0 = new Array(0);
        var $$t_8 = this;
        this.$a_0.retrievePosts($v_2,
            function($p1_0) {
                setPerfMarkerTimestamp("ParatureSearchResultEnd");
                $$t_8.$2M_0($p1_0,
                    function() {
                        $$t_8.$3_0.find(".wallMessageContainer").empty();
                        $$t_8.$3_0.find(".wallMessageContainer").hide();
                        $$t_8.$B_0.show();
                        var $$t_7;
                        $$t_8.$F_0 = !isAppend
                            ? $p1_0.get_posts()
                            : ($$t_7 = $$t_8.$F_0).concat.apply($$t_7, $p1_0.get_posts());
                        if (isAppend) $$t_8.$L_0++;
                        else $$t_8.$L_0 = 1;
                        $$t_8.clearWall();
                        $p1_0.set_posts($$t_8.$F_0);
                        $$t_8.$0_0.$y_3 = $p1_0.get_total();
                        $$t_8.showText($p1_0.get_total().toString() +
                            " " +
                            Mscrm.SearchWidget.localizedStrings.KMWALL_MORE_SEARCH_RESULTS_STRING,
                            true);
                        $$t_8.$2W_0($p1_0, isAppend);
                        var $v_3 = $p1_0.get_total() > $$t_8.get_pageSize() * $$t_8.$L_0;
                        $v_3 &&
                            $$t_8.get_pageSize() > 0 &&
                            $$t_8.$24_0.apply($$t_8, [$$t_8.$F_0, $v_3].concat(parameters));
                        isAppend && $$t_8.$2T_0()
                    },
                    $$t_8.$$d_$2X_0,
                    function() {
                        if ($$t_8.$0_0.$S_3) $$t_8.$2Q_0($p1_0, true);
                        else $$t_8.$j_0(false, false)
                    })
            })
    },
    $2T_0: function() {
        var $v_0 = this.$L_0 - 1;
        if ($v_0 > 0 && this.$F_0.length > this.get_pageSize() * $v_0) {
            var $v_1 = this.$F_0[this.get_pageSize() * $v_0],
                $v_2 = $P_CRM("#searchPane_" + $v_1.get_articleId().toString());
            $v_2.unbind("focus");
            $v_2.focus();
            if (!IsNull(this.$0_0.$8_3)) {
                var $v_3 = $P_CRM("#searchPane_" + this.$0_0.$8_3.get_articleId().toString());
                $v_3.addClass("searchPaneSelect")
            }
        }
    },
    $2V_0: function() {
        if (!this.$0_0.$A_3) {
            var $v_0 = this.$3_0.parent();
            if (this.$3_0.parents(".scrollingelement").length > 0 &&
                this.$3_0.parents(".scrollingelement").width() > 600) {
                var $v_1 = this.$3_0.parents(".scrollingelement").height() / 2;
                $v_0.parent().find(".kmwall-filter-table").addClass("filterScroll").css("height", $v_1.toString())
            } else $v_0.parent().find(".kmwall-filter-table").removeClass("filterScroll").css("height", "auto")
        }
    },
    $2S_0: function($p0) {
        for (var $p1 = [], $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) $p1[$$pai_3 - 1] = arguments[$$pai_3];
        $p0.set_requestType("Crm");
        var $v_0 = $p0.get_parameters();
        switch ($p1[1]) {
        case "SearchWidget_Filters_AllPublishedArticles":
            $v_0["articleFilter"] = "3";
            break;
        case "SearchWidget_Filters_AllApprovedArticles":
            $v_0["articleFilter"] = "1";
            break;
        case "SearchWidget_Filters_AllDraftArticles":
            $v_0["articleFilter"] = "0";
            break
        }
        $v_0["language"] = $p1[2];
        $v_0["isDescending"] = true;
        switch ($p1[4]) {
        case "SearchWidget_Filters_NumberOfViews":
            $v_0["order"] = "knowledgearticleviews";
            break;
        case "SearchWidget_Filters_LastModifiedDate_NewestFirst":
            $v_0["order"] = "modifiedon";
            break;
        case "SearchWidget_Filters_LastModifiedDate_OldestFirst":
            $v_0["order"] = "modifiedon";
            $v_0["isDescending"] = false;
            break
        }
    },
    $2U_0: function($p0) {
        for (var $p1 = [], $$pai_4 = 1; $$pai_4 < arguments.length; ++$$pai_4) $p1[$$pai_4 - 1] = arguments[$$pai_4];
        $p0.set_requestType("Parature");
        var $v_0 = $p0.get_parameters(), $v_1 = this.get_externalServiceUrl().toString();
        $v_0["url"] = !window.IsParatureAtriaDependenciesAvailable ? $v_1 : $v_1 + "/Search";
        switch ($p1[1]) {
        case "SearchWidget_Filters_AllPublishedArticles":
            $v_0["published"] = "1";
            break;
        case "SearchWidget_Filters_AllDraftArticles":
            $v_0["published"] = "0";
            break
        }
        switch ($p1[4]) {
        case "SearchWidget_Filters_Rating":
            $v_0["order"] = "Rating_desc_";
            break;
        case "SearchWidget_Filters_NumberOfViews":
            $v_0["order"] = "Times_Viewed_desc_";
            break;
        case "SearchWidget_Filters_LastModifiedDate_NewestFirst":
            $v_0["order"] = "Date_Updated_desc_";
            break;
        case "SearchWidget_Filters_LastModifiedDate_OldestFirst":
            $v_0["order"] = "Date_Updated_asc_";
            break
        }
    },
    $2R_0: function($p0, $p1) {
        if ($p0 && $p0.length) {
            this.$20_0(false);
            for (var $v_0 = $p0.split(","), $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0;
                $$idx_5 < $$len_4;
                ++$$idx_5) {
                var $v_1 = $$arr_3[$$idx_5], $v_2 = Number.parseInvariant($v_1);
                switch ($v_2) {
                case 0:
                    this.$m_0 = true;
                    break;
                case 1:
                    this.$o_0 = true;
                    break;
                case 2:
                    this.$n_0 = true;
                    break;
                case 3:
                    this.$p_0 = true;
                    break;
                case 4:
                    this.$b_0 = true;
                    break
                }
            }
        } else this.$20_0($p1 === "ShowAll")
    },
    $20_0: function($p0) {
        this.$m_0 = $p0;
        this.$o_0 = $p0;
        this.$n_0 = $p0;
        this.$p_0 = $p0;
        this.$b_0 = $p0
    },
    clearWall: function() {
        this.$26_0();
        this.$3_0.find(".wallContainer").empty();
        this.$3_0.find(".articleContent").empty();
        this.$3_0.find(".wallMessageContainer").empty();
        this.$3_0.parent().find(".kmwall-SearchResultsMessage").empty()
    },
    $26_0: function() {
        var $v_0 = this.$3_0.find("#kmwallContainer");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return;
        var $v_1 = $v_0.find(".articleRow");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) return;
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $P_CRM($v_1[$v_2]);
            Mscrm.SearchWidgetWall.disposeArticleRow($v_3, false)
        }
    },
    showError: function(cause, action) {
        this.clearWall();
        this.$3_0.find(".wallMessageContainer").show();
        var $v_0 = new Mscrm.SettingsErrorMessage(CrmEncodeDecode.CrmHtmlEncode(cause),
            CrmEncodeDecode.CrmHtmlEncode(action));
        if (!IsNull(this.$3_0) && !IsNull(this.$1N_0)) {
            var $v_1 = this.$1N_0, $v_2 = $v_1.tmpl($v_0);
            this.$1R_0.append($v_2);
            var $v_3 = this.$3_0.parents(".scrollingelement"), $v_4 = 0, $v_5 = false;
            if (!IsNull($v_3) && $v_3.length) {
                $v_4 = $v_3.height();
                $v_5 = $v_3.parent().hasClass("tabContainer")
            }
            var $v_6 = 168;
            if ($v_4 <= $v_6 && !$v_5) {
                var $v_7 = $v_4 / 100 * 30;
                this.$3_0.find(".wallMessageContainer").css("height", $v_7.toString() + "px").css("overflow", "auto");
                $v_3.css("height", $v_6.toString() + "px")
            }
        }
        this.$j_0(false, false)
    },
    showText: function(wallText, isClearWall) {
        isClearWall && this.clearWall();
        this.$3_0.parent().find(".kmwall-SearchResultsMessage").text(wallText).show();
        this.$j_0(false, false)
    },
    hideArticleContent: function() {
        var $v_0 = this.$3_0.find("#articleContent");
        $v_0.html("");
        $v_0.css("display", "none");
        this.$3_0.parent().find(".filterdiv").removeClass("hideFilter");
        var $v_1 = this.$3_0.find("#kmwallContainer");
        $v_1.show();
        this.$3_0.parent().find(".kmwall-SearchResultsMessage").show();
        var $v_2 = this.$3_0.find(".searchPaneSelect");
        if ($v_2.length > 0) {
            var $v_3 = $v_2.find(".kmTitle").children("a").first();
            $v_3.focus()
        }
        !IsNull(this.$3_0.parents("#SearchControlContainerDiv")) &&
            this.$3_0.parents("#SearchControlContainerDiv").css("height", "auto")
    },
    dispose: function() {
        if (this._disposed) return;
        this.clearWall();
        this._disposed = true
    },
    setTabIndex: function(elementContainer, widgetWallId, className, isContainerTabIndex) {
        var $v_0 = widgetWallId.substr(0, widgetWallId.lastIndexOf("_container"));
        this.$T_0 = $get($v_0 + "_findCriteriaButton", this.$3_0[0].parentNode);
        var $v_1 = this.$T_0.tabIndex.toString();
        if (!isNullOrEmptyString($v_1)) {
            var $v_2 = elementContainer.find(className).children("a").first(),
                $v_3 = elementContainer.find(".actionSeperator");
            if (isContainerTabIndex) {
                var $v_4 = elementContainer.find("div.iconThumbnail").children("a").first();
                elementContainer.attr("tabindex", $v_1);
                $v_4.attr("tabindex", $v_1)
            }
            $v_2.attr("tabindex", $v_1);
            for (var $v_5 = 0; $v_5 < $v_3.length; $v_5++) {
                var $v_6 = $P_CRM($v_3[$v_5]).children("a").first();
                $v_6.attr("tabindex", $v_1)
            }
        }
    },
    $1M_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = $p1.get_articleId().toString(),
            $v_1 = Mscrm.AssociateHelperFactory.createSearchWidgetWallAssociateHelper(this),
            $v_2 = Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[$p1.get_articleUId()]
                ? "#kmDisassociateArticleDiv_"
                : "#kmAssociateArticleDiv_";
        $v_1.setArticleDivHandler($p0, $p1.get_articleId(), $v_2, false);
        var $v_3 = this.getBaseArticleDivForFlyOut($p3, $v_0);
        if (this.get_canShowAssociateAction() && !this.$0_0.$C_3) {
            var $$t_M = this;
            $p0.find("#kmAssociateArticle_" + $v_0).bind("click",
                function($p1_0) {
                    var $v_4 = Mscrm.AssociateHelperFactory.createSearchWidgetWallAssociateHelper($$t_M);
                    $v_4.associateClickHandler($p0, $p1, $p2, Mscrm.SearchWidgetWall.$D, $v_3);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                })
        } else $p0.find("#kmAssociateArticleDiv_" + $v_0).hide();
        if (this.get_canShowDisassociateAction() && !this.$0_0.$C_3) {
            var $$t_N = this;
            $p0.find("#kmDisassociateArticle_" + $p1.get_articleId()).bind("click",
                function($p1_0) {
                    var $v_5 = Mscrm.AssociateHelperFactory.createSearchWidgetWallAssociateHelper($$t_N), $v_6 = null;
                    if (Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[$p1
                        .get_articleUId()])
                        $v_6 = Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[$p1.get_articleUId()]
                            .toString();
                    $v_5.disassociateClickHandler($p0, $p1, $p2, $v_6, $v_3);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                })
        } else $p0.find("#kmDisassociateArticleDiv_" + $v_0).hide();
        if (this.get_canShowCopyAction() && !this.$0_0.$C_3) {
            var $$t_O = this;
            $p0.find("#kmCopyLink_" + $v_0).bind("click",
                function($p1_0) {
                    var $v_7 = Mscrm.SearchWidgetActionHelper
                        .generateUrl($p1, $$t_O.get_useNativeCrm(), true, Mscrm.SearchWidgetWall.$D);
                    $p1.get_published() &&
                        Mscrm.Shortcuts.copyTextToClipboard($v_7, "", window.LOCID_COPY_SHORTCUT_ERROR);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                })
        } else $p0.find("#kmCopyLinkArticleDiv_" + $v_0).hide();
        if (this.get_canShowEmailAction() && !this.$0_0.$C_3 && $p1.get_published()) {
            var $$t_P = this;
            $p0.find("#kmEmailLink_" + $v_0).bind("click",
                function($p1_0) {
                    var $v_8 = Mscrm.AssociateHelperFactory.createSearchWidgetWallAssociateHelper($$t_P);
                    $v_8.associateArticleWhenEmail($p1, $p2, Mscrm.SearchWidgetWall.$D);
                    if (!$$t_P.get_useNativeCrm() || $$t_P.$0_0.$Z_3) {
                        var $v_9 = Mscrm.SearchWidgetActionHelper
                            .generateUrl($p1, $$t_P.get_useNativeCrm(), true, Mscrm.SearchWidgetWall.$D);
                        Mscrm.SearchWidgetActionHelper
                            .openEmailLinkActivity(4202,
                                null,
                                $p1.get_question().toString(),
                                $v_9,
                                Mscrm.SearchWidgetWall.$u)
                    } else
                        Mscrm.SearchWidgetActionHelper
                            .openEmailLinkActivity(4202, $p1.get_articleUId(), null, null, Mscrm.SearchWidgetWall.$u);
                    $p3 && $p3.hide();
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                });
            if (this.get_useNativeCrm()) {
                var $$t_Q = this;
                $p0.find("#kmEmailContentLink_" + $v_0).bind("click",
                    function($p1_0) {
                        var $v_A = Mscrm.AssociateHelperFactory.createSearchWidgetWallAssociateHelper($$t_Q);
                        $v_A.associateArticleWhenEmail($p1, $p2, Mscrm.SearchWidgetWall.$D);
                        Mscrm.SearchWidgetActionHelper
                            .openEmailLinkActivity(4202, $p1.get_articleUId(), null, null, Mscrm.SearchWidgetWall.$u);
                        $p3 && $p3.hide();
                        $p1_0.preventDefault();
                        $p1_0.stopPropagation()
                    })
            }
        } else {
            $p0.find("#kmEmailLinkArticleDiv_" + $v_0).hide();
            $p0.find("#kmEmailContentLinkArticleDiv_" + $v_0).hide()
        }
        if (this.$b_0 && !this.$0_0.$C_3) {
            var $$t_R = this;
            $p0.find("#kmPopOut_" + $v_0).bind("click",
                function($p1_0) {
                    $P_CRM("#articlePopContent_" + $v_0) && $P_CRM("#articlePopContent_" + $v_0).remove();
                    var $v_B = new Mscrm
                        .SearchWidgetFlyOutHelper($p0, $p1, $$t_R.get_relationShipName(), $v_0, $$t_R, $$t_R.$0_0);
                    $v_B.loadArticleContent();
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                })
        } else $p0.find("#kmPopOutArticleDiv_" + $v_0).hide()
    },
    setWallDisplayProperties: function(articleRow, currentPost) {
        var $v_0 = articleRow.find(".kmTitle");
        if (!this.$0_0.$C_3 && !Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled()) {
            var $$t_D = this;
            articleRow.bind("mouseenter",
                function($p1_0) {
                    var $v_1 = $$t_D.$3_0.find(".searchPaneSelect"),
                        $v_2 = $v_1.attr("id"),
                        $v_3 = articleRow.attr("id");
                    $v_3 !== $v_2 && articleRow.addClass("searchPaneHover");
                    $$t_D.showHideArticleActions(articleRow, currentPost);
                    Mscrm.SearchWidgetWall.setArticleActionsReflow($v_0);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                });
            var $$t_E = this;
            articleRow.bind("mouseleave",
                function($p1_0) {
                    articleRow.removeClass("searchPaneHover");
                    var $v_4 = $$t_E.$3_0.find(".searchPaneSelect"),
                        $v_5 = $v_4.attr("id"),
                        $v_6 = articleRow.attr("id");
                    $v_6 !== $v_5 && articleRow.find(".articleActions").hide();
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                })
        }
        var $$t_F = this;
        articleRow.bind("click",
            function($p1_0) {
                $$t_F.$1h_0(currentPost, $p1_0);
                Mscrm.SearchWidgetWall.setArticleActionsReflow($v_0);
                $$t_F.$1z_0(articleRow, currentPost)
            });
        var $$t_G = this;
        articleRow.bind("focus",
            function($p1_0) {
                $$t_G.$0_0.$C_3 && $$t_G.$1h_0(currentPost, $p1_0);
                Mscrm.SearchWidgetWall.setArticleActionsReflow($v_0);
                $$t_G.$1z_0(articleRow, currentPost)
            });
        Mscrm.SearchWidgetWall.setImageProperties(articleRow, currentPost)
    },
    $1h_0: function($p0, $p1) {
        this.$0_0.$1h_3($p0);
        this.$0_0.$8_3 = $p0;
        $p1.preventDefault();
        $p1.stopPropagation()
    },
    $j_0: function($p0, $p1) {
        if ($p0) {
            var $v_0 = this.$B_0.height();
            if ($p1) this.$1G_0.css("display", "block");
            else {
                var $v_1 = $v_0 / 2;
                this.$1F_0.css("display", "block").css("margin-top", $v_1 + "px");
                this.$B_0.css("display", "none")
            }
        } else if ($p1) this.$1G_0.css("display", "none");
        else {
            this.$1F_0.css("display", "none");
            this.$B_0.css("display", "block")
        }
    },
    $1z_0: function($p0, $p1) {
        this.$0_0.$8_3 = $p1;
        var $v_0 = this.$3_0.find(".searchPaneSelect");
        if ($v_0.length > 0) {
            $v_0.attr("id") !== $p0.attr("id") && $v_0.find(".articleActions").hide();
            $v_0.removeClass("searchPaneSelect")
        }
        $p0.removeClass("searchPaneHover").addClass("searchPaneSelect");
        $p0.find(".articleActions").show()
    },
    $2X_0: function() { this.showText(Mscrm.SearchWidget.localizedStrings.KMWALL_NO_SEARCH_RESULTS_STRING, true) },
    $2Q_0: function($p0, $p1) {
        if ($p1) {
            this.clearWall();
            this.$3_0.find(".wallMessageContainer").empty()
        }
        this.$3_0.find(".wallMessageContainer").show();
        var $v_0 = $p0;
        if ($v_0.get_errorCode().toString() === "401") {
            this.$2N_0();
            return
        } else {
            var $v_1 = !isNullOrEmptyString($v_0.get_subErrorCode())
                ? $v_0.get_subErrorCode()
                : $v_0.get_errorCode().toString();
            this.$1d_0(new Mscrm.EmptyMessage(CrmEncodeDecode
                .CrmHtmlEncode(Mscrm.SearchWidgetErrorHelper.getErrorMessage($v_1))))
        }
    },
    $1d_0: function($p0) {
        if (!IsNull(this.$3_0) && !IsNull(this.$15_0)) {
            var $v_0 = this.$15_0, $v_1 = $v_0.tmpl($p0);
            this.$1R_0.append($v_1)
        }
        this.$j_0(false, false)
    },
    $2N_0: function() {
        var $v_0, $$t_3 = this, $$t_4 = this;
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.get_checkSignedIn().done(function($p1_0) {
            if (!$p1_0)
                $v_0 = new Mscrm.EmptyMessage(CrmEncodeDecode
                    .CrmHtmlEncode(Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_PERMISSION_ERROR_STRING));
            else $v_0 = new Mscrm.EmptyMessage("");
            $$t_3.$1d_0($v_0)
        }).fail(function($p1_0) {
            $v_0 = new Mscrm.EmptyMessage(CrmEncodeDecode
                .CrmHtmlEncode(Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_PERMISSION_ERROR_STRING));
            $$t_4.$1d_0($v_0)
        })
    },
    $2W_0: function($p0, $p1) {
        this.$j_0(false, $p1);
        var $v_0 = this.$1T_0, $v_1 = $v_0.tmpl($p0);
        this.$B_0.append($v_1);
        setPerfMarkerTimestamp("LoadSearchResultsEnd");
        this.$0_0.$2a_3();
        this.$B_0.find(".articleActions").hide();
        Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled() && this.$B_0.addClass("scrollingTouch");
        this.$3_0.parents(".scrollingelement").hasClass("articleContentMainDiv") &&
            this.$3_0.parents(".scrollingelement").removeClass("articleContentMainDiv");
        this.$3_0.parent().find(".filterdiv").hasClass("hideFilter") &&
            this.$3_0.parent().find(".filterdiv").removeClass("hideFilter");
        var $v_2 = this.$B_0.children().children("#articleId");
        this.$B_0.find(":not('div')").attr("tabindex", "-1");
        if (!IsNull($v_2) && $v_2.length > 0)
            for (var $v_4 = 0; $v_4 < this.$F_0.length; $v_4++)
                if (!IsNull($v_2[$v_4])) {
                    var $v_5 = $v_2[$v_4].innerHTML.toString().trim(), $v_6 = this.$F_0[$v_4];
                    if ($v_6.get_articleId().toString() === $v_5) {
                        $v_6.set_isAssociated($v_6.get_articleUId() in
                            Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles);
                        var $v_7 = $v_1.find("#searchPane_" + $v_5);
                        if ($v_6
                            .get_published() &&
                            (!this
                                .get_useNativeCrm() ||
                                this.$0_0.$Z_3))
                            $v_6.set_publicUrl(Mscrm.SearchWidgetActionHelper
                                .generateUrl($v_6, this.get_useNativeCrm(), true, Mscrm.SearchWidgetWall.$D));
                        else {
                            $v_7.find("#kmCopyLink_" + $v_5 + " #kmCopyLink")
                                .removeClass("ms-crm-ImageStrip-searchwidget_copylink")
                                .addClass("ms-crm-ImageStrip-searchwidget_copylink_disabled")
                                .attr("id", "kmCopyLinkDisabled");
                            $v_6.set_publicUrl("")
                        }
                        if (this.get_useNativeCrm()) {
                            $v_7.find("#kmRating").hide();
                            $v_7.find("#kmRatingContent").hide()
                        }
                        var $v_8 = new Mscrm
                            .SearchWidgetContentHelper("kmwallContainer",
                                this.$3_0,
                                $v_7,
                                $v_6,
                                this.get_relationShipName(),
                                this,
                                this.$0_0);
                        $v_8.loadArticleContent();
                        $v_8.setHoverActions($v_7);
                        this.setWallDisplayProperties($v_7, $v_6);
                        this.setTabIndex($v_7, this.get_searchWidgetWallId(), ".kmTitle", true);
                        this.$1M_0($v_7, $v_6, this.get_relationShipName(), null)
                    }
                }
        var $v_3 = this.$3_0.length > 0 ? this.$3_0[0].id.substr(0, this.$3_0[0].id.lastIndexOf("_container")) : null;
        Mscrm.SearchWidgetReflowHelper.reflowControl($v_3, this.$0_0.$A_3)
    },
    $2M_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = $p0;
        if ($v_0.get_isSucceeded())
            if (!IsNull($v_0.get_posts()) && $v_0.get_posts().length > 0) $p1();
            else !IsNull($p2) && $p2();
        else !IsNull($p3) && $p3()
    },
    $24_0: function($p0, $p1) {
        for (var $p2 = [], $$pai_6 = 2; $$pai_6 < arguments.length; ++$$pai_6) $p2[$$pai_6 - 2] = arguments[$$pai_6];
        if (IsNull($p0) || !$p0.length) return;
        var $v_0 = this.$B_0.find(".showMoreLink");
        if ($p1) {
            if (IsNull($v_0) || !$v_0.length) $v_0 = this.$1f_0.tmpl("[]").appendTo(this.$B_0);
            var $$t_5 = this;
            $v_0.filter("a").bind("click",
                function($p1_0) {
                    $v_0.unbind("click");
                    $$t_5.loadSearchResults.apply($$t_5, [true].concat($p2));
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                }).show();
            this.$B_0.find(".showMoreLink").attr("tabindex", this.$T_0.tabIndex.toString());
            this.$1G_0 = $v_0.filter("#DialogLoadingMoreDiv")
        } else $v_0.hide()
    },
    getBaseArticleDivForFlyOut: function(flyOutDialog, id) {
        var $v_0 = null;
        if (flyOutDialog) $v_0 = this.$3_0.find("#articleContent_" + id);
        if (!$v_0 || !$v_0.length) $v_0 = this.$B_0.find("#searchPane_" + id);
        return $v_0
    },
    showHideArticleActions: function(articleRow, currentPost) {
        if (!IsNull(Xrm.Page.data) && !isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
            articleRow.find(".articleActions").show();
            if (this.get_canShowEmailAction() &&
                currentPost.get_published() &&
                !(this
                    .get_useNativeCrm() &&
                    !this.$0_0.$Z_3)) articleRow.find("#kmEmailLinkArticleDiv_" + currentPost.get_articleId()).show();
            else articleRow.find("#kmEmailLinkArticleDiv_" + currentPost.get_articleId()).hide();
            if (Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[currentPost.get_articleUId()]) {
                articleRow.find("#kmAssociateArticleDiv_" + currentPost.get_articleId()).hide();
                this.get_canShowDisassociateAction() &&
                    articleRow.find("#kmDisassociateArticleDiv_" + currentPost.get_articleId()).show()
            } else {
                articleRow.find("#kmDisassociateArticleDiv_" + currentPost.get_articleId()).hide();
                this.get_canShowAssociateAction() &&
                    articleRow.find("#kmAssociateArticleDiv_" + currentPost.get_articleId()).show()
            }
            if (this
                .get_canShowEmailAction() &&
                currentPost.get_published() &&
                this.get_useNativeCrm())
                articleRow.find("#kmEmailContentLinkArticleDiv_" + currentPost.get_articleId()).show();
            else articleRow.find("#kmEmailContentLinkArticleDiv_" + currentPost.get_articleId()).hide()
        } else {
            articleRow.find(".articleActions").show();
            articleRow.find("#kmAssociateArticleDiv_" + currentPost.get_articleId()).hide();
            articleRow.find("#kmDisassociateArticleDiv_" + currentPost.get_articleId()).hide();
            articleRow.find("#kmEmailLinkArticleDiv_" + currentPost.get_articleId()).hide();
            articleRow.find("#kmEmailContentLinkArticleDiv_" + currentPost.get_articleId()).hide()
        }
    },
    refreshComments: function(parentPostId, pageSize, olderThanDate) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postMessage: function(text) { throw Error.notImplemented("The method or operation is not implemented.") },
    renderOlderPosts: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    postComment: function(parentPostId, text) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    deletePost: function(postId) { throw Error.notImplemented("The method or operation is not implemented.") },
    deleteComment: function(commentId) { throw Error.notImplemented("The method or operation is not implemented.") },
    getWallActions: function(actionType, context) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    refreshWallFilters: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    refreshWallFilter: function(filterType) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    add_postDeleted: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_postDeleted: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    add_commentDeleted: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_commentDeleted: function(value) {
        throw Error
            .notImplemented("The method or operation is not implemented.")
    },
    add_filtersRefreshed: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_filtersRefreshed: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    add_postsRefreshed: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_postsRefreshed: function(value) {
        throw Error
            .notImplemented("The method or operation is not implemented.")
    },
    add_commentsRefreshed: function(value) {
        throw Error
            .notImplemented("The method or operation is not implemented.")
    },
    remove_commentsRefreshed: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    add_postCreated: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_postCreated: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    add_commentCreated: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_commentCreated: function(value) {
        throw Error
            .notImplemented("The method or operation is not implemented.")
    },
    add_error: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_error: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    get_postTemplateId: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_postTemplateId: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_commentTemplateId: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_commentTemplateId: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    }
};
Mscrm.SearchWidgetWallCommandDispatcher = function(objSearchWidget) {
    Mscrm.SearchWidgetWallAssociateHelperBase.intersectTableName = objSearchWidget.$1A_3;
    Mscrm.SearchWidgetWallAssociateHelperBase.referencedEntityColumnName = objSearchWidget.$1I_3;
    this.$a_0 = new Mscrm.SearchWidgetWallService;
    this.$5_0 = new Mscrm.SearchWidgetWall(this.$a_0, objSearchWidget);
    this.$0_0 = objSearchWidget
};
Mscrm.SearchWidgetWallCommandDispatcher.prototype = {
    $a_0: null,
    $5_0: null,
    $0_0: null,
    dispatchCommand: function(commandName) {
        for (var parameters = [], $$pai_4 = 1;
            $$pai_4 < arguments.length;
            ++$$pai_4
        ) parameters[$$pai_4 - 1] = arguments[$$pai_4];
        if (_String.isNullOrEmpty(commandName)) throw Error.create("Command is undefined");
        commandName = commandName.toLowerCase();
        switch (commandName) {
        case "refreshall":
            this.$1x_0.apply(this, parameters);
            break;
        case "showtext":
            this.$5_0.showText(parameters[0], true);
            break;
        case "clearwall":
            this.$5_0.clearWall();
            break;
        case "hidearticlecontent":
            this.$5_0.hideArticleContent();
            break;
        case "showerrorcontent":
            this.$5_0.showError(parameters[0], parameters[1]);
            break;
        case "getassociatedarticles":
            var $v_0 = Mscrm.AssociateHelperFactory.createSearchWidgetWallAssociateHelper(this.$5_0), $$t_3 = this;
            $v_0.getAssociatedArticles(function() { $$t_3.$1x_0.apply($$t_3, parameters) });
            break;
        default:
            throw Error.create("Invalid Command")
        }
    },
    dispose: function() {
        if (!IsNull(this.$5_0)) {
            this.$5_0.dispose();
            this.$5_0 = null
        }
    },
    $1x_0: function() {
        for (var $p0 = [], $$pai_2 = 0; $$pai_2 < arguments.length; ++$$pai_2) $p0[$$pai_2] = arguments[$$pai_2];
        this.$5_0.clearWall();
        this.$5_0.$L_0 = 0;
        var $$t_1;
        ($$t_1 = this.$5_0).loadSearchResults.apply($$t_1, [false].concat($p0))
    },
    openArticle: function(resultNumber, mode) {
        if (_String.isNullOrEmpty(mode)) mode = "Inline";
        if (resultNumber < 1 || resultNumber > this.$5_0.$F_0.length || "Popout" !== mode && "Inline" !== mode
        ) return -1;
        var $v_0 = this.$5_0.$F_0[resultNumber - 1];
        this.$0_0.$8_3 = $v_0;
        var $v_1 = $v_0.get_articleId().toString(), $v_2 = $P_CRM("#articlePopContent_" + $v_1);
        try {
            this.$5_0.hideArticleContent();
            if (mode === "Popout") {
                $P_CRM("#articlePopContent_" + $v_1) && $P_CRM("#articlePopContent_" + $v_1).remove();
                var $v_3 = new Mscrm.SearchWidgetFlyOutHelper($v_2, $v_0, this.$0_0.$Y_3, $v_1, this.$5_0, this.$0_0);
                $v_3.loadArticleContent()
            } else {
                var $v_4 = this.$5_0.getWallJQuery().find(".searchPaneSelect"),
                    $v_5 = new Mscrm
                        .SearchWidgetContentHelper("kmwallContainer",
                            this.$5_0.getWallJQuery(),
                            $v_4,
                            $v_0,
                            this.$0_0.$Y_3,
                            this.$5_0,
                            this.$0_0);
                $v_5.loadArticleContent();
                $v_5.setHoverActions($v_4);
                this.$5_0.setWallDisplayProperties($v_4, $v_0);
                this.$5_0.setTabIndex($v_4, this.$5_0.get_searchWidgetWallId(), ".kmTitle", true);
                this.$5_0.$1M_0($v_4, $v_0, this.$0_0.$Y_3, null);
                $v_5.showArticleResult()
            }
            return 1
        } catch ($$e_8) {
            return 0
        }
    }
};
Mscrm.SearchWidgetWallService = function() {};
Mscrm.SearchWidgetWallService.prototype = {
    get_isAsync: function() { return true },
    set_isAsync: function(value) {
        throw Error.notImplemented("sync calls are not supported");
        return value
    },
    retrievePosts: function(retrievePostsRequest, retrievePostsCallback) {
        var $v_0 = retrievePostsRequest, $v_1 = Mscrm.ExternalProviderFactory.getClient($v_0.get_requestType());
        $v_1.getArticleResponse($v_0, retrievePostsCallback)
    },
    retrieveAllPosts: function(retrievePostsRequest, retrievePostsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    formatCommentTextForRendering: function(commentText) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    formatPostTextForRendering: function(postText) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    retrieveComments: function(retrieveCommentsRequest, retrieveCommentsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postComment: function(comment, createCommentCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    getWallServiceFactory: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    postMessage: function(post, createPostCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    deletePost: function(post, deletePostCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    deleteComment: function(comment, deleteCommentCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    getWallActions: function(actionType, context) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    getWallFilters: function(filterType, context) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    retrieveWallFilters: function(filterType, context, retrieveWallFiltersCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    selectWallFilter: function(wallFilter) {
        throw Error
            .notImplemented("The method or operation is not implemented.")
    },
    getSelectedWallFilter: function(filterType) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    setDefaultFilter: function(wallFilter, setDefaultFilterCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    getWallActionsAsync: function(actionType, context, getWallActionsSuccessCallback, getWallActionsFailureCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    }
};
Mscrm.SearchWidgetControlConstants = function() {};
Mscrm.WallCommands = function() {};

function dispatchSearchWidgetWallCommand($p0, $p1, $p2) {
    var $v_0 = $P_CRM($p0).parents("#articlewall").parent().first();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get(0);
        if (!IsNull($v_1)) {
            var $v_2 = $find($v_1.id);
            !IsNull($v_2) && $v_2.dispatchWallCommand($p1, $p2)
        }
    }
}

Mscrm.SearchWidgetContentHelper = function(wallContainerId,
    wallJQuery,
    articleRow,
    article,
    relationshipName,
    searchWidgetWall,
    objSearchWidget) {
    this.$V_0 = wallContainerId;
    this.$G_0 = wallJQuery;
    this.$E_0 = articleRow;
    this.set_article(article);
    this.$M_0 = relationshipName;
    this.$6_0 = searchWidgetWall;
    this.$0_0 = objSearchWidget
};
Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource = function(actionElement, imagePath, className) {
    var $v_0 = Mscrm.InternalUtilities.Utilities.isHighContrastEnabled();
    if (!$v_0)
        actionElement.attr("src", window.CDNURL + "/_imgs/imagestrips/transparent_spacer.gif").attr("class", className);
    else actionElement.attr("src", imagePath)
};
Mscrm.SearchWidgetContentHelper.parseDate = function(dateString) {
    var $v_0 = window.USER_DATE_FORMATSTRING;
    return Mscrm.DateTimeUtility.formatDate(dateString, $v_0)
};
Mscrm.SearchWidgetContentHelper.filterResponse = function(key, response) {
    var $v_0 = $get("resultsHolder"), $v_1 = $v_0.contentWindow.document.getElementById(key);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        $v_1 = $v_0.contentWindow.document.createElement("div");
        $v_1.id = key;
        try {
            $v_1.innerHTML = response
        } catch ($$e_4) {
        }
        $v_0.contentWindow.document.body.appendChild($v_1)
    }
    return CrmEncodeDecode.CrmHtmlEncode($P_CRM($v_1).text())
};
Mscrm.SearchWidgetContentHelper.getSuperScript = function(expiredDate, published, stateCode) {
    if (!IsNull(expiredDate) && expiredDate < Mscrm.DateTimeUtility.localDateTimeNow()
    ) return Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLES_EXPIRED;
    if (published) return "";
    switch (stateCode) {
    case 0:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLES_DRAFTS;
    case 1:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLES_APPROVED;
    case 2:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_ARTICLES_SCHEDULED;
    default:
        return ""
    }
};
Mscrm.SearchWidgetContentHelper.saveResponse = function(key, response) {
    Mscrm.SearchWidgetContentHelper.$x[key] = response;
    return ""
};
Mscrm.SearchWidgetContentHelper.setContent = function(id) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Mscrm.SearchWidgetContentHelper.$x[id])) return;
    var $v_0 = $get(id);
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0.contentWindow.document.body.innerHTML)) return;
    $v_0.contentWindow.document.open();
    $v_0.contentWindow.document.write(Mscrm.SearchWidgetContentHelper.$x[id]);
    $v_0.contentWindow.document.close();
    $v_0.contentWindow.document.body.style.paddingBottom = "5px";
    Mscrm.SearchWidgetContentHelper.$x[id] = null
};
Mscrm.SearchWidgetContentHelper.prototype = {
    $V_0: null,
    $G_0: null,
    $E_0: null,
    $H_0: null,
    $M_0: null,
    $6_0: null,
    $0_0: null,
    $2_0: null,
    $1_0: null,
    get_wallContainerId: function() { return this.$V_0 },
    set_wallContainerId: function(value) {
        this.$V_0 = value;
        return value
    },
    get_wallJQuery: function() { return this.$G_0 },
    set_wallJQuery: function(value) {
        this.$G_0 = value;
        return value
    },
    get_articleRow: function() { return this.$E_0 },
    set_articleRow: function(value) {
        this.$E_0 = value;
        return value
    },
    get_article: function() { return this.$H_0 },
    set_article: function(value) {
        this.$H_0 = value;
        return value
    },
    get_relationshipName: function() { return this.$M_0 },
    set_relationshipName: function(value) {
        this.$M_0 = value;
        return value
    },
    get_searchWidgetWall: function() { return this.$6_0 },
    set_searchWidgetWall: function(value) {
        this.$6_0 = value;
        return value
    },
    loadArticleContent: function() {
        var $v_0 = this.$E_0.find(".kmTitle"),
            $v_1 = !IsNull($v_0) ? $v_0.children("a") : null,
            $v_2 = !IsNull($v_1) ? $v_1.first() : null,
            $v_3 = this.$E_0.find(".iconThumbnail a:first");
        if (!IsNull($v_2)) {
            var $$t_8 = this;
            $v_2.bind("click",
                function($p1_0) {
                    $$t_8.showArticleResult();
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                });
            var $$t_9 = this;
            $v_3.bind("click",
                function($p1_0) {
                    $$t_9.showArticleResult();
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation()
                });
            var $$t_A = this;
            $v_2.bind("focus",
                function($p1_0) {
                    Mscrm.SearchWidgetWall.setArticleActionsReflow($v_0);
                    $$t_A.$E_0.find(".articleActions").show()
                });
            var $$t_B = this;
            $v_3.bind("focus",
                function($p1_0) {
                    Mscrm.SearchWidgetWall.setArticleActionsReflow($v_0);
                    $$t_B.$E_0.find(".articleActions").show()
                })
        }
    },
    $22_0: function($p0) { this.$0_0.$22_3($p0) },
    showArticleResult: function() {
        this.$22_0(this.$H_0);
        if (this.$6_0.get_useNativeCrm()) {
            Mscrm.SearchWidgetActionHelper.incrementKnowledgeArticleViewCount(this.$H_0);
            this.$E_0.find("#kmNoOfViewsContent").text(this.$H_0.get_timesViewed().toString())
        }
        if (!this.$0_0.$11_3) {
            this.$G_0.parent().find(".kmwall-SearchResultsMessage").hide();
            var $v_0 = this.$G_0.find("#" + this.$V_0);
            $v_0.hide();
            this.$G_0.find(".wallMessageContainer").empty();
            var $v_1 = this.$H_0;
            $v_1["parent"] = this.$0_0.get_id();
            var $v_2 = this.$G_0.find("#kmArticleContentTemplate").tmpl($v_1), $v_3 = this.$G_0.find("#articleContent");
            Mscrm.SearchWidgetWall.setImageProperties($v_3.append($v_2), this.$H_0);
            this.$G_0.parent().find(".filterdiv").addClass("hideFilter");
            this.$G_0.parents(".scrollingelement").addClass("articleContentMainDiv");
            this.$6_0.setTabIndex($v_3, this.$G_0.attr("id"), ".backimage", false);
            this.$6_0.$1M_0($v_3.append($v_2), this.$H_0, this.$M_0, null);
            this.$6_0.showHideArticleActions($v_3.append($v_2), this.$H_0);
            $v_3.css("display", "block");
            $v_3.find(".backimage").children("a").focus();
            if (this.$6_0.get_useNativeCrm()) {
                $v_2.find("#kmRating").hide();
                $v_2.find("#kmRatingContent").hide()
            }
            if (this.$0_0.$C_3) $v_2.find(".contentArticleActions").hide();
            else this.setContentHoverActions(this.$G_0)
        }
    },
    setHoverActions: function(currentRow) {
        var $v_0 = currentRow.find("#kmAssociateArticle"), $$t_J = this;
        $v_0.bind("mouseenter",
            function($p1_0) {
                $$t_J.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetassociatearticle_hover_16.png";
                $$t_J.$1_0 = "ms-crm-ImageStrip-searchwidget_associate_article_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_0, $$t_J.$2_0, $$t_J.$1_0)
            });
        var $$t_K = this;
        $v_0.bind("mouseleave",
            function($p1_0) {
                $$t_K.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetassociatearticle_16.png";
                $$t_K.$1_0 = "ms-crm-ImageStrip-searchwidget_associate_article";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_0, $$t_K.$2_0, $$t_K.$1_0)
            });
        var $v_1 = currentRow.find("#kmDisAssociateArticleImg_" + this.$H_0.get_articleId()), $$t_L = this;
        $v_1.bind("mouseenter",
            function($p1_0) {
                $$t_L.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetdisassociatearticle_hover_16.png";
                $$t_L.$1_0 = "ms-crm-ImageStrip-searchwidget_disassociate_article_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_1, $$t_L.$2_0, $$t_L.$1_0)
            });
        var $$t_M = this;
        $v_1.bind("mouseleave",
            function($p1_0) {
                $$t_M.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetdisassociatearticle_16_grey.png";
                $$t_M.$1_0 = "ms-crm-ImageStrip-searchwidget_disassociate_article";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_1, $$t_M.$2_0, $$t_M.$1_0)
            });
        var $v_2 = currentRow.find("#kmCopyLink"), $$t_N = this;
        $v_2.bind("mouseenter",
            function($p1_0) {
                $$t_N.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetcopylink_hover_16.png";
                $$t_N.$1_0 = "ms-crm-ImageStrip-searchwidget_copylink_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_2, $$t_N.$2_0, $$t_N.$1_0)
            });
        var $$t_O = this;
        $v_2.bind("mouseleave",
            function($p1_0) {
                $$t_O.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetcopylink_16.png";
                $$t_O.$1_0 = "ms-crm-ImageStrip-searchwidget_copylink";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_2, $$t_O.$2_0, $$t_O.$1_0)
            });
        var $v_3 = currentRow.find("#kmEmailLink"), $$t_P = this;
        $v_3.bind("mouseenter",
            function($p1_0) {
                $$t_P.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemailarticlelink_hover_16.png";
                $$t_P.$1_0 = "ms-crm-ImageStrip-searchwidget_email_article_link_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_3, $$t_P.$2_0, $$t_P.$1_0)
            });
        var $$t_Q = this;
        $v_3.bind("mouseleave",
            function($p1_0) {
                $$t_Q.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemaillink_16.png";
                $$t_Q.$1_0 = "ms-crm-ImageStrip-searchwidget_emaillink";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_3, $$t_Q.$2_0, $$t_Q.$1_0)
            });
        var $v_4 = currentRow.find("#kmEmailContentLink"), $$t_R = this;
        $v_4.bind("mouseenter",
            function($p1_0) {
                $$t_R.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemailarticle_hover.png";
                $$t_R.$1_0 = "ms-crm-ImageStrip-searchwidget_emailarticle_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_4, $$t_R.$2_0, $$t_R.$1_0)
            });
        var $$t_S = this;
        $v_4.bind("mouseleave",
            function($p1_0) {
                $$t_S.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemailarticle.png";
                $$t_S.$1_0 = "ms-crm-ImageStrip-searchwidget_emailarticle";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_4, $$t_S.$2_0, $$t_S.$1_0)
            });
        var $v_5 = currentRow.find("#kmPopOut"), $$t_T = this;
        $v_5.bind("mouseenter",
            function($p1_0) {
                $$t_T.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetpopoutarticle_hover_16.png";
                $$t_T.$1_0 = "ms-crm-ImageStrip-searchwidget_popout_article_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_5, $$t_T.$2_0, $$t_T.$1_0)
            });
        var $$t_U = this;
        $v_5.bind("mouseleave",
            function($p1_0) {
                $$t_U.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetpopout_16.png";
                $$t_U.$1_0 = "ms-crm-ImageStrip-searchwidget_popout";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_5, $$t_U.$2_0, $$t_U.$1_0)
            })
    },
    setContentHoverActions: function(wallQuery) {
        var $v_0 = wallQuery.find("#kmContentAssociateArticle"), $$t_M = this;
        $v_0.bind("mouseenter",
            function($p1_0) {
                $$t_M.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetassociatearticle_hover_16.png";
                $$t_M.$1_0 = "ms-crm-ImageStrip-searchwidget_associate_article_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_0, $$t_M.$2_0, $$t_M.$1_0)
            });
        var $$t_N = this;
        $v_0.bind("mouseleave",
            function($p1_0) {
                $$t_N.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetassociatearticle_16.png";
                $$t_N.$1_0 = "ms-crm-ImageStrip-searchwidget_associate_article";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_0, $$t_N.$2_0, $$t_N.$1_0)
            });
        var $v_1 = wallQuery.find("#kmAssociateArticle"), $$t_O = this;
        $v_1.bind("mouseenter",
            function($p1_0) {
                $$t_O.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetassociatearticle_hover_16.png";
                $$t_O.$1_0 = "ms-crm-ImageStrip-searchwidget_associate_article_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_1, $$t_O.$2_0, $$t_O.$1_0)
            });
        var $$t_P = this;
        $v_1.bind("mouseleave",
            function($p1_0) {
                $$t_P.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetassociatearticle_16.png";
                $$t_P.$1_0 = "ms-crm-ImageStrip-searchwidget_associate_article";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_1, $$t_P.$2_0, $$t_P.$1_0)
            });
        var $v_2 = wallQuery.find("#kmContentDisAssociateArticle"), $$t_Q = this;
        $v_2.bind("mouseenter",
            function($p1_0) {
                $$t_Q.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetdisassociatearticle_hover_16.png";
                $$t_Q.$1_0 = "ms-crm-ImageStrip-searchwidget_disassociate_article_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_2, $$t_Q.$2_0, $$t_Q.$1_0)
            });
        var $$t_R = this;
        $v_2.bind("mouseleave",
            function($p1_0) {
                $$t_R.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetdisassociatearticle_16_grey.png";
                $$t_R.$1_0 = "ms-crm-ImageStrip-searchwidget_disassociate_article";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_2, $$t_R.$2_0, $$t_R.$1_0)
            });
        var $v_3 = wallQuery.find("#kmContentCopyLink"), $$t_S = this;
        $v_3.bind("mouseenter",
            function($p1_0) {
                $$t_S.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetcopylink_hover_16.png";
                $$t_S.$1_0 = "ms-crm-ImageStrip-searchwidget_copylink_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_3, $$t_S.$2_0, $$t_S.$1_0)
            });
        var $$t_T = this;
        $v_3.bind("mouseleave",
            function($p1_0) {
                $$t_T.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetcopylink_16.png";
                $$t_T.$1_0 = "ms-crm-ImageStrip-searchwidget_copylink";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_3, $$t_T.$2_0, $$t_T.$1_0)
            });
        var $v_4 = wallQuery.find("#kmContentEmailLink"), $$t_U = this;
        $v_4.bind("mouseenter",
            function($p1_0) {
                $$t_U.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemailarticlelink_hover_16.png";
                $$t_U.$1_0 = "ms-crm-ImageStrip-searchwidget_email_article_link_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_4, $$t_U.$2_0, $$t_U.$1_0)
            });
        var $$t_V = this;
        $v_4.bind("mouseleave",
            function($p1_0) {
                $$t_V.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemaillink_16.png";
                $$t_V.$1_0 = "ms-crm-ImageStrip-searchwidget_emaillink";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_4, $$t_V.$2_0, $$t_V.$1_0)
            });
        var $v_5 = wallQuery.find("#kmContentEmailContent"), $$t_W = this;
        $v_5.bind("mouseenter",
            function($p1_0) {
                $$t_W.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemailarticle_hover.png";
                $$t_W.$1_0 = "ms-crm-ImageStrip-searchwidget_emailarticle_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_5, $$t_W.$2_0, $$t_W.$1_0)
            });
        var $$t_X = this;
        $v_5.bind("mouseleave",
            function($p1_0) {
                $$t_X.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetemailarticle.png";
                $$t_X.$1_0 = "ms-crm-ImageStrip-searchwidget_emailarticle";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_5, $$t_X.$2_0, $$t_X.$1_0)
            });
        var $v_6 = wallQuery.find("#kmContentPopOut"), $$t_Y = this;
        $v_6.bind("mouseenter",
            function($p1_0) {
                $$t_Y.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetpopoutarticle_hover_16.png";
                $$t_Y.$1_0 = "ms-crm-ImageStrip-searchwidget_popout_article_hover";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_6, $$t_Y.$2_0, $$t_Y.$1_0)
            });
        var $$t_Z = this;
        $v_6.bind("mouseleave",
            function($p1_0) {
                $$t_Z.$2_0 = window.CDNURL + "/_imgs/searchwidget/searchwidgetpopout_16.png";
                $$t_Z.$1_0 = "ms-crm-ImageStrip-searchwidget_popout";
                Mscrm.SearchWidgetContentHelper.setHighContrastBasedImageSource($v_6, $$t_Z.$2_0, $$t_Z.$1_0)
            })
    }
};
Mscrm.SearchWidgetErrorHelper = function() {};
Mscrm.SearchWidgetErrorHelper.getErrorCause = function(setting) {
    switch (setting) {
    case 3:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_ONPREMISE_ERROR_STRING;
    case 0:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_ERROR_SEARCH_COMPLETED_CAUSE_STRING;
    case 1:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_ERROR_SEARCH_ENABLED_CAUSE_STRING;
    case 2:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_OUTLOOK_ERROR_STRING
    }
    return ""
};
Mscrm.SearchWidgetErrorHelper.getErrorAction = function(setting) {
    switch (setting) {
    case 0:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_ERROR_SEARCH_COMPLETED_ACTION_STRING;
    case 1:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_ERROR_SEARCH_ENABLED_ACTION_STRING;
    case 2:
    case 3:
        return ""
    }
    return ""
};
Mscrm.SearchWidgetErrorHelper.getErrorMessage = function(errorCode) {
    if (isNullOrEmptyString(errorCode))
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_CONNECTION_ERROR_STRING;
    switch (errorCode) {
    case "C6001":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_403_C6001;
    case "C6002":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_403_C6002;
    case "C6003":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_403_C6003;
    case "C6004":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_403_C6004;
    case "400":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_400_B6007;
    case "500":
    case "C5000":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_500_C5000;
    case "408":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_REQUEST_TIMEOUT_ERROR_STRING;
    case "D6008":
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_501_D6007;
    case "C6005":
    case "C6006":
    default:
        return Mscrm.SearchWidget.localizedStrings.KMWALL_PARATURE_CONNECTION_ERROR_STRING
    }
};
Mscrm.SearchWidgetReflowHelper = function() {};
Mscrm.SearchWidgetReflowHelper.reflowControl = function(prefix, isHostedInTabbedControl) {
    var $v_0 = "kmwall-div-table-cell-onResize";
    if (isNullOrEmptyString(prefix)) return;
    var $v_1 = $get(prefix);
    if (IsNull($v_1)) return;
    var $v_2 = $P_CRM($v_1),
        $v_3 = $P_CRM("#" + prefix + "_container"),
        $v_4 = $P_CRM("#" + prefix + "_header"),
        $v_5 = $v_2.find("div.kmwall-filter-table"),
        $v_6 = $v_5.find("div.kmwall-div-table-row"),
        $v_7 = $v_5.find("div.kmwall-filter-cell"),
        $v_8 = $v_2.find("div.kmwall-result-sort-table"),
        $v_9 = $v_2.find("div.kmwall-text-cell"),
        $v_A = $v_4.find("div.kmwall"),
        $v_B = $v_4.children("div.kmwall-div-table"),
        $v_C = $P_CRM("div[tabid='ArticlesTab']");
    isHostedInTabbedControl && $v_C.length > 0 && $v_C.addClass("articleTabContainerDiv");
    var $v_D = 0, $v_E = 0, $v_F = 0, $v_G = null;
    if (!IsNull($v_2) && $v_2.length > 0) {
        $v_D = $v_2.parent().width();
        $v_E = $v_2.parent().height()
    }
    var $v_H = $v_D > 600;
    if ($v_H) {
        $v_5.prev().length > 0 && $v_5.prev()[0] !== $v_8[0] && $v_8.insertBefore($v_5);
        $v_5.addClass("filterScroll");
        var $v_K = $v_E / 2;
        $v_5.css("height", $v_K.toString());
        var $v_L = !IsNull($v_B) && !IsNull($v_B.first()) ? $v_B.first().outerHeight(true) : 0,
            $v_M = $v_8.outerHeight(true);
        $v_F = $v_L + $v_M
    } else {
        $v_5.next().length > 0 && $v_5.next()[0] !== $v_8[0] && $v_8.insertAfter($v_5);
        $v_5.removeClass("filterScroll").css("height", "auto");
        for (var $v_N = 0; $v_N < $v_B.length; $v_N++) $v_F += $P_CRM($v_B[$v_N]).outerHeight(true)
    }
    if (!isHostedInTabbedControl)
        $v_G = !IsNull($v_2.parent()) && $v_2.parent().length > 0 ? $v_2.parent().height() - $v_F + "px" : "auto";
    else
        $v_G = !IsNull($v_2
                .parent()) &&
            $v_2.parent().length > 0
            ? $v_2.parent().height() - ($v_F + 23) + "px"
            : "auto";
    $v_3.css("height", $v_G);
    $v_C.hasClass("articleTabContainerDiv") && $v_C.removeClass("articleTabContainerDiv");
    if ($v_8.length > 0 && $v_7.length > 0 && $v_5.length > 0 && $v_9.length > 0) {
        $v_8.toggleClass("sortFilterBorder-OnReflow", $v_H);
        $v_9.toggleClass("kmwall-div-display-block", $v_H);
        $v_7.toggleClass("kmwall-div-table-cell", !$v_H).toggleClass($v_0 + " kmwall-div-table-row", $v_H);
        $v_7.find("span.activityMoreCommands").toggleClass("kmwall-filterbox", $v_H);
        $v_5.toggleClass("kmwall-div-display-inline", $v_H);
        $v_6.toggleClass("kmwall-div-table-filterrow", $v_H);
        $v_A.toggleClass("kmwall-container-articlewall", $v_H)
    }
    var $v_I = $v_4.find(".searchBlurb");
    $v_I.length > 0 && $v_I.toggleClass("searchBlurb-onReflow", $v_H);
    var $v_J = $find(prefix + "_container");
    !IsNull($v_J) && $v_J.setFilterMenuWidths()
};
Mscrm.EmptyMessage = function(emptyMessageText) { this.message = emptyMessageText };
Mscrm.EmptyMessage.prototype = {
    message: null,
    get_messageAccessor: function() { return this.message },
    set_messageAccessor: function(value) {
        this.message = value;
        return value
    }
};
Mscrm.SettingsErrorMessage = function(causeText, actionText) {
    this.cause = causeText;
    this.action = actionText
};
Mscrm.SettingsErrorMessage.prototype = {
    cause: null,
    action: null,
    get_causeAccessor: function() { return this.cause },
    set_causeAccessor: function(value) {
        this.cause = value;
        return value
    },
    get_actionAccessor: function() { return this.action },
    set_actionAccessor: function(value) {
        this.action = value;
        return value
    }
};
Mscrm.SearchWidgetWallAssociateHelperBase = function() {};
Mscrm.SearchWidgetWallAssociateHelperBase.prototype = {
    $6_0: null,
    get_searchWidgetWall: function() { return this.$6_0 },
    set_searchWidgetWall: function(value) {
        this.$6_0 = value;
        return value
    },
    associateArticleWhenEmail: function(postData, relationshipName, publicLinkPrefix) {
        !Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[postData.get_articleUId()] &&
            this.associateArticle(postData, relationshipName, publicLinkPrefix, null, null)
    },
    associateClickHandler: function(articleRow, postData, relationshipName, publicLinkPrefix, articleRowOriginal) {
        var $$t_8 = this, $$t_9 = this;
        this.associateArticle(postData,
            relationshipName,
            publicLinkPrefix,
            function($p1_0) {
                articleRowOriginal &&
                    $$t_8.reloadAssociatedArticles(articleRowOriginal,
                        postData.get_articleId(),
                        "#kmDisassociateArticleDiv_",
                        true);
                Mscrm.MetricsReporting.instance().addMetric("SearchWidget.AssociateAction",
                    Mscrm.TelemetryHelper.getDetailsForTelemetry());
                $$t_8.reloadAssociatedArticles(articleRow, postData.get_articleId(), "#kmDisassociateArticleDiv_", true)
            },
            function($p1_0) {
                if ($p1_0.get_organizationServiceFault()) {
                    var $v_0 = $p1_0.get_organizationServiceFault().get_errorCode();
                    Xrm.Internal.openErrorDialog($v_0,
                        $p1_0.get_localizedMessage().toString(),
                        $p1_0.get_organizationServiceFault().get_responseOuterXml());
                    if ($v_0 === -2147088287) {
                        articleRowOriginal &&
                            $$t_9.reloadAssociatedArticles(articleRowOriginal,
                                postData.get_articleId(),
                                "#kmDisassociateArticleDiv_",
                                false);
                        $$t_9.reloadAssociatedArticles(articleRow,
                            postData.get_articleId(),
                            "#kmDisassociateArticleDiv_",
                            false)
                    }
                }
            })
    },
    setArticleDivHandler: function(articleRow, articleId, command, clickableAction) {
        var $v_0 = articleRow.find("#kmArticleImage"),
            $v_1 = articleRow.find("#kmContentArticleImage"),
            $v_2 = articleRow.find("#kmContentPopOutArticleImage"),
            $v_3 = articleRow.find("#kmContentPopOutArticleImageHighContrast");
        if (command === "#kmDisassociateArticleDiv_") {
            articleRow.find("#kmAssociateArticleDiv_" + articleId).css("display", "none");
            if (!IsNull($v_0.parents(".iconThumbnail"))) {
                $v_0.parents(".iconThumbnail").attr("alt",
                    Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ASSOCIATE_IMG_STRING);
                $v_0.parents(".iconThumbnail").attr("title",
                    Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ASSOCIATE_IMG_STRING)
            }
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_0,
                    "/_imgs/searchwidget/searchwidgetkbarticleassociated_32.png",
                    "ms-crm-ImageStrip-searchwidget_kb_associated_article");
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_1,
                    "/_imgs/searchwidget/searchwidgetkbarticleassociated_32.png",
                    "ms-crm-ImageStrip-searchwidget_kb_associated_article");
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_2,
                    "/_imgs/searchwidget/searchwidgetkbarticleassociated_32.png",
                    "ms-crm-ImageStrip-searchwidget_kb_associated_article");
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_3,
                    "/_imgs/searchwidget/searchwidgetkbarticleassociated_32.png",
                    "ms-crm-ImageStrip-searchwidget_kb_associated_article");
            if (this.$6_0.get_canShowDisassociateAction()) {
                articleRow.find("#kmDisassociateArticleDiv_" + articleId).css("display", "block");
                clickableAction && articleRow.find("#kmDisassociateArticle_" + articleId).focus()
            }
        } else if (command === "#kmAssociateArticleDiv_") {
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_0,
                    "/_imgs/searchwidget/searchwidgetarticleicon_24.png",
                    "ms-crm-ImageStrip-searchwidget_articleicon");
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_1,
                    "/_imgs/searchwidget/searchwidgetarticleicon_24.png",
                    "ms-crm-ImageStrip-searchwidget_articleicon");
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_2,
                    "/_imgs/searchwidget/searchwidgetarticleicon_24.png",
                    "ms-crm-ImageStrip-searchwidget_articleicon");
            Mscrm.SearchWidgetContentHelper
                .setHighContrastBasedImageSource($v_3,
                    "/_imgs/searchwidget/searchwidgetarticleicon_24.png",
                    "ms-crm-ImageStrip-searchwidget_articleicon");
            if (!IsNull($v_0.parents(".iconThumbnail"))) {
                $v_0.parents(".iconThumbnail").attr("alt", Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING);
                $v_0.parents(".iconThumbnail").attr("title", Mscrm.SearchWidget.localizedStrings.KMWALL_ICON_ALT_STRING)
            }
            if (this.$6_0.get_canShowAssociateAction()) {
                articleRow.find("#kmAssociateArticleDiv_" + articleId).css("display", "block");
                clickableAction && articleRow.find("#kmAssociateArticle_" + articleId).focus()
            }
            articleRow.find("#kmDisassociateArticleDiv_" + articleId).css("display", "none")
        }
    },
    reloadAssociatedArticles: function(articleRow, articleId, command, isRefreshParentGrid) {
        this.setArticleDivHandler(articleRow, articleId, command, true);
        this.getAssociatedArticles(null)
    }
};
Mscrm.NativeCrmAssociateHelper = function() { Mscrm.NativeCrmAssociateHelper.initializeBase(this) };
Mscrm.NativeCrmAssociateHelper.prototype = {
    associateArticleWhenEmail: function(postData, relationshipName, publicLinkPrefix) {
        var $v_0 = Xrm.Page.data.entity.getEntityName() === "incident", $v_1 = Xrm.Page.data.entity.getId();
        if (!Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[postData.get_articleUId()])
            if ($v_0) {
                var $$t_8 = this, $$t_9 = this;
                this.associateArticle(postData,
                    relationshipName,
                    publicLinkPrefix,
                    function($p1_0) {
                        Mscrm.SearchWidgetActionHelper.markArticleSentToCustomer(postData.get_articleUId(), $v_1)
                    },
                    function($p1_0) {
                        var $v_2 = $p1_0.get_organizationServiceFault().get_errorCode();
                        $v_2 === -2147088287 &&
                            Mscrm.SearchWidgetActionHelper.markArticleSentToCustomer(postData.get_articleUId(), $v_1)
                    })
            } else this.associateArticle(postData, relationshipName, publicLinkPrefix, null, null);
        else $v_0 && Mscrm.SearchWidgetActionHelper.markArticleSentToCustomer(postData.get_articleUId(), $v_1)
    },
    disassociateClickHandler: function(articleRow, postData, relationshipName, articleUId, articleRowOriginal) {
        var $$t_6 = this;
        Xrm.Internal.messages.disassociateKnowledgeArticle(Xrm.Page.data.entity.getId(),
            Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName()),
            relationshipName,
            postData.get_articleUId()).then(function($p1_0) {
                articleRowOriginal &&
                    $$t_6.reloadAssociatedArticles(articleRowOriginal,
                        postData.get_articleId(),
                        "#kmAssociateArticleDiv_",
                        true);
                $$t_6.reloadAssociatedArticles(articleRow, postData.get_articleId(), "#kmAssociateArticleDiv_", true)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    },
    getAssociatedArticles: function(loadCallback) {
        var $v_0 = null, $v_1 = "knowledgearticleid", $v_2 = "knowledgearticleid";
        if (Xrm.Page.data.entity
            .getEntityName() ===
            "incident")
            $v_0 =
                "<fetch mapping='logical'><entity name='knowledgearticleincident'><attribute name='knowledgearticleid' /><filter type='and'><condition attribute='incidentid' operator='eq' value='" + Xrm.Page.data.entity.getId() + "' /><condition attribute='statecode' operator='eq' value='0' /></filter></entity></fetch>";
        else
            $v_0 = String
                .format("<fetch mapping='logical'><entity name='knowledgearticle'><attribute name='articlepublicnumber' /><link-entity name='" + CrmEncodeDecode.CrmXmlEncode(Mscrm.SearchWidgetWallAssociateHelperBase.intersectTableName) + "' to='knowledgearticleid' from='knowledgearticleid' intersect='true' link-type='inner' alias='b'><filter type='and'><condition attribute='" + CrmEncodeDecode.CrmXmlEncode(Mscrm.SearchWidgetWallAssociateHelperBase.referencedEntityColumnName) + "' operator='eq' value='{0}' /></filter></link-entity></entity></fetch>", Xrm.Page.data.entity.getId());
        var $$t_8 = this;
        Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
                var $v_3 = $p1_0;
                if (!IsNull($v_3) && !IsNull($v_3.entityCollection)) {
                    Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles = {};
                    for (var $v_4 = 0; $v_3.entityCollection.get_count() > $v_4; $v_4++) {
                        var $v_5 = $v_3.entityCollection.get_item($v_4);
                        Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[$$t_8.$1q_1($v_5, $v_1)] = $$t_8
                            .$1q_1($v_5, $v_2)
                    }
                    loadCallback && loadCallback()
                }
            },
            null)
    },
    associateArticle: function(postData, relationshipName, publicLinkPrefix, succeedCallback, failedCallback) {
        var $$t_9 = this, $$t_A = this;
        Xrm.Internal.messages.associateKnowledgeArticle(Xrm.Page.data.entity.getId(),
            Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName()),
            relationshipName,
            postData.get_articleUId()).then(function($p1_0) { succeedCallback && succeedCallback($p1_0) },
            function($p1_0) {
                if (failedCallback) failedCallback($p1_0);
                else Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0)
            })
    },
    $1q_1: function($p0, $p1) {
        if ($p0.get_fieldTypes()[$p1] === 6) return $p0.getValue($p1).Id.toString();
        else return $p0.getValue($p1).toString()
    },
    reloadAssociatedArticles: function(articleRow, articleId, command, isRefreshParentGrid) {
        Mscrm.SearchWidgetWallAssociateHelperBase.prototype.reloadAssociatedArticles
            .call(this, articleRow, articleId, command, isRefreshParentGrid);
        isRefreshParentGrid && Xrm.Internal.refreshParentGrid(9954, "", "8d062aa3-1a78-4466-8c31-64bed842ff46")
    }
};
Mscrm.ParatureAssociateHelper = function() { Mscrm.ParatureAssociateHelper.initializeBase(this) };
Mscrm.ParatureAssociateHelper.prototype = {
    disassociateClickHandler: function(articleRow, postData, relationshipName, articleUId, articleRowOriginal) {
        if (!IsNull(articleUId)) {
            var $v_0 = new Xrm.Objects.EntityReference("knowledgebaserecord",
                    new Microsoft.Crm.Client.Core.Framework.Guid(articleUId)),
                $v_1 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
                    new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId())),
                $v_2 = [$v_1],
                $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship(relationshipName),
                $$t_C = this,
                $$t_D = this;
            Xrm.Internal.messages.disassociate($v_0, $v_3, $v_2).then(function($p1_0) {
                    articleRowOriginal &&
                        $$t_C.reloadAssociatedArticles(articleRowOriginal,
                            postData.get_articleId(),
                            "#kmAssociateArticleDiv_",
                            true);
                    $$t_C.reloadAssociatedArticles(articleRow,
                        postData.get_articleId(),
                        "#kmAssociateArticleDiv_",
                        true)
                },
                function($p1_0) {
                    if ($p1_0.get_organizationServiceFault()) {
                        var $v_4 = $p1_0.get_organizationServiceFault().get_errorCode();
                        Xrm.Internal.openErrorDialog($v_4,
                            $p1_0.get_message(),
                            $p1_0.get_organizationServiceFault().get_responseOuterXml())
                    }
                })
        } else this.reloadAssociatedArticles(articleRow, postData.get_articleId(), "#kmAssociateArticleDiv_", true)
    },
    getAssociatedArticles: function(loadCallback) {
        var $v_0 = String
                .format("<fetch mapping='logical'><entity name='knowledgebaserecord'><attribute name='uniqueid' /><attribute name='knowledgebaserecordid' /><link-entity name='" + CrmEncodeDecode.CrmXmlEncode(Mscrm.SearchWidgetWallAssociateHelperBase.intersectTableName) + "' to='knowledgebaserecordid' from='knowledgebaserecordid' intersect='true' link-type='inner' alias='b'><filter type='and'><condition attribute='" + CrmEncodeDecode.CrmXmlEncode(Mscrm.SearchWidgetWallAssociateHelperBase.referencedEntityColumnName) + "' operator='eq' value='{0}' /></filter></link-entity></entity></fetch>", Xrm.Page.data.entity.getId()),
            $$t_6 = this;
        Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
                var $v_1 = $p1_0;
                if (!IsNull($v_1) && !IsNull($v_1.entityCollection)) {
                    Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles = {};
                    for (var $v_2 = 0; $v_1.entityCollection.get_count() > $v_2; $v_2++) {
                        var $v_3 = $v_1.entityCollection.get_item($v_2);
                        Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles[$v_3.getValue("uniqueid")
                            .toString()] = $v_3.getValue("knowledgebaserecordid").toString()
                    }
                    loadCallback && loadCallback()
                }
            },
            null)
    },
    associateArticle: function(postData, relationshipName, publicLinkPrefix, succeedCallback, failedCallback) {
        var $v_0 = new Xrm.Objects.EntityReference("knowledgebaserecord",
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
            $v_1 = {},
            $v_2 = {};
        $v_1["uniqueid"] = 14;
        $v_2["uniqueid"] = postData.get_articleUId();
        $v_1["title"] = 14;
        $v_2["title"] = postData.get_question();
        $v_1["privateurl"] = 14;
        $v_2["privateurl"] = CrmEncodeDecode.CrmUrlDecode(postData.get_serviceDeskUri());
        $v_1["publicurl"] = 14;
        if (postData.get_published())
            $v_2["publicurl"] = Mscrm.SearchWidgetActionHelper.generateUrl(postData, false, false, publicLinkPrefix);
        var $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_0,
                $v_2,
                $v_1,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_3.get_changedFieldNames().add("uniqueid");
        $v_3.get_changedFieldNames().add("title");
        $v_3.get_changedFieldNames().add("privateurl");
        $v_3.get_changedFieldNames().add("publicurl");
        var $$t_D = this, $$t_E = this;
        Xrm.Internal.messages.createAndAssociate(Xrm.Page.data.entity.getId(),
            Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName()),
            relationshipName,
            $v_3).then(function($p1_0) { succeedCallback && succeedCallback($p1_0) },
            function($p1_0) {
                if (failedCallback) failedCallback($p1_0);
                else Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0)
            })
    },
    reloadAssociatedArticles: function(articleRow, articleId, command, isRefreshParentGrid) {
        Mscrm.SearchWidgetWallAssociateHelperBase.prototype.reloadAssociatedArticles
            .call(this, articleRow, articleId, command, isRefreshParentGrid);
        isRefreshParentGrid && Xrm.Internal.refreshParentGrid(9930, "", "1eda6b9d-8419-e411-8e13-0024e8412450")
    }
};
Mscrm.AssociateHelperFactory = function() {};
Mscrm.AssociateHelperFactory.createSearchWidgetWallAssociateHelper = function(wall) {
    var $v_0 = null;
    if (wall.get_useNativeCrm()) $v_0 = new Mscrm.NativeCrmAssociateHelper;
    else $v_0 = new Mscrm.ParatureAssociateHelper;
    $v_0.$6_0 = wall;
    return $v_0
};
Mscrm.SearchWidgetArticleFlyOutDialog = function() { Mscrm.SearchWidgetArticleFlyOutDialog.initializeBase(this) };
Mscrm.SearchWidgetArticleFlyOutDialog.prototype = {
    articleId: null,
    containerElement: null,
    configureButtons: function() {
        var $v_0 = new Array(1), $$t_2 = this;
        $v_0[0] = new Mscrm.FlyOutButton(Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_CLOSE,
            function() {
                $$t_2.hide();
                if (!IsNull($$t_2.containerElement) && $$t_2.containerElement.length > 0) {
                    var $v_1 = $$t_2.containerElement.find("#kmPopOut_" + $$t_2.articleId);
                    $v_1.focus()
                }
                $$t_2.disposeActions();
                $$t_2.dispose()
            });
        this.get_options().setButtons($v_0)
    },
    setupDialogButtons: function() {
        Mscrm.FlyOutDialog.prototype.setupDialogButtons.call(this);
        var $v_0 = this.dialogChrome(),
            $v_1 = $P_CRM(String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", 1), $v_0),
            $v_2 = $P_CRM(".ui-button-text", $v_1);
        $v_2.length > 0 && $v_2.text(Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_CLOSE)
    },
    disposeActions: function() {
        var $v_0 = $P_CRM("#articlePopContent_" + this.articleId);
        Mscrm.SearchWidgetWall.disposeArticleRow($v_0, true)
    }
};
Mscrm.SearchWidgetFlyOutHelper = function(articleRow,
    currentPost,
    relationshipName,
    articleId,
    searchWidgetWall,
    objSearchWidget) {
    this.$E_0 = articleRow;
    this.$8_0 = currentPost;
    this.$M_0 = relationshipName;
    this.$W_0 = articleId;
    this.$6_0 = searchWidgetWall;
    this.$0_0 = objSearchWidget
};
Mscrm.SearchWidgetFlyOutHelper.prototype = {
    $4_0: null,
    $E_0: null,
    $f_0: null,
    $8_0: null,
    $M_0: null,
    $W_0: null,
    $6_0: null,
    $0_0: null,
    loadArticleContent: function() {
        if (this.$6_0.get_useNativeCrm()) {
            Mscrm.SearchWidgetActionHelper.incrementKnowledgeArticleViewCount(this.$8_0);
            this.$E_0.find("#kmNoOfViewsContent").text(this.$8_0.get_timesViewed().toString())
        }
        this.$2E_0();
        this.$4_0.show($P_CRM("#articlePopOut_flyoutLoadingArea_" + this.$W_0));
        var $v_0 = $P_CRM("#articlePopContent_" + this.$W_0);
        this.$6_0.$1M_0($v_0, this.$8_0, this.$M_0, this.$4_0);
        this.$6_0.showHideArticleActions($v_0, this.$8_0);
        var $v_1 = new Mscrm.SearchWidgetContentHelper(null,
            $v_0,
            this.$E_0,
            this.$8_0,
            this.$M_0,
            this.$6_0,
            this.$0_0);
        $v_1.setContentHoverActions($v_0)
    },
    $2E_0: function() {
        this.$4_0 = new Mscrm.SearchWidgetArticleFlyOutDialog;
        var $v_0 = $P_CRM("#kmArticlePopOutContentTemplate").tmpl(this.$8_0), $v_1 = $P_CRM("<div></div>").append($v_0);
        this.$f_0 = this.$6_0.getBaseArticleDivForFlyOut(this.$4_0, this.$W_0);
        this.$4_0.containerElement = this.$f_0;
        this.$4_0.articleId = this.$W_0;
        this.$4_0.setContent($v_1);
        this.$4_0.get_options().set_width(640);
        this.$4_0.get_options().set_height(545);
        this.$4_0.get_options().set_applyAnchorClassChange(false);
        this.$4_0.get_options().set_modal(true);
        this.$4_0.get_options().set_hideWithClickOnOverlay(false);
        this.$4_0.set_dialogLeft(($P_CRM(window).width() - this.$4_0.get_options().get_width()) / 2);
        this.$4_0.set_dialogTop(($P_CRM(window).height() - this.$4_0.get_options().get_height()) / 2);
        this.$4_0.set_position("custom");
        this.$4_0.get_options().set_letjQueryHandleTabbing(true);
        this.$4_0.set_shouldDisposeContent(true);
        this.$4_0.get_options().set_title(Mscrm.SearchWidget.localizedStrings.KMWALL_POPOUT_TITLE);
        this.$4_0.get_options().set_showTitlePane(true);
        this.$4_0.get_options().set_showButtonPane(true);
        this.$4_0.get_options().set_showCloseButton(true);
        this.$4_0.get_options().set_draggable(true);
        this.$4_0.set_shouldDisposeContent(true);
        this.$4_0.get_options().set_focusOnFirstTabbable(true);
        this.$4_0.get_options().set_dialogClass("ArticlePopOutCss");
        var $v_2 = this.$4_0.dialogChrome(), $v_3 = $v_2.find("a.ui-dialog-titlebar-close");
        if (this.$6_0.get_useNativeCrm()) {
            $v_2.find("#kmRating").hide();
            $v_2.find("#kmRatingContent").hide()
        }
        var $$t_6 = this;
        $v_3.click(function($p1_0) {
            $$t_6.$4_0.hide();
            if (!IsNull($$t_6.$f_0) && $$t_6.$f_0.length > 0) {
                var $v_4 = $$t_6.$f_0.find("#kmPopOut_" + $$t_6.$W_0);
                $v_4.focus()
            }
            $$t_6.$4_0.disposeActions();
            $$t_6.$4_0.dispose()
        })
    }
};
Mscrm.TelemetryHelper = function() {};
Mscrm.TelemetryHelper.getDetailsForTelemetry = function() {
    var $v_0 = {};
    $v_0["EntityName"] = Xrm.Page.data.entity.getEntityName();
    $v_0["CurrentDateTime"] = Mscrm.DateTimeUtility.localDateTimeNow();
    $v_0["ClientName"] = Xrm.Page.context.client.getClient();
    return $v_0
};
Mscrm.SearchWidgetWallFilter.registerClass("Mscrm.SearchWidgetWallFilter");
Mscrm.SearchWidgetConstants.registerClass("Mscrm.SearchWidgetConstants");
Mscrm.ArticleTypes.registerClass("Mscrm.ArticleTypes");
Mscrm.SortTypes.registerClass("Mscrm.SortTypes");
Mscrm.SearchWidget.registerClass("Mscrm.SearchWidget", Mscrm.CrmUIControl, Sys.IDisposable);
Mscrm.ArticleEventArgs.registerClass("Mscrm.ArticleEventArgs", Sys.EventArgs);
Mscrm.SearchWidgetActionHelper.registerClass("Mscrm.SearchWidgetActionHelper");
Mscrm.SearchWidgetWall.registerClass("Mscrm.SearchWidgetWall", null, Wall.Interfaces.IWall, Sys.IDisposable);
Mscrm.SearchWidgetWallCommandDispatcher.registerClass("Mscrm.SearchWidgetWallCommandDispatcher");
Mscrm.SearchWidgetWallService.registerClass("Mscrm.SearchWidgetWallService", null, Wall.Interfaces.IWallService);
Mscrm.SearchWidgetControlConstants.registerClass("Mscrm.SearchWidgetControlConstants");
Mscrm.WallCommands.registerClass("Mscrm.WallCommands");
Mscrm.SearchWidgetContentHelper.registerClass("Mscrm.SearchWidgetContentHelper");
Mscrm.SearchWidgetErrorHelper.registerClass("Mscrm.SearchWidgetErrorHelper");
Mscrm.SearchWidgetReflowHelper.registerClass("Mscrm.SearchWidgetReflowHelper");
Mscrm.EmptyMessage.registerClass("Mscrm.EmptyMessage");
Mscrm.SettingsErrorMessage.registerClass("Mscrm.SettingsErrorMessage");
Mscrm.SearchWidgetWallAssociateHelperBase.registerClass("Mscrm.SearchWidgetWallAssociateHelperBase");
Mscrm.NativeCrmAssociateHelper.registerClass("Mscrm.NativeCrmAssociateHelper",
    Mscrm.SearchWidgetWallAssociateHelperBase);
Mscrm.ParatureAssociateHelper.registerClass("Mscrm.ParatureAssociateHelper", Mscrm.SearchWidgetWallAssociateHelperBase);
Mscrm.AssociateHelperFactory.registerClass("Mscrm.AssociateHelperFactory");
Mscrm.SearchWidgetArticleFlyOutDialog.registerClass("Mscrm.SearchWidgetArticleFlyOutDialog", Mscrm.FlyOutDialog);
Mscrm.SearchWidgetFlyOutHelper.registerClass("Mscrm.SearchWidgetFlyOutHelper");
Mscrm.TelemetryHelper.registerClass("Mscrm.TelemetryHelper");
Mscrm.SearchWidgetWallFilter.$l = false;
Mscrm.SearchWidgetConstants.articleFilterButton = "kmWallFilterButton";
Mscrm.SearchWidgetConstants.languageFilterButton = "kmWallFilterLanguageButton";
Mscrm.SearchWidgetConstants.departmentFilterButton = "kmWallFilterDepartmentButton";
Mscrm.SearchWidgetConstants.sortFilterButton = "kmWallFilterSortButton";
Mscrm.SearchWidgetConstants.autoSuggestionSourceAnalyticsService = "1";
Mscrm.SearchWidgetConstants.englishCode = 1033;
Mscrm.ArticleTypes.invalidFilter = 0;
Mscrm.ArticleTypes.allArticles = 1;
Mscrm.ArticleTypes.allDraftArticles = 2;
Mscrm.ArticleTypes.allPublishedArticles = 3;
Mscrm.ArticleTypes.publishedPrivateArticles = 4;
Mscrm.ArticleTypes.publishedPublicArticles = 5;
Mscrm.ArticleTypes.allApprovedArticles = 6;
Mscrm.SortTypes.invalidLanguage = -1;
Mscrm.SortTypes.relevance = 0;
Mscrm.SortTypes.rating = 1;
Mscrm.SortTypes.numberOfViews = 2;
Mscrm.SortTypes.lastModifiedDateNewestFirst = 3;
Mscrm.SortTypes.lastModifiedDateOldestFirst = 4;
Mscrm.SearchWidget.refreshTimeInterval = 1.2e5;
Mscrm.SearchWidget.localizedStrings = null;
Mscrm.SearchWidgetWall.$u = null;
Mscrm.SearchWidgetWall.$D = null;
Mscrm.SearchWidgetControlConstants.articleContentTemplateId = "kmArticleContentTemplate";
Mscrm.SearchWidgetControlConstants.articlePopOutContentTemplateId = "kmArticlePopOutContentTemplate";
Mscrm.SearchWidgetControlConstants.articleContentContainer = "articleContent";
Mscrm.SearchWidgetControlConstants.articleDescriptionSelector = ".articleDescription";
Mscrm.SearchWidgetControlConstants.messageContainer = "kmwallMessageContainer";
Mscrm.SearchWidgetControlConstants.emptyMessageTemplate = "kmEmptyMessageTemplate";
Mscrm.SearchWidgetControlConstants.articleIdSpan = "#articleId";
Mscrm.SearchWidgetControlConstants.searchPane = "#searchPane_";
Mscrm.SearchWidgetControlConstants.associateArticleAnchor = "#kmAssociateArticle_";
Mscrm.SearchWidgetControlConstants.disassociateArticleAnchor = "#kmDisassociateArticle_";
Mscrm.SearchWidgetControlConstants.associateArticleDiv = "#kmAssociateArticleDiv_";
Mscrm.SearchWidgetControlConstants.disassociateArticleDiv = "#kmDisassociateArticleDiv_";
Mscrm.SearchWidgetControlConstants.copyLinkAnchor = "#kmCopyLink_";
Mscrm.SearchWidgetControlConstants.copyLinkArticleDiv = "#kmCopyLinkArticleDiv_";
Mscrm.SearchWidgetControlConstants.emailLinkAnchor = "#kmEmailLink_";
Mscrm.SearchWidgetControlConstants.emailContentLinkAnchor = "#kmEmailContentLink_";
Mscrm.SearchWidgetControlConstants.emailLinkArticleDiv = "#kmEmailLinkArticleDiv_";
Mscrm.SearchWidgetControlConstants.emailContentLinkArticleDiv = "#kmEmailContentLinkArticleDiv_";
Mscrm.SearchWidgetControlConstants.popOutAnchor = "#kmPopOut_";
Mscrm.SearchWidgetControlConstants.popOutArticleDiv = "#kmPopOutArticleDiv_";
Mscrm.SearchWidgetControlConstants.associateArticleImage = "#kmAssociateArticle";
Mscrm.SearchWidgetControlConstants.disassociateArticleImage = "#kmDisAssociateArticleImg_";
Mscrm.SearchWidgetControlConstants.copyLinkImage = "#kmCopyLink";
Mscrm.SearchWidgetControlConstants.emailLinkImage = "#kmEmailLink";
Mscrm.SearchWidgetControlConstants.emailContentLinkImage = "#kmEmailContentLink";
Mscrm.SearchWidgetControlConstants.popOutImage = "#kmPopOut";
Mscrm.SearchWidgetControlConstants.contentAssociateArticleImage = "#kmContentAssociateArticle";
Mscrm.SearchWidgetControlConstants.contentDisassociateArticleImage = "#kmContentDisAssociateArticle";
Mscrm.SearchWidgetControlConstants.contentCopyLinkImage = "#kmContentCopyLink";
Mscrm.SearchWidgetControlConstants.contentEmailLinkImage = "#kmContentEmailLink";
Mscrm.SearchWidgetControlConstants.contentEmailContentImage = "#kmContentEmailContent";
Mscrm.SearchWidgetControlConstants.contentPopOutImage = "#kmContentPopOut";
Mscrm.SearchWidgetControlConstants.popOutContentArticleImageId = "#kmContentPopOutArticleImage";
Mscrm.SearchWidgetControlConstants.popOutContentHighContrastArticleImageId = "#kmContentPopOutArticleImageHighContrast";
Mscrm.SearchWidgetControlConstants.kmNoOfViewsContent = "#kmNoOfViewsContent";
Mscrm.SearchWidgetControlConstants.kmRating = "#kmRating";
Mscrm.SearchWidgetControlConstants.kmRatingContent = "#kmRatingContent";
Mscrm.SearchWidgetControlConstants.wallContainerSelector = ".wallContainer";
Mscrm.SearchWidgetControlConstants.articleContentSelector = ".articleContent";
Mscrm.SearchWidgetControlConstants.articleActionsSelector = ".articleActions";
Mscrm.SearchWidgetControlConstants.articleContentActionsSelector = ".contentArticleActions";
Mscrm.SearchWidgetControlConstants.allPublishedArticlesFilters = "SearchWidget_Filters_AllPublishedArticles";
Mscrm.SearchWidgetControlConstants.allApprovedArticlesFilters = "SearchWidget_Filters_AllApprovedArticles";
Mscrm.SearchWidgetControlConstants.allDraftArticlesFilters = "SearchWidget_Filters_AllDraftArticles";
Mscrm.SearchWidgetControlConstants.ratingFilters = "SearchWidget_Filters_Rating";
Mscrm.SearchWidgetControlConstants.numberOfViewsFilters = "SearchWidget_Filters_NumberOfViews";
Mscrm.SearchWidgetControlConstants
    .lastModifiedDateNewestFirstFilters = "SearchWidget_Filters_LastModifiedDate_NewestFirst";
Mscrm.SearchWidgetControlConstants
    .lastModifiedDateOldestFirstFilters = "SearchWidget_Filters_LastModifiedDate_OldestFirst";
Mscrm.SearchWidgetControlConstants.ratingDescendingFilters = "Rating_desc_";
Mscrm.SearchWidgetControlConstants.timesViewedDescendingArticlesFilters = "Times_Viewed_desc_";
Mscrm.SearchWidgetControlConstants.ratingAscendingFilters = "Rating_asc_";
Mscrm.SearchWidgetControlConstants.timesViewedAscendingArticlesFilters = "Times_Viewed_asc_";
Mscrm.SearchWidgetControlConstants.dateUpdatedDescendingArticlesFilters = "Date_Updated_desc_";
Mscrm.SearchWidgetControlConstants.dateUpdatedAscendingFilters = "Date_Updated_asc_";
Mscrm.SearchWidgetControlConstants.knowledgeArticleViews = "knowledgearticleviews";
Mscrm.SearchWidgetControlConstants.knowledgeArticleModifiedOn = "modifiedon";
Mscrm.SearchWidgetControlConstants.knowledgeArticleAllDraftStates = "0";
Mscrm.SearchWidgetControlConstants.knowledgeArticleAllPublishedStates = "3";
Mscrm.SearchWidgetControlConstants.knowledgeArticleAllApprovedStates = "1";
Mscrm.SearchWidgetControlConstants.paratureKnowledgeArticleAllDraftStates = "0";
Mscrm.SearchWidgetControlConstants.paratureKnowledgeArticleAllPublishedStates = "1";
Mscrm.SearchWidgetControlConstants.knowledgeArticleDraftState = 0;
Mscrm.SearchWidgetControlConstants.knowledgeArticleApprovedState = 1;
Mscrm.SearchWidgetControlConstants.knowledgeArticleScheduledState = 2;
Mscrm.SearchWidgetControlConstants.errorMessageTemplate = "kmErrorMessageTemplate";
Mscrm.SearchWidgetControlConstants.wallMessageContainerId = "kmwallErrorMessageContainer";
Mscrm.SearchWidgetControlConstants.articleTypeImageId = "#kmArticleTypeImage";
Mscrm.SearchWidgetControlConstants.articleImageId = "#kmArticleImage";
Mscrm.SearchWidgetControlConstants.articleTypeDivId = "#kmArticleType";
Mscrm.SearchWidgetControlConstants.contentArticleImageId = "#kmContentArticleImage";
Mscrm.SearchWidgetControlConstants.emptyMessageSelector = ".kmwall-SearchResultsMessage";
Mscrm.SearchWidgetControlConstants.errorMessageSelector = ".wallMessageContainer";
Mscrm.SearchWidgetControlConstants.controlErrorMessageTemplateId = "kmwallControlErrorMessageTemplate";
Mscrm.SearchWidgetControlConstants.controlErrorMessageCauseId = "#kmControlErrorMessageCause";
Mscrm.SearchWidgetControlConstants.controlErrorMessageActionId = "#kmControlErrorMessageAction";
Mscrm.SearchWidgetControlConstants.loadingDivSelector = "#DialogLoadingDiv";
Mscrm.SearchWidgetControlConstants.loadingMoreDivSelector = "#DialogLoadingMoreDiv";
Mscrm.SearchWidgetControlConstants.languageIdPrefix = "lang_";
Mscrm.SearchWidgetControlConstants.badRequestError = "400";
Mscrm.SearchWidgetControlConstants.unauthorizedError = "401";
Mscrm.SearchWidgetControlConstants.forbiddenError = "403";
Mscrm.SearchWidgetControlConstants.notFoundError = "404";
Mscrm.SearchWidgetControlConstants.timeoutError = "408";
Mscrm.SearchWidgetControlConstants.internalServerError = "500";
Mscrm.SearchWidgetControlConstants.notImplemented = "501";
Mscrm.SearchWidgetControlConstants.badGatewayError = "502";
Mscrm.SearchWidgetControlConstants.serviceUnavailableError = "503";
Mscrm.SearchWidgetControlConstants.cors403SslCookieErr = "C6001";
Mscrm.SearchWidgetControlConstants.cors403CsrPermissionErr = "C6002";
Mscrm.SearchWidgetControlConstants.cors403InvalidDeptErr = "C6003";
Mscrm.SearchWidgetControlConstants.cors403InvalidAcctErr = "C6004";
Mscrm.SearchWidgetControlConstants.cors403InvalidDomainErr = "C6005";
Mscrm.SearchWidgetControlConstants.cors403NotWhiteListedErr = "C6006";
Mscrm.SearchWidgetControlConstants.cors500InternalServerErr = "C5000";
Mscrm.SearchWidgetControlConstants.cors501NotImplementedGetErr = "D6008";
Mscrm.SearchWidgetControlConstants.wallMessageContainer = ".wallMessageContainer";
Mscrm.SearchWidgetControlConstants.showMoreLinkTemplate = "#showMoreLinkTemplate";
Mscrm.SearchWidgetControlConstants.showMoreLinkJQueryId = ".showMoreLink";
Mscrm.SearchWidgetControlConstants.showMoreLinkProgressClass = "showMoreLinkProgress";
Mscrm.SearchWidgetControlConstants.watermarkTextBoxClass = "WatermarkTextBox_Gray";
Mscrm.SearchWidgetControlConstants.articleTemplateId = "kmPostTemplate";
Mscrm.SearchWidgetControlConstants.wallContainerId = "kmwallContainer";
Mscrm.WallCommands.refreshWall = "refreshall";
Mscrm.WallCommands.showText = "showtext";
Mscrm.WallCommands.clearWall = "clearwall";
Mscrm.WallCommands.hideArticleContent = "hidearticlecontent";
Mscrm.WallCommands.showErrorContent = "showerrorcontent";
Mscrm.WallCommands.getAssociatedArticles = "getassociatedarticles";
Mscrm.SearchWidgetContentHelper.$x = {};
Mscrm.SearchWidgetWallAssociateHelperBase.intersectTableName = null;
Mscrm.SearchWidgetWallAssociateHelperBase.referencedEntityColumnName = null;
Mscrm.SearchWidgetWallAssociateHelperBase.associatedArticles = {};
Mscrm.SearchWidgetWallAssociateHelperBase.defaultArticleImage = "/_imgs/searchwidget/searchwidgetarticleicon_24.png";
Mscrm.SearchWidgetWallAssociateHelperBase
    .associatedArticleImage = "/_imgs/searchwidget/searchwidgetkbarticleassociated_32.png";
Mscrm.SearchWidgetWallAssociateHelperBase.defaultArticleClass = "ms-crm-ImageStrip-searchwidget_articleicon";
Mscrm.SearchWidgetWallAssociateHelperBase
    .associatedArticleClass = "ms-crm-ImageStrip-searchwidget_kb_associated_article";
Mscrm.NativeCrmAssociateHelper.knowledgeArticleEntityId = "8d062aa3-1a78-4466-8c31-64bed842ff46";
Mscrm.ParatureAssociateHelper.knowledgebaseEntityId = "1eda6b9d-8419-e411-8e13-0024e8412450"