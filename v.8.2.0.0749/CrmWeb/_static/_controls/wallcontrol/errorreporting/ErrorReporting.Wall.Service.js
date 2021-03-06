Type.registerNamespace("Wall.Service");
Wall.Service.WallType = function() {};
Wall.Service.WallService = function(clientGlobalContext, entityTypeCode, entityId) {
    this.$1_0 = {};
    this.$5_0 = {};
    this.$2_0 = new CrmSoapServiceProxy.CrmSoapService(clientGlobalContext);
    this.$6_0 = entityTypeCode;
    this.$4_0 = entityId;
    this.$F_0 = new Wall.Service.WallServiceFactory(clientGlobalContext, null)
};
Wall.Service.WallService.$3 = function($p0) { return !$p0 || typeof $p0 === "undefined" };
Wall.Service.WallService.$I = function($p0) {
    var $v_0 = new Sales.Common.Framework.List$1.$$($p0);
    return $v_0 = new $v_0
};
Wall.Service.WallService.prototype = {
    $2_0: null,
    $F_0: null,
    $6_0: 0,
    $4_0: null,
    $C_0: null,
    $B_0: null,
    get_wallType: function() { return !this.$4_0 ? 0 : 1 },
    get_isAsync: function() { return this.$2_0.get_isAsync() },
    set_isAsync: function(value) {
        this.$2_0.set_isAsync(value);
        return value
    },
    retrievePosts: function(retrievePostsRequest, retrievePostsCallback) {
        if (retrievePostsRequest.get_pageNumber() === 1) this.$1_0 = {};
        var $v_0 = this.$7_0(), $$t_5 = this, $$t_6 = this;
        this.$2_0.retrieveAlertWall(!this.get_wallType(),
            $v_0,
            retrievePostsRequest,
            this.get_wallType() === 1 ? this.$4_0 : null,
            this.get_wallType() === 1 ? this.$6_0 : -1,
            function($p1_0) { retrievePostsCallback($$t_5.$J_0($p1_0, $v_0, retrievePostsRequest.get_pageNumber())) },
            function($p1_0) { retrievePostsCallback($$t_6.$H_0($p1_0, $v_0, 0)) })
    },
    retrieveAllPosts: function(retrievePostsRequest, retrievePostsCallback) {
        if (retrievePostsRequest.get_pageNumber() === 1) this.$1_0 = {};
        var $v_0 = this.$7_0(), $$t_5 = this, $$t_6 = this;
        this.$2_0.retrieveAllAlertWall(!this.get_wallType(),
            $v_0,
            retrievePostsRequest,
            this.get_wallType() === 1 ? this.$4_0 : null,
            this.get_wallType() === 1 ? this.$6_0 : -1,
            function($p1_0) { retrievePostsCallback($$t_5.$J_0($p1_0, $v_0, retrievePostsRequest.get_pageNumber())) },
            function($p1_0) { retrievePostsCallback($$t_6.$H_0($p1_0, $v_0, 0)) })
    },
    $J_0: function($p0, $p1, $p2) {
        var $v_0 = new Wall.Service.Messages.RetrieveTracesResponse;
        $v_0.$9_2 = $p1;
        if (!$p0 || !$p0.entities || !$p0.entities.length) $v_0.set_posts(new Array(0));
        else {
            $v_0.set_posts(Wall.Service.Convertors.TraceConvertor.serviceToWallCollection($p0.entities));
            $v_0.set_morePosts($p0.moreRecords);
            $v_0.set_pagingCookie($p0.pagingCookie);
            if ($p2 === 1 && $v_0.get_posts().length > 0) {
                this.$C_0 = $v_0.get_posts()[0].get_createdOn();
                this.$B_0 = $v_0.get_posts()[0].get_postId()
            }
            var $$t_6 = this;
            Array.forEach($v_0.get_posts(),
                function($p1_0) {
                    var $v_1 = $p1_0;
                    $v_1.set_text($$t_6.formatPostTextForRendering($v_1.get_text()));
                    if ($v_1.get_parentId() && $v_1.get_parentId().get_id()) {
                        if (!($v_1.get_parentId()
                            .get_id() in
                            $$t_6.$1_0)) $$t_6.$1_0[$v_1.get_parentId().get_id()] = Wall.Service.WallService.$I(String);
                        $$t_6.$1_0[$v_1.get_parentId().get_id()].add($v_1.get_postId())
                    }
                })
        }
        return $v_0
    },
    retrieveWallFilters: function(filterType, context, retrieveWallFiltersCallback) {
        var $v_0 = new Wall.Service.Messages.RetrieveWallFiltersResponse;
        $v_0.set_wallFilters(new Array(0));
        return
    },
    $H_0: function($p0, $p1, $p2) {
        var $v_0 = new Wall.Service.Messages.RetrieveTracesResponse;
        $v_0.set_errorMessage(this.$E_0($p0, $p2));
        $v_0.$9_2 = $p1;
        return $v_0
    },
    retrieveComments: function(retrieveCommentsRequest, retrieveCommentsCallback) { return },
    postMessage: function(post, createPostCallback) { return },
    postComment: function(comment, createCommentCallback) { return },
    getWallActions: function(actionType, context) {
        if (_String.isNullOrEmpty(actionType)) throw Error.create("action type is empty");
        switch (actionType) {
        case "postaction":
            return this.$L_0(context);
        default:
            throw Error.create("invlid action type")
        }
    },
    $L_0: function($p0) {
        if (Wall.Service.WallService.$3($p0)) throw Error.create("context is emtpy");
        var $v_0 = $p0;
        if (Wall.Service.WallService.$3($v_0)) throw Error.create("invalid context type");
        if (_String.isNullOrEmpty($v_0.get_postId()) || $v_0.get_postId().startsWith("temp")) return new Array(0);
        var $v_1 = Wall.Service.WallService.$I(Wall.Service.ObjectModel.WallAction);
        if (!isNullOrEmptyString($v_0.get_serverErrorCode())) {
            $v_1.add(new Wall.Service.ObjectModel
                .WallAction(window.LOCID_TRACE_SHOWERROR_COMMAND,
                    null,
                    null,
                    window.LOCID_TRACE_SHOWERROR_TOOLTIP,
                    true,
                    "showerroraction",
                    null,
                    $v_0,
                    false,
                    "postaction"));
            var $v_2 = new Wall.Service.ObjectModel
                .WallAction(window.LOCID_TRACE_HIDEERROR_COMMAND,
                    null,
                    null,
                    window.LOCID_TRACE_HIDEERROR_TOOLTIP,
                    true,
                    "hideerroraction",
                    null,
                    $v_0,
                    false,
                    "postaction");
            $v_2.set_isVisible(false);
            $v_1.add($v_2)
        }
        if (!IsNull($v_0.get_actions()) && $v_0.get_actions().length > 0)
            for (var $$arr_4 = $v_0
                         .get_actions(),
                $$len_5 = $$arr_4.length,
                $$idx_6 = 0;
                $$idx_6 < $$len_5;
                ++$$idx_6) {
                var $v_3 = $$arr_4[$$idx_6];
                $v_1.add(Wall.Service.WallActions.WallActionFactory.getWallAction($v_3, $v_0))
            }
        else
            $v_1.add(new Wall.Service.ObjectModel
                .WallAction(null,
                    window.CDNURL + "/_imgs/wallcontrol/actions_delete.png",
                    window.CDNURL + "/_imgs/wallcontrol/actions_delete.png",
                    window.LOCID_TRACE_DELETE_TOOLTIP,
                    true,
                    "deleteaction",
                    null,
                    $v_0,
                    false,
                    "postaction"));
        return $v_1.toArray()
    },
    getWallActionsAsync: function(actionType, context, getWallActionsSuccessCallback, getWallActionsFailureCallback) {
        throw Error.create("not implemented")
    },
    getWallFilters: function(filterType, context) {
        var $v_0 = new Array(0);
        if (filterType === "TraceLevelFilter") {
            var $v_1 = this.$7_0();
            $v_0[$v_0.length] = Wall.Service.ObjectModel.WallFilter
                .create(window.LOCID_TRACE_ALL,
                    window.LOCID_TRACE_ALL_FILTER_TOOLTIP,
                    "tracelevelfilteraction",
                    null,
                    0,
                    "TraceLevelFilter",
                    !$v_1);
            $v_0[$v_0.length] = Wall.Service.ObjectModel.WallFilter
                .create(window.LOCID_TRACE_ERROR,
                    window.LOCID_TRACE_ERR_FILTER_TOOLTIP,
                    "tracelevelfilteraction",
                    null,
                    3,
                    "TraceLevelFilter",
                    $v_1 === 3);
            $v_0[$v_0.length] = Wall.Service.ObjectModel.WallFilter
                .create(window.LOCID_TRACE_WARNING,
                    window.LOCID_TRACE_WARN_FILTER_TOOLTIP,
                    "tracelevelfilteraction",
                    null,
                    2,
                    "TraceLevelFilter",
                    $v_1 === 2);
            $v_0[$v_0.length] = Wall.Service.ObjectModel.WallFilter
                .create(window.LOCID_TRACE_INFORMATION,
                    window.LOCID_TRACE_INFO_FILTER_TOOLTIP,
                    "tracelevelfilteraction",
                    null,
                    1,
                    "TraceLevelFilter",
                    $v_1 === 1)
        }
        return $v_0
    },
    $7_0: function() {
        var $v_0 = 0;
        if ("TraceLevelFilter" in this.$5_0) {
            var $v_1 = this.$5_0["TraceLevelFilter"];
            $v_0 = $v_1.get_context()
        }
        return $v_0
    },
    selectWallFilter: function(wallFilter) {
        if (!IsNull(wallFilter)) this.$5_0[wallFilter.get_filterType()] = wallFilter
    },
    getWallServiceFactory: function() { return this.$F_0 },
    $E_0: function($p0, $p1) {
        var $v_0 = window.LOCID_TRACE_ERROR_MESSAGE;
        if (!Wall.Service.WallService.$3($p0.get_organizationServiceFault()))
            switch ($p0.get_organizationServiceFault().get_errorCode()) {
            case -2147220960:
            case -2147187962:
                $v_0 = window.LOCID_TRACE_PRIVILEGE_ERROR;
                break
            }
        return $v_0
    },
    deletePost: function(post, deletePostCallback) {
        var $v_0 = new Wall.Service.Messages.DeletePostResponse, $$t_5 = this, $$t_6 = this;
        this.$2_0.deleteEntity(post.get_postId(), "tracelog").then(function($p1_0) { deletePostCallback($v_0) },
            function($p1_0) {
                (Wall.Service.WallService.$3($p1_0.get_organizationServiceFault()) ||
                        Wall.Service.WallService.$3($p1_0.get_organizationServiceFault().get_errorCode()) ||
                        $p1_0.get_organizationServiceFault().get_errorCode() !== -2147220969) &&
                    $v_0.set_errorMessage($$t_6.$E_0($p1_0, 1));
                deletePostCallback($v_0)
            })
    },
    getChildIdsForParentTrace: function(parentTraceId) {
        return parentTraceId in this.$1_0 ? this.$1_0[parentTraceId] : null
    },
    removeTraceIdFromParentCollection: function(traceId) { delete this.$1_0[traceId] },
    deleteComment: function(comment, deleteCommentCallback) { return },
    formatPostTextForRendering: function(postText) {
        return Wall.Control.Utils.WallUtils.formatTextForRendering(postText)
    },
    formatCommentTextForRendering: function(commentText) {
        return Wall.Control.Utils.WallUtils.formatTextForRendering(commentText)
    },
    getSelectedWallFilter: function(filterType) {
        if (!(filterType in this.$5_0)) return null;
        return this.$5_0[filterType]
    },
    setDefaultFilter: function(wallFilter, setDefaultFilterCallback) { throw Error.create("NotImplementedException") },
    updateLastAlertsAccessTime: function() {
        if (!this.get_wallType() && 0 === this.$7_0()) {
            var $v_0 = Wall.Control.Utils.RemoteCommandFactory
                .createRemoteCommand("MessageBar", "UpdateLastAlertsAccessTime", null);
            $v_0.Execute(null)
        }
    },
    deleteAllTraces: function(callback) { this.$G_0(1, null, true, false, callback) },
    $G_0: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = Wall.Control.Utils.RemoteCommandFactory.createRemoteCommand("TraceLog", "DeleteAllTraces", null);
        $v_0.SetParameter("recordDeleteCount", 200);
        $v_0.SetParameter("pageNumber", $p0);
        $v_0.SetParameter("cookie", $p1);
        $v_0.SetParameter("level", this.$7_0());
        !Wall.Service.WallService.$3(this.$C_0) &&
            $v_0.SetParameter("fromDateTime",
                Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.toCrmDateTimeStringWithTimeZone(this.$C_0));
        !Wall.Service.WallService.$3(this.$B_0) && $v_0.SetParameter("firstTraceGuid", this.$B_0);
        $v_0.SetParameter("deleteStarted", $p3);
        if (!this.get_wallType()) $v_0.SetParameter("isMainAlertWall", true);
        else {
            $v_0.SetParameter("isMainAlertWall", false);
            $v_0.SetParameter("entityTypeCode", this.$6_0);
            $v_0.SetParameter("entityId", this.$4_0)
        }
        var $$t_B = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            try {
                if (!$p1_0 || !$p1_0.Success) $p4(false);
                else {
                    var $v_1 = XUI.Xml.LoadXml($p1_0.ReturnValue),
                        $v_2 = Boolean.parse(XUI.Xml
                            .GetText(XUI.Xml.SelectSingleNode($v_1, "/result/hasmorerecords", null)));
                    $p2 = $p2 &&
                        Boolean.parse(XUI.Xml.GetText(XUI.Xml
                            .SelectSingleNode($v_1, "/result/allrecordsdeleted", null)));
                    $p1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "/result/cookie", null));
                    $p3 = Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "/result/deleteStarted", null)));
                    if ($v_2) $$t_B.$G_0($p0 + 1, $p1, $p2, $p3, $p4);
                    else $p4($p2)
                }
            } catch ($$e_A) {
                $p4(false)
            }
        })
    },
    update: function(entity, updateCrmEntityCallback) {
        var $v_0 = new Wall.Service.Messages.UpdateCrmEntityResponse, $$t_5 = this, $$t_6 = this;
        this.$2_0.update(entity).then(function($p1_0) { updateCrmEntityCallback($v_0) },
            function($p1_0) {
                (IsNull($p1_0.get_organizationServiceFault()) ||
                        IsNull($p1_0.get_organizationServiceFault().get_errorCode()) ||
                        $p1_0.get_organizationServiceFault().get_errorCode() !== -2147220969) &&
                    $v_0.set_errorMessage($$t_6.$E_0($p1_0, 2));
                updateCrmEntityCallback($v_0)
            })
    }
};
Wall.Service.WallServiceFactory = function(clientContext, regardingEntity) {
    this.$0_0 = new Wall.Service.ObjectModel.EntityReference;
    this.$0_0.set_id(Sales.Common.CrmSoapServiceProxy.Utils.Utils.parseGuid(clientContext.getUserId()));
    this.$0_0.set_logicalName("systemuser");
    this.$0_0.set_name("");
    this.$8_0 = !regardingEntity || typeof regardingEntity === "undefined"
        ? (this.$8_0 = this.$0_0)
        : (this.$8_0 = regardingEntity)
};
Wall.Service.WallServiceFactory.prototype = {
    $0_0: null,
    $8_0: null,
    get_currentUser: function() { return this.$0_0 },
    set_currentUser: function(value) {
        this.$0_0 = value;
        return value
    },
    createPost: function() {
        var $v_0 = new Wall.Service.ObjectModel.Post;
        $v_0.set_createdBy(this.$0_0);
        $v_0.set_deleteEnabled(true);
        $v_0.set_regardingId(this.$8_0);
        return $v_0
    },
    createComment: function() { return null },
    createEntityReference: function() { return new Wall.Service.ObjectModel.EntityReference },
    createRetrievePostsRequest: function() { return new Wall.Service.Messages.RetrievePostsRequest },
    createRetrieveCommentsRequest: function() { return null },
    createRetrieveLikesRequest: function() { return null }
};
Type.registerNamespace("Wall.Service.Convertors");
Wall.Service.Convertors.TraceConvertor = function() {};
Wall.Service.Convertors.TraceConvertor.serviceToWall = function(serviceTrace) {
    var $v_0 = new CrmSoapServiceProxy.ObjectModel.WallTrace;
    $v_0.set_postId(serviceTrace.get_id());
    $v_0.set_text(serviceTrace.get_text());
    $v_0.set_parentId(Wall.Service.Convertors.EntityReferenceConvertor.serviceToWall(serviceTrace.get_parentId()));
    $v_0.set_createdBy(Wall.Service.Convertors.EntityReferenceConvertor.serviceToWall(serviceTrace.get_createdBy()));
    $v_0.set_createdOn(serviceTrace.get_modifiedOn());
    $v_0.set_regardingId(Wall.Service.Convertors.EntityReferenceConvertor
        .serviceToWall(serviceTrace.get_regardingObjectId()));
    $v_0.set_formattedCreatedOn(serviceTrace.get_formattedModifiedOn());
    $v_0.set_level(serviceTrace.get_level());
    $v_0.set_relativeImageUrl(Wall.Service.Convertors.TraceConvertor.$K($v_0.get_regardingId().get_logicalName()));
    $v_0.set_serverErrorCode(serviceTrace.get_serverErrorCode());
    $v_0.set_serverErrorHelpLink(serviceTrace.get_serverErrorHelpLink());
    $v_0.set_actions(Wall.Service.Convertors.TraceConvertor.$M(serviceTrace.get_actionXml()));
    $v_0.set_canBeDeleted(serviceTrace.get_canBeDeleted());
    $v_0.set_errorDetails(serviceTrace.get_errorDetails());
    return $v_0
};
Wall.Service.Convertors.TraceConvertor.$K = function($p0) {
    switch ($p0) {
    case "mailbox":
        return window.CDNURL + "/_imgs/mailbox_small_image.png";
    case "emailserverprofile":
        return window.CDNURL + "/_imgs/emailserverprofile_small_image.png";
    default:
        break
    }
    return null
};
Wall.Service.Convertors.TraceConvertor.serviceToWallCollection = function(serviceTraces) {
    var $v_0 = new Array(0);
    if (!serviceTraces) return $v_0;
    for (var $v_1 = 0;
        $v_1 < serviceTraces.length;
        $v_1++
    ) $v_0[$v_1] = Wall.Service.Convertors.TraceConvertor.serviceToWall(serviceTraces[$v_1]);
    return $v_0
};
Wall.Service.Convertors.TraceConvertor.wallToService = function(wallTrace) {
    var $v_0 = new CrmSoapServiceProxy.ObjectModel.TraceLog;
    $v_0.set_id(wallTrace.get_postId());
    $v_0.set_text(wallTrace.get_text());
    $v_0.set_regardingObjectId(Wall.Service.Convertors.EntityReferenceConvertor
        .wallToService(wallTrace.get_regardingId()));
    return $v_0
};
Wall.Service.Convertors.TraceConvertor.wallToServiceCollection = function(wallTraces) {
    var $v_0 = new Array(0);
    if (!wallTraces) return $v_0;
    for (var $v_1 = 0; $v_1 < wallTraces.length; $v_1++)
        $v_0[$v_1] = Wall.Service.Convertors.TraceConvertor.wallToService(wallTraces[$v_1]);
    return $v_0
};
Wall.Service.Convertors.TraceConvertor.$M = function($p0) {
    var $v_0 = new Array(0);
    if (!_String.isNullOrEmpty($p0)) {
        var $v_1 = XUI.Xml.LoadXml($p0);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Xml.SelectSingleNode($v_1, "/actions", null),
                $v_3 = XUI.Xml.SelectNodes($v_2, "action", null);
            if (!IsNull($v_3))
                for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                    var $v_5 = $v_3[$v_4];
                    if (!IsNull($v_5)) {
                        var $v_6 = new CrmSoapServiceProxy.ObjectModel.WallTraceAction;
                        if (!IsNull($v_5.attributes)) {
                            var $v_7 = $v_5.attributes.getNamedItem("type");
                            !IsNull($v_7) && $v_6.set_actionType(parseInt($v_7.value));
                            if (!IsNull($v_5.childNodes))
                                for (var $v_8 = 0; $v_8 < $v_5.childNodes.length; $v_8++) {
                                    var $v_9 = $v_5.childNodes[$v_8];
                                    if (!IsNull($v_9)) {
                                        var $v_A = $v_9.attributes.getNamedItem("name");
                                        if (!IsNull($v_A)) $v_6.get_parameters()[$v_A.value] = XUI.Xml.GetText($v_9)
                                    }
                                }
                        }
                        $v_0[$v_4] = $v_6
                    }
                }
        }
    }
    return $v_0
};
Type.registerNamespace("Wall.Service.Messages");
Wall.Service.Messages.RetrieveTracesResponse = function() {
    Wall.Service.Messages.RetrieveTracesResponse.initializeBase(this)
};
Wall.Service.Messages.RetrieveTracesResponse.prototype = {
    $9_2: 0,
    get_traceLevel: function() { return this.$9_2 },
    set_traceLevel: function(value) {
        this.$9_2 = value;
        return value
    }
};
Wall.Service.Messages.UpdateCrmEntityResponse = function() {
    Wall.Service.Messages.UpdateCrmEntityResponse.initializeBase(this)
};
Type.registerNamespace("Wall.Service.Interfaces");
Wall.Service.Interfaces.IUpdateCrmEntityResponse = function() {};
Wall.Service.Interfaces.IUpdateCrmEntityResponse.registerInterface("Wall.Service.Interfaces.IUpdateCrmEntityResponse");
Type.registerNamespace("Wall.Service.WallActions");
Wall.Service.WallActions.WallActionType = function() {};
Wall.Service.WallActions.WallActionType.prototype = { exchangeSyncConfirmAction: 0, exchangeSyncDenyAction: 1 };
Wall.Service.WallActions.WallActionType.registerEnum("Wall.Service.WallActions.WallActionType", false);
Wall.Service.WallActions.ExchangeSyncErrorUserDecision = function() {};
Wall.Service.WallActions.ExchangeSyncErrorUserDecision
    .prototype = { notApplicable: -1, notDecided: 0, confirm: 1, deny: 2 };
