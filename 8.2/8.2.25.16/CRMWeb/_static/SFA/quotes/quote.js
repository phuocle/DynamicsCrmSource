


CloseQuoteDialogResult = function CloseQuoteDialogResult() {
}
CloseQuoteDialogResult.prototype = {
    newStatus: 0,
    OpportunityStatus: 0,
    OpportunityState: 0,
    description: null,
    closeDate: null,
    ActivityXml: null,
    OpportunityInfo: null,
    createRevision: false,
    CloseOpportunity: false
}


Type.registerNamespace('Mscrm');

Mscrm.QuoteState = function() {}
Mscrm.QuoteState.prototype = {
    draft: 0, 
    active: 1, 
    won: 2, 
    closed: 3
}
Mscrm.QuoteState.registerEnum('Mscrm.QuoteState', false);


Mscrm.CloseQuoteStatus = function() {}
Mscrm.CloseQuoteStatus.prototype = {
    lost: 5, 
    canceled: 6, 
    revised: 7
}
Mscrm.CloseQuoteStatus.registerEnum('Mscrm.CloseQuoteStatus', false);


Mscrm.OpportunityState = function() {}
Mscrm.OpportunityState.prototype = {
    open: 0, 
    won: 1, 
    lost: 2
}
Mscrm.OpportunityState.registerEnum('Mscrm.OpportunityState', false);


