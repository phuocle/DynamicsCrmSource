Type.registerNamespace('Mscrm');

Mscrm.Notification = function(id, severity, source, text, order, plaintext) {
    this.Id = id;
    this.Severity = severity;
    this.Source = source;
    this.Text = text;
    this.Order = order;
    this.Plaintext = plaintext;
    this.IsBusinessNotification = false;
}


Mscrm.NotificationSeverity = function() {
}


Mscrm.NotificationSource = function() {
}


Type.registerNamespace('Mscrm.InternalUtilities');

Mscrm.InternalUtilities.ClientApiUtility = function() {
}
Mscrm.InternalUtilities.ClientApiUtility.get_deprecatedApis = function() {
    if (!Mscrm.InternalUtilities.ClientApiUtility.$3) {
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['gridRow.getdata'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['gridrowdata.getentity'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.alertdialog'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.confirmdialog'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.isactivitytype'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.openentityform'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.openquickcreate'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.openwebresource'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.data.entity.save'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['entity.getdataxml'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getquerystringparameters'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.gettimezoneOffsetminutes'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getuserid'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getuserlcid'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getusername'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getuserroles'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getisautosaveenabled'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getorglcid'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.page.context.getorguniquename'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['addonkeypress'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['removeonkeypress'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['showautocomplete'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['hideautocomplete'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.mobile.offline.retrieverecord'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.mobile.offline.createrecord'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.mobile.offline.updaterecord'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.mobile.offline.deleterecord'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.mobile.offline.retrievemultiplerecords'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.getbarcodevalue'] = true;
        Mscrm.InternalUtilities.ClientApiUtility.$3['xrm.utility.getcurrentposition'] = true;
    }
    return Mscrm.InternalUtilities.ClientApiUtility.$3;
}
Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback = function(response) {
    var $v_0 = response.errorCode;
    var $v_1 = response.message;
    var $v_2 = response.debugMessage;
    Mscrm.InternalUtilities.ClientApiUtility.handleError($v_0, $v_1, $v_2);
}
Mscrm.InternalUtilities.ClientApiUtility.actionCompleteCallback = function(response) {
}
Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback = function(response) {
    var $v_0 = response.get_organizationServiceFault();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Mscrm.InternalUtilities.ClientApiUtility.handleError($v_1, response.get_message(), $v_0.get_responseOuterXml(), $v_0);
    }
}
Mscrm.InternalUtilities.ClientApiUtility.handleError = function(errorCode, customErrorMessage, serializedException, serviceFault) {
    var $v_0 = '0x' + ((errorCode < 0) ? (4294967295 + errorCode + 1) : errorCode).toString(16).toUpperCase();
    if ($v_0.startsWith('0x8004E1')) {
        switch ($v_0) {
            case '0x8004E108':
            case '0x8004E121':
            case '0x8004E117':
            case '0x8004E123':
            case '0x8004E122':
            case '0x8004E113':
                customErrorMessage = Xrm.Internal.getErrorMessage(errorCode);
                break;
            default:
                customErrorMessage = Xrm.Internal.getErrorMessage(-2147163904);
                break;
        }
    }
    else {
        switch (errorCode) {
            case -2147220891:
            case -2147204303:
            case -2146955251:
            case -2146955249:
            case -2146955250:
            case -2147157627:
            case -2147087968:
            case -2147088287:
            case -2147087986:
                break;
            default:
                var $v_1 = Xrm.Internal.getErrorMessage(errorCode);
                if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
                    customErrorMessage = $v_1;
                }
                break;
        }
    }
    Xrm.Internal.openErrorDialog(errorCode, customErrorMessage, serializedException, serviceFault);
}
Mscrm.InternalUtilities.ClientApiUtility.getRootWindowDocument = function() {
    var $v_0 = window.parent;
    var $v_1 = $v_0.parent;
    while ($v_1 !== $v_0) {
        $v_0 = $v_1;
        $v_1 = $v_0.parent;
    }
    return $v_1.document;
}
Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog = function(apiName) {
    try {
        var $v_0 = {};
        var $v_1 = Xrm.Utility.getGlobalContext();
        $v_0['apiName'] = apiName;
        $v_0['client'] = $v_1.client.getClient();
        if (Mscrm.InternalUtilities.ClientApiUtility.get_deprecatedApis()[apiName.toLowerCase()]) {
            $v_0['isDeprecating'] = true;
        }
        else {
            $v_0['isDeprecating'] = false;
        }
        $v_0['userId'] = $v_1.userSettings.userId;
        Xrm.Internal.addMetric('clientapi', $v_0);
    }
    catch ($v_2) {
    }
}
Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors = function(apiName, ex) {
    try {
        var $v_0 = {};
        var $v_1 = Xrm.Utility.getGlobalContext();
        $v_0['agent'] = navigator.userAgent;
        $v_0['apiName'] = apiName;
        $v_0['callStack'] = ex.stack;
        $v_0['client'] = $v_1.client.getClient();
        $v_0['errorMessage'] = ex.message;
        $v_0['languageId'] = $v_1.organizationSettings.languageId;
        $v_0['userId'] = $v_1.userSettings.userId;
        Xrm.Internal.addMetric('clientapierror', $v_0);
    }
    catch ($v_2) {
    }
}
Mscrm.InternalUtilities.ClientApiUtility.fetchCurrentCorrelationToken = function(tokenContext) {
    tokenContext.val = '';
    try {
        var $v_0 = window.top.CurrentResponseId;
        tokenContext.val = (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) ? '' : 'XHRResponse';
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(tokenContext.val)) {
            $v_0 = window.top.CurrentHandlerId;
            tokenContext.val = (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) ? '' : 'XMLHandler';
        }
        return $v_0;
    }
    catch ($v_1) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApiService.FetchCurrentCorrelationToken', $v_1);
        return '';
    }
}
Mscrm.InternalUtilities.ClientApiUtility.stampCurrentReqWithCorrelationToken = function(request) {
    try {
        var $v_0, $v_1;
        var $$t_4, $$t_5;
        $v_0 = (($$t_5 = Mscrm.InternalUtilities.ClientApiUtility.fetchCurrentCorrelationToken(($$t_4 = {'val': $v_1}))), $v_1 = $$t_4.val, $$t_5);
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
            request.setRequestHeader('Request-Id', $v_0);
        }
    }
    catch ($v_2) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApiService.StampCurrentReqWithCorrelationToken', $v_2);
    }
}
Mscrm.InternalUtilities.ClientApiUtility.saveCurrentResponseToken = function(request) {
    try {
        var $v_0 = request.getResponseHeader('REQ_ID');
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
            window.top.CurrentResponseId = $v_0;
        }
    }
    catch ($v_1) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApiService.SaveCurrentResponseToken', $v_1);
    }
}
Mscrm.InternalUtilities.ClientApiUtility.clearCurrentCorrelationToken = function(tokenName) {
    try {
        delete window.top[tokenName];
    }
    catch ($v_0) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApiService.ClearCurrentCorrelationToken', $v_0);
    }
}
Mscrm.InternalUtilities.ClientApiUtility.saveCurrentHandlerCorrelationId = function(currHandlerId) {
    try {
        Mscrm.InternalUtilities.ClientApiUtility.clearCurrentCorrelationToken('CurrentResponseId');
        window.top.CurrentHandlerId = currHandlerId;
    }
    catch ($v_0) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApiService.SaveCurrentHandlerCorrelationId', $v_0);
    }
}


Type.registerNamespace('Xrm');

Xrm.IBusinessRuleNotificationProvider = function() {}
Xrm.IBusinessRuleNotificationProvider.registerInterface('Xrm.IBusinessRuleNotificationProvider');


Xrm.DateFormattingInfo = function() {}


Xrm.EntityListPageInput = function() {}


Xrm.PageInput = function() {}


Xrm.GridType = function() {}
Xrm.GridType.prototype = {
    none: 0, 
    homepage: 1, 
    associated: 2, 
    subGrid: 3
}
Xrm.GridType.registerEnum('Xrm.GridType', false);


Xrm.AlertDialogStrings = function() {}


Xrm.ConfirmDialogStrings = function() {}


Xrm.XrmEntityRelationship = function() {}


Xrm.IXrmCollectionItem = function() {}
Xrm.IXrmCollectionItem.registerInterface('Xrm.IXrmCollectionItem');


Xrm.BeginSecureSessionResponseCode = function() {}
Xrm.BeginSecureSessionResponseCode.prototype = {
    success: 0, 
    unexpectedError: 1, 
    authorityNotFound: 2, 
    invalidResource: 3, 
    invalidDomain: 4, 
    unsupportedPlatform: 5, 
    featureDisabled: 6
}
Xrm.BeginSecureSessionResponseCode.registerEnum('Xrm.BeginSecureSessionResponseCode', false);


Xrm.ChartPaneMode = function() {}
Xrm.ChartPaneMode.prototype = {
    collapsed: 0, 
    defaultMode: 1, 
    expanded: 2, 
    resizeMode: 3, 
    none: 4
}
Xrm.ChartPaneMode.registerEnum('Xrm.ChartPaneMode', false);


Xrm.BusinessProcessFlowInstanceState = function() {}
Xrm.BusinessProcessFlowInstanceState.prototype = {
    active: 0, 
    inactive: 1
}
Xrm.BusinessProcessFlowInstanceState.registerEnum('Xrm.BusinessProcessFlowInstanceState', false);


Xrm.BusinessProcessFlowInstanceStatus = function() {}
Xrm.BusinessProcessFlowInstanceStatus.prototype = {
    active: 1, 
    finished: 2, 
    aborted: 3
}
Xrm.BusinessProcessFlowInstanceStatus.registerEnum('Xrm.BusinessProcessFlowInstanceStatus', false);


Xrm.DataLoadState = function() {}
Xrm.DataLoadState.prototype = {
    none: 0, 
    initialLoad: 1, 
    save: 2, 
    refresh: 3
}
Xrm.DataLoadState.registerEnum('Xrm.DataLoadState', false);


Xrm.EntityRelationshipRoleType = function() {}
Xrm.EntityRelationshipRoleType.prototype = {
    none: -1, 
    referencing: 1, 
    associationEntity: 2
}
Xrm.EntityRelationshipRoleType.registerEnum('Xrm.EntityRelationshipRoleType', false);


Xrm.EntityRelationshipType = function() {}
Xrm.EntityRelationshipType.prototype = {
    none: -1, 
    oneToMany: 0, 
    manyToMany: 1
}
Xrm.EntityRelationshipType.registerEnum('Xrm.EntityRelationshipType', false);


Xrm.FormDataAttributePrivileges = function() {}
Xrm.FormDataAttributePrivileges.prototype = {
    none: 0, 
    create: 1, 
    read: 2, 
    update: 4
}
Xrm.FormDataAttributePrivileges.registerEnum('Xrm.FormDataAttributePrivileges', true);


Xrm.FormFactor = function() {}
Xrm.FormFactor.prototype = {
    unknown: 0, 
    desktop: 1, 
    tablet: 2, 
    phone: 3
}
Xrm.FormFactor.registerEnum('Xrm.FormFactor', false);


Xrm.FormType = function() {}
Xrm.FormType.prototype = {
    undefined: 0, 
    create: 1, 
    update: 2, 
    readOnly: 3, 
    disabled: 4, 
    quickCreate: 5, 
    bulkEdit: 6, 
    readOptimized: 11, 
    dialog: 12
}
Xrm.FormType.registerEnum('Xrm.FormType', false);


Xrm.ProcessResponse = function() {}
Xrm.ProcessResponse.prototype = {
    success: 0, 
    invalid: 1, 
    unreachable: 2, 
    noPermission: 3, 
    deactivated: 4, 
    branch: 5, 
    stageGate: 6, 
    beginning: 7, 
    end: 8, 
    complete: 9, 
    crossEntity: 10, 
    dirtyForm: 11
}
Xrm.ProcessResponse.registerEnum('Xrm.ProcessResponse', false);


Xrm.ProcessState = function() {}
Xrm.ProcessState.prototype = {
    complete: 0, 
    incomplete: 1
}
Xrm.ProcessState.registerEnum('Xrm.ProcessState', false);


Xrm.ProcessStatus = function() {}
Xrm.ProcessStatus.prototype = {
    inactive: 0, 
    active: 1
}
Xrm.ProcessStatus.registerEnum('Xrm.ProcessStatus', false);


Xrm.SaveMode = function() {}
Xrm.SaveMode.prototype = {
    invalid: -1, 
    none: 0, 
    save: 1, 
    saveAndClose: 2, 
    deleteRecord: 3, 
    load: 4, 
    deactivate: 5, 
    reactivate: 6, 
    send: 7, 
    disqualify: 15, 
    qualify: 16, 
    assign: 47, 
    faxSend: 55, 
    saveAsCompleted: 58, 
    saveAndNew: 59, 
    recalculateRecord: 66, 
    realignFiscalDates: 67, 
    convertWorkflowType: 68, 
    autoSave: 70
}
Xrm.SaveMode.registerEnum('Xrm.SaveMode', false);


Xrm.StepType = function() {}
Xrm.StepType.prototype = {
    field: 0, 
    action: 1, 
    flow: 2
}
Xrm.StepType.registerEnum('Xrm.StepType', false);


Xrm.StepProgress = function() {}
Xrm.StepProgress.prototype = {
    none: 0, 
    processing: 1, 
    completed: 2, 
    failure: 3, 
    invalid: 4, 
    disabled: 5
}
Xrm.StepProgress.registerEnum('Xrm.StepProgress', false);


Xrm.EntityFormOptions = function() {
    this.useQuickCreateForm = true;
    this.openInNewWindow = false;
    this.width = Number.NaN;
    this.height = Number.NaN;
}


Xrm.KBSearchResult = function() {}


Xrm.DialogOptions = function() {
    this.width = Number.NaN;
    this.height = Number.NaN;
    this.left = Number.NaN;
    this.top = Number.NaN;
    this.openInNewWindow = false;
}


Xrm.FormDataAttributePrivilege = function(privileges) {
    this.canCreate = !!(privileges & 1);
    this.canRead = !!(privileges & 2);
    this.canUpdate = !!(privileges & 4);
}


Xrm.LookupObject = function() {}


Xrm.LookupOptions = function() {}


Xrm.OptionSetItem = function(value, text) {
    this.value = value;
    this.text = text;
}


Xrm.RelationshipReference = function(name, attributeName, ordinal, relationshipType) {
    this.name = name;
    this.attributeName = attributeName;
    this.ordinal = ordinal;
    this.relationshipType = relationshipType;
}


Xrm.SaveOptions = function() {
    this.useSchedulingEngine = true;
    this.isProcessControlNavigation = false;
    this.saveMode = 0;
}


Xrm.WindowOptions = function() {
    this.width = Number.NaN;
    this.height = Number.NaN;
}


Xrm.OpenFileMode = function() {}
Xrm.OpenFileMode.prototype = {
    open: 1, 
    save: 2
}
Xrm.OpenFileMode.registerEnum('Xrm.OpenFileMode', false);


Xrm.ActionCollectionBase = function() {
}
Xrm.ActionCollectionBase.prototype = {
    actions: null,
    message: null
}


Xrm.BusinessRuleNotificationBase = function() {
}
Xrm.BusinessRuleNotificationBase.prototype = {
    uniqueId: null,
    messages: null,
    priority: 0,
    notificationLevel: null,
    actions: null
}


Xrm.XrmControlEmailEngagementActionsControl = function() {
    Xrm.XrmControlEmailEngagementActionsControl.initializeBase(this);
}


Xrm.XrmControlText = function() {
    Xrm.XrmControlText.initializeBase(this);
}


Xrm.XrmControlRoutedGrid = function() {
    Xrm.XrmControlRoutedGrid.initializeBase(this);
}
Xrm.XrmControlRoutedGrid.prototype = {
    
    getFilter: function() {
        return this.get_currentGridControl().getFilter();
    },
    
    getTotalRecordCount: function() {
        return this.get_currentGridControl().getTotalRecordCount();
    },
    
    getRows: function() {
        return this.get_currentGridControl().getRows();
    },
    
    getSelectedRows: function() {
        return this.get_currentGridControl().getSelectedRows();
    },
    
    addOnRecordSelect: function(handler) {
        this.get_currentGridControl().addOnRecordSelect(handler);
    },
    
    removeOnRecordSelect: function(handler) {
        this.get_currentGridControl().removeOnRecordSelect(handler);
    },
    
    fireOnRecordSelect: function() {
        this.get_currentGridControl().fireOnRecordSelect();
    },
    
    getGridType: function() {
        return this.get_currentGridControl().getGridType();
    }
}


Xrm.XrmEncoding = function() {
}


Xrm.Device = function() {
}
Xrm.Device.captureImage = function(options) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Device.CaptureImage');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Device.captureAudio = function() {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Device.CaptureAudio');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Device.captureVideo = function() {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Device.CaptureVideo');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Device.pickFile = function(options) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Device.PickFile');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Device.getBarcodeValue = function() {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Device.GetBarcodeValue');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Device.getCurrentPosition = function() {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Device.GetCurrentPosition');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}


Xrm.XrmDialog = function() {
}


Xrm.XrmForm = function() {
}
Xrm.XrmForm.prototype = {
    context: null,
    data: null,
    grid: null,
    ui: null,
    
    getControl: function(parameter) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.ui)) {
            return this.ui.controls.get(parameter);
        }
        return null;
    },
    
    getAttribute: function(parameter) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.data)) {
            return this.data.entity.attributes.get(parameter);
        }
        return null;
    }
}


Xrm.XrmInternal = function() {
    this.messages = Xrm.Internal.messages;
    this.trace = Xrm.Internal.trace;
}
Xrm.XrmInternal.$i = function($p0) {
    return (!IsNull($p0.get_organizationServiceFault())) ? $p0.get_organizationServiceFault().get_errorCode().toString() : 'UnknownError';
}
Xrm.XrmInternal.prototype = {
    
    getServiceDirectory: function() {
        return Xrm.XrmInternal.$Z;
    },
    
    setServiceDirectory: function(serviceDirectory) {
        Xrm.XrmInternal.$Z = serviceDirectory;
    },
    
    getAvailableClients: function() {
        var $v_0 = [ 'Mobile', 'Outlook', 'Web', 'UnifiedServiceDesk' ];
        return $v_0;
    },
    
    getAvailableFormFactors: function() {
        var $v_0 = [ 0, 1, 2, 3 ];
        return $v_0;
    },
    
    getMaxSuggestionsCount: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Number, String);
        $v_0.resolve(10);
        return $v_0.promise();
    },
    
    getUserLicensesUsed: function() {
        return this.getTenantInfo('UserLicensesUsed');
    },
    
    getIsPaid: function() {
        return this.getTenantInfo('IsPaid');
    },
    
    getOrgType: function() {
        return this.getTenantInfo('OrgType');
    },
    
    getTenantInfo: function(str) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(String, String);
        var $$t_8 = this;
        Xrm.Internal.messages.retrieveTenantInfo().done(function($p1_0) {
            var $v_1 = ($p1_0).tenantInfo;
            var $v_2 = $v_1.indexOf(str);
            var $v_3 = null;
            if ($v_2 > -1) {
                var $v_4 = $v_1.split('\"');
                for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                    if ($v_4[$v_5] === str) {
                        $v_3 = $v_4[$v_5 + 2];
                        break;
                    }
                }
                $v_0.resolve($v_3);
            }
        });
        return $v_0.promise();
    },
    
    getTenantProperties: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(String, String);
        var $$t_5 = this, $$t_6 = this;
        Xrm.Internal.messages.retrieveTenantInfo().then(function($p1_0) {
            var $v_1 = ($p1_0).tenantInfo;
            $v_0.resolve($v_1);
        }, function($p1_0) {
            var $v_2 = Xrm.XrmInternal.$i($p1_0);
            $v_0.reject($v_2);
        });
        return $v_0.promise();
    },
    
    setGuidedHelpProperties: function(value) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(String, String);
        var $$t_5 = this, $$t_6 = this;
        Xrm.Internal.messages.toggleGuidedHelp(value).then(function($p1_0) {
            $v_0.resolve('true');
        }, function($p1_0) {
            var $v_1 = Xrm.XrmInternal.$i($p1_0);
            $v_0.reject($v_1);
        });
        return $v_0.promise();
    }
}


Xrm.XrmNavigations = function() {
}


Xrm.XrmOffline = function() {
}


Xrm.XrmUtility = function() {
}


Xrm.XrmPanel = function() {
}


Xrm.JavaScriptConsoleTraceListener = function($p0) {
    this.$c_0 = $p0;
}
Xrm.JavaScriptConsoleTraceListener.initialize = function(trace) {
    if (!Xrm.JavaScriptConsoleTraceListener.$2) {
        var $v_0 = window.console;
        if ($v_0 && $v_0.log && $v_0.error) {
            var $v_1 = !!$v_0.warn;
            Xrm.JavaScriptConsoleTraceListener.$2 = new Xrm.JavaScriptConsoleTraceListener($v_1);
        }
    }
    try {
        var $v_2 = document.cookie;
        if (Xrm.JavaScriptConsoleTraceListener.$2 && $v_2 && $v_2.indexOf('CrmEnableConsoleTrace=1') >= 0) {
            trace.addListener(Xrm.JavaScriptConsoleTraceListener.$2);
        }
    }
    catch ($v_3) {
    }
}
Xrm.JavaScriptConsoleTraceListener.get_instance = function() {
    return Xrm.JavaScriptConsoleTraceListener.$2;
}
Xrm.JavaScriptConsoleTraceListener.prototype = {
    $c_0: false,
    
    log: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [ format ].concat(args));
        console.log('%s', $v_0);
    },
    
    warning: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [ format ].concat(args));
        if (this.$c_0) {
            console.warn('%s', $v_0);
        }
        else {
            console.log('WARNING %s', $v_0);
        }
    },
    
    error: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [ format ].concat(args));
        console.error('%s', $v_0);
    }
}


Xrm.ScopedServiceDirectory = function(parentDirectory) {
    this.$9_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)))();
    if (_Script.isNullOrUndefined(parentDirectory)) {
        throw Error.argumentNull('parentDirectory');
    }
    this.$K_0 = parentDirectory;
}
Xrm.ScopedServiceDirectory.prototype = {
    $K_0: null,
    $6_0: null,
    $8_0: false,
    
    register: function(TService, implementation) {
        if (this.$8_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        if (!_Script.isNullOrUndefined(this.$9_0.get_item($v_0))) {
            if (this.$9_0.get_item($v_0).contains(implementation)) {
                var $v_1 = String.format('Service {0} already has an implementation in this scope', $v_0);
                throw Error.invalidOperation($v_1);
            }
        }
        this.$K_0.register(TService, implementation);
        if (_Script.isNullOrUndefined(this.$9_0.get_item($v_0))) {
            this.$6_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
            this.$6_0.add(implementation);
            this.$9_0.set_item($v_0, this.$6_0);
        }
        else {
            this.$6_0 = this.$9_0.get_item($v_0);
            this.$6_0.add(implementation);
        }
        Xrm.Internal.trace.logT(Xrm.ScopedServiceDirectory, 'Registered implementation for service {1} of type {0}', Object.getType(implementation).getName(), $v_0);
    },
    
    unregister: function(TService, implementation) {
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        var $v_1 = this.$9_0.get_item($v_0);
        if (_Script.isNullOrUndefined($v_1)) {
            var $v_2 = String.format('Service {0} is not registered with this instance', $v_0);
            throw Error.invalidOperation($v_2);
        }
        if (!$v_1.contains(implementation)) {
            var $v_3 = String.format('This implementation is not registered for service {0}', $v_0);
            throw Error.invalidOperation($v_3);
        }
        this.$K_0.unregister(TService, implementation);
        $v_1.remove(implementation);
        if (!$v_1.get_Count()) {
            this.$9_0.remove($v_0);
        }
        Xrm.Internal.trace.logT(Xrm.ScopedServiceDirectory, 'Unregistered implementation for service {1} of type {0}', Object.getType(implementation).getName(), $v_0);
    },
    
    find: function(TService) {
        if (this.$8_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        return this.$K_0.find(TService);
    },
    
    dispose: function() {
        this.$8_0 = true;
    }
}


Xrm.StringBuilderTraceListener = function(log, warning, error) {
    if (!log) {
        throw Error.argumentNull('log');
    }
    if (!warning) {
        throw Error.argumentNull('warning');
    }
    if (!error) {
        throw Error.argumentNull('error');
    }
    this.$J_0 = log;
    this.$L_0 = warning;
    this.$H_0 = error;
}
Xrm.StringBuilderTraceListener.create = function() {
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = new Sys.StringBuilder();
    var $v_2 = new Sys.StringBuilder();
    return new Xrm.StringBuilderTraceListener($v_0, $v_1, $v_2);
}
Xrm.StringBuilderTraceListener.prototype = {
    $J_0: null,
    $L_0: null,
    $H_0: null,
    
    log: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [ format ].concat(args));
        this.$J_0.appendLine($v_0);
    },
    
    warning: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [ format ].concat(args));
        this.$L_0.appendLine($v_0);
    },
    
    error: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [ format ].concat(args));
        this.$H_0.appendLine($v_0);
    },
    
    clear: function() {
        this.$J_0.clear();
        this.$L_0.clear();
        this.$H_0.clear();
    },
    
    get_logBuilder: function() {
        return this.$J_0;
    },
    
    get_warningBuilder: function() {
        return this.$L_0;
    },
    
    get_errorBuilder: function() {
        return this.$H_0;
    }
}


Xrm.XrmPerformance = function() {
}
Xrm.XrmPerformance.measureTime = function(actionName, action) {
    var $v_0 = Xrm.Internal.startMetricsStopwatch(actionName);
    $v_0.start();
    action();
    $v_0.stop();
    return $v_0.get_elapsedMilliseconds();
}


