Type.registerNamespace("Wall.Control.ScriptSharp");
Wall.Control.ScriptSharp.jQueryDialogOptionsImportHelper = function() {};
Wall.Control.ScriptSharp.jQueryDialogOptionsImportHelper
    .$$cctor = function() {
        Wall.Control.ScriptSharp.jQueryDialogOptionsImportHelper.registerjQueryPluginOptions("jQueryDialogOptions")
    };
Wall.Control.ScriptSharp.jQueryDialogOptionsImportHelper
    .registerjQueryPluginOptions = function(pluginOptionsClassName) {
        eval(String.format("{0} = {1}", pluginOptionsClassName, Object.getName()))
    };
Type.registerNamespace("Wall.Service.Convertors");
Wall.Service.Convertors.EntityReferenceConvertor = function() {};
Wall.Service.Convertors.EntityReferenceConvertor.serviceToWall = function(serviceEntityReference) {
    if (IsNull(serviceEntityReference)) return null;
    var $v_0 = new Wall.Service.ObjectModel.EntityReference;
    $v_0.id = serviceEntityReference.id;
    $v_0.logicalName = serviceEntityReference.logicalName;
    $v_0.name = serviceEntityReference.name;
    return $v_0
};
Wall.Service.Convertors.EntityReferenceConvertor.wallToService = function(wallEntityReference) {
    if (IsNull(wallEntityReference)) return null;
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
    $v_0.id = wallEntityReference.id;
    $v_0.logicalName = wallEntityReference.logicalName;
    $v_0.name = wallEntityReference.name;
    return $v_0
};
Wall.Service.Convertors.SystemUserConvertor = function() {};
Wall.Service.Convertors.SystemUserConvertor.serviceToWall = function(serviceUser) {
    var $v_0 = new Wall.Service.ObjectModel.SystemUser;
    $v_0.set_fullName(serviceUser.get_fullName());
    $v_0.set_internalEmailAddress(_String.isNullOrEmpty(serviceUser.get_internalEmailAddress())
        ? ""
        : serviceUser.get_internalEmailAddress());
    $v_0.set_systemUserId(serviceUser.get_systemUserId());
    $v_0.set_title(_String.isNullOrEmpty(serviceUser.get_title()) ? "" : serviceUser.get_title());
    $v_0.set_reference(new Wall.Service.ObjectModel.EntityReference);
    $v_0.reference.set_id($v_0.sytemUserId);
    $v_0.reference.set_logicalName("systemuser");
    $v_0.reference.set_name($v_0.fullName);
    return $v_0
};
Wall.Service.Convertors.SystemUserConvertor.serviceToWallCollection = function(serviceUsers) {
    var $v_0 = new Array(0);
    if (!serviceUsers) return $v_0;
    for (var $v_1 = 0; $v_1 < serviceUsers.length; $v_1++)
        $v_0[$v_1] = Wall.Service.Convertors.SystemUserConvertor.serviceToWall(serviceUsers[$v_1]);
    return $v_0
};
Type.registerNamespace("Wall.Service.Messages");
Wall.Service.Messages.BaseResponse = function() {};
Wall.Service.Messages.BaseResponse.prototype = {
    $N_0: null,
    get_isSucceeded: function() { return _String.isNullOrEmpty(this.$N_0) },
    get_errorMessage: function() { return this.$N_0 },
    set_errorMessage: function(value) {
        this.$N_0 = value;
        return value
    }
};
Wall.Service.Messages.CreateCommentResponse = function() {
    Wall.Service.Messages.CreateCommentResponse.initializeBase(this)
};
Wall.Service.Messages.CreateCommentResponse.prototype = {
    $U_1: null,
    $i_1: false,
    get_commentId: function() { return this.$U_1 },
    set_commentId: function(value) {
        this.$U_1 = value;
        return value
    },
    get_revertComment: function() { return this.$i_1 },
    set_revertComment: function(value) {
        this.$i_1 = value;
        return value
    }
};
Wall.Service.Messages.CreatePostResponse = function() { Wall.Service.Messages.CreatePostResponse.initializeBase(this) };
Wall.Service.Messages.CreatePostResponse.prototype = {
    $g_1: null,
    $j_1: false,
    get_postId: function() { return this.$g_1 },
    set_postId: function(value) {
        this.$g_1 = value;
        return value
    },
    get_revertPost: function() { return this.$j_1 },
    set_revertPost: function(value) {
        this.$j_1 = value;
        return value
    }
};
Wall.Service.Messages.DeleteCommentResponse = function() {
    Wall.Service.Messages.DeleteCommentResponse.initializeBase(this)
};
Wall.Service.Messages.DeletePostResponse = function() { Wall.Service.Messages.DeletePostResponse.initializeBase(this) };
Wall.Service.Messages.RetrieveCommentsRequest = function() {
    Wall.Service.Messages.RetrieveCommentsRequest.initializeBase(this)
};
Wall.Service.Messages.RetrieveCommentsRequest.prototype = {
    $f_1: null,
    get_parentPostId: function() { return this.$f_1 },
    set_parentPostId: function(value) {
        this.$f_1 = value;
        return value
    }
};
Wall.Service.Messages.RetrieveCommentsResponse = function() {
    Wall.Service.Messages.RetrieveCommentsResponse.initializeBase(this)
};
Wall.Service.Messages.RetrieveCommentsResponse.prototype = {
    $V_1: null,
    $l_1: 0,
    get_comments: function() { return this.$V_1 },
    set_comments: function(value) {
        this.$V_1 = value;
        return value
    },
    get_totalCommentCount: function() { return this.$l_1 },
    set_totalCommentCount: function(value) {
        this.$l_1 = value;
        return value
    }
};
Wall.Service.Messages.RetrievePostsBaseResponse = function() {
    Wall.Service.Messages.RetrievePostsBaseResponse.initializeBase(this)
};
Wall.Service.Messages.RetrievePostsBaseResponse.prototype = {
    $h_1: null,
    $e_1: false,
    $E_1: null,
    get_posts: function() { return this.$h_1 },
    set_posts: function(value) {
        this.$h_1 = value;
        return value
    },
    get_morePosts: function() { return this.$e_1 },
    set_morePosts: function(value) {
        this.$e_1 = value;
        return value
    },
    get_pagingCookie: function() { return this.$E_1 },
    set_pagingCookie: function(value) {
        this.$E_1 = value;
        return value
    }
};
Wall.Service.Messages.RetrievePostsRequest = function() {};
Wall.Service.Messages.RetrievePostsRequest.prototype = {
    $5_0: 0,
    $8_0: 0,
    $k_0: null,
    $Y_0: null,
    $E_0: null,
    get_pageNumber: function() { return this.$5_0 },
    set_pageNumber: function(value) {
        this.$5_0 = value;
        return value
    },
    get_pageSize: function() { return this.$8_0 },
    set_pageSize: function(value) {
        this.$8_0 = value;
        return value
    },
    get_startDate: function() { return this.$k_0 },
    set_startDate: function(value) {
        this.$k_0 = value;
        return value
    },
    get_endDate: function() { return this.$Y_0 },
    set_endDate: function(value) {
        this.$Y_0 = value;
        return value
    },
    get_pagingCookie: function() { return this.$E_0 },
    set_pagingCookie: function(value) {
        this.$E_0 = value;
        return value
    }
};
Wall.Service.Messages.RetrieveWallFiltersResponse = function() {
    Wall.Service.Messages.RetrieveWallFiltersResponse.initializeBase(this)
};
Wall.Service.Messages.RetrieveWallFiltersResponse.prototype = {
    $a_1: null,
    get_wallFilters: function() { return this.$a_1 },
    set_wallFilters: function(value) {
        this.$a_1 = value;
        return value
    }
};
Wall.Service.Messages.SetDefaultFilterResponse = function() {
    Wall.Service.Messages.SetDefaultFilterResponse.initializeBase(this)
};
Type.registerNamespace("Wall.Service.ObjectModel");
Wall.Service.ObjectModel.Comment = function() {};
Wall.Service.ObjectModel.Comment.prototype = {
    commentId: null,
    text: null,
    imageUrl: null,
    parentPost: null,
    createdOn: null,
    createdBy: null,
    deleteEnabled: false,
    formattedCreatedOn: null,
    get_commentId: function() { return this.commentId },
    set_commentId: function(value) {
        this.commentId = value;
        return value
    },
    get_text: function() { return this.text },
    set_text: function(value) {
        this.text = value;
        return value
    },
    get_imageUrl: function() { return this.imageUrl },
    set_imageUrl: function(value) {
        this.imageUrl = value;
        return value
    },
    get_parentPost: function() { return this.parentPost },
    set_parentPost: function(value) {
        this.parentPost = value;
        return value
    },
    get_createdOn: function() { return this.createdOn },
    set_createdOn: function(value) {
        this.createdOn = value;
        return value
    },
    get_createdBy: function() { return this.createdBy },
    set_createdBy: function(value) {
        this.createdBy = value;
        return value
    },
    get_deleteEnabled: function() { return this.deleteEnabled },
    set_deleteEnabled: function(value) {
        this.deleteEnabled = value;
        return value
    },
    get_formattedCreatedOn: function() { return this.formattedCreatedOn },
    set_formattedCreatedOn: function(value) {
        this.formattedCreatedOn = value;
        return value
    }
};
Wall.Service.ObjectModel.EntityReference = function() {};
Wall.Service.ObjectModel.EntityReference.createEntityReference = function(id, logicalName, name, etc) {
    var $v_0 = new Wall.Service.ObjectModel.EntityReference;
    $v_0.id = id;
    $v_0.logicalName = logicalName;
    $v_0.name = name;
    $v_0.typecode = etc;
    return $v_0
};
Wall.Service.ObjectModel.EntityReference.prototype = {
    id: null,
    logicalName: null,
    name: null,
    typecode: 0,
    get_id: function() { return this.id },
    set_id: function(value) {
        this.id = value;
        return value
    },
    get_logicalName: function() { return this.logicalName },
    set_logicalName: function(value) {
        this.logicalName = value;
        return value
    },
    get_name: function() { return this.name },
    set_name: function(value) {
        this.name = value;
        return value
    },
    get_typeCode: function() { return this.typecode },
    set_typeCode: function(value) {
        this.typecode = value;
        return value
    }
};
Wall.Service.ObjectModel.Post = function() {};
Wall.Service.ObjectModel.Post.prototype = {
    postId: null,
    text: null,
    type: 0,
    createdBy: null,
    imageUrl: null,
    relativeImageUrl: null,
    regardingId: null,
    commentCounter: 0,
    likeCounter: 0,
    likeId: null,
    source: 0,
    deleteEnabled: false,
    createdOn: null,
    comments: null,
    formattedCreatedOn: null,
    errorDetails: null,
    get_type: function() { return this.type },
    set_type: function(value) {
        this.type = value;
        return value
    },
    get_imageUrl: function() { return this.imageUrl },
    set_imageUrl: function(value) {
        this.imageUrl = value;
        return value
    },
    get_regardingId: function() { return this.regardingId },
    set_regardingId: function(value) {
        this.regardingId = value;
        return value
    },
    get_commentCounter: function() { return this.commentCounter },
    set_commentCounter: function(value) {
        this.commentCounter = value;
        return value
    },
    get_likeCounter: function() { return this.likeCounter },
    set_likeCounter: function(value) {
        this.likeCounter = value;
        return value
    },
    get_source: function() { return this.source },
    set_source: function(value) {
        this.source = value;
        return value
    },
    get_formattedCreatedOn: function() { return this.formattedCreatedOn },
    set_formattedCreatedOn: function(value) {
        this.formattedCreatedOn = value;
        return value
    },
    get_errorDetails: function() { return this.errorDetails },
    set_errorDetails: function(value) {
        this.errorDetails = value;
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
    get_comments: function() { return this.comments },
    set_comments: function(value) {
        this.comments = value;
        return value
    },
    get_createdOn: function() { return this.createdOn },
    set_createdOn: function(value) {
        this.createdOn = value;
        return value
    },
    get_createdBy: function() { return this.createdBy },
    set_createdBy: function(value) {
        this.createdBy = value;
        return value
    },
    get_deleteEnabled: function() { return this.deleteEnabled },
    set_deleteEnabled: function(value) {
        this.deleteEnabled = value;
        return value
    },
    get_liked: function() { return this.likeCounter > 0 },
    get_likeId: function() { return this.likeId },
    set_likeId: function(value) {
        this.likeId = value;
        return value
    },
    get_relativeImageUrl: function() { return this.relativeImageUrl },
    set_relativeImageUrl: function(value) {
        this.relativeImageUrl = value;
        return value
    }
};
Wall.Service.ObjectModel.SystemUser = function() {};
Wall.Service.ObjectModel.SystemUser.prototype = {
    fullName: null,
    internalEmailAddress: null,
    sytemUserId: null,
    title: null,
    reference: null,
    get_fullName: function() { return this.fullName },
    set_fullName: function(value) {
        if (value !== this.fullName) this.fullName = value;
        return value
    },
    get_internalEmailAddress: function() { return this.internalEmailAddress },
    set_internalEmailAddress: function(value) {
        if (value !== this.internalEmailAddress) this.internalEmailAddress = value;
        return value
    },
    get_systemUserId: function() { return this.sytemUserId },
    set_systemUserId: function(value) {
        if (value !== this.sytemUserId) this.sytemUserId = value;
        return value
    },
    get_title: function() { return this.title },
    set_title: function(value) {
        if (value !== this.title) this.title = value;
        return value
    },
    get_reference: function() { return this.reference },
    set_reference: function(value) {
        if (value !== this.reference) this.reference = value;
        return value
    }
};
Wall.Service.ObjectModel.WallAction = function(text,
    iconUrl,
    disabledIconUrl,
    toolTip,
    enabled,
    commandName,
    callback,
    context,
    isPopupAction,
    actionType) {
    this.text = text;
    this.iconUrl = iconUrl;
    this.disabledIconUrl = disabledIconUrl;
    this.toolTip = toolTip;
    this.enabled = enabled;
    this.commandName = commandName;
    this.callback = callback;
    this.context = context;
    this.isPopupAction = isPopupAction;
    this.actionType = actionType;
    this.isVisible = true
};
Wall.Service.ObjectModel.WallAction.prototype = {
    text: null,
    iconUrl: null,
    disabledIconUrl: null,
    toolTip: null,
    enabled: false,
    commandName: null,
    callback: null,
    context: null,
    isPopupAction: false,
    actionType: null,
    isVisible: false,
    get_text: function() { return this.text },
    set_text: function(value) {
        this.text = value;
        return value
    },
    get_iconUrl: function() { return this.iconUrl },
    set_iconUrl: function(value) {
        this.iconUrl = value;
        return value
    },
    get_disabledIconUrl: function() { return this.disabledIconUrl },
    set_disabledIconUrl: function(value) {
        this.disabledIconUrl = value;
        return value
    },
    get_toolTip: function() { return this.toolTip },
    set_toolTip: function(value) {
        this.toolTip = value;
        return value
    },
    get_enabled: function() { return this.enabled },
    set_enabled: function(value) {
        this.enabled = value;
        return value
    },
    get_commandName: function() { return this.commandName },
    set_commandName: function(value) {
        this.commandName = value;
        return value
    },
    get_callback: function() { return this.callback },
    set_callback: function(value) {
        this.callback = value;
        return value
    },
    get_context: function() { return this.context },
    set_context: function(value) {
        this.context = value;
        return value
    },
    get_isPopupAction: function() { return this.isPopupAction },
    set_isPopupAction: function(value) {
        this.isPopupAction = value;
        return value
    },
    get_actionType: function() { return this.actionType },
    set_actionType: function(value) {
        this.actionType = value;
        return value
    },
    get_isVisible: function() { return this.isVisible },
    set_isVisible: function(value) {
        this.isVisible = value;
        return value
    }
};
Wall.Service.ObjectModel.WallFilter = function() {};
Wall.Service.ObjectModel.WallFilter.create = function(text,
    toolTip,
    commandName,
    callback,
    context,
    filterType,
    isSelected) {
    var $v_0 = new Wall.Service.ObjectModel.WallFilter;
    $v_0.text = text;
    $v_0.toolTip = toolTip;
    $v_0.commandName = commandName;
    $v_0.callback = callback;
    $v_0.context = context;
    $v_0.filterType = filterType;
    $v_0.isSelected = isSelected;
    return $v_0
};
Wall.Service.ObjectModel.WallFilter.prototype = {
    text: null,
    toolTip: null,
    commandName: null,
    callback: null,
    context: null,
    filterType: null,
    isSelected: false,
    subFilters: null,
    get_text: function() { return this.text },
    set_text: function(value) {
        this.text = value;
        return value
    },
    get_toolTip: function() { return this.toolTip },
    set_toolTip: function(value) {
        this.toolTip = value;
        return value
    },
    get_commandName: function() { return this.commandName },
    set_commandName: function(value) {
        this.commandName = value;
        return value
    },
    get_callback: function() { return this.callback },
    set_callback: function(value) {
        this.callback = value;
        return value
    },
    get_context: function() { return this.context },
    set_context: function(value) {
        this.context = value;
        return value
    },
    get_subFilters: function() { return this.subFilters },
    set_subFilters: function(value) {
        this.subFilters = value;
        return value
    },
    get_filterType: function() { return this.filterType },
    set_filterType: function(value) {
        this.filterType = value;
        return value
    },
    get_isSelected: function() { return this.isSelected },
    set_isSelected: function(value) {
        this.isSelected = value;
        return value
    }
};
Type.registerNamespace("CommonUtils");
CommonUtils.MouseButton = function() {};
CommonUtils.MouseButton.prototype = { left: 1, middle: 2, right: 3 };
CommonUtils.MouseButton.registerEnum("CommonUtils.MouseButton", false);
Type.registerNamespace("Mscrm.Yammer");
Mscrm.Yammer.ConfigOptions = function() {};
Mscrm.Yammer.EmailAddress = function() {};
Mscrm.Yammer.Contact = function() {};
Mscrm.Yammer.User = function() {};
Mscrm.Yammer.ObjectProperties = function() {};
Mscrm.Yammer.Config = function() {};
Mscrm.Yammer.FeedOptions = function() {};
Type.registerNamespace("Wall.UI");
Wall.UI.WallStateEnum = function() {};
Wall.UI.Wall = function(rootContainer,
    wallService,
    headerId,
    postTemplateId,
    commentTemplateId,
    wallContainerId,
    postTextBoxJQueryId,
    progressTemplateId,
    emptyTemplateId,
    showMoreLinkTemplateId) {
    this.$$d_loadPosts = Function.createDelegate(this, this.loadPosts);
    this.$$d_resizeProgressTemplate = Function.createDelegate(this, this.resizeProgressTemplate);
    this.$$d_handleWindowUnload = Function.createDelegate(this, this.handleWindowUnload);
    this.$$d_$17_0 = Function.createDelegate(this, this.$17_0);
    this.$X_0 = new Mscrm.CrmDisposeHelper;
    this._events = new Sys.EventHandlerList;
    this.rootContainer = rootContainer;
    this.$3_0 = 0;
    this.$8_0 = 10;
    this.$1_0 = new Array(0);
    this.$0_0 = wallService;
    this.$S_0 = postTemplateId;
    this.$M_0 = commentTemplateId;
    this.$J_0 = wallContainerId;
    this.headerJQuery = this.rootContainer.find(headerId);
    this.progressTemplatejQuery = this.rootContainer.find(String.format("#{0}", progressTemplateId));
    this.showMoreLinkJQuery = this.rootContainer.find(String.format("#{0}", showMoreLinkTemplateId));
    this.postTemplatejQuery = this.rootContainer.find(String.format("#{0}", postTemplateId));
    this.commentTemplatejQuery = this.rootContainer.find(String.format("#{0}", commentTemplateId));
    this.wallContainerjQuery = this.rootContainer.find(String.format("#{0}", wallContainerId));
    this.firstRunContentjQuery = this.rootContainer.find(String.format("#{0}", emptyTemplateId));
    this.filterContainerjQuery = this.rootContainer.find(String.format("#{0}", "filterContainer"));
    this.filterTemplatejQuery = this.rootContainer.find(String.format("#{0}", "filterTemplate"));
    $P_CRM(window).bind("resize", this.$$d_$17_0);
    Wall.Control.Utils.WindowUtils.add_onWindowUnload(this.$$d_handleWindowUnload);
    if (!IsNull(postTextBoxJQueryId)) this.postTextBox = this.rootContainer.find(postTextBoxJQueryId).first()[0];
    this.$Q_0 = this.rootContainer.find("#postButton").first()[0];
    if (Wall.Control.Utils.Browser.getCurrentBrowser()
        .get_isIE7()) window.setTimeout(this.$$d_resizeProgressTemplate, 10);
    else this.resizeProgressTemplate()
};
Wall.UI.Wall.getPostById = function(postId, posts) {
    var $v_0 = _Array.filter(Wall.Interfaces.IPost, posts, function($p1_0) { return $p1_0.get_postId() === postId });
    if ($v_0 && $v_0.length >= 1) return $v_0[0];
    else return null
};
Wall.UI.Wall.getCommentById = function(commentId, comments) {
    if (!comments) return null;
    var $v_0 = _Array.filter(Wall.Interfaces.IComment,
        comments,
        function($p1_0) { return $p1_0.get_commentId() === commentId });
    if ($v_0 && $v_0.length >= 1) return $v_0[0];
    else return null
};
Wall.UI.Wall.$11 = function($p0) {
    if (IsNull($p0)) return null;
    return $p0.get_comments() && $p0.get_comments().length > 0
        ? $p0.get_comments()[0].get_createdOn()
        : $p0.get_createdOn()
};
Wall.UI.Wall.$m = function($p0, $p1, $p2, $p3) {
    if ($p0 && $p2 > 0) window.setTimeout(function() { Wall.UI.Wall.$m($p0, $p1, $p2 - 1, $p3) }, $p1);
    else $p3()
};
Wall.UI.Wall.cleanupWall = function(parentjQueryObject) {
    unsubscribeAllEvents(parentjQueryObject);
    parentjQueryObject.empty()
};
Wall.UI.Wall.prototype = {
    $8_0: 0,
    $J_0: null,
    $S_0: null,
    $M_0: null,
    $0_0: null,
    $3_0: 0,
    $R_0: false,
    $L_0: false,
    $O_0: false,
    wallContainerjQuery: null,
    filterContainerjQuery: null,
    postTemplatejQuery: null,
    filterTemplatejQuery: null,
    commentTemplatejQuery: null,
    progressTemplatejQuery: null,
    headerJQuery: null,
    showMoreLinkJQuery: null,
    firstRunContentjQuery: null,
    postTextBox: null,
    $Q_0: null,
    rootContainer: null,
    $1_0: null,
    $5_0: 0,
    $H_0: null,
    $A_0: null,
    $D_0: false,
    $9_0: null,
    get_isDisabled: function() { return this.$D_0 },
    get_isDisposed: function() { return this.$O_0 },
    get_wallContainerId: function() { return this.$J_0 },
    set_wallContainerId: function(value) {
        this.$J_0 = value;
        return value
    },
    get_postTemplateId: function() { return this.$S_0 },
    set_postTemplateId: function(value) {
        this.$S_0 = value;
        return value
    },
    get_commentTemplateId: function() { return this.$M_0 },
    set_commentTemplateId: function(value) {
        this.$M_0 = value;
        return value
    },
    get_wallService: function() { return this.$0_0 },
    set_wallService: function(value) {
        this.$0_0 = value;
        return value
    },
    get_state: function() { return this.$3_0 },
    set_state: function(value) {
        this.$3_0 = value;
        return value
    },
    get_pageSize: function() { return this.$8_0 },
    set_pageSize: function(value) {
        this.$8_0 = value;
        return value
    },
    add_postsRefreshing: function(value) { this._events.addHandler("PostsRefreshing", value) },
    remove_postsRefreshing: function(value) { this._events.removeHandler("PostsRefreshing", value) },
    add_postsRefreshed: function(value) { this._events.addHandler("PostsRefreshed", value) },
    remove_postsRefreshed: function(value) { this._events.removeHandler("PostsRefreshed", value) },
    add_commentsRefreshed: function(value) { this._events.addHandler("CommentsRefreshed", value) },
    remove_commentsRefreshed: function(value) { this._events.removeHandler("CommentsRefreshed", value) },
    add_postCreated: function(value) { this._events.addHandler("PostCreated", value) },
    remove_postCreated: function(value) { this._events.removeHandler("PostCreated", value) },
    add_postCreating: function(value) { this._events.addHandler("PostCreating", value) },
    remove_postCreating: function(value) { this._events.removeHandler("PostCreating", value) },
    add_commentCreated: function(value) { this._events.addHandler("CommentCreated", value) },
    remove_commentCreated: function(value) { this._events.removeHandler("CommentCreated", value) },
    add_postDeleted: function(value) { this._events.addHandler("PostDeleted", value) },
    remove_postDeleted: function(value) { this._events.removeHandler("PostDeleted", value) },
    add_commentDeleted: function(value) { this._events.addHandler("CommentDeleted", value) },
    remove_commentDeleted: function(value) { this._events.removeHandler("CommentDeleted", value) },
    add_postsInserted: function(value) { this._events.addHandler("PostsInserted", value) },
    remove_postsInserted: function(value) { this._events.removeHandler("PostsInserted", value) },
    add_filtersRefreshed: function(value) { this._events.addHandler("FiltersRefreshed", value) },
    remove_filtersRefreshed: function(value) { this._events.removeHandler("FiltersRefreshed", value) },
    add_error: function(value) { this._events.addHandler("Error", value) },
    remove_error: function(value) { this._events.removeHandler("Error", value) },
    fireEvent: function(T, eventName, args) { _Event.fireEvent(T, this._events, eventName, this, args) },
    refreshWallFilters: function() { this.refreshWallFilter(null) },
    refreshWallFilter: function(filterType) {
        var $$t_A = this;
        this.rootContainer.find(".wallFilter").each(function($p1_0, $p1_1) {
            var $v_0 = $p1_1.getAttribute("FilterType");
            if (_String.isNullOrEmpty(filterType) || filterType === $v_0) {
                var $v_1 = $p1_1.getAttribute("TemplateId"),
                    $v_2 = $p1_1.getAttribute("IsAsync").toLowerCase() === "true",
                    $v_3 = $$t_A.rootContainer.find(String.format("#{0}", $v_1)),
                    $v_4 = $P_CRM($p1_1);
                if (!$v_2) {
                    var $v_5 = $$t_A.$0_0.getWallFilters($v_0, null);
                    $$t_A.$r_0($v_5, $v_0, $v_3, $v_4)
                } else
                    $$t_A.$0_0.retrieveWallFilters($v_0,
                        null,
                        function($p2_0) {
                            if (!$p2_0.get_isSucceeded()) {
                                $$t_A.processError($p2_0);
                                return
                            }
                            $$t_A.$r_0($p2_0.get_wallFilters(), $v_0, $v_3, $v_4)
                        })
            }
        })
    },
    $r_0: function($p0, $p1, $p2, $p3) {
        for (var $v_0 = markFirstAndLast($p0), $$arr_5 = $v_0, $$len_6 = $$arr_5.length, $$idx_7 = 0;
            $$idx_7 < $$len_6;
            ++$$idx_7) {
            var $v_1 = $$arr_5[$$idx_7];
            $v_1.get_subFilters() && $v_1.set_subFilters(markFirstAndLast($v_1.get_subFilters()))
        }
        $p3.empty();
        $p2.tmpl($v_0, this).appendTo($p3);
        var $$t_9 = this;
        this.$X_0.schedule(function() { $p3.empty() });
        this.fireEvent(Wall.Interfaces.EventArguments.FiltersRefreshedEventArgs,
            "FiltersRefreshed",
            new Wall.Interfaces.EventArguments.FiltersRefreshedEventArgs($p1, $v_0))
    },
    renderOlderPosts: function() {
        var $v_0 = this.wallContainerjQuery.find(".showMoreLink");
        $v_0.addClass("showMoreLinkProgress");
        this.$3_0 = 3;
        var $v_1 = this.$0_0.getWallServiceFactory().createRetrievePostsRequest();
        $v_1.set_pageSize(this.$8_0);
        $v_1.set_endDate(this.$H_0);
        $v_1.set_pagingCookie(this.$A_0);
        this.$5_0++;
        $v_1.set_pageNumber(this.$5_0);
        var $v_2 = {
            page: this.$5_0,
            wallType: this.rootContainer[0].id,
            entity: !Xrm.Page.data ? null : Xrm.Page.data.entity.getEntityName(),
            form: !Xrm.Page.ui ? null : Xrm.Page.ui.formSelector.getCurrentItem().getId()
        };
        this.fireEvent(Wall.Interfaces.EventArguments.PostsRefreshingEventArgs,
            "PostsRefreshing",
            new Wall.Interfaces.EventArguments.PostsRefreshingEventArgs($v_1));
        var $$t_5 = this;
        this.$0_0.retrievePosts($v_1,
            function($p1_0) {
                $$t_5.processRetrievePostsResponse($p1_0,
                    function() {
                        $v_0.removeClass("showMoreLinkProgress").remove();
                        $$t_5.$3_0 = 1;
                        var $v_3 = Wall.Control.Utils.WallUtils.removeDuplicatePosts($p1_0.get_posts(), $$t_5.$1_0);
                        $$t_5.$n_0($v_3);
                        $p1_0.get_morePosts() && $$t_5.$o_0();
                        $v_2["posts"] = $v_3.length;
                        Mscrm.MetricsReporting.instance().addMetric("Wall.LoadMore", $v_2)
                    },
                    function() {
                        $v_0.removeClass("showMoreLinkProgress");
                        $v_2["posts"] = 0;
                        Mscrm.MetricsReporting.instance().addMetric("Wall.LoadMore", $v_2)
                    },
                    function() {
                        $v_0.removeClass("showMoreLinkProgress");
                        $$t_5.$3_0 = 5;
                        $v_2["error"] = true;
                        Mscrm.MetricsReporting.instance().addMetric("Wall.LoadMore", $v_2);
                        alert($p1_0.get_errorMessage())
                    })
            })
    },
    refreshAll: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Wall_RefreshAll_Start", 1);
        if (!this.$9_0) this.$9_0 = Xrm.Internal.startMetricsStopwatch("Refresh Wall Notes");
        this.$9_0.start();
        if (this.$D_0) return;
        this.setProgressState();
        this.$5_0 = 1;
        this.$A_0 = null;
        var $v_0 = this.$0_0.getWallServiceFactory().createRetrievePostsRequest();
        $v_0.set_pageNumber(this.$5_0);
        $v_0.set_pageSize(this.$8_0);
        $v_0.set_endDate(null);
        $v_0.set_pagingCookie(this.$A_0);
        this.$H_0 = null;
        this.fireEvent(Wall.Interfaces.EventArguments.PostsRefreshingEventArgs,
            "PostsRefreshing",
            new Wall.Interfaces.EventArguments.PostsRefreshingEventArgs($v_0));
        this.$0_0.retrievePosts($v_0, this.$$d_loadPosts)
    },
    fetchAll: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Wall_FetchAll_Start", 1);
        if (!this.$9_0) this.$9_0 = Xrm.Internal.startMetricsStopwatch("Fetch All Wall Notes");
        this.$9_0.start();
        if (this.$D_0) return;
        this.setProgressState();
        this.$5_0 = 1;
        this.$A_0 = null;
        var $v_0 = this.$0_0.getWallServiceFactory().createRetrievePostsRequest();
        $v_0.set_pageNumber(this.$5_0);
        $v_0.set_pageSize(this.$8_0);
        $v_0.set_endDate(null);
        $v_0.set_pagingCookie(this.$A_0);
        this.$H_0 = null;
        this.fireEvent(Wall.Interfaces.EventArguments.PostsRefreshingEventArgs,
            "PostsRefreshing",
            new Wall.Interfaces.EventArguments.PostsRefreshingEventArgs($v_0));
        this.$0_0.retrieveAllPosts($v_0, this.$$d_loadPosts)
    },
    loadPosts: function(retrievePostsResponse) {
        var $$t_3 = this;
        this.processRetrievePostsResponse(retrievePostsResponse,
            function() {
                var $v_0 = Xrm.Internal
                    .startMetricsStopwatch("Wall_RenderPosts_" + Object.getType($$t_3).getName() + "_" + $$t_3.$J_0);
                $v_0.start();
                $$t_3.setDataState();
                var $v_1 = retrievePostsResponse.get_posts();
                $$t_3.$H_0 = Wall.UI.Wall.$11($v_1[0]);
                $$t_3.$19_0($v_1);
                retrievePostsResponse.get_morePosts() && $$t_3.$o_0();
                $v_0.stop();
                Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Wall_RefreshAll_End", 1)
            });
        this.$9_0 && this.$9_0.stop()
    },
    refreshComments: function(parentPostId, pageSize, olderThen) {
        var $v_0 = this.$0_0.getWallServiceFactory().createRetrieveCommentsRequest();
        $v_0.set_parentPostId(parentPostId);
        var $v_1 = this.rootContainer.find(_String.format("#{0}_commentsArea", parentPostId));
        $v_1.addClass("progress");
        var $$t_7 = this;
        this.$0_0.retrieveComments($v_0,
            function($p1_0) {
                $v_1.removeClass("progress");
                $$t_7.rootContainer.find(_String.format("#{0}", parentPostId)).focus();
                if ($p1_0.get_isSucceeded()) {
                    var $v_2 = $p1_0.get_comments();
                    Wall.UI.Wall.cleanupWall($v_1);
                    $$t_7.commentTemplatejQuery.tmpl($v_2, $$t_7).appendTo($v_1);
                    $$t_7.rootContainer.find(_String.format("#{0}", parentPostId)).addClass("hascomments");
                    $$t_7.fireEvent(Wall.Interfaces.EventArguments.CommentsRefreshedEventArgs,
                        "CommentsRefreshed",
                        new Wall.Interfaces.EventArguments.CommentsRefreshedEventArgs($v_2))
                } else $$t_7.processError($p1_0)
            })
    },
    postMessage: function(text) {
        var $v_0 = this.$0_0.getWallServiceFactory().createPost();
        $v_0.set_text(this.$0_0.formatPostTextForRendering(text));
        $v_0.set_postId("temp" + Math.random().toString().replace(".", ""));
        var $v_1 = this.$0_0.getWallServiceFactory().createPost();
        $v_1.set_text(text);
        this.createPost($v_0, $v_1)
    },
    createPost: function(post, postToCreate) {
        if (this.$R_0) return;
        this.$R_0 = true;
        var $v_0 = true, $$t_4 = this;
        this.$13_0(post, 600, function() { $v_0 = false });
        this.$Q_0.disabled = true;
        this.fireEvent(Wall.Interfaces.EventArguments.PostCreatingEventArgs,
            "PostCreating",
            new Wall.Interfaces.EventArguments.PostCreatingEventArgs(postToCreate));
        var $$t_5 = this;
        this.$0_0.postMessage(postToCreate,
            function($p1_0) {
                $$t_5.$Q_0.disabled = false;
                $$t_5.$R_0 = false;
                if ($p1_0.get_isSucceeded()) {
                    Wall.UI.Wall.$m($v_0,
                        600,
                        2,
                        function() {
                            $$t_5.removePost(post.get_postId());
                            post.set_postId($p1_0.get_postId());
                            $$t_5.$13_0(post);
                            $$t_5.setDataState();
                            $$t_5.fireEvent(Wall.Interfaces.EventArguments.PostCreatedEventArgs,
                                "PostCreated",
                                new Wall.Interfaces.EventArguments.PostCreatedEventArgs(post))
                        });
                    $$t_5.clearInputFields()
                } else {
                    $$t_5.setDataState();
                    $p1_0.get_revertPost() && $$t_5.removePost(post.get_postId());
                    $$t_5.processError($p1_0)
                }
            })
    },
    postComment: function(parentPostId, text) {
        if (this.$L_0) return;
        this.$L_0 = true;
        var $v_0 = this.$0_0.getWallServiceFactory().createComment();
        $v_0.set_commentId("temp" + Math.random().toString().replace(".", ""));
        $v_0.set_text(this.$0_0.formatCommentTextForRendering(text));
        $v_0.set_parentPost(this.$0_0.getWallServiceFactory().createPost());
        $v_0.get_parentPost().set_postId(parentPostId);
        var $v_1 = this.rootContainer.find(_String.format("#{0}_replyArea", parentPostId)),
            $v_2 = $v_1.find("input[type='button']")[0];
        if ($v_2) $v_2.disabled = true;
        var $v_3 = $v_1.find("textarea")[0],
            $v_4 = this.rootContainer.find(_String.format("#{0}_commentsArea", parentPostId)),
            $v_5 = $v_4.find(_String.format("#{0}_showAllComments", parentPostId));
        this.rootContainer.find(_String.format("#{0}", parentPostId)).addClass("hascomments");
        var $v_6 = true, $$t_D = this;
        this.commentTemplatejQuery.tmpl($v_0, this).hide().appendTo($v_4).show(600, function() { $v_6 = false });
        var $v_7 = this.$0_0.getWallServiceFactory().createComment();
        $v_7.set_parentPost($v_0.get_parentPost());
        $v_7.set_text(text);
        var $$t_E = this;
        this.$0_0.postComment($v_7,
            function($p1_0) {
                $$t_E.$L_0 = false;
                if ($p1_0.get_isSucceeded()) {
                    Wall.UI.Wall.$m($v_6,
                        600,
                        2,
                        function() {
                            $v_4.find(_String.format("#{0}", $v_0.get_commentId())).remove();
                            $v_0.set_commentId($p1_0.get_commentId());
                            $$t_E.commentTemplatejQuery.tmpl($v_0, $$t_E).appendTo($v_4);
                            $$t_E.fireEvent(Wall.Interfaces.EventArguments.CommentCreatedEventArgs,
                                "CommentCreated",
                                new Wall.Interfaces.EventArguments.CommentCreatedEventArgs($v_0))
                        });
                    if ($v_5.size()) {
                        var $v_8 = 0, $v_9 = $v_5.attr("commentsCount");
                        if (!IsNull($v_9)) $v_8 = parseInt($v_9);
                        $v_8++;
                        $v_5.text(String.format(Wall.Control.Resources.WallControl.viewAllCommentsTemplate, $v_8));
                        $v_5.attr("commentsCount", $v_8.toString())
                    }
                    $v_3.value = "";
                    $v_3.focus();
                    window.setTimeout(function() { $P_CRM($v_3).trigger("change") }, 10)
                } else {
                    $$t_E.processError($p1_0);
                    $p1_0.get_revertComment() && $v_4.find(_String.format("#{0}", $v_0.get_commentId())).remove()
                }
                if ($v_2) $v_2.disabled = false
            })
    },
    getWallActions: function(actionType, context) { return this.$0_0.getWallActions(actionType, context) },
    deletePost: function(postId) {
        var $v_0 = this.$0_0.getWallServiceFactory().createPost();
        $v_0.set_postId(postId);
        this.removePost(postId, 600);
        var $$t_3 = this;
        this.$0_0.deletePost($v_0,
            function($p1_0) {
                if ($p1_0.get_isSucceeded())
                    $$t_3.fireEvent(Wall.Interfaces.EventArguments.PostDeletedEventArgs,
                        "PostDeleted",
                        new Wall.Interfaces.EventArguments.PostDeletedEventArgs(postId));
                else $$t_3.processError($p1_0)
            })
    },
    deleteComment: function(commentId) {
        var $v_0 = this.$0_0.getWallServiceFactory().createComment();
        $v_0.set_commentId(commentId);
        var $v_1 = this.rootContainer.find(_String.format("#{0}", commentId)).parent(".commentsArea")
                .find(".showAllComments"),
            $v_2 = parseInt($v_1.attr("commentsCount")) - 1;
        $v_1.text(String.format(Wall.Control.Resources.WallControl.viewAllCommentsTemplate, $v_2));
        $v_1.attr("commentsCount", $v_2.toString());
        var $v_3 = this.rootContainer.find(_String.format("#{0}", commentId)), $$t_7 = this;
        $v_3.hide(600, function() { $v_3.hide(600).remove() });
        var $v_4 = this.rootContainer.find(_String.format("#{0}", commentId)).parent(".post");
        !$v_4.find(".comment").size() && !$v_4.find(".replyArea").size() && $v_4.removeClass("hascomments");
        var $$t_8 = this;
        this.$0_0.deleteComment($v_0,
            function($p1_0) {
                if ($p1_0.get_isSucceeded())
                    $$t_8.fireEvent(Wall.Interfaces.EventArguments.CommentDeletedEventArgs,
                        "CommentDeleted",
                        new Wall.Interfaces.EventArguments.CommentDeletedEventArgs(commentId));
                else $$t_8.processError($p1_0)
            })
    },
    $17_0: function($p0) { this.$3_0 === 2 && this.resizeProgressTemplate() },
    get_displayedPosts: function() { return this.$1_0 },
    set_displayedPosts: function(value) {
        this.$1_0 = value;
        return value
    },
    resizeProgressTemplate: function() {
        var $v_0 = this.getAvailableWallHeight(), $v_1 = this.wallContainerjQuery.height();
        if ($v_1 > $v_0) {
            this.progressTemplatejQuery.css("margin-bottom", ($v_1 - $v_0).toString() + "px");
            this.progressTemplatejQuery.height($v_0)
        } else {
            this.progressTemplatejQuery.css("margin-bottom", "0px");
            this.progressTemplatejQuery.height($v_0)
        }
    },
    setProgressState: function() {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("Wall_SetProgressState");
        $v_0.start();
        if (this.$D_0) this.setEmptyState();
        else {
            this.$3_0 = 2;
            this.resizeProgressTemplate();
            this.wallContainerjQuery.hide();
            this.firstRunContentjQuery.hide();
            this.progressTemplatejQuery.show()
        }
        $v_0.stop()
    },
    setDisabledState: function(disable) {
        this.$D_0 = disable;
        if (disable) {
            if (this.postTextBox) this.postTextBox.disabled = true
        } else if (this.postTextBox) this.postTextBox.disabled = false
    },
    setDataState: function() {
        this.progressTemplatejQuery.css("margin-bottom", "0");
        this.$3_0 = 1;
        this.firstRunContentjQuery.hide();
        this.progressTemplatejQuery.hide();
        this.wallContainerjQuery.show()
    },
    setEmptyState: function() {
        this.progressTemplatejQuery.css("margin-bottom", "0");
        this.$3_0 = 4;
        this.progressTemplatejQuery.hide();
        Wall.UI.Wall.cleanupWall(this.wallContainerjQuery);
        this.wallContainerjQuery.hide();
        this.firstRunContentjQuery.show()
    },
    setErrorState: function() {
        this.progressTemplatejQuery.css("margin-bottom", "0");
        this.$3_0 = 5;
        this.progressTemplatejQuery.hide();
        this.wallContainerjQuery.hide();
        this.firstRunContentjQuery.show()
    },
    processRetrievePostsResponse: function(retrievePostsResponse, dataCallback, emptyCallback, errorCallback) {
        if (retrievePostsResponse.get_isSucceeded()) {
            this.$A_0 = retrievePostsResponse.get_pagingCookie();
            if (!IsNull(retrievePostsResponse
                    .get_posts()) &&
                retrievePostsResponse.get_posts().length > 0) dataCallback();
            else if (!IsNull(emptyCallback)) emptyCallback();
            else this.setEmptyState();
            this.fireEvent(Wall.Interfaces.EventArguments.PostsRefreshedEventArgs,
                "PostsRefreshed",
                new Wall.Interfaces.EventArguments.PostsRefreshedEventArgs(retrievePostsResponse.get_posts()))
        } else if (!IsNull(errorCallback)) errorCallback();
        else {
            this.processError(retrievePostsResponse);
            this.setErrorState()
        }
    },
    processError: function(response) {
        alert(response.get_errorMessage());
        this.fireEvent(Wall.Interfaces.EventArguments.ErrorEventArgs,
            "Error",
            new Wall.Interfaces.EventArguments.ErrorEventArgs(response))
    },
    clearInputFields: function() {
        if (!IsNull(this.postTextBox)) {
            this.postTextBox.value = "";
            $P_CRM(this.postTextBox).trigger("change");
            this.postTextBox.focus()
        }
    },
    getAvailableWallHeight: function() {
        var $v_0 = $P_CRM(document.body).outerHeight(true), $v_1 = this.headerJQuery.outerHeight(true);
        return $v_0 - $v_1 - 2
    },
    $13_0: function($p0, $p1, $p2) {
        if (IsNull($p1)) $p1 = 0;
        if ($p0 && !_String.isNullOrEmpty($p0.get_text())) {
            var $v_0 = "</[t|T][e|E][x|X][t|T][a|A][r|R][e|E][a|A]>", $v_1 = new RegExp($v_0, "g");
            $p0.set_text($p0.get_text().replace($v_1, "< /textarea>"))
        }
        this.$14_0([$p0], $p1, $p2);
        if (Wall.Control.Utils.Browser.getCurrentBrowser().$7_0.toUpperCase() === "SAFARI") {
            var $v_2 = $p0.get_postId(), $v_3 = $v_2 + "_text", $v_4 = $v_2 + "_userName";
            $P_CRM("#" + $v_2).attr("title",
                $P_CRM("#" + $v_4 + ":first a").attr("title") + " " + $P_CRM("#" + $v_3).html())
        }
    },
    $14_0: function($p0, $p1, $p2) {
        if (!$p0 || !$p0.length) return;
        if (IsNull($p1)) $p1 = 0;
        this.wallContainerjQuery.find(".post").removeClass("first").removeClass("last");
        _Array.insertRange(this.$1_0, 0, $p0);
        var $v_0 = this.wallContainerjQuery.find(".post:first");
        if (!$p1)
            if (!$v_0.size()) this.postTemplatejQuery.tmpl($p0, this).appendTo(this.wallContainerjQuery);
            else this.postTemplatejQuery.tmpl($p0, this).insertBefore($v_0);
        else if (!$v_0.size())
            this.postTemplatejQuery.tmpl($p0, this).hide().appendTo(this.wallContainerjQuery).show($p1, $p2);
        else this.postTemplatejQuery.tmpl($p0, this).hide().insertBefore($v_0).show($p1, $p2);
        this.wallContainerjQuery.find(".post:first").addClass("first");
        this.wallContainerjQuery.find(".post:last").addClass("last");
        var $v_1 = this.rootContainer.parent().attr("walltabindex");
        this.wallContainerjQuery.find(".post").attr("tabindex", $v_1);
        this.fireEvent(Wall.Interfaces.EventArguments.PostsInsertedEventArgs,
            "PostsInserted",
            new Wall.Interfaces.EventArguments.PostsInsertedEventArgs($p0))
    },
    $n_0: function($p0) {
        if (!$p0 || !$p0.length) return;
        this.wallContainerjQuery.find(".post").removeClass("first").removeClass("last");
        var $$t_9;
        this.$1_0 = ($$t_9 = this.$1_0).concat.apply($$t_9, $p0);
        !IsNull(this.postTemplatejQuery) && this.postTemplatejQuery.tmpl($p0, this).appendTo(this.wallContainerjQuery);
        this.wallContainerjQuery.find(".post:first").addClass("first");
        this.wallContainerjQuery.find(".post:last").addClass("last");
        var $v_0 = this.rootContainer.parent().attr("walltabindex");
        this.wallContainerjQuery.find(".post").attr("tabindex", $v_0);
        if (Wall.Control.Utils.Browser.getCurrentBrowser().$7_0.toUpperCase() === "SAFARI")
            for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
                for (var $v_2 = $p0[$v_1].get_postId(),
                    $v_3 = $v_2 + "_text",
                    $v_4 = $v_2 + "_userName",
                    $v_5 = $P_CRM("#" + $v_3 + " a").size(),
                    $v_6 = "",
                    $v_7 = 0;
                    $v_7 < $v_5;
                    $v_7++) $v_6 += $P_CRM("#" + $v_3 + " a")[$v_7].innerHTML + " ";
                $P_CRM("#" + $v_2).attr("title",
                    $P_CRM("#" + $v_4 + ":first a").attr("title") + " " + ($v_5 > 0 ? $v_6 : $P_CRM("#" + $v_3).html()))
            }
        this.fireEvent(Wall.Interfaces.EventArguments.PostsInsertedEventArgs,
            "PostsInserted",
            new Wall.Interfaces.EventArguments.PostsInsertedEventArgs($p0))
    },
    updatePostInDisplayedPostArray: function(postId, newPost) {
        var $v_0 = Array.indexOf(this.$1_0, this.findDisplayedPostById(postId));
        Array.remove(this.$1_0, this.findDisplayedPostById(postId));
        Array.insert(this.$1_0, $v_0, newPost)
    },
    removePost: function(postId, animationSpeed) {
        var $v_0 = this.rootContainer.find(_String.format("#{0}", postId));
        if (IsNull(animationSpeed)) $v_0.remove();
        else {
            var $$t_3 = this;
            $v_0.hide(animationSpeed, function() { $v_0.remove() })
        }
        Array.remove(this.$1_0, this.findDisplayedPostById(postId));
        this.wallContainerjQuery.find(".post:first").addClass("first");
        this.wallContainerjQuery.find(".post:last").addClass("last")
    },
    $19_0: function($p0) {
        Wall.UI.Wall.cleanupWall(this.wallContainerjQuery);
        this.$1_0 = new Array(0);
        this.$n_0($p0)
    },
    $o_0: function() {
        var $$t_1 = this;
        $P_CRM(this.showMoreLinkJQuery[0].innerHTML).bind("click",
            function($p1_0) {
                $$t_1.renderOlderPosts();
                $p1_0.preventDefault();
                $p1_0.stopPropagation()
            }).appendTo(this.wallContainerjQuery)
    },
    findDisplayedPostById: function(postId) { return Wall.UI.Wall.getPostById(postId, this.$1_0) },
    handleWindowUnload: function(unloadEvent) { this.dispose() },
    disposeInternal: function() {
        this.$1_0 = null;
        Wall.Control.Utils.WindowUtils.remove_onWindowUnload(this.$$d_handleWindowUnload);
        $P_CRM(window).unbind("resize", this.$$d_$17_0);
        this.$X_0.dispose();
        Wall.UI.Wall.cleanupWall(this.wallContainerjQuery);
        this.headerJQuery = null;
        this.postTemplatejQuery = null;
        this.$0_0 = null;
        this._events = null
    },
    dispose: function() {
        if (this.$O_0) return;
        this.disposeInternal();
        this.$O_0 = true
    }
};
Type.registerNamespace("Wall.Control.Utils");
Wall.Control.Utils.BrowserType = function() {};
Wall.Control.Utils.Browser = function() {};
Wall.Control.Utils.Browser.$x = function($p0) {
    return Wall.Control.Utils.Browser.$w($p0.userAgent, $p0.appName, $p0.appVersion, document.documentMode)
};
Wall.Control.Utils.Browser.$w = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Wall.Control.Utils.Browser;
    $v_0.$4_0 = 0;
    $v_0.$C_0 = false;
    $v_0.$I_0 = false;
    $v_0.$7_0 = $p1;
    $v_0.$6_0 = parseFloat($p2);
    $v_0.$G_0 = 0;
    if ($p0.indexOf(" MSIE ") > -1) {
        $v_0.$4_0 = 1;
        $v_0.$7_0 = "IE";
        $v_0.$6_0 = parseFloat($p0.match(_RegularExpression.parse("/MSIE (\\d+\\.\\d+)/"))[1]);
        if ($v_0.$6_0 >= 7) if (!IsNull($p3) && $p3 >= 7) $v_0.$G_0 = $p3;
        $v_0.$C_0 = true;
        if ($p0.indexOf("IEMobile") !== -1 || $p0.indexOf("Windows Phone") !== -1) $v_0.$P_0 = true;
        if (_Type.hasField(window
                .navigator,
                "msMaxTouchPoints") &&
            window.navigator.msMaxTouchPoints > 0) $v_0.$I_0 = true
    } else if ($p0.indexOf(" rv:11.0") > -1) {
        $v_0.$4_0 = 1;
        $v_0.$6_0 = 11;
        $v_0.$7_0 = "IE";
        $v_0.$C_0 = true
    } else if ($p0.indexOf(" Firefox/") > -1) {
        $v_0.$4_0 = 2;
        $v_0.$6_0 = parseFloat($p0.match(_RegularExpression.parse("/ Firefox\\/(\\d+\\.\\d+)/"))[1]);
        $v_0.$7_0 = "Firefox";
        $v_0.$C_0 = true
    } else if ($p0.indexOf(" Chrome/") > -1) {
        $v_0.$4_0 = 3;
        $v_0.$6_0 = parseFloat($p0.match(_RegularExpression.parse("/ Chrome\\/(\\d+(\\.\\d+)?)/"))[1]);
        $v_0.$7_0 = "Chrome"
    } else if ($p0.indexOf(" AppleWebKit/") > -1) {
        $v_0.$4_0 = 4;
        $v_0.$6_0 = parseFloat($p0.match(_RegularExpression.parse("/ AppleWebKit\\/(\\d+(\\.\\d+)?)/"))[1]);
        $v_0.$7_0 = "Safari";
        if ($p0.indexOf("iPhone") !== -1 || $p0.indexOf("iPad") !== -1 || $p0.indexOf("iPod") !== -1) {
            $v_0.$P_0 = true;
            $v_0.$I_0 = true;
            $v_0.$d_0 = true
        }
        if ($p0.indexOf("iPad") !== -1) {
            var $v_1 = $p0.match(_RegularExpression.parse("/ CPU OS (\\d+_*.*) like Mac OS X/"));
            if (!IsNull($v_1) && $v_1.length >= 2) $v_0.$W_0 = parseFloat($v_1[1])
        }
    } else if ($p0.indexOf("Opera/") > -1) $v_0.$4_0 = 5;
    return $v_0
};
Wall.Control.Utils.Browser.getCurrentBrowser = function() {
    if (IsNull(Wall.Control.Utils.Browser.$K))
        Wall.Control.Utils.Browser.$K = Wall.Control.Utils.Browser.$x(window.navigator);
    return Wall.Control.Utils.Browser.$K
};
Wall.Control.Utils.Browser.prototype = {
    $4_0: 0,
    $7_0: null,
    $6_0: 0,
    $W_0: 0,
    $C_0: false,
    $G_0: 0,
    $P_0: false,
    $d_0: false,
    $I_0: false,
    get_agent: function() { return this.$4_0 },
    get_name: function() { return this.$7_0 },
    get_version: function() { return this.$6_0 },
    get_deviceMajorVersion: function() { return this.$W_0 },
    get_isMobile: function() { return this.$P_0 },
    get_isMobileSafari: function() { return this.$d_0 },
    get_isTouchEnabled: function() { return this.$I_0 },
    get_isIE7: function() { return this.$4_0 === 1 && this.$6_0 < 8 && this.$G_0 <= 7 },
    get_isIE8OrLower: function() { return this.$4_0 === 1 && this.$6_0 <= 8 },
    get_hasDebuggerStatement: function() { return this.$C_0 },
    get_documentMode: function() { return this.$G_0 }
};
Wall.Control.Utils.DateUtils = function() {};
Wall.Control.Utils.DateUtils.formatDateAsReadableString = function(dateTime, formattedDateTime) {
    return Wall.Control.Utils.DateUtils
        .formatDateAsReadableStringWithGivenResources(dateTime,
            formattedDateTime,
            Wall.Control.Resources.WallControl.dateUtils_Today,
            Wall.Control.Resources.WallControl.dateUtils_Yeserday)
};
Wall.Control.Utils.DateUtils
    .formatDateAsReadableStringWithGivenResources =
    function(dateTime, formattedDateTime, resourceToday, resourceYesterday) {
        if (IsNull(dateTime) && IsNull(formattedDateTime)) return "";
        if (IsNull(dateTime) && !IsNull(formattedDateTime)) return formattedDateTime;
        var $v_0 = "", $v_1 = "";
        if (_String.isNullOrEmpty(formattedDateTime) || formattedDateTime.indexOf(" ") <= 0) {
            if (typeof Sys == "undefined" ||
                typeof Sys.CultureInfo == "undefined" ||
                typeof Sys.CultureInfo.CurrentCulture.dateTimeFormat == "undefined") return dateTime.toString();
            $v_1 = dateTime.toLocaleTimeString();
            $v_0 = dateTime.toLocaleDateString();
            formattedDateTime = $v_0 + " " + $v_1
        }
        var $v_2 = new Date, $v_3 = new Date($v_2.getFullYear(), $v_2.getMonth(), $v_2.getDate());
        if (dateTime - $v_3 > 0) return resourceToday + " " + $v_1;
        if (dateTime - $v_3 + 8.64e7 > 0) return resourceYesterday + " " + $v_1;
        return formattedDateTime
    };
