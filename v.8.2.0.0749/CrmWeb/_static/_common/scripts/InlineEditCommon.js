Type.registerNamespace("Mscrm");
Mscrm.IProcessAwareDataUnboundControl = function() {};
Mscrm.IProcessAwareDataUnboundControl.registerInterface("Mscrm.IProcessAwareDataUnboundControl");
Mscrm.IInlineAttribute = function() {};
Mscrm.IInlineAttribute.registerInterface("Mscrm.IInlineAttribute");
Mscrm.IInlineControlLayout = function() {};
Mscrm.IInlineControlLayout.registerInterface("Mscrm.IInlineControlLayout");
Mscrm.IInlineControlView = function() {};
Mscrm.IInlineControlView.registerInterface("Mscrm.IInlineControlView");
Mscrm.IInlineControlViewModel = function() {};
Mscrm.IInlineControlViewModel.registerInterface("Mscrm.IInlineControlViewModel");
Mscrm.IInlineEditControlView = function() {};
Mscrm.IInlineEditControlView.registerInterface("Mscrm.IInlineEditControlView");
Mscrm.IInlineLayout = function() {};
Mscrm.IInlineLayout.registerInterface("Mscrm.IInlineLayout");
Mscrm.IInlineEditView = function() {};
Mscrm.IInlineEditView.registerInterface("Mscrm.IInlineEditView");
Mscrm.IInlineView = function() {};
Mscrm.IInlineView.registerInterface("Mscrm.IInlineView");
Mscrm.InlineEditLoadOrder = function() {};
Mscrm.InlineEditUtilities = function() {};
Mscrm.InlineEditUtilities.get_activeControl = function() { return Mscrm.InlineEditUtilities.$F };
Mscrm.InlineEditUtilities.set_activeControl = function(value) {
    Mscrm.InlineEditUtilities.$F = value;
    return value
};
Mscrm.InlineEditUtilities.tryCommitAllControls = function() {
    var $v_0 = Xrm.Page.ui;
    if (IsNull($v_0)) return;
    for (var $v_1 = $v_0.controls, $v_2, $v_3 = 0; $v_3 < $v_1.getLength(); $v_3++) {
        $v_2 = $v_1.get($v_3)._control;
        !IsNull($v_2) && $v_2.blur()
    }
};
Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl = function(updateTextSelectionBehavior) {
    var $v_0 = Xrm.Page.ui;
    if (IsNull($v_0)) return;
    var $v_1 = $v_0.getCurrentControl();
    if (IsNull($v_1)) return;
    if (!$v_1.get_editView()) return;
    var $v_2 = $v_1.get_controlMode() === "alwaysedit",
        $v_3 = !IsNull(Xrm.Page.data) && Xrm.Page.data.entity.getIsDirty();
    $v_1.blur();
    if (!$v_1.get_disabled() && !($v_2 && !$v_3)) {
        var $v_4 = $v_1.get_editView(), $v_5 = false;
        if (updateTextSelectionBehavior && !IsNull($v_4)) {
            $v_5 = $v_4.get_selectTextOnEditFocus();
            $v_4.set_selectTextOnEditFocus(false)
        }
        if (Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode() &&
            Mscrm.InlineOptionSetControlView.isInstanceOfType($v_1)) return;
        $v_1.setFocus();
        updateTextSelectionBehavior && !IsNull($v_4) && $v_4.set_selectTextOnEditFocus($v_5)
    }
};
Mscrm.InlineEditUtilities.$o = function($p0) {
    var $v_0 = window.RecordData;
    do {
        if (!IsNull($p0.attributes.getNamedItem("data-uniqueid"))) {
            $v_0 = window.RecordData["quickFormData_" + $p0.getAttribute("data-uniqueid")];
            if (IsNull($v_0)) $v_0 = window.RecordData;
            break
        }
        $p0 = $p0.parentNode
    } while (!IsNull($p0) && !IsNull($p0.parentNode));
    return $v_0
};
Mscrm.InlineEditUtilities.tryCommitActiveControl = function(keepFocus) {
    var $v_0 = Xrm.Page.ui;
    if (IsNull($v_0)) return;
    var $v_1 = $v_0.getCurrentControl();
    if (IsNull($v_1)) return;
    if (!$v_1.get_editView()) return;
    if (!IsNull($v_1.get_state()) && !$v_1.get_state().get_currentState()) return;
    $v_1.blur();
    keepFocus && !$v_1.get_disabled() && $v_1.setFocus()
};
Mscrm.InlineEditUtilities.getLinkedDataObject = function(container) {
    return Mscrm.InlineEditUtilities.$o(container[0])
};
Mscrm.InlineEditUtilities.getEntityReference = function(jsonData) {
    var $v_0 = jsonData["_entity"], $v_1 = Mscrm.InlineEditUtilities.$k($v_0);
    $v_1.Name = CrmEncodeDecode.CrmHtmlDecode($v_0.Name);
    $v_1.TypeDisplayName = CrmEncodeDecode.CrmHtmlDecode($v_0.TypeDisplayName);
    return $v_1
};
Mscrm.InlineEditUtilities.$k = function($p0) {
    var $v_0 = new Mscrm.EntityReference;
    $v_0.Id = $p0.Id;
    $v_0.Name = $p0.Name;
    $v_0.TypeCode = $p0.TypeCode;
    $v_0.TypeName = $p0.TypeName;
    $v_0.TypeDisplayName = $p0.TypeDisplayName;
    return $v_0
};
Mscrm.InlineEditUtilities.getLookupValue = function(value) {
    var $v_0 = null;
    if (IsNull(value)) return null;
    if (!IsNull(value["items"])) {
        var $v_1 = value["items"];
        $v_0 = new Array($v_1.length);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            $v_0[$v_2] = Mscrm.InlineEditUtilities.$i($v_3)
        }
    } else {
        if (isNullOrEmptyString(value["oid"])) return null;
        $v_0 = new Array(1);
        $v_0[0] = Mscrm.InlineEditUtilities.$i(value)
    }
    return $v_0
};
Mscrm.InlineEditUtilities.$i = function($p0) {
    var $v_0 = new LookupControlItem;
    $v_0.id = $p0["oid"];
    $v_0.type = $p0["otype"];
    $v_0.typename = $p0["otypename"];
    $v_0.name = Mscrm.InlineEditUtilities.getDecodedValue($p0);
    $v_0.displayClass = $p0["style"];
    $v_0.callback = $p0["callback"];
    $v_0.entityType = $v_0.typename;
    if (!IsNull($p0["activitypartyid"])) $v_0.activityPartyId = $p0["activitypartyid"];
    if (!IsNull($p0["isprocessenabled"])) $v_0.isProcessEnabled = $p0["isprocessenabled"];
    return $v_0
};
Mscrm.InlineEditUtilities.getRawValue = function(value, fallback) {
    if (!IsNull(value))
        if ("raw" in value) return value["raw"];
        else if (fallback && "value" in value) return Mscrm.InlineEditUtilities.getDecodedValue(value);
    return null
};
Mscrm.InlineEditUtilities.getDefaultValue = function(value) {
    var $v_0 = null;
    if (!IsNull(value)) if ("defaultvalue" in value) $v_0 = value["defaultvalue"];
    return $v_0
};
Mscrm.InlineEditUtilities.getDecodedValue = function(value, replaceBR) {
    if (!IsNull(value))
        if ("value" in value) {
            var $v_0 = value["value"];
            if (!IsNull($v_0)) {
                var $v_1 = CrmEncodeDecode.CrmHtmlDecode($v_0);
                if (replaceBR) $v_1 = $v_1.split("<br>").join("\r");
                return CrmEncodeDecode.CrmHtmlDecode($v_1)
            }
        }
    return null
};
Mscrm.InlineEditUtilities.getDecodedStringValue = function(encodedValue) {
    return Mscrm.InlineEditUtilities.getDecodedValue({ value: encodedValue }, false)
};
Mscrm.InlineEditUtilities.normalizeNewLineForTextArea = function(line) {
    if (!isNullOrEmptyString(line)) {
        line = line.split("\r\n").join("\r");
        line = line.split("\n").join("\r")
    }
    return line
};
Mscrm.InlineEditUtilities.replaceAndEncodeNewLineCharsToBreakHtmlTags = function(line) {
    if (!isNullOrEmptyString(line)) line = CrmEncodeDecode.CrmHtmlEncode(line).split("&#13;").join("<br>");
    return line
};
Mscrm.InlineEditUtilities.isControlDisabled = function(controlId, formData) {
    var $v_0 = formData["_disabledcontrols"];
    return !IsNull($v_0) &&
        !isNullOrEmptyString(controlId) &&
        ($v_0[controlId] === "1" || Mscrm.InlineEditUtilities.$q(controlId))
};
Mscrm.InlineEditUtilities.registerClientControlDisablingState = function(controlId, isDisabled) {
    var $v_0 = Mscrm.InlineEditUtilities.$e();
    $v_0[controlId] = isDisabled
};
Mscrm.InlineEditUtilities.getDisabledControls = function(serverDisabledControls) {
    var $v_0 = {}, $v_1 = {};
    Mscrm.InlineEditUtilities.$p($v_0, $v_1);
    var $$dict_5 = serverDisabledControls;
    for (var $$key_6 in $$dict_5) {
        var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] }, $v_3 = $v_2.key;
        if (IsNull($v_0[$v_3])) $v_1[$v_3] = "1"
    }
    return $v_1
};
Mscrm.InlineEditUtilities.$e = function() {
    var $v_0 = window.RecordData;
    if (IsNull($v_0)) $v_0 = {};
    return !IsNull($v_0["_clientdisabledcontrols"])
        ? $v_0["_clientdisabledcontrols"]
        : ($v_0["_clientdisabledcontrols"] = {})
};
Mscrm.InlineEditUtilities.$q = function($p0) {
    var $v_0 = Mscrm.InlineEditUtilities.$e();
    return !!$v_0[$p0]
};
Mscrm.InlineEditUtilities.$p = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditUtilities.$e(), $$dict_6 = $v_0;
    for (var $$key_7 in $$dict_6) {
        var $v_1 = { key: $$key_7, value: $$dict_6[$$key_7] }, $v_2 = $v_1.value, $v_3 = $v_1.key;
        if ($v_2) $p1[$v_3] = "1";
        else $p0[$v_3] = "1"
    }
};
Mscrm.InlineEditCommonUtilities = function() {};
Mscrm.InlineEditCommonUtilities.setIFramesSourceUrls = function(tab) {
    var $v_0;
    if (IsNull(tab)) $v_0 = document.getElementsByTagName("iframe");
    else $v_0 = tab.getElementsByTagName("iframe");
    if (IsNull($v_0)) return;
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1], $v_3 = $v_2.attributes.getNamedItem("url");
        if (!IsNull($v_3) && XUI.Html.GetComputedStyle($v_2, "display") !== "none") {
            var $v_4 = $v_3.value;
            if ($v_2.src !== $v_4) {
                var $v_5 = Mscrm.InlineEditCommonUtilities.getTab($v_2);
                if (IsNull($v_5) || XUI.Html.GetComputedStyle($v_5, "display") !== "none")
                    if (!Mscrm.InlineEditCommonUtilities.$r($v_4)) {
                        var $v_6 = $v_2.attributes.getNamedItem("id");
                        if (!IsNull($v_6) && $v_6.value === "notescontrol") continue;
                        else if (Mscrm.InlineEditCommonUtilities
                            .isSubgridIframe($v_4)) Mscrm.InlineEditCommonUtilities.$w($v_2);
                        else if (Mscrm.Utilities
                            .isIosDevice() &&
                            !IsNull($v_2.parentNode)) $v_2.parentNode.style.overflow = "scroll";
                        if (!Mscrm.Utilities.isFirefox() ||
                            Mscrm.Utilities.isFirefox() &&
                            !($v_4
                                .startsWith("http://") &&
                                window.location.href.startsWith("https://"))) $v_2.contentWindow.location.replace($v_4);
                        else
                            try {
                                $v_2.contentWindow.location.replace($v_4)
                            } catch ($v_7) {
                                if ($v_7.message.indexOf("0x805e0006") === -1) throw $v_7
                            }
                    }
            }
        }
    }
};
Mscrm.InlineEditCommonUtilities.getTab = function(element) {
    var $v_0 = element;
    while (!IsNull($v_0)) {
        if ($P_CRM($v_0).hasClass("ms-crm-InlineTabBody-Read")) break;
        $v_0 = $v_0.parentNode
    }
    return $v_0
};
Mscrm.InlineEditCommonUtilities.isSubgridIframe = function(iframeUrl) {
    return !IsNull(iframeUrl) && iframeUrl.indexOf("grid.aspx") > 0
};
Mscrm.InlineEditCommonUtilities.$r = function($p0) { return !IsNull($p0) && $p0.indexOf("msgBody.aspx") > 0 };
Mscrm.InlineEditCommonUtilities.$w = function($p0) {
    var $v_0 = $p0.parentNode;
    while (!IsNull($v_0)) {
        var $v_1 = $v_0.attributes.getNamedItem("rowSpan");
        if (!IsNull($v_1) && !isNullOrEmptyString($v_1.value)) {
            $v_0.style.height = "";
            break
        }
        $v_0 = $v_0.parentNode
    }
};
Mscrm.AttributeRequiredLevel = function() {};
Mscrm.ReadFormUIManager = function() {
    this.controls = new Xrm.XrmControls;
    this.tabs = new Mscrm.ClientApiCollection
};
Mscrm.ReadFormUIManager.$s = function() {
    var $v_0 = window.self._globalQuickCreate;
    return IsNull($v_0) ? false : $v_0
};
Mscrm.ReadFormUIManager.prototype = {
    controls: null,
    $B_0: null,
    $E_0: 0,
    tabs: null,
    navigation: null,
    formSelector: null,
    process: null,
    getFormType: function() {
        if (Mscrm.Utilities.isRefreshForm())
            if (isNullOrEmptyString(Xrm.Page.data.entity.getId())) this.$E_0 = 1;
            else if ("_entitydisabled" in this.get_$g_0() && this.get_$g_0()["_entitydisabled"] === "1") this.$E_0 = 4;
            else this.$E_0 = 2;
        return IsNull(this.$E_0) ? 0 : this.$E_0
    },
    getTabs: function() { return this.tabs },
    close: function() { Mscrm.ReadFormUtilities.execute(219) },
    getControls: function() { return this.controls },
    refreshRibbon: function() { refreshRibbon() },
    getViewPortHeight: function() {
        var $v_0 = this.$j_0();
        return IsNull($v_0) ? 0 : $v_0.clientHeight
    },
    getViewPortWidth: function() {
        var $v_0 = this.$j_0();
        return IsNull($v_0) ? 0 : $v_0.clientWidth
    },
    getCurrentControl: function() { return this.get_currentControl() },
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
    get_currentControl: function() { return Mscrm.InlineEditUtilities.$F },
    $S_0: false,
    get_$g_0: function() {
        if (IsNull(this.$B_0) || this.$S_0) {
            var $v_0 = window._entityData;
            if (!IsNull($v_0) && !isNullOrEmptyString($v_0.toString()))
                try {
                    if ("object" === typeof $v_0) this.$B_0 = $v_0;
                    else this.$B_0 = $P_CRM.parseJSON($v_0.toString())
                } catch ($$e_1) {
                    this.$B_0 = {}
                }
            else this.$B_0 = {};
            this.$S_0 = false
        }
        return this.$B_0
    },
    $j_0: function() { return $get("tdAreas") },
    get_formTitle: function() { return $P_CRM("#form_title_div .ms-crm-Form-Title-Data h1").text() },
    set_formTitle: function(value) {
        $P_CRM("#form_title_div .ms-crm-Form-Title-Data h1").text(value);
        !Mscrm.ReadFormUIManager.$s() && setPageTitle(String.format(this.get_$m_0(), _edn, value));
        Mscrm.PageManager.get_instance().raiseEvent(98, null);
        raiseEvent(93, null, null);
        $P_CRM(document).find("h1").attr("title", value);
        return value
    },
    get_entityDataHeader: function() { return window._entityData },
    set_entityDataHeader: function(value) {
        window._entityData = value;
        this.$S_0 = true;
        return value
    },
    get_$m_0: function() { return _readFormTitleMask },
    validateControlsForEntity: function(entityId, setFocus) {
        for (var $v_0 = null, $v_1 = 0; $v_1 < this.controls.getLength(); $v_1++) {
            var $v_2 = this.controls.get($v_1);
            if (!IsNull($v_2) &&
                !IsNull($v_2.get_dataContext) &&
                !IsNull($v_2.get_dataContext()) &&
                !IsNull($v_2.get_dataContext().get_attribute()) &&
                $v_2.get_dataContext().get_attribute().get_parentFormDataEntityId() === entityId) {
                if (!$v_2
                    .get_doNotSubmit() &&
                    !IsNull($v_2.get_validateResult()) &&
                    !$v_2.get_validateResult().isValid) $v_0 = $v_2.get_validateResult();
                else {
                    var $v_3 = $v_2;
                    if (!IsNull($v_3) && !IsNull($v_3.get_errorNotification())
                    ) $v_0 = new Mscrm.ValidationResult(false, $v_3.get_errorNotification())
                }
                if ($v_0) {
                    if (setFocus)
                        if ($v_2.getVisible())
                            (!Mscrm.IFormUIControl.isInstanceOfType($v_2) || $v_2.isVisibleInTree()) && $v_2.setFocus();
                        else {
                            var $v_4 = $v_2.get_dataContext().get_attribute().get_firstAvailableControl();
                            !IsNull($v_4) && $v_4.setFocus()
                        }
                    return $v_0
                }
            }
        }
        return new Mscrm.ValidationResult(true, null)
    }
};
Mscrm.ReadFormUIManagerWrapper = function(formUI) {
    Mscrm.ReadFormUIManagerWrapper.initializeBase(this);
    this.$5_1 = formUI;
    this.formSelector = formUI.formSelector;
    this.navigation = formUI.navigation;
    this.controls = new Xrm.XrmControls;
    this.tabs = new Xrm.XrmTabs;
    var $$t_8 = this;
    formUI.controls.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.XrmInlineControlFactory.createInstance($p1_0);
        $v_1 && $$t_8.controls.add($v_1)
    });
    var $v_0 = formUI.tabs, $$t_9 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_2 = Mscrm.XrmInlineControlFactory.createTabInstance($p1_0);
        $v_2 && $$t_9.tabs.add($v_2)
    })
};
Mscrm.ReadFormUIManagerWrapper.prototype = {
    $5_1: null,
    get_formTitle: function() { return this.$5_1.get_formTitle() },
    set_formTitle: function(value) {
        this.$5_1.set_formTitle(value);
        return value
    },
    get_entityDataHeader: function() { return this.$5_1.get_entityDataHeader() },
    set_entityDataHeader: function(value) {
        this.$5_1.set_entityDataHeader(value);
        return value
    },
    addTab: function(tabView) {
        if (IsNull(this.$5_1.tabs)) this.$5_1.tabs = new Mscrm.ClientApiCollection;
        this.$5_1.tabs.add(tabView);
        this.tabs.add(Mscrm.XrmInlineControlFactory.createTabInstance(tabView))
    },
    getTab: function(tabName) { return this.$5_1.tabs.get(tabName) },
    addControl: function(control) {
        if (IsNull(this.$5_1.controls)) this.$5_1.controls = new Xrm.XrmControls;
        this.$5_1.controls.add(control);
        !Mscrm.Utilities.isMobileRefresh() && this.controls.add(Mscrm.XrmInlineControlFactory.createInstance(control))
    },
    validateControlsForEntity: function(entityId, setFocus) {
        return this.$5_1.validateControlsForEntity(entityId, setFocus)
    },
    clearFormNotification: function(uniqueId) { return this.$5_1.clearFormNotification(uniqueId) },
    close: function() { this.$5_1.close() },
    getCurrentControl: function() { return this.$5_1.get_currentControl() },
    getFormType: function() { return this.$5_1.getFormType() },
    getViewPortHeight: function() { return this.$5_1.getViewPortHeight() },
    getViewPortWidth: function() { return this.$5_1.getViewPortWidth() },
    refreshRibbon: function() { this.$5_1.refreshRibbon() },
    setFormNotification: function(message, notificationLevel, uniqueId) {
        return this.$5_1.setFormNotification(message, notificationLevel, uniqueId)
    },
    setFormHtmlNotification: function(htmlText, notificationLevel, uniqueId) {
        return this.$5_1.setFormHtmlNotification(htmlText, notificationLevel, uniqueId)
    }
};
Mscrm.ReadFormDataManager = function() {};
Mscrm.ReadFormDataManager.prototype = {
    entity: null,
    process: null,
    getIsValid: function() { return $find("crmForm").isValid() },
    refresh: function(save) {
        window.location.href = window.location.href;
        return null
    },
    save: function() { throw Error.create("NotImplementedException") },
    setFormDirty: function(isDirty) { throw Error.create("NotImplementedException") },
    getEntity: function() { return this.entity },
    refreshAppointment: function(appointmentId) { throw Error.create("NotImplementedException") }
};
Mscrm.ReadFormEntityWrapper = function(id, logicalName) {
    this.$Z_0 = id;
    this.$a_0 = logicalName
};
Mscrm.ReadFormEntityWrapper.prototype = {
    $Z_0: "",
    $a_0: "",
    getId: function() { return this.$Z_0 },
    getEntityName: function() { return this.$a_0 }
};
Mscrm.ProcessControlDataWrapper = function(view) {
    Mscrm.ProcessControlDataWrapper.initializeBase(this);
    this.$3_1 = view
};
Mscrm.ProcessControlDataWrapper.prototype = {
    $3_1: null,
    getActiveProcess: function() { return this.$3_1.getActiveProcess() },
    getProcessInstances: function(callback) { this.$3_1.getProcessInstances(callback) },
    setActiveProcess: function(processId, callback) { this.$3_1.setActiveProcess(processId, callback) },
    setActiveProcessInstance: function(processInstanceId, callback) {
        this.$3_1.setActiveProcessInstance(processInstanceId, callback)
    },
    getEnabledProcesses: function(callback) { this.$3_1.getEnabledProcesses(callback) },
    switchProcess: function() { this.$3_1.switchProcess() },
    abandonProcess: function() { this.$3_1.abandonProcess() },
    isLastStage: function() { return this.$3_1.isLastStage() },
    getStatus: function() { return this.$3_1.getStatus() },
    getInstanceName: function() { return this.$3_1.getInstanceName() },
    getInstanceId: function() { return this.$3_1.getInstanceId() },
    setStatus: function(newStatus, callback) { this.$3_1.setStatus(newStatus, callback) },
    canSetActiveStage: function() { return this.$3_1.canSetActiveStage() },
    reactivateProcess: function() { this.$3_1.reactivateProcess() },
    completeProcess: function() { this.$3_1.completeProcess() },
    getActiveStage: function() { return this.$3_1.getActiveStage() },
    getActivePath: function() { return this.$3_1.getActivePath() },
    setActiveStage: function(stageId, callback) { this.$3_1.setActiveStage(stageId, callback) },
    moveNext: function(callback) { this.$3_1.moveNext(callback) },
    movePrevious: function(callback) { this.$3_1.movePrevious(callback) },
    getSelectedStage: function() { return this.$3_1.getSelectedStage() },
    addOnStageChange: function(handler) { this.$3_1.addOnStageChange(handler) },
    removeOnStageChange: function(handler) { this.$3_1.removeOnStageChange(handler) },
    addOnStageSelected: function(handler) { this.$3_1.addOnStageSelected(handler) },
    removeOnStageSelected: function(handler) { this.$3_1.removeOnStageSelected(handler) },
    addOnProcessStatusChange: function(handler) { this.$3_1.addOnProcessStatusChange(handler) },
    removeOnProcessStatusChange: function(handler) { this.$3_1.removeOnProcessStatusChange(handler) }
};
Mscrm.ProcessControlUIWrapper = function(pcView) {
    Mscrm.ProcessControlUIWrapper.initializeBase(this);
    this.$A_1 = pcView
};
Mscrm.ProcessControlUIWrapper.prototype = {
    $A_1: null,
    getId: function() { return this.$A_1.getId() },
    getVisible: function() { return this.$A_1.getVisible() },
    getDisplayState: function() { return this.$A_1.getDisplayState() },
    setDisplayState: function(state) { this.$A_1.setDisplayState(state) },
    setVisible: function(showProcessControl) { this.$A_1.setVisible(showProcessControl) },
    reflow: function(updateUI, parentStage, nextStage) { this.$A_1.reflow(updateUI, parentStage, nextStage) }
};
Mscrm.InlineEditChromeBehaviorBase$1 = function(element) {
    this.$$d_$t_3 = Function.createDelegate(this, this.$t_3);
    this.$$d_$u_3 = Function.createDelegate(this, this.$u_3);
    this.$$d_onChromeMouseOver = Function.createDelegate(this, this.onChromeMouseOver);
    this.$$d_onChromeElementFocus = Function.createDelegate(this, this.onChromeElementFocus);
    this.$$d_onChromeElementBlur = Function.createDelegate(this, this.onChromeElementBlur);
    this.$$d_onElementKeyPress = Function.createDelegate(this, this.onElementKeyPress);
    this.$$d_$v_3 = Function.createDelegate(this, this.$v_3);
    this.$$d_onValueElementClicked = Function.createDelegate(this, this.onValueElementClicked);
    this.$$d_onEditElementWrapperStateChange = Function.createDelegate(this, this.onEditElementWrapperStateChange);
    Mscrm.InlineEditChromeBehaviorBase$1.$$(this.$$gta["Mscrm.InlineEditChromeBehaviorBase$1"]["TInlineView"])
        .initializeBase(this, [element])
};
Mscrm.InlineEditChromeBehaviorBase$1.$$ = function(TInlineView) {
    var $$cn = "InlineEditChromeBehaviorBase$1$" + TInlineView.getName().replace(/\./g, "_");
    if (!Mscrm[$$cn]) {
        var $$ccr = Mscrm[$$cn] = function() {
            (this.$$gta = this.$$gta || {})["Mscrm.InlineEditChromeBehaviorBase$1"] = { TInlineView: TInlineView };
            for (var $v_0 = [], $v_1 = 0; $v_1 < arguments.length; ++$v_1) $v_0[$v_1] = arguments[$v_1];
            Mscrm.InlineEditChromeBehaviorBase$1.apply(this, $v_0)
        };
        $$ccr.registerClass("Mscrm." + $$cn, Mscrm.CrmUIBehavior);
        var $$dict_5 = Mscrm.InlineEditChromeBehaviorBase$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ("constructor" !== $$entry_7.key) $$ccr.prototype[$$entry_7.key] = $$entry_7.value
        }
        $$ccr.$f = 10
    }
    return Mscrm[$$cn]
};
Mscrm.InlineEditChromeBehaviorBase$1.prototype = {
    $0_3: null,
    $4_3: null,
    $K_3: null,
    $L_3: null,
    get_view: function() { return this.$0_3 },
    set_view: function(value) {
        this.$0_3 = value;
        return value
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.$0_3.$6_0;
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.get_editElementWrapper();
            $v_1.unbind("state-commit", this.$$d_onEditElementWrapperStateChange);
            $v_1.unbind("state-discard", this.$$d_onEditElementWrapperStateChange)
        }
        if (!IsNull(this.$0_3.$1_0)) {
            this.$0_3.$1_0.unbind("click", this.$$d_onValueElementClicked);
            this.$0_3.$1_0.unbind("state-edit", this.$$d_$v_3);
            this.$0_3.$1_0.unbind("state-read", this.$$d_$v_3);
            this.$0_3.$1_0.unbind("state-edithint", this.$$d_$v_3)
        }
        if (!IsNull(this.$0_3.$2_0)) {
            if (Mscrm.Utilities.isIE()) this.$0_3.$2_0.unbind("keydown", this.$$d_onElementKeyPress);
            else this.$0_3.$2_0.unbind("keypress", this.$$d_onElementKeyPress);
            this.$0_3.$2_0.unbind("blur", this.$$d_onChromeElementBlur);
            if (!window.UseTabletExperience) {
                this.$0_3.$2_0.unbind("focus", this.$$d_onChromeElementFocus);
                this.$0_3.$2_0.unbind("mouseenter", this.$$d_onChromeMouseOver)
            }
        }
        this.$4_3.remove_propertyChanged(this.$$d_$u_3);
        this.set_stateData(null);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    get_stateData: function() { return this.$4_3 },
    set_stateData: function(value) {
        !IsNull(this.$4_3) && this.$4_3.dispose();
        this.$4_3 = value;
        return value
    },
    get_chromeStateDataBuilder: function() {
        return this.$K_3 || (this.$K_3 = new Mscrm.InlineEdit.Common.ChromeStateDataBuilder)
    },
    set_chromeStateDataBuilder: function(value) {
        this.$K_3 = value;
        return value
    },
    get_chromeStateMachine: function() {
        return this.$L_3 ||
        (this.$L_3 = Mscrm.Utilities.isMobileRefresh()
            ? new Mscrm.MobileChromeStateMachine
            : new Mscrm.ChromeStateMachine)
    },
    set_chromeStateMachine: function(value) {
        this.$L_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.set_stateData(this.get_chromeStateDataBuilder().build());
        this.$4_3.set_currentState(0);
        this.$4_3.set_validationResult(new Mscrm.ValidationResult(true, null));
        this.$4_3.add_propertyChanged(this.$$d_$u_3);
        this.$0_3.$H_0 = this.$4_3;
        this.$0_3.$2_0.addClass("ms-crm-Inline-Chrome");
        this.registerEditHintEvents();
        this.registerReadEvents();
        this.registerEditEvents();
        this.$0_3.$1_0.bind("state-edit", this.$$d_$v_3);
        this.$0_3.$1_0.bind("state-read", this.$$d_$v_3);
        this.$0_3.$1_0.bind("state-edithint", this.$$d_$v_3);
        if (this.$0_3.get_controlMode() === "deactivated") {
            this.$0_3.$2_0[0].tabIndex = -1;
            this.$0_3.$2_0.attr("data-controlmode", "deactivated")
        }
    },
    initializeForEditElement: function() {
        var $v_0 = this.$0_3.$6_0, $v_1 = $v_0.get_editElementWrapper();
        $v_1.bind("state-commit", this.$$d_onEditElementWrapperStateChange);
        $v_1.bind("state-discard", this.$$d_onEditElementWrapperStateChange)
    },
    registerEditEvents: function() {
        this.registerChromeElementKeyPress();
        this.$0_3.$1_0.click(this.$$d_onValueElementClicked)
    },
    registerChromeElementKeyPress: function() {
        if (Mscrm.Utilities.isIE()) this.$0_3.$2_0.keydown(this.$$d_onElementKeyPress);
        else this.$0_3.$2_0.keypress(this.$$d_onElementKeyPress)
    },
    registerReadEvents: function() { this.$0_3.$2_0.blur(this.$$d_onChromeElementBlur) },
    registerEditHintEvents: function() {
        if (!window.UseTabletExperience) {
            this.$0_3.$2_0.focus(this.$$d_onChromeElementFocus);
            this.$0_3.$2_0.mouseenter(this.$$d_onChromeMouseOver)
        }
    },
    transitionToState: function(currentState) {
        switch (currentState) {
        case 0:
            this.transitionToReadState();
            break;
        case 1:
            this.transitionToEditHintState();
            break;
        case 2:
            this.$0_3.tryCompleteOnDemandInitialization();
            this.transitionToEditState();
            break
        }
    },
    transitionToEditState: function() {
        this.$0_3.$1_0.trigger("state-edit");
        this.$0_3.$6_0.get_editElementWrapper().trigger("state-edit")
    },
    transitionToReadState: function() {
        this.$0_3.get_isEditControlInitialized() && this.$0_3.$6_0.get_editElementWrapper().trigger("state-read");
        this.$0_3.$1_0.trigger("state-read")
    },
    transitionToEditHintState: function() { this.$0_3.$1_0.trigger("state-edithint") },
    activateLink: function() {},
    $u_3: function($p0, $p1) {
        if ($p1.get_propertyName() === "CurrentState") this.transitionToState(this.$4_3.get_currentState());
        else {
            var $$t_4 = this;
            this.get_chromeStateMachine().transition(this.$4_3,
                function($p1_0, $p1_1) {
                    switch ($$t_4.$0_3.get_controlMode()) {
                    case "locked":
                        return $p1_1 !== 2 && (!Mscrm.Utilities.isMobileRefresh() || $p1_1 !== 1);
                    case "alwaysedit":
                        return $p1_1 === 2;
                    case "deactivated":
                        return !$p1_1;
                    default:
                        return true
                    }
                })
        }
    },
    onChromeMouseOver: function(eventObject) {
        if (Mscrm.Utilities.isMobileRefresh()) {
            var $v_0 = Mscrm.InlineEditUtilities.$F;
            !IsNull($v_0) && $v_0.blur()
        }
        this.$4_3.set_chromeMouseOver(true);
        this.$4_3.set_setTimeoutId(window.setTimeout(this.$$d_$t_3, 76))
    },
    onChromeMouseOut: function(eventObject) {
        window.clearTimeout(this.$4_3.get_setTimeoutId());
        this.$4_3.set_chromeMouseOver(false)
    },
    $t_3: function() { this.$4_3.set_chromeMouseOverTimeoutTriggered(true) },
    onValueElementClicked: function(eventObject) { this.$4_3.set_valueElementClicked(true) },
    onChromeElementFocus: function(eventObject) { this.$4_3.set_chromeElementHasFocus(true) },
    onChromeElementBlur: function(eventObject) { this.$4_3.set_chromeElementHasFocus(false) },
    onElementKeyPress: function(eventObject) {
        switch (eventObject.which) {
        case 10:
        case 13:
            eventObject.preventDefault();
            eventObject.stopPropagation();
            if (eventObject.ctrlKey) this.activateLink();
            else this.$4_3.set_elementEnterKeyPressed(true);
            break
        }
    },
    onEditElementWrapperStateChange: function(eventObject) {
        switch (eventObject.type) {
        case "state-commit":
            this.$4_3.set_editElementCommitted(true);
            break;
        case "state-discard":
            this.$4_3.set_editElementDiscarded(true);
            break;
        default:
            break
        }
    },
    toggleEditIconState: function(show) {
        if (!IsNull(this.$0_3.$1_0[0])) {
            var $v_0 = Mscrm.Utilities.getChildElementsByClassName(this.$0_3.$1_0[0], "ms-crm-Inline-EditIcon", true);
            if (!IsNull($v_0) && !IsNull($v_0[0]))
                if (show) $v_0[0].style.display = "inline";
                else $v_0[0].style.display = "none"
        }
    },
    $v_3: function($p0) {
        switch ($p0.type) {
        case "state-read":
            this.$0_3.$1_0.removeClass("ms-crm-Inline-EditHintState");
            this.toggleEditIconState(false);
            this.$0_3.$1_0.show();
            break;
        case "state-edithint":
            this.$0_3.$1_0.addClass("ms-crm-Inline-EditHintState");
            this.toggleEditIconState(true);
            this.handleTabNavigation();
            break;
        case "state-edit":
            this.$0_3.$1_0.hide();
            this.toggleEditIconState(false);
            this.$0_3.$1_0.removeClass("ms-crm-Inline-EditHintState");
            break
        }
    },
    handleTabNavigation: function() {},
    tryTransitionToAlwaysEditMode: function() {
        this.$0_3.get_controlMode() === "alwaysedit" && this.$4_3.set_currentState(2)
    }
};
Mscrm.BaseLayout = function(chromeElement) {
    this.$2_0 = chromeElement;
    this.$I_0 = chromeElement.attr("id")
};
Mscrm.BaseLayout.prototype = {
    $2_0: null,
    $1_0: null,
    $7_0: null,
    $I_0: null,
    get_chromeElementId: function() { return this.$I_0 },
    get_chromeElement: function() { return this.$2_0 },
    get_valueElement: function() {
        if (IsNull(this.$1_0)) this.$1_0 = this.$2_0.children(".ms-crm-Inline-Value");
        return this.$1_0
    },
    get_editElementWrapper: function() {
        if (IsNull(this.$7_0)) this.$7_0 = this.$2_0.children(".ms-crm-Inline-Edit");
        return this.$7_0
    },
    renderForRead: function() {},
    renderForEdit: function() {},
    resetForRead: function() {},
    resetForEdit: function() {},
    setRequiredOrRecommendedLevel: function(level) {},
    isElementInChrome: function(targetElement) {
        var $v_0 = String.format("#{0}", this.$I_0);
        return targetElement.parents($v_0).length > 0 || targetElement.get(0) === this.$2_0.get(0)
    },
    _disposed: false,
    get_isDisposed: function() { return this._disposed },
    dispose: function() {
        if (this._disposed) return;
        this._disposed = true;
        if (!IsNull(this.$2_0)) {
            this.$2_0.empty().remove();
            this.$2_0 = null
        }
        if (!IsNull(this.$1_0)) {
            this.$1_0.empty().remove();
            this.$1_0 = null
        }
        if (!IsNull(this.$7_0)) {
            this.$7_0.empty().remove();
            this.$7_0 = null
        }
    }
};
Mscrm.ChromeStateData = function() { Mscrm.ChromeStateData.initializeBase(this) };
Mscrm.ChromeStateData.prototype = {
    get_chromeMouseOver: function() { return this.$V_1 },
    set_chromeMouseOver: function(value) {
        this.$V_1 = value;
        this.raisePropertyChanged("ChromeMouseOver");
        return value
    },
    get_currentState: function() { return this.$W_1 },
    set_currentState: function(value) {
        this.$W_1 = value;
        this.raisePropertyChanged("CurrentState");
        return value
    },
    get_setTimeoutId: function() { return this.$b_1 },
    set_setTimeoutId: function(value) {
        this.$b_1 = value;
        return value
    },
    get_valueElementClicked: function() { return this.$R_1 },
    set_valueElementClicked: function(value) {
        this.$R_1 = value;
        this.raisePropertyChanged("ValueElementClicked");
        this.$R_1 = false;
        return value
    },
    get_validationResult: function() { return this.$C_1 },
    set_validationResult: function(value) {
        this.$C_1 = value;
        return value
    },
    get_chromeMouseOverTimeoutTriggered: function() { return this.$J_1 },
    set_chromeMouseOverTimeoutTriggered: function(value) {
        this.$J_1 = value;
        this.raisePropertyChanged("ChromeMouseOverTimeoutTriggered");
        this.$J_1 = false;
        return value
    },
    get_chromeElementHasFocus: function() { return this.$U_1 },
    set_chromeElementHasFocus: function(value) {
        this.$U_1 = value;
        this.raisePropertyChanged("ChromeElementHasFocus");
        return value
    },
    get_elementEnterKeyPressed: function() { return this.$O_1 },
    set_elementEnterKeyPressed: function(value) {
        this.$O_1 = value;
        this.raisePropertyChanged("ElementEnterKeyPressed");
        this.$O_1 = false;
        return value
    },
    get_editElementDiscarded: function() { return this.$N_1 },
    set_editElementDiscarded: function(value) {
        this.$N_1 = value;
        this.raisePropertyChanged("EditElementDiscarded");
        this.$N_1 = false;
        return value
    },
    get_editElementCommitted: function() { return this.$M_1 },
    set_editElementCommitted: function(value) {
        this.$M_1 = value;
        this.raisePropertyChanged("EditElementCommitted");
        this.$M_1 = false;
        return value
    },
    $W_1: 0,
    $b_1: 0,
    $V_1: false,
    $J_1: false,
    $U_1: false,
    $M_1: false,
    $N_1: false,
    $O_1: false,
    $R_1: false,
    $C_1: null
};
Mscrm.ChromeStateMachine = function() {};
Mscrm.ChromeStateMachine.prototype = {
    $8_0: null,
    transition: function($p0, $p1) {
        for (var $v_0 = 0; $v_0 < this.get_chromeStates().length; $v_0++) {
            var $v_1 = this.get_chromeStates()[$v_0];
            if ($v_1.handleTransition($p0) &&
                $v_1.get_state() !== $p0.get_currentState() &&
                $p1($p0.get_currentState(), $v_1.get_state())) {
                this.setNewState($p0, $v_1.get_state());
                break
            }
        }
    },
    setNewState: function($p0, $p1) { $p0.set_currentState($p1) },
    get_chromeStates: function() {
        if (IsNull(this.$8_0)) {
            this.$8_0 = [];
            Array.add(this.$8_0, new Mscrm.InlineEdit.Common.EditHintChromeState);
            Array.add(this.$8_0, new Mscrm.InlineEdit.Common.EditChromeState);
            Array.add(this.$8_0, new Mscrm.InlineEdit.Common.ReadChromeState)
        }
        return this.$8_0
    },
    set_chromeStates: function($p0) {
        this.$8_0 = $p0;
        return $p0
    }
};
Mscrm.MobileChromeStateMachine = function() { Mscrm.MobileChromeStateMachine.initializeBase(this) };
Mscrm.MobileChromeStateMachine.prototype = {
    setNewState: function($p0, $p1) {
        if ($p1 === 1) $p1 = 2;
        $p0.set_currentState($p1)
    }
};
Mscrm.InlineEditViewBase = function(view) {
    this.$$d_onPageClick = Function.createDelegate(this, this.onPageClick);
    this.$$d_onEditElementClick = Function.createDelegate(this, this.onEditElementClick);
    this.$$d_$l_0 = Function.createDelegate(this, this.$l_0);
    this.$$d_bindPageClick = Function.createDelegate(this, this.bindPageClick);
    this.$$d_onEditElementWrapperStateChanged = Function.createDelegate(this, this.onEditElementWrapperStateChanged);
    this.$0_0 = view
};
Mscrm.InlineEditViewBase.prototype = {
    get_inlineView: function() { return this.$0_0 },
    get_chromeElement: function() { return this.$0_0.get_chromeElement() },
    get_editElement: function() { return this.$X_0 },
    set_editElement: function(value) {
        this.$X_0 = value;
        return value
    },
    get_editElementWrapper: function() { return this.$7_0 },
    set_editElementWrapper: function(value) {
        this.$7_0 = value;
        return value
    },
    confirm: function() {
        this.updateAttribute();
        this.unbindPageClick()
    },
    updateAttribute: function() {},
    discard: function(adjustFocus) {
        this.get_editElementWrapper().trigger("state-discard");
        this.unbindPageClick()
    },
    initializeInputBehavior: function() {
        this.get_editElementWrapper().bind("state-edit", this.$$d_onEditElementWrapperStateChanged);
        this.get_editElementWrapper().bind("state-read", this.$$d_onEditElementWrapperStateChanged)
    },
    postCreateEditElement: function() { this.bindEditElementClick() },
    onEditElementWrapperStateChanged: function(eventObject) {
        if (IsNull(eventObject)) return;
        switch (eventObject.type) {
        case "state-edit":
            this.$x_0();
            break;
        case "state-read":
            this.hideEditElement();
            break
        }
    },
    $x_0: function() {
        this.showEditElement();
        var $v_0 = this.get_chromeElement().attr("data-initializing");
        if (!isNullOrEmptyString($v_0) && $v_0 === "1") return;
        this.focusEditElement();
        window.setTimeout(this.$$d_bindPageClick, 0)
    },
    focusEditElement: function() {
        this.get_editElement().focus(this.$$d_$l_0);
        try {
            this.get_editElement().focus()
        } catch ($v_0) {
            if (IsNull($v_0["number"]) || $v_0["number"] !== -2146826178) throw $v_0
        }
    },
    $l_0: function($p0) {
        this.get_editElement().unbind("focus", this.$$d_$l_0);
        $p0.stopPropagation()
    },
    showEditElement: function() { this.get_editElementWrapper().show() },
    hideEditElement: function() { this.get_editElementWrapper().hide() },
    onPageClick: function(eventObject) {
        if (IsNull(eventObject)) return;
        var $v_0 = this.$0_0;
        if (!$v_0.isElementInChrome($P_CRM(eventObject.target))) {
            this.confirm();
            eventObject.stopPropagation()
        }
    },
    onEditElementTabKeyDown: function(eventObject) {
        if (IsNull(eventObject) || eventObject.type !== "keydown") return;
        this.confirm()
    },
    onEditElementEnterKeyDown: function(eventObject) {
        if (IsNull(eventObject) || eventObject.type !== "keydown") return;
        this.confirm();
        eventObject.stopPropagation();
        eventObject.preventDefault()
    },
    bindEditElementClick: function() {
        if (this.$0_0.get_controlMode() !== "alwaysedit") return;
        if (Mscrm.Utilities.isMobileRefresh())
            this.get_editElement().unbind("click", this.$$d_onEditElementClick)
                .bind("click", this.$$d_onEditElementClick);
        else this.get_editElement().bind("click", this.$$d_onEditElementClick)
    },
    onEditElementClick: function(eventObject) { this.bindPageClick() },
    bindPageClick: function() {
        if (Mscrm.Utilities.isMobileRefresh())
            $P_CRM(document.body).unbind("click", this.$$d_onPageClick).bind("click", this.$$d_onPageClick);
        else {
            $P_CRM(document.body).bind("click", this.$$d_onPageClick);
            var $$t_2 = this;
            $P_CRM("iframe").each(function($p1_0, $p1_1) { $P_CRM($p1_1).bind("focus", $$t_2.$$d_onPageClick) })
        }
    },
    unbindPageClick: function() {
        $P_CRM(document.body).unbind("click", this.$$d_onPageClick);
        var $$t_2 = this;
        $P_CRM("iframe").each(function($p1_0, $p1_1) { $P_CRM($p1_1).unbind("focus", $$t_2.$$d_onPageClick) })
    },
    dispose: function() {
        this.get_editElement().unbind("click", this.$$d_onEditElementClick);
        this.get_editElementWrapper().unbind("state-edit", this.$$d_onEditElementWrapperStateChanged);
        this.get_editElementWrapper().unbind("state-read", this.$$d_onEditElementWrapperStateChanged);
        this.set_editElement(null);
        this.set_editElementWrapper(null);
        this.$0_0 = null;
        this.unbindPageClick()
    },
    $0_0: null,
    $X_0: null,
    $7_0: null
};
Mscrm.InlineViewBase = function(layout) {
    this.$9_0 = layout;
    this.$2_0 = this.$9_0.get_chromeElement();
    this.$1_0 = this.$9_0.get_valueElement()
};
Mscrm.InlineViewBase.prototype = {
    get_state: function() { return this.$H_0 },
    set_state: function(value) {
        this.$H_0 = value;
        return value
    },
    get_chromeElement: function() { return this.$2_0 },
    set_chromeElement: function(value) {
        this.$2_0 = value;
        return value
    },
    get_valueElement: function() { return this.$1_0 },
    set_valueElement: function(value) {
        this.$1_0 = value;
        return value
    },
    get_layout: function() { return this.$9_0 },
    get_errorNotification: function() { return null },
    goToEditState: function() { this.$H_0.set_currentState(2) },
    blur: function() { this.get_isEditControlInitialized() && this.$6_0.confirm() },
    get_controlMode: function() { return "normal" },
    get_editView: function() { return this.$6_0 },
    set_editView: function(value) {
        this.$6_0 = value;
        return value
    },
    _disposed: false,
    get_isDisposed: function() { return this._disposed },
    dispose: function() {
        if (!IsNull(this.$6_0)) {
            this.$6_0.dispose();
            this.$6_0 = null
        }
        this.$9_0.dispose();
        this.$2_0.empty().remove();
        this.$2_0 = null;
        this.$1_0.empty().remove();
        this.$1_0 = null;
        this.$G_0 = null;
        this._disposed = true
    },
    get_isValid: function() {
        if (!this.get_isEditControlInitialized()) return true;
        return this.$6_0.get_isValid()
    },
    get_validateResult: function() { return this.$d_0 },
    set_validateResult: function(value) {
        this.$d_0 = value;
        return value
    },
    isElementInChrome: function(targetElement) { return this.$9_0.isElementInChrome(targetElement) },
    tryCompleteOnDemandInitialization: function() {},
    get_isEditControlInitialized: function() { return (this.$P_0 & 2) === 2 },
    get_initializationState: function() { return this.$P_0 },
    set_initializationState: function(value) {
        this.$P_0 = value;
        return value
    },
    attachBehaviors: function() { this.createChromeBehavior() },
    createChromeBehavior: function() {
        if (IsNull(this.$G_0))
            this.$G_0 = Mscrm.CrmUIComponent.crmCreate(this.$9_0.get_chromeBehaviorType(),
                { view: this },
                null,
                null,
                this.$2_0.get(0))
    },
    get_chromeBehavior: function() { return this.$G_0 },
    $9_0: null,
    $2_0: null,
    $1_0: null,
    $H_0: null,
    $P_0: 0,
    $6_0: null,
    $G_0: null,
    $d_0: null
};
Mscrm.ChromeState = function() {};
Mscrm.EventNames = function() {};
Mscrm.InlineControlInitializationState = function() {};
Mscrm.InlineCssClassNames = function() {};
Mscrm.InlineEditControlMode = function() {};
Mscrm.StateChangeEvents = function() {};
Type.registerNamespace("Mscrm.InlineEdit");
Mscrm.InlineEdit.RefreshedEventArgs = function(jsonData, command) {
    Mscrm.InlineEdit.RefreshedEventArgs.initializeBase(this);
    this.$Q_1 = jsonData;
    this.$D_1 = command
};
Mscrm.InlineEdit.RefreshedEventArgs.prototype = {
    $Q_1: null,
    $D_1: 0,
    get_jsonData: function() { return this.$Q_1 },
    get_entityReference: function() { return Mscrm.InlineEditUtilities.getEntityReference(this.$Q_1) },
    get_command: function() { return this.$D_1 }
};
Mscrm.InlineEdit.PreValidationEventArgs = function(entityId, command) {
    Mscrm.InlineEdit.PreValidationEventArgs.initializeBase(this);
    this.$D_1 = command;
    this.$Y_1 = entityId;
    this.$C_1 = new Mscrm.ValidationResult(true, null)
};
Mscrm.InlineEdit.PreValidationEventArgs.prototype = {
    $D_1: 0,
    $C_1: null,
    $Y_1: null,
    $T_1: false,
    get_autoSave: function() { return this.$T_1 },
    set_autoSave: function(value) {
        this.$T_1 = value;
        return value
    },
    get_validationResult: function() { return this.$C_1 },
    set_validationResult: function(value) {
        this.$C_1 = value;
        return value
    },
    get_command: function() { return this.$D_1 },
    get_entityId: function() { return this.$Y_1 }
};
Mscrm.InlineEdit.QuickFormRefreshedEventsArgs = function(uniqueId, jsonData, command) {
    Mscrm.InlineEdit.QuickFormRefreshedEventsArgs.initializeBase(this, [jsonData, command]);
    this.$c_2 = uniqueId
};
Mscrm.InlineEdit.QuickFormRefreshedEventsArgs.prototype = { $c_2: null, get_uniqueId: function() { return this.$c_2 } };
Type.registerNamespace("Mscrm.InlineEdit.Common");
Mscrm.InlineEdit.Common.IChromeStateDataBuilder = function() {};
Mscrm.InlineEdit.Common.IChromeStateDataBuilder.registerInterface("Mscrm.InlineEdit.Common.IChromeStateDataBuilder");
Mscrm.InlineEdit.Common.IChromeStateFactory = function() {};
Mscrm.InlineEdit.Common.IChromeStateFactory.registerInterface("Mscrm.InlineEdit.Common.IChromeStateFactory");
Mscrm.InlineEdit.Common.IChromeState = function() {};
Mscrm.InlineEdit.Common.IChromeState.registerInterface("Mscrm.InlineEdit.Common.IChromeState");
Mscrm.InlineEdit.Common.IChromeStateData = function() {};
Mscrm.InlineEdit.Common.IChromeStateData.registerInterface("Mscrm.InlineEdit.Common.IChromeStateData");
Mscrm.InlineEdit.Common.IChromeStateMachine = function() {};
Mscrm.InlineEdit.Common.IChromeStateMachine.registerInterface("Mscrm.InlineEdit.Common.IChromeStateMachine");
Mscrm.InlineEdit.Common.ChromeStateDataBuilder = function() {};
Mscrm.InlineEdit.Common.ChromeStateDataBuilder.prototype = {
    build: function() {
        var $v_0 = new Mscrm.ChromeStateData;
        return $v_0
    }
};
Mscrm.InlineEdit.Common.EditChromeState = function() {};
Mscrm.InlineEdit.Common.EditChromeState.prototype = {
    handleTransition: function($p0) {
        if ($p0.get_elementEnterKeyPressed() && $p0.get_currentState() === 1 ||
            $p0.get_valueElementClicked() && (!$p0.get_currentState() || $p0.get_currentState() === 1)) return true;
        return false
    },
    get_state: function() { return 2 }
};
Mscrm.InlineEdit.Common.EditHintChromeState = function() {};
Mscrm.InlineEdit.Common.EditHintChromeState.prototype = {
    handleTransition: function(stateData) {
        if (stateData.get_chromeMouseOver() &&
            stateData.get_chromeMouseOverTimeoutTriggered() &&
            !stateData.get_currentState() ||
            stateData.get_chromeElementHasFocus() && !stateData.get_currentState()) return true;
        return false
    },
    get_state: function() { return 1 }
};
Mscrm.InlineEdit.Common.ReadChromeState = function() {};
Mscrm.InlineEdit.Common.ReadChromeState.prototype = {
    handleTransition: function(stateData) {
        if (!stateData.get_chromeElementHasFocus() &&
            !stateData.get_chromeMouseOver() &&
            stateData.get_currentState() === 1 ||
            stateData.get_editElementDiscarded() && stateData.get_currentState() === 2 ||
            stateData.get_editElementCommitted() && stateData.get_currentState() === 2) return true;
        return false
    },
    get_state: function() { return 0 }
};
Mscrm.InlineEditLoadOrder.registerClass("Mscrm.InlineEditLoadOrder");
Mscrm.InlineEditUtilities.registerClass("Mscrm.InlineEditUtilities");
Mscrm.InlineEditCommonUtilities.registerClass("Mscrm.InlineEditCommonUtilities");
Mscrm.AttributeRequiredLevel.registerClass("Mscrm.AttributeRequiredLevel");
Mscrm.ReadFormUIManager.registerClass("Mscrm.ReadFormUIManager");
Mscrm.ReadFormUIManagerWrapper.registerClass("Mscrm.ReadFormUIManagerWrapper", Xrm.XrmFormUI);
Mscrm.ReadFormDataManager.registerClass("Mscrm.ReadFormDataManager");
Mscrm.ReadFormEntityWrapper.registerClass("Mscrm.ReadFormEntityWrapper");
Mscrm.ProcessControlDataWrapper.registerClass("Mscrm.ProcessControlDataWrapper", Xrm.XrmProcessControlData);
Mscrm.ProcessControlUIWrapper.registerClass("Mscrm.ProcessControlUIWrapper", Xrm.XrmProcessControlUI);
Mscrm.BaseLayout.registerClass("Mscrm.BaseLayout", null, Mscrm.IInlineLayout);
Mscrm.ChromeStateData.registerClass("Mscrm.ChromeStateData",
    Sys.Component,
    Mscrm.InlineEdit.Common.IChromeStateData,
    Sys.INotifyPropertyChange,
    Sys.IDisposable);
