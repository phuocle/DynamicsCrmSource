Type.registerNamespace("Mscrm.ActionHubControl");
Mscrm.ActionHubControl.ActionHubControlHelper = function() {};
Mscrm.ActionHubControl.ActionHubControlHelper.SwitchTabs = function(element) {
    var $v_0 = $find("actionhubcontrol_notescontrol_container");
    $P_CRM(String.format("#{0} #{1} .filter.selected", "actionHubControlWall", "filterContainer"))
        .removeClass("selected");
    $P_CRM(element).parent().addClass("selected");
    $v_0.refreshWall()
};
Mscrm.ActionHubControl.ActionHubControlHelper.TruncateCard = function(element, flag, e) {
    if (!flag) {
        $P_CRM(element).hide();
        $P_CRM(element).next().show();
        $P_CRM(element).parent("div").parent("div").find(".truncated-content").hide();
        $P_CRM(element).parent("div").parent("div").find(".full-content").show();
        $P_CRM(element).parent(".actionhubSection").find(".line-clamp").removeClass("line-clamp")
    } else {
        $P_CRM(element).hide();
        $P_CRM(element).parent("div").parent("div").find("#card-show-more").show();
        $P_CRM(element).parent("div").parent("div").find(".truncated-content").show();
        $P_CRM(element).parent("div").parent("div").find(".full-content").hide();
        $P_CRM(element).parent(".actionhubSection").find(".action-card-content").addClass("line-clamp")
    }
    e.stopPropagation()
};
Mscrm.ActionHubControl.ActionHubControlHelper.getResourceString = function(key) {
    var $v_0 = new RemoteCommand("ResourceManager", "GetString");
    $v_0.SetParameter("key", key);
    var $v_1 = $v_0.Execute();
    return $v_1.Success ? $v_1.ReturnValue.toString() : ""
};
Mscrm.ActionHubControl.ActionHubControl = function(element) {
    this.$O_3 = new Sales.Common.Framework.Loaders.ConcurrentContentLoader;
    Mscrm.ActionHubControl.ActionHubControl.initializeBase(this, [element])
};
Mscrm.ActionHubControl.ActionHubControl.$H = function() {
    return Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId()) ||
        Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty(Xrm.Page.data.entity.getId())
};
Mscrm.ActionHubControl.ActionHubControl.prototype = {
    $4_3: null,
    $i_3: false,
    $j_3: false,
    $X_3: false,
    $Q_3: null,
    $L_3: null,
    $V_3: null,
    $E_3: false,
    get_wallCommandDispatcher: function() { return this.$4_3 },
    set_wallCommandDispatcher: function(value) {
        this.$4_3 = value;
        return value
    },
    get_masterComponentId: function() { return this.$Q_3 },
    set_masterComponentId: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_wallContentPageUrl: function() { return this.$V_3 },
    set_wallContentPageUrl: function(value) {
        this.$V_3 = value;
        return value
    },
    initialize: function(forceRefresh) {
        this.$i_3 = Mscrm.SessionInfo.isOutlookClient();
        this.$j_3 = !Mscrm.SessionInfo.isOnline();
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        !Mscrm.InternalUtilities.JSTypes.isNull(this.get_eventManager()) &&
            this.get_eventManager().subscribeEvent(115, this.get_id());
        this.$l_3(forceRefresh)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 115:
            if (this.$Q_3 === sourceComponent.get_id())
                if (Mscrm.InternalUtilities.JSTypes.isNull(this.$L_3) || !this.$E_3) this.$l_3(true);
                else {
                    if (Xrm.Page.data && Mscrm.ActionHubControl.ActionHubControl.$H()) break;
                    (parameters["tabName"] === "ActionHubTab" && !this.$X_3 || parameters["tabName"] !== "ActionHubTab"
                        ) &&
                        this.refreshWall()
                }
            break
        }
        return null
    },
    refreshWall: function() {
        this.$g_3("refreshwall", ["Pending"]);
        this.$X_3 = true
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !Mscrm.InternalUtilities.JSTypes.isNull(this.$O_3) && this.$O_3.dispose();
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.$4_3)) {
            this.$4_3.dispose();
            this.$4_3 = null
        }
        this.$L_3 = null;
        $P_CRM(this.get_element()).empty().remove();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $l_3: function($p0) {
        var $$t_5 = this, $$t_6 = this;
        this.$O_3.loadContent(this.$V_3,
            "html",
            function($p1_0) {
                if ($$t_5.get_isDisposed()) return;
                if ($$t_5.$E_3) {
                    $$t_5.$k_3($p0);
                    return
                }
                $$t_5.$L_3 = $p1_0;
                $$t_5.get_element().innerHTML = $p1_0;
                $$t_5.$u_3();
                $$t_5.$t_3();
                $$t_5.$k_3($p0)
            },
            function($p1_0, $p1_1, $p1_2) { alert($p1_2.message) })
    },
    $k_3: function($p0) {
        if (!Xrm.Page.data) this.refreshWall();
        else if (Mscrm.ActionHubControl.ActionHubControl.$H()) this.$g_3("shownorecordsmessage", null);
        else $p0 && this.refreshWall()
    },
    $u_3: function() { if (!this.$E_3) this.$E_3 = true },
    $g_3: function($p0, $p1) { this.$4_3.dispatchCommand($p0, $p1) },
    $t_3: function() { this.$4_3 = new Mscrm.ActionHubControl.ActionHubControlWallCommandDispatcher(this) }
};
Mscrm.ActionHubControl.WallCommands = function() {};
Mscrm.ActionHubControl.ActionHubControlWallCommandDispatcher = function(actionHubControl) {
    this.$9_0 = new Mscrm.ActionHubControl.ActionHubControlWallService;
    this.$2_0 = new Mscrm.ActionHubControl.ActionHubControlWall(this.$9_0, actionHubControl)
};
Mscrm.ActionHubControl.ActionHubControlWallCommandDispatcher.prototype = {
    $9_0: null,
    $2_0: null,
    dispatchCommand: function(commandName) {
        for (var parameters = [], $$pai_2 = 1;
            $$pai_2 < arguments.length;
            ++$$pai_2
        ) parameters[$$pai_2 - 1] = arguments[$$pai_2];
        if (Mscrm.InternalUtilities._String.isNullOrEmpty(commandName)) throw Error.create("Command is undefined");
        commandName = commandName.toLowerCase();
        switch (commandName) {
        case "refreshwall":
            this.$y_0.apply(this, parameters);
            break;
        case "clearwall":
            this.$2_0.clearWall();
            break;
        case "shownorecordsmessage":
            this.$2_0.showNoRecordsMessage();
            break;
        default:
            throw Error.create("Invalid Command")
        }
    },
    dispose: function() {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.$2_0)) {
            this.$2_0.dispose();
            this.$2_0 = null
        }
    },
    $y_0: function() {
        for (var $p0 = [], $$pai_1 = 0; $$pai_1 < arguments.length; ++$$pai_1) $p0[$$pai_1] = arguments[$$pai_1];
        this.$2_0.$5_0 = 1;
        this.$2_0.refreshWallOptimized()
    }
};
Mscrm.ActionHubControl.ActionHubControlConstants = function() {};
Mscrm.ActionHubControl.ActionHubControlWall = function(wallService, actionHubControl) {
    this.set_wallService(wallService);
    this.$f_0 = actionHubControl;
    this.$B_0 = $P_CRM($get("actionhubControlWallContainer"));
    this.$K_0 = $P_CRM($get("noRecordForActionHub"));
    this.$T_0 = $P_CRM($get("inlineMessageForActionHub"));
    this.$b_0 = $P_CRM($get("defaultError"));
    this.$6_0 = $P_CRM($get("actionLoadingProgress"));
    this.$a_0 = $P_CRM($get("customErrorMessageForActionHub"));
    this.$S_0 = $P_CRM($get("imgAPIFailure"));
    $P_CRM($get("delveActionHubPreview")).attr("tabindex", this.$8_0);
    this.$U_0 = $P_CRM($get("imgNoRecordForActionHub"));
    if (Xrm.Page.data) {
        this.$8_0 = $P_CRM($get("actionhubcontrol_notescontrol_container")).attr("actionhubtabindex");
        $P_CRM($get("actionhubcontrol_notescontrol_container")).find("#filterContainer a").attr("tabindex", this.$8_0);
        this.$d_0 = $P_CRM($get("imgRefreshWall")).attr("tabindex", this.$8_0);
        this.$S_0 = $P_CRM($get("imgAPIFailure")).attr("tabindex", this.$8_0);
        this.$U_0 = $P_CRM($get("imgNoRecordForActionHub")).attr("tabindex", this.$8_0)
    }
    this.$R_0 = $P_CRM($get("postTemplateForActionCards"));
    Mscrm.ActionHubControl.ActionHubControlWall.$s();
    this.$v_0()
};
Mscrm.ActionHubControl.ActionHubControlWall.getEntityId = function() {
    return (window.parent.Xrm && window.parent.Xrm.Page.data) != null
        ? window.parent.Xrm.Page.data.getEntity().getId()
        : null
};
Mscrm.ActionHubControl.ActionHubControlWall
    .getEntityTypeCode = function() {
        return (window.parent.Xrm && window.parent.Xrm.Page.data) != null
            ? window.parent.Xrm.Internal.getEntityCode(window.parent.Xrm.Page.data.entity.getEntityName())
            : -1
    };
