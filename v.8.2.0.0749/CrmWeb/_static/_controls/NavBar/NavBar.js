Type.registerNamespace("Mscrm");
Mscrm.INavigateActionProvider = function() {};
Mscrm.INavigateActionProvider.registerInterface("Mscrm.INavigateActionProvider");
Mscrm.IBuilderProvider = function() {};
Mscrm.IBuilderProvider.registerInterface("Mscrm.IBuilderProvider");
Mscrm.IBuilder = function() {};
Mscrm.IBuilder.registerInterface("Mscrm.IBuilder");
Mscrm.IControlContainerFactory = function() {};
Mscrm.IControlContainerFactory.registerInterface("Mscrm.IControlContainerFactory");
Mscrm.INavStatusBarAnimationStrategy = function() {};
Mscrm.INavStatusBarAnimationStrategy.registerInterface("Mscrm.INavStatusBarAnimationStrategy");
Mscrm.IContainerAnimation = function() {};
Mscrm.IContainerAnimation.registerInterface("Mscrm.IContainerAnimation");
Mscrm.IControlContainer = function() {};
Mscrm.IControlContainer.registerInterface("Mscrm.IControlContainer");
Mscrm.NavigationNodeType = function() {};
Mscrm.NavigationNodeType.prototype = { navigation: 0, entityQuickCreate: 1, activityCreate: 2 };
Mscrm.NavigationNodeType.registerEnum("Mscrm.NavigationNodeType", false);
Mscrm.INavigationStructureProvider = function() {};
Mscrm.INavigationStructureProvider.registerInterface("Mscrm.INavigationStructureProvider");
Mscrm.INavigateAction = function() {};
Mscrm.INavigateAction.registerInterface("Mscrm.INavigateAction");
Mscrm.SearchType = function() {};
Mscrm.SearchType.prototype = { multiEntityQuickFind: 0, externalSearch: 1 };
Mscrm.SearchType.registerEnum("Mscrm.SearchType", false);
Mscrm.INavigateActionAsync = function() {};
Mscrm.INavigateActionAsync.registerInterface("Mscrm.INavigateActionAsync");
Mscrm.INavigationUrlBuilder = function() {};
Mscrm.INavigationUrlBuilder.registerInterface("Mscrm.INavigationUrlBuilder");
Mscrm.IShuffleStrategy = function() {};
Mscrm.IShuffleStrategy.registerInterface("Mscrm.IShuffleStrategy");
Mscrm.ViewEntityAction = function(typeCode, recordId) {
    if (isNullOrEmptyString(recordId)) throw Error.argumentNull("recordId");
    this.$49_0 = typeCode;
    this.$44_0 = recordId
};
Mscrm.ViewEntityAction.prototype = { $49_0: 0, $44_0: null, execute: function() { openObj(this.$49_0, this.$44_0) } };
Mscrm.GlobalQuickCreateAction = function(node, navStatus, parentControl) {
    this.$B_0 = node;
    this.$11_0 = navStatus;
    if (IsNull(parentControl)) throw Error.argumentNull("parentControl");
    this.$G_0 = parentControl
};
Mscrm.GlobalQuickCreateAction.prototype = {
    $B_0: null,
    $11_0: null,
    $G_0: null,
    execute: function() {
        var $v_0 = this.$B_0.Action;
        if (IsNull($v_0)) throw Error.argumentNull("navigationNode.Action");
        if (this.$B_0
            .NodeType !==
            1 &&
            this.$B_0.NodeType !== 2) throw Error.argument("navigationNode.Action.NodeType");
        if (this.$B_0.NodeType === 1) {
            if (!("EntityTypeCode" in $v_0)) throw Error.argument("node.Action.EntityTypeCode");
            if (!("QuickCreateTimestamp" in $v_0)) throw Error.argument("node.Action.QuickCreateTimestamp");
            var $v_2 = new Mscrm
                .NavBarGlobalQuickCreateCallbacks("NavBarGloablQuickCreate", this.$11_0, this.$B_0, this.$G_0);
            Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
                .launchGlobalQuickCreate($v_2,
                    this.$B_0.Caption,
                    $v_0["EntityTypeCode"],
                    $P_CRM.parseJSON(this.$B_0.Action["QuickCreateTimestamp"].toString()))
        } else {
            if (!("EntityTypeCode" in $v_0)) throw Error.argument("node.Action.EntityTypeCode");
            openObj($v_0["EntityTypeCode"], null)
        }
        var $v_1 = (new Date).getTime().toString();
        Mscrm.Utilities.addControlMarker(this.$G_0.get_id(), Mscrm.NavBar.$1X, Mscrm.NavBar.$1Y, $v_1);
        Mscrm.Utilities.addControlMarker(this.$B_0.Id, Mscrm.NavBar.$1X, Mscrm.NavBar.$1Y, $v_1)
    }
};
Mscrm.GlobalQuickCreateActionProvider = function(navStatus, parentControl) {
    this.$11_0 = navStatus;
    this.$G_0 = parentControl
};
Mscrm.GlobalQuickCreateActionProvider.prototype = {
    $11_0: null,
    $G_0: null,
    createAction: function(navigationNode) {
        if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
        return new Mscrm.GlobalQuickCreateAction(navigationNode, this.$11_0, this.$G_0)
    }
};
Mscrm.MruAction = function(node, parentControl) {
    if (IsNull(node)) throw Error.argumentNull("node");
    if (IsNull(parentControl)) throw Error.argumentNull("parentControl");
    this.$G_0 = parentControl;
    this.$B_0 = node
};
Mscrm.MruAction.prototype = {
    $B_0: null,
    $G_0: null,
    execute: function() {
        if (IsNull(this.$B_0.Action)) throw Error.argumentNull("node.Action");
        if (!("EntityTypeCode" in this.$B_0.Action)) throw Error.argument("node.Action.EntityTypeCode");
        if (!("Action" in this.$B_0.Action)) throw Error.argument("node.Action.Action");
        if (!("Id" in this.$B_0.Action)) throw Error.argument("node.Action.Id");
        this.$G_0.$6F_3(this.$B_0);
        openObj(this.$B_0.Action["EntityTypeCode"], this.$B_0.Action["Id"], this.$B_0.Action["Action"])
    }
};
Mscrm.MruActionProvider = function(parentControl) { this.$G_0 = parentControl };
Mscrm.MruActionProvider.prototype = {
    $G_0: null,
    createAction: function(navigationNode) { return new Mscrm.MruAction(navigationNode, this.$G_0) }
};
Mscrm.NavBarGlobalQuickCreateCallbacks = function(quickCreateFrameId, navStatus, navigationNode, parentControl) {
    Mscrm.NavBarGlobalQuickCreateCallbacks.initializeBase(this, [quickCreateFrameId, 990]);
    if (IsNull(navStatus)) throw Error.argumentNull("navStatus");
    if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
    this.$11_1 = navStatus;
    this.$3g_1 = navigationNode;
    this.$G_1 = parentControl
};
Mscrm.NavBarGlobalQuickCreateCallbacks.prototype = {
    $11_1: null,
    $3g_1: null,
    $G_1: null,
    onQuickCreateSaveSuccessCallback: function(record) {
        var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks.prototype.onQuickCreateSaveSuccessCallback
                .call(this, record),
            $v_1 = window.LOCID_SUCCESS_SAVE_QUICKFORM,
            $v_2 = [];
        $v_2[0] = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_QUICKCREATE_VIEWRECORD");
        $v_2[1] = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_QUICKCREATE_CREATEANOTHER");
        var $v_3 = [];
        $v_3[0] = new Mscrm.ViewEntityAction(record.TypeCode, record.Id);
        $v_3[1] = new Mscrm.GlobalQuickCreateAction(this.$3g_1, this.$11_1, this.$G_1);
        this.$11_1.showInfoMessage(String.format($v_1, record.TypeDisplayName, record.Name), $v_2, $v_3, false);
        return $v_0
    }
};
Mscrm.RecordSiteMapAction = function(node, parentControl) {
    if (IsNull(node)) throw Error.argumentNull("node");
    if (IsNull(parentControl)) throw Error.argumentNull("parentControl");
    this.$G_0 = parentControl;
    this.$B_0 = node
};
Mscrm.RecordSiteMapAction.prototype = {
    $B_0: null,
    $G_0: null,
    execute: function() {
        var $v_0 = {};
        $v_0["id"] = this.$B_0.Id;
        this.$G_0.raiseEvent(90, $v_0)
    }
};
Mscrm.RecordSiteMapActionProvider = function(parentControl) { this.$G_0 = parentControl };
Mscrm.RecordSiteMapActionProvider.prototype = {
    $G_0: null,
    createAction: function(navigationNode) {
        if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
        return new Mscrm.RecordSiteMapAction(navigationNode, this.$G_0)
    }
};
Mscrm.TestNavigateAction = function(pageUrl) {
    if (isNullOrEmptyString(pageUrl)) throw Error.argumentNull("pageUrl");
    this.$3l_0 = pageUrl
};
Mscrm.TestNavigateAction.prototype = { $3l_0: null, execute: function() { alert(this.$3l_0) } };
Mscrm.TestNavigateActionProvider = function() {};
Mscrm.TestNavigateActionProvider.prototype = {
    createAction: function(navigationNode) {
        if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
        if (IsNull(navigationNode.Action)) throw Error.argumentNull("navigationNode.Action");
        if (!("PageUrl" in navigationNode.Action)) throw Error.argument("navigationNode.Action.PageUrl");
        var $v_0 = navigationNode.Action["PageUrl"];
        return new Mscrm.TestNavigateAction($v_0)
    }
};
Mscrm.NavigationNodeActionFactory = function(actionProviders) {
    if (IsNull(actionProviders)) throw Error.argumentNull("actionProviders");
    this.$3M_0 = actionProviders
};
Mscrm.NavigationNodeActionFactory.prototype = {
    $3M_0: null,
    createAction: function(navigationNode) {
        if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
        if (IsNull(navigationNode.Action)) throw Error.argumentNull("navigationNode.Action");
        if (!("ActionType" in navigationNode.Action)) throw Error.argument("navigationNode.Action.ActionType");
        var $v_0 = this.$3M_0[navigationNode.Action["ActionType"]];
        if (IsNull($v_0)) throw Error.invalidOperation("Navigation node action type is not supported.");
        return $v_0.createAction(navigationNode)
    }
};
Mscrm.NavigateToPageActionProvider = function(parentControl) { this._parentControl = parentControl };
Mscrm.NavigateToPageActionProvider.prototype = {
    _parentControl: null,
    createAction: function(navigationNode) {
        if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
        return new Mscrm.NavigateToPageAction(navigationNode, this._parentControl)
    }
};
Mscrm.NavigateToPageAction = function(node, parentControl) {
    if (IsNull(node)) throw Error.argumentNull("node");
    if (IsNull(parentControl)) throw Error.argumentNull("parentControl");
    this._parentControl = parentControl;
    this._node = node
};
Mscrm.NavigateToPageAction.prototype = {
    _node: null,
    _parentControl: null,
    execute: function() {
        if (IsNull(this._node.Action)) throw Error.argumentNull("node.Action");
        if (!("PageUrl" in this._node.Action)) throw Error.argument("node.Action.PageUrl");
        if (this._node.Action["PageUrl"] === "_psuedo_navigate_waffle") {
            eval("ToggleWaffle();");
            return
        }
        var $v_0 = Mscrm.CrmUri.create(this._node.Action["PageUrl"]);
        if (IsNull($v_0.get_query()["sitemappath"])) {
            var $v_4 = this._parentControl.getPath(this._node);
            if (!isNullOrEmptyString($v_4)) $v_0.get_query()["sitemappath"] = $v_4
        }
        var $v_1 = Mscrm.CrmUri.create($v_0.toString().toLowerCase());
        if ($v_1.get_host() === "go.microsoft.com") {
            $v_1.get_query()["linkid"] === "296269" &&
                $v_0.setQueryParameter("clcid",
                    "0x" + Number.parseInvariant(window.USER_HELP_LCID.toString()).toString(16));
            safeWindowOpen($v_0, null, null);
            return
        }
        if (this._node.Id === "nav_interactive_service_hub") {
            safeWindowOpen($v_0, null, null);
            return
        }
        if (this._node.Id === "nav_marketplace") {
            var $v_5 = window.DynamicsMarketplaceBehavior;
            if ($v_5)
                if ($v_5 === 1) {
                    safeWindowOpen(Mscrm.CrmUri.create("https://go.microsoft.com/fwlink/p/?LinkId=799645"), null, null);
                    return
                } else if ($v_5 === 2) {
                    var $v_6 = new Xrm.DialogOptions;
                    $v_6.width = window.AzureMarketplaceDialogWidth;
                    $v_6.height = window.AzureMarketplaceDialogHeight;
                    Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/Solution/marketplace.aspx").toString(),
                        $v_6,
                        null,
                        null,
                        null);
                    return
                }
        }
        var $v_2 = {};
        $v_2["uri"] = $v_0.toString();
        this._parentControl.raiseNavigateRequest($v_2);
        var $v_3 = (new Date).getTime().toString();
        Mscrm.Utilities.addControlMarker(this._node.Id, Mscrm.NavBar.$1X, Mscrm.NavBar.$1Y, $v_3);
        Mscrm.Utilities.addControlMarker(this._parentControl.get_id(), Mscrm.NavBar.$1X, Mscrm.NavBar.$1Y, $v_3)
    }
};
Mscrm.ActionButtonContainerBuilder = function(className) { this.$3P_0 = className };
Mscrm.ActionButtonContainerBuilder.prototype = {
    $3P_0: null,
    build: function() {
        var $v_0 = $P_CRM(String.format('<li class="{0}" unselectable="on">',
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3P_0)));
        return $v_0
    }
};
Mscrm.ActionButtonSmallBuilder = function(id, caption, image, flipImage, colorAccent, clickEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString(image)) throw Error.argumentNull("image");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$I_0 = image;
    this.$1m_0 = flipImage;
    this.$D_0 = colorAccent;
    this.$2_0 = clickEventHandler
};
Mscrm.ActionButtonSmallBuilder.prototype = {
    $1_0: null,
    $3_0: null,
    $I_0: null,
    $D_0: null,
    $1m_0: false,
    $2_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper.fromHtmlBindClick(String
                .format('<a class="navActionButtonContainer navActionButton navActionButtonSmall {5}" id="{0}" role="button" title="{1}" href="javascript:;" unselectable="on" {2}><span class="navActionButtonLabel" unselectable="on">{6}</span><span class="navActionButtonIconContainer" unselectable="on"><img src="{3}" {4} unselectable="on"></span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), isNullOrEmptyString(this.$D_0) ? "" : String.format('style="background-color: {0}"', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_0)), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$I_0), Mscrm.BuilderHelper.getFlipImageHtmlCode(this.$1m_0, false), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()), CrmEncodeDecode.CrmHtmlEncode(this.$3_0)),
                this.$2_0),
            $v_1 = new Mscrm.ActionButtonContainerBuilder("nav-group"),
            $v_2 = $v_1.build();
        $v_2.append($v_0);
        $v_2.append($P_CRM(String.format('<span class="navActionButtonSmallShadow {0}"></span>',
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()))));
        return $v_2
    }
};
Mscrm.ActionButtonBuilder = function(id,
    caption,
    image,
    colorAccent,
    navigationUrl,
    clickEventHandler,
    isContextMenuEnabled,
    toolTip,
    stripeImage,
    stripeClass) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString(image)) throw Error.argumentNull("image");
    if (IsNull(navigationUrl)) throw Error.argumentNull("navigationUrl");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$I_0 = image;
    this.$2_0 = clickEventHandler;
    this.$u_0 = toolTip;
    this.$18_0 = navigationUrl;
    this.$3a_0 = isContextMenuEnabled;
    this.$1B_0 = stripeImage;
    this.$o_0 = stripeClass;
    this.$D_0 = colorAccent
};
Mscrm.ActionButtonBuilder.prototype = {
    $1_0: null,
    $3_0: null,
    $I_0: null,
    $D_0: null,
    $o_0: null,
    $1B_0: null,
    $18_0: null,
    $2_0: null,
    $u_0: null,
    $3a_0: false,
    build: function() {
        var $v_0 = this.$1B_0;
        if (isNullOrEmptyString(this.$o_0)) $v_0 = this.$I_0;
        var $v_1 = String
                .format('<a class="nav-rowBody {4}" id="{0}" role="button" title="{1}" href="{6}" unselectable="on" iscontextmenuenabled="{7}"><span class="nav-iconContainer" unselectable="on"><span class="nav-img-32by32 nav-img-cont-float actionListImg" unselectable="on" style="background-color: rgb(48, 82, 166);"><img alt="" src="{2}" class="{8}" {3} unselectable="on"></span></span><span class="nav-rowLabel" unselectable="on">{5}</span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$u_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), isNullOrEmptyString(this.$D_0) ? "" : String.format('style="background-color: {0}"', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_0)), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()), CrmEncodeDecode.CrmHtmlEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$18_0.toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3a_0.toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$o_0)),
            $v_2 = Mscrm.BuilderHelper.fromHtmlBindClick($v_1, this.$2_0),
            $v_3 = new Mscrm.ActionButtonContainerBuilder("nav-subgroup"),
            $v_4 = $v_3.build();
        $v_4.append($v_2);
        return $v_4
    }
};
Mscrm.ActionsBuilderProvider = function(createNodeClickedHandler) {
    if (IsNull(createNodeClickedHandler)) throw Error.argumentNull("createNodeClickedHandler");
    this.$7_0 = createNodeClickedHandler
};
Mscrm.ActionsBuilderProvider.prototype = {
    $7_0: null,
    $1C_0: null,
    create: function(navigationNodes) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < navigationNodes.length; $v_1++) {
            var $v_2 = navigationNodes[$v_1];
            this.$1C_0 = Mscrm.NavigationUrlBuilderFactory.getNavigationUrlBuilder($v_2);
            if (!isNullOrEmptyString($v_2.Caption))
                $v_0[$v_1] = new Mscrm.ActionButtonBuilder($v_2.Id,
                    $v_2.Caption,
                    $v_2.ImageUrl,
                    $v_2.ColorAccent,
                    this.$1C_0.getNavigationUrl($v_2),
                    Mscrm.BuilderHelper.createEventHandler(this.$7_0, $v_2),
                    $v_2.Action["ActionType"].toString() === "ScriptAction" ||
                    $v_2.Action["ActionType"].toString() === "GlobalQuickCreateAction"
                    ? false
                    : true,
                    $v_2.ToolTip,
                    $v_2.StripeUrl,
                    $v_2.StripeClass)
        }
        return $v_0
    }
};
Mscrm.BuilderHelper = function() {};
Mscrm.BuilderHelper.fromHtmlBindClick = function($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    !IsNull($p1) && $v_0.bind("click", $p1);
    return $v_0
};
Mscrm.BuilderHelper.attachEventhandlerToObject = function($p0, $p1) {
    if (IsNull($p0)) throw Error.argumentNull("Object must be specified");
    if (IsNull($p1)) throw Error.argumentNull("Event handler must be specified");
    $p0.bind("click", $p1)
};
Mscrm.BuilderHelper.fromHtmlBindClickHover = function($p0, $p1, $p2, $p3) {
    var $v_0 = 0, $v_1 = $P_CRM($p0);
    $v_1.data("activateOnHover", $p3);
    $v_1.click(function($p1_0) {
        if ($v_0) {
            window.clearTimeout($v_0);
            $v_0 = 0
        }
    });
    !IsNull($p1) && $v_1.click($p1);
    if (!IsNull($p2)) {
        $v_1.mouseenter(function($p1_0) {
            $P_CRM(".navTabButtonLeft").removeClass("hoveredText");
            var $v_2 = $p1_0.currentTarget.getAttribute("id"),
                $v_3 = IsNull($v_2) ? false : $P_CRM("#" + $v_2).is(":hover");
            $v_3 &&
                $p1_0.currentTarget.getAttribute("class") === "navTabButton navTabButtonRight" &&
                $P_CRM("#" + $v_2 + "-main").addClass("hoveredText");
            $v_0 = window.setTimeout(function() { $p2($p1_0) }, 250)
        });
        $v_1.mouseleave(function($p1_0) {
            if ($v_0) {
                window.clearTimeout($v_0);
                $v_0 = 0
            }
            $P_CRM(".navTabButtonLeft").removeClass("hoveredText")
        })
    }
    return $v_1
};
Mscrm.BuilderHelper.createEventHandler = function($p0, $p1) {
    if (IsNull($p1)) throw Error.argumentNull("navigationNode");
    return function($p1_0) {
        !IsNull($p0) && $p0($p1);
        $p1_0.preventDefault();
        $p1_0.stopPropagation()
    }
};
Mscrm.BuilderHelper.findNavigationNode = function($p0, $p1) {
    if (IsNull($p0)) return null;
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) if ($p0[$v_0].Id === $p1) return $p0[$v_0];
    return null
};
Mscrm.BuilderHelper.fetchCaptionForNodeId = function($p0, $p1) {
    var $v_0 = Mscrm.BuilderHelper.findNavigationNode($p0, $p1);
    if (IsNull($v_0)) throw Error.argumentNull("navigationNode");
    return $v_0.Caption
};
Mscrm.BuilderHelper.getResourceStringFromLOCID = function($p0) { return window[$p0] };
Mscrm.BuilderHelper.selectImageBasedOnContrastMode = function($p0, $p1) {
    return window.HighContrastEnabled ? $p1 : $p0
};
Mscrm.BuilderHelper
    .contrastModeClassName = function() { return window.HighContrastEnabled ? "highContrast" : "normal" };
