Type.registerNamespace("Wall.Interfaces");
Wall.Interfaces.IUpdatePostResponse = function() {};
Wall.Interfaces.IUpdatePostResponse.registerInterface("Wall.Interfaces.IUpdatePostResponse");
Type.registerNamespace("Wall.Interfaces.EventArguments");
Wall.Interfaces.EventArguments.PostUpdatedEventArgs = function(post) {
    Wall.Interfaces.EventArguments.PostUpdatedEventArgs.initializeBase(this);
    this.$f_1 = post
};
Wall.Interfaces.EventArguments.PostUpdatedEventArgs
    .prototype = { $f_1: null, get_post: function() { return this.$f_1 } };
Type.registerNamespace("Wall.Service.Messages");
Wall.Service.Messages.UpdatePostResponse = function() { Wall.Service.Messages.UpdatePostResponse.initializeBase(this) };
Type.registerNamespace("Mscrm.FormInputControl.NotesV2");
Mscrm.FormInputControl.NotesV2.NotesControl = function(element) {
    this.$$d_$l_3 = Function.createDelegate(this, this.$l_3);
    Mscrm.FormInputControl.NotesV2.NotesControl.initializeBase(this, [element])
};
Mscrm.FormInputControl.NotesV2.NotesControl.$1M = function() {
    var $v_0 = window.self._notesV2Strings;
    Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings = $P_CRM.parseJSON($v_0)
};
Mscrm.FormInputControl.NotesV2.NotesControl.prototype = {
    $O_3: null,
    $2_3: null,
    $1_3: null,
    $Y_3: null,
    $R_3: null,
    $W_3: null,
    $Z_3: null,
    $7_3: false,
    $U_3: false,
    $V_3: false,
    $e_3: false,
    $d_3: false,
    $S_3: false,
    $K_3: false,
    $Q_3: false,
    $3_3: 0,
    $c_3: null,
    $8_3: null,
    $G_3: false,
    $P_3: false,
    get_masterComponentId: function() { return this.$W_3 },
    set_masterComponentId: function(value) {
        this.$W_3 = value;
        return value
    },
    get_isControlReadOnly: function() { return this.$7_3 },
    set_isControlReadOnly: function(value) {
        this.$7_3 = value;
        return value
    },
    get_isNoteCreateEnabled: function() { return this.$U_3 && !this.$7_3 },
    set_isNoteCreateEnabled: function(value) {
        this.$U_3 = value;
        return value
    },
    get_isNoteReadEnabled: function() { return this.$V_3 },
    set_isNoteReadEnabled: function(value) {
        this.$V_3 = value;
        return value
    },
    get_isNoteEditEnabled: function() { return this.$e_3 && !this.$7_3 },
    set_isNoteEditEnabled: function(value) {
        this.$e_3 = value;
        return value
    },
    get_isNoteDeleteEnabled: function() { return this.$d_3 && !this.$7_3 },
    set_isNoteDeleteEnabled: function(value) {
        this.$d_3 = value;
        return value
    },
    get_firstInitialization: function() { return this.$Q_3 },
    set_firstInitialization: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_notesWallTabIndex: function() { return this.$3_3 },
    set_notesWallTabIndex: function(value) {
        this.$3_3 = value;
        return value
    },
    get_wallContentPageUrl: function() { return this.$Z_3 },
    set_wallContentPageUrl: function(value) {
        this.$Z_3 = value;
        return value
    },
    $t_3: function() {
        return Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari() && !window.IS_LIVE && !window.IS_CLAIMS
    },
    $F_3: null,
    get_preloadRequest: function() { return this.$F_3 },
    set_preloadRequest: function(value) {
        this.$F_3 = value;
        return value
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 78:
            Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("NoteshRefreshEvent_Start", 1);
            var $v_0 = Xrm.Internal.startMetricsStopwatch("NotesRefreshEvent");
            $v_0.start();
            if (parameters["tabName"] === "NotesTab") this.$K_3 = true;
            else this.$K_3 = false;
            if (this.$W_3 === sourceComponent.get_id()) {
                if (IsNull(parameters["entityID"])) {
                    this.$i_3(Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.PendingCreate);
                    return null
                } else {
                    this.$S_3 = true;
                    this.$c_3 = parameters["entityID"]
                }
                if (!this.$G_3)
                    if (!IsNull(this.$8_3)) {
                        this.$z_3();
                        this.$r_3()
                    } else break;
                this.$O_3.set_entityId(this.$c_3);
                if (this.$K_3)
                    if (IsNull(this.$F_3)) this.$1_3.refreshAll();
                    else {
                        var $$t_4 = this.$1_3;
                        this.$F_3.done($$t_4.$$d_loadPosts ||
                            ($$t_4.$$d_loadPosts = Function.createDelegate($$t_4, $$t_4.loadPosts)));
                        this.$F_3 = null
                    }
            }
            $v_0.stop();
            break
        }
        return null
    },
    initialize: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("LoadNotes_Start", 1);
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Mscrm.FormInputControl.NotesV2.NotesControl.$1M();
        if (!this.$V_3) {
            this.$i_3(Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.NoNotesAvailable);
            return
        }
        !IsNull(this.get_eventManager()) && this.get_eventManager().subscribeEvent(78, this.get_id());
        if (window.IsTurboForm) this.$l_3();
        else {
            var $v_0 = new Sales.Common.Framework.Loaders.ConcurrentContentLoader;
            this.loadNotesContent($v_0);
            Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$l_3, 2)
        }
    },
    loadNotesContent: function(loader) {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("LoadNotesV2Html");
        $v_0.start();
        var $$t_3 = this;
        loader.loadContent(this.$Z_3,
            "html",
            function($p1_0) {
                $$t_3.$8_3 = $p1_0;
                $v_0.stop();
                $$t_3.$P_3 && !$$t_3.$G_3 && ($$t_3.$S_3 || $$t_3.$Q_3) && $$t_3.$p_3()
            })
    },
    $l_3: function() {
        var $v_0 = Xrm.Page.data.entity.getId();
        if (window.IsTurboForm
            ? _String.isNullOrEmpty($v_0) ||
            (new Microsoft.Crm.Client.Core.Framework.Guid($v_0))
            .equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty())
            : !this.$S_3) {
            this.$i_3(Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.PendingCreate);
            this.$P_3 = true;
            return
        }
        !window.IsTurboForm && !this.$G_3 && !IsNull(this.$8_3) && this.$p_3();
        this.$P_3 = true
    },
    $p_3: function() {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("NotesHtml_Render");
        $v_0.start();
        this.$z_3();
        this.$r_3();
        this.$K_3 && this.$1_3.refreshAll();
        $v_0.stop()
    },
    $z_3: function() {
        this.get_element().innerHTML = this.$8_3;
        if (Mscrm.CrmBrowser.get_currentBrowser().get_isIE8()) {
            var $v_0 = $P_CRM(this.$8_3), $v_1 = $P_CRM(this.get_element());
            $v_0.find("script").insertBefore($v_1.find("#progressTemplate"))
        }
    },
    $r_3: function() {
        if (!this.$G_3) this.$G_3 = true;
        else return;
        setPerfMarkerTimestamp("StartNotesWallInitializeTimestamp");
        this.$2_3 = $P_CRM(this.get_element());
        if (!this.$7_3 && this.$U_3) {
            this.$1L_3();
            this.$u_3()
        } else {
            this.$R_3 = this.$2_3.find("#header");
            this.$R_3.hide();
            this.$u_3()
        }
        setPerfMarkerTimestamp("FinishNotesWallInitializeTimestamp")
    },
    $1L_3: function() {
        var $v_0 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
        $v_0.set_postId("createNote");
        Mscrm.FormInputControl.NotesV2.NotesWall
            .insertPostBefore($v_0, this.$2_3, this.$2_3.find(".filterAndRefreshContainer"));
        this.$2_3.find("#createNote").addClass("createNote");
        this.$2_3.find("#createNote").find(".notesTextBoxDiv")
            .prepend('<b class="border-notch notch"></b><b class="notch"></b>');
        var $v_1 = this.$2_3.parents(".tabsControl").find(".tabLink")
            .filter(String.format("[tabid='{0}']", "NotesTab"))[0];
        if (IsNull($v_1)) return;
        var $v_2 = $v_1.offsetLeft, $v_3 = $v_1.offsetWidth / 2 - 10, $v_4 = $v_2 + $v_3;
        if (!IsNull($v_1.offsetParent)) {
            var $v_6 = $v_1.offsetParent.offsetWidth;
            $v_4 = $v_4 >= $v_6 ? ($v_2 + $v_6) / 2 : $v_4
        }
        var $v_5 = $v_4 + "px";
        this.$2_3.find("b.notch").css("left", $v_5)
    },
    dispatchNoteCommand: function(commandName, parameters) {
        if (commandName === "onblur") this.$1N_3(parameters);
        else this.$Y_3.dispatchNoteCommand(commandName, parameters)
    },
    isContentLoaded: function() { return !!this.$8_3 },
    $1N_3: function($p0) {
        if (!this.$7_3)
            if (window.IsTurboForm) this.$v_3($p0);
            else {
                var $$t_1 = this;
                window.setTimeout(function() { $$t_1.$v_3($p0) }, 0)
            }
    },
    $v_3: function($p0) {
        var $v_0 = this.$2_3.find("#" + $p0), $v_1 = getActiveElement();
        if (!IsNull($v_1) && $P_CRM($v_1).parents().index($v_0[0]) > 0) return;
        this.$Y_3.dispatchNoteCommand("post", $p0)
    },
    $u_3: function() {
        !this.get_isNoteCreateEnabled() && this.$2_3.addClass("nocreate");
        !this.get_isNoteEditEnabled() && this.$2_3.addClass("noedit");
        !this.get_isNoteDeleteEnabled() && this.$2_3.addClass("nodelete");
        this.$t_3() && this.$2_3.addClass("noupload");
        this.$3_3 = parseInt(this.get_element().getAttribute("notesWallTabIndex"));
        Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled() &&
            this.$2_3.parents(".mobile").length < 1 &&
            this.$2_3.addClass("mobile");
        var $v_0 = new Wall.Service.ObjectModel.EntityReference, $v_1 = Xrm.Page.data.entity;
        $v_0.set_logicalName($v_1.getEntityName());
        $v_0.set_id($v_1.getId());
        this.$O_3 = new Mscrm.FormInputControl.NotesV2
            .NotesWallService(Xrm.Page.context,
                $v_0,
                this.$2_3,
                Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.You);
        this.$1_3 = new Mscrm.FormInputControl.NotesV2
            .NotesWall(this.$2_3,
                this.$O_3,
                "header",
                "postTemplate",
                "commentTemplate",
                "notesWallContainer",
                String.format("#{0}_notesTextBox", "createNote"),
                "progressTemplate",
                "firstRunContent",
                "showMoreLinkTemplate",
                this.$3_3,
                !this.get_isNoteCreateEnabled(),
                !this.get_isNoteEditEnabled(),
                !this.get_isNoteDeleteEnabled(),
                this.$t_3());
        this.$1_3.set_pageSize(10);
        this.$Y_3 = new Mscrm.FormInputControl.NotesV2
            .NotesWallCommandDispatcher(this.get_element().id, this.$1_3, this.$O_3);
        if (this.get_isNoteCreateEnabled()) {
            var $$t_5 = this;
            this.$1_3.add_postCreated(function($p1_0, $p1_1) {
                var $v_2 = $$t_5.$2_3.find("#createdPostIdHiddenField")[0];
                $v_2.value = $p1_1.get_post().get_postId() + ":post"
            })
        }
    },
    $i_3: function($p0) {
        this.get_element().innerHTML = String.format("<div class='NotesV2OnlyText'><div class='text'>{0}</div></div>",
            CrmEncodeDecode.CrmHtmlEncode($p0))
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$R_3 = null;
        !IsNull(this.get_eventManager()) && this.get_eventManager().dispose();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};

