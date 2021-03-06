Type.registerNamespace("ErrorReporting.UI");
ErrorReporting.UI.ErrorReportingWall = function(rootContainer,
    wallService,
    headerId,
    postTemplateId,
    commentTemplateId,
    wallContainerId,
    postTextBoxId,
    progressTemplateId,
    emptyTemplateId,
    showMoreLinkTemplateId,
    deleteAllProgressTemplateId) {
    ErrorReporting.UI.ErrorReportingWall.initializeBase(this,
    [
        rootContainer, wallService, headerId, postTemplateId, commentTemplateId, wallContainerId, postTextBoxId,
        progressTemplateId, emptyTemplateId, showMoreLinkTemplateId
    ]);
    this.$4_1 = $P_CRM($get(deleteAllProgressTemplateId))
};
ErrorReporting.UI.ErrorReportingWall.prototype = {
    $4_1: null,
    setProgressState: function() {
        this.progressTemplatejQuery.css("margin-bottom", "0");
        this.$4_1.hide()
    },
    setDataState: function() {
        Wall.UI.Wall.prototype.setDataState.call(this);
        this.progressTemplatejQuery.css("margin-bottom", "0");
        this.$4_1.hide()
    },
    setEmptyState: function() {
        Wall.UI.Wall.prototype.setEmptyState.call(this);
        this.progressTemplatejQuery.css("margin-bottom", "0");
        this.$4_1.hide()
    },
    setErrorState: function() {
        Wall.UI.Wall.prototype.setErrorState.call(this);
        this.progressTemplatejQuery.css("margin-bottom", "0");
        this.$4_1.hide()
    },
    $D_1: function() {
        this.set_state(2);
        this.wallContainerjQuery.hide();
        this.progressTemplatejQuery.hide();
        var $v_0 = this.getAvailableWallHeight(), $v_1 = this.wallContainerjQuery.height();
        $v_1 > $v_0 && this.$4_1.css("margin-bottom", ($v_1 - $v_0).toString() + "px");
        this.$4_1.height($v_0).show()
    },
    deleteAllTraces: function() {
        if (this.get_displayedPosts().length > 0) {
            Wall.UI.Wall.cleanupWall(this.wallContainerjQuery);
            this.set_displayedPosts(new Array(0));
            this.$D_1();
            var $$t_1 = this;
            this.get_wallService().deleteAllTraces(function($p1_0) {
                if ($p1_0) $$t_1.setEmptyState();
                else alert(window.LOCID_DELETE_ALL_FAIL_MESSAGE);
                $$t_1.refreshAll()
            })
        }
    },
    isWallUnderProgressState: function() { return this.get_state() === 2 },
    isAnyTraceOnWall: function() { return this.get_state() === 1 },
    showError: function(postId) {
        this.wallContainerjQuery.find(String.format("#{0}_detail", postId)).show();
        this.wallContainerjQuery.find(String.format("#{0}_{1}", "showerroraction", postId)).addClass("hideAction");
        this.wallContainerjQuery.find(String.format("#{0}_{1}", "hideerroraction", postId)).removeClass("hideAction")
    },
    hideError: function(postId) {
        this.wallContainerjQuery.find(String.format("#{0}_detail", postId)).hide();
        this.wallContainerjQuery.find(String.format("#{0}_{1}", "showerroraction", postId)).removeClass("hideAction");
        this.wallContainerjQuery.find(String.format("#{0}_{1}", "hideerroraction", postId)).addClass("hideAction")
    }
};

function applyRtlStyle() {
    if (isRTL()) {
        var $v_0 = $P_CRM(document.body);
        !$v_0.hasClass("rtl") && $v_0.addClass("rtl")
    }
}

function addBrowserTweekStyles() {
    var $v_0 = Wall.Control.Utils.Browser.getCurrentBrowser();
    if ($v_0.get_agent() === 1 && $v_0.get_version() === 7 && $v_0.get_documentMode() <= 7) {
        var $v_1 = $P_CRM(document.body);
        !$v_1.hasClass("ie7") && $v_1.addClass("ie7")
    }
}

