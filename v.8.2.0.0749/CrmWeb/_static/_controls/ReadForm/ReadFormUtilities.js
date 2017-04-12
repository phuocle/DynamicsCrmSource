Type.registerNamespace("Mscrm");
Mscrm.IClientApiInitializers = function() {};
Mscrm.IClientApiInitializers.registerInterface("Mscrm.IClientApiInitializers");
Mscrm.ICommandBarHandler = function() {};
Mscrm.ICommandBarHandler.registerInterface("Mscrm.ICommandBarHandler");
Mscrm.IEntityCommand = function() {};
Mscrm.IEntityCommand.registerInterface("Mscrm.IEntityCommand");
Mscrm.IIncidentCommandBarHandler = function() {};
Mscrm.IIncidentCommandBarHandler.registerInterface("Mscrm.IIncidentCommandBarHandler");
Mscrm.ILeadCommandBarHandler = function() {};
Mscrm.ILeadCommandBarHandler.registerInterface("Mscrm.ILeadCommandBarHandler");
Mscrm.IOpportunityCommandBarHandler = function() {};
Mscrm.IOpportunityCommandBarHandler.registerInterface("Mscrm.IOpportunityCommandBarHandler");
Mscrm.IPageHandler = function() {};
Mscrm.IPageHandler.registerInterface("Mscrm.IPageHandler");
Mscrm.IRefreshPageHeader = function() {};
Mscrm.IRefreshPageHeader.registerInterface("Mscrm.IRefreshPageHeader");
Mscrm.LeadCommandBarAction = function() {};
Mscrm.LeadCommandBarAction.prototype = { none: 0, qualify: 1, disqualify: 2 };
Mscrm.LeadCommandBarAction.registerEnum("Mscrm.LeadCommandBarAction", false);
Mscrm.AccountPageHandler = function() { Mscrm.AccountPageHandler.initializeBase(this) };
Mscrm.AccountPageHandler.prototype = {
    $D_4: false,
    $I_4: null,
    $B_4: null,
    $14_4: function() {
        if (this.$D_4) return;
        this.$D_4 = true;
        isNullOrEmptyString(this.$B_4) && this.retrieveFlyoutLayout();
        Mscrm.RefreshPageHandler.prototype.initializeDeleteRecordFlyout.call(this);
        this.$1N_4()
    },
    processFlyoutLayout: function() {
        this.$B_4 = Mscrm.JsonUtilities.getJsonString(this._flyoutLayoutRequest.responseText);
        var $v_0 = null, $$t_6, $$t_7;
        $$t_7 = Mscrm.JsonUtilities.tryGetParsedJson(this.$B_4, $$t_6 = { val: $v_0 }), $v_0 = $$t_6.val, $$t_7;
        for (var $v_1 = $v_0, $$arr_2 = $v_1, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            if ($v_2.ActionName === "Delete") this.$I_4 = $v_2
        }
    },
    deleteRecord: function() {
        if (this.isRefreshForm())
            if (window.UseTabletExperience) {
                this.$14_4();
                if (this._deleteFlyoutVisible) {
                    this._deleteFlyout.hide();
                    this._deleteFlyoutVisible = false
                } else {
                    this._deleteFlyout.show($P_CRM("#deleteButton"));
                    this._deleteFlyoutVisible = true
                }
            } else Mscrm.RefreshPageHandler.prototype.deleteRecord.call(this)
    },
    $1N_4: function() {
        var $v_0 = this.$I_4.DivLayout;
        Mscrm.RefreshPageHandler.prototype.setDeleteFlyoutDialog.call(this, $v_0)
    }
};
Mscrm.CampaignResponsePageHandler = function() {};
Mscrm.CampaignResponsePageHandler.convert = function(doConvert,
    createNewLead,
    customer,
    quote,
    order,
    opportunity,
    account,
    contact,
    currency) {
    var $v_0 = function($p1_0) {
        return Mscrm.CampaignResponsePageHandler.$1s(doConvert,
            createNewLead,
            customer,
            quote,
            order,
            opportunity,
            account,
            contact,
            currency,
            $p1_0)
    };
    Mscrm.CampaignResponsePageHandler.$18(54,
        $v_0,
        Mscrm.CampaignResponsePageHandler.$15,
        Mscrm.CampaignResponsePageHandler.$r)
};
Mscrm.CampaignResponsePageHandler
    .convertAndQualifyLead = function(leadId,
        createAccount,
        createContact,
        createOpportunity,
        campaignId,
        campaignType,
        opportunityParentId,
        opportunityParentType,
        suppressDuplicateDetection,
        showNew) {
        var $v_0 = function($p1_0) {
                return Mscrm.CampaignResponsePageHandler
                    .$2p(leadId,
                        createAccount,
                        createContact,
                        createOpportunity,
                        campaignId,
                        campaignType,
                        opportunityParentId,
                        opportunityParentType,
                        suppressDuplicateDetection,
                        $p1_0)
            },
            $v_1 = Mscrm.CampaignResponsePageHandler.$4p;
        if (showNew) $v_1 = Mscrm.CampaignResponsePageHandler.$4J;
        Mscrm.CampaignResponsePageHandler.$18(221, $v_0, $v_1, Mscrm.CampaignResponsePageHandler.$r)
    };