Mscrm.ChromeStateMachine.registerClass("Mscrm.ChromeStateMachine", null, Mscrm.InlineEdit.Common.IChromeStateMachine);
Mscrm.MobileChromeStateMachine.registerClass("Mscrm.MobileChromeStateMachine", Mscrm.ChromeStateMachine);
Mscrm.InlineEditViewBase.registerClass("Mscrm.InlineEditViewBase", null, Mscrm.IInlineEditView, Sys.IDisposable);
Mscrm.InlineViewBase.registerClass("Mscrm.InlineViewBase", null, Mscrm.IInlineView, Sys.IDisposable);
Mscrm.ChromeState.registerClass("Mscrm.ChromeState");
Mscrm.EventNames.registerClass("Mscrm.EventNames");
Mscrm.InlineControlInitializationState.registerClass("Mscrm.InlineControlInitializationState");
Mscrm.InlineCssClassNames.registerClass("Mscrm.InlineCssClassNames");
Mscrm.InlineEditControlMode.registerClass("Mscrm.InlineEditControlMode");
Mscrm.StateChangeEvents.registerClass("Mscrm.StateChangeEvents");
Mscrm.InlineEdit.RefreshedEventArgs.registerClass("Mscrm.InlineEdit.RefreshedEventArgs", Sys.EventArgs);
Mscrm.InlineEdit.PreValidationEventArgs.registerClass("Mscrm.InlineEdit.PreValidationEventArgs", Sys.EventArgs);
Mscrm.InlineEdit.QuickFormRefreshedEventsArgs.registerClass("Mscrm.InlineEdit.QuickFormRefreshedEventsArgs",
    Mscrm.InlineEdit.RefreshedEventArgs);