function applyHighContrastStyle(imageUrl) {
    if (detectHighContrastMode(imageUrl)) {
        var $v_0 = $P_CRM(document.body);
        !$v_0.hasClass("highContrast") && $v_0.addClass("highContrast")
    }
}

function generateFwdLink(linkId) {
    var $v_0 = GetGlobalContext().getUserLcid(), $v_1 = "0x" + $v_0.toString(16);
    return String.format("http://go.microsoft.com/fwlink/?LinkID={0}&clcid={1}", linkId, $v_1)
}

function addTearOffStyle() {
    var $v_0 = "_hc", $v_1 = parseQueryString(window.parent.location);
    if ($v_0 in $v_1 && ($v_1[$v_0] === "true" || $v_1[$v_0] === "1")) {
        var $v_2 = $P_CRM(document.body);
        !$v_2.hasClass("tornOffPage") && $v_2.addClass("tornOffPage")
    }
}

function addBrowserSpecificStyle() {
    var $v_0 = Wall.Control.Utils.Browser.getCurrentBrowser(),
        $v_1 = $v_0.get_name().toLowerCase(),
        $v_2 = $P_CRM(document.body);
    !$v_2.hasClass($v_1) && $v_2.addClass($v_1);
    if ($v_0.get_isMobile()) !$v_2.hasClass("mobile") && $v_2.addClass("mobile")
}

ErrorReporting.UI.WallUtils = function() {};
ErrorReporting.UI.WallUtils.getWallActions = function(wall, actionType, context) {
    if (_Type.hasMethod(wall, "getWallActions")) return wall.getWallActions(actionType, context);
    else if (_Type.hasField(wall, "parent")) {
        wall = _Type.getField(wall, "parent");
        if (wall) return ErrorReporting.UI.WallUtils.getWallActions(wall, actionType, context)
    }
    return new Array(0)
};
ErrorReporting.UI.WallUtils.formatDate = function(dateToFormat, formattedDate) {
    return Wall.Control.Utils.DateUtils.formatDateAsReadableString(dateToFormat, formattedDate)
};
ErrorReporting.UI.WallUtils
    .formatNameWithWindowOpenLink = function(entityReference, attributes, userNameMaxDisplayLength) {
        var $v_0 = 25;
        if (ErrorReporting.UI.WallUtils
            .$1(entityReference) ||
            _String.isNullOrEmpty(entityReference.get_name())) return "";
        if (!attributes) attributes = {};
        if (ErrorReporting.UI.WallUtils.$1(userNameMaxDisplayLength)) userNameMaxDisplayLength = $v_0;
        var $v_1;
        if (entityReference.get_name()
            .length <
            userNameMaxDisplayLength)
            $v_1 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode(entityReference.get_name());
        else
            $v_1 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
                .htmlEncode(entityReference.get_name().substr(0, userNameMaxDisplayLength) + "...");
        if (!("title" in attributes)) attributes["title"] = entityReference.get_name();
        return ErrorReporting.UI.WallUtils.createWindowOpenLink(entityReference, $v_1, attributes)
    };