Wall.Service.WallActions.ExchangeSyncErrorUserDecision
    .registerEnum("Wall.Service.WallActions.ExchangeSyncErrorUserDecision", false);
Wall.Service.WallActions.WallActionFactory = function() {};
Wall.Service.WallActions.WallActionFactory.getWallAction = function(wallTraceAction, wallTrace) {
    var $v_0 = null;
    switch (wallTraceAction.get_actionType()) {
    case 0:
        $v_0 = new Wall.Service.WallActions
            .WallActionForExchangeSyncError(window.LOCID_TRACE_EX_CONFIRMBUTTONTEXT,
                window.LOCID_TRACE_EX_CONFIRMTOOLTIP,
                "wallactionforexchangesyncerrorconfirmaction",
                wallTraceAction,
                wallTrace);
        break;
    case 1:
        $v_0 = new Wall.Service.WallActions
            .WallActionForExchangeSyncError(window.LOCID_TRACE_EX_DENYBUTTONTEXT,
                window.LOCID_TRACE_EX_DENYTOOLTIP,
                "wallactionforexchangesyncerrordenyaction",
                wallTraceAction,
                wallTrace);
        break;
    default:
        $v_0 = null;
        break
    }
    return $v_0
};
Wall.Service.WallActions
    .WallActionForExchangeSyncError = function(text, toolTip, commandName, wallTraceAction, wallTrace) {
        Wall.Service.WallActions.WallActionForExchangeSyncError
            .initializeBase(this, [text, null, null, toolTip, true, commandName, null, wallTrace, false, commandName]);
        this.$D_2 = wallTraceAction.get_actionType();
        this.$A_2 = wallTraceAction.get_parameters()["oid"]
    };