Xrm.XrmSdkMessages = function() {
}
Xrm.XrmSdkMessages.prototype = {
    $b_0: null,
    
    get_$1_0: function() {
        return this.$b_0 || (this.$b_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService(Xrm.Page.context.getClientUrl()));
    },
    
    addDynamicProperty: function(regardingObject, dynamicProperty) {
        var $v_0 = new Xrm.Gen.AddDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$1_0().execute($v_0);
    },
    
    addItemCampaign: function(campaignId, entityId, entityLogicalName) {
        var $v_0 = new Xrm.Gen.AddItemCampaignRequest(campaignId, entityId, entityLogicalName);
        return this.get_$1_0().execute($v_0);
    },
    
    addItemCampaignActivity: function(campaignActivityId, itemId, entityLogicalName) {
        var $v_0 = new Xrm.Gen.AddItemCampaignActivityRequest(campaignActivityId, itemId, entityLogicalName);
        return this.get_$1_0().execute($v_0);
    },
    
    addItem: function(campaignId, entityId, objectTypeCode) {
        var $v_0 = new Xrm.Sdk.AddItemRequest(campaignId, entityId, objectTypeCode);
        return this.get_$1_0().execute($v_0);
    },
    
    addRecurrence: function(entity, appointmentId) {
        var $v_0 = new Xrm.Gen.AddRecurrenceRequest(entity, appointmentId);
        return this.get_$1_0().execute($v_0);
    },
    
    applyRecordCreationAndUpdateRule: function(entity) {
        var $v_0 = new Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest(entity);
        return this.get_$1_0().execute($v_0);
    },
    
    assign: function(targetEntityName, targetEntityId, assigneeEntityName, assigneeEntityId) {
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Xrm.Objects.EntityReference(assigneeEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(assigneeEntityId));
        var $v_2 = new Xrm.Gen.AssignRequest($v_0, $v_1);
        return this.get_$1_0().execute($v_2);
    },
    
    assignMultiple: function(records, assigneeEntityName, assigneeEntityId) {
        var $v_0 = new Array(records.length);
        for (var $v_2 = 0; $v_2 < records.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.AssignRequest(new Xrm.Objects.EntityReference(records[$v_2].LogicalName, records[$v_2].Id), new Xrm.Objects.EntityReference(assigneeEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(assigneeEntityId)));
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    assignAllRecords: function(oldOwnerId, oldOwnerType, newOwnerId, newOwnerType) {
        var $v_0 = new Xrm.Gen.AssignAllRecordsTeamRequest(oldOwnerId, oldOwnerType, newOwnerId, newOwnerType);
        return this.get_$1_0().execute($v_0);
    },
    
    associate: function(target, relationshipName, relatedEntities) {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship(relationshipName);
        if (target.LogicalName === relatedEntities[0].LogicalName) {
            $v_0.set_primaryEntityRole(0);
        }
        var $v_1 = new Xrm.Gen.AssociateRequest(target, $v_0, relatedEntities);
        return this.get_$1_0().execute($v_1);
    },
    
    book: function(entity) {
        var $v_0 = new Xrm.Gen.BookRequest(entity, true, true);
        return this.get_$1_0().execute($v_0);
    },
    
    calculateActualOpportunityValue: function(guid) {
        var $v_0 = new Xrm.Sdk.CalculateActualValueOpportunityRequest(guid);
        return this.get_$1_0().execute($v_0);
    },
    
    cancelSalesOrder: function(orderClose, status) {
        var $v_0 = new Xrm.Gen.CancelSalesOrderRequest(orderClose, status);
        return this.get_$1_0().execute($v_0);
    },
    
    cloneContract: function(contractId, includeCanceledLines) {
        var $v_0 = new Xrm.Gen.CloneContractRequest(new Microsoft.Crm.Client.Core.Framework.Guid(contractId), includeCanceledLines);
        return this.get_$1_0().execute($v_0);
    },
    
    cloneProduct: function(source) {
        var $v_0 = new Xrm.Gen.CloneProductRequest(source);
        return this.get_$1_0().execute($v_0);
    },
    
    cloneMobileOfflineProfile: function(source) {
        var $v_0 = new Xrm.Gen.CloneMobileOfflineProfileRequest(source);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveActiveStageRecord: function(source) {
        var $v_0 = new Xrm.Gen.RetrieveActiveStageRecordRequest(source);
        return this.get_$1_0().execute($v_0);
    },
    
    createKnowledgeArticleVersion: function(source, isMajor) {
        var $v_0 = new Xrm.Gen.CreateKnowledgeArticleVersionRequest(source, isMajor);
        return this.get_$1_0().execute($v_0);
    },
    
    createKnowledgeArticleTranslation: function(source, language, isMajor) {
        var $v_0 = new Xrm.Gen.CreateKnowledgeArticleTranslationRequest(source, language, isMajor);
        return this.get_$1_0().execute($v_0);
    },
    
    publishKnowledgeArticle: function(entity, copyRelatedProductFromAssociatedPrimary, copyRelatedCategoryFromAssociatedPrimary, publishApprovedRelatedTranslations) {
        var $v_0 = new Xrm.Gen.PublishKnowledgeArticleRequest(entity, copyRelatedProductFromAssociatedPrimary, copyRelatedCategoryFromAssociatedPrimary, publishApprovedRelatedTranslations);
        return this.get_$1_0().execute($v_0);
    },
    
    closeIncident: function(incidentResolution, statusCode) {
        var $v_0 = new Xrm.Gen.CloseIncidentRequest(incidentResolution, statusCode);
        return this.get_$1_0().execute($v_0);
    },
    
    closeQuote: function(quoteClose, status) {
        var $v_0 = new Xrm.Gen.CloseQuoteRequest(quoteClose, status);
        return this.get_$1_0().execute($v_0);
    },
    
    convertActivity: function(activityId, activityEntityName, targetEntity, targetEntityName, createCampaignResponse) {
        var $v_0 = new Xrm.Gen.ConvertActivityRequest(new Microsoft.Crm.Client.Core.Framework.Guid(activityId), activityEntityName, targetEntity, targetEntityName, createCampaignResponse);
        return this.get_$1_0().execute($v_0);
    },
    
    convertCampaignResponse: function(campaignResponse, entityName, createOpportunityForExistingCustomer, customer, currency, owner) {
        var $v_0 = new Xrm.Gen.ConvertCampaignResponseRequest(campaignResponse, entityName, createOpportunityForExistingCustomer, customer, currency, owner);
        return this.get_$1_0().execute($v_0);
    },
    
    convertProductToKit: function(productId) {
        var $v_0 = new Xrm.Gen.ConvertProductToKitRequest(new Microsoft.Crm.Client.Core.Framework.Guid(productId));
        return this.get_$1_0().execute($v_0);
    },
    
    convertKitToProduct: function(kitId) {
        var $v_0 = new Xrm.Gen.ConvertKitToProductRequest(new Microsoft.Crm.Client.Core.Framework.Guid(kitId));
        return this.get_$1_0().execute($v_0);
    },
    
    convertSalesOrderToInvoice: function(salesOrderId, columnSet) {
        var $v_0 = new Xrm.Gen.ConvertSalesOrderToInvoiceRequest(salesOrderId, columnSet);
        return this.get_$1_0().execute($v_0);
    },
    
    copyCampaign: function(campaignId, saveAsTemplate) {
        var $v_0 = new Xrm.Gen.CopyCampaignRequest(new Microsoft.Crm.Client.Core.Framework.Guid(campaignId), saveAsTemplate);
        return this.get_$1_0().execute($v_0);
    },
    
    copyCampaignResponse: function(campaignResponseObject) {
        var $v_0 = new Xrm.Gen.CopyCampaignResponseRequest(campaignResponseObject);
        return this.get_$1_0().execute($v_0);
    },
    
    create: function(entity) {
        var $v_0 = new Xrm.Gen.CreateRequest(entity);
        return this.get_$1_0().execute($v_0);
    },
    
    createAndAssociate: function(regardingObjectId, regardingObjectTypeCode, associationRelationshipName, article) {
        var $v_0 = new Xrm.Gen.CreateAndAssociateRequest(new Microsoft.Crm.Client.Core.Framework.Guid(regardingObjectId), regardingObjectTypeCode, associationRelationshipName, article);
        return this.get_$1_0().execute($v_0);
    },
    
    associateKnowledgeArticle: function(regardingObjectId, regardingObjectTypeCode, associationRelationshipName, knowledgeArticleId) {
        var $v_0 = new Xrm.Sdk.AssociateKnowledgeArticleRequest(new Microsoft.Crm.Client.Core.Framework.Guid(regardingObjectId), regardingObjectTypeCode, associationRelationshipName, new Microsoft.Crm.Client.Core.Framework.Guid(knowledgeArticleId));
        return this.get_$1_0().execute($v_0);
    },
    
    disassociateKnowledgeArticle: function(regardingObjectId, regardingObjectTypeCode, associationRelationshipName, knowledgeArticleId) {
        var $v_0 = new Xrm.Sdk.DisassociateKnowledgeArticleRequest(new Microsoft.Crm.Client.Core.Framework.Guid(regardingObjectId), regardingObjectTypeCode, associationRelationshipName, new Microsoft.Crm.Client.Core.Framework.Guid(knowledgeArticleId));
        return this.get_$1_0().execute($v_0);
    },
    
    createEntityFrom: function(parentEntity, targetEntityName, targetFieldType) {
        var $v_0 = new Xrm.Gen.InitializeFromRequest(parentEntity, targetEntityName, targetFieldType);
        return this.get_$1_0().execute($v_0);
    },
    
    createOrder: function(quoteId, columnSet) {
        var $v_0 = new Xrm.Gen.ConvertQuoteToSalesOrderRequest(quoteId, columnSet);
        $v_0.processInstanceId = this.$a_0();
        return this.get_$1_0().execute($v_0);
    },
    
    createProducts: function(entities, parentEntity) {
        var $v_0 = new Xrm.Gen.CreateProductsRequest(entities, parentEntity);
        return this.get_$1_0().execute($v_0);
    },
    
    deleteEntity: function(targetEntityName, targetEntityId) {
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Xrm.Gen.DeleteRequest($v_0);
        return this.get_$1_0().execute($v_1);
    },
    
    deleteEntityMultiple: function(targetEntityName, targetEntityIds) {
        var $v_0 = new Array(targetEntityIds.length);
        for (var $v_2 = 0; $v_2 < targetEntityIds.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.DeleteRequest(new Xrm.Objects.EntityReference(targetEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityIds[$v_2])));
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    disassociate: function(target, relationship, relatedEntities) {
        var $v_0 = new Xrm.Gen.DisassociateRequest(target, relationship, relatedEntities);
        return this.get_$1_0().execute($v_0);
    },
    
    execute: function(request) {
        return this.get_$1_0().execute(request);
    },
    
    followEmailAttachment: function(activityMimeAttachmentId) {
        var $v_0 = new Xrm.Gen.FollowEmailAttachmentRequest(activityMimeAttachmentId);
        return this.get_$1_0().execute($v_0);
    },
    
    getTrackingTokenEmail: function(trackingToken) {
        var $v_0 = new Xrm.Gen.GetTrackingTokenEmailRequest(trackingToken);
        return this.get_$1_0().execute($v_0);
    },
    
    getDefaultPriceLevel: function(entityLogicalName, columnNames) {
        var $v_0 = new Xrm.Gen.GetDefaultPriceLevelRequest(entityLogicalName, columnNames);
        return this.get_$1_0().execute($v_0);
    },
    
    getInvoiceProductsFromOpportunity: function(opportunityId, invoiceId) {
        var $v_0 = new Xrm.Gen.GetInvoiceProductsFromOpportunityRequest(new Microsoft.Crm.Client.Core.Framework.Guid(opportunityId), new Microsoft.Crm.Client.Core.Framework.Guid(invoiceId));
        return this.get_$1_0().execute($v_0);
    },
    
    getValidStatusTransition: function(incidentId, statusCode) {
        var $v_0 = new Xrm.Gen.GetValidStatusTransitionRequest(new Microsoft.Crm.Client.Core.Framework.Guid(incidentId), statusCode);
        return this.get_$1_0().execute($v_0);
    },
    
    grantAccess: function(target, principalAccess) {
        var $v_0 = new Xrm.Sdk.GrantAccessRequest(target, principalAccess);
        return this.get_$1_0().execute($v_0);
    },
    
    canUserSendEmail: function() {
        var $v_0 = new Xrm.Gen.CanUserSendEmailRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    inviteUser: function(userId) {
        var $v_0 = new Xrm.Gen.InviteUserRequest(new Microsoft.Crm.Client.Core.Framework.Guid(userId));
        return this.get_$1_0().execute($v_0);
    },
    
    isPartnerSolutionInstalled: function(solutionName) {
        var $v_0 = new Xrm.Gen.IsPartnerSolutionInstalledRequest(solutionName);
        return this.get_$1_0().execute($v_0);
    },
    
    lockInvoicePricing: function(invoiceId) {
        var $v_0 = new Xrm.Gen.LockInvoicePricingRequest(new Microsoft.Crm.Client.Core.Framework.Guid(invoiceId));
        return this.get_$1_0().execute($v_0);
    },
    
    loseOpportunity: function(opportunityClose, statusCode) {
        var $v_0 = new Xrm.Gen.LoseOpportunityRequest(opportunityClose, statusCode);
        return this.get_$1_0().execute($v_0);
    },
    
    modifyAccess: function(target, principalAccess) {
        var $v_0 = new Xrm.Sdk.ModifyAccessRequest(target, principalAccess);
        return this.get_$1_0().execute($v_0);
    },
    
    executeQuickFind: function(searchText, entityGroupName, entityNames, appId) {
        var $v_0 = null;
        if (typeof(appId) !== 'undefined' && (appId.length)) {
            var $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid(appId);
            if ($v_1 && $v_1 !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) {
                var $v_2 = new Xrm.Objects.EntityReference('AppModule', $v_1);
                $v_0 = new Xrm.Sdk.ExecuteQuickFindRequest(searchText, entityGroupName, entityNames, $v_2);
                return this.get_$1_0().execute($v_0);
            }
        }
        $v_0 = new Xrm.Sdk.ExecuteQuickFindRequest(searchText, entityGroupName, entityNames);
        return this.get_$1_0().execute($v_0);
    },
    
    newDocument: function(fileName, locationId, parentEntityReference, isFolder, folderPath) {
        var $v_0 = new Xrm.Gen.NewDocumentRequest(fileName, locationId, parentEntityReference, isFolder, folderPath);
        $v_0.fileName = fileName;
        $v_0.locationId = locationId;
        $v_0.parentEntityReference = parentEntityReference;
        $v_0.isFolder = isFolder;
        $v_0.folderPath = folderPath;
        return this.get_$1_0().execute($v_0);
    },
    
    overrideDynamicProperty: function(regardingObject, dynamicProperty) {
        var $v_0 = new Xrm.Gen.OverrideDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$1_0().execute($v_0);
    },
    
    overwriteDynamicProperty: function(regardingObject, dynamicProperty) {
        var $v_0 = new Xrm.Gen.OverwriteDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$1_0().execute($v_0);
    },
    
    overrideDynamicProperties: function(regardingObject, propertiesList) {
        var $v_0 = new Array(propertiesList.get_entities().length);
        for (var $v_2 = 0; $v_2 < propertiesList.get_entities().length; $v_2++) {
            if ((('regardingobjectid') in propertiesList.get_entities()[$v_2].get_fields()) && regardingObject.Id.equals((propertiesList.get_entities()[$v_2].get_fields()['regardingobjectid']).Id)) {
                if ((('statecode') in propertiesList.get_entities()[$v_2].get_fields()) && propertiesList.get_entities()[$v_2].get_fields()['statecode'].toString() === '0') {
                    propertiesList.get_entities()[$v_2].get_changedFieldNames().add('basedynamicpropertyid');
                    $v_0[$v_2] = new Xrm.Gen.CreateRequest(propertiesList.get_entities()[$v_2]);
                }
                else {
                    $v_0[$v_2] = new Xrm.Gen.UpdateRequest(propertiesList.get_entities()[$v_2]);
                }
            }
            else {
                propertiesList.get_entities()[$v_2].setValue('regardingobjectid', regardingObject);
                propertiesList.get_entities()[$v_2].get_changedFieldNames().add('basedynamicpropertyid');
                $v_0[$v_2] = new Xrm.Gen.CreateRequest(propertiesList.get_entities()[$v_2]);
            }
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    publishProductHierarchy: function(target) {
        var $v_0 = new Xrm.Gen.PublishProductHierarchyRequest(target);
        return this.get_$1_0().execute($v_0);
    },
    
    populateCard: function(userId) {
        var $v_0 = new Xrm.Gen.PopulateCardRequest(userId);
        return this.get_$1_0().execute($v_0);
    },
    
    qualifyLead: function(leadId, createAccount, createContact, createOpportunity, opportunityCurrencyId, opportunityCustomerId, sourceCampaignId, status, suppressDuplicateDetection) {
        var $v_0 = this.$a_0();
        var $v_1 = new Xrm.Gen.QualifyLeadRequest(leadId, createAccount, createContact, createOpportunity, opportunityCurrencyId, opportunityCustomerId, sourceCampaignId, status, suppressDuplicateDetection, $v_0);
        return this.get_$1_0().execute($v_1);
    },
    
    removeDynamicProperty: function(regardingObject, dynamicProperty) {
        var $v_0 = new Xrm.Gen.RemoveDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$1_0().execute($v_0);
    },
    
    renewContract: function(contractId, status, includeCanceledLines) {
        var $v_0 = new Xrm.Gen.RenewContractRequest(contractId, status, includeCanceledLines);
        return this.get_$1_0().execute($v_0);
    },
    
    renewEntitlement: function(entitlementId, status) {
        var $v_0 = new Xrm.Gen.RenewEntitlementRequest(entitlementId, status);
        return this.get_$1_0().execute($v_0);
    },
    
    reschedule: function(entity) {
        var $v_0 = new Xrm.Gen.RescheduleRequest(entity, true, true);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieve: function(targetEntityName, targetEntityId, columnNames) {
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(columnNames);
        var $v_2 = false;
        var $v_3 = new Xrm.Gen.RetrieveRequest($v_0, $v_1, null, $v_2);
        return this.get_$1_0().execute($v_3);
    },
    
    retrieveAttributeList: function(regardingObjectTypeCode) {
        var $v_0 = new Xrm.Gen.RetrieveAttributeListRequest(regardingObjectTypeCode);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveCardData: function(cardTypeId, additionalParameter) {
        var $v_0 = new Xrm.Gen.RetrieveCardDataRequest(cardTypeId, additionalParameter);
        return this.get_$1_0().execute($v_0);
    },
    
    shouldDisplaySLALimitNotification: function(regardingObjectTypeCode) {
        var $v_0 = new Xrm.Gen.ShouldDisplaySLALimitNotificationRequest(regardingObjectTypeCode);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveAncestors: function(targetEntityName, targetEntityId, columnNames) {
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(columnNames);
        var $v_2 = new Xrm.Sdk.RetrieveAncestorsRequest($v_0, $v_1);
        return this.get_$1_0().execute($v_2);
    },
    
    retrieveProductProperties: function(parentObject) {
        var $v_0 = new Xrm.Gen.RetrieveProductPropertiesRequest(parentObject);
        return this.get_$1_0().execute($v_0);
    },
    
    deleteOpenInstances: function(target, seriesEndDate, stateOfPastInstances) {
        var $v_0 = new Xrm.Gen.DeleteOpenInstancesRequest(target, seriesEndDate, stateOfPastInstances);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveWebClientUserContext: function() {
        return this.get_$1_0().retrieveWebClientUserContext();
    },
    
    retrieveCustomControlManifest: function(customControlUniqueName) {
        return this.get_$1_0().retrieveCustomControlManifest(customControlUniqueName);
    },
    
    retrieveEntityDynamicPropertyDefinitions: function(regardingObject, forDraftRegarding) {
        var $v_0 = new Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest(regardingObject, forDraftRegarding);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveFilteredProcesses: function(entityTypeName) {
        var $v_0 = new Xrm.Gen.RetrieveFilteredProcessesRequest(entityTypeName);
        return this.get_$1_0().execute($v_0);
    },
    
    revertProduct: function(target) {
        var $v_0 = new Xrm.Gen.RevertProductRequest(target);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveMultiple: function(fetchXml) {
        var $v_0 = new Xrm.Gen.RetrieveMultipleRequest(fetchXml);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveUnpublishedMultiple: function(fetchXml) {
        var $v_0 = new Xrm.Gen.RetrieveUnpublishedMultipleRequest(fetchXml);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveEntityMetadata: function(entityLogicalName, languageCode) {
        return this.get_$1_0().retrieveEntityMetadata(entityLogicalName, languageCode);
    },
    
    retrieveMultipleAttributeMetadata: function(query, languageCode) {
        return this.get_$1_0().retrieveMultipleAttributeMetadata(query, languageCode);
    },
    
    revokeAccess: function(target, grantee) {
        var $v_0 = new Xrm.Gen.RevokeAccessRequest(target, grantee);
        return this.get_$1_0().execute($v_0);
    },
    
    sendFax: function(faxId, issueSend) {
        var $v_0 = new Xrm.Gen.SendFaxRequest(faxId, issueSend);
        return this.get_$1_0().execute($v_0);
    },
    
    sendEmail: function(sendEmailId, status) {
        var $v_0 = new Xrm.Gen.SendEmailRequest(sendEmailId, status);
        return this.get_$1_0().execute($v_0);
    },
    
    cancelContract: function(targetEntityId, cancelDate, status) {
        var $v_0 = new Xrm.Gen.CancelContractRequest(new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId), cancelDate, status);
        return this.get_$1_0().execute($v_0);
    },
    
    setState: function(targetEntityName, targetEntityId, state, status) {
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName, new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Xrm.Gen.SetStateRequest($v_0, state, status, true);
        return this.get_$1_0().execute($v_1);
    },
    
    setStateMultiple: function(records, state, status) {
        var $v_0 = new Array(records.length);
        for (var $v_2 = 0; $v_2 < records.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.SetStateRequest(new Xrm.Objects.EntityReference(records[$v_2].LogicalName, records[$v_2].Id), state, status, true);
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    unlockInvoicePricing: function(invoiceId) {
        var $v_0 = new Xrm.Gen.UnlockInvoicePricingRequest(new Microsoft.Crm.Client.Core.Framework.Guid(invoiceId));
        return this.get_$1_0().execute($v_0);
    },
    
    update: function(entity, suppressDuplicateDetection) {
        var $v_0 = new Xrm.Gen.UpdateRequest(entity, suppressDuplicateDetection);
        return this.get_$1_0().execute($v_0);
    },
    
    updateMultiple: function(entities) {
        var $v_0 = new Array(entities.length);
        for (var $v_2 = 0; $v_2 < entities.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.UpdateRequest(entities[$v_2]);
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    updateProductProperties: function(propertyInstanceList) {
        var $v_0 = new Xrm.Gen.UpdateProductPropertiesRequest(propertyInstanceList);
        return this.get_$1_0().execute($v_0);
    },
    
    whoAmI: function() {
        var $v_0 = new Xrm.Gen.WhoAmIRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    winOpportunity: function(opportunityClose, statusCode) {
        var $v_0 = new Xrm.Gen.WinOpportunityRequest(opportunityClose, statusCode);
        return this.get_$1_0().execute($v_0);
    },
    
    checkoutFiles: function(documentRecord, parentEntityReference) {
        var $v_0 = new Xrm.Gen.CheckoutDocumentRequest(documentRecord, parentEntityReference);
        $v_0.entity = documentRecord;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    checkInFiles: function(documentRecord, checkInComments, retainCheckout, parentEntityReference) {
        var $v_0 = new Xrm.Gen.CheckInDocumentRequest(documentRecord, checkInComments, retainCheckout, parentEntityReference);
        $v_0.entity = documentRecord;
        $v_0.checkInComments = checkInComments;
        $v_0.retainCheckout = retainCheckout;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    deleteDocument: function(documentRecords, parentEntityReference) {
        var $v_0 = new Xrm.Gen.DeleteDocumentRequest(documentRecords, parentEntityReference);
        $v_0.entities = documentRecords;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    discardCheckoutFiles: function(documentRecord, parentEntityReference) {
        var $v_0 = new Xrm.Gen.DiscardDocumentCheckoutRequest(documentRecord, parentEntityReference);
        $v_0.entity = documentRecord;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    editDocumentProperties: function(documentRecord, parentEntityReference) {
        var $v_0 = new Xrm.Gen.EditDocumentPropertiesRequest(documentRecord, parentEntityReference);
        $v_0.entity = documentRecord;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    createFolder: function(folderName, parentEntityReference, siteType, validateFolder) {
        var $v_0 = new Xrm.Gen.CreateFolderRequest(folderName, parentEntityReference);
        $v_0.siteType = siteType;
        $v_0.validateFolder = validateFolder;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    uploadFolder: function(content, documentRecord, overwriteExisting, parentEntityReference) {
        var $v_0 = new Xrm.Gen.UploadDocumentRequest(content, documentRecord, overwriteExisting, parentEntityReference);
        return this.get_$1_0().execute($v_0);
    },
    
    retrievePersonalSiteUrl: function() {
        var $v_0 = new Xrm.Gen.RetrievePersonalSiteUrlRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    searchDocument: function(docId, parentEntityReference) {
        var $v_0 = new Xrm.Gen.SearchDocumentRequest(docId, parentEntityReference);
        $v_0.documentId = docId;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    addOrEditLocation: function(locationName, absUrl, relativePath, parentType, parentId, isAddOrEditMode, isCreateFolder, documentId, parentEntityReference) {
        var $v_0 = new Xrm.Gen.AddOrEditLocationRequest(locationName, absUrl, relativePath, parentType, parentId, isAddOrEditMode, isCreateFolder, documentId, parentEntityReference);
        $v_0.locationName = locationName;
        $v_0.absUrl = absUrl;
        $v_0.relativePath = relativePath;
        $v_0.parentType = parentType;
        $v_0.parentId = parentId;
        $v_0.isAddOrEditMode = isAddOrEditMode;
        $v_0.isCreateFolder = isCreateFolder;
        $v_0.documentId = documentId;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    fetchSiteUrl: function(documentId, parentEntityReference) {
        var $v_0 = new Xrm.Gen.FetchSiteUrlRequest(documentId, parentEntityReference);
        $v_0.documentId = documentId;
        $v_0.parentEntityReference = parentEntityReference;
        return this.get_$1_0().execute($v_0);
    },
    
    createDocumentLibraries: function(documentLibraryNames, url) {
        var $v_0 = new Xrm.Gen.CreateDocumentLibrariesRequest(documentLibraryNames, url);
        $v_0.documentLibraryNames = documentLibraryNames;
        $v_0.url = url;
        return this.get_$1_0().execute($v_0);
    },
    
    updateDocumentManagementSettings: function(siteCollection, folderStructureEntity, entityDocManagementXml, validateStatus, validateStatusReason) {
        var $v_0 = new Xrm.Gen.UpdateDocumentManagementSettingsRequest(siteCollection, folderStructureEntity, entityDocManagementXml, validateStatus, validateStatusReason);
        $v_0.siteCollection = siteCollection;
        $v_0.folderStructureEntity = folderStructureEntity;
        $v_0.entityDocMgmtXml = entityDocManagementXml;
        $v_0.validateStatus = validateStatus;
        $v_0.validateStatusReason = validateStatusReason;
        return this.get_$1_0().execute($v_0);
    },
    
    validateUrl: function(sharePointUrls) {
        var $v_0 = new Xrm.Gen.ValidateUrlRequest(sharePointUrls);
        $v_0.sharePointUrls = sharePointUrls;
        return this.get_$1_0().execute($v_0);
    },
    
    migrateToS2S: function(siteUrl) {
        var $v_0 = new Xrm.Gen.MigrateToS2SRequest(siteUrl);
        $v_0.siteUrl = siteUrl;
        return this.get_$1_0().execute($v_0);
    },
    
    updateGlobalSharePointSettings: function(sharePointRealm, isSharePointOnline, useAuthorizationServer) {
        var $v_0 = new Xrm.Gen.UpdateGlobalSharePointSettingsRequest(sharePointRealm, isSharePointOnline, useAuthorizationServer);
        $v_0.sharePointRealm = sharePointRealm;
        $v_0.isSharePointOnline = isSharePointOnline;
        $v_0.useAuthorizationServer = useAuthorizationServer;
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveSharePointGlobalSettings: function() {
        var $v_0 = new Xrm.Gen.RetrieveSharePointGlobalSettingsRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    upgradeToS2S: function() {
        var $v_0 = new Xrm.Gen.UpgradeToS2SRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveSharedPrincipalsAndAccess: function(target) {
        var $v_0 = new Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest(target);
        $v_0.target = target;
        return this.get_$1_0().execute($v_0);
    },
    
    retrievePrincipalAccess: function(target, principal) {
        var $v_0 = new Xrm.Gen.RetrievePrincipalAccessRequest(target, principal);
        $v_0.target = target;
        $v_0.principal = principal;
        return this.get_$1_0().execute($v_0);
    },
    
    exportToExcelOnline: function(view, fetchXml, layoutXml, queryApi, queryParameters) {
        var $v_0 = new Xrm.Gen.ExportToExcelOnlineRequest(view, fetchXml, layoutXml, queryApi, queryParameters);
        $v_0.view = view;
        $v_0.fetchXml = fetchXml;
        $v_0.layoutXml = layoutXml;
        $v_0.queryApi = queryApi;
        $v_0.queryParameters = queryParameters;
        return this.get_$1_0().execute($v_0);
    },
    
    exportTemplateToExcelOnline: function(template, fetchXml, queryApi, queryParameters) {
        var $v_0 = new Xrm.Gen.ExportTemplateToExcelOnlineRequest(template, fetchXml, queryApi, queryParameters);
        $v_0.template = template;
        $v_0.fetchXml = fetchXml;
        $v_0.queryApi = queryApi;
        $v_0.queryParameters = queryParameters;
        return this.get_$1_0().execute($v_0);
    },
    
    exportTemplateToWord: function(entityTypeCode, selectedEntities) {
        var $v_0 = new Xrm.Gen.ExportTemplateToWordRequest(entityTypeCode, selectedEntities);
        $v_0.entityTypeCode = entityTypeCode;
        $v_0.selectedEntities = selectedEntities;
        return this.get_$1_0().execute($v_0);
    },
    
    exportWordDocument: function(entityTypeCode, selectedTemplate, selectedRecords) {
        var $v_0 = new Xrm.Gen.ExportWordDocumentRequest(entityTypeCode, selectedTemplate, selectedRecords);
        $v_0.entityTypeCode = entityTypeCode;
        $v_0.selectedTemplate = selectedTemplate;
        $v_0.selectedRecords = selectedRecords;
        return this.get_$1_0().execute($v_0);
    },
    
    setWordTemplate: function(targetEntity, selectedTemplate) {
        var $v_0 = new Xrm.Gen.SetWordTemplateRequest(targetEntity, selectedTemplate);
        $v_0.target = targetEntity;
        $v_0.selectedTemplate = selectedTemplate;
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveDocumentTemplates: function(entityTypeCode, documentType) {
        var $v_0 = new Xrm.Gen.RetrieveDocumentTemplatesRequest(entityTypeCode, documentType);
        $v_0.entityTypeCode = entityTypeCode;
        $v_0.documentType = documentType;
        return this.get_$1_0().execute($v_0);
    },
    
    renderTemplate: function(template, fetchXml, queryApi, queryParameters) {
        var $v_0 = new Xrm.Gen.RenderTemplateRequest(template, fetchXml, queryApi, queryParameters);
        $v_0.template = template;
        $v_0.fetchXml = fetchXml;
        $v_0.queryApi = queryApi;
        $v_0.queryParameters = queryParameters;
        return this.get_$1_0().execute($v_0);
    },
    
    renderTemplateFromView: function(template, view) {
        var $v_0 = new Xrm.Gen.RenderTemplateFromViewRequest(template, view);
        $v_0.template = template;
        $v_0.view = view;
        return this.get_$1_0().execute($v_0);
    },
    
    exportToExcel: function(view, fetchXml, layoutXml, queryApi, queryParameters) {
        var $v_0 = new Xrm.Gen.ExportToExcelRequest(view, fetchXml, layoutXml, queryApi, queryParameters);
        $v_0.view = view;
        $v_0.fetchXml = fetchXml;
        $v_0.layoutXml = layoutXml;
        $v_0.queryApi = queryApi;
        $v_0.queryParameters = queryParameters;
        return this.get_$1_0().execute($v_0);
    },
    
    getActualDate: function(dateToBeParsed) {
        var $v_0 = new Xrm.Gen.GetActualDateRequest(dateToBeParsed);
        $v_0.date = dateToBeParsed;
        return this.get_$1_0().execute($v_0);
    },
    
    fulfillSalesOrder: function(orderClose, status) {
        var $v_0 = new Xrm.Gen.FulfillSalesOrderRequest(orderClose, status);
        return this.get_$1_0().execute($v_0);
    },
    
    fullTextSearchKnowledgeArticle: function(searchText, useInflection, removeDuplicates, stateCode, queryExpression) {
        var $v_0 = new Xrm.Gen.FullTextSearchKnowledgeArticleRequest(searchText, useInflection, removeDuplicates, stateCode, queryExpression);
        return this.get_$1_0().execute($v_0);
    },
    
    incrementKnowledgeArticleViewCount: function(source, viewDate, location, count) {
        var $v_0 = new Xrm.Gen.IncrementKnowledgeArticleViewCountRequest(source, viewDate, location, count);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveKeyPhrasesForKnowledgeSearch: function(target) {
        var $v_0 = new Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest(target);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveKeyPhrasesForSimilaritySearch: function(target) {
        var $v_0 = new Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest(target);
        return this.get_$1_0().execute($v_0);
    },
    
    getQuantityDecimal: function(target, productId, uomId) {
        var $v_0 = new Xrm.Gen.GetQuantityDecimalRequest(target, productId, uomId);
        return this.get_$1_0().execute($v_0);
    },
    
    canCloseOpportunity: function(opportunityId, quoteId, newStatus) {
        var $v_0 = new Xrm.Gen.CanCloseOpportunityRequest(opportunityId, quoteId, newStatus);
        return this.get_$1_0().execute($v_0);
    },
    
    getRegardingOpportunityId: function(messageId) {
        var $v_0 = new Xrm.Gen.GetRegardingOpportunityIdRequest(messageId);
        return this.get_$1_0().execute($v_0);
    },
    
    instantiateTemplate: function(templateId, objectType, objectId) {
        var $v_0 = new Xrm.Gen.InstantiateTemplateRequest(templateId, objectType, objectId);
        return this.get_$1_0().execute($v_0);
    },
    
    getSalesOrderProductsFromOpportunity: function(opportunityId, salesOrderId) {
        var $v_0 = new Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest(opportunityId, salesOrderId);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveTenantInfo: function() {
        var $v_0 = new Xrm.Gen.RetrieveTenantInfoRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    toggleGuidedHelp: function(value) {
        var $v_0 = new Xrm.Gen.ToggleGuidedHelpRequest(value);
        return this.get_$1_0().execute($v_0);
    },
    
    generateInvoiceFromOpportunity: function(opportunityId, columnSet) {
        var $v_0 = new Xrm.Gen.GenerateInvoiceFromOpportunityRequest(opportunityId, columnSet);
        return this.get_$1_0().execute($v_0);
    },
    
    generateQuoteFromOpportunity: function(opportunityId, columnSet) {
        var $v_0 = new Xrm.Gen.GenerateQuoteFromOpportunityRequest(opportunityId, columnSet);
        return this.get_$1_0().execute($v_0);
    },
    
    generateSalesOrderFromOpportunity: function(opportunityId, columnSet) {
        var $v_0 = new Xrm.Gen.GenerateSalesOrderFromOpportunityRequest(opportunityId, columnSet);
        return this.get_$1_0().execute($v_0);
    },
    
    lockSalesOrderPricing: function(salesOrderId) {
        var $v_0 = new Xrm.Gen.LockSalesOrderPricingRequest(salesOrderId);
        return this.get_$1_0().execute($v_0);
    },
    
    unlockSalesOrderPricing: function(salesOrderId) {
        var $v_0 = new Xrm.Gen.UnlockSalesOrderPricingRequest(salesOrderId);
        return this.get_$1_0().execute($v_0);
    },
    
    reviseQuote: function(quoteId, columnSet) {
        var $v_0 = new Xrm.Gen.ReviseQuoteRequest(quoteId, columnSet);
        return this.get_$1_0().execute($v_0);
    },
    
    getProductsForQuote: function(opportunityId, quoteId) {
        var $v_0 = new Xrm.Gen.GetQuoteProductsFromOpportunityRequest(opportunityId, quoteId);
        return this.get_$1_0().execute($v_0);
    },
    
    setDevErrors: function(userId, organizationId, value) {
        var $v_0 = new Xrm.Gen.SetDevErrorsRequest(userId, organizationId, value);
        return this.get_$1_0().execute($v_0);
    },
    
    copyDynamicListToStatic: function(id) {
        var $v_0 = new Xrm.Gen.CopyDynamicListToStaticRequest(new Microsoft.Crm.Client.Core.Framework.Guid(id));
        return this.get_$1_0().execute($v_0);
    },
    
    setBusinessEquipment: function(equipmentId, businessUnitId) {
        var $v_0 = new Xrm.Gen.SetBusinessEquipmentRequest(equipmentId, businessUnitId);
        return this.get_$1_0().execute($v_0);
    },
    
    setParentBusinessUnit: function(businessUnitId, parentId) {
        var $v_0 = new Xrm.Gen.SetParentBusinessUnitRequest(businessUnitId, parentId);
        return this.get_$1_0().execute($v_0);
    },
    
    pickFromQueue: function(queueItemId, workerId, removeQueueItem) {
        var $v_0 = new Xrm.Gen.PickFromQueueRequest(queueItemId, workerId, removeQueueItem);
        return this.get_$1_0().execute($v_0);
    },
    
    pickMultipleFromQueue: function(queueItemIds, workerId, removeQueueItem) {
        var $v_0 = new Array(queueItemIds.length);
        for (var $v_2 = 0; $v_2 < queueItemIds.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.PickFromQueueRequest(queueItemIds[$v_2].Id, workerId, removeQueueItem);
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    removeMultipleFromQueue: function(queueItemIds) {
        var $v_0 = new Array(queueItemIds.length);
        for (var $v_2 = 0; $v_2 < queueItemIds.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.RemoveFromQueueRequest(new Microsoft.Crm.Client.Core.Framework.Guid(queueItemIds[$v_2]));
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    releaseMultipleToQueue: function(queueItemIds) {
        var $v_0 = new Array(queueItemIds.length);
        for (var $v_2 = 0; $v_2 < queueItemIds.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.ReleaseToQueueRequest(new Microsoft.Crm.Client.Core.Framework.Guid(queueItemIds[$v_2]));
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    addMultipleToQueue: function(targets, sourceQueueId, destinationQueueId, queueItemProperties) {
        var $v_0 = new Array(targets.length);
        for (var $v_2 = 0; $v_2 < targets.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Sdk.AddToQueueRequest(targets[$v_2], sourceQueueId, destinationQueueId, queueItemProperties);
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    executeWorkFlowMultiple: function(records, workflowId, inputArguments) {
        var $v_0 = new Array(records.length);
        for (var $v_2 = 0; $v_2 < records.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.ExecuteWorkflowRequest(new Microsoft.Crm.Client.Core.Framework.Guid(records[$v_2]), workflowId, inputArguments);
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },
    
    routeTo: function(target, queueItemId) {
        var $v_0 = new Xrm.Gen.RouteToRequest(target, queueItemId);
        return this.get_$1_0().execute($v_0);
    },
    
    setParentTeam: function(teamId, businessId) {
        var $v_0 = new Xrm.Gen.SetParentTeamRequest(teamId, businessId);
        return this.get_$1_0().execute($v_0);
    },
    
    setBusinessSystemUser: function(userId, businessId, reassignPrincipal) {
        var $v_0 = new Xrm.Gen.SetBusinessSystemUserRequest(userId, businessId, reassignPrincipal);
        return this.get_$1_0().execute($v_0);
    },
    
    removeFromQueue: function(queueItemId) {
        var $v_0 = new Xrm.Gen.RemoveFromQueueRequest(queueItemId);
        return this.get_$1_0().execute($v_0);
    },
    
    releaseToQueue: function(queueItemId) {
        var $v_0 = new Xrm.Gen.ReleaseToQueueRequest(queueItemId);
        return this.get_$1_0().execute($v_0);
    },
    
    addToQueue: function(target, sourceQueueId, destinationQueueId, queueItemProperties) {
        var $v_0 = new Xrm.Sdk.AddToQueueRequest(target, sourceQueueId, destinationQueueId, queueItemProperties);
        return this.get_$1_0().execute($v_0);
    },
    
    bulkDeleteImportedRecords: function(targetEntityName, importSequenceNumber, importId, deleteImportHistory, jobName, sendEmailNotification, toRecipients, ccRecipients, recurrencePattern, sourceImportId) {
        var $v_0 = new Xrm.Gen.BulkDeleteImportedRecordsRequest(targetEntityName, importSequenceNumber, importId, deleteImportHistory, jobName, sendEmailNotification, toRecipients, ccRecipients, recurrencePattern, sourceImportId);
        return this.get_$1_0().execute($v_0);
    },
    
    flushMetadataCache: function() {
        var $v_0 = new Xrm.Gen.FlushMetadataCacheRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    executeWorkflow: function(entityId, workflowId, inputArguments) {
        var $v_0 = new Xrm.Gen.ExecuteWorkflowRequest(entityId, workflowId, inputArguments);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveDefaultStatusForState: function(entityLogicalName, state) {
        var $v_0 = new Xrm.Gen.RetrieveDefaultStatusForStateRequest(entityLogicalName, state);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveUserDefaultCurrency: function() {
        var $v_0 = new Xrm.Gen.RetrieveUserDefaultCurrencyRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    publishAllXml: function() {
        var $v_0 = new Xrm.Gen.PublishAllXmlRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    publishTheme: function(target) {
        var $v_0 = new Xrm.Gen.PublishThemeRequest(target);
        return this.get_$1_0().execute($v_0);
    },
    
    trackEmail: function(exchangeItemId, regarding) {
        var $v_0 = new Xrm.Gen.TrackEmailRequest(exchangeItemId, regarding);
        return this.get_$1_0().execute($v_0);
    },
    
    executeDataPerformanceAction: function(queryingUnitId, actionName) {
        var $v_0 = new Xrm.Gen.ExecuteDataPerformanceActionRequest(queryingUnitId, actionName);
        return this.get_$1_0().execute($v_0);
    },
    
    calculateTotalTimeIncident: function(id) {
        var $v_0 = new Xrm.Gen.CalculateTotalTimeIncidentRequest(id);
        return this.get_$1_0().execute($v_0);
    },
    
    publishXml: function(parameterXml) {
        var $v_0 = new Xrm.Gen.PublishXmlRequest(parameterXml);
        return this.get_$1_0().execute($v_0);
    },
    
    winQuote: function(quoteWin, status) {
        var $v_0 = new Xrm.Gen.WinQuoteRequest(quoteWin, status);
        return this.get_$1_0().execute($v_0);
    },
    
    winQuoteAndCreateOrder: function(quoteId, columnSet, quoteCloseDate, status, quoteCloseSubject, quoteCloseDescription) {
        var $v_0 = new Xrm.Gen.ConvertQuoteToSalesOrderRequest(quoteId, columnSet);
        $v_0.quoteCloseDate = quoteCloseDate;
        $v_0.quoteCloseStatus = status;
        $v_0.quoteCloseSubject = quoteCloseSubject;
        $v_0.quoteCloseDescription = quoteCloseDescription;
        $v_0.processInstanceId = this.$a_0();
        return this.get_$1_0().execute($v_0);
    },
    
    getEntitiesForAzureML: function(filter) {
        var $v_0 = new Xrm.Gen.GetEntitiesForAzureMLRequest(filter);
        return this.get_$1_0().execute($v_0);
    },
    
    getFieldListForAzureML: function(filter, entityName) {
        var $v_0 = new Xrm.Gen.GetFieldListForAzureMLRequest(filter, entityName);
        return this.get_$1_0().execute($v_0);
    },
    
    getRelationshipsForAzureML: function(filter, entityName) {
        var $v_0 = new Xrm.Gen.GetRelationshipsForAzureMLRequest(filter, entityName);
        return this.get_$1_0().execute($v_0);
    },
    
    populateRecommendationCache: function(entityName, itemId) {
        var $v_0 = new Xrm.Gen.PopulateRecommendationCacheRequest(entityName, itemId);
        return this.get_$1_0().execute($v_0);
    },
    
    populateRecommendationCacheForRecord: function(parentRecord) {
        var $v_0 = new Xrm.Gen.PopulateRecommendationCacheForRecordRequest(parentRecord);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveRecommendationsCount: function(parentRecord, priceLevelId) {
        var $v_0 = new Xrm.Gen.RetrieveRecommendationsCountRequest(parentRecord, priceLevelId);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveRecommendationLineItemMetadata: function(parentEntityName) {
        var $v_0 = new Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest(parentEntityName);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveRecommendationLineItemProducts: function(parentEntityName, parentEntityId) {
        var $v_0 = new Xrm.Gen.RetrieveRecommendationLineItemProductsRequest(parentEntityName, parentEntityId);
        return this.get_$1_0().execute($v_0);
    },
    
    retrieveItemIdsForRecord: function(parentRecord) {
        var $v_0 = new Xrm.Gen.RetrieveItemIdsForRecordRequest(parentRecord);
        return this.get_$1_0().execute($v_0);
    },
    
    intersectRecordsWithQueueAndAggregate: function(queueId, viewId, visualizationId, interactionCentricFilterXml) {
        var $v_0 = new Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequest(queueId, viewId, visualizationId, interactionCentricFilterXml);
        return this.get_$1_0().execute($v_0);
    },
    
    getDataForTopicWordCloud: function(filter) {
        var $v_0 = new Xrm.Gen.GetDataForTopicWordCloudRequest(filter);
        return this.get_$1_0().execute($v_0);
    },
    
    merge: function(entityReference, subordinateId, updateContent, performParentingCheck) {
        var $v_0 = new Xrm.Gen.MergeRequest(entityReference, subordinateId, updateContent, performParentingCheck);
        return this.get_$1_0().execute($v_0);
    },
    
    updateDelveActionStatus: function(messageId, actionState, recordId) {
        var $v_0 = new Xrm.Gen.UpdateDelveActionStatusRequest(messageId, actionState, recordId);
        return this.get_$1_0().execute($v_0);
    },
    
    createEmailReplyDraft: function(messageId, replyText) {
        var $v_0 = new Xrm.Gen.CreateEmailReplyDraftRequest(messageId, replyText);
        return this.get_$1_0().execute($v_0);
    },
    
    getSimilarRecords: function(id, filter, returnFields) {
        var $v_0 = new Xrm.Gen.GetSimilarRecordsRequest(id, filter, returnFields);
        return this.get_$1_0().execute($v_0);
    },
    
    $a_0: function() {
        if (_Script.isNullOrUndefined(Xrm.Page.data) || _Script.isNullOrUndefined(Xrm.Page.data.process) || _Script.isNullOrUndefined(Xrm.Page.data.process.getActiveProcess()) || Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(Xrm.Page.data.process.getActiveProcess().getInstanceId())) {
            return null;
        }
        var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.process.getActiveProcess().getInstanceId());
        var $v_1 = new Xrm.Objects.EntityReference('businessprocessflowinstance', $v_0);
        return $v_1;
    },
    
    copySharePointDocuments: function(destinationLocation, parentEntityReference, folderPath, absoluteUrls, relativeUrls, source) {
        var $v_0 = new Xrm.Gen.CopySharePointDocumentsRequest(destinationLocation, parentEntityReference, folderPath, absoluteUrls, relativeUrls, source);
        return this.get_$1_0().execute($v_0);
    },
    
    bestTimeToEmail: function(entityReferenceCollection) {
        var $v_0 = new Xrm.Gen.BestTimeToEmailRequest(entityReferenceCollection);
        return this.get_$1_0().execute($v_0);
    },
    
    setActionCardState: function(actionCardId, actionState, messageId) {
        var $v_0 = new Xrm.Gen.SetActionCardStateRequest(actionCardId, actionState, messageId);
        return this.get_$1_0().execute($v_0);
    },
    
    snoozeActionCard: function(actionCardId) {
        var $v_0 = new Xrm.Gen.SnoozeActionCardRequest(actionCardId);
        return this.get_$1_0().execute($v_0);
    },
    
    dismissMissedEmail: function(messageId) {
        var $v_0 = new Xrm.Gen.DismissMissedEmailRequest(messageId);
        return this.get_$1_0().execute($v_0);
    },
    
    getRIProvisioningStatus: function() {
        var $v_0 = new Xrm.Gen.GetRIProvisioningStatusRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    getAciMarsConnectorStatus: function() {
        var $v_0 = new Xrm.Gen.GetAciMarsConnectorStatusRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    getRITenantEndpointUrl: function() {
        var $v_0 = new Xrm.Gen.GetRITenantEndpointUrlRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    isLegacyCustomer: function() {
        var $v_0 = new Xrm.Gen.IsLegacyCustomerRequest();
        return this.get_$1_0().execute($v_0);
    },
    
    startRIProvisioning: function(hubName, primaryKey) {
        var $v_0 = new Xrm.Gen.StartRIProvisioningRequest(hubName, primaryKey);
        return this.get_$1_0().execute($v_0);
    },
    
    updateRITenantInfo: function(hubName, primaryKey) {
        var $v_0 = new Xrm.Gen.UpdateRITenantInfoRequest(hubName, primaryKey);
        return this.get_$1_0().execute($v_0);
    },
    
    unfollowEmailAttachment: function(activityMimeAttachmentId) {
        var $v_0 = new Xrm.Gen.UnfollowEmailAttachmentRequest(activityMimeAttachmentId);
        return this.get_$1_0().execute($v_0);
    },
    
    getEmailTrackingPixelUrl: function(trackingId, conversationTrackingId, clientType) {
        var $v_0 = new Xrm.Gen.GetEmailTrackingPixelUrlRequest(trackingId, conversationTrackingId, clientType);
        return this.get_$1_0().execute($v_0);
    },
    
    setFeatureStatus: function(fetaureType, status, isSolutionUninstall) {
        var $v_0 = new Xrm.Gen.SetFeatureStatusRequest(fetaureType, status, isSolutionUninstall);
        return this.get_$1_0().execute($v_0);
    },
    
    getEmailLinkTrackingUrls: function(trackingId, conversationTrackingId, clientType, emailLinkUrls) {
        var $v_0 = new Xrm.Gen.GetEmailLinkTrackingUrlsRequest(trackingId, conversationTrackingId, clientType, emailLinkUrls);
        return this.get_$1_0().execute($v_0);
    },
    
    logExternalResultsClicked: function(source) {
        var $v_0 = new Xrm.Gen.LogExternalResultsClickedRequest(source);
        return this.get_$1_0().execute($v_0);
    },
    
    submitImportedData: function(importWizardData) {
        var $v_0 = new Xrm.Gen.SubmitImportedDataRequest(importWizardData);
        return this.get_$1_0().execute($v_0);
    },
    
    dismissExchangeEnhancedActionCards: function(messageId, cardType) {
        var $v_0 = new Xrm.Gen.DismissExchangeEnhancedActionCardsRequest(messageId, cardType);
        return this.get_$1_0().execute($v_0);
    },
    
    getEntityMetaData: function(entityLogicalName, userlanguageCode) {
        return this.get_$1_0().retrieveEntityMetadata(entityLogicalName, userlanguageCode);
    },
    
    snoozeExchangeActionCards: function(messageId, cardType) {
        var $v_0 = new Xrm.Gen.SnoozeExchangeActionCardsRequest(messageId, cardType);
        return this.get_$1_0().execute($v_0);
    },
    
    completeExchangeTask: function(taskId) {
        var $v_0 = new Xrm.Gen.CompleteExchangeTaskRequest(taskId);
        return this.get_$1_0().execute($v_0);
    }
}


Xrm.XrmServiceDirectory = function() {
    this.$7_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)))();
}
Xrm.XrmServiceDirectory.getKey = function($p0) {
    return $p0.getName();
}
Xrm.XrmServiceDirectory.prototype = {
    $6_0: null,
    $8_0: false,
    
    register: function(TService, implementation) {
        if (this.$8_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        if (!_Script.isNullOrUndefined(this.$7_0.get_item($v_0))) {
            if (this.$7_0.get_item($v_0).contains(implementation)) {
                var $v_1 = String.format('Service {0} already has an implementation', $v_0);
                throw Error.invalidOperation($v_1);
            }
        }
        if (_Script.isNullOrUndefined(this.$7_0.get_item($v_0))) {
            this.$6_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
            this.$6_0.add(implementation);
            this.$7_0.set_item($v_0, this.$6_0);
        }
        else {
            this.$6_0 = this.$7_0.get_item($v_0);
            this.$6_0.add(implementation);
        }
        Xrm.Internal.trace.logT(Xrm.XrmServiceDirectory, 'Registered implementation for service {1} of type {0}', Object.getType(implementation).getName(), $v_0);
    },
    
    unregister: function(TService, implementation) {
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        if (this.$8_0) {
            Xrm.Internal.trace.logT(Xrm.XrmServiceDirectory, 'Unregistering implementation for service {1} of type {0} after dispose', Object.getType(implementation).getName(), $v_0);
            return;
        }
        var $v_1 = this.$7_0.get_item($v_0);
        if (!$v_1.contains(implementation)) {
            var $v_2 = String.format('This implementation is not registered for service {0}', $v_0);
            throw Error.invalidOperation($v_2);
        }
        $v_1.remove(implementation);
        if (!$v_1.get_Count()) {
            this.$7_0.remove($v_0);
        }
        Xrm.Internal.trace.logT(Xrm.XrmServiceDirectory, 'Unregistered implementation for service {1} of type {0}', Object.getType(implementation).getName(), $v_0);
    },
    
    find: function(TService) {
        if (this.$8_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        var $v_1 = this.$7_0.get_item($v_0);
        if (_Script.isNullOrUndefined($v_1)) {
            return null;
        }
        var $v_2 = $v_1.get_item($v_1.get_Count() - 1);
        return (_Script.isNullOrUndefined($v_2)) ? null : $v_2;
    },
    
    dispose: function() {
        if (this.$8_0) {
            return;
        }
        var $v_0 = this.$7_0.get_keys();
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            Xrm.Internal.trace.warningT(Xrm.XrmServiceDirectory, 'Service {0} was not unregistered prior to disposal', $v_0[$v_1]);
            this.$7_0.remove($v_0[$v_1]);
        }
        this.$8_0 = true;
    }
}


Xrm.XrmTrace = function() {
    this.$4_0 = new Array(0);
}
Xrm.XrmTrace.formatMessage = function($p0, $p1) {
    var $p2 = [];
    for (var $$pai_5 = 2; $$pai_5 < arguments.length; ++$$pai_5) {
        $p2[$$pai_5 - 2] = arguments[$$pai_5];
    }
    var $v_0 = String.format.apply(null, [ $p1 ].concat($p2));
    var $v_1 = String.format('{0}: {1}', $p0, $v_0);
    return $v_1;
}
Xrm.XrmTrace.checkInput = function($p0, $p1) {
    if (!$p0) {
        throw Error.argumentNull('componentName');
    }
    if (!$p1) {
        throw Error.argumentNull('format');
    }
}
Xrm.XrmTrace.prototype = {
    
    addListener: function(listener) {
        if (!listener) {
            throw Error.argumentNull('listener');
        }
        for (var $v_0 = 0; $v_0 < this.$4_0.length; $v_0++) {
            if (this.$4_0[$v_0] === listener) {
                this.logT(Xrm.XrmTrace, 'listener {0} already exists', Object.getType(listener).getName());
                return;
            }
        }
        this.$4_0[this.$4_0.length] = listener;
        this.logT(Xrm.XrmTrace, 'added listener {0}', Object.getType(listener).getName());
    },
    
    log: function(componentName, format) {
        var args = [];
        for (var $$pai_5 = 2; $$pai_5 < arguments.length; ++$$pai_5) {
            args[$$pai_5 - 2] = arguments[$$pai_5];
        }
        Xrm.XrmTrace.checkInput(componentName, format);
        if (!this.$4_0.length) {
            return;
        }
        var $v_0 = Xrm.XrmTrace.formatMessage.apply(null, [ componentName, format ].concat(args));
        for (var $v_1 = 0; $v_1 < this.$4_0.length; $v_1++) {
            this.$4_0[$v_1].log('{0}', $v_0);
        }
    },
    
    logT: function(TComponent, format) {
        var args = [];
        for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
            args[$$pai_4 - 2] = arguments[$$pai_4];
        }
        if (!format) {
            throw Error.argumentNull('format');
        }
        if (!this.$4_0.length) {
            return;
        }
        var $v_0 = TComponent.getName();
        this.log.apply(this, [ $v_0, format ].concat(args));
    },
    
    warningT: function(TComponent, format) {
        var args = [];
        for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
            args[$$pai_4 - 2] = arguments[$$pai_4];
        }
        if (!format) {
            throw Error.argumentNull('format');
        }
        if (!this.$4_0.length) {
            return;
        }
        var $v_0 = TComponent.getName();
        this.warning.apply(this, [ $v_0, format ].concat(args));
    },
    
    warning: function(componentName, format) {
        var args = [];
        for (var $$pai_5 = 2; $$pai_5 < arguments.length; ++$$pai_5) {
            args[$$pai_5 - 2] = arguments[$$pai_5];
        }
        Xrm.XrmTrace.checkInput(componentName, format);
        if (!this.$4_0.length) {
            return;
        }
        var $v_0 = Xrm.XrmTrace.formatMessage.apply(null, [ componentName, format ].concat(args));
        for (var $v_1 = 0; $v_1 < this.$4_0.length; $v_1++) {
            this.$4_0[$v_1].warning('{0}', $v_0);
        }
    },
    
    errorT: function(TComponent, format) {
        var args = [];
        for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
            args[$$pai_4 - 2] = arguments[$$pai_4];
        }
        if (!format) {
            throw Error.argumentNull('format');
        }
        if (!this.$4_0.length) {
            return;
        }
        var $v_0 = TComponent.getName();
        this.error.apply(this, [ $v_0, format ].concat(args));
    },
    
    error: function(componentName, format) {
        var args = [];
        for (var $$pai_5 = 2; $$pai_5 < arguments.length; ++$$pai_5) {
            args[$$pai_5 - 2] = arguments[$$pai_5];
        }
        Xrm.XrmTrace.checkInput(componentName, format);
        if (!this.$4_0.length) {
            return;
        }
        var $v_0 = Xrm.XrmTrace.formatMessage.apply(null, [ componentName, format ].concat(args));
        for (var $v_1 = 0; $v_1 < this.$4_0.length; $v_1++) {
            this.$4_0[$v_1].error('{0}', $v_0);
        }
    }
}


Xrm.Offline = function() {
}
Xrm.Offline.prototype = {
    
    setInstance: function(instance) {
        Xrm.Offline.$2 = instance;
    },
    
    isOfflineEnabled: function(entityType) {
        return Xrm.Offline.$2.isOfflineEnabled(entityType);
    },
    
    retrieveRecord: function(entityType, id, options) {
        return Xrm.Offline.$2.retrieveRecord(entityType, id, options);
    },
    
    createRecord: function(entityType, data) {
        return Xrm.Offline.$2.createRecord(entityType, data);
    },
    
    updateRecord: function(entityType, id, data) {
        return Xrm.Offline.$2.updateRecord(entityType, id, data);
    },
    
    deleteRecord: function(entityType, id) {
        return Xrm.Offline.$2.deleteRecord(entityType, id);
    },
    
    retrieveMultipleRecords: function(entityType, options, maxPageSize) {
        return Xrm.Offline.$2.retrieveMultipleRecords(entityType, options, maxPageSize);
    }
}


Xrm.FormNotificationOptions = function() {
}
Xrm.FormNotificationOptions.prototype = {
    message: null,
    notificationLevel: null,
    uniqueId: null,
    priority: 0,
    action: null,
    actionText: null,
    hideOnOffline: false,
    onClickTelemetryName: null
}


Xrm.XrmFormData = function() {
}
Xrm.XrmFormData.prototype = {
    entity: null,
    process: null,
    attributes: null,
    
    getEntity: function() {
        return this.entity;
    },
    
    getProcess: function() {
        return this.process;
    },
    
    getAttributes: function() {
        return this.attributes;
    },
    
    getIsDirty: function() {
        if (this.entity.getIsDirty()) {
            return true;
        }
        for (var $$arr_0 = this.entity.relatedEntities.getAll(), $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            if ($v_0.getIsDirty()) {
                return true;
            }
        }
        return false;
    }
}


Xrm.XrmFormUI = function() {
}
Xrm.XrmFormUI.prototype = {
    controls: null,
    formSelector: null,
    navigation: null,
    process: null,
    tabNavigators: null,
    tabNavigatorGroup: null,
    tabs: null,
    quickForms: null,
    taskProcess: null,
    
    getControls: function() {
        return this.controls;
    },
    
    getTabs: function() {
        return this.tabs;
    },
    
    getQuickForms: function() {
        return this.quickForms;
    },
    
    dispose: function() {
        this.controls = null;
        this.tabs = null;
        this.process = null;
        this.formSelector = null;
        this.navigation = null;
    }
}


Xrm.XrmGlobalContext = function() {
}
Xrm.XrmGlobalContext.prototype = {
    saveMode: -1,
    client: null,
    userSettings: null,
    organizationSettings: null
}


Xrm.XrmOrganizationSettings = function() {
}
Xrm.XrmOrganizationSettings.prototype = {
    languageId: 0,
    isAutoSaveEnabled: false,
    uniqueName: null,
    useSkypeProtocol: false,
    defaultCountryCode: null,
    attributes: null,
    baseCurrencyId: null,
    organizationId: null
}


Xrm.XrmPageContextClient = function() {
}


Xrm.XrmUserSettings = function() {
}
Xrm.XrmUserSettings.prototype = {
    languageId: 0,
    userId: null,
    userName: null,
    securityRoles: null,
    isGuidedHelpEnabled: false,
    defaultCountryCode: null,
    dateFormattingInfo: null,
    isRTL: false,
    isHighContrastEnabled: false,
    transactionCurrencyId: null
}


Xrm.XrmEntity = function() {
    this.relatedEntities = new Xrm.XrmRelatedEntities();
}
Xrm.XrmEntity.prototype = {
    attributes: null,
    
    getAttributes: function() {
        return this.attributes;
    },
    
    getEntityReference: function() {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Page.data.entity.getEntityReference');
        var $v_0 = new Xrm.LookupObject();
        $v_0.entityType = this.getEntityName();
        $v_0.id = this.getId();
        $v_0.name = this.getPrimaryAttributeValue();
        return $v_0;
    },
    
    getKey: function() {
        return this.getId();
    },
    
    getRelatedEntities: function() {
        return this.relatedEntities;
    }
}


Xrm.XrmProcessControlData = function() {
}


Xrm.XrmEntityAttribute = function() {
}
Xrm.XrmEntityAttribute.prototype = {
    controls: null,
    
    getControls: function() {
        return null;
    }
}


Xrm.XrmEntityAttributeBoolean = function() {
    Xrm.XrmEntityAttributeBoolean.initializeBase(this);
}


Xrm.XrmEntityAttributeDateTime = function() {
    Xrm.XrmEntityAttributeDateTime.initializeBase(this);
}


Xrm.XrmEntityAttributeLookup = function() {
    Xrm.XrmEntityAttributeLookup.initializeBase(this);
}


Xrm.XrmEntityAttributeNumber = function() {
    Xrm.XrmEntityAttributeNumber.initializeBase(this);
}


Xrm.XrmEntityAttributeOptionSet = function() {
    Xrm.XrmEntityAttributeOptionSet.initializeBase(this);
}


Xrm.XrmEntityAttributeOptionSetBase = function() {
    Xrm.XrmEntityAttributeOptionSetBase.initializeBase(this);
}


Xrm.XrmEntityAttributeString = function() {
    Xrm.XrmEntityAttributeString.initializeBase(this);
}


Xrm.XrmBusinessProcessFlow = function() {
}


Xrm.XrmProcessStage = function() {
}
Xrm.XrmProcessStage.prototype = {
    
    getKey: function() {
        return this.getName();
    }
}


Xrm.XrmProcessStep = function() {
}
Xrm.XrmProcessStep.prototype = {
    
    getKey: function() {
        return this.getName();
    }
}


Xrm.XrmControl = function() {
    Xrm.XrmControl.initializeBase(this);
}
Xrm.XrmControl.prototype = {
    
    dispose: function() {
    }
}


Xrm.XrmControlBase = function() {
}
Xrm.XrmControlBase.prototype = {
    
    getKey: function() {
        return this.getName();
    }
}


Xrm.XrmControlButton = function() {
    Xrm.XrmControlButton.initializeBase(this);
}


Xrm.XrmControlDateTime = function() {
    Xrm.XrmControlDateTime.initializeBase(this);
}


Xrm.XrmControlFormSelector = function() {
}
Xrm.XrmControlFormSelector.prototype = {
    items: null,
    
    getItems: function() {
        return this.items;
    }
}


Xrm.XrmControlIFrame = function() {
    Xrm.XrmControlIFrame.initializeBase(this);
}


Xrm.XrmControlLookup = function() {
    Xrm.XrmControlLookup.initializeBase(this);
}


Xrm.XrmControlAutoLookup = function() {
    Xrm.XrmControlAutoLookup.initializeBase(this);
}


Xrm.XrmControlOptionSet = function() {
    Xrm.XrmControlOptionSet.initializeBase(this);
}


Xrm.XrmControlSearchWidget = function() {
    Xrm.XrmControlSearchWidget.initializeBase(this);
}
Xrm.XrmControlSearchWidget.prototype = {
    $V_2: false,
    
    get_isHostedInTabbedControl: function() {
        return this.$V_2;
    },
    
    set_isHostedInTabbedControl: function(value) {
        this.$V_2 = value;
        return value;
    }
}


Xrm.XrmControlEmailRecipientActivity = function() {
    Xrm.XrmControlEmailRecipientActivity.initializeBase(this);
}


Xrm.XrmControlSilverlight = function() {
    Xrm.XrmControlSilverlight.initializeBase(this);
}


Xrm.XrmControlSubGrid = function() {
    Xrm.XrmControlSubGrid.initializeBase(this);
}


Xrm.XrmControlWebResource = function() {
    Xrm.XrmControlWebResource.initializeBase(this);
}


Xrm.XrmControlQuickForm = function() {
    Xrm.XrmControlQuickForm.initializeBase(this);
}
Xrm.XrmControlQuickForm.prototype = {
    ui: null,
    data: null,
    
    getControl: function(parameter) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.ui)) {
            return this.ui.controls.get(parameter);
        }
        return null;
    }
}


Xrm.XrmControlTimer = function() {
    Xrm.XrmControlTimer.initializeBase(this);
}


Xrm.XrmControlACI = function() {
    Xrm.XrmControlACI.initializeBase(this);
}


Xrm.XrmDataControl = function() {
    Xrm.XrmDataControl.initializeBase(this);
}


Xrm.XrmNavigation = function() {
}
Xrm.XrmNavigation.prototype = {
    items: null
}


Xrm.XrmProcessControlUI = function() {
}


Xrm.XrmTab = function() {
    Xrm.XrmTab.initializeBase(this);
}
Xrm.XrmTab.prototype = {
    sections: null,
    
    getSections: function() {
        return this.sections;
    }
}


Xrm.XrmTabNavigator = function() {
    Xrm.XrmTabNavigator.initializeBase(this);
}


Xrm.XrmTabNavigatorGroup = function() {
    Xrm.XrmTabNavigatorGroup.initializeBase(this);
}


Xrm.XrmTabSection = function() {
    Xrm.XrmTabSection.initializeBase(this);
}
Xrm.XrmTabSection.prototype = {
    controls: null,
    
    getControls: function() {
        return this.controls;
    }
}


Xrm.XrmChart = function() {
}


Xrm.XrmControlGrid = function() {
}


Xrm.XrmGridData = function() {
}
Xrm.XrmGridData.prototype = {
    entity: null,
    
    getEntity: function() {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('GridRowData.getEntity');
        return this.entity;
    }
}


Xrm.XrmGridFilter = function() {
}


Xrm.XrmGridRow = function() {
}
Xrm.XrmGridRow.prototype = {
    data: null,
    
    getData: function() {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('GridRow.getData');
        return this.data;
    }
}


Xrm.XrmTaskProcess = function() {
}


Xrm.XrmViewSelector = function() {
}


Xrm.WebApi = function() {
}
Xrm.WebApi.getInstance = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.WebApi.$N)) {
        Xrm.WebApi.$N = new Xrm.WebApi();
    }
    return Xrm.WebApi.$N;
}
Xrm.WebApi.$B = function() {
    return Xrm.WebApi.getOnlineInstance();
}
Xrm.WebApi.getOnlineInstance = function() {
    return Xrm.WebApi.online;
}
Xrm.WebApi.getOfflineInstance = function() {
    return Xrm.WebApi.offline;
}
Xrm.WebApi.retrieveRecord = function(entityName, entityId, options) {
    return Xrm.WebApi.$B().retrieveRecord(entityName, entityId, options);
}
Xrm.WebApi.createRecord = function(entityType, data) {
    return Xrm.WebApi.$B().createRecord(entityType, data);
}
Xrm.WebApi.updateRecord = function(entityType, entityId, data) {
    return Xrm.WebApi.$B().updateRecord(entityType, entityId, data);
}
Xrm.WebApi.deleteRecord = function(entityType, entityId) {
    return Xrm.WebApi.$B().deleteRecord(entityType, entityId);
}
Xrm.WebApi.retrieveMultipleRecords = function(entityType, options, maxPageSize) {
    return Xrm.WebApi.$B().retrieveMultipleRecords(entityType, options, maxPageSize);
}
Xrm.WebApi.execute = function(request) {
    return Xrm.WebApi.$B().execute(request);
}
Xrm.WebApi.executeMultiple = function(requests) {
    return Xrm.WebApi.$B().executeMultiple(requests);
}


Xrm.XrmCollection$1 = function(items) {
    this.values = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(this.$$gta['Xrm.XrmCollection$1']['T']))();
    Xrm.XrmCollection$1.$$(this.$$gta['Xrm.XrmCollection$1']['T']).initializeBase(this);
    if (items) {
        this.values.addRange(items);
    }
}
Xrm.XrmCollection$1.$$ = function(T) {
    var $$cn = 'XrmCollection$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Xrm[$$cn]) {
        var $$ccr = Xrm[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Xrm.XrmCollection$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Xrm.XrmCollection$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Xrm.' + $$cn, Xrm.XrmCollectionBase$1.$$(T));
        var $$dict_5 = Xrm.XrmCollection$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Xrm[$$cn];
}
Xrm.XrmCollection$1.prototype = {
    
    dispose: function() {
        this.values.clear();
    },
    
    forEach: function(handler) {
        for (var $v_0 = 0; $v_0 < this.values.get_Count(); $v_0++) {
            var $v_1 = this.getByIndex($v_0);
            handler($v_1, $v_0);
        }
    },
    
    add: function(item) {
        this.values.add(item);
    },
    
    getFirst: function(filter) {
        for (var $v_0 = 0; $v_0 < this.values.get_Count(); $v_0++) {
            var $v_1 = this.getByIndex($v_0);
            if (filter($v_1, $v_0)) {
                return $v_1;
            }
        }
        return ((this.$$gta['Xrm.XrmCollection$1']['T'] === Number || Type.isEnum(this.$$gta['Xrm.XrmCollection$1']['T'])) ? 0 : (this.$$gta['Xrm.XrmCollection$1']['T'] === Boolean) ? false : null);
    },
    
    getLength: function() {
        return this.values.get_Count();
    },
    
    remove: function(item) {
        this.values.remove(item);
    },
    
    getAll: function() {
        return this.values.toArray();
    },
    
    getByName: function(name) {
        for (var $v_0 = 0; $v_0 < this.values.get_Count(); $v_0++) {
            if ((this.values.get_item($v_0)).getKey() === name) {
                return this.getByIndex($v_0);
            }
        }
        return ((this.$$gta['Xrm.XrmCollection$1']['T'] === Number || Type.isEnum(this.$$gta['Xrm.XrmCollection$1']['T'])) ? 0 : (this.$$gta['Xrm.XrmCollection$1']['T'] === Boolean) ? false : null);
    },
    
    getByIndex: function(position) {
        return this.values.get_item(position);
    },
    
    getByFilter: function(filter) {
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < this.values.get_Count(); $v_1++) {
            var $v_2 = this.getByIndex($v_1);
            if (filter($v_2, $v_1)) {
                Array.add($v_0, $v_2);
            }
        }
        return $v_0;
    }
}


Xrm.XrmCollectionBase$1 = function() {
}
Xrm.XrmCollectionBase$1.$$ = function(T) {
    var $$cn = 'XrmCollectionBase$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Xrm[$$cn]) {
        var $$ccr = Xrm[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Xrm.XrmCollectionBase$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Xrm.XrmCollectionBase$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Xrm.' + $$cn);
        var $$dict_5 = Xrm.XrmCollectionBase$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Xrm[$$cn];
}
Xrm.XrmCollectionBase$1.prototype = {
    
    get: function(parameter) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(parameter)) {
            return this.getAll();
        }
        if (String.isInstanceOfType(parameter)) {
            return this.getByName(parameter);
        }
        if (Number.isInstanceOfType(parameter)) {
            return this.getByIndex(parameter);
        }
        if (typeof(parameter) === 'function') {
            return this.getByFilter(parameter);
        }
        throw Error.create('Collection.Get called with unknown parameter type: ' + Object.getType(parameter).getName());
    }
}


Xrm.XrmCollectionDictionary$1 = function() {
    this.$5_1 = {};
    Xrm.XrmCollectionDictionary$1.$$(this.$$gta['Xrm.XrmCollectionDictionary$1']['T']).initializeBase(this);
}
Xrm.XrmCollectionDictionary$1.$$ = function(T) {
    var $$cn = 'XrmCollectionDictionary$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Xrm[$$cn]) {
        var $$ccr = Xrm[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Xrm.XrmCollectionDictionary$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Xrm.XrmCollectionDictionary$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Xrm.' + $$cn, Xrm.XrmCollectionBase$1.$$(T));
        var $$dict_5 = Xrm.XrmCollectionDictionary$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Xrm[$$cn];
}
Xrm.XrmCollectionDictionary$1.prototype = {
    
    dispose: function() {
        var $$dict_1 = this.$5_1;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            delete this.$5_1[$v_0.key];
        }
    },
    
    forEach: function(handler) {
        var $v_0 = 0;
        var $$dict_4 = this.$5_1;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
            var $v_2 = $v_1.value;
            handler($v_2, $v_0++);
        }
    },
    
    add: function(key, item) {
        this.$5_1[key] = item;
    },
    
    getFirst: function(filter) {
        var $v_0 = 0;
        var $$dict_4 = this.$5_1;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
            var $v_2 = $v_1.value;
            if (filter($v_2, $v_0++)) {
                return $v_2;
            }
        }
        return ((this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Number || Type.isEnum(this.$$gta['Xrm.XrmCollectionDictionary$1']['T'])) ? 0 : (this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Boolean) ? false : null);
    },
    
    getLength: function() {
        var $v_0 = 0;
        var $$dict_2 = this.$5_1;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0++;
        }
        return $v_0;
    },
    
    remove: function(item) {
        var $$dict_2 = this.$5_1;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if ($v_0.value === item) {
                delete this.$5_1[$v_0.key];
                return;
            }
        }
    },
    
    getAll: function() {
        var $v_0 = [];
        var $$dict_2 = this.$5_1;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            Array.add($v_0, $v_1.value);
        }
        return $v_0;
    },
    
    getByName: function(name) {
        return this.$5_1[name];
    },
    
    getByIndex: function(position) {
        var $v_0 = 0;
        var $v_1 = [];
        var $$dict_4 = this.$5_1;
        for (var $$key_5 in $$dict_4) {
            var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
            if ($v_0++ === position) {
                return $v_2.value;
            }
        }
        return ((this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Number || Type.isEnum(this.$$gta['Xrm.XrmCollectionDictionary$1']['T'])) ? 0 : (this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Boolean) ? false : null);
    },
    
    getByFilter: function(filter) {
        var $v_0 = 0;
        var $v_1 = [];
        var $$dict_5 = this.$5_1;
        for (var $$key_6 in $$dict_5) {
            var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
            var $v_3 = $v_2.value;
            if (filter($v_3, $v_0++)) {
                Array.add($v_1, $v_3);
            }
        }
        return $v_1;
    }
}


Xrm.XrmControls = function(items) {
    Xrm.XrmControls.initializeBase(this, [ items ]);
}


Xrm.XrmEntities = function(items) {
    Xrm.XrmEntities.initializeBase(this, [ items ]);
}


Xrm.XrmEntityAttributes = function(items) {
    Xrm.XrmEntityAttributes.initializeBase(this, [ items ]);
}
Xrm.XrmEntityAttributes.prototype = {
    
    get: function(parameter) {
        var $v_0 = Xrm.XrmCollectionBase$1.prototype.get.call(this, parameter);
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) && String.isInstanceOfType(parameter)) {
            $v_0 = this.$19_2(parameter);
        }
        return $v_0;
    },
    
    $19_2: function($p0) {
        var $v_0 = typeof ProcessControl !== 'undefined' && typeof ProcessControl.ClientApi !== 'undefined' && typeof ProcessControl.ClientApi.LightWeightAttributeManager !== 'undefined';
        if ($v_0) {
            var $v_1 = ProcessControl.ClientApi.LightWeightAttributeManager.get_instance();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                return $v_1.getWrapper($p0);
            }
        }
        return null;
    }
}


Xrm.XrmFormSelectorItems = function(items) {
    Xrm.XrmFormSelectorItems.initializeBase(this, [ items ]);
}


Xrm.XrmNavigationItems = function(items) {
    Xrm.XrmNavigationItems.initializeBase(this, [ items ]);
}


Xrm.XrmGridRows = function(items) {
    Xrm.XrmGridRows.initializeBase(this, [ items ]);
}


Xrm.XrmRelatedEntities = function() {
    Xrm.XrmRelatedEntities.initializeBase(this);
}


Xrm.XrmTabs = function(items) {
    Xrm.XrmTabs.initializeBase(this, [ items ]);
}


Xrm.XrmTabNavigators = function(items) {
    Xrm.XrmTabNavigators.initializeBase(this, [ items ]);
}


Xrm.XrmTabSections = function(items) {
    Xrm.XrmTabSections.initializeBase(this, [ items ]);
}


Xrm.XrmQuickForms = function(items) {
    Xrm.XrmQuickForms.initializeBase(this, [ items ]);
}


Xrm.AttributeFormat = function() {
}


Xrm.AttributeType = function() {
}


Xrm.ClientName = function() {
}


Xrm.ClientState = function() {
}


Xrm.ClientStates = function() {
}


Xrm.ControlType = function() {
}


Xrm.FormSaveAction = function() {
}


Xrm.LookupStyle = function() {
}


Xrm.NotificationLevel = function() {
}


Xrm.PageType = function() {
}


Xrm.RequiredLevel = function() {
}


Xrm.SubmitMode = function() {
}


Xrm.TabDisplayState = function() {
}


Xrm.EntityMetadata = function(entityMetadata, attributes) {
    if (!entityMetadata) {
        return;
    }
    this.ActivityTypeMask = entityMetadata['ActivityTypeMask'];
    this.AutoRouteToOwnerQueue = entityMetadata['AutoRouteToOwnerQueue'];
    this.CanEnableSyncToExternalSearchIndex = (entityMetadata['CanEnableSyncToExternalSearchIndex']).Value;
    this.CanTriggerWorkflow = entityMetadata['CanTriggerWorkflow'];
    this.Description = (entityMetadata['Description']).LocalizedLabels[0].Label;
    this.DisplayCollectionName = (entityMetadata['DisplayCollectionName']).LocalizedLabels[0].Label;
    this.DisplayName = (entityMetadata['DisplayName']).LocalizedLabels[0].Label;
    this.EnforceStateTransitions = entityMetadata['EnforceStateTransitions'];
    this.EntityColor = entityMetadata['EntityColor'];
    this.EntitySetName = entityMetadata['EntitySetName'];
    this.IsActivity = entityMetadata['IsActivity'];
    this.IsActivityParty = entityMetadata['IsActivityParty'];
    this.IsBusinessProcessEnabled = entityMetadata['IsBusinessProcessEnabled'];
    this.IsBPFEntity = entityMetadata['IsBPFEntity'];
    this.IsChildEntity = entityMetadata['IsChildEntity'];
    this.IsConnectionsEnabled = (entityMetadata['IsConnectionsEnabled']).Value;
    this.IsCustomEntity = entityMetadata['IsCustomEntity'];
    this.IsCustomizable = (entityMetadata['IsCustomizable']).Value;
    this.IsDocumentManagementEnabled = entityMetadata['IsDocumentRecommendationsEnabled'];
    this.IsDocumentRecommendationsEnabled = entityMetadata['IsDocumentRecommendationsEnabled'];
    this.IsMSTeamsIntegrationEnabled = ((('IsMSTeamsIntegrationEnabled') in entityMetadata) && entityMetadata['IsMSTeamsIntegrationEnabled']) ? entityMetadata['IsMSTeamsIntegrationEnabled'] : false;
    this.IsDuplicateDetectionEnabled = (entityMetadata['IsDuplicateDetectionEnabled']).Value;
    this.IsEnabledForCharts = entityMetadata['IsEnabledForCharts'];
    this.IsImportable = entityMetadata['IsImportable'];
    this.IsInteractionCentricEnabled = entityMetadata['IsInteractionCentricEnabled'];
    this.IsKnowledgeManagementEnabled = entityMetadata['IsKnowledgeManagementEnabled'];
    this.IsMailMergeEnabled = (entityMetadata['IsMailMergeEnabled']).Value;
    this.IsManaged = entityMetadata['IsManaged'];
    this.IsOneNoteIntegrationEnabled = entityMetadata['IsOneNoteIntegrationEnabled'];
    this.IsOptimisticConcurrencyEnabled = entityMetadata['IsOptimisticConcurrencyEnabled'];
    this.IsQuickCreateEnabled = entityMetadata['IsQuickCreateEnabled'];
    this.IsReadOnlyInMobileClient = (entityMetadata['IsReadOnlyInMobileClient']).Value;
    this.IsStateModelAware = entityMetadata['IsStateModelAware'];
    this.IsValidForAdvancedFind = entityMetadata['IsValidForAdvancedFind'];
    this.IsVisibleInMobileClient = (entityMetadata['IsVisibleInMobileClient']).Value;
    this.LogicalCollectionName = entityMetadata['LogicalCollectionName'];
    this.LogicalName = entityMetadata['LogicalName'];
    this.ObjectTypeCode = entityMetadata['ObjectTypeCode'];
    this.OwnershipType = entityMetadata['OwnershipType'];
    this.PrimaryIdAttribute = entityMetadata['PrimaryIdAttribute'];
    this.PrimaryImageAttribute = entityMetadata['PrimaryImageAttribute'];
    this.PrimaryNameAttribute = entityMetadata['PrimaryNameAttribute'];
    this.Attributes = attributes;
}
Xrm.EntityMetadata.prototype = {
    ActivityTypeMask: 0,
    AutoRouteToOwnerQueue: false,
    CanTriggerWorkflow: false,
    CanEnableSyncToExternalSearchIndex: false,
    Description: null,
    DisplayCollectionName: null,
    DisplayName: null,
    EnforceStateTransitions: false,
    EntityColor: null,
    EntitySetName: null,
    IsActivity: false,
    IsActivityParty: false,
    IsBusinessProcessEnabled: false,
    IsBPFEntity: false,
    IsChildEntity: false,
    IsConnectionsEnabled: false,
    IsCustomEntity: false,
    IsCustomizable: false,
    IsDocumentManagementEnabled: false,
    IsDocumentRecommendationsEnabled: false,
    IsMSTeamsIntegrationEnabled: false,
    IsDuplicateDetectionEnabled: false,
    IsEnabledForCharts: false,
    IsImportable: false,
    IsInteractionCentricEnabled: false,
    IsKnowledgeManagementEnabled: false,
    IsMailMergeEnabled: false,
    IsManaged: false,
    IsOneNoteIntegrationEnabled: false,
    IsOptimisticConcurrencyEnabled: false,
    IsQuickCreateEnabled: false,
    IsReadOnlyInMobileClient: false,
    IsStateModelAware: false,
    IsValidForAdvancedFind: false,
    IsVisibleInMobileClient: false,
    LogicalCollectionName: null,
    LogicalName: null,
    ObjectTypeCode: 0,
    OwnershipType: null,
    PrimaryIdAttribute: null,
    PrimaryImageAttribute: null,
    PrimaryNameAttribute: null,
    Attributes: null
}


Xrm.Description = function() {
}
Xrm.Description.prototype = {
    LocalizedLabels: null
}


Xrm.LocalizedLabel = function() {
}
Xrm.LocalizedLabel.prototype = {
    Label: null
}


Xrm.Flag = function() {
}
Xrm.Flag.prototype = {
    Value: false
}


Xrm.ErrorDialogOptions = function(errorCode, message, details) {
    this.errorCode = errorCode;
    this.message = message;
    this.details = details;
}
Xrm.ErrorDialogOptions.prototype = {
    errorCode: 0,
    message: null,
    details: null
}


Xrm.DataLoadEventArgs = function() {
    Xrm.DataLoadEventArgs.initializeBase(this);
}


Xrm.ErrorResponse = function(errorCode, message, debugMessage, innerError) {
    this.errorCode = errorCode;
    this.message = message;
    this.debugMessage = debugMessage;
    this.innerError = innerError;
}
Xrm.ErrorResponse.prototype = {
    errorCode: 0,
    message: null,
    debugMessage: null,
    innerError: null
}


Xrm.ExecutionContext = function(eventSource, context, depth, eventArgs, executionContext, formContext) {
    this.$S_0 = eventSource;
    this.$Q_0 = depth;
    this.$P_0 = context;
    this.$R_0 = eventArgs;
    this.$T_0 = formContext;
    if (executionContext && executionContext.$D_0) {
        this.$D_0 = executionContext.$D_0;
    }
    else {
        this.$D_0 = {};
    }
}
Xrm.ExecutionContext.prototype = {
    $R_0: null,
    $S_0: null,
    $T_0: null,
    $Q_0: 0,
    $P_0: null,
    $D_0: null,
    
    getContext: function() {
        return this.$P_0;
    },
    
    getDepth: function() {
        return this.$Q_0;
    },
    
    getEventArgs: function() {
        return this.$R_0;
    },
    
    getEventSource: function() {
        return this.$S_0;
    },
    
    getFormContext: function() {
        return this.$T_0;
    },
    
    getSharedVariable: function(key) {
        return this.$D_0[key];
    },
    
    setSharedVariable: function(key, value) {
        this.$D_0[key] = value;
    }
}


Xrm.MetricsStopwatch = function() {
}
Xrm.MetricsStopwatch.prototype = {
    $C_0: null,
    
    get_properties: function() {
        return this.$C_0;
    },
    
    set_properties: function(value) {
        this.$C_0 = value;
        return value;
    }
}


Xrm.OfflineErrorResponse = function(errorCode, message, debugMessage) {
    Xrm.OfflineErrorResponse.initializeBase(this, [ errorCode, message, debugMessage, null ]);
}


Xrm.OpenFormSuccessResponse = function(response) {
    this.savedEntityReference = [ response.savedEntityReference ];
}
Xrm.OpenFormSuccessResponse.prototype = {
    savedEntityReference: null
}


Xrm.ProcessActionSuccessResponse = function() {
    this.$Y_0 = {};
}
Xrm.ProcessActionSuccessResponse.prototype = {
    
    get_outputParameters: function() {
        return this.$Y_0;
    },
    
    set_outputParameters: function(value) {
        this.$Y_0 = value;
        return value;
    }
}


function Position() {
}
Position.prototype = {
    coords: null,
    timestamp: null
}


Xrm.SaveErrorResponse = function(errorCode, message, debugMessage) {
    Xrm.SaveErrorResponse.initializeBase(this, [ errorCode, message, debugMessage, null ]);
}


Xrm.SaveEventArgs = function() {
    Xrm.SaveEventArgs.initializeBase(this);
}


Xrm.SaveSuccessResponse = function() {
}
Xrm.SaveSuccessResponse.prototype = {
    savedEntityReference: null
}


Xrm.TaskFlowOptions = function() {
}
Xrm.TaskFlowOptions.prototype = {
    primaryEntityContext: null
}


Xrm.XrmFormSelectorItem = function() {
}
Xrm.XrmFormSelectorItem.prototype = {
    
    getKey: function() {
        return this.getId();
    }
}


Xrm.XrmNavigationItem = function() {
}
Xrm.XrmNavigationItem.prototype = {
    
    getKey: function() {
        return this.getId();
    }
}


Xrm.XrmFile = function() {
}
Xrm.XrmFile.prototype = {
    fileName: null,
    mimeType: null,
    fileContent: null
}


Xrm.XrmOpenFileOption = function() {
}
Xrm.XrmOpenFileOption.prototype = {
    openMode: 0
}


Xrm.Diagnostics = function() {
}
Xrm.Diagnostics.traceError = function(componentName, message) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Diagnostics.TraceError');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Diagnostics.traceWarning = function(componentName, message) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Diagnostics.TraceWarning');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Diagnostics.traceInfo = function(componentName, message) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Diagnostics.TraceInfo');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}
Xrm.Diagnostics.traceDebug = function(componentName, message) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.Diagnostics.TraceDebug');
    throw Error.create('Not Implemented. This api is not applicable for web client.');
}


Xrm.Dialog = function() {
}
Xrm.Dialog.setInstance = function(instance) {
    Xrm.Dialog.$2 = instance;
}
Xrm.Dialog.openAlertDialog = function(alertStrings, options, closeCallback) {
    Xrm.Dialog.$2.openAlertDialog(alertStrings, options, closeCallback);
}
Xrm.Dialog.openConfirmDialog = function(confirmStrings, options, confirmCallback, cancelCallback) {
    Xrm.Dialog.$2.openConfirmDialog(confirmStrings, options, confirmCallback, cancelCallback);
}
Xrm.Dialog.openDialog = function(dialogName, dialogOptions, dialogArguments, closeCallback, callbackParameters) {
    Xrm.Dialog.$2.openDialog(dialogName, dialogOptions, dialogArguments, closeCallback, callbackParameters);
}


Xrm.Encoding = function() {
}
Xrm.Encoding.setInstance = function(instance) {
    Xrm.Encoding.$2 = instance;
}
Xrm.Encoding.xmlEncode = function(text) {
    return Xrm.Encoding.$2.xmlEncode(text);
}
Xrm.Encoding.xmlAttributeEncode = function(text) {
    return Xrm.Encoding.$2.xmlAttributeEncode(text);
}
Xrm.Encoding.htmlEncode = function(text) {
    return Xrm.Encoding.$2.htmlEncode(text);
}
Xrm.Encoding.htmlDecode = function(text) {
    return Xrm.Encoding.$2.htmlDecode(text);
}
Xrm.Encoding.htmlAttributeEncode = function(text) {
    return Xrm.Encoding.$2.htmlAttributeEncode(text);
}


Xrm.Internal = function() {
}
Xrm.Internal.$$cctor = function() {
    Xrm.JavaScriptConsoleTraceListener.initialize(Xrm.Internal.trace);
    Xrm.Internal.$F = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
}
Xrm.Internal.get_onXrmReadyHandlers = function() {
    if (!Xrm.Internal.$F) {
        Xrm.Internal.$F = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
    }
    return Xrm.Internal.$F;
}
Xrm.Internal.set_onXrmReadyHandlers = function(value) {
    Xrm.Internal.$F = value;
    return value;
}
Xrm.Internal.getServiceDirectory = function() {
    return Xrm.Internal.$2.getServiceDirectory();
}
Xrm.Internal.setServiceDirectory = function(serviceDirectory) {
    Xrm.Internal.$2.setServiceDirectory(serviceDirectory);
}
Xrm.Internal.setInstance = function(instance) {
    Xrm.Internal.$2 = instance;
}
Xrm.Internal.addOnXrmReady = function(handler) {
    Xrm.Internal.get_onXrmReadyHandlers().add(handler);
}
Xrm.Internal.associateObjects = function(objectTypeCode, parentId, type, lookupItems, roleStatus, itemType, associationName, showErrorDialog) {
    Xrm.Internal.$2.associateObjects(objectTypeCode, parentId, type, lookupItems, roleStatus, itemType, associationName, showErrorDialog);
}
Xrm.Internal.clearOnXrmReadyEventHandlers = function() {
    Xrm.Internal.$2.clearOnXrmReadyEventHandlers();
}
Xrm.Internal.executeOnXrmReadyEventHandlers = function() {
    Xrm.Internal.$2.executeOnXrmReadyEventHandlers();
}
Xrm.Internal.refreshRibbon = function() {
    Xrm.Internal.$2.refreshRibbon();
}
Xrm.Internal.executeRibbonCommand = function(commandId) {
    Xrm.Internal.$2.executeRibbonCommand(commandId);
}
Xrm.Internal.openDialog = function(url, dialogOptions, dialogArguments, initFunctionName, returnFunction) {
    Xrm.Internal.$2.openDialog(url, dialogOptions, dialogArguments, initFunctionName, returnFunction);
}
Xrm.Internal.isClaimsEnabled = function() {
    return Xrm.Internal.$2.isClaimsEnabled();
}
Xrm.Internal.isDialogLoaded = function() {
    return Xrm.Internal.$2.isDialogLoaded();
}
Xrm.Internal.formatDate = function(dateObject) {
    return Xrm.Internal.$2.formatDate(dateObject);
}
Xrm.Internal.getResourceString = function(key, location) {
    return Xrm.Internal.$2.getResourceString(key, location);
}
Xrm.Internal.isEnabledForInteractionCentric = function() {
    return Xrm.Internal.$2.isEnabledForInteractionCentric();
}
Xrm.Internal.setIsGridDialogContext = function(value) {
    Xrm.Internal.$2.setIsGridDialogContext(value);
}
Xrm.Internal.getSelectedEntityRecords = function() {
    return Xrm.Internal.$2.getSelectedEntityRecords();
}
Xrm.Internal.savePreSelectedViewModelIds = function() {
    return Xrm.Internal.$2.savePreSelectedViewModelIds();
}
Xrm.Internal.clearSelectedViewModels = function() {
    Xrm.Internal.$2.clearSelectedViewModels();
}
Xrm.Internal.getStringKeyList = function(dialogKeys, location) {
    return Xrm.Internal.$2.getStringKeyList(dialogKeys, location);
}
Xrm.Internal.getTenantProperties = function() {
    return Xrm.Internal.$2.getTenantProperties();
}
Xrm.Internal.getUserLicensesUsed = function() {
    return Xrm.Internal.$2.getUserLicensesUsed();
}
Xrm.Internal.getIsPaid = function() {
    return Xrm.Internal.$2.getIsPaid();
}
Xrm.Internal.getOrgType = function() {
    return Xrm.Internal.$2.getOrgType();
}
Xrm.Internal.setGuidedHelpProperties = function(value) {
    return Xrm.Internal.$2.setGuidedHelpProperties(value);
}
Xrm.Internal.getAllowedStatusTransitions = function(entityLogicalName, statusCode) {
    return Xrm.Internal.$2.getAllowedStatusTransitions(entityLogicalName, statusCode);
}
Xrm.Internal.getAvailableClients = function() {
    return Xrm.Internal.$2.getAvailableClients();
}
Xrm.Internal.getAvailableFormFactors = function() {
    return Xrm.Internal.$2.getAvailableFormFactors();
}
Xrm.Internal.getDisabledAttributes = function(entityName) {
    return Xrm.Internal.$2.getDisabledAttributes(entityName);
}
Xrm.Internal.getEntityCode = function(entityLogicalName) {
    return Xrm.Internal.$2.getEntityCode(entityLogicalName);
}
Xrm.Internal.getLocalStorageItem = function(key) {
    return Xrm.Internal.$2.getLocalStorageItem(key);
}
Xrm.Internal.getLocatorServiceSetting = function(settingName) {
    return Xrm.Internal.$2.getLocatorServiceSetting(settingName);
}
Xrm.Internal.getMaxSuggestionsCount = function() {
    return Xrm.Internal.$2.getMaxSuggestionsCount();
}
Xrm.Internal.removeLocalStorageItem = function(key) {
    Xrm.Internal.$2.removeLocalStorageItem(key);
}
Xrm.Internal.getEntityName = function(entityCode) {
    return Xrm.Internal.$2.getEntityName(entityCode);
}
Xrm.Internal.getEntityDisplayName = function(entityLogicalName) {
    return Xrm.Internal.$2.getEntityDisplayName(entityLogicalName);
}
Xrm.Internal.getEntitySetName = function(entityLogicalName) {
    return Xrm.Internal.$2.getEntitySetName(entityLogicalName);
}
Xrm.Internal.getEntityLocalizedSetName = function(entityLogicalName) {
    return Xrm.Internal.$2.getEntityLocalizedSetName(entityLogicalName);
}
Xrm.Internal.getStateFromNumber = function(entityLogicalName, stateCodes) {
    return Xrm.Internal.$2.getStateFromNumber(entityLogicalName, stateCodes);
}
Xrm.Internal.getUserLocation = function() {
    return Xrm.Internal.$2.getUserLocation();
}
Xrm.Internal.isDocumentManagementEnabledAccount = function(entityLogicalName) {
    return Xrm.Internal.$2.isDocumentManagementEnabledAccount(entityLogicalName);
}
Xrm.Internal.isFeatureEnabled = function(featureName) {
    return Xrm.Internal.$2.isFeatureEnabled(featureName);
}
Xrm.Internal.areFeaturesEnabled = function(featureNames) {
    return Xrm.Internal.$2.areFeaturesEnabled(featureNames);
}
Xrm.Internal.isGuidedHelpEnabledForUser = function() {
    return Xrm.Internal.$2.isGuidedHelpEnabledForUser();
}
Xrm.Internal.isMaxNoOfReadOnlyUsersReached = function() {
    return Xrm.Internal.$2.isMaxNoOfReadOnlyUsersReached();
}
Xrm.Internal.isModalDialogSupported = function() {
    return Xrm.Internal.$2.isModalDialogSupported();
}
Xrm.Internal.isIosDevice = function() {
    return Xrm.Internal.$2.isIosDevice();
}
Xrm.Internal.isTurboForm = function() {
    return Xrm.Internal.$2.isTurboForm();
}
Xrm.Internal.getStatusOptionsFromStateCode = function(entityLogicalName, stateCode) {
    return Xrm.Internal.$2.getStatusOptionsFromStateCode(entityLogicalName, stateCode);
}
Xrm.Internal.getStatusMetadataFromStateCode = function(entityLogicalName, stateCode) {
    return Xrm.Internal.$2.getStatusMetadataFromStateCode(entityLogicalName, stateCode);
}
Xrm.Internal.getStateCodeFromStatusOption = function(entityLogicalName, statusOptionId) {
    return Xrm.Internal.$2.getStateCodeFromStatusOption(entityLogicalName, statusOptionId);
}
Xrm.Internal.getPageNavigationInfo = function() {
    return Xrm.Internal.$2.getPageNavigationInfo();
}
Xrm.Internal.navigateToPage = function(pageNavigationInfo) {
    Xrm.Internal.$2.navigateToPage(pageNavigationInfo);
}
Xrm.Internal.setPerfMarkerTimestamp = function(markerName) {
    Xrm.Internal.$2.setPerfMarkerTimestamp(markerName);
}
Xrm.Internal.spOpenInNativeClient = function(absoluteUrl) {
    Xrm.Internal.$2.spOpenInNativeClient(absoluteUrl);
}
Xrm.Internal.parseDate = function(dateRaw) {
    return Xrm.Internal.$2.parseDate(dateRaw);
}
Xrm.Internal.raiseRecordsDeletedEvent = function(itemIds) {
    Xrm.Internal.$2.raiseRecordsDeletedEvent(itemIds);
}
Xrm.Internal.refresh = function() {
    Xrm.Internal.$2.refresh();
}
Xrm.Internal.refreshParentGrid = function(entityTypeCode, displayName, entityId) {
    Xrm.Internal.$2.refreshParentGrid(entityTypeCode, displayName, entityId);
}
Xrm.Internal.getErrorMessage = function(errorCode) {
    return Xrm.Internal.$2.getErrorMessage(errorCode);
}
Xrm.Internal.reportToWatson = function(message, url, line, sendReportToWatson, caller, exceptionNumber, reportFunctionBody) {
    Xrm.Internal.$2.reportToWatson(message, url, line, sendReportToWatson, caller, exceptionNumber, reportFunctionBody);
}
Xrm.Internal.openUrl = function(url, options) {
    Xrm.Internal.$2.openUrl(url, options);
}
Xrm.Internal.lookupObjects = function(lookupOptions, callback, lookupField, cancelCallback) {
    Xrm.Internal.$2.lookupObjects(lookupOptions, callback, lookupField, cancelCallback);
}
Xrm.Internal.openErrorDialog = function(errorCode, message, serializedException, serviceFault) {
    Xrm.Internal.$2.openErrorDialog(errorCode, message, serializedException, serviceFault);
}
Xrm.Internal.doAction = function(gridId, objectType, action, objectId) {
    Xrm.Internal.$2.doAction(gridId, objectType, action, objectId);
}
Xrm.Internal.setComposeAddress = function(addressPrefix, line1, line2, line3, city, state, postalCode, country) {
    Xrm.Internal.$2.setComposeAddress(addressPrefix, line1, line2, line3, city, state, postalCode, country);
}
Xrm.Internal.setFormEntityName = function(name) {
    Xrm.Internal.$2.setFormEntityName(name);
}
Xrm.Internal.setFormActionableNotification = function(options) {
    return Xrm.Internal.$2.setFormActionableNotification(options);
}
Xrm.Internal.setLocalStorageItem = function(key, value) {
    Xrm.Internal.$2.setLocalStorageItem(key, value);
}
Xrm.Internal.generateDocumentTemplateFlyout = function(commandProperties, entityLogicalName, ribbonContextType, relationshipType) {
    Xrm.Internal.$2.generateDocumentTemplateFlyout(commandProperties, entityLogicalName, ribbonContextType, relationshipType);
}
Xrm.Internal.generateWordTemplateFlyout = function(commandProperties, entityLogicalName, isForm, ribbonContextType, relationshipType) {
    Xrm.Internal.$2.generateWordTemplateFlyout(commandProperties, entityLogicalName, isForm, ribbonContextType, relationshipType);
}
Xrm.Internal.getOrganizationSetting = function(setting) {
    return Xrm.Internal.$2.getOrganizationSetting(setting);
}
Xrm.Internal.removeOnXrmReady = function(handler) {
    Xrm.Internal.get_onXrmReadyHandlers().remove(handler);
}
Xrm.Internal.retrieveADUserProperties = function(domainAccountName) {
    return Xrm.Internal.$2.retrieveADUserProperties(domainAccountName);
}
Xrm.Internal.canOverridePriceEngine = function(entityLogicalName) {
    return Xrm.Internal.$2.canOverridePriceEngine(entityLogicalName);
}
Xrm.Internal.copyTextToClipboard = function(text) {
    Xrm.Internal.$2.copyTextToClipboard(text);
}
Xrm.Internal.isFieldChangeIndicatorEnabled = function() {
    return Xrm.Internal.$2.isFieldChangeIndicatorEnabled();
}
Xrm.Internal.enableFieldChangeIndicator = function() {
    Xrm.Internal.$2.enableFieldChangeIndicator();
}
Xrm.Internal.disableFieldChangeIndicator = function() {
    Xrm.Internal.$2.disableFieldChangeIndicator();
}
Xrm.Internal.insertCustomScript = function(scriptString) {
    Xrm.Internal.$2.insertCustomScript(scriptString);
}
Xrm.Internal.getPageContext = function() {
    return Xrm.Internal.$2.getPageContext();
}
Xrm.Internal.generateReportMenuXml = function(commandProperties, entityLogicalName, isForm, ribbonContextType, relationshipType) {
    Xrm.Internal.$2.generateReportMenuXml(commandProperties, entityLogicalName, isForm, ribbonContextType, relationshipType);
}
Xrm.Internal.preventBrowseBack = function() {
    Xrm.Internal.$2.preventBrowseBack();
}
Xrm.Internal.goBack = function() {
    Xrm.Internal.$2.goBack();
}
Xrm.Internal.startMetricsStopwatch = function(label) {
    return Xrm.Internal.$2.startMetricsStopwatch(label);
}
Xrm.Internal.progress = function(message, value, max, min) {
    Xrm.Internal.$2.progress(message, value, max, min);
}
Xrm.Internal.canApproveOrPublishKnowledgeArticle = function(isApprove) {
    return Xrm.Internal.$2.canApproveOrPublishKnowledgeArticle(isApprove);
}
Xrm.Internal.isKnowledgemanagementEnabled = function(entityLogicalName) {
    return Xrm.Internal.$2.isKnowledgemanagementEnabled(entityLogicalName);
}
Xrm.Internal.relationshipAddOnChange = function(relationshipName, attributeLogicalName, handler) {
    Xrm.Internal.$2.relationshipAddOnChange(relationshipName, attributeLogicalName, handler);
}
Xrm.Internal.isCurrentKMParature = function() {
    return Xrm.Internal.$2.isCurrentKMParature();
}
Xrm.Internal.getHomePageGridSelectedRecordIds = function() {
    return Xrm.Internal.$2.getHomePageGridSelectedRecordIds();
}
Xrm.Internal.postAppMessageBar = function(contextType, id, title, messageType, buttonAction, actionButtonText) {
    Xrm.Internal.$2.postAppMessageBar(contextType, id, title, messageType, buttonAction, actionButtonText);
}
Xrm.Internal.getHomePageGridSelectedRecordsCount = function() {
    return Xrm.Internal.$2.getHomePageGridSelectedRecordsCount();
}
Xrm.Internal.filterLookupTypes = function(lookupAttribute, lookupTypeNames, hideTypes) {
    return Xrm.Internal.$2.filterLookupTypes(lookupAttribute, lookupTypeNames, hideTypes);
}
Xrm.Internal.getLookupTypes = function(lookupAttribute) {
    return Xrm.Internal.$2.getLookupTypes(lookupAttribute);
}
Xrm.Internal.recalculateRecord = function() {
    Xrm.Internal.$2.recalculateRecord();
}
Xrm.Internal.addMetric = function(eventName, $sn_arguments) {
    Xrm.Internal.$2.addMetric(eventName, $sn_arguments);
}
Xrm.Internal.isUci = function() {
    return false;
}
Xrm.Internal.setTraversedPath = function(value) {
    Xrm.Internal.$2.setTraversedPath(value);
}
Xrm.Internal.getTraversedPath = function() {
    return Xrm.Internal.$2.getTraversedPath();
}
Xrm.Internal.setStageId = function(value) {
    Xrm.Internal.$2.setStageId(value);
}
Xrm.Internal.getStageId = function() {
    return Xrm.Internal.$2.getStageId();
}


Xrm.Mobile = function() {
}


Xrm.Navigation = function() {
}
Xrm.Navigation.setInstance = function(instance) {
    Xrm.Navigation.$2 = instance;
}
Xrm.Navigation.openDialog = function(dialogName, dialogOptions, parameters) {
    var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(XrmClientApi.DialogResponse, Xrm.ErrorResponse);
    try {
        Xrm.Navigation.$2.openDialog(dialogName, dialogOptions, parameters).then(function($p1_0) {
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $v_0.resolve($p1_0);
        });
    }
    catch ($v_1) {
        var $v_2 = new Xrm.ErrorResponse($v_1.getHashCode(), $v_1.message, $v_1.stack.toString(), null);
        $v_0.reject($v_2);
    }
    return $v_0.promise();
}
Xrm.Navigation.openAlertDialog = function(alertStrings, options) {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Function, Xrm.ErrorResponse);
    try {
        Xrm.Navigation.$2.openAlertDialog(alertStrings, options).then(function($p1_0) {
            $v_0.resolve();
        }, function($p1_0) {
            $v_0.resolve();
        });
    }
    catch ($v_1) {
        var $v_2 = new Xrm.ErrorResponse($v_1.getHashCode(), $v_1.message, $v_1.stack.toString(), null);
        $v_0.reject($v_2);
    }
    return $v_0.promise();
}
Xrm.Navigation.openConfirmDialog = function(confirmStrings, options) {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(XrmClientApi.ConfirmDialogResponse, Xrm.ErrorResponse);
    try {
        Xrm.Navigation.$2.openConfirmDialog(confirmStrings, options).then(function($p1_0) {
            var $v_1 = (_Script.isNullOrUndefined($p1_0)) ? false : Boolean.parse($p1_0.toString());
            $p1_0 = new XrmClientApi.ConfirmDialogResponse();
            $p1_0.confirmed = $v_1;
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            var $v_2 = (_Script.isNullOrUndefined($p1_0)) ? false : Boolean.parse($p1_0.toString());
            $p1_0 = new XrmClientApi.ConfirmDialogResponse();
            $p1_0.confirmed = $v_2;
            $v_0.resolve($p1_0);
        });
    }
    catch ($v_3) {
        var $v_4 = new Xrm.ErrorResponse($v_3.getHashCode(), $v_3.message, $v_3.stack.toString(), null);
        $v_0.reject($v_4);
    }
    return $v_0.promise();
}
Xrm.Navigation.openTaskFlow = function(name, entityContext, inputArguments) {
    return Xrm.Navigation.$2.openTaskFlow(name, entityContext, inputArguments);
}
Xrm.Navigation.navigateTo = function(input) {
    return Xrm.Navigation.$2.navigateTo(input);
}
Xrm.Navigation.openWebResource = function(webResourceName, windowOptions, webResourceData) {
    Xrm.Navigation.$2.openWebResource(webResourceName, windowOptions, webResourceData);
}
Xrm.Navigation.openUrl = function(url, options) {
    Xrm.Navigation.$2.openUrl(url, options);
}
Xrm.Navigation.openFile = function(file, option) {
    return Xrm.Navigation.$2.openFile(file, option);
}
Xrm.Navigation.openForm = function(options, parameters) {
    return Xrm.Navigation.$2.openForm(options, parameters);
}
Xrm.Navigation.openErrorDialog = function(options) {
    return Xrm.Navigation.$2.openErrorDialog(options);
}


Xrm.Page = function() {
}
Xrm.Page.getControl = function(parameter) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui)) {
        return Xrm.Page.ui.controls.get(parameter);
    }
    return null;
}
Xrm.Page.getAttribute = function(parameter) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        return Xrm.Page.data.entity.attributes.get(parameter);
    }
    return null;
}
Xrm.Page.getUrl = function() {
    var $v_0 = '';
    var $v_1 = '';
    var $v_2 = '';
    var $v_3 = null;
    if (Xrm.Page.checkFormPageStringInUrl(window.location.toString())) {
        $v_3 = window.frameElement.contentWindow;
    }
    else {
        for (var $v_4 = 0; $v_4 < window.frames.length; $v_4++) {
            if (Xrm.Page.checkFormPageStringInUrl(window.frames[$v_4].location.toString())) {
                $v_3 = window.frames[$v_4].frameElement.contentWindow;
                break;
            }
        }
    }
    if (!$v_3) {
        throw Error.invalidOperation('This API is not supported for home page grids');
    }
    $v_1 = $v_3.Xrm.Page.data.entity.getEntityName().toString();
    $v_2 = $v_3.Xrm.Page.data.entity.getId().toString();
    $v_0 = String.format('{0}/main.aspx?pagetype=entityrecord&etn={1}&id={2}', Xrm.Page.context.getClientUrl(), encodeURI($v_1), encodeURI($v_2));
    return $v_0;
}
Xrm.Page.checkFormPageStringInUrl = function(pageLocationUrl) {
    if (pageLocationUrl.indexOf('form/page.aspx') !== -1) {
        return true;
    }
    else {
        return false;
    }
}


Xrm.UI = function() {
}
Xrm.UI.addGlobalNotification = function(level, type, title, message, action) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.App.UI.addGlobalNotification');
}
Xrm.UI.clearGlobalNotification = function(id) {
    Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.App.UI.clearGlobalNotification');
}


Xrm.Utility = function() {
}
Xrm.Utility.setInstance = function(instance) {
    Xrm.Utility.$2 = instance;
}
Xrm.Utility.areStateTransitionsEnforced = function(entityLogicalName) {
    return Xrm.Utility.$2.areStateTransitionsEnforced(entityLogicalName);
}
Xrm.Utility.beginSecureSessionForResource = function(resource, cookieName, cookieDomain) {
    return Xrm.Utility.$2.beginSecureSessionForResource(resource, cookieName, cookieDomain);
}
Xrm.Utility.create = function(entityLogicalName, parent, relationship, parameters, successCallback, failureCallback) {
    Xrm.Utility.$2.create(entityLogicalName, parent, relationship, parameters, successCallback, failureCallback);
}
Xrm.Utility.openEntityForm = function(entityLogicalName, id, parameters, options) {
    Xrm.Utility.$2.openEntityForm(entityLogicalName, id, parameters, options);
}
Xrm.Utility.openQuickCreate = function(entityLogicalName, createFromEntity, parameters) {
    return Xrm.Utility.$2.openQuickCreate(entityLogicalName, createFromEntity, parameters);
}
Xrm.Utility.openTaskFlow = function(name, entityContext, inputArguments) {
    return Xrm.Utility.$2.openTaskFlow(name, entityContext, inputArguments);
}
Xrm.Utility.invokeProcessAction = function(actionName, inputParameters) {
    return Xrm.Utility.$2.invokeProcessAction(actionName, inputParameters);
}
Xrm.Utility.openWebResource = function(webResourceName, webResourceData, width, height) {
    return Xrm.Utility.$2.openWebResource(webResourceName, webResourceData, width, height);
}
Xrm.Utility.alertDialog = function(message, onCloseCallback) {
    Xrm.Utility.$2.alertDialog(message, onCloseCallback);
}
Xrm.Utility.confirmDialog = function(message, yesCloseCallback, noCloseCallback) {
    Xrm.Utility.$2.confirmDialog(message, yesCloseCallback, noCloseCallback);
}
Xrm.Utility.isActivityType = function(entityLogicalName) {
    return Xrm.Utility.$2.isActivityType(entityLogicalName);
}
Xrm.Utility.isEntityOfflineSyncEnabled = function(entityLogicalName) {
    return Xrm.Utility.$2.isEntityOfflineSyncEnabled(entityLogicalName);
}
Xrm.Utility.isEntityOfflineDisabled = function(entityLogicalName) {
    return Xrm.Utility.$2.isEntityOfflineDisabled(entityLogicalName);
}
Xrm.Utility.isOfflineDataStoreAvailable = function() {
    return Xrm.Utility.$2.isOfflineDataStoreAvailable();
}
Xrm.Utility.isMocaOfflineFeatureEnabled = function() {
    return Xrm.Utility.$2.isMocaOfflineFeatureEnabled();
}
Xrm.Utility.isAppOfflineSyncEnabled = function() {
    return Xrm.Utility.$2.isAppOfflineSyncEnabled();
}
Xrm.Utility.isMocaOffline = function() {
    return Xrm.Utility.$2.isMocaOffline();
}
Xrm.Utility.showHierarchyPage = function(entityTypeName, entityId) {
    Xrm.Utility.$2.showHierarchyPage(entityTypeName, entityId);
}
Xrm.Utility.getEntitySetName = function(logicalName) {
    return Xrm.Utility.$2.getEntitySetName(logicalName);
}
Xrm.Utility.getGlobalContext = function() {
    return Xrm.Utility.$2.getGlobalContext();
}
Xrm.Utility.refreshParentGrid = function(lookupObject) {
    Xrm.Utility.$2.refreshParentGrid(lookupObject);
}
Xrm.Utility.deleteRecord = function(entityName, entityId) {
    return Xrm.Utility.$2.deleteRecord(entityName, entityId);
}
Xrm.Utility.executeNonCudCommand = function(cmdName, entityLogicalName, request, successCallback, actionFailedCallback) {
    Xrm.Utility.$2.executeNonCudCommand(cmdName, entityLogicalName, request, successCallback, actionFailedCallback);
}
Xrm.Utility.retrieveEntityRecord = function(entityReference, columnNames, successCallback, actionFailedCallback) {
    Xrm.Utility.$2.retrieveEntityRecord(entityReference, columnNames, successCallback, actionFailedCallback);
}
Xrm.Utility.retrieveEntityCollection = function(keyQuery, successCallback, actionFailedCallback) {
    Xrm.Utility.$2.retrieveEntityCollection(keyQuery, successCallback, actionFailedCallback);
}
Xrm.Utility.getCurrentPosition = function() {
    return Xrm.Utility.$2.getCurrentPosition();
}
Xrm.Utility.getBarcodeValue = function() {
    return Xrm.Utility.$2.getBarcodeValue();
}
Xrm.Utility.getDefaultTransactionCurrency = function() {
    return Xrm.Utility.$2.getDefaultTransactionCurrency();
}
Xrm.Utility.retrieveDefaultStatusForState = function(entityName, state) {
    return Xrm.Utility.$2.retrieveDefaultStatusForState(entityName, state);
}
Xrm.Utility.getEntityUrl = function(entity, id) {
    return Xrm.Utility.$2.getEntityUrl(entity, id);
}
Xrm.Utility.getResourceString = function(webResourceName, key) {
    return Xrm.Utility.$2.getResourceString(webResourceName, key);
}
Xrm.Utility.getValidStatusTransition = function(entityName, recordId, currentStatus, currentState, toState) {
    return Xrm.Utility.$2.getValidStatusTransition(entityName, recordId, currentStatus, currentState, toState);
}
Xrm.Utility.openDialog = function(url, dialogOptions, dialogArguments, initFunctionName, returnFunction) {
    Xrm.Utility.$2.openDialog(url, dialogOptions, dialogArguments, initFunctionName, returnFunction);
}
Xrm.Utility.isOptimisticConcurrencyEnabled = function(entityLogicalName) {
    return Xrm.Utility.$2.isOptimisticConcurrencyEnabled(entityLogicalName);
}
Xrm.Utility.openRecord = function(entityName, entityId, parameters) {
    return Xrm.Utility.$2.openRecord(entityName, entityId, parameters);
}
Xrm.Utility.isVisibleInMobileClient = function(entityLogicalName) {
    return Xrm.Utility.$2.isVisibleInMobileClient(entityLogicalName);
}
Xrm.Utility.isDocumentRecommendationsEnabledForEntity = function(entityLogicalName) {
    return Xrm.Utility.$2.isDocumentRecommendationsEnabledForEntity(entityLogicalName);
}
Xrm.Utility.getEntityMetadata = function(entityLogicalName, attributes) {
    return Xrm.Utility.$2.getEntityMetadata(entityLogicalName, attributes);
}
Xrm.Utility.lookupObjects = function(lookupOptions) {
    return Xrm.Utility.$2.lookupObjects(lookupOptions);
}
Xrm.Utility.getAllowedStatusTransitions = function(entityLogicalName, statusCode) {
    return Xrm.Utility.$2.getAllowedStatusTransitions(entityLogicalName, statusCode);
}
Xrm.Utility.showProgressIndicator = function(message) {
    Xrm.Utility.$2.showProgressIndicator(message);
}
Xrm.Utility.closeProgressIndicator = function() {
    Xrm.Utility.$2.closeProgressIndicator();
}
Xrm.Utility.getLearningPathAttributeName = function() {
    return Xrm.Utility.$2.getLearningPathAttributeName();
}


Xrm.Panel = function() {
}
Xrm.Panel.setInstance = function(instance) {
    Xrm.Panel.$2 = instance;
}
Xrm.Panel.loadPanel = function(url, title) {
    Xrm.Panel.$2.loadPanel(url, title);
}
Xrm.Panel.setPanelState = function(panelStateAction) {
    Xrm.Panel.$2.setPanelState(panelStateAction);
}
Xrm.Panel.getPanelState = function() {
    return Xrm.Panel.$2.getPanelState();
}


Type.registerNamespace('Xrm.Collection');

Xrm.Collection.AttributeMetadataItemCollection = function() {
    this.keys = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
    Xrm.Collection.AttributeMetadataItemCollection.initializeBase(this);
}
Xrm.Collection.AttributeMetadataItemCollection.prototype = {
    
    add: function(itemKey, item) {
        for (var $v_0 = 0; $v_0 < this.keys.get_Count(); $v_0++) {
            var $v_1 = this.keys.get_item($v_0);
            if ($v_1 === itemKey) {
                throw Error.argument('An element with the same key already exists in the dictionary');
            }
        }
        this[itemKey] = item;
        this.keys.add(itemKey);
        this.values.add(item);
    }
}


Type.registerNamespace('Xrm.Constants');

Xrm.Constants.PanelState = function() {}
Xrm.Constants.PanelState.prototype = {
    collapsed: 0, 
    expanded: 1
}
Xrm.Constants.PanelState.registerEnum('Xrm.Constants.PanelState', false);


Xrm.Constants.PageType = function() {
}


Xrm.Constants.ViewType = function() {
}


Xrm.Constants.AttributeRequiredLevels = function() {
}


Xrm.Constants.AttributeSubmitModes = function() {
}


Xrm.Constants.AttributeTypes = function() {
}


Xrm.Constants.NumberAttributeMetadata = function() {
}


Xrm.Constants.AttributeFormats = function() {
}


Xrm.Constants.ClientNames = function() {
}


Xrm.Constants.ClientStates = function() {
}


Xrm.Constants.EntityNames = function() {
}


Xrm.Constants.FormNotificationLevels = function() {
}


Xrm.Constants.FormSaveActions = function() {
}


Xrm.Constants.ProcessInstanceStatuses = function() {
}


Xrm.Constants.ProcessStageStatus = function() {
}


Xrm.Constants.TabDisplayStates = function() {
}


Xrm.Constants.ControlTypes = function() {
}


Type.registerNamespace('XrmUI');

XrmUI.IXrmUIControl = function() {}
XrmUI.IXrmUIControl.registerInterface('XrmUI.IXrmUIControl');


XrmUI.IXrmUIControlsData = function() {}
XrmUI.IXrmUIControlsData.registerInterface('XrmUI.IXrmUIControlsData');


XrmUI.IXrmUIHelper = function() {}
XrmUI.IXrmUIHelper.registerInterface('XrmUI.IXrmUIHelper');


XrmUI.XrmUIBoundingBox = function() {}


XrmUI.Page = function() {
}
XrmUI.Page.prototype = {
    $O_0: null,
    $C_0: null,
    
    get_pageName: function() {
        return this.$O_0;
    },
    
    set_pageName: function(value) {
        this.$O_0 = value;
        return value;
    },
    
    get_additionalProperties: function() {
        return this.$C_0;
    },
    
    set_additionalProperties: function(value) {
        this.$C_0 = value;
        return value;
    },
    
    getName: function() {
        return this.$O_0;
    },
    
    getProperties: function() {
        return this.$C_0;
    }
}


XrmUI.XrmUIControls = function(items) {
    XrmUI.XrmUIControls.initializeBase(this, [ items ]);
}


XrmUI.ControlId = function() {
}


XrmUI.UIControlType = function() {
}


XrmUI.Manager = function() {
}
XrmUI.Manager.getActivePage = function() {
    return XrmUI.Manager.XrmUIPage;
}
XrmUI.Manager.getActiveControls = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(XrmUI.Manager.ControlsData)) {
        return XrmUI.Manager.ControlsData.getControls();
    }
    return null;
}
XrmUI.Manager.getAllChildControls = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(XrmUI.Manager.ControlsData)) {
        return XrmUI.Manager.ControlsData.getAllChildControls();
    }
    return null;
}
XrmUI.Manager.setInstance = function(instance) {
    XrmUI.Manager.$I = instance;
}
XrmUI.Manager.loadScripts = function(files, callback) {
    XrmUI.Manager.$I.loadScripts(files, callback);
}
XrmUI.Manager.getTopZIndex = function() {
    return XrmUI.Manager.$I.getTopZIndex();
}
XrmUI.Manager.isPageLoaded = function() {
    return XrmUI.Manager.$I.isPageLoaded();
}


Type.registerNamespace('XrmClientApi');

XrmClientApi.CrudSdk = function() {}
XrmClientApi.CrudSdk.registerInterface('XrmClientApi.CrudSdk');


XrmClientApi.ErrorResponse = function(errorCode, message, debugMessage, innerError) {
    XrmClientApi.ErrorResponse.initializeBase(this, [ errorCode, message, debugMessage, innerError ]);
    this.innerror = innerError;
}
XrmClientApi.ErrorResponse.prototype = {
    innerror: null
}


XrmClientApi.OnlineSdk = function() {
}
XrmClientApi.OnlineSdk.prototype = {
    
    retrieveRecord: function(entityName, entityId, options) {
        XrmClientApi.WebApi.Util.checkParameters([ entityName, entityId ], [ 'entityName', 'entityId' ]);
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.online.retrieveRecord');
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Xrm.ErrorResponse);
        try {
            var $v_1 = XrmClientApi.WebApi.WebApiParser.getCollectionName(entityName) + '(' + XrmClientApi.WebApi.WebApiParser.trimEntityId(entityId) + ')';
            $v_1 += XrmClientApi.WebApi.WebApiParser.trimOptions(options);
            $v_1 = XrmClientApi.WebApi.WebApiParser.trimUrl($v_1);
            var $v_2 = {};
            $v_2['prefer'] = 'odata.include-annotations=\"*\"';
            $v_2['MSCRM.ReturnNotifications'] = 'true';
            var $v_3 = [ 200 ];
            var $v_4 = XrmClientApi.WebApi.WebApiService.getHTTPRequest(Object, Xrm.ErrorResponse, 'GET', $v_1, 0, entityName, $v_3, $v_0, $v_2);
            $v_4.send(null);
            return $v_0.promise();
        }
        catch ($v_5) {
            Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApi.online.retrieveRecord', $v_5);
            $v_0.reject(new Xrm.ErrorResponse(0, $v_5.message, $v_5.stack, null));
            return $v_0.promise();
        }
    },
    
    createRecord: function(entityType, data) {
        XrmClientApi.WebApi.Util.checkParameters([ entityType, data ], [ 'entityType', 'data' ]);
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.online.createRecord');
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(XrmClientApi.WebApi.EntityReference, Xrm.ErrorResponse);
        try {
            var $v_1 = XrmClientApi.WebApi.WebApiParser.getCollectionName(entityType);
            $v_1 = XrmClientApi.WebApi.WebApiParser.trimUrl($v_1);
            var $v_2 = [ 201, 204 ];
            var $v_3 = XrmClientApi.WebApi.WebApiService.getHTTPRequest(XrmClientApi.WebApi.EntityReference, Xrm.ErrorResponse, 'POST', $v_1, 2, entityType, $v_2, $v_0, null);
            $v_3.send(JSON.stringify(data));
            return $v_0.promise();
        }
        catch ($v_4) {
            Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApi.online.createRecord', $v_4);
            $v_0.reject(new Xrm.ErrorResponse(0, $v_4.message, $v_4.stack, null));
            return $v_0.promise();
        }
    },
    
    updateRecord: function(entityType, entityId, data) {
        XrmClientApi.WebApi.Util.checkParameters([ entityType, entityId, data ], [ 'entityType', 'entityId', 'data' ]);
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.webApi.online.updateRecord');
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(XrmClientApi.WebApi.EntityReference, Xrm.ErrorResponse);
        try {
            var $v_1 = XrmClientApi.WebApi.WebApiParser.getCollectionName(entityType) + '(' + XrmClientApi.WebApi.WebApiParser.trimEntityId(entityId) + ')';
            $v_1 = XrmClientApi.WebApi.WebApiParser.trimUrl($v_1);
            var $v_2 = [ 204, 1223 ];
            var $v_3 = {};
            $v_3['X-HTTP-Method'] = 'MERGE';
            var $v_4 = XrmClientApi.WebApi.WebApiService.getHTTPRequest(XrmClientApi.WebApi.EntityReference, Xrm.ErrorResponse, 'PATCH', $v_1, 3, entityType, $v_2, $v_0, $v_3);
            $v_4.send(JSON.stringify(data));
            return $v_0.promise();
        }
        catch ($v_5) {
            Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.webApi.online.updateRecord', $v_5);
            $v_0.reject(new Xrm.ErrorResponse(0, $v_5.message, $v_5.stack, null));
            return $v_0.promise();
        }
    },
    
    deleteRecord: function(entityType, entityId) {
        XrmClientApi.WebApi.Util.checkParameters([ entityType, entityId ], [ 'entityType', 'entityId' ]);
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.online.deleteRecord');
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(XrmClientApi.WebApi.EntityReference, Xrm.ErrorResponse);
        try {
            var $v_1 = XrmClientApi.WebApi.WebApiParser.getCollectionName(entityType) + '(' + XrmClientApi.WebApi.WebApiParser.trimEntityId(entityId) + ')';
            $v_1 = XrmClientApi.WebApi.WebApiParser.trimUrl($v_1);
            var $v_2 = [ 204, 1223 ];
            var $v_3 = {};
            $v_3['X-HTTP-Method'] = 'DELETE';
            var $v_4 = XrmClientApi.WebApi.WebApiService.getHTTPRequest(XrmClientApi.WebApi.EntityReference, Xrm.ErrorResponse, 'DELETE', $v_1, 4, entityType, $v_2, $v_0, $v_3);
            $v_4.send(null);
            return $v_0.promise();
        }
        catch ($v_5) {
            Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApi.online.deleteRecord', $v_5);
            $v_0.reject(new Xrm.ErrorResponse(0, $v_5.message, $v_5.stack, null));
            return $v_0.promise();
        }
    },
    
    retrieveMultipleRecords: function(entityType, options, maxPageSize) {
        XrmClientApi.WebApi.Util.checkParameters([ entityType ], [ 'entityType' ]);
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.online.retrieveMultipleRecords');
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(XrmClientApi.WebApi.RetrieveMultipleResponse, Xrm.ErrorResponse);
        try {
            var $v_1 = XrmClientApi.WebApi.WebApiParser.getCollectionName(entityType);
            $v_1 += XrmClientApi.WebApi.WebApiParser.trimOptions(options);
            $v_1 = XrmClientApi.WebApi.WebApiParser.trimUrl($v_1);
            var $v_2 = [ 200 ];
            var $v_3 = {};
            $v_3['MSCRM.ReturnNotifications'] = 'true';
            $v_3['prefer'] = 'odata.include-annotations=\"*\"';
            if (!Mscrm.InternalUtilities.JSTypes.isNull(maxPageSize)) {
                $v_3['prefer'] += ',' + String.format('odata.maxpagesize={0}', parseInt(maxPageSize));
            }
            var $v_4 = XrmClientApi.WebApi.WebApiService.getHTTPRequest(XrmClientApi.WebApi.RetrieveMultipleResponse, Xrm.ErrorResponse, 'GET', $v_1, 1, entityType, $v_2, $v_0, $v_3);
            $v_4.send(null);
            return $v_0.promise();
        }
        catch ($v_5) {
            Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApi.online.retrieveMultipleRecords', $v_5);
            $v_0.reject(new Xrm.ErrorResponse(0, $v_5.message, $v_5.stack, null));
            return $v_0.promise();
        }
    },
    
    execute: function(request) {
        XrmClientApi.WebApi.Util.checkParameters([ request ], [ 'request' ]);
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.online.execute');
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Xrm.ErrorResponse);
        try {
            var $v_1 = XrmClientApi.WebApi.ODataRequestBuilder.buildRequest(request);
            XrmClientApi.WebApi.WebApiService.sendSerializedRequest(Object, Xrm.ErrorResponse, $v_1, 5, $v_0);
            return $v_0.promise();
        }
        catch ($v_2) {
            Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApi.online.execute', $v_2);
            $v_0.reject(new Xrm.ErrorResponse(0, $v_2.message, $v_2.stack, null));
            return $v_0.promise();
        }
    },
    
    executeMultiple: function(requests) {
        XrmClientApi.WebApi.Util.checkParameters([ requests ], [ 'requests' ]);
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.online.executeMultiple');
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, Xrm.ErrorResponse);
        try {
            var $v_1 = new Array(0);
            for (var $v_3 = 0; $v_3 < requests.length; $v_3++) {
                if (this.$17_0(requests[$v_3])) {
                    $v_1[$v_3] = XrmClientApi.WebApi.ODataRequestBuilder.buildRequest(requests[$v_3]);
                }
                else if (this.$16_0(requests[$v_3])) {
                    var $v_4 = new Array(0);
                    var $v_5 = requests[$v_3];
                    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                        $v_4[$v_6] = XrmClientApi.WebApi.ODataRequestBuilder.buildRequest($v_5[$v_6]);
                    }
                    $v_1[$v_3] = $v_4;
                }
            }
            var $v_2 = XrmClientApi.WebApi.ODataRequestBuilder.buildBatchRequest($v_1);
            XrmClientApi.WebApi.WebApiService.sendSerializedRequest(Array, Xrm.ErrorResponse, $v_2, 6, $v_0);
            return $v_0.promise();
        }
        catch ($v_7) {
            Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLogForErrors('Xrm.WebApi.online.executeMultiple', $v_7);
            $v_0.reject(new Xrm.ErrorResponse(0, $v_7.message, $v_7.stack, null));
            return $v_0.promise();
        }
    },
    
    $17_0: function($p0) {
        return !Mscrm.InternalUtilities.JSTypes.isNull($p0) && !Mscrm.InternalUtilities.JSTypes.isArray($p0) && !Mscrm.InternalUtilities.JSTypes.isNull(($p0).getMetadata());
    },
    
    $16_0: function($p0) {
        var $v_0 = $p0;
        return !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.InternalUtilities.JSTypes.isArray($v_0) && $v_0.length > 0 && !Mscrm.InternalUtilities.JSTypes.isNull($v_0[0].getMetadata());
    }
}


XrmClientApi.OfflineSdk = function() {
}
XrmClientApi.OfflineSdk.prototype = {
    
    retrieveRecord: function(entityName, entityId, options) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.offline.retrieveRecord');
        throw Error.notImplemented();
    },
    
    createRecord: function(entityType, data) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.offline.createRecord');
        throw Error.notImplemented();
    },
    
    updateRecord: function(entityType, entityId, data) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.webApi.offline.updateRecord');
        throw Error.notImplemented();
    },
    
    deleteRecord: function(entityType, entityId) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.offline.deleteRecord');
        throw Error.notImplemented();
    },
    
    retrieveMultipleRecords: function(entityType, options, maxPageSize) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.offline.retrieveMultipleRecords');
        throw Error.notImplemented();
    },
    
    execute: function(request) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.offline.execute');
        throw Error.notImplemented();
    },
    
    executeMultiple: function(requests) {
        Mscrm.InternalUtilities.ClientApiUtility.addTelemetryLog('Xrm.WebApi.offline.executeMultiple');
        throw Error.notImplemented();
    },
    
    isAvailableOffline: function(entityName) {
        return false;
    }
}


XrmClientApi.DialogResponse = function() {
    this.parameters = {};
}


XrmClientApi.ConfirmDialogResponse = function() {
}
XrmClientApi.ConfirmDialogResponse.prototype = {
    confirmed: true
}


XrmClientApi.XrmAttributeMetadata = function() {
}
XrmClientApi.XrmAttributeMetadata.prototype = {
    logicalName: null,
    displayName: null,
    attributeType: 0,
    entityLogicalName: null,
    
    getKey: function() {
        return this.logicalName;
    }
}


XrmClientApi.XrmEnumAttributeMetadata = function() {
    XrmClientApi.XrmEnumAttributeMetadata.initializeBase(this);
}
XrmClientApi.XrmEnumAttributeMetadata.prototype = {
    defaultFormValue: 0,
    options: null,
    optionSet: null
}


XrmClientApi.XrmStateAttributeMetadata = function() {
    XrmClientApi.XrmStateAttributeMetadata.initializeBase(this);
}


XrmClientApi.XrmStatusAttributeMetadata = function() {
    XrmClientApi.XrmStatusAttributeMetadata.initializeBase(this);
}


Type.registerNamespace('XrmClientApi.WebApi');

XrmClientApi.WebApi.ODataStructuralProperty = function() {}
XrmClientApi.WebApi.ODataStructuralProperty.prototype = {
    unknown: 0, 
    primitiveType: 1, 
    complexType: 2, 
    enumerationType: 3, 
    collection: 4, 
    entityType: 5
}
XrmClientApi.WebApi.ODataStructuralProperty.registerEnum('XrmClientApi.WebApi.ODataStructuralProperty', false);


XrmClientApi.WebApi.Constants = function() {
}


XrmClientApi.WebApi.Constants.ODataOperationType = function() {}
XrmClientApi.WebApi.Constants.ODataOperationType.prototype = {
    action: 0, 
    func: 1, 
    CRUD: 2
}
XrmClientApi.WebApi.Constants.ODataOperationType.registerEnum('XrmClientApi.WebApi.Constants.ODataOperationType', false);


XrmClientApi.WebApi.Constants.APIOperation = function() {}
XrmClientApi.WebApi.Constants.APIOperation.prototype = {
    retrieveRecord: 0, 
    retrieveMultipleRecords: 1, 
    createRecord: 2, 
    updateRecord: 3, 
    deleteRecord: 4, 
    execute: 5, 
    executeMultiple: 6
}
XrmClientApi.WebApi.Constants.APIOperation.registerEnum('XrmClientApi.WebApi.Constants.APIOperation', false);


XrmClientApi.WebApi.Constants.HttpStatusCode = function() {}
XrmClientApi.WebApi.Constants.HttpStatusCode.prototype = {
    OK: 200, 
    created: 201, 
    accepted: 202, 
    nonAuthoritativeInformation: 203, 
    noContent: 204, 
    resetContent: 205, 
    partialContent: 206, 
    multiStatus: 207, 
    alreadyReported: 208, 
    imUsed: 226, 
    noContentIE: 1223
}
XrmClientApi.WebApi.Constants.HttpStatusCode.registerEnum('XrmClientApi.WebApi.Constants.HttpStatusCode', false);


XrmClientApi.WebApi.Constants.ParticipationTypeMask = function() {}
XrmClientApi.WebApi.Constants.ParticipationTypeMask.prototype = {
    sender: 1, 
    toRecipient: 2, 
    ccRecipient: 3, 
    bccRecipient: 4, 
    requiredAttendee: 5, 
    optionalAttendee: 6, 
    organizer: 7, 
    regarding: 8, 
    owner: 9, 
    resource: 10, 
    customer: 11, 
    INVALID: 12
}
XrmClientApi.WebApi.Constants.ParticipationTypeMask.registerEnum('XrmClientApi.WebApi.Constants.ParticipationTypeMask', false);


XrmClientApi.WebApi.EntityReference = function(id, entityType) {
    this.id = id;
    this.entityType = entityType;
}
XrmClientApi.WebApi.EntityReference.createEntityRefObj = function(entityRefObj) {
    var $v_0 = entityRefObj;
    var $v_1 = null;
    if (entityRefObj) {
        $v_1 = new XrmClientApi.WebApi.EntityReference($v_0['id'], $v_0['etn']);
    }
    return $v_1;
}
XrmClientApi.WebApi.EntityReference.prototype = {
    id: null,
    entityType: null
}


XrmClientApi.WebApi.EntityMetadataCache = function() {
}
XrmClientApi.WebApi.EntityMetadataCache.$12 = function() {
    var $v_0 = Math.abs(window.VERSION_STAMP);
    if (!$v_0) {
        $v_0 = Math.floor(Math.random() * 10000);
    }
    return $v_0.toString();
}
XrmClientApi.WebApi.EntityMetadataCache.$d = function($p0, $p1) {
    return String.format('{0}_{1}_{2}', $p0, $p1, XrmClientApi.WebApi.EntityMetadataCache.$12());
}
XrmClientApi.WebApi.EntityMetadataCache.$1B = function($p0, $p1) {
    if (!XrmClientApi.WebApi.EntityMetadataCache.$E) {
        XrmClientApi.WebApi.EntityMetadataCache.$E = {};
    }
    XrmClientApi.WebApi.EntityMetadataCache.$E[$p0] = $p1;
}
XrmClientApi.WebApi.EntityMetadataCache.$1A = function($p0) {
    if (!XrmClientApi.WebApi.EntityMetadataCache.$E) {
        return null;
    }
    return XrmClientApi.WebApi.EntityMetadataCache.$E[$p0];
}
XrmClientApi.WebApi.EntityMetadataCache.retrieveValueFromCache = function(entityType, type) {
    return XrmClientApi.WebApi.EntityMetadataCache.$1A(XrmClientApi.WebApi.EntityMetadataCache.$d(entityType, type));
}
XrmClientApi.WebApi.EntityMetadataCache.storeValueInCache = function(data, entityType, type) {
    if (data) {
        XrmClientApi.WebApi.EntityMetadataCache.$1B(XrmClientApi.WebApi.EntityMetadataCache.$d(entityType, type), data);
    }
}


XrmClientApi.WebApi.JSResponse = function(request) {
    this.headers = this.$11_0(request.getAllResponseHeaders());
    this.ok = this.$18_0(request.status);
    this.status = request.status;
    this.statusText = request.statusText;
    this.responseText = request.responseText;
    this.url = request.responseURL;
}
XrmClientApi.WebApi.JSResponse.prototype = {
    headers: null,
    ok: false,
    status: 0,
    statusText: null,
    responseText: null,
    url: null,
    
    text: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, Object);
        $v_0.resolve(this.responseText);
        return $v_0.promise();
    },
    
    json: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        try {
            var $v_1 = JSON.parse(this.responseText);
            $v_0.resolve($v_1);
        }
        catch ($v_2) {
            $v_0.reject($v_2);
        }
        return $v_0.promise();
    },
    
    $11_0: function($p0) {
        if (!$p0) {
            return null;
        }
        var $v_0 = {};
        var $v_1 = $p0.split('\n');
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2].indexOf(':');
            var $v_4 = $v_1[$v_2].substr(0, $v_3);
            var $v_5 = $v_1[$v_2].substr($v_3 + 2);
            if ($v_4 && $v_4.length > 0) {
                $v_0[$v_4] = $v_5.trim();
            }
        }
        return $v_0;
    },
    
    $18_0: function($p0) {
        return (Array.indexOf(XrmClientApi.WebApi.Constants.successCodes, $p0) !== -1);
    }
}


XrmClientApi.WebApi.ODataAssociateRequest = function(target, relationship, relatedEntities) {
    XrmClientApi.WebApi.ODataAssociateRequest.initializeBase(this);
    this.target = target;
    this.relationship = relationship;
    this.relatedEntities = relatedEntities;
}
XrmClientApi.WebApi.ODataAssociateRequest.prototype = {
    target: null,
    relationship: null,
    relatedEntities: null,
    
    getMetadata: function() {
        var $v_0 = new XrmClientApi.WebApi.ODataContractMetadata();
        $v_0.boundParameter = 'target';
        var $v_1 = {};
        $v_1['typeName'] = 'mscrm.crmbaseentity';
        $v_1['structuralProperty'] = 5;
        var $v_2 = {};
        $v_2['typeName'] = 'Edm.String';
        $v_2['structuralProperty'] = 1;
        var $v_3 = {};
        $v_3['typeName'] = 'mscrm.crmbaseentity';
        $v_3['structuralProperty'] = 4;
        $v_0.parameterTypes = {};
        $v_0.parameterTypes['target'] = $v_1;
        $v_0.parameterTypes['relationship'] = $v_2;
        $v_0.parameterTypes['relatedEntities'] = $v_3;
        $v_0.operationName = 'Associate';
        $v_0.operationType = 2;
        return $v_0;
    }
}


XrmClientApi.WebApi.ODataContract = function() {
}
XrmClientApi.WebApi.ODataContract.prototype = {
    parameters: null
}


XrmClientApi.WebApi.ODataCreateRequest = function(etn, payload) {
    XrmClientApi.WebApi.ODataCreateRequest.initializeBase(this);
    this.etn = etn;
    this.payload = payload;
}
XrmClientApi.WebApi.ODataCreateRequest.prototype = {
    etn: null,
    payload: null,
    
    getMetadata: function() {
        var $v_0 = new XrmClientApi.WebApi.ODataContractMetadata();
        $v_0.boundParameter = null;
        $v_0.parameterTypes = {};
        $v_0.operationName = 'Create';
        $v_0.operationType = 2;
        return $v_0;
    }
}


XrmClientApi.WebApi.ODataDeleteRequest = function(entityRef) {
    XrmClientApi.WebApi.ODataDeleteRequest.initializeBase(this);
    this.entityReference = entityRef;
}
XrmClientApi.WebApi.ODataDeleteRequest.prototype = {
    entityReference: null,
    
    getMetadata: function() {
        var $v_0 = new XrmClientApi.WebApi.ODataContractMetadata();
        $v_0.boundParameter = null;
        $v_0.parameterTypes = {};
        $v_0.operationName = 'Delete';
        $v_0.operationType = 2;
        return $v_0;
    }
}


XrmClientApi.WebApi.ODataDisassociateRequest = function(target, relationship, relatedEntityId) {
    XrmClientApi.WebApi.ODataDisassociateRequest.initializeBase(this);
    this.target = target;
    this.relationship = relationship;
    this.relatedEntityId = relatedEntityId;
}
XrmClientApi.WebApi.ODataDisassociateRequest.prototype = {
    target: null,
    relationship: null,
    relatedEntityId: null,
    
    getMetadata: function() {
        var $v_0 = new XrmClientApi.WebApi.ODataContractMetadata();
        $v_0.boundParameter = 'target';
        $v_0.parameterTypes = {};
        $v_0.operationName = 'Disassociate';
        $v_0.operationType = 2;
        return $v_0;
    }
}


XrmClientApi.WebApi.ODataRetrieveRequest = function(entityRef, columns) {
    XrmClientApi.WebApi.ODataRetrieveRequest.initializeBase(this);
    this.entityReference = entityRef;
    this.columns = columns;
}
XrmClientApi.WebApi.ODataRetrieveRequest.prototype = {
    entityReference: null,
    columns: null,
    
    getMetadata: function() {
        var $v_0 = new XrmClientApi.WebApi.ODataContractMetadata();
        $v_0.boundParameter = null;
        $v_0.parameterTypes = {};
        $v_0.operationName = 'Retrieve';
        $v_0.operationType = 2;
        return $v_0;
    }
}


XrmClientApi.WebApi.ODataUpdateRequest = function(etn, id, payload) {
    XrmClientApi.WebApi.ODataUpdateRequest.initializeBase(this);
    this.etn = etn;
    this.id = id;
    this.payload = payload;
}
XrmClientApi.WebApi.ODataUpdateRequest.prototype = {
    etn: null,
    id: null,
    payload: null,
    
    getMetadata: function() {
        var $v_0 = new XrmClientApi.WebApi.ODataContractMetadata();
        $v_0.boundParameter = null;
        $v_0.parameterTypes = {};
        $v_0.operationName = 'Update';
        $v_0.operationType = 2;
        return $v_0;
    }
}


XrmClientApi.WebApi.ODataContractMetadata = function() {
}
XrmClientApi.WebApi.ODataContractMetadata.prototype = {
    boundParameter: null,
    parameterTypes: null,
    operationName: null,
    operationType: 0
}


XrmClientApi.WebApi.ODataParameterType = function() {
}
XrmClientApi.WebApi.ODataParameterType.prototype = {
    structuralProperty: 0,
    typeName: null,
    enumProperties: null
}


XrmClientApi.WebApi.ODataEnumValue = function() {
}
XrmClientApi.WebApi.ODataEnumValue.prototype = {
    name: null,
    value: 0
}


XrmClientApi.WebApi.ODataRequestBuilder = function() {
}
XrmClientApi.WebApi.ODataRequestBuilder.$h = function($p0, $p1) {
    if (!$p0) {
        throw Error.create('Cannot generate base URL for the OData call: the routine name is empty.');
    }
    if (!$p1) {
        throw Error.create('Cannot generate base URL for the OData call: the request is empty.');
    }
    if (!($p1)['getMetadata']) {
        throw Error.create('Cannot generate base URL for the OData call: the request metadata is empty.');
    }
    var $v_0 = $p1.getMetadata().boundParameter;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        var $v_1 = $p1.getMetadata();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || Mscrm.InternalUtilities.JSTypes.isNull($v_1.parameterTypes) || Mscrm.InternalUtilities.JSTypes.isNull($v_1.parameterTypes[$v_0])) {
            return null;
        }
        var $v_2 = $v_1.parameterTypes[$v_0];
        if ($v_2.structuralProperty === 4) {
            var $v_3 = null;
            var $v_4 = $v_2.typeName;
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4)) {
                $v_3 = ($v_4.split('.').pop());
            }
            if (!$v_3) {
                return null;
            }
            return String.format(XrmClientApi.WebApi.Constants.oDataBaseUrlFormat1, XrmClientApi.WebApi.WebApiParser.getCollectionName($v_3), $p0);
        }
        else {
            var $v_5 = $p1;
            var $v_6 = $v_5[$v_0];
            var $v_7 = new XrmClientApi.WebApi.EntityReference($v_6['id'], $v_6['entityType']);
            return String.format(XrmClientApi.WebApi.Constants.oDataBaseUrlFormat2, XrmClientApi.WebApi.WebApiParser.getCollectionName($v_7.entityType), $v_7.id, $p0);
        }
    }
    else {
        return String.format(XrmClientApi.WebApi.Constants.oDataBaseUrlFormat3, $p0);
    }
}
XrmClientApi.WebApi.ODataRequestBuilder.$13 = function($p0) {
    return XrmClientApi.WebApi.ODataRequestBuilder.$h($p0.getMetadata().operationName, $p0);
}
XrmClientApi.WebApi.ODataRequestBuilder.$14 = function($p0) {
    var $v_0 = XrmClientApi.WebApi.ODataRequestBuilder.$h($p0.getMetadata().operationName, $p0);
    var $v_1 = XrmClientApi.WebApi.Serialization.ODataSerializer.serializeIntoURLFragment($p0);
    return $v_0 + $v_1;
}
XrmClientApi.WebApi.ODataRequestBuilder.$10 = function($p0, $p1, $p2) {
    if (!$p0 || !$p1 || !$p2) {
        throw Error.create('Cannot serialize associate request. All parameters are mandatory, but some were passed in empty');
    }
    var $v_0 = XrmClientApi.WebApi.WebApiParser.getCollectionName($p0.entityType);
    var $v_1 = XrmClientApi.WebApi.WebApiParser.getCollectionName($p2.entityType);
    var $v_2;
    var $v_3;
    var $v_4 = XrmClientApi.WebApi.Util.getOneToManyRelationship($p0.entityType, $p1);
    var $v_5 = XrmClientApi.WebApi.Util.getManyToManyRelationship($p0.entityType, $p1);
    var $v_6 = XrmClientApi.WebApi.Util.getManyToOneRelationship($p0.entityType, $p1);
    if ($v_4 || $v_5) {
        $v_2 = 'POST';
        $v_3 = $p1;
    }
    else if ($v_6) {
        $v_2 = 'PUT';
        $v_3 = $v_6['ReferencingEntityNavigationPropertyName'];
    }
    else {
        throw Error.create(String.format('No metadata is available for the relationship with the name {0}', $p1));
    }
    var $v_7 = {};
    $v_7['@odata.context'] = Xrm.Page.context.getClientUrl() + '/api/data/v9.0/' + '$metadata#$ref';
    $v_7['@odata.id'] = String.format('{0}({1})', $v_1, $p2.id);
    var $v_8 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_8.method = $v_2;
    $v_8.urlParameters = String.format(XrmClientApi.WebApi.Constants.associateRequestURLParameterFormat, $v_0, $p0.id, $v_3);
    $v_8.body = JSON.stringify($v_7);
    $v_8.additionalHeaders = {};
    $v_8.additionalHeaders['Accept'] = 'application/json';
    return null;
}
XrmClientApi.WebApi.ODataRequestBuilder.$n = function($p0) {
    var $v_0 = XrmClientApi.WebApi.ODataRequestBuilder.$13($p0);
    var $v_1 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_1.urlParameters = $v_0;
    $v_1.additionalHeaders = {};
    $v_1.additionalHeaders['Accept'] = 'application/json';
    $v_1.method = 'POST';
    $v_1.body = XrmClientApi.WebApi.Serialization.ODataSerializer.serializeContract($p0);
    return $v_1;
}
XrmClientApi.WebApi.ODataRequestBuilder.$u = function($p0) {
    var $v_0 = XrmClientApi.WebApi.ODataRequestBuilder.$14($p0);
    var $v_1 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_1.urlParameters = $v_0;
    $v_1.additionalHeaders = {};
    $v_1.additionalHeaders['Accept'] = 'application/json';
    $v_1.additionalHeaders['Prefer'] = 'odata.include-annotations=\"*\"';
    $v_1.method = 'GET';
    return $v_1;
}
XrmClientApi.WebApi.ODataRequestBuilder.$q = function($p0, $p1) {
    var $v_0 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_0.urlParameters = XrmClientApi.WebApi.WebApiParser.getCollectionName($p0);
    $v_0.additionalHeaders = {};
    $v_0.additionalHeaders['Accept'] = 'application/json';
    $v_0.additionalHeaders['MSCRM.SuppressDuplicateDetection'] = 'true';
    $v_0.method = 'POST';
    $v_0.body = JSON.stringify($p1);
    return $v_0;
}
XrmClientApi.WebApi.ODataRequestBuilder.$x = function($p0, $p1) {
    var $v_0 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_0.urlParameters = XrmClientApi.WebApi.Serialization.ODataSerializer.buildRetrieveRequestURLParameter($p0, $p1);
    $v_0.additionalHeaders = {};
    $v_0.additionalHeaders['Prefer'] = 'odata.include-annotations=\" * \"';
    $v_0.additionalHeaders['Accept'] = 'application/json';
    $v_0.additionalHeaders['MSCRM.ReturnNotifications'] = 'true';
    $v_0.method = 'GET';
    return $v_0;
}
XrmClientApi.WebApi.ODataRequestBuilder.$z = function($p0, $p1, $p2) {
    var $v_0 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_0.urlParameters = XrmClientApi.WebApi.WebApiParser.getCollectionName($p0) + '(' + $p1 + ')';
    $v_0.additionalHeaders = {};
    $v_0.additionalHeaders['If-match'] = '*';
    $v_0.additionalHeaders['MSCRM.SuppressDuplicateDetection'] = 'true';
    $v_0.method = 'PATCH';
    $v_0.body = JSON.stringify($p2);
    return $v_0;
}
XrmClientApi.WebApi.ODataRequestBuilder.$s = function($p0) {
    var $v_0 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_0.urlParameters = XrmClientApi.WebApi.WebApiParser.getCollectionName($p0.entityType) + '(' + $p0.id + ')';
    $v_0.method = 'DELETE';
    return $v_0;
}
XrmClientApi.WebApi.ODataRequestBuilder.$o = function($p0, $p1, $p2) {
    var $v_0 = new Array(0);
    for (var $v_1 = 0; $v_1 < $p2.length; $v_1++) {
        $v_0.push(XrmClientApi.WebApi.ODataRequestBuilder.$10($p0, $p1, $p2[$v_1]));
    }
    if ($v_0.length === 1) {
        return $v_0[0];
    }
    else {
        return XrmClientApi.WebApi.ODataRequestBuilder.buildBatchRequest($v_0);
    }
}
XrmClientApi.WebApi.ODataRequestBuilder.$t = function($p0, $p1, $p2) {
    if (!$p0 || !$p1) {
        throw Error.create('Cannot serialize associate request. All required parameters are mandatory, but some were passed in empty');
    }
    var $v_0 = XrmClientApi.WebApi.WebApiParser.getCollectionName($p0.entityType);
    var $v_1 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_1.method = 'DELETE';
    $v_1.urlParameters = String.format(XrmClientApi.WebApi.Constants.disassociateUrlParameterFormat, $v_0, $p0.id, $p1, (($p2) ? ('(' + $p2 + ')') : ('')));
    $v_1.additionalHeaders = {};
    $v_1.additionalHeaders['Accept'] = 'application/json';
    return $v_1;
}
XrmClientApi.WebApi.ODataRequestBuilder.$r = function($p0) {
    var $v_0 = $p0.getMetadata().operationName;
    switch ($v_0) {
        case 'Create':
            var $v_1 = $p0;
            return XrmClientApi.WebApi.ODataRequestBuilder.$q($v_1.etn, $v_1.payload);
        case 'Retrieve':
            var $v_2 = $p0;
            return XrmClientApi.WebApi.ODataRequestBuilder.$x(XrmClientApi.WebApi.EntityReference.createEntityRefObj($v_2.entityReference), $v_2.columns);
        case 'Update':
            var $v_3 = $p0;
            return XrmClientApi.WebApi.ODataRequestBuilder.$z($v_3.etn, $v_3.id, $v_3.payload);
        case 'Delete':
            var $v_4 = $p0;
            return XrmClientApi.WebApi.ODataRequestBuilder.$s($v_4.entityReference);
        case 'Associate':
            var $v_5 = $p0;
            var $v_6 = XrmClientApi.WebApi.EntityReference.createEntityRefObj($v_5.target);
            var $v_7 = new Array(0);
            for (var $v_A = 0; $v_A < $v_5.relatedEntities.length; $v_A++) {
                $v_7.push(XrmClientApi.WebApi.EntityReference.createEntityRefObj($v_5.relatedEntities[$v_A]));
            }
            return XrmClientApi.WebApi.ODataRequestBuilder.$o($v_6, $v_5.relationship, $v_7);
        case 'Disassociate':
            var $v_8 = $p0;
            var $v_9 = XrmClientApi.WebApi.EntityReference.createEntityRefObj($v_8.target);
            return XrmClientApi.WebApi.ODataRequestBuilder.$t($v_9, $v_8.relationship, $v_8.relatedEntityId);
    }
    return null;
}
XrmClientApi.WebApi.ODataRequestBuilder.buildRequest = function(request) {
    var $v_0 = request.getMetadata().operationType;
    switch ($v_0) {
        case 0:
            return XrmClientApi.WebApi.ODataRequestBuilder.$n(request);
        case 1:
            return XrmClientApi.WebApi.ODataRequestBuilder.$u(request);
        case 2:
            return XrmClientApi.WebApi.ODataRequestBuilder.$r(request);
    }
    return null;
}
XrmClientApi.WebApi.ODataRequestBuilder.$U = function() {
    return window.ORG_UNIQUE_NAME;
}
XrmClientApi.WebApi.ODataRequestBuilder.$W = function() {
    return window.IS_LIVE;
}
XrmClientApi.WebApi.ODataRequestBuilder.$X = function() {
    return !(window.IS_ONLINE) && window.IS_OUTLOOK_CLIENT;
}
XrmClientApi.WebApi.ODataRequestBuilder.$p = function($p0, $p1) {
    var $v_0 = '';
    var $v_1 = 1;
    for (var $v_2 = 0; $v_2 < $p1.length; $v_2++) {
        var $v_3 = $p1[$v_2];
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3.serializationFailure)) {
            throw Error.create('Error occurred during serialization: ' + $v_3.serializationFailure);
        }
        $v_0 += '--' + $p0 + '\n';
        $v_0 += 'Content-Type: application/http\nContent-Transfer-Encoding: binary\n';
        $v_0 += 'Content-ID: ' + ($v_1++) + '\n';
        $v_0 += '\n';
        if (!XrmClientApi.WebApi.ODataRequestBuilder.$W() && !XrmClientApi.WebApi.ODataRequestBuilder.$X()) {
            $v_0 += String.format('{0} /{1}/api/data/v9.0/{2} HTTP/1.1', $v_3.method, XrmClientApi.WebApi.ODataRequestBuilder.$U(), $v_3.urlParameters);
        }
        else {
            $v_0 += String.format('{0} /api/data/v9.0/{1} HTTP/1.1', $v_3.method, $v_3.urlParameters);
        }
        $v_0 += '\n';
        var $v_4 = XrmClientApi.WebApi.WebApiService.getKeysFromDictionary($v_3.additionalHeaders);
        for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
            $v_0 += String.format('\n{0}: {1}', $v_4[$v_5], $v_3.additionalHeaders[$v_4[$v_5]]);
            $v_0 += '\n';
        }
        $v_0 += 'Content-Type: application/json;type=entry\n';
        $v_0 += '\n';
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3.body)) {
            $v_0 += $v_3.body + '\n';
        }
    }
    $v_0 += '--' + $p0 + '--' + '\n';
    return $v_0;
}
XrmClientApi.WebApi.ODataRequestBuilder.$v = function($p0) {
    var $v_0 = '';
    if (!XrmClientApi.WebApi.ODataRequestBuilder.$W() && !XrmClientApi.WebApi.ODataRequestBuilder.$X()) {
        $v_0 = String.format('GET /{0}/api/data/v9.0/{1} HTTP/1.1', XrmClientApi.WebApi.ODataRequestBuilder.$U(), $p0.urlParameters);
    }
    else {
        $v_0 = String.format('GET /api/data/v9.0/{0} HTTP/1.1', $p0.urlParameters);
    }
    $v_0 += '\n';
    var $v_1 = XrmClientApi.WebApi.WebApiService.getKeysFromDictionary($p0.additionalHeaders);
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        $v_0 += String.format('{0}: {1}', $v_1[$v_2], $p0.additionalHeaders[$v_1[$v_2]]);
        $v_0 += '\n';
    }
    return $v_0;
}
XrmClientApi.WebApi.ODataRequestBuilder.$y = function($p0) {
    var $v_0 = '';
    if (!XrmClientApi.WebApi.ODataRequestBuilder.$W() && !XrmClientApi.WebApi.ODataRequestBuilder.$X()) {
        $v_0 = String.format('{0} {1}/api/data/v9.0/{2} HTTP/1.1', $p0.method, '/' + XrmClientApi.WebApi.ODataRequestBuilder.$U(), $p0.urlParameters) + '\n';
    }
    else {
        $v_0 = String.format('{0} /api/data/v9.0/{1} HTTP/1.1', $p0.method, $p0.urlParameters) + '\n';
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0.additionalHeaders)) {
        var $v_1 = XrmClientApi.WebApi.WebApiService.getKeysFromDictionary($p0.additionalHeaders);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            $v_0 += String.format('{0}: {1}', $v_1[$v_2], $p0.additionalHeaders[$v_1[$v_2]]);
            $v_0 += '\n';
        }
    }
    $v_0 += 'Content-Type: application/json;type=entry\n';
    $v_0 += '\n' + $p0.body;
    return $v_0;
}
XrmClientApi.WebApi.ODataRequestBuilder.buildBatchRequest = function(requests) {
    var $v_0 = '';
    var $v_1 = 'batch_' + (new Date().getTime());
    for (var $v_3 = 0; $v_3 < requests.length; $v_3++) {
        var $v_4 = requests[$v_3];
        $v_0 += '--' + $v_1 + '\n';
        var $v_5 = '';
        if (Mscrm.InternalUtilities.JSTypes.isArray($v_4)) {
            var $v_6 = $v_4;
            var $v_7 = 'changeset_' + (new Date().getTime());
            $v_5 = XrmClientApi.WebApi.ODataRequestBuilder.$p($v_7, $v_6);
            $v_0 += 'Content-Type: multipart/mixed;boundary=' + $v_7 + '\n';
        }
        else {
            var $v_8 = $v_4;
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_8.serializationFailure)) {
                throw Error.create('Error occurred during Serialization: ' + $v_8.serializationFailure);
            }
            if ($v_8.method === 'GET') {
                $v_5 = XrmClientApi.WebApi.ODataRequestBuilder.$v($v_8);
            }
            else {
                $v_5 = XrmClientApi.WebApi.ODataRequestBuilder.$y($v_8);
            }
            $v_0 += 'Content-Type: application/http\n';
            $v_0 += 'Content-Transfer-Encoding: binary\n';
        }
        $v_0 += '\n';
        $v_0 += $v_5;
        $v_0 += '\n';
    }
    $v_0 += '--' + $v_1 + '--' + '\r\n\u0000';
    var $v_2 = new XrmClientApi.WebApi.Serialization.SerializedRequest();
    $v_2.urlParameters = '$batch';
    $v_2.additionalHeaders = {};
    $v_2.additionalHeaders['Content-Type'] = 'multipart/mixed;boundary=' + $v_1;
    $v_2.additionalHeaders['Accept'] = 'application/json';
    $v_2.body = $v_0;
    $v_2.method = 'POST';
    return $v_2;
}