function CreateOrder() {
    if (!Xrm.Page.data.getIsValid()) {
        return;
    }
    if (Xrm.Page.context.client.getClient() === 'Outlook') {
        if (!ConfirmCreateOrder()) {
            return;
        }
    }
    var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
    Xrm.Internal.messages.createOrder(new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()), $v_0).then(function($p1_0) {
        var $v_1 = ($p1_0).entity;
        var $v_2 = $v_1.get_identifier().Id.toString();
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) {
            Xrm.Utility.openEntityForm('salesorder', $v_2);
        }
    }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
}
function reviseClosedQuote() {
    if (!Xrm.Page.data.getIsValid()) {
        return;
    }
    var $v_0 = [];
    var $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_0);
    Xrm.Page.data.save().then(function($p1_0) {
        return $0($v_1);
    }, Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
}
function reviseActiveQuote() {
    if (!Xrm.Page.data.getIsValid()) {
        return;
    }
    if (Xrm.Page.data.entity.getIsDirty()) {
        Xrm.Page.data.save().then(function($p1_0) {
            return $1();
        }, Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
    }
    else {
        $1();
    }
}
function $1() {
    var $v_0 = [];
    var $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_0);
    var $v_2 = {};
    var $v_3 = {};
    var $v_4 = new Array(8);
    var $v_5 = 'activityid';
    $v_4[0] = $v_5;
    $v_2[$v_5] = 15;
    $v_3[$v_5] = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
    $v_5 = 'actualend';
    $v_4[1] = $v_5;
    $v_2[$v_5] = 2;
    $v_3[$v_5] = new Date();
    $v_5 = 'quoteid';
    $v_4[2] = $v_5;
    $v_2[$v_5] = 6;
    $v_3[$v_5] = new Xrm.Objects.EntityReference('quote', new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_5 = 'subject';
    $v_4[3] = $v_5;
    $v_2[$v_5] = 14;
    var $v_6 = Xrm.Internal.getResourceString('LOCID_QUOTE_CLOSED_SUBJECT');
    $v_3[$v_5] = $v_6;
    $v_5 = 'description';
    $v_4[4] = $v_5;
    $v_2[$v_5] = 14;
    var $v_7 = Xrm.Page.data.entity.attributes.get('description');
    $v_3[$v_5] = ($v_7) ? $v_7.getValue() : '';
    $v_5 = 'quotenumber';
    $v_4[5] = $v_5;
    $v_2[$v_5] = 14;
    $v_3[$v_5] = Xrm.Page.data.entity.attributes.get('quotenumber').getValue();
    $v_5 = 'revision';
    $v_4[6] = $v_5;
    $v_2[$v_5] = 5;
    $v_3[$v_5] = Xrm.Page.data.entity.attributes.get('revisionnumber').getValue();
    $v_5 = 'ownerid';
    $v_4[7] = $v_5;
    $v_2[$v_5] = 6;
    var $v_8 = (Xrm.Page.data.entity.attributes.get('ownerid').getValue())[0];
    $v_3[$v_5] = new Xrm.Objects.EntityReference($v_8.entityType, new Microsoft.Crm.Client.Core.Framework.Guid($v_8.id));
    var $v_9 = new Xrm.Objects.EntityReference('quoteclose', Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
    var $v_A = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord($v_9, $v_3, $v_2, {}, {}, new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_A.get_changedFieldNames().addRange($v_4);
    Xrm.Internal.messages.retrieveDefaultStatusForState('quote', 3).then(function($p1_0) {
        var $v_B = 7;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
            $v_B = ($p1_0).status;
            Xrm.Internal.messages.closeQuote($v_A, $v_B).then(function($p2_0) {
                $0($v_1);
            }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        }
    }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
}
function $0($p0) {
    Xrm.Internal.messages.reviseQuote(new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()), $p0).then(function($p1_0) {
        var $v_0 = ($p1_0).entity;
        var $v_1 = $v_0.get_identifier().Id.toString();
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
            Xrm.Utility.openEntityForm('quote', $v_1);
        }
    }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
}
function closeQuote() {
    if (!Xrm.Page.data.getIsValid()) {
        return;
    }
    var $v_0 = Xrm.Page.data.entity.attributes.get('opportunityid').getValue();
    var $v_1 = ($v_0) ? $v_0[0].id : '';
    if (Xrm.Page.context.client.getClient() !== 'Mobile' || !Mscrm.InternalUtilities.DialogUtility.isMDDEnabled()) {
        var $v_2 = {};
        $v_2['quoteNumber'] = Xrm.Page.data.entity.attributes.get('quotenumber').getValue();
        $v_2['revisionNumber'] = Xrm.Page.data.entity.attributes.get('revisionnumber').getValue();
        $v_2['opportunityID'] = $v_1;
        var $v_3 = new Xrm.DialogOptions();
        $v_3.height = 475;
        $v_3.width = 350;
        var $v_4 = Mscrm.GlobalImported.CrmUri.create('/sfa/quotes/dlg_close.aspx?QuoteId=' + CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId()) + '&opportunityid=' + CrmEncodeDecode.CrmUrlEncode($v_1));
        Xrm.Internal.openDialog($v_4.toString(), $v_3, $v_2, null, performActionAfterCloseQuote);
    }
    else {
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
            $2(Xrm.Page.data.entity.getId(), $v_1, false);
        }
        else {
            var $v_5 = 2;
            Xrm.Internal.messages.canCloseOpportunity(new Microsoft.Crm.Client.Core.Framework.Guid($v_1), new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()), $v_5).then(function($p1_0) {
                $2(Xrm.Page.data.entity.getId(), $v_1, ($p1_0).canClose);
            }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        }
    }
}
function $2($p0, $p1, $p2) {
    var $v_0 = new Xrm.DialogOptions();
    $v_0.width = 350;
    $v_0.height = 475;
    var $v_1 = {};
    var $v_2 = {};
    $v_1['quoteid'] = $p0;
    $v_1['opportunityid'] = $p1;
    $v_1['cancloseopportunity'] = $p2;
    var $v_3 = 3;
    $v_1['closedstate'] = $v_3;
    Xrm.Dialog.openDialog('CloseQuote', $v_0, $v_1, closeQuoteDialogCloseCallback, null);
}
function closeQuoteDialogCloseCallback(dialogParams, callbackParams) {
    var $v_0 = dialogParams['lastButtonClicked'];
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || $v_0.toString() !== 'ok_id') {
        return;
    }
    var $v_1 = dialogParams['quoteid'].toString();
    var $v_2 = dialogParams['closequotedate_id'];
    var $v_3 = parseInt(dialogParams['closedstate'].toString(), 10);
    var $v_4 = dialogParams['closequotestatusreason_id'];
    var $v_5 = dialogParams['closequotecreaterevisedquote_id'] === 1;
    var $v_6 = dialogParams['cancloseopportunity'].toString() === 'true';
    var $v_7 = $v_6 && dialogParams['closequotecloseopportunity_id'] === 1;
    var $v_8 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams['description_id'])) {
        $v_8 = dialogParams['description_id'].toString();
    }
    var $v_9 = null;
    if ($v_7 && !Mscrm.InternalUtilities.JSTypes.isNull(dialogParams['opportunityid'])) {
        $v_9 = dialogParams['opportunityid'].toString();
    }
    if ($v_7) {
        $4($v_9, $v_1, $v_4, $v_2, $v_8, $v_5);
    }
    else {
        Mscrm.CommandBarActions.closeQuoteAndOpportunity($v_4, 0, 0, $v_8, $v_2, null, null, $v_5, $v_7);
    }
}
function $4($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = {};
    $v_0['quoteid'] = $p1;
    $v_0['closequotestatusreason_id'] = $p2;
    $v_0['closequotedate_id'] = $p3;
    $v_0['description_id'] = $p4;
    $v_0['closequotecreaterevisedquote_id'] = $p5;
    $v_0['entityName'] = 'opportunity';
    var $v_1 = new Xrm.DialogOptions();
    $v_1.width = 450;
    $v_1.height = 420;
    var $v_2 = {};
    $v_2['won'] = false;
    $v_2['opportunityId'] = $p0;
    $v_2['caller'] = 'CloseQuote';
    $v_2['callerparameters'] = $v_0;
    Xrm.Dialog.openDialog('CloseOpportunity', $v_1, $v_2, closeOpportunityDialogCloseCallback, $v_0);
}
function closeOpportunityDialogCloseCallback(dialogParams, callbackParams) {
    var $v_0 = dialogParams['lastButtonClicked'];
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || $v_0.toString() !== 'ok_id') {
        return;
    }
    var $v_1 = {};
    if (dialogParams['won'].toString() === 'true') {
        $v_1['state'] = 1;
    }
    else {
        $v_1['state'] = 2;
    }
    $v_1['reason'] = dialogParams['statusreason_id'];
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams['actualrevenue_id'])) {
        $v_1['actualRevenue'] = dialogParams['actualrevenue_id'].toString();
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams['description_id'])) {
        $v_1['description'] = dialogParams['description_id'].toString();
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams['competitor_id'])) {
        $v_1['competitor'] = dialogParams['competitor_id'].toString();
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams['closedate_id'])) {
        $v_1['actualEnd'] = dialogParams['closedate_id'];
    }
    Mscrm.CommandBarActions.closeQuoteAndOpportunity(callbackParams['closequotestatusreason_id'], $v_1['reason'], $v_1['state'], callbackParams['description_id'], callbackParams['closequotedate_id'], null, $v_1, callbackParams['closequotecreaterevisedquote_id'], true);
}
function performActionAfterCloseQuote(oResult) {
    if (!IsNull(oResult)) {
        if (!Xrm.Page.data.getIsValid()) {
            return;
        }
        Xrm.Page.data.save().then(function() {
            Mscrm.CommandBarActions.closeQuoteAndOpportunity(oResult.newStatus, oResult.OpportunityStatus, oResult.OpportunityState, oResult.description, oResult.closeDate, oResult.ActivityXml, oResult.OpportunityInfo, oResult.createRevision, oResult.CloseOpportunity);
        }, function($p1_0) {
            return;
        });
    }
}
function ConfirmCreateOrder() {
    try {
        if (Xrm.Page.context.client.getClientState() === 'Offline') {
            return confirm(Xrm.Internal.getResourceString('LOCID_OFFLINE_CRE_ORD_FROM_QUO'));
        }
        else {
            return true;
        }
    }
    catch ($v_0) {
        throw $v_0;
    }
}
function activateQuote() {
    if (!Xrm.Page.data.getIsValid()) {
        return;
    }
    Xrm.Page.data.save().then(function() {
        Xrm.Internal.messages.setState('quote', Xrm.Page.data.entity.getId(), 1, -1).then(function($p2_0) {
            Xrm.Utility.openEntityForm('quote', Xrm.Page.data.entity.getId());
        }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    }, function($p1_0) {
        return;
    });
}
function reCalculate() {
    Xrm.Page.data.refresh(true);
}
function printQuote() {
    if (Mscrm.InternalUtilities.Utilities.isIosDevice()) {
        alert(Xrm.Internal.getResourceString('LOCID_UNSUPPORTED_RIBBONACTION'));
        return;
    }
    try {
        var $v_0 = Mscrm.GlobalImported.CrmUri.create('/_grid/cmds/dlg_webmailmerge.aspx?mergetype=3&objectTypeCode=' + CrmEncodeDecode.CrmUrlEncode('1084') + '&objectId=' + CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId()));
        var $v_1 = new Xrm.DialogOptions();
        $v_1.height = 600;
        $v_1.width = 500;
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null);
    }
    catch ($v_2) {
        throw $v_2;
    }
}
function getProductsForQuote() {
    Mscrm.CommandBarActions.getProducts();
}
function acceptQuoteOrCreateOrder() {
    var $v_0 = Xrm.Page.data.entity.attributes.get('statecode');
    if (!$v_0) {
        return;
    }
    var $v_1 = $v_0.getValue();
    if ($v_1 === 1) {
        acceptQuote();
    }
    if ($v_1 === 2) {
        CreateOrder();
    }
}
function acceptQuote() {
    if (!Xrm.Page.data.getIsValid()) {
        return;
    }
    if (Xrm.Page.context.client.getClient() === 'Outlook') {
        if (!ConfirmCreateOrder()) {
            return;
        }
    }
    var $v_0 = Xrm.Page.data.entity.attributes.get('opportunityid').getValue();
    var $v_1 = ($v_0) ? $v_0[0].id : '';
    if (Xrm.Page.context.client.getClient() !== 'Mobile' || !Mscrm.InternalUtilities.DialogUtility.isMDDEnabled()) {
        var $v_2 = {};
        $v_2['quoteNumber'] = Xrm.Page.data.entity.attributes.get('quotenumber').getValue();
        $v_2['revisionNumber'] = Xrm.Page.data.entity.attributes.get('revisionnumber').getValue();
        $v_2['opportunityID'] = $v_1;
        var $v_3 = new Xrm.DialogOptions();
        $v_3.height = 500;
        $v_3.width = 475;
        var $v_4 = Mscrm.GlobalImported.CrmUri.create('/sfa/quotes/dlg_accept.aspx?QuoteId=' + CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId()) + '&opportunityid=' + CrmEncodeDecode.CrmUrlEncode($v_1));
        Xrm.Internal.openDialog($v_4.toString(), $v_3, $v_2, null, performActionAfterAcceptQuote);
    }
    else {
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
            $3(Xrm.Page.data.entity.getId(), $v_1, false);
        }
        else {
            var $v_5 = 2;
            Xrm.Internal.messages.canCloseOpportunity(new Microsoft.Crm.Client.Core.Framework.Guid($v_1), new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()), $v_5).then(function($p1_0) {
                $3(Xrm.Page.data.entity.getId(), $v_1, ($p1_0).canClose);
            }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        }
    }
}
function $3($p0, $p1, $p2) {
    var $v_0 = new Xrm.DialogOptions();
    $v_0.height = 500;
    $v_0.width = 475;
    var $v_1 = {};
    var $v_2 = {};
    $v_1['quoteid'] = $p0;
    $v_1['opportunityid'] = $p1;
    $v_1['cancloseopportunity'] = $p2;
    var $v_3 = 2;
    $v_1['closedstate'] = $v_3;
    Xrm.Dialog.openDialog('CreateOrder', $v_0, $v_1, createSalesOrderDialogCloseCallback, null);
}
function createSalesOrderDialogCloseCallback(dialogParams, callbackParams) {
    var $v_0 = dialogParams['lastButtonClicked'];
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || $v_0.toString() !== 'ok_id') {
        return;
    }
    var $v_1 = dialogParams['quoteid'].toString();
    var $v_2 = dialogParams['createorderdate_id'];
    var $v_3 = parseInt(dialogParams['closedstate'].toString(), 10);
    var $v_4 = dialogParams['createorderstatusreason_id'];
    var $v_5 = dialogParams['createorderstatusreasondescription_id'].toString();
    var $v_6 = dialogParams['cancloseopportunity'] === 'true';
    var $v_7 = dialogParams['createordercloseopportunity_id'] === 1;
    var $v_8 = dialogParams['createordercalcrevenue_id'] !== 1;
    var $v_9 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams['description_id'])) {
        $v_9 = dialogParams['description_id'].toString();
    }
    var $v_A = null;
    if ($v_8) {
        $v_5 = dialogParams['actualrevenue_id'].toString();
    }
    Mscrm.CommandBarActions.performActionAfterAcceptQuote($v_4, $v_5, $v_2, $v_9, $v_6 && $v_7, $v_8, $v_A);
}
function performActionAfterAcceptQuote(oResult) {
    var $v_0 = false;
    var $v_1 = false;
    var $v_2 = '';
    if (!IsNull(oResult['closeOpportunity']) && oResult['closeOpportunity']) {
        $v_0 = true;
        if (!IsNull(oResult['useGivenRevenue']) && oResult['useGivenRevenue']) {
            $v_1 = true;
            $v_2 = oResult['actualRevenue'];
        }
        else {
            $v_1 = false;
            $v_2 = '';
        }
    }
    var $v_3 = Xrm.Internal.parseDate(oResult['closeDate']);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
        Xrm.Internal.messages.getActualDate(oResult['closeDate']).then(function($p1_0) {
            $v_3 = new Date(($p1_0).result);
            Mscrm.CommandBarActions.performActionAfterAcceptQuote(oResult['newStatus'], oResult['newStatusMsg'], $v_3, oResult['description'], $v_0, $v_1, $v_2);
        }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    }
    else {
        Mscrm.CommandBarActions.performActionAfterAcceptQuote(oResult['newStatus'], oResult['newStatusMsg'], $v_3, oResult['description'], $v_0, $v_1, $v_2);
    }
}
function reviseActiveOrClosedQuote() {
    var $v_0 = Xrm.Page.data.entity.attributes.get('statecode');
    if (!$v_0) {
        return;
    }
    var $v_1 = $v_0.getValue();
    if (isQuoteActive()) {
        window.top.EnableCommandBar = false;
        reviseActiveQuote();
    }
    else if ($v_1 === 3) {
        reviseClosedQuote();
    }
}
function isQuoteActive() {
    var $v_0 = Xrm.Page.data.entity.attributes.get('statecode');
    if (!$v_0) {
        return false;
    }
    var $v_1 = $v_0.getValue();
    if ($v_1 === 1) {
        return true;
    }
    return false;
}
function isQuoteActiveOrWon() {
    var $v_0 = Xrm.Page.data.entity.attributes.get('statecode');
    if (!$v_0) {
        return false;
    }
    var $v_1 = $v_0.getValue();
    if ($v_1 === 1 || $v_1 === 2) {
        return true;
    }
    return false;
}
function isQuoteActiveOrClosed() {
    var $v_0 = Xrm.Page.data.entity.attributes.get('statecode');
    if (!$v_0) {
        return false;
    }
    var $v_1 = $v_0.getValue();
    if ($v_1 === 1 || $v_1 === 3) {
        return true;
    }
    return false;
}


CloseQuoteDialogResult.registerClass('CloseQuoteDialogResult');