Wall.Service.WallActions.WallActionForExchangeSyncError.prototype = {
    $D_2: 0,
    $A_2: null,
    execute: function(wallService, wall) {
        if (!IsNull(this.$A_2)) {
            var $v_0 = new CrmSoapServiceProxy.ObjectModel.ExchangeSyncIdMapping;
            $v_0.set_id(this.$A_2);
            if (!this.$D_2) $v_0.set_userDecision(1);
            else this.$D_2 === 1 && $v_0.set_userDecision(2);
            var $$t_4 = this;
            wallService.update($v_0,
                function($p1_0) {
                    if ($p1_0.get_isSucceeded()) wall.deletePost($$t_4.get_context().get_postId());
                    else $$t_4.processError($p1_0)
                })
        }
    },
    processError: function(response) { alert(response.get_errorMessage()) }
};
Wall.Service.WallActions
    .WallActionForTraceRecord = function(text,
        iconUrl,
        disabledIconUrl,
        toolTip,
        enabled,
        commandName,
        callback,
        context,
        isPopupAction,
        actionType) {
        Wall.Service.WallActions.WallActionForTraceRecord
            .initializeBase(this,
            [
                text, iconUrl, disabledIconUrl, toolTip, enabled, commandName, callback, context, isPopupAction,
                actionType
            ])
    };