Mscrm.CampaignResponsePageHandler.close = function(state) {
    var $v_0 = function($p1_0) { return Mscrm.CampaignResponsePageHandler.$2n(state, $p1_0) };
    Mscrm.CampaignResponsePageHandler.$18(223,
        $v_0,
        Mscrm.CampaignResponsePageHandler.$15,
        Mscrm.CampaignResponsePageHandler.$r)
};
Mscrm.CampaignResponsePageHandler.closeAndDisqualifyLead = function(leadId, leadStatus) {
    var $v_0 = function($p1_0) { return Mscrm.CampaignResponsePageHandler.$2m(leadId, leadStatus, $p1_0) };
    Mscrm.CampaignResponsePageHandler.$18(222,
        $v_0,
        Mscrm.CampaignResponsePageHandler.$15,
        Mscrm.CampaignResponsePageHandler.$r)
};
Mscrm.CampaignResponsePageHandler.copy = function() {
    var $v_0 = function($p1_0) { return Mscrm.CampaignResponsePageHandler.$2q($p1_0) };
    Mscrm.CampaignResponsePageHandler.$18(224,
        $v_0,
        Mscrm.CampaignResponsePageHandler.$15,
        Mscrm.CampaignResponsePageHandler.$r)
};
Mscrm.CampaignResponsePageHandler.$1s = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
    var $v_0 = String
        .format("<Input><id>{0}</id><name>{1}</name><convert>{2}</convert><createnewlead>{3}</createnewlead><customer>{4}</customer><quote>{5}</quote><order>{6}</order><opportunity>{7}</opportunity><account>{8}</account><contact>{9}</contact><currency>{10}</currency><dataxml>{11}</dataxml></Input>", CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_recordId()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_typeName()), CrmEncodeDecode.CrmXmlEncode($p0.toString()), CrmEncodeDecode.CrmXmlEncode($p1.toString()), CrmEncodeDecode.CrmXmlEncode($p2.toString()), CrmEncodeDecode.CrmXmlEncode($p3.toString()), CrmEncodeDecode.CrmXmlEncode($p4.toString()), CrmEncodeDecode.CrmXmlEncode($p5.toString()), CrmEncodeDecode.CrmXmlEncode($p6), CrmEncodeDecode.CrmXmlEncode($p7), CrmEncodeDecode.CrmXmlEncode($p8), CrmEncodeDecode.CrmXmlEncode($p9));
    return $v_0
};
Mscrm.CampaignResponsePageHandler.$2p = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
    var $v_0 = String
        .format("<Input><id>{0}</id><name>{1}</name><leadid>{2}</leadid><createaccount>{3}</createaccount><createcontact>{4}</createcontact><createopportunity>{5}</createopportunity><campaignid>{6}</campaignid><campaigntype>{7}</campaigntype><opportunityparentid>{8}</opportunityparentid><opportunityparenttype>{9}</opportunityparenttype><suppressduplicatedetection>{10}</suppressduplicatedetection><dataxml>{11}</dataxml></Input>", CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_recordId()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_typeName()), CrmEncodeDecode.CrmXmlEncode($p0), CrmEncodeDecode.CrmXmlEncode($p1), CrmEncodeDecode.CrmXmlEncode($p2.toString()), CrmEncodeDecode.CrmXmlEncode($p3.toString()), CrmEncodeDecode.CrmXmlEncode($p4), CrmEncodeDecode.CrmXmlEncode($p5), CrmEncodeDecode.CrmXmlEncode($p6), CrmEncodeDecode.CrmXmlEncode($p7), CrmEncodeDecode.CrmXmlEncode($p8.toString()), CrmEncodeDecode.CrmXmlEncode($p9));
    return $v_0
};
Mscrm.CampaignResponsePageHandler.$2n = function($p0, $p1) {
    var $v_0 = String.format("<Input><id>{0}</id><name>{1}</name><state>{2}</state><dataxml>{3}</dataxml></Input>",
        CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_recordId()),
        CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_typeName()),
        CrmEncodeDecode.CrmXmlEncode($p0.toString()),
        CrmEncodeDecode.CrmXmlEncode($p1));
    return $v_0
};
Mscrm.CampaignResponsePageHandler.$2m = function($p0, $p1, $p2) {
    var $v_0 = String
        .format("<Input><id>{0}</id><name>{1}</name><leadid>{2}</leadid><leadstatus>{3}</leadstatus><dataxml>{4}</dataxml></Input>", CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_recordId()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_typeName()), CrmEncodeDecode.CrmXmlEncode($p0), CrmEncodeDecode.CrmXmlEncode($p1.toString()), CrmEncodeDecode.CrmXmlEncode($p2));
    return $v_0
};
Mscrm.CampaignResponsePageHandler.$2q = function($p0) {
    var $v_0 = String.format("<Input><id>{0}</id><name>{1}</name><dataxml>{2}</dataxml></Input>",
        CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_recordId()),
        CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_typeName()),
        CrmEncodeDecode.CrmXmlEncode($p0));
    return $v_0
};
Mscrm.CampaignResponsePageHandler.$5K = function($p0) { return false };
Mscrm.CampaignResponsePageHandler.$18 = function($p0, $p1, $p2, $p3) {
    Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_0 = "", $$t_6, $$t_7;
    if ($$t_7 = Mscrm.InlineEditDataService.isValidFormData(Mscrm.CampaignResponsePageHandler.$5K,
        $p0,
        $$t_6 = { val: $v_0 }), $v_0 = $$t_6.val, $$t_7) {
        var $v_1 = $p1($v_0);
        Mscrm.CampaignResponsePageHandler.$20($p0, $v_1, $p2, $p3)
    }
};
Mscrm.CampaignResponsePageHandler.$20 = function($p0, $p1, $p2, $p3) {
    Mscrm.InlineEditDataService.get_dataService().set_succeedCallback($p2);
    Mscrm.InlineEditDataService.get_dataService().set_errorCallback($p3);
    Mscrm.InlineEditDataService.execute($p0, $p1)
};
Mscrm.CampaignResponsePageHandler.$15 = function($p0) { return Mscrm.CampaignResponsePageHandler.$48($p0) };
Mscrm.CampaignResponsePageHandler.$48 = function($p0) {
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
    if (IsNull($v_0)) return false;
    var $v_1 = Xrm.Internal.getEntityCode($v_0.TypeName);
    Mscrm.ReadFormUtilities.openInSameFrame($v_1, $v_0.Id);
    Mscrm.InlineEditDataService.refreshGridOnStateChange();
    return true
};
Mscrm.CampaignResponsePageHandler.$4p = function($p0) {
    Mscrm.ReadFormUtilities.forceReload(4401,
        Mscrm.InlineEditDataService.get_formEntity().get_recordId(),
        Mscrm.InlineEditDataService.get_formId());
    return true
};
Mscrm.CampaignResponsePageHandler.$4J = function($p0) {
    for (var $v_0 = $p0["entities"], $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0;
        $$idx_4 < $$len_3;
        ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4], $v_2 = Xrm.Internal.getEntityCode($v_1.Name);
        openObj($v_2, $v_1.Id, null, null, 0, null)
    }
    Mscrm.ReadFormUtilities.forceReload(4401,
        Mscrm.InlineEditDataService.get_formEntity().get_recordId(),
        Mscrm.InlineEditDataService.get_formId());
    return true
};
Mscrm.CampaignResponsePageHandler.$r = function($p0) {
    if (!IsNull($p0["_error"])) {
        var $v_0 = $p0["_error"];
        alert($v_0.Description);
        return true
    }
    return false
};
Mscrm.ClientApiInitializers = function() {};
Mscrm.ClientApiInitializers.prototype = {
    getProcessControlUIWrapper: function($p0) { return new Mscrm.ProcessControlUIWrapper($p0) },
    getProcessControlDataWrapper: function($p0) { return new Mscrm.ProcessControlDataWrapper($p0) }
};
Mscrm.CommonActivityPageHandler = function() {};
Mscrm.CommonActivityPageHandler.executeCommand = function(commandNumber, openNewRecord) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0)) {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        var $v_1 = "", $$t_5, $$t_6;
        if (!($$t_6 = Mscrm.InlineEditDataService
            .isValidFormData(null, commandNumber, $$t_5 = { val: $v_1 }), $v_1 = $$t_5.val, $$t_6)) return;
        Mscrm.InlineEditDataService.get_dataService()
            .set_succeedCallback(function($p1_0) { return Mscrm.CommonActivityPageHandler.$2u($p1_0, openNewRecord) });
        Mscrm.InlineEditDataService.get_dataService().set_errorCallback(Mscrm.CommonActivityPageHandler.$2c);
        Mscrm.InlineEditDataService.execute(commandNumber, Mscrm.CommonActivityPageHandler.$2o($v_0, $v_1))
    }
};
Mscrm.CommonActivityPageHandler.$2u = function($p0, $p1) {
    if (!$p1) return Mscrm.CommonActivityPageHandler.$2M($p0);
    else return true
};
Mscrm.CommonActivityPageHandler.$2M = function($p0) {
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0),
        $v_1 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[Mscrm.InlineEditDataService.get_formEntity().get_typeName()];
    if (IsNull($v_0)) return false;
    Mscrm.ReadFormUtilities.forceReload($v_1, $v_0.Id, Mscrm.InlineEditDataService.get_formId());
    return true
};
Mscrm.CommonActivityPageHandler.$2c = function($p0) {
    if (!IsNull($p0["_error"])) {
        var $v_0 = $p0["_error"];
        alert($v_0.DisplayText);
        return true
    }
    return false
};
Mscrm.CommonActivityPageHandler.$2o = function($p0, $p1) {
    var $v_0 = "",
        $v_1 = Mscrm.InlineEditDataService.get_formId(),
        $v_2 = $p0.get_isNew() ? "{00000000-0000-0000-0000-000000000000}" : $p0.get_recordId(),
        $v_3 = "Completed",
        $v_4 = -1;
    $v_0 = String
        .format("<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><dataxml>{3}</dataxml><newStatusCode>{4}</newStatusCode><newStateCode>{5}</newStateCode></Input>", CrmEncodeDecode.CrmXmlEncode($v_2), CrmEncodeDecode.CrmXmlEncode($p0.get_typeName()), CrmEncodeDecode.CrmXmlEncode($v_1), CrmEncodeDecode.CrmXmlEncode($p1), CrmEncodeDecode.CrmXmlEncode($v_4.toString()), CrmEncodeDecode.CrmXmlEncode($v_3.toString()));
    return $v_0
};
Mscrm.ContactPageHandler = function() { Mscrm.ContactPageHandler.initializeBase(this) };
Mscrm.ContactPageHandler.prototype = {
    $D_4: false,
    $I_4: null,
    $B_4: null,
    $14_4: function() {
        if (this.$D_4) return;
        this.$D_4 = true;
        isNullOrEmptyString(this.$B_4) && this.retrieveFlyoutLayout();
        Mscrm.RefreshPageHandler.prototype.initializeDeleteRecordFlyout.call(this);
        this.$1N_4()
    },
    processFlyoutLayout: function() {
        this.$B_4 = Mscrm.JsonUtilities.getJsonString(this._flyoutLayoutRequest.responseText);
        var $v_0 = null, $$t_6, $$t_7;
        $$t_7 = Mscrm.JsonUtilities.tryGetParsedJson(this.$B_4, $$t_6 = { val: $v_0 }), $v_0 = $$t_6.val, $$t_7;
        for (var $v_1 = $v_0, $$arr_2 = $v_1, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            if ($v_2.ActionName === "Delete") this.$I_4 = $v_2
        }
    },
    deleteRecord: function() {
        if (this.isRefreshForm())
            if (window.UseTabletExperience) {
                this.$14_4();
                if (this._deleteFlyoutVisible) {
                    this._deleteFlyout.hide();
                    this._deleteFlyoutVisible = false
                } else {
                    this._deleteFlyout.show($P_CRM("#deleteButton"));
                    this._deleteFlyoutVisible = true
                }
            } else Mscrm.RefreshPageHandler.prototype.deleteRecord.call(this)
    },
    $1N_4: function() {
        var $v_0 = this.$I_4.DivLayout;
        Mscrm.RefreshPageHandler.prototype.setDeleteFlyoutDialog.call(this, $v_0)
    }
};
Mscrm.ContractDetailPageHandler = function() { Mscrm.ContractDetailPageHandler.initializeBase(this) };
Mscrm.ContractDetailPageHandler.prototype = {
    buildCommandXml: function() {
        switch (this.$H_2) {
        case 37:
            return this.$34_3();
        default:
            return this.createCommandWithDefaultParameter()
        }
    },
    $34_3: function() {
        var $v_0 = this.$0_2,
            $v_1 = $v_0,
            $v_2 = "",
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStateString>{3}</newStateString><dataxml>{4}</dataxml></Input>";
        $v_2 = String.format($v_3,
            this.get_primaryEntity().get_recordId(),
            this.get_primaryEntity().get_typeName(),
            Mscrm.InlineEditDataService.get_formId(),
            $v_1,
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_2
    }
};
Mscrm.ContractPageHandler = function() { Mscrm.ContractPageHandler.initializeBase(this) };
Mscrm.ContractPageHandler.prototype = {
    buildCommandXml: function() {
        switch (this.$H_2) {
        case 31:
        case 32:
        case 38:
            return this.$36_3();
        case 34:
            return this.$35_3();
        case 39:
            return this.$33_3();
        case 33:
            return this.$32_3();
        default:
            return this.createCommandWithDefaultParameter()
        }
    },
    $36_3: function() {
        var $v_0 = "",
            $v_1 = this.$0_2["NewStateCode"],
            $v_2 = this.$0_2["NewStatusCode"],
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newState>{3}</newState><newStatusCode>{4}</newStatusCode><dataxml>{5}</dataxml></Input>";
        $v_0 = String.format($v_3,
            this.get_primaryEntity().get_recordId(),
            this.get_primaryEntity().get_typeName(),
            Mscrm.InlineEditDataService.get_formId(),
            $v_1,
            $v_2,
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_0
    },
    $35_3: function() {
        var $v_0 = this.$0_2["rcIncludeCancelledLines"],
            $v_1 = this.$0_2["statusCode"],
            $v_2 = "",
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><rcIncludeCancelledLines>{3}</rcIncludeCancelledLines><newStatusCode>{4}</newStatusCode><dataxml>{5}</dataxml></Input>";
        $v_2 = String.format($v_3,
            this.get_primaryEntity().get_recordId(),
            this.get_primaryEntity().get_typeName(),
            Mscrm.InlineEditDataService.get_formId(),
            $v_0,
            $v_1,
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_2
    },
    $33_3: function() {
        var $v_0 = this.$0_2,
            $v_1 = $v_0,
            $v_2 = "",
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><ccIncludeCancelledLines>{3}</ccIncludeCancelledLines><dataxml>{4}</dataxml></Input>";
        $v_2 = String.format($v_3,
            this.get_primaryEntity().get_recordId(),
            this.get_primaryEntity().get_typeName(),
            Mscrm.InlineEditDataService.get_formId(),
            $v_1,
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_2
    },
    $32_3: function() {
        var $v_0 = this.$0_2["cancellationDate"],
            $v_1 = this.$0_2["statusCode"],
            $v_2 = "",
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><ccCancellationDate>{3}</ccCancellationDate><newStatusCode>{4}</newStatusCode><dataxml>{5}</dataxml></Input>";
        $v_2 = String.format($v_3,
            this.get_primaryEntity().get_recordId(),
            this.get_primaryEntity().get_typeName(),
            Mscrm.InlineEditDataService.get_formId(),
            $v_0,
            $v_1,
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_2
    }
};
Mscrm.EmailCommandHandler = function() {
    this.$$d_$3R_3 = Function.createDelegate(this, this.$3R_3);
    Mscrm.EmailCommandHandler.initializeBase(this)
};
Mscrm.EmailCommandHandler.prototype = {
    get_commandSucceedCallback: function() { return this.$$d_$3R_3 },
    buildCommandXml: function() { return this.$2r_3("sendType" in this.$0_2 ? this.$0_2["sendType"].toString() : "") },
    $3R_3: function($p0) {
        var $v_0 = $p0["_extraParams"];
        if (IsNull($v_0)) return false;
        var $v_1 = IsNull($v_0["sendType"]) ? "" : $v_0["sendType"].toString(),
            $v_2 = IsNull($v_0["sendSucceed"]) ? false : Boolean.parse($v_0["sendSucceed"].toString());
        delete $p0._extraParams;
        var $v_3 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (!IsNull($v_3)) {
            var $v_4 = $v_3.Id;
            Mscrm.RefreshPageHandler.$K = true;
            if ($v_1 === "send")
                if ($v_2) {
                    Xrm.Internal.preventBrowseBack();
                    (new Mscrm.RefreshPageHandler).close()
                } else Xrm.Utility.openEntityForm("email", $v_4, {});
            else Xrm.Utility.openEntityForm("email", $v_4, null);
            Mscrm.InlineEditDataService.refreshGridOnStateChange()
        }
        return true
    },
    $2r_3: function($p0) {
        var $v_0 = "",
            $v_1 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><dataxml>{3}</dataxml><sendType>{4}</sendType></Input>";
        $v_0 = String.format($v_1,
            CrmEncodeDecode.CrmXmlEncode(isNullOrEmptyString(this.get_primaryEntity().get_recordId())
                ? "{00000000-0000-0000-0000-000000000000}"
                : this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2),
            CrmEncodeDecode.CrmXmlEncode($p0));
        return $v_0
    }
};
Mscrm.IncidentPageHandler = function() {
    this.$$d_$2v_4 = Function.createDelegate(this, this.$2v_4);
    this.$$d_$2w_4 = Function.createDelegate(this, this.$2w_4);
    this.$$d_$4V_4 = Function.createDelegate(this, this.$4V_4);
    this.$$d_$4m_4 = Function.createDelegate(this, this.$4m_4);
    this.$$d_$3x_4 = Function.createDelegate(this, this.$3x_4);
    Mscrm.IncidentPageHandler.initializeBase(this);
    Mscrm.InlineEditDataService.get_dataService().add_preValidation(this.$$d_$3x_4);
    Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(this.$$d_$4m_4)
};
Mscrm.IncidentPageHandler.prototype = {
    $1A_4: 0,
    $1p_4: "notescontrolactivityContainer_notescontrol",
    $3x_4: function($p0, $p1) { if (Xrm.Page.ui.getFormType() === 1) Mscrm.IncidentPageHandler.$13 = 1 },
    $4m_4: function($p0, $p1) {
        if (Mscrm.IncidentPageHandler.$13 === 1) {
            Mscrm.IncidentPageHandler.$13 = 0;
            return
        }
        window.setTimeout(this.$$d_refreshQuickView, 10)
    },
    postPageRender: function() {
        Mscrm.RefreshPageHandler.prototype.postPageRender.call(this);
        if (this.isRefreshForm()) {
            isNullOrEmptyString(Mscrm.RefreshPageHandler.getEntityIdFromPage()) &&
                Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(this.$$d_$4V_4);
            this.$54_4()
        }
    },
    postInlineInitialization: function() {
        Mscrm.RefreshPageHandler.prototype.postInlineInitialization.call(this);
        if (this.isRefreshForm()) {
            isNullOrEmptyString(Mscrm.RefreshPageHandler.getEntityIdFromPage()) && this.$4A_4();
            if (Mscrm.Utilities.isProcessForm()) {
                var $v_0 = _activityTypeCode;
                !IsNull(Mscrm.ActivityContainer) &&
                    !IsNull($v_0) &&
                    -1 !== $v_0 &&
                    Mscrm.ActivityContainer.initializeActivityContainer()
            }
        }
    },
    $50_4: function() {
        var $v_0 = this._formData["customerid"];
        if ("otypename" in $v_0)
            if ($v_0["otypename"].toString() === "account") this.$1A_4 = 1;
            else this.$1A_4 = 2
    },
    getQuickFormLoadOrder: function($p0) {
        Mscrm.RefreshPageHandler.prototype.getQuickFormLoadOrder.call(this, $p0);
        if (this.isRefreshForm() && Mscrm.Utilities.isProcessForm())
            if (isNullOrEmptyString(Mscrm.RefreshPageHandler.getEntityIdFromPage())) {
                var $v_0 = _activityTypeCode;
                if (!IsNull($v_0) && 4210 === $v_0) $p0["8e0b7c1e-f5a0-4e7d-b04d-4ca8d5c5ca80"] = 0;
                $p0["bdb0ae1c-32fa-4374-b637-8dafe107bc44"] = 1
            } else if ("customerid" in this._formData) {
                this.$50_4();
                switch (this.$1A_4) {
                case 1:
                    $p0["b028db32-3619-48a5-ac51-cf3f947b0ef3"] = 0;
                    $p0["707fc57b-c5e6-471b-a180-e37ed28a38e2"] = 1;
                    break;
                case 2:
                    $p0["707fc57b-c5e6-471b-a180-e37ed28a38e2"] = 0;
                    $p0["b028db32-3619-48a5-ac51-cf3f947b0ef3"] = 1;
                    break
                }
            }
    },
    navigateToNewEntity: function() {
        var $v_0 = _activityTypeCode, $v_1 = "formid=" + this._formData["_formId"];
        if (!IsNull($v_0) && -1 !== $v_0) $v_1 += "&activitytypecode=" + $v_0;
        $v_1 += "&setlastviewed=" + false;
        $v_1 += "&rof=" + true;
        $v_1 += "&theme=" + window.RefreshFormTheme;
        $v_1 += Mscrm.ReadFormUtilities.$28(112);
        openObj(112, null, $v_1)
    },
    $4V_4: function($p0, $p1) {
        $p1.get_command() === 1 && this.$4l_4($p1.get_jsonData());
        if (!isNullOrEmptyString($p1.get_entityReference()
            .Id))
            !Mscrm.InlineEditDataService.get_dataService().get_isDisposed() &&
                Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(this.$$d_$4V_4)
    },
    $54_4: function() {
        var $v_0 = $get("header_process_relatedcases");
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.getAttribute(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName);
            $v_1 === "existingcase" && $v_0.setAttribute("lookupType", "relatedcaseslookup")
        }
    },
    $4A_4: function() {
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
        if (!IsNull($v_0)) {
            Mscrm.InlineEditInitializerUtility.initializeEditViewsForAttributeIds(["caseorigincode"]);
            var $v_1 = $v_0.get_attributes().get("caseorigincode");
            if (!IsNull($v_1)) {
                var $v_2 = this.$5B_4();
                if ($v_2 !== -1) {
                    $v_1.resetValue($v_2);
                    $v_1.fireOnChange()
                }
            }
        }
    },
    $5B_4: function() {
        var $v_0 = _activityTypeCode;
        if (!IsNull($v_0) && -1 !== $v_0)
            switch ($v_0) {
            case 4210:
                return 1;
            case 4202:
                return 2;
            case 4800:
                return 3;
            default:
                return -1
            }
        return -1
    },
    $4l_4: function($p0) {
        if (!this.isRefreshForm() && !Mscrm.Utilities.isProcessForm()) return;
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0),
            $v_1 = $find("__Page_crmEventManager"),
            $v_2 = $find(this.$1p_4);
        if (!IsNull($v_0) && !isNullOrEmptyString($v_0.Id) && !IsNull($v_1) && !IsNull($v_2)) {
            var $v_3 = {};
            $v_3["entityID"] = $v_0.Id;
            $v_1.raiseEvent(76, $v_3, $v_2)
        }
    },
    launchProcessControlConfiguration: function() { Mscrm.RefreshPageHandler.editSalesProcess() },
    $E_4: null,
    get_commandSucceedCallback: function() { return this.$E_4 },
    set_commandSucceedCallback: function($p0) {
        this.$E_4 = $p0;
        return $p0
    },
    buildCommandXml: function() {
        switch (this.$H_2) {
        case 40:
            return this.$39_4();
        case 203:
            return this.$3A_4();
        case 6:
            this.$E_4 = this.$$d_$2w_4;
            return this.$38_4();
        case 260:
            this.$E_4 = this.$$d_$2v_4;
            return this.$3B_4();
        default:
            return this.createCommandWithDefaultParameter()
        }
    },
    $2w_4: function($p0) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (IsNull($v_0)) return false;
        var $v_1 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[Mscrm.InlineEditDataService.get_formEntity()
            .get_typeName()];
        Mscrm.ReadFormUtilities.forceReload($v_1, $v_0.Id, Mscrm.InlineEditDataService.get_formId());
        Xrm.Internal.refreshParentGrid(112, "", Xrm.Page.data.entity.getId());
        return true
    },
    $39_4: function() {
        var $v_0 = this.$0_2["StatusCode"],
            $v_1 = "",
            $v_2 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStatusCode>{3}</newStatusCode><dataxml>{4}</dataxml></Input>";
        $v_1 = String.format($v_2,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_1
    },
    $3A_4: function() {
        var $v_0 = this.$0_2["StatusCode"],
            $v_1 = this.$0_2["ActivityXml"],
            $v_2 = "",
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStatusCode>{3}</newStatusCode><activityXml>{4}</activityXml><dataxml>{5}</dataxml></Input>";
        $v_2 = String.format($v_3,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            $v_1,
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_2
    },
    $3B_4: function() {
        var $v_0 = this.$0_2["inputCommand"],
            $v_1 = "",
            $v_2 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStatusCode>{3}</newStatusCode><dataxml>{4}</dataxml></Input>";
        $v_1 = String.format($v_2,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_1
    },
    $38_4: function() {
        var $v_0 = "Active",
            $v_1 = this.$0_2["StatusCode"],
            $v_2 = "",
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStateCode>{3}</newStateCode><newStatusCode>{4}</newStatusCode><dataxml>{5}</dataxml></Input>";
        $v_2 = String.format($v_3,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            CrmEncodeDecode.CrmXmlEncode($v_1),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_2
    },
    $2v_4: function($p0) {
        var $v_0 = -1;
        if (!IsNull(this.$0_2)) $v_0 = this.$0_2["inputCommand"];
        var $v_1 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (IsNull($v_1)) return false;
        if ($v_0 === 203) this.$30_4($v_1.Id);
        else this.$2t_4();
        return true
    },
    $30_4: function($p0) {
        var $v_0 = Mscrm.CrmUri.create("/CS/cases/dlg_closecase.aspx");
        $v_0.get_query()["pId"] = $p0;
        $v_0.get_query()["pType"] = 112;
        var $v_1 = new Mscrm.CrmDialog($v_0, window.document, 400, 391, null);
        $v_1.setCallbackInfo("performActionAfterCloseCase", this, null);
        return $v_1.show()
    },
    $2t_4: function() {
        var $v_0 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/CS/cases/dlg_cancel.aspx"), null, 520, 195, null);
        $v_0.setCallbackInfo("performActionAfterCancelCase", this, null);
        return $v_0.show()
    },
    performActionAfterCloseCase: function($p0) {
        if ($p0) {
            var $v_0 = Mscrm.InlineEditDataService.save(5, null, null, true);
            if ($v_0.get_success()) {
                var $v_1 = {};
                $v_1["ActivityXml"] = $p0.ActivityXml;
                $v_1["StatusCode"] = $p0.StatusCode;
                Mscrm.RefreshPageCommandHandler.executeCommand(203, $v_1)
            }
        }
        return true
    },
    performActionAfterCancelCase: function($p0) {
        if ($p0) {
            var $v_0 = {};
            $v_0["StatusCode"] = $p0.StatusCode;
            Mscrm.RefreshPageCommandHandler.executeCommand(40, $v_0)
        }
        return true
    },
    reloadAfterCaseCloseOrCancelForOutlook: function() {
        var $v_0 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[Mscrm.InlineEditDataService.get_formEntity()
            .get_typeName()];
        Mscrm.ReadFormUtilities.forceReload($v_0,
            Mscrm.InlineEditDataService.get_formEntity().get_recordId(),
            Mscrm.InlineEditDataService.get_formId())
    },
    close: function() {
        if (!Mscrm.InlineEditDataService.get_dataService().get_isDisposed()) {
            Mscrm.InlineEditDataService.get_dataService().remove_preValidation(this.$$d_$3x_4);
            Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(this.$$d_$4m_4)
        }
        Mscrm.IncidentPageHandler.$13 = 0;
        Mscrm.RefreshPageHandler.prototype.close.call(this)
    }
};
Mscrm.InvoicePageHandler = function() {
    this.$$d_$2K_3 = Function.createDelegate(this, this.$2K_3);
    Mscrm.InvoicePageHandler.initializeBase(this)
};
Mscrm.InvoicePageHandler.prototype = {
    buildCommandXml: function() {
        switch (this.$H_2) {
        case 44:
            return this.$1a_3();
        case 57:
        case 27:
            return this.$3C_3();
        case 66:
            this.set_commandSucceedCallback(this.$$d_$2K_3);
            return this.createCommandWithDefaultParameter();
        default:
            return this.createCommandWithDefaultParameter()
        }
    },
    $1a_3: function() {
        var $v_0 = this.$0_2["OpportunityID"],
            $v_1 = "",
            $v_2 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><gpOpportunityId>{3}</gpOpportunityId><dataxml>{4}</dataxml></Input>";
        $v_1 = String.format($v_2,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_1
    },
    $3C_3: function() {
        var $v_0 = this.$0_2,
            $v_1 = "",
            $v_2 = $v_0,
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStatusCode>{3}</newStatusCode><commandType>{4}</commandType><dataxml>{5}</dataxml></Input>";
        $v_1 = String.format($v_3,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_2),
            CrmEncodeDecode.CrmXmlEncode(this.$H_2.toString()),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_1
    },
    $2K_3: function($p0) { return false }
};
Mscrm.LeadPageHandler = function() {
    this.$$d_$23_4 = Function.createDelegate(this, this.$23_4);
    this.$$d_$2s_4 = Function.createDelegate(this, this.$2s_4);
    this.$$d_$4h_4 = Function.createDelegate(this, this.$4h_4);
    this.$$d_$4D_4 = Function.createDelegate(this, this.$4D_4);
    this.$$d_$3P_4 = Function.createDelegate(this, this.$3P_4);
    Mscrm.LeadPageHandler.initializeBase(this)
};
Mscrm.LeadPageHandler.$1M = function($p0) {
    var $v_0 = $P_CRM(".ui-selected"), $v_1;
    if ($p0.which === 40 || $p0.which === 9 && !$p0.shiftKey) {
        $v_1 = $v_0.next();
        if (!$v_1.length) $v_1 = $P_CRM("#selectedstateconvertlead").children(":first-child")
    } else {
        $v_1 = $v_0.prev();
        if (!$v_1.length) $v_1 = $P_CRM("#selectedstateconvertlead").children(":last-child")
    }
    $v_1.hasClass("li-flyoutlistitem") && Mscrm.LeadPageHandler.$1O($v_1, $v_0)
};
Mscrm.LeadPageHandler.$2C = function($p0) {
    var $v_0 = $P_CRM($p0.target);
    if (!$v_0.hasClass("li-flyoutlistitem")) return;
    var $v_1 = $P_CRM(".ui-selected");
    Mscrm.LeadPageHandler.$1O($v_0, $v_1)
};
Mscrm.LeadPageHandler.$1O = function($p0, $p1) {
    $p1.addClass("ui-selectee");
    $p1.removeClass("ui-selected");
    $p0.removeClass("ui-selectee");
    $p0.addClass("ui-selected");
    $p0.focus()
};
Mscrm.LeadPageHandler.$2E = function($p0, $p1, $p2, $p3, $p4) {
    Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0) && !$v_0.get_isNew()) {
        Mscrm.InlineEditDataService.setCallback($p3, $p4);
        Mscrm.LeadPageHandler.$42($p0, $p1, $p4, $p2);
        Mscrm.InlineEditDataService.refreshGrid()
    }
};
Mscrm.LeadPageHandler.$42 = function($p0, $p1, $p2, $p3) {
    Mscrm.MetricsReporting.instance().addMetric("Lead Qualify", "RO Form");
    var $v_0 = Mscrm.Utilities.createGuid(),
        $v_1 = "",
        $v_2 = Mscrm.Utilities.createGuid(),
        $v_3 = Mscrm.Utilities.createGuid(),
        $v_4 = "",
        $v_5 = false,
        $v_6 = true,
        $v_7 = true,
        $v_8 = true,
        $v_9 = -1,
        $v_A = false,
        $v_B = false,
        $v_C = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_C.get_attributes().get("transactioncurrencyid")) &&
        !IsNull($v_C.get_attributes().get("transactioncurrencyid")
            .get_value())) $v_1 = $v_C.get_attributes().get("transactioncurrencyid").get_value()[0].id;
    if (isNullOrEmptyString($v_1)) $v_1 = $p1;
    if (!IsNull($v_C.get_attributes().get("parentaccountid")) &&
        !IsNull($v_C.get_attributes().get("parentaccountid").get_value())) {
        $v_2 = $v_C.get_attributes().get("parentaccountid").get_value()[0].id;
        if (!isNullOrEmptyString($v_2)) $v_B = true
    }
    if (!IsNull($v_C.get_attributes().get("parentcontactid")) &&
        !IsNull($v_C.get_attributes().get("parentcontactid").get_value())) {
        $v_3 = $v_C.get_attributes().get("parentcontactid").get_value()[0].id;
        if (!isNullOrEmptyString($v_3)) $v_A = true
    }
    if (!IsNull($v_C.get_attributes().get("companyname"))) $v_4 = $v_C.get_attributes().get("companyname").get_value();
    if (!isNullOrEmptyString($v_4)) $v_5 = true;
    if ($v_B && $v_A) {
        $v_5 = false;
        $v_6 = false;
        $v_0 = $v_2;
        $v_9 = 1;
        $p3 = true
    } else if ($v_B) {
        $v_5 = false;
        $v_6 = true;
        $v_0 = $v_2;
        $v_9 = 1
    } else if ($v_A)
        if (!isNullOrEmptyString($v_4)) {
            $v_5 = true;
            $v_6 = false;
            $v_0 = $v_2;
            $v_9 = 1
        } else {
            $v_5 = false;
            $v_6 = false;
            $v_0 = $v_3;
            $v_9 = 2
        }
    var $v_D = "", $$t_J, $$t_K;
    if (!($$t_K = Mscrm.InlineEditDataService.isValidFormData($p2, 15, $$t_J = { val: $v_D }), $v_D = $$t_J
        .val, $$t_K)) return;
    var $v_E = String
        .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlOpportunityParentId>{3}</qlOpportunityParentId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlOpportunityParentType>{4}</qlOpportunityParentType>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlOppCurrencyId>{5}</qlOppCurrencyId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlCreateOpportunity>{6}</qlCreateOpportunity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlCreateContact>{7}</qlCreateContact>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlCreateAccount>{8}</qlCreateAccount>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlSuppressDuplicateDetection>{9}</qlSuppressDuplicateDetection>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<qlShowNew>{10}</qlShowNew>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<newStateCode>1</newStateCode>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<newStatusCode>{11}</newStatusCode>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<dataxml>{12}</dataxml>\r\n\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_C.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_C.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()), CrmEncodeDecode.CrmXmlEncode($v_0), CrmEncodeDecode.CrmXmlEncode($v_9.toString()), CrmEncodeDecode.CrmXmlEncode($v_1), CrmEncodeDecode.CrmXmlEncode($v_8.toString()), CrmEncodeDecode.CrmXmlEncode($v_6.toString()), CrmEncodeDecode.CrmXmlEncode($v_5.toString()), CrmEncodeDecode.CrmXmlEncode($p3.toString()), CrmEncodeDecode.CrmXmlEncode($v_7.toString()), CrmEncodeDecode.CrmXmlEncode($p0.toString()), CrmEncodeDecode.CrmXmlEncode($v_D));
    Mscrm.InlineEditDataService.execute(15, $v_E)
};
Mscrm.LeadPageHandler.$40 = function($p0, $p1, $p2) {
    Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0) && !$v_0.get_isNew()) {
        Mscrm.InlineEditDataService.setCallback($p1, $p2);
        Mscrm.LeadPageHandler.$41($p0, $p2);
        Mscrm.InlineEditDataService.refreshGrid()
    }
};
Mscrm.LeadPageHandler.$41 = function($p0, $p1) {
    Mscrm.MetricsReporting.instance().addMetric("Lead Diqualify", "RO Form");
    var $v_0 = "", $$t_5, $$t_6;
    if (!($$t_6 = Mscrm.InlineEditDataService.isValidFormData($p1, 16, $$t_5 = { val: $v_0 }), $v_0 = $$t_5
        .val, $$t_6)) return;
    var $v_1 = Mscrm.InlineEditDataService.get_formEntity(),
        $v_2 = String
            .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ulNewStatus>{3}</ulNewStatus>\r\n\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_1.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_1.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()), CrmEncodeDecode.CrmXmlEncode($p0.toString()));
    Mscrm.InlineEditDataService.execute(16, $v_2)
};
Mscrm.LeadPageHandler.prototype = {
    $8_4: false,
    $4_4: null,
    $U_4: null,
    $D_4: false,
    $N_4: null,
    $f_4: null,
    $B_4: null,
    $1I_4: null,
    $7_4: null,
    $u_4: null,
    $1C_4: false,
    $1H_4: null,
    $1G_4: null,
    $I_4: null,
    $3Q_4: function() {
        if (this.$1C_4) return;
        isNullOrEmptyString(this.$B_4) && this.retrieveFlyoutLayout();
        this.$7_4 = new Mscrm.InlineFlyOutDialog;
        var $v_0 = $P_CRM("<div id='DuplicateWarning' aria-live='polite' aria-relevant='all' tabindex='-1'></div>");
        $v_0.append(this.$u_4.DivLayout);
        this.$7_4.setContent($v_0);
        this.$3D_4();
        this.$7_4.set_hideFlyOutOnCancelClick(true);
        this.$7_4.initialize($v_0);
        this.$7_4.get_options().set_focusOnFirstTabbable(false);
        this.$7_4.get_jQueryDialog().dialog("option", this.$7_4.get_options().toJQueryDialogOptions());
        this.$7_4.setButtonsVisibility();
        this.$53_4();
        this.$3E_4();
        $P_CRM("#DuplicateWarning_flyOut").keydown(this.$$d_$3P_4);
        this.$1r_4("#MatchContact-dupWarnFlyout");
        this.$1r_4("#MatchAccount-dupWarnFlyout");
        this.$1C_4 = true
    },
    $1r_4: function($p0) { $P_CRM($p0).bind("state-commit", this.$$d_$4D_4) },
    $4D_4: function($p0) {
        var $v_0 = "#" + $p0.target.parentNode.id, $v_1 = $P_CRM($v_0).children(".ms-crm-Inline-Value");
        if ($v_1.hasClass("ms-crm-Inline-EmptyValue")) $v_1.addClass("dupWarnFlyout-EmptyValue");
        else $v_1.removeClass("dupWarnFlyout-EmptyValue")
    },
    $3D_4: function() {
        var $v_0 = new Array(2);
        $v_0[0] = new Mscrm.FlyOutButton(this.$u_4.ConfirmButtonString, this.$$d_$4h_4);
        $v_0[1] = new Mscrm.FlyOutButton(this.$u_4.CancelButtonString, this.$$d_$2s_4);
        this.$7_4.get_options().setButtons($v_0);
        this.$7_4.get_options().set_isDirty(false)
    },
    $53_4: function() {
        this.$7_4.get_options().set_modal(true);
        this.$7_4.get_options().set_closeOnEscape(true);
        this.$7_4.set_position("bottom");
        this.$7_4.get_options().set_width(350);
        this.$7_4.get_options().set_minHeight(200);
        this.$7_4.get_options().set_showTitlePane(false)
    },
    $4h_4: function() {
        if (!this.$1G_4.get_isValid() || !this.$1H_4.get_isValid()) return;
        this.$7_4.hide();
        this.$4i_4(true)
    },
    $3E_4: function() {
        var $$t_0;
        this.$1x_4("#MatchContact-dupWarnFlyout", "contact", $$t_0 = { val: this.$1H_4 }), this.$1H_4 = $$t_0.val;
        var $$t_1;
        this.$1x_4("#MatchAccount-dupWarnFlyout", "account", $$t_1 = { val: this.$1G_4 }), this.$1G_4 = $$t_1.val;
        this.$52_4()
    },
    $1x_4: function($p0, $p1, $p2) {
        var $v_0 = $P_CRM($p0), $v_1 = "", $v_2 = "", $v_3 = "", $v_4 = null;
        switch ($p1) {
        case "contact":
            $v_2 = "parentcontactid";
            $v_3 = "8623E039-9D66-430E-AC94-38138C3B4E3A";
            break;
        case "account":
            $v_2 = "parentaccountid";
            $v_3 = "0B31AFD8-A4CC-4911-B08A-51B86B20309F";
            break;
        default:
            break
        }
        $v_4 = this._formData[$v_2];
        $v_1 = String.format("{0}_i", $p0);
        if ($v_4["_visible"].toString() === "none") $v_4 = null;
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        var $v_5 = Mscrm.InlineControlFactory.getLookupAttributeMetadataJson($v_2, $p1, $v_3, false);
        $p2.val = Mscrm.InlineControlFactory.createControl($v_0, $v_5, $v_4, "normal");
        $p2.val.get_dataContext().set_emptyValuePlaceholder(window.LOCID_IEC_CLICKTOSELECT);
        var $$t_A = this;
        $v_0.children(".ms-crm-Inline-Value").bind("state-edit",
            function($p1_0) {
                $P_CRM($v_1).trigger("click");
                $p1_0.stopPropagation()
            });
        $p2.val.renderForRead();
        $p2.val.initializeAndRenderEditView()
    },
    $52_4: function() {
        $P_CRM("#MatchContact-dupWarnFlyout_i").attr("isDeDupLookup", "1");
        $P_CRM("#MatchAccount-dupWarnFlyout_i").attr("isDeDupLookup", "1");
        this.$22_4("#MatchContact-dupWarnFlyout_lookupTable");
        this.$22_4("#MatchAccount-dupWarnFlyout_lookupTable")
    },
    $22_4: function($p0) {
        var $v_0 = $P_CRM($p0);
        $v_0.removeAttr("class");
        $v_0.removeAttr("style");
        $v_0.attr("class", "dupWarnFlyout-table")
    },
    $3P_4: function($p0) {
        switch ($p0.which) {
        case 27:
            this.$7_4.hide();
            break
        }
    },
    $2s_4: function() {
        this.$7_4.hide();
        this.$1C_4 = false;
        this.$7_4.dispose()
    },
    $4i_4: function($p0) {
        var $v_0 = !this.needToShowFlyout(1) ? this.$N_4.DefaultStatus : this.$1I_4, $$t_4 = this, $$t_5 = this;
        Mscrm.LeadPageHandler.$2E(Number.parseInvariant($v_0),
            this.$N_4.TransactionCurrencyId,
            $p0,
            function($p1_0) {
                $$t_4.$8_4 = false;
                return $$t_4.$2I_4($p1_0)
            },
            function($p1_0) {
                Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities.getAttributeFromErrorJson($p1_0, "DisplayText"),
                    true);
                $$t_5.$8_4 = false;
                return true
            })
    },
    $1h_4: function() {
        if (this.$D_4) return;
        this.$4_4 = new Mscrm.InlineFlyOutDialog;
        this.$4_4.get_options().set_showButtonPane(false);
        this.$4_4.get_options().set_modal(true);
        this.$4_4.get_options().set_closeOnEscape(true);
        var $$t_3 = this;
        this.$4_4.bind("flyout-canceled", function($p1_0) { $$t_3.$8_4 = false });
        var $$t_4 = this;
        this.$4_4.bind("flyout-confirmed", function($p1_0) { $$t_4.$8_4 = false });
        var $$t_5 = this;
        this.$4_4.bind("flyout-visiblechanged",
            function($p1_0) {
                $$t_5.$8_4 = $$t_5.$4_4.get_visible();
                if (!$$t_5.$8_4) {
                    $$t_5.$U_4.unbind("keydown");
                    $$t_5.$U_4.unbind("mouseover");
                    $$t_5.$4_4.dispose()
                }
            });
        isNullOrEmptyString(this.$B_4) && this.retrieveFlyoutLayout();
        if (window.UseTabletExperience) {
            Mscrm.RefreshPageHandler.prototype.initializeDeleteRecordFlyout.call(this);
            this.$1N_4()
        }
        this.$D_4 = true
    },
    $23_4: function($p0) {
        switch ($p0.which) {
        case 13:
            var $v_0 = $P_CRM($p0.target);
            $v_0.trigger("selectableselected");
            break;
        case 9:
            if ($p0.target.tagName === "LI") {
                $p0.preventDefault();
                Mscrm.LeadPageHandler.$1M($p0)
            }
            break;
        case 38:
        case 40:
            $p0.target.tagName === "LI" && Mscrm.LeadPageHandler.$1M($p0);
            break;
        case 27:
            this.$4_4.hide();
            this.$4_4.dispose();
            this.$8_4 = false;
            break
        }
        $p0.stopImmediatePropagation()
    },
    $2I_4: function($p0) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.Id;
            Mscrm.ReadFormUtilities.openInSameFrame(3, $v_1)
        }
        Mscrm.InlineEditDataService.refreshGridOnStateChange();
        return true
    },
    disqualify: function() {
        if (this.isRefreshForm()) {
            setPerfMarkerTimestamp("StartOpenFlyOutTimestamp");
            this.$1h_4();
            if (this.$8_4) {
                this.$4_4.hide();
                this.$4_4.dispose();
                this.$8_4 = false;
                return
            }
            if (this._deleteFlyoutVisible) {
                this._deleteFlyout.hide();
                this._deleteFlyoutVisible = false
            }
            if (this.needToShowFlyout(2)) {
                var $v_0 = this.getFlyoutLayoutDiv(2);
                this.$2R_4($v_0, 2);
                this.$4_4.show($P_CRM("#disqualifyLead"), null);
                var $v_1 = $P_CRM(String.format(".li-flyoutlistitem[attributeValue={0}]", this.$f_4.DefaultStatus));
                $v_1.focus();
                $v_1.addClass("ui-selected");
                $v_1.removeClass("ui-selectee");
                this.$8_4 = true
            } else this.$1y_4(this.$f_4.DefaultStatus);
            setPerfMarkerTimestamp("FinishOpenFlyOutTimestamp")
        }
    },
    $1y_4: function($p0) {
        Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
        var $$t_3 = this, $$t_4 = this;
        Mscrm.LeadPageHandler.$40(Number.parseInvariant($p0),
            function($p1_0) {
                $$t_3.$8_4 = false;
                return $$t_3.$4W_4($p1_0)
            },
            function($p1_0) {
                Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities.getAttributeFromErrorJson($p1_0, "DisplayText"),
                    true);
                $$t_4.$8_4 = false;
                return true
            })
    },
    $4W_4: function($p0) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (Mscrm.InlineEditDataService.get_formEntity() &&
            isNullOrEmptyString(Mscrm.InlineEditDataService.get_formEntity()
                .get_recordId())) !IsNull($v_0) && Mscrm.InlineEditDataService.get_formEntity().set_recordId($v_0.Id);
        !isNullOrEmptyString($v_0.Id) && Mscrm.ReadFormUtilities.openInSameFrame(4, $v_0.Id);
        Mscrm.InlineEditDataService.refreshGridOnStateChange();
        return true
    },
    qualify: function() {
        if (this.isRefreshForm()) {
            setPerfMarkerTimestamp("StartOpenFlyOutTimestamp");
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
            this.$1h_4();
            if (this.$8_4) {
                this.$4_4.hide();
                this.$4_4.dispose();
                this.$8_4 = false;
                return
            }
            if (this._deleteFlyoutVisible) {
                this._deleteFlyout.hide();
                this._deleteFlyoutVisible = false
            }
            if (this.needToShowFlyout(1)) {
                var $v_0 = this.getFlyoutLayoutDiv(1);
                this.$2R_4($v_0, 1);
                this.$4_4.show($P_CRM("#qualifyLead"), null);
                var $v_1 = $P_CRM(String.format(".li-flyoutlistitem[attributeValue={0}]", this.$N_4.DefaultStatus));
                $v_1.focus();
                $v_1.addClass("ui-selected");
                $v_1.removeClass("ui-selectee");
                this.$8_4 = true
            } else this.$2J_4(this.$N_4.DefaultStatus);
            setPerfMarkerTimestamp("FinishOpenFlyOutTimestamp")
        }
    },
    $2J_4: function($p0) {
        var $v_0 = false, $v_1 = "", $$t_6, $$t_7;
        if (!($$t_7 = Mscrm.InlineEditDataService.isValidFormData(null, 15, $$t_6 = { val: $v_1 }), $v_1 = $$t_6
            .val, $$t_7)) return;
        if (IsNull(this._formData["parentcontactid"]) && IsNull(this._formData["parentaccountid"])) $v_0 = true;
        var $$t_8 = this, $$t_9 = this;
        Mscrm.LeadPageHandler.$2E(Number.parseInvariant($p0),
            this.$N_4.TransactionCurrencyId,
            $v_0,
            function($p1_0) {
                $$t_8.$8_4 = false;
                return $$t_8.$2I_4($p1_0)
            },
            function($p1_0) {
                $$t_9.$8_4 = false;
                if (Mscrm.JsonUtilities.getAttributeFromErrorJson($p1_0, "ErrorCode").toString() === "-2147220685") {
                    $$t_9.$3Q_4();
                    $$t_9.$7_4.show($P_CRM("#qualifyLead"), null);
                    var $v_2 = $P_CRM("#DuplicateWarning-confirm");
                    $v_2.focus();
                    return true
                }
                Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities.getAttributeFromErrorJson($p1_0, "DisplayText"),
                    true);
                return true
            })
    },
    deleteRecord: function() {
        if (this.isRefreshForm())
            if (window.UseTabletExperience) {
                this.$1h_4();
                if (this._deleteFlyoutVisible) {
                    this._deleteFlyout.hide();
                    this._deleteFlyoutVisible = false
                } else {
                    this._deleteFlyout.show($P_CRM("#deleteButton"));
                    this._deleteFlyoutVisible = true
                }
                if (this.$8_4) {
                    this.$4_4.hide();
                    this.$8_4 = false
                }
            } else Mscrm.RefreshPageHandler.prototype.deleteRecord.call(this)
    },
    activate: function() {
        if (this.isRefreshForm()) {
            Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
            var $$t_3 = this, $$t_4 = this;
            Mscrm.InlineEditDataService.activate("Open",
                function($p1_0) {
                    if (!IsNull($$t_3._formData["leadid"])) {
                        var $v_0 = $$t_3._formData["leadid"];
                        Mscrm.ReadFormUtilities.openInSameFrame(4, $v_0["value"]);
                        Mscrm.InlineEditDataService.refreshGridOnStateChange()
                    }
                    return true
                },
                function($p1_0) {
                    Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities
                        .getAttributeFromErrorJson($p1_0, "DisplayText"),
                        true);
                    $$t_4.$8_4 = false;
                    return true
                })
        }
    },
    $2R_4: function($p0, $p1) {
        var $v_0 = $P_CRM(String.format("<div id='{0}' ></div>", "leadAction")),
            $v_1 =
                $P_CRM("<ol style='margin:1px;padding:0px;' class='ui-selectable selectedstateconvertlead' id='selectedstateconvertlead'></ol>");
        $v_1.append($p0);
        $v_0.append($v_1);
        this.$4_4.setContent($v_0);
        this.$U_4 = $P_CRM("#selectedstateconvertlead");
        this.$U_4.keydown(this.$$d_$23_4);
        this.$U_4.mouseover(Mscrm.LeadPageHandler.$2C);
        this.$U_4.selectable();
        var $$t_4 = this;
        this.$U_4.bind("selectableselected",
            function() {
                if ($p1 === 1) $$t_4.$2J_4($$t_4.$29_4());
                else $p1 === 2 && $$t_4.$1y_4($$t_4.$29_4());
                $$t_4.$4_4.hide();
                $$t_4.$U_4.unbind("selectableselected")
            });
        this.$4_4.set_position("bottom");
        this.$4_4.get_options().set_width(200);
        this.$4_4.get_options().set_minHeight(10);
        this.$4_4.get_options().set_showTitlePane(false);
        ($p1 === 2 ? this.$f_4.StatusCount : this.$N_4.StatusCount) > 11 && this.$4_4.get_options().set_height(272)
    },
    $29_4: function() {
        var $v_0 = $P_CRM(".ui-selected");
        this.$1I_4 = $v_0.attr("attributeValue");
        return this.$1I_4
    },
    getFlyoutLayoutDiv: function($p0) {
        var $v_0 = "";
        switch ($p0) {
        case 1:
            $v_0 = this.$N_4.DivLayout;
            break;
        case 2:
            $v_0 = this.$f_4.DivLayout;
            break
        }
        return $v_0
    },
    processFlyoutLayout: function() {
        this.$B_4 = Mscrm.JsonUtilities.getJsonString(this._flyoutLayoutRequest.responseText);
        var $v_0, $$t_6, $$t_7;
        $$t_7 = Mscrm.JsonUtilities.tryGetParsedJson(this.$B_4, $$t_6 = { val: $v_0 }), $v_0 = $$t_6.val, $$t_7;
        for (var $v_1 = $v_0, $$arr_2 = $v_1, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            if ($v_2.LeadActionName === "Qualified") this.$N_4 = $v_2;
            if ($v_2.LeadActionName === "Disqualified") this.$f_4 = $v_2;
            if ($v_2.LeadActionName === "DupWarnFlyout") this.$u_4 = $v_2;
            if ($v_2.LeadActionName === "Delete") this.$I_4 = $v_2
        }
    },
    needToShowFlyout: function($p0) {
        switch ($p0) {
        case 1:
            return this.$N_4.StatusCount > 1;
        case 2:
            return this.$f_4.StatusCount > 1;
        default:
            return false
        }
    },
    launchProcessControlConfiguration: function() {},
    $1N_4: function() {
        var $v_0 = this.$I_4.DivLayout;
        Mscrm.RefreshPageHandler.prototype.setDeleteFlyoutDialog.call(this, $v_0)
    }
};
Mscrm.NullProcessControlData = function() {
    this.$$d_$4K_1 = Function.createDelegate(this, this.$4K_1);
    Mscrm.NullProcessControlData.initializeBase(this)
};
Mscrm.NullProcessControlData.prototype = {
    $16_1: null,
    getActiveProcess: function() { return null },
    getStatus: function() { return null },
    getInstanceName: function() { return null },
    getInstanceId: function() { return null },
    setStatus: function(newStatus, callback) {},
    abandonProcess: function() {},
    reactivateProcess: function() {},
    completeProcess: function() {},
    isLastStage: function() { return true },
    canSetActiveStage: function() { return true },
    getProcessInstances: function(callback) {},
    setActiveProcess: function(processId, callback) {},
    setActiveProcessInstance: function(processInstanceId, callback) {},
    getEnabledProcesses: function(callback) {},
    switchProcess: function() {
        if (IsNull(this.$16_1)) {
            var $v_0 = $P_CRM("body"), $v_1 = Xrm.Page.data.entity.getEntityName();
            this.$16_1 = new Mscrm.SwitchProcessFlyOut($v_0, Xrm.Page.data.entity.getId(), $v_1);
            this.$16_1.add_processSwitched(this.$$d_$4K_1)
        }
        this.$16_1.selectView(false)
    },
    $4K_1: function($p0, $p1) {
        Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), Xrm.Page.data.entity.getId())
    },
    getActiveStage: function() { return null },
    getActivePath: function() { return null },
    setActiveStage: function(stageId, callback) {},
    moveNext: function(callback) {},
    movePrevious: function(callback) {},
    getSelectedStage: function() { return null },
    addOnStageChange: function(handler) {},
    removeOnStageChange: function(handler) {},
    addOnStageSelected: function(handler) {},
    removeOnStageSelected: function(handler) {},
    addOnProcessStatusChange: function(handler) {},
    removeOnProcessStatusChange: function(handler) {}
};
Mscrm.ProductPageHandler = function() {
    this.$$d_$4g_4 = Function.createDelegate(this, this.$4g_4);
    this.$$d_$4Y_4 = Function.createDelegate(this, this.$4Y_4);
    Mscrm.ProductPageHandler.initializeBase(this)
};
Mscrm.ProductPageHandler.convert = function($p0) {
    var $v_0 = Mscrm.ProductPageHandler.$1s();
    Mscrm.ProductPageHandler.$20($p0 ? 35 : 36, $v_0, Mscrm.ProductPageHandler.$15, Mscrm.ProductPageHandler.$r)
};
Mscrm.ProductPageHandler.$20 = function($p0, $p1, $p2, $p3) {
    Mscrm.InlineEditDataService.get_dataService().set_succeedCallback($p2);
    Mscrm.InlineEditDataService.get_dataService().set_errorCallback($p3);
    Mscrm.InlineEditDataService.execute($p0, $p1)
};
Mscrm.ProductPageHandler.$15 = function($p0) { return Mscrm.ProductPageHandler.$4q($p0) };
Mscrm.ProductPageHandler.$r = function($p0) {
    if (!IsNull($p0["_error"])) {
        var $v_0 = $p0["_error"];
        Xrm.Internal.openErrorDialog($v_0.ErrorCode, $v_0.DisplayText);
        return true
    }
    return false
};
Mscrm.ProductPageHandler.$4q = function($p0) {
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
    if (IsNull($v_0)) return false;
    Mscrm.ReadFormUtilities.forceReload(1024, $v_0.Id, Mscrm.InlineEditDataService.get_formId());
    Xrm.Internal.refreshParentGrid(1024, null, Xrm.Page.data.entity.getId());
    return true
};
Mscrm.ProductPageHandler.$51 = function() {
    var $v_0 = Xrm.Page.ui.controls.get("defaultuomid"),
        $v_1 = Xrm.Page.getAttribute("defaultuomscheduleid"),
        $v_2 = Xrm.Page.getAttribute("productstructure");
    if (!IsNull($v_2)) parseInt($v_2.getValue().toString()) === 2 && $v_0.setDisabled(IsNull($v_1.getValue()))
};
Mscrm.ProductPageHandler.SetProductFormTitle = function() {
    var $v_0 = "#form_title_div .ms-crm-Form-Title-Data h1", $v_1 = $P_CRM($v_0);
    if (!IsNull($v_1)) {
        var $v_2 = null, $v_3 = Xrm.Page.getAttribute("name");
        if (!IsNull($v_3) && !IsNull($v_3.getValue())) $v_2 = $v_3.getValue();
        else $v_2 = $v_1.text();
        var $v_4 = _edn;
        if (!IsNull($v_4)) {
            $v_1.empty();
            $v_1.text(String.format("{0}: {1}", $v_4, $v_2))
        }
    }
};
Mscrm.ProductPageHandler.SetParentProductLabel = function() {
    if (Xrm.Page.ui.getFormType() !== 1) {
        var $v_0 = Xrm.Page.ui.controls.get("parentproductid");
        !IsNull($v_0) &&
            !IsNull(Xrm.Internal.getResourceString("LOCID_PF_HIERARCHY_LABLE_NAME")) &&
            $v_0.setLabel(Xrm.Internal.getResourceString("LOCID_PF_HIERARCHY_LABLE_NAME"))
    }
};
Mscrm.ProductPageHandler.$1s = function() {
    var $v_0 = String.format("<Input><id>{0}</id><name>{1}</name></Input>",
        CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_recordId()),
        CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formEntity().get_typeName()));
    return $v_0
};
Mscrm.ProductPageHandler.HandleKitFormUIConfiguration = function() {
    var $v_0 = Xrm.Page.getAttribute("iskit");
    if (!IsNull($v_0) && $v_0.getValue()) {
        var $v_1 = Xrm.Page.ui.tabs.get("productassocaition_items");
        !IsNull($v_1) && $v_1.setLabel(Xrm.Internal.getResourceString("LOCID_KITPRODUCTS_SECTION_NAME"));
        var $v_2 = $P_CRM("#productassocaition_items_titleText");
        if (!IsNull($v_2)) {
            $v_2.empty();
            if (!IsNull($v_2[0])) $v_2[0].title = Xrm.Internal.getResourceString("LOCID_KITPRODUCTS_SECTION_NAME");
            $v_2.text(Xrm.Internal.getResourceString("LOCID_KITPRODUCTS_SECTION_NAME"))
        }
    }
};
Mscrm.ProductPageHandler.prototype = {
    postPageRender: function() {
        Mscrm.RefreshPageHandler.prototype.postPageRender.call(this);
        this.isRefreshForm() && Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(this.$$d_$4Y_4)
    },
    postRefresh: function() {
        Mscrm.RefreshPageHandler.prototype.postRefresh.call(this);
        this.isRefreshForm() &&
            this.isEntitySaved() &&
            Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(this.$$d_$4Y_4)
    },
    $4Y_4: function($p0, $p1) {
        Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$4g_4, 2);
        !isNullOrEmptyString($p1.get_entityReference().Id) &&
            Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(this.$$d_$4Y_4)
    },
    $4g_4: function() {
        if (!Mscrm.Utilities.isGlobalQuickCreateForm()) {
            var $v_0 = $get("parentproductid");
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.getAttribute("showasbreadcrumbcontrol");
                if (!IsNull($v_1) && $v_1.toString() === "1") {
                    var $v_2 = new Mscrm.BreadCrumbUIRenderer;
                    $v_2.renderBreadCrumbControl(null)
                }
            }
            Mscrm.ProductPageHandler.SetParentProductLabel();
            Mscrm.ProductPageHandler.SetProductFormTitle();
            Mscrm.ProductPageHandler.HandleKitFormUIConfiguration();
            Mscrm.ProductPageHandler.$51()
        }
    }
};
Mscrm.OpportunityPageHandler = function() {
    this.$$d_$3V_4 = Function.createDelegate(this, this.$3V_4);
    this.$$d_$1z_4 = Function.createDelegate(this, this.$1z_4);
    Mscrm.OpportunityPageHandler.initializeBase(this)
};
Mscrm.OpportunityPageHandler.$4Q = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0) && !isNullOrEmptyString($v_0.get_recordId())) {
        Mscrm.InlineEditDataService.setCallback($p0, $p1);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()));
        Mscrm.InlineEditDataService.execute(213, $v_1)
    }
};
Mscrm.OpportunityPageHandler.$4N = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0) && !isNullOrEmptyString($v_0.get_recordId())) {
        Mscrm.InlineEditDataService.setCallback($p0, $p1);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()));
        Mscrm.InlineEditDataService.execute(22, $v_1)
    }
};
Mscrm.OpportunityPageHandler.$4M = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0) && !isNullOrEmptyString($v_0.get_recordId())) {
        Mscrm.InlineEditDataService.setCallback($p0, $p1);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()));
        Mscrm.InlineEditDataService.execute(21, $v_1)
    }
};
Mscrm.OpportunityPageHandler.$4L = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    if (!IsNull($v_0) && !isNullOrEmptyString($v_0.get_recordId())) {
        Mscrm.InlineEditDataService.setCallback($p0, $p1);
        var $v_1 = String
            .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()));
        Mscrm.InlineEditDataService.execute(23, $v_1)
    }
};
Mscrm.OpportunityPageHandler.$4P = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    Mscrm.MetricsReporting.instance().addMetric("Opportunity Close As Won", "RO Form");
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity(), $v_1 = "", $$t_B, $$t_C;
    if (!($$t_C = Mscrm.InlineEditDataService.isValidFormData($p6, 205, $$t_B = { val: $v_1 }), $v_1 = $$t_B
        .val, $$t_C)) return;
    var $v_2 =
        "<opportunityclose>\r\n\t\t\t\t\t\t\t\t\t\t<actualrevenue>{0}</actualrevenue>\r\n\t\t\t\t\t\t\t\t\t\t<activityid>{1}</activityid>\r\n\t\t\t\t\t\t\t\t\t\t<opportunityid>{2}</opportunityid>\r\n\t\t\t\t\t\t\t\t\t\t<description>{3}</description>\r\n\t\t\t\t\t\t\t\t\t\t<actualend>{4}</actualend>\r\n\t\t\t\t\t\t\t\t\t\t<subject>{5}</subject>\r\n\t\t\t\t\t\t\t\t\t</opportunityclose>";
    $v_2 = String.format($v_2,
        CrmEncodeDecode.CrmXmlEncode($p1),
        CrmEncodeDecode.CrmXmlEncode(Mscrm.Utilities.createGuid()),
        CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()),
        CrmEncodeDecode.CrmXmlEncode($p2),
        CrmEncodeDecode.CrmXmlEncode($p3),
        CrmEncodeDecode.CrmXmlEncode($p0));
    if (!IsNull($v_0) && !isNullOrEmptyString($v_0.get_recordId())) {
        Mscrm.InlineEditDataService.setCallback($p5, $p6);
        var $v_3 = String
            .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dataxml>{3}</dataxml>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<opportunitydisplayname>{4}</opportunitydisplayname>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<opportunityclosexml>{5}</opportunityclosexml>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<newStateCode>1</newStateCode>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<newStatusCode>{6}</newStatusCode>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()), CrmEncodeDecode.CrmXmlEncode($v_1), CrmEncodeDecode.CrmXmlEncode($p0), CrmEncodeDecode.CrmXmlEncode($v_2), CrmEncodeDecode.CrmXmlEncode($p4));
        Mscrm.InlineEditDataService.execute(205, $v_3)
    }
};
Mscrm.OpportunityPageHandler.$4O = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    Mscrm.MetricsReporting.instance().addMetric("Opportunity Close As Lost", "RO Form");
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity(),
        $v_1 =
            "<opportunityclose>\r\n\t\t\t\t\t\t\t\t\t\t<actualrevenue>{0}</actualrevenue>\r\n\t\t\t\t\t\t\t\t\t\t<activityid>{1}</activityid>\r\n\t\t\t\t\t\t\t\t\t\t<opportunityid>{2}</opportunityid>\r\n\t\t\t\t\t\t\t\t\t\t<description>{3}</description>\r\n\t\t\t\t\t\t\t\t\t\t<actualend>{4}</actualend>\r\n\t\t\t\t\t\t\t\t\t\t<subject>{5}</subject>\r\n\t\t\t\t\t\t\t\t\t\t<competitorid>{6}</competitorid>\r\n\t\t\t\t\t\t\t\t\t</opportunityclose>";
    $v_1 = String.format($v_1,
        CrmEncodeDecode.CrmXmlEncode($p1),
        CrmEncodeDecode.CrmXmlEncode(Mscrm.Utilities.createGuid()),
        CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()),
        CrmEncodeDecode.CrmXmlEncode($p2),
        CrmEncodeDecode.CrmXmlEncode($p3),
        CrmEncodeDecode.CrmXmlEncode($p0),
        CrmEncodeDecode.CrmXmlEncode($p5));
    var $v_2 = "", $$t_C, $$t_D;
    if (!($$t_D = Mscrm.InlineEditDataService.isValidFormData($p7, 206, $$t_C = { val: $v_2 }), $v_2 = $$t_C
        .val, $$t_D)) return;
    if (!IsNull($v_0) && !isNullOrEmptyString($v_0.get_recordId())) {
        Mscrm.InlineEditDataService.setCallback($p6, $p7);
        var $v_3 = String
            .format("<Input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<id>{0}</id>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<name>{1}</name>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<formId>{2}</formId>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dataxml>{3}</dataxml>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<opportunitydisplayname>{4}</opportunitydisplayname>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<opportunityclosexml>{5}</opportunityclosexml>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<newStateCode>2</newStateCode>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<newStatusCode>{6}</newStatusCode>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</Input>", CrmEncodeDecode.CrmXmlEncode($v_0.get_recordId()), CrmEncodeDecode.CrmXmlEncode($v_0.get_typeName()), CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()), CrmEncodeDecode.CrmXmlEncode($v_2), CrmEncodeDecode.CrmXmlEncode($p0), CrmEncodeDecode.CrmXmlEncode($v_1), CrmEncodeDecode.CrmXmlEncode($p4));
        Mscrm.InlineEditDataService.execute(206, $v_3)
    }
};
Mscrm.OpportunityPageHandler.prototype = {
    $9_4: false,
    $C_4: false,
    $3_4: null,
    $2_4: null,
    $D_4: false,
    $j_4: null,
    $G_4: null,
    $O_4: null,
    $a_4: null,
    $i_4: null,
    $F_4: null,
    $L_4: null,
    $h_4: null,
    $Y_4: null,
    $A_4: null,
    $J_4: null,
    $I_4: null,
    $B_4: null,
    closeAsLost: function() {
        if (this.isRefreshForm()) {
            Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
            var $v_0 = new Mscrm.Performance.PerformanceStopwatch("CloseAsLost");
            $v_0.start();
            this.$14_4();
            if (this.$9_4) {
                this.$3_4.hide();
                this.$9_4 = false
            }
            if (this.$C_4) {
                this.$2_4.hide();
                this.$C_4 = false
            } else {
                this.$2Z_4();
                this.$2Y_4();
                this.$2_4.show($P_CRM("#closeAsLost"));
                this.$1c_4(2);
                this.$Y_4.resetLayout();
                !this.$2_4.get_jQueryDialog().hasClass("ui-flyout-dialog-opportunity-content") &&
                    this.$2_4.get_jQueryDialog().addClass("ui-flyout-dialog-opportunity-content");
                this.$C_4 = true;
                if (this.$J_4 && this.$J_4.ValidStatusReasonOptions.length === 1) {
                    var $v_1 = $P_CRM("#" + this.$F_4.get_editView().get_editElementId());
                    $v_1.select()
                }
                this.$2X_4();
                $v_0.stop()
            }
            if (this._deleteFlyoutVisible) {
                this._deleteFlyout.hide();
                this._deleteFlyoutVisible = false
            }
        }
    },
    closeAsWon: function() {
        if (this.isRefreshForm()) {
            Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
            var $v_0 = new Mscrm.Performance.PerformanceStopwatch("CloseAsWon");
            $v_0.start();
            this.$14_4();
            if (this.$C_4) {
                this.$2_4.hide();
                this.$C_4 = false
            }
            if (this._deleteFlyoutVisible) {
                this._deleteFlyout.hide();
                this._deleteFlyoutVisible = false
            }
            if (this.$9_4) {
                this.$3_4.hide();
                this.$9_4 = false
            } else {
                this.$2Z_4();
                this.$2Y_4();
                this.$1c_4(1);
                this.$3_4.show($P_CRM("#closeAsWon"));
                this.$a_4.resetLayout();
                !this.$3_4.get_jQueryDialog().hasClass("ui-flyout-dialog-opportunity-content") &&
                    this.$3_4.get_jQueryDialog().addClass("ui-flyout-dialog-opportunity-content");
                this.$9_4 = true;
                if (this.$A_4 && this.$A_4.ValidStatusReasonOptions.length === 1) {
                    var $v_1 = $P_CRM("#" + this.$G_4.get_editView().get_editElementId());
                    $v_1.select()
                }
                this.$2X_4();
                $v_0.stop()
            }
        }
    },
    deleteRecord: function() {
        if (this.isRefreshForm())
            if (window.UseTabletExperience) {
                this.$14_4();
                if (this.$C_4) {
                    this.$2_4.hide();
                    this.$C_4 = false
                }
                if (this.$9_4) {
                    this.$3_4.hide();
                    this.$9_4 = false
                }
                if (this._deleteFlyoutVisible) {
                    this._deleteFlyout.hide();
                    this._deleteFlyoutVisible = false
                } else {
                    this._deleteFlyout.show($P_CRM("#deleteButton"));
                    this._deleteFlyoutVisible = true
                }
            } else Mscrm.RefreshPageHandler.prototype.deleteRecord.call(this)
    },
    reOpen: function() {
        if (this.isRefreshForm()) {
            var $$t_4 = this, $$t_5 = this;
            Mscrm.OpportunityPageHandler.$4Q(function($p1_0) {
                    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p1_0), $v_1 = $v_0.Id;
                    Mscrm.ReadFormUtilities.openInSameFrame(3, $v_1);
                    Mscrm.InlineEditDataService.refreshGridOnStateChange();
                    return true
                },
                function($p1_0) {
                    Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities
                        .getAttributeFromErrorJson($p1_0, "DisplayText"),
                        true);
                    return true
                })
        }
    },
    $1l_4: function($p0) {
        var $v_0 = $find($p0);
        !IsNull($v_0) && $v_0.refresh()
    },
    addRelatedQuote: function() {
        if (this.isRefreshForm()) {
            var $$t_4 = this, $$t_5 = this;
            Mscrm.OpportunityPageHandler.$4N(function($p1_0) {
                    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p1_0), $v_1 = $v_0.Id;
                    openItem(1084, $v_1, 0, null);
                    Mscrm.InlineEditDataService.refreshGridOnStateChange();
                    $$t_4.$1l_4("quote");
                    return true
                },
                function($p1_0) {
                    Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities
                        .getAttributeFromErrorJson($p1_0, "DisplayText"),
                        true);
                    return true
                })
        }
    },
    addRelatedOrder: function() {
        if (this.isRefreshForm()) {
            var $$t_4 = this, $$t_5 = this;
            Mscrm.OpportunityPageHandler.$4M(function($p1_0) {
                    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p1_0), $v_1 = $v_0.Id;
                    openItem(1088, $v_1, 0, null);
                    Mscrm.InlineEditDataService.refreshGridOnStateChange();
                    $$t_4.$1l_4("Order");
                    return true
                },
                function($p1_0) {
                    Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities
                        .getAttributeFromErrorJson($p1_0, "DisplayText"),
                        true);
                    return true
                })
        }
    },
    addRelatedInvoice: function() {
        if (this.isRefreshForm()) {
            var $$t_4 = this, $$t_5 = this;
            Mscrm.OpportunityPageHandler.$4L(function($p1_0) {
                    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p1_0), $v_1 = $v_0.Id;
                    openItem(1090, $v_1, 0, null);
                    Mscrm.InlineEditDataService.refreshGridOnStateChange();
                    $$t_4.$1l_4("Invoice");
                    return true
                },
                function($p1_0) {
                    Mscrm.ErrorStatusControl.showError(Mscrm.JsonUtilities
                        .getAttributeFromErrorJson($p1_0, "DisplayText"),
                        true);
                    return true
                })
        }
    },
    launchProcessControlConfiguration: function() {},
    $2X_4: function() {
        var $v_0 = "", $v_1 = null;
        if (this.$9_4) {
            $v_1 = $P_CRM("#closeAsWon-confirm");
            $v_0 = this.$G_4.get_dataContext().get_editValue()
        } else if (this.$C_4) {
            $v_1 = $P_CRM("#closeAsLost-confirm");
            $v_0 = this.$F_4.get_dataContext().get_editValue()
        }
        if (!IsNull($v_1))
            if (isNullOrEmptyString($v_0)) this.$17_4($v_1, false, window.LOCID_REVENUECANNOTBENULL);
            else this.$17_4($v_1, true, "")
    },
    $14_4: function() {
        if (this.$D_4) return;
        this.$D_4 = true;
        isNullOrEmptyString(this.$B_4) && this.retrieveFlyoutLayout();
        this.$3_4 = new Mscrm.InlineFlyOutDialog;
        this.$3_4.set_hideFlyOutOnConfirmClick(false);
        var $$t_8 = this;
        this.$3_4.bind("flyout-overlayclicked",
            function($p1_0) {
                $$t_8.$9_4 = false;
                $$t_8.$q_4($$t_8.$3_4);
                $$t_8.$d_4(1);
                $$t_8.$3_4.hide()
            });
        var $$t_9 = this;
        this.$3_4.bind("flyout-canceled",
            function($p1_0) {
                $$t_9.$9_4 = false;
                $$t_9.$q_4($$t_9.$3_4);
                $$t_9.$d_4(1)
            });
        var $$t_A = this;
        this.$3_4.bind("flyout-confirmed",
            function($p1_0) {
                if ($$t_A.$1t_4(1)) {
                    $$t_A.$9_4 = false;
                    $$t_A.$3_4.hide()
                }
            });
        var $$t_B = this;
        this.$3_4.bind("flyout-visiblechanged",
            function($p1_0) {
                $$t_B.$9_4 = $$t_B.$3_4.get_visible();
                !$$t_B.$9_4 && $$t_B.$q_4($$t_B.$3_4)
            });
        this.$4z_4();
        this.$2_4 = new Mscrm.InlineFlyOutDialog;
        this.$2_4.set_hideFlyOutOnConfirmClick(false);
        var $$t_C = this;
        this.$2_4.bind("flyout-overlayclicked",
            function($p1_0) {
                $$t_C.$C_4 = false;
                $$t_C.$q_4($$t_C.$2_4);
                $$t_C.$d_4(2);
                $$t_C.$2_4.hide()
            });
        var $$t_D = this;
        this.$2_4.bind("flyout-canceled",
            function($p1_0) {
                $$t_D.$C_4 = false;
                $$t_D.$q_4($$t_D.$2_4);
                $$t_D.$d_4(2)
            });
        var $$t_E = this;
        this.$2_4.bind("flyout-confirmed",
            function($p1_0) {
                if ($$t_E.$1t_4(2)) {
                    $$t_E.$C_4 = false;
                    $$t_E.$2_4.hide()
                }
            });
        var $$t_F = this;
        this.$2_4.bind("flyout-visiblechanged",
            function($p1_0) {
                $$t_F.$C_4 = $$t_F.$2_4.get_visible();
                !$$t_F.$C_4 && $$t_F.$q_4($$t_F.$2_4)
            });
        this.$4y_4();
        if (window.UseTabletExperience) {
            Mscrm.RefreshPageHandler.prototype.initializeDeleteRecordFlyout.call(this);
            this.$1N_4()
        }
        this.$2d_4()
    },
    $3b_4: function($p0) {
        if ($p0 === this.$2_4) return [this.$F_4, this.$h_4, this.$Y_4, this.$L_4];
        if ($p0 === this.$3_4) return [this.$a_4, this.$G_4, this.$O_4];
        return null
    },
    $q_4: function($p0) {
        for (var $$arr_1 = this.$3b_4($p0), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            $v_0.get_dataContext().set_editValue("");
            $v_0.blur();
            if ($v_0.get_isValid());
        }
    },
    processFlyoutLayout: function() {
        this.$B_4 = Mscrm.JsonUtilities.getJsonString(this._flyoutLayoutRequest.responseText);
        var $v_0 = null, $$t_6, $$t_7;
        $$t_7 = Mscrm.JsonUtilities.tryGetParsedJson(this.$B_4, $$t_6 = { val: $v_0 }), $v_0 = $$t_6.val, $$t_7;
        for (var $v_1 = $v_0, $$arr_2 = $v_1, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            if ($v_2.OpportunityActionName === "Lost") this.$J_4 = $v_2;
            if ($v_2.OpportunityActionName === "Won") this.$A_4 = $v_2;
            if ($v_2.OpportunityActionName === "Delete") this.$I_4 = $v_2
        }
    },
    $1t_4: function($p0) {
        var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = "", $v_4 = "";
        if (this.$1c_4($p0)) {
            var $$t_6, $$t_7, $$t_8, $$t_9, $$t_A;
            this.$3U_4($p0,
                $$t_6 = { val: $v_4 },
                $$t_7 = { val: $v_0 },
                $$t_8 = { val: $v_1 },
                $$t_9 = { val: $v_2 },
                $$t_A = { val: $v_3 }), $v_4 = $$t_6.val, $v_0 = $$t_7.val, $v_1 = $$t_8.val, $v_2 = $$t_9
                .val, $v_3 = $$t_A.val;
            if (!isNullOrEmptyString($v_3)) this.$31_4($p0, $v_4, $v_2, $v_0, $v_1, $v_3);
            else return false
        } else return false;
        return true
    },
    $31_4: function($p0, $p1, $p2, $p3, $p4, $p5) {
        if ($p0 === 2) {
            var $v_0 = "", $v_1 = $P_CRM("#_lost_competitor_lookupTable"), $v_2 = $v_1.find("#lookupItem");
            $v_0 = $v_2.attr("oid");
            var $$t_H = this, $$t_I = this;
            Mscrm.OpportunityPageHandler.$4O($p2,
                $p5,
                $p4,
                $p3,
                $p1,
                $v_0,
                function($p1_0) {
                    if (!IsNull($p1_0)) {
                        var $v_3 = Mscrm.InlineEditUtilities.getEntityReference($p1_0), $v_4 = $v_3.Id;
                        $$t_H.$2N_4();
                        Mscrm.ReadFormUtilities.openInSameFrame(3, $v_4);
                        Mscrm.InlineEditDataService.refreshGridOnStateChange();
                        return true
                    }
                    return false
                },
                function($p1_0) {
                    $$t_I.$9_4 = false;
                    return false
                })
        } else {
            var $$t_J = this, $$t_K = this;
            Mscrm.OpportunityPageHandler.$4P($p2,
                $p5,
                $p4,
                $p3,
                $p1,
                function($p1_0) {
                    var $v_5 = Mscrm.InlineEditUtilities.getEntityReference($p1_0), $v_6 = $v_5.Id;
                    $$t_J.$2N_4();
                    Mscrm.ReadFormUtilities.openInSameFrame(3, $v_6);
                    Mscrm.InlineEditDataService.refreshGridOnStateChange();
                    return true
                },
                function($p1_0) {
                    $$t_K.$9_4 = false;
                    return false
                })
        }
    },
    $3U_4: function($p0, $p1, $p2, $p3, $p4, $p5) {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        $p5.val = "";
        $p2.val = "";
        $p1.val = "";
        if ($p0 === 1 && this.$A_4.ValidStatusReasonOptions.length === 1
        ) $p1.val = this.$A_4.ValidStatusReasonOptions[0].Value.toString();
        else if ($p0 === 2 && this.$J_4.ValidStatusReasonOptions.length === 1
        ) $p1.val = this.$J_4.ValidStatusReasonOptions[0].Value.toString();
        if (1 === $p0) {
            if (!isNullOrEmptyString(this.$G_4.get_dataContext().get_editValue()
                .trim()))
                $p5.val = Mscrm.NumberUtility.locStringToFloat(this.$G_4.get_dataContext().get_editValue()).toString();
            if (!isNullOrEmptyString(this.$O_4.get_dataContext().get_editValue()
                .trim()))
                $p2.val = FormatUtcDate(Mscrm.DateTimeUtility.parseDate(this.$O_4.get_dataContext().get_editValue()));
            $p3.val = this.$a_4.get_dataContext().get_editValue();
            if (isNullOrEmptyString($p1.val)) $p1.val = this.$j_4.get_dataContext().get_editValue()
        } else {
            if (!isNullOrEmptyString(this.$F_4.get_dataContext().get_editValue()
                .trim()))
                $p5.val = Mscrm.NumberUtility.locStringToFloat(this.$F_4.get_dataContext().get_editValue()).toString();
            if (!isNullOrEmptyString(this.$L_4.get_dataContext().get_editValue()
                .trim()))
                $p2.val = FormatUtcDate(Mscrm.DateTimeUtility.parseDate(this.$L_4.get_dataContext().get_editValue()));
            $p3.val = this.$Y_4.get_dataContext().get_editValue();
            if (isNullOrEmptyString($p1.val)) $p1.val = this.$i_4.get_dataContext().get_editValue()
        }
        $p4.val = this.$25_4(5)
    },
    $2Z_4: function() {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        var $v_0 = this.$25_4(1), $v_1 = "";
        if (!isNullOrEmptyString($v_0)) {
            var $v_3 = this.$1g_4(this.$A_4.RevenuePrecision);
            $v_1 = Mscrm.NumberUtility.addFormatting(Number.parseInvariant($v_0.toString()), $v_3)
        }
        this.$G_4.get_dataContext().set_editValue($v_1);
        var $v_2 = Mscrm.DateTimeUtility.today();
        this.$O_4.get_dataContext().set_editValue(Mscrm.DateTimeUtility.formatDate($v_2));
        this.$F_4.get_dataContext().set_editValue($v_1);
        this.$L_4.get_dataContext().set_editValue(Mscrm.DateTimeUtility.formatDate($v_2))
    },
    $1g_4: function($p0) {
        Mscrm.InlineEditInitializerUtility.initializeEditViewsForAttributeIds(["estimatedvalue"]);
        var $v_0 = $P_CRM("#header_estimatedvalue_i");
        if (!IsNull($v_0) && !isNullOrEmptyString($v_0.attr("acc"))) return parseInt($v_0.attr("acc"));
        $v_0 = $P_CRM("#estimatedvalue_i");
        if (!IsNull($v_0) && !isNullOrEmptyString($v_0.attr("acc"))) return parseInt($v_0.attr("acc"));
        return $p0
    },
    $1c_4: function($p0) {
        if ($p0 === 1)
            return this.$G_4.get_isValid() &&
                this.$O_4.get_isValid() &&
                this.$a_4.get_isValid() &&
                !isNullOrEmptyString(this.$G_4.get_dataContext().get_editValue().trim()) &&
                !isNullOrEmptyString(this.$O_4.get_dataContext().get_editValue().trim());
        else {
            this.$h_4.blur();
            return this.$F_4.get_isValid() &&
                this.$L_4.get_isValid() &&
                this.$h_4.get_isValid() &&
                this.$Y_4.get_isValid() &&
                !isNullOrEmptyString(this.$F_4.get_dataContext().get_editValue().trim()) &&
                !isNullOrEmptyString(this.$L_4.get_dataContext().get_editValue().trim())
        }
    },
    $2Y_4: function() {
        var $v_0 = $P_CRM("#won-revenue");
        $v_0 = $v_0.find(".ms-crm-CurrencySymbol-Refresh");
        $v_0.children().first().text(this.$1L_4());
        var $v_1 = $P_CRM("#lost-revenue");
        $v_1 = $v_1.find(".ms-crm-CurrencySymbol-Refresh");
        $v_1.children().first().text(this.$1L_4())
    },
    $25_4: function($p0) {
        var $v_0 = "";
        switch ($p0) {
        case 1:
            $v_0 = "estimatedvalue";
            break;
        case 5:
            $v_0 = "name";
            break;
        default:
            return ""
        }
        if ($v_0.length > 0) {
            Mscrm.InlineEditInitializerUtility.initializeEditViewsForAttributeIds([$v_0]);
            if (!IsNull(Mscrm.InlineEditDataService.get_formEntity().get_attributes().get($v_0)) &&
                !IsNull(Mscrm.InlineEditDataService.get_formEntity().get_attributes().get($v_0)
                    .get_value()))
                return Mscrm.InlineEditDataService.get_formEntity().get_attributes().get($v_0).get_value()
        }
        return ""
    },
    $24_4: function($p0) {
        var $v_0 = this.$3W_4($p0), $v_1, $v_2 = null;
        if ($p0 === 1) {
            $v_2 = this.$A_4.ValidStatusReasonOptions;
            $v_1 = "closeAsWon_flyOut"
        } else {
            $v_2 = this.$J_4.ValidStatusReasonOptions;
            $v_1 = "closeAsLost_flyOut"
        }
        var $v_3 = new Array(5);
        $v_3[0] = String.format("#{0}-reason", $v_0);
        $v_3[1] = String.format("#{0}-closedate", $v_0);
        $v_3[2] = String.format("#{0}-revenue", $v_0);
        $v_3[3] = String.format("#{0}-competitor", $v_0);
        $v_3[4] = String.format("#{0}-description", $v_0);
        var $v_4 = $P_CRM($v_3[0]).children().first();
        if ($v_2.length === 1) {
            $v_4.addClass("won-lost-statusreason-label");
            $v_4.text($v_2[0].Label);
            $v_4.attr("defaultvalue", $v_2[0].Value.toString())
        } else {
            $v_4.addClass("won-lost-inline-edit-control");
            if ($p0 === 1)
                this.$j_4 = Mscrm.InlineControlFactory
                    .createInlinePicklistControlForDom($v_4, "_" + $v_3[0], $v_2, $v_1);
            else
                this.$i_4 = Mscrm.InlineControlFactory
                    .createInlinePicklistControlForDom($v_4, "_" + $v_3[0], $v_2, $v_1)
        }
        var $v_5 = $P_CRM($v_3[1]).children().first();
        if (this.$1Q_4($v_5))
            if ($p0 === 1)
                this.$O_4 = Mscrm.InlineControlFactory
                    .createInlineDateTimeControlForDom($v_5, "_" + $v_3[1], "date", 1, null, $v_1);
            else
                this.$L_4 = Mscrm.InlineControlFactory
                    .createInlineDateTimeControlForDom($v_5, "_" + $v_3[1], "date", 1, null, $v_1);
        var $v_6 = $P_CRM($v_3[2]).children().first();
        if (this.$1Q_4($v_6)) {
            var $v_9;
            if ($p0 === 1) {
                $v_9 = this.$1g_4(this.$A_4.RevenuePrecision);
                this.$G_4 = Mscrm.InlineControlFactory
                    .createInlineMoneyControlForDom($v_6,
                        "_" + $v_3[2],
                        this.$A_4.MinRevenueValue,
                        this.$A_4.MaxRevenueValue,
                        $v_9,
                        this.$1L_4(),
                        $v_1,
                        2,
                        $P_CRM("#won-revenue-label").text())
            } else {
                $v_9 = this.$1g_4(this.$J_4.RevenuePrecision);
                this.$F_4 = Mscrm.InlineControlFactory
                    .createInlineMoneyControlForDom($v_6,
                        "_" + $v_3[2],
                        this.$A_4.MinRevenueValue,
                        this.$A_4.MaxRevenueValue,
                        $v_9,
                        this.$1L_4(),
                        $v_1,
                        2,
                        $P_CRM("#lost-revenue-label").text())
            }
        }
        var $v_7 = $P_CRM($v_3[3]).children().first();
        if (this.$1Q_4($v_7))
            this.$h_4 = Mscrm.InlineControlFactory
                .createInlineLookupControlForDomWithDisableState($v_7,
                    "_" + $v_3[3],
                    "competitor",
                    "50299B9B-1092-451C-A19D-CCCF16AE2EA8",
                    !this.$J_4.HasPermissionsToAssignCompetitor,
                    $v_1);
        var $v_8 = $P_CRM($v_3[4]).children().first();
        if (this.$1Q_4($v_8))
            if ($p0 === 1)
                this.$a_4 = Mscrm.InlineControlFactory
                    .createInlineTextAreaControlForDom($v_8, "_" + $v_3[4], this.$A_4.MaxDescriptionLength, $v_1);
            else
                this.$Y_4 = Mscrm.InlineControlFactory
                    .createInlineTextAreaControlForDom($v_8, "_" + $v_3[4], this.$A_4.MaxDescriptionLength, $v_1);
        this.$5F_4($v_0)
    },
    $2d_4: function() {
        !IsNull(this.$j_4) && this.$V_4(this.$j_4.get_editView().get_editElementId());
        this.$V_4(this.$G_4.get_editView().get_editElementId());
        this.$V_4(this.$O_4.get_editView().get_editElementId());
        this.$V_4(this.$a_4.get_editView().get_editElementId());
        !IsNull(this.$i_4) && this.$V_4(this.$i_4.get_editView().get_editElementId());
        this.$V_4(this.$F_4.get_editView().get_editElementId());
        this.$V_4(this.$L_4.get_editView().get_editElementId());
        this.$V_4(this.$h_4.get_editView().get_editElementId());
        this.$V_4(this.$Y_4.get_editView().get_editElementId())
    },
    $V_4: function($p0) {
        var $v_0 = $P_CRM("#" + $p0);
        $v_0.parents(".ms-crm-Inline-Edit").first().bind("state-validated", this.$$d_$1z_4);
        $v_0.parents(".ms-crm-Inline-Edit").first().keydown(this.$$d_$3V_4)
    },
    $2N_4: function() {
        !IsNull(this.$j_4) && this.$X_4(this.$j_4.get_editView().get_editElementId());
        this.$X_4(this.$G_4.get_editView().get_editElementId());
        this.$X_4(this.$O_4.get_editView().get_editElementId());
        this.$X_4(this.$a_4.get_editView().get_editElementId());
        !IsNull(this.$i_4) && this.$X_4(this.$i_4.get_editView().get_editElementId());
        this.$X_4(this.$F_4.get_editView().get_editElementId());
        this.$X_4(this.$L_4.get_editView().get_editElementId());
        this.$X_4(this.$h_4.get_editView().get_editElementId());
        this.$X_4(this.$Y_4.get_editView().get_editElementId())
    },
    $X_4: function($p0) {
        var $v_0 = $P_CRM("#" + $p0);
        $v_0.parents(".ms-crm-Inline-Edit").first().unbind("state-validated", this.$$d_$1z_4)
    },
    $1z_4: function($p0) {
        var $v_0 = arguments[1], $v_1 = null, $v_2 = "";
        if (this.$9_4) {
            $v_1 = $P_CRM("#closeAsWon-confirm");
            $v_2 = this.$G_4.get_dataContext().get_editValue()
        } else if (this.$C_4) {
            $v_1 = $P_CRM("#closeAsLost-confirm");
            $v_2 = this.$F_4.get_dataContext().get_editValue()
        }
        if (!IsNull($v_1) && isNullOrEmptyString($v_2)) this.$17_4($v_1, false, window.LOCID_REVENUECANNOTBENULL);
        else if (!IsNull($v_1) && !IsNull($v_0) && !$v_0.isValid) this.$17_4($v_1, false, $v_0.errorText);
        else !IsNull($v_1) && !IsNull($v_0) && $v_0.isValid && !isNullOrEmptyString($v_2) && this.$17_4($v_1, true, "")
    },
    $17_4: function($p0, $p1, $p2) {
        if ($p1) {
            $p0.removeAttr("disabled");
            $p0.removeAttr("title")
        } else {
            $p0.attr("disabled", "disabled");
            $p0.attr("title", $p2)
        }
    },
    $5F_4: function($p0) {
        var $v_0 = String.format("#_{0}_description_i", $p0), $v_1 = $P_CRM($v_0);
        $v_1 && $v_1.height("100px")
    },
    $1L_4: function() {
        var $v_0 = $P_CRM(".ms-crm-CurrencySymbol-Refresh");
        if ($v_0 && $v_0.length > 0) return XUI.Html.GetText($v_0[0]);
        else return this.$A_4.BaseCurrencySymbol
    },
    $1Q_4: function($p0) {
        if (!IsNull($p0) && $p0.length > 0) return true;
        else return false
    },
    $3W_4: function($p0) {
        if ($p0 === 1) return "won";
        else return "lost"
    },
    $4z_4: function() {
        var $v_0 = this.$27_4(1), $v_1 = $P_CRM(String.format("<div id='{0}' ></div>", "closeAsWon"));
        $v_1.append($v_0);
        this.$3_4.setContent($v_1);
        this.$3_4.set_position("bottom");
        this.$3_4.get_options().set_height(434);
        this.$3_4.get_options().set_width(332);
        this.$3_4.get_options().set_modal(true);
        this.$3_4.get_options().set_letjQueryHandleTabbing(true);
        $P_CRM("#closeAsWon_flyOut").keydown(this.$$d_$3V_4);
        this.$3_4.get_options().set_showTitlePane(false);
        this.$24_4(1)
    },
    $3V_4: function($p0) {
        switch ($p0.which) {
        case 27:
            if (this.$9_4) {
                this.$3_4.hide();
                this.$9_4 = false;
                this.$d_4(1);
                $p0.stopImmediatePropagation()
            }
            if (this.$C_4) {
                this.$2_4.hide();
                this.$C_4 = false;
                this.$d_4(2);
                $p0.stopImmediatePropagation()
            }
            $p0.stopImmediatePropagation();
            break;
        case 13:
            if (document.activeElement.id === "closeAsWon-cancel") {
                this.closeAsWon();
                this.$d_4(1);
                $p0.stopImmediatePropagation()
            }
            if (document.activeElement.id === "closeAsLost-cancel") {
                this.closeAsLost();
                this.$d_4(2);
                $p0.stopImmediatePropagation()
            }
            $p0.stopImmediatePropagation();
            break;
        case 127:
        case 46:
        case 8:
            this.$1z_4($p0);
            $p0.stopImmediatePropagation();
            break
        }
    },
    $d_4: function($p0) {
        var $v_0 = null;
        if ($p0 === 1) $v_0 = $P_CRM("#closeAsWon");
        else $v_0 = $P_CRM("#closeAsLost");
        if (Mscrm.Utilities.isIE()) $v_0.focus();
        else $v_0.find("a").focus()
    },
    $4y_4: function() {
        var $v_0 = this.$27_4(2), $v_1 = $P_CRM(String.format("<div id='{0}' ></div>", "closeAsLost"));
        $v_1.keydown(this.$$d_$3V_4);
        $v_1.append($v_0);
        this.$2_4.setContent($v_1);
        this.$2_4.set_position("bottom");
        this.$2_4.get_options().set_height(436);
        this.$2_4.get_options().set_width(332);
        this.$2_4.get_options().set_modal(true);
        this.$2_4.get_options().set_letjQueryHandleTabbing(true);
        $P_CRM("#closeAsLost_flyOut").keydown(this.$$d_$3V_4);
        this.$2_4.get_options().set_showTitlePane(false);
        this.$24_4(2)
    },
    $27_4: function($p0) {
        switch ($p0) {
        case 2:
            return this.$J_4.DivLayout;
        case 1:
            return this.$A_4.DivLayout
        }
        return ""
    },
    $1N_4: function() {
        var $v_0 = this.$I_4.DivLayout;
        Mscrm.RefreshPageHandler.prototype.setDeleteFlyoutDialog.call(this, $v_0)
    }
};
Mscrm.OpportunityPageHandler.OpportunityCommandBarAction = function() {};
Mscrm.OpportunityPageHandler.OpportunityCommandBarAction.prototype = { none: 0, won: 1, lost: 2 };
Mscrm.OpportunityPageHandler.OpportunityCommandBarAction
    .registerEnum("Mscrm.OpportunityPageHandler.OpportunityCommandBarAction", false);