XrmClientApi.WebApi.Response = function(deferred, bodyString) {
    this.$M_0 = deferred;
    this.$G_0 = bodyString;
}
XrmClientApi.WebApi.Response.prototype = {
    $M_0: null,
    $G_0: null,
    status: 0,
    ok: false,
    statusText: null,
    headers: null,
    
    clone: function() {
        return Object.assign({},this);
    },
    
    json: function() {
        var $v_0 = null;
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(this.$G_0)) {
            $v_0 = JSON.parse(this.$G_0);
        }
        return this.$M_0.resolve($v_0);
    },
    
    text: function() {
        return this.$M_0.resolve(this.$G_0);
    }
}


XrmClientApi.WebApi.RetrieveMultipleResponse = function(entities, nextLink) {
    this.entities = entities;
    this.nextLink = nextLink;
}
XrmClientApi.WebApi.RetrieveMultipleResponse.prototype = {
    entities: null,
    nextLink: null
}


XrmClientApi.WebApi.Util = function() {
}
XrmClientApi.WebApi.Util.checkParameters = function(parameters, names) {
    if (parameters.length !== names.length) {
        return;
    }
    for (var $v_0 = 0; $v_0 < parameters.length; $v_0++) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(parameters[$v_0])) {
            throw Error.create(String.format('{0} is a mandatory Parameter and it cannot be  null.', names[$v_0]));
        }
    }
}
XrmClientApi.WebApi.Util.getParticipationTypeMask = function(entityLogicalName, attributeName) {
    var $v_0 = String.format('{0}.{1}', entityLogicalName, attributeName).toLowerCase();
    switch ($v_0) {
        case 'campaignactivity.partners':
        case 'campaignactivity.from':
        case 'fax.from':
        case 'email.from':
        case 'letter.from':
        case 'phonecall.from':
            return 1;
        case 'email.to':
        case 'fax.to':
        case 'letter.to':
        case 'phonecall.to':
            return 2;
        case 'email.cc':
            return 3;
        case 'email.bcc':
        case 'letter.bcc':
            return 4;
        case 'appointment.optionalattendees':
        case 'recurringappointmentmaster.optionalattendees':
            return 6;
        case 'appointment.organizer':
        case 'recurringappointmentmaster.organizer':
            return 7;
        case 'appointment.requiredattendees':
        case 'recurringappointmentmaster.requiredattendees':
            return 5;
        case 'campaignresponse.customer':
        case 'campaignresponse.partner':
        case 'campaignresponse.from':
        case 'serviceappointment.customer':
            return 11;
        case 'serviceappointment.resources':
            return 10;
        default:
            return 12;
    }
}
XrmClientApi.WebApi.Util.$A = function($p0) {
    Xrm.Utility.getEntityMetadata($p0, [ 'relationships' ]);
}
XrmClientApi.WebApi.Util.getAttributeDescriptor = function(entityType, columnName) {
    var $v_0 = XrmClientApi.WebApi.EntityMetadataCache.retrieveValueFromCache(entityType, 'Attributes');
    var $v_1 = null;
    if ($v_0) {
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            if ($v_3['LogicalName'] === columnName) {
                $v_1 = $v_3;
                break;
            }
        }
    }
    if ($v_1) {
        return $v_1;
    }
    else {
        XrmClientApi.WebApi.Util.$A(entityType);
        throw Error.create(String.format('Attribute metadata is not available for {0} in cache', columnName));
    }
}
XrmClientApi.WebApi.Util.getOneToManyRelationships = function(entityType) {
    var $v_0 = XrmClientApi.WebApi.EntityMetadataCache.retrieveValueFromCache(entityType, 'OneToManyRelationships');
    if ($v_0) {
        return $v_0;
    }
    else {
        XrmClientApi.WebApi.Util.$A(entityType);
        throw Error.create(String.format('oneToManyRelationships are not available for {0} in cache', entityType));
    }
}
XrmClientApi.WebApi.Util.getOneToManyRelationship = function(entityType, relationship) {
    var $v_0 = XrmClientApi.WebApi.Util.getOneToManyRelationships(entityType);
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if (($v_0[$v_1]['SchemaName']) === relationship) {
            return $v_0[$v_1];
        }
    }
    XrmClientApi.WebApi.Util.$A(entityType);
    throw Error.create(String.format('oneToManyRelationships metadata are not available for {0}', relationship));
}
XrmClientApi.WebApi.Util.getManyToOneRelationships = function(entityType) {
    var $v_0 = XrmClientApi.WebApi.EntityMetadataCache.retrieveValueFromCache(entityType, 'ManyToOneRelationships');
    if ($v_0) {
        return $v_0;
    }
    else {
        XrmClientApi.WebApi.Util.$A(entityType);
        throw Error.create(String.format('manyToOneRelationships are not available for {0} in cache', entityType));
    }
}
XrmClientApi.WebApi.Util.getManyToOneRelationship = function(entityType, relationship) {
    var $v_0 = XrmClientApi.WebApi.Util.getManyToOneRelationships(entityType);
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if (($v_0[$v_1]['SchemaName']) === relationship) {
            return $v_0[$v_1];
        }
    }
    XrmClientApi.WebApi.Util.$A(entityType);
    throw Error.create(String.format('GetManyToOneRelationships metadata are not available for {0}', relationship));
}
XrmClientApi.WebApi.Util.getManyToManyRelationships = function(entityType) {
    var $v_0 = XrmClientApi.WebApi.EntityMetadataCache.retrieveValueFromCache(entityType, 'ManyToManyRelationships');
    if ($v_0) {
        return $v_0;
    }
    else {
        XrmClientApi.WebApi.Util.$A(entityType);
        throw Error.create(String.format('manyToManyRelationships are not available for {0} in cache', entityType));
    }
}
XrmClientApi.WebApi.Util.getManyToManyRelationship = function(entityType, relationship) {
    var $v_0 = XrmClientApi.WebApi.Util.getManyToManyRelationships(entityType);
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if (($v_0[$v_1]['SchemaName']) === relationship) {
            return $v_0[$v_1];
        }
    }
    XrmClientApi.WebApi.Util.$A(entityType);
    throw Error.create(String.format('GetManyToManyRelationship metadata are not available for {0}', relationship));
}
XrmClientApi.WebApi.Util.getEntityMetadata = function(entityType) {
    return XrmClientApi.WebApi.EntityMetadataCache.retrieveValueFromCache(entityType, 'EntityMetadata');
}
XrmClientApi.WebApi.Util.isRelationshipMetadataAvailable = function(entityType) {
    return !!XrmClientApi.WebApi.EntityMetadataCache.retrieveValueFromCache(entityType, 'OneToManyRelationships');
}


