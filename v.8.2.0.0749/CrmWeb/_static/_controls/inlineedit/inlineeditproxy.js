Type.registerNamespace("Mscrm");
Mscrm.InlineEditUtilitiesProxy = function() {};
Mscrm.InlineEditUtilitiesProxy.tryCommitActiveControl = function(keepFocus) {
    if (window.IsTurboForm) tryCommitActiveControl(keepFocus);
    else Mscrm.InlineEditUtilities.tryCommitActiveControl(keepFocus)
};
Mscrm.InlineEditUtilitiesProxy.getLinkedDataObject = function(container) {
    var $v_0 = null;
    if (window.IsTurboForm) $v_0 = getLinkedDataObject(container[0]);
    else $v_0 = Mscrm.InlineEditUtilities.getLinkedDataObject(container);
    return $v_0
};
Mscrm.InlineEditUtilitiesProxy.isControlDisabled = function(controlId, formData) {
    var $v_0 = false;
    if (window.IsTurboForm) $v_0 = isControlDisabled(controlId);
    else $v_0 = Mscrm.InlineEditUtilities.isControlDisabled(controlId, formData);
    return $v_0
};
Mscrm.InlineEditUtilitiesProxy.getDecodedValue = function(value, replaceBR) {
    var $v_0 = null;
    if (window.IsTurboForm) $v_0 = getDecodedValue(value, replaceBR);
    else $v_0 = Mscrm.InlineEditUtilities.getDecodedValue(value, replaceBR);
    return $v_0
};
Mscrm.InlineEditUtilitiesProxy.normalizeNewLineForTextArea = function(line) {
    var $v_0 = null;
    if (window.IsTurboForm) $v_0 = normalizeNewLineForTextArea(line);
    else $v_0 = Mscrm.InlineEditUtilities.normalizeNewLineForTextArea(line);
    return $v_0
};
Mscrm.InlineEditDataServiceProxy = function() {};
Mscrm.InlineEditDataServiceProxy.get_performDuplicateCheck = function() {
    var $v_0 = false;
    if (window.IsTurboForm) $v_0 = Mscrm.TurboForm.Control.CommandService.get_performDuplicateCheck();
    else $v_0 = Mscrm.InlineEditDataService.get_performDuplicateCheck();
    return $v_0
};
Mscrm.InlineEditDataServiceProxy.set_performDuplicateCheck = function(value) {
    if (window.IsTurboForm) Mscrm.TurboForm.Control.CommandService.set_performDuplicateCheck(value);
    else Mscrm.InlineEditDataService.set_performDuplicateCheck(value);
    return value
};
Mscrm.InlineEditDataServiceProxy.get_infraCallForBookOrReschedule = function() {
    var $v_0 = false;
    if (window.IsTurboForm) return Mscrm.TurboForm.Control.CommandService.get_infraCallForBookOrReschedule();
    else $v_0 = Mscrm.InlineEditDataService.get_infraCallForBookOrReschedule();
    return $v_0
};
Mscrm.InlineEditDataServiceProxy.set_infraCallForBookOrReschedule = function(value) {
    if (window.IsTurboForm) Mscrm.TurboForm.Control.CommandService.set_infraCallForBookOrReschedule(value);
    else Mscrm.InlineEditDataService.set_infraCallForBookOrReschedule(value);
    return value
};
Mscrm.InlineEditDataServiceProxy.get_busy = function() {
    if (window.IsTurboForm) return Mscrm.TurboForm.Control.CommandService.get_instance().get_busy();
    else return Mscrm.InlineEditDataService.get_busy()
};
Mscrm.InlineEditDataServiceProxy.set_busy = function(value) {
    if (window.IsTurboForm) Mscrm.TurboForm.Control.CommandService.get_instance().set_busy(value);
    else Mscrm.InlineEditDataService.set_busy(value);
    return value
};
Mscrm.InlineEditDataServiceProxy
    .addFormRefreshedEventHandler = function(handler) {
        !window.IsTurboForm && Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(handler)
    };
Mscrm.InlineEditDataServiceProxy
    .removeFormRefreshedEventHandler = function(handler) {
        !window.IsTurboForm && Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(handler)
    };
Mscrm.InlineEditDataServiceProxy
    .deactivateWithReference = function(status,
        statusCode,
        recordId,
        entityLogicalName,
        formData,
        doNotRetrieve,
        formId,
        successCallback,
        errorCallback,
        doNotShowProgressControl) {
        if (window.IsTurboForm)
            Mscrm.TurboForm.Control.CommandService
                .deactivateWithReference(status,
                    statusCode,
                    recordId,
                    entityLogicalName,
                    formData,
                    doNotRetrieve,
                    formId,
                    successCallback,
                    errorCallback);
        else
            Mscrm.InlineEditDataService
                .deactivateWithReference(status,
                    statusCode,
                    recordId,
                    entityLogicalName,
                    formData,
                    doNotRetrieve,
                    formId,
                    successCallback,
                    errorCallback,
                    doNotShowProgressControl)
    };