Mscrm.CampaignActivityPageHandler = function() { Mscrm.CampaignActivityPageHandler.initializeBase(this) };
Mscrm.CampaignActivityPageHandler.prototype = {
    getCampaignActivityAction: function($p0, $p1) { return this.$5I_4(this.$3Z_4($p0, $p1), $p0) },
    $3Z_4: function($p0, $p1) {
        var $v_0 = "";
        if (Mscrm.SessionInfo.isOnline() && !$p1 && window.UserHasCreateActivityPrivilege)
            switch ($p0) {
            case 3:
                $v_0 = "listletter";
                break;
            case 7:
                $v_0 = "listemail";
                break;
            case 1:
                $v_0 = "listphone";
                break;
            case 5:
                $v_0 = "listfax";
                break;
            case 2:
                $v_0 = "listappointment";
                break;
            case 4:
                $v_0 = this.$1f_4("letterviamailmerge");
                break;
            case 6:
                $v_0 = this.$1f_4("faxviamailmerge");
                break;
            case 8:
                $v_0 = this.$1f_4("emailviamailmerge");
                if (!window.IsMarketingExecutionEnabled) $v_0 = "emailviamailmergeoff";
                break;
            default:
                $v_0 = "";
                break
            }
        return $v_0
    },
    $1f_4: function($p0) {
        if (Xrm.Page.context.client.getClient() === "Outlook")
            if (window.UserHasMailMergePrivilege) return $p0;
            else return "invalidchannel";
        else return ""
    },
    $5I_4: function($p0, $p1) {
        if (!isNullOrEmptyString($p0)) return $p0;
        if (!$p1) $p0 = "nochannel";
        else if ($p1 === 4 || $p1 === 6 || $p1 === 8) $p0 = "invalidmailmergechannel";
        else $p0 = "invalidchannel";
        return $p0
    }
};
Mscrm.CampaignPageHandler = function() { Mscrm.CampaignPageHandler.initializeBase(this) };
Mscrm.CampaignPageHandler.prototype = {
    postInlineInitialization: function() {
        Mscrm.RefreshPageHandler.prototype.postInlineInitialization.call(this);
        this.$3m_4()
    },
    $3m_4: function() {
        if (this.get_primaryEntity().get_isNew()) {
            var $v_0 = false, $v_1 = "extraqs", $v_2 = "template", $v_3 = Xrm.Page.context.getQueryStringParameters();
            if ($v_1 in $v_3) {
                var $v_4 = $v_3[$v_1].toString();
                $v_0 = $v_4.indexOf("template=1") > 0
            } else if ($v_2 in $v_3) {
                var $v_5 = $v_3[$v_2].toString();
                $v_0 = $v_5 === "1" ? true : false
            }
            if ($v_0) {
                Mscrm.RefreshPageHandler.get_uiManager().set_formTitle(window.LOCID_CAMPAIGN_NEWTEMPLATE);
                var $v_6 = "istemplate",
                    $v_7 = String.format("header_{0}", $v_6),
                    $v_8 = Xrm.Page.ui.controls.get($v_7),
                    $v_9 = Xrm.Page.getAttribute($v_6);
                if (!IsNull($v_9) && !IsNull($v_8)) {
                    $v_8.setDisabled(false);
                    $v_9.setValue(1);
                    $v_8.setDisabled(true)
                }
            }
        }
    }
};
Mscrm.QueuePageHandler = function() { Mscrm.QueuePageHandler.initializeBase(this) };
Mscrm.QueuePageHandler.$5D = function($p0) {
    try {
        !IsNull(Mscrm.QueuePageHandler.$z) &&
            Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(Mscrm.QueuePageHandler.$z)
    } catch ($$e_1) {
    }
};
Mscrm.QueuePageHandler.prototype = {
    postPageRender: function() {
        if (this.isRefreshForm()) {
            var $$t_0 = this;
            Mscrm.QueuePageHandler.$z = function() { refreshGrid("queuemembersgrid") };
            Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(Mscrm.QueuePageHandler.$z);
            $addHandler(window, "unload", Mscrm.QueuePageHandler.$5D);
            Mscrm.RefreshPageHandler.prototype.postPageRender.call(this)
        }
    }
};
Mscrm.QuoteCommandHandler = function() {
    this.$$d_$4k_3 = Function.createDelegate(this, this.$4k_3);
    this.$$d_$4j_3 = Function.createDelegate(this, this.$4j_3);
    Mscrm.QuoteCommandHandler.initializeBase(this)
};
Mscrm.QuoteCommandHandler.prototype = {
    $E_3: null,
    get_commandSucceedCallback: function() { return this.$E_3 },
    set_commandSucceedCallback: function($p0) {
        this.$E_3 = $p0;
        return $p0
    },
    buildCommandXml: function() {
        switch (this.$H_2) {
        case 28:
            return this.$1a_3();
        case 17:
            this.$E_3 = this.$$d_$4j_3;
            return this.$3I_3();
        case 18:
            this.$E_3 = this.$$d_$4j_3;
            return this.createCommandWithDefaultParameter();
        case 25:
            this.$E_3 = this.$$d_$4k_3;
            return this.$3J_3();
        case 24:
            return this.$3K_3();
        default:
            return this.createCommandWithDefaultParameter()
        }
    },
    $1a_3: function() {
        var $v_0 = this.$0_2["OpportunityID"],
            $v_1 = "",
            $v_2 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><gpOpportunityId>{3}</gpOpportunityId><dataxml>{4}</dataxml></Input>";
        $v_1 = String.format($v_2,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_1
    },
    $4j_3: function($p0) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.Id;
            Xrm.Utility.openEntityForm("salesorder", $v_1, null)
        }
        Mscrm.InlineEditDataService.refreshGridOnStateChange();
        return true
    },
    $4k_3: function($p0) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (!IsNull($v_0)) {
            var $v_2 = $v_0.Id;
            Xrm.Utility.openEntityForm("quote", $v_2, null)
        }
        Mscrm.InlineEditDataService.refreshGridOnStateChange();
        var $v_1 = this.$0_2["CloseOpp"] ? this.$0_2["CloseOpp"] : false;
        if ($v_1) {
            var windowOpener = window.top.opener;
            windowOpener != null &&
                windowOpener.Xrm.Page.data != null &&
                windowOpener.Xrm.Page.data.entity != null &&
                windowOpener.Xrm.Page.data.entity.getEntityName() == Mscrm.InternalUtilities.EntityNames.Opportunity &&
                windowOpener.Xrm.Page.data.refresh(true)
        }
        return true
    },
    $3I_3: function() {
        var $v_0 = "",
            $v_1 = this.$0_2["NewStatusCode"],
            $v_2 = this.$0_2["CloseDate"],
            $v_3 = this.$0_2["Description"],
            $v_4 = this.$0_2["CloseQpportunity"],
            $v_5 = this.$0_2["UseRevenue"],
            $v_6 = this.$0_2["ActualRevenue"],
            $v_7 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><aqNewStatus>{3}</aqNewStatus><aqCloseDate>{4}</aqCloseDate><aqDescription>{5}</aqDescription><aqCloseOpportunity>{6}</aqCloseOpportunity><aqUseGivenRevenue>{7}</aqUseGivenRevenue><aqActualRevenue>{8}</aqActualRevenue><dataxml>{9}</dataxml></Input>";
        $v_0 = String.format($v_7,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_1),
            CrmEncodeDecode.CrmXmlEncode($v_2),
            CrmEncodeDecode.CrmXmlEncode($v_3),
            CrmEncodeDecode.CrmXmlEncode($v_4),
            CrmEncodeDecode.CrmXmlEncode($v_5),
            CrmEncodeDecode.CrmXmlEncode($v_6),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_0
    },
    $3J_3: function() {
        var $v_0 = this.$0_2["NewStatus"],
            $v_1 = this.$0_2["CloseDate"],
            $v_2 = "<opportunityclose/>",
            $v_3 = 0,
            $v_4 = 0,
            $v_5 = this.$0_2["ReviseQuote"],
            $v_6 = this.$0_2["CloseOpp"],
            $v_7 = this.$0_2["Description"];
        if ($v_6) {
            $v_3 = this.$0_2["OpportunityStatus"];
            $v_4 = this.$0_2["OpportunityState"];
            $v_2 = this.$0_2["ActivityXml"]
        }
        var $v_8 = this.get_primaryEntity().get_recordId().replace("{", "").replace("}", ""),
            $v_9 = "",
            $v_A =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><cqNewStatus>{3}</cqNewStatus><cqCloseDate>{4}</cqCloseDate><cqActivityXml>{5}</cqActivityXml><cqReviseQuote>{6}</cqReviseQuote><cqCloseOpp>{7}</cqCloseOpp><coDescription>{8}</coDescription><cqOppStatus>{9}</cqOppStatus><cqOppState>{10}</cqOppState><dataxml>{11}</dataxml></Input>";
        $v_9 = String.format($v_A,
            CrmEncodeDecode.CrmXmlEncode($v_8),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0.toString()),
            CrmEncodeDecode.CrmXmlEncode($v_1),
            $v_2,
            CrmEncodeDecode.CrmXmlEncode($v_5.toString()),
            CrmEncodeDecode.CrmXmlEncode($v_6.toString()),
            CrmEncodeDecode.CrmXmlEncode($v_7),
            CrmEncodeDecode.CrmXmlEncode($v_3.toString()),
            CrmEncodeDecode.CrmXmlEncode($v_4.toString()),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_9
    },
    $3K_3: function() {
        var $v_0 = this.$0_2,
            $v_1 = $v_0,
            $v_2 = "",
            $v_3 = this.get_primaryEntity().get_recordId().replace("{", "").replace("}", ""),
            $v_4 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><crCloseQuote>{3}</crCloseQuote><dataxml>{5}</dataxml></Input>";
        $v_2 = String.format($v_4,
            CrmEncodeDecode.CrmXmlEncode($v_3),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_1.toString()),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_2
    }
};
Mscrm.MoreCommandsMenu = function(parentElementId) {
    this.$$d_$23_0 = Function.createDelegate(this, this.$23_0);
    this.$11_0 = "#" + parentElementId
};
Mscrm.MoreCommandsMenu.$2C = function($p0) {
    var $v_0 = $P_CRM($p0.target);
    if (!$v_0.hasClass("moreMenuUnselected")) {
        $v_0 = $v_0.parents("li");
        if ($v_0.length !== 1) return
    }
    var $v_1 = String.format(".{0}", "moreMenuSelected"), $v_2 = $P_CRM($v_1);
    Mscrm.MoreCommandsMenu.$1O($v_0, $v_2)
};
Mscrm.MoreCommandsMenu.$1O = function($p0, $p1) {
    $p1.addClass("moreMenuUnselected");
    $p1.removeClass("moreMenuSelected");
    $p0.removeClass("moreMenuUnselected");
    $p0.addClass("moreMenuSelected");
    $p0.find("a").focus()
};
Mscrm.MoreCommandsMenu.prototype = {
    $p_0: false,
    $5_0: null,
    $e_0: null,
    $D_0: false,
    $11_0: null,
    $1E_0: null,
    $19_0: null,
    $1D_0: 0,
    $23_0: function($p0) {
        switch ($p0.which) {
        case 13:
            var $v_0 = $P_CRM($p0.target);
            $v_0.click();
            break;
        case 9:
            if ($p0.target.tagName === "A" || $p0.target.tagName === "LI") {
                $p0.preventDefault();
                this.$1M_0($p0)
            }
            break;
        case 38:
        case 40:
            ($p0.target.tagName === "A" || $p0.target.tagName === "LI") && this.$1M_0($p0);
            break;
        case 27:
            this.$5_0.hide();
            this.$p_0 = false;
            var $$t_2 = this;
            window.setTimeout(function() { $P_CRM($$t_2.$11_0).children(":first-child").focus() }, 1);
            break
        }
        $p0.stopImmediatePropagation()
    },
    $1M_0: function($p0) {
        var $v_0 = String.format(".{0}", "moreMenuSelected"), $v_1 = $P_CRM($v_0), $v_2 = null;
        if ($p0.which === 40 || $p0.which === 9 && !$p0.shiftKey) {
            $v_2 = $v_1.next();
            if (!$v_2.length) $v_2 = $P_CRM("#moreCommandsList").children(":first-child");
            $v_2.focus()
        } else if ($p0.which === 38 || $p0.which === 9 && $p0.shiftKey) {
            $v_2 = $v_1.prev();
            if (!$v_2.length) $v_2 = $P_CRM("#moreCommandsList").children(":last-child");
            $v_2.focus()
        }
        $v_2 &&
            ($v_2.hasClass("ms-crm-RefreshForm-MoreMenu") || $v_2.hasClass("actiondropdownitemcontent")) &&
            Mscrm.MoreCommandsMenu.$1O($v_2, $v_1)
    },
    get_position: function() { return isNullOrEmptyString(this.$1E_0) ? "bottom" : this.$1E_0 },
    set_position: function(value) {
        this.$1E_0 = value;
        return value
    },
    get_dialog: function() { return this.$5_0 },
    set_dialog: function(value) {
        this.$5_0 = value;
        return value
    },
    processAndShowMenu: function() {
        this.$3o_0();
        if (this.$p_0) {
            this.$5_0.hide();
            this.$p_0 = false;
            return
        }
        var $v_0 = this.$3a_0();
        this.$3F_0($v_0);
        this.$5_0.show($P_CRM(this.$11_0), null);
        this.$1D_0 = this.$5_0.get_jQueryDialog().dialog("open").height();
        var $v_1 = $P_CRM("#footerActivatedState_text").offset(),
            $v_2 = $P_CRM(this.$11_0).offset(),
            $v_3 = $v_1.top - $v_2.top;
        $v_3 < this.$1D_0 &&
            this.$5_0.get_jQueryDialog().dialog("option",
                "position",
                [this.$5_0.get_dialogLeft(), $v_2.top - this.$1D_0]);
        var $v_4 = $P_CRM("#moreCommandsList").children(":first-child");
        $v_4.addClass("moreMenuSelected");
        $v_4.removeClass("moreMenuUnselected");
        $v_4.focus();
        $P_CRM("#moreCommandsList IMG").removeClass("moreMenuUnselected");
        this.$p_0 = true
    },
    $3o_0: function() {
        if (this.$D_0) return;
        this.$5_0 = new Mscrm.FlyOutDialog;
        this.$5_0.get_options().set_showButtonPane(false);
        this.$5_0.get_options().set_modal(true);
        this.$5_0.get_options().set_closeOnEscape(true);
        this.$5_0.set_shouldDisposeContent(false);
        var $$t_2 = this;
        this.$5_0.bind("flyout-canceled", function($p1_0) { $$t_2.$2B_0() });
        var $$t_3 = this;
        this.$5_0.bind("flyout-closed", function($p1_0) { $$t_3.$2B_0() });
        this.$D_0 = true
    },
    $3F_0: function($p0) {
        var $v_0 = $P_CRM("<div class='ui-flyout-dialog-moreCommands'></div>"),
            $v_1 = $P_CRM("<ul id='moreCommandsList'></ul>");
        $v_1.append($p0);
        $v_0.append($v_1);
        this.$19_0 = $v_0;
        this.$5_0.setContent($v_0);
        this.$e_0 = $P_CRM("#moreCommandsList");
        this.$e_0.keydown(this.$$d_$23_0);
        this.$e_0.mouseover(Mscrm.MoreCommandsMenu.$2C);
        var $$t_7 = this;
        this.$e_0.find("li").each(function($p1_0, $p1_1) {
            var $v_2 = $P_CRM($p1_1), $v_3 = $v_2.attr("onclick");
            $v_2.click(function() {
                $$t_7.$5_0.hide();
                window.setTimeout($v_3, 0)
            });
            $v_2.prop("onclick", null)
        });
        this.$5_0.set_position(this.get_position());
        this.$5_0.get_options().set_width(200);
        this.$5_0.set_actionDropDownHeightAdjustment(0);
        this.$5_0.get_options().set_minHeight(10);
        this.$5_0.get_options().set_showTitlePane(false)
    },
    $3a_0: function() {
        var $v_0 = $P_CRM("#AddActionButton_Menu");
        return $v_0.html()
    },
    $2B_0: function() {
        this.$e_0.unbind("keydown");
        this.$e_0.unbind("mouseover");
        this.$p_0 = false;
        this.$D_0 = false;
        this.$5_0.dispose();
        this.$5_0 = null;
        this.$19_0.remove();
        this.$19_0 = null
    }
};
Mscrm.RefreshPageCommand = function() {
    this.$$d_defaultCommandErrorCallback = Function.createDelegate(this, this.defaultCommandErrorCallback);
    this.$$d_defaultCommandSucceedCallback = Function.createDelegate(this, this.defaultCommandSucceedCallback);
    Mscrm.RefreshPageCommand.initializeBase(this)
};
Mscrm.RefreshPageCommand.prototype = {
    $0_2: null,
    get_commandData: function() { return this.$0_2 },
    get_commandErrorCallback: function() { return null },
    set_commandErrorCallback: function(value) {
        value = null;
        return value
    },
    $H_2: 0,
    get_commandNumber: function() { return this.$H_2 },
    get_commandSucceedCallback: function() { return null },
    set_commandSucceedCallback: function(value) {
        value = null;
        return value
    },
    $6_2: "",
    get_entityFormData: function() { return this.$6_2 },
    set_entityFormData: function(value) {
        this.$6_2 = value;
        return value
    },
    get_primaryEntity: function() { return Mscrm.InlineEditDataService.get_formEntity() },
    buildCommandXml: function() {
        switch (this.$H_2) {
        case 49:
            return this.$37_2();
        default:
            return this.createCommandWithDefaultParameter()
        }
    },
    executeCommand: function(commandNumber, commandData) {
        if (!IsNull(this.get_primaryEntity())) {
            this.$0_2 = commandData;
            this.$H_2 = commandNumber;
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            var $v_0 = "", $$t_4, $$t_5;
            if (!($$t_5 = Mscrm.InlineEditDataService
                .isValidFormData(null, commandNumber, $$t_4 = { val: $v_0 }), $v_0 = $$t_4.val, $$t_5)) return;
            this.$6_2 = $v_0;
            var $v_1 = this.buildCommandXml();
            if (this.get_commandSucceedCallback())
                Mscrm.InlineEditDataService.get_dataService().set_succeedCallback(this.get_commandSucceedCallback());
            else
                Mscrm.InlineEditDataService.get_dataService()
                    .set_succeedCallback(this.$$d_defaultCommandSucceedCallback);
            if (this.get_commandErrorCallback())
                Mscrm.InlineEditDataService.get_dataService().set_errorCallback(this.get_commandErrorCallback());
            else Mscrm.InlineEditDataService.get_dataService().set_errorCallback(this.$$d_defaultCommandErrorCallback);
            if ((203 === commandNumber || 40 === commandNumber) && isOutlookHostedWindow()
            ) Mscrm.InlineEditDataService.execute(commandNumber, $v_1, true);
            else if (66 === commandNumber) Mscrm.InlineEditDataService.execute(commandNumber, $v_1, false, true);
            else Mscrm.InlineEditDataService.execute(commandNumber, $v_1)
        }
    },
    createCommandWithDefaultParameter: function() {
        var $v_0 = "", $v_1 = "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><dataxml>{3}</dataxml></Input>";
        $v_0 = String.format($v_1,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_0
    },
    addToQueue: function() {
        var $v_0 = "addtoqueue", $v_1 = Mscrm.InlineEditDataService.get_formEntity();
        if (!IsNull($v_1)) {
            var $v_2 = window._etc, $v_3 = $v_1.get_recordId(), $v_4 = {};
            $v_4["action"] = $v_0;
            $v_4["objectType"] = $v_2;
            $v_4["recordId"] = $v_3;
            Mscrm.FormAction.handleActionMenuClick($v_4)
        }
    },
    defaultCommandErrorCallback: function(errorData) {
        if (!IsNull(errorData["_error"])) {
            var $v_0 = errorData["_error"];
            Mscrm.ErrorStatusControl.showCrmMessage(Mscrm.ErrorInformation
                .createErrorInfo($v_0.Code, $v_0.Description, $v_0.SerializedException));
            return true
        }
        return false
    },
    defaultCommandSucceedCallback: function(jsonData) { return this.$2M_2(jsonData) },
    $2M_2: function($p0) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (IsNull($v_0)) return false;
        var $v_1 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[Mscrm.InlineEditDataService.get_formEntity()
            .get_typeName()];
        Mscrm.ReadFormUtilities.forceReload($v_1, $v_0.Id, Mscrm.InlineEditDataService.get_formId());
        return true
    },
    $37_2: function() {
        var $v_0 = "",
            $v_1 = this.$0_2["OwnerId"],
            $v_2 = this.$0_2["OwnerType"],
            $v_3 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><ownerId>{3}</ownerId><ownerType>{4}</ownerType><dataxml>{5}</dataxml></Input>";
        $v_0 = String.format($v_3,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_1),
            CrmEncodeDecode.CrmXmlEncode($v_2),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_0
    }
};
Mscrm.RefreshPageCommandHandler = function() {};
Mscrm.RefreshPageCommandHandler.executeCommand = function(commandNumber, commandData) {
    var $v_0;
    switch (commandNumber) {
    case 44:
    case 57:
    case 27:
    case 52:
    case 53:
        (new Mscrm.InvoicePageHandler).executeCommand(commandNumber, commandData);
        break;
    case 67:
        $v_0 = Mscrm.InlineEditDataService.get_dataService()
            .validateAndFireSaveEvents(7, Mscrm.InlineEditDataService.get_formEntity());
        if ($v_0.get_code() === 5 || $v_0.get_code() === 1) {
            Xrm.Page.data.setFormDirty(false);
            (new Mscrm.EmailCommandHandler).executeCommand(commandNumber, commandData)
        }
        break;
    case 55:
        $v_0 = Mscrm.InlineEditDataService.get_dataService()
            .validateAndFireSaveEvents(55, Mscrm.InlineEditDataService.get_formEntity());
        if ($v_0.get_code() === 5 || $v_0.get_code() === 1) {
            Xrm.Page.data.setFormDirty(false);
            (new Mscrm.RefreshPageCommand).executeCommand(commandNumber, commandData)
        }
        break;
    case 17:
    case 29:
    case 25:
    case 18:
    case 24:
    case 28:
        (new Mscrm.QuoteCommandHandler).executeCommand(commandNumber, commandData);
        break;
    case 33:
    case 39:
    case 31:
    case 38:
    case 32:
    case 34:
        (new Mscrm.ContractPageHandler).executeCommand(commandNumber, commandData);
        break;
    case 37:
        (new Mscrm.ContractDetailPageHandler).executeCommand(commandNumber, commandData);
        break;
    case 49:
        (new Mscrm.RefreshPageCommand).executeCommand(commandNumber, commandData);
        break;
    case 59:
        (new Mscrm.RefreshPageCommand).addToQueue();
        break;
    case 50:
    case 51:
    case 26:
    case 56:
    case 19:
    case 43:
        (new Mscrm.SalesOrderPageHandler).executeCommand(commandNumber, commandData);
        break;
    case 40:
    case 203:
        var $v_1 = new Mscrm.IncidentPageHandler;
        $v_1.executeCommand(commandNumber, commandData);
        isOutlookHostedWindow() && $v_1.reloadAfterCaseCloseOrCancelForOutlook();
        break;
    case 260:
        (new Mscrm.IncidentPageHandler).executeCommand(commandNumber, commandData);
        break;
    case 66:
        (new Mscrm.SalesOrderPageHandler).executeCommand(commandNumber, commandData);
        break;
    case 68:
        (new Mscrm.RefreshPageCommand).executeCommand(commandNumber, commandData);
        break;
    case 6:
        Mscrm.RefreshPageCommandHandler.$3f(commandNumber, commandData);
        break;
    default:
        break
    }
};
Mscrm.RefreshPageCommandHandler.$3f = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditDataService.save(6, null, null, true);
    if ($v_0.get_success()) {
        !isNullOrEmptyString($v_0.get_recordId()) &&
            Mscrm.InlineEditDataService.get_formEntity().set_recordId($v_0.get_recordId());
        var $v_1 = Xrm.Page.data.entity.getEntityName();
        switch ($v_1) {
        case "incident":
            (new Mscrm.IncidentPageHandler).executeCommand($p0, $p1);
            break;
        default:
            break
        }
    }
};
Mscrm.RefreshPageHandler = function() {
    this.$$d_$57_3 = Function.createDelegate(this, this.$57_3);
    this.$$d_$58_3 = Function.createDelegate(this, this.$58_3);
    this.$$d_$5A_3 = Function.createDelegate(this, this.$5A_3);
    this.$$d_$4I_3 = Function.createDelegate(this, this.$4I_3);
    this.$$d_$4C_3 = Function.createDelegate(this, this.$4C_3);
    this.$$d_$4E_3 = Function.createDelegate(this, this.$4E_3);
    this.$$d_processFlyoutLayout = Function.createDelegate(this, this.processFlyoutLayout);
    this.$$d_retrieveFlyoutLayoutCallBack = Function.createDelegate(this, this.retrieveFlyoutLayoutCallBack);
    this.$$d_$3M_3 = Function.createDelegate(this, this.$3M_3);
    this.$$d_$2b_3 = Function.createDelegate(this, this.$2b_3);
    this.$$d_$4v_3 = Function.createDelegate(this, this.$4v_3);
    this.$$d_$4X_3 = Function.createDelegate(this, this.$4X_3);
    this.$$d_postInitializeProcessControl = Function.createDelegate(this, this.postInitializeProcessControl);
    this.$$d_$3t_3 = Function.createDelegate(this, this.$3t_3);
    this.$$d_$3s_3 = Function.createDelegate(this, this.$3s_3);
    this.$$d_$3r_3 = Function.createDelegate(this, this.$3r_3);
    this.$$d_$4T_3 = Function.createDelegate(this, this.$4T_3);
    this.$$d_$4B_3 = Function.createDelegate(this, this.$4B_3);
    this.$$d_$4U_3 = Function.createDelegate(this, this.$4U_3);
    this.$$d_$2f_3 = Function.createDelegate(this, this.$2f_3);
    this.$$d_$2l_3 = Function.createDelegate(this, this.$2l_3);
    this.$$d_$45_3 = Function.createDelegate(this, this.$45_3);
    this.$$d_$4Z_3 = Function.createDelegate(this, this.$4Z_3);
    this.$$d_$4R_3 = Function.createDelegate(this, this.$4R_3);
    this.$$d_$4G_3 = Function.createDelegate(this, this.$4G_3);
    this.$$d_$2G_3 = Function.createDelegate(this, this.$2G_3);
    this.$$d_$4F_3 = Function.createDelegate(this, this.$4F_3);
    this.$$d_$2F_3 = Function.createDelegate(this, this.$2F_3);
    this.$$d_$3z_3 = Function.createDelegate(this, this.$3z_3);
    this.$$d_onResize = Function.createDelegate(this, this.onResize);
    this.$$d_refreshQuickView = Function.createDelegate(this, this.refreshQuickView);
    this.$x_3 = new Array(0);
    this.$Z_3 = new Array(0);
    this.$v_3 = new Array(0);
    this.$1K_3 = -1;
    this.$1P_3 = new Mscrm.MetricsStopwatch("InitializeInlineEditControls (Full)");
    Mscrm.RefreshPageHandler.initializeBase(this);
    this.set_id("RefreshPageHandler")
};
Mscrm.RefreshPageHandler.get_instance = function() { return Mscrm.RefreshPageHandler.$g };
Mscrm.RefreshPageHandler.set_instance = function(value) {
    Mscrm.RefreshPageHandler.$g = value;
    return value
};
Mscrm.RefreshPageHandler.get_forceNavigationAway = function() { return Mscrm.RefreshPageHandler.$K };
Mscrm.RefreshPageHandler.set_forceNavigationAway = function(value) {
    Mscrm.RefreshPageHandler.$K = value;
    return value
};
Mscrm.RefreshPageHandler.populateNotifications = function(notifications) {
    var $v_0 = $find("crmNotifications");
    !IsNull($v_0) && $v_0.SetNotifications(notifications, "Server")
};
Mscrm.RefreshPageHandler.promptSaveOnMobileSafari = function(eventObject) {
    if (Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari() &&
        Mscrm.ReadFormUtilities.promptOnClose() &&
        !confirm(window.LOCID_FORMS_SAVE_CONFIRM_TITLE)) {
        eventObject.preventDefault();
        eventObject.stopPropagation();
        return false
    } else return true
};
Mscrm.RefreshPageHandler.getEntityIdFromPage = function() { return _id };
Mscrm.RefreshPageHandler.$W = function() { return window._etc };
Mscrm.RefreshPageHandler.handleError = function(error) {
    if (error.RedirectToEdit)
        if (Mscrm.Utilities.isMobileRefresh()) window.history.back();
        else Mscrm.ReadFormUtilities.openEditForm()
};
Mscrm.RefreshPageHandler.$4o = function() {
    var $v_0 = Xrm.Page.ui;
    if (IsNull($v_0.controls)) $v_0.controls = new Xrm.XrmControls;
    var $v_1 = document.getElementsByTagName("iframe");
    if (!IsNull($v_1))
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2],
                $v_4 = $v_3.attributes.getNamedItem("id"),
                $v_5 = $v_3.attributes.getNamedItem("url"),
                $v_6 = $v_3.attributes.getNamedItem("isWebResource");
            if (!IsNull($v_5)) {
                var $v_8 = Mscrm.CrmUri.create($v_5.value);
                if ($v_8.get_isWebResource() && !IsNull($v_6) && $v_6.value === "True") continue
            } else continue;
            if (!IsNull($v_4) && $v_4.value === "notescontrol" ||
                Mscrm.InlineEditCommonUtilities.isSubgridIframe($v_3.getAttribute("src").toString())) continue;
            var $v_7 = new Mscrm.InlineIFrameControlView($v_3);
            $v_0.controls.add($v_7);
            Mscrm.InlineEditInitializerUtility.associateControlWithParentSection($v_1[$v_2], $v_7)
        }
};
Mscrm.RefreshPageHandler.keyDownHandler = function(eventArgs) {
    switch (eventArgs.keyCode) {
    case 13:
        if (!IsNull(eventArgs.target)) {
            var $v_0 = eventArgs.target.attributes.getNamedItem("onclick");
            if (!IsNull($v_0) && $v_0.value.startsWith("Mscrm.ReadFormUtilities.openLookup(")) {
                var $v_1 = true, $v_2 = eventArgs.target.attributes.getNamedItem("resolved");
                if (!IsNull($v_2) && $v_2.value === "false") $v_1 = false;
                Mscrm.ReadFormUtilities.openLookup($v_1, eventArgs);
                eventArgs.preventDefault();
                eventArgs.stopPropagation()
            }
        }
        break;
    case 68:
        if (eventArgs.ctrlKey) {
            Mscrm.CommandBarActions.deletePrimaryRecord(Xrm.Page.data.entity.getId(),
                Xrm.Page.data.entity.getEntityName());
            eventArgs.preventDefault();
            eventArgs.stopPropagation()
        }
        break;
    case 123:
        eventArgs.shiftKey && Mscrm.RefreshPageHandler.$2Q(eventArgs);
        break;
    case 83:
        if (eventArgs.altKey && eventArgs.ctrlKey) return;
        if (eventArgs.shiftKey && eventArgs.ctrlKey) {
            !Mscrm.InlineEditDataService.get_busy() && (new Mscrm.RefreshPageHandler).saveAndNew();
            eventArgs.preventDefault();
            eventArgs.stopPropagation()
        } else if (eventArgs.ctrlKey) Mscrm.RefreshPageHandler.$2Q(eventArgs);
        else if (eventArgs.altKey) {
            var $v_3 = Mscrm.RefreshPageHandler.$4u(eventArgs);
            $v_3.get_code() !== 10 && (new Mscrm.RefreshPageHandler).close()
        }
        break
    }
};
Mscrm.RefreshPageHandler.$4u = function($p0) {
    var $v_0 = null;
    if (!Mscrm.InlineEditDataService.get_busy()) {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        $v_0 = Mscrm.InlineEditDataService.save(2, Mscrm.RefreshPageHandler.$1n, null, true)
    }
    $p0.preventDefault();
    $p0.stopPropagation();
    return $v_0
};
Mscrm.RefreshPageHandler.$2Q = function($p0) {
    if (!Mscrm.InlineEditDataService.get_busy()) {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        Mscrm.InlineEditDataService.save(1, Mscrm.RefreshPageHandler.$1n, null, false)
    }
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.RefreshPageHandler.get_uiManager = function() { return Xrm.Page.ui };
Mscrm.RefreshPageHandler.$4s = function($p0, $p1, $p2) {
    if (!IsNull($p0) && $p0.readyState === 4) {
        $p0.onreadystatechange = null;
        if ($p0.status === 200) $p1();
        else if ($p2) {
            var $v_0 = new Mscrm.ExceptionInformation;
            $v_0.RedirectToEdit = true;
            Mscrm.RefreshPageHandler.handleError($v_0)
        }
    }
};
Mscrm.RefreshPageHandler.$2y = function() {
    Mscrm.Utilities.traceCurrentTime("CleanupEventHandlersEntry");
    if (!IsNull(Mscrm.RefreshPageHandler.$12))
        for (var $v_0 = Mscrm.RefreshPageHandler.$1e(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if (IsNull($v_0[$v_1])) continue;
            for (var $v_2 = $v_0[$v_1].get_attributes(), $v_3 = $v_2.getLength(), $v_4 = 0; $v_4 < $v_3; $v_4++) {
                var $v_5 = $v_2.get($v_4);
                if (!IsNull($v_5))
                    !$v_5.get_isVirtual() &&
                        $v_5.get_submitModeValue() !== "never" &&
                        $v_5.removeOnChange(Mscrm.RefreshPageHandler.$12)
            }
        }
};
Mscrm.RefreshPageHandler.$3S = function() {
    var $v_0 = Mscrm.RefreshPageHeader.get_instance();
    if (!IsNull($v_0
            .get_applicationInitDeferredStatements()) &&
        $v_0.get_applicationInitDeferredStatements().length > 0) {
        var $v_1 = new Mscrm.Performance.PerformanceStopwatch("Eval ApplicationInitDeferredStatements");
        $v_1.start();
        Sys.Application.beginCreateComponents();
        eval($v_0.get_applicationInitDeferredStatements());
        Sys.Application.endCreateComponents();
        $v_1.stop()
    }
};
Mscrm.RefreshPageHandler.createFormDataEntity = function(id, recordId, typeName, relationshipName, recordName) {
    var $v_0 = {
        id: id,
        recordId: recordId,
        typeName: typeName,
        relationshipName: relationshipName,
        recordName: recordName
    };
    Mscrm.CrmUIComponent.crmCreate(Mscrm.FormDataEntity, $v_0, null, null, null)
};
Mscrm.RefreshPageHandler.$3X = function() {
    var $v_0 = Mscrm.JsonUtilities.getJsonString(_activityFeedsState),
        $v_1 = null,
        $$t_3,
        $$t_4,
        $v_2 = ($$t_4 = Mscrm.JsonUtilities.tryGetParsedJson($v_0, $$t_3 = { val: $v_1 }), $v_1 = $$t_3.val, $$t_4);
    if (IsNull($v_2)) return $v_1;
    else return null
};
Mscrm.RefreshPageHandler.$3v = function() {
    var $v_0 = $get("notescontrol");
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
            if (!IsNull($v_2) &&
            ($v_2.getAttribute("tabid") === "ActivityFeedsSystemTab" ||
                $v_2.getAttribute("tabid") === "ActivityFeedsTab")) return true
        }
    }
    return false
};
Mscrm.RefreshPageHandler.$1d = function() {
    var $v_0 = Mscrm.RefreshPageHandler.$3X();
    return !IsNull($v_0) &&
        !IsNull($v_0["IsConfigured"]) &&
        $v_0["IsConfigured"] &&
        !IsNull($v_0["IsWallEnabled"]) &&
        $v_0["IsWallEnabled"]
};
Mscrm.RefreshPageHandler.$2H = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (!IsNull($v_0)) {
            $P_CRM("#crmFormSubmitId").val($v_0.Id);
            var $$t_2 = $v_0.TypeCode;
            $P_CRM("#crmFormSubmitObjectType").val($$t_2.$$d_toString ||
                ($$t_2.$$d_toString = Function.createDelegate($$t_2, $$t_2.toString)));
            $P_CRM("#crmFormSubmitObjectTypeName").val($v_0.TypeName)
        }
    }
};
Mscrm.RefreshPageHandler.$1n = function($p0) {
    raiseEvent(94, null, null);
    Mscrm.FormNavControl.enableNavLinks();
    typeof Mscrm.ActivityContainer !== "undefined" && Mscrm.ActivityContainer.enableActivityCommandBar();
    var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
    Mscrm.Utilities.addEntityToRecent($v_0);
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
        .executeCallbacksAssociatedWithGlobalQuickCreate("savesuccess", $v_0);
    return false
};
Mscrm.RefreshPageHandler.get_$b = function() {
    return Xrm.Internal.getEntityCode(Mscrm.InlineEditDataService.get_formEntity().get_typeName())
};
Mscrm.RefreshPageHandler.switchProcess = function() { Mscrm.CommandBarActions.switchProcess() };
Mscrm.RefreshPageHandler.abandonProcess = function() { Mscrm.CommandBarActions.abandonProcess() };
Mscrm.RefreshPageHandler.reactivateProcess = function() { Mscrm.CommandBarActions.reactivateProcess() };
Mscrm.RefreshPageHandler.setActiveStage = function() { Mscrm.CommandBarActions.setActiveStage() };
Mscrm.RefreshPageHandler.finishProcess = function() { Mscrm.CommandBarActions.finishProcess() };
Mscrm.RefreshPageHandler.editSalesProcess = function() {
    var $v_0 = $get("processControlProcessInfo");
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.attributes.getNamedItem("data-id");
        if (!IsNull($v_1)) {
            var $v_2 = window.screen.availWidth - 10,
                $v_3 = window.screen.availHeight,
                $v_4 = $v_1.value,
                $v_5 = Mscrm.CrmUri.create("/Tools/ProcessControl/bpfConfigurator.aspx?id=" +
                    CrmEncodeDecode.CrmUrlEncode($v_4));
            openStdWin($v_5, buildWinName($v_4), $v_2, $v_3, "left=0")
        }
    }
};
Mscrm.RefreshPageHandler.checkRefreshForm = function() { return Mscrm.ReadFormUtilities.isRefreshForm() };
Mscrm.RefreshPageHandler.$1m = function($p0) {
    var $v_0 = Mscrm.RefreshPageHandler.$1k();
    if ($v_0) {
        if (!IsNull($p0)) $p0.rawEvent.returnValue = window.LOCID_FORMS_SAVE_CONFIRM_TITLE;
        return LOCID_FORMS_SAVE_CONFIRM_TITLE
    }
};
Mscrm.RefreshPageHandler.$1e = function() {
    var $v_0 = new Array(0);
    $v_0[$v_0.length] = Mscrm.InlineEditDataService.get_formEntity();
    if (IsNull(Mscrm.QuickFormBehavior)) return $v_0;
    for (var $v_1 = Mscrm.QuickFormBehavior.getAllQuickFormBehaviors(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2];
        if (!$v_3.get_isDisposed()) $v_0[$v_0.length] = $v_3.get_formDataEntityObject()
    }
    return $v_0
};
Mscrm.RefreshPageHandler.$26 = function() {
    var $v_0 = {};
    if (IsNull(Mscrm.QuickFormBehavior)) return $v_0;
    for (var $v_1 = Mscrm.QuickFormBehavior.getAllQuickFormBehaviors(),
        $$arr_2 = $v_1,
        $$len_3 = $$arr_2.length,
        $$idx_4 = 0;
        $$idx_4 < $$len_3;
        ++$$idx_4) {
        var $v_2 = $$arr_2[$$idx_4];
        if (IsNull($v_2.get_formDataEntityObject())) continue;
        $v_0[$v_2.get_formDataEntityObject().get_id()] = $v_2.get_uniqueId()
    }
    return $v_0
};
Mscrm.RefreshPageHandler.$2O = function() {
    !IsNull(Mscrm.InlineEditDataService.get_dataService()) && Mscrm.InlineEditDataService.resetParameters()
};
Mscrm.RefreshPageHandler.$1k = function() {
    if (Mscrm.RefreshPageHandler.checkRefreshForm()) {
        if (Mscrm.RefreshPageHandler.$K) {
            Mscrm.RefreshPageHandler.$2O();
            return false
        }
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        for (var $v_0 = false, $v_1 = Mscrm.RefreshPageHandler.$1e(), $v_2 = Mscrm.RefreshPageHandler.$26(), $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++) {
            var $v_4 = $v_1[$v_3];
            if (IsNull($v_4)) continue;
            if ($v_4.get_isDirty() && Mscrm.Utilities.isMobileRefresh()) return true;
            if (!$v_4.get_isNew()) {
                var $v_5 = null;
                if (!$v_4.get_isDirty()) continue;
                if ($v_4
                    .get_id() ===
                    Mscrm.InlineEditDataService.get_formEntity()
                    .get_id()) $v_5 = Mscrm.InlineEditDataService.get_dataService().saveData(2, true);
                else {
                    var $v_6 = $v_2[$v_4.get_id()];
                    if (isNullOrEmptyString($v_6)) continue;
                    $v_5 = Mscrm.InlineEditDataService.get_dataService().quickFormSaveData($v_6, false)
                }
                if (!$v_5.get_success()) {
                    $v_0 = true;
                    break
                }
            } else if ($v_4.get_isDirty()) {
                $v_0 = true;
                break
            }
        }
        return $v_0
    }
    return false
};
Mscrm.RefreshPageHandler.$1j = function($p0) {
    Mscrm.QuickFormInlineEditDomHelper.cleanup();
    !Mscrm.InlineEditDataService.get_pageNavigation() && Mscrm.InlineEditDataService.refreshGrid(true);
    Mscrm.InlineEditDataService.set_pageNavigation(false);
    Mscrm.InlineEditDataService.set_isPreviewForm(false);
    !isOutlookHostedWindow() && $removeHandler(window, "beforeunload", Mscrm.RefreshPageHandler.$1m);
    $removeHandler(window, "unload", Mscrm.RefreshPageHandler.$1j);
    Mscrm.RefreshPageHandler.$2y();
    Mscrm.RefreshPageHandler.$2z()
};
Mscrm.RefreshPageHandler.$2z = function() {
    Mscrm.CssMediaQueryEvaluator.get_instance().dispose();
    window.RecordData = null;
    window.FormLayout = null;
    window.perfDict = null;
    Mscrm.Obsolete.RenderVariables.removeVariables();
    Mscrm.GlobalEvents.documentUnload(null)
};
Mscrm.RefreshPageHandler.$2P = function($p0) {
    if (!window.UseTabletExperience) return;
    Mscrm.InlineEditDataService.saveCachedFormData();
    Mscrm.RefreshPageHandler.$1j($p0)
};
Mscrm.RefreshPageHandler.$2x = function() { Mscrm.InlineEditDataService.checkState() };
Mscrm.RefreshPageHandler.isBusinessProcessPresent = function() {
    return Mscrm.CommandBarActions.isBusinessProcessPresent()
};
Mscrm.RefreshPageHandler.prototype = {
    $T_3: null,
    _formData: null,
    _flyoutLayoutRequest: null,
    $k_3: true,
    $1F_3: false,
    $10_3: null,
    $1R_3: null,
    $1T_3: null,
    $1S_3: null,
    $y_3: null,
    $S_3: null,
    _entitiesMetadata: null,
    _deleteFlyoutVisible: false,
    _deleteFlyout: null,
    $P_3: null,
    $1Y_3:
        "/_controls/actionhubcontrol/actionhubcontrolPersonalWall.aspx?iscarouselview=true&isDashboard=false&pagemode=iframe",
    get_formLayoutTemplate: function() { return this.$T_3 },
    get_processControlInitializer: function() { return Mscrm.RefreshPageHandler.$M },
    get_firstFormAreaSectionControls: function() {
        if (Mscrm.Utilities.isGlobalQuickCreateForm())
            return $P_CRM("#rofContainer .ms-crm-Form-AreaContainerQuick .ms-crm-FormSection").first()
                .find(".ms-crm-Field-Data-Print");
        else
            return $P_CRM("#rofContainer .ms-crm-Form-AreaContainer .ms-crm-FormSection").first()
                .find(".ms-crm-Field-Data-Print")
    },
    get_secondFormAreaSectionControls: function() {
        return $P_CRM("#rofContainer .ms-crm-Form-AreaContainer .ms-crm-FormSection").eq(1)
            .find(".ms-crm-Field-Data-Print")
    },
    get_isActive: function() { return this.$k_3 },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Xrm.Internal.trace.logT(Mscrm.RefreshPageHandler, "Disposing {0}", Mscrm.RefreshPageHandler.$W());
        if (this.$P_3) {
            this.$k_3 && this.$2U_3();
            this.$P_3 = null
        }
        $P_CRM(window).unbind("resize-header", this.$$d_onResize);
        $removeHandler(document, "keyup", this.$$d_$3z_3);
        $removeHandler(document, "keydown", Mscrm.RefreshPageHandler.keyDownHandler);
        Mscrm.Utilities.safeDispose(Mscrm.RefreshPageHandler.$M);
        Mscrm.RefreshPageHandler.$M = null;
        var $v_0 = $get("form_pic_image_link");
        if (!IsNull($v_0)) {
            $removeHandler($v_0, "click", this.$$d_$2F_3);
            $removeHandler($v_0, "keydown", this.$$d_$4F_3)
        }
        var $v_1 = $get("FormSecNavigationControl-Icon");
        if (!IsNull($v_1)) {
            $removeHandler($v_1, "click", this.$$d_$2G_3);
            $removeHandler($v_1, "keydown", this.$$d_$4G_3)
        }
        this.$1K_3 !== -1 && window.clearInterval(this.$1K_3);
        $P_CRM(window).unbind("resize", this.$$d_onResize);
        !IsNull(this._deleteFlyout) && this._deleteFlyout.dispose();
        if (typeof crmFormOnUnloadHandler == "function")
            window.RefreshFormScriptEnabled != null && window.RefreshFormScriptEnabled && crmFormOnUnloadHandler();
        Mscrm.InlineEditDataService.get_dataService().dispose();
        Mscrm.RefreshPageHeader.get_instance().dispose();
        Mscrm.CrmUIComponent.prototype.dispose.call(this);
        Mscrm.Utilities.destroyObject(Xrm.Page.ui);
        Mscrm.Utilities.destroyObject(this);
        this._disposed = true
    },
    initialize: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("RefreshPageHandler.Initialize");
        $v_0.start();
        Mscrm.MetricsReporting.generateFormLoadId();
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        Xrm.Internal.trace.logT(Mscrm.RefreshPageHandler,
            "Initializing entity {0}:{1}",
            Mscrm.RefreshPageHandler.$W(),
            Mscrm.RefreshPageHandler.getEntityIdFromPage());
        this.$2k_3();
        this.$3j_3();
        this.$4c_3();
        $addHandler(document, "keyup", this.$$d_$3z_3);
        $addHandler(document, "keydown", Mscrm.RefreshPageHandler.keyDownHandler);
        if (this.isRefreshForm()) {
            this.$3H_3();
            if (!IsNull(this._formData["_formId"])) {
                Mscrm.InlineEditDataService.set_formId(this._formData["_formId"]);
                Mscrm.InlineEditDataService.set_isPreviewForm(this.$1F_3)
            }
            window.UseTabletExperience && $P_CRM("body").addClass("tablet")
        } else Mscrm.ReadFormUtilities.hideProgressIndicator();
        Sys.Application.registerDisposableObject(this);
        $v_0.stop();
        Mscrm.Utilities.isMobileRefresh() && window.setTimeout(this.$$d_$4R_3, 0);
        Sys.Application.addComponent(this);
        Mscrm.PageManager.get_instance().get_eventManager().subscribeEvent(87, this.get_id());
        Mscrm.PageManager.get_instance().get_eventManager().subscribeEvent(46, this.get_id())
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 87:
            return this.onFrameReactivated(parameters);
        case 46:
            return this.onNavigate(parameters)
        }
        return true
    },
    onFrameReactivated: function(parameters) {
        if (this.$k_3 || IsNull(window.frameElement)) return null;
        if (window.frameElement.id !== parameters["iframeId"]) return null;
        this.onReactivate();
        return true
    },
    onNavigate: function(parameters) {
        if (!parameters["sameWindow"] || !this.$k_3) return null;
        parameters["preservePreviousContent"] && this.onDeactivate();
        return true
    },
    onReactivate: function() {
        this.$k_3 = true;
        Xrm.Internal.trace.logT(Mscrm.RefreshPageHandler,
            "Reactivating entity editor for {0}:{1}",
            Mscrm.RefreshPageHandler.$W(),
            Mscrm.RefreshPageHandler.getEntityIdFromPage());
        this.$P_3 && this.$2T_3()
    },
    onDeactivate: function() {
        this.$k_3 = false;
        Xrm.Internal.trace.logT(Mscrm.RefreshPageHandler,
            "Deactivating entity editor for {0}:{1}",
            Mscrm.RefreshPageHandler.$W(),
            Mscrm.RefreshPageHandler.getEntityIdFromPage());
        this.$P_3 && this.$2U_3()
    },
    $4R_3: function() {
        var $v_0 = $P_CRM("#rofContainer"), $v_1 = $P_CRM(".recordTitle");
        $v_0.length > 0 && !$v_1.length && $v_0.css("top", Mscrm.MobileUtility.isMastheadHidden() ? "36px" : "80px")
    },
    $5G_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("RefreshPageHandler.UpdatePageHeader");
        $v_0.start();
        var $v_1 = Mscrm.RefreshPageHeader.get_instance(),
            $v_2 = new Mscrm.Performance.PerformanceStopwatch("Eval ClientVariables");
        $v_2.start();
        for (var $v_3 = $v_1.get_clientVariables(), $v_6 = 0; $v_6 < $v_3.length; $v_6++) {
            var $v_7 = $v_3[$v_6];
            eval("window." + $v_7.Key + " = " + $v_7.Value)
        }
        $v_2.stop();
        var $v_4 = new Mscrm.Performance.PerformanceStopwatch("Set WrpcTokens");
        $v_4.start();
        for (var $v_5 = $v_1.get_wrpcTokens(), $v_8 = 0; $v_8 < $v_5.length; $v_8++) {
            var $v_9 = $v_5[$v_8],
                $v_A = Mscrm.CrmUri.create($v_9.Key),
                $v_B = Mscrm.WrpcTokenFuncs.getCrmWrpcToken($v_A);
            !$v_B && Mscrm.WrpcTokenFuncs.setCrmWrpcToken($v_A, $v_9.Value, $v_1.get_tokenTimestamp())
        }
        $v_4.stop();
        $v_0.stop();
        var $$t_C = this;
        Mscrm.OnLoadDeferredExecutor.queueCallback(function() { $$t_C.$49_3() }, 0)
    },
    $49_3: function() {
        for (var $v_0 = this.$3e_3(), $v_1 = new Array(0), $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
            var $v_4 = $v_0[$v_3].Key, $v_5 = this.$1i_3($v_0[$v_3].Key);
            $v_5 = this.$2W_3($v_5);
            var $v_6 = Number.parseInvariant($v_0[$v_3].Value);
            if (!$v_6 && $v_5.startsWith("/_static/") && $v_5.endsWith(".js")) Array.add($v_1, $v_5);
            else {
                var $v_7 = Mscrm.CrmUri.create(this.$2W_3($v_4));
                if ($v_6 === 1) {
                    this.$Z_3[this.$Z_3.length] = $v_7;
                    continue
                }
                if ($v_6 > 0 || !$v_7.get_isLocalServer()) this.$x_3[this.$x_3.length] = $v_7;
                else Array.add(this.$v_3, $v_7)
            }
        }
        var $v_2 = new Mscrm.MetricsStopwatch("RefreshPageHandler.LoadScripts");
        $v_2.start();
        loadScriptsAdv($v_1);
        var $$t_8 = this;
        notifyOnAllScriptsLoaded(function() {
            $v_2.stop();
            $$t_8.staticScriptsLoadedCallback()
        })
    },
    $2W_3: function($p0) {
        var $v_0 = $p0.indexOf("?ver=");
        if ($v_0 > 0) $p0 = $p0.substr(0, $v_0);
        return $p0
    },
    staticScriptsLoadedCallback: function() {
        this.$47_3();
        var $v_0 = {};
        $v_0["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
        raiseEvent(101, $v_0, null);
        this.$44_3();
        this.postInitializeProcessControl()
    },
    $44_3: function() {
        var $v_0 = this.$$d_$4Z_3;
        if (!IsNull(this.$v_3) && this.$v_3.length > 0) {
            var $v_1 = new Mscrm.MetricsStopwatch("RefreshPageHandler.LoadDynamicScripts");
            $v_1.start();
            var $v_2 = Mscrm.RefreshPageHeader.get_instance(), $$t_5 = this;
            $v_2.add_scriptLoaded(function($p1_0, $p1_1) {
                $v_1.stop();
                window.setTimeout($v_0, 0)
            });
            $v_2.loadScriptsUsingAjax(this.$v_3)
        } else $v_0()
    },
    $3e_3: function() {
        var $v_0 = Mscrm.RefreshPageHeader.get_instance(),
            $v_1 = {},
            $v_2 = new Array(0),
            $v_3 = $P_CRM("script"),
            $$t_E = this;
        $v_3.each(function($p1_0, $p1_1) {
            var $v_6 = $P_CRM($p1_1).attr("src");
            if (!isNullOrEmptyString($v_6)) {
                var $v_7 = $$t_E.$1i_3($v_6);
                $v_1[$v_7] = true
            }
        });
        for (var $v_4 = PageScriptIncludes, $v_8 = 0; $v_8 < $v_4.length; $v_8++) $v_1[$v_4[$v_8]] = true;
        for (var $v_5 = $v_0.get_scriptIncludes(), $v_9 = 0; $v_9 < $v_5.length; $v_9++) {
            var $v_A = $v_5[$v_9].Key, $v_B = this.$1i_3($v_5[$v_9].Key);
            if (!IsNull($v_1[$v_B])) continue;
            Array.add($v_2, new Mscrm.NameValuePair($v_A, $v_5[$v_9].Value))
        }
        return $v_2
    },
    $1i_3: function($p0) { return $p0.toLowerCase().trim() },
    $4Z_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("Eval ScriptBlocks");
        $v_0.start();
        Mscrm.OnLoadDeferredExecutor.releaseCallbacks(3);
        this.$2i_3();
        Mscrm.RefreshPageHandler.$4o();
        this.$3n_3();
        this.$3p_3();
        var $v_1 = Mscrm.RefreshPageHeader.get_instance();
        if ($v_1.get_applicationInitStatements().length > 0) {
            Sys.Application.beginCreateComponents();
            eval($v_1.get_applicationInitStatements());
            Sys.Application.endCreateComponents()
        }
        for (var $v_2 = $v_1.get_scriptBlocks(), $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3];
            eval($v_4.Value)
        }
        Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$45_3, 2);
        $v_0.stop()
    },
    $3i_3: function($p0) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("InitializeBingMapControl");
        $v_0.start();
        this.$2L_3() && RefreshBingMap(this._formData, $p0);
        $v_0.stop()
    },
    $45_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("LoadExternalScript");
        $v_0.start();
        for (var $v_1 = 0; $v_1 < this.$x_3.length; $v_1++) Mscrm.CrmHeader.setScriptFile(this.$x_3[$v_1]);
        Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$2l_3, 2);
        $v_0.stop()
    },
    $1o_3: false,
    $1b_3: false,
    $46_3: function() {
        var $v_0 = new Mscrm.MetricsStopwatch("LoadScripts - Post Viewport Init");
        $v_0.properties = { IsAsync: true };
        $v_0.start();
        var $v_1 = 0,
            $$t_4 = this,
            $v_2 = function() {
                $v_1++;
                if ($v_1 >= $$t_4.$Z_3.length) {
                    $$t_4.$1o_3 = true;
                    $$t_4.$1b_3 && $$t_4.$1w_3();
                    $v_0.stop()
                }
            };
        if (IsNull(this.$Z_3) || !this.$Z_3.length) $v_2();
        else
            for (var $v_3 = 0;
                $v_3 < this.$Z_3.length;
                $v_3++
            ) Mscrm.CrmHeader.get_scriptLoader().loadScriptAsync(this.$Z_3[$v_3], $v_2)
    },
    $2l_3: function() {
        var $$t_1 = this,
            $v_0 = function() {
                if ($$t_1.isRefreshForm()) {
                    $$t_1.focusControlOnInit($$t_1._formData);
                    !IsNull(Mscrm.ActivityContainer) &&
                        Mscrm.ActivityContainer.set_parentFormInitializationCompleted(true)
                }
            };
        this.$3i_3($v_0);
        !this.$2L_3() && $v_0()
    },
    $2f_3: function() {
        Mscrm.Utilities.addEntityToRecent(Mscrm.InlineEditUtilities.getEntityReference(this._formData))
    },
    $3z_3: function($p0) {
        switch ($p0.keyCode) {
        case 69:
            $p0.altKey && !$p0.ctrlKey && Mscrm.ReadFormUtilities.openEditForm();
            break
        }
    },
    $5E_3: function() {
        if (this.isRefreshForm()) return;
        var $v_0 = $get("editButton");
        if (!IsNull($v_0)) $v_0.title = CrmEncodeDecode.CrmHtmlDecode(this._formData["_editButtonToolTip"]);
        var $v_1 = $get("closeForm");
        if (!IsNull($v_1)) $v_1.title = CrmEncodeDecode.CrmHtmlDecode(this._formData["_closeButtonToolTip"])
    },
    $2j_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("BindData");
        $v_0.start();
        Mscrm.RefreshPageHandler.$2H(this._formData);
        Mscrm.RefreshPageHandler.get_uiManager().set_formTitle(this._formData["_readOnlyFormTitle"]);
        this.postDataBinding();
        this.$5H_3();
        this.$5E_3();
        window.UseTabletExperience && this.$2e_3();
        $v_0.stop()
    },
    $2i_3: function() {
        if (Mscrm.Utilities.isMobileRefresh() || typeof _activityFeedsState === "undefined") return;
        var $v_0 = _activityFeedsState, $v_1 = Mscrm.JsonUtilities.getJsonString($v_0), $v_2 = null, $$t_3, $$t_4;
        $$t_4 = Mscrm.JsonUtilities.tryGetParsedJson($v_1, $$t_3 = { val: $v_2 }), $v_2 = $$t_3.val, $$t_4;
        _activityFeedsStateDictionary = $v_2;
        if (Xrm.Page.context.client.getClientState() === "Online") {
            this.$P_3 = ActivityFeeds.UI.ActivityFeedService.create(window.self);
            this.$2T_3()
        }
    },
    $2T_3: function() {
        Xrm.Internal.getServiceDirectory().register(ActivityFeeds.UI.IActivityFeedService, this.$P_3);
        Xrm.Internal.getServiceDirectory().register(ActivityFeeds.UI.IFollowService, this.$P_3);
        Xrm.Page.ui.refreshRibbon()
    },
    $2U_3: function() {
        Xrm.Internal.getServiceDirectory().unregister(ActivityFeeds.UI.IActivityFeedService, this.$P_3);
        Xrm.Internal.getServiceDirectory().unregister(ActivityFeeds.UI.IFollowService, this.$P_3)
    },
    $3j_3: function() {
        var $v_0 = new Mscrm.ReadFormUIManager,
            $v_1 = new Mscrm.ReadFormDataManager,
            $v_2 = Mscrm.RefreshPageHandler.getEntityIdFromPage(),
            $v_3 = _etn,
            $v_4 = new Mscrm.ReadFormEntityWrapper($v_2, $v_3);
        $v_1.entity = $v_4;
        var $v_5 = new Mscrm.ReadFormUIManagerWrapper($v_0);
        Xrm.Page.data = $v_1;
        Xrm.Page.ui = $v_5;
        Mscrm.RefreshPageHandler.$s = new Mscrm.ClientApiInitializers
    },
    $4e_3: function() {
        Mscrm.ReadFormControl.WebResourceImageControl.processImageWebResourcesForTab(null, this.$T_3["webResources"])
    },
    $4d_3: function() {
        this.$T_3 = Mscrm.RefreshPageHeader.get_instance().set_formLayoutTemplate(window.FormLayout);
        this.$5G_3();
        this.$2j_3();
        this.$3q_3();
        this.postPageRender()
    },
    $3q_3: function() {
        var $$t_0 = this;
        Mscrm.OnLoadDeferredExecutor.queueCallback(function() {
                masterWindow().setFormMode(_etc, "RO");
                $$t_0.$4e_3()
            },
            2);
        Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$2f_3, 2)
    },
    postPageRender: function() {
        if (this.isRefreshForm()) {
            var $v_0 = $get("form_pic_image");
            if (!IsNull($v_0))
                if (!this.$3y_3($v_0))
                    $v_0.src = Mscrm.CrmUri.create(Mscrm.Utilities.getDefaultEntityImage(this._formData)).toString();
                else $v_0.src = Mscrm.CrmUri.create($v_0.src).toString();
            this.$10_3 = $get("HeaderTilesWrapperLayoutElement");
            this.$1R_3 = $get("tdAreas");
            if (!IsNull(this.$10_3)) {
                this.$1T_3 = $P_CRM(".ms-crm-HeaderTilesWrapperElement");
                this.$1S_3 = $P_CRM(".ms-crm-HeaderTileElement", $P_CRM(this.$10_3));
                $P_CRM(window).bind("resize", this.$$d_onResize)
            } else !IsNull(this.$1R_3) && !Mscrm.Utilities.isIPad() && $P_CRM(window).bind("resize", this.$$d_onResize);
            this.$3k_3();
            this.$3l_3()
        }
    },
    $3y_3: function($p0) {
        if (IsNull($p0)) return false;
        var $v_0 = Mscrm.CrmUri.create($p0.src).get_query(), $v_1 = $v_0["Attribute"];
        if (!isNullOrEmptyString($v_1) && !$v_1.localeCompare("entityimage") && !isNullOrEmptyString($v_0["Timestamp"])
        ) return true;
        return false
    },
    $3l_3: function() {
        var $v_0 = $get("FormSecNavigationControl-Icon");
        if (!IsNull($v_0)) {
            $addHandler($v_0, "click", this.$$d_$2G_3);
            $addHandler($v_0, "keydown", this.$$d_$4G_3)
        }
    },
    $4G_3: function($p0) { $p0.keyCode === 13 && this.$2G_3($p0) },
    $2G_3: function($p0) {
        setPerfMarkerTimestamp("FormSectionFlyoutLoadStartTime");
        if (IsNull(this
                .$y_3) &&
            !IsNull(Mscrm.FormSectionNavigationFlyOut))
            this.$y_3 = Mscrm.CrmUIComponent.crmCreate(Mscrm.FormSectionNavigationFlyOut,
                null,
                null,
                null,
                $get("FormSecNavigationControl-Icon"));
        !IsNull(this.$y_3) && this.$y_3.launch();
        $p0.stopPropagation();
        setPerfMarkerTimestamp("FormSectionFlyoutLoadEndTime")
    },
    $3k_3: function() {
        var $v_0 = $get("form_pic_image_link");
        if (!IsNull($v_0)) {
            $addHandler($v_0, "click", this.$$d_$2F_3);
            $addHandler($v_0, "keydown", this.$$d_$4F_3)
        }
    },
    $4F_3: function($p0) { $p0.keyCode === 13 && this.$2F_3($p0) },
    $2F_3: function($p0) {
        if (!window.IS_LIVE && Mscrm.Utilities.isIosDevice() && !window.IS_CLAIMS) return;
        if (this.isEntitySaved() && !Mscrm.InlineEditDataService.get_formEntity().get_isDisabled()) {
            var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_imageupload.aspx");
            $v_0.get_query()["entityId"] = Mscrm.RefreshPageHandler.getEntityIdFromPage();
            $v_0.get_query()["entityName"] = Mscrm.InlineEditDataService.get_formEntity().get_typeName();
            $v_0.get_query()["attributeName"] = "entityimage";
            var $v_1 = 390,
                $v_2 = 456,
                $v_3 = Mscrm.Utilities.createCallbackFunctionObject("imageUploadCallback", this, null, false),
                $v_4 = new Mscrm.CrmDialog($v_0, null, $v_2, $v_1, null);
            $v_4.setCallbackReference($v_3);
            $v_4.show()
        }
    },
    imageUploadCallback: function(imageSource) {
        if (!isNullOrEmptyString(imageSource)) $get("form_pic_image").src = imageSource
    },
    isEntitySaved: function() {
        if (!isNullOrEmptyString(Mscrm.RefreshPageHandler.getEntityIdFromPage())) return true;
        return false
    },
    postPartialInlineInitialization: function(views) { this.isRefreshForm() && this.$4n_3(views) },
    postInlineInitialization: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("PostInlineInitialization");
        $v_0.start();
        !IsNull(Mscrm.BusinessRulesScript) && Mscrm.BusinessRulesScript.Initialize();
        this.$3u_3();
        Xrm.Page.data.invokeDataOnLoadHandlers(1);
        var $v_1 = Mscrm.RefreshPageHeader.get_instance().get_scriptBlocksOnLoad();
        if (!IsNull($v_1))
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                eval($v_3.Value)
            }
        $v_0.stop();
        !Mscrm.Utilities.isGlobalQuickCreateForm() && Mscrm.CommandBarActions.mapAttributesToRegardingForm()
    },
    $3u_3: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Onload Handler Start", 1);
        var $v_0 = new Mscrm.MetricsStopwatch("InvokeOnloadHandlers");
        $v_0.start();
        try {
            window.RefreshFormScriptEnabled != null && window.RefreshFormScriptEnabled && crmFormOnLoadHandler();
            Mscrm.InlineEditDataService.isNew() && Xrm.Page.data.setFormDirty(false)
        } catch ($$e_1) {
        }
        $v_0.stop();
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Onload Handler Stop", 1)
    },
    $2L_3: function() {
        var $v_0 = window.self.RefreshBingMap;
        if (IsNull($v_0) || Mscrm.Utilities.isGlobalQuickCreateForm()) return false;
        return true
    },
    $4n_3: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0], $v_2 = $find($v_1.get_dataContext().get_attribute().get_dataAttributeId());
            !IsNull($v_2) &&
                !$v_2.get_isVirtual() &&
                $v_2.get_submitModeValue() !== "never" &&
                $v_2.get_controls().getLength() === 1 &&
                $v_2.addOnChange(Mscrm.RefreshPageHandler.$12, false)
        }
    },
    $4B_3: function($p0) {
        Mscrm.InlineEditDataService.get_dataService().resetAutoSaveInterval();
        if (!IsNull($p0)) {
            var $v_0 = Mscrm.ErrorStatusControl.get_statusBar().get_result();
            if (!IsNull($v_0)) {
                var $v_1 = $p0.getEventSource();
                !IsNull($v_1) &&
                    $v_1.getName() === $v_0.attributeName &&
                    $v_1.getParent().getId() === $v_0.parentFormDataEntityId &&
                    Mscrm.ErrorStatusControl.hide(10)
            }
        }
    },
    $4U_3: function() {
        var $v_0 = this._formData["_notifications"];
        Mscrm.RefreshPageHandler.populateNotifications($v_0)
    },
    $4c_3: function() {
        this._formData = window.RecordData;
        Xrm.Page.context.saveMode = -1;
        if (!IsNull(this._formData)) {
            !Mscrm.Utilities.isGlobalQuickCreateForm() &&
                setPageTitle(CrmEncodeDecode.CrmHtmlDecode(this._formData["_readFormTitle"].toString()));
            !IsNull(this._formData["dataReqId"]) &&
                setAttributeInWindow("dataReqId", this._formData["_dataReqId"].toString());
            if (!IsNull(this._formData["_entity"])) {
                var $v_0 = Mscrm.InlineEditUtilities.getEntityReference(this._formData);
                setAttributeInWindow("_primaryFieldValue", $v_0.Name)
            }
            if (!IsNull(_isPreviewForm)) this.$1F_3 = _isPreviewForm;
            this.$4d_3();
            this.$4b_3(window.FormLayout["entityMetadata"])
        } else {
            var $v_1 = new Mscrm.ExceptionInformation;
            $v_1.RedirectToEdit = true;
            Mscrm.RefreshPageHandler.handleError($v_1)
        }
    },
    $5H_3: function() {
        var $v_0 = document.getElementsByTagName("iframe");
        if (!IsNull($v_0))
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                if ("subgrid_iframe" === $v_2.className) {
                    var $v_3 = $v_2.attributes.getNamedItem("url"), $v_4 = $v_3.value;
                    if (!IsNull($v_4))
                        $v_3.value = $v_4 +
                            "&id=" +
                            CrmEncodeDecode.CrmUrlEncode(_id) +
                            "&etc=" +
                            CrmEncodeDecode.CrmUrlEncode(_etc) +
                            "&formId=" +
                            CrmEncodeDecode.CrmUrlEncode(this._formData["_formId"])
                }
            }
    },
    $4b_3: function($p0) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("ProcessEntityMetadata");
        $v_0.start();
        this._entitiesMetadata = {};
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            for (var $v_2 = $p0[$v_1],
                $v_3 = $v_2.FormId,
                $v_4 = $v_2.Attributes,
                $v_5 = $v_2.UnboundControls,
                $v_6 = {},
                $v_7 = 0;
                $v_7 < $v_4.length;
                $v_7++) $v_6[$v_4[$v_7].LogicalName] = $v_4[$v_7];
            if ($v_5) for (var $v_8 = 0; $v_8 < $v_5.length; $v_8++) $v_6[$v_5[$v_8].LogicalName] = $v_5[$v_8];
            this._entitiesMetadata[$v_3] = $v_6
        }
        $v_0.stop()
    },
    $47_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("LoadProcessControl");
        $v_0.start();
        if (typeof ProcessControl !== "undefined") {
            Mscrm.RefreshPageHandler.$M = new ProcessControl.Services.ProcessControlInitializer;
            Mscrm.RefreshPageHandler.$M.processLayout(this._formData["_processControlDataKey"], this._entitiesMetadata);
            var $v_1 = Mscrm.RefreshPageHandler.$M.initialize(this._formData);
            this.initializeProcessControlPageObjects($v_1);
            Mscrm.RefreshPageHandler.$M.render()
        }
        $v_0.stop()
    },
    $2k_3: function() { $P_CRM(window).bind("resize-header", this.$$d_onResize) },
    onResize: function(resizeEvent) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("RefreshPageHandler.OnResize");
        $v_0.start();
        this.$4r_3();
        this.$4H_3();
        $v_0.stop()
    },
    $4r_3: function() { Mscrm.Utilities.setRefreshHeaderLayout(this.$10_3, this.$1T_3, this.$1S_3) },
    $4H_3: function() { Mscrm.Utilities.setRefreshFormLayout() },
    $3p_3: function() { Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$4U_3, 2) },
    $3n_3: function() {
        Mscrm.RefreshPageHandler.$12 = this.$$d_$4B_3;
        Mscrm.RefreshPageHandler.$1U = this.$$d_$4T_3;
        var $$t_3 = this;
        window.setTimeout(function() {
                $$t_3.$1P_3.properties = { SpanAcrossMajorMarkers: true };
                $$t_3.$1P_3.start();
                Mscrm.InlineEditInitializationManager.get_instance()
                    .add_inlineEditInitializationCompleted($$t_3.$$d_$3r_3);
                Mscrm.InlineEditInitializationManager.get_instance()
                    .add_inlineEditPartialInitializationCompleted($$t_3.$$d_$3s_3);
                var $v_0 = {};
                $$t_3.getQuickFormLoadOrder($v_0);
                Mscrm.QuickFormInlineEditDomHelper.initialize($v_0);
                Mscrm.InlineEditInitializationManager.get_instance()
                    .add_inlineEditViewportInitializationCompleted($$t_3.$$d_$3t_3);
                Mscrm.InlineEditInitializationManager.get_instance().initializeForROForm($$t_3._entitiesMetadata);
                if (window.UseTabletExperience) $addHandler(window, "unload", Mscrm.RefreshPageHandler.$2P);
                else {
                    !$$t_3.$1F_3 &&
                        !isOutlookHostedWindow() &&
                        $addHandler(window, "beforeunload", Mscrm.RefreshPageHandler.$1m);
                    $addHandler(window, "unload", Mscrm.RefreshPageHandler.$1j)
                }
                Mscrm.RefreshPageHandler.$1X = function($p2_0, $p2_1) { $$t_3.$5J_3($p2_1) };
                Mscrm.InlineEditDataService.get_dataService().add_preValidation(Mscrm.RefreshPageHandler.$1X)
            },
            0)
    },
    postDataBinding: function() {
        if (this.isRefreshForm()) {
            var $$t_A = this;
            $P_CRM("div[data-qfccontrolstart]").each(function($p1_0, $p1_1) {
                var $v_0 = $p1_1.getAttribute("data-qfattribute");
                if (!isNullOrEmptyString($v_0) && $v_0 in $$t_A._formData) {
                    var $v_1 = $$t_A._formData[$v_0],
                        $v_2 = "otypename" in $v_1 ? $v_1["otypename"] : null,
                        $v_3 = $P_CRM.parseJSON($p1_1.getAttribute("data-qfchildids")),
                        $$dict_8 = $v_3;
                    for (var $$key_9 in $$dict_8) {
                        var $v_4 = { key: $$key_9, value: $$dict_8[$$key_9] },
                            $v_5 = $P_CRM(String.format("div[{0}='{1}']", "data-uniqueid", $v_4.key), $p1_1);
                        if (!IsNull($v_5))
                            if (!IsNull($v_2) && $v_5.attr("data-relatedentityname") === $v_2) $v_5.show();
                            else $v_5.hide()
                    }
                }
            })
        }
    },
    getQuickFormLoadOrder: function(loadOrder) {},
    $3s_3: function($p0, $p1) {
        if (IsNull($p1.get_views())) return;
        this.postPartialInlineInitialization($p1.get_views())
    },
    $3r_3: function($p0, $p1) {
        if (!this.$1o_3) {
            this.$1b_3 = true;
            return
        }
        this.$1w_3()
    },
    $1w_3: function() {
        var $v_0 = new Mscrm.MetricsStopwatch("CompleteInlineEditInitialization");
        $v_0.start();
        Mscrm.RefreshPageHandler.$3S();
        this.initializeSfaTabsControl();
        Mscrm.OnLoadDeferredExecutor.releaseCallbacks(2);
        Mscrm.InlineEditInitializationManager.get_instance().remove_inlineEditInitializationCompleted(this.$$d_$3r_3);
        Mscrm.InlineEditInitializationManager.get_instance()
            .remove_inlineEditPartialInitializationCompleted(this.$$d_$3s_3);
        setPerfMarkerTimestamp("StartOnPageRefreshedTimestamp");
        if (!Mscrm.Utilities.isMobileRefresh() && !Mscrm.RefreshPageHandler.$1W) {
            var $$t_4 = this;
            this.$1K_3 = window.setInterval(function() { Mscrm.RefreshPageHandler.$2x() }, 1e3);
            Mscrm.RefreshPageHandler.$1W = true
        }
        setPerfMarkerTimestamp("FinishOnPageRefreshedTimestamp");
        setPerfMarkerTimestamp("StartPostInitializationTimestamp");
        Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(Mscrm.RefreshPageHandler.$1U);
        var $$t_5 = this;
        Mscrm.OnLoadDeferredExecutor.queueCallback(function() {
                $$t_5.postInlineInitialization();
                setPerfMarkerTimestamp("FinishPostInitializationTimestamp");
                Mscrm.InlineEditCommonUtilities.setIFramesSourceUrls(null);
                if (!IsNull(Mscrm.FormInputControl.LinkControlInitializer)) {
                    var $v_2 = new Mscrm.Performance.PerformanceStopwatch("InitializeAllLinkControls");
                    $v_2.start();
                    Mscrm.FormInputControl.LinkControlInitializer.initializeAllLinkControls();
                    $v_2.stop()
                }
                var $v_1 = new Mscrm.Performance.PerformanceStopwatch("FinalizeProcessControl");
                $v_1.start();
                $$t_5.finalizeProcessControl();
                $v_1.stop();
                Mscrm.InlineEditDataService.isNew() && Mscrm.InlineEditDataService.get_dataService().setDirty(true);
                setPerfMarkerTimestamp("ControlsInitializationCompleteTimestamp");
                refreshRibbon(3, false, true);
                !Mscrm.Utilities.isMobileRefresh() &&
                    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.showGlobalQuickCreate();
                if (Mscrm.Utilities.isIosDevice()) {
                    var $v_3 = $get("tdAreas");
                    if (!IsNull($v_3)) {
                        $v_3.style.overflow = "hidden";
                        window.setTimeout(function() { $v_3.style.overflow = "auto" }, 0)
                    }
                }
                $v_0.stop();
                $$t_5.$1P_3.stop();
                setPerfMarkerTimestamp("InlineEditInitializationCompletedTimestamp");
                Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Form Full Controls Init", 1);
                setAttributeInWindow("FormEntityLogicalName",
                    $$t_5.get_primaryEntity() ? $$t_5.get_primaryEntity().get_typeName() || "" : "");
                setAttributeInWindow("FormEntityTypeCode",
                    !IsNull(Mscrm.RefreshPageHandler.$W()) ? Mscrm.RefreshPageHandler.$W().toString() : "");
                $$t_5.$43_3();
                if (!isNullOrEmptyString(window.CUSTOM_ETC_LIST) &&
                    JSON.parse(window.CUSTOM_ETC_LIST).indexOf(Mscrm.RefreshPageHandler
                        .$W()) >
                    -1) setAttributeInWindow("IsCustomEntity", "true");
                else setAttributeInWindow("IsCustomEntity", "false");
                Mscrm.MetricsCollector.collectAndReportClientMetrics(2)
            },
            2)
    },
    $43_3: function() {
        if (!window.IS_ACTIONHUB_ENABLED) return;
        if (window.location.href.toLowerCase().indexOf("dialogpage.aspx") !== -1) return;
        var $v_0 = $get("iFrmActionCards");
        if (!IsNull($v_0))
            if ($v_0
                .getAttribute("src") &&
                $v_0.getAttribute("src").toString() === "about:blank") $v_0.setAttribute("src", this.$1Y_3);
            else {
                $v_0.setAttribute("src", "about:blank");
                $v_0.setAttribute("data-src", this.$1Y_3)
            }
        var $v_1 = Mscrm.CrmUri.create("/_controls/actionhubcontrol/actionhubcontroltemplate.aspx"), $v_2 = {};
        $v_2["wallContentPageUrl"] = $v_1.toString();
        $v_2["masterComponentId"] = "notescontrol";
        crmCreate(Mscrm.ActionHubControl.ActionHubControl,
            $v_2,
            null,
            null,
            $get("actionhubcontrol_notescontrol_container"))
    },
    $3t_3: function($p0, $p1) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("InlineEditViewportInitializationCompleted");
        $v_0.start();
        Mscrm.OnLoadDeferredExecutor.releaseCallbacks(1);
        this.$46_3();
        $v_0.stop()
    },
    postInitializeProcessControl: function() {
        if (IsNull(this._entitiesMetadata)) {
            window.setTimeout(this.$$d_postInitializeProcessControl, 25);
            return
        }
        if (!this.hasProcessControl() || !this.isRefreshForm()) return;
        Mscrm.RefreshPageHandler.$M.postInitialize(this._entitiesMetadata)
    },
    finalizeProcessControl: function() {
        if (!this.hasProcessControl() || !this.isRefreshForm()) return;
        Mscrm.RefreshPageHandler.$M.completeInitialization()
    },
    hasProcessControl: function() { return Mscrm.Utilities.hasProcessControl() },
    focusControlOnInit: function(formData) {
        if (!this.isRefreshForm() || Mscrm.Utilities.isMobileRefresh()) return;
        var $v_0 = !IsNull(formData["_entitydisabled"]) && formData["_entitydisabled"] === "1";
        if (!$v_0 && IsNull(Mscrm.InlineEditUtilities.get_activeControl())) {
            var $v_1 = this.getRootControlsContainerForInitialFocus(formData),
                $v_2 = this.getFirstEnabledControlView($v_1);
            if (IsNull($v_2)) {
                $v_1 = this.$4t_3();
                $v_2 = this.getFirstEnabledControlView($v_1)
            }
            if (!IsNull($v_2))
                if (Mscrm.InlineEditDataService.isNew()) {
                    var $$t_4 = $v_2;
                    window.setTimeout($$t_4.$$d_goToEditState ||
                        ($$t_4.$$d_goToEditState = Function.createDelegate($$t_4, $$t_4.goToEditState)),
                        0)
                } else {
                    var $$t_5 = $v_2;
                    window.setTimeout($$t_5.$$d_goToPreFocusState ||
                        ($$t_5.$$d_goToPreFocusState = Function.createDelegate($$t_5, $$t_5.goToPreFocusState)),
                        0)
                }
        }
    },
    $4t_3: function() { return this.get_secondFormAreaSectionControls() },
    getRootControlsContainerForInitialFocus: function(formData) { return this.get_firstFormAreaSectionControls() },
    $3h_3: function() {
        var $v_0 = $get("WebResource_RecordWall");
        while (true)
            if (!IsNull($v_0))
                if (!isNullOrEmptyString($v_0.className) && $v_0.className === "ms-crm-InlineTab-Read") {
                    $v_0.style.display = "none";
                    return
                } else $v_0 = $v_0.parentNode;
            else return
    },
    $3H_3: function() {
        if (this.isRefreshForm()) {
            Xrm.Page.data = null;
            var $v_0 = window._id, $v_1 = window._etn;
            if (IsNull($v_0) || IsNull($v_1))
                throw Error.create("_id or _etn is not defined on page, creating form data entity fail!");
            Sys.Application.beginCreateComponents();
            var $v_2 = null;
            if (!IsNull(this._formData)) {
                var $v_3 = Mscrm.InlineEditUtilities.getEntityReference(this._formData);
                $v_2 = IsNull($v_3) ? null : $v_3.Name
            }
            Mscrm.RefreshPageHandler.createFormDataEntity("PrimaryEntity", $v_0, $v_1, "", $v_2);
            Sys.Application.endCreateComponents();
            if (!IsNull(this._formData)) {
                !IsNull(this._formData["_entitydisabled"]) &&
                    Mscrm.InlineEditDataService.get_formEntity()
                    .set_isDisabled(this._formData["_entitydisabled"] === "1");
                !IsNull(this._formData["_formstate"]) &&
                    Mscrm.InlineEditDataService.get_formEntity().set_formState(this._formData["_formstate"])
            }
            Mscrm.InlineEditDataService.get_formEntity()
                .add_onIsDisabledChanged(Mscrm.ErrorStatusControl.onEntityIsDisabledChangedHandler)
        }
    },
    $4x_3: function() {
        var $v_0 = $get("notescontrol");
        if (!IsNull($v_0)) {
            if ($v_0.nodeName.toUpperCase() === "IFRAME" || !Mscrm.RefreshPageHandler.$3v()) return;
            var $v_1 = Mscrm.RefreshPageHandler.$1d(), $v_2 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if (!IsNull($v_2)) {
                var $v_3 = $v_1 ? "" : "none", $v_4 = XUI.Html.DomUtils.GetFirstChild($v_2);
                if (Mscrm.Utilities.isIosDevice() &&
                    !IsNull($v_4) &&
                    $v_4.getAttribute("tabid") === "ActivityFeedsSystemTab") $v_4.style.display = $v_3;
                else if (!IsNull($v_4) && $v_4.getAttribute("tabid") === "ActivityFeedsTab") {
                    $v_4.style.display = $v_3;
                    var $v_6 = XUI.Html.DomUtils.GetNextSibling($v_4);
                    if (!IsNull($v_6) && $v_6.getAttribute("tabid") === "ActivityFeedsSystemTab"
                    ) $v_6.style.display = $v_3
                }
                var $v_5 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetLastChild($v_0));
                if (Mscrm.Utilities.isIosDevice() &&
                    !IsNull($v_5) &&
                    $v_5.getAttribute("tabid") === "ActivityFeedsSystemTab") $v_5.style.display = $v_3;
                else if (!IsNull($v_5) && $v_4.getAttribute("tabid") === "ActivityFeedsTab") {
                    $v_5.style.display = $v_3;
                    var $v_7 = XUI.Html.DomUtils.GetNextSibling($v_5);
                    if (!IsNull($v_7) && $v_7.getAttribute("tabid") === "ActivityFeedsSystemTab"
                    ) $v_7.style.display = $v_3
                }
            }
        }
    },
    initializeSfaTabsControl: function() {
        this.$4x_3();
        Mscrm.Utilities.traceCurrentTime("InitializeSfaTabsControlEntry");
        this.$S_3 = $find("notescontrol");
        var $v_0 = typeof Mscrm.CaseResearchConstants !== "undefined"
            ? $find("header_process_CaseResearch_LinkControl_casesconversations")
            : null;
        !Mscrm.Utilities.isProcessForm() &&
            isNullOrEmptyString(Mscrm.RefreshPageHandler.getEntityIdFromPage()) &&
            this.$3h_3();
        if (!IsNull(this.$S_3) || !IsNull($v_0)) {
            if (!IsNull(this.$S_3)) {
                this.$S_3.set_shouldDeferDataProcessing(true);
                this.$S_3.updateParentEntity(Mscrm.InlineEditUtilities.getEntityReference(this._formData));
                this.$S_3.setActivityFeedsTabState(Mscrm.RefreshPageHandler.$1d());
                var $$t_3 = this;
                Mscrm.RefreshPageHandler.$1V = function($p1_0, $p1_1) {
                    $$t_3.$S_3.refresh($p1_1.get_entityReference())
                };
                Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(Mscrm.RefreshPageHandler.$1V)
            }
            !IsNull($v_0) && $v_0.setActivityFeedsTabState(Mscrm.RefreshPageHandler.$1d())
        }
        Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$4X_3, 2);
        Mscrm.Utilities.traceCurrentTime("InitializeSfaTabsControlExit")
    },
    $4X_3: function() { !IsNull(this.$S_3) && this.$S_3.processData() },
    $4T_3: function($p0, $p1) {
        Mscrm.Utilities.traceCurrentTime("PageRefreshedEntry");
        if (!IsNull($p1.get_jsonData()) && !("_error" in $p1.get_jsonData())) {
            var $v_0 = $p1.get_jsonData()["_notifications"];
            !IsNull($v_0) && Mscrm.RefreshPageHandler.populateNotifications($v_0);
            Mscrm.RefreshPageHandler.$2H($p1.get_jsonData());
            if (Xrm.Page.ui.getFormType() !== 1 &&
                Mscrm.RefreshPageHandler.get_$b() !== 112 &&
                Xrm.Internal
                .isFeatureEnabled("FCB.SLAV2"))
                Mscrm.EntityPropUtil.isSLAEnabled(Mscrm.RefreshPageHandler.get_$b()) &&
                    window.setTimeout(this.$$d_refreshQuickView, 10);
            this.postRefresh()
        }
        Mscrm.Utilities.traceCurrentTime("PageRefreshedExit")
    },
    refreshQuickView: function() {
        for (var $v_0 = Mscrm.QuickFormBehavior.getAllQuickFormBehaviors(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            Xrm.Internal.getEntityCode($v_2.get_relatedEntityLogicalName()) === 9752 &&
                Mscrm.InlineEditDataService.get_dataService()
                .quickFormRefreshData($v_2.get_uniqueId(), $v_2.get_formDataEntityObject().get_recordId())
        }
    },
    postRefresh: function() {},
    $5J_3: function($p0) {
        $p0.set_validationResult(Mscrm.RefreshPageHandler.get_uiManager()
            .validateControlsForEntity($p0.get_entityId(), !$p0.get_autoSave()))
    },
    getFlyoutLayoutUrl: function() { return this._formData["_flyoutlayoutUrl"] },
    getFirstEnabledControlView: function(control) {
        if (IsNull(control)) return null;
        for (var $v_0 = Mscrm.RefreshPageHandler.get_uiManager().controls, $v_1 = 0; $v_1 < control.length; $v_1++) {
            var $v_2 = control.eq($v_1).children().first();
            if (!IsNull($v_2) && !IsNull($v_2.attr("id"))) {
                var $v_3 = $v_0.get($v_2.attr("id"));
                if (!IsNull($v_3) && $v_3.getVisible())
                    if (!Mscrm.IFormUIControl
                        .isInstanceOfType($v_3) ||
                        $v_3.isVisibleInTree())
                        if (!Mscrm.IFormUIControl
                            .isInstanceOfType($v_3) ||
                            $v_3.isVisibleInTree())
                            if (!IsNull($v_3.get_disabled)) if (!$v_3.get_disabled()) return $v_3
            }
        }
        return null
    },
    saveAndNew: function() {
        var $v_0 = this.$2V_3(59);
        !IsNull($v_0) && ($v_0.get_success() || $v_0.get_code() === 9) && this.navigateToNewEntity()
    },
    $5C_3: function() {
        if (Mscrm.RefreshPageHandler.checkRefreshForm()) {
            for (var $v_0 = true,
                $v_1 = Mscrm.RefreshPageHandler
                    .$1e(),
                $v_2 = Mscrm.RefreshPageHandler.$26(),
                $v_3 = 0;
                $v_3 < $v_1.length;
                $v_3++) {
                var $v_4 = $v_1[$v_3];
                if (IsNull($v_4)) continue;
                if ($v_4.get_id() === Mscrm.InlineEditDataService.get_formEntity().get_id()) continue;
                if (!$v_4.get_isNew()) {
                    var $v_5 = null, $v_6 = $v_2[$v_4.get_id()];
                    if (isNullOrEmptyString($v_6)) continue;
                    $v_5 = Mscrm.InlineEditDataService.get_dataService().quickFormSaveData($v_6, false);
                    if (!$v_5.get_success()) {
                        $v_0 = false;
                        break
                    }
                } else if ($v_4.get_isDirty()) {
                    $v_0 = false;
                    break
                }
            }
            return $v_0
        }
        return true
    },
    navigateToNewEntity: function() {
        Mscrm.ReadFormUtilities.openInSameFrame(Mscrm.RefreshPageHandler.get_$b(), null, true)
    },
    save: function() {
        if (this.isRefreshForm() && !(Mscrm.InlineEditDataService.get_busy() && Mscrm.InlineEditDataService.isNew())) {
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            return Mscrm.InlineEditDataService.save(1, Mscrm.RefreshPageHandler.$1n, this.$$d_$4v_3, false)
        }
        return null
    },
    $2V_3: function($p0) {
        var $v_0 = null;
        if (this.isRefreshForm() && !(Mscrm.InlineEditDataService.get_busy() && Mscrm.InlineEditDataService.isNew())) {
            var $v_1 = Mscrm.InlineEditDataService.isNew();
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            $v_0 = Mscrm.InlineEditDataService.save($p0, null, null, true);
            if (!$v_0.get_success()) return $v_0;
            raiseEvent(94, null, null);
            setAttributeInWindow("_primaryFieldValue", $v_0.get_recordName());
            setAttributeInWindow("_id", $v_0.get_recordId());
            Mscrm.InlineEditDataService.refreshGrid();
            if ($v_1) {
                var $v_2 = Mscrm.InlineEditUtilities.getEntityReference(this._formData);
                $v_2.Id = $v_0.get_recordId();
                $v_2.Name = $v_0.get_recordName();
                Mscrm.Utilities.addEntityToRecent($v_2)
            }
            try {
                if (this.$5C_3()) Mscrm.RefreshPageHandler.$K = true
            } catch ($$e_4) {
                Mscrm.RefreshPageHandler.$K = false
            }
            return $v_0
        }
        return $v_0
    },
    saveAndClose: function() {
        var $v_0 = this.$2V_3(2);
        !IsNull($v_0) && ($v_0.get_success() || $v_0.get_code() === 9) && $v_0.get_code() !== 10 && closeWindowScript()
    },
    $4v_3: function($p0) {
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .executeCallbacksAssociatedWithGlobalQuickCreate("savefailure");
        return false
    },
    create: function() { if (this.isRefreshForm()) var $v_0 = this.save() },
    deleteRecord: function() {
        if (this.isRefreshForm()) {
            var $v_0 = Mscrm.InlineEditDataService.get_formEntity(), $v_1 = $v_0.get_recordId(), $v_2 = {};
            $v_2["action"] = "delete";
            $v_2["objectType"] = Mscrm.RefreshPageHandler.get_$b();
            $v_2["recordId"] = $v_1;
            Mscrm.InlineEditDataService.set_pageNavigation(true);
            Mscrm.FormAction.handleActionMenuClick($v_2)
        }
    },
    initializeDeleteRecordFlyout: function() {
        this._deleteFlyout = new Mscrm.FlyOutDialog;
        var $$t_3 = this;
        this._deleteFlyout.bind("flyout-canceled", function($p1_0) { $$t_3._deleteFlyoutVisible = false });
        var $$t_4 = this;
        this._deleteFlyout.bind("flyout-confirmed",
            function($p1_0) {
                $$t_4.$3N_3();
                $$t_4._deleteFlyoutVisible = false
            });
        var $$t_5 = this;
        this._deleteFlyout.bind("flyout-visiblechanged", function($p1_0) { $$t_5._deleteFlyoutVisible = false })
    },
    $3N_3: function() {
        var $$t_0 = this;
        Mscrm.InlineEditDataService.deleteRecord(function() {
            window.UseTabletExperience && Mscrm.InlineEditDataService.refreshGrid();
            Mscrm.Utilities.closeCurrentWindow();
            return true
        })
    },
    setDeleteFlyoutDialog: function(flyoutContent) {
        var $v_0 = $P_CRM("<div id='{0}' ></div>");
        $v_0.append(flyoutContent);
        this._deleteFlyout.setContent($v_0);
        this._deleteFlyout.set_position("bottom");
        this._deleteFlyout.get_options().set_height(170);
        this._deleteFlyout.get_options().set_width(555);
        this._deleteFlyout.get_options().set_modal(true);
        this._deleteFlyout.get_options().set_showTitlePane(false)
    },
    activate: function() {
        if (this.isRefreshForm()) {
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            Mscrm.InlineEditDataService.activate("Active", this.$$d_$2b_3, null)
        }
    },
    $2b_3: function($p0) {
        var $$t_2 = this;
        window.setTimeout(function() {
                Mscrm.InlineEditDataService.refreshGridOnStateChange();
                var $v_0 = Mscrm.RefreshPageHandler.getEntityIdFromPage();
                Mscrm.ReadFormUtilities.openInSameFrame(Mscrm.RefreshPageHandler.get_$b(), $v_0)
            },
            1);
        return true
    },
    deactivate: function() {
        if (this.isRefreshForm()) {
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            Mscrm.InlineEditDataService.deactivate("Inactive", -1, this.$$d_$3M_3, null)
        }
    },
    $3M_3: function($p0) {
        var $$t_2 = this;
        window.setTimeout(function() {
                Mscrm.InlineEditDataService.refreshGridOnStateChange();
                var $v_0 = Mscrm.RefreshPageHandler.getEntityIdFromPage();
                Mscrm.ReadFormUtilities.openInSameFrame(Mscrm.RefreshPageHandler.get_$b(), $v_0)
            },
            1);
        return true
    },
    shareRecord: function() { this.isRefreshForm() && this.launchContextualAction("share") },
    emailLink: function() {
        if (this.isRefreshForm()) {
            var $v_0 = Mscrm.RefreshPageHandler.get_uiManager().get_formTitle(),
                $v_1 = Mscrm.InlineEditDataService.get_formEntity(),
                $v_2 = $v_1.get_recordId();
            Mscrm.FormAction.sendFormShortcut(true, CrmEncodeDecode.CrmHtmlDecode($v_0), $v_2, $v_1.get_typeName())
        }
    },
    launchContextualAction: function(formaction) {
        if (this.isRefreshForm()) {
            var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.get_recordId(), $v_2 = {};
                $v_2["action"] = formaction;
                $v_2["objectType"] = Mscrm.RefreshPageHandler.get_$b();
                $v_2["recordId"] = $v_1;
                Mscrm.FormAction.handleActionMenuClick($v_2)
            }
        }
    },
    openFormEditor: function() {
        if (this.isRefreshForm()) {
            var $v_0 = Mscrm.InlineEditDataService.get_formId();
            Mscrm.FormEditor.OpenFormEditor(Mscrm.RefreshPageHandler.get_$b(), "main", $v_0, -1)
        }
    },
    isRefreshForm: function() { return Mscrm.RefreshPageHandler.checkRefreshForm() },
    follow: function() {
        Follow.FollowCommands.followFromForm(Mscrm.RefreshPageHandler.getEntityIdFromPage(),
            Mscrm.InlineEditDataService.get_formEntity().get_typeName(),
            Mscrm.RefreshPageHandler.$W())
    },
    unFollow: function() {
        Follow.FollowCommands.unfollowFromForm(Mscrm.RefreshPageHandler.getEntityIdFromPage(),
            Mscrm.InlineEditDataService.get_formEntity().get_typeName(),
            Mscrm.RefreshPageHandler.$W())
    },
    close: function() {
        if (this.isRefreshForm()) {
            var $v_0 = Mscrm.RefreshPageHandler.$1k();
            if ($v_0) if (!confirm(window.LOCID_FORMS_SAVE_CONFIRM_TITLE)) return;
            Mscrm.RefreshPageHandler.$2P(null);
            closeWindowScript()
        }
    },
    retrieveFlyoutLayout: function() {
        var $v_0 = this.getFlyoutLayoutUrl(), $v_1 = Mscrm.CrmUri.create($v_0);
        this._flyoutLayoutRequest = new XMLHttpRequest;
        this._flyoutLayoutRequest.open("GET", $v_1.toString(), false);
        this._flyoutLayoutRequest.onreadystatechange = this.$$d_retrieveFlyoutLayoutCallBack;
        this._flyoutLayoutRequest.send(null)
    },
    retrieveFlyoutLayoutCallBack: function() {
        Mscrm.Utilities.traceCurrentTime("RetrieveFlyoutLayoutCallBackEntry");
        Mscrm.RefreshPageHandler.$4s(this._flyoutLayoutRequest, this.$$d_processFlyoutLayout, false);
        Mscrm.Utilities.traceCurrentTime("RetrieveFlyoutLayoutCallBackExit")
    },
    processFlyoutLayout: function() { return },
    $o_3: null,
    $n_3: null,
    $2e_3: function() {
        Mscrm.Utilities.traceCurrentTime("AddHeadTileActionsEntry");
        var $v_0 = "ontouchend" in document;
        this.$n_3 = $P_CRM("#HeaderTilesWrapperLayoutElement");
        this.$o_3 = $P_CRM("#ms-crm-HeaderTilesTitleWrapperElement");
        var $v_1 = $v_0 ? "touchstart" : "mousedown", $v_2 = $P_CRM("#headertile-expand-button");
        $v_2.on($v_1, this.$$d_$4E_3);
        var $v_3 = $P_CRM("#headertile-collapse-button");
        $v_3.on($v_1, this.$$d_$4C_3);
        $P_CRM(window).on("navControlToggled", this.$$d_$4I_3);
        Mscrm.Utilities.traceCurrentTime("AddHeadTileActionsExit")
    },
    $4E_3: function($p0) {
        this.$3T_3();
        this.$1v_3()
    },
    $4C_3: function($p0) {
        this.$1u_3();
        this.$21_3()
    },
    $4I_3: function($p0) {
        if (arguments.length < 2) return;
        this.$1u_3();
        var $v_0 = arguments[1];
        if ($v_0) this.$21_3();
        else this.$1v_3()
    },
    $1u_3: function() {
        this.$n_3.removeClass("expanded");
        this.$n_3.addClass("collapsed")
    },
    $3T_3: function() {
        this.$n_3.removeClass("collapsed");
        this.$n_3.addClass("expanded")
    },
    $21_3: function() {
        this.$o_3.removeClass("collapsed");
        this.$o_3.addClass("expanded")
    },
    $1v_3: function() {
        this.$o_3.removeClass("expanded");
        this.$o_3.addClass("collapsed")
    },
    $1J_3: 0,
    $t_3: 0,
    $5A_3: function($p0) {
        $p0.preventDefault();
        var $v_0 = $p0.originalEvent;
        this.$1J_3 = $v_0.pageX
    },
    $58_3: function($p0) {
        $p0.preventDefault();
        var $v_0 = $p0.originalEvent;
        this.$t_3 = $v_0.pageX
    },
    $57_3: function($p0) {
        $p0.preventDefault();
        if (this.$t_3 <= 0) return;
        var $v_0 = Math.abs(this.$t_3 - this.$1J_3);
        $v_0 > 50 && this.$2h_3();
        this.$59_3()
    },
    $59_3: function() {
        this.$1J_3 = 0;
        this.$t_3 = 0
    },
    $2h_3: function() { perfResults(true) },
    initializeProcessControlPageObjects: function(processControlView) {
        if (processControlView && Mscrm.RefreshPageHandler.$s) {
            Xrm.Page.ui.process = Mscrm.RefreshPageHandler.$s.getProcessControlUIWrapper(processControlView);
            Xrm.Page.data.process = Mscrm.RefreshPageHandler.$s.getProcessControlDataWrapper(processControlView)
        } else Xrm.Page.data.process = new Mscrm.NullProcessControlData
    }
};
Mscrm.ReadFormUtilities = function() {};
Mscrm.ReadFormUtilities.openEditForm = function() {
    if (window.UseTabletExperience) {
        var $v_0 = Mscrm.MobileUtility.getMobileUrl(2, window._etn, window._id, true);
        Mscrm.ReadFormUtilities.$56($v_0)
    } else {
        var $v_1 = Mscrm.CrmUri.create(window.location.href);
        $v_1.get_query()["rof"] = false;
        if (Mscrm.ReadFormUtilities.isRefreshForm()) {
            var $v_2 = Mscrm.InlineEditDataService.get_formEntity();
            if (!IsNull($v_2)) {
                var $v_3 = $v_2.get_recordId();
                if ($v_2.get_isCreateMode() && $v_2.get_isDirty()) {
                    var $v_4 = Mscrm.InlineEditDataService.get_dataService().saveData(1, true);
                    if (!$v_4.get_success()) return;
                    $v_3 = $v_4.get_recordId()
                }
                if (!isNullOrEmptyString($v_3)) $v_1.get_query()["id"] = $v_3
            }
        }
        try {
            window._switchingToClassic = true;
            window.location.href = $v_1.toString()
        } catch ($$e_5) {
        }
    }
};
Mscrm.ReadFormUtilities.openLookup = function(resolved, domEvent) {
    if (!IsNull(resolved))
        if (resolved) openlui(domEvent);
        else alert(window.LOCID_RO_UNSUPPORTED_ACTION)
};
Mscrm.ReadFormUtilities.onClickInlineMultiLookupItemReadMode = function(domEvent) {
    var $v_0 = domEvent.target;
    if (IsNull($v_0)) return;
    if (domEvent.ctrlKey || Mscrm.ReadFormUtilities.isInlineMultipleLookupDeactivated($v_0)) {
        var $v_1 = $v_0.getAttribute("onCtrlClick");
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.toString();
            if (Mscrm.Utilities.get_ieBrowserVersion() !== 8) event = domEvent;
            eval(String.format($v_2))
        }
        domEvent.stopPropagation()
    }
};
Mscrm.ReadFormUtilities.isInlineMultipleLookupDeactivated = function(lookupItemSpan) {
    if (!IsNull(lookupItemSpan)) {
        var $v_0 = lookupItemSpan.parentNode.parentNode, $v_1 = $v_0.getAttribute("data-controlmode");
        if (!IsNull($v_1) && $v_1.toString().trim() === "deactivated") return true
    }
    return false
};
Mscrm.ReadFormUtilities.initializeReadForm = function() {
    Mscrm.ReadFormUtilities.$1 = Mscrm.ReadFormUtilities.$3d();
    Mscrm.ReadFormUtilities.$1.initialize()
};
Mscrm.ReadFormUtilities.get_pageHandler = function() { return Mscrm.ReadFormUtilities.$1 };
Mscrm.ReadFormUtilities.removeOnBeforeUnloadHandler = function() {
    $removeHandler(window, "beforeunload", Mscrm.RefreshPageHandler.$1m)
};
Mscrm.ReadFormUtilities.handleUrlClick = function(urlElement) {
    if (!IsNull(urlElement)) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(urlElement).nodeValue;
        if (!IsNull($v_0)) {
            $v_0 = $v_0.trim();
            switch (validateUrlProtocol($v_0)) {
            case 0:
                $v_0 = Mscrm.ReadFormUtilities.$4a($v_0);
                break;
            case 1:
                break;
            default:
                return
            }
            var $v_1 = Mscrm.CrmUri.createForOrganization($v_0, null);
            $v_1.checkParamsNoEqual = true;
            safeWindowOpen($v_1,
                "",
                "height=" +
                window.screen.availHeight * .75 +
                ",width=" +
                window.screen.availWidth * .75 +
                ",scrollbars=1,resizable=1,status=1,toolbar=1,menubar=1,location=1",
                false,
                true)
        }
    }
};
Mscrm.ReadFormUtilities.handlePhoneNumberClick = function(phoneNumberElement) {
    if (!IsNull(phoneNumberElement)) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(phoneNumberElement).nodeValue;
        Mscrm.ReadFormUtilities.openPhoneClient($v_0)
    }
};
Mscrm.ReadFormUtilities.openPhoneClient = function(phoneNumber) {
    var $v_0 = "ActivitiesTab";
    if (!IsNull(phoneNumber)) {
        var $v_1 = window.PHONE_NUMBER_DEFAULT_COUNTRY_CODE, $v_2 = window.USE_SKYPE_PROTOCOL;
        Mscrm.Shortcuts.openPhoneWindow(phoneNumber, $v_1, $v_2.toString());
        if (!IsNull(Mscrm.ActivityContainerConstants)) {
            var $v_3 = "activitycontainer4210";
            if (!IsNull($get($v_3))) {
                var $v_4 = $find("notescontrol");
                $v_4 && $v_4.setActiveTab($v_0);
                Mscrm.ActivityContainer.focusOnPhoneActivity()
            }
        }
    }
};
Mscrm.ReadFormUtilities.$4a = function($p0) {
    if (!$p0.toLowerCase().startsWith("http://") && !$p0.toLowerCase().startsWith("https://")) $p0 = "http://" + $p0;
    return $p0
};
Mscrm.ReadFormUtilities.handleEmailAddressClick = function(addressElement) {
    if (!IsNull(addressElement)) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(addressElement).nodeValue;
        if (!IsNull($v_0)) {
            var $v_1 = new RegExp("^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+\\.[a-zA-Z]{2,5}$");
            if (!$v_1.test($v_0)) return;
            Mscrm.Shortcuts.openEmailForm($v_0, "", "")
        }
    }
};
Mscrm.ReadFormUtilities.isTabVisible = function(tabId) {
    var $v_0 = true;
    if (!isNullOrEmptyString(tabId)) {
        var $v_1 = $get(tabId + "_content");
        if (!IsNull($v_1) && !isNullOrEmptyString($v_1.style.display)) $v_0 = false
    }
    return $v_0
};
Mscrm.ReadFormUtilities.toggleTab = function(tabId) {
    if (isNullOrEmptyString(tabId)) return;
    if (!Mscrm.ReadFormUtilities.isTabVisible(tabId)) {
        Mscrm.ReadFormUtilities.showTab(tabId);
        var $v_0 = $P_CRM($get(tabId + "_Expander")), $v_1 = $v_0.parents().first();
        $v_1.trigger("InlineTabStateChange", null)
    } else Mscrm.ReadFormUtilities.hideTab(tabId)
};
Mscrm.ReadFormUtilities.showTab = function(tabId) {
    if (isNullOrEmptyString(tabId)) return;
    Mscrm.ReadFormUtilities.$3w() && Mscrm.ReadFormUtilities.$55();
    var $v_0 = window.top.document.getElementById("crmRibbonManager");
    if (Mscrm.Utilities.isRefreshForm()) {
        $v_0.style.visibility = "visible";
        Mscrm.ReadFormUtilities.$3O()
    }
    var $v_1 = tabId + "_content", $v_2 = $get($v_1);
    Mscrm.ReadFormUtilities.$4w($v_2);
    if (Mscrm.ReadFormUtilities.isTabVisible(tabId)) return;
    $v_2.style.display = "";
    $v_1 = tabId + "_Expander";
    var $v_3 = $get($v_1);
    $v_3.setAttribute("src", window.CDNURL + "/_imgs/tab_section_down.png");
    $v_3.setAttribute("alt", window.LOCID_FORM_TABHEADER_COLLAPSE);
    $v_3.className = "ms-crm-InlineTabExpander ms-crm-ImageStrip-tab_down";
    Mscrm.InlineEditCommonUtilities.setIFramesSourceUrls($v_2);
    !IsNull(Mscrm.ReadFormUtilities.$1) &&
        Mscrm.ReadFormControl.WebResourceImageControl
        .processImageWebResourcesForTab(tabId, Mscrm.ReadFormUtilities.$1.$T_3["webResources"])
};
Mscrm.ReadFormUtilities.$3w = function() {
    var $v_0 = $P_CRM("div#areaForm").css("display");
    return $v_0 === "none"
};
Mscrm.ReadFormUtilities.$55 = function() {
    var $v_0 = Mscrm.ReadFormUtilities.getFormAreasContainer();
    XUI.Html.DomUtils.ForEachChild($v_0,
        function($p1_0) {
            $P_CRM($p1_0).css("display", "none");
            return false
        });
    $P_CRM("div#areaForm").css("display", "");
    Mscrm.Details.currentArea = null
};
Mscrm.ReadFormUtilities.$3O = function() {
    var $v_0 = $get("FormTitle");
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!IsNull($v_1) && !IsNull($v_1.getAttribute("formTitleText"))) {
            var $v_2 = $v_1.getAttribute("formTitleText").toString();
            if (!isNullOrEmptyString($v_2)) {
                $v_1.title = $v_2;
                $v_1.style.cursor = "default"
            }
        }
        $clearHandlers($v_0);
        $v_0.style.cursor = "default"
    }
};
Mscrm.ReadFormUtilities.getFormAreasContainer = function() {
    var $v_0 = $get("tdAreas"), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
    if ($v_1.className === "ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm") $v_0 = $v_1;
    return $v_0
};
Mscrm.ReadFormUtilities.hideTab = function(tabId) {
    if (isNullOrEmptyString(tabId)) return;
    var $v_0 = tabId + "_content", $v_1 = $get($v_0);
    $v_1.style.display = "none";
    $v_0 = tabId + "_Expander";
    var $v_2 = $get($v_0);
    $v_2.setAttribute("src", window.CDNURL + "/_imgs/tab_section_right.png");
    $v_2.setAttribute("alt", window.LOCID_FORM_TABHEADER_EXPAND);
    $v_2.className = "ms-crm-InlineTabExpander ms-crm-ImageStrip-tab_right"
};
Mscrm.ReadFormUtilities.$4w = function($p0) {
    var $v_0 = Mscrm.InlineEditCommonUtilities.getTab($p0);
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.parentNode;
        $v_1.scrollIntoView()
    }
};
Mscrm.ReadFormUtilities.showKBCheckBoxKeyDownHandler = function(eventArgs) {
    switch (eventArgs.keyCode) {
    case 32:
        if (Mscrm.Utilities.isFirefox()) break;
        if (!Mscrm.ReadFormUtilities.isRefreshForm()) break;
        if (IsNull(eventArgs.target)) break;
        var $v_0 = eventArgs.target.attributes.getNamedItem("onclick");
        !IsNull($v_0) && !isNullOrEmptyString($v_0.value) && eventArgs.target.click();
        break
    }
};
Mscrm.ReadFormUtilities.toggleArticleViewer = function(id, isTurbo) {
    var $v_0 = $get(id + "_d");
    if (!IsNull($v_0)) {
        $v_0.style.height = "auto";
        XUI.Html.DomUtils.GetChildElementAt($v_0, 0).style.display = ""
    }
    var $v_1 = $get(id), $v_2 = $v_1.getAttribute("url").toString();
    if (!IsNull(isTurbo) && isTurbo) {
        var $v_3 = Xrm.Page.getAttribute("kbarticleid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
            var $v_4 = $v_3.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                var $v_5 = Mscrm.CrmUri.create($v_2);
                $v_5.get_query()["id"] = $v_4[0].id;
                $v_1.setAttribute("url", $v_5.toString())
            }
        }
    }
    if (!IsNull($v_1
            .getAttribute("url")) &&
        !$v_1.src.endsWith($v_1.getAttribute("url"))) $v_1.src = $v_1.getAttribute("url");
    $v_1.style.display = $v_1.style.display === "none" ? "inline" : "none"
};
Mscrm.ReadFormUtilities.get_forceNavigationAway = function() { return Mscrm.RefreshPageHandler.$K };
Mscrm.ReadFormUtilities.set_forceNavigationAway = function(value) {
    Mscrm.RefreshPageHandler.$K = value;
    return value
};
Mscrm.ReadFormUtilities.launchProcessControlConfiguration = function() { Mscrm.ReadFormUtilities.execute(217) };
Mscrm.ReadFormUtilities.execute = function(command) {
    switch (command) {
    case 1:
        Mscrm.ReadFormUtilities.$1.save();
        break;
    case 3:
        Mscrm.ReadFormUtilities.$1.deleteRecord();
        break;
    case 6:
        Mscrm.ReadFormUtilities.$1.activate();
        break;
    case 5:
        Mscrm.ReadFormUtilities.$1.deactivate();
        break;
    case 15:
        Mscrm.ReadFormUtilities.$1.qualify();
        break;
    case 16:
        Mscrm.ReadFormUtilities.$1.disqualify();
        break;
    case 201:
        Mscrm.ReadFormUtilities.openEditForm();
        break;
    case 211:
        Mscrm.ReadFormUtilities.$1.saveAndNew();
        break;
    case 232:
        var $v_0 = new RemoteCommand("CustomerService", "GetEntityQuickCreateOption");
        $v_0.SetParameter("entityCode", 112);
        var $v_1 = $v_0.Execute(), $v_2 = false;
        if ($v_1 && $v_1.Success) $v_2 = $v_1.ReturnValue;
        var $v_3 = $find("PrimaryEntity"),
            $v_4 = $v_3.get_recordId(),
            $v_5 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[$v_3.get_typeName()];
        if ($v_2) {
            var $v_6 = 1e3,
                $v_7 = new Mscrm.GlobalQuickCreate
                    .CreateChildCaseGlobalQuickCreateCallbacks("NavBarGloablQuickCreate",
                        $v_6,
                        Mscrm.ReadFormUtilities.$3g);
            Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
                .launchGlobalQuickCreate($v_7, window.INCIDENT_DISPLAYNAME, 112, null, $v_4, $v_5)
        } else {
            var $v_8 = "_CreateFromId=" + $v_4;
            $v_8 += "&_CreateFromType=" + $v_5;
            openObj(112, null, $v_8)
        }
        break;
    case 202:
        loadHelp();
        break;
    case 205:
        Mscrm.ReadFormUtilities.$1.closeAsWon();
        break;
    case 206:
        Mscrm.ReadFormUtilities.$1.closeAsLost();
        break;
    case 213:
        Mscrm.ReadFormUtilities.$1.reOpen();
        break;
    case 22:
        Mscrm.ReadFormUtilities.$1.addRelatedQuote();
        break;
    case 21:
        Mscrm.ReadFormUtilities.$1.addRelatedOrder();
        break;
    case 23:
        Mscrm.ReadFormUtilities.$1.addRelatedInvoice();
        break;
    case 204:
        Mscrm.ReadFormUtilities.$1.shareRecord();
        break;
    case 212:
        Mscrm.ReadFormUtilities.$1.emailLink();
        break;
    case 214:
        Mscrm.ReadFormUtilities.$1.openFormEditor();
        break;
    case 215:
        Mscrm.ReadFormUtilities.$1.follow();
        break;
    case 216:
        Mscrm.ReadFormUtilities.$1.unFollow();
        break;
    case 217:
        if (Mscrm.ILeadCommandBarHandler.isInstanceOfType(Mscrm.ReadFormUtilities.$1)) {
            Mscrm.MetricsReporting.instance().addMetric("Sales Process Configurator", "Launched from Lead");
            Mscrm.ReadFormUtilities.$1.launchProcessControlConfiguration()
        } else if (Mscrm.IOpportunityCommandBarHandler.isInstanceOfType(Mscrm.ReadFormUtilities.$1)) {
            Mscrm.MetricsReporting.instance().addMetric("Sales Process Configurator", "Launched from Opportunity");
            Mscrm.ReadFormUtilities.$1.launchProcessControlConfiguration()
        } else if (Mscrm.IIncidentCommandBarHandler.isInstanceOfType(Mscrm.ReadFormUtilities.$1)) {
            Mscrm.MetricsReporting.instance().addMetric("Sales Process Configurator", "Launched from Incident");
            Mscrm.ReadFormUtilities.$1.launchProcessControlConfiguration()
        }
        break;
    case 220:
        Mscrm.RefreshPageHandler.switchProcess();
        break;
    case 218:
        Mscrm.ReadFormUtilities.$1.create();
        break;
    case 219:
        Mscrm.ReadFormUtilities.$1.close();
        break;
    default:
        break
    }
    return
};
Mscrm.ReadFormUtilities.openInSameFrame = function(objectTypeCode, entityId, readOnlyForm) {
    var $v_0 = null;
    if (!IsNull(readOnlyForm)) $v_0 = "rof=" + readOnlyForm;
    $v_0 += Mscrm.ReadFormUtilities.$28(objectTypeCode);
    Mscrm.ReadFormUtilities.isRefreshForm() && Mscrm.InlineEditDataService.set_pageNavigation(true);
    openObj(objectTypeCode, entityId, $v_0)
};
Mscrm.ReadFormUtilities.$28 = function($p0) {
    var $v_0 = "", $v_1 = Xrm.Page.context.getQueryStringParameters();
    if (!IsNull($v_1)) {
        var $v_2 = $v_1["_CreateFromId"], $v_3 = $v_1["_CreateFromType"];
        if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_3))
            if (Mscrm.EntityPropUtil.isActivityTypeCode($p0) && 112 !== $p0) {
                $v_0 += "&pId=" + $v_2;
                $v_0 += "&pType=" + $v_3
            } else {
                $v_0 += "&_CreateFromId=" + $v_2;
                $v_0 += "&_CreateFromType=" + $v_3
            }
        else if (Mscrm.EntityPropUtil.isActivityTypeCode($p0)) $v_0 += Mscrm.ReadFormUtilities.$3Y($v_1)
    }
    return $v_0
};
Mscrm.ReadFormUtilities.$3Y = function($p0) {
    var $v_0 = "", $v_1 = $p0["pId"], $v_2 = $p0["pName"], $v_3 = $p0["pType"];
    if (!isNullOrEmptyString($v_1) && !isNullOrEmptyString($v_3)) {
        $v_0 += "&pId=" + $v_1;
        if (!IsNull($v_2)) $v_0 += "&pName" + $v_2;
        $v_0 += "&pType=" + $v_3
    }
    return $v_0
};
Mscrm.ReadFormUtilities.forceReload = function(objectTypeCode, entityId, formId) {
    if (!isNullOrEmptyString(entityId) && !isNullOrEmptyString(formId)) {
        Mscrm.RefreshPageHandler.$K = true;
        var $v_0 = createReloadReadFormUri(objectTypeCode, entityId, formId, false), $v_1 = {};
        $v_1["uri"] = $v_0.toString();
        $v_1["sameWindow"] = true;
        $v_1["replace"] = true;
        Mscrm.PageManager.get_instance().raiseEvent(8, $v_1)
    }
};
Mscrm.ReadFormUtilities.hideProgressIndicator = function() {
    var $v_0 = $get("containerLoadingProgress");
    if (!IsNull($v_0)) $v_0.style.display = "none"
};
Mscrm.ReadFormUtilities.refreshGridAndForm = function(objectTypeCode, entityId) {
    Mscrm.ReadFormUtilities.openInSameFrame(objectTypeCode, entityId);
    window.setTimeout(Mscrm.InlineEditDataService.refreshGrid, 1)
};
Mscrm.ReadFormUtilities.$3g = function($p0) { refreshGrid("ChildCasesGrid") };
Mscrm.ReadFormUtilities.addImageToControl = function(control, image) {
    if (!IsNull(control))
        if (!IsNull(image)) {
            control.set_labelIcon(image);
            return true
        }
    return false
};
Mscrm.ReadFormUtilities.addIconToControl = function(control, attributeFormat) {
    if (!IsNull(control)) {
        var $v_0 = null;
        switch (attributeFormat) {
        case "email":
            $v_0 = "/_imgs/refreshcommandbar/emaillink_16.png";
            break;
        case "phone":
            $v_0 = "/_imgs/phone_16.png";
            break;
        default:
            break
        }
        return Mscrm.ReadFormUtilities.addImageToControl(control, $v_0)
    }
    return false
};
Mscrm.ReadFormUtilities.showCustomerCard = function(card) {
    if (!IsNull(card)) {
        card.addClass("ms-crm-CustomerQf");
        var $v_0 = card.find("div.ms-crm-FormSection-Container").first();
        if (!IsNull($v_0)) {
            $v_0.addClass("ms-crm-CustomerDetails");
            $v_0.next().addClass("ms-crm-CustomerTable")
        }
        card.parents("tr").first().show()
    }
};
Mscrm.ReadFormUtilities.hideCustomerCard = function(card) { !IsNull(card) && card.parents("tr").first().hide() };
Mscrm.ReadFormUtilities.overrideQuickFormTableSettings = function(tableElement) {
    if (!IsNull(tableElement)) {
        var $v_0 = tableElement.find("td").first();
        $v_0.addClass("ms-crm-CustomerTableReadonly")
    }
};
Mscrm.ReadFormUtilities.quickFormSaveDataForContact = function(linkControl) {
    var $v_0 = Mscrm.QuickFormBehavior.getBehaviorById("985d2950-2f4c-4a9e-876c-4b2c364561fa");
    Mscrm.ReadFormUtilities.$l = linkControl;
    if (!IsNull($v_0)) {
        $v_0.add_successEvent(Mscrm.ReadFormUtilities.$1Z);
        var $v_1 = $v_0.save();
        if (6 !== $v_1.get_code()) {
            $v_0.remove_successEvent(Mscrm.ReadFormUtilities.$1Z);
            Mscrm.ReadFormUtilities.$l.get_flyOutDialog().set_hideFlyOutOnConfirmClick(false)
        } else Mscrm.ReadFormUtilities.$l.get_flyOutDialog().set_hideFlyOutOnConfirmClick(true)
    }
};
Mscrm.ReadFormUtilities.quickFormClearDataForContact = function() {
    var $v_0 = Mscrm.QuickFormBehavior.getBehaviorById("985d2950-2f4c-4a9e-876c-4b2c364561fa");
    !IsNull($v_0) && $v_0.clear()
};
Mscrm.ReadFormUtilities.$1Z = function($p0, $p1) {
    Mscrm.QuickFormBehavior.getBehaviorById($p1.get_uniqueId()).remove_successEvent(Mscrm.ReadFormUtilities.$1Z);
    var $v_0 = $find("PrimaryEntity"), $v_1 = $v_0.get_attributes().get("customerid");
    if (!IsNull($v_1)) {
        var $v_2 = Mscrm.ReadFormUtilities.$3c($p1.get_entityReference());
        if (!IsNull(Mscrm.ReadFormUtilities.$l) && !isNullOrEmptyString(Mscrm.ReadFormUtilities.$l.get_hostId())) {
            var $v_3 = Mscrm.FormControlInputBehavior.GetBehavior(Mscrm.ReadFormUtilities.$l.get_hostId());
            !IsNull($v_3) && $v_3.get_view().get_editView().discard(false)
        }
        $v_1.set_value($v_2);
        $v_1.fireOnChange()
    }
};
Mscrm.ReadFormUtilities.$3c = function($p0) {
    var $v_0 = [], $v_1 = {};
    $v_1["id"] = $p0.Id;
    $v_1["entityType"] = $p0.TypeName;
    $v_1["name"] = $p0.Name;
    $v_0[0] = $v_1;
    return $v_0
};
Mscrm.ReadFormUtilities.$3d = function() {
    var $v_0 = null;
    if (Mscrm.ReadFormUtilities.isRefreshForm()) {
        var $v_1 = _etn;
        switch ($v_1) {
        case "account":
            if (window.UseTabletExperience) $v_0 = new Mscrm.AccountPageHandler;
            break;
        case "campaignactivity":
            $v_0 = new Mscrm.CampaignActivityPageHandler;
            break;
        case "campaign":
            $v_0 = new Mscrm.CampaignPageHandler;
            break;
        case "contact":
            if (window.UseTabletExperience) $v_0 = new Mscrm.ContactPageHandler;
            break;
        case "incident":
            $v_0 = new Mscrm.IncidentPageHandler;
            break;
        case "lead":
            $v_0 = new Mscrm.LeadPageHandler;
            break;
        case "opportunity":
            $v_0 = new Mscrm.OpportunityPageHandler;
            break;
        case "queue":
            $v_0 = new Mscrm.QueuePageHandler;
            break;
        case "product":
            $v_0 = new Mscrm.ProductPageHandler;
            break;
        default:
            $v_0 = new Mscrm.RefreshPageHandler;
            break
        }
    }
    if (!$v_0) $v_0 = new Mscrm.RefreshPageHandler;
    Mscrm.RefreshPageHandler.$g = $v_0;
    return $v_0
};
Mscrm.ReadFormUtilities.isRefreshForm = function() { return Mscrm.Utilities.isRefreshForm() };
Mscrm.ReadFormUtilities.promptOnClose = function() { return Mscrm.RefreshPageHandler.$1k() };
Mscrm.ReadFormUtilities.resetParameters = function() { Mscrm.RefreshPageHandler.$2O() };
Mscrm.ReadFormUtilities.$56 = function($p0) {
    $p0.setQueryParameter("aste", "true");
    var $v_0 = $get("rofContainer");
    $v_0.style.position = "absolute";
    var $v_1 = window.document.createElement("div");
    $v_1.id = "inlineMEEdit";
    $v_1.style.top = "40px";
    $v_1.style.left = "85px";
    $v_1.style.zIndex = 3e3;
    $v_1.style.position = "absolute";
    $v_1.style.overflowY = "auto";
    var $v_2 = window.top.document.createElement("iframe");
    $v_2.id = "inlineMEFrame";
    $v_2.src = Mscrm.CrmUri.create($p0.toString()).toString();
    $v_2.style.width = 400 + "px";
    $v_2.style.height = 600 + "px";
    $v_2.style.borderWidth = "1px";
    $v_2.style.borderColor = "#D6D6D6";
    $v_2.style.borderStyle = "solid";
    $v_1.appendChild($v_2);
    window.top.document.body.appendChild($v_1);
    var $v_3 = window.top.document.createElement("div");
    $v_3.id = "backDiv";
    $v_3.style.position = "absolute";
    $v_3.style.top = "0";
    $v_3.style.left = "0";
    $v_3.style.zIndex = $v_1.style.zIndex - 1;
    $v_3.style.width = window.top.document.body.clientWidth.toString() + "px";
    $v_3.style.height = window.top.document.body.clientHeight.toString() + "px";
    XUI.Html.SetOpacity($v_3, .5);
    $v_3.style.backgroundColor = "gray";
    window.top.document.body.appendChild($v_3);
    $addHandler($v_3, "orientationchange", Mscrm.ReadFormUtilities.$4S);
    $addHandler($v_3, "touchstart", Mscrm.FloatingDialog.stopTouchMoveEvents);
    $addHandler($v_3, "touchmove", Mscrm.FloatingDialog.stopTouchMoveEvents);
    $addHandler(window.top, "focus", Mscrm.ReadFormUtilities.maintainInlineMEFocus)
};
Mscrm.ReadFormUtilities.$4S = function($p0) {
    var $v_0 = $get("backDiv");
    if (!IsNull($v_0)) {
        $v_0.style.width = window.top.document.body.clientWidth.toString() + "px";
        $v_0.style.height = window.top.document.body.clientHeight.toString() + "px"
    }
};
Mscrm.ReadFormUtilities.maintainInlineMEFocus = function(eventArgs) {
    var $v_0 = window.top.document.getElementById("inlineMEFrame");
    !IsNull($v_0) &&
        !IsNull($v_0.contentWindow.focus) &&
        window.setTimeout(function() { $v_0.contentWindow.focus() }, 0)
};