Mscrm.ActionHubControl.ActionHubControlWall
    .setCarouselView = function(value) { Mscrm.ActionHubControl.ActionHubControlWall.$P = value };
Mscrm.ActionHubControl.ActionHubControlWall.$H = function() {
    return Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId()) ||
        Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty(Xrm.Page.data.entity.getId())
};
Mscrm.ActionHubControl.ActionHubControlWall.$s = function() {
    if (Mscrm.ActionHubControl.ActionHubControlWall.$H()) {
        var $v_0 = $P_CRM("#containerID");
        $v_0.attr("style", "display:none;")
    }
};
Mscrm.ActionHubControl.ActionHubControlWall.carousalRefresh = function() {
    var $v_0 = window.top.$P_CRM.find("#contentIFrame0");
    if ($v_0.length > 0) {
        var $v_1 = $P_CRM($v_0[0].contentDocument).find("#dashboardFrame");
        if ($v_1.length > 0) {
            var $v_2 = $P_CRM($v_1[0].contentDocument).find("#iFrmActionCards");
            if ($v_2.length > 0)
                if ($v_2.attr("isCarousalRefreshByRefreshAll") === "true") {
                    $v_2.attr("src", $v_2[0].getAttribute("src").toString());
                    $v_2.attr("isCarousalRefreshByRefreshAll", "false")
                }
        }
    }
};
Mscrm.ActionHubControl.ActionHubControlWall.$Z = function() {
    Mscrm.ActionHubControl.ActionHubControlWall.$1 = $P_CRM($get("ActionCards"));
    if (Mscrm.ActionHubControl.ActionHubControlWall.$1.children().length !== 1) return;
    Mscrm.ActionCardData = [];
    for (var $v_0 = 0; $v_0 < Mscrm.ActionHubControl.ActionHubControlWall.actionCardEntities.get_count(); $v_0++) {
        var $v_1 = document.createElement("div");
        $v_1.setAttribute("id", String.format("card{0}", $v_0 + 1));
        $v_1.setAttribute("class", "actionhubcontrol");
        $P_CRM($v_1).appendTo(Mscrm.ActionHubControl.ActionHubControlWall.$1);
        Mscrm.ActionCardData[$v_0] = Mscrm.ActionHubControl.ActionHubControlWall.actionCardEntities.get_entities()[$v_0]
            .get_fields()
    }
    Mscrm.ActionHubControl.ActionHubControlWall.$J = false;
    Array.clear(Mscrm.ActionHubControl.ActionHubControlWall.$7);
    if (IsNull(window)) return;
    if (Mscrm.ActionHubControl.ActionHubControlWall.$P) {
        applyCarouselCss();
        loadCards(true)
    } else loadCards(false);
    Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Action Cards Render End", 1)
};
Mscrm.ActionHubControl.ActionHubControlWall.actioncardDataCount = function() {
    Mscrm.ActionHubControl.ActionHubControlWall.$1 = $P_CRM($get("ActionCards"));
    if (Mscrm.ActionHubControl.ActionHubControlWall.$1.children().length > 3) return;
    if (Mscrm.ActionHubControl.ActionHubControlWall.$1.children().length < 4 &&
        !Mscrm.ActionHubControl.ActionHubControlWall.$J) {
        for (var $v_0 = 1; $v_0 < Mscrm.ActionHubControl.ActionHubControlWall.$1.children().length; $v_0++) {
            var $v_1 = Mscrm.ActionHubControl.ActionHubControlWall.$1.children().get($v_0);
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1.childNodes[0]) &&
                Array.add(Mscrm.ActionHubControl.ActionHubControlWall.$7, $v_1.childNodes[0].getAttribute("id"))
        }
        Mscrm.ActionHubControl.ActionHubControlWall.$J = true;
        Mscrm.ActionHubControl.ActionHubControlWall.retrieveActionCards()
    } else
        Mscrm.ActionHubControl.ActionHubControlWall.$1.children().length === 1 &&
            Mscrm.ActionHubControl.ActionHubControlWall.$Z()
};
Mscrm.ActionHubControl.ActionHubControlWall.$x = function($p0, $p1, $p2, $p3) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0.get_entities()) && $p0.get_entities().length > 0) $p1();
    else if (!$p0.get_entities().length) !Mscrm.InternalUtilities.JSTypes.isNull($p2) && $p2();
    else !Mscrm.InternalUtilities.JSTypes.isNull($p3) && $p3()
};
Mscrm.ActionHubControl.ActionHubControlWall.fetchXmlforActionCard = function() {
    var $v_0 = "",
        $v_1 = Sys.CultureInfo.InvariantCulture.dateTimeFormat["ShortDatePattern"],
        $v_2 = Sys.CultureInfo.InvariantCulture.dateTimeFormat["ShortTimePattern"],
        $v_3 = Mscrm.DateTimeUtility.formatDate(Mscrm.DateTimeUtility.localDateTimeNow(), $v_1).toString() +
            " " +
            Mscrm.DateTimeUtility.formatDate(Mscrm.DateTimeUtility.localDateTimeNow(), $v_2).toString(),
        $v_4 = Mscrm.ActionHubControl.ActionHubControlWall.getEntityId();
    $v_0 =
        "<fetch distinct='false' mapping='logical' count='20'><entity name='actioncard'><attribute name='actioncardid' /><attribute name='title' /><attribute name='description' /><attribute name='cardtypeid' /><attribute name='cardtype' /><attribute name='priority' /><attribute name='regardingobjectid' /><attribute name='data' /><attribute name='startdate' /><attribute name='expirydate' /> <attribute name='referencetokens' /><order attribute='priority' descending='true' /><order attribute='expirydate' descending='true' /><filter type='and'><condition attribute='startdate' operator='le' value='" + $v_3 + "'/><condition attribute='expirydate' operator='ge' value='" + $v_3 + "'/></filter><filter type='or'><condition attribute='source' operator='eq' value='1'/><condition attribute='source' operator='eq'  value='2'/></filter><filter type='and'><condition attribute='state' operator='eq' value='0'/></filter><filter type='and'><condition attribute='ownerid' operator='eq-useroruserhierarchyandteams' /></filter>";
    if ($v_4)
        $v_0 = $v_0 +
            "<filter type='and'><condition attribute='recordid' operator='eq' value='" +
            $v_4.substring(1, $v_4.length - 1) +
            "'/></filter>";
    if (Mscrm.ActionHubControl.ActionHubControlWall.$7
        .length >
        0)
        for (var $v_5 = 0;
            $v_5 < Mscrm.ActionHubControl.ActionHubControlWall.$7.length;
            $v_5++
        )
            $v_0 = $v_0 +
                "<filter type='and'><condition attribute='actioncardid' operator='ne' value='" +
                Mscrm.ActionHubControl.ActionHubControlWall.$7[$v_5] +
                "'/></filter>";
    if (Mscrm.ActionHubControl.ActionHubControlWall
        .getEntityTypeCode() >
        0)
        $v_0 = $v_0 +
            "<filter type='and'>" +
            String.format('<condition attribute= "recordidobjecttypecode" operator="eq" value="{0}"/>',
                Mscrm.ActionHubControl.ActionHubControlWall.getEntityTypeCode()) +
            "</filter>";
    $v_0 = $v_0 +
        "<link-entity alias='cardtype' name='cardtype' to='cardtypeid' from='cardtypeid'><filter type='or'><condition attribute='clientavailability' operator='eq' value='1'/><condition attribute='clientavailability' operator='eq'  value='3'/></filter></link-entity></entity></fetch>";
    return $v_0
};
Mscrm.ActionHubControl.ActionHubControlWall.retrieveActionCards = function() {
    var $v_0 = Mscrm.ActionHubControl.ActionHubControlWall.fetchXmlforActionCard();
    Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Action Cards Fetch Start", 1);
    var $v_1 = function($p1_0) {
            if (!window || !Mscrm) return;
            Mscrm.Performance.PerformanceMarkerManager.get_instance()
                .addMarker("Action Cards Fetch End, Render Start", 1);
            var $v_3 = $p1_0;
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_3
                    .entityCollection))
                Mscrm.ActionHubControl.ActionHubControlWall.actionCardEntities = $v_3.entityCollection;
            Mscrm.ActionHubControl.ActionHubControlWall.$x(Mscrm.ActionHubControl.ActionHubControlWall
                .actionCardEntities,
                Mscrm.ActionHubControl.ActionHubControlWall.$Z,
                Mscrm.ActionHubControl.ActionHubControlWall.$Z,
                null)
        },
        $v_2 = window.top.Mscrm &&
            window.top.Mscrm.Utilities &&
            window.top.Mscrm.Utilities.createExceptionHandlerCallback($v_1);
    Xrm.Internal.messages.retrieveMultiple($v_0).then($v_2, null)
};
Mscrm.ActionHubControl.ActionHubControlWall.prototype = {
    $9_0: null,
    $f_0: null,
    $5_0: 1,
    $I_0: 50,
    $m_0: null,
    $K_0: null,
    $T_0: null,
    $B_0: null,
    $a_0: null,
    $b_0: null,
    $6_0: null,
    $d_0: null,
    $R_0: null,
    _disposed: false,
    $c_0: null,
    $8_0: "0",
    $S_0: null,
    $U_0: null,
    get_wallService: function() { return this.$9_0 },
    set_wallService: function(value) {
        this.$9_0 = value;
        return value
    },
    get_pageNumber: function() { return this.$5_0 },
    set_pageNumber: function(value) {
        this.$5_0 = value;
        return value
    },
    get_pageSize: function() { return this.$I_0 },
    set_pageSize: function(value) {
        this.$I_0 = value;
        return value
    },
    refreshWall: function() {
        setPerfMarkerTimestamp("ActionHubRefreshStart");
        this.$e_0();
        this.$6_0.show();
        var $v_0 = new Mscrm.ActionHubControl.ActionHubControlRetrieveRequest;
        this.$5_0 = 1;
        $v_0.$F_0 = this.$5_0;
        $v_0.$G_0 = this.$I_0;
        $v_0.$D_0 = "Pending";
        this.clearWall();
        this.$9_0.abortRequest();
        this.$h_0()
    },
    refreshWallOptimized: function() {
        if (window.IS_ACTIONHUB_ENABLED && !Mscrm.ActionHubControl.ActionHubControlWall.$H()) {
            setPerfMarkerTimestamp("ActionHubRefreshStart");
            var $v_0 = this.$B_0.find("#iFrmActionCards");
            if ($v_0.length) {
                $v_0.contents().find("[id ^= card]").filter(".actionhubcontrol").remove();
                this.$6_0.show();
                frames["actionCards"].Mscrm.ActionHubControl.ActionHubControlWall.retrieveActionCards();
                this.$6_0.hide()
            } else this.refreshWall()
        }
    },
    fetchAll: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    $h_0: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Inject Action Hub Iframe in Form", 1);
        this.$6_0.hide();
        var $v_0 = {},
            $v_1 = Mscrm.CrmUri.create("/_controls/actionhubcontrol/actionhubcontrolPersonalWall.aspx?pagemode=iframe")
                .toString();
        $v_0["iframeUrlWithOrg"] = $v_1;
        this.$R_0.tmpl($v_0, this).appendTo(this.$B_0)
    },
    $v_0: function() { !Mscrm.ActionHubControl.ActionHubControlWall.$H() && this.$h_0() },
    $e_0: function() {
        this.$K_0.hide();
        this.$6_0.hide();
        this.$T_0.hide()
    },
    refreshAll: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    clearWall: function() { this.$B_0.empty() },
    get_isDisposed: function() { return this._disposed },
    get_wallContainerId: function() { return this.$c_0 },
    set_wallContainerId: function(value) {
        this.$c_0 = value;
        return value
    },
    showNoRecordsMessage: function() {
        this.$e_0();
        this.$K_0.show()
    },
    refreshComments: function(parentPostId, pageSize, olderThanDate) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postMessage: function(text) { throw Error.notImplemented("The method or operation is not implemented.") },
    renderOlderPosts: function() {
        var $v_0 = new Mscrm.ActionHubControl.ActionHubControlRetrieveRequest;
        $v_0.$G_0 = this.$I_0;
        $v_0.$3_0 = this.$m_0;
        this.$5_0 += 1;
        $v_0.$F_0 = this.$5_0;
        Mscrm.ActionHubControl.ActionHubControlWall.retrieveActionCards()
    },
    dispose: function() {
        if (this._disposed) return;
        this.$K_0 = null;
        this.$T_0 = null;
        this.$B_0 = null;
        this.$a_0 = null;
        this.$b_0 = null;
        this.$6_0 = null;
        this.$d_0 = null;
        this.$R_0 = null;
        this.$S_0 = null;
        this.$U_0 = null;
        Mscrm.ActionHubControl.ActionHubControlWall.$J = false;
        Mscrm.ActionHubControl.ActionHubControlWall.$P = false;
        Mscrm.ActionHubControl.ActionHubControlWall.actionCardEntities = null;
        Mscrm.ActionHubControl.ActionHubControlWall.$1 = null;
        Mscrm.ActionHubControl.ActionHubControlWall.$7 = null
    },
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
Mscrm.ActionHubControl.ActionHubControlWallService = function() { this.$C_0 = true };
Mscrm.ActionHubControl.ActionHubControlWallService.prototype = {
    $0_0: null,
    $C_0: false,
    get_isAsync: function() { return this.$C_0 },
    set_isAsync: function(value) {
        this.$C_0 = value;
        return value
    },
    retrievePosts: function(retrievePostsRequest, retrievePostsCallback) {
        this.$0_0 = new XMLHttpRequest;
        var $v_0 = Mscrm.CrmUri.create("/AppWebServices/AppGridWebService.ashx?operation=RefreshData");
        this.$0_0.open("POST", $v_0.toString(), this.$C_0);
        var $$t_6 = this;
        this.$0_0.onreadystatechange = function() {
            setPerfMarkerTimestamp("ActionHubRetrieveResponseReceived");
            if ($$t_6.$0_0.readyState === 4) {
                $$t_6.$0_0.onreadystatechange = null;
                var $v_2 = new Wall.Service.Messages.RetrievePostsBaseResponse;
                if ($$t_6.$0_0.status === 200) {
                    var $v_3 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
                        .convertDataToActionCardCollection($$t_6.$0_0.responseText);
                    $v_2.set_posts($v_3);
                    $v_2.set_morePosts(Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$M);
                    $v_2.set_pagingCookie(Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$3)
                } else if ($$t_6.$0_0.status === 500) $v_2.set_errorMessage($$t_6.$0_0.responseText);
                else $v_2.set_errorMessage("");
                retrievePostsCallback($v_2)
            }
        };
        var $v_1 = retrievePostsRequest;
        this.$0_0.send(this.$n_0(this.$q_0($v_1.$D_0)));
        setPerfMarkerTimestamp("ActionHubRetrieveRequestSend")
    },
    retrieveAllPosts: function(retrievePostsRequest, retrievePostsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    abortRequest: function() {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.$0_0)) {
            this.$0_0.onreadystatechange = null;
            this.$0_0.abort()
        }
    },
    resetRequest: function() { this.$0_0 = null },
    $n_0: function($p0) {
        var $v_0 = this.getEntityId(), $v_1 = this.getEntityTypeCode(), $v_2 = "<grid>";
        $v_2 += "<sortColumns></sortColumns>";
        $v_2 += "<pageNum>1</pageNum>";
        $v_2 += "<recsPerPage>50</recsPerPage>";
        $v_2 += "<dataProvider>Microsoft.Crm.Application.Controls.DelveActionHubGridDataProvider</dataProvider>";
        $v_2 += "<uiProvider>Microsoft.Crm.Application.Controls.GridUIProvider</uiProvider>";
        $v_2 += "<enablePagingWhenOnePage>true</enablePagingWhenOnePage>";
        $v_2 += "<pagingCookie/>";
        $v_2 += "<parameters>";
        $v_2 += "<otc>" + 9961 + "</otc>";
        $v_2 += "<otn>delveactionhub</otn>";
        $v_2 += "<viewid>" + CrmEncodeDecode.CrmXmlEncode($p0) + "</viewid>";
        $v_2 += "<viewtype>1039</viewtype>";
        if ($v_0) $v_2 += String.format("<recordid>{0}</recordid>", $v_0);
        if ($v_1 !== -1) $v_2 += String.format("<recordidobjecttypecode>{0}</recordidobjecttypecode>", $v_1);
        $v_2 += "</parameters>";
        $v_2 += "<columns>";
        $v_2 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Card Description" fieldname="description" entityname="delveactionhub" renderertype="ntext">description</column>';
        $v_2 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Message Id" fieldname="messageid" entityname="delveactionhub" renderertype="ntext">messageid</column>';
        $v_2 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Card Type" fieldname="cardtype" entityname="delveactionhub" renderertype="picklist">cardtype</column>';
        $v_2 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Message Sender" fieldname="sender" entityname="delveactionhub" renderertype="nvarchar">sender</column>';
        $v_2 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Message Subject" fieldname="subject" entityname="delveactionhub" renderertype="nvarchar">subject</column>';
        $v_2 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Message Time" fieldname="messagetime" entityname="delveactionhub" renderertype="datetime">messagetime</column>';
        $v_2 +=
            '<column width="100" isHidden="false" isMetadataBound="true" isSortable="true" label="Regarding Id" fieldname="regardingobjectid" entityname="delveactionhub" renderertype="lookup">regardingobjectid</column>';
        $v_2 +=
            '<column width="100" isHidden="false" isMetadataBound="true" isSortable="true" label="Sender Image Url" fieldname="senderimageurl" entityname="delveactionhub" renderertype="lookup">senderimageurl</column>';
        $v_2 +=
            '<column width="100" isHidden="false" isMetadataBound="true" isSortable="true" label="MailWebLink" fieldname="mailweblink" entityname="delveactionhub" renderertype="nvarchar">mailweblink</column>';
        $v_2 +=
            '<column width="100" isHidden="false" isMetadataBound="true" isSortable="true" label="Sender Entity Type Code" fieldname="senderentityobjecttypecode" entityname="delveactionhub" renderertype="int">senderentityobjecttypecode</column>';
        $v_2 +=
            '<column width="100" isHidden="false" isMetadataBound="true" isSortable="true" label="Sender Entity Id" fieldname="senderentityid" entityname="delveactionhub" renderertype="uniqueidentifier">senderentityid</column>';
        $v_2 +=
            '<column width="100" isHidden="false" isMetadataBound="true" isSortable="true" label="Related Mail Ids" fieldname="relatedmailids" entityname="delveactionhub" renderertype="nvarchar">relatedmailids</column>';
        $v_2 += "</columns>";
        $v_2 += "</grid>";
        return $v_2
    },
    getEntityId: function() { return Xrm.Page.data ? Xrm.Page.data.getEntity().getId() : null },
    getEntityTypeCode: function() {
        if (Xrm.Page.data) {
            var $v_0 = Xrm.Page.data.entity.getEntityName();
            return Xrm.Internal.getEntityCode($v_0)
        }
        return -1
    },
    $q_0: function($p0) {
        switch ($p0.toLowerCase()) {
        case "pending":
            return "996e218f-a3c7-4f0d-937d-039eedc5f95c";
        case "tracking":
            return "2b860ea8-ce6b-46ae-baad-00bf0a7a4ff7";
        case "completed":
            return "fe3d31d2-63a0-4f2a-ba67-527e31d6c877";
        default:
            throw Error.create("Invalid Card status.")
        }
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
Mscrm.ActionHubControl.ActionHubControlRetrieveRequest = function() {};
Mscrm.ActionHubControl.ActionHubControlRetrieveRequest.prototype = {
    $F_0: 0,
    $G_0: 0,
    $W_0: null,
    $Y_0: null,
    $3_0: null,
    $D_0: null,
    get_pageNumber: function() { return this.$F_0 },
    set_pageNumber: function(value) {
        this.$F_0 = value;
        return value
    },
    get_pageSize: function() { return this.$G_0 },
    set_pageSize: function(value) {
        this.$G_0 = value;
        return value
    },
    get_endDate: function() { return this.$W_0 },
    set_endDate: function(value) {
        this.$W_0 = value;
        return value
    },
    get_pagingCookie: function() { return this.$3_0 },
    set_pagingCookie: function(value) {
        this.$3_0 = value;
        return value
    },
    get_startDate: function() { return this.$Y_0 },
    set_startDate: function(value) {
        this.$Y_0 = value;
        return value
    },
    get_cardStatus: function() { return this.$D_0 },
    set_cardStatus: function(value) {
        this.$D_0 = value;
        return value
    }
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor = function() {};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .get_moreRecords = function() { return Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$M };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .get_pagingCookie = function() { return Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$3 };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .get_pageSections = function() { return Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$N };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .toShowOpenButton = function(regardingObjectId, regardingObjectTypeCode) {
        if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString(regardingObjectId) &&
            regardingObjectTypeCode)
            if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
                Xrm.Page.data.entity.getEntityName() === Xrm.Internal.getEntityName(regardingObjectTypeCode) &&
                (new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()))
                .equals(new Microsoft.Crm.Client.Core.Framework
                    .Guid(CrmEncodeDecode.CrmHtmlDecode(regardingObjectId)))) return false;
        return true
    };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.convertDataToActionCardCollection = function(xmlData) {
    for (var $v_0 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.parseXmlToRowData(xmlData),
        $v_1 = new Array($v_0.length),
        $v_2 = 0,
        $$arr_4 = $v_0,
        $$len_5 = $$arr_4.length,
        $$idx_6 = 0;
        $$idx_6 < $$len_5;
        ++$$idx_6) {
        var $v_3 = $$arr_4[$$idx_6], $v_4 = new Mscrm.ActionHubControl.ObjectModel.Section;
        $v_4.set_rowId($v_3.RowId);
        $v_4.set_messageId($v_3.messageid);
        $v_4.set_cardId(Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString());
        $v_4.set_messageTime($v_3.messagetime);
        $v_4.set_actionUser($v_3.sender);
        $v_4.set_actionTitle($v_3.subject);
        $v_4.set_actionCardContent($v_3.description);
        $v_4.actionCardType = $v_3.cardtype;
        $v_4.actionCardTypeValue = $v_3.cardtype_Value;
        $v_4.set_senderImageUrl(Mscrm.InternalUtilities._String.isNullOrEmpty($v_3.senderimageurl)
            ? window.CDNURL + "/_imgs/navbar/emptyuserimage.png"
            : $v_3.senderimageurl);
        $v_4.set_actionCardTypeIconUrl(Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
            .$o($v_4.actionCardTypeValue));
        $v_4.set_mailWebLink($v_3.mailweblink);
        $v_4.senderEntityId = $v_3.senderentityid;
        $v_4.senderEntityObjectTypeCode = Mscrm.InternalUtilities._String.isNullOrEmpty($v_3.senderentityobjecttypecode)
            ? 0
            : Number.parseInvariant($v_3.senderentityobjecttypecode);
        $v_4.sender = $v_3.sender;
        $v_4.set_regardingObjectId(Mscrm.InternalUtilities.JSTypes.isNull($v_3.regardingobjectid_Value)
            ? ""
            : $v_3.regardingobjectid_Value.Data.ID);
        $v_4.regardingObjectTypeCode = Mscrm.InternalUtilities.JSTypes.isNull($v_3.regardingobjectid_Value)
            ? 0
            : $v_3.regardingobjectid_Value.Data.Type;
        $v_4.toShowOpenButton = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
            .toShowOpenButton($v_4.regardingObjectId, $v_4.regardingObjectTypeCode);
        $v_4.set_relatedMailIds($v_3.relatedmailids);
        $v_4.set_regadingEntityName(Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
            .$p($v_4.regardingObjectTypeCode));
        $v_1[$v_2] = $v_4;
        $v_2++
    }
    Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$N = $v_1;
    return $v_1.slice(0, $v_2)
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$p = function($p0) {
    if (!$p0) return "";
    else return Xrm.Internal.getEntityDisplayName(Xrm.Internal.getEntityName($p0))
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$o = function($p0) {
    switch ($p0) {
    case 1:
        return window.CDNURL + "/_imgs/delve_sendcontentrequest.png";
    case 2:
        return window.CDNURL + "/_imgs/delve_yesno.png";
    case 3:
        return window.CDNURL + "/_imgs/delve_meetingrequest.png";
    default:
        return window.CDNURL + "/_imgs/delve_default.png"
    }
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.parseXmlToRowData = function(xmlData) {
    var $v_0 = XUI.Xml.LoadXml(xmlData),
        $v_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/pagingCookie", null)),
        $v_2 = Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/moreRecords", null))),
        $v_3 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/gridHtml", null));
    $v_3 = $v_3.substring(8, $v_3.length);
    var $v_4 = Sys.Serialization.JavaScriptSerializer.deserialize($v_3);
    Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$M = $v_2;
    Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$3 = $v_1;
    return $v_4
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .CallDefaultAction = function(cardId, e) {
        e.which === 13 && Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.DefaultAction(cardId, false)
    };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.DefaultAction = function(cardId, completeAction) {
    var $v_0 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$A(cardId);
    if ($v_0 && $v_0.mailWebLink && $v_0.mailWebLink.length > 0) {
        Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.openMail($v_0.mailWebLink);
        completeAction &&
            Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
            .completeAction(CrmEncodeDecode.CrmHtmlDecode($v_0.messageId))
    }
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.OpenRegardingForm = function(cardId, e) {
    var $v_0 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$A(cardId);
    if ($v_0)
        if ($v_0.regardingObjectTypeCode && !Mscrm.InternalUtilities._String.isNullOrEmpty($v_0.regardingObjectId))
            if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) ||
                CrmEncodeDecode.CrmHtmlDecode($v_0.regardingObjectId) !== Xrm.Page.data.entity.getId()) {
                var $v_1 = {};
                $v_1["preservePreviousContent"] = true;
                Wall.Control.Utils.WindowUtils.openObject($v_0.regardingObjectTypeCode,
                    CrmEncodeDecode.CrmHtmlDecode($v_0.regardingObjectId),
                    null,
                    null,
                    0,
                    $v_1)
            }
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.OpenEmailAction = function(cardId, e) {
    Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.DefaultAction(cardId, true);
    e.stopPropagation()
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .CallCloseAction = function(cardId, e) {
        e.which === 13 && Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.CloseAction(cardId, e)
    };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.CloseAction = function(cardId, e) {
    var $v_0 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$A(cardId);
    Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
        .dismissAction(CrmEncodeDecode.CrmHtmlDecode($v_0.messageId));
    e.stopPropagation()
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.OpenContact = function(cardId, e) {
    var $v_0 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$A(cardId);
    if ($v_0.senderEntityObjectTypeCode && !Mscrm.InternalUtilities._String.isNullOrEmpty($v_0.senderEntityId)) {
        var $v_1 = {};
        $v_1["preservePreviousContent"] = true;
        Wall.Control.Utils.WindowUtils.openObject($v_0.senderEntityObjectTypeCode,
            $v_0.senderEntityId,
            null,
            null,
            0,
            $v_1)
    } else Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$w($v_0.sender);
    e.stopPropagation()
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.ReplyAction = function(cardId, isReplyAffirmative, e) {
    var $v_0 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$A(cardId);
    if ($v_0) {
        var $v_1 = Mscrm.CommandBarActions.getEmailBody(isReplyAffirmative, $v_0.actionCardContent);
        Mscrm.CommandBarActions.replyAction(CrmEncodeDecode.CrmHtmlDecode($v_0.messageId), $v_1).then(function($p1_0) {
                var $v_2 = $p1_0;
                window.open(CrmEncodeDecode.CrmHtmlDecode($v_2.mailWebLink));
                Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
                    .completeAction(CrmEncodeDecode.CrmHtmlDecode($v_0.messageId))
            },
            null)
    }
    e.stopPropagation()
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.CreateMeetingAction = function(cardId, e) {
    var $v_0 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$A(cardId);
    if ($v_0) {
        var $v_1 = Mscrm.NewMeetingHandler
            .createRecordForAppointment(CrmEncodeDecode.CrmHtmlDecode($v_0.messageId),
                $v_0.relatedMailIds,
                $v_0.actionTitle,
                $v_0.regardingObjectId,
                $v_0.regardingObjectTypeCode,
                false);
        Xrm.Internal.messages.create($v_1).then(function($p1_0) {
                var $v_2 = $p1_0.id.toString(), $v_3 = {};
                $v_3["preservePreviousContent"] = true;
                Wall.Control.Utils.WindowUtils.openObject(4201, $v_2, null, null, 0, $v_3);
                Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
                    .completeAction(CrmEncodeDecode.CrmHtmlDecode($v_0.messageId))
            },
            function($p1_0) { Mscrm.NewMeetingHandler.handleAppointmentCreationError(false) })
    } else Mscrm.NewMeetingHandler.handleAppointmentCreationError(false);
    e.stopPropagation()
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .completeAction = function(messageId) {
        Mscrm.CommandBarActions.updateCompleteAction(messageId, Mscrm.CommandBarActions.getRecordIdBasedOnFormType())
            .then(function() { Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.refreshWall(null) }, null)
    };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .dismissAction = function(messageId) {
        Mscrm.CommandBarActions.updateDismissAction(messageId, Mscrm.CommandBarActions.getRecordIdBasedOnFormType())
            .then(function() { Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.refreshWall(null) }, null)
    };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.refreshWall = function(e) {
    var $v_0 = null, $v_1, $v_2;
    if (e) {
        var $v_3 = 15;
        $v_0 = e.target.id;
        var $v_4 = e.target;
        while ($v_0 !== "actionHubControlWall" && $v_3 > 0) {
            $v_4 = $v_4.parentNode;
            if (!$v_4) {
                $v_0 = "actionhubcontrol_notescontrol_container";
                $v_1 = $P_CRM(window.parent.document.getElementById($v_0));
                $v_2 = window.parent.$find($v_1.get(0).id);
                $v_2.refreshWall();
                return
            }
            $v_0 = $v_4.id;
            $v_3--
        }
        if ($v_3 > 0) {
            $v_4 = $v_4.parentNode;
            $v_0 = $v_4.id
        } else $v_0 = "actionhubcontrol_notescontrol_container"
    } else $v_0 = "actionhubcontrol_notescontrol_container";
    $v_1 = $P_CRM("#" + $v_0);
    $v_2 = $find($v_1.get(0).id);
    $v_2.refreshWall()
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .handleRefreshIconKeyevent = function(e) {
        (e.which === 13 || e.which === 1) && Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.refreshWall(e)
    };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .openMail = function(mailToLink) { window.open(CrmEncodeDecode.CrmHtmlDecode(mailToLink)) };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$A = function($p0) {
    for (var $v_0 = null,
        $$arr_2 = Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$N,
        $$len_3 = $$arr_2.length,
        $$idx_4 = 0;
        $$idx_4 < $$len_3;
        ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        if ($v_1.cardId === $p0) $v_0 = $v_1
    }
    return $v_0
};
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .$w = function($p0) {
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .launchGlobalQuickCreate(new Mscrm.GlobalQuickCreate
                .LookupGlobalQuickCreateCallbacks("mscrm-globalqc-iframe",
                    990,
                    Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$r),
                "contact",
                2,
                null,
                null,
                0,
                $p0)
    };
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .$r = function($p0) { Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.refreshWall(null) };
Type.registerNamespace("Mscrm.ActionHubControl.ObjectModel");
Mscrm.ActionHubControl.ObjectModel.RowData = function() {};
Mscrm.ActionHubControl.ObjectModel.RowData.prototype = {
    messageid: null,
    RowId: null,
    subject: null,
    sender: null,
    description: null,
    cardtype: null,
    cardtype_Value: 0,
    messagetype: null,
    messagetime: null,
    senderimageurl: null,
    mailweblink: null,
    senderentityobjecttypecode: null,
    senderentityid: null,
    regardingobjectid_Value: null,
    relatedmailids: null
};
Mscrm.ActionHubControl.ObjectModel.regardingobjectid_Value = function() {};
Mscrm.ActionHubControl.ObjectModel.regardingobjectid_Value.prototype = { Data: null };
Mscrm.ActionHubControl.ObjectModel.Data = function() {};
Mscrm.ActionHubControl.ObjectModel.Data.prototype = { Type: 0, ID: null };
Mscrm.ActionHubControl.ObjectModel.Section = function() {};
Mscrm.ActionHubControl.ObjectModel.Section.prototype = {
    messageId: null,
    cardId: null,
    messageTime: null,
    actionTitle: null,
    actionUser: null,
    actionCardContent: null,
    actionCardType: null,
    actionCardTypeValue: 0,
    rowId: null,
    senderImageUrl: null,
    actionCardTypeIconUrl: null,
    mailWebLink: null,
    sender: null,
    senderEntityObjectTypeCode: 0,
    senderEntityId: null,
    regardingObjectId: null,
    regardingObjectTypeCode: 0,
    relatedMailIds: null,
    toShowOpenButton: false,
    regadingEntityName: null,
    get_messageId: function() { return this.messageId },
    set_messageId: function(value) {
        this.messageId = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_cardId: function() { return this.cardId },
    set_cardId: function(value) {
        this.cardId = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_messageTime: function() { return this.messageTime },
    set_messageTime: function(value) {
        this.messageTime = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_rowId: function() { return this.rowId },
    set_rowId: function(value) {
        this.rowId = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_actionTitle: function() { return this.actionTitle },
    set_actionTitle: function(value) {
        this.actionTitle = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_actionUser: function() { return this.actionUser },
    set_actionUser: function(value) {
        this.actionUser = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_actionCardContent: function() { return this.actionCardContent },
    set_actionCardContent: function(value) {
        this.actionCardContent = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_actionCardType: function() { return this.actionCardType },
    set_actionCardType: function(value) {
        this.actionCardType = value;
        return value
    },
    get_actionCardTypeValue: function() { return this.actionCardTypeValue },
    set_actionCardTypeValue: function(value) {
        this.actionCardTypeValue = value;
        return value
    },
    get_senderImageUrl: function() { return this.senderImageUrl },
    set_senderImageUrl: function(value) {
        this.senderImageUrl = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_actionCardTypeIconUrl: function() { return this.actionCardTypeIconUrl },
    set_actionCardTypeIconUrl: function(value) {
        this.actionCardTypeIconUrl = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_senderEntityObjectTypeCode: function() { return this.senderEntityObjectTypeCode },
    set_senderEntityObjectTypeCode: function(value) {
        this.senderEntityObjectTypeCode = value;
        return value
    },
    get_toShowOpenButton: function() { return this.toShowOpenButton },
    set_toShowOpenButton: function(value) {
        this.toShowOpenButton = value;
        return value
    },
    get_senderEntityId: function() { return this.senderEntityId },
    set_senderEntityId: function(value) {
        this.senderEntityId = value;
        return value
    },
    get_sender: function() { return this.sender },
    set_sender: function(value) {
        this.sender = value;
        return value
    },
    get_comments: function() { return null },
    set_comments: function(value) { return value },
    get_createdBy: function() { return null },
    set_createdBy: function(value) { return value },
    get_createdOn: function() { return null },
    set_createdOn: function(value) { return value },
    get_likeCounter: function() { return 0 },
    set_likeCounter: function(value) { return value },
    get_likeId: function() { return null },
    set_likeId: function(value) { return value },
    get_postId: function() { return this.cardId },
    set_postId: function(value) {
        this.cardId = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_text: function() { return null },
    set_text: function(value) { return value },
    get_mailWebLink: function() { return this.mailWebLink },
    set_mailWebLink: function(value) {
        this.mailWebLink = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_regardingObjectId: function() { return this.regardingObjectId },
    set_regardingObjectId: function(value) {
        this.regardingObjectId = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_regardingObjectTypeCode: function() { return this.regardingObjectTypeCode },
    set_regardingObjectTypeCode: function(value) {
        this.regardingObjectTypeCode = value;
        return value
    },
    get_relatedMailIds: function() { return this.relatedMailIds },
    set_relatedMailIds: function(value) {
        this.relatedMailIds = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_regadingEntityName: function() { return this.regadingEntityName },
    set_regadingEntityName: function(value) {
        this.regadingEntityName = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    }
};
Mscrm.ActionHubControl.ActionHubControlHelper.registerClass("Mscrm.ActionHubControl.ActionHubControlHelper");
Mscrm.ActionHubControl.ActionHubControl.registerClass("Mscrm.ActionHubControl.ActionHubControl",
    Mscrm.CrmUIControl,
    Sys.IDisposable);
Mscrm.ActionHubControl.WallCommands.registerClass("Mscrm.ActionHubControl.WallCommands");
Mscrm.ActionHubControl.ActionHubControlWallCommandDispatcher
    .registerClass("Mscrm.ActionHubControl.ActionHubControlWallCommandDispatcher");
Mscrm.ActionHubControl.ActionHubControlConstants.registerClass("Mscrm.ActionHubControl.ActionHubControlConstants");
Mscrm.ActionHubControl.ActionHubControlWall.registerClass("Mscrm.ActionHubControl.ActionHubControlWall",
    null,
    Wall.Interfaces.IWall,
    Sys.IDisposable);
Mscrm.ActionHubControl.ActionHubControlWallService
    .registerClass("Mscrm.ActionHubControl.ActionHubControlWallService", null, Wall.Interfaces.IWallService);
Mscrm.ActionHubControl.ActionHubControlRetrieveRequest
    .registerClass("Mscrm.ActionHubControl.ActionHubControlRetrieveRequest",
        null,
        Wall.Interfaces.IRetrievePostsRequest);
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor
    .registerClass("Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor");
Mscrm.ActionHubControl.ObjectModel.RowData.registerClass("Mscrm.ActionHubControl.ObjectModel.RowData");
Mscrm.ActionHubControl.ObjectModel.regardingobjectid_Value
    .registerClass("Mscrm.ActionHubControl.ObjectModel.regardingobjectid_Value");
Mscrm.ActionHubControl.ObjectModel.Data.registerClass("Mscrm.ActionHubControl.ObjectModel.Data");
Mscrm.ActionHubControl.ObjectModel.Section.registerClass("Mscrm.ActionHubControl.ObjectModel.Section",
    null,
    Wall.Interfaces.IPost);
Mscrm.ActionHubControl.WallCommands.refreshWall = "refreshwall";
Mscrm.ActionHubControl.WallCommands.clearWall = "clearwall";
Mscrm.ActionHubControl.WallCommands.showNoRecordsMessage = "shownorecordsmessage";
Mscrm.ActionHubControl.ActionHubControlConstants.sectionTemplateId = "postTemplateForActionHub";
Mscrm.ActionHubControl.ActionHubControlConstants.showMoreTemplateId = "showMoreLinkTemplate";
Mscrm.ActionHubControl.ActionHubControlConstants.noRecordForActionHubId = "noRecordForActionHub";
Mscrm.ActionHubControl.ActionHubControlConstants.inlineMessageForActionHubId = "inlineMessageForActionHub";
Mscrm.ActionHubControl.ActionHubControlConstants
    .actionHubWallControlParentId = "actionhubcontrol_notescontrol_container";
Mscrm.ActionHubControl.ActionHubControlConstants.actionHubWallControlContainerId = "actionhubControlWallContainer";
Mscrm.ActionHubControl.ActionHubControlConstants.actionHubControlWallId = "actionHubControlWall";
Mscrm.ActionHubControl.ActionHubControlConstants.filterContainerId = "filterContainer";
Mscrm.ActionHubControl.ActionHubControlConstants.defaultErrorId = "defaultError";
Mscrm.ActionHubControl.ActionHubControlConstants.showLoadingIconId = "actionLoadingProgress";
Mscrm.ActionHubControl.ActionHubControlConstants.pendingCards = "Pending";
Mscrm.ActionHubControl.ActionHubControlConstants.refreshCards = "imgRefreshWall";
Mscrm.ActionHubControl.ActionHubControlConstants.customErrorMessageForActionHubId = "customErrorMessageForActionHub";
Mscrm.ActionHubControl.ActionHubControlConstants.errorAPIFailureImgId = "imgAPIFailure";
Mscrm.ActionHubControl.ActionHubControlConstants.actionPreviewId = "delveActionHubPreview";
Mscrm.ActionHubControl.ActionHubControlConstants.enterKey = 13;
Mscrm.ActionHubControl.ActionHubControlConstants.leftMouseButton = 1;
Mscrm.ActionHubControl.ActionHubControlConstants.maxParentSearchLevel = 15;
Mscrm.ActionHubControl.ActionHubControlConstants.noRecordActionImgId = "imgNoRecordForActionHub";
Mscrm.ActionHubControl.ActionHubControlWall.actionCardEntities = null;
Mscrm.ActionHubControl.ActionHubControlWall.$J = false;
Mscrm.ActionHubControl.ActionHubControlWall.$P = false;
Mscrm.ActionHubControl.ActionHubControlWall.$1 = null;
Mscrm.ActionHubControl.ActionHubControlWall.$7 = [];
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$3 = null;
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$M = false;
Mscrm.ActionHubControl.GridDataToActionHubSectionConvertor.$N = null