Type.registerNamespace("Mscrm");
Mscrm.ContractState = function() {};
Mscrm.ContractState.prototype = { draft: 0, invoiced: 1, active: 2, onHold: 3, canceled: 4, expired: 5 };
Mscrm.ContractState.registerEnum("Mscrm.ContractState", false);

function recalculate() { Xrm.Page.data.refresh(true) }

function hold() {
    if (!Xrm.Page.data.getIsValid()) return;
    Xrm.Internal.messages.setState("contract", Xrm.Page.data.entity.getId(), 3, -1)
        .then(function($p1_0) { refreshRibbon() }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function refreshRibbon() { Xrm.Page.data.refresh(true) }

function releaseHold() {
    if (!Xrm.Page.data.getIsValid()) return;
    Xrm.Internal.messages.setState("contract", Xrm.Page.data.entity.getId(), 1, -1)
        .then(function($p1_0) { refreshRibbon() }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function cancel() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/cs/contracts/dlg_cancel.aspx"), $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 500;
    var $v_2 = {};
    $v_2["errMessage"] = "";
    var $v_3 = [],
        $v_4 = performActionAfterCancelContract,
        $v_5 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_4, $v_3);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, $v_2, null, $v_5)
}

function performActionAfterCancelContract(cancelContractRequest) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(cancelContractRequest)) return null;
    if (!Xrm.Page.data.getIsValid()) return null;
    var $v_0 = Xrm.Internal.parseDate(cancelContractRequest.date.toString());
    Xrm.Internal.messages.cancelContract(Xrm.Page.data.entity.getId(), $v_0, -1)
        .then(function($p1_0) { refreshRibbon() }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    return null
}

function renew() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/cs/contracts/dlg_renew.aspx"), $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 450;
    var $v_2 = {};
    $v_2["errMessage"] = "";
    var $v_3 = new Mscrm.ContractRequest,
        $v_4 = [$v_3],
        $v_5 = performActionAfterRenewContract,
        $v_6 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_5, $v_4);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, $v_2, null, $v_6)
}

function performActionAfterRenewContract(contractRequest) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(contractRequest)) return null;
    if (!Xrm.Page.data.getIsValid()) return null;
    Xrm.Internal.messages.renewContract(Microsoft.Crm.Client.Core.Framework.Guid
        .tryCreate(Xrm.Page.data.entity.getId()),
        -1,
        contractRequest.includeCancelledLines).then(function($p1_0) {
            var $v_0 = $p1_0.entity, $v_1 = $v_0.get_identifier().Id.toString();
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1) &&
                Xrm.Utility.openEntityForm("contract", $v_1, null)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    return null
}

function invoice() {
    if (!Xrm.Page.data.getIsValid()) return;
    Xrm.Internal.messages.setState("contract", Xrm.Page.data.entity.getId(), 1, -1)
        .then(function($p1_0) { refreshRibbon() }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function clone() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/cs/contracts/dlg_clone.aspx"), $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 560;
    var $v_2 = {};
    $v_2["errMessage"] = "";
    var $v_3 = new Mscrm.ContractRequest,
        $v_4 = [$v_3],
        $v_5 = performActionAfterCloneContract,
        $v_6 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_5, $v_4);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, $v_2, null, $v_6)
}

function performActionAfterCloneContract(contractRequest) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(contractRequest)) return null;
    if (!Xrm.Page.data.getIsValid()) return null;
    Xrm.Internal.messages.cloneContract(Xrm.Page.data.entity.getId(), contractRequest.includeCancelledLines)
        .then(function($p1_0) {
                var $v_0 = $p1_0.entity, $v_1 = $v_0.get_identifier().Id.toString();
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1) &&
                    Xrm.Utility.openEntityForm("contract", $v_1, null)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    return null
}