function OpenItemForceSubmit() {
    var $v_0 = XUI.Html.CreateDomEvent("Event");
    openlui(new Sys.UI.DomEvent($v_0))
}

function prepareForEmbeddedEditClose(embeddedWindow) { $addHandler(embeddedWindow.frameElement, "load", $2A) }

function $2A($p0) {
    var $v_0 = $p0.target;
    $removeHandler($v_0, "load", $2A);
    disposeInlineME();
    var $v_1 = $v_0.contentWindow.RenderMode;
    $v_1 === "read" && window.location.reload(true)
}

function disposeInlineME() { $removeHandler(window.top, "focus", Mscrm.ReadFormUtilities.maintainInlineMEFocus) }

Mscrm.RefreshPageScriptReference = function() {};
Mscrm.RefreshPageScriptReference.prototype = { order: 0, scriptUri: null, scriptElement: null };
Mscrm.RefreshPageHeader = function() {
    this.$1q_0 = $P_CRM("head");
    this.$w_0 = new Sys.EventHandlerList
};
Mscrm.RefreshPageHeader.get_instance = function() {
    return Mscrm.RefreshPageHeader.$g || (Mscrm.RefreshPageHeader.$g = new Mscrm.RefreshPageHeader)
};
Mscrm.RefreshPageHeader.prototype = {
    $m_0: null,
    $1B_0: 0,
    $T_0: null,
    get_$R_0: function() { return this.$T_0["header"] },
    loadScriptsUsingAjax: function($p0) {
        this.$m_0 = new Array($p0.length);
        this.$1B_0 = 0;
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = new Mscrm.RefreshPageScriptReference;
            $v_1.scriptUri = $p0[$v_0];
            $v_1.order = $v_0;
            var $v_2 = new jQueryAjaxOptions, $$t_F = this;
            $v_2.success = function($p1_0, $p1_1, $p1_2) {
                var $v_3 = null;
                $v_3 = this;
                var $v_4 = $p1_0.toString(), $v_5 = $$t_F.$3L_0($v_3, $v_4);
                $v_3.scriptElement = $v_5;
                $$t_F.$m_0[$v_3.order] = $v_3;
                ++$$t_F.$1B_0;
                if ($$t_F.$1B_0 === $$t_F.$m_0.length) {
                    $$t_F.$2g_0($$t_F.$m_0);
                    $$t_F.$m_0 = null
                }
            };
            var $$t_G = this;
            $v_2.error = function($p1_0, $p1_1, $p1_2) {
                if ($p1_0.readyState && !IsNull($p1_2)) {
                    var $v_6 = null;
                    $v_6 = this;
                    var $v_7 = IsNull($p1_1) ? "Error:" : $p1_1;
                    if (!IsNull($v_6)) $v_7 = String.format("{0} : {1}", $p1_1, $v_6.scriptUri.get_path());
                    catchError($v_7, window.location.href, 0, true)
                }
            };
            $v_2.url = $v_1.scriptUri.toString();
            $v_2.dataType = "text";
            $v_2.context = $P_CRM($v_1).get(0);
            $P_CRM.ajax($v_2)
        }
    },
    $3L_0: function($p0, $p1) {
        var $v_0 = $P_CRM("<script>");
        $v_0.attr("type", "text/javascript");
        var $v_1 = !IsNull($p0.scriptUri);
        if (!$v_1);
        !IsNull($p0.scriptUri) &&
            !isNullOrEmptyString($p0.scriptUri.toString()) &&
            $v_0.attr("id", $p0.scriptUri.toString());
        var $v_2 = String.format("//@ sourceURL={0}", $p0.scriptUri);
        $p1 += $v_2;
        $v_0.get(0).text = $p1;
        return $v_0
    },
    $2g_0: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0];
            if ($v_1.order !== $v_0);
            this.executeScriptInGlobalContext($v_1)
        }
        this.fireEvent("ScriptLoaded", new Sys.EventArgs)
    },
    executeScriptInGlobalContext: function($p0) {
        if ($P_CRM.browser.msie) this.$1q_0.append($p0.scriptElement);
        else {
            var $v_0 = $p0.scriptElement.text();
            window.setTimeout($v_0, 0)
        }
    },
    dispose: function() {
        Mscrm.Utilities.destroyObject(this.$w_0);
        Mscrm.Utilities.destroyObject(this)
    },
    get_jQueryTemplates: function() { return this.get_$R_0().JQueryTemplates },
    get_clientVariables: function() { return this.get_$R_0().ClientVariables },
    get_wrpcTokens: function() { return this.get_$R_0().WrpcTokens },
    get_scriptBlocks: function() { return this.get_$R_0().ScriptBlocks },
    get_scriptBlocksOnLoad: function() { return this.get_$R_0().ScriptBlocksOnLoad },
    get_styleIncludes: function() { return this.get_$R_0().StyleIncludes },
    get_scriptIncludes: function() { return this.get_$R_0().ScriptIncludes },
    get_tokenTimestamp: function() { return this.get_$R_0().TokenTimestamp },
    get_applicationInitStatements: function() { return this.get_$R_0().ApplicationInitStatements },
    get_applicationInitDeferredStatements: function() { return this.get_$R_0().ApplicationInitDeferredStatements },
    get_formLayoutTemplate: function() { return this.$T_0 },
    set_formLayoutTemplate: function($p0) {
        this.$T_0 = $p0;
        return $p0
    },
    add_scriptLoaded: function($p0) { this.$w_0.addHandler("ScriptLoaded", $p0) },
    remove_scriptLoaded: function($p0) { this.$w_0.removeHandler("ScriptLoaded", $p0) },
    setStyleSheet: function($p0) { Mscrm.CrmHeader.setStyleSheet($p0) },
    setStyleSheetString: function($p0) { Mscrm.CrmHeader.setStyleSheetString($p0) },
    fireEvent: function($p0, $p1) {
        var $v_0 = this.$w_0.getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    }
};
Mscrm.SalesOrderPageHandler = function() {
    this.$$d_$2K_3 = Function.createDelegate(this, this.$2K_3);
    this.$$d_$4f_3 = Function.createDelegate(this, this.$4f_3);
    Mscrm.SalesOrderPageHandler.initializeBase(this)
};
Mscrm.SalesOrderPageHandler.prototype = {
    $E_3: null,
    get_commandSucceedCallback: function() { return this.$E_3 },
    set_commandSucceedCallback: function($p0) {
        this.$E_3 = $p0;
        return $p0
    },
    buildCommandXml: function() {
        switch (this.$H_2) {
        case 26:
        case 56:
            return this.$3G_3();
        case 43:
            return this.$1a_3();
        case 19:
            this.$E_3 = this.$$d_$4f_3;
            return this.createCommandWithDefaultParameter();
        case 66:
            this.$E_3 = this.$$d_$2K_3;
            return this.createCommandWithDefaultParameter();
        default:
            return this.createCommandWithDefaultParameter()
        }
    },
    $1a_3: function() {
        var $v_0 = this.$0_2["OpportunityID"],
            $v_1 = "",
            $v_2 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><gpOpportunityId>{3}</gpOpportunityId><dataxml>{4}</dataxml></Input>";
        $v_1 = String.format($v_2,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_1
    },
    $3G_3: function() {
        var $v_0 = this.$0_2["newStatus"],
            $v_1 = this.$0_2["CloseDate"],
            $v_2 = this.$0_2["Description"],
            $v_3 = "",
            $v_4 =
                "<Input><id>{0}</id><name>{1}</name><formId>{2}</formId><newStatusCode>{3}</newStatusCode><closeDate>{4}</closeDate><description>{5}</description><commandType>{6}</commandType><dataxml>{7}</dataxml></Input>";
        $v_3 = String.format($v_4,
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_recordId()),
            CrmEncodeDecode.CrmXmlEncode(this.get_primaryEntity().get_typeName()),
            CrmEncodeDecode.CrmXmlEncode(Mscrm.InlineEditDataService.get_formId()),
            CrmEncodeDecode.CrmXmlEncode($v_0),
            CrmEncodeDecode.CrmXmlEncode($v_1),
            CrmEncodeDecode.CrmXmlEncode($v_2),
            CrmEncodeDecode.CrmXmlEncode(this.$H_2.toString()),
            CrmEncodeDecode.CrmXmlEncode(this.$6_2));
        return $v_3
    },
    $4f_3: function($p0) {
        var $v_0 = Mscrm.InlineEditUtilities.getEntityReference($p0);
        if (!IsNull($v_0))
            if ("invoice" === $v_0.TypeName) Xrm.Utility.openEntityForm("invoice", $v_0.Id, null);
            else Mscrm.ReadFormUtilities.forceReload($v_0.TypeCode, $v_0.Id, Mscrm.InlineEditDataService.get_formId());
        Mscrm.InlineEditDataService.refreshGridOnStateChange();
        return true
    },
    $2K_3: function($p0) { return false }
};
Type.registerNamespace("ActivityFeeds.UI");
ActivityFeeds.UI.IActivityFeedService = function() {};
ActivityFeeds.UI.IActivityFeedService.registerInterface("ActivityFeeds.UI.IActivityFeedService");
ActivityFeeds.UI.IFollowService = function() {};
ActivityFeeds.UI.IFollowService.registerInterface("ActivityFeeds.UI.IFollowService");
Type.registerNamespace("Mscrm.ReadFormControl");
Mscrm.ReadFormControl.WebResourceImageControl = function() {};
Mscrm.ReadFormControl.WebResourceImageControl.processImageWebResourcesForTab = function(tabId, webResourcesInfo) {
    if (!IsNull(webResourcesInfo))
        for (var $v_0 = 0; $v_0 < webResourcesInfo.length; $v_0++) {
            var $v_1 = webResourcesInfo[$v_0].tabId;
            if ((isNullOrEmptyString(tabId) || $v_1 === tabId) && Mscrm.ReadFormUtilities.isTabVisible($v_1)) {
                var $v_2 = $get(webResourcesInfo[$v_0].id);
                if (!IsNull($v_2))
                    if ($v_2.clientHeight > 0) Mscrm.ReadFormControl.WebResourceImageControl.$2S($v_2);
                    else $addHandler($v_2, "load", Mscrm.ReadFormControl.WebResourceImageControl.$2D)
            }
        }
};
Mscrm.ReadFormControl.WebResourceImageControl.$2D = function($p0) {
    var $v_0 = $p0.target;
    Mscrm.ReadFormControl.WebResourceImageControl.$2S($v_0);
    $removeHandler($v_0, "load", Mscrm.ReadFormControl.WebResourceImageControl.$2D)
};
Mscrm.ReadFormControl.WebResourceImageControl.$2S = function($p0) {
    Mscrm.Utilities.processImageWebResource($p0);
    var $v_0 = $p0.attributes.getNamedItem("resizeMode").value;
    switch ($v_0) {
    case "Specific":
        $p0.parentNode.parentNode.style.height = $p0.style.height;
        break;
    case "StretchMaintainAspectRatio":
        break;
    case "StretchToFit":
    default:
        $p0.parentNode.parentNode.style.height = "";
        break
    }
};
Mscrm.RefreshPageCommand.registerClass("Mscrm.RefreshPageCommand", Mscrm.CrmUIComponent, Mscrm.IEntityCommand);
Mscrm.RefreshPageHandler.registerClass("Mscrm.RefreshPageHandler",
    Mscrm.RefreshPageCommand,
    Mscrm.IPageHandler,
    Mscrm.ICommandBarHandler);