Wall.Control.Utils.DateUtils
    .formattedEmailActivityDate = function(emailActivityDate,
        strJustNow,
        strHourAgo,
        strOn,
        strToday,
        strYesterday,
        strHoursAgo,
        strYear,
        strNotYetOpened,
        strMonth,
        calenderMonths,
        calenderWeekDays) {
        if (IsNull(emailActivityDate)) return strNotYetOpened;
        var $v_0 = new Date,
            $v_1 = ($v_0 - emailActivityDate) / 1e3,
            $v_2 = Math.floor($v_1 /
            (Wall.Control.Utils.DateUtils.$15(emailActivityDate)
                ? Wall.Control.Utils.DateUtils.$c(366)
                : Wall.Control.Utils.DateUtils.$c(365))),
            $v_3 = emailActivityDate.getHours(),
            $v_4 = emailActivityDate.getMinutes(),
            $v_5 = $v_3 >= 12 ? $v_3 - 12 : $v_3,
            $v_6 = $v_3 >= 12 ? "pm" : "am",
            $v_7 = emailActivityDate.getDate();
        if ($v_7 < 10) $v_7 = "0" + $v_7;
        if ($v_5 < 10) $v_5 = "0" + $v_5;
        if ($v_4 < 10) $v_4 = "0" + $v_4;
        if ($v_2 >= 1)
            return String.format(strYear,
                Wall.Control.Utils.DateUtils.$p(emailActivityDate, calenderMonths),
                $v_7,
                emailActivityDate.getFullYear(),
                $v_5,
                $v_4,
                $v_6);
        else {
            var $v_8 = $v_1 / Wall.Control.Utils.DateUtils.$c(1);
            if ($v_8 >= 7)
                return String.format(strMonth,
                    Wall.Control.Utils.DateUtils.$p(emailActivityDate, calenderMonths),
                    $v_7,
                    $v_5,
                    $v_4,
                    $v_6);
            else if ($v_8 > 1 && $v_8 < 7)
                return String.format(strOn,
                    Wall.Control.Utils.DateUtils.$10(emailActivityDate, calenderWeekDays),
                    $v_5,
                    $v_4,
                    $v_6);
            else {
                var $v_9 = $v_1 / 3600;
                if ($v_9 > 4) return String.format($v_8 > 0 ? strToday : strYesterday, $v_5, $v_4, $v_6);
                else if ($v_9 > 1 && $v_9 < 2) {
                    $v_9 = "0" + $v_9;
                    return String.format(strHourAgo, Math.floor($v_9))
                } else if ($v_9 > 1) {
                    $v_9 = "0" + $v_9;
                    return String.format(strHoursAgo, Math.floor($v_9))
                } else return strJustNow
            }
        }
    };