ErrorReporting.UI.WallUtils.createWindowOpenLink = function(entityReference, content, attributes) {
    var $v_0 = "";
    if (!ErrorReporting.UI.WallUtils.$1(attributes)) {
        var $$dict_5 = attributes;
        for (var $$key_6 in $$dict_5) {
            var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
            $v_0 += String.format(' {0}="{1}" ',
                $v_2.key,
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode($v_2.value))
        }
    }
    var $v_1 = ErrorReporting.UI.WallUtils.convertETNtoETC(entityReference.get_logicalName());
    if ($v_1 > 0)
        return String.format("<a href='#' onclick=\"{4}({0},'{1}'); return false;\" {3} >{2}</a>",
            $v_1,
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(entityReference.get_id()),
            content,
            $v_0,
            "Wall.Control.Utils.WindowUtils.openObject");
    return String
        .format("<a href=\"#\" onclick=\"{4}('../../../main.aspx?etn={0}&pagetype=entityrecord&id={1}', '_blank', 780, 600,null); return false;\" {3} >{2}</a>", Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(entityReference.get_logicalName()), Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(entityReference.get_id()), content, $v_0, "Wall.Control.Utils.WindowUtils.openWindow")
};
ErrorReporting.UI.WallUtils.convertETNtoETC = function(entityLogicalName) {
    switch (entityLogicalName) {
    case "email":
        return 4202;
    case "mailbox":
        return 9606;
    case "emailserverprofile":
        return 9605;
    default:
        return -1
    }
};
ErrorReporting.UI.WallUtils.getWallCellWidth = function() {
    var $v_0 = document.body.clientWidth > 883 ? 649 : document.body.clientWidth - 234;
    if ($v_0 < 470) $v_0 = 470;
    return $v_0 + "px"
};
ErrorReporting.UI.WallUtils.getWallCellWidthNoUserProfile = function() {
    var $v_0 = document.body.clientWidth > 883 ? 649 : document.body.clientWidth;
    if ($v_0 < 470) $v_0 = 470;
    return $v_0 + "px"
};
ErrorReporting.UI.WallUtils.applyDocumentStyles = function() {
    applyRtlStyle();
    addBrowserTweekStyles();
    applyHighContrastStyle(window.CDNURL + "/_imgs/wallcontrol/refresh.png");
    addTearOffStyle();
    addBrowserSpecificStyle()
};
ErrorReporting.UI.WallUtils.openTearOffWall = function() {
    var $v_0 = "TearWall", $v_1 = "";
    if (!ErrorReporting.UI.WallUtils.$1(Xrm.Page.data)) $v_1 = Xrm.Page.data.entity.getId();
    var $v_2 = "/_root/tracewall.aspx";
    if (!Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty($v_1)) {
        var $v_7 = Xrm.Page.data.entity.getEntityName(), $v_8 = Xrm.Internal.getEntityCode($v_7);
        $v_2 += "?etc=" +
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode($v_8.toString()) +
            "&id=" +
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode($v_1)
    }
    var $v_3 = GetGlobalContext(), $v_4 = $v_3.getClientUrl() + $v_2, $v_5;
    if (!ErrorReporting.UI.WallUtils
        .$1($v_3) &&
        !ErrorReporting.UI.WallUtils.$1($v_3.getOrgUniqueName())) $v_5 = $v_3.getOrgUniqueName() + $v_0;
    else $v_5 = $v_0;
    var $v_6 =
        "location=1,menubar=0,status=0,titlebar=0,toolbar=0,fullscreen=0,width=780,height=600,resizable=1,scrollbars=1";
    window.open($v_4, $v_5, $v_6)
};
ErrorReporting.UI.WallUtils
    .formatEntityIconImageWithWindowOpenLink = function(entityReference, relativeEntityImageUrl, traceLevel) {
        if (ErrorReporting.UI.WallUtils.$1(entityReference)) return "";
        var $v_0 = ErrorReporting.UI.WallUtils.$C(entityReference.get_logicalName(),
                "ribbon32",
                relativeEntityImageUrl,
                traceLevel),
            $v_1 = {};
        $v_1["tabindex"] = "-1";
        return ErrorReporting.UI.WallUtils.createWindowOpenLink(entityReference, $v_0, $v_1)
    };