function dispatchNoteCommand($p0, $p1, $p2) {
    var $v_0 = $P_CRM($p0).parents(".notesWall").first().parents("*").first(), $v_1 = $find($v_0.get(0).id);
    $v_1.dispatchNoteCommand($p1, $p2)
}

function formatNoteDate($p0, $p1) {
    return Wall.Control.Utils.DateUtils
        .formatDateAsReadableStringWithGivenResources($p0,
            $p1,
            Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.Today,
            Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.Yesterday)
}

Mscrm.FormInputControl.NotesV2.NotesWallHelper = function() {};
Mscrm.FormInputControl.NotesV2.NotesWallHelper.$1G = function($p0) {
    var $v_0 = $p0.find("#crmFormSubmit");
    if (IsNull($v_0)) return $p0.find("#crmFormSubmitXml");
    else return $v_0.find("#crmFormSubmitXml")
};
Mscrm.FormInputControl.NotesV2.NotesWallHelper.$1I = function($p0) { return $p0.find("#errorInfoDiv") };
Mscrm.FormInputControl.NotesV2.NotesWallHelper.$1H = function($p0) { return $p0.find("#errorCodeDiv") };
Mscrm.FormInputControl.NotesV2.NotesWallHelper.$1K = function($p0) { return $p0.find("#userFile") };
Mscrm.FormInputControl.NotesV2.NotesWallHelper.$1J = function($p0) {
    var $v_0 = Mscrm.FormInputControl.NotesV2.NotesWallHelper.$1K($p0).val();
    if (_String.isNullOrEmpty($v_0)) return "";
    if ($v_0.indexOf("\\") < 0) return $v_0;
    return $v_0.substr($v_0.lastIndexOf("\\") + 1)
};
Mscrm.FormInputControl.NotesV2.NotesWallHelper.$J = function($p0, $p1) {
    if (!Mscrm.FormInputControl.NotesV2.NotesWallHelper.$T($p1));
    var $v_0 = $p1.find(String.format("#{0}_attachFileIframe", $p0));
    return $P_CRM($v_0.get(0).contentWindow.document.body)
};
Mscrm.FormInputControl.NotesV2.NotesWallHelper.$T = function($p0) { return $p0.hasClass("attachmentIframeLoaded") };
Mscrm.FormInputControl.NotesV2.NotesWallHelper.getFileNameFromPost = function($p0, $p1) {
    if (!Mscrm.FormInputControl.NotesV2.NotesWallHelper.$T($p1)) return "";
    return Mscrm.FormInputControl.NotesV2.NotesWallHelper
        .$1J(Mscrm.FormInputControl.NotesV2.NotesWallHelper.$J($p0, $p1))
};
Mscrm.FormInputControl.NotesV2.NotesWallHelper
    .getErrorInfoDivJQueryFromPost = function($p0, $p1) {
        return Mscrm.FormInputControl.NotesV2.NotesWallHelper
            .$1I(Mscrm.FormInputControl.NotesV2.NotesWallHelper.$J($p0, $p1))
    };
Mscrm.FormInputControl.NotesV2.NotesWallHelper
    .getErrorCodeDivJQueryFromPost = function($p0, $p1) {
        return Mscrm.FormInputControl.NotesV2.NotesWallHelper
            .$1H(Mscrm.FormInputControl.NotesV2.NotesWallHelper.$J($p0, $p1))
    };
Mscrm.FormInputControl.NotesV2.NotesWallHelper
    .getCrmFormSubmitXmlJQueryFromPost = function($p0, $p1) {
        return Mscrm.FormInputControl.NotesV2.NotesWallHelper
            .$1G(Mscrm.FormInputControl.NotesV2.NotesWallHelper.$J($p0, $p1))
    };
Mscrm.FormInputControl.NotesV2.NotesWallHelper
    .resetAttachmentIdFromPost = function($p0, $p1) {
        Mscrm.FormInputControl.NotesV2.NotesWallHelper.$T($p1) &&
            Mscrm.FormInputControl.NotesV2.NotesWallHelper.$J($p0, $p1).find("#AttachmentId").val("")
    };