Wall.Control.Utils.DateUtils.$p = function($p0, $p1) {
    var $v_0 = $p1.split(","), $v_1 = $v_0[$p0.getMonth()];
    return $v_1
};
Wall.Control.Utils.DateUtils.$10 = function($p0, $p1) {
    var $v_0 = $p1.split(","), $v_1 = $v_0[$p0.getDay()];
    return $v_1
};
Wall.Control.Utils.DateUtils.$c = function($p0) { return $p0 * 24 * 60 * 60 };
Wall.Control.Utils.DateUtils.$15 = function($p0) {
    var $v_0 = $p0.getFullYear();
    return !($v_0 % 4) && !!($v_0 % 100) || !($v_0 % 400)
};

function displayErrorMessage(errorMessage) { alert(errorMessage) }

function isRTL() {
    var $v_0 = $P_CRM("body").css("direction");
    return !IsNull($v_0) && $v_0.toLowerCase() === "rtl"
}

function detectHighContrastMode(imageUrl) {
    var $v_0 = $P_CRM("div#_highContrastDetectDiv");
    if (!$v_0 || $v_0.length <= 0)
        $v_0 = $P_CRM("<div id='_highContrastDetectDiv'></div>")
            .css({ display: "none", width: "0px", height: "0px", background: String.format("url('{0}')", imageUrl) })
            .appendTo(document.body);
    var $v_1 = $v_0.css("background-image") === "none";
    return $v_1
}

