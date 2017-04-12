Type.registerNamespace("Mscrm");
Mscrm.IDuplicateDetectionService = function() {};
Mscrm.IDuplicateDetectionService.registerInterface("Mscrm.IDuplicateDetectionService");
Mscrm.DuplicateDetectionService = function() {
    this.$a_0 = "MSCRM_DuplicateDetection_Notification";
    this.$g_0 = this.get_$1C_0();
    this.$j_0 = 0;
    this.$l_0 = false
};
Mscrm.DuplicateDetectionService.prototype = {
    $a_0: null,
    $j_0: 0,
    $l_0: false,
    $g_0: false,
    $V_0: null,
    get_duplicateDetectionNotificationId: function() { return this.$a_0 },
    set_duplicateDetectionNotificationId: function(value) {
        this.$a_0 = value;
        return value
    },
    get_helperLinkFormat: function() {
        return "<a class='ms-crm-DuplicateDetectionLink' href='#' style='{0}' id='{1}' onclick='{2}' title='{4}' tabIndex='{5}'> <span id='{3}'> {4} </span></a>"
    },
    get_tabIndexOfLink: function() { return 1e3 },
    get_saveMode: function() { return this.$j_0 },
    set_saveMode: function(value) {
        this.$j_0 = value;
        return value
    },
    get_syncMode: function() { return this.$l_0 },
    set_syncMode: function(value) {
        this.$l_0 = value;
        return value
    },
    get_$1C_0: function() {
        return window.IsDuplicateDetectionEnabled && window.IsDuplicateDetectionEnabledForOnlineCreateUpdate
    },
    get_performDuplicateCheck: function() {
        return this.$g_0 &&
            this.get_$1C_0() &&
            !Mscrm.Utilities
            .isMobileRefresh()
    },
    set_performDuplicateCheck: function(value) {
        this.$g_0 = value;
        return value
    },
    callbackToLaunchResolveDuplicateDialog: function(entityXml) {
        return String.format("Mscrm.InlineEditDataService.LaunchResolveDuplicateDialog('{0}');", entityXml)
    },
    callbackToIgnoreResolveDuplicate: function() { return "Mscrm.InlineEditDataService.IgnoreResolveDuplicate();" },
    callbackForUserActionOnDialog: function() { return Mscrm.InlineEditDataService.SaveRecordAsDuplicate },
    get_crmEncodeDecodeProxy: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$V_0)) this.$V_0 = new Mscrm.Proxies.CrmEncodeDecodeProxy;
        return this.$V_0
    },
    set_crmEncodeDecodeProxy: function(value) {
        this.$V_0 = value;
        return value
    },
    generateHelperLink: function(id, onClickHandler, label, inlineStyle) {
        var $v_0 = id + "Text";
        if (Mscrm.InternalUtilities.JSTypes.isNull(inlineStyle)) inlineStyle = "";
        if (Mscrm.InternalUtilities.JSTypes.isNull(label)) label = "";
        return String.format(this.get_helperLinkFormat(),
            inlineStyle,
            this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode(id),
            this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode(onClickHandler),
            this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_0),
            this.get_crmEncodeDecodeProxy().crmHtmlEncode(label),
            this.get_tabIndexOfLink())
    },
    generateResolveDuplicateDialogLink: function(entity) {
        var $v_0 = "/Tools/DuplicateDetection/ViewDuplicates/ViewDuplicatesOnline.aspx?source=1&dType=1";
        if (!entity.get_isNew() && !IsNull(entity.get_recordId())) {
            var $v_1 = "&oid=" + this.get_crmEncodeDecodeProxy().crmUrlEncode(entity.get_recordId());
            $v_0 += $v_1
        }
        return $v_0
    },
    buildXml: function(entity) { return entity.serialize(0) },
    diffAndMergeXml: function(formXml, duplicateEntityXml) {
        var $v_0 = XUI.Xml.LoadXml(formXml),
            $v_1 = XUI.Xml.LoadXml(duplicateEntityXml),
            $v_2 = $v_0.documentElement,
            $v_3 = $v_1.documentElement,
            $$t_E = this;
        XUI.Xml.DomUtils.ForEachChild($v_3,
            function($p1_0) {
                var $v_4 = $p1_0, $v_5 = null;
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) $v_5 = $v_4.cloneNode(true);
                if (!IsNull($v_5)) {
                    var $v_6 = XUI.Xml.SelectSingleNode($v_2, $v_5.nodeName, null),
                        $v_7 = $v_5.attributes.getNamedItem("name");
                    if (!IsNull($v_7) && isNullOrEmptyString(XUI.Xml.GetText($v_7)))
                        if (IsNull($v_6)) {
                            var $v_8 = $$t_E.getLabelFromClientApi($v_5.nodeName, XUI.Xml.GetText($v_5));
                            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_8) && XUI.Xml.SetText($v_7, $v_8);
                            $v_0.documentElement.appendChild($v_5)
                        } else {
                            var $v_9 = $v_6.attributes.getNamedItem("name");
                            if (XUI.Xml.GetText($v_5) === XUI.Xml.GetText($v_6) &&
                                !IsNull($v_9) &&
                                !isNullOrEmptyString(XUI.Xml
                                    .GetText($v_9))) XUI.Xml.SetText($v_7, XUI.Xml.GetText($v_9));
                            else {
                                var $v_A = $$t_E.getLabelFromClientApi($v_5.nodeName, XUI.Xml.GetText($v_5));
                                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_A) &&
                                    XUI.Xml.SetText($v_7, $v_A)
                            }
                            $v_0.documentElement.replaceChild($v_5, $v_6)
                        }
                    else IsNull($v_6) && $v_0.documentElement.appendChild($v_5)
                }
                return false
            });
        return XUI.Xml.XMLSerializer.serializeToString($v_0)
    },
    getLabelFromClientApi: function(attributeName, attributeValue) {
        var $v_0 = Xrm.Page.getAttribute(attributeName), $v_1 = "";
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_2 = $v_0.getAttributeType();
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2))
                switch ($v_2) {
                case "optionset":
                    $v_1 = $v_0.getOption(attributeValue).text;
                    break;
                case "lookup":
                    var $v_3 = $v_0.getValue();
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) $v_1 = $v_3[0].name;
                    break
                }
        }
        return $v_1
    }
};
Mscrm.InlineEditDataService = function() { this.$9_0 = new Sys.EventHandlerList };
Mscrm.InlineEditDataService.get_performDuplicateCheck = function() {
    return Mscrm.InlineEditDataService.$2.get_performDuplicateCheck()
};
Mscrm.InlineEditDataService.set_performDuplicateCheck = function(value) {
    Mscrm.InlineEditDataService.$2.set_performDuplicateCheck(value);
    return value
};
Mscrm.InlineEditDataService.get_pageNavigation = function() { return Mscrm.InlineEditDataService.$R };
Mscrm.InlineEditDataService.set_pageNavigation = function(value) {
    Mscrm.InlineEditDataService.$R = value;
    return value
};
Mscrm.InlineEditDataService.get_primaryEntityChange = function() { return Mscrm.InlineEditDataService.$A };
Mscrm.InlineEditDataService.set_primaryEntityChange = function(value) {
    Mscrm.InlineEditDataService.$A = value;
    return value
};
Mscrm.InlineEditDataService.get_$1F = function() {
    if (IsNull(Mscrm.InlineEditDataService.$F)) Mscrm.InlineEditDataService.$F = new Mscrm.ProgressControl;
    return Mscrm.InlineEditDataService.$F
};
Mscrm.InlineEditDataService.get_formId = function() { return Mscrm.InlineEditDataService.$J };
Mscrm.InlineEditDataService.set_formId = function(value) {
    Mscrm.InlineEditDataService.$J = value;
    return value
};
Mscrm.InlineEditDataService.get_isPreviewForm = function() { return Mscrm.InlineEditDataService.$e };
Mscrm.InlineEditDataService.set_isPreviewForm = function(value) {
    Mscrm.InlineEditDataService.$e = value;
    return value
};
Mscrm.InlineEditDataService.get_$o = function() {
    var $v_0 = 30;
    try {
        $v_0 = _autoSaveInterval
    } catch ($$e_1) {
    }
    return $v_0
};
Mscrm.InlineEditDataService.get_currentAutoSaveInterval = function() { return Mscrm.InlineEditDataService.$I };
Mscrm.InlineEditDataService.get_$1U = function() { return _formVersionNumber };
Mscrm.InlineEditDataService.get_$1j = function() { return _metadataCacheVersion };
Mscrm.InlineEditDataService.get_blockAutoSave = function() { return Mscrm.InlineEditDataService.$G };
Mscrm.InlineEditDataService.set_blockAutoSave = function(value) {
    Mscrm.InlineEditDataService.$G = value;
    return value
};
Mscrm.InlineEditDataService.setBlockAutoSave = function(value) { Mscrm.InlineEditDataService.$G = value };
Mscrm.InlineEditDataService.LaunchResolveDuplicateDialog = function(duplicateEntityXml) {
    var $v_0 = {},
        $v_1 = Mscrm.InlineEditDataService.$2.buildXml(Mscrm.InlineEditDataService.get_formEntity()),
        $v_2 = Mscrm.InlineEditDataService.$2.diffAndMergeXml($v_1, duplicateEntityXml);
    $v_0["xml"] = $v_2;
    var $v_3 = Mscrm.InlineEditDataService.$2
            .generateResolveDuplicateDialogLink(Mscrm.InlineEditDataService.get_formEntity()),
        $v_4 = new Xrm.DialogOptions;
    $v_4.height = 600;
    $v_4.width = 700;
    var $v_5 = Mscrm.InlineEditDataService.$2.callbackForUserActionOnDialog();
    Xrm.Internal.openDialog($v_3, $v_4, $v_0, null, $v_5)
};
Mscrm.InlineEditDataService.IgnoreResolveDuplicate = function() {
    Mscrm.InlineEditDataService.get_dataService().ResolveDuplicateAndTriggerSave()
};
Mscrm.InlineEditDataService.SaveRecordAsDuplicate = function(response) {
    response === "Save" && Mscrm.InlineEditDataService.get_dataService().ResolveDuplicateAndTriggerSave()
};
Mscrm.InlineEditDataService.$13 = function() {
    Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization()
};
Mscrm.InlineEditDataService.$z = function($p0) {
    for (var $v_0 = "", $v_1 = 0; $v_1 < $p0.get_pendingAssociations().length; $v_1++) {
        var $v_2 = $p0.get_pendingAssociations()[$v_1];
        $v_0 += String
            .format("<association><relationshipname>{0}</relationshipname><sourceentityid>{1}</sourceentityid><sourceentitylogicalname>{2}</sourceentitylogicalname><relationshiproleordinal>{3}</relationshiproleordinal></association>", CrmEncodeDecode.CrmXmlEncode($v_2.get_relationshipName()), CrmEncodeDecode.CrmXmlEncode($v_2.get_sourceEntityId()), CrmEncodeDecode.CrmXmlEncode($v_2.get_sourceEntityLogicalName()), CrmEncodeDecode.CrmXmlEncode($v_2.get_isReverse().toString()))
    }
    return $v_0
};
Mscrm.InlineEditDataService.execute = function(command, commandXml, sync, doNotShowProgressControl) {
    var $v_0 = {};
    $v_0["command"] = command;
    Mscrm.InlineEditDataService.setAttributeValueBeforeSave();
    return Mscrm.InlineEditDataService.executeWithReference(command,
        commandXml,
        sync,
        $v_0,
        Mscrm.InlineEditDataService.$1A,
        doNotShowProgressControl)
};
Mscrm.InlineEditDataService.executeWithReference = function(command,
    commandXml,
    sync,
    reference,
    callback,
    doNotShowProgressControl) {
    var $v_0 = null;
    (IsNull(doNotShowProgressControl) || !doNotShowProgressControl) &&
        Mscrm.InlineEditDataService.get_$1F().show(command);
    var $v_1 = new RemoteCommand("InlineEditWebService", "Execute");
    $v_1.SetParameter("command", command);
    $v_1.SetParameter("commandXml", commandXml);
    $v_1.ErrorHandler = Mscrm.InlineEditDataService.$2C;
    if (IsNull(reference)) reference = {};
    if (!("command" in reference)) reference["command"] = command;
    $v_1.Reference = reference;
    if (!IsNull(sync) && sync) {
        Mscrm.InlineEditDataService.set_busy(true);
        try {
            $v_0 = $v_1.Execute();
            !IsNull(callback) && callback($v_0, $v_1);
            Mscrm.InlineEditDataService.$A = true
        } finally {
            Mscrm.InlineEditDataService.set_busy(false);
            !Mscrm.InlineEditDataService.get_busy() && Mscrm.InlineEditDataService.$t()
        }
    } else {
        if (IsNull(reference)) reference = {};
        if (!("command" in reference)) reference["command"] = command;
        $v_1.Reference = reference;
        Mscrm.ErrorStatusControl.hide(10);
        Mscrm.AggregatePerformanceMarkers.beginMarker("ServiceRoundtrip");
        $v_0 = $v_1.Execute(callback);
        Mscrm.InlineEditDataService.set_busy(true)
    }
    return $v_0
};
Mscrm.InlineEditDataService.get_dataService = function() {
    if (IsNull(Mscrm.InlineEditDataService.$Z)) Mscrm.InlineEditDataService.$Z = new Mscrm.InlineEditDataService;
    return Mscrm.InlineEditDataService.$Z
};
Mscrm.InlineEditDataService.get_formEntity = function() {
    var $v_0 = $find("PrimaryEntity");
    return $v_0
};
Mscrm.InlineEditDataService.get_busy = function() { return Mscrm.InlineEditDataService.$D > 0 };
Mscrm.InlineEditDataService.set_busy = function(value) {
    if (value) Mscrm.InlineEditDataService.$D = Mscrm.InlineEditDataService.$D + 1;
    else if (Mscrm.InlineEditDataService.$D > 0) Mscrm.InlineEditDataService.$D = Mscrm.InlineEditDataService.$D - 1;
    if (Mscrm.InlineEditDataService.$D > 0) Mscrm.ErrorStatusControl.$26();
    else Mscrm.ErrorStatusControl.hide(6);
    return value
};
Mscrm.InlineEditDataService.get_infraCallForBookOrReschedule = function() { return Mscrm.InlineEditDataService.$d };
Mscrm.InlineEditDataService.set_infraCallForBookOrReschedule = function(value) {
    Mscrm.InlineEditDataService.$d = value;
    return value
};
Mscrm.InlineEditDataService.checkState = function() {
    Mscrm.InlineEditDataService.$R = false;
    if (IsNull(Mscrm.InlineEditDataService.get_formEntity())) {
        Mscrm.InlineEditDataService.$O = 0;
        return
    }
    if (Mscrm.InlineEditDataService.get_formEntity().get_isNew()) return;
    Mscrm.InlineEditDataService.$O++;
    if (Mscrm.InlineEditDataService.$O > Mscrm.InlineEditDataService.$I && !Mscrm.InlineEditDataService.get_busy()) {
        Mscrm.InlineEditDataService.$O = 0;
        window.AUTO_SAVE_ENABLED && Mscrm.InlineEditDataService.get_dataService().autoSave()
    } else if (!Mscrm.InlineEditDataService.get_busy())
        if (Mscrm.InlineEditDataService.get_formEntity().get_isDirty()) {
            Mscrm.ErrorStatusControl.$28();
            Mscrm.InlineEditDataService.get_dataService().setDirty(true)
        } else {
            Mscrm.ErrorStatusControl.hide(2);
            Mscrm.InlineEditDataService.get_dataService().setDirty(false)
        }
};
Mscrm.InlineEditDataService.save = function(saveMode,
    succeedCallback,
    errorCallback,
    sync,
    propagateCallbackHandler,
    saveOptions) {
    Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
    if (IsNull(sync)) sync = false;
    var $v_0 = Mscrm.InlineEditDataService.get_dataService()
        .saveData(saveMode, sync, propagateCallbackHandler, true, saveOptions);
    $v_0.$1_0 !== 6 && Mscrm.InlineEditDataService.resetParameters();
    return $v_0
};
Mscrm.InlineEditDataService.activate = function(newStateCode, succeedCallback, errorCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        if (isNullOrEmptyString(newStateCode)) newStateCode = "Active";
        var $v_1 = "";
        $v_1 = String
            .format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStateCode>{3}</newStateCode><dataxml>{4}</dataxml></Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.$J), CrmEncodeDecode.CrmXmlEncode(newStateCode), $v_1);
        Mscrm.InlineEditDataService.execute(6, $v_1)
    }
};
Mscrm.InlineEditDataService.deactivate = function(newStateCode, newStatusCode, succeedCallback, errorCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        var $v_1 = "", $$t_6, $$t_7;
        if (!($$t_7 = Mscrm.InlineEditDataService.isValidFormData(errorCallback, 5, $$t_6 = { val: $v_1 }), $v_1 = $$t_6
            .val, $$t_7)) return;
        Mscrm.InlineEditDataService.deactivateWithReference(newStateCode,
            newStatusCode,
            $v_0.get_recordId(),
            $v_0.get_typeName(),
            $v_1,
            false,
            Mscrm.InlineEditDataService.$J,
            succeedCallback,
            errorCallback)
    }
};
Mscrm.InlineEditDataService
    .deactivateWithReference = function(newStateCode,
        newStatusCode,
        recordId,
        entityLogicalName,
        formData,
        doNotRetrieve,
        formId,
        succeedCallback,
        errorCallback,
        doNotShowProgressControl) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        if (IsNull(newStatusCode)) newStatusCode = -1;
        if (IsNull(formData)) formData = "";
        if (IsNull(formId)) formId = "{00000000-0000-0000-0000-000000000000}";
        formData = String
            .format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStateCode>{3}</newStateCode><newStatusCode>{4}</newStatusCode><donotretrieve>{5}</donotretrieve><dataxml>{6}</dataxml></Input>", CrmEncodeDecode.CrmXmlEncode(recordId), CrmEncodeDecode.CrmXmlEncode(entityLogicalName), CrmEncodeDecode.CrmXmlEncode(formId), CrmEncodeDecode.CrmXmlEncode(newStateCode), CrmEncodeDecode.CrmXmlEncode(newStatusCode.toString()), CrmEncodeDecode.CrmXmlEncode(doNotRetrieve.toString()), CrmEncodeDecode.CrmXmlEncode(formData));
        Mscrm.InlineEditDataService.execute(5, formData, false, doNotShowProgressControl)
    };
