Type.registerNamespace("Mscrm");
Mscrm.FormControlType = function() {};
Mscrm.FormControlType.prototype = {
    none: -1,
    standard: 0,
    hidden: 1,
    iFrame: 2,
    lookup: 3,
    optionSet: 4,
    subGrid: 5,
    webResource: 6,
    quickForm: 7,
    notes: 8,
    searchWidget: 9,
    emailRecipientActivityControl: 10,
    emailEngagementActionsControl: 11
};
Mscrm.FormControlType.registerEnum("Mscrm.FormControlType", false);
Mscrm.IFormDataControl = function() {};
Mscrm.IFormDataControl.registerInterface("Mscrm.IFormDataControl");
Mscrm.IWebResourceControl = function() {};
Mscrm.IWebResourceControl.registerInterface("Mscrm.IWebResourceControl");
Mscrm.IWebResourceDataControl = function() {};
Mscrm.IWebResourceDataControl.registerInterface("Mscrm.IWebResourceDataControl");
Mscrm.SerializationMode = function() {};
Mscrm.SerializationMode.prototype = { onlyNonNullValues: 0, onlyDirtyValues: 1, everything: 2 };
Mscrm.SerializationMode.registerEnum("Mscrm.SerializationMode", false);
Mscrm.ValidationType = function() {};
Mscrm.ValidationType.prototype = { edit: 1, save: 2 };
Mscrm.ValidationType.registerEnum("Mscrm.ValidationType", false);
Mscrm.LookupStyle = function() {};
Mscrm.LookupStyle.prototype = { single: 1, multiple: 2, subject: 3 };
Mscrm.LookupStyle.registerEnum("Mscrm.LookupStyle", false);
Mscrm.ValueSource = function() {};
Mscrm.ValueSource.prototype = { control: 0, initialization: 1, newApi: 2, oldApi: 3 };
Mscrm.ValueSource.registerEnum("Mscrm.ValueSource", false);
Mscrm.ISerializableFormData = function() {};
Mscrm.ISerializableFormData.registerInterface("Mscrm.ISerializableFormData");
Mscrm.IFormDataEntity = function() {};
Mscrm.IFormDataEntity.registerInterface("Mscrm.IFormDataEntity");
Mscrm.ILookupUIBehavior = function() {};
Mscrm.ILookupUIBehavior.registerInterface("Mscrm.ILookupUIBehavior");
Mscrm.ITextInputBehavior = function() {};
Mscrm.ITextInputBehavior.registerInterface("Mscrm.ITextInputBehavior");
Mscrm.FormControlClientApiType = function() {};
Mscrm.ClientApiConstants = function() {};
Mscrm.EntitySaveEventArgs = function(mode) {
    Mscrm.EntitySaveEventArgs.initializeBase(this);
    this.$3L_2 = mode;
    this.$25_2 = false
};
Mscrm.EntitySaveEventArgs.prototype = {
    $3L_2: 0,
    $2R_2: false,
    $25_2: false,
    getSaveMode: function() { return this.$3L_2 },
    get_isCalledFromSubmitCrmForm: function() { return this.$2R_2 },
    set_isCalledFromSubmitCrmForm: function(value) {
        this.$2R_2 = value;
        return value
    },
    get_isHandlerAttached: function() { return this.$25_2 },
    set_isHandlerAttached: function(value) {
        this.$25_2 = value;
        return value
    }
};
Mscrm.FormCloseEventArgs = function() { Mscrm.FormCloseEventArgs.initializeBase(this) };
Mscrm.FormEventArgs = function() { Mscrm.FormEventArgs.initializeBase(this) };
Mscrm.FormEventArgs.prototype = {
    $3G_1: false,
    isDefaultPrevented: function() { return this.$3G_1 },
    preventDefault: function() { this.$3G_1 = true }
};
Mscrm.ControlTypeConverter = function() {};
Mscrm.ControlTypeConverter.$x = function($p0) {
    switch ($p0) {
    case 1:
        return "hidden";
    case 2:
        return "iframe";
    case 3:
        return "lookup";
    case -1:
        return "none";
    case 4:
        return "optionset";
    case 0:
        return "standard";
    case 5:
        return "subgrid";
    case 6:
        return "webresource";
    case 8:
        return "notes";
    case 9:
        return "searchwidget";
    case 10:
        return "emailrecipientactivitycontrol";
    case 11:
        return "emailengagementactionscontrol";
    default:
        return null
    }
};
Mscrm.RequiredLevelConverter = function() {};
Mscrm.RequiredLevelConverter.fromLegacyValue = function(level) {
    switch (level) {
    case 0:
        return "none";
    case 1:
    case 2:
        return "required";
    case 3:
        return "recommended"
    }
    return "none"
};
Mscrm.RequiredLevelConverter.toLegacyValue = function(level) {
    switch (level) {
    case "none":
        return 0;
    case "required":
        return 2;
    case "recommended":
        return 3
    }
    return 0
};
Mscrm.FormDataManager = function() {
    this.$2z_0 = new Mscrm.ClientApiEventHandlerList(new Sys.EventHandlerList);
    this.$1b_0 = {}
};
Mscrm.FormDataManager.$6h = function($p0) {
    if (window.IsTurboForm) return;
    var $v_0 = Xrm.Page.data;
    if (!$v_0) {
        $v_0 = new Mscrm.FormDataManagerWrapper(new Mscrm.FormDataManager);
        Xrm.Page.data = $v_0
    }
    var $v_1 = $v_0.getEntityById($p0.get_id());
    if (!IsNull($v_1)) {
        $v_1.dispose();
        $v_1 = null
    }
    var $v_2 = $p0.$3g_1();
    if ($p0.get_id() === "PrimaryEntity") $v_0.entity = $v_2;
    $v_0.addEntity($p0.get_id(), $v_2)
};
Mscrm.FormDataManager.$72 = function($p0) {
    if (window.IsTurboForm) return;
    if (IsNull(Xrm.Page.data)) return;
    if ($p0 === "PrimaryEntity") Xrm.Page.data.entity = null;
    Xrm.Page.data.removeEntity($p0)
};
Mscrm.FormDataManager.prototype = {
    entity: null,
    blockAutoSave: function(autoSave) { Mscrm.InlineEditDataService.setBlockAutoSave(autoSave) },
    getIsValid: function() {
        var $v_0 = $find("crmForm");
        return $v_0.IsValid(false)
    },
    refresh: function(save) {
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
            var $v_0 = Xrm.Page.data.entity.getIsDirty();
            if ($v_0 && save) return this.save(true);
            else {
                var $v_1 = Mscrm.ReadFormUtilities.get_forceNavigationAway();
                if (!save && !$v_1 && $v_0)
                    if (!confirm(window.LOCID_FORMS_SAVE_CONFIRM_TITLE)) {
                        var $v_2 = Mscrm.ErrorInformation
                                .createErrorInfo("0x80060912", window.LOCID_REFRESH_CANCELED, null),
                            $v_3 = jQueryApi.jQueryDeferredFactory
                                .Deferred(Xrm.SaveSuccessResponse, Xrm.SaveErrorResponse);
                        return $v_3.reject(new Xrm
                            .SaveErrorResponse($v_2.get_errorCode(), $v_2.get_description(), $v_2.get_description()))
                    }
                return this.$4Z_0()
            }
        } else return null
    },
    refreshAppointment: function(appointmentId) {
        var $v_0 = Xrm.Page.data.entity.getEntityName(), $v_1 = appointmentId;
        return this.$4a_0($v_0, $v_1)
    },
    $4Z_0: function() {
        var $v_0 = Xrm.Page.data.entity.getEntityName(), $v_1 = Xrm.Page.data.entity.getId();
        $v_1 = this.$5S_0($v_1, $v_0);
        return this.$4a_0($v_0, $v_1)
    },
    $4a_0: function($p0, $p1) {
        this.$4v_0();
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Xrm.SaveSuccessResponse, Xrm.SaveErrorResponse),
            $$t_6 = this,
            $$t_7 = this;
        Mscrm.InlineEditDataService.inlineFormRefresh($p0,
            $p1,
            Mscrm.InlineEditDataService.get_formId(),
            function($p1_0) {
                $v_0.resolve(null);
                return false
            },
            function($p1_0) {
                var $v_1 = $p1_0["_error"];
                $v_0.reject(new Xrm.SaveErrorResponse($v_1.ErrorCode, $v_1.DisplayText, $v_1.Description));
                return false
            });
        return $v_0.promise()
    },
    $4v_0: function() {
        var $v_0 = $find("crmNotifications");
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.GetNotifications();
            while ($v_1.length) {
                var $v_2 = $v_1[0].Id;
                Xrm.Page.ui.clearFormNotification($v_2);
                $v_1 = $v_0.GetNotifications()
            }
        }
    },
    $5S_0: function($p0, $p1) {
        var $v_0 = $p0;
        if (isNullOrEmptyString($v_0))
            if ($p1 === "recurringappointmentmaster" || $p1 === "appointment") {
                var $v_1 = Xrm.Page.getAttribute("activityid");
                if (!IsNull($v_1)) if (!IsNull($v_1.getValue())) $v_0 = $v_1.getValue().toString()
            } else if ($p1 === "dynamicproperty") {
                var $v_2 = Xrm.Page.getAttribute("dynamicpropertyid");
                if (!IsNull($v_2)) $v_0 = $v_2.getValue().toString()
            }
        return $v_0
    },
    addOnLoad: function(handler) { this.$2z_0.addHandler("onload", handler, false) },
    addEntity: function(id, entityWrapper) {
        if (id === "PrimaryEntity") this.entity = entityWrapper;
        this.$1b_0[id] = entityWrapper
    },
    removeEntity: function(id) {
        if (id === "PrimaryEntity") this.entity = null;
        this.$1b_0[id] = null
    },
    removeOnLoad: function(handler) { this.$2z_0.removeHandler("onload", handler) },
    save: function(refreshWhenSaveCanceled, saveOptions) {
        if (!Mscrm.InternalUtilities.Utilities.isRefreshForm()) return null;
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Xrm.SaveSuccessResponse, Xrm.SaveErrorResponse),
            $v_1 = Xrm.Page.data.entity.getIsDirty();
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        var $$t_B = this,
            $$t_C = this,
            $v_2 = Mscrm.InlineEditDataService.save(1,
                function($p1_0) {
                    var $v_3 = $find("PrimaryEntity");
                    if (!IsNull($v_3) && !IsNull($p1_0)) {
                        var $v_4 = Mscrm.InlineEditUtilities.getEntityReference($p1_0);
                        if (!IsNull($v_4)) {
                            $v_3.set_recordId($v_4.Id);
                            $v_3.set_recordName($v_4.Name)
                        }
                    }
                    $v_0.resolve(null);
                    return false
                },
                function($p1_0) {
                    var $v_5 = $p1_0["_error"];
                    $v_0.reject(new Xrm.SaveErrorResponse($v_5.ErrorCode, $v_5.DisplayText, $v_5.Description));
                    return false
                },
                false,
                true,
                saveOptions);
        if (refreshWhenSaveCanceled && $v_2.get_code() === 9) {
            var $v_6 = Mscrm.ReadFormUtilities.get_forceNavigationAway();
            if (!$v_6 && $v_1) if (!confirm(window.LOCID_FORMS_SAVE_CONFIRM_TITLE)) return null;
            return this.$4Z_0()
        }
        ($v_2.get_code() === 3 || $v_2.get_code() === 2) &&
            $v_0.reject(new Xrm.SaveErrorResponse(0, $v_2.get_message(), $v_2.get_message()));
        !$v_1 && $v_2.get_code() !== 9 && $v_2.get_code() !== 6 && $v_0.resolve(null);
        return $v_0.promise()
    },
    setFormDirty: function(isDirty) {
        var $v_0 = $find("crmForm");
        $v_0.setFormDirty(isDirty)
    },
    getEntity: function() { return this.entity },
    invokeDataOnLoadHandlers: function(loadState) {
        var $v_0 = this.$2z_0.getHandler("onload"), $v_1 = new Mscrm.DataLoadArgs(loadState);
        $v_0 && $v_0(this.entity, $v_1)
    },
    getEntityById: function(id) {
        if (id in this.$1b_0) return this.$1b_0[id];
        else return null
    },
    $1b_0: null
};
Mscrm.DataLoadArgs = function($p0) {
    Mscrm.DataLoadArgs.initializeBase(this);
    this.$3K_2 = $p0
};
Mscrm.DataLoadArgs.prototype = { $3K_2: 0, getDataLoadState: function() { return this.$3K_2 } };
Mscrm.FormUIControl = function($p0) {
    this.$$d_$5l_4 = Function.createDelegate(this, this.$5l_4);
    this.$$d_$5g_4 = Function.createDelegate(this, this.$5g_4);
    Mscrm.FormUIControl.initializeBase(this, [$p0])
};
Mscrm.FormUIControl.$4R = function($p0) {
    var $v_0 = $p0.getAttribute("isAutoExpanding");
    if (!IsNull($v_0) && $v_0.toString() === "TRUE") return true;
    else return false
};
Mscrm.FormUIControl.prototype = {
    $J_4: 0,
    $2b_4: null,
    $3_4: null,
    $8_4: null,
    $3Q_4: true,
    $1M_4: null,
    get_dataFieldName: function() { return this.$2b_4 },
    set_dataFieldName: function(value) {
        this.$2b_4 = value;
        return value
    },
    get_innerControl: function() {
        if (!this.$3_4) {
            Mscrm.Utilities.tryInitOnDemandControl(this.$o_3);
            this.$3_4 = $find(this.$o_3);
            if (this.$J_4 === 5)
                if (IsNull(this.$3_4) || !Mscrm.IGridControl.isInstanceOfType(this.$3_4)) this.$3_4 = null
        }
        return this.$3_4
    },
    set_innerControl: function(value) {
        this.$3_4 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!this.$3_4) {
            var $v_0 = false;
            if (IsNull(window._aControlHeaderList)) $v_0 = true;
            else {
                var $v_1 = window._aControlHeaderList[this.$o_3];
                if (!$v_1 || $v_1.State === "complete") $v_0 = true
            }
            if ($v_0) if (this.$2b_4);
        }
        this.$8_4 = $get(this.$o_3 + "_c");
        this.$3Q_4 = !!this.$8_4 && this.$8_4.getAttribute("sl") !== "false";
        this.$4s_4()
    },
    isVisibleInTree: function() {
        var $v_0 = this.get_parent();
        return this.getVisible() && $v_0.getVisible() && $v_0.get_parent().getVisible()
    },
    setFocus: function() {
        !this.getVisible() && this.setVisible(true);
        var $v_0 = this.get_parent();
        !$v_0.getVisible() && $v_0.setVisible(true);
        var $v_1 = $v_0.get_parent();
        !$v_1.getVisible() && $v_1.setVisible(true);
        $v_1.get_displayState() === "collapsed" && $v_1.set_displayState("expanded");
        this.get_innerControl().setFocus()
    },
    setRequiredLevel: function(level) {
        if (this.$8_4) {
            var $v_0 = "";
            switch (level) {
            case "recommended":
                $v_0 = LOCID_FORM_RECOMMENDED_ALT;
                break;
            case "required":
                $v_0 = LOCID_FORM_REQUIRED_ALT;
                break;
            case "none":
                break;
            default:
                return
            }
            Mscrm.Form.setFieldRequiredOrRecommended(this.$8_4, Mscrm.RequiredLevelConverter.toLegacyValue(level), $v_0)
        }
        if (this.get_innerControl() && Sys.UI.Control.isInstanceOfType(this.get_innerControl())) {
            var $v_1 = this.get_innerControl().get_element();
            $v_1.setAttribute("req", level)
        }
    },
    setVisible: function(isVisible) {
        this.get_element().style.visibility = isVisible ? "visible" : "hidden";
        this.get_innerControl().setVisible(isVisible);
        if (isVisible && !isNullOrEmptyString(this.get_element().style.display)) this.get_element().style.display = "";
        if (!IsNull(this.$8_4) && this.$3Q_4) {
            this.$8_4.style.visibility = isVisible ? "visible" : "hidden";
            if (isVisible && !isNullOrEmptyString(this.$8_4.style.display)) this.$8_4.style.display = ""
        }
        this.$5o_4(isVisible)
    },
    isEditing: function() { return false },
    $5o_4: function($p0) {
        var $v_0 = this.get_parent(), $v_1 = $v_0.get_element().offsetHeight;
        this.$6x_4(this.get_element());
        this.$6w_4(this.get_element(), $p0);
        this.$4q_4($p0);
        this.$5h_4($p0, $v_1)
    },
    $6x_4: function($p0) {
        var $v_0 = true, $v_1 = $p0.parentNode;
        if ($v_1.hasChildNodes())
            for (var $v_2 = $v_1.childNodes, $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3];
                if ($v_4.style.visibility !== "hidden") {
                    $v_0 = false;
                    break
                }
            }
        if ($v_0 && this.$3t_4()) $v_1.style.display = "none";
        else $v_1.style.display = ""
    },
    $6w_4: function($p0, $p1) {
        if (!IsNull($p0)) {
            var $v_0 = XUI.Html.DomUtils.GetNextSibling($p0.parentNode), $v_1 = 1, $v_2 = $p0.getAttribute("rowspan");
            if (!IsNull($v_2)) $v_1 = parseInt($v_2.toString(), 10);
            if (this.$3t_4())
                while (!IsNull($v_0) && $v_1-- > 1) {
                    $v_0.style.display = $p1 ? "" : "none";
                    $v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
                }
        }
    },
    $4q_4: function($p0) {
        if (this.$4P_4()) {
            var $v_0 = this.get_parent(), $v_1 = $v_0.get_parent();
            !IsNull($v_1) && $v_1.get_element().setAttribute("IsViewportTab", $p0 ? "1" : "0");
            $v_0.get_element().setAttribute("IsViewportSection", $p0 ? "1" : "0");
            if (!$p0) {
                if (!IsNull($v_1)) {
                    $v_1.get_element().style.height = "";
                    $v_1.get_element().childNodes[1].style.height = ""
                }
                $v_0.get_element().style.height = ""
            }
        }
    },
    $5h_4: function($p0, $p1) {
        var $v_0 = $find("crmForm");
        if (!IsNull($v_0)) {
            var $v_1 = this.get_parent(), $v_2 = $v_1.get_parent();
            if (this.$4P_4()) {
                !IsNull($v_2) && $v_0.SetViewportTabSection("tab", $v_2.get_id(), $p0);
                $v_0.SetViewportTabSection("section", $v_1.get_id(), $p0)
            } else !IsNull($v_2) && $v_0.ModifyMinimumTabHeight($v_1.get_element().offsetHeight - $p1, $v_2.get_id());
            $v_0.HandleResize()
        }
    },
    $3t_4: function() {
        var $v_0 = 1, $v_1 = this.get_element().getAttribute("formXmlColSpan");
        if (!IsNull($v_1)) $v_0 = parseInt($v_1.toString(), 10);
        var $v_2 = this.$5X_4();
        return $v_0 === $v_2
    },
    $4P_4: function() { return Mscrm.FormUIControl.$4R(this.get_element()) },
    $5X_4: function() {
        var $v_0 = this.get_parent(), $v_1 = $v_0.get_element().getAttribute("columns");
        if (!IsNull($v_1)) return parseInt($v_1.toString(), 10);
        else return XUI.Html.DomUtils.GetFirstChild($v_0.get_element()).childNodes.length / 2
    },
    $6l_4: function() { return this.getWrapperInternal() },
    getWrapperInternal: function() {
        switch (this.$J_4) {
        case 3:
            return new Mscrm.LookupUIControlWrapper(this);
        case 5:
            return new Mscrm.SubGridUIControlWrapper(this);
        case 6:
            switch (this.get_innerControl().get_element().tagName) {
            case "IMG":
                return new Mscrm.WebResourceObjectUIControlWrapper(this);
            case "OBJECT":
                return new Mscrm.WebResourceDataUIControlWrapper(this);
            default:
                return new Mscrm.WebResourceObjectUIControlWrapper(this)
            }
        case 2:
            return new Mscrm.IFrameUIControlWrapper(this);
        case 4:
            var $v_0 = this.get_innerControl().get_attribute();
            if ($v_0 && $v_0.get_metadataType() === "boolean") return new Mscrm.BooleanOptionSetUIControlWrapper(this);
            else return new Mscrm.OptionSetUIControlWrapper(this);
        case 8:
        case 0:
            var $v_1 = this.get_innerControl().get_element();
            if (Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-CheckBox") ||
                Sys.UI.DomElement
                .containsCssClass($v_1, "ms-crm-RadioButton")) return new Mscrm.BooleanUIControlWrapper(this);
            if (Mscrm.IFormDataControl.isInstanceOfType(this.get_innerControl())) {
                var $v_2 = this.get_innerControl().get_attribute();
                if ($v_2.get_metadataType() === "datetime") return new Mscrm.DateTimeUIControlWrapper(this)
            }
            return new Mscrm.DataUIControlWrapper(this);
        default:
            return null
        }
    },
    get_label: function() { return Mscrm.Utilities.getNonHiddenInnerText(this.$8_4) },
    set_label: function(value) {
        Mscrm.Utilities.setNonHiddenLabelValue(this.$8_4, value);
        return value
    },
    get_controlType: function() { return this.$J_4 },
    set_controlType: function(value) {
        this.$J_4 = value;
        return value
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$52_4();
        Mscrm.FormUIElement.prototype.dispose.call(this)
    },
    $4s_4: function() {
        var $v_0 = this.$5T_4();
        if (IsNull($v_0)) {
            Mscrm.FormUtility.$2v(this.get_element(), this.$$d_$5g_4, true);
            return
        }
        $addHandler($v_0, "load", this.$$d_$5l_4)
    },
    $5l_4: function($p0) {
        var $v_0 = $p0.target, $v_1 = null;
        try {
            $v_1 = $v_0.contentWindow.document.body;
            Mscrm.FormUtility.$2v($v_1, this.$$d_$5g_4, true)
        } catch ($$e_3) {
        }
    },
    $5g_4: function($p0) {
        Mscrm.Utilities.tryInitOnDemandControl(this.$o_3);
        Mscrm.FormUIControl.$37 = this
    },
    $5T_4: function() {
        if (this.$J_4 !== 8) return null;
        if (IsNull(this.$1M_4)) this.$1M_4 = this.get_innerControl().get_element();
        return this.$1M_4
    },
    $52_4: function() {
        if (IsNull(this.$1M_4)) {
            Mscrm.FormUtility.$2v(this.get_element(), this.$$d_$5g_4, false);
            return
        }
        try {
            $removeHandler(this.$1M_4, "load", this.$$d_$5l_4);
            var $v_0 = this.$1M_4.contentWindow.document.body;
            Mscrm.FormUtility.$2v($v_0, this.$$d_$5g_4, false)
        } catch ($$e_1) {
        }
    }
};
Mscrm.FormUIElement = function(e) { Mscrm.FormUIElement.initializeBase(this, [e]) };
Mscrm.FormUIElement.prototype = {
    $o_3: null,
    $K_3: null,
    $d_3: null,
    get_elementId: function() { return this.$o_3 },
    set_elementId: function(value) {
        this.$o_3 = value;
        return value
    },
    get_elementName: function() { return this.$K_3 },
    set_elementName: function(value) {
        this.$K_3 = value;
        return value
    },
    getKey: function() { return this.$K_3 },
    getVisible: function() { return this.get_visible() },
    setVisible: function(isVisible) { this.set_visible(isVisible) },
    getWrapper: function() {
        if (!this.$d_3) this.$d_3 = this.getWrapperInternal();
        return this.$d_3
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.FormUIFormSelector = function() {
    Mscrm.FormUIFormSelector.initializeBase(this);
    this.$f_1 = new Xrm.XrmFormSelectorItems
};
Mscrm.FormUIFormSelector.prototype = {
    $P_1: null,
    $f_1: null,
    get_currentForm: function() {
        var $v_0 = !this.$P_1 ? null : this.$P_1.$15_3;
        return isNullOrEmptyString($v_0) ? null : this.$f_1.get($v_0)
    },
    get_formSelector: function() { return this.$P_1 },
    set_formSelector: function(value) {
        this.$P_1 = value;
        return value
    },
    get_items: function() { return this.$f_1 },
    initialize: function() {
        Sys.Component.prototype.initialize.call(this);
        if (this.$P_1) {
            var $v_0 = this.$P_1.$1e_3;
            if ($v_0)
                for (var $v_1 = this.$P_1
                             .$22_3,
                    $v_2 = 0;
                    $v_2 < $v_0.length;
                    $v_2++)
                    this.$f_1.add(new Mscrm.FormSelectorItemWrapper(new Mscrm.FormUIRuleForm($v_0[$v_2], $v_1[$v_2])))
        }
    },
    dispose: function() {
        Sys.Component.prototype.dispose.call(this);
        Mscrm.Utilities.destroyObject(this)
    },
    getWrapper: function() { return new Mscrm.FormSelectorWrapper(this) }
};
Mscrm.FormUIManager = function() {
    Mscrm.FormUIManager.initializeBase(this);
    if (Mscrm.Utilities.isRefreshForm()) this.controls = new Xrm.XrmControls;
    else this.controls = new Xrm.XrmClassicControls;
    this.tabs = new Xrm.XrmTabs;
    this.$67_1();
    this.$63_1();
    var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(_formHierarchy).children;
    this.$4t_1($v_0);
    this.$1d_1 = $find("crmForm")
};
Mscrm.FormUIManager.$62 = function($p0, $p1, $p2) {
    var $v_0 = $p0.child;
    if (!IsNull($v_0) && $v_0.isClientApiEnabled) {
        var $v_1 = $get($v_0.id), $v_2 = $get($v_0.id + "_d");
        if (($v_1 || $v_0.controlType === 5) && $v_2 && $v_0.controlType !== 1) {
            var $v_3 = {
                    controlType: $v_0.controlType,
                    dataFieldName: $v_0.name,
                    elementId: $v_0.id,
                    elementName: $v_0.id,
                    parent: $p1
                },
                $v_4 = { innerControl: $v_0.id },
                $v_5 = $create(Mscrm.FormUIControl, $v_3, null, $v_4, $v_2);
            $p1.$2_4.add(new Mscrm.DataUIControlWrapper($v_5));
            $p2.controls.add(new Mscrm.DataUIControlWrapper($v_5))
        }
    }
};
Mscrm.FormUIManager.$68 = function($p0, $p1) {
    var $v_0 = $get($p0.id);
    if ($v_0) {
        var $v_1 = { elementId: $p0.id, elementName: $p0.name, parent: $p1 },
            $v_2 = $create(Mscrm.FormUISection, $v_1, null, null, $v_0);
        $p1.$2p_4.add(new Mscrm.SectionWrapper($v_2));
        return $v_2
    } else if (Mscrm.CrmUri.create(window.location.href).get_pageType() === "entityrecord");
    return null
};
Mscrm.FormUIManager.$6A = function($p0, $p1, $p2) {
    var $v_0 = String.format("tab{0}", $p1), $v_1 = $get($v_0);
    if ($v_1) {
        var $v_2 = { elementId: $p0.id, elementName: $p0.name, parent: $p2 }, $v_3 = "crmEventManager";
        if (!IsNull($find("crmInlinePageManager"))) $v_3 = "__Page_crmEventManager";
        var $v_4 = { eventManager: $v_3 }, $v_5 = $create(Mscrm.FormUITab, $v_2, null, $v_4, $v_1);
        $p2.tabs.add(new Mscrm.TabWrapper($v_5));
        return $v_5
    } else if (Mscrm.CrmUri.create(window.location.href).get_pageType() === "entityrecord");
    return null
};
Mscrm.FormUIManager.prototype = {
    controls: null,
    navigation: null,
    formSelector: null,
    tabs: null,
    $1d_1: null,
    dispose: function() {
        Sys.Component.prototype.dispose.call(this);
        Mscrm.Utilities.destroyObject(this)
    },
    getControls: function() { return this.controls },
    getCurrentControl: function() {
        var $v_0 = Mscrm.FormUIControl.$37;
        if (!IsNull($v_0) && $v_0.get_element().id && $v_0.get_id().endsWith("_d")) {
            var $v_1 = $v_0.get_element().id;
            return this.controls.get($v_1.substring(0, $v_1.length - 2))
        }
        return null
    },
    setFormNotification: function(message, notificationLevel, uniqueId) {
        var $v_0 = $find("crmNotifications");
        if (IsNull($v_0)) return false;
        return $v_0.setFormNotification(message, notificationLevel, uniqueId)
    },
    setFormHtmlNotification: function(htmlText, notificationLevel, uniqueId) {
        var $v_0 = $find("crmNotifications");
        if (IsNull($v_0)) return false;
        return $v_0.setFormHtmlNotification(htmlText, notificationLevel, uniqueId)
    },
    clearFormNotification: function(uniqueId) {
        var $v_0 = $find("crmNotifications");
        if (IsNull($v_0)) return false;
        return $v_0.clearFormNotification(uniqueId)
    },
    getFormType: function() { return this.$1d_1.get_formType() },
    getTabs: function() { return this.tabs },
    getViewPortHeight: function() { return this.$1d_1.GetViewportHeight() },
    getViewPortWidth: function() { return this.$1d_1.GetViewportWidth() },
    refreshRibbon: function() { refreshRibbon() },
    close: function() { this.$1d_1.CloseRecord() },
    $4t_1: function($p0) { this.$2w_1($p0, this) },
    $2w_1: function($p0, $p1) {
        if (!IsNull($p0))
            for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
                var $v_1 = $p0[$v_0];
                switch ($v_1.__type) {
                case "tab":
                    var $v_2 = Mscrm.FormUIManager.$6A($v_1, $v_0, this);
                    $v_2 && this.$2w_1($v_1.children, $v_2);
                    break;
                case "section":
                    var $v_3 = Mscrm.FormUIManager.$68($v_1, $p1);
                    $v_3 && this.$2w_1($v_1.children, $v_3);
                    break;
                case "cell":
                    Mscrm.FormUIManager.$62($v_1, $p1, this);
                    break;
                case "column":
                case "row":
                default:
                    this.$2w_1($v_1.children, $p1);
                    break
                }
            }
    },
    $67_1: function() {
        var $v_0 = {};
        $v_0["formNavControl"] = "crmNavBar";
        var $v_1 = $create(Mscrm.FormUINavigationBar, null, null, $v_0, null);
        this.navigation = $v_1.get_wrapper()
    },
    $63_1: function() {
        var $v_0 = {};
        $v_0["formSelector"] = "crmFormSelector";
        var $v_1 = $create(Mscrm.FormUIFormSelector, null, null, $v_0, null);
        this.formSelector = $v_1.getWrapper()
    }
};
Mscrm.FormUINavigationBar = function() {
    this.$$d_$64_1 = Function.createDelegate(this, this.$64_1);
    Mscrm.FormUINavigationBar.initializeBase(this);
    this.$f_1 = new Xrm.XrmNavigationItems
};
Mscrm.FormUINavigationBar.prototype = {
    $1D_1: null,
    $f_1: null,
    get_formNavControl: function() { return this.$1D_1 },
    set_formNavControl: function(value) {
        this.$1D_1 = value;
        return value
    },
    get_items: function() { return this.$f_1 },
    get_visible: function() { return !!this.$1D_1 },
    get_wrapper: function() { return new Mscrm.NavigationBarWrapper(this) },
    initialize: function() {
        Sys.Component.prototype.initialize.call(this);
        this.$1D_1 && this.$1D_1.add_$4r_3(this.$$d_$64_1)
    },
    dispose: function() {
        Sys.Component.prototype.dispose.call(this);
        Mscrm.Utilities.destroyObject(this)
    },
    $64_1: function($p0, $p1) {
        for (var $v_0 = this.$1D_1
                     .getItemIds(),
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++)
            this.$f_1.add(new Mscrm.NavigationItemWrapper(new Mscrm.FormUINavigationBarItem(this.$1D_1, $v_0[$v_1])))
    }
};
Mscrm.FormUINavigationBarItem = function($p0, $p1) {
    this.$1m_0 = $p0;
    this.$V_0 = $p1
};
Mscrm.FormUINavigationBarItem.prototype = {
    $1m_0: null,
    $V_0: null,
    getId: function() { return this.$V_0 },
    getKey: function() { return this.$V_0 },
    getLabel: function() { return this.$1m_0.getItemText(this.$V_0) },
    getVisible: function() { return this.$1m_0.getItemVisibility(this.$V_0) },
    getWrapper: function() { return this },
    setFocus: function() {
        var $v_0 = $get(this.$V_0);
        if (!IsNull($v_0) && Mscrm.FormNavControl.isNavLinkEnabled($v_0)) {
            var $v_1 = $P_CRM($v_0);
            $v_1.click()
        }
    },
    setLabel: function(label) { this.$1m_0.setItemText(this.$V_0, label) },
    setVisible: function(visible) { this.$1m_0.setItemVisibility(this.$V_0, visible) },
    getName: function() { return this.getKey() }
};
Mscrm.FormUIRuleForm = function(id, label) {
    this.$$d_navigate = Function.createDelegate(this, this.navigate);
    this.$V_0 = id;
    this.$8_0 = label
};
Mscrm.FormUIRuleForm.prototype = {
    $V_0: null,
    $8_0: null,
    getId: function() { return this.$V_0 },
    getKey: function() { return this.$V_0 },
    getLabel: function() { return this.$8_0 },
    getWrapper: function() { return this },
    navigate: function() {
        if (isActionQueueActive()) {
            window.setTimeout(this.$$d_navigate, 5);
            return
        }
        Mscrm.FormSelector.navigateToForm(this.$V_0, this, false)
    },
    getName: function() { return this.getKey() }
};
Mscrm.FormUISection = function($p0) {
    Mscrm.FormUISection.initializeBase(this, [$p0]);
    if (Mscrm.Utilities.isRefreshForm()) this.$2_4 = new Xrm.XrmControls;
    else this.$2_4 = new Xrm.XrmClassicControls;
    var $v_0 = $p0, $v_1 = $v_0.rows[0];
    if ($v_1) {
        var $v_2 = $v_1.cells[0];
        if ($v_2 &&
            Sys.UI.DomElement.containsCssClass($v_2, "ms-crm-Form-Section") &&
            !Sys.UI.DomElement
            .containsCssClass($v_2, "ms-crm-Form-SectionBar-Spacer")) this.$8_4 = XUI.Html.DomUtils.GetFirstChild($v_2);
        else this.$1C_4 = $v_0.getAttribute("label")
    }
    this.$61_4()
};
Mscrm.FormUISection.$4F = function($p0) {
    var $v_0 = $find($p0);
    if (IsNull($v_0)) {
        Mscrm.CrmUIComponent.crmCreate(Mscrm.FormUISection, null, null, null, $get($p0));
        $v_0 = $find($p0)
    }
    return $v_0
};
Mscrm.FormUISection.prototype = {
    $2_4: null,
    $8_4: null,
    $1C_4: null,
    $20_4: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$20_4 = null;
        this.$2_4 = null;
        this.$8_4 = null;
        Mscrm.FormUIElement.prototype.dispose.call(this)
    },
    get_label: function() { return this.$8_4 ? XUI.Html.GetText(this.$8_4) : this.$1C_4 },
    set_label: function(value) {
        if (this.$8_4) XUI.Html.SetText(this.$8_4, value);
        else this.$1C_4 = value;
        return value
    },
    setVisible: function(isVisible) {
        Mscrm.FormUIElement.prototype.setVisible.call(this, isVisible);
        if (isVisible) this.get_element().style.display = ""
    },
    getWrapperInternal: function() { return new Mscrm.SectionWrapper(this) },
    $61_4: function() {
        for (var $v_0 = this.get_element().getElementsByTagName("TD"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if (Mscrm.FormUIControl.$4R($v_2)) this.$20_4 = $v_2
        }
    },
    $3l_4: function() { this.$4g_4(false) },
    $4e_4: function() { this.$4g_4(true) },
    $4g_4: function($p0) {
        if (!IsNull(this.$20_4)) {
            var $v_0 = this.$20_4;
            if (this.$6y_4($v_0)) return;
            var $v_1 = $v_0.offsetHeight;
            if ($v_1 > 0)
                if ($p0) $v_0.style.height = "auto";
                else $v_0.style.height = ($v_1 - Mscrm.Utilities.getVerticalBoxPadding($v_0)).toString() + "px"
        }
    },
    $6y_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetLastChild($p0);
        if (!IsNull($v_0)) {
            if ($v_0.tagName === "IFRAME") return false;
            var $v_1 = $v_0.getAttribute("type");
            if ($v_1 === "subgrid") return true
        }
        return false
    }
};
Mscrm.FormUITab = function($p0) {
    this.$$d_$6W_4 = Function.createDelegate(this, this.$6W_4);
    Mscrm.FormUITab.initializeBase(this, [$p0]);
    this.$2p_4 = new Xrm.XrmTabSections
};
Mscrm.FormUITab.get_$4Y = function() { return $find("crmNavBar") };
Mscrm.FormUITab.$5Q = function($p0) {
    if (IsNull($p0)) return false;
    else if (IsNull($p0.style)) return true;
    else return $p0.style.display !== "none" && $p0.style.visibility !== "hidden"
};
Mscrm.FormUITab.$6q = function($p0, $p1) { $p0.style.display = $p1 ? "" : "none" };
Mscrm.FormUITab.prototype = {
    $1X_4: null,
    $16_4: null,
    $8_4: null,
    $1C_4: null,
    $2p_4: null,
    $1L_4: null,
    add_tabStateChange: function(value) { this.get_events().addHandler("TabStateChange", value) },
    remove_tabStateChange: function(value) { this.get_events().removeHandler("TabStateChange", value) },
    get_displayState: function() { return Mscrm.FormUITab.$5Q(this.$1X_4) ? "expanded" : "collapsed" },
    set_displayState: function(value) {
        switch (value) {
        case "collapsed":
        case "expanded":
            break;
        default:
            return value
        }
        var $v_0 = this.get_displayState(), $v_1 = value === "expanded";
        Mscrm.FormUITab.$6q(this.$1X_4, $v_1);
        if (this.$16_4) {
            var $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create($v_1 ? window.CDNURL + "/_imgs/tab_section_down.png" : "/_imgs/tab_section_right.png"));
            this.$16_4.src = $v_2.source;
            this.$16_4.className = Mscrm.ImageStrip.replaceExistingImageStripClass(this.$16_4.className, $v_2.cssClass);
            this.$16_4.alt = this.$16_4.title = $v_1
                ? window.LOCID_FORM_TABHEADER_COLLAPSE
                : window.LOCID_FORM_TABHEADER_EXPAND
        }
        if (this.get_isInitialized() && $v_0 !== value) {
            if (value === "expanded")
                for (var $v_3 = this.get_element()
                             .getElementsByTagName("IFRAME"),
                    $v_4 = 0;
                    $v_4 < $v_3.length;
                    $v_4++) {
                    var $v_5 = $v_3[$v_4].attributes.getNamedItem("gridId");
                    if (!IsNull($v_5)) {
                        var $v_6 = {};
                        $v_6["id"] = $v_5.value;
                        Mscrm.PageManager.get_instance().raiseEvent(70, $v_6)
                    }
                }
            this.$6e_4()
        }
        return value
    },
    get_label: function() { return this.$8_4 ? XUI.Html.GetText(this.$8_4) : this.$1C_4 },
    set_label: function(value) {
        if (this.$8_4) {
            XUI.Html.SetText(this.$8_4, value);
            var $v_0 = Mscrm.FormUITab.get_$4Y();
            $v_0 && $v_0.setItemText(String.format("{0}Tab", this.get_id()), value)
        } else this.$1C_4 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = $get(String.format("{0}_Header", this.$o_3));
        if ($v_0) {
            var $v_1 = $v_0.getElementsByTagName("H2");
            if ($v_1.length > 0) this.$8_4 = $v_1[0];
            this.$1X_4 = XUI.Html.DomUtils.GetNextSibling($v_0);
            var $v_2 = $v_0.getElementsByTagName("IMG");
            if ($v_2.length > 0) {
                this.$16_4 = $v_2[0];
                this.$1L_4 = $v_0.getElementsByTagName("A");
                for (var $v_3 = 0;
                    $v_3 < this.$1L_4.length;
                    $v_3++
                ) $addHandler(this.$1L_4[$v_3], "click", this.$$d_$6W_4)
            }
        } else {
            this.$1X_4 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
            this.$1C_4 = this.$1X_4.getAttribute("label")
        }
        this.set_displayState(this.get_displayState())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (this.$1L_4) for (var $v_0 = 0; $v_0 < this.$1L_4.length; $v_0++) $clearHandlers(this.$1L_4[$v_0]);
        Mscrm.FormUIElement.prototype.dispose.call(this)
    },
    setFocus: function() {
        var $v_0 = $find("crmForm");
        $v_0 && $v_0.GetTab(this.get_element(), true)
    },
    setVisible: function(isVisible) {
        Mscrm.FormUIElement.prototype.setVisible.call(this, isVisible);
        var $v_0 = Mscrm.FormUITab.get_$4Y();
        $v_0 && $v_0.setItemVisibility(String.format("{0}Tab", this.get_id()), isVisible)
    },
    getWrapperInternal: function() { return new Mscrm.TabWrapper(this) },
    $6W_4: function($p0) {
        this.set_displayState(this.get_displayState() === "collapsed" ? "expanded" : "collapsed");
        Mscrm.FormUtility.refreshWindowInIE7();
        $p0.preventDefault()
    },
    $6e_4: function() {
        var $v_0 = this.get_events().getHandler("TabStateChange");
        if ($v_0) {
            var $v_1 = new Mscrm.TabStateChangeEventArgs(this.get_displayState());
            $v_0(this.getWrapper(), $v_1)
        }
    }
};
Mscrm.TabStateChangeEventArgs = function(state) {
    Mscrm.TabStateChangeEventArgs.initializeBase(this);
    this.$1a_1 = state
};
Mscrm.TabStateChangeEventArgs.prototype = { $1a_1: null, get_displayState: function() { return this.$1a_1 } };
Mscrm.BooleanAttributeWrapper = function($p0) {
    Mscrm.BooleanAttributeWrapper.initializeBase(this);
    this._attribute = $p0;
    this.controls = new Xrm.XrmControls;
    var $v_0 = $p0.$2_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.DataControlFactory.createInstance($p1_0);
        $v_1 && $$t_5.controls.add($v_1)
    })
};
Mscrm.BooleanAttributeWrapper.prototype = {
    _attribute: null,
    getInitialValue: function() { return this._attribute.$Q_1 },
    getOption: function(value) { return null },
    getOptions: function() { return null },
    getSelectedOption: function() { return null },
    getText: function() { return null },
    addOnChange: function(handler, system) { this._attribute.addOnChange(handler, !!system) },
    fireOnChange: function() { this._attribute.fireOnChange() },
    getAttributeType: function() { return this._attribute.get_metadataType() },
    getFormat: function() { return this._attribute.$F_1 },
    getIsDirty: function() { return this._attribute.get_isDirty() },
    getIsValid: function() { return this._attribute.getIsValid() },
    getKey: function() { return this._attribute.getKey() },
    getName: function() { return this._attribute.$4_1 },
    getParent: function() { return new Mscrm.FormDataEntityWrapper(this._attribute.$E_1) },
    getRequiredLevel: function() { return this._attribute.$X_1 },
    getSubmitMode: function() { return this._attribute.get_submitModeValue() },
    getUserPrivilege: function() { return this._attribute.getUserPrivilege() },
    getValue: function() {
        if (this._attribute.get_metadataType() === "boolean")
            switch (this._attribute.get_value()) {
            case 1:
                return true;
            case 0:
                return false
            }
        return this._attribute.get_value()
    },
    removeOnChange: function(handler) { this._attribute.removeOnChange(handler) },
    resetInitialValue: function(value) { this._attribute.resetValue(value) },
    setRequiredLevel: function(requiredLevel) { this._attribute.set_requiredLevelValue(requiredLevel) },
    setSubmitMode: function(mode) { this._attribute.set_submitModeValue(mode) },
    setValue: function(value) { this._attribute.set_value(value) }
};
Mscrm.BooleanOptionSetUIControlWrapper = function($p0) {
    Mscrm.BooleanOptionSetUIControlWrapper.initializeBase(this, [$p0])
};
Mscrm.BooleanOptionSetUIControlWrapper.prototype = { getFormat: function() { return "dropdown" } };
Mscrm.BooleanUIControlWrapper = function($p0) { Mscrm.BooleanUIControlWrapper.initializeBase(this, [$p0]) };
Mscrm.BooleanUIControlWrapper.prototype = {
    getFormat: function() {
        return Sys.UI.DomElement.containsCssClass(this.$0_3.get_innerControl().get_element(), "ms-crm-CheckBox")
            ? "checkbox"
            : "radiobutton"
    }
};
Mscrm.LookupAttributeWrapper = function($p0) {
    Mscrm.LookupAttributeWrapper.initializeBase(this);
    this._attribute = $p0;
    this.controls = new Xrm.XrmControls;
    var $v_0 = $p0.$2_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.DataControlFactory.createInstance($p1_0);
        $v_1 && $$t_5.controls.add($v_1)
    })
};
Mscrm.LookupAttributeWrapper.prototype = {
    _attribute: null,
    getIsPartyList: function() { return this._attribute.$s_2 === 2 },
    setLookupTypes: function(lookupTypeNames, hideTypes) { return false },
    getLookupTypes: function() { return null },
    addOnChange: function(handler, system) { this._attribute.addOnChange(handler, !!system) },
    fireOnChange: function() { this._attribute.fireOnChange() },
    getAttributeType: function() { return this._attribute.get_metadataType() },
    getFormat: function() { return this._attribute.$F_1 },
    getIsDirty: function() { return this._attribute.get_isDirty() },
    getIsValid: function() { return this._attribute.getIsValid() },
    getKey: function() { return this._attribute.getKey() },
    getName: function() { return this._attribute.$4_1 },
    getParent: function() { return new Mscrm.FormDataEntityWrapper(this._attribute.$E_1) },
    getRequiredLevel: function() { return this._attribute.$X_1 },
    getSubmitMode: function() { return this._attribute.get_submitModeValue() },
    getUserPrivilege: function() { return this._attribute.getUserPrivilege() },
    getValue: function() { return this._attribute.get_value() },
    removeOnChange: function(handler) { this._attribute.removeOnChange(handler) },
    resetInitialValue: function(value) { this._attribute.resetValue(value) },
    setRequiredLevel: function(requiredLevel) { this._attribute.set_requiredLevelValue(requiredLevel) },
    setSubmitMode: function(mode) { this._attribute.set_submitModeValue(mode) },
    setValue: function(value) { this._attribute.set_value(value) }
};
Mscrm.DataControlFactory = function() {};
Mscrm.DataControlFactory.createInstance = function(control) {
    if (IsNull(control)) return null;
    if (Mscrm.InternalUtilities.Utilities
        .isRefreshForm() ||
        typeof control.get_controlType === "undefined") return Mscrm.XrmInlineControlFactory.createInstance(control);
    switch (control.$J_4) {
    case 3:
        return new Mscrm.LookupUIControlWrapper(control);
    case 5:
        return new Mscrm.SubGridUIControlWrapper(control);
    case 6:
        switch (control.get_innerControl().get_element().tagName) {
        case "IMG":
            return new Mscrm.WebResourceObjectUIControlWrapper(control);
        case "OBJECT":
            return new Mscrm.WebResourceDataUIControlWrapper(control);
        default:
            return new Mscrm.WebResourceObjectUIControlWrapper(control)
        }
    case 2:
        return new Mscrm.IFrameUIControlWrapper(control);
    case 4:
        var $v_0 = control.get_innerControl().get_attribute();
        if ($v_0 && $v_0.get_metadataType() === "boolean") return new Mscrm.BooleanOptionSetUIControlWrapper(control);
        else return new Mscrm.OptionSetUIControlWrapper(control);
    case 8:
    case 0:
        var $v_1 = control.get_innerControl().get_element();
        if (Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-CheckBox") ||
            Sys.UI.DomElement
            .containsCssClass($v_1, "ms-crm-RadioButton")) return new Mscrm.BooleanUIControlWrapper(control);
        if (Mscrm.IFormDataControl.isInstanceOfType(control.get_innerControl())) {
            var $v_2 = control.get_innerControl().get_attribute();
            if ($v_2.get_metadataType() === "datetime") return new Mscrm.DateTimeUIControlWrapper(control)
        }
        return new Mscrm.DataUIControlWrapper(control);
    default:
        return null
    }
};
Mscrm.DataUIControlWrapper = function($p0) {
    Mscrm.DataUIControlWrapper.initializeBase(this);
    this.$0_3 = $p0
};
Mscrm.DataUIControlWrapper.prototype = {
    $0_3: null,
    get_control: function() { return this.$0_3 },
    getAttribute: function() {
        var $v_0 = this.$0_3.get_innerControl();
        if (Mscrm.IFormDataControl.isInstanceOfType($v_0))
            return new Mscrm.FormDataAttributeWrapper($v_0.get_attribute());
        return null
    },
    getDisabled: function() {
        var $v_0 = this.$0_3.get_innerControl();
        if (!$v_0) return true;
        else return $v_0.get_disabled()
    },
    setDisabled: function(isDisabled) {
        var $v_0 = this.$0_3.get_innerControl();
        !IsNull($v_0) && $v_0.set_disabled(isDisabled)
    },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_3.$J_4) },
    getParent: function() { return this.$0_3.get_parent().getWrapper() },
    setFocus: function() { this.$0_3.setFocus() },
    getLabel: function() { return this.$0_3.get_label() },
    getName: function() { return this.$0_3.$K_3 },
    getVisible: function() { return this.$0_3.getVisible() },
    setLabel: function(label) { this.$0_3.set_label(label) },
    setVisible: function(visible) { this.$0_3.setVisible(visible) }
};
Mscrm.DateTimeAttributeWrapper = function($p0) {
    Mscrm.DateTimeAttributeWrapper.initializeBase(this);
    this._attribute = $p0;
    this.controls = new Xrm.XrmControls;
    var $v_0 = $p0.$2_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.DataControlFactory.createInstance($p1_0);
        $v_1 && $$t_5.controls.add($v_1)
    })
};
Mscrm.DateTimeAttributeWrapper.prototype = {
    _attribute: null,
    getUtcValue: function() {
        var $v_0 = this.getValue();
        return Mscrm.DateTimeUtility.getUtcValue($v_0)
    },
    setUtcValue: function(dateTime) {
        if (IsNull(dateTime)) {
            this.setValue(dateTime);
            return
        }
        var $v_0 = window.ORG_TIMEZONE_OFFSET * 6e4,
            $v_1 = dateTime.getTimezoneOffset() * 6e4,
            $v_2 = new Date(dateTime.getTime() + $v_1 + $v_0);
        this.setValue($v_2)
    },
    setMin: function(value) {
        this._attribute.$1l_2 = value;
        if (!IsNull(value)) this._attribute.$1g_2 = true;
        else this._attribute.$1g_2 = false
    },
    addOnChange: function(handler, system) { this._attribute.addOnChange(handler, !!system) },
    fireOnChange: function() { this._attribute.fireOnChange() },
    getAttributeType: function() { return this._attribute.get_metadataType() },
    getFormat: function() { return this._attribute.$F_1 },
    getIsDirty: function() { return this._attribute.get_isDirty() },
    getIsValid: function() { return this._attribute.getIsValid() },
    getKey: function() { return this._attribute.getKey() },
    getName: function() { return this._attribute.$4_1 },
    getParent: function() { return new Mscrm.FormDataEntityWrapper(this._attribute.$E_1) },
    getRequiredLevel: function() { return this._attribute.$X_1 },
    getSubmitMode: function() { return this._attribute.get_submitModeValue() },
    getUserPrivilege: function() { return this._attribute.getUserPrivilege() },
    getValue: function() { return this._attribute.get_value() },
    removeOnChange: function(handler) { this._attribute.removeOnChange(handler) },
    resetInitialValue: function(value) { this._attribute.resetValue(value) },
    setRequiredLevel: function(requiredLevel) { this._attribute.set_requiredLevelValue(requiredLevel) },
    setSubmitMode: function(mode) { this._attribute.set_submitModeValue(mode) },
    setValue: function(value) { this._attribute.set_value(value) }
};
Mscrm.EntityAttributeFactory = function() {};
Mscrm.EntityAttributeFactory.createInstance = function(dataAttribute) {
    switch (Mscrm.EntityAttributeFactory.getAttributeType(dataAttribute)) {
    case "boolean":
        return new Mscrm.BooleanAttributeWrapper(dataAttribute);
    case "datetime":
        return new Mscrm.DateTimeAttributeWrapper(dataAttribute);
    case "lookup":
        return new Mscrm.LookupAttributeWrapper(dataAttribute);
    case "optionset":
        return new Mscrm.OptionSetAttributeWrapper(dataAttribute);
    case "memo":
    case "string":
        return new Mscrm.TextAttributeWrapper(dataAttribute);
    case "decimal":
    case "double":
    case "integer":
    case "money":
        return new Mscrm.NumberAttributeWrapper(dataAttribute);
    case "uniqueidentifier":
    default:
        return null
    }
};
Mscrm.EntityAttributeFactory.getAttributeType = function(dataAttribute) {
    var $v_0 = dataAttribute.$2_1.get()[0];
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        if (!IsNull($v_0.get_dataContext()) &&
            !IsNull($v_0.get_dataContext().get_attribute()) &&
            !IsNull($v_0.get_dataContext().get_attribute().get_attributeType())) {
            var $v_1 = $v_0.get_dataContext().get_attribute().get_attributeType();
            $v_1 = Mscrm.EntityAttributeFactory.$3f($v_1, dataAttribute);
            if (!isNullOrEmptyString($v_1)) return $v_1
        }
    return dataAttribute.get_metadataType()
};
Mscrm.EntityAttributeFactory.$3f = function($p0, $p1) {
    switch ($p0) {
    case "float":
        return "double";
    case "int":
        switch ($p1.$F_1) {
        case "language":
        case "timezone":
            return "optionset";
        default:
            return "integer"
        }
    case "decimal":
    case "money":
        return $p0;
    default:
        return ""
    }
};
Mscrm.FormDataAttributeWrapper = function(formDataAttribute) {
    Mscrm.FormDataAttributeWrapper.initializeBase(this);
    this._attribute = formDataAttribute;
    this.controls = new Xrm.XrmControls;
    var $v_0 = formDataAttribute.$2_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.DataControlFactory.createInstance($p1_0);
        $v_1 && $$t_5.controls.add($v_1)
    })
};
Mscrm.FormDataAttributeWrapper.prototype = {
    _attribute: null,
    addOnChange: function(handler, system) { this._attribute.addOnChange(handler, !!system) },
    fireOnChange: function() { this._attribute.fireOnChange() },
    getAttributeType: function() {
        var $v_0 = this._attribute.$2_1.get()[0];
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
            if (!IsNull($v_0.get_dataContext()) &&
                !IsNull($v_0.get_dataContext().get_attribute()) &&
                !IsNull($v_0.get_dataContext().get_attribute().get_attributeType())) {
                var $v_1 = $v_0.get_dataContext().get_attribute().get_attributeType();
                $v_1 = this.$3f_1($v_1);
                if (!isNullOrEmptyString($v_1)) return $v_1
            }
        return this._attribute.get_metadataType()
    },
    getFormat: function() { return this._attribute.$F_1 },
    getIsDirty: function() { return this._attribute.get_isDirty() },
    getIsValid: function() { return this._attribute.getIsValid() },
    getName: function() { return this._attribute.$4_1 },
    getKey: function() { return this._attribute.getKey() },
    getParent: function() { return null },
    getRequiredLevel: function() { return this._attribute.$X_1 },
    getSubmitMode: function() { return this._attribute.get_submitModeValue() },
    getUserPrivilege: function() { return new Xrm.FormDataAttributePrivilege(this._attribute.$n_1) },
    getValue: function() {
        if (this._attribute.get_metadataType() === "boolean")
            switch (this._attribute.get_value()) {
            case 1:
                return true;
            case 0:
                return false
            }
        return this._attribute.get_value()
    },
    removeOnChange: function(handler) { this._attribute.removeOnChange(handler) },
    resetInitialValue: function(value) { this._attribute.resetValue(value) },
    setRequiredLevel: function(requiredLevel) { this._attribute.set_requiredLevelValue(requiredLevel) },
    setSubmitMode: function(mode) { this._attribute.set_submitModeValue(mode) },
    setValue: function(value) { this._attribute.set_value(value) },
    $3f_1: function($p0) {
        switch ($p0) {
        case "float":
            return "double";
        case "int":
            switch (this.getFormat()) {
            case "language":
            case "timezone":
                return "optionset";
            default:
                return "integer"
            }
        case "decimal":
        case "money":
            return $p0;
        default:
            return ""
        }
    }
};
Mscrm.FormDataEntityWrapper = function(dataEntity) {
    Mscrm.FormDataEntityWrapper.initializeBase(this);
    this.$S_1 = dataEntity;
    this.attributes = new Xrm.XrmEntityAttributes;
    var $v_0 = dataEntity.$a_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = $p1_0.getWrapper();
        $v_1 && $$t_5.attributes.add($v_1)
    })
};
Mscrm.FormDataEntityWrapper.prototype = {
    $S_1: null,
    dispose: function() { this.$S_1.dispose() },
    addOnSave: function(handler, system) { this.$S_1.addOnSave(handler, system) },
    getDataXml: function() {
        var $v_0 = this.$S_1.get_isNew() ? 0 : 1;
        return this.$S_1.serialize($v_0)
    },
    getEntityName: function() { return this.$S_1.$t_1 },
    getFormState: function() { return this.$S_1.$21_1 },
    getId: function() { return this.$S_1.$1H_1 },
    setRecordId: function(createRecordId) {},
    getIsDirty: function() { return this.$S_1.get_isDirty() },
    getPrimaryAttributeValue: function() { return this.$S_1.$2n_1 },
    isInHierarchy: function() { return this.$S_1.isInHierarchy() },
    removeOnSave: function(handler) { this.$S_1.removeOnSave(handler) },
    save: function(action) { this.$S_1.save(action) }
};
Mscrm.FormDataManagerWrapper = function(formData) {
    Mscrm.FormDataManagerWrapper.initializeBase(this);
    this.$U_1 = formData;
    this.entity = formData.getEntity()
};
Mscrm.FormDataManagerWrapper.prototype = {
    $U_1: null,
    getEntityById: function(id) { return this.$U_1.getEntityById(id) },
    addEntity: function(id, entityWrapper) { this.$U_1.addEntity(id, entityWrapper) },
    addOnLoad: function(handler) { this.$U_1.addOnLoad(handler) },
    removeEntity: function(id) { this.$U_1.removeEntity(id) },
    removeOnLoad: function(handler) { this.$U_1.removeOnLoad(handler) },
    invokeDataOnLoadHandlers: function(loadState) { this.$U_1.invokeDataOnLoadHandlers(loadState) },
    getIsValid: function() { return this.$U_1.getIsValid() },
    refresh: function(save) { return this.$U_1.refresh(save) },
    refreshAppointment: function(appointmentId) { return this.$U_1.refreshAppointment(appointmentId) },
    save: function(saveOptions) { return this.$U_1.save(false, saveOptions) },
    setFormDirty: function(isDirty) { this.$U_1.setFormDirty(isDirty) },
    blockAutoSave: function(autoSave) { this.$U_1.blockAutoSave(autoSave) }
};
Mscrm.FormSelectorWrapper = function($p0) {
    Mscrm.FormSelectorWrapper.initializeBase(this);
    this.$3E_1 = $p0;
    this.items = $p0.$f_1
};
Mscrm.FormSelectorWrapper.prototype = {
    $3E_1: null,
    getCurrentItem: function() { return this.$3E_1.get_currentForm() }
};
Mscrm.FormUIControlWrapper = function(formUIControl) {
    Mscrm.FormUIControlWrapper.initializeBase(this);
    this.$k_2 = formUIControl
};
Mscrm.FormUIControlWrapper.prototype = {
    $k_2: null,
    clearNotifications: function() { return false },
    clearNotification: function(uniqueId) { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$k_2.$J_4) },
    getParent: function() { return new Mscrm.SectionWrapper(this.$k_2.get_parent()) },
    setFocus: function() { this.$k_2.setFocus() },
    getLabel: function() { return this.$k_2.get_label() },
    getName: function() { return this.$k_2.$K_3 },
    getVisible: function() { return this.$k_2.getVisible() },
    setLabel: function(label) { this.$k_2.set_label(label) },
    setVisible: function(visible) { this.$k_2.setVisible(visible) }
};
Mscrm.FormSelectorItemWrapper = function(formUIRuleForm) {
    Mscrm.FormSelectorItemWrapper.initializeBase(this);
    this.$23_1 = formUIRuleForm
};
Mscrm.FormSelectorItemWrapper.prototype = {
    $23_1: null,
    getId: function() { return this.$23_1.getId() },
    getLabel: function() { return this.$23_1.getLabel() },
    navigate: function() { this.$23_1.navigate() }
};
Mscrm.FormUIElementWrapper = function(control) { this._control = control };
Mscrm.FormUIElementWrapper.prototype = {
    _control: null,
    getLabel: function() { return this._control.get_label() },
    getName: function() { return this._control.$K_3 },
    getParent: function() { return this._control.get_parent().getWrapper() },
    getVisible: function() { return this._control.getVisible() },
    setNotification: function(message) { return false },
    clearNotification: function() { return false },
    setLabel: function(labelText) { this._control.set_label(labelText) },
    setVisible: function(isVisible) { this._control.setVisible(isVisible) }
};
Mscrm.FormUIWrapper = function(formUIManager) {
    Mscrm.FormUIWrapper.initializeBase(this);
    this.$e_1 = formUIManager;
    this.formSelector = formUIManager.formSelector;
    this.navigation = formUIManager.navigation;
    this.controls = new Xrm.XrmControls;
    this.tabs = new Xrm.XrmTabs;
    this.controls = formUIManager.controls;
    this.tabs = formUIManager.tabs
};
Mscrm.FormUIWrapper.prototype = {
    $e_1: null,
    clearFormNotification: function(uniqueId) { return this.$e_1.clearFormNotification(uniqueId) },
    close: function() { this.$e_1.close() },
    getCurrentControl: function() { return this.$e_1.getCurrentControl() },
    getFormType: function() { return this.$e_1.getFormType() },
    getViewPortHeight: function() { return this.$e_1.getViewPortHeight() },
    getViewPortWidth: function() { return this.$e_1.getViewPortWidth() },
    refreshRibbon: function() { this.$e_1.refreshRibbon() },
    setFormNotification: function(message, notificationLevel, uniqueId) {
        return this.$e_1.setFormNotification(message, notificationLevel, uniqueId)
    },
    setFormHtmlNotification: function(htmlText, notificationLevel, uniqueId) {
        return this.$e_1.setFormHtmlNotification(htmlText, notificationLevel, uniqueId)
    }
};
Mscrm.IFrameUIControlWrapper = function($p0) {
    Mscrm.IFrameUIControlWrapper.initializeBase(this);
    this.$0_4 = $p0;
    this.$3_4 = $p0.get_innerControl()
};
Mscrm.IFrameUIControlWrapper.prototype = {
    $3_4: null,
    $0_4: null,
    add_readyStateComplete: function(value) { this.$3_4.add_readyStateComplete(value) },
    remove_readyStateComplete: function(value) { this.$3_4.remove_readyStateComplete(value) },
    getInitialUrl: function() { return this.$3_4.getUrl() },
    getObject: function() { return this.$3_4.get_element() },
    getSrc: function() { return this.$3_4.getSrc() },
    setSrc: function(source) { this.$3_4.setSrc(source) },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_4.$J_4) },
    getParent: function() { return this.$0_4.get_parent().getWrapper() },
    setFocus: function() { this.$0_4.setFocus() },
    getLabel: function() { return this.$0_4.get_label() },
    getName: function() { return this.$0_4.$K_3 },
    getVisible: function() { return this.$0_4.getVisible() },
    setLabel: function(label) { this.$0_4.set_label(label) },
    setVisible: function(visible) { this.$0_4.setVisible(visible) }
};
Mscrm.LookupUIControlWrapper = function($p0) {
    this.$$d_$4o_4 = Function.createDelegate(this, this.$4o_4);
    Mscrm.LookupUIControlWrapper.initializeBase(this);
    this.$0_4 = $p0;
    this.$3_4 = $p0.get_innerControl();
    this.$B_4 = new Mscrm.ClientApiEventHandlerList(new Sys.EventHandlerList);
    this.$3_4.get_$6_4().add_setAdditionalParams(this.$$d_$4o_4)
};
Mscrm.LookupUIControlWrapper.prototype = {
    $3_4: null,
    $0_4: null,
    $B_4: null,
    dispose: function() {
        this.$3_4.get_$6_4().remove_setAdditionalParams(this.$$d_$4o_4);
        this.$B_4.clearAllHandler()
    },
    addCustomView: function(viewId, entityLogicalName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        this.$3_4.addCustomView(viewId, entityLogicalName, viewDisplayName, fetchXml, layoutXml, isDefault)
    },
    addCustomFilter: function(fetchXmlFilter, entityType) { this.$3_4.addCustomFilter(fetchXmlFilter, entityType) },
    allowUserToDisableRelationshipFilter: function(allowFilterOff) {
        this.$3_4.allowUserToDisableRelationshipFilter(allowFilterOff)
    },
    getDefaultView: function() { return this.$3_4.getDefaultView() },
    setDefaultView: function(defaultViewId) { this.$3_4.setDefaultView(defaultViewId) },
    $4o_4: function($p0, $p1) {
        var $v_0 = this.$B_4.getHandler("PreSearch");
        !IsNull($v_0) && $v_0($p0, $p1)
    },
    addPreSearch: function(handler) { this.$B_4.addHandler("PreSearch", handler, false) },
    removePreSearch: function(handler) { this.$B_4.removeHandler("PreSearch", handler) },
    getAttribute: function() {
        var $v_0 = this.$0_4.get_innerControl();
        if (Mscrm.IFormDataControl.isInstanceOfType($v_0))
            return new Mscrm.LookupAttributeWrapper($v_0.get_attribute());
        return null
    },
    getDisabled: function() {
        var $v_0 = this.$0_4.get_innerControl();
        if (!$v_0) return true;
        else return $v_0.get_disabled()
    },
    setDisabled: function(isDisabled) {
        var $v_0 = this.$0_4.get_innerControl();
        !IsNull($v_0) && $v_0.set_disabled(isDisabled)
    },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_4.$J_4) },
    getParent: function() { return this.$0_4.get_parent().getWrapper() },
    setFocus: function() { this.$0_4.setFocus() },
    getLabel: function() { return this.$0_4.get_label() },
    getName: function() { return this.$0_4.$K_3 },
    getVisible: function() { return this.$0_4.getVisible() },
    setLabel: function(label) { this.$0_4.set_label(label) },
    setVisible: function(visible) { this.$0_4.setVisible(visible) },
    setParameter: function(name, value) { return }
};
Mscrm.OptionSetAttributeWrapper = function($p0) {
    Mscrm.OptionSetAttributeWrapper.initializeBase(this);
    this._attribute = $p0;
    this.controls = new Xrm.XrmControls;
    var $v_0 = $p0.$2_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.DataControlFactory.createInstance($p1_0);
        $v_1 && $$t_5.controls.add($v_1)
    })
};
Mscrm.OptionSetAttributeWrapper.prototype = {
    _attribute: null,
    getInitialValue: function() { return this._attribute.$Q_1 },
    getOption: function(value) { return this._attribute.getOption(value) },
    getOptions: function() { return this._attribute.get_options() },
    getSelectedOption: function() { return this._attribute.get_selectedOption() },
    getText: function() { return this._attribute.get_formattedValue() },
    getInvariantText: function() { return this._attribute.$1f_2 },
    addOption: function(optionSetItem, placement) { this._attribute.addOption(optionSetItem, placement) },
    removeOption: function(value) { this._attribute.removeOption(value) },
    clearOptions: function() { this._attribute.clearOptions() },
    addOnChange: function(handler, system) { this._attribute.addOnChange(handler, !!system) },
    fireOnChange: function() { this._attribute.fireOnChange() },
    getAttributeType: function() { return this._attribute.get_metadataType() },
    getFormat: function() { return this._attribute.$F_1 },
    getIsDirty: function() { return this._attribute.get_isDirty() },
    getIsValid: function() { return this._attribute.getIsValid() },
    getKey: function() { return this._attribute.getKey() },
    getName: function() { return this._attribute.$4_1 },
    getParent: function() { return new Mscrm.FormDataEntityWrapper(this._attribute.$E_1) },
    getRequiredLevel: function() { return this._attribute.$X_1 },
    getSubmitMode: function() { return this._attribute.get_submitModeValue() },
    getUserPrivilege: function() { return this._attribute.getUserPrivilege() },
    getValue: function() {
        if (this._attribute.get_metadataType() === "boolean")
            switch (this._attribute.get_value()) {
            case 1:
                return true;
            case 0:
                return false
            }
        return this._attribute.get_value()
    },
    removeOnChange: function(handler) { this._attribute.removeOnChange(handler) },
    resetInitialValue: function(value) { this._attribute.resetValue(value) },
    setRequiredLevel: function(requiredLevel) { this._attribute.set_requiredLevelValue(requiredLevel) },
    setSubmitMode: function(mode) { this._attribute.set_submitModeValue(mode) },
    setValue: function(value) { this._attribute.set_value(value) }
};
Mscrm.OptionSetUIControlWrapper = function($p0) {
    Mscrm.OptionSetUIControlWrapper.initializeBase(this);
    this.$0_4 = $p0;
    this.$3_4 = $p0.get_innerControl()
};
Mscrm.OptionSetUIControlWrapper.prototype = {
    $3_4: null,
    $0_4: null,
    addOption: function(optionSetItem, placement) { this.$3_4.addOption(optionSetItem, placement) },
    removeOption: function(value) { this.$3_4.removeOption(value) },
    clearOptions: function() { this.$3_4.clearOptions() },
    getOptions: function() { throw Error.notImplemented() },
    getAttribute: function() {
        var $v_0 = this.$0_4.get_innerControl();
        if (Mscrm.IFormDataControl.isInstanceOfType($v_0))
            return new Mscrm.OptionSetAttributeWrapper($v_0.get_attribute());
        return null
    },
    getDisabled: function() {
        var $v_0 = this.$0_4.get_innerControl();
        if (!$v_0) return true;
        else return $v_0.get_disabled()
    },
    setDisabled: function(isDisabled) {
        var $v_0 = this.$0_4.get_innerControl();
        !IsNull($v_0) && $v_0.set_disabled(isDisabled)
    },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_4.$J_4) },
    getParent: function() { return this.$0_4.get_parent().getWrapper() },
    setFocus: function() { this.$0_4.setFocus() },
    getLabel: function() { return this.$0_4.get_label() },
    getName: function() { return this.$0_4.$K_3 },
    getVisible: function() { return this.$0_4.getVisible() },
    setLabel: function(label) { this.$0_4.set_label(label) },
    setVisible: function(visible) { this.$0_4.setVisible(visible) }
};
Mscrm.DateTimeUIControlWrapper = function($p0) {
    Mscrm.DateTimeUIControlWrapper.initializeBase(this);
    this.$0_4 = $p0;
    this.$1u_4 = $p0.get_innerControl().get_$6_4()
};
Mscrm.DateTimeUIControlWrapper.prototype = {
    $1u_4: null,
    $0_4: null,
    getShowTime: function() { return this.$1u_4.get_showTime() },
    setShowTime: function(showTime) { this.$1u_4.set_showTime(showTime) },
    getIsAllDay: function() { return this.$1u_4.get_allDayDisplay() },
    setIsAllDay: function(isAllDay) { this.$1u_4.set_allDayDisplay(isAllDay) },
    getAttribute: function() {
        var $v_0 = this.$0_4.get_innerControl();
        if (Mscrm.IFormDataControl.isInstanceOfType($v_0))
            return new Mscrm.DateTimeAttributeWrapper($v_0.get_attribute());
        return null
    },
    getDisabled: function() {
        var $v_0 = this.$0_4.get_innerControl();
        if (!$v_0) return true;
        else return $v_0.get_disabled()
    },
    setDisabled: function(isDisabled) {
        var $v_0 = this.$0_4.get_innerControl();
        !IsNull($v_0) && $v_0.set_disabled(isDisabled)
    },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_4.$J_4) },
    getParent: function() { return this.$0_4.get_parent().getWrapper() },
    setFocus: function() { this.$0_4.setFocus() },
    getLabel: function() { return this.$0_4.get_label() },
    getName: function() { return this.$0_4.$K_3 },
    getVisible: function() { return this.$0_4.getVisible() },
    setLabel: function(label) { this.$0_4.set_label(label) },
    setVisible: function(visible) { this.$0_4.setVisible(visible) }
};
Mscrm.NavigationBarWrapper = function($p0) {
    Mscrm.NavigationBarWrapper.initializeBase(this);
    this.items = $p0.$f_1
};
Mscrm.NavigationItemWrapper = function(formUINavigationBarItem) {
    Mscrm.NavigationItemWrapper.initializeBase(this);
    this.$18_1 = formUINavigationBarItem
};
Mscrm.NavigationItemWrapper.prototype = {
    $18_1: null,
    getId: function() { return this.$18_1.getId() },
    getLabel: function() { return this.$18_1.getLabel() },
    getVisible: function() { return this.$18_1.getVisible() },
    setFocus: function() { this.$18_1.setFocus() },
    setLabel: function(label) { this.$18_1.setLabel(label) },
    setVisible: function(visible) { this.$18_1.setVisible(visible) }
};
Mscrm.NumberAttributeWrapper = function($p0) {
    Mscrm.NumberAttributeWrapper.initializeBase(this);
    this._attribute = $p0;
    this.controls = new Xrm.XrmControls;
    var $v_0 = $p0.$2_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.DataControlFactory.createInstance($p1_0);
        $v_1 && $$t_5.controls.add($v_1)
    })
};
Mscrm.NumberAttributeWrapper.prototype = {
    _attribute: null,
    getMax: function() { return this._attribute.$l_2 },
    getMin: function() { return this._attribute.$m_2 },
    setCurrencySymbol: function(symbol) {},
    getPrecision: function() { return this._attribute.$R_2 },
    setPrecision: function(precision) { this._attribute.set_precision(precision) },
    addOnChange: function(handler, system) { this._attribute.addOnChange(handler, !!system) },
    fireOnChange: function() { this._attribute.fireOnChange() },
    getAttributeType: function() {
        var $v_0 = this._attribute.$2_1.get()[0];
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
            if (!IsNull($v_0.get_dataContext()) &&
                !IsNull($v_0.get_dataContext().get_attribute()) &&
                !IsNull($v_0.get_dataContext().get_attribute().get_attributeType())) {
                var $v_1 = $v_0.get_dataContext().get_attribute().get_attributeType();
                $v_1 = this.$3f_2($v_1);
                if (!isNullOrEmptyString($v_1)) return $v_1
            }
        return this._attribute.get_metadataType()
    },
    getFormat: function() { return this._attribute.$F_1 },
    getIsDirty: function() { return this._attribute.get_isDirty() },
    getIsValid: function() { return this._attribute.getIsValid() },
    getKey: function() { return this._attribute.getKey() },
    getName: function() { return this._attribute.$4_1 },
    getParent: function() { return new Mscrm.FormDataEntityWrapper(this._attribute.$E_1) },
    getRequiredLevel: function() { return this._attribute.$X_1 },
    getSubmitMode: function() { return this._attribute.get_submitModeValue() },
    getUserPrivilege: function() { return this._attribute.getUserPrivilege() },
    getValue: function() { return this._attribute.get_value() },
    removeOnChange: function(handler) { this._attribute.removeOnChange(handler) },
    resetInitialValue: function(value) { this._attribute.resetValue(value) },
    setRequiredLevel: function(requiredLevel) { this._attribute.set_requiredLevelValue(requiredLevel) },
    setSubmitMode: function(mode) { this._attribute.set_submitModeValue(mode) },
    setValue: function(value) { this._attribute.set_value(value) },
    $3f_2: function($p0) {
        switch ($p0) {
        case "float":
            return "double";
        case "int":
            switch (this.getFormat()) {
            case "language":
            case "timezone":
                return "optionset";
            default:
                return "integer"
            }
        case "decimal":
        case "money":
            return $p0;
        default:
            return ""
        }
    }
};
Mscrm.SectionWrapper = function($p0) {
    Mscrm.SectionWrapper.initializeBase(this);
    this.$0_2 = $p0;
    this.controls = new Xrm.XrmControls;
    this.controls = $p0.$2_4
};
Mscrm.SectionWrapper.prototype = {
    $0_2: null,
    getParent: function() { return new Mscrm.TabWrapper(this.$0_2.get_parent()) },
    getLabel: function() { return this.$0_2.get_label() },
    getName: function() { return this.$0_2.$K_3 },
    getVisible: function() { return this.$0_2.getVisible() },
    setLabel: function(label) { this.$0_2.set_label(label) },
    setVisible: function(visible) { this.$0_2.setVisible(visible) }
};
Mscrm.SubGridUIControlWrapper = function($p0) {
    Mscrm.SubGridUIControlWrapper.initializeBase(this);
    this.$0_3 = $p0
};
Mscrm.SubGridUIControlWrapper.prototype = {
    $0_3: null,
    exportToExcel: function() { this.$0_3.get_innerControl().exportToExcel() },
    refresh: function() { this.$0_3.get_innerControl().refresh() },
    getRelationshipName: function() { return this.$0_3.get_innerControl().GetParameter("relName") },
    getRelationshipAttributeName: function() { return null },
    getRelationshipRoleOrdinal: function() {
        var $v_0 = this.$0_3.get_innerControl().GetParameter("roleOrd");
        if (isNullOrEmptyString($v_0)) return -1;
        var $v_1 = Number.parseInvariant($v_0);
        return isNaN($v_1) ? -1 : $v_1
    },
    getRelationshipType: function() { throw Error.create("NotImplementedException") },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_3.$J_4) },
    getParent: function() { return this.$0_3.get_parent().getWrapper() },
    setFocus: function() { this.$0_3.setFocus() },
    getLabel: function() { return this.$0_3.get_label() },
    getName: function() { return this.$0_3.$K_3 },
    getVisible: function() { return this.$0_3.getVisible() },
    setLabel: function(label) { this.$0_3.set_label(label) },
    setVisible: function(visible) { this.$0_3.setVisible(visible) },
    openAssociatedGrid: function() {},
    removeOnLoad: function(handler) {},
    getGrid: function() { return null },
    getChart: function() { return null },
    getRelationship: function() { return null },
    getViewSelector: function() { return null },
    addRecord: function() {},
    addOnLoad: function(handler) {},
    getEntityName: function() { return null }
};
Mscrm.TabWrapper = function($p0) {
    this.$$d_$6X_2 = Function.createDelegate(this, this.$6X_2);
    Mscrm.TabWrapper.initializeBase(this);
    this.$0_2 = $p0;
    this.sections = new Xrm.XrmTabSections;
    this.sections = $p0.$2p_4;
    this.add_tabStateChange(this.$$d_$6X_2)
};
Mscrm.TabWrapper.prototype = {
    $0_2: null,
    $B_2: null,
    add_tabStateChange: function(value) { this.$0_2.add_tabStateChange(value) },
    remove_tabStateChange: function(value) { this.$0_2.remove_tabStateChange(value) },
    get_$H_2: function() {
        if (!this.$B_2) this.$B_2 = new Mscrm.ClientApiEventHandlerList(new Sys.EventHandlerList);
        return this.$B_2
    },
    dispose: function() {
        this.$B_2.clearAllHandler();
        this.remove_tabStateChange(this.$$d_$6X_2)
    },
    addTabStateChange: function(handler) { this.get_$H_2().addHandler("TabStateChange", handler, false) },
    setIsSubGrid: function(issubgrid) {},
    getDisplayState: function() { return this.$0_2.get_displayState() },
    getParent: function() { return Xrm.Page.ui },
    removeTabStateChange: function(handler) { this.get_$H_2().removeHandler("TabStateChange", handler) },
    setDisplayState: function(state) { this.$0_2.set_displayState(state) },
    setFocus: function() { this.$0_2.setFocus() },
    getLabel: function() { return this.$0_2.get_label() },
    getName: function() { return this.$0_2.$K_3 },
    getVisible: function() { return this.$0_2.getVisible() },
    setLabel: function(label) { this.$0_2.set_label(label) },
    setVisible: function(visible) { this.$0_2.setVisible(visible) },
    $6X_2: function($p0, $p1) {
        var $v_0 = this.get_$H_2().getHandler("TabStateChange");
        !IsNull($v_0) && $v_0($p0, $p1)
    }
};
Mscrm.TextAttributeWrapper = function($p0) {
    Mscrm.TextAttributeWrapper.initializeBase(this);
    this._attribute = $p0;
    this.controls = new Xrm.XrmControls;
    var $v_0 = $p0.$2_1, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.DataControlFactory.createInstance($p1_0);
        $v_1 && $$t_5.controls.add($v_1)
    })
};
Mscrm.TextAttributeWrapper.prototype = {
    _attribute: null,
    getMaxLength: function() { return this._attribute.$g_2 },
    addOnChange: function(handler, system) { this._attribute.addOnChange(handler, !!system) },
    fireOnChange: function() { this._attribute.fireOnChange() },
    getAttributeType: function() { return this._attribute.get_metadataType() },
    getFormat: function() { return this._attribute.$F_1 },
    getIsDirty: function() { return this._attribute.get_isDirty() },
    getIsValid: function() { return this._attribute.getIsValid() },
    getKey: function() { return this._attribute.getKey() },
    getName: function() { return this._attribute.$4_1 },
    getParent: function() { return new Mscrm.FormDataEntityWrapper(this._attribute.$E_1) },
    getRequiredLevel: function() { return this._attribute.$X_1 },
    getSubmitMode: function() { return this._attribute.get_submitModeValue() },
    getUserPrivilege: function() { return this._attribute.getUserPrivilege() },
    getValue: function() { return this._attribute.get_value() },
    removeOnChange: function(handler) { this._attribute.removeOnChange(handler) },
    resetInitialValue: function(value) { this._attribute.resetValue(value) },
    setRequiredLevel: function(requiredLevel) { this._attribute.set_requiredLevelValue(requiredLevel) },
    setSubmitMode: function(mode) { this._attribute.set_submitModeValue(mode) },
    setValue: function(value) { this._attribute.set_value(value) }
};
Mscrm.WebResourceDataUIControlWrapper = function($p0) {
    Mscrm.WebResourceDataUIControlWrapper.initializeBase(this);
    this.$0_4 = $p0
};
Mscrm.WebResourceDataUIControlWrapper.prototype = {
    $0_4: null,
    getData: function() { return this.$0_4.get_innerControl().getData() },
    setData: function(data) { this.$0_4.get_innerControl().setData(data) },
    getObject: function() {
        return "get_webResourceContainer" in this.$0_4.get_innerControl()
            ? this.$0_4.get_innerControl().get_webResourceContainer()
            : this.$0_4.get_innerControl().get_element()
    },
    getSrc: function() { return this.$0_4.get_innerControl().getSrc() },
    setSrc: function(source) { this.$0_4.get_innerControl().setSrc(source) },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_4.$J_4) },
    getParent: function() { return this.$0_4.get_parent().getWrapper() },
    setFocus: function() { this.$0_4.setFocus() },
    getLabel: function() { return this.$0_4.get_label() },
    getName: function() { return this.$0_4.$K_3 },
    getVisible: function() { return this.$0_4.getVisible() },
    setLabel: function(label) { this.$0_4.set_label(label) },
    setVisible: function(visible) { this.$0_4.setVisible(visible) }
};
Mscrm.WebResourceObjectUIControlWrapper = function($p0) {
    Mscrm.WebResourceObjectUIControlWrapper.initializeBase(this);
    this.$0_3 = $p0
};
Mscrm.WebResourceObjectUIControlWrapper.prototype = {
    $0_3: null,
    getObject: function() {
        return "get_webResourceContainer" in this.$0_3.get_innerControl()
            ? this.$0_3.get_innerControl().get_webResourceContainer()
            : this.$0_3.get_innerControl().get_element()
    },
    getSrc: function() { return this.$0_3.get_innerControl().getSrc() },
    setSrc: function(source) { this.$0_3.get_innerControl().setSrc(source) },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return Mscrm.ControlTypeConverter.$x(this.$0_3.$J_4) },
    getParent: function() { return this.$0_3.get_parent().getWrapper() },
    setFocus: function() { this.$0_3.setFocus() },
    getLabel: function() { return this.$0_3.get_label() },
    getName: function() { return this.$0_3.$K_3 },
    getVisible: function() { return this.$0_3.getVisible() },
    setLabel: function(label) { this.$0_3.set_label(label) },
    setVisible: function(visible) { this.$0_3.setVisible(visible) }
};
Mscrm.DataSlug = function(element) {
    this.$$d_$5e_3 = Function.createDelegate(this, this.$5e_3);
    this.$$d_$5y_3 = Function.createDelegate(this, this.$5y_3);
    this.$$d_$5f_3 = Function.createDelegate(this, this.$5f_3);
    this.$$d_$5d_3 = Function.createDelegate(this, this.$5d_3);
    this.$$d_$5m_3 = Function.createDelegate(this, this.$5m_3);
    this.$$d_$5n_3 = Function.createDelegate(this, this.$5n_3);
    this.$13_3 = -1;
    this.$14_3 = -1;
    Mscrm.DataSlug.initializeBase(this, [element])
};
Mscrm.DataSlug.prototype = {
    $5_3: null,
    $A_3: null,
    $b_3: true,
    $M_3: false,
    $1V_3: null,
    $h_3: null,
    $2h_3: false,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = this.get_element();
        if (!this.$2h_3) {
            $addHandler($v_0, "keyup", this.$$d_$5n_3);
            $addHandler($v_0, "keydown", this.$$d_$5m_3)
        }
        $addHandler($v_0, "click", this.$$d_$5d_3);
        $addHandler($v_0, "focus", this.$$d_$5f_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $clearHandlers(this.get_element());
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    add_dataSlugDelete: function(value) { this.get_events().addHandler("OnDeleteDataSlugEvent", value) },
    remove_dataSlugDelete: function(value) { this.get_events().removeHandler("OnDeleteDataSlugEvent", value) },
    add_dataSlugChange: function(value) { this.get_events().addHandler("OnChangeDataSlugEvent", value) },
    remove_dataSlugChange: function(value) { this.get_events().removeHandler("OnChangeDataSlugEvent", value) },
    add_dataSlugFocus: function(value) { this.get_events().addHandler("OnFocusDataSlugEvent", value) },
    remove_dataSlugFocus: function(value) { this.get_events().removeHandler("OnFocusDataSlugEvent", value) },
    get_text: function() { return XUI.Html.GetText(this.$A_3) },
    set_text: function(value) {
        XUI.Html.SetText(this.$A_3, IsNull(value) ? "" : value);
        return value
    },
    get_value: function() { return this.$5_3 },
    set_value: function(value) {
        this.$5_3 = value;
        return value
    },
    get_isExternallySetKeyHandlers: function() { return this.$2h_3 },
    set_isExternallySetKeyHandlers: function(value) {
        this.$2h_3 = value;
        return value
    },
    GetXml: function() { return null },
    ParseXml: function() { return true },
    RaiseOnChange: function() { this.$v_3("OnChangeDataSlugEvent") },
    CreateInnerSlug: function(value, text, isMultipleSlug, isReadOnly, isDisabled, isInsertHyperlink) {
        this.$M_3 = isDisabled;
        isInsertHyperlink = !IsNull(isInsertHyperlink) ? isInsertHyperlink : false;
        if (!isMultipleSlug && !IsNull(this.$A_3) && this.$4O_3(this.$A_3, this.get_element())) {
            var $v_6 = this.get_element().removeChild(this.$A_3);
            try {
                this.get_element().focus()
            } catch ($$e_7) {
            }
            $v_6 = null
        }
        var $v_0 = 0,
            $v_1 = this.get_element().parentNode.parentNode,
            $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1),
            $v_3 = Mscrm.FormUtility.getSlugBehavior($v_2);
        if (IsNull($v_3)) {
            $v_2 = XUI.Html.DomUtils.GetChildElementAt($v_1, 1);
            if (!IsNull($v_2)) {
                $v_3 = Mscrm.FormUtility.getSlugBehavior($v_2);
                if (!IsNull($v_3)) $v_0 = $v_3.CalculateDataSlugTabIndex()
            }
        } else $v_0 = $v_3.CalculateDataSlugTabIndex();
        this.$A_3 = window.document.createElement("SPAN");
        this.$A_3.className = "ms-crm-DataSlug";
        this.$A_3.tabIndex = $v_0;
        var $v_4 = false, $v_5 = false;
        if (this.$13_3 >= 0 && this.$14_3 >= 0 && isMultipleSlug && !isInsertHyperlink) {
            if (!IsNull(this.$h_3) && this.$4O_3(this.$h_3, this.get_element())) {
                if (isNullOrEmptyString(XUI.Html.GetText(this.$h_3))) {
                    this.$h_3.parentNode.removeChild(this.$h_3);
                    this.$h_3 = null
                } else {
                    this.$h_3.setAttribute("value", value);
                    XUI.Html.SetText(this.$h_3, text)
                }
                $v_4 = true;
                $v_5 = true
            }
            if (!$v_4) {
                var $v_7 = null, $$t_J = this;
                XUI.Html.DomUtils.ForEachChild(this.get_element(),
                    function($p1_0) {
                        var $v_8 = $p1_0.nodeName;
                        if (IsNull($v_8) || $v_8.toUpperCase() === "#TEXT") return false;
                        var $v_9 = Sys.UI.DomElement.getBounds($p1_0);
                        if ($$t_J.$13_3 >= $v_9.x &&
                            $$t_J.$14_3 >= $v_9.y &&
                            $$t_J.$13_3 < $v_9.x + $v_9.width &&
                            $$t_J.$14_3 < $v_9.y + $v_9.height) {
                            $v_7 = $p1_0;
                            return true
                        }
                        return false
                    });
                if (!IsNull($v_7)) {
                    this.get_element().insertBefore(this.$A_3, $v_7);
                    $v_4 = true
                }
            }
            if (!$v_4) $v_4 = this.$6B_3(this.$A_3)
        }
        if (!$v_4)
            if (XUI.Html.DomUtils.HasChildElements(this.get_element())) {
                var $v_A = XUI.Html.DomUtils.GetLastChild(this.get_element());
                if (!IsNull($v_A.tagName) && $v_A.tagName.toUpperCase() === "P") $v_A.appendChild(this.$A_3);
                else this.get_element().appendChild(this.$A_3)
            } else this.get_element().appendChild(this.$A_3);
        if (!isDisabled) {
            this.get_element().setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), true);
            if (Sys.Browser
                .agent ===
                Sys.Browser.InternetExplorer &&
                Sys.Browser.version >= 9 &&
                !isMultipleSlug) this.$A_3.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), "inherit");
            else if (Sys.Browser
                .agent ===
                Sys.Browser.InternetExplorer ||
                !isMultipleSlug) this.$A_3.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), true);
            else this.$A_3.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), false);
            $addHandler(this.get_element(), "selectstart", this.$$d_$5y_3);
            $addHandler(this.get_element(), "controlselect", this.$$d_$5e_3)
        }
        this.$A_3.setAttribute("value", value);
        this.$A_3.style.display = Mscrm.Utilities.isFirefox() ? "inline-block" : "inline";
        XUI.Html.SetText(this.$A_3, IsNull(text) ? "" : text);
        this.$A_3.title = XUI.Html.GetText(this.$A_3);
        this.get_element().style.display = "block";
        if (Mscrm.Utilities.get_isLeftToRight()) this.get_element().style.paddingLeft = "2px";
        else this.get_element().style.paddingRight = "2px";
        this.get_element().style.overflowX = "hidden";
        this.get_element().style.minHeight = "15px";
        this.get_element().title = XUI.Html.GetText(this.get_element());
        !$v_5 &&
            !isInsertHyperlink &&
            Sys.Browser.agent === Sys.Browser.InternetExplorer &&
            Sys.Browser.version < 9 &&
            this.$A_3.parentNode.insertBefore(window.document.createTextNode(" "),
                XUI.Html.DomUtils.GetNextSibling(this.$A_3));
        this.$b_3 = isReadOnly
    },
    $49_3: function($p0) {
        var $v_0 = null;
        if (Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() < 9)
            if (document.selection.type
                .toUpperCase() !=
                "CONTROL") $v_0 = document.selection.createRange().parentElement();
            else $v_0 = document.selection.createRange().commonParentElement();
        else if (!IsNull(window.getSelection()))
            try {
                $v_0 = window.getSelection().getRangeAt(0).commonAncestorContainer;
                if ($v_0.parentNode.className !== "ms-crm-DataSlug" && !IsNull($p0)) $v_0 = this.$5R_3($v_0, $p0);
                else if ($v_0.nodeType !== 1) $v_0 = $v_0.parentNode
            } catch ($$e_2) {
                $v_0 = null
            }
        return $v_0
    },
    $5R_3: function($p0, $p1) {
        var $v_0 = $p0.previousSibling,
            $v_1 = $p0.nextSibling,
            $v_2 = window.getSelection().getRangeAt(0).startOffset,
            $v_3 = window.getSelection().getRangeAt(0).commonAncestorContainer.length;
        switch (Mscrm.Utilities.getDomEventKeyCode($p1)) {
        case 46:
        case 127:
            if (!IsNull($v_1))
                if ($v_1.nodeType === 3 && !XUI.Html.GetText($v_1).length) {
                    $v_1.parentNode.removeChild($v_1);
                    $v_1 = $p0.nextSibling
                }
            if (!IsNull($v_1) && !IsNull($v_1.className))
                if ($v_2 === $v_3 && $v_1.className === "ms-crm-DataSlug") return $v_1;
            break;
        case 8:
            if (!IsNull($v_0))
                if ($v_0.nodeType === 3 && !XUI.Html.GetText($v_0).length) {
                    $v_0.parentNode.removeChild($v_0);
                    $v_0 = $p0.previousSibling
                }
            if (!IsNull($v_0) && !IsNull($v_0.className))
                if (!$v_2 && $v_0.className === "ms-crm-DataSlug") return $v_0;
            break;
        default:
            $p0 = $p0.parentNode;
            break
        }
        return $p0
    },
    $5n_3: function($p0) {
        if ($p0.keyCode === 127 || $p0.keyCode === 8)
            !this.$3s_3(this.get_element()) && this.$v_3("OnDeleteDataSlugEvent");
        else this.$4m_3()
    },
    $5m_3: function($p0) {
        if (this.$M_3) {
            $p0.stopPropagation();
            $p0.preventDefault();
            return
        }
        var $v_0 = this.$49_3($p0);
        if (IsNull($v_0)) $v_0 = $p0.target;
        var $v_1 = false;
        switch (Mscrm.Utilities.getDomEventKeyCode($p0)) {
        case 46:
        case 127:
        case 8:
            var $$t_3;
            this.$5c_3($v_0, $$t_3 = { val: $v_1 }), $v_1 = $$t_3.val;
            break;
        case 9:
        case 38:
        case 40:
            return;
        case 37:
            this.$3j_3($v_0, true);
            this.$34_3($v_0);
            return;
        case 39:
            this.$3j_3($v_0, false);
            this.$34_3($v_0);
            return;
        default:
            this.$3j_3($v_0, false);
            break
        }
        if ($v_0.className === "ms-crm-DataSlug" &&
            Sys.Browser.agent === Sys.Browser.InternetExplorer &&
            Sys.Browser.version < 9 ||
            this.$b_3 && !$v_1 ||
            !this.$b_3 && $v_1 ||
            Sys.Browser.agent === Sys.Browser.InternetExplorer &&
            Sys.Browser.version >= 9 &&
            $v_1 &&
            $v_0.className === "ms-crm-DataSlugBodySingleSlug") {
            $p0.stopPropagation();
            $p0.preventDefault()
        }
    },
    $5c_3: function($p0, $p1) {
        if ($p0.className === "ms-crm-DataSlug") {
            var $v_0 = $p0;
            $p0 = $v_0.parentNode;
            $v_0.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), "true");
            $p0.removeChild($v_0);
            !this.$3s_3(this.get_element()) && this.$v_3("OnDeleteDataSlugEvent");
            $p1.val = true
        } else if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 9) {
            var $v_1 = XUI.Html.DomUtils.GetLastChild(this.get_element());
            if (!IsNull($v_1)) {
                var $v_2 = XUI.Html.DomUtils.GetPrevSibling($v_1);
                if (!IsNull($v_2)) {
                    var $v_3 = XUI.Html.DomUtils.GetNextSibling($v_2);
                    if (!IsNull($v_3) && IsNull($v_3.nodeValue)) {
                        $v_1.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), "true");
                        $p0.removeChild($v_1);
                        $p1.val = true
                    }
                }
            }
        }
    },
    $5d_3: function($p0) {
        $p0.target.className === "ms-crm-DataSlug" && $p0.target.focus();
        this.$4m_3();
        this.$34_3($p0.target)
    },
    $5f_3: function($p0) { this.$v_3("OnFocusDataSlugEvent") },
    $5y_3: function($p0) {
        var $v_0 = $p0.target;
        this.$34_3($v_0);
        $p0.stopPropagation()
    },
    $5e_3: function($p0) { Mscrm.Utilities.click(this.get_element()) },
    $4m_3: function() {
        var $v_0 = null, $v_1 = -1;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 9) {
            this.$1V_3 = window.document.selection.createRange();
            $v_0 = this.$1V_3
        } else {
            var $v_2 = window.getSelection();
            $v_1 = $v_2.anchorOffset;
            if ($v_2.rangeCount > 0) {
                this.$1V_3 = $v_2.getRangeAt(0);
                $v_0 = $v_2.anchorNode
            }
        }
        if (!IsNull($v_0)) {
            this.$13_3 = $v_0.offsetLeft;
            this.$14_3 = $v_0.offsetTop
        }
        if (IsNull(this.$13_3)) this.$13_3 = $v_1;
        if (IsNull(this.$14_3)) this.$14_3 = 0
    },
    $6B_3: function($p0) {
        var $v_0 = this.$49_3(null);
        if (!IsNull($v_0) && $v_0.className === "ms-crm-DataSlug") {
            $v_0.parentNode.replaceChild($p0, $v_0);
            return true
        }
        var $v_1 = null, $v_2 = "df" + Mscrm.DateTimeUtility.localDateTimeNow().getTime();
        if (this.$13_3 >= 0 && this.$14_3 >= 0 && !IsNull(this.$1V_3))
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 9) {
                this.$1V_3.select();
                window.document.execCommand("InsertButton", false, $v_2);
                $v_1 = $get($v_2)
            } else {
                var $v_3 = window.getSelection();
                $v_3.removeAllRanges();
                $v_3.addRange(this.$1V_3);
                var $v_4 = $v_3.getRangeAt(0);
                $v_1 = window.document.createElement("button");
                $v_1.id = $v_2;
                $v_4.insertNode($v_1);
                $v_4.collapse(true);
                var $v_5 = window.document.createTextNode(" ");
                $v_1.parentNode.insertBefore($v_5, XUI.Html.DomUtils.GetNextSibling(this.$A_3));
                $v_4 = $v_4.cloneRange();
                $v_4.selectNodeContents($v_5);
                $v_4.collapse(false);
                $v_3.removeAllRanges();
                $v_3.addRange($v_4)
            }
        if (IsNull($v_1)) return false;
        $v_1.parentNode.replaceChild($p0, $v_1);
        return true
    },
    $3s_3: function($p0) {
        var $v_0 = $p0.getElementsByTagName("SPAN");
        return $v_0.length > 0
    },
    $4O_3: function($p0, $p1) { return XUI.Html.DomUtils.Contains($p1, $p0) },
    $v_3: function($p0) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this.get_element(), Sys.EventArgs.Empty)
    },
    $6p_3: function($p0, $p1) {
        var $v_0 = null;
        if (Mscrm.Utilities
            .get_ieBrowserVersion() >
            0 &&
            Mscrm.Utilities.get_ieBrowserVersion() < 9) $v_0 = window.document.selection.createRange();
        else if (!IsNull(window.getSelection())) $v_0 = window.getSelection();
        if (!IsNull($v_0) && !IsNull($v_0.collapse))
            if (!IsNull($p0) && $p0.nodeType === 3) {
                !IsNull($p0.parentNode) && $p0.parentNode.focus();
                $v_0.collapse($p0, $p1 ? $p0.nodeValue.length : 0)
            }
    },
    $3j_3: function($p0, $p1) {
        if (this.$b_3) return;
        if (!IsNull($p0) && $p0.className === "ms-crm-DataSlug") {
            var $v_0 = $p0.previousSibling, $v_1 = $p0.nextSibling, $v_2 = null;
            if ($p1) {
                if (IsNull($v_0) || $v_0.nodeType !== 3) {
                    $v_2 = window.document.createTextNode(" ");
                    $p0.parentNode.insertBefore($v_2, $p0)
                } else if ($v_0.nodeType === 3) $v_2 = $v_0
            } else if (IsNull($v_1)) {
                $v_2 = window.document.createTextNode(" ");
                $p0.parentNode.appendChild($v_2)
            } else if ($v_1.nodeType !== 3) {
                $v_2 = window.document.createTextNode(" ");
                $p0.parentNode.insertBefore($v_2, $v_1)
            } else $v_2 = $v_1;
            this.$6p_3($v_2, $p1)
        }
    },
    $34_3: function($p0) {
        if (!IsNull($p0) && $p0.className === "ms-crm-DataSlug" && !this.$M_3) this.$h_3 = $p0;
        else this.$h_3 = null
    }
};
Mscrm.EmailBodyControl = function(element) {
    this.$$d_onContentReady = Function.createDelegate(this, this.onContentReady);
    Mscrm.EmailBodyControl.initializeBase(this, [element])
};
Mscrm.EmailBodyControl.prototype = {
    $26_5: false,
    initialize: function() {
        Mscrm.FormDataControl.prototype.initialize.call(this);
        var $v_0 = this.get_$6_4();
        $v_0.add_contentReady(this.$$d_onContentReady)
    },
    get_isIFrameLoaded: function() { return this.$26_5 },
    onContentReady: function(sender, args) {
        this.$12_4.resetValueWithDirtyCheck(this.get_value(), false);
        this.$12_4.$2N_1(this.get_value(), 1, this);
        this.$73_5();
        this.$26_5 = true
    },
    $73_5: function() {
        var $v_0 = $find("PrimaryEntity");
        if (!IsNull($v_0) && !IsNull(window.initialFormXml)) window.initialFormXml = $v_0.serialize(1)
    }
};
Mscrm.FormDataControl = function(element) {
    this.$$d_handleDataValueChange = Function.createDelegate(this, this.handleDataValueChange);
    this.$$d_$6Z_4 = Function.createDelegate(this, this.$6Z_4);
    this.$$d_onUIValueChangedByAjax = Function.createDelegate(this, this.onUIValueChangedByAjax);
    Mscrm.FormDataControl.initializeBase(this, [element])
};
Mscrm.FormDataControl.prototype = {
    $12_4: null,
    $2r_4: false,
    $2u_4: false,
    $2c_4: null,
    get_attribute: function() { return this.$12_4 },
    set_attribute: function(value) {
        this.$12_4 = value;
        return value
    },
    get_disabled: function() {
        return this.$2u_4 ? this.get_$6_4().get_disabled() : Mscrm.UIControl.prototype.get_disabled.call(this)
    },
    set_disabled: function(value) {
        if (this.$2u_4) this.get_$6_4().set_disabled(value);
        else Mscrm.UIControl.prototype.set_disabled.call(this, value);
        return value
    },
    get_value: function() { return this.get_$6_4().get_dataValue() },
    set_value: function(value) {
        this.$2r_4 = true;
        try {
            this.get_$6_4().set_dataValue(value)
        } finally {
            this.$2r_4 = false
        }
        return value
    },
    get_$35_4: function() {
        var $v_0 = "dirty";
        if (this.get_$6_4().get_forceSubmit()) $v_0 = "always";
        else if (this.get_$6_4().get_doNotSubmit()) $v_0 = "never";
        return $v_0
    },
    set_$35_4: function($p0) {
        this.get_$6_4().set_forceSubmit($p0 === "always");
        this.get_$6_4().set_doNotSubmit($p0 === "never");
        return $p0
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.initializeBehaviors();
        if (IsNull(this.$12_4));
        this.$12_4.$4b_1(this, this.get_element())
    },
    initializeBehaviors: function() {
        this.$2u_4 = true;
        var $v_0 = "add_change" in this.get_$6_4();
        if ($v_0) this.get_$6_4().add_change(this.$$d_onUIValueChangedByAjax);
        else $addHandler(this.get_element(), "change", this.$$d_$6Z_4);
        !IsNull(this.get_$6_4()) && this.get_$6_4().add_dataValueChanged(this.$$d_handleDataValueChange)
    },
    handleDataValueChange: function(sender, args) { this.setAttributeValue(3) },
    $6Z_4: function($p0) { !this.setAttributeValue(0) && $p0.preventDefault() },
    onUIValueChangedByAjax: function(sender, args) { if (!this.setAttributeValue(0)) window.event.returnValue = false },
    setAttributeValue: function(source) {
        if (!this.$2r_4) return this.$12_4.$2N_1(this.get_value(), source, this);
        return true
    },
    setAttributeValueFromControl: function() { return this.setAttributeValue(0) },
    get_$6_4: function() {
        if (IsNull(this.$2c_4)) this.$2c_4 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.get_element());
        return this.$2c_4
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.disposeHtmlControl();
        Mscrm.UIControl.prototype.dispose.call(this)
    },
    disposeHtmlControl: function() {
        var $v_0 = this.get_$6_4();
        if ($v_0.get_isDisposed()) return;
        var $v_1 = "remove_change" in $v_0;
        if ($v_1) $v_0.remove_change(this.$$d_onUIValueChangedByAjax);
        else
            try {
                $removeHandler(this.get_element(), "change", this.$$d_$6Z_4)
            } catch ($v_2) {
            }
        !IsNull($v_0) && $v_0.remove_dataValueChanged(this.$$d_handleDataValueChange)
    }
};
Mscrm.HiddenFormDataControl = function(element) { Mscrm.HiddenFormDataControl.initializeBase(this, [element]) };
Mscrm.HiddenFormDataControl.prototype = {
    initialize: function() {
        Mscrm.FormDataControl.prototype.initialize.call(this);
        Mscrm.FormDataControl.prototype.get_$6_4.call(this).add_dataValueChanged(this.$$d_handleDataValueChange)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !Mscrm.FormDataControl.prototype.get_$6_4.call(this).get_isDisposed() &&
            Mscrm.FormDataControl.prototype.get_$6_4.call(this).remove_dataValueChanged(this.$$d_handleDataValueChange);
        Mscrm.FormDataControl.prototype.dispose.call(this)
    }
};
Mscrm.NotesControl = function(element) { Mscrm.NotesControl.initializeBase(this, [element]) };
Mscrm.NotesControl.prototype = {
    get_disabled: function() { return Mscrm.UIControl.prototype.get_disabled.call(this) },
    set_disabled: function(value) { return value }
};
Mscrm.SlugSupport = function(element) {
    this.$$d_$6S_3 = Function.createDelegate(this, this.$6S_3);
    this.$$d_$6R_3 = Function.createDelegate(this, this.$6R_3);
    this.$$d_$6U_3 = Function.createDelegate(this, this.$6U_3);
    this.$1K_3 = [];
    this.$1c_3 = [];
    Mscrm.SlugSupport.initializeBase(this, [element])
};
Mscrm.SlugSupport.get_contentEditableAttribute = function() {
    return Sys.Browser.agent === Sys.Browser.InternetExplorer ? "contentEditable" : "contenteditable"
};
Mscrm.SlugSupport.prototype = {
    $j_3: null,
    $1A_3: false,
    $3H_3: false,
    $27_3: false,
    $M_3: false,
    $b_3: true,
    $1B_3: false,
    $1W_3: "",
    $9_3: null,
    $W_3: null,
    $C_3: null,
    $2A_3: false,
    $2j_3: true,
    $q_3: null,
    $19_3: null,
    $2e_3: null,
    initialize: function() {
        var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.get_element());
        !IsNull($v_0) && !IsNull($v_0.set_trimValue) && $v_0.set_trimValue(false);
        this.$19_3 = this.get_element();
        if (Sys.UI.DomElement.containsCssClass(this.get_element(), "ms-crm-Input")) this.$19_3 = this.$19_3.parentNode;
        Mscrm.CrmUIBehavior.prototype.initialize.call(this)
    },
    add_deleteSlugBody: function(value) { this.get_events().addHandler("deleteSlugBodyEvent", value) },
    remove_deleteSlugBody: function(value) { this.get_events().removeHandler("deleteSlugBodyEvent", value) },
    add_changeDataSlug: function(value) { this.get_events().addHandler("dataSlugChangeEvent", value) },
    remove_changeDataSlug: function(value) { this.get_events().removeHandler("dataSlugChangeEvent", value) },
    get_isDataSlug: function() {
        if (this.$1U_3()) return this.get_$1x_3().hasDataSlug();
        return this.$1A_3
    },
    set_isDataSlug: function(value) {
        if (value) this.$54_3();
        else this.DeleteDataSlug();
        return value
    },
    get_isMultiSlug: function() { return this.$1B_3 },
    set_isMultiSlug: function(value) {
        this.$1B_3 = value;
        if (!IsNull(this.$9_3))
            if (this.$1B_3) {
                this.$9_3.className = "ms-crm-DataSlugBody";
                this.$C_3.style.height = this.$1W_3
            } else {
                this.$9_3.className = "ms-crm-DataSlugBodySingleSlug";
                this.$9_3.innerHTML = "";
                this.$C_3.style.height = "auto"
            }
        return value
    },
    get_isTextSlugInTextBox: function() { return this.$2j_3 },
    set_isTextSlugInTextBox: function(value) {
        this.$2j_3 = value;
        return value
    },
    get_isReadOnly: function() { return this.$b_3 },
    set_isReadOnly: function(value) {
        this.$b_3 = value;
        return value
    },
    get_isDisabled: function() { return this.$M_3 },
    set_isDisabled: function(value) {
        this.$M_3 = value;
        return value
    },
    get_attributeName: function() { return this.$j_3 },
    set_attributeName: function(value) {
        this.$j_3 = value;
        return value
    },
    get_isSlugDirty: function() {
        if (this.$1U_3()) return this.get_$1x_3().get_isDirty();
        return !this.$3H_3
    },
    get_isSlugDeleted: function() { return this.$2A_3 },
    get_slugValue: function() {
        if (this.$1U_3()) return this.$5a_3();
        if (IsNull(this.$9_3)) return "";
        if (!this.$1B_3 || this.$9_3.children.length === 1) {
            var $v_5 = XUI.Html.DomUtils.GetFirstChild(this.$9_3);
            if (XUI.Html.GetText($v_5) === XUI.Html.GetText(this.$9_3)) {
                var $v_6 = "<slugbody>" + this.$W_3.getAttribute("value") + $v_5.getAttribute("value") + "</slugbody>",
                    $v_7 = String.format("<{0}>{1}</{0}>",
                        IsNull(this.$j_3) ? "null" : this.$j_3,
                        CrmEncodeDecode.CrmXmlEncode($v_6));
                return $v_7
            }
        }
        var $v_0 = [], $v_1 = 0;
        if (this.$b_3) {
            var $$t_E = this;
            XUI.Html.DomUtils.ForEachChild(this.$9_3,
                function($p1_0) {
                    if (!IsNull($p1_0.attributes)) {
                        $v_0[$v_1] = $p1_0.getAttribute("value");
                        $v_1++
                    }
                    return false
                })
        } else {
            var $v_8 = 0, $v_9 = this.$3e_3(this.$9_3), $v_A = this.$4D_3(this.$9_3.innerHTML, $v_9, 0, 0);
            if (!IsNull($v_A) && Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 9
            ) $v_A = Mscrm.Utilities.trim($v_A, null);
            while (!IsNull($v_A)) {
                var $v_B = this.$4A_3($v_A), $v_C = $v_B[0];
                if (!IsNull($v_C)) {
                    $v_0[$v_1] = $v_C;
                    $v_1++
                }
                $v_C = $v_B[1];
                if (!IsNull($v_C)) {
                    $v_0[$v_1] = $v_C;
                    $v_1++;
                    $v_8++
                }
                $v_A = $v_B[2]
            }
        }
        var $v_2 = this.$4B_3($v_0),
            $v_3 = "<slugbody>" + this.$W_3.getAttribute("value") + $v_2 + "</slugbody>",
            $v_4 = "<" + this.$j_3 + ">" + CrmEncodeDecode.CrmXmlEncode($v_3) + "</" + this.$j_3 + ">";
        return $v_4
    },
    get_firstSlugValue: function() {
        if (IsNull(this.$9_3)) return "";
        else {
            var $v_0 = Mscrm.Utilities.getChildElementsByClassName(this.$9_3, "ms-crm-DataSlug", true);
            if ($v_0.length <= 0) return "";
            return $v_0[0].getAttribute("value")
        }
    },
    get_masterControl: function() {
        if (IsNull(this.$q_3)) {
            this.$q_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.get_element());
            if (IsNull(this.$q_3)) this.$q_3 = $find(this.get_element().id);
            if (Object.getType(this.$q_3)
                .getName() ===
                "Mscrm.EditableSelectControl")
                this.$q_3 = Mscrm.FormControlInputBehavior
                    .GetElementBehavior(XUI.Html.DomUtils.GetPrevSibling(this.$q_3.get_element()))
        }
        return this.$q_3
    },
    InsertSlugControl: function(value, text, defaultValueSlug, isInsertHyperlink) {
        isInsertHyperlink = IsNull(isInsertHyperlink) ? false : isInsertHyperlink;
        if (this.$27_3) this.$2e_3.CreateInnerSlug(value, text, this.$1B_3, this.$b_3, this.$M_3, isInsertHyperlink);
        else {
            this.$1K_3.push(value);
            this.$1c_3.push(text)
        }
        this.$2A_3 = false;
        this.$3H_3 = defaultValueSlug
    },
    UpdateOperatorControl: function(value, text, displayText) {
        this.$W_3.setAttribute("value", value);
        XUI.Html.SetText(this.$W_3, displayText + " ");
        (text === "=" || text === "clear") && XUI.Html.SetText(this.$W_3, "")
    },
    UpdateInnerHtml: function(htmlValue) {
        if (this.$27_3) this.$3m_3(htmlValue);
        else {
            this.$1K_3.push(null);
            this.$1c_3.push(htmlValue)
        }
    },
    DeleteDataSlug: function() {
        if (this.$1U_3()) {
            this.$1A_3 = this.get_$1x_3().hasDataSlug();
            this.$v_3("deleteSlugBodyEvent");
            this.$3k_3();
            return
        }
        if (this.$1A_3) {
            this.$1A_3 = false;
            if (!IsNull(this.$9_3)) {
                var $v_0 = this.get_masterControl();
                if (!this.$b_3 && this.$1B_3) $v_0.set_dataValue(this.$3e_3(this.$9_3));
                else $v_0.set_dataValue(null);
                this.$v_3("deleteSlugBodyEvent");
                this.$C_3.style.display = "none";
                this.$C_3.removeChild(this.$W_3);
                this.$W_3 = null;
                this.$C_3.removeChild(this.$9_3);
                this.$9_3 = null;
                this.$2e_3 = null;
                this.$19_3.parentNode.removeChild(this.$C_3);
                this.$C_3 = null;
                this.$19_3.style.display = "";
                this.get_element().focus();
                this.$3k_3();
                this.$2A_3 = true;
                this.$27_3 = false
            }
        }
    },
    CurrentOperatorIsClear: function() {
        if (this.$1U_3()) return this.get_$1x_3().isClearOperator();
        if (!IsNull(this
                .$W_3) &&
            this.$W_3.getAttribute("value") === '<slugelement type="operator" value="clear"/>') return true;
        return false
    },
    CalculateDataSlugTabIndex: function() {
        var $v_0 = 0, $v_1 = this.get_element().getAttribute("tabindex");
        if (!IsNull($v_1)) {
            var $v_3 = $v_1.toString(), $v_4 = Number.parseInvariant($v_3);
            if ($v_4 > $v_0) return $v_4
        }
        for (var $v_2 = this.get_element()
                     .getElementsByTagName("*"),
            $v_5 = 0,
            $v_6 = $v_2.length;
            $v_5 < $v_6;
            $v_5++) {
            var $v_7 = $v_2[$v_5], $v_8 = $v_7.getAttribute("tabindex");
            if (!IsNull($v_8)) {
                var $v_9 = Number.parseInvariant($v_8.toString());
                if ($v_9 > $v_0) $v_0 = $v_9
            }
        }
        return $v_0
    },
    get_$1x_3: function() { return this.get_masterControl() },
    $3m_3: function($p0) {
        var $v_0 = window.document.createElement("span");
        XUI.Html.SetText($v_0, $p0);
        var $v_1 = $v_0.innerHTML, $v_2 = new RegExp("\x0d\x0a|\x0a|&#13;&#10;|&#10;", "g");
        $v_1 = $v_1.replace($v_2, "<br>");
        this.$9_3.innerHTML += $v_1
    },
    $54_3: function() {
        if (this.$1U_3()) {
            this.$1A_3 = this.get_$1x_3().hasDataSlug();
            return
        }
        if (!this.$1A_3) {
            this.$4z_3();
            this.$19_3.style.display = "none";
            var $v_0 = this.get_masterControl(), $v_1 = $v_0.get_dataValue(), $v_2;
            if ("get_defaultValue" in $v_0) $v_2 = $v_0.get_defaultValue();
            else $v_2 = null;
            if (this.$6G_3() && !IsNull($v_1) && typeof $v_1 === "string" && this.$2j_3) {
                this.$3m_3($v_1);
                this.$9_3.title = $v_1
            } else XUI.Html.SetText(this.$9_3, "");
            this.$4c_3();
            try {
                if (!IsNull($v_2)) $v_0.set_dataValue($v_2);
                else $v_0.set_dataValue(null)
            } catch ($$e_3) {
                $v_0.set_dataValue(null)
            }
            this.$1A_3 = true
        } else this.$4c_3()
    },
    $4c_3: function() {
        if (Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$9_3);
            !IsNull($v_0) && !IsNull($v_0.tagName) && $v_0.tagName.toUpperCase() === "BR" && this.$9_3.removeChild($v_0)
        }
    },
    $6G_3: function() {
        switch (this.get_element().tagName.toLowerCase()) {
        case "body":
        case "textarea":
        case "button":
            return true;
        case "input":
            return IsNull(this.get_element().getAttribute("type")) ||
                this.get_element().getAttribute("type").toString() === "text";
        default:
            return false
        }
    },
    $3k_3: function() { this.$v_3("dataSlugChangeEvent") },
    $4z_3: function() {
        if (IsNull(this.$9_3)) {
            if (this.$1U_3()) return;
            this.$C_3 = window.document.createElement("span");
            this.$C_3.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), false);
            this.$19_3.parentNode.appendChild(this.$C_3);
            this.$C_3.style.display = "";
            if (!Mscrm.Utilities.isIE()) this.$C_3.style.whiteSpace = "pre";
            var $v_0 = "", $v_1 = "";
            try {
                var $v_4 = this.get_element().style.height;
                if ($v_4.indexOf("%") >= 0) {
                    this.$1W_3 = "100%";
                    $v_0 = "100%";
                    this.$C_3.style.display = "block"
                } else {
                    $v_1 = this.get_element().style.display;
                    this.get_element().style.display = "inline-block";
                    this.$1W_3 = (this.get_element().offsetHeight + 2).toString() + "px";
                    this.get_element().style.display = $v_1
                }
            } catch ($$e_3) {
                this.$1W_3 = "100%"
            }
            this.$C_3.style.height = this.$1W_3;
            if (this.get_element().className === "ms-crm-CheckBox" ||
                this.get_element().className === "ms-crm-RadioButton") $v_0 = "100%";
            else if (this.get_element().className === "ms-crm-Lookup") {
                $v_0 = this.get_element().parentNode.style.width;
                this.$C_3.style.display = "block"
            } else if (isNullOrEmptyString($v_0))
                try {
                    $v_0 = XUI.Html.GetComputedStyle(this.get_element(), "width");
                    if ($v_0.toUpperCase() === "0PX") {
                        $v_1 = this.get_element().style.display;
                        this.get_element().style.display = "inline-block";
                        $v_0 = (this.get_element().offsetWidth - 2).toString() + "px";
                        this.get_element().style.display = $v_1
                    }
                } catch ($$e_4) {
                    $v_0 = "100%"
                }
            this.$C_3.style.width = $v_0;
            this.$W_3 = window.document.createElement("span");
            this.$W_3.setAttribute("Id", "operatorSpan");
            this.$W_3.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), false);
            this.$C_3.appendChild(this.$W_3);
            var $v_2 = null;
            if (this.$M_3) {
                this.$C_3.className = "ms-crm-ReadOnly";
                $v_2 = window.document.createElement("span");
                $v_2.setAttribute("class", "ms-crm-DataSlugBodySingleSlug")
            } else {
                var $v_5 = this.CalculateDataSlugTabIndex();
                $v_2 = window.document.createElement("span");
                $v_2.setAttribute("class", "ms-crm-DataSlugBodySingleSlug");
                $v_2.setAttribute("tabindex", $v_5);
                $v_2.setAttribute(Mscrm.SlugSupport.get_contentEditableAttribute(), true)
            }
            this.$C_3.appendChild($v_2);
            $v_2.style.display = "block";
            $v_2.style.height = this.$1W_3;
            this.$9_3 = $v_2;
            var $v_3 = $create(Mscrm.DataSlug, null, null, null, this.$9_3);
            this.$2e_3 = $v_3;
            this.$6T_3($v_3);
            this.$2A_3 = false
        }
    },
    $6T_3: function($p0) {
        if (!this.$M_3) {
            $p0.add_dataSlugDelete(this.$$d_$6U_3);
            $p0.add_dataSlugChange(this.$$d_$6R_3);
            $p0.add_dataSlugFocus(this.$$d_$6S_3)
        }
        if (!IsNull(this.$1K_3) && !IsNull(this.$1c_3)) {
            this.$1c_3.reverse();
            this.$1K_3.reverse();
            while (this.$1K_3.length) {
                var $v_0 = this.$1K_3.pop(), $v_1 = this.$1c_3.pop();
                if (IsNull($v_0)) this.$3m_3($v_1);
                else $p0.CreateInnerSlug($v_0, $v_1, this.$1B_3, this.$b_3, this.$M_3, false)
            }
        }
        $p0.RaiseOnChange();
        this.$27_3 = true
    },
    $6U_3: function($p0, $p1) { this.DeleteDataSlug() },
    $6R_3: function($p0, $p1) { this.$3k_3() },
    $6S_3: function($p0, $p1) {
        try {
            var $v_0 = null;
            if (this.$6F_3()) $v_0 = this.$5V_3();
            if (IsNull($v_0)) $v_0 = this.get_element();
            SetDatatypeAttributeListAtFocus($v_0)
        } catch ($$e_3) {
        }
    },
    $6F_3: function() { return Sys.UI.DomElement.containsCssClass(this.get_element(), "ms-crm-Lookup") },
    $5V_3: function() {
        var $v_0 = this.get_element().getElementsByTagName("IMG");
        if (!IsNull($v_0) && $v_0.length > 0) return $v_0[0];
        return null
    },
    $3e_3: function($p0) {
        for (var $v_0 = "", $v_1 = 0; $v_1 < $p0.childNodes.length; $v_1++) {
            var $v_2 = $p0.childNodes[$v_1];
            $v_0 += this.$5Y_3($v_2)
        }
        return $v_0
    },
    $5Y_3: function($p0) {
        var $v_0 = "";
        if (!IsNull($p0.nodeName) && $p0.nodeName.toUpperCase() === "#TEXT") {
            var $v_1 = $p0.nodeValue;
            if (!isNullOrEmptyString($v_1)) $v_0 += $v_1
        } else if (!IsNull($p0.tagName) && ($p0.tagName.toUpperCase() === "P" || $p0.tagName.toUpperCase() === "DIV")) {
            $v_0 += "\r\n";
            if ($p0.children.length > 0) $v_0 += this.$3e_3($p0);
            else $v_0 += XUI.Html.GetText($p0)
        } else if (!IsNull($p0.tagName) && $p0.tagName.toUpperCase() === "BR") $v_0 += "\r\n";
        else if (!IsNull(XUI.Html.GetText($p0))) $v_0 += XUI.Html.GetText($p0);
        return $v_0
    },
    $5a_3: function() {
        var $v_0 = 0, $v_1 = this.get_$1x_3().getHTML(), $v_2 = [], $v_3 = 0;
        while (!IsNull($v_1)) {
            var $v_6 = this.$4A_3($v_1), $v_7 = $v_6[0];
            if (!IsNull($v_7)) {
                $v_2[$v_3] = $v_7;
                $v_3++
            }
            $v_7 = $v_6[1];
            if (!IsNull($v_7)) {
                $v_2[$v_3] = $v_7;
                $v_3++;
                $v_0++
            }
            $v_1 = $v_6[2]
        }
        var $v_4 = this.$4B_3($v_2),
            $v_5 = String.format('<slugbody><slugelement type="operator" value="="/>{0}</slugbody>', $v_4);
        if (this.$6C_3($v_4))
            $v_5 = String.format('<slugbody>{0}<slugelement type="slug">{1}</slugelement></slugbody>',
                '<slugelement type="operator" value="clear"/>',
                '<slug type="dynamic" value="null"/>');
        if (isNullOrEmptyString(this.$j_3)) this.$j_3 = this.get_element().id;
        return String.format("<{0}>{1}</{0}>", this.$j_3, CrmEncodeDecode.CrmXmlEncode($v_5))
    },
    $6C_3: function($p0) { return $p0.indexOf('<slug type="dynamic" value="null"/>') > 0 },
    $4B_3: function($p0) {
        for (var $v_0 = null, $v_1 = 0, $v_2 = $p0.length; $v_1 < $v_2; $v_1++)
            if (IsNull($v_0)) $v_0 = $p0[$v_1];
            else $v_0 += $p0[$v_1];
        return $v_0
    },
    $4D_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = this.$4G_3($p0, $p2), $v_1 = $p0.toUpperCase().indexOf("</SPAN>", $v_0);
        if ($v_0 < 0 || $v_1 < 0) return $p1;
        var $v_2 = CrmEncodeDecode.CrmHtmlDecode($p0.substr($v_0, $v_1 + 7 - $v_0)),
            $v_3 = $p0.substr($v_0, $v_1 - $v_0),
            $v_4 = $v_0 + $v_3.lastIndexOf(">") + 1,
            $v_5 = $v_1 - $v_4,
            $v_6 = CrmEncodeDecode.CrmXmlDecode($p0.substr($v_4, $v_5)),
            $v_7 = $p1.indexOf(CrmEncodeDecode.CrmHtmlDecode($v_6), $p3),
            $v_8 = $p1.substr(0, $v_7) + $v_2 + $p1.substr($v_7 + $v_6.length);
        $p3 = $v_8.indexOf($v_2, $p3) + $v_2.length;
        return this.$4D_3($p0, $v_8, $v_1 + 7, $p3)
    },
    $4A_3: function($p0) {
        var $v_0 = this.$4G_3($p0, 0), $v_1 = $p0.toUpperCase().indexOf("</SPAN>", $v_0), $v_2 = null, $v_3 = null;
        if ($v_0 < 0 || $v_1 < 0) $v_3 = $p0;
        else if ($v_0 > 0) $v_3 = $p0.substr(0, $v_0);
        var $v_4 = null;
        if ($v_0 >= 0 && $v_1 >= 0 && $v_1 + 7 !== $p0.length) $v_4 = $p0.substr($v_1 + 7, $p0.length - $v_1 + 7);
        var $v_5 = null;
        if ($v_0 !== -1 && $v_1 !== -1) {
            var $v_7 = $p0.indexOf("<slugelement", $v_0),
                $v_8 = $p0.indexOf("</slugelement>", $v_0),
                $v_9 = 14,
                $v_A = false;
            if (!Mscrm.Utilities.isIE() && $v_7 === -1 && $v_8 === -1) {
                $v_7 = $p0.indexOf("&lt;slugelement", $v_0);
                $v_8 = $p0.indexOf("&lt;/slugelement&gt;", $v_0);
                $v_9 = 20;
                $v_A = true
            }
            if (Sys.Browser
                .agent ===
                Sys.Browser.Firefox &&
                Sys.Browser.version >= 15 ||
                Mscrm.Utilities.isChrome()) $v_A = true;
            if ($v_7 > 0 && $v_8 > 0) {
                $v_5 = $p0.substring($v_7, $v_8 + $v_9);
                if ($v_A) $v_5 = CrmEncodeDecode.CrmHtmlDecode($v_5);
                var $v_B = this.$59_3($p0.substring($v_8 + $v_9, $v_1)), $v_C = $v_B[0];
                if (!IsNull($v_C)) $v_3 = IsNull($v_3) ? $v_C : $v_3 + $v_C;
                $v_C = $v_B[1];
                if (!IsNull($v_C)) $v_4 = IsNull($v_4) ? $v_C : $v_C + $v_4
            }
        }
        if (!IsNull($v_3))
            $v_2 = String.format('<slugelement type="primitive" value="{0}"/>', CrmEncodeDecode.CrmXmlEncode($v_3));
        var $v_6 = [];
        $v_6[0] = $v_2;
        $v_6[1] = $v_5;
        $v_6[2] = $v_4;
        return $v_6
    },
    $4G_3: function($p0, $p1) {
        var $v_0 = $p0.toUpperCase(),
            $v_1 = IsNull($p1) ? 0 : $p1,
            $v_2 = $v_0.indexOf("<SPAN ", $v_1),
            $v_3 = this.$5P_3($p0, $v_2);
        if ($v_2 < 0 || $v_3 < 0) return -1;
        var $v_4 = $v_2;
        while ($v_4 < $v_3) {
            if ($v_4 < 0) break;
            $v_2 = $v_4;
            $v_4 = $v_0.indexOf("<SPAN ", $v_4 + 1)
        }
        var $v_5 = $v_0.indexOf("</SPAN>", $v_2);
        if ($v_2 < 0 || $v_5 < 0) return -1;
        return $v_2
    },
    $5P_3: function($p0, $p1) {
        var $v_0 = $p0.indexOf(" class=ms-crm-DataSlug", $p1);
        if ($v_0 < 0) $v_0 = $p0.indexOf(" class='ms-crm-DataSlug'", $p1);
        if ($v_0 < 0) $v_0 = $p0.indexOf(' class="ms-crm-DataSlug"', $p1);
        return $v_0
    },
    $59_3: function($p0) {
        var $v_0 = [], $v_1 = null, $v_2 = null;
        if (!IsNull($p0)) {
            var $v_3 = $p0.indexOf(">{"), $v_4 = $p0.indexOf("}</", $v_3);
            if ($v_3 >= 0 && $v_4 >= 0) {
                $v_1 = $p0.substring(0, $v_3 + 1);
                $v_2 = $p0.substring($v_4 + 1, $p0.length)
            }
        }
        $v_0[0] = $v_1;
        $v_0[1] = $v_2;
        return $v_0
    },
    $1U_3: function() {
        return !IsNull(this.get_element().className) && this.get_element().className.indexOf("ms-crm-Email-Body") >= 0
    },
    $v_3: function($p0) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this.get_element(), Sys.EventArgs.Empty)
    }
};
Mscrm.Association = function(relationshipName, relationshipRoleOrdinal, sourceEntityId, sourceEntityLogicalName) {
    this.$3O_0 = relationshipName;
    this.$3P_0 = relationshipRoleOrdinal;
    this.$3R_0 = sourceEntityId;
    this.$3S_0 = sourceEntityLogicalName
};
Mscrm.Association.prototype = {
    $3O_0: null,
    $3P_0: 0,
    $3R_0: null,
    $3S_0: null,
    get_relationshipName: function() { return this.$3O_0 },
    get_isReverse: function() { return this.$3P_0 },
    get_sourceEntityId: function() { return this.$3R_0 },
    get_sourceEntityLogicalName: function() { return this.$3S_0 }
};
Mscrm.BooleanAttribute = function() {
    Mscrm.BooleanAttribute.initializeBase(this);
    this.$N_1 = "boolean";
    this.add_validate(Mscrm.BooleanAttribute.$11)
};
Mscrm.BooleanAttribute.$11 = function($p0, $p1) {
    var $v_0 = $p1.$5_1;
    if (IsNull($v_0)) return new Mscrm.ValidationResult(true, null);
    var $v_1 = typeof $v_0;
    if ($v_1 === "string" || $v_1 === "number") {
        var $v_2 = Mscrm.BooleanAttribute.$3N[$v_0];
        if (!IsNull($v_2)) $v_0 = $v_2
    }
    if (typeof $v_0 !== "boolean") return new Mscrm.ValidationResult(false, LOCID_DEVERROR_BADDATATYPE_BOOL);
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.BooleanAttribute.prototype = {
    $31_2: false,
    initializeFromDomElement: function(element) {
        Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this, element);
        if (Sys.UI.DomElement.containsCssClass(element, "ms-crm-CheckBox")) this.$31_2 = true
    },
    get_isDirty: function() {
        if (IsNull(this.$Q_1) && IsNull(Mscrm.FormDataAttribute.prototype.get_value.call(this))) return false;
        else if (this.$31_2 &&
            IsNull(this.$Q_1) &&
            !IsNull(Mscrm.FormDataAttribute.prototype.get_value.call(this)) &&
            !Mscrm.FormDataAttribute.prototype.get_value.call(this)) return false;
        else if (this.isAttributeForBulkEdit() && !this.$31_2)
            if (IsNull(this.getValue())) return false;
            else return true;
        return Mscrm.FormDataAttribute.prototype.get_isDirty.call(this)
    },
    deserialize: function(attributeNode) { return this.preProcessValue(Boolean.parse(XUI.Xml.GetText(attributeNode))) },
    getWrapperInternal: function() { return new Mscrm.BooleanAttributeWrapper(this) },
    preProcessValue: function(value) {
        var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this, value);
        if (!IsNull($v_0) && typeof $v_0 !== "boolean") $v_0 = Mscrm.BooleanAttribute.$3N[$v_0];
        return $v_0
    },
    pushValueToControl: function(control, value) {
        var $v_0 = value;
        if (!IsNull($v_0) && Mscrm.OptionSetUIControl.isInstanceOfType(control)) $v_0 = $v_0 ? 1 : 0;
        Mscrm.FormDataAttribute.prototype.pushValueToControl.call(this, control, $v_0)
    }
};
Mscrm.DateTimeAttribute = function() {
    this.$$d_$78_2 = Function.createDelegate(this, this.$78_2);
    Mscrm.DateTimeAttribute.initializeBase(this);
    this.$N_1 = "datetime";
    this.$1l_2 = new Date(1753, 0, 1);
    this.add_validate(this.$$d_$78_2)
};
Mscrm.DateTimeAttribute.prototype = {
    $1l_2: null,
    $1g_2: false,
    get_isMinValueSet: function() { return this.$1g_2 },
    set_isMinValueSet: function(value) {
        this.$1g_2 = value;
        return value
    },
    get_minValue: function() { return this.$1l_2 },
    set_minValue: function(value) {
        this.$1l_2 = value;
        return value
    },
    isEqual: function(value1, value2) {
        var $v_0 = value1, $v_1 = value2;
        if (IsNull($v_0) && IsNull($v_1)) return true;
        if (IsNull($v_0) || IsNull($v_1)) return false;
        return $v_0.getTime() === $v_1.getTime()
    },
    deserialize: function(attributeNode) { return this.preProcessValue(ParseUtcDate(XUI.Xml.GetText(attributeNode))) },
    getValue: function() {
        var $v_0 = Mscrm.FormDataAttribute.prototype.getValue.call(this);
        return !$v_0 ? null : new Date($v_0.getTime())
    },
    initializeFromDomElement: function(element) {
        Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this, element)
    },
    preProcessValue: function(value) {
        var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this, value);
        if ($v_0)
            if (Date
                .isInstanceOfType($v_0) ||
                !isNaN($v_0) && typeof $v_0 === "object") return new Date($v_0.getTime());
            else if (typeof $v_0 === "number") return new Date($v_0);
        return null
    },
    serializeInternal: function(writer) {
        var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$4_1), $v_1 = this.get_value();
        $v_1 = new Date($v_1.getFullYear(), $v_1.getMonth(), $v_1.getDate(), $v_1.getHours(), $v_1.getMinutes());
        writer.append("<");
        writer.append($v_0);
        writer.append(">");
        writer.append(CrmEncodeDecode.CrmXmlEncode($v_1.format("s")));
        writer.append("</");
        writer.append($v_0);
        writer.append(">")
    },
    getWrapperInternal: function() { return new Mscrm.DateTimeAttributeWrapper(this) },
    $78_2: function($p0, $p1) {
        if (this.$1g_2 && !IsNull($p1.$5_1)) {
            var $v_0 = $p1.$5_1;
            if ($v_0 < this.$1l_2) return new Mscrm.ValidationResult(false, window.LOCID_ALERT_ENTER_VALID_DATE)
        }
        return new Mscrm.ValidationResult(true, null)
    }
};
Mscrm.EmailAddressAttribute = function() {
    Mscrm.EmailAddressAttribute.initializeBase(this);
    this.add_validate(Mscrm.EmailAddressAttribute.$76)
};
Mscrm.EmailAddressAttribute.$76 = function($p0, $p1) {
    if (IsNull($p1.$5_1)) return new Mscrm.ValidationResult(true, null);
    var $v_0 = Mscrm.Utilities.trim($p1.$5_1, null);
    if ($v_0.length > 0 &&
        !Mscrm.EmailAddressAttribute.$3n.test($v_0) &&
        !Mscrm.EmailUtility
        .isValidEmailWithQuotedString($v_0)) return new Mscrm.ValidationResult(false, LOCID_ENTER_VALID_EMAIL);
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.EmailBodyAttribute = function() {
    Mscrm.EmailBodyAttribute.initializeBase(this);
    this.$N_1 = "memo";
    this.add_validate(Mscrm.EmailBodyAttribute.$11)
};
Mscrm.EmailBodyAttribute.$11 = function($p0, $p1) {
    if (IsNull($p1.$5_1)) return new Mscrm.ValidationResult(true, null);
    if (typeof $p1.$5_1 !== "string") return new Mscrm.ValidationResult(false, LOCID_DEVERROR_BADTYPE_STRING);
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.EmailBodyAttribute.prototype = {
    preProcessValue: function(value) {
        return Mscrm.FormDataAttribute.prototype.preProcessValue.call(this, value) || ""
    },
    get_isDirty: function() {
        if (!IsNull(this.get_primaryDataControl()) && !this.get_primaryDataControl().$26_5) return false;
        return Mscrm.FormDataAttribute.prototype.get_isDirty.call(this)
    },
    serializeInternal: function(writer) {
        var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$4_1), $v_1 = window.LOCID_UI_DIR === "RTL";
        writer.append("<");
        writer.append($v_0);
        writer.append(">");
        $v_1 && writer.append(CrmEncodeDecode.CrmXmlEncode('<div style="direction:rtl">'));
        writer.append(CrmEncodeDecode.CrmXmlEncode(this.get_value()));
        $v_1 && writer.append(CrmEncodeDecode.CrmXmlEncode("</div>"));
        writer.append("</");
        writer.append($v_0);
        writer.append(">")
    },
    deserialize: function(attributeNode) {
        if (Mscrm.Utilities.isFirefox())
            !IsNull(attributeNode) && !IsNull(attributeNode.normalize) && attributeNode.normalize();
        return Mscrm.FormDataAttribute.prototype.deserialize.call(this, attributeNode)
    },
    sanitizeThroughDom: function(value) {
        var $v_0 = document.createElement("div");
        $v_0.innerHTML = value;
        value = $v_0.innerHTML;
        $v_0.innerHTML = value;
        value = $v_0.innerHTML;
        $v_0 = null;
        return value
    },
    isEqual: function(value1, value2) {
        var $v_0 = Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines(this.preProcessValue(value1)),
            $v_1 = Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines(this.preProcessValue(value2));
        $v_0 = this.sanitizeThroughDom($v_0);
        $v_1 = this.sanitizeThroughDom($v_1);
        return $v_0 === $v_1
    }
};
Mscrm.FormDataAttribute = function() {
    Mscrm.FormDataAttribute.initializeBase(this);
    this.$2_1 = new Mscrm.ClientApiCollection;
    this.$Y_1 = new Array(0);
    this.$1t_1 = [];
    this.add_validate(Mscrm.FormDataAttribute.$7C)
};
Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines = function(input) {
    var $v_0 = null;
    if (input) {
        $v_0 = input.replace(new RegExp("\x0d\x0a", "g"), "\n");
        $v_0 = $v_0.replace(new RegExp("\x0d", "g"), "\n")
    }
    return $v_0
};
Mscrm.FormDataAttribute.$7C = function($p0, $p1) {
    if ($p1.$2E_1 === 2 && $p0.$X_1 === "required" && !$p0.get_hasValue())
        if (!$p0.$3o_1()) {
            for (var $v_0 = null, $v_1 = $p0.$2_1.get(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (!IsNull($v_3) && !$v_3.get_innerControl().get_disabled())
                    if ($v_3.get_label() !== $p0.$4_1) {
                        $v_0 = $v_3.get_label();
                        break
                    }
            }
            if (isNullOrEmptyString($v_0))
                if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
                    if (!($v_0 = $p0.$2k_1)) $v_0 = $p0.$4_1
                } else $v_0 = $p0.$4_1;
            return new Mscrm.ValidationResult(false, String.format(LOCID_FORM_PROIVE_VALUE_MASK, $v_0))
        }
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.FormDataAttribute.prototype = {
    $2_1: null,
    $Y_1: null,
    $B_1: null,
    $F_1: null,
    $Q_1: null,
    $2g_1: false,
    $4_1: null,
    $2k_1: null,
    $E_1: null,
    $X_1: "none",
    $1P_1: 0,
    $1R_1: "dirty",
    $N_1: null,
    $n_1: 0,
    $1t_1: null,
    $5_1: null,
    $p_1: false,
    $d_1: null,
    $2B_1: false,
    $3F_1: false,
    $2l_1: null,
    $28_1: false,
    add_validate: function(value) { Array.add(this.$1t_1, value) },
    remove_validate: function(value) { Array.remove(this.$1t_1, value) },
    get_metadataType: function() {
        if (!IsNull(this.$N_1)) return this.$N_1;
        else {
            this.$3Y_1();
            return this.$N_1
        }
    },
    set_metadataType: function(value) {
        this.$N_1 = value;
        return value
    },
    get_controls: function() { return this.$2_1 },
    get_submitModeValue: function() {
        var $v_0 = this.get_primaryDataControl();
        if ($v_0)
            if (Mscrm.FormDataControl.isInstanceOfType($v_0)) this.$1R_1 = $v_0.get_$35_4();
            else if (Mscrm.HiddenFormDataControl.isInstanceOfType($v_0)) this.$1R_1 = $v_0.get_$35_4();
        return this.$1R_1
    },
    set_submitModeValue: function(value) {
        switch (value) {
        case "always":
        case "dirty":
        case "never":
            break;
        default:
            return value
        }
        this.$1R_1 = value;
        var $v_0 = this.get_primaryDataControl();
        if ($v_0)
            if (Mscrm.FormDataControl.isInstanceOfType($v_0)) $v_0.set_$35_4(this.$1R_1);
            else Mscrm.HiddenFormDataControl.isInstanceOfType($v_0) && $v_0.set_$35_4(this.$1R_1);
        return value
    },
    get_format: function() { return this.$F_1 },
    set_format: function(value) {
        this.$F_1 = Mscrm.InternalUtilities._String.isNullOrEmpty(value) ? null : value;
        return value
    },
    get_initialValue: function() { return this.$Q_1 },
    set_initialValue: function(value) {
        if (!this.$p_1) this.$Q_1 = value;
        return value
    },
    get_lastSaveCallValue: function() { return this.$2l_1 },
    set_lastSaveCallValue: function(value) {
        this.$2l_1 = value;
        return value
    },
    get_isDirty: function() { return this.$2g_1 || !!this.$Y_1.length && !this.isEqual(this.$Q_1, this.get_value()) },
    get_isDirtyAfterLastSaveCall: function() {
        return !!this.$Y_1.length && !this.isEqual(this.$2l_1, this.get_value())
    },
    isEqual: function(value1, value2) { return value1 === value2 },
    get_isDirtyOverride: function() { return this.$2g_1 },
    get_isValueInitialized: function() { return this.$p_1 },
    get_name: function() { return this.$4_1 },
    set_name: function(value) {
        this.$4_1 = value;
        return value
    },
    get_labelName: function() { return this.$2k_1 },
    set_labelName: function(value) {
        this.$2k_1 = value;
        return value
    },
    get_parent: function() { return this.$E_1 },
    set_parent: function(value) {
        this.$E_1 = value;
        return value
    },
    get_requiredLevelValue: function() { return this.$X_1 },
    set_requiredLevelValue: function(value) {
        this.updateRequiredLevel(value, true);
        return value
    },
    updateRequiredLevel: function(value, updateUI) {
        switch (value.toString()) {
        case "none":
        case "recommended":
        case "required":
            break;
        case "true":
            value = "required";
            break;
        case "false":
            value = "none";
            break;
        default:
            return
        }
        this.$X_1 = value;
        if (updateUI)
            for (var $v_0 = this.$2_1
                         .get(),
                $v_1 = 0;
                $v_1 < $v_0.length;
                $v_1++) $v_0[$v_1].setRequiredLevel(this.$X_1)
    },
    get_userPrivilegeMask: function() { return this.$n_1 },
    set_userPrivilegeMask: function(value) {
        this.$n_1 = value;
        return value
    },
    get_value: function() { return this.getValue() },
    set_value: function(value) {
        this.$2N_1(value, 2, null);
        return value
    },
    get_dataControls: function() { return this.$Y_1 },
    get_hasValue: function() { return !IsNull(this.get_value()) },
    get_primaryDataControl: function() {
        for (var $v_0 = this.$Y_1, $v_1 = null, $v_2 = 0; $v_2 < $v_0.length && !$v_1; $v_2++) {
            var $v_3 = $v_0[$v_2];
            if ($v_3.get_id() === this.$4_1) $v_1 = $v_3
        }
        return $v_1
    },
    get_$H_1: function() {
        if (!this.$B_1) this.$B_1 = new Mscrm.ClientApiEventHandlerList(this.get_events());
        return this.$B_1
    },
    get_isVirtual: function() { return this.$2B_1 },
    set_isVirtual: function(value) {
        this.$2B_1 = value;
        return value
    },
    get_isCompositeAttribute: function() { return this.$3F_1 },
    set_isCompositeAttribute: function(value) {
        this.$3F_1 = value;
        return value
    },
    get_isInitialization: function() { return this.$28_1 },
    set_isInitialization: function(value) {
        this.$28_1 = value;
        return value
    },
    addOnChange: function(handler, system) { this.get_$H_1().addHandler("Change", handler, system) },
    addOnChangeInternal: function(handler, system) { this.get_$H_1().addHandler("ChangeInternal", handler, system) },
    fireOnChange: function() { this.$v_1("Change") },
    getUserPrivilege: function() { return new Xrm.FormDataAttributePrivilege(this.$n_1) },
    $5C_1: function() { this.$v_1("ChangeInternal") },
    $v_1: function($p0) {
        var $v_0 = this.get_$H_1().getHandler($p0);
        $v_0 && $v_0(this.getWrapper(), null)
    },
    getIsValid: function() {
        var $v_0 = this.$11_1(this.getValue(), 1), $v_1 = false;
        if (!IsNull($v_0)) {
            $v_1 = $v_0.isValid;
            if ($v_0.isValid)
                for (var $v_2 = 0; $v_2 < this.$2_1.getLength(); $v_2++) {
                    var $v_3 = this.$2_1.get($v_2);
                    if ($v_3.hasNotification()) return false;
                    var $v_4 = this.$2_1.get($v_2);
                    if (!$v_4.get_isValid()) return false
                }
        }
        return $v_1
    },
    getKey: function() { return this.$4_1 },
    getWrapper: function() {
        if (!this.$d_1) this.$d_1 = this.getWrapperInternal();
        return this.$d_1
    },
    isAttributeForBulkEdit: function() { return typeof FORM_TYPE != "undefined" && FORM_TYPE == "BulkEdit" },
    _disposed: false,
    get_isDisposed: function() { return this._disposed },
    dispose: function() {
        if (this._disposed) return;
        this._disposed = true;
        Sys.Component.prototype.dispose.call(this);
        !IsNull(this.$B_1) && this.$B_1.clearAllHandler();
        Mscrm.Utilities.destroyObject(this)
    },
    initialize: function() {
        Sys.Component.prototype.initialize.call(this);
        !IsNull(this.$E_1) && this.$E_1.$6f_1(this);
        this.$1P_1 = !IsNull(this.$E_1) && this.$E_1.get_isNew() ? 1 : 4
    },
    hasDataToSerialize: function(mode) {
        if (this.$2B_1) return false;
        var $v_0 = this.get_submitModeValue();
        switch ($v_0) {
        case "always":
            return this.get_isDirty();
        case "never":
            return false;
        case "dirty":
            switch (mode) {
            case 2:
                return true;
            case 0:
                return this.get_hasValue();
            case 1:
                return !!this.$Y_1.length && this.get_isDirty() && !this.$3o_1();
            default:
                break
            }
            break;
        default:
            break
        }
        return false
    },
    removeOnChange: function(handler) { this.get_$H_1().removeHandler("Change", handler) },
    removeOnChangeInternal: function(handler) { this.get_$H_1().removeHandler("ChangeInternal", handler) },
    serialize: function(writer, mode) {
        if (this.$2B_1) return;
        var $v_0 = this.get_submitModeValue();
        if ($v_0 === "never" || $v_0 !== "always" && !this.hasDataToSerialize(mode)) return;
        if (this.get_hasValue()) this.serializeInternal(writer);
        else {
            writer.append("<");
            writer.append(CrmEncodeDecode.CrmXmlEncode(this.$4_1));
            writer.append("/>")
        }
    },
    $3x_1: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, this.$4_1, null),
            $v_1 = !$v_0 ? this.preProcessValue(null) : this.deserialize($v_0),
            $v_2 = null;
        if ($v_1) $v_2 = $v_1;
        switch (this.$F_1) {
        case "datetime":
        case "date":
            if ($v_2 && $v_2.length > 19) {
                $v_2 = $v_2.substring(0, 19);
                $v_1 = $v_2
            }
            break;
        default:
            break
        }
        var $v_3 = IsNull(this.$Q_1) || !this.$p_1 || !IsNull($v_1) || !this.$E_1.get_isNew();
        if ($v_3 || window._appFormErrorOnPage) this.$Q_1 = $v_1
    },
    get_firstAvailableControl: function() {
        for (var $v_0 = null, $v_1 = this.$2_1.getLength(), $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = this.$2_1.get($v_2);
            if (!$v_3.get_innerControl().get_disabled()) {
                if (typeof $v_3.get_doNotSubmit !== "undefined" && $v_3.get_doNotSubmit()) continue;
                if (!$v_0) $v_0 = $v_3;
                if ($v_3.isVisibleInTree()) return $v_3
            }
        }
        return $v_0
    },
    get_requiredPrivilegeForSet: function() { return this.$1P_1 },
    set_requiredPrivilegeForSet: function(value) {
        this.$1P_1 = value;
        return value
    },
    $4b_1: function($p0, $p1) {
        if (!this.$Y_1.length) {
            this.initializeFromDomElement($p1);
            this.$4K_1($p0)
        }
        if (Mscrm.UIControl.isInstanceOfType($p0)) {
            var $v_0 = $p0.get_parent();
            $v_0 && Mscrm.FormUIControl.isInstanceOfType($v_0) && this.$2_1.add($v_0)
        }
        Array.add(this.$Y_1, $p0)
    },
    resetValue: function(value) { return this.resetValueWithDirtyCheck(value, false) },
    forceResetValue: function(value) { return this.forceResetValueWithDirtyCheck(value, false) },
    forceResetValueWithDirtyCheck: function(value, needDirtyCheck) { return this.$4L_1(value, needDirtyCheck, true) },
    resetValueWithDirtyCheck: function(value, needDirtyCheck) { return this.$4L_1(value, needDirtyCheck, false) },
    $4L_1: function($p0, $p1, $p2) {
        var $v_0 = this.get_value(),
            $v_1 = this.preProcessValue($p0),
            $v_2 = $p1 && this.get_isDirtyAfterLastSaveCall() && !this.isEqual($v_0, $v_1);
        if (!$v_2) {
            var $v_4 = this.$4M_1($p0, 1, null, $p2);
            if (!$v_4) return false
        } else {
            var $v_5 = this.$11_1($p0, 1);
            if (IsNull($v_5) || !$v_5.isValid) return false
        }
        var $v_3 = !this.isEqual($v_0, this.get_value());
        this.$Q_1 = $v_1;
        return $v_3
    },
    setValueForCompositeField: function(value) { this.$2N_1(value, 0, null) },
    $3Y_1: function() {
        Mscrm.InternalUtilities.Utilities.isRefreshForm() &&
            this.$Y_1.length !== this.$2_1.getLength() &&
            this.editViewControlInitializer()
    },
    $2N_1: function($p0, $p1, $p2) { return this.$4M_1($p0, $p1, $p2, false) },
    $4M_1: function($p0, $p1, $p2, $p3) {
        if ($p1 === 1) {
            this.$p_1 = true;
            this.$28_1 = true
        } else {
            this.$28_1 = false;
            this.$3Y_1()
        }
        if ($p1 === 2 && !(this.$n_1 & this.$1P_1) && !IsNull($p2)) return false;
        var $v_0 = $p1 !== 1 ? this.$11_1($p0, 1) : new Mscrm.ValidationResult(true, null);
        if ($v_0.isValid) {
            var $v_1 = this.$5_1, $v_2 = this.preProcessValue($p0);
            this.$5_1 = $v_2;
            var $v_3 = !this.isEqual($v_1, this.$5_1);
            this.$6d_1($p2);
            ($v_3 || $p3) && this.$5C_1();
            if (!$p1) {
                (!Mscrm.InternalUtilities.Utilities.isRefreshForm() || $v_3) && this.fireOnChange();
                if (Mscrm.InternalUtilities.Utilities.isRefreshForm() && !IsNull(this.$E_1))
                    if (!this.$E_1.get_isNew() || !this.$E_1.$24_1) {
                        this.$E_1.$24_1 = true;
                        Xrm.Page.data.setFormDirty(true)
                    }
            }
        } else if (!isNullOrEmptyString($v_0.errorText)) {
            (!Mscrm.InternalUtilities.Utilities.isRefreshForm() || IsNull($p2)) && alert($v_0.errorText);
            if ($p2 && Mscrm.UIControl.isInstanceOfType($p2)) {
                var $v_4 = $p2.get_parent();
                !IsNull($v_4) && $v_4.setFocus()
            } else {
                var $v_5 = this.get_firstAvailableControl();
                $v_5 && $v_5.setFocus()
            }
        }
        return $v_0.isValid
    },
    $11_1: function($p0, $p1) {
        for (var $v_0 = new Mscrm.ValidationEventArgs($p0, $p1), $v_1 = null, $v_2 = 0;
            $v_2 < this.$1t_1.length && (!$v_1 || $v_1.isValid);
            $v_2++) {
            var $v_3 = this.$1t_1[$v_2];
            $v_1 = $v_3(this, $v_0)
        }
        if (!$v_1) $v_1 = new Mscrm.ValidationResult(true, null);
        return $v_1
    },
    deserialize: function(attributeNode) {
        var $v_0 = XUI.Xml.DomUtils.GetFirstChild(attributeNode);
        return this.preProcessValue($v_0
            ? CrmEncodeDecode.CrmXmlDecode(XUI.Xml.XMLSerializer.serializeToString($v_0))
            : null)
    },
    getValue: function() {
        if (!this.$p_1)
            if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) return this.$Q_1;
            else this.$4K_1(this.$Y_1[0]);
        return this.$5_1
    },
    getWrapperInternal: function() { return new Mscrm.FormDataAttributeWrapper(this) },
    initializeFromDomElement: function(element) {
        if (isNullOrEmptyString(this.$4_1)) this.$4_1 = element.getAttribute("attrName");
        if (isNullOrEmptyString(this.$F_1)) this.$F_1 = element.getAttribute("attrFormat");
        if (!this.$n_1) {
            var $v_1 = element.getAttribute("attrPriv");
            if (!isNullOrEmptyString($v_1)) this.$n_1 = parseInt($v_1, 10)
        }
        var $v_0 = element.getAttribute("req");
        if (!isNullOrEmptyString($v_0)) this.$X_1 = Mscrm.RequiredLevelConverter.fromLegacyValue(parseInt($v_0, 10))
    },
    preProcessValue: function(value) { return IsNull(value) ? null : value },
    pushValueToControl: function(control, value) { control.set_value(value) },
    serializeInternal: function(writer) {
        var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$4_1);
        writer.append("<");
        writer.append($v_0);
        writer.append(">");
        writer.append(CrmEncodeDecode.CrmXmlEncode(this.get_value().toString()));
        writer.append("</");
        writer.append($v_0);
        writer.append(">")
    },
    $3o_1: function() {
        for (var $v_0 = false, $v_1 = this.$2_1.get(), $v_2 = 0;
            $v_2 < $v_1.length && !$v_0;
            $v_2++
        ) $v_0 = !$v_1[$v_2].get_innerControl().get_disabled();
        return this.$2_1.getLength() > 0 && !$v_0
    },
    editViewControlInitializer: function() {
        var $$t_2 = this;
        this.$2_1.forEach(function($p1_0, $p1_1) {})
    },
    $4K_1: function($p0) {
        if (IsNull($p0)) return;
        var $v_0 = $p0.get_value();
        if (typeof $v_0 !== "undefined") {
            this.$2N_1($v_0, 1, $p0);
            this.$Q_1 = this.get_value();
            var $v_1 = window._dirtyProperties;
            this.$2g_1 = !!$v_1 && $v_1[this.$4_1] === this.$4_1
        }
    },
    $6d_1: function($p0) {
        for (var $v_0 = this.get_value(), $v_1 = this.$Y_1, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            $v_3 !== $p0 && this.pushValueToControl($v_3, $v_0)
        }
    }
};
Mscrm.FormDataEntity = function() {
    Mscrm.FormDataEntity.initializeBase(this);
    this.$a_1 = new Mscrm.ClientApiCollection;
    this.$1O_1 = new Array(0);
    this.$1G_1 = [];
    this.$65_1()
};
Mscrm.FormDataEntity.prototype = {
    $a_1: null,
    $B_1: null,
    $1i_1: null,
    $1O_1: null,
    $1H_1: null,
    $2q_1: null,
    $t_1: null,
    $M_1: false,
    $21_1: null,
    $d_1: null,
    $1G_1: null,
    $3A_1: false,
    $2f_1: null,
    $2n_1: null,
    $24_1: false,
    add_onIsDisabledChanged: function(value) { this.get_$3h_1().addHandler("OnIsDisabledChanged", value) },
    remove_onIsDisabledChanged: function(value) { this.get_$3h_1().removeHandler("OnIsDisabledChanged", value) },
    get_attributes: function() { return this.$a_1 },
    get_isDirty: function() { return this.hasDataToSerialize(1) },
    get_isDirtyNotificationEnabled: function() { return this.$24_1 },
    set_isDirtyNotificationEnabled: function(value) {
        this.$24_1 = value;
        return value
    },
    get_isCreateMode: function() { return IsNull(this.$1H_1) || !this.$1H_1.length },
    get_recordName: function() { return this.$2n_1 },
    set_recordName: function(value) {
        this.$2n_1 = value;
        this.$5F_1();
        return value
    },
    get_recordId: function() { return this.$1H_1 },
    set_recordId: function(value) {
        this.$1H_1 = value;
        this.$5E_1();
        return value
    },
    get_typeName: function() { return this.$t_1 },
    set_typeName: function(value) {
        this.$t_1 = value;
        return value
    },
    get_isDisabled: function() { return this.$M_1 },
    set_isDisabled: function(value) {
        var $v_0 = this.$M_1;
        this.$M_1 = value;
        this.$M_1 !== $v_0 && this.$5D_1();
        return value
    },
    get_formState: function() { return this.$21_1 },
    set_formState: function(value) {
        this.$21_1 = value;
        return value
    },
    get_overrideDisabledMode: function() {
        if ("email" === Xrm.Page.data.entity.getEntityName()) {
            var $v_0 = this.$a_1.get("statuscode"), $v_1 = -1;
            if (!IsNull($v_0)) $v_1 = $v_0.get_value();
            if ($v_1 === -1 || $v_1 !== 6 && $v_1 !== 4 && $v_1 !== 7 && $v_1 !== 3) return false;
            var $v_2 = this.$a_1.get("statecode");
            if ($v_2.get_value()) return true
        }
        return false
    },
    get_pendingAssociations: function() { return this.$1G_1 },
    set_pendingAssociations: function(value) {
        this.$1G_1 = value;
        return value
    },
    get_deferredAssociation: function() { return this.$3A_1 },
    set_deferredAssociation: function(value) {
        this.$3A_1 = value;
        return value
    },
    get_isNew: function() { return isNullOrEmptyString(this.$1H_1) },
    get_$H_1: function() {
        if (!this.$B_1) this.$B_1 = new Mscrm.ClientApiEventHandlerList(this.get_events());
        return this.$B_1
    },
    get_$3h_1: function() {
        if (IsNull(this.$2f_1)) this.$2f_1 = new Sys.EventHandlerList;
        return this.$2f_1
    },
    addOnRecordNameChanged: function(handler, system) {
        this.get_$H_1().addHandler("OnRecordNameChanged", handler, system)
    },
    addOnRecordIdChanged: function(handler, system) {
        this.get_$H_1()
            .addHandler("OnRecordIdChanged", handler, system)
    },
    removeOnRecordIdChanged: function(handler) { this.get_$H_1().removeHandler("OnRecordIdChanged", handler) },
    removeOnRecordNameChanged: function(handler) { this.get_$H_1().removeHandler("OnRecordNameChanged", handler) },
    addOnSave: function(handler, system) { this.get_$H_1().addHandler("Save", handler, system) },
    fireOnSave: function(args) {
        var $v_0 = this.get_$H_1().getHandler("Save");
        if ($v_0) {
            args.$25_2 = true;
            $v_0(this.$3g_1(), args);
            return !args.isDefaultPrevented()
        }
        return true
    },
    hasDataToSerialize: function(mode) {
        for (var $v_0 = false, $v_1 = this.$a_1.get(), $v_2 = 0;
            $v_2 < $v_1.length && !$v_0;
            $v_2++
        ) $v_0 = $v_1[$v_2].hasDataToSerialize(mode);
        if (!$v_0)
            for (var $v_3 = 0;
                $v_3 < this.$1O_1.length && !$v_0;
                $v_3++
            ) $v_0 = this.$1O_1[$v_3].hasDataToSerialize(mode);
        return $v_0
    },
    initialize: function() {
        Sys.Component.prototype.initialize.call(this);
        Mscrm.FormDataManager.$6h(this);
        this.$69_1()
    },
    _disposed: false,
    get_isDisposed: function() { return this._disposed },
    dispose: function() {
        if (this._disposed) return;
        this._disposed = true;
        Mscrm.FormDataManager.$72(this.get_id());
        Sys.Component.prototype.dispose.call(this);
        !IsNull(this.$B_1) && this.$B_1.clearAllHandler();
        Mscrm.Utilities.destroyObject(this)
    },
    registerOtherData: function(data) { Array.add(this.$1O_1, data) },
    removeOnSave: function(handler) { this.get_$H_1().removeHandler("Save", handler) },
    save: function(action) {
        var $v_0 = $find("crmForm");
        switch (action) {
        case "save":
            $v_0.Save();
            break;
        case "saveandclose":
            $v_0.SaveAndClose();
            break;
        case "saveandnew":
            $v_0.SaveAndNew();
            break;
        default:
            IsNull(action) && $v_0.Save();
            break
        }
    },
    serialize: function(mode) {
        var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$t_1), $v_1 = new Sys.StringBuilder;
        $v_1.append("<");
        $v_1.append($v_0);
        $v_1.append(">");
        var $$t_5 = this, $v_2 = function($p1_0) { $p1_0.serialize($v_1, mode) };
        Array.forEach(this.$a_1.get(), $v_2);
        Array.forEach(this.$1O_1, $v_2);
        $v_1.append("</");
        $v_1.append($v_0);
        $v_1.append(">");
        return $v_1.toString()
    },
    validateForSave: function() {
        for (var $v_0 = null, $v_1 = this.$a_1.get(), $v_2 = 0; $v_2 < $v_1.length && (!$v_0 || $v_0.isValid); $v_2++) {
            var $v_3 = $v_1[$v_2];
            $v_0 = $v_3.$11_1($v_3.get_value(), 2);
            if (isNullOrEmptyString($v_0.errorText)) continue;
            if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) Mscrm.ErrorStatusControl.showError($v_0.errorText);
            else alert($v_0.errorText);
            var $v_4 = $v_3.get_firstAvailableControl();
            $v_4 && $v_4.setFocus()
        }
        return $v_0.isValid
    },
    validateFieldsValue: function(createMode) {
        for (var $v_0 = null, $v_1 = this.$a_1.get(), $v_2 = !IsNull(createMode) && createMode, $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++) {
            var $v_4 = $v_1[$v_3];
            if (!$v_4.get_isDirty() && !$v_2 && $v_4.$X_1 === "none") continue;
            var $v_5 = $v_4.get_firstAvailableControl();
            if (IsNull($v_5)) continue;
            $v_0 = $v_4.$11_1($v_4.get_value(), 2);
            if (!$v_0 || $v_0.isValid) continue;
            $v_5.setFocus();
            return $v_0.errorText
        }
        return null
    },
    validateValueForCompositeField: function(attribute, type) { return attribute.$11_1(attribute.get_value(), type) },
    $3g_1: function() {
        if (!this.$d_1) this.$d_1 = new Mscrm.FormDataEntityWrapper(this);
        return this.$d_1
    },
    $6f_1: function($p0) {
        var $v_0 = this.$a_1.get($p0.getKey()),
            $v_1 = typeof ProcessControl !== "undefined" && typeof ProcessControl.ClientApi !== "undefined",
            $v_2 = $v_1 && typeof ProcessControl.ClientApi.ILightWeightAttributeWrapper.isInstanceOfType($v_0);
        if ($v_2 || !$v_0) {
            this.$a_1.add($p0);
            if (IsNull(Xrm.Page.data.entity)) Xrm.Page.data.entity = this.$3g_1();
            Xrm.Page.data.entity.attributes.add($p0.getWrapper());
            if (this.$1i_1[$p0.$4_1]) {
                Array.remove(this.$1O_1, this.$1i_1[$p0.$4_1]);
                delete this.$1i_1[$p0.$4_1]
            }
            this.$2q_1 && $p0.$3x_1(this.$2q_1)
        }
    },
    $65_1: function() {
        this.$1i_1 = {};
        var $v_0 = $get("crmFormSubmitMappedDataRemainder");
        if ($v_0 && !isNullOrEmptyString($v_0.value))
            for (var $v_1 = XUI.Xml.LoadXml("<mapped>" + $v_0.value + "</mapped>"),
                $v_2 = XUI.Xml.SelectNodes($v_1, "/mapped/*", null),
                $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++) {
                var $v_4 = $v_2[$v_3], $v_5 = new Mscrm.RemainderData(XUI.Xml.XMLSerializer.serializeToString($v_4));
                this.registerOtherData($v_5);
                this.$1i_1[$v_4.nodeName] = $v_5
            }
    },
    $69_1: function() {
        var $v_0 = $get("crmFormOriginalXml");
        if ($v_0 && !isNullOrEmptyString($v_0.value)) {
            var $v_1 = XUI.Xml.LoadXml($v_0.value), $v_2 = XUI.Xml.SelectSingleNode($v_1, this.$t_1, null);
            if ($v_2) this.$2q_1 = $v_2
        }
    },
    $5F_1: function() {
        var $v_0 = this.get_$H_1().getHandler("OnRecordNameChanged");
        $v_0 && $v_0(this, null)
    },
    $5E_1: function() {
        var $v_0 = this.get_$H_1().getHandler("OnRecordIdChanged");
        $v_0 && $v_0(this, null)
    },
    $5D_1: function() {
        var $v_0 = this.get_$3h_1().getHandler("OnIsDisabledChanged");
        !IsNull($v_0) && $v_0(this, null)
    },
    clearPendingAssociations: function() {
        if (this.$1G_1.length > 0) {
            for (var $v_0 = 0; $v_0 < this.$1G_1.length; $v_0++) this.$1G_1[$v_0] = null;
            Array.clear(this.$1G_1)
        }
    },
    isInHierarchy: function() {
        var $v_0 = false, $v_1 = window._entityData;
        if (!IsNull($v_1)) {
            var $v_2 = null, $$t_3, $$t_4;
            $$t_4 = Mscrm.JsonUtilities.tryGetParsedJson(Mscrm.JsonUtilities
                .getJsonString($v_1),
                $$t_3 = { val: $v_2 }), $v_2 = $$t_3.val, $$t_4;
            if (!IsNull($v_2))
                $v_0 = Mscrm.Utilities.parseBoolean(Mscrm.Utilities
                    .getData($v_2, "_entity", "isRecordHierarchyEnabled"))
        }
        return $v_0
    }
};
Mscrm.HtcProxyFormData = function(control) { this.$0_0 = control };
Mscrm.HtcProxyFormData.prototype = {
    $0_0: null,
    hasDataToSerialize: function(mode) {
        switch (mode) {
        case 2:
            return true;
        case 0:
            return !IsNull(this.$0_0.get_dataValue());
        case 1:
            return this.$0_0.get_isDirty();
        default:
            break
        }
        return false
    },
    serialize: function(writer, mode) {
        if (!this.hasDataToSerialize(mode)) return;
        writer.append(this.$0_0.get_dataXml())
    }
};
Mscrm.InlineFormDataLookupAttribute = function() { Mscrm.InlineFormDataLookupAttribute.initializeBase(this) };
Mscrm.InlineFormDataLookupAttribute.prototype = {
    get_isDirty: function() {
        return this.get_isDirtyOverride() || Mscrm.LookupAttribute.itemsDifferent(this.$Q_1, this.get_value())
    }
};
Mscrm.InlineFormDataEmailBodyAttribute = function() { Mscrm.InlineFormDataEmailBodyAttribute.initializeBase(this) };
Mscrm.InlineFormDataEmailBodyAttribute.prototype = {
    $3T_3: null,
    $3M_3: null,
    get_isDirty: function() {
        var $v_0 = this.$Y_1;
        if ($v_0.length > 0 && !$v_0[0].$26_5) return false;
        return Mscrm.EmailBodyAttribute.prototype.get_isDirty.call(this)
    },
    resetValueWithDirtyCheck: function(value, needDirtyCheck) {
        Mscrm.FormDataAttribute.prototype.resetValueWithDirtyCheck.call(this, value, needDirtyCheck);
        var $v_0 = !this.isEqual(this.preProcessValue(value), this.$3M_3);
        this.$3M_3 = this.preProcessValue(value);
        return $v_0
    },
    get_updatedDataValue: function() { return this.$3T_3 },
    set_updatedDataValue: function(value) {
        this.$3T_3 = value;
        return value
    },
    sanitizeThroughDom: function(value) {
        if (!Mscrm.Utilities.isIE()) return Mscrm.EmailBodyAttribute.prototype.sanitizeThroughDom.call(this, value);
        return value
    }
};
Mscrm.InlineFormDataRelatedCasesLookupAttribute = function() {
    Mscrm.InlineFormDataRelatedCasesLookupAttribute.initializeBase(this)
};
Mscrm.InlineFormDataRelatedCasesLookupAttribute
    .prototype = { resetValue: function(value) { return true }, get_isDirty: function() { return false } };
Mscrm.LookupAttribute = function() {
    Mscrm.LookupAttribute.initializeBase(this);
    this.$T_2 = new Array(0);
    this.$N_1 = "lookup";
    this.add_validate(Mscrm.LookupAttribute.$77);
    this.add_validate(Mscrm.LookupAttribute.$74)
};
Mscrm.LookupAttribute.itemsDifferent = function(itemsA, itemsB) {
    if (IsNull(itemsA) && IsNull(itemsB)) return false;
    if (IsNull(itemsA) || IsNull(itemsB)) return true;
    if (itemsA.length !== itemsB.length) return true;
    var $v_0 = itemsA.length - 1;
    while ($v_0 >= 0) {
        if (Mscrm.LookupAttribute.areItemsDifferent(itemsA[$v_0], itemsB[$v_0])) return true;
        $v_0--
    }
    return false
};
Mscrm.LookupAttribute.areItemsDifferent = function(itemA, itemB) {
    if (!parseInt(itemA.type) && !parseInt(itemB.type) ||
        parseInt(itemA
            .category) ===
        3 &&
        parseInt(itemB.category) === 3)
        return Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemB.name) !==
            Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemA.name);
    return !Mscrm.LookupAttribute.compareGuids(itemA.id, itemB.id) && !!itemB.type ||
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemB.type) !==
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemA.type) ||
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemB.data) !==
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemA.data) ||
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemB.resourceSpecId) !==
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemA.resourceSpecId) ||
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemB.effort) !==
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemA.effort) ||
        Mscrm.InternalUtilities.Utilities.isRefreshForm() &&
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemB.activityPartyId) !==
        Mscrm.LookupAttribute.undefinedAndEmptyToNull(itemA.activityPartyId)
};
Mscrm.LookupAttribute.undefinedAndEmptyToNull = function(value) {
    if (IsNull(value) || typeof value === "string" && isNullOrEmptyString(value)) return null;
    return value
};
Mscrm.LookupAttribute.$74 = function($p0, $p1) {
    if ($p1.$2E_1 === 2) {
        for (var $v_0 = true, $v_1 = $p0.$T_2, $v_2 = 0;
            $v_2 < $v_1.length && $v_0;
            $v_2++
        ) if (!IsNull($v_1[$v_2])) $v_0 = !!($v_0 & $v_1[$v_2].isValid());
        return new Mscrm.ValidationResult($v_0, null)
    }
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.LookupAttribute.$77 = function($p0, $p1) {
    var $v_0 = $p0, $v_1 = $p1.$5_1;
    if (IsNull($v_1)) return new Mscrm.ValidationResult(true, null);
    if (!isArray($v_1)) return new Mscrm.ValidationResult(false, null);
    if (!$v_0.$1h_2 && ($v_0.$s_2 === 1 && $v_1.length > 1)) return new Mscrm.ValidationResult(false, null);
    for (var $v_2 = $v_0.$T_2[0], $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
        var $v_4 = $v_1[$v_3], $v_5 = $v_4.entityType;
        if ($v_5) $v_4.typename = $v_5;
        if (!$v_2.isPermissibleType($v_4)) return new Mscrm.ValidationResult(false, null)
    }
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.LookupAttribute.compareGuids = function(guidA, guidB) {
    var $v_0 = guidA, $v_1 = guidB;
    if (isNullOrEmptyString($v_0) && isNullOrEmptyString($v_1)) return true;
    if (isNullOrEmptyString($v_0) || isNullOrEmptyString($v_1)) return false;
    if ($v_0.length === 36 && $v_0.charAt(0) !== "{" && $v_0.charAt(35) !== "}") $v_0 = String.format("{{{0}}}", $v_0);
    if ($v_1.length === 36 && $v_1.charAt(0) !== "{" && $v_1.charAt(35) !== "}") $v_1 = String.format("{{{0}}}", $v_1);
    return $v_0.toString().toUpperCase() === $v_1.toString().toUpperCase()
};
Mscrm.LookupAttribute.prototype = {
    $T_2: null,
    $s_2: 1,
    $1h_2: false,
    get_isDirty: function() {
        for (var $v_0 = false, $v_1 = 0; $v_1 < this.$T_2.length && !$v_0; $v_1++) $v_0 = this.$T_2[$v_1].get_isDirty();
        return $v_0
    },
    getWrapperInternal: function() { return new Mscrm.LookupAttributeWrapper(this) },
    get_lookupStyle: function() { return this.$s_2 },
    set_lookupStyle: function(value) {
        this.$s_2 = value;
        return value
    },
    get_lookupDialogMultipleSelect: function() { return this.$1h_2 },
    set_lookupDialogMultipleSelect: function(value) {
        this.$1h_2 = value;
        return value
    },
    isEqual: function(value1, value2) { return !Mscrm.LookupAttribute.itemsDifferent(value1, value2) },
    get_hasValue: function() {
        for (var $v_0 = false, $v_1 = 0;
            $v_1 < this.$T_2.length && !$v_0;
            $v_1++
        ) $v_0 = !IsNull(this.$T_2[$v_1]) && !IsNull(this.$T_2[$v_1].get_dataValue());
        return $v_0
    },
    $3x_1: function($p0) {
        Mscrm.FormDataAttribute.prototype.$3x_1.call(this, $p0);
        for (var $v_0 = this.$Q_1, $v_1 = 0; $v_1 < this.$T_2.length; $v_1++) this.$T_2[$v_1].set_defaultValue($v_0)
    },
    $4b_1: function($p0, $p1) {
        Mscrm.FormDataAttribute.prototype.$4b_1.call(this, $p0, $p1);
        Array.add(this.$T_2, Mscrm.FormControlInputBehavior.GetBehavior($p1.id));
        if (this
            .$4_1 ===
            "ownerid" &&
            !(this.$n_1 & this.$1P_1))
            if (Mscrm.UIControl.isInstanceOfType($p0) && !$p0.get_disabled()) this.$n_1 |= this.$1P_1
    },
    deserialize: function(attributeNode) {
        var $v_0 = XUI.Xml.DomUtils.GetFirstChild(attributeNode);
        if (!$v_0) return null;
        else if ($v_0.nodeType === 3) {
            var $v_1 = new LookupControlItem;
            $v_1.id = XUI.Xml.GetText(attributeNode);
            $v_1.name = XUI.Xml.GetText(attributeNode.attributes.getNamedItem("name"));
            $v_1.type = XUI.Xml.GetText(attributeNode.attributes.getNamedItem("type"));
            return [$v_1]
        } else {
            for (var $v_2 = [], $v_3 = attributeNode.childNodes, $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                var $v_5 = $v_3[$v_4], $v_6 = new LookupControlItem;
                switch ($v_5.nodeName) {
                case "item":
                    $v_6.id = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5, "id", null));
                    $v_6.name = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5, "name", null));
                    $v_6.type = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5, "type", null));
                    Array.add($v_2, $v_6);
                    break;
                case "activityparty":
                    var $v_7 = XUI.Xml.SelectSingleNode($v_5, "partyid", null);
                    if ($v_7) {
                        $v_6.id = XUI.Xml.GetText($v_7);
                        $v_6.name = XUI.Xml.GetText($v_7.attributes.getNamedItem("name"));
                        $v_6.type = XUI.Xml.GetText($v_7.attributes.getNamedItem("type"))
                    } else {
                        var $v_A = XUI.Xml.SelectSingleNode($v_5, "addressused", null);
                        if ($v_A) {
                            $v_6.data = XUI.Xml.GetText($v_A);
                            $v_6.name = XUI.Xml.GetText($v_A);
                            $v_6.type = "9206"
                        }
                    }
                    var $v_8 = XUI.Xml.SelectSingleNode($v_5, "effort", null);
                    if ($v_8) $v_6.effort = XUI.Xml.GetText($v_8);
                    var $v_9 = XUI.Xml.SelectSingleNode($v_5, "resourcespecid", null);
                    if ($v_9) $v_6.resourceSpecId = XUI.Xml.GetText($v_9);
                    Array.add($v_2, $v_6);
                    break;
                default:
                    break
                }
            }
            return $v_2.length > 0 ? $v_2 : null
        }
    },
    initializeFromDomElement: function(element) {
        Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this, element);
        var $v_0 = element.getAttribute("lookupstyle");
        if (!isNullOrEmptyString($v_0))
            switch ($v_0) {
            case "single":
                this.$s_2 = 1;
                break;
            case "multi":
                this.$s_2 = 2;
                break;
            case "subject":
                this.$s_2 = 3;
                break;
            default:
                break
            }
        var $v_1 = element.getAttribute("lookupDialogMultipleSelect");
        if (!isNullOrEmptyString($v_1))
            switch ($v_1) {
            case "0":
                this.$1h_2 = false;
                break;
            case "1":
                this.$1h_2 = true;
                break
            }
    },
    dispose: function() {
        this.$T_2 = null;
        Mscrm.FormDataAttribute.prototype.dispose.call(this)
    },
    preProcessValue: function(value) {
        var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this, value);
        if ($v_0)
            if (!$v_0.length) $v_0 = null;
            else {
                if (this.$s_2 === 1 && $v_0.length > 1) $v_0 = [$v_0[0]];
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    var $v_2 = $v_0[$v_1];
                    $v_2.entityType = $v_2.typename
                }
            }
        return $v_0
    },
    serializeInternal: function(writer) {
        var $v_0 = this.$T_2[0];
        writer.append($v_0.getDataXml(this.$4_1))
    }
};
Mscrm.NumberAttribute = function() {
    this.$$d_$5v_2 = Function.createDelegate(this, this.$5v_2);
    Mscrm.NumberAttribute.initializeBase(this);
    this.$N_1 = "integer"
};
Mscrm.NumberAttribute.$75 = function($p0, $p1) {
    if (IsNull($p1.$5_1)) return new Mscrm.ValidationResult(true, null);
    var $v_0 = $p1.$5_1, $v_1 = $p0;
    if (typeof $v_0 !== "number" || $v_0 < $v_1.$m_2 || $v_1.$l_2 < $v_0) {
        var $v_2 = LOCID_DURATION_BADTYPE,
            $v_3 = String.format($v_2,
                Mscrm.NumberUtility.addFormatting($v_1.$m_2, $v_1.$R_2),
                Mscrm.NumberUtility.addFormatting($v_1.$l_2, $v_1.$R_2));
        return new Mscrm.ValidationResult(false, $v_3)
    }
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.NumberAttribute.$79 = function($p0, $p1) {
    if (IsNull($p1.$5_1)) return new Mscrm.ValidationResult(true, null);
    if (typeof $p1.$5_1 !== "number") {
        var $v_2 = $p0.$F_1 === "duration" ? LOCID_DEVERROR_BADDATATYPE_INT : LOCID_DEVERROR_BADDATATYPE_INT;
        return new Mscrm.ValidationResult(false, LOCID_DEVERROR_BADDATATYPE_INT)
    }
    var $v_0 = $p1.$5_1, $v_1 = $p0;
    if ($v_0 < $v_1.$m_2 || $v_1.$l_2 < $v_0) {
        var $v_3 = $v_1.get_metadataType() === "integer" ? LOCID_NUMBER_RANGE_MASK : LOCID_FLOAT_RANGE_MASK,
            $v_4 = String.format($v_3,
                Mscrm.NumberUtility.addFormatting($v_1.$m_2, $v_1.$R_2),
                Mscrm.NumberUtility.addFormatting($v_1.$l_2, $v_1.$R_2));
        return new Mscrm.ValidationResult(false, $v_4)
    }
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.NumberAttribute.prototype = {
    $l_2: null,
    $m_2: null,
    $1Z_2: 0,
    $R_2: 0,
    $1n_2: null,
    $Z_2: null,
    get_max: function() { return this.$l_2 },
    set_max: function(value) {
        this.$l_2 = value;
        return value
    },
    get_min: function() { return this.$m_2 },
    set_min: function(value) {
        this.$m_2 = value;
        return value
    },
    get_precision: function() { return this.$R_2 },
    set_precision: function(value) {
        if (!IsNull(value) && Number === Object.getType(value) && value >= 0)
            if (!this.$1Z_2) this.$R_2 = Math.round(value);
            else this.$R_2 = Math.min(Math.round(value), this.$1Z_2);
        !IsNull(this.$Z_2) && this.$Z_2.set_precision(this.$R_2);
        return value
    },
    getWrapperInternal: function() { return new Mscrm.NumberAttributeWrapper(this) },
    deserialize: function(attributeNode) { return this.preProcessValue(parseFloat(XUI.Xml.GetText(attributeNode))) },
    initializeFromDomElement: function(element) {
        Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this, element);
        this.$Z_2 = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
        if (Sys.UI.DomElement.containsCssClass(element, "ms-crm-Duration")) {
            this.add_validate(Mscrm.NumberAttribute.$75);
            this.$m_2 = parseInt(element.getAttribute("MinMinutes"), 10);
            this.$l_2 = parseInt(element.getAttribute("MaxMinutes"), 10);
            this.$R_2 = 0;
            this.$N_1 = "integer"
        } else if (Sys.UI.DomElement.containsCssClass(element, "ms-crm-AccessRights")) this.$N_1 = "integer";
        else {
            this.add_validate(Mscrm.NumberAttribute.$79);
            this.$m_2 = this.$Z_2.get_min();
            this.$l_2 = this.$Z_2.get_max();
            this.$R_2 = this.$Z_2.get_precision();
            var $v_0 = this.$Z_2.get_dataType();
            switch ($v_0) {
            case "float":
                $v_0 = "double";
                this.$1Z_2 = 5;
                break;
            case "int":
                $v_0 = "integer";
                IsNull(this.$F_1) && this.set_format("none");
                break;
            case "decimal":
                this.$1Z_2 = 10;
                break;
            case "money":
                this.$1Z_2 = 4;
                break;
            default:
                break
            }
            this.$N_1 = $v_0;
            this.$1n_2 = this.$$d_$5v_2;
            this.$Z_2.add_precisionChange(this.$1n_2)
        }
    },
    dispose: function() {
        if (!IsNull(this.$Z_2) && !this.$Z_2.get_isDisposed() && !IsNull(this.$1n_2)) {
            this.$Z_2.remove_precisionChange(this.$1n_2);
            this.$1n_2 = null;
            this.$Z_2 = null
        }
        Mscrm.FormDataAttribute.prototype.dispose.call(this)
    },
    preProcessValue: function(value) {
        var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this, value);
        if (!IsNull($v_0))
            if (this.get_metadataType() === "integer") $v_0 = Math.floor($v_0);
            else {
                var $v_1 = 1;
                if (this.$R_2 > 0) for (var $v_2 = 0; $v_2 < this.$R_2; $v_2++) $v_1 *= 10;
                $v_0 = Math.round($v_0 * $v_1) / $v_1
            }
        return $v_0
    },
    $5v_2: function($p0, $p1) { this.$R_2 = $p1.precision }
};
Mscrm.OptionSetAttribute = function() {
    Mscrm.OptionSetAttribute.initializeBase(this);
    this.$N_1 = "optionset";
    this.add_validate(Mscrm.OptionSetAttribute.$11);
    this.$29_2 = true
};
Mscrm.OptionSetAttribute.$6M = function($p0, $p1) {
    for (var $v_0 = $p0.getElementsByTagName("INPUT"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1], $v_3 = XUI.Html.DomUtils.GetNextSibling($v_2);
        $p1[$v_2.value] = XUI.Html.GetText($v_3)
    }
};
Mscrm.OptionSetAttribute.$6L = function($p0, $p1) {
    for (var $v_0 = 2, $v_1 = 0; $v_1 < $v_0; $v_1++) {
        var $v_2 = $v_1.toString(10);
        $p1[$v_2] = $p0.getAttribute(String.format("option_{0}", $v_2))
    }
};
Mscrm.OptionSetAttribute.$11 = function($p0, $p1) {
    if (IsNull($p1.$5_1)) return new Mscrm.ValidationResult(true, null);
    var $v_0 = typeof $p1.$5_1;
    if ($v_0 !== "string" && $v_0 !== "number" && $v_0 !== "boolean"
    ) return new Mscrm.ValidationResult(false, LOCID_DEVERROR_BADTYPE_PICKLIST);
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.OptionSetAttribute.prototype = {
    $O_2: null,
    $1f_2: null,
    $29_2: false,
    $3D_2: null,
    get_$2m_2: function() {
        !this.$p_1 && this.editViewControlInitializer();
        return this.$O_2
    },
    get_formattedValue: function() {
        if (this.$p_1) {
            var $v_0 = this.get_value();
            return IsNull($v_0) ? "" : this.get_$2m_2()[$v_0]
        } else return this.$3D_2
    },
    set_formattedValue: function(value) {
        if (!this.$p_1) this.$3D_2 = value;
        return value
    },
    get_isNumberCheckRequired: function() { return this.$29_2 },
    set_isNumberCheckRequired: function(value) {
        this.$29_2 = value;
        return value
    },
    get_isDirty: function() {
        if (this.isAttributeForBulkEdit())
            if (IsNull(this.getValue())) return false;
            else return true;
        else return Mscrm.FormDataAttribute.prototype.get_isDirty.call(this)
    },
    get_selectedOption: function() {
        var $v_0 = this.get_value();
        return IsNull($v_0) ? null : new Xrm.OptionSetItem($v_0, this.get_formattedValue())
    },
    get_options: function() {
        var $v_0 = [], $$dict_2 = this.get_$2m_2();
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            Array.add($v_0, new Xrm.OptionSetItem($v_1.key, $v_1.value))
        }
        return $v_0
    },
    set_options: function(value) {
        if (IsNull(this.$O_2)) this.$O_2 = {};
        this.$6j_2(this.$O_2);
        for (var $v_0 = value, $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            this.$O_2[$v_1.value.toString()] = $v_1.text
        }
        return value
    },
    getOption: function(value) {
        var $v_0 = this.get_$2m_2()[value.toString()];
        if ($v_0) return new Xrm.OptionSetItem(value, $v_0);
        return null
    },
    addOption: function(optionSetItem, placement) {
        this.tryAddOption(optionSetItem.value.toString(), optionSetItem.text)
    },
    removeOption: function(value) { delete this.$O_2[value.toString()] },
    clearOptions: function() { this.$O_2 = {} },
    tryAddOption: function(value, text) {
        if (isNullOrEmptyString(value)) return false;
        if (typeof value === "string") var $v_0 = parseInt(value, 10);
        if (!IsNull(this.$O_2) && !(value in this.$O_2)) {
            this.$O_2[value] = text;
            return true
        }
        return false
    },
    deserialize: function(attributeNode) { return this.preProcessValue(parseInt(XUI.Xml.GetText(attributeNode), 10)) },
    getWrapperInternal: function() { return new Mscrm.OptionSetAttributeWrapper(this) },
    initializeFromDomElement: function(element) {
        Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this, element);
        this.$O_2 = {};
        if (element.tagName === "SELECT") this.loadOptionsFromSelectControl(element);
        else if (element.tagName === "DIV") Mscrm.OptionSetAttribute.$6M(element, this.$O_2);
        else element.tagName === "INPUT" && Mscrm.OptionSetAttribute.$6L(element, this.$O_2)
    },
    preProcessValue: function(value) {
        var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this, value);
        if (!IsNull($v_0)) {
            if (typeof $v_0 === "boolean") $v_0 = $v_0 ? 1 : 0;
            if (this.$29_2) {
                if (typeof $v_0 === "string") $v_0 = parseInt($v_0, 10);
                if (IsNull(this.get_$2m_2()[$v_0])) $v_0 = null
            }
        }
        return $v_0
    },
    loadOptionsFromSelectControl: function(element) {
        this.$O_2 = {};
        for (var $v_0 = element.options, $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1], $v_3 = isNullOrEmptyString($v_2.value) ? null : $v_2.value;
            this.$O_2[$v_3] = $v_2.text
        }
        if (!IsNull(window
                .RecordData) &&
            !IsNull(window.RecordData[this.$4_1])) this.$1f_2 = window.RecordData[this.$4_1].invariant
    },
    get_invariantText: function() { return this.$1f_2 },
    set_invariantText: function(value) {
        this.$1f_2 = value;
        return value
    },
    resetValueWithDirtyCheck: function(value, needDirtyCheck) {
        var $v_0 = Mscrm.FormDataAttribute.prototype.resetValueWithDirtyCheck.call(this, value, needDirtyCheck);
        if ($v_0 && !IsNull(value)) this.$1f_2 = value.invariant;
        return $v_0
    },
    $6j_2: function($p0) {
        var $$dict_2 = $p0;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            delete $p0[$v_0.key]
        }
    }
};
Mscrm.RemainderData = function($p0) { this.$3U_0 = $p0 };
Mscrm.RemainderData.prototype = {
    $3U_0: null,
    hasDataToSerialize: function($p0) { return false },
    serialize: function($p0, $p1) { $p0.append(this.$3U_0) }
};
Mscrm.TextAttribute = function() {
    Mscrm.TextAttribute.initializeBase(this);
    this.add_validate(Mscrm.TextAttribute.$7A)
};
Mscrm.TextAttribute.$7A = function($p0, $p1) {
    if (IsNull(window.event) || IsNull(window.event.returnValue) || window.event.returnValue) {
        if (IsNull($p1.$5_1)) return new Mscrm.ValidationResult(true, null);
        if (typeof $p1.$5_1 !== "string") return new Mscrm.ValidationResult(false, LOCID_DEVERROR_BADTYPE_STRING);
        var $v_0 = $p1.$5_1, $v_1 = $p0;
        if (!$v_1.$3J_2)
            if ($v_0 && Mscrm.Utilities.trim($v_0, null).length > $v_1.$g_2
            ) return new Mscrm.ValidationResult(false, String.format(LOCID_DEVERROR_TOO_LONG, $v_1.$g_2))
    }
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.TextAttribute.prototype = {
    $3B_2: null,
    $g_2: 0,
    $3J_2: false,
    get_maxLength: function() { return this.$g_2 },
    set_maxLength: function(value) {
        this.$g_2 = value;
        return value
    },
    deserialize: function(attributeNode) {
        if (this.$3B_2 !== "bit") {
            if (Mscrm.Utilities.isFirefox())
                !IsNull(attributeNode) && !IsNull(attributeNode.normalize) && attributeNode.normalize();
            return this.preProcessValue(XUI.Xml.GetText(attributeNode))
        }
        return Boolean.parse(XUI.Xml.GetText(attributeNode)) ? "1" : "0"
    },
    isEqual: function(value1, value2) {
        var $v_0 = Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines(this.preProcessValue(value1)),
            $v_1 = Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines(this.preProcessValue(value2));
        return $v_0 === $v_1
    },
    getWrapperInternal: function() { return new Mscrm.TextAttributeWrapper(this) },
    initializeFromDomElement: function(element) {
        Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this, element);
        if (element.tagName === "TEXTAREA" && isNullOrEmptyString(this.$F_1)) {
            this.$N_1 = "memo";
            this.$g_2 = parseInt(element.attributes.getNamedItem("maxlength").value, 10);
            this.$3J_2 = true
        } else {
            this.$N_1 = "string";
            if (element.type === "hidden") {
                var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
                this.$3B_2 = $v_0.get_attributeType();
                this.$g_2 = Number.MAX_VALUE
            } else if (!IsNull(element.attributes
                .getNamedItem("maxlength")))
                this.$g_2 = parseInt(element.attributes.getNamedItem("maxlength").value, 10)
        }
    },
    preProcessValue: function(value) {
        var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this, value);
        if (!IsNull($v_0)) {
            $v_0 = Mscrm.Utilities.trim($v_0, null);
            if (!$v_0.length) $v_0 = null
        }
        return $v_0
    }
};
Mscrm.TickerAttribute = function() { Mscrm.TickerAttribute.initializeBase(this) };
Mscrm.TickerAttribute.prototype = {
    preProcessValue: function(value) {
        var $v_0 = Mscrm.TextAttribute.prototype.preProcessValue.call(this, value);
        if ($v_0) $v_0 = $v_0.toUpperCase();
        return $v_0
    }
};
Mscrm.UrlAttribute = function() {
    Mscrm.UrlAttribute.initializeBase(this);
    this.add_validate(Mscrm.UrlAttribute.$7B)
};
Mscrm.UrlAttribute.$7B = function($p0, $p1) {
    if (IsNull($p1.$5_1)) return new Mscrm.ValidationResult(true, null);
    var $v_0 = Mscrm.Utilities.trim($p1.$5_1, null);
    if ($v_0.length > 0) {
        var $v_1 = 2;
        if (validateUrlProtocol($v_0) === $v_1) return new Mscrm.ValidationResult(false, LOCID_URLCTRL_INVALID_PROTOCOL)
    }
    return new Mscrm.ValidationResult(true, null)
};
Mscrm.UrlAttribute.prototype = {
    preProcessValue: function(value) {
        var $v_0 = Mscrm.TextAttribute.prototype.preProcessValue.call(this, value);
        if ($v_0) {
            var $v_1 = 0;
            if (validateUrlProtocol($v_0) === $v_1) {
                var $v_2 = $v_0.toLowerCase();
                if (!$v_2.startsWith("http://") && !$v_2.startsWith("https://")) {
                    $v_0 = "http://" + $v_0;
                    if ($v_0.length > this.$g_2) $v_0 = $v_0.substr(0, this.$g_2)
                }
            }
        }
        return $v_0
    }
};
Mscrm.ValidationEventArgs = function(newValue, type) {
    Mscrm.ValidationEventArgs.initializeBase(this);
    this.$5_1 = newValue;
    this.$2E_1 = type
};
Mscrm.ValidationEventArgs.prototype = {
    $5_1: null,
    $2E_1: 0,
    get_value: function() { return this.$5_1 },
    get_type: function() { return this.$2E_1 }
};

function changeState(action, objectType, formEventId, objectSubType) {
    Mscrm.FormAction.changeState(action, objectType, formEventId, objectSubType)
}

function addToQueue(objectType) { Mscrm.FormAction.addToQueue(objectType) }

function assignObject(objectType) { Mscrm.FormAction.assignObject(objectType) }

function onActionMenuClick(action, objectType, objectSubType) {
    return Mscrm.FormAction.onActionMenuClick(action, objectType, objectSubType)
}

function SendFormShortcut(isThroughEmail, entityTitle) {
    Mscrm.FormAction.sendFormShortcut(isThroughEmail, entityTitle)
}

function openRecordInNewWindow(objectType, formControl) {
    Mscrm.FormAction.openRecordInNewWindow(objectType, formControl)
}

Mscrm.FormAction = function() {};
Mscrm.FormAction.addToQueue = function(objectType) { Mscrm.CommandBarActions.addToQueue(objectType) };
Mscrm.FormAction.changeStateLegacy = function(action, objectType, formEventId, objectSubtype) {
    var $v_0 = $find("crmForm");
    if (!$v_0.IsValid(false)) return;
    var $v_1 = [action, formEventId, $v_0],
        $v_2 = Mscrm.Utilities.createCallbackFunctionObject("callbackArgumentFunc", Mscrm.FormAction, $v_1, false);
    Mscrm.FormAction.onActionMenuClick(action, objectType, objectSubtype, $v_2)
};
Mscrm.FormAction.callbackArgumentFunc = function(result, action, formEventId, crmForm) {
    if (result) {
        var $v_0 = result["iStateCode"],
            $v_1 = Mscrm.PostBackUtil.createHiddenInput("newStateCode", $v_0 ? $v_0.toString() : "-1"),
            $v_2 = result["iStatusCode"],
            $v_3 = Mscrm.PostBackUtil.createHiddenInput("newStatusCode", $v_2 ? $v_2.toString() : "-1");
        if (action === "deactivatecampactivity") {
            var $v_6 = result["iStartDate"];
            if (IsNull($v_6)) $v_6 = "";
            Mscrm.PostBackUtil.createHiddenInput("acStartDate", $v_6);
            var $v_7 = result["iEndDate"];
            if (IsNull($v_7)) $v_7 = "";
            Mscrm.PostBackUtil.createHiddenInput("acEndDate", $v_7)
        }
        var $v_4 = window.designerLoaded, $v_5 = crmForm.get_objectTypeCode() === 4703;
        if (action === "activate")
            !IsNull($v_4) &&
                $v_5 &&
                Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.UnifiedProcessDesigner") &&
                window.designerActivate();
        if (action === "deactivate")
            !IsNull($v_4) &&
                $v_5 &&
                Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.UnifiedProcessDesigner") &&
                window.designerDeactivate();
        if (!crmForm.SubmitCrmForm(formEventId, true, true, false, false)) {
            Mscrm.PostBackUtil.deleteInput($v_1);
            Mscrm.PostBackUtil.deleteInput($v_3)
        }
    }
};
Mscrm.FormAction.launchOnDemandWorkflowForm = function(objectType, workflowId) {
    Mscrm.CommandBarActions.launchOnDemandWorkflowForm(objectType, workflowId)
};
Mscrm.FormAction.setObjectIdAndRunWorkflow = function(lookupItems, objectType) {
    var $v_0;
    if (IsNull(lookupItems) || !lookupItems.items.length) return;
    $v_0 = lookupItems.items[0].id;
    Mscrm.FormAction.runWorkflow($v_0, objectType);
    return
};
Mscrm.FormAction.runWorkflow = function(itemObjectId, objectType) {
    var $v_0 = Mscrm.FormAction.$2K(null), $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_runworkflow.aspx");
    $v_1.get_query()["iObjType"] = objectType;
    $v_1.get_query()["iTotal"] = "1";
    $v_1.get_query()["wfId"] = itemObjectId;
    $v_1.get_query()["sIds"] = $v_0 + ";";
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 230;
    $v_2.width = 550;
    Xrm.Internal.openDialog($v_1.toString(), $v_2, [$v_0], null, Mscrm.FormAction.closeCallback)
};
Mscrm.FormAction.closeCallback = function(result) {
    Mscrm.InlineDialogUtility.close("InlineDialog");
    return result
};
Mscrm.FormAction.assignObjectLegacy = function(objectType) {
    if (typeof objectType !== "number") objectType = parseInt(objectType, 10);
    if (!Mscrm.InternalUtilities.DialogUtility.isMDDConverted("assign", Xrm.Internal.getEntityName(objectType))) {
        var $v_0, $v_1, $v_2, $v_3 = 47, $v_4 = $get("crmFormSubmit"), $v_5 = Mscrm.FormAction.$2K($v_4);
        $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_frmassign.aspx");
        $v_0.get_query()["pId"] = $v_5;
        $v_0.get_query()["pType"] = $get("crmFormSubmitObjectType").value;
        $v_0.get_query()["iObjType"] = objectType;
        $v_0.get_query()["iTotal"] = "1";
        $v_1 = 456;
        $v_2 = objectType !== 4703 ? 285 : 290;
        var $v_6 = [objectType, $v_3], $v_7 = new Mscrm.CrmDialog($v_0, [$v_5], $v_1, $v_2, null);
        $v_7.setCallbackInfo("assignObjectAction", Mscrm.FormAction, $v_6);
        $v_7.show()
    } else Mscrm.CommandBarActions.assignObject(objectType)
};
Mscrm.FormAction.assignObjectAction = function(returnValue, objectType, eventCode) {
    if (!returnValue) return;
    var $v_0 = returnValue["OwnerId"];
    if ($v_0) {
        var $v_1 = returnValue["OwnerType"],
            $v_2 = Mscrm.PostBackUtil.createHiddenInput("assignOwnerId", $v_0),
            $v_3 = Mscrm.PostBackUtil.createHiddenInput("assignOwnerType", $v_1),
            $v_4 = new LookupControlItem;
        $v_4.id = $v_0;
        $v_4.type = $v_1;
        $v_4.name = returnValue["OwnerName"];
        var $v_5 = [$v_4],
            $v_6 = Mscrm.FormUtility.getCrmFormElement(objectType),
            $v_7 = Mscrm.FormControlInputBehavior.GetBehavior("ownerid");
        $v_7.set_dataValue($v_5);
        $v_7 && $v_7.get_element().setAttribute("lookupdisabled", "false");
        if (!$v_6.SubmitCrmForm(eventCode, true, true, false, false)) {
            Mscrm.PostBackUtil.deleteInput($v_2);
            Mscrm.PostBackUtil.deleteInput($v_3)
        }
    }
};
Mscrm.FormAction.resolveCase = function(caseId, gridControl) { return Mscrm.FormAction.$4y(caseId, gridControl) };
Mscrm.FormAction.$4y = function($p0, $p1) {
    var $v_0 = false, $v_1 = Mscrm.CrmUri.create("/CS/cases/dlg_ConfirmResolve.aspx");
    $v_1.get_query()["pId"] = $p0;
    $v_1.get_query()["pType"] = 112;
    var $v_2 = [$p0, $p1],
        $v_3 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterConfirmCancel",
            Mscrm.FormAction,
            $v_2,
            false);
    switch (Mscrm.FormAction.isValidStatusReasonTransition($p0, 1)) {
    case 1:
        $v_1.get_query()["reason"] = "novalidstatustransition";
        var $v_4 = new Mscrm.CrmDialog($v_1, window.document, 600, 250, null);
        $v_4.setCallbackReference($v_3);
        $v_0 = $v_4.show();
        break;
    case 2:
        $v_1.get_query()["reason"] = "activeactivities";
        var $v_5 = new Mscrm.CrmDialog($v_1, window.document, 600, 250, null);
        $v_5.setCallbackReference($v_3);
        $v_0 = $v_5.show();
        break;
    case 3:
        $v_0 = Mscrm.FormAction.performActionAfterConfirmCancel(true, $p0, $p1);
        break
    }
    return $v_0
};
Mscrm.FormAction.isValidStateTransition = function(caseId) {
    var $v_0 = new RemoteCommand("CustomerService", "IsValidStateTransition");
    $v_0.SetParameter("incidentId", caseId);
    var $v_1 = $v_0.Execute();
    return $v_1.Success && $v_1.ReturnValue
};
Mscrm.FormAction.isValidStatusReasonTransition = function(caseId, toStateCode) {
    var $v_0 = new RemoteCommand("CustomerService", "IsValidStatusReasonTransition");
    $v_0.SetParameter("incidentId", caseId);
    $v_0.SetParameter("toStateCode", toStateCode);
    var $v_1 = $v_0.Execute();
    return $v_1.ReturnValue
};
Mscrm.FormAction.performActionAfterConfirmCancel = function(returnValue, caseId, gridControl) {
    var $v_0 = false;
    if (returnValue) {
        var $v_1 = Mscrm.CrmUri.create("/CS/cases/dlg_closecase.aspx");
        $v_1.get_query()["pId"] = caseId;
        $v_1.get_query()["pType"] = 112;
        var $v_2 = [gridControl],
            $v_3 = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterResolveCase", Mscrm.FormAction, $v_2, false),
            $v_4 = new Mscrm.CrmDialog($v_1, window.document, 400, 391, null);
        $v_4.setCallbackReference($v_3);
        $v_0 = $v_4.show()
    }
    return $v_0
};
Mscrm.FormAction.performActionAfterResolveCase = function(returnValue, gridControl) {
    var $v_0 = false;
    if (returnValue) {
        var $v_1 = new RemoteCommand("CustomerService", "ResolveCase");
        $v_1.SetParameter("activityXml", returnValue.ActivityXml);
        $v_1.SetParameter("newStatus", returnValue.StatusCode);
        var $v_2 = $v_1.Execute();
        $v_0 = $v_2.Success;
        gridControl && gridControl.refresh()
    }
    return $v_0
};
Mscrm.FormAction.runScript = function(objectTypeCode, entityName) {
    Mscrm.CommandBarActions.runScript(objectTypeCode, entityName)
};
Mscrm.FormAction.runDialog = function(lookupItems, objectId, entityName) {
    if (!IsNull(lookupItems))
        if (0 !== lookupItems.items.length) {
            var $v_0 = lookupItems.items[0].id, $v_1 = Mscrm.CrmUri.create("/cs/dialog/rundialog.aspx");
            $v_1.get_query()["DialogId"] = $v_0;
            $v_1.get_query()["ObjectId"] = objectId;
            $v_1.get_query()["EntityName"] = entityName;
            openStdWin($v_1, buildWinName(null), 615, 480, null)
        }
};
Mscrm.FormAction.onActionMenuClick = function(action, objectType, objectSubtype, callbackArgumentRef) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        return Mscrm.CommandBarActions.onActionMenuClick(action, objectType);
    else {
        var $v_0 = {};
        $v_0["action"] = action;
        $v_0["objectType"] = objectType;
        $v_0["objectSubtype"] = objectSubtype;
        $v_0["callbackArgumentRef"] = callbackArgumentRef;
        return Mscrm.FormAction.handleActionMenuClick($v_0)
    }
};
Mscrm.FormAction.handleActionMenuClick = function(clickContext) {
    var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = null, $v_4 = null;
    if ("action" in clickContext) $v_0 = clickContext["action"];
    if ("objectType" in clickContext) $v_1 = clickContext["objectType"];
    if ("objectSubtype" in clickContext) $v_2 = clickContext["objectSubtype"];
    if ("callbackArgumentRef" in clickContext) $v_3 = clickContext["callbackArgumentRef"];
    if ("recordId" in clickContext) $v_4 = clickContext["recordId"];
    if (Mscrm.Utilities.isIosDevice() && "webmailmerge" === $v_0) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return null
    }
    if (typeof $v_1 !== "number") $v_1 = parseInt($v_1, 10);
    var $v_5 = 400,
        $v_6 = 200,
        $v_7 = false,
        $v_8 = false,
        $v_9 = true,
        $v_A = null,
        $v_B = null,
        $v_C = null,
        $v_D = false,
        $v_E = $find("crmForm"),
        $v_F = null;
    if (isNullOrEmptyString($v_4))
        if (!IsNull(Xrm.Page.data)) $v_F = Xrm.Page.data.entity.getId();
        else {
            var $v_Q = $get("crmFormSubmit");
            if ($v_1 !== 9333 && !IsNull($v_Q)) $v_F = Mscrm.FormAction.$2K($v_Q);
            else $v_F = $get("crmFormSubmitId").value
        }
    else $v_F = $v_4;
    var $v_G = [$v_F], $v_H = Mscrm.CrmUri.create("/_grid/cmds/dlg_" + CrmEncodeDecode.CrmUrlEncode($v_0) + ".aspx");
    $v_H.get_query()["iObjType"] = $v_1;
    $v_H.get_query()["iTotal"] = "1";
    $v_H.get_query()["sIds"] = $v_F;
    if (!IsNull($v_2)) $v_H.get_query()["iObjSubType"] = $v_2;
    if (!$v_E && ($v_1 === 9100 || $v_1 === 9333)) $v_E = $find("crmFormSubmit");
    switch ($v_0) {
    case "applyrule":
        $v_5 = 400;
        $v_6 = 275;
        break;
    case "approve_emailaddress":
        Xrm.Page.data.entity.save();
        $v_H = Mscrm.CrmUri.create("/_grid/cmds/dlg_" + CrmEncodeDecode.CrmUrlEncode("approve_emailaddress") + ".aspx");
        $v_H.get_query()["iObjType"] = $v_1;
        $v_H.get_query()["iTotal"] = "1";
        $v_H.get_query()["sIds"] = $v_F;
        $v_H.get_query()["customAction"] = "approveemail";
        $v_D = true;
        $v_8 = true;
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 500;
        $v_6 = 250;
        break;
    case "reject_emailaddress":
        Xrm.Page.data.entity.save();
        $v_H = Mscrm.CrmUri.create("/_grid/cmds/dlg_" + CrmEncodeDecode.CrmUrlEncode("approve_emailaddress") + ".aspx");
        $v_H.get_query()["iObjType"] = $v_1;
        $v_H.get_query()["iTotal"] = "1";
        $v_H.get_query()["sIds"] = $v_F;
        $v_H.get_query()["customAction"] = "rejectemail";
        $v_D = true;
        $v_8 = true;
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 450;
        $v_6 = 200;
        break;
    case "approve_user":
    case "reject_user":
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 500;
        $v_6 = 230;
        $v_D = true;
        $v_8 = true;
        break;
    case "approve_queue":
    case "reject_queue":
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 450;
        $v_6 = 200;
        $v_D = true;
        $v_8 = true;
        break;
    case "assign":
        $v_5 = 456;
        $v_6 = 260;
        $v_7 = true;
        $v_D = true;
        break;
    case "actsetrespon":
        $v_5 = 456;
        $v_6 = 310;
        break;
    case "changeorg":
        $v_5 = 420;
        $v_6 = 325;
        if ($v_1 === 8 || $v_1 === 9) $v_8 = true;
        else $v_7 = true;
        $v_D = true;
        break;
    case "changecaptain":
        $v_5 = 400;
        $v_6 = 225;
        $v_7 = true;
        break;
    case "changeparent":
        $v_5 = 400;
        $v_6 = 245;
        $v_8 = true;
        $v_D = true;
        break;
    case "changeposition":
        $v_5 = 400;
        $v_6 = 245;
        $v_8 = true;
        $v_D = true;
        break;
    case "converttoaccessteam":
        $v_5 = 450;
        $v_6 = 245;
        $v_8 = true;
        $v_D = true;
        break;
    case "delete":
        $v_5 = 450;
        $v_6 = 205;
        $v_7 = true;
        switch ($v_1) {
        case 1:
        case 2:
        case 4201:
        case 4251:
            Mscrm.CommandBarActions.deletePrimaryRecord($v_F, Xrm.Page.data.entity.getEntityName());
            break;
        case 4003:
            var $v_I = $get("calendarid", $v_E.get_element());
            $v_H.get_query()["sCalendarId"] = $v_I.value;
            $v_D = true;
            break;
        case 1083:
        case 1085:
        case 1089:
        case 1091:
            var $v_J = "", $v_K = [], $v_L = window.opener;
            if ($v_L && !$v_L.closed) {
                var $v_R = $v_L.parent;
                $v_K[0] = $v_R;
                var $v_S = $v_R.document.getElementById("crmFormSubmit");
                $v_J = Mscrm.FormAction.$2K($v_S)
            } else $v_K[0] = null;
            $v_K[1] = $v_G;
            $v_H = Mscrm.CrmUri.create("/_grid/cmds/dlg_deleteqoiproduct.aspx");
            $v_H.get_query()["iObjType"] = $v_1;
            $v_H.get_query()["iTotal"] = $v_G.length;
            $v_H.get_query()["sParentId"] = $v_J;
            $v_6 = 205;
            $v_5 = 450;
            $v_9 = true;
            $v_D = true;
            break;
        case 2020:
            $v_H = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete_queue.aspx");
            $v_H.get_query()["iObjType"] = $v_1;
            $v_H.get_query()["iTotal"] = "1";
            $v_H.get_query()["sIds"] = $v_F;
            $v_D = true;
            break;
        case 9502:
            $v_H = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete_sharepointsite.aspx");
            $v_H.get_query()["iObjType"] = $v_1;
            $v_H.get_query()["iTotal"] = "1";
            $v_5 = 570;
            $v_6 = 250;
            $v_D = true;
            break;
        case 4703:
            $v_H.get_query()["sIds"] = $v_F;
            $v_D = true;
            break;
        case 1024:
            var $v_M = Xrm.Page.getAttribute("productstructure");
            $v_H.get_query()["productStructure"] = $v_M.getValue();
            $v_D = true;
            break;
        default:
            $v_D = true;
            break
        }
        break;
    case "activate":
    case "deactivate":
        if ($v_1 === 9600 && $v_0 === "deactivate") {
            var $v_T = new RemoteCommand("GoalManagement", "GoalHasActiveChildGoals");
            $v_T.SetParameter("goalId", $v_F);
            var $v_U = $v_T.Execute();
            if ($v_U.Success) if ($v_U.ReturnValue) if (!confirm(window.LOCID_ACTIVE_CHILD_MSG)) return null
        }
        if ($v_1 === 4703)
            if ($v_H.get_query()["iObjSubType"]) $v_H.get_query()["iObjSubType"] = Mscrm.FormAction.$5b();
        if ($v_1 !== 3231) $v_H.get_query()["confirmMode"] = "1";
        else $v_8 = true;
        $v_6 = 250;
        $v_5 = 540;
        $v_D = true;
        break;
    case "deactivatecampactivity":
        $v_H.get_query()["confirmMode"] = "1";
        $v_D = true;
        $v_6 = 260;
        $v_5 = 350;
        break;
    case "role":
        $v_5 = 500;
        $v_6 = 360;
        $v_D = true;
        break;
    case "share":
        $v_5 = 800;
        $v_6 = 480;
        $v_D = true;
        break;
    case "grant":
        $v_5 = 925;
        $v_6 = 560;
        break;
    case "status":
        $v_5 = 456;
        $v_6 = 250;
        break;
    case "webmailmerge":
        $v_5 = 600;
        $v_6 = 500;
        $v_H = Mscrm.CrmUri.create("/_grid/cmds/dlg_webmailmerge.aspx");
        $v_H.get_query()["objectTypeCode"] = $v_1;
        $v_H.get_query()["Id"] = $v_F;
        var $v_N = [$v_H, $v_0, $v_1, $v_G, $v_5, $v_6, $v_7, $v_8, $v_9, $v_F, $v_E, $v_3, $v_D],
            $v_O = new Xrm.DialogOptions;
        $v_O.height = $v_6;
        $v_O.width = $v_5;
        var $v_P = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.FormAction.CallbackFunction, $v_N);
        Xrm.Internal.openDialog($v_H.toString(), $v_O, $v_N, null, $v_P);
        $v_H = null;
        break
    }
    if (Mscrm.Utilities.isModalDialogSupported() || !$v_C)
        $v_B = Mscrm.FormAction.callbackFunction($v_A,
            $v_H,
            $v_0,
            $v_1,
            $v_G,
            $v_5,
            $v_6,
            $v_7,
            $v_8,
            $v_9,
            $v_F,
            $v_E,
            $v_3,
            $v_D);
    return $v_B
};
Mscrm.FormAction.convertWorkflow = function(entityTypeCode, entityId) {
    var $v_0 = $find("crmForm");
    if (!IsNull($v_0)) {
        $v_0.SubmitCrmForm(68, true, true, false, false);
        Mscrm.Utilities.refreshParentGrid(entityTypeCode, "", entityId)
    }
};
Mscrm.FormAction.callbackFunction = function(result,
    url,
    action,
    objectType,
    ids,
    width,
    height,
    close,
    reload,
    resize,
    id,
    crmForm,
    callbackArgumentRef,
    isDialogInline) {
    var $v_0 = null;
    $v_0 = [action, objectType, close, reload, id, crmForm, callbackArgumentRef];
    isDialogInline = !IsNull(isDialogInline) && isDialogInline;
    if (isDialogInline) {
        var $v_1 = new Mscrm.CrmDialog(url, ids, width, height, null);
        $v_1.setCallbackInfo("performActionAfterSwitch", Mscrm.FormAction, $v_0);
        result = $v_1.show()
    } else {
        if (!IsNull(url)) {
            var $v_2 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterSwitch", Mscrm.FormAction, $v_0);
            result = openStdDlgWithCallback(url, ids, width, height, $v_2, resize, false, null)
        }
        if (isOutlookHostedWindow())
            return Mscrm.FormAction
                .performActionAfterSwitch(result, action, objectType, close, reload, id, crmForm, callbackArgumentRef)
    }
    return result
};
Mscrm.FormAction.performActionAfterSwitch = function(result,
    action,
    objectType,
    close,
    reload,
    id,
    crmForm,
    callbackArgumentRef) {
    if (result && close) {
        !Mscrm.Utilities.isIosDevice() && Mscrm.Utilities.refreshParentGrid(objectType, "", id);
        if (action === "delete") {
            if (!IsNull(crmForm) && !IsNull(crmForm.get_recordSetControl())) {
                crmForm.get_recordSetControl().recordDeleted();
                Mscrm.CommandBarActions.performRecordsDeletedEvent(result, id)
            } else if (typeof Mscrm.ReadFormUtilities !== "undefined" &&
                typeof Mscrm.ReadFormUtilities
                .set_forceNavigationAway !==
                "undefined") Mscrm.ReadFormUtilities.set_forceNavigationAway(true);
            else !IsNull(crmForm) && objectType !== 9333 && crmForm.detachCloseAlert();
            Mscrm.Utilities.isIosDevice() && window.top.focus()
        }
        Mscrm.Utilities.closeCurrentWindow();
        Mscrm.Utilities.isIosDevice() && Mscrm.Utilities.refreshParentGrid(objectType, "", id)
    } else if (result && reload)
        if (action === "approve_emailaddress" || action === "reject_emailaddress"
        ) Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), id, null);
        else if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) Xrm.Page.data.refresh(true);
        else {
            crmForm.SubmitCrmForm(4, true, true, false, false);
            Mscrm.Utilities.refreshParentGrid(objectType, "", id)
        }
    Mscrm.Utilities.executeFunction(callbackArgumentRef, result);
    return result
};
Mscrm.FormAction.sendFormShortcut = function(isThroughEmail, entityTitle, recordId, entityLogicalName) {
    if (!isThroughEmail && !Mscrm.Utilities.get_ieBrowserVersion()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var $v_0 = Mscrm.CrmUri.create(window.location.href);
    if (Mscrm.SessionInfo.isOutlookLaptopClient() && !Mscrm.SessionInfo.isOnline()) {
        var $v_2 = window.location.href, $v_3 = window.location.pathname;
        $v_0 = Mscrm.CrmUri.create(Mscrm.Help.concatenateUrl(window.WEB_APP_URL, $v_2.substr($v_2.indexOf($v_3))));
        $v_0.set_useOrganizationName(false)
    }
    if (!Mscrm.Utilities.isNewPageModel($v_0)) {
        $v_0 = Mscrm.Utilities.removeExtraQSParameters($v_0, Mscrm.Utilities.getRecordPageQueryStringParams());
        if ("calendar" === entityLogicalName &&
            (IsNull($v_0.get_query()["id"]) || isNullOrEmptyString($v_0.get_query()["id"])) &&
            !IsNull(recordId)) {
            $v_0.get_query()["calendarId"] = recordId;
            $v_0.get_query()["calendarType"] = 1;
            $v_0 = Mscrm.Utilities.removeExtraQSParameters($v_0, ["calendarId", "calendarType"])
        }
    } else {
        $v_0 = Mscrm.Utilities.getPageUrl($v_0, "entityrecord");
        delete $v_0.get_query().pagemode;
        if (!IsNull(recordId)) $v_0.get_query()["id"] = recordId;
        delete $v_0.get_query().extraqs;
        var $v_4 = $find("crmFormSelector");
        if ($v_4) $v_0.get_query()["extraqs"] = "formid=" + CrmEncodeDecode.CrmUrlEncode($v_4.$15_3)
    }
    var $v_1 = new Sys.StringBuilder;
    $v_1.append(entityTitle);
    $v_1.append("\r\n" + (Mscrm.Utilities.isIosDevice() ? "[" : "<"));
    $v_1.append($v_0.toString());
    $v_1.append(Mscrm.Utilities.isIosDevice() ? "]" : ">");
    if (!isThroughEmail) Mscrm.Shortcuts.copyTextToClipboard($v_1.toString(), "", window.LOCID_COPY_SHORTCUT_ERROR);
    else {
        var $v_5 = "";
        if ("opportunity" === entityLogicalName) {
            var $v_6 = $find("Pursuit_Team");
            if (!IsNull($v_6)) {
                for (var $v_7 = new Sys.StringBuilder, $v_8 = $v_6.getRecordsFromInnerGrid(false), $v_9 = 0;
                    $v_9 < $v_8.length;
                    ++$v_9) {
                    var $v_A = $v_8[$v_9][3];
                    if (!isNullOrEmptyString($v_A.getAttribute("systemuser.internalemailaddress"))) {
                        $v_7.append($v_A.getAttribute("systemuser.internalemailaddress"));
                        $v_7.append(";")
                    }
                }
                $v_5 = $v_7.toString()
            }
        }
        Mscrm.Shortcuts.openEmailForm("", entityTitle, $v_1.toString(), $v_5)
    }
};
Mscrm.FormAction.openRecordInNewWindow = function(objectType, formControl) {
    if (typeof objectType !== "number") objectType = parseInt(objectType, 10);
    var $v_0 = $get("crmFormSubmit"), $v_1 = Mscrm.FormAction.$2K($v_0), $v_2 = {};
    $v_2["etc"] = objectType;
    $v_2["id"] = $v_1;
    $v_2["pagetype"] = "entityrecord";
    $v_2["newWindow"] = true;
    if (!IsNull($v_1) && $v_1 !== "" && !IsNull(objectType)) {
        var $v_3 = "?_CreateFromType=" +
            CrmEncodeDecode.CrmUrlEncode(objectType.toString()) +
            "&_CreateFromId=" +
            CrmEncodeDecode.CrmUrlEncode($v_1);
        $v_2["queryString"] = $v_3
    }
    formControl.raiseEvent(21, $v_2)
};
Mscrm.FormAction.$2K = function($p0) {
    if (IsNull($p0)) $p0 = $get("crmFormSubmit");
    return $get("crmFormSubmitId", $p0).value
};
Mscrm.FormAction.$5b = function() {
    var $v_0 = 1, $v_1 = 3, $v_2 = $v_0, $v_3 = $get("type");
    if (!IsNull($v_3)) $v_2 = $v_3.options[$v_3.selectedIndex].value === "1" ? $v_0 : $v_1;
    return $v_2
};
Mscrm.FormAction.changeState = function(action, objectType, formEventId, objectSubtype) {
    if (!Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        Mscrm.FormAction.changeStateLegacy(action, objectType, formEventId, objectSubtype);
        return
    }
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.data.entity.getEntityName();
    Mscrm.CommandBarActions.changeState(action, $v_0, $v_1)
};
Mscrm.FormAction.assignObject = function(objectType) {
    if (!Mscrm.CommandBarActions.isMobileCompanionApp()) {
        Mscrm.FormAction.assignObjectLegacy(objectType);
        return
    }
    if (typeof objectType !== "number") objectType = parseInt(objectType, 10);
    Mscrm.CommandBarActions.assignObject(objectType)
};
Mscrm.FormControl = function(element) {
    this.$$d_$5j_4 = Function.createDelegate(this, this.$5j_4);
    this.$$d_$5k_4 = Function.createDelegate(this, this.$5k_4);
    this.$$d_$6m_4 = Function.createDelegate(this, this.$6m_4);
    this.$$d_$4f_4 = Function.createDelegate(this, this.$4f_4);
    this.$$d_Close = Function.createDelegate(this, this.Close);
    this.$$d_$5B_4 = Function.createDelegate(this, this.$5B_4);
    this.$$d_$5G_4 = Function.createDelegate(this, this.$5G_4);
    this.$$d_$5w_4 = Function.createDelegate(this, this.$5w_4);
    this.$$d_$6H_4 = Function.createDelegate(this, this.$6H_4);
    this.$$d_$6J_4 = Function.createDelegate(this, this.$6J_4);
    this.$$d_saveAndNavigate = Function.createDelegate(this, this.saveAndNavigate);
    this.$$d_$4p_4 = Function.createDelegate(this, this.$4p_4);
    this.$$d_$6V_4 = Function.createDelegate(this, this.$6V_4);
    this.$1T_4 = [];
    this.$1N_4 = [];
    this.$2G_4 = [];
    this.$1k_4 = {};
    this.$1j_4 = {};
    Mscrm.FormControl.initializeBase(this, [element]);
    this.$17_4 = this.$$d_$6V_4;
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) $addHandler(this.get_element(), "focusin", this.$17_4);
    else if (!window.UseTabletExperience) this.get_element().addEventListener("focus", this.$17_4, true);
    else this.get_element().addEventListener("touchstart", this.$17_4, true);
    window.setTimeout(this.$$d_$4p_4, 0)
};
Mscrm.FormControl.addMappedAttributeInformation = function(changedXml, mappedXmlDoc) {
    var $v_0 = !XUI.Xml.DomUtils.HasChildElements(mappedXmlDoc.documentElement);
    if (changedXml.length > 0 && !$v_0)
        for (var $v_2 = XUI.Xml.LoadXml("<changes>" + changedXml + "</changes>"),
            $v_3 = XUI.Xml.SelectNodes($v_2.documentElement, "*", null),
            $v_4 = 0,
            $v_5 = $v_3.length;
            $v_4 < $v_5;
            $v_4++) {
            var $v_6 = $v_3[$v_4];
            if ($v_6.nodeType === 1) {
                var $v_7 = XUI.Xml.SelectNodes(mappedXmlDoc.firstChild, $v_6.nodeName, null);
                !IsNull($v_7) && $v_7.length > 0 && mappedXmlDoc.firstChild.removeChild($v_7[0])
            }
        }
    var $v_1 = "";
    if (!$v_0) {
        $v_1 = XUI.Xml.XMLSerializer.serializeToString(mappedXmlDoc).replace("<mapped>", "");
        $v_1 = $v_1.replace("</mapped>", "")
    }
    return changedXml + $v_1
};
Mscrm.FormControl.getHttpPostBody = function(formElement) {
    for (var $v_0 = formElement.getElementsByTagName("input"), $v_1 = Mscrm.CrmUri.create(""), $v_3 = 0;
        $v_3 < $v_0.length;
        $v_3++) {
        var $v_4 = $v_0[$v_3].getAttribute("name"), $v_5 = $v_0[$v_3].getAttribute("value");
        if (isNullOrEmptyString($v_4)) continue;
        $v_1.setQueryParameter($v_4, $v_5)
    }
    var $v_2 = $v_1.get_queryString();
    return $v_2.substring(1, $v_2.length)
};
Mscrm.FormControl.prototype = {
    $1Q_4: false,
    $i_4: null,
    $2t_4: "crmFormSubmit",
    $u_4: false,
    $2Q_4: false,
    $1p_4: true,
    $1Y_4: false,
    $2F_4: 0,
    $1z_4: true,
    $2T_4: null,
    $2Z_4: null,
    $2X_4: null,
    $2a_4: null,
    $2V_4: null,
    $z_4: null,
    $36_4: 0,
    $17_4: null,
    confirmDialogHeight: 0,
    confirmDialogWidth: 0,
    entityTitle: null,
    entityDisplayName: null,
    pageTitle: null,
    initialize: function() {
        var $$t_1 = this, $v_0 = function() { !$$t_1.get_isDisposed() && $$t_1.setFirstElementFocus() };
        Mscrm.FormControlLite.prototype.initialize.call(this);
        this.$71_4();
        if (!IsNull(this.get_eventManager())) {
            this.get_eventManager().subscribeEvent(46, this.get_id());
            this.get_eventManager().subscribeEvent(4, this.get_id())
        }
        setPageTitle(this.pageTitle);
        if (IsNull(Mscrm.PageManager.get_instance())) window.setTimeout($v_0, 0);
        else executeFunctionDeferred($v_0, false, false)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$17_4))
            if (Sys.Browser
                .agent ===
                Sys.Browser.InternetExplorer) $removeHandler(this.get_element(), "focusin", this.$17_4);
            else this.get_element().removeEventListener("focus", this.$17_4, true);
        this.$70_4();
        Mscrm.FormControlLite.prototype.dispose.call(this)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 46:
            return this.$5r_4(parameters);
        case 4:
            return this.$5i_4(parameters)
        }
        return null
    },
    $4p_4: function() {
        if (this.get_isDisposed()) return;
        this.$3r_4();
        this.$5O_4();
        this.$4f_4()
    },
    $6V_4: function($p0) {
        var $v_0 = $p0;
        if (IsNull($v_0.rawEvent)) $v_0 = Mscrm.Utilities.eventToDomEvent($p0);
        var $v_1 = $p0.target, $v_2 = null;
        if ($v_1.className !== "ms-crm-InlineTabContainer") {
            while ($v_1 !== this.get_element() && IsNull($v_2)) {
                var $v_4 = $find($v_1.id);
                if (!IsNull($v_4))
                    if (Mscrm.IRibbonSelectionControl.isInstanceOfType($v_4)) $v_2 = $v_4;
                    else if (Mscrm.IRibbonSelectionControlProxy
                        .isInstanceOfType($v_4)) $v_2 = $v_4.get_selectionControl();
                $v_1 = $v_1.parentNode
            }
            var $v_3 = {};
            $v_3["selectedControl"] = $v_2;
            this.raiseEventWithCheck(38, $v_3)
        }
    },
    $5r_4: function($p0) {
        var $v_0 = true;
        if (this.CheckFormDirty() && this.CloseAlertAttached()) {
            $v_0 = false;
            var $v_1 = [$p0],
                $v_2 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterNavigateConfirm", this, $v_1),
                $v_3 = openStdDlgWithCallback(Mscrm.CrmUri.create("/_forms/dlg_navigateconfirm.aspx"),
                    $p0,
                    this.confirmDialogWidth,
                    this.confirmDialogHeight,
                    $v_2,
                    true,
                    false,
                    null);
            if (isOutlookHostedWindow()) {
                if (Mscrm.Utilities.get_ieBrowserVersion() < 9) delete $p0.window;
                $v_0 = this.performActionAfterNavigateConfirm($v_3, $p0)
            }
        }
        return $v_0
    },
    performActionAfterNavigateConfirm: function(returnValue, parameters) {
        var $v_0 = false;
        switch (returnValue) {
        case 0:
            $v_0 = false;
            this.$z_4 = parameters;
            this.$36_4 = 0;
            window.setTimeout(this.$$d_saveAndNavigate, 1);
            break;
        case 1:
            this.detachCloseAlert();
            $v_0 = true;
            !IsNull(parameters["callbackForNavigate"]) &&
                Mscrm.Utilities.executeFunctionIfModeless(parameters["callbackForNavigate"], parameters);
            break;
        case 2:
            if (!IsNull(parameters["windowClosing"]) && parameters["windowClosing"]) {
                $v_0 = false;
                break
            }
            $v_0 = false;
            var $v_1 = {};
            $v_1["newWindow"] = true;
            var $v_2 = Mscrm.CrmUri.create(parameters["uri"]);
            delete $v_2.get_query().pagemode;
            $v_1["uri"] = $v_2.toString();
            this.raiseEvent(21, $v_1);
            break
        }
        return $v_0
    },
    saveAndNavigate: function() {
        if (this.get_eventManager().isEventing()) {
            if (this.$36_4 >= 1e3) {
                openErrorDlg("0x80700000", null, null, 0, 0);
                this.$z_4 = null;
                return
            }
            this.$36_4 += 25;
            window.setTimeout(this.$$d_saveAndNavigate, 25);
            return
        }
        this.$z_4["isCommand"] = true;
        if (!IsNull(this.$z_4["windowClosing"]) && this.$z_4["windowClosing"]) this.$z_4["eventCode"] = 23;
        else this.$z_4["eventCode"] = 21;
        var $v_0 = {};
        $v_0["data"] = this.$z_4;
        var $v_1 = this.raiseEvent(5, $v_0);
        this.$1p_4 = false;
        this.SetDeferredCmdId($v_1[0]);
        this.Save()
    },
    $5i_4: function($p0) {
        if (!IsNull($p0) && !IsNull($p0["pageType"]) && $p0["pageType"] === "entity") {
            var $v_0 = {};
            $v_0["Id"] = this.get_objectId();
            $v_0["otc"] = this.get_objectTypeCode();
            $v_0["etn"] = this.get_objectTypeName();
            $v_0["title"] = this.entityTitle;
            $v_0["entitydisplayname"] = this.entityDisplayName;
            return $v_0
        }
        return null
    },
    $1o_4: null,
    get_primaryFieldName: function() { return this.$1o_4 },
    set_primaryFieldName: function(value) {
        this.$1o_4 = value;
        return value
    },
    get_primaryFieldValue: function() { return this.getFieldValue(this.$1o_4) },
    get_setInitialFocus: function() {
        var $v_0 = this.get_element().getAttribute("setinitialfocus");
        return IsNull($v_0) || $v_0.toLowerCase() === "true"
    },
    set_setInitialFocus: function(value) {
        this.get_element().setAttribute("setinitialfocus", value.toString().toLowerCase());
        return value
    },
    getFieldValue: function(fieldName) {
        var $v_0 = "";
        if (fieldName === "fullname") {
            var $v_1 = this.getUnformattedValue("firstname"), $v_2 = "";
            if (!IsNull($v_1)) $v_2 = $v_1.toString();
            var $v_3 = this.getUnformattedValue("lastname"), $v_4 = "";
            if (!IsNull($v_3)) $v_4 = $v_3.toString();
            var $v_5 = this.getUnformattedValue("middlename"), $v_6 = "";
            if (!IsNull($v_5)) $v_6 = $v_5.toString();
            $v_0 = Mscrm.InternalUtilities.FullNameGenerator
                .generateFullName(window.ORG_FULLNAME_FORMAT, $v_2, $v_4, $v_6)
        } else {
            var $v_7 = this.getUnformattedValue(fieldName);
            if ($v_7)
                if (Object.getType($v_7) === String) $v_0 = $v_7;
                else if (isArray($v_7)) {
                    var $v_8 = $v_7;
                    if ($v_8[0].id && $v_8[0].displayClass === "ms-crm-Lookup-Item") $v_0 = $v_8[0].name
                }
        }
        return $v_0
    },
    getEntityReference: function() {
        var $v_0 = new Mscrm.EntityReference;
        $v_0.Id = this.get_objectId();
        $v_0.TypeCode = this.get_objectTypeCode();
        $v_0.TypeName = this.get_objectTypeName();
        $v_0.Name = isNullOrEmptyString(this.$1o_4) ? null : this.getUnformattedValue(this.$1o_4);
        return $v_0
    },
    getFormDataComponent: function(column) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(column);
        if (!IsNull($v_0)) return $v_0.get_dataValue();
        else return null
    },
    $71_4: function() {
        $addHandler(this.get_element(), "keypress", this.$$d_$6J_4);
        this.$i_4 = $get(this.$2t_4);
        if (IsNull(this.$i_4)) return;
        if (this.get_formType() === 3 || this.get_formType() === 4) this.$1z_4 = false;
        this.attachCloseAlert();
        $addHandler(document, "keydown", this.$$d_$6H_4);
        $addHandler(window, "resize", this.$$d_$5w_4);
        var $v_0 = this.get_crmFormSubmitIdInput();
        if (!IsNull(window.name))
            !IsNull(window.frameElement) ? (window.name = window.frameElement.getAttribute("name")) : void 0;
        var $v_1 = this.get_$3w_4();
        if (!IsNull($v_1) && !IsNull($v_1.value)) this.$u_4 = $v_1.value === "true";
        if (this.$3i_4() && this.$6E_4()) $v_0.value = "";
        this.add_onSave(this.$$d_$5G_4);
        this.add_onSaveAppointmentAndServiceAppointment(this.$$d_$5B_4)
    },
    $70_4: function() {
        if (!IsNull(this.$i_4)) {
            $removeHandler(this.get_element(), "keypress", this.$$d_$6J_4);
            $removeHandler(document, "keydown", this.$$d_$6H_4);
            $removeHandler(window, "resize", this.$$d_$5w_4)
        }
    },
    get_allowFormFocus: function() { return this.$1z_4 },
    set_allowFormFocus: function(value) {
        this.$1z_4 = value;
        return value
    },
    get_saving: function() { return this.$1Q_4 },
    set_saving: function(value) {
        this.$1Q_4 = value;
        return value
    },
    get_submitFormId: function() { return this.$2t_4 },
    set_submitFormId: function(value) {
        this.$2t_4 = value;
        return value
    },
    get_noDataValue: function() { return 3 },
    get_isDirty: function() { return this.BuildXml(false, false, false, false, true) !== 3 },
    get_formType: function() {
        if (this.get_isDisposed()) return 0;
        var $v_0 = this.get_element().attributes.getNamedItem("formtype");
        return !IsNull($v_0) && !IsNull($v_0.value) ? parseInt($v_0.value, 10) : 0
    },
    get_objectTypeCode: function() {
        try {
            var $v_0 = this.get_crmFormSubmitObjectTypeInput();
            if (IsNull($v_0) || isNullOrEmptyString($v_0.value)) return 0;
            else return parseInt($v_0.value, 10)
        } catch ($$e_1) {
            return 0
        }
    },
    get_objectTypeName: function() {
        try {
            var $v_0 = $get("crmFormSubmitObjectTypeName");
            return IsNull($v_0) ? null : $v_0.value
        } catch ($$e_1) {
            return null
        }
    },
    get_objectId: function() {
        try {
            var $v_0 = this.get_crmFormSubmitIdInput();
            if (IsNull($v_0) || isNullOrEmptyString($v_0.value)) return null;
            else return $v_0.value
        } catch ($$e_1) {
            return null
        }
    },
    set_objectId: function(value) {
        var $v_0 = this.get_crmFormSubmitIdInput();
        $v_0.value = value;
        return value
    },
    get_bypassValidation: function() { return this.$2Q_4 },
    set_bypassValidation: function(value) {
        this.$2Q_4 = value;
        return value
    },
    get_refreshOnSave: function() { return this.$1p_4 },
    set_refreshOnSave: function(value) {
        this.$1p_4 = value;
        return value
    },
    add_onSave: function(value) { this.get_events().addHandler("onSaveEvent", value) },
    remove_onSave: function(value) { this.get_events().removeHandler("onSaveEvent", value) },
    add_onClose: function(value) { this.get_events().addHandler("onCloseEvent", value) },
    remove_onClose: function(value) { this.get_events().removeHandler("onCloseEvent", value) },
    add_onFormResized: function(value) { this.get_events().addHandler("OnFormResized", value) },
    remove_onFormResized: function(value) { this.get_events().removeHandler("OnFormResized", value) },
    add_onSaveAppointmentAndServiceAppointment: function(value) {
        this.get_events().addHandler("OnSaveAppointmentAndServiceAppointmentEvent", value)
    },
    remove_onSaveAppointmentAndServiceAppointment: function(value) {
        this.get_events().removeHandler("OnSaveAppointmentAndServiceAppointmentEvent", value)
    },
    CheckFormDirty: function() { return this.BuildXml(false, this.get_isNew(), false, false, true) !== 3 },
    Save: function() { this.SubmitCrmForm(1, true, false, false, false) },
    SaveAndClose: function() { this.SubmitCrmForm(2, true, false, true, false) },
    SaveAndNew: function() { this.SubmitCrmForm(59, true, true, false, false) },
    CloseRecord: function(eventCode) {
        if (IsNull(Mscrm.PageManager.get_instance()) || !Mscrm.PageManager.isFlatUIPage()) {
            closeWindow();
            return
        }
        if (IsNull(eventCode)) eventCode = !Mscrm.NavigationMode.DefaultNavigationMode ? 23 : 18;
        this.raiseEvent(eventCode, null)
    },
    ShowAppNav: function() {
        if (IsNull(Mscrm.PageManager.get_instance()) || !Mscrm.PageManager.isFlatUIPage()) return;
        var $v_0 = {};
        $v_0["mode"] = "float";
        $v_0["activeElement"] = window.document.activeElement;
        this.raiseEvent(12, $v_0)
    },
    IsValid: function(bypassValidateOwner) {
        if (this.$2Q_4) return true;
        try {
            var $v_3 = window.document.activeElement;
            if (!IsNull($v_3) && typeof $v_3.tagName !== "undefined") {
                if (!IsNull(Mscrm.FormInputControl.NumberInputBehavior)) {
                    var $v_4 = Sys.UI.Behavior.getBehaviorsByType($v_3, Mscrm.FormInputControl.NumberInputBehavior)[0];
                    if (!IsNull($v_4) && !IsNull($v_4.get_element().getAttribute("blockFormSubmit"))) {
                        var $v_5 = $v_4.get_element();
                        $v_5.removeAttribute("blockFormSubmit");
                        return false
                    }
                }
                $v_3.tagName.toUpperCase() === "IFRAME" &&
                    Sys.UI.DomElement.containsCssClass($v_3, "ms-crm-Email-Body") &&
                    this.$4H_4($v_3)
            }
            window.self.focus()
        } catch ($$e_4) {
            return false
        }
        var $v_0 = this.$3c_4();
        if (!IsNull($v_0)) return $v_0.validateForSave();
        for (var $v_1 = null, $v_2 = this.get_element().getElementsByTagName("*"), $v_6 = 0, $v_7 = $v_2.length;
            $v_6 < $v_7;
            $v_6++) {
            $v_1 = $v_2[$v_6];
            switch ($v_1.tagName.toUpperCase()) {
            case "INPUT":
            case "SELECT":
            case "TEXTAREA":
            case "TABLE":
            case "DIV":
            case "SPAN":
            case "IMG":
            case "IFRAME":
                if ($v_1.id === "ownerid" && bypassValidateOwner) continue;
                if (!this.$4T_4($v_1, false)) return false;
                break
            }
        }
        return true
    },
    SubmitCrmForm: function(mode, checkValid, forceSubmit, close, buildFullXml) {
        if (this.$1Q_4) return false;
        if (IsNull(buildFullXml)) buildFullXml = false;
        this.$6g_4(mode);
        if (this.IsValid(false) && this.fireSaveEvent(mode)) {
            var $v_0 = this.get_objectTypeName();
            if ($v_0 === "appointment" || $v_0 === "serviceappointment") {
                var $v_1 = this.$5H_4(mode);
                if (!$v_1) return true
            }
            return this.SubmitAfterSave(mode, forceSubmit, close, buildFullXml)
        } else return false
    },
    SubmitAfterSave: function(mode, forceSubmit, close, buildFullXml) {
        var $v_0 = this.get_crmFormSubmitIdInput(),
            $v_1 = this.BuildXml(false, !isNullOrEmptyString($v_0.value), buildFullXml, false, false);
        if ($v_1 === 1 || $v_1 === 3 && forceSubmit) {
            var $v_2 = this.get_$50_4();
            $v_2.value = mode;
            var $v_3 = this.get_$3w_4();
            if (!IsNull($v_3)) $v_3.value = this.$u_4 ? "true" : "false";
            var $v_4 = this.get_$3X_4();
            if (forceSubmit || !IsNull($v_4) && !isNullOrEmptyString($v_4.value)) {
                this.$6z_4();
                return true
            }
        }
        $v_1 === 3 && close && this.CloseRecord(null);
        if ($v_1 === 2) return false;
        else $v_1 === 3 && !forceSubmit && close && this.CloseRecord(null);
        Sys.Browser.agent === Sys.Browser.InternetExplorer && window.focus();
        return undefined
    },
    Close: function(eventData) {
        var $v_0 = eventData.rawEvent;
        if (!this.IsReadyToClose()) {
            $v_0.returnValue = window.LOCID_FORMS_SAVE_CONFIRM_TITLE;
            return window.LOCID_FORMS_SAVE_CONFIRM_TITLE
        }
    },
    IsReadyToClose: function() {
        if (!this.$1Q_4) {
            try {
                var $v_1 = document.activeElement;
                if (!IsNull($v_1))
                    if ($v_1.tagName.toUpperCase() === "IFRAME" &&
                        Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-Email-Body")) this.$4H_4($v_1);
                    else $v_1.tagName.toUpperCase() !== "BODY" && $v_1.blur()
            } catch ($v_2) {
                var $v_3 = $v_2.number;
                if (!(Mscrm.Utilities.isIE9OrHigher() && $v_3 === 1)) return false
            }
            var $v_0 = this.$5A_4();
            if (!IsNull($v_0) && !$v_0 || this.BuildXml(false, true, false, false, true) !== 3) return false
        }
        return true
    },
    $4H_4: function($p0) {
        while ($p0.tagName.toUpperCase() !== "TABLE" || !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Email-Body")) {
            $p0 = $p0.parentNode;
            if ($p0 === this.get_element()) {
                $p0 = null;
                break
            }
        }
        if (!IsNull($p0)) {
            var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0.id);
            $v_0.updateMessageBody()
        }
    },
    detachCloseAlert: function() {
        if (this.$1Y_4) {
            this.$1Y_4 = false;
            detachWindowOnBeforeUnload(this.$$d_Close, null)
        }
    },
    attachCloseAlert: function() {
        if (!this.$1Y_4) {
            this.$1Y_4 = true;
            attachWindowOnBeforeUnload(this.$$d_Close, null)
        }
    },
    setFormDirty: function(isDirty) {
        if (isDirty) this.attachCloseAlert();
        else this.detachCloseAlert()
    },
    Print: function() {
        if (this.get_isDirty()) alert(window.LOCID_FORM_PRINT_DIRTY_MESSAGE);
        else Mscrm.FormControlLite.prototype.Print.call(this)
    },
    BuildXml: function(validate, close, buildFullXml, validateForWorkflow, isDirtyCheck) {
        if (IsNull(this.$i_4)) return 3;
        Mscrm.Utilities.syncInitAllControls();
        var $v_0 = this.get_crmFormSubmitIdInput(), $v_1 = isNullOrEmptyString($v_0.value), $v_2 = this.$3c_4();
        if (!validateForWorkflow && !IsNull($v_2) && Mscrm.FormDataEntity.isInstanceOfType($v_2)) {
            if (validate && !$v_2.validateForSave()) return 2;
            var $v_9 = $v_1 && !close ? 0 : 1;
            if (!$v_1 && !!buildFullXml) $v_9 = 2;
            if (!this.$u_4 && $v_9 !== 1 && $v_2.hasDataToSerialize(1)) this.$u_4 = true;
            if ($v_2.hasDataToSerialize($v_9)) {
                if (!this.$u_4 && $v_9 === 1) this.$u_4 = true;
                if (!isDirtyCheck) {
                    var $v_A = this.get_$3X_4();
                    $v_A.value = $v_2.serialize($v_9)
                }
                if (!this.$3i_4() && $v_1 && window.initialFormXml === $v_2.serialize($v_9)) return 3;
                return 1
            } else if (isDirtyCheck) return this.$4Q_4() ? 1 : 3;
            else return 3
        }
        var $v_3, $v_4 = this.get_element().getElementsByTagName("*"), $v_5 = "", $v_6 = "", $v_7 = false, $v_8 = false;
        if (!IsNull(validateForWorkflow) && validateForWorkflow) $v_8 = true;
        for (var $v_B = 0, $v_C = $v_4.length; $v_B < $v_C; $v_B++) {
            $v_3 = $v_4[$v_B];
            var $v_D = Mscrm.FormControlInputBehavior.GetBehavior($v_3.id);
            switch ($v_3.tagName.toUpperCase()) {
            case "INPUT":
            case "SELECT":
            case "TEXTAREA":
            case "TABLE":
            case "DIV":
            case "SPAN":
            case "IMG":
            case "IFRAME":
                if (validate && !this.$4T_4($v_3, $v_8)) return 2;
                var $v_E;
                if ($v_3.className === "ms-crm-Email-Body" && !IsNull(isDirtyCheck) && isDirtyCheck) {
                    var $v_H = Mscrm.FormControlInputBehavior.GetElementBehavior($v_3);
                    $v_E = IsNull($v_H) ? null : $v_H.get_dataXmlUnEncoded()
                } else if (!IsNull($v_D)) $v_E = $v_D.get_dataXml();
                else $v_E = $v_3.DataXml;
                var $v_F;
                if (Sys.UI.DomElement.containsCssClass($v_3, "ms-crm-Lookup") &&
                    !IsNull($v_D) &&
                    !IsNull($v_D.get_dataValue()) &&
                    !IsNull(isDirtyCheck) &&
                    isDirtyCheck) $v_F = $v_D.get_dataValue();
                else if (!IsNull($v_D)) $v_F = $v_D.get_dataValue();
                else $v_F = $v_3.DataValue;
                var $v_G = IsNull($v_D) ? Mscrm.FormControlInputBehavior.GetBehavior($v_3.id) : $v_D;
                if ($v_3.tagName.toUpperCase() === "IMG" &&
                    ($v_3.IsDirty || !IsNull($v_G) && $v_G.get_isDirty()) &&
                    IsNull($v_F)) $v_F = "";
                if ($v_3.id !== "chkAll" && !IsNull($v_E)) {
                    var $v_I = false, $v_J = false, $v_K = Mscrm.FormUtility.getSlugControl($v_3);
                    if (!IsNull($v_K) && $v_K.get_isDataSlug()) {
                        $v_E = $v_K.get_slugValue();
                        $v_I = true;
                        $v_J = $v_K.get_isSlugDirty()
                    }
                    var $v_L = !IsNull($v_D) ? $v_D.get_isDirty() : $v_3.IsDirty,
                        $v_M = !IsNull($v_D) ? $v_D.get_disabled() : $v_3.Disabled,
                        $v_N = !IsNull($v_D) ? $v_D.get_forceSubmit() : $v_3.ForceSubmit,
                        $v_O = !IsNull($v_D) ? $v_D.get_doNotSubmit() : $v_3.DoNotSubmit;
                    if ($v_3.tagName.toUpperCase() === "SELECT" && $v_I) {
                        var $v_P = !IsNull($v_3.getAttribute("defaultSelected"))
                            ? $v_3.getAttribute("defaultSelected").toString()
                            : "";
                        if ($v_P === "null" || Mscrm.InternalUtilities._String.isNullOrEmpty($v_P)) $v_L = false
                    }
                    if ($v_L || $v_I && $v_J) this.$u_4 = true;
                    if ($v_N) {
                        if ($v_L || $v_I && $v_J) $v_7 = true;
                        $v_6 += $v_E
                    } else {
                        var $v_Q = window._dirtyProperties;
                        if (!$v_O &&
                        ($v_1 &&
                            (!(IsNull($v_F) || isNullOrEmptyString($v_F.toString())) || $v_I) &&
                            !(close && !$v_L && !($v_I && $v_J)) ||
                            !$v_1 &&
                            ($v_L || !IsNull($v_Q) && $v_Q[$v_3.id] === $v_3.id || $v_I && $v_J || buildFullXml) &&
                            !$v_M)) $v_5 += $v_E;
                        else if (!$v_O && this.$3i_4() && this.$u_4 && !IsNull($v_F) && !$v_M) $v_5 += $v_E
                    }
                }
                break
            }
        }
        if (IsNull(isDirtyCheck) || !isDirtyCheck) {
            var $v_R = this.get_$3v_4(),
                $v_S = $v_R.value,
                $v_T = this.$5W_4(),
                $v_U = $v_5 + $v_6,
                $v_V = this.get_$3X_4();
            $v_U = Mscrm.FormControl
                .addMappedAttributeInformation($v_U, XUI.Xml.LoadXml("<mapped>" + $v_T + "</mapped>"));
            $v_V.value = String.format("<{0}>{1}</{0}>", CrmEncodeDecode.CrmXmlEncode($v_S), $v_U)
        }
        if ($v_5.length > 0 || $v_7) return 1;
        else return 3
    },
    GetControl: function(id) { return $get(id) },
    GetViewportWidth: function() {
        var $v_0 = this.get_element().parentNode;
        return $v_0.offsetWidth
    },
    SetFieldReqLevel: function(field, required) {
        var $v_0 = $get(field);
        if (IsNull($v_0)) return;
        this.$4i_4($v_0, required)
    },
    SetAllFieldsToNonReqLevel: function() {
        for (var $v_0 = this.get_element()
                     .getElementsByTagName("*"),
            $v_1 = 0,
            $v_2 = $v_0.length;
            $v_1 < $v_2;
            $v_1++) {
            var $v_3 = $v_0[$v_1];
            switch ($v_3.tagName.toUpperCase()) {
            case "INPUT":
            case "SELECT":
            case "TEXTAREA":
            case "TABLE":
            case "DIV":
            case "SPAN":
            case "IMG":
            case "IFRAME":
                !isNullOrEmptyString($v_3.id) && this.$4i_4($v_3, false);
                break
            }
        }
    },
    displayMissingValue: function(fieldName) { alert(String.format(window.LOCID_FORM_PROIVE_VALUE_MASK, fieldName)) },
    GetLabel: function(control) {
        var $v_0 = this.GetLabelControl(control);
        return !IsNull($v_0) ? Mscrm.Utilities.getNonHiddenInnerText($v_0) : control.id
    },
    GetLabelControl: function(control) {
        var $v_0 = $get(control.id + "_c");
        return !IsNull($v_0) ? XUI.Html.DomUtils.GetFirstChild($v_0) : null
    },
    SetLabel: function(control, label) {
        var $v_0 = this.GetLabelControl(control);
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if ($v_1.setAttribute) $v_1.setAttribute("data", label);
            else $v_1.data = label;
            return true
        }
        return false
    },
    HideField: function(control) {
        var $v_0 = this.GetLabelControl(control);
        $v_0.parentNode.parentNode.style.display = "none"
    },
    VerifyFieldIsSet: function(field, errorMessage) {
        var $v_0 = this.GetControl(field),
            $v_1 = Mscrm.FormControlInputBehavior.GetBehavior($v_0.id),
            $v_2 = $v_1.get_dataValue();
        if (isNullOrEmptyString($v_2)) {
            !IsNull(errorMessage) && alert(errorMessage);
            return false
        }
        return true
    },
    SetDeferredCmdId: function(cmdId) {
        var $v_0 = this.get_$3W_4();
        $v_0.value = cmdId
    },
    CloseAlertAttached: function() { return this.$1Y_4 },
    SetViewportTabSection: function(type, id, isViewport) {
        var $v_0;
        if (type === "tab") $v_0 = this.$2G_4;
        else if (type === "section") $v_0 = this.$1T_4;
        else return;
        if (isViewport) {
            for (var $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) if ($v_0[$v_2] === id) return;
            $v_0[$v_1] = id
        } else for (var $v_3 = $v_0.length, $v_4 = 0; $v_4 < $v_3; $v_4++) if ($v_0[$v_4] === id) $v_0[$v_4] = null
    },
    ModifyMinimumTabHeight: function(height, tabId) {
        var $v_0 = this.$1k_4[tabId];
        if (!IsNull($v_0)) {
            var $v_1 = $v_0 + height;
            if ($v_1 >= 0) this.$1k_4[tabId] = $v_1
        }
    },
    HandleResize: function() {
        var $v_0 = window.document.readyState;
        if (!IsNull($v_0) && $v_0 !== "complete") {
            var $v_1 = this, $$t_2 = this;
            window.setTimeout(function() { $v_1.HandleResize() }, 10)
        } else executeFunctionDeferred(this.$$d_$4f_4, false, false)
    },
    $2i_4: false,
    get_isResizeFormComplete: function() { return this.$2i_4 },
    $4f_4: function() {
        if (this.get_isDisposed()) return;
        this.$2i_4 = false;
        this.$4k_4();
        this.$6u_4();
        this.fireControlEvent("OnFormResized", null);
        this.$2i_4 = true
    },
    setFirstElementFocus: function() {
        if (window.location.href.indexOf("dashboard.aspx") >= 0) return;
        if (this.$1z_4 && this.get_setInitialFocus() && !this.$4Q_4()) {
            window.focus();
            if (!IsNull(this.get_$w_4())) {
                var $v_0 = this.$4C_4(false);
                if (IsNull($v_0)) $v_0 = this.$4C_4(true);
                if (IsNull($v_0)) {
                    var $v_1 = this.get_$w_4().controls, $$t_6 = this;
                    $v_0 = $v_1.getFirst(function($p1_0, $p1_1) {
                        return $p1_0.getDisabled && !$p1_0.getDisabled() && $p1_0.getAttribute && $p1_0.getAttribute()
                    })
                }
                if (!IsNull($v_0)) {
                    this._doNotScrollTab = true;
                    try {
                        $v_0.setFocus()
                    } catch ($$e_4) {
                    }
                    this._doNotScrollTab = false
                }
            } else {
                var $v_2 = $get("tab0");
                if (!IsNull($v_2) && Sys.UI.DomElement.containsCssClass($v_2, "ms-crm-InlineTab")) {
                    this.$6r_4($v_2);
                    Mscrm.Form.resetFormToVisibleArea()
                }
            }
        }
    },
    get_$w_4: function() { return Xrm.Page.ui },
    get_$3W_4: function() {
        if (IsNull(this.$2T_4)) this.$2T_4 = $get("crmCmdId");
        return this.$2T_4
    },
    get_$3X_4: function() {
        if (IsNull(this.$2Z_4)) this.$2Z_4 = $get("crmFormSubmitXml");
        return this.$2Z_4
    },
    get_$50_4: function() {
        if (IsNull(this.$2X_4)) this.$2X_4 = $get("crmFormSubmitMode");
        return this.$2X_4
    },
    get_$3w_4: function() {
        if (IsNull(this.$2a_4)) this.$2a_4 = $get("crmFormUserModified");
        return this.$2a_4
    },
    get_$3v_4: function() {
        if (IsNull(this.$2V_4)) this.$2V_4 = $get("crmFormRootElem");
        return this.$2V_4
    },
    $5w_4: function($p0) { this.HandleResize() },
    $6J_4: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        $v_0 === 13 &&
            $p0.target.tagName.toUpperCase() === "INPUT" &&
            $p0.target.getAttribute("type").toLowerCase() === "text" &&
            $p0.preventDefault()
    },
    $6H_4: function($p0) {
        switch ($p0.keyCode) {
        case 27:
            this.CloseRecord();
            return;
        case 70:
            if ($p0.ctrlKey && $p0.shiftKey) {
                var $v_0 = $find("RelatedInformationPane");
                !IsNull($v_0) && $v_0.ToggleInformationPane();
                return
            }
            break;
        case 123:
            if ($p0.shiftKey) {
                this.Save();
                return
            }
            break;
        case 54:
            if ($p0.ctrlKey) {
                this.ShowAppNav();
                return
            }
            break;
        case 83:
            if ($p0.ctrlKey) {
                if ($p0.altKey) return;
                if (!IsNull(document.activeElement)) {
                    document.activeElement.blur();
                    document.activeElement.focus()
                }
                if ($p0.shiftKey) {
                    var $v_1 = window._saveAndNewEnabled;
                    if (!IsNull($v_1)) $v_1 && this.SubmitCrmForm(59, true, true, false, false);
                    else {
                        var $v_2 = this.get_$3v_4(),
                            $v_3 = $v_2.value,
                            $v_4 = "Mscrm.Form." + $v_3 + ".SaveAndNew",
                            $v_5 = $v_3 + "|NoRelationship|Form|Mscrm.SaveAndNewPrimary";
                        isRibbonControlEnabled($v_5, $v_4) && executeRibbonCommand($v_5)
                    }
                } else {
                    this.Save();
                    $p0.preventDefault()
                }
                return
            } else if ($p0.altKey) {
                document.activeElement.blur();
                document.activeElement.focus();
                this.SaveAndClose();
                $p0.preventDefault();
                return
            }
            break;
        case 68:
            if ($p0.ctrlKey && window._deleteActionEnabled) {
                !this.get_isNew() && Mscrm.FormAction.onActionMenuClick("delete", this.get_objectTypeCode());
                return
            }
            break
        }
    },
    $5G_4: function($p0, $p1) {
        var $v_0 = this.$3c_4();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.fireOnSave($p1);
            !$v_1 && $p1.preventDefault()
        }
    },
    $5B_4: function($p0, $p1) { CustomFormSubmit($p0, $p1) },
    $5A_4: function() {
        var $v_0 = this.get_events().getHandler("onCloseEvent"), $v_1 = new Mscrm.FormCloseEventArgs;
        !IsNull($v_0) && $v_0(this, $v_1);
        return !$v_1.isDefaultPrevented()
    },
    fireSaveEvent: function(mode) {
        var $v_0 = $get("crmForm");
        if (!IsNull($v_0)) {
            var $v_1 = true;
            $v_1 = $v_0.IsHtc;
            if (!IsNull($v_1)) return this.$5J_4(mode)
        }
        return this.$5I_4(mode)
    },
    $5I_4: function($p0) {
        var $v_0 = this.get_events().getHandler("onSaveEvent"), $v_1 = new Mscrm.EntitySaveEventArgs($p0);
        !IsNull($v_0) && $v_0(this, $v_1);
        return !$v_1.isDefaultPrevented()
    },
    $5H_4: function($p0) {
        var $v_0 = this.get_events().getHandler("OnSaveAppointmentAndServiceAppointmentEvent"),
            $v_1 = new Mscrm.EntitySaveEventArgs($p0);
        $v_1.$2R_2 = true;
        !IsNull($v_0) && $v_0(this, $v_1);
        return !$v_1.isDefaultPrevented()
    },
    $5J_4: function($p0) {
        var $v_0 = $get("crmForm"), $v_1 = this.$$d_$6m_4;
        $v_0.attachEvent("onsave", $v_1);
        var $v_2 = true;
        $v_2 = $v_0.fireSaveEvent($p0);
        $v_0.detachEvent("onsave", $v_1);
        return $v_2
    },
    $6m_4: function() {
        var $v_0 = this.get_events().getHandler("onSaveEvent"), $v_1 = 0;
        $v_1 = window.event.Mode;
        var $v_2 = new Mscrm.EntitySaveEventArgs($v_1);
        !IsNull($v_0) && $v_0(this, $v_2);
        if ($v_2.isDefaultPrevented()) window.event.returnValue = false
    },
    $3c_4: function() {
        var $v_0 = $find("PrimaryEntity");
        return !IsNull($v_0) ? $v_0 : null
    },
    $4k_4: function() {
        this.$4u_4();
        (IsNull(this.$1T_4) || IsNull(this.$1T_4[0]) && IsNull(this.$1N_4) || IsNull(this.$1N_4[0])) && this.$3r_4();
        for (var $v_0 = 0, $v_1 = this.$1T_4.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = this.$1T_4[$v_0];
            if (IsNull($v_2)) continue;
            var $v_3 = this.GetControl($v_2);
            if (IsNull($v_3)) continue;
            var $v_4 = this.GetTab($v_3, false);
            if (!$v_4.offsetHeight || !$v_3.offsetHeight) {
                var $v_6 = $find($v_4.id);
                if (!IsNull($v_6) && $v_6.getWrapper().getDisplayState() === "collapsed") {
                    $v_6.add_tabStateChange(this.$$d_$5k_4);
                    continue
                }
            }
            var $v_5 = Mscrm.FormUISection.$4F($v_3.id);
            if (IsNull(this.$1j_4[$v_2])) {
                this.$1j_4[$v_2] = $v_3.offsetHeight;
                this.$1k_4[$v_4.id] = $v_4.offsetHeight
            }
            if (this.$2F_4 < this.$1k_4[$v_4.id]) {
                if (parseInt($v_3.style.height, 10) !== this.$1j_4[$v_2]) {
                    $v_5.$4e_4();
                    $v_3.style.height = this.$1j_4[$v_2] + "px";
                    $v_5.$3l_4()
                }
                continue
            } else {
                var $v_7 = this.$1j_4[$v_2] + this.$2F_4 - this.$1k_4[$v_4.id];
                $v_5.$4e_4();
                $v_3.style.height = $v_7 + "px";
                $v_5.$3l_4()
            }
        }
        for (var $v_8 = 0, $v_9 = this.$2G_4.length; $v_8 < $v_9; $v_8++) {
            var $v_A = this.$2G_4[$v_8];
            if (IsNull($v_A)) continue;
            var $v_B = this.GetControl($v_A);
            if (IsNull($v_B)) continue;
            if (!$v_B.offsetHeight) continue;
            var $v_C = XUI.Html.DomUtils.GetChildElementAt($v_B, 1);
            if (!IsNull($v_C)) {
                if (!$v_C.offsetHeight) continue;
                var $v_D = this.$2F_4 - XUI.Html.DomUtils.GetFirstChild($v_B).offsetHeight,
                    $v_E = parseInt($v_C.style.height.replace("px", "").trim(), 10);
                if ($v_E !== $v_D && $v_D > 0) $v_C.style.height = $v_D + "px"
            }
        }
    },
    $6u_4: function($p0) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < this.$1N_4.length; $v_1++) {
            var $v_2 = this.$1N_4[$v_1];
            if (IsNull($v_2)) continue;
            var $v_3 = this.GetControl($v_2);
            if (IsNull($v_3)) continue;
            var $v_4 = this.GetTab($v_3, false);
            if (!isNullOrEmptyString($p0) && $p0 !== $v_4.id) continue;
            if (!$v_4.offsetHeight || !$v_3.offsetHeight) {
                if (Array.contains($v_0, $v_4.id)) continue;
                var $v_6 = $find($v_4.id);
                if (!IsNull($v_6) && $v_6.getWrapper().getDisplayState() === "collapsed") {
                    Array.add($v_0, $v_4.id);
                    $v_6.add_tabStateChange(this.$$d_$5j_4);
                    continue
                }
            }
            var $v_5 = Mscrm.FormUISection.$4F(this.$1N_4[$v_1]);
            !IsNull($v_5) && $v_5.$3l_4()
        }
    },
    $4u_4: function() { this.$2F_4 = this.GetViewportHeight() },
    $5k_4: function($p0, $p1) {
        var $v_0 = $p1, $v_1 = $p0;
        if ($v_0.$1a_1 === "expanded") {
            this.$4k_4();
            $v_1.remove_tabStateChange(this.$$d_$5k_4)
        }
    },
    $5j_4: function($p0, $p1) {
        var $v_0 = $p1, $v_1 = $p0._control;
        if ($v_1 && $v_0.$1a_1 === "expanded") {
            this.$6u_4($v_1.get_id());
            $p0.remove_tabStateChange(this.$$d_$5j_4)
        }
    },
    $5O_4: function() {
        var $v_0 = window.document.getElementById("crmFormTabContainer");
        if (IsNull($v_0)) return;
        var $v_1 = 0, $$t_3 = this;
        XUI.Xml.DomUtils.ForEachChild($v_0,
            function($p1_0) {
                if ($p1_0
                    .className ===
                    "ms-crm-InlineTab") if ($p1_0.getAttribute("IsViewportTab") === "1") $$t_3.$2G_4[$v_1++] = $p1_0.id;
                return false
            })
    },
    $3r_4: function() {
        var $v_0 = window.document.documentElement.getElementsByTagName("TABLE"), $v_1 = 0, $v_2 = 0;
        if (!IsNull($v_0))
            for (var $v_3 = 0, $v_4 = $v_0.length; $v_3 < $v_4; $v_3++) {
                var $v_5 = $v_0[$v_3], $v_6 = $v_5.getAttribute("IsViewportSection");
                if (IsNull($v_6)) continue;
                if ($v_6 === "1") this.$1T_4[$v_1++] = $v_5.id;
                else this.$1N_4[$v_2++] = $v_5.id
            }
    },
    $6E_4: function() {
        if (typeof _appFormErrorOnNewPage !== "undefined") {
            var $v_0 = _appFormErrorOnNewPage;
            return !IsNull($v_0) && $v_0
        } else return false
    },
    $3i_4: function() {
        if (typeof _appFormErrorOnPage !== "undefined") {
            var $v_0 = _appFormErrorOnPage;
            return !IsNull($v_0) && $v_0
        } else return false
    },
    $4C_4: function($p0) {
        for (var $$t_D = this,
            $v_0 = function($p1_0, $p1_1) {
                return $p1_0.getVisible() &&
                    $p1_0.getDisabled &&
                    !$p1_0.getDisabled() &&
                    $p1_0.getAttribute &&
                    $p1_0.getAttribute()
            },
            $v_1 = null,
            $v_2 = this.get_$w_4().tabs,
            $v_3 = $v_2.getLength(),
            $v_4 = 0;
            $v_4 < $v_3 && IsNull($v_1);
            $v_4++) {
            var $v_5 = $v_2.getByIndex($v_4);
            if ($v_5.getVisible() && ($p0 || $v_5.getDisplayState() === "expanded"))
                for (var $v_6 = $v_5.sections, $v_7 = $v_6.getLength(), $v_8 = 0; $v_8 < $v_7 && IsNull($v_1); $v_8++) {
                    var $v_9 = $v_6.getByIndex($v_8);
                    if ($v_9.getVisible()) $v_1 = $v_9.controls.getFirst($v_0)
                }
        }
        return $v_1
    },
    $6r_4: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("*"), $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) {
            var $v_3 = $v_0[$v_1], $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_3.id);
            if (!IsNull($v_4)) $v_4 = null;
            if ($v_3.tagName.toUpperCase() === "INPUT" && $v_3.getAttribute("type") === "hidden") continue;
            var $v_5 = !IsNull($v_4) ? $v_4.get_dataValue() : $v_3.DataValue,
                $v_6 = !IsNull($v_4) ? $v_4.get_disabled() : $v_3.Disabled;
            if (this.get_setInitialFocus() && typeof $v_5 !== "undefined" && !$v_6) {
                try {
                    if (!IsNull($v_4) && !Type.parse("Mscrm.IUIControl").isImplementedBy($v_4)) $v_4.setFocus();
                    else $v_3.SetFocus()
                } catch ($$e_8) {
                }
                return
            }
        }
        this.set_setInitialFocus(false)
    },
    $33_4: function($p0) {
        if (IsNull(Mscrm.PageManager.get_instance()) || !Mscrm.PageManager.isFlatUIPage()) return;
        var $v_0 = {}, $v_1 = null, $v_2 = this.get_$3W_4();
        if (!isNullOrEmptyString($v_2.value)) {
            var $v_5 = {};
            $v_5["key"] = $v_2.value;
            var $v_6 = this.raiseEvent(10, $v_5);
            if (!IsNull($v_6) && $v_6.length === 1) {
                $v_0 = $v_6[0];
                $v_1 = $v_2.value
            }
        }
        $v_0["etc"] = this.get_objectTypeCode();
        var $v_3 = Mscrm.Utilities.getContentUrl(this), $v_4 = $v_3.get_query();
        $v_0["_CreateFromId"] = $v_4["_CreateFromId"];
        $v_0["_CreateFromType"] = $v_4["_CreateFromType"];
        $v_0["pId"] = $v_4["pId"];
        $v_0["pName"] = $v_4["pName"];
        $v_0["pType"] = $v_4["pType"];
        $v_0["etn"] = this.get_objectTypeName();
        $v_0["action"] = $p0;
        $v_0["handlerId"] = "RecordUpdated";
        $v_0["isNew"] = this.get_isNew();
        try {
            $v_0["title"] = this.get_primaryFieldValue();
            $v_0["entitydisplayname"] = this.entityDisplayName;
            var $v_7 = this.get_crmFormSubmitIdInput();
            $v_0["id"] = $v_7.value
        } catch ($$e_9) {
        }
        $v_0["refreshOnSave"] = this.$1p_4;
        if (this.$1p_4) {
            var $v_8 = Mscrm.CrmUri.create(window.location.href);
            delete $v_8.get_query().preloadcache;
            this.$i_4.setAttribute("action", $v_8.toString());
            $v_0["uri"] = $v_8.toString()
        }
        if (IsNull($v_1)) {
            var $v_9 = {};
            $v_9["data"] = $v_0;
            var $v_A = this.raiseEvent(5, $v_9), $v_B = $v_A[0];
            $v_2.value = $v_B
        }
    },
    $4i_4: function($p0, $p1) {
        if (!IsNull(Xrm.Page.data)) {
            var $v_2 = Xrm.Page.getAttribute($p0.id);
            if (!IsNull($v_2)) {
                $v_2.setRequiredLevel($p1 ? "required" : "none");
                return
            }
        }
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0.id);
        if (IsNull($v_0)) {
            var $v_3 = $p1 ? 2 : 0;
            $p0.req = $v_3
        } else $v_0.set_requiredLevel($p1 ? 2 : 0);
        var $v_1 = this.GetLabelControl($p0);
        !IsNull($v_1) &&
            Mscrm.Form.setFieldRequiredOrRecommended($v_1.parentNode, $p1 ? 2 : 0, window.LOCID_FORM_REQUIRED_ALT);
        if (!IsNull($p0.className)) {
            if ($p0.className === "ms-crm-Duration") {
                var $v_4 = $get($p0.id + "Select");
                $v_4.setAttribute("defaultbgcolor", $p1 ? window.LOCID_FORM_REQUIRED_BKG_COLOR : "");
                $v_4.className = "ms-crm-SelectBox"
            }
            if (Sys.UI.DomElement
                .containsCssClass($p0, "ms-crm-Lookup"))
                XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0.parentNode.parentNode)).style
                    .backgroundColor = $p1 ? window.LOCID_FORM_REQUIRED_BKG_COLOR : ""
        }
    },
    $6z_4: function() {
        Mscrm && Mscrm.RibbonData && Mscrm.RibbonData.setRibbonEnabledState(false);
        var $v_0 = this.$53_4();
        this.$1Q_4 = true;
        if (XUI.Html.DispatchDomEvent(this.$i_4, XUI.Html.CreateDomEvent("submit"))) {
            if (!IsNull($find("crmInlinePageManager"))) {
                var $v_1 = Mscrm.FormControl.getHttpPostBody(this.$i_4), $v_2 = $find("crmContentPanel");
                $v_2.loadContentByPost(Mscrm.CrmUri.create(this.$i_4.getAttribute("action").toString()), $v_1)
            } else this.$i_4.submit();
            !IsNull(this.get_recordSetControl()) && this.get_recordSetControl().recordUpdating()
        } else {
            this.$1Q_4 = false;
            Mscrm && Mscrm.RibbonData && Mscrm.RibbonData.setRibbonEnabledState(true);
            this.$55_4($v_0)
        }
        if (!IsNull(Mscrm.PageManager.get_instance()) &&
            Mscrm.PageManager.isFlatUIPage() &&
            this.$i_4.children.length > 0) {
            var $v_3 = this.get_$3W_4();
            $v_3.value = ""
        }
    },
    $55_4: function($p0) {
        if (!IsNull(this
                .get_$w_4()) &&
            !IsNull(this.get_$w_4().controls))
            for (var $v_0 = this.get_$w_4()
                         .controls,
                $v_1 = 0,
                $v_2 = $p0.length;
                $v_1 < $v_2;
                $v_1++) $v_0.get($v_1).set_disabled($p0[$v_1])
    },
    $53_4: function() {
        var $v_0 = [];
        if (!IsNull(this.get_$w_4()) && !IsNull(this.get_$w_4().controls)) {
            var $$t_4 = this;
            this.get_$w_4().controls.forEach(function($p1_0, $p1_1) {
                try {
                    if ($p1_0.get_disabled) {
                        $v_0[$p1_1] = $p1_0.get_disabled();
                        $p1_0.set_disabled(true)
                    }
                } catch ($v_1) {
                }
            })
        }
        return $v_0
    },
    $6g_4: function($p0) {
        switch ($p0) {
        case 1:
            this.$33_4("save");
            break;
        case 2:
            this.$33_4("saveandclose");
            break;
        case 59:
            this.$33_4("saveandnew");
            break;
        case 3:
            this.$33_4("delete");
            break
        }
    },
    $6D_4: function($p0) {
        var $v_0 = Mscrm.FormUtility.getSlugControl($p0);
        return !IsNull($v_0) && $v_0.get_isDataSlug()
    },
    $4T_4: function($p0, $p1) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0.id);
        if ($p1 && $p0.id === "ownerid") {
            if (typeof $p0.IsValid !== "undefined" && !$p0.IsValid()) {
                $p0.SetFocus();
                return false
            } else if (!IsNull($v_0) && typeof $v_0.get_isValid !== "undefined" && !$v_0.get_isValid()) {
                $v_0.setFocus();
                return false
            }
            return true
        }
        var $v_1 = IsNull($v_0) ? $p0.RequiredLevel === FIELD_REQUIRED : $v_0.get_requiredLevel() === FIELD_REQUIRED,
            $v_2 = !IsNull($v_0) ? $v_0.get_disabled() : $p0.disabled,
            $v_3 = !IsNull($v_0) ? $v_0.get_dataValue() : $p0.DataValue;
        if ($p1 && $v_1 && !$v_2 && this.$6D_4($p0)) return true;
        else if ($v_1 && IsNull($v_3) && !$v_2) {
            this.displayMissingValue(this.GetLabel($p0));
            if (!IsNull($v_0)) $v_0.setFocus();
            else $p0.SetFocus();
            return false
        } else if (typeof $p0.IsValid !== "undefined" && !$p0.IsValid()) {
            $p0.SetFocus();
            return false
        } else if (!IsNull($v_0) && typeof $v_0.get_isValid !== "undefined" && !$v_0.get_isValid()) {
            $v_0.setFocus();
            return false
        }
        return true
    },
    $4Q_4: function() {
        var $v_0 = false;
        if (typeof window.document.activeElement !== "unknown") {
            var $v_1 = window.document.activeElement;
            while (!IsNull($v_1) && $v_1 !== this.get_element()) {
                var $v_2 = $v_1.IsDirty;
                if (!IsNull($v_2)) {
                    $v_0 = $v_2;
                    break
                } else {
                    var $v_3 = $v_1.id;
                    if (!isNullOrEmptyString($v_3)) {
                        var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_3);
                        if (!IsNull($v_4))
                            try {
                                $v_0 = $v_4.get_isDirty();
                                break
                            } catch ($$e_5) {
                            }
                    }
                }
                $v_1 = $v_1.parentNode
            }
        }
        return $v_0
    },
    $5W_4: function() {
        var $v_0 = $get("crmFormSubmitMappedDataRemainder");
        if (!IsNull($v_0)) return $v_0.value;
        return ""
    }
};
Mscrm.FormControlLite = function(element) { Mscrm.FormControlLite.initializeBase(this, [element]) };
Mscrm.FormControlLite.$4d = function() { Mscrm.ReadFormUtilities.removeOnBeforeUnloadHandler() };
Mscrm.FormControlLite.$3Y = function() {
    Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization()
};
Mscrm.FormControlLite.prototype = {
    $2S_3: false,
    _doNotScrollTab: false,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm() && !Mscrm.Utilities.isGlobalQuickCreateForm()) {
            var $v_0 = Mscrm.CrmUri.create(window.top.location.href),
                $v_1 = $v_0.get_query()["newWindow"],
                $v_2 = !(Mscrm.Utilities.parseBoolean($v_1) || isOutlookHostedWindow()),
                $v_3 = Mscrm.Utilities.getData(window.RecordData, "_entity", "isRecordHierarchyEnabled");
            Mscrm.Utilities.showHideHierarchyButton(Mscrm.Utilities.parseBoolean($v_3));
            if ($v_2) {
                var $v_4 = window.parent.document.getElementById("popoutButton");
                if (!IsNull($v_4)) {
                    $v_4.style.display = "";
                    $v_4.setAttribute("sourceUrl", window.location.href)
                }
                var $v_5 = window.parent.document.getElementById("closeButton");
                if (!IsNull($v_5)) $v_5.style.display = "";
                var $v_6 = window.parent.document.getElementById("recordSetToolBarProxy");
                if (!IsNull($v_6)) $v_6.style.display = ""
            }
        }
    },
    openAdvancedFind: function() {
        var $v_0 = Mscrm.CrmUri.create("/AdvancedFind/AdvFind.aspx");
        $v_0.get_query()["EntityCode"] = this.get_entityTypeCode();
        openStdWin($v_0, "_blank", 700, 600, null)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm() && !Mscrm.Utilities.isGlobalQuickCreateForm()) {
            var $v_0 = window.parent.document.getElementById("popoutButton");
            if (!IsNull($v_0)) {
                $v_0.style.display = "none";
                $v_0.removeAttribute("sourceUrl")
            }
            var $v_1 = window.parent.document.getElementById("closeButton");
            if (!IsNull($v_1)) $v_1.style.display = "none";
            var $v_2 = window.parent.document.getElementById("recordSetToolBarProxy");
            if (!IsNull($v_2)) $v_2.style.display = "none";
            var $v_3 = window.parent.document.getElementById("hierarchyButton");
            if (!IsNull($v_3)) {
                $v_3.style.display = "none";
                $v_3.removeAttribute("primaryEntityId");
                $v_3.removeAttribute("objectTypecode")
            }
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        var $v_0 = Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 102:
            if (this.$4V_3()) {
                (IsNull(parameters) || !(Mscrm.NavBarSharedConstants.printPreviewAvailable in parameters)) &&
                    this.Print();
                $v_0 = true
            } else $v_0 = false;
            break;
        case 46:
            if (this.$4V_3()) return this.$5s_3();
            break
        }
        return $v_0
    },
    $4V_3: function() {
        var $v_0 = $P_CRM(window.frameElement);
        return !IsNull($v_0) && $v_0.css("visibility") === "visible"
    },
    $6k_3: function() { Mscrm.ReadFormUtilities.resetParameters() },
    $5s_3: function() {
        if (this.CloseAlertAttached()) {
            var $v_0 = !this.IsReadyToClose();
            if ($v_0) {
                var $v_1 = confirm(window.LOCID_FORMS_SAVE_CONFIRM_TITLE);
                if ($v_1) {
                    Xrm.Internal.disableFieldChangeIndicator();
                    this.$6k_3();
                    Mscrm.InlineDialogUtility.closeAllInlineDialogs();
                    Mscrm.FormControlLite.$4d()
                }
                return $v_1
            } else Mscrm.FormControlLite.$4d()
        }
        return true
    },
    _entityPermissions: 0,
    get_entityPermissions: function() { return this._entityPermissions },
    set_entityPermissions: function(value) {
        this._entityPermissions = value;
        return value
    },
    $39_3: null,
    get_currentDataEntity: function() {
        if (this.$39_3) return this.$39_3;
        else {
            var $v_0 = $find("PrimaryEntity");
            return $v_0
        }
    },
    get_objectTypeCode: function() {
        return Mscrm.EntityPropUtil.EntityTypeName2CodeMap[this.get_currentDataEntity().$t_1]
    },
    get_formType: function() {
        if (this.get_isDisposed()) return 0;
        if (!this.get_objectId()) return 1;
        else if (Mscrm.EntityPropUtil.EntityTypeName2CodeMap[this.get_currentDataEntity().$t_1] === 4202) return 2;
        else if (this.get_currentDataEntity().$21_1 === (4).toString()) return 4;
        else return 2
    },
    get_objectTypeName: function() { return this.get_currentDataEntity().$t_1 },
    get_objectId: function() { return this.get_currentDataEntity().$1H_1 },
    set_objectId: function(value) { return value },
    get_formUrl: function() {
        var $v_0 = Mscrm.CrmUri.create(window.IsTurboForm
            ? window.location.href.toString()
            : window.location.href.toString().split("#")[0]);
        if ("extraqs" in $v_0.get_query()) {
            var $v_1 = Mscrm.CrmUri.create($v_0.get_query()["extraqs"]);
            if (IsNull($v_1.get_query()["id"])) {
                $v_1.get_query()["id"] = this.get_objectId();
                $v_0.get_query()["extraqs"] = $v_1.toString()
            }
        }
        return $v_0
    },
    get_ribbonContextType: function() { return "Form" },
    get_ribbonRelationshipType: function() { return 0 },
    get_entityTypeCode: function() { return this.get_objectTypeCode() },
    get_entityTypeName: function() { return this.get_objectTypeName() },
    get_selectedRecordCount: function() { return 1 },
    get_recordCount: function() { return 1 },
    get_selectedIds: function() { return [this.get_objectId()] },
    get_allRecordIds: function() { return this.get_selectedIds() },
    get_selectedRecords: function() {
        var $v_0 = this.getEntityReference();
        return [$v_0]
    },
    getEntityReference: function() {
        var $v_0 = new Mscrm.EntityReference;
        $v_0.Id = this.get_objectId();
        $v_0.TypeCode = this.get_objectTypeCode();
        $v_0.TypeName = this.get_objectTypeName();
        return $v_0
    },
    get_allRecords: function() { return this.get_selectedRecords() },
    get_unselectedIds: function() { return [] },
    get_unselectedRecords: function() { return [] },
    getUnformattedValue: function(column) { return this.getFormDataComponent(column) },
    getUnformattedRawValue: function(column) {
        if (!Xrm.Page.data.entity.attributes.getLength()) {
            if (!IsNull(window.RecordData) && !IsNull(window.RecordData[column])) return window.RecordData[column].raw
        } else {
            var $v_0 = Xrm.Page.getAttribute(column);
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.getAttributeType();
                switch ($v_1) {
                case "optionset":
                    var $v_2 = $v_0, $v_3 = $v_2.getValue();
                    if (IsNull($v_3))
                        if (!IsNull(window
                                .RecordData) &&
                            !IsNull(window.RecordData[column])) $v_3 = window.RecordData[column].raw;
                    return $v_3;
                default:
                    return $v_0.getValue()
                }
            }
        }
        return null
    },
    verifyRecordPermission: function(permissionMask) {
        return (permissionMask & this._entityPermissions) === permissionMask
    },
    getFormDataComponent: function(column) {
        if (!Xrm.Page.data.entity.attributes.getLength()) {
            if (!IsNull(window.RecordData) && !IsNull(window.RecordData[column]))
                if (!IsNull(window.RecordData[column].invariant)) return window.RecordData[column].invariant;
                else return window.RecordData[column].value
        } else {
            var $v_0 = Xrm.Page.getAttribute(column);
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.getAttributeType();
                switch ($v_1) {
                case "optionset":
                    var $v_2 = $v_0, $v_3 = $v_2.getInvariantText();
                    if (IsNull($v_3))
                        if (!IsNull(window
                                .RecordData) &&
                            !IsNull(window.RecordData[column])) $v_3 = window.RecordData[column].invariant;
                    if (IsNull($v_3)) $v_3 = $v_2.getText();
                    return $v_3;
                default:
                    return $v_0.getValue()
                }
            }
        }
        return null
    },
    IsValid: function(bypassValidateOwner) {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        var $v_0 = this.get_currentDataEntity();
        if (!IsNull($v_0)) {
            Mscrm.FormControlLite.$3Y();
            return $v_0.validateForSave()
        } else return false
    },
    setFormDirty: function(isDirty) { Mscrm.ReadFormUtilities.set_forceNavigationAway(!isDirty) },
    get_isNew: function() { return isNullOrEmptyString(this.get_objectId()) },
    GetViewportHeight: function() {
        var $v_0 = this.get_element().parentNode.parentNode.parentNode, $v_1;
        $v_1 = $v_0.offsetHeight - 35;
        return $v_1
    },
    GetTab: function(control, makeVisible) {
        var $v_0 = control;
        while (!IsNull($v_0) &&
            $v_0.className !== "ms-crm-Tab" &&
            $v_0.className !== "ms-crm-InlineTab" &&
            $v_0.className !== "ms-crm-InlineTab-Read" &&
            $v_0 !== this.get_element()) $v_0 = $v_0.parentNode;
        makeVisible &&
            !IsNull($v_0) &&
            !isNullOrEmptyString($v_0.id) &&
            $v_0 !== this.get_element() &&
            !this.$2S_3 &&
            this.$6N_3($v_0);
        if (!IsNull($v_0)) return isNullOrEmptyString($v_0.id) ? null : $v_0;
        else return null
    },
    $6N_3: function($p0) {
        this.$2S_3 = true;
        var $v_0 = $get("navInfo");
        !IsNull($v_0) && XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("click"));
        var $v_1 = $find($p0.id);
        !IsNull($v_1) && !$v_1.get_visible() && $v_1.set_visible(true);
        var $v_2 = $get($p0.id + "Tab");
        !IsNull($v_2) && XUI.Html.DispatchDomEvent($v_2, XUI.Html.CreateDomEvent("click"));
        if ($p0.className === "ms-crm-Tab") {
            var $v_3 = $get("crmTabBar"),
                $v_4 = XUI.Html.DomUtils.GetChildElementAt($v_3, parseInt($p0.id.substr(3), 10));
            XUI.Html.DispatchDomEvent($v_4, XUI.Html.CreateDomEvent("click"))
        } else {
            if (!IsNull($v_1) && $v_1.get_displayState() === "collapsed") {
                $v_1.set_displayState("expanded");
                Mscrm.FormUtility.refreshWindowInIE7()
            }
            !this._doNotScrollTab && this.$6n_3($p0)
        }
        this.$2S_3 = false
    },
    $6n_3: function($p0) {
        var $v_0 = $get("formBodyContainer");
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.scrollTop, $v_2 = $p0.offsetTop;
            if ($v_2 !== $v_1) $v_0.scrollTop = $v_2
        }
    },
    get_currentFormId: function() {
        var $v_0 = $find("crmFormSelector");
        if (!IsNull($v_0)) return $v_0.$15_3;
        return null
    },
    Save: function() { Mscrm.ReadFormUtilities.get_pageHandler().save() },
    SaveAndClose: function() {
        if (Mscrm.Utilities.isGlobalQuickCreateForm()) Mscrm.ReadFormUtilities.get_pageHandler().save();
        else Mscrm.ReadFormUtilities.get_pageHandler().saveAndClose()
    },
    SaveAndNew: function() {
        if (Mscrm.Utilities.isGlobalQuickCreateForm()) Mscrm.ReadFormUtilities.get_pageHandler().save();
        else Mscrm.ReadFormUtilities.get_pageHandler().saveAndNew()
    },
    IsReadyToClose: function() {
        if (window.IsTurboForm) return !Mscrm.TurboForm.Control.CommandService.promptDataLossOnCloseInTurbo();
        return !Mscrm.ReadFormUtilities.promptOnClose()
    },
    CloseAlertAttached: function() { return Mscrm.InternalUtilities.Utilities.isRefreshForm() },
    $2o_3: null,
    get_recordSetControl: function() {
        if (IsNull(this.$2o_3)) this.$2o_3 = $find("recordSetToolBar");
        return this.$2o_3
    },
    Print: function() {
        var $v_0 = this.containsSubgridWithMultiPagesData(Mscrm.Utilities
            .getChildElementsByClassName(this.get_element(), "ms-crm-Form-SubGrid-Layout", false));
        if (!$v_0)
            $v_0 = this.containsSubgridWithMultiPagesData(Mscrm.Utilities
                .getChildElementsByClassName(this.get_element(), "ms-crm-Form-SubGrid-Layout-Selected", false));
        var $v_1 = 0;
        if ($v_0) {
            var $v_8 = Mscrm.CrmUri.create("/_grid/print/print_dlg.aspx");
            $v_8.get_query()["printform"] = "true";
            $v_1 = openStdDlg($v_8,
                null,
                parseInt(window.LOCID_PRINT_WINDOW_WIDTH, 10),
                parseInt(window.LOCID_PRINT_WINDOW_HEIGHT, 10));
            if (IsNull($v_1) || $v_1 === -1) return
        }
        var $v_2 = this.get_crmFormSubmitIdInput(),
            $v_3 = $v_2.value,
            $v_4 = Mscrm.CrmUri.create("/_forms/print/print.aspx"),
            $v_5 = this.get_crmFormSubmitObjectTypeInput(),
            $v_6 = Xrm.Page.context.getQueryStringParameters(),
            $v_7 = $v_4.get_query();
        $v_7["objectType"] = $v_5.value;
        if ($v_3 === Mscrm.FormControlLite.$3z) $v_7["id"] = "";
        else $v_7["id"] = $v_3;
        $v_7["title"] = window.parent.document.title;
        $v_7["allsubgridspages"] = $v_1 === 1;
        if (!IsNull(Xrm.Page.data) &&
            !IsNull(Xrm.Page.data.entity) &&
            !IsNull(Xrm.Page.data.entity.attributes) &&
            !IsNull(Xrm.Page.data.entity.attributes.get("statecode"))) {
            var $v_9 = Xrm.Page.getAttribute("statecode");
            if (Xrm.Page.data.entity
                .getEntityName() ===
                "product" &&
                IsNull($v_6["revise"]) &&
                $v_9.getValue() === 3) $v_7["revise"] = true;
            else if (!IsNull($v_6["revise"])) $v_7["revise"] = Boolean.parse($v_6["revise"].toString())
        }
        if (!IsNull(this.get_currentFormId())) $v_7["formid"] = this.get_currentFormId();
        openStdWin($v_4, "print" + buildWinName($v_3), 0, 0, null)
    },
    $2W_3: null,
    $2Y_3: null,
    get_crmFormSubmitIdInput: function() {
        if (IsNull(this.$2W_3)) this.$2W_3 = $get("crmFormSubmitId");
        return this.$2W_3
    },
    get_crmFormSubmitObjectTypeInput: function() {
        if (IsNull(this.$2Y_3)) this.$2Y_3 = $get("crmFormSubmitObjectType");
        return this.$2Y_3
    },
    containsSubgridWithMultiPagesData: function(subgrids) {
        if (IsNull(subgrids)) return false;
        for (var $v_0 = 0, $v_1 = subgrids.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = subgrids[$v_0], $v_3 = $get("_prevPageImg", $v_2), $v_4 = $get("_nextPageImg", $v_2);
            if (!IsNull($v_3) && !this.isGridPageButtonDisabled($v_3) ||
                !IsNull($v_4) && !this.isGridPageButtonDisabled($v_4)) return true
        }
        return false
    },
    isGridPageButtonDisabled: function(pageButton) {
        var $v_0 = pageButton.attributes.getNamedItem("disabled");
        return !IsNull($v_0) && (Boolean.parse($v_0.value) || $v_0.value === "disabled")
    },
    RunReport: function(instance, name, reportType, helpId) {
        var $v_0 = Mscrm.WindowInformation.getWindowInformation(9100);
        if (instance) {
            var $v_1 = Mscrm.CrmUri.create($v_0.Url.toString()), $v_2 = $v_1.get_query();
            $v_2["action"] = "run";
            $v_2["id"] = name;
            $v_2["context"] = "records";
            $v_2["recordstype"] = this.get_objectTypeCode();
            $v_2["records"] = this.get_objectId();
            $v_2["helpID"] = helpId;
            openStdWin($v_1, buildWinName(), $v_0.Width, $v_0.Height, null)
        } else Mscrm.ReportUtil.viewReport(reportType, name, helpId, "run", null)
    }
};
Mscrm.FormNavControl = function($p0) {
    this.$$d_$6v_3 = Function.createDelegate(this, this.$6v_3);
    this.$$d_$60_3 = Function.createDelegate(this, this.$60_3);
    this.$$d_$6b_3 = Function.createDelegate(this, this.$6b_3);
    this.$$d_$6c_3 = Function.createDelegate(this, this.$6c_3);
    this.$$d_$6a_3 = Function.createDelegate(this, this.$6a_3);
    this.$$d_$2O_3 = Function.createDelegate(this, this.$2O_3);
    this.$$d_$6Q_3 = Function.createDelegate(this, this.$6Q_3);
    this.$$d_$6i_3 = Function.createDelegate(this, this.$6i_3);
    this.$$d_$5K_3 = Function.createDelegate(this, this.$5K_3);
    this.$$d_$6O_3 = Function.createDelegate(this, this.$6O_3);
    this.$$d_$6P_3 = Function.createDelegate(this, this.$6P_3);
    this.$$d_$6I_3 = Function.createDelegate(this, this.$6I_3);
    this.$$d_$6K_3 = Function.createDelegate(this, this.$6K_3);
    this.$$d_$4I_3 = Function.createDelegate(this, this.$4I_3);
    this.$2y_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navup.png"));
    this.$2x_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navdown.png"));
    this.$D_3 = new Array(0);
    Mscrm.FormNavControl.initializeBase(this, [$p0])
};
Mscrm.FormNavControl.$3V = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Mscrm.NavigationNode;
    $v_0.Id = "Node_" + $p0;
    $v_0.Caption = $p1;
    $v_0.ColorAccent = $p2;
    $v_0.ImageUrl = $p3;
    var $v_1 = Mscrm.CrmUri.create($p3), $v_2 = Mscrm.ImageStrip.getImageInfo($v_1);
    $v_0.StripeUrl = $v_2.source;
    $v_0.StripeClass = $v_2.cssClass;
    $v_0.Children = [];
    var $v_3 = {};
    $v_3["ActionType"] = "ScriptAction";
    $v_0.Action = $v_3;
    return $v_0
};
Mscrm.FormNavControl.get_$4U = function() {
    var $v_0 = $P_CRM(window.frameElement);
    return IsNull($v_0) || $v_0.css("visibility") === "visible"
};
Mscrm.FormNavControl.isNavLinkEnabled = function(element) {
    return !Sys.UI.DomElement.containsCssClass(element, "ms-crm-Nav-Subarea-Disabled")
};
Mscrm.FormNavControl.enableNavLinkForElement = function(element) {
    element.className.indexOf("ms-crm-Nav-Subarea-Link") >= 0 &&
        Sys.UI.DomElement.removeCssClass(element, "ms-crm-Nav-Subarea-Disabled")
};
Mscrm.FormNavControl.disableNavLinkForElement = function(element) {
    !Sys.UI.DomElement.containsCssClass(element, "ms-crm-Nav-Subarea-Selected") &&
        Sys.UI.DomElement.addCssClass(element, "ms-crm-Nav-Subarea-Disabled")
};
Mscrm.FormNavControl.enableNavLinks = function() {
    var $v_0 = Mscrm.FormNavControl.$32();
    if ($v_0)
        for (var $v_1 = document.getElementsByTagName("a"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            Mscrm.FormNavControl.enableNavLinkForElement($v_3)
        }
};
Mscrm.FormNavControl.$1w = function($p0) { return Sys.UI.DomElement.getVisible($p0) };
Mscrm.FormNavControl.$10 = function($p0, $p1) { Sys.UI.DomElement.setVisible($p0, $p1) };
Mscrm.FormNavControl.$2L = function($p0) {
    return !IsNull($p0) &&
    (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-FormSelector-SubItem") ||
        Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Nav-Subarea-Link"))
};
Mscrm.FormNavControl.$4S = function($p0) {
    return !IsNull($p0) && Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Nav-Group-Heading")
};
Mscrm.FormNavControl.$32 = function() {
    var $v_0 = Mscrm.FormNavControl.$4W("_id");
    if (window.IsTurboForm)
        $v_0 = Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().recordId
            .equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
    return $v_0
};
Mscrm.FormNavControl.$4W = function($p0) {
    var $v_0 = window[$p0];
    if (!IsNull($v_0) && !isNullOrEmptyString($v_0)) return false;
    return true
};
Mscrm.FormNavControl.glowPaneStrip = function(on, controlId) {
    var $v_0 = window.document.getElementById(controlId + "_paneStripDiv");
    Mscrm.Utilities.glowBackground(on, $v_0, "ms-crm-control-SideStrip-Hovered", "ms-crm-control-SideStrip")
};
Mscrm.FormNavControl.prototype = {
    $42_3: "180",
    $41_3: "40",
    $2D_3: null,
    $c_3: null,
    $2C_3: null,
    $1s_3: null,
    $1J_3: null,
    $1I_3: null,
    $P_3: null,
    $38_3: null,
    $1r_3: null,
    $2s_3: null,
    $r_3: null,
    $2P_3: false,
    add_$4r_3: function($p0) {
        this.get_events().addHandler("AfterInit", $p0);
        this.get_isInitialized() && $p0(this, Sys.EventArgs.Empty)
    },
    get_tabLinksListId: function() { return this.$2D_3 },
    set_tabLinksListId: function(value) {
        this.$2D_3 = value;
        return value
    },
    get_subAreaLinksListId: function() { return this.$2C_3 },
    set_subAreaLinksListId: function(value) {
        this.$2C_3 = value;
        return value
    },
    get_formSelector: function() { return this.$P_3 },
    set_formSelector: function(value) {
        this.$P_3 = value;
        return value
    },
    get_$56_3: function() {
        try {
            var $v_0 = Xrm.Page.ui;
            if ($v_0) return $v_0.get_formTitle()
        } catch ($$e_1) {
        }
        return ""
    },
    get_siteMap: function() { return this.$1r_3 },
    set_siteMap: function(value) {
        this.$1r_3 = value;
        return value
    },
    get_siteMapEntityTypeCode: function() { return this.$2s_3 },
    set_siteMapEntityTypeCode: function(value) {
        this.$2s_3 = value;
        return value
    },
    $57_3: function($p0) {
        if (!window.IsTurboForm) !IsNull(Mscrm.FlyOutDialog.currentDialog) && Mscrm.FlyOutDialog.currentDialog.hide();
        for (var $v_0 = 0; $v_0 < this.$D_3.length; $v_0++) {
            var $v_1 = this.$D_3[$v_0];
            if ($p0 === $v_1.id && Mscrm.FormNavControl.isNavLinkEnabled($v_1))
                if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 9) {
                    $v_1.click();
                    return
                } else {
                    var $v_2 = $P_CRM($v_1);
                    $v_2.click();
                    return
                }
        }
    },
    $4J_3: function($p0) {
        var $v_0 = this.get_$56_3();
        if (!IsNull($p0) && !isNullOrEmptyString($p0["title"])) $v_0 = $p0["title"];
        if (IsNull(this.$r_3)) {
            this.$r_3 = Mscrm.FormNavControl.$3V("tab0Tab", $v_0, null, null);
            this.$r_3.Action["EntityTypeCode"] = this.$2s_3
        } else {
            if (!isNullOrEmptyString($v_0)) this.$r_3.Caption = $v_0;
            this.$r_3.Children = []
        }
        if (Mscrm.FormNavControl.$32() || IsNull(this.$D_3) || !IsNull($p0) && $p0["deactivateRecordSitemap"]) return;
        var $v_1 = this.$1r_3;
        if (IsNull($v_1)) return;
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = this.$4x_3($v_1[$v_2]);
            !IsNull($v_3) && Array.add(this.$r_3.Children, $v_3)
        }
    },
    $4x_3: function($p0) {
        if (IsNull($p0.Children)) return null;
        for (var $v_0 = Mscrm.FormNavControl.$3V($p0.Id, $p0.Caption, $p0.ColorAccent, $p0.ImageUrl), $v_1 = 0;
            $v_1 < $p0.Children.length;
            $v_1++) {
            var $v_2 = this.$4w_3($p0.Children[$v_1]);
            !IsNull($v_2) && Array.add($v_0.Children, $v_2)
        }
        if ($v_0.Children.length > 0) return $v_0;
        return null
    },
    $3p_3: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$D_3.length; $v_0++) {
            var $v_1 = this.$D_3[$v_0];
            if ($p0 === $v_1.id && Mscrm.FormNavControl.isNavLinkEnabled($v_1) && this.$5U_3($p0)) return true
        }
        return false
    },
    $4w_3: function($p0) {
        if (IsNull($p0) || !this.$3p_3($p0.Id)) return null;
        return Mscrm.FormNavControl.$3V($p0.Id, $p0.Caption, $p0.ColorAccent, $p0.ImageUrl)
    },
    cacheData: function() {
        this.$4J_3(null);
        var $v_0 = {};
        $v_0["RecordNode"] = this.$r_3;
        return $v_0
    },
    initialize: function() {
        if (window.IsTurboForm) this.$4I_3();
        else Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$4I_3, 1)
    },
    $4I_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("FormNavControls.Initialize");
        $v_0.start();
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_1 = this.get_element();
        this.$c_3 = isNullOrEmptyString(this.$2D_3) ? null : $get(this.$2D_3);
        this.$1s_3 = isNullOrEmptyString(this.$2C_3) ? null : $get(this.$2C_3);
        for (var $v_2 = this.$c_3 ? this.$c_3.getElementsByTagName("A") : [],
            $v_3 = this.$1s_3 ? this.$1s_3.getElementsByTagName("A") : [],
            $v_4 = 0;
            $v_4 < $v_2.length;
            $v_4++) Array.add(this.$D_3, $v_2[$v_4]);
        var $v_5 = !IsNull($find("crmForm")),
            $v_6 = !Mscrm.FormNavControl.$4W("frmReloadId"),
            $v_7 = Mscrm.FormNavControl.$32();
        for ($v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            var $v_9 = $v_3[$v_4];
            if (Sys.UI.DomElement.containsCssClass($v_9, "ms-crm-Nav-Subarea-Link")) {
                Array.add(this.$D_3, $v_9);
                if (!$v_5 && !$v_6)
                    if ($v_7) Sys.UI.DomElement.addCssClass($v_9, "ms-crm-Nav-Subarea-Disabled");
                    else Sys.UI.DomElement.removeCssClass($v_9, "ms-crm-Nav-Subarea-Disabled")
            }
        }
        if (!window.IsTurboForm) {
            this.raiseEventWithCheck(89, this.cacheData());
            this.$4j_3();
            this.$3y_3(true);
            $addHandler($v_1, "keyup", this.$$d_$6K_3);
            $addHandler($v_1, "keydown", this.$$d_$6I_3);
            $addHandler($v_1, "mouseover", this.$$d_$6P_3);
            $addHandler($v_1, "mouseout", this.$$d_$6O_3);
            $addHandler($v_1, "focusin", this.$$d_$5K_3);
            $addHandler($v_1, "focusout", this.$$d_$6i_3);
            $addHandler($v_1, "click", this.$$d_$6Q_3);
            $addHandler(window, "resize", this.$$d_$2O_3);
            this.$2P_3 = true;
            window.UseTabletExperience && $addHandler($v_1, "orientationchange", this.$$d_$6a_3);
            this.$2O_3(null)
        }
        var $v_8 = this.get_events().getHandler("AfterInit");
        !IsNull($v_8) && $v_8(this, Sys.EventArgs.Empty);
        $v_0.stop()
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        var $v_0 = Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 88:
            if (Mscrm.FormNavControl.get_$4U()) {
                this.$4J_3(parameters);
                return this.$r_3
            }
            return null;
        case 90:
            Mscrm.FormNavControl.get_$4U() && this.$5x_3(parameters);
            break
        }
        return $v_0
    },
    $5x_3: function($p0) {
        if (Mscrm.FormNavControl.$32()) return;
        var $v_0 = $p0["id"];
        if (!isNullOrEmptyString($v_0) && $v_0.startsWith("Node_")) {
            $v_0 = $v_0.substring(5, $v_0.length);
            this.$57_3($v_0)
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.get_element();
        if (!IsNull($v_0) && this.$2P_3) {
            $removeHandler($v_0, "keyup", this.$$d_$6K_3);
            $removeHandler($v_0, "keydown", this.$$d_$6I_3);
            $removeHandler($v_0, "mouseover", this.$$d_$6P_3);
            $removeHandler($v_0, "mouseout", this.$$d_$6O_3);
            $removeHandler($v_0, "focusin", this.$$d_$5K_3);
            $removeHandler($v_0, "focusout", this.$$d_$6i_3);
            $removeHandler($v_0, "click", this.$$d_$6Q_3);
            this.$2P_3 = false
        }
        try {
            $removeHandler(window, "resize", this.$$d_$2O_3);
            this.$3y_3(false)
        } catch ($$e_1) {
        }
        !IsNull(this.$38_3) && Sys.Application.remove_load(this.$38_3);
        this.$D_3 = null;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    getItemIds: function() {
        for (var $v_0 = [], $v_1 = 0; $v_1 < this.$D_3.length; $v_1++) {
            var $v_2 = this.$D_3[$v_1];
            Sys.UI.DomElement.containsCssClass($v_2, "ms-crm-Nav-Subarea-Link") && Array.add($v_0, $v_2.id)
        }
        return $v_0
    },
    getItemText: function(itemId) {
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
            var $v_0 = this.$1r_3;
            if (!IsNull($v_0))
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    var $v_2 = this.$3d_3($v_0[$v_1], itemId);
                    if (!IsNull($v_2)) return $v_2.Caption
                }
            return null
        } else {
            var $v_3 = $get(itemId, this.get_element());
            if (!IsNull($v_3)) {
                var $v_4 = $v_3.getElementsByTagName("NOBR");
                if ($v_4.length > 0) return XUI.Html.GetText($v_4[0])
            }
            return null
        }
    },
    getItemVisibility: function(itemId) {
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) return this.$3p_3(itemId);
        var $v_0 = this.$4E_3(itemId);
        if (!IsNull($v_0)) return Mscrm.FormNavControl.$1w($v_0);
        return false
    },
    $5U_3: function($p0) {
        var $v_0 = this.$4E_3($p0);
        if (!IsNull($v_0)) return Mscrm.FormNavControl.isNavLinkEnabled($v_0);
        return false
    },
    $4E_3: function($p0) {
        var $v_0 = $get($p0, this.get_element());
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.parentNode;
            return $v_1
        }
        return null
    },
    $3d_3: function($p0, $p1) {
        var $v_0 = null;
        if (!IsNull($p0) && !isNullOrEmptyString($p1))
            if ($p0.Id === $p1) $v_0 = $p0;
            else if (!IsNull($p0.Children))
                for (var $v_1 = 0; $v_1 < $p0.Children.length; $v_1++) {
                    $v_0 = this.$3d_3($p0.Children[$v_1], $p1);
                    if (!IsNull($v_0)) return $v_0
                }
        return $v_0
    },
    setItemText: function(itemId, text) {
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
            var $v_0 = this.$1r_3;
            if (!IsNull($v_0))
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    var $v_2 = this.$3d_3($v_0[$v_1], itemId);
                    if (!IsNull($v_2)) {
                        if ($v_2.Caption !== text) {
                            $v_2.Caption = text;
                            this.raiseEventWithCheck(89, this.cacheData())
                        }
                        return
                    }
                }
            return
        } else {
            var $v_3 = $get(itemId, this.get_element());
            if (!IsNull($v_3)) {
                var $v_4 = $v_3.getElementsByTagName("NOBR");
                $v_4.length > 0 && XUI.Html.SetText($v_4[0], text)
            }
        }
    },
    setItemVisibility: function(itemId, visible) {
        var $v_0 = $get(itemId, this.get_element());
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.parentNode;
            if (!visible && this.$1J_3 === $v_0) {
                var $v_2 = Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-FormSelector-SubItem")
                        ? "ms-crm-FormSelector-SubItem"
                        : "ms-crm-Nav-Subarea-Link",
                    $$t_9 = this,
                    $v_3 = function($p1_0) { return Sys.UI.DomElement.containsCssClass($p1_0, $v_2) },
                    $v_4 = Array.indexOf(this.$D_3, $v_0),
                    $v_5 = this.$40_3(this.$D_3, $v_4, true, $v_3);
                if ($v_5 === $v_0) $v_5 = this.$40_3(this.$D_3, -1, true, $v_3);
                if ($v_5 === $v_0) $v_5 = this.$40_3(this.$D_3, -1, true);
                Mscrm.Utilities.click($v_5)
            }
            Mscrm.FormNavControl.$10($v_1, visible);
            if (visible) Mscrm.FormNavControl.enableNavLinkForElement($v_0);
            else Mscrm.FormNavControl.disableNavLinkForElement($v_0);
            this.raiseEventWithCheck(89, this.cacheData())
        }
    },
    $40_3: function($p0, $p1, $p2, $p3) {
        for (var $v_0 = $p2 ? 1 : -1, $v_1 = $p1 + $v_0; $v_1 >= 0 && $v_1 < $p0.length; $v_1 += $v_0) {
            var $v_2 = $p0[$v_1];
            if (!$v_2.disabled && Mscrm.FormNavControl.$1w($v_2) && (!$p3 || $p3($v_2))) {
                var $v_3 = $v_2.parentNode, $v_4 = this.get_element();
                while (!IsNull($v_3) && $v_3 !== $v_4 && $v_3.tagName !== "UL") $v_3 = $v_3.parentNode;
                if (!$v_3 || $v_3.tagName !== "UL" || Mscrm.FormNavControl.$1w($v_3)) return $v_2
            }
        }
        if ($p1 < 0) $p1 = 0;
        else if ($p1 >= $p0.length) $p1 = $p0.length - 1;
        return $p0[$p1]
    },
    $2I_3: function($p0) {
        var $v_0 = $p0.target, $v_1 = this.get_element();
        while (!IsNull($v_0) && $v_0 !== $v_1 && $v_0.tagName !== "A") $v_0 = $v_0.parentNode;
        if (!IsNull($v_0) && $v_0.tagName === "A" && (Mscrm.FormNavControl.$2L($v_0) || Mscrm.FormNavControl.$4S($v_0))
        ) return $v_0;
        else return null
    },
    $6Q_3: function($p0) {
        var $v_0 = this.$2I_3($p0), $v_1 = IsNull($v_0) ? null : $v_0.getAttribute("disabled");
        if (Mscrm.Utilities.parseBoolean($v_1)) return;
        this.$2M_3(null);
        if (!IsNull($v_0) && !$v_0.disabled) {
            if (Mscrm.FormNavControl.$2L($v_0)) this.$6o_3($v_0);
            else Mscrm.FormNavControl.$4S($v_0) && this.$58_3($v_0);
            $p0.preventDefault()
        }
    },
    $6a_3: function($p0) {
        var $v_0 = window.orientation;
        !($v_0 % 180) && Mscrm.FormNavControl.$1w($get("crmNavBar_paneTD")) && this.sideStripOnClick()
    },
    $6K_3: function($p0) {
        var $v_0 = this.$2I_3($p0);
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.Utilities.getDomEventKeyCode($p0);
            if ($v_1 === 32) Mscrm.Utilities.click($v_0);
            else if (Mscrm.FormNavControl.$2L($v_0)) {
                var $v_2 = Array.indexOf(this.$D_3, $v_0), $v_3 = true, $v_4 = true;
                switch ($v_1) {
                case 38:
                    $v_3 = false;
                    break;
                case 40:
                    $v_3 = true;
                    break;
                case 36:
                    $v_2 = -1;
                    $v_3 = true;
                    break;
                case 35:
                    $v_2 = this.$D_3.length;
                    $v_3 = false;
                    break;
                default:
                    $v_4 = false;
                    break
                }
                if ($v_4) {
                    var $v_5 = this.$40_3(this.$D_3, $v_2, $v_3);
                    this.$2M_3($v_5)
                }
            }
        }
    },
    $6I_3: function($p0) {
        switch (Mscrm.Utilities.getDomEventKeyCode($p0)) {
        case 38:
        case 40:
        case 36:
        case 35:
        case 32:
            $p0.preventDefault();
            break
        }
    },
    $6P_3: function($p0) {
        var $v_0 = this.$2I_3($p0);
        if (!IsNull($v_0) && Mscrm.FormNavControl.$2L($v_0) && !$v_0.disabled)
            if (Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-FormSelector-SubItem") &&
                !Sys.UI.DomElement
                .containsCssClass($v_0, "ms-crm-FormSelector-SubItem-Selected")
            ) Sys.UI.DomElement.addCssClass($v_0, "ms-crm-FormSelector-SubItem-Hovered");
            else if (Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Nav-Subarea-Link") &&
                !Sys.UI.DomElement
                .containsCssClass($v_0, "ms-crm-Nav-Subarea-Selected")
            ) Sys.UI.DomElement.addCssClass($v_0, "ms-crm-Nav-Subarea-Hovered");
            else if (!(!Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-FormSelector-SubItem") &&
                !Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Nav-Subarea-Link"))) return
    },
    $6O_3: function($p0) {
        var $v_0 = this.$2I_3($p0);
        if (!IsNull($v_0)) {
            Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-FormSelector-SubItem-Hovered");
            Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-Nav-Subarea-Hovered")
        }
    },
    $5K_3: function($p0) {
        var $v_0 = this.$2I_3($p0);
        if (!IsNull($v_0))
            if (Mscrm.FormNavControl.$2L($v_0)) this.$2M_3($v_0);
            else this.$2M_3(null)
    },
    $6i_3: function($p0) { this.$2M_3(null) },
    $2O_3: function($p0) {
        if (this.get_element().parentNode.clientHeight <= 0) {
            var $$t_6 = this;
            window.setTimeout(function() { $$t_6.$2O_3($p0) }, 1);
            return
        }
        this.$4j_3();
        if (this.$c_3) {
            var $v_0 = this.$c_3.parentNode,
                $v_1 = this.get_element().parentNode.clientHeight - 13 - 5,
                $v_2 = IsNull(this.$P_3) ? 0 : this.$P_3.get_height(),
                $v_3 = $v_2 + this.$c_3.scrollHeight;
            this.$6t_3($v_3 > .6 * $v_1, $v_1);
            var $v_4 = $v_1 - ($v_0.offsetHeight + XUI.Html.DomUtils.GetNextSibling($v_0).offsetHeight);
            if ($v_4 > 0) this.$1s_3.style.height = $v_4.toString() + "px"
        }
    },
    $6t_3: function($p0, $p1) {
        if ($p0) {
            var $v_0 = IsNull(this.$P_3) ? 0 : this.$P_3.get_height(), $v_1 = Math.round(.6 * $p1 - $v_0);
            if ($v_1 > 0) this.$c_3.style.height = $v_1.toString() + "px";
            this.$c_3.style.overflowY = "auto"
        } else {
            this.$c_3.style.height = "auto";
            this.$c_3.style.overflowY = "visible"
        }
    },
    $6o_3: function($p0) {
        if (this.$1J_3 !== $p0) {
            this.$51_3(this.$1J_3);
            this.$1J_3 = $p0;
            if (!IsNull($p0))
                if (Sys.UI.DomElement
                    .containsCssClass($p0, "ms-crm-FormSelector-SubItem")
                ) Sys.UI.DomElement.addCssClass($p0, "ms-crm-FormSelector-SubItem-Selected");
                else if (Sys.UI.DomElement
                    .containsCssClass($p0, "ms-crm-Nav-Subarea-Link")
                )
                    !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Nav-Subarea-Disabled") &&
                        Sys.UI.DomElement.addCssClass($p0, "ms-crm-Nav-Subarea-Selected")
        }
    },
    $51_3: function($p0) {
        if (!IsNull($p0) && this.$1J_3 === $p0) {
            this.$1J_3 = null;
            Sys.UI.DomElement.removeCssClass($p0, "ms-crm-FormSelector-SubItem-Selected");
            Sys.UI.DomElement.removeCssClass($p0, "ms-crm-Nav-Subarea-Selected")
        }
    },
    $58_3: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetNextSibling($p0), $v_1 = $p0.getElementsByTagName("IMG")[0];
        if (Mscrm.FormNavControl.$1w($v_0)) {
            Sys.UI.DomElement.removeCssClass($v_1, this.$2y_3.cssClass);
            Sys.UI.DomElement.addCssClass($v_1, this.$2x_3.cssClass);
            $v_1.src = this.$2x_3.source;
            $v_1.alt = window.LOCID_TREE_PLUS;
            Mscrm.FormNavControl.$10($v_0, false)
        } else {
            Sys.UI.DomElement.removeCssClass($v_1, this.$2x_3.cssClass);
            Sys.UI.DomElement.addCssClass($v_1, this.$2y_3.cssClass);
            $v_1.src = this.$2y_3.source;
            $v_1.alt = window.LOCID_TREE_MINUS;
            Mscrm.FormNavControl.$10($v_0, true)
        }
    },
    $2M_3: function($p0) {
        if (!IsNull(this.$1I_3)) {
            Sys.UI.DomElement.removeCssClass(this.$1I_3, "ms-crm-FormSelector-SubItem-Hovered");
            Sys.UI.DomElement.removeCssClass(this.$1I_3, "ms-crm-Nav-Subarea-Hovered");
            this.$1I_3 = null
        }
        if (!IsNull($p0) && !$p0.disabled) {
            var $v_0 = null;
            if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-FormSelector-SubItem") &&
                !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-FormSelector-SubItem-Selected")) {
                Sys.UI.DomElement.addCssClass($p0, "ms-crm-FormSelector-SubItem-Hovered");
                $v_0 = this.$c_3
            } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Nav-Subarea-Link") &&
                !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Nav-Subarea-Selected")) {
                Sys.UI.DomElement.addCssClass($p0, "ms-crm-Nav-Subarea-Hovered");
                $v_0 = this.$1s_3
            } else if (!(!Sys.UI.DomElement.containsCssClass($p0, "ms-crm-FormSelector-SubItem") &&
                !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Nav-Subarea-Link"))) return;
            this.$1I_3 = $p0;
            this.$1I_3.focus();
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.scrollTop,
                    $v_2 = $v_1 + $v_0.offsetHeight,
                    $v_3 = $p0.offsetTop,
                    $v_4 = $v_3 + $p0.offsetHeight;
                if ($v_3 < $v_1) $v_0.scrollTop = $v_3;
                else if ($v_4 > $v_2) $v_0.scrollTop = $v_4 - $v_0.offsetHeight
            }
        }
    },
    $3y_3: function($p0) {
        var $v_0 = window.document.getElementById("crmNavBar_paneStripDiv");
        if (!IsNull($v_0))
            if ($p0) {
                $addHandler($v_0, "mouseover", this.$$d_$6c_3);
                $addHandler($v_0, "mouseout", this.$$d_$6b_3)
            } else {
                $removeHandler($v_0, "mouseover", this.$$d_$6c_3);
                $removeHandler($v_0, "mouseout", this.$$d_$6b_3)
            }
        var $v_1 = window.document.getElementById("crmNavBar_paneAnchor");
        if (!IsNull($v_1))
            if ($p0) {
                $addHandler($v_1, "focus", this.$$d_$6c_3);
                $addHandler($v_1, "blur", this.$$d_$6b_3)
            } else {
                $removeHandler($v_1, "focus", this.$$d_$6c_3);
                $removeHandler($v_1, "blur", this.$$d_$6b_3)
            }
    },
    $6b_3: function($p0) { Mscrm.FormNavControl.glowPaneStrip(false, "crmNavBar") },
    $6c_3: function($p0) { Mscrm.FormNavControl.glowPaneStrip(true, "crmNavBar") },
    sideStripOnClick: function() {
        var $v_0 = Mscrm.FormNavControl.$1w($get("crmNavBar_paneTD"));
        if ($v_0) window.setTimeout(this.$$d_$60_3, 1);
        else window.setTimeout(this.$$d_$6v_3, 1);
        var $$t_1 = this;
        window.setTimeout(function() { $P_CRM(window).trigger("navControlToggled", [$v_0]) }, 10)
    },
    $6v_3: function() {
        Mscrm.FormNavControl.$10($get("crmNavBar_paneTD"), true);
        Mscrm.FormNavControl.$10($get("crmNavBar_VisualizationPaneStripToCollapse"), true);
        Mscrm.FormNavControl.$10($get("crmNavBar_VisualizationPaneStrip"), false);
        $get("crmNavBar").parentNode.style.width = this.$42_3 + "px";
        var $v_0 = $get("mainContainer");
        Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-readForm-Container");
        Sys.UI.DomElement.addCssClass($v_0, "ms-crm-readForm-Container-showNav");
        $get("expandedChevron_anchor").focus();
        if (Mscrm.FormUtility.isBrowserIE8OrLower()) {
            document.body.fireEvent("onresize");
            this.$2O_3(null)
        } else XUI.Html.DispatchDomEvent(window, XUI.Html.CreateDomEvent("resize"))
    },
    $60_3: function() {
        Mscrm.FormNavControl.$10($get("crmNavBar_paneTD"), false);
        Mscrm.FormNavControl.$10($get("crmNavBar_VisualizationPaneStripToCollapse"), false);
        Mscrm.FormNavControl.$10($get("crmNavBar_VisualizationPaneStrip"), true);
        $get("crmNavBar").parentNode.style.width = this.$41_3 + "px";
        var $v_0 = $get("mainContainer");
        Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-readForm-Container-showNav");
        Sys.UI.DomElement.addCssClass($v_0, "ms-crm-readForm-Container");
        $get("crmNavBar_paneAnchor").focus();
        if (Mscrm.FormUtility.isBrowserIE8OrLower()) {
            document.body.fireEvent("onresize");
            this.$2O_3(null)
        } else XUI.Html.DispatchDomEvent(window, XUI.Html.CreateDomEvent("resize"))
    },
    $4j_3: function() {
        var $v_0 = $get("areaForm"), $v_1 = $get("mainContainer"), $v_2 = $get("divInformation");
        if (!IsNull($v_1)) this.get_element().style.height = $v_1.clientHeight + "px";
        else if (!IsNull($v_0))
            if ($v_0.clientHeight) this.get_element().style.height = $v_0.clientHeight + "px";
            else if (!IsNull($v_2) && !IsNull($v_2.parentNode)) {
                var $v_3 = $v_2.parentNode, $$t_5 = this;
                XUI.Html.DomUtils.ForEachChild($v_3,
                    function($p1_0) {
                        if (!isNullOrEmptyString($p1_0.className) &&
                            $p1_0.className.indexOf("page") >= 0 &&
                            $p1_0.clientHeight > 0) {
                            $$t_5.get_element().style.height = $p1_0.clientHeight + "px";
                            return true
                        }
                        return false
                    })
            }
    }
};
Mscrm.FormSelector = function(element) {
    this.$$d_$5p_3 = Function.createDelegate(this, this.$5p_3);
    this.$$d_$5q_3 = Function.createDelegate(this, this.$5q_3);
    this.$$d_$5u_3 = Function.createDelegate(this, this.$5u_3);
    this.$$d_$5t_3 = Function.createDelegate(this, this.$5t_3);
    Mscrm.FormSelector.initializeBase(this, [element])
};
Mscrm.FormSelector.navigateToForm = function(formId, component, isFormChanged) {
    var $v_0 = window._readForm;
    if (!IsNull($v_0) && $v_0) {
        var $v_1 = window._id, $v_2 = window._etc;
        reloadReadForm($v_2, $v_1, formId, true)
    } else if (window.IsTurboForm) {
        var $v_3 = {};
        $v_3["formid"] = formId;
        if (isFormChanged) $v_3["turboformswitch"] = true;
        Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), Xrm.Page.data.entity.getId(), $v_3)
    } else {
        var $v_4 = Mscrm.Utilities.getContentUrl(component);
        $v_4.get_query()["formid"] = formId;
        var $v_5 = {};
        $v_5["sameWindow"] = true;
        openUrlByCrmUrl($v_4, $v_5)
    }
};
Mscrm.FormSelector.prototype = {
    $1e_3: null,
    $22_3: null,
    $15_3: null,
    $1q_3: null,
    $1E_3: null,
    $1F_3: null,
    $G_3: null,
    get_formIds: function() { return this.$1e_3 },
    set_formIds: function(value) {
        this.$1e_3 = value;
        return value
    },
    get_formTitles: function() { return this.$22_3 },
    set_formTitles: function(value) {
        this.$22_3 = value;
        return value
    },
    get_currentFormId: function() { return this.$15_3 },
    set_currentFormId: function(value) {
        this.$15_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (this.get_element().tagName.toUpperCase() === "A") {
            this.$1E_3 = this.$$d_$5t_3;
            this.$1F_3 = this.$$d_$5u_3;
            $addHandler(this.get_element(), "click", this.$1E_3);
            $addHandler(this.get_element(), "keypress", this.$1F_3);
            this.$1q_3 = XUI.Html.DomUtils.GetNextSibling(this.get_element());
            $addHandler(this.$1q_3, "click", this.$1E_3);
            $addHandler(this.$1q_3, "keypress", this.$1F_3)
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (this.$1E_3) {
            $removeHandler(this.get_element(), "click", this.$1E_3);
            $removeHandler(this.$1q_3, "click", this.$1E_3);
            this.$1E_3 = null
        }
        if (this.$1F_3) {
            $removeHandler(this.get_element(), "keypress", this.$1F_3);
            $removeHandler(this.$1q_3, "keypress", this.$1F_3);
            this.$1F_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $1y_3: function($p0) { Mscrm.FormSelector.navigateToForm($p0, this, true) },
    $5t_3: function($p0) { this.$4l_3() },
    $5u_3: function($p0) { Mscrm.Utilities.getDomEventKeyCode($p0) === 32 && this.$4l_3() },
    $4l_3: function() {
        this.$66_3();
        var $v_0 = this.get_element(), $v_1 = Mscrm.Utilities.getXYPos($v_0, window.LOCID_UI_DIR === "RTL");
        this.$G_3.set_top($v_0.offsetHeight + $v_1["y"]);
        this.$G_3.set_left($v_1["x"]);
        this.$G_3.show();
        Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-FormSelector");
        Sys.UI.DomElement.addCssClass($v_0, "ms-crm-FormSelector-Opened")
    },
    $66_3: function() {
        if (!this.$G_3) {
            var $v_0 = this.get_element();
            this.$G_3 = Mscrm.Menu.createMenuForParentElement(document.body);
            this.$G_3.set_stylePrefix("FS");
            this.$G_3.set_propagateStyle(true);
            this.$G_3.set_width(Number.parseInvariant($v_0.getAttribute("menuFlyoutWidth").toString()));
            this.$G_3.set_shiftVertical(false);
            this.$G_3.set_enforceHorizontalOffset(false);
            if (window.LOCID_UI_DIR === "RTL") this.$G_3.set_launchesRight(false);
            else this.$G_3.set_launchesRight(true);
            for (var $v_1 = 0; $v_1 < this.$1e_3.length; $v_1++) {
                var $v_2 = this.$22_3[$v_1], $v_3 = this.$1e_3[$v_1], $v_4 = Mscrm.MenuItem.createMenuItem($v_2);
                $v_4.set_tooltip($v_2);
                $v_4.set_reference($v_3);
                $v_4.set_menuItemId($v_3);
                $v_4.set_actionCallback(this.$$d_$5q_3);
                this.$G_3.addItem($v_4);
                if ($v_3 === this.$15_3) {
                    $v_4.set_isSelected(true);
                    this.$G_3.set_focusElementOnShow($v_4.get_itemContents())
                }
            }
            this.$G_3.set_hideCallback(this.$$d_$5p_3);
            this.$G_3.set_focusElementOnHide(this.get_element())
        }
    },
    $5q_3: function($p0) { $p0.get_reference() !== this.$15_3 && this.$1y_3($p0.get_reference()) },
    $5p_3: function($p0) {
        Sys.UI.DomElement.removeCssClass(this.get_element(), "ms-crm-FormSelector-Opened");
        Sys.UI.DomElement.addCssClass(this.get_element(), "ms-crm-FormSelector")
    }
};
Mscrm.FormUtility = function() {};
Mscrm.FormUtility.isControlDirty = function(control) {
    if (IsNull(control)) return false;
    var $v_0 = false;
    switch (control.tagName) {
    case "INPUT":
    case "SELECT":
    case "TEXTAREA":
    case "TABLE":
    case "DIV":
    case "SPAN":
    case "IMG":
    case "IFRAME":
        var $v_1 = false, $v_2 = Mscrm.FormUtility.getSlugControl(control);
        if (!IsNull($v_2) && $v_2.get_isDataSlug()) $v_1 = $v_2.get_isSlugDirty();
        if (!isNullOrEmptyString(control.id)) {
            var $v_3 = Mscrm.FormControlInputBehavior.GetBehavior(control.id);
            if (!IsNull($v_3)) $v_0 = $v_3.get_isDirty()
        }
        $v_0 = $v_0 || $v_1;
        break
    }
    return $v_0
};
Mscrm.FormUtility.isControlEditable = function(control) {
    var $v_0 = false;
    if (!IsNull(control.disabled)) $v_0 = control.disabled;
    else if (control.contentEditable === "inherit") $v_0 = control.isContentEditable;
    else $v_0 = control.contentEditable === "true" ? true : false;
    return $v_0
};
Mscrm.FormUtility.setFormPropertyValue = function(name, value) {
    var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(value),
        $v_1 = $get("crmForm"),
        $v_2 = $get(name, $v_1),
        $v_3 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_2);
    if (!IsNull($v_3)) {
        $v_3.set_dataValue($v_0);
        $v_3.fireOnChange()
    }
};
Mscrm.FormUtility.setEditableState = function(control, isDisabled) {
    if (!IsNull(control.disabled)) control.disabled = isDisabled;
    else control.contentEditable = !isDisabled
};
Mscrm.FormUtility.getSlugControl = function(control) {
    if (control
        .tagName ===
        "IMG" ||
        control.className === "ms-crm-Money")
        while (control && IsNull(Mscrm.FormUtility.getSlugBehavior(control))) control = control.parentNode;
    else if (control.className === "ms-crm-Duration" && control.tagName.toUpperCase() === "INPUT") {
        var $v_0 = XUI.Html.DomUtils.GetNextSibling(control);
        if ($v_0 && $v_0.className === "ms-crm-SelectBox") control = $v_0
    }
    return Mscrm.FormUtility.getSlugBehavior(control)
};
Mscrm.FormUtility.getSlugBehavior = function(behaviorOwner) {
    if (IsNull(behaviorOwner)) return null;
    var $v_0 = Sys.UI.Behavior.getBehaviorByName(behaviorOwner, "SlugSupport");
    return IsNull($v_0) ? null : $v_0
};
Mscrm.FormUtility.getFormPropertyXmlValue = function(name, value) {
    var $v_0 = $get("crmForm"), $v_1 = $get(name, $v_0);
    return $v_1.DataXml
};
Mscrm.FormUtility.getFormDataXml = function() {
    var $v_0 = $find("crmForm");
    $v_0.BuildXml(false, false, false, false, false);
    var $v_1 = $get("crmFormSubmitXml");
    return $v_1.value
};
Mscrm.FormUtility.updateFieldValue = function(id) {
    var $v_0 = $get("crmForm");
    if (!IsNull($v_0)) {
        var $v_1 = $get(id, $v_0);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Html.CreateDomEvent("change");
            XUI.Html.DispatchDomEvent($v_1, $v_2)
        }
    }
};
Mscrm.FormUtility.constructExecutionObject = function(eventSource, depth, eventArgs, eContext) {
    var $v_0 = Mscrm.ClientApiEventHandlerListUtility.constructExecutionObject(eventSource, depth, eventArgs, eContext);
    return $v_0
};
Mscrm.FormUtility.detachCloseAlert = function() {
    var $v_0 = $find("crmForm");
    $v_0.detachCloseAlert()
};
Mscrm.FormUtility.getCrmFormElement = function(objectTypeCode) {
    var $v_0;
    if (objectTypeCode === 9100) $v_0 = $find("crmFormSubmit");
    else $v_0 = $find("crmForm");
    return $v_0
};
Mscrm.FormUtility.$2v = function($p0, $p1, $p2) {
    if ($p2)
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) $addHandler($p0, "focusin", $p1);
        else $p0.addEventListener("focus", $p1, true);
    else if (Sys.Browser.agent === Sys.Browser.InternetExplorer) $removeHandler($p0, "focusin", $p1);
    else $p0.removeEventListener("focus", $p1, true)
};
Mscrm.FormUtility.refreshWindowInIE7 = function() {
    if (Mscrm.Utilities.get_ieBrowserVersion() > 0)
        if (IsNull(window.document.documentMode) || window.document.documentMode === 7) {
            Sys.UI.DomElement.toggleCssClass(document.body, "IE7DivReset");
            Sys.UI.DomElement.toggleCssClass(document.body, "IE7DivReset")
        }
};
Mscrm.FormUtility.isBrowserIE8OrLower = function() {
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version <= 8
};

function setFormPropertyValue(name, value) { Mscrm.FormUtility.setFormPropertyValue(name, value) }

function getFormPropertyXmlValue(name, value) { return Mscrm.FormUtility.getFormPropertyXmlValue(name, value) }

function updateFieldValue(id) { Mscrm.FormUtility.updateFieldValue(id) }

function getFormDataXml() { return Mscrm.FormUtility.getFormDataXml() }

function saveForm() {
    if (!Mscrm.Utilities.isTurboForm()) {
        var $v_0 = $find("crmForm");
        !IsNull($v_0) && $v_0.Save()
    } else Xrm.Page.data.entity.save()
}

function saveAndCloseForm() {
    if (!Mscrm.Utilities.isTurboForm()) {
        var $v_0 = $find("crmForm");
        !IsNull($v_0) && $v_0.SaveAndClose()
    } else Xrm.Page.data.entity.save("saveandclose")
}

function isFormReadyToClose() {
    var $v_0 = $find("crmForm");
    return IsNull($v_0) ? true : $v_0.IsReadyToClose()
}

function isCloseAlertAttached() {
    var $v_0 = $find("crmForm");
    return IsNull($v_0) ? false : $v_0.CloseAlertAttached()
}

function detachCloseAlert() { Mscrm.FormUtility.detachCloseAlert() }

function getCrmFormElement(objectTypeCode) { return Mscrm.FormUtility.getCrmFormElement(objectTypeCode) }

Mscrm.FormIFrameControl = function(element) {
    this.$$d_$5z_4 = Function.createDelegate(this, this.$5z_4);
    this.$$d_$6Y_4 = Function.createDelegate(this, this.$6Y_4);
    this.$$d_$5L_4 = Function.createDelegate(this, this.$5L_4);
    Mscrm.FormIFrameControl.initializeBase(this, [element]);
    this.$3C_4 = element.id;
    this.$L_4 = element
};
Mscrm.FormIFrameControl.prototype = {
    $3C_4: "",
    $L_4: null,
    $2d_4: "",
    $1S_4: null,
    $3I_4: false,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$2d_4 = this.$L_4.getAttribute("url");
        this.$1S_4 = this.$5Z_4();
        var $v_0 = this.$L_4.getAttribute("delayinitialize");
        if (!isNullOrEmptyString($v_0) && $v_0 === "1") {
            var $$t_1 = this;
            window.setTimeout(function() { $$t_1.$3q_4() }, 500)
        } else this.$3q_4()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.$L_4, "load", this.$$d_$5L_4);
        !IsNull(this.$1S_4) && this.$1S_4.remove_change(this.$$d_$6Y_4);
        Mscrm.UIControl.prototype.dispose.call(this)
    },
    setFocus: function() { this.$L_4.focus() },
    get_disabled: function() { return false },
    set_disabled: function(value) { return value },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 53:
            if (!isNullOrEmptyString(this.$3C_4.trim()))
                if (!IsNull(this.$L_4))
                    try {
                        this.$L_4.src = this.$L_4.src
                    } catch ($$e_3) {
                    }
            break
        }
        return null
    },
    getSrc: function() { return this.$L_4.src },
    setSrc: function(src) { this.$L_4.src = src },
    getUrl: function() { return this.$2d_4 },
    add_readyStateComplete: function(value) { this.get_events().addHandler("ReadyStateComplete", value) },
    remove_readyStateComplete: function(value) { this.get_events().removeHandler("ReadyStateComplete", value) },
    $6s_4: function() {
        if (Mscrm.Utilities.isIosDevice() && !IsNull(this.get_element().parentNode)) {
            this.get_element().parentNode.style.overflow = "scroll";
            this.get_element().parentNode.className += " ms-crm-iFrame-Container"
        }
        var $v_0 = this.get_element().parentNode.parentNode;
        if (IsNull($v_0)) return;
        var $v_1 = this.get_element().id + "_d";
        if ($v_1 !== $v_0.id) {
            $v_0 = $v_0.parentNode;
            if (IsNull($v_0) || $v_0.id !== $v_1) return
        }
        if (!Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Field-Data-Print")) return;
        var $v_2 = 25, $v_3 = parseInt($v_0.getAttribute("rowspan"), 10);
        if (IsNull($v_3) || $v_3 < 1 || isNaN($v_3)) $v_3 = 1;
        this.get_element().style.height = ($v_2 * $v_3).toString() + "px"
    },
    $5Z_4: function() {
        var $v_0 = null, $v_1 = $get("crmForm");
        if (!IsNull($v_1)) $v_0 = $find("crmTabBar");
        return $v_0
    },
    $4N_4: function($p0) {
        var $v_0 = this.get_element();
        while (!IsNull($v_0) && $v_0 !== $p0) $v_0 = $v_0.parentNode;
        return IsNull($v_0)
    },
    $5z_4: function($p0, $p1) {
        if ($p1.$1a_1 === "expanded") {
            $p0.remove_tabStateChange(this.$$d_$5z_4);
            this.$1y_4()
        }
    },
    $1y_4: function() {
        this.$3I_4 = true;
        if (!IsNull(this.$L_4.src) &&
        (this.$L_4.src.toLowerCase().endsWith("/_static/blank.htm") ||
            this.$L_4.src.toLowerCase().endsWith(Mscrm.CrmUri.create("/_static/blank.htm").toString()
                .toLowerCase()))) this.$L_4.src = this.$2d_4
    },
    $6Y_4: function($p0, $p1) { !this.$3I_4 && this.$4N_4($p1.get_tabContent()) && this.$1y_4() },
    $3q_4: function() {
        this.$6s_4();
        $addHandler(this.$L_4, "load", this.$$d_$5L_4);
        var $v_0 = $find("crmForm");
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.GetTab(this.get_element(), false);
            if (!IsNull($v_1)) {
                var $v_2 = $find($v_1.id);
                if ($v_2.get_displayState() === "expanded") this.$1y_4();
                else $v_2.add_tabStateChange(this.$$d_$5z_4)
            } else this.$1y_4()
        } else if (IsNull(this.$1S_4) ||
            this.$4N_4(this.$1S_4.get_currentTabContent()) ||
            parseInt(this.get_element().getAttribute("preload"), 10) === 1) this.$1y_4();
        else this.$1S_4.add_change(this.$$d_$6Y_4)
    },
    $5L_4: function($p0) {
        var $v_0 = this.get_events().getHandler("ReadyStateComplete");
        if ($v_0) {
            var $v_1 = this.get_parent();
            !IsNull($v_1) &&
                Mscrm.FormUIControl.isInstanceOfType($v_1) &&
                $v_0(new Mscrm.IFrameUIControlWrapper($v_1), Sys.EventArgs.Empty)
        }
    }
};
Mscrm.LookupUIControl = function(control) { Mscrm.LookupUIControl.initializeBase(this, [control]) };
Mscrm.LookupUIControl.prototype = {
    addCustomView: function(viewGuid, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        this.get_$6_4().AddCustomView(viewGuid, entityName, viewDisplayName, fetchXml, layoutXml, isDefault)
    },
    addCustomFilter: function(fetchXmlFilter, entityType) {
        this.get_$6_4().addCustomFilter(fetchXmlFilter, entityType)
    },
    allowUserToDisableRelationshipFilter: function(allowFilterOff) {
        this.get_$6_4().AllowUserToDisableRelationshipFilter(allowFilterOff)
    },
    getDefaultView: function() { return this.get_$6_4().get_defaultViewId() },
    setDefaultView: function(viewGuid) { this.get_$6_4().set_defaultViewId(viewGuid) }
};
Mscrm.OptionSetUIControl = function(control) { Mscrm.OptionSetUIControl.initializeBase(this, [control]) };
Mscrm.OptionSetUIControl.prototype = {
    addOption: function(option, placement) {
        this.get_$6_4().AddOption(option.text, option.value.toString(), null, placement)
    },
    clearOptions: function() {
        this.get_element().innerHTML = "";
        this.get_$6_4().AddOption("", "", null, 0)
    },
    removeOption: function(value) {
        this.get_$6_4().RemoveOption(value);
        this.get_$6_4().RemoveOption(value)
    }
};
Mscrm.PostBackUtil = function() {};
Mscrm.PostBackUtil.boolToStr = function(b) { return b ? "true" : "false" };
Mscrm.PostBackUtil.createHiddenInput = function(name, value) {
    var $v_0 = document.createElement("INPUT");
    $v_0.name = name;
    $v_0.id = name;
    $v_0.type = "hidden";
    $v_0.value = value;
    var $v_1 = $get("crmFormSubmit");
    $v_1.appendChild($v_0);
    return $v_0
};
Mscrm.PostBackUtil.deleteInput = function(element) {
    var $v_0 = element.parentNode;
    !IsNull($v_0) && $v_0.removeChild(element)
};

function boolToStr(b) { return Mscrm.PostBackUtil.boolToStr(b) }

function createHiddenInput(name, value) { return Mscrm.PostBackUtil.createHiddenInput(name, value) }

function deleteInput(element) { Mscrm.PostBackUtil.deleteInput(element) }

Mscrm.FormProxyForRibbon = function(element) { Mscrm.FormProxyForRibbon.initializeBase(this, [element]) };
Mscrm.FormProxyForRibbon.prototype = {
    get_ribbonContextType: function() { return this.get_crmFormControl().get_ribbonContextType() },
    get_ribbonRelationshipType: function() { return this.get_crmFormControl().get_ribbonRelationshipType() },
    get_entityTypeCode: function() { return this.get_crmFormControl().get_entityTypeCode() },
    get_entityTypeName: function() { return this.get_crmFormControl().get_entityTypeName() },
    get_selectedRecordCount: function() { return this.get_crmFormControl().get_selectedRecordCount() },
    get_recordCount: function() { return this.get_crmFormControl().get_recordCount() },
    get_selectedIds: function() { return this.get_crmFormControl().get_selectedIds() },
    get_allRecordIds: function() { return this.get_crmFormControl().get_allRecordIds() },
    get_selectedRecords: function() { return this.get_crmFormControl().get_selectedRecords() },
    get_allRecords: function() { return this.get_crmFormControl().get_allRecords() },
    get_unselectedIds: function() { return this.get_crmFormControl().get_unselectedIds() },
    get_unselectedRecords: function() { return this.get_crmFormControl().get_unselectedRecords() },
    getUnformattedValue: function(column) { return this.get_crmFormControl().getUnformattedValue(column) },
    getUnformattedRawValue: function(column) { return this.get_crmFormControl().getUnformattedRawValue(column) },
    verifyRecordPermission: function(permissionMask) {
        return this.get_crmFormControl().verifyRecordPermission(permissionMask)
    },
    $2U_3: null,
    get_crmFormControl: function() {
        if (!this.$2U_3) this.$2U_3 = window.parent.Sys.Application.findComponent("crmForm");
        return this.$2U_3
    }
};
Type.registerNamespace("Xrm");
Xrm.BooleanFormat = function() {};
Xrm.XrmClassicControls = function(items) { Xrm.XrmClassicControls.initializeBase(this, [items]) };
Xrm.XrmClassicControls.prototype = {
    getByIndex: function(position) { return this.$3u_3(Xrm.XrmCollection$1.prototype.getByIndex.call(this, position)) },
    getAll: function() {
        for (var $v_0 = Xrm.XrmCollection$1.prototype.getAll.call(this), $v_1 = new Array($v_0.length), $v_2 = 0;
            $v_2 < $v_0.length;
            $v_2++) $v_1[$v_2] = this.$3u_3($v_0[$v_2]);
        return $v_1
    },
    $3u_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = $p0;
            if (!IsNull($v_0.$0_3)) {
                var $v_1 = $v_0.$0_3, $v_2 = $v_1.$6l_4();
                if (!IsNull($v_2)) return $v_2
            }
        }
        return $p0
    }
};
Mscrm.FormControlClientApiType.registerClass("Mscrm.FormControlClientApiType");
Mscrm.ClientApiConstants.registerClass("Mscrm.ClientApiConstants");
Mscrm.FormEventArgs.registerClass("Mscrm.FormEventArgs", Sys.EventArgs);
Mscrm.EntitySaveEventArgs.registerClass("Mscrm.EntitySaveEventArgs", Mscrm.FormEventArgs);
Mscrm.FormCloseEventArgs.registerClass("Mscrm.FormCloseEventArgs", Mscrm.FormEventArgs);
Mscrm.ControlTypeConverter.registerClass("Mscrm.ControlTypeConverter");
Mscrm.RequiredLevelConverter.registerClass("Mscrm.RequiredLevelConverter");
Mscrm.FormDataManager.registerClass("Mscrm.FormDataManager");
Mscrm.DataLoadArgs.registerClass("Mscrm.DataLoadArgs", Xrm.DataLoadEventArgs);
Mscrm.FormUIElement.registerClass("Mscrm.FormUIElement", Mscrm.CrmUIControl, Mscrm.IClientApiCollectionItem);
Mscrm.FormUIControl.registerClass("Mscrm.FormUIControl", Mscrm.FormUIElement, Mscrm.IFormUIControl);
Mscrm.FormUIFormSelector.registerClass("Mscrm.FormUIFormSelector", Sys.Component);
Mscrm.FormUIManager.registerClass("Mscrm.FormUIManager", Sys.Component);
Mscrm.FormUINavigationBar.registerClass("Mscrm.FormUINavigationBar", Sys.Component);
Mscrm.FormUINavigationBarItem.registerClass("Mscrm.FormUINavigationBarItem", null, Mscrm.IClientApiCollectionItem);
Mscrm.FormUIRuleForm.registerClass("Mscrm.FormUIRuleForm", null, Mscrm.IClientApiCollectionItem);
Mscrm.FormUISection.registerClass("Mscrm.FormUISection", Mscrm.FormUIElement);
Mscrm.FormUITab.registerClass("Mscrm.FormUITab", Mscrm.FormUIElement);
Mscrm.TabStateChangeEventArgs.registerClass("Mscrm.TabStateChangeEventArgs", Sys.EventArgs);
Mscrm.BooleanAttributeWrapper.registerClass("Mscrm.BooleanAttributeWrapper", Xrm.XrmEntityAttributeBoolean);
Mscrm.OptionSetUIControlWrapper.registerClass("Mscrm.OptionSetUIControlWrapper", Xrm.XrmControlOptionSet);
Mscrm.BooleanOptionSetUIControlWrapper.registerClass("Mscrm.BooleanOptionSetUIControlWrapper",
    Mscrm.OptionSetUIControlWrapper);
Mscrm.DataUIControlWrapper.registerClass("Mscrm.DataUIControlWrapper", Xrm.XrmDataControl);
Mscrm.BooleanUIControlWrapper.registerClass("Mscrm.BooleanUIControlWrapper", Mscrm.DataUIControlWrapper);
Mscrm.LookupAttributeWrapper.registerClass("Mscrm.LookupAttributeWrapper", Xrm.XrmEntityAttributeLookup);
Mscrm.DataControlFactory.registerClass("Mscrm.DataControlFactory");
Mscrm.DateTimeAttributeWrapper.registerClass("Mscrm.DateTimeAttributeWrapper", Xrm.XrmEntityAttributeDateTime);
Mscrm.EntityAttributeFactory.registerClass("Mscrm.EntityAttributeFactory");
Mscrm.FormDataAttributeWrapper.registerClass("Mscrm.FormDataAttributeWrapper", Xrm.XrmEntityAttribute);
Mscrm.FormDataEntityWrapper.registerClass("Mscrm.FormDataEntityWrapper", Xrm.XrmEntity);
Mscrm.FormDataManagerWrapper.registerClass("Mscrm.FormDataManagerWrapper", Xrm.XrmFormData);
Mscrm.FormSelectorWrapper.registerClass("Mscrm.FormSelectorWrapper", Xrm.XrmControlFormSelector);
Mscrm.FormUIControlWrapper.registerClass("Mscrm.FormUIControlWrapper", Xrm.XrmControl);
Mscrm.FormSelectorItemWrapper.registerClass("Mscrm.FormSelectorItemWrapper", Xrm.XrmFormSelectorItem);
Mscrm.FormUIElementWrapper.registerClass("Mscrm.FormUIElementWrapper");
Mscrm.FormUIWrapper.registerClass("Mscrm.FormUIWrapper", Xrm.XrmFormUI);
Mscrm.IFrameUIControlWrapper.registerClass("Mscrm.IFrameUIControlWrapper", Xrm.XrmControlIFrame);
Mscrm.LookupUIControlWrapper.registerClass("Mscrm.LookupUIControlWrapper", Xrm.XrmControlLookup, Sys.IDisposable);
Mscrm.OptionSetAttributeWrapper.registerClass("Mscrm.OptionSetAttributeWrapper", Xrm.XrmEntityAttributeOptionSet);
Mscrm.DateTimeUIControlWrapper.registerClass("Mscrm.DateTimeUIControlWrapper", Xrm.XrmControlDateTime);
Mscrm.NavigationBarWrapper.registerClass("Mscrm.NavigationBarWrapper", Xrm.XrmNavigation);
Mscrm.NavigationItemWrapper.registerClass("Mscrm.NavigationItemWrapper", Xrm.XrmNavigationItem);
Mscrm.NumberAttributeWrapper.registerClass("Mscrm.NumberAttributeWrapper", Xrm.XrmEntityAttributeNumber);
Mscrm.SectionWrapper.registerClass("Mscrm.SectionWrapper", Xrm.XrmTabSection);
Mscrm.SubGridUIControlWrapper.registerClass("Mscrm.SubGridUIControlWrapper", Xrm.XrmControlSubGrid);
Mscrm.TabWrapper.registerClass("Mscrm.TabWrapper", Xrm.XrmTab);
Mscrm.TextAttributeWrapper.registerClass("Mscrm.TextAttributeWrapper", Xrm.XrmEntityAttributeString);
Mscrm.WebResourceDataUIControlWrapper.registerClass("Mscrm.WebResourceDataUIControlWrapper", Xrm.XrmControlSilverlight);
Mscrm.WebResourceObjectUIControlWrapper.registerClass("Mscrm.WebResourceObjectUIControlWrapper",
    Xrm.XrmControlWebResource);
Mscrm.DataSlug.registerClass("Mscrm.DataSlug", Mscrm.CrmUIControl);
Mscrm.FormDataControl.registerClass("Mscrm.FormDataControl", Mscrm.UIControl, Mscrm.IFormDataControl);
Mscrm.EmailBodyControl.registerClass("Mscrm.EmailBodyControl", Mscrm.FormDataControl);
Mscrm.HiddenFormDataControl.registerClass("Mscrm.HiddenFormDataControl", Mscrm.FormDataControl);
Mscrm.NotesControl.registerClass("Mscrm.NotesControl", Mscrm.UIControl);
Mscrm.SlugSupport.registerClass("Mscrm.SlugSupport", Mscrm.CrmUIBehavior);
Mscrm.Association.registerClass("Mscrm.Association");
Mscrm.FormDataAttribute.registerClass("Mscrm.FormDataAttribute",
    Sys.Component,
    Mscrm.IClientApiCollectionItem,
    Mscrm.ISerializableFormData);
Mscrm.BooleanAttribute.registerClass("Mscrm.BooleanAttribute", Mscrm.FormDataAttribute);
Mscrm.DateTimeAttribute.registerClass("Mscrm.DateTimeAttribute", Mscrm.FormDataAttribute);
Mscrm.TextAttribute.registerClass("Mscrm.TextAttribute", Mscrm.FormDataAttribute);
Mscrm.EmailAddressAttribute.registerClass("Mscrm.EmailAddressAttribute", Mscrm.TextAttribute);
Mscrm.EmailBodyAttribute.registerClass("Mscrm.EmailBodyAttribute", Mscrm.FormDataAttribute);
Mscrm.FormDataEntity.registerClass("Mscrm.FormDataEntity", Sys.Component, Mscrm.IFormDataEntity);
Mscrm.HtcProxyFormData.registerClass("Mscrm.HtcProxyFormData", null, Mscrm.ISerializableFormData);
Mscrm.LookupAttribute.registerClass("Mscrm.LookupAttribute", Mscrm.FormDataAttribute);
Mscrm.InlineFormDataLookupAttribute.registerClass("Mscrm.InlineFormDataLookupAttribute", Mscrm.LookupAttribute);
Mscrm.InlineFormDataEmailBodyAttribute
    .registerClass("Mscrm.InlineFormDataEmailBodyAttribute", Mscrm.EmailBodyAttribute);
Mscrm.InlineFormDataRelatedCasesLookupAttribute
    .registerClass("Mscrm.InlineFormDataRelatedCasesLookupAttribute", Mscrm.InlineFormDataLookupAttribute);
Mscrm.NumberAttribute.registerClass("Mscrm.NumberAttribute", Mscrm.FormDataAttribute);
Mscrm.OptionSetAttribute.registerClass("Mscrm.OptionSetAttribute", Mscrm.FormDataAttribute);
Mscrm.RemainderData.registerClass("Mscrm.RemainderData", null, Mscrm.ISerializableFormData);
Mscrm.TickerAttribute.registerClass("Mscrm.TickerAttribute", Mscrm.TextAttribute);
Mscrm.UrlAttribute.registerClass("Mscrm.UrlAttribute", Mscrm.TextAttribute);
Mscrm.ValidationEventArgs.registerClass("Mscrm.ValidationEventArgs", Sys.EventArgs);
Mscrm.FormAction.registerClass("Mscrm.FormAction");
Mscrm.FormControlLite.registerClass("Mscrm.FormControlLite",
    Mscrm.CrmUIControl,
    Mscrm.IRibbonSelectionControl,
    Mscrm.IDataControl);
Mscrm.FormControl.registerClass("Mscrm.FormControl", Mscrm.FormControlLite);
Mscrm.FormNavControl.registerClass("Mscrm.FormNavControl", Mscrm.CrmUIControl);
Mscrm.FormSelector.registerClass("Mscrm.FormSelector", Mscrm.CrmUIControl);
Mscrm.FormUtility.registerClass("Mscrm.FormUtility");
Mscrm.FormIFrameControl.registerClass("Mscrm.FormIFrameControl", Mscrm.UIControl);
Mscrm.LookupUIControl.registerClass("Mscrm.LookupUIControl", Mscrm.FormDataControl);
Mscrm.OptionSetUIControl.registerClass("Mscrm.OptionSetUIControl", Mscrm.FormDataControl);
Mscrm.PostBackUtil.registerClass("Mscrm.PostBackUtil");
Mscrm.FormProxyForRibbon.registerClass("Mscrm.FormProxyForRibbon",
    Mscrm.CrmUIControl,
    Mscrm.IRibbonSelectionControl,
    Mscrm.IDataControl);
Xrm.BooleanFormat.registerClass("Xrm.BooleanFormat");
Xrm.XrmClassicControls.registerClass("Xrm.XrmClassicControls", Xrm.XrmControls);
Mscrm.FormControlClientApiType.standard = "standard";
Mscrm.FormControlClientApiType.hidden = "hidden";
Mscrm.FormControlClientApiType.iFrame = "iframe";
Mscrm.FormControlClientApiType.lookup = "lookup";
Mscrm.FormControlClientApiType.optionSet = "optionset";
Mscrm.FormControlClientApiType.subGrid = "subgrid";
Mscrm.FormControlClientApiType.webResource = "webresource";
Mscrm.FormControlClientApiType.quickForm = "quickform";
Mscrm.FormControlClientApiType.notes = "notes";
Mscrm.FormControlClientApiType.timerControl = "timercontrol";
Mscrm.FormControlClientApiType.searchWidget = "kbsearch";
Mscrm.FormControlClientApiType.emailRecipientActivityControl = "emailrecipientactivitycontrol";
Mscrm.FormControlClientApiType.emailEngagementActionsControl = "emailengagementactionscontrol";
Mscrm.ClientApiConstants.attributeIdPrefix = "Attribute_";
Mscrm.ClientApiConstants.primaryEntityId = "PrimaryEntity";
Mscrm.FormUIControl.$37 = null;
Mscrm.BooleanAttribute.$3N = [false, true];
Mscrm.EmailAddressAttribute.$3n = new RegExp('^[^@\\s\\"<>)(\\[\\]:;,]+@[^@\\s\\"<>)(\\[\\]:;,]+$');
Mscrm.FormDataAttribute.sortableDateTimeLength = 19;
Mscrm.FormControlLite.$3z = "{" + Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() + "}";
Mscrm.FormNavControl.toggleEvent = "navControlToggled";
Xrm.BooleanFormat.checkBox = "checkbox";
Xrm.BooleanFormat.dropDown = "dropdown";
Xrm.BooleanFormat.radioButton = "radiobutton"