function getActiveElement() { return Mscrm.Utilities.getActiveElement() }

function markFirstAndLast(objects) {
    if (objects && objects.length > 0) {
        objects[0]["isfirst"] = true;
        objects[objects.length - 1]["islast"] = true
    }
    return objects
}

function unsubscribeAllEvents(parentjQueryObject) { parentjQueryObject.find("a, textarea, input, button").unbind() }

function unsubscribeAllEventsOnUnload(parentjQueryObject) {
    Wall.Control.Utils.WindowUtils.add_onWindowUnload(function() { unsubscribeAllEvents(parentjQueryObject) })
}

Wall.Control.Utils.WallUtilsHelper = function() {};
Wall.Control.Utils.WallUtilsHelper.getSeverUrl = function() {
    if (IsNull(Wall.Control.Utils.WallUtilsHelper.$T)) {
        var $v_0 = GetGlobalContext();
        Wall.Control.Utils.WallUtilsHelper.$T = $v_0.getClientUrl()
    }
    return Wall.Control.Utils.WallUtilsHelper.$T
};

function formatEntityIconImage(entityTypeName, iconType, relativeImageUrl) {
    if (!IsNull(relativeImageUrl) && relativeImageUrl.trim().length > 0
    )
        return String.format('<img alt="{0}" src="{1}"/>',
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode(entityTypeName),
            relativeImageUrl);
    else
        return String.format("<img alt='{0}' src='{2}/_Common/icon.aspx?etn={1}&iconType={3}&cache=1' />",
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode(entityTypeName),
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(entityTypeName),
            Wall.Control.Utils.WallUtilsHelper.getSeverUrl(),
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(iconType))
}