Mscrm.InlineEditDataService.createConnection = function(targetId,
    targetEntityName,
    roleId,
    succeedCallback,
    errorCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t<targetid>{2}</targetid>\r\n\t\t\t\t\t\t<targetentityname>{3}</targetentityname>\r\n\t\t\t\t\t\t<roleid>{4}</roleid>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(targetId), CrmEncodeDecode.CrmXmlEncode(targetEntityName), CrmEncodeDecode.CrmXmlEncode(roleId));
        Mscrm.InlineEditDataService.execute(207, $v_1, true)
    }
};
Mscrm.InlineEditDataService
    .addUserToRecordAccessTeam = function(userId, teamTemplateId, succeedCallback, errorCallback) {
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
        if (!IsNull($v_0)) {
            Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
            var $v_1 = String
                .format("<Input>\r\n\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t<userid>{2}</userid>\r\n\t\t\t\t\t\t<teamtemplateid>{3}</teamtemplateid>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(userId), CrmEncodeDecode.CrmXmlEncode(teamTemplateId));
            Mscrm.InlineEditDataService.execute(240, $v_1)
        }
    };
Mscrm.InlineEditDataService
    .removeUserFromRecordAccessTeam = function(userId, teamTemplateId, succeedCallback, errorCallback) {
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
        if (!IsNull($v_0)) {
            Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
            var $v_1 = String
                .format("<Input>\r\n\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t<userid>{2}</userid>\r\n\t\t\t\t\t\t<teamtemplateid>{3}</teamtemplateid>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(userId), CrmEncodeDecode.CrmXmlEncode(teamTemplateId));
            Mscrm.InlineEditDataService.execute(250, $v_1)
        }
    };
Mscrm.InlineEditDataService.refreshGridOnStateChange = function() {
    Mscrm.InlineEditDataService.$A = true;
    Mscrm.InlineEditDataService.refreshGrid(true)
};
Mscrm.InlineEditDataService.deleteRecord = function(succeedCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, null);
        var $v_1 = String.format("<Input><id>{0}</id><name>{1}</name></Input>",
            CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()),
            CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()));
        Mscrm.InlineEditDataService.execute(3, $v_1);
        if (window.UseTabletExperience) Mscrm.InlineEditDataService.$A = true
    }
};
Mscrm.InlineEditDataService.updateConnection = function(connectionId, roleId, succeedCallback, errorCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t<roleid>{2}</roleid>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode(connectionId), CrmEncodeDecode.CrmXmlEncode("connection"), CrmEncodeDecode.CrmXmlEncode(roleId));
        Mscrm.InlineEditDataService.execute(209, $v_1)
    }
};
Mscrm.InlineEditDataService.associateToCompetitor = function(competitorId, succeedCallback, errorCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t<competitorid>{2}</competitorid>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(competitorId));
        Mscrm.InlineEditDataService.execute(210, $v_1)
    }
};
Mscrm.InlineEditDataService.createProduct = function(isCreateNew,
    entityTypeCode,
    productId,
    entityName,
    productName,
    pricePerUnit,
    quantity,
    discountAmount,
    recordId,
    sequenceNumber,
    succeedCallback,
    errorCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t<etc>{1}</etc>\r\n\t\t\t\t\t\t<productid>{2}</productid>\r\n\t\t\t\t\t\t<name>{3}</name>\r\n\t\t\t\t\t\t<productname>{4}</productname>\r\n\t\t\t\t\t\t<priceperunit>{5}</priceperunit>\r\n\t\t\t\t\t\t<quantity>{6}</quantity>\r\n\t\t\t\t\t\t<recordid>{7}</recordid>\r\n\t\t\t\t\t\t<manualdiscountamount>{8}</manualdiscountamount>\r\n\t\t\t\t\t\t<iscreatenew>{9}</iscreatenew>\r\n\t\t\t\t\t\t<sequencenumber>{10}</sequencenumber>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode(entityTypeCode.toString()), CrmEncodeDecode.CrmXmlEncode(productId), CrmEncodeDecode.CrmXmlEncode(entityName), CrmEncodeDecode.CrmXmlEncode(productName), CrmEncodeDecode.CrmXmlEncode(pricePerUnit.toString()), CrmEncodeDecode.CrmXmlEncode(quantity.toString()), CrmEncodeDecode.CrmXmlEncode(recordId), CrmEncodeDecode.CrmXmlEncode(discountAmount.toString()), CrmEncodeDecode.CrmXmlEncode(isCreateNew.toString()), CrmEncodeDecode.CrmXmlEncode(sequenceNumber.toString()));
        Mscrm.InlineEditDataService.execute(230, $v_1, true, true)
    }
};
Mscrm.InlineEditDataService
    .createEntitlementChannel = function(isCreateNew,
        entityTypeCode,
        entityName,
        channel,
        totalTerms,
        recordId,
        succeedCallback,
        errorCallback) {
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
        if (!IsNull($v_0)) {
            Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
            var $v_1 = String
                .format("<Input>\r\n\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t<etc>{1}</etc>\r\n\t\t\t\t\t\t<name>{2}</name>\r\n\t\t\t\t\t\t<channel>{3}</channel>\r\n\t\t\t\t\t\t<totalterms>{4}</totalterms>\r\n\t\t\t\t\t\t<recordid>{5}</recordid>\r\n\t\t\t\t\t\t<iscreatenew>{6}</iscreatenew>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode(entityTypeCode.toString()), CrmEncodeDecode.CrmXmlEncode(entityName), CrmEncodeDecode.CrmXmlEncode(channel), CrmEncodeDecode.CrmXmlEncode(totalTerms.toString()), CrmEncodeDecode.CrmXmlEncode(recordId), CrmEncodeDecode.CrmXmlEncode(isCreateNew.toString()));
            Mscrm.InlineEditDataService.execute(231, $v_1, false, true)
        }
    };
Mscrm.InlineEditDataService
    .createDynamicPropertyOptionSetItem = function(entityName,
        optionName,
        optionValue,
        optionDescription,
        recordId,
        succeedCallback,
        errorCallback) {
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
        if (!IsNull($v_0)) {
            Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
            var $v_1 = String
                .format("<Input>\r\n\t\t\t\t\t\t<parentid>{0}</parentid>\r\n\t\t\t\t\t\t<dynamicpropertyoptionname>{1}</dynamicpropertyoptionname>\r\n\t\t\t\t\t\t<dynamicpropertyoptionvalue>{2}</dynamicpropertyoptionvalue>\r\n\t\t\t\t\t\t<recordid>{3}</recordid>\r\n\t\t\t\t\t\t<name>{4}</name>\r\n\t\t\t\t\t\t<dynamicpropertyoptiondescription>{5}</dynamicpropertyoptiondescription>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode(optionName), CrmEncodeDecode.CrmXmlEncode(optionValue.toString()), CrmEncodeDecode.CrmXmlEncode(recordId), CrmEncodeDecode.CrmXmlEncode(entityName), CrmEncodeDecode.CrmXmlEncode(optionDescription));
            Mscrm.InlineEditDataService.execute(233, $v_1, false, true)
        }
    };
Mscrm.InlineEditDataService.createCategory = function(title, recordId, sequenceNumber, succeedCallback, errorCallback) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t<parentcategoryid>{0}</parentcategoryid>\r\n\t\t\t\t\t\t<title>{1}</title>\r\n\t\t\t\t\t\t<recordid>{2}</recordid>\r\n\t\t\t\t\t\t<sequencenumber>{3}</sequencenumber>\r\n\t\t\t\t\t\t<name>{4}</name>\r\n\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode(title), CrmEncodeDecode.CrmXmlEncode(recordId), CrmEncodeDecode.CrmXmlEncode(sequenceNumber.toString()), CrmEncodeDecode.CrmXmlEncode("category"));
        Mscrm.InlineEditDataService.execute(271, $v_1, false, true)
    }
};
Mscrm.InlineEditDataService.updateSequenceNo = function(recordId,
    formId,
    entityLogicalName,
    sequenceNumber,
    succeedCallback,
    errorCallback) {
    Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
    var $v_0 = String
        .format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><sequencenumber>{3}</sequencenumber></Input>",
            CrmEncodeDecode.CrmXmlEncode(recordId.toString()),
            CrmEncodeDecode.CrmXmlEncode(entityLogicalName),
            CrmEncodeDecode.CrmXmlEncode(formId.toString()),
            CrmEncodeDecode.CrmXmlEncode(sequenceNumber.toString()));
    Mscrm.InlineEditDataService.execute(270, $v_0, false, true)
};
Mscrm.InlineEditDataService.inlineFormRefresh = function(entityLogicalName,
    recordId,
    formId,
    succeedCallback,
    errorCallback) {
    if (!isNullOrEmptyString(entityLogicalName) && !isNullOrEmptyString(recordId) && !isNullOrEmptyString(formId)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        var $v_0 = String
                .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode(recordId), CrmEncodeDecode.CrmXmlEncode(entityLogicalName), CrmEncodeDecode.CrmXmlEncode(formId)),
            $v_1 = {};
        $v_1["command"] = 208;
        $v_1["isinlinerefresh"] = 1;
        Mscrm.InlineEditDataService.setAttributeValueBeforeSave();
        Mscrm.InlineEditDataService.executeWithReference(208, $v_0, false, $v_1, Mscrm.InlineEditDataService.$1A)
    }
};
Mscrm.InlineEditDataService.retrieve = function(entityLogicalName, recordId, formId, succeedCallback, errorCallback) {
    if (!isNullOrEmptyString(entityLogicalName) && !isNullOrEmptyString(recordId)) {
        Mscrm.InlineEditDataService.setCallback(succeedCallback, errorCallback);
        var $v_0 = Mscrm.InlineEditDataService.$19(entityLogicalName, recordId, formId);
        Mscrm.InlineEditDataService.execute(208, $v_0)
    }
};
Mscrm.InlineEditDataService.isValidFormData = function(errorCallback, command, formData) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    formData.val = "";
    var $v_1 = Mscrm.InlineEditDataService.get_dataService().$1L_0($v_0, command, false, formData);
    if ($v_1.$1_0 === 6) return true;
    else if ($v_1.$1_0 === 1) return true;
    else {
        if (!IsNull(errorCallback)) {
            var $v_2 = {}, $v_3 = Mscrm.ErrorInformation.createErrorInfo($v_1.$1_0.toString(), $v_1.$f_0, null);
            $v_2["_error"] = $v_3;
            errorCallback($v_2)
        }
        return false
    }
};
Mscrm.InlineEditDataService.$19 = function($p0, $p1, $p2) {
    var $v_0 = String.format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId></Input>",
        CrmEncodeDecode.CrmXmlEncode($p1),
        CrmEncodeDecode.CrmXmlEncode($p0),
        CrmEncodeDecode.CrmXmlEncode($p2));
    return $v_0
};
Mscrm.InlineEditDataService.setCallback = function(succeedCallback, errorCallback) {
    if (!IsNull(succeedCallback)) Mscrm.InlineEditDataService.get_dataService().$B_0 = succeedCallback;
    if (!IsNull(errorCallback)) Mscrm.InlineEditDataService.get_dataService().$E_0 = errorCallback
};
Mscrm.InlineEditDataService.resetParameters = function() {
    if (!IsNull(Mscrm.InlineEditDataService.get_dataService()
        .$B_0)) Mscrm.InlineEditDataService.get_dataService().$B_0 = null;
    if (!IsNull(Mscrm.InlineEditDataService.get_dataService()
        .$E_0)) Mscrm.InlineEditDataService.get_dataService().$E_0 = null;
    Mscrm.InlineEditDataService.get_dataService().$5_0 = false
};
Mscrm.InlineEditDataService.$1A = function($p0, $p1) {
    Mscrm.InlineEditDataService.$t();
    Mscrm.InlineEditDataService.set_busy(false);
    var $v_0 = $p0.ReturnValue, $v_1 = Mscrm.InlineEditDataService.parsedJson($v_0);
    Mscrm.AggregatePerformanceMarkers.endMarker("ServiceRoundtrip");
    Mscrm.AggregatePerformanceMarkers.beginMarker("ResetFormState");
    if ($p0.Success && (IsNull($v_1) || IsNull($v_1["_error"]))) {
        var $v_3 = true;
        Mscrm.InlineEditDataService.$O = 0;
        var $v_4 = $p1.Reference;
        if (!IsNull($v_4)) {
            var $v_5 = $v_4["command"], $v_6 = false;
            if ("isinlinerefresh" in $v_4 && $v_4["isinlinerefresh"] === 1) {
                $v_3 = false;
                $v_6 = true
            }
            var $v_7 = Mscrm.InlineEditDataService.isNew();
            Mscrm.InlineEditDataService.$1t($v_1, $v_3, $v_5, $v_6);
            $v_7 && Mscrm.InlineEditDataService.$27();
            if (!Xrm.Internal.isTurboForm()) {
                var $v_9 = Xrm.Page.ui;
                $v_9.set_entityDataHeader($v_0)
            }
            "isinlinerefresh" in $v_4 && $v_4["isinlinerefresh"] === 1 && raiseEvent(94, null, null);
            var $v_8 = Mscrm.Utilities.getData($v_1, "_entity", "isRecordHierarchyEnabled");
            !isNullOrEmptyString($v_8) && Mscrm.Utilities.showHideHierarchyButton(Mscrm.Utilities.parseBoolean($v_8))
        }
        !IsNull(window.IS_OUTLOOK_CLIENT) && window.IS_OUTLOOK_CLIENT && Mscrm.InlineEditDataService.$20()
    } else {
        var $v_A = Mscrm.InlineEditDataService.get_dataService();
        (IsNull($v_A.$E_0) || !$v_A.$E_0($v_1)) && $v_A.$r_0($v_1)
    }
    $p0.Success && Mscrm.InlineEditDataService.clearCachedFormData();
    var $v_2 = true;
    if (!IsNull($v_1) && !IsNull($v_1["_error"])) {
        var $v_B = $v_1["_error"];
        if ($v_B.Code === "0x80040333") $v_2 = false
    }
    $v_2 && Mscrm.InlineEditDataService.resetParameters();
    Mscrm.InlineEditDataService.$1d();
    Mscrm.AggregatePerformanceMarkers.endMarker("ResetFormState")
};
Mscrm.InlineEditDataService
    .get_processControlClientApiUserHandler = function() { return Mscrm.InlineEditDataService.$7 };