Wall.Service.WallActions.WallActionForTraceRecord.prototype = { execute: function(wallService, wall) {} };
Wall.Service.WallType.registerClass("Wall.Service.WallType");
Wall.Service.WallService.registerClass("Wall.Service.WallService", null, Wall.Interfaces.IWallService);
Wall.Service.WallServiceFactory.registerClass("Wall.Service.WallServiceFactory",
    null,
    Wall.Interfaces.IWallServiceFactory);
Wall.Service.Convertors.TraceConvertor.registerClass("Wall.Service.Convertors.TraceConvertor");
Wall.Service.Messages.RetrieveTracesResponse.registerClass("Wall.Service.Messages.RetrieveTracesResponse",
    Wall.Service.Messages.RetrievePostsBaseResponse,
    Wall.Interfaces.IRetrievePostsResponse);
Wall.Service.Messages.UpdateCrmEntityResponse.registerClass("Wall.Service.Messages.UpdateCrmEntityResponse",
    Wall.Service.Messages.BaseResponse,
    Wall.Service.Interfaces.IUpdateCrmEntityResponse);
Wall.Service.WallActions.WallActionFactory.registerClass("Wall.Service.WallActions.WallActionFactory");
Wall.Service.WallActions.WallActionForTraceRecord
    .registerClass("Wall.Service.WallActions.WallActionForTraceRecord", Wall.Service.ObjectModel.WallAction);
Wall.Service.WallActions.WallActionForExchangeSyncError
    .registerClass("Wall.Service.WallActions.WallActionForExchangeSyncError",
        Wall.Service.WallActions.WallActionForTraceRecord);
Wall.Service.WallType.mainAlertPage = 0;
Wall.Service.WallType.recordPage = 1;
Wall.Service.WallService.traceLevelFilterType = "TraceLevelFilter";
Wall.Service.WallActions.WallActionFactory
    .wallActionForExchangeSyncErrorConfirmActionCommandName = "wallactionforexchangesyncerrorconfirmaction";
Wall.Service.WallActions.WallActionFactory
    .wallActionForExchangeSyncErrorDenyActionCommandName = "wallactionforexchangesyncerrordenyaction"