XrmClientApi.WebApi.WebApiParser = function() {
}
XrmClientApi.WebApi.WebApiParser.trimEntityId = function(entityId) {
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(entityId);
    return $v_0.toString().replace('{', '').replace('}', '');
}
XrmClientApi.WebApi.WebApiParser.trimOptions = function(options) {
    if (!options || options === '') {
        return '';
    }
    return (options.charAt(0) !== '?') ? ('?' + options) : options;
}
XrmClientApi.WebApi.WebApiParser.trimUrl = function(url) {
    if (!url || url === '') {
        return '';
    }
    return url.split('\n').join('');
}
XrmClientApi.WebApi.WebApiParser.getCollectionName = function(entityName) {
    var $v_0 = Xrm.Utility.getEntitySetName(entityName);
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        return $v_0;
    }
    return entityName;
}
XrmClientApi.WebApi.WebApiParser.getGuidFromResponse = function(request) {
    var $v_0 = request.getResponseHeader('OData-EntityId');
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        return null;
    }
    var $v_1 = $v_0.indexOf('(') + 1;
    var $v_2 = $v_0.substr($v_1, $v_0.length - $v_1 - 1);
    return $v_2;
}
XrmClientApi.WebApi.WebApiParser.$15 = function($p0) {
    var $v_0 = ($p0.getResponseHeader('Content-Type').split('; ').pop());
    return ($v_0.split('=').pop());
}
XrmClientApi.WebApi.WebApiParser.$k = function($p0, $p1) {
    var $v_0 = $p1.split(new RegExp('--' + $p0 + '-*\r?\n'));
    return $v_0.slice(1, $v_0.length - 1);
}
XrmClientApi.WebApi.WebApiParser.$j = function($p0, $p1) {
    var $v_0 = $p1.indexOf(':');
    if ($v_0 !== -1) {
        var $v_1 = $p1.substr(0, $v_0);
        var $v_2 = $p1.substr($v_0 + 1).trim();
        $p0[$v_1] = $v_2;
    }
}
XrmClientApi.WebApi.WebApiParser.$e = function($p0, $p1) {
    var $v_0 = $p0.trim().split(new RegExp('\r?\n\r?\n', 'gi'));
    var $v_1 = $v_0[0].split(new RegExp('\r?\n', 'gi'));
    var $v_2 = {};
    for (var $v_B = 0; $v_B < $v_1.length; $v_B++) {
        XrmClientApi.WebApi.WebApiParser.$j($v_2, $v_1[$v_B]);
    }
    var $v_3 = $v_2['Content-ID'];
    var $v_4 = $v_0[1].split(new RegExp('\r?\n', 'gi'));
    var $v_5 = $v_4.slice(1, $v_4.length - 1);
    var $v_6 = (new RegExp('(HTTP\\/\\d\\.\\d) (\\d+) (.*)', 'gi')).exec($v_4[0]);
    var $v_7 = parseInt($v_6[2]);
    var $v_8 = {};
    for (var $v_C = 0; $v_C < $v_5.length; $v_C++) {
        XrmClientApi.WebApi.WebApiParser.$j($v_8, $v_5[$v_C]);
    }
    var $v_9 = $v_0[2];
    var $v_A = new XrmClientApi.WebApi.Response($p1, $v_9);
    $v_A.status = $v_7;
    $v_A.ok = ((200 <= $v_7) && (299 >= $v_7));
    $v_A.statusText = $v_6[3];
    $v_A.headers = $v_8;
    return $v_A;
}
XrmClientApi.WebApi.WebApiParser.parseBatchResponse = function(response, deferred) {
    var $v_0 = XrmClientApi.WebApi.WebApiParser.$15(response);
    var $v_1 = response.responseText;
    var $v_2 = XrmClientApi.WebApi.WebApiParser.$k($v_0, $v_1);
    var $v_3 = new Array(0);
    for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
        var $v_5 = $v_2[$v_4];
        var $v_6 = new RegExp('Content-Type: .*boundary=(.*)\r?\n', 'gi');
        var $v_7 = $v_6.exec($v_5);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7) && $v_7.length > 0) {
            var $v_8 = $v_7[1];
            var $v_9 = $v_5.indexOf('--' + $v_8);
            var $v_A = $v_5.substr($v_9);
            var $v_B = XrmClientApi.WebApi.WebApiParser.$k($v_8, $v_A);
            for (var $v_C = 0; $v_C < $v_B.length; $v_C++) {
                $v_3.push(XrmClientApi.WebApi.WebApiParser.$e($v_B[$v_C], deferred));
            }
        }
        else {
            $v_3.push(XrmClientApi.WebApi.WebApiParser.$e($v_5, deferred));
        }
    }
    return $v_3;
}
XrmClientApi.WebApi.WebApiParser.parseErrorResponseforBatch = function(responseText) {
    return responseText.substring(responseText.indexOf('{\"error\":'), responseText.length).split('--batchresponse')[0];
}