Mscrm.FormInputControl.NotesV2.NotesWallHelper.getNoteIdQueryStringFromPost = function($p0, $p1) {
    if (!Mscrm.FormInputControl.NotesV2.NotesWallHelper.$T($p1)) return "";
    var $v_0 = parseQueryString($p1.find(String.format("#{0}_attachFileIframe", $p0)).get(0).contentWindow.location),
        $v_1 = $v_0["id"];
    if (!_String.isNullOrEmpty($v_1)) return Sales.Common.CrmSoapServiceProxy.Utils.Utils.parseGuid($v_1);
    return ""
};
Mscrm.FormInputControl.NotesV2.NotesWallHelper.getSerializedExceptionFromPost = function($p0, $p1) {
    var $v_0 = Mscrm.FormInputControl.NotesV2.NotesWallHelper.$J($p0, $p1).first(),
        $v_1 = $v_0.find("#SerializedException");
    if ($v_1.length > 0) return $v_0.find("#SerializedException").text();
    return ""
};
Mscrm.FormInputControl.NotesV2.NotesWallHelper.isIframeContentValid = function($p0, $p1) {
    var $v_0 = Mscrm.FormInputControl.NotesV2.NotesWallHelper.getNoteIdQueryStringFromPost($p0, $p1);
    if (_String.isNullOrEmpty($v_0) &&
        !$p1.find(String.format("#{0}_attachFileIframe", $p0)).get(0).contentWindow.location.pathname.toLowerCase()
        .endsWith("/notes/notesv2attach.aspx")) {
        Mscrm.FormInputControl.NotesV2.NotesWallHelper.resetAttachmentIframe($p0, $p1);
        return false
    } else return true
};
Mscrm.FormInputControl.NotesV2.NotesWallHelper.resetAttachmentIframe = function($p0, $p1) {
    $p1.removeClass("attachmentIframeLoaded");
    var $v_0 = $p1.find(String.format("#{0}_attachFileIframe", $p0));
    $v_0.removeClass("iframeLoaded");
    $v_0.css("width", "");
    $v_0.css("height", "")
};
Mscrm.FormInputControl.NotesV2.NotesWall = function(rootContainer,
    wallService,
    headerId,
    postTemplateId,
    commentTemplateId,
    wallContainerId,
    postTextBoxJQueryId,
    progressTemplateId,
    emptyTemplateId,
    showMoreLinkTemplateId,
    notesWallTabIndex,
    isCreateDisabled,
    isUpdateDisabled,
    isDeleteDisabled,
    isUploadDisabled) {
    this.$$d_$x_1 = Function.createDelegate(this, this.$x_1);
    this.$$d_$y_1 = Function.createDelegate(this, this.$y_1);
    this.$3_1 = -1;
    this.$6_1 = {};
    this.$4_1 = {};
    this.$D_1 = {};
    Mscrm.FormInputControl.NotesV2.NotesWall.initializeBase(this,
    [
        rootContainer, wallService, "." + headerId, postTemplateId, commentTemplateId, wallContainerId,
        postTextBoxJQueryId, progressTemplateId, emptyTemplateId, showMoreLinkTemplateId
    ]);
    this.$k_1 = rootContainer.find("#deleteNoteTemplate");
    this.$j_1 = rootContainer.find("#undeleteNoteAttachmentTemplate");
    this.$B_1 = wallService;
    this.$3_1 = notesWallTabIndex;
    this.$9_1 = isCreateDisabled;
    this.$C_1 = isUpdateDisabled;
    this.$b_1 = isDeleteDisabled;
    this.$N_1 = isUploadDisabled;
    var $$t_Q = this;
    this.add_postsRefreshing(function($p1_0, $p1_1) { setPerfMarkerTimestamp("StartNotesWallRefreshLoadTimestamp") });
    var $$t_R = this;
    this.add_postsRefreshed(function($p1_0, $p1_1) { setPerfMarkerTimestamp("FinishNotesWallRefreshLoadTimestamp") });
    var $$t_S = this;
    this.add_postCreating(function($p1_0, $p1_1) { setPerfMarkerTimestamp("StartPostNoteTimestamp") });
    var $$t_T = this;
    this.add_postCreated(function($p1_0, $p1_1) { setPerfMarkerTimestamp("FinishPostNoteTimestamp") });
    var $$t_U = this;
    this.add_postsInserted(function($p1_0, $p1_1) { $$t_U.$q_1($p1_1.get_posts()) });
    this.$13_1(rootContainer);
    if (!this.$9_1) {
        var $v_0 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
        $v_0.set_postId("createNote");
        this.$q_1([$v_0])
    }
    this.setEmptyState()
};
Mscrm.FormInputControl.NotesV2.NotesWall.$H = function($p0) {
    $p0.css("opacity", "1");
    Wall.Control.Utils.Browser.getCurrentBrowser().get_isIE8OrLower() && $p0.css("filter", "")
};
Mscrm.FormInputControl.NotesV2.NotesWall.insertPostBefore = function(post, rootContainer, objectReference) {
    if (post && !_String.isNullOrEmpty(post.get_text())) {
        var $v_0 = "</[t|T][e|E][x|X][t|T][a|A][r|R][e|E][a|A]>", $v_1 = new RegExp($v_0, "g");
        post.set_text(post.get_text().replace($v_1, "< /textarea>"))
    }
    rootContainer.find("#postTemplate").tmpl([post]).insertBefore(objectReference)
};
Mscrm.FormInputControl.NotesV2.NotesWall.$1B = function($p0) {
    $p0.find("a, textarea, input, button").attr("disabled", "disabled")
};
Mscrm.FormInputControl.NotesV2.NotesWall.prototype = {
    $B_1: null,
    $k_1: null,
    $j_1: null,
    $9_1: false,
    $C_1: false,
    $b_1: false,
    $N_1: false,
    disposeInternal: function() {
        var $v_0 = this.get_wallService().get_isAsync();
        this.get_wallService().set_isAsync(false);
        try {
            this.$11_1(null)
        } finally {
            this.get_wallService().set_isAsync($v_0)
        }
        Wall.UI.Wall.prototype.disposeInternal.call(this)
    },
    clearInputFields: function() {
        Mscrm.FormInputControl.NotesV2.NotesWallHelper
            .resetAttachmentIdFromPost("createNote", this.rootContainer.find("#createNote"));
        this.rootContainer.find(String.format("#{0}_notesTitleBox", "createNote")).val("");
        if (!IsNull(this.postTextBox)) {
            this.postTextBox.value = "";
            $P_CRM(this.postTextBox).trigger("change")
        }
        this.rootContainer.parents(".tabsControl").find(".tabLink").filter(String.format("[tabid='{0}']", "NotesTab"))
            .focus();
        this.convertToReadMode("createNote")
    },
    processError: function(response) {
        if (Wall.Interfaces.ICreatePostResponse.isInstanceOfType(response)) this.$M_1(response, "createNote", true);
        else Wall.Interfaces.IRetrievePostsRequest.isInstanceOfType(response) && this.$M_1(response, null, true)
    },
    $M_1: function($p0, $p1, $p2) {
        if ($p0.get_errorMessage().startsWith("0x")) {
            $p0.get_errorMessage().startsWith("0x80043e08") &&
                Mscrm.FormInputControl.NotesV2.NotesWallHelper
                .resetAttachmentIdFromPost("createNote", this.rootContainer.find("#createNote"));
            openErrorDlg($p0.get_errorMessage(), null, null, -1, -1)
        } else {
            var $v_0 = Wall.Control.Utils.XmlUtils.parseXmlDocument($p0.get_errorMessage());
            if (!IsNull($v_0)) {
                var $v_1 = Mscrm.ErrorInformation.createFromDoc($v_0.documentElement);
                openErrorDlg($v_1.get_code(), $v_1.get_description(), $v_1, -1, -1)
            } else openErrorDlg(null, $p0.get_errorMessage(), null, -1, -1)
        }
        this.fireEvent(Wall.Interfaces.EventArguments.ErrorEventArgs,
            "Error",
            new Wall.Interfaces.EventArguments.ErrorEventArgs($p0));
        !_String.isNullOrWhiteSpace($p1) && $p2 && this.$I_1($p1, true)
    },
    resizeProgressTemplate: function() { return },
    refreshAll: function() {
        if (!this.get_isDisabled()) {
            var $$t_0 = this;
            this.$11_1(function() { Wall.UI.Wall.prototype.refreshAll.call($$t_0) })
        }
    },
    processRetrievePostsResponse: function(retrievePostsResponse, dataCallback, emptyCallback, errorCallback) {
        var $$t_4 = this;
        Wall.UI.Wall.prototype.processRetrievePostsResponse.call(this,
            retrievePostsResponse,
            dataCallback,
            function() {
                $$t_4.setEmptyState();
                emptyCallback && emptyCallback()
            },
            errorCallback);
        if (retrievePostsResponse.get_morePosts())
            if (window.IsTurboForm) this.renderOlderPosts();
            else {
                var $$t_5 = this;
                window.setTimeout(function() { $$t_5.renderOlderPosts() }, 2e3)
            }
    },
    deletePost: function(postId) {
        if (this.$b_1) return;
        var $v_0 = this.wallContainerjQuery.find(String.format("#{0}", postId)),
            $v_1 = this.findDisplayedPostById(postId),
            $v_2 = {};
        $v_2["height"] = "10px";
        $v_2["opacity"] = "0";
        var $$t_8 = this;
        $v_0.animate($v_2,
            "fast",
            "linear",
            function() {
                $v_0.hide();
                var $v_3 = $$t_8.$k_1.tmpl($v_1, $$t_8).insertBefore($v_0).show();
                $$t_8.$0_1($v_3, $v_3.attr("id"), "UndeletePost", $v_3.parent().attr("id"));
                var $v_4 = $v_3.find(".undoText");
                $$t_8.$0_1($v_4, null, "PostUndoText", $v_3.attr("id"));
                var $v_5 = $v_3.find(".undoLink");
                $$t_8.$0_1($v_5, null, "PostUndoLink", $v_3.attr("id"));
                $$t_8.$6_1[postId] = $v_1;
                var $v_6 = $$t_8.$$d_$y_1;
                $P_CRM(window).data("undeletePostMessageAnimationCallback_" + postId, $v_6);
                $P_CRM(window).data("undeletePostMessageAnimationObject_" + postId, $v_3);
                $v_3.find("a:last").focus();
                $$t_8.$y_1($v_3, postId, true)
            })
    },
    undoDeleteNote: function(noteId) {
        if (noteId in this.$6_1) delete this.$6_1[noteId];
        this.wallContainerjQuery.find(String.format("#undeletePost_{0}", noteId)).stop(true).remove();
        var $v_0 = this.wallContainerjQuery.find(String.format("#{0}", noteId));
        Mscrm.FormInputControl.NotesV2.NotesWall.$H($v_0);
        $v_0.css("height", "auto").slideDown("fast");
        $v_0.addClass("focus");
        $v_0.find(String.format("#deletenoteaction_{0}", noteId)).focus()
    },
    $1A_1: function($p0) {
        if ($p0 in this.$6_1) {
            setPerfMarkerTimestamp("StartDeleteNoteTimestamp");
            var $$t_3 = this;
            this.$B_1.deletePost(this.$6_1[$p0],
                function($p1_0) {
                    var $v_0 = $$t_3.wallContainerjQuery.find(String.format("#{0}", $p0));
                    if ($p1_0.get_isSucceeded()) {
                        $$t_3.fireEvent(Wall.Interfaces.EventArguments.PostDeletedEventArgs,
                            "PostDeleted",
                            new Wall.Interfaces.EventArguments.PostDeletedEventArgs($p0));
                        setPerfMarkerTimestamp("FinishDeleteNoteTimestamp");
                        $$t_3.removePost($p0)
                    } else {
                        Mscrm.FormInputControl.NotesV2.NotesWall.$H($v_0);
                        $v_0.css("height", "auto").slideDown("fast");
                        $$t_3.$M_1($p1_0, $p0, false)
                    }
                });
            delete this.$6_1[$p0]
        }
    },
    $y_1: function($p0, $p1, $p2) {
        Mscrm.FormInputControl.NotesV2.NotesWall.$H($p0);
        $p0.stop(true);
        if ($p2) {
            var $v_0 = {};
            $v_0["opacity"] = "0.2";
            var $$t_4 = this;
            $p0.show(1).delay(4e3).animate($v_0,
                3e3,
                "linear",
                function() {
                    $p0.remove();
                    $p0.hasClass("deleteNoteDiv") && $$t_4.$1A_1($p1)
                })
        }
    },
    $11_1: function($p0) {
        var $$dict_3 = this.$6_1;
        for (var $$key_4 in $$dict_3) {
            var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] }, $v_3 = $v_2.value.get_postId();
            if ($v_3 in this.$4_1) delete this.$4_1[$v_3]
        }
        var $v_0 = _Dictionary.count(this.$6_1) + _Dictionary.count(this.$4_1);
        if (!$v_0) {
            !IsNull($p0) && $p0();
            return
        }
        var $v_1 = true, $$t_B = this;
        this.$m_1(this.$6_1,
            function($p1_0) {
                $$t_B.$B_1.deletePost($p1_0,
                    function($p2_0) {
                        $v_0--;
                        if ($v_0 <= 0) {
                            $v_0 += 1e3;
                            $v_1 = false;
                            !IsNull($p0) && $p0()
                        }
                    })
            });
        var $$t_C = this;
        this.$m_1(this.$4_1,
            function($p1_0) {
                $$t_C.$B_1.deleteAttachment($p1_0,
                    function($p2_0) {
                        $v_0--;
                        if ($v_0 <= 0) {
                            $v_0 += 1e3;
                            $v_1 = false;
                            !IsNull($p0) && $p0()
                        }
                    })
            });
        if (window.IsTurboForm && !IsNull($p0)) $p0();
        else {
            var $$t_D = this;
            window.setTimeout(function() {
                    if ($v_1) {
                        $v_0 += 1e3;
                        !IsNull($p0) && $p0()
                    }
                },
                2e3)
        }
    },
    $m_1: function($p0, $p1) {
        var $v_0 = [], $$dict_4 = $p0;
        for (var $$key_5 in $$dict_4) {
            var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
            Array.enqueue($v_0, $v_2.value);
            delete $p0[$v_2.key]
        }
        var $v_1 = Array.dequeue($v_0);
        while (!IsNull($v_1)) {
            $p1($v_1);
            $v_1 = Array.dequeue($v_0)
        }
    },
    deleteAttachment: function(noteId) {
        if (this.$C_1) return;
        var $v_0 = this.wallContainerjQuery.find(String.format("#{0}", noteId))
                .find(String.format("#attachment_{0}", noteId)),
            $v_1 = this.findDisplayedPostById(noteId),
            $v_2 = {};
        $v_2["height"] = "10px";
        $v_2["opacity"] = "0";
        var $$t_6 = this;
        $v_0.animate($v_2,
            "fast",
            "linear",
            function() {
                $v_0.hide();
                var $v_3 = $$t_6.$j_1.tmpl($v_1, $$t_6).insertBefore($v_0).show();
                $$t_6.$4_1[noteId] = $v_1;
                var $v_4 = $$t_6.$$d_$x_1;
                $P_CRM(window).data("undeleteAttachmentAnimationCallback_" + noteId, $v_4);
                $P_CRM(window).data("undeleteAttachmentAnimationObject_" + noteId, $v_3);
                $v_3.find("a:last").focus();
                $$t_6.wallContainerjQuery.find(String.format("#{0}", noteId)).addClass("emptyAttachment");
                $$t_6.$x_1($v_3, noteId, true)
            });
        this.$I_1(noteId, false)
    },
    undoDeleteAttachment: function(noteId) {
        if (noteId in this.$4_1) delete this.$4_1[noteId];
        this.wallContainerjQuery.find(String.format("#undeleteAttachment_{0}", noteId)).stop(true).remove();
        var $v_0 = this.wallContainerjQuery.find(String.format("#{0}", noteId))
            .find(String.format("#attachment_{0}", noteId));
        Mscrm.FormInputControl.NotesV2.NotesWall.$H($v_0);
        $v_0.css("height", "auto").slideDown("fast");
        this.wallContainerjQuery.find(String.format("#{0}", noteId)).removeClass("emptyAttachment");
        $v_0.focus()
    },
    $18_1: function($p0) {
        if ($p0 in this.$4_1) {
            setPerfMarkerTimestamp("StartDeleteNoteAttachmentTimestamp");
            var $$t_5 = this;
            this.$B_1.deleteAttachment(this.$4_1[$p0],
                function($p1_0) {
                    var $v_0 = null, $v_1 = $$t_5.wallContainerjQuery.find(String.format("#{0}", $p0));
                    if (!IsNull($v_1)) $v_0 = $v_1.find(String.format("#attachment_{0}", $p0));
                    if ($p1_0.get_isSucceeded()) {
                        var $v_2 = $$t_5.findDisplayedPostById($p0);
                        $v_2.fileName = null;
                        $$t_5.$1V_1($v_2);
                        $$t_5.updatePostInDisplayedPostArray($p0, $v_2);
                        $$t_5.fireEvent(Wall.Interfaces.EventArguments.PostDeletedEventArgs,
                            "PostDeleted",
                            new Wall.Interfaces.EventArguments.PostDeletedEventArgs($p0));
                        setPerfMarkerTimestamp("FinishDeleteNoteAttachmentTimestamp");
                        $$t_5.$I_1($p0, true)
                    } else {
                        if (!IsNull($v_0)) {
                            Mscrm.FormInputControl.NotesV2.NotesWall.$H($v_0);
                            $v_0.css("height", "auto").slideDown("fast")
                        }
                        $$t_5.$M_1($p1_0, $p0, true)
                    }
                });
            delete this.$4_1[$p0]
        }
    },
    $x_1: function($p0, $p1, $p2) {
        Mscrm.FormInputControl.NotesV2.NotesWall.$H($p0);
        $p0.stop(true);
        if ($p2) {
            var $v_0 = {};
            $v_0["opacity"] = "0.2";
            var $$t_4 = this;
            $p0.show(1).delay(4e3).animate($v_0, 3e3, "linear", function() { $$t_4.$h_1($p1) })
        }
    },
    $h_1: function($p0) {
        var $v_0 = this.wallContainerjQuery.find(String.format("#undeleteAttachment_{0}", $p0));
        $v_0.remove();
        if ($v_0.hasClass("deleteAttachmentDiv")) {
            this.$18_1($p0);
            this.$I_1($p0, true)
        }
    },
    attachToNote: function(noteId) {
        if (!(!this.$9_1 && noteId === "createNote")) if (this.$C_1) return;
        noteId in this.$4_1 && this.$h_1(noteId);
        if (this.$N_1) return;
        var $v_0 = this.rootContainer.find("#" + noteId);
        if (_String.isNullOrWhiteSpace(XUI.Html.GetText($v_0.find(".attachmentFileName")[0]))) {
            $v_0.find("#attachButton").hide();
            if ($v_0.hasClass("attachmentIframeLoaded")) this.$10_1($v_0, noteId);
            else $v_0.addClass("showIframeOnLoad")
        }
    },
    $q_1: function($p0) {
        for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3], $v_1 = this.rootContainer.find("#" + $v_0.get_postId());
            this.$13_1($v_1);
            $v_1.trackChildFocus(new ChildFocusTrackerOptions(["container", this.rootContainer]));
            var $v_2 = $v_1.find(String.format("#{0}_notesTextBox", $v_0.get_postId()));
            if ($v_0.get_postId().substring(0, 4) !== "temp") {
                $v_2.textAreaAutoResize();
                $v_2
                    .textAreaSetWatermark(new
                        TextAreaWatermarkOptions([
                            "watermarkText", $v_0.get_postId() === "createNote"
                            ? Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.CreateNoteTextWatermark
                            : Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.TextWatermark
                        ]));
                $v_1.find(String.format("#{0}_notesTitleBox", $v_0.get_postId()))
                    .htmlElementSetWatermark(new
                        HTMLElementWatermarkOptions([
                            "watermarkText", Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.TitleWatermark
                        ]),
                        "input");
                var $v_3 = $v_1[0];
                this.$0_1($v_3,
                    $v_3.getAttribute("id").toString(),
                    "PostContainerItem",
                    $v_3.parentNode.getAttribute("id").toString());
                var $v_4 = $v_3.parentNode;
                this.$0_1($v_4,
                    $v_4.getAttribute("id").toString(),
                    "NotesWallContainer",
                    $v_4.parentNode.getAttribute("id").toString());
                var $v_5 = $v_4.parentNode;
                this.$0_1($v_2[0], $v_5.getAttribute("id").toString(), "NotesWall", "NotesTab");
                var $v_6 = $v_3.querySelector(".notesTextBoxDiv");
                this.$0_1($v_6, null, "PostItemTextBoxDiv", $v_3.getAttribute("id").toString());
                var $v_7 = $v_3.querySelector(".notesTextBoxSpacer");
                this.$0_1($v_7, null, "PostItemTextBoxSpacer", "PostItemTextBoxDiv");
                var $v_8 = $v_7.querySelector("input");
                this.$0_1($v_8, $v_8.getAttribute("id").toString(), "PostItemTitle", "PostItemTextBoxSpacer");
                var $v_9 = $v_7.querySelector("textarea");
                this.$0_1($v_9, $v_9.getAttribute("id").toString(), "PostItemText", "PostItemTextBoxSpacer");
                var $v_A = $v_3.querySelector(".deleteNotesAction");
                $v_A &&
                    this.$0_1($v_A, $v_A.getAttribute("id").toString(), "deleteNotesAction", "PostItemTextBoxSpacer");
                var $v_B = $v_3.querySelector("#deleteLink");
                $v_B && this.$0_1($v_B, $v_B.getAttribute("id").toString(), "deleteLink", "deleteNotesAction");
                var $v_C = $v_6.querySelector(".footer");
                this.$0_1($v_C, null, "PostFooter", "PostItemTextBoxDiv");
                var $v_D = $v_C.querySelector("#actionsSpacer");
                if ($v_D) {
                    this.$0_1($v_D, $v_D.getAttribute("id").toString(), "PostFooterActionArea", "PostFooter");
                    var $v_F = $v_D.querySelector("#attachSpacer");
                    this.$0_1($v_F,
                        $v_F.getAttribute("id").toString(),
                        "PostFooterAttachSpacer",
                        $v_D.getAttribute("id").toString());
                    var $v_G = $v_D.querySelector("#doneSpacer");
                    if ($v_G) {
                        this.$0_1($v_G,
                            $v_G.getAttribute("id").toString(),
                            "PostFooterDoneSpacer",
                            $v_D.getAttribute("id").toString());
                        var $v_K = $v_G.querySelector("#postButton");
                        this.$0_1($v_K,
                            $v_K.getAttribute("id").toString(),
                            "PostDoneButton",
                            $v_G.getAttribute("id").toString())
                    }
                    var $v_H = $v_F.querySelector("img");
                    this.$0_1($v_H, null, "PostAttachImage", $v_F.getAttribute("id").toString());
                    var $v_I = $v_D.querySelector("#attachButton");
                    this.$0_1($v_I,
                        $v_I.getAttribute("id").toString(),
                        "PostAttachButton",
                        $v_F.getAttribute("id").toString());
                    var $v_J = $v_F.querySelector(".notesAttachmentIframe");
                    this.$0_1($v_J, null, "PostAttachFrame", $v_F.getAttribute("id").toString())
                }
                var $v_E = $v_C.querySelector(".auditInformation");
                if ($v_E) {
                    this.$0_1($v_E, null, "PostAuditInformation", "PostFooter");
                    var $v_L = $v_E.querySelector(".posted");
                    this.$0_1($v_L, null, "DateOfPost", "PostAuditInformation");
                    var $v_M = $v_E.querySelector(".userName");
                    this.$0_1($v_M, $v_M.getAttribute("id").toString(), "PostUserName", "PostAuditInformation")
                }
            }
            this.convertToReadMode($v_0.get_postId());
            this.$1C_1($v_1)
        }
    },
    $0_1: function($p0, $p1, $p2, $p3) {
        if ($p0) {
            var $v_0 = {};
            if ($p1) $v_0["id"] = $p1;
            $v_0["type"] = $p2;
            $v_0["parentId"] = $p3;
            Mscrm.Utilities.registerControlForXrmUI($p0, $v_0)
        }
    },
    $s_1: function($p0, $p1) {
        Mscrm.FormInputControl.NotesV2.NotesWall.insertPostBefore($p0, this.rootContainer, $p1);
        this.fireEvent(Wall.Interfaces.EventArguments.PostsInsertedEventArgs,
            "PostsInserted",
            new Wall.Interfaces.EventArguments.PostsInsertedEventArgs([$p0]))
    },
    $1V_1: function($p0) {
        XUI.Html.SetText(this.rootContainer.find("#" + $p0.get_postId()).find(".attachmentFileName")[0],
            !$p0.fileName ? "" : $p0.fileName)
    },
    convertToReadMode: function(noteId) {
        var $v_0 = this.rootContainer.find("#" + noteId), $v_1 = $v_0.find(String.format("#{0}_notesTitleBox", noteId));
        if (_String.isNullOrEmpty($v_1.getElementValueWithoutWatermark("input"))) $v_0.addClass("emptyTitle");
        else $v_0.removeClass("emptyTitle");
        var $v_2 = $v_0.find(String.format("#{0}_notesTextBox", noteId));
        $v_2.attr("MinHeight", "20");
        $v_2.forceResize();
        if (_String.isNullOrEmpty($v_2.getValueWithoutWatermark())) $v_0.addClass("emptyText");
        else $v_0.removeClass("emptyText");
        $v_0.find(String.format("#{0}_attachFileIframe", noteId)).hide();
        var $v_3 = $v_0.find(".attachmentFileName");
        if ($v_3.length > 0 && _String.isNullOrWhiteSpace(XUI.Html.GetText($v_3[0]))) {
            $v_0.addClass("emptyAttachment");
            $v_0.find("#attachButton").show()
        } else {
            $v_0.removeClass("emptyAttachment");
            $v_0.find("#attachButton").hide()
        }
        this.$1S_1($v_0);
        $v_0.removeClass("editMode");
        $v_0.addClass("readMode")
    },
    $I_1: function($p0, $p1) {
        if (!(!this.$9_1 && $p0 === "createNote")) if (this.$C_1) return;
        var $v_0 = this.rootContainer.find("#" + $p0);
        if ($v_0.hasClass("editMode") && !$p1) return;
        $v_0.find(String.format("#{0}_notesTextBox", $p0)).attr("MinHeight", "40");
        $v_0.find(String.format("#{0}_notesTextBox", $p0)).forceResize();
        $v_0.find(String.format("#{0}_attachFileIframe", $p0)).hide();
        if (_String.isNullOrWhiteSpace(XUI.Html.GetText($v_0.find(".attachmentFileName")[0]))) {
            $v_0.addClass("emptyAttachment");
            $v_0.find("#attachButton").show()
        } else {
            $v_0.removeClass("emptyAttachment");
            $v_0.find("#attachButton").hide()
        }
        this.$14_1($v_0);
        $v_0.removeClass("readMode");
        $v_0.addClass("editMode");
        var $v_1 = $v_0.find(String.format("#{0}_attachFileIframe", $p0));
        if (!$v_1.hasClass("iframeLoaded") && !$v_1.hasClass("iframeLoading") && !this.$N_1) {
            $v_1.addClass("iframeLoading");
            var $v_2 = Mscrm.CrmUri.create("/notes/notesv2attach.aspx");
            if ($p0 !== "createNote") $v_2.get_query()["id"] = CrmEncodeDecode.CrmUrlEncode($p0);
            var $v_3 = null, $$t_A = this;
            $v_3 = function($p1_0) {
                $v_1.removeClass("iframeLoading");
                $v_1.addClass("iframeLoaded");
                $v_0.addClass("attachmentIframeLoaded");
                $v_1.unbind("load", $v_3);
                $v_0.hasClass("editMode") &&
                    $v_0.hasClass("showIframeOnLoad") &&
                    $v_0.find("#attachButton").css("display") === "none" &&
                    $$t_A.$10_1($v_0, $p0)
            };
            $v_1.load($v_3);
            $v_1[0].contentWindow.location.replace($v_2.toString())
        }
        if (!$p1) {
            var $v_4 = null, $$t_B = this;
            $v_4 = function($p1_0) {
                var $v_5 = getActiveElement();
                if (!IsNull($v_5) &&
                ($P_CRM($v_5).parents()
                    .index($v_0[0]) >
                    0 ||
                    $P_CRM($v_5).hasClass("post") && $v_5 === $v_0[0])) return;
                $$t_B.$w_1($p0);
                $P_CRM(document).unbind("click touchstart", $v_4)
            };
            $P_CRM(document).bind("click touchstart", $v_4)
        }
    },
    $n_1: function($p0) {
        if ($p0 === "createNote") this.clearInputFields();
        else {
            var $v_0 = this.findDisplayedPostById($p0), $v_1 = CrmEncodeDecode.CrmHtmlDecode($v_0.get_text());
            this.rootContainer.find(String.format("#{0}_notesTitleBox", $p0)).val($v_0.title);
            this.rootContainer.find(String.format("#{0}_notesTextBox", $p0)).val($v_1);
            XUI.Html.SetText(this.rootContainer.find("#" + $p0).find(".attachmentFileName")[0],
                !$v_0.fileName ? "" : $v_0.fileName)
        }
        this.rootContainer.parents(".tabsControl").find(".tabLink").filter(String.format("[tabid='{0}']", "NotesTab"))
            .focus();
        this.convertToReadMode($p0)
    },
    $w_1: function($p0) {
        if ($p0 === "createNote") this.$1P_1();
        else this.$1W_1($p0)
    },
    $1W_1: function($p0) {
        if (this.$C_1) {
            this.convertToReadMode($p0);
            return
        }
        if (IsNull(this.get_wallService())) return;
        if ($p0 in this.$D_1) {
            this.convertToReadMode($p0);
            return
        }
        $p0 in this.$4_1 && this.$h_1($p0);
        var $v_0 = this.findDisplayedPostById($p0),
            $v_1 = this.wallContainerjQuery.find(String.format("#{0}_notesTitleBox", $p0))
                .getElementValueWithoutWatermark("input"),
            $v_2 = this.wallContainerjQuery.find(String.format("#{0}_notesTextBox", $p0)).getValueWithoutWatermark(),
            $v_3 = Mscrm.FormInputControl.NotesV2.NotesWallHelper
                .getFileNameFromPost($p0, this.wallContainerjQuery.find("#" + $p0)),
            $v_4 = this.get_wallService().getWallServiceFactory().clonePost($v_0),
            $v_5 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
        $v_5.set_postId($v_4.get_postId());
        var $v_6 = _String.normalizeNewLine($v_2, "\r");
        if ($v_6 !== $v_0.get_text()) {
            $v_5.set_text($v_2);
            $v_4.set_text($v_6)
        }
        var $v_7 = $v_0.title || "";
        if ($v_1 !== $v_7) {
            $v_5.title = $v_1;
            $v_4.title = $v_1
        }
        if (isNullOrEmptyString($v_0.fileName) && !isNullOrEmptyString($v_3)) {
            $v_5.fileName = $v_3;
            $v_4.fileName = $v_3
        }
        if (IsNull($v_5.fileName) && IsNull($v_5.get_text()) && IsNull($v_5.title)) {
            this.convertToReadMode($p0);
            return
        }
        this.$D_1[$p0] = $v_4;
        var $v_8 = !!$v_5.fileName, $v_9 = this.rootContainer.find("#" + $p0);
        $v_4.set_postId(String.format("temp_{0}", $p0));
        this.$s_1($v_4, $v_9);
        var $v_A = this.rootContainer.find("#temp_" + $p0);
        $v_9.hide();
        $v_8 && Mscrm.FormInputControl.NotesV2.NotesWall.$1B($v_A);
        var $$t_G = this;
        this.$B_1.updatePost($v_5,
            function($p1_0) {
                var $v_B = $$t_G.wallContainerjQuery.find("#" + $p0),
                    $v_C = $$t_G.wallContainerjQuery.find("#" + $v_4.get_postId());
                if (!($v_C.length === 1 && $v_B.length === 1)) {
                    if ($p0 in $$t_G.$D_1) delete $$t_G.$D_1[$p0];
                    return
                }
                var $v_D = $$t_G.$D_1[$p0];
                $v_D.set_postId($p0);
                if ($p1_0.get_isSucceeded()) {
                    $$t_G.updatePostInDisplayedPostArray($p0, $v_D);
                    $$t_G.$s_1($v_D, $v_B);
                    $v_C.remove();
                    $v_B.remove();
                    $$t_G.fireEvent(Wall.Interfaces.EventArguments.PostUpdatedEventArgs,
                        "PostUpdated",
                        new Wall.Interfaces.EventArguments.PostUpdatedEventArgs($v_5))
                } else {
                    $v_C.remove();
                    $v_B.show();
                    $$t_G.$I_1($p0, false);
                    $$t_G.$M_1($p1_0, $p0, true)
                }
                delete $$t_G.$D_1[$p0]
            })
    },
    $1P_1: function() {
        if (this.$9_1) return;
        if (IsNull(this.get_wallService())) return;
        var $v_0 = $P_CRM(this.postTextBox),
            $v_1 = $v_0.getValueWithoutWatermark(),
            $v_2 = this.rootContainer.find(String.format("#{0}_notesTitleBox", "createNote"))
                .getElementValueWithoutWatermark("input"),
            $v_3 = Mscrm.FormInputControl.NotesV2.NotesWallHelper
                .getFileNameFromPost("createNote", this.rootContainer.find("#createNote"));
        if ((_String.isNullOrEmpty($v_1) || _String.isNullOrEmpty($v_1.trim())) &&
            (_String.isNullOrEmpty($v_2) || _String.isNullOrEmpty($v_2.trim())) &&
            _String.isNullOrEmpty($v_3)) {
            this.convertToReadMode("createNote");
            return
        }
        var $v_4 = this.get_wallService().getWallServiceFactory().createPost();
        $v_4.set_text(_String.normalizeNewLine($v_1, "\r"));
        $v_4.title = $v_2;
        $v_4.fileName = $v_3;
        $v_4.set_postId("temp" + Math.random().toString().replace(".", ""));
        var $v_5 = this.get_wallService().getWallServiceFactory().createPost();
        $v_5.set_text($v_1);
        $v_5.title = $v_2;
        $v_5.fileName = $v_3;
        this.createPost($v_4, $v_5)
    },
    $13_1: function($p0) {
        if (this.$3_1 > 0) {
            $p0.hasClass("post") && $p0.attr("tabIndex", this.$3_1.toString());
            $p0.find("post, a, textarea, input, button").filter(':not([tabIndex="-1"])')
                .attr("tabIndex", this.$3_1.toString())
        }
    },
    $1S_1: function($p0) { $p0.find(".notesTitleBox, .notesTextBox, #attachButton, .doneLink").attr("tabIndex", "-1") },
    $14_1: function($p0) {
        this.$3_1 > 0 &&
            $p0.find(".notesTitleBox, .notesTextBox, #attachButton, .doneLink").attr("tabIndex", this.$3_1.toString())
    },
    $1C_1: function($p0) {
        if (!(!this
            .$9_1 &&
            !IsNull($p0) &&
            $p0.length > 0 &&
            $p0[0].id === "createNote"))
            this.$C_1 &&
                $p0.find(".notesTitleBox, .notesTextBox, .attachImage, #attachButton, #deleteAttachmentLink, .doneLink")
                .attr("disabled", "disabled");
        this.$N_1 && $p0.find(".attachImage, #attachButton").attr("disabled", "disabled")
    },
    $10_1: function($p0, $p1) {
        var $v_0 = $p0.find(String.format("#{0}_attachFileIframe", $p1));
        $v_0.show();
        $p0.find(".userFile").attr("tabIndex", this.$3_1.toString());
        var $v_1 = $v_0[0];
        $v_1.focus();
        $v_1.contentDocument.body.focus();
        $v_0.find("userFile").focus();
        $v_0.attr("tabIndex", this.$3_1.toString())
    }
};
Mscrm.FormInputControl.NotesV2.NotesWallService = function(clientGlobalContext,
    wallEntityReference,
    rootContainer,
    currentUserName) {
    this.$E_0 = wallEntityReference;
    this.$L_0 = new Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory(clientGlobalContext, null, currentUserName);
    this.$X_0 = rootContainer;
    this.$L_0.$5_0.set_name(currentUserName)
};
Mscrm.FormInputControl.NotesV2.NotesWallService.prototype = {
    $L_0: null,
    $E_0: null,
    $X_0: null,
    get_entityId: function() { return this.$E_0.get_id() },
    set_entityId: function(value) {
        this.$E_0.set_id(value);
        return value
    },
    $a_0: false,
    get_isAsync: function() { return this.$a_0 },
    set_isAsync: function(value) {
        this.$a_0 = value;
        return value
    },
    getWallServiceFactory: function() { return this.$L_0 },
    retrievePosts: function(retrievePostsRequest, retrievePostsCallback) {
        Xrm.Tracing.XrmTraceHelper.traceLog(this, "retrieving notes...");
        Xrm.Internal.setPerfMarkerTimestamp("LoadNotesV2Content");
        var $v_0 = Wall.Control.Utils.RemoteCommandFactory
            .createRemoteCommand("Annotation", "RetrieveNotesCollection", null);
        $v_0.SetParameter("parentEntityId", this.$E_0.get_id());
        $v_0.SetParameter("pageNumber", retrievePostsRequest.get_pageNumber());
        $v_0.SetParameter("pageSize", retrievePostsRequest.get_pageSize());
        $v_0.SetParameter("pagingCookie", retrievePostsRequest.get_pagingCookie());
        var $v_1 = new Wall.Service.Messages.RetrievePostsBaseResponse, $$t_D = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            Xrm.Internal.setPerfMarkerTimestamp("LoadNotesV2Content_End");
            var $v_2 = Xrm.Internal.startMetricsStopwatch("NotesData_Render");
            $v_2.start();
            $v_1.set_posts(new Array(0));
            if (!IsNull($p1_0) && !IsNull($p1_0.ReturnValue) && $p1_0.Success) {
                var $v_3 = $p1_0.ReturnValue, $v_4 = $v_3.AnnotationCollection.AnnotationUI;
                Xrm.Tracing.XrmTraceHelper.traceLog($$t_D, "notes retrieved successfully");
                if (!IsNull($v_4))
                    if (typeof $v_4.length === "undefined") {
                        var $v_5 = $v_3.AnnotationCollection.AnnotationUI, $v_6 = $v_5;
                        $v_1.get_posts()[0] = Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
                            .serviceToWall($v_6)
                    } else
                        $v_4.length > 0 &&
                            $v_1.set_posts(Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
                                .serviceToWallCollection($v_4));
                $v_1.set_morePosts($v_3.MoreRecords);
                $v_1.set_pagingCookie($v_3.PagingCookie)
            } else {
                $v_1.set_errorMessage($$t_D.$A_0());
                Xrm.Tracing.XrmTraceHelper.traceError($$t_D, "notes retrieval failed: {0}", $v_1.get_errorMessage())
            }
            _Array.each(Wall.Interfaces.IPost,
                $v_1.get_posts(),
                function($p2_0, $p2_1) {
                    $p2_1.set_text($$t_D.$1E_0($p2_1.get_text()));
                    $p2_1.title = $$t_D.$1F_0($p2_1.title)
                });
            retrievePostsCallback($v_1);
            $v_2.stop()
        })
    },
    retrieveAllPosts: function(retrievePostsRequest, retrievePostsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postMessage: function(post, createPostCallback) {
        var $v_0 = post,
            $v_1 = $v_0.get_text(),
            $v_2 = $v_0.title,
            $v_3 = this.$L_0.$5_0.get_id(),
            $v_4 = this.$E_0.get_id(),
            $v_5 = this.$E_0.get_logicalName(),
            $v_6 = String
                .format("<annotation><isdocument>0</isdocument><notetext>{0}</notetext><objectid>{1}</objectid><objecttypecode>{2}</objecttypecode><subject>{3}</subject><ownerid type='8'>{4}</ownerid></annotation>", CrmEncodeDecode.CrmXmlEncode($v_1), CrmEncodeDecode.CrmXmlEncode($v_4), CrmEncodeDecode.CrmXmlEncode($v_5), CrmEncodeDecode.CrmXmlEncode($v_2), CrmEncodeDecode.CrmXmlEncode($v_3));
        if (_String.isNullOrEmpty($v_0.fileName)) this.$16_0($v_6, createPostCallback);
        else {
            var $$t_C = this;
            this.$12_0("createNote",
                $v_6,
                new Wall.Service.Messages.CreatePostResponse,
                function($p1_0) {
                    var $v_7 = $p1_0;
                    if (!_String.isNullOrEmpty($v_7.get_errorMessage())) $v_7.set_revertPost(true);
                    else {
                        var $v_8 = Mscrm.FormInputControl.NotesV2.NotesWallHelper
                            .getNoteIdQueryStringFromPost("createNote", $$t_C.$X_0.find("#createNote"));
                        !_String.isNullOrEmpty($v_8) &&
                            $v_7.set_postId(Sales.Common.CrmSoapServiceProxy.Utils.Utils.parseGuid($v_8))
                    }
                    createPostCallback($v_7)
                })
        }
    },
    updatePost: function(post, updatePostCallback) {
        var $v_0 = post, $v_1 = !IsNull($v_0.get_text()), $v_2 = !IsNull($v_0.title), $v_3 = !IsNull($v_0.fileName);
        if (IsNull($v_1) && IsNull($v_2) && IsNull($v_3)) {
            updatePostCallback(new Wall.Service.Messages.UpdatePostResponse);
            return
        }
        var $v_4 = "";
        if ($v_1)
            $v_4 = String.format($v_4 + "<notetext>{0}</notetext>", CrmEncodeDecode.CrmXmlEncode($v_0.get_text()));
        if ($v_2) $v_4 = String.format($v_4 + "<subject>{0}</subject>", CrmEncodeDecode.CrmXmlEncode($v_0.title));
        var $v_5 = "<annotation>" + $v_4 + "</annotation>";
        if (!$v_3) {
            this.$1X_0(post.get_postId(), $v_5, updatePostCallback);
            return
        } else {
            var $$t_A = this;
            this.$12_0(post.get_postId(),
                $v_5,
                new Wall.Service.Messages.UpdatePostResponse,
                function($p1_0) {
                    var $v_6 = $p1_0;
                    updatePostCallback($v_6)
                })
        }
    },
    $1F_0: function($p0) {
        var $v_0 = XUI.Xml.LoadXml($p0),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "//Title", null),
            $v_2 = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.GetText($v_1));
        return $v_2
    },
    $1E_0: function($p0) {
        var $v_0 = XUI.Xml.LoadXml($p0),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "//Text", null),
            $v_2 = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.GetText($v_1));
        return Mscrm.InlineEditUtilities.normalizeNewLineForTextArea($v_2)
    },
    formatPostTextForRendering: function(postText) {
        return Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.multilineHtmlEncode(postText, false)
    },
    deletePost: function(post, deletePostCallback) {
        var $v_0 = false,
            $v_1 = Wall.Control.Utils.RemoteCommandFactory.createRemoteCommand("Annotation", "DeleteAnnotation", null);
        $v_1.SetParameter("id", post.get_postId());
        var $$t_A = this;
        $v_1.ErrorHandler = function($p1_0, $p1_1) {
            var $v_2 = new Wall.Service.Messages.DeletePostResponse;
            if (!IsNull($p1_1)) $v_2.set_errorMessage(XUI.Xml.XMLSerializer.serializeToString($p1_1));
            else $v_2.set_errorMessage($p1_0);
            deletePostCallback($v_2);
            $v_0 = true
        };
        var $$t_B = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($v_0) return;
            var $v_3 = new Wall.Service.Messages.DeletePostResponse;
            (IsNull($p1_0) || IsNull($p1_0.ReturnValue) || !$p1_0.Success) && $v_3.set_errorMessage($$t_B.$A_0());
            deletePostCallback($v_3)
        })
    },
    deleteAttachment: function(post, deleteAttachmentCallback) {
        var $v_0 = false,
            $v_1 = Wall.Control.Utils.RemoteCommandFactory.createRemoteCommand("Annotation", "RemoveAttachment", null);
        $v_1.SetParameter("id", post.get_postId());
        $v_1.SetParameter("type", 5);
        var $$t_A = this;
        $v_1.ErrorHandler = function($p1_0, $p1_1) {
            var $v_2 = new Wall.Service.Messages.DeletePostResponse;
            if (!IsNull($p1_1)) $v_2.set_errorMessage(XUI.Xml.XMLSerializer.serializeToString($p1_1));
            else $v_2.set_errorMessage($p1_0);
            deleteAttachmentCallback($v_2);
            $v_0 = true
        };
        var $$t_B = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($v_0) return;
            var $v_3 = new Wall.Service.Messages.DeletePostResponse;
            (IsNull($p1_0) || IsNull($p1_0.ReturnValue) || !$p1_0.Success) && $v_3.set_errorMessage($$t_B.$A_0());
            deleteAttachmentCallback($v_3)
        })
    },
    $A_0: function() {
        var $v_0 = Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.GenericErrorMessage;
        return $v_0
    },
    $16_0: function($p0, $p1) {
        var $v_0 = false,
            $v_1 = Wall.Control.Utils.RemoteCommandFactory
                .createRemoteCommand("Annotation", "SaveWithAttachment", null);
        $v_1.SetParameter("id", "");
        $v_1.SetParameter("update", false);
        $v_1.SetParameter("type", 5);
        $v_1.SetParameter("dataXml", $p0);
        var $$t_B = this;
        $v_1.ErrorHandler = function($p1_0, $p1_1) {
            var $v_2 = new Wall.Service.Messages.CreatePostResponse;
            if (!IsNull($p1_1)) $v_2.set_errorMessage(XUI.Xml.XMLSerializer.serializeToString($p1_1));
            else $v_2.set_errorMessage($p1_0);
            $v_2.set_revertPost(true);
            $p1($v_2);
            $v_0 = true
        };
        var $$t_C = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($v_0) return;
            var $v_3 = new Wall.Service.Messages.CreatePostResponse;
            if (IsNull($p1_0) || IsNull($p1_0.ReturnValue)) {
                $v_3.set_errorMessage($$t_C.$A_0());
                $v_3.set_revertPost(true);
                $p1($v_3);
                return
            }
            var $v_4 = XUI.Xml.LoadXml($p1_0.ReturnValue);
            if (!$p1_0.Success) {
                if (XUI.Xml
                    .SelectSingleNode($v_4, "/error", null)
                ) $v_3.set_errorMessage(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "/error", null)));
                else $v_3.set_errorMessage($$t_C.$A_0());
                $v_3.set_revertPost(true);
                $p1($v_3);
                return
            }
            $v_3.set_postId(Sales.Common.CrmSoapServiceProxy.Utils.Utils
                .parseGuid(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "/annotation/annotationid", null))));
            $p1($v_3)
        })
    },
    $1X_0: function($p0, $p1, $p2) {
        var $v_0 = false,
            $v_1 = Wall.Control.Utils.RemoteCommandFactory
                .createRemoteCommand("Annotation", "UpdateAndRetrieveTimeStamp", null);
        $v_1.SetParameter("annotationId", $p0);
        $v_1.SetXmlParameter("annotationXml", $p1);
        var $$t_B = this;
        $v_1.ErrorHandler = function($p1_0, $p1_1) {
            var $v_2 = new Wall.Service.Messages.UpdatePostResponse;
            if (!IsNull($p1_1)) $v_2.set_errorMessage(XUI.Xml.XMLSerializer.serializeToString($p1_1));
            else $v_2.set_errorMessage($p1_0);
            $p2($v_2);
            $v_0 = true
        };
        var $$t_C = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($v_0) return;
            var $v_3 = new Wall.Service.Messages.UpdatePostResponse;
            (IsNull($p1_0) || IsNull($p1_0.ReturnValue) || !$p1_0.Success) && $v_3.set_errorMessage($$t_C.$A_0());
            $p2($v_3)
        })
    },
    $12_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = this.$X_0.find("#" + $p0);
        if (!$v_0.hasClass("attachmentIframeLoaded"));
        var $v_1 = $v_0.find(String.format("#{0}_attachFileIframe", $p0));
        Mscrm.FormInputControl.NotesV2.NotesWallHelper.getCrmFormSubmitXmlJQueryFromPost($p0, $v_0).val($p1);
        var $v_2 = null, $v_3 = $v_1.get(0).contentWindow, $$t_D = this;
        $v_2 = function($p1_0) {
            var $v_5 = Mscrm.FormInputControl.NotesV2.NotesWallHelper.getErrorCodeDivJQueryFromPost($p0, $v_0),
                $v_6 = Mscrm.FormInputControl.NotesV2.NotesWallHelper.getErrorInfoDivJQueryFromPost($p0, $v_0);
            if ($v_5.length > 0 && !_String.isNullOrEmpty($v_5.html())) $p2.set_errorMessage($v_5.html());
            else if ($v_6.length > 0 && !_String.isNullOrEmpty($v_6.html())) $p2.set_errorMessage($v_6.html());
            else {
                var $v_7 = Mscrm.FormInputControl.NotesV2.NotesWallHelper.getSerializedExceptionFromPost($p0, $v_0);
                if (!_String.isNullOrEmpty($v_7)) {
                    $p2.set_errorMessage($v_7);
                    Mscrm.FormInputControl.NotesV2.NotesWallHelper.resetAttachmentIframe($p0, $v_0)
                } else
                    !Mscrm.FormInputControl.NotesV2.NotesWallHelper.isIframeContentValid($p0, $v_0) &&
                        $p2.set_errorMessage($$t_D.$A_0())
            }
            $p3($p2);
            $v_1.unbind("load", $v_2)
        };
        $v_1.load($v_2);
        var $v_4 = $v_3.attachForNotesV2();
        if (!_String.isNullOrEmpty($v_4)) {
            $p2.set_errorMessage($v_4);
            $p3($p2);
            $v_1.unbind("load", $v_2)
        }
    },
    formatCommentTextForRendering: function(commentText) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    retrieveComments: function(retrieveCommentsRequest, retrieveCommentsCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    postComment: function(comment, createCommentCallback) {
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
Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory = function(clientContext, regardingEntity, currentUserName) {
    this.$5_0 = new Wall.Service.ObjectModel.EntityReference;
    this.$5_0.set_id(this.$1R_0(clientContext.getUserId()));
    this.$5_0.set_logicalName("systemuser");
    this.$5_0.set_name(currentUserName);
    this.$g_0 = regardingEntity
};
Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory.prototype = {
    $5_0: null,
    $g_0: null,
    get_currentUser: function() { return this.$5_0 },
    set_currentUser: function(value) {
        this.$5_0 = value;
        return value
    },
    createPost: function() {
        var $v_0 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
        $v_0.modifiedBy = this.$5_0;
        $v_0.formattedModifiedOn = Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.JustNow;
        $v_0.set_createdBy(this.$5_0);
        $v_0.set_formattedCreatedOn(Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.JustNow);
        $v_0.set_deleteEnabled(true);
        $v_0.set_regardingId(this.$g_0);
        $v_0.title = "";
        $v_0.set_text("");
        $v_0.fileName = "";
        return $v_0
    },
    clonePost: function(originalPost) {
        var $v_0 = originalPost, $v_1 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
        $v_1.modifiedBy = this.$5_0;
        $v_1.formattedModifiedOn = Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.JustNow;
        $v_1.set_createdBy($v_0.get_createdBy());
        $v_1.set_createdOn($v_0.get_createdOn());
        $v_1.set_formattedCreatedOn($v_0.get_formattedCreatedOn());
        $v_1.set_deleteEnabled($v_0.get_deleteEnabled());
        $v_1.set_regardingId($v_0.get_regardingId());
        $v_1.fileName = $v_0.fileName;
        $v_1.fileSize = $v_0.fileSize;
        $v_1.set_postId($v_0.get_postId());
        $v_1.set_text($v_0.get_text());
        $v_1.title = $v_0.title;
        return $v_1
    },
    $1R_0: function($p0) { return !isNullOrEmptyString($p0) ? $p0.replace("{", "").replace("}", "") : "" },
    createEntityReference: function() { return new Wall.Service.ObjectModel.EntityReference },
    createRetrievePostsRequest: function() { return new Wall.Service.Messages.RetrievePostsRequest },
    createRetrieveLikesRequest: function() { throw Error.create("NotImplementedException") },
    createComment: function() { throw Error.create("NotImplementedException") },
    createRetrieveCommentsRequest: function() { throw Error.create("NotImplementedException") }
};
Mscrm.FormInputControl.NotesV2.WallCommands = function() {};
Mscrm.FormInputControl.NotesV2
    .NotesWallCommandDispatcher = function(wallElementId, wall, wallService) { this.$1_0 = wall };
Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher.prototype = {
    $1_0: null,
    dispatchNoteCommand: function(commandName, parameters) {
        var $v_0 = parameters;
        if (_String.isNullOrEmpty(commandName)) throw Error.create("commandName is undefined");
        commandName = commandName.toLowerCase();
        switch (commandName) {
        case "post":
            this.$1O_0($v_0);
            break;
        case "delete":
            this.$19_0($v_0);
            break;
        case "undodeletepost":
            this.$1U_0($v_0);
            break;
        case "edit":
            this.$1D_0($v_0);
            break;
        case "read":
            this.$1Q_0($v_0);
            break;
        case "deleteattachment":
            this.$17_0($v_0);
            break;
        case "undodeleteattachment":
            this.$1T_0($v_0);
            break;
        case "attach":
            this.$15_0($v_0);
            break;
        case "discard":
            this.$n_0($v_0);
            break;
        default:
            throw Error.create("invalid commandName")
        }
    },
    $1T_0: function($p0) { this.$1_0.undoDeleteAttachment($p0) },
    $17_0: function($p0) { this.$1_0.deleteAttachment($p0) },
    $1D_0: function($p0) { this.$1_0.$I_1($p0, false) },
    $1Q_0: function($p0) { this.$1_0.convertToReadMode($p0) },
    $19_0: function($p0) { this.$1_0.deletePost($p0) },
    $1U_0: function($p0) { this.$1_0.undoDeleteNote($p0) },
    $15_0: function($p0) { this.$1_0.attachToNote($p0) },
    $n_0: function($p0) { this.$1_0.$n_1($p0) },
    $1O_0: function($p0) { this.$1_0.$w_1($p0) }
};
Type.registerNamespace("Mscrm.FormInputControl.NotesV2.Convertors");
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter = function() {};
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.serviceToWall = function(annotationUI) {
    var $v_0 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
    $v_0.set_postId(annotationUI.NoteId);
    $v_0.set_text(annotationUI.Text);
    $v_0.set_createdOn(new Date(annotationUI.CreatedOn.toString()));
    $v_0.set_createdBy(Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.$o(annotationUI.CreatedBy));
    $v_0.modifiedOn = new Date(annotationUI.ModifiedOn.toString());
    $v_0.modifiedBy = Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.$o(annotationUI.ModifiedBy);
    $v_0.fileName = annotationUI.FileName;
    $v_0.fileSize = annotationUI.FileSize;
    $v_0.title = annotationUI.Title;
    $v_0.set_formattedCreatedOn("");
    $v_0.formattedModifiedOn = "";
    return $v_0
};
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.serviceToWallCollection = function(annotationUIs) {
    for (var $v_0 = new Array(0), $v_1 = 0;
        $v_1 < annotationUIs.length;
        $v_1++
    ) $v_0[$v_1] = Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.serviceToWall(annotationUIs[$v_1]);
    return $v_0
};
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.$o = function($p0) {
    if (IsNull($p0)) return null;
    var $v_0 = new Wall.Service.ObjectModel.EntityReference;
    $v_0.set_id($p0.Id);
    $v_0.set_logicalName($p0.TypeName);
    $v_0.set_name($p0.Name);
    return $v_0
};
Type.registerNamespace("Mscrm.FormInputControl.NotesV2.ObjectModel");
Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost = function() {
    Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost.initializeBase(this)
};
Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost.prototype = {
    modifiedOn: null,
    formattedModifiedOn: null,
    modifiedBy: null,
    fileName: null,
    fileSize: 0,
    title: null,
    get_modifiedOn: function() { return this.modifiedOn },
    set_modifiedOn: function(value) {
        this.modifiedOn = value;
        return value
    },
    get_formattedModifiedOn: function() { return this.formattedModifiedOn },
    set_formattedModifiedOn: function(value) {
        this.formattedModifiedOn = value;
        return value
    },
    get_modifiedBy: function() { return this.modifiedBy },
    set_modifiedBy: function(value) {
        this.modifiedBy = value;
        return value
    },
    get_fileName: function() { return this.fileName },
    set_fileName: function(value) {
        this.fileName = value;
        return value
    },
    get_fileSize: function() { return this.fileSize },
    set_fileSize: function(value) {
        this.fileSize = value;
        return value
    },
    get_title: function() { return this.title },
    set_title: function(value) {
        this.title = value;
        return value
    }
};
Wall.Interfaces.EventArguments.PostUpdatedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.PostUpdatedEventArgs", Sys.EventArgs);
Wall.Service.Messages.UpdatePostResponse.registerClass("Wall.Service.Messages.UpdatePostResponse",
    Wall.Service.Messages.BaseResponse);
Mscrm.FormInputControl.NotesV2.NotesControl.registerClass("Mscrm.FormInputControl.NotesV2.NotesControl",
    Mscrm.CrmUIControl);
Mscrm.FormInputControl.NotesV2.NotesWallHelper.registerClass("Mscrm.FormInputControl.NotesV2.NotesWallHelper");
Mscrm.FormInputControl.NotesV2.NotesWall.registerClass("Mscrm.FormInputControl.NotesV2.NotesWall", Wall.UI.Wall);
Mscrm.FormInputControl.NotesV2.NotesWallService
    .registerClass("Mscrm.FormInputControl.NotesV2.NotesWallService", null, Wall.Interfaces.IWallService);
Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory
    .registerClass("Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory", null, Wall.Interfaces.IWallServiceFactory);
Mscrm.FormInputControl.NotesV2.WallCommands.registerClass("Mscrm.FormInputControl.NotesV2.WallCommands");
Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher
    .registerClass("Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher");
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
    .registerClass("Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter");
Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost
    .registerClass("Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost", Wall.Service.ObjectModel.Post);
Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings = null;
Mscrm.FormInputControl.NotesV2.NotesWall.notesWallJQuerySelector = ".notesWall";
Mscrm.FormInputControl.NotesV2.NotesWall.createTemplateId = "createNote";
Mscrm.FormInputControl.NotesV2.NotesWall.noteTitleTextBoxIdJQueryTemplate = "#{0}_notesTitleBox";
Mscrm.FormInputControl.NotesV2.NotesWall.postTextBoxIdJQueryTemplate = "#{0}_notesTextBox";
Mscrm.FormInputControl.NotesV2.NotesWall.createTemplatePostClass = "createNote";
Mscrm.FormInputControl.NotesV2.NotesWall.entityPageIframeIdTemplate = "#{0}_attachFileIframe";
Mscrm.FormInputControl.NotesV2.NotesWall.attachmentIframeLoadedClass = "attachmentIframeLoaded";
Mscrm.FormInputControl.NotesV2.NotesWall.iframeLoadedClass = "iframeLoaded";
Mscrm.FormInputControl.NotesV2.NotesWall.iframeLoadingClass = "iframeLoading";
Mscrm.FormInputControl.NotesV2.WallCommands.postCommandName = "post";
Mscrm.FormInputControl.NotesV2.WallCommands.deleteCommandName = "delete";
Mscrm.FormInputControl.NotesV2.WallCommands.undoDeleteNoteCommandName = "undodeletepost";
Mscrm.FormInputControl.NotesV2.WallCommands.editCommandName = "edit";
Mscrm.FormInputControl.NotesV2.WallCommands.readCommandName = "read";
Mscrm.FormInputControl.NotesV2.WallCommands.deleteAttachmentCommandName = "deleteattachment";
Mscrm.FormInputControl.NotesV2.WallCommands.undoDeleteAttachmentCommandName = "undodeleteattachment";
Mscrm.FormInputControl.NotesV2.WallCommands.attachToNoteCommandName = "attach";
Mscrm.FormInputControl.NotesV2.WallCommands.discardCommandName = "discard"