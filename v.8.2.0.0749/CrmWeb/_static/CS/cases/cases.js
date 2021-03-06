Type.registerNamespace("Mscrm");

function CaseFlow(activityTypeCode) { Mscrm.IncidentGridCommandActions.caseFlow(activityTypeCode) }

function AssociateChildCase(gridControl, records, entityTypeCode) {
    Mscrm.IncidentGridCommandActions.associateChildCase(gridControl, records, entityTypeCode)
}

function MergeRecords(gridControl, records, entityTypeCode) {
    Mscrm.IncidentGridCommandActions.mergeRecords(gridControl, records, entityTypeCode)
}

function createChildCase() {
    var e = window.top.document.getElementById("incident|NoRelationship|Form|Mscrm.Form.incident.CreateChildcase");
    Mscrm.ReadFormUtilities.execute(Mscrm.InlineCommands.CreateChild, e)
}

function resolve() {
    if (Xrm.Page.data.entity.attributes.get("statecode").getValue() == "1") return;
    if (window._IsRefreshForm === "1") Mscrm.CommandBarActions.resolve();
    else {
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) return;
        var success = false, url = Mscrm.CrmUri.create("/CS/cases/dlg_ConfirmResolve.aspx");
        url.get_query()["pId"] = Xrm.Page.data.entity.getId();
        url.get_query()["pType"] = Mscrm.EntityTypeCode.Incident;
        var rc = new RemoteCommand("CustomerService", "IsValidStatusReasonTransition");
        rc.SetParameter("incidentId", Xrm.Page.data.entity.getId());
        rc.SetParameter("toStateCode", 1);
        var result = rc.Execute();
        switch (result.ReturnValue) {
        case 1:
            url.get_query()["reason"] = "novalidstatustransition";
            var crmDialog = new Mscrm.CrmDialog(url, document, 600, 200, null);
            crmDialog.show();
            break;
        case 2:
            url.get_query()["reason"] = "activeactivities";
            var crmDialog = new Mscrm.CrmDialog(url, document, 600, 200, null);
            crmDialog.setCallbackInfo("performActionAfterConfirmCancel", this, null);
            crmDialog.show();
            break;
        case 3:
            commonforResolve();
            break
        }
    }
}

function performActionAfterConfirmCancel(returnValue) { returnValue && commonforResolve() }

function commonforResolve() {
    var url = Mscrm.CrmUri.create("/CS/cases/dlg_closecase.aspx");
    url.get_query()["pId"] = Xrm.Page.data.entity.getId();
    url.get_query()["pType"] = Mscrm.EntityTypeCode.Incident;
    var crmDialog = new Mscrm.CrmDialog(url, document, 400, 391, null);
    crmDialog.setCallbackInfo("performActionAfterCloseCase", this, null);
    crmDialog.show()
}

function performActionAfterCloseCase(returnValue) {
    var success = false;
    if (returnValue) {
        var rc = new RemoteCommand("CustomerService", "ResolveCase");
        rc.SetParameter("activityXml", returnValue.ActivityXml);
        rc.SetParameter("newStatus", returnValue.StatusCode);
        var result = rc.Execute();
        success = result.Success;
        if (success) {
            Mscrm.ReadFormUtilities.forceReload(Mscrm.EntityTypeCode.Incident,
                Xrm.Page.data.entity.getId(),
                Mscrm.InlineEditDataService.get_formId());
            Xrm.Internal.refreshParentGrid(Mscrm.EntityTypeCode.Incident, "", Xrm.Page.data.entity.getId())
        }
    }
    return success
}

function reactivate(obj_type) {
    if (window._IsRefreshForm === "1") Mscrm.CommandBarActions.reactivate();
    else {
        var success = false, url = Mscrm.CrmUri.create("/CS/cases/dlg_reactivate.aspx");
        url.get_query()["pId"] = Xrm.Page.data.entity.getId();
        var rc = new RemoteCommand("CustomerService", "IsValidStatusReasonTransition");
        rc.SetParameter("incidentId", Xrm.Page.data.entity.getId());
        rc.SetParameter("toStateCode", 0);
        var result = rc.Execute();
        if (result.ReturnValue == "1") {
            url.get_query()["reason"] = "novalidstatustransition";
            var crmDialog = new Mscrm.CrmDialog(url, null, 600, 200, null);
            crmDialog.show()
        } else {
            var crmDialog = new Mscrm.CrmDialog(url, null, 535, 230, null);
            crmDialog.setCallbackInfo("performActionAfterReactivateCase", this, null);
            return crmDialog.show()
        }
    }
}

function performActionAfterReactivateCase(ret_val) {
    if (ret_val) {
        var activateCase = {};
        activateCase["StatusCode"] = ret_val.StatusCode;
        Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.Reactivate, activateCase)
    }
}

function cancel() {
    if (window._IsRefreshForm === "1") Mscrm.CommandBarActions.cancel();
    else if (window.location.href.indexOf("dlg_bulkedit") == -1) {
        var success = false, url = Mscrm.CrmUri.create("/CS/cases/dlg_ConfirmCancel.aspx");
        url.get_query()["pId"] = Xrm.Page.data.entity.getId();
        url.get_query()["pType"] = Mscrm.EntityTypeCode.Incident;
        var rc = new RemoteCommand("CustomerService", "IsValidStatusReasonTransition");
        rc.SetParameter("incidentId", Xrm.Page.data.entity.getId());
        rc.SetParameter("toStateCode", 2);
        var result = rc.Execute();
        switch (result.ReturnValue) {
        case 1:
            url.get_query()["reason"] = "novalidstatustransition";
            var crmDialog = new Mscrm.CrmDialog(url, document, 600, 200, null);
            crmDialog.show();
            break;
        case 2:
            url.get_query()["reason"] = "activeactivities";
            var crmDialog = new Mscrm.CrmDialog(url, document, 600, 200, null), parameter = {};
            parameter["pId"] = Xrm.Page.data.entity.getId();
            var parameters = [parameter];
            crmDialog.setCallbackInfo("performActionAfterConfirmCancelCase", this, parameters);
            crmDialog.show();
            break;
        case 3:
            url = Mscrm.CrmUri.create("/CS/cases/dlg_cancel.aspx");
            url.get_query()["pId"] = Xrm.Page.data.entity.getId();
            var crmDialog = new Mscrm.CrmDialog(url, null, 520, 230, null);
            crmDialog.setCallbackInfo("performActionAfterCancelCase", this, null);
            crmDialog.show();
            break
        }
    } else closeWindow()
}

function performActionAfterConfirmCancelCase(returnValue, parameters) {
    if (returnValue) {
        var url = Mscrm.CrmUri.create("CS/cases/dlg_cancel.aspx?pId=" + parameters["pId"]);
        crmDialog = new Mscrm.CrmDialog(url, document, 520, 230, null);
        crmDialog.setCallbackInfo("performActionAfterCancelCase", this, null);
        crmDialog.show()
    }
}

function performActionAfterCancelCase(ret_val) {
    if (ret_val) {
        var cancelCase = {};
        cancelCase["StatusCode"] = ret_val.StatusCode;
        Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.IncidentCancel, cancelCase);
        window
            .setTimeout('Xrm.Internal.refreshParentGrid(Mscrm.EntityTypeCode.Incident, "", Xrm.Page.data.entity.getId());', 100)
    }
}