function launchEffectivityCalendar() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/cs/contracts/dlg_calendar.aspx?id=" +
            CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId()) +
            "&otype=" +
            CrmEncodeDecode.CrmUrlEncode("1010") +
            "&readonly=" +
            CrmEncodeDecode.CrmUrlEncode($0().toString())),
        $v_1 = new Xrm.DialogOptions;
    $v_1.height = 408;
    $v_1.width = 600;
    var $v_2 = new Mscrm.ContractRequest,
        $v_3 = [$v_2],
        $v_4 = performActionAfterCloneContract,
        $v_5 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_4, $v_3);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_5)
}

function enableDeleteForContractLineSubGrid() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode");
    if ($v_0) {
        var $v_1 = $v_0.getValue();
        return $v_1 === 0 || $v_1 === 4 || $v_1 === 5 ? true : false
    } else return false
}

function IsContractCanceledOrExpiredOrOnHold() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode"), $v_1 = $v_0.getValue(), $v_2;
    switch ($v_1) {
    case 5:
    case 4:
    case 1:
    case 3:
        $v_2 = false;
        break;
    default:
        $v_2 = true;
        break
    }
    if (!$v_2) return $v_2;
    else return true
}

function $0() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        return !($v_1 === 0 && Xrm.Page.ui.getFormType() !== 3)
    }
    return Xrm.Page.ui.getFormType() === 3
}

Mscrm.ContractRequest = function() {};
Mscrm.ContractRequest.prototype = { includeCancelledLines: false };
Mscrm.CancelContractRequest = function() {};
Mscrm.ContractRequest.registerClass("Mscrm.ContractRequest");
Mscrm.CancelContractRequest.registerClass("Mscrm.CancelContractRequest");
Mscrm.CancelContractRequest.date = null;

function ValidateAssign(oGrid) {
    var oInnerGrid = oGrid.get_innerGrid(),
        oGridItems = oInnerGrid.get_selectedRecords(),
        iLength = oGridItems.length,
        iColIndex = oInnerGrid.FindColumnIndex("statecode");
    if (iColIndex >= 0)
        for (var i = 0; i < iLength; i++) {
            var sState = XUI.Html.DomUtils.GetFirstChild(oGridItems[i][3].cells[iColIndex]).innerHTML;
            if (sState != LOCID_CASE_STATE_OPEN) {
                alert(LOCID_MESSAGE_CANNOT_ASSIGN);
                return false
            }
        }
    return true
}

function locAddActTo(iActivityType) {
    var sParentId = null,
        sParentType = null,
        sPartyId = null,
        sPartyType = null,
        sPartyName = null,
        sPartyLocation = null;
    sParentId = Xrm.Page.data.entity.getId();
    sParentType = Mscrm.FormControlInputBehavior.GetBehaviorForForm("crmFormSubmitObjectType").get_datavalue();
    if (iActivityType != Task) {
        var aoItems = Xrm.Page.data.entity.attributes.get("customerid").getValue();
        if (aoItems != null) {
            var oItem = aoItems[0];
            sPartyId = oItem.id;
            sPartyType = oItem.type;
            sPartyName = oItem.name
        }
        sPartyLocation = ""
    }
    addActivityTo(iActivityType, sParentId, sParentType, sParentName, sPartyId, sPartyType, sPartyName, sPartyLocation)
}

function locAddObjTo(iType, bIsCustomRelationship, sRelName) {
    if (bIsCustomRelationship) {
        locAddRelatedTo(iType);
        return
    }
    if (iType == ContractDetail) {
        var stateCode = Xrm.Page.data.entity.attributes.get("statecode").getValue();
        if (stateCode == 3 || stateCode == 4 || stateCode == 5) {
            alert(LOCID_ERROR_INVALID_STATUS);
            return
        }
        var sQS = "?contractid=" + Xrm.Page.data.entity.getId();
        sQS += "&_CreateFromType=" + Contract;
        sQS += "&_CreateFromId=" + Xrm.Page.data.entity.attributes.get("contractid").getValue();
        openFrmObj(sQS, buildWinName(), iType)
    } else
        openObjEx(iType,
            Mscrm.FormControlInputBehavior.GetBehaviorForForm("crmFormSubmitObjectType").get_datavalue(),
            Xrm.Page.data.entity.getId())
}