Type.registerNamespace("Mscrm");
Mscrm.WidgetIframeUIProperty = function() {};
Mscrm.WidgetIframeUIProperty.get_instance = function() {
    if (IsNull(Mscrm.WidgetIframeUIProperty.$0)) Mscrm.WidgetIframeUIProperty.$0 = new Mscrm.WidgetIframeUIProperty;
    return Mscrm.WidgetIframeUIProperty.$0
};
Mscrm.WidgetIframeUIProperty.prototype = {
    $8_0: null,
    $2_0: null,
    $4_0: null,
    get_name: function() {
        if (IsNull(this.$8_0)) this.$8_0 = "widgetIframe";
        return this.$8_0
    },
    get_title: function() {
        if (IsNull(this.$2_0)) this.$2_0 = "iframeTitle";
        return this.$2_0
    },
    set_title: function(value) {
        this.$2_0 = value;
        return value
    },
    get_iframeId: function() {
        if (IsNull(this.$4_0)) this.$4_0 = "crmUrlAddressableWidget";
        return this.$4_0
    },
    applyPropertiesToElement: function(element) {
        if (!IsNull(element)) {
            element.setAttribute("name", this.get_name());
            element.setAttribute("title", this.get_title());
            element.setAttribute("id", this.get_iframeId());
            element.setAttribute("sandbox", "allow-same-origin allow-forms allow-popups allow-scripts")
        }
    },
    setWidgetIframeUrl: function(element, url) { !IsNull(element) && element.setAttribute("src", url) }
};
Mscrm.WidgetIframeUIElements = function() {};
Mscrm.WidgetManager = function() {
    this.$$d_$N_2 = Function.createDelegate(this, this.$N_2);
    Mscrm.WidgetManager.initializeBase(this)
};
Mscrm.WidgetManager.get_instance = function() {
    if (IsNull(Mscrm.WidgetManager.$0)) Mscrm.WidgetManager.$0 = new Mscrm.WidgetManager;
    return Mscrm.WidgetManager.$0
};
Mscrm.WidgetManager.prototype = {
    initialize: function() { Mscrm.CrmUIComponent.prototype.initialize.call(this) },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 120:
            this.$K_2(parameters);
            break;
        case 121:
            this.$J_2();
            break
        }
        return null
    },
    $J_2: function() {
        Mscrm.WidgetUIProperty.get_instance().expandCollapseHandler();
        Mscrm.WidgetTelemetryHelper.addMetric()
    },
    $K_2: function($p0) {
        !IsNull($p0) &&
            !IsNull($p0["widgetUrl"]) &&
            !IsNull($p0["widgetUrl"]) &&
            Mscrm.WidgetManager.get_instance().createWidget($p0["widgetUrl"].toString(),
                $p0["widgetUrl"].toString(),
                null)
    },
    createWidget: function(url, title, styleAttributes) {
        if (!Mscrm.WidgetUtility.isCrmNavBarAvailable()) return;
        this.$E_2();
        this.$F_2();
        var $v_0 = Mscrm.WidgetUtility.getElementById("crmUrlAddressableWidgetHolder");
        if ($v_0)
            if (!Mscrm.WidgetUtility.isUrlNullOrBlank(url)) this.$G_2(url, title, $v_0, styleAttributes);
            else this.$M_2($v_0)
    },
    $G_2: function($p0, $p1, $p2, $p3) {
        var $v_0 = Mscrm.WidgetUtility.getElementById(Mscrm.WidgetIframeUIProperty.get_instance().get_iframeId());
        if (IsNull($v_0)) {
            $v_0 = Mscrm.WidgetUtility.createElement("iframe");
            $v_0.setAttribute("style", "height : calc(100% - 40px);");
            $p2.appendChild($v_0);
            if (!Mscrm.Utilities
                .isIE() &&
                Mscrm.WidgetUtility.isHighContrastEnabled()) $p2.style.border = "1px solid white";
            Mscrm.WidgetIframeUIProperty.get_instance().$2_0 = Mscrm.WidgetUtility.truncateTitle($p1);
            Mscrm.WidgetIframeUIProperty.get_instance().applyPropertiesToElement($v_0);
            Mscrm.WidgetIframeUIProperty.get_instance().setWidgetIframeUrl($v_0, $p0);
            Mscrm.WidgetTelemetryHelper.addMetric()
        } else {
            var $v_1 = $v_0.getAttribute("src");
            $v_1 !== $p0 && Mscrm.WidgetIframeUIProperty.get_instance().setWidgetIframeUrl($v_0, $p0);
            var $v_2 = $v_0.getAttribute("title"),
                $v_3 = Mscrm.WidgetUtility.truncateTitle($v_2),
                $v_4 = Mscrm.WidgetUtility.truncateTitle($p1);
            if ($v_3 !== $v_4) {
                Mscrm.WidgetIframeUIProperty.get_instance().$2_0 = $v_4;
                Mscrm.WidgetIframeUIProperty.get_instance().applyPropertiesToElement($v_0)
            }
        }
        Mscrm.WidgetUIProperty.get_instance().setWidgetStyle($p2, $p3);
        Mscrm.WidgetUIProperty.get_instance().retrieveWidgetState()
    },
    $M_2: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = Mscrm.WidgetUtility.getElementById(Mscrm.WidgetIframeUIProperty.get_instance().get_iframeId());
            !IsNull($v_0) && $p0.removeChild($v_0)
        }
        Mscrm.WidgetUIProperty.get_instance().setWidgetVisiblity($p0, false);
        Mscrm.WidgetUtility.adjustContentManagerProperties(4);
        Mscrm.WidgetUtility.adjustToolbarWidth()
    },
    $E_2: function() {
        var $v_0 =
                $P_CRM("#crmUrlAddressableWidgetHolder"),
            $v_1 = Mscrm.WidgetUtility.getElementById("expandCollapse");
        if (IsNull($v_1)) {
            $v_0
                .append("<div id='expandCollapseHolder'><div id='expandCollapseDiv' tabindex='0' onclick = 'Mscrm.WidgetUIProperty.get_instance().expandCollapseHandler(); ' onkeypress=' if(event.keyCode === 13) Mscrm.WidgetUIProperty.get_instance().expandCollapseHandler(); '><a id ='expandCollaseAnchor'><span id = 'expandCollapse' data-state='expanded' >&nbsp;</span></a></div>");
            this.$P_2()
        }
    },
    $P_2: function() {
        var $v_0 = window.LOCID_UI_DIR === "RTL",
            $v_1 = Mscrm.WidgetUtility.getElementById("expandCollapseDiv"),
            $v_2 = Mscrm.WidgetUtility.getElementById("expandCollapse"),
            $v_3 = window.IS_WIDGET_EXPANDED ? window.LOCID_EXPANDWIDGET_TOOLTIP : window.LOCID_COLLAPSEWIDGET_TOOLTIP;
        $v_1.setAttribute("title", $v_3);
        var $v_4;
        if ($v_0) $v_4 = window.IS_WIDGET_EXPANDED ? "/_imgs/navLeft_HC_B.png" : "/_imgs/navRight_HC_B.png";
        else $v_4 = window.IS_WIDGET_EXPANDED ? "/_imgs/navRight_HC_B.png" : "/_imgs/navLeft_HC_B.png";
        this.$O_2($v_2, $v_3, $v_4)
    },
    $O_2: function($p0, $p1, $p2) {
        $p0.setAttribute("alt", $p1);
        $p0.style.backgroundImage = "url('" + $p2 + "')";
        $p0.setAttribute("data-state", window.IS_WIDGET_EXPANDED ? "expanded" : "collapsed");
        var $v_0 = Mscrm.WidgetUtility.getElementById("expandCollaseAnchor")
    },
    $F_2: function() { $addHandler(window, "resize", this.$$d_$N_2) },
    dispose: function() {
        $removeHandler(window, "resize", this.$$d_$N_2);
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    },
    $N_2: function($p0) {
        if (Mscrm.WidgetUtility
            .isExpandableWidthAvailable() &&
            window.IS_WIDGET_EXPANDED) Mscrm.WidgetUIProperty.get_instance().expandWidget();
        else Mscrm.WidgetUIProperty.get_instance().collapseWidget()
    }
};
Mscrm.WidgetTelemetryHelper = function() {};
Mscrm.WidgetTelemetryHelper.get_metricsData = function() {
    if (IsNull(Mscrm.WidgetTelemetryHelper.$6)) Mscrm.WidgetTelemetryHelper.$6 = {};
    return Mscrm.WidgetTelemetryHelper.$6
};
Mscrm.WidgetTelemetryHelper.addMetric = function() {
    Mscrm.WidgetTelemetryHelper.$H();
    Mscrm.MetricsReporting.instance().addMetric("WidgetManagerLoad", Mscrm.WidgetTelemetryHelper.get_metricsData())
};
Mscrm.WidgetTelemetryHelper.addMetricsData = function(colunmName, colunmValue) {
    Mscrm.WidgetTelemetryHelper.get_metricsData()[colunmName] = colunmValue
};
Mscrm.WidgetTelemetryHelper.$H = function() {
    Mscrm.WidgetTelemetryHelper.get_metricsData()["CurrentDateTime"] = Mscrm.DateTimeUtility.localDateTimeNow();
    Mscrm.WidgetTelemetryHelper.get_metricsData()["ClientName"] = Xrm.Page.context.client.getClient();
    Mscrm.WidgetTelemetryHelper.get_metricsData()["UserId"] = Xrm.Page.context.getUserId();
    Mscrm.WidgetTelemetryHelper.get_metricsData()["OrganizationName"] = Xrm.Page.context.getOrgUniqueName();
    Mscrm.WidgetTelemetryHelper.get_metricsData()["OrganizationId"] = window.ORG_ID
};
Mscrm.WidgetUIProperty = function() { this.$D_0 = window.screen.height };
Mscrm.WidgetUIProperty.get_instance = function() {
    if (IsNull(Mscrm.WidgetUIProperty.$0)) Mscrm.WidgetUIProperty.$0 = new Mscrm.WidgetUIProperty;
    return Mscrm.WidgetUIProperty.$0
};
Mscrm.WidgetUIProperty.prototype = {
    $5_0: null,
    $3_0: null,
    $7_0: null,
    $1_0: null,
    get_maxWidth: function() {
        if (IsNull(this.$5_0)) this.$5_0 = this.$A_0();
        return this.$5_0
    },
    get_minWidth: function() {
        if (IsNull(this.$7_0)) this.$7_0 = this.$I_0();
        return this.$7_0
    },
    get_defaultWidth: function() {
        if (IsNull(this.$3_0)) this.$3_0 = this.$A_0();
        return this.$3_0
    },
    get_width: function() { return this.$1_0 },
    setWidgetStyle: function(crmUrlAddressableWidgetHolder, styleAttributes) { this.$L_0(styleAttributes) },
    setWidgetVisiblity: function(crmUrlAddressableWidgetHolder, isVisible) {
        crmUrlAddressableWidgetHolder.style.display = isVisible ? "block" : "none";
        if (!isVisible) this.$1_0 = "0px"
    },
    toString: function() { return "width:" + this.$1_0 + "%" },
    $L_0: function($p0) {
        if (!IsNull($p0)) {
            var $$dict_4 = $p0;
            for (var $$key_5 in $$dict_4) {
                var $v_0 = { key: $$key_5, value: $$dict_4[$$key_5] };
                switch ($v_0.key.toLowerCase()) {
                case "width":
                    var $v_1 = $v_0.value.toString(), $v_2 = Mscrm.WidgetUtility.convertToValue($v_0.value.toString());
                    if ($v_2 > 0 && Mscrm.WidgetUtility.checkMaxWidth($v_1, $v_2)) this.$1_0 = $v_0.value.toString();
                    else this.$1_0 = window.IS_WIDGET_EXPANDED ? this.get_maxWidth() : this.get_minWidth();
                    break;
                default:
                    break
                }
            }
        } else this.$1_0 = window.IS_WIDGET_EXPANDED ? this.get_maxWidth() : this.get_minWidth()
    },
    expandCollapseHandler: function() {
        var $v_0 = 1;
        if (this.$1_0 === this.get_maxWidth()) $v_0 = 0;
        this.updateWidgetState($v_0)
    },
    updateWidgetState: function(widgetState) {
        Mscrm.WidgetUtility.getElementById("expandCollapseDiv").focus();
        switch (widgetState) {
        case 0:
            this.collapseWidget();
            Mscrm.WidgetTelemetryHelper.addMetricsData("FromState", "Expand");
            Mscrm.WidgetTelemetryHelper.addMetricsData("ToState", "Collapsed");
            break;
        case 1:
            this.expandWidget();
            Mscrm.WidgetTelemetryHelper.addMetricsData("FromState", "Collapsed");
            Mscrm.WidgetTelemetryHelper.addMetricsData("ToState", "Expand");
            break;
        default:
            break
        }
        this.persistWidgetState(widgetState)
    },
    expandWidget: function() {
        this.$1_0 = this.get_maxWidth();
        var $v_0 = window.LOCID_COLLAPSEWIDGET_TOOLTIP,
            $v_1 = Mscrm.WidgetUtility.get_isRTL() ? "/_imgs/navLeft_HC_B.png" : "/_imgs/navRight_HC_B.png";
        this.$B_0($v_0, $v_1, "expanded")
    },
    collapseWidget: function() {
        this.$1_0 = this.get_minWidth();
        var $v_0 = window.LOCID_EXPANDWIDGET_TOOLTIP,
            $v_1 = Mscrm.WidgetUtility.get_isRTL() ? "/_imgs/navRight_HC_B.png" : "/_imgs/navLeft_HC_B.png";
        this.$B_0($v_0, $v_1, "collapsed")
    },
    $B_0: function($p0, $p1, $p2) {
        var $v_0 = Mscrm.WidgetUtility.getElementById("expandCollapse"),
            $v_1 = Mscrm.WidgetUtility.getElementById("crmUrlAddressableWidgetHolder"),
            $v_2 = Mscrm.WidgetUtility.getElementById("expandCollapseDiv");
        $v_2.setAttribute("title", $p0);
        $v_0.setAttribute("alt", $p0);
        $v_0.style.backgroundImage = "url('" + $p1 + "')";
        $v_0.setAttribute("data-state", $p2);
        $v_1.style.width = this.$1_0;
        Mscrm.WidgetUtility.adjustContentManagerProperties(0);
        Mscrm.WidgetUtility.adjustToolbarWidth();
        var $v_3 = Mscrm.WidgetUtility.getElementById("expandCollaseAnchor");
        $v_3.setAttribute("title", $p0);
        $v_1.style.display = "block"
    },
    persistWidgetState: function(widgetState) {
        var $v_0 = widgetState === 1 ? true : false,
            $v_1 = { splitviewstate: $v_0 },
            $v_2 = { splitviewstate: 0 },
            $v_3 = new Xrm.Objects.EntityReference("usersettings",
                new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId())),
            $v_4 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_3,
                    $v_1,
                    $v_2,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_4.get_changedFieldNames().add("splitviewstate");
        var $$t_8 = this, $$t_9 = this;
        Xrm.Internal.messages.update($v_4).then(function($p1_0) { window.IS_WIDGET_EXPANDED = $v_0 },
            function($p1_0) {})
    },
    retrieveWidgetState: function() {
        var $v_0 = Mscrm.InternalUtilities.EntityNames.UserSettings.toString(), $v_1 = new Array(1);
        $v_1[0] = "splitviewstate";
        if (IsNull(window.IS_WIDGET_EXPANDED)) {
            var $$t_6 = this, $$t_7 = this;
            Xrm.Internal.messages.retrieve($v_0, Xrm.Page.context.getUserId(), $v_1).then(function($p1_0) {
                    var $v_2 = $p1_0.entity;
                    if (!IsNull($v_2)) {
                        var $v_3 = $v_2.getValue("splitviewstate");
                        window.IS_WIDGET_EXPANDED = $v_3 ? $v_3.get_valueString() === "1" ? true : false : false;
                        $$t_6.$C_0()
                    }
                },
                function($p1_0) {})
        } else this.$C_0()
    },
    $A_0: function() { return window.ExpandedWidth },
    $I_0: function() { return window.CollapsedWidth },
    $C_0: function() {
        if (Mscrm.WidgetUtility.isExpandableWidthAvailable() && window.IS_WIDGET_EXPANDED) this.expandWidget();
        else this.collapseWidget()
    }
};
Mscrm.WidgetUIProperty.WidgetState = function() {};
Mscrm.WidgetUIProperty.WidgetState.prototype = { collapsed: 0, expanded: 1 };
Mscrm.WidgetUIProperty.WidgetState.registerEnum("Mscrm.WidgetUIProperty.WidgetState", false);
Mscrm.WidgetUIElements = function() {};
Mscrm.WidgetUtility = function() {};
Mscrm.WidgetUtility.isUrlNullOrBlank = function(url) { return isNullOrEmptyString(url) || url === "about:blank" };
Mscrm.WidgetUtility.getElementById = function(element) {
    var $v_0 = window.top;
    while ($v_0 !== $v_0.top) $v_0 = $v_0.top;
    return $v_0.document.getElementById(element)
};
Mscrm.WidgetUtility.createElement = function(element) {
    var $v_0 = window.top;
    while ($v_0 !== $v_0.top) $v_0 = $v_0.top;
    return $v_0.document.createElement(element)
};
Mscrm.WidgetUtility.isCrmNavBarAvailable = function() {
    var $v_0 = Mscrm.WidgetUtility.getElementById("crmMasthead");
    return !IsNull($v_0)
};
Mscrm.WidgetUtility.adjustContentManagerProperties = function(paddingRight) {
    var $v_0 = Mscrm.WidgetUtility.getElementById("crmContentPanel"),
        $v_1 = Mscrm.WidgetUtility.getWidthForContentManager();
    if (!IsNull($v_0)) {
        $v_0.style.width = $v_1;
        $v_0.style.paddingRight = paddingRight + "px"
    }
};
Mscrm.WidgetUtility.adjustToolbarWidth = function() {
    var $v_0 = Mscrm.WidgetUtility.getElementById("crmTopBar"), $v_1 = Mscrm.WidgetUtility.getWidthForContentManager();
    if (!IsNull($v_0)) $v_0.style.width = $v_1
};
Mscrm.WidgetUtility.getWidthForContentManager = function() {
    var $v_0 = "100%";
    if (Mscrm.WidgetUtility.isIframePresent())
        $v_0 = "calc(" + $v_0 + " - " + Mscrm.WidgetUIProperty.get_instance().$1_0 + ")";
    return $v_0
};
Mscrm.WidgetUtility.isIframePresent = function() {
    return !IsNull(Mscrm.WidgetUtility.getElementById(Mscrm.WidgetIframeUIProperty.get_instance().get_iframeId()))
};
Mscrm.WidgetUtility.truncateTitle = function(source) {
    if (source.length > 250) source = source.trim().substring(0, 250);
    return source
};
Mscrm.WidgetUtility.convertToValue = function(entryValue) {
    var $v_0 = entryValue.substring(entryValue.length - 1, entryValue.length),
        $v_1 = parseInt($v_0 === "%"
            ? entryValue.substring(0, entryValue.length - 1)
            : entryValue.substring(0, entryValue.length - 2));
    return $v_1
};
Mscrm.WidgetUtility.checkMaxWidth = function(entryValue, value) {
    var $v_0 = false,
        $v_1 = entryValue.substring(entryValue.length - 1, entryValue.length),
        $v_2 = $v_1 === "%" ? true : !true;
    if ($v_2)
        $v_0 = value > 0 &&
            value <= Mscrm.WidgetUtility.convertToValue(Mscrm.WidgetUIProperty.get_instance().get_maxWidth());
    else {
        var $v_3 = document.body,
            $v_4 = document.documentElement,
            $v_5 = Mscrm.Utilities.isIE() ? $v_4.clientWidth : $v_3.offsetWidth,
            $v_6 = $v_5 *
                Mscrm.WidgetUtility.convertToValue(Mscrm.WidgetUIProperty.get_instance()
                    .get_maxWidth()) /
                100;
        $v_0 = value <= $v_6
    }
    return $v_0
};
Mscrm.WidgetUtility.get_isRTL = function() { return window.LOCID_UI_DIR === "RTL" };
Mscrm.WidgetUtility.isExpandableWidthAvailable = function() {
    var $v_0 = document.body,
        $v_1 = document.documentElement,
        $v_2 = Mscrm.Utilities.isIE() ? $v_1.clientWidth : $v_0.offsetWidth;
    return $v_2 > 960
};
Mscrm.WidgetUtility.isHighContrastEnabled = function() {
    var $v_0 = Mscrm.WidgetUtility.getElementById("contentIFrame0"),
        $v_1 = $v_0.contentWindow,
        $v_2 = $v_1.self._highContrastEnabled;
    return IsNull($v_2) ? false : $v_2
};
Mscrm.UtilConstants = function() {};
Mscrm.WidgetIframeUIProperty.registerClass("Mscrm.WidgetIframeUIProperty");
Mscrm.WidgetIframeUIElements.registerClass("Mscrm.WidgetIframeUIElements");
Mscrm.WidgetManager.registerClass("Mscrm.WidgetManager", Mscrm.CrmUIComponent);
Mscrm.WidgetTelemetryHelper.registerClass("Mscrm.WidgetTelemetryHelper");
Mscrm.WidgetUIProperty.registerClass("Mscrm.WidgetUIProperty");
Mscrm.WidgetUIElements.registerClass("Mscrm.WidgetUIElements");
Mscrm.WidgetUtility.registerClass("Mscrm.WidgetUtility");
Mscrm.UtilConstants.registerClass("Mscrm.UtilConstants");
Mscrm.WidgetIframeUIProperty.$0 = null;
Mscrm.WidgetIframeUIElements.iframeName = "name";
Mscrm.WidgetIframeUIElements.title = "title";
Mscrm.WidgetIframeUIElements.iframeId = "id";
Mscrm.WidgetIframeUIElements.src = "src";
Mscrm.WidgetIframeUIElements.sandbox = "sandbox";
Mscrm.WidgetManager.$0 = null;
Mscrm.WidgetTelemetryHelper.$6 = null;
Mscrm.WidgetUIProperty.$0 = null;
Mscrm.WidgetUIElements.width = "width";
Mscrm.WidgetUIElements.height = "height";
Mscrm.WidgetUIElements.title = "title";
Mscrm.WidgetUIElements.src = "src";
Mscrm.WidgetUIElements.style = "style";
Mscrm.WidgetUIElements.alt = "alt";
Mscrm.WidgetUIElements.customAttribute = "data-state";
Mscrm.UtilConstants.fullScreenWidthInPercent = "100%";
Mscrm.UtilConstants.toolbarHeight = 50;
Mscrm.UtilConstants.defaultContentPanelPadding = 4;
Mscrm.UtilConstants.toolbarId = "crmTopBar";
Mscrm.UtilConstants.widgetHolderId = "crmUrlAddressableWidgetHolder";
Mscrm.UtilConstants.userSettingsLogicalName = "usersettings";
Mscrm.UtilConstants.crmContentPanelId = "crmContentPanel";
Mscrm.UtilConstants.crmMastHeadId = "crmMasthead";
Mscrm.UtilConstants.blankUrl = "about:blank";
Mscrm.UtilConstants.maxTitleLength = 250;
Mscrm.UtilConstants.widgetUrl = "widgetUrl";
Mscrm.UtilConstants.widgetTitle = "widgetUrl";
Mscrm.UtilConstants.widgetExpandCollapseId = "expandCollapse";
Mscrm.UtilConstants.imageAltText = "Not able to display!";
Mscrm.UtilConstants.widgetRightIconHCB = "/_imgs/navRight_HC_B.png";
Mscrm.UtilConstants.widgetLeftIconHCB = "/_imgs/navLeft_HC_B.png";
Mscrm.UtilConstants.widgetRightIconHCW = "/_imgs/navRight_HC_W.png";
Mscrm.UtilConstants.widgetLeftIconHCW = "/_imgs/navLeft_HC_W.png";
Mscrm.UtilConstants.widgetToggleIconHeight = "40px";
Mscrm.UtilConstants.widgetToggleDivWidth = "100%";
Mscrm.UtilConstants.anchorTagId = "expandCollaseAnchor";
Mscrm.UtilConstants.expandCollapseDivId = "expandCollapseDiv";
Mscrm.UtilConstants.widgetHeaderHolderId = "expandCollapseHolder";
Mscrm.UtilConstants
    .widgetHeaderDiv =
    "<div id='expandCollapseHolder'><div id='expandCollapseDiv' tabindex='0' onclick = 'Mscrm.WidgetUIProperty.get_instance().expandCollapseHandler(); ' onkeypress=' if(event.keyCode === 13) Mscrm.WidgetUIProperty.get_instance().expandCollapseHandler(); '><a id ='expandCollaseAnchor'><span id = 'expandCollapse' data-state='expanded' >&nbsp;</span></a></div>";
Mscrm.UtilConstants.widgetRightIcon = "/_imgs/navRight.png";
Mscrm.UtilConstants.widgetLeftIcon = "/_imgs/navLeft.png";
Mscrm.UtilConstants.rightToLeft = "RTL";
Mscrm.UtilConstants.unitsInPercent = true;
Mscrm.UtilConstants.sandboxAttributeValues = "allow-same-origin allow-forms allow-popups allow-scripts";
Mscrm.UtilConstants.widgetSplitViewState = "splitviewstate";
Mscrm.UtilConstants.expandWidget = "expandWidget";
Mscrm.UtilConstants.collapseWidget = "collapseWidget";
Mscrm.UtilConstants.expandCollapseParam = "expandCollapseParam";
Mscrm.UtilConstants.cssBreakPointWidth = 960;
Mscrm.UtilConstants.widgetBorderStyle = "1px solid white";
Mscrm.UtilConstants.zeroWidth = "0px"