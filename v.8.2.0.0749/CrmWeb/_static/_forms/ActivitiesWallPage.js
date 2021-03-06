Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.ActivitiesWallPage = function(element) {
    this.$$d_$1J_3 = Function.createDelegate(this, this.$1J_3);
    this.$e_3 = new Sales.Common.Framework.Loaders.ConcurrentContentLoader;
    Mscrm.FormInputControl.ActivitiesWallPage.initializeBase(this, [element])
};
Mscrm.FormInputControl.ActivitiesWallPage
    .get_localizedStringsDeferred = function() { return Mscrm.FormInputControl.ActivitiesWallPage.$U };
Mscrm.FormInputControl.ActivitiesWallPage.initializeLocalizedStrings = function() {
    if (IsNull(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings)) {
        Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings = window.self.activitieswallStrings;
        Mscrm.FormInputControl.ActivitiesWallPage.$U.resolve(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings)
    }
};
Mscrm.FormInputControl.ActivitiesWallPage.prototype = {
    $C_3: null,
    $k_3: null,
    $Q_3: null,
    $m_3: null,
    $h_3: null,
    $2_3: null,
    $p_3: false,
    $s_3: null,
    $E_3: null,
    $16_3: false,
    $q_3: false,
    $a_3: null,
    $o_3: true,
    $18_3: null,
    $1D_3: null,
    $j_3: null,
    get_wallCommandDispatcher: function() { return this.$2_3 },
    set_wallCommandDispatcher: function(value) {
        this.$2_3 = value;
        return value
    },
    get_entityId: function() { return this.$C_3 },
    set_entityId: function(value) {
        this.$C_3 = value;
        return value
    },
    get_viewId: function() { return this.$k_3 },
    set_viewId: function(value) {
        this.$k_3 = value;
        return value
    },
    get_entityObjectTypeCode: function() { return this.$Q_3 },
    set_entityObjectTypeCode: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_masterComponentId: function() { return this.$h_3 },
    set_masterComponentId: function(value) {
        this.$h_3 = value;
        return value
    },
    get_wallContentPageUrl: function() { return this.$m_3 },
    set_wallContentPageUrl: function(value) {
        this.$m_3 = value;
        return value
    },
    get_tabId: function() { return this.$s_3 },
    set_tabId: function(value) {
        this.$s_3 = value;
        return value
    },
    get_isControlReadOnly: function() { return this.$p_3 },
    set_isControlReadOnly: function(value) {
        this.$p_3 = value;
        return value
    },
    get_sortActivityWall: function() { return this.$1D_3 },
    set_sortActivityWall: function(value) {
        this.$1D_3 = value;
        return value
    },
    get_orderByActivityWall: function() { return this.$18_3 },
    set_orderByActivityWall: function(value) {
        this.$18_3 = value;
        return value
    },
    get_preloadRequest: function() { return this.$j_3 },
    set_preloadRequest: function(value) {
        this.$j_3 = value;
        if (!IsNull(this.$2_3)) this.$2_3.$I_0 = value;
        return value
    },
    initialize: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("LoadActivities_Start", 1);
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Mscrm.FormInputControl.ActivitiesWallPage.initializeLocalizedStrings();
        this.$1u_3();
        !IsNull(this.get_eventManager()) && this.get_eventManager().subscribeEvent(76, this.get_id());
        if (window.IsTurboForm) this.$1J_3();
        else {
            this.loadWallContent(this.$e_3);
            Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$1J_3, 2)
        }
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 76:
            if (this.$h_3 === sourceComponent.get_id()) {
                if (isNullOrEmptyString(this.get_element().innerHTML) && !IsNull(this.$E_3)) {
                    this.get_element().innerHTML = this.$E_3;
                    this.$13_3()
                }
                if (isNullOrEmptyString(this.get_element().innerHTML) && IsNull(this.$E_3)) {
                    this.$a_3 = parameters;
                    break
                }
                this.$1P_3(parameters)
            }
            break
        }
        return null
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.get_eventManager()) && this.get_eventManager().unsubscribeEvent(76, this.get_id());
        !IsNull(this.$e_3) && this.$e_3.dispose();
        if (!IsNull(this.$2_3)) {
            this.$2_3.dispose();
            this.$2_3 = null
        }
        this.$E_3 = null;
        Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings = null;
        Mscrm.FormInputControl.ActivitiesWallPage.$U = jQueryApi.jQueryDeferredFactory
            .Deferred(Mscrm.FormInputControl.ActivitiesWallLocalizedStrings, Error);
        $P_CRM(this.get_element()).empty().remove();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $1u_3: function() { this.$o_3 = window.self.isActivityReadEnabled },
    $23_3: function() {
        this.$2_3.dispatchCommand("showtext",
            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING)
    },
    $1b_3: function() {
        var $v_0 = $find("PrimaryEntity");
        !IsNull($v_0) &&
            $v_0.get_isNew() &&
            this.$2_3.dispatchCommand("showtext",
                Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING)
    },
    $1J_3: function() {
        if (isNullOrEmptyString(this.get_element().innerHTML) && !IsNull(this.$E_3)) {
            this.get_element().innerHTML = this.$E_3;
            this.$13_3()
        }
        this.$q_3 = true
    },
    $13_3: function() {
        if (!this.$16_3) this.$16_3 = true;
        else return;
        this.$z_3();
        if (window.IsTurboForm) this.$1b_3();
        else {
            var $$t_0 = this;
            window.setTimeout(function() { $$t_0.$1b_3() }, 1e3)
        }
    },
    loadWallContent: function(loader) {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("LoadActivitiesWallHtml");
        $v_0.start();
        var $$t_3 = this;
        loader.loadContent(this.$m_3,
            "html",
            function($p1_0) {
                $$t_3.$E_3 = $p1_0;
                $v_0.stop();
                $$t_3.$q_3 && isNullOrEmptyString($$t_3.get_element().innerHTML) && $$t_3.$1i_3()
            })
    },
    $1i_3: function() {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("ActivitiesWall_Render");
        $v_0.start();
        this.get_element().innerHTML = this.$E_3;
        this.$13_3();
        if (!IsNull(this.$a_3)) {
            this.$1P_3(this.$a_3);
            this.$a_3 = null
        }
        $v_0.stop()
    },
    $1j_3: function($p0, $p1) {
        this.$z_3();
        this.$2_3.dispatchCommand("showtext",
            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.LOADING_TEXT_LOC_STRING);
        if (!this.$Q_3) {
            var $v_0 = Xrm.Page.data.entity.getEntityName();
            if (!isNullOrEmptyString($v_0)) {
                var $v_1 = convertETNtoETC($v_0);
                if ($v_1 !== -1) this.$Q_3 = $v_1.toString()
            }
        }
        if ($p0) {
            this.$C_3 = $p0;
            this.$2_3.set_entityId($p0)
        }
        if (!this.$o_3) {
            this.$23_3();
            return
        }
        if (!isNullOrEmptyString($p1)) this.$2_3.dispatchCommand("loadwall", $p1);
        else this.$2_3.dispatchCommand("loadwall", null)
    },
    $1P_3: function($p0) {
        window.IS_ACTIVITY_SORTING && $p0 && this.$1v_3($p0);
        if ($p0 && $p0["entityID"])
            if (!isNullOrEmptyString($p0["entityTypeToExpand"])) this.$1j_3($p0["entityID"], $p0["entityTypeToExpand"]);
            else this.$1j_3($p0["entityID"]);
        else {
            this.$z_3();
            this.$2_3.dispatchCommand("showtext",
                Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING)
        }
    },
    $1v_3: function($p0) {
        var $v_0 = {}, $v_1 = false, $v_2 = $p0["activityorder"], $v_3 = $p0["activitysort"];
        if (!isNullOrEmptyString($v_2)) {
            $v_0["orderByActivity"] = $v_2;
            $v_1 = true
        }
        if (!isNullOrEmptyString($v_3)) {
            $v_0["sortActivity"] = $v_3;
            $v_1 = true
        }
        $v_1 && this.$2_3.set_activityServiceParams($v_0)
    },
    $z_3: function() {
        if (!this.$2_3) {
            this.$2_3 = new Mscrm.FormInputControl
                .ActivitiesWallCommandDispatcher(this.get_element().id, this.$C_3, this.$k_3, this.$Q_3);
            this.$2_3.$I_0 = this.$j_3
        }
    }
};
Mscrm.FormInputControl.ActivityWallFilter = function() {};
Mscrm.FormInputControl.WallCommands = function() {};
Mscrm.FormInputControl
    .ActivitiesWallCommandDispatcher = function(wallElementId, entityId, viewId, entityObjectTypeCode) {
        this.$$d_$1r_0 = Function.createDelegate(this, this.$1r_0);
        this.$0_0 = $P_CRM("#" + wallElementId);
        this.$1F_0 = this.$0_0.find("#wall");
        this.$1F_0.height("auto");
        var $v_0 = Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACTIVITYPOINTER_RELATIONSHIP_NAME,
            $v_1 = Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ISACTIVITYPARTY;
        this.$1_0 = new ActivitiesWall.Service.WallService(entityId, viewId, entityObjectTypeCode, $v_0, $v_1);
        this.$5_0 = new ActivitiesWall.UI.ActivitiesWall(this.$1_0,
            "header",
            "postTemplate",
            "wallContainer",
            wallElementId,
            "emailTemplate",
            "emailExpand",
            "emailCollapse",
            "wallLoading",
            "conversationLoading");
        this.$5_0.$3_0 = 10
    };