Mscrm.BuilderHelper.isImageFlippedForNavigationNodeType = function($p0) {
    var $v_0 = false;
    switch (Mscrm.NavBar.getEntityTypeCode($p0)) {
    case 4703:
        $v_0 = true;
        break
    }
    return $v_0
};
Mscrm.BuilderHelper.getFlipImageHtmlCode = function($p0, $p1) {
    var $v_0 = "";
    if ($p0 && window.LOCID_UI_DIR.toUpperCase() === "RTL"
    ) if (!$p1 || $p1 && window.USER_LANGUAGE_CODE !== 1037) $v_0 = Mscrm.BuilderHelper.$65();
    return $v_0
};
Mscrm.BuilderHelper.$65 = function() { return String.format('style="{0}"', Mscrm.Utilities.flipImage("H")) };
Mscrm.BuilderHelper.returnTitleAndDescription = function($p0, $p1) {
    return $p0 + String.fromCharCode(13) + String.fromCharCode(13) + $p1
};
Mscrm.ContainerBuilder = function(id) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    this.$1_0 = id
};
Mscrm.ContainerBuilder.prototype = {
    $1_0: null,
    build: function() {
        var $v_0 = $P_CRM(String.format(this.get_containerHtml(), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0)));
        return $v_0
    }
};
Mscrm.ActionGroupBuilder = function(id, tabButtonBuilders) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (IsNull(tabButtonBuilders)) throw Error.argumentNull("tabButtonBuilders");
    this.$1_0 = id;
    this.$30_0 = tabButtonBuilders
};
Mscrm.ActionGroupBuilder.prototype = {
    $30_0: null,
    $1_0: null,
    build: function() {
        for (var $v_0 = $P_CRM(String.format('<div id="{0}" />', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0))),
            $v_1 = $P_CRM('<ul class="nav-tabBody"/>'),
            $v_2 = 0;
            $v_2 < this.$30_0.length;
            $v_2++) $v_1.append(this.$30_0[$v_2].build());
        $v_0.append($v_1);
        return $v_0
    }
};
Mscrm.ActionListGroupBuilder = function(groupCaption, groupId, groupSectionBuilders, toolTip) {
    if (IsNull(groupId)) throw Error.argumentNull("groupId");
    if (IsNull(groupSectionBuilders)) throw Error.argumentNull("groupSectionBuilders");
    if (!groupSectionBuilders.length) throw Error.argumentNull("groupSectionBuilders");
    this.$l_0 = groupCaption;
    this.$1A_0 = groupId;
    this.$N_0 = groupSectionBuilders;
    this.$u_0 = toolTip
};
Mscrm.ActionListGroupBuilder.prototype = {
    $N_0: null,
    $l_0: null,
    $1A_0: null,
    $u_0: null,
    build: function() {
        var $v_0;
        $v_0 = isNullOrEmptyString(this.$u_0) ? this.$l_0 : this.$u_0;
        for (var $v_1 = $P_CRM(String
                     .format('<li class="nav-group" unselectable="on"><span class="nav-groupContainer" unselectable="on" aria-label="{2}" ><label for="{1}" ><span tabindex="0" class="nav-groupTitle" title="{0}" id="{1}" unselectable="on">{2}</span><span style="height:1px;width:1px;position:absolute;overflow:hidden;top:-10px;">{0}</span></label><span class="nav-groupBody" unselectable="on"><span class="nav-layout" unselectable="on"/></span></span></li>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1A_0), CrmEncodeDecode.CrmHtmlEncode(this.$l_0))),
            $v_2 = null,
            $v_3 = 0,
            $v_4 = 0;
            $v_3 < this.$N_0.length;
            $v_3++) {
            if (!$v_4)
                if (IsNull($v_2)) {
                    $v_2 = $P_CRM(".nav-layout", $v_1).append('<span class="nav-section">');
                    $v_2 = $P_CRM(".nav-section", $v_2)
                } else {
                    $v_2 = $v_2.parent().append('<span class="nav-section">');
                    $v_2 = $P_CRM(".nav-section:last", $v_2)
                }
            $v_4 = ($v_4 + 1) % 6;
            !IsNull(this.$N_0[$v_3]) && $v_2.append(this.$N_0[$v_3].build())
        }
        return $v_1
    }
};
Mscrm.ActionButtonColoredSplitBuilder = function(id,
    leftCaption,
    leftImage,
    flipImage,
    rightImage,
    colorAccent,
    leftClickEventHandler,
    rightClickEventHandler,
    toolTip) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(leftCaption)) throw Error.argumentNull("leftCaption");
    if (isNullOrEmptyString(leftImage)) throw Error.argumentNull("leftImage");
    if (isNullOrEmptyString(rightImage)) throw Error.argumentNull("rightImage");
    this.$1_0 = id;
    this.$1V_0 = leftCaption;
    this.$3c_0 = leftImage;
    this.$3n_0 = rightImage;
    this.$u_0 = toolTip;
    this.$D_0 = colorAccent;
    this.$1m_0 = flipImage;
    this.$1s_0 = leftClickEventHandler;
    this.$1N_0 = rightClickEventHandler
};
Mscrm.ActionButtonColoredSplitBuilder.prototype = {
    $1_0: null,
    $1V_0: null,
    $3c_0: null,
    $3n_0: null,
    $D_0: null,
    $1m_0: false,
    $1s_0: null,
    $1N_0: null,
    $u_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper.fromHtmlBindClick(String
                .format('<a class="navActionButton navActionButtonLeft" {4} id="{0}" role="button" title="{1}" href="javascript:;" unselectable="on" ><span class="navActionButtonIconContainer" unselectable="on"><span class="navActionButtonIcon" unselectable="on"><img src="{2}" {3} unselectable="on"></span></span><span class="navActionButtonLabel" unselectable="on">{5}</span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$u_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3c_0), Mscrm.BuilderHelper.getFlipImageHtmlCode(this.$1m_0, false), isNullOrEmptyString(this.$D_0) ? "" : String.format('style="background-color: {0}"', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_0)), CrmEncodeDecode.CrmHtmlEncode(this.$1V_0)),
                this.$1s_0),
            $v_1 = Mscrm.BuilderHelper.fromHtmlBindClick(String
                .format('<a class="navActionButton navActionButtonRight" {4} id="{0}" role="button" title="{1}" href="javascript:;" unselectable="on" ><span class="navActionButtonSplitterContainer" unselectable="on"><img src="{2}" alt="|" class="navActionButtonSplitter"></span><span class="navActionButtonDownImageContainer" unselectable="on"><img src="{3}" unselectable="on" class="navActionButtonDropDown"></span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("{0}-drop", this.$1_0)), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$u_0), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/ActionButtonSplit.png", "/_imgs/NavBar/ActionButtonSplit.png")), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3n_0), isNullOrEmptyString(this.$D_0) ? "" : String.format('style="background-color: {0}"', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_0))),
                this.$1N_0),
            $v_2 = $P_CRM(String.format('<span class="navActionButtonContainer {0}"></span>',
                CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName())));
        $v_2.append($v_0);
        $v_2.append($v_1);
        $v_2.append($P_CRM(String.format('<span class="navActionButtonContainerShadow {0}"></span>',
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()))));
        var $v_3 = $P_CRM(String.format('<span class="{0}" unselectable="on"></span>',
            CrmEncodeDecode.CrmHtmlAttributeEncode("nav-group")));
        $v_3.append($v_2);
        return $v_3
    }
};
Mscrm.AppSwitcherButtonBuilder = function($p0, $p1, $p2, $p3) {
    this.$1_0 = $p0;
    this.$3_0 = $p1;
    this.$2_0 = $p2;
    this.$0_0 = $p3
};
Mscrm.AppSwitcherButtonBuilder.prototype = {
    $2_0: null,
    $0_0: null,
    $1_0: null,
    $3_0: null,
    build: function() {
        var $v_0 = "AppSwitcherButtonImage",
            $v_1 = Mscrm.BuilderHelper
                .fromHtmlBindClickHover(String
                    .format("<span class='O365Waffle' id='{0}' title='{1}'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class='navTabButtonLink' href='javascript:;'  unselectable='on' title='{1}'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class='navTabButtonImageContainer' unselectable='on'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img id='navTabAppSwitcherImage_{0}' class='{2}' alt='{1}' unselectable='on' src='{3}'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span id='{0}_divider' class='navTabButton navTabButtonModuleSwitcher'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class='navTabButtonImageContainer' unselectable='on'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class='navTabDivider' alt='|' unselectable='on' src='{4}'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>", "Tab" + CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), $v_0, CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/NavBarAppSwitcher_HC.png")), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/NavBarDivider.png"))),
                    this.$2_0,
                    this.$0_0,
                    false);
        return $v_1
    }
};
Mscrm.BackButtonBuilder = function(node, clickEventHandler) {
    if (IsNull(node)) throw Error.argumentNull("node");
    this.$B_0 = node;
    this.$2_0 = clickEventHandler
};
Mscrm.BackButtonBuilder.prototype = {
    $B_0: null,
    $2_0: null,
    build: function() {
        var $v_0 = this.$4a_0(),
            $v_1 = Mscrm.BuilderHelper.fromHtmlBindClick(String
                .format($v_0
                    ? '<span class="navTabButton navTabBackButton" id="{0}" title="{1}"><a onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span class="navTabButtonImageContainer" unselectable="on"><img unselectable="on" src="{2}"/></span></a></span>'
                    : '<span class="navTabButton navTabBackButton navTabBackButtonDisabled" id="{0}" title="{1}"><span class="navTabDisabledButton"><span class="navTabButtonImageContainer" unselectable="on"><img unselectable="on" src="{2}"/></span></span></span>',
                    CrmEncodeDecode.CrmHtmlAttributeEncode("TabBack"),
                    $v_0
                    ? CrmEncodeDecode.CrmHtmlAttributeEncode(this.$B_0.Caption)
                    : CrmEncodeDecode.CrmHtmlAttributeEncode(""),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$5N_0())),
                this.$2_0);
        !$v_0 && $v_1.addClass("navTabDisableHover");
        return $v_1
    },
    $5N_0: function() {
        if (this.$4a_0()) return "/_imgs/NavBar/Back_Active.png";
        else return "/_imgs/NavBar/Back_Inactive.png"
    },
    $4a_0: function() {
        var $v_0 = false, $v_1 = $find("crmHistoryManager");
        if (IsNull($v_1)) return false;
        var $v_2 = $v_1;
        if ($v_2.isOutlookPerceivedFirstVisitingPage()) return false;
        var $v_3 = $v_2.get_uiButtonsState();
        if (IsNull($v_3)) return false;
        if ("backButton" in $v_3) $v_0 = $v_3["backButton"];
        return $v_0
    }
};
Mscrm.ActionButtonNarrowBuilder = function(id, caption, image, colorAccent, clickEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString(image)) throw Error.argumentNull("image");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$I_0 = image;
    this.$2_0 = clickEventHandler;
    this.$D_0 = colorAccent
};
Mscrm.ActionButtonNarrowBuilder.prototype = {
    $1_0: null,
    $3_0: null,
    $I_0: null,
    $D_0: null,
    $2_0: null,
    build: function() {
        var $v_0 = String
                .format('<a class="navActionButtonContainer navActionButton navActionButtonNarrow {4}" id="{0}" role="button" title="{1}" href="javascript:;" unselectable="on" {3}><span class="navActionButtonIconContainer" unselectable="on"><span class="navActionButtonIcon" unselectable="on"><img src="{2}" unselectable="on"></span></span><span class="navActionButtonLabel" unselectable="on">{5}</span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$I_0), isNullOrEmptyString(this.$D_0) ? "" : String.format('style="background-color: {0}"', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_0)), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()), CrmEncodeDecode.CrmHtmlEncode(this.$3_0)),
            $v_1 = Mscrm.BuilderHelper.fromHtmlBindClick($v_0, this.$2_0),
            $v_2 = new Mscrm.ActionButtonContainerBuilder("nav-group"),
            $v_3 = $v_2.build();
        $v_3.append($v_1);
        $v_3.append($P_CRM(String.format('<span class="navActionButtonNarrowShadow {0}"></span>',
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()))));
        return $v_3
    }
};
Mscrm.TabQuickCreateSpacerBuilder = function(hoverEventHandler) { this.$0_0 = hoverEventHandler };
Mscrm.TabQuickCreateSpacerBuilder.prototype = {
    $0_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper
            .fromHtmlBindClickHover(String.format('<span id="{0}" class="{1}"></span>',
                    CrmEncodeDecode.CrmHtmlAttributeEncode("navTabQuickCreateSpacer"),
                    CrmEncodeDecode.CrmHtmlAttributeEncode("navTabQuickCreateSpacer")),
                null,
                this.$0_0,
                false);
        return $v_0
    }
};
Mscrm.EmptyActionBuilder = function() {};
Mscrm.EmptyActionBuilder.get_title = function() { return Mscrm.EmptyActionBuilder.$2B };
Mscrm.EmptyActionBuilder.set_title = function(value) {
    Mscrm.EmptyActionBuilder.$2B = value;
    return value
};
Mscrm.EmptyActionBuilder.prototype = {
    build: function() {
        var $v_0 = $P_CRM(String
                .format('<div class="navEmptyActionButtonSmall" id="NavEmpty" unselectable="on" title="{0}"><span unselectable="on"><img unselectable="on" src="{1}"/></span><span class="navActionButtonLabel" unselectable="on">{2}</span></div>', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.EmptyActionBuilder.$2B), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarWhiteNotification.png", "/_imgs/NavBar/HighContrast/NavBarWhiteNotification.png")), CrmEncodeDecode.CrmHtmlEncode(Mscrm.EmptyActionBuilder.$2B))),
            $v_1 = new Mscrm.ActionButtonContainerBuilder("nav-group"),
            $v_2 = $v_1.build();
        $v_2.append($v_0);
        return $v_2
    }
};
Mscrm.TabLogoImageBuilder = function(id, caption, hoverEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabLogoImageBuilder.prototype = {
    $1_0: null,
    $3_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper
            .fromHtmlBindClickHover(String
                .format('<span id="{0}{1}" class="navTabButton navTabButtonModuleSwitcher navTabDisableHover" title="{2}" data-id="{3}"><span class="navCrmLogo"><span class="navTabButtonImageContainer navTabButtonLeftImageContainer" unselectable="on"></span><span id="{4}" class="navTabButtonLink navTabLogoText">{5}</span></span></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode("home"), CrmEncodeDecode.CrmHtmlAttributeEncode("navTabLogoTextId"), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_BRANDNAME)),
                null,
                this.$0_0,
                false);
        return $v_0
    }
};
Mscrm.TabLogoTextButtonBuilder = function(caption, clickEventHandler, hoverEventHandler) {
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabLogoTextButtonBuilder.prototype = {
    $2_0: null,
    $0_0: null,
    $3_0: null,
    build: function() {
        var $v_0 = null,
            $v_1 = Mscrm.BuilderHelper
                .returnTitleAndDescription(this.$3_0, Mscrm.BuilderHelper.getResourceStringFromLOCID("BRAND_CRM_DESC"));
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span id="{0}{1}" class="navTabButton" title="{2}"><a title="{2}" class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span id="{1}" class="navTabLogoText">{3}</span></a></span><span id="{0}{1}_divider" class="navTabButton navTabButtonModuleSwitcher" title="{2}_divider"><span class="navTabButtonImageContainer" unselectable="on"><img class="navTabDivider" alt="|" unselectable="on" src="{4}"/></span></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode("navTabLogoTextId"), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_BRANDNAME), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/NavBarDivider.png"))),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.TabFillerBuilder = function(hoverEventHandler) { this.$0_0 = hoverEventHandler };
Mscrm.TabFillerBuilder.prototype = {
    $0_0: null,
    build: function() {
        var $v_0 = '<div class="navTabFiller"></div>';
        if (window.IS_PREVIEW_ORG)
            $v_0 = '<div class="navTabFiller previewWatermark" title="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper
                    .getResourceStringFromLOCID("LOCID_TOOLTIP_PREVIEW_NAVBAR")) +
                '">' +
                CrmEncodeDecode.CrmHtmlEncode(Mscrm.BuilderHelper
                    .getResourceStringFromLOCID("LOCID_CAPTION_PREVIEW_NAVBAR")) +
                "</div>";
        else if (window.IS_SUPPORT_ORG)
            $v_0 = '<div class="navTabFiller sandboxWatermark" title="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper
                    .getResourceStringFromLOCID("LOCID_TOOLTIP_SUPPORT_NAVBAR")) +
                '">' +
                CrmEncodeDecode.CrmHtmlEncode(Mscrm.BuilderHelper
                    .getResourceStringFromLOCID("LOCID_CAPTION_SUPPORT_NAVBAR")) +
                "</div>";
        else if (window.IS_SANDBOX_ORG)
            $v_0 = '<div class="navTabFiller sandboxWatermark" title="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper
                    .getResourceStringFromLOCID("LOCID_TOOLTIP_SANDBOX_NAVBAR")) +
                '">' +
                CrmEncodeDecode.CrmHtmlEncode(Mscrm.BuilderHelper
                    .getResourceStringFromLOCID("LOCID_CAPTION_SANDBOX_NAVBAR")) +
                "</div>";
        var $v_1 = Mscrm.BuilderHelper.fromHtmlBindClickHover($v_0, null, this.$0_0, false);
        return $v_1
    }
};
Mscrm.TabButtonHelpBuilder = function(buttonId, buttonTitle, imagePath, clickEventHandler, hoverEventHandler) {
    this.$1j_0 = buttonId;
    this.$1k_0 = buttonTitle;
    this.$1o_0 = imagePath;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabButtonHelpBuilder.prototype = {
    $1j_0: null,
    $1o_0: null,
    $1k_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = null, $v_1 = "navTabHelpImage";
        if (window.IS_PREVIEW_ORG) $v_1 += " navTabButtonImagePreview";
        else if (window.IS_SANDBOX_ORG) $v_1 += " navTabButtonImageSandbox";
        var $v_2 = Mscrm.BuilderHelper
            .returnTitleAndDescription(this.$1k_0,
                Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_HELP_NAVBAR_DESC"));
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span class="navTabButton navTabButtonHelp" id="{0}" title="{1}" data-id="{7}"><a class="navTabButtonLink" title="{1}" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span class="navTabButtonImageContainer" unselectable="on"><span class="{2}" id="{3}" unselectable="on"></span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1j_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode("navTabButtonHelpImageId"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1o_0), Mscrm.BuilderHelper.getFlipImageHtmlCode(true, true), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/HighContrast/NavBarDivider.png")), CrmEncodeDecode.CrmHtmlAttributeEncode("help")),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.TabButtonUserInfoBuilder = function(userInfoNode,
    userName,
    userId,
    organizationFriendlyName,
    organizationUniqueName,
    userProfileImageUrl,
    clickEventHandler,
    hoverEventHandler) {
    if (IsNull(userInfoNode)) throw Error.argumentNull("userInfoNode");
    if (isNullOrEmptyString(userName)) throw Error.argumentNull("userName");
    if (isNullOrEmptyString(organizationFriendlyName)) throw Error.argumentNull("organizationFriendlyName");
    if (isNullOrEmptyString(organizationUniqueName)) {
        organizationUniqueName = organizationFriendlyName;
        if (isNullOrEmptyString(organizationUniqueName)) throw Error.argumentNull("organizationUniqueName")
    }
    if (isNullOrEmptyString(userProfileImageUrl)) throw Error.argumentNull("userProfileImageUrl");
    if (IsNull(clickEventHandler)) throw Error.argumentNull("clickEventHandler");
    if (IsNull(hoverEventHandler)) throw Error.argumentNull("hoverEventHandler");
    this.$3Y_0 = userInfoNode.Id;
    this.$34_0 = userName;
    this.$Z_0 = organizationFriendlyName;
    this.$a_0 = organizationUniqueName;
    if (userProfileImageUrl
        .indexOf("EmptyUserImage.png") !==
        -1) this.$37_0 = Mscrm.CrmUri.create(userProfileImageUrl).toString();
    else this.$37_0 = Mscrm.CrmUri.createForOrganization(userProfileImageUrl, this.$a_0).toString();
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabButtonUserInfoBuilder.prototype = {
    $3Y_0: null,
    $34_0: null,
    $Z_0: null,
    $a_0: null,
    $37_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper
            .fromHtmlBindClickHover(String
                .format('<span id="{0}" class="navTabButton navTabButtonUserInfo" title="{2} {4}">\r\n\t\t\t\t<a id="navTabButtonUserInfoLinkId" class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="#" unselectable="on">\r\n\t\t\t\t\t<span id="navTabButtonChangeProfileImageLink" class="navTabButtonImageContainer" unselectable="on">\r\n\t\t\t\t\t\t<img alt="{2} {4}" unselectable="on" src="{6}" class="navTabButtonUserInfoProfileImage"/>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</span>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3Y_0), CrmEncodeDecode.CrmHtmlAttributeEncode("navBarUserInfoTextId"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$34_0), CrmEncodeDecode.CrmHtmlEncode(this.$34_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$Z_0), CrmEncodeDecode.CrmHtmlEncode(this.$Z_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$37_0)),
                this.$2_0,
                this.$0_0,
                false);
        return $v_0
    }
};
Mscrm.TabButtonSettingsBuilder = function(settingsNode, imagePath, clickEventHandler, hoverEventHandler) {
    if (IsNull(settingsNode)) throw Error.argumentNull("settingsNode");
    if (isNullOrEmptyString(imagePath)) throw Error.argumentNull("imagePath");
    if (IsNull(clickEventHandler)) throw Error.argumentNull("clickEventHandler");
    if (IsNull(hoverEventHandler)) throw Error.argumentNull("hoverEventHandler");
    this.$1j_0 = settingsNode.Id;
    this.$1k_0 = settingsNode.Caption;
    this.$1o_0 = imagePath;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabButtonSettingsBuilder.prototype = {
    $1j_0: null,
    $1k_0: null,
    $1o_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = null, $v_1 = "";
        if (window.IS_PREVIEW_ORG) $v_1 = "navTabButtonImagePreview";
        else if (window.IS_SANDBOX_ORG) $v_1 = "navTabButtonImageSandbox";
        var $v_2 = Mscrm.BuilderHelper
            .returnTitleAndDescription(this.$1k_0,
                Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGS_NAVBAR_DESC"));
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span id="{0}_divider" class="navTabButton navTabButtonModuleSwitcher"><span class="navTabButtonImageContainer" unselectable="on"><img class="navTabDivider" alt="|" unselectable="on" src="{5}"/></span></span><span id="{0}" title="{1}" class="navTabButton navTabButtonSettings navBarSpacing"><a  tabindex="0" class="navTabButtonLink" title="{1}" onkeypress="return true;" onclick="return false;" href="#" unselectable="on"><span class="navTabButtonImageContainer" unselectable="on"><span id="{2}" class="{3}" unselectable="on"></span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1j_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode("navBarSettingsId"), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1o_0), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/HighContrast/NavBarDivider.png"))),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.GlobalQuickCreateButtonBuilder = function(id, caption, clickEventHandler, hoverEventHandler) {
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.GlobalQuickCreateButtonBuilder.prototype = {
    $2_0: null,
    $0_0: null,
    $1_0: null,
    $3_0: null,
    build: function() {
        var $v_0 = null, $v_1 = "globalCreateButtonImage";
        if (window.IS_PREVIEW_ORG) $v_1 += " navTabButtonImagePreview";
        else if (window.IS_SANDBOX_ORG) $v_1 += " navTabButtonImageSandbox";
        var $v_2 = Mscrm.BuilderHelper
            .returnTitleAndDescription(this.$3_0,
                Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_QUICK_CREATE_DESC"));
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span class="navTabButton navTabQuickCreateMargin" id="{0}" title="{1}"><a title="{1}" tabindex="0" class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="#" unselectable="on"><span class="navTabButtonImageContainer" unselectable="on"><span id="navTabGlobalCreateImage" class="{2}" unselectable="on"></span></span><span id="{5}" class="navTabButtonLabel" unselectable="on"><span class="navTabButtonText">{4}</span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), $v_1, CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/GlobalQuickCreate_HC.png"))),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.ModuleActionButtonBuilder = function(id, caption, image, clickEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString(image)) image = "/_imgs/NavBar/Invisible.gif";
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$I_0 = image;
    this.$2_0 = clickEventHandler
};
Mscrm.ModuleActionButtonBuilder.prototype = {
    $1_0: null,
    $3_0: null,
    $I_0: null,
    $2_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper.fromHtmlBindClick(String
                .format('<a class="navActionButtonContainer navActionButton navModuleButton {4}" id="{0}" role="button" title="{1}" href="javascript:;" unselectable="on" ><span class="navActionButtonIconContainer" unselectable="on"><span class="navActionButtonIcon" unselectable="on"><img src="{2}" unselectable="on" {3}></span></span><span class="navActionButtonLabel" unselectable="on">{5}</span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$I_0), this.$1_0 === "HLP" ? Mscrm.BuilderHelper.getFlipImageHtmlCode(true, true) : "", CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()), CrmEncodeDecode.CrmHtmlEncode(this.$3_0)),
                this.$2_0),
            $v_1 = new Mscrm.ActionButtonContainerBuilder("nav-group"),
            $v_2 = $v_1.build();
        $v_2.append($v_0);
        $v_2.append($P_CRM(String.format('<span class="navModuleButtonShadow {0}"></span>',
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()))));
        return $v_2
    }
};
Mscrm.ModuleActionsBuilderProvider = function(createNodeClickedHandler) {
    if (IsNull(createNodeClickedHandler)) throw Error.argumentNull("createNodeClickedHandler");
    this.$7_0 = createNodeClickedHandler
};
Mscrm.ModuleActionsBuilderProvider.prototype = {
    $7_0: null,
    $3k_0: null,
    create: function(navigationNodes) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < navigationNodes.length; $v_1++) {
            var $v_2 = navigationNodes[$v_1];
            this.$3k_0 = Mscrm.NavigationUrlBuilderFactory.getNavigationUrlBuilder($v_2);
            $v_0[$v_1] = new Mscrm
                .ModuleActionButtonBuilderRefreshed($v_2.Id,
                    $v_2.Caption,
                    $v_2.ImageUrl,
                    $v_2.ColorAccent,
                    this.$3k_0.getNavigationUrl($v_2),
                    Mscrm.BuilderHelper.createEventHandler(this.$7_0, $v_2),
                    $v_2.StripeUrl,
                    $v_2.StripeClass)
        }
        return $v_0
    }
};
Mscrm.TabLogoButtonBuilder = function(id, image, clickEventHandler, hoverEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(image)) throw Error.argumentNull("image");
    this.$1_0 = id;
    this.$I_0 = image;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabLogoButtonBuilder.prototype = {
    $2_0: null,
    $0_0: null,
    $1_0: null,
    $I_0: null,
    build: function() {
        var $v_0 = null, $v_1 = "";
        if (window.IS_PREVIEW_ORG) $v_1 = "navTabButtonImagePreview";
        else if (window.IS_SANDBOX_ORG) $v_1 = "navTabButtonImageSandbox";
        var $v_2 = Mscrm.BuilderHelper.returnTitleAndDescription(window.CrmLogoTitle, window.CrmLogoDesc);
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span id="{0}{1}-logo" title="{5}" class="navTabButton navTabButtonModuleSwitcher logoBgColor" ><a tabindex="0" class="navTabButtonLink" title="{5}" onkeypress="return true;" onclick="return false;" href="#" unselectable="on"><span class="navCrmLogo"><span class="navTabButtonImageContainer navTabButtonLeftImageContainer navBarCRMLogoSpacer" unselectable="on"><img id="{2}" class="{3}" alt="{5}" unselectable="on" src="{4}"/></span></span></a></span><span id="{0}{1}_divider" class="navTabButton navTabButtonModuleSwitcher"><span class="navTabButtonImageContainer" unselectable="on"><img class="navTabDivider" alt="|" unselectable="on" src="{6}"/></span></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode("navTabLogoImage"), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$I_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/NavBarDivider.png"))),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.GroupedActionsBuilderProvider = function(actionBuilderProvider) {
    if (IsNull(actionBuilderProvider)) throw Error.argumentNull("actionBuilderProvider");
    this.$15_0 = actionBuilderProvider
};
Mscrm.GroupedActionsBuilderProvider.prototype = {
    $15_0: null,
    create: function(navigationNodes) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < navigationNodes.length; $v_1++) {
            var $v_2 = navigationNodes[$v_1];
            if (IsNull($v_2.Children) || !$v_2.Children.length) continue;
            var $v_3 = this.$15_0.create($v_2.Children);
            $v_0.push(new Mscrm.ActionListGroupBuilder($v_2.Caption, $v_2.Id, $v_3, $v_2.ToolTip))
        }
        return $v_0
    }
};
Mscrm.HeaderGroupBuilderProvider = function(caption, actionBuilderProvider) {
    if (IsNull(actionBuilderProvider)) throw Error.argumentNull("actionBuilderProvider");
    this.$3_0 = caption;
    this.$15_0 = actionBuilderProvider
};
Mscrm.HeaderGroupBuilderProvider.prototype = {
    $15_0: null,
    $3_0: null,
    create: function(navigationNodes) {
        var $v_0 = this.$15_0.create(navigationNodes), $v_1 = [];
        $v_1.push(new Mscrm.ActionListGroupModuleBuilder(this.$3_0, "HGC", $v_0));
        return $v_1
    }
};
Mscrm.SmallActionsBuilderProvider = function(createNodeClickedHandler) {
    if (IsNull(createNodeClickedHandler)) throw Error.argumentNull("createNodeClickedHandler");
    this.$7_0 = createNodeClickedHandler
};
Mscrm.SmallActionsBuilderProvider.prototype = {
    $7_0: null,
    create: function(navigationNodes) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < navigationNodes.length; $v_1++) {
            var $v_2 = navigationNodes[$v_1], $v_3 = Mscrm.BuilderHelper.isImageFlippedForNavigationNodeType($v_2);
            $v_0[$v_1] = new Mscrm.ActionButtonSmallBuilder($v_2.Id,
                $v_2.Caption,
                $v_2.ImageUrl,
                $v_3,
                $v_2.ColorAccent,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, $v_2))
        }
        if (!$v_0.length) $v_0[0] = new Mscrm.EmptyActionBuilder;
        return $v_0
    }
};
Mscrm.SplitActionsBuilderProvider = function(createNodeClickedHandler) {
    if (IsNull(createNodeClickedHandler)) throw Error.argumentNull("createNodeClickedHandler");
    this.$7_0 = createNodeClickedHandler
};
Mscrm.SplitActionsBuilderProvider.prototype = {
    $7_0: null,
    $1C_0: null,
    create: function(navigationNodes) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < navigationNodes.length; $v_1++) {
            var $v_2 = navigationNodes[$v_1];
            this.$1C_0 = Mscrm.NavigationUrlBuilderFactory.getNavigationUrlBuilder($v_2);
            if (!isNullOrEmptyString($v_2.Caption))
                $v_0[$v_1] = new Mscrm.ActionButtonBuilder($v_2.Id,
                    $v_2.Caption,
                    $v_2.ImageUrl,
                    $v_2.ColorAccent,
                    this.$1C_0.getNavigationUrl($v_2),
                    Mscrm.BuilderHelper.createEventHandler(this.$7_0, $v_2),
                    true,
                    $v_2.ToolTip,
                    $v_2.StripeUrl,
                    $v_2.StripeClass)
        }
        if (!$v_0.length) $v_0[0] = new Mscrm.EmptyActionBuilder;
        return $v_0
    }
};
Mscrm.TabButtonBuilder = function(id, caption, clickEventHandler, hoverEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabButtonBuilder.prototype = {
    $2_0: null,
    $0_0: null,
    $1_0: null,
    $3_0: null,
    build: function() {
        var $v_0 = "navTabButtonArrowDown";
        if (window.IS_PREVIEW_ORG) $v_0 += " navTabButtonImagePreview";
        else if (window.IS_SANDBOX_ORG) $v_0 += " navTabButtonImageSandbox";
        var $v_1 = Mscrm.BuilderHelper
            .fromHtmlBindClickHover(String
                .format('<span id="{0}{1}" class="navTabButton" title="{2}"><a class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span class="navTabButtonLabel" unselectable="on"><span id="{5}" class="navTabButtonText navTabModuleButton">{4}</span></span><span class="navTabButtonImageContainer" unselectable="on"><img class="navTabButtonArrowDown" alt="" unselectable="on" src="{3}"/></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/ArrowDown_HC.png")), CrmEncodeDecode.CrmHtmlEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode("navTabModuleButtonTextId")),
                this.$2_0,
                this.$0_0,
                true);
        return $v_1
    }
};
Mscrm.HomeButtonBuilder = function(id, clickEventHandler, hoverEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    this.$1_0 = id;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.HomeButtonBuilder.prototype = {
    $1_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = null, $v_1 = "homeButtonImage";
        if (window.IS_PREVIEW_ORG) $v_1 += " navTabButtonImagePreview";
        else if (window.IS_SANDBOX_ORG) $v_1 += " navTabButtonImageSandbox";
        var $v_2 = Mscrm.BuilderHelper
            .returnTitleAndDescription(window.NavBarSectionNavigationTitle, window.NavBarSectionNavigationDesc);
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span class="navTabButton navHomeButton" id="{0}" title="{2}" data-id="{3}"><a class="navTabButtonLink" title="{2}" id="HomeTabLink" tabindex="0" onkeypress="return true;" onclick="return false;" href="#" unselectable="on"><span class="navTabButtonImageContainer" unselectable="on"><img class="{1}" id={1} alt="{5}" unselectable="on" src="{4}"/></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode("sitemap"), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/Home_HC_16.png")), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2)),
            this.$2_0,
            this.$0_0,
            true);
        return $v_0
    }
};
Mscrm.TabHomeButtonBuilder = function(caption, clickEventHandler, hoverEventHandler) {
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabHomeButtonBuilder.prototype = {
    $3_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = null, $v_1 = "tabHomeButtonImage";
        if (window.IS_SANDBOX_ORG) $v_1 += " navTabButtonImageSandbox";
        var $v_2 = Mscrm.BuilderHelper
            .returnTitleAndDescription(this.$3_0,
                Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_BRAND_CRM_DESC"));
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span class="navTabButton navHomeButton navHomeMargin" id="{0}" title="{2}"><a title="{2}" class="navTabButtonLink homeMarginRemover" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span class="navTabButtonImageContainer" unselectable="on"><img class="{1}" alt="{2}" unselectable="on" src="{3}"/></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("TabCRMHome"), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/CRMHome_HC_16.png"))),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.TabButtonSplitBuilder = function(id,
    leftCaption,
    rightCaption,
    leftClickEventHandler,
    rightClickEventHandler,
    hoverEventHandler,
    nodeType) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(rightCaption)) throw Error.argumentNull("rightCaption");
    if (isNullOrEmptyString(leftCaption)) throw Error.argumentNull("leftCaption");
    this.$1_0 = id;
    this.$1V_0 = leftCaption;
    this.$1M_0 = rightCaption;
    this.$1s_0 = leftClickEventHandler;
    this.$1N_0 = rightClickEventHandler;
    this.$0_0 = hoverEventHandler;
    this.$s_0 = nodeType
};
Mscrm.TabButtonSplitBuilder.prototype = {
    $1_0: null,
    $1V_0: null,
    $1M_0: null,
    $1s_0: null,
    $1N_0: null,
    $0_0: null,
    $s_0: null,
    build: function() {
        var $v_0 = "";
        if (Mscrm.CrmBrowser.get_currentBrowser().get_isIE8()) $v_0 = " navTabButtonLeftIE8Fix";
        var $v_1 = "navTabButtonArrowDown";
        if (window.IS_PREVIEW_ORG) $v_1 += " navTabButtonImagePreview";
        else if (window.IS_SANDBOX_ORG) $v_1 += " navTabButtonImageSandbox";
        var $v_2 = "navTabSplitButtonTextCss";
        if (this.$s_0 && this.$s_0 === "areanode") $v_2 += " navTabButtonAreaText";
        else $v_2 += " navTabButtonSubAreaText";
        var $v_3 = "";
        if (this.$s_0 && this.$s_0 === "areanode") $v_3 = "TabHome";
        var $v_4 = "";
        if (this.$s_0 && this.$s_0 === "areanode") $v_4 = "AreaNodePadding";
        var $v_5 = "";
        if (this.$s_0 && this.$s_0 === "areanode") $v_5 = "SubAreaNodePadding";
        var $v_6 = Mscrm.BuilderHelper
                .fromHtmlBindClickHover(String
                    .format('<span id="{0}{1}-main" class="navTabButton navTabButtonLeft{4} {6}" title="{2}"><a class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span class="navTabButtonLabel" unselectable="on"><span class="navTabButtonText {3}">{5}</span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1V_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlEncode(this.$1V_0), CrmEncodeDecode.CrmHtmlEncode($v_4)),
                    this.$1s_0,
                    this.$0_0,
                    false),
            $v_7 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
                .format('<span id="{0}{1}" name="{7}" class="navTabButton navTabButtonRight {8}" title="{2}"><a class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on" title="{2}"><span class="navTabButtonImageContainer" unselectable="on"><span class="{4}"></span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1M_0), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/NavBarDivider.png")), $v_1, CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/ArrowDown_HC.png")), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1M_0), $v_3, CrmEncodeDecode.CrmHtmlEncode($v_5)),
                this.$1N_0,
                this.$0_0,
                true),
            $v_8 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
                .format('<span id="{0}{1}" name="{7}" class="navTabButton navTabButtonRight" title="{2}"><a class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on" title="{2}"><span class="navTabButtonImageContainer" unselectable="on"><span class="navTabButtonArrowRight"></span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1M_0), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/NavBarDivider.png")), $v_1, CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/ArrowDown_HC.png")), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1M_0), $v_3),
                this.$1N_0,
                this.$0_0,
                true),
            $v_9 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
                .format('<span id="{0}{1}_splitter" class="navTabButton navTabSplitterSpan" ><span class="navTabButtonImageContainer" unselectable="on"><img src="{3}" alt="|" class="navTabSplitter"></span></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1M_0), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/NavBarDivider.png")), $v_1, CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/ArrowDown_HC.png")), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1M_0), $v_3),
                this.$1N_0,
                this.$0_0,
                true),
            $v_A = String.format('<span class="{0}{1}" unselectable="on"></span>',
                CrmEncodeDecode.CrmHtmlAttributeEncode("navBarTopLevelItem"),
                CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.CrmBrowser.get_currentBrowser().get_isIE8()
                    ? " navBarTopLevelItemIE8Fix"
                    : "")),
            $v_B = $P_CRM($v_A);
        $v_B.append($v_6);
        if (this.$s_0 === "areanode") {
            $v_B.append($v_7);
            $v_B.append($v_9)
        } else $v_B.append($v_8);
        return $v_B
    }
};
Mscrm.TabGroupBuilder = function(tabButtonBuildersLeft, centerButtonBuilder, tabButtonBuildersRight) {
    if (IsNull(tabButtonBuildersLeft)) throw Error.argumentNull("tabButtonBuildersLeft");
    if (!tabButtonBuildersLeft.length) throw Error.argument("tabButtonBuilders");
    if (IsNull(centerButtonBuilder)) throw Error.argumentNull("centerButtonBuildersLeft");
    this.$3N_0 = centerButtonBuilder;
    this.$31_0 = tabButtonBuildersLeft;
    if (tabButtonBuildersRight) this.$1w_0 = tabButtonBuildersRight
};
Mscrm.TabGroupBuilder.prototype = {
    $31_0: null,
    $1w_0: null,
    $3N_0: null,
    $45_0: function($p0) {
        var $v_0 = null;
        if ($p0.hasClass("navBarTopLevelItem")) $v_0 = $p0.children(".navTabButton").has("a");
        else if ($p0.is(".navTabButton")) $v_0 = $p0.has("a");
        if ($v_0) {
            var $$t_6 = this;
            $v_0.each(function($p1_0, $p1_1) {
                var $v_1 = $P_CRM(this), $v_2 = {};
                $v_2["id"] = IsNull($v_1.attr("data-id")) ? $v_1.attr("id") : $v_1.attr("data-id");
                if ($v_2["id"].toString() === "help") $v_2["isMarsLauncher"] = true;
                $v_2["type"] = "StaticNavigationButton";
                $v_2["parentId"] = "navigationbar";
                Mscrm.XrmUIControlsWrapper.get_instance().registerControl($v_1, $v_2)
            })
        }
    },
    build: function() {
        for (var $v_0 = $P_CRM('<div id="navTabGroupDiv" class="navTabGroup" />'), $v_1 = 0;
            $v_1 < this.$31_0.length;
            $v_1++) {
            var $v_2 = this.$31_0[$v_1].build();
            $v_0.append($v_2);
            this.$45_0($v_2)
        }
        if (this.$1w_0 && this.$1w_0.length > 0) {
            for (var $v_3 = $P_CRM('<div class="navFloatRight" />'), $v_4 = 0; $v_4 < this.$1w_0.length; $v_4++) {
                var $v_5 = this.$1w_0[$v_4].build();
                $v_3.append($v_5);
                this.$45_0($v_5)
            }
            $v_0.append($v_3)
        }
        $v_0.append(this.$3N_0.build());
        return $v_0
    }
};
Mscrm.ScrollRightButtonBuilder = function(id, clickEventHandler, rightToLeft) {
    Mscrm.ScrollRightButtonBuilder.initializeBase(this, [id, clickEventHandler, rightToLeft])
};
Mscrm.ScrollRightButtonBuilder.prototype = {
    get_containerHtml: function() { return '<div id="{0}" class="nav-scrl-right-lnk">' },
    get_buttonHtml: function() {
        return String
            .format('<a id="rightNavLink" title="{1}" href="#"><span class="rightNavLinkImg"><img src="{0}" alt="{1}" unselectable="on"></span></a>', this.$i_0 ? CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavGalleryArrowLeft.png", "/_imgs/NavBar/HighContrast/NavGalleryArrowLeft.png")) : CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavGalleryArrowRight.png", "/_imgs/NavBar/HighContrast/NavGalleryArrowRight.png")), this.$i_0 ? CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_NAV_LEFTLINK_TOOLTIP) : CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_NAV_RIGHTLINK_TOOLTIP))
    }
};
Mscrm.ScrollLeftButtonBuilder = function(id, clickEventHandler, rightToLeft) {
    Mscrm.ScrollLeftButtonBuilder.initializeBase(this, [id, clickEventHandler, rightToLeft])
};
Mscrm.ScrollLeftButtonBuilder.prototype = {
    get_containerHtml: function() { return '<div id="{0}" class="nav-scrl-left-lnk">' },
    get_buttonHtml: function() {
        return String
            .format('<a id="leftNavLink" title ="{1}" href="#"><span class="leftNavLinkImg"><img src="{0}" alt="{1}" unselectable="on"></span></a>', this.$i_0 ? CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavGalleryArrowRight.png", "/_imgs/NavBar/HighContrast/NavGalleryArrowRight.png")) : CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavGalleryArrowLeft.png", "/_imgs/NavBar/HighContrast/NavGalleryArrowLeft.png")), this.$i_0 ? CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_NAV_RIGHTLINK_TOOLTIP) : CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_NAV_LEFTLINK_TOOLTIP))
    }
};
Mscrm.ScrollButtonBuilder = function(id, clickEventHandler, rightToLeft) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    this.$1_0 = id;
    this.$2_0 = clickEventHandler;
    this.$i_0 = rightToLeft
};
Mscrm.ScrollButtonBuilder.prototype = {
    $1_0: null,
    $2_0: null,
    $i_0: false,
    get_rightToLeft: function() { return this.$i_0 },
    build: function() {
        var $v_0 = $P_CRM(String.format(this.get_containerHtml(), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0))),
            $v_1 = Mscrm.BuilderHelper.fromHtmlBindClick(this.get_buttonHtml(), this.$2_0);
        $v_0.append($v_1);
        return $v_0
    }
};
Mscrm.ScrollableContainerBuilder = function(id) { Mscrm.ScrollableContainerBuilder.initializeBase(this, [id]) };
Mscrm.ScrollableContainerBuilder.prototype = {
    get_containerHtml: function() { return '<div id="{0}" class="nav-scrl-cont">' }
};
Mscrm.TabTextButtonBuilder = function(id, caption, clickEventHandler, hoverEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabTextButtonBuilder.prototype = {
    $1_0: null,
    $3_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = "navTabButtonLeft",
            $v_1 = Mscrm.BuilderHelper
                .fromHtmlBindClickHover(String
                    .format('<span id="{0}{1}-main" class="navTabButton {3} navTabButtonRight" title="{2}"><a class="navTabButtonLink tabTextMarginLeft" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span class="navTabButtonLabel" unselectable="on"><span class="navTabButtonText">{4}</span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlEncode(this.$3_0)),
                    this.$2_0,
                    this.$0_0,
                    false),
            $v_2 = String.format('<span class="{0}{1}" unselectable="on"></span>',
                CrmEncodeDecode.CrmHtmlAttributeEncode("navBarTopLevelItem"),
                CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.CrmBrowser.get_currentBrowser().get_isIE8()
                    ? " navBarTopLevelItemIE8Fix"
                    : "")),
            $v_3 = $P_CRM($v_2);
        $v_3.append($v_1);
        return $v_3
    }
};
Mscrm.ViewportContainerBuilder = function(id) { Mscrm.ViewportContainerBuilder.initializeBase(this, [id]) };
Mscrm.ViewportContainerBuilder.prototype = {
    get_containerHtml: function() { return '<div id="{0}" class="nav-scrl-view">' }
};
Mscrm.NavBarConstants = function() {};
Mscrm.ActionListControl = function(id, flyOutControlFactory) {
    Mscrm.ActionListControl.initializeBase(this, [id, flyOutControlFactory]);
    this.$1_2 = id
};
Mscrm.ActionListControl.prototype = {
    $1_2: null,
    scrollableContentProvider: function(navigationNodes) {
        var $v_0 = this.$V_0.create(navigationNodes),
            $v_1 = new Mscrm.ActionListGroupBuilder(Mscrm.BuilderHelper
                .getResourceStringFromLOCID("LOCID_MRU_CAPTION_NAVBAR"),
                this.$1_2,
                $v_0,
                ""),
            $v_2 = $v_1.build();
        return $v_2
    },
    unselectNodes: function() {
        Mscrm.NavigationNodesBasedControl.prototype.unselectNodes.call(this);
        $P_CRM(".nav-rowBody.selected").removeClass("selected")
    },
    selectNode: function(node) {
        this.unselectNodes();
        Mscrm.NavigationNodesBasedControl.prototype.selectNode.call(this, node);
        $P_CRM("#" + node.Id + ".nav-rowBody").addClass("selected")
    }
};
Mscrm.ActionGroupControl = function(id, flyOutControlFactory) {
    Mscrm.ActionGroupControl.initializeBase(this, [id, flyOutControlFactory]);
    this.$1_2 = id
};
Mscrm.ActionGroupControl.prototype = {
    $1_2: null,
    $2h_2: null,
    scrollableContentProvider: function(navigationNodes) {
        var $v_0 = this.$V_0.create(navigationNodes),
            $v_1 = new Mscrm.ActionGroupBuilder(this.$1_2, $v_0),
            $v_2 = $v_1.build();
        return $v_2
    },
    unselectNodes: function() {
        $P_CRM(".navActionButton.selected").removeClass("selected");
        $P_CRM(".navActionButtonContainer.selected").removeClass("selected");
        Mscrm.NavigationNodesBasedControl.prototype.unselectNodes.call(this)
    },
    selectNode: function(node) {
        this.unselectNodes();
        $P_CRM("#" + node.Id + "-drop.navActionButton").addClass("selected");
        $P_CRM("#" + node.Id + ".navActionButton").parents(".navActionButtonContainer").addClass("selected");
        Mscrm.NavigationNodesBasedControl.prototype.selectNode.call(this, node);
        !IsNull(this.$2h_2) && this.$2h_2(node)
    },
    setNodeSelectedEventHandler: function(handler) { this.$2h_2 = handler }
};
Mscrm.DropDownMenuControlUserInfo = function(flyOutControlFactory, navigationNodeHandlerProvider) {
    Mscrm.DropDownMenuControlUserInfo.initializeBase(this, [flyOutControlFactory, navigationNodeHandlerProvider])
};
Mscrm.DropDownMenuControlUserInfo.prototype = {
    $L_2: '<span id="navTabButtonUserInfoDropDownId" class="navDropDownMenu navDropDownMenuUserInfo">{0}</span>',
    $2J_2: null,
    $2y_2: null,
    $28_2: null,
    $2Z_2: null,
    $35_2: null,
    $36_2: null,
    $2k_2: null,
    $2l_2: null,
    $4c_2: function() { return window.IS_LIVE },
    $4k_2: function() { return this.$4c_2() || window.IS_SPLA || window.IS_CLAIMS },
    getContent: function(navigationNodes) {
        var $v_0 = navigationNodes[0];
        this.$O_1 = $v_0.Children;
        this.$2J_2 = "navTabButtonUserInfoSignOutId";
        this.$2y_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2J_2);
        this.$28_2 = "navTabButtonUserInfoEditImageId";
        this.$2Z_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$28_2);
        this.$35_2 = "navTabButtonUserInfoUserNameId";
        this.$36_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$35_2);
        this.$2k_2 = "navTabButtonUserInfoOrgNameId";
        this.$2l_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2k_2);
        var $v_1 = String
            .format('<a id="{0}" title="{1}" style=" font-weight : bold !important; pointer-events: none !important;">{2}</a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$35_2), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$36_2), CrmEncodeDecode.CrmHtmlEncode(this.$36_2));
        $v_1 += String
            .format('<a id="{0}" title="{1}" style=" pointer-events: none !important;">{2}</a><hr class="navHorizontalDivider">', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2k_2), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2l_2), CrmEncodeDecode.CrmHtmlEncode(this.$2l_2));
        if (window.UserHasWritePrivilege)
            $v_1 += String.format('<a id="{0}" title="{1}" href="javascript:;">{2}</a>',
                CrmEncodeDecode.CrmHtmlAttributeEncode(this.$28_2),
                CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2Z_2),
                CrmEncodeDecode.CrmHtmlEncode(this.$2Z_2));
        if (this.$4k_2())
            $v_1 += String.format('<a id="{0}" title="{1}" href="javascript:;">{2}</a>',
                CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2J_2),
                CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2y_2),
                CrmEncodeDecode.CrmHtmlEncode(this.$2y_2));
        this.$z_1 = $P_CRM(String.format(this.$L_2, $v_1));
        this.attachEventHandler(this.findNavigationNode("navTabButtonUserInfoSignOutId"), this.$2J_2);
        this.attachEventHandler(this.findNavigationNode("navTabButtonUserInfoEditImageId"), this.$28_2);
        return this.$z_1
    }
};
Mscrm.DropDownMenuControlSettings = function(flyOutControlFactory, navigationNodeHandlerProvider) {
    Mscrm.DropDownMenuControlSettings.initializeBase(this, [flyOutControlFactory, navigationNodeHandlerProvider]);
    this.$2i_2 = "navTabButtonSettingsOptionsId";
    this.$2n_2 = "navTabButtonSettingsPrintPreviewId";
    this.$2f_2 = "navTabButtonSettingsNavTourId";
    this.$2c_2 = "navTabButtonSettingsNavAppsForCrmId";
    this.$2S_2 = "navTabButtonSettingsAboutId";
    this.$2q_2 = "NodeSettingsPrivacyStatementId";
    this.$2a_2 = "navTabButtonSettingsGuidedHelpId"
};
Mscrm.DropDownMenuControlSettings.prototype = {
    $L_2: '<span id="navTabButtonSettingsDropDownId" class="navDropDownMenu navDropDownMenuSettings">{0}</span>',
    $2j_2: null,
    $2o_2: null,
    $2g_2: null,
    $2d_2: null,
    $2T_2: null,
    $2p_2: null,
    $2b_2: null,
    $2i_2: null,
    $2n_2: null,
    $2f_2: null,
    $2c_2: null,
    $2S_2: null,
    $2q_2: null,
    $2a_2: null,
    getContent: function(navigationNodes) {
        var $v_0 = navigationNodes[0];
        this.$O_1 = $v_0.Children;
        var $v_1 = !isNullOrEmptyString(Mscrm.BuilderHelper.getResourceStringFromLOCID("PrivacyStatementUrl")),
            $v_2 = true,
            $v_3 = Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.GuidedHelp"),
            $v_4 = Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.AppsForCrm");
        if (!IsNull($v_0.Action) &&
            Mscrm.NavBarSharedConstants.printPreviewAvailable in $v_0.Action &&
            !IsNull($v_0.Action[Mscrm.NavBarSharedConstants
                .printPreviewAvailable])) $v_2 = $v_0.Action[Mscrm.NavBarSharedConstants.printPreviewAvailable];
        this.$2j_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2i_2);
        this.$2o_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2n_2);
        this.$2g_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2f_2);
        if ($v_4) this.$2d_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2c_2);
        this.$2T_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2S_2);
        if ($v_3) this.$2b_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2a_2);
        if ($v_1) this.$2p_2 = Mscrm.BuilderHelper.fetchCaptionForNodeId(this.$O_1, this.$2q_2);
        var $v_5 = String.format('<a id="{0}" title="{1}" href="javascript:;">{2}</a><hr class="navHorizontalDivider">',
            CrmEncodeDecode.CrmHtmlAttributeEncode("navTabButtonSettingsOptionsId"),
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2j_2),
            CrmEncodeDecode.CrmHtmlEncode(this.$2j_2));
        if ($v_2)
            $v_5 += String
                .format('<a id="{0}" title="{1}" href="javascript:;">{2}</a><hr class="navHorizontalDivider">',
                    CrmEncodeDecode.CrmHtmlAttributeEncode("navTabButtonSettingsPrintPreviewId"),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2o_2),
                    CrmEncodeDecode.CrmHtmlEncode(this.$2o_2));
        if ($v_4)
            $v_5 += String
                .format('<a id="{0}" title="{1}" href="javascript:;">{2}</a><hr class="navHorizontalDivider">',
                    CrmEncodeDecode.CrmHtmlAttributeEncode("navTabButtonSettingsNavAppsForCrmId"),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2d_2),
                    CrmEncodeDecode.CrmHtmlEncode(this.$2d_2));
        $v_5 += String.format('<a id="{0}" title="{1}" href="javascript:;">{2}</a><hr class="navHorizontalDivider">',
            CrmEncodeDecode.CrmHtmlAttributeEncode("navTabButtonSettingsNavTourId"),
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2g_2),
            CrmEncodeDecode.CrmHtmlEncode(this.$2g_2));
        $v_5 += String.format('<a id="{0}" title="{1}" href="javascript:;">{2}</a><hr class="navHorizontalDivider">',
            CrmEncodeDecode.CrmHtmlAttributeEncode("navTabButtonSettingsAboutId"),
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2T_2),
            CrmEncodeDecode.CrmHtmlEncode(this.$2T_2));
        if ($v_3)
            $v_5 += String
                .format('<a id="{0}" title="{1}" href="javascript:;">{2}</a><hr class="navHorizontalDivider">',
                    CrmEncodeDecode.CrmHtmlAttributeEncode("navTabButtonSettingsGuidedHelpId"),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2b_2),
                    CrmEncodeDecode.CrmHtmlEncode(this.$2b_2));
        if ($v_1)
            $v_5 += String.format('<a id="{0}" title="{1}" href="javascript:;">{2}</a>',
                CrmEncodeDecode.CrmHtmlAttributeEncode("NodeSettingsPrivacyStatementId"),
                CrmEncodeDecode.CrmHtmlAttributeEncode(this.$2p_2),
                CrmEncodeDecode.CrmHtmlEncode(this.$2p_2));
        this.$z_1 = $P_CRM(String.format(this.$L_2, $v_5));
        this.attachEventHandler(this.findNavigationNode("navTabButtonSettingsOptionsId"), this.$2i_2);
        $v_2 && this.attachEventHandler(this.findNavigationNode("navTabButtonSettingsPrintPreviewId"), this.$2n_2);
        this.attachEventHandler(this.findNavigationNode("navTabButtonSettingsNavTourId"), this.$2f_2);
        $v_4 && this.attachEventHandler(this.findNavigationNode("navTabButtonSettingsNavAppsForCrmId"), this.$2c_2);
        this.attachEventHandler(this.findNavigationNode("navTabButtonSettingsAboutId"), this.$2S_2);
        $v_3 && this.attachEventHandler(this.findNavigationNode("navTabButtonSettingsGuidedHelpId"), this.$2a_2);
        $v_1 && this.attachEventHandler(this.findNavigationNode("NodeSettingsPrivacyStatementId"), this.$2q_2);
        return this.$z_1
    }
};
Mscrm.DropDownSearch = function(flyOutControlFactory, navigationNodeHandlerProvider) {
    Mscrm.DropDownSearch.initializeBase(this, [flyOutControlFactory, navigationNodeHandlerProvider])
};
Mscrm.DropDownSearch.prototype = {
    $2w_2: null,
    $L_2: '<span class="navBarSearchTextBoxDiv navBarSearchIcon"></span>',
    getContent: function(navigationNodes) {
        this.$2w_2 = "navTabButtonSearchD365Id";
        var $v_0 = navigationNodes[0],
            $v_1 = String
                .format('<table width="100%" class="navSearchLayout" cellspacing="0" cellpadding="0"><tr><td valign="top" style="overflow: hidden;height:100%"><div style="position: relative;"><label class="ms-crm-Dialog-Lookup-QuickFindHint ms-crm-TextAutoEllipsis navSearchLabelLayout" id="findHintText" onclick = "{6}" for="search">{1}</label></div><div style="height: 100%;"><input tabindex="0" aria-label="{1}" class="ms-crm-Dialog-Lookup-QuickFind navBarSearchTextBox" id="search" type="text" maxlength="100"value="" onfocus="{2}" onblur="{3}" style="height:100%;border:none;"></div></td><td id="{0}" class="meqfSearchButton AppQuickFind_Render_td"  valign="top" nowrap=""><a title="{4}" tabindex="0"class="ms-crm-FindButton navSearchButtonHeight" id="findCriteriaButton" href="#" target="_self"><img title="{4}"id="findCriteriaImg" class="navImageFlipHorizontal" alt="{4}" src="{5}" style="padding-top:4px;padding-left:8px;vertical-align:middle"></a></td></tr></table>', CrmEncodeDecode.CrmHtmlEncode(this.$2w_2), CrmEncodeDecode.CrmHtmlEncode(Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_MEQF_NAVBARSEARCH_DEFAULT")), "$('#findHintText').hide()", "if($('#search').val().length  < 1) $('#findHintText').show();", CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_MEQF_SEARCH_BUTTON_ALT")), CrmEncodeDecode.CrmHtmlAttributeEncode("/_imgs/search_grey_16.png"), "$('#search').focus()");
        this.$z_1 = $P_CRM(this.$L_2).append($v_1);
        this.attachEventHandler($v_0.Children[0], this.$2w_2);
        return this.$z_1
    }
};
Mscrm.DropDownMenuControl = function(flyOutControlFactory, navigationNodeHandlerProvider) {
    Mscrm.DropDownMenuControl.initializeBase(this, [flyOutControlFactory]);
    if (IsNull(navigationNodeHandlerProvider)) throw Error.argumentNull("navigationNodeHandlerProvider");
    this.$3i_1 = navigationNodeHandlerProvider
};
Mscrm.DropDownMenuControl.prototype = {
    $3i_1: null,
    $O_1: null,
    get_menuEntries: function() { return this.$O_1 },
    set_menuEntries: function(value) {
        this.$O_1 = value;
        return value
    },
    $z_1: null,
    get_fullMenu: function() { return this.$z_1 },
    set_fullMenu: function(value) {
        this.$z_1 = value;
        return value
    },
    attachEventHandler: function(node, classSelector) {
        var $v_0 = Mscrm.BuilderHelper.createEventHandler(this.$3i_1, node),
            $v_1 = $P_CRM("#" + classSelector, this.$z_1);
        Mscrm.BuilderHelper.attachEventhandlerToObject($v_1, $v_0)
    },
    findNavigationNode: function(nodeId) { return Mscrm.BuilderHelper.findNavigationNode(this.$O_1, nodeId) }
};
Mscrm.FlyoutControlContainerFactory = function(rootElementId,
    flyOutStyleClass,
    animationHandler,
    dismissHandler,
    showHandler) {
    if (isNullOrEmptyString(rootElementId)) throw Error.argumentNull("rootElementId");
    if (isNullOrEmptyString(flyOutStyleClass)) throw Error.argumentNull("flyoutStyleClass");
    if (IsNull(animationHandler)) throw Error.argumentNull("animationHandler");
    this.$b_0 = rootElementId;
    this.$3W_0 = flyOutStyleClass;
    this.$3Q_0 = animationHandler;
    this.$j_0 = dismissHandler;
    this.$1v_0 = showHandler
};
Mscrm.FlyoutControlContainerFactory.prototype = {
    $b_0: null,
    $3W_0: null,
    $3Q_0: null,
    $j_0: null,
    $1v_0: null,
    createControlContainer: function() {
        return new Mscrm.FlyOutControlContainer(this.$b_0, this.$3W_0, this.$3Q_0, this.$j_0, this.$1v_0)
    }
};
Mscrm.ShuffleStrategy = function() {};
Mscrm.ShuffleStrategy.prototype = {
    shuffle: function(node, newPosition) {
        if (newPosition < 0) throw Error.argumentOutOfRange("newPosition", "-ve position");
        var $v_0 = node.parent();
        node.detach();
        var $v_1 = $v_0.children()[newPosition];
        if (!$v_1 || typeof $v_1 === "undefined") $v_0.append(node);
        else $v_0[0].insertBefore(node[0], $v_1)
    }
};
Mscrm.NavStatusBarAnimationStrategy = function() {};
Mscrm.NavStatusBarAnimationStrategy.prototype = {
    showAnimation: function(animatedObject, animationCompletedAction) {
        if (IsNull(animatedObject)) throw Error.argumentNull("animatedObject");
        animatedObject.fadeIn("fast", animationCompletedAction)
    },
    hideAnimation: function(animatedObject, animationCompletedAction) {
        if (IsNull(animatedObject)) throw Error.argumentNull("animatedObject");
        animatedObject.slideUp("fast", animationCompletedAction)
    }
};
Mscrm.NavStatus = function(notificationAreaElementId, animationStrategy) {
    if (isNullOrEmptyString(notificationAreaElementId)) throw Error.argumentNull("notificationAreaElementId");
    if (IsNull(animationStrategy)) throw Error.argumentNull("animationStrategy");
    this.$L_0 = $P_CRM(notificationAreaElementId);
    if (IsNull(this.$L_0) || this.$L_0.length !== 1) throw Error.argument("notificationAreaElementId");
    this.$1G_0 = animationStrategy
};
Mscrm.NavStatus.prototype = {
    $1G_0: null,
    $L_0: null,
    showInfoMessage: function(message, captions, actions, sticky) {
        if (!isNullOrEmptyString(message)) {
            var $v_0 = new Mscrm.NavStatusBar(this.$L_0, this.$1G_0, message, captions, actions);
            $v_0.show(sticky, false)
        }
    },
    showErrorMessage: function(message, captions, actions, sticky) {
        if (!isNullOrEmptyString(message)) {
            var $v_0 = new Mscrm.NavStatusBar(this.$L_0, this.$1G_0, message, captions, actions);
            $v_0.show(sticky, true)
        }
    }
};
Mscrm.NavStatusBar = function(container, animationStrategy, message, captions, actions) {
    this.$$d_$5j_0 = Function.createDelegate(this, this.$5j_0);
    this.$$d_$4W_0 = Function.createDelegate(this, this.$4W_0);
    this.$$d_$61_0 = Function.createDelegate(this, this.$61_0);
    this.$$d_$6Y_0 = Function.createDelegate(this, this.$6Y_0);
    if (IsNull(container)) throw Error.argumentNull("container");
    if (IsNull(animationStrategy)) throw Error.argumentNull("animationStrategy");
    if (IsNull(message)) throw Error.argumentNull("message");
    this.$L_0 = container;
    this.$1G_0 = animationStrategy;
    this.$3f_0 = message;
    this.$26_0 = captions;
    this.$1h_0 = actions
};
Mscrm.NavStatusBar.prototype = {
    $x_0: null,
    $L_0: null,
    $1G_0: null,
    $1x_0: 0,
    $3f_0: null,
    $26_0: null,
    $1h_0: null,
    show: function(sticky, showError) {
        this.$x_0 = this.$58_0(showError);
        this.$x_0.hide();
        this.$L_0.append(this.$x_0);
        this.$4r_0();
        this.$1G_0.showAnimation(this.$x_0, null);
        if (!sticky) this.$1x_0 = window.setTimeout(this.$$d_$6Y_0, 1e4)
    },
    $6Y_0: function() {
        this.$1x_0 = 0;
        this.$4W_0(null)
    },
    $58_0: function($p0) {
        var $v_0 = $P_CRM('<table class="navStatusBar navStatusInfo"><tr></tr></table>'), $v_1 = $P_CRM("tr", $v_0);
        if ($p0)
            $v_1.append($P_CRM('<td><img src="' +
                window.CDNURL +
                '/_imgs/NavBar/StatusError.png" width=16 height=16 alt="Error" class="navStatusIcon"></td>'));
        else
            $v_1.append($P_CRM('<td><img src="' +
                window.CDNURL +
                '/_imgs/NavBar/StatusSucceeded.png" width=16 height=16 alt="Information" class="navStatusIcon"></td>'));
        var $v_2 = $P_CRM('<td><span class="navStatusText"></span></td>');
        $v_2.children(".navStatusText").text(this.$3f_0);
        $v_1.append($v_2);
        if (!IsNull(this.$1h_0) && !IsNull(this.$26_0) && this.$1h_0.length === this.$26_0.length)
            for (var $v_3 = 0; $v_3 < this.$1h_0.length; $v_3++) {
                var $v_4 = this.$26_0[$v_3],
                    $v_5 = $P_CRM(String
                        .format('<a title="{0}" role="button" href="javascript:;" class="navStatusAdditionalButton crmAppMessageBarButton"><span class="ms-crm-msgbar_button_cold">{1}</span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_4), CrmEncodeDecode.CrmHtmlEncode($v_4)));
                $v_5.data("index", $v_3);
                $v_1.append($P_CRM('<td class="crmAppMessageBarButtonContainer"></td>').append($v_5))
            }
        $v_1.append($P_CRM(String.format('<td><a title="{0}" role="button" href="javascript:;" class="' +
            CrmEncodeDecode.CrmHtmlAttributeEncode("navStatusClose") +
            '"><img src="' +
            window.CDNURL +
            '/_imgs/navbar/statusclose.png" width=16 height=16 alt="{0}"></a></td>',
            CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_CLOSE_QUICKFORM_TOOLTIP))));
        return $v_0
    },
    $4W_0: function($p0) {
        if (this.$1x_0) {
            window.clearTimeout(this.$1x_0);
            this.$1x_0 = 0
        }
        this.$5G_0();
        this.$1G_0.hideAnimation(this.$x_0, this.$$d_$61_0)
    },
    $61_0: function() {
        this.$x_0.remove();
        this.$x_0 = null
    },
    $4r_0: function() {
        this.$4L_0().bind("click", this.$$d_$4W_0);
        var $v_0 = this.$4K_0();
        $v_0.bind("click", this.$$d_$4W_0);
        $v_0.bind("click", this.$$d_$5j_0)
    },
    $5G_0: function() {
        this.$4L_0().unbind("click", this.$$d_$4W_0);
        var $v_0 = this.$4K_0();
        $v_0.unbind("click", this.$$d_$4W_0);
        $v_0.unbind("click", this.$$d_$5j_0)
    },
    $4L_0: function() { return $P_CRM("a.navStatusClose", this.$x_0) },
    $4K_0: function() { return $P_CRM("a.navStatusAdditionalButton", this.$x_0) },
    $5j_0: function($p0) {
        var $v_0 = $P_CRM($p0.currentTarget), $v_1 = $v_0.data()["index"];
        this.$1h_0[$v_1].execute()
    }
};
Mscrm.TabControlOutlook = function(tabControlContainerId,
    createNodeClickedHandler,
    createNodeDropDownClickedHandler,
    hoverEventHandler) {
    Mscrm.TabControlOutlook.initializeBase(this,
        [tabControlContainerId, createNodeClickedHandler, createNodeDropDownClickedHandler, hoverEventHandler])
};
Mscrm.TabControlOutlook.prototype = {
    createLeftSideBuilders: function() {
        var $v_0 = [], $v_1 = 0;
        if (this.$P_0)
            if (isNullOrEmptyString(this.$m_0))
                $v_0[$v_1++] = new Mscrm.TabLogoImageBuilder(this.$P_0.Id, this.$P_0.Caption, this.$0_0);
            else
                $v_0[$v_1++] = new Mscrm
                    .TabLogoImageThemeBuilderOutlook(this.$m_0, this.$P_0.Id, this.$P_0.Caption, this.$0_0);
        if (this.$e_0)
            $v_0[$v_1++] = new Mscrm.BackButtonBuilder(this.$e_0,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$e_0));
        if (this.$M_0) $v_0[$v_1++] = this.recordNodeBuilder();
        return $v_0
    },
    createRightSideBuilders: function() {
        var $v_0 = [], $v_1 = 0;
        if (this.$Q_0 && Mscrm.SessionInfo.isOnline())
            $v_0[$v_1++] = new Mscrm.SearchButtonBuilder(this.$Q_0.Caption,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$Q_0),
                this.$0_0);
        if (this.$12_0)
            $v_0[$v_1++] = new Mscrm
                .TabButtonUserInfoBuilder(this.$12_0,
                    this.$q_0,
                    this.$1g_0,
                    this.$Z_0,
                    this.$a_0,
                    this.$y_0,
                    Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$12_0),
                    this.$0_0);
        if (this.$h_0)
            $v_0[$v_1++] = new Mscrm.TabButtonHelpBuilder(this.$h_0.Id,
                this.$h_0.Caption,
                Mscrm.BuilderHelper
                .selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif",
                    "/_imgs/NavBar/HighContrast/Help_HC_16.png"),
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$h_0),
                this.$0_0);
        return $v_0
    }
};
Mscrm.JQueryContainerAnimation = function() {};
Mscrm.JQueryContainerAnimation.prototype = {
    switchContentAnimation: function(animatedObject, animationCompletedAction) {
        animatedObject.fadeIn(400, animationCompletedAction)
    },
    showAnimation: function(animatedObject, animationCompletedAction) {
        animatedObject.slideDown(250, animationCompletedAction)
    },
    closeAnimation: function(animatedObject, animationCompletedAction) {
        animatedObject.fadeOut(400, animationCompletedAction)
    }
};
Mscrm.ControlContainer = function() { this.$H_0 = new Sys.EventHandlerList };
Mscrm.ControlContainer.prototype = {
    $16_0: true,
    add_shown: function(value) { this.$H_0.addHandler("Shown", value) },
    remove_shown: function(value) { this.$H_0.removeHandler("Shown", value) },
    add_hidden: function(value) { this.$H_0.addHandler("Hidden", value) },
    remove_hidden: function(value) { this.$H_0.removeHandler("Hidden", value) },
    add_showing: function(value) { this.$H_0.addHandler("Showing", value) },
    remove_showing: function(value) { this.$H_0.removeHandler("Showing", value) },
    add_hiding: function(value) { this.$H_0.addHandler("Hiding", value) },
    remove_hiding: function(value) { this.$H_0.removeHandler("Hiding", value) },
    get_animateOnHide: function() { return this.$16_0 },
    set_animateOnHide: function(value) {
        this.$16_0 = value;
        return value
    },
    onContainerShowing: function() { this.$1E_0("Showing") },
    onContainerHiding: function() { this.$1E_0("Hiding") },
    onContainerShown: function() { this.$1E_0("Shown") },
    onContainerHidden: function() { this.$1E_0("Hidden") },
    $1E_0: function($p0) {
        var $v_0 = this.$H_0.getHandler($p0);
        $v_0 && $v_0(this, Sys.EventArgs.Empty)
    },
    show: function() {
        this.onContainerShowing();
        this.onContainerShown()
    },
    hide: function() {
        this.onContainerHiding();
        this.onContainerHidden()
    },
    setContent: function(content) {},
    dispose: function() {},
    registerContainerForXrmUI: function(containerId) {}
};
Mscrm.ScrollableControl = function(id, containerControlFactory) {
    this.$$d_$4n_1 = Function.createDelegate(this, this.$4n_1);
    this.$$d_$56_1 = Function.createDelegate(this, this.$56_1);
    this.$$d_$6J_1 = Function.createDelegate(this, this.$6J_1);
    this.$$d_$6I_1 = Function.createDelegate(this, this.$6I_1);
    this.$$d_$4C_1 = Function.createDelegate(this, this.$4C_1);
    Mscrm.ScrollableControl.initializeBase(this, [containerControlFactory]);
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    this.$R_1 = new Mscrm.ControlIdProvider;
    this.$R_1.scrollableContainerId = String.format("{0}_scrollableContainer", id);
    this.$R_1.viewportContainerId = String.format("{0}_viewport", id);
    this.$R_1.scrollLeftButtonId = String.format("{0}_leftNavContainer", id);
    this.$R_1.scrollRightButtonId = String.format("{0}_rightNavContainer", id);
    this.$2v_1 = new Mscrm.ScrollInputHandler(this.$R_1.viewportContainerId);
    this.$3r_1 = String.format("#{0}", this.$R_1.scrollLeftButtonId);
    this.$3t_1 = String.format("#{0}", this.$R_1.scrollRightButtonId);
    var $v_0 = this.$6A_1();
    this.$1l_1 = new Mscrm.ScrollableContentDescriptor(String
        .format("#{0} .{1}", this.$R_1.viewportContainerId, "nav-group"));
    this.$1R_1 = new Mscrm.ScrollableContainerDescriptor(this.$R_1.scrollableContainerId,
        this.$R_1.viewportContainerId,
        $v_0);
    var $v_1 = new Mscrm.AnimatedMarginScroller(this.$R_1.viewportContainerId, $v_0);
    $v_1.setScrollingFinishedEventHandler(this.$$d_$4C_1);
    var $v_2 = new Mscrm.AnimatedMarginScroller(this.$R_1.viewportContainerId, $v_0);
    $v_2.setScrollingFinishedEventHandler(this.$$d_$4C_1);
    this.$2E_1 = new Mscrm.ScrollByPageScrollingStrategy(this.$1l_1, this.$1R_1, $v_1);
    this.$3u_1 = new Mscrm.ScrollToPageWithProvidedItemScrollingStrategy(this.$1l_1, this.$1R_1, $v_2);
    this.$2t_1 = new Mscrm.ScrollInFlyOutContentDecorator(this.$R_1, this.$$d_$6I_1, this.$$d_$6J_1, $v_0)
};
Mscrm.ScrollableControl.prototype = {
    $R_1: null,
    $2v_1: null,
    $3r_1: null,
    $3t_1: null,
    $1l_1: null,
    $1R_1: null,
    $2t_1: null,
    $3u_1: null,
    $2E_1: null,
    $6J_1: function($p0) { this.$2E_1.scrollBy(1) },
    $6I_1: function($p0) { this.$2E_1.scrollBy(-1) },
    $4C_1: function() {
        var $v_0 = $P_CRM(this.$3r_1), $v_1 = $P_CRM(this.$3t_1);
        if (this.$4w_1()) $v_0.show();
        else $v_0.hide();
        if (this.$4x_1()) $v_1.show();
        else $v_1.hide()
    },
    $4x_1: function() {
        var $v_0 = this.$1R_1.getCurrentViewportMargin(),
            $v_1 = this.$1l_1.getTotalContentWidth(),
            $v_2 = this.$1R_1.getContainerWidth();
        return !(-$v_0 >= $v_1 - $v_2)
    },
    $4w_1: function() {
        var $v_0 = this.$1R_1.getCurrentViewportMargin();
        return $v_0 < 0
    },
    scrollToSelectedElement: function() {
        var $v_0 = this.$1l_1.getScrollableElementIndex(this.getSelectedNode());
        $v_0 >= 0 && this.$3u_1.scrollBy($v_0)
    },
    getContent: function(navigationNodes) {
        var $v_0 = this.scrollableContentProvider(navigationNodes), $v_1 = this.$2t_1.decorateContent($v_0);
        return $v_1
    },
    render: function(navigationNodes) {
        var $v_0 = Mscrm.NavigationNodesBasedControl.prototype.render.call(this, navigationNodes);
        $v_0.QueueUntilNotified(this.$$d_$56_1);
        return $v_0
    },
    hide: function() {
        $P_CRM(window).unbind("resize", this.$$d_$4n_1);
        this.$2v_1.detachScrollEventHandlers();
        var $v_0 = Mscrm.NavigationNodesBasedControl.prototype.hide.call(this);
        return $v_0
    },
    $4n_1: function($p0) {
        $P_CRM("#" + this.$R_1.scrollableContainerId).width(this.$2t_1.calculateScrollableContainerWidth());
        this.$4C_1()
    },
    $56_1: function($p0) {
        this.scrollToSelectedElement();
        var $$t_2 = this;
        this.$2v_1.attachScrollEventHandlers(function($p1_0) { $$t_2.$2E_1.scrollBy($p1_0) });
        this.$4C_1();
        $P_CRM(window).bind("resize", this.$$d_$4n_1)
    },
    $6A_1: function() {
        var $v_0 = false;
        $v_0 = window.LOCID_UI_DIR === "RTL";
        return $v_0
    }
};
Mscrm.NavigationNodesBasedControl = function(containerControlFactory) {
    this.$$d_$54_0 = Function.createDelegate(this, this.$54_0);
    this.$$d_$53_0 = Function.createDelegate(this, this.$53_0);
    this.$$d_$51_0 = Function.createDelegate(this, this.$51_0);
    this.$$d_$52_0 = Function.createDelegate(this, this.$52_0);
    if (IsNull(containerControlFactory)) throw Error.argumentNull("containerControlFactory");
    this.$H_0 = new Sys.EventHandlerList;
    this.$3R_0 = containerControlFactory
};
Mscrm.NavigationNodesBasedControl.prototype = {
    $3R_0: null,
    $A_0: null,
    $r_0: false,
    $1u_0: null,
    $1S_0: null,
    $1O_0: null,
    $V_0: null,
    $H_0: null,
    $16_0: true,
    get_contentProvider: function() { return this.$V_0 },
    set_contentProvider: function(value) {
        this.$V_0 = value;
        return value
    },
    get_animateOnHide: function() { return this.$16_0 },
    set_animateOnHide: function(value) {
        this.$16_0 = value;
        return value
    },
    add_shown: function(value) { this.$H_0.addHandler("Shown", value) },
    remove_shown: function(value) { this.$H_0.removeHandler("Shown", value) },
    add_hidden: function(value) { this.$H_0.addHandler("Hidden", value) },
    remove_hidden: function(value) { this.$H_0.removeHandler("Hidden", value) },
    add_showing: function(value) { this.$H_0.addHandler("Showing", value) },
    remove_showing: function(value) { this.$H_0.removeHandler("Showing", value) },
    add_hiding: function(value) { this.$H_0.addHandler("Hiding", value) },
    remove_hiding: function(value) { this.$H_0.removeHandler("Hiding", value) },
    unselectNodes: function() { this.$1O_0 = null },
    selectNode: function(node) { this.$1O_0 = node.Id },
    getSelectedNode: function() { return this.$1O_0 },
    render: function(navigationNodes) {
        if (IsNull(navigationNodes)) throw Error.argumentNull("navigationNodes");
        this.$r_0 && this.clear();
        this.$1E_0("Showing");
        this.$1u_0 = new Mscrm.ExecutionCompletedNotifier;
        var $v_0 = this.$1u_0;
        this.$A_0 = this.$3R_0.createControlContainer();
        this.$A_0.add_hiding(this.$$d_$52_0);
        this.$A_0.add_hidden(this.$$d_$51_0);
        this.$A_0.add_showing(this.$$d_$53_0);
        this.$A_0.add_shown(this.$$d_$54_0);
        var $v_1 = this.getContent(navigationNodes);
        this.$A_0.setContent($v_1);
        this.$A_0.show();
        this.$r_0 = true;
        return $v_0
    },
    hide: function() {
        if (this.$1S_0) return null;
        if (!this.$r_0) return null;
        this.$1S_0 = new Mscrm.ExecutionCompletedNotifier;
        var $v_0 = this.$1S_0;
        this.$A_0.set_animateOnHide(this.$16_0);
        this.$A_0.hide();
        return $v_0
    },
    $53_0: function($p0, $p1) { this.$1E_0("Showing") },
    $54_0: function($p0, $p1) {
        if (!IsNull(this.$1u_0)) {
            this.$1u_0.NotifyCompleted();
            this.$1u_0 = null
        }
        this.$1E_0("Shown")
    },
    $52_0: function($p0, $p1) { this.$1E_0("Hiding") },
    $51_0: function($p0, $p1) {
        if (!IsNull(this.$1S_0)) {
            this.$1S_0.NotifyCompleted();
            this.$1S_0 = null
        }
        this.clear();
        this.$1E_0("Hidden")
    },
    $1E_0: function($p0) {
        var $v_0 = this.$H_0.getHandler($p0);
        $v_0 && $v_0(this, Sys.EventArgs.Empty)
    },
    clear: function() {
        if (!this.$r_0) return;
        if (this.$A_0) {
            this.$A_0.remove_hiding(this.$$d_$52_0);
            this.$A_0.remove_hidden(this.$$d_$51_0);
            this.$A_0.remove_showing(this.$$d_$53_0);
            this.$A_0.remove_shown(this.$$d_$54_0);
            this.$A_0.dispose();
            this.$A_0 = null
        }
        this.$r_0 = false
    }
};
Mscrm
    .FlyOutControlContainer = function(rootElementId, flyOutStyleClass, animationHandler, dismissHandler, showHandler) {
        this.$$d_$6C_1 = Function.createDelegate(this, this.$6C_1);
        this.$$d_$6D_1 = Function.createDelegate(this, this.$6D_1);
        this.$$d_$66_1 = Function.createDelegate(this, this.$66_1);
        Mscrm.FlyOutControlContainer.initializeBase(this);
        if (isNullOrEmptyString(rootElementId)) throw Error.argumentNull("rootElementId");
        if (isNullOrEmptyString(flyOutStyleClass)) throw Error.argumentNull("flyoutStyleClass");
        if (IsNull(animationHandler)) throw Error.argumentNull("animationHandler");
        this.$b_1 = rootElementId;
        this.$3V_1 = flyOutStyleClass;
        this.$25_1 = animationHandler;
        this.$2Y_1 = !dismissHandler ? false : true;
        this.$j_1 = dismissHandler;
        this.$2x_1 = !showHandler ? false : true;
        this.$1v_1 = showHandler
    };