Mscrm.AccountPageHandler.registerClass("Mscrm.AccountPageHandler", Mscrm.RefreshPageHandler, Mscrm.ICommandBarHandler);
Mscrm.CampaignResponsePageHandler.registerClass("Mscrm.CampaignResponsePageHandler");
Mscrm.ClientApiInitializers.registerClass("Mscrm.ClientApiInitializers", null, Mscrm.IClientApiInitializers);
Mscrm.CommonActivityPageHandler.registerClass("Mscrm.CommonActivityPageHandler");
Mscrm.ContactPageHandler.registerClass("Mscrm.ContactPageHandler", Mscrm.RefreshPageHandler, Mscrm.ICommandBarHandler);
Mscrm.ContractDetailPageHandler.registerClass("Mscrm.ContractDetailPageHandler", Mscrm.RefreshPageCommand);
Mscrm.ContractPageHandler.registerClass("Mscrm.ContractPageHandler", Mscrm.RefreshPageCommand);
Mscrm.EmailCommandHandler.registerClass("Mscrm.EmailCommandHandler", Mscrm.RefreshPageCommand);
Mscrm.IncidentPageHandler.registerClass("Mscrm.IncidentPageHandler",
    Mscrm.RefreshPageHandler,
    Mscrm.IIncidentCommandBarHandler,
    Mscrm.ICommandBarHandler);