function formatEntityIconImageWithWindowOpenLink(entityReference, relativeImageUrl) {
    if (IsNull(entityReference)) return "";
    var $v_0 = formatEntityIconImage(entityReference.get_logicalName(), "ribbon32", relativeImageUrl);
    return createWindowOpenLink(entityReference, $v_0, { tabindex: "-1" })
}

function formatNameWithWindowOpenLink(entityReference, attributes, userNameMaxDisplayLength) {
    var $v_0 = 80;
    if (IsNull(entityReference) || _String.isNullOrEmpty(entityReference.get_name())) return "";
    if (!attributes) attributes = {};
    if (IsNull(userNameMaxDisplayLength)) userNameMaxDisplayLength = $v_0;
    var $v_1 = "...";
    if (!IsNull(Wall.Control.Resources)) $v_1 = Wall.Control.Resources.WallControl.ellipsis;
    var $v_2;
    if (entityReference.get_name()
        .length >
        userNameMaxDisplayLength)
        $v_2 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
            .htmlEncode(_String.remove(entityReference.get_name(), userNameMaxDisplayLength - $v_1.length) + $v_1);
    else $v_2 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode(entityReference.get_name());
    if (!("title" in attributes)) attributes["title"] = entityReference.get_name();
    return createWindowOpenLink(entityReference, $v_2, attributes)
}