Mscrm.InlineEditDataServiceProxy.createProduct = function(isCreateNew,
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
    if (window.IsTurboForm)
        Mscrm.TurboForm.Control.CommandService
            .createProduct(isCreateNew,
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
                errorCallback);
    else
        Mscrm.InlineEditDataService.createProduct(isCreateNew,
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
            errorCallback)
};
Mscrm.InlineEditDataServiceProxy
    .createConnection = function(targetId, targetEntityName, roleId, succeedCallback, errorCallback) {
        if (window.IsTurboForm)
            Mscrm.TurboForm.Control.CommandService
                .createConnection(targetId, targetEntityName, roleId, succeedCallback, errorCallback);
        else
            Mscrm.InlineEditDataService.createConnection(targetId,
                targetEntityName,
                roleId,
                succeedCallback,
                errorCallback)
    };
Mscrm.InlineEditDataServiceProxy.recalculateRecord = function(formId) {
    Mscrm.TurboForm.Control.CommandService.recalculateRecord(Xrm.Page.data.entity, formId)
};
Mscrm.InlineEditDataServiceProxy
    .createEntitlementChannel = function(isCreateNew,
        entityTypeCode,
        entityName,
        channel,
        totalTerms,
        recordId,
        succeedCallback,
        errorCallback) {
        if (window.IsTurboForm)
            Mscrm.TurboForm.Control.CommandService
                .createEntitlementChannel(isCreateNew,
                    entityTypeCode,
                    entityName,
                    channel,
                    totalTerms,
                    recordId,
                    succeedCallback,
                    errorCallback);
        else
            Mscrm.InlineEditDataService
                .createEntitlementChannel(isCreateNew,
                    entityTypeCode,
                    entityName,
                    channel,
                    totalTerms,
                    recordId,
                    succeedCallback,
                    errorCallback)
    };
Mscrm.InlineEditDataServiceProxy
    .createDynamicPropertyOptionSetItem = function(entityName,
        optionName,
        optionValue,
        optionDescription,
        recordId,
        succeedCallback,
        errorCallback) {
        if (window.IsTurboForm)
            Mscrm.TurboForm.Control.CommandService
                .createDynamicPropertyOptionSetItem(entityName,
                    optionName,
                    optionValue,
                    optionDescription,
                    recordId,
                    succeedCallback,
                    errorCallback);
        else
            Mscrm.InlineEditDataService
                .createDynamicPropertyOptionSetItem(entityName,
                    optionName,
                    optionValue,
                    optionDescription,
                    recordId,
                    succeedCallback,
                    errorCallback)
    };
Mscrm.InlineEditDataServiceProxy
    .updateSequenceNo = function(recordId, formId, entityLogicalName, sequenceNumber, succeedCallback, errorCallback) {
        if (window.IsTurboForm)
            Mscrm.TurboForm.Control.CommandService
                .updateSequenceNo(recordId, formId, entityLogicalName, sequenceNumber, succeedCallback, errorCallback);
        else
            Mscrm.InlineEditDataService.updateSequenceNo(recordId,
                formId,
                entityLogicalName,
                sequenceNumber,
                succeedCallback,
                errorCallback)
    };
Mscrm.InlineEditDataServiceProxy.createCategory = function(title,
    recordId,
    sequenceNumber,
    succeedCallback,
    errorCallback) {
    if (window.IsTurboForm)
        Mscrm.TurboForm.Control.CommandService
            .createCategory(title, recordId, sequenceNumber, succeedCallback, errorCallback);
    else Mscrm.InlineEditDataService.createCategory(title, recordId, sequenceNumber, succeedCallback, errorCallback)
};
Mscrm.InlineEditDataServiceProxy.get_instanceIsDisposed = function() {
    var $v_0 = false;
    if (!window.IsTurboForm) $v_0 = Mscrm.InlineEditDataService.get_dataService().get_isDisposed();
    return $v_0
};
Mscrm.InlineEditDataServiceProxy.get_processControlClientApiUserHandler = function() {
    var $v_0 = null;
    if (!window.IsTurboForm) $v_0 = Mscrm.InlineEditDataService.get_processControlClientApiUserHandler();
    return $v_0
};
Mscrm.InlineEditDataServiceProxy.set_processControlClientApiUserHandler = function(value) {
    !window.IsTurboForm && Mscrm.InlineEditDataService.set_processControlClientApiUserHandler(value);
    return value
};
Mscrm.InlineEditUtilitiesProxy.registerClass("Mscrm.InlineEditUtilitiesProxy");
Mscrm.InlineEditDataServiceProxy.registerClass("Mscrm.InlineEditDataServiceProxy")