Mscrm.FormInputControl.ActivitiesWallCommandDispatcher.prototype = {
    $0_0: null,
    $1F_0: null,
    $1_0: null,
    $5_0: null,
    $C_0: null,
    get_entityId: function() { return this.$C_0 },
    set_entityId: function(value) {
        this.$C_0 = value;
        this.$5_0 && this.$5_0.set_entityId(this.$C_0);
        return value
    },
    get_wallFilter: function() { return this.$1_0.$B_0 },
    set_wallFilter: function(value) {
        this.$1_0.$B_0 = value;
        return value
    },
    get_activityServiceParams: function() { return this.$1_0.$J_0 },
    set_activityServiceParams: function(value) {
        this.$1_0.$J_0 = value;
        return value
    },
    get_objectTypeCode: function() { return this.$1_0.$9_0 },
    set_objectTypeCode: function(value) {
        this.$1_0.$9_0 = value;
        return value
    },
    $I_0: null,
    get_preloadRequest: function() { return this.$I_0 },
    set_preloadRequest: function(value) {
        this.$I_0 = value;
        return value
    },
    dispatchCommand: function(commandName) {
        for (var parameters = [], $$pai_2 = 1;
            $$pai_2 < arguments.length;
            ++$$pai_2
        ) parameters[$$pai_2 - 1] = arguments[$$pai_2];
        if (_String.isNullOrEmpty(commandName)) throw Error.create("commandName is undefined");
        commandName = commandName.toLowerCase();
        switch (commandName) {
        case "refreshall":
            this.$1U_0(parameters[0]);
            break;
        case "loadentitywall":
            this.$1l_0(parameters[0], parameters[1]);
            break;
        case "loadwall":
            this.$1k_0(parameters[0]);
            break;
        case "showtext":
            this.$5_0.showText(parameters[0], true);
            break;
        case "clearwall":
            this.$5_0.clearWall();
            break;
        case "prependtowall":
            if (!(!this.$C_0 && isNullOrEmptyString(Xrm.Page.data.entity.getId()))) this.$1U_0(parameters[0]);
            else this.$5_0.addToWall(parameters[0]);
            break;
        default:
            throw Error.create("invalid commandName")
        }
    },
    dispose: function() {
        if (!IsNull(this.$5_0)) {
            this.$5_0.dispose();
            this.$5_0 = null
        }
        if (!IsNull(this.$0_0)) {
            this.$0_0.empty().remove();
            this.$0_0 = null
        }
    },
    get_isDisposed: function() { return !this.$5_0 || !this.$0_0 },
    $1r_0: function($p0) { this.$1U_0() },
    $1l_0: function($p0, $p1) {
        this.$1_0.$6_0 = $p0;
        this.$1_0.$7_0 = $p1;
        this.$1U_0()
    },
    $1k_0: function($p0) {
        var $$t_1 = this;
        $P_CRM(function() {
            if ($$t_1.get_isDisposed()) return;
            $$t_1.dispatchCommand("refreshall", $p0);
            $$t_1.$0_0.find(".refreshDiv #refreshAllLink").bind("click", $$t_1.$$d_$1r_0)
        })
    },
    $1U_0: function($p0) {
        this.$5_0.clearWall();
        if (!this
            .$C_0 &&
            isNullOrEmptyString(Xrm.Page.data.entity
                .getId()))
            this.dispatchCommand("showtext",
                Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING);
        else if (IsNull(this.$I_0)) this.$5_0.refreshAll($p0);
        else {
            var $$t_2 = this;
            this.$I_0.done(function($p1_0) { return $$t_2.$5_0.$1S_0($p1_0, null) });
            this.$I_0 = null
        }
    }
};
Type.registerNamespace("ActivitiesWall.UI");
ActivitiesWall.UI.ActivitiesWall = function(wallService,
    headerId,
    postTemplateId,
    wallContainerId,
    wallControlId,
    emailTemplateId,
    emailExpandId,
    emailCollapseId,
    wallLoadingId,
    conversationLoadingId) {
    this.$$d_$1c_0 = Function.createDelegate(this, this.$1c_0);
    this.$$d_$1p_0 = Function.createDelegate(this, this.$1p_0);
    this.displayedEmailPosts = {};
    this.emailPostsContext = {};
    this._events = new Sys.EventHandlerList;
    this.$4_0 = new Array(0);
    this.set_wallService(wallService);
    this.$A_0 = new Array(0);
    this.$3_0 = 10;
    this.$i_0 = postTemplateId;
    this.$x_0 = "emptyMessage";
    this.$14_0 = "InlineErrorMessage";
    this.$l_0 = wallContainerId;
    this.$Y_0 = wallControlId;
    this.$0_0 = $P_CRM($get(this.$Y_0));
    this.postTemplatejQuery = this.$0_0.find("#" + postTemplateId);
    this.emailTemplatejQuery = this.$0_0.find("#" + emailTemplateId);
    this.emailExpandTemplate = this.$0_0.find("#" + emailExpandId);
    this.emailCollapseTemplate = this.$0_0.find("#" + emailCollapseId);
    this.emptyMessagejQuery = this.$0_0.find("#" + this.$x_0);
    this.wallContainerjQuery = this.$0_0.find("#" + wallContainerId);
    this.inlineMessagejQuery = this.$0_0.find("#" + this.$14_0);
    this.wallLoadingTemplatejQuery = this.$0_0.find("#" + wallLoadingId);
    this.$w_0 = this.$0_0.find("#" + conversationLoadingId);
    this.$g_0 = String.format(".{0}", conversationLoadingId);
    this.$1C_0 = this.$0_0.find("#showMoreLinkTemplate");
    Wall.Control.Utils.WallUtils.enableTextSelection();
    this.$G_0 = this.$$d_$1p_0;
    Xrm.Page.data.addOnLoad(this.$G_0)
};
ActivitiesWall.UI.ActivitiesWall.fixDomStructure = function(html) {
    if (Mscrm.Utilities.isIE8OrLower()) return "<div style='display:none;'>&nbsp;</div>" + html;
    return html
};
ActivitiesWall.UI.ActivitiesWall.$1K = function($p0, $p1) {
    var $v_0 = $p0.conversationdate, $v_1 = $p1.conversationdate;
    if ($v_0 < $v_1) return 1;
    if ($v_0 > $v_1) return -1;
    return 0
};
ActivitiesWall.UI.ActivitiesWall.$D = function($p0, $p1, $p2) {
    switch ($p2) {
    case 1:
        $p0.find(".expandIcon").hide();
        break;
    case 2:
        $p0.find(".expandIcon").show();
        break
    }
    switch ($p1) {
    case 1:
        $p0.find(".collapseIcon").hide();
        break;
    case 2:
        $p0.find(".collapseIcon").show();
        break
    }
};
ActivitiesWall.UI.ActivitiesWall.prototype = {
    $l_0: null,
    $i_0: null,
    $x_0: null,
    $14_0: null,
    $Y_0: null,
    $1_0: null,
    $A_0: null,
    $8_0: 0,
    $3_0: 0,
    $W_0: null,
    $S_0: false,
    postTemplatejQuery: null,
    emailTemplatejQuery: null,
    wallLoadingTemplatejQuery: null,
    inlineMessagejQuery: null,
    wallContainerjQuery: null,
    emptyMessagejQuery: null,
    $1C_0: null,
    $0_0: null,
    $G_0: null,
    $V_0: null,
    $R_0: null,
    $T_0: null,
    emailContainer: null,
    emailExpandTemplate: null,
    emailCollapseTemplate: null,
    wallLoadingIcon: null,
    postsAdded: null,
    _disposed: false,
    get_wallContainerId: function() { return this.$l_0 },
    set_wallContainerId: function(value) {
        this.$l_0 = value;
        return value
    },
    get_isDisposed: function() { return this._disposed },
    get_activitiesWallId: function() { return this.$Y_0 },
    set_activitiesWallId: function(value) {
        this.$Y_0 = value;
        return value
    },
    get_postTemplateId: function() { return this.$i_0 },
    set_postTemplateId: function(value) {
        this.$i_0 = value;
        return value
    },
    get_commentTemplateId: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_commentTemplateId: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_entityId: function() { return this.$1_0.$6_0 },
    set_entityId: function(value) {
        this.$1_0.$6_0 = value;
        return value
    },
    get_entityObjectTypeCode: function() { return this.$1_0.$7_0 },
    set_entityObjectTypeCode: function(value) {
        this.$1_0.$6_0 = value;
        return value
    },
    get_wallService: function() { return this.$1_0 },
    set_wallService: function(value) {
        this.$1_0 = value;
        return value
    },
    get_pageSize: function() { return this.$3_0 },
    set_pageSize: function(value) {
        this.$3_0 = value;
        return value
    },
    get_currentPageSize: function() { return this.$3_0 - this.$M_0 + this.$L_0 },
    add_postsRefreshing: function(value) { this._events.addHandler("PostsRefreshing", value) },
    remove_postsRefreshing: function(value) { this._events.removeHandler("PostsRefreshing", value) },
    add_postsRefreshed: function(value) { this._events.addHandler("PostsRefreshed", value) },
    remove_postsRefreshed: function(value) { this._events.removeHandler("PostsRefreshed", value) },
    add_commentsRefreshed: function(value) { this._events.addHandler("CommentsRefreshed", value) },
    remove_commentsRefreshed: function(value) { this._events.removeHandler("CommentsRefreshed", value) },
    add_postCreated: function(value) { this._events.addHandler("PostCreated", value) },
    remove_postCreated: function(value) { this._events.removeHandler("PostCreated", value) },
    add_commentCreated: function(value) { throw Error.notImplemented("The method or operation is not implemented.") },
    remove_commentCreated: function(value) {
        throw Error
            .notImplemented("The method or operation is not implemented.")
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
    add_error: function(value) { this._events.addHandler("Error", value) },
    remove_error: function(value) { this._events.removeHandler("Error", value) },
    fireEvent: function(T, eventName, args) { _Event.fireEvent(T, this._events, eventName, this, args) },
    refreshAll: function(entityTypeToExpand) {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("RefreshAllActivities_Start", 1);
        if (!this.$V_0) this.$V_0 = Xrm.Internal.startMetricsStopwatch("Refresh Activity Wall");
        this.$V_0.start();
        this.$8_0 = 1;
        this.$W_0 = null;
        var $v_0 = this.$1_0.getWallServiceFactory().createRetrievePostsRequest();
        $v_0.$8_0 = this.$8_0;
        $v_0.$3_0 = this.$3_0;
        $v_0.$O_0 = this.$W_0;
        $v_0.$H_0 = false;
        $v_0.$N_0 = null;
        if (window.IS_EMAIL_CONVERSATION) {
            $v_0.$3_0 = this.$11_0;
            this.initializeConversationMap();
            this.$A_0 = new Array(0);
            this.$F_0 = new Array(0);
            this.$Z_0 = 0;
            this.$4_0 = new Array(0);
            this.wallLoadingIcon = null;
            this.$M_0 = 0;
            this.$L_0 = 0
        }
        var $$t_3 = this;
        this.$1_0.retrievePosts($v_0, function($p1_0) { $$t_3.$1S_0($p1_0, entityTypeToExpand) })
    },
    fetchAll: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    $1S_0: function($p0, $p1) {
        if (this._disposed) return;
        var $$t_4 = this, $$t_5 = this;
        this.$19_0($p0,
            function() {
                var $v_0 = Xrm.Internal.startMetricsStopwatch("Activities_RenderPosts");
                $v_0.start();
                var $v_1 = $p0.get_posts();
                $$t_4.$S_0 = $p0.get_morePosts();
                if (window.IS_EMAIL_CONVERSATION) $v_1 = $$t_4.groupMailAndFetchNext($v_1, $p0.get_morePosts());
                $$t_4.$A_0 = new Array(0);
                $$t_4.clearWall();
                $$t_4.$v_0($v_1, $p0.get_morePosts());
                $$t_4.$0_0.find(".post:first").addClass("first");
                !IsNull($p1) && $$t_4.$1h_0($p1);
                $v_0.stop()
            },
            this.$$d_$1c_0,
            function() { $$t_5.$1B_0($p0, true) });
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("RefreshAllActivities_End", 1);
        if (this.$V_0) {
            this.$V_0.stop();
            this.$17_0()
        }
    },
    renderOlderPosts: function() {
        var $v_0 = this.wallContainerjQuery.find(".showMoreLink");
        $v_0.addClass("showMoreLinkProgress");
        if (window.IS_EMAIL_CONVERSATION)
            if (!this.$S_0 && this.$4_0.length > 0 || this.$S_0 && this.$4_0.length >= this.$3_0) {
                $v_0.removeClass("showMoreLinkProgress").remove();
                var $v_3 = this.$12_0();
                this.$v_0($v_3, this.$S_0);
                this.$17_0();
                return
            }
        var $v_1 = this.$1_0.getWallServiceFactory().createRetrievePostsRequest();
        $v_1.$3_0 = this.$3_0;
        $v_1.$O_0 = this.$W_0;
        $v_1.$8_0 = this.$8_0 + 1;
        $v_1.$H_0 = false;
        $v_1.$N_0 = null;
        if (window.IS_EMAIL_CONVERSATION) {
            $v_1.$3_0 = this.$11_0;
            this.$L_0 = 0;
            this.$F_0 = new Array(0)
        }
        var $v_2 = {
                page: $v_1.$8_0,
                wallType: "activitiesWall",
                entity: !Xrm.Page.data ? null : Xrm.Page.data.entity.getEntityName(),
                form: !Xrm.Page.ui ? null : Xrm.Page.ui.formSelector.getCurrentItem().getId()
            },
            $$t_6 = this;
        this.$1_0.retrievePosts($v_1,
            function($p1_0) {
                if ($$t_6._disposed) return;
                $$t_6.$19_0($p1_0,
                    function() {
                        $v_0.removeClass("showMoreLinkProgress").remove();
                        var $v_4 = Wall.Control.Utils.WallUtils.removeDuplicatePosts($p1_0.get_posts(), $$t_6.$A_0);
                        $$t_6.$8_0++;
                        $$t_6.$W_0 = $p1_0.get_pagingCookie();
                        $$t_6.$S_0 = $p1_0.get_morePosts();
                        if (window.IS_EMAIL_CONVERSATION)
                            $v_4 = $$t_6.groupMailAndFetchNext($v_4, $p1_0.get_morePosts());
                        $$t_6.$v_0($v_4, $p1_0.get_morePosts());
                        if ($v_4.length > 0);
                        $v_2["posts"] = $v_4.length;
                        Mscrm.MetricsReporting.instance().addMetric("Wall.LoadMore", $v_2)
                    },
                    function() {
                        $v_2["posts"] = 0;
                        Mscrm.MetricsReporting.instance().addMetric("Wall.LoadMore", $v_2);
                        $v_0.removeClass("showMoreLinkProgress");
                        $$t_6.$1c_0()
                    },
                    function() {
                        $v_2["error"] = true;
                        Mscrm.MetricsReporting.instance().addMetric("Wall.LoadMore", $v_2);
                        $$t_6.$1B_0($p1_0, false);
                        $v_0.removeClass("showMoreLinkProgress");
                        $$t_6.$1H_0()
                    });
                $$t_6.$17_0()
            })
    },
    clearWall: function() {
        if (!IsNull(this.$0_0)) {
            this.$0_0.find(".wallContainer").empty();
            this.displayedEmailPosts = {}
        } else
            Xrm.Internal.trace.logT(Mscrm.FormInputControl.ActivitiesWallPage,
                "Resolve Bug: 330748, ActivitiesWallJQuery is null")
    },
    showText: function(wallText, isClearWall) {
        isClearWall && this.clearWall();
        var $v_0 = new ActivitiesWall.Service.ObjectModel.EmptyMessage(CrmEncodeDecode.CrmHtmlEncode(wallText));
        !IsNull(this.wallContainerjQuery) &&
            !IsNull(this.emptyMessagejQuery) &&
            this.emptyMessagejQuery.tmpl($v_0, this).appendTo(this.wallContainerjQuery)
    },
    addToWall: function(parameter) {
        var $v_0 = ActivitiesWall.Service.GridDataToActivityPostConvertor.convertJsonToRowData(parameter),
            $v_1 = [$v_0],
            $v_2 = ActivitiesWall.Service.GridDataToActivityPostConvertor.gridDataToWallPostCollection($v_1, false);
        this.$1q_0($v_2)
    },
    dispose: function() {
        if (this._disposed) return;
        this._disposed = true;
        if (!IsNull(this.$0_0)) {
            this.$0_0.empty().remove();
            this.$0_0 = null
        }
        if (!IsNull(this.wallContainerjQuery)) {
            this.wallContainerjQuery.empty().remove();
            this.wallContainerjQuery = null
        }
        if (!IsNull(this.$G_0)) {
            Xrm.Page.data.removeOnLoad(this.$G_0);
            this.$G_0 = null
        }
        !IsNull(this._events) && Mscrm.Utilities.destroyObject(this._events)
    },
    $11_0: 30,
    $M_0: 0,
    $L_0: 0,
    $K_0: null,
    $F_0: null,
    $Z_0: 0,
    $w_0: null,
    $g_0: null,
    $1o_0: function($p0) {
        this.$L_0 = 0;
        for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3], $v_1 = $v_0;
            if ($v_1.baseconversationindexhash) {
                var $v_2 = $v_1.baseconversationindexhash.toString();
                if ($v_2 in this.$K_0) {
                    this.$L_0++;
                    var $v_3 = this.$K_0[$v_2];
                    $v_3.lastChildWallDate = $v_1.lastChildWallDate;
                    $v_3.lastChildActivityId = $v_1.postId
                } else this.$K_0[$v_2] = $v_1
            }
        }
        var $$t_8;
        this.$4_0 = ($$t_8 = this.$4_0).concat.apply($$t_8, $p0)
    },
    $12_0: function() {
        var $v_0 = new Array(0);
        if (this.$4_0.length < this.get_currentPageSize()) {
            $v_0 = this.$4_0.slice(0, this.$4_0.length);
            this.$4_0 = new Array(0)
        } else {
            $v_0 = this.$4_0.slice(0, this.get_currentPageSize());
            this.$4_0 = this.$4_0.slice(this.get_currentPageSize(), this.$4_0.length)
        }
        return $v_0
    },
    groupMailAndFetchNext: function(posts, hasmore) {
        this.$1o_0(posts);
        if (this.$4_0.length < this.get_currentPageSize() && hasmore) {
            posts = this.$12_0();
            if (posts && posts.length > 0) {
                this.$M_0 = this.$M_0 + posts.length - this.$L_0;
                this.renderOlderPosts()
            }
        } else {
            posts = this.$12_0();
            this.$M_0 = 0
        }
        this.$L_0 = 0;
        return posts
    },
    refreshComments: function(parentPostId, pageSize, olderThanDate) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postMessage: function(text) { throw Error.notImplemented("The method or operation is not implemented.") },
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
    $1p_0: function($p0) {
        var $v_0 = $p0.getEventArgs().getDataLoadState();
        if ($v_0 === 2 && !this.$1R_0()) {
            if (!IsNull(this.$G_0)) {
                Xrm.Page.data.removeOnLoad(this.$G_0);
                this.$G_0 = null
            }
            var $v_1 = this.$0_0.find("[statecode='Open']");
            if ($v_1.length > 0) {
                var $v_2 = $v_1.find(".markcomplete");
                $v_2.show();
                $v_2.next().show()
            }
        }
    },
    $1R_0: function() {
        var $v_0 = Xrm.Page.data.entity.getId();
        return Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty($v_0)
    },
    initializeConversationMap: function() { this.$K_0 = {} },
    $1c_0: function() {
        this.showText(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING, true);
        this.$1Q_0()
    },
    $1B_0: function($p0, $p1) {
        if ($p0.$b_2)
            this.showText(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.WALL_LOAD_ERROR_RETRY_LOC_STRING,
                $p1);
        else this.showText(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.WALL_LOAD_ERROR_LOC_STRING, $p1)
    },
    $1H_0: function() {
        var $v_0 = this.wallContainerjQuery.find(".showMoreLink");
        if (IsNull($v_0) || !$v_0.length) $v_0 = this.$1C_0.tmpl("[]").appendTo(this.wallContainerjQuery);
        window.IS_EMAIL_CONVERSATION && $v_0.unbind("click");
        var $$t_2 = this;
        $v_0.bind("click",
            function($p1_0) {
                $v_0.unbind("click");
                $$t_2.renderOlderPosts();
                $p1_0.preventDefault();
                $p1_0.stopPropagation()
            }).show()
    },
    $1Q_0: function() {
        var $v_0 = this.wallContainerjQuery.find(".showMoreLink");
        !IsNull($v_0) && $v_0.hide()
    },
    $v_0: function($p0, $p1) {
        if (IsNull($p0) || !$p0.length) return;
        this.$0_0.find(".post").removeClass("last");
        var $$t_C;
        this.$A_0 = ($$t_C = this.$A_0).concat.apply($$t_C, $p0);
        if (window.IS_EMAIL_CONVERSATION) {
            this.emailPostsContext = Mscrm.SessionInfo.get_emailConversationRecordList();
            if (IsNull(this.wallLoadingIcon))
                this.wallLoadingIcon = this.wallLoadingTemplatejQuery.tmpl(this).appendTo(this.wallContainerjQuery);
            for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_0 = $$arr_2[$$idx_4], $v_1 = $v_0;
                if (!$v_1.child) {
                    this.postsAdded = this.postTemplatejQuery.tmpl($v_0, this);
                    this.postsAdded.insertBefore(this.wallLoadingIcon)
                } else {
                    var $v_2 = $v_1.baseconversationindexhash.toString();
                    if (!($v_2 in this.displayedEmailPosts)) {
                        $v_1.child.sort(ActivitiesWall.UI.ActivitiesWall.$1K);
                        this.postsAdded = this.postTemplatejQuery.tmpl($v_1.child, this);
                        var $v_3 = $v_2 + "_" + this.get_entityId();
                        this.emailContainer = $P_CRM(document.createElement("div"));
                        this.emailContainer.addClass("emailContainer");
                        this.emailContainer.attr("role", "application");
                        this.emailContainer.insertBefore(this.wallLoadingIcon);
                        var $v_4 = this.emailCollapseTemplate.tmpl($v_1, this).appendTo(this.emailContainer),
                            $v_5 = this.emailExpandTemplate.tmpl($v_1, this).appendTo(this.emailContainer);
                        this.$P_0($v_5);
                        this.displayedEmailPosts[$v_2] = $v_5;
                        this.postsAdded.appendTo($v_5);
                        this.$P_0($v_4);
                        if ($v_3 in this.emailPostsContext && this.emailPostsContext[$v_3]) {
                            $v_4.hide();
                            $v_4.siblings().show();
                            this.$F_0.push($v_1)
                        }
                    } else this.$1Y_0(this.$K_0[$v_2], $v_1.child)
                }
                this.$P_0(this.postsAdded)
            }
            Mscrm.SessionInfo.set_emailConversationRecordList(this.emailPostsContext);
            if (this.$M_0 > 0 && this.$M_0 < this.$3_0 && $p1) this.wallLoadingIcon.show();
            else this.wallLoadingIcon.hide()
        } else {
            var $v_6 = this.postTemplatejQuery.tmpl($p0, this).appendTo(this.wallContainerjQuery);
            this.$P_0($v_6)
        }
        this.$0_0.find(".post:last").addClass("last");
        if (window.IS_EMAIL_CONVERSATION && this.$4_0.length > 0) $p1 = true;
        if ($p1) this.$1H_0();
        else this.$1Q_0()
    },
    $17_0: function() {
        if (!this.$F_0 || !this.$F_0.length) return;
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("LazyExpandEmailConversations_Start", 1);
        if (!this.$T_0) this.$T_0 = Xrm.Internal.startMetricsStopwatch("Lazy Expand Email conversations");
        this.$T_0.start();
        this.$Z_0 = 0;
        for (var $$arr_0 = this.$F_0, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            this.$10_0($v_0, true, this.$F_0.length)
        }
        this.$Z_0 = 0;
        this.$F_0 = new Array(0)
    },
    $10_0: function($p0, $p1, $p2) {
        if (!$p0 || $p0.isConversationFetchComplete) return;
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("ExpandEmailConversation_Start", 1);
        if (!this.$R_0) this.$R_0 = Xrm.Internal.startMetricsStopwatch("Expand Email conversation");
        this.$R_0.start();
        var $v_0 = this.$w_0.tmpl(this), $v_1 = this.displayedEmailPosts[$p0.baseconversationindexhash.toString()];
        $v_0.appendTo($v_1);
        var $v_2 = this.$1_0.getWallServiceFactory().createRetrievePostsRequest();
        $v_2.$8_0 = 1;
        $v_2.$3_0 = 5e3;
        $v_2.$O_0 = null;
        $v_2.$H_0 = true;
        $v_2.$N_0 = $p0;
        var $$t_7 = this;
        this.$1_0.retrievePosts($v_2, function($p1_0) { $$t_7.$1n_0($p0, $p1_0, $p1, $p2) })
    },
    $1n_0: function($p0, $p1, $p2, $p3) {
        if (this._disposed) return;
        var $$t_7 = this, $$t_8 = this, $$t_9 = this;
        this.$19_0($p1,
            function() {
                var $v_0 = Xrm.Internal.startMetricsStopwatch("Activities_RenderEmailConversation");
                $v_0.start();
                var $v_1 = $p1.get_posts();
                $$t_7.$1Y_0($p0, $v_1);
                $p0.isConversationFetchComplete = true;
                $v_0.stop()
            },
            function() {
                var $v_2 = $$t_8.displayedEmailPosts[$p0.baseconversationindexhash.toString()];
                $v_2.find($$t_8.$g_0).remove();
                $p0.isConversationFetchComplete = true
            },
            function() { $$t_9.$1B_0($p1, false) });
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("ExpandEmailConversation_End", 1);
        this.$R_0 && this.$R_0.stop();
        if ($p2 && ++this.$Z_0 === $p3) {
            Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("LazyExpandEmailConversations_End", 1);
            this.$T_0 && this.$T_0.stop()
        }
    },
    $1Y_0: function($p0, $p1) {
        if ($p0.isConversationFetchComplete) return;
        var $v_0 = this.displayedEmailPosts[$p0.baseconversationindexhash.toString()];
        $p1.sort(ActivitiesWall.UI.ActivitiesWall.$1K);
        var $v_1 = $p0.child, $v_2 = this.mergeSortedEmailLists($v_1, $p1);
        $v_0.find(this.$g_0).remove();
        if (!$v_2) {
            var $v_3 = this.postTemplatejQuery.tmpl($p1, this);
            $v_0.find(".post").removeClass("last");
            $v_3.appendTo($v_0);
            this.$P_0($v_3);
            var $$t_7;
            $p0.child = ($$t_7 = $p0.child).concat.apply($$t_7, $p1)
        } else {
            var $v_4 = this.postTemplatejQuery.tmpl($v_2, this);
            $v_0.find(".post").remove();
            $v_4.appendTo($v_0);
            this.$P_0($v_4);
            $p0.child = $v_2
        }
        $v_0.find(".post:last").addClass("last")
    },
    mergeSortedEmailLists: function(prefetchedEmails, newEmails) {
        var $v_0 = new Array(prefetchedEmails.length + newEmails.length), $v_1 = 0, $v_2 = 0, $v_3 = 0;
        while ($v_1 < prefetchedEmails.length && $v_2 < newEmails.length)
            if (prefetchedEmails[$v_1].postId === newEmails[$v_2].postId) {
                $v_0[$v_3++] = prefetchedEmails[$v_1++];
                $v_2++
            } else
                $v_0[$v_3++] = prefetchedEmails[$v_1].conversationdate >= newEmails[$v_2].conversationdate
                    ? prefetchedEmails[$v_1++]
                    : newEmails[$v_2++];
        if (!$v_2) return null;
        while ($v_1 < prefetchedEmails.length) $v_0[$v_3++] = prefetchedEmails[$v_1++];
        while ($v_2 < newEmails.length) $v_0[$v_3++] = newEmails[$v_2++];
        return $v_0
    },
    $19_0: function($p0, $p1, $p2, $p3) {
        if ($p0.get_isSucceeded()) {
            this.$W_0 = $p0.get_pagingCookie();
            if (!IsNull($p0.get_posts()) && $p0.get_posts().length > 0) $p1();
            else if (IsNull($p0.get_posts()) && !IsNull($p3)) $p3();
            else !IsNull($p2) && $p2()
        } else if (!IsNull($p3)) $p3();
        else alert($p0.get_errorMessage())
    },
    $1q_0: function($p0) {
        if (IsNull($p0) || !$p0.length) return;
        this.$0_0.find(".post").removeClass("first");
        var $v_0 = $p0;
        if (!IsNull(this.$A_0) && this.$A_0.length) $v_0 = $v_0.concat.apply($v_0, this.$A_0);
        else {
            this.$A_0 = new Array(0);
            this.clearWall()
        }
        this.$A_0 = $v_0;
        var $v_1 = this.postTemplatejQuery.tmpl($p0, this);
        this.wallContainerjQuery.prepend($v_1);
        this.$0_0.find(".post:first").addClass("first");
        this.$P_0($v_1)
    },
    $P_0: function($p0) {
        var $v_0 = this.$0_0.attr("walltabIndex").toString();
        this.$0_0.find(".textAndArrow").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".clickable").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".markcomplete").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".trackEmail").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".clickableOwner").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".openrecord").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".openrecordUntrackEmail").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".collapseIcon").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $p0.find(".expandIcon").attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        if (Mscrm.CrmBrowser.get_currentBrowser().get_agent() !== 1 ||
            !Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled()) {
            $p0.find(".postActions").hide();
            $p0.find(".emailexpandedaccordion").hide();
            ActivitiesWall.UI.ActivitiesWall.$D($p0, 1, 1);
            if (window.IS_EMAIL_CONVERSATION)
                !($p0.hasClass("emailCollapseIcon") || $p0.hasClass("emailExpandIcon")) && this.$1a_0($p0);
            else this.$1a_0($p0)
        } else ActivitiesWall.UI.ActivitiesWall.$D($p0, 1, 2);
        this.$21_0($p0);
        this.$1z_0($p0);
        !Boolean.parse(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_USE_IMAGE_STRIPS) &&
            this.$1y_0($p0);
        if (this.$1R_0()) {
            var $v_1 = $p0.find(".markcomplete");
            $v_1.css("display", "none");
            $v_1.next().css("display", "none")
        }
    },
    $1y_0: function($p0) {
        var $v_0 = $p0.find("#activitieswall_EditPost");
        $v_0.removeClass("ms-crm-ImageStrip-activitieswall_EditPost");
        $v_0.attr("onmouseout", "this.src='/_imgs/Edit_post_16.png'");
        $v_0.attr("onmouseover", "this.src='/_imgs/Edit_post_hover_16.png'");
        $v_0.attr("src", "/_imgs/Edit_post_16.png");
        var $v_1 = $p0.find("#activitieswall_Seperator");
        $v_1.removeClass("ms-crm-ImageStrip-activitieswall_Seperator");
        $v_1.attr("src", "/_imgs/separator.png");
        var $v_2 = $p0.find("#activitieswall_Collapse_16");
        $v_2.removeClass("ms-crm-ImageStrip-activitieswall_Collapse_16");
        $v_2.attr("onmouseout", "this.src='/_imgs/Collapse_16.png'");
        $v_2.attr("onmouseover", "this.src='/_imgs/Collapse_hover_16.png'");
        $v_2.attr("src", "/_imgs/Collapse_16.png");
        var $v_3 = $p0.find("#activitieswall_Expand_16");
        $v_3.removeClass("ms-crm-ImageStrip-activitieswall_Expand_16");
        $v_3.attr("onmouseout", "this.src='/_imgs/Expand_16.png'");
        $v_3.attr("onmouseover", "this.src='/_imgs/Expand_hover_16.png'");
        $v_3.attr("src", "/_imgs/Expand_16.png");
        var $v_4 = $p0.find("#activitieswall_emailExpand");
        $v_4.removeClass("ms-crm-ImageStrip-email_expand");
        $v_4.attr("src", "/_imgs/expandedthread.png");
        var $v_5 = $p0.find("#activitieswall_emailCollapse");
        $v_5.removeClass("ms-crm-ImageStrip-email_collpase");
        $v_5.attr("src", "/_imgs/collapsedthread.png")
    },
    $20_0: function($p0) {
        var $$t_B = this;
        this.$0_0.find(".textAndArrow").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).parents(".showMoreLink").click();
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_C = this;
        $p0.find(".clickableOwner").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).click();
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_D = this;
        $p0.find(".clickable").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).parents("a").click();
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_E = this;
        $p0.find(".collapseIcon").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).parents(".post").trigger("click");
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_F = this;
        $p0.find(".expandIcon").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).parents(".post").trigger("click");
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_G = this;
        $p0.keyup(function($p1_0) {
            switch ($p1_0.which) {
            case 9:
                $P_CRM(this).prev(".post").find(".postActions").hide();
                $P_CRM(this).next(".post").find(".postActions").hide();
                $P_CRM(this).trigger("mouseenter");
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_H = this;
        $p0.keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).trigger("click");
                $P_CRM(this).focus();
                break;
            case 39:
                if ($p0.hasClass("emailCollapseIcon")) {
                    $P_CRM(this).hide();
                    $P_CRM(this).siblings().show();
                    $P_CRM(this).siblings().focus();
                    var $v_0 = $P_CRM(this).attr("BaseConversationIndexHash"), $v_1 = $$t_H.$K_0[$v_0];
                    $$t_H.$10_0($v_1, false, 1);
                    $$t_H.emailPostsContext = Mscrm.SessionInfo.get_emailConversationRecordList();
                    $$t_H.emailPostsContext[$v_0 + "_" + $$t_H.get_entityId()] = true;
                    Mscrm.SessionInfo.set_emailConversationRecordList($$t_H.emailPostsContext)
                }
                break;
            case 37:
                if ($p0.hasClass("emailExpandIcon")) {
                    $P_CRM(this).hide();
                    $P_CRM(this).siblings().show();
                    $P_CRM(this).siblings().focus();
                    var $v_2 = $P_CRM(this).attr("BaseConversationIndexHash");
                    $$t_H.emailPostsContext = Mscrm.SessionInfo.get_emailConversationRecordList();
                    delete $$t_H.emailPostsContext[$v_2 + "_" + $$t_H.get_entityId()];
                    Mscrm.SessionInfo.set_emailConversationRecordList($$t_H.emailPostsContext)
                }
                break
            }
            $p1_0.stopPropagation()
        })
    },
    $22_0: function($p0) {
        var $$t_5 = this;
        $p0.find(".markcomplete").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).click();
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_6 = this;
        $p0.find(".trackEmail").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).click();
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_7 = this;
        $p0.find(".openrecord").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).children("a").click();
                break
            }
            $p1_0.stopPropagation()
        });
        var $$t_8 = this;
        $p0.find(".openrecordUntrackEmail").keydown(function($p1_0) {
            switch ($p1_0.which) {
            case 13:
                $P_CRM(this).click();
                break
            }
            $p1_0.stopPropagation()
        })
    },
    $1z_0: function($p0) {
        this.$20_0($p0);
        this.$22_0($p0)
    },
    $21_0: function($p0) {
        var $$t_I = this;
        $p0.find(".markcomplete").click(function($p1_0) {
            $$t_I.$1m_0($P_CRM(this).attr("entityid"), $P_CRM(this).attr("entitylogicalname"), $P_CRM(this));
            $p1_0.preventDefault();
            $p1_0.stopPropagation()
        });
        var $$t_J = this;
        $p0.find(".trackEmail").click(function($p1_0) {
            $$t_J.$25_0($P_CRM(this));
            $p1_0.preventDefault();
            $p1_0.stopPropagation()
        });
        var $$t_K = this;
        $p0.find(".iconThumbnail").click(function($p1_0) {
            var $v_0 = {};
            $v_0["preservePreviousContent"] = true;
            Wall.Control.Utils.WindowUtils.openObject(Number.parseInvariant($P_CRM(this).attr("objecttypecode")),
                $P_CRM(this).attr("postid"),
                null,
                null,
                Mscrm.NavigationMode.DefaultNavigationMode,
                $v_0);
            $p1_0.preventDefault();
            $p1_0.stopPropagation()
        });
        var $$t_L = this;
        $p0.find(".iconThumbnailUntrackEmail").click(function($p1_0) {
            var $v_1 = {};
            $v_1["preservePreviousContent"] = true;
            Wall.Control.Utils.WindowUtils.openWindow($P_CRM(this).attr("exchangeweblink"), "_blank", 780, 600, null);
            $p1_0.preventDefault();
            $p1_0.stopPropagation()
        });
        var $$t_M = this;
        $p0.find(".openrecordUntrackEmail").click(function($p1_0) {
            var $v_2 = {};
            $v_2["preservePreviousContent"] = true;
            Wall.Control.Utils.WindowUtils.openWindow($P_CRM(this).attr("exchangeweblink"), "_blank", 780, 600, null);
            $p1_0.preventDefault();
            $p1_0.stopPropagation()
        });
        var $$t_N = this;
        $p0.find(".acSubjectUntrackEmail").click(function($p1_0) {
            var $v_3 = {};
            $v_3["preservePreviousContent"] = true;
            Wall.Control.Utils.WindowUtils.openWindow($P_CRM(this).attr("exchangeweblink"), "_blank", 780, 600, null);
            $p1_0.preventDefault();
            $p1_0.stopPropagation()
        });
        var $$t_O = this;
        $p0.find(".openrecord").click(function($p1_0) {
            var $v_4 = {};
            $v_4["preservePreviousContent"] = true;
            Wall.Control.Utils.WindowUtils.openObject(Number.parseInvariant($P_CRM(this).attr("objecttypecode")),
                $P_CRM(this).attr("postid"),
                null,
                null,
                Mscrm.NavigationMode.DefaultNavigationMode,
                $v_4);
            $p1_0.preventDefault();
            $p1_0.stopPropagation()
        });
        var $$t_P = this;
        $p0.bind("click",
            function($p1_0) {
                if ($P_CRM(this).children(".collapsedaccordion").length > 0) {
                    ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this), 2, 1);
                    $P_CRM(this).find(".collapseIcon").focus();
                    $P_CRM(this).children(".collapsedaccordion").toggleClass("collapsedaccordion expandedaccordion")
                } else if ($P_CRM(this).children(".expandedaccordion").length > 0) {
                    ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this), 1, 2);
                    $P_CRM(this).find(".expandIcon").focus();
                    $P_CRM(this).children(".expandedaccordion").toggleClass("expandedaccordion collapsedaccordion")
                } else if ($P_CRM(this).children(".emailexpandedaccordion").length > 0) {
                    if ($P_CRM(this).children(".emailexpandedaccordion:visible").length) {
                        ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this), 1, 2);
                        $P_CRM(this).find(".expandIcon").focus()
                    } else {
                        ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this), 2, 1);
                        $P_CRM(this).find(".collapseIcon").focus();
                        var $v_5 = $P_CRM(this).find(".emailContentDiv").text(),
                            $v_6 = CrmEncodeDecode.CrmHtmlDecode($v_5);
                        $P_CRM(this).find(".emailContentFrame").contents().find("html").html($v_6)
                    }
                    $P_CRM(this).children(".emailexpandedaccordion").toggle()
                } else if (window.IS_EMAIL_CONVERSATION) {
                    if ($P_CRM(this).hasClass("emailExpandIcon") || $P_CRM(this).hasClass("emailCollapseIcon")) {
                        $P_CRM(this).hide();
                        $P_CRM(this).siblings().show();
                        var $v_7 = $P_CRM(this).attr("BaseConversationIndexHash");
                        $$t_P.emailPostsContext = Mscrm.SessionInfo.get_emailConversationRecordList();
                        if ($P_CRM(this).hasClass("emailCollapseIcon")) {
                            var $v_8 = $$t_P.$K_0[$v_7];
                            $$t_P.$10_0($v_8, false, 1);
                            $$t_P.emailPostsContext[$v_7 + "_" + $$t_P.get_entityId()] = true
                        } else if ($P_CRM(this)
                            .hasClass("emailExpandIcon"))
                            delete $$t_P.emailPostsContext[$v_7 + "_" + $$t_P.get_entityId()]
                    }
                    Mscrm.SessionInfo.set_emailConversationRecordList($$t_P.emailPostsContext)
                }
                $p1_0.preventDefault();
                $p1_0.stopPropagation()
            })
    },
    $25_0: function($p0) {
        var $v_0 = $p0.attr("exchangeitemid");
        if (IsNull($v_0)) return;
        var $v_1 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
                new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId())),
            $$t_5 = this;
        Xrm.Internal.messages.trackEmail($v_0, $v_1).then(function($p1_0) {
                $p0.hide();
                var $v_2 = $p0.parents(".post");
                $p0 = $v_2.find(".untrackedEmailLabel");
                $p0.attr("title",
                    Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TRACK_PENDING_EMAIL_TOOLTIP);
                $p0.text(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TRACK_PENDING_EMAIL_TEXT)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    },
    $1m_0: function($p0, $p1, $p2) {
        $p1 = $p2.attr("entitylogicalname");
        if (IsNull($p1)) return;
        var $$t_6 = this;
        Xrm.Internal.messages.setState($p1, $p0, 1, -1).then(function($p1_0) {
                var $v_0 = $p2.parents(".post");
                $v_0.children(".inlineerrormessage").remove();
                $p2.attr("statecode", "Completed");
                $p2.next().attr("statecode", "Completed");
                $v_0.attr("statecode", "Completed");
                var $v_1 = $v_0.find(".lastDiv .acDetails");
                $v_1.empty();
                $v_1 = $v_0.find(".lastDiv .modifiedOnDate");
                $v_1.empty();
                $v_1.text(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_JUST_NOW);
                $v_0.find(".you").show()
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    },
    $1a_0: function($p0) {
        var $$t_3 = this;
        $p0.bind("mouseenter",
            function($p1_0) {
                $P_CRM(this).find(".postActions").show();
                if ($P_CRM(this).find(".collapsedaccordion")
                    .length) ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this).children(".wallbody"), 0, 2);
                else if ($P_CRM(this).find(".expandedaccordion")
                    .length) ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this).children(".wallbody"), 2, 0);
                else if ($P_CRM(this).find(".emailexpandedaccordion").length)
                    if ($P_CRM(this).find(".emailexpandedaccordion:visible")
                        .length) ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this).children(".wallbody"), 2, 0);
                    else ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this).children(".wallbody"), 0, 2);
                $p1_0.preventDefault();
                $p1_0.stopPropagation()
            });
        var $$t_4 = this;
        $p0.bind("mouseleave",
            function($p1_0) {
                ActivitiesWall.UI.ActivitiesWall.$D($P_CRM(this).children(".wallbody"), 1, 1);
                $p0.find(".postActions").hide();
                $p1_0.preventDefault();
                $p1_0.stopPropagation()
            })
    },
    $1h_0: function($p0) {
        var $v_0 = this.$0_0.find("[objecttypecode='" + $p0 + "']");
        if ($v_0.length > 0) {
            var $v_1 = $v_0.first(), $v_2 = $v_1.find(".wallbody").next();
            if (!IsNull($v_2))
                !$v_2.hasClass("expandedaccordion") && $v_2.toggleClass("collapsedaccordion expandedaccordion")
        }
    }
};
Type.registerNamespace("ActivitiesWall.Service");
ActivitiesWall.Service.GridDataToActivityPostConvertor = function() {};
ActivitiesWall.Service.GridDataToActivityPostConvertor
    .gridDataToWallPostCollection = function(grid, isConversationExpand) {
        var $v_0 = new Array(grid.length), $v_1 = 0;
        while (grid.length > $v_1) {
            var $v_2 = new ActivitiesWall.Service.ObjectModel.Post, $v_3 = grid[$v_1];
            $v_2.text = CrmEncodeDecode.CrmHtmlEncode($v_3.subject);
            $v_2.postId = CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.RowId);
            $v_2.objectTypeCode = $v_3.RowType;
            if ($v_3.RowType.toString() === "4202")
                if (!isNullOrEmptyString($v_3.description)) $v_2.description = $v_3.description;
                else $v_2.description = " ";
            else if ($v_3.RowType.toString() === "4220") {
                if (!isNullOrEmptyString($v_3.description)) $v_2.description = $v_3.description;
                else $v_2.description = " ";
                $v_2.exchangeitemid = CrmEncodeDecode.CrmHtmlEncode($v_3.exchangeitemid);
                $v_2.exchangeweblink = CrmEncodeDecode.CrmHtmlEncode($v_3.exchangeweblink);
                $v_2.statuscode_Value = $v_3.statuscode_Value
            } else {
                var $v_6 = _String.normalizeNewLine($v_3.description, "\r");
                if (!isNullOrEmptyString($v_6)) {
                    var $v_7 = $v_6.split("\r");
                    $v_6 = "";
                    for (var $v_8 = 0;
                        $v_8 < $v_7.length - 1;
                        $v_8++
                    ) $v_6 += CrmEncodeDecode.CrmHtmlEncode($v_7[$v_8]) + "<br>";
                    $v_6 += CrmEncodeDecode.CrmHtmlEncode($v_7[$v_7.length - 1]);
                    $v_2.description = $v_6
                } else $v_2.description = " "
            }
            if (window.IS_EMAIL_CONVERSATION && parseInt($v_2.objectTypeCode.toString()) === 4202) {
                $v_2.isConversationFetchComplete = isConversationExpand;
                $v_2.baseconversationindexhash = $v_3.baseconversationindexhash;
                $v_2.conversationdate = $v_3.conversationdate;
                $v_2.lastChildWallDate = CrmEncodeDecode.CrmHtmlEncode($v_3.wallDate);
                $v_2.lastChildActivityId = $v_2.postId;
                $v_2.descriptiontext = "";
                $v_2.descriptiontext = ActivitiesWall.Service.GridDataToActivityPostConvertor.getDescription($v_2)
            }
            $v_2.modifiedOn = CrmEncodeDecode.CrmHtmlEncode(Wall.Control.Utils.DateUtils
                .formatDateAsReadableString($v_3.modifiedon_Value, $v_3.modifiedon));
            if (window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE) {
                if (!isNullOrEmptyString($v_3.lastopenedtime)) {
                    var $v_9 = Mscrm.DateTimeUtility
                        .formatActivitiesSentOrOpenedAsReadableString($v_3.lastopenedtime,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_JUST_NOW,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_HOUR,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_HOURS,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TODAY,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_YESTERDAY);
                    $v_2.lastopenedtime = CrmEncodeDecode
                        .CrmHtmlEncode(String.format(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings
                            .ACT_WALL_LAST_OPENED,
                            $v_9))
                } else
                    $v_2.lastopenedtime = CrmEncodeDecode
                        .CrmHtmlEncode(String.format(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings
                            .ACT_WALL_NOT_YET_OPENED));
                if (!isNullOrEmptyString($v_3.senton)) {
                    var $v_A = Mscrm.DateTimeUtility
                        .formatActivitiesSentOrOpenedAsReadableString($v_3.senton,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_JUST_NOW,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_HOUR,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_HOURS,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_TODAY,
                            Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_YESTERDAY);
                    $v_2.senton = CrmEncodeDecode
                        .CrmHtmlEncode(String.format(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings
                            .ACT_WALL_SENT,
                            $v_A))
                } else
                    $v_2.senton = CrmEncodeDecode
                        .CrmHtmlEncode(String.format(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings
                            .ACT_WALL_NOT_YET_SENT));
                if (!isNullOrEmptyString($v_3
                    .delayedemailsendtime))
                    $v_2.delayedemailsendtime = String
                        .format(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings
                            .ACT_WALL_DELAYEMAIL_DELIVERY_LOC_STRING,
                            $v_3.delayedemailsendtime)
            }
            $v_2.scheduledEnd = CrmEncodeDecode.CrmHtmlEncode($v_3.scheduledend);
            var $v_4 = new Wall.Service.ObjectModel.EntityReference;
            if ($v_3.RowType.toString() !== "4220") {
                $v_4.set_name(CrmEncodeDecode.CrmHtmlEncode($v_3.modifiedby));
                $v_4.set_id(CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.modifiedby_Value.Data.ID));
                $v_4.set_typeCode($v_3.modifiedby_Value.Data.Type)
            }
            $v_2.set_modifiedBy($v_4);
            $v_2.priority = CrmEncodeDecode.CrmHtmlEncode($v_3.prioritycode);
            var $v_5 = new Wall.Service.ObjectModel.EntityReference;
            if ($v_3.RowType.toString() !== "4220") {
                $v_5.set_name(CrmEncodeDecode.CrmHtmlEncode($v_3.ownerid));
                $v_5.set_id(CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.ownerid_Value.Data.ID));
                $v_5.set_typeCode($v_3.ownerid_Value.Data.Type);
                $v_2.state = CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.statecode_Value);
                $v_2.statusReason = $v_3.statuscode_Value;
                $v_2.isemailfollowed = $v_3.isemailfollowed;
                $v_2.entityLogicalName = CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.EntityLogicalName);
                $v_2.isUnsafe = $v_3.IsUnsafe;
                $v_2.attachmentCount = $v_3.AttachmentCount
            }
            if (!IsNull($v_3.directioncode))
                $v_2.directionCode = ActivitiesWall.Service.GridDataToActivityPostConvertor
                    .$1M($v_3.directioncode.toString());
            if (!IsNull($v_3.leftvoicemail_Value))
                $v_2.leftVoicemail = ActivitiesWall.Service.GridDataToActivityPostConvertor
                    .$1M($v_3.leftvoicemail_Value.toString());
            if (!IsNull($v_3.community)) $v_2.community = $v_3.community;
            if (!IsNull($v_3.posturl)) $v_2.postUrl = $v_3.posturl;
            if (!IsNull($v_3.sentimentvalue)) $v_2.sentimentValue = $v_3.sentimentvalue;
            if (!IsNull($v_3.postmessagetype))
                $v_2.postMessageType = CrmEncodeDecode.CrmHtmlEncode($v_3.postmessagetype);
            if (!IsNull($v_3.postfromprofileid) && !IsNull($v_3.postfromprofileid_Value)) {
                var $v_B = new Wall.Service.ObjectModel.EntityReference;
                $v_B.set_name(CrmEncodeDecode.CrmHtmlEncode($v_3.postfromprofileid));
                $v_B.set_id(CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.postfromprofileid_Value.Data.ID));
                $v_B.set_typeCode($v_3.postfromprofileid_Value.Data.Type);
                $v_2.set_postFromProfileId($v_B)
            }
            if (!IsNull($v_3.socialpostcontent)) $v_2.socialPostContent = $v_3.socialpostcontent;
            if (!IsNull($v_3.actualrevenue)) $v_2.actualRevenue = $v_3.actualrevenue;
            if (!IsNull($v_3
                    .regardingobjectid_Value) &&
                !IsNull($v_3.regardingobjectid_Value.Data))
                $v_2.regardingObjectIdName = $v_3.regardingobjectid_Value.Data.Name;
            $v_2.imageSource = ActivitiesWall.Service.GridDataToActivityPostConvertor
                .$1s($v_2, $v_3.IconUrl, $v_3.activitytypecode);
            ActivitiesWall.Service.GridDataToActivityPostConvertor.$1t($v_3, $v_2);
            $v_0[$v_1] = $v_2;
            $v_1 = $v_1 + 1
        }
        if (window
            .IS_EMAIL_CONVERSATION &&
            !isConversationExpand) $v_0 = ActivitiesWall.Service.GridDataToActivityPostConvertor.groupedWallposts($v_0);
        return $v_0
    };