ErrorReporting.UI.WallUtils.$C = function($p0, $p1, $p2, $p3) {
    if (!ErrorReporting.UI.WallUtils.$1(ErrorReporting.UI.WallUtils.$A($p3))) {
        var $v_0 = $p0 === "mailbox" ? window.LOCID_MAILBOX_TOOLTIP : window.LOCID_EMAIL_SERVER_TOOLTIP;
        return String.format('<img alt="{0}" title="{0}" src="{1}" style="background-image:url(\'{2}\');"/>',
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode($v_0),
            ErrorReporting.UI.WallUtils.$A($p3),
            ErrorReporting.UI.WallUtils.$9($p0, $p1, $p2))
    } else
        return String.format('<img alt="{0}" src="{1}"/>',
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode($p0),
            ErrorReporting.UI.WallUtils.$9($p0, $p1, $p2))
};
ErrorReporting.UI.WallUtils.$9 = function($p0, $p1, $p2) {
    if (!ErrorReporting.UI.WallUtils.$1($p2) && $p2.trim().length > 0) return $p2;
    else
        return String.format("{1}/_Common/icon.aspx?etn={0}&iconType={2}&cache=1",
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode($p0),
            GetGlobalContext().getClientUrl(),
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode($p1))
};
ErrorReporting.UI.WallUtils.$A = function($p0) {
    switch ($p0) {
    case 3:
        return window.CDNURL + "/_imgs/error_small_image.png";
    case 2:
        return window.CDNURL + "/_imgs/alert_small_image.png";
    case 1:
        return window.CDNURL + "/_imgs/info_small_image.png";
    default:
        return null
    }
};
ErrorReporting.UI.WallUtils.$1 = function($p0) { return !$p0 || typeof $p0 === "undefined" };
ErrorReporting.UI.WallCommands = function() {};
ErrorReporting.UI.WallCommandDispatcher = function(wallElementId, wall, wallService) {
    this.$B_0 = $P_CRM("#" + wallElementId);
    this.$0_0 = wall;
    this.$2_0 = wallService
};
ErrorReporting.UI.WallCommandDispatcher.prototype = {
    $B_0: null,
    $0_0: null,
    $2_0: null,
    dispatchCommand: function(commandName, parameters) {
        if (_String.isNullOrEmpty(commandName)) throw Error.create("commandName is undefined");
        commandName = commandName.toLowerCase();
        switch (commandName) {
        case "refreshall":
            if (!this.$0_0.isWallUnderProgressState()) {
                this.$0_0.refreshAll();
                this.$2_0.updateLastAlertsAccessTime()
            }
            break;
        case "fetchall":
            if (!this.$0_0.isWallUnderProgressState()) {
                this.$0_0.fetchAll();
                this.$2_0.updateLastAlertsAccessTime()
            }
            break;
        case "deleteaction":
            var $v_0 = false;
            if (!this.$2_0.get_wallType()) $v_0 = confirm(window.LOCID_MAIN_WALL_DELETE_CONFIRM);
            else $v_0 = confirm(window.LOCID_RECORD_WALL_DELETE_CONFIRM);
            if ($v_0) {
                var $v_6 = parameters, $v_7 = $v_6.get_context().get_postId();
                this.$0_0.deletePost($v_7)
            }
            break;
        case "tracelevelfilteraction":
            var $v_1 = parameters;
            this.$2_0.selectWallFilter($v_1);
            this.$0_0.refreshAll();
            this.$0_0.refreshWallFilter("TraceLevelFilter");
            break;
        case "deleteallaction":
            this.$0_0.isAnyTraceOnWall() && confirm(window.LOCID_DELETE_ALL_CONFIRM) && this.$0_0.deleteAllTraces();
            break;
        case "tearoff":
            ErrorReporting.UI.WallUtils.openTearOffWall();
            break;
        case "showerroraction":
            var $v_2 = parameters, $v_3 = $v_2.get_context().get_postId();
            this.$0_0.showError($v_3);
            break;
        case "hideerroraction":
            var $v_4 = parameters, $v_5 = $v_4.get_context().get_postId();
            this.$0_0.hideError($v_5);
            break;
        default:
            if (Wall.Service.WallActions.WallActionForTraceRecord.isInstanceOfType(parameters)) {
                var $v_8 = parameters;
                !IsNull($v_8) && $v_8.execute(this.$2_0, this.$0_0);
                break
            } else throw Error.create("invalid commandName")
        }
    }
};
ErrorReporting.UI.WallPage = function() {
    this.$7_0 = new ErrorReporting.UI.WallPageQueryString(window.location);
    var $v_0 = GetGlobalContext();
    this.$6_0 = $P_CRM("#wall");
    this.$6_0.addClass("wall");
    this.$2_0 = new Wall.Service.WallService($v_0, this.$7_0.get_etc(), this.$7_0.get_id());
    this.$0_0 = new ErrorReporting.UI.ErrorReportingWall(this.$6_0,
        this.$2_0,
        "header",
        "postTemplate",
        "commentTemplate",
        "wallContainer",
        String.format("#{0}_notesTextBox", "createNote"),
        "progressTemplate",
        "firstRunContent",
        "showMoreLinkTemplate",
        "deleteAllProgressTemplate");
    this.$0_0.set_pageSize(10);
    var $v_1 = $P_CRM($get("wallContainer")), $$t_C = this;
    this.$0_0.add_postsRefreshed(function($p1_0, $p1_1) {
        if ($p1_1.get_posts().length > 0) var $v_2 = Wall.Control.Utils.WallUtils.mapPostsTojQueryIds($p1_1.get_posts())
    });
    var $$t_D = this;
    this.$0_0.add_filtersRefreshed(function($p1_0, $p1_1) {
        if ($$t_D.$8_0) {
            $$t_D.$0_0.refreshAll();
            $$t_D.$8_0 = false
        }
    });
    var $$t_E = this;
    this.$0_0.add_postDeleted(function($p1_0, $p1_1) {
        if ($p1_1.get_postId()) {
            var $v_3 = $$t_E.$2_0.getChildIdsForParentTrace($p1_1.get_postId());
            if ($v_3) {
                var $v_4 = $v_3.toArray();
                Array.forEach($v_4, function($p2_0) { $$t_E.$0_0.removePost($p2_0, 0) });
                $$t_E.$2_0.removeTraceIdFromParentCollection($p1_1.get_postId())
            }
        }
    });
    this.$0_0.refreshWallFilters()
};
ErrorReporting.UI.WallPage.prototype = {
    $6_0: null,
    $7_0: null,
    $0_0: null,
    $2_0: null,
    $8_0: true,
    get_wallService: function() { return this.$2_0 },
    get_wall: function() { return this.$0_0 }
};
ErrorReporting.UI.WallPageQueryString = function(windowLocation) {
    this.$3_0 = parseQueryString(windowLocation);
    this.$5_0 = !ErrorReporting.UI.WallUtils.$1(this.$3_0) &&
        _Dictionary.count(this.$3_0) > 0 &&
        !ErrorReporting.UI.WallUtils.$1(this.$3_0["id"])
};
ErrorReporting.UI.WallPageQueryString.prototype = {
    $3_0: null,
    $5_0: false,
    get_isQueryStringSet: function() { return this.$5_0 },
    get_etc: function() {
        return this.$5_0 && !ErrorReporting.UI.WallUtils.$1(this.$3_0["etc"]) ? parseInt(this.$3_0["etc"]) : -1
    },
    get_id: function() {
        if (!this.$5_0 || ErrorReporting.UI.WallUtils.$1(this.$3_0["id"])) return null;
        var $v_0 = this.$3_0["id"];
        return Sales.Common.CrmSoapServiceProxy.Utils.Utils.parseGuid($v_0)
    }
};
ErrorReporting.UI.ErrorReportingWall.registerClass("ErrorReporting.UI.ErrorReportingWall", Wall.UI.Wall);
ErrorReporting.UI.WallUtils.registerClass("ErrorReporting.UI.WallUtils");
ErrorReporting.UI.WallCommands.registerClass("ErrorReporting.UI.WallCommands");
ErrorReporting.UI.WallCommandDispatcher.registerClass("ErrorReporting.UI.WallCommandDispatcher");
ErrorReporting.UI.WallPage.registerClass("ErrorReporting.UI.WallPage");
ErrorReporting.UI.WallPageQueryString.registerClass("ErrorReporting.UI.WallPageQueryString");
ErrorReporting.UI.ErrorReportingWall.createTemplateId = "createNote";
ErrorReporting.UI.ErrorReportingWall.postTextBoxIdJQueryTemplate = "#{0}_notesTextBox";
ErrorReporting.UI.WallCommands.refreshAllCommandName = "refreshall";
ErrorReporting.UI.WallCommands.fetchAllCommandName = "fetchall";
ErrorReporting.UI.WallCommands.deleteActionCommandName = "deleteaction";
ErrorReporting.UI.WallCommands.showErrorActionCommandName = "showerroraction";
ErrorReporting.UI.WallCommands.hideErrorActionCommandName = "hideerroraction";
ErrorReporting.UI.WallCommands.deleteAllActionCommandName = "deleteallaction";
ErrorReporting.UI.WallCommands.tearOffCommandName = "tearoff";
ErrorReporting.UI.WallCommands.traceLevelFilterCommandName = "tracelevelfilteraction"