Mscrm.FlyOutControlContainer.prototype = {
    $b_1: null,
    $3V_1: null,
    $25_1: null,
    $1q_1: false,
    $1p_1: false,
    $F_1: null,
    $17_1: null,
    $1T_1: null,
    $j_1: null,
    $2Y_1: false,
    $1v_1: null,
    $2x_1: false,
    setContent: function(content) { this.$1T_1 = content },
    $66_1: function($p0) {
        $p0.preventDefault();
        $p0.stopPropagation()
    },
    $6D_1: function($p0) {
        var $v_0 = $P_CRM("#" + this.$b_1).children().last();
        if ($v_0.length > 0)
            if ($p0.pageY >= $v_0.position().top + $v_0.height())
                if (IsNull(this.$j_1)) this.hide();
                else this.$j_1($p0)
    },
    $6C_1: function($p0) {
        var $v_0 = $P_CRM("#" + this.$b_1).children().last();
        if ($v_0.length > 0) if ($p0.pageY <= $v_0.position().top + $v_0.height()) !IsNull(this.$j_1) && this.$1v_1($p0)
    },
    show: function() {
        this.$1q_1 && this.$3z_1();
        this.onContainerShowing();
        var $v_0 = String.format('<div class="{0}"></div>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3V_1)),
            $v_1 = $P_CRM("#" + this.$b_1);
        this.$F_1 = $P_CRM($v_0);
        this.$F_1.hide();
        this.$17_1 = $P_CRM(this.$1T_1);
        this.$F_1.append(this.$17_1);
        $v_1.append(this.$F_1);
        this.$F_1.unbind("click", this.$$d_$66_1);
        this.$F_1.bind("click", this.$$d_$66_1);
        if (this.$2Y_1) {
            this.$F_1.unbind("mouseout", this.$$d_$6D_1);
            this.$F_1.bind("mouseout", this.$$d_$6D_1)
        }
        if (this.$2x_1) {
            this.$F_1.unbind("mouseenter", this.$$d_$6C_1);
            this.$F_1.bind("mouseenter", this.$$d_$6C_1)
        }
        if (this.$1q_1) {
            this.$17_1.hide();
            this.$F_1.show();
            Mscrm.Utilities.addControlMarker(this.$b_1,
                "NavBarFlyout",
                "StartSwitchContentAnimationTimestamp",
                (new Date).getTime().toString());
            var $$t_2 = this;
            this.$25_1.switchContentAnimation(this.$17_1,
                function() {
                    $$t_2.onContainerShown();
                    Mscrm.Utilities.addControlMarker($$t_2.$b_1,
                        "NavBarFlyout",
                        "FinishSwitchContentAnimationTimestamp",
                        (new Date).getTime().toString())
                })
        } else {
            Mscrm.Utilities.addControlMarker(this.$b_1,
                "NavBarFlyout",
                "StartShowAnimationTimestamp",
                (new Date).getTime().toString());
            var $$t_3 = this;
            this.$25_1.showAnimation(this.$F_1,
                function() {
                    $$t_3.onContainerShown();
                    Mscrm.Utilities.addControlMarker($$t_3.$b_1,
                        "NavBarFlyout",
                        "FinishShowAnimationTimestamp",
                        (new Date).getTime().toString())
                });
            this.$1q_1 = true
        }
    },
    hide: function() {
        if (!this.$1q_1) {
            this.onContainerHiding();
            this.onContainerHidden();
            return
        }
        this.onContainerHiding();
        this.$F_1.unbind("click", this.$$d_$66_1);
        this.$2Y_1 && this.$F_1.unbind("mouseout", this.$$d_$6D_1);
        this.$2x_1 && this.$F_1.unbind("mouseenter", this.$$d_$6C_1);
        Mscrm.Utilities.addControlMarker(this.$b_1,
            "NavBarFlyout",
            "StartCloseAnimationTimestamp",
            (new Date).getTime().toString());
        var $$t_0 = this;
        this.$4z_1(function() {
            $$t_0.onContainerHidden();
            $$t_0.$1q_1 = false;
            Mscrm.Utilities.addControlMarker($$t_0.$b_1,
                "NavBarFlyout",
                "FinishCloseAnimationTimestamp",
                (new Date).getTime().toString());
            $$t_0.$3z_1()
        })
    },
    $4z_1: function($p0) {
        if (this.$16_0) this.$25_1.closeAnimation(this.$F_1, $p0);
        else {
            this.$F_1.hide();
            $p0()
        }
    },
    $3z_1: function() {
        if (this.$17_1) {
            this.$17_1.find("*").andSelf().unbind().off();
            this.$17_1.remove();
            this.$17_1 = null
        }
        if (this.$F_1) {
            this.$F_1.find("*").andSelf().unbind().off();
            this.$F_1.remove();
            this.$F_1 = null
        }
    },
    dispose: function() {
        if (this.$1p_1) return;
        if (this.$1T_1) {
            this.$1T_1.find("*").andSelf().unbind().off();
            this.$1T_1.remove();
            this.$1T_1 = null
        }
        this.$3z_1();
        this.$1p_1 = true
    }
};
Mscrm.DomBasedControlContainer = function(controlContainerId) {
    Mscrm.DomBasedControlContainer.initializeBase(this);
    if (isNullOrEmptyString(controlContainerId)) throw Error.argumentNull("controlContainerId");
    this.$3S_1 = controlContainerId
};
Mscrm.DomBasedControlContainer.prototype = {
    $3S_1: null,
    $1I_1: null,
    $1p_1: false,
    setContent: function(content) {
        this.$1I_1 && this.$1I_1.remove();
        this.$1I_1 = content;
        $P_CRM("#" + this.$3S_1).append(content)
    },
    $5H_1: function() { this.$1I_1.find("*").andSelf().unbind().off() },
    dispose: function() {
        if (this.$1p_1) return;
        if (this.$1I_1) {
            this.$5H_1();
            this.$1I_1.remove();
            this.$1I_1 = null
        }
        Mscrm.ControlContainer.prototype.dispose.call(this);
        this.$1p_1 = true
    }
};
Mscrm.ScrollableContentDescriptor = function(scrollableElementSelector) {
    if (isNullOrEmptyString(scrollableElementSelector)) throw Error.argumentNull("scrollableElementSelector");
    this.$2s_0 = scrollableElementSelector
};
Mscrm.ScrollableContentDescriptor.prototype = {
    $2s_0: null,
    getScrollableElementIndex: function(selectedElementId) {
        if (isNullOrEmptyString(selectedElementId)) return -1;
        for (var $v_0 = "#" + selectedElementId, $v_1 = $P_CRM(this.$3G_0()), $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++
        ) if ($P_CRM($v_0, $v_1[$v_2]).length > 0) return $v_2;
        return -1
    },
    getTotalContentWidth: function() {
        var $v_0 = 0;
        $(this.$3G_0()).each(function() { $v_0 += $(this).outerWidth(true) });
        return $v_0
    },
    getElementWidths: function() {
        var $v_0 = [];
        $(this.$3G_0()).each(function() { $v_0.push($(this).outerWidth(true)) });
        return $v_0
    },
    getElementOffset: function(index) { return $P_CRM(this.$3G_0()).get(index).offsetLeft },
    $3G_0: function() {
        var $v_0 = String.format("{0} .{1}", this.$2s_0, "nav-section");
        return $P_CRM($v_0).length > 0 ? $v_0 : this.$2s_0
    }
};
Mscrm.ScrollByPageScrollingStrategy = function(contentDescriptor, containerDescriptor, scroller) {
    Mscrm.ScrollByPageScrollingStrategy.initializeBase(this, [contentDescriptor, containerDescriptor, scroller])
};
Mscrm.ScrollByPageScrollingStrategy.prototype = {
    scrollBy: function(offset) {
        if (!offset) return;
        var $v_0 = this._contentDescriptor.getTotalContentWidth(),
            $v_1 = -this._containerDescriptor.getCurrentViewportMargin(),
            $v_2,
            $v_3 = this._contentDescriptor.getElementWidths(),
            $v_4 = this._containerDescriptor.getPageOffsets($v_3),
            $v_5 = this.getPageWithElement($v_4, $v_1);
        if (offset > 0) {
            $v_2 = $v_4[Math.min($v_5 + 1, $v_4.length - 1)];
            if ($v_2 >= $v_0) return;
            var $v_6 = $v_3[$v_3.length - 1];
            if ($v_2 > $v_0 - $v_6) $v_2 = $v_0 - $v_6
        } else {
            if ($v_1 <= 0) return;
            $v_2 = $v_4[Math.max($v_5 - 1, 0)];
            if ($v_2 < 0) $v_2 = 0
        }
        $v_2 !== $v_1 && this._scroller.scroll(-$v_2)
    }
};
Mscrm.ScrollingStrategy = function(contentDescriptor, containerDescriptor, scroller) {
    if (IsNull(contentDescriptor)) throw Error.argumentNull("contentDescriptor");
    if (IsNull(containerDescriptor)) throw Error.argumentNull("containerDescriptor");
    if (IsNull(scroller)) throw Error.argumentNull("scroller");
    this._contentDescriptor = contentDescriptor;
    this._containerDescriptor = containerDescriptor;
    this._scroller = scroller
};
Mscrm.ScrollingStrategy.prototype = {
    _contentDescriptor: null,
    _containerDescriptor: null,
    _scroller: null,
    getPageWithElement: function(pageOffsets, elementOffset) {
        for (var $v_0 = 0;
            $v_0 < pageOffsets.length - 1;
            $v_0++
        ) if (pageOffsets[$v_0] <= elementOffset && elementOffset < pageOffsets[$v_0 + 1]) return $v_0;
        return pageOffsets.length - 1
    }
};
Mscrm.ScrollToPageWithProvidedItemScrollingStrategy = function(contentDescriptor, containerDescriptor, scroller) {
    Mscrm.ScrollToPageWithProvidedItemScrollingStrategy
        .initializeBase(this, [contentDescriptor, containerDescriptor, scroller])
};
Mscrm.ScrollToPageWithProvidedItemScrollingStrategy.prototype = {
    scrollBy: function(offset) {
        if (!offset) return;
        var $v_0 = this._contentDescriptor.getTotalContentWidth(),
            $v_1 = this._contentDescriptor.getElementWidths(),
            $v_2 = this._containerDescriptor.getPageOffsets($v_1),
            $v_3 = this._contentDescriptor.getElementOffset(offset),
            $v_4 = this.getPageWithElement($v_2, $v_3),
            $v_5 = $v_2[$v_4],
            $v_6 = $v_1[$v_1.length - 1];
        if ($v_5 < $v_0) {
            if ($v_5 > $v_0 - $v_6) $v_5 = $v_0 - $v_6;
            -$v_5 !== this._containerDescriptor.getCurrentViewportMargin() && this._scroller.scroll(-$v_5)
        }
    }
};
Mscrm.AnimatedMarginScroller = function(viewportContainerId, rightToLeft) {
    if (isNullOrEmptyString(viewportContainerId)) throw Error.argumentNull("viewportContainerId");
    this.$1y_0 = String.format("#{0}", viewportContainerId);
    this.$2U_0 = {};
    this.$i_0 = rightToLeft
};
Mscrm.AnimatedMarginScroller.prototype = {
    $1y_0: null,
    $2u_0: null,
    $2V_0: false,
    $2U_0: null,
    $i_0: false,
    scroll: function(value) {
        if (this.$2V_0) return;
        this.$2V_0 = true;
        var $v_0 = $P_CRM(this.$1y_0);
        this.$2U_0[this.$i_0 ? "margin-right" : "margin-left"] = value;
        var $$t_2 = this;
        $v_0.animate(this.$2U_0,
            400,
            "swing",
            function() {
                $$t_2.$2V_0 = false;
                !IsNull($$t_2.$2u_0) && $$t_2.$2u_0()
            })
    },
    setScrollingFinishedEventHandler: function(handler) { this.$2u_0 = handler }
};
Mscrm.ScrollableContainerDescriptor = function(scrollableContainerId, viewportContainerId, rightToLeft) {
    if (isNullOrEmptyString(scrollableContainerId)) throw Error.argumentNull("scrollableContainerId");
    if (isNullOrEmptyString(viewportContainerId)) throw Error.argumentNull("viewportContainerId");
    this.$3p_0 = String.format("#{0}", scrollableContainerId);
    this.$1y_0 = String.format("#{0}", viewportContainerId);
    this.$i_0 = rightToLeft
};
Mscrm.ScrollableContainerDescriptor.prototype = {
    $3p_0: null,
    $1y_0: null,
    $i_0: false,
    getContainerWidth: function() { return $P_CRM(this.$3p_0).outerWidth(false) },
    getCurrentViewportMargin: function() {
        var $v_0 = $P_CRM(this.$1y_0).css(this.$i_0 ? "margin-right" : "margin-left");
        if (isNullOrEmptyString($v_0) || $v_0 === "auto") return 0;
        return parseInt($v_0)
    },
    getPageOffsets: function(elementWidths) {
        for (var $v_0 = [], $v_1 = 0, $v_2 = 0, $v_3 = 0, $v_4 = 0; $v_4 < elementWidths.length; $v_4++) {
            if ($v_2 + elementWidths[$v_4] >= this.getContainerWidth()) {
                $v_0[$v_3++] = $v_1;
                $v_1 = $v_1 + $v_2;
                $v_2 = 0
            }
            $v_2 += elementWidths[$v_4]
        }
        $v_0[$v_3] = $v_1;
        return $v_0
    }
};
Mscrm.ControlIdProvider = function() {};
Mscrm.ControlIdProvider.prototype = {
    scrollableContainerId: null,
    viewportContainerId: null,
    scrollLeftButtonId: null,
    scrollRightButtonId: null
};
Mscrm.ModalOverlayDecorator = function($p0, $p1) {
    if (IsNull($p0)) throw Error.argumentNull("dismissHandler");
    if (isNullOrEmptyString($p1)) throw Error.argumentNull("overlayId");
    this.$j_0 = $p0;
    this.$2m_0 = $p1
};
Mscrm.ModalOverlayDecorator.prototype = {
    $j_0: null,
    $2m_0: null,
    render: function($p0, $p1) {
        var $v_0 = $p0.render($p1);
        if (!IsNull($v_0)) {
            var $$t_5 = this;
            $v_0.QueueUntilNotified(function($p1_0) {
                var $v_1 = $P_CRM($$t_5.$2m_0);
                if ($v_1.css("display") === "none") {
                    $v_1.show();
                    $v_1.bind("click", $$t_5.$j_0)
                }
                setPerfMarkerTimestamp("GlobalMRUFlyoutLoadEndTime")
            })
        }
        return $v_0
    },
    hideOverlay: function() {
        var $v_0 = $P_CRM(this.$2m_0);
        if ($v_0.css("display") === "block") {
            $v_0.unbind("click", this.$j_0);
            $v_0.hide()
        }
    }
};
Mscrm.BlockInputHandler = function() {};
Mscrm.BlockInputHandler.prototype = {
    $1t_0: 0,
    blockInputUntilFinished: function(operation) {
        if (IsNull(operation)) return;
        this.$1t_0++;
        var $$t_2 = this;
        operation.QueueUntilNotified(function($p1_0) { $$t_2.$1t_0-- })
    },
    blockInputUntilFinishedAndDelay: function(operation, additionalDelay) {
        if (IsNull(operation)) return;
        this.$1t_0++;
        var $$t_3 = this;
        operation.QueueUntilNotified(function($p1_0) {
            window.setTimeout(function() { $$t_3.$1t_0-- }, additionalDelay)
        })
    },
    isInputBlocked: function() { return this.$1t_0 > 0 }
};
Mscrm.NavigationTree = function(navigationStructureProvider) {
    if (IsNull(navigationStructureProvider)) throw Error.argumentNull("navigationStructureProvider");
    this.$3j_0 = navigationStructureProvider
};
Mscrm.NavigationTree.prototype = {
    $3j_0: null,
    $2e_0: null,
    updateNavigationStructure: function() {
        var $v_0 = this.$3j_0.GetNavigationStructure(), $$t_4 = this;
        $v_0.QueueUntilNotified(function($p1_0) {
            if (IsNull($p1_0)) throw Error.invalidOperation();
            var $v_1 = $p1_0, $v_2 = $v_1.Children;
            if (IsNull($v_2) || !$v_2.length) throw Error.invalidOperation();
            $$t_4.$2e_0 = $v_1
        });
        return $v_0
    },
    getRootNode: function() { return this.$2e_0 },
    getAncestorsById: function(nodeId) {
        if (isNullOrEmptyString(nodeId)) throw Error.argumentNull("nodeId");
        var $v_0 = [], $v_1 = this.getNodeById(nodeId);
        if (IsNull($v_1) || isNullOrEmptyString($v_1.ParentId)) return $v_0;
        var $v_2 = this.getNodeById($v_1.ParentId);
        while (!IsNull($v_2)) {
            $v_0.push($v_2);
            $v_2 = this.getNodeById($v_2.ParentId)
        }
        return $v_0.reverse()
    },
    getNodeById: function(nodeId) {
        var $v_0 = [], $v_1 = this.$2e_0;
        while (!IsNull($v_1)) {
            if ($v_1.Id === nodeId) return $v_1;
            if (!IsNull($v_1.Children))
                for (var $v_2 = 0; $v_2 < $v_1.Children.length; $v_2++) $v_0.push($v_1.Children[$v_2]);
            $v_1 = $v_0.shift()
        }
        return null
    },
    isLeaf: function(navigationNode) {
        if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
        return IsNull(navigationNode.Children) || !navigationNode.Children.length
    },
    cloneNode: function(navigationNode) {
        if (IsNull(navigationNode)) throw Error.argumentNull("navigationNode");
        var $v_0 = function() {
            function NodeWrapper() {}

            return function(node) {
                NodeWrapper.prototype = node;
                return new NodeWrapper
            }
        }();
        return $v_0(navigationNode)
    }
};
Mscrm.ExecutionCompletedNotifier = function() { this.$1J_0 = [] };
Mscrm.ExecutionCompletedNotifier.prototype = {
    $1J_0: null,
    $3Z_0: false,
    $3U_0: null,
    QueueUntilNotified: function(executionCompletedHandler) {
        if (IsNull(executionCompletedHandler)) throw Error.argumentNull("executionCompletedHandler");
        this.$1J_0.push(executionCompletedHandler);
        this.$3Z_0 && this.NotifyCompleted(this.$3U_0)
    },
    NotifyCompleted: function(result) {
        if (!IsNull(this.$1J_0) && this.$1J_0.length > 0) {
            var $v_0 = this.$1J_0.pop();
            while ($v_0) {
                $v_0(result);
                $v_0 = this.$1J_0.pop()
            }
        }
        Array.clear(this.$1J_0);
        this.$3U_0 = result;
        this.$3Z_0 = true
    }
};
Mscrm.ScrollInputHandler = function(containerId) {
    this.$$d_$6b_0 = Function.createDelegate(this, this.$6b_0);
    this.$$d_$6d_0 = Function.createDelegate(this, this.$6d_0);
    this.$$d_$4v_0 = Function.createDelegate(this, this.$4v_0);
    this.$$d_$6c_0 = Function.createDelegate(this, this.$6c_0);
    if (isNullOrEmptyString(containerId)) throw Error.argumentNull("containerId");
    this.$1W_0 = null;
    this.$1c_0 = null;
    this.$1a_0 = null;
    this.$1b_0 = null;
    this.$w_0 = "#" + containerId
};
Mscrm.ScrollInputHandler.prototype = {
    $1W_0: null,
    $1c_0: null,
    $1a_0: null,
    $1b_0: null,
    $w_0: null,
    $2K_0: 0,
    $29_0: 0,
    attachScrollEventHandlers: function(handler) {
        if (IsNull(handler)) throw Error.argumentNull("handler");
        this.detachScrollEventHandlers();
        this.$1W_0 = this.$5A_0(handler);
        $P_CRM(this.$w_0).bind("onmousewheel mousewheel DOMMouseScroll", this.$1W_0);
        this.$1c_0 = this.$5E_0(handler);
        $P_CRM(this.$w_0).bind("touchstart MSPointerDown", this.$1c_0);
        this.$1a_0 = this.$5D_0(handler);
        $P_CRM(this.$w_0).bind("touchend MSPointerUp", this.$1a_0);
        if (Mscrm.Utilities.isChrome()) {
            this.$1b_0 = this.$$d_$6c_0;
            $P_CRM(this.$w_0).bind("touchmove", this.$1b_0)
        }
    },
    detachScrollEventHandlers: function() {
        if (!IsNull(this.$1W_0)) {
            $P_CRM(this.$w_0).unbind("onmousewheel mousewheel DOMMouseScroll", this.$1W_0);
            this.$1W_0 = null
        }
        if (!IsNull(this.$1c_0)) {
            $P_CRM(this.$w_0).unbind("touchstart MSPointerDown", this.$1c_0);
            this.$1c_0 = null
        }
        if (!IsNull(this.$1a_0)) {
            $P_CRM(this.$w_0).unbind("touchend MSPointerUp", this.$1a_0);
            this.$1a_0 = null
        }
        if (!IsNull(this.$1b_0)) {
            $P_CRM(this.$w_0).unbind("touchmove", this.$1b_0);
            this.$1b_0 = null
        }
    },
    $40_0: function($p0, $p1) {
        var $$t_3 = this;
        return function($p1_0) { $p0($p1($p1_0)) }
    },
    $5A_0: function($p0) { return this.$40_0($p0, this.$$d_$4v_0) },
    $5E_0: function($p0) { return this.$40_0($p0, this.$$d_$6d_0) },
    $5D_0: function($p0) { return this.$40_0($p0, this.$$d_$6b_0) },
    $4v_0: function($p0) {
        if (IsNull($p0)) return 0;
        if (!IsNull($p0.wheelData)) return $p0.wheelData > 0 ? -1 : 1;
        if (!IsNull($p0.detail)) return $p0.detail > 0 ? 1 : -1;
        if (!IsNull($p0
                .originalEvent) &&
            !IsNull($p0.originalEvent.wheelDelta)) return $p0.originalEvent.wheelDelta > 0 ? -1 : 1;
        if (!IsNull($p0
                .originalEvent) &&
            !IsNull($p0.originalEvent.detail)) return $p0.originalEvent.detail > 0 ? 1 : -1;
        return 0
    },
    $6d_0: function($p0) {
        if (IsNull($p0)) return 0;
        if (!IsNull($p0.originalEvent.touches)) this.$2K_0 = $p0.originalEvent.touches[0].pageX;
        else if (!IsNull($p0.originalEvent.pageX)) this.$2K_0 = $p0.originalEvent.pageX;
        return 0
    },
    $6b_0: function($p0) {
        if (IsNull($p0)) return 0;
        if (!IsNull($p0.originalEvent.changedTouches)) this.$29_0 = $p0.originalEvent.changedTouches[0].pageX;
        else if (!IsNull($p0.originalEvent.pageX)) this.$29_0 = $p0.originalEvent.pageX;
        if (this.$29_0 < this.$2K_0) return 1;
        else if (this.$29_0 > this.$2K_0) return -1;
        return 0
    },
    $6c_0: function($p0) { !IsNull($p0) && $p0.preventDefault() }
};
Mscrm.ScrollInFlyOutContentDecorator = function(controlIdProvider,
    scrollLeftButtonClickHandler,
    scrollRightButtonClickHandler,
    rightToLeft) {
    if (IsNull(controlIdProvider)) throw Error.argumentNull("controlIdProvider");
    if (isNullOrEmptyString(controlIdProvider
        .scrollableContainerId)) throw Error.argumentNull("scrollLeftButtonClickHandler.ScrollableContainerId");
    if (isNullOrEmptyString(controlIdProvider
        .viewportContainerId)) throw Error.argumentNull("scrollLeftButtonClickHandler.ViewportContainerId");
    if (isNullOrEmptyString(controlIdProvider
        .scrollLeftButtonId)) throw Error.argumentNull("scrollLeftButtonClickHandler.ScrollLeftButtonId");
    if (isNullOrEmptyString(controlIdProvider
        .scrollRightButtonId)) throw Error.argumentNull("scrollLeftButtonClickHandler.ScrollRightButtonId");
    this.$3q_0 = new Mscrm.ScrollLeftButtonBuilder(controlIdProvider.scrollLeftButtonId,
        scrollLeftButtonClickHandler,
        rightToLeft);
    this.$3s_0 = new Mscrm.ScrollRightButtonBuilder(controlIdProvider.scrollRightButtonId,
        scrollRightButtonClickHandler,
        rightToLeft);
    this.$3o_0 = new Mscrm.ScrollableContainerBuilder(controlIdProvider.scrollableContainerId);
    this.$3y_0 = new Mscrm.ViewportContainerBuilder(controlIdProvider.viewportContainerId)
};
Mscrm.ScrollInFlyOutContentDecorator.prototype = {
    $3q_0: null,
    $3s_0: null,
    $3o_0: null,
    $3y_0: null,
    decorateContent: function(content) {
        if (IsNull(content)) throw Error.argumentNull("content");
        var $v_0 = this.calculateScrollableContainerWidth(),
            $v_1 = this.$3q_0.build(),
            $v_2 = this.$3s_0.build(),
            $v_3 = this.$3o_0.build(),
            $v_4 = this.$3y_0.build();
        $v_1.hide();
        $v_2.hide();
        $v_3.width($v_0);
        $v_4.append(content);
        $v_3.append($v_4);
        var $v_5 = $P_CRM('<div class="nav-scrl">');
        $v_5.append($v_1);
        $v_5.append($v_2);
        $v_5.append($v_3);
        return $v_5
    },
    calculateScrollableContainerWidth: function() {
        var $v_0 = $P_CRM(window).width(), $v_1 = 24;
        return $v_0 - 2 * $v_1
    }
};
Mscrm.TabControl = function(tabControlContainerId,
    createNodeClickedHandler,
    createNodeDropDownClickedHandler,
    hoverEventHandler) {
    this.$$d_$50_0 = Function.createDelegate(this, this.$50_0);
    this.$$d_$55_0 = Function.createDelegate(this, this.$55_0);
    if (isNullOrEmptyString(tabControlContainerId)) throw Error.argumentNull("tabControlContainerId");
    this.$0_0 = hoverEventHandler;
    this.$32_0 = tabControlContainerId;
    this.$33_0 = "#" + tabControlContainerId;
    this.$7_0 = createNodeClickedHandler;
    this.$p_0 = createNodeDropDownClickedHandler
};
Mscrm.TabControl.prototype = {
    $A_0: null,
    $33_0: null,
    $32_0: null,
    $1O_0: null,
    $r_0: false,
    $7_0: null,
    get_createNodeClickedHandler: function() { return this.$7_0 },
    $p_0: null,
    get_createNodeDropDownClickedHandler: function() { return this.$p_0 },
    $P_0: null,
    $W_0: null,
    $v_0: null,
    $c_0: null,
    $M_0: null,
    $19_0: null,
    $d_0: null,
    $12_0: null,
    $1Z_0: null,
    $Q_0: null,
    $h_0: null,
    $e_0: null,
    $Y_0: null,
    $1H_0: null,
    $q_0: null,
    $Z_0: null,
    $a_0: null,
    $y_0: null,
    $m_0: null,
    $0_0: null,
    $3X_0: null,
    get_hoverEventHandler: function() { return this.$0_0 },
    $1L_0: null,
    get_rootNode: function() { return this.$P_0 },
    set_rootNode: function(value) {
        this.$P_0 = value;
        return value
    },
    get_homeNode: function() { return this.$W_0 },
    set_homeNode: function(value) {
        this.$W_0 = value;
        return value
    },
    get_areaNode: function() { return this.$v_0 },
    set_areaNode: function(value) {
        this.$v_0 = value;
        return value
    },
    get_subareaNode: function() { return this.$c_0 },
    set_subareaNode: function(value) {
        this.$c_0 = value;
        return value
    },
    get_recordNode: function() { return this.$M_0 },
    set_recordNode: function(value) {
        this.$M_0 = value;
        return value
    },
    get_searchNode: function() { return this.$Q_0 },
    set_searchNode: function(value) {
        this.$Q_0 = value;
        return value
    },
    get_globalQuickCreateNode: function() { return this.$19_0 },
    set_globalQuickCreateNode: function(value) {
        this.$19_0 = value;
        return value
    },
    get_advFindNode: function() { return this.$d_0 },
    set_advFindNode: function(value) {
        this.$d_0 = value;
        return value
    },
    get_userInfoNode: function() { return this.$12_0 },
    set_userInfoNode: function(value) {
        this.$12_0 = value;
        return value
    },
    get_settingsNode: function() { return this.$1Z_0 },
    set_settingsNode: function(value) {
        this.$1Z_0 = value;
        return value
    },
    get_helpNode: function() { return this.$h_0 },
    set_helpNode: function(value) {
        this.$h_0 = value;
        return value
    },
    get_backNode: function() { return this.$e_0 },
    set_backNode: function(value) {
        this.$e_0 = value;
        return value
    },
    get_globalMruNode: function() { return this.$Y_0 },
    set_globalMruNode: function(value) {
        this.$Y_0 = value;
        return value
    },
    get_appSwitcherNode: function() { return this.$1H_0 },
    set_appSwitcherNode: function(value) {
        this.$1H_0 = value;
        return value
    },
    get_currentUserName: function() { return this.$q_0 },
    set_currentUserName: function(value) {
        this.$q_0 = value;
        return value
    },
    $1g_0: null,
    get_currentUserId: function() { return this.$1g_0 },
    set_currentUserId: function(value) {
        this.$1g_0 = value;
        return value
    },
    get_organizationFriendlyName: function() { return this.$Z_0 },
    set_organizationFriendlyName: function(value) {
        this.$Z_0 = value;
        return value
    },
    get_organizationUniqueName: function() { return this.$a_0 },
    set_organizationUniqueName: function(value) {
        this.$a_0 = value;
        return value
    },
    get_currentUserProfileImageUrl: function() { return this.$y_0 },
    set_currentUserProfileImageUrl: function(value) {
        this.$y_0 = value;
        return value
    },
    get_logoImageUrl: function() { return this.$m_0 },
    set_logoImageUrl: function(value) {
        this.$m_0 = value;
        return value
    },
    $5C_0: function() {
        var $v_0 = this.createLeftSideBuilders(),
            $v_1 = this.createRightSideBuilders(),
            $v_2 = new Mscrm.TabGroupBuilder($v_0, new Mscrm.TabFillerBuilder(this.$0_0), $v_1);
        return $v_2.build()
    },
    createLeftSideBuilders: function() {
        var $v_0 = [], $v_1 = 0;
        if (this.$1H_0)
            $v_0[$v_1++] = new Mscrm
                .AppSwitcherButtonBuilder(this.$1H_0.Id,
                    this.$1H_0.Caption,
                    Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$1H_0),
                    this.$0_0);
        if (this.$P_0) {
            if (isNullOrEmptyString(this.$m_0))
                $v_0[$v_1++] = new Mscrm
                    .TabLogoTextButtonBuilder(this.$P_0.Caption,
                        Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$P_0),
                        this.$0_0);
            else
                $v_0[$v_1++] = new Mscrm
                    .TabLogoImageThemeBuilder(this.$m_0,
                        this.$P_0.Caption,
                        Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$P_0),
                        this.$0_0);
            $v_0[$v_1++] = new Mscrm.TabHomeButtonBuilder(this.$P_0.Caption,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$P_0),
                this.$0_0)
        }
        if (this.$v_0) {
            $v_0[$v_1++] = new Mscrm.TabButtonSplitBuilder(this.$v_0.Id,
                this.$v_0.Caption,
                this.$v_0.Caption,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$v_0),
                Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$v_0),
                this.$0_0,
                "areanode");
            if (this.$c_0)
                if (Mscrm.NavBar.$4b(this.$c_0))
                    $v_0[$v_1++] = new Mscrm
                        .TabButtonSplitBuilder(this.$c_0.Id,
                            this.$c_0.Caption,
                            this.$c_0.Caption,
                            Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$c_0),
                            Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$c_0),
                            this.$0_0,
                            "subareanode");
                else
                    $v_0[$v_1++] = new Mscrm
                        .TabTextButtonBuilder(this.$c_0.Id,
                            this.$c_0.Caption,
                            Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$c_0),
                            this.$0_0)
        }
        if (this.$M_0) $v_0[$v_1++] = this.recordNodeBuilder();
        return $v_0
    },
    recordNodeBuilder: function() {
        if (!this.$M_0) return null;
        if (this.$M_0
            .Children &&
            this.$M_0.Children.length > 0)
            return new Mscrm.TabButtonSplitBuilder(this.$M_0.Id,
                this.$M_0.Caption,
                this.$M_0.Caption,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$M_0),
                Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$M_0),
                this.$0_0,
                null);
        return new Mscrm.TabTextButtonBuilder(this.$M_0.Id,
            this.$M_0.Caption,
            Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$M_0),
            this.$0_0)
    },
    createRightSideBuilders: function() {
        var $v_0 = [], $v_1 = 0;
        if (this.$Q_0)
            $v_0[$v_1++] = new Mscrm.SearchButtonBuilder(this.$Q_0.Caption,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$Q_0),
                this.$0_0);
        if (this.$Y_0)
            $v_0[$v_1++] = new Mscrm.GlobalMruButtonBuilder(this.$Y_0.Id,
                this.$Y_0.Caption,
                Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$Y_0),
                this.$0_0);
        if (this.$19_0)
            $v_0[$v_1++] = new Mscrm
                .GlobalQuickCreateButtonBuilder(this.$19_0.Id,
                    this.$19_0.Caption,
                    Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$19_0),
                    this.$0_0);
        if (this.$d_0)
            $v_0[$v_1++] = new Mscrm.AdvFindButtonBuilder(this.$d_0.Caption,
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$d_0),
                this.$0_0);
        if (this.$1Z_0)
            $v_0[$v_1++] = new Mscrm
                .TabButtonSettingsBuilder(this.$1Z_0,
                    Mscrm.BuilderHelper
                    .selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif",
                        "/_imgs/NavBar/HighContrast/NavBarSettings_HC.png"),
                    Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$1Z_0),
                    this.$0_0);
        if (this.$h_0)
            $v_0[$v_1++] = new Mscrm.TabButtonHelpBuilder(this.$h_0.Id,
                this.$h_0.Caption,
                Mscrm.BuilderHelper
                .selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif",
                    "/_imgs/NavBar/HighContrast/Help_HC_16.png"),
                Mscrm.BuilderHelper.createEventHandler(this.$7_0, this.$h_0),
                this.$0_0);
        if (this.$12_0)
            $v_0[$v_1++] = new Mscrm
                .TabButtonUserInfoBuilder(this.$12_0,
                    this.$q_0,
                    this.$1g_0,
                    this.$Z_0,
                    this.$a_0,
                    this.$y_0,
                    Mscrm.BuilderHelper.createEventHandler(this.$p_0, this.$12_0),
                    this.$0_0);
        return $v_0
    },
    unselectNodes: function() {
        $P_CRM("#navTabGroupDiv .selected", $P_CRM(this.$33_0)).removeClass("selected");
        $P_CRM("#navTabGroupDiv .selectedText", $P_CRM(this.$33_0)).removeClass("selectedText");
        this.$1O_0 = null
    },
    selectNode: function(node) {
        this.unselectNodes();
        var $v_0 = node.Id;
        if (node.Id.substr(0, 3) !== "Tab") $v_0 = "Tab" + $v_0;
        $P_CRM(".navTabButtonLeft").removeClass("hoveredText");
        $P_CRM("#" + $v_0).addClass("selected");
        $P_CRM("#" + $v_0 + "-main").addClass("selectedText");
        this.$1O_0 = node.Id
    },
    getSelectedNode: function() { return this.$1O_0 },
    render: function(isInitialRender) {
        this.$r_0 && this.clear();
        this.$A_0 = new Mscrm.DomBasedControlContainer(this.$32_0);
        this.$A_0.add_shown(this.$$d_$55_0);
        this.$A_0.add_hidden(this.$$d_$50_0);
        var $v_0 = new Mscrm.ExecutionCompletedNotifier;
        this.$1L_0 = $v_0;
        this.$45_0();
        var $v_1 = this.$5C_0(), $v_2 = new Mscrm.Resizer($v_1);
        $v_2.showHideElements();
        this.$A_0.setContent($v_1);
        this.$A_0.show();
        this.$r_0 = true;
        !isInitialRender && this.raiseHelpIconLoadedEvent();
        return $v_0
    },
    raiseHelpIconLoadedEvent: function() {
        this.$3X_0 = $P_CRM("#" + this.$h_0.Id);
        this.$3X_0.trigger("helpIconLoaded")
    },
    $55_0: function($p0, $p1) {
        if (!IsNull(this.$1L_0)) {
            this.$1L_0.NotifyCompleted();
            this.$1L_0 = null
        }
    },
    $50_0: function($p0, $p1) {
        if (!IsNull(this.$1L_0)) {
            this.$1L_0.NotifyCompleted();
            this.$1L_0 = null
        }
    },
    clear: function() {
        if (!this.$r_0) return;
        if (this.$A_0) {
            this.$A_0.remove_shown(this.$$d_$55_0);
            this.$A_0.remove_hidden(this.$$d_$50_0);
            this.$A_0.dispose();
            this.$A_0 = null
        }
        this.$r_0 = false;
        Mscrm.XrmUIControlsWrapper.get_instance().removeControl("navigationbar")
    },
    $45_0: function() {
        var $v_0 = {};
        $v_0["id"] = "navigationbar";
        $v_0["type"] = "NavigationContainer";
        Mscrm.XrmUIControlsWrapper.get_instance().registerControl($P_CRM("#" + this.$32_0), $v_0)
    }
};
Mscrm.NavBar = function($p0) {
    this.$$d_$60_3 = Function.createDelegate(this, this.$60_3);
    this.$$d_$5p_3 = Function.createDelegate(this, this.$5p_3);
    this.$$d_$67_3 = Function.createDelegate(this, this.$67_3);
    this.$$d_$4h_3 = Function.createDelegate(this, this.$4h_3);
    this.$$d_$6j_3 = Function.createDelegate(this, this.$6j_3);
    this.$$d_$6k_3 = Function.createDelegate(this, this.$6k_3);
    this.$$d_$6Q_3 = Function.createDelegate(this, this.$6Q_3);
    this.$$d_$6U_3 = Function.createDelegate(this, this.$6U_3);
    this.$$d_$6N_3 = Function.createDelegate(this, this.$6N_3);
    this.$$d_$6O_3 = Function.createDelegate(this, this.$6O_3);
    this.$$d_$6R_3 = Function.createDelegate(this, this.$6R_3);
    this.$$d_$6T_3 = Function.createDelegate(this, this.$6T_3);
    this.$$d_$6S_3 = Function.createDelegate(this, this.$6S_3);
    this.$$d_$4s_3 = Function.createDelegate(this, this.$4s_3);
    this.$$d_$4p_3 = Function.createDelegate(this, this.$4p_3);
    this.$$d_$4q_3 = Function.createDelegate(this, this.$4q_3);
    this.$$d_$5d_3 = Function.createDelegate(this, this.$5d_3);
    this.$$d_$5z_3 = Function.createDelegate(this, this.$5z_3);
    this.$$d_$6P_3 = Function.createDelegate(this, this.$6P_3);
    this.$$d_$6i_3 = Function.createDelegate(this, this.$6i_3);
    this.$$d_$4o_3 = Function.createDelegate(this, this.$4o_3);
    this.$$d_$6K_3 = Function.createDelegate(this, this.$6K_3);
    this.$$d_$5c_3 = Function.createDelegate(this, this.$5c_3);
    this.$$d_$6a_3 = Function.createDelegate(this, this.$6a_3);
    this.$$d_$6L_3 = Function.createDelegate(this, this.$6L_3);
    this.$$d_$6Z_3 = Function.createDelegate(this, this.$6Z_3);
    this.$$d_$5L_3 = Function.createDelegate(this, this.$5L_3);
    this.$$d_$64_3 = Function.createDelegate(this, this.$64_3);
    this.$$d_$6B_3 = Function.createDelegate(this, this.$6B_3);
    this.$$d_$5k_3 = Function.createDelegate(this, this.$5k_3);
    this.$$d_$6E_3 = Function.createDelegate(this, this.$6E_3);
    this.$$d_$5F_3 = Function.createDelegate(this, this.$5F_3);
    this.$$d_$5n_3 = Function.createDelegate(this, this.$5n_3);
    this.$2A_3 = -1;
    this.GetNavigationStructure = this.getNavigationStructure;
    Mscrm.NavBar.initializeBase(this, [$p0]);
    if (this.$4j_3()) this.get_element().style.display = "none";
    this.$4_3 = new Mscrm.BlockInputHandler;
    Mscrm.Utilities.addControlMarker(this.get_element().id,
        "NavBarInit",
        "StartConstructorTimestamp",
        (new Date).getTime().toString());
    var $v_0 = {};
    $v_0["NavigateToPageAction"] = new Mscrm.NavigateToPageActionProvider(this);
    $v_0["TestNavigateAction"] = new Mscrm.TestNavigateActionProvider;
    $v_0["ScriptAction"] = new Mscrm.RecordSiteMapActionProvider(this);
    $v_0["MruAction"] = new Mscrm.MruActionProvider(this);
    var $v_1 = new Mscrm.NavStatus("#navStatusArea", new Mscrm.NavStatusBarAnimationStrategy);
    $v_0["GlobalQuickCreateAction"] = new Mscrm.GlobalQuickCreateActionProvider($v_1, this);
    this.$2D_3 = $p0.id;
    this.$2C_3 = "navigationControl";
    if (window.IS_PREVIEW_ORG) this.$2C_3 = "navigationControl preview";
    else if (window.IS_SANDBOX_ORG) this.$2C_3 = "navigationControl sandbox";
    if (Mscrm.NavBar.$4d() || this.$6V_3())
        this.$5_3 = new Mscrm.TabControlOutlook($p0.id, this.$2N_3(), this.$4I_3(), this.$$d_$5n_3);
    else this.$5_3 = new Mscrm.TabControl($p0.id, this.$2N_3(), this.$4I_3(), this.$$d_$5n_3);
    var $v_2 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navActionGroupContainer",
            new Mscrm.JQueryContainerAnimation,
            this.$$d_$5F_3,
            this.$$d_$6E_3),
        $v_3 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navActionListContainer",
            new Mscrm.JQueryContainerAnimation,
            this.$$d_$5F_3,
            this.$$d_$6E_3),
        $v_4 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navActionGroupContainer",
            new Mscrm.JQueryContainerAnimation,
            this.$$d_$5F_3,
            this.$$d_$6E_3),
        $v_5 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navUserInfoDropDownMenuContainer",
            new Mscrm.JQueryContainerAnimation,
            null,
            null),
        $v_6 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navSettingsDropDownMenuContainer",
            new Mscrm.JQueryContainerAnimation,
            null,
            null),
        $v_7 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navSearchDropDownContainer",
            new Mscrm.JQueryContainerAnimation,
            null,
            null),
        $v_8 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navActionGroupContainer globalMruContainer",
            new Mscrm.JQueryContainerAnimation,
            this.$$d_$5F_3,
            this.$$d_$6E_3),
        $v_9 = new Mscrm.FlyoutControlContainerFactory($p0.parentNode.id,
            "navActionListContainer",
            new Mscrm.JQueryContainerAnimation,
            this.$$d_$5F_3,
            this.$$d_$6E_3);
    this.$f_3 = new Mscrm.ActionGroupControl("detailActionGroupControl", $v_9);
    this.$f_3.add_hiding(this.$$d_$5k_3);
    this.$U_3 = new Mscrm.ActionGroupControl("actionGroupControl", $v_2);
    this.$k_3 = new Mscrm.ActionListControl("firstTabActionListFlyoutControl", $v_3);
    this.$X_3 = new Mscrm.ActionListControl("secondTabActionListFlyoutControl", $v_4);
    this.$2L_3 = new Mscrm.DropDownMenuControlUserInfo($v_5, this.$2N_3());
    this.$2H_3 = new Mscrm.DropDownMenuControlSettings($v_6, this.$2N_3());
    this.$2F_3 = new Mscrm.DropDownSearch($v_7, this.$2N_3());
    this.$g_3 = new Mscrm.ActionGroupShuffleControl($v_8, new Mscrm.ShuffleStrategy);
    this.$E_3 = new Mscrm.NavigationTree(this);
    this.$3h_3 = new Mscrm.NavigationNodeActionFactory($v_0);
    this.$S_3 = null;
    this.$U_3.add_hiding(this.$$d_$5k_3);
    this.$g_3.add_hiding(this.$$d_$5k_3);
    var $v_A = new Mscrm.HeaderGroupBuilderProvider(Mscrm.BuilderHelper
        .getResourceStringFromLOCID("LOCID_MRU_CAPTION_NAVBAR"),
        new Mscrm.SmallActionsBuilderProvider(this.$1e_3()));
    this.$k_3.$V_0 = $v_A;
    this.$X_3.add_hiding(this.$$d_$5k_3);
    this.$X_3.$V_0 = $v_A;
    this.$2L_3.add_hiding(this.$$d_$5k_3);
    this.$2H_3.add_hiding(this.$$d_$5k_3);
    this.$2F_3.add_hiding(this.$$d_$5k_3);
    this.$8_3 = new Array(0);
    this.$8_3[0] = this.$$d_$6B_3;
    this.$8_3[1] = this.$$d_$64_3;
    this.$8_3[2] = this.$$d_$5L_3;
    this.$8_3[3] = this.$$d_$6Z_3;
    this.$8_3[4] = this.$$d_$6L_3;
    this.$8_3[5] = this.$$d_$6Z_3;
    this.$8_3[6] = this.$$d_$6a_3;
    this.$8_3[7] = this.$$d_$5c_3;
    this.$8_3[18] = this.$$d_$6K_3;
    this.$8_3[19] = this.$$d_$4o_3;
    this.$8_3[8] = this.$$d_$6i_3;
    this.$8_3[9] = this.$$d_$6P_3;
    this.$8_3[10] = this.$$d_$5z_3;
    this.$8_3[20] = this.$$d_$5d_3;
    this.$8_3[21] = this.$$d_$4q_3;
    this.$8_3[22] = this.$$d_$4p_3;
    this.$8_3[11] = this.$$d_$4s_3;
    this.$8_3[12] = this.$$d_$6S_3;
    this.$8_3[13] = this.$$d_$6T_3;
    this.$8_3[16] = this.$$d_$6R_3;
    this.$8_3[24] = this.$$d_$6O_3;
    this.$8_3[14] = this.$$d_$6N_3;
    this.$8_3[17] = this.$$d_$6U_3;
    this.$8_3[23] = this.$$d_$6Q_3;
    this.$8_3[15] = this.$$d_$6k_3;
    this.$8_3[25] = this.$$d_$6j_3;
    this.$8_3[28] = this.$$d_$4h_3;
    this.$n_3 = new Mscrm.ModalOverlayDecorator(this.$$d_$67_3, "#navBarOverlay");
    Mscrm.Utilities.addControlMarker(this.get_element().id,
        "NavBarInit",
        "FinishConstructorTimestamp",
        (new Date).getTime().toString())
};
Mscrm.NavBar.$4d = function() { return Mscrm.SessionInfo.isOutlookClient() };
Mscrm.NavBar.$4J = function($p0, $p1, $p2) { return Mscrm.NavBar.$3F($p0.Id, $p1.Id, $p2.Id) };
Mscrm.NavBar.$3F = function($p0, $p1, $p2) { return String.format("{0}|{1}|{2}", $p0, $p1, $p2) };
Mscrm.NavBar.$J = function($p0) { return $p0 + "_Action" };
Mscrm.NavBar.$4B = function($p0, $p1) {
    if (IsNull($p0.Action)) $p0.Action = {};
    $p0.Action["ActionType"] = "NavigateToPageAction";
    Mscrm.NavBar.$3L($p0, $p1)
};
Mscrm.NavBar.$4b = function($p0) {
    var $v_0 = Mscrm.NavBar.$4N($p0);
    return !isNullOrEmptyString($v_0)
};
Mscrm.NavBar
    .settingsTabOptionsButtonClickedEventHandlerCallback = function(retValue) {
        retValue && Mscrm.Utilities.reloadPage()
    };
