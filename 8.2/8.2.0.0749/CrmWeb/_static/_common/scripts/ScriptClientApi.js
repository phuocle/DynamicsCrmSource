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
        Mscrm.InternalUtilities.ClientApiUtility
            .handleError($v_1, response.get_message(), $v_0.get_responseOuterXml(), $v_0);
    }
}
Mscrm.InternalUtilities.ClientApiUtility
    .handleError = function(errorCode, customErrorMessage, serializedException, serviceFault) {
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
        } else {
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


Type.registerNamespace('Xrm');

Xrm.IBusinessRuleNotificationProvider = function() {}
Xrm.IBusinessRuleNotificationProvider.registerInterface('Xrm.IBusinessRuleNotificationProvider');


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
    action: 1
}
Xrm.StepType.registerEnum('Xrm.StepType', false);


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
}


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
    }
}


Xrm.XrmDialog = function() {
}


Xrm.XrmInternal = function() {
    this.messages = Xrm.Internal.messages;
    this.trace = Xrm.Internal.trace;
}
Xrm.XrmInternal.$T = function($p0) {
    return (!IsNull($p0.get_organizationServiceFault()))
        ? $p0.get_organizationServiceFault().get_errorCode().toString()
        : 'UnknownError';
}
Xrm.XrmInternal.prototype = {
    getServiceDirectory: function() {
        return Xrm.XrmInternal.$P;
    },

    setServiceDirectory: function(serviceDirectory) {
        Xrm.XrmInternal.$P = serviceDirectory;
    },

    getAvailableClients: function() {
        var $v_0 = ['Mobile', 'Outlook', 'Web', 'UnifiedServiceDesk'];
        return $v_0;
    },

    getAvailableFormFactors: function() {
        var $v_0 = [0, 1, 2, 3];
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
            },
            function($p1_0) {
                var $v_2 = Xrm.XrmInternal.$T($p1_0);
                $v_0.reject($v_2);
            });
        return $v_0.promise();
    },

    setGuidedHelpProperties: function(value) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(String, String);
        var $$t_5 = this, $$t_6 = this;
        Xrm.Internal.messages.toggleGuidedHelp(value).then(function($p1_0) {
                $v_0.resolve('true');
            },
            function($p1_0) {
                var $v_1 = Xrm.XrmInternal.$T($p1_0);
                $v_0.reject($v_1);
            });
        return $v_0.promise();
    }
}


Xrm.XrmOffline = function() {
}


Xrm.XrmUtility = function() {
}


Xrm.XrmPanel = function() {
}


Xrm.JavaScriptConsoleTraceListener = function($p0) {
    this.$S_0 = $p0;
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
    } catch ($v_3) {
    }
}
Xrm.JavaScriptConsoleTraceListener.get_instance = function() {
    return Xrm.JavaScriptConsoleTraceListener.$2;
}
Xrm.JavaScriptConsoleTraceListener.prototype = {
    $S_0: false,

    log: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [format].concat(args));
        console.log('%s', $v_0);
    },

    warning: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [format].concat(args));
        if (this.$S_0) {
            console.warn('%s', $v_0);
        } else {
            console.log('WARNING %s', $v_0);
        }
    },

    error: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [format].concat(args));
        console.error('%s', $v_0);
    }
}


Xrm.ScopedServiceDirectory = function(parentDirectory) {
    this.$8_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1
        .$$(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)))();
    if (_Script.isNullOrUndefined(parentDirectory)) {
        throw Error.argumentNull('parentDirectory');
    }
    this.$F_0 = parentDirectory;
}
Xrm.ScopedServiceDirectory.prototype = {
    $F_0: null,
    $5_0: null,
    $7_0: false,

    register: function(TService, implementation) {
        if (this.$7_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        if (!_Script.isNullOrUndefined(this.$8_0.get_item($v_0))) {
            if (this.$8_0.get_item($v_0).contains(implementation)) {
                var $v_1 = String.format('Service {0} already has an implementation in this scope', $v_0);
                throw Error.invalidOperation($v_1);
            }
        }
        this.$F_0.register(TService, implementation);
        if (_Script.isNullOrUndefined(this.$8_0.get_item($v_0))) {
            this.$5_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
            this.$5_0.add(implementation);
            this.$8_0.set_item($v_0, this.$5_0);
        } else {
            this.$5_0 = this.$8_0.get_item($v_0);
            this.$5_0.add(implementation);
        }
        Xrm.Internal.trace.logT(Xrm.ScopedServiceDirectory,
            'Registered implementation for service {1} of type {0}',
            Object.getType(implementation).getName(),
            $v_0);
    },

    unregister: function(TService, implementation) {
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        var $v_1 = this.$8_0.get_item($v_0);
        if (_Script.isNullOrUndefined($v_1)) {
            var $v_2 = String.format('Service {0} is not registered with this instance', $v_0);
            throw Error.invalidOperation($v_2);
        }
        if (!$v_1.contains(implementation)) {
            var $v_3 = String.format('This implementation is not registered for service {0}', $v_0);
            throw Error.invalidOperation($v_3);
        }
        this.$F_0.unregister(TService, implementation);
        $v_1.remove(implementation);
        if (!$v_1.get_Count()) {
            this.$8_0.remove($v_0);
        }
        Xrm.Internal.trace.logT(Xrm.ScopedServiceDirectory,
            'Unregistered implementation for service {1} of type {0}',
            Object.getType(implementation).getName(),
            $v_0);
    },

    find: function(TService) {
        if (this.$7_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        return this.$F_0.find(TService);
    },

    dispose: function() {
        this.$7_0 = true;
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
    this.$E_0 = log;
    this.$G_0 = warning;
    this.$C_0 = error;
}
Xrm.StringBuilderTraceListener.create = function() {
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = new Sys.StringBuilder();
    var $v_2 = new Sys.StringBuilder();
    return new Xrm.StringBuilderTraceListener($v_0, $v_1, $v_2);
}
Xrm.StringBuilderTraceListener.prototype = {
    $E_0: null,
    $G_0: null,
    $C_0: null,

    log: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [format].concat(args));
        this.$E_0.appendLine($v_0);
    },

    warning: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [format].concat(args));
        this.$G_0.appendLine($v_0);
    },

    error: function(format) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $v_0 = String.format.apply(null, [format].concat(args));
        this.$C_0.appendLine($v_0);
    },

    clear: function() {
        this.$E_0.clear();
        this.$G_0.clear();
        this.$C_0.clear();
    },

    get_logBuilder: function() {
        return this.$E_0;
    },

    get_warningBuilder: function() {
        return this.$G_0;
    },

    get_errorBuilder: function() {
        return this.$C_0;
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
    $R_0: null,

    get_$1_0: function() {
        return this.$R_0 ||
        (this.$R_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy
            .CrmSoapService(Xrm.Page.context.getClientUrl()));
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
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName,
            new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Xrm.Objects.EntityReference(assigneeEntityName,
            new Microsoft.Crm.Client.Core.Framework.Guid(assigneeEntityId));
        var $v_2 = new Xrm.Gen.AssignRequest($v_0, $v_1);
        return this.get_$1_0().execute($v_2);
    },

    assignMultiple: function(records, assigneeEntityName, assigneeEntityId) {
        var $v_0 = new Array(records.length);
        for (var $v_2 = 0; $v_2 < records.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.AssignRequest(new Xrm.Objects
                .EntityReference(records[$v_2].LogicalName, records[$v_2].Id),
                new Xrm.Objects.EntityReference(assigneeEntityName,
                    new Microsoft.Crm.Client.Core.Framework.Guid(assigneeEntityId)));
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
        var $v_0 = new Xrm.Gen.CloneContractRequest(new Microsoft.Crm.Client.Core.Framework.Guid(contractId),
            includeCanceledLines);
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

    createKnowledgeArticleVersion: function(source, isMajor) {
        var $v_0 = new Xrm.Gen.CreateKnowledgeArticleVersionRequest(source, isMajor);
        return this.get_$1_0().execute($v_0);
    },

    createKnowledgeArticleTranslation: function(source, language, isMajor) {
        var $v_0 = new Xrm.Gen.CreateKnowledgeArticleTranslationRequest(source, language, isMajor);
        return this.get_$1_0().execute($v_0);
    },

    publishKnowledgeArticle: function(entity,
        copyRelatedProductFromAssociatedPrimary,
        copyRelatedCategoryFromAssociatedPrimary,
        publishApprovedRelatedTranslations) {
        var $v_0 = new Xrm.Gen
            .PublishKnowledgeArticleRequest(entity,
                copyRelatedProductFromAssociatedPrimary,
                copyRelatedCategoryFromAssociatedPrimary,
                publishApprovedRelatedTranslations);
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
        var $v_0 = new Xrm.Gen.ConvertActivityRequest(new Microsoft.Crm.Client.Core.Framework.Guid(activityId),
            activityEntityName,
            targetEntity,
            targetEntityName,
            createCampaignResponse);
        return this.get_$1_0().execute($v_0);
    },

    convertCampaignResponse: function(campaignResponse,
        entityName,
        createOpportunityForExistingCustomer,
        customer,
        currency,
        owner) {
        var $v_0 = new Xrm.Gen
            .ConvertCampaignResponseRequest(campaignResponse,
                entityName,
                createOpportunityForExistingCustomer,
                customer,
                currency,
                owner);
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
        var $v_0 = new Xrm.Gen.CopyCampaignRequest(new Microsoft.Crm.Client.Core.Framework.Guid(campaignId),
            saveAsTemplate);
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
        var $v_0 = new Xrm.Gen.CreateAndAssociateRequest(new Microsoft.Crm.Client.Core.Framework
            .Guid(regardingObjectId),
            regardingObjectTypeCode,
            associationRelationshipName,
            article);
        return this.get_$1_0().execute($v_0);
    },

    associateKnowledgeArticle: function(regardingObjectId,
        regardingObjectTypeCode,
        associationRelationshipName,
        knowledgeArticleId) {
        var $v_0 = new Xrm.Sdk
            .AssociateKnowledgeArticleRequest(new Microsoft.Crm.Client.Core.Framework.Guid(regardingObjectId),
                regardingObjectTypeCode,
                associationRelationshipName,
                new Microsoft.Crm.Client.Core.Framework.Guid(knowledgeArticleId));
        return this.get_$1_0().execute($v_0);
    },

    disassociateKnowledgeArticle: function(regardingObjectId,
        regardingObjectTypeCode,
        associationRelationshipName,
        knowledgeArticleId) {
        var $v_0 = new Xrm.Sdk
            .DisassociateKnowledgeArticleRequest(new Microsoft.Crm.Client.Core.Framework.Guid(regardingObjectId),
                regardingObjectTypeCode,
                associationRelationshipName,
                new Microsoft.Crm.Client.Core.Framework.Guid(knowledgeArticleId));
        return this.get_$1_0().execute($v_0);
    },

    createEntityFrom: function(parentEntity, targetEntityName, targetFieldType) {
        var $v_0 = new Xrm.Gen.InitializeFromRequest(parentEntity, targetEntityName, targetFieldType);
        return this.get_$1_0().execute($v_0);
    },

    createOrder: function(quoteId, columnSet) {
        var $v_0 = new Xrm.Gen.ConvertQuoteToSalesOrderRequest(quoteId, columnSet);
        $v_0.processInstanceId = this.$Q_0();
        return this.get_$1_0().execute($v_0);
    },

    createProducts: function(entities, parentEntity) {
        var $v_0 = new Xrm.Gen.CreateProductsRequest(entities, parentEntity);
        return this.get_$1_0().execute($v_0);
    },

    deleteEntity: function(targetEntityName, targetEntityId) {
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName,
            new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Xrm.Gen.DeleteRequest($v_0);
        return this.get_$1_0().execute($v_1);
    },

    deleteEntityMultiple: function(targetEntityName, targetEntityIds) {
        var $v_0 = new Array(targetEntityIds.length);
        for (var $v_2 = 0; $v_2 < targetEntityIds.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.DeleteRequest(new Xrm.Objects
                .EntityReference(targetEntityName,
                    new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityIds[$v_2
                    ])));
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
        var $v_0 = new Xrm.Gen
            .GetInvoiceProductsFromOpportunityRequest(new Microsoft.Crm.Client.Core.Framework.Guid(opportunityId),
                new Microsoft.Crm.Client.Core.Framework.Guid(invoiceId));
        return this.get_$1_0().execute($v_0);
    },

    getValidStatusTransition: function(incidentId, statusCode) {
        var $v_0 = new Xrm.Gen.GetValidStatusTransitionRequest(incidentId, statusCode);
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

    executeQuickFind: function(searchText, entityGroupName, entityNames) {
        var $v_0 = new Xrm.Sdk.ExecuteQuickFindRequest(searchText, entityGroupName, entityNames);
        return this.get_$1_0().execute($v_0);
    },

    newDocument: function(fileName, regardingObjectId, regardingObjectTypeCode, locationId) {
        var $v_0 = new Xrm.Gen.NewDocumentRequest(fileName, regardingObjectId, regardingObjectTypeCode, locationId);
        $v_0.fileName = fileName;
        $v_0.regardingObjectId = regardingObjectId;
        $v_0.regardingObjectTypeCode = regardingObjectTypeCode;
        $v_0.locationId = locationId;
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
            if ((('regardingobjectid') in propertiesList.get_entities()[$v_2].get_fields()) &&
                regardingObject.Id.equals((propertiesList.get_entities()[$v_2].get_fields()['regardingobjectid']).Id)) {
                if ((('statecode') in propertiesList.get_entities()[$v_2].get_fields()) &&
                    propertiesList.get_entities()[$v_2].get_fields()['statecode'] === '0') {
                    propertiesList.get_entities()[$v_2].get_changedFieldNames().add('basedynamicpropertyid');
                    $v_0[$v_2] = new Xrm.Gen.CreateRequest(propertiesList.get_entities()[$v_2]);
                } else {
                    $v_0[$v_2] = new Xrm.Gen.UpdateRequest(propertiesList.get_entities()[$v_2]);
                }
            } else {
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

    qualifyLead: function(leadId,
        createAccount,
        createContact,
        createOpportunity,
        opportunityCurrencyId,
        opportunityCustomerId,
        sourceCampaignId,
        status,
        suppressDuplicateDetection) {
        var $v_0 = this.$Q_0();
        var $v_1 = new Xrm.Gen.QualifyLeadRequest(leadId,
            createAccount,
            createContact,
            createOpportunity,
            opportunityCurrencyId,
            opportunityCustomerId,
            sourceCampaignId,
            status,
            suppressDuplicateDetection,
            $v_0);
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
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName,
            new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
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
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName,
            new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
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
        var $v_0 = new Xrm.Gen.CancelContractRequest(new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId),
            cancelDate,
            status);
        return this.get_$1_0().execute($v_0);
    },

    setState: function(targetEntityName, targetEntityId, state, status) {
        var $v_0 = new Xrm.Objects.EntityReference(targetEntityName,
            new Microsoft.Crm.Client.Core.Framework.Guid(targetEntityId));
        var $v_1 = new Xrm.Gen.SetStateRequest($v_0, state, status, true);
        return this.get_$1_0().execute($v_1);
    },

    setStateMultiple: function(records, state, status) {
        var $v_0 = new Array(records.length);
        for (var $v_2 = 0; $v_2 < records.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.SetStateRequest(new Xrm.Objects
                .EntityReference(records[$v_2].LogicalName, records[$v_2].Id),
                state,
                status,
                true);
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

    checkoutFiles: function(documentRecord) {
        var $v_0 = new Xrm.Gen.CheckoutDocumentRequest(documentRecord);
        $v_0.entity = documentRecord;
        return this.get_$1_0().execute($v_0);
    },

    checkInFiles: function(documentRecord, checkInComments, retainCheckout) {
        var $v_0 = new Xrm.Gen.CheckInDocumentRequest(documentRecord, checkInComments, retainCheckout);
        $v_0.entity = documentRecord;
        $v_0.checkInComments = checkInComments;
        $v_0.retainCheckout = retainCheckout;
        return this.get_$1_0().execute($v_0);
    },

    deleteDocument: function(documentRecords) {
        var $v_0 = new Xrm.Gen.DeleteDocumentRequest(documentRecords);
        $v_0.entities = documentRecords;
        return this.get_$1_0().execute($v_0);
    },

    discardCheckoutFiles: function(documentRecord) {
        var $v_0 = new Xrm.Gen.DiscardDocumentCheckoutRequest(documentRecord);
        $v_0.entity = documentRecord;
        return this.get_$1_0().execute($v_0);
    },

    editDocumentProperties: function(documentRecord) {
        var $v_0 = new Xrm.Gen.EditDocumentPropertiesRequest(documentRecord);
        $v_0.entity = documentRecord;
        return this.get_$1_0().execute($v_0);
    },

    createFolder: function(folderName, objType, objId, siteType, validateFolder) {
        var $v_0 = new Xrm.Gen.CreateFolderRequest(folderName, objType, objId);
        $v_0.siteType = siteType;
        $v_0.validateFolder = validateFolder;
        return this.get_$1_0().execute($v_0);
    },

    retrievePersonalSiteUrl: function() {
        var $v_0 = new Xrm.Gen.RetrievePersonalSiteUrlRequest();
        return this.get_$1_0().execute($v_0);
    },

    searchDocument: function(objType, objId, docId) {
        var $v_0 = new Xrm.Gen.SearchDocumentRequest(objType, objId, docId);
        $v_0.regardingObjectType = objType;
        $v_0.regardingObjectId = objId;
        $v_0.documentId = docId;
        return this.get_$1_0().execute($v_0);
    },

    addOrEditLocation: function(locationName,
        absUrl,
        regardingObjectId,
        relativePath,
        regardingObjType,
        parentType,
        parentId,
        isAddOrEditMode,
        isCreateFolder,
        documentId) {
        var $v_0 = new Xrm.Gen.AddOrEditLocationRequest(locationName,
            absUrl,
            regardingObjectId,
            relativePath,
            regardingObjType,
            parentType,
            parentId,
            isAddOrEditMode,
            isCreateFolder,
            documentId);
        $v_0.locationName = locationName;
        $v_0.absUrl = absUrl;
        $v_0.regardingObjectId = regardingObjectId;
        $v_0.relativePath = relativePath;
        $v_0.regardingObjType = regardingObjType;
        $v_0.parentType = parentType;
        $v_0.parentId = parentId;
        $v_0.isAddOrEditMode = isAddOrEditMode;
        $v_0.isCreateFolder = isCreateFolder;
        $v_0.documentId = documentId;
        return this.get_$1_0().execute($v_0);
    },

    fetchSiteUrl: function(documentId, regardingObjectId, regardingObjType) {
        var $v_0 = new Xrm.Gen.FetchSiteUrlRequest(documentId, regardingObjectId, regardingObjType);
        $v_0.documentId = documentId;
        return this.get_$1_0().execute($v_0);
    },

    createDocumentLibraries: function(documentLibraryNames, url) {
        var $v_0 = new Xrm.Gen.CreateDocumentLibrariesRequest(documentLibraryNames, url);
        $v_0.documentLibraryNames = documentLibraryNames;
        $v_0.url = url;
        return this.get_$1_0().execute($v_0);
    },

    updateDocumentManagementSettings: function(siteCollection,
        folderStructureEntity,
        entityDocManagementXml,
        validateStatus,
        validateStatusReason) {
        var $v_0 = new Xrm.Gen
            .UpdateDocumentManagementSettingsRequest(siteCollection,
                folderStructureEntity,
                entityDocManagementXml,
                validateStatus,
                validateStatusReason);
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
        var $v_0 = new Xrm.Gen
            .UpdateGlobalSharePointSettingsRequest(sharePointRealm, isSharePointOnline, useAuthorizationServer);
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
        var $v_0 = new Xrm.Gen
            .FullTextSearchKnowledgeArticleRequest(searchText,
                useInflection,
                removeDuplicates,
                stateCode,
                queryExpression);
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
            $v_0[$v_2] = new Xrm.Gen.RemoveFromQueueRequest(new Microsoft.Crm.Client.Core.Framework
                .Guid(queueItemIds[$v_2]));
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },

    releaseMultipleToQueue: function(queueItemIds) {
        var $v_0 = new Array(queueItemIds.length);
        for (var $v_2 = 0; $v_2 < queueItemIds.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.ReleaseToQueueRequest(new Microsoft.Crm.Client.Core.Framework
                .Guid(queueItemIds[$v_2]));
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },

    addMultipleToQueue: function(targets, sourceQueueId, destinationQueueId, queueItemProperties) {
        var $v_0 = new Array(targets.length);
        for (var $v_2 = 0; $v_2 < targets.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Sdk.AddToQueueRequest(targets[$v_2],
                sourceQueueId,
                destinationQueueId,
                queueItemProperties);
        }
        var $v_1 = new Xrm.Gen.ExecuteMultipleRequest($v_0, new Xrm.Gen.ExecuteMultipleSettings(true, true));
        return this.get_$1_0().execute($v_1);
    },

    executeWorkFlowMultiple: function(records, workflowId, inputArguments) {
        var $v_0 = new Array(records.length);
        for (var $v_2 = 0; $v_2 < records.length; $v_2++) {
            $v_0[$v_2] = new Xrm.Gen.ExecuteWorkflowRequest(new Microsoft.Crm.Client.Core.Framework.Guid(records[$v_2]),
                workflowId,
                inputArguments);
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

    bulkDeleteImportedRecords: function(targetEntityName,
        importSequenceNumber,
        importId,
        deleteImportHistory,
        jobName,
        sendEmailNotification,
        toRecipients,
        ccRecipients,
        recurrencePattern,
        sourceImportId) {
        var $v_0 = new Xrm.Gen
            .BulkDeleteImportedRecordsRequest(targetEntityName,
                importSequenceNumber,
                importId,
                deleteImportHistory,
                jobName,
                sendEmailNotification,
                toRecipients,
                ccRecipients,
                recurrencePattern,
                sourceImportId);
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

    winQuoteAndCreateOrder: function(quoteId,
        columnSet,
        quoteCloseDate,
        status,
        quoteCloseSubject,
        quoteCloseDescription) {
        var $v_0 = new Xrm.Gen.ConvertQuoteToSalesOrderRequest(quoteId, columnSet);
        $v_0.quoteCloseDate = quoteCloseDate;
        $v_0.quoteCloseStatus = status;
        $v_0.quoteCloseSubject = quoteCloseSubject;
        $v_0.quoteCloseDescription = quoteCloseDescription;
        $v_0.processInstanceId = this.$Q_0();
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
        var $v_0 = new Xrm.Gen
            .IntersectRecordsWithQueueAndAggregateRequest(queueId,
                viewId,
                visualizationId,
                interactionCentricFilterXml);
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

    $Q_0: function() {
        if (_Script.isNullOrUndefined(Xrm.Page.data) ||
            _Script.isNullOrUndefined(Xrm.Page.data.process) ||
            _Script.isNullOrUndefined(Xrm.Page.data.process.getActiveProcess()) ||
            Microsoft.Crm.Client.Core.Framework._String
            .isNullOrWhiteSpace(Xrm.Page.data.process.getActiveProcess().getInstanceId())) {
            return null;
        }
        var $v_0 = new Microsoft.Crm.Client.Core.Framework
            .Guid(Xrm.Page.data.process.getActiveProcess().getInstanceId());
        var $v_1 = new Xrm.Objects.EntityReference('businessprocessflowinstance', $v_0);
        return $v_1;
    },

    copySharePointDocuments: function(destinationLocation, absoluteUrls, relativeUrls, source) {
        var $v_0 = new Xrm.Gen.CopySharePointDocumentsRequest(destinationLocation, absoluteUrls, relativeUrls, source);
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

    getRIProvisioningStatus: function() {
        var $v_0 = new Xrm.Gen.GetRIProvisioningStatusRequest();
        return this.get_$1_0().execute($v_0);
    },

    getRITenantEndpointUrl: function() {
        var $v_0 = new Xrm.Gen.GetRITenantEndpointUrlRequest();
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
        var $v_0 = new Xrm.Gen
            .GetEmailLinkTrackingUrlsRequest(trackingId, conversationTrackingId, clientType, emailLinkUrls);
        return this.get_$1_0().execute($v_0);
    },

    logExternalResultsClicked: function(source) {
        var $v_0 = new Xrm.Gen.LogExternalResultsClickedRequest(source);
        return this.get_$1_0().execute($v_0);
    }
}


Xrm.XrmServiceDirectory = function() {
    this.$6_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1
        .$$(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)))();
}
Xrm.XrmServiceDirectory.getKey = function($p0) {
    return $p0.getName();
}
Xrm.XrmServiceDirectory.prototype = {
    $5_0: null,
    $7_0: false,

    register: function(TService, implementation) {
        if (this.$7_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        if (!_Script.isNullOrUndefined(this.$6_0.get_item($v_0))) {
            if (this.$6_0.get_item($v_0).contains(implementation)) {
                var $v_1 = String.format('Service {0} already has an implementation', $v_0);
                throw Error.invalidOperation($v_1);
            }
        }
        if (_Script.isNullOrUndefined(this.$6_0.get_item($v_0))) {
            this.$5_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
            this.$5_0.add(implementation);
            this.$6_0.set_item($v_0, this.$5_0);
        } else {
            this.$5_0 = this.$6_0.get_item($v_0);
            this.$5_0.add(implementation);
        }
        Xrm.Internal.trace.logT(Xrm.XrmServiceDirectory,
            'Registered implementation for service {1} of type {0}',
            Object.getType(implementation).getName(),
            $v_0);
    },

    unregister: function(TService, implementation) {
        if (_Script.isNullOrUndefined(implementation)) {
            throw Error.argumentNull('implementation');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        if (this.$7_0) {
            Xrm.Internal.trace.logT(Xrm.XrmServiceDirectory,
                'Unregistering implementation for service {1} of type {0} after dispose',
                Object.getType(implementation).getName(),
                $v_0);
            return;
        }
        var $v_1 = this.$6_0.get_item($v_0);
        if (!$v_1.contains(implementation)) {
            var $v_2 = String.format('This implementation is not registered for service {0}', $v_0);
            throw Error.invalidOperation($v_2);
        }
        $v_1.remove(implementation);
        if (!$v_1.get_Count()) {
            this.$6_0.remove($v_0);
        }
        Xrm.Internal.trace.logT(Xrm.XrmServiceDirectory,
            'Unregistered implementation for service {1} of type {0}',
            Object.getType(implementation).getName(),
            $v_0);
    },

    find: function(TService) {
        if (this.$7_0) {
            throw Error.invalidOperation('Object Disposed');
        }
        var $v_0 = Xrm.XrmServiceDirectory.getKey(TService);
        var $v_1 = this.$6_0.get_item($v_0);
        if (_Script.isNullOrUndefined($v_1)) {
            return null;
        }
        var $v_2 = $v_1.get_item($v_1.get_Count() - 1);
        return (_Script.isNullOrUndefined($v_2)) ? null : $v_2;
    },

    dispose: function() {
        if (this.$7_0) {
            return;
        }
        var $v_0 = this.$6_0.get_keys();
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            Xrm.Internal.trace.warningT(Xrm.XrmServiceDirectory,
                'Service {0} was not unregistered prior to disposal',
                $v_0[$v_1]);
            this.$6_0.remove($v_0[$v_1]);
        }
        this.$7_0 = true;
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
    var $v_0 = String.format.apply(null, [$p1].concat($p2));
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
        var $v_0 = Xrm.XrmTrace.formatMessage.apply(null, [componentName, format].concat(args));
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
        this.log.apply(this, [$v_0, format].concat(args));
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
        this.warning.apply(this, [$v_0, format].concat(args));
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
        var $v_0 = Xrm.XrmTrace.formatMessage.apply(null, [componentName, format].concat(args));
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
        this.error.apply(this, [$v_0, format].concat(args));
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
        var $v_0 = Xrm.XrmTrace.formatMessage.apply(null, [componentName, format].concat(args));
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

    getEntity: function() {
        return this.entity;
    },

    getProcess: function() {
        return this.process;
    },

    getIsDirty: function() {
        if (this.entity.getIsDirty()) {
            return true;
        }
        for (var $$arr_0 = this.entity.relatedEntities.getAll(), $$len_1 = $$arr_0.length, $$idx_2 = 0;
            $$idx_2 < $$len_1;
            ++$$idx_2) {
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
    client: null
}


Xrm.XrmPageContextClient = function() {
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
    $N_2: false,

    get_isHostedInTabbedControl: function() {
        return this.$N_2;
    },

    set_isHostedInTabbedControl: function(value) {
        this.$N_2 = value;
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
        return this.data;
    }
}


Xrm.XrmTaskProcess = function() {
}


Xrm.XrmViewSelector = function() {
}


Xrm.XrmCollection$1 = function(items) {
    this.$3_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(this.$$gta['Xrm.XrmCollection$1']['T']))();
    Xrm.XrmCollection$1.$$(this.$$gta['Xrm.XrmCollection$1']['T']).initializeBase(this);
    if (items) {
        this.$3_1.addRange(items);
    }
}
Xrm.XrmCollection$1.$$ = function(T) {
    var $$cn = 'XrmCollection$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Xrm[$$cn]) {
        var $$ccr = Xrm[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Xrm.XrmCollection$1'] = { 'T': T };
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
        this.$3_1.clear();
    },

    forEach: function(handler) {
        for (var $v_0 = 0; $v_0 < this.$3_1.get_Count(); $v_0++) {
            var $v_1 = this.getByIndex($v_0);
            handler($v_1, $v_0);
        }
    },

    add: function(item) {
        this.$3_1.add(item);
    },

    getFirst: function(filter) {
        for (var $v_0 = 0; $v_0 < this.$3_1.get_Count(); $v_0++) {
            var $v_1 = this.getByIndex($v_0);
            if (filter($v_1, $v_0)) {
                return $v_1;
            }
        }
        return ((this.$$gta['Xrm.XrmCollection$1']['T'] === Number ||
                Type.isEnum(this.$$gta['Xrm.XrmCollection$1']['T']))
            ? 0
            : (this.$$gta['Xrm.XrmCollection$1']['T'] === Boolean) ? false : null);
    },

    getLength: function() {
        return this.$3_1.get_Count();
    },

    remove: function(item) {
        this.$3_1.remove(item);
    },

    getAll: function() {
        return this.$3_1.toArray();
    },

    getByName: function(name) {
        for (var $v_0 = 0; $v_0 < this.$3_1.get_Count(); $v_0++) {
            if ((this.$3_1.get_item($v_0)).getKey() === name) {
                return this.getByIndex($v_0);
            }
        }
        return ((this.$$gta['Xrm.XrmCollection$1']['T'] === Number ||
                Type.isEnum(this.$$gta['Xrm.XrmCollection$1']['T']))
            ? 0
            : (this.$$gta['Xrm.XrmCollection$1']['T'] === Boolean) ? false : null);
    },

    getByIndex: function(position) {
        return this.$3_1.get_item(position);
    },

    getByFilter: function(filter) {
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < this.$3_1.get_Count(); $v_1++) {
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
            (this.$$gta = this.$$gta || {})['Xrm.XrmCollectionBase$1'] = { 'T': T };
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
    this.$3_1 = {};
    Xrm.XrmCollectionDictionary$1.$$(this.$$gta['Xrm.XrmCollectionDictionary$1']['T']).initializeBase(this);
}
Xrm.XrmCollectionDictionary$1.$$ = function(T) {
    var $$cn = 'XrmCollectionDictionary$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Xrm[$$cn]) {
        var $$ccr = Xrm[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Xrm.XrmCollectionDictionary$1'] = { 'T': T };
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
        var $$dict_1 = this.$3_1;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            delete this.$3_1[$v_0.key];
        }
    },

    forEach: function(handler) {
        var $v_0 = 0;
        var $$dict_4 = this.$3_1;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
            var $v_2 = $v_1.value;
            handler($v_2, $v_0++);
        }
    },

    add: function(key, item) {
        this.$3_1[key] = item;
    },

    getFirst: function(filter) {
        var $v_0 = 0;
        var $$dict_4 = this.$3_1;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
            var $v_2 = $v_1.value;
            if (filter($v_2, $v_0++)) {
                return $v_2;
            }
        }
        return ((this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Number ||
                Type.isEnum(this.$$gta['Xrm.XrmCollectionDictionary$1']['T']))
            ? 0
            : (this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Boolean) ? false : null);
    },

    getLength: function() {
        var $v_0 = 0;
        var $$dict_2 = this.$3_1;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0++;
        }
        return $v_0;
    },

    remove: function(item) {
        var $$dict_2 = this.$3_1;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if ($v_0.value === item) {
                delete this.$3_1[$v_0.key];
                return;
            }
        }
    },

    getAll: function() {
        var $v_0 = [];
        var $$dict_2 = this.$3_1;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            Array.add($v_0, $v_1.value);
        }
        return $v_0;
    },

    getByName: function(name) {
        return this.$3_1[name];
    },

    getByIndex: function(position) {
        var $v_0 = 0;
        var $v_1 = [];
        var $$dict_4 = this.$3_1;
        for (var $$key_5 in $$dict_4) {
            var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
            if ($v_0++ === position) {
                return $v_2.value;
            }
        }
        return ((this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Number ||
                Type.isEnum(this.$$gta['Xrm.XrmCollectionDictionary$1']['T']))
            ? 0
            : (this.$$gta['Xrm.XrmCollectionDictionary$1']['T'] === Boolean) ? false : null);
    },

    getByFilter: function(filter) {
        var $v_0 = 0;
        var $v_1 = [];
        var $$dict_5 = this.$3_1;
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
    Xrm.XrmControls.initializeBase(this, [items]);
}


Xrm.XrmEntities = function(items) {
    Xrm.XrmEntities.initializeBase(this, [items]);
}


Xrm.XrmEntityAttributes = function(items) {
    Xrm.XrmEntityAttributes.initializeBase(this, [items]);
}
Xrm.XrmEntityAttributes.prototype = {
    get: function(parameter) {
        var $v_0 = Xrm.XrmCollectionBase$1.prototype.get.call(this, parameter);
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) && String.isInstanceOfType(parameter)) {
            $v_0 = this.$V_2(parameter);
        }
        return $v_0;
    },

    $V_2: function($p0) {
        var $v_0 = typeof ProcessControl !== 'undefined' &&
            typeof ProcessControl.ClientApi !== 'undefined' &&
            typeof ProcessControl.ClientApi.LightWeightAttributeManager !== 'undefined';
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
    Xrm.XrmFormSelectorItems.initializeBase(this, [items]);
}


Xrm.XrmNavigationItems = function(items) {
    Xrm.XrmNavigationItems.initializeBase(this, [items]);
}


Xrm.XrmGridRows = function(items) {
    Xrm.XrmGridRows.initializeBase(this, [items]);
}


Xrm.XrmRelatedEntities = function() {
    Xrm.XrmRelatedEntities.initializeBase(this);
}


Xrm.XrmTabs = function(items) {
    Xrm.XrmTabs.initializeBase(this, [items]);
}


Xrm.XrmTabNavigators = function(items) {
    Xrm.XrmTabNavigators.initializeBase(this, [items]);
}


Xrm.XrmTabSections = function(items) {
    Xrm.XrmTabSections.initializeBase(this, [items]);
}


Xrm.XrmQuickForms = function(items) {
    Xrm.XrmQuickForms.initializeBase(this, [items]);
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


Xrm.DataLoadEventArgs = function() {
    Xrm.DataLoadEventArgs.initializeBase(this);
}


Xrm.ErrorResponse = function(errorCode, message, debugMessage) {
    this.errorCode = errorCode;
    this.message = message;
    this.debugMessage = debugMessage;
}
Xrm.ErrorResponse.prototype = {
    errorCode: 0,
    message: null,
    debugMessage: null
}


Xrm.ExecutionContext = function(eventSource, context, depth, eventArgs, executionContext, formContext) {
    this.$L_0 = eventSource;
    this.$J_0 = depth;
    this.$I_0 = context;
    this.$K_0 = eventArgs;
    this.$M_0 = formContext;
    if (executionContext && executionContext.$A_0) {
        this.$A_0 = executionContext.$A_0;
    } else {
        this.$A_0 = {};
    }
}
Xrm.ExecutionContext.prototype = {
    $K_0: null,
    $L_0: null,
    $M_0: null,
    $J_0: 0,
    $I_0: null,
    $A_0: null,

    getContext: function() {
        return this.$I_0;
    },

    getDepth: function() {
        return this.$J_0;
    },

    getEventArgs: function() {
        return this.$K_0;
    },

    getEventSource: function() {
        return this.$L_0;
    },

    getFormContext: function() {
        return this.$M_0;
    },

    getSharedVariable: function(key) {
        return this.$A_0[key];
    },

    setSharedVariable: function(key, value) {
        this.$A_0[key] = value;
    }
}


Xrm.MetricsStopwatch = function() {
}
Xrm.MetricsStopwatch.prototype = {
    $9_0: null,

    get_properties: function() {
        return this.$9_0;
    },

    set_properties: function(value) {
        this.$9_0 = value;
        return value;
    }
}


Xrm.OfflineErrorResponse = function(errorCode, message, debugMessage) {
    Xrm.OfflineErrorResponse.initializeBase(this, [errorCode, message, debugMessage]);
}


Xrm.ProcessActionSuccessResponse = function() {
    this.$O_0 = {};
}
Xrm.ProcessActionSuccessResponse.prototype = {
    get_outputParameters: function() {
        return this.$O_0;
    },

    set_outputParameters: function(value) {
        this.$O_0 = value;
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
    Xrm.SaveErrorResponse.initializeBase(this, [errorCode, message, debugMessage]);
}


Xrm.SaveEventArgs = function() {
    Xrm.SaveEventArgs.initializeBase(this);
}


Xrm.SaveSuccessResponse = function() {
}
Xrm.SaveSuccessResponse.prototype = {
    savedEntityReference: null
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


Xrm.Internal = function() {
}
Xrm.Internal.$$cctor = function() {
    Xrm.JavaScriptConsoleTraceListener.initialize(Xrm.Internal.trace);
    Xrm.Internal.$B = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
}
Xrm.Internal.get_onXrmReadyHandlers = function() {
    if (!Xrm.Internal.$B) {
        Xrm.Internal.$B = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
    }
    return Xrm.Internal.$B;
}
Xrm.Internal.set_onXrmReadyHandlers = function(value) {
    Xrm.Internal.$B = value;
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
Xrm.Internal.associateObjects = function(objectTypeCode,
    parentId,
    type,
    lookupItems,
    roleStatus,
    itemType,
    associationName,
    showErrorDialog) {
    Xrm.Internal.$2.associateObjects(objectTypeCode,
        parentId,
        type,
        lookupItems,
        roleStatus,
        itemType,
        associationName,
        showErrorDialog);
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
Xrm.Internal.reportToWatson = function(message,
    url,
    line,
    sendReportToWatson,
    caller,
    exceptionNumber,
    reportFunctionBody) {
    Xrm.Internal.$2.reportToWatson(message, url, line, sendReportToWatson, caller, exceptionNumber, reportFunctionBody);
}
Xrm.Internal.openUrl = function(url, options) {
    Xrm.Internal.$2.openUrl(url, options);
}
Xrm.Internal.lookupObjects = function(lookupOptions, callback, lookupField) {
    Xrm.Internal.$2.lookupObjects(lookupOptions, callback, lookupField);
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
Xrm.Internal.generateDocumentTemplateFlyout = function(commandProperties,
    entityLogicalName,
    ribbonContextType,
    relationshipType) {
    Xrm.Internal.$2.generateDocumentTemplateFlyout(commandProperties,
        entityLogicalName,
        ribbonContextType,
        relationshipType);
}
Xrm.Internal.generateWordTemplateFlyout = function(commandProperties,
    entityLogicalName,
    isForm,
    ribbonContextType,
    relationshipType) {
    Xrm.Internal.$2.generateWordTemplateFlyout(commandProperties,
        entityLogicalName,
        isForm,
        ribbonContextType,
        relationshipType);
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
Xrm.Internal.generateReportMenuXml = function(commandProperties,
    entityLogicalName,
    isForm,
    ribbonContextType,
    relationshipType) {
    Xrm.Internal.$2.generateReportMenuXml(commandProperties,
        entityLogicalName,
        isForm,
        ribbonContextType,
        relationshipType);
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


Xrm.Mobile = function() {
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
Xrm.Utility.deleteRecord = function(entityName, entityId) {
    return Xrm.Utility.$2.deleteRecord(entityName, entityId);
}
Xrm.Utility
    .executeNonCudCommand = function(cmdName, entityLogicalName, request, successCallback, actionFailedCallback) {
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


Xrm.Panel = function() {
}
Xrm.Panel.setInstance = function(instance) {
    Xrm.Panel.$2 = instance;
}
Xrm.Panel.loadPanel = function(url, title) {
    Xrm.Panel.$2.loadPanel(url, title);
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
    $H_0: null,
    $9_0: null,

    get_pageName: function() {
        return this.$H_0;
    },

    set_pageName: function(value) {
        this.$H_0 = value;
        return value;
    },

    get_additionalProperties: function() {
        return this.$9_0;
    },

    set_additionalProperties: function(value) {
        this.$9_0 = value;
        return value;
    },

    getName: function() {
        return this.$H_0;
    },

    getProperties: function() {
        return this.$9_0;
    }
}


XrmUI.XrmUIControls = function(items) {
    XrmUI.XrmUIControls.initializeBase(this, [items]);
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
    XrmUI.Manager.$D = instance;
}
XrmUI.Manager.loadScripts = function(files, callback) {
    XrmUI.Manager.$D.loadScripts(files, callback);
}
XrmUI.Manager.getTopZIndex = function() {
    return XrmUI.Manager.$D.getTopZIndex();
}
XrmUI.Manager.isPageLoaded = function() {
    return XrmUI.Manager.$D.isPageLoaded();
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
Xrm.Interfaces.Services.IMostRecentlyViewedService
    .registerInterface('Xrm.Interfaces.Services.IMostRecentlyViewedService');


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
    ($$t_3 = Xrm.Internal.trace).log.apply($$t_3, [Object.getType(component).getName(), format].concat(args));
}
Xrm.Tracing.XrmTraceHelper.traceWarning = function(component, format) {
    var args = [];
    for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
        args[$$pai_4 - 2] = arguments[$$pai_4];
    }
    var $$t_3;
    ($$t_3 = Xrm.Internal.trace).warning.apply($$t_3, [Object.getType(component).getName(), format].concat(args));
}
Xrm.Tracing.XrmTraceHelper.traceError = function(component, format) {
    var args = [];
    for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
        args[$$pai_4 - 2] = arguments[$$pai_4];
    }
    var $$t_3;
    ($$t_3 = Xrm.Internal.trace).error.apply($$t_3, [Object.getType(component).getName(), format].concat(args));
}


Mscrm.Notification.registerClass('Mscrm.Notification');
Mscrm.NotificationSeverity.registerClass('Mscrm.NotificationSeverity');
Mscrm.NotificationSource.registerClass('Mscrm.NotificationSource');
Mscrm.InternalUtilities.ClientApiUtility.registerClass('Mscrm.InternalUtilities.ClientApiUtility');
Xrm.AlertDialogStrings.registerClass('Xrm.AlertDialogStrings');
Xrm.ConfirmDialogStrings.registerClass('Xrm.ConfirmDialogStrings');
Xrm.XrmEntityRelationship.registerClass('Xrm.XrmEntityRelationship');
Xrm.DialogOptions.registerClass('Xrm.DialogOptions');
Xrm.FormDataAttributePrivilege.registerClass('Xrm.FormDataAttributePrivilege');
Xrm.LookupObject.registerClass('Xrm.LookupObject');
Xrm.LookupOptions.registerClass('Xrm.LookupOptions');
Xrm.OptionSetItem.registerClass('Xrm.OptionSetItem');
Xrm.RelationshipReference.registerClass('Xrm.RelationshipReference');
Xrm.SaveOptions.registerClass('Xrm.SaveOptions');
Xrm.ActionCollectionBase.registerClass('Xrm.ActionCollectionBase');
Xrm.BusinessRuleNotificationBase.registerClass('Xrm.BusinessRuleNotificationBase');
Xrm.XrmControlBase.registerClass('Xrm.XrmControlBase', null, Xrm.IXrmCollectionItem);
Xrm.XrmControl.registerClass('Xrm.XrmControl', Xrm.XrmControlBase);
Xrm.XrmControlEmailEngagementActionsControl
    .registerClass('Xrm.XrmControlEmailEngagementActionsControl', Xrm.XrmControl);
Xrm.XrmDataControl.registerClass('Xrm.XrmDataControl', Xrm.XrmControl);
Xrm.XrmControlText.registerClass('Xrm.XrmControlText', Xrm.XrmDataControl);
Xrm.XrmControlGrid.registerClass('Xrm.XrmControlGrid');
Xrm.XrmControlRoutedGrid.registerClass('Xrm.XrmControlRoutedGrid', Xrm.XrmControlGrid);
Xrm.XrmDialog.registerClass('Xrm.XrmDialog');
Xrm.XrmInternal.registerClass('Xrm.XrmInternal');
Xrm.XrmOffline.registerClass('Xrm.XrmOffline');
Xrm.XrmUtility.registerClass('Xrm.XrmUtility');
Xrm.XrmPanel.registerClass('Xrm.XrmPanel');
Xrm.JavaScriptConsoleTraceListener.registerClass('Xrm.JavaScriptConsoleTraceListener',
    null,
    Xrm.Interfaces.IXrmTraceListener);
Xrm.ScopedServiceDirectory.registerClass('Xrm.ScopedServiceDirectory',
    null,
    Xrm.Interfaces.IServiceDirectory,
    Sys.IDisposable);
Xrm.StringBuilderTraceListener.registerClass('Xrm.StringBuilderTraceListener', null, Xrm.Interfaces.IXrmTraceListener);
Xrm.XrmPerformance.registerClass('Xrm.XrmPerformance');
Xrm.XrmSdkMessages.registerClass('Xrm.XrmSdkMessages');
Xrm.XrmServiceDirectory.registerClass('Xrm.XrmServiceDirectory',
    null,
    Xrm.Interfaces.IServiceDirectory,
    Sys.IDisposable);
Xrm.XrmTrace.registerClass('Xrm.XrmTrace', null, Xrm.Interfaces.IXrmTrace);
Xrm.Offline.registerClass('Xrm.Offline');
Xrm.FormNotificationOptions.registerClass('Xrm.FormNotificationOptions');
Xrm.XrmFormData.registerClass('Xrm.XrmFormData');
Xrm.XrmFormUI.registerClass('Xrm.XrmFormUI', null, Sys.IDisposable);
Xrm.XrmGlobalContext.registerClass('Xrm.XrmGlobalContext');
Xrm.XrmPageContextClient.registerClass('Xrm.XrmPageContextClient');
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
Xrm.XrmControlSubGrid.registerClass('Xrm.XrmControlSubGrid',
    Xrm.XrmControl,
    Xrm.Interfaces.IXrmSubGridControl,
    Xrm.Interfaces.IXrmGridControl);
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
Xrm.DataLoadEventArgs.registerClass('Xrm.DataLoadEventArgs', Sys.EventArgs);
Xrm.ErrorResponse.registerClass('Xrm.ErrorResponse');
Xrm.ExecutionContext.registerClass('Xrm.ExecutionContext');
Xrm.MetricsStopwatch.registerClass('Xrm.MetricsStopwatch');
Xrm.OfflineErrorResponse.registerClass('Xrm.OfflineErrorResponse', Xrm.ErrorResponse);
Xrm.ProcessActionSuccessResponse.registerClass('Xrm.ProcessActionSuccessResponse');
Position.registerClass('Position');
Xrm.SaveErrorResponse.registerClass('Xrm.SaveErrorResponse', Xrm.ErrorResponse);
Xrm.SaveEventArgs.registerClass('Xrm.SaveEventArgs', Sys.EventArgs);
Xrm.SaveSuccessResponse.registerClass('Xrm.SaveSuccessResponse');
Xrm.Dialog.registerClass('Xrm.Dialog');
Xrm.Internal.registerClass('Xrm.Internal');
Xrm.Mobile.registerClass('Xrm.Mobile');
Xrm.Page.registerClass('Xrm.Page');
Xrm.Utility.registerClass('Xrm.Utility');
Xrm.Panel.registerClass('Xrm.Panel');
XrmUI.XrmUIBoundingBox.registerClass('XrmUI.XrmUIBoundingBox');
XrmUI.Page.registerClass('XrmUI.Page');
XrmUI.XrmUIControls.registerClass('XrmUI.XrmUIControls', Xrm.XrmCollection$1.$$(XrmUI.IXrmUIControl));
XrmUI.ControlId.registerClass('XrmUI.ControlId');
XrmUI.UIControlType.registerClass('XrmUI.UIControlType');
XrmUI.Manager.registerClass('XrmUI.Manager');
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
Xrm.XrmInternal.$P = null;
Xrm.XrmInternal.defaultMaxSuggestionsCount = 10;
Xrm.JavaScriptConsoleTraceListener.$2 = null;
Xrm.Offline.$2 = null;
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
Xrm.ControlType.subGrid = 'subgrid';
Xrm.ControlType.webResource = 'webresource';
Xrm.ControlType.notes = 'notes';
Xrm.ControlType.navBar = 'navbar';
Xrm.ControlType.navBarItem = 'navbaritem';
Xrm.ControlType.timer = 'timercontrol';
Xrm.ControlType.searchWidget = 'searchwidget';
Xrm.ControlType.quickFormControl = 'quickform';
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
Xrm.Internal.$2 = null;
Xrm.Internal.$B = null;
Xrm.Internal.messages = new Xrm.XrmSdkMessages();
Xrm.Internal.trace = new Xrm.XrmTrace();
Xrm.Internal.$$cctor();
Xrm.Mobile.offline = null;
Xrm.Page.context = null;
Xrm.Page.data = null;
Xrm.Page.grid = null;
Xrm.Page.ui = null;
Xrm.Utility.$2 = null;
Xrm.Panel.$2 = null;
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
XrmUI.Manager.$D = null;
//@ sourceMappingURL=.srcmap