function createWindowOpenLink(entityReference, content, attributes) {
    var $v_0 = "";
    if (!IsNull(attributes)) {
        var $$dict_5 = attributes;
        for (var $$key_6 in $$dict_5) {
            var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
            $v_0 += String.format(' {0}="{1}" ',
                $v_2.key,
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode($v_2.value))
        }
    }
    var $v_1 = convertETNtoETC(entityReference.get_logicalName());
    if ($v_1 > 0)
        return String.format("<a href='#' onclick=\"{4}({0},'{1}'); return false;\" {3} >{2}</a>",
            $v_1,
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(entityReference.get_id()),
            content,
            $v_0,
            "Wall.Control.Utils.WindowUtils.openObject");
    return String.format("<a href=\"#\" onclick=\"{4}('{0}','{1}'); return false;\" {3} >{2}</a>",
        Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(entityReference.get_logicalName()),
        Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode(entityReference.get_id()),
        content,
        $v_0,
        "Wall.Control.Utils.WindowUtils.openEntityForm")
}

function convertETNtoETC(entityLogicalName) {
    switch (entityLogicalName) {
    case "account":
        return 1;
    case "appointment":
        return 4201;
    case "campaignactivity":
        return 4402;
    case "campaignresponse":
        return 4401;
    case "contact":
        return 2;
    case "contract":
        return 1010;
    case "email":
        return 4202;
    case "fax":
        return 4204;
    case "goal":
        return 9600;
    case "incident":
        return 112;
    case "invoice":
        return 1090;
    case "lead":
        return 4;
    case "letter":
        return 4207;
    case "list":
        return 4300;
    case "opportunity":
        return 3;
    case "phonecall":
        return 4210;
    case "processsession":
        return 4710;
    case "queue":
        return 2020;
    case "quote":
        return 1084;
    case "recurringappointmentmaster":
        return 4251;
    case "salesorder":
        return 1088;
    case "serviceappointment":
        return 4214;
    case "systemuser":
        return 8;
    case "task":
        return 4212;
    default:
        return -1
    }
}

Wall.Control.Utils.GridUtils = function(gridControl) {
    if (IsNull(gridControl)) throw Error.argumentNull("gridControl is null");
    this.$2_0 = gridControl
};
Wall.Control.Utils.GridUtils.prototype = {
    $2_0: null,
    get_selectedIds: function() { return this.$2_0.get_selectedIds() },
    get_isRefreshing: function() {
        if (_Type.hasProperty(this.$2_0, "isRefreshing")) return this.$2_0.get_isRefreshing();
        else return false
    },
    refresh: function() { _Type.hasMethod(this.$2_0, "refresh") && this.$2_0.refresh() },
    getCellValue: function(columnName, rowId) {
        if (_Type.hasMethod(this.$2_0, "getCellValue")) return this.$2_0.getCellValue(columnName, rowId);
        return null
    },
    showLoadingMessage: function() {
        _Type.hasMethod(this.$2_0, "ShowLoadingMessage") && this.$2_0.ShowLoadingMessage()
    },
    get_element: function() {
        if (_Type.hasField(this.$2_0, "_element")) return this.$2_0._element;
        return null
    }
};
Wall.Control.Utils.jQueryEventHelper = function() {};
Wall.Control.Utils.jQueryEventHelper.getKeyCode = function(evt) { return evt.keyCode };
Wall.Control.Utils.jQueryEventHelper.getCtrlKey = function(evt) { return evt.ctrlKey };
Wall.Control.Utils.jQueryEventHelper.getShiftKey = function(evt) { return evt.shiftKey };
Wall.Control.Utils.jQueryEventHelper.getAltKey = function(evt) { return evt.altKey };
Wall.Control.Utils.jQueryEventHelper.onlyTabKeyIsPressed = function(e) {
    var $v_0 = Wall.Control.Utils.jQueryEventHelper.getKeyCode(e);
    return $v_0 === 9 &&
        !Wall.Control.Utils.jQueryEventHelper.getShiftKey(e) &&
        !Wall.Control.Utils.jQueryEventHelper.getCtrlKey(e) &&
        !Wall.Control.Utils.jQueryEventHelper.getAltKey(e)
};
Wall.Control.Utils.jQueryEventHelper.onlyTabAndShiftKeysArePressed = function(e) {
    var $v_0 = Wall.Control.Utils.jQueryEventHelper.getKeyCode(e);
    return $v_0 === 9 &&
        Wall.Control.Utils.jQueryEventHelper.getShiftKey(e) &&
        !Wall.Control.Utils.jQueryEventHelper.getCtrlKey(e) &&
        !Wall.Control.Utils.jQueryEventHelper.getAltKey(e)
};
Wall.Control.Utils.Keyboard = function() {};
Wall.Control.Utils.OutlookUtils = function() {};
Wall.Control.Utils.OutlookUtils.saveMruXml = function(xml) {
    if (Wall.Control.Utils.OutlookUtils.isOutlookHostedWindow() &&
        typeof getOutlookHostedWindow().saveMruXml !== "undefined") {
        getOutlookHostedWindow().saveMruXml(xml);
        return true
    }
    return false
};
Wall.Control.Utils.OutlookUtils.getMruXml = function() {
    if (Wall.Control.Utils.OutlookUtils.isOutlookHostedWindow() &&
        typeof getOutlookHostedWindow().getMruXml !== "undefined") return getOutlookHostedWindow().getMruXml();
    return null
};
Wall.Control.Utils.OutlookUtils.isOutlookHostedWindow = function() { return isOutlookHostedWindow() };
Wall.Control.Utils.RemoteCommandFactory = function() {};
Wall.Control.Utils.RemoteCommandFactory
    .createRemoteCommand = function(obj, command, urlBase) { return new RemoteCommand(obj, command, urlBase) };