Mscrm.InvoicePageHandler.registerClass("Mscrm.InvoicePageHandler", Mscrm.RefreshPageCommand);
Mscrm.LeadPageHandler.registerClass("Mscrm.LeadPageHandler",
    Mscrm.RefreshPageHandler,
    Mscrm.ILeadCommandBarHandler,
    Mscrm.ICommandBarHandler);
Mscrm.NullProcessControlData.registerClass("Mscrm.NullProcessControlData", Xrm.XrmProcessControlData);
Mscrm.ProductPageHandler.registerClass("Mscrm.ProductPageHandler", Mscrm.RefreshPageHandler);
Mscrm.OpportunityPageHandler.registerClass("Mscrm.OpportunityPageHandler",
    Mscrm.RefreshPageHandler,
    Mscrm.IOpportunityCommandBarHandler,
    Mscrm.ICommandBarHandler);
Mscrm.CampaignActivityPageHandler.registerClass("Mscrm.CampaignActivityPageHandler", Mscrm.RefreshPageHandler);
Mscrm.CampaignPageHandler.registerClass("Mscrm.CampaignPageHandler", Mscrm.RefreshPageHandler);
Mscrm.QueuePageHandler.registerClass("Mscrm.QueuePageHandler", Mscrm.RefreshPageHandler, Mscrm.ICommandBarHandler);
Mscrm.QuoteCommandHandler.registerClass("Mscrm.QuoteCommandHandler", Mscrm.RefreshPageCommand);
Mscrm.MoreCommandsMenu.registerClass("Mscrm.MoreCommandsMenu");
Mscrm.RefreshPageCommandHandler.registerClass("Mscrm.RefreshPageCommandHandler");
Mscrm.ReadFormUtilities.registerClass("Mscrm.ReadFormUtilities");
Mscrm.RefreshPageScriptReference.registerClass("Mscrm.RefreshPageScriptReference");
Mscrm.RefreshPageHeader.registerClass("Mscrm.RefreshPageHeader", null, Mscrm.IRefreshPageHeader);
Mscrm.SalesOrderPageHandler.registerClass("Mscrm.SalesOrderPageHandler", Mscrm.RefreshPageCommand);
Mscrm.ReadFormControl.WebResourceImageControl.registerClass("Mscrm.ReadFormControl.WebResourceImageControl");
Mscrm.IncidentPageHandler.$13 = 0;
Mscrm.QueuePageHandler.$z = null;
Mscrm.RefreshPageHandler.caseActivitiesWallId = "header_process_CaseResearch_LinkControl_casesconversations";
Mscrm.RefreshPageHandler.pageHandlerDefaultId = "RefreshPageHandler";
Mscrm.RefreshPageHandler.divTemplate = "<div id='{0}' ></div>";
Mscrm.RefreshPageHandler.$M = null;
Mscrm.RefreshPageHandler.$s = null;
Mscrm.RefreshPageHandler.crmNavBarId = "crmNavBar";
Mscrm.RefreshPageHandler.$1W = false;
Mscrm.RefreshPageHandler.$K = false;
Mscrm.RefreshPageHandler.$12 = null;
Mscrm.RefreshPageHandler.$1U = null;
Mscrm.RefreshPageHandler.$1X = null;
Mscrm.RefreshPageHandler.$1V = null;
Mscrm.RefreshPageHandler._deleteFlyoutWidth = 555;
Mscrm.RefreshPageHandler._deleteFlyoutHeight = 170;
Mscrm.RefreshPageHandler.$g = null;
Mscrm.ReadFormUtilities.$1 = null;
Mscrm.ReadFormUtilities.tableSelector = ".ms-crm-FormSection";
Mscrm.ReadFormUtilities.customerDetailsSelector = "div.ms-crm-FormSection-Container";
Mscrm.ReadFormUtilities.quickFormClass = "ms-crm-CustomerQf";
Mscrm.ReadFormUtilities.customerDetailsClass = "ms-crm-CustomerDetails";
Mscrm.ReadFormUtilities.customerTableClass = "ms-crm-CustomerTable";
Mscrm.ReadFormUtilities.childCasesGrid = "ChildCasesGrid";
Mscrm.ReadFormUtilities.resizeHeaderEventName = "resize-header";
Mscrm.ReadFormUtilities.$l = null;
Mscrm.RefreshPageHeader.$g = null