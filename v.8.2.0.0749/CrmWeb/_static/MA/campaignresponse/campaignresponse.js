Type.registerNamespace("Mscrm");
Mscrm.ConvertCampaignResponseDialogResult = function() {};
Mscrm.ConvertCampaignResponseDialogResult.prototype = {
    Convert: false,
    ConvertExistingLead: false,
    Lead: null,
    LeadCompanyName: null,
    ShowNew: false,
    Close: false,
    ResponseState: null,
    Customer: false,
    Opportunity: false,
    Quote: false,
    CreateNewLead: false,
    Order: false,
    Account: null,
    Contact: null,
    Currency: null
};
Mscrm.ConvertLeadDialogResult = function() {};
Mscrm.ConvertLeadDialogResult.prototype = {
    qualify: false,
    account: false,
    parentAccount: null,
    parentContact: null,
    showNew: false,
    contact: false,
    opportunity: false,
    OppCurrencyId: null,
    qualifyStatus: null,
    unqualify: false,
    unqualifyStatus: null
};

function CopyCampaignResponse() {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        if (!Xrm.Page.data.getIsValid()) return;
        if (Xrm.Page.data.entity.getIsDirty())
            Xrm.Page.data.save().then(function($p1_0) { CopyCampaignResponseCall() },
                function($p1_0) {
                    Xrm.Internal.openErrorDialog($p1_0.errorCode, Xrm.Internal.getErrorMessage($p1_0.errorCode))
                });
        else CopyCampaignResponseCall()
    } else CopyRemoteCommand()
}

function CopyCampaignResponseCall() {
    var $v_0 = Xrm.Page.data.entity,
        $v_1 = new Xrm.Objects.EntityReference("campaignresponse",
            Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_0.getId()),
            $v_0.getEntityName());
    Xrm.Internal.messages.copyCampaignResponse($v_1).then(function($p1_0) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                var $v_2 = $p1_0.campaignResponseId;
                $0($v_2.toString(), "campaignresponse");
                Xrm.Utility.openEntityForm("campaignresponse", $v_2.toString(), $2())
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function $2() {
    var $v_0 = {}, $v_1 = Xrm.Page.context.getQueryStringParameters();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_1["_CreateFromId"], $v_3 = $v_1["_CreateFromType"];
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) &&
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3)) {
            $v_0["pId"] = $v_2;
            $v_0["pType"] = $v_3
        } else {
            var $v_4 = $v_1["pId"], $v_5 = $v_1["pName"], $v_6 = $v_1["pType"];
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4) &&
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_6)) {
                $v_0["pId"] = $v_1["pId"];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5)) $v_0["pName"] = $v_1["pName"];
                $v_0["pType"] = $v_1["pType"]
            }
        }
    }
    return $v_0
}

function Close(state) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(state)) {
            var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = -1, $v_2 = Number.parseInvariant(state);
            $1($v_0, "campaignresponse", $v_2, $v_1)
        }
    } else CloseSubmitCrmForm(state)
}

function $1($p0, $p1, $p2, $p3) {
    if (Mscrm.InternalUtilities._Script.isNullOrUndefined($p3)) $p3 = -1;
    Xrm.Internal.messages.setState($p1, $p0, $p2, $p3).then(function($p1_0) {
            Xrm.Page.ui.refreshRibbon();
            Xrm.Page.data.refresh(true);
            $0($p0, $p1)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function $0($p0, $p1) {
    if ($p1) {
        var $v_0 = Xrm.Internal.getEntityCode($p1);
        Xrm.Internal.refreshParentGrid($v_0, "", $p0)
    }
}

function ConvertResponse() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/MA/CampaignResponse/Dialogs/conv_response.aspx"),
        $v_1 = Xrm.Page.data.entity.attributes.get("customer");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_3 = $v_1.getValue();
        if ($v_3 && $v_3.length > 0) {
            $v_0.get_query()["customerId"] = $v_3[0].id;
            $v_0.get_query()["customerName"] = $v_3[0].name;
            $v_0.get_query()["customerType"] = Xrm.Internal.getEntityCode($v_3[0].entityType)
        }
    }
    var $v_2 = new Xrm.DialogOptions;
    $v_2.width = 475;
    $v_2.height = 550;
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, ConvertResponseCallback)
}

function ConvertResponseCallback($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        if ($p0.Convert)
            if ($p0.ConvertExistingLead) {
                var $v_0 = $p0.Lead, $v_1 = $p0.LeadCompanyName;
                ConvertLead($v_0, $p0.ShowNew, $v_1)
            } else Convert($p0);
        else $p0.Close && Close($p0.ResponseState)
}

function ConvertLead(leadId, showNew, leadCompanyName) {
    var $v_0 = showNew ? "true" : "false",
        $v_1 = [leadId, leadCompanyName],
        $v_2 = Mscrm.GlobalImported.CrmUri.create("/SFA/Leads/Dialogs/conv_lead.aspx?checkShowNew=" + $v_0),
        $v_3 = new Xrm.DialogOptions;
    $v_3.width = 410;
    $v_3.height = 430;
    var $v_4 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(performActionAfterConvertLead, $v_1);
    Xrm.Internal.openDialog($v_2.toString(), $v_3, null, null, $v_4)
}

function performActionAfterConvertLead(dialogResponse, leadId, leadCompanyName) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogResponse))
        if (dialogResponse.qualify) {
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(leadCompanyName) &&
                Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(leadCompanyName))
                if (dialogResponse.account) {
                    Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_LEADCOMP_MUST_BE_SUPPLIED"), null);
                    return
                }
            if (!Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString(dialogResponse
                    .parentAccount))
                QualifyLead(leadId,
                    dialogResponse.showNew,
                    dialogResponse.account,
                    dialogResponse.contact,
                    dialogResponse.opportunity,
                    dialogResponse.OppCurrencyId,
                    1,
                    dialogResponse.parentAccount,
                    dialogResponse.qualifyStatus,
                    false);
            else if (!Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString(dialogResponse
                    .parentContact))
                QualifyLead(leadId,
                    dialogResponse.showNew,
                    dialogResponse.account,
                    dialogResponse.contact,
                    dialogResponse.opportunity,
                    dialogResponse.OppCurrencyId,
                    2,
                    dialogResponse.parentContact,
                    dialogResponse.qualifyStatus,
                    false);
            else
                QualifyLead(leadId,
                    dialogResponse.showNew,
                    dialogResponse.account,
                    dialogResponse.contact,
                    dialogResponse.opportunity,
                    dialogResponse.OppCurrencyId,
                    -1,
                    null,
                    dialogResponse.qualifyStatus,
                    false)
        } else dialogResponse.unqualify && UnqualifyLead(leadId, dialogResponse.unqualifyStatus)
}

function QualifyLead(leadId,
    showNew,
    account,
    contact,
    opportunity,
    currencyId,
    customerTypeId,
    customerId,
    status,
    suppressDuplicateDetection) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString();
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(customerId) || !customerId.length) customerId = $v_0;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(leadId) || !leadId.length) leadId = $v_0;
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(suppressDuplicateDetection) &&
        Mscrm.InternalUtilities.JSTypes.isNull(suppressDuplicateDetection)) suppressDuplicateDetection = false;
    var $v_1 = $v_0, $v_2 = $v_0, $v_3 = Xrm.Page.data.entity.attributes.get("regardingobjectid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
        var $v_4 = $v_3.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4.toString()) && $v_4.length === 1) {
            $v_1 = $v_4[0];
            $v_2 = $v_4[1]
        }
    }
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        QualifyLeadInlineEdit(leadId,
            account,
            contact,
            $v_1,
            $v_2,
            opportunity,
            currencyId,
            customerId,
            customerTypeId,
            showNew,
            status,
            suppressDuplicateDetection);
    else
        QualifyLeadSubmitCrmForm(leadId,
            account,
            contact,
            $v_1,
            $v_2,
            opportunity,
            customerId,
            customerTypeId,
            showNew,
            suppressDuplicateDetection)
}

function QualifyLeadInlineEdit(leadId,
    account,
    contact,
    campaignId,
    campaignType,
    opportunity,
    currencyId,
    customerId,
    customerTypeId,
    showNew,
    status,
    suppressDuplicateDetection) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString(),
        $v_1 = new Xrm.Objects.EntityReference("lead", new Microsoft.Crm.Client.Core.Framework.Guid(leadId)),
        $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString(currencyId))
        $v_2 = new Xrm.Objects.EntityReference("lead", new Microsoft.Crm.Client.Core.Framework.Guid(currencyId));
    var $v_3 = null;
    if (customerId !== $v_0) {
        var $v_6 = Xrm.Internal.getEntityName(customerTypeId);
        $v_3 = new Xrm.Objects.EntityReference($v_6, new Microsoft.Crm.Client.Core.Framework.Guid(customerId))
    }
    var $v_4 = null;
    if (campaignId !== $v_0) {
        var $v_7 = Xrm.Internal.getEntityName(parseInt(campaignType));
        $v_4 = new Xrm.Objects.EntityReference($v_7, new Microsoft.Crm.Client.Core.Framework.Guid(campaignId))
    }
    var $v_5 = Mscrm.InternalUtilities._String.isNullOrEmpty(status) ? -1 : parseInt(status);
    Xrm.Internal.messages.qualifyLead($v_1,
        account,
        contact,
        opportunity,
        $v_2,
        $v_3,
        $v_4,
        $v_5,
        suppressDuplicateDetection).then(function($p1_0) {
            Xrm.Internal.messages.setState("campaignresponse", Xrm.Page.data.entity.getId(), 1, -1)
                .then(function($p2_0) { Xrm.Page.data.refresh(true) },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            for (var $v_8 = $p1_0, $v_9 = 0; $v_9 < $v_8.createdEntities.length; $v_9++) {
                var $v_A = $v_8.createdEntities[$v_9];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A) && showNew) {
                    var $v_B = new Xrm.DialogOptions;
                    $v_B.openInNewWindow = true;
                    Xrm.Utility.openEntityForm($v_A.LogicalName, $v_A.Id.toString(), null, $v_B)
                }
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function UnqualifyLead(leadId, unqualifyStatus) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Xrm.Internal.messages.setState("lead", leadId, 2, parseInt(unqualifyStatus))
            .then(function($p1_0) {
                    Xrm.Internal.messages.setState("campaignresponse", Xrm.Page.data.entity.getId(), 1, -1)
                        .then(function($p2_0) { Xrm.Page.data.refresh(true) },
                            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    else DisqualifyLeadSubmitCrmForm(leadId, unqualifyStatus)
}

function Convert($p0) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) ConvertInlineEdit($p0);
    else ConvertSubmitCrmForm($p0)
}

function ConvertInlineEdit($p0) {
    var $v_0 = Xrm.Page.data.entity,
        $v_1 = new Xrm.Objects.EntityReference("campaignresponse",
            Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_0.getId()),
            $v_0.getEntityName()),
        $v_2 = new Xrm.Objects.EntityReference("account", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_3 = new Xrm.Objects.EntityReference("transactioncurrency",
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_4 = new Xrm.Objects.EntityReference("systemuser",
            Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(Xrm.Page.context.getUserId()),
            $v_0.getEntityName()),
        $v_5 = "none";
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0.Account) &&
        $p0.Account
        .toString() !==
        Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
        .toString()) $v_2.Id = new Microsoft.Crm.Client.Core.Framework.Guid($p0.Account);
    else if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0.Contact)) {
        $v_2 = new Xrm.Objects.EntityReference("contact", Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
        $v_2.Id = new Microsoft.Crm.Client.Core.Framework.Guid($p0.Contact)
    }
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($p0.Currency)) $v_3.Id = new Microsoft.Crm.Client.Core.Framework.Guid($p0.Currency);
    if ($p0.CreateNewLead) $v_5 = "lead";
    else if ($p0.Opportunity) $v_5 = "opportunity";
    else if ($p0.Quote) $v_5 = "quote";
    else if ($p0.Order) $v_5 = "salesorder";
    Xrm.Internal.messages.convertCampaignResponse($v_1, $v_5, $p0.Customer, $v_2, $v_3, $v_4).then(function($p1_0) {
            var $v_6 = $p1_0.entityReference;
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6)) {
                if ($v_6.Id === Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) return;
                Xrm.Utility.openEntityForm($v_5, $v_6.Id.toString())
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

Mscrm.ConvertCampaignResponseDialogResult.registerClass("Mscrm.ConvertCampaignResponseDialogResult");
Mscrm.ConvertLeadDialogResult.registerClass("Mscrm.ConvertLeadDialogResult");

function CopyRemoteCommand() {
    try {
        var command = new RemoteCommand("MarketingAutomation", "CopyResponse"),
            campaignResponseId = Xrm.Page.data.entity.getId();
        command.SetParameter("campaignResponseId", campaignResponseId);
        var result = command.Execute(), copyCampaignResponseGuid = result.ReturnValue;
        openObj(CampaignResponse, copyCampaignResponseGuid)
    } catch (e) {
    }
}

function ConvertSubmitCrmForm(objRet) {
    var oCrConvert = createHiddenInput("crConvert", boolToStr(objRet.Convert)),
        oCrCreateNewLead = createHiddenInput("crCreateNewLead", boolToStr(objRet.CreateNewLead)),
        oCrCustomer = createHiddenInput("crCustomer", boolToStr(objRet.Customer)),
        oCrQuote = createHiddenInput("crQuote", boolToStr(objRet.Quote)),
        oCrOrder = createHiddenInput("crOrder", boolToStr(objRet.Order)),
        oCrOpportunity = createHiddenInput("crOpportunity", boolToStr(objRet.Opportunity)),
        oCrAccount = createHiddenInput("crAccount", objRet.Account),
        oCrContact = createHiddenInput("crContact", objRet.Contact),
        oCrCurrency = createHiddenInput("crCurrency", objRet.Currency);
    if (!$find("crmForm").SubmitCrmForm(CAMPAIGN_RESPONSE_CONVERTRESPONSE, true, true, false)) {
        deleteInput(oCrConvert);
        deleteInput(oCrCreateNewLead);
        deleteInput(oCrCustomer);
        deleteInput(oCrQuote);
        deleteInput(oCrOrder);
        deleteInput(oCrOpportunity);
        deleteInput(oCrAccount);
        deleteInput(oCrContact);
        deleteInput(oCrCurrency)
    }
}

function QualifyLeadSubmitCrmForm(leadId,
    account,
    contact,
    campaignId,
    campaignType,
    opportunity,
    parent,
    parentTypeId,
    showNew,
    suppressDuplicateDetection) {
    var oShowNew = createHiddenInput("qlShowNew", boolToStr(showNew)),
        oCreateAccount = createHiddenInput("qlCreateAccount", boolToStr(account)),
        oCreateContact = createHiddenInput("qlCreateContact", boolToStr(contact)),
        oCreateOpportunity = createHiddenInput("qlCreateOpportunity", boolToStr(opportunity)),
        oOpportunityParentType = createHiddenInput("qlOpportunityParentType", parentTypeId),
        oOpportunityParentId = createHiddenInput("qlOpportunityParentId", parent),
        oLeadId = createHiddenInput("qlLeadId", leadId),
        ocampaignId = createHiddenInput("qlCampaignId", campaignId),
        ocampaignType = createHiddenInput("qlCampaignType", campaignType),
        oSuppressDuplicateDetection = createHiddenInput("qlSuppressDuplicateDetection",
            boolToStr(suppressDuplicateDetection));
    if (!$find("crmForm").SubmitCrmForm(CAMPAIGN_LEAD_QUALIFY, true, true, false)) {
        deleteInput(oShowNew);
        deleteInput(oCreateAccount);
        deleteInput(oCreateContact);
        deleteInput(oCreateOpportunity);
        deleteInput(oOpportunityParentType);
        deleteInput(oOpportunityParentId);
        deleteInput(oLeadId);
        deleteInput(ocampaignId);
        deleteInput(ocampaignType);
        deleteInput(oSuppressDuplicateDetection)
    }
}

function DisqualifyLeadSubmitCrmForm(leadId, unqualifyStatus) {
    var oNewStatus = createHiddenInput("ulNewStatus", unqualifyStatus), oLeadId = createHiddenInput("ulLeadId", leadId);
    if (!$find("crmForm").SubmitCrmForm(CAMPAIGN_LEAD_UNQUALIFY, true, true, false)) {
        deleteInput(oNewStatus);
        deleteInput(oLeadId)
    }
}

function CloseSubmitCrmForm(state) {
    var oCrNewState = createHiddenInput("newStateCode", state);
    !$find("crmForm").SubmitCrmForm(CAMPAIGN_RESPONSE_DEACTIVATE, true, true, false) && deleteInput(oCrNewState)
}

function ConvertSubmitCrmForm(objRet) {
    var oCrConvert = createHiddenInput("crConvert", boolToStr(objRet.Convert)),
        oCrCreateNewLead = createHiddenInput("crCreateNewLead", boolToStr(objRet.CreateNewLead)),
        oCrCustomer = createHiddenInput("crCustomer", boolToStr(objRet.Customer)),
        oCrQuote = createHiddenInput("crQuote", boolToStr(objRet.Quote)),
        oCrOrder = createHiddenInput("crOrder", boolToStr(objRet.Order)),
        oCrOpportunity = createHiddenInput("crOpportunity", boolToStr(objRet.Opportunity)),
        oCrAccount = createHiddenInput("crAccount", objRet.Account),
        oCrContact = createHiddenInput("crContact", objRet.Contact),
        oCrCurrency = createHiddenInput("crCurrency", objRet.Currency);
    if (!$find("crmForm").SubmitCrmForm(CAMPAIGN_RESPONSE_CONVERTRESPONSE, true, true, false)) {
        deleteInput(oCrConvert);
        deleteInput(oCrCreateNewLead);
        deleteInput(oCrCustomer);
        deleteInput(oCrQuote);
        deleteInput(oCrOrder);
        deleteInput(oCrOpportunity);
        deleteInput(oCrAccount);
        deleteInput(oCrContact);
        deleteInput(oCrCurrency)
    }
}