Wall.Control.Utils.ScreenReader = function() {};
Wall.Control.Utils.ScreenReader.say = function(message) { $P_CRM("#screenReaderDiv").text(message) };
Wall.Control.Utils.SelectionInfo = function() {};
Wall.Control.Utils.SelectionInfo.prototype = { start: 0, end: 0, text: null };
Wall.Control.Utils.TextRangeUtils = function() {};
Wall.Control.Utils.TextRangeUtils.$y = function($p0) {
    var $v_0 = $p0, $v_1 = $v_0.selectionStart;
    if (!IsNull($v_1)) return $v_1;
    var $v_2 = document.selection;
    if (!IsNull($v_2)) {
        $p0.focus();
        var $v_3 = $v_2.createRange();
        if (!$v_3) return 0;
        var $v_4 = $v_0.createTextRange(), $v_5 = $v_4.duplicate();
        $v_4.moveToBookmark($v_3.getBookmark());
        $v_5.setEndPoint("EndToStart", $v_4);
        return $v_5.text.length
    }
    return -1
};
Wall.Control.Utils.TextRangeUtils.getCaretPosition = function(textAreaElement) {
    for (var $v_0 = Wall.Control.Utils.TextRangeUtils.$y(textAreaElement),
        $v_1 = $v_0,
        $v_2 = textAreaElement.value,
        $v_3 = 0;
        $v_3 < $v_0;
        $v_3++) if ($v_2.charAt($v_3) === "\r") --$v_1;
    return $v_1
};
Wall.Control.Utils.TextRangeUtils.setCaretPosition = function(element, position) {
    if (!IsNull(element.setSelectionRange)) {
        element.setSelectionRange(position, position);
        return
    }
    if (!IsNull(element.createTextRange)) {
        var $v_0 = element.createTextRange();
        $v_0.collapse(true);
        $v_0.moveEnd("character", position);
        $v_0.moveStart("character", position);
        $v_0.select()
    }
};
Wall.Control.Utils.TextRangeUtils.getClipboardValue = function() { return window.clipboardData.getData("Text") };
Wall.Control.Utils.TextRangeUtils.getSelection = function(textAreaElement) {
    var $v_0 = new Wall.Control.Utils.SelectionInfo, $v_1 = textAreaElement;
    if (Wall.Control.Utils.TextRangeUtils.$q(textAreaElement)) {
        $v_0.text = textAreaElement.value.substring($v_1.selectionStart, $v_1.selectionEnd);
        if (_String.isNullOrEmpty($v_0.text)) return null;
        $v_0.start = $v_1.selectionStart;
        $v_0.end = $v_1.selectionEnd
    } else {
        var $v_2 = document.selection;
        if (!IsNull($v_2)) {
            textAreaElement.focus();
            var $v_3 = $v_2.createRange();
            if (_String.isNullOrEmpty($v_3.text)) return null;
            $v_0.text = $v_3.text;
            $v_0.start = Wall.Control.Utils.TextRangeUtils.getCaretPosition(textAreaElement);
            $v_0.end = $v_0.start + $v_3.text.length
        }
    }
    return $v_0
};
Wall.Control.Utils.TextRangeUtils.setSelection = function(textAreaElement, startIndex, endIndex) {
    var $v_0 = textAreaElement;
    if (Wall.Control.Utils.TextRangeUtils.$q(textAreaElement)) $v_0.setSelectionRange(startIndex, endIndex);
    else {
        var $v_1 = document.selection;
        if (!IsNull($v_1)) {
            textAreaElement.focus();
            var $v_2 = $v_0.createTextRange();
            $v_2.collapse(true);
            $v_2.moveEnd("character", endIndex);
            $v_2.moveStart("character", startIndex);
            $v_2.select()
        }
    }
};
Wall.Control.Utils.TextRangeUtils.$q = function($p0) {
    var $v_0 = $p0, $v_1 = $v_0.selectionStart;
    return !IsNull($v_1)
};
Wall.Control.Utils.WallUtils = function() {};
Wall.Control.Utils.WallUtils.$u = function($p0) {
    var $v_0 = new
            RegExp("\\&\\#64;\\&\\#91;([a-z0-9_]{1,50}),(\\{{0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\\}{0,1}),\\&\\#34;(.*?)\\&\\#34;\\&\\#93;", "gm"),
        $v_1 = $p0,
        $v_2 = $v_0.exec($p0);
    while ($v_2) {
        if ($v_2.length < 3) continue;
        var $v_3 = $v_2[1], $v_4 = parseInt($v_3), $v_5 = $v_2[2], $v_6 = "", $v_7 = "", $v_8 = "";
        if ($v_2.length > 3)
            if (!IsNull($v_2[3]) && $v_2[3].length > 0) {
                $v_6 = $v_2[3];
                $v_8 = $v_7 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlDecode($v_6);
                if ($v_7.length > 60) {
                    $v_7 = _String.remove($v_7, 60 - Wall.Control.Resources.WallControl.ellipsis.length);
                    $v_7 += Wall.Control.Resources.WallControl.ellipsis
                }
                $v_7 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.multilineHtmlEncode($v_7);
                $v_8 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode($v_8)
            }
        var $v_9 = null, $v_A = isNaN($v_4);
        if ($v_A)
            $v_9 = _String
                .format('<a href=\'#\' onclick="{4}({0},\'{1}\', null, null,null,null);return false;" title="{3}" alt="{3}" >{2}</a>', Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.javaScriptEncode($v_3), Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode($v_5), $v_7, $v_8, "Wall.Control.Utils.WindowUtils.openEntityForm");
        else
            $v_9 = _String
                .format('<a href=\'#\' onclick="{4}({0},\'{1}\', null, null,null,null);return false;" title="{3}" alt="{3}" >{2}</a>', Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode($v_3), Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.urlEncode($v_5), $v_7, $v_8, "Wall.Control.Utils.WindowUtils.openObject");
        $v_1 = $v_1.replace($v_2[0], $v_9);
        $v_2 = $v_0.exec($p0)
    }
    return $v_1
};
Wall.Control.Utils.WallUtils.$12 = function($p0) {
    if (IsNull($p0)) return "";
    var $v_0 = [],
        $v_1 = new RegExp("((http|https|ftp|ftps|onenote|tel)://[\\S]*[a-zA-Z0-9+&@#/%=~_|$])", "igm"),
        $v_2 = $p0.match($v_1);
    if (!$v_2) $v_2 = new Array(0);
    var $v_3 = new RegExp("(www\\.[\\S]*[a-zA-Z0-9+&@#/%=~_|$])", "igm"), $v_4 = $p0.match($v_3);
    if (!$v_4) $v_4 = new Array(0);
    for (var $v_5 = new Array(0), $$arr_7 = $v_4, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
        for (var $v_7 = $$arr_7[$$idx_9], $v_8 = true, $$arr_C = $v_2, $$len_D = $$arr_C.length, $$idx_E = 0;
            $$idx_E < $$len_D;
            ++$$idx_E) {
            var $v_9 = $$arr_C[$$idx_E];
            if ($v_9.indexOf($v_7) >= 0) {
                $v_8 = false;
                break
            }
        }
        if ($v_8) $v_5[$v_5.length] = $v_7
    }
    $v_0 = $v_2.concat.apply($v_2, $v_5);
    $p0 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.multilineHtmlEncode($p0, true);
    if (!$v_0 || !$v_0.length) return $p0;
    $v_0 = _Array.removeDuplicatesFromArrayList($v_0);
    for (var $v_6 = new RegExp("^((http|https|ftp|ftps|onenote|tel)://)(.*)$", "i"), $v_A = 0;
        $v_A < $v_0.length;
        $v_A++) {
        var $v_B = $v_0[$v_A];
        if (_String.indexOfAny($v_B, ["<", ">", "'", '"', "\r", "\n"]) >= 0) continue;
        var $v_C = $v_B, $v_D = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode($v_C);
        if ($v_C.length > 60) {
            $v_C = _String.remove($v_C, 60 - Wall.Control.Resources.WallControl.ellipsis.length);
            $v_C += Wall.Control.Resources.WallControl.ellipsis
        }
        var $v_E = $v_B;
        if ($v_B.toLowerCase().startsWith("www")) $v_E = "http://" + $v_E;
        var $v_F = $v_6.exec($v_E);
        if ($v_F && $v_F.length >= 3)
            $v_E = $v_F[1] + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode($v_F[3]);
        else continue;
        $p0 = $p0.replace($v_D,
            _String.format("<a href='{0}' target='_blank' title='{2}'>{1}</a>",
                $v_E,
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode($v_C),
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlAttributeEncode($v_B)))
    }
    return $p0
};
Wall.Control.Utils.WallUtils.formatTextForRendering = function(text) {
    return Wall.Control.Utils.WallUtils.$u(Wall.Control.Utils.WallUtils.$12(text))
};
Wall.Control.Utils.WallUtils.mapPostsTojQueryIds = function(posts) {
    if (IsNull(posts) || !posts.length) return "";
    var $v_0 = _Array.map(String, posts, function($p1_0) { return $p1_0.get_postId() });
    return "#" + $v_0.join(",#")
};
Wall.Control.Utils.WallUtils.mapCommentsTojQueryIds = function(comments) {
    if (IsNull(comments) || !comments.length) return "";
    var $v_0 = _Array.map(String, comments, function($p1_0) { return $p1_0.get_commentId() });
    return "#" + $v_0.join(",#")
};
Wall.Control.Utils.WallUtils.wallResourcesLoaded = function() { return !IsNull(Wall.Control.Resources.WallControl) };
Wall.Control.Utils.WallUtils.removeDuplicatePosts = function(posts, displayedPosts) {
    if (IsNull(posts)) return new Array(0);
    if (IsNull(displayedPosts)) return posts;
    var $v_0 = _Array.map(String, displayedPosts, function($p1_0) { return $p1_0.get_postId() }),
        $v_1 = _Array.filter(Wall.Interfaces.IPost,
            posts,
            function($p1_0) { return !Array.contains($v_0, $p1_0.get_postId()) });
    return $v_1
};
Wall.Control.Utils.WallUtils.enableTextSelection = function() {
    if (!$P_CRM.browser.msie) return;
    if (!_Type.hasField(document, "_events")) return;
    var $v_0 = document._events;
    if (!_Type.hasField($v_0, "selectstart")) return;
    for (var $v_1 = $v_0
                 .selectstart,
        $v_2 = $v_1.length - 1;
        $v_2 >= 0;
        $v_2--) $removeHandler(document, "selectstart", $v_1[$v_2].handler)
};
Wall.Control.Utils.WindowUtils = function() {};
Wall.Control.Utils.WindowUtils.get_$Z = function() {
    if (!Wall.Control.Utils.WindowUtils.$F) {
        Wall.Control.Utils.WindowUtils.$F = new Sys.EventHandlerList;
        Wall.Control.Utils.WindowUtils.$B = function($p1_0) {
            Wall.Control.Utils.WindowUtils.$B = null;
            _Event.fireEvent(Sys.EventArgs,
                Wall.Control.Utils.WindowUtils.get_$Z(),
                "OnWindowUnload",
                $P_CRM(window),
                Sys.EventArgs.Empty);
            $P_CRM(window).unbind("unload", Wall.Control.Utils.WindowUtils.$B);
            Wall.Control.Utils.WindowUtils.$F = null
        };
        $P_CRM(window).bind("unload", Wall.Control.Utils.WindowUtils.$B)
    }
    return Wall.Control.Utils.WindowUtils.$F
};
Wall.Control.Utils.WindowUtils.add_onWindowUnload = function(value) {
    Wall.Control.Utils.WindowUtils.get_$Z().addHandler("OnWindowUnload", value)
};
Wall.Control.Utils.WindowUtils.remove_onWindowUnload = function(value) {
    Wall.Control.Utils.WindowUtils.get_$Z().removeHandler("OnWindowUnload", value)
};
Wall.Control.Utils.WindowUtils.dispose = function() {
    if (IsNull(Wall.Control.Utils.WindowUtils.$B)) return;
    Wall.Control.Utils.WindowUtils.$B(null)
};
Wall.Control.Utils.WindowUtils.openDialog = function(url,
    $sn_arguments,
    width,
    height,
    resizable,
    modeless,
    customWinParams) {
    var $v_0 = Mscrm.CrmUri.create(url);
    return openStdDlg($v_0, $sn_arguments, width, height, resizable, modeless, customWinParams)
};
Wall.Control.Utils.WindowUtils
    .openDialogWithCallback = function(url,
        $sn_arguments,
        width,
        height,
        callbackFunctionObject,
        resizable,
        modeless,
        customWinParams) {
        var $v_0 = Mscrm.CrmUri.create(url);
        return openStdDlgWithCallback($v_0,
            $sn_arguments,
            width,
            height,
            callbackFunctionObject,
            resizable,
            modeless,
            customWinParams)
    };