Mscrm.NavBar.setStripeImage = function(node) {
    var $v_0 = Mscrm.CrmUri.create(node.ImageUrl), $v_1 = Mscrm.ImageStrip.getImageInfo($v_0);
    node.StripeUrl = $v_1.source;
    node.StripeClass = $v_1.cssClass
};
Mscrm.NavBar.$4N = function($p0) {
    var $v_0 = Mscrm.NavBar.$41($p0, "EntityName");
    if (IsNull($v_0)) return "";
    return $v_0
};
Mscrm.NavBar.getEntityTypeCode = function(node) { return Mscrm.NavBar.$41(node, "EntityTypeCode") };
Mscrm.NavBar.$21 = function($p0) {
    var $v_0 = Mscrm.NavBar.$41($p0, "PageUrl");
    if (IsNull($v_0)) return "";
    return $v_0
};
Mscrm.NavBar.$3L = function($p0, $p1) { Mscrm.NavBar.$6M($p0, "PageUrl", $p1) };
Mscrm.NavBar.$41 = function($p0, $p1) {
    if (IsNull($p0) || IsNull($p0.Action)) return null;
    return $p0.Action[$p1]
};
Mscrm.NavBar.$6M = function($p0, $p1, $p2) {
    if (IsNull($p0)) return;
    if (IsNull($p0.Action)) $p0.Action = {};
    $p0.Action[$p1] = $p2
};
Mscrm.NavBar.$69 = function($p0) {
    var $v_0 = $p0.contentWindow.$find("crmGrid_filterSet");
    if (!IsNull($v_0) && $v_0.isFilterSetDirty()) return confirm(window.LOCID_GF_AFWARNING);
    return true
};
Mscrm.NavBar.$4E = function($p0) {
    try {
        var $v_0 = {};
        $v_0["context"] = "Dashboard";
        $v_0["dialogName"] = $p0;
        $v_0["entityId"] = "";
        $v_0["gridType"] = "";
        $v_0["userRoleId"] = Xrm.Page.context.getUserRoles().toString();
        Mscrm.MetricsReporting.instance().addMetric("dialogs", $v_0)
    } catch ($v_1) {
    }
};
Mscrm.NavBar.prototype = {
    $2D_3: null,
    $2C_3: null,
    $n_3: null,
    $1r_3: null,
    $5_3: null,
    $U_3: null,
    $f_3: null,
    $k_3: null,
    $X_3: null,
    $2L_3: null,
    $2H_3: null,
    $2F_3: null,
    $g_3: null,
    $E_3: null,
    $3h_3: null,
    $S_3: null,
    $1K_3: null,
    $K_3: null,
    $C_3: null,
    $t_3: null,
    $e_3: null,
    $3v_3: false,
    $1U_3: false,
    $8_3: null,
    $6_3: null,
    $24_3: null,
    $3w_3: null,
    $2z_3: null,
    $W_3: null,
    $Q_3: null,
    $d_3: null,
    $Y_3: null,
    $1i_3: null,
    $4_3: null,
    $1n_3: null,
    $1F_3: null,
    $q_3: null,
    $27_3: null,
    $Z_3: null,
    $a_3: null,
    $y_3: null,
    $m_3: null,
    $2I_3: null,
    $2G_3: null,
    $2X_3: false,
    $2W_3: null,
    $10_3: null,
    $3O_3: null,
    navBarStatus: null,
    get_isAppLandingPage: function() { return this.$1U_3 },
    set_isAppLandingPage: function(value) {
        this.$1U_3 = value;
        return value
    },
    get_disableHoverFlyOut: function() { return this.$2X_3 },
    set_disableHoverFlyOut: function(value) {
        this.$2X_3 = value;
        return value
    },
    get_siteMap: function() { return this.$2z_3 },
    set_siteMap: function(value) {
        this.$2z_3 = value;
        return value
    },
    get_homeNode: function() { return this.$W_3 },
    set_homeNode: function(value) {
        this.$W_3 = value;
        return value
    },
    get_navBarSearchNode: function() { return this.$1K_3 },
    set_navBarSearchNode: function(value) {
        this.$1K_3 = value;
        return value
    },
    get_searchNode: function() { return this.$Q_3 },
    set_searchNode: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_advFindNode: function() { return this.$d_3 },
    set_advFindNode: function(value) {
        this.$d_3 = value;
        return value
    },
    get_appSwitcherNode: function() { return this.$1i_3 },
    set_appSwitcherNode: function(value) {
        this.$1i_3 = value;
        return value
    },
    get_globalMruNode: function() { return this.$Y_3 },
    set_globalMruNode: function(value) {
        this.$Y_3 = value;
        return value
    },
    get_globalQuickCreateItems: function() { return this.$1n_3 },
    set_globalQuickCreateItems: function(value) {
        this.$1n_3 = value;
        return value
    },
    get_currentUserName: function() { return this.$q_3 },
    set_currentUserName: function(value) {
        this.$q_3 = value;
        return value
    },
    get_currentUserId: function() { return this.$27_3 },
    set_currentUserId: function(value) {
        this.$27_3 = value;
        return value
    },
    get_organizationFriendlyName: function() { return this.$Z_3 },
    set_organizationFriendlyName: function(value) {
        this.$Z_3 = value;
        return value
    },
    get_organizationUniqueName: function() { return this.$a_3 },
    set_organizationUniqueName: function(value) {
        this.$a_3 = value;
        return value
    },
    get_currentUserProfileImageUrl: function() { return this.$y_3 },
    set_currentUserProfileImageUrl: function(value) {
        this.$y_3 = value;
        return value
    },
    get_logoImageUrl: function() { return this.$m_3 },
    set_logoImageUrl: function(value) {
        this.$m_3 = value;
        return value
    },
    get_settingsOptionsNode: function() { return this.$2I_3 },
    set_settingsOptionsNode: function(value) {
        this.$2I_3 = value;
        return value
    },
    get_settingsAboutNode: function() { return this.$2G_3 },
    set_settingsAboutNode: function(value) {
        this.$2G_3 = value;
        return value
    },
    get_activities: function() { return this.$1F_3 },
    set_activities: function(value) {
        this.$1F_3 = value;
        return value
    },
    get_appModulesList: function() { return this.$2W_3 },
    set_appModulesList: function(value) {
        this.$2W_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.Utilities.addControlMarker(this.get_element().id,
            "NavBarInit",
            "StartInitializeTimestamp",
            (new Date).getTime().toString());
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Mscrm.Utilities.addControlMarker(this.get_element().id,
            "NavBarInit",
            "FinishInitializeTimestamp",
            (new Date).getTime().toString());
        Mscrm.Utilities.addControlMarker(this.get_element().id,
            "NavBarInit",
            "StartRenderTimestamp",
            (new Date).getTime().toString());
        this.Render();
        Mscrm.Utilities.addControlMarker(this.get_element().id,
            "NavBarInit",
            "FinishRenderTimestamp",
            (new Date).getTime().toString());
        $addHandler(document, "keydown", this.$$d_$5p_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(document, "keydown", this.$$d_$5p_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    Render: function() {
        window.IsAppSwitcherShellFeatureEnabled && InitiailizeD365Shell(this.$2W_3);
        var $v_0 = this.$E_3.updateNavigationStructure(), $$t_2 = this;
        $v_0.QueueUntilNotified(function($p1_0) { $$t_2.$68_3() })
    },
    $68_3: function() {
        $P_CRM("#" + this.$2D_3).attr("class", this.$2C_3);
        this.$S_3 = null;
        this.$47_3(null, null, true)
    },
    getPath: function(nodeToFind) {
        if (IsNull(nodeToFind)) throw Error.argumentNull("nodeToFind");
        for (var $v_0 = this.$E_3.getRootNode(), $v_1 = 0; $v_1 < $v_0.Children.length; $v_1++)
            for (var $v_2 = $v_0.Children[$v_1], $v_3 = 0; $v_3 < $v_2.Children.length; $v_3++) {
                var $v_4 = $v_2.Children[$v_3];
                if ($v_4.Id !== nodeToFind.ParentId) continue;
                for (var $v_5 = 0; $v_5 < $v_4.Children.length; $v_5++) {
                    var $v_6 = $v_4.Children[$v_5];
                    if ($v_6 === nodeToFind) return Mscrm.NavBar.$4J($v_2, $v_4, $v_6)
                }
            }
        return ""
    },
    $4c_3: function() { return window.IS_LIVE },
    $47_3: function($p0, $p1, $p2) {
        this.$t_3 = null;
        if (this.$1U_3) {
            this.$K_3 = null;
            this.$C_3 = null
        } else {
            this.$K_3 = $p0;
            this.$C_3 = $p1
        }
        this.$46_3($p2)
    },
    $46_3: function($p0) {
        var $v_0 = this.$E_3.getRootNode();
        if (this.$1U_3) {
            this.$5_3.$Q_0 = null;
            this.$5_3.$Y_0 = null;
            this.$5_3.$d_0 = null;
            this.$5_3.$19_0 = null;
            this.$5_3.$W_0 = null
        } else {
            this.$5_3.$Q_0 = this.$Q_3;
            this.$5_3.$Y_0 = this.$Y_3;
            this.$5_3.$W_0 = $v_0;
            this.$5_3.$19_0 = this.$1n_3
        }
        this.$5_3.$1H_0 = this.$1i_3;
        this.$6_3 = new Array(0);
        this.$5_3.$P_0 = this.$W_3;
        if (!Mscrm.NavBar.$43) {
            var $v_G = this.$W_3.Caption;
            this.$W_3.Caption = $v_0.Caption;
            $v_0.Caption = $v_G;
            Mscrm.NavBar.$43 = true
        }
        $v_0.Id = "TabHome";
        this.$6_3[0] = "TabHome";
        this.$6_3[1] = Mscrm.NavBar.$J(this.$5_3.$P_0.Id);
        this.$6_3[2] = "";
        this.$6_3[3] = "";
        this.$6_3[4] = "";
        this.$6_3[5] = "";
        this.$6_3[6] = "";
        this.$6_3[7] = !IsNull(this.$1n_3) ? this.$1n_3.Id : "";
        this.$6_3[18] = Mscrm.NavBar.$J(this.$Q_3.Id);
        this.$6_3[20] = this.$Y_3.Id;
        if (this.$1i_3) this.$6_3[22] = Mscrm.NavBar.$J(this.$1i_3.Id);
        if (!window.UseTabletExperience && !this.$1U_3) {
            this.$5_3.$d_0 = this.$d_3;
            this.$6_3[19] = Mscrm.NavBar.$J(this.$d_3.Id)
        }
        if (!IsNull(this.$K_3)) {
            this.$5_3.$v_0 = this.$K_3;
            this.$6_3[2] = this.$K_3.Id;
            this.$6_3[21] = Mscrm.NavBar.$J(this.$K_3.Id)
        }
        if (!IsNull(this.$K_3) && !IsNull(this.$C_3)) {
            this.$5_3.$c_0 = this.$C_3;
            this.$6_3[3] = Mscrm.NavBar.$J(this.$C_3.Id);
            this.$6_3[4] = this.$C_3.Id
        }
        if (this.$3v_3 && !IsNull(this.$t_3)) {
            this.$5_3.$M_0 = this.$t_3;
            this.$6_3[5] = Mscrm.NavBar.$J(this.$t_3.Id);
            this.$6_3[6] = this.$t_3.Id
        } else this.$5_3.$M_0 = null;
        var $v_1 = this.$E_3.cloneNode($v_0);
        $v_1.Id = "TabUserInfoId";
        this.$5_3.$12_0 = $v_1;
        this.$6_3[8] = $v_1.Id;
        this.$5_3.$q_0 = this.$q_3;
        this.$5_3.$1g_0 = this.$27_3;
        this.$5_3.$Z_0 = this.$Z_3;
        this.$5_3.$a_0 = this.$a_3;
        this.$5_3.$y_0 = this.$y_3;
        this.$5_3.$m_0 = this.$m_3;
        var $v_2 = this.$E_3.cloneNode($v_0);
        $v_2.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGS_NAVBAR");
        $v_2.Id = "TabButtonSettingsId";
        this.$5_3.$1Z_0 = $v_2;
        this.$6_3[9] = $v_2.Id;
        var $v_3 = this.$E_3.cloneNode($v_0);
        $v_3.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_HELP_NAVBAR");
        $v_3.Id = "TabButtonHelpId";
        this.$5_3.$h_0 = $v_3;
        this.$6_3[10] = Mscrm.NavBar.$J($v_3.Id);
        var $v_4 = this.$E_3.cloneNode($v_0);
        $v_4.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_PRINTPREVIEW_NAVBAR");
        $v_4.Id = "navTabButtonSettingsPrintPreviewId";
        var $v_5 = this.$E_3.cloneNode($v_0);
        $v_5.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGSNAVTOUR_NAVBAR");
        $v_5.Id = "navTabButtonSettingsNavTourId";
        var $v_6 = this.$E_3.cloneNode($v_0);
        $v_6.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGSPRIVACY_NAVBAR");
        $v_6.Id = "NodeSettingsPrivacyStatementId";
        var $v_7 = 0, $v_8 = [];
        $v_8[$v_7++] = this.$2I_3;
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.AppsForCrm")) {
            var $v_H = this.$E_3.cloneNode($v_0);
            $v_H.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGSAPPSFORCRM_NAVBAR");
            $v_H.Id = "navTabButtonSettingsNavAppsForCrmId";
            $v_8[$v_7++] = $v_H;
            this.$6_3[24] = Mscrm.NavBar.$J($v_H.Id)
        }
        $v_8[$v_7++] = $v_4;
        $v_8[$v_7++] = $v_5;
        $v_8[$v_7++] = this.$2G_3;
        $v_8[$v_7++] = $v_6;
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.GuidedHelp")) {
            var $v_I = this.$E_3.cloneNode($v_0);
            $v_I.Caption = Mscrm.NavBar.$22
                ? Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGSGUIDEDHELP_OPTOUT")
                : Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGSGUIDEDHELP_OPTIN");
            $v_I.Id = "navTabButtonSettingsGuidedHelpId";
            $v_8[$v_7++] = $v_I;
            this.$6_3[23] = Mscrm.NavBar.$J($v_I.Id)
        }
        $v_2.Children = $v_8;
        this.$6_3[12] = Mscrm.NavBar.$J(this.$2I_3.Id);
        this.$6_3[13] = Mscrm.NavBar.$J($v_4.Id);
        this.$6_3[16] = Mscrm.NavBar.$J($v_5.Id);
        this.$6_3[14] = Mscrm.NavBar.$J(this.$2G_3.Id);
        this.$6_3[17] = Mscrm.NavBar.$J($v_6.Id);
        var $v_9 = 0, $v_A = [], $v_B = this.$E_3.cloneNode($v_0);
        $v_B.Caption = this.$q_3;
        $v_B.Id = "navTabButtonUserInfoUserNameId";
        $v_A[$v_9++] = $v_B;
        var $v_C = this.$E_3.cloneNode($v_0);
        $v_C.Caption = this.$a_3;
        $v_C.Id = "navTabButtonUserInfoOrgNameId";
        $v_A[$v_9++] = $v_C;
        var $v_D = this.$E_3.cloneNode($v_0);
        $v_D.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_USERINFOEDITIMAGE_NAVBAR");
        $v_D.Id = "navTabButtonUserInfoEditImageId";
        $v_A[$v_9++] = $v_D;
        var $v_E = this.$E_3.cloneNode($v_0);
        $v_E.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_USERINFOSIGNOUT_NAVBAR");
        $v_E.Id = "navTabButtonUserInfoSignOutId";
        $v_A[$v_9++] = $v_E;
        $v_1.Children = $v_A;
        this.$6_3[15] = Mscrm.NavBar.$J($v_E.Id);
        this.$6_3[25] = Mscrm.NavBar.$J($v_D.Id);
        this.$1K_3 = this.$E_3.cloneNode($v_0);
        this.$1K_3.Id = "navTabButtonSearchD365Id";
        var $v_F = [];
        $v_F[0] = this.$1K_3;
        this.$Q_3.Children = $v_F;
        this.$6_3[28] = Mscrm.NavBar.$J(this.$1K_3.Id);
        this.$e_3 = this.$E_3.cloneNode($v_0);
        this.$e_3.Caption = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_BACK_NAVBAR");
        this.$e_3.Id = Mscrm.NavBar.$J("TabBack");
        this.$6_3[11] = Mscrm.NavBar.$J(this.$e_3.Id);
        this.$5_3.$e_0 = this.$e_3;
        this.$4_3.blockInputUntilFinished(this.$5_3.render($p0));
        if (this.$4j_3()) this.get_element().style.display = "none"
    },
    $4j_3: function() {
        if (!isNullOrEmptyString(this.navBarStatus)) return this.navBarStatus.toLocaleLowerCase() === "off";
        else {
            var $v_0 = this.$4U_3("navbar");
            if (!isNullOrEmptyString($v_0)) return $v_0.toLocaleLowerCase() === "off"
        }
        return false
    },
    $6V_3: function() {
        if (!isNullOrEmptyString(this.navBarStatus)) return this.navBarStatus.toLocaleLowerCase() === "entity";
        else {
            var $v_0 = this.$4U_3("navbar");
            if (!isNullOrEmptyString($v_0)) return $v_0.toLocaleLowerCase() === "entity"
        }
        return false
    },
    $4U_3: function($p0) {
        if (isNullOrEmptyString($p0)) return null;
        var $v_0 = window.location.search;
        if (isNullOrEmptyString($v_0)) return null;
        else {
            var $v_1 = Mscrm.CrmUri.create($v_0);
            if ($p0 in $v_1.get_query()) return $v_1.get_query()[$p0];
            else if ("extraqs" in $v_1.get_query()) {
                var $v_2 = $v_1.get_query()["extraqs"];
                if (!$v_2.startsWith("?")) $v_2 = "?" + $v_2;
                $v_1 = Mscrm.CrmUri.create($v_2);
                if ($p0 in $v_1.get_query()) return $v_1.get_query()[$p0]
            }
        }
        return null
    },
    $4D_3: function($p0, $p1) {
        if (isNullOrEmptyString($p0)) return;
        var $v_0 = Mscrm.CrmUri.create($p0), $v_1 = $v_0.get_query()["sitemappath"];
        if ("newWindow" in $v_0.get_query()) delete $v_0.get_query().newWindow;
        var $v_2 = $v_0.toString();
        if (!isNullOrEmptyString($v_1))
            for (var $v_3 = this.$E_3.getRootNode(), $v_4 = 0; $v_4 < $v_3.Children.length; $v_4++)
                for (var $v_5 = $v_3.Children[$v_4], $v_6 = 0; $v_6 < $v_5.Children.length; $v_6++)
                    for (var $v_7 = $v_5.Children[$v_6], $v_8 = 0; $v_8 < $v_7.Children.length; $v_8++) {
                        var $v_9 = $v_7.Children[$v_8], $v_A = Mscrm.NavBar.$4J($v_5, $v_7, $v_9);
                        if ($v_A === $v_1) {
                            Mscrm.NavBar.$4B($v_5, $v_2);
                            this.$47_3($v_5, $v_9, $p1);
                            return
                        }
                    }
        if (!isNullOrEmptyString(this.$1r_3)) {
            var $v_B = this.$1r_3;
            this.$1r_3 = null;
            $v_0 = Mscrm.CrmUri.create($v_B);
            $v_1 = $v_0.get_query()["sitemappath"];
            if (isNullOrEmptyString($v_1) && $v_B.indexOf("sitemappath") > 0) {
                var $v_C = $v_B.indexOf("?");
                if ($v_C < 0) return;
                $v_B = $v_B.substring($v_C, $v_B.length);
                $v_B = "dummy/dummy" + $v_B
            }
            this.$4D_3($v_B, false)
        }
    },
    $3K_3: function($p0, $p1) {
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        this.$U_3.$V_0 = $p1;
        var $v_0 = this.$2Q_3($p0);
        this.$24_3 = this.$n_3.render(this.$U_3, $v_0);
        this.$4_3.blockInputUntilFinishedAndDelay(this.$24_3, 200);
        this.$4V_3(this.$U_3);
        $P_CRM("#" + $p0.Id).focus()
    },
    $6H_3: function($p0, $p1) {
        if (this.$4_3.isInputBlocked()) return;
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        this.$f_3.$V_0 = $p1;
        var $v_0 = this.$2Q_3($p0);
        this.$24_3 = this.$n_3.render(this.$f_3, $v_0);
        this.$4_3.blockInputUntilFinishedAndDelay(this.$24_3, 200)
    },
    $6G_3: function($p0, $p1) {
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        if (IsNull($p1)) throw Error.argumentNull("actionListControl");
        var $v_0 = this.$2Q_3($p0), $v_1 = this.$n_3.render($p1, $v_0);
        this.$4_3.blockInputUntilFinishedAndDelay($v_1, 200);
        this.$5i_3($p1)
    },
    $4V_3: function($p0) {
        if (IsNull(this.$S_3)) {
            $p0.unselectNodes();
            return
        }
        var $v_0 = this.$E_3.getAncestorsById(this.$S_3.Id);
        if ($v_0.length < 2) {
            $p0.unselectNodes();
            return
        }
        var $v_1 = $v_0[1];
        $p0.selectNode($v_1)
    },
    $5i_3: function($p0) {
        if (IsNull(this.$S_3)) {
            $p0.unselectNodes();
            return
        }
        $p0.selectNode(this.$S_3)
    },
    $2Q_3: function($p0) {
        var $v_0 = [];
        if (IsNull($p0)) return $v_0;
        if (IsNull($p0.Children)) return $v_0;
        $v_0 = $p0.Children;
        return $v_0
    },
    $2N_3: function() {
        var $$t_2 = this;
        return function($p1_0) {
            if ($$t_2.$4_3.isInputBlocked()) return null;
            if (IsNull($p1_0)) return null;
            if ($p1_0.Id === $$t_2.$5_3.getSelectedNode()) {
                $$t_2.$60_3();
                $$t_2.$1D_3();
                return null
            }
            var $v_0 = $$t_2.$4S_3(Mscrm.NavBar.$J($p1_0.Id));
            $v_0 >= 0 && $v_0 < $$t_2.$8_3.length && $$t_2.$8_3[$v_0]($p1_0);
            return null
        }
    },
    $4I_3: function() {
        var $$t_2 = this;
        return function($p1_0) {
            if ($$t_2.$4_3.isInputBlocked()) return null;
            if (IsNull($p1_0)) return null;
            if (window.IsAppSwitcherShellFeatureEnabled) eval("HideD365Shell();");
            if ($p1_0.Id === $$t_2.$5_3.getSelectedNode()) {
                $$t_2.$60_3();
                return null
            }
            var $v_0 = $$t_2.$4S_3($p1_0.Id);
            $v_0 >= 0 && $v_0 < $$t_2.$8_3.length && $$t_2.$8_3[$v_0]($p1_0);
            $$t_2.$5_3.selectNode($p1_0);
            return null
        }
    },
    $4S_3: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$6_3.length; $v_0++) {
            var $v_1 = this.$6_3[$v_0];
            if ($p0 === $v_1) return $v_0
        }
        return -1
    },
    $4H_3: function($p0) {
        var $$t_3 = this;
        return function($p1_0) {
            if (IsNull($p1_0)) return null;
            $$t_3.$S_3 = $p1_0;
            $$t_3.$4i_3($p1_0);
            var $v_0 = new Mscrm.SplitActionsBuilderProvider($$t_3.$1e_3());
            $$t_3.$6H_3($p1_0, new Mscrm.GroupedActionsBuilderProvider($v_0));
            return null
        }
    },
    $6e_3: function() {
        $P_CRM(".navActionButton.selected").removeClass("selected");
        $P_CRM(".navModuleButtonShadow.selected").removeClass("selected")
    },
    $4i_3: function($p0) {
        this.$6e_3();
        $P_CRM("#" + $p0.Id + ".navActionButton").addClass("selected");
        $P_CRM("#" + $p0.Id + ".navModuleButtonShadow").addClass("selected")
    },
    $59_3: function() {
        var $$t_1 = this;
        return function($p1_0) {
            if (IsNull($p1_0)) return null;
            $$t_1.$62_3();
            $$t_1.$60_3(true);
            $$t_1.$13_3($p1_0);
            return null
        }
    },
    $5I_3: function($p0) { !isNullOrEmptyString(Mscrm.NavBar.$21($p0)) && this.$5J_3($p0) },
    $5J_3: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.Children.length; $v_0++)
            for (var $v_1 = $p0.Children[$v_0], $v_2 = 0; $v_2 < $v_1.Children.length; $v_2++) {
                var $v_3 = $v_1.Children[$v_2];
                if (!IsNull($v_3.Action)) {
                    this.$13_3($v_3);
                    return
                }
            }
    },
    $1e_3: function() {
        var $$t_1 = this;
        return function($p1_0) {
            if (IsNull($p1_0)) return null;
            Mscrm.Utilities.addControlMarker($$t_1.get_element().id,
                Mscrm.NavBar.$1X,
                Mscrm.NavBar.$1Y,
                (new Date).getTime().toString());
            $$t_1.$60_3();
            $$t_1.$13_3($p1_0);
            if (!IsNull($$t_1.$S_3)) $$t_1.$S_3 = null;
            $$t_1.$S_3 = $p1_0;
            return null
        }
    },
    $5B_3: function() {
        var $$t_2 = this;
        return function($p1_0) {
            if (IsNull($p1_0)) return null;
            Mscrm.Utilities.addControlMarker($$t_2.get_element().id,
                Mscrm.NavBar.$1X,
                Mscrm.NavBar.$1Y,
                (new Date).getTime().toString());
            $$t_2.$S_3 = $p1_0;
            var $v_0 = Mscrm.GlobalMruConnector.pinStatusChanged($p1_0);
            if ($v_0 < 0) return null;
            $$t_2.$g_3.shuffle($p1_0.Id, $v_0);
            if ($p1_0.Parameters["isPinned"].toString() === "0") $p1_0.Parameters["isPinned"] = "1";
            else $p1_0.Parameters["isPinned"] = "0";
            $P_CRM("#crmMasthead").focus();
            return null
        }
    },
    $4p_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        this.$13_3($p0)
    },
    $64_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        this.$60_3();
        this.$1D_3();
        if (window.IsAppSwitcherShellFeatureEnabled) eval("ToggleD365Shell();");
        else if (this.$1U_3)
            window.top.location.href = Mscrm.CrmUri.create("main.aspx", window.ORG_UNIQUE_NAME).toString();
        else this.$13_3($p0)
    },
    $5U_3: function() {
        var $v_0 = "/multientityquickfind/multientityquickfind.aspx",
            $v_1 = 1,
            $v_2 = window.IsRelevanceSearchEnabledInOrgSettings ? 1 : 0;
        if ($v_2 === 1) {
            var $v_3 = window.DefaultSearchUserSettings;
            if ($v_3 === "0") $v_0 = "externalsearch/externalsearch.aspx";
            else if ($v_3 === "2") {
                if (!IsNull(Mscrm.Utilities
                    .getCookie("persistentSearchTypeCookie"))
                ) $v_1 = Number.parseInvariant(Mscrm.Utilities.getCookie("persistentSearchTypeCookie"));
                if ($v_1 === 1) $v_0 = "externalsearch/externalsearch.aspx"
            }
        }
        return $v_0
    },
    $6K_3: function($p0) {
        this.$1D_3();
        this.$60_3();
        this.$1Q_3();
        var $v_0 = [];
        $v_0[0] = $p0;
        if (IsNull($p0.Action)) $p0.Action = {};
        var $v_1 = this.$n_3.render(this.$2F_3, $v_0);
        this.$4_3.blockInputUntilFinishedAndDelay($v_1, 200);
        this.$5_3.selectNode($p0);
        $P_CRM(".navBarSearchButton").addClass("selected")
    },
    $5Y_3: function() {
        var $v_0 = !IsNull(this.$K_3) ? this.$K_3.Id : "",
            $v_1 = !IsNull(this.$C_3) ? this.$C_3.ParentId : "",
            $v_2 = !IsNull(this.$C_3) ? this.$C_3.Id : "",
            $v_3 = Mscrm.NavBar.$3F($v_0, $v_1, $v_2);
        return $v_3
    },
    $5c_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        this.$4_3.blockInputUntilFinished(this.$g_3.hide());
        this.$4_3.blockInputUntilFinished(this.$k_3.hide());
        this.$4_3.blockInputUntilFinished(this.$X_3.hide());
        this.$f_3.hide();
        this.$1Q_3();
        this.$3K_3($p0, new Mscrm.GroupedActionsBuilderProvider(new Mscrm.ActionsBuilderProvider(this.$59_3())))
    },
    $6B_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        this.$4_3.blockInputUntilFinished(this.$g_3.hide());
        this.$4_3.blockInputUntilFinished(this.$k_3.hide());
        this.$4_3.blockInputUntilFinished(this.$X_3.hide());
        this.$1Q_3();
        this.$1D_3();
        var $v_0 = new Mscrm.HeaderGroupBuilderProvider("",
            new Mscrm.ModuleActionsBuilderProvider(this.$4H_3($p0.Children)));
        this.$3K_3($p0, $v_0);
        $P_CRM(".nav-scrl").removeClass("nav-scrl").addClass("mainTab-nav-scrl")
    },
    $4q_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        this.$4_3.blockInputUntilFinished(this.$k_3.hide());
        this.$4_3.blockInputUntilFinished(this.$X_3.hide());
        this.$4_3.blockInputUntilFinished(this.$f_3.hide());
        this.$1Q_3();
        this.$60_3();
        this.$5I_3($p0);
        this.$S_3 = $p0
    },
    $5L_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        this.$4_3.blockInputUntilFinished(this.$g_3.hide());
        this.$4_3.blockInputUntilFinished(this.$k_3.hide());
        this.$4_3.blockInputUntilFinished(this.$X_3.hide());
        this.$4_3.blockInputUntilFinished(this.$f_3.hide());
        this.$1Q_3();
        if (this.$5_3.$W_0) {
            this.$1D_3();
            var $v_0 = this.$5_3.$W_0,
                $v_1 = new Mscrm.HeaderGroupBuilderProvider("",
                    new Mscrm.ModuleActionsBuilderProvider(this.$4H_3($v_0.Children)));
            this.$U_3.$V_0 = $v_1;
            var $v_2 = this.$2Q_3($v_0);
            this.$n_3.render(this.$U_3, $v_2);
            this.$4V_3(this.$U_3);
            $P_CRM(".nav-scrl").removeClass("nav-scrl").addClass("mainTab-nav-scrl");
            this.$U_3.selectNode($p0);
            this.$U_3.scrollToSelectedElement();
            this.$S_3 = $p0;
            this.$4i_3($p0);
            var $$t_7 = this;
            window.setTimeout(function() { $P_CRM("#" + $p0.Id).focus() }, 10);
            var $v_3 = new Mscrm.SplitActionsBuilderProvider(this.$1e_3());
            this.$f_3.$V_0 = new Mscrm.GroupedActionsBuilderProvider($v_3);
            var $v_4 = this.$2Q_3($p0);
            this.$n_3.render(this.$f_3, $v_4)
        } else {
            var $v_5 = new Mscrm.SplitActionsBuilderProvider(this.$1e_3());
            this.$3K_3($p0, new Mscrm.GroupedActionsBuilderProvider($v_5));
            $P_CRM("#Tab" + $p0.Id).focus()
        }
    },
    $6L_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        this.$S_3 = null;
        this.$4_3.blockInputUntilFinished(this.$g_3.hide());
        this.$4_3.blockInputUntilFinished(this.$U_3.hide());
        this.$4_3.blockInputUntilFinished(this.$k_3.hide());
        this.$4_3.blockInputUntilFinished(this.$f_3.hide());
        this.$X_3.$V_0 = null;
        var $v_0 = new Mscrm.SplitActionsBuilderProvider(this.$1e_3());
        this.$X_3.$V_0 = $v_0;
        this.$1Q_3();
        if (Mscrm.NavBar.$4b($p0)) {
            this.$6g_3($p0);
            this.$6G_3($p0, this.$X_3)
        }
    },
    $6g_3: function($p0) {
        $p0.Children = [];
        var $v_0 = Mscrm.NavBar.getEntityTypeCode($p0), $v_1 = Mscrm.NavBar.$4N($p0), $v_2 = {};
        $v_2["maxRecords"] = 20;
        if ($v_0 === 4200 && !IsNull(this.$1F_3)) {
            for (var $v_4 = new Array(this.$1F_3
                         .length),
                $v_5 = 0;
                $v_5 < this.$1F_3.length;
                $v_5++) $v_4[$v_5] = parseInt(this.$1F_3[$v_5].Id);
            $v_2["etcList"] = $v_4
        }
        if ($v_1 === "Dashboard" && $v_0 === 1030) {
            var $v_6 = [1030, 1031];
            $v_2["etcList"] = $v_6
        } else $v_2["etc"] = $v_0;
        var $v_3 = this.raiseEvent(49, $v_2);
        if (!IsNull($v_3) && isArray($v_3) && $v_3.length > 0)
            for (var $v_7 = $v_3[0], $v_8 = $v_7["recordList"], $v_9 = 0; $v_9 < $v_8.length; $v_9++) {
                var $v_A = $v_8[$v_9], $v_B = new Mscrm.NavigationNode;
                $v_B.Caption = $v_A.Name;
                $v_B.Id = CrmEncodeDecode.CrmHtmlEncode($v_A.Id);
                if (String === Object.getType($v_A.TypeCode)) $v_A.TypeCode = Number.parseInvariant($v_A.TypeCode);
                $v_B.ImageUrl = this.$57_3($v_A.TypeCode);
                if (isNullOrEmptyString($v_B.ImageUrl))
                    if (isNullOrEmptyString($p0.ImageUrl)) $v_B.ImageUrl = "/_imgs/NavBar/Invisible.gif";
                    else {
                        $v_B.ImageUrl = $p0.ImageUrl;
                        $v_B.StripeUrl = $p0.StripeUrl;
                        $v_B.StripeClass = $p0.StripeClass
                    }
                if ($v_0.toString() === $v_A.TypeCode.toString()) $v_B.ColorAccent = $p0.ColorAccent;
                var $v_C = {};
                $v_C["ActionType"] = "MruAction";
                $v_C["EntityTypeCode"] = $v_A.TypeCode;
                $v_C["Action"] = $v_A.Action;
                $v_C["Id"] = $v_A.Id;
                $v_B.Action = $v_C;
                Array.add($p0.Children, $v_B)
            }
    },
    $6F_3: function($p0) {
        for (var $v_0 = this.$E_3.getRootNode(), $v_1 = 0; $v_1 < $v_0.Children.length; $v_1++) {
            var $v_2 = $v_0.Children[$v_1];
            if ($v_2 !== this.$K_3) continue;
            for (var $v_3 = 0; $v_3 < $v_2.Children.length; $v_3++)
                for (var $v_4 = $v_2.Children[$v_3], $v_5 = 0; $v_5 < $v_4.Children.length; $v_5++)
                    for (var $v_6 = $v_4.Children[$v_5], $v_7 = 0; $v_7 < $v_6.Children.length; $v_7++)
                        if ($p0 === $v_6.Children[$v_7]) {
                            this.$47_3(this.$K_3, $v_6, false);
                            return
                        }
        }
    },
    $6Z_3: function($p0) {
        this.$1D_3();
        this.$60_3();
        this.$13_3($p0)
    },
    $6i_3: function($p0) {
        this.$1D_3();
        this.$60_3();
        var $v_0 = [];
        $v_0[0] = $p0;
        var $v_1 = this.$n_3.render(this.$2L_3, $v_0);
        this.$4_3.blockInputUntilFinishedAndDelay($v_1, 200)
    },
    $6P_3: function($p0) {
        this.$1D_3();
        this.$60_3();
        var $v_0 = [];
        $v_0[0] = $p0;
        if (IsNull($p0.Action)) $p0.Action = {};
        $p0.Action[Mscrm.NavBarSharedConstants
            .printPreviewAvailable] = (this.$4e_3(95) || this.$4e_3(102)) && window.HasPrintPrivilege;
        var $v_1 = this.$n_3.render(this.$2H_3, $v_0);
        this.$4_3.blockInputUntilFinishedAndDelay($v_1, 200)
    },
    $4e_3: function($p0) {
        var $v_0 = {};
        $v_0[Mscrm.NavBarSharedConstants.printPreviewAvailable] = true;
        var $v_1 = this.get_eventManager().raiseEvent($p0, $v_0, null);
        return this.$4Z_3($v_1)
    },
    $5z_3: function($p0) {
        if (window.UseTabletExperience) Mscrm.Help.loadHelp(null);
        else {
            var $v_0 = window;
            $v_0 = $v_0.loadHelp;
            $v_0.apply()
        }
    },
    $6S_3: function($p0) {
        this.$60_3();
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = 695;
        $v_0.width = 978;
        var $v_1 = Mscrm.NavBar.settingsTabOptionsButtonClickedEventHandlerCallback;
        Xrm.Internal.openDialog(Mscrm.CrmUri.create(Mscrm.NavBar.$21($p0)).toString(), $v_0, null, null, $v_1);
        Mscrm.NavBar.$4E("PersonalOptions")
    },
    $4o_3: function($p0) {
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        try {
            var $v_0 = "crmGrid", $v_1 = false;
            this.$60_3();
            var $v_2 = 0, $v_3 = $get("crmContentPanel");
            if (!IsNull($v_3)) {
                var $v_4 = null, $v_5 = $v_3.attributes ? $v_3.attributes.getNamedItem("currentContentId") : null;
                if (!IsNull($v_5) && $v_5.specified) {
                    $v_4 = $get($v_5.value);
                    $v_2 = Mscrm.CrmUri.create($v_4.contentWindow.document.URL).get_query()["etc"]
                }
                if (!Mscrm.NavBar.$69($v_4)) $v_1 = true;
                else if ($v_4 && $v_4.contentWindow && $v_4.contentWindow.document.getElementById($v_0)) {
                    $v_4.contentWindow.openAdvFind();
                    $v_1 = true
                } else {
                    var $v_6 = $v_4.contentWindow.document.getElementById("ViewArea");
                    if ($v_6 && $v_6.contentWindow && $v_6.contentWindow.document.getElementById($v_0)) {
                        $v_6.contentWindow.openAdvFind();
                        $v_1 = true
                    }
                }
            }
            if (!$v_1) {
                var $v_7 = Mscrm.CrmUri.create(Mscrm.NavBar.$21($p0));
                $v_7.get_query()["EntityCode"] = $v_2.toString();
                openStdDlg($v_7, null, 1e3, 700) && Mscrm.Utilities.reloadPage()
            }
        } catch ($$e_9) {
            var $v_8 = Mscrm.CrmUri.create("/main.aspx");
            $v_8.get_query()["pagetype"] = "advancedfind";
            openStdWin($v_8, "_blank", 1e3, 700, null)
        }
        Mscrm.NavBar.$4E("AdvancedFind")
    },
    $6T_3: function($p0) {
        this.$60_3();
        !this.$4Z_3(this.get_eventManager().raiseEvent(95, null, null)) &&
            this.get_eventManager().raiseEvent(102, null, null)
    },
    $5d_3: function($p0) {
        if (this.$4_3.isInputBlocked()) return;
        setPerfMarkerTimestamp("GlobalMRUFlyoutLoadStartTime");
        this.$4_3.blockInputUntilFinished(this.$k_3.hide());
        this.$4_3.blockInputUntilFinished(this.$X_3.hide());
        this.$f_3.hide();
        this.$60_3();
        this.$1Q_3();
        $P_CRM("#Tab" + $p0.Id).focus();
        var $v_0 = new Mscrm.GlobalMruBuilderProvider(this.$1e_3(), this.$5B_3());
        this.$g_3.$V_0 = new Mscrm.GroupedGlobalMruBuilderProvider($v_0);
        this.$3w_3 = this.$n_3.render(this.$g_3, Mscrm.GlobalMruConnector.retrieveMruData());
        this.$4_3.blockInputUntilFinishedAndDelay(this.$3w_3, 200)
    },
    $4Z_3: function($p0) {
        if (IsNull($p0)) return false;
        for (var $v_0 = false, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            $v_0 = !!($v_0 | $p0[$v_1]);
            if (true === $v_0) break
        }
        return $v_0
    },
    $6R_3: function($p0) {
        this.$60_3();
        Mscrm.InlineDialogUtility.createInlineDialog(Mscrm.CrmUri.create("/_forms/navtour/dlg_navtour.aspx"),
            null,
            802,
            552,
            Number.NaN,
            Number.NaN,
            Number.NaN)
    },
    $6U_3: function($p0) {
        this.$60_3();
        var $v_0 = Mscrm.BuilderHelper.getResourceStringFromLOCID("PrivacyStatementUrl");
        window.open($v_0)
    },
    $6N_3: function($p0) {
        this.$60_3();
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        openStdDlg(Mscrm.CrmUri.create(Mscrm.NavBar.$21($p0)), null, 570, 570) && Mscrm.Utilities.reloadPage()
    },
    $6O_3: function($p0) {
        this.$60_3();
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        Mscrm.NavBar.$4B($p0, "/Tools/AppsForCrm/AppsForCrm.aspx");
        this.$13_3($p0)
    },
    $6Q_3: function($p0) {
        this.$60_3();
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<usersettings>");
        $v_0.append("<isguidedhelpenabled>");
        $v_0.append((!Mscrm.NavBar.$22).toString());
        $v_0.append("</isguidedhelpenabled>");
        $v_0.append("</usersettings>");
        var $v_1 = new XMLHttpRequest, $v_2 = Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_update.aspx");
        $v_1.open("POST", $v_2.toString(), false);
        Mscrm.Utilities.setResponseTypeToMSXml($v_1);
        Mscrm.WrpcTokenFuncs.setTokenInHeader($v_1, $v_2);
        var $v_3 = XUI.Xml.LoadXml($v_0.toString());
        Mscrm.Utilities.safeHttpSend($v_1, $v_3);
        var $v_4 = $v_1.responseXML, $v_5 = XUI.Xml.SelectSingleNode($v_4, "/error", null);
        if (IsNull($v_5)) {
            $p0.Caption = Mscrm.NavBar.$22
                ? Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGSGUIDEDHELP_OPTIN")
                : Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_SETTINGSGUIDEDHELP_OPTOUT");
            Mscrm.NavBar.$22 = !Mscrm.NavBar.$22;
            Mscrm.Utilities.reloadPage()
        }
        Mscrm.XmlUtil.handleXMLErr($v_1.responseXML, true)
    },
    $4k_3: function() { return this.$4c_3() || window.IS_SPLA || window.IS_CLAIMS },
    $6k_3: function($p0) {
        if (this.$4k_3()) {
            this.$60_3();
            this.raiseEvent(24, null)
        }
    },
    $6j_3: function($p0) {
        this.$60_3();
        var $v_0 = new Mscrm.ChangeProfilePictureAction;
        $v_0.$23_1 = this.$27_3;
        this.$3O_3 = $v_0;
        var $v_1 = $P_CRM("#navTabButtonChangeProfileImageLink"), $$t_5 = this;
        this.$3O_3.executeAsync().done(function($p1_0) {
            var $v_2 = $p1_0;
            !isNullOrEmptyString($v_2) && $v_1.find("img").attr("src", $v_2)
        })
    },
    $4h_3: function($p0) {
        var $v_0 = "", $v_1 = "";
        if (this.$4_3.isInputBlocked()) return;
        this.$60_3();
        this.$1D_3();
        var $v_2 = $P_CRM("#search"), $v_3 = $v_2.attr("value") ? $v_2.attr("value") : "";
        $v_1 = this.$5U_3();
        $v_0 = this.$5Y_3();
        $v_1 = $v_1 +
            "?sitemappath=" +
            CrmEncodeDecode.CrmUrlEncode($v_0) +
            "&text=" +
            CrmEncodeDecode.CrmUrlEncode($v_3) +
            "&option=" +
            CrmEncodeDecode.CrmUrlEncode("0");
        Mscrm.NavBar.$4B($p0, $v_1);
        this.$13_3($p0)
    },
    $4s_3: function($p0) {
        var $v_0 = $find("crmHistoryManager");
        if (!IsNull($v_0) && $v_0.isOutlookPerceivedFirstVisitingPage()) return;
        this.$60_3();
        this.raiseEvent(16, null)
    },
    $6a_3: function($p0) {
        this.$k_3.hide();
        this.$X_3.hide();
        this.$g_3.hide();
        this.$3K_3($p0, new Mscrm.GroupedActionsBuilderProvider(new Mscrm.ActionsBuilderProvider(this.$1e_3())))
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        var $v_0 = Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 14:
            this.$5y_3();
            break;
        case 8:
            this.$5q_3(parameters);
            break;
        case 9:
            this.$5r_3(parameters);
            break;
        case 3:
            $v_0 = this.$5m_3();
            break;
        case 13:
            this.$5w_3(parameters);
            break;
        case 60:
        case 61:
            this.$5x_3(parameters);
            break;
        case 89:
            this.$5s_3(parameters);
            break;
        case 93:
            this.$5l_3(parameters);
            break;
        case 87:
            this.$5o_3(parameters);
            break;
        case 59:
            this.$5t_3();
            break;
        case 112:
            var $v_1 = $get("HomeTabLink");
            !IsNull($v_1) && $v_1.focus();
            break;
        case 113:
            this.$5u_3();
            break;
        case 1:
            var $v_2 = this.$5K_3(parameters["areaId"], parameters["subAreaId"]);
            this.$13_3($v_2);
            break
        }
        return $v_0
    },
    raiseNavigateRequest: function(parameters) {
        this.$1r_3 = parameters["uri"];
        return this.get_eventManager().raiseEvent(21, parameters, null)
    },
    $5K_3: function($p0, $p1) {
        for (var $v_0 = this.$E_3.getRootNode(), $v_1 = null, $v_2 = 0; $v_2 < $v_0.Children.length; $v_2++) {
            var $v_3 = $v_0.Children[$v_2];
            if ($v_3.Id === $p0) {
                $v_1 = $v_3;
                break
            }
        }
        if ($v_1)
            for (var $v_4 = 0; $v_4 < $v_1.Children.length; $v_4++)
                for (var $v_5 = $v_1.Children[$v_4], $v_6 = 0; $v_6 < $v_5.Children.length; $v_6++) {
                    var $v_7 = $v_5.Children[$v_6];
                    if ($v_7.Id === $p1) return $v_7
                }
        for (var $v_8 = 0; $v_8 < $v_0.Children.length; $v_8++) {
            var $v_9 = $v_0.Children[$v_8];
            if ($v_9 === $v_1) continue;
            for (var $v_A = 0; $v_A < $v_9.Children.length; $v_A++)
                for (var $v_B = $v_9.Children[$v_A], $v_C = 0; $v_C < $v_B.Children.length; $v_C++) {
                    var $v_D = $v_B.Children[$v_C];
                    if ($v_D.Id === $p1) return $v_D
                }
        }
        throw Error.argument(String.format("{0}, {1}", $p0, $p1))
    },
    $4T_3: function($p0) {
        $p0.val = null;
        if (IsNull(this.$C_3)) return false;
        var $v_0 = Mscrm.NavBar.$21(this.$C_3);
        $p0.val = Mscrm.CrmUri.create($v_0);
        if (IsNull($p0.val)) $p0.val = Mscrm.CrmUri.create("");
        return !$p0.val.get_isWebResource()
    },
    $5x_3: function($p0) {
        var $v_0, $$t_8, $$t_9;
        if ($$t_9 = this.$4T_3($$t_8 = { val: $v_0 }), $v_0 = $$t_8.val, $$t_9) {
            var $$dict_3 = $p0;
            for (var $$key_4 in $$dict_3) {
                var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
                if (!IsNull($v_1.value) && $v_1.key !== "refreshDashboard") {
                    if (this.$K_3.Id.toUpperCase() === "SETTINGS" &&
                    ($v_1.key === "layout" ||
                        $v_1.key === "visualizationId" ||
                        $v_1.key === "visualizationPaneMode" ||
                        $v_1.key === "visualizationType")) continue;
                    $v_0.get_query()[$v_1.key] = $v_1.value
                }
            }
            Mscrm.NavBar.$3L(this.$C_3, $v_0.toString());
            if (this.$C_3.Id === "nav_dashboards") {
                var $v_2 = Mscrm.NavBar.$3F(this.$K_3.Id, this.$C_3.ParentId, this.$C_3.Id),
                    $v_3 = Mscrm.CrmUri.create(Mscrm.NavBar.$21(this.$W_3)),
                    $v_4 = {};
                $v_4["updateQueryString"] = $v_0.get_queryString();
                this.raiseEvent(43, $v_4);
                if ($v_2 === $v_3.get_query()["sitemappath"]) {
                    $v_0.get_query()["sitemappath"] = $v_2;
                    Mscrm.NavBar.$3L(this.$W_3, $v_0.toString())
                }
                $p0["refreshDashboard"] && this.$13_3(this.$C_3)
            }
        }
    },
    $5p_3: function($p0) {
        Mscrm.Utilities.getDomEventKeyCode($p0) === 27 && this.$60_3();
        var $v_0 = $P_CRM(".meqfSearchButton").is(":focus") || $P_CRM("#search").is(":focus");
        Mscrm.Utilities.getDomEventKeyCode($p0) === 13 && $v_0 && this.$4h_3(this.$1K_3);
        var $v_1 = $P_CRM(".navTabButtonLink");
        $v_1.attr("tabindex", "0")
    },
    $5u_3: function() { $P_CRM(String.format("#{0} .{1}", this.$2D_3, "navTabButtonRight")).last().find("a").focus() },
    $5t_3: function() { $P_CRM(String.format("#{0} .{1}", this.$2D_3, "navTabButtonLink")).first().focus() },
    $5w_3: function($p0) {
        var $v_0, $$t_6, $$t_7;
        if ($$t_7 = this.$4T_3($$t_6 = { val: $v_0 }), $v_0 = $$t_6.val, $$t_7) {
            $v_0.get_query()["viewid"] = $p0["viewId"];
            $v_0.get_query()["viewtype"] = $p0["viewType"];
            if (!IsNull($p0["childEntityName"])) $v_0.get_query()["type"] = $p0["childEntityName"];
            if (!IsNull($p0["datefilter"])) $v_0.get_query()["datefilter"] = $p0["datefilter"];
            if (!IsNull($p0["extraParameters"])) {
                var $v_1 = $p0["extraParameters"], $$dict_4 = $v_1;
                for (var $$key_5 in $$dict_4) {
                    var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
                    $v_0.get_query()[$v_2.key] = $v_2.value
                }
            }
            Mscrm.NavBar.$3L(this.$C_3, $v_0.toString())
        }
    },
    $5m_3: function() {
        var $v_0 = "", $v_1 = "", $v_2 = "";
        if (!IsNull(this.$K_3)) $v_0 = this.$K_3.Id;
        if (!IsNull(this.$C_3)) {
            $v_1 = this.$C_3.Id;
            $v_2 = this.$C_3.ParentId
        }
        var $v_3 = {};
        $v_3["areaId"] = $v_0;
        $v_3["subAreaId"] = $v_1;
        $v_3["sitemappath"] = Mscrm.NavBar.$3F($v_0, $v_2, $v_1);
        return $v_3
    },
    $5q_3: function($p0) {
        var $v_0 = $p0["uri"], $v_1 = Mscrm.CrmUri.create($v_0);
        switch ($v_1.get_pageType()) {
        case "entityrecord":
            break;
        case "entitylist":
        default:
            this.$4D_3($v_0, true);
            if (!IsNull(this.$t_3)) {
                this.$t_3 = null;
                this.$46_3(false)
            }
            break
        }
        this.$60_3();
        this.$1r_3 = null
    },
    $5o_3: function($p0) {
        this.$4A_3(this.$4g_3($p0));
        this.$5_3.raiseHelpIconLoadedEvent()
    },
    $5l_3: function($p0) {
        if (IsNull(this.$t_3)) return;
        var $$t_1 = this;
        this.$2A_3 = window.setTimeout(function() { $$t_1.$5v_3($p0) }, 0)
    },
    $5v_3: function($p0) {
        var $v_0 = this.$4g_3($p0);
        !IsNull($v_0) && this.$4A_3($v_0);
        if (this.$2A_3 !== -1) {
            window.clearTimeout(this.$2A_3);
            this.$2A_3 = -1
        }
    },
    $4g_3: function($p0) {
        var $v_0 = this.raiseEvent(88, $p0);
        if (!IsNull($v_0) && isArray($v_0) && $v_0.length > 0)
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                if (!IsNull($v_2)) return $v_2
            }
        return null
    },
    $5r_3: function($p0) { this.$4D_3($p0["uri"], false) },
    $5y_3: function() { this.$6h_3() },
    $6h_3: function() {
        var $v_0 = new Mscrm.Resizer(null);
        $v_0.showHideElements()
    },
    $5s_3: function($p0) { this.$4A_3($p0["RecordNode"]) },
    $4A_3: function($p0) {
        if (!IsNull($p0)) {
            this.$t_3 = $p0;
            this.$6f_3(Mscrm.NavBar.getEntityTypeCode($p0));
            this.$3v_3 = !isNullOrEmptyString(this.$t_3.Caption);
            this.$46_3(false)
        }
    },
    $6f_3: function($p0) {
        if (!IsNull(this
                .$C_3) &&
            (!this.$C_3.UpdateBreadcrumb || Mscrm.NavBar.getEntityTypeCode(this.$C_3) === $p0)) return;
        if (!IsNull(this.$K_3) && !this.$K_3.UpdateBreadcrumb || this.$4m_3(this.$K_3, $p0)) return;
        for (var $v_0 = this.$E_3.getRootNode(), $v_1 = 0; $v_1 < $v_0.Children.length; $v_1++)
            if (this.$4m_3($v_0.Children[$v_1], $p0)) {
                this.$K_3 = $v_0.Children[$v_1];
                break
            }
    },
    $4m_3: function($p0, $p1) {
        if (IsNull($p0)) return false;
        for (var $v_0 = 0; $v_0 < $p0.Children.length; $v_0++)
            for (var $v_1 = $p0.Children[$v_0], $v_2 = 0; $v_2 < $v_1.Children.length; $v_2++) {
                var $v_3 = $v_1.Children[$v_2];
                if ($p1 === Mscrm.NavBar.getEntityTypeCode($v_3)) {
                    this.$C_3 = $v_3;
                    return true
                }
            }
        return false
    },
    $5F_3: function($p0) {
        !IsNull(this.$10_3) && window.clearTimeout(this.$10_3);
        this.$10_3 = window.setTimeout(this.$$d_$60_3, 600)
    },
    $67_3: function($p0) { this.$60_3() },
    $6E_3: function($p0) {
        if (!IsNull(this.$10_3)) {
            window.clearTimeout(this.$10_3);
            this.$10_3 = null
        }
    },
    $62_3: function() { $P_CRM(".navStatusClose").click() },
    $60_3: function($p0) {
        !IsNull(this.$10_3) && window.clearTimeout(this.$10_3);
        this.$10_3 = null;
        this.$U_3.$16_0 = !$p0;
        this.$4_3.blockInputUntilFinished(this.$f_3.hide());
        this.$4_3.blockInputUntilFinished(this.$U_3.hide());
        this.$4_3.blockInputUntilFinished(this.$k_3.hide());
        this.$4_3.blockInputUntilFinished(this.$X_3.hide());
        this.$4_3.blockInputUntilFinished(this.$g_3.hide());
        this.$1Q_3();
        this.$n_3.hideOverlay()
    },
    $1Q_3: function() {
        this.$4_3.blockInputUntilFinished(this.$2H_3.hide());
        this.$4_3.blockInputUntilFinished(this.$2F_3.hide());
        this.$4_3.blockInputUntilFinished(this.$2L_3.hide())
    },
    $1D_3: function() {
        this.$S_3 = null;
        this.$5_3.unselectNodes();
        this.$U_3.unselectNodes();
        this.$g_3.unselectNodes();
        this.$k_3.unselectNodes();
        this.$X_3.unselectNodes()
    },
    $13_3: function($p0) {
        if (IsNull($p0)) throw Error.argumentNull("navigationNode");
        var $v_0 = this.$3h_3.createAction($p0);
        $v_0.execute()
    },
    $5k_3: function($p0, $p1) { this.$5_3.unselectNodes() },
    $5n_3: function($p0) {
        if (!this.$2X_3) {
            var $v_0 = $P_CRM($p0.currentTarget), $v_1 = $v_0.data()["activateOnHover"];
            if (!$v_1) {
                this.$5_3.unselectNodes();
                this.$60_3()
            } else if (!$v_0.hasClass("selected")) {
                $P_CRM("#crmMasthead").focus();
                $v_0.click()
            }
        }
    },
    getNavigationStructure: function() {
        var $v_0 = new Mscrm.ExecutionCompletedNotifier;
        $v_0.NotifyCompleted(this.$2z_3);
        return $v_0
    },
    $57_3: function($p0) {
        for (var $$arr_1 = this.$1F_3, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3], $v_1 = parseInt($v_0.Id);
            if ($p0 === $v_1) return $v_0.ImageUrl
        }
        return null
    }
};
Mscrm.Resizer = function(container) {
    if (Mscrm.NavBar.$4d()) {
        this.$2O_0 = 870;
        this.$3A_0 = 770;
        this.$3D_0 = 1024;
        this.$1f_0 = 570;
        this.$1P_0 = 430;
        this.$1z_0 = this.$1P_0;
        this.$1d_0 = this.$1P_0 - 28;
        this.$20_0 = this.$1d_0 - 40;
        this.$2M_0 = this.$20_0 - 32;
        this.$3C_0 = this.$2M_0 - 53;
        this.$39_0 = 420;
        this.$3E_0 = 1680
    } else {
        this.$2O_0 = 1200;
        this.$3B_0 = 450;
        this.$3A_0 = 1100;
        this.$3D_0 = 1280;
        this.$1z_0 = 768;
        this.$1f_0 = 870;
        this.$1P_0 = 730;
        this.$1d_0 = this.$1P_0 - 28;
        this.$20_0 = this.$1d_0 - 40;
        this.$2M_0 = this.$20_0 - 32;
        this.$3C_0 = 150;
        this.$39_0 = 520;
        this.$3E_0 = 1680
    }
    if (!IsNull(container)) this.$L_0 = container
};
Mscrm.Resizer.prototype = {
    $2O_0: 0,
    $3B_0: 0,
    $3A_0: 0,
    $3D_0: 0,
    $1z_0: 0,
    $1f_0: 0,
    $1P_0: 0,
    $1d_0: 0,
    $20_0: 0,
    $2M_0: 0,
    $3C_0: 0,
    $39_0: 0,
    $3E_0: 0,
    $T_0: 0,
    $L_0: null,
    $9_0: function($p0) {
        if (!IsNull(this.$L_0)) return $P_CRM($p0, this.$L_0);
        return $P_CRM($p0)
    },
    showHideElements: function() {
        this.$T_0 = $P_CRM(window).innerWidth();
        this.$14_0(this.$5O_0(), this.$3B_0);
        if (this.$T_0 > this.$3B_0) this.$2P_0(this.$4M_0());
        else this.$2R_0(this.$4M_0());
        this.$14_0(this.$5R_0(), this.$3C_0);
        this.$14_0(this.$5P_0(), this.$2M_0);
        this.$14_0(this.$5Q_0(), this.$3A_0);
        this.$14_0(this.$5V_0(), this.$1z_0);
        this.$14_0(this.$5b_0(), this.$1f_0);
        this.$14_0(this.$5a_0(), this.$1d_0);
        this.$14_0(this.$5X_0(), this.$20_0);
        this.$14_0(this.$4O_0(), this.$1P_0);
        this.$14_0(this.$42_0(), this.$1z_0);
        this.$6W_0(this.$4Q_0(), this.$3D_0);
        this.$4y_0(this.$5W_0(), this.$3E_0);
        if (this.$T_0 > this.$2O_0) this.$5h_0();
        else if (this.$T_0 <= this.$2O_0 && this.$T_0 > this.$1f_0) this.$5f_0();
        else if (this.$T_0 <= this.$1f_0 && this.$T_0 > this.$1P_0) this.$5g_0();
        else this.$5e_0();
        if (this.$T_0 > this.$39_0) this.$4u_0();
        else this.$4t_0()
    },
    $14_0: function($p0, $p1) {
        if (this.$T_0 > $p1) this.$2R_0($p0);
        else this.$2P_0($p0)
    },
    $6W_0: function($p0, $p1) {
        var $v_0 = this.$9_0("#findCriteriaButton");
        if (this.$T_0 > $p1) this.$6X_0($p0, $v_0);
        else this.$4Y_0($p0, $v_0);
        this.$63_0($p0, $v_0)
    },
    $63_0: function($p0, $p1) {
        if (this.$T_0 > this.$1d_0) {
            this.$2R_0(this.$4O_0());
            if (this.$T_0 > this.$1z_0) {
                this.$2R_0(this.$42_0());
                this.$9_0("#navTabSerachSpacer").show()
            }
            var $v_0 = this.$5S_0(), $v_1 = this.$9_0(".navFloatRight").width();
            if ($v_1 + $v_0 > this.$T_0) {
                this.$4Y_0($p0, $p1);
                this.$2P_0(this.$5Z_0());
                if (this.$T_0 < this.$1f_0) {
                    this.$2P_0(this.$42_0());
                    this.$9_0("#navTabSerachSpacer").hide()
                }
            }
        }
    },
    $5S_0: function() {
        for (var $v_0 = 0, $v_1 = 0; $v_1 <= this.$9_0(".navTabGroup ").children().length; $v_1++)
            if (!IsNull(this.$9_0(".navTabGroup ").children()[$v_1])) {
                if (this.$9_0(".navTabGroup ").children()[$v_1].className
                    .indexOf("navTabButton") !==
                    -1) $v_0 = $v_0 + this.$9_0(".navTabGroup ").children()[$v_1].offsetWidth;
                if (this.$9_0(".navTabGroup ").children()[$v_1].className
                    .indexOf("navBarTopLevelItem") !==
                    -1) $v_0 = $v_0 + this.$9_0(".navTabGroup ").children()[$v_1].offsetWidth
            }
        return $v_0
    },
    $4Y_0: function($p0, $p1) {
        !isNullOrEmptyString($p0.val()) && $p0.val("");
        $p0.is(":focus") && $p0.blur();
        this.$2P_0($p0);
        this.$38_0($p1, "navSearchButtonLayout");
        this.$3J_0($p1, "navSearchButtonHeight");
        var $v_0 = $p1.children("#findCriteriaImg"), $v_1 = window.HighContrastEnabled;
        if (!IsNull($v_0) && !IsNull($v_0.attr("src")))
            if ($v_1) $v_0.attr("src", "/_imgs/navbar/highcontrast/search_hc_16.png");
            else $v_0.attr("src", "/_imgs/navbar/invisible.gif");
        this.$9_0("#TabSearch").addClass("searchIconOnly").removeClass("navBarSearchTextBoxDiv")
    },
    $6X_0: function($p0, $p1) {
        this.$2R_0($p0);
        this.$3J_0($p1, "navSearchButtonLayout");
        this.$38_0($p1, "navSearchButtonHeight");
        var $v_0 = $p1.children("#findCriteriaImg"), $v_1 = window.HighContrastEnabled;
        if (!IsNull($v_0) && !IsNull($v_0.attr("src")))
            if ($v_1) $v_0.attr("src", "/_imgs/search_high_contrast.png");
            else $v_0.attr("src", "/_imgs/search_grey_16.png");
        this.$9_0("#TabSearch").removeClass("searchIconOnly").addClass("navBarSearchTextBoxDiv")
    },
    $4y_0: function($p0, $p1) {
        if (!this.$4Q_0().hasClass("navTabHidden"))
            if (this.$T_0 >= $p1) $p0.css("width", "220px");
            else $p0.css("width", "170px");
        else $p0.css("width", "")
    },
    $38_0: function($p0, $p1) { !$p0.hasClass($p1) && $p0.addClass($p1) },
    $3J_0: function($p0, $p1) { $p0.hasClass($p1) && $p0.removeClass($p1) },
    $2P_0: function($p0) { this.$38_0($p0, "navTabHidden") },
    $2R_0: function($p0) { this.$3J_0($p0, "navTabHidden") },
    $4u_0: function() {
        this.$4G_0(this.$4P_0());
        this.$4G_0(this.$4R_0())
    },
    $4t_0: function() {
        this.$4F_0(this.$4P_0());
        this.$4F_0(this.$4R_0())
    },
    $4F_0: function($p0) { this.$38_0($p0, "navTabButtonNarrowText") },
    $4G_0: function($p0) { this.$3J_0($p0, "navTabButtonNarrowText") },
    $5h_0: function() { this.$3H_0().css("width", "22px") },
    $5f_0: function() { this.$3H_0().css("width", "22px") },
    $5g_0: function() { this.$3H_0().css("width", "18px") },
    $5e_0: function() { this.$3H_0().css("width", "0") },
    $5O_0: function() { return this.$9_0("#TabnavTabLogoTextId, #TabnavTabLogoTextId_divider") },
    $5Q_0: function() { return this.$9_0("#navBarGlobalQuickCreateTextId") },
    $4Q_0: function() { return this.$9_0("#search") },
    $5W_0: function() { return this.$9_0("#TabSearch") },
    $5V_0: function() { return this.$9_0("#TabSearch") },
    $42_0: function() { return this.$9_0("#AdvFindSearch") },
    $5b_0: function() { return this.$9_0("#navBarUserInfoTextId") },
    $3H_0: function() { return this.$9_0("#navTabQuickCreateSpacer") },
    $4O_0: function() { return this.$9_0("#TabButtonHelpId") },
    $5a_0: function() { return this.$9_0("#TabUserInfoId") },
    $5X_0: function() { return this.$9_0("#TabButtonSettingsId") },
    $5P_0: function() { return this.$9_0("#GQC") },
    $5R_0: function() { return this.$9_0("#TabHome") },
    $4M_0: function() { return this.$9_0("#TabCRMHome") },
    $4P_0: function() { return this.$9_0("#navTabModuleButtonTextId") },
    $5Z_0: function() { return this.$9_0("#TabUserInfoId") },
    $4R_0: function() { return this.$9_0(".navTabSplitButtonTextCss") }
};
Mscrm.AreaNavigationUrlBuilder = function() { Mscrm.AreaNavigationUrlBuilder.initializeBase(this) };
Mscrm.AreaNavigationUrlBuilder.prototype = {
    getNavigationUrl: function(node) {
        IsNull(node) && Error.argumentNull("node");
        var $v_0 = Mscrm.CrmUri.create(String.format("main.aspx?web=true&page={0}&area=cMyWork",
            CrmEncodeDecode.CrmUrlEncode(node.Id)));
        return $v_0
    }
};
Mscrm.DashboardNavigationUrlBuilder = function() { Mscrm.DashboardNavigationUrlBuilder.initializeBase(this) };
Mscrm.DashboardNavigationUrlBuilder.prototype = {
    getNavigationUrl: function(node) {
        IsNull(node) && Error.argumentNull("node");
        var $v_0 = null;
        if (!IsNull(node.Action) &&
            "ActionType" in node.Action &&
            node.Action["ActionType"].toString().toUpperCase() === "MRUACTION") {
            var $v_2 = Mscrm.CrmUri.create("main.aspx?" + node.Action["Action"].toString());
            $v_0 = "sitemappath" in $v_2.get_query() ? $v_2.get_query()["sitemappath"].toString() : ""
        } else $v_0 = node.SiteMapPath;
        isNullOrEmptyString($v_0) && Error.argument("sitemap path");
        var $v_1 = Mscrm.CrmUri.create(String.format("/main.aspx?web=true&pageType=dashboard&page={0}&area={1}",
            CrmEncodeDecode.CrmUrlEncode(this.getAreaId($v_0)),
            CrmEncodeDecode.CrmUrlEncode(this.getSubareaId($v_0))));
        $v_1.set_includeContextInPath(true);
        return $v_1
    }
};
Mscrm.EntityNavigationUrlBuilder = function() { Mscrm.EntityNavigationUrlBuilder.initializeBase(this) };
Mscrm.EntityNavigationUrlBuilder.prototype = {
    getNavigationUrl: function(node) {
        IsNull(node) && Error.argumentNull("node");
        isNullOrEmptyString(node.SiteMapPath) && Error.argument("NavigationNode.SiteMapPath");
        IsNull(node.Action) && Error.argument("NavigationNode.Action");
        var $v_0 = Mscrm.CrmUri.create(node.Action["PageUrl"].toString()),
            $v_1 = "etc" in $v_0.get_query() ? $v_0.get_query()["etc"].toString() : "",
            $v_2 = Mscrm.CrmUri.create(String
                .format("/main.aspx?web=true&pageType=EntityList&page={0}&area={1}&etc={2}",
                    CrmEncodeDecode.CrmUrlEncode(this.getAreaId(node.SiteMapPath)),
                    CrmEncodeDecode.CrmUrlEncode(this.getSubareaId(node.SiteMapPath)),
                    CrmEncodeDecode.CrmUrlEncode($v_1)));
        $v_2.set_includeContextInPath(true);
        return $v_2
    }
};
Mscrm.EntityRecordNavigationUrlBuilder = function() { Mscrm.EntityRecordNavigationUrlBuilder.initializeBase(this) };
Mscrm.EntityRecordNavigationUrlBuilder.prototype = {
    getNavigationUrl: function(node) {
        IsNull(node) && Error.argumentNull("node");
        IsNull(node.Action) && Error.argument("NavigationNode.Action");
        var $v_0 = Mscrm.CrmUri.create(String.format("/main.aspx?pagetype=entityrecord&id={0}&etc={1}",
            CrmEncodeDecode.CrmUrlEncode(node.Action["Id"].toString()),
            CrmEncodeDecode.CrmUrlEncode(node.Action["EntityTypeCode"].toString())));
        $v_0.set_includeContextInPath(true);
        return $v_0
    }
};
Mscrm.GenericNavigationUrlBuilder = function() { Mscrm.GenericNavigationUrlBuilder.initializeBase(this) };
Mscrm.GenericNavigationUrlBuilder.prototype = {
    getNavigationUrl: function(node) {
        IsNull(node) && Error.argumentNull("node");
        var $v_0;
        if (!IsNull(node
                .Action) &&
            "PageUrl" in node.Action &&
            !IsNull(node.Action["PageUrl"])) $v_0 = Mscrm.CrmUri.create(node.Action["PageUrl"].toString());
        else $v_0 = Mscrm.CrmUri.create("javascript;;");
        return $v_0
    }
};
Mscrm.NavigationUrlBuilder = function() {};
Mscrm.NavigationUrlBuilder.prototype = {
    getNavigationUrl: function(node) { return Mscrm.CrmUri.create("javascript;;") },
    getAreaId: function(siteMapPath) { return siteMapPath.split("|")[0] },
    getSubareaId: function(siteMapPath) { return siteMapPath.split("|")[2] }
};
Mscrm.NavigationUrlBuilderFactory = function() {};
Mscrm.NavigationUrlBuilderFactory.getNavigationUrlBuilder = function($p0) {
    IsNull($p0) && Error.argumentNull("node");
    if (!isNullOrEmptyString($p0.ParentId) && $p0.ParentId === "1") return new Mscrm.AreaNavigationUrlBuilder;
    if (IsNull($p0.Action)) return new Mscrm.GenericNavigationUrlBuilder;
    switch ($p0.Action["ActionType"].toString().toUpperCase()) {
    case "MRUACTION":
        if ($p0.Action["EntityTypeCode"] === 1030) return new Mscrm.DashboardNavigationUrlBuilder;
        else return new Mscrm.EntityRecordNavigationUrlBuilder;
    case "NAVIGATETOPAGEACTION":
        var $v_0 = Mscrm.CrmUri.create($p0.Action["PageUrl"].toString()), $v_1 = $v_0.get_path().toLowerCase();
        if ($v_1.endsWith("home_dashboards.aspx")) return new Mscrm.DashboardNavigationUrlBuilder;
        else if ($v_1
            .endsWith("main.aspx") ||
            $v_1.endsWith("homepage.aspx")) return new Mscrm.EntityNavigationUrlBuilder;
        else return new Mscrm.GenericNavigationUrlBuilder;
    default:
        return new Mscrm.GenericNavigationUrlBuilder
    }
};
Mscrm.ActionGroupShuffleControl = function(containerFactory, shuffleStrategy) {
    Mscrm.ActionGroupShuffleControl.initializeBase(this, [containerFactory, shuffleStrategy])
};
Mscrm.ActionGroupShuffleControl.prototype = {
    getContent: function(navigationNodes) {
        var $v_0 = this.$V_0.create(navigationNodes), $v_1 = new Mscrm.ActionGroupBuilder("nav-shuffle", $v_0);
        return $v_1.build()
    }
};
Mscrm.ShuffleControl = function(containerFactory, shuffleStrategy) {
    Mscrm.ShuffleControl.initializeBase(this, [containerFactory]);
    this.$48_1 = shuffleStrategy
};
Mscrm.ShuffleControl.prototype = {
    $48_1: null,
    shuffle: function(id, newIndex) {
        var $v_0 = this.$5T_1(id);
        this.$48_1.shuffle($v_0, newIndex)
    },
    $5T_1: function($p0) {
        var $v_0 = $p0.replace(new RegExp("(:|\\{|\\})", "g"), "\\$1"),
            $v_1 = $P_CRM("#" + $v_0).parents(".nav-subgroup");
        return $v_1
    }
};
Mscrm.ActionButtonPinnableBuilder = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10, $p11) {
    this.$$d_$4X_0 = Function.createDelegate(this, this.$4X_0);
    this.$$d_$4l_0 = Function.createDelegate(this, this.$4l_0);
    if (isNullOrEmptyString($p0)) throw Error.argumentNull("id");
    if (isNullOrEmptyString($p1)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString($p2)) throw Error.argumentNull("tooltip");
    if (isNullOrEmptyString($p3)) throw Error.argumentNull("image");
    if (isNullOrEmptyString($p5)) throw Error.argumentNull("color accent");
    if (IsNull($p6)) throw Error.argumentNull("navigationUrl");
    if (IsNull($p9)) throw Error.argumentNull("recordType");
    this.$1_0 = $p0;
    this.$3_0 = $p1;
    this.$3x_0 = $p2;
    this.$I_0 = $p3;
    this.$3b_0 = $p4;
    this.$D_0 = $p5;
    this.$18_0 = $p6;
    this.$2_0 = $p7;
    this.$3m_0 = $p8;
    this.$2r_0 = $p9;
    this.$1B_0 = $p10;
    this.$o_0 = $p11
};
Mscrm.ActionButtonPinnableBuilder.$5M = function($p0) {
    if ($p0.hasClass("pinned")) {
        if ($p0.hasClass("navbar-mru-record")) $p0.attr("title", window.GlobalMruPinRecordTooltip);
        else $p0.attr("title", window.GlobalMruPinViewTooltip);
        $p0.find("img").attr("src",
            window.HighContrastEnabled ? Mscrm.ActionButtonPinnableBuilder.$3I() : "/_imgs/NavBar/Invisible.gif")
    } else {
        if ($p0.hasClass("navbar-mru-record")) $p0.attr("title", window.GlobalMruUnpinRecordTooltip);
        else $p0.attr("title", window.GlobalMruUnpinViewTooltip);
        $p0.find("img").attr("src",
            window.HighContrastEnabled
            ? "/_imgs/NavBar/HighContrast/RecordPinned_HC.png"
            : "/_imgs/NavBar/RecordPinned.png")
    }
    $p0.toggleClass("pinned");
    $p0.toggleClass("unpinned")
};
Mscrm.ActionButtonPinnableBuilder.$4f = function() {
    return Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled() || window.UseTabletExperience
};
Mscrm.ActionButtonPinnableBuilder.$3I = function() {
    return Mscrm.ActionButtonPinnableBuilder.$4f()
        ? "/_imgs/NavBar/HighContrast/RecordUnPinned_HC.png"
        : "/_imgs/NavBar/Invisible.gif"
};
Mscrm.ActionButtonPinnableBuilder.prototype = {
    $1_0: null,
    $3_0: null,
    $3x_0: null,
    $I_0: null,
    $D_0: null,
    $o_0: null,
    $1B_0: null,
    $18_0: null,
    $3b_0: false,
    $2_0: null,
    $3m_0: null,
    $2r_0: 0,
    build: function() {
        var $v_0, $v_1, $v_2, $v_3, $v_4;
        if (this.$3b_0) {
            $v_1 = window.HighContrastEnabled
                ? "/_imgs/NavBar/HighContrast/RecordPinned_HC.png"
                : "/_imgs/NavBar/RecordPinned.png";
            if (!this.$2r_0) {
                $v_2 = window.GlobalMruUnpinRecordTooltip;
                $v_4 = "navbar-mru-record"
            } else {
                $v_2 = window.GlobalMruUnpinViewTooltip;
                $v_4 = "navbar-mru-view"
            }
            $v_3 = "pinned"
        } else {
            $v_1 = window.HighContrastEnabled ? Mscrm.ActionButtonPinnableBuilder.$3I() : "/_imgs/NavBar/Invisible.gif";
            if (!this.$2r_0) {
                $v_2 = window.GlobalMruPinRecordTooltip;
                $v_4 = "navbar-mru-record"
            } else {
                $v_2 = window.GlobalMruPinViewTooltip;
                $v_4 = "navbar-mru-view"
            }
            $v_3 = "unpinned"
        }
        $v_0 = String
            .format("<a class='pinStatusContainer {2} {3}' title = '{0}' role='button' href='javascript:;' unselectable='on' tabindex='0'>\r\n\t\t\t\t\t\t\t\t\t\t\t<img src='{1}' alt = '{0}' unselectable='on'/>\r\n\t\t\t\t\t\t\t\t\t\t</a>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode($v_3), CrmEncodeDecode.CrmHtmlAttributeEncode($v_4));
        var $v_5 = Mscrm.BuilderHelper.fromHtmlBindClick($v_0, this.$3m_0), $$t_G = this;
        $v_5.bind("click", function($p1_0) { Mscrm.ActionButtonPinnableBuilder.$5M($v_5) });
        Mscrm.ActionButtonPinnableBuilder.$4f() && $v_5.addClass("mru-touch-enabled");
        if (window.HighContrastEnabled) {
            var $$t_H = this;
            $v_5.focus(function($p1_0) {
                $P_CRM($p1_0.target).hasClass("unpinned") &&
                    $p1_0.target.children[0].setAttribute("src", "/_imgs/NavBar/HighContrast/RecordUnPinned_HC.png")
            });
            var $$t_I = this;
            $v_5.blur(function($p1_0) {
                $P_CRM($p1_0.target).hasClass("unpinned") &&
                    $p1_0.target.children[0].setAttribute("src", Mscrm.ActionButtonPinnableBuilder.$3I())
            })
        }
        var $v_6 = this.$1B_0;
        if (isNullOrEmptyString(this.$o_0)) $v_6 = this.$I_0;
        var $v_7 = String
                .format("<a class='nav-rowBody {2}' id='{0}' title='{6}' href='{5}' unselectable='on' iscontextmenuenabled='true' >\r\n\t\t\t\t\t\t\t\t\t\t<span class='nav-iconContainer' unselectable='on'>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class='nav-img-32by32 nav-img-cont-float actionListImg' unselectable='on' style='background-color: #ABB4C2'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src='{1}' class='{7}' alt = '' unselectable='on' {3} />\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class='contentContainer'>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class='nav-rowLabel'  unselectable='on'>{4}</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>", CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_6), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()), String.format('style="background-color: {0}"', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_0)), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$18_0.toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3x_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$o_0)),
            $v_8 = Mscrm.BuilderHelper.fromHtmlBindClick($v_7, this.$2_0);
        $v_8.find(".contentContainer").append($v_5);
        if (window.HighContrastEnabled) {
            $v_8.focus(this.$$d_$4l_0);
            var $$t_J = this;
            $v_8.bind("mouseenter", function($p1_0) { $$t_J.$4l_0($p1_0) });
            var $$t_K = this;
            $v_8.bind("mouseleave", function($p1_0) { $$t_K.$4X_0($p1_0) });
            $v_8.blur(this.$$d_$4X_0)
        }
        var $v_9 = new Mscrm.ActionButtonContainerBuilder("nav-subgroup"), $v_A = $v_9.build();
        $v_A.append($v_8);
        return $v_A
    },
    $4l_0: function($p0) {
        var $v_0 = $P_CRM(".unpinned", $P_CRM($p0.currentTarget));
        $v_0.length && $v_0.children("img").attr("src", "/_imgs/NavBar/HighContrast/RecordUnPinned_HC.png");
        $p0.preventDefault();
        $p0.stopPropagation()
    },
    $4X_0: function($p0) {
        var $v_0 = $P_CRM(".unpinned", $P_CRM($p0.currentTarget));
        $v_0.length && $v_0.children("img").attr("src", Mscrm.ActionButtonPinnableBuilder.$3I());
        $p0.preventDefault();
        $p0.stopPropagation()
    }
};
Mscrm.ActionListGroupModuleBuilder = function(groupCaption, groupId, groupSectionBuilders) {
    if (IsNull(groupId)) throw Error.argumentNull("groupId");
    if (IsNull(groupSectionBuilders)) throw Error.argumentNull("groupSectionBuilders");
    if (!groupSectionBuilders.length) throw Error.argumentNull("groupSectionBuilders");
    this.$l_0 = groupCaption;
    this.$1A_0 = groupId;
    this.$N_0 = groupSectionBuilders
};
Mscrm.ActionListGroupModuleBuilder.prototype = {
    $N_0: null,
    $l_0: null,
    $1A_0: null,
    build: function() {
        for (var $v_0 = $P_CRM(String
                     .format('<li class="nav-subgroup" unselectable="on"><span class="nav-groupContainer" unselectable="on"><span class="nav-groupTitle" title="{0}" id="{1}" unselectable="on">{2}</span><span class="nav-groupBody" unselectable="on"><span class="nav-layout" unselectable="on"/></span></span></li>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$l_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1A_0), CrmEncodeDecode.CrmHtmlEncode(this.$l_0))),
            $v_1 = 0;
            $v_1 < this.$N_0.length;
            $v_1++) !IsNull(this.$N_0[$v_1]) && $P_CRM(".nav-layout", $v_0).append(this.$N_0[$v_1].build());
        return $v_0
    }
};
Mscrm.AdvFindButtonBuilder = function(caption, clickEventHandler, hoverEventHandler) {
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.AdvFindButtonBuilder.prototype = {
    $3_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = null, $v_1 = Mscrm.BuilderHelper.returnTitleAndDescription(this.$3_0, window.NavBarAdvancedFindDesc);
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span class="navTabButton navHomeButton navAdvSearch" id="{0}" title="{1}"><a class="navTabButtonLink" onkeypress="return true;" onclick="return false;" tabindex="0" title="{1}" href="#" unselectable="on"><span class="navTabButtonImageContainer" unselectable="on"><span unselectable="on" id="advancedFindImage"></span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("AdvFindSearch"), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/navbar/highcontrast/advance_find_hc_24.png")), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarSplit.png", "/_imgs/NavBar/NavBarSplit.png"))),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.GlobalMruBuilderProvider = function($p0, $p1) {
    if (IsNull($p0)) throw Error.argumentNull("createNodeClickedHandler");
    this.$7_0 = $p0;
    this.$3T_0 = $p1
};
Mscrm.GlobalMruBuilderProvider.prototype = {
    $7_0: null,
    $3T_0: null,
    $1C_0: null,
    create: function($p0) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1];
            this.$1C_0 = Mscrm.NavigationUrlBuilderFactory.getNavigationUrlBuilder($v_2);
            if (!$v_2.Parameters) throw Error.argumentNull("Parameters");
            if ($v_2.Parameters["type"]
                .toString() ===
                "pinnable")
                $v_0[$v_1] = new Mscrm
                    .ActionButtonPinnableBuilder($v_2.Id,
                        $v_2.Caption,
                        $v_2.Parameters["tooltip"],
                        $v_2.ImageUrl,
                        $v_2.Parameters["isPinned"],
                        $v_2.ColorAccent,
                        this.$1C_0.getNavigationUrl($v_2),
                        Mscrm.BuilderHelper.createEventHandler(this.$7_0, $v_2),
                        Mscrm.BuilderHelper.createEventHandler(this.$3T_0, $v_2),
                        $v_2.Parameters["recordType"],
                        $v_2.StripeUrl,
                        $v_2.StripeClass);
            else if ($v_2.Parameters["type"].toString() === "separator") $v_0[$v_1] = new Mscrm.SeparatorBuilder
        }
        return $v_0
    }
};
Mscrm.GlobalMruButtonBuilder = function($p0, $p1, $p2, $p3) {
    this.$1_0 = $p0;
    this.$3_0 = $p1;
    this.$2_0 = $p2;
    this.$0_0 = $p3
};
Mscrm.GlobalMruButtonBuilder.prototype = {
    $2_0: null,
    $0_0: null,
    $1_0: null,
    $3_0: null,
    build: function() {
        var $v_0 = "globalMruButtonImage",
            $v_1 = Mscrm.BuilderHelper.returnTitleAndDescription(this.$3_0, window.GlobalMruItemTooltipDesc),
            $v_2 = Mscrm.BuilderHelper
                .fromHtmlBindClickHover(String
                    .format("<span class='navTabButton' id='{0}' title='{1}'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class='navTabButtonLink' href='#' unselectable='on' title='{1}'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class='navTabButtonImageContainer' unselectable='on'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id='navTabGlobalMruImage_{0}' class='{2}' unselectable='on'></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>", "Tab" + CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), $v_0, CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/Invisible.gif", "/_imgs/NavBar/HighContrast/NavBarGlobalMru_HC.png"))),
                    this.$2_0,
                    this.$0_0,
                    false);
        return $v_2
    }
};
Mscrm.GroupedGlobalMruBuilderProvider = function($p0) {
    if (IsNull($p0)) throw Error.argumentNull("actionBuilderProvider");
    this.$15_0 = $p0
};
Mscrm.GroupedGlobalMruBuilderProvider.prototype = {
    $15_0: null,
    create: function($p0) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1], $v_3 = this.$15_0.create($v_2.Children);
            $v_0.push(new Mscrm.ListBuilder($v_2.Caption, $v_2.Id, $v_3))
        }
        return $v_0
    }
};
Mscrm.ListBuilder = function($p0, $p1, $p2) {
    if (IsNull($p1)) throw Error.argumentNull("groupId");
    if (IsNull($p2)) throw Error.argumentNull("groupSectionBuilders");
    this.$l_0 = $p0;
    this.$1A_0 = $p1;
    this.$N_0 = $p2
};
Mscrm.ListBuilder.prototype = {
    $N_0: null,
    $l_0: null,
    $1A_0: null,
    build: function() {
        var $v_0 = $P_CRM(String
            .format("<li class='nav-group' unselectable='on'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class='nav-groupContainer' unselectable='on'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <label for='{1}'>   \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <span class='nav-groupTitle' title='{0}' id='{1}' tabindex='0' unselectable='on'>{2}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class='nav-groupBody' unselectable='on'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class='nav-layout' unselectable='on'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>", CrmEncodeDecode.CrmHtmlAttributeEncode(this.$l_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1A_0), CrmEncodeDecode.CrmHtmlEncode(this.$l_0)));
        if (!IsNull(this.$N_0) && this.$N_0.length)
            for (var $v_1 = 0;
                $v_1 < this.$N_0.length;
                $v_1++
            ) !IsNull(this.$N_0[$v_1]) && $P_CRM(".nav-layout", $v_0).append(this.$N_0[$v_1].build());
        return $v_0
    }
};
Mscrm.ModuleActionButtonBuilderRefreshed = function(id,
    caption,
    image,
    colorAccent,
    navigationUrl,
    clickEventHandler,
    stripeImage,
    stripeClass) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString(image)) image = "/_imgs/NavBar/Invisible.gif";
    if (IsNull(navigationUrl)) throw Error.argumentNull("navigationUrl");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$I_0 = image;
    this.$2_0 = clickEventHandler;
    this.$18_0 = navigationUrl;
    this.$1B_0 = stripeImage;
    this.$o_0 = stripeClass;
    this.$D_0 = colorAccent
};
Mscrm.ModuleActionButtonBuilderRefreshed.prototype = {
    $1_0: null,
    $3_0: null,
    $I_0: null,
    $D_0: null,
    $o_0: null,
    $1B_0: null,
    $18_0: null,
    $2_0: null,
    build: function() {
        var $v_0 = this.$1B_0;
        if (isNullOrEmptyString(this.$o_0)) $v_0 = this.$I_0;
        var $v_1 = String
                .format('<a class="navActionButtonContainer navActionButton navModuleButton {4}" id="{0}" role="button" {6} title="{1}" href="{7}" unselectable="on" iscontextmenuenabled="true"><span class="navActionButtonIconContainer" unselectable="on"><span class="navActionButtonIcon" unselectable="on"><img src="{2}" class="{8}" alt="{1}" unselectable="on" {3}></span></span><span class="navActionButtonLabel" unselectable="on">{5}</span></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), this.$1_0 === "HLP" ? Mscrm.BuilderHelper.getFlipImageHtmlCode(true, true) : "", CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()), CrmEncodeDecode.CrmHtmlEncode(this.$3_0), isNullOrEmptyString(this.$D_0) ? "" : String.format('style="background-color: {0}"', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_0)), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$18_0.toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$o_0)),
            $v_2 = Mscrm.BuilderHelper.fromHtmlBindClick($v_1, this.$2_0),
            $v_3 = new Mscrm.ActionButtonContainerBuilder("nav-group"),
            $v_4 = $v_3.build();
        $v_4.append($v_2);
        $v_4.append($P_CRM(String.format('<span class="navModuleButtonShadow {0}"></span>',
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.contrastModeClassName()))));
        return $v_4
    }
};
Mscrm.SearchButtonBuilder = function(caption, clickEventHandler, hoverEventHandler) {
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.SearchButtonBuilder.prototype = {
    $3_0: null,
    $2_0: null,
    $0_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper
            .fromHtmlBindClickHover(String
                .format('<span valign="top" id ="SearchNode" class="navTabButton navBarSearchButton" nowrap="" ><a title="{0}" tabindex="0"class="ms-crm-FindButton" style="width: 37px" id href="#" target="_self"><span class="navTabButtonImageContainer" unselectable="on"><span title="{0}" class="navImageFlipHorizontal"></span></span></a></span>', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_MEQF_SEARCH_BUTTON_ALT")), CrmEncodeDecode.CrmHtmlAttributeEncode("/_imgs/navBar/NavBarSearch.png")),
                this.$2_0,
                this.$0_0,
                false);
        return $v_0
    }
};
Mscrm.SeparatorBuilder = function() {};
Mscrm.SeparatorBuilder.prototype = {
    build: function() {
        var $v_0 = new Mscrm.ActionButtonContainerBuilder("nav-subgroup nav-separator"), $v_1 = $v_0.build();
        $v_1.append("<hr/>");
        return $v_1
    }
};
Mscrm.TabLogoImageThemeBuilder = function(logoImagePath, caption, clickEventHandler, hoverEventHandler) {
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString(logoImagePath)) throw Error.argumentNull("logoImageUrl");
    this.$3e_0 = logoImagePath;
    this.$3_0 = caption;
    this.$2_0 = clickEventHandler;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabLogoImageThemeBuilder.prototype = {
    $2_0: null,
    $0_0: null,
    $3e_0: null,
    $3_0: null,
    build: function() {
        var $v_0 = null,
            $v_1 = !window.IsAppSwitcherShellFeatureEnabled
                ? Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_BRAND_CRM_DESC")
                : "",
            $v_2 = Mscrm.BuilderHelper.returnTitleAndDescription(this.$3_0, $v_1),
            $v_3 = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_CAPTION_HOME"),
            $v_4 = window.IsAppSwitcherShellFeatureEnabled
                ? '<span class="navTabButtonImageContainer" unselectable="on"><span class="navTabButtonArrowDown"></span></span>'
                : "";
        $v_0 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
            .format('<span id="{0}{1}" class="navTabButton navTabThemeButton" title="{2}"><a title="{2}" class="navTabButtonLink" onkeypress="return true;" onclick="return false;" href="javascript:;" unselectable="on"><span id="{1}" class="navTabLogoTextThemeImage"><img alt="{5}" unselectable="on" src="{3}"/></span></a>{6}</span><span id="{0}{1}_divider" class="navTabButton navTabButtonModuleSwitcher" title="{2}_divider"><span class="navTabButtonImageContainer" unselectable="on"><img class="navTabDivider" alt="|" unselectable="on" src="{4}"/></span></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode("navTabLogoTextId"), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3e_0), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.BuilderHelper.selectImageBasedOnContrastMode("/_imgs/NavBar/NavBarDivider.png", "/_imgs/NavBar/NavBarDivider.png")), CrmEncodeDecode.CrmHtmlAttributeEncode($v_3), $v_4),
            this.$2_0,
            this.$0_0,
            false);
        return $v_0
    }
};
Mscrm.TabLogoImageThemeBuilderOutlook = function(logoImage, id, caption, hoverEventHandler) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (isNullOrEmptyString(caption)) throw Error.argumentNull("caption");
    if (isNullOrEmptyString(logoImage)) throw Error.argumentNull("logoImage");
    this.$1_0 = id;
    this.$3_0 = caption;
    this.$3d_0 = logoImage;
    this.$0_0 = hoverEventHandler
};
Mscrm.TabLogoImageThemeBuilderOutlook.prototype = {
    $1_0: null,
    $3_0: null,
    $0_0: null,
    $3d_0: null,
    build: function() {
        var $v_0 = Mscrm.BuilderHelper
                .returnTitleAndDescription(this.$3_0,
                    Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_BRAND_CRM_DESC")),
            $v_1 = Mscrm.BuilderHelper.fromHtmlBindClickHover(String
                .format('<span id="{0}{1}" class="navTabButton navTabButtonModuleSwitcher" title="{2}" data-id="{3}"><span class="navCrmLogo"><span id="{4}" aria-label="{5}" class="navTabButtonLink navTabLogoTextThemeOutlookImage"><img class="navTabLogoTextImageOutlookPadding" alt="|" unselectable="on" src="{6}"/></span></span></span>', CrmEncodeDecode.CrmHtmlAttributeEncode("Tab"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode("home"), CrmEncodeDecode.CrmHtmlAttributeEncode("navTabLogoTextId"), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$3d_0)),
                null,
                this.$0_0,
                false);
        return $v_1
    }
};
Mscrm.ChangeProfilePictureAction = function() { Mscrm.ChangeProfilePictureAction.initializeBase(this) };
Mscrm.ChangeProfilePictureAction.prototype = {
    $23_1: null,
    get_userId: function() { return this.$23_1 },
    set_userId: function($p0) {
        this.$23_1 = $p0;
        return $p0
    },
    executeAsync: function() {
        var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_imageupload.aspx");
        $v_0.get_query()["entityId"] = this.$23_1;
        $v_0.get_query()["entityName"] = "systemuser";
        $v_0.get_query()["attributeName"] = "entityimage";
        var $v_1 = 390,
            $v_2 = 456,
            $v_3 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_4 = Mscrm.Utilities.createCallbackFunctionObject("resolve", $v_3, null, false),
            $v_5 = new Mscrm.CrmDialog($v_0, null, $v_2, $v_1, null);
        $v_5.setCallbackReference($v_4);
        $v_5.show();
        return $v_3.promise()
    }
};
Mscrm.AsyncActionBase = function() {};
Mscrm.AsyncActionBase.prototype = { execute: function() { this.executeAsync() } };
Mscrm.ViewEntityAction.registerClass("Mscrm.ViewEntityAction", null, Mscrm.INavigateAction);
Mscrm.GlobalQuickCreateAction.registerClass("Mscrm.GlobalQuickCreateAction", null, Mscrm.INavigateAction);
Mscrm.GlobalQuickCreateActionProvider.registerClass("Mscrm.GlobalQuickCreateActionProvider",
    null,
    Mscrm.INavigateActionProvider);
Mscrm.MruAction.registerClass("Mscrm.MruAction", null, Mscrm.INavigateAction);
Mscrm.MruActionProvider.registerClass("Mscrm.MruActionProvider", null, Mscrm.INavigateActionProvider);
Mscrm.NavBarGlobalQuickCreateCallbacks.registerClass("Mscrm.NavBarGlobalQuickCreateCallbacks",
    Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks);
Mscrm.RecordSiteMapAction.registerClass("Mscrm.RecordSiteMapAction", null, Mscrm.INavigateAction);
Mscrm.RecordSiteMapActionProvider.registerClass("Mscrm.RecordSiteMapActionProvider",
    null,
    Mscrm.INavigateActionProvider);
Mscrm.TestNavigateAction.registerClass("Mscrm.TestNavigateAction", null, Mscrm.INavigateAction);
Mscrm.TestNavigateActionProvider.registerClass("Mscrm.TestNavigateActionProvider", null, Mscrm.INavigateActionProvider);
Mscrm.NavigationNodeActionFactory.registerClass("Mscrm.NavigationNodeActionFactory");
Mscrm.NavigateToPageActionProvider.registerClass("Mscrm.NavigateToPageActionProvider",
    null,
    Mscrm.INavigateActionProvider);
Mscrm.NavigateToPageAction.registerClass("Mscrm.NavigateToPageAction", null, Mscrm.INavigateAction);
Mscrm.ActionButtonContainerBuilder.registerClass("Mscrm.ActionButtonContainerBuilder", null, Mscrm.IBuilder);
Mscrm.ActionButtonSmallBuilder.registerClass("Mscrm.ActionButtonSmallBuilder", null, Mscrm.IBuilder);
Mscrm.ActionButtonBuilder.registerClass("Mscrm.ActionButtonBuilder", null, Mscrm.IBuilder);
Mscrm.ActionsBuilderProvider.registerClass("Mscrm.ActionsBuilderProvider", null, Mscrm.IBuilderProvider);
Mscrm.BuilderHelper.registerClass("Mscrm.BuilderHelper");
Mscrm.ContainerBuilder.registerClass("Mscrm.ContainerBuilder", null, Mscrm.IBuilder);
Mscrm.ActionGroupBuilder.registerClass("Mscrm.ActionGroupBuilder", null, Mscrm.IBuilder);
Mscrm.ActionListGroupBuilder.registerClass("Mscrm.ActionListGroupBuilder", null, Mscrm.IBuilder);
Mscrm.ActionButtonColoredSplitBuilder.registerClass("Mscrm.ActionButtonColoredSplitBuilder", null, Mscrm.IBuilder);
Mscrm.AppSwitcherButtonBuilder.registerClass("Mscrm.AppSwitcherButtonBuilder", null, Mscrm.IBuilder);
Mscrm.BackButtonBuilder.registerClass("Mscrm.BackButtonBuilder", null, Mscrm.IBuilder);
Mscrm.ActionButtonNarrowBuilder.registerClass("Mscrm.ActionButtonNarrowBuilder", null, Mscrm.IBuilder);
Mscrm.TabQuickCreateSpacerBuilder.registerClass("Mscrm.TabQuickCreateSpacerBuilder", null, Mscrm.IBuilder);
Mscrm.EmptyActionBuilder.registerClass("Mscrm.EmptyActionBuilder", null, Mscrm.IBuilder);
Mscrm.TabLogoImageBuilder.registerClass("Mscrm.TabLogoImageBuilder", null, Mscrm.IBuilder);
Mscrm.TabLogoTextButtonBuilder.registerClass("Mscrm.TabLogoTextButtonBuilder", null, Mscrm.IBuilder);
Mscrm.TabFillerBuilder.registerClass("Mscrm.TabFillerBuilder", null, Mscrm.IBuilder);
Mscrm.TabButtonHelpBuilder.registerClass("Mscrm.TabButtonHelpBuilder", null, Mscrm.IBuilder);
Mscrm.TabButtonUserInfoBuilder.registerClass("Mscrm.TabButtonUserInfoBuilder", null, Mscrm.IBuilder);
Mscrm.TabButtonSettingsBuilder.registerClass("Mscrm.TabButtonSettingsBuilder", null, Mscrm.IBuilder);
Mscrm.GlobalQuickCreateButtonBuilder.registerClass("Mscrm.GlobalQuickCreateButtonBuilder", null, Mscrm.IBuilder);
Mscrm.ModuleActionButtonBuilder.registerClass("Mscrm.ModuleActionButtonBuilder", null, Mscrm.IBuilder);
Mscrm.ModuleActionsBuilderProvider.registerClass("Mscrm.ModuleActionsBuilderProvider", null, Mscrm.IBuilderProvider);
Mscrm.TabLogoButtonBuilder.registerClass("Mscrm.TabLogoButtonBuilder", null, Mscrm.IBuilder);
Mscrm.GroupedActionsBuilderProvider.registerClass("Mscrm.GroupedActionsBuilderProvider", null, Mscrm.IBuilderProvider);
Mscrm.HeaderGroupBuilderProvider.registerClass("Mscrm.HeaderGroupBuilderProvider", null, Mscrm.IBuilderProvider);
Mscrm.SmallActionsBuilderProvider.registerClass("Mscrm.SmallActionsBuilderProvider", null, Mscrm.IBuilderProvider);
Mscrm.SplitActionsBuilderProvider.registerClass("Mscrm.SplitActionsBuilderProvider", null, Mscrm.IBuilderProvider);
Mscrm.TabButtonBuilder.registerClass("Mscrm.TabButtonBuilder", null, Mscrm.IBuilder);
Mscrm.HomeButtonBuilder.registerClass("Mscrm.HomeButtonBuilder", null, Mscrm.IBuilder);
Mscrm.TabHomeButtonBuilder.registerClass("Mscrm.TabHomeButtonBuilder", null, Mscrm.IBuilder);
Mscrm.TabButtonSplitBuilder.registerClass("Mscrm.TabButtonSplitBuilder", null, Mscrm.IBuilder);
Mscrm.TabGroupBuilder.registerClass("Mscrm.TabGroupBuilder", null, Mscrm.IBuilder);
Mscrm.ScrollButtonBuilder.registerClass("Mscrm.ScrollButtonBuilder", null, Mscrm.IBuilder);
Mscrm.ScrollRightButtonBuilder.registerClass("Mscrm.ScrollRightButtonBuilder", Mscrm.ScrollButtonBuilder);
Mscrm.ScrollLeftButtonBuilder.registerClass("Mscrm.ScrollLeftButtonBuilder", Mscrm.ScrollButtonBuilder);
Mscrm.ScrollableContainerBuilder.registerClass("Mscrm.ScrollableContainerBuilder", Mscrm.ContainerBuilder);
Mscrm.TabTextButtonBuilder.registerClass("Mscrm.TabTextButtonBuilder", null, Mscrm.IBuilder);
Mscrm.ViewportContainerBuilder.registerClass("Mscrm.ViewportContainerBuilder", Mscrm.ContainerBuilder);
Mscrm.NavBarConstants.registerClass("Mscrm.NavBarConstants");
Mscrm.NavigationNodesBasedControl.registerClass("Mscrm.NavigationNodesBasedControl");
Mscrm.ScrollableControl.registerClass("Mscrm.ScrollableControl", Mscrm.NavigationNodesBasedControl);
Mscrm.ActionListControl.registerClass("Mscrm.ActionListControl", Mscrm.ScrollableControl);
Mscrm.ActionGroupControl.registerClass("Mscrm.ActionGroupControl", Mscrm.ScrollableControl);
Mscrm.DropDownMenuControl.registerClass("Mscrm.DropDownMenuControl", Mscrm.NavigationNodesBasedControl);
Mscrm.DropDownMenuControlUserInfo.registerClass("Mscrm.DropDownMenuControlUserInfo", Mscrm.DropDownMenuControl);
Mscrm.DropDownMenuControlSettings.registerClass("Mscrm.DropDownMenuControlSettings", Mscrm.DropDownMenuControl);
Mscrm.DropDownSearch.registerClass("Mscrm.DropDownSearch", Mscrm.DropDownMenuControl);
Mscrm.FlyoutControlContainerFactory.registerClass("Mscrm.FlyoutControlContainerFactory",
    null,
    Mscrm.IControlContainerFactory);
Mscrm.ShuffleStrategy.registerClass("Mscrm.ShuffleStrategy", null, Mscrm.IShuffleStrategy);
Mscrm.NavStatusBarAnimationStrategy.registerClass("Mscrm.NavStatusBarAnimationStrategy",
    null,
    Mscrm.INavStatusBarAnimationStrategy);
Mscrm.NavStatus.registerClass("Mscrm.NavStatus");
Mscrm.NavStatusBar.registerClass("Mscrm.NavStatusBar");
Mscrm.TabControl.registerClass("Mscrm.TabControl");
Mscrm.TabControlOutlook.registerClass("Mscrm.TabControlOutlook", Mscrm.TabControl);
Mscrm.JQueryContainerAnimation.registerClass("Mscrm.JQueryContainerAnimation", null, Mscrm.IContainerAnimation);
Mscrm.ControlContainer.registerClass("Mscrm.ControlContainer", null, Mscrm.IControlContainer, Sys.IDisposable);
Mscrm.FlyOutControlContainer.registerClass("Mscrm.FlyOutControlContainer", Mscrm.ControlContainer);
Mscrm.DomBasedControlContainer.registerClass("Mscrm.DomBasedControlContainer", Mscrm.ControlContainer);
Mscrm.ScrollableContentDescriptor.registerClass("Mscrm.ScrollableContentDescriptor");
Mscrm.ScrollingStrategy.registerClass("Mscrm.ScrollingStrategy");
Mscrm.ScrollByPageScrollingStrategy.registerClass("Mscrm.ScrollByPageScrollingStrategy", Mscrm.ScrollingStrategy);
Mscrm.ScrollToPageWithProvidedItemScrollingStrategy
    .registerClass("Mscrm.ScrollToPageWithProvidedItemScrollingStrategy", Mscrm.ScrollingStrategy);
Mscrm.AnimatedMarginScroller.registerClass("Mscrm.AnimatedMarginScroller");
Mscrm.ScrollableContainerDescriptor.registerClass("Mscrm.ScrollableContainerDescriptor");
Mscrm.ControlIdProvider.registerClass("Mscrm.ControlIdProvider");
Mscrm.ModalOverlayDecorator.registerClass("Mscrm.ModalOverlayDecorator");
Mscrm.BlockInputHandler.registerClass("Mscrm.BlockInputHandler");
Mscrm.NavigationTree.registerClass("Mscrm.NavigationTree");
Mscrm.ExecutionCompletedNotifier.registerClass("Mscrm.ExecutionCompletedNotifier");
Mscrm.ScrollInputHandler.registerClass("Mscrm.ScrollInputHandler");
Mscrm.ScrollInFlyOutContentDecorator.registerClass("Mscrm.ScrollInFlyOutContentDecorator");
Mscrm.NavBar.registerClass("Mscrm.NavBar", Mscrm.CrmUIControl, Mscrm.INavigationStructureProvider);
Mscrm.Resizer.registerClass("Mscrm.Resizer");
Mscrm.NavigationUrlBuilder.registerClass("Mscrm.NavigationUrlBuilder", null, Mscrm.INavigationUrlBuilder);
Mscrm.AreaNavigationUrlBuilder.registerClass("Mscrm.AreaNavigationUrlBuilder", Mscrm.NavigationUrlBuilder);
Mscrm.DashboardNavigationUrlBuilder.registerClass("Mscrm.DashboardNavigationUrlBuilder", Mscrm.NavigationUrlBuilder);
Mscrm.EntityNavigationUrlBuilder.registerClass("Mscrm.EntityNavigationUrlBuilder", Mscrm.NavigationUrlBuilder);
Mscrm.EntityRecordNavigationUrlBuilder.registerClass("Mscrm.EntityRecordNavigationUrlBuilder",
    Mscrm.NavigationUrlBuilder);
Mscrm.GenericNavigationUrlBuilder.registerClass("Mscrm.GenericNavigationUrlBuilder", Mscrm.NavigationUrlBuilder);
Mscrm.NavigationUrlBuilderFactory.registerClass("Mscrm.NavigationUrlBuilderFactory");
Mscrm.ShuffleControl.registerClass("Mscrm.ShuffleControl", Mscrm.NavigationNodesBasedControl);
Mscrm.ActionGroupShuffleControl.registerClass("Mscrm.ActionGroupShuffleControl", Mscrm.ShuffleControl);
Mscrm.ActionButtonPinnableBuilder.registerClass("Mscrm.ActionButtonPinnableBuilder", null, Mscrm.IBuilder);
Mscrm.ActionListGroupModuleBuilder.registerClass("Mscrm.ActionListGroupModuleBuilder", null, Mscrm.IBuilder);
Mscrm.AdvFindButtonBuilder.registerClass("Mscrm.AdvFindButtonBuilder", null, Mscrm.IBuilder);
Mscrm.GlobalMruBuilderProvider.registerClass("Mscrm.GlobalMruBuilderProvider", null, Mscrm.IBuilderProvider);
Mscrm.GlobalMruButtonBuilder.registerClass("Mscrm.GlobalMruButtonBuilder", null, Mscrm.IBuilder);
Mscrm.GroupedGlobalMruBuilderProvider.registerClass("Mscrm.GroupedGlobalMruBuilderProvider",
    null,
    Mscrm.IBuilderProvider);
Mscrm.ListBuilder.registerClass("Mscrm.ListBuilder", null, Mscrm.IBuilder);
Mscrm.ModuleActionButtonBuilderRefreshed
    .registerClass("Mscrm.ModuleActionButtonBuilderRefreshed", null, Mscrm.IBuilder);
Mscrm.SearchButtonBuilder.registerClass("Mscrm.SearchButtonBuilder", null, Mscrm.IBuilder);
Mscrm.SeparatorBuilder.registerClass("Mscrm.SeparatorBuilder", null, Mscrm.IBuilder);
Mscrm.TabLogoImageThemeBuilder.registerClass("Mscrm.TabLogoImageThemeBuilder", null, Mscrm.IBuilder);
Mscrm.TabLogoImageThemeBuilderOutlook.registerClass("Mscrm.TabLogoImageThemeBuilderOutlook", null, Mscrm.IBuilder);
Mscrm.AsyncActionBase.registerClass("Mscrm.AsyncActionBase", null, Mscrm.INavigateActionAsync, Mscrm.INavigateAction);
Mscrm.ChangeProfilePictureAction.registerClass("Mscrm.ChangeProfilePictureAction", Mscrm.AsyncActionBase);
Mscrm.EmptyActionBuilder.$2B = Mscrm.BuilderHelper.getResourceStringFromLOCID("LOCID_MRU_EMPTY_NAVBAR");
Mscrm.NavBarConstants.numberOfItemsPerSection = 6;
Mscrm.NavBarConstants.indexTabMain = 0;
Mscrm.NavBarConstants.indexTabHome = 1;
Mscrm.NavBarConstants.indexTabModuleNode = 2;
Mscrm.NavBarConstants.indexTabEntityNodeButton = 3;
Mscrm.NavBarConstants.indexTabEntityNodeDropDown = 4;
Mscrm.NavBarConstants.indexTabRecordNodeButton = 5;
Mscrm.NavBarConstants.indexTabRecordNodeDropDown = 6;
Mscrm.NavBarConstants.indexTabGlobalQuickCreate = 7;
Mscrm.NavBarConstants.indexTabUserInfo = 8;
Mscrm.NavBarConstants.indexTabSettings = 9;
Mscrm.NavBarConstants.indexTabHelp = 10;
Mscrm.NavBarConstants.indexTabBack = 11;
Mscrm.NavBarConstants.indexTabSettingsMenuOptions = 12;
Mscrm.NavBarConstants.indexTabSettingsMenuPrintPreview = 13;
Mscrm.NavBarConstants.indexTabSettingsMenuAbout = 14;
Mscrm.NavBarConstants.indexTabUserInfoSignOut = 15;
Mscrm.NavBarConstants.indexTabSettingsMenuNavTour = 16;
Mscrm.NavBarConstants.indexTabSettingsMenuPrivacyStatement = 17;
Mscrm.NavBarConstants.indexTabSearch = 18;
Mscrm.NavBarConstants.indexAdvFindSearch = 19;
Mscrm.NavBarConstants.indexGlobalMru = 20;
Mscrm.NavBarConstants.indexTabModuleAreaNode = 21;
Mscrm.NavBarConstants.indexAppSwitcher = 22;
Mscrm.NavBarConstants.indexTabSettingsMenuGuidedHelp = 23;
Mscrm.NavBarConstants.indexTabSettingsMenuAppsForCrm = 24;
Mscrm.NavBarConstants.indexTabUserInfoEditImage = 25;
Mscrm.NavBarConstants.indexTabUserInfoUserName = 26;
Mscrm.NavBarConstants.indexTabUserInfoOrgName = 27;
Mscrm.NavBarConstants.indexTabNavBarD365Search = 28;
Mscrm.NavBarConstants.nodeSettingsOptionsId = "navTabButtonSettingsOptionsId";
Mscrm.NavBarConstants.nodeSettingsPrintPreviewId = "navTabButtonSettingsPrintPreviewId";
Mscrm.NavBarConstants.nodeSettingsNavTourId = "navTabButtonSettingsNavTourId";
Mscrm.NavBarConstants.nodeSettingsNavAppsForCrmId = "navTabButtonSettingsNavAppsForCrmId";
Mscrm.NavBarConstants.nodeSettingsAboutId = "navTabButtonSettingsAboutId";
Mscrm.NavBarConstants.nodeSettingsPrivacyStatementId = "NodeSettingsPrivacyStatementId";
Mscrm.NavBarConstants.nodeSettingsDropDownId = "navTabButtonSettingsDropDownId";
Mscrm.NavBarConstants.nodeUserInfoSignOutId = "navTabButtonUserInfoSignOutId";
Mscrm.NavBarConstants.nodeUserInfoEditImageId = "navTabButtonUserInfoEditImageId";
Mscrm.NavBarConstants.nodeUserInfoDropDrownId = "navTabButtonUserInfoDropDownId";
Mscrm.NavBarConstants.nodeSettingsGuidedHelpId = "navTabButtonSettingsGuidedHelpId";
Mscrm.NavBarConstants.nodeUserInfoUserNameId = "navTabButtonUserInfoUserNameId";
Mscrm.NavBarConstants.nodeUserInfoOrgNameId = "navTabButtonUserInfoOrgNameId";
Mscrm.NavBarConstants.nodeSearchD365Id = "navTabButtonSearchD365Id";
Mscrm.NavBarConstants.navTabHiddenCssClass = "navTabHidden";
Mscrm.NavBarConstants.navBarTopLevelItemCssClass = "navBarTopLevelItem";
Mscrm.NavBarConstants.navTabButtonNarrowText = "navTabButtonNarrowText";
Mscrm.NavBarConstants.navSearchButtonLayout = "navSearchButtonLayout";
Mscrm.NavBarConstants.navSearchButtonImageLayout = "ms-crm-ImageStrip-search_normal";
Mscrm.NavBarConstants.transparentImagePath = "/_imgs/NavBar/Invisible.gif";
Mscrm.NavBarConstants.appointmentImagePath = "/_imgs/NavBar/ActionImgs/Appointment_32.png";
Mscrm.NavBarConstants.emailImagePath = "/_imgs/NavBar/ActionImgs/Email_32.png";
Mscrm.NavBarConstants.faxImagePath = "/_imgs/NavBar/ActionImgs/Faxl_32.png";
Mscrm.NavBarConstants.letterImagePath = "/_imgs/NavBar/ActionImgs/Letter_32.png";
Mscrm.NavBarConstants.phoneCallImagePath = "/_imgs/NavBar/ActionImgs/PhoneCall_32.png";
Mscrm.NavBarConstants.taskImagePath = "/_imgs/NavBar/ActionImgs/Task_32.png";
Mscrm.NavBarConstants.arrowDownImagePath = "/_imgs/NavBar/ArrowDown.png";
Mscrm.NavBarConstants.arrowDownImagePathHighContrast = "/_imgs/NavBar/HighContrast/ArrowDown_HC.png";
Mscrm.NavBarConstants.arrowULDownImagePath = "/_imgs/NavBar/ArrowUnderScoreDown.png";
Mscrm.NavBarConstants.arrowULDownImagePathHighContrast = "/_imgs/NavBar/HighContrast/ArrowUnderScoreDown.png";
Mscrm.NavBarConstants.logoImagePath = "/_imgs/NavBar/NavBarLogo.png";
Mscrm.NavBarConstants.logoImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavBarLogo.png";
Mscrm.NavBarConstants.topBarHomeImagePath = "/_imgs/NavBar/NavBarShelf.png";
Mscrm.NavBarConstants.topBarHomeImagePathHighContrast = "/_imgs/NavBar/HighContrast/Home_HC_16.png";
Mscrm.NavBarConstants.topBarCrmHomeImagePath = "/_imgs/NavBar/NavBarCRMHome.png";
Mscrm.NavBarConstants.topBarCrmHomeImagePathHighContrast = "/_imgs/NavBar/HighContrast/CRMHome_HC_16.png";
Mscrm.NavBarConstants.searchImagePath = "/_imgs/search_grey_16.png";
Mscrm.NavBarConstants.navBarD65SearchImagePath = "/_imgs/navBar/NavBarSearch.png";
Mscrm.NavBarConstants.searchImagePathNormal = "/_imgs/navbar/invisible.gif";
Mscrm.NavBarConstants.searchImagePathHighContrast = "/_imgs/navbar/highcontrast/search_hc_16.png";
Mscrm.NavBarConstants.textBoxSearchImagePathHighContrast = "/_imgs/search_high_contrast.png";
Mscrm.NavBarConstants.advFindImagePath = "/_imgs/advfind/advancedfind_24.png";
Mscrm.NavBarConstants.advFindImagePathHighContrast = "/_imgs/navbar/highcontrast/advance_find_hc_24.png";
Mscrm.NavBarConstants.topBarSplitImagePath = "/_imgs/NavBar/NavBarSplit.png";
Mscrm.NavBarConstants.topBarSplitImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavBarSplit.png";
Mscrm.NavBarConstants.topBarDivideImagePath = "/_imgs/NavBar/NavBarDivider.png";
Mscrm.NavBarConstants.topBarDivideImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavBarDivider.png";
Mscrm.NavBarConstants.topBarSettingImagePath = "/_imgs/NavBar/NavBarSettings.png";
Mscrm.NavBarConstants.topBarSettingImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavBarSettings_HC.png";
Mscrm.NavBarConstants.topBarHelpImagePath = "/_imgs/NavBar/NavBarHelp.png";
Mscrm.NavBarConstants.topBarHelpImagePathHighContrast = "/_imgs/NavBar/HighContrast/Help_HC_16.png";
Mscrm.NavBarConstants.actionButtonSplitImagePath = "/_imgs/NavBar/ActionButtonSplit.png";
Mscrm.NavBarConstants.actionButtonSplitImagePathHighContrast = "/_imgs/NavBar/HighContrast/ActionButtonSplit.png";
Mscrm.NavBarConstants.scrollLeftImagePath = "/_imgs/NavBar/NavGalleryArrowLeft.png";
Mscrm.NavBarConstants.scrollLeftImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavGalleryArrowLeft.png";
Mscrm.NavBarConstants.scrollRightImagePath = "/_imgs/NavBar/NavGalleryArrowRight.png";
Mscrm.NavBarConstants.scrollRightImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavGalleryArrowRight.png";
Mscrm.NavBarConstants.globalQuickCreateImagePath = "/_imgs/NavBar/NavBarGlobalQuickCreate.png";
Mscrm.NavBarConstants.globalQuickCreateImagePathHighContrast = "/_imgs/NavBar/HighContrast/GlobalQuickCreate_HC.png";
Mscrm.NavBarConstants.globalMruImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavBarGlobalMru_HC.png";
Mscrm.NavBarConstants.pinImagePath = "/_imgs/NavBar/RecordPinned.png";
Mscrm.NavBarConstants.pinImagePathHighContrast = "/_imgs/NavBar/HighContrast/RecordPinned_HC.png";
Mscrm.NavBarConstants.unpinImagePathHighContrast = "/_imgs/NavBar/HighContrast/RecordUnPinned_HC.png";
Mscrm.NavBarConstants.backActiveButtonImagePath = "/_imgs/NavBar/Back_Active.png";
Mscrm.NavBarConstants.backInactiveButtonImagePath = "/_imgs/NavBar/Back_Inactive.png";
Mscrm.NavBarConstants.mruEmptyImagePath = "/_imgs/NavBar/NavBarWhiteNotification.png";
Mscrm.NavBarConstants.mruEmptyImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavBarWhiteNotification.png";
Mscrm.NavBarConstants.appSwitcherImagePathHighContrast = "/_imgs/NavBar/HighContrast/NavBarAppSwitcher_HC.png";
Mscrm.NavBarConstants.actionButtonClassName = "nav-group";
Mscrm.NavBarConstants.sectionClassName = "nav-section";
Mscrm.NavBarConstants.pinClassName = "pinned";
Mscrm.NavBarConstants.unpinClassName = "unpinned";
Mscrm.NavBarConstants.mruTouchEnabledClassName = "mru-touch-enabled";
Mscrm.NavBarConstants.mruRecordClassName = "navbar-mru-record";
Mscrm.NavBarConstants.mruViewClassName = "navbar-mru-view";
Mscrm.NavBarConstants.subgroupClassName = "nav-subgroup";
Mscrm.NavBarConstants.buttonLeftClassName = "navTabButtonLeft";
Mscrm.NavBarConstants.homeButtonId = "TabHome";
Mscrm.NavBarConstants.crmHomeButtonId = "TabCRMHome";
Mscrm.NavBarConstants.searchButtonId = "TabSearch";
Mscrm.NavBarConstants.searchAdvFindId = "AdvFindSearch";
Mscrm.NavBarConstants.backButtonId = "TabBack";
Mscrm.NavBarConstants.navBarSettingsId = "navBarSettingsId";
Mscrm.NavBarConstants.globalQuickCreateButtonId = "GQC";
Mscrm.NavBarConstants.userInfoButtonGroupId = "TabUserInfoId";
Mscrm.NavBarConstants.settingsButtonId = "TabButtonSettingsId";
Mscrm.NavBarConstants.helpButtonId = "TabButtonHelpId";
Mscrm.NavBarConstants.navTabQuickCreateSpacer = "navTabQuickCreateSpacer";
Mscrm.NavBarConstants.navStatusClose = "navStatusClose";
Mscrm.NavBarConstants.navTabModuleButtonTextId = "navTabModuleButtonTextId";
Mscrm.NavBarConstants.navBarUserInfoTextId = "navBarUserInfoTextId";
Mscrm.NavBarConstants.navTabLogoTextId = "navTabLogoTextId";
Mscrm.NavBarConstants.tabLogoTextId = "TabnavTabLogoTextId";
Mscrm.NavBarConstants.tabLogoTextDividerId = "TabnavTabLogoTextId_divider";
Mscrm.NavBarConstants.navTabLogoImage = "navTabLogoImage";
Mscrm.NavBarConstants.tabButtonHelpImageId = "navTabButtonHelpImageId";
Mscrm.NavBarConstants.navBarGlobalQuickCreateTextId = "navBarGlobalQuickCreateTextId";
Mscrm.NavBarConstants.navTabSplitButtonTextCss = "navTabSplitButtonTextCss";
Mscrm.NavBarConstants.navTabButtonLeftIE8Fix = " navTabButtonLeftIE8Fix";
Mscrm.NavBarConstants.navBarTopLevelItemIE8Fix = " navBarTopLevelItemIE8Fix";
Mscrm.NavBarConstants.navBarSpacingRemove = "navBarSpacingRemove";
Mscrm.NavBarConstants.tabIdPrefix = "Tab";
Mscrm.NavBarConstants.defaultInputDelayAfterAnimation = 200;
Mscrm.NavBarConstants.clickEventName = "click";
Mscrm.NavBarConstants.mouseOutEventName = "mouseout";
Mscrm.NavBarConstants.mouseLeaveEventName = "mouseleave";
Mscrm.NavBarConstants.mouseEnterEventName = "mouseenter";
Mscrm.NavBarConstants.helpModuleNavigationNodeId = "HLP";
Mscrm.NavBarConstants.onlinePrivacyStatementUrl = "http://go.microsoft.com/fwlink/?LinkID=310140";
Mscrm.NavBarConstants.onPremisePrivacyStatementUrl = "http://go.microsoft.com/fwlink/?LinkID=822671";
Mscrm.NavBarConstants.o365Waffle = "_psuedo_navigate_waffle";
Mscrm.NavBarConstants.siteMapPath = "sitemappath";
Mscrm.NavBarConstants.mainPageUrlPath = "main.aspx";
Mscrm.NavBarConstants.homepageUrlPath = "homepage.aspx";
Mscrm.NavBarConstants.dashboardPageUrlPath = "home_dashboards.aspx";
Mscrm.NavBarConstants.areaNodeParentId = "1";
Mscrm.NavBarConstants.areaNode = "areanode";
Mscrm.NavBarConstants.subareaNode = "subareanode";
Mscrm.ControlContainer.shownEventName = "Shown";
Mscrm.ControlContainer.hiddenEventName = "Hidden";
Mscrm.ControlContainer.showingEventName = "Showing";
Mscrm.ControlContainer.hidingEventName = "Hiding";
Mscrm.NavBar.$1X = "NavBarClick";
Mscrm.NavBar.$1Y = "NavBarClickTime";
Mscrm.NavBar.$43 = false;
Mscrm.NavBar.$22 = window.IsUserGuidedHelpEnabled