ActivitiesWall.Service.GridDataToActivityPostConvertor.getDescription = function(post) {
    if (post.description) {
        var $v_0 = Xrm.Internal.getResourceString("Email_Followup_Header");
        post.descriptiontext = post.description.split($v_0)[0];
        post.descriptiontext = post.descriptiontext.replace(ActivitiesWall.Service.GridDataToActivityPostConvertor.$1X,
            "");
        post.descriptiontext = post.descriptiontext.replace(ActivitiesWall.Service.GridDataToActivityPostConvertor.$1V,
            " <div");
        post.descriptiontext = post.descriptiontext.replace(ActivitiesWall.Service.GridDataToActivityPostConvertor.$1W,
            " <br");
        return post.descriptiontext
    } else return ""
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.groupedWallposts = function(wallPosts) {
    for (var $v_0 = new Array(0), $v_1 = {}, $v_2 = 0, $$arr_4 = wallPosts, $$len_5 = $$arr_4.length, $$idx_6 = 0;
        $$idx_6 < $$len_5;
        ++$$idx_6) {
        var $v_3 = $$arr_4[$$idx_6],
            $v_4 = $v_3.baseconversationindexhash ? $v_3.baseconversationindexhash.toString() : null,
            $v_5 = $v_4 ? $v_1[$v_4] : null;
        if ($v_5) {
            $v_5.child.push($v_3);
            $v_5.lastChildWallDate = $v_3.lastChildWallDate;
            $v_5.lastChildActivityId = $v_3.postId
        } else {
            if ($v_4) {
                var $v_6 = $P_CRM.extend(true, new ActivitiesWall.Service.ObjectModel.Post, $v_3);
                $v_3.child = new Array(0);
                $v_3.child.push($v_6);
                $v_1[$v_4] = $v_3
            }
            $v_0[$v_2++] = $v_3
        }
    }
    return $v_0
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.convertJsonToRowData = function(parameters) {
    if (IsNull(parameters)) return null;
    var $v_0 = new ActivitiesWall.Service.ObjectModel.RowData,
        $v_1 = parameters,
        $v_2 = Mscrm.InlineEditUtilities.getEntityReference($v_1),
        $v_3 = $v_2.TypeCode,
        $v_4 = $v_2.Id,
        $v_5 = Mscrm.InlineEditUtilities.getLookupValue($v_1["ownerid"]),
        $v_6 = $v_5[0].id,
        $v_7 = Mscrm.NumberUtility.locStringToInt($v_5[0].type),
        $v_8 = $v_5[0].name,
        $v_9 = Mscrm.InlineEditUtilities.getLookupValue($v_1["modifiedby"]);
    $v_0.RowId = $v_4;
    $v_0.RowType = $v_3;
    $v_0.EntityLogicalName = $v_2.TypeName;
    $v_0.subject = Mscrm.InlineEditUtilities.getDecodedValue($v_1["subject"]);
    $v_0.description = Mscrm.InlineEditUtilities.getDecodedValue($v_1["description"], true);
    $v_0.directioncode = Mscrm.InlineEditUtilities.getRawValue($v_1["directioncode"]);
    $v_0.ownerid = $v_8;
    $v_0.leftvoicemail_Value = Mscrm.InlineEditUtilities.getRawValue($v_1["leftvoicemail"]);
    $v_0.activitytypecode = $v_2.TypeDisplayName;
    $v_0.modifiedby = $v_9[0].name;
    $v_0.statecode_Value = Mscrm.Utilities.getData($v_1, "statecode", "invariant");
    $v_0.modifiedon = Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_JUST_NOW;
    $v_0.prioritycode = Mscrm.InlineEditUtilities.getDecodedValue($v_1["prioritycode"]);
    $v_0.scheduledend = Mscrm.InlineEditUtilities.getDecodedValue($v_1["scheduledend"]);
    $v_0.lastopenedtime = Mscrm.InlineEditUtilities.getDecodedValue($v_1["lastopenedtime"]);
    $v_0.delayedemailsendtime = Mscrm.InlineEditUtilities.getDecodedValue($v_1["delayedemailsendtime"]);
    $v_0.senton = Mscrm.InlineEditUtilities.getDecodedValue($v_1["senton"]);
    var $v_A = new ActivitiesWall.Service.ObjectModel.EntityData;
    $v_A.ID = $v_6;
    $v_A.Type = $v_7;
    $v_A.Name = $v_8;
    var $v_B = new ActivitiesWall.Service.ObjectModel.GridDataEntityReference;
    $v_B.Data = $v_A;
    $v_0.modifiedby_Value = $v_B;
    var $v_C = new Array(0);
    if (!IsNull($v_1["from"])) $v_C = ActivitiesWall.Service.GridDataToActivityPostConvertor.$1L($v_1, "from", 1);
    if (!IsNull($v_1["to"]))
        $v_C = $v_C.concat.apply($v_C, ActivitiesWall.Service.GridDataToActivityPostConvertor.$1L($v_1, "to", 2));
    $v_0.allparties_Value = $v_C;
    $v_0.ownerid_Value = $v_B;
    if (!IsNull($v_1["community"])) $v_0.community = Mscrm.InlineEditUtilities.getRawValue($v_1["community"]);
    if (!IsNull($v_1["posturl"])) $v_0.posturl = Mscrm.InlineEditUtilities.getRawValue($v_1["posturl"]);
    if (!IsNull($v_1["postfromprofileid"])) {
        var $v_D = Mscrm.InlineEditUtilities.getLookupValue($v_1["postfromprofileid"]);
        if (!IsNull($v_D) && $v_D.length > 0) {
            $v_0.postfromprofileid = $v_D[0].name;
            var $v_E = new ActivitiesWall.Service.ObjectModel.EntityData;
            $v_E.ID = $v_D[0].id;
            $v_E.Type = Mscrm.NumberUtility.locStringToInt($v_D[0].type);
            $v_E.Name = $v_D[0].name;
            var $v_F = new ActivitiesWall.Service.ObjectModel.GridDataEntityReference;
            $v_F.Data = $v_E;
            $v_0.postfromprofileid_Value = $v_F
        }
    }
    if (!IsNull($v_1["sentimentvalue"]))
        $v_0.sentimentvalue = Mscrm.InlineEditUtilities.getRawValue($v_1["sentimentvalue"]);
    if (!IsNull($v_1["postmessagetype"]))
        $v_0.postmessagetype = Mscrm.InlineEditUtilities.getRawValue($v_1["postmessagetype"]);
    if (!IsNull($v_1["socialpostcontent"]))
        $v_0.socialpostcontent = Mscrm.InlineEditUtilities.getRawValue($v_1["socialpostcontent"]);
    if (!IsNull($v_1["actualrevenue"]))
        $v_0.actualrevenue = Mscrm.InlineEditUtilities.getRawValue($v_1["actualrevenue"]);
    return $v_0
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1L = function($p0, $p1, $p2) {
    var $v_0 = new Array(0), $v_1 = Mscrm.Utilities.getInnerDataObject($p0, $p1);
    if (!IsNull($v_1))
        for (var $v_2 = Mscrm.InlineEditUtilities.getLookupValue($v_1),
            $$arr_6 = $v_2,
            $$len_7 = $$arr_6.length,
            $$idx_8 = 0;
            $$idx_8 < $$len_7;
            ++$$idx_8) {
            var $v_3 = $$arr_6[$$idx_8], $v_4 = new ActivitiesWall.Service.ObjectModel.ActivityParty;
            $v_4.participationtypemask = $p2;
            var $v_5 = new ActivitiesWall.Service.ObjectModel.EntityData;
            $v_5.ID = $v_3.id;
            $v_5.Type = Mscrm.NumberUtility.locStringToInt($v_3.type);
            $v_5.Name = $v_3.name;
            $v_4.partyid = $v_5;
            $v_0[$v_0.length] = $v_4
        }
    return $v_0
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1s = function($p0, $p1, $p2) {
    var $v_0;
    switch (parseInt($p0.objectTypeCode.toString())) {
    case 4201:
        $v_0 = "/_imgs/WallControl/AcWallAppointment_32.png";
        break;
    case 4406:
        $v_0 = "/_imgs/WallControl/AcWallBulkOperation_32.png";
        break;
    case 4402:
        $v_0 = "/_imgs/WallControl/AcWallCampaignActivity_32.png";
        break;
    case 4401:
        $v_0 = "/_imgs/WallControl/AcWallCampaignResponse_32.png";
        break;
    case 4202:
        if (!IsNull($p0
                .attachmentCount) &&
            $p0.attachmentCount > 0)
            $v_0 = "/_imgs/WallControl/" +
                ($p0.directionCode ? "OutgoingEmailAttachment_32.png" : "IncomingEmailAttachment_32.png");
        else $v_0 = "/_imgs/WallControl/" + ($p0.directionCode ? "OutgoingEmail_32.png" : "IncomingEmail_32.png");
        break;
    case 4220:
        $v_0 = "/_imgs/WallControl/EmailAuto_32.png";
        break;
    case 4204:
        $v_0 = "/_imgs/WallControl/AcWallFax_32.png";
        break;
    case 4206:
        $v_0 = "/_imgs/WallControl/AcWallIncidentResolution_32.png";
        break;
    case 4207:
        $v_0 = "/_imgs/WallControl/AcWallLetter_32.png";
        break;
    case 4208:
        $v_0 = "/_imgs/WallControl/AcWallOpportunityClose_32.png";
        break;
    case 4209:
        $v_0 = "/_imgs/WallControl/AcWallOrderClose_32.png";
        break;
    case 4210:
        Mscrm.FormInputControl.ActivitiesWallPage.initializeLocalizedStrings();
        if (!IsNull($p0.leftVoicemail) && $p0.leftVoicemail) {
            $v_0 = !$p0.directionCode
                ? window.CDNURL + "/_imgs/voicemail_incoming_32.png"
                : window.CDNURL + "/_imgs/voicemail_outgoing_32.png";
            $p2 = !$p0.directionCode
                ? Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings
                .ACT_WALL_VOICEMAIL_INCOMING_VALUE_LOC_STRING
                : Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings
                .ACT_WALL_VOICEMAIL_OUTGOING_VALUE_LOC_STRING
        } else if (!IsNull($p0.directionCode)) {
            $v_0 = !$p0.directionCode
                ? window.CDNURL + "/_imgs/incoming_call_32.png"
                : window.CDNURL + "/_imgs/outgoing_call_32.png";
            $p2 = !$p0.directionCode
                ? Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_INCOMING_VALUE_LOC_STRING
                : Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_OUTGOING_VALUE_LOC_STRING
        } else $v_0 = "/_imgs/WallControl/AcWallPhoneCall_32.png";
        break;
    case 4211:
        $v_0 = "/_imgs/WallControl/AcWallQuoteClose_32.png";
        break;
    case 4251:
        $v_0 = "/_imgs/WallControl/AcWallRecurringAppointment_32.png";
        break;
    case 4214:
        $v_0 = "/_imgs/WallControl/AcWallServiceAppointment_32.png";
        break;
    case 4212:
        $v_0 = "/_imgs/WallControl/AcWallTask_32.png";
        break;
    case 4216:
        if ($p0.community === 1 || $p0.community === 2)
            $v_0 = "/_imgs/WallControl/AcWallSocialActivity_32_" + $p0.community + ".png";
        else $v_0 = isNullOrEmptyString($p1) ? "/_imgs/WallControl/AcWallSocialActivity_32_.png" : $p1;
        break;
    default:
        $v_0 = isNullOrEmptyString($p1)
            ? "/_imgs/WallControl/" +
            ($p0.objectTypeCode.toString() === "4212" ? "AcWallTask_32.png" : "AcWallCustom_Activity_32.png")
            : $p1;
        break
    }
    return String.format('<img src="{0}" alt="{1}" title="{1}"/>',
        CrmEncodeDecode.CrmHtmlAttributeEncode($v_0),
        CrmEncodeDecode.CrmHtmlAttributeEncode($p2))
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1t = function($p0, $p1) {
    for (var $$arr_2 = $p0.allparties_Value, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_0 = $$arr_2[$$idx_4];
        if ($v_0.participationtypemask === 1 || $v_0.participationtypemask === 2 || $v_0.participationtypemask === 3) {
            var $v_1 = new ActivitiesWall.Service.ObjectModel.Party;
            $v_1.participationTypeMask = $v_0.participationtypemask;
            if (IsNull($v_0.partyid)) {
                if (!isNullOrEmptyString($v_0
                    .addressused)) $v_1.partyName = CrmEncodeDecode.CrmHtmlEncode($v_0.addressused)
            } else {
                $v_1.partyID = CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.partyid.ID);
                $v_1.partyObjectTypeCode = CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.partyid.Type.toString());
                if ($v_0.partyid.Name) $v_1.partyName = CrmEncodeDecode.CrmHtmlEncode($v_0.partyid.Name)
            }
            if ($v_0.participationtypemask === 1) {
                if (!$p1.from) {
                    $p1.from = [];
                    $p1.from[0] = $v_1
                } else $p1.from[$p1.from.length] = $v_1;
                ActivitiesWall.Service.GridDataToActivityPostConvertor.$1A($p1, $v_1)
            }
            if ($v_0.participationtypemask === 2) {
                if (!$p1.to) {
                    $p1.to = [];
                    $p1.to[0] = $v_1
                } else $p1.to[$p1.to.length] = $v_1;
                ActivitiesWall.Service.GridDataToActivityPostConvertor.$1A($p1, $v_1)
            }
            if ($v_0.participationtypemask === 3) {
                if (!$p1.cc) {
                    $p1.cc = [];
                    $p1.cc[0] = $v_1
                } else $p1.cc[$p1.cc.length] = $v_1;
                ActivitiesWall.Service.GridDataToActivityPostConvertor.$1A($p1, $v_1)
            }
        }
    }
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1A = function($p0, $p1) {
    if (!window.IS_EMAIL_CONVERSATION || parseInt($p0.objectTypeCode.toString()) !== 4202) return;
    if (!$p0.participants) $p0.participants = {};
    if (!($p1.partyID in $p0.participants)) $p0.participants[$p1.partyID] = $p1
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1M = function($p0) {
    var $v_0 = false;
    if (!IsNull($p0))
        if (!IsNull(Boolean.parse($p0))) $v_0 = Boolean.parse($p0);
        else if (!IsNull(Number.parseInvariant($p0)))
            switch (Number.parseInvariant($p0)) {
            case 0:
                $v_0 = false;
                break;
            case 1:
                $v_0 = true;
                break
            }
    return $v_0
};
ActivitiesWall.Service.WallService = function(entityId,
    viewId,
    entityObjectTypeCode,
    activityPointerRelationshipName,
    isActivityPartyEntity) {
    this.$$d_$26_0 = Function.createDelegate(this, this.$26_0);
    this.$$d_$27_0 = Function.createDelegate(this, this.$27_0);
    if (IsNull(activityPointerRelationshipName)) throw Error.argumentNull("activityPointerRelationshipName");
    this.$1G_0 = new ActivitiesWall.Service.WallServiceFactory;
    this.$6_0 = entityId;
    this.$d_0 = viewId;
    this.$7_0 = entityObjectTypeCode;
    this.$t_0 = activityPointerRelationshipName;
    this.$15_0 = isActivityPartyEntity
};
ActivitiesWall.Service.WallService.prototype = {
    $1d_0: "scheduledend",
    $1e_0: "ascending",
    $1I_0: "112",
    $c_0: "4202",
    $6_0: null,
    $d_0: null,
    $7_0: null,
    $B_0: 0,
    $t_0: null,
    $15_0: false,
    $9_0: null,
    $r_0: false,
    $X_0: false,
    $J_0: null,
    get_entityId: function() { return this.$6_0 },
    set_entityId: function(value) {
        this.$6_0 = value;
        return value
    },
    get_entityObjectTypeCode: function() { return this.$7_0 },
    set_entityObjectTypeCode: function(value) {
        this.$7_0 = value;
        return value
    },
    get_wallFilter: function() { return this.$B_0 },
    set_wallFilter: function(value) {
        this.$B_0 = value;
        return value
    },
    get_parameters: function() { return this.$J_0 },
    set_parameters: function(value) {
        this.$J_0 = value;
        return value
    },
    get_objectTypeCode: function() { return this.$9_0 },
    set_objectTypeCode: function(value) {
        this.$9_0 = value;
        return value
    },
    get_defaultSortAttribute: function() { return "modifiedon" },
    get_defaultSortOrder: function() { return "descending" },
    get_sortAttribute: function() {
        var $v_0 = this.$1O_0();
        return $v_0["sortAttribute"]
    },
    get_sortOrder: function() {
        var $v_0 = this.$1O_0();
        return $v_0["sortOrder"]
    },
    $1G_0: null,
    retrievePosts: function(retrievePostsRequest, retrievePostsCallback) {
        Xrm.Tracing.XrmTraceHelper.traceLog(this, "retrieving activity posts...");
        var $v_0 = retrievePostsRequest,
            $v_1 = this.$1g_0($v_0.$8_0, $v_0.$3_0, $v_0.$O_0, $v_0.$H_0, $v_0.$N_0),
            $v_2 = new Mscrm.RemoteCommandXml("AppGridWebService", "RefreshData");
        $v_2.setContent($v_1);
        $v_2.set_reference(retrievePostsCallback);
        if ($v_0.$H_0) $v_2.execute(this.$$d_$27_0);
        else $v_2.execute(this.$$d_$26_0)
    },
    retrieveAllPosts: function(retrievePostsRequest, retrievePostsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    $27_0: function($p0, $p1) {
        var $v_0 = $p1.get_reference();
        if ($p0.get_success() && !isNullOrEmptyString($p0.get_returnValue())) {
            Xrm.Tracing.XrmTraceHelper.traceLog(this, "activity posts retrieved successfully");
            var $v_1 = XUI.Xml.LoadXml($p0.get_returnValue()),
                $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "gridXml/pagingCookie", null)),
                $v_3 = Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "gridXml/moreRecords", null))),
                $v_4 = new ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse,
                $v_5 = this.$1T_0($v_1),
                $$t_9 = this;
            Mscrm.FormInputControl.ActivitiesWallPage.$U.done(function($p1_0) {
                $v_4.set_posts(ActivitiesWall.Service.GridDataToActivityPostConvertor
                    .gridDataToWallPostCollection($v_5, true));
                $v_4.set_pagingCookie($v_2);
                $v_4.set_morePosts($v_3);
                !IsNull($v_0) && $v_0($v_4)
            })
        } else this.$1Z_0($p0, $v_0)
    },
    $1Z_0: function($p0, $p1) {
        var $v_0 = new ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse;
        $v_0.$b_2 = $p0.get_retry();
        $v_0.set_errorMessage($p0.get_returnValue());
        Xrm.Tracing.XrmTraceHelper.traceLog(this, "activity posts retrievee failed: {0}", $v_0.get_errorMessage());
        !IsNull($p1) && $p1($v_0)
    },
    $26_0: function($p0, $p1) {
        var $v_0 = $p1.get_reference();
        if ($p0.get_success() && !isNullOrEmptyString($p0.get_returnValue())) {
            Xrm.Tracing.XrmTraceHelper.traceLog(this, "activity posts retrieved successfully");
            var $v_1 = XUI.Xml.LoadXml($p0.get_returnValue()),
                $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "gridXml/pagingCookie", null)),
                $v_3 = Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "gridXml/moreRecords", null))),
                $v_4 = new ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse,
                $v_5 = this.$1T_0($v_1),
                $$t_9 = this;
            Mscrm.FormInputControl.ActivitiesWallPage.$U.done(function($p1_0) {
                $v_4.set_posts(ActivitiesWall.Service.GridDataToActivityPostConvertor
                    .gridDataToWallPostCollection($v_5, false));
                $v_4.set_pagingCookie($v_2);
                $v_4.set_morePosts($v_3);
                !IsNull($v_0) && $v_0($v_4)
            })
        } else this.$1Z_0($p0, $v_0)
    },
    $1T_0: function($p0) {
        var $v_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "gridXml/gridHtml", null));
        $v_0 = $v_0.substring(8, $v_0.length);
        var $v_1 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0);
        if (window.IS_EMAIL_CONVERSATION)
            for (var $v_2 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0), $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++) {
                var $v_4 = $v_2[$v_3];
                if ($v_4["email.baseconversationindexhash_Value"]) {
                    var $v_5 = $v_4["email.baseconversationindexhash_Value"];
                    $v_1[$v_3].baseconversationindexhash = $v_5;
                    var $v_6;
                    if ($v_4["email.actualend_Value"]) $v_6 = $v_4["email.actualend_Value"];
                    else $v_6 = $v_4["modifiedon_Value"];
                    $v_1[$v_3].conversationdate = $v_6;
                    var $v_7 = this.get_sortAttribute() + "_Value";
                    if ($v_4[$v_7]) $v_1[$v_3].wallDate = $v_4[$v_7].toUTCString().replace("UTC", "GMT")
                }
            }
        if (window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE)
            for (var $v_8 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0), $v_9 = 0;
                $v_9 < $v_8.length;
                $v_9++) {
                var $v_A = $v_8[$v_9];
                $v_1[$v_9].isemailfollowed = $v_A["email.isemailfollowed_Value"];
                $v_1[$v_9].lastopenedtime = $v_A["email.lastopenedtime"];
                $v_1[$v_9].lastopenedtime_Value = $v_A["email.lastopenedtime_Value"];
                $v_1[$v_9].delayedemailsendtime = $v_A["email.delayedemailsendtime"];
                $v_1[$v_9].delayedemailsendtime_Value = $v_A["email.delayedemailsendtime_Value"]
            }
        return $v_1
    },
    $u_0: function($p0) {
        var $v_0 = this.$24_0(), $v_1;
        switch (Mscrm.NumberUtility.locStringToInt($p0)) {
        case 1:
        case 2:
            $v_1 = $v_0 ? "CRMActivity.RollupRelatedByPartyForActivityWall" : "CRMActivity.RollupRelatedByParty";
            break;
        case 3:
            $v_1 = $v_0 ? "CRMActivity.RollupByPartyForActivityWall" : "CRMActivity.RollupByParty";
            break;
        default:
            this.$X_0 = true;
            if (this.$15_0) $v_1 = "CRMActivity.RetrieveByParty";
            else $v_1 = "CRMActivity.RetrieveByObject";
            break
        }
        return String.format("<queryapi>{0}</queryapi>", $v_1)
    },
    $1g_0: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = null, $v_1 = null, $v_2 = null;
        if (this.$6_0) $v_0 = this.$6_0;
        else $v_0 = Xrm.Page.data.entity.getId();
        if (this.$7_0) $v_1 = this.$7_0;
        else $v_1 = this.$1I_0;
        if (this.$d_0) $v_2 = this.$d_0;
        else $v_2 = "7F15E2BB-305A-468F-9AF7-BE865755A984";
        var $v_3 = "<grid>";
        $v_3 += this.$1N_0();
        $v_3 += String.format("<pageNum>{0}</pageNum>", CrmEncodeDecode.CrmXmlEncode($p0.toString()));
        $v_3 += String.format("<recsPerPage>{0}</recsPerPage>", CrmEncodeDecode.CrmXmlEncode($p1.toString()));
        $v_3 += isNullOrEmptyString($p2)
            ? "<pagingCookie/>"
            : String.format("<pagingCookie>{0}</pagingCookie>", CrmEncodeDecode.CrmXmlEncode($p2));
        $v_3 += "<returntotalrecordcount>true</returntotalrecordcount>";
        $v_3 += "<parameters>";
        $v_3 += "<oId>" + CrmEncodeDecode.CrmXmlEncode($v_0) + "</oId>";
        $v_3 += "<oType>" + CrmEncodeDecode.CrmXmlEncode($v_1) + "</oType>";
        $v_3 += this.$u_0($v_1);
        $v_3 += "<viewid>" + CrmEncodeDecode.CrmXmlEncode($v_2) + "</viewid>";
        $v_3 += "<viewtype>1039</viewtype>";
        $v_3 += "<otn>" + CrmEncodeDecode.CrmXmlEncode("activitypointer") + "</otn>";
        $v_3 += "<GridType>AssociatedGrid</GridType>";
        $v_3 += "<relName>" + this.$t_0 + "</relName>";
        $v_3 += "<relationshipType>1</relationshipType>";
        $v_3 += this.$1f_0(true, true, $p3, $p4);
        $v_3 += "</parameters>";
        $v_3 += "<columns>";
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Subject" fieldname="subject" entityname="activitypointer" renderertype="Crm.PrimaryField">subject</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Activity&#32;Type" fieldname="activitytypecode" entityname="activitypointer">activitytypecode</column>';
        $v_3 +=
            ' <column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Activity&#32;Status" fieldname="statecode" entityname="activitypointer">statecode</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Priority" fieldname="prioritycode" entityname="activitypointer">prioritycode</column>';
        $v_3 +=
            ' <column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Due&#32;Date" fieldname="scheduledend" entityname="activitypointer">scheduledend</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Regarding" fieldname="regardingobjectid" entityname="activitypointer">regardingobjectid</column>';
        $v_3 +=
            '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="Recurring&#32;Instance&#32;Type" fieldname="instancetypecode" entityname="activitypointer">instancetypecode</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Description" fieldname="description" entityname="activitypointer">description</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="ModifiedOn" fieldname="modifiedon" entityname="activitypointer">modifiedon</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="ModifiedBy" fieldname="modifiedby" entityname="activitypointer">modifiedby</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="allparties" fieldname="allparties" entityname="activitypointer">allparties</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="OwnerId" fieldname="ownerid" entityname="activitypointer">ownerid</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="PriorityCode" fieldname="prioritycode" entityname="activitypointer">prioritycode</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="StateCode" fieldname="statecode" entityname="activitypointer">statecode</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="StatusCode" fieldname="statuscode" entityname="activitypointer">statuscode</column>';
        $v_3 +=
            '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Left&#32;Voice&#32;Mail" fieldname="leftvoicemail" entityname="activitypointer">leftvoicemail</column>';
        $v_3 +=
            ' <column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="SentOn" fieldname="senton" entityname="activitypointer">senton</column>';
        if (Xrm.Page.context.client.getClientState() === "Online" && window.IS_AUTO_CAPTURE) {
            $v_3 +=
                '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="ExchangeItemId" fieldname="exchangeitemid" entityname="activitypointer">exchangeitemid</column>';
            $v_3 +=
                '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="ExchangeWebLink" fieldname="exchangeweblink" entityname="activitypointer">exchangeweblink</column>'
        }
        if (window.IS_EMAIL_CONVERSATION) {
            $v_3 +=
                '<column width="0" isHidden="false"  isMetadataBound="true" isSortable="true" label="baseconversationindexhash" fieldname="baseconversationindexhash" entityname="email"  relationshipname="activity_pointer_email">email.baseconversationindexhash</column>';
            $v_3 +=
                '<column width="0" isHidden="false"  isMetadataBound="true" isSortable="true" label="actualend" fieldname="actualend" entityname="email"  relationshipname="activity_pointer_email">email.actualend</column>';
            $v_3 +=
                '<column width="0" isHidden="false"  isMetadataBound="false" isSortable="true" label="conversationdate" fieldname="conversationdate" >conversationdate</column>';
            if (this
                .get_sortAttribute() !==
                this.get_defaultSortAttribute())
                $v_3 += String
                    .format('<column width="0" isHidden="false"  isMetadataBound="false" isSortable="true" label="{0}" fieldname="{0}" >{0}</column>', this.get_sortAttribute())
        }
        if (window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE) {
            $v_3 +=
                '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="LastOpenedTime" fieldname="lastopenedtime" entityname="email"  relationshipname="activity_pointer_email">email.lastopenedtime</column>';
            $v_3 +=
                '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="isemailfollowed" fieldname="isemailfollowed" entityname="email"  relationshipname="activity_pointer_email">email.isemailfollowed</column>';
            $v_3 +=
                '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="DelayedEmailSendTime" fieldname="delayedemailsendtime" entityname="email"  relationshipname="activity_pointer_email">email.delayedemailsendtime</column>'
        }
        $v_3 += "</columns>";
        $v_3 += "</grid>";
        return $v_3
    },
    $1O_0: function() {
        var $v_0 = {}, $v_1 = this.get_defaultSortAttribute(), $v_2 = this.get_defaultSortOrder();
        if (window.IS_ACTIVITY_SORTING && this.$J_0) {
            $v_1 = this.$J_0["sortActivity"];
            $v_2 = this.$J_0["orderByActivity"]
        } else if (!window.IS_ACTIVITY_SORTING && this.$B_0 === 2) {
            $v_1 = this.$1d_0;
            $v_2 = this.$1e_0
        }
        $v_0["sortAttribute"] = $v_1;
        $v_0["sortOrder"] = $v_2;
        return $v_0
    },
    $1N_0: function() {
        var $v_0 = this.get_sortAttribute() + ":" + (this.get_sortOrder() === "descending" ? "0" : "1");
        return "<sortColumns>" + CrmEncodeDecode.CrmXmlEncode($v_0) + "</sortColumns>"
    },
    $24_0: function() {
        var $v_0 = this.$1N_0().indexOf("modifiedon") > -1,
            $v_1 = this.$B_0 === 1 || this.$B_0 === 0 || Array.contains(this.$9_0, this.$c_0);
        return $v_0 && $v_1 && window.SortEmailsByReceivedOnInActivityWall
    },
    $1f_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = "";
        if (!this.$9_0 && !this.$r_0 || Array.contains(this.$9_0, "AllEntitiesButton")) $v_0 += this.$1w_0($p2, $p3);
        else {
            $v_0 += this.$1x_0($p2, $p3);
            this.$r_0 = true
        }
        if ($p0) $v_0 = CrmEncodeDecode.CrmXmlEncode($v_0);
        if ($p1) {
            $v_0 = "<fetchXml>" + $v_0 + "</fetchXml>";
            if (this.$B_0 === 2) $v_0 += "<datefilter>Overdue</datefilter>"
        }
        return $v_0
    },
    $1w_0: function($p0, $p1) {
        var $v_0 = "", $v_1 = "", $v_2, $v_3 = "outer", $v_4 = "", $v_5 = "", $v_6 = "";
        if (this.$X_0) $v_0 = '<attribute name="activityid" />';
        if ($p0) {
            var $v_8 = $p1.baseconversationindexhash.toString(),
                $v_9 = this.get_sortOrder() === "descending" ? "le" : "ge",
                $v_A = CrmEncodeDecode.CrmHtmlDecode($p1.lastChildWallDate),
                $v_B = CrmEncodeDecode.CrmHtmlDecode($p1.lastChildActivityId);
            $v_3 = "inner";
            $v_2 = String.format('<condition attribute="activitytypecode" operator="eq" value="{0}" />', this.$c_0);
            $v_1 = String.format('<condition attribute="baseconversationindexhash" operator="eq" value="{0}" />', $v_8);
            if ($v_A) {
                $v_1 += String.format('<condition attribute="activityid" operator="ne" value="{0}" />', $v_B);
                $v_1 += String.format('<condition attribute="{0}" operator="{1}" value="{2}" />',
                    this.get_sortAttribute(),
                    $v_9,
                    $v_A)
            }
        } else {
            $v_2 =
                '<condition attribute="activitytypecode" operator="ne" value="4401" /><condition attribute="activitytypecode" operator="ne" value="4402" /><condition attribute="activitytypecode" operator="ne" value="4406" />';
            if (Xrm.Page.context.client.getClientState() === "Online" && window.IS_AUTO_CAPTURE) {
                if (this.$7_0 && this.$6_0 && !this.isRollupApi(this.$u_0(this.$7_0))) {
                    $v_6 += String.format('<condition attribute="regardingobjectid" operator="eq" value="{0}"/>',
                        this.$6_0);
                    $v_6 += String.format('<condition attribute="regardingobjecttypecode" operator="eq" value="{0}"/>',
                        this.$7_0)
                }
                $v_5 = '<condition attribute="activitytypecode" operator="eq" value="4220"/>';
                if (window.IS_EMAIL_CONVERSATION)
                    $v_6 += '<condition attribute="activitytypecode" operator="eq" value="4220"/>'
            }
        }
        if (this.$B_0 === 1)
            $v_4 = '<condition attribute="statecode" operator="in"><value>0</value><value>3</value></condition>';
        var $v_7 = "";
        if (!window.IS_EMAIL_CONVERSATION) {
            $v_7 = String
                .format('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true">\r\n\t\t\t\t\t<entity name="{0}">\r\n\t\t\t\t\t\t\t<filter type="or" >\r\n\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t<filter type="and" >{1}</filter>\r\n\t\t\t\t\t\t\t\t\t<filter type="and" >{2}</filter>\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t<filter type="and" >{3}</filter>\r\n\t\t\t\t\t\t\t\t<filter type="and" >{4}</filter>\r\n\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t</entity>\r\n\t\t\t</fetch>', "activitypointer", $v_2, $v_4, $v_5, $v_6);
            return this.$f_0($v_7)
        }
        if (this
            .get_sortAttribute() !==
            this.get_defaultSortAttribute())
            $v_0 += String.format('<attribute name="{0}" />', this.get_sortAttribute());
        $v_7 = String
            .format('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true">\r\n\t\t\t\t\t<entity name="{0}">\r\n\t\t\t\t\t\t\t<filter type="or" >\r\n\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t<filter type="and" >{1}</filter>\r\n\t\t\t\t\t\t\t\t\t<filter type="and" >{2}</filter>\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t<filter type="and" >{3}</filter>\r\n\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t{4}\r\n\t\t\t\t\t\t\t <link-entity alias="email" name="email" from="activityid" to="activityid" link-type="{5}" distinct="true">\r\n\t\t\t\t\t\t\t\t<filter type="and" >{6}</filter>\r\n\t\t\t\t\t\t\t\t<attribute name="baseconversationindexhash" />\r\n\t\t\t\t\t\t\t\t<attribute name="actualend" />\r\n\t\t\t\t\t\t\t</link-entity>\r\n\t\t\t\t\t</entity>\r\n\t\t\t</fetch>', "activitypointer", $v_2, $v_4, $v_6, $v_0, $v_3, $v_1);
        return this.$f_0($v_7)
    },
    $1x_0: function($p0, $p1) {
        var $v_0 = "",
            $v_1 = "",
            $v_2 = "",
            $v_3 = '<condition attribute="activitytypecode" operator="eq" value="{0}" />',
            $v_4 = "outer",
            $v_5 = "",
            $v_6 = "";
        if (this.$X_0) $v_0 = '<attribute name="activityid" />';
        if ($p0) {
            var $v_8 = $p1.baseconversationindexhash.toString(),
                $v_9 = this.get_sortOrder() === "descending" ? "le" : "ge",
                $v_A = CrmEncodeDecode.CrmHtmlDecode($p1.lastChildWallDate),
                $v_B = CrmEncodeDecode.CrmHtmlDecode($p1.lastChildActivityId);
            $v_4 = "inner";
            $v_2 = String.format('<condition attribute="activitytypecode" operator="eq" value="{0}" />', this.$c_0);
            $v_1 = String.format('<condition attribute="baseconversationindexhash" operator="eq" value="{0}" />', $v_8);
            if ($v_A) {
                $v_1 += String.format('<condition attribute="activityid" operator="ne" value="{0}" />', $v_B);
                $v_1 += String.format('<condition attribute="{0}" operator="{1}" value="{2}" />',
                    this.get_sortAttribute(),
                    $v_9,
                    $v_A)
            }
        } else if (this.$9_0.length > 0) {
            for (var $v_C = 0; $v_C < this.$9_0.length; $v_C++) {
                if (Xrm.Page.context.client.getClientState() === "Online" &&
                    window.IS_AUTO_CAPTURE &&
                    this.$9_0[$v_C] === "4220")
                    if (this.$7_0 && this.$6_0 && !this.isRollupApi(this.$u_0(this.$7_0))) {
                        $v_6 += String.format('<condition attribute="regardingobjectid" operator="eq" value="{0}"/>',
                            this.$6_0);
                        $v_6 += String
                            .format('<condition attribute="regardingobjecttypecode" operator="eq" value="{0}"/>',
                                this.$7_0);
                        $v_6 += '<condition attribute="activitytypecode" operator="eq" value="4220" />'
                    }
                $v_2 += String.format($v_3, this.$9_0[$v_C])
            }
            if (this.$B_0 === 1)
                $v_5 = '<condition attribute="statecode" operator="in"><value>0</value><value>3</value></condition>'
        } else $v_2 = '<condition attribute="activitytypecode" operator="eq" value="-1" />';
        var $v_7 = "";
        if (!window.IS_EMAIL_CONVERSATION) {
            $v_7 = String
                .format('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true">\r\n\t\t\t\t\t<entity name="{0}">\r\n\t\t\t\t\t\t\t<filter type="or" >\r\n\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t<filter type="or" >{1}</filter>\r\n\t\t\t\t\t\t\t\t\t<filter type="and" >{2}</filter>\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t<filter type="and" >{3}</filter>\r\n\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t</entity>\r\n\t\t\t</fetch>', "activitypointer", $v_2, $v_5, $v_6);
            return this.$f_0($v_7)
        }
        if (this
            .get_sortAttribute() !==
            this.get_defaultSortAttribute())
            $v_0 += String.format('<attribute name="{0}" />', this.get_sortAttribute());
        $v_7 = String
            .format('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true">\r\n\t\t\t\t\t<entity name="{0}">\r\n\t\t\t\t\t\t\t<filter type="or" >\r\n\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t<filter type="or" >{1}</filter>\r\n\t\t\t\t\t\t\t\t\t<filter type="and" >{2}</filter>\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t<filter type="and" >{6}</filter>\r\n\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t{3}\r\n\t\t\t\t\t\t\t<link-entity alias="email" name="email" from="activityid" to="activityid" link-type="{4}" distinct="true">\r\n\t\t\t\t\t\t\t\t<filter type="and" >{5}</filter>\r\n\t\t\t\t\t\t\t\t<attribute name="baseconversationindexhash" />\r\n\t\t\t\t\t\t\t\t<attribute name="actualend" />\r\n\t\t\t\t\t\t\t </link-entity>\r\n\t\t\t\t\t</entity>\r\n\t\t\t</fetch>', "activitypointer", $v_2, $v_5, $v_0, $v_4, $v_1, $v_6);
        return this.$f_0($v_7)
    },
    $f_0: function($p0) {
        if (!window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE) return $p0;
        var $v_0 = XUI.Xml.LoadXml($p0),
            $v_1 = $v_0.getElementsByTagName("entity")[0],
            $v_2 = XUI.Xml.SelectSingleNode($v_1, 'attribute[@name="activityid"]', {});
        if (!$v_2 && this.$X_0) {
            var $v_4 = XUI.Xml.LoadXml('<attribute name="activityid" />');
            $v_1.appendChild($v_4.documentElement)
        }
        var $v_3 = XUI.Xml.SelectSingleNode($v_1, 'link-entity[@name="email"]', {});
        if (!$v_3) {
            var $v_5 = XUI.Xml
                .LoadXml('<link-entity alias="email" name="email" from="activityid" to="activityid" link-type="outer" distinct="true"><attribute name="isemailfollowed" /><attribute name="lastopenedtime" /><attribute name="delayedemailsendtime"/></link-entity>');
            $v_1.appendChild($v_5.documentElement)
        } else {
            if (!XUI.Xml.SelectSingleNode($v_3, 'attribute[@name="isemailfollowed"]', {})) {
                var $v_6 = XUI.Xml.LoadXml('<attribute name="isemailfollowed" />');
                $v_3.appendChild($v_6.documentElement)
            }
            if (!XUI.Xml.SelectSingleNode($v_3, 'attribute[@name="lastopenedtime"]', {})) {
                var $v_7 = XUI.Xml.LoadXml('<attribute name="lastopenedtime" />');
                $v_3.appendChild($v_7.documentElement)
            }
            if (!XUI.Xml.SelectSingleNode($v_3, 'attribute[@name="delayedemailsendtime"]', {})) {
                var $v_8 = XUI.Xml.LoadXml('<attribute name="delayedemailsendtime" />');
                $v_3.appendChild($v_8.documentElement)
            }
        }
        return XUI.Xml.XMLSerializer.serializeToString($v_0.documentElement)
    },
    $n_0: false,
    get_isAsync: function() { return this.$n_0 },
    set_isAsync: function(value) {
        this.$n_0 = value;
        return value
    },
    retrieveComments: function(retrieveCommentsRequest, retrieveCommentsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postMessage: function(post, createPostCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postComment: function(comment, createCommentCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    deletePost: function(post, deletePostCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    deleteComment: function(comment, deleteCommentCallback) { return },
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
    },
    getWallServiceFactory: function() { return this.$1G_0 },
    formatPostTextForRendering: function(postText) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    formatCommentTextForRendering: function(commentText) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    isRollupApi: function(queryApiXml) {
        var $v_0 = XUI.Xml.LoadXml(queryApiXml),
            $v_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "queryapi", null));
        switch ($v_1) {
        case "CRMActivity.RollupRelatedByParty":
        case "CRMActivity.RollupRelatedByPartyForActivityWall":
        case "CRMActivity.RollupByParty":
        case "CRMActivity.RollupByPartyForActivityWall":
            return true;
        default:
            return false
        }
    }
};
ActivitiesWall.Service.WallServiceFactory = function() {};
ActivitiesWall.Service.WallServiceFactory.prototype = {
    createRetrievePostsRequest: function() { return new ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest },
    createPost: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    createComment: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    createEntityReference: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    createRetrieveCommentsRequest: function() {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    createRetrieveLikesRequest: function() { throw Error.notImplemented("The method or operation is not implemented.") }
};
Type.registerNamespace("ActivitiesWall.Service.Messages");
ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest = function() {};
ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest.prototype = {
    $8_0: 0,
    $3_0: 0,
    $y_0: null,
    $1E_0: null,
    $O_0: null,
    get_endDate: function() { return this.$y_0 },
    set_endDate: function(value) {
        this.$y_0 = value;
        return value
    },
    get_pageNumber: function() { return this.$8_0 },
    set_pageNumber: function(value) {
        this.$8_0 = value;
        return value
    },
    get_pageSize: function() { return this.$3_0 },
    set_pageSize: function(value) {
        this.$3_0 = value;
        return value
    },
    get_pagingCookie: function() { return this.$O_0 },
    set_pagingCookie: function(value) {
        this.$O_0 = value;
        return value
    },
    get_startDate: function() { return this.$1E_0 },
    set_startDate: function(value) {
        this.$1E_0 = value;
        return value
    },
    $H_0: false,
    get_isConversationExpand: function() { return this.$H_0 },
    set_isConversationExpand: function(value) {
        this.$H_0 = value;
        return value
    },
    $N_0: null,
    get_conversationPostToExpand: function() { return this.$N_0 },
    set_conversationPostToExpand: function(value) {
        this.$N_0 = value;
        return value
    }
};
ActivitiesWall.Service.Messages
    .RetrieveActivityPostsResponse = function() {
        ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse.initializeBase(this)
    };
ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse.prototype = {
    $b_2: false,
    get_retry: function() { return this.$b_2 },
    set_retry: function(value) {
        this.$b_2 = value;
        return value
    }
};
Type.registerNamespace("ActivitiesWall.Service.ObjectModel");
ActivitiesWall.Service.ObjectModel.ParticipationTypeMask = function() {};
ActivitiesWall.Service.ObjectModel.ParticipationTypeMask
    .prototype = {
        sender: 1,
        toRecepient: 2,
        ccRecipient: 3,
        bccRecipient: 4,
        requiredattendee: 5,
        optionalattendee: 6,
        organizer: 7,
        regarding: 8,
        owner: 9,
        resource: 10,
        customer: 11,
        partner: 12
    };
ActivitiesWall.Service.ObjectModel.ParticipationTypeMask
    .registerEnum("ActivitiesWall.Service.ObjectModel.ParticipationTypeMask", false);
ActivitiesWall.Service.ObjectModel.RowData = function() {};
ActivitiesWall.Service.ObjectModel.RowData.prototype = {
    RowId: null,
    RowType: 0,
    subject: null,
    description: null,
    activitytypecode: null,
    modifiedby: null,
    ownerid: null,
    modifiedon_Value: null,
    modifiedon: null,
    scheduledend: null,
    lastopenedtime_Value: null,
    lastopenedtime: null,
    modifiedby_Value: null,
    regardingobjectid_Value: null,
    allparties_Value: null,
    ownerid_Value: null,
    prioritycode: null,
    isemailfollowed: false,
    statecode_Value: null,
    statuscode_Value: 0,
    directioncode: null,
    leftvoicemail_Value: null,
    EntityLogicalName: null,
    IsUnsafe: false,
    IconUrl: null,
    AttachmentCount: 0,
    community: 0,
    posturl: null,
    postfromprofileid: null,
    postfromprofileid_Value: null,
    sentimentvalue: 0,
    postmessagetype: null,
    socialpostcontent: null,
    actualrevenue: null,
    baseconversationindexhash: 0,
    conversationdate: null,
    exchangeweblink: null,
    exchangeitemid: null,
    delayedemailsendtime: null,
    delayedemailsendtime_Value: null,
    senton: null,
    senton_Value: null,
    wallDate: null
};
ActivitiesWall.Service.ObjectModel.GridDataEntityReference = function() {};
ActivitiesWall.Service.ObjectModel.GridDataEntityReference.prototype = { Data: null };
ActivitiesWall.Service.ObjectModel.EntityData = function() {};
ActivitiesWall.Service.ObjectModel.EntityData.prototype = { Type: 0, Name: null, ID: null };
ActivitiesWall.Service.ObjectModel.ActivityParty = function() {};
ActivitiesWall.Service.ObjectModel.ActivityParty
    .prototype = {
        activitypartyid: null,
        ownerid: null,
        participationtypemask: 0,
        activityid: null,
        ispartydeleted: null,
        scheduleend: null,
        partyid: null,
        schedulestart: null,
        instancetypecode: null,
        addressused: null
    };
ActivitiesWall.Service.ObjectModel.Post = function() {};
ActivitiesWall.Service.ObjectModel.Post.prototype = {
    modifiedBy: null,
    modifiedOn: null,
    scheduledEnd: null,
    lastopenedtime: null,
    delayedemailsendtime: null,
    senton: null,
    postId: null,
    text: null,
    isemailfollowed: false,
    description: null,
    objectTypeCode: 0,
    imageSource: null,
    exchangeweblink: null,
    exchangeitemid: null,
    statuscode_Value: 0,
    from: null,
    to: null,
    cc: null,
    owner: null,
    priority: null,
    state: null,
    statusReason: 0,
    entityLogicalName: null,
    directionCodeDisplayString: null,
    directionCode: false,
    leftVoicemail: false,
    isUnsafe: false,
    attachmentCount: 0,
    community: 0,
    postUrl: null,
    postFromProfileId: null,
    sentimentValue: 0,
    socialPostContent: null,
    postMessageType: null,
    actualRevenue: null,
    regardingObjectIdName: null,
    baseconversationindexhash: 0,
    child: null,
    descriptiontext: null,
    isConversationFetchComplete: false,
    lastChildWallDate: null,
    lastChildActivityId: null,
    participants: null,
    conversationdate: null,
    get_createdBy: function() { return null },
    set_createdBy: function(value) { return value },
    get_createdOn: function() { return null },
    set_createdOn: function(value) { return value },
    get_modifiedBy: function() { return this.modifiedBy },
    set_modifiedBy: function(value) {
        this.modifiedBy = value;
        return value
    },
    get_modifiedOnValue: function() { return this.modifiedOn },
    set_modifiedOnValue: function(value) {
        this.modifiedOn = value;
        return value
    },
    get_modifiedOn: function() { return new Date(this.modifiedOn) },
    set_modifiedOn: function(value) {
        this.modifiedOn = value.toString();
        return value
    },
    get_scheduledEnd: function() { return this.scheduledEnd },
    set_scheduledEnd: function(value) {
        this.scheduledEnd = value;
        return value
    },
    get_lastOpenedTimeValue: function() { return this.lastopenedtime },
    set_lastOpenedTimeValue: function(value) {
        this.lastopenedtime = value;
        return value
    },
    get_lastOpenedTime: function() { return new Date(this.lastopenedtime) },
    set_lastOpenedTime: function(value) {
        this.lastopenedtime = value.toString();
        return value
    },
    get_postId: function() { return this.postId },
    set_postId: function(value) {
        this.postId = value;
        return value
    },
    get_text: function() { return this.text },
    set_text: function(value) {
        this.text = value;
        return value
    },
    get_description: function() { return this.description },
    set_description: function(value) {
        this.description = value;
        return value
    },
    get_descriptiontext: function() { return this.descriptiontext },
    set_descriptiontext: function(value) {
        this.descriptiontext = value;
        return value
    },
    get_objectTypeCode: function() { return this.objectTypeCode },
    set_objectTypeCode: function(value) {
        this.objectTypeCode = value;
        return value
    },
    get_imageSource: function() { return this.imageSource },
    set_imageSource: function(value) {
        this.imageSource = value;
        return value
    },
    get_exchangeWebLink: function() { return this.exchangeweblink },
    set_exchangeWebLink: function(value) {
        this.exchangeweblink = value;
        return value
    },
    get_exchangeItemId: function() { return this.exchangeitemid },
    set_exchangeItemId: function(value) {
        this.exchangeitemid = value;
        return value
    },
    get_statuscodeValue: function() { return this.statuscode_Value },
    set_statuscodeValue: function(value) {
        this.statuscode_Value = value;
        return value
    },
    get_from: function() { return this.from },
    set_from: function(value) {
        this.from = value;
        return value
    },
    get_to: function() { return this.to },
    set_to: function(value) {
        this.to = value;
        return value
    },
    get_CC: function() { return this.cc },
    set_CC: function(value) {
        this.cc = value;
        return value
    },
    get_priority: function() { return this.priority },
    set_priority: function(value) {
        this.priority = value;
        return value
    },
    get_state: function() { return this.state },
    set_state: function(value) {
        this.state = value;
        return value
    },
    get_statusReason: function() { return this.statusReason },
    set_statusReason: function(value) {
        this.statusReason = value;
        return value
    },
    get_entityLogicalName: function() { return this.entityLogicalName },
    set_entityLogicalName: function(value) {
        this.entityLogicalName = value;
        return value
    },
    get_directionCode: function() { return this.directionCode },
    set_directionCode: function(value) {
        this.directionCode = value;
        return value
    },
    get_isEmailFollowed: function() { return this.isemailfollowed },
    set_isEmailFollowed: function(value) {
        this.isemailfollowed = value;
        return value
    },
    get_leftVoicemail: function() { return this.leftVoicemail },
    set_leftVoicemail: function(value) {
        this.leftVoicemail = value;
        return value
    },
    get_isUnsafe: function() { return this.isUnsafe },
    set_isUnsafe: function(value) {
        this.isUnsafe = value;
        return value
    },
    get_attachmentCount: function() { return this.attachmentCount },
    set_attachmentCount: function(value) {
        this.attachmentCount = value;
        return value
    },
    get_community: function() { return this.community },
    set_community: function(value) {
        this.community = value;
        return value
    },
    get_actualRevenue: function() { return this.actualRevenue },
    set_actualRevenue: function(value) {
        this.actualRevenue = value;
        return value
    },
    get_regardingObjectIdName: function() { return this.regardingObjectIdName },
    set_regardingObjectIdName: function(value) {
        this.regardingObjectIdName = value;
        return value
    },
    get_postUrl: function() { return this.postUrl },
    set_postUrl: function(value) {
        this.postUrl = value;
        return value
    },
    get_postFromProfileId: function() { return this.postFromProfileId },
    set_postFromProfileId: function(value) {
        this.postFromProfileId = value;
        return value
    },
    get_sentimentValue: function() { return this.sentimentValue },
    set_sentimentValue: function(value) {
        this.sentimentValue = value;
        return value
    },
    get_postMessageType: function() { return this.postMessageType },
    set_postMessageType: function(value) {
        this.postMessageType = value;
        return value
    },
    get_socialPostContent: function() { return this.socialPostContent },
    set_socialPostContent: function(value) {
        this.socialPostContent = value;
        return value
    },
    get_delayedEmailSendTime: function() { return new Date(this.delayedemailsendtime) },
    set_delayedEmailSendTime: function(value) {
        this.delayedemailsendtime = value.toString();
        return value
    },
    get_delayedEmailSendTimeValue: function() { return this.delayedemailsendtime },
    set_delayedEmailSendTimeValue: function(value) {
        this.delayedemailsendtime = value;
        return value
    },
    get_sentOnValue: function() { return this.senton },
    set_sentOnValue: function(value) {
        this.senton = value;
        return value
    },
    get_sentOn: function() { return new Date(this.senton) },
    set_sentOn: function(value) {
        this.senton = value.toString();
        return value
    },
    get_baseConversationIndexHash: function() { return this.baseconversationindexhash },
    set_baseConversationIndexHash: function(value) {
        this.baseconversationindexhash = value;
        return value
    },
    get_child: function() { return this.child },
    set_child: function(value) {
        this.child = value;
        return value
    },
    get_isConversationFetchComplete: function() { return this.isConversationFetchComplete },
    set_isConversationFetchComplete: function(value) {
        this.isConversationFetchComplete = value;
        return value
    },
    get_lastChildActivityId: function() { return this.lastChildActivityId },
    set_lastChildActivityId: function(value) {
        this.lastChildActivityId = value;
        return value
    },
    get_lastChildWallDate: function() { return this.lastChildWallDate },
    set_lastChildWallDate: function(value) {
        this.lastChildWallDate = value;
        return value
    },
    get_participants: function() { return this.participants },
    set_participants: function(value) {
        this.participants = value;
        return value
    },
    get_conversationDate: function() { return this.conversationdate },
    set_conversationDate: function(value) {
        this.conversationdate = value;
        return value
    },
    get_comments: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_comments: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_likeCounter: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_likeCounter: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_likeId: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_likeId: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    }
};
ActivitiesWall.Service.ObjectModel.Party = function() {};
ActivitiesWall.Service.ObjectModel.Party.prototype = {
    participationTypeMask: 0,
    partyID: null,
    partyName: null,
    partyObjectTypeCode: null
};
ActivitiesWall.Service.ObjectModel.EmptyMessage = function(emptyMessageText) { this.message = emptyMessageText };
ActivitiesWall.Service.ObjectModel.EmptyMessage.prototype = {
    message: null,
    get_messageAccessor: function() { return this.message },
    set_messageAccessor: function(value) {
        this.message = value;
        return value
    }
};
Mscrm.FormInputControl.ActivitiesWallPage.registerClass("Mscrm.FormInputControl.ActivitiesWallPage",
    Mscrm.CrmUIControl,
    Sys.IDisposable);