Wall.Control.Utils.WindowUtils.openWindow = function(url, name, width, height, customWinFeatures) {
    var $v_0 = Mscrm.CrmUri.create(url);
    return openStdWin($v_0, name, width, height, customWinFeatures)
};
Wall.Control.Utils.WindowUtils.openObject = function(type, id, parameters, urlPrefix, mode, extraParams, typeName) {
    return openObj(type, id, parameters, urlPrefix, mode, extraParams)
};
Wall.Control.Utils.WindowUtils.openEntityForm = function(name, id, parameters) {
    Xrm.Utility.openEntityForm(name, id, parameters)
};
Wall.Control.Utils.XmlUtils = function() {};
Wall.Control.Utils.XmlUtils.parseXmlDocument = function(xml) {
    if (IsNull(xml)) return null;
    var $v_0 = null;
    if ($P_CRM.browser.msie || Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode())
        for (var $v_1 = ["Microsoft.XMLDOM", "Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"], $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            $v_0 = new ActiveXObject($v_1[$v_2]);
            if (!IsNull($v_0)) {
                $v_0.async = false;
                $v_0.resolveExternals = false;
                $v_0.loadXML(xml);
                $v_0.setProperty("SelectionLanguage", "XPath");
                if (!_String.isNullOrEmpty($v_0.text)) return $v_0
            }
        }
    $v_0 = Sys.Net.XMLDOM(xml);
    return $v_0
};
Wall.Control.ScriptSharp.jQueryDialogOptionsImportHelper
    .registerClass("Wall.Control.ScriptSharp.jQueryDialogOptionsImportHelper");
Wall.Service.Convertors.EntityReferenceConvertor.registerClass("Wall.Service.Convertors.EntityReferenceConvertor");
Wall.Service.Convertors.SystemUserConvertor.registerClass("Wall.Service.Convertors.SystemUserConvertor");
Wall.Service.Messages.BaseResponse.registerClass("Wall.Service.Messages.BaseResponse",
    null,
    Wall.Interfaces.IPostResponse);
Wall.Service.Messages.CreateCommentResponse.registerClass("Wall.Service.Messages.CreateCommentResponse",
    Wall.Service.Messages.BaseResponse,
    Wall.Interfaces.ICreateCommentResponse);
Wall.Service.Messages.CreatePostResponse.registerClass("Wall.Service.Messages.CreatePostResponse",
    Wall.Service.Messages.BaseResponse,
    Wall.Interfaces.ICreatePostResponse);
Wall.Service.Messages.DeleteCommentResponse.registerClass("Wall.Service.Messages.DeleteCommentResponse",
    Wall.Service.Messages.BaseResponse,
    Wall.Interfaces.IDeleteCommentResponse);
Wall.Service.Messages.DeletePostResponse.registerClass("Wall.Service.Messages.DeletePostResponse",
    Wall.Service.Messages.BaseResponse,
    Wall.Interfaces.IDeletePostResponse);
Wall.Service.Messages.RetrievePostsRequest.registerClass("Wall.Service.Messages.RetrievePostsRequest",
    null,
    Wall.Interfaces.IRetrievePostsRequest);
Wall.Service.Messages.RetrieveCommentsRequest.registerClass("Wall.Service.Messages.RetrieveCommentsRequest",
    Wall.Service.Messages.RetrievePostsRequest,
    Wall.Interfaces.IRetrieveCommentsRequest);
Wall.Service.Messages.RetrieveCommentsResponse
    .registerClass("Wall.Service.Messages.RetrieveCommentsResponse",
        Wall.Service.Messages.BaseResponse,
        Wall.Interfaces.IRetrieveCommentsResponse);
Wall.Service.Messages.RetrievePostsBaseResponse
    .registerClass("Wall.Service.Messages.RetrievePostsBaseResponse",
        Wall.Service.Messages.BaseResponse,
        Wall.Interfaces.IRetrievePostsResponse);
Wall.Service.Messages.RetrieveWallFiltersResponse
    .registerClass("Wall.Service.Messages.RetrieveWallFiltersResponse",
        Wall.Service.Messages.BaseResponse,
        Wall.Interfaces.IRetrieveWallFiltersResponse);
Wall.Service.Messages.SetDefaultFilterResponse
    .registerClass("Wall.Service.Messages.SetDefaultFilterResponse",
        Wall.Service.Messages.BaseResponse,
        Wall.Interfaces.ISetDefaultFilterResponse);
Wall.Service.ObjectModel.Comment.registerClass("Wall.Service.ObjectModel.Comment", null, Wall.Interfaces.IComment);
Wall.Service.ObjectModel.EntityReference.registerClass("Wall.Service.ObjectModel.EntityReference",
    null,
    Wall.Interfaces.IEntityReference);
Wall.Service.ObjectModel.Post.registerClass("Wall.Service.ObjectModel.Post", null, Wall.Interfaces.IPost);
Wall.Service.ObjectModel.SystemUser.registerClass("Wall.Service.ObjectModel.SystemUser",
    null,
    Wall.Interfaces.ISystemUser);
Wall.Service.ObjectModel.WallAction.registerClass("Wall.Service.ObjectModel.WallAction",
    null,
    Wall.Interfaces.IWallAction);
Wall.Service.ObjectModel.WallFilter.registerClass("Wall.Service.ObjectModel.WallFilter",
    null,
    Wall.Interfaces.IWallFilter);
Mscrm.Yammer.ConfigOptions.registerClass("Mscrm.Yammer.ConfigOptions");
Mscrm.Yammer.EmailAddress.registerClass("Mscrm.Yammer.EmailAddress");
Mscrm.Yammer.Contact.registerClass("Mscrm.Yammer.Contact");
Mscrm.Yammer.User.registerClass("Mscrm.Yammer.User");
Mscrm.Yammer.ObjectProperties.registerClass("Mscrm.Yammer.ObjectProperties");
Mscrm.Yammer.Config.registerClass("Mscrm.Yammer.Config");
Mscrm.Yammer.FeedOptions.registerClass("Mscrm.Yammer.FeedOptions");
Wall.UI.WallStateEnum.registerClass("Wall.UI.WallStateEnum");
Wall.UI.Wall.registerClass("Wall.UI.Wall", null, Wall.Interfaces.IWall, Sys.IDisposable);
Wall.Control.Utils.BrowserType.registerClass("Wall.Control.Utils.BrowserType");
Wall.Control.Utils.Browser.registerClass("Wall.Control.Utils.Browser");
Wall.Control.Utils.DateUtils.registerClass("Wall.Control.Utils.DateUtils");
Wall.Control.Utils.WallUtilsHelper.registerClass("Wall.Control.Utils.WallUtilsHelper");
Wall.Control.Utils.GridUtils.registerClass("Wall.Control.Utils.GridUtils");
Wall.Control.Utils.jQueryEventHelper.registerClass("Wall.Control.Utils.jQueryEventHelper");
Wall.Control.Utils.Keyboard.registerClass("Wall.Control.Utils.Keyboard");
Wall.Control.Utils.OutlookUtils.registerClass("Wall.Control.Utils.OutlookUtils");
Wall.Control.Utils.RemoteCommandFactory.registerClass("Wall.Control.Utils.RemoteCommandFactory");
Wall.Control.Utils.ScreenReader.registerClass("Wall.Control.Utils.ScreenReader");
Wall.Control.Utils.SelectionInfo.registerClass("Wall.Control.Utils.SelectionInfo");
Wall.Control.Utils.TextRangeUtils.registerClass("Wall.Control.Utils.TextRangeUtils");
Wall.Control.Utils.WallUtils.registerClass("Wall.Control.Utils.WallUtils");
Wall.Control.Utils.WindowUtils.registerClass("Wall.Control.Utils.WindowUtils");
Wall.Control.Utils.XmlUtils.registerClass("Wall.Control.Utils.XmlUtils");
Wall.Control.ScriptSharp.jQueryDialogOptionsImportHelper.$$cctor();
Wall.UI.WallStateEnum.unknown = 0;
Wall.UI.WallStateEnum.data = 1;
Wall.UI.WallStateEnum.progress = 2;
Wall.UI.WallStateEnum.showMoreProgress = 3;
Wall.UI.WallStateEnum.empty = 4;
Wall.UI.WallStateEnum.error = 5;
Wall.UI.Wall.postjQueryTemplate = "#{0}";
Wall.UI.Wall.commentjQueryTemplate = "#{0}";
Wall.UI.Wall.commentsAreaJQueryTemplate = "#{0}_commentsArea";
Wall.UI.Wall.showAllCommentsJQueryTemplate = "#{0}_showAllComments";
Wall.UI.Wall.replyAreaJQueryTemplate = "#{0}_replyArea";
Wall.UI.Wall.postJQuerySelector = ".post";
Wall.UI.Wall.postsRefreshedEventName = "PostsRefreshed";
Wall.UI.Wall.commentsRefreshedEventName = "CommentsRefreshed";
Wall.UI.Wall.postCreatedEventName = "PostCreated";
Wall.UI.Wall.postCreatingEventName = "PostCreating";
Wall.UI.Wall.commentCreatedEventName = "CommentCreated";
Wall.UI.Wall.postDeletedEventName = "PostDeleted";
Wall.UI.Wall.commentDeletedEventName = "CommentDeleted";
Wall.UI.Wall.filtersRefreshedEventName = "FiltersRefreshed";
Wall.UI.Wall.postsRefreshingEventName = "PostsRefreshing";
Wall.UI.Wall.errorEventName = "Error";
Wall.UI.Wall.postsInsertedEventName = "PostsInserted";
Wall.Control.Utils.BrowserType.undefined = 0;
Wall.Control.Utils.BrowserType.IE = 1;
Wall.Control.Utils.BrowserType.firefox = 2;
Wall.Control.Utils.BrowserType.chrome = 3;
Wall.Control.Utils.BrowserType.safari = 4;
Wall.Control.Utils.BrowserType.opera = 5;
Wall.Control.Utils.Browser.$K = null;
Wall.Control.Utils.WallUtilsHelper.$T = null;
Wall.Control.Utils.Keyboard.tab = 9;
Wall.Control.Utils.Keyboard.enter = 13;
Wall.Control.Utils.Keyboard.shift = 16;
Wall.Control.Utils.Keyboard.esc = 27;
Wall.Control.Utils.Keyboard.space = 32;
Wall.Control.Utils.Keyboard.end = 35;
Wall.Control.Utils.Keyboard.home = 36;
Wall.Control.Utils.Keyboard.leftArrow = 37;
Wall.Control.Utils.Keyboard.upArrow = 38;
Wall.Control.Utils.Keyboard.rightArrow = 39;
Wall.Control.Utils.Keyboard.downArrow = 40;
Wall.Control.Utils.Keyboard.atSign = 64;
Wall.Control.Utils.Keyboard.comma = 188;
Wall.Control.Utils.Keyboard.period = 190;
Wall.Control.Utils.WindowUtils.$F = null;
Wall.Control.Utils.WindowUtils.$B = null;
Wall.Control.Utils.WindowUtils.openWindowInlineScript = "Wall.Control.Utils.WindowUtils.openWindow";
Wall.Control.Utils.WindowUtils.openDialogInlineScript = "Wall.Control.Utils.WindowUtils.openDialog";
Wall.Control.Utils.WindowUtils.openObjectInlineScript = "Wall.Control.Utils.WindowUtils.openObject";
Wall.Control.Utils.WindowUtils.openObjectUsingETN = "Wall.Control.Utils.WindowUtils.openEntityForm"