Mscrm.InlineEdit.Common.ChromeStateDataBuilder
    .registerClass("Mscrm.InlineEdit.Common.ChromeStateDataBuilder",
        null,
        Mscrm.InlineEdit.Common.IChromeStateDataBuilder);
Mscrm.InlineEdit.Common.EditChromeState.registerClass("Mscrm.InlineEdit.Common.EditChromeState",
    null,
    Mscrm.InlineEdit.Common.IChromeState);
Mscrm.InlineEdit.Common.EditHintChromeState.registerClass("Mscrm.InlineEdit.Common.EditHintChromeState",
    null,
    Mscrm.InlineEdit.Common.IChromeState);
Mscrm.InlineEdit.Common.ReadChromeState.registerClass("Mscrm.InlineEdit.Common.ReadChromeState",
    null,
    Mscrm.InlineEdit.Common.IChromeState);
Mscrm.InlineEditLoadOrder.onFormLoad = 0;
Mscrm.InlineEditLoadOrder.deferred = 1;
Mscrm.InlineEditLoadOrder.onDemand = 2;
Mscrm.InlineEditUtilities.$F = null;
Mscrm.AttributeRequiredLevel.none = 0;
Mscrm.AttributeRequiredLevel.systemRequired = 1;
Mscrm.AttributeRequiredLevel.required = 2;
Mscrm.AttributeRequiredLevel.recommended = 3;
Mscrm.ChromeStateData.mouseOverTimeoutPeriod = 76;
Mscrm.ChromeStateData.currentStatePropertyName = "CurrentState";
Mscrm.ChromeStateData.chromeMouseOverPropertyName = "ChromeMouseOver";
Mscrm.ChromeStateData.valueElementClickedPropertyName = "ValueElementClicked";
Mscrm.ChromeStateData.chromeMouseOverTimeoutTriggeredPropertyName = "ChromeMouseOverTimeoutTriggered";
Mscrm.ChromeStateData.chromeElementHasFocusPropertyName = "ChromeElementHasFocus";
Mscrm.ChromeStateData.elementEnterKeyPressedPropertyName = "ElementEnterKeyPressed";
Mscrm.ChromeStateData.editElementDiscardedPropertyName = "EditElementDiscarded";
Mscrm.ChromeStateData.editElementCommittedPropertyName = "EditElementCommitted";
Mscrm.ChromeStateData.editElementHasFocusPropertyName = "EditElementHasFocus";
Mscrm.ChromeState.read = 0;
Mscrm.ChromeState.editHint = 1;
Mscrm.ChromeState.edit = 2;
Mscrm.ChromeState.selected = 3;
Mscrm.EventNames.select = "select";
Mscrm.EventNames.blur = "blur";
Mscrm.EventNames.focus = "focus";
Mscrm.EventNames.click = "click";
Mscrm.EventNames.editValueChange = "ms-crm-EditValueChange";
Mscrm.EventNames.validateOnKeyDown = "ms-crm-ValidateOnKeyDown";
Mscrm.EventNames.propertyChange = "ms-crm-PropertyChange";
Mscrm.EventNames.keyDown = "keydown";
Mscrm.EventNames.keyPress = "keypress";
Mscrm.EventNames.inlineTabStateChange = "InlineTabStateChange";
Mscrm.EventNames.unlock = "unlock";
Mscrm.EventNames.mouseOver = "mouseover";
Mscrm.EventNames.mouseOut = "mouseout";
Mscrm.EventNames.mouseUp = "mouseup";
Mscrm.EventNames.mouseDown = "mousedown";
Mscrm.EventNames.mouseLeave = "mouseleave";
Mscrm.EventNames.mouseEnter = "mouseenter";
Mscrm.EventNames.change = "change";
Mscrm.EventNames.load = "load";
Mscrm.EventNames.focusIn = "focusin";
Mscrm.EventNames.focusOut = "focusout";
Mscrm.InlineControlInitializationState.uninitialized = 0;
Mscrm.InlineControlInitializationState.initializedForRead = 1;
Mscrm.InlineControlInitializationState.initializedForEdit = 2;
Mscrm.InlineCssClassNames.lockedMode = "ms-crm-Inline-Locked";
Mscrm.InlineCssClassNames.chromeElement = "ms-crm-Inline-Chrome";
Mscrm.InlineCssClassNames.lockIcon = "ms-crm-Inline-LockIcon";
Mscrm.InlineCssClassNames.editHintState = "ms-crm-Inline-EditHintState";
Mscrm.InlineCssClassNames.editIcon = "ms-crm-Inline-EditIcon";
Mscrm.InlineCssClassNames.editElement = "ms-crm-Inline-Edit";
Mscrm.InlineCssClassNames.valueElement = "ms-crm-Inline-Value";
Mscrm.InlineEditControlMode.normal = "normal";
Mscrm.InlineEditControlMode.locked = "locked";
Mscrm.InlineEditControlMode.alwaysEdit = "alwaysedit";
Mscrm.InlineEditControlMode.deactivated = "deactivated";
Mscrm.StateChangeEvents.discard = "state-discard";
Mscrm.StateChangeEvents.commit = "state-commit";
Mscrm.StateChangeEvents.validated = "state-validated";
Mscrm.StateChangeEvents.read = "state-read";
Mscrm.StateChangeEvents.editHint = "state-edithint";
Mscrm.StateChangeEvents.edit = "state-edit"