Mscrm.InlineEditDataService.set_processControlClientApiUserHandler = function(value) {
    Mscrm.InlineEditDataService.$7 = value;
    return value
};
Mscrm.InlineEditDataService.$1d = function() {
    if (Mscrm.InlineEditDataService.$7)
        if (Mscrm.InlineEditDataService.$7
            .get_setActiveStageInvoked()) Mscrm.InlineEditDataService.$7.invokeSetActiveStageClientApiUserHandler();
        else if (Mscrm.InlineEditDataService.$7
            .get_moveNextInvoked()) Mscrm.InlineEditDataService.$7.invokeMoveNextClientApiUserHandler();
        else
            Mscrm.InlineEditDataService.$7.get_movePreviousInvoked() &&
                Mscrm.InlineEditDataService.$7.invokeMovePreviousClientApiUserHandler()
};
Mscrm.InlineEditDataService.$27 = function() {
    var $v_0 = true, $v_1 = $get("WebResource_RecordWall");
    while (true)
        if (!IsNull($v_1)) {
            if ($v_0) {
                var $v_2 = $v_1.getAttribute("url");
                if ($v_2.indexOf("&id={") === -1) {
                    $v_2 = $v_2 + Mscrm.InlineEditDataService.get_formEntity().get_recordId();
                    $v_1.setAttribute("url", $v_2)
                }
                $v_0 = false
            }
            if (!isNullOrEmptyString($v_1.className) && $v_1.className === "ms-crm-InlineTab-Read") {
                $v_1.style.display = "block";
                return
            } else $v_1 = $v_1.parentNode
        } else return
};
Mscrm.InlineEditDataService.$1T = function() {
    typeof crmForm_window_onload_handler != "undefined" &&
        crmForm_window_onload_handler != null &&
        crmForm_window_onload_handler(Xrm.Page.ui)
};
Mscrm.InlineEditDataService.$20 = function() {
    var $v_0 = Xrm.Page.data.entity.getEntityName(),
        $v_1 = Xrm.Internal.getEntityCode($v_0),
        $v_2 = Xrm.Page.data.entity.getId(),
        $v_3 = Xrm.Page.data.entity.getPrimaryAttributeValue();
    Xrm.Internal.refreshParentGrid($v_1, $v_3, $v_2)
};
Mscrm.InlineEditDataService.$1t = function($p0, $p1, $p2, $p3) {
    if (IsNull($p0) || IsNull($p0["_error"])) {
        var $v_0 = false;
        if (!IsNull($p0)) {
            var $v_1 = !IsNull($p0["_entitydisabled"]) && $p0["_entitydisabled"] === "1";
            $v_0 = Mscrm.InlineEditDataService.get_formEntity().get_isDisabled() !== $v_1;
            Mscrm.InlineEditDataService.get_formEntity().set_isDisabled($v_1);
            !IsNull($p0["_formstate"]) && Mscrm.InlineEditDataService.get_formEntity().set_formState($p0["_formstate"])
        }
        if (!IsNull(Mscrm.InlineEditDataService.get_dataService()
            .$B_0)) if (Mscrm.InlineEditDataService.get_dataService().$B_0($p0)) return;
        if ($p2 === 230) return;
        if (!IsNull($p0)) {
            var $v_2 = Mscrm.InlineEditUtilities.getEntityReference($p0);
            if (!IsNull($v_2)) {
                var $v_5 = Xrm.Page.ui, $v_6 = !IsNull($p0["productid"]), $v_7 = $v_2.Name;
                if ($v_6) {
                    var $v_8 = _edn;
                    $v_7 = String.format("{0}: {1}", $v_8, $v_2.Name)
                }
                $v_5.set_formTitle($v_7);
                window._id = $v_2.Id;
                window._primaryFieldValue = $v_2.Name
            }
            if ("_version" in $p0) {
                var $v_9 = $p0["_version"],
                    $v_A = Number.parseInvariant($v_9["_formVersionNumber"]),
                    $v_B = $v_9["_metadataCacheVersion"];
                if ($v_A !== Mscrm.InlineEditDataService.get_$1U() || $v_B !== Mscrm.InlineEditDataService.get_$1j()) {
                    Mscrm.InlineEditDataService.$R = true;
                    window.location.reload(true);
                    Mscrm.InlineEditDataService.$R = false;
                    return
                }
            }
            var $v_3 = Mscrm.InlineEditDataService.get_dataService().$5_0;
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl($v_3);
            Mscrm.InlineEditDataService
                .resetFormDataForRootForm($p0,
                    $p1,
                    $p2,
                    $p3,
                    Mscrm.InlineEditDataService.get_formEntity().get_isNew(),
                    $v_0);
            var $v_4 = 0;
            switch ($p2) {
            case 208:
                $v_4 = 3;
                break;
            case 1:
            case 2:
            case 211:
                $v_4 = 2;
                break
            }
            Xrm.Page.data.invokeDataOnLoadHandlers($v_4)
        }
        !IsNull(Mscrm.InlineEditDataService.get_dataService().$H_0) &&
            Mscrm.InlineEditDataService.get_dataService().$H_0($p0)
    } else Mscrm.InlineEditDataService.get_dataService().$r_0($p0)
};
Mscrm.InlineEditDataService.setAttributeValueBeforeSave = function() {
    Mscrm.InlineEditDataService.setAttributeValueBeforeSaveForEntity(Mscrm.InlineEditDataService.get_formEntity())
};
Mscrm.InlineEditDataService.setAttributeValueBeforeSaveForEntity = function(formEntity) {
    for (var $v_0 = formEntity.get_attributes().get(), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $v_0[$v_2];
        $v_3.set_lastSaveCallValue($v_3.get_value())
    }
};
Mscrm.InlineEditDataService
    .resetFormDataForRootForm =
    function(jsonData, isValidationRequired, command, forceReset, isNew, entityStateChanged) {
        Mscrm.InlineEditDataService.$1I(Mscrm.InlineEditDataService.get_formEntity(),
            jsonData,
            isValidationRequired,
            forceReset,
            entityStateChanged);
        Mscrm.InlineEditDataService.$1K(Mscrm.InlineEditDataService.get_formEntity(), jsonData);
        Mscrm.InlineEditDataService.$u(Mscrm.InlineEditDataService.get_formEntity(), jsonData);
        Mscrm.InlineEditDataService.$v(Mscrm.InlineEditDataService.get_formEntity(), jsonData);
        isNew && Mscrm.InlineEditDataService.$1T();
        Mscrm.InlineEditDataService.get_formEntity().clearPendingAssociations();
        Mscrm.InlineEditDataService.get_dataService().$s_0(Mscrm.InlineEdit.RefreshedEventArgs,
            "Refreshed",
            new Mscrm.InlineEdit.RefreshedEventArgs(jsonData, command));
        var $v_0 = window.self.RefreshBingMap;
        !IsNull($v_0) && RefreshBingMap(jsonData);
        Mscrm.Utilities.refreshParentLookup(jsonData["_entity"], isNew);
        !window.IS_OUTLOOK_CLIENT && window.setTimeout(Mscrm.InlineEditDataService.refreshGrid, 0);
        if (!Mscrm.Utilities.isMobileRefresh()) {
            var $v_1 = Mscrm.InlineEditDataService.get_dataService().$5_0, $v_2 = document.hasFocus();
            window.setTimeout(function() { Mscrm.InlineEditDataService.$22($v_1, $v_2) }, 0)
        }
    };