XrmClientApi.WebApi.WebApiService = function() {
}
XrmClientApi.WebApi.WebApiService.getKeysFromDictionary = function(dict) {
    return Object.keys(dict);
}
XrmClientApi.WebApi.WebApiService.$w = function($p0) {
    var $v_0 = new XrmClientApi.WebApi.JSResponse($p0);
    return $v_0;
}
XrmClientApi.WebApi.WebApiService.$l = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = {};
    var $v_1 = $p2.responseText;
    switch ($p3) {
        case 0:
            if ($v_1.length > 0) {
                $v_0 = JSON.parse($v_1);
            }
            $p5.resolve($v_0);
            break;
        case 2:
        case 3:
        case 4:
            var $v_2 = new XrmClientApi.WebApi.EntityReference(XrmClientApi.WebApi.WebApiParser.getGuidFromResponse($p2), $p4);
            $p5.resolve($v_2);
            break;
        case 1:
            var $v_3 = null;
            if ($v_1.length > 0) {
                var $v_6 = JSON.parse($v_1);
                if ($v_6) {
                    $v_3 = new XrmClientApi.WebApi.RetrieveMultipleResponse($v_6['value'], $v_6['@odata.nextLink']);
                }
            }
            $p5.resolve($v_3);
            break;
        case 5:
            $p5.resolve(XrmClientApi.WebApi.WebApiService.$w($p2));
            break;
        case 6:
            var $v_4 = $p5;
            var $v_5 = XrmClientApi.WebApi.WebApiParser.parseBatchResponse($p2, $v_4);
            $p5.resolve($v_5);
            break;
    }
}
XrmClientApi.WebApi.WebApiService.$f = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = null;
    var $v_1 = null;
    var $v_2 = $p2.responseText;
    if ($v_2.indexOf('--batchresponse') === -1) {
        $v_1 = JSON.parse($v_2);
    }
    else if ($v_2.indexOf('--batchresponse') !== -1 && $v_2.indexOf('{\"error\":') !== -1) {
        $v_1 = JSON.parse(XrmClientApi.WebApi.WebApiParser.parseErrorResponseforBatch($v_2));
    }
    if ($v_1) {
        var $v_3 = $v_1['error'];
        if ($v_3) {
            $v_0 = new XrmClientApi.ErrorResponse(Number.parseInvariant($v_3['code']), $v_3['message'], '', $v_3['innererror']);
        }
        else {
            $v_0 = new XrmClientApi.ErrorResponse(Number.parseInvariant($v_1['ErrorCode']), $v_1['Message'], $v_1['ExceptionMessage'], $v_1['StackTrace']);
        }
    }
    else {
        $v_0 = new Xrm.ErrorResponse(0, 'Odata Error response is not valid', '', '');
    }
    $p4.reject($v_0);
}
XrmClientApi.WebApi.WebApiService.getHTTPRequest = function(TData, TError, protocol, requestUrl, operation, entityType, successCodes, deferred, additionalParameters) {
    var $v_0 = new XMLHttpRequest();
    var $v_1 = Xrm.Page.context.getClientUrl() + '/api/data/v9.0/';
    $v_0.open(protocol, $v_1 + requestUrl, true);
    var $v_2 = XrmClientApi.WebApi.WebApiService.$g(additionalParameters);
    var $v_3 = XrmClientApi.WebApi.WebApiService.getKeysFromDictionary($v_2);
    for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
        $v_0.setRequestHeader($v_3[$v_4], $v_2[$v_3[$v_4]]);
    }
    Mscrm.InternalUtilities.ClientApiUtility.stampCurrentReqWithCorrelationToken($v_0);
    $v_0.onreadystatechange = function() {
        if ($v_0.readyState === 4) {
            $v_0.onreadystatechange = null;
            var $v_5 = false;
            for (var $v_6 = 0; $v_6 < successCodes.length; $v_6++) {
                if ($v_0.status === successCodes[$v_6]) {
                    $v_5 = true;
                    break;
                }
            }
            Mscrm.InternalUtilities.ClientApiUtility.saveCurrentResponseToken($v_0);
            if ($v_5) {
                XrmClientApi.WebApi.WebApiService.$l(TData, TError, $v_0, operation, entityType, deferred);
            }
            else {
                XrmClientApi.WebApi.WebApiService.$f(TData, TError, $v_0, operation, deferred);
            }
            Mscrm.InternalUtilities.ClientApiUtility.clearCurrentCorrelationToken('CurrentResponseId');
        }
    };
    return $v_0;
}
XrmClientApi.WebApi.WebApiService.$g = function($p0) {
    var $v_0 = {};
    $v_0['Accept'] = 'application/json';
    $v_0['Content-Type'] = 'application/json; charset=utf-8';
    var $v_1 = {};
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
        $v_1 = $p0;
    }
    var $v_2 = XrmClientApi.WebApi.WebApiService.getKeysFromDictionary($v_0);
    for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
        var $v_4 = $v_2[$v_3];
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1[$v_4])) {
            $v_1[$v_4] = $v_0[$v_4];
        }
    }
    return $v_1;
}
XrmClientApi.WebApi.WebApiService.sendSerializedRequest = function(TData, TError, serializedReq, operation, deferred) {
    var $v_0 = new XMLHttpRequest();
    var $v_1 = serializedReq.method;
    var $v_2 = Xrm.Page.context.getClientUrl() + '/api/data/v9.0/' + serializedReq.urlParameters;
    $v_0.open($v_1, $v_2, true);
    var $v_3 = XrmClientApi.WebApi.WebApiService.$g(serializedReq.additionalHeaders);
    var $v_4 = XrmClientApi.WebApi.WebApiService.getKeysFromDictionary($v_3);
    for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
        $v_0.setRequestHeader($v_4[$v_5], $v_3[$v_4[$v_5]]);
    }
    Mscrm.InternalUtilities.ClientApiUtility.stampCurrentReqWithCorrelationToken($v_0);
    $v_0.onreadystatechange = function() {
        if ($v_0.readyState === 4) {
            $v_0.onreadystatechange = null;
            Mscrm.InternalUtilities.ClientApiUtility.saveCurrentResponseToken($v_0);
            if ($v_0.status === 200 || $v_0.status === 204) {
                XrmClientApi.WebApi.WebApiService.$l(TData, TError, $v_0, operation, '', deferred);
            }
            else {
                XrmClientApi.WebApi.WebApiService.$f(TData, TError, $v_0, operation, deferred);
            }
            Mscrm.InternalUtilities.ClientApiUtility.clearCurrentCorrelationToken('CurrentResponseId');
        }
    };
    $v_0.send(serializedReq.body);
}