Mscrm.FormInputControl.ActivityWallFilter.registerClass("Mscrm.FormInputControl.ActivityWallFilter");
Mscrm.FormInputControl.WallCommands.registerClass("Mscrm.FormInputControl.WallCommands");
Mscrm.FormInputControl.ActivitiesWallCommandDispatcher
    .registerClass("Mscrm.FormInputControl.ActivitiesWallCommandDispatcher");
ActivitiesWall.UI.ActivitiesWall.registerClass("ActivitiesWall.UI.ActivitiesWall",
    null,
    Wall.Interfaces.IWall,
    Sys.IDisposable);
ActivitiesWall.Service.GridDataToActivityPostConvertor
    .registerClass("ActivitiesWall.Service.GridDataToActivityPostConvertor");
ActivitiesWall.Service.WallService.registerClass("ActivitiesWall.Service.WallService",
    null,
    Wall.Interfaces.IWallService);
ActivitiesWall.Service.WallServiceFactory.registerClass("ActivitiesWall.Service.WallServiceFactory",
    null,
    Wall.Interfaces.IWallServiceFactory);
ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest
    .registerClass("ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest",
        null,
        Wall.Interfaces.IRetrievePostsRequest);
ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse
    .registerClass("ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse",
        Wall.Service.Messages.RetrievePostsBaseResponse,
        Wall.Interfaces.IRetrievePostsResponse);