Mscrm.InlineEditDataService.$22 = function($p0, $p1) {
    (!$p1 || !document.hasFocus()) && window.self.focus();
    Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl($p0)
};
Mscrm.InlineEditDataService.$1I = function($p0, $p1, $p2, $p3, $p4) {
    if (IsNull($p0)) return;
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p1);
    if (IsNull($v_0)) return;
    if (isNullOrEmptyString($v_0.TypeName)) return;
    if ($p0.get_typeName() !== $v_0.TypeName) return;
    Mscrm.InlineEditDataService.$A = true;
    var $v_1 = !IsNull($p1["_entitydisabled"]) && $p1["_entitydisabled"] === "1";
    $p0.set_isDisabled($v_1);
    var $v_2 = {};
    if (!$v_1 && !IsNull($p1["_disabledcontrols"])) {
        var $v_5 = $p1["_disabledcontrols"];
        $v_2 = Mscrm.InlineEditUtilities.getDisabledControls($v_5)
    }
    for (var $v_3 = $p0.get_attributes().get(), $v_4 = $v_3.length, $v_6 = 0; $v_6 < $v_4; $v_6++) {
        var $v_7 = $v_3[$v_6];
        if ($v_7.get_isVirtual()) continue;
        var $v_8 = $p1[$v_7.get_name()];
        !IsNull($v_8) && "properties" in $v_8 && Mscrm.InlineEditDataService.$1s($v_7, $v_8["properties"]);
        var $v_9 = new Xrm.FormDataAttributePrivilege($v_7.get_userPrivilegeMask()),
            $v_A = $v_7.get_metadataType() === "lookup" && $v_7.get_name() === "ownerid";
        if (!$v_1 && $v_7.get_isCompositeAttribute())
            Mscrm.InlineEditDataService.enableDisableAttributeBindingControls($v_7, false);
        else if ($v_1 || !$v_9.canUpdate && !$v_A || !Mscrm.InlineEditDataService.$1f($p1[$v_7.get_name()])
        ) Mscrm.InlineEditDataService.enableDisableAttributeBindingControls($v_7, true);
        else Mscrm.InlineEditDataService.$1Q($v_7, $v_2, $p4);
        if ($p2 && !Mscrm.InlineEditDataService.$1i($v_7)) continue;
        if (!Mscrm.InlineEditDataService.$1e($p1[$v_7.get_name()])) {
            $v_7.resetValue(null);
            $v_7.fireOnChange()
        } else Mscrm.InlineEditDataService.$21($v_7, $p1, !$p3) && $v_7.fireOnChange()
    }
};
Mscrm.InlineEditDataService.$1s = function($p0, $p1) {
    for (var $v_0 = $p0.get_controls().get(), $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0;
        $$idx_5 < $$len_4;
        ++$$idx_5) {
        var $v_1 = $$arr_3[$$idx_5];
        $v_1.updateControlProperties($p1)
    }
};
Mscrm.InlineEditDataService.$1Q = function($p0, $p1, $p2) {
    if ($p0.get_metadataType() === "optionset" && $p0.get_name() === "statecode") return;
    for (var $v_0 = $p0.get_controls().get(), $$arr_4 = $v_0, $$len_5 = $$arr_4.length, $$idx_6 = 0;
        $$idx_6 < $$len_5;
        ++$$idx_6) {
        var $v_1 = $$arr_4[$$idx_6], $v_2 = $v_1.get_controlId() in $p1;
        ($p2 || $v_2) && $v_2 !== $v_1.get_disabled() && $v_1.set_disabled($v_2)
    }
};
Mscrm.InlineEditDataService.$21 = function($p0, $p1, $p2) {
    var $v_0 = false;
    switch ($p0.get_metadataType()) {
    case "string":
        $v_0 = $p0.resetValueWithDirtyCheck(Mscrm.InlineEditUtilities.getDecodedValue($p1[$p0.get_name()], true), $p2);
        break;
    case "memo":
        var $v_1 = $p1[$p0.get_name()], $v_2 = $v_1;
        if ($p0.get_format() === "emailbody") {
            var $v_6 = !IsNull($v_1) && "safeValue" in $v_2 ? $v_2["safeValue"] : null;
            if (IsNull($v_6)) $v_6 = Mscrm.InlineEditUtilities.getDecodedValue($v_2);
            $v_0 = $p0.resetValueWithDirtyCheck($v_6, $p2)
        } else $v_0 = $p0.resetValueWithDirtyCheck(Mscrm.InlineEditUtilities.getDecodedValue($v_2, true), $p2);
        $v_0 && $p0.get_format() === "emailbody" && Mscrm.InlineEditDataService.$2B($p0, $v_2);
        break;
    case "optionset":
        var $v_3 = $p1[$p0.get_name()], $v_4 = Mscrm.InlineEditUtilities.getRawValue($v_3);
        $p0.get_name() === "statuscode" && $p0.tryAddOption($v_4, Mscrm.InlineEditUtilities.getDecodedValue($v_3));
        $v_0 = $p0.resetValueWithDirtyCheck($v_4, $p2);
        break;
    case "lookup":
        $v_0 = $p0.resetValueWithDirtyCheck(Mscrm.InlineEditUtilities.getLookupValue($p1[$p0.get_name()]), $p2);
        break;
    case "datetime":
        var $v_7 = Mscrm.InlineEditUtilities.getRawValue($p1[$p0.get_name()], false);
        if (!isNullOrEmptyString($v_7)) $v_0 = $p0.resetValueWithDirtyCheck(ParseUtcDate($v_7), $p2);
        else $v_0 = $p0.resetValue(null);
        break;
    case "decimal":
    case "double":
    case "integer":
        $v_0 = $p0.resetValueWithDirtyCheck(Mscrm.InlineEditUtilities.getRawValue($p1[$p0.get_name()], true), $p2);
        break;
    case "money":
        var $v_5 = Mscrm.InlineEditUtilities.getRawValue($p1[$p0.get_name()], false);
        $v_0 = $p0.resetValueWithDirtyCheck($v_5, $p2);
        break;
    case "boolean":
        $v_0 = $p0.resetValueWithDirtyCheck(Mscrm.InlineEditUtilities.getRawValue($p1[$p0.get_name()], true), $p2);
        break;
    default:
        $v_0 = $p0.resetValueWithDirtyCheck(Mscrm.Utilities.getData($p1, $p0.get_name(), "value"), $p2);
        break
    }
    return $v_0
};
Mscrm.InlineEditDataService.$2B = function($p0, $p1) {
    if (!IsNull($p0.get_firstAvailableControl())) {
        var $v_0 = $p0.get_firstAvailableControl().get_innerControl();
        if (!IsNull($v_0)) {
            var $v_1 = $p0;
            !IsNull($v_1) && $v_1.set_updatedDataValue($p1)
        }
    }
};
Mscrm.InlineEditDataService.$1i = function($p0) {
    for (var $v_0 = $p0.get_controls().get(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1].get_validateResult();
        if (!IsNull($v_2) && !$v_2.isValid) return false
    }
    return true
};
Mscrm.InlineEditDataService.$1e = function($p0) {
    if (!IsNull($p0) && $p0["securedread"] === "1") return false;
    else return true
};
Mscrm.InlineEditDataService.$1f = function($p0) {
    if (!IsNull($p0) && $p0["securedupdate"] === "1") return false;
    else return true
};
Mscrm.InlineEditDataService.refreshGrid = function(close) {
    if (!Mscrm.InlineEditDataService.$A) return;
    try {
        if (window.IS_OUTLOOK_CLIENT) {
            Mscrm.InlineEditDataService.$1z(close);
            return
        }
        var $v_0 = window.top.document.getElementById("crmContentPanel"),
            $v_1 = $v_0.attributes.getNamedItem("currentGridId"),
            $v_2 = null;
        if (!IsNull($v_1) && $v_1.specified) {
            $v_2 = window.top.document.getElementById($v_1.value);
            if (!IsNull($v_2)) {
                var $v_3 = $v_2.contentWindow.location.pathname.toLowerCase().endsWith("/homepage.aspx")
                    ? $v_2.contentWindow
                    : $v_2.contentWindow.parent;
                if (!IsNull(window._primaryFieldValue)) $v_3.auto(_etc, _primaryFieldValue, _id);
                else $v_3.auto(_etc)
            }
        } else if (!IsNull(window.top.opener)) {
            window.top.opener.gridrefreshsource = "child";
            if (!IsNull(window._primaryFieldValue)) window.top.opener.auto(_etc, _primaryFieldValue, _id);
            else window.top.opener.auto(_etc)
        }
    } catch ($$e_5) {
    }
};
Mscrm.InlineEditDataService.$1z = function($p0) {
    if (IsNull($p0) || !$p0) return;
    var $v_0 = getOutlookHostedWindow();
    $v_0.notifyItemChanged(_etc, _id)
};
Mscrm.InlineEditDataService.$1r = function($p0) { openErrorDlg($p0.get_code(), $p0.get_description(), $p0, 0, 0) };
Mscrm.InlineEditDataService.$v = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p1);
    if (!IsNull($p0) && !IsNull($v_0)) $p0.get_recordName() !== $v_0.Name && $p0.set_recordName($v_0.Name)
};
Mscrm.InlineEditDataService.$u = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p1);
    if (!IsNull($p0) && !IsNull($v_0)) ($p0.get_isNew() || $v_0.Id !== $p0.get_recordId()) && $p0.set_recordId($v_0.Id);
    return false
};
Mscrm.InlineEditDataService.$1K = function($p0, $p1) {
    if (!IsNull(window.top)) {
        var $v_0 = window.top.Sys.Application.findComponent("crmPageManager");
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.InlineEditUtilities.getEntityReference($p1);
            if (!IsNull($p0) && !IsNull($v_1))
                if ($p0.get_isNew() || $v_1.Id !== $p0.get_recordId()) {
                    var $v_2 = {};
                    $v_2["updateQueryString"] = String.format("id={0}", $v_1.Id);
                    $v_0.raiseEvent(43, $v_2)
                }
        }
    }
};
Mscrm.InlineEditDataService.isNew = function() {
    if (IsNull(Mscrm.InlineEditDataService.get_formEntity())) return false;
    else return Mscrm.InlineEditDataService.get_formEntity().get_isNew()
};
Mscrm.InlineEditDataService.enableDisableAttributeBindingControls = function(attribute, disabled) {
    for (var $v_0 = attribute.get_controls().get(), $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) {
        var $v_2 = $v_0[$v_1];
        disabled !== $v_2.get_disabled() && $v_0[$v_1].set_disabled(disabled)
    }
};
Mscrm.InlineEditDataService.parsedJson = function(value) {
    var $v_0 = null;
    try {
        if (!isNullOrEmptyString(value)) $v_0 = $P_CRM.parseJSON(value)
    } catch ($v_1) {
        var $v_2 = {};
        $v_2.DisplayText = "Error while parsing Json \n" + $v_1.message;
        $v_0 = {};
        $v_0["_error"] = $v_2;
        return $v_0
    }
    return $v_0
};
Mscrm.InlineEditDataService.$2C = function($p0, $p1) {
    Mscrm.InlineEditDataService.$t();
    Mscrm.InlineEditDataService.set_busy(false);
    if (!(IsNull($p1) && isNullOrEmptyString($p0))) {
        var $v_0 = null;
        if (!IsNull($p1)) $v_0 = Mscrm.ErrorInformation.createFromDoc($p1.ownerDocument);
        Mscrm.InlineEditDataService.$1r($v_0)
    }
};
Mscrm.InlineEditDataService.$t = function() {
    !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.InlineEditDataService.$F) && Mscrm.InlineEditDataService.$F.hide()
};
Mscrm.InlineEditDataService.$1x = function($p0, $p1) { Mscrm.InlineEditDataService.$1H($p0, $p1, false) };
Mscrm.InlineEditDataService.$1w = function($p0, $p1) { Mscrm.InlineEditDataService.$1H($p0, $p1, true) };
Mscrm.InlineEditDataService.$1H = function($p0, $p1, $p2) {
    Mscrm.InlineEditDataService.get_$1F().hide();
    Mscrm.InlineEditDataService.set_busy(false);
    var $v_0 = $p1.Reference,
        $v_1 = $v_0["uniqueid"],
        $v_2 = $v_0["command"],
        $v_3 = Mscrm.QuickFormBehavior.getBehaviorById($v_1);
    if (IsNull($v_3)) return;
    var $v_4 = Mscrm.InlineEditDataService.parsedJson($p0.ReturnValue);
    if ($p0.Success && IsNull($v_4["_error"])) {
        Mscrm.ErrorStatusControl.hide(10);
        Mscrm.InlineEditDataService.$1y($v_3, $v_4, $v_2)
    } else Mscrm.InlineEditDataService.$1v($v_3, $v_4, $v_2, $p2)
};
Mscrm.InlineEditDataService.$1y = function($p0, $p1, $p2) {
    var $v_0 = $p0.get_formDataEntityObject();
    if (!IsNull($v_0) && !IsNull($p1)) {
        var $v_1 = $v_0.get_deferredAssociation();
        if ($p0.get_controlMode() !== "Create") Mscrm.InlineEditDataService.$1G($p0, $p1, true, false, $p2);
        else {
            Mscrm.InlineEditDataService.$u($p0.get_formDataEntityObject(), $p1);
            Mscrm.InlineEditDataService.$v($p0.get_formDataEntityObject(), $p1);
            $p0.fireSuccessEvent($p1, $p2)
        }
        if ($p0.get_isPendingAssociationsNeeded())
            $v_1 &&
                Array.add(Mscrm.InlineEditDataService.get_formEntity().get_pendingAssociations(),
                    new Mscrm.Association($p0.get_relationshipName(),
                        $p0.get_relationshipRoleOrdinal(),
                        $v_0.get_recordId(),
                        $v_0.get_typeName()))
    }
    $p0.get_controlMode() === "Create" && $p0.clear()
};
Mscrm.InlineEditDataService.$1G = function($p0, $p1, $p2, $p3, $p4) {
    Mscrm.InlineEditDataService.$1I($p0.get_formDataEntityObject(), $p1, false, $p3, false);
    Mscrm.InlineEditDataService.$u($p0.get_formDataEntityObject(), $p1);
    Mscrm.InlineEditDataService.$v($p0.get_formDataEntityObject(), $p1);
    $p2 && $p0.fireSuccessEvent($p1, $p4)
};
Mscrm.InlineEditDataService.$1v = function($p0, $p1, $p2, $p3) {
    var $v_0 = false;
    if ($p3) {
        var $v_1 = $p1["_error"];
        if (!IsNull($v_1)) if ($v_1.Code === "0x80048306") $v_0 = true
    }
    if (!$v_0) {
        Mscrm.InlineEditDataService.get_dataService().$r_0($p1);
        $p0.fireFailureEvent($p1, $p2)
    }
};
Mscrm.InlineEditDataService.cacheFormData = function() {
    if (!window.UseTabletExperience ||
        Mscrm.InlineEditDataService.isNew() ||
        IsNull(Mscrm.InlineEditDataService.get_formEntity()) ||
        !Mscrm.InlineEditDataService.get_formEntity().get_isDirty()) return;
    try {
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity(),
            $v_1 = Mscrm.InlineEditDataService.get_dataService().BuildXml($v_0);
        if (!isNullOrEmptyString($v_1)) {
            var $v_2 = Mscrm.InlineEditDataService.$z($v_0);
            Mscrm.InlineEditDataService.$W = String
                .format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><dataxml>{3}</dataxml><performduplicatecheck>{4}</performduplicatecheck><associations>{5}</associations></Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.$J), CrmEncodeDecode.CrmXmlEncode($v_1), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_performDuplicateCheck().toString()), $v_2)
        }
    } catch ($v_3) {
    }
};
Mscrm.InlineEditDataService.saveCachedFormData = function() {
    if (isNullOrEmptyString(Mscrm.InlineEditDataService.$W)) return;
    try {
        var $v_0 = new RemoteCommand("InlineEditWebService", "Execute");
        $v_0.SetParameter("command", 1);
        $v_0.SetParameter("commandXml", Mscrm.InlineEditDataService.$W);
        $v_0.Execute();
        Mscrm.InlineEditDataService.$A = true
    } catch ($v_1) {
    }
    Mscrm.InlineEditDataService.clearCachedFormData()
};
Mscrm.InlineEditDataService.clearCachedFormData = function() { Mscrm.InlineEditDataService.$W = null };
Mscrm.InlineEditDataService.prototype = {
    $5_0: false,
    $B_0: null,
    $E_0: null,
    $H_0: null,
    _disposed: false,
    get_isDisposed: function() { return this._disposed },
    setDirty: function(value) {
        var $v_0 = $get("_inputFormDirtyFlag"), $v_1 = $v_0.value === "1";
        if (value !== $v_1) $v_0.value = value ? "1" : "0"
    },
    resetAutoSaveInterval: function() { Mscrm.InlineEditDataService.$I = Mscrm.InlineEditDataService.get_$o() },
    add_formRefreshed: function(value) { this.$9_0.addHandler("Refreshed", value) },
    remove_formRefreshed: function(value) {
        if (this._disposed) return;
        this.$9_0.removeHandler("Refreshed", value)
    },
    add_preValidation: function(value) { this.$9_0.addHandler("PreValidation", value) },
    remove_preValidation: function(value) {
        if (this._disposed) return;
        this.$9_0.removeHandler("PreValidation", value)
    },
    add_entitySaved: function(value) { this.$9_0.addHandler("entitySaved", value) },
    remove_entitySaved: function(value) {
        if (this._disposed) return;
        this.$9_0.removeHandler("entitySaved", value)
    },
    ResolveDuplicateAndTriggerSave: function() {
        Xrm.Page.ui.clearFormNotification(Mscrm.InlineEditDataService.$2.get_duplicateDetectionNotificationId());
        Mscrm.InlineEditDataService.set_performDuplicateCheck(false);
        var $v_0 = Mscrm.InlineEditDataService.get_dataService()
            .saveData(Mscrm.InlineEditDataService.$2.get_saveMode(),
                Mscrm.InlineEditDataService.$2.get_syncMode(),
                false,
                true);
        Mscrm.InlineEditDataService.$2.get_saveMode() === 2 &&
            (!IsNull($v_0) && ($v_0.get_success() || $v_0.$1_0 === 9) && $v_0.$1_0 !== 10) &&
            closeWindowScript();
        Mscrm.InlineEditDataService.$G = false
    },
    BuildXml: function(entity) {
        var $v_0 = null;
        if (!IsNull(entity) && isInstanceOfTypeAcrossFrames(entity, Mscrm.FormDataEntity))
            if (entity.get_isNew()) $v_0 = entity.serialize(0);
            else $v_0 = entity.serialize(1);
        if (!entity.get_id().startsWith("qf_fde_") && entity.get_isNew()) {
            var $v_1 = CrmEncodeDecode.CrmXmlEncode(entity.get_typeName());
            $v_0 = $v_0.substring($v_1.length + 2, $v_0.length - $v_1.length - 3);
            return String.format("<{0}>{1}</{0}>",
                $v_1,
                Mscrm.FormControl.addMappedAttributeInformation($v_0, Mscrm.Utilities.get_mappedXml()))
        }
        return $v_0
    },
    autoSave: function() {
        var $v_0 = Xrm.Page.data.entity.getEntityName(), $v_1 = true;
        if (!Mscrm.InternalUtilities._Script
            .isNullOrUndefined(window._isSyncErrorStatusUpdated)) $v_1 = window._isSyncErrorStatusUpdated;
        if (IsNull(Mscrm.InlineEditDataService.get_formEntity()) ||
            Mscrm.InlineEditDataService.get_formEntity().get_isNew() ||
            Mscrm.InlineEditDataService.$G ||
            $v_0 === "appointment" ||
            $v_0 === "recurringappointmentmaster" ||
            !$v_1) return;
        this.$5_0 = true;
        this.saveData(70, false)
    },
    $1L_0: function($p0, $p1, $p2, $p3) {
        $p3.val = null;
        var $v_0 = this.validate($p0, $p1, $p2);
        if ($v_0.$1_0 !== 5) return $v_0;
        return this.$10_0($p0, $p3)
    },
    $10_0: function($p0, $p1) {
        $p1.val = null;
        var $v_0 = this.BuildXml($p0);
        if (isNullOrEmptyString($v_0)) return new Mscrm.SaveResponse(4, null);
        $p1.val = $v_0;
        return new Mscrm.SaveResponse(6, "")
    },
    $x_0: function($p0, $p1, $p2) {
        if (IsNull($p0)) return new Mscrm.SaveResponse(0, null);
        Mscrm.InlineEditDataService.$13();
        var $v_0 = new Mscrm.InlineEdit.PreValidationEventArgs($p0.get_id(), $p1);
        $v_0.set_autoSave($p2);
        this.$s_0(Mscrm.InlineEdit.PreValidationEventArgs, "PreValidation", $v_0);
        if (!IsNull($v_0) && !IsNull($v_0.get_validationResult()) && !$v_0.get_validationResult().isValid)
            if (isNullOrEmptyString($v_0.get_validationResult().errorText)) {
                Mscrm.ErrorStatusControl.showError(window.LOCID_FORMCONTAININVALIDDATA,
                    false,
                    $v_0.get_validationResult());
                return new Mscrm.SaveResponse(2, window.LOCID_FORMCONTAININVALIDDATA)
            } else {
                Mscrm.ErrorStatusControl.showError($v_0.get_validationResult().errorText,
                    true,
                    $v_0.get_validationResult());
                return new Mscrm.SaveResponse(2, $v_0.get_validationResult().errorText)
            }
        var $v_1 = $p0.validateFieldsValue($p0.get_isNew());
        if (!isNullOrEmptyString($v_1)) {
            Mscrm.ErrorStatusControl.showError($v_1, true);
            return new Mscrm.SaveResponse(3, $v_1)
        }
        return new Mscrm.SaveResponse(5, "")
    },
    validate: function(primaryEntity, command, isAutoSave) {
        var $v_0 = this.$x_0(primaryEntity, command, isAutoSave);
        if ($v_0.$1_0 !== 5) return $v_0;
        if (!primaryEntity.get_isNew() && !primaryEntity.get_isDirty()) return new Mscrm.SaveResponse(1, null);
        return new Mscrm.SaveResponse(5, "")
    },
    saveData: function(saveMode, sync, propagateCallbackHandler, noAutoSaveCheck, saveOptions) {
        if (saveMode !== 70) this.$5_0 = false;
        Mscrm.InlineEditDataService.$2.set_saveMode(saveMode);
        Mscrm.InlineEditDataService.$2.set_syncMode(sync);
        saveMode = -1 === Xrm.Page.context.saveMode ? saveMode : Xrm.Page.context.saveMode;
        Xrm.Page.context.saveMode = -1;
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity(), $v_1 = null;
        Mscrm.InlineEditDataService.$13();
        var $v_2 = Xrm.Page.data.entity.getEntityName(), $v_3 = this.validateAndFireSaveEvents(saveMode, $v_0);
        if (!noAutoSaveCheck)
            if (!window.AUTO_SAVE_ENABLED) if (this.$1P_0(saveMode)) return new Mscrm.SaveResponse(9, null);
        if ($v_3.$1_0 !== 5) {
            if (this.$1h_0($v_2)) return new Mscrm.SaveResponse(10, "");
            return $v_3
        }
        var $$t_F, $$t_G;
        $v_3 = ($$t_G = this.$10_0($v_0, $$t_F = { val: $v_1 }), $v_1 = $$t_F.val, $$t_G);
        if ($v_3.$1_0 === 6 && !Mscrm.InlineEditDataService.$e) {
            if (this
                .$1b_0(saveMode, $v_2, propagateCallbackHandler, saveOptions)) return new Mscrm.SaveResponse(10, "");
            var $v_4 = Mscrm.InlineEditDataService.$z($v_0), $v_5 = "{00000000-0000-0000-0000-000000000000}";
            if (!Mscrm.InlineEditDataService.isNew()) $v_5 = $v_0.get_recordId();
            this.$24_0();
            $v_1 = String
                .format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><dataxml>{3}</dataxml><performduplicatecheck>{4}</performduplicatecheck><associations>{5}</associations></Input>", CrmEncodeDecode.CrmXmlEncode($v_5), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.$J), CrmEncodeDecode.CrmXmlEncode($v_1), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_performDuplicateCheck().toString()), $v_4);
            var $v_6 = Mscrm.InlineEditDataService.execute(1, $v_1, sync);
            if (!IsNull(sync) && sync)
                if ($v_6.Success) {
                    var $v_7 = $v_6.ReturnValue, $v_8 = Mscrm.InlineEditDataService.parsedJson($v_7);
                    if (!IsNull($v_8) && !("_error" in $v_8)) {
                        var $v_9 = Mscrm.InlineEditUtilities.getEntityReference($v_8);
                        if (!IsNull($v_9)) {
                            $v_3.$i_0 = $v_9.Name;
                            $v_3.$h_0 = $v_9.Id;
                            Mscrm.InlineEditDataService.clearCachedFormData()
                        }
                        Mscrm.InlineEditDataService.$1K(Mscrm.InlineEditDataService.get_formEntity(), $v_8);
                        return $v_3
                    } else if (!IsNull($v_8) && "_error" in $v_8
                    ) return new Mscrm.SaveResponse(7, $v_8["_error"].DisplayText)
                } else return new Mscrm.SaveResponse(7, "");
            this.$s_0(Sys.EventArgs, "entitySaved", Sys.EventArgs.Empty)
        }
        return $v_3
    },
    $24_0: function() {
        var $v_0 = this.$1u_0("appSolutionId");
        if ($v_0) {
            var $v_1 = $get("crmFormSubmit");
            if ($v_1)
                if (!$get("appSolutionId")) {
                    var $v_2 = document.createElement("input");
                    $v_2.id = "appSolutionId";
                    $v_2.setAttribute("value", $v_0);
                    $v_2.setAttribute("type", "hidden");
                    $v_1.appendChild($v_2)
                }
        }
    },
    $1u_0: function($p0) {
        var $v_0 = Mscrm.CrmUri.create(window.top.location.href), $v_1 = $v_0.get_query()[$p0];
        if (IsNull($v_1) || isNullOrEmptyString($v_1.toString())) return null;
        return $v_1.toString()
    },
    $1P_0: function($p0) { return $p0 === 2 },
    $1h_0: function($p0) {
        if ($p0 === "dynamicproperty") return true;
        return false
    },
    $1b_0: function($p0, $p1, $p2, $p3) {
        if (!Mscrm.Utilities.isMobileRefresh() &&
            ($p1 === "appointment" || $p1 === "recurringappointmentmaster" || $p1 === "serviceappointment")) {
            var $v_0 = Mscrm.InternalUtilities._Script.isNullOrUndefined($p3) ||
                Mscrm.InternalUtilities._Script.isNullOrUndefined($p3.useSchedulingEngine) ||
                $p3.useSchedulingEngine;
            this.$1O_0();
            if (Xrm.Page.context.client.getClientState() === "Online" && $v_0 && window.IS_ALLOW_SCHEDULE) {
                var $v_1 = null;
                if (!IsNull($p2) && $p2) $v_1 = Mscrm.InlineEditDataService.get_dataService().$B_0;
                else {
                    var $$t_9 = this;
                    $v_1 = function($p1_0) {
                        Mscrm.Utilities.updateSyncErrorStatus();
                        return true
                    }
                }
                if ($p0 === 2) {
                    var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Xrm.SaveSuccessResponse, Xrm.SaveErrorResponse),
                        $$t_A = this;
                    Mscrm.InlineEditDataService.get_dataService().$H_0 = function($p1_0) {
                        $v_2.resolve(null);
                        return false
                    };
                    var $$t_B = this;
                    $v_2.then(function() { closeWindowScript() }, null)
                } else Mscrm.InlineEditDataService.get_dataService().$H_0 = null;
                if (Mscrm.InlineEditDataService.$d)
                    Mscrm.CommandBarActions.bookOrRescheduleWithCallback(true, true, $v_1, null, "");
                else Mscrm.CommandBarActions.bookOrRescheduleWithCallback(false, true, $v_1, null, "");
                return true
            }
        }
        return false
    },
    $1O_0: function() {
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
    validateAndFireSaveEvents: function(saveMode, primaryEntity) {
        var $v_0 = this.$x_0(primaryEntity, 1, this.$5_0);
        if ($v_0.$1_0 !== 5) return $v_0;
        if (!this.$5_0) {
            $v_0 = this.$15_0(saveMode, primaryEntity);
            if ($v_0.$1_0 !== 5) return $v_0
        }
        if (!Mscrm.InlineEditDataService.get_formEntity().get_isNew() && !primaryEntity.get_isDirty()) {
            Mscrm.ErrorStatusControl.hide(10);
            return new Mscrm.SaveResponse(1, null)
        }
        if (this.$5_0) {
            $v_0 = this.$15_0(saveMode, primaryEntity);
            if ($v_0.$1_0 !== 5) return $v_0
        }
        return new Mscrm.SaveResponse(5, "")
    },
    $15_0: function($p0, $p1) {
        var $v_0 = new Mscrm.EntitySaveEventArgs($p0);
        if ($p1.fireOnSave($v_0))
            if ($v_0.get_isHandlerAttached()) return this.$x_0($p1, 1, this.$5_0);
            else return new Mscrm.SaveResponse(5, "");
        else return new Mscrm.SaveResponse(9, "")
    },
    get_succeedCallback: function() { return this.$B_0 },
    set_succeedCallback: function(value) {
        this.$B_0 = value;
        return value
    },
    get_errorCallback: function() { return this.$E_0 },
    set_errorCallback: function(value) {
        this.$E_0 = value;
        return value
    },
    get_closeCallback: function() { return this.$H_0 },
    set_closeCallback: function(value) {
        this.$H_0 = value;
        return value
    },
    get_isAutoSave: function() { return this.$5_0 },
    set_isAutoSave: function(value) {
        this.$5_0 = value;
        return value
    },
    $r_0: function($p0) {
        if (Mscrm.InlineEditDataService.get_dataService()
            .$5_0)
            if (Mscrm.InlineEditDataService
                .$I <
                Mscrm.InlineEditDataService.get_$o() * 20)
                Mscrm.InlineEditDataService.$I = Mscrm.InlineEditDataService.$I + Mscrm.InlineEditDataService.get_$o();
        if (IsNull($p0)) {
            Mscrm.ErrorStatusControl.showError(window.LOCID_GENERIC_MESSAGE);
            return
        }
        if (!IsNull($p0["_error"])) {
            var $v_0 = $p0["_error"];
            if (this.$5_0)
                if ($v_0.Code === "0x80040333") {
                    var $v_1 = null,
                        $v_2 = null,
                        $v_3 = window.LOCID_NOTIF_RESOLVE_DUPLICATE,
                        $v_4 = window.LOCID_NOTIF_SAVEANYWAY;
                    if (window.LOCID_UI_DIR === "RTL") {
                        $v_1 = "margin-right:30px;";
                        $v_2 = "margin-right:10px;"
                    } else {
                        $v_1 = "margin-left:30px;";
                        $v_2 = "margin-left:10px;"
                    }
                    Mscrm.InlineEditDataService.$G = true;
                    var $v_5 = Mscrm.InlineEditDataService.$2
                            .generateHelperLink("launchCrmDuplicateDetectionDialogButton",
                                Mscrm.InlineEditDataService.$2
                                .callbackToLaunchResolveDuplicateDialog($v_0.SerializedEntity),
                                $v_3,
                                $v_1),
                        $v_6 = Mscrm.InlineEditDataService.$2
                            .generateHelperLink("ignoreCrmDuplicateDetectionDialogButton",
                                Mscrm.InlineEditDataService.$2.callbackToIgnoreResolveDuplicate(),
                                $v_4,
                                $v_2),
                        $v_7 = $v_0.DisplayText + $v_5 + $v_6;
                    Xrm.Page.ui.setFormHtmlNotification($v_7,
                        "ERROR",
                        Mscrm.InlineEditDataService.$2.get_duplicateDetectionNotificationId())
                } else Mscrm.ErrorStatusControl.displayErrorInformation($v_0);
            else if ($v_0.Code === "0x80040333")
                Mscrm.InlineEditDataService.LaunchResolveDuplicateDialog($v_0.SerializedEntity);
            else {
                var $v_8 = $v_0.Code;
                if (isNullOrEmptyString($v_0.Code) || !$v_0.ErrorCode) $v_8 = "0x80040216";
                Mscrm.ErrorStatusControl.showCrmMessage(Mscrm.ErrorInformation
                    .createErrorInfo($v_8, $v_0.Description, $v_0.SerializedException))
            }
        } else openErrorDlg("0x80040216", "", null, 0, 0)
    },
    $s_0: function($p0, $p1, $p2) {
        var $v_0 = this.$9_0.getHandler($p1);
        !IsNull($v_0) && $v_0(this, $p2)
    },
    dispose: function() {
        if (this._disposed) return;
        this._disposed = true;
        Mscrm.Utilities.destroyObject(this.$9_0);
        Mscrm.Utilities.destroyObject(this);
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.InlineEditDataService.$F) &&
            Mscrm.InlineEditDataService.$F.dispose()
    },
    quickFormSaveData: function(uniqueId, saveAsCompleted) {
        var $v_0 = Mscrm.QuickFormBehavior.getBehaviorById(uniqueId);
        if (IsNull($v_0)) return new Mscrm.SaveResponse(0, null);
        var $v_1 = $v_0.get_formDataEntityObject();
        if (IsNull($v_1)) return new Mscrm.SaveResponse(0, null);
        var $v_2 = saveAsCompleted ? 58 : 1,
            $v_3,
            $$t_B,
            $$t_C,
            $v_4 = ($$t_C = this.$1L_0($v_1, $v_2, false, $$t_B = { val: $v_3 }), $v_3 = $$t_B.val, $$t_C);
        if ($v_4.$1_0 === 6) {
            var $v_5 = $v_1.get_isNew() ? "{00000000-0000-0000-0000-000000000000}" : $v_1.get_recordId(), $v_6 = "";
            $v_1.set_deferredAssociation(false);
            if (!isNullOrEmptyString($v_0.get_relationshipName())) {
                var $v_8 = Mscrm.InlineEditDataService.get_formEntity();
                if (!IsNull($v_8) && !$v_8.get_isNew())
                    $v_6 = String
                        .format("<association><relationshipname>{0}</relationshipname><sourceentityid>{1}</sourceentityid><sourceentitylogicalname>{2}</sourceentitylogicalname><relationshiproleordinal>{3}</relationshiproleordinal></association>", CrmEncodeDecode.CrmXmlEncode($v_0.get_relationshipName()), CrmEncodeDecode.CrmXmlEncode($v_8.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_8.get_typeName()), CrmEncodeDecode.CrmXmlEncode($v_0.get_relationshipRoleOrdinal().toString()));
                else $v_1.set_deferredAssociation(true)
            }
            $v_3 = String
                .format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><dataxml>{3}</dataxml><performduplicatecheck>{4}</performduplicatecheck><associations>{5}</associations></Input>", CrmEncodeDecode.CrmXmlEncode($v_5), CrmEncodeDecode.CrmXmlEncode($v_1.get_typeName()), CrmEncodeDecode.CrmXmlEncode($v_0.get_formId()), CrmEncodeDecode.CrmXmlEncode($v_3), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_performDuplicateCheck().toString()), $v_6);
            var $v_7 = {};
            $v_7["command"] = $v_2;
            $v_7["uniqueid"] = uniqueId;
            Mscrm.InlineEditDataService.setAttributeValueBeforeSaveForEntity($v_1);
            Mscrm.InlineEditDataService.executeWithReference($v_2, $v_3, false, $v_7, Mscrm.InlineEditDataService.$1x)
        }
        return $v_4
    },
    quickFormClearData: function(uniqueId) {
        var $v_0 = Mscrm.QuickFormBehavior.getBehaviorById(uniqueId);
        if (IsNull($v_0)) return;
        var $v_1 = $P_CRM($v_0.get_element()), $v_2 = Mscrm.InlineEditUtilities.getLinkedDataObject($v_1);
        Mscrm.InlineEditDataService.$1G($v_0, $v_2, false, true, 0);
        var $v_3 = Mscrm.InlineEditUtilities.getEntityReference($v_2);
        $v_0.get_formDataEntityObject().set_recordId($v_3.Id);
        $v_0.get_formDataEntityObject().set_recordName($v_3.Name)
    },
    quickFormRefreshData: function(uniqueId, recordId) {
        var $v_0 = Mscrm.QuickFormBehavior.getBehaviorById(uniqueId);
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.get_relatedEntityLogicalName(), $v_2 = $v_0.get_formId();
        if (!isNullOrEmptyString($v_1) && !isNullOrEmptyString(recordId)) {
            Mscrm.InlineEditDataService.setAttributeValueBeforeSaveForEntity($v_0.get_formDataEntityObject());
            var $v_3 = Mscrm.InlineEditDataService.$19($v_1, recordId, $v_2), $v_4 = {};
            $v_4["command"] = 208;
            $v_4["uniqueid"] = uniqueId;
            Mscrm.InlineEditDataService.executeWithReference(208, $v_3, false, $v_4, Mscrm.InlineEditDataService.$1w)
        }
    }
};
Mscrm.ErrorStatusControl = function() {
    this.$$d_$1M_0 = Function.createDelegate(this, this.$1M_0);
    this.$$d_$1k_0 = Function.createDelegate(this, this.$1k_0);
    this.$$d_$1l_0 = Function.createDelegate(this, this.$1l_0);
    this.$$d_$1q_0 = Function.createDelegate(this, this.$1q_0);
    this.$$d_$1D_0 = Function.createDelegate(this, this.$1D_0);
    this.$$d_$1p_0 = Function.createDelegate(this, this.$1p_0)
};
Mscrm.ErrorStatusControl.get_$3 = function() {
    if (!Mscrm.ErrorStatusControl.$X) {
        var $v_0 = $P_CRM("#refreshFormFooterContainer div.ms-crm-Read-Message");
        if ($v_0.length > 0) Mscrm.ErrorStatusControl.$X = $v_0.attr("id");
        else Mscrm.ErrorStatusControl.$X = "footer_statuscontrol"
    }
    return Mscrm.ErrorStatusControl.$X
};
Mscrm.ErrorStatusControl.get_statusBar = function() {
    if (!Mscrm.ErrorStatusControl.$S) {
        Mscrm.ErrorStatusControl.$S = new Mscrm.ErrorStatusControl;
        Mscrm.ErrorStatusControl.$S.initialize()
    }
    return Mscrm.ErrorStatusControl.$S
};
Mscrm.ErrorStatusControl.set_statusBar = function(value) {
    Mscrm.ErrorStatusControl.$S = value;
    return value
};
Mscrm.ErrorStatusControl.$23 = function($p0) {
    raiseEvent(94, null, null);
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
    Mscrm.Utilities.addEntityToRecent($v_0);
    Mscrm.Utilities.updateSyncErrorStatus();
    return false
};
Mscrm.ErrorStatusControl.hide = function(rank) {
    if (!$get(Mscrm.ErrorStatusControl.get_$3())) return;
    Mscrm.ErrorStatusControl.get_statusBar().$Q_0 === rank && Mscrm.ErrorStatusControl.$N(0, "", null)
};
Mscrm.ErrorStatusControl.$26 = function() {
    Mscrm.ErrorStatusControl.get_statusBar().$n_0(6) && Mscrm.ErrorStatusControl.$N(6, window.LOCID_SAVING, null)
};
Mscrm.ErrorStatusControl.onEntityIsDisabledChangedHandler = function() { Mscrm.ErrorStatusControl.$y() };
Mscrm.ErrorStatusControl.$y = function() {
    if (!Mscrm.Utilities.isGlobalQuickCreateForm())
        if (Mscrm.InlineEditDataService.get_formEntity().get_isDisabled() &&
            !Mscrm.InlineEditDataService.get_formEntity().get_overrideDisabledMode()) {
            $P_CRM("body").addClass("entity-disabled");
            Mscrm.ErrorStatusControl.$N(20, window.LOCID_READONLY, null)
        } else {
            $P_CRM("body").removeClass("entity-disabled");
            Mscrm.ErrorStatusControl.$1N()
        }
};
Mscrm.ErrorStatusControl.$1N = function() { Mscrm.ErrorStatusControl.$N(0, "", null) };
Mscrm.ErrorStatusControl.showError = function(message, overwrite, result) {
    if (!IsNull(overwrite) && overwrite) Mscrm.ErrorStatusControl.get_statusBar().$8_0 = true;
    Mscrm.ErrorStatusControl.get_statusBar().$n_0(10) && Mscrm.ErrorStatusControl.$N(10, message, result)
};
Mscrm.ErrorStatusControl.displayErrorInformation = function(error) {
    if (!IsNull(error)) {
        var $v_0 = Mscrm.ErrorStatusControl.$1a(error);
        if (!isNullOrEmptyString(error.Title)) Mscrm.ErrorStatusControl.showError(error.Title, true, null);
        else Mscrm.ErrorStatusControl.showError($v_0, true, null);
        Mscrm.ErrorStatusControl.get_statusBar().$P_0 = Mscrm.ErrorInformation
            .createErrorInfo(error.Code, $v_0, error.SerializedException)
    } else Mscrm.ErrorStatusControl.get_statusBar().$P_0 = null
};
Mscrm.ErrorStatusControl.$1a = function($p0) {
    var $v_0 = null;
    if ($p0.Code === "0x80040265") $v_0 = $p0.Description;
    if (isNullOrEmptyString($v_0)) $v_0 = $p0.DisplayText;
    return $v_0
};
Mscrm.ErrorStatusControl.$28 = function() {
    Mscrm.ErrorStatusControl.get_statusBar().$n_0(2) &&
        Mscrm.ErrorStatusControl.$N(2, window.LOCID_UNSAVEDCHANGES, null)
};
Mscrm.ErrorStatusControl.showCriticalWarning = function(warningMessage) {
    Mscrm.ErrorStatusControl.get_statusBar().$n_0(4) && Mscrm.ErrorStatusControl.$N(4, warningMessage, null)
};
Mscrm.ErrorStatusControl.$N = function($p0, $p1, $p2) {
    switch ($p0) {
    case 0:
    case 1:
    case 2:
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement().attr("src", "/_imgs/inlineedit/save.png");
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement()
            .attr("alt", $p1 && $p1.length > 0 ? CrmEncodeDecode.CrmHtmlEncode($p1) : window.LOCID_SAVETOOLTIP);
        Mscrm.ErrorStatusControl.get_statusBar().$8_0 = true;
        break;
    case 4:
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement().attr("src", "/_imgs/inlineedit/save.png");
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement().attr("alt", CrmEncodeDecode.CrmHtmlEncode($p1));
        Mscrm.ErrorStatusControl.get_statusBar().$8_0 = false;
        break;
    case 6:
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement().attr("src", "/_imgs/inlineedit/saveanimation.gif");
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement().attr("alt", CrmEncodeDecode.CrmHtmlEncode($p1));
        Mscrm.ErrorStatusControl.get_statusBar().$8_0 = true;
        break;
    case 10:
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement().attr("src", "/_imgs/inlineedit/save.png");
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement()
            .attr("alt", String.format(window.LOCID_ERRORSTATUS_ALTTEXT, CrmEncodeDecode.CrmHtmlEncode($p1)));
        Mscrm.ErrorStatusControl.get_statusBar().$8_0 = false;
        Mscrm.ErrorStatusControl.get_statusBar().get_$14_0().show();
        break;
    case 20:
        Mscrm.ErrorStatusControl.get_statusBar().get_imageElement().attr("src", "/_imgs/inlineedit/locked.png");
        Mscrm.ErrorStatusControl.get_statusBar().$8_0 = false;
        break
    }
    $p0 !== 10 && Mscrm.ErrorStatusControl.get_statusBar().get_$14_0().hide();
    Mscrm.ErrorStatusControl.get_statusBar().$Q_0 = $p0;
    if (IsNull($p2)) Mscrm.ErrorStatusControl.get_statusBar().$U_0 = null;
    else {
        Mscrm.ErrorStatusControl.get_statusBar().$U_0 = new Mscrm
            .ValidationResult($p2.isValid, $p2.errorText, $p2.errorIconPath);
        Mscrm.ErrorStatusControl.get_statusBar().$U_0.attributeName = $p2.attributeName;
        Mscrm.ErrorStatusControl.get_statusBar().$U_0.parentFormDataEntityId = $p2.parentFormDataEntityId
    }
    Mscrm.ErrorStatusControl.$1R($p1)
};
Mscrm.ErrorStatusControl.$1R = function($p0) {
    Mscrm.ErrorStatusControl.get_statusBar().$P_0 = null;
    Mscrm.ErrorStatusControl.get_statusBar().get_titleElement().html(CrmEncodeDecode.CrmHtmlEncode($p0));
    Mscrm.ErrorStatusControl.get_statusBar().get_$1S_0().setMessageInFlyOut($p0)
};
Mscrm.ErrorStatusControl.showMessage = function() {
    Mscrm.ErrorStatusControl.get_statusBar().$8_0 = true;
    !IsNull(Mscrm.ErrorStatusControl.get_statusBar().$P_0) &&
        Mscrm.ErrorStatusControl.showCrmMessage(Mscrm.ErrorStatusControl.get_statusBar().$P_0)
};
Mscrm.ErrorStatusControl.showCrmMessage = function(error) {
    openErrorDlg(error.get_code(), error.get_description(), error, 0, 0)
};
Mscrm.ErrorStatusControl.prototype = {
    $Q_0: 0,
    $8_0: false,
    $U_0: null,
    $K_0: null,
    $m_0: null,
    $b_0: null,
    $k_0: null,
    $c_0: null,
    $P_0: null,
    get_imageElement: function() {
        if (!this.$K_0) this.$K_0 = $P_CRM("#img" + Mscrm.ErrorStatusControl.get_$3());
        return this.$K_0
    },
    get_$14_0: function() {
        if (!this.$b_0) this.$b_0 = $P_CRM("img#alert-status-icon");
        return this.$b_0
    },
    get_saveElement: function() {
        if (!this.$K_0) this.$K_0 = $P_CRM("#save" + Mscrm.ErrorStatusControl.get_$3());
        return this.$K_0
    },
    get_titleElement: function() {
        if (!this.$m_0) this.$m_0 = $P_CRM("#title" + Mscrm.ErrorStatusControl.get_$3());
        return this.$m_0
    },
    get_$29_0: function() {
        if (!this.$k_0) this.$k_0 = $P_CRM("div.status-message");
        return this.$k_0
    },
    get_$1S_0: function() {
        if (!this.$c_0)
            this.$c_0 = new Mscrm.ErrorStatusControlFlyout("footer-status-message-flyout", this.get_$29_0());
        return this.$c_0
    },
    get_result: function() { return this.$U_0 },
    get_messageRank: function() { return this.$Q_0 },
    $1p_0: function($p0) { Mscrm.ErrorStatusControl.showMessage() },
    $1D_0: function($p0) {
        if (!Mscrm.InlineEditDataService.get_busy()) {
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            Mscrm.InlineEditDataService.save(1, Mscrm.ErrorStatusControl.$23, null, false)
        }
    },
    $1q_0: function($p0) {
        switch ($p0.which) {
        case 13:
            this.$1D_0($p0);
            break;
        default:
            break
        }
    },
    initialize: function() {
        if (!$get(Mscrm.ErrorStatusControl.get_$3())) return;
        if (window.LOCID_UI_DIR === "RTL") $P_CRM("#" + Mscrm.ErrorStatusControl.get_$3() + "_d").css("align", "left");
        else $P_CRM("#" + Mscrm.ErrorStatusControl.get_$3() + "_d").css("align", "right");
        $P_CRM("#" + Mscrm.ErrorStatusControl.get_$3()).css("display", "block");
        $P_CRM("#" + Mscrm.ErrorStatusControl.get_$3()).css("nowrap", "nowrap");
        $P_CRM("#a" + Mscrm.ErrorStatusControl.get_$3()).click(this.$$d_$1p_0);
        $P_CRM("#save" + Mscrm.ErrorStatusControl.get_$3()).click(this.$$d_$1D_0);
        $P_CRM("#save" + Mscrm.ErrorStatusControl.get_$3()).keydown(this.$$d_$1q_0);
        Mscrm.ErrorStatusControl.get_statusBar().$Q_0 = 0;
        Mscrm.ErrorStatusControl.get_statusBar().get_saveElement()
            .attr("src", "/_imgs/imagestrips/transparent_spacer.gif");
        Mscrm.ErrorStatusControl.$y();
        this.get_imageElement().mouseover(this.$$d_$1l_0);
        this.get_imageElement().mouseout(this.$$d_$1k_0);
        $P_CRM(window).bind("unload", this.$$d_$1M_0)
    },
    $1M_0: function($p0) {
        $P_CRM(window).unbind("unload", this.$$d_$1M_0);
        this.$12_0()
    },
    $12_0: function() {
        if (!IsNull(this.get_imageElement())) {
            this.get_imageElement().unbind("mouseover", this.$$d_$1l_0);
            this.get_imageElement().unbind("mouseout", this.$$d_$1k_0)
        }
        $P_CRM("#a" + Mscrm.ErrorStatusControl.get_$3()).unbind("click", this.$$d_$1p_0);
        $P_CRM("#save" + Mscrm.ErrorStatusControl.get_$3()).unbind("click", this.$$d_$1D_0);
        $P_CRM("#save" + Mscrm.ErrorStatusControl.get_$3()).unbind("keydown", this.$$d_$1q_0);
        $P_CRM(window).unbind("unload", this.$$d_$1M_0)
    },
    $1k_0: function($p0) {
        this.get_imageElement().attr("src") === "/_imgs/inlineedit/savehover.png" &&
            this.get_imageElement().attr("src", "/_imgs/inlineedit/save.png")
    },
    $1l_0: function($p0) {
        this.get_imageElement().attr("src") === "/_imgs/inlineedit/save.png" &&
            this.get_imageElement().attr("src", "/_imgs/inlineedit/savehover.png")
    },
    $n_0: function($p0) {
        if (!$get(Mscrm.ErrorStatusControl.get_$3())) return false;
        if (Mscrm.ErrorStatusControl.get_statusBar().$8_0 || $p0 > this.$Q_0) return true;
        return false
    }
};
Mscrm.MessageRanks = function() {};
Mscrm.ErrorStatusControlFlyout = function(templateId, clickOpener) {
    this.$$d_$1n_0 = Function.createDelegate(this, this.$1n_0);
    this.$$d_$1M_0 = Function.createDelegate(this, this.$1M_0);
    this.$$d_$1m_0 = Function.createDelegate(this, this.$1m_0);
    this.$$d_$1o_0 = Function.createDelegate(this, this.$1o_0);
    this.$C_0 = $P_CRM("#" + templateId);
    this.$C_0.click(this.$$d_$1o_0);
    this.$q_0 = $P_CRM("div.status-message-detail", this.$C_0);
    this.$Y_0 = clickOpener;
    this.$Y_0.click(this.$$d_$1m_0);
    $P_CRM(window).bind("unload", this.$$d_$1M_0)
};
Mscrm.ErrorStatusControlFlyout.prototype = {
    $C_0: null,
    $q_0: null,
    $Y_0: null,
    $1M_0: function($p0) {
        $P_CRM(window).unbind("unload", this.$$d_$1M_0);
        this.$12_0()
    },
    $12_0: function() {
        !IsNull(this.$Y_0) && this.$Y_0.unbind("click", this.$$d_$1m_0);
        !IsNull(this.$C_0) && this.$C_0.unbind("click", this.$$d_$1o_0);
        $P_CRM(window).unbind("unload", this.$$d_$1M_0)
    },
    setMessageInFlyOut: function(content) { this.$q_0.html(CrmEncodeDecode.CrmHtmlEncode(content)) },
    get_$1g_0: function() { return this.$C_0.css("display") === "none" },
    $1c_0: function() {
        this.$C_0.hide();
        $P_CRM("body").unbind("click", this.$$d_$1n_0)
    },
    $25_0: function() {
        var $v_0 = $P_CRM("body"), $$t_1 = this;
        window.setTimeout(function() { $v_0.click($$t_1.$$d_$1n_0) }, 100);
        this.$C_0.show()
    },
    $1n_0: function($p0) { this.$1c_0() },
    $1o_0: function($p0) { $p0.stopPropagation() },
    $1m_0: function($p0) { this.get_$1g_0() && this.$25_0() }
};
Mscrm.DisplayAggregatePerformanceMarkerVisitor = function() {};
Mscrm.DisplayAggregatePerformanceMarkerVisitor.prototype = {
    $T_0: null,
    get_displayHtml: function() {
        if (IsNull(this.$T_0)) return "&nbsp;";
        return this.$T_0.toString()
    },
    visit: function(markers) {
        if (IsNull(this.$T_0)) this.$T_0 = new Sys.StringBuilder;
        var $$dict_3 = markers.get_markers();
        for (var $$key_4 in $$dict_3) {
            var $v_0 = { key: $$key_4, value: $$dict_3[$$key_4] }, $v_1 = $v_0.value;
            this.$T_0.append(String
                .format('\r\n<LI>\r\n\t<Span>\r\n\t\t<DIV style="float:left; width:30%;"><b>{0}</b></Div>\r\n\t\t<DIV style="float:left; width:25%;">\r\n\t\t\tDuration:{1} ms &nbsp;\r\n\t\t</DIV>\r\n\t\t<DIV style="float:left; width:25%;">\r\n\t\t\tAvg:</strong>{2}ms &nbsp;\r\n\t\t</DIV>\r\n\t\t<DIV style="float:left; width:20%;">\r\n\t\t\tCalls:{3} &nbsp;\r\n\t\t</DIV>\r\n\t</span>\r\n</LI>\r\n', $v_0.key, $v_1.get_lastDuration(), $v_1.get_average(), $v_1.get_count()))
        }
    }
};
Mscrm.ProgressControl = function() {
    this
        .$11_0 =
        "<div Id='processingDialog' class='ms-crm-dialog-processing' style='display:none;'> <div class='ms-crm-processing-title ms-crm-TextAutoEllipsis'> <span>{0}</span> </div><div> <img src='" + window.CDNURL + "/_imgs/processing_loader.gif' class='ms-crm-inline-processing'> </div></div>";
    this.$6_0 = false;
    var $v_0 = $P_CRM("body");
    if (!$P_CRM("#processingDialog").length) {
        $v_0.append(String.format(this.$11_0, CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESSING)));
        $v_0.append(this.$1E_0)
    }
    this.$M_0 = $P_CRM("#processingDialogOverlay");
    this.$L_0 = $P_CRM("#processingDialog")
};
Mscrm.ProgressControl.prototype = {
    $6_0: false,
    $L_0: null,
    $M_0: null,
    $1E_0: "<div Id='processingDialogOverlay' class='ms-crm-processing-inactive-overlay' style='display:none;'></div>",
    $1J_0: function($p0) {
        var $v_0 = $p0[0];
        if (!IsNull($v_0)) $v_0.style.display = "inline-block"
    },
    $1B_0: function($p0) {
        var $v_0 = $p0[0];
        if (!IsNull($v_0)) $v_0.style.display = "none"
    },
    $w_0: function($p0) {
        if ($p0) {
            this.$1J_0(this.$L_0);
            this.$1J_0(this.$M_0)
        } else {
            this.$1B_0(this.$L_0);
            this.$1B_0(this.$M_0)
        }
    },
    hide: function() {
        if (this.$6_0) this.$6_0 = false;
        this.$w_0(this.$6_0)
    },
    show: function(command) {
        if (this.$2A_0(command) && !this.$6_0) this.$6_0 = true;
        this.$w_0(this.$6_0)
    },
    forceShow: function() {
        if (!this.$6_0) this.$6_0 = true;
        this.$w_0(this.$6_0)
    },
    $2A_0: function($p0) {
        switch ($p0) {
        case 1:
        case 2:
        case 211:
        case 58:
        case 207:
        case 210:
        case 209:
            return false;
        default:
            return true
        }
    },
    _disposed: false,
    get_isDisposed: function() { return this._disposed },
    dispose: function() {
        if (this._disposed) return;
        if (!IsNull(this.$L_0)) {
            this.$L_0.remove();
            this.$L_0 = null
        }
        if (!IsNull(this.$M_0)) {
            this.$M_0.remove();
            this.$M_0 = null
        }
        this._disposed = true
    }
};
Mscrm.SaveResponse = function($p0, $p1) {
    this.$1_0 = $p0;
    this.$f_0 = $p1
};
Mscrm.SaveResponse.prototype = {
    $f_0: null,
    $1_0: 0,
    $h_0: null,
    $i_0: null,
    get_message: function() { return this.$f_0 },
    get_code: function() { return this.$1_0 },
    get_recordId: function() { return this.$h_0 },
    set_recordId: function(value) {
        this.$h_0 = value;
        return value
    },
    get_recordName: function() { return this.$i_0 },
    set_recordName: function(value) {
        this.$i_0 = value;
        return value
    },
    get_success: function() {
        switch (this.$1_0) {
        case 2:
        case 3:
        case 4:
        case 0:
        case 7:
        case 9:
            return false;
        case 6:
        case 1:
        case 10:
        case 8:
        default:
            return true
        }
    }
};
Mscrm.SaveResponseCode = function() {};
Mscrm.DuplicateDetectionService
    .registerClass("Mscrm.DuplicateDetectionService", null, Mscrm.IDuplicateDetectionService);