Type.registerNamespace('XrmClientApi.WebApi.Serialization');

XrmClientApi.WebApi.Serialization.ODataSerializer = function() {
}
XrmClientApi.WebApi.Serialization.ODataSerializer.getEnumValueMetadata = function(value, parameterType) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(value) || Mscrm.InternalUtilities.JSTypes.isNull(parameterType) || Mscrm.InternalUtilities.JSTypes.isNull(parameterType.enumProperties) || !parameterType.enumProperties.length) {
        return null;
    }
    var $v_0 = parameterType.enumProperties;
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if ($v_0[$v_1] && $v_0[$v_1].value === value) {
            return $v_0[$v_1];
        }
    }
    return null;
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityReference = function(entityRef) {
    var $v_0 = {};
    $v_0['@odata.id'] = XrmClientApi.WebApi.WebApiParser.getCollectionName(entityRef.entityType) + '(' + entityRef.id + ')';
    return $v_0;
}
XrmClientApi.WebApi.Serialization.ODataSerializer.getPrimaryKey = function(entityType) {
    var $v_0 = JSON.parse(window.ENTITY_PRIMARY_KEYS || window.top.ENTITY_PRIMARY_KEYS);
    if (!$v_0) {
        throw Error.create('Primary key information is not available. Try passing primary key explicitly in OData contract');
    }
    return $v_0[entityType];
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityReferenceForAction = function(entityRef, primaryKey) {
    var $v_0 = {};
    if (!entityRef) {
        return $v_0;
    }
    if (!primaryKey) {
        primaryKey = XrmClientApi.WebApi.Serialization.ODataSerializer.getPrimaryKey(entityRef.entityType);
    }
    $v_0['@odata.type'] = 'Microsoft.Dynamics.CRM.' + entityRef.entityType;
    $v_0[primaryKey] = XrmClientApi.WebApi.WebApiParser.trimEntityId(entityRef.id);
    return $v_0;
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializePrimitiveTypeValueForURL = function(typeName, value) {
    switch (typeName) {
        case 'Edm.String':
            return String.format('\'{0}\'', value);
        case 'Edm.Guid':
            return ((value)['guid']);
        case 'Edm.DateTimeOffset':
            if (value && (value)['toISOString']) {
                return value.toISOString();
            }
            break;
    }
    return value;
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityType = function(parameterValue, forUrl) {
    if (!parameterValue) {
        return 'null';
    }
    var $v_0 = parameterValue;
    var $v_1 = $v_0['id'];
    var $v_2 = $v_0['entityType'];
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
        var $v_3 = new XrmClientApi.WebApi.EntityReference($v_1, $v_2);
        var $v_4 = (!forUrl) ? (XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityReferenceForAction($v_3, $v_0['primaryKey'])) : (XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityReference($v_3));
        return JSON.stringify($v_4);
    }
    else {
        return JSON.stringify(parameterValue);
    }
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializePrimitiveTypeValue = function(typeName, value) {
    switch (typeName) {
        case 'Edm.String':
            return JSON.stringify(value);
        case 'Edm.Guid':
            return '\"' + (value)['guid'] + '\"';
        case 'Edm.DateTimeOffset':
            if (value && (value)['toISOString']) {
                return '\"' + value.toISOString() + '\"';
            }
            break;
    }
    return value;
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEnumValue = function(value, parameterType) {
    var $v_0 = XrmClientApi.WebApi.Serialization.ODataSerializer.getEnumValueMetadata(value, parameterType);
    if (!$v_0) {
        return '';
    }
    return '\"' + $v_0.name + '\"';
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeComplexTypeParameter = function(request, parameterName) {
    var $v_0 = request.getMetadata();
    var $v_1 = (request)[parameterName];
    if (!parameterName.indexOf('@odata.')) {
        return '\"' + $v_1 + '\"';
    }
    var $v_2 = $v_0.parameterTypes[parameterName];
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
        return null;
    }
    switch ($v_2.structuralProperty) {
        case 1:
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                return null;
            }
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializePrimitiveTypeValue($v_2.typeName, $v_1);
        case 5:
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityType($v_1, false);
        case 2:
            var $v_3 = $v_1;
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializeContract($v_3);
        case 3:
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEnumValue($v_1, $v_2);
        case 4:
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                return 'null';
            }
            else if (!($v_1).length) {
                return '[]';
            }
            else if ($v_1[0].getMetadata) {
                var $v_4 = $v_1;
                var $v_5 = new Array(0);
                for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                    $v_5.push(XrmClientApi.WebApi.Serialization.ODataSerializer.serializeContract($v_4[$v_6]));
                }
                return '[' + $v_5.join(',') + ']';
            }
            else if (Array.indexOf(XrmClientApi.WebApi.Constants.oDataPrimitives, $v_2.typeName) !== -1) {
                var $v_7 = $v_1;
                var $v_8 = new Array(0);
                for (var $v_9 = 0; $v_9 < $v_7.length; $v_9++) {
                    $v_8.push(XrmClientApi.WebApi.Serialization.ODataSerializer.serializePrimitiveTypeValue($v_2.typeName, $v_7[$v_9]));
                }
                return '[' + $v_8.join(',') + ']';
            }
            else {
                var $v_A = $v_1;
                var $v_B = new Array(0);
                for (var $v_C = 0; $v_C < $v_A.length; $v_C++) {
                    $v_B.push(XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityType($v_A[$v_C], false));
                }
                return '[' + $v_B.join(',') + ']';
            }
    }
    return null;
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeContract = function(request) {
    if (!request) {
        return 'null';
    }
    var $v_0 = request;
    var $v_1 = new Array(0);
    var $v_2 = XrmClientApi.WebApi.WebApiService.getKeysFromDictionary($v_0);
    for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
        var $v_4 = $v_2[$v_3];
        var $v_5 = $v_0[$v_4];
        if (typeof($v_5) !== 'function') {
            $v_1.push(String.format('\"{0}\":{1}', $v_4, XrmClientApi.WebApi.Serialization.ODataSerializer.serializeComplexTypeParameter(request, $v_4)));
        }
    }
    return '{' + $v_1.join(',') + '}';
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEnumValueForURL = function(value, parameterType) {
    var $v_0 = XrmClientApi.WebApi.Serialization.ODataSerializer.getEnumValueMetadata(value, parameterType);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        return '';
    }
    return parameterType.typeName + '\'' + $v_0.name + '\'';
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeParameterIntoURLFragment = function(request, parameterName) {
    var $v_0 = request.getMetadata();
    var $v_1 = $v_0.parameterTypes[parameterName];
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        return null;
    }
    var $v_2 = (request)[parameterName];
    switch ($v_1.structuralProperty) {
        case 1:
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                return null;
            }
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializePrimitiveTypeValueForURL($v_1.typeName, $v_2);
        case 5:
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityType($v_2, true);
        case 2:
            var $v_3 = $v_2;
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializeContract($v_3);
        case 3:
            return XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEnumValueForURL($v_2, $v_1);
        case 4:
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                return 'null';
            }
            else if (!($v_2).length) {
                return '[]';
            }
            else if ($v_2[0].getMetadata) {
                var $v_4 = $v_2;
                var $v_5 = new Array(0);
                for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                    $v_5.push(XrmClientApi.WebApi.Serialization.ODataSerializer.serializeContract($v_4[$v_6]));
                }
                return '[' + $v_5.join(',') + ']';
            }
            else if (Array.indexOf(XrmClientApi.WebApi.Constants.oDataPrimitives, $v_1.typeName) !== -1) {
                var $v_7 = $v_2;
                var $v_8 = new Array(0);
                for (var $v_9 = 0; $v_9 < $v_7.length; $v_9++) {
                    $v_8.push(XrmClientApi.WebApi.Serialization.ODataSerializer.serializePrimitiveTypeValueForURL($v_1.typeName, $v_7[$v_9]));
                }
                return '[' + $v_8.join(',') + ']';
            }
            else {
                var $v_A = $v_2;
                var $v_B = new Array(0);
                for (var $v_C = 0; $v_C < $v_A.length; $v_C++) {
                    $v_B.push(XrmClientApi.WebApi.Serialization.ODataSerializer.serializeEntityType($v_A[$v_C], true));
                }
                return '[' + $v_B.join(',') + ']';
            }
    }
    return null;
}
XrmClientApi.WebApi.Serialization.ODataSerializer.serializeIntoURLFragment = function(request) {
    var $v_0 = request.getMetadata();
    var $v_1 = $v_0.boundParameter;
    var $v_2 = new Array(0);
    var $v_3 = new Array(0);
    var $v_4 = Object.keys(request);;
    var $v_5 = request;
    for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
        var $v_7 = $v_4[$v_6];
        var $v_8 = $v_5[$v_7];
        if ($v_7 !== $v_1 && typeof($v_8) !== 'function') {
            var $v_9 = XrmClientApi.WebApi.Serialization.ODataSerializer.serializeParameterIntoURLFragment(request, $v_7);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.parameterTypes[$v_7]) && $v_0.parameterTypes[$v_7] === 3) {
                $v_3.push(String.format('{0}={1}', $v_7, $v_9));
            }
            else {
                $v_2.push(String.format('@{0}={1}', $v_7, $v_9));
                $v_3.push(String.format('{0}=@{1}', $v_7, $v_7));
            }
        }
    }
    if ($v_2.length > 0) {
        return String.format('({0})?{1}', $v_3.join(','), $v_2.join('&'));
    }
    else {
        return String.format('({0})', $v_3.join(','));
    }
}
XrmClientApi.WebApi.Serialization.ODataSerializer.buildRetrieveRequestURLParameter = function(entityRef, columns) {
    var $v_0 = entityRef.entityType;
    var $v_1 = XrmClientApi.WebApi.WebApiParser.getCollectionName($v_0);
    var $v_2 = null;
    var $v_3 = null;
    var $v_4 = new Array(0);
    var $v_5 = new Array(0);
    for (var $v_7 = 0; $v_7 < columns.length; $v_7++) {
        var $v_8 = columns[$v_7];
        var $v_9 = XrmClientApi.WebApi.Util.getAttributeDescriptor($v_0, $v_8);
        if (!$v_9) {
            $v_2 = String.format('Cannot serialize a request with no attribute metadata for {0}.{1}', $v_0, $v_8);
            break;
        }
        if ($v_9['AttributeType'] === 'partylist') {
            var $v_A = XrmClientApi.WebApi.Util.getOneToManyRelationships($v_0);
            for (var $v_B = 0; $v_B < $v_A.length; $v_B++) {
                var $v_C = $v_A[$v_B];
                if ($v_C && $v_C['ReferencedEntity'] === $v_0 && $v_C['ReferencingEntity'] === 'activityparty') {
                    $v_3 = $v_C;
                    break;
                }
            }
            if (!$v_3) {
                $v_2 = String.format('The relationship for the partylist attribute {0} is not found in the cache', $v_8);
                break;
            }
            else {
                var $v_D = XrmClientApi.WebApi.Util.getParticipationTypeMask($v_0, $v_8);
                if ($v_D === 12) {
                    $v_2 = String.format('Unknown participation type mask for attribute {0}', $v_8);
                    break;
                }
                else {
                    $v_5.push($v_D);
                }
            }
        }
        else if (Array.indexOf(XrmClientApi.WebApi.Constants.supportedLookupProperties, $v_9['AttributeType']) !== -1) {
            $v_4.push(String.format('_{0}_value', $v_8));
        }
        else {
            $v_4.push($v_8);
        }
    }
    if ($v_2) {
        return null;
    }
    var $v_6 = '';
    if ($v_5.length > 0) {
        var $v_E = new Array(0);
        for (var $v_G = 0; $v_G < $v_5.length; $v_G++) {
            $v_E.push(String.format('\'{0}\'', $v_5[$v_G]));
        }
        var $v_F = String.format('$filter=Microsoft.Dynamics.CRM.In(PropertyName=\'participationtypemask\',PropertyValues=[{0}])', $v_E.join(','));
        $v_6 = String.format('&$expand={0}({1})', $v_3['ReferencedEntityNavigationPropertyName'], $v_F);
    }
    return String.format(XrmClientApi.WebApi.Constants.retrieveRequestURLParameterFormat, $v_1, entityRef.id, columns.join(','), $v_6);
}