ActivitiesWall.Service.ObjectModel.RowData.registerClass("ActivitiesWall.Service.ObjectModel.RowData");
ActivitiesWall.Service.ObjectModel.GridDataEntityReference
    .registerClass("ActivitiesWall.Service.ObjectModel.GridDataEntityReference");
ActivitiesWall.Service.ObjectModel.EntityData.registerClass("ActivitiesWall.Service.ObjectModel.EntityData");
ActivitiesWall.Service.ObjectModel.ActivityParty.registerClass("ActivitiesWall.Service.ObjectModel.ActivityParty");
ActivitiesWall.Service.ObjectModel.Post.registerClass("ActivitiesWall.Service.ObjectModel.Post",
    null,
    Wall.Interfaces.IPost);
ActivitiesWall.Service.ObjectModel.Party.registerClass("ActivitiesWall.Service.ObjectModel.Party");
ActivitiesWall.Service.ObjectModel.EmptyMessage.registerClass("ActivitiesWall.Service.ObjectModel.EmptyMessage");
Mscrm.FormInputControl.ActivitiesWallPage.$U = jQueryApi.jQueryDeferredFactory
    .Deferred(Mscrm.FormInputControl.ActivitiesWallLocalizedStrings, Error);
Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings = null;
Mscrm.FormInputControl.ActivityWallFilter.allActivities = 0;
Mscrm.FormInputControl.ActivityWallFilter.openActivities = 1;
Mscrm.FormInputControl.ActivityWallFilter.overdueActivities = 2;
Mscrm.FormInputControl.ActivityWallFilter.tasks = 3;
Mscrm.FormInputControl.ActivityWallFilter.appointment = 4;
Mscrm.FormInputControl.ActivityWallFilter.phone = 5;
Mscrm.FormInputControl.ActivityWallFilter.email = 6;
Mscrm.FormInputControl.ActivityWallFilter.tasksOpen = 7;
Mscrm.FormInputControl.ActivityWallFilter.phoneOpen = 8;
Mscrm.FormInputControl.ActivityWallFilter.emailOpen = 9;
Mscrm.FormInputControl.ActivityWallFilter.appOpen = 10;
Mscrm.FormInputControl.ActivityWallFilter.tasksOverdue = 11;
Mscrm.FormInputControl.ActivityWallFilter.phoneOverdue = 12;
Mscrm.FormInputControl.ActivityWallFilter.emailOverdue = 13;
Mscrm.FormInputControl.ActivityWallFilter.appointmentOverdue = 14;
Mscrm.FormInputControl.ActivityWallFilter.invalidFilter = -1;
Mscrm.FormInputControl.WallCommands.refreshAllCommandName = "refreshall";
Mscrm.FormInputControl.WallCommands.loadEntityWall = "loadentitywall";
Mscrm.FormInputControl.WallCommands.loadWall = "loadwall";
Mscrm.FormInputControl.WallCommands.showText = "showtext";
Mscrm.FormInputControl.WallCommands.clearWallText = "clearwall";
Mscrm.FormInputControl.WallCommands.prependToWall = "prependtowall";
ActivitiesWall.UI.ActivitiesWall.postsRefreshingEventName = "PostsRefreshing";
ActivitiesWall.UI.ActivitiesWall.postsRefreshedEventName = "PostsRefreshed";
ActivitiesWall.UI.ActivitiesWall.commentsRefreshedEventName = "CommentsRefreshed";
ActivitiesWall.UI.ActivitiesWall.postCreatedEventName = "PostCreated";
ActivitiesWall.UI.ActivitiesWall.commentCreatedEventName = "CommentCreated";
ActivitiesWall.UI.ActivitiesWall.postDeletedEventName = "PostDeleted";
ActivitiesWall.UI.ActivitiesWall.commentDeletedEventName = "CommentDeleted";
ActivitiesWall.UI.ActivitiesWall.filtersRefreshedEventName = "FiltersRefreshed";
ActivitiesWall.UI.ActivitiesWall.errorEventName = "Error";
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1V = new RegExp("<div", "gi");
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1X = new RegExp("<style[^>]*>([^<]*)<\\/style>", "g");
ActivitiesWall.Service.GridDataToActivityPostConvertor.$1W = new RegExp("\\<br", "g")