Mscrm.InlineEditDataService.registerClass("Mscrm.InlineEditDataService");
Mscrm.ErrorStatusControl.registerClass("Mscrm.ErrorStatusControl");
Mscrm.MessageRanks.registerClass("Mscrm.MessageRanks");
Mscrm.ErrorStatusControlFlyout.registerClass("Mscrm.ErrorStatusControlFlyout");
Mscrm.DisplayAggregatePerformanceMarkerVisitor
    .registerClass("Mscrm.DisplayAggregatePerformanceMarkerVisitor", null, Mscrm.IPerformanceMarkerVisitor);
Mscrm.ProgressControl.registerClass("Mscrm.ProgressControl");
Mscrm.SaveResponse.registerClass("Mscrm.SaveResponse");
Mscrm.SaveResponseCode.registerClass("Mscrm.SaveResponseCode");
Mscrm.InlineEditDataService.$D = 0;
Mscrm.InlineEditDataService.$A = false;
Mscrm.InlineEditDataService.$Z = null;
Mscrm.InlineEditDataService.$F = null;
Mscrm.InlineEditDataService.$d = false;
Mscrm.InlineEditDataService.$O = 0;
Mscrm.InlineEditDataService.$I = Mscrm.InlineEditDataService.get_$o();
Mscrm.InlineEditDataService.$J = null;
Mscrm.InlineEditDataService.$R = false;
Mscrm.InlineEditDataService.$e = false;
Mscrm.InlineEditDataService.$G = false;
Mscrm.InlineEditDataService.$2 = new Mscrm.DuplicateDetectionService;
Mscrm.InlineEditDataService.errorKey = "_error";
Mscrm.InlineEditDataService.entityDisabledKey = "_entitydisabled";
Mscrm.InlineEditDataService.stateCode = "statecode";
Mscrm.InlineEditDataService.$7 = null;
Mscrm.InlineEditDataService.$W = null;
Mscrm.ErrorStatusControl.$X = null;
Mscrm.ErrorStatusControl.$S = null;
Mscrm.MessageRanks.none = 0;
Mscrm.MessageRanks.info = 1;
Mscrm.MessageRanks.warning = 2;
Mscrm.MessageRanks.criticalWarning = 4;
Mscrm.MessageRanks.progress = 6;
Mscrm.MessageRanks.error = 10;
Mscrm.MessageRanks.readOnly = 20;
Mscrm.SaveResponseCode.formNotFound = 0;
Mscrm.SaveResponseCode.formNotDirty = 1;
Mscrm.SaveResponseCode.preValidationFailed = 2;
Mscrm.SaveResponseCode.validationFailed = 3;
Mscrm.SaveResponseCode.formSerializationFailed = 4;
Mscrm.SaveResponseCode.validationSuccessful = 5;
Mscrm.SaveResponseCode.saveSuccessfullyInitiated = 6;
Mscrm.SaveResponseCode.saveFailed = 7;
Mscrm.SaveResponseCode.saveSucceeded = 8;
Mscrm.SaveResponseCode.saveCanceled = 9;
Mscrm.SaveResponseCode.saveSpecial = 10