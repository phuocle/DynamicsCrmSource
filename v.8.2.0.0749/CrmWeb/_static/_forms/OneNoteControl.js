Type.registerNamespace("Mscrm.OneNoteControl");
Mscrm.OneNoteControl.OneNoteControl = function(element) {
    this.$M_3 = new Sales.Common.Framework.Loaders.ConcurrentContentLoader;
    Mscrm.OneNoteControl.OneNoteControl.initializeBase(this, [element])
};
Mscrm.OneNoteControl.OneNoteControl.$b = function() {
    return isNullOrEmptyString(Xrm.Page.data.entity.getId()) ||
        Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty(Xrm.Page.data.entity.getId())
};
Mscrm.OneNoteControl.OneNoteControl.prototype = {
    $5_3: null,
    $c_3: false,
    $d_3: false,
    $Q_3: false,
    $L_3: null,
    $J_3: null,
    $O_3: null,
    $D_3: false,
    get_wallCommandDispatcher: function() { return this.$5_3 },
    set_wallCommandDispatcher: function(value) {
        this.$5_3 = value;
        return value
    },
    get_masterComponentId: function() { return this.$L_3 },
    set_masterComponentId: function(value) {
        this.$L_3 = value;
        return value
    },
    get_wallContentPageUrl: function() { return this.$O_3 },
    set_wallContentPageUrl: function(value) {
        this.$O_3 = value;
        return value
    },
    initialize: function() {
        this.$c_3 = Mscrm.SessionInfo.isOutlookClient();
        this.$d_3 = !Mscrm.SessionInfo.isOnline();
        this.$o_3();
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        !IsNull(this.get_eventManager()) && this.get_eventManager().subscribeEvent(110, this.get_id());
        this.$f_3(false)
    },
    $o_3: function() {
        var $v_0 = window.self._OneNoteStrings;
        Mscrm.OneNoteControl.OneNoteControl.localizedStrings = $P_CRM.parseJSON($v_0)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 110:
            if (this.$L_3 === sourceComponent.get_id())
                if (IsNull(this.$J_3) || !this.$D_3) this.$f_3(true);
                else {
                    if (Mscrm.OneNoteControl.OneNoteControl.$b()) break;
                    (parameters["tabName"] === "OneNoteTab" && !this.$Q_3 || parameters["tabName"] !== "OneNoteTab") &&
                        this.$U_3()
                }
            break
        }
        return null
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$M_3) && this.$M_3.dispose();
        if (!IsNull(this.$5_3)) {
            this.$5_3.dispose();
            this.$5_3 = null
        }
        this.$J_3 = null;
        $P_CRM(this.get_element()).empty().remove();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $f_3: function($p0) {
        var $$t_5 = this, $$t_6 = this;
        this.$M_3.loadContent(this.$O_3,
            "html",
            function($p1_0) {
                if ($$t_5.get_isDisposed()) return;
                if ($$t_5.$D_3) {
                    $$t_5.$e_3($p0);
                    return
                }
                $$t_5.$J_3 = $p1_0;
                $$t_5.get_element().innerHTML = $p1_0;
                $$t_5.$p_3();
                $$t_5.$n_3();
                $$t_5.$e_3($p0)
            },
            function($p1_0, $p1_1, $p1_2) { alert($p1_2.message) })
    },
    $e_3: function($p0) {
        if (Mscrm.OneNoteControl.OneNoteControl.$b()) this.$Z_3("shownorecordsmessage", null);
        else $p0 && this.$U_3()
    },
    $U_3: function() {
        this.$Z_3("refreshwall", null);
        this.$Q_3 = true
    },
    $p_3: function() { if (!this.$D_3) this.$D_3 = true },
    $Z_3: function($p0, $p1) { this.$5_3.dispatchCommand($p0, $p1) },
    $n_3: function() { this.$5_3 = new Mscrm.OneNoteControl.OneNoteControlWallCommandDispatcher(this) }
};
Mscrm.OneNoteControl.WallCommands = function() {};
Mscrm.OneNoteControl.OneNoteControlWallCommandDispatcher = function(oneNoteControl) {
    this.$3_0 = new Mscrm.OneNoteControl.OneNoteControlWallService;
    this.$2_0 = new Mscrm.OneNoteControl.OneNoteControlWall(this.$3_0, oneNoteControl)
};
Mscrm.OneNoteControl.OneNoteControlWallCommandDispatcher.prototype = {
    $3_0: null,
    $2_0: null,
    dispatchCommand: function(commandName) {
        for (var parameters = [], $$pai_2 = 1;
            $$pai_2 < arguments.length;
            ++$$pai_2
        ) parameters[$$pai_2 - 1] = arguments[$$pai_2];
        if (_String.isNullOrEmpty(commandName)) throw Error.create("Command is undefined");
        commandName = commandName.toLowerCase();
        switch (commandName) {
        case "refreshwall":
            this.$U_0.apply(this, parameters);
            break;
        case "showtext":
            this.$2_0.showText(parameters[0], true);
            break;
        case "clearwall":
            this.$2_0.clearWall();
            break;
        case "showerrorcontent":
            this.$2_0.showError(parameters[0], parameters[1]);
            break;
        case "shownorecordsmessage":
            this.$2_0.showNoRecordsMessage();
            break;
        default:
            throw Error.create("Invalid Command")
        }
    },
    dispose: function() {
        if (!IsNull(this.$2_0)) {
            this.$2_0.dispose();
            this.$2_0 = null
        }
    },
    $U_0: function() {
        for (var $p0 = [], $$pai_1 = 0; $$pai_1 < arguments.length; ++$$pai_1) $p0[$$pai_1] = arguments[$$pai_1];
        this.$2_0.clearWall();
        this.$2_0.$7_0 = 1;
        this.$2_0.refreshWall()
    }
};
Mscrm.OneNoteControl.OneNoteControlConstants = function() {};
Mscrm.OneNoteControl.OneNoteControlWall = function(wallService, oneNoteControl) {
    this.set_wallService(wallService);
    this.$Y_0 = oneNoteControl;
    this.$H_0 = "onenotecontrol_notescontrol_container";
    this.$8_0 = $P_CRM($get(this.$H_0));
    this.$B_0 = this.$8_0.find("#progressMessageForOneNote");
    this.$A_0 = this.$8_0.find("#noRecordForOneNote");
    this.$I_0 = this.$8_0.find("#onenoteControlWallContainer");
    this.$X_0 = this.$8_0.find("#inlineMessageForOneNote");
    this.$N_0 = this.$8_0.find("#customErrorMessageForOneNote");
    this.$W_0 = this.$8_0.find("#defaultError")
};
Mscrm.OneNoteControl.OneNoteControlWall.$l = function($p0) {
    if (IsNull($p0.get_errorMessage())) return null;
    var $v_0 = Mscrm.OneNoteControl.OneNoteControlWall.$r($p0),
        $v_1 = XUI.Xml.LoadXml($v_0),
        $v_2 = XUI.Xml.SelectSingleNode($v_1, "error/description", null);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) return XUI.Xml.GetText($v_2);
    return null
};
Mscrm.OneNoteControl.OneNoteControlWall.$r = function($p0) {
    var $v_0 = $p0.get_errorMessage(), $v_1 = $v_0.indexOf("<?xml version");
    if ($v_1 > 0) $v_0 = $v_0.substr($v_1);
    return $v_0
};
Mscrm.OneNoteControl.OneNoteControlWall.prototype = {
    $3_0: null,
    $Y_0: null,
    $7_0: 1,
    $G_0: 50,
    $V_0: null,
    $8_0: null,
    $B_0: null,
    $A_0: null,
    $I_0: null,
    $X_0: null,
    $N_0: null,
    $W_0: null,
    $R_0: false,
    _disposed: false,
    $H_0: null,
    get_canShowAssociateAction: function() { return this.$R_0 },
    set_canShowAssociateAction: function(value) {
        this.$R_0 = value;
        return value
    },
    get_wallService: function() { return this.$3_0 },
    set_wallService: function(value) {
        this.$3_0 = value;
        return value
    },
    get_pageNumber: function() { return this.$7_0 },
    set_pageNumber: function(value) {
        this.$7_0 = value;
        return value
    },
    get_pageSize: function() { return this.$G_0 },
    set_pageSize: function(value) {
        this.$G_0 = value;
        return value
    },
    refreshWall: function() {
        setPerfMarkerTimestamp("OneNoteRefreshStart");
        this.$T_0();
        this.$B_0.show();
        var $v_0 = new Mscrm.OneNoteControl.OneNoteControlRetrieveRequest;
        this.$7_0 = 1;
        $v_0.$E_0 = this.$7_0;
        $v_0.$F_0 = this.$G_0;
        this.clearWall();
        Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.reset();
        this.$3_0.abortRequest();
        this.$h_0($v_0)
    },
    fetchAll: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    $T_0: function() {
        this.$A_0.hide();
        this.$B_0.hide();
        this.$X_0.find("div.text").hide()
    },
    $q_0: function($p0, $p1, $p2, $p3) {
        setPerfMarkerTimestamp("OneNoteRenderPostStartTime");
        var $v_0 = $p0;
        if ($v_0.get_isSucceeded()) {
            if (!IsNull($v_0.get_posts()) && $v_0.get_posts().length > 0) $p1();
            else if (!this.$I_0.children().length && !$v_0.get_morePosts()) !IsNull($p2) && $p2();
            this.$i_0($p0.get_morePosts())
        } else !IsNull($p3) && $p3();
        setPerfMarkerTimestamp("OneNoteRenderPostEndTime")
    },
    refreshAll: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    clearWall: function() { this.$I_0.empty() },
    showError: function(cause, action) { this.clearWall() },
    showText: function(wallText, isClearWall) {},
    hideArticleContent: function() {},
    dispose: function() {},
    get_isDisposed: function() { return this._disposed },
    get_wallContainerId: function() { return this.$H_0 },
    set_wallContainerId: function(value) {
        this.$H_0 = value;
        return value
    },
    setTabIndex: function() {
        var $v_0 = $P_CRM("#onenotecontrol_notescontrol_container").attr("oneNoteTabIndex").toString();
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
            $P_CRM("#onenoteControlWallContainer").find(".sectionName a").attr("tabIndex", $v_0);
            $P_CRM("#onenoteControlWallContainer").find(".onenoteSection").attr("tabIndex", $v_0);
            $P_CRM("#noteBookLink").attr("tabIndex", $v_0)
        }
    },
    showNoRecordsMessage: function() {
        this.$T_0();
        this.$A_0.show();
        if (isNullOrEmptyString(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
            .$1)) this.$A_0.find("#noteBookLink").hide();
        else this.$A_0.find("#noteBookLink").show()
    },
    refreshComments: function(parentPostId, pageSize, olderThanDate) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postMessage: function(text) { throw Error.notImplemented("The method or operation is not implemented.") },
    renderOlderPosts: function() {
        var $v_0 = new Mscrm.OneNoteControl.OneNoteControlRetrieveRequest;
        $v_0.$F_0 = this.$G_0;
        $v_0.$4_0 = this.$V_0;
        this.$7_0 += 1;
        $v_0.$E_0 = this.$7_0;
        this.$h_0($v_0)
    },
    $h_0: function($p0) {
        var $$t_6 = this;
        this.$3_0.retrievePosts($p0,
            function($p1_0) {
                $$t_6.$q_0($p1_0,
                    function() {
                        var $v_0 = $p1_0.get_posts();
                        $$t_6.$B_0.hide();
                        var $v_1 = $P_CRM("#postTemplateForOneNote"), $v_2 = $P_CRM.templates($v_1.html());
                        $$t_6.$I_0.append($v_2.render($v_0));
                        $$t_6.$V_0 = $p1_0.get_pagingCookie();
                        $$t_6.setTabIndex()
                    },
                    function() {
                        $$t_6.showNoRecordsMessage();
                        $$t_6.setTabIndex()
                    },
                    function() {
                        $$t_6.$T_0();
                        var $v_3 = Mscrm.OneNoteControl.OneNoteControlWall.$l($p1_0);
                        $$t_6.$t_0($v_3)
                    })
            })
    },
    $t_0: function($p0) {
        if (IsNull($p0)) this.$W_0.show();
        else {
            this.$N_0.html($p0);
            this.$B_0.hide();
            this.$N_0.show()
        }
    },
    $i_0: function($p0) {
        if ($p0)
            if (window.IsTurboForm) this.renderOlderPosts();
            else {
                var $$t_1 = this;
                window.setTimeout(function() { $$t_1.renderOlderPosts() }, 2e3)
            }
        else this.$3_0.resetRequest()
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
Mscrm.OneNoteControl.OneNoteControlWallService = function() { this.$C_0 = true };
Mscrm.OneNoteControl.OneNoteControlWallService.prototype = {
    $0_0: null,
    $C_0: false,
    get_isAsync: function() { return this.$C_0 },
    set_isAsync: function(value) {
        this.$C_0 = value;
        return value
    },
    retrievePosts: function(retrievePostsRequest, retrievePostsCallback) {
        this.$0_0 = new XMLHttpRequest;
        var $v_0 = Mscrm.CrmUri.create("/AppWebServices/AppGridWebService.ashx?operation=RetrieveOneNoteGridData");
        this.$0_0.open("POST", $v_0.toString(), this.$C_0);
        var $$t_5 = this;
        this.$0_0.onreadystatechange = function() {
            setPerfMarkerTimestamp("OneNoteRetrieveResponseReceived");
            if ($$t_5.$0_0.readyState === 4) {
                $$t_5.$0_0.onreadystatechange = null;
                var $v_1 = new Mscrm.OneNoteControl.OneNoteRetrievePostsResponse;
                if ($$t_5.$0_0.status === 200) {
                    var $v_2 = Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
                        .gridDataToOneNoteSectionCollection($$t_5.$0_0.responseText);
                    $v_1.set_posts($v_2);
                    $v_1.set_morePosts(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$K);
                    $v_1.set_pagingCookie(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$4)
                } else if ($$t_5.$0_0.status === 500) $v_1.set_errorMessage($$t_5.$0_0.responseText);
                else $v_1.set_errorMessage("");
                retrievePostsCallback($v_1)
            }
        };
        this.$0_0.send(this.$j_0(retrievePostsRequest.get_pageNumber(), retrievePostsRequest.get_pageSize()));
        setPerfMarkerTimestamp("OneNoteRetrieveRequestSend")
    },
    retrieveAllPosts: function(retrievePostsRequest, retrievePostsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    abortRequest: function() {
        if (!IsNull(this.$0_0)) {
            this.$0_0.onreadystatechange = null;
            this.$0_0.abort()
        }
    },
    resetRequest: function() { this.$0_0 = null },
    $j_0: function($p0, $p1) {
        var $v_0 = Xrm.Page.data.entity.getId(),
            $v_1 = Xrm.Page.data.entity.getPrimaryAttributeValue(),
            $v_2 = Xrm.Page.data.entity.getEntityName(),
            $v_3 = Xrm.Internal.getEntityCode($v_2),
            $v_4 = "<grid>";
        $v_4 += "<sortColumns>filetype&#58;0&#59;sharepointcreatedon&#58;0</sortColumns>";
        $v_4 += String.format("<pageNum>{0}</pageNum>", CrmEncodeDecode.CrmXmlEncode($p0.toString()));
        $v_4 += String.format("<recsPerPage>{0}</recsPerPage>", CrmEncodeDecode.CrmXmlEncode($p1.toString()));
        $v_4 += "<dataProvider>Microsoft.Crm.Application.Controls.SharePointGridDataProvider</dataProvider>";
        $v_4 += "<uiProvider>Microsoft.Crm.Application.Controls.GridUIProvider</uiProvider>";
        $v_4 += "<enablePagingWhenOnePage>true</enablePagingWhenOnePage>";
        $v_4 += "<pagingCookie/>";
        $v_4 += "<parameters>";
        $v_4 += "<oId>" + CrmEncodeDecode.CrmXmlEncode($v_0) + "</oId>";
        $v_4 += "<recordName>" + CrmEncodeDecode.CrmXmlEncode($v_1) + "</recordName>";
        $v_4 += "<oType>" + $v_3.toString() + "</oType>";
        $v_4 += "<queryapi>SharePointDocument.RetrieveDocument</queryapi>";
        $v_4 += "<viewid>" + CrmEncodeDecode.CrmXmlEncode("CB177797-B2AC-42A8-9773-5412321A965C") + "</viewid>";
        $v_4 += "<viewtype>1039</viewtype>";
        $v_4 += "<otc>9507</otc>";
        $v_4 += "<otn>sharepointdocument</otn>";
        $v_4 += "<locationId></locationId>";
        $v_4 += "</parameters>";
        $v_4 += "<columns>";
        $v_4 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Name" fieldname="fullname" entityname="sharepointdocument" renderertype="nvarchar">fullname</column>';
        $v_4 +=
            '<column width="200" isHidden="false" isMetadataBound="true" isSortable="true" label="Location" fieldname="relativelocation" entityname="sharepointdocument" renderertype="nvarchar">relativelocation</column>';
        $v_4 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Modified" fieldname="modified" entityname="sharepointdocument" renderertype="datetime">modified</column>';
        $v_4 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Modified&#32;by" fieldname="sharepointmodifiedby" entityname="sharepointdocument" renderertype="nvarchar">sharepointmodifiedby</column>';
        $v_4 +=
            '<column width="300" isHidden="false" isMetadataBound="true" isSortable="true" label="Created&#32;On&#32;SharePoint" fieldname="sharepointcreatedon" entityname="sharepointdocument" renderertype="datetime">sharepointcreatedon</column>s += <column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="Document&#32;ID" fieldname="documentid" entityname="sharepointdocument">documentid</column>';
        $v_4 +=
            '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="Edit&#32;Web&#32;App&#32;URL" fieldname="editurl" entityname="sharepointdocument">editurl</column>';
        $v_4 +=
            '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="File Type" fieldname="filetype" entityname="sharepointdocument">filetype</column>';
        $v_4 +=
            '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="Author" fieldname="author" entityname="sharepointdocument">author</column>';
        $v_4 +=
            '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="Absolute&#32;URL" fieldname="absoluteurl" entityname="sharepointdocument">absoluteurl</column>';
        $v_4 +=
            '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="Modified&#32;by" fieldname="sharepointmodifiedby" entityname="sharepointdocument">sharepointmodifiedby</column>';
        $v_4 +=
            '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="SharePoint&#32;Document" fieldname="sharepointdocumentid" entityname="sharepointdocument">sharepointdocumentid</column>';
        $v_4 += "</columns>";
        $v_4 += "</grid>";
        return $v_4
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
Mscrm.OneNoteControl.OneNoteRetrievePostsResponse = function() {
    Mscrm.OneNoteControl.OneNoteRetrievePostsResponse.initializeBase(this)
};
Mscrm.OneNoteControl.OneNoteControlRetrieveRequest = function() {};
Mscrm.OneNoteControl.OneNoteControlRetrieveRequest.prototype = {
    $E_0: 0,
    $F_0: 0,
    $P_0: null,
    $S_0: null,
    $4_0: null,
    get_pageNumber: function() { return this.$E_0 },
    set_pageNumber: function(value) {
        this.$E_0 = value;
        return value
    },
    get_pageSize: function() { return this.$F_0 },
    set_pageSize: function(value) {
        this.$F_0 = value;
        return value
    },
    get_endDate: function() { return this.$P_0 },
    set_endDate: function(value) {
        this.$P_0 = value;
        return value
    },
    get_pagingCookie: function() { return this.$4_0 },
    set_pagingCookie: function(value) {
        this.$4_0 = value;
        return value
    },
    get_startDate: function() { return this.$S_0 },
    set_startDate: function(value) {
        this.$S_0 = value;
        return value
    }
};
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor = function() {};
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
    .get_moreRecords = function() { return Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$K };
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
    .get_pagingCookie = function() { return Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$4 };
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
    .get_onetoc2FileUrl = function() { return Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1 };
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.gridDataToOneNoteSectionCollection = function(xmlData) {
    var $v_0 = Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.parseXmlToRowData(xmlData),
        $v_1 = new Array($v_0.length);
    if (!Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$s($v_0)) return new Array(0);
    for (var $v_2 = 0, $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
        var $v_4 = $v_0[$v_3];
        if ($v_4.filetype === "onetoc2") continue;
        var $v_5 = new Mscrm.OneNoteControl.ObjectModel.Section;
        $v_5.set_rowId($v_4.RowId);
        $v_5.set_displayName($v_4.fullname);
        $v_5.set_encodedName($v_4.fullname);
        $v_5.set_modified(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$a($v_4.modified_Value));
        $v_5.set_modifiedBy($v_4.sharepointmodifiedby);
        $v_5.set_createdTime(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$a($v_4.sharepointcreatedon_Value));
        $v_5.set_author($v_4.author);
        $v_5.set_absoluteUrl($v_4.absoluteurl);
        $v_5.set_editUrl($v_4.editurl);
        $v_5.set_tooltip(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$m($v_4.fullname, $v_4.absoluteurl));
        $v_1[$v_2] = $v_5;
        $v_2++
    }
    return $v_1.slice(0, $v_2)
};
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$m = function($p0, $p1) {
    if (!isNullOrEmptyString(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$9) &&
        $p1.startsWith(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
            .$9)) return $p1.replace(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$9, "");
    return $p0
};
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
    .$a = function($p0) {
        return Wall.Control.Utils.DateUtils
            .formatDateAsReadableStringWithGivenResources($p0,
                "",
                Mscrm.OneNoteControl.OneNoteControl.localizedStrings.Today,
                Mscrm.OneNoteControl.OneNoteControl.localizedStrings.Yesterday)
    };
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$s = function($p0) {
    for (var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = 0; $v_3 < $p0.length; $v_3++)
        if ($p0[$v_3].filetype === "onetoc2")
            if (!isNullOrEmptyString($p0[$v_3].editurl))
                if (IsNull(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1)) {
                    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1 = $p0[$v_3].editurl;
                    $v_0 = $p0[$v_3].absoluteurl;
                    $v_1 = $v_0.split("/")
                } else {
                    $v_2 = $p0[$v_3].absoluteurl.split("/");
                    if ($v_2.length < $v_1.length) {
                        Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1 = $p0[$v_3].editurl;
                        $v_0 = $p0[$v_3].absoluteurl;
                        $v_1 = $v_0.split("/")
                    }
                }
            else {
                Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1 = "";
                break
            }
    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$k($v_0);
    if (IsNull(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1)) return false;
    return true
};
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$k = function($p0) {
    if (!IsNull($p0)) {
        Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$6 = $p0.substr(0, $p0.lastIndexOf("/") + 1);
        Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$9 = Mscrm.OneNoteControl
            .GridDataToOneNoteSectionConvertor.$6.substr(0,
                Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$6
                .lastIndexOf("/", Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$6.length - 2) +
                1)
    }
};
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
    .OpenOneNoteSection = function(editUrl, absoluteUrl, sectionName) {
        if (isNullOrEmptyString(editUrl) ||
            isNullOrEmptyString(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1) ||
            Xrm.Page.context.client.getClient() === "Outlook") Xrm.Internal.spOpenInNativeClient(absoluteUrl);
        else if (absoluteUrl.startsWith(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$6)) {
            sectionName = absoluteUrl.replace(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$6, "");
            window.open(String.format(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$g,
                    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1,
                    CrmEncodeDecode.CrmUrlEncode(sectionName.replace(")", "\\)"))),
                "_blank")
        } else window.open(editUrl, "_blank")
    };
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
    .OpenNoteBook = function() { window.open(Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1, "_blank") };
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.parseXmlToRowData = function(xmlData) {
    var $v_0 = XUI.Xml.LoadXml(xmlData),
        $v_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/pagingCookie", null)),
        $v_2 = Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/moreRecords", null))),
        $v_3 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/gridHtml", null));
    $v_3 = $v_3.substring(8, $v_3.length);
    var $v_4 = Sys.Serialization.JavaScriptSerializer.deserialize($v_3);
    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$K = $v_2;
    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$4 = $v_1;
    return $v_4
};
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.reset = function() {
    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1 = null;
    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$6 = null;
    Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$9 = null
};
Type.registerNamespace("Mscrm.OneNoteControl.ObjectModel");
Mscrm.OneNoteControl.ObjectModel.RowData = function() {};
Mscrm.OneNoteControl.ObjectModel.RowData.prototype = {
    RowId: null,
    fullname: null,
    modified_Value: null,
    sharepointmodifiedby: null,
    sharepointcreatedon_Value: null,
    author: null,
    absoluteurl: null,
    editurl: null,
    filetype: null
};
Mscrm.OneNoteControl.ObjectModel.Section = function() {};
Mscrm.OneNoteControl.ObjectModel.Section.prototype = {
    rowId: null,
    encodedname: null,
    displayname: null,
    modified: null,
    modifiedBy: null,
    created: null,
    author: null,
    absoluteUrl: null,
    editUrl: null,
    tooltip: null,
    get_rowId: function() { return this.rowId },
    set_rowId: function(value) {
        this.rowId = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_encodedName: function() { return this.encodedname },
    set_encodedName: function(value) {
        this.encodedname = CrmEncodeDecode.CrmHtmlEncode(value = value.replace("'", "\\'"));
        return value
    },
    get_displayName: function() { return this.displayname },
    set_displayName: function(value) {
        this.displayname = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_modified: function() { return this.modified },
    set_modified: function(value) {
        this.modified = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_modifiedBy: function() { return this.modifiedBy },
    set_modifiedBy: function(value) {
        this.modifiedBy = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_createdTime: function() { return this.created },
    set_createdTime: function(value) {
        this.created = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_author: function() { return this.author },
    set_author: function(value) {
        this.author = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_absoluteUrl: function() { return this.absoluteUrl },
    set_absoluteUrl: function(value) {
        this.absoluteUrl = CrmEncodeDecode.CrmHtmlEncode(value = value.replace(new RegExp("'", "g"), "\\'"));
        return value
    },
    get_editUrl: function() { return this.editUrl },
    set_editUrl: function(value) {
        this.editUrl = CrmEncodeDecode.CrmHtmlEncode(value);
        return value
    },
    get_tooltip: function() { return this.tooltip },
    set_tooltip: function(value) {
        this.tooltip = CrmEncodeDecode.CrmHtmlEncode(value);
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
    get_postId: function() { return null },
    set_postId: function(value) { return value },
    get_text: function() { return null },
    set_text: function(value) { return value }
};
Mscrm.OneNoteControl.OneNoteControl.registerClass("Mscrm.OneNoteControl.OneNoteControl",
    Mscrm.CrmUIControl,
    Sys.IDisposable);
Mscrm.OneNoteControl.WallCommands.registerClass("Mscrm.OneNoteControl.WallCommands");
Mscrm.OneNoteControl.OneNoteControlWallCommandDispatcher
    .registerClass("Mscrm.OneNoteControl.OneNoteControlWallCommandDispatcher");
Mscrm.OneNoteControl.OneNoteControlConstants.registerClass("Mscrm.OneNoteControl.OneNoteControlConstants");
Mscrm.OneNoteControl.OneNoteControlWall.registerClass("Mscrm.OneNoteControl.OneNoteControlWall",
    null,
    Wall.Interfaces.IWall,
    Sys.IDisposable);
Mscrm.OneNoteControl.OneNoteControlWallService
    .registerClass("Mscrm.OneNoteControl.OneNoteControlWallService", null, Wall.Interfaces.IWallService);
Mscrm.OneNoteControl.OneNoteRetrievePostsResponse
    .registerClass("Mscrm.OneNoteControl.OneNoteRetrievePostsResponse",
        Wall.Service.Messages.RetrievePostsBaseResponse,
        Wall.Interfaces.IRetrievePostsResponse);
Mscrm.OneNoteControl.OneNoteControlRetrieveRequest
    .registerClass("Mscrm.OneNoteControl.OneNoteControlRetrieveRequest", null, Wall.Interfaces.IRetrievePostsRequest);
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor
    .registerClass("Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor");
Mscrm.OneNoteControl.ObjectModel.RowData.registerClass("Mscrm.OneNoteControl.ObjectModel.RowData");
Mscrm.OneNoteControl.ObjectModel.Section.registerClass("Mscrm.OneNoteControl.ObjectModel.Section",
    null,
    Wall.Interfaces.IPost);
Mscrm.OneNoteControl.OneNoteControl.localizedStrings = null;
Mscrm.OneNoteControl.WallCommands.refreshWall = "refreshwall";
Mscrm.OneNoteControl.WallCommands.showText = "showtext";
Mscrm.OneNoteControl.WallCommands.clearWall = "clearwall";
Mscrm.OneNoteControl.WallCommands.hideArticleContent = "hidearticlecontent";
Mscrm.OneNoteControl.WallCommands.showErrorContent = "showerrorcontent";
Mscrm.OneNoteControl.WallCommands.getAssociatedArticles = "getassociatedarticles";
Mscrm.OneNoteControl.WallCommands.showNoRecordsMessage = "shownorecordsmessage";
Mscrm.OneNoteControl.OneNoteControlConstants.sectionTemplateId = "postTemplateForOneNote";
Mscrm.OneNoteControl.OneNoteControlConstants.showMoreTemplateId = "showMoreLinkTemplate";
Mscrm.OneNoteControl.OneNoteControlConstants.noRecordForOneNoteId = "noRecordForOneNote";
Mscrm.OneNoteControl.OneNoteControlConstants.noteBookLink = "noteBookLink";
Mscrm.OneNoteControl.OneNoteControlConstants.progressBarMessageId = "progressMessageForOneNote";
Mscrm.OneNoteControl.OneNoteControlConstants.onenoteWallControlId = "onenotecontrol_notescontrol_container";
Mscrm.OneNoteControl.OneNoteControlConstants.onenoteWallControlContainerId = "onenoteControlWallContainer";
Mscrm.OneNoteControl.OneNoteControlConstants.onetoc2FileType = "onetoc2";
Mscrm.OneNoteControl.OneNoteControlConstants.inlineMessageContainerId = "inlineMessageForOneNote";
Mscrm.OneNoteControl.OneNoteControlConstants.customErrorMessageForOneNoteId = "customErrorMessageForOneNote";
Mscrm.OneNoteControl.OneNoteControlConstants.defaultErrorId = "defaultError";
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$4 = null;
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$K = false;
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$1 = null;
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$6 = null;
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$g = "{0}&wd=target({1})";
Mscrm.OneNoteControl.GridDataToOneNoteSectionConvertor.$9 = null