XrmClientApi.WebApi.Serialization.SerializedRequest = function() {
}
XrmClientApi.WebApi.Serialization.SerializedRequest.prototype = {
    urlParameters: null,
    additionalHeaders: null,
    method: null,
    endpoint: null,
    body: null,
    serializationFailure: null
}


Type.registerNamespace('XrmClientApi.Constants');

XrmClientApi.Constants.AttributeTypeCode = function() {}
XrmClientApi.Constants.AttributeTypeCode.prototype = {
    boolean: 0, 
    customer: 1, 
    dateTime: 2, 
    decimal: 3, 
    double: 4, 
    integer: 5, 
    lookup: 6, 
    memo: 7, 
    money: 8, 
    owner: 9, 
    partyList: 10, 
    picklist: 11, 
    state: 12, 
    status: 13, 
    string: 14, 
    uniqueidentifier: 15, 
    calendarRules: 16, 
    virtual: 17, 
    bigInt: 18, 
    managedProperty: 19, 
    entityName: 20, 
    image: 23
}
XrmClientApi.Constants.AttributeTypeCode.registerEnum('XrmClientApi.Constants.AttributeTypeCode', false);


XrmClientApi.Constants.AttributeType = function() {
}


Type.registerNamespace('Xrm.Interfaces');

Xrm.Interfaces.IXrmDataSetColumn = function() {}
Xrm.Interfaces.IXrmDataSetColumn.registerInterface('Xrm.Interfaces.IXrmDataSetColumn');


Xrm.Interfaces.IXrmDataSetRecord = function() {}
Xrm.Interfaces.IXrmDataSetRecord.registerInterface('Xrm.Interfaces.IXrmDataSetRecord');


Xrm.Interfaces.IXrmGridControl = function() {}
Xrm.Interfaces.IXrmGridControl.registerInterface('Xrm.Interfaces.IXrmGridControl');


Xrm.Interfaces.IXrmSubGridControl = function() {}
Xrm.Interfaces.IXrmSubGridControl.registerInterface('Xrm.Interfaces.IXrmSubGridControl');


Xrm.Interfaces.IServiceDirectory = function() {}
Xrm.Interfaces.IServiceDirectory.registerInterface('Xrm.Interfaces.IServiceDirectory');


Xrm.Interfaces.IXrmTrace = function() {}
Xrm.Interfaces.IXrmTrace.registerInterface('Xrm.Interfaces.IXrmTrace');


Xrm.Interfaces.IXrmTraceListener = function() {}
Xrm.Interfaces.IXrmTraceListener.registerInterface('Xrm.Interfaces.IXrmTraceListener');


Xrm.Interfaces.IKnowledgeArticle = function() {}
Xrm.Interfaces.IKnowledgeArticle.registerInterface('Xrm.Interfaces.IKnowledgeArticle');


Type.registerNamespace('Xrm.Interfaces.Services');

Xrm.Interfaces.Services.IMostRecentlyViewedService = function() {}
Xrm.Interfaces.Services.IMostRecentlyViewedService.registerInterface('Xrm.Interfaces.Services.IMostRecentlyViewedService');


Type.registerNamespace('Xrm.Objects');

Xrm.Objects.RecentlyViewedItem = function() {
}
Xrm.Objects.RecentlyViewedItem.prototype = {
    objectId: null,
    displayName: null,
    title: null,
    iconPath: null,
    action: null,
    pinStatus: false,
    type: 0,
    entityTypeCode: 0,
    lastAccessed: null,
    
    clone: function() {
        var $v_0 = new Xrm.Objects.RecentlyViewedItem();
        $v_0.objectId = this.objectId;
        $v_0.displayName = this.displayName;
        $v_0.title = this.title;
        $v_0.iconPath = this.iconPath;
        $v_0.action = this.action;
        $v_0.pinStatus = this.pinStatus;
        $v_0.type = this.type;
        $v_0.entityTypeCode = this.entityTypeCode;
        $v_0.lastAccessed = this.lastAccessed;
        return $v_0;
    }
}


Type.registerNamespace('Xrm.Tracing');

Xrm.Tracing.XrmTraceHelper = function() {
}
Xrm.Tracing.XrmTraceHelper.traceLog = function(component, format) {
    var args = [];
    for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
        args[$$pai_4 - 2] = arguments[$$pai_4];
    }
    var $$t_3;
    ($$t_3 = Xrm.Internal.trace).log.apply($$t_3, [ Object.getType(component).getName(), format ].concat(args));
}
Xrm.Tracing.XrmTraceHelper.traceWarning = function(component, format) {
    var args = [];
    for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
        args[$$pai_4 - 2] = arguments[$$pai_4];
    }
    var $$t_3;
    ($$t_3 = Xrm.Internal.trace).warning.apply($$t_3, [ Object.getType(component).getName(), format ].concat(args));
}
Xrm.Tracing.XrmTraceHelper.traceError = function(component, format) {
    var args = [];
    for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
        args[$$pai_4 - 2] = arguments[$$pai_4];
    }
    var $$t_3;
    ($$t_3 = Xrm.Internal.trace).error.apply($$t_3, [ Object.getType(component).getName(), format ].concat(args));
}


Mscrm.Notification.registerClass('Mscrm.Notification');
Mscrm.NotificationSeverity.registerClass('Mscrm.NotificationSeverity');
Mscrm.NotificationSource.registerClass('Mscrm.NotificationSource');
Mscrm.InternalUtilities.ClientApiUtility.registerClass('Mscrm.InternalUtilities.ClientApiUtility');
Xrm.DateFormattingInfo.registerClass('Xrm.DateFormattingInfo');
Xrm.EntityListPageInput.registerClass('Xrm.EntityListPageInput');
Xrm.PageInput.registerClass('Xrm.PageInput');
Xrm.AlertDialogStrings.registerClass('Xrm.AlertDialogStrings');
Xrm.ConfirmDialogStrings.registerClass('Xrm.ConfirmDialogStrings');
Xrm.XrmEntityRelationship.registerClass('Xrm.XrmEntityRelationship');
Xrm.EntityFormOptions.registerClass('Xrm.EntityFormOptions');
Xrm.KBSearchResult.registerClass('Xrm.KBSearchResult');
Xrm.DialogOptions.registerClass('Xrm.DialogOptions');
Xrm.FormDataAttributePrivilege.registerClass('Xrm.FormDataAttributePrivilege');
Xrm.LookupObject.registerClass('Xrm.LookupObject');
Xrm.LookupOptions.registerClass('Xrm.LookupOptions');
Xrm.OptionSetItem.registerClass('Xrm.OptionSetItem');
Xrm.RelationshipReference.registerClass('Xrm.RelationshipReference');
Xrm.SaveOptions.registerClass('Xrm.SaveOptions');
Xrm.WindowOptions.registerClass('Xrm.WindowOptions');
Xrm.ActionCollectionBase.registerClass('Xrm.ActionCollectionBase');
Xrm.BusinessRuleNotificationBase.registerClass('Xrm.BusinessRuleNotificationBase');
Xrm.XrmControlBase.registerClass('Xrm.XrmControlBase', null, Xrm.IXrmCollectionItem);
Xrm.XrmControl.registerClass('Xrm.XrmControl', Xrm.XrmControlBase);
Xrm.XrmControlEmailEngagementActionsControl.registerClass('Xrm.XrmControlEmailEngagementActionsControl', Xrm.XrmControl);
Xrm.XrmDataControl.registerClass('Xrm.XrmDataControl', Xrm.XrmControl);
Xrm.XrmControlText.registerClass('Xrm.XrmControlText', Xrm.XrmDataControl);
Xrm.XrmControlGrid.registerClass('Xrm.XrmControlGrid');
Xrm.XrmControlRoutedGrid.registerClass('Xrm.XrmControlRoutedGrid', Xrm.XrmControlGrid);
Xrm.XrmEncoding.registerClass('Xrm.XrmEncoding');
Xrm.Device.registerClass('Xrm.Device');
Xrm.XrmDialog.registerClass('Xrm.XrmDialog');
Xrm.XrmForm.registerClass('Xrm.XrmForm');
Xrm.XrmInternal.registerClass('Xrm.XrmInternal');
Xrm.XrmNavigations.registerClass('Xrm.XrmNavigations');
Xrm.XrmOffline.registerClass('Xrm.XrmOffline');
Xrm.XrmUtility.registerClass('Xrm.XrmUtility');
Xrm.XrmPanel.registerClass('Xrm.XrmPanel');
Xrm.JavaScriptConsoleTraceListener.registerClass('Xrm.JavaScriptConsoleTraceListener', null, Xrm.Interfaces.IXrmTraceListener);
Xrm.ScopedServiceDirectory.registerClass('Xrm.ScopedServiceDirectory', null, Xrm.Interfaces.IServiceDirectory, Sys.IDisposable);
Xrm.StringBuilderTraceListener.registerClass('Xrm.StringBuilderTraceListener', null, Xrm.Interfaces.IXrmTraceListener);
Xrm.XrmPerformance.registerClass('Xrm.XrmPerformance');
Xrm.XrmSdkMessages.registerClass('Xrm.XrmSdkMessages');
Xrm.XrmServiceDirectory.registerClass('Xrm.XrmServiceDirectory', null, Xrm.Interfaces.IServiceDirectory, Sys.IDisposable);
Xrm.XrmTrace.registerClass('Xrm.XrmTrace', null, Xrm.Interfaces.IXrmTrace);
Xrm.Offline.registerClass('Xrm.Offline');
Xrm.FormNotificationOptions.registerClass('Xrm.FormNotificationOptions');
Xrm.XrmFormData.registerClass('Xrm.XrmFormData');
Xrm.XrmFormUI.registerClass('Xrm.XrmFormUI');
Xrm.XrmGlobalContext.registerClass('Xrm.XrmGlobalContext');
Xrm.XrmOrganizationSettings.registerClass('Xrm.XrmOrganizationSettings');
Xrm.XrmPageContextClient.registerClass('Xrm.XrmPageContextClient');
Xrm.XrmUserSettings.registerClass('Xrm.XrmUserSettings');
Xrm.XrmEntity.registerClass('Xrm.XrmEntity', null, Xrm.IXrmCollectionItem);
Xrm.XrmProcessControlData.registerClass('Xrm.XrmProcessControlData');
Xrm.XrmEntityAttribute.registerClass('Xrm.XrmEntityAttribute', null, Xrm.IXrmCollectionItem);
Xrm.XrmEntityAttributeOptionSetBase.registerClass('Xrm.XrmEntityAttributeOptionSetBase', Xrm.XrmEntityAttribute);
Xrm.XrmEntityAttributeBoolean.registerClass('Xrm.XrmEntityAttributeBoolean', Xrm.XrmEntityAttributeOptionSetBase);
Xrm.XrmEntityAttributeDateTime.registerClass('Xrm.XrmEntityAttributeDateTime', Xrm.XrmEntityAttribute);
Xrm.XrmEntityAttributeLookup.registerClass('Xrm.XrmEntityAttributeLookup', Xrm.XrmEntityAttribute);
Xrm.XrmEntityAttributeNumber.registerClass('Xrm.XrmEntityAttributeNumber', Xrm.XrmEntityAttribute);
Xrm.XrmEntityAttributeOptionSet.registerClass('Xrm.XrmEntityAttributeOptionSet', Xrm.XrmEntityAttributeOptionSetBase);
Xrm.XrmEntityAttributeString.registerClass('Xrm.XrmEntityAttributeString', Xrm.XrmEntityAttribute);
Xrm.XrmBusinessProcessFlow.registerClass('Xrm.XrmBusinessProcessFlow');
Xrm.XrmProcessStage.registerClass('Xrm.XrmProcessStage', null, Xrm.IXrmCollectionItem);
Xrm.XrmProcessStep.registerClass('Xrm.XrmProcessStep', null, Xrm.IXrmCollectionItem);
Xrm.XrmControlButton.registerClass('Xrm.XrmControlButton', Xrm.XrmControl);
Xrm.XrmControlDateTime.registerClass('Xrm.XrmControlDateTime', Xrm.XrmDataControl);
Xrm.XrmControlFormSelector.registerClass('Xrm.XrmControlFormSelector');
Xrm.XrmControlWebResource.registerClass('Xrm.XrmControlWebResource', Xrm.XrmControl);
Xrm.XrmControlIFrame.registerClass('Xrm.XrmControlIFrame', Xrm.XrmControlWebResource);
Xrm.XrmControlLookup.registerClass('Xrm.XrmControlLookup', Xrm.XrmDataControl);
Xrm.XrmControlAutoLookup.registerClass('Xrm.XrmControlAutoLookup', Xrm.XrmDataControl);
Xrm.XrmControlOptionSet.registerClass('Xrm.XrmControlOptionSet', Xrm.XrmDataControl);
Xrm.XrmControlSearchWidget.registerClass('Xrm.XrmControlSearchWidget', Xrm.XrmControl);
Xrm.XrmControlEmailRecipientActivity.registerClass('Xrm.XrmControlEmailRecipientActivity', Xrm.XrmControl);
Xrm.XrmControlSilverlight.registerClass('Xrm.XrmControlSilverlight', Xrm.XrmControlWebResource);
Xrm.XrmControlSubGrid.registerClass('Xrm.XrmControlSubGrid', Xrm.XrmControl, Xrm.Interfaces.IXrmSubGridControl, Xrm.Interfaces.IXrmGridControl);
Xrm.XrmControlQuickForm.registerClass('Xrm.XrmControlQuickForm', Xrm.XrmControl);
Xrm.XrmControlTimer.registerClass('Xrm.XrmControlTimer', Xrm.XrmControl);
Xrm.XrmControlACI.registerClass('Xrm.XrmControlACI', Xrm.XrmControl);
Xrm.XrmNavigation.registerClass('Xrm.XrmNavigation');
Xrm.XrmProcessControlUI.registerClass('Xrm.XrmProcessControlUI');
Xrm.XrmTab.registerClass('Xrm.XrmTab', Xrm.XrmControlBase);
Xrm.XrmTabNavigator.registerClass('Xrm.XrmTabNavigator', Xrm.XrmControlBase);
Xrm.XrmTabNavigatorGroup.registerClass('Xrm.XrmTabNavigatorGroup', Xrm.XrmControlBase);
Xrm.XrmTabSection.registerClass('Xrm.XrmTabSection', Xrm.XrmControlBase);
Xrm.XrmChart.registerClass('Xrm.XrmChart');
Xrm.XrmGridData.registerClass('Xrm.XrmGridData');
Xrm.XrmGridFilter.registerClass('Xrm.XrmGridFilter');
Xrm.XrmGridRow.registerClass('Xrm.XrmGridRow', null, Xrm.IXrmCollectionItem);
Xrm.XrmTaskProcess.registerClass('Xrm.XrmTaskProcess');
Xrm.XrmViewSelector.registerClass('Xrm.XrmViewSelector');
Xrm.WebApi.registerClass('Xrm.WebApi');
Xrm.XrmControls.registerClass('Xrm.XrmControls', Xrm.XrmCollection$1.$$(Xrm.XrmControl));
Xrm.XrmEntities.registerClass('Xrm.XrmEntities', Xrm.XrmCollection$1.$$(Xrm.XrmEntity));
Xrm.XrmEntityAttributes.registerClass('Xrm.XrmEntityAttributes', Xrm.XrmCollection$1.$$(Xrm.XrmEntityAttribute));
Xrm.XrmFormSelectorItem.registerClass('Xrm.XrmFormSelectorItem', null, Xrm.IXrmCollectionItem);
Xrm.XrmFormSelectorItems.registerClass('Xrm.XrmFormSelectorItems', Xrm.XrmCollection$1.$$(Xrm.XrmFormSelectorItem));
Xrm.XrmNavigationItem.registerClass('Xrm.XrmNavigationItem', null, Xrm.IXrmCollectionItem);
Xrm.XrmNavigationItems.registerClass('Xrm.XrmNavigationItems', Xrm.XrmCollection$1.$$(Xrm.XrmNavigationItem));
Xrm.XrmGridRows.registerClass('Xrm.XrmGridRows', Xrm.XrmCollection$1.$$(Xrm.XrmGridRow));
Xrm.XrmRelatedEntities.registerClass('Xrm.XrmRelatedEntities', Xrm.XrmCollectionDictionary$1.$$(Xrm.XrmEntity));
Xrm.XrmTabs.registerClass('Xrm.XrmTabs', Xrm.XrmCollection$1.$$(Xrm.XrmTab));
Xrm.XrmTabNavigators.registerClass('Xrm.XrmTabNavigators', Xrm.XrmCollection$1.$$(Xrm.XrmTabNavigator));
Xrm.XrmTabSections.registerClass('Xrm.XrmTabSections', Xrm.XrmCollection$1.$$(Xrm.XrmTabSection));
Xrm.XrmQuickForms.registerClass('Xrm.XrmQuickForms', Xrm.XrmCollection$1.$$(Xrm.XrmControlQuickForm));
Xrm.AttributeFormat.registerClass('Xrm.AttributeFormat');
Xrm.AttributeType.registerClass('Xrm.AttributeType');
Xrm.ClientName.registerClass('Xrm.ClientName');
Xrm.ClientState.registerClass('Xrm.ClientState');
Xrm.ClientStates.registerClass('Xrm.ClientStates');
Xrm.ControlType.registerClass('Xrm.ControlType');
Xrm.FormSaveAction.registerClass('Xrm.FormSaveAction');
Xrm.LookupStyle.registerClass('Xrm.LookupStyle');
Xrm.NotificationLevel.registerClass('Xrm.NotificationLevel');
Xrm.PageType.registerClass('Xrm.PageType');
Xrm.RequiredLevel.registerClass('Xrm.RequiredLevel');
Xrm.SubmitMode.registerClass('Xrm.SubmitMode');
Xrm.TabDisplayState.registerClass('Xrm.TabDisplayState');
Xrm.EntityMetadata.registerClass('Xrm.EntityMetadata');
Xrm.Description.registerClass('Xrm.Description');
Xrm.LocalizedLabel.registerClass('Xrm.LocalizedLabel');
Xrm.Flag.registerClass('Xrm.Flag');
Xrm.ErrorDialogOptions.registerClass('Xrm.ErrorDialogOptions');
Xrm.DataLoadEventArgs.registerClass('Xrm.DataLoadEventArgs', Sys.EventArgs);
Xrm.ErrorResponse.registerClass('Xrm.ErrorResponse');
Xrm.ExecutionContext.registerClass('Xrm.ExecutionContext');
Xrm.MetricsStopwatch.registerClass('Xrm.MetricsStopwatch');
Xrm.OfflineErrorResponse.registerClass('Xrm.OfflineErrorResponse', Xrm.ErrorResponse);
Xrm.OpenFormSuccessResponse.registerClass('Xrm.OpenFormSuccessResponse');
Xrm.ProcessActionSuccessResponse.registerClass('Xrm.ProcessActionSuccessResponse');
Position.registerClass('Position');
Xrm.SaveErrorResponse.registerClass('Xrm.SaveErrorResponse', Xrm.ErrorResponse);
Xrm.SaveEventArgs.registerClass('Xrm.SaveEventArgs', Sys.EventArgs);
Xrm.SaveSuccessResponse.registerClass('Xrm.SaveSuccessResponse');
Xrm.TaskFlowOptions.registerClass('Xrm.TaskFlowOptions');
Xrm.XrmFile.registerClass('Xrm.XrmFile');
Xrm.XrmOpenFileOption.registerClass('Xrm.XrmOpenFileOption');
Xrm.Diagnostics.registerClass('Xrm.Diagnostics');
Xrm.Dialog.registerClass('Xrm.Dialog');
Xrm.Encoding.registerClass('Xrm.Encoding');
Xrm.Internal.registerClass('Xrm.Internal');
Xrm.Mobile.registerClass('Xrm.Mobile');
Xrm.Navigation.registerClass('Xrm.Navigation');
Xrm.Page.registerClass('Xrm.Page');
Xrm.UI.registerClass('Xrm.UI');
Xrm.Utility.registerClass('Xrm.Utility');
Xrm.Panel.registerClass('Xrm.Panel');
XrmClientApi.XrmAttributeMetadata.registerClass('XrmClientApi.XrmAttributeMetadata', null, Xrm.IXrmCollectionItem);
Xrm.Collection.AttributeMetadataItemCollection.registerClass('Xrm.Collection.AttributeMetadataItemCollection', Xrm.XrmCollection$1.$$(XrmClientApi.XrmAttributeMetadata));
Xrm.Constants.PageType.registerClass('Xrm.Constants.PageType');
Xrm.Constants.ViewType.registerClass('Xrm.Constants.ViewType');
Xrm.Constants.AttributeRequiredLevels.registerClass('Xrm.Constants.AttributeRequiredLevels');
Xrm.Constants.AttributeSubmitModes.registerClass('Xrm.Constants.AttributeSubmitModes');
Xrm.Constants.AttributeTypes.registerClass('Xrm.Constants.AttributeTypes');
Xrm.Constants.NumberAttributeMetadata.registerClass('Xrm.Constants.NumberAttributeMetadata');
Xrm.Constants.AttributeFormats.registerClass('Xrm.Constants.AttributeFormats');
Xrm.Constants.ClientNames.registerClass('Xrm.Constants.ClientNames');
Xrm.Constants.ClientStates.registerClass('Xrm.Constants.ClientStates');
Xrm.Constants.EntityNames.registerClass('Xrm.Constants.EntityNames');
Xrm.Constants.FormNotificationLevels.registerClass('Xrm.Constants.FormNotificationLevels');
Xrm.Constants.FormSaveActions.registerClass('Xrm.Constants.FormSaveActions');
Xrm.Constants.ProcessInstanceStatuses.registerClass('Xrm.Constants.ProcessInstanceStatuses');
Xrm.Constants.ProcessStageStatus.registerClass('Xrm.Constants.ProcessStageStatus');
Xrm.Constants.TabDisplayStates.registerClass('Xrm.Constants.TabDisplayStates');
Xrm.Constants.ControlTypes.registerClass('Xrm.Constants.ControlTypes');
XrmUI.XrmUIBoundingBox.registerClass('XrmUI.XrmUIBoundingBox');
XrmUI.Page.registerClass('XrmUI.Page');
XrmUI.XrmUIControls.registerClass('XrmUI.XrmUIControls', Xrm.XrmCollection$1.$$(XrmUI.IXrmUIControl));
XrmUI.ControlId.registerClass('XrmUI.ControlId');
XrmUI.UIControlType.registerClass('XrmUI.UIControlType');
XrmUI.Manager.registerClass('XrmUI.Manager');
XrmClientApi.ErrorResponse.registerClass('XrmClientApi.ErrorResponse', Xrm.ErrorResponse);
XrmClientApi.OnlineSdk.registerClass('XrmClientApi.OnlineSdk', null, XrmClientApi.CrudSdk);
XrmClientApi.OfflineSdk.registerClass('XrmClientApi.OfflineSdk', null, XrmClientApi.CrudSdk);
XrmClientApi.DialogResponse.registerClass('XrmClientApi.DialogResponse');
XrmClientApi.ConfirmDialogResponse.registerClass('XrmClientApi.ConfirmDialogResponse');
XrmClientApi.XrmEnumAttributeMetadata.registerClass('XrmClientApi.XrmEnumAttributeMetadata', XrmClientApi.XrmAttributeMetadata);
XrmClientApi.XrmStateAttributeMetadata.registerClass('XrmClientApi.XrmStateAttributeMetadata', XrmClientApi.XrmEnumAttributeMetadata);
XrmClientApi.XrmStatusAttributeMetadata.registerClass('XrmClientApi.XrmStatusAttributeMetadata', XrmClientApi.XrmEnumAttributeMetadata);
XrmClientApi.WebApi.Constants.registerClass('XrmClientApi.WebApi.Constants');
XrmClientApi.WebApi.EntityReference.registerClass('XrmClientApi.WebApi.EntityReference');
XrmClientApi.WebApi.EntityMetadataCache.registerClass('XrmClientApi.WebApi.EntityMetadataCache');
XrmClientApi.WebApi.JSResponse.registerClass('XrmClientApi.WebApi.JSResponse');
XrmClientApi.WebApi.ODataContract.registerClass('XrmClientApi.WebApi.ODataContract');
XrmClientApi.WebApi.ODataAssociateRequest.registerClass('XrmClientApi.WebApi.ODataAssociateRequest', XrmClientApi.WebApi.ODataContract);
XrmClientApi.WebApi.ODataCreateRequest.registerClass('XrmClientApi.WebApi.ODataCreateRequest', XrmClientApi.WebApi.ODataContract);
XrmClientApi.WebApi.ODataDeleteRequest.registerClass('XrmClientApi.WebApi.ODataDeleteRequest', XrmClientApi.WebApi.ODataContract);
XrmClientApi.WebApi.ODataDisassociateRequest.registerClass('XrmClientApi.WebApi.ODataDisassociateRequest', XrmClientApi.WebApi.ODataContract);
XrmClientApi.WebApi.ODataRetrieveRequest.registerClass('XrmClientApi.WebApi.ODataRetrieveRequest', XrmClientApi.WebApi.ODataContract);
XrmClientApi.WebApi.ODataUpdateRequest.registerClass('XrmClientApi.WebApi.ODataUpdateRequest', XrmClientApi.WebApi.ODataContract);
XrmClientApi.WebApi.ODataContractMetadata.registerClass('XrmClientApi.WebApi.ODataContractMetadata');
XrmClientApi.WebApi.ODataParameterType.registerClass('XrmClientApi.WebApi.ODataParameterType');
XrmClientApi.WebApi.ODataEnumValue.registerClass('XrmClientApi.WebApi.ODataEnumValue');
XrmClientApi.WebApi.ODataRequestBuilder.registerClass('XrmClientApi.WebApi.ODataRequestBuilder');
XrmClientApi.WebApi.Response.registerClass('XrmClientApi.WebApi.Response');
XrmClientApi.WebApi.RetrieveMultipleResponse.registerClass('XrmClientApi.WebApi.RetrieveMultipleResponse');
XrmClientApi.WebApi.Util.registerClass('XrmClientApi.WebApi.Util');
XrmClientApi.WebApi.WebApiParser.registerClass('XrmClientApi.WebApi.WebApiParser');
XrmClientApi.WebApi.WebApiService.registerClass('XrmClientApi.WebApi.WebApiService');
XrmClientApi.WebApi.Serialization.ODataSerializer.registerClass('XrmClientApi.WebApi.Serialization.ODataSerializer');
XrmClientApi.WebApi.Serialization.SerializedRequest.registerClass('XrmClientApi.WebApi.Serialization.SerializedRequest');
XrmClientApi.Constants.AttributeType.registerClass('XrmClientApi.Constants.AttributeType');
Xrm.Objects.RecentlyViewedItem.registerClass('Xrm.Objects.RecentlyViewedItem');
Xrm.Tracing.XrmTraceHelper.registerClass('Xrm.Tracing.XrmTraceHelper');
Mscrm.NotificationSeverity.none = 0;
Mscrm.NotificationSeverity.error = 1;
Mscrm.NotificationSeverity.warning = 2;
Mscrm.NotificationSeverity.information = 3;
Mscrm.NotificationSeverity.userDefined = 4;
Mscrm.NotificationSource.server = 'Server';
Mscrm.NotificationSource.strategy = 'strategy';
Mscrm.NotificationSource.privilegeCheck = 'PrivilegeCheck';
Mscrm.NotificationSource.validate = 'Validate';
Mscrm.InternalUtilities.ClientApiUtility.clientReqId = 'Request-Id';
Mscrm.InternalUtilities.ClientApiUtility.currentResponseId = 'CurrentResponseId';
Mscrm.InternalUtilities.ClientApiUtility.currentHandlerId = 'CurrentHandlerId';
Mscrm.InternalUtilities.ClientApiUtility.serverResponseId = 'REQ_ID';
Mscrm.InternalUtilities.ClientApiUtility.$3 = {};
Xrm.XrmInternal.$Z = null;
Xrm.XrmInternal.defaultMaxSuggestionsCount = 10;
Xrm.JavaScriptConsoleTraceListener.$2 = null;
Xrm.Offline.$2 = null;
Xrm.WebApi.$N = null;
Xrm.WebApi.messages = new Xrm.XrmSdkMessages();
Xrm.WebApi.offline = new XrmClientApi.OfflineSdk();
Xrm.WebApi.online = new XrmClientApi.OnlineSdk();
Xrm.AttributeFormat.date = 'date';
Xrm.AttributeFormat.dateTime = 'datetime';
Xrm.AttributeFormat.duration = 'duration';
Xrm.AttributeFormat.email = 'email';
Xrm.AttributeFormat.language = 'language';
Xrm.AttributeFormat.none = 'none';
Xrm.AttributeFormat.phone = 'phone';
Xrm.AttributeFormat.text = 'text';
Xrm.AttributeFormat.textArea = 'textarea';
Xrm.AttributeFormat.tickerSymbol = 'tickersymbol';
Xrm.AttributeFormat.timeZone = 'timezone';
Xrm.AttributeFormat.url = 'url';
Xrm.AttributeType.booleanType = 'boolean';
Xrm.AttributeType.dateTimeType = 'datetime';
Xrm.AttributeType.decimalType = 'decimal';
Xrm.AttributeType.doubleType = 'double';
Xrm.AttributeType.integerType = 'integer';
Xrm.AttributeType.lookupType = 'lookup';
Xrm.AttributeType.memoType = 'memo';
Xrm.AttributeType.moneyType = 'money';
Xrm.AttributeType.optionSetType = 'optionset';
Xrm.AttributeType.multiSelectOptionSetType = 'multiselectoptionset';
Xrm.AttributeType.stringType = 'string';
Xrm.AttributeType.uniqueIdentifierType = 'uniqueidentifier';
Xrm.ClientName.mobile = 'Mobile';
Xrm.ClientName.outlook = 'Outlook';
Xrm.ClientName.web = 'Web';
Xrm.ClientName.unifiedServiceDesk = 'UnifiedServiceDesk';
Xrm.ClientState.online = 'Online';
Xrm.ClientState.offline = 'Offline';
Xrm.ClientStates.online = 'Online';
Xrm.ClientStates.offline = 'Offline';
Xrm.ControlType.button = 'button';
Xrm.ControlType.standard = 'standard';
Xrm.ControlType.iFrame = 'iframe';
Xrm.ControlType.lookup = 'lookup';
Xrm.ControlType.optionSet = 'optionset';
Xrm.ControlType.multiSelectOptionSetType = 'multiselectoptionset';
Xrm.ControlType.subGrid = 'subgrid';
Xrm.ControlType.webResource = 'webresource';
Xrm.ControlType.notes = 'notes';
Xrm.ControlType.navBar = 'navbar';
Xrm.ControlType.navBarItem = 'navbaritem';
Xrm.ControlType.timer = 'timercontrol';
Xrm.ControlType.searchWidget = 'searchwidget';
Xrm.ControlType.quickFormControl = 'quickform';
Xrm.ControlType.customControl = 'customcontrol';
Xrm.ControlType.hidden = 'hidden';
Xrm.ControlType.none = 'none';
Xrm.ControlType.emailRecipientActivityControl = 'emailrecipientactivitycontrol';
Xrm.ControlType.emailEngagementActionsControl = 'emailengagementactionscontrol';
Xrm.ControlType.aciControl = 'acicontrol';
Xrm.FormSaveAction.save = 'save';
Xrm.FormSaveAction.saveAndClose = 'saveandclose';
Xrm.FormSaveAction.saveAndNew = 'saveandnew';
Xrm.LookupStyle.single = 'single';
Xrm.LookupStyle.subject = 'subject';
Xrm.LookupStyle.multi = 'multi';
Xrm.NotificationLevel.error = 'ERROR';
Xrm.NotificationLevel.warning = 'WARNING';
Xrm.NotificationLevel.information = 'INFO';
Xrm.NotificationLevel.localSave = 'LOCALSAVE';
Xrm.NotificationLevel.recommendation = 'RECOMMENDATION';
Xrm.PageType.workspace = 'Workspace';
Xrm.PageType.interactionCentricWorkspace = 'InteractionCentricWorkspace';
Xrm.PageType.search = 'Search';
Xrm.PageType.chartDrilldown = 'ChartDrilldown';
Xrm.PageType.grid = 'Grid';
Xrm.PageType.subGrid = 'SubGrid';
Xrm.PageType.form = 'Form';
Xrm.PageType.editForm = 'Edit';
Xrm.PageType.createForm = 'Create';
Xrm.RequiredLevel.none = 'none';
Xrm.RequiredLevel.recommended = 'recommended';
Xrm.RequiredLevel.required = 'required';
Xrm.RequiredLevel.systemRequired = 'systemrequired';
Xrm.SubmitMode.dirty = 'dirty';
Xrm.SubmitMode.always = 'always';
Xrm.SubmitMode.never = 'never';
Xrm.TabDisplayState.expanded = 'expanded';
Xrm.TabDisplayState.collapsed = 'collapsed';
Xrm.Dialog.$2 = null;
Xrm.Encoding.$2 = null;
Xrm.Internal.$2 = null;
Xrm.Internal.$F = null;
Xrm.Internal.messages = new Xrm.XrmSdkMessages();
Xrm.Internal.trace = new Xrm.XrmTrace();
Xrm.Internal.$$cctor();
Xrm.Mobile.offline = null;
Xrm.Navigation.$2 = null;
Xrm.Page.context = null;
Xrm.Page.data = null;
Xrm.Page.grid = null;
Xrm.Page.ui = null;
Xrm.Utility.$2 = null;
Xrm.Panel.$2 = null;
Xrm.Constants.PageType.recordList = 'recordlist';
Xrm.Constants.ViewType.savedView = 'savedview';
Xrm.Constants.ViewType.userView = 'userview';
Xrm.Constants.AttributeRequiredLevels.none = 'none';
Xrm.Constants.AttributeRequiredLevels.recommended = 'recommended';
Xrm.Constants.AttributeRequiredLevels.required = 'required';
Xrm.Constants.AttributeRequiredLevels.systemRequired = 'systemrequired';
Xrm.Constants.AttributeSubmitModes.dirty = 'dirty';
Xrm.Constants.AttributeSubmitModes.always = 'always';
Xrm.Constants.AttributeSubmitModes.never = 'never';
Xrm.Constants.AttributeTypes.booleanType = 'boolean';
Xrm.Constants.AttributeTypes.dateTimeType = 'datetime';
Xrm.Constants.AttributeTypes.decimalType = 'decimal';
Xrm.Constants.AttributeTypes.doubleType = 'double';
Xrm.Constants.AttributeTypes.integerType = 'integer';
Xrm.Constants.AttributeTypes.lookupType = 'lookup';
Xrm.Constants.AttributeTypes.memoType = 'memo';
Xrm.Constants.AttributeTypes.moneyType = 'money';
Xrm.Constants.AttributeTypes.optionSetType = 'optionset';
Xrm.Constants.AttributeTypes.stringType = 'string';
Xrm.Constants.NumberAttributeMetadata.minSupportedPrecision = 0;
Xrm.Constants.NumberAttributeMetadata.maxSupportedPrecision = 5;
Xrm.Constants.AttributeFormats.date = 'date';
Xrm.Constants.AttributeFormats.dateTime = 'datetime';
Xrm.Constants.AttributeFormats.duration = 'duration';
Xrm.Constants.AttributeFormats.email = 'email';
Xrm.Constants.AttributeFormats.language = 'language';
Xrm.Constants.AttributeFormats.none = 'none';
Xrm.Constants.AttributeFormats.phone = 'phone';
Xrm.Constants.AttributeFormats.text = 'text';
Xrm.Constants.AttributeFormats.textArea = 'textarea';
Xrm.Constants.AttributeFormats.tickerSymbol = 'tickersymbol';
Xrm.Constants.AttributeFormats.timeZone = 'timezone';
Xrm.Constants.AttributeFormats.url = 'url';
Xrm.Constants.ClientNames.mobile = 'Mobile';
Xrm.Constants.ClientNames.outlook = 'Outlook';
Xrm.Constants.ClientNames.web = 'Web';
Xrm.Constants.ClientNames.unifiedServiceDesk = 'UnifiedServiceDesk';
Xrm.Constants.ClientStates.online = 'Online';
Xrm.Constants.ClientStates.offline = 'Offline';
Xrm.Constants.EntityNames.ActivityParty = 'activityparty';
Xrm.Constants.EntityNames.ActivityPointer = 'activitypointer';
Xrm.Constants.EntityNames.Annotation = 'annotation';
Xrm.Constants.EntityNames.Attachment = 'attachment';
Xrm.Constants.EntityNames.Category = 'category';
Xrm.Constants.EntityNames.Connection = 'connection';
Xrm.Constants.EntityNames.ConnectionRole = 'connectionrole';
Xrm.Constants.EntityNames.SystemUser = 'systemuser';
Xrm.Constants.EntityNames.Team = 'team';
Xrm.Constants.EntityNames.TeamMembership = 'teammembership';
Xrm.Constants.EntityNames.WebResource = 'webresource';
Xrm.Constants.FormNotificationLevels.error = 'ERROR';
Xrm.Constants.FormNotificationLevels.warning = 'WARNING';
Xrm.Constants.FormNotificationLevels.information = 'INFO';
Xrm.Constants.FormSaveActions.save = 'save';
Xrm.Constants.FormSaveActions.saveAndClose = 'saveandclose';
Xrm.Constants.FormSaveActions.saveAndNew = 'saveandnew';
Xrm.Constants.ProcessInstanceStatuses.active = 'active';
Xrm.Constants.ProcessInstanceStatuses.finish = 'finish';
Xrm.Constants.ProcessInstanceStatuses.abandoned = 'abandoned';
Xrm.Constants.ProcessStageStatus.active = 'active';
Xrm.Constants.ProcessStageStatus.inActive = 'inactive';
Xrm.Constants.TabDisplayStates.expanded = 'expanded';
Xrm.Constants.TabDisplayStates.collapsed = 'collapsed';
Xrm.Constants.ControlTypes.standard = 'standard';
Xrm.Constants.ControlTypes.iFrame = 'iframe';
Xrm.Constants.ControlTypes.lookup = 'lookup';
Xrm.Constants.ControlTypes.optionSet = 'optionset';
Xrm.Constants.ControlTypes.subGrid = 'subgrid';
Xrm.Constants.ControlTypes.webResource = 'webresource';
Xrm.Constants.ControlTypes.notes = 'notes';
Xrm.Constants.ControlTypes.timer = 'timercontrol';
Xrm.Constants.ControlTypes.kbsearch = 'kbsearch';
Xrm.Constants.ControlTypes.quickFormControl = 'quickform';
Xrm.Constants.ControlTypes.button = 'button';
XrmUI.ControlId.filterButton = 'filterButton';
XrmUI.ControlId.gridHeaderItem = 'gridHeaderItem';
XrmUI.ControlId.helpButton = 'help';
XrmUI.ControlId.homeButton = 'home';
XrmUI.ControlId.jumpBar = 'jumpBar';
XrmUI.ControlId.listItem = 'listItem';
XrmUI.ControlId.moreCommands = 'moreCommands';
XrmUI.ControlId.navigationBar = 'navigationbar';
XrmUI.ControlId.navDetailFlyout = 'navDetailflyout';
XrmUI.ControlId.navModuleFlyout = 'navModuleflyout';
XrmUI.ControlId.panoramaItem = 'panoramaItem';
XrmUI.ControlId.searchButton = 'search';
XrmUI.ControlId.siteMapButton = 'sitemap';
XrmUI.ControlId.gridHeader = 'gridHeader';
XrmUI.ControlId.gridRow = 'gridRow';
XrmUI.ControlId.subGrid = 'crmSubGrid';
XrmUI.ControlId.refreshButton = 'refresh';
XrmUI.ControlId.panoramaContainer = 'PanoramaContainer';
XrmUI.ControlId.swipeIn = 'swipeIn';
XrmUI.UIControlType.back = 'Back';
XrmUI.UIControlType.barChart = 'BarChart';
XrmUI.UIControlType.button = 'Button';
XrmUI.UIControlType.commandButton = 'CommandButton';
XrmUI.UIControlType.columnChart = 'ColumnChart';
XrmUI.UIControlType.commandBarContainer = 'appBar';
XrmUI.UIControlType.crmChart = 'CrmChart';
XrmUI.UIControlType.chartList = 'visualizationListContainer';
XrmUI.UIControlType.chartToolBar = 'visualizationToolBar';
XrmUI.UIControlType.chartToolBarButton = 'ChartToolBarButton';
XrmUI.UIControlType.dateOfPost = 'DateOfPost';
XrmUI.UIControlType.drilldown = 'DrillDownContainer';
XrmUI.UIControlType.deleteNotesAction = 'deleteNotesAction';
XrmUI.UIControlType.deleteLink = 'deleteLink';
XrmUI.UIControlType.filterButton = 'filterButton';
XrmUI.UIControlType.funnelChart = 'FunnelChart';
XrmUI.UIControlType.grid = 'Grid';
XrmUI.UIControlType.gridHeader = 'gridHeader';
XrmUI.UIControlType.gridHeaderItem = 'gridHeaderItem';
XrmUI.UIControlType.gridQuickFind = 'GridQuickFind';
XrmUI.UIControlType.gridRow = 'gridRow';
XrmUI.UIControlType.gridViewSelectorDropDown = 'GridViewSelectorDropDown';
XrmUI.UIControlType.gridQuickFindContainer = 'GridQuickFindContainer';
XrmUI.UIControlType.gridQuickFindButton = 'GridQuickFindButton';
XrmUI.UIControlType.gridViewSelector = 'GridViewSelector';
XrmUI.UIControlType.gridViewSelectorContainer = 'GridViewSelectorContainer';
XrmUI.UIControlType.gridViewPinImage = 'GridViewPinImage';
XrmUI.UIControlType.home = 'Home';
XrmUI.UIControlType.jumpBar = 'jumpBar';
XrmUI.UIControlType.lineChart = 'LineChart';
XrmUI.UIControlType.listItem = 'ListItem';
XrmUI.UIControlType.navigationButton = 'NavigationButton';
XrmUI.UIControlType.navigationContainer = 'NavigationContainer';
XrmUI.UIControlType.newRecordButton = 'newRecordButton';
XrmUI.UIControlType.notesTextBox = 'NotesTextBox';
XrmUI.UIControlType.notesWallContainer = 'NotesWallContainer';
XrmUI.UIControlType.notesWall = 'NotesWall';
XrmUI.UIControlType.notesItemTextBoxDiv = 'PostItemTextBoxDiv';
XrmUI.UIControlType.notesItemTextBoxSpacer = 'PostItemTextBoxSpacer';
XrmUI.UIControlType.notesControl = 'NotesControl';
XrmUI.UIControlType.notesControlChildElements = 'NotesControlChildElements';
XrmUI.UIControlType.okCell = 'OkCell';
XrmUI.UIControlType.panoramaContainer = 'panoramaContainer';
XrmUI.UIControlType.panoramaItem = 'panoramaItem';
XrmUI.UIControlType.pieChart = 'PieChart';
XrmUI.UIControlType.postContainerItem = 'PostContainerItem';
XrmUI.UIControlType.postItemTitle = 'PostItemTitle';
XrmUI.UIControlType.postItemText = 'PostItemText';
XrmUI.UIControlType.postFooter = 'PostFooter';
XrmUI.UIControlType.postFooterActionArea = 'PostFooterActionArea';
XrmUI.UIControlType.postFooterAttachSpacer = 'PostFooterAttachSpacer';
XrmUI.UIControlType.postFooterDoneSpacer = 'PostFooterDoneSpacer';
XrmUI.UIControlType.postDoneButton = 'PostDoneButton';
XrmUI.UIControlType.postAttachImage = 'PostAttachImage';
XrmUI.UIControlType.postAttachFrame = 'PostAttachFrame';
XrmUI.UIControlType.postAttachButton = 'PostAttachButton';
XrmUI.UIControlType.postAuditInformation = 'PostAuditInformation';
XrmUI.UIControlType.postUserName = 'PostUserName';
XrmUI.UIControlType.postUndoText = 'PostUndoText';
XrmUI.UIControlType.postUndoLink = 'PostUndoLink';
XrmUI.UIControlType.refreshButton = 'refresh';
XrmUI.UIControlType.staticNavigationButton = 'StaticNavigationButton';
XrmUI.UIControlType.undeletePost = 'UndeletePost';
XrmUI.UIControlType.processStage = 'ProcessStage';
XrmUI.UIControlType.processStep = 'ProcessStep';
XrmUI.UIControlType.processStepColumn = 'ProcessStepColumn';
XrmUI.UIControlType.processControlContainer = 'ProcessControlContainer';
XrmUI.UIControlType.processHeaderContainer = 'ProcessHeaderContainer';
XrmUI.UIControlType.processHeaderStage = 'ProcessHeaderStage';
XrmUI.UIControlType.quickCreateCommandButton = 'QuickCreateCommandButton';
XrmUI.UIControlType.flyOutButton = 'FlyOutButton';
XrmUI.Manager.XrmUIPage = null;
XrmUI.Manager.ControlsData = null;
XrmUI.Manager.$I = null;
XrmClientApi.WebApi.Constants.applicatioN_JSON = 'application/json';
XrmClientApi.WebApi.Constants.xhttP_METHOD = 'X-HTTP-Method';
XrmClientApi.WebApi.Constants.maX_PAGE_SIZE = 'odata.maxpagesize={0}';
XrmClientApi.WebApi.Constants.PREFER = 'prefer';
XrmClientApi.WebApi.Constants.returN_NOTIFICATIONS = 'MSCRM.ReturnNotifications';
XrmClientApi.WebApi.Constants.requesT_HEADER_SEPERATOR = ',';
XrmClientApi.WebApi.Constants.odatA_END_POINT = '/api/data/v9.0/';
XrmClientApi.WebApi.Constants.responsE_TYPE = 'application/json';
XrmClientApi.WebApi.Constants.contenT_TYPE = 'application/json; charset=utf-8';
XrmClientApi.WebApi.Constants.batcH_PREFIX = 'batch_';
XrmClientApi.WebApi.Constants.changeseT_PREFIX = 'changeset_';
XrmClientApi.WebApi.Constants.changeseT_REQUEST_BODY = '{0} /{1}/api/data/v9.0/{2} HTTP/1.1';
XrmClientApi.WebApi.Constants.changeseT_REQUEST_BODY_ONLINE = '{0} /api/data/v9.0/{1} HTTP/1.1';
XrmClientApi.WebApi.Constants.geT_REQUEST_BODY = 'GET /{0}/api/data/v9.0/{1} HTTP/1.1';
XrmClientApi.WebApi.Constants.geT_REQUEST_BODY_ONLINE = 'GET /api/data/v9.0/{0} HTTP/1.1';
XrmClientApi.WebApi.Constants.sidE_EFFECT_REQUEST_BODY = '{0} {1}/api/data/v9.0/{2} HTTP/1.1';
XrmClientApi.WebApi.Constants.sidE_EFFECT_REQUEST_BODY_ONLINE = '{0} /api/data/v9.0/{1} HTTP/1.1';
XrmClientApi.WebApi.Constants.requesT_SEPERATOR = '--';
XrmClientApi.WebApi.Constants.partY_LIST = 'partylist';
XrmClientApi.WebApi.Constants.attributes = 'Attributes';
XrmClientApi.WebApi.Constants.oneToManyRelationships = 'OneToManyRelationships';
XrmClientApi.WebApi.Constants.manyToOneRelationships = 'ManyToOneRelationships';
XrmClientApi.WebApi.Constants.manyToManyRelationships = 'ManyToManyRelationships';
XrmClientApi.WebApi.Constants.entityMetadata = 'EntityMetadata';
XrmClientApi.WebApi.Constants.retrieveURLFormatForLookup = '_{0}_value';
XrmClientApi.WebApi.Constants.jsonStartsWith = '{\"error\":';
XrmClientApi.WebApi.Constants.responseWithBatch = '--batchresponse';
XrmClientApi.WebApi.Constants.supportedLookupProperties = [ 'owner', 'customer', 'lookup' ];
XrmClientApi.WebApi.Constants.oDataBaseUrlFormat1 = '{0}/Microsoft.Dynamics.CRM.{1}';
XrmClientApi.WebApi.Constants.oDataBaseUrlFormat2 = '{0}({1})/Microsoft.Dynamics.CRM.{2}';
XrmClientApi.WebApi.Constants.oDataBaseUrlFormat3 = '{0}';
XrmClientApi.WebApi.Constants.retrieveRequestURLParameterFormat = '{0}({1})?$select={2}{3}';
XrmClientApi.WebApi.Constants.associateRequestURLParameterFormat = '{0}({1})/{2}/$ref';
XrmClientApi.WebApi.Constants.disassociateUrlParameterFormat = '{0}({1})/{2}{3}/$ref';
XrmClientApi.WebApi.Constants.oDataPrimitives = [ 'Edm.Boolean', 'Edm.String', 'Edm.Byte', 'Edm.Decimal', 'Edm.Double', 'Edm.Int16', 'Edm.Int32', 'Edm.Int64', 'Edm.SByte', 'Edm.Single', 'Edm.Date', 'Edm.Guid', 'Edm.DateTimeOffset', 'Edm.Duration', 'Edm.Stream', 'Edm.Binary', 'Edm.TimeOfDay', 'Edm.Geography', 'Edm.GeographyPoint', 'Edm.GeographyLineString', 'Edm.GeographyPolygon', 'Edm.GeographyMultiPoint', 'Edm.GeographyMultiLineString', 'Edm.GeographyMultiPolygon', 'Edm.GeographyCollection', 'Edm.Geometry', 'Edm.GeometryPoint', 'Edm.GeometryLineString', 'Edm.GeometryPolygon', 'Edm.GeometryMultiPoint', 'Edm.GeometryMultiLineString', 'Edm.GeometryMultiPolygon', 'Edm.GeometryCollection' ];
XrmClientApi.WebApi.Constants.successCodes = [ 200, 201, 202, 203, 204, 205, 206, 207, 208, 226 ];
XrmClientApi.WebApi.EntityMetadataCache.$E = null;
XrmClientApi.Constants.AttributeType.bool = 'Boolean';
XrmClientApi.Constants.AttributeType.customer = 'Customer';
XrmClientApi.Constants.AttributeType.dateTime = 'DateTime';
XrmClientApi.Constants.AttributeType.decimal = 'Decimal';
XrmClientApi.Constants.AttributeType.doubleType = 'Double';
XrmClientApi.Constants.AttributeType.integer = 'Integer';
XrmClientApi.Constants.AttributeType.lookup = 'Lookup';
XrmClientApi.Constants.AttributeType.memo = 'Memo';
XrmClientApi.Constants.AttributeType.money = 'Money';
XrmClientApi.Constants.AttributeType.owner = 'Owner';
XrmClientApi.Constants.AttributeType.partyList = 'PartyList';
XrmClientApi.Constants.AttributeType.picklist = 'Picklist';
XrmClientApi.Constants.AttributeType.state = 'State';
XrmClientApi.Constants.AttributeType.status = 'Status';
XrmClientApi.Constants.AttributeType.string = 'String';
XrmClientApi.Constants.AttributeType.uniqueidentifier = 'Uniqueidentifier';
XrmClientApi.Constants.AttributeType.calendarRules = 'CalendarRules';
XrmClientApi.Constants.AttributeType.virtual = 'Virtual';
XrmClientApi.Constants.AttributeType.bigInt = 'BigInt';
XrmClientApi.Constants.AttributeType.managedProperty = 'ManagedProperty';
XrmClientApi.Constants.AttributeType.entityName = 'EntityName';
XrmClientApi.Constants.AttributeType.image = 'Image';
