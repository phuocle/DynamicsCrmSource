Type.registerNamespace("Mscrm");
Mscrm.ExportDialogArguments = function() {};
Mscrm.ExportDialogReturnValue = function() {};
Mscrm.ExportDialogResult = function() {};
Mscrm.ExportDialogResult.prototype = {
    cancel: -1,
    currentPage: 0,
    allPages: 1,
    liveList: 2,
    livePivot: 3,
    currentPageExcel: 4,
    allPagesExcel: 5
};
Mscrm.ExportDialogResult.registerEnum("Mscrm.ExportDialogResult", false);
Mscrm.DetectDuplicateArguments = function() {};
Mscrm.OfficeDocumentType = function() {};
Mscrm.OfficeDocumentType.prototype = { excel: 1, word: 2, powerPoint: 3, oneNote: 4, PDF: 5 };
Mscrm.OfficeDocumentType.registerEnum("Mscrm.OfficeDocumentType", false);
Mscrm.ReportResult = function() {};
Mscrm.ReportResult.prototype = { cancel: -1, selected: 0, view: 1, defaultResult: 2 };
Mscrm.ReportResult.registerEnum("Mscrm.ReportResult", false);
Mscrm.AzureServiceConnectionActions = function() {};
Mscrm.AzureServiceConnectionActions.setConnectionState = function(action, connectionId) {
    Xrm.Page.data.save().then(function() {
            var $v_0 = 9936, $v_1 = null;
            switch (action) {
            case "activate":
                $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_activate_azureserviceconnection.aspx");
                break;
            case "deactivate":
                $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_deactivate_azureserviceconnection.aspx");
                break
            }
            if (!IsNull($v_0) && !IsNull(connectionId)) {
                $v_1.get_query()["iObjType"] = $v_0;
                $v_1.get_query()["iId"] = connectionId
            }
            var $v_2 = [connectionId], $v_3 = new Xrm.DialogOptions;
            $v_3.height = 250;
            $v_3.width = 450;
            var $v_4 = Mscrm.AzureServiceConnectionActions.refreshPage;
            Xrm.Internal.openDialog($v_1.toString(), $v_3, $v_2, null, $v_4)
        },
        Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.AzureServiceConnectionActions.testConnection = function(connectionId) {
    Xrm.Page.data.save().then(function() {
            var $v_0 = 9936, $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_testazureserviceconnection.aspx");
            if (!IsNull($v_0) && !IsNull(connectionId)) {
                $v_1.get_query()["iObjType"] = $v_0;
                $v_1.get_query()["iId"] = connectionId
            }
            var $v_2 = [connectionId], $v_3 = new Xrm.DialogOptions;
            $v_3.height = 205;
            $v_3.width = 450;
            var $v_4 = Mscrm.AzureServiceConnectionActions.refreshPage;
            Xrm.Internal.openDialog($v_1.toString(), $v_3, $v_2, null, $v_4)
        },
        Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.AzureServiceConnectionActions.refreshPage = function(response) { Xrm.Page.data.refresh(false) };
Mscrm.TeamActions = function() {};
Mscrm.TeamActions.addTeamMembers = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("addtoteam", entityTypeCode, records.length);
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, 500, 225)
};
Mscrm.TeamActions.removeTeamMembers = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("removefromteam", entityTypeCode, records.length);
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, 540, 230)
};
Mscrm.TeamActions.manageTeamRoles = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("role", entityTypeCode, records.length), $v_1 = 500, $v_2 = 330;
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, $v_1, $v_2)
};
Mscrm.TeamActions.isTeamTypeOwnerType = function() {
    var $v_0 = Xrm.Page.getAttribute("teamtype");
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.getValue();
        if (0 === $v_1) return true;
        else return false
    }
    return true
};
Mscrm.TeamActions.enableOwnerTeamCommands = function(gridControl) {
    for (var $v_0 = gridControl, $v_1 = $v_0.GetRecordsFromInnerGrid(true), $v_2 = 3, $v_3 = false, $v_4 = 0;
        $v_4 < $v_1.length;
        ++$v_4) {
        var $v_5 = $v_1[$v_4][$v_2];
        if (parseInt($v_5.getAttribute("teamtype"), 10) === 0) {
            $v_3 = true;
            break
        }
    }
    return $v_3
};
Mscrm.UserQueryActions = function() {};
Mscrm.UserQueryActions.filterGridByType = function(gridControl, commandProperties) {
    if (!commandProperties) return;
    var $v_0 = commandProperties["SourceControlId"];
    Mscrm.UserQueryActions.changeViewTitle(Mscrm.UserQueryActions.$z($v_0));
    var $v_1 = $v_0.split(".");
    Mscrm.UserQueryActions._queryTargetTypeCode = Number.parseInvariant($v_1[$v_1.length - 1]);
    Mscrm.UserQueryActions.refreshGrid(gridControl)
};
Mscrm.UserQueryActions.$z = function($p0) {
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.UserQueryActions.get_$L(),
            "/Menu/MenuSection/Controls/Button[@Id='" + $p0 + "']",
            null),
        $v_1 = "";
    if (!IsNull($v_0)) $v_1 = $v_0.attributes.getNamedItem("LabelText").nodeValue;
    return $v_1
};
Mscrm.UserQueryActions.refreshGrid = function(gridControl) {
    gridControl.SetParameter("returnedtypecode", Mscrm.UserQueryActions._queryTargetTypeCode.toString(10));
    gridControl.SetParameter("customquery", "FilterByObjectType");
    var $v_0 = $get(gridControl.get_id() + "_SavedNewQuerySelector");
    if ($v_0.nodeValue === window.LOCID_SEARCH_RESULTS) quickFind(gridControl);
    else handleView(null, gridControl)
};
Mscrm.UserQueryActions.setEntityDefaultView = function(selectedRecords) {
    try {
        var $v_0 = selectedRecords[0];
        setDefaultEntityView(Mscrm.UserQueryActions._queryTargetTypeCode, $v_0.Id, $v_0.TypeCode)
    } catch ($$e_2) {
    }
};
Mscrm.UserQueryActions.populateRecordType = function(commandProperties) {
    if (!IsNull(Mscrm.UserQueryActions.get_$L())) {
        commandProperties["PopulationXML"] = XUI.Xml.XMLSerializer.serializeToString(Mscrm.UserQueryActions.get_$L());
        commandProperties["SuppressCommandIncludes"] = true
    }
};
Mscrm.UserQueryActions.get_$L = function() {
    if (IsNull(Mscrm.UserQueryActions.$A)) {
        var $v_0 = "userquery",
            $v_1 = "userquery|NoRelationship|SubGridStandard|Mscrm.SubGrid.userquery.MainTab.View.RecordType",
            $v_2 = new RemoteCommand("AdvancedFind", "GenerateRecordTypeMenuXml");
        $v_2.SetParameter("entityLogicalName", $v_0);
        $v_2.SetParameter("menuId", $v_1);
        var $v_3 = $v_2.Execute();
        if ($v_3.Success) Mscrm.UserQueryActions.$A = XUI.Xml.LoadXml($v_3.ReturnValue)
    }
    return Mscrm.UserQueryActions.$A
};
Mscrm.UserQueryActions.changeViewTitle = function(entityName) {
    var $v_0 = String.format(window.LOCID_AF_SVDVIEWTITLE, entityName),
        $v_1 = $get("userQueries"),
        $v_2 = $get("newViewSelector", $v_1);
    Sys.UI.DomElement.removeCssClass($v_2, "ms-crm-View-Entity-OverflowName");
    $v_2.style.width = "";
    $v_2.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_0);
    $v_2.title = $v_0;
    var $v_3 = $get("viewSelectorContainer").clientWidth / 2, $v_4 = $v_2.clientWidth;
    $v_4 = $v_4 < $v_3 ? $v_4 : $v_3;
    $v_4 = $v_4 ? $v_4 : 50;
    Sys.UI.DomElement.addCssClass($v_2, "ms-crm-View-Entity-OverflowName");
    $v_2.style.width = $v_4.toString() + "px"
};
Mscrm.Campaign = function() {};
Mscrm.Campaign.newTemplate = function() { newTemplate() };
Mscrm.Campaign.copyCampaign = function(campaignId, saveAsTemplate) { copyCampaign(campaignId, saveAsTemplate) };
Mscrm.IncidentActions = function() {};
Mscrm.IncidentActions.resolveCase = function(caseId, gridControl) {
    var $v_0 = new Mscrm.InternalUtilities.EntityReference;
    $v_0.Id = caseId;
    $v_0.Name = "incident";
    Mscrm.GridCommandActions.resolveCase($v_0, gridControl)
};
Mscrm.IncidentActions.caseFlow = function(activityTypeCode) {
    var $v_0 = Mscrm.CrmUri.create("/_forms/read/page.aspx");
    $v_0.get_query()["formid"] = Mscrm.IncidentActions.$N;
    $v_0.get_query()["activitytypecode"] = activityTypeCode;
    $v_0.get_query()["setlastviewed"] = false;
    $v_0.get_query()["rof"] = true;
    $v_0.get_query()["theme"] = window.RefreshFormTheme;
    openObj(112, "", $v_0.get_queryString())
};
Mscrm.IncidentActions.isNotChildCase = function() {
    var $v_0 = null;
    if (!IsNull(Xrm.Page
            .data) &&
        !IsNull(Xrm.Page.data.entity) &&
        !IsNull(Xrm.Page.data.entity.attributes)) $v_0 = Xrm.Page.getAttribute("parentcaseid");
    return !($v_0 && $v_0.getValue())
};
Mscrm.IncidentActions.isRefreshFormAccessible = function() {
    var $v_0 = new RemoteCommand("CustomerService", "IsRefreshFormAccessible");
    $v_0.SetParameter("formId", Mscrm.IncidentActions.$N);
    var $v_1 = $v_0.Execute();
    return !!$v_1 && $v_1.ReturnValue
};
Mscrm.Article = function() {};
Mscrm.Article.articleRibbonActions = function(gridControl, selectedRecords, entityTypeCode, action) {
    var $v_0 = Mscrm.GridRibbonActions.$0(action, entityTypeCode, selectedRecords.length), $v_1 = 600, $v_2 = 200;
    if (action === "articleview") {
        $v_0 = Mscrm.CrmUri.create("/CS/articles/viewer/default.aspx");
        $v_0.get_query()["id"] = selectedRecords[0].Id;
        $v_1 = 650;
        $v_2 = 500
    }
    Mscrm.GridRibbonActions.$1($v_0, gridControl, selectedRecords, $v_1, $v_2)
};
Mscrm.ImportFileActions = function() {};
Mscrm.ImportFileActions.deleteAllRecordsForCurrentImportFile = function(gridControl, records, entityTypeCode) {
    var $v_0 = "deleteimportedrecords";
    doAction(gridControl.get_id(), entityTypeCode, $v_0, null)
};
Mscrm.ImportFileActions.deleteAllRecordsForCurrentImport = function(gridControl, records, entityTypeCode) {
    var $v_0 = "deleteallimportedrecords";
    doAction(gridControl.get_id(), entityTypeCode, $v_0, null)
};
Mscrm.EmailServerProfileActions = function() {};
Mscrm.EmailServerProfileActions.SetDefaultFromGrid = function(records) {
    Mscrm.EmailServerProfileActions.setDefault(records[0].Id);
    refreshRibbon()
};
Mscrm.EmailServerProfileActions.SetDefaultFromForm = function() {
    var $v_0 = $find("crmForm");
    if (!$v_0.IsValid(false)) return;
    Mscrm.EmailServerProfileActions.setDefault($v_0.get_objectId());
    refreshRibbon()
};
Mscrm.EmailServerProfileActions.setDefault = function(id) {
    var $v_0 = new RemoteCommand("EmailServerProfileService", "SetDefaultProfile", null);
    $v_0.SetParameter("emailServerProfileId", id);
    $v_0.Execute()
};
Mscrm.EmailServerProfileActions
    .IsOrgDefaultProfileFromGrid = function(records) {
        return Mscrm.EmailServerProfileActions.IsOrgDefaultProfile(records[0].Id)
    };
Mscrm.EmailServerProfileActions.IsOrgDefaultProfileFromForm = function() {
    var $v_0 = $get("crmFormSubmit");
    return Mscrm.EmailServerProfileActions.IsOrgDefaultProfile($v_0.crmFormSubmitId.value)
};
Mscrm.EmailServerProfileActions.IsOrgDefaultProfile = function($p0) {
    var $v_0 = new RemoteCommand("EmailServerProfileService", "IsDefaultProfile", null);
    $v_0.SetParameter("emailServerProfileId", $p0);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success && $v_1.ReturnValue) return true;
    else return false
};
Mscrm.EmailServerProfileActions
    .NewExchangeEmailServerProfile = function() { Mscrm.EmailServerProfileActions.$D("ServerType=Exchange") };
Mscrm.EmailServerProfileActions
    .NewOtherEmailServerProfile = function() { Mscrm.EmailServerProfileActions.$D("ServerType=Other") };
Mscrm.EmailServerProfileActions
    .CreateExchangeOnpremEmailServerProfileForCrmOnline = function() {
        Mscrm.EmailServerProfileActions.$D("ServerType=ExchangeOnpremOnCrmOnline")
    };
Mscrm.EmailServerProfileActions
    .CreateExchangeOnlineEmailServerProfileForCrmOnPrem = function() {
        Mscrm.EmailServerProfileActions.$D("ServerType=ExchangeOnlineOnCrmOnPrem")
    };
Mscrm.EmailServerProfileActions.$D = function($p0) { openObj(9605, null, $p0, "", 0, null) };
Mscrm.List = function() {};
Mscrm.List.copyTo = function(gridControl, records, entityTypeCode) {
    var $v_0 = "copyto", $v_1 = new Xrm.LookupOptions, $v_2;
    $v_2 = ["list"];
    var $v_3 = {};
    $v_3["listType"] = "static";
    $v_1.lookupStyle = "single";
    $v_1.lookupTypes = $v_2;
    $v_1.additionalParams = $v_3;
    $v_1.showNew = true;
    $v_1.showProperties = true;
    $v_1.defaultViewId = "577EA96E-B1F6-499b-98A7-ABB5BE8233F9";
    Xrm.Internal.lookupObjects($v_1,
        function($p1_0) { Mscrm.List.takeAction($p1_0, $v_0, entityTypeCode, records, 400, 250) })
};
Mscrm.List.takeAction = function(lookupItems, actionName, entityTypeCode, records, windowWidth, windowHeight) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(lookupItems) || !lookupItems.length) return;
    var $v_0 = lookupItems[0].id,
        $v_1 = lookupItems[0].type.toString(),
        $v_2 = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri(actionName, entityTypeCode, records.length);
    $v_2.get_query()["itemObjectId"] = $v_0;
    $v_2.get_query()["itemObjectTypeCode"] = $v_1;
    windowWidth = Mscrm.InternalUtilities.JSTypes.isNull(windowWidth) ? 400 : windowWidth;
    windowHeight = Mscrm.InternalUtilities.JSTypes.isNull(windowHeight) ? 250 : windowHeight;
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_2, records, windowWidth, windowHeight, null)
};
Mscrm.List.addToCampaign = function(gridControl, records, entityTypeCode) {
    var $v_0 = "addtocampaign", $v_1 = new Xrm.LookupOptions, $v_2;
    $v_2 = ["campaign"];
    $v_1.lookupStyle = "single";
    $v_1.lookupTypes = $v_2;
    $v_1.showNew = true;
    $v_1.showProperties = true;
    Xrm.Internal.lookupObjects($v_1,
        function($p1_0) { Mscrm.List.takeAction($p1_0, $v_0, entityTypeCode, records, 475, 250) })
};
Mscrm.List.manageMembers = function(gridControl, records, entityTypeCode, objectId, form) {
    var $v_0 = Xrm.Page.getAttribute("type");
    if ($v_0.getValue()) OpenDynamicListQuery(entityTypeCode, gridControl.get_id(), objectId);
    else OpenManageMembersWizard(entityTypeCode, gridControl.get_id(), objectId, 440, 450)
};
Mscrm.List.manageMembersForm = function(form) {
    var $v_0 = Xrm.Page.getAttribute("createdfromcode"), $v_1 = Xrm.Page.getAttribute("type"), $v_2 = $v_0.getValue();
    if ($v_1.getValue()) OpenDynamicListQuery($v_2, null, Xrm.Page.data.entity.getId());
    else OpenManageMembersWizard($v_2, null, Xrm.Page.data.entity.getId(), 440, 450)
};
Mscrm.List.copyListMembers = function(gridControl, records, entityTypeCode, objectId) {
    var $v_0 = "copylistmember";
    Xrm.Internal.doAction(gridControl.get_id(), entityTypeCode, $v_0, "")
};
Mscrm.List.removeFromList = function(gridControl, records, entityTypeCode) {
    var $v_0 = "delete";
    doActionEx(gridControl.get_id(), 4301, window.parent.$get("crmFormSubmit").crmFormSubmitId.value, $v_0)
};
Mscrm.List.createOpportunityForMembers = function(gridControl) {
    var $v_0 = Xrm.Page.data.entity, $v_1 = $v_0.attributes.get("createdfromcode"), $v_2 = $v_1.getValue(), $v_3 = null;
    if (gridControl) $v_3 = gridControl.get_id();
    else
        switch ($v_2) {
        case 1:
            $v_3 = "accounts";
            break;
        case 2:
            $v_3 = "contacts";
            break;
        default:
            throw Error.invalidOperation("Operation is invalid for this list.")
        }
    var $v_4 = Mscrm.List.$y($v_3);
    doActionExArray($v_3, $v_2, $v_0.getId(), "createopportunity", 4301, "", $v_4)
};
Mscrm.List.$y = function($p0) {
    var $v_0 = $find($p0), $v_1 = [];
    if (!IsNull($v_0)) {
        var $v_2 = $v_0.get_innerGrid();
        if (IsNull($v_2)) {
            var $v_3 = $v_0.get_selectedRecords();
            if (IsNull($v_3) || !$v_3.length) $v_3 = $v_0.get_allRecords();
            for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) $v_1[$v_4] = $v_3[$v_4].Id
        } else {
            var $v_5 = $v_0.get_innerGrid().get_selectedRecords();
            if (IsNull($v_5) || !$v_5.length) $v_5 = $v_2.get_allRecords();
            for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) $v_1[$v_6] = $v_5[$v_6][0]
        }
    }
    return $v_1
};
Mscrm.List.isAccountOrContactMemberType = function(objectTypeCode) {
    var $v_0 = Xrm.Page.getAttribute("createdfromcode");
    if (!$v_0) return false;
    var $v_1 = IsNull(objectTypeCode) ? $v_0.getValue() : objectTypeCode;
    if ($v_1 === 1 || $v_1 === 2) return true;
    return false
};
Mscrm.List.copyDynamicListToStatic = function(id) {
    if (Xrm.Page.data.entity.getIsDirty()) {
        alert(Xrm.Internal.getResourceString("LOCID_FORM_DIRTY"));
        return
    }
    var $v_0 = Mscrm.CrmUri.create("/MA/Lists/dlg_copytostatic.aspx"), $v_1 = null, $v_2 = new Xrm.DialogOptions;
    $v_2.width = 450;
    $v_2.height = 200;
    id = Xrm.Page.data.entity.getId();
    $v_1 = Mscrm.CommandBarActions.createCallbackFunctionFactory(Mscrm.List.copyDynamicListToStaticCallback, [id]);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, $v_1)
};
Mscrm.List.copyDynamicListToStaticCallback = function(isCopy, id) {
    isCopy &&
        Xrm.Internal.messages.copyDynamicListToStatic(id).then(function($p1_0) {
                if ($p1_0) {
                    var $v_0 = $p1_0.staticListId.toString();
                    Xrm.Utility.openEntityForm("list", $v_0, null);
                    Xrm.Internal.refreshParentGrid(4300, "", $v_0)
                }
            },
            function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
};
Mscrm.List.isACLFormAndOffline = function(gridTypeCode, gridControl) {
    var $v_0 = true;
    if (!Mscrm.SessionInfo.isOnline()) {
        if (IsNull(gridControl)) return false;
        var $v_1 = gridControl.GetParameter("relName");
        if (gridTypeCode === 4300)
            switch ($v_1) {
            case "listlead_association":
            case "listcontact_association":
            case "listaccount_association":
                $v_0 = false;
                break;
            default:
                break
            }
    }
    return $v_0
};
Mscrm.MailboxActions = function() {};
Mscrm.MailboxActions.launchMailboxFromForm = function() {
    if (typeof DefaultMailboxId == "undefined") return;
    var $v_0 = DefaultMailboxId;
    Mscrm.MailboxActions.$f($v_0)
};
Mscrm.MailboxActions.launchMailboxFromGrid = function(records) {
    if (records.length !== 1) {
        alert(LOCID_LAUNCHMAILBOX_NOrMultipleItemSelected);
        return
    }
    var $v_0 = records[0];
    Mscrm.MailboxActions.$1C($v_0.Id, $v_0.TypeCode)
};
Mscrm.MailboxActions.$1C = function($p0, $p1) {
    var $v_0 = new RemoteCommand("MailboxService", "RetrieveDefaultMailboxId", null);
    $v_0.SetParameter("objectId", $p0);
    $v_0.SetParameter("objectTypeCode", $p1);
    var $v_1 = $v_0.Execute();
    Mscrm.MailboxActions.$f($v_1.ReturnValue)
};
Mscrm.MailboxActions.$f = function($p0) { openObj(9606, $p0, "", "", 0, null) };
Mscrm.MailboxActions.TestAccessFromForm = function() {
    var $v_0 = $get("crmFormSubmit"), $v_1 = new Mscrm.EntityReference;
    $v_1.Id = $v_0.crmFormSubmitId.value;
    $v_1.TypeCode = Number.parseInvariant($v_0.crmFormSubmitObjectType.value);
    if ($v_1.TypeCode === 9606) {
        if (Mscrm.FeatureControl.get_Current()
            .isFeatureEnabled("FCB.SSSReliability") &&
            Xrm.Page.context.isCrmOnline()) {
            var $v_4 = new RemoteCommand("MailboxService", "CheckifO365UserHasExchangeSubscriptions", null);
            $v_4.SetParameter("mailboxId", $v_1.Id);
            var $v_5 = $v_4.Execute();
            if ($v_5 && !$v_5.ReturnValue) {
                $v_4 = new RemoteCommand("MailboxService",
                    "UnapproveMailboxIfO365UserDoesNotHaveExchangeSubscriptions",
                    null);
                $v_4.SetParameter("mailboxIds", $v_1.Id);
                $v_5 = $v_4.Execute();
                alert(window.LOCID_TESTEXONLINE_SUBSCRIPTION);
                return
            }
        }
        var $v_2 = new RemoteCommand("MailboxService", "IsTestAccessRunning", null);
        $v_2.SetParameter("mailboxId", $v_1.Id);
        var $v_3 = $v_2.Execute();
        if ($v_3 && $v_3.ReturnValue) {
            alert(window.LOCID_TESTACCESS_ALREADYRUNNING);
            return
        }
    } else if ($v_1.TypeCode === 9605)
        if (!Mscrm.MailboxActions.$b($v_1.Id)) {
            alert(window.LOCID_NO_MAILBOX_ASSOCIATED);
            return
        }
    Mscrm.MailboxActions.$C(null, [$v_1], null, 530, 220, false, 1);
    Mscrm.MailboxActions.$k()
};
Mscrm.MailboxActions.$k = function() {
    var $v_0 = $find("crmForm");
    !IsNull($v_0) && $v_0.SubmitCrmForm(4, false, true, false, false)
};
Mscrm.MailboxActions.$b = function($p0) {
    var $v_0 = new RemoteCommand("EmailServerProfileService", "IsAnyActiveMailboxAssociated", null);
    $v_0.SetParameter("emailServerProfileId", $p0);
    var $v_1 = $v_0.Execute();
    return !!$v_1 && $v_1.ReturnValue
};
Mscrm.MailboxActions.TestAccessFromGrid = function(gridControl, records, allRecords) {
    var $v_0 = gridControl.get_entityTypeCode() === 9606, $v_1 = $v_0 ? 300 : 220;
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSReliability") &&
        Xrm.Page.context.isCrmOnline() &&
        gridControl.getViewSelector().getCurrentView().id === "{4E495712-3F08-49CC-BD14-70C1745EB4ED}") {
        alert(window.LOCID_UNAPPROVE_MAILBOX_VIEW);
        return
    }
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSReliability") && Xrm.Page.context.isCrmOnline()) {
        for (var $v_2 = new RemoteCommand("MailboxService", "CheckO365UsersExchangeSubscriptions", null),
            $v_3 = new Sys.StringBuilder,
            $$arr_7 = records,
            $$len_8 = $$arr_7.length,
            $$idx_9 = 0;
            $$idx_9 < $$len_8;
            ++$$idx_9) {
            var $v_5 = $$arr_7[$$idx_9];
            $v_3.append($v_5.Id + ",")
        }
        $v_2.SetParameter("mailboxIds", $v_3.toString());
        var $v_4 = $v_2.Execute();
        if ($v_4)
            if (Object.getTypeName($v_4.ReturnValue) !== "Object") {
                var $v_6 = new RemoteCommand("MailboxService",
                    "UnapproveMailboxIfO365UserDoesNotHaveExchangeSubscriptions",
                    null);
                $v_6.SetParameter("mailboxIds", $v_4.ReturnValue);
                var $v_7 = $v_6.Execute()
            }
    }
    Mscrm.MailboxActions.$C(gridControl, records, allRecords, 530, $v_1, $v_0, 1)
};
Mscrm.MailboxActions.ApplyDefaultsFromForm = function() {
    var $v_0 = $get("crmFormSubmit"), $v_1 = new Mscrm.EntityReference;
    $v_1.Id = $v_0.crmFormSubmitId.value;
    $v_1.TypeCode = Number.parseInvariant($v_0.crmFormSubmitObjectType.value);
    Mscrm.MailboxActions.$C(null, [$v_1], null, 530, 220, false, 0);
    Mscrm.MailboxActions.$k()
};
Mscrm.MailboxActions.ApplyDefaultsFromGrid = function(gridControl, records, allRecords) {
    Mscrm.MailboxActions.$C(gridControl, records, allRecords, 530, 300, true, 0)
};
Mscrm.MailboxActions.$C = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_applymailboxsettings.aspx"), $v_1 = {};
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSReliability") && Xrm.Page.context.isCrmOnline()) {
        var $v_2, $v_3 = new RemoteCommand("MailboxService", "GetTenantAdminEmailAddresses", null);
        $v_2 = $v_3.Execute();
        if ($v_2.ReturnValue) $v_1["tenantemailaddress"] = $v_2.ReturnValue;
        $v_0.get_query()["selectedrecords"] = $p1;
        for (var $v_4, $$arr_C = $p1, $$len_D = $$arr_C.length, $$idx_E = 0; $$idx_E < $$len_D; ++$$idx_E) {
            var $v_5 = $$arr_C[$$idx_E];
            $v_4 = $v_5.Id
        }
    }
    $v_0.get_query()["showrecordselection"] = $p5;
    $v_0.get_query()["recordobjecttypecode"] = $p1[0].TypeCode;
    $v_0.get_query()["dialogmode"] = $p6;
    $v_1["gridcontrol"] = $p0;
    $v_1["selectedrecords"] = $p1;
    $v_1["allrecords"] = $p2;
    openStdDlg($v_0, $v_1, $p3, $p4, false, $p5, "maximize:no;minimize:no")
};
Mscrm.MailboxActions.OneClickLog = function() {
    var $v_0 = $get("crmFormSubmit"), $v_1 = new Mscrm.EntityReference;
    $v_1.Id = $v_0.crmFormSubmitId.value;
    var $v_2 = Mscrm.CrmUri.create("/_grid/cmds/dlg_createmailboxoneclicklog.aspx");
    $v_2.get_query()["mailboxId"] = $v_1.Id;
    var $v_3 = window.document.getElementsByName("oneClickLogFormId")[0];
    if (IsNull($v_3)) {
        $v_3 = window.document.createElement("form");
        $v_3.setAttribute("name", "oneClickLogFormId");
        $v_3.setAttribute("method", "post");
        $v_3.setAttribute("style", "display:none");
        document.body.appendChild($v_3)
    }
    $v_3.action = $v_2.toString();
    $v_3.submit()
};
Mscrm.MailboxActions.ApproveEmailFromGrid = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "approve_emailaddress", null)
};
Mscrm.MailboxActions.RejectEmailFromGrid = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "reject_emailaddress", null)
};
Mscrm.MailboxActions.ToggleVerboseLogging = function(gridControl) {
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSTroubleShooting")) return;
    var $v_0,
        $v_1 = String.format(window.LOCID_VERBOSELOG_MAXMAILBOX, window.VERBOSELOG_MAXMAILBOX),
        $v_2 = new RemoteCommand("MailboxService", "ToggleVerboseLogging", null);
    $v_2.SetParameter("mailboxIds", gridControl.get_selectedIds().join(","));
    $v_0 = $v_2.Execute();
    if ($v_0.ReturnValue === 1) {
        alert(window.LOCID_VERBOSELOG_SUCCESS);
        gridControl.Refresh()
    } else if ($v_0.ReturnValue === 2) alert(window.LOCID_VERBOSELOG_ERROR);
    else $v_0.ReturnValue === 3 && alert($v_1)
};
Mscrm.MailboxActions.ToggleMailboxStatistics = function() {
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSTroubleShooting")) return;
    var $v_0, $v_1 = new RemoteCommand("MailboxService", "ToggleMailboxStatistics", null);
    $v_0 = $v_1.Execute();
    if (!$v_0.ReturnValue) alert(Xrm.Internal.getResourceString("ToggleMailboxStatistics.OffMessage"));
    else $v_0.ReturnValue === 1 && alert(Xrm.Internal.getResourceString("ToggleMailboxStatistics.OnMessage"))
};
Mscrm.MailboxActions.TestExchangeConnectionFromForm = function() {
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.TestExchangeServer")) return;
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.HybridSSS") &&
        !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.ReverseHybridSSS")) return;
    var $v_0 = $get("servertype");
    if (!IsNull($v_0)) Mscrm.MailboxActions.$7 = $v_0.getAttribute("defaultselected");
    var $v_1 = $get("crmFormSubmit"), $v_2 = new Mscrm.EntityReference;
    $v_2.Id = $v_1.crmFormSubmitId.value;
    $v_2.TypeCode = Number.parseInvariant($v_1.crmFormSubmitObjectType.value);
    Mscrm.MailboxActions.$9 = $v_1.crmFormSubmitId.value;
    var $v_3 = new RemoteCommand("MailboxService", "RetrieveServiceAccountMailboxId", null);
    $v_3.SetParameter("emailServerProfileId", Mscrm.MailboxActions.$9);
    var $v_4 = $v_3.Execute();
    if ($v_4 && $v_4.ReturnValue && $v_4.ReturnValue.toString().length) {
        var $v_5 = false;
        Mscrm.MailboxActions.$4 = $v_4.ReturnValue.toString();
        if (!Mscrm.MailboxActions.$4.localeCompare("00000000-0000-0000-0000-000000000000")) $v_5 = true;
        $v_2.Id = Mscrm.MailboxActions.$4;
        $v_2.TypeCode = 9606;
        if (!$v_5) {
            var $v_6 = new Mscrm.EmailConnector.ApplyMailboxSettings(0, null, [$v_2], null, "1", true, 9606, 0);
            $v_6.processBatch(1, Mscrm.MailboxActions.$q)
        } else {
            if (!IsNull(Mscrm.MailboxActions
                    .$7) &&
                Mscrm.MailboxActions.$7 === (2).toString()) alert(window.LOCID_TESTEXCHANGE_STILLRUNNING);
            else alert(window.LOCID_TESTEXONLINE_STILLRUNNING);
            return
        }
    }
    if ($v_2.TypeCode === 9605)
        if (!Mscrm.MailboxActions.$b($v_2.Id)) {
            alert(window.LOCID_NO_MAILBOX_ASSOCIATED);
            return
        }
};
Mscrm.MailboxActions.$q = function($p0, $p1, $p2, $p3) {
    if (!$p3) {
        if ($p0 === -1) {
            var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_testexchangeserver_status.aspx");
            $v_0.get_query()["mailboxId"] = Mscrm.MailboxActions.$4;
            $v_0.get_query()["emailserverprofileid"] = Mscrm.MailboxActions.$9;
            $v_0.get_query()["servertype"] = Mscrm.MailboxActions.$7;
            openStdDlg($v_0, null, 600, 500, true, true, "resizable:0;status:0;scroll:1")
        }
    } else
        Xrm.Internal.messages.deleteEntity("mailbox", Mscrm.MailboxActions.$4)
            .then(function($p1_0) { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.MailboxActions.SendEmailToTenantAdmins = function() {
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSReliability") && Xrm.Page.context.isCrmOnline()) {
        var $v_0 = new RemoteCommand("MailboxService", "GetTenantAdminEmailAddresses", null),
            $v_1 = $v_0.Execute(),
            $v_2 = Xrm.Page.getAttribute("emailaddress");
        if (!$v_2 || !$v_2.getValue() || $v_2.getValue() === "") {
            alert(window.LOCID_NOEMAILADDRESS_MAILBOX);
            return
        }
        var $v_3 = Xrm.Page.getAttribute("name"),
            $v_4 = String.format(Xrm.Internal.getResourceString("Mailbox.TenantAdmin.ApproveEmail.SingleUserTemplate"),
                $v_2 && $v_2.getValue() ? $v_2.getValue().toString() : "",
                $v_3 && $v_3.getValue() ? $v_3.getValue().toString() : "");
        window.location.href = String.format("mailto:{0}?Subject={1}&Body={2}",
            $v_1 && $v_1.ReturnValue ? $v_1.ReturnValue.toString() : "",
            "Mailbox approval",
            $v_4)
    }
};
Mscrm.PositionActions = function() {};
Mscrm.PositionActions.changeParentPosition = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("changeposition", entityTypeCode, records.length), $v_1 = 400, $v_2 = 225;
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, $v_1, $v_2)
};
Mscrm.QueueItem = function() {};
Mscrm.QueueItem.queueManipulation = function(gridControl, records, entityTypeCode, queueAction) {
    for (var $v_0 = gridControl, $v_1 = $v_0.GetRecordsFromInnerGrid(true), $v_3 = 0; $v_3 < records.length; $v_3++) {
        var $v_4 = $v_1[$v_3], $v_5 = $v_4[3], $v_6 = $v_5.getAttribute("queueitemid");
        records[$v_3].Id = $v_6;
        records[$v_3].TypeCode = 2029
    }
    var $v_2 = Mscrm.GridRibbonActions.$0(queueAction, entityTypeCode, records.length);
    if (queueAction === "queueitemrouting" || queueAction === "queueitempick") {
        if (queueAction === "queueitemrouting") {
            if (records.length === 1) $v_2.get_query()["objectId"] = records[0].Id;
            $v_2.get_query()["queueid"] = gridControl.GetParameter("qid")
        }
        Mscrm.GridRibbonActions.$1($v_2, gridControl, records, 500, 250)
    } else if (queueAction === "queueitemroute" || queueAction === "queueitemworkon"
    ) Mscrm.GridRibbonActions.$1($v_2, gridControl, records, 500, 350);
    else Mscrm.GridRibbonActions.$1($v_2, gridControl, records, 450, 200)
};
Mscrm.QueueItem.queueItemDetail = function(gridControl, records, entityTypeCode, queueAction) {
    if (IsNull(records) || !records.length) {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return
    }
    if (records.length !== 1) {
        alert(window.LOCID_CUSTMSG_TOOMANY_REC);
        return
    }
    var $v_0 = gridControl,
        $v_1 = $v_0.GetRecordsFromInnerGrid(true),
        $v_2 = $v_1[0],
        $v_3 = $v_2[3],
        $v_4 = $v_3.getAttribute("queueitemid");
    openItem(entityTypeCode, $v_4.toString(), 0, null)
};
Mscrm.QueueItem.hasQueueIdChanged = function() {
    var $v_0 = $get("crmQueueSelector");
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.options[$v_0.selectedIndex], $v_2 = $v_1.getAttribute("isdefault");
        if (!isNullOrEmptyString($v_2) && Boolean.parse($v_2)) return false;
        else return true
    }
    return false
};
Mscrm.QueueItem.entityQueueItemDetail = function(objectId) { Mscrm.CommandBarActions.entityQueueItemDetail(objectId) };
Mscrm.QuickCampaign = function() {};
Mscrm.QuickCampaign.quickCampaignSelectedItems = function(gridControl, records, entityTypeCode, totalRecordCount) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.quickCampaignSelectedItems(gridControl, records, entityTypeCode, totalRecordCount);
    else {
        if (!totalRecordCount) totalRecordCount = gridControl.get_totalRecordCount();
        if (entityTypeCode === 4300)
            if (records.length > 1) alert(window.LOCID_MINICAMP_TOOMANY_RECORDS);
            else {
                var $v_0 = new Array(2);
                $v_0[0] = "statecode";
                $v_0[1] = "membertype";
                $v_0.type = "string";
                var $v_1 = new RemoteCommand("MarketingAutomation", "RetrieveList", null);
                $v_1.SetParameter("id", records[0]);
                $v_1.SetParameter("columns", $v_0);
                var $v_2 = $v_1.Execute();
                if ($v_2.Success) {
                    var $v_3 = $v_2.ReturnValue,
                        $v_4 = XUI.Xml.LoadXml($v_3),
                        $v_5 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "/list/statecode", null));
                    if ($v_5 === "Inactive") alert(window.LOCID_MC_CANNOT_RUN_INACTLST);
                    else {
                        var $v_6 = parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "/list/membertype", null)));
                        Mscrm.QuickCampaign.runMiniCampaign(gridControl,
                            records,
                            entityTypeCode,
                            totalRecordCount,
                            1,
                            $v_6)
                    }
                }
            }
        else
            Mscrm.QuickCampaign.runMiniCampaign(gridControl,
                records,
                entityTypeCode,
                totalRecordCount,
                1,
                entityTypeCode)
    }
};
Mscrm.QuickCampaign.quickCampaignCurrentPage = function(gridControl, selectedRecordIds, entityTypeCode) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.quickCampaignCurrentPage(gridControl, selectedRecordIds, entityTypeCode);
    else if (!gridControl.get_totalRecordCount()) alert(window.LOCID_MINICAMP_NORECORDS_MSG);
    else
        Mscrm.QuickCampaign.runMiniCampaign(gridControl,
            selectedRecordIds,
            entityTypeCode,
            gridControl.get_pageRecordCount(),
            2,
            entityTypeCode)
};
Mscrm.QuickCampaign.quickCampaignAllPages = function(gridControl, selectedRecordIds, entityTypeCode) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.quickCampaignAllPages(gridControl, selectedRecordIds, entityTypeCode);
    else {
        if (!IsNull(gridControl.GetParameter("queryapi"))) {
            alert(window.LOCID_QC_CANNOT_RUN_ASSO);
            return
        }
        if (Mscrm.GridRibbonActions.$d(gridControl.GetParameter("viewid"))) {
            alert(window.LOCID_MINICAMP_CANNOT_RUN);
            return
        }
        if (!gridControl.get_totalRecordCount()) alert(window.LOCID_MINICAMP_NORECORDS_MSG);
        else
            Mscrm.QuickCampaign.runMiniCampaign(gridControl,
                selectedRecordIds,
                entityTypeCode,
                gridControl.get_totalRecordCount(),
                3,
                entityTypeCode)
    }
};
Mscrm.QuickCampaign.runMiniCampaign = function(gridControl,
    selectedRecords,
    entityTypeCode,
    totalRecordCount,
    mcOption,
    createdFromOtc) {
    var $v_0 = {};
    $v_0["TotalRecords"] = totalRecordCount;
    $v_0["SelectedRecords"] = selectedRecords.length;
    $v_0["ObjectTypeCode"] = entityTypeCode;
    $v_0["MCOption"] = mcOption;
    $v_0["CreatedFromOtc"] = createdFromOtc;
    switch (mcOption) {
    case 1:
        $v_0["MCOptionTitle"] = window.LOCID_MC_SELECTION_SELECTED;
        $v_0["Ids"] = selectedRecords;
        $v_0["GridXml"] = "";
        break;
    case 2:
        $v_0["MCOptionTitle"] = window.LOCID_MC_SELECTION_ALLONPAGE;
        $v_0["Ids"] = selectedRecords;
        $v_0["GridXml"] = "";
        break;
    case 3:
        $v_0["MCOptionTitle"] = window.LOCID_MC_SELECTION_ALL;
        $v_0["Ids"] = "";
        $v_0["GridXml"] = gridControl.get_gridXml();
        break;
    default:
        catchError("Invalid option value passed to RunMiniCampaign().", window.location.href, 0, true);
        break
    }
    var $v_1 = Mscrm.CrmUri.create("/MA/MiniCampaign/MiniCampaign.aspx");
    (new Mscrm.CrmDialog($v_1,
        $v_0,
        parseInt(window.LOCID_MC_WINDOW_WIDTH, 10),
        parseInt(window.LOCID_MC_WINDOW_HEIGHT, 10),
        null)).show()
};
Mscrm.RecommendationModelActions = function() {};
Mscrm.RecommendationModelActions.buildModel = function(recommendationModelId) {
    var $v_0 = 500, $v_1 = 390, $v_2 = 9935, $v_3 = new Xrm.DialogOptions;
    $v_3.height = $v_1;
    $v_3.width = $v_0;
    var $v_4 = [recommendationModelId], $v_5 = Mscrm.CrmUri.create("/_grid/cmds/dlg_buildrecommendationmodel.aspx");
    if (!IsNull($v_2) && !IsNull(recommendationModelId)) {
        $v_5.get_query()["iObjType"] = $v_2;
        $v_5.get_query()["iId"] = recommendationModelId
    }
    var $v_6 = Mscrm.RecommendationModelActions.refreshPage;
    Xrm.Internal.openDialog($v_5.toString(), $v_3, $v_4, null, $v_6)
};
Mscrm.RecommendationModelActions.testModel = function() {
    var $v_0 = null, $v_1 = Mscrm.GridRibbonActions.$0("testrecommendationmodel", 9933, 0);
    Mscrm.RecommendationModelActions.executeRecommendationModelAction($v_1, 850, 560, $v_0)
};
Mscrm.RecommendationModelActions
    .executeRecommendationModelAction = function(actionUri, dialogWidth, dialogHeight, dialogArguments) {
        if (IsNull(dialogWidth)) dialogWidth = 400;
        if (IsNull(dialogHeight)) dialogHeight = 200;
        var $v_0 = new Mscrm.CrmDialog(actionUri, dialogArguments, dialogWidth, dialogHeight, null);
        return $v_0.show()
    };
Mscrm.RecommendationModelActions.deleteModel = function(recommendationModelId, entityName) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 220;
    $v_0.width = 450;
    var $v_1 = [recommendationModelId],
        $v_2 = Xrm.Internal.getEntityCode(entityName),
        $v_3 = [$v_2, recommendationModelId],
        $v_4 = Mscrm.GridRibbonActions.$0("deleterecommendationmodel", $v_2, 0);
    $v_4.get_query()["iId"] = recommendationModelId;
    var $v_5 = Mscrm.Utilities
        .createCallbackFunctionForXrmDialog(Mscrm.RecommendationModelActions.showDeleteStatus, $v_3);
    Xrm.Internal.openDialog($v_4.toString(), $v_0, $v_1, null, $v_5)
};
Mscrm.RecommendationModelActions.activateModel = function(action, entityId, entityName) {
    var $v_0 = $get("Catalog Coverage (%)_label"), $v_1 = $get("Precision_label");
    if (!_Script.isNullOrUndefined($v_0) && !_Script.isNullOrUndefined($v_1)) {
        var $v_6 = "", $v_7 = "";
        if ($v_0.childNodes.length > 1) $v_6 = $v_0.childNodes[1].nodeValue;
        if ($v_1.childNodes.length > 1) $v_7 = $v_1.childNodes[1].nodeValue;
        if (!isNullOrEmptyString($v_6) && !isNullOrEmptyString($v_7)) {
            var $v_8 = Xrm.Internal.getResourceString("ActivateAzureRecommendationModel_PrecisionWarning_Message"),
                $v_9 = Xrm.Internal.getResourceString("ActivateAzureRecommendationModel_CatalogWarning_Message"),
                $v_A = Xrm.Internal.getResourceString("ActivateAzureRecommendationModel_WarningConfirmation_Message"),
                $v_B = Number.parseInvariant($v_7),
                $v_C = Number.parseInvariant($v_6),
                $v_D = "";
            if ($v_B < 50) $v_D += String.format($v_8, $v_B, 50) + "\n";
            if ($v_C < 90) $v_D += String.format($v_9, $v_C, 90) + "\n";
            if ($v_D !== "") {
                $v_D += $v_A;
                var $v_E = confirm($v_D);
                if (!$v_E) return
            }
        }
    }
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 235;
    $v_2.width = 700;
    var $v_3 = new Xrm.Objects.EntityReference(entityName, new Microsoft.Crm.Client.Core.Framework.Guid(entityId)),
        $v_4 = [$v_3],
        $v_5 = {};
    $v_5["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_4);
    $v_5["action"] = action;
    $v_5["lastButtonClicked"] = "";
    $v_5["state_id"] = -1;
    $v_5["status_id"] = -1;
    $v_5["entityId"] = entityId;
    Xrm.Dialog.openDialog("RecommendationModelDialog",
        $v_2,
        $v_5,
        Mscrm.CommandBarActions.closeSetStateDialogCallback,
        null)
};
Mscrm.RecommendationModelActions.showDeleteStatus = function(result, objectType, recordId) {
    !Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp() && Xrm.Internal.raiseRecordsDeletedEvent([recordId]);
    if (Boolean.parse(result))
        Mscrm.RecommendationModelActions.performRefreshAfterDeleteAction(result, objectType, recordId);
    else {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = 220;
        $v_0.width = 450;
        var $v_1 = [objectType, recordId], $v_2 = new Xrm.AlertDialogStrings;
        $v_2.text = Xrm.Internal.getResourceString("DeleteAzureRecommendationModel_Failure_Message");
        var $v_3 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.RecommendationModelActions.performRefreshAfterDeleteAction, $v_1);
        Xrm.Dialog.openAlertDialog($v_2, $v_0, $v_3)
    }
};
Mscrm.RecommendationModelActions.deleteModelVersion = function(recommendationModelVersionId, entityName) {
    var $v_0 = Xrm.Internal.getEntityCode(entityName);
    Mscrm.RecommendationModelActions.$U(null, recommendationModelVersionId, $v_0)
};
Mscrm.RecommendationModelActions
    .deleteModelVersionFromGrid = function(gridControl, records, entityTypeCode) {
        Mscrm.RecommendationModelActions.$U(gridControl, records[0].Id, entityTypeCode)
    };
Mscrm.RecommendationModelActions.showDeleteModelVersionStatus = function(result, objectType, recordId, gridControl) {
    !Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp() && Xrm.Internal.raiseRecordsDeletedEvent([recordId]);
    if (String === Object.getType(result))
        if (result.toString() === "true")
            if (!gridControl)
                Mscrm.RecommendationModelActions.performRefreshAfterDeleteAction(result, objectType, recordId);
            else Mscrm.RecommendationModelActions.performGridRefresh(result, gridControl);
        else {
            var $v_0 = new Xrm.DialogOptions;
            $v_0.height = 220;
            $v_0.width = 450;
            var $v_1 = [objectType, recordId], $v_2 = new Xrm.AlertDialogStrings;
            $v_2.text = Xrm.Internal.getResourceString("DeleteAzureRecommendationModelVersion_Failure_Message");
            var $v_3 = null;
            if (!gridControl)
                $v_3 = Mscrm.InternalUtilities.GridUtilities
                    .createCallbackFunctionFactory(Mscrm.RecommendationModelActions.performRefreshAfterDeleteAction,
                        $v_1);
            else
                $v_3 = Mscrm.InternalUtilities.GridUtilities
                    .createCallbackFunctionFactory(Mscrm.RecommendationModelActions.performGridRefresh, [gridControl]);
            Xrm.Dialog.openAlertDialog($v_2, $v_0, $v_3)
        }
    else {
        var $v_4 = 2147746326, $v_5 = Mscrm.ErrorInformation.createFromDoc(result);
        Xrm.Internal.openErrorDialog(IsNull($v_5.get_errorCode()) ? $v_4 : $v_5.get_errorCode(),
            $v_5.get_description(),
            result.xml)
    }
};
Mscrm.RecommendationModelActions.performRefreshAfterDeleteAction = function(result, objectType, recordId) {
    if (result) {
        Xrm.Page.data.setFormDirty(false);
        Xrm.Internal.refreshParentGrid(objectType, "", recordId);
        window.setTimeout(function() { Xrm.Page.ui.close() }, 200)
    }
};
Mscrm.RecommendationModelActions.performGridRefresh = function(result, gridControl) {
    if (result) {
        Xrm.Page.data.setFormDirty(false);
        gridControl.refresh()
    }
};
Mscrm.RecommendationModelActions.refreshPage = function(response) { Xrm.Page.data.refresh(false) };
Mscrm.RecommendationModelActions.$U = function($p0, $p1, $p2) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 220;
    $v_0.width = 450;
    var $v_1 = [$p1], $v_2 = Mscrm.GridRibbonActions.$0("deleterecommendationmodelversion", $p2, 0);
    $v_2.get_query()["iId"] = $p1;
    var $v_3 = [$p2, $p1, $p0],
        $v_4 = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(Mscrm.RecommendationModelActions.showDeleteModelVersionStatus, $v_3);
    Xrm.Internal.openDialog($v_2.toString(), $v_0, $v_1, null, $v_4)
};
Mscrm.RecommendationModelMappingActions = function() {};
Mscrm.RecommendationModelMappingActions
    .addNewRecordFromMappingSubGrid = function(gridTypeCode,
        parentEntityTypeCode,
        parentEntityId,
        primaryControl,
        gridControl) {
        var $v_0 = {};
        $v_0["_CreateFromType"] = parentEntityTypeCode;
        $v_0["_CreateFromId"] = parentEntityId;
        var $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getViewSelector().getCurrentView().id),
            $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid("19FE39A3-0DEA-E411-80C7-00155D9DB51D"),
            $v_3 = new Microsoft.Crm.Client.Core.Framework.Guid("E42CDED5-0DEA-E411-80C7-00155D9DB51D");
        if ($v_1.equals($v_2)) $v_0["mappingtype"] = 1;
        else if ($v_1.equals($v_3)) $v_0["mappingtype"] = 2;
        Xrm.Utility.openEntityForm("recommendationmodelmapping", null, $v_0)
    };
Mscrm.ReportActions = function() {};
Mscrm.ReportActions.viewReport = function(gridControl, records) {
    if (records.length === 1) {
        var $v_0 = records[0],
            $v_1 = Mscrm.ReportActions.$K(gridControl, $v_0.Id),
            $v_2 = gridControl.getCellValue("filename", $v_0.Id);
        Mscrm.ReportUtil.viewReport($v_1, $v_0.Id, $v_2, "run", null)
    } else alert(window.LOCID_CUSTMSG_TOOMANY_REC)
};
Mscrm.ReportActions.editReportFilter = function(gridControl, records) {
    if (records.length === 1) {
        var $v_0 = records[0],
            $v_1 = Mscrm.ReportActions.$K(gridControl, $v_0.Id),
            $v_2 = gridControl.getCellValue("filename", $v_0.Id);
        Mscrm.ReportUtil.viewReport($v_1, $v_0.Id, $v_2, "editfilter", null)
    } else alert(window.LOCID_CUSTMSG_TOOMANY_REC)
};
Mscrm.ReportActions.editReport = function(records) {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    if (records.length === 1) {
        var $v_0 = records[0],
            $v_1 = Mscrm.WindowInformation.getWindowInformation(9099),
            $v_2 = Mscrm.CrmUri.create("/CRMReports/reportproperty.aspx");
        $v_2.get_query()["id"] = $v_0.Id;
        openStdWin($v_2, buildWinName($v_0.Id), $v_1.Width, $v_1.Height, null)
    } else alert(window.LOCID_CUSTMSG_TOOMANY_REC)
};
Mscrm.ReportActions.reportScheduleWizard = function(gridControl, records, entityTypeCode) {
    if (records.length === 1) {
        var $v_0 = records[0], $v_1 = Mscrm.ReportActions.$K(gridControl, $v_0.Id);
        if ($v_1 === 1) {
            var $v_2 = new Xrm.DialogOptions;
            $v_2.width = 700;
            $v_2.height = 550;
            var $v_3 = Mscrm.CrmUri.create("/CRMReports/ReportSchedule/ScheduleWizard.aspx");
            $v_3.get_query()["id"] = $v_0.Id;
            var $v_4 = [entityTypeCode],
                $v_5 = Mscrm.InternalUtilities.GridUtilities
                    .createCallbackFunctionFactory(Mscrm.ReportActions.exportResultWizardCallback, $v_4);
            Xrm.Internal.openDialog($v_3.toString(), $v_2, null, null, $v_5)
        } else alert(window.LOCID_NON_SRS_FILTERSCHEDULE)
    } else alert(window.LOCID_CUSTMSG_TOOMANY_REC)
};
Mscrm.ReportActions.exportResultWizardCallback = function(result, entityTypeCode) {
    result && Mscrm.Grid.auto(entityTypeCode, null)
};
Mscrm.ReportActions.$K = function($p0, $p1) { return parseInt($p0.getCellValue("reporttypecode", $p1), 10) };
Mscrm.Goal = function() {};
Mscrm.Goal.recalculateGoalAndRefreshGrid = function(gridControl, records) {
    if (confirm(window.LOCID_GOALRECALCULATE_WARNING)) {
        !Mscrm.PageManager.isOutlookProxyPage() && gridControl.ShowLoadingMessage();
        Mscrm.Goal.recalculateGoal(records[0].Id, gridControl)
    }
};
Mscrm.Goal.recalculateGoalAndRefreshForm = function(recordId) {
    if (confirm(window.LOCID_GOALRECALCULATE_WARNING)) {
        var $v_0 = $find("crmForm");
        $v_0.SubmitCrmForm(66, false, true, false, false)
    }
};
Mscrm.Goal.recalculateGoal = function(recordId, gridControl) {
    var $v_0 = new RemoteCommand("GoalManagement", "RecalculateGoal", null);
    $v_0.SetParameter("goalId", recordId);
    if (gridControl) var $v_1 = $v_0.Execute(function($p1_0, $p1_1) { $p1_0.Success && gridControl.refresh() });
    else var $v_2 = $v_0.Execute()
};
Mscrm.Goal.hasFiscalSettingsChanged = function() {
    if (window.HAS_FISCALSTARTDATE_CHANGED) return true;
    else return false
};
Mscrm.Goal.realignFiscalDatesForm = function(recordId) {
    var $v_0 = 67, $v_1 = $find("crmForm");
    if ($v_1.get_isDirty()) {
        alert(window.LOCID_FORM_DIRTY);
        return
    } else {
        var $v_2 = Mscrm.CrmUri.create("/SFA/goal/dlg_confirmRealign.aspx"),
            $v_3 = [$v_1, $v_0],
            $v_4 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.Goal.performActionAfterRealignGoal, $v_3),
            $v_5 = new Xrm.DialogOptions;
        $v_5.height = 200;
        $v_5.width = 450;
        Xrm.Internal.openDialog($v_2.toString(), $v_5, null, null, $v_4)
    }
};
Mscrm.Goal.performActionAfterRealignGoal = function(resultValue, crmForm, realignFiscalDates) {
    if (resultValue) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("fiscalyear"),
            $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("fiscalperiod");
        Mscrm.PostBackUtil.createHiddenInput("fiscalyear", $v_0.get_dataValue());
        Mscrm.PostBackUtil.createHiddenInput("fiscalperiod", $v_1.get_dataValue());
        crmForm.SubmitCrmForm(realignFiscalDates, false, true, false, false)
    }
};
Mscrm.Goal.isFiscalPeriodGoal = function() {
    if (window.IS_FISCALPERIOD_GOAL) return true;
    else return false
};
Mscrm.Goal.isRootGoal = function() {
    if (window.IS_ROOT_GOAL) return true;
    else return false
};
Mscrm.Goal.fiscalSettingsAreSame = function(gridControl) {
    var $v_0 = true;
    if (gridControl) {
        var $v_1 = gridControl.GetParameter("relName");
        if ($v_1 === "goal_parent_goal" && window.HAS_FISCALSETTING_CHANGED) $v_0 = false
    }
    return $v_0
};
Mscrm.Goal.isFormStateNotDisabled = function() {
    if (window.VAR_IS_FORM_DISABLED === "1") return false;
    else return true
};
Mscrm.OpportunityActions = function() {};
Mscrm.OpportunityActions.closeLegacy = function(selectedOpportunities, won, gridControl) {
    Mscrm.OpportunityActions.$j(selectedOpportunities, won)
};
Mscrm.OpportunityActions.close = function(selectedOpportunities, won, gridControl) {
    if (Xrm.Page.context.client.getClient() === "Mobile") {
        typeof Mscrm.OpportunityGridCommandActions !== "undefined" &&
            Mscrm.OpportunityActions.$j(selectedOpportunities, won);
        return
    }
    typeof Mscrm.OpportunityActions !== "undefined" &&
        Mscrm.OpportunityActions.closeLegacy(selectedOpportunities, won, gridControl)
};
Mscrm.OpportunityActions.$j = function($p0, $p1) { Mscrm.OpportunityGridCommandActions.opportunityClose($p0, $p1) };
Mscrm.RollupField = function() {};
Mscrm.RollupField.isTotalLessThanThree = function(gridControl) {
    if (!IsNull(gridControl))
        if (gridControl.get_totalRecordCount() < 3) return true;
        else return false;
    return true
};
Mscrm.SalesLiterature = function() {};
Mscrm.SalesLiterature.sendAsEmail = function(id) {
    var $v_0 = new RemoteCommand("ActivitiesWebService", "CreateEmailFromSalesLiterature", null);
    $v_0.SetParameter("salesLiteratureId", id);
    var $v_1 = $v_0.Execute(null);
    if ($v_1.Success) {
        var $v_2 = $v_1.ReturnValue;
        if (!IsNull($v_2) && $v_2.length > 0) openObj(4202, $v_2, "");
        else alert(window.LOCID_SALESLIT_NO_DOCUMENTS)
    }
};
Mscrm.SystemUserActions = function() {};
Mscrm.SystemUserActions.newMultipleUsers = function() {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var $v_0 = $find("crmGrid"), $v_1 = null;
    if (!IsNull($v_0)) $v_1 = $v_0.GetParameter("viewid").toString();
    if ($v_1.toLowerCase() === "{51af2f40-36bb-4198-9b0c-71a986c7c953}") {
        Mscrm.SystemUserActions.newUser();
        return
    }
    var $v_2 = new Xrm.DialogOptions;
    $v_2.width = 800;
    $v_2.height = 530;
    var $v_3 = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx");
    $v_3.get_query()["WizardId"] = "2631659F-A668-4A48-833B-D20E187B5A89";
    var $v_4 = Mscrm.SystemUserActions.refreshSystemUserGrid;
    Xrm.Internal.openDialog($v_3.toString(), $v_2, null, null, $v_4)
};
Mscrm.SystemUserActions.refreshSystemUserGrid = function(result) { result && Mscrm.Grid.auto(8, null) };
Mscrm.SystemUserActions.newUser = function() { locAddRelatedToNonForm(8, 10, _gCurrentBusinessUnitId, "") };
Mscrm.SystemUserActions.promoteToAdmin = function(records) {
    if (records.length === 1) {
        var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_promotetoadmin.aspx");
        $v_0.get_query()["userid"] = records[0];
        var $v_1 = openStdDlg($v_0, records, 300, 200);
        !IsNull($v_1) && Mscrm.Grid.auto(8, null)
    } else alert(LOCID_PROMOTETOADMIN_MULTIPLE)
};
Mscrm.SystemUserActions.manageRoles = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("role", entityTypeCode, records.length), $v_1 = 500, $v_2 = 330;
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, $v_1, $v_2)
};
Mscrm.SystemUserActions.sendInviteForLive = function(records) {
    var $v_0 = 450, $v_1 = 270, $v_2;
    if (records.length === 1) {
        $v_2 = Mscrm.CrmUri.create("/_grid/cmds/dlg_sendinvite.aspx");
        $v_2.get_query()["userid"] = records[0].Id;
        $v_2.get_query()["isform"] = false;
        var $v_3 = [records[0].Id.toString()], $v_4 = new Xrm.DialogOptions;
        $v_4.height = $v_1;
        $v_4.width = $v_0;
        var $v_5 = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterSendInviteForLive", Mscrm.SystemUserActions, $v_3);
        Xrm.Internal.openDialog($v_2.toString(), $v_4, records, null, $v_5)
    } else {
        $v_2 = Mscrm.CrmUri.create("/_grid/cmds/dlg_sendmultipleinvite.aspx");
        for (var $v_6 = new Sys.StringBuilder, $v_8 = 0; $v_8 < records.length; $v_8++) {
            var $v_9 = records[$v_8];
            !$v_6.isEmpty() && $v_6.append(",");
            $v_6.append($v_9.Id)
        }
        $v_2.get_query()["sIds"] = $v_6;
        var $v_7 = new Mscrm.CrmDialog($v_2, records, $v_0, $v_1, null);
        $v_7.setCallbackInfo("performActionAfterSendInviteForLive", Mscrm.SystemUserActions, null);
        $v_7.show()
    }
};
Mscrm.SystemUserActions.performActionAfterSendInviteForLive = function(returnInfo, userId) {
    !IsNull(returnInfo) &&
        Xrm.Internal.messages.inviteUser(userId).then(function() { Mscrm.Grid.auto(8, null) },
            function($p1_0) {
                var $v_0 = $p1_0.get_organizationServiceFault();
                if (!IsNull($v_0)) {
                    var $v_1 = $v_0.get_errorCode();
                    Xrm.Internal.openErrorDialog($v_1, $p1_0.get_message())
                }
            })
};
Mscrm.SystemUserActions.changeBusinessUnit = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("changeorg", entityTypeCode, records.length), $v_1 = 420, $v_2 = 325;
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, $v_1, $v_2)
};
Mscrm.SystemUserActions.changeManager = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("changeparent", entityTypeCode, records.length), $v_1 = 400, $v_2 = 225;
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, $v_1, $v_2)
};
Mscrm.SystemUserActions.changePosition = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("changeposition", entityTypeCode, records.length), $v_1 = 400, $v_2 = 225;
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, $v_1, $v_2)
};
Mscrm.SystemUserActions.isCurrentUser = function(userId) {
    if (!IsNull(userId)) {
        userId = userId.toLowerCase();
        if (userId.charAt(0) === "{") userId = userId.substr(1);
        if (userId.charAt(userId.length - 1) === "}") userId = userId.substr(0, userId.length - 1);
        if (typeof _gCurrentUserId == "undefined") return false;
        return userId === _gCurrentUserId
    }
    return false
};
Mscrm.SystemUserActions.isInviteUserEnabled = function() { return _bIsInviteUserEnabled };
Mscrm.SystemUserActions.isSystemAdministrator = function() {
    if (typeof _bIsSystemAdministrator == "undefined") return false;
    return _bIsSystemAdministrator
};
Mscrm.SystemUserActions.setDevErrorsQuery = function(commandProperties) {
    commandProperties["On"] = _bIsShowDevErrorsEnabled
};
Mscrm.SystemUserActions
    .addExistingMemberFromSubGridStandard = function(gridControl) {
        confirm(LOCID_CONFIRM_REMOVAL_FROM_TERR) &&
            Mscrm.GridRibbonActions.addExistingFromSubGridStandard(8, gridControl)
    };
Mscrm.SystemUserActions.removeMembers = function(objectId, gridControl, records) {
    var $v_0 = Mscrm.GridRibbonActions.$0("removeusers", 9003, records.length);
    $v_0.get_query()["teamid"] = objectId;
    var $v_1 = 460, $v_2 = 225;
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, $v_1, $v_2)
};
Mscrm.TopicModelActions = function() {};
Mscrm.TopicModelActions.testModel = function(topicModelId) {
    Mscrm.TopicModelActions.$5 = topicModelId;
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_testtopicmodel.aspx");
    Mscrm.TopicModelActions.$M($v_0, 300, 700, topicModelId)
};
Mscrm.TopicModelActions.buildModel = function(topicModelId) {
    Mscrm.TopicModelActions.$5 = topicModelId;
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_buildtopicmodel.aspx");
    Mscrm.TopicModelActions.$M($v_0, 205, 450, topicModelId)
};
Mscrm.TopicModelActions.scheduleBuild = function(topicModelId) {
    Mscrm.TopicModelActions.$5 = topicModelId;
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_schedulebuildtopicmodel.aspx");
    Mscrm.TopicModelActions.$M($v_0, 360, 600, topicModelId)
};
Mscrm.TopicModelActions.$M = function($p0, $p1, $p2, $p3) {
    if (!IsNull(Mscrm.TopicModelActions.$5)) {
        $p0.get_query()["iObjType"] = 9944;
        $p0.get_query()["iId"] = Mscrm.TopicModelActions.$5
    }
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = $p1;
    $v_0.width = $p2;
    var $v_1 = [$p3];
    Xrm.Internal.openDialog($p0.toString(), $v_0, $v_1, null, Mscrm.CommandBarActions.createRefreshFormCallback())
};
Mscrm.GridRibbonActions = function() {};
Mscrm.GridRibbonActions.associateChildCase = function(gridControl, records, entityTypeCode) {
    if (!records) return;
    var $v_0 = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri("mergemultiple", entityTypeCode, records.length),
        $v_1 = -1;
    if (Xrm.Internal.isEnabledForInteractionCentric()) {
        if (records.length < 2) {
            Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_ASSCO_LESS_RECORDS"),
                    $v_1.toString()),
                null);
            return
        }
        $v_1 = Xrm.Internal.getLocatorServiceSetting("MaxChildIncidentNumber");
        if (records.length > $v_1) {
            Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_ASSCO_TOOMANY_RECORDS"),
                    $v_1.toString()),
                null);
            return
        }
    } else {
        if (records.length < 2) {
            alert(window.LOCID_ASSCO_LESS_RECORDS);
            return
        }
        $v_1 = window.MAX_CHILD_INCIDENT_NUMBER;
        if (records.length > $v_1) {
            alert(String.format(window.LOCID_ASSCO_TOOMANY_RECORDS, $v_1.toString()));
            return
        }
    }
    var $v_2 = false;
    if (Xrm.Internal.isEnabledForInteractionCentric()) $v_2 = Xrm.Internal.savePreSelectedViewModelIds();
    $v_0.get_query()["requestType"] = "associatechild";
    var $v_3 = [$v_2, gridControl, "associatechild", entityTypeCode, records],
        $v_4 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.GridCommandActions.showMessageAfterMergeAssocAndRefreshGrid, $v_3);
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_0, records, 800, 570, $v_4)
};
Mscrm.GridRibbonActions.deleteRecords = function(gridControl, records, entityTypeCode) {
    if (Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp()) {
        Mscrm.GridCommandActions.deleteRecords(gridControl, records, entityTypeCode);
        return null
    }
    switch (entityTypeCode) {
    case 1085:
    case 1089:
    case 1091:
    case 4230:
    case 9812:
        if (typeof Mscrm.Grid !== "undefined") return Mscrm.Grid.deleteRecords(gridControl, records, entityTypeCode);
        return null;
    default:
        if (typeof Mscrm
            .GridCommandActions !==
            "undefined") Mscrm.GridCommandActions.deleteRecords(gridControl, records, entityTypeCode);
        else if (typeof Mscrm.Grid !== "undefined")
            return Mscrm.Grid.deleteRecords(gridControl, records, entityTypeCode);
        return null
    }
};
Mscrm.GridRibbonActions
    .canMarkComplete = function(records) { return Mscrm.GridCommandActions.canMarkComplete(records) };
Mscrm.GridRibbonActions.gridDisassociate = function(typeCode, gridControl, firstSelectedItemId) {
    if (Xrm.Page.context.client.getClient() === "Mobile") {
        if (typeCode === 9959) {
            Mscrm.GridRibbonActions.$12(typeCode, gridControl);
            return
        }
        Mscrm.CommandBarActions.disassociate(gridControl, null);
        return
    }
    Mscrm.GridRibbonActions.gridDisassociateLegacy(typeCode, gridControl, firstSelectedItemId)
};
Mscrm.GridRibbonActions.$12 = function($p0, $p1) {
    for (var $v_0 = $p1.getGrid().getSelectedRows().getAll(), $v_1 = new Array($v_0.length), $v_A = 0;
        $v_A < $v_0.length;
        $v_A++)
        $v_1[$v_A] = new Xrm.Objects.EntityReference($v_0[$v_A].getData().getEntity().getEntityName(),
            new Microsoft.Crm.Client.Core.Framework.Guid($v_0[$v_A].getKey()));
    var $v_2 = 570,
        $v_3 = 205,
        $v_4 = Xrm.Internal.getEntityName($p0),
        $v_5 = new Xrm.ConfirmDialogStrings,
        $v_6 = !Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString($v_4)
            ? Xrm.Internal.getEntityDisplayName($v_4)
            : "",
        $v_7 = {},
        $v_8 = null;
    $v_8 = [
        "Dialog_Delete_Description", "Button_Label_Delete", "Button_Label_Cancel", "Web._grid.cmds.dlg_delete.aspx_26"
    ];
    $v_7 = Xrm.Internal.getStringKeyList($v_8);
    $v_5.text = String.format($v_7["Dialog_Delete_Description"].toString(), $v_6);
    $v_5.confirmButtonLabel = String.format($v_7["Button_Label_Delete"].toString());
    $v_5.cancelButtonLabel = String.format($v_7["Button_Label_Cancel"].toString());
    $v_5.title = String.format($v_7["Web._grid.cmds.dlg_delete.aspx_26"].toString());
    $v_5.subtitle = "";
    var $v_9 = new Xrm.DialogOptions;
    $v_9.height = $v_3;
    $v_9.width = $v_2;
    Xrm.Dialog.openConfirmDialog($v_5, $v_9, function() { Mscrm.CommandBarActions.disassociate($p1, $v_1) }, null)
};
Mscrm.GridRibbonActions.isBulkSaveAsCancelledValid = function(entityTypeCode) {
    if (Xrm.Page.context.client
        .getClient() ===
        "Outlook" &&
        Xrm.Page.context.client.getClientState() === "Offline") return false;
    return Mscrm.GridCommandActions.isBulkSaveAsCancelledValid(entityTypeCode)
};
Mscrm.GridRibbonActions.isBulkSaveAsCompletedValid = function(entityTypeCode) {
    return Mscrm.GridCommandActions.isBulkSaveAsCompletedValid(entityTypeCode)
};
Mscrm.GridRibbonActions
    .addNewFromSubGridStandard = function(gridTypeCode,
        parentEntityTypeCode,
        parentEntityId,
        primaryControl,
        gridControl) {
        if (!Mscrm.XrmRibbonActionUtilities
            .isMobileCompanionApp())
            Mscrm.GridRibbonActions
                .addNewFromSubGridStandardLegacy(gridTypeCode, parentEntityTypeCode, parentEntityId, gridControl);
        else
            Mscrm.GridCommandActions.addNewFromSubGrid(gridTypeCode,
                parentEntityTypeCode,
                parentEntityId,
                primaryControl,
                gridControl)
    };
Mscrm.GridRibbonActions.addExistingFromSubGrid = function(gridTypeCode, gridControl) {
    Mscrm.GridCommandActions.addExistingFromSubGridStandard(gridTypeCode, gridControl)
};
Mscrm.GridRibbonActions.addToQueue = function(gridControl, records, entityTypeCode) {
    Mscrm.GridCommandActions.addToQueue(gridControl, records, entityTypeCode)
};
Mscrm.GridRibbonActions.assignSelectedRecords = function(gridControl, selectedRecords, entityTypeCode) {
    Mscrm.GridCommandActions.assignSelectedRecords(gridControl, selectedRecords, entityTypeCode)
};
Mscrm.GridRibbonActions.setRegarding = function(gridControl, records, entityTypeCode) {
    Mscrm.GridCommandActions.setRegarding(gridControl, records, entityTypeCode)
};
Mscrm.GridRibbonActions.activate = function(gridControl, records, entityTypeCode, callback) {
    Mscrm.GridCommandActions.activate(gridControl, records, entityTypeCode, callback)
};
Mscrm.GridRibbonActions.deactivate = function(gridControl, records, entityTypeCode, defaultCloseState, callback) {
    Mscrm.GridCommandActions.deactivate(gridControl, records, entityTypeCode, defaultCloseState, callback)
};
Mscrm.GridRibbonActions.notOnMarketingListOrListUnlocked = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListUnLocked()
};
Mscrm.GridRibbonActions.notOnMarketingListOrListActive = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListActive()
};
Mscrm.GridRibbonActions.isActionCardButtonVisible = function(gridControl, records, buttonCardTypes) {
    if (!records || !records.length) return false;
    for (var $v_0 = records[0].Id,
        $v_1 = gridControl.getCellValue("cardtype", $v_0),
        $v_2 = buttonCardTypes.split(","),
        $$arr_6 = $v_2,
        $$len_7 = $$arr_6.length,
        $$idx_8 = 0;
        $$idx_8 < $$len_7;
        ++$$idx_8) {
        var $v_3 = $$arr_6[$$idx_8];
        if ($v_3 === $v_1) return true
    }
    return false
};
Mscrm.GridRibbonActions.isRegardingObjectPresent = function(gridControl, records) {
    if (!records || !records.length) return false;
    var $v_0 = records[0].Id, $v_1 = gridControl.getCellValue("regardingobjectid", $v_0);
    if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_1)) {
        if (!IsNull(Xrm.Page.data) && !Mscrm.GridRibbonActions.$1E($v_1)) return false;
        return true
    }
    return false
};
Mscrm.GridRibbonActions.isSkypeUrlPresent = function(gridControl, records) {
    if (!records || !records.length) return false;
    var $v_0 = records[0].Id, $v_1 = gridControl.getCellValue("cardtype", $v_0);
    if ($v_1 === "21" || $v_1 === "100") {
        var $v_2 = gridControl.getCellValue("description", $v_0);
        if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_2)) {
            if ($v_2.indexOf("https://join.microsoft.com/meet") > -1) return true;
            return false
        }
    } else {
        var $v_3 = gridControl.getCellValue("data", $v_0);
        if ($v_3) {
            var $v_4 = Sys.Serialization.JavaScriptSerializer.deserialize($v_3), $v_5 = $v_4.cardRelatedInfo;
            if ($v_5) {
                var $v_6 = $v_5.Phone;
                if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_6)) return true
            }
            return false
        } else return false
    }
    return false
};
Mscrm.GridRibbonActions.isEmailPresentInAttendees = function(gridControl, records) {
    var $v_0 = false, $v_1 = new RegExp('^[^@\\s\\"<>)(\\[\\]:;,]+@[^@\\s\\"<>)(\\[\\]:;,]+$');
    if (!records || !records.length) return $v_0;
    var $v_2 = records[0].Id,
        $v_3 = gridControl.getCellValue("cardtype", $v_2),
        $v_4 = gridControl.getCellValue("data", $v_2);
    if ($v_4) {
        var $v_5 = Sys.Serialization.JavaScriptSerializer.deserialize($v_4),
            $v_6 = $v_5.cardRelatedInfo,
            $v_7 = $v_6.attendees;
        if (!IsNull(Xrm.Page.data)) return $v_0;
        else if ($v_7.length > 0) {
            for (var $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                var $v_9 = $v_7[$v_8], $v_A = $v_9.contextPrimaryInfo, $v_B = $v_A.description;
                if ($v_1.test($v_B)) $v_0 = true
            }
            return $v_0
        }
    }
    return $v_0
};
Mscrm.GridRibbonActions.$1E = function($p0) {
    var $v_0 = $p0.split(":");
    if (Xrm.Page.data.entity.getEntityName() === $v_0[0] &&
        (new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()))
        .equals(new Microsoft.Crm.Client.Core.Framework.Guid($v_0[1]))) return false;
    return true
};
Mscrm.GridRibbonActions.addActivityFromGrid = function(activityType, contentId, entityReference) {
    Mscrm.AddActivity.addActivityToSelectedObject(activityType, contentId, entityReference[0])
};
Mscrm.GridRibbonActions.shareSelectedRecords = function(gridControl, selectedRecords, entityTypeCode) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.shareSelectedRecords(gridControl, selectedRecords, entityTypeCode);
    else {
        var $v_1 = Mscrm.GridRibbonActions.$0("share", entityTypeCode, selectedRecords.length);
        Mscrm.GridRibbonActions.$1($v_1, gridControl, selectedRecords, 885, 500)
    }
    var $v_0 = {};
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(1, "Share", entityTypeCode)
};
Mscrm.GridRibbonActions.openInstallSPGridLink = function() {
    var $v_0 = "http://go.microsoft.com/fwlink/?LinkId=529447";
    safeWindowOpen(Mscrm.CrmUri.create($v_0),
        "SPInstallGrid",
        "location=1, width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1",
        true)
};
Mscrm.GridRibbonActions.changeSharePointDocumentLocation = function(gridControl, documentLocationId) {
    var $v_0 = "17DE0DBB-153C-4C1A-B98A-223B3EA10125",
        $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid($v_0),
        $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid(documentLocationId),
        $v_3 = $v_2.equals($v_1);
    Mscrm.GridRibbonActions.$x(!$v_3);
    if (!IsNull(gridControl)) {
        gridControl.SetParameter("locationId", documentLocationId);
        gridControl.refresh()
    }
};
Mscrm.GridRibbonActions.$x = function($p0) {
    var $v_0 = "sharepointdocument|OneToMany|SubGridAssociated|Mscrm.SubGrid.SharePointDocument.NewDocument",
        $v_1 = "sharepointdocument|OneToMany|SubGridAssociated|Mscrm.SubGrid.SharePointDocument.Upload",
        $v_2 = $get($v_0),
        $v_3 = $get($v_1);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        if ($p0) $v_2.style.display = "inline-block";
        else $v_2.style.display = "none";
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3))
        if ($p0) $v_3.style.display = "inline-block";
        else $v_3.style.display = "none"
};
Mscrm.GridRibbonActions.changeDocumentLocationState = function(commandProperties, gridControl, locationId) {
    var $v_0 = "bef666f6-2ead-4b6a-bcd4-22d87dfff51e";
    if (!IsNull(gridControl)) {
        var $v_1 = gridControl.GetParameter("locationId");
        if (IsNull($v_1)) {
            $v_1 = $v_0;
            var $v_2 = window.frameElement, $v_3 = $v_2.contentWindow.location.href, $v_4 = Mscrm.CrmUri.create($v_3);
            if (!IsNull($v_4.get_query()["locationId"])) $v_1 = $v_4.get_query()["locationId"]
        }
        $v_1 = $v_1.replace("{", "").replace("}", "").toLowerCase();
        locationId = locationId.replace("{", "").replace("}", "").toLowerCase();
        commandProperties["On"] = $v_1 === locationId
    }
};
Mscrm.GridRibbonActions.openNewRecordForSharePoint = function(entityLogicalName, gridControl) {
    var $v_0 =
        "<fetch version='1.0' mapping='logical'><entity name='sharepointsite'><attribute name='name' /><attribute name='sharepointsiteid' /><filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter></entity></fetch>";
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/jquery1.7.2.min.js"), true);
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            Mscrm.GridRibbonActions.$14($p1_0, entityLogicalName, gridControl)
        },
        null)
};
Mscrm.GridRibbonActions.$14 = function($p0, $p1, $p2) {
    var $v_0 = $p0.entityCollection, $v_1 = window.IsOneDriveEnabledOnOrgSettings;
    if (!$v_0.get_count() &&
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S") &&
        Boolean.parse(window.UserHasConfigureSharePointPrivilege) &&
        !$v_1) {
        var $v_2 = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=896d4b4e-1321-4ad9-aa60-f2d3dd7c6388");
        if (isOutlookHostedWindow()) {
            openStdDlg($v_2, null, 650, 620, false, false);
            !Mscrm.InternalUtilities.JSTypes.isNull($p2) && $p2.refresh()
        } else openStdWin($v_2, null, 650, 620, "resizable=0, status=0, dialog=1")
    } else Mscrm.CommandBarActions.openNewRecord($p1, $p2, null)
};
Mscrm.GridRibbonActions.validateSharePointSites = function(gridControl, selectedRecords, entityTypeCode) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_sharepoint_validate.aspx");
    if (Sys.Browser.agent === Sys.Browser.Firefox) {
        for (var $v_1 = new Array(0), $v_5 = 0;
            $v_5 < selectedRecords.length;
            $v_5++
        ) $v_1[$v_5] = selectedRecords[$v_5].Id;
        var $v_2 = [gridControl],
            $v_3 = Mscrm.Utilities
                .createCallbackFunctionObject("validateSharePointSitesCallback", Mscrm.GridRibbonActions, $v_2, false),
            $v_4 = new Mscrm.CrmDialog($v_0, $v_1, 800, 580, null);
        $v_4.setCallbackReference($v_3);
        $v_4.show()
    }
    Mscrm.GridRibbonActions.$1($v_0, gridControl, selectedRecords, 800, 580, null, true)
};
Mscrm.GridRibbonActions.validateSharePointSitesCallback = function(result, gridControl) {
    !IsNull(gridControl) && gridControl.refresh()
};
Mscrm.GridRibbonActions.bulkEdit = function(gridControl, records, entityTypeCode) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.bulkEdit(gridControl, records, entityTypeCode);
    else if (records.length === 1) {
        var $v_0 = getParentEntityIdParams();
        if (IsNull($v_0) || !$v_0.length) $v_0 = "rof=false";
        else $v_0 += "&rof=false";
        if (!IsNull(gridControl)) {
            var $v_2 = gridControl;
            if (!IsNull($v_2))
                try {
                    $v_2.get_innerGrid().openSelectedRecord($v_0);
                    return
                } catch ($$e_5) {
                }
        }
        var $v_1 = records[0];
        openObj($v_1.TypeCode, $v_1.Id, $v_0)
    } else {
        var $v_3;
        if (entityTypeCode === 4200) {
            for (var $v_4 = records[0], $v_5 = 1; $v_5 < records.length; $v_5++)
                if (records[$v_5].TypeCode !== $v_4.TypeCode) {
                    alert(window.LOCID_HETROGENEOUS_ACTIVITY);
                    return
                }
            $v_3 = Mscrm.GridRibbonActions.$0("bulkedit", $v_4.TypeCode, records.length)
        } else $v_3 = Mscrm.GridRibbonActions.$0("bulkedit", entityTypeCode, records.length);
        Mscrm.GridRibbonActions.$1($v_3, gridControl, records, 1e3, 700)
    }
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(1, "Edit", entityTypeCode)
};
Mscrm.GridRibbonActions.addNotes = function(gridControl, records, entityTypeCode) {
    var $v_0 = 530, $v_1 = 500, $v_2 = Mscrm.GridRibbonActions.$0("addnotes", entityTypeCode, records.length);
    $v_2.get_query()["sSubTypes"] = Mscrm.GridRibbonActions.$10(records);
    Mscrm.GridRibbonActions.$1($v_2, gridControl, records, $v_0, $v_1)
};
Mscrm.GridRibbonActions.cancelContractDetail = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("cancel", entityTypeCode, records.length);
    Mscrm.GridRibbonActions.$1($v_0, gridControl, records, 610, 200)
};
Mscrm.GridRibbonActions.isBulkAddNotesValid = function(entityTypeCode) {
    if (Mscrm.EntityPropUtil.isActivityTypeCode(entityTypeCode))
        switch (entityTypeCode) {
        case 4202:
        case 4216:
            return false;
        default:
            return true
        }
    else return false
};
Mscrm.GridRibbonActions.isBulkEditValid = function(entityTypeCode) {
    if (Mscrm.EntityPropUtil.isActivityTypeCode(entityTypeCode)) {
        if (isRichClient() && entityTypeCode === 4200)
            entityTypeCode = Number.parseInvariant(getOutlookHostedWindow().getParameter("viewOtc"));
        switch (entityTypeCode) {
        case 4251:
            return false;
        default:
            return true
        }
    } else return false
};
Mscrm.GridRibbonActions.isValidForExportDataTemplate = function(entityTypeCode) {
    return Mscrm.EntityPropUtil.isImportableTypeCode(entityTypeCode)
};
Mscrm.GridRibbonActions.changeFormStateRecords = function(gridControl, records, entityTypeCode, formRenderState) {
    return Mscrm.Grid.changeFormStateRecords(gridControl, records, entityTypeCode, formRenderState)
};
Mscrm.GridRibbonActions.setAsDefault = function(gridControl, records, entityTypeCode) {
    Mscrm.SLAGridCommandActions.setAsDefault(gridControl, records, entityTypeCode)
};
Mscrm.GridRibbonActions.syncDefaultQueueMembers = function(records) {
    var $v_0 = records[0].Id, $v_1 = new RemoteCommand("CustomerService", "UpdateQueueMembers");
    $v_1.SetParameter("queueId", $v_0);
    var $v_2 = $v_1.Execute();
    if ($v_2.ReturnValue) alert("Members of the Team synced with Queue Members");
    else alert("Sync is valid for Default Queues only or There are no members for the Team to sync with Queue")
};
Mscrm.GridRibbonActions.mergeRecords = function(gridControl, records, entityTypeCode) {
    Mscrm.GridCommandActions.mergeRecords(gridControl, records, entityTypeCode)
};
Mscrm.GridRibbonActions.recalculateFromGrid = function(gridControl, selectedRecords, entityTypeCode) {
    var $v_0 = null, $v_1 = Mscrm.GridRibbonActions.$0("recalc_opps", entityTypeCode, selectedRecords.length);
    if (selectedRecords && selectedRecords.length >= 1) {
        for (var $v_2 = new Sys.StringBuilder, $v_4 = 0; $v_4 < selectedRecords.length; $v_4++) {
            $v_4 > 0 && $v_2.append(";");
            $v_2.append(selectedRecords[$v_4].Id)
        }
        var $v_3 = [];
        $v_3[0] = $v_2;
        $v_0 = $v_3
    }
    Mscrm.GridRibbonActions.$1($v_1, gridControl, selectedRecords, 400, 250, null, true, $v_0)
};
Mscrm.GridRibbonActions.detectDuplicatesAllRecords = function(gridControl, entityTypeCode, totalRecordCount) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.detectDuplicatesAllRecords(gridControl, entityTypeCode, totalRecordCount);
    else {
        if (!IsNull(gridControl.GetParameter("queryapi"))) {
            alert(window.LOCID_DEDUPE_CANNOT_RUN_ASSO);
            return
        }
        if (Mscrm.GridRibbonActions.$d(gridControl.GetParameter("viewid"))) {
            alert(window.LOCID_DEDUPE_CANNOT_RUN);
            return
        }
        if (!totalRecordCount) {
            alert(window.LOCID_DEDUPE_NORECORDS_MSG);
            return
        }
        var $v_0 = new Mscrm.DetectDuplicateArguments;
        $v_0.ObjectTypeCode = entityTypeCode;
        $v_0.iOption = 2;
        $v_0.GridXml = gridControl.get_gridXml();
        $v_0.Ids = "";
        $v_0.ViewName = gridControl.get_viewTitle();
        Mscrm.GridRibbonActions.$V($v_0)
    }
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(1, "DetectDuplicate", entityTypeCode)
};
Mscrm.GridRibbonActions.detectDuplicatesSelectedRecords = function(entityTypeCode, recordIds) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.detectDuplicatesSelectedRecords(entityTypeCode, recordIds);
    else {
        var $v_0 = new Mscrm.DetectDuplicateArguments;
        $v_0.ObjectTypeCode = entityTypeCode;
        $v_0.iOption = 1;
        $v_0.GridXml = "";
        $v_0.Ids = recordIds;
        $v_0.ViewName = "";
        Mscrm.GridRibbonActions.$V($v_0)
    }
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(1, "DetectDuplicate", entityTypeCode)
};
Mscrm.GridRibbonActions.bulkDelete = function(gridControl) {
    var $v_0 = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=A50E9478-8EC9-45ab-B927-FDFFF64A0729");
    if (!IsNull(gridControl)) {
        var $v_3 = gridControl.GetParameter("otc"), $v_4 = "";
        if (!isNullOrEmptyString($v_3)) {
            $v_4 = $v_3;
            var $v_5 = gridControl.GetParameter("viewid"), $v_6 = gridControl.GetParameter("viewtype");
            if (!isNullOrEmptyString($v_5) && !isNullOrEmptyString($v_6)) $v_4 = $v_4 + "," + $v_6 + "," + $v_5;
            $v_0.get_query()["WizardInput"] = $v_4
        }
    }
    var $v_1 = Mscrm.WindowInformation.getWindowInformation(9204), $v_2 = new Xrm.DialogOptions;
    $v_2.width = $v_1.Width;
    $v_2.height = $v_1.Height;
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, null)
};
Mscrm.GridRibbonActions.addToList = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("addtolist", entityTypeCode, records.length),
        $v_1 = Mscrm.CrmUri.create(window.location.search);
    if (IsNull(records) || !records.length) {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return
    }
    for (var $v_2 = true, $v_5 = 0;
        $v_5 < records.length && $v_2;
        $v_5++
    ) if (records[$v_5].TypeCode !== records[0].TypeCode) $v_2 = false;
    if (!$v_2) {
        alert(window.LOCID_HETEROGENOUS_TYPES);
        return
    }
    var $v_3 = $v_1.get_query()["listId"] || "", $v_4 = "";
    if ($v_1.get_query()["invoker"] !== "listmembers") {
        var $v_6 = [$v_0, gridControl, records],
            $v_7 = Mscrm.Utilities
                .createCallbackFunctionObject("setPropertiesAndMakeCall", Mscrm.GridRibbonActions, $v_6, false);
        LookupObjectsWithCallback($v_7,
            null,
            "single",
            "4300",
            0,
            null,
            "membertypecode=" +
            CrmEncodeDecode.CrmUrlEncode(records[0].TypeCode.toString()) +
            "&listType=" +
            CrmEncodeDecode.CrmUrlEncode("static"),
            1,
            1,
            false,
            "",
            "",
            "",
            "577EA96E-B1F6-499b-98A7-ABB5BE8233F9",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);
        return
    }
    Mscrm.GridRibbonActions.$g($v_3, $v_4, $v_0, gridControl, records)
};
Mscrm.GridRibbonActions.setPropertiesAndMakeCall = function(lookupItems, actionUri, gridControl, records) {
    var $v_0, $v_1;
    if (!IsNull(lookupItems) && lookupItems.items.length > 0) {
        $v_0 = lookupItems.items[0].id;
        $v_1 = lookupItems.items[0].type;
        Mscrm.GridRibbonActions.$g($v_0, $v_1, actionUri, gridControl, records)
    }
};
Mscrm.GridRibbonActions.$g = function($p0, $p1, $p2, $p3, $p4) {
    $p2.get_query()["itemObjectId"] = $p0;
    $p2.get_query()["itemObjectTypeCode"] = $p1;
    Mscrm.GridRibbonActions.$1($p2, $p3, $p4)
};
Mscrm.GridRibbonActions.addConnection = function(records, connectToMe) {
    if (records.length !== 1) {
        alert(window.LOCID_CUSTMSG_TOOMANY_REC);
        return
    }
    var $v_0 = records[0],
        $v_1 = "?pId=" +
            CrmEncodeDecode.CrmUrlEncode($v_0.Id) +
            "&pType=" +
            CrmEncodeDecode.CrmUrlEncode($v_0.TypeCode.toString());
    if (connectToMe) $v_1 = $v_1 + "&connectToMe=true";
    openObj(3234, "", $v_1)
};
Mscrm.GridRibbonActions.sendCurrentViewUrl = function(useEmail, gridControl) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.sendCurrentViewUrl(useEmail, gridControl);
    else {
        var $v_0 = gridControl.get_viewTitle();
        if (IsNull($v_0) ||
            $v_0 === window.LOCID_SEARCH_RESULTS ||
            gridControl.get_viewIsUserOwned() ||
            Mscrm.GridRibbonActions.$1B(gridControl.GetParameter("viewid"))) {
            alert(window.LOCID_ERROR_INVALID_VIEW);
            return
        }
        var $v_1 = Mscrm.Shortcuts.getViewUrl(), $v_2 = $v_1.get_query()["extraqs"];
        if ($v_2 && $v_2.length > 0) {
            for (var $v_3 = "ver=",
                $v_4 = null,
                $v_5 = ($v_2.startsWith("?") ? $v_2.substr(1) : $v_2).split("&"),
                $v_6 = 0;
                $v_6 < $v_5.length;
                ++$v_6)
                if ($v_5[$v_6].startsWith($v_3)) {
                    $v_4 = $v_5[$v_6];
                    break
                }
            if ($v_4)
                if ($v_5.length === 1) delete $v_1.get_query().extraqs;
                else $v_1.get_query()["extraqs"] = $v_2.replace($v_4, "")
        }
        Mscrm.GridRibbonActions.$p(gridControl, $v_1);
        Mscrm.Utilities.sendViewUrl(useEmail,
            $v_1,
            $v_0,
            gridControl.GetParameter("viewid"),
            gridControl.GetParameter("viewtype"))
    }
};
Mscrm.GridRibbonActions.$p = function($p0, $p1) {
    var $v_0 = $p0.GetParameter("otc");
    if (!IsNull($v_0) && Mscrm.EntityPropUtil.isActivityTypeCode(parseInt($v_0, 10))) {
        var $v_1 = $p0.GetParameter("otn");
        if (!IsNull($v_1)) $p1.get_query()["type"] = $v_1
    }
};
Mscrm.GridRibbonActions.sendBulkEmail = function(gridControl, recordIds, entityTypeCode, totalRecordCount) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.sendBulkEmail(gridControl, recordIds, entityTypeCode, totalRecordCount);
    else {
        if (recordIds.length > 0) {
            var $v_0 = {};
            $v_0["TotalRecords"] = totalRecordCount;
            $v_0["SelectedRecords"] = recordIds.length;
            $v_0["Ids"] = recordIds;
            $v_0["GridXml"] = gridControl.get_gridXml();
            var $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx");
            $v_1.get_query()["bulkemail"] = "true";
            $v_1.get_query()["multiPage"] = "false";
            $v_1.get_query()["objectTypeCode"] = entityTypeCode;
            var $v_2 = new Mscrm.CrmDialog($v_1, $v_0, 600, 620, null);
            $v_2.show()
        } else alert(window.LOCID_EMAIL_NORECORDS_MSG);
        Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper
            .addTelemetryLog(1, "SendDirectEmail", entityTypeCode)
    }
};
Mscrm.GridRibbonActions.webMailMerge = function(gridControl, recordIds, entityTypeCode, totalRecordCount) {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    if (recordIds.length > 0) {
        var $v_0 = {};
        $v_0["TotalRecords"] = totalRecordCount;
        $v_0["SelectedRecords"] = recordIds.length;
        $v_0["Ids"] = recordIds;
        $v_0["GridXml"] = gridControl.get_gridXml();
        var $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_webmailmerge.aspx");
        $v_1.get_query()["objectTypeCode"] = entityTypeCode;
        var $v_2 = new Xrm.DialogOptions;
        $v_2.height = 620;
        $v_2.width = 600;
        Xrm.Internal.openDialog($v_1.toString(), $v_2, $v_0, null, null)
    } else alert(window.LOCID_ACTION_NOITEMSELECTED)
};
Mscrm.GridRibbonActions.$e = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = String.format("{0}_gridcontrol_quickcreate", $p3.get_id()),
        $v_1 = $p3.get_element().style.zIndex + 990,
        $v_2 = $p3.GetParameter("entitydisplayname"),
        $v_3 = String.format("globalqctimestamps_{0}", $p3.get_id());
    if (!$p5) {
        var $$t_A = $p3;
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .launchGlobalQuickCreate(new Mscrm.GlobalQuickCreate
                .GridControlGlobalQuickCreateCallbacks($v_0,
                    $v_1,
                    $$t_A.$$d_refresh || ($$t_A.$$d_refresh = Function.createDelegate($$t_A, $$t_A.refresh))),
                $v_2,
                $p0,
                $v_3 in $p4 ? $p4[$v_3] : null,
                $p2,
                $p1)
    } else {
        var $$t_B = $p3;
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .launchGlobalQuickCreate(new Mscrm.GlobalQuickCreate
                .GridControlGlobalQuickCreateCallbacks($v_0,
                    $v_1,
                    $$t_B.$$d_refresh || ($$t_B.$$d_refresh = Function.createDelegate($$t_B, $$t_B.refresh))),
                $v_2,
                $p0,
                !IsNull($p4) && $v_3 in $p4 ? $p4[$v_3] : null)
    }
};
Mscrm.GridRibbonActions.$a = function($p0) {
    if (!IsNull($p0) && $p0.isLiteSubGrid())
        if ($p0.get_gridType() === Mscrm.GridControl.inlineSubGrid) {
            var $v_0 = String.format("globalqctimestamps_{0}", $p0.get_id()),
                $v_1 = Mscrm.InlineEditUtilities.getLinkedDataObject($P_CRM($p0.get_element()));
            if (!IsNull($v_1) && $v_0 in $v_1) return $v_1
        } else if ($p0.GetParameter("IsQuickCreateEnabled") === "1") {
            var $v_2 = {};
            $v_2["formts"] = $p0.GetParameter("formts");
            $v_2["mdts"] = $p0.GetParameter("mdts");
            $v_2["userts"] = $p0.GetParameter("userts");
            $v_2["businessRulesVersion"] = $p0.GetParameter("businessRulesVersion");
            return $v_2
        }
    return null
};
Mscrm.GridRibbonActions
    .addNewFromSubGridStandardLegacy = function(gridTypeCode,
        parentEntityTypeCode,
        parentEntityId,
        primaryControl,
        gridControl) {
        if (parentEntityTypeCode === 3 && (gridTypeCode === 1084 || gridTypeCode === 1088 || gridTypeCode === 1090)
        ) Mscrm.GridRibbonActions.$o(gridTypeCode);
        else if (gridTypeCode === 4406) CreateMiniCampaign();
        else if (gridTypeCode === 4200 && gridControl.get_gridType() === Mscrm.GridControl.inlineSubGrid
        ) gridControl.addButtonClickHandler();
        else if (Mscrm.EntityPropUtil.isActivityTypeCode(gridTypeCode) &&
            gridTypeCode !== 4200 &&
            gridTypeCode !== 4402 &&
            gridTypeCode !== 4401 &&
            !IsNull(primaryControl)) {
            var $v_0 = primaryControl.get_selectedRecords()[0];
            Mscrm.AddActivity.addActivityToSelectedObject(gridTypeCode, null, $v_0)
        } else {
            var $v_1 = Mscrm.GridRibbonActions.$a(gridControl),
                $v_2 = !IsNull(gridControl) && gridControl.isLiteSubGrid();
            if ($v_2 && !IsNull($v_1))
                Mscrm.GridRibbonActions
                    .$e(gridTypeCode, parentEntityTypeCode, parentEntityId, gridControl, $v_1, false);
            else {
                var $v_3 = $v_2;
                switch (gridTypeCode) {
                case 127:
                    gridTypeCode = 9202;
                    break;
                case 4402:
                    $v_3 = false;
                    break
                }
                locAddRelatedToNonForm(gridTypeCode, parentEntityTypeCode, parentEntityId, "", $v_3)
            }
        }
    };
Mscrm.GridRibbonActions.$17 = function() {
    var $v_0 = Mscrm.CrmUri.create(window.location.href);
    if ($v_0.get_query()["dashboardType"]) return true;
    return false
};
Mscrm.GridRibbonActions.OpenQuickCreateFormForNewRecord = function(gridControl) {
    if (Mscrm.GridRibbonActions.$17()) return false;
    var $v_0 = Mscrm.GridRibbonActions.$a(gridControl);
    if (!IsNull($v_0)) {
        Mscrm.GridRibbonActions.$e(gridControl.get_entityTypeCode(), 0, null, gridControl, $v_0, true);
        return true
    }
    return false
};
Mscrm.GridRibbonActions.$o = function($p0) {
    var $v_0 = -1;
    switch ($p0) {
    case 1088:
        $v_0 = 21;
        break;
    case 1084:
        $v_0 = 22;
        break;
    case 1090:
        $v_0 = 23;
        break
    }
    var $v_1 = window.parent.customAddRelatedItem;
    if (IsNull($v_1)) $v_1 = customAddRelatedItem;
    $v_1($v_0)
};
Mscrm.GridRibbonActions.addExistingFromSubGridStandard = function(gridTypeCode, gridControl) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
        Mscrm.GridCommandActions.addExistingFromSubGridStandard(gridTypeCode, gridControl);
    else {
        if (Mscrm.GridRibbonActions.$Q(gridTypeCode, gridControl)) return;
        if (gridControl.isLiteSubGrid() &&
        (gridControl.get_gridType() === Mscrm.GridControl.inlineSubGrid ||
            gridControl.get_gridType() === Mscrm.GridControl.associatedGrid)) gridControl.addButtonClickHandler();
        else Mscrm.Grid.addExistingFromSubGridStandard(gridTypeCode, gridControl, 0, null)
    }
};
Mscrm.GridRibbonActions.addExistingFromSubGridAssociated = function(gridTypeCode, gridControl) {
    if (Mscrm.GridRibbonActions.$Q(gridTypeCode, gridControl)) return;
    if (gridControl.isLiteSubGrid() &&
    (gridControl.get_gridType() === Mscrm.GridControl.inlineSubGrid ||
        gridControl.get_gridType() === Mscrm.GridControl.associatedGrid)) gridControl.addButtonClickHandler();
    else Mscrm.Grid.addExistingFromSubGridAssociated(gridTypeCode, gridControl, 0, null)
};
Mscrm.GridRibbonActions.$Q = function($p0, $p1) {
    var $v_0 = $p1.GetParameter("viewid");
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p1.getViewSelector))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1.getViewSelector().getCurrentView))
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1.getViewSelector().getCurrentView())) {
                    $v_0 = $p1.getViewSelector().getCurrentView().id;
                    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
                        $v_0 = $v_0.replace("{", "").replace("}", "").toUpperCase();
                        $v_0 = "{" + $v_0 + "}"
                    }
                }
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_0) &&
        $v_0 === "{AE82A232-1529-4BDE-9972-93CE21A095C6}") {
        var $v_5 = Xrm.Page.data.entity.getEntityName();
        if ($v_5 === "knowledgearticle") {
            Mscrm.KnowledgeArticleCommandActions.translateArticle();
            return true
        }
        return false
    }
    if (!isNullOrEmptyString($v_0) && $v_0 === "{23FB1036-E41D-4D75-8AA7-27569B5B6512}") {
        var $v_6 = Xrm.Page.data.entity.getEntityName();
        if ($v_6 === "incident") {
            Mscrm.ServiceRefreshUtilities.openCaseResearchFlyOut();
            return true
        }
        return false
    }
    var $v_1 = $p1.GetParameter("relName");
    if ($v_0 === "{58FB20FF-D5BE-406F-908E-C777E9DEDF5F}" ||
        $v_0 === "{38A21FFB-4E32-4038-BEB9-03172A0DD034}" ||
        $v_0 === "{FC71D030-7A82-4B51-BDE8-29B24B7ABF9D}" ||
        $v_0 === "{00000000-0000-0000-00AA-000010001003}") {
        Mscrm.Grid.checkInParentAndInvoke("locAssocObjMember", $p0, "", $v_1, $p1.GetParameter("roleOrd"), null, 0);
        return true
    }
    var $v_2 = $p1.GetParameter("roleOrd"),
        $v_3 = Xrm.Page.data.entity.getId(),
        $v_4 = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
    switch ($v_1) {
    case "List_BulkOperations":
        locAssocObjList($p0, $v_1, null, 0);
        return true;
    case "campaignlist_association":
        if ($p0 === 4300) {
            Mscrm.Grid.checkInParentAndInvoke("locAssocObjCampaign", $p0, "subType=targetLists", $v_1, $v_2, null, 0);
            return true
        }
        return false;
    case "campaignactivitylist_association":
        Mscrm.Grid.checkInParentAndInvoke("locAssocObjCampaignActivity", $p0, "", $v_1, $v_2, $v_3, $v_4);
        return true
    }
    return false
};
Mscrm.GridRibbonActions.gridDisassociateLegacy = function(typeCode, gridControl, firstSelectedItemId) {
    if (!IsNull(gridControl))
        if (gridControl.isLiteSubGrid() && gridControl.get_gridType() === Mscrm.GridControl.inlineSubGrid)
            if (typeCode === 3234) gridControl.DeleteConnectionAndRefresh();
            else {
                var $v_0 = gridControl.GetParameter("relName"),
                    $v_1 = Number.parseInvariant(gridControl.GetParameter("oType")),
                    $v_2 = gridControl.GetParameter("oId");
                if (!IsNull(firstSelectedItemId) && $v_0 === "campaignlist_association") {
                    Mscrm.GridRibbonActions.$w(typeCode, gridControl, firstSelectedItemId, $v_0, $v_1, $v_2);
                    return
                }
                gridControl.DisassociateAndRefresh($v_0, $v_1, $v_2, typeCode)
            }
        else {
            var $v_3 = "associationName={0}&roleOrd={1}",
                $v_4 = gridControl.GetParameter("relName"),
                $v_5 = gridControl.GetParameter("roleOrd"),
                $v_6 = gridControl.get_id();
            $v_3 = String.format($v_3, CrmEncodeDecode.CrmUrlEncode($v_4), CrmEncodeDecode.CrmUrlEncode($v_5));
            var $v_7 = $get("crmFormSubmit");
            if ($v_7)
                doActionEx($v_6,
                    typeCode,
                    $v_7.crmFormSubmitId.value,
                    "disassociate",
                    $v_7.crmFormSubmitObjectType.value,
                    $v_3);
            else
                doActionEx($v_6,
                    typeCode,
                    window.parent.$get("crmFormSubmit").crmFormSubmitId.value,
                    "disassociate",
                    window.parent.$get("crmFormSubmit").crmFormSubmitObjectType.value,
                    $v_3)
        }
};
Mscrm.GridRibbonActions.$w = function($p0, $p1, $p2, $p3, $p4, $p5) {
    if ($p3 !== "campaignlist_association") return;
    var $v_0 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("disassociate", $p0, 1);
    $v_0.get_query()["iParentType"] = $p4;
    $v_0.get_query()["sParentId"] = $p5;
    $v_0.get_query()["iId"] = $p2;
    $v_0.get_query()["associationName"] = $p3;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 400;
    $v_1.height = 200;
    var $v_2 = function() { !(typeof gridControl === "undefined") && gridControl.Refresh() };
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_2)
};
Mscrm.GridRibbonActions.enableWorkflowOnGrid = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.GetParameter("isWorkflowSupported");
        if (!IsNull($v_0) && $v_0.toUpperCase() === "TRUE") return true
    }
    return false
};
Mscrm.GridRibbonActions.disableForSocialActivityView = function(gridControl) {
    if (!IsNull(gridControl) && Mscrm.GridRibbonActions.$1A(gridControl.GetParameter("viewid"))) return true;
    return false
};
Mscrm.GridRibbonActions.$1A = function($p0) {
    switch ($p0) {
    case "{E3CA8AD6-C682-4383-B54E-82641EF83206}":
    case "{DB576E56-6591-402D-848B-D6F9D626DAA3}":
    case "{AE2B791C-8210-49D3-BA16-3110AF6864A4}":
    case "{3354F296-99AF-45EF-8223-88ED59A7F478}":
    case "{C26EF3A5-0D49-42D3-ABD9-0D75E5F849E3}":
    case "{9E28442C-413E-4E5B-B3ED-1DCFFE9F43A9}":
    case "{CE7337DF-90B4-4940-8751-0C7BF8CD50EB}":
    case "{436918CB-693E-43F1-AE90-48AE3FA21C61}":
    case "{DF8137B5-B580-4806-8A26-385B83CFB5BF}":
        return true
    }
    return false
};
Mscrm.GridRibbonActions.launchOnDemandWorkflow = function(gridControl, records, entityTypeCode, workflowId) {
    var $v_0 = workflowId, $v_1 = new Array(records.length);
    if (IsNull(records) || !records.length) {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return
    }
    for (var $v_2 = true, $v_3 = 0; $v_3 < records.length && $v_2; $v_3++) {
        if (records[$v_3].TypeCode !== records[0].TypeCode) $v_2 = false;
        $v_1[$v_3] = records[$v_3].Id
    }
    if (!$v_2) {
        alert(window.LOCID_HETEROGENOUS_TYPES);
        return
    }
    if (isNullOrEmptyString(workflowId)) {
        var $v_4 = new Xrm.LookupOptions, $v_5, $v_6 = "workflow";
        $v_5 = [$v_6];
        var $v_7 = {};
        $v_4.lookupStyle = "single";
        $v_4.lookupTypes = $v_5;
        $v_7["membertypecode"] = records[0].TypeCode.toString();
        $v_4.additionalParams = $v_7;
        $v_4.showProperties = true;
        $v_4.dataProviderOverride = "";
        $v_4.defaultViewId = "45102185-B1B4-422B-A3BF-F1BA9C6E130A";
        $v_4.viewIds = ["{45102185-B1B4-422B-A3BF-F1BA9C6E130A}"];
        Xrm.Internal.lookupObjects($v_4,
            function($p1_0) {
                Mscrm.GridRibbonActions
                    .setObjectIdAndRunWorkflow($p1_0, entityTypeCode, records, $v_1)
            });
        return
    }
    Mscrm.GridRibbonActions.runWorkflow($v_0, entityTypeCode, records, $v_1);
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(1, "RunWorkflow", entityTypeCode)
};
Mscrm.GridRibbonActions.setObjectIdAndRunWorkflow = function(lookupItems, entityTypeCode, records, ids) {
    var $v_0;
    if (IsNull(lookupItems) || !lookupItems.length) return;
    $v_0 = lookupItems[0].id;
    Mscrm.GridRibbonActions.runWorkflow($v_0, entityTypeCode, records, ids);
    return
};
Mscrm.GridRibbonActions.runWorkflow = function(itemObjectId, entityTypeCode, records, ids) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_runworkflow.aspx");
    $v_0.get_query()["iObjType"] = entityTypeCode;
    $v_0.get_query()["iTotal"] = records.length;
    $v_0.get_query()["wfId"] = itemObjectId;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 230;
    $v_1.width = 560;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, ids, null, Mscrm.GridRibbonActions.closeCallback)
};
Mscrm.GridRibbonActions.closeCallback = function(result) {
    Mscrm.InlineDialogUtility.close("InlineDialog");
    return result
};
Mscrm.GridRibbonActions.runScript = function(records, objectTypeCode) {
    Mscrm.GridCommandActions.runScript(records, objectTypeCode)
};
Mscrm.GridRibbonActions.runDialog = function(lookupItems, records) {
    Mscrm.GridCommandActions.runDialog(lookupItems, records)
};
Mscrm.GridRibbonActions.openSelectedRecordInNewWindow = function(selectedRecords) {
    var $v_0 = selectedRecords[0], $v_1 = {};
    $v_1["etc"] = $v_0.TypeCode;
    $v_1["id"] = $v_0.Id;
    $v_1["pagetype"] = "entityrecord";
    $v_1["newWindow"] = true;
    var $v_2 = Mscrm.PageManager.get_instance();
    if (!IsNull($v_2)) {
        var $v_3 = $v_2.get_eventManager();
        !IsNull($v_3) && $v_3.raiseEvent(21, $v_1, null)
    }
};
Mscrm.GridRibbonActions.exportToExcel = function(gridControl, entityTypeCode) {
    Mscrm.GridRibbonActions.exportToXlsx(gridControl, entityTypeCode, 5)
};
Mscrm.GridRibbonActions.exportToXlsx = function(gridControl, entityTypeCode, exportType) {
    Mscrm.ExportGridToExcel.exportToExcel(gridControl, entityTypeCode, exportType);
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(1, "ExportToExcel", entityTypeCode)
};
Mscrm.GridRibbonActions.enabledForXlsxExport = function(gridControl) {
    return Mscrm.GridRibbonActions.validQueryApiForXlsx(gridControl) &&
        Mscrm.GridRibbonActions.validDataProviderForXlsx(gridControl)
};
Mscrm.GridRibbonActions.validQueryApiForXlsx = function(gridControl) {
    if (IsNull(gridControl)) return false;
    var $v_0 = gridControl.GetParameter("queryapi");
    if (isNullOrEmptyString($v_0)) return true;
    switch ($v_0) {
    case "CRMIncident.RollupRelatedByObject":
    case "CRMContract.RollupRelatedByObject":
    case "CRMQuote.RollupRelatedByObject":
    case "CRMOpportunity.RollupRelatedByObject":
    case "CRMSalesOrder.RollupRelatedByObject":
    case "CRMInvoice.RollupRelatedByObject":
    case "CRMActivity.RollupRelatedByParty":
    case "CRMActivity.RollupByParty":
    case "BizMerchant.RetrieveChildBusinesses":
    case "BizMerchant.RetrieveTeams":
    case "BizMerchant.RetrieveUsers":
    case "BizTeam.RetrieveMembers":
    case "BizUser.RetrieveTeams":
    case "BulkOperation.RetrieveResponsesForMiniCampaign":
    case "Campaign.RetrieveCampaignActivitiesForCampaign":
    case "Campaign.RetrieveCampaignResponsesForCampaign":
    case "Campaign.RetrieveRelatedEntities":
    case "CampaignActivity.RetrieveItems":
    case "CRMAccount.RetrieveSubAccounts":
    case "CRMAccount.RetrieveSubContacts":
    case "CRMActivity.RetrieveByObject":
    case "CRMActivity.RetrieveByParty":
    case "CRMCompetitor.RetrieveByObject":
    case "CRMConnection.RetrieveByObject":
    case "CRMContact.RetrieveSubContacts":
    case "CRMContract.RetrieveByObject":
    case "CRMContractDetail.RetrieveByContract":
    case "CRMDiscount.RetrieveByObject":
    case "CRMIncident.RetrieveByObject":
    case "CRMInvoice.RetrieveByObject":
    case "CRMInvoice.RetrieveContacts":
    case "CRMInvoiceDetail.RetrieveByObject":
    case "CRMKnowledgeBaseRecord.RetrieveByObject":
    case "CRMOpportunity.RetrieveByObject":
    case "CRMOpportunityProduct.RetrieveByObject":
    case "CRMProduct.RetrieveByObject":
    case "CRMProduct.RetrieveKitProducts":
    case "CRMProduct.RetrieveSubstitutes":
    case "CRMProductPriceLevel.RetrieveByObject":
    case "CRMQuote.RetrieveByObject":
    case "CRMQuote.RetrieveContacts":
    case "CRMQuoteDetail.RetrieveByObject":
    case "CRMSalesLiterature.RetrieveByObject":
    case "CRMSalesLiteratureItem.RetrieveByObject":
    case "CRMSalesOrder.RetrieveByObject":
    case "CRMSalesOrder.RetrieveContacts":
    case "CRMSalesOrderDetail.RetrieveByObject":
    case "CRMSalesPerson.RetrieveByTerritory":
    case "CRMSharePointDocumentLocation.RetrieveSubSharePointDocumentLocations":
    case "CRMSharePointSites.RetrieveSharePointSubSites":
    case "CRMTask.RetrieveByObject":
    case "CustomEntityService.RetrieveByObject":
    case "CustomEntityService.RetrieveRelatedObjects":
    case "CustomerOpportunityRole.RetrieveRelated":
    case "Import.RetrieveImportFailures":
    case "Import.RetrieveImportSuccesses":
    case "Import.RetrieveImportPartialFailures":
    case "SecRole.RetrieveTeamRoles":
    case "SecRole.RetrieveUserRoles":
    case "SharePointDocument.RetrieveDocument":
    case "SMResource.RetrieveEquipmentByBusinessUnit":
    case "SMSite.RetrieveMembers":
    case "ListMember.RetrieveByObject":
        return true;
    default:
        return false
    }
};
Mscrm.GridRibbonActions.validDataProviderForXlsx = function(gridControl) {
    if (IsNull(gridControl)) return false;
    var $v_0 = gridControl.getProperty("dataProvider");
    if (isNullOrEmptyString($v_0)) return true;
    switch ($v_0) {
    case "Microsoft.Crm.Application.Platform.Grid.GridDataProviderQueryBuilder":
    case "Microsoft.Crm.Application.Controls.CategoryGridDataProvider":
    case "Microsoft.Crm.Application.Controls.ActivitiesGridDataProvider":
    case "Microsoft.Crm.Application.Controls.DuplicateRuleGridDataProvider":
    case "Microsoft.Crm.Application.Controls.BulkDeleteFailureGridDataProvider":
    case "Microsoft.Crm.Application.Controls.TeamGridDataProvider":
    case "Microsoft.Crm.Application.Controls.ReportGridDataProvider":
    case "Microsoft.Crm.Application.Controls.ProductFamilyGridDataProvider":
    case "Microsoft.Crm.Application.Controls.ProductGridDataProvider":
    case "Microsoft.Crm.Application.Controls.MetricDetailGridDataProvider":
    case "Microsoft.Crm.Application.Controls.DynamicPropertyOptionSetItemGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SyncErrorGridDataProvider":
    case "Microsoft.Crm.Service.Application.Controls.EntitlementChannelGridDataProvider":
    case "Microsoft.Crm.Service.Application.Controls.ConvertRuleGridDataProvider":
    case "Microsoft.Crm.Service.Application.Controls.CasesGridDataProvider":
    case "Microsoft.Crm.Application.Controls.ImportFileGridDataProvider":
        return true;
    case "Microsoft.Crm.Application.Controls.ApiListDataProvider":
    case "Microsoft.Crm.Application.Controls.AppointmentBookGridDataProvider":
    case "Microsoft.Crm.Application.Controls.AsyncOperationGridDataProvider":
    case "Microsoft.Crm.Application.Controls.DynamicPropertyGridDataProvider":
    case "Microsoft.Crm.Application.Controls.ListCategoryDataProvider":
    case "Microsoft.Crm.Application.Controls.LookupCategoryDataProvider":
    case "Microsoft.Crm.Application.Controls.LookupGridDataProvider":
    case "Microsoft.Crm.Application.Controls.PrintGridDataProvider":
    case "Microsoft.Crm.Application.Controls.ViewDuplicatesGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SharePointGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.AlternateKeyGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.AttributeGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.AttributeMapGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.BusinessRuleGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.ComponentDependencyDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.CustomDisplayStringGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.DependenciesForUninstallDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.ExportMissingDependencyDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.FieldPermissionGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.GrantPermissionsGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.GrantPrincipalsGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.HierarchyRelationshipGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.HierarchyRuleGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.ImportGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.ImportMissedDependencyDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.LanguageGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.MappableAttributeGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.RelationshipGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.SolutionComponentLookupFilter":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.SolutionComponentsGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.SolutionsMarketplaceGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.UIElementsGridDataProvider":
    case "Microsoft.Crm.Application.Controls.SystemCustomization.VisualizationsGridDataProvider":
    case "Microsoft.Crm.Application.Controls.TeamTemplateGridDataProvider":
    case "Microsoft.Crm.Service.Application.Controls.ScheduleSearchDataProvider":
    case "Microsoft.Crm.Service.Application.Controls.HolidaysGridDataProvider":
    case "Microsoft.Crm.Service.Application.Controls.ServiceRestrictionsGridDataProvider":
    case "Microsoft.Crm.Service.Application.Controls.SlaGridDataProvider":
    case "Microsoft.MbsIntegration.CrmCustomPages.SiteGridDataProvider":
    default:
        return false
    }
};
Mscrm.GridRibbonActions.returnToCrmList = function() {
    Mscrm.MetricsReporting.instance().addCounterMetric("ExportToExcelOnline.ReturnToCrmList", 1);
    var $v_0 = $find("excelOnlineControl");
    $v_0.set_handleNavigate(false);
    var $v_1 = new Xrm.ConfirmDialogStrings;
    $v_1.title = window.LOCID_DLG_RETURNTOCRM_TITLE;
    $v_1.subtitle = window.LOCID_DLG_RETURNTOCRM_TEXT;
    $v_1.confirmButtonLabel = window.LOCID_DLG_OK_BTN_LABEL;
    $v_1.cancelButtonLabel = window.LOCID_DLG_CANCEL_BTN_LABEL;
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 200;
    $v_2.width = 500;
    Xrm.Dialog.openConfirmDialog($v_1, $v_2, Mscrm.GridRibbonActions.$h, function() { $v_0.set_handleNavigate(true) })
};
Mscrm.GridRibbonActions.saveToCrm = function() {
    var $v_0 = $find("excelOnlineControl");
    $v_0.saveToCrm()
};
Mscrm.GridRibbonActions.SaveToCrmHelper = function(actionUri) {
    Mscrm.GridRibbonActions.$h();
    var $v_0 = new Mscrm.CrmDialog(Mscrm.CrmUri.create(actionUri), null, 648, 245, null);
    $v_0.show()
};
Mscrm.GridRibbonActions.$h = function() {
    var $v_0 = Mscrm.PageManager.get_instance();
    !IsNull($v_0) && $v_0.raiseEvent(16, null)
};
Mscrm.GridRibbonActions.enableSaveToCrm = function() {
    var $v_0 = window.PrimaryEntityTypeCodeForWopi;
    if (IsNull($v_0)) return false;
    var $v_1 = Number.parseInvariant($v_0);
    return Mscrm.EntityPropUtil.isImportableTypeCode($v_1) && $v_1 !== 4200
};
Mscrm.GridRibbonActions.$13 = function($p0) {
    var $v_0 = {},
        $v_1 = XUI.Xml.LoadXml($p0.get_gridXml()),
        $v_2 = XUI.Xml.SelectSingleNode($v_1, "grid/parameters", null);
    if (IsNull($v_2)) return $v_0;
    XUI.Xml.DomUtils.ForEachChild($v_2,
        function($p1_0) {
            $v_0[$p1_0.nodeName] = XUI.Xml.GetText($p1_0);
            return false
        });
    return $v_0
};
Mscrm.GridRibbonActions.exportToExcelOnline = function(gridControl, entityTypeCode) {
    var $v_0, $v_1, $v_2, $$t_C, $$t_D, $$t_E;
    Mscrm.GridRibbonActions.$m(gridControl,
        "ExportToExcelOnlineStart",
        $$t_C = { val: $v_0 },
        $$t_D = { val: $v_2 },
        $$t_E = { val: $v_1 }), $v_0 = $$t_C.val, $v_2 = $$t_D.val, $v_1 = $$t_E.val;
    var $v_3 = gridControl.GetParameter("viewid"),
        $v_4 = parseInt(gridControl.GetParameter("viewtype")),
        $v_5 = Xrm.Internal.getEntityName($v_4),
        $v_6 = gridControl.GetParameter("layoutXml"),
        $v_7 = new Xrm.Objects.EntityReference($v_5, new Microsoft.Crm.Client.Core.Framework.Guid($v_3));
    Xrm.Internal.messages.exportToExcelOnline($v_7, $v_0, $v_6, $v_1, $v_2)
        .then(function($p1_0) {
                Mscrm.GridRibbonActions.$Z("ExportToExcelOnlineResponseSDKEnd",
                    function() { return Mscrm.JsonUtilities.getJsonString($p1_0.editLink) },
                    entityTypeCode)
            },
            function($p1_0) { Mscrm.GridRibbonActions.$Y($p1_0) })
};
Mscrm.GridRibbonActions.displayExcelOnlineTour = function() {
    if (!IsNull(Mscrm.Utilities.getCookie("persistentExcelOnlineTourCookie")) ||
        !IsNull(Mscrm.Utilities.getCookie("sessionExcelOnlineTourCookie"))) return;
    var $v_0 = 800, $v_1 = 445;
    Mscrm.InlineDialogUtility.createInlineDialog(Mscrm.CrmUri
        .create("/_forms/ExcelOnlineTour/dlg_exporttoexcelonlinetour.aspx"),
        null,
        $v_0,
        $v_1,
        Number.NaN,
        Number.NaN,
        Number.NaN)
};
Mscrm.GridRibbonActions.createDocumentTemplate = function(commandProperties,
    entityTypeCode,
    gridControl,
    templateTypeCode) {
    !IsNull(commandProperties) &&
        !IsNull(gridControl) &&
        !IsNull(entityTypeCode) &&
        Mscrm.GridRibbonActions.displayCreateTemplateDialog(templateTypeCode, entityTypeCode, gridControl, 1)
};
Mscrm.GridRibbonActions.runDocumentTemplate = function(commandProperties, gridControl) {
    if (IsNull(commandProperties) || IsNull(gridControl)) return;
    var $v_0 = commandProperties["SourceControlId"];
    if (IsNull($v_0)) return;
    var $v_1 = $v_0.substr($v_0.length - 36);
    Mscrm.ExportGridToExcel.exportDocumentTemplate(gridControl, $v_1, 1)
};
Mscrm.GridRibbonActions.openDocumentTemplateInExcelOnline = function(commandProperties, gridControl) {
    if (IsNull(commandProperties) || IsNull(gridControl)) return;
    var $v_0 = commandProperties["SourceControlId"];
    if (IsNull($v_0)) return;
    var $v_1 = $v_0.substr($v_0.length - 36), $v_2 = Mscrm.DocumentTemplateUtil.get_documentTemplateInformation()[$v_1];
    if (IsNull($v_2)) return;
    var $v_3, $v_4, $v_5, $$t_B, $$t_C, $$t_D;
    Mscrm.GridRibbonActions.$m(gridControl,
        "ExportTemplateToExcelOnlineStart",
        $$t_B = { val: $v_3 },
        $$t_C = { val: $v_5 },
        $$t_D = { val: $v_4 }), $v_3 = $$t_B.val, $v_5 = $$t_C.val, $v_4 = $$t_D.val;
    var $v_6 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName($v_2.EntityTypeCode),
        new Microsoft.Crm.Client.Core.Framework.Guid($v_1));
    Xrm.Internal.messages.exportTemplateToExcelOnline($v_6, $v_3, $v_4, $v_5)
        .then(function($p1_0) {
                Mscrm.GridRibbonActions.$Z("ExportTemplateToExcelOnlineResponseSDKEnd",
                    function() { return Mscrm.JsonUtilities.getJsonString($p1_0.editLink) },
                    $v_2.EntityTypeCode)
            },
            function($p1_0) { Mscrm.GridRibbonActions.$Y($p1_0) })
};
Mscrm.GridRibbonActions.$m = function($p0, $p1, $p2, $p3, $p4) {
    setPerfMarkerTimestamp($p1);
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/jquery-2.1.1.min.js"), true);
    Mscrm.ExportGridToExcel.launchProgressIndicator(true, 620, 150, 0, null, null, $p0);
    $p2.val = $p0.GetParameter("effectiveFetchXml");
    $p3.val = Mscrm.GridRibbonActions.$13($p0);
    $p4.val = "queryapi" in $p3.val ? $p3.val["queryapi"] : ""
};
Mscrm.GridRibbonActions.$Z = function($p0, $p1, $p2) {
    Mscrm.ExportGridToExcel.closeProgressIndicator();
    setPerfMarkerTimestamp($p0);
    var $v_0 = Mscrm.CrmUri.create("/_root/WopiFrame.aspx"), $v_1, $$t_5, $$t_6;
    $$t_6 = Mscrm.JsonUtilities.tryGetParsedJson($p1(), $$t_5 = { val: $v_1 }), $v_1 = $$t_5.val, $$t_6;
    $v_0.get_query()["fileId"] = new Microsoft.Crm.Client.Core.Framework.Guid($v_1["OfficeDocumentId"].toString());
    $v_0.get_query()["fileCreatedOn"] = $v_1["OfficeDocumentCreatedOn"].toString();
    $v_0.get_query()["entityTypeCode"] = $p2.toString();
    openUrlByCrmUrl($v_0, null);
    Mscrm.GridRibbonActions.displayExcelOnlineTour()
};
Mscrm.GridRibbonActions.$Y = function($p0) {
    Mscrm.ExportGridToExcel.closeProgressIndicator();
    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p0)
};
Mscrm.GridRibbonActions
    .createWordTemplate = function(commandProperties, entityTypeCode, gridControl, templateTypeCode) {
        !IsNull(commandProperties) &&
            !IsNull(gridControl) &&
            !IsNull(entityTypeCode) &&
            Mscrm.GridRibbonActions.displayCreateTemplateDialog(templateTypeCode, entityTypeCode, gridControl, 2)
    };
Mscrm.GridRibbonActions.runWordTemplate = function(commandProperties, entityTypeCode, gridControl, records) {
    if (IsNull(commandProperties) || IsNull(gridControl) || IsNull(records)) {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return
    }
    var $v_0 = null;
    if (Object.getType(records) === String) {
        $v_0 = new Array(1);
        $v_0[0] = records
    } else $v_0 = records;
    var $v_1 = commandProperties["SourceControlId"], $v_2 = $v_1.substr($v_1.length - 36);
    !IsNull(entityTypeCode) &&
        !IsNull($v_2) &&
        Mscrm.ExportGridToExcel.exportWordTemplate(entityTypeCode, $v_2, JSON.stringify($v_0))
};
Mscrm.GridRibbonActions.runReport = function(commandProperties, gridControl, recordIds) {
    Mscrm.RunReportFromGrid.runReport(commandProperties, gridControl, recordIds)
};
Mscrm.GridRibbonActions.runReportFromAppGrid = function(gridControl,
    recordIds,
    filterable,
    reportId,
    reportType,
    fileName) {
    Mscrm.RunReportFromGrid.$l(gridControl, recordIds, filterable, reportId, reportType, fileName)
};
Mscrm.GridRibbonActions.print = function(gridControl) {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    Mscrm.PrintFromGrid.print(gridControl)
};
Mscrm.GridRibbonActions.addCustomerRelationship = function(gridControl, selectedRecords, entityTypeCode) {
    if (IsNull(selectedRecords) || !selectedRecords.length) {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return
    }
    if (selectedRecords.length === 1) locAddRelatedToNonForm(4502, entityTypeCode, selectedRecords[0].Id, "");
    else alert(window.LOCID_RELATIONSHIPS_TOO_MANY)
};
Mscrm.GridRibbonActions.addCustomerOpportunityRole = function(gridControl, selectedRecords, entityTypeCode) {
    if (IsNull(selectedRecords) || !selectedRecords.length) {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return
    }
    if (selectedRecords.length === 1) locAddRelatedToNonForm(4503, entityTypeCode, selectedRecords[0].Id, "");
    else alert(window.LOCID_RELATIONSHIPS_TOO_MANY)
};
Mscrm.GridRibbonActions.reclassify = function(gridControl, selectedRecords, entityTypeCode) {
    var $v_0 = Mscrm.GridRibbonActions.$0("reclassify", entityTypeCode, selectedRecords.length);
    Mscrm.GridRibbonActions.$1($v_0, gridControl, selectedRecords, 420)
};
Mscrm.GridRibbonActions.isContractInvoiced = function() {
    if (IsNull(window.CONTRACT_INVOICED)) return false;
    else return window.CONTRACT_INVOICED
};
Mscrm.GridRibbonActions.$0 = function($p0, $p1, $p2) { return Mscrm.Grid.generateStandardActionUri($p0, $p1, $p2) };
Mscrm.GridRibbonActions.$1 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    return Mscrm.Grid.executeStandardAction($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7)
};
Mscrm.GridRibbonActions.$X = function($p0, $p1, $p2, $p3, $p4, $p5) {
    return Mscrm.Grid.executeStandardActionInternal($p0, $p1, $p2, $p3, $p4, $p5)
};
Mscrm.GridRibbonActions.$V = function($p0) {
    var $v_0 = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=3E4792DF-42CC-4b6b-B7E6-E197B4986EFF");
    $v_0 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_0);
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = parseInt(window.LOCID_DEDUPE_WINDOW_WIDTH, 10);
    $v_1.height = parseInt(window.LOCID_DEDUPE_WINDOW_HEIGHT, 10);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, $p0, null, null)
};
Mscrm.GridRibbonActions.$10 = function($p0) { return Mscrm.Grid.getSubTypesString($p0) };
Mscrm.GridRibbonActions.$T = function($p0) {
    for (var $v_0 = $p0.children.length - 1; $v_0 >= 0; $v_0--) $p0.removeChild($p0.children[$v_0])
};
Mscrm.GridRibbonActions.$B = function($p0, $p1, $p2) {
    var $v_0 = document.createElement("input");
    $v_0.type = "hidden";
    $v_0.name = $p1;
    $v_0.value = $p2;
    $p0.appendChild($v_0)
};
Mscrm.GridRibbonActions.$18 = function($p0) {
    var $v_0 = $p0.GetParameter("isFetchXmlNotFinal");
    if (!isNullOrEmptyString($v_0)) return !Mscrm.Utilities.parseBoolean($v_0);
    return false
};
Mscrm.GridRibbonActions.$d = function($p0) {
    switch ($p0) {
    case "{C147F1F7-1D78-4D10-85BF-7E03B79F74FA}":
    case "{CFBCD7AF-AEE5-4E45-8ECC-C040D4020581}":
    case "{9818766E-7172-4D59-9279-013835C3DECD}":
    case "{927E6CD8-B3ED-4C20-A154-B8BD8A86D172}":
    case "{AFE23D8A-6651-474D-B8EE-90210A8231F6}":
    case "{FE961BBB-E5EA-44BA-AFF3-DB1D8BBBA18B}":
        return true
    }
    return false
};
Mscrm.GridRibbonActions.$1B = function($p0) {
    switch ($p0) {
    case "{ED1F0041-4F6B-4171-8757-4AC44C2FCAFA}":
    case "{8FBA639E-CD73-DF11-805D-00155DB1891A}":
    case "{A2927069-E4DC-4E8F-8FB1-D2F6C40C427E}":
    case "{8EF40D37-0868-440C-AF6B-CAC0C62E78E3}":
    case "{D234426E-1F37-4944-9255-50E19B541C4C}":
    case "{5E586DB6-222A-4ea3-8BD0-A85EE0FF52C3}":
    case "{DA5750D5-60A6-4ac7-A58A-A90CD2B1AF0A}":
    case "{AB582FB0-A846-453e-AD88-77F75CE91264}":
    case "{974C65FE-C789-48fe-B510-7AE579B9B5C6}":
    case "{6DFBA3A1-6DF3-4140-831B-B385C7E92B64}":
    case "{EF3CDB5B-71ED-4e73-92B2-ED6D47156521}":
    case "{F33B0C61-C5A9-4881-8275-C2DC63626251}":
    case "{B69375FB-61EF-433e-A4C2-031856F9A9E5}":
    case "{2EF7FF1D-8CCD-4422-86C4-4A48FE1F4B1D}":
    case "{634739A8-D8E5-41bb-B7DF-C121BD18E4B4}":
    case "{8DD58E14-0138-47d4-BA2D-A7DC76094D05}":
    case "{A596FF84-88FD-4eea-84F6-335B357E176A}":
    case "{31DAE384-A86F-DF11-986C-00155D2E3002}":
    case "{0894C803-4B27-DF11-893C-00155D26C21D}":
    case "{0E24F0D5-C2E1-4B3D-9F43-E9C817C811DF}":
    case "{01053369-B068-DF11-AE90-00155D2E3002}":
    case "{9C60DC64-4B27-DF11-893C-00155D26C21D}":
    case "{61F1B589-3DAF-45E1-96BF-9BF7B12AF252}":
    case "{2AAE0E9A-29A7-440D-8DD4-6FD37B8A156F}":
    case "{00000000-0000-0000-00AA-000010001028}":
    case "{460F1FAD-2673-DF11-986C-00155D2E3002}":
    case "{2D5E1400-F86D-DF11-986C-00155D2E3002}":
    case "{00000000-0000-0000-00AA-000010001021}":
    case "{00000000-0000-0000-00AA-000010001027}":
    case "{45B0D1D8-8D57-DF11-A5A2-00155D2A9005}":
    case "{8735625E-5657-DF11-A5A2-00155D2A9005}":
    case "{31e76b45-bfe7-447e-b4b5-50dc393bcdbe}":
    case "{b7da133f-10dd-400f-ace6-e2cad3063f0f}":
        return true
    }
    return false
};
Mscrm.GridRibbonActions.isDraftProductFamily = function() { return Mscrm.GridCommandActions.isDraftProductFamily() };
Mscrm.GridRibbonActions.displayUpdateTemplateDialog = function(templateType) {
    var $v_0 = 505, $v_1 = 363, $v_2 = Mscrm.CrmUri.create("/_forms/Template/dlg_UploadDialog.aspx");
    $v_2.get_query()["TemplateType"] = IsNull(templateType) ? 9941 : templateType;
    var $v_3 = new Mscrm.CrmDialog($v_2, null, $v_0, $v_1, null);
    $v_3.show()
};
Mscrm.GridRibbonActions
    .displayCreateTemplateDialog = function(templateTypeCode, entityTypeCode, gridControl, documentType) {
        var $v_0 = 505, $v_1 = 363, $v_2 = Mscrm.CrmUri.create("/_forms/Template/dlg_CreateDialog.aspx");
        $v_2.get_query()["TemplateTypeCode"] = templateTypeCode;
        if (!IsNull(entityTypeCode) && !IsNull(gridControl)) {
            $v_2.get_query()["EntityTypeCode"] = entityTypeCode;
            $v_2.get_query()["DocumentType"] = documentType;
            if (documentType === 1) {
                var $v_4 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.GetParameter("viewid")),
                    $v_5 = gridControl.GetParameter("viewtype");
                $v_2.get_query()["ViewId"] = $v_4;
                $v_2.get_query()["ViewType"] = $v_5
            }
        } else $v_2.get_query()["DocumentType"] = 1;
        var $v_3 = new Mscrm.CrmDialog($v_2, null, $v_0, $v_1, null);
        $v_3.show()
    };
Mscrm.GridRibbonActions.displaySelectEntitiesDialog = function(entityTypeCode) {
    var $v_0 = 1050, $v_1 = 620, $v_2 = Mscrm.CrmUri.create("/_forms/Template/dlg_SelectEntitiesDialog.aspx");
    $v_2.get_query()["EntityTypeCode"] = entityTypeCode;
    var $v_3 = new Mscrm.CrmDialog($v_2, null, $v_0, $v_1, null);
    $v_3.show()
};
Mscrm.GridRibbonActions.displayTemplateTour = function() {
    if (!IsNull(Mscrm.Utilities.getCookie("persistentTemplateTourCookie"))) return;
    var $v_0 = 850,
        $v_1 = 445,
        $v_2 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/_forms/Template/dlg_TemplateTourDialog.aspx"),
            null,
            $v_0,
            $v_1,
            null);
    $v_2.show()
};
Mscrm.RibbonActions = function() {};
Mscrm.RibbonActions.isRefreshForm = function() { return Mscrm.CommandBarActions.isRefreshForm() };
Mscrm.RibbonActions.notOnMarketingListOrListUnlocked = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListUnLocked()
};
Mscrm.RibbonActions.notOnMarketingListOrListActive = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListActive()
};
Mscrm.RibbonActions.alwaysEnabled = function() { return Mscrm.CommandBarActions.alwaysEnabled() };
Mscrm.RibbonActions.isAutoSaveEnabled = function() { return Xrm.Page.context.getIsAutoSaveEnabled() };
Mscrm.RibbonActions.isBulkSetRegardingValid = function(entityTypeCode, records) {
    return Mscrm.GridCommandActions.isBulkSetRegardingValid(entityTypeCode, records)
};
Mscrm.RibbonActions.saveForm = function(form) {
    if (Mscrm.RibbonActions.isRefreshForm()) Mscrm.CommandBarActions.saveForm("");
    else Mscrm.RibbonActions.saveLegacyForm(form, "Save")
};
Mscrm.RibbonActions.saveAndCloseForm = function(form) {
    if (Mscrm.RibbonActions.isRefreshForm()) Mscrm.CommandBarActions.saveForm("saveandclose");
    else Mscrm.RibbonActions.saveLegacyForm(form, "SaveAndClose")
};
Mscrm.RibbonActions.saveAndNewForm = function(form) {
    if (Mscrm.RibbonActions.isRefreshForm()) Mscrm.CommandBarActions.saveForm("saveandnew");
    else Mscrm.RibbonActions.saveLegacyForm(form, "SaveAndNew")
};
Mscrm.RibbonActions.sendFormShortcut = function(usingEmail, form) {
    Mscrm.CommandBarActions.sendFormShortcut(usingEmail, form)
};
Mscrm.RibbonActions.openNewRecord = function(entityLogicalName, gridControl) {
    var $v_0 = null;
    if (Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp() ||
        Mscrm.InternalUtilities.Utilities.isRefreshForm() ||
        Mscrm.Utilities.isTurboForm()) {
        Mscrm.CommandBarActions.openNewRecord(entityLogicalName, gridControl, null);
        return
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.isLiteSubGrid())
        if (entityLogicalName === "activitypointer" && gridControl.get_gridType() === 3) {
            gridControl.addButtonClickHandler();
            return
        } else if (entityLogicalName === "activitypointer") {
            $v_0 = {};
            $v_0["activityRegardingObjectId"] = Xrm.Page.data.entity.getId()
        } else if (Mscrm.GridRibbonActions.OpenQuickCreateFormForNewRecord(gridControl)) return;
    if (Xrm.Internal.isFeatureEnabled("FCB.SLAV2") && entityLogicalName === "sla") {
        var $v_1 = null;
        if (Mscrm.CommandBarActions.isWebClient()) {
            $v_1 = new Xrm.DialogOptions;
            $v_1.height = 250;
            $v_1.width = 600
        }
        Xrm.Dialog.openDialog("CreateSlaDialog", $v_1, Mscrm.RibbonActions.$1D(), Mscrm.RibbonActions.$r, null)
    } else Xrm.Utility.openEntityForm(entityLogicalName, null, $v_0);
    try {
        var $v_2 = {};
        $v_2["context"] = Mscrm.InternalUtilities.JSTypes.isNull(gridControl) ? "form" : "grid";
        $v_2["dialogName"] = "New";
        $v_2["entityId"] = Xrm.Internal.getEntityCode(entityLogicalName).toString();
        $v_2["userRoleId"] = Xrm.Page.context.getUserRoles().toString();
        Mscrm.MetricsReporting.instance().addMetric("dialogs", $v_2)
    } catch ($v_3) {
    }
};
Mscrm.RibbonActions.$r = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) && $p0["lastButtonClicked"] === "ok_id") {
        var $v_0 = {};
        $v_0["name"] = $p0["name_id"];
        $v_0["objecttypecode"] = $p0["applicableEntity_id"];
        $v_0["primaryentityotc"] = $p0["applicableEntity_id"];
        Xrm.Utility.openEntityForm("sla", null, $v_0)
    }
};
Mscrm.RibbonActions.$1D = function() {
    var $v_0 = {};
    $v_0["lastButtonClicked"] = "ok_id";
    $v_0["name_id"] = "";
    $v_0["applicableEntity_id"] = -1;
    return $v_0
};
Mscrm.RibbonActions.openObjFromClassic = function(entityTypeCode) {
    Mscrm.RibbonActions.openNewRecord(Xrm.Internal.getEntityName(entityTypeCode), null)
};
Mscrm.RibbonActions.isEntitlementActive = function() {
    var $v_0 = true;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
            .data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui)) {
        var $v_1 = Xrm.Page.getAttribute("statecode");
        if (Xrm.Page.data.entity.getEntityName() === "entitlement")
            if (Xrm.Page.ui.getFormType() === 4) $v_0 = true;
            else $v_0 = false;
        else if (Xrm.Page.ui.getFormType() === 4 &&
            (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.getText() === "Inactive")) $v_0 = false;
        else $v_0 = true
    }
    return $v_0
};
Mscrm.RibbonActions.enableAddCaseForContract = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(window
        .ADDCASE_ENABLED_FOR_CONTRACT)) return window.ADDCASE_ENABLED_FOR_CONTRACT;
    else return true
};
Mscrm.RibbonActions
    .addConnectionFromForm = function(objectId, objectTypeCode, primaryControl, connectToMe, gridControl) {
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(gridControl)) {
            var $v_0 = gridControl.GetParameter("viewid");
            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
                if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl.getViewSelector))
                    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl.getViewSelector().getCurrentView))
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl.getViewSelector().getCurrentView())) {
                            $v_0 = gridControl.getViewSelector().getCurrentView().id;
                            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
                                $v_0 = $v_0.replace("{", "").replace("}", "").toUpperCase();
                                $v_0 = "{" + $v_0 + "}"
                            }
                        }
            var $v_1 = Xrm.Page.data.entity.getEntityName();
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
                if ($v_1 === "knowledgearticle")
                    if ($v_0 === "{DDB43BE7-F7DA-4D90-845F-06552A446DA0}") {
                        Mscrm.KnowledgeArticleCommandActions.relateArticle();
                        return
                    } else if ($v_0 === "{BA3387BF-382D-4376-A538-5B02467925D3}") {
                        Mscrm.KnowledgeArticleCommandActions.relateProduct();
                        return
                    } else if ($v_0 === "{50E935BA-2E0D-460D-AD36-B699B9B991D8}") {
                        Mscrm.KnowledgeArticleCommandActions.relateCategory();
                        return
                    }
        }
        if (Mscrm.InternalUtilities.Utilities
            .isRefreshForm()) Mscrm.CommandBarActions.addConnectionFromForm(objectId, objectTypeCode, connectToMe);
        else {
            var $v_2 = String.format("pId={0}&pType={1}",
                CrmEncodeDecode.CrmNameValueEncode(objectId),
                CrmEncodeDecode.CrmNameValueEncode(objectTypeCode.toString()));
            if (connectToMe) $v_2 = String.format("{0}&connectToMe=true", $v_2);
            if (objectTypeCode === 1022) $v_2 = String.format("{0}&connectFromPricelevel=true", $v_2);
            openObj(3234, "", $v_2, null, 0, null)
        }
    };
Mscrm.RibbonActions.enableAddCaseForContractLine = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(window
        .ADDCASE_ENABLED_FOR_CONTRACTLINE)) return window.ADDCASE_ENABLED_FOR_CONTRACTLINE;
    else return true
};
Mscrm.RibbonActions.showAbandon = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process) &&
        Xrm.Internal.isFeatureEnabled("FCB.ProcessUnification")) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus();
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) return $v_1 === "active"
        }
    }
    return false
};
Mscrm.RibbonActions.showFinish = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process) &&
        Xrm.Internal.isFeatureEnabled("FCB.ProcessUnification")) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus(),
                $v_2 = !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1) && $v_1 === "active";
            if ($v_2) return Xrm.Page.data.process.isLastStage()
        }
    }
    return false
};
Mscrm.RibbonActions.showSetActiveStage = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process)) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus();
            if (!Mscrm.InternalUtilities._Script
                .isNullOrUndefined($v_1) &&
                $v_1 === "active") return Xrm.Page.data.process.canSetActiveStage()
        }
    }
    return false
};
Mscrm.RibbonActions.showReactivate = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process) &&
        Xrm.Internal.isFeatureEnabled("FCB.ProcessUnification")) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus();
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) return $v_1 !== "active"
        }
    }
    return false
};
Mscrm.RibbonActions.$8 = function($p0, $p1) {
    if (IsNull($p0)) return false;
    try {
        if (!IsNull($p0[$p1])) {
            $p0[$p1]();
            return true
        } else if (Sys.UI.Control.isInstanceOfType($p0)) {
            var $v_0 = $get($p0.get_id());
            $v_0[$p1]();
            return true
        }
    } catch ($$e_3) {
    }
    return false
};
Mscrm.RibbonActions.$16 = function($p0, $p1) {
    if (IsNull($p0)) return false;
    try {
        $p0[$p1]();
        return true
    } catch ($$e_2) {
    }
    return false
};
Mscrm.RibbonActions.print = function(primaryControl, selectedControl) {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    if (!Mscrm.RibbonActions.$8(primaryControl, "Print"))
        if (!IsNull(selectedControl)) Mscrm.RibbonActions.$8(selectedControl, "Print");
        else {
            var $v_0 = document.getElementsByTagName("iframe");
            if ($v_0 && $v_0.length > 0)
                try {
                    var $v_1 = $v_0[0].contentWindow, $v_2 = $v_1.Sys.Application.findComponent("crmGrid");
                    if ($v_2) $v_2.Print();
                    else alert(window.LOCID_ACTION_UNSUPPORTED_ERROR)
                } catch ($$e_5) {
                    alert(window.LOCID_ACTION_UNSUPPORTED_ERROR);
                    return
                }
        }
};
Mscrm.RibbonActions.openMultipleEntityQuickFindSearch = function() {
    var $v_0 = Mscrm.CrmUri.create("/main.aspx");
    $v_0.get_query()["pagetype"] = "SEARCH";
    var $v_1 = (new Date).getTime(), $v_2 = openStdWin($v_0, "_blank", 1e3, 600, null), $v_3 = (new Date).getTime();
    window.setTimeout(function() { Mscrm.RibbonActions.setPerfMarkers($v_2, $v_1, $v_3) }, 2e3)
};
Mscrm.RibbonActions.openAdvancedFind = function(selectedControl, primaryControl, newMode) {
    var $v_0 = true;
    if (IsNull(primaryControl) && !IsNull(selectedControl) && !newMode) {
        var $v_1 = $find(selectedControl.get_id() + "_filterSet");
        if (!IsNull($v_1) && $v_1.isFilterSetDirty()) $v_0 = confirm(window.LOCID_GF_AFWARNING)
    }
    if ($v_0)
        try {
            if (!IsNull(primaryControl) && Mscrm.FormControl.isInstanceOfType(primaryControl)
            ) primaryControl.openAdvancedFind();
            else {
                var $v_2 = $find("crmContentPanel");
                if ($v_2 && Mscrm.ContentPanel.isInstanceOfType($v_2)) $v_2.get_contentWindow().openAdvFind();
                else {
                    var $v_3 = "crmGrid";
                    if (!IsNull(selectedControl)) $v_3 = selectedControl.get_id();
                    openAdvFind($v_3, newMode)
                }
            }
        } catch ($$e_7) {
            var $v_4 = Mscrm.CrmUri.create("/main.aspx");
            $v_4.get_query()["pagetype"] = "advancedfind";
            var $v_5 = (new Date).getTime(),
                $v_6 = openStdWin($v_4, "_blank", 900, 600, null),
                $v_7 = (new Date).getTime();
            window.setTimeout(function() { Mscrm.RibbonActions.setPerfMarkers($v_6, $v_5, $v_7) }, 2e3)
        }
};
Mscrm.RibbonActions.setPerfMarkers = function(instance, beforeWindowOpenTimestamp, afterWindowOpenTimestamp) {
    if (!Mscrm.SessionInfo.isOutlookClient()) {
        instance.BeforeWindowOpenTimestamp = beforeWindowOpenTimestamp;
        instance.AfterWindowOpenTimestamp = afterWindowOpenTimestamp
    }
};
Mscrm.RibbonActions.exportToExcel = function(gridControl) { Mscrm.RibbonActions.$8(gridControl, "ExportToExcel") };
Mscrm.RibbonActions.saveLegacyForm = function(form, methodName) {
    if (Mscrm.Utilities
        .isEdge() ||
        Mscrm.Utilities.isIE10OrHigher())
        !IsNull(document.activeElement) &&
            document.activeElement.tagName.toLowerCase() === "input" &&
            $P_CRM(document.activeElement).blur();
    if (Mscrm.FormProxyForRibbon.isInstanceOfType(form)) {
        form = form.get_crmFormControl();
        Mscrm.RibbonActions.$16(form, methodName);
        return
    }
    Mscrm.RibbonActions.$8(form, methodName)
};
Mscrm.RibbonActions.closeForm = function(form) { Mscrm.RibbonActions.$8(form, "CloseRecord") };
Mscrm.RibbonActions.addActivityOnForm = function(activityTypeCode) {
    Mscrm.AddActivity.addActivityToForm(activityTypeCode, null)
};
Mscrm.RibbonActions.addNoteToRecord = function(parentTypeCode, parentId) { openObjEx(5, parentTypeCode, parentId) };
Mscrm.RibbonActions.addFileToRecord = function(parentTypeCode, parentId) {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var $v_0 = Mscrm.WindowInformation.getWindowInformation(5), $v_1 = $v_0.Url;
    $v_1.get_query()["hideDesc"] = "1";
    $v_1.get_query()["pId"] = parentId;
    $v_1.get_query()["pType"] = parentTypeCode;
    openStdWin($v_1, buildWinName(), 500, 175, null)
};
Mscrm.RibbonActions.openSettings = function() {
    var $v_0 = Mscrm.CrmUri.create("/tools/personalsettings/dialogs/personalsettings.aspx"),
        $v_1 = new Xrm.DialogOptions;
    $v_1.height = 695;
    $v_1.width = 950;
    var $v_2 = Mscrm.RibbonActions.openSettingsCallback;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_2)
};
Mscrm.RibbonActions.openSettingsCallback = function(retValue) { retValue && Mscrm.Utilities.reloadPage() };
Mscrm.RibbonActions.close = function() {
    var $v_0 = 23;
    if (Mscrm.NavigationMode.DefaultNavigationMode === 1) $v_0 = 18;
    Mscrm.PageManager.get_instance().raiseEvent($v_0, null)
};
Mscrm.RibbonActions.sendFormShortcutLegacy = function(usingEmail, form) {
    if (!usingEmail && !Mscrm.Utilities.get_ieBrowserVersion()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var $v_0;
    if (Mscrm.FormProxyForRibbon.isInstanceOfType(form)) {
        form = form.get_crmFormControl();
        $v_0 = form
    } else if (isInstanceOfTypeAcrossFrames(form, Mscrm.FormControl)) $v_0 = form;
    else $v_0 = $find("crmForm");
    var $v_1 = null;
    if (isInstanceOfTypeAcrossFrames($v_0, Mscrm.FormControl)) $v_1 = $v_0.get_primaryFieldValue();
    try {
        Mscrm.FormAction.sendFormShortcut(usingEmail, $v_1)
    } catch ($$e_4) {
    }
};
Mscrm.RibbonActions.addPrimaryToMarketingList = function(typeCode) {
    Xrm.Internal.doAction("", typeCode, "addtolist", Xrm.Page.data.entity.getId().toString())
};
Mscrm.RibbonActions.submitPrimary = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "submit", null)
};
Mscrm.RibbonActions.approvePrimary = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "approve", null)
};
Mscrm.RibbonActions.unpublishPrimary = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "unpublish", null)
};
Mscrm.RibbonActions.articleView = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "articleview", null)
};
Mscrm.RibbonActions.approveEmail = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "approve_emailaddress", null)
};
Mscrm.RibbonActions.rejectEmail = function(gridControl, typeCode) {
    doAction(gridControl.get_id(), typeCode, "reject_emailaddress", null)
};
Mscrm.RibbonActions.openConvertRule = function(sourceTypeCode) {
    var $v_0 = null, $v_1 = Xrm.Page.data.entity.getId();
    if ($v_1) {
        var $v_2 = new RemoteCommand("CustomerService", "GetConvertRuleId");
        $v_2.SetParameter("queueId", $v_1);
        $v_2.SetParameter("sourceTypeCode", sourceTypeCode);
        var $v_3 = $v_2.Execute();
        if ($v_3.Success) $v_0 = $v_3.ReturnValue
    }
    if ($v_0 && $v_0.length > 1)
        openFrmObj("?id=" + $v_0 + "&sourcetypecode=" + sourceTypeCode, "", 9300, null, 0, null);
    else
        openFrmObj("?sourcetypecode=" + sourceTypeCode + "&_CreateFromId=" + $v_1 + "&_CreateFromType=" + 2020,
            "",
            9300,
            null,
            0,
            null)
};
Mscrm.RibbonActions.showVisualization = function(gridControl, toggleVisualization) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id(), $v_1 = $v_0 + "_visualizationCompositeControl", $v_2 = $find($v_1);
        if ($v_2.isChartEnabled() && $v_2.isGridEnabled())
            if (!IsNull($v_2)) {
                $v_2.showVisualization(toggleVisualization);
                refreshRibbon()
            }
    }
};
Mscrm.RibbonActions.hideVisualization = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id(), $v_1 = $v_0 + "_visualizationCompositeControl", $v_2 = $find($v_1);
        if ($v_2.isChartEnabled() && $v_2.isGridEnabled())
            if (!IsNull($v_2)) {
                $v_2.hideVisualization();
                refreshRibbon()
            }
    }
};
Mscrm.RibbonActions.applyChartType = function(chartType) {
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.applyChartType(chartType, false)
};
Mscrm.RibbonActions.applyTopBottom = function(isTop, count) {
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.appendTopBottom(count.toString(), isTop, false, true)
};
Mscrm.RibbonActions.applyTopBottomCustom = function(isTop) {
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.appendTopBottomCustom(isTop, false)
};
Mscrm.RibbonActions.clearTopBottom = function() {
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.clearTopBottom()
};
Mscrm.RibbonActions.closeDesigner = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0)) {
        $v_0.showVisualizationPane();
        $v_0.exitDesigner()
    }
};
Mscrm.RibbonActions.saveVisualization = function() {
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.saveVisualization()
};
Mscrm.RibbonActions.saveAndCloseVisualization = function() {
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.saveAndCloseVisualization()
};
Mscrm.RibbonActions.copyVisualization = function() {
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.isVisualizationPaneVisible() && $v_0.saveChart(true)
};
Mscrm.RibbonActions.editVisualization = function() {
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.switchMode(Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode)
};
Mscrm.RibbonActions.expandVisualization = function() {
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.expandVisualization()
};
Mscrm.RibbonActions.createNewVisualization = function() {
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.switchMode(Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode)
};
Mscrm.RibbonActions.importVisualization = function() {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl"), $v_1;
    if (!IsNull($v_0)) $v_1 = true;
    else $v_1 = false;
    $v_0.importVisualization($v_1)
};
Mscrm.RibbonActions.exportVisualization = function() {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.isVisualizationPaneVisible() && $v_0.exportVisualization()
};
Mscrm.RibbonActions.refreshVisualization = function(domEvent) {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0)) {
        $v_0.showVisualizationPane(false);
        $v_0.refreshVisualizationPane(domEvent)
    }
};
Mscrm.RibbonActions.changeCompositeControlLayout = function(selectedEntityTypeCode, gridControl, layoutMode) {
    var $v_0 = false;
    if (!Mscrm.PageManager.isFlatUIPage() && !($v_0 = Mscrm.PageManager.isOutlookProxyPage())) return;
    if (!IsNull(gridControl)) {
        var $v_1 = false, $v_2 = gridControl.get_id() + "_visualizationCompositeControl", $v_3 = $find($v_2);
        if (layoutMode !== parseInt($v_3.get_compositeLayout(), 10)) $v_1 = true;
        var $v_4 = gridControl.get_id() + "_paneControl", $v_5 = $find($v_4);
        if (!$v_1 && !$v_0) {
            if (IsNull($v_5) || !$v_5.isVisualizationPaneVisible()
            ) Mscrm.RibbonActions.showVisualization(gridControl, false);
            else $v_5.getParameter("paneSize") === "0" && $v_5.showVisualizationPane();
            return
        }
        if (!IsNull($v_5) && $v_5.isPaneInDesignerMode() && !$v_5.confirmCloseDesigner()) return;
        var $v_6 = Mscrm.Utilities.getContentUrl(null);
        if (Mscrm.EntityPropUtil
            .isActivityTypeCode(selectedEntityTypeCode)) $v_6.get_query()["type"] = gridControl.GetParameter("otn");
        var $v_7 = layoutMode.toString(),
            $v_8 = $v_3.getVisualizationPaneParameter("CurrentVisualizationId"),
            $v_9 = $v_3.getVisualizationPaneParameter("CurrentVisualizationType"),
            $v_A = Mscrm.RibbonActions.$11($v_4),
            $v_B = $v_A === "4" || $v_A === "0" ? "1" : $v_A;
        $v_6.get_query()["layout"] = $v_7;
        $v_6.get_query()["visualizationId"] = $v_8;
        $v_6.get_query()["visualizationType"] = $v_9;
        $v_6.get_query()["visualizationPaneMode"] = $v_B;
        var $v_C = $v_3.getVisualizationPaneParameter("vizPaneViewId"),
            $v_D = $v_3.getVisualizationPaneParameter("vizPaneViewType");
        if (!isNullOrEmptyString($v_D) && !isNullOrEmptyString($v_C)) {
            delete $v_6.get_query().viewId;
            delete $v_6.get_query().viewType;
            $v_6.get_query()["viewid"] = $v_C;
            $v_6.get_query()["viewtype"] = $v_D
        }
        var $v_E = {};
        $v_E["uri"] = $v_6.toString();
        $v_E["name"] = buildWinName(null);
        var $v_F = Mscrm.VisualizationActions
            .createVizParamsDictionary($v_7,
                $v_8,
                $v_9,
                $v_B,
                $v_3.getVisualizationPaneParameter("vizPanePrimaryEntityName"),
                $v_3.getVisualizationPaneParameter("IsDashboardComponent"));
        Mscrm.VisualizationActions.fireEventForStickyVisualization($v_F);
        if ($v_0)
            if ($v_1) getOutlookHostedWindow().changeVisualizationLayout(!layoutMode);
            else getOutlookHostedWindow().showVisualization(true);
        Mscrm.PageManager.get_instance().raiseEvent(21, $v_E)
    }
};
Mscrm.RibbonActions.assignVisualization = function() {
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.isVisualizationPaneVisible() && $v_0.assignVisualization()
};
Mscrm.RibbonActions.shareVisualization = function() {
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.isVisualizationPaneVisible() && $v_0.shareVisualizations()
};
Mscrm.RibbonActions.$11 = function($p0) {
    var $v_0 = $find($p0);
    if (!IsNull($v_0))
        if (!isNullOrEmptyString($v_0.getParameter("paneSize"))) {
            var $v_1 = $v_0.getParameter("paneSize").toString();
            if ($v_1 === "3") $v_1 = "1";
            return $v_1
        }
    return "4"
};
Mscrm.RibbonActions.showChartLayoutQuery = function(commandProperties, gridControl, layoutMode) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id() + "_paneControl", $v_1 = $find($v_0);
        if (!IsNull($v_1))
            if ($v_1.isVisualizationPaneVisible())
                commandProperties["On"] = layoutMode === $v_1.getParameter("compositeLayout");
            else commandProperties["On"] = false
    }
};
Mscrm.RibbonActions.showVisualizationQuery = function(commandProperties, gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id() + "_paneControl", $v_1 = $find($v_0);
        if (!IsNull($v_1)) commandProperties["On"] = $v_1.isVisualizationPaneOpen();
        else commandProperties["On"] = false
    }
};
Mscrm.RibbonActions.visualizationOffQuery = function(commandProperties, gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id() + "_paneControl", $v_1 = $find($v_0);
        if (!IsNull($v_1)) commandProperties["On"] = !$v_1.isVisualizationPaneVisible();
        else commandProperties["On"] = true
    }
};
Mscrm.RibbonActions.deleteVisualization = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id() + "_paneControl", $v_1 = $find($v_0);
        !IsNull($v_1) && $v_1.deleteVisualization()
    }
};
Mscrm.RibbonActions.addRelatedToNonForm = function(relatedTypeCode, primaryTypeCode) {
    locAddRelatedToNonForm(relatedTypeCode, primaryTypeCode, Xrm.Page.data.entity.getId(), "")
};
Mscrm.RibbonActions.addRelatedAddress = function(relatedTypeCode) {
    AddRelatedAddress(relatedTypeCode,
        $get("crmFormSubmit").crmFormSubmitObjectType.value,
        $get("crmFormSubmit").crmFormSubmitId.value)
};
Mscrm.RibbonActions.addFormToMarketingList = function(primaryTypeCode) {
    Xrm.Internal.doAction(null, primaryTypeCode, "addtolist", "$get('crmFormSubmit').crmFormSubmitId.value")
};
Mscrm.RibbonActions.openFormProperties = function(id, objectTypeCode) {
    var $v_0 = Mscrm.CrmUri.create("/_forms/properties/properties.aspx");
    $v_0.get_query()["id"] = id;
    $v_0.get_query()["objTypeCode"] = objectTypeCode;
    var $v_1 = new Mscrm.CrmDialog($v_0, null, 420, 505, null);
    $v_1.show()
};
Mscrm.RibbonActions.openHelpLegalLink = function() {
    safeWindowOpen(Mscrm.CrmUri.create(window.CRM_ONLINE_LEGAL_LINK),
        "MSCRMLegal",
        "width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1",
        true)
};
Mscrm.RibbonActions.openHelpPrivacyLink = function() {
    safeWindowOpen(Mscrm.CrmUri.create(window.CRM_ONLINE_PRIVACY_LINK),
        "MSCRMPrivacy",
        "width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1",
        true)
};
Mscrm.RibbonActions.goTo = function(areaId, groupId, subareaId) {
    try {
        window.top.goTo(areaId, groupId, subareaId)
    } catch ($$e_3) {
        window.goTo(areaId, groupId, subareaId)
    }
};
Mscrm.RibbonActions.runReportFromFormRibbon = function(commandProperties, control) {
    var $v_0 = commandProperties["SourceControlId"],
        $v_1 = $v_0.substr($v_0.length - 38),
        $v_2 = Mscrm.ReportUtil.get_reportInformation()[$v_1];
    control.RunReport($v_2.Filterable, $v_1, $v_2.ReportType, $v_2.FileName)
};
Mscrm.RibbonActions.openEntityEditor = function(selEntityTypeCode, primEntityTypeCode) {
    var $v_0 = selEntityTypeCode;
    if (!$v_0) $v_0 = primEntityTypeCode;
    var $v_1 = String.format("def_category={0}&def_type={1}", 9801, $v_0);
    openObj(7100, window.DEF_SOL_ID, $v_1);
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper
        .addTelemetryLog(0, "CustomizeEntity", primEntityTypeCode)
};
Mscrm.RibbonActions.designView = function(gridControl) { Mscrm.GridCommandActions.designView(gridControl) };
Mscrm.RibbonActions.createSystemView = function(selEntityTypeCode) {
    Mscrm.GridCommandActions.createSystemView(selEntityTypeCode)
};
Mscrm.RibbonActions.manageViews = function(selEntityTypeCode) {
    Mscrm.GridCommandActions.manageViews(selEntityTypeCode)
};
Mscrm.RibbonActions.refreshGrid = function(gridControl) { !IsNull(gridControl) && gridControl.refresh() };
Mscrm.RibbonActions.createPersonalView = function(selectedControl) {
    Mscrm.RibbonActions.openAdvancedFind(selectedControl, null, true)
};
Mscrm.RibbonActions.neverEnabled = function() { return false };
Mscrm.RibbonActions.enableExportToExcel = function() { return true };
Mscrm.RibbonActions.enableStaticExportAll = function(gridControl) {
    if (IsNull(gridControl)) return false;
    return gridControl.get_pageNumber() > 1 || gridControl.get_hasMorePages()
};
Mscrm.RibbonActions.enableWorkflowOnForm = function() {
    if (!IsNull(window.IS_WORKFLOWENABLED_FORM) && window.IS_WORKFLOWENABLED_FORM) return true;
    return false
};
Mscrm.RibbonActions.hasSecuredFields = function() {
    if (!IsNull(window.HAS_SECURED_FIELDS)) return window.HAS_SECURED_FIELDS;
    return false
};
Mscrm.RibbonActions.canCustomizeVisualization = function() {
    if (!IsNull(window.CAN_CUSTOMIZE_VISUALIZATION)) return window.CAN_CUSTOMIZE_VISUALIZATION;
    return false
};
Mscrm.RibbonActions.gridFiltersToggle = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = $find(gridControl.get_id() + "_filterSet");
        if (!IsNull($v_0)) {
            $v_0.ToggleFilters();
            refreshRibbon()
        }
    }
};
Mscrm.RibbonActions.gridFiltersQuery = function(commandProperties, gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = $find(gridControl.get_id() + "_filterSet");
        if (!IsNull($v_0)) commandProperties["On"] = $v_0.IsFilterEnabled()
    }
};
Mscrm.RibbonActions.gridFiltersSaveAsNewView = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = $find(gridControl.get_id() + "_filterSet");
        !IsNull($v_0) && $v_0.Save(true)
    }
};
Mscrm.RibbonActions.gridFiltersSaveToCurrentView = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = $find(gridControl.get_id() + "_filterSet");
        !IsNull($v_0) && $v_0.Save(false)
    }
};
Mscrm.RibbonActions.saveAsDefaultGridView = function() {
    setDefaultView();
    Mscrm.PageManager.get_instance().raiseEvent(91, null)
};
Mscrm.RibbonActions.isSystemQuerySelected = function(gridControl) {
    return !Mscrm.RibbonActions.isUserQuerySelected(gridControl)
};
Mscrm.RibbonActions.isUserQuerySelected = function(gridControl) {
    if (Mscrm.PageManager.isOutlookProxyPage()) return !Mscrm.RibbonActions.isSystemViewLoaded(gridControl);
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id() + "_SavedNewQuerySelector", $v_1 = $find($v_0);
        if (!IsNull($v_1) && $v_1.showNewVSControl && !$v_1.showOriginalSelectBox) {
            var $v_3 = parseInt($v_1.selectedViewType, 10);
            return 4230 === $v_3
        }
        $v_0 = gridControl.get_id() + "_SavedQuerySelector";
        var $v_2 = $get($v_0);
        if (!IsNull($v_2)) {
            var $v_4 = $v_2.options[$v_2.selectedIndex], $v_5 = $v_4.Type;
            if (!IsNull($v_5) && parseInt($v_5, 10) === 4230) return true
        }
    }
    return false
};
Mscrm.RibbonActions.isUserQueryVisualizationSelected = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0))
        if ($v_0.isVisualizationPaneVisible()) {
            var $v_1 = $v_0.getPaneChildElement("visualizationList");
            if ($v_0.get_visualizationType() === 1112) return true
        }
    return false
};
Mscrm.RibbonActions.isDrilldownMode = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0)) return $v_0.checkIfDrilldownMode();
    return false
};
Mscrm.RibbonActions.isFormDesignValid = function(entityTypeCode) {
    switch (entityTypeCode) {
    case 4200:
        return false;
    default:
        return Mscrm.Utilities.isUserUsingBaseLanguage()
    }
};
Mscrm.RibbonActions.isShareValid = function(entityTypeCode) {
    switch (entityTypeCode) {
    case 4200:
        return false;
    default:
        return true
    }
};
Mscrm.RibbonActions.isBulkEditEnabledForEntity = function(entityTypeCode) {
    switch (entityTypeCode) {
    case 1e3:
    case 1001:
    case 135:
    case 4200:
    case 5011:
    case 9949:
    case 5:
    case 2e3:
    case 4707:
    case 9002:
    case 9004:
    case 4201:
    case 9003:
    case 9005:
    case 4700:
    case 9802:
    case 4601:
    case 9806:
    case 4567:
    case 4425:
    case 4424:
    case 9204:
    case 4406:
    case 4405:
    case 10:
    case 6:
    case 132:
    case 4003:
    case 4004:
    case 36:
    case 4417:
    case 1004:
    case 3234:
    case 3231:
    case 4007:
    case 1008:
    case 1010:
    case 1011:
    case 2011:
    case 1071:
    case 4503:
    case 4502:
    case 1013:
    case 1080:
    case 4102:
    case 4101:
    case 126:
    case 9940:
    case 9203:
    case 4415:
    case 4414:
    case 4416:
    case 4202:
    case 4023:
    case 9801:
    case 4600:
    case 9805:
    case 9807:
    case 4e3:
    case 4204:
    case 1201:
    case 1200:
    case 30:
    case 2004:
    case 9602:
    case 5005:
    case 4413:
    case 4410:
    case 4412:
    case 9107:
    case 4423:
    case 4411:
    case 9205:
    case 4206:
    case 3e3:
    case 1003:
    case 4011:
    case 1090:
    case 1091:
    case 4705:
    case 127:
    case 1082:
    case 1016:
    case 9947:
    case 1017:
    case 4207:
    case 2027:
    case 4301:
    case 9809:
    case 4419:
    case 9106:
    case 9603:
    case 2003:
    case 9868:
    case 9202:
    case 0:
    case 4110:
    case 5010:
    case 5006:
    case 5008:
    case 4208:
    case 1083:
    case 9804:
    case 4209:
    case 1019:
    case 4708:
    case 1021:
    case 4420:
    case 4210:
    case 4418:
    case 4605:
    case 4602:
    case 4603:
    case 1023:
    case 31:
    case 4710:
    case 1026:
    case 7101:
    case 2002:
    case 2020:
    case 2029:
    case 4211:
    case 1085:
    case 5007:
    case 4251:
    case 5009:
    case 9803:
    case 4500:
    case 4501:
    case 9100:
    case 9099:
    case 4010:
    case 4006:
    case 1116:
    case 1115:
    case 1120:
    case 1130:
    case 1117:
    case 1113:
    case 1036:
    case 9808:
    case 1037:
    case 9811:
    case 9604:
    case 1038:
    case 1070:
    case 1089:
    case 1039:
    case 1111:
    case 9201:
    case 9200:
    case 4606:
    case 4607:
    case 4613:
    case 4608:
    case 4615:
    case 4616:
    case 4609:
    case 4614:
    case 4610:
    case 4611:
    case 2001:
    case 4001:
    case 4214:
    case 4618:
    case 5003:
    case 9508:
    case 9502:
    case 4009:
    case 4709:
    case 7100:
    case 7103:
    case 9207:
    case 9208:
    case 129:
    case 29:
    case 1072:
    case 34:
    case 33:
    case 1030:
    case 8:
    case 14:
    case 4212:
    case 9:
    case 2010:
    case 2013:
    case 5004:
    case 4810:
    case 4812:
    case 4811:
    case 9944:
    case 9105:
    case 4426:
    case 4427:
    case 2012:
    case 9206:
    case 1055:
    case 1086:
    case 1031:
    case 4230:
    case 1112:
    case 150:
    case 9810:
    case 9333:
    case 4800:
    case 4803:
    case 4802:
    case 4703:
    case 4704:
    case 4706:
    case 4702:
    case 9607:
    case 9988:
        return false;
    default:
        return true
    }
};
Mscrm.RibbonActions.isDeleteVisualizationEnabled = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0))
        if ($v_0.isVisualizationPaneVisible())
            if (Mscrm.RibbonActions.isUserQueryVisualizationSelected() &&
                !$v_0.isVisualizationListEmpty() &&
                !$v_0.checkIfDrilldownMode() &&
                !$v_0.isPaneInDesignerMode()) return true;
    return false
};
Mscrm.RibbonActions.isSystemViewLoaded = function(gridControl) {
    if (!IsNull(gridControl) && gridControl.GetParameter("viewtype") === "1039") return true;
    return false
};
Mscrm.RibbonActions.canEnableSaveButton = function(gridControl) {
    try {
        if (!IsNull(gridControl)) {
            var $v_0 = $find(gridControl.get_id() + "_filterSet");
            if (!IsNull($v_0)) return $v_0.CanEnableFilters() && $v_0.IsFilterEnabled()
        }
    } catch ($$e_2) {
    }
    return false
};
Mscrm.RibbonActions.canEnableFiltersOnGrid = function(gridControl) {
    try {
        if (!IsNull(gridControl)) {
            var $v_0 = gridControl.GetParameter("enableFilters");
            if (isNullOrEmptyString($v_0)) {
                var $v_1 = $find(gridControl.get_id() + "_filterSet");
                if (!IsNull($v_1)) return $v_1.CanEnableFilters()
            } else {
                gridControl.SetParameter("enableFilters", "");
                return Mscrm.Utilities.parseBoolean($v_0)
            }
        }
    } catch ($$e_3) {
    }
    return false
};
Mscrm.RibbonActions.enableChartsButton = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id(), $v_1 = $v_0 + "_visualizationCompositeControl", $v_2 = $find($v_1);
        if (!IsNull($v_2) && !$v_2.enableChartButton()) return false;
        return true
    }
    return false
};
Mscrm.RibbonActions.disableButtonsWhenChartMaximized = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id() + "_paneControl", $v_1 = $find($v_0);
        if (!IsNull($v_1)) if ($v_1.getParameter("paneSize") === "2") return false
    }
    return true
};
Mscrm.RibbonActions.enableSetDefaultGridViewButton = function() {
    var $v_0 = "crmGrid_SavedNewQuerySelector", $v_1 = $find($v_0);
    if (!IsNull($v_1) && $v_1.showNewVSControl && !$v_1.showOriginalSelectBox
    ) return $v_1.selectedViewId !== $v_1.quickFindQuery && $v_1.selectedViewId !== $v_1.userSelectedDefaultView;
    var $v_2 = $get($v_0);
    if (!IsNull($v_2) && $v_2.DataValue !== window.LOCID_SEARCH_RESULTS) {
        var $v_3 = $v_2.options[$v_2.selectedIndex], $v_4 = $v_3.getAttribute("isdefault");
        if (!isNullOrEmptyString($v_4) && Boolean.parse($v_4)) return false;
        else return true
    }
    return false
};
Mscrm.RibbonActions.faxFormHasSend = function() {
    return !IsNull(window.CRM_FAXFORM_SEND_ALLOWED) && window.CRM_FAXFORM_SEND_ALLOWED
};
Mscrm.RibbonActions.enableAssignShareChartButton = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && $v_0.isVisualizationPaneVisible() && !$v_0.isVisualizationListEmpty()) {
        var $v_1 = $v_0.get_visualizationId();
        if ($v_0.get_visualizationType() === 1112) return true
    }
    return false
};
Mscrm.RibbonActions.isOutlookExplorerOrInspector = function() {
    return isOutlookHostedWindow() && getOutlookHostedWindow().ParentFrameAvailable
};
Mscrm.RibbonActions.enableRibbonOnSubGrid = function(gridControl) {
    if (!IsNull(gridControl)) {
        var $v_0 = gridControl.get_id(), $v_1 = $v_0 + "_visualizationCompositeControl", $v_2 = $find($v_1);
        if (!IsNull($v_2)) if (!$v_2.isGridEnabled()) return false
    }
    return true
};
Mscrm.RibbonActions.showVisualizationToolsRibbon = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0)) return $v_0.isVisualizationPaneVisible() && $v_0.isPaneInDesignerMode();
    else return false
};
Mscrm.RibbonActions.isVisualizationPaneInDesignerMode = function() { return Mscrm.RibbonActions.$c() };
Mscrm.RibbonActions.isComplexChart = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0)) return $v_0.get_isComplexChart();
    return false
};
Mscrm.RibbonActions.isVisualizationPaneInRuntimeMode = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && $v_0.isVisualizationPaneVisible() && !$v_0.isPaneInDesignerMode()) return true;
    return false
};
Mscrm.RibbonActions.isVisualizationPaneInRuntimeOrEditMode = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) &&
        $v_0.isVisualizationPaneVisible() &&
        ($v_0.get_paneMode() === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode ||
            $v_0.get_paneMode() === Mscrm.VisualizationPaneRenderingModes.RuntimeMode)) return true;
    return false
};
Mscrm.RibbonActions.isSaveAsChartEnabled = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && $v_0.isVisualizationPaneVisible()) {
        if (Mscrm.RibbonActions.isVisualizationPaneInRuntimeMode()) {
            if ($v_0.checkIfDrilldownMode()) return false;
            return !$v_0.isVisualizationListEmpty()
        } else if ($v_0.get_paneMode() === Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode) return false;
        return true
    }
    return false
};
Mscrm.RibbonActions.isDefaultVisualizationModule = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && !$v_0.isDefaultVisualizationModule()) return false;
    return true
};
Mscrm.RibbonActions.isSaveChartEnabled = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && Mscrm.RibbonActions.$c()) return true;
    return false
};
Mscrm.RibbonActions.isFetchxmlQuery = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && !$v_0.isCustomQuery()) return true;
    return false
};
Mscrm.RibbonActions.$c = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && $v_0.isVisualizationPaneVisible() && $v_0.isPaneInDesignerMode()) return true;
    return false
};
Mscrm.RibbonActions.isChartSelected = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && !$v_0.isVisualizationListEmpty()) return true;
    return false
};
Mscrm.RibbonActions.isIEBrowser = function() { return Mscrm.Utilities.isIE() };
Mscrm.RibbonActions.isIos = function() { return Mscrm.Utilities.isIosDevice() };
Mscrm.RibbonActions.canApplyChartType = function(chartType) {
    var $v_0 = $find("crmGrid_paneControl");
    if ($v_0) return $v_0.canApplyChartType(chartType);
    return false
};
Mscrm.RibbonActions.isTopBottomEnabled = function() {
    var $v_0 = false, $v_1 = $find("crmGrid_paneControl");
    if ($v_1) $v_0 = $v_1.isTopBottomEnabledForSelectedSeries();
    return $v_0
};
Mscrm.RibbonActions.primaryControlIsNotFormProxy = function(primaryControl) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        var $v_0 = Mscrm.CommandBarActions.primaryControlIsNotFormProxy(primaryControl);
        return $v_0
    } else {
        if (primaryControl && Mscrm.FormProxyForRibbon)
            return !isInstanceOfTypeAcrossFrames(primaryControl, Mscrm.FormProxyForRibbon);
        return true
    }
};
Mscrm.RibbonActions.formPageDeveloperTabEnableRule = function(primaryControl) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        var $v_0 = Mscrm.CommandBarActions.formPageDeveloperTabEnableRule(primaryControl);
        return $v_0
    } else if (Mscrm.Utilities.isUserUsingBaseLanguage())
        return Mscrm.RibbonActions.primaryControlIsNotFormProxy(primaryControl);
    else return false
};
Mscrm.RibbonActions
    .gridPageDeveloperTabEnableRule = function() { return Mscrm.RibbonActions.isUserUsingBaseLanguage() };
Mscrm.RibbonActions.canAttachFile = function(entityTypeCode) {
    if (4200 === entityTypeCode || 4202 === entityTypeCode) return false;
    else return true
};
Mscrm.RibbonActions.enableCancelForContractLineSubGrid = function() {
    if (!IsNull(window.CONTRACT_INVOICED_OR_ACTIVE)) return window.CONTRACT_INVOICED_OR_ACTIVE;
    else return false
};
Mscrm.RibbonActions.enableDeleteForContractLineSubGrid = function() { return enableDeleteForContractLineSubGrid() };
Mscrm.RibbonActions.canPromoteActivityToResponse = function() {
    return Mscrm.CommandBarActions.canPromoteActivityToResponse()
};
Mscrm.RibbonActions.canPromoteEmailToResponse = function() {
    return Mscrm.CommandBarActions.canPromoteActivityToResponse()
};
Mscrm.RibbonActions.isServiceRefreshEnabled = function() {
    return Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.Refresh.Service")
};
Mscrm.RibbonActions.isSharepointS2SConfigurationEnabled = function() {
    return Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S")
};
Mscrm.RibbonActions.isSharePointSiteConfigured = function() {
    var $v_0 = $get("gridBodyTable");
    if ($v_0) {
        var $v_1 = $v_0.getAttribute("siteNotFound");
        if ($v_1) return false
    }
    return true
};
Mscrm.RibbonActions.isRecordHasActiveSharePointDocLocation = function() {
    var $v_0 = $get("gridBodyTable");
    if ($v_0) {
        var $v_1 = $v_0.getAttribute("folderpath"),
            $v_2 = $v_0.getAttribute("documentLocationDisabled"),
            $v_3 = $v_0.getAttribute("folderRenamed");
        if ($v_1 || $v_2 || $v_3) return false
    }
    return true
};
Mscrm.RibbonActions.isRecordHasActiveOrRenamedSharePointDocLocation = function() {
    if (!Mscrm.RibbonActions.isRecordHasActiveSharePointDocLocation()) {
        var $v_0 = $get("gridBodyTable");
        if ($v_0) {
            var $v_1 = $v_0.getAttribute("folderRenamed");
            if (!$v_1) return false
        }
    }
    return true
};
Mscrm.RibbonActions.isNetBreezeAvailable = function() {
    return Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SocialInsights")
};
Mscrm.RibbonActions.isFormHierarchyEnabled = function() {
    var $v_0 = false;
    if (Mscrm.RibbonActions.isRefreshForm())
        if (Mscrm.Utilities.isTurboForm())
            $v_0 = Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().get_isFormHierarchyEnabled();
        else {
            var $v_1 = _entityData;
            if (!isNullOrEmptyString($v_1)) {
                var $v_2 = null, $$t_3, $$t_4;
                $$t_4 = Mscrm.JsonUtilities
                    .tryGetParsedJson(Mscrm.JsonUtilities.getJsonString($v_1), $$t_3 = { val: $v_2 }), $v_2 = $$t_3
                    .val, $$t_4;
                if (!IsNull($v_2))
                    $v_0 = Mscrm.Utilities.parseBoolean(Mscrm.Utilities
                        .getData($v_2, "_entity", "isRecordHierarchyEnabled"))
            }
        }
    else
        $v_0 = Mscrm.Utilities.parseBoolean(Mscrm.Utilities
            .getData(window.RecordData, "_entity", "isRecordHierarchyEnabled"));
    return $v_0
};
Mscrm.RibbonActions.isRecordHierarchyEnabled = function(item, records) {
    if (!IsNull(records) && records.length === 1)
        if (Mscrm.SessionInfo.isOutlookClient()) {
            if (records[0].TypeCode > 0 && !isNullOrEmptyString(records[0].Id)) {
                var $v_0 = new RemoteCommand("HierarchyDataService", "IsRecordHierarchyEnabled");
                $v_0.SetParameter("etc", records[0].TypeCode);
                $v_0.SetParameter("id", records[0].Id);
                var $v_1 = $v_0.Execute();
                if ($v_1.Success) return $v_1.ReturnValue
            }
        } else if (!IsNull(item)) {
            var $v_2 = item.getCellValue("HierarchyEnabled", records[0].Id);
            return !isNullOrEmptyString($v_2)
        }
    return false
};
Mscrm.RibbonActions.isProductFamily = function(item, records) {
    return Mscrm.ProductGridCommandActions.isProductFamily(item, records)
};
Mscrm.RibbonActions.isNotProductKit = function(item, records) {
    return Mscrm.ProductGridCommandActions.isNotProductKit(item, records)
};
Mscrm.RibbonActions.isProductRetired = function(item, records) {
    return Mscrm.ProductGridCommandActions.isProductRetired(item, records)
};
Mscrm.RibbonActions.isProductNotInDraft = function(item, records) {
    return Mscrm.ProductGridCommandActions.isProductNotInDraft(item, records)
};
Mscrm.RibbonActions.isProductActive = function(item, records) {
    return Mscrm.ProductGridCommandActions.isProductActive(item, records)
};
Mscrm.RibbonActions.isProductRevised = function(item, records) {
    return Mscrm.ProductGridCommandActions.isProductRevised(item, records)
};
Mscrm.RibbonActions.isUserUsingBaseLanguage = function() { return Mscrm.Utilities.isUserUsingBaseLanguage() };
Mscrm.RibbonActions.onTabSwitch = function(commandProperties) { raiseTabSwitchEvent(commandProperties) };
Mscrm.RibbonActions.onRootEvent = function(commandProperties) { raiseRibbonRootEvent(commandProperties) };
Mscrm.RibbonActions.isParentInactive = function() {
    var $v_0 = Xrm.Page.data.entity.getEntityName(),
        $v_1 = Xrm.Page.data.entity.getId(),
        $v_2 = new RemoteCommand("CustomerService", "IsParentRecordInactive");
    $v_2.SetParameter("entityName", $v_0);
    $v_2.SetParameter("entityId", $v_1);
    var $v_3 = $v_2.Execute();
    if ($v_3.Success) return $v_3.ReturnValue;
    return true
};
Mscrm.RibbonActions.launchProductFamilyQuickCreate = function(item, entityTypeCode, records) {
    if (!Mscrm.PageManager.isOutlookProxyPage()) {
        var $v_0 = 1e3, $v_1 = {};
        $v_1["productstructure"] = "2";
        $v_1["formid"] = window.PRODUCTFAMILY_QUICKCREATE_FORMID;
        var $v_2 = null, $v_3 = 0;
        if (!IsNull(records) && records.length === 1) {
            $v_2 = records[0].Id;
            $v_3 = records[0].TypeCode
        }
        var $v_4 = new Mscrm.GlobalQuickCreate
            .ProductFamilyGlobalQuickCreateCallbacks("NavBarGloablQuickCreate", $v_0, Mscrm.RibbonActions.$15);
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .launchGlobalQuickCreate($v_4,
                window.LOCID_PRODUCTFAMILY_TITLE,
                1024,
                null,
                $v_2,
                $v_3,
                null,
                null,
                null,
                $v_1)
    } else {
        var $v_5 = Mscrm.RibbonActions.$O(item, records);
        $v_5 += "&productstructure=2";
        openObj(entityTypeCode, null, $v_5)
    }
};
Mscrm.RibbonActions.$15 = function($p0) { Mscrm.Utilities.refreshCurrentGrid(1024) };
Mscrm.RibbonActions.openProductForm = function(item, entityTypeCode, records) {
    var $v_0 = Mscrm.RibbonActions.$O(item, records);
    openObj(entityTypeCode, null, $v_0)
};
Mscrm.RibbonActions.openBundleForm = function(item, entityTypeCode, records) {
    var $v_0 = Mscrm.RibbonActions.$O(item, records);
    $v_0 += "&productstructure=3";
    openObj(entityTypeCode, null, $v_0)
};
Mscrm.RibbonActions.showPreview = function() {
    var $v_0 = Xrm.Page.getAttribute("name"),
        $v_1 = Xrm.Page.getAttribute("statecode"),
        $v_2 = Xrm.Page.data.entity.getEntityName(),
        $v_3 = Xrm.Internal.getEntityCode($v_2),
        $v_4 = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_DynamicProperty.aspx");
    $v_4.get_query()["ProductId"] = Xrm.Page.data.entity.getId();
    $v_4.get_query()["ProductName"] = $v_0.getValue();
    $v_4.get_query()["otc"] = $v_3;
    var $v_5 = Xrm.Page.context.getQueryStringParameters(), $v_6 = $v_5["revise"];
    if ($v_1.getValue() === 2) $v_4.get_query()["IsDraftProduct"] = true;
    else if ($v_1.getValue() === 3 && IsNull($v_6)) $v_4.get_query()["IsDraftProduct"] = true;
    else $v_4.get_query()["IsDraftProduct"] = false;
    $v_4.get_query()["DpPreviewMode"] = true;
    var $v_7 = new Mscrm.CrmDialog($v_4, null, 800, 400, null);
    $v_7.show()
};
Mscrm.RibbonActions.$O = function($p0, $p1) {
    var $v_0 = getParentEntityIdParams();
    if (!IsNull($p0) && !IsNull($p1) && $p1.length === 1) {
        var $v_1 = $p0.getCellValue("productstructure", $p1[0].Id);
        if (!IsNull($v_1) && parseInt($v_1) !== 2) $v_0 = null;
        else if (IsNull($v_0) || !$v_0.length)
            $v_0 = "&_CreateFromId=" +
                CrmEncodeDecode.CrmUrlEncode($p1[0].Id) +
                "&_CreateFromType=" +
                CrmEncodeDecode.CrmUrlEncode($p1[0].TypeCode);
        else
            $v_0 += "&_CreateFromId=" +
                CrmEncodeDecode.CrmUrlEncode($p1[0].Id) +
                "&_CreateFromType=" +
                CrmEncodeDecode.CrmUrlEncode($p1[0].TypeCode)
    }
    return $v_0
};
Mscrm.RibbonActions.canDeleteDynamicProperty = function() {
    var $v_0 = false, $v_1 = Xrm.Page.context.getQueryStringParameters();
    if (IsNull($v_1["_canDelete"])) $v_0 = true;
    else $v_0 = Boolean.parse($v_1["_canDelete"].toString()) ? true : false;
    return $v_0
};
Mscrm.RibbonActions.canOverrideDynamicProperty = function() {
    var $v_0 = false, $v_1 = Xrm.Page.context.getQueryStringParameters(), $v_2 = $v_1["_canOverride"];
    if (!IsNull($v_2)) $v_0 = Boolean.parse($v_2) ? true : false;
    return $v_0
};
Mscrm.RibbonActions.canOverwriteDynamicProperty = function() {
    var $v_0 = false, $v_1 = null, $v_2 = Xrm.Page.context.getQueryStringParameters();
    if (!IsNull($v_1 = $v_2["_canOverwrite"])) $v_0 = Boolean.parse($v_1);
    return $v_0
};
Mscrm.RibbonActions.isPublishVisible = function() { return Mscrm.ProductCommandActions.isPublishVisible() };
Mscrm.RibbonActions.isRetireVisible = function() { return Mscrm.ProductCommandActions.isRetireVisible() };
Mscrm.RibbonActions.isNotViewPublishedProductForm = function() {
    var $v_0 = Xrm.Page.context.getQueryStringParameters();
    if (!IsNull($v_0["revise"])) return Boolean.parse($v_0["revise"].toString());
    return true
};
Mscrm.RibbonActions.isProductDraftOrActive = function() {
    var $v_0 = Xrm.Page.getAttribute("statecode"), $v_1 = $v_0.getValue();
    if ($v_1 !== 1) return true;
    return false
};
Mscrm.RibbonActions.showAddProductAssociation = function() {
    var $v_0 = Xrm.Page.getAttribute("statecode"),
        $v_1 = Xrm.Page.getAttribute("productstructure"),
        $v_2 = Xrm.Page.getAttribute("iskit");
    if (!IsNull($v_1) && !IsNull($v_0) && !IsNull($v_2)) {
        if ($v_2.getValue() && $v_1.getValue() === 1) return $v_0.getValue() !== 1;
        if ($v_1.getValue() === 3) return $v_0.getValue() === 2
    }
    return false
};
Mscrm.RibbonActions.isStateRetired = function(item, records) {
    if (!IsNull(item) && !IsNull(records) && records.length === 1) {
        var $v_0 = item.getCellValue("statecode", records[0].Id);
        if (!IsNull($v_0) && $v_0 === "Inactive") return true
    }
    return false
};
Mscrm.RibbonActions.isProductOrKit = function(item, records) {
    return Mscrm.ProductGridCommandActions.isProductOrKit(item, records)
};
Mscrm.RibbonActions.noParentProductExists = function(item, records) {
    return Mscrm.ProductGridCommandActions.noParentProductExists(item, records)
};
Mscrm.RibbonActions.isNotHierarchyView = function() { return !Mscrm.Utilities.isHierarchyViewEnabled() };
Mscrm.RibbonActions.addExistingProduct = function(parentGridControl) {
    !IsNull(parentGridControl.get_inlineEditGridControls()) && parentGridControl.addButtonClickHandler()
};
Mscrm.RibbonActions.addWriteInProduct = function(parentGridControl) {
    if (!IsNull(parentGridControl.get_inlineEditGridControls()))
        if (parentGridControl.get_inlineEditGridControls()
            .get_enableInlineEdit()) parentGridControl.get_inlineEditGridControls().onCreateNewRecordAndFocus();
        else {
            var $v_0 = parentGridControl.get_inlineEditGridControls().get_entityHandler();
            $v_0.openProductLineItemForm(parentGridControl.get_inlineEditGridControls().get_entityTypeCode(), true)
        }
};
Mscrm.RibbonActions.isEntityQuoteOrderInvoice = function(selectedEntityTypeName) {
    if (selectedEntityTypeName !== "opportunityproduct") return true;
    else return false
};
Mscrm.RibbonActions.areSelectedLocationsSame = function(gridControl, records) {
    if (!IsNull(gridControl) && !IsNull(records) && records.length > 0
    )
        for (var $v_0 = gridControl
                     .getCellValue("locationid", records[0].Id),
            $v_1 = 1;
            $v_1 < records.length;
            $v_1++) if ($v_0 !== gridControl.getCellValue("locationid", records[$v_1].Id)) return false;
    return true
};
Mscrm.RibbonActions.areTileControlsPresent = function() {
    return Mscrm.FormEditorVariables.dashboardCategory == InteractionCentricDashboardCategory.CSR2
};
Mscrm.RibbonActions.isDocumentNotFromSharedLocation = function(gridControl, records) {
    if (!IsNull(gridControl) && !IsNull(records) && records.length > 0)
        for (var $v_0 = 0; $v_0 < records.length; $v_0++) {
            var $v_1 = gridControl.getCellValue("locationid", records[$v_0].Id),
                $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1);
            if ($v_2.equals(Mscrm.RibbonActions.$P)) return false
        }
    return true
};
Mscrm.RibbonActions.changeVisualizationTo = function(control,
    controlId,
    configurationId,
    constructor,
    styles,
    scripts,
    dataSetDefinitionsString) {
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.DataSetControl")) {
        var $v_0, $v_1, $v_2, $$t_A, $$t_B;
        $$t_B = Mscrm.JsonUtilities.tryGetParsedJson(dataSetDefinitionsString, $$t_A = { val: $v_0 }), $v_0 = $$t_A
            .val, $$t_B;
        var $$t_C, $$t_D;
        $$t_D = Mscrm.JsonUtilities.tryGetParsedJsonAsArray(styles, $$t_C = { val: $v_1 }), $v_1 = $$t_C.val, $$t_D;
        var $$t_E, $$t_F;
        $$t_F = Mscrm.JsonUtilities.tryGetParsedJsonAsArray(scripts, $$t_E = { val: $v_2 }), $v_2 = $$t_E.val, $$t_F;
        control.changeVisualizationTo(controlId, $v_0, constructor, $v_1, $v_2, configurationId)
    }
};
Mscrm.RibbonActions.changeVisualizationOptionState = function(commandProperties, control, configurationId) {
    commandProperties["On"] = control.isConfigurationSame(configurationId)
};
Mscrm.RibbonActions.isMicrosoftFlowEnabled = function() {
    return Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.FlowIntegration") &&
        Xrm.Page.context.getEnableMicrosoftFlowIntegration()
};
Mscrm.RibbonActions.openSuggestProductFlyOut = function() { Mscrm.GridControlLite.showSuggestionFlyOut() };
Mscrm.XrmRibbonActionUtilities = function() {};
Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp = function() {
    return Xrm.Page.context.client.getClient() === "Mobile"
};
Mscrm.ExportGridToExcel = function() {};
Mscrm.ExportGridToExcel.exportToExcel = function(gridControl, entityTypeCode, exportType) {
    Mscrm.InternalUtilities.Utilities.isRefreshForm() &&
        Mscrm.GridCommandActions.exportToExcel(gridControl, entityTypeCode);
    Mscrm.ExportGridToExcel.$s();
    var $v_0 = Mscrm.GridRibbonActions.validDataProviderForXlsx(gridControl),
        $v_1 = Mscrm.GridRibbonActions.validQueryApiForXlsx(gridControl);
    if (!$v_0 || !$v_1) {
        Mscrm.ExportGridToExcel.exportToXls(gridControl, exportType);
        return
    }
    switch (exportType) {
    case 4:
    case 5:
        Mscrm.ExportGridToExcel.performStaticExcelExport(gridControl, exportType);
        break;
    case 2:
    case 3:
        Mscrm.ExportGridToExcel.performDynamicExcelExport(gridControl, exportType);
        break
    }
};
Mscrm.ExportGridToExcel.exportToXls = function(gridControl, exportType) {
    var $v_0 = gridControl.GetParameter("LoadOnDemand") === "1";
    gridControl.SetParameter("LoadOnDemand", "0");
    var $v_1 = !!exportType && exportType !== 4,
        $v_2 = Mscrm.ExportGridToExcel.$F("xls", gridControl, $v_1),
        $v_3 = Mscrm.CrmUri.create("/_grid/print/print_data.aspx").toString(),
        $v_4 = $v_1 ? gridControl.get_totalRecordCount() : gridControl.get_pageRecordCount();
    Mscrm.ExportGridToExcel.launchProgressIndicator(false, 580, 180, $v_4, $v_3, $v_2, gridControl);
    gridControl.SetParameter("LoadOnDemand", $v_0 ? "1" : "0")
};
Mscrm.ExportGridToExcel.$R = function($p0) {
    var $v_0 = new Sys.StringBuilder, $v_1 = XUI.Xml.LoadXml($p0), $v_2 = false;
    try {
        $v_0.append('<grid name="excelGrid" select="0" icon="0" preview="0">');
        var $v_3 = XUI.Xml.SelectSingleNode($v_1, "grid/parameters/layoutXml", null),
            $v_4 = XUI.Xml.LoadXml(XUI.Xml.GetText($v_3)),
            $v_5 = XUI.Xml.SelectSingleNode($v_4, "grid/row", null);
        $v_0.append(XUI.Xml.XMLSerializer.serializeToString($v_5));
        $v_0.append("</grid>")
    } catch ($$e_7) {
        $v_2 = true;
        $v_0.clear()
    }
    if ($v_2) {
        $v_0.append('<grid name="excelGrid" select="0" icon="0" preview="0"><row name="excelRow">');
        for (var $v_6 = XUI.Xml.SelectNodes($v_1, "grid/columns/column", null), $v_7 = 0; $v_7 < $v_6.length; $v_7++) {
            var $v_8 = $v_6[$v_7];
            if (!IsNull($v_8)) {
                var $v_9 = $v_8.attributes.getNamedItem("width"), $v_A = $v_8.attributes.getNamedItem("fieldname");
                if (!IsNull($v_9) &&
                    !isNullOrEmptyString($v_9.nodeValue) &&
                    !IsNull($v_A) &&
                    !isNullOrEmptyString($v_A.nodeValue)) {
                    $v_0.append('<cell width="');
                    $v_0.append(CrmEncodeDecode.CrmXmlAttributeEncode($v_9.nodeValue));
                    $v_0.append('" name="');
                    $v_0.append(CrmEncodeDecode.CrmXmlAttributeEncode(XUI.Xml.GetText($v_8)));
                    $v_0.append('" />')
                }
            }
        }
        $v_0.append("</row></grid>")
    }
    return $v_0.toString()
};
Mscrm.ExportGridToExcel.performStaticExcelExport = function(gridControl, exportType) {
    var $v_0 = exportType !== 4,
        $v_1 = Mscrm.ExportGridToExcel.$F("xlsx", gridControl, $v_0),
        $v_2 = Mscrm.CrmUri.create("/_grid/print/print_data.aspx").toString(),
        $v_3 = exportType,
        $v_4 = $v_3 === 1 || $v_3 === 5 ? gridControl.get_totalRecordCount() : gridControl.get_pageRecordCount();
    Mscrm.ExportGridToExcel.launchProgressIndicator(false, 580, 180, $v_4, $v_2, $v_1, gridControl)
};
Mscrm.ExportGridToExcel.exportDocumentTemplate = function(gridControl, templateId, exportType) {
    var $v_0 = exportType !== 4, $v_1 = Mscrm.DocumentTemplateUtil.get_documentTemplateInformation()[templateId];
    if (IsNull($v_1)) return;
    var $v_2 = {};
    if ($v_1
        .EntityTypeCode ===
        9940 ||
        $v_1.EntityTypeCode === 9941) $v_2 = Mscrm.ExportGridToExcel.$F("FillDocumentTemplateXlsx", gridControl, $v_0);
    $v_2["TemplateId"] = $v_1.ID;
    $v_2["TemplateType"] = $v_1.EntityTypeCode;
    $v_2["TemplateName"] = $v_1.TemplateName;
    var $v_3 = Mscrm.CrmUri.create("/_grid/print/print_data.aspx").toString(),
        $v_4 = exportType,
        $v_5 = $v_4 === 1 || $v_4 === 5 ? gridControl.get_totalRecordCount() : gridControl.get_pageRecordCount();
    Mscrm.ExportGridToExcel.launchProgressIndicator(false, 580, 180, $v_5, $v_3, $v_2, gridControl)
};
Mscrm.ExportGridToExcel.exportWordTemplate = function(entityTypeCode, templateId, selectedRecords) {
    var $v_0 = Mscrm.DocumentTemplateUtil.get_documentTemplateInformation()[templateId];
    if (IsNull($v_0)) return;
    var $v_1 = {};
    $v_1["exportType"] = "MergeWordTemplate";
    $v_1["selectedRecords"] = selectedRecords;
    $v_1["associatedentitytypecode"] = entityTypeCode;
    $v_1["TemplateId"] = $v_0.ID;
    $v_1["TemplateType"] = $v_0.EntityTypeCode;
    var $v_2 = Mscrm.CrmUri.create("/_grid/print/print_data.aspx").toString();
    Mscrm.ExportGridToExcel.launchProgressIndicatorForWord(580, 180, $v_2, $v_1)
};
Mscrm.ExportGridToExcel.$19 = function($p0) {
    var $v_0 = XUI.Xml.LoadXml($p0
            .get_gridXml()),
        $v_1 = XUI.Xml.SelectSingleNode($v_0, "grid/allrecordscounted", null);
    return IsNull($v_1) ||
        isNullOrEmptyString(XUI.Xml.GetText($v_1)) ||
        Mscrm.Utilities.parseBoolean(XUI.Xml.GetText($v_1))
};
Mscrm.ExportGridToExcel.launchProgressIndicator = function(isExportExcelOnline,
    width,
    height,
    numberOfExportedRecords,
    action,
    formParameters,
    gridControl) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/print/export_progress.aspx");
    $v_0.get_query()["IsExportExcelOnline"] = isExportExcelOnline;
    $v_0.get_query()["documentType"] = 1;
    var $v_1 = null;
    if (!isExportExcelOnline) {
        $v_0.get_query()["PageRecordCount"] = numberOfExportedRecords;
        $v_0.get_query()["IsExactCountKnown"] = Mscrm.ExportGridToExcel.$19(gridControl);
        $v_1 = {};
        $v_1["formAction"] = action;
        $v_1["formParameters"] = formParameters
    }
    Mscrm.ExportGridToExcel.$6 = new Mscrm.CrmDialog($v_0, $v_1, width, height, null);
    Mscrm.ExportGridToExcel.$6.show()
};
Mscrm.ExportGridToExcel.launchProgressIndicatorForWord = function(width, height, action, formParameters) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/print/export_progress.aspx");
    $v_0.get_query()["documentType"] = 2;
    var $v_1 = null;
    $v_1 = {};
    $v_1["formAction"] = action;
    $v_1["formParameters"] = formParameters;
    Mscrm.ExportGridToExcel.$6 = new Mscrm.CrmDialog($v_0, $v_1, width, height, null);
    Mscrm.ExportGridToExcel.$6.show()
};
Mscrm.ExportGridToExcel.closeProgressIndicator = function() { Mscrm.ExportGridToExcel.$6.close() };
Mscrm.ExportGridToExcel.performDynamicExcelExport = function(gridControl, exportType) {
    var $v_0, $v_1 = exportType === 2 ? "dynamicXlsx" : "pivotXlsx";
    if (exportType === 2) {
        $v_0 = Mscrm.CrmUri.create("/AdvancedFind/dialogs/dlg_editview.aspx");
        $v_0.get_query()["EntityName"] = gridControl.GetParameter("otn");
        $v_0.get_query()["FromExportExcel"] = 1
    } else {
        $v_0 = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx");
        $v_0.get_query()["mode"] = "exportselectcol"
    }
    $v_0 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_0);
    var $v_2 = new Mscrm.ExportDialogArguments,
        $v_3 = gridControl.GetParameter("effectiveFetchXml"),
        $v_4 = gridControl.GetParameter("fetchXml");
    if (!isNullOrEmptyString($v_3)) $v_2.fetchXml = $v_3;
    if (!isNullOrEmptyString($v_4)) $v_2.fetchXml = $v_4;
    $v_2.gridControl = gridControl;
    if (exportType === 2) {
        $v_2.layoutXml = Mscrm.ExportGridToExcel.$R(gridControl.get_gridXml());
        Mscrm.ExportGridToExcel.$i($v_0, $v_2, gridControl, $v_1)
    } else {
        $v_2.primaryEntityName = gridControl.GetParameter("otn");
        $v_2.gridXml = XUI.Xml.LoadXml(Mscrm.ExportGridToExcel.$R(gridControl.get_gridXml()));
        $v_2.showRelatedEntities = true;
        $v_2.bQuickFindMode = false;
        $v_2.bIsSystemView = false;
        var $v_5 = {
                otc: gridControl.GetParameter("otc"),
                fetchXml: XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.LoadXml($v_2.fetchXml))
            },
            $v_6 = Mscrm.ExportGridToExcel.$S("View", "GetFieldAndPropertiesXml", $v_5),
            $v_7 = Mscrm.ExportGridToExcel.$S("View", "GetEntitiesXml", $v_5);
        $P_CRM.when($v_6, $v_7).done((new Mscrm.ParamsCallbackWrapper(function($p1_0) {
            var $v_8 = XUI.Xml.LoadXml($p1_0[0]);
            $v_2.fieldPropertiesXml = XUI.Xml.LoadXml(XUI.Xml
                .GetText(XUI.Xml.SelectSingleNode($v_8, "/fieldpropertiesxml/propertiesxml", null)));
            $v_2.fieldsXml = XUI.Xml.LoadXml(XUI.Xml
                .GetText(XUI.Xml.SelectSingleNode($v_8, "/fieldpropertiesxml/fieldxml", null)));
            $v_2.entitiesXml = XUI.Xml.LoadXml($p1_0[1]);
            Mscrm.ExportGridToExcel.$i($v_0, $v_2, gridControl, $v_1)
        })).$$d_callback)
    }
};
Mscrm.ExportGridToExcel.$i = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Mscrm.CrmDialog($p0, $p1, 800, 450, null), $v_1 = [$p2, $p3, $p2.get_gridXml()];
    $v_0.setCallbackInfo("createExportLiveForm", Mscrm.ExportGridToExcel, $v_1);
    $v_0.show()
};
Mscrm.ExportGridToExcel.$S = function($p0, $p1, $p2) {
    var $v_0 = new RemoteCommand($p0, $p1), $$dict_5 = $p2;
    for (var $$key_6 in $$dict_5) {
        var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_0.SetParameter($v_2.key, $v_2.value)
    }
    var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(String, String);
    $v_0.Execute(function($p1_0, $p1_1) {
        if ($p1_0.Success) $v_1.resolve($p1_0.ReturnValue);
        else $v_1.reject($p1_0.ReturnValue)
    });
    return $v_1.promise()
};
Mscrm.ExportGridToExcel.createExportLiveForm = function(result, gridControl, exportType, gridXml) {
    if (typeof result === "undefined") return;
    if (result.Action !== 10) return;
    var $v_0 = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.LoadXml(result.FetchXml)), $v_1 = null;
    if (!isNullOrEmptyString(result.LayoutXml))
        $v_1 = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.LoadXml(result.LayoutXml));
    else if (!isNullOrEmptyString(result.GridXml))
        $v_1 = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.LoadXml(result.GridXml));
    var $v_2 = {};
    $v_2["gridXml"] = gridXml;
    $v_2["exportType"] = exportType;
    $v_2["fetchXml"] = $v_0;
    $v_2["layoutXml"] = $v_1;
    $v_2["viewid"] = gridControl.GetParameter("viewid");
    $v_2["viewtype"] = gridControl.GetParameter("viewtype");
    var $v_3 = Mscrm.CrmUri.create("/_grid/print/export_live.aspx").toString();
    Mscrm.ExportGridToExcel.launchProgressIndicator(false,
        580,
        180,
        gridControl.get_pageRecordCount(),
        $v_3,
        $v_2,
        gridControl)
};
Mscrm.ExportGridToExcel.$F = function($p0, $p1, $p2) {
    var $v_0 = $p1.GetParameter("effectiveFetchXml"), $v_1 = {};
    $v_1["exportType"] = $p0;
    $v_1["gridXml"] = $p1.get_gridXml();
    $v_1["fetchXml"] = IsNull($v_0) ? "" : $v_0;
    if ($p2) $v_1["printAllPages"] = "1";
    return $v_1
};
Mscrm.ExportGridToExcel.$s = function() {
    var $v_0 = $get("exportFrame");
    if (!IsNull($v_0)) return;
    $v_0 = document.createElement("iframe");
    $v_0.id = "exportFrame";
    $v_0.setAttribute("name", "exportFrame");
    $v_0.setAttribute("style", "display: none");
    document.body.appendChild($v_0);
    $v_0.contentWindow.name = "exportFrame"
};
Mscrm.ParamsCallbackWrapper = function($p0) {
    this.$$d_callback = Function.createDelegate(this, this.callback);
    this.$E_0 = $p0
};
Mscrm.ParamsCallbackWrapper.prototype = {
    $E_0: null,
    callback: function() {
        for (var $p0 = [], $$pai_1 = 0; $$pai_1 < arguments.length; ++$$pai_1) $p0[$$pai_1] = arguments[$$pai_1];
        this.$E_0($p0)
    }
};
Mscrm.DashboardRibbonActions = function() {};
Mscrm.DashboardRibbonActions.getDashboardSelector = function() {
    try {
        if (!IsNull(Mscrm.DashboardRibbonActions
                .$2) &&
            !Mscrm.DashboardRibbonActions.$2.get_isDisposed()) return Mscrm.DashboardRibbonActions.$2
    } catch ($$e_0) {
    }
    Mscrm.DashboardRibbonActions.$2 = $find("dashboardSelector");
    if (IsNull(Mscrm.DashboardRibbonActions.$2))
        Mscrm.DashboardRibbonActions.$2 = window.parent.Sys.Application.findComponent("dashboardSelector");
    if (IsNull(Mscrm.DashboardRibbonActions.$2)) {
        var $v_0 = document.getElementsByTagName("iframe");
        if ($v_0 && $v_0.length > 0) {
            var $v_1 = $v_0[0].contentWindow;
            Mscrm.DashboardRibbonActions.$2 = $v_1.Sys.Application.findComponent("dashboardSelector")
        }
    }
    return Mscrm.DashboardRibbonActions.$2
};
Mscrm.DashboardRibbonActions.$3 = function($p0) {
    if (!IsNull($p0)) {
        if (!$p0.get_dashboardItems().length) return false;
        return true
    }
    return false
};
Mscrm.DashboardRibbonActions.isAnyDashboardSelected = function() {
    return Mscrm.DashboardRibbonActions.$3(Mscrm.DashboardRibbonActions.getDashboardSelector())
};
Mscrm.DashboardRibbonActions.isPowerBIDashboardSelected = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    return Mscrm.DashboardRibbonActions.$3($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0.get_currentPowerBIDashboardUrl())
};
Mscrm.DashboardRibbonActions.isCRMDashboardSelected = function() {
    return !Mscrm.DashboardRibbonActions.isPowerBIDashboardSelected()
};
Mscrm.DashboardRibbonActions.isUserFormSelected = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (Mscrm.DashboardRibbonActions.$3($v_0)) {
        var $v_1 = $v_0.get_selector().attributes.getNamedItem("CurrentItemType");
        if (!IsNull($v_1) && parseInt($v_1.value, 10) === 1031) return true
    }
    return false
};
Mscrm.DashboardRibbonActions.isUserDefaultDashboard = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (Mscrm.DashboardRibbonActions.$3($v_0)) {
        var $v_1 = $v_0.get_selector().attributes.getNamedItem("CurrentItem").value,
            $v_2 = $v_0.get_selector().attributes.getNamedItem("userDefaultItem");
        if (!IsNull($v_2)) if ($v_2.value.toLowerCase() === $v_1) return true
    }
    return false
};
Mscrm.DashboardRibbonActions.isUserDefaultModule = function() {
    var $v_0 = Mscrm.PageManager.get_instance().raiseEvent(3, null),
        $v_1 = $v_0[0],
        $v_2 = window.parent.Sys.Application.findComponent("navBar");
    if ($v_2) {
        var $v_3 = Mscrm.CrmUri.create($v_2.get_homeNode().Action["PageUrl"]);
        if (!IsNull($v_3.get_query()["sitemappath"]) &&
            $v_3.get_query()["sitemappath"].toString().split("|")[0] === $v_1["areaId"].toString()) return true
    }
    return false
};
Mscrm.DashboardRibbonActions.deleteDashboard = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (Mscrm.DashboardRibbonActions.$3($v_0)) {
        var $v_1 = $v_0.get_currentItem().toLowerCase(),
            $v_2 = $v_0.get_currentType(),
            $v_3 = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete.aspx");
        $v_3.get_query()["iObjType"] = $v_2.toString();
        $v_3.get_query()["iTotal"] = "1";
        $v_3.get_query()["sIds"] = $v_1;
        var $v_4 = new Mscrm.CrmDialog($v_3, [$v_1], 405, 205, null);
        $v_4.setCallbackInfo("refreshDashboardCallback", Mscrm.DashboardRibbonActions, null);
        $v_4.show()
    }
};
Mscrm.DashboardRibbonActions.refreshDashboardCallback = function(returnInfo) {
    !IsNull(returnInfo) && returnInfo && Mscrm.DashboardRibbonActions.refreshDashboardSelector(null)
};
Mscrm.DashboardRibbonActions.assignDashboard = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (Mscrm.DashboardRibbonActions.$3($v_0)) {
        var $v_1 = $v_0.get_currentItem().toLowerCase(), $v_2 = new Mscrm.EntityReference;
        $v_2.TypeCode = $v_0.get_currentType();
        $v_2.Id = $v_1;
        var $v_3 = [$v_2],
            $v_4 = Mscrm.GridRibbonActions.$0("assign", $v_2.TypeCode, 1),
            $v_5 = [],
            $v_6 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.DashboardRibbonActions.refreshDashboardCallback, $v_5),
            $v_7 = Mscrm.GridRibbonActions.$X($v_4, $v_3, 456, 310, null, $v_6);
        Mscrm.Utilities.isModalDialogSupported() && Mscrm.DashboardRibbonActions.refreshDashboardCallback($v_7)
    }
};
Mscrm.DashboardRibbonActions.shareDashboard = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (Mscrm.DashboardRibbonActions.$3($v_0)) {
        var $v_1 = $v_0.get_currentItem()
                .toLowerCase(),
            $v_2 = $v_0.get_currentType(),
            $v_3 = new Mscrm.EntityReference;
        $v_3.TypeCode = $v_2;
        $v_3.Id = $v_1;
        var $v_4 = [$v_3],
            $v_5 = Mscrm.GridRibbonActions.$0("share", $v_3.TypeCode, 1),
            $v_6 = Mscrm.GridRibbonActions.$X($v_5, $v_4, 800, 480, null)
    }
};
Mscrm.DashboardRibbonActions.saveDashboardAs = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (Mscrm.DashboardRibbonActions.$3($v_0)) {
        var $v_1 = $v_0.get_currentItem().toLowerCase(),
            $v_2 = $v_0.get_currentType(),
            $v_3 = $v_0.getDashboardNode($v_1),
            $v_4 = "";
        if (!IsNull($v_3.attributes.getNamedItem("desc"))) $v_4 = XUI.Xml.GetText($v_3.attributes.getNamedItem("desc"));
        var $v_5 = "";
        if (!IsNull($v_3.attributes
            .getNamedItem("display"))) $v_5 = XUI.Xml.GetText($v_3.attributes.getNamedItem("display"));
        var $v_6 = false;
        if (!IsNull($v_3.attributes
            .getNamedItem("istabletenabled")))
            $v_6 = Boolean.parse(XUI.Xml.GetText($v_3.attributes.getNamedItem("istabletenabled")));
        var $v_7 = {};
        $v_7.sName = $v_5;
        $v_7.sDescription = $v_4;
        $v_7.sIsTabletEnabled = $v_6;
        var $v_8 = [$v_1, $v_2],
            $v_9 = Mscrm.Utilities
                .createCallbackFunctionObject("saveAsDashboardCallback", Mscrm.DashboardRibbonActions, $v_8, false),
            $v_A = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/AdvancedFind/QueryProperties.aspx?feature=dashboard"),
                $v_7,
                500,
                310,
                null);
        $v_A.setCallbackReference($v_9);
        $v_A.show()
    }
};
Mscrm.DashboardRibbonActions.saveAsDashboardCallback = function(dashboardInfo, dashboardId, dashboardTypeCode) {
    if (!IsNull(dashboardInfo)) {
        var $v_0 = new RemoteCommand("DashboardWebService", "SaveCopyOfDashboardWithTablet", null);
        $v_0.SetParameter("sourceDashboardId", dashboardId);
        $v_0.SetParameter("sourceDashboardObjectTypeCode", dashboardTypeCode);
        $v_0.SetParameter("name", dashboardInfo.sName);
        $v_0.SetParameter("description", dashboardInfo.sDescription);
        $v_0.SetParameter("isTabletEnabled", dashboardInfo.sIsTabletEnabled);
        var $v_1 = $v_0.Execute();
        if ($v_1.Success) {
            var $v_2 = $v_1.ReturnValue;
            Mscrm.DashboardRibbonActions.refreshDashboardSelector($v_2);
            var $v_3 = Mscrm.DashboardRibbonActions.getDashboardSelector();
            $v_3.get_selector().setAttribute("defaultItem", dashboardId);
            refreshRibbon();
            $v_3.updateStickyDashboardUrl($v_2, dashboardTypeCode)
        }
    }
};
Mscrm.DashboardRibbonActions.refreshDashboardPage = function() {
    var $v_0 = $find("crmPageManager");
    if (!IsNull($v_0)) {
        var $v_1 = window.top.$P_CRM.find("#contentIFrame0");
        if ($v_1.length > 0) {
            var $v_3 = $P_CRM($v_1[0].contentDocument).find("#dashboardFrame");
            if ($v_3.length > 0) {
                var $v_4 = $P_CRM($v_3[0].contentDocument).find("#iFrmActionCards");
                if ($v_4.length > 0) {
                    $($v_4).contents().find("#ActionCards").empty();
                    $($v_4).contents().find("#ActionCards").removeClass("carouselcardview");
                    $($v_4).contents().find("#cardTypeHeader").empty();
                    $v_4.attr("isCarousalRefreshByRefreshAll", "true")
                }
            }
        }
        var $v_2 = {};
        $v_2["isRefreshAllClicked"] = true;
        $v_0.raiseEvent(53, $v_2)
    }
};
Mscrm.DashboardRibbonActions.openInPowerBI = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector(),
        $v_1 = $v_0.get_selector().attributes.getNamedItem("currentpowerbidashboardurl").value;
    window.open($v_1)
};
Mscrm.DashboardRibbonActions.setUserDefaultDashboard = function() {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (Mscrm.DashboardRibbonActions.$3($v_0) && !IsNull($v_0.get_selector().attributes.getNamedItem("CurrentItem"))) {
        var $v_1 = $v_0.get_selector().attributes.getNamedItem("CurrentItem").value, $v_2 = new Sys.StringBuilder;
        $v_2.append("<usersettings>");
        $v_2.append("<defaultdashboardid>");
        $v_2.append($v_1);
        $v_2.append("</defaultdashboardid>");
        $v_2.append("</usersettings>");
        var $v_3 = new XMLHttpRequest, $v_4 = Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_update.aspx");
        $v_3.open("POST", $v_4.toString(), false);
        Mscrm.Utilities.setResponseTypeToMSXml($v_3);
        Mscrm.WrpcTokenFuncs.setTokenInHeader($v_3, $v_4);
        $v_3.send($v_2.toString());
        var $v_5 = $v_3.responseXML, $v_6 = XUI.Xml.SelectSingleNode($v_5, "/error", null);
        if (IsNull($v_6)) {
            $v_0.get_selector().setAttribute("userDefaultItem", $v_1);
            refreshRibbon()
        }
        Mscrm.XmlUtil.handleXMLErr($v_5, true)
    }
};
Mscrm.DashboardRibbonActions.editDashboard = function() {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var $v_0 = Mscrm.CrmUri.create(Mscrm.DashboardRibbonActions.$G),
        $v_1 = Mscrm.DashboardRibbonActions.getDashboardSelector(),
        $v_2 = $v_1.get_selector().attributes.getNamedItem("CurrentItem").value,
        $v_3 = $v_1.get_selector().attributes.getNamedItem("CurrentItemType").value,
        $v_4 = "&formId=" + $v_2 + "&dashboardType=" + $v_3;
    $v_0.get_query()["extraqs"] = $v_4;
    if (isOutlookHostedWindow())
        openStdWin($v_0, buildWinName(null), Mscrm.DashboardRibbonActions.$I, Mscrm.DashboardRibbonActions.$H, null);
    else if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_1.get_selector().attributes.getNamedItem("currentpowerbidashboardurl").value)) {
        var $v_5 = $v_1.get_selector().attributes.getNamedItem("currentpowerbidashboardurl").value
                .split("/dashboards/")[1],
            $v_6 = {};
        $v_6["DashboardId"] = $v_5;
        if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString($v_1.get_selector().attributes.getNamedItem("istabletenabled")
                .value))
            $v_6["isTabletEnabled"] = $v_1.get_selector().attributes.getNamedItem("istabletenabled").value === "True";
        $v_6["CrmDashboardId"] = $v_2;
        var $v_7 = new Mscrm.CrmDialog(Mscrm.CrmUri
            .create("/tools/dashboardeditor/dialogs/Powerbidashboard.aspx?mode=edit"),
            $v_6,
            379,
            450,
            null);
        $v_7.show()
    } else {
        $v_0 = Mscrm.CrmUri.create("/tools/dashboardEditor/dashboardEditor.aspx?");
        $v_0.get_query()["dashboardType"] = $v_3;
        $v_0.get_query()["formId"] = $v_2;
        $v_0.get_query()["pagemode"] = "iframe";
        var $v_8 = {};
        $v_8["uri"] = $v_0.toString();
        $v_8["preservePreviousContent"] = true;
        Mscrm.PageManager.get_instance().raiseEvent(8, $v_8)
    }
};
Mscrm.DashboardRibbonActions.createNewDashboard = function() {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var $v_0 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/tools/dashboardeditor/dialogs/dashboardlayoutdialog.aspx"),
        null,
        800,
        450,
        null);
    $v_0.setCallbackInfo("dashboardLayoutDialog", Mscrm.DashboardRibbonActions, null);
    $v_0.show();
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(2, "New", -1)
};
Mscrm.DashboardRibbonActions.createPowerBIDashboard = function() {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var $v_0 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/tools/dashboardeditor/dialogs/Powerbidashboard.aspx?mode=add"),
        null,
        379,
        450,
        null);
    $v_0.show();
    Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog(2, "New", -1)
};
Mscrm.DashboardRibbonActions.dashboardLayoutDialog = function(dashboardInfo) {
    if (!IsNull(dashboardInfo))
        if (isOutlookHostedWindow()) {
            var $v_0 = Mscrm.CrmUri.create(Mscrm.DashboardRibbonActions.$G),
                $v_1 = "&layoutId=" + dashboardInfo + "&dashboardType=" + 1031;
            $v_0.get_query()["extraqs"] = $v_1;
            openStdWin($v_0, buildWinName(null), Mscrm.DashboardRibbonActions.$I, Mscrm.DashboardRibbonActions.$H, null)
        } else {
            var $v_2 = Mscrm.CrmUri.create("tools/dashboardEditor/dashboardEditor.aspx?");
            $v_2.get_query()["dashboardType"] = 1031;
            $v_2.get_query()["layoutId"] = dashboardInfo;
            $v_2.get_query()["pagemode"] = "iframe";
            var $v_3 = {};
            $v_3["uri"] = $v_2.toString();
            $v_3["preservePreviousContent"] = true;
            Mscrm.PageManager.get_instance().raiseEvent(8, $v_3)
        }
};
Mscrm.DashboardRibbonActions.refreshDashboardSelector = function(dashboardId) {
    var $v_0 = Mscrm.DashboardRibbonActions.getDashboardSelector();
    if (!IsNull($v_0) && !$v_0.get_isDisposed()) {
        dashboardId = Mscrm.DashboardRibbonActions.$1F(dashboardId);
        $v_0.hide();
        var $v_1 = new RemoteCommand("DashboardWebService", "DashboardSelectorContent", null);
        $v_1.IncludeContextInPath = true;
        $v_1.SetParameter("showNewDashboard", true);
        var $v_2 = Mscrm.PageManager.get_instance().raiseEvent(3, null), $v_3 = $v_2[0];
        !IsNull($v_3) && $v_1.SetParameter("siteMapPath", $v_3["sitemappath"]);
        var $v_4 = $v_1.Execute();
        if ($v_4.Success) {
            $v_0.loadList($v_4.ReturnValue, dashboardId);
            $v_0.loadSelectedDashboard()
        }
    }
};
Mscrm.DashboardRibbonActions.$1F = function($p0) {
    if (isNullOrEmptyString($p0)) return $p0;
    if (!$p0.startsWith("{")) $p0 = "{" + $p0;
    if (!$p0.endsWith("}")) $p0 = $p0 + "}";
    return $p0
};
Mscrm.DashboardEditorRibbonActions = function() {};
Mscrm.DashboardEditorRibbonActions.showPropertiesDialog = function() {
    var $v_0 = $get("dashboardNameInput"), $v_1 = $get("dashboardDescriptionInput"), $v_2 = "", $v_3 = "";
    if (!IsNull($v_0) && !IsNull($v_1)) {
        $v_2 = $v_0.value;
        $v_3 = $v_1.value
    }
    var $v_4 = {};
    $v_4.sName = $v_2;
    $v_4.sDesc = $v_3;
    var $v_5 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/Tools/DashboardEditor/Dialogs/DashboardProperties.aspx"),
        $v_4,
        500,
        310,
        null);
    $v_5.setCallbackInfo("dashboardProperties", Mscrm.DashboardEditorRibbonActions, null);
    $v_5.show()
};
Mscrm.DashboardEditorRibbonActions.dashboardProperties = function(dashboardInfo) {
    var $v_0 = $get("dashboardNameInput"), $v_1 = $get("dashboardDescriptionInput");
    if (!IsNull(dashboardInfo) && !IsNull($v_0) && !IsNull($v_1)) {
        $v_0.value = dashboardInfo.sName;
        $v_1.value = dashboardInfo.sDesc
    }
};
Mscrm.DocumentTemplateRibbonActions = function() {};
Mscrm.DocumentTemplateRibbonActions
    .openSecurityRolesFromForm = function() {
        Mscrm.DocumentTemplateRibbonActions
            .openSecurityRoles(Xrm.Page.data.entity.getId(), Xrm.Page.data.entity.getEntityName())
    };
Mscrm.DocumentTemplateRibbonActions.openSecurityRolesFromGrid = function(gridControl, records) {
    if (!records || records.length <= 0) return;
    var $v_0 = gridControl.getEntityName();
    Mscrm.DocumentTemplateRibbonActions.openSecurityRoles(records[0].Id, $v_0)
};
Mscrm.DocumentTemplateRibbonActions.openSecurityRoles = function($p0, $p1) {
    var $v_0 = 580,
        $v_1 = 660,
        $v_2 = String.format("/tools/dialogs/RoleAssignment.aspx?oid={0}&entityname={1}",
            CrmEncodeDecode.CrmUrlEncode($p0),
            CrmEncodeDecode.CrmUrlEncode($p1)),
        $v_3 = Mscrm.CrmUri.create($v_2);
    $v_3 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_3);
    var $v_4 = new Xrm.DialogOptions;
    $v_4.width = $v_1;
    $v_4.height = $v_0;
    Xrm.Internal.openDialog($v_3.toString(), $v_4, null, null, null)
};
Mscrm.DocumentTemplateRibbonActions
    .updateActivationStatusFromGrid = function(result, gridControl, records, isDraft, isConfirmed) {
        if (!records || records.length <= 0) return;
        if (!isConfirmed) {
            var $v_0 = Mscrm.InternalUtilities.GridUtilities
                    .createCallbackFunctionFactory(Mscrm.DocumentTemplateRibbonActions.updateActivationStatusFromGrid,
                        [gridControl, records, isDraft, true]),
                $v_1 = gridControl.GetParameter("entitydisplayname"),
                $v_2 = gridControl.GetParameter("entitypluraldisplayname");
            Mscrm.DocumentTemplateRibbonActions.$W(records.length, isDraft, $v_0, $v_1, $v_2)
        } else {
            for (var $v_3 = new Array(records.length),
                $v_4 = gridControl.getEntityName(),
                $v_5 = 0,
                $$arr_B = records,
                $$len_C = $$arr_B.length,
                $$idx_D = 0;
                $$idx_D < $$len_C;
                ++$$idx_D) {
                var $v_6 = $$arr_B[$$idx_D],
                    $v_7 = new Xrm.Objects.EntityReference($v_4, new Microsoft.Crm.Client.Core.Framework.Guid($v_6.Id));
                $v_3[$v_5++] = Mscrm.DocumentTemplateRibbonActions.$n($v_7, isDraft)
            }
            $P_CRM.when.apply(null, $v_3).then(function($p1_0) { gridControl.Refresh() },
                function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
        }
    };
Mscrm.DocumentTemplateRibbonActions.$n = function($p0, $p1) {
    var $v_0 = { status: 0 },
        $v_1 = { status: $p1 },
        $v_2 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($p0,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0))),
        $v_3 = $v_2.get_changedFieldNames();
    $v_3.addRange(["status"]);
    return Xrm.Internal.messages.update($v_2)
};
Mscrm.DocumentTemplateRibbonActions.updateActivationStatusFromForm = function(result, entityId, isDraft, isConfirmed) {
    var $v_0 = Xrm.Page.data.entity.getEntityName();
    if (!isConfirmed) {
        var $v_1 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.DocumentTemplateRibbonActions.updateActivationStatusFromForm,
                    [entityId, isDraft, true]),
            $v_2 = Xrm.Internal.getEntityDisplayName($v_0),
            $v_3 = Xrm.Internal.getEntitySetName($v_0);
        Mscrm.DocumentTemplateRibbonActions.$W(1, isDraft, $v_1, $v_2, $v_3)
    } else {
        var $v_4 = new Xrm.Objects.EntityReference($v_0, entityId);
        Mscrm.DocumentTemplateRibbonActions.$n($v_4, isDraft)
            .then(function($p1_0) { Xrm.Page.data.refresh(false) },
                function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
    }
};
Mscrm.DocumentTemplateRibbonActions.checkEntityStatus = function(requiredStatus) {
    var $v_0 = requiredStatus, $v_1 = Xrm.Page.getAttribute("status");
    if ($v_1) $v_0 = $v_1.getValue();
    return $v_0 === requiredStatus
};
Mscrm.DocumentTemplateRibbonActions.$W = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = $p0 === 1 ? $p3 : $p4;
    if ($p1) {
        $v_0.title = Xrm.Internal.getResourceString("Dialog_Deactivate_Title1");
        $v_0.text = String.format(Xrm.Internal
            .getResourceString("Dialog_Deactivate_Description"),
            $p0.toString(),
            $v_1);
        $v_0.confirmButtonLabel = Xrm.Internal.getResourceString("Button_Label_Deactivate")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("Dialog_Activate_Title1");
        $v_0.text = String.format(Xrm.Internal.getResourceString("Dialog_Activate_Description_Activate"),
            $p0.toString(),
            $v_1);
        $v_0.confirmButtonLabel = Xrm.Internal.getResourceString("Button_Label_Activate")
    }
    $v_0.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 200;
    $v_2.width = 500;
    Xrm.Dialog.openConfirmDialog($v_0, $v_2, $p2, null)
};
Mscrm.PrintFromGrid = function() {};
Mscrm.PrintFromGrid.print = function($p0) { Mscrm.PrintFromGrid.$v($p0) };
Mscrm.PrintFromGrid.$v = function($p0) {
    var $v_0 = $p0.get_hasMorePages() || $p0.get_pageNumber() > 1;
    if (!$v_0) {
        Mscrm.PrintFromGrid.printCallBack(0, $p0);
        return
    }
    var $v_1 = Mscrm.CrmUri.create("/_grid/print/print_dlg.aspx"), $v_2 = new Xrm.DialogOptions;
    $v_2.height = parseInt(window.LOCID_PRINT_WINDOW_HEIGHT, 10);
    $v_2.width = parseInt(window.LOCID_PRINT_WINDOW_WIDTH, 10);
    var $v_3 = [$p0],
        $v_4 = Mscrm.Utilities.createCallbackFunctionForXrmDialog(Mscrm.PrintFromGrid
            .printCallBack,
            $v_3);
    Xrm.Internal.openDialog($v_1.toString(), $v_2, null, null, $v_4)
};
Mscrm.PrintFromGrid.printCallBack = function($p0, $p1) {
    var $v_0 = $p0;
    if (!IsNull($v_0) && $v_0 !== -1) {
        var $v_1 = Mscrm.CrmUri.create("/_grid/print/print.aspx").toString(),
            $v_2 = "print" + buildWinName($p1.GetParameter("viewid")),
            $v_3 = "status=1,resizable=1,scrollbars=0",
            $v_4 = 780,
            $v_5 = 500;
        if (isOutlookHostedWindow()) {
            var $v_6 = "gridXml=" + CrmEncodeDecode.CrmUrlEncode($p1.get_gridXml());
            $v_6 += "&printAllPages=" + CrmEncodeDecode.CrmUrlEncode($v_0.toString());
            PostToNewWindow($v_1, $v_2, $v_4, $v_5, $v_3, $v_6)
        } else {
            openStdWin(Mscrm.CrmUri.create(""), $v_2, $v_4, $v_5, $v_3);
            var $v_7 = Mscrm.PrintFromGrid.$t($v_0, $p1.get_gridXml());
            $v_7.action = $v_1;
            $v_7.target = $v_2;
            $v_7.submit()
        }
    }
};
Mscrm.PrintFromGrid.$t = function($p0, $p1) {
    var $v_0 = document.getElementsByName("gridPrint")[0];
    if (!IsNull($v_0)) Mscrm.GridRibbonActions.$T($v_0);
    else {
        $v_0 = window.document.createElement("form");
        $v_0.setAttribute("name", "gridPrint");
        $v_0.setAttribute("method", "post");
        $v_0.style.display = "none";
        window.document.body.appendChild($v_0)
    }
    Mscrm.GridRibbonActions.$B($v_0, "gridXml", $p1);
    Mscrm.GridRibbonActions.$B($v_0, "printAllPages", $p0.toString());
    return $v_0
};
Mscrm.RunReportFromGrid = function() {};
Mscrm.RunReportFromGrid.runReport = function(commandProperties, gridControl, recordIds) {
    var $v_0 = commandProperties["SourceControlId"],
        $v_1 = $v_0.substr($v_0.length - 38),
        $v_2 = Mscrm.ReportUtil.get_reportInformation()[$v_1],
        $v_3 = $v_2.Filterable,
        $v_4 = $v_2.ReportType,
        $v_5 = $v_2.FileName;
    Mscrm.RunReportFromGrid.$l(gridControl, recordIds, $v_3, $v_1, $v_4, $v_5)
};
Mscrm.RunReportFromGrid.$l = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = 2, $v_1 = $p0.GetParameter("effectiveFetchXml");
    if ($p2) {
        var $v_2 = Mscrm.CrmUri.create("/_grid/cmds/dlg_runreport.aspx");
        $v_2.get_query()["id"] = $p3;
        $v_2.get_query()["numselected"] = $p1.length;
        $v_2.get_query()["enableview"] = Mscrm.GridRibbonActions.$18($p0) ? "1" : "0";
        var $v_3 = new Mscrm.CrmDialog($v_2, null, 450, 400, null), $v_4 = [$p0, $p1, $p2, $p3, $p4, $p5, $v_1];
        $v_3.setCallbackInfo("performActionAfterRunReport", Mscrm.RunReportFromGrid, $v_4);
        $v_3.show()
    } else Mscrm.RunReportFromGrid.performActionAfterRunReport($v_0, $p0, $p1, $p2, $p3, $p4, $p5, $v_1)
};
Mscrm.RunReportFromGrid
    .performActionAfterRunReport = function(runMode,
        gridControl,
        recordIds,
        filterable,
        reportId,
        reportType,
        fileName,
        fetchXml) {
        if (filterable) if (IsNull(runMode)) runMode = -1;
        if (runMode === -1) return;
        var $v_0 = Mscrm.WindowInformation.getWindowInformation(9100),
            $v_1 = $v_0.Url,
            $v_2 = shouldLaunchPageInOutlookHostedWindow($v_1),
            $v_3,
            $v_4 = null;
        switch (runMode) {
        case 1:
            $v_3 = Mscrm.RunReportFromGrid.$u($v_1, reportId, fileName, "fetch");
            if ($v_2) $v_4 = "fetchxml=" + CrmEncodeDecode.CrmUrlEncode(fetchXml) + "\n\n";
            else Mscrm.GridRibbonActions.$B($v_3, "fetchxml", fetchXml);
            break;
        case 0:
            for (var $v_5 = new Sys.StringBuilder, $v_7 = 0; $v_7 < recordIds.length; $v_7++) {
                $v_7 > 0 && $v_5.append(";");
                $v_5.append(recordIds[$v_7])
            }
            $v_3 = Mscrm.RunReportFromGrid.$u($v_1,
                reportId,
                fileName,
                "records",
                "recordstype=" + CrmEncodeDecode.CrmUrlEncode(gridControl.GetParameter("otc")));
            if ($v_2) $v_4 = "records=" + CrmEncodeDecode.CrmUrlEncode($v_5.toString()) + "\n\n";
            else Mscrm.GridRibbonActions.$B($v_3, "records", $v_5.toString());
            break;
        case 2:
        default:
            Mscrm.ReportUtil.viewReport(reportType, reportId, fileName, "run", null);
            return
        }
        var $v_6 = buildWinName(null);
        if ($v_2) PostToNewWindow($v_3.action, $v_6, $v_0.Width, $v_0.Height, null, $v_4);
        else {
            var $v_8 = buildWindowFeatures($v_0.Width, $v_0.Height, null);
            safeWindowOpen(Mscrm.CrmUri.create("/_static/loading.htm"), $v_6, $v_8, true);
            $v_3.target = $v_6;
            $v_3.submit()
        }
    };
Mscrm.RunReportFromGrid.$u = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = document.getElementsByName("gridViewReport")[0];
    if (!IsNull($v_0)) Mscrm.GridRibbonActions.$T($v_0);
    else {
        $v_0 = window.document.createElement("form");
        $v_0.setAttribute("name", "gridViewReport");
        $v_0.setAttribute("method", "post");
        $v_0.setAttribute("style", "display: none");
        $v_0 = window.document.body.appendChild($v_0)
    }
    $p0.get_query()["action"] = "run";
    $p0.get_query()["id"] = $p1;
    $p0.get_query()["helpID"] = $p2;
    if (!IsNull($p3)) $p0.get_query()["context"] = $p3;
    !IsNull($p4) && $p0.appendToQuery("&" + $p4);
    $v_0.action = $p0.toString();
    return $v_0
};
Type.registerNamespace("Mscrm.InternalUtilities");
Mscrm.InternalUtilities.RibbonActionsMetricsReportingContext = function() {};
Mscrm.InternalUtilities.RibbonActionsMetricsReportingContext.prototype = { form: 0, grid: 1, dashboard: 2 };
Mscrm.InternalUtilities.RibbonActionsMetricsReportingContext
    .registerEnum("Mscrm.InternalUtilities.RibbonActionsMetricsReportingContext", false);
Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper = function() {};
Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper.addTelemetryLog = function(context, dialogName, entityId) {
    try {
        var $v_0 = {}, $v_1 = "";
        switch (context) {
        case 0:
            $v_1 = "Form";
            break;
        case 1:
            $v_1 = "Grid";
            break;
        case 2:
            $v_1 = "Dashboard";
            break
        }
        $v_0["context"] = $v_1;
        $v_0["dialogName"] = dialogName;
        if (entityId === -1) $v_0["entityId"] = "";
        else $v_0["entityId"] = entityId.toString();
        $v_0["userRoleId"] = Xrm.Page.context.getUserRoles().toString();
        Mscrm.MetricsReporting.instance().addMetric("dialogs", $v_0)
    } catch ($v_2) {
    }
};
Mscrm.ExportDialogArguments.registerClass("Mscrm.ExportDialogArguments");
Mscrm.ExportDialogReturnValue.registerClass("Mscrm.ExportDialogReturnValue");
Mscrm.DetectDuplicateArguments.registerClass("Mscrm.DetectDuplicateArguments");
Mscrm.AzureServiceConnectionActions.registerClass("Mscrm.AzureServiceConnectionActions");
Mscrm.TeamActions.registerClass("Mscrm.TeamActions");
Mscrm.UserQueryActions.registerClass("Mscrm.UserQueryActions");
Mscrm.Campaign.registerClass("Mscrm.Campaign");
Mscrm.IncidentActions.registerClass("Mscrm.IncidentActions");
Mscrm.Article.registerClass("Mscrm.Article");
Mscrm.ImportFileActions.registerClass("Mscrm.ImportFileActions");
Mscrm.EmailServerProfileActions.registerClass("Mscrm.EmailServerProfileActions");
Mscrm.List.registerClass("Mscrm.List");
Mscrm.MailboxActions.registerClass("Mscrm.MailboxActions");
Mscrm.PositionActions.registerClass("Mscrm.PositionActions");
Mscrm.QueueItem.registerClass("Mscrm.QueueItem");
Mscrm.QuickCampaign.registerClass("Mscrm.QuickCampaign");
Mscrm.RecommendationModelActions.registerClass("Mscrm.RecommendationModelActions");
Mscrm.RecommendationModelMappingActions.registerClass("Mscrm.RecommendationModelMappingActions");
Mscrm.ReportActions.registerClass("Mscrm.ReportActions");
Mscrm.Goal.registerClass("Mscrm.Goal");
Mscrm.OpportunityActions.registerClass("Mscrm.OpportunityActions");
Mscrm.RollupField.registerClass("Mscrm.RollupField");
Mscrm.SalesLiterature.registerClass("Mscrm.SalesLiterature");
Mscrm.SystemUserActions.registerClass("Mscrm.SystemUserActions");
Mscrm.TopicModelActions.registerClass("Mscrm.TopicModelActions");
Mscrm.GridRibbonActions.registerClass("Mscrm.GridRibbonActions");
Mscrm.RibbonActions.registerClass("Mscrm.RibbonActions");
Mscrm.XrmRibbonActionUtilities.registerClass("Mscrm.XrmRibbonActionUtilities");
Mscrm.ExportGridToExcel.registerClass("Mscrm.ExportGridToExcel");
Mscrm.ParamsCallbackWrapper.registerClass("Mscrm.ParamsCallbackWrapper");
Mscrm.DashboardRibbonActions.registerClass("Mscrm.DashboardRibbonActions");
Mscrm.DashboardEditorRibbonActions.registerClass("Mscrm.DashboardEditorRibbonActions");
Mscrm.DocumentTemplateRibbonActions.registerClass("Mscrm.DocumentTemplateRibbonActions");
Mscrm.PrintFromGrid.registerClass("Mscrm.PrintFromGrid");
Mscrm.RunReportFromGrid.registerClass("Mscrm.RunReportFromGrid");
Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper
    .registerClass("Mscrm.InternalUtilities.RibbonActionsMetricsReportingHelper");
Mscrm.UserQueryActions._queryTargetTypeCode = 0;
Mscrm.UserQueryActions.$A = null;
Mscrm.IncidentActions.$N = "{4a63c8d1-6c1e-48ec-9db4-3e6c7155334c}";
Mscrm.MailboxActions.$4 = null;
Mscrm.MailboxActions.$9 = null;
Mscrm.MailboxActions.$7 = null;
Mscrm.TopicModelActions.$5 = null;
Mscrm.RibbonActions.$P = new Microsoft.Crm.Client.Core.Framework.Guid("17de0dbb-153c-4c1a-b98a-223b3ea10125");
Mscrm.ExportGridToExcel.$6 = null;
Mscrm.DashboardRibbonActions.$2 = null;
Mscrm.DashboardRibbonActions.$G = "/main.aspx?pagetype=dashboardeditor";
Mscrm.DashboardRibbonActions.$I = window.screen.availWidth * .9;
Mscrm.DashboardRibbonActions.$H = window.screen.availHeight * .9