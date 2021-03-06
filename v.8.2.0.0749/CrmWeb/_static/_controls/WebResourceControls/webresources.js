Type.registerNamespace("Mscrm");
Mscrm.WebResourceControlBase = function(element) {
    this.$$d_$D_4 = Function.createDelegate(this, this.$D_4);
    this.$$d_$C_4 = Function.createDelegate(this, this.$C_4);
    Mscrm.WebResourceControlBase.initializeBase(this, [element])
};
Mscrm.WebResourceControlBase.prototype = {
    get_disabled: function() { return this.get_element().disabled },
    set_disabled: function(value) {
        this.get_element().disabled = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = $find("crmForm");
        if (!IsNull($v_0) && !Mscrm.Utilities.isRefreshForm()) {
            var $v_1 = $v_0.GetTab(this.get_element(), false);
            if (!IsNull($v_1)) {
                var $v_2 = $find($v_1.id);
                if ($v_2.get_displayState() === "expanded") this.renderWebResource();
                else $v_2.add_tabStateChange(this.$$d_$C_4)
            } else this.renderWebResource();
            if ($v_0.get_isResizeFormComplete()) this.resizeWebResource();
            else $v_0.add_onFormResized(this.$$d_$D_4)
        } else {
            this.renderWebResource();
            this.resizeWebResource()
        }
        Mscrm.Utilities.isRefreshForm() && this.$E_4()
    },
    $E_4: function() {
        var $v_0 = Xrm.Page.ui;
        if (IsNull($v_0.controls)) $v_0.controls = new Xrm.XrmControls;
        var $v_1 = new Mscrm.InlineWebResourceControlView(this);
        $v_0.controls.add($v_1);
        Mscrm.InlineEditInitializerUtility.associateControlWithParentSection(this.get_element(), $v_1)
    },
    $D_4: function($p0, $p1) {
        var $v_0 = $find("crmForm");
        !IsNull($v_0) && $v_0.remove_onFormResized(this.$$d_$D_4);
        this.resizeWebResource()
    },
    resizeWebResource: function() {},
    $C_4: function($p0, $p1) {
        if ($p1.get_displayState() === "expanded") {
            $p0.remove_tabStateChange(this.$$d_$C_4);
            this.renderWebResource()
        }
    },
    get_data: function() { return null },
    set_data: function(value) { return value },
    renderWebResource: function() { this.set_source(this.get_element().attributes.getNamedItem("url").value) },
    get_webResourceContainer: function() { return this.get_element() }
};
Mscrm.WebResourceHtmlControl = function(element) {
    Mscrm.WebResourceHtmlControl.initializeBase(this, [element]);
    this.$1_5 = this.get_element()
};
Mscrm.WebResourceHtmlControl.prototype = {
    get_disabled: function() { return Mscrm.WebResourceControlBase.prototype.get_disabled.call(this) },
    set_disabled: function(value) { return value },
    get_source: function() { return this.$1_5.contentWindow.location.toString() },
    set_source: function(value) {
        this.$9_5(value);
        return value
    },
    setData: function(dataQueryStringParameter) {
        var $v_0 = Mscrm.CrmUri.create(this.get_source());
        $v_0.get_query()["data"] = dataQueryStringParameter;
        this.set_source($v_0.toString())
    },
    $1_5: null,
    setFocus: function() { this.get_element().focus() },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 53:
            if (!isNullOrEmptyString(this.$1_5.id.trim()))
                try {
                    this.$9_5(this.get_source())
                } catch ($$e_3) {
                }
            break
        }
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    resizeWebResource: function() { Mscrm.WebResourceControlBase.prototype.resizeWebResource.call(this) },
    renderWebResource: function() {
        !Mscrm.Utilities.isRefreshForm() && Mscrm.WebResourceControlBase.prototype.renderWebResource.call(this)
    },
    $9_5: function($p0) { this.$1_5.contentWindow.location.replace($p0) }
};
Mscrm.WebResourceImageControl = function(element) {
    this.$$d_$B_5 = Function.createDelegate(this, this.$B_5);
    Mscrm.WebResourceImageControl.initializeBase(this, [element])
};
Mscrm.WebResourceImageControl.prototype = {
    $2_5: false,
    $3_5: false,
    get_source: function() { return this.get_element().src },
    set_source: function(value) {
        this.get_element().src = value;
        return value
    },
    setFocus: function() { this.get_element().focus() },
    renderWebResource: function() {
        $addHandler(this.get_element(), "load", this.$$d_$B_5);
        Mscrm.WebResourceControlBase.prototype.renderWebResource.call(this)
    },
    resizeWebResource: function() {
        Mscrm.WebResourceControlBase.prototype.resizeWebResource.call(this);
        this.$2_5 = true;
        this.$8_5()
    },
    $B_5: function($p0) {
        $removeHandler(this.get_element(), "load", this.$$d_$B_5);
        this.$3_5 = true;
        this.$8_5()
    },
    $8_5: function() {
        if (!(this.$2_5 && this.$3_5)) return;
        var $v_0 = this.get_element().attributes.getNamedItem("resizeMode").value;
        Mscrm.Utilities.processImageWebResource(this.get_element());
        var $v_1 = this.get_element();
        if (!$v_1
            .clientHeight &&
            ($v_0 === "StretchToFit" || $v_0 === "StretchMaintainAspectRatio")
        ) if ($v_1.parentNode.clientHeight) $v_1.style.height = $v_1.parentNode.clientHeight.toString() + "px"
    }
};
Mscrm.WebResourceSilverlightControl = function(element) {
    this.$$d_$F_5 = Function.createDelegate(this, this.$F_5);
    Mscrm.WebResourceSilverlightControl.initializeBase(this, [element]);
    $addHandler(window, "resize", this.$$d_$F_5)
};
Mscrm.WebResourceSilverlightControl.prototype = {
    $0_5: null,
    get_source: function() { return this.$6_5() },
    set_source: function(value) {
        this.$0_5.setAttribute("Source", value);
        return value
    },
    get_webResourceContainer: function() { return this.$0_5 },
    dispose: function() {
        this.$0_5 = null;
        $removeHandler(window, "resize", this.$$d_$F_5);
        Mscrm.UIControl.prototype.dispose.call(this)
    },
    get_data: function() { return this.getData() },
    set_data: function(value) {
        this.setData(value);
        return value
    },
    setFocus: function() { this.$0_5.focus() },
    renderWebResource: function() {
        this.get_element().style.visibility = "visible";
        this.$0_5 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        Mscrm.Utilities.setSilverlightControlSize(this.$0_5, this.get_element(), this.$7_5());
        this.set_source(this.$6_5())
    },
    resizeWebResource: function() { Mscrm.WebResourceControlBase.prototype.resizeWebResource.call(this) },
    $7_5: function() {
        var $v_0 = false, $v_1 = $find("crmForm");
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.GetTab(this.$0_5, false);
            if (!IsNull($v_2)) {
                var $v_3 = $find($v_2.id);
                if (!IsNull($v_3) && $v_3.get_displayState() === "collapsed") $v_0 = true
            }
        }
        return $v_0
    },
    $5_5: function() {
        var $v_0 = this.$0_5.getAttribute("initParams");
        if (isNullOrEmptyString($v_0)) $v_0 = this.$4_5("initParams");
        return $v_0
    },
    $4_5: function($p0) {
        var $v_0 = null,
            $$t_4 = this,
            $v_1 = function($p1_0) {
                if ($p0 === $p1_0.getAttribute("name")) {
                    $v_0 = $p1_0.getAttribute("value");
                    return true
                }
                return false
            };
        XUI.Html.DomUtils.ForEachChild(this.$0_5, $v_1);
        return $v_0
    },
    $6_5: function() {
        var $v_0 = this.$0_5.getAttribute("Source");
        if (isNullOrEmptyString($v_0)) $v_0 = this.$4_5("source");
        return $v_0
    },
    getData: function() {
        var $v_0 = this.$5_5();
        if (!isNullOrEmptyString($v_0))
            for (var $v_1 = $v_0.split(","), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if ($v_3.startsWith("data=")) return $v_3.substr(5)
            }
        return null
    },
    setData: function(dataQueryStringParameter) {
        var $v_0 = this.$5_5();
        if (!isNullOrEmptyString($v_0)) {
            for (var $v_1 = false, $v_2 = $v_0.split(","), $v_3 = 0; $v_3 < $v_2.length; $v_3++)
                if ($v_2[$v_3].startsWith("data=")) {
                    $v_1 = true;
                    if (IsNull(dataQueryStringParameter)) Array.removeAt($v_2, $v_3);
                    else $v_2[$v_3] = "data=" + dataQueryStringParameter;
                    break
                }
            if ($v_1) $v_0 = $v_2.join(",");
            else if (!IsNull(dataQueryStringParameter)) $v_0 = $v_0 + ",data=" + dataQueryStringParameter
        } else if (!IsNull(dataQueryStringParameter)) $v_0 = "data=" + dataQueryStringParameter;
        this.$0_5.setAttribute("initParams", $v_0);
        this.$0_5.setAttribute("Source", this.get_source())
    },
    $F_5: function($p0) {
        var $$t_1 = this;
        window.setTimeout(function() {
                Mscrm.Utilities.setSilverlightControlSize($$t_1.$0_5, $$t_1.get_element(), $$t_1.$7_5())
            },
            1)
    }
};
Mscrm.WebResourceControlBase.registerClass("Mscrm.WebResourceControlBase", Mscrm.UIControl);
Mscrm.WebResourceHtmlControl.registerClass("Mscrm.WebResourceHtmlControl", Mscrm.WebResourceControlBase);
Mscrm.WebResourceImageControl.registerClass("Mscrm.WebResourceImageControl", Mscrm.WebResourceControlBase);
Mscrm.WebResourceSilverlightControl.registerClass("Mscrm.WebResourceSilverlightControl", Mscrm.WebResourceControlBase)