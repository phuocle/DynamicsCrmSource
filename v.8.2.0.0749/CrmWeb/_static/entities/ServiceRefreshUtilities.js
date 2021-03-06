Type.registerNamespace("Mscrm");
Mscrm.CaseResearchControls = function(filterId, gridId, linkControl) {
    this.$$d_$c_0 = Function.createDelegate(this, this.$c_0);
    this.$$d_$F_0 = Function.createDelegate(this, this.$F_0);
    this.$4_0 = filterId;
    this.$A_0 = gridId;
    this.get_title().id = "titleHeader";
    this.$G_0 = linkControl;
    $addHandler(window, "unload", this.$$d_$F_0)
};
Mscrm.CaseResearchControls.prototype = {
    $4_0: null,
    $A_0: null,
    $8_0: null,
    $1_0: null,
    $7_0: null,
    $2_0: null,
    $G_0: null,
    get_filterLookup: function() {
        if (!IsNull(this.$8_0)) return this.$8_0;
        this.$8_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$4_0);
        return this.$8_0
    },
    get_caseGrid: function() {
        if (!IsNull(this.$1_0)) return this.$1_0;
        this.initializeCaseGrid();
        return this.$1_0
    },
    initializeCaseGrid: function() {
        if (IsNull(this.$1_0)) {
            this.$1_0 = $find(this.$A_0);
            var $v_0 = $get(this.$A_0 + "_d");
            if (!IsNull($v_0)) $v_0.className = "caseBrowseGrid caseBrowseFilter";
            this.$1_0.SetParameter("enablesingleclick", "true");
            this.$1_0.SetParameter("disablePrimaryFieldClick", "true");
            this.$1_0.add_onRefresh(this.$$d_$c_0);
            this.$1_0.add_onResetComplete(this.$$d_$c_0)
        }
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.AdvancedSimilaritySearch") &&
            Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.ServiceCaseTopicAnalysis")) {
            this.$1_0.SetParameter("DataProviderOverride",
                "Microsoft.Crm.Application.Controls.AzureMLSimilarRecordsDataProvider");
            this.$1_0.SetParameter("IsAzureMLSimilarRecordsGrid", "1")
        }
    },
    $F_0: function($p0) {
        $removeHandler(window, "unload", this.$$d_$F_0);
        this.$L_0()
    },
    $L_0: function() {
        try {
            if (IsNull(this.$1_0)) {
                this.$1_0.remove_onRefresh(this.$$d_$c_0);
                this.$1_0.remove_onResetComplete(this.$$d_$c_0)
            }
        } catch ($$e_0) {
        }
    },
    get_title: function() {
        if (!IsNull(this.$7_0)) return this.$7_0;
        var $v_0 = $get(this.$4_0.replace("_i", "_d"));
        if (IsNull($v_0)) {
            this.$4_0 = "header_process_" + this.$4_0;
            $v_0 = $get(this.$4_0.replace("_i", "_d"))
        }
        if (!IsNull($v_0)) {
            this.$7_0 = XUI.Html.DomUtils.GetNextSibling($v_0);
            this.$7_0.className = "selectedRowTitle";
            $v_0.className = "caseBrowseFilter"
        }
        return this.$7_0
    },
    get_conversationsWall: function() {
        if (!IsNull(this.$2_0)) return this.$2_0;
        this.$2_0 = $find("header_process_CaseResearch_LinkControl_casesconversations");
        if (IsNull(this.$2_0)) this.$2_0 = $find("CaseResearch_LinkControl_casesconversations");
        this.$2_0.modifyCssForReadOnly();
        return this.$2_0
    },
    $b_0: function() {
        !IsNull(this.get_conversationsWall()) && this.get_conversationsWall().set_masterComponentId(this.$A_0)
    },
    $c_0: function($p0, $p1) {
        this.get_caseGrid().SetParameter("enablesingleclick", "true");
        this.$b_0();
        if (this.get_caseGrid().get_totalRecordCount() > 0) {
            this.get_caseGrid().get_innerGrid().SelectRecords(0, 0, false);
            this.$G_0.get_flyOutDialog().setFlyOutButtonDisplay(1, true)
        } else this.$G_0.get_flyOutDialog().setFlyOutButtonDisplay(1, false);
        !IsNull(this.get_caseGrid().get_innerGrid()) && this.get_caseGrid().get_innerGrid().handleSingleClick(null)
    }
};
Mscrm.CaseResolveContainer = function() {};
Mscrm.CaseResolveContainer.prototype = {
    $9_0: null,
    $D_0: null,
    $E_0: null,
    $B_0: false,
    get_quickFormInstance: function() {
        if (!IsNull(this.$9_0)) return this.$9_0;
        this.$9_0 = Mscrm.QuickFormBehavior.getBehaviorById("8e43003b-f2b6-490e-8f44-da81cf084bd1");
        return this.$9_0
    },
    get_statusCode: function() {
        if (IsNull(this.get_statusCodeAttribute())) return null;
        if (!IsNull(this.$D_0)) return this.$D_0;
        var $v_0 = this.get_statusCodeAttribute().get_controls().get();
        this.$D_0 = Mscrm.FormControlInputBehavior.GetBehavior($v_0[0].get_editView().get_editElementId());
        return this.$D_0
    },
    get_statusCodeAttribute: function() {
        if (!IsNull(this.$E_0)) return this.$E_0;
        var $v_0 = this.get_quickFormInstance().get_formDataEntityObject();
        this.$E_0 = $v_0.get_attributes().get("statuscode");
        return this.$E_0
    },
    get_isDataInitialized: function() { return this.$B_0 },
    set_isDataInitialized: function(value) {
        this.$B_0 = value;
        return value
    }
};
Mscrm.CaseResolveUtilities = function() {};
Mscrm.CaseResolveUtilities.resolveCase = function(linkControl) {
    var $v_0 = Mscrm.CrmUri.create("CS/cases/dlg_ConfirmResolve.aspx");
    $v_0.get_query()["pId"] = Xrm.Page.data.entity.getId();
    $v_0.get_query()["pType"] = 112;
    var $v_1 = [linkControl], $v_2 = new RemoteCommand("CustomerService", "IsValidStatusReasonTransition");
    $v_2.SetParameter("incidentId", Mscrm.ServiceRefreshUtilities.get_primaryRecordId());
    var $v_3 = $v_2.Execute(), $v_4 = $v_3.ReturnValue;
    switch ($v_4) {
    case 1:
        $v_0.get_query()["reason"] = "novalidstatustransition";
        var $v_5 = new Mscrm.CrmDialog($v_0, window.document, 600, 200, null);
        $v_5.show();
        break;
    case 2:
        $v_0.get_query()["reason"] = "activeactivities";
        var $v_6 = new Mscrm.CrmDialog($v_0, window.document, 600, 200, null);
        $v_6.setCallbackInfo("performActionAfterConfirmCancelFromRibbon", Mscrm.CaseResolveUtilities, $v_1);
        $v_6.show();
        break;
    case 3:
        Mscrm.CaseResolveUtilities.performActionAfterConfirmCancelFromRibbon(true, linkControl);
        break
    }
};
Mscrm.CaseResolveUtilities.performActionAfterConfirmCancelFromRibbon = function(returnValue, linkControl) {
    returnValue &&
        window.setTimeout(function() {
                Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
                var $v_0 = "", $$t_I, $$t_J;
                if (!($$t_J = Mscrm.InlineEditDataService
                    .isValidFormData(null, 203, $$t_I = { val: $v_0 }), $v_0 = $$t_I
                    .val, $$t_J)) return;
                var $v_1 = Mscrm.CaseResolveUtilities.$3.get_quickFormInstance().buildXml();
                if (isNullOrEmptyString($v_1)) {
                    Mscrm.ErrorStatusControl.showError(window.LOCID_GENERIC_MESSAGE, true);
                    return
                }
                window.document.body.style.cursor = "wait";
                var $v_2 = XUI.Xml.LoadXml($v_1),
                    $v_3 = $v_2.createElement("incidentid"),
                    $v_4 = Mscrm.ServiceRefreshUtilities.get_primaryRecordId();
                XUI.Xml.SetText($v_3, $v_4);
                var $v_5 = $v_2;
                XUI.Xml.DomUtils.GetFirstChild($v_5).appendChild($v_3);
                var $v_6 = $v_2.createElement("subject"),
                    $v_7 = Mscrm.CaseResolveUtilities.$3.get_statusCode(),
                    $v_8 = window.LOCID_MISSINGRES;
                if ($v_7.get_selectedIndex() !== -1)
                    $v_8 = String.format(window.LOCID_RESOLUTION, $v_7.get_selectedText());
                XUI.Xml.SetText($v_6, $v_8);
                XUI.Xml.DomUtils.GetFirstChild($v_5).appendChild($v_6);
                var $v_9 = new RemoteCommand("CustomerService", "ResolveCase");
                $v_9.SetParameter("activityXml", XUI.Xml.XMLSerializer.serializeToString($v_2));
                $v_9.SetParameter("newStatus", $v_7.get_dataValue());
                $v_9.SetParameter("returnErrorString", true);
                if (!IsNull($v_0)) {
                    $v_9.SetParameter("incidentId", $v_4);
                    var $v_B = XUI.Xml.LoadXml($v_0);
                    $v_9.SetParameter("incidentData", XUI.Xml.XMLSerializer.serializeToString($v_B))
                }
                var $v_A = $v_9.Execute();
                if ($v_A.Success) {
                    var $v_C = $v_A.ReturnValue;
                    if (!isNullOrEmptyString($v_C)) {
                        var $v_D = XUI.Xml.LoadXml($v_C), $v_E = XUI.Xml.SelectSingleNode($v_D, "/errordata", null);
                        if (!isNullOrEmptyString(XUI.Xml.GetText($v_E))) {
                            window.document.body.style.cursor = "default";
                            var $v_F = XUI.Xml.SelectSingleNode($v_D, "/errordata/errormessage", null);
                            alert(XUI.Xml.GetText($v_F))
                        } else {
                            Mscrm.CaseResolveUtilities.$3.get_quickFormInstance().clear();
                            Mscrm.CaseResolveUtilities.$Y(linkControl);
                            window.setTimeout(function() {
                                    Mscrm.InlineEditDataService.refreshGrid();
                                    Mscrm.ReadFormUtilities
                                        .forceReload(112, $v_4, Mscrm.InlineEditDataService.get_formId())
                                },
                                0)
                        }
                    }
                } else {
                    window.document.body.style.cursor = "default";
                    Mscrm.ErrorStatusControl.showError(window.LOCID_GENERIC_MESSAGE, true)
                }
            },
            0)
};
Mscrm.CaseResolveUtilities.retrieveIncidentData = function(linkControl) {
    linkControl.get_flyOutDialog().get_options().set_dialogClass("CaseResolveCss");
    if (IsNull(Mscrm.CaseResolveUtilities.$3)) Mscrm.CaseResolveUtilities.$3 = new Mscrm.CaseResolveContainer;
    if (Mscrm.CaseResolveUtilities.$3.$B_0) return;
    linkControl.set_completedLabel(window.LOCID_CASE_CLOSED);
    linkControl.get_flyOutDialog().get_options().set_width(400);
    linkControl.set_onAssociatedStepCheck(Mscrm.CaseResolveUtilities.$S);
    linkControl.get_iElement().setAttribute("command", "incidentresolution");
    Mscrm.CaseResolveUtilities.$3.$B_0 = true;
    if (Mscrm.CaseResolveUtilities.$S()) {
        var $v_0 = $P_CRM(linkControl.get_iElement());
        $v_0.trigger("attribute-changed", [$v_0.data()])
    }
};
Mscrm.CaseResolveUtilities.$Y = function($p0) {
    $p0.get_isEligibleForMarkComplete() &&
        !$p0.get_isAssociatedStepCompleted() &&
        $p0.set_isAssociatedStepCompleted(true)
};
Mscrm.CaseResolveUtilities.$S = function() {
    var $v_0 = $find("PrimaryEntity");
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_isNew(), $v_2 = $v_0.get_isDisabled();
        if (!$v_1 && $v_2) return true
    }
    return false
};
Mscrm.ServiceRefreshUtilities = function() {};
Mscrm.ServiceRefreshUtilities.initializeCaseResearchControl = function(linkControlObject) {
    if (IsNull(Mscrm.ServiceRefreshUtilities.$0) || Mscrm.Utilities.isTurboForm()) {
        Mscrm.ServiceRefreshUtilities.$J = linkControlObject.get_iElement().id;
        Mscrm.ServiceRefreshUtilities.$0 = new Mscrm
            .CaseResearchControls(linkControlObject.get_iElement().id + "_subjectlookup_i",
                linkControlObject.get_iElement().id + "_resolvedcasesgrid",
                linkControlObject);
        if (!Mscrm.Utilities.isTurboForm()) {
            Mscrm.ServiceRefreshUtilities.$0.get_filterLookup().set_doNotSubmit(true);
            Mscrm.ServiceRefreshUtilities.$0.get_filterLookup()
                .add_change(Mscrm.ServiceRefreshUtilities.filterLookupChange)
        }
        linkControlObject.get_flyOutDialog().get_options().set_draggable(true);
        linkControlObject.get_flyOutDialog().get_options().set_width(835);
        linkControlObject.get_flyOutDialog().get_options().set_showCloseButton(true);
        linkControlObject.get_flyOutDialog().get_options().set_dialogClass("CaseResearchCss");
        linkControlObject.set_showProgressIndicator(true);
        window.screen.width <= 1024 &&
            window.screen.height <= 768 &&
            linkControlObject.get_flyOutDialog().get_options().set_height(440);
        window.screen.width < 835 && linkControlObject.get_flyOutDialog().get_options().set_width(window.screen.width);
        linkControlObject.set_completedLabel(window.LOCID_FIND_MORE);
        var $v_0 = false;
        if (IsNull(Xrm.Page.data.entity.getId())) $v_0 = true;
        if (!$v_0) Mscrm.ServiceRefreshUtilities.$M(linkControlObject, "CheckConnectionExist");
        else linkControlObject.set_isAssociatedStepCompleted(false);
        linkControlObject.subscribeToEvent(81, Mscrm.ServiceRefreshUtilities.connectionDeleteHandler);
        $addHandler(window, "unload", Mscrm.ServiceRefreshUtilities.$F);
        Mscrm.ServiceRefreshUtilities.$U()
    }
};
Mscrm.ServiceRefreshUtilities.$F = function($p0) {
    $removeHandler(window, "unload", Mscrm.ServiceRefreshUtilities.$F);
    Mscrm.ServiceRefreshUtilities.$L()
};
Mscrm.ServiceRefreshUtilities.$L = function() {
    try {
        if (IsNull(Mscrm.ServiceRefreshUtilities.$0)) {
            Mscrm.ServiceRefreshUtilities.$0.get_filterLookup()
                .remove_change(Mscrm.ServiceRefreshUtilities.filterLookupChange);
            Mscrm.ServiceRefreshUtilities.$H
                .remove_onRefresh(Mscrm.ServiceRefreshUtilities.childCasesGridControlOnRefresh)
        }
    } catch ($$e_0) {
    }
};
Mscrm.ServiceRefreshUtilities
    .connectionDeleteHandler = function(linkControlObject, eventCode, parameters, sourceComponentId) {
        if (IsNull(parameters["command"]) ||
            IsNull(parameters["entitytypecode"]) ||
            IsNull(parameters["recordCount"]) ||
            IsNull(parameters["viewId"]) ||
            IsNull(parameters["relationshipName"])) return;
        var $v_0 = Number.parseInvariant(parameters["command"].toString()),
            $v_1 = Number.parseInvariant(parameters["entitytypecode"].toString()),
            $v_2 = Number.parseInvariant(parameters["recordCount"].toString()),
            $v_3 = parameters["viewId"].toString(),
            $v_4 = parameters["relationshipName"].toString();
        if (1 !== $v_0) return;
        if (!(3234 === $v_1)) return;
        if ("{23FB1036-E41D-4D75-8AA7-27569B5B6512}" === $v_3 && "incident_connections1" === $v_4)
            if (!$v_2) linkControlObject.set_isAssociatedStepCompleted(false);
            else linkControlObject.set_isAssociatedStepCompleted(true);
        else Mscrm.ServiceRefreshUtilities.$M(linkControlObject, "CheckConnectionExist");
        var $v_5 = $P_CRM(linkControlObject.get_iElement());
        $v_5.trigger("attribute-changed", [$v_5.data()])
    };
Mscrm.ServiceRefreshUtilities.caseResearchMarkSolution = function(linkControl) {
    Mscrm.ServiceRefreshUtilities.$M(linkControl, "CreateConnection")
};
Mscrm.ServiceRefreshUtilities.validateCaseChildCount = function() {
    Mscrm.ServiceRefreshUtilities.$H = $find("ChildCasesGrid");
    Mscrm.ServiceRefreshUtilities.$H.add_onRefresh(Mscrm.ServiceRefreshUtilities.childCasesGridControlOnRefresh)
};
Mscrm.ServiceRefreshUtilities.childCasesGridControlOnRefresh = function(sender, args) {
    var $v_0 = sender;
    Mscrm.ServiceRefreshUtilities.enableParentCaseField(!($v_0.get_totalRecordCount() > 0))
};
Mscrm.ServiceRefreshUtilities.enableParentCaseField = function(enable) {
    if (Xrm.Page.context.client
        .getClient() ===
        "Outlook" &&
        Xrm.Page.context.client.getClientState() === "Offline") enable = false;
    var $v_0 = Xrm.Page.ui.controls.get("parentcaseid");
    $v_0 && $v_0.setVisible(enable)
};
Mscrm.ServiceRefreshUtilities.filterLookupChange = function(sender, args) {
    var $v_0 = args, $v_1 = $v_0.get_result().items;
    Mscrm.ServiceRefreshUtilities.$P($v_1)
};
Mscrm.ServiceRefreshUtilities.$X = function($p0) {
    if (Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari()) {
        var $v_0 = $get($p0.get_flyOutDialog().get_id()), $v_1 = $P_CRM($get("activitiesWallElementContainer", $v_0));
        !IsNull($v_1) && $v_1.addClass("ipad-safari-acwall")
    }
};
Mscrm.ServiceRefreshUtilities.setFlyOutOptions = function(linkControlObj) {
    var $v_0 = $get("mainContainer"), $v_1 = $get("formHeaderContainer");
    if (!IsNull($v_1) && !IsNull($v_0)) {
        linkControlObj.get_flyOutDialog().set_dialogLeft($v_0.offsetWidth / 2 -
            linkControlObj.get_flyOutDialog().get_options().get_width() / 2 +
            $v_0.offsetLeft);
        linkControlObj.get_flyOutDialog().set_dialogTop($v_1.offsetHeight + $v_0.offsetTop + 26);
        if (Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled()) {
            linkControlObj.get_flyOutDialog().set_dialogTop($v_0.offsetTop);
            Mscrm.ServiceRefreshUtilities.$X(linkControlObj)
        }
        linkControlObj.get_flyOutDialog().set_position("custom")
    }
    !Mscrm.ServiceRefreshUtilities.$0 && Mscrm.ServiceRefreshUtilities.initializeCaseResearchControl(linkControlObj);
    if (!linkControlObj.get_wasFlyOutOpened() && !IsNull(Mscrm.ServiceRefreshUtilities.$0.get_filterLookup())) {
        var $v_2 = Mscrm.ServiceRefreshUtilities.$0.get_filterLookup().Items(false, true, false, false, false);
        Mscrm.ServiceRefreshUtilities.$P($v_2)
    } else {
        Mscrm.ServiceRefreshUtilities.$0.initializeCaseGrid();
        Mscrm.ServiceRefreshUtilities.$I(Mscrm.ServiceRefreshUtilities.$5)
    }
};
Mscrm.ServiceRefreshUtilities.$U = function() {
    if (Mscrm.Utilities.isTurboForm()) {
        var $v_0 = Xrm.Page.getAttribute("subjectid");
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.ServiceRefreshUtilities.$N;
            $v_0.addOnChange($v_1);
            Mscrm.ServiceRefreshUtilities.$N(null)
        }
    }
};
Mscrm.ServiceRefreshUtilities.$N = function($p0) {
    var $v_0 = Xrm.Page.getAttribute("subjectid").getValue();
    if (!IsNull($v_0)) Mscrm.ServiceRefreshUtilities.$5 = $v_0[0].id;
    else Mscrm.ServiceRefreshUtilities.$5 = ""
};
Mscrm.ServiceRefreshUtilities.save = function(linkControlObj) {
    Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_0 = Mscrm.InlineEditDataService.get_dataService()
        .validate(Mscrm.InlineEditDataService.get_formEntity(), 1, false);
    if ($v_0.get_code() !== 5) linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(false);
    else {
        linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(true);
        Mscrm.ReadFormUtilities.execute(1)
    }
};
Mscrm.ServiceRefreshUtilities
    .initializeQuickContactFlyOut = function(linkControlObj) {
        linkControlObj.get_flyOutDialog().get_options().set_dialogClass("QuickContactCss")
    };
Mscrm.ServiceRefreshUtilities.initializeQuickCaseFlyOut = function(linkControlObj) {
    linkControlObj.get_flyOutDialog().get_options().set_dialogClass("QuickCaseCss")
};
Mscrm.ServiceRefreshUtilities.openCaseResearchFlyOut = function() {
    if (!Mscrm.Utilities.isTurboForm() && !IsNull(Mscrm.ServiceRefreshUtilities.$J)) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(Mscrm.ServiceRefreshUtilities.$J);
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Html.CreateDomEvent("click"), $v_2 = new Sys.UI.DomEvent($v_1);
            $v_0.openFlyOut($v_2)
        }
    }
};
Mscrm.ServiceRefreshUtilities.triggerSearchOnSubjectLookupChange = function(item, subjectLookupElementId) {
    if (IsNull(item) || isNullOrEmptyString(subjectLookupElementId)) return false;
    var $v_0 = subjectLookupElementId.indexOf("CaseResearch_LinkControl_subjectlookup");
    if ($v_0 >= 0) {
        Mscrm.ServiceRefreshUtilities.$d(item, subjectLookupElementId, $v_0);
        Mscrm.ServiceRefreshUtilities.$I(item.id);
        Mscrm.ServiceRefreshUtilities.$5 = item.id;
        return true
    }
    return false
};
Mscrm.ServiceRefreshUtilities.$d = function($p0, $p1, $p2) {
    var $v_0 = "";
    if ($p0) $v_0 = $p0.name;
    var $v_1 = $p1.substr(0, $p2 + 38),
        $v_2 = String.format("{0}_lookupValue", $v_1),
        $v_3 = $get($v_2),
        $v_4 = String.format("{0}_lookupEditSpan", $v_1),
        $v_5 = $get($v_4);
    XUI.Html.SetText($v_3, $v_0);
    XUI.Html.SetText($v_5, $v_0);
    $v_3.title = $v_0;
    $v_5.title = $v_0;
    if (!isNullOrEmptyString($p1)) {
        var $v_6 = $P_CRM("#" + $p1);
        $v_6.hide()
    }
};
Mscrm.ServiceRefreshUtilities.get_primaryRecordId = function() {
    var $v_0 = Xrm.Page.data.getEntity();
    return $v_0.getId()
};
Mscrm.ServiceRefreshUtilities.$M = function($p0, $p1) {
    var $v_0 = "{90ABA153-635B-44DF-9742-F02FEAFF9A95}", $v_1 = "{55316C77-54AA-4D80-8534-F8B5D9AADFC1}", $v_2 = false;
    if ("CheckConnectionExist" === $p1) {
        $v_2 = Mscrm.ServiceRefreshUtilities.$O($p1, null, 0, $v_1, $v_0);
        $p0.set_isAssociatedStepCompleted(false)
    } else if (IsNull(Mscrm.ServiceRefreshUtilities.$0.get_caseGrid().get_innerGrid())) $v_2 = false;
    else {
        var $v_3 = Mscrm.ServiceRefreshUtilities.$0.get_caseGrid().get_innerGrid().fetchSelectedRecord();
        if (IsNull($v_3) || $v_3.length < 2) return;
        $v_2 = Mscrm.ServiceRefreshUtilities.$O($p1, $v_3[0], $v_3[1], $v_1, $v_0)
    }
    if ($p0.get_isEligibleForMarkComplete() && !$p0.get_isAssociatedStepCompleted()) {
        $p0.set_isAssociatedStepCompleted($v_2);
        var $v_4 = $P_CRM($p0.get_iElement());
        $v_4.trigger("attribute-changed", [$v_4.data()])
    }
};
Mscrm.ServiceRefreshUtilities.$O = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = false,
        $v_1 = Xrm.Page.data.getEntity(),
        $v_2 = Xrm.Page.data.entity.getEntityName(),
        $v_3 = $v_1.getId(),
        $v_4 = Xrm.Internal.getEntityCode($v_2);
    if (isNullOrEmptyString($v_3)) return false;
    var $v_5 = new RemoteCommand("Connection", $p0);
    $v_5.SetParameter("record1Id", $v_3);
    $v_5.SetParameter("record1ObjectTypeCode", $v_4);
    $v_5.SetParameter("connectionRoleId", $p3);
    $v_5.SetParameter("record2Id", $p1);
    $v_5.SetParameter("record2ObjectTypeCode", $p2);
    $v_5.SetParameter("associatedConnectionRoleId", $p4);
    var $v_6 = $v_5.Execute();
    if (!$v_6.Success) {
        Mscrm.ErrorStatusControl.showError(window.LOCID_GENERIC_MESSAGE);
        $v_0 = false
    } else if ("CheckConnectionExist" === $p0) $v_0 = $v_6.ReturnValue;
    else $v_0 = true;
    "CheckConnectionExist" !== $p0 && window.self.auto(3234);
    return $v_0
};
Mscrm.ServiceRefreshUtilities.$P = function($p0) {
    if ($p0 && $p0.length > 0) Mscrm.ServiceRefreshUtilities.$I($p0[0].id);
    else Mscrm.ServiceRefreshUtilities.$I(null)
};
Mscrm.ServiceRefreshUtilities.$I = function($p0) {
    if (IsNull(Mscrm.ServiceRefreshUtilities.$0.get_caseGrid())) return;
    if (!isNullOrEmptyString($p0)) {
        var $v_0 = XUI.Xml.CreateDocument(),
            $v_1 = $v_0.createElement("filter"),
            $v_2 = $v_0.createElement("condition"),
            $v_3 = $v_0.createAttribute("attribute");
        $v_3.value = "subjectid";
        $v_2.attributes.setNamedItem($v_3);
        var $v_4 = $v_0.createAttribute("operator");
        $v_4.value = "eq";
        $v_2.attributes.setNamedItem($v_4);
        var $v_5 = $v_0.createAttribute("value");
        $v_5.value = $p0;
        $v_2.attributes.setNamedItem($v_5);
        $v_1.appendChild($v_2);
        Mscrm.ServiceRefreshUtilities.$0.get_caseGrid()
            .SetParameter("dynamicfilter", XUI.Xml.XMLSerializer.serializeToString($v_1));
        Mscrm.ServiceRefreshUtilities.$5 = $p0
    } else Mscrm.ServiceRefreshUtilities.$0.get_caseGrid().SetParameter("dynamicfilter", "");
    Mscrm.ServiceRefreshUtilities.$0.get_caseGrid().RefreshGridAndClearPaging()
};
Mscrm.CaseResearchConstants = function() {};
Mscrm.SlaResolveConstants = function() {};
Mscrm.CaseResolveConstants = function() {};
Mscrm.CustomerPaneConstants = function() {};
Mscrm.IdentifyIssueLookupConstants = function() {};
Mscrm.CreateChildCaseConstants = function() {};
Mscrm.RelatedCasesLookupControl = function() {};
Mscrm.RelatedCasesLookupControl.initializeRelatedCasesLookupHandler = function(lookupItems) {
    Mscrm.RelatedCasesLookupControl.$6 = function($p1_0, $p1_1) { Mscrm.RelatedCasesLookupControl.$Z($p1_1) };
    Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(Mscrm.RelatedCasesLookupControl.$6);
    var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior($get("header_process_relatedcases_i"));
    Mscrm.RelatedCasesLookupControl.$C = Mscrm.RelatedCasesLookupControl.refreshCaseForm;
    Mscrm.RelatedCasesLookupControl.$K = Mscrm.RelatedCasesLookupControl.onQuickGlobalCreateSuccess;
    if (!IsNull($v_0)) {
        $v_0.add_afterSelect(Mscrm.RelatedCasesLookupControl.$C);
        $v_0.add_globalQuickCreateSuccess(Mscrm.RelatedCasesLookupControl.$K);
        Mscrm.RelatedCasesLookupControl.$R(lookupItems)
    }
    $addHandler(window, "unload", Mscrm.RelatedCasesLookupControl.$F)
};
Mscrm.RelatedCasesLookupControl.$F = function($p0) {
    $removeHandler(window, "unload", Mscrm.RelatedCasesLookupControl.$F);
    Mscrm.RelatedCasesLookupControl.$L()
};
Mscrm.RelatedCasesLookupControl.$L = function() {
    try {
        if (!IsNull(Mscrm.RelatedCasesLookupControl.$6)) {
            !Mscrm.InlineEditDataService.get_dataService().get_isDisposed() &&
                Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(Mscrm.RelatedCasesLookupControl.$6);
            Mscrm.RelatedCasesLookupControl.$6 = null
        }
        var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior($get("header_process_relatedcases_i"));
        !IsNull($v_0) &&
            !IsNull(Mscrm.RelatedCasesLookupControl.$C) &&
            $v_0.remove_afterSelect(Mscrm.RelatedCasesLookupControl.$C)
    } catch ($$e_1) {
    }
};
Mscrm.RelatedCasesLookupControl.refreshCaseForm = function(sender, args) {
    var $v_0 = $find("PrimaryEntity");
    if (!IsNull($v_0) && $v_0.get_isNew() && $v_0.get_pendingAssociations().length > 0)
        if (confirm(CASE_RESEARCH_PENDING_ASSOCIATION)) Mscrm.RelatedCasesLookupControl.$Q(sender, args);
        else {
            var $v_1 = Mscrm.FormControlInputBehavior.GetElementBehavior($get("header_process_relatedcases_i"));
            if (!IsNull($v_1)) {
                $v_1.Clear(false);
                $v_1.get_view().get_editView().confirm()
            }
        }
    else Mscrm.RelatedCasesLookupControl.$Q(sender, args)
};
Mscrm.RelatedCasesLookupControl.onQuickGlobalCreateSuccess = function(sender, args) {
    if (!Xrm.Internal.isTurboForm()) {
        var $v_0 = Xrm.Page.ui.controls.get("header_process_relatedcases");
        $v_0.setParameter("queryapi", "")
    }
};
Mscrm.RelatedCasesLookupControl.$a = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = $find("__Page_crmEventManager");
        if ($v_0) {
            var $v_1 = Mscrm.InlineEditUtilities.getEntityReference($p0), $v_2 = {};
            $v_2["entityID"] = $v_1.Id;
            $v_2["entityReference"] = $v_1;
            $v_0.raiseEvent(77, $v_2, null)
        }
    }
};
Mscrm.RelatedCasesLookupControl.$W = function($p0) { return true };
Mscrm.RelatedCasesLookupControl.$Z = function($p0) {
    if ($p0.get_command() === 1 || $p0.get_command() === 208) {
        if ($p0.get_command() === 208) Mscrm.RelatedCasesLookupControl.$a($p0.get_jsonData());
        else {
            var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior($get("header_process_relatedcases_i"));
            $v_0.get_view().get_editView().discard(false)
        }
        Mscrm.RelatedCasesLookupControl.$e($p0.get_jsonData());
        Mscrm.RelatedCasesLookupControl.$T($p0.get_jsonData())
    }
};
Mscrm.RelatedCasesLookupControl.$T = function($p0) {
    if (IsNull($p0)) return;
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
    if (IsNull($v_0) || isNullOrEmptyString($v_0.Id)) return;
    else {
        var $v_1 = {};
        $v_1["oid"] = $v_0.Id;
        $v_1["otype"] = $v_0.TypeName;
        $v_1["otypename"] = $v_0.Name;
        $v_1["value"] = $v_0.Id;
        $p0["existingcase"] = $v_1
    }
};
Mscrm.RelatedCasesLookupControl.$e = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = Mscrm.RelatedCasesLookupControl.$V($p0);
        Mscrm.RelatedCasesLookupControl.$R($v_0)
    }
};
Mscrm.RelatedCasesLookupControl.$R = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = $find("PrimaryEntity"), $v_1 = $v_0.get_attributes().get("existingcase");
        $v_1.set_value($p0);
        $v_1.fireOnChange()
    }
};
Mscrm.RelatedCasesLookupControl.$V = function($p0) {
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
    if (IsNull($v_0) || isNullOrEmptyString($v_0.Id)) return null;
    else {
        var $v_1 = [], $v_2 = {};
        $v_2["id"] = $v_0.Id;
        $v_2["entityType"] = $v_0.TypeName;
        $v_2["name"] = $v_0.Name;
        $v_1[0] = $v_2;
        return $v_1
    }
};
Mscrm.RelatedCasesLookupControl.$Q = function($p0, $p1) {
    var $v_0 = $p1, $v_1 = $v_0.get_result().items;
    if (!IsNull($v_1) && $v_1.length > 0) {
        var $v_2 = $v_1[0], $v_3 = Mscrm.InlineEditDataService.get_formId();
        if (!IsNull($v_2) && !isNullOrEmptyString($v_2.typename)) {
            var $v_4 = Xrm.Page.data.entity.getId();
            $v_4 !== $v_2.id &&
                Mscrm.InlineEditDataService
                .inlineFormRefresh($v_2.typename, $v_2.id, $v_3, null, Mscrm.RelatedCasesLookupControl.$W)
        }
    }
};
Mscrm.CaseResearchControls.registerClass("Mscrm.CaseResearchControls");
Mscrm.CaseResolveContainer.registerClass("Mscrm.CaseResolveContainer");
Mscrm.CaseResolveUtilities.registerClass("Mscrm.CaseResolveUtilities");
Mscrm.ServiceRefreshUtilities.registerClass("Mscrm.ServiceRefreshUtilities");
Mscrm.CaseResearchConstants.registerClass("Mscrm.CaseResearchConstants");
Mscrm.SlaResolveConstants.registerClass("Mscrm.SlaResolveConstants");
Mscrm.CaseResolveConstants.registerClass("Mscrm.CaseResolveConstants");
Mscrm.CustomerPaneConstants.registerClass("Mscrm.CustomerPaneConstants");
Mscrm.IdentifyIssueLookupConstants.registerClass("Mscrm.IdentifyIssueLookupConstants");
Mscrm.CreateChildCaseConstants.registerClass("Mscrm.CreateChildCaseConstants");
Mscrm.RelatedCasesLookupControl.registerClass("Mscrm.RelatedCasesLookupControl");
Mscrm.CaseResolveUtilities.$3 = null;
Mscrm.ServiceRefreshUtilities.$J = null;
Mscrm.ServiceRefreshUtilities.$0 = null;
Mscrm.ServiceRefreshUtilities.$H = null;
Mscrm.ServiceRefreshUtilities.$5 = "";
Mscrm.CaseResearchConstants.relatedSolutionViewId = "{23FB1036-E41D-4D75-8AA7-27569B5B6512}";
Mscrm.CaseResearchConstants.relationshipName = "incident_connections1";
Mscrm.CaseResearchConstants.relatedSolutionsConnectionRoleId = "{90ABA153-635B-44DF-9742-F02FEAFF9A95}";
Mscrm.CaseResearchConstants.researchedCaseConnectionRoleId = "{55316C77-54AA-4D80-8534-F8B5D9AADFC1}";
Mscrm.CaseResearchConstants.casesGrid = "resolvedcasesgrid";
Mscrm.CaseResearchConstants.filterId = "_subjectlookup_i";
Mscrm.CaseResearchConstants.gridClass = "caseBrowseGrid";
Mscrm.CaseResearchConstants.filterClass = "caseBrowseFilter";
Mscrm.CaseResearchConstants.wallTitleClass = "selectedRowTitle";
Mscrm.CaseResearchConstants.checkConnectionExist = "CheckConnectionExist";
Mscrm.CaseResearchConstants.createConnection = "CreateConnection";
Mscrm.CaseResearchConstants.activitiesWallId = "header_process_CaseResearch_LinkControl_casesconversations";
Mscrm.CaseResearchConstants.activitiesWallIdWithoutProcessControl = "CaseResearch_LinkControl_casesconversations";
Mscrm.CaseResearchConstants.gridContextualActionDeleteRecord = 1;
Mscrm.SlaResolveConstants.applicableForm = "applicablefrompicklist";
Mscrm.SlaResolveConstants.xPathOptions = "defaultdata/options/option";
Mscrm.CaseResolveConstants.caseResolutionQuickFormId = "8e43003b-f2b6-490e-8f44-da81cf084bd1";
Mscrm.CaseResolveConstants.incidentId = "incidentid";
Mscrm.CaseResolveConstants.statusCode = "statuscode";
Mscrm.CaseResolveConstants.subject = "subject";
Mscrm.CaseResolveConstants.xPathOptions = "defaultdata/options/option";
Mscrm.CustomerPaneConstants.accountCardCasesGridId = "accountcquickform_accountcasessgrid";
Mscrm.CustomerPaneConstants.accountCardActivitiesGridId = "accountcquickform_accountactivitiesgrid";
Mscrm.CustomerPaneConstants.contactCardCasesGridId = "contactcquickform_contactcasessgrid";
Mscrm.CustomerPaneConstants.contactCardActivitiesGridId = "contactcquickform_contactactivitiesgrid";
Mscrm.IdentifyIssueLookupConstants.eventManagerId = "__Page_crmEventManager";
Mscrm.IdentifyIssueLookupConstants.processControlRelatedCasesLookup = "header_process_relatedcases_i";
Mscrm.IdentifyIssueLookupConstants.processControlRelatedCasesControl = "header_process_relatedcases";
Mscrm.IdentifyIssueLookupConstants.incidentEntityLogicalName = "incident";
Mscrm.IdentifyIssueLookupConstants.processControlDataKey = "_processControlDataKey";
Mscrm.IdentifyIssueLookupConstants.validLookupItemDisplayClass = "ms-crm-Lookup-Item";
Mscrm.IdentifyIssueLookupConstants.relatedCaseAttributeName = "existingcase";
Mscrm.CreateChildCaseConstants.createChildCaseQuickFormUniqueId = "ab5129b2-fe0d-4ed7-8bc1-dcb8879a7fd9";
Mscrm.CreateChildCaseConstants.customerId = "customerid";
Mscrm.CreateChildCaseConstants.parentCaseId = "parentcaseid";
Mscrm.CreateChildCaseConstants.childCasesGrid = "ChildCasesGrid";
Mscrm.RelatedCasesLookupControl.$6 = null;
Mscrm.RelatedCasesLookupControl.$C = null;
Mscrm.RelatedCasesLookupControl.$K = null