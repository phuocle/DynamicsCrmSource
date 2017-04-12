Type.registerNamespace('Mscrm');

Mscrm.ProcessControlClientApiUserHandler = function() {
    this.$1v_0 = [];
    this.$1r_0 = [];
    this.$1s_0 = [];
}
Mscrm.ProcessControlClientApiUserHandler.get_instance = function() {
    if (!Mscrm.ProcessControlClientApiUserHandler.$3E) {
        Mscrm.ProcessControlClientApiUserHandler.$3E = new Mscrm.ProcessControlClientApiUserHandler();
    }
    return Mscrm.ProcessControlClientApiUserHandler.$3E;
}
Mscrm.ProcessControlClientApiUserHandler.prototype = {
    $3Z_0: false,

    get_setActiveStageInvoked: function() {
        return this.$3Z_0;
    },

    set_setActiveStageInvoked: function(value) {
        this.$3Z_0 = value;
        return value;
    },

    $3K_0: false,

    get_moveNextInvoked: function() {
        return this.$3K_0;
    },

    set_moveNextInvoked: function(value) {
        this.$3K_0 = value;
        return value;
    },

    $3L_0: false,

    get_movePreviousInvoked: function() {
        return this.$3L_0;
    },

    set_movePreviousInvoked: function(value) {
        this.$3L_0 = value;
        return value;
    },

    attachSetActiveStageCallbacks: function(callback) {
        Array.add(this.$1v_0, callback);
    },

    attachMoveNextCallbacks: function(callback) {
        Array.add(this.$1r_0, callback);
    },

    attachMovePreviousCallbacks: function(callback) {
        Array.add(this.$1s_0, callback);
    },

    invokeSetActiveStageClientApiUserHandler: function() {
        if (this.$1v_0 && this.$1v_0.length > 0) {
            var $v_0 = this.$1v_0[0];
            Array.remove(this.$1v_0, $v_0);
            this.$3Z_0 = false;
            var $$t_1 = this;
            window.setTimeout(function() {
                    $v_0(Xrm.ProcessResponse.toString(0));
                },
                0);
        }
    },

    invokeMoveNextClientApiUserHandler: function() {
        if (this.$1r_0 && this.$1r_0.length > 0) {
            var $v_0 = this.$1r_0[0];
            Array.remove(this.$1r_0, $v_0);
            this.$3K_0 = false;
            var $$t_1 = this;
            window.setTimeout(function() {
                    $v_0(Xrm.ProcessResponse.toString(0));
                },
                0);
        }
    },

    invokeMovePreviousClientApiUserHandler: function() {
        if (this.$1s_0 && this.$1s_0.length > 0) {
            var $v_0 = this.$1s_0[0];
            Array.remove(this.$1s_0, $v_0);
            this.$3L_0 = false;
            var $$t_1 = this;
            window.setTimeout(function() {
                    $v_0(Xrm.ProcessResponse.toString(0));
                },
                0);
        }
    },

    unregisterCallbacks: function() {
        Array.clear(this.$1v_0);
        Array.clear(this.$1r_0);
        Array.clear(this.$1s_0);
    }
}


Mscrm.DeferredInlineEditOnDemandInitializerProxy = function() {
}
Mscrm.DeferredInlineEditOnDemandInitializerProxy.completeDeferredInitialization = function() {
    if (!ProcessControl.Services.ProcessControlInitializer.$N) {
        Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
    }
}


Type.registerNamespace('Sales.Common.Framework');

function parseQueryString(windowLocation) {
    if (IsNull(windowLocation) || IsNull(windowLocation.search) || !windowLocation.search.length) {
        return {};
    }
    var $v_0 = windowLocation.search.substr(1);
    return parseQueryStringValue($v_0);
}

function parseHashString(windowLocation) {
    if (IsNull(windowLocation)) {
        return {};
    }
    var $v_0 = Mscrm.CrmCrossBrowser.getHash(windowLocation);
    return parseQueryStringValue($v_0);
}

function parseQueryStringValue(queryStringValue) {
    if (IsNull(queryStringValue) || !queryStringValue.length) {
        return {};
    }
    var $v_0 = {};
    var $v_1 = queryStringValue.split('&');
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2].split('=');
        $v_0[$v_3[0].toLowerCase()] = CrmEncodeDecode.CrmUrlDecode($v_3[1]);
    }
    return $v_0;
}

function createEncodedQueryString(parameters) {
    var $v_0 = '';
    var $$dict_5 = parameters;
    for (var $$key_6 in $$dict_5) {
        var $v_1 = { key: $$key_6, value: $$dict_5[$$key_6] };
        var $v_2 = $v_1.key;
        var $v_3 = CrmEncodeDecode.CrmUrlEncode($v_1.value);
        $v_0 += String.format('{0}={1}&', $v_2, $v_3);
    }
    return $v_0.substr(0, $v_0.length - 1);
}


Type.registerNamespace('Mscrm.TurboForm.Control');

Mscrm.TurboForm.Control.ErrorCode = function() {}
Mscrm.TurboForm.Control.ErrorCode.prototype = {
    serviceIsBusy: -1,
    none: 0,
    exceedsMaxLength: 1,
    greaterThanMaxValue: 2,
    lessThanMinValue: 3,
    exceedsNumberRange: 4,
    exceedsFloatRange: 5,
    exceedsPrecision: 6,
    invalidType: 7,
    invalidNumber: 8,
    emptyControlTitle: 9,
    valueIsRequired: 10,
    invalidEmail: 11,
    invalidDuration: 12,
    saveCanceled: 13,
    entityNotDirty: 14,
    emptyLookupObjectCollection: 15,
    lookupInputNotArray: 16,
    lookupExceedsPermissibleItems: 17,
    lookupInvalidType: 18,
    lookupEntityTypeMissing: 19,
    lookupUnknownItem: 20,
    lookupAmbiguousItem: 21,
    emptyCurrencyLookup: 22,
    invalidCurrency: 23,
    badTypeDuration: 24
}
Mscrm.TurboForm.Control.ErrorCode.registerEnum('Mscrm.TurboForm.Control.ErrorCode', false);


Type.registerNamespace('Mscrm.ProcessControlShared.ObjectModels');

Mscrm.ProcessControlShared.ObjectModels.ConditionOperator = function() {}
Mscrm.ProcessControlShared.ObjectModels.ConditionOperator.prototype = {
    nullOperator: 12,
    notNullOperator: 13
}
Mscrm.ProcessControlShared.ObjectModels.ConditionOperator
    .registerEnum('Mscrm.ProcessControlShared.ObjectModels.ConditionOperator', false);


Mscrm.ProcessControlShared.ObjectModels.IPathAndStageInfo = function() {}
Mscrm.ProcessControlShared.ObjectModels.IPathAndStageInfo
    .registerInterface('Mscrm.ProcessControlShared.ObjectModels.IPathAndStageInfo');


Mscrm.ProcessControlShared.ObjectModels.ITraversedPath = function() {}
Mscrm.ProcessControlShared.ObjectModels.ITraversedPath
    .registerInterface('Mscrm.ProcessControlShared.ObjectModels.ITraversedPath');


Mscrm.ProcessControlShared.ObjectModels.AttributeValue = function() {
}
Mscrm.ProcessControlShared.ObjectModels.AttributeValue.prototype = {
    value: null,
    raw: null
}


Mscrm.ProcessControlShared.ObjectModels.BusinessProcessInstance = function() {
}
Mscrm.ProcessControlShared.ObjectModels.BusinessProcessInstance.prototype = {
    ProcessInstanceID: null,
    ProcessInstanceName: null,
    ProcessDefintionID: null,
    ProcessDefintionName: null,
    StatusCodeName: null,
    CreatedOn: null
}


Mscrm.ProcessControlShared.ObjectModels.ControlStages = function() {
}
Mscrm.ProcessControlShared.ObjectModels.ControlStages.prototype = {
    stages: null,
    previousConditions: null,
    nextConditions: null
}


Mscrm.ProcessControlShared.ObjectModels.NavigationSource = function() {
}
Mscrm.ProcessControlShared.ObjectModels.NavigationSource.prototype = {
    $1X_0: null,
    $1F_0: null,
    $W_0: null,
    $1b_0: null,
    $Y_0: null,

    get_activeStageId: function() {
        return this.$1X_0;
    },

    set_activeStageId: function(value) {
        this.$1X_0 = value;
        return value;
    },

    get_entity: function() {
        return this.$1F_0;
    },

    set_entity: function(value) {
        this.$1F_0 = value;
        return value;
    },

    get_processId: function() {
        return this.$W_0;
    },

    set_processId: function(value) {
        this.$W_0 = value;
        return value;
    },

    get_processInstanceId: function() {
        return this.$1b_0;
    },

    set_processInstanceId: function(value) {
        this.$1b_0 = value;
        return value;
    },

    get_traversedPath: function() {
        return this.$Y_0;
    },

    set_traversedPath: function(value) {
        this.$Y_0 = value;
        return value;
    }
}


Mscrm.ProcessControlShared.ObjectModels.TraversedPath = function(path) {
    this.set_path(path);
}
Mscrm.ProcessControlShared.ObjectModels.TraversedPath.isInDefaultActivePath = function(activePath, stageId) {
    var $v_0 = Mscrm.ProcessControlShared.ObjectModels.TraversedPath.getCandidateTraversedPath(activePath, stageId);
    if ($v_0) {
        return true;
    }
    return false;
}
Mscrm.ProcessControlShared.ObjectModels.TraversedPath.getCandidateTraversedPath = function(activePath, stageId) {
    stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageId);
    var $v_0 = false;
    if (!activePath || !activePath.length) {
        return null;
    }
    var $v_1 = new Sys.StringBuilder();
    for (var $v_2 = 0; $v_2 < activePath.length; $v_2++) {
        $v_1.append(activePath[$v_2]);
        if (activePath[$v_2] === stageId) {
            $v_0 = true;
            break;
        }
    }
    if ($v_0) {
        return $v_1.toString(',');
    }
    return null;
}
Mscrm.ProcessControlShared.ObjectModels.TraversedPath
    .getCandidateTraversedPathFromStagStep = function(stages, stageId) {
        stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageId);
        var $v_0 = false;
        if (!stages || !stages.length) {
            return null;
        }
        var $v_1 = new Sys.StringBuilder();
        for (var $v_2 = 0; $v_2 < stages.length; $v_2++) {
            var $v_3 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm((stages[$v_2]).get_stageId());
            $v_1.append($v_3);
            if (stageId === $v_3) {
                $v_0 = true;
                break;
            }
        }
        if ($v_0) {
            return $v_1.toString(',');
        }
        return null;
    }
Mscrm.ProcessControlShared.ObjectModels.TraversedPath.getPathDifference = function(newPath, oldPath) {
    var $v_0 = newPath.get_path().split(',');
    var $v_1 = oldPath.get_path().split(',');
    for (var $$arr_4 = $v_0, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_2 = $$arr_4[$$idx_6];
        Array.remove($v_1, $v_2);
    }
    return new Mscrm.ProcessControlShared.ObjectModels.TraversedPath($v_1.join(','));
}
Mscrm.ProcessControlShared.ObjectModels.TraversedPath.prototype = {
    get_path: function() {
        return this.$15_0;
    },

    set_path: function(value) {
        this.$15_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(value);
        while (this.$15_0 && this.$15_0.indexOf('{') > 0) {
            this.$15_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(this.$15_0);
        }
        return value;
    },

    equals: function(traversedPath) {
        if (this.$15_0 === traversedPath.get_path()) {
            return true;
        }
        return false;
    },

    isInTraversedPath: function(stageId) {
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(stageId) &&
            !Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.$15_0)) {
            if (this.$15_0.indexOf(Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageId)) > -1) {
                return true;
            }
        }
        return false;
    },

    $15_0: null
}


Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo = function(traversedPath, stage) {
    this.$3e_0 = traversedPath;
    this.$1z_0 = stage;
}
Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo.prototype = {
    get_traversedPath: function() {
        return this.$3e_0;
    },

    set_traversedPath: function(value) {
        this.$3e_0 = value;
        return value;
    },

    get_stage: function() {
        return this.$1z_0;
    },

    set_stage: function(value) {
        this.$1z_0 = value;
        return value;
    },

    $3e_0: null,
    $1z_0: null
}


Mscrm.ProcessControlShared.ObjectModels.EntityLink = function() {
}
Mscrm.ProcessControlShared.ObjectModels.EntityLink.prototype = {
    targetEntityLogicalName: null,
    linkAttributeName: null
}


Mscrm.ProcessControlShared.ObjectModels.EntityStage = function() {
}
Mscrm.ProcessControlShared.ObjectModels.EntityStage.prototype = {
    currentStage: 0,
    disabled: false,
    entityLogicalName: null,
    entityTypeCode: 0,
    id: null
}


Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData = function() {
}
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.prototype = {
    activeStageId: null,
    businessProcessInstanceId: null,
    processId: null,
    businessProcessInstanceName: null,
    businessProcessState: null,
    businessProcessStatus: null,
    navigationEntities: null,
    traversedPath: null,
    selectedStageId: null,
    activeStageStartedOn: null,
    createdOn: null,
    completedOn: null
}


Mscrm.ProcessControlShared.ObjectModels.NavigationEntity = function() {
}
Mscrm.ProcessControlShared.ObjectModels.NavigationEntity.prototype = {
    Id: null,
    PrimaryField: null,
    EntityTypeCode: 0,
    EntityLogicalName: null,
    PrimaryKeyName: null
}


Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData = function() {
}
Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData.prototype = {
    EntityDisplayName: null,
    EntityLogicalName: null,
    EntityTypeCode: 0,
    ShowCreate: false,
    NavigationEntities: null,
    Success: false
}


Mscrm.ProcessControlShared.ObjectModels.ProcessControlDataJsonWrapper = function() {
}
Mscrm.ProcessControlShared.ObjectModels.ProcessControlDataJsonWrapper.prototype = {
    _processStages: null,
    _globalNavigationData: null,
    _processControlStrings: null,
    _processId: null,
    _warning: null,
    _warningCode: 0
}


Mscrm.ProcessControlShared.ObjectModels.Stage = function() {
}
Mscrm.ProcessControlShared.ObjectModels.Stage.prototype = {
    stageName: null,
    entityLogicalName: null,
    entityDisplayName: null,

    get_completed: function() {
        return this.$1_0.isCompleted(this.$1P_0);
    },

    stepCount: 0,
    stageIndex: 0,

    get_advance: function() {
        return this.$1_0.canAdvance(this.$1P_0);
    },

    get_back: function() {
        return this.$1_0.canGoBack(this.$1P_0);
    },

    get_navigate: function() {
        return this.$1_0.canNavigate(this.$1P_0);
    },

    get_setActive: function() {
        return this.$1_0.canSetActive(this.$1P_0);
    },

    completedSteps: null,
    currentStageValue: null,

    get_edit: function() {
        return this.$1_0.isEditable(this.$1P_0);
    },

    controlsAreInitialized: false,
    $1P_0: null,
    $1_0: null,

    get_active: function() {
        return this.$1_0.isActive(this);
    },

    get_localActive: function() {
        return this.$1_0.isLocalActive(this);
    },

    isVisible: false,

    $7A_0: function($p0, $p1, $p2, $p3) {
        this.$1P_0 = $p1;
        this.$1_0 = $p0;
        this.currentStageValue = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($p1.get_stageId());
        this.stageIndex = $p3;
        this.entityDisplayName = $p2.get_Name();
        this.entityLogicalName = $p2.get_EntityLogicalName();
        this.completedSteps = new Array($p1.get_Steps().get_Count());
        this.stageName = $p1.get_stageName();
        this.stepCount = $p1.get_Steps().get_Count();
        this.isVisible = true;
    }
}


Mscrm.ProcessControlShared.ObjectModels.StageCondition = function() {
}
Mscrm.ProcessControlShared.ObjectModels.StageCondition.prototype = {
    enabled: false,
    entity: null,
    attribute: null,
    operator: 0
}


Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings = function() {
}
Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings.prototype = {
    locked: null,
    completed: null,
    inProgress: null,
    error: null,
    advance: null,
    back: null,
    setActive: null,
    slider: null,
    entity: null,
    stage: null,
    status: null,
    active: null,
    noRecords: null,
    available: null,
    selectChild: null,
    untitled: null,
    fillRequiredWarning: null,
    processChangedWarning: null,
    createNew: null,
    finish: null,
    finished: null,
    activeFor: null,
    completedIn: null,
    abortedIn: null,
    lessThanOneMinute: null,
    lessThanOneHour: null,
    lessThanOneDay: null,
    daysWithNoHours: null,
    moreThanOneDay: null,
    minute: null,
    minutes: null,
    hour: null,
    hours: null,
    day: null,
    days: null
}


Type.registerNamespace('Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web');

Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning = function() {}
Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning.prototype = {
    none: 0,
    insufficientPrivilegesToViewProcess: 1,
    processNotAvailable: 2,
    processIsNotActive: 3
}
Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning
    .registerEnum('Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning', false);


Type.registerNamespace('ProcessControl');

ProcessControl.FormDataUtility = function() {
}
ProcessControl.FormDataUtility.getActiveStageValue = function(stages, formData, traversedPath, hasTraversedInfo) {
    hasTraversedInfo.val = false;
    traversedPath.val = new Mscrm.ProcessControlShared.ObjectModels.TraversedPath('');
    var $v_0 = null;
    var $v_1 = formData._entity.TypeName;
    var $v_2 = formData[ProcessControl.Services.AttributeNames.stageId];
    if (IsNull($v_2) || IsNull($v_2['value'])) {
        return null;
    }
    if (!IsNull(formData._processControlDataKey) && !IsNull(formData._processControlDataKey._globalNavigationData)) {
        $v_0 = formData._processControlDataKey._globalNavigationData.selectedStageId;
    }
    var $v_3 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_2['value']);
    var $v_4 = formData[ProcessControl.Services.AttributeNames.traversedPath];
    if (IsNull($v_4) || IsNull($v_4['value'])) {
        traversedPath.val = new Mscrm.ProcessControlShared.ObjectModels
            .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                .getCandidateTraversedPathFromStagStep(stages, $v_3));
    } else {
        traversedPath.val = new Mscrm.ProcessControlShared.ObjectModels.TraversedPath($v_4['value']);
    }
    hasTraversedInfo.val = true;
    var $v_5 = (Mscrm.InternalUtilities._String.isNullOrEmpty($v_0))
        ? ''
        : Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0);
    var $v_6 = '';
    var $v_7 = false;
    var $v_8 = false;
    for (var $v_9 = 0; $v_9 < stages.length && !$v_7; $v_9++) {
        var $v_A = stages[$v_9];
        var $v_B = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_A.get_stageId());
        if ($v_A.get_parent().get_Name().toLowerCase() === $v_1.toLowerCase()) {
            if ($v_B === $v_3) {
                $v_7 = true;
            } else if ($v_B === $v_5) {
                $v_8 = true;
            } else if (traversedPath.val.isInTraversedPath($v_B)) {
                $v_6 = $v_B;
            }
        }
    }
    if ($v_7) {
        return $v_3;
    } else if ($v_8) {
        return $v_5;
    }
    return (Mscrm.InternalUtilities._String.isNullOrEmpty($v_6)) ? $v_3 : $v_6;
}


ProcessControl.StopwatchFactory = function() {
}
ProcessControl.StopwatchFactory.createStopwatch = function(name) {
    if (ProcessControl.Services.ProcessControlInitializer.$N) {
        return new Mscrm.MetricsStopwatch(name);
    } else {
        return new Mscrm.Performance.PerformanceStopwatch(name);
    }
}


Type.registerNamespace('ProcessControl.ClientApi');

ProcessControl.ClientApi.IProcessObjectBuilder = function() {}
ProcessControl.ClientApi.IProcessObjectBuilder.registerInterface('ProcessControl.ClientApi.IProcessObjectBuilder');


ProcessControl.ClientApi.ILightWeightAttributeManager = function() {}
ProcessControl.ClientApi.ILightWeightAttributeManager
    .registerInterface('ProcessControl.ClientApi.ILightWeightAttributeManager');


ProcessControl.ClientApi.ILightWeightAttributeFactory = function() {}
ProcessControl.ClientApi.ILightWeightAttributeFactory
    .registerInterface('ProcessControl.ClientApi.ILightWeightAttributeFactory');


ProcessControl.ClientApi.ILightWeightAttributeWrapper = function() {}
ProcessControl.ClientApi.ILightWeightAttributeWrapper
    .registerInterface('ProcessControl.ClientApi.ILightWeightAttributeWrapper');


ProcessControl.ClientApi.BusinessProcessFlow = function(processId,
    processInstanceId,
    processInstanceName,
    processName,
    state,
    status,
    isRendered,
    processStages) {
    ProcessControl.ClientApi.BusinessProcessFlow.initializeBase(this);
    this.$4Z_1 = processId;
    this.$1b_1 = processInstanceId;
    this.$2E_1 = processName;
    this.$4g_1 = isRendered;
    this.$41_1 = new ProcessControl.ClientApi.BusinessProcessFlow.XrmProcessStages();
    this.$4p_1 = state;
    this.$2J_1 = status;
    this.$4f_1 = processInstanceName;
    for (var $$arr_8 = processStages, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
        var $v_0 = $$arr_8[$$idx_A];
        this.$41_1.add($v_0);
    }
}
ProcessControl.ClientApi.BusinessProcessFlow.prototype = {
    $4Z_1: null,
    $2E_1: null,
    $4g_1: false,
    $41_1: null,
    $1b_1: null,
    $4p_1: 0,
    $2J_1: 0,
    $4f_1: null,

    getId: function() {
        return this.$4Z_1;
    },

    getInstanceId: function() {
        return this.$1b_1;
    },

    getName: function() {
        return this.$2E_1;
    },

    getInstanceName: function() {
        return this.$4f_1;
    },

    getStatus: function() {
        return Xrm.BusinessProcessFlowInstanceStatus.toString(this.$2J_1);
    },

    getStages: function() {
        return this.$41_1;
    },

    getState: function() {
        return Xrm.BusinessProcessFlowInstanceState.toString(this.$4p_1);
    },

    isRendered: function() {
        return this.$4g_1;
    }
}


ProcessControl.ClientApi.BusinessProcessFlow.XrmProcessStages = function() {
    ProcessControl.ClientApi.BusinessProcessFlow.XrmProcessStages.initializeBase(this);
}


ProcessControl.ClientApi.NumberLightWeightAttributeWrapper = function(attributeObject, metadata) {
    ProcessControl.ClientApi.NumberLightWeightAttributeWrapper.initializeBase(this, [attributeObject, metadata]);
}
ProcessControl.ClientApi.NumberLightWeightAttributeWrapper.prototype = {
    getValue: function() {
        if (!IsNull(this._attributeObject['raw'])) {
            return Number.parseInvariant(this._attributeObject['raw'].toString());
        }
        return null;
    }
}


ProcessControl.ClientApi.ProcessStageCategory = function(value) {
    this.$3f_0 = value;
}
ProcessControl.ClientApi.ProcessStageCategory.prototype = {
    $3f_0: 0,

    getValue: function() {
        if (this.$3f_0 === -1) {
            return null;
        }
        return this.$3f_0;
    }
}


ProcessControl.ClientApi.CurrencyLightWeightAttributeWrapper = function(attributeObject, metadata) {
    ProcessControl.ClientApi.CurrencyLightWeightAttributeWrapper.initializeBase(this, [attributeObject, metadata]);
}


ProcessControl.ClientApi.DateTimeLightWeightAttributeWrapper = function($p0, $p1) {
    ProcessControl.ClientApi.DateTimeLightWeightAttributeWrapper.initializeBase(this, [$p0, $p1]);
}
ProcessControl.ClientApi.DateTimeLightWeightAttributeWrapper.prototype = {
    getValue: function() {
        var $v_0 = ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper.prototype.getValue.call(this);
        if (!IsNull($v_0)) {
            return new Date($v_0.toString());
        }
        return null;
    },

    getUtcValue: function() {
        var $v_0 = this.getValue();
        if (IsNull($v_0)) {
            return null;
        }
        var $v_1 = new Date($v_0.toString());
        return Mscrm.DateTimeUtility.getUtcValue($v_1);
    }
}


ProcessControl.ClientApi.ProcessObjectBuilder = function() {
}
ProcessControl.ClientApi.ProcessObjectBuilder.prototype = {
    businessProcessFlowBuilder: function(processId,
        processInstanceId,
        processInstanceName,
        processName,
        state,
        status,
        isRendered,
        processStages) {
        return new ProcessControl.ClientApi
            .BusinessProcessFlow(processId,
                processInstanceId,
                processInstanceName,
                processName,
                state,
                status,
                isRendered,
                processStages);
    },

    businessProcessFlowListBuilder: function(processList) {
        var $v_0 = {};
        for (var $v_1 = 0; $v_1 < processList.get_count(); $v_1++) {
            $v_0[processList.get_item($v_1).get_key()] = processList.get_item($v_1).getValue('name').toString();
        }
        return $v_0;
    },

    processStageBuilder: function(stageStep, stage, stageEntity, stageStatus) {
        var $v_0 = new Array(stageStep.get_Steps().get_Count());
        for (var $v_2 = 0; $v_2 < stageStep.get_Steps().get_Count(); $v_2++) {
            var $v_3 = stageStep.get_Steps().get_item($v_2);
            if (Microsoft.Crm.Workflow.ObjectModel.StepStep.isInstanceOfType($v_3)) {
                $v_0[$v_2] = this.processStepBuilder($v_3);
            }
        }
        var $v_1 = new ProcessControl.ClientApi
            .ProcessStageCategory((!IsNull(stageStep.get_stageCategory()))
                ? Number.parseInvariant(stageStep.get_stageCategory())
                : -1);
        return new ProcessControl.ClientApi.ProcessStage(stageStep.get_stageId(),
            stageStep.get_stageName(),
            $v_1,
            stageEntity,
            stageStatus,
            $v_0);
    },

    processStepBuilder: function(stepStep) {
        var $v_0 = stepStep.get_stepLabels().get_item(0);
        var $v_1 = Microsoft.Crm.Workflow.ObjectModel.ControlStep.getControlStep(stepStep.get_Steps().get_item(0));
        if (!$v_1) {
            return null;
        }
        var $v_2 = $v_1.get_controlId();
        var $v_3 = 0;
        if ($v_1.get_isSystemControl()) {
            $v_3 = 1;
            $v_2 = null;
        }
        return new ProcessControl.ClientApi.ProcessStep($v_0.get_description(),
            $v_3,
            stepStep.get_isProcessRequired(),
            $v_2,
            stepStep.get_stepStepId());
    }
}


ProcessControl.ClientApi.ProcessStage = function(stageId,
    stageName,
    stageCategory,
    stageEntity,
    stageStatus,
    stageSteps) {
    this.$4B_0 = stageId;
    this.$4F_0 = stageName;
    this.$7_0 = stageEntity;
    this.$45_0 = stageCategory;
    this.$4N_0 = Xrm.ProcessStatus.toString(stageStatus);
    this.$3b_0 = new ProcessControl.ClientApi.ProcessStage.XrmProcessSteps();
    for (var $$arr_6 = stageSteps, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
        var $v_0 = $$arr_6[$$idx_8];
        this.$3b_0.add($v_0);
    }
}
ProcessControl.ClientApi.ProcessStage.prototype = {
    $4F_0: null,
    $4B_0: null,
    $7_0: null,
    $4N_0: null,
    $45_0: null,
    $3b_0: null,

    getName: function() {
        return this.$4F_0;
    },

    getId: function() {
        return this.$4B_0;
    },

    getEntityName: function() {
        return this.$7_0;
    },

    getStatus: function() {
        return this.$4N_0;
    },

    getCategory: function() {
        return this.$45_0;
    },

    getSteps: function() {
        return this.$3b_0;
    },

    getKey: function() {
        return null;
    },

    getWrapper: function() {
        return null;
    }
}


ProcessControl.ClientApi.ProcessStage.XrmProcessSteps = function() {
    ProcessControl.ClientApi.ProcessStage.XrmProcessSteps.initializeBase(this);
}


ProcessControl.ClientApi.ProcessStep = function(stepName, stepType, isRequired, attribute, stepStepId) {
    ProcessControl.ClientApi.ProcessStep.initializeBase(this);
    this.$2E_1 = stepName;
    this.$4t_1 = Xrm.StepType.toString(stepType);
    this.$4i_1 = isRequired;
    this.$4O_1 = attribute;
    this.$4q_1 = stepStepId;
}
ProcessControl.ClientApi.ProcessStep.prototype = {
    $4O_1: null,
    $2E_1: null,
    $4i_1: false,
    $4t_1: null,
    $4q_1: null,

    getName: function() {
        return this.$2E_1;
    },

    getStepType: function() {
        return this.$4t_1;
    },

    isRequired: function() {
        return this.$4i_1;
    },

    getAttribute: function() {
        return this.$4O_1;
    },

    getKey: function() {
        return this.$4q_1;
    },

    getWrapper: function() {
        return null;
    }
}


ProcessControl.ClientApi.LightWeightAttributeManager = function() {
    this.$2Q_0 = {};
}
ProcessControl.ClientApi.LightWeightAttributeManager.get_instance = function() {
    if (IsNull(ProcessControl.ClientApi.LightWeightAttributeManager.$35)) {
        ProcessControl.ClientApi.LightWeightAttributeManager.$35 = new ProcessControl.ClientApi
            .LightWeightAttributeManager();
    }
    return ProcessControl.ClientApi.LightWeightAttributeManager.$35;
}
ProcessControl.ClientApi.LightWeightAttributeManager.prototype = {
    $y_0: null,
    $V_0: null,
    $2Q_0: null,
    $2K_0: null,

    get_formData: function() {
        return this.$y_0;
    },

    set_formData: function(value) {
        this.$y_0 = value;
        return value;
    },

    get_entityMetadata: function() {
        return this.$V_0;
    },

    set_entityMetadata: function(value) {
        this.$V_0 = value;
        return value;
    },

    get_attributeFactory: function() {
        if (IsNull(this.$2K_0)) {
            this.$2K_0 = new ProcessControl.ClientApi.LightWeightAttributeFactory(this.$V_0);
        }
        return this.$2K_0;
    },

    set_attributeFactory: function(value) {
        this.$2K_0 = value;
        return value;
    },

    getWrapper: function(attributeName) {
        if (!((attributeName) in this.$2Q_0)) {
            if (IsNull(this.$y_0)) {
                return null;
            }
            var $v_0 = this.$y_0[attributeName];
            if (IsNull($v_0)) {
                var $v_2 = Array.indexOf(this.$y_0._unProcessedAttributes, attributeName);
                if ($v_2 === -1) {
                    return null;
                }
                $v_0 = {};
            }
            var $v_1 = this.get_attributeFactory().getWrapper(attributeName, $v_0);
            this.$2Q_0[attributeName] = $v_1;
        }
        return this.$2Q_0[attributeName];
    }
}


ProcessControl.ClientApi.LightWeightAttributeFactory = function(entityMetadata) {
    this.$V_0 = entityMetadata;
}
ProcessControl.ClientApi.LightWeightAttributeFactory.prototype = {
    $V_0: null,

    getWrapper: function(attributeName, attributeObject) {
        var $v_0 = this.$V_0[attributeName];
        if (!$v_0) {
            return new ProcessControl.ClientApi.EmptyLightWeightAttributeWrapper();
        }
        var $v_1 = null;
        switch ($v_0.AttributeType) {
        case 'bit':
            $v_1 = new ProcessControl.ClientApi.BooleanLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        case 'picklist':
        case 'state':
        case 'status':
            $v_1 = new ProcessControl.ClientApi.OptionSetLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        case 'owner':
        case 'customer':
        case 'lookup':
            $v_1 = new ProcessControl.ClientApi.LookupLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        case 'partylist':
            $v_1 = new ProcessControl.ClientApi.PartyListLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        case 'money':
            $v_1 = new ProcessControl.ClientApi.CurrencyLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        case 'int':
        case 'float':
        case 'decimal':
            $v_1 = new ProcessControl.ClientApi.NumberLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        case 'datetime':
            $v_1 = new ProcessControl.ClientApi.DateTimeLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        default:
            $v_1 = new ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper(attributeObject, this.$V_0);
            break;
        }
        return $v_1;
    }
}


ProcessControl.ClientApi.BooleanLightWeightAttributeWrapper = function(attributeObject, metadata) {
    ProcessControl.ClientApi.BooleanLightWeightAttributeWrapper.initializeBase(this, [attributeObject, metadata]);
}
ProcessControl.ClientApi.BooleanLightWeightAttributeWrapper.prototype = {
    getValue: function() {
        if (IsNull(this._attributeObject['raw'])) {
            return null;
        }
        return (this._attributeObject['raw'].toString() === '1') ? true : false;
    }
}


ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper = function(attributeObject, metadata) {
    this._attributeObject = attributeObject;
    this._metadata = metadata;
    this.controls = new Xrm.XrmControls();
}
ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper.prototype = {
    _attributeObject: null,
    _metadata: null,
    controls: null,

    getValue: function() {
        if (!IsNull(this._attributeObject['value'])) {
            return this._attributeObject['value'];
        }
        return null;
    },

    addOnChange: function(handler) {
    },

    fireOnChange: function() {
    },

    getAttributeType: function() {
        return null;
    },

    getControls: function() {
        return null;
    },

    getFormat: function() {
        return null;
    },

    getIsDirty: function() {
        return false;
    },

    getName: function() {
        return null;
    },

    getParent: function() {
        return null;
    },

    getRequiredLevel: function() {
        return null;
    },

    getSubmitMode: function() {
        return null;
    },

    getUserPrivilege: function() {
        return null;
    },

    removeOnChange: function(handler) {
    },

    setRequiredLevel: function(level) {
    },

    setSubmitMode: function(mode) {
    },

    setValue: function(value, sourceControlId) {
    }
}


ProcessControl.ClientApi.EmptyLightWeightAttributeWrapper = function() {
}
ProcessControl.ClientApi.EmptyLightWeightAttributeWrapper.prototype = {
    getValue: function() {
        return null;
    },

    addOnChange: function(handler) {
    },

    fireOnChange: function() {
    },

    getAttributeType: function() {
        return null;
    },

    getControls: function() {
        return null;
    },

    getFormat: function() {
        return null;
    },

    getIsDirty: function() {
        return false;
    },

    getName: function() {
        return null;
    },

    getParent: function() {
        return null;
    },

    getRequiredLevel: function() {
        return null;
    },

    getSubmitMode: function() {
        return null;
    },

    getUserPrivilege: function() {
        return null;
    },

    removeOnChange: function(handler) {
    },

    setRequiredLevel: function(level) {
    },

    setSubmitMode: function(mode) {
    },

    setValue: function(value, sourceControlId) {
    }
}


ProcessControl.ClientApi.LookupLightWeightAttributeWrapper = function(attributeObject, metadata) {
    ProcessControl.ClientApi.LookupLightWeightAttributeWrapper.initializeBase(this, [attributeObject, metadata]);
}
ProcessControl.ClientApi.LookupLightWeightAttributeWrapper.prototype = {
    getValue: function() {
        if (IsNull(this._attributeObject['oid']) ||
            IsNull(this._attributeObject['otype']) ||
            IsNull(this._attributeObject['otypename']) ||
            IsNull(this._attributeObject['value'])) {
            return null;
        }
        var $v_0 = new LookupControlItem();
        $v_0.id = this._attributeObject['oid'].toString();
        $v_0.type = this._attributeObject['otype'].toString();
        $v_0.typename = this._attributeObject['otypename'].toString();
        $v_0.entityType = $v_0.typename;
        $v_0.name = this._attributeObject['value'].toString();
        var $v_1 = new Array(0);
        Array.add($v_1, $v_0);
        return $v_1;
    }
}


ProcessControl.ClientApi.OptionSetLightWeightAttributeWrapper = function(attributeObject, metadata) {
    ProcessControl.ClientApi.OptionSetLightWeightAttributeWrapper.initializeBase(this, [attributeObject, metadata]);
}
ProcessControl.ClientApi.OptionSetLightWeightAttributeWrapper.prototype = {
    getValue: function() {
        if (!IsNull(this._attributeObject['raw'])) {
            return Number.parseInvariant(this._attributeObject['raw'].toString());
        }
        return null;
    }
}


ProcessControl.ClientApi.PartyListLightWeightAttributeWrapper = function(attributeObject, metadata) {
    ProcessControl.ClientApi.PartyListLightWeightAttributeWrapper.initializeBase(this, [attributeObject, metadata]);
}
ProcessControl.ClientApi.PartyListLightWeightAttributeWrapper.prototype = {
    getValue: function() {
        if (!(('items') in this._attributeObject)) {
            return null;
        }
        var $v_0 = [];
        var $v_1 = this._attributeObject['items'];
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            if (IsNull($v_3) || IsNull($v_3['oid']) || IsNull($v_3['otype']) || IsNull($v_3['otypename'])) {
                continue;
            }
            var $v_4 = new LookupControlItem();
            $v_4.id = $v_3['oid'].toString();
            $v_4.type = $v_3['otype'].toString();
            $v_4.typename = $v_3['otypename'].toString();
            $v_4.name = $v_3['value'].toString();
            $v_0[$v_2] = $v_4;
        }
        if ($v_0.length > 0) {
            return $v_0;
        }
        return null;
    }
}


Type.registerNamespace('ProcessControl.Events');

ProcessControl.Events.ProcessControlEventArgs = function(direction, stage, status) {
    ProcessControl.Events.ProcessControlEventArgs.initializeBase(this);
    this.$4W_2 = direction;
    this.$4m_2 = stage;
    this.$2J_2 = status;
}
ProcessControl.Events.ProcessControlEventArgs.prototype = {
    $4W_2: null,
    $2J_2: null,
    $4m_2: null,

    getDirection: function() {
        return this.$4W_2;
    },

    getStatus: function() {
        return this.$2J_2;
    },

    getStage: function() {
        return this.$4m_2;
    }
}


ProcessControl.Events.NotificationEventArgs = function() {
    ProcessControl.Events.NotificationEventArgs.initializeBase(this);
}
ProcessControl.Events.NotificationEventArgs.prototype = {
    message: null,
    isError: false
}


ProcessControl.Events.TaskCompletionEventArgs = function() {
    ProcessControl.Events.TaskCompletionEventArgs.initializeBase(this);
}
ProcessControl.Events.TaskCompletionEventArgs.prototype = {
    results: null,

    get_isError: function() {
        return !!this.error;
    },

    error: 0,
    errorMessage: null
}


Type.registerNamespace('ProcessControl.Constants');

ProcessControl.Constants.Platform = function() {}
ProcessControl.Constants.Platform.prototype = {
    test: 0,
    refreshForm: 1
}
ProcessControl.Constants.Platform.registerEnum('ProcessControl.Constants.Platform', false);


ProcessControl.Constants.CriticalAttributes = function() {
}
ProcessControl.Constants.CriticalAttributes.isCriticalAttribute = function(attributeName) {
    return (attributeName === ProcessControl.Constants.CriticalAttributes.$5e ||
        attributeName === ProcessControl.Constants.CriticalAttributes.$5f);
}


ProcessControl.Constants.CssClasses = function() {
}


ProcessControl.Constants.CssProperties = function() {
}


ProcessControl.Constants.EventNames = function() {
}


ProcessControl.Constants.HtmlAttributes = function() {
}


ProcessControl.Constants.HtmlTags = function() {
}


ProcessControl.Constants.Platforms = function() {
}


ProcessControl.Constants.StopwatchNames = function() {
}


Type.registerNamespace('ProcessControl.Errors');

ProcessControl.Errors.ErrorCode = function() {}
ProcessControl.Errors.ErrorCode.prototype = {
    none: 0,
    generic: 1,
    advanceStageFailure: 2,
    backStageFailure: 3,
    saveStageFailure: 4,
    finishFailure: 5
}
ProcessControl.Errors.ErrorCode.registerEnum('ProcessControl.Errors.ErrorCode', false);


Type.registerNamespace('ProcessControl.Reflow');

ProcessControl.Reflow.INonTraversedDefaultPathCalculator = function() {}
ProcessControl.Reflow.INonTraversedDefaultPathCalculator
    .registerInterface('ProcessControl.Reflow.INonTraversedDefaultPathCalculator');


ProcessControl.Reflow.IStaticPathToDefaultPathCalculator = function() {}
ProcessControl.Reflow.IStaticPathToDefaultPathCalculator
    .registerInterface('ProcessControl.Reflow.IStaticPathToDefaultPathCalculator');


ProcessControl.Reflow.ITraversedDefaultPathCalculator = function() {}
ProcessControl.Reflow.ITraversedDefaultPathCalculator
    .registerInterface('ProcessControl.Reflow.ITraversedDefaultPathCalculator');


ProcessControl.Reflow.IAfterLoadDefaultPathCalculator = function() {}
ProcessControl.Reflow.IAfterLoadDefaultPathCalculator
    .registerInterface('ProcessControl.Reflow.IAfterLoadDefaultPathCalculator');


ProcessControl.Reflow.IDefaultPathCalculator = function() {}
ProcessControl.Reflow.IDefaultPathCalculator.registerInterface('ProcessControl.Reflow.IDefaultPathCalculator');


ProcessControl.Reflow.ILoadTimeDefaultPathCalculator = function() {}
ProcessControl.Reflow.ILoadTimeDefaultPathCalculator
    .registerInterface('ProcessControl.Reflow.ILoadTimeDefaultPathCalculator');


ProcessControl.Reflow.IRuntimeDefaultPathCalculator = function() {}
ProcessControl.Reflow.IRuntimeDefaultPathCalculator
    .registerInterface('ProcessControl.Reflow.IRuntimeDefaultPathCalculator');


ProcessControl.Reflow.IBusinessRuleStageCommandFactory = function() {}
ProcessControl.Reflow.IBusinessRuleStageCommandFactory
    .registerInterface('ProcessControl.Reflow.IBusinessRuleStageCommandFactory');


ProcessControl.Reflow.IBusinessRuleCaller = function() {}
ProcessControl.Reflow.IBusinessRuleCaller.registerInterface('ProcessControl.Reflow.IBusinessRuleCaller');


ProcessControl.Reflow.ITraversedPathProvider = function() {}
ProcessControl.Reflow.ITraversedPathProvider.registerInterface('ProcessControl.Reflow.ITraversedPathProvider');


ProcessControl.Reflow.IBusinessRuleCommand = function() {}
ProcessControl.Reflow.IBusinessRuleCommand.registerInterface('ProcessControl.Reflow.IBusinessRuleCommand');


ProcessControl.Reflow.IDefaultPathChangeContext = function() {}
ProcessControl.Reflow.IDefaultPathChangeContext.registerInterface('ProcessControl.Reflow.IDefaultPathChangeContext');


ProcessControl.Reflow.IDefaultPathChangeHandler = function() {}
ProcessControl.Reflow.IDefaultPathChangeHandler.registerInterface('ProcessControl.Reflow.IDefaultPathChangeHandler');


ProcessControl.Reflow.IDefaultPathChangeListener = function() {}
ProcessControl.Reflow.IDefaultPathChangeListener.registerInterface('ProcessControl.Reflow.IDefaultPathChangeListener');


ProcessControl.Reflow.IDefaultPathManager = function() {}
ProcessControl.Reflow.IDefaultPathManager.registerInterface('ProcessControl.Reflow.IDefaultPathManager');


ProcessControl.Reflow.ILinkedNode$1 = function() {}
ProcessControl.Reflow.ILinkedNode$1.$$ = function(T) {
    var $$cn = 'ILinkedNode$1' + '$' + T.getName().replace(/\./g, '_');
    if (!ProcessControl.Reflow[$$cn]) {
        var $$ccr = ProcessControl.Reflow[$$cn] = function() {
        };
        $$ccr.registerInterface('ProcessControl.Reflow.' + $$cn);
    }
    return ProcessControl.Reflow[$$cn];
}
ProcessControl.Reflow.ILinkedNode$1.registerInterface('ProcessControl.Reflow.ILinkedNode$1');


ProcessControl.Reflow.IStageLinkedListArray = function() {}
ProcessControl.Reflow.IStageLinkedListArray.registerInterface('ProcessControl.Reflow.IStageLinkedListArray');


ProcessControl.Reflow.IStageLinkedNode = function() {}
ProcessControl.Reflow.IStageLinkedNode.registerInterface('ProcessControl.Reflow.IStageLinkedNode');


ProcessControl.Reflow.NonTraversedDefaultPathCalculator = function(context, listener, defaultPath) {
    this.$b_0 = listener;
    this.$5_0 = context;
    this.$4_0 = defaultPath;
}
ProcessControl.Reflow.NonTraversedDefaultPathCalculator.prototype = {
    calculate: function() {
        var $v_0 = this.get_pathChangeHandler();
        this.$b_0.set_handler($v_0);
        $v_0.triggerSubsequentDefaultPathCalculation(this.$i_0);
    },

    get_defaultPath: function() {
        return this.$4_0;
    },

    get_startingNodeInDefaultPath: function() {
        return this.$i_0;
    },

    set_startingNodeInDefaultPath: function(value) {
        this.$i_0 = value;
        return value;
    },

    get_pathChangeHandler: function() {
        if (!this.$14_0) {
            this.$14_0 = new ProcessControl.Reflow.DefaultPathChangeHandler(this.$5_0, this.$4_0, true);
        }
        return this.$14_0;
    },

    set_pathChangeHandler: function(value) {
        this.$14_0 = value;
        return value;
    },

    $14_0: null,
    $4_0: null,
    $b_0: null,
    $5_0: null,
    $i_0: null
}


ProcessControl.Reflow.BusinessRuleStageCommand = function(context) {
    this.$5_0 = context;
}
ProcessControl.Reflow.BusinessRuleStageCommand.prototype = {
    get_stage: function() {
        return this.$2G_0;
    },

    set_stage: function(value) {
        this.$2G_0 = value;
        return value;
    },

    tryExecute: function() {
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(this.$2G_0.get_stageId());
        var $v_1 = this.$5_0.get_businessProcessFlowVisitor().get_conditionsByParentStageId()[$v_0];
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNull($v_1)) {
            return false;
        }
        this.executeCondition();
        return true;
    },

    get_context: function() {
        return this.$5_0;
    },

    $2G_0: null,
    $5_0: null
}


ProcessControl.Reflow.TraversedDefaultPathCalculator = function(context, defaultPathWithRootNodes) {
    this.$4_0 = defaultPathWithRootNodes;
    this.$5_0 = context;
}
ProcessControl.Reflow.TraversedDefaultPathCalculator.prototype = {
    calculate: function() {
        this.get_staticPathToDefaultPath().calculate();
        this.$4_0 = this.get_staticPathToDefaultPath().get_defaultPath();
    },

    get_traversedPath: function() {
        if (!this.$Y_0) {
            this.$Y_0 = new Array(0);
        }
        return this.$Y_0;
    },

    set_traversedPath: function(value) {
        this.$Y_0 = value;
        return value;
    },

    get_defaultPath: function() {
        return this.$4_0;
    },

    get_lastDefaultNode: function() {
        return this.$2I_0.get_lastEvaluatedNodeInDefaultPath();
    },

    get_staticPathToDefaultPath: function() {
        if (!this.$2I_0) {
            this.$2I_0 = new ProcessControl.Reflow
                .StaticPathToDefaultPathCalculator(this.$5_0, this.$4_0, this.get_traversedPath());
        }
        return this.$2I_0;
    },

    set_staticPathToDefaultPath: function(value) {
        this.$2I_0 = value;
        return value;
    },

    $Y_0: null,
    $4_0: null,
    $2I_0: null,
    $5_0: null
}


ProcessControl.Reflow.AfterLoadDefaultPathCalculator = function(context, listener, initialPath) {
    this.$3q_0 = initialPath;
    this.$b_0 = listener;
    this.$5_0 = context;
}
ProcessControl.Reflow.AfterLoadDefaultPathCalculator.prototype = {
    calculate: function() {
        if (!this.$5_0.get_businessProcessFlowVisitor().get_areConditionsPresent()) {
            this.$4_0 = this.$3q_0;
            return;
        }
        this.$50_0();
        this.$6T_0();
    },

    get_defaultPath: function() {
        return this.$4_0;
    },

    get_startingNodeInDefaultPath: function() {
        return this.$i_0;
    },

    set_startingNodeInDefaultPath: function(value) {
        this.$i_0 = value;
        return value;
    },

    $50_0: function() {
        this.$4_0 = this.$3q_0;
    },

    $6T_0: function() {
        this.get_nonTraversedDefaultPathCalculator().set_startingNodeInDefaultPath(this.$i_0);
        this.get_nonTraversedDefaultPathCalculator().calculate();
    },

    get_nonTraversedDefaultPathCalculator: function() {
        if (!this.$2w_0) {
            this.$2w_0 = new ProcessControl.Reflow.NonTraversedDefaultPathCalculator(this.$5_0, this.$b_0, this.$4_0);
        }
        return this.$2w_0;
    },

    set_nonTraversedDefaultPathCalculator: function(value) {
        this.$2w_0 = value;
        return value;
    },

    $2w_0: null,
    $i_0: null,
    $4_0: null,
    $3q_0: null,
    $b_0: null,
    $5_0: null
}


ProcessControl.Reflow.LoadTimeDefaultPathCalculator = function(context, defaultPath) {
    this.$5_0 = context;
    this.$4_0 = defaultPath;
}
ProcessControl.Reflow.LoadTimeDefaultPathCalculator.prototype = {
    calculate: function() {
        if (!this.$5_0.get_businessProcessFlowVisitor().get_areConditionsPresent()) {
            return;
        }
        this.$50_0();
    },

    get_traversedPath: function() {
        return this.$Y_0;
    },

    set_traversedPath: function(value) {
        this.$Y_0 = value;
        return value;
    },

    get_defaultPath: function() {
        return this.$4_0;
    },

    get_lastCalculatedDefaultNode: function() {
        if (!this.$1x_0) {
            return null;
        }
        return this.$1x_0.get_lastDefaultNode();
    },

    $50_0: function() {
        this.get_traversedDefaultPathCalculator().set_traversedPath(this.$Y_0.split(','));
        this.get_traversedDefaultPathCalculator().calculate();
    },

    get_traversedDefaultPathCalculator: function() {
        if (!this.$1x_0) {
            this.$1x_0 = new ProcessControl.Reflow.TraversedDefaultPathCalculator(this.$5_0, this.$4_0);
        }
        return this.$1x_0;
    },

    set_traversedDefaultPathCalculator: function(value) {
        this.$1x_0 = value;
        return value;
    },

    $4_0: null,
    $1x_0: null,
    $Y_0: null,
    $5_0: null
}


ProcessControl.Reflow.RuntimeDefaultPathCalculator = function(context, listener, defaultPath) {
    this.$4_0 = defaultPath;
    this.$b_0 = listener;
    this.$5_0 = context;
}
ProcessControl.Reflow.RuntimeDefaultPathCalculator.prototype = {
    calculate: function() {
        var $v_0 = this.get_pathChangeHandler();
        this.$b_0.set_handler($v_0);
    },

    get_defaultPath: function() {
        return this.$4_0;
    },

    get_pathChangeHandler: function() {
        if (!this.$14_0) {
            this.$14_0 = new ProcessControl.Reflow.DefaultPathChangeHandler(this.$5_0, this.$4_0, false);
        }
        return this.$14_0;
    },

    set_pathChangeHandler: function(value) {
        this.$14_0 = value;
        return value;
    },

    $14_0: null,
    $4_0: null,
    $b_0: null,
    $5_0: null
}


ProcessControl.Reflow.StaticPathToDefaultPathCalculator = function(context, defaultPath, staticPath) {
    this.$2H_0 = -1;
    this.$4_0 = defaultPath;
    this.$42_0 = staticPath;
    this.$5_0 = context;
}
ProcessControl.Reflow.StaticPathToDefaultPathCalculator.prototype = {
    calculate: function() {
        var $v_0 = this.get_startingNodeInDefaultPath();
        for (var $v_1 = 0; $v_1 < this.$42_0.length; $v_1++) {
            var $v_2 = this.$42_0[$v_1];
            if (!(($v_2) in this.$5_0.get_businessProcessFlowVisitor().get_stagesById())) {
                continue;
            }
            var $v_3 = this.$4_0.find($v_2, true);
            if ($v_3) {
                $v_0 = $v_3;
                continue;
            }
            this.$4_0.addAfter($v_0, new ProcessControl.Reflow.StageLinkedNode($v_2));
            $v_0 = $v_0.get_next();
        }
        this.$4b_0 = $v_0;
    },

    get_defaultPath: function() {
        return this.$4_0;
    },

    get_startingNodeInDefaultPath: function() {
        if (!this.$i_0) {
            this.$i_0 = this.$4_0.get_item(0);
            this.$2H_0 = 0;
        }
        return this.$i_0;
    },

    set_startingNodeInDefaultPath: function(value) {
        this.$i_0 = value;
        return value;
    },

    get_startingNodeIndexInDefaultPath: function() {
        if (this.$2H_0 === -1) {
            this.$2H_0 = this.$4_0.indexOf(this.get_startingNodeInDefaultPath().get_value(), true);
        }
        return this.$2H_0;
    },

    set_startingNodeIndexInDefaultPath: function(value) {
        this.$2H_0 = value;
        return value;
    },

    get_lastEvaluatedNodeInDefaultPath: function() {
        return this.$4b_0;
    },

    $42_0: null,
    $4_0: null,
    $i_0: null,
    $4b_0: null,
    $5_0: null
}


ProcessControl.Reflow.BusinessRuleRelatedEntityStageCommand = function(context) {
    ProcessControl.Reflow.BusinessRuleRelatedEntityStageCommand.initializeBase(this, [context]);
}
ProcessControl.Reflow.BusinessRuleRelatedEntityStageCommand.prototype = {
    executeCondition: function() {
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(this.$2G_0.get_stageId());
        var $v_1 = this.$5_0.get_businessProcessFlowVisitor().get_conditionsByParentStageId()[$v_0];
        if (!$v_1) {
            return;
        }
        var $v_2 = $v_1.findElseBranch();
        var $v_3 = null;
        if ($v_2 && $v_2.get_Steps().get_Count() > 0) {
            var $v_4 = $v_2.get_Steps().get_item(0);
            $v_3 = $v_4.get_stageId();
        }
        this.invokeReflowFunction($v_0, $v_3);
    },

    invokeReflowFunction: function($p0, $p1) {
        ProcessControl.Reflow.XrmApiCode.callReflowApi(false, $p0, $p1);
    }
}


ProcessControl.Reflow.BusinessRulePrimaryEntityStageCommand = function(context) {
    ProcessControl.Reflow.BusinessRulePrimaryEntityStageCommand.initializeBase(this, [context]);
}
ProcessControl.Reflow.BusinessRulePrimaryEntityStageCommand.prototype = {
    executeCondition: function() {
        var $v_0 = String.format('bpf_{0}', this.$8U_1(this.$2G_0.get_stageId()));
        this.$5_0.get_businessRuleCaller().callMethod($v_0);
    },

    $8U_1: function($p0) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty($p0)) {
            return $p0;
        }
        $p0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($p0);
        while ($p0.indexOf('-') > -1) {
            $p0 = $p0.replace('-', '');
        }
        return $p0;
    }
}


ProcessControl.Reflow.BusinessRuleStageCommandFactory = function() {
}
ProcessControl.Reflow.BusinessRuleStageCommandFactory.prototype = {
    getStageCommand: function(context, stage) {
        var $v_0 = context.get_businessProcessFlowVisitor().get_parentEntityStepByStageId()[Microsoft.Crm.Workflow.Utils
            .StringUtility.reduceToCanonicalForm(stage.get_stageId())];
        if (context.get_currentEntityName() !== $v_0.get_EntityLogicalName()) {
            return new ProcessControl.Reflow.BusinessRuleRelatedEntityStageCommand(context);
        }
        return new ProcessControl.Reflow.BusinessRulePrimaryEntityStageCommand(context);
    }
}


ProcessControl.Reflow.WebBusinessRuleCaller = function() {
}
ProcessControl.Reflow.WebBusinessRuleCaller.prototype = {
    get_isResolved: function() {
        return true;
    },

    get_businessRuleReadyPromise: function() {
        if (!this.$2e_0) {
            this.$2e_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
            this.$2e_0.resolve(null);
        }
        return this.$2e_0.promise();
    },

    callMethod: function(functionName) {
        if (ProcessControl.Services.ProcessControlInitializer.$N) {
            Mscrm.TurboForm.Control.CustomScriptsManager.get_instance()
                .executeHandlerIfAvailable(functionName, '', null);
        } else {
            var $v_0 = window.self;
            if (functionName in $v_0) {
                $v_0[functionName]();
            }
        }
    },

    $2e_0: null
}


ProcessControl.Reflow.TraversedPathProvider = function(controlDataService) {
    this.$j_0 = controlDataService;
}
ProcessControl.Reflow.TraversedPathProvider.prototype = {
    get_isResolved: function() {
        return this.get_traversedPathPromise().state() === 'resolved';
    },

    get_traversedPath: function() {
        if (!this.get_isResolved()) {
            return null;
        }
        return this.$j_0.$S_0.get_traversedPath().get_path();
    },

    get_traversedPathPromise: function() {
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.$1i_0)) {
            return this.$1i_0.promise();
        }
        this.$1i_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, Object);
        var $$t_2 = this, $$t_3 = this;
        this.$j_0.fetchGlobalTraversedStageInfo().then(function($p1_0) {
                $$t_2.$1i_0.resolve($p1_0.get_traversedPath().get_path());
            },
            function($p1_0) {
                $$t_3.$1i_0.reject(null);
            });
        return this.$1i_0.promise();
    },

    $1i_0: null,
    $j_0: null
}


ProcessControl.Reflow.DefaultPathChangeContext = function() {
}
ProcessControl.Reflow.DefaultPathChangeContext.prototype = {
    get_invocationSource: function() {
        return this.$4a_0;
    },

    set_invocationSource: function(value) {
        this.$4a_0 = value;
        return value;
    },

    get_workflowStep: function() {
        return this.$4u_0;
    },

    set_workflowStep: function(value) {
        this.$4u_0 = value;
        return value;
    },

    get_currentEntityName: function() {
        return this.$4V_0;
    },

    set_currentEntityName: function(value) {
        this.$4V_0 = value;
        return value;
    },

    get_businessRuleCaller: function() {
        return this.$4R_0;
    },

    set_businessRuleCaller: function(value) {
        this.$4R_0 = value;
        return value;
    },

    getStageStep: function(stageId) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(stageId)) {
            return null;
        }
        var $v_0 = this.$4n_0[Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageId)];
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNull($v_0)) {
            return null;
        }
        return $v_0;
    },

    get_businessProcessFlowVisitor: function() {
        if (!this.$28_0) {
            this.$28_0 = new ProcessObjectModel.Visitors.BusinessProcessFlowVisitor();
        }
        return this.$28_0;
    },

    set_businessProcessFlowVisitor: function(value) {
        this.$28_0 = value;
        this.$4n_0 = this.$28_0.get_stagesById();
        return value;
    },

    $4a_0: null,
    $4n_0: null,
    $4u_0: null,
    $4V_0: null,
    $28_0: null,
    $4R_0: null
}


ProcessControl.Reflow.InvocationSourceConstants = function() {
}


ProcessControl.Reflow.DefaultPathChangedEventArgs = function(parentStage, nextStage) {
    ProcessControl.Reflow.DefaultPathChangedEventArgs.initializeBase(this);
    this.$2v_1 = nextStage;
    this.$2F_1 = parentStage;
}
ProcessControl.Reflow.DefaultPathChangedEventArgs.prototype = {
    $2v_1: null,
    $2F_1: null,

    get_parentStage: function() {
        return this.$2F_1;
    },

    set_parentStage: function(value) {
        this.$2F_1 = value;
        return value;
    },

    get_nextStage: function() {
        return this.$2v_1;
    },

    set_nextStage: function(value) {
        this.$2v_1 = value;
        return value;
    }
}


ProcessControl.Reflow.DefaultPathChangeHandler = function(context, initialPath, cascadeUpdate) {
    this.$4_0 = initialPath;
    this.$4S_0 = cascadeUpdate;
    this.$5_0 = context;
}
ProcessControl.Reflow.DefaultPathChangeHandler.prototype = {
    handleChange: function(parentStage, nextStage) {
        var $v_0 = this.$4_0.find(parentStage, false);
        if ($v_0) {
            var $v_1 = (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(nextStage)) ? nextStage : null;
            var $v_2 = new ProcessControl.Reflow.StageLinkedNode($v_1);
            this.$4_0.addAfter($v_0, $v_2);
            if ($v_1) {
                this.triggerSubsequentDefaultPathCalculation($v_2);
            }
        }
    },

    triggerSubsequentDefaultPathCalculation: function(stageNode) {
        if (!stageNode) {
            return;
        }
        var $v_0 = stageNode.get_value();
        if (!$v_0) {
            return;
        }
        if (!this.$8s_0(stageNode)) {
            var $v_1 = this.$5_0.getStageStep($v_0).get_nextStageId();
            if (!$v_1) {
                return;
            }
            var $v_2 = this.$4_0.find($v_1, true);
            if ($v_2) {
                if (this.$4S_0) {
                    this.triggerSubsequentDefaultPathCalculation($v_2);
                }
                return;
            }
            this.$4_0.addAfter(stageNode, new ProcessControl.Reflow.StageLinkedNode($v_1));
            this.triggerSubsequentDefaultPathCalculationInternal(stageNode.get_next());
        }
    },

    triggerSubsequentDefaultPathCalculationInternal: function($p0) {
        this.triggerSubsequentDefaultPathCalculation($p0);
    },

    get_businessRuleCommandFactory: function() {
        if (!this.$2o_0) {
            this.$2o_0 = new ProcessControl.Reflow.BusinessRuleStageCommandFactory();
        }
        return this.$2o_0;
    },

    set_businessRuleCommandFactory: function(value) {
        this.$2o_0 = value;
        return value;
    },

    $8s_0: function($p0) {
        var $v_0 = this.$5_0.get_invocationSource();
        try {
            this.$5_0.set_invocationSource('internal');
            var $v_1 = this.$5_0.getStageStep($p0.get_value());
            var $v_2 = this.get_businessRuleCommandFactory().getStageCommand(this.$5_0, $v_1);
            $v_2.set_stage($v_1);
            if (!$v_2.tryExecute()) {
                return false;
            }
            if ($p0.get_next()) {
                return true;
            }
            return false;
        } finally {
            this.$5_0.set_invocationSource($v_0);
        }
    },

    $4_0: null,
    $4S_0: false,
    $2o_0: null,
    $5_0: null
}


ProcessControl.Reflow.DefaultPathChangeListener = function() {
}
ProcessControl.Reflow.DefaultPathChangeListener.prototype = {
    pathChanged: function(args) {
        if (this.$2s_0 && !Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(args.$2F_1)) {
            this.$2s_0.handleChange(args.$2F_1, args.$2v_1);
        }
    },

    get_handler: function() {
        return this.$2s_0;
    },

    set_handler: function(value) {
        this.$2s_0 = value;
        return value;
    },

    $2s_0: null
}


ProcessControl.Reflow.DefaultPathManager = function(traversedPathProvider, context) {
    this.$29_0 = new Sys.EventHandlerList();
    this.$5_0 = context;
    this.$1K_0 = traversedPathProvider;
    this.$5X_0();
}
ProcessControl.Reflow.DefaultPathManager.prototype = {
    add_defaultPathChanged: function(value) {
        this.$29_0.addHandler('DefauiltPathChanged', value);
    },

    remove_defaultPathChanged: function(value) {
        this.$29_0.removeHandler('DefauiltPathChanged', value);
    },

    add_defaultPathInitialized: function(value) {
        this.$29_0.addHandler('DefauiltPathInitialized', value);
    },

    remove_defaultPathInitialized: function(value) {
        this.$29_0.removeHandler('DefauiltPathInitialized', value);
    },

    initializeComplete: function() {
        if (!this.$1K_0.get_isResolved() || !this.$5_0.get_businessRuleCaller().get_isResolved()) {
            var $$t_3 = this, $$t_4 = this;
            Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper
                .when(this.$1K_0.get_traversedPathPromise(),
                    this.$5_0.get_businessRuleCaller().get_businessRuleReadyPromise()).then(function($p1_0) {
                        $$t_3.initializeComplete();
                    },
                    function($p1_0) {
                    });
            return;
        }
        var $v_0 = this.$4_0.get_defaultPathHash();
        this.initializeTraversedPath();
        this.$5Y_0(false);
        this.$P_0('DefauiltPathInitialized');
        if ($v_0 !== this.$4_0.get_defaultPathHash()) {
            this.$P_0('DefauiltPathChanged');
        }
    },

    reinitializeOnTraversedPathChange: function() {
        this.$5X_0();
        this.initializeTraversedPath();
        this.$5Y_0(true);
    },

    updateDefaultPath: function(parentStageId, nextStageId) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(parentStageId)) {
            return;
        }
        var $v_0 = null;
        if (this.$5_0.get_invocationSource() !== 'internal') {
            $v_0 = this.$4_0.get_defaultPathHash();
        }
        this.get_listener().pathChanged(new ProcessControl.Reflow
            .DefaultPathChangedEventArgs(parentStageId, nextStageId));
        if (this.$5_0.get_invocationSource() !== 'internal') {
            var $v_1 = this.$4_0.get_defaultPathHash();
            if ($v_0 !== $v_1) {
                this.$P_0('DefauiltPathChanged');
            }
        }
    },

    triggerDefaultPathUpdate: function(stageId) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(stageId)) {
            return;
        }
        stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageId);
        var $v_0 = this.$4_0.find(stageId, false);
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNull($v_0)) {
            return;
        }
        var $v_1 = null;
        if (this.$5_0.get_invocationSource() !== 'internal') {
            $v_1 = this.$4_0.get_defaultPathHash();
        }
        this.get_listener().get_handler().triggerSubsequentDefaultPathCalculation($v_0);
        if (this.$5_0.get_invocationSource() !== 'internal') {
            var $v_2 = this.$4_0.get_defaultPathHash();
            if ($v_1 !== $v_2) {
                this.$P_0('DefauiltPathChanged');
            }
        }
    },

    get_defaultPath: function() {
        return this.$4_0.get_defaultPath();
    },

    get_defaultPathHash: function() {
        return this.$4_0.get_defaultPathHash();
    },

    getNextStage: function(currentStageId) {
        var $v_0 = this.get_defaultPath();
        var $v_1 = Array
            .indexOf($v_0, Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(currentStageId));
        if ($v_1 !== -1 && $v_1 < $v_0.length - 1) {
            return $v_0[$v_1 + 1];
        }
        return null;
    },

    getPreviousStage: function(currentStageId) {
        var $v_0 = this.get_defaultPath();
        var $v_1 = Array
            .indexOf($v_0, Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(currentStageId));
        if ($v_1 <= 0) {
            return null;
        }
        return $v_0[$v_1 - 1];
    },

    get_listener: function() {
        if (!this.$b_0) {
            this.$b_0 = new ProcessControl.Reflow.DefaultPathChangeListener();
        }
        return this.$b_0;
    },

    set_listener: function(value) {
        this.$b_0 = value;
        return value;
    },

    get_loadTimePathCalculator: function() {
        if (!this.$2u_0) {
            this.$2u_0 = new ProcessControl.Reflow.LoadTimeDefaultPathCalculator(this.$5_0, this.$4_0);
        }
        return this.$2u_0;
    },

    set_loadTimePathCalculator: function(value) {
        this.$2u_0 = value;
        return value;
    },

    get_afterLoadPathCalculator: function() {
        if (!this.$2k_0) {
            this.$2k_0 = new ProcessControl.Reflow
                .AfterLoadDefaultPathCalculator(this.$5_0, this.get_listener(), this.$4_0);
        }
        return this.$2k_0;
    },

    set_afterLoadPathCalculator: function(value) {
        this.$2k_0 = value;
        return value;
    },

    get_runtimePathCalculator: function() {
        if (!this.$2y_0) {
            this.$2y_0 = new ProcessControl.Reflow
                .RuntimeDefaultPathCalculator(this.$5_0, this.get_listener(), this.$4_0);
        }
        return this.$2y_0;
    },

    set_runtimePathCalculator: function(value) {
        this.$2y_0 = value;
        return value;
    },

    get_context: function() {
        return this.$5_0;
    },

    set_context: function(value) {
        this.$5_0 = value;
        return value;
    },

    get_traversedPathProvider: function() {
        return this.$1K_0;
    },

    $P_0: function($p0) {
        var $v_0 = this.$29_0.getHandler($p0);
        if ($v_0) {
            $v_0(this, null);
        }
    },

    $5X_0: function() {
        this.$4_0 = new ProcessControl.Reflow.StageLinkedListArray();
        var $v_0 = this.$5_0.get_businessProcessFlowVisitor().get_firstLevelStages();
        var $v_1 = 0;
        var $$dict_3 = $v_0;
        for (var $$key_4 in $$dict_3) {
            var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
            this.$4_0.set_item($v_1, new ProcessControl.Reflow.StageLinkedNode($v_2.key));
            $v_1++;
        }
    },

    initializeTraversedPath: function() {
        if (!this.$1K_0.get_isResolved() || !this.$5_0.get_businessRuleCaller().get_isResolved()) {
            var $$t_2 = this, $$t_3 = this;
            Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper
                .when(this.$1K_0.get_traversedPathPromise(),
                    this.$5_0.get_businessRuleCaller().get_businessRuleReadyPromise()).then(function($p1_0) {
                        $$t_2.initializeComplete();
                    },
                    function($p1_0) {
                    });
            return;
        }
        this.get_loadTimePathCalculator().set_traversedPath(this.$1K_0.get_traversedPath());
        this.get_loadTimePathCalculator().calculate();
        this.$4_0 = this.get_loadTimePathCalculator().get_defaultPath();
    },

    $5Y_0: function($p0) {
        if (!this.$1K_0.get_isResolved()) {
            return;
        }
        var $v_0 = this.$4_0.get_defaultPathHash();
        this.get_afterLoadPathCalculator()
            .set_startingNodeInDefaultPath(this.get_loadTimePathCalculator().get_lastCalculatedDefaultNode());
        this.get_afterLoadPathCalculator().calculate();
        this.$4_0 = this.get_afterLoadPathCalculator().get_defaultPath();
        if ($p0 && $v_0 !== this.$4_0.get_defaultPathHash()) {
            this.$P_0('DefauiltPathChanged');
        }
        this.get_runtimePathCalculator().calculate();
    },

    $4_0: null,
    $b_0: null,
    $5_0: null,
    $2u_0: null,
    $2k_0: null,
    $2y_0: null,
    $1K_0: null
}


ProcessControl.Reflow.LinkedNode$1 = function(value) {
    this.$44_0 = ((this.$$gta['ProcessControl.Reflow.LinkedNode$1']['T'] === Number ||
            Type.isEnum(this.$$gta['ProcessControl.Reflow.LinkedNode$1']['T']))
        ? 0
        : (this.$$gta['ProcessControl.Reflow.LinkedNode$1']['T'] === Boolean) ? false : null);
    this.$44_0 = value;
    this.$3u_0 = null;
}
ProcessControl.Reflow.LinkedNode$1.$$ = function(T) {
    var $$cn = 'LinkedNode$1' + '$' + T.getName().replace(/\./g, '_');
    if (!ProcessControl.Reflow[$$cn]) {
        var $$ccr = ProcessControl.Reflow[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Reflow.LinkedNode$1'] = { 'T': T };
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Reflow.LinkedNode$1.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Reflow.' + $$cn, null, ProcessControl.Reflow.ILinkedNode$1.$$(T));
        var $$dict_5 = ProcessControl.Reflow.LinkedNode$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return ProcessControl.Reflow[$$cn];
}
ProcessControl.Reflow.LinkedNode$1.prototype = {
    get_next: function() {
        return this.$3u_0;
    },

    set_next: function(value) {
        this.$3u_0 = value;
        return value;
    },

    get_value: function() {
        return this.$44_0;
    },

    set_value: function(value) {
        this.$44_0 = value;
        return value;
    },

    $3u_0: null
}


ProcessControl.Reflow.StageLinkedListArray = function() {
    this.$o_0 = new Array(0);
    this.$2x_0 = new Array(0);
    this.$3s_0 = new Date();
}
ProcessControl.Reflow.StageLinkedListArray.prototype = {
    find: function(value, searchOnlyRootNodes) {
        value = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(value);
        if (searchOnlyRootNodes) {
            var $v_0 = Array.indexOf(this.$2x_0, value);
            if ($v_0 !== -1) {
                return this.$o_0[$v_0];
            }
            return null;
        }
        for (var $v_1 = 0; $v_1 < this.$o_0.length; $v_1++) {
            var $v_2 = this.$o_0[$v_1];
            if ($v_2.get_value() === value) {
                return $v_2;
            }
            while ($v_2.get_next()) {
                $v_2 = $v_2.get_next();
                if ($v_2.get_value() === value) {
                    return $v_2;
                }
            }
        }
        return null;
    },

    indexOf: function(value, searchOnlyRootNodes) {
        if (searchOnlyRootNodes) {
            return Array.indexOf(this.$2x_0, value);
        }
        for (var $v_0 = 0; $v_0 < this.$o_0.length; $v_0++) {
            var $v_1 = this.$o_0[$v_0];
            if ($v_1.get_value() === value) {
                return $v_0;
            }
            while ($v_1.get_next()) {
                $v_1 = $v_1.get_next();
                if ($v_1.get_value() === value) {
                    return $v_0;
                }
            }
        }
        return -1;
    },

    get_item: function(index) {
        return this.$o_0[index];
    },

    set_item: function(index, value) {
        this.$2t_0 = false;
        this.$o_0[index] = value;
        this.$2x_0[index] = value.get_value();
        return value;
    },

    addAfter: function(node, nextNode) {
        if (this.find(nextNode.get_value(), true)) {
            this.$4z_0(node, new ProcessControl.Reflow.StageLinkedNode(null));
            return;
        }
        this.$4z_0(node, nextNode);
    },

    get_length: function() {
        return this.$o_0.length;
    },

    get_defaultPath: function() {
        this.$5M_0();
        return this.$1l_0;
    },

    get_defaultPathHash: function() {
        this.$5M_0();
        return this.$3s_0.getTime().toString();
    },

    $4z_0: function($p0, $p1) {
        $p1.set_list(this);
        $p0.set_next($p1);
        this.$2t_0 = false;
    },

    $5M_0: function() {
        if (!this.$2t_0) {
            this.$1l_0 = this.$85_0();
            this.$2t_0 = true;
            this.$3s_0 = new Date();
        }
    },

    $85_0: function() {
        this.$1l_0 = new Array(0);
        for (var $v_0 = 0; $v_0 < this.$o_0.length; $v_0++) {
            var $v_1 = this.$o_0[$v_0];
            Array.add(this.$1l_0, $v_1.get_value());
            while ($v_1.get_next()) {
                var $v_2 = $v_1.get_next();
                if ($v_2.get_value()) {
                    Array.add(this.$1l_0, $v_2.get_value());
                }
                $v_1 = $v_2;
            }
        }
        return this.$1l_0;
    },

    $o_0: null,
    $2t_0: false,
    $3s_0: null,
    $1l_0: null,
    $2x_0: null
}


ProcessControl.Reflow.StageLinkedNode = function(value) {
    ProcessControl.Reflow.StageLinkedNode.initializeBase(this,
        [Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(value)]);
}
ProcessControl.Reflow.StageLinkedNode.prototype = {
    get_list: function() {
        return this.$4c_1;
    },

    set_list: function(value) {
        this.$4c_1 = value;
        return value;
    },

    $4c_1: null
}


ProcessControl.Reflow.XrmApiCode = function() {
}
ProcessControl.Reflow.XrmApiCode.callReflowApi = function(updateUI, parentStageId, childStageId) {
    Xrm.Page.ui.process.reflow(updateUI, parentStageId, childStageId);
}


Type.registerNamespace('ProcessControl.Services');

ProcessControl.Services.IBusinessRuleService = function() {}
ProcessControl.Services.IBusinessRuleService.registerInterface('ProcessControl.Services.IBusinessRuleService');


ProcessControl.Services.IControlDataService = function() {}
ProcessControl.Services.IControlDataService.registerInterface('ProcessControl.Services.IControlDataService');


ProcessControl.Services.IClosedLoopService = function() {}
ProcessControl.Services.IClosedLoopService.registerInterface('ProcessControl.Services.IClosedLoopService');


ProcessControl.Services.INavigationService = function() {}
ProcessControl.Services.INavigationService.registerInterface('ProcessControl.Services.INavigationService');


ProcessControl.Services.ILocalTraversedPathAndActiveStageService = function() {}
ProcessControl.Services.ILocalTraversedPathAndActiveStageService
    .registerInterface('ProcessControl.Services.ILocalTraversedPathAndActiveStageService');


ProcessControl.Services.ISaveStageService = function() {}
ProcessControl.Services.ISaveStageService.registerInterface('ProcessControl.Services.ISaveStageService');


ProcessControl.Services.IStageActionService = function() {}
ProcessControl.Services.IStageActionService.registerInterface('ProcessControl.Services.IStageActionService');


ProcessControl.Services.ActionItem = function() {
}
ProcessControl.Services.ActionItem.prototype = {
    action: null,
    condition: null
}


ProcessControl.Services.ActionQueue = function() {
    this.$$d_$8d_0 = Function.createDelegate(this, this.$8d_0);
    this.$2f_0 = new Array(0);
}
ProcessControl.Services.ActionQueue.prototype = {
    $2f_0: null,

    push: function(action, condition) {
        if (condition()) {
            action();
            return;
        }
        var $v_0 = new ProcessControl.Services.ActionItem();
        $v_0.action = action;
        $v_0.condition = condition;
        this.$2f_0.push($v_0);
        window.setTimeout(this.$$d_$8d_0, 100);
    },

    $8d_0: function() {
        if (!this.$2f_0.length) {
            return;
        }
        var $v_0 = this.$2f_0.shift();
        this.push($v_0.action, $v_0.condition);
    }
}


ProcessControl.Services.ClosedLoopService = function(controlDataService) {
    this.$j_0 = controlDataService;
}
ProcessControl.Services.ClosedLoopService.prototype = {
    canCloseEntity: function(stageId) {
        if (!(this.$j_0.get_globalTraversedStageInfoDeferred().state() === 'resolved')) {
            return false;
        }
        var $v_0 = this.$j_0.get_businessProcessFlowVisitor();
        if (!((stageId) in $v_0.get_parentEntityStepByStageId())) {
            return false;
        }
        var $v_1 = $v_0.get_parentEntityStepByStageId()[stageId];
        if (!Array.contains(this.get_$6U_0(), $v_1.get_EntityLogicalName())) {
            return false;
        }
        var $v_2 = this.$j_0.get_globalTraversedPathAndActiveStage();
        var $v_3 = (!IsNull($v_2))
            ? $v_2.get_traversedPath().get_path()
            : Mscrm.ProcessControlShared.ObjectModels.TraversedPath
            .getCandidateTraversedPathFromStagStep($v_0.get_stages(), stageId);
        var $v_4 = $v_0.get_parentEntityStepByStageId();
        for (var $$arr_6 = $v_3.split(','), $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
            var $v_5 = $$arr_6[$$idx_8];
            if ($v_5 === stageId) {
                return false;
            }
            var $v_6 = (($v_5) in $v_4) ? $v_4[$v_5] : null;
            if (!IsNull($v_6) && $v_1.get_EntityLogicalName() === $v_6.get_EntityLogicalName()) {
                return true;
            }
        }
        return false;
    },

    findCloseLoopEntity: function(stageId) {
        if (!this.canCloseEntity(stageId)) {
            return null;
        }
        var $v_0 = this.$j_0.get_businessProcessFlowVisitor();
        var $v_1 = $v_0.get_parentEntityStepByStageId()[stageId];
        var $v_2 = this.$j_0.get_navigationEntitiesDictionary()[$v_1.get_EntityLogicalName()];
        if (IsNull($v_2)) {
            return null;
        }
        return $v_2;
    },

    $2R_0: null,

    get_$6U_0: function() {
        if (!this.$2R_0) {
            this.$2R_0 = [];
            var $v_0 = this.$j_0.get_businessProcessFlowVisitor();
            var $v_1 = $v_0.get_entitiesByEntityName();
            var $$dict_3 = $v_1;
            for (var $$key_4 in $$dict_3) {
                var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
                if (!IsNull($v_2.value) && ($v_2.value).length > 1) {
                    Array.add(this.$2R_0, $v_2.key);
                }
            }
        }
        return this.$2R_0;
    },

    $j_0: null
}


ProcessControl.Services.BusinessRuleService = function() {
}
ProcessControl.Services.BusinessRuleService.prototype = {
    registerBusinessRulesOnAttributes: function(attributes) {
        if (IsNull(attributes) || !attributes.length) {
            return;
        }
        var $v_0 = this.get_onChangeHandlers();
        if (IsNull($v_0)) {
            return;
        }
        var $v_1 = this.get_attributes();
        var $$dict_6 = $v_0;
        for (var $$key_7 in $$dict_6) {
            var $v_2 = { key: $$key_7, value: $$dict_6[$$key_7] };
            var $v_3 = $v_2.key;
            if (Array.indexOf(attributes, $v_3) < 0) {
                continue;
            }
            var $v_4 = $v_1.get($v_3);
            if (IsNull($v_4)) {
                continue;
            }
            $v_4.removeOnChange($v_2.value);
            $v_4.addOnChange($v_2.value);
        }
    },

    $2b_0: null,

    get_onChangeHandlers: function() {
        if (!this.$2b_0) {
            this.$2b_0 = Mscrm.BusinessRulesScript && Mscrm.BusinessRulesScript.AttributesOnChangeHandlers;
        }
        return this.$2b_0;
    },

    set_onChangeHandlers: function(value) {
        this.$2b_0 = value;
        return value;
    },

    $2M_0: null,

    get_attributes: function() {
        if (!this.$2M_0) {
            this.$2M_0 = Xrm.Page.data.entity.attributes;
        }
        return this.$2M_0;
    },

    set_attributes: function(value) {
        this.$2M_0 = value;
        return value;
    }
}


ProcessControl.Services.NavigationService = function() {
}
ProcessControl.Services.NavigationService.prototype = {
    get_navigationSource: function() {
        if (!this.$4D_0) {
            var $v_0 = null;
            if (ProcessControl.Services.ProcessControlInitializer.$N) {
                $v_0 = parseHashString(window.location);
            } else {
                $v_0 = parseQueryString(window.location);
            }
            var $v_1 = $v_0['_createfromid'];
            var $v_2 = $v_0['navsourcetype'];
            var $v_3 = $v_0['_createfromtype'];
            var $v_4 = $v_0['_tp'];
            var $v_5 = $v_0['_activestage'];
            var $v_6 = $v_0['process'];
            var $v_7 = $v_0['processinstanceid'];
            var $v_8 = $v_0['extraqs'];
            if (!isNullOrEmptyString($v_8)) {
                var $v_9 = parseQueryStringValue($v_8.substr(1));
                $v_1 = $v_1 || $v_9['_createfromid'];
                $v_2 = $v_9['navsourcetype'];
                $v_3 = $v_9['_createfromtype'];
                $v_4 = $v_9['_tp'];
                $v_5 = $v_9['_activestage'];
                $v_6 = $v_9['process'];
                $v_7 = $v_9['processinstanceid'];
            }
            if (IsNull($v_1) || IsNull($v_2) || IsNull($v_3) || isNullOrEmptyString($v_5) || isNullOrEmptyString($v_4)
            ) {
                this.$e_0 = null;
                return this.$e_0;
            }
            this.$e_0 = new Mscrm.ProcessControlShared.ObjectModels.NavigationSource();
            this.$e_0.$1F_0 = new Mscrm.ProcessControlShared.ObjectModels.NavigationEntity();
            this.$e_0.$1F_0.Id = $v_1;
            this.$e_0.$1F_0.EntityLogicalName = $v_2;
            this.$e_0.$1F_0.EntityTypeCode = Number.parseInvariant($v_3);
            this.$e_0.$1X_0 = $v_5;
            this.$e_0.$Y_0 = $v_4;
            this.$e_0.$W_0 = $v_6;
            this.$e_0.$1b_0 = $v_7;
            this.$4D_0 = true;
        }
        return this.$e_0;
    },

    $e_0: null,
    $4D_0: false
}


ProcessControl.Services.EmptySaveService = function(entityLogicalName) {
    ProcessControl.Services.EmptySaveService.initializeBase(this, [entityLogicalName]);
}
ProcessControl.Services.EmptySaveService.prototype = {
    setStageWithoutSaving: function(stageValue, traversedPath, argument) {
        this.setStageCompleted(0, argument);
    },

    setStageAndSave: function(stageValue, traversedPath, argument) {
        this.setStageCompleted(0, argument);
    },

    setProcessWithoutSaving: function(stageValue) {
    },

    setProcessAndSave: function(processId, stageId, traversedPath) {
        this.setStageCompleted(0, null);
    }
}


ProcessControl.Services.LocalTraversedPathAndActiveStageService = function(dataService) {
    this.$1_0 = dataService;
}
ProcessControl.Services.LocalTraversedPathAndActiveStageService.prototype = {
    getTraversedPathAndActiveStage: function(formData) {
        var $v_0 = this.findLocalTraversedPathAndStageInfo(formData);
        if (IsNull($v_0) || !$v_0.get_stage()) {
            $v_0 = this.$81_0(formData);
        } else {
            this.$6l_0($v_0);
            $v_0 = this.$6Z_0($v_0);
        }
        return $v_0;
    },

    findOtherEntitiesLocalActiveStage: function() {
        var $v_0 = this.$1_0.$19_0[this.$1_0.$19_0.length - 1];
        var $v_1 = $v_0.Id;
        var $v_2 = $v_0.EntityLogicalName;
        var $v_3 = $v_0.PrimaryKeyName;
        var $v_4 = new Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase(Xrm.Page.context.getClientUrl());
        var $$t_D = this, $$t_E = this;
        $v_4.retrieveMultiple(String
            .format('<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\">\r\n\t\t\t\t<entity name=\"{0}\">\r\n\t\t\t\t<attribute name=\"stageid\" />\r\n\t\t\t\t<attribute name=\"traversedpath\" />\r\n\t\t\t\t<filter type=\"and\">\r\n\t\t\t\t\t<condition attribute=\"{1}\" operator=\"eq\" value=\"{2}\" />\r\n\t\t\t\t</filter>\r\n\t\t\t\t</entity>\r\n\t\t\t</fetch>', $v_2, $v_3, $v_1)).then(function($p1_0) {
                var $v_5 = null;
                var $v_6 = null;
                if ($p1_0.entities.length && (('stageid') in $p1_0.entities[0].attributes)) {
                    $v_5 = $$t_D.$1_0.getStageByValue($p1_0.entities[0].attributes['stageid'].toString());
                    var $v_7 = $p1_0.entities[0].attributes[ProcessControl.Services.AttributeNames.traversedPath];
                    if (IsNull($v_7) && !IsNull($v_5)) {
                        $v_6 = new Mscrm.ProcessControlShared.ObjectModels
                            .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                                .getCandidateTraversedPathFromStagStep($$t_D.$1_0.$1C_0, $v_5.get_stageId()));
                    } else {
                        $v_6 = new Mscrm.ProcessControlShared.ObjectModels.TraversedPath($v_7);
                    }
                    var $$t_B, $$t_C;
                    $$t_D.$8S_0(($$t_B = { 'val': $v_5 }), ($$t_C = { 'val': $v_6 })), $v_5 = $$t_B.val, $v_6 = $$t_C
                        .val;
                }
                if (IsNull($v_5)) {
                    var $v_8 = {};
                    $v_8[$$t_D.$1_0.$1E_0] = $$t_D.$1_0.$2p_0;
                    $$t_D.$1_0.$l_0 = $v_8;
                    $$t_D.$1_0.$1Q_0 = 1;
                    $$t_D.$1_0.set_globalTraversedPathAndActiveStage($$t_D.$1_0.$Z_0);
                } else {
                    $$t_D.$1_0
                        .set_globalTraversedPathAndActiveStage(new Mscrm.ProcessControlShared.ObjectModels
                            .PathAndStageInfo($v_6, $v_5));
                }
            },
            function($p1_0) {
                $$t_E.$1_0.$r_0.reject(null);
            });
    },

    $8S_0: function($p0, $p1) {
        var $v_0 = this.$1_0.$Z_0.get_traversedPath().get_path();
        if (!IsNull($p0.val) &&
            $v_0.indexOf(Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($p0.val.get_stageId())) > 0) {
            $p0.val = this.$1_0.$Z_0.get_stage();
            $p1.val = this.$1_0.$Z_0.get_traversedPath();
        }
    },

    findLocalTraversedPathAndStageInfo: function(formData) {
        var $v_0;
        var $v_1;
        var $v_2 = this.$1_0.$1C_0;
        var $$t_7, $$t_8, $$t_9;
        var $v_3 = (($$t_9 = ProcessControl.FormDataUtility
            .getActiveStageValue($v_2, formData, ($$t_7 = { 'val': $v_0 }), ($$t_8 = { 'val': $v_1 }))), $v_0 = $$t_7
            .val, $v_1 = $$t_8.val, $$t_9);
        this.$1_0.$2V_0 = $v_1;
        if (!$v_1) {
            return null;
        }
        var $v_4 = this.$1_0.getStageByValue($v_3);
        if (IsNull($v_4)) {
            $v_4 = this.$5I_0(formData._entity.TypeName).get_Steps().getArrayList()[0];
            $v_0 = new Mscrm.ProcessControlShared.ObjectModels
                .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                    .getCandidateTraversedPathFromStagStep($v_2, $v_4.get_stageId()));
        } else {
            this.$1_0.$2W_0 = true;
        }
        var $v_5 = new Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo($v_0, $v_4);
        return $v_5;
    },

    $81_0: function($p0) {
        var $v_0 = null;
        var $v_1 = this.$1_0.get_navigationService().get_navigationSource();
        if (!IsNull($v_1)) {
            var $v_2 = this.$1_0.getStageStepByStageId($v_1.$1X_0);
            var $v_3 = new Mscrm.ProcessControlShared.ObjectModels.TraversedPath($v_1.$Y_0);
            Mscrm.CrmDebug.assert(!IsNull($v_2) && !IsNull($v_3.get_path()), 'Path from navigation source is empty');
            $v_0 = new Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo($v_3, $v_2);
        } else {
            var $v_4 = this.$5I_0($p0._entity.TypeName);
            var $v_5 = $v_4.get_Steps().get_item(0);
            var $v_6 = new Mscrm.ProcessControlShared.ObjectModels.TraversedPath($v_5.get_stageId());
            $v_0 = new Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo($v_6, $v_5);
        }
        this.$1_0.$23_0 = $v_0.get_stage();
        this.$1_0.$2c_0 = $v_0.get_traversedPath();
        this.$6G_0($p0);
        return $v_0;
    },

    $6Z_0: function($p0) {
        var $v_0 = this.$1_0.findStageEntity($p0.get_stage());
        var $v_1 = this.$1_0.$9_0;
        if ($v_0 !== $v_1 && $v_0.get_EntityLogicalName() === $v_1.get_EntityLogicalName()) {
            this.$1_0.$9_0 = $v_0;
        }
        return $p0;
    },

    $6l_0: function($p0) {
        var $v_0 = this.$1_0.findStageEntity($p0.get_stage());
        var $v_1 = this.$1_0.$9_0;
        if (IsNull($v_1)) {
            this.$1_0.$9_0 = $v_0;
        }
    },

    $6G_0: function($p0) {
        var $v_0 = $p0[ProcessControl.Services.AttributeNames.stageId];
        if (IsNull($v_0)) {
            $v_0 = {};
            $v_0['value'] = '';
            $p0[ProcessControl.Services.AttributeNames.stageId] = $v_0;
        }
        var $v_1 = $p0[ProcessControl.Services.AttributeNames.traversedPath];
        if (IsNull($v_1)) {
            $v_1 = {};
            $v_1['value'] = '';
            $p0[ProcessControl.Services.AttributeNames.traversedPath] = $v_1;
        }
    },

    $1_0: null,

    $5I_0: function($p0) {
        var $v_0 = this.$1_0.$9_0;
        if (!IsNull($v_0)) {
            return $v_0;
        } else {
            var $v_1 = this.$1_0.$O_0;
            for (var $v_2 = 0; $v_2 < $v_1.get_Steps().get_Count(); $v_2++) {
                var $v_3 = this.$1_0.$O_0.get_Steps().get_item($v_2);
                if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_3))) {
                    continue;
                }
                if ($v_3.get_EntityLogicalName() === $p0) {
                    return $v_3;
                }
            }
            return ProcessControl.Services.ControlDataService.getFirstEntityStepInProcess($v_1);
        }
    }
}


ProcessControl.Services.PlatformService = function() {
}
ProcessControl.Services.PlatformService.get_platform = function() {
    return ProcessControl.Services.PlatformService.$s;
}
ProcessControl.Services.PlatformService.set_platform = function(value) {
    ProcessControl.Services.PlatformService.$s = value;
    return value;
}


ProcessControl.Services.SaveActionArgument = function() {
}
ProcessControl.Services.SaveActionArgument.prototype = {
    advance: false,
    stageId: null,
    oldStageId: null,
    oldTraversedPath: null,
    traversedPath: null
}


ProcessControl.Services.StageActionService = function(controlDataService) {
    this.$$d_$6N_0 = Function.createDelegate(this, this.$6N_0);
    this.$$d_$6K_0 = Function.createDelegate(this, this.$6K_0);
    this.$$d_$7f_0 = Function.createDelegate(this, this.$7f_0);
    this.$6_0 = new Sys.EventHandlerList();
    this.$1_0 = controlDataService;
    this.$1y_0 = new ProcessControl.Services.ActionQueue();
    this.$1S_0 = ProcessControl.Services.SaveServiceFactory
        .getService(this.$1_0.get_currentEntity().get_EntityLogicalName());
    this.$1h_0 = [];
    this.$1f_0 = [];
    this.$1g_0 = [];
}
ProcessControl.Services.StageActionService.prototype = {
    $1y_0: null,
    $1S_0: null,
    $1_0: null,
    $1h_0: null,
    $1f_0: null,
    $1g_0: null,

    get_saveStageService: function() {
        return this.$1S_0;
    },

    add_advanceStageTaskCompleted: function(value) {
        this.$6_0.addHandler('AdvanceStageTaskCompleted', value);
    },

    remove_advanceStageTaskCompleted: function(value) {
        this.$6_0.removeHandler('AdvanceStageTaskCompleted', value);
    },

    add_backStageTaskCompleted: function(value) {
        this.$6_0.addHandler('BackStageTaskCompleted', value);
    },

    remove_backStageTaskCompleted: function(value) {
        this.$6_0.removeHandler('BackStageTaskCompleted', value);
    },

    $P_0: function($p0, $p1) {
        if (!this.$6_0) {
            return;
        }
        var $v_0 = this.$6_0.getHandler($p0);
        if ($v_0) {
            $v_0(this, $p1);
        }
    },

    _disposed: false,

    dispose: function() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this.$1S_0.remove_stageSetEvent(this.$$d_$7f_0);
        Mscrm.Utilities.destroyObject(this);
    },

    preAdvanceAction: function() {
    },

    advanceStage: function(condition) {
        this.$1y_0.push(this.$$d_$6K_0, condition);
    },

    postAdvanceAction: function() {
    },

    preBackAction: function() {
    },

    backStage: function(condition) {
        this.$1y_0.push(this.$$d_$6N_0, condition);
    },

    postBackAction: function() {
    },

    setActiveStage: function(canSet, stageValue, traversedPath, advance, save) {
        if ((this.$1_0.get_isNew() && save) || !canSet) {
            var $v_2 = (advance) ? 'AdvanceStageTaskCompleted' : 'BackStageTaskCompleted';
            var $v_3 = (advance) ? 2 : 3;
            this.$60_0($v_2, $v_3);
            return false;
        }
        var $v_0 = new ProcessControl.Services.SaveActionArgument();
        $v_0.advance = advance;
        $v_0.stageId = stageValue;
        $v_0.traversedPath = traversedPath;
        if (!IsNull(this.$1_0.get_globalTraversedPathAndActiveStage())) {
            if (!IsNull(this.$1_0.get_globalTraversedPathAndActiveStage().get_traversedPath())) {
                $v_0.oldTraversedPath = this.$1_0.get_globalTraversedPathAndActiveStage().get_traversedPath();
            }
            if (!IsNull(this.$1_0.get_globalTraversedPathAndActiveStage().get_stage()) &&
                !IsNull(this.$1_0.get_globalTraversedPathAndActiveStage().get_stage().get_stageId())) {
                $v_0.oldStageId = this.$1_0.get_globalTraversedPathAndActiveStage().get_stage().get_stageId();
            }
        }
        this.$1S_0.add_stageSetEvent(this.$$d_$7f_0);
        var $v_1 = stageValue.toLowerCase();
        if (save) {
            this.$1S_0.setStageAndSave($v_1, traversedPath.get_path(), $v_0);
        } else {
            this.$1S_0.setStageWithoutSaving($v_1, traversedPath.get_path(), $v_0);
        }
        return true;
    },

    registerSetActiveStageCallback: function(callback) {
        if (!IsNull(callback)) {
            Array.add(this.$1h_0, callback);
        }
    },

    registerMoveNextCallback: function(callback) {
        if (!IsNull(callback)) {
            Array.add(this.$1f_0, callback);
        }
    },

    registerMovePreviousCallback: function(callback) {
        if (!IsNull(callback)) {
            Array.add(this.$1g_0, callback);
        }
    },

    $6K_0: function() {
        this.preAdvanceAction();
        var $v_0 = this.$1_0.get_localActiveStage();
        var $v_1 = this.$1_0.getStageStepByStageId(this.$1_0.get_defaultPathManager().getNextStage($v_0.get_stageId()));
        ProcessControl.Services.DebugService.assert(!!$v_1, 'Can\'t advance after the last stage');
        var $v_2 = new Mscrm.ProcessControlShared.ObjectModels
            .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                .getCandidateTraversedPath(this.$1_0.get_defaultPathManager().get_defaultPath(), $v_1.get_stageId()));
        this.setActiveStage(this.$1_0.canAdvance($v_0), $v_1.get_stageId(), $v_2, true, true);
    },

    $6N_0: function() {
        this.preBackAction();
        var $v_0 = this.$1_0.get_localActiveStage();
        var $v_1 = this.$1_0.getStageStepByStageId(this.$1_0.get_defaultPathManager()
            .getPreviousStage($v_0.get_stageId()));
        ProcessControl.Services.DebugService.assert(!!$v_1, 'Can\'t go back from the first stage');
        var $v_2 = new Mscrm.ProcessControlShared.ObjectModels
            .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                .getCandidateTraversedPath(this.$1_0.get_defaultPathManager().get_defaultPath(), $v_1.get_stageId()));
        this.setActiveStage(this.$1_0.canGoBack($v_0), $v_1.get_stageId(), $v_2, false, true);
    },

    $7f_0: function($p0, $p1) {
        this.$1S_0.remove_stageSetEvent(this.$$d_$7f_0);
        ProcessControl.Services.DebugService.assert(!IsNull($p1.results), 'the result from save action cannot be null');
        var $v_0 = $p1.results;
        var $v_1 = ($v_0.advance) ? 'AdvanceStageTaskCompleted' : 'BackStageTaskCompleted';
        if ($p1.get_isError()) {
            this.$60_0($v_1, $p1.error);
        } else {
            this.$8r_0($v_1, $v_0.stageId, $v_0.traversedPath);
        }
        if ($v_0.advance) {
            this.postAdvanceAction();
            this.$87_0();
        } else {
            this.postBackAction();
            this.$88_0();
        }
        Mscrm.InlineEditDataServiceProxy
            .set_processControlClientApiUserHandler(Mscrm.ProcessControlClientApiUserHandler.get_instance());
    },

    $8r_0: function($p0, $p1, $p2) {
        if (!IsNull(this.$1_0.get_pendingActiveStage())) {
            this.$1_0.set_pendingActiveStage(null);
        }
        this.$1_0.set_localTraversedPathAndActiveStageInfo(new Mscrm.ProcessControlShared.ObjectModels
            .PathAndStageInfo($p2, this.$1_0.getStageStepByStageId($p1)));
        if (!IsNull(this.$1_0.get_globalTraversedPathAndActiveStage()) &&
            !IsNull(this.$1_0.get_globalTraversedPathAndActiveStage().get_traversedPath())) {
            this.$8T_0($p2, this.$1_0.get_globalTraversedPathAndActiveStage().get_traversedPath());
        }
        this.$1_0.set_globalTraversedPathAndActiveStage(new Mscrm.ProcessControlShared.ObjectModels
            .PathAndStageInfo($p2, this.$1_0.getStageStepByStageId($p1)));
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = this.$1_0.get_localTraversedPathAndActiveStageInfo();
        $v_0.error = 0;
        this.$P_0($p0, $v_0);
        return false;
    },

    $8T_0: function($p0, $p1) {
        if (!IsNull($p0) && !IsNull($p0.get_path()) && !IsNull($p1) && !IsNull($p1.get_path())) {
            var $v_0 = Mscrm.ProcessControlShared.ObjectModels.TraversedPath.getPathDifference($p0, $p1);
            var $v_1 = this.$5T_0($v_0);
            var $v_2 = this.$5T_0($p0);
            var $$t_7 = this;
            Array.forEach($v_2,
                function($p1_0) {
                    Array.remove($v_1, $p1_0);
                });
            var $$t_8 = this;
            Array.forEach($v_1,
                function($p1_0) {
                    delete $$t_8.$1_0.get_navigationEntitiesDictionary()[$p1_0];
                });
        }
    },

    $5T_0: function($p0) {
        var $v_0;
        if (isNullOrEmptyString($p0.get_path())) {
            $v_0 = new Array(0);
        } else {
            $v_0 = $p0.get_path().split(',');
        }
        var $v_1 = [];
        for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            var $v_3 = this.$1_0.getStageStepByStageId($v_2);
            var $v_4 = this.$1_0.findStageEntity($v_3);
            if (!IsNull($v_4)) {
                if (!Array.contains($v_1, $v_4.get_EntityLogicalName())) {
                    Array.add($v_1, $v_4.get_EntityLogicalName());
                }
            }
        }
        return $v_1;
    },

    $87_0: function() {
        if (this.$1f_0.length > 0) {
            Mscrm.ProcessControlClientApiUserHandler.get_instance().set_moveNextInvoked(true);
            for (var $v_0 = 0; $v_0 < this.$1f_0.length; $v_0++) {
                var $v_1 = this.$1f_0[$v_0];
                Mscrm.ProcessControlClientApiUserHandler.get_instance().attachMoveNextCallbacks($v_1);
            }
            Array.clear(this.$1f_0);
        }
    },

    $88_0: function() {
        if (this.$1h_0.length > 0) {
            Mscrm.ProcessControlClientApiUserHandler.get_instance().set_setActiveStageInvoked(true);
            for (var $v_0 = 0; $v_0 < this.$1h_0.length; $v_0++) {
                var $v_1 = this.$1h_0[$v_0];
                Mscrm.ProcessControlClientApiUserHandler.get_instance().attachSetActiveStageCallbacks($v_1);
            }
            Array.clear(this.$1h_0);
        }
        if (this.$1g_0.length > 0) {
            Mscrm.ProcessControlClientApiUserHandler.get_instance().set_movePreviousInvoked(true);
            for (var $v_2 = 0; $v_2 < this.$1g_0.length; $v_2++) {
                var $v_3 = this.$1g_0[$v_2];
                Mscrm.ProcessControlClientApiUserHandler.get_instance().attachMovePreviousCallbacks($v_3);
            }
            Array.clear(this.$1g_0);
        }
    },

    $60_0: function($p0, $p1) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = null;
        $v_0.error = $p1;
        this.$P_0($p0, $v_0);
        return false;
    }
}


ProcessControl.Services.ControlDataService = function(controlData) {
    this.$l_0 = {};
    ProcessControl.Services.DebugService.assert(!Mscrm.InternalUtilities._Script.isNullOrUndefined(controlData),
        'Expected control data to exist.');
    this.$W_0 = controlData._processId;
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(controlData._globalNavigationData)) {
        this.$1D_0 = controlData._globalNavigationData.businessProcessInstanceId;
    }
    var $v_0 = ProcessControl.StopwatchFactory
        .createStopwatch('ProcessControl.ControlDataService.InitializeWorkflowStep');
    $v_0.start();
    this.$O_0 = Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.initializeFrom(controlData._processStages);
    $v_0.stop();
    var $v_1 = ProcessControl.StopwatchFactory
        .createStopwatch('ProcessControl.ControlDataService.InitializeBpfVisitor');
    $v_1.start();
    this.$7B_0();
    $v_1.stop();
    this.$7H_0();
}
ProcessControl.Services.ControlDataService.getFirstEntityStepInProcess = function(process) {
    if (process) {
        for (var $v_0 = 0; $v_0 < process.get_Steps().get_Count(); $v_0++) {
            var $v_1 = process.get_Steps().get_item($v_0);
            if (Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_1)) {
                return $v_1;
            }
        }
    }
    return null;
}
ProcessControl.Services.ControlDataService.prototype = {
    $W_0: null,
    $2p_0: null,
    $1E_0: null,
    $1D_0: null,
    $4Q_0: null,
    $2m_0: 0,
    $26_0: null,
    $1j_0: null,
    $27_0: null,

    get_currentEntityId: function() {
        return this.$2p_0;
    },

    get_activeStageStartedOn: function() {
        return this.$26_0;
    },

    get_bpfInstanceCreatedOn: function() {
        return this.$1j_0;
    },

    get_bpfInstanceCompletedOn: function() {
        return this.$27_0;
    },

    get_currentEntityLogicalName: function() {
        return this.$1E_0;
    },

    get_businessProcessInstanceId: function() {
        return this.$1D_0;
    },

    set_businessProcessInstanceId: function(value) {
        this.$1D_0 = value;
        return value;
    },

    get_businessProcessInstanceName: function() {
        return this.$4Q_0;
    },

    get_businessProcessInstanceState: function() {
        return this.$2m_0;
    },

    set_businessProcessInstanceState: function(value) {
        this.$2m_0 = value;
        return value;
    },

    $2n_0: 0,

    get_businessProcessInstanceStatus: function() {
        return this.$2n_0;
    },

    set_businessProcessInstanceStatus: function(value) {
        this.$2n_0 = value;
        return value;
    },

    $4P_0: null,
    $2O_0: null,
    $r_0: null,

    get_globalTraversedStageInfoDeferred: function() {
        return this.$r_0;
    },

    $C_0: null,

    get_globalActiveStage: function() {
        return this.$C_0;
    },

    $S_0: null,

    get_globalTraversedPathAndActiveStage: function() {
        return this.$S_0;
    },

    set_globalTraversedPathAndActiveStage: function(value) {
        this.$S_0 = value;
        this.$C_0 = this.$S_0.get_stage();
        this.$3C_0 = this.$9_0.get_EntityLogicalName() ===
            this.findStageEntity(this.$S_0.get_stage()).get_EntityLogicalName();
        this.$r_0.resolve(this.$S_0);
        this.adjustLocalActiveStage(this.$S_0.get_stage(), this.$S_0.get_traversedPath());
        return value;
    },

    $w_0: null,

    get_businessProcessFlowVisitor: function() {
        return this.$w_0;
    },

    set_businessProcessFlowVisitor: function(value) {
        this.$w_0 = value;
        return value;
    },

    $K_0: null,

    get_defaultPathManager: function() {
        return this.$K_0;
    },

    set_defaultPathManager: function(value) {
        this.$K_0 = value;
        return value;
    },

    $1V_0: null,

    get_stages: function() {
        return this.$1V_0;
    },

    set_stages: function(value) {
        this.$1V_0 = value;
        return value;
    },

    $1C_0: null,

    get_stageStepArray: function() {
        return this.$1C_0;
    },

    $2i_0: null,

    get_stageStepsByStageId: function() {
        return this.$2i_0;
    },

    set_stageStepsByStageId: function(value) {
        this.$2i_0 = value;
        return value;
    },

    $19_0: null,

    get_navigationEntities: function() {
        return this.$19_0;
    },

    get_navigationEntitiesDictionary: function() {
        return this.$l_0;
    },

    set_navigationEntitiesDictionary: function(value) {
        this.$l_0 = value;
        return value;
    },

    $1Q_0: 0,

    get_navigationEntitiesDictionaryCount: function() {
        return this.$1Q_0;
    },

    set_navigationEntitiesDictionaryCount: function(value) {
        this.$1Q_0 = value;
        return value;
    },

    $3C_0: false,
    $9_0: null,

    get_currentEntity: function() {
        return this.$9_0;
    },

    set_currentEntity: function(value) {
        this.$9_0 = value;
        return value;
    },

    $2S_0: null,

    get_closedLoopService: function() {
        if (!this.$2S_0) {
            this.$2S_0 = new ProcessControl.Services.ClosedLoopService(this);
        }
        return this.$2S_0;
    },

    set_closedLoopService: function(value) {
        this.$2S_0 = value;
        return value;
    },

    $2Z_0: null,

    get_localTraversedPathAndActiveStageService: function() {
        if (!this.$2Z_0) {
            this.$2Z_0 = new ProcessControl.Services.LocalTraversedPathAndActiveStageService(this);
        }
        return this.$2Z_0;
    },

    set_localTraversedPathAndActiveStageService: function(value) {
        this.$2Z_0 = value;
        return value;
    },

    $2a_0: null,

    get_navigationService: function() {
        if (!this.$2a_0) {
            this.$2a_0 = new ProcessControl.Services.NavigationService();
        }
        return this.$2a_0;
    },

    set_navigationService: function(value) {
        this.$2a_0 = value;
        return value;
    },

    $2W_0: false,

    get_hasValidLocalActiveStage: function() {
        return this.$2W_0;
    },

    set_hasValidLocalActiveStage: function(value) {
        this.$2W_0 = value;
        return value;
    },

    $2V_0: false,

    get_hasLocalActiveStage: function() {
        return this.$2V_0;
    },

    set_hasLocalActiveStage: function(value) {
        this.$2V_0 = value;
        return value;
    },

    $1N_0: null,

    get_initialSelectedStage: function() {
        return this.$1N_0;
    },

    $23_0: null,
    $2c_0: null,

    get_pendingActiveStage: function() {
        return this.$23_0;
    },

    set_pendingActiveStage: function(value) {
        this.$23_0 = value;
        return value;
    },

    get_pendingTraversedPath: function() {
        return this.$2c_0;
    },

    set_pendingTraversedPath: function(value) {
        this.$2c_0 = value;
        return value;
    },

    $L_0: null,

    get_localActiveStage: function() {
        return this.$L_0;
    },

    $Z_0: null,

    get_localTraversedPathAndActiveStageInfo: function() {
        return this.$Z_0;
    },

    set_localTraversedPathAndActiveStageInfo: function(value) {
        this.$Z_0 = value;
        if (!IsNull(value)) {
            this.$L_0 = this.$Z_0.get_stage();
        }
        return value;
    },

    $O_0: null,

    get_process: function() {
        return this.$O_0;
    },

    get_processId: function() {
        return this.$W_0;
    },

    $X_0: false,

    get_readOnly: function() {
        return this.$X_0;
    },

    set_readOnly: function(value) {
        this.$X_0 = value;
        return value;
    },

    $G_0: false,

    get_isNew: function() {
        return this.$G_0;
    },

    set_isNew: function(value) {
        this.$G_0 = value;
        return value;
    },

    $2d_0: false,

    get_processIdReset: function() {
        return this.$2d_0;
    },

    initializeFormData: function(formData, isNewUseCase, isReadOnlyUseCase) {
        ProcessControl.Services.DebugService.assert(!Mscrm.InternalUtilities._Script.isNullOrUndefined(formData),
            'Expected formData to exist.');
        ProcessControl.Services.DebugService.assert(!Mscrm.InternalUtilities._Script
            .isNullOrUndefined(formData._processControlDataKey),
            'Expected _processControlDataKey to exist.');
        var $v_0 = formData._processControlDataKey;
        ProcessControl.Services.DebugService.assert(!Mscrm.InternalUtilities._Script
            .isNullOrUndefined($v_0._globalNavigationData),
            'Expected _globalNavigationData to exist.');
        this.$G_0 = isNewUseCase;
        this.$X_0 = isReadOnlyUseCase;
        this.$4P_0 = $v_0._globalNavigationData.activeStageId;
        this.$1D_0 = $v_0._globalNavigationData.businessProcessInstanceId;
        this.$4Q_0 = $v_0._globalNavigationData.businessProcessInstanceName;
        this.$2m_0 = (Microsoft.Crm.Workflow.Utils.StringUtility
                .isNullOrEmpty($v_0._globalNavigationData.businessProcessState))
            ? 0
            : (Number.parseInvariant($v_0._globalNavigationData.businessProcessState));
        this.$2n_0 = (Microsoft.Crm.Workflow.Utils.StringUtility
                .isNullOrEmpty($v_0._globalNavigationData.businessProcessStatus))
            ? 1
            : (Number.parseInvariant($v_0._globalNavigationData.businessProcessStatus));
        this.$2O_0 = new Mscrm.ProcessControlShared.ObjectModels
            .TraversedPath($v_0._globalNavigationData.traversedPath);
        this.$19_0 = $v_0._globalNavigationData.navigationEntities;
        this.$6f_0(this.$19_0);
        this.$8Q_0(formData);
        this.$2p_0 = formData._entity.Id;
        this.$1E_0 = formData._entity.TypeName;
        this.set_localTraversedPathAndActiveStageInfo(this.get_localTraversedPathAndActiveStageService()
            .getTraversedPathAndActiveStage(formData));
        this.$9_0 = this.findStageEntity(this.$Z_0.get_stage());
        this.$7E_0($v_0);
        this.$7F_0();
    },

    completeInitialization: function() {
        if (!this.$1p_0()) {
            this.get_localTraversedPathAndActiveStageService().findOtherEntitiesLocalActiveStage();
        }
    },

    update: function(formData) {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.DataService.Update');
        $v_0.start();
        var $v_1 = this.get_localTraversedPathAndActiveStageService().findLocalTraversedPathAndStageInfo(formData);
        if (!IsNull($v_1)) {
            if (this.$L_0 === this.$C_0) {
                this.set_globalTraversedPathAndActiveStage($v_1);
            }
            this.set_localTraversedPathAndActiveStageInfo($v_1);
        }
        $v_0.stop();
    },

    $7E_0: function($p0) {
        if (!isNullOrEmptyString($p0._globalNavigationData.activeStageStartedOn)) {
            this.$26_0 = this.$4U_0($p0._globalNavigationData.activeStageStartedOn);
        }
        if (!isNullOrEmptyString($p0._globalNavigationData.createdOn)) {
            this.$1j_0 = this.$4U_0($p0._globalNavigationData.createdOn);
        }
        if (!isNullOrEmptyString($p0._globalNavigationData.completedOn)) {
            this.$27_0 = this.$4U_0($p0._globalNavigationData.completedOn);
        }
    },

    $4U_0: function($p0) {
        return new Date(Date.parse($p0));
    },

    $7F_0: function() {
        this.$1N_0 = this.$6p_0();
        if (!this.$1N_0) {
            this.$1N_0 = this.$9_0.get_Steps().get_item(0);
        }
    },

    $7H_0: function() {
        this.$5K_0();
        var $v_0 = new Array(0);
        this.$1C_0 = new Array(0);
        for (var $v_1 = 0; $v_1 < this.$O_0.get_Steps().get_Count(); $v_1++) {
            var $v_2 = this.$O_0.get_Steps().get_item($v_1);
            if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_2))) {
                continue;
            }
            for (var $v_3 = 0; $v_3 < $v_2.get_Steps().get_Count(); $v_3++) {
                var $v_4 = $v_2.get_Steps().get_item($v_3);
                var $v_5 = new Mscrm.ProcessControlShared.ObjectModels.Stage();
                var $v_6 = $v_0.length;
                this.$1C_0[$v_6] = $v_4;
                $v_5.$7A_0(this, $v_4, $v_2, $v_6);
                $v_0[$v_6] = $v_5;
            }
        }
        this.$1V_0 = $v_0;
    },

    updatedActiveStageStartedOn: function() {
        this.$26_0 = new Date();
        this.$27_0 = new Date();
    },

    $7B_0: function() {
        this.$w_0 = new ProcessObjectModel.Visitors.BusinessProcessFlowVisitor();
        this.$w_0.visit(this.$O_0);
        this.$2i_0 = this.$w_0.get_stagesById();
    },

    $5K_0: function() {
        var $v_0 = this.$1V_0;
        if (IsNull($v_0)) {
            return;
        }
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            Mscrm.Utilities.destroyObject($v_0[$v_1]);
        }
    },

    $6f_0: function($p0) {
        var $v_0 = 0;
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            this.$l_0[$v_1.EntityLogicalName] = $v_1;
            $v_0++;
        }
        this.$1Q_0 = $v_0;
    },

    $8Q_0: function($p0) {
        var $v_0 = $p0[ProcessControl.Services.AttributeNames.processId];
        if (!this.$7c_0($v_0)) {
            this.$2d_0 = false;
            return;
        }
        if (IsNull($v_0)) {
            var $v_1 = {};
            $v_1['value'] = '';
            $p0[ProcessControl.Services.AttributeNames.processId] = $v_1;
        }
        this.$2d_0 = true;
    },

    $7c_0: function($p0) {
        return IsNull($p0) || IsNull($p0['value']) || $p0['value'] !== this.$W_0;
    },

    $6p_0: function() {
        if (!IsNull(this.$L_0)) {
            return this.$L_0;
        }
        if (!IsNull(this.$C_0) && this.findStageEntity(this.$C_0) === this.$9_0) {
            return this.$C_0;
        }
        return null;
    },

    fetchGlobalTraversedStageInfo: function() {
        if (!IsNull(this.$r_0)) {
            return this.$r_0;
        }
        this.$r_0 = jQueryApi.jQueryDeferredFactory
            .Deferred(Mscrm.ProcessControlShared.ObjectModels.IPathAndStageInfo,
                Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo);
        if (this.$6Q_0()) {
            return this.$r_0;
        }
        if (this.$19_0.length > 0 && this.$19_0[this.$19_0.length - 1].EntityLogicalName !== this.$1E_0) {
            this.set_globalTraversedPathAndActiveStage(this.$Z_0);
            return this.$r_0;
        }
        if (!this.$2W_0) {
            this.$l_0 = {};
        }
        if (!((this.$1E_0) in this.$l_0)) {
            this.$l_0[this.$1E_0] = this.$2p_0;
            this.$1Q_0++;
        }
        this.set_globalTraversedPathAndActiveStage(this.$Z_0);
        return this.$r_0;
    },

    adjustLocalActiveStage: function(globalActiveStage, globalTraversedPath) {
        if (this.$X_0 || this.$G_0) {
            return;
        }
        if (IsNull(globalActiveStage)) {
            return;
        }
        if (!globalTraversedPath.isInTraversedPath(this.$L_0.get_stageId()) ||
            (this.getEntityStepByStageId(this.$L_0.get_stageId())).get_EntityLogicalName() !==
            this.$9_0.get_EntityLogicalName()) {
            var $v_1 = this.$6q_0(this.$9_0.get_EntityLogicalName(), globalTraversedPath.get_path());
            if (!IsNull($v_1)) {
                this.$L_0 = this.$1N_0 = $v_1;
            }
            return;
        }
        var $v_0 = this.isCompleted(this.$L_0);
        if (!$v_0) {
            return;
        }
        this.$L_0 = this.$1N_0 = this.$9_0.get_Steps().get_item(this.$9_0.get_Steps().get_Count() - 1);
    },

    $6q_0: function($p0, $p1) {
        var $v_0 = null;
        if (!IsNull($p1)) {
            var $v_1 = $p1.split(',');
            for (var $$arr_4 = $v_1, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_2 = $$arr_4[$$idx_6];
                var $v_3 = this.getEntityStepByStageId($v_2);
                if (!IsNull($v_3) && $v_3.get_EntityLogicalName() === $p0) {
                    $v_0 = $v_2;
                }
            }
        }
        if (IsNull($v_0)) {
            return null;
        }
        return this.getStageStepByStageId($v_0);
    },

    $6Q_0: function() {
        var $v_0 = this.getStageByValue(this.$4P_0);
        if (!IsNull($v_0)) {
            if (isNullOrEmptyString(this.$2O_0.get_path())) {
                this.$2O_0 = new Mscrm.ProcessControlShared.ObjectModels
                    .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                        .getCandidateTraversedPathFromStagStep(this.$1C_0, $v_0.get_stageId()));
            }
            var $v_1 = new Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo(this.$2O_0, $v_0);
            this.set_globalTraversedPathAndActiveStage($v_1);
            return true;
        }
        return false;
    },

    isCompleted: function(currentStage) {
        if (!this.$1p_0()) {
            var $v_0 = this.findStageEntity(currentStage);
            if ($v_0 !== this.$9_0) {
                return false;
            }
        }
        for (var $v_1 = 0; $v_1 < this.$O_0.get_Steps().get_Count(); $v_1++) {
            var $v_2 = this.$O_0.get_Steps().get_item($v_1);
            if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_2))) {
                continue;
            }
            for (var $v_3 = 0; $v_3 < $v_2.get_Steps().get_Count(); $v_3++) {
                var $v_4 = $v_2.get_Steps().get_item($v_3);
                if (!IsNull(this.$C_0) && $v_4.get_stageId().toLowerCase() === this.$C_0.get_stageId().toLowerCase()) {
                    return false;
                }
                if ($v_4.get_stageId().toLowerCase() === currentStage.get_stageId().toLowerCase()) {
                    return true;
                }
            }
        }
        ProcessControl.Services.DebugService.assert(false,
            'IsCompleted should have found either the current stage or the global active stage. It should not reach this point.');
        return false;
    },

    isActive: function(stage) {
        var $v_0 = this.getStageStepByStageId(stage.currentStageValue);
        var $v_1 = this.$1p_0();
        return $v_1 && $v_0 === this.$S_0.get_stage();
    },

    isLocalActive: function(stage) {
        var $v_0 = this.getStageStepByStageId(stage.currentStageValue);
        return !IsNull(this.$Z_0) && $v_0 === this.$Z_0.get_stage();
    },

    isEditable: function(stage) {
        return !this.$7V_0(stage);
    },

    getEntityStepByStageIndex: function(stageIndex) {
        var $v_0 = this.getStageByIndex(stageIndex);
        if (IsNull($v_0)) {
            return null;
        }
        return this.findStageEntity($v_0);
    },

    getEntityStepByStageId: function(stageId) {
        var $v_0 = this.getStageStepByStageId(stageId);
        if (IsNull($v_0)) {
            return null;
        }
        return this.findStageEntity($v_0);
    },

    getStageByIndex: function(stageIndex) {
        if (stageIndex < 0 && stageIndex >= this.$1V_0.length) {
            return null;
        }
        var $v_0 = this.getStageStepByStageId(this.$1V_0[stageIndex].currentStageValue);
        if (!IsNull($v_0)) {
            return $v_0;
        }
        return null;
    },

    getStageStepByStageId: function(stageId) {
        if (isNullOrEmptyString(stageId)) {
            return null;
        }
        var $v_0 = this.$2i_0[Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageId)];
        if (IsNull($v_0)) {
            return null;
        }
        return $v_0;
    },

    getStageByValue: function(stageValue) {
        return this.getStageStepByStageId(stageValue);
    },

    stageIndex: function(stage) {
        ProcessControl.Services.DebugService.assert(!IsNull(stage), 'Stage can not be null');
        var $v_0 = Array.indexOf(this.$1C_0, stage);
        if ($v_0 !== -1) {
            return $v_0;
        }
        ProcessControl.Services.DebugService.assert(false, 'Stage is not a part of the current process');
        return 0;
    },

    canAdvance: function(stage) {
        if (!this.$3C_0) {
            return false;
        }
        var $v_0 = this.findStageEntity(stage);
        var $v_1 = $v_0.get_EntityLogicalName() === this.$9_0.get_EntityLogicalName();
        var $v_2 = this.$K_0.getNextStage(stage.get_stageId());
        if (isNullOrEmptyString($v_2)) {
            return false;
        }
        var $v_3 = this.$9_0.get_EntityLogicalName() === this.getEntityStepByStageId($v_2).get_EntityLogicalName();
        return $v_1 && $v_3;
    },

    canSetActive: function(stage) {
        if (!IsNull(this.$C_0)) {
            var $v_0 = this.findStageEntity(stage);
            var $v_1 = this.findStageEntity(this.$C_0);
            if ($v_0.get_EntityLogicalName() === $v_1.get_EntityLogicalName()) {
                return stage === this.$L_0 || this.isCompleted(stage);
            }
        }
        return this.isCompleted(stage) && this.isActionOrphanEnabled(stage);
    },

    canGoBack: function(stage) {
        if (!this.$3C_0) {
            return false;
        }
        var $v_0 = this.findStageEntity(stage);
        var $v_1 = $v_0.get_EntityLogicalName() === this.$9_0.get_EntityLogicalName();
        var $v_2 = this.$K_0.getPreviousStage(stage.get_stageId());
        if (isNullOrEmptyString($v_2)) {
            return false;
        }
        return $v_1;
    },

    isActionOrphanEnabled: function(stage) {
        if (IsNull(stage)) {
            return false;
        }
        if (!this.getEntityStepByStageId(stage.get_stageId())) {
            return false;
        }
        if (this.$7Q_0()) {
            return this.$9_0.get_EntityLogicalName() ===
                this.getEntityStepByStageId(stage.get_stageId()).get_EntityLogicalName();
        }
        return true;
    },

    canNavigate: function(stage) {
        if (!this.$1p_0()) {
            return false;
        }
        var $v_0 = this.findStageEntity(stage);
        var $v_1 = this.$K_0.getNextStage(stage.get_stageId());
        if (isNullOrEmptyString($v_1)) {
            return false;
        }
        var $v_2 = this.$9_0.get_EntityLogicalName() === this.getEntityStepByStageId($v_1).get_EntityLogicalName();
        var $v_3 = $v_0.get_EntityLogicalName() === this.$9_0.get_EntityLogicalName();
        var $v_4 = this.$O_0.get_Steps().indexOf($v_0) > this.$O_0.get_Steps().indexOf(this.$9_0);
        var $v_5 = this.$O_0.get_Steps().indexOf($v_0) === this.$O_0.get_Steps().get_Count() - 1;
        return !$v_2 && $v_3 && !$v_4 && !$v_5;
    },

    $7Q_0: function() {
        var $v_0 = ProcessControl.Services.ControlDataService.getFirstEntityStepInProcess(this.$O_0);
        if (this.$1Q_0 <= 1 &&
            !IsNull($v_0) &&
            !IsNull(this.$9_0) &&
            this.$9_0.get_EntityLogicalName() !== $v_0.get_EntityLogicalName()) {
            return true;
        }
        return false;
    },

    canMoveNextViaClientAPI: function(returnMessage) {
        if (!this.$1p_0() || this.$G_0 || IsNull(this.$C_0)) {
            returnMessage.val = Xrm.ProcessResponse.toString(1);
            return false;
        }
        if (Xrm.Page.data.entity.getIsDirty()) {
            returnMessage.val = Xrm.ProcessResponse.toString(11);
            return false;
        }
        var $v_0 = this.$K_0.getNextStage(this.$C_0.get_stageId());
        if (isNullOrEmptyString($v_0)) {
            returnMessage.val = Xrm.ProcessResponse.toString(8);
            return false;
        }
        var $v_1 = this.findStageEntity(this.$C_0);
        var $v_2 = this.getEntityStepByStageId($v_0);
        if (IsNull($v_1) || IsNull($v_2)) {
            returnMessage.val = Xrm.ProcessResponse.toString(1);
            return false;
        }
        if ($v_1.get_EntityLogicalName() === $v_2.get_EntityLogicalName()) {
            returnMessage.val = Xrm.ProcessResponse.toString(0);
            return true;
        } else {
            returnMessage.val = Xrm.ProcessResponse.toString(10);
            return false;
        }
    },

    canMovePreviousViaClientAPI: function(returnMessage) {
        if (!this.$1p_0() || this.$G_0 || IsNull(this.$C_0)) {
            returnMessage.val = Xrm.ProcessResponse.toString(1);
            return false;
        }
        if (Xrm.Page.data.entity.getIsDirty()) {
            returnMessage.val = Xrm.ProcessResponse.toString(11);
            return false;
        }
        var $v_0 = this.$K_0.getPreviousStage(this.$C_0.get_stageId());
        if (isNullOrEmptyString($v_0)) {
            returnMessage.val = Xrm.ProcessResponse.toString(7);
            return false;
        }
        var $v_1 = this.findStageEntity(this.$C_0);
        var $v_2 = this.getEntityStepByStageId($v_0);
        var $v_3 = this.getStageStepByStageId($v_0);
        if (IsNull($v_1) || IsNull($v_2) || Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
            returnMessage.val = Xrm.ProcessResponse.toString(1);
            return false;
        }
        if (!this.isActionOrphanEnabled($v_3)) {
            returnMessage.val = Xrm.ProcessResponse.toString(1);
            return false;
        } else {
            returnMessage.val = Xrm.ProcessResponse.toString(0);
            return true;
        }
    },

    $7V_0: function($p0) {
        var $v_0 = this.findStageEntity($p0);
        if (!this.$1p_0()) {
            return $v_0 !== this.$9_0;
        }
        var $v_1 = $v_0.get_EntityLogicalName() === this.$9_0.get_EntityLogicalName();
        var $v_2 = !$v_1 && (($v_0.get_EntityLogicalName()) in this.$l_0);
        var $v_3 = this.$X_0;
        return !$v_2 && (!$v_1 || $v_3);
    },

    $1p_0: function() {
        return this.$r_0.state() === 'resolved';
    },

    findStageEntity: function(stage) {
        if (IsNull(stage)) {
            return null;
        }
        var $v_0 = this.$w_0.get_parentEntityStepByStageId()[Microsoft.Crm.Workflow.Utils.StringUtility
            .reduceToCanonicalForm(stage.get_stageId())];
        if (!IsNull($v_0)) {
            return $v_0;
        }
        ProcessControl.Services.DebugService.assert(false, 'Can\'t find stage parent entity');
        return ProcessControl.Services.ControlDataService.getFirstEntityStepInProcess(this.$O_0);
    },

    findNextEntity: function(currentEntityStep) {
        var $v_0 = this.$w_0.get_entities();
        var $v_1 = Array.indexOf($v_0, currentEntityStep);
        if ($v_1 === -1 || $v_1 >= $v_0.length - 1) {
            return null;
        }
        return $v_0[$v_1 + 1];
    }
}


ProcessControl.Services.AttributeNames = function() {
}


ProcessControl.Services.DebugService = function() {
}
ProcessControl.Services.DebugService.assert = function(condition, message) {
    if (Sys.Res === undefined) {
        Mscrm.CrmDebug.assert(condition, message);
    } else {
    }
}


ProcessControl.Services.ImageStripService = function() {
}
ProcessControl.Services.ImageStripService.setStripIcon = function(imageElement, iconPath, altString) {
    var $v_0 = Mscrm.CrmUri.create(iconPath);
    var $v_1 = Mscrm.ImageStrip.getImageInfo($v_0);
    var $v_2 = {};
    $v_2['src'] = $v_1.source;
    $v_2['class'] = $v_1.cssClass;
    if (!IsNull(altString)) {
        $v_2['title'] = altString;
        $v_2['alt'] = altString;
    }
    imageElement.attr($v_2);
}


ProcessControl.Services.ProcessControlInitializer = function(isTurboForm) {
    this.$$d_$7S_0 = Function.createDelegate(this, this.$7S_0);
    this.$$d_$80_0 = Function.createDelegate(this, this.$80_0);
    this.$1y_0 = new ProcessControl.Services.ActionQueue();
    if (IsNull(isTurboForm)) {
        ProcessControl.Services.ProcessControlInitializer.$N = false;
    } else {
        ProcessControl.Services.ProcessControlInitializer.$N = isTurboForm;
    }
}
ProcessControl.Services.ProcessControlInitializer.get_isTurboForm = function() {
    return ProcessControl.Services.ProcessControlInitializer.$N;
}
ProcessControl.Services.ProcessControlInitializer.set_isTurboForm = function(value) {
    ProcessControl.Services.ProcessControlInitializer.$N = value;
    return value;
}
ProcessControl.Services.ProcessControlInitializer.prototype = {
    $2Y_0: false,
    $0_0: null,
    $T_0: null,
    $m_0: null,
    $4x_0: null,

    get_view: function() {
        return this.$T_0;
    },

    set_view: function(value) {
        this.$T_0 = value;
        return value;
    },

    processLayout: function(processControlData, entityMetadata) {
        if (IsNull(processControlData) ||
            IsNull(processControlData._processId) ||
            IsNull(processControlData._processStages)) {
            return this.$T_0;
        }
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.ProcessLayout');
        $v_0.start();
        ProcessControl.Services.PlatformService.$s = 1;
        var $v_1 = new ProcessControl.ClientApi.ProcessObjectBuilder();
        this.$0_0 = new ProcessControl.ViewModels.ProcessControlViewModel(processControlData, entityMetadata, $v_1);
        this.$T_0 = new ProcessControl.Views.ProcessControlView(this.$0_0);
        this.$T_0.processLayout();
        $v_0.stop();
        return this.$T_0;
    },

    initialize: function(formData) {
        if (this.$2Y_0) {
            return this.$T_0;
        }
        if (IsNull(formData._processControlDataKey)) {
            return this.$T_0;
        }
        if (IsNull(formData._processControlDataKey._processStages)) {
            this.$7I_0(formData);
            this.$2Y_0 = true;
            return this.$T_0;
        }
        this.$0_0.initializeFormData(formData, false);
        return this.$T_0;
    },

    $7I_0: function($p0) {
        var $v_0 = $get('header_process_d');
        if (!IsNull($v_0) && !isNullOrEmptyString($p0._processControlDataKey._warning)) {
            this.$m_0 = new ProcessControl.Views.WarningBarView($P_CRM($v_0), null);
            this.$m_0.show($p0._processControlDataKey._warning, 0, false);
        }
    },

    render: function() {
        if (!IsNull(this.$0_0)) {
            this.$0_0.$7C_0();
            this.$T_0.render();
            this.$2Y_0 = true;
            window.IsBusinessProcessPresent = this.$2Y_0;
            refreshRibbon();
        }
    },

    postInitialize: function(entityMetadata) {
        this.$4x_0 = entityMetadata;
        this.$1y_0.push(this.$$d_$80_0, this.$$d_$7S_0);
    },

    $80_0: function() {
        if (this.$0_0.get_noAvailableStages()) {
            return;
        }
        setPerfMarkerTimestamp('StartPostInitializeProcessControlTimestamp');
        this.$T_0.postRender();
        setPerfMarkerTimestamp('FinishPostInitializeProcessControlTimestamp');
    },

    $7S_0: function() {
        return !IsNull(this.$0_0);
    },

    completeInitialization: function() {
        if (this.$0_0.get_noAvailableStages()) {
            return;
        }
        this.$0_0.completeInitialization();
        this.$T_0.completeInitialization();
    },

    dispose: function() {
        Mscrm.Utilities.safeDispose(this.$T_0);
        this.$T_0 = null;
        Mscrm.Utilities.safeDispose(this.$m_0);
        this.$m_0 = null;
        Mscrm.Utilities.safeDispose(this.$0_0);
        this.$0_0 = null;
    }
}


ProcessControl.Services.RefreshFormActionService = function(dataService) {
    ProcessControl.Services.RefreshFormActionService.initializeBase(this, [dataService]);
    ProcessControl.Services.DebugService.assert(ProcessControl.Services.PlatformService.$s === 1,
        'This service is only supported in RefreshForm platform');
}
ProcessControl.Services.RefreshFormActionService.prototype = {
    preAdvanceAction: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker('StartLoadingProcessStageAdvanceTimestamp');
        setPerfMarkerTimestamp('StartLoadingProcessStageAdvanceTimestamp');
        ProcessControl.Services.StageActionService.prototype.preAdvanceAction.call(this);
        this.$5D_1();
    },

    postAdvanceAction: function() {
        ProcessControl.Services.StageActionService.prototype.postAdvanceAction.call(this);
        Mscrm.Performance.PerformanceMarkerManager.get_instance()
            .addMarker('FinishLoadingProcessStageAdvanceTimestamp');
        setPerfMarkerTimestamp('FinishLoadingProcessStageAdvanceTimestamp');
    },

    preBackAction: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker('StartLoadingProcessStageBackTimestamp');
        setPerfMarkerTimestamp('StartLoadingProcessStageBackTimestamp');
        ProcessControl.Services.StageActionService.prototype.preBackAction.call(this);
        this.$5D_1();
    },

    postBackAction: function() {
        ProcessControl.Services.StageActionService.prototype.postBackAction.call(this);
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker('FinishLoadingProcessStageBackTimestamp');
        setPerfMarkerTimestamp('FinishLoadingProcessStageBackTimestamp');
    },

    $5D_1: function() {
        Mscrm.InlineEditUtilitiesProxy.tryCommitActiveControl(false);
    }
}


ProcessControl.Services.RefreshFormSaveService = function(entityLogicalName) {
    ProcessControl.Services.RefreshFormSaveService.initializeBase(this, [entityLogicalName]);
}
ProcessControl.Services.RefreshFormSaveService.$3r = function($p0, $p1) {
    var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($p0.getValue());
    $p1 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($p1);
    return $p1 === $v_0;
}
ProcessControl.Services.RefreshFormSaveService.prototype = {
    get_$d_1: function() {
        return Xrm.Page.getAttribute(this.get_stageAttributeName());
    },

    get_$31_1: function() {
        return Xrm.Page.getAttribute(this.get_traversedPathAttributeName());
    },

    get_$3v_1: function() {
        return Xrm.Page.getAttribute(this.get_processIdAttributeName());
    },

    setStageWithoutSaving: function(stageValue, traversedPath, argument) {
        Mscrm.CrmDebug.assert(!isNullOrEmptyString(stageValue), 'Stage ID was not specified');
        stageValue = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageValue);
        var $v_0 = this.get_$d_1();
        $v_0.setValue(stageValue);
        $v_0.resetInitialValue(stageValue);
        $v_0 = this.get_$31_1();
        $v_0.setValue(traversedPath);
        $v_0.resetInitialValue(traversedPath);
        this.setStageCompleted(0, argument);
    },

    setStageAndSave: function(stageValue, traversedPath, argument) {
        Mscrm.CrmDebug.assert(!isNullOrEmptyString(stageValue), 'Stage ID was not specified');
        stageValue = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageValue);
        if (ProcessControl.Services.RefreshFormSaveService.$3r(this.get_$d_1(), stageValue)) {
            this.setStageCompleted(0, argument);
            return;
        }
        this.get_$d_1().setValue(stageValue);
        this.get_$31_1().setValue(traversedPath);
        this.$5r_1(argument);
    },

    $5r_1: function($p0) {
        var $v_0 = Mscrm.InlineEditDataServiceProxy.get_performDuplicateCheck();
        try {
            Mscrm.InlineEditDataServiceProxy.set_performDuplicateCheck(false);
            var $$t_4 = this, $$t_5 = this;
            Xrm.Page.data.save().then(function($p1_0) {
                    $$t_4.setStageCompleted(0, $p0);
                },
                function($p1_0) {
                    if (!IsNull($p0) && (IsNull($p1_0) || ($p1_0.errorCode) !== -1)) {
                        if (!isNullOrEmptyString(($p0).oldStageId)) {
                            $$t_5.get_$d_1().setValue(($p0).oldStageId);
                        }
                        if (!isNullOrEmptyString(($p0).oldTraversedPath.get_path())) {
                            $$t_5.get_$31_1().setValue(($p0).oldTraversedPath.get_path());
                        }
                    }
                    $$t_5.setStageCompleted(4, $p0);
                });
        } finally {
            Mscrm.InlineEditDataServiceProxy.set_performDuplicateCheck($v_0);
        }
    },

    setProcessWithoutSaving: function(processId) {
        Mscrm.CrmDebug.assert(!isNullOrEmptyString(processId), 'Process ID was not specified');
        processId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(processId);
        this.get_$3v_1().setValue(processId);
        this.get_$3v_1().resetInitialValue(processId);
    },

    setProcessAndSave: function(processId, stageId, traversedPath) {
        Mscrm.CrmDebug.assert(!isNullOrEmptyString(processId), 'Process ID was not specified');
        Mscrm.CrmDebug.assert(!isNullOrEmptyString(stageId), 'Stage ID was not specified');
        processId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(processId);
        stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageId);
        var $v_0 = ProcessControl.Services.RefreshFormSaveService.$3r(this.get_$d_1(), stageId);
        var $v_1 = ProcessControl.Services.RefreshFormSaveService.$3r(this.get_$3v_1(), processId);
        var $v_2 = ProcessControl.Services.RefreshFormSaveService.$3r(this.get_$31_1(), traversedPath);
        if (!$v_0) {
            this.get_$d_1().setValue(stageId);
        }
        if (!$v_1) {
            this.get_$3v_1().setValue(processId);
        }
        if (!$v_2) {
            this.get_$31_1().setValue(traversedPath);
        }
        if ($v_0 && $v_1 && $v_2) {
            this.setStageCompleted(0, null);
            return;
        }
        this.$5r_1(null);
    }
}


ProcessControl.Services.SaveServiceFactory = function() {
}
ProcessControl.Services.SaveServiceFactory.getService = function(entityLogicalName) {
    if (ProcessControl.Services.PlatformService.$s === 1) {
        return new ProcessControl.Services.RefreshFormSaveService(entityLogicalName);
    }
    if (!ProcessControl.Services.PlatformService.$s) {
        return new ProcessControl.Services.EmptySaveService(entityLogicalName);
    }
    ProcessControl.Services.DebugService.assert(false,
        'Unknown platform: ' + ProcessControl.Services.PlatformService.$s);
    return null;
}


ProcessControl.Services.SaveStageService = function(entityLogicalName) {
    this.$6_0 = new Sys.EventHandlerList();
}
ProcessControl.Services.SaveStageService.prototype = {
    get_stageAttributeName: function() {
        return ProcessControl.Services.AttributeNames.stageId;
    },

    get_processIdAttributeName: function() {
        return ProcessControl.Services.AttributeNames.processId;
    },

    get_traversedPathAttributeName: function() {
        return ProcessControl.Services.AttributeNames.traversedPath;
    },

    add_stageSetEvent: function(value) {
        this.$6_0.addHandler('SaveTaskCompleted', value);
    },

    remove_stageSetEvent: function(value) {
        this.$6_0.removeHandler('SaveTaskCompleted', value);
    },

    fireEventHandler: function(eventName, args) {
        if (!this.$6_0) {
            return;
        }
        var $v_0 = this.$6_0.getHandler(eventName);
        if ($v_0) {
            $v_0(this, args);
        }
    },

    setStageCompleted: function(errorCode, argument) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.error = errorCode;
        $v_0.results = argument;
        this.fireEventHandler('SaveTaskCompleted', $v_0);
        return false;
    }
}


ProcessControl.Services.StageActonFactory = function() {
}
ProcessControl.Services.StageActonFactory.getService = function(dataService) {
    if (ProcessControl.Services.PlatformService.$s === 1) {
        return new ProcessControl.Services.RefreshFormActionService(dataService);
    }
    if (!ProcessControl.Services.PlatformService.$s) {
        return new ProcessControl.Services.StageActionService(dataService);
    }
    ProcessControl.Services.DebugService.assert(false,
        'Unknown platform: ' + ProcessControl.Services.PlatformService.$s);
    return null;
}


Type.registerNamespace('ProcessControl.ViewModels');

ProcessControl.ViewModels.ProcessControlViewModel = function(processControlData, entityMetadata, processObjectBuilder) {
    this.$$d_$7k_0 = Function.createDelegate(this, this.$7k_0);
    this.$$d_$7q_0 = Function.createDelegate(this, this.$7q_0);
    this.$$d_$7t_0 = Function.createDelegate(this, this.$7t_0);
    this.$$d_$7p_0 = Function.createDelegate(this, this.$7p_0);
    this.$$d_$7j_0 = Function.createDelegate(this, this.$7j_0);
    this.$$d_$7m_0 = Function.createDelegate(this, this.$7m_0);
    this.$$d_$7s_0 = Function.createDelegate(this, this.$7s_0);
    this.$$d_isActionable = Function.createDelegate(this, this.isActionable);
    this.$$d_$7g_0 = Function.createDelegate(this, this.$7g_0);
    this.$40_0 = -1;
    this.$6_0 = new Sys.EventHandlerList();
    this.$3S_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Function))();
    this.$1k_0 = processControlData;
    ProcessControl.Services.DebugService.assert(!IsNull(this.$1k_0), 'the initial data cannot be null');
    this.$1e_0 = entityMetadata;
    this.$8_0 = this.$1k_0._processControlStrings;
    this.$n_0 = processObjectBuilder;
    var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.ViewModel.initDataService.Building');
    $v_0.start();
    this.$1_0 = new ProcessControl.Services.ControlDataService(this.$1k_0);
    $v_0.stop();
}
ProcessControl.ViewModels.ProcessControlViewModel.prototype = {
    $1k_0: null,
    $y_0: null,
    $3B_0: null,
    $2L_0: null,
    $1_0: null,
    $I_0: null,
    $3A_0: null,
    $2g_0: null,
    $n_0: null,
    $2h_0: false,
    $k_0: null,
    $1B_0: null,
    $3F_0: false,
    $4G_0: false,
    $3h_0: false,
    _disposed: false,
    $7_0: null,

    get_entity: function() {
        return this.$7_0;
    },

    get_$d_0: function() {
        return Xrm.Page.getAttribute(ProcessControl.Services.AttributeNames.stageId);
    },

    get_$1G_0: function() {
        if (!this.$3A_0) {
            this.$3A_0 = new Mscrm.ClientApiEventHandlerList(this.$6_0);
        }
        return this.$3A_0;
    },

    $2A_0: null,

    get_defaultPathManager: function() {
        return this.$1_0.$K_0;
    },

    set_defaultPathManager: function(value) {
        this.$1_0.$K_0 = value;
        return value;
    },

    get_closedLoopService: function() {
        return this.$1_0.get_closedLoopService();
    },

    get_controlDataService: function() {
        return this.$1_0;
    },

    $1e_0: null,
    $2U_0: false,

    get_processId: function() {
        return this.$1_0.$W_0;
    },

    get_entitiesMetadata: function() {
        return this.$1e_0;
    },

    get_stages: function() {
        return this.$1_0.$1V_0;
    },

    get_defaultPath: function() {
        return this.get_defaultPathManager().get_defaultPath();
    },

    get_warning: function() {
        return this.$1k_0._warningCode;
    },

    get_initialWarning: function() {
        return this.$1k_0._warning;
    },

    $8_0: null,

    get_localizedText: function() {
        return this.$8_0;
    },

    get_localActiveStage: function() {
        var $v_0 = this.$1_0.stageIndex(this.$1_0.$L_0);
        return this.get_stages()[$v_0];
    },

    get_globalActiveStage: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.ProcessControlShared.ObjectModels.Stage,
            Mscrm.ProcessControlShared.ObjectModels.Stage);
        var $$t_2 = this, $$t_3 = this;
        this.$1_0.fetchGlobalTraversedStageInfo().then(function($p1_0) {
                $$t_2.$2U_0 = true;
                $v_0.resolve($$t_2.get_stages()[$$t_2.$1_0.stageIndex($p1_0.get_stage())]);
            },
            function() {
                $v_0.reject(null);
            });
        return $v_0;
    },

    get_globalActivePathAndStage: function() {
        return this.$1_0.$S_0;
    },

    get_globalActiveStageHandled: function() {
        return this.$2U_0;
    },

    get_selectedStage: function() {
        this.$2g_0 = this.$2g_0 || this.get_initialSelectedStage();
        return this.$2g_0;
    },

    set_selectedStage: function(value) {
        ProcessControl.Services.DebugService.assert(!IsNull(value), 'Selected stage cannot be empty');
        ProcessControl.Services.DebugService.assert(Array.indexOf(this.get_stages(), value) >= 0,
            'Selected stage must be one of existing stages');
        this.$2g_0 = value;
        return value;
    },

    get_initialSelectedStage: function() {
        var $v_0 = this.$1_0.stageIndex(this.$1_0.$1N_0);
        return this.get_stages()[$v_0];
    },

    get_noAvailableStages: function() {
        return IsNull(this.get_initialSelectedStage());
    },

    $X_0: false,

    get_readOnly: function() {
        return this.$X_0;
    },

    $G_0: false,

    get_isNew: function() {
        return this.$G_0;
    },

    get_navigationEntitiesDictionary: function() {
        return this.$1_0.$l_0;
    },

    get_isSaveStagePending: function() {
        return !IsNull(this.$1_0.$23_0);
    },

    get_activeStageActiveFor: function() {
        if (!IsNull(this.$1_0.$26_0)) {
            var $v_0 = new Date() - this.$1_0.$26_0;
            return this.getHumanTimeFormatFromMilliseconds($v_0);
        }
        return null;
    },

    get_bpfInstanceActiveFor: function() {
        if (!IsNull(this.$1_0.$1j_0)) {
            var $v_0 = new Date() - this.$1_0.$1j_0;
            return this.getHumanTimeFormatFromMilliseconds($v_0);
        }
        return null;
    },

    get_bpfInstanceCompletedIn: function() {
        if (!IsNull(this.$1_0.$27_0) && !IsNull(this.$1_0.$1j_0)) {
            var $v_0 = this.$1_0.$27_0 - this.$1_0.$1j_0;
            return this.getHumanTimeFormatFromMilliseconds($v_0);
        }
        return null;
    },

    getHumanTimeFormatFromMilliseconds: function(milliseconds) {
        var $v_0;
        var $v_1 = Math.floor((milliseconds / 60000) % 60);
        var $v_2 = Math.floor((milliseconds / 3600000) % 24);
        var $v_3 = Math.floor(milliseconds / 86400000);
        var $v_4 = ($v_1 !== 1) ? this.$8_0.minutes : this.$8_0.minute;
        var $v_5 = ($v_2 !== 1) ? this.$8_0.hours : this.$8_0.hour;
        var $v_6 = ($v_3 !== 1) ? this.$8_0.days : this.$8_0.day;
        if ((!$v_3) && (!$v_2) && (!$v_1)) {
            $v_0 = this.$8_0.lessThanOneMinute;
        } else if ((!$v_3) && (!$v_2)) {
            $v_0 = String.format(this.$8_0.lessThanOneHour, $v_1, $v_4);
        } else if ((!$v_3) && ($v_2)) {
            $v_0 = String.format(this.$8_0.lessThanOneDay, $v_2, $v_5);
        } else if (($v_3) && (!$v_2)) {
            $v_0 = String.format(this.$8_0.daysWithNoHours, $v_3, $v_6);
        } else {
            $v_0 = String.format(this.$8_0.moreThanOneDay, $v_3, $v_6, $v_2, $v_5);
        }
        return $v_0;
    },

    add_notification: function(value) {
        this.$6_0.addHandler('NotificationEvent', value);
    },

    remove_notification: function(value) {
        this.$6_0.removeHandler('NotificationEvent', value);
    },

    add_stageGatesVisibilityChanged: function(value) {
        this.$6_0.addHandler('StageGatesVisibilityChangedEvent', value);
    },

    remove_stageGatesVisibilityChanged: function(value) {
        this.$6_0.removeHandler('StageGatesVisibilityChangedEvent', value);
    },

    add_advanceStageTaskCompleted: function(value) {
        this.$6_0.addHandler('AdvanceStageTaskCompleted', value);
    },

    remove_advanceStageTaskCompleted: function(value) {
        this.$6_0.removeHandler('AdvanceStageTaskCompleted', value);
    },

    add_finishProcessTaskCompleted: function(value) {
        this.$6_0.addHandler('FinishProcessTaskCompleted', value);
    },

    remove_finishProcessTaskCompleted: function(value) {
        this.$6_0.removeHandler('FinishProcessTaskCompleted', value);
    },

    add_stageSelectionTaskCompleted: function(value) {
        this.$6_0.addHandler('StageSelectionTaskCompleted', value);
    },

    remove_stageSelectionTaskCompleted: function(value) {
        this.$6_0.removeHandler('StageSelectionTaskCompleted', value);
    },

    add_entityStageChangeTaskCompleted: function(value) {
        this.$6_0.addHandler('EntityStageChangeTaskCompletedEvent', value);
    },

    remove_entityStageChangeTaskCompleted: function(value) {
        this.$6_0.removeHandler('EntityStageChangeTaskCompletedEvent', value);
    },

    add_backStageTaskCompleted: function(value) {
        this.$6_0.addHandler('BackStageTaskCompleted', value);
    },

    remove_backStageTaskCompleted: function(value) {
        this.$6_0.removeHandler('BackStageTaskCompleted', value);
    },

    add_onStageChange: function(value) {
        this.$6_0.addHandler('OnStageChange', value);
    },

    remove_onStageChange: function(value) {
        this.$6_0.removeHandler('OnStageChange', value);
    },

    add_onProcessChange: function(value) {
        this.$6_0.addHandler('OnProcessChange', value);
    },

    remove_onProcessChange: function(value) {
        this.$6_0.removeHandler('OnProcessChange', value);
    },

    add_onProcessStatusChange: function(value) {
        this.$6_0.addHandler('OnProcessStatusChange', value);
    },

    remove_onProcessStatusChange: function(value) {
        this.$6_0.removeHandler('OnProcessStatusChange', value);
    },

    add_onStageSelected: function(value) {
        this.$6_0.addHandler('OnStageSelected', value);
    },

    remove_onStageSelected: function(value) {
        this.$6_0.removeHandler('OnStageSelected', value);
    },

    add_stageAttributeRefreshed: function(value) {
        this.$6_0.addHandler('StageAttributeRefreshedEvent', value);
    },

    remove_stageAttributeRefreshed: function(value) {
        this.$6_0.removeHandler('StageAttributeRefreshedEvent', value);
    },

    add_newEntitySaved: function(value) {
        this.$6_0.addHandler('NewEntitySaved', value);
    },

    remove_newEntitySaved: function(value) {
        this.$6_0.removeHandler('NewEntitySaved', value);
    },

    $P_0: function($p0, $p1) {
        if (!this.$6_0) {
            return;
        }
        var $v_0 = this.$6_0.getHandler($p0);
        if ($v_0) {
            $v_0(this, $p1);
        }
    },

    initializeFormData: function(formData, reinitialize) {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.InitializeViewModel.FormData');
        $v_0.start();
        if (!ProcessControl.Services.ProcessControlInitializer.$N) {
            this.$y_0 = formData;
        }
        this.$7_0 = formData._entity;
        this.$G_0 = isNullOrEmptyString(this.$7_0.Id);
        this.$X_0 = this.$6z_0(formData);
        if (!reinitialize) {
            var $v_2 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.ViewModel.initDataServiceNew');
            $v_2.start();
            this.$3B_0 = formData._formId;
            this.$1_0.initializeFormData(formData, this.$G_0, this.$X_0);
            this.$I_0 = ProcessControl.Services.StageActonFactory.getService(this.$1_0);
            this.$2U_0 = (this.$1_0.fetchGlobalTraversedStageInfo().state() === 'resolved');
            this.$1B_0 = ProcessControl.Services.SaveServiceFactory.getService(this.$7_0.TypeName);
            if (!IsNull(this.$1e_0)) {
                this.$8Y_0(this.$1e_0);
                if (!ProcessControl.Services.ProcessControlInitializer.$N) {
                    this.$7J_0(formData);
                }
            }
            $v_2.stop();
        } else {
            var $v_3 = ProcessControl.StopwatchFactory
                .createStopwatch('ProcessControl.ViewModel.initDataServiceReInit');
            var $v_4 = this.$y_0;
            $v_3.start();
            this.$1_0.$K_0.reinitializeOnTraversedPathChange();
            this.$1_0.$G_0 = this.$G_0;
            this.$1_0.$X_0 = this.$X_0;
            this.$1_0.update(formData);
            if (!ProcessControl.Services.ProcessControlInitializer.$N) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4) && (('_extraParams') in $v_4)) {
                    var $v_5 = $v_4['_extraParams'];
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) && (('processinstanceid') in $v_5)) {
                        this.$1_0.$1D_0 = $v_5['processinstanceid'];
                    }
                }
            }
            $v_3.stop();
        }
        this.$k_0 = formData[ProcessControl.Services.AttributeNames.stageId];
        var $v_1 = this.$1_0.get_navigationService().get_navigationSource();
        if (!IsNull($v_1) && !isNullOrEmptyString(this.$7_0.Id)) {
            this.$5E_0($v_1);
        }
        $v_0.stop();
    },

    $7C_0: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('DefaultPathManagerInitialization');
        $v_0.start();
        var $v_1 = new ProcessControl.Reflow.DefaultPathChangeContext();
        $v_1.set_businessProcessFlowVisitor(this.$1_0.$w_0);
        $v_1.set_workflowStep(this.$1_0.$O_0);
        $v_1.set_currentEntityName(this.$1_0.$1E_0);
        $v_1.set_businessRuleCaller(new ProcessControl.Reflow.WebBusinessRuleCaller());
        this.$1_0.$K_0 = new ProcessControl.Reflow
            .DefaultPathManager(new ProcessControl.Reflow.TraversedPathProvider(this.$1_0), $v_1);
        this.$1_0.$K_0.initializeComplete();
        $v_0.stop();
    },

    $5K_0: function() {
        var $v_0 = this.get_stages();
        if (IsNull($v_0)) {
            return;
        }
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            Mscrm.Utilities.destroyObject($v_0[$v_1]);
        }
    },

    $6z_0: function($p0) {
        var $v_0 = $p0._entitydisabled;
        if (isNullOrEmptyString($v_0)) {
            return false;
        }
        return $v_0 === '1';
    },

    getStageModel: function(stage) {
        return this.$1_0.getStageStepByStageId(stage.currentStageValue);
    },

    getStageByValue: function(stageValue) {
        return this.$1_0.getStageByValue(stageValue);
    },

    isInitialAttributeEmpty: function(attributeName) {
        var $v_0 = this.$y_0[attributeName];
        if (IsNull($v_0)) {
            return true;
        }
        if (!(('value') in $v_0)) {
            return true;
        }
        if (this.$7L_0(attributeName)) {
            return $v_0['raw'] === '0';
        }
        if (this.$7R_0(attributeName) && !isNullOrEmptyString($v_0['raw'])) {
            return parseInt($v_0['raw']) < 0;
        }
        if ((('securedread') in $v_0) && $v_0['securedread'] === '1') {
            return true;
        }
        return isNullOrEmptyString($v_0['value']);
    },

    $8Y_0: function($p0) {
        this.$1e_0 = $p0;
        this.$2L_0 = ((this.$3B_0) in $p0) ? $p0[this.$3B_0] : ((('PrimaryEntity') in $p0) ? $p0['PrimaryEntity'] : {});
    },

    $7L_0: function($p0) {
        var $v_0 = this.$2L_0[$p0];
        if (IsNull($v_0)) {
            return false;
        }
        return $v_0.AttributeType === 'bit';
    },

    $7R_0: function($p0) {
        var $v_0 = this.$2L_0[$p0];
        if (IsNull($v_0)) {
            return false;
        }
        return $v_0.AttributeType === 'picklist';
    },

    get_stageGatesVisible: function() {
        return this.$2h_0;
    },

    set_stageGatesVisible: function(value) {
        this.$2h_0 = value;
        this.$P_0('StageGatesVisibilityChangedEvent', new ProcessControl.Events.TaskCompletionEventArgs());
        return value;
    },

    get_processInstanceId: function() {
        return this.$1_0.get_businessProcessInstanceId();
    },

    set_processInstanceId: function(value) {
        this.$1_0.set_businessProcessInstanceId(value);
        return value;
    },

    get_processInstanceName: function() {
        return this.$1_0.get_businessProcessInstanceName();
    },

    get_businessProcessInstanceState: function() {
        return this.$1_0.get_businessProcessInstanceState();
    },

    get_businessProcessInstanceStatus: function() {
        return this.$1_0.get_businessProcessInstanceStatus();
    },

    checkRequiredCompleted: function() {
        var $v_0 = false;
        for (var $v_1 = 0, $v_2 = -1; $v_1 < this.$1_0.$L_0.get_Steps().get_Count(); $v_1++) {
            var $v_3 = this.$1_0.$L_0.get_Steps().get_item($v_1);
            if (!(Microsoft.Crm.Workflow.ObjectModel.StepStep.isInstanceOfType($v_3))) {
                continue;
            }
            $v_2++;
            if (!$v_3.get_isProcessRequired()) {
                continue;
            } else {
                $v_0 = this.checkIfValueIsEnteredByUser($v_3, $v_2);
                if (!$v_0) {
                    return false;
                }
            }
        }
        return true;
    },

    checkIfValueIsEnteredByUser: function(step, stepIndex) {
        for (var $v_0 = 0; $v_0 < step.get_Steps().get_Count(); $v_0++) {
            var $v_1 = Microsoft.Crm.Workflow.ObjectModel.ControlStep.getControlStep(step.get_Steps().get_item($v_0));
            if ($v_1) {
                var $v_2 = $v_1.get_dataFieldName();
                var $v_3 = (!isNullOrEmptyString($v_2)) ? Xrm.Page.getAttribute($v_2).getValue() : null;
                if (!$v_3) {
                    this.get_localActiveStage().completedSteps[stepIndex] = false;
                    return this.get_localActiveStage().completedSteps[stepIndex];
                }
            } else {
                this.get_localActiveStage().completedSteps[stepIndex] = false;
                return this.get_localActiveStage().completedSteps[stepIndex];
            }
        }
        this.get_localActiveStage().completedSteps[stepIndex] = true;
        return this.get_localActiveStage().completedSteps[stepIndex];
    },

    isActionable: function() {
        return !!this.get_$d_0() && this.$3F_0;
    },

    advanceStage: function(callback) {
        if (Xrm.Page.ui.getFormType() !== 4) {
            this.$I_0.add_advanceStageTaskCompleted(this.$$d_$7g_0);
            this.$I_0.advanceStage(this.$$d_isActionable);
        } else {
            var $v_0 = this.$1_0.$L_0;
            var $v_1 = this.$1_0.getStageStepByStageId(this.$1_0.$K_0.getNextStage($v_0.get_stageId()));
            ProcessControl.Services.DebugService.assert(!!$v_1, 'Can\'t advance after the last stage');
            var $v_2 = (IsNull(callback)) ? null : callback;
            if (!IsNull($v_1)) {
                var $v_3 = new Mscrm.ProcessControlShared.ObjectModels
                    .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                        .getCandidateTraversedPath(this.$1_0.$K_0.get_defaultPath(), $v_1.get_stageId()));
                this.$51_0($v_1.get_stageId(), this.$1_0.findStageEntity($v_1), $v_1, $v_3, false, $v_2, 'Next');
            } else {
                this.$11_0($v_2, 8);
            }
        }
    },

    backStage: function(callback, calledFromUI) {
        var $v_0 = (IsNull(callback)) ? null : callback;
        this.setActiveStage(this.get_defaultPathManager().getPreviousStage(this.getActiveStage().get_stageId()),
            $v_0,
            calledFromUI);
    },

    selectStage: function(stage) {
        this.add_stageSelectionTaskCompleted(this.$$d_$7s_0);
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = stage;
        this.$P_0('StageSelectionTaskCompleted', $v_0);
    },

    entityStageChange: function() {
        this.add_entityStageChangeTaskCompleted(this.$$d_$7m_0);
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        this.$P_0('EntityStageChangeTaskCompletedEvent', $v_0);
    },

    setActiveStage: function(stageId, callback, calledFromUI) {
        var $v_0 = this.$1_0.$C_0;
        var $v_1 = this.$1_0.getStageByValue(stageId);
        this.set_selectedStage(this.convertModelViewModel($v_1));
        if ($v_0.get_stageId() === stageId) {
            if (!this.$1_0.canSetActive($v_1)) {
                this.$11_0(callback, 1);
                return;
            }
            this.$11_0(callback, 0);
            return;
        }
        if (isNullOrEmptyString(stageId) || this.$G_0 || IsNull($v_1) || !this.$1_0.isActionOrphanEnabled($v_1)) {
            this.$11_0(callback, 1);
            return;
        }
        var $v_2 = Mscrm.ProcessControlShared.ObjectModels.TraversedPath
            .isInDefaultActivePath(this.get_defaultPathManager().get_defaultPath(), stageId);
        if (!$v_2) {
            this.$11_0(callback, 2);
            return;
        }
        var $v_3 = new Mscrm.ProcessControlShared.ObjectModels
            .TraversedPath(Mscrm.ProcessControlShared.ObjectModels.TraversedPath
                .getCandidateTraversedPath(this.get_defaultPathManager().get_defaultPath(), stageId));
        var $v_4 = this.$1_0.findStageEntity($v_1);
        var $v_5 = this.get_globalActivePathAndStage().get_traversedPath().isInTraversedPath(stageId);
        Mscrm.InlineEditUtilitiesProxy.tryCommitActiveControl(false);
        if ($v_5 && (calledFromUI || !Xrm.Page.data.entity.getIsDirty())) {
            this.addSetActiveStageCallback(callback);
            var $v_6 = Xrm.Page.ui.getFormType() === 4;
            var $v_7 = $v_4.get_EntityLogicalName() !==
                this.$1_0.findStageEntity(this.$1_0.$C_0).get_EntityLogicalName();
            if (!$v_7 && !$v_6) {
                this.$I_0.add_backStageTaskCompleted(this.$$d_$7j_0);
                if (!this.$I_0.setActiveStage(true, stageId, $v_3, false, true)) {
                    this.$11_0(callback, 1);
                    return;
                }
            } else {
                this.$51_0(stageId, $v_4, $v_1, $v_3, $v_7, callback, 'Previous');
            }
        } else {
            if (!$v_5) {
                this.$11_0(callback, 1);
            } else {
                this.$11_0(callback, 11);
            }
        }
    },

    $51_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = this.$1_0.$l_0[$p1.get_EntityLogicalName()];
        if (!IsNull($v_0)) {
            var $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_0.Id);
            if (Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty($v_1.toString()) && !$p4) {
                $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(Xrm.Page.data.entity.getId());
            }
            var $v_2 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p2.get_stageId());
            if (!$p4) {
                if ($p6 === 'Next') {
                    this.$I_0.add_advanceStageTaskCompleted(this.$$d_$7g_0);
                } else {
                    this.$I_0.add_backStageTaskCompleted(this.$$d_$7j_0);
                }
            }
            var $$t_E = this;
            var $v_3 = function($p1_0, $p1_1) {
                var $v_4 = new ProcessControl.Events.TaskCompletionEventArgs();
                $v_4.results = ($$t_E.$1_0.$S_0) ? $$t_E.$1_0.$S_0.get_stage() : null;
                if ($p1_0.Success && $$t_E.$I_0.setActiveStage(true, $p0, $p3, $p6 === 'Next', false)) {
                    $$t_E.fireStageChangeEvent($v_4, $p6);
                    if ($p4) {
                        $$t_E.navigateToEntity($p1.get_EntityLogicalName(), $v_1.toString());
                    } else {
                        $$t_E.$11_0($p5, 0);
                    }
                } else {
                    if ($p6 === 'Next') {
                        $$t_E.$I_0.remove_advanceStageTaskCompleted($$t_E.$$d_$7g_0);
                    } else {
                        $$t_E.$I_0.remove_backStageTaskCompleted($$t_E.$$d_$7j_0);
                    }
                    $$t_E.$11_0($p5, 1);
                    return;
                }
            };
            this.$3k_0($v_1.toString(),
                $p1.get_EntityLogicalName(),
                this.$1_0.$W_0,
                this.$1_0.$1D_0,
                $v_2.toString(),
                $p3.get_path(),
                $v_3);
        }
    },

    $11_0: function($p0, $p1) {
        if (!IsNull($p0)) {
            $p0(Xrm.ProcessResponse.toString($p1));
        }
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = null;
        $v_0.error = 3;
        this.$P_0('BackStageTaskCompleted', $v_0);
    },

    finishProcess: function() {
        if (Xrm.Page.ui.getFormType() !== 4) {
            Xrm.Page.data.process.completeProcess();
        }
    },

    $8V_0: function() {
        if (!this.checkRequiredCompleted()) {
            this.showStageGatingMessageBar();
            return;
        }
        var $v_0 = Mscrm.InlineEditDataServiceProxy.get_performDuplicateCheck();
        try {
            Mscrm.InlineEditDataServiceProxy.set_performDuplicateCheck(false);
            var $$t_4 = this, $$t_5 = this;
            Xrm.Page.data.save().then(function($p1_0) {
                    $$t_4.executeUpdateBusinessProcessFlowStateCommand(1, 2, $$t_4.$2B_0(1, 2, null));
                },
                function($p1_0) {
                    var $v_1 = new ProcessControl.Events.TaskCompletionEventArgs();
                    $v_1.error = $p1_0.errorCode;
                    $v_1.errorMessage = $p1_0.message;
                    $$t_5.$P_0('FinishProcessTaskCompleted', $v_1);
                });
        } finally {
            Mscrm.InlineEditDataServiceProxy.set_performDuplicateCheck($v_0);
        }
    },

    $7z_0: function($p0) {
        var $v_0 = 0;
        var $v_1 = '';
        if (!$p0) {
            $v_0 = 5;
        }
        var $v_2 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_2.error = $v_0;
        $v_2.errorMessage = $v_1;
        this.$P_0('FinishProcessTaskCompleted', $v_2);
    },

    abandonProcess: function() {
        if (this.get_businessProcessInstanceStatus() !== 3) {
            this.executeUpdateBusinessProcessFlowStateCommand(1, 3, this.$2B_0(1, 3, null));
        }
    },

    completeProcess: function() {
        if (this.get_businessProcessInstanceStatus() !== 2) {
            this.$8V_0();
        }
    },

    reactivateProcess: function() {
        if (this.get_businessProcessInstanceStatus() !== 1) {
            this.executeUpdateBusinessProcessFlowStateCommand(0, 1, this.$2B_0(0, 1, null));
        }
    },

    $2B_0: function($p0, $p1, $p2) {
        var $$t_7 = this;
        var $v_0 = function($p1_0, $p1_1) {
            var $v_1 = $p1_0.Success;
            if ($p1 === 2) {
                $$t_7.$7z_0($v_1);
            }
            if ($v_1) {
                $$t_7.fireProcessStatusChangeEvent(Xrm.BusinessProcessFlowInstanceStatus.toString($p1));
                $$t_7.initializeStateAndStatus($p0, $p1);
                if ($p2) {
                    $p2(Xrm.BusinessProcessFlowInstanceStatus.toString($p1));
                }
                Xrm.Page.data.refresh(false);
            } else {
                if ($p2) {
                    $p2('invalid');
                }
            }
        };
        return $v_0;
    },

    executeUpdateBusinessProcessFlowStateCommand: function(state, status, callback) {
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(this.$7_0.Id);
        var $v_1 = new RemoteCommand('ProcessControl', 'UpdateBusinessProcessFlowState', null);
        $v_1.SetParameter('entityLogicalName', this.$1_0.$1E_0);
        $v_1.SetParameter('entityId', $v_0);
        $v_1.SetParameter('state', state);
        $v_1.SetParameter('status', status);
        $v_1.SetParameter('bpfInstanceId', this.$1_0.$1D_0);
        $v_1.Execute(callback);
    },

    setStatus: function(newStatus, callback) {
        var $v_0 = newStatus.toLowerCase();
        if (Xrm.BusinessProcessFlowInstanceStatus.toString(this.get_businessProcessInstanceStatus()).toLowerCase() !==
            newStatus.toLowerCase()) {
            if ($v_0 === Xrm.BusinessProcessFlowInstanceStatus.toString(1).toLowerCase()) {
                this.executeUpdateBusinessProcessFlowStateCommand(0, 1, this.$2B_0(0, 1, callback));
            } else if ($v_0 === Xrm.BusinessProcessFlowInstanceStatus.toString(3).toLowerCase()) {
                this.executeUpdateBusinessProcessFlowStateCommand(1, 3, this.$2B_0(1, 3, callback));
            } else if ($v_0 === Xrm.BusinessProcessFlowInstanceStatus.toString(2).toLowerCase()) {
                this.executeUpdateBusinessProcessFlowStateCommand(1, 2, this.$2B_0(1, 2, callback));
            }
        }
    },

    initializeStateAndStatus: function(state, status) {
        this.$1_0.$2m_0 = state;
        this.$1_0.$2n_0 = status;
    },

    $3k_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = new RemoteCommand('ProcessControl', 'ChangeProcessAndStage', null);
        $v_0.SetParameter('currentEntityId', $p0);
        $v_0.SetParameter('currentEntityTypeName', $p1);
        $v_0.SetParameter('newProcessId', $p2);
        $v_0.SetParameter('newProcessInstanceId', $p3);
        $v_0.SetParameter('newStageId', $p4);
        $v_0.SetParameter('traversedPath', $p5);
        $v_0.Execute($p6);
    },

    $7g_0: function($p0, $p1) {
        this.$I_0.remove_advanceStageTaskCompleted(this.$$d_$7g_0);
        var $v_0 = this.$1_0.$C_0;
        this.$63_0($p1);
        var $v_1 = this.$5F_0($p1);
        this.$P_0('AdvanceStageTaskCompleted', $v_1);
        if ($v_0) {
            this.$62_0();
            $p1.results = $v_0;
            this.fireStageChangeEvent($p1, 'Next');
        }
    },

    $7s_0: function($p0, $p1) {
        this.remove_stageSelectionTaskCompleted(this.$$d_$7s_0);
        this.fireStageSelectedEvent($p1);
    },

    $7m_0: function($p0, $p1) {
        this.remove_entityStageChangeTaskCompleted(this.$$d_$7m_0);
        var $v_0 = this.$1_0.$C_0;
        if ($v_0) {
            $p1.results = $v_0;
            this.fireStageChangeEvent($p1, 'Next');
        }
    },

    $7j_0: function($p0, $p1) {
        this.$I_0.remove_backStageTaskCompleted(this.$$d_$7j_0);
        var $v_0 = this.$1_0.$C_0;
        this.$63_0($p1);
        this.$62_0();
        var $v_1 = this.$5F_0($p1);
        this.$P_0('BackStageTaskCompleted', $v_1);
        if ($v_0) {
            $p1.results = $v_0;
            this.fireStageChangeEvent($p1, 'Previous');
        }
    },

    updatedActiveStageStartedOn: function() {
        this.$1_0.updatedActiveStageStartedOn();
    },

    $62_0: function() {
        var $v_0 = this.$1_0.$L_0;
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.get_stageId();
            this.$1_0.$K_0.triggerDefaultPathUpdate($v_1);
            ProcessControl.Reflow.XrmApiCode.callReflowApi(true, null, null);
        }
    },

    $63_0: function($p0) {
        if ($p0.get_isError()) {
            return;
        }
        var $v_0 = $p0.results;
        this.$1_0.set_globalTraversedPathAndActiveStage($v_0);
        var $v_1 = this.$1_0.getEntityStepByStageId($v_0.$1z_0.get_stageId());
        this.$1_0.$9_0 = $v_1;
    },

    $5F_0: function($p0) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.error = $p0.error;
        var $v_1 = $p0.results;
        $v_0.results = this.convertModelViewModel((IsNull($v_1)) ? null : $v_1.$1z_0);
        return $v_0;
    },

    convertModelViewModel: function(stageModel) {
        if (!stageModel) {
            return null;
        }
        var $v_0 = this.$1_0.stageIndex(stageModel);
        return this.get_stages()[$v_0];
    },

    getActiveStage: function() {
        return this.$1_0.$C_0;
    },

    $7U_0: function($p0, $p1) {
        if (!IsNull(this.get_defaultPath()) && Array.indexOf($p1, $p0) > -1) {
            return true;
        }
        return false;
    },

    addSetActiveStageCallback: function(callback) {
        this.$I_0.registerSetActiveStageCallback(callback);
    },

    addMoveNextCallback: function(callback) {
        this.$I_0.registerMoveNextCallback(callback);
    },

    addMovePreviousCallback: function(callback) {
        this.$I_0.registerMovePreviousCallback(callback);
    },

    reflow: function(parentStage, nextStage) {
        if (!isNullOrEmptyString(parentStage) && (this.$1_0.fetchGlobalTraversedStageInfo().state() === 'resolved')) {
            var $v_0 = this.$1_0.$S_0;
            if (!$v_0) {
                return;
            }
            parentStage = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(parentStage);
            if (Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.get_stage().get_stageId()) ===
                parentStage ||
                $v_0.get_traversedPath().get_path().indexOf(parentStage) < 0) {
                this.$1_0.$K_0.updateDefaultPath(parentStage, nextStage);
            }
        }
    },

    getSelectedStage: function() {
        return this.$1_0.getStageStepByStageId(this.get_selectedStage().currentStageValue);
    },

    $7J_0: function($p0) {
        var $v_0 = ProcessControl.ClientApi.LightWeightAttributeManager.get_instance();
        $v_0.set_formData($p0);
        $v_0.set_entityMetadata(this.$2L_0);
    },

    $6L_0: function() {
        this.$3F_0 = true;
        if (this.$1_0.$2d_0) {
            if (this.$G_0) {
                this.$1B_0.setProcessWithoutSaving(this.$1_0.$W_0);
            } else {
                this.$1B_0.add_stageSetEvent(this.$$d_$7p_0);
                var $v_4 = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(this.$1_0.getStageByIndex(0).get_stageId());
                this.$1B_0.setProcessAndSave(this.$1_0.$W_0, $v_4, $v_4);
                return;
            }
        }
        var $v_0 = this.$1_0.$23_0;
        var $v_1 = this.$1_0.$2c_0;
        if (IsNull($v_0)) {
            return;
        }
        var $v_2 = $v_0.get_stageId();
        var $v_3 = this.$6V_0($v_2);
        if ($v_3) {
            this.$I_0.setActiveStage(true, $v_0.get_stageId(), $v_1, true, this.$1_0.$2V_0);
        }
    },

    $7p_0: function($p0, $p1) {
        this.$1B_0.remove_stageSetEvent(this.$$d_$7p_0);
        if ($p1.get_isError()) {
            return;
        }
        this.$3F_0 = true;
    },

    $6V_0: function($p0) {
        ProcessControl.Services.DebugService.assert(!IsNull(this.$k_0), 'the stage attribute cannot be null');
        var $v_0 = this.$k_0['defaultvalue'];
        return $v_0 !== $p0;
    },

    $7G_0: function() {
        if (IsNull(this.get_$d_0())) {
            return;
        }
        var $v_0 = this.get_$d_0().getValue();
        if (!IsNull($v_0)) {
            return;
        }
        this.get_$d_0().setValue(null);
    },

    $2l_0: function() {
        if (IsNull(this.get_$d_0())) {
            return;
        }
        if (ProcessControl.Services.ProcessControlInitializer.$N) {
            Mscrm.TurboForm.Control.CommandService.get_instance().addAfterCommandExecutionHandler(1, this.$$d_$7t_0);
            Mscrm.TurboForm.Control.CommandService.get_instance().addAfterCommandExecutionHandler(208, this.$$d_$7t_0);
        } else {
            Mscrm.InlineEditDataServiceProxy.addFormRefreshedEventHandler(this.$$d_$7q_0);
        }
    },

    unBindEvents: function() {
        if (IsNull(this.get_$d_0())) {
            return;
        }
        if (ProcessControl.Services.ProcessControlInitializer.$N) {
            if (!IsNull(Mscrm.TurboForm.Control.CommandService.get_instance())) {
                Mscrm.TurboForm.Control.CommandService.get_instance()
                    .removeAfterCommandExecutionHandler(1, this.$$d_$7t_0);
                Mscrm.TurboForm.Control.CommandService.get_instance()
                    .removeAfterCommandExecutionHandler(208, this.$$d_$7t_0);
            }
        } else {
            if (!Mscrm.InlineEditDataServiceProxy.get_instanceIsDisposed()) {
                Mscrm.InlineEditDataServiceProxy.removeFormRefreshedEventHandler(this.$$d_$7q_0);
            }
        }
    },

    dispose: function() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        if (!IsNull(this.$I_0)) {
            this.$I_0.remove_advanceStageTaskCompleted(this.$$d_$7g_0);
            this.$I_0.remove_backStageTaskCompleted(this.$$d_$7j_0);
        }
        this.remove_stageSelectionTaskCompleted(this.$$d_$7s_0);
        Mscrm.Utilities.safeDispose(this.$I_0);
        if (!IsNull(this.$1B_0)) {
            this.$1B_0.remove_stageSetEvent(this.$$d_$7p_0);
        }
        if (ProcessControl.Services.ProcessControlInitializer.$N) {
            if (!IsNull(Mscrm.TurboForm.Control.CommandService.get_instance())) {
                Mscrm.TurboForm.Control.CommandService.get_instance()
                    .removeAfterCommandExecutionHandler(1, this.$$d_$7t_0);
                Mscrm.TurboForm.Control.CommandService.get_instance()
                    .removeAfterCommandExecutionHandler(208, this.$$d_$7t_0);
            }
        } else {
            if (!Mscrm.InlineEditDataServiceProxy.get_instanceIsDisposed()) {
                Mscrm.InlineEditDataServiceProxy.removeFormRefreshedEventHandler(this.$$d_$7q_0);
            }
        }
        this.$5K_0();
        this.$6j_0();
        Mscrm.Utilities.destroyObject(this);
    },

    $6j_0: function() {
        Mscrm.ProcessControlClientApiUserHandler.get_instance().unregisterCallbacks();
    },

    completeInitialization: function() {
        this.$1_0.completeInitialization();
        this.$7G_0();
        this.$6L_0();
        this.$2l_0();
    },

    $4o_0: function($p0) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = null;
        $v_0.error = 0;
        this.$P_0($p0, $v_0);
    },

    $7t_0: function($p0) {
        var $v_0 = $p0.get_newFormData();
        if (IsNull($v_0) || IsNull($v_0._entity) || isNullOrEmptyString($v_0._entity.Id)) {
            return;
        }
        this.$3h_0 = (!isNullOrEmptyString($p0.get_saveMode())) && $p0.get_saveMode() === 'saveandclose';
        this.$5i_0($p0.get_command(), $v_0);
        this.$7K_0();
    },

    $7q_0: function($p0, $p1) {
        if (isNullOrEmptyString($p1.get_entityReference().Id)) {
            return;
        }
        this.$5i_0($p1.get_command(), $p1.get_jsonData());
    },

    $5i_0: function($p0, $p1) {
        if ($p0 === 1) {
            if (!this.$G_0) {
                var $v_1;
                var $v_2;
                var $$t_A, $$t_B, $$t_C;
                var $v_3 = (($$t_C = ProcessControl.FormDataUtility
                    .getActiveStageValue(this.$1_0
                        .$1C_0,
                        $p1,
                        ($$t_A = { 'val': $v_2 }),
                        ($$t_B = { 'val': $v_1 }))), $v_2 = $$t_A.val, $v_1 = $$t_B.val, $$t_C);
                $v_3 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_3);
                var $v_4 = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(this.$1_0.$L_0.get_stageId());
                var $v_5 = this.$1_0.$Z_0.get_traversedPath();
                if ($v_1 && $v_4 === $v_3 && $v_5.equals($v_2)) {
                    return;
                }
                this.initializeFormData($p1, true);
                this.$4o_0('StageAttributeRefreshedEvent');
                return;
            }
            this.initializeFormData($p1, true);
            var $v_0 = this.$1_0.get_navigationService().get_navigationSource();
            if (!this.$4G_0 && !IsNull($v_0)) {
                this.$5E_0($v_0);
                return;
            }
            this.$4o_0('NewEntitySaved');
        } else if ($p0 === 208) {
            var $v_6 = Xrm.Page.getAttribute(ProcessControl.Services.AttributeNames.processId);
            if (!IsNull(this.get_$d_0()) &&
                !IsNull($v_6) &&
                IsNull(this.get_$d_0().getValue()) &&
                IsNull($v_6.getValue())) {
                var $v_7 = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(this.$1_0.getStageByIndex(0).get_stageId());
                this.$1B_0.setProcessAndSave(this.$1_0.$W_0, $v_7, $v_7);
            }
            this.initializeFormData($p1, true);
            this.$4o_0('StageAttributeRefreshedEvent');
        }
    },

    $5E_0: function($p0) {
        setPerfMarkerTimestamp('StartNavigateToEntityTimestamp');
        var $v_0 = Xrm.Page.context;
        var $v_1 = new Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase($v_0.getClientUrl());
        if (!IsNull($p0) && !Mscrm.InternalUtilities._String.isNullOrWhiteSpace($p0.$1X_0)) {
            var $v_4 = this.$1_0.getStageStepByStageId($p0.$1X_0);
            this.set_selectedStage(this.convertModelViewModel($v_4));
        }
        var $v_2 = false;
        var $v_3 = false;
        if (this.$3h_0 && $v_1.get_isAsync()) {
            $v_3 = $v_1.get_isAsync();
            $v_2 = true;
            $v_1.set_isAsync(false);
        }
        var $$t_7 = this;
        $v_1.navigateToNextEntity($p0.$1F_0.Id,
            $p0.$1F_0.EntityLogicalName,
            this.$7_0.Id,
            this.$7_0.TypeName,
            $p0.$W_0,
            $p0.$1b_0 || Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString(),
            $p0.$1X_0,
            $p0.$Y_0).then(function($p1_0) {
                setPerfMarkerTimestamp('FinishNavigateToEntityTimestamp');
                if (!$$t_7._disposed && !$$t_7.$3h_0) {
                    Mscrm.InlineEditDataServiceProxy.set_infraCallForBookOrReschedule(true);
                    $$t_7.navigateToEntity($$t_7.$7_0.TypeName, $$t_7.$7_0.Id);
                }
            },
            this.$$d_$7k_0);
        if ($v_2) {
            $v_1.set_isAsync($v_3);
        }
        this.$4G_0 = true;
    },

    $7k_0: function($p0) {
        setPerfMarkerTimestamp('FinishNavigateToEntityTimestamp');
        this.error($p0.get_debugErrorMessage());
    },

    isSwitchAcrossCloseLoopEntity: function(newSelectedStage) {
        if (IsNull(this.$1_0.$C_0)) {
            return false;
        }
        if (this.get_selectedStage().entityLogicalName !== newSelectedStage.entityLogicalName) {
            return false;
        }
        if (this.$1_0.$1Q_0 < 2) {
            return false;
        }
        var $v_0 = this.$1_0.getEntityStepByStageIndex(this.get_selectedStage().stageIndex);
        var $v_1 = this.$1_0.getEntityStepByStageIndex(newSelectedStage.stageIndex);
        if ($v_0 === $v_1) {
            return false;
        }
        var $v_2 = Microsoft.Crm.Workflow.Utils.StringUtility
            .reduceToCanonicalForm(this.get_selectedStage().currentStageValue);
        var $v_3 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(newSelectedStage.currentStageValue);
        var $v_4 = Array.indexOf(this.get_defaultPath(), $v_2);
        var $v_5 = Array.indexOf(this.get_defaultPath(), $v_3);
        if ($v_4 === -1 || $v_5 === -1) {
            return false;
        }
        var $v_6 = ($v_4 < $v_5) ? $v_4 : $v_5;
        var $v_7 = ($v_4 < $v_5) ? $v_5 : $v_4;
        for (var $v_8 = $v_6 + 1; $v_8 <= $v_7; $v_8++) {
            var $v_9 = this.get_defaultPath()[$v_8];
            if (this.$1_0.getEntityStepByStageId($v_9).get_EntityLogicalName() !== newSelectedStage.entityLogicalName) {
                return true;
            }
        }
        return false;
    },

    needTransit: function(stage) {
        return stage.entityLogicalName !== this.$7_0.TypeName && ((stage.entityLogicalName) in this.$1_0.$l_0);
    },

    getForwardNavigationRelationshipInfo: function(stage) {
        var $v_0 = this.getStageModel(stage);
        var $v_1 = this.$1_0.findStageEntity($v_0);
        var $v_2 = this.$1_0.$K_0.getNextStage(stage.currentStageValue);
        var $v_3 = this.$1_0.findStageEntity(this.$1_0.getStageStepByStageId($v_2));
        if (IsNull($v_3)) {
            return null;
        }
        var $v_4 = {};
        $v_4['referencedEntityLogicalName'] = $v_1.get_EntityLogicalName();
        $v_4['referencingEntityLogicalName'] = $v_3.get_EntityLogicalName();
        var $v_5 = this.$1_0.$w_0.getRelationshipStep(stage.currentStageValue, $v_2);
        $v_4['referencingEntityAttributeName'] = (!IsNull($v_5)) ? $v_5.get_attributeName() : null;
        return $v_4;
    },

    navigateToEntity: function(navigationEntityLogicalName, navigateToEntityId) {
        var $v_0 = {};
        if (!Mscrm.InternalUtilities._String.isNullOrWhiteSpace(this.get_processId())) {
            $v_0['process'] = this.get_processId();
        }
        if (!Mscrm.InternalUtilities._String.isNullOrWhiteSpace(this.get_processInstanceId())) {
            $v_0['processinstanceid'] = this.get_processInstanceId();
        }
        $v_0['isCrossEntityNavigate'] = true;
        if (!IsNull(this.get_selectedStage()) &&
            !Mscrm.InternalUtilities._String.isNullOrWhiteSpace(this.get_selectedStage().currentStageValue)) {
            $v_0['selectedstageid'] = this.get_selectedStage().currentStageValue;
        }
        Xrm.Utility.openEntityForm(navigationEntityLogicalName, navigateToEntityId, $v_0);
    },

    navigateToCloseLoop: function(closeLoopEntity, currentStageId) {
        var $v_0 = this.$1_0.$K_0.getNextStage(currentStageId);
        var $v_1 = this.$1_0.getStageStepByStageId($v_0);
        var $$t_7 = this;
        var $v_2 = function($p1_0, $p1_1) {
            $$t_7.get_selectedStage().currentStageValue = $v_0;
            $$t_7.navigateToEntity(closeLoopEntity.EntityLogicalName, closeLoopEntity.Id);
        };
        this.$3k_0(closeLoopEntity.Id,
            closeLoopEntity.EntityLogicalName,
            this.$1_0.$W_0,
            this.$1_0.$1D_0,
            $v_1.get_stageId(),
            Mscrm.ProcessControlShared.ObjectModels.TraversedPath
            .getCandidateTraversedPath(this.$1_0.$K_0.get_defaultPath(), $v_0),
            $v_2);
    },

    getProcessInstances: function(responseCallback) {
        var $$t_3 = this, $$t_4 = this;
        $P_CRM.when(this.populateProcessInstancesList()).done(function($p1_0) {
            responseCallback($$t_3.$76_0($p1_0));
        }).fail(function($p1_0) {
            responseCallback(null);
        });
    },

    populateProcessInstancesList: function() {
        if (_Script.isNullOrUndefined(this.$2A_0)) {
            this.$2A_0 = jQueryApi.jQueryDeferredFactory.Deferred(RemoteCommandResult, Mscrm.ErrorInformation);
            var $v_0 = new RemoteCommand('ProcessControl', 'RetrieveMultipleProcessInstances', null);
            $v_0.SetParameter('entityLogicalName', this.$7_0.TypeName);
            $v_0.SetParameter('currentEntityId', this.$7_0.Id);
            var $$t_3 = this;
            $v_0.Execute(function($p1_0, $p1_1) {
                if ($p1_0.Success) {
                    $$t_3.$2A_0.resolve($p1_0.ReturnValue);
                } else {
                    $$t_3.$2A_0.reject($p1_0.ReturnValue);
                }
            });
        }
        return this.$2A_0.promise();
    },

    $76_0: function($p0) {
        var $v_0 = null;
        var $v_1 = null;
        if (!IsNull($p0.toString())) {
            $v_1 = JSON.parse($p0.toString());
        }
        if ($v_1 && $v_1.ProcessInstances && ($v_1.ProcessInstances.length > 0)) {
            $v_0 = {};
            for (var $$arr_3 = $v_1.ProcessInstances, $$len_4 = $$arr_3.length, $$idx_5 = 0;
                $$idx_5 < $$len_4;
                ++$$idx_5) {
                var $v_2 = $$arr_3[$$idx_5];
                var $v_3 = new Mscrm.ProcessControlShared.ObjectModels.BusinessProcessInstance();
                $v_3.ProcessInstanceID = $v_2.ProcessInstanceId;
                $v_3.ProcessDefintionID = $v_2.ProcessDefinitionId;
                $v_3.ProcessDefintionName = $v_2.ProcessDefinitionName;
                $v_3.ProcessInstanceName = $v_2.Title;
                $v_3.StatusCodeName = $v_2.StatusCodeName;
                $v_3.CreatedOn = $v_2.CreatedOn;
                $v_0[$v_3.ProcessInstanceID] = $v_3;
            }
        }
        return $v_0;
    },

    setActiveProcess: function(processId) {
        var $$t_3 = this;
        this.$3k_0(this.$7_0.Id,
            this.$7_0.TypeName,
            processId,
            '',
            '',
            '',
            function($p1_0, $p1_1) {
            });
        this.fireOnProcessChangeEvent();
        return 0;
    },

    setActiveProcessInstance: function(processInstanceId) {
        if (this.get_processInstanceId() === processInstanceId) {
            return 0;
        }
        var $$t_3 = this;
        this.$3k_0(this.$7_0.Id,
            this.$7_0.TypeName,
            '',
            processInstanceId,
            '',
            '',
            function($p1_0, $p1_1) {
                $$t_3.navigateToEntity($$t_3.$7_0.TypeName, $$t_3.$7_0.Id);
            });
        this.fireOnProcessChangeEvent();
        return 0;
    },

    fireOnProcessChangeEvent: function() {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = (this.$1_0.$S_0) ? this.$1_0.$S_0.get_stage() : null;
        this.fireProcessChangeEvent($v_0);
    },

    error: function(message) {
        this.$7e_0(message, true);
    },

    $7e_0: function($p0, $p1) {
        var $v_0 = new ProcessControl.Events.NotificationEventArgs();
        $v_0.message = $p0;
        $v_0.isError = $p1;
        this.$P_0('NotificationEvent', $v_0);
    },

    $7K_0: function() {
        if (Mscrm.ProcessControlClientApiUserHandler.get_instance().get_setActiveStageInvoked()) {
            Mscrm.ProcessControlClientApiUserHandler.get_instance().invokeSetActiveStageClientApiUserHandler();
        } else if (Mscrm.ProcessControlClientApiUserHandler.get_instance().get_moveNextInvoked()) {
            Mscrm.ProcessControlClientApiUserHandler.get_instance().invokeMoveNextClientApiUserHandler();
        } else if (Mscrm.ProcessControlClientApiUserHandler.get_instance().get_movePreviousInvoked()) {
            Mscrm.ProcessControlClientApiUserHandler.get_instance().invokeMovePreviousClientApiUserHandler();
        }
    },

    $6E_0: function($p0, $p1) {
        this.get_$1G_0().addHandler('OnStageChange', $p0, $p1);
    },

    $8D_0: function($p0) {
        this.get_$1G_0().removeHandler('OnStageChange', $p0);
    },

    $6C_0: function($p0, $p1) {
        this.get_$1G_0().addHandler('OnProcessChange', $p0, $p1);
    },

    $8B_0: function($p0) {
        this.get_$1G_0().removeHandler('OnProcessChange', $p0);
    },

    $6D_0: function($p0) {
        this.$3S_0.add($p0);
    },

    $8C_0: function($p0) {
        this.$3S_0.remove($p0);
    },

    $6F_0: function($p0, $p1) {
        this.get_$1G_0().addHandler('OnStageSelected', $p0, $p1);
    },

    $8E_0: function($p0) {
        this.get_$1G_0().removeHandler('OnStageSelected', $p0);
    },

    fireStageChangeEvent: function(eventArgs, direction) {
        var $v_0 = this.$6b_0(eventArgs, direction);
        var $v_1 = this.get_$1G_0().getHandler('OnStageChange');
        if ($v_1) {
            $v_1(this, $v_0);
        }
    },

    fireStageSelectedEvent: function(eventArgs) {
        var $v_0 = this.$6c_0(eventArgs);
        var $v_1 = this.get_$1G_0().getHandler('OnStageSelected');
        if ($v_1) {
            $v_1(this, $v_0);
        }
    },

    fireProcessChangeEvent: function(eventArgs) {
        var $v_0 = this.$6a_0(eventArgs);
        var $v_1 = this.get_$1G_0().getHandler('OnProcessChange');
        if ($v_1) {
            $v_1(this, $v_0);
        }
    },

    fireProcessStatusChangeEvent: function(status) {
        for (var $$arr_1 = this.$3S_0.toArray(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0) {
                $v_0(status);
            }
        }
    },

    $6b_0: function($p0, $p1) {
        var $v_0 = '';
        var $v_1 = null;
        $v_0 = $p1;
        var $v_2 = $p0.results;
        var $v_3 = this.convertModelViewModel($v_2);
        var $v_4 = new ProcessControl.ClientApi.ProcessObjectBuilder();
        var $v_5 = ($v_3.get_active()) ? 1 : 0;
        $v_1 = $v_4.processStageBuilder($v_2, $v_3, this.$7_0.TypeName, $v_5);
        var $v_6 = new ProcessControl.Events.ProcessControlEventArgs($v_0, $v_1, null);
        $v_6.error = $p0.error;
        return $v_6;
    },

    $6c_0: function($p0) {
        var $v_0 = $p0.results;
        var $v_1 = this.$1_0.getStageByIndex($v_0.stageIndex);
        var $v_2 = ($v_0.get_active()) ? 1 : 0;
        var $v_3 = this.$n_0.processStageBuilder($v_1, $v_0, $v_0.entityLogicalName, $v_2);
        var $v_4 = new ProcessControl.Events.ProcessControlEventArgs(null, $v_3, null);
        return $v_4;
    },

    $6a_0: function($p0) {
        var $v_0 = $p0.results;
        var $v_1 = this.$1_0.getStageByIndex((!IsNull($v_0.stageIndex)) ? $v_0.stageIndex : 0);
        var $v_2 = 1;
        var $v_3 = this.$n_0.processStageBuilder($v_1, $v_0, $v_0.entityLogicalName, $v_2);
        var $v_4 = new ProcessControl.Events.ProcessControlEventArgs(null, $v_3, null);
        return $v_4;
    },

    getProcessStages: function() {
        var $v_0 = new Array(this.get_stages().length);
        for (var $v_1 = 0; $v_1 < this.get_stages().length; $v_1++) {
            var $v_2 = 0;
            if (this.$1_0.isActive(this.get_stages()[$v_1])) {
                $v_2 = 1;
            }
            $v_0[$v_1] = this.$n_0.processStageBuilder(this.getStageModel(this.get_stages()[$v_1]),
                this.get_stages()[$v_1],
                this.get_stages()[$v_1].entityLogicalName,
                $v_2);
        }
        return $v_0;
    },

    canMoveNextViaClientAPI: function(returnMessage) {
        return this.$1_0.canMoveNextViaClientAPI(returnMessage);
    },

    canMovePreviousViaClientAPI: function(returnMessage) {
        return this.$1_0.canMovePreviousViaClientAPI(returnMessage);
    },

    checkBusinessProcessFlowInstanceStatus: function(status, bpfStatus) {
        return status === bpfStatus;
    },

    showStageGatingMessageBar: function() {
        this.set_stageGatesVisible(true);
        window.clearTimeout(this.$40_0);
        var $$t_0 = this;
        this.$40_0 = window.setTimeout(function() {
                $$t_0.set_stageGatesVisible(false);
            },
            10000);
    },

    isLastStage: function() {
        var $v_0 = this.$1_0.$L_0;
        return !(this.$1_0.canAdvance($v_0) || this.$1_0.canNavigate($v_0));
    },

    canSetActiveStage: function() {
        var $v_0 = this.$1_0.$L_0;
        var $v_1 = this.getSelectedStage();
        if ($v_0 === $v_1) {
            return false;
        }
        return this.$1_0.canSetActive($v_1);
    },

    isBusinessProcessAborted: function() {
        return this.checkBusinessProcessFlowInstanceStatus(this.$1_0.get_businessProcessInstanceStatus(), 3);
    }
}


Type.registerNamespace('ProcessControl.Views');

ProcessControl.Views.CollapsibleStatus = function() {}
ProcessControl.Views.CollapsibleStatus.prototype = {
    collapsed: 0,
    expanded: 1
}
ProcessControl.Views.CollapsibleStatus.registerEnum('ProcessControl.Views.CollapsibleStatus', false);


ProcessControl.Views.ActionsView = function(viewModel) {
    this.$$d_$7a_1 = Function.createDelegate(this, this.$7a_1);
    this.$$d_$74_1 = Function.createDelegate(this, this.$74_1);
    this.$$d_$57_1 = Function.createDelegate(this, this.$57_1);
    this.$$d_$59_1 = Function.createDelegate(this, this.$59_1);
    this.$$d_$58_1 = Function.createDelegate(this, this.$58_1);
    this.$$d_$55_1 = Function.createDelegate(this, this.$55_1);
    this.$$d_$54_1 = Function.createDelegate(this, this.$54_1);
    this.$$d_$79_1 = Function.createDelegate(this, this.$79_1);
    this.$$d_$6g_1 = Function.createDelegate(this, this.$6g_1);
    this.$$d_$6r_1 = Function.createDelegate(this, this.$6r_1);
    this.$$d_$6M_1 = Function.createDelegate(this, this.$6M_1);
    this.$$d_$6J_1 = Function.createDelegate(this, this.$6J_1);
    this.$5a_1 = Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.ProcessUnification);
    this.$40_1 = -1;
    ProcessControl.Views.ActionsView.initializeBase(this, [viewModel]);
    this.$0_1 = viewModel;
    this.$3_1 = $P_CRM('#processActionsContainer');
    this.$H_1 = $P_CRM('#stageBackActionContainer');
    this.$J_1 = $P_CRM('#stageAdvanceActionContainer');
    this.$B_1 = $P_CRM('#stageNavigateActionContainer');
    this.$f_1 = $P_CRM('#stageSetActiveActionContainer');
    this.$R_1 = $P_CRM('#stageFinishActionContainer');
    this.$x_1 = $P_CRM('#finishLabelContainer');
    this.$3P_1 = $P_CRM('#processDuration');
    this.$3Q_1 = $P_CRM('#processName');
    this.$2N_1 = this.$H_1.find('img');
    this.$34_1 = this.$J_1.find('img');
    this.$z_1 = this.$B_1.find('img');
    this.$F_1 = ProcessControl.Views.ProcessControlView.$F;
}
ProcessControl.Views.ActionsView.$6S = function($p0, $p1, $p2) {
    var $v_0 = new Mscrm.ProcessControlShared.ObjectModels.NavigationEntity();
    $v_0.Id = $p2;
    $v_0.EntityLogicalName = $p0;
    $v_0.EntityTypeCode = $p1;
    return $v_0;
}
ProcessControl.Views.ActionsView.prototype = {
    $H_1: null,
    $J_1: null,
    $B_1: null,
    $f_1: null,
    $R_1: null,
    $x_1: null,
    $3Q_1: null,
    $3P_1: null,
    $2N_1: null,
    $34_1: null,
    $z_1: null,
    $18_1: null,
    $k_1: null,
    $F_1: false,
    $E_1: false,
    $0_1: null,
    $3_1: null,

    get_viewContainer: function() {
        return this.$3_1;
    },

    get_dataContext: function() {
        return this.$0_1;
    },

    set_dataContext: function(value) {
        if (!(ProcessControl.ViewModels.ProcessControlViewModel.isInstanceOfType(value))) {
            return value;
        }
        this.$32_1();
        this.$0_1 = value;
        this.$0_1.add_advanceStageTaskCompleted(this.$$d_$6J_1);
        this.$0_1.add_backStageTaskCompleted(this.$$d_$6M_1);
        this.$0_1.add_finishProcessTaskCompleted(this.$$d_$6r_1);
        return value;
    },

    $32_1: function() {
        if (!IsNull(this.$0_1)) {
            this.$0_1.remove_advanceStageTaskCompleted(this.$$d_$6J_1);
            this.$0_1.remove_backStageTaskCompleted(this.$$d_$6M_1);
            this.$0_1.remove_finishProcessTaskCompleted(this.$$d_$6r_1);
        }
    },

    get_containerWidth: function() {
        if (this.$3_1.hasClass('hidden')) {
            return 0;
        }
        var $v_0 = 3;
        return $v_0;
    },

    processLayout: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.ActionsView.Layout');
        $v_0.start();
        this.$2l_1();
        $v_0.stop();
    },

    render: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.ActionsView.Render');
        $v_0.start();
        this.$0_1.get_defaultPathManager().add_defaultPathChanged(this.$$d_$6g_1);
        this.$2z_1(this.$0_1.get_selectedStage());
        this.$64_1();
        $v_0.stop();
    },

    changeActionStatus: function(newStage, switchAcrossCloseLoop) {
        if (switchAcrossCloseLoop) {
            this.$k_1 = this.$6o_1(this.$0_1.get_defaultPath());
            this.$2z_1(this.$k_1);
        } else {
            this.$2z_1(newStage);
        }
    },

    $6o_1: function($p0) {
        var $v_0 = (!IsNull(this.$0_1.get_globalActivePathAndStage()))
            ? this.$0_1.get_globalActivePathAndStage().get_traversedPath().get_path()
            : null;
        var $v_1 = this.$0_1.get_localActiveStage();
        if (isNullOrEmptyString($v_0)) {
            return $v_1;
        }
        var $v_2 = this.$0_1.get_selectedStage();
        var $v_3 = Array.indexOf($p0,
            Microsoft.Crm.Workflow.Utils.StringUtility
            .reduceToCanonicalForm(this.$0_1.get_selectedStage().currentStageValue));
        for (var $v_4 = $v_3 + 1; $v_4 < $p0.length; $v_4++) {
            var $v_5 = this.$0_1.convertModelViewModel(this.$0_1.getStageByValue($p0[$v_4]));
            if ($v_0.indexOf(Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_5.currentStageValue)) <
                0) {
                break;
            }
            if ($v_5 === this.$0_1.get_localActiveStage()) {
                $v_1 = $v_5;
                break;
            }
            if ($v_5.entityLogicalName !== $v_2.entityLogicalName) {
                $v_1 = $v_2;
                break;
            }
            $v_2 = $v_5;
        }
        return $v_1;
    },

    actualDispose: function() {
        this.$8x_1();
        this.$32_1();
        this.$5J_1();
    },

    $8x_1: function() {
        $P_CRM(window).unbind('resize', this.$$d_$79_1);
        this.$J_1.unbind();
        this.$H_1.unbind();
        this.$B_1.unbind();
        this.$f_1.unbind();
        this.$R_1.unbind();
        if (!IsNull(this.$0_1.get_defaultPathManager())) {
            this.$0_1.get_defaultPathManager().remove_defaultPathChanged(this.$$d_$6g_1);
        }
    },

    $2l_1: function() {
        this.$J_1.click(this.$$d_$54_1);
        var $$t_5 = this;
        this.$J_1.keydown(function($p1_0) {
            if ($$t_5.$1o_1($p1_0.which)) {
                $$t_5.$54_1($p1_0);
            }
        });
        this.$H_1.click(this.$$d_$55_1);
        var $$t_6 = this;
        this.$H_1.keydown(function($p1_0) {
            if ($$t_6.$1o_1($p1_0.which)) {
                $$t_6.$55_1($p1_0);
            }
        });
        this.$B_1.click(this.$$d_$58_1);
        var $$t_7 = this;
        this.$B_1.keydown(function($p1_0) {
            if ($$t_7.$1o_1($p1_0.which)) {
                $$t_7.$58_1($p1_0);
            }
        });
        this.$f_1.click(this.$$d_$59_1);
        var $$t_8 = this;
        this.$f_1.keydown(function($p1_0) {
            if ($$t_8.$1o_1($p1_0.which)) {
                $$t_8.$59_1($p1_0);
            }
        });
        this.$R_1.click(this.$$d_$57_1);
        var $$t_9 = this;
        this.$R_1.keydown(function($p1_0) {
            if ($$t_9.$1o_1($p1_0.which)) {
                $$t_9.$57_1($p1_0);
            }
        });
    },

    $6g_1: function($p0, $p1) {
        this.$2z_1(this.$0_1.get_localActiveStage());
        this.$5m_1();
    },

    $1o_1: function($p0) {
        return $p0 === 13;
    },

    $2D_1: function($p0) {
        if (this.$E_1 || this.$12_1($p0) || this.$0_1.isBusinessProcessAborted()) {
            return false;
        }
        if ($p0 === 1) {
            return true;
        }
        if ($p0 === 3) {
            return this.$0_1.get_selectedStage().get_setActive();
        }
        Mscrm.InlineEditUtilitiesProxy.tryCommitActiveControl(false);
        if (!this.$0_1.checkRequiredCompleted()) {
            this.$0_1.showStageGatingMessageBar();
            return false;
        }
        return true;
    },

    $54_1: function($p0) {
        if (!this.$2D_1(0)) {
            return;
        }
        this.$J_1.focus();
        this.$E_1 = true;
        this.$1c_1(this.$J_1, this.$34_1);
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Advance', 'advance button');
        this.$0_1.advanceStage(null);
        $p0.preventDefault();
    },

    $55_1: function($p0) {
        if (!this.$2D_1(1)) {
            return;
        }
        this.$H_1.focus();
        this.$E_1 = true;
        this.$1c_1(this.$H_1, this.$2N_1);
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Back', 'back button');
        this.$0_1.backStage(null, true);
        $p0.preventDefault();
    },

    $59_1: function($p0) {
        if (!this.$2D_1(3)) {
            return;
        }
        this.$J_1.focus();
        this.$E_1 = true;
        this.$1c_1(this.$f_1, this.$2N_1);
        this.$0_1.setActiveStage(this.$0_1.get_selectedStage().currentStageValue, null, true);
        $p0.preventDefault();
    },

    $57_1: function($p0) {
        if (!this.$2D_1(4)) {
            return;
        }
        this.$E_1 = true;
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Finish', 'finish button');
        this.$0_1.finishProcess();
        $p0.preventDefault();
    },

    $58_1: function($p0) {
        if (!this.$2D_1(2) || !this.$0_1.isActionable()) {
            return;
        }
        this.$0_1.entityStageChange();
        this.$B_1.focus();
        this.$E_1 = true;
        this.$1c_1(this.$B_1, this.$z_1);
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Back', 'navigate button');
        this.$1w_1('StartGetNavigateToEntitiesTimestamp');
        var $v_0 = this.$0_1.get_selectedStage().currentStageValue;
        var $v_1 = this.$0_1.get_closedLoopService()
            .findCloseLoopEntity(this.$0_1.get_defaultPathManager().getNextStage($v_0));
        if (!IsNull($v_1)) {
            this.$0_1.navigateToCloseLoop($v_1, $v_0);
            $p0.preventDefault();
            return;
        }
        var $v_2 = this.$0_1.getForwardNavigationRelationshipInfo(this.$0_1.get_selectedStage());
        if (IsNull($v_2)) {
            this.$E_1 = false;
            this.$33_1(this.$B_1, this.$z_1);
            $p0.preventDefault();
            return;
        }
        this.$5q_1($v_2);
        $p0.preventDefault();
    },

    $6r_1: function($p0, $p1) {
        if ($p1.get_isError()) {
            this.$3x_1();
        } else {
            this.$0_1.$1_0.set_businessProcessInstanceStatus(2);
        }
        this.$E_1 = false;
    },

    $5q_1: function($p0) {
        var $v_0 = new Mscrm.RemoteCommandJson('ProcessControl', 'GetForwardNavigationEntities');
        $v_0.setParameter('currentEntityId', this.$0_1.$7_0.Id);
        $v_0.setParameter('referencedEntityLogicalName', $p0['referencedEntityLogicalName']);
        $v_0.setParameter('referencingEntityLogicalName', $p0['referencingEntityLogicalName']);
        $v_0.setParameter('referencingEntityAttributeName', $p0['referencingEntityAttributeName']);
        var $$t_4 = this, $$t_5 = this;
        $v_0.execute().then(function($p1_0) {
                $$t_4.$75_1($p1_0);
                $$t_4.$1w_1('FinishGetNavigateToEntitiesTimestamp');
            },
            function($p1_0) {
                $$t_5.$1w_1('FinishGetNavigateToEntitiesTimestamp');
            });
    },

    $75_1: function($p0) {
        this.$7D_1($p0);
        this.$18_1.show(this.$B_1);
        $P_CRM(window).resize(this.$$d_$79_1);
        var $v_0 = this.$18_1.dialogChrome();
        $v_0.children('.ui-dialog-content').css('min-height', '0px');
        var $v_1 = $P_CRM('#processActionsContainer').offset().left;
        if (Mscrm.Utilities.get_isLeftToRight()) {
            var $v_2 = $v_0.css('left');
            var $v_3 = parseInt($v_2.substr(0, $v_2.length - 2), 10);
            $v_1 = $v_3 - 8 - 1;
        }
        $v_0.css('left', $v_1 + 'px');
        this.$E_1 = false;
        this.$33_1(this.$B_1, this.$z_1);
    },

    $7D_1: function($p0) {
        var $v_0;
        if (!IsNull($p0.NavigationEntities) && $p0.NavigationEntities.length >= 1) {
            $v_0 = this.$6e_1($p0.NavigationEntities,
                $p0.EntityDisplayName,
                $p0.EntityLogicalName,
                $p0.EntityTypeCode,
                $p0.ShowCreate);
        } else {
            $v_0 = this.$6d_1($p0.EntityDisplayName, $p0.EntityLogicalName, $p0.EntityTypeCode, $p0.ShowCreate);
        }
        this.$5J_1();
        this.$18_1 = Mscrm.FlyOutMenu.createFlyOut($v_0);
    },

    $5J_1: function() {
        if (IsNull(this.$18_1)) {
            return;
        }
        this.$18_1.dialogChrome().find('.navigateMenuItem, .navigateMenuCreate').unbind('click');
        this.$18_1.dispose();
    },

    $79_1: function($p0) {
        this.$18_1.hide();
        $P_CRM('body').unbind('resize', this.$$d_$79_1);
    },

    $6d_1: function($p0, $p1, $p2, $p3) {
        var $v_0 = new Mscrm.FlyOutMenuDescriptor();
        $v_0.cssClass = 'processNavigateMenu';
        $v_0.width = 200;
        var $v_1 = new Mscrm.MenuSectionDescriptor();
        $v_1.cssClass = 'navigateMenuSection';
        var $v_2 = new Mscrm.MenuListItemDescriptor();
        $v_2.cssClass = 'navigateMenuItem disabled';
        $v_2.displayName = this.$0_1.$8_0.noRecords;
        $v_2.title = this.$0_1.$8_0.noRecords;
        $v_1.menuListItems = [$v_2];
        $v_0.menuSections = [this.$5H_1($p0), $v_1, this.$5G_1(0, $p1, $p2, $p3)];
        return $v_0;
    },

    $5H_1: function($p0) {
        var $v_0 = new Mscrm.MenuSectionDescriptor();
        $v_0.id = 'navigateHeaderSection';
        $v_0.displayName = this.$0_1.$8_0.selectChild + ' ' + $p0;
        $v_0.cssClass = 'navigateHeaderSection';
        return $v_0;
    },

    $5G_1: function($p0, $p1, $p2, $p3) {
        var $v_0 = new Mscrm.MenuSectionDescriptor();
        $v_0.cssClass = 'navigateFooterSection';
        $v_0.clickHandler = this.$$d_$74_1;
        var $v_1 = new Mscrm.MenuListItemDescriptor();
        var $v_2 = $p0 + ' ' + this.$0_1.$8_0.available;
        $v_1.displayName = $v_2;
        $v_1.title = $v_2;
        $v_1.cssClass = 'navigateAvailableCount';
        var $v_3 = new Mscrm.MenuListItemDescriptor();
        if ($p3 && this.$7M_1(this.$0_1.$7_0.TypeName, $p1)) {
            var $v_4 = $P_CRM(String
                .format('<div class=\'createText\'>{0}</div><div class=\'createImage\'><img/></div>',
                    this.$0_1.$8_0.createNew));
            ProcessControl.Services.ImageStripService
                .setStripIcon($v_4.find('img'), '/_imgs/processcontrol/create_icon.png', this.$0_1.$8_0.createNew);
            $v_3.content = $v_4;
            $v_3.title = this.$0_1.$8_0.createNew;
            $v_3.cssClass = 'navigateMenuCreate';
            $v_3.id = 'bpfNavigateCreate';
            $v_3.data = { Command: 'Create', targetEntityLogicalName: $p1, ETC: $p2 };
        }
        $v_0.menuListItems = [$v_1, $v_3];
        return $v_0;
    },

    $7M_1: function($p0, $p1) {
        if ($p0 === 'quote' && $p1 === 'salesorder') {
            return false;
        }
        if ($p0 === 'lead' && $p1 === 'opportunity') {
            return false;
        }
        return true;
    },

    $6e_1: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = new Mscrm.FlyOutMenuDescriptor();
        $v_0.cssClass = 'processNavigateMenu';
        $v_0.width = 200;
        var $v_1 = new Mscrm.MenuSectionDescriptor();
        $v_1.clickHandler = this.$$d_$74_1;
        $v_1.cssClass = 'navigateMenuSection';
        $v_1.menuListItems = new Array(0);
        var $v_2 = 0;
        for (var $$arr_8 = $p0, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
            var $v_3 = $$arr_8[$$idx_A];
            var $v_4 = new Mscrm.MenuListItemDescriptor();
            var $v_5 = $v_3.PrimaryField;
            var $v_6 = 'navigateMenuItem enabled';
            if (isNullOrEmptyString($v_5)) {
                $v_5 = this.$0_1.$8_0.untitled;
                $v_6 += ' emptyDisplayName';
            }
            $v_4.id = 'entity' + $v_2++;
            $v_4.displayName = $v_5;
            $v_4.title = $v_5;
            $v_4.cssClass = $v_6;
            $v_4.data = {
                Command: 'OpenEntity',
                Id: $v_3.Id,
                ETC: $v_3.EntityTypeCode,
                targetEntityLogicalName: $v_3.EntityLogicalName
            };
            $v_1.menuListItems[$v_1.menuListItems.length] = $v_4;
        }
        $v_0.menuSections = [this.$5H_1($p1), $v_1, this.$5G_1($p0.length, $p2, $p3, $p4)];
        return $v_0;
    },

    $74_1: function($p0) {
        var $v_0 = $p0.data;
        if (!this.$7X_1($v_0)) {
            return;
        }
        $p0.stopImmediatePropagation();
        this.$E_1 = true;
        this.$1c_1(this.$B_1, this.$z_1);
        this.$71_1($v_0);
        this.$E_1 = false;
        this.$33_1(this.$B_1, this.$z_1);
    },

    $71_1: function($p0) {
        switch ($p0['Command']) {
        case 'OpenEntity':
            this.$73_1($p0);
            break;
        case 'Create':
            this.$72_1($p0['targetEntityLogicalName']);
            break;
        }
    },

    $73_1: function($p0) {
        var $v_0 = ProcessControl.Views.ActionsView.$6S($p0['targetEntityLogicalName'], $p0['ETC'], $p0['Id']);
        this.$7Z_1($v_0);
    },

    $7X_1: function($p0) {
        if (IsNull($p0) || !(('Command') in $p0)) {
            return false;
        }
        var $v_0 = $p0['Command'];
        if ($v_0 !== 'OpenEntity' && $v_0 !== 'Create') {
            Mscrm.CrmDebug.assert(false, 'OpenEntity and Create are currently the only commands supported.');
            return false;
        }
        if (!(('targetEntityLogicalName') in $p0)) {
            Mscrm.CrmDebug.assert(false, 'Command should specify an entity logical name to navigate to');
            return false;
        }
        if ($v_0 === 'OpenEntity' && !(('Id') in $p0)) {
            Mscrm.CrmDebug.assert(false, 'OpenEntity command must specify an Id.');
            return false;
        }
        return true;
    },

    $72_1: function($p0) {
        if (isNullOrEmptyString($p0)) {
            return;
        }
        var $v_0 = {};
        $v_0['process'] = this.$0_1.get_processId();
        $v_0['processinstanceid'] = this.$0_1.get_processInstanceId();
        $v_0['navsourcetype'] = this.$0_1.$7_0.TypeName;
        $v_0['_CreateFromId'] = this.$0_1.$7_0.Id;
        $v_0['_CreateFromType'] = this.$0_1.$7_0.TypeCode;
        var $v_1 = this.$0_1.get_defaultPathManager().getNextStage(this.$0_1.get_selectedStage().currentStageValue);
        var $v_2 = Mscrm.ProcessControlShared.ObjectModels.TraversedPath
            .getCandidateTraversedPath(this.$0_1.get_defaultPathManager().get_defaultPath(), $v_1);
        $v_0['_tp'] = $v_2;
        $v_0['_activestage'] = $v_1;
        Xrm.Utility.openEntityForm($p0, null, $v_0);
    },

    $7Z_1: function($p0) {
        this.$1w_1('StartNavigateToEntityTimestamp');
        var $v_0 = Xrm.Page.context;
        var $v_1 = new Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase($v_0.getClientUrl());
        var $v_2 = this.$0_1.get_defaultPathManager().getNextStage(this.$0_1.get_localActiveStage().currentStageValue);
        var $v_3 = Mscrm.ProcessControlShared.ObjectModels.TraversedPath
            .getCandidateTraversedPath(this.$0_1.get_defaultPathManager().get_defaultPath(), $v_2);
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_2)) {
            var $v_4 = this.$0_1.$1_0.getStageStepByStageId($v_2);
            this.$0_1.set_selectedStage(this.$0_1.convertModelViewModel($v_4));
        }
        var $$t_7 = this;
        $v_1.navigateToNextEntity(this.$0_1.$7_0.Id,
            this.$0_1.$7_0.TypeName,
            $p0.Id,
            $p0.EntityLogicalName,
            this.$0_1.get_processId(),
            (Xrm.Internal.isFeatureEnabled('FCB.ProcessUnification'))
            ? (this.$0_1.get_processInstanceId() || Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString())
            : null,
            $v_2,
            $v_3).then(function($p1_0) {
                $$t_7.$1w_1('FinishNavigateToEntityTimestamp');
                $$t_7.$0_1.navigateToEntity($p0.EntityLogicalName, $p0.Id);
            },
            this.$$d_$7a_1);
    },

    $1w_1: function($p0) {
        setPerfMarkerTimestamp($p0);
    },

    $7a_1: function($p0) {
        this.$18_1.hide();
        this.$1w_1('FinishNavigateToEntityTimestamp');
        this.$E_1 = false;
        this.$33_1(this.$B_1, this.$z_1);
        this.$0_1.error($p0.get_debugErrorMessage());
    },

    $5t_1: function($p0, $p1) {
        $p0.attr('src', $p1);
    },

    $4H_1: null,
    $3M_1: null,

    $1c_1: function($p0, $p1) {
        $p0.addClass('loading');
        this.$4H_1 = $p1.attr('src');
        this.$3M_1 = $p1.attr('class');
        $p1.removeClass(this.$3M_1);
        this.$5t_1($p1, '/_imgs/processcontrol/circularpreloader_white_15x15.gif');
        $p1.addClass('stageActionIcon');
    },

    $33_1: function($p0, $p1) {
        $p0.removeClass('loading');
        this.$5t_1($p1, this.$4H_1);
        $p1.attr('class', this.$3M_1);
    },

    $12_1: function($p0) {
        var $v_0 = this.$0_1.get_warning() === 3;
        if ($v_0) {
            return true;
        }
        if (!IsNull(this.$k_1)) {
            var $v_2 = false;
            switch ($p0) {
            case 0:
                $v_2 = !!($v_2 | !this.$k_1.get_advance());
                break;
            case 1:
                $v_2 = !!($v_2 | !this.$k_1.get_back());
                break;
            case 2:
                $v_2 = !!($v_2 | !this.$k_1.get_navigate());
                break;
            case 3:
                $v_2 = false;
                break;
            case 4:
                $v_2 = false;
                break;
            }
            if ($v_2) {
                return true;
            }
        }
        var $v_1 = this.$0_1.get_selectedStage().stageIndex === this.$0_1.get_localActiveStage().stageIndex;
        if ($p0 === 2) {
            var $v_3 = this.$0_1.get_defaultPathManager().getNextStage(this.$0_1.getSelectedStage().get_stageId());
            var $v_4 = this.$0_1.getStageByValue($v_3);
            return this.$0_1.$G_0 ||
                !this.$0_1.get_selectedStage().get_navigate() ||
                !this.$0_1.$1_0.isActionOrphanEnabled($v_4);
        } else if ($p0 === 3) {
            return this.$0_1.$G_0;
        } else if ($p0 === 1) {
            var $v_5 = this.$0_1.get_defaultPathManager().getPreviousStage(this.$0_1.getActiveStage().get_stageId());
            var $v_6 = this.$0_1.getStageByValue($v_5);
            return this.$0_1.$G_0 || !$v_1 || !this.$0_1.$1_0.isActionOrphanEnabled($v_6);
        } else if ($p0 === 4) {
            return !(!this.$0_1.get_defaultPathManager().getNextStage(this.$0_1.getActiveStage().get_stageId()));
        } else {
            return this.$0_1.$G_0 || !$v_1;
        }
    },

    $8K_1: function() {
        this.$J_1.removeClass('loading');
        if (this.$12_1(0) || this.$0_1.isBusinessProcessAborted()) {
            this.$J_1.addClass('disabled');
            this.$J_1.attr('tabindex', '-1');
        } else {
            this.$J_1.removeClass('disabled');
            this.$J_1.attr('tabindex', '1000');
        }
    },

    $8L_1: function() {
        this.$H_1.removeClass('loading');
        if (this.$12_1(1) || this.$0_1.isBusinessProcessAborted()) {
            this.$H_1.addClass('disabled');
            this.$H_1.attr('tabindex', '-1');
        } else {
            this.$H_1.removeClass('disabled');
            this.$H_1.attr('tabindex', '1000');
        }
    },

    $8M_1: function() {
        this.$R_1.removeClass('loading');
        if (this.$12_1(4) || this.$0_1.$7_0.Id === '' || this.$0_1.isBusinessProcessAborted()) {
            this.$R_1.addClass('disabled');
            this.$R_1.attr('tabindex', '-1');
        } else {
            this.$R_1.removeClass('disabled');
            this.$R_1.attr('tabindex', '1000');
        }
    },

    $8P_1: function() {
        this.$B_1.removeClass('loading');
        if (this.$12_1(2) || this.$0_1.isBusinessProcessAborted()) {
            this.$B_1.addClass('disabled');
            this.$B_1.attr('tabindex', '-1');
        } else {
            this.$B_1.removeClass('disabled');
            this.$B_1.attr('tabindex', '1000');
        }
    },

    $8R_1: function() {
        this.$f_1.removeClass('loading');
        if (!this.$2D_1(3) || this.$0_1.isBusinessProcessAborted()) {
            this.$f_1.addClass('disabled');
            this.$f_1.attr('tabindex', '-1');
        } else {
            this.$f_1.removeClass('disabled');
            this.$f_1.attr('tabindex', '1000');
        }
    },

    $8N_1: function() {
        this.$x_1.removeClass('loading');
        if (!this.$0_1.checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2)) {
            this.$x_1.addClass('disabled');
            this.$x_1.attr('tabindex', '-1');
        } else {
            this.$x_1.removeClass('disabled');
            this.$x_1.attr('tabindex', '1000');
        }
    },

    $5m_1: function() {
        this.$3x_1();
        var $v_0 = this.$0_1.get_warning() === 3;
        var $v_1 = $v_0 || this.$12_1(0) && this.$12_1(1) && this.$12_1(2) && this.$12_1(3) && this.$12_1(4);
        if ($v_1) {
            this.$3_1.addClass('disabled');
        } else {
            this.$3_1.removeClass('disabled');
        }
    },

    $3x_1: function() {
        this.$8K_1();
        this.$8L_1();
        this.$8M_1();
        this.$8P_1();
        this.$8R_1();
        this.$8N_1();
    },

    $2z_1: function($p0) {
        this.$k_1 = $p0;
        this.$8h_1();
        this.$8i_1($p0.get_advance());
        this.$8j_1($p0.get_back());
        this.$8n_1($p0.get_navigate());
        this.$8o_1();
        this.$5y_1($p0.get_advance(), $p0.get_navigate(), this.$0_1.get_selectedStage().get_active());
        this.$R_1.addClass('hidden');
        this.$x_1.addClass('hidden');
        var $v_0 = false;
        if (this.$5a_1) {
            this.$5y_1($p0.get_advance(), $p0.get_navigate(), this.$0_1.get_selectedStage().get_active());
            this.$8l_1(this.$0_1.$1_0.get_businessProcessInstanceStatus());
            $v_0 = this.$R_1.hasClass('hidden');
        }
        if ($p0.get_back() &&
            ($p0.get_advance() || $p0.get_navigate() || !$v_0) &&
            this.$0_1.get_selectedStage().get_active()) {
            this.$H_1.addClass('multipleActions');
        } else {
            this.$H_1.removeClass('multipleActions');
        }
        this.$5m_1();
    },

    $8h_1: function() {
        if (Mscrm.Utilities.isIosDevice()) {
            this.$H_1.addClass('stageBackActionContainerForIOS');
            this.$J_1.addClass('stageAdvanceActionContainerForIOS');
            this.$B_1.addClass('stageNavigateActionContainerForIOS');
            this.$R_1.addClass('stageFinishActionContainerForIOS');
        } else {
            this.$H_1.removeClass('stageBackActionContainerForIOS');
            this.$J_1.removeClass('stageAdvanceActionContainerForIOS');
            this.$B_1.removeClass('stageNavigateActionContainerForIOS');
            this.$R_1.removeClass('stageFinishActionContainerForIOS');
        }
    },

    $8i_1: function($p0) {
        if ($p0 && this.$0_1.get_selectedStage().get_active()) {
            this.$J_1.removeClass('hidden');
        } else {
            this.$J_1.addClass('hidden');
        }
    },

    $8j_1: function($p0) {
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
        if ($p0 && this.$0_1.get_selectedStage().get_active() && !$v_0) {
            this.$H_1.removeClass('hidden');
        } else {
            this.$H_1.addClass('hidden');
        }
    },

    $8n_1: function($p0) {
        if ($p0 && this.$0_1.get_selectedStage().get_active()) {
            this.$B_1.removeClass('hidden');
        } else {
            this.$B_1.addClass('hidden');
        }
    },

    $8o_1: function() {
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
        if (!this.$7T_1() && !$v_0) {
            this.$f_1.removeClass('hidden');
        } else {
            this.$f_1.addClass('hidden');
        }
    },

    $5y_1: function($p0, $p1, $p2) {
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
        if (!$p0 && !$p1 && $p2 && !$v_0) {
            this.$R_1.removeClass('hidden');
        } else {
            this.$R_1.addClass('hidden');
        }
    },

    $8l_1: function($p0) {
        if (this.$0_1.checkBusinessProcessFlowInstanceStatus($p0, 2)) {
            this.$x_1.removeClass('hidden');
        } else {
            this.$x_1.addClass('hidden');
        }
    },

    $7T_1: function() {
        return this.$0_1.get_selectedStage().get_active();
    },

    $6J_1: function($p0, $p1) {
        if ($p1.get_isError() || !$p1.results) {
            this.$E_1 = false;
            this.$3x_1();
            return;
        }
        var $v_0 = $p1.results;
        this.$4T_1($v_0, true);
        this.$E_1 = false;
    },

    $6M_1: function($p0, $p1) {
        if ($p1.get_isError() || !$p1.results) {
            this.$E_1 = false;
            this.$3x_1();
            return;
        }
        var $v_0 = $p1.results;
        this.$4T_1($v_0, false);
        this.$E_1 = false;
    },

    $4T_1: function($p0, $p1) {
        this.$0_1.set_stageGatesVisible(false);
        this.$2z_1($p0);
        this.$0_1.updatedActiveStageStartedOn();
        this.$64_1();
        this.$3_1.trigger(ProcessControl.Views.ActionsView.actionCompleted, [$p0, $p1]);
    },

    $64_1: function() {
        if (!IsNull(this.$3P_1)) {
            var $v_0 = this.$0_1
                .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 3);
            var $v_1 = this.$0_1
                .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
            var $v_2 = null;
            if (($v_1 || $v_0) && !isNullOrEmptyString(this.$0_1.get_bpfInstanceCompletedIn())) {
                if ($v_1) {
                    $v_2 = String.format(this.$0_1.$8_0.completedIn, this.$0_1.get_bpfInstanceCompletedIn());
                } else {
                    $v_2 = String.format(this.$0_1.$8_0.abortedIn, this.$0_1.get_bpfInstanceCompletedIn());
                }
            } else if (!$v_1 && !$v_0 && !isNullOrEmptyString(this.$0_1.get_bpfInstanceActiveFor())) {
                $v_2 = String.format(this.$0_1.$8_0.activeFor, this.$0_1.get_bpfInstanceActiveFor());
            }
            if (!isNullOrEmptyString($v_2)) {
                this.$3P_1.html($v_2);
                if (!IsNull(this.$3Q_1)) {
                    this.$3Q_1.attr('title', String.format('{0} {1}', this.$0_1.get_processInstanceName(), $v_2));
                }
            }
        }
    },

    moveAdvance: function(callback) {
        var $v_0 = Xrm.ProcessResponse.toString(1);
        var $v_1 = null;
        if (!IsNull(this.$0_1.get_globalActivePathAndStage()) &&
            !IsNull(this.$0_1.get_globalActivePathAndStage().get_stage())) {
            $v_1 = this.$0_1.$1_0.findStageEntity(this.$0_1.get_globalActivePathAndStage().get_stage());
        }
        if (!this.$0_1.checkRequiredCompleted()) {
            this.$0_1.showStageGatingMessageBar();
            $v_0 = Xrm.ProcessResponse.toString(6);
        } else {
            var $$t_3, $$t_4;
            if (!this.$E_1 &&
                !IsNull($v_1) &&
                $v_1.get_EntityLogicalName() === this.$0_1.get_selectedStage().entityLogicalName &&
                (($$t_4 = this.$0_1.canMoveNextViaClientAPI(($$t_3 = { 'val': $v_0 }))), $v_0 = $$t_3.val, $$t_4)) {
                if (!IsNull(callback)) {
                    this.$0_1.addMoveNextCallback(callback);
                }
                this.$J_1.focus();
                this.$E_1 = true;
                this.$1c_1(this.$J_1, this.$34_1);
                Mscrm.MetricsReporting.instance().addMetric('Sales Process Advance', 'advance button');
                this.$0_1.advanceStage(callback);
                return;
            }
        }
        if (!IsNull(callback)) {
            callback($v_0);
        }
    },

    moveBack: function(callback) {
        var $v_0 = Xrm.ProcessResponse.toString(1);
        var $v_1 = null;
        if (!IsNull(this.$0_1.get_globalActivePathAndStage()) &&
            !IsNull(this.$0_1.get_globalActivePathAndStage().get_stage())) {
            $v_1 = this.$0_1.$1_0.findStageEntity(this.$0_1.get_globalActivePathAndStage().get_stage());
        }
        var $$t_3, $$t_4;
        if (!this.$E_1 &&
            !IsNull($v_1) &&
            $v_1.get_EntityLogicalName() === this.$0_1.get_selectedStage().entityLogicalName &&
            (($$t_4 = this.$0_1.canMovePreviousViaClientAPI(($$t_3 = { 'val': $v_0 }))), $v_0 = $$t_3.val, $$t_4)) {
            if (!IsNull(callback)) {
                this.$0_1.addMovePreviousCallback(callback);
            }
            this.$H_1.focus();
            this.$E_1 = true;
            this.$1c_1(this.$H_1, this.$2N_1);
            Mscrm.MetricsReporting.instance().addMetric('Sales Process Back', 'back button');
            this.$0_1.backStage(callback, false);
            return;
        }
        if (!IsNull(callback)) {
            callback($v_0);
        }
    },

    navigate: function() {
        this.$0_1.entityStageChange();
        this.$B_1.focus();
        this.$E_1 = true;
        this.$1c_1(this.$B_1, this.$z_1);
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Back', 'navigate button');
        this.$1w_1('StartGetNavigateToEntitiesTimestamp');
        var $v_0 = this.$0_1.get_selectedStage().currentStageValue;
        var $v_1 = this.$0_1.get_closedLoopService()
            .findCloseLoopEntity(this.$0_1.get_defaultPathManager().getNextStage($v_0));
        if (!IsNull($v_1)) {
            this.$0_1.navigateToCloseLoop($v_1, $v_0);
            return 0;
        }
        var $v_2 = this.$0_1.getForwardNavigationRelationshipInfo(this.$0_1.get_selectedStage());
        if (IsNull($v_2)) {
            this.$E_1 = false;
            this.$33_1(this.$B_1, this.$z_1);
            return 0;
        }
        this.$5q_1($v_2);
        return 0;
    }
}


ProcessControl.Views.BaseView = function(viewModel) {
}
ProcessControl.Views.BaseView.prototype = {
    processLayout: function() {
    },

    render: function() {
    },

    postRender: function() {
    },

    completeInitialization: function() {
    },

    _disposed: false,

    dispose: function() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this.actualDispose();
        Mscrm.Utilities.destroyObject(this);
    }
}


ProcessControl.Views.CollapsibleView = function(viewModel, processContainer) {
    this.$$d_$56_1 = Function.createDelegate(this, this.$56_1);
    ProcessControl.Views.CollapsibleView.initializeBase(this, [viewModel]);
    this.$0_1 = viewModel;
    this.$4I_1 = processContainer;
    this.$3R_1 = $P_CRM('#processStagesContainer');
    this.$3_1 = $P_CRM('#collapsibleView');
    this.$1d_1 = $P_CRM('#processControlCollapseButtonContainer');
    this.$2X_1 = $P_CRM('#processName');
    this.$4w_1 = $P_CRM('#processControlCollapseButton');
    this.$2l_1();
    this.$8k_1();
}
ProcessControl.Views.CollapsibleView.prototype = {
    $1d_1: null,
    $2X_1: null,
    $0_1: null,
    $3R_1: null,
    $4I_1: null,
    $4w_1: null,
    $24_1: null,
    $16_1: null,
    $4A_1: false,
    $p_1: 0,

    get_collapsibleStatus: function() {
        return this.$p_1;
    },

    set_collapsibleStatus: function(value) {
        this.$p_1 = value;
        return value;
    },

    $3_1: null,

    get_viewContainer: function() {
        return this.$3_1;
    },

    get_openAsCollapsed: function() {
        return this.$4A_1 || this.$0_1.$G_0;
    },

    $8k_1: function() {
        if (Mscrm.Utilities.isIosDevice()) {
            this.$1d_1.addClass('collapseButtonContainerForIOS');
        } else {
            this.$1d_1.removeClass('collapseButtonContainerForIOS');
        }
    },

    render: function() {
        this.$8a_1();
    },

    actualDispose: function() {
        this.$43_1();
    },

    $43_1: function() {
        this.$3R_1.unbind();
        this.$1d_1.unbind();
        this.$2X_1.unbind();
    },

    $2l_1: function() {
        var $$t_3 = this;
        this.$3R_1.bind(ProcessControl.Views.CollapsibleView.expandEvent,
            function() {
                $$t_3.expand();
            });
        this.$1d_1.click(this.$$d_$56_1);
        var $$t_4 = this;
        this.$1d_1.keydown(function($p1_0) {
            if ($$t_4.$1o_1($p1_0.which)) {
                $$t_4.$56_1($p1_0);
            }
        });
        var $$t_5 = this;
        this.$2X_1.mouseenter(function($p1_0) {
            $$t_5.$5h_1();
            $$t_5.$24_1.fadeIn(100);
        });
        var $$t_6 = this;
        (this.$2X_1).focusin(function($p1_0) {
            $$t_6.$5h_1();
            $$t_6.$24_1.fadeIn(100);
        });
    },

    $5h_1: function() {
        var $v_0 = this.$4I_1.width();
        if (this.get_$6R_1().get_agent() === 1) {
            $v_0 = $v_0 - 1;
        }
        var $v_1 = $v_0 - 61;
        this.get_$82_1().css('max-width', $v_1 + 'px');
    },

    $1o_1: function($p0) {
        return $p0 === 13;
    },

    $56_1: function($p0) {
        if (!this.$0_1.isActionable()) {
            return;
        }
        this.collapse();
        $p0.preventDefault();
    },

    $4X_1: function() {
        return String.format('{0}_{1}_process_hidden', this.$0_1.$7_0.TypeName, this.$0_1.$7_0.Id);
    },

    expand: function() {
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Expand', 'expand button');
        this.$8A_1();
        this.$p_1 = 1;
        this.$3_1.trigger(ProcessControl.Views.CollapsibleView.expanded);
    },

    $8A_1: function() {
        document.cookie = String.format('{0}=0; expires = Tue, 01-Jan-1900 00:00:00 GMT', this.$4X_1());
    },

    collapse: function() {
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Collapse', 'collapse button');
        this.$8Z_1();
        this.$p_1 = 0;
        this.$3_1.trigger(ProcessControl.Views.CollapsibleView.collapsed);
    },

    $8Z_1: function() {
        var $v_0 = new Date();
        $v_0.setDate($v_0.getDate() + 7);
        document.cookie = String.format('{0}=1; expires = {1:ddd, dd-MMM}-{2} {3:hh:mm:ss} GMT',
            this.$4X_1(),
            $v_0,
            $v_0.getFullYear(),
            $v_0);
    },

    $8a_1: function() {
        var $v_0 = document.cookie.split(';');
        var $v_1 = this.$4X_1();
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2].substr(0, $v_0[$v_2].indexOf('='));
            $v_3 = $v_3.trimStart();
            if ($v_3 === $v_1) {
                this.$4A_1 = true;
                this.$p_1 = 0;
                break;
            }
        }
    },

    get_$82_1: function() {
        if (!this.$24_1) {
            this.$24_1 = $P_CRM('#processNameText', this.$3_1);
        }
        return this.$24_1;
    },

    get_$6R_1: function() {
        if (!this.$16_1) {
            this.$16_1 = Mscrm.CrmBrowser.get_currentBrowser();
        }
        return this.$16_1;
    }
}


ProcessControl.Views.ProcessControlView = function(viewModel) {
    this.$$d_$7u_1 = Function.createDelegate(this, this.$7u_1);
    this.$$d_$4l_1 = Function.createDelegate(this, this.$4l_1);
    this.$$d_$7n_1 = Function.createDelegate(this, this.$7n_1);
    this.$$d_$7r_1 = Function.createDelegate(this, this.$7r_1);
    this.$$d_$7l_1 = Function.createDelegate(this, this.$7l_1);
    this.$$d_$7d_1 = Function.createDelegate(this, this.$7d_1);
    this.$$d_$8q_1 = Function.createDelegate(this, this.$8q_1);
    this.$v_1 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.SlideDown');
    ProcessControl.Views.ProcessControlView.initializeBase(this, [viewModel]);
    var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.InitializeView');
    $v_0.start();
    this.$1M_1 = false;
    var $v_1 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.View.InitializeSubViews');
    $v_1.start();
    this.$3_1 = $P_CRM('#processControlContainer');
    ProcessControl.Views.ProcessControlView.$89(this.$3_1);
    ProcessControl.Views.ProcessControlView.$F = $P_CRM('body').css('direction').toLowerCase() === 'rtl';
    this.$M_1 = new ProcessControl.Views.StagesView(viewModel);
    this.$A_1 = new ProcessControl.Views.StepsView(viewModel);
    this.$U_1 = new ProcessControl.Views.ActionsView(viewModel);
    this.$Q_1 = new ProcessControl.Views.CollapsibleView(viewModel, this.$3_1);
    this.$n_1 = new ProcessControl.ClientApi.ProcessObjectBuilder();
    $v_1.stop();
    this.set_dataContext(viewModel);
    this.$m_1 = new ProcessControl.Views.WarningBarView(this.$3_1, viewModel);
    this.$2T_1 = $P_CRM('#processControlCollapsibleArea');
    this.$1A_1 = $P_CRM('#processHeaderArea');
    if (this.$1A_1 && this.$1A_1.find('#processStagesScrollRegion')) {
        for (var $v_2 = 0; $v_2 < this.$1A_1.find('#processStagesScrollRegion').contents().length; $v_2++) {
            ProcessControl.Views.ProcessControlView
                .registerChildWithXrmUIControl(this.$1A_1, 'stage_' + $v_2, 'ProcessStage', 'processControlContainer');
        }
    }
    this.$1U_1 = $P_CRM('#processControlScrollPane');
    this.$3W_1 = $P_CRM('#processControlScrollbarContainer');
    this.$21_1 = $P_CRM('#processScrollbarMask');
    this.$1R_1 = $P_CRM('#processStepsContainer');
    if (this.$1R_1 && this.$1R_1.find('.processStepsContent')) {
        for (var $v_3 = 0; $v_3 < this.$1R_1.find('.processStepsContent').contents().length; $v_3++) {
            ProcessControl.Views.ProcessControlView
                .registerChildWithXrmUIControl(this.$1A_1,
                    'processSteps_' + $v_3,
                    'ProcessStep',
                    'processStepsContainer');
            for (var $v_4 = 0; $v_4 < this.$1R_1.find('#processSteps_' + $v_3).contents().length; $v_4++) {
                ProcessControl.Views.ProcessControlView
                    .registerChildWithXrmUIControl(this.$1A_1,
                        'processStepColumn_' + $v_4 + '_' + $v_3,
                        'ProcessStepColumn',
                        'ProcessSteps');
            }
        }
    }
    this.$16_1 = Mscrm.CrmBrowser.get_currentBrowser();
    this.$6I_1();
    if (this.get_$1L_1()) {
        var $v_5 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.View.InitializeSlider');
        $v_5.start();
        this.$a_1 = $P_CRM('#processControlScrollbar');
        this.$a_1.slider();
        $v_5.stop();
    }
    this.$2l_1();
    $v_0.stop();
}
ProcessControl.Views.ProcessControlView.get_isRtl = function() {
    return ProcessControl.Views.ProcessControlView.$F;
}
ProcessControl.Views.ProcessControlView.$89 = function($p0) {
    var $v_0 = {};
    $v_0['type'] = 'ProcessControlContainer';
    Mscrm.Utilities.registerControlForXrmUI($p0, $v_0);
}
ProcessControl.Views.ProcessControlView
    .registerChildWithXrmUIControl = function(element, childControlName, childControlType, parentId) {
        var $v_0 = {};
        $v_0['id'] = childControlName;
        $v_0['type'] = childControlType;
        $v_0['parentId'] = parentId;
        Mscrm.Utilities.registerControlForXrmUI(element, $v_0);
    }
ProcessControl.Views.ProcessControlView.$7P = function() {
    var $v_0 = window.self._highContrastEnabled;
    return (IsNull($v_0)) ? false : $v_0;
}
ProcessControl.Views.ProcessControlView.prototype = {
    $47_1: null,
    $2T_1: null,
    $1A_1: null,
    $1U_1: null,
    $3W_1: null,
    $a_1: null,
    $21_1: null,
    $1R_1: null,
    $n_1: null,
    $38_1: null,
    $16_1: null,
    $4K_1: 0,
    $2_1: null,
    $3D_1: 0,
    $1M_1: false,
    $M_1: null,
    $A_1: null,
    $U_1: null,
    $Q_1: null,
    $m_1: null,
    $3G_1: false,
    $3T_1: '',
    $1W_1: null,

    get_$30_1: function() {
        return (ProcessControl.Views.ProcessControlView.$F) ? 'margin-right' : 'margin-left';
    },

    get_$1L_1: function() {
        return !window.UseTabletExperience;
    },

    get_$7v_1: function() {
        var $v_0 = window.self.IS_OUTLOOK_CLIENT;
        return (IsNull($v_0)) ? false : $v_0;
    },

    $D_1: 0,
    $3_1: null,

    get_viewContainer: function() {
        return this.$3_1;
    },

    get_dataContext: function() {
        return this.$2_1;
    },

    set_dataContext: function(value) {
        if (!(ProcessControl.ViewModels.ProcessControlViewModel.isInstanceOfType(value))) {
            return value;
        }
        this.$32_1();
        this.$2_1 = value;
        this.$2_1.add_stageAttributeRefreshed(this.$$d_$8q_1);
        this.$2_1.add_newEntitySaved(this.$$d_$7d_1);
        this.$U_1.set_dataContext(this.$2_1);
        return value;
    },

    $7l_1: function($p0, $p1) {
        this.reflow(true);
    },

    $32_1: function() {
        if (!IsNull(this.$2_1)) {
            this.$2_1.remove_stageAttributeRefreshed(this.$$d_$8q_1);
            this.$2_1.remove_newEntitySaved(this.$$d_$7d_1);
            if (!IsNull(this.$2_1.get_defaultPathManager())) {
                this.$2_1.get_defaultPathManager().remove_defaultPathInitialized(this.$$d_$7l_1);
            }
        }
    },

    $6I_1: function() {
        var $v_0 = this.$16_1.get_name();
        if (this.$16_1.get_isIE8()) {
            $v_0 += ' ie8';
        }
        if (ProcessControl.Views.ProcessControlView.$F) {
            $v_0 += ' rtl';
        }
        if (ProcessControl.Views.ProcessControlView.$7P()) {
            $v_0 += ' highContrast';
        }
        if (this.get_$7v_1()) {
            $v_0 += ' outlook';
        }
        var $v_1 = window.navigator.platform.toLowerCase();
        if ($v_1.startsWith('mac')) {
            $v_0 += ' mac';
        } else if ($v_1.startsWith('win')) {
            $v_0 += ' win';
        } else {
            $v_0 += ' unknownPlatform';
        }
        this.$3_1.removeClass('hideprocessheaderchrome');
        this.$3_1.addClass($v_0);
    },

    $2l_1: function() {
        var $$t_3 = this;
        this.$A_1.get_viewContainer().bind(ProcessControl.Views.StepsView.narrowSteps,
            function($p1_0) {
                $$t_3.$4j_1();
            });
        var $$t_4 = this;
        this.$M_1.get_viewContainer().bind(ProcessControl.Views.StagesView.stageChange,
            function($p1_0) {
                if (arguments.length < 2) {
                    return;
                }
                $$t_4.$A_1.changeCurrentSteps();
                if ($$t_4.$2_1.get_localActiveStage()) {
                    $$t_4.$U_1.changeActionStatus($$t_4.$2_1.get_selectedStage(), arguments[1]);
                }
                $$t_4.$2j_1();
                $$t_4.$4j_1();
                var $v_0 = $$t_4.$5n_1();
                $$t_4.$M_1.resize($$t_4.$U_1.get_containerWidth(), $v_0 - 25);
                $$t_4.$4l_1(null);
                if (window.UseTabletExperience && ProcessControl.Views.ProcessControlView.$F) {
                    $$t_4.$5s_1();
                }
            });
    },

    $4l_1: function($p0) {
        window.clearTimeout(this.$4K_1);
        var $$t_1 = this;
        this.$4K_1 = window.setTimeout(function() {
                $$t_1.$D_1 = $$t_1.$3_1.width();
                $$t_1.$4k_1();
            },
            50);
    },

    $7x_1: function($p0) {
        $p0.stopPropagation();
        this.$21_1.css('display', 'none');
        var $v_0 = document.createEvent('MouseEvents');
        var $v_1 = $p0;
        $v_0.initMouseEvent('click',
            true,
            true,
            window.self,
            1,
            $v_1.screenX,
            $v_1.screenY,
            $v_1.clientX,
            $v_1.clientY,
            false,
            false,
            false,
            false,
            0,
            null);
        var $v_2 = $p0.pageX;
        var $v_3 = $p0.pageY;
        var $v_4 = document.elementFromPoint($v_2, $v_3);
        $v_4.dispatchEvent($v_0);
        this.$21_1.css('display', 'block');
    },

    $8p_1: function($p0) {
        var $v_0 = this.$D_1;
        var $v_1 = this.$A_1.$D_1;
        if ($v_1 > $v_0) {
            var $v_2 = (ProcessControl.Views.ProcessControlView.$F) ? 100 - $p0.value : $p0.value;
            var $v_3 = $v_2 / 100 * ($v_0 - $v_1);
            this.$A_1.get_viewContainer().css(this.get_$30_1(), $v_3 + 'px');
        } else {
            this.$A_1.get_viewContainer().css(this.get_$30_1(), '0px');
        }
    },

    $4k_1: function() {
        this.$D_1 = this.$3_1.width();
        this.$5n_1();
        this.$M_1.resize(this.$U_1.get_containerWidth(), this.$D_1 - 25);
        this.$5o_1();
        if (window.UseTabletExperience && ProcessControl.Views.ProcessControlView.$F) {
            this.$5s_1();
        }
    },

    $5n_1: function() {
        var $v_0 = Math.max(this.$D_1 - 25 - 0, this.$M_1.$25_1);
        this.$M_1.setWidth($v_0);
        var $v_1 = (this.$D_1 < this.$3D_1) ? this.$3D_1 : this.$D_1;
        this.$1A_1[0].style.minWidth = $v_1 + 'px';
        return this.$D_1;
    },

    resize: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.View.Resize');
        $v_0.start();
        this.$8b_1();
        this.$4k_1();
        $v_0.stop();
    },

    $8b_1: function() {
        this.$3D_1 = this.$M_1.$25_1 + 0 + this.$U_1.get_containerWidth();
    },

    $7r_1: function() {
        this.$5o_1();
        if (this.$v_1) {
            this.$v_1.stop();
            this.$v_1 = null;
        }
        $P_CRM(window).trigger('resize-header');
    },

    processLayout: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.View.Layout');
        $v_0.start();
        this.$M_1.processLayout();
        this.$A_1.processLayout();
        this.$U_1.processLayout();
        this.$Q_1.processLayout();
        this.$m_1.processLayout();
        $v_0.stop();
    },

    render: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.View.Render');
        $v_0.start();
        if (this.$2_1.get_noAvailableStages()) {
            this.$3_1.css('display', 'none');
            this.$2j_1();
            return;
        }
        this.$M_1.render();
        this.$A_1.render();
        this.$U_1.render();
        this.$Q_1.render();
        this.$m_1.render();
        var $v_1 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.View.Adjust');
        $v_1.start();
        this.$6H_1();
        this.$2j_1();
        $v_1.stop();
        var $v_2 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.View.ContainerWidth');
        $v_2.start();
        this.$D_1 = this.$3_1.width();
        $v_2.stop();
        this.resize();
        this.$3T_1 = this.$2_1.get_defaultPathManager().get_defaultPathHash();
        if (!IsNull(this.$2_1) && !IsNull(this.$2_1.get_defaultPathManager())) {
            this.$2_1.get_defaultPathManager().remove_defaultPathInitialized(this.$$d_$7l_1);
            this.$2_1.get_defaultPathManager().add_defaultPathInitialized(this.$$d_$7l_1);
        }
        $v_0.stop();
    },

    $5x_1: function($p0) {
        if (this.$v_1) {
            this.$v_1.start();
        }
        this.$Q_1.$p_1 = 1;
        this.$2T_1.slideDown($p0, this.$$d_$7r_1);
    },

    $2j_1: function() {
        var $v_0 = this.$3_1.parent();
        $v_0.css('height', '');
    },

    $8q_1: function($p0, $p1) {
        this.$5j_1();
    },

    $7d_1: function($p0, $p1) {
        this.$5j_1();
    },

    $5j_1: function() {
        this.render();
        this.postRender();
        this.completeInitialization();
    },

    $6H_1: function() {
        if (this.$2_1.$G_0) {
            this.$3_1.addClass('newRecord');
        }
        if (this.$2_1.$X_0) {
            this.$3_1.addClass('readonly');
        }
    },

    postRender: function() {
        this.$A_1.postRender();
    },

    completeInitialization: function() {
        this.reflow(true);
        this.$3W_1.find('a').attr('title', this.$2_1.$8_0.slider);
        this.$A_1.completeInitialization();
        this.$7y_1();
        if (!this.$2_1.$2U_0) {
            var $$t_0 = this, $$t_1 = this;
            this.$2_1.get_globalActiveStage().then(function() {
                    $$t_0.$M_1.updateStages();
                    $$t_0.$U_1.render();
                    $$t_0.$4k_1();
                    $$t_0.$A_1.updateControlLocks();
                    $$t_0.$5x_1(500);
                },
                function() {
                });
        }
        if (!this.$Q_1.get_openAsCollapsed() && !this.$Q_1.$p_1) {
            var $$t_2 = this;
            window.setTimeout(function() {
                    if (!$$t_2._disposed) {
                        $$t_2.$5x_1(1000);
                    }
                },
                100);
        }
        if (!IsNull(this.$A_1) && !IsNull(this.$3_1) && this.$A_1.$D_1 > this.$D_1) {
            this.$3w_1();
        }
    },

    actualDispose: function() {
        if (this.get_$1L_1()) {
            this.$a_1.slider('destroy');
        }
        this.$32_1();
        this.$43_1();
        this.$6i_1();
        Mscrm.Utilities.removeControlFromXrmUI('ProcessControlContainer');
    },

    $6i_1: function() {
        Mscrm.Utilities.safeDispose(this.$M_1);
        Mscrm.Utilities.safeDispose(this.$A_1);
        Mscrm.Utilities.safeDispose(this.$U_1);
        Mscrm.Utilities.safeDispose(this.$Q_1);
        Mscrm.Utilities.safeDispose(this.$m_1);
    },

    $43_1: function() {
        $P_CRM(window).unbind(Mscrm.FormNavControl.toggleEvent, this.$$d_$7n_1);
        $P_CRM(window).unbind('resize', this.$$d_$4l_1);
        this.$A_1.get_viewContainer().unbind();
        this.$M_1.get_viewContainer().unbind();
        if (!IsNull(this.$a_1)) {
            this.$a_1.unbind('slide');
        }
        this.$U_1.get_viewContainer().unbind();
        this.$Q_1.get_viewContainer().unbind();
        this.$21_1.unbind();
        if (!IsNull(this.$1W_1)) {
            this.$1W_1.remove_processSwitched(this.$$d_$7u_1);
            this.$1W_1.dispose();
        }
    },

    $7n_1: function($p0) {
        this.$4l_1(null);
    },

    $7y_1: function() {
        if (this.$1M_1) {
            return;
        }
        ProcessControl.Services.DebugService.assert(!isNullOrEmptyString(Mscrm.FormNavControl.toggleEvent),
            'the toggle event must be non-empty');
        $P_CRM(window).bind(Mscrm.FormNavControl.toggleEvent, this.$$d_$7n_1);
        if (this.get_$1L_1()) {
            var $$t_F = this;
            this.$a_1.bind('slide',
                function($p1_0, $p1_1) {
                    $$t_F.$8p_1($p1_1);
                });
        }
        $P_CRM(window).bind('resize', this.$$d_$4l_1);
        var $$t_G = this;
        this.$M_1.get_viewContainer().bind(ProcessControl.Views.StagesView.keyDownOnStage,
            function($p1_0) {
                if (arguments.length < 2) {
                    return;
                }
                var $v_0 = arguments[1];
                $$t_G.$A_1.focusOnSteps($v_0);
            });
        var $$t_H = this;
        this.$A_1.get_viewContainer().bind(ProcessControl.Views.StepsView.keyUpOnSteps,
            function($p1_0) {
                if (arguments.length < 2) {
                    return;
                }
                var $v_1 = arguments[1];
                $$t_H.$M_1.focusOnStage($v_1);
            });
        var $$t_I = this;
        this.$A_1.get_viewContainer().bind(ProcessControl.Views.StepsView.widenSteps,
            function($p1_0) {
                if (arguments.length < 2) {
                    return;
                }
                var $v_2 = arguments[1];
                $$t_I.$8e_1($v_2);
            });
        var $$t_J = this;
        this.$A_1.get_viewContainer().bind(ProcessControl.Views.StepsView.narrowSteps,
            function($p1_0) {
                $$t_J.$4j_1();
            });
        var $$t_K = this;
        this.$U_1.get_viewContainer().bind(ProcessControl.Views.ActionsView.actionCompleted,
            function($p1_0) {
                if (arguments.length < 3) {
                    return;
                }
                var $v_3 = arguments[1];
                var $v_4 = arguments[2];
                $$t_K.$4T_1($v_3, $v_4);
            });
        var $$t_L = this;
        this.$Q_1.get_viewContainer().bind(ProcessControl.Views.CollapsibleView.expanded,
            function($p1_0) {
                if ($$t_L.$v_1) {
                    $$t_L.$v_1.start();
                    if (!($$t_L.$v_1).properties) {
                        ($$t_L.$v_1).properties = {};
                    }
                    ($$t_L.$v_1).properties['UserTriggered'] = true;
                }
                $$t_L.$2T_1.slideDown(500, $$t_L.$$d_$7r_1);
                $$t_L.$2j_1();
            });
        var $$t_M = this;
        this.$Q_1.get_viewContainer().bind(ProcessControl.Views.CollapsibleView.collapsed,
            function($p1_0) {
                $$t_M.$2T_1.slideUp(500,
                    function() {
                        $P_CRM(window).trigger('resize-header');
                    });
                $$t_M.$2j_1();
            });
        if (this.$16_1.get_agent() === 1) {
            var $$t_N = this;
            this.$21_1.bind('click',
                function($p1_0) {
                    $$t_N.$7x_1($p1_0);
                });
        }
        this.$1M_1 = true;
    },

    $4T_1: function($p0, $p1) {
        if ($p0.stageIndex === this.$M_1.$17_1) {
            return;
        }
        this.$M_1.changeStageCompleted($p0, $p1);
    },

    $8e_1: function($p0) {
        var $v_0 = this.$1U_1.offset();
        var $v_1 = $v_0.left + this.$1U_1.width();
        var $v_2 = $p0 - $v_1 + 20;
        if ($v_2 <= 0) {
            return;
        }
        var $v_3 = this.$A_1.get_viewContainer().css('margin-left');
        var $v_4 = parseInt($v_3);
        var $v_5 = $v_4 - $v_2;
        this.$A_1.get_viewContainer().css('margin-left', $v_5 + 'px');
        if (!this.get_$1L_1()) {
            return;
        }
        if (this.$a_1.hasClass('hidden')) {
            this.$3w_1();
        }
        this.$a_1.find('a').css('left', '100%');
    },

    $5c_1: function() {
        if (!this.get_$1L_1()) {
            return false;
        }
        if (!this.$Q_1.$p_1) {
            return false;
        }
        return this.$A_1.$D_1 > this.$D_1;
    },

    $4j_1: function() {
        this.$4h_1();
        if (!this.$5c_1()) {
            this.$5W_1();
        } else {
            this.$3w_1();
        }
    },

    $5o_1: function() {
        if (!this.get_$1L_1()) {
            return;
        }
        if (!this.$5c_1()) {
            this.$5W_1();
        } else {
            this.$3w_1();
            this.$86_1();
            this.$4h_1();
        }
    },

    $4h_1: function() {
        this.$A_1.get_viewContainer().css(this.get_$30_1(), '0px');
        if (!this.get_$1L_1()) {
            return;
        }
        var $v_0 = ((ProcessControl.Views.ProcessControlView.$F) ? '100' : '0') + '%';
        this.$a_1.find('.ui-slider-handle').css('left', $v_0);
    },

    $86_1: function() {
        var $v_0 = this.$A_1.get_viewContainer().css(this.get_$30_1());
        var $v_1 = parseInt($v_0);
        var $v_2 = this.$A_1.get_viewContainer().width() + $v_1;
        var $v_3 = this.$1U_1.width() - $v_2;
        if ($v_3 > 0) {
            this.$A_1.get_viewContainer().css(this.get_$30_1(), $v_1 + $v_3 + 'px');
        }
    },

    $5W_1: function() {
        if (!this.get_$1L_1()) {
            return;
        }
        if (!this.$3G_1) {
            return;
        }
        if (!this.$a_1.hasClass('hidden')) {
            this.$a_1.addClass('hidden');
        }
        this.$4h_1();
        this.$3G_1 = false;
    },

    $3w_1: function() {
        if (!this.get_$1L_1()) {
            return;
        }
        this.$a_1.removeClass('hidden');
        var $v_0 = this.$D_1;
        var $v_1 = $v_0 / this.$A_1.get_viewContainer().width() * $v_0;
        $v_1 = Math.max($v_1, 100);
        var $v_2 = {};
        $v_2['width'] = $v_1 + 'px';
        $v_2['margin-left'] = -$v_1 / 2 + 'px';
        this.$a_1.find('.ui-slider-handle').css($v_2);
        var $v_3 = {};
        $v_3['margin-left'] = $v_1 / 2 + 'px';
        $v_3['margin-right'] = $v_1 / 2 + 'px';
        this.$3W_1.css($v_3);
        this.$3G_1 = true;
    },

    $5s_1: function() {
        if (this.$1U_1 && this.$1R_1) {
            var $v_0 = this.$1R_1.width();
            var $v_1 = this.$1U_1.width();
            if ($v_0 > $v_1) {
                this.$1U_1.scrollLeft($v_0 - $v_1);
            }
        }
    },

    get_selectedStageSteps: function() {
        return this.$A_1.getStageSteps(this.$M_1.get_currentSelectedStageIndex());
    },

    get_viewModel: function() {
        return this.$2_1;
    },

    setDisplayState: function(state) {
        if (state === 'collapsed') {
            this.$Q_1.collapse();
        } else if (state === 'expanded') {
            this.$Q_1.expand();
        }
    },

    setVisible: function(showProcessControl) {
        if (showProcessControl) {
            this.$3_1.css('display', 'block');
            this.$m_1.showParentTR();
        } else {
            this.$3_1.css('display', 'none');
            this.$m_1.hideParentTR();
        }
    },

    reflow: function(updateUI, parentStage, nextStage) {
        if (!IsNull(parentStage) && IsNull(this.$2_1.get_defaultPathManager().get_context().getStageStep(parentStage))
        ) {
            return;
        }
        this.$2_1.reflow(parentStage, nextStage);
        if (updateUI && this.$2_1.get_defaultPathManager().get_context().get_invocationSource() !== 'internal') {
            var $v_0 = this.$2_1.get_defaultPathManager().get_defaultPathHash();
            if (this.$3T_1 === $v_0) {
                return;
            }
            this.$3T_1 = $v_0;
            this.$M_1.$6h_1();
            this.resize();
        }
    },

    getId: function() {
        var $v_0 = '';
        var $v_1 = $get('processControlProcessInfo');
        if ($v_1) {
            var $v_2 = $v_1.attributes.getNamedItem('data-id');
            $v_0 = $v_2.value;
        }
        return $v_0;
    },

    getVisible: function() {
        var $v_0 = false;
        var $v_1 = $get('processControlContainer');
        if ($v_1) {
            $v_0 = Sys.UI.DomElement.getVisible($v_1);
        }
        return $v_0;
    },

    getDisplayState: function() {
        var $v_0 = null;
        switch (this.$Q_1.$p_1) {
        case 0:
            $v_0 = 'collapsed';
            break;
        case 1:
            $v_0 = 'expanded';
            break;
        default:
            $v_0 = ProcessControl.Views.CollapsibleStatus.toString(this.$Q_1.$p_1);
            break;
        }
        return $v_0;
    },

    getActiveProcess: function() {
        var $v_0 = $get('processControlProcessInfo');
        if ($v_0) {
            this.$47_1 = $v_0.getAttribute('data-title');
        }
        var $v_1 = this.$2_1.getProcessStages();
        var $v_2 = this.$n_1.businessProcessFlowBuilder(this.$2_1.get_processId(),
            this.$2_1.get_processInstanceId(),
            this.$2_1.get_processInstanceName(),
            this.$47_1,
            this.$2_1.get_businessProcessInstanceState(),
            this.$2_1.get_businessProcessInstanceStatus(),
            true,
            $v_1);
        return $v_2;
    },

    getActiveStage: function() {
        var $v_0 = this.$2_1.getActiveStage();
        var $v_1 = this.$2_1.convertModelViewModel($v_0);
        var $v_2 = this.$n_1.processStageBuilder($v_0, $v_1, $v_1.entityLogicalName, 1);
        return $v_2;
    },

    getActivePath: function() {
        var $v_0 = null;
        var $v_1 = null;
        var $v_2 = null;
        var $v_3 = new ProcessControl.Views.ProcessControlView.XrmProcessStages();
        for (var $$arr_4 = this.$2_1.get_defaultPath(), $$len_5 = $$arr_4.length, $$idx_6 = 0;
            $$idx_6 < $$len_5;
            ++$$idx_6) {
            var $v_4 = $$arr_4[$$idx_6];
            $v_0 = this.$2_1.getStageByValue($v_4);
            $v_1 = this.$2_1.convertModelViewModel($v_0);
            var $v_5 = ($v_1.get_active()) ? 1 : 0;
            $v_2 = this.$n_1.processStageBuilder($v_0, $v_1, $v_1.entityLogicalName, $v_5);
            $v_3.add($v_2);
        }
        return $v_3;
    },

    switchProcess: function() {
        if (IsNull(this.$1W_1)) {
            var $v_0 = $P_CRM('body');
            var $v_1 = Xrm.Page.data.entity.getEntityName();
            this.$1W_1 = new Mscrm.SwitchProcessFlyOut($v_0, Xrm.Page.data.entity.getId(), $v_1);
            this.$1W_1.add_processSwitched(this.$$d_$7u_1);
        }
        this.$1W_1.selectView(false);
    },

    getInstanceId: function() {
        var $v_0 = this.getActiveProcess();
        return $v_0.getInstanceId();
    },

    getInstanceName: function() {
        var $v_0 = this.getActiveProcess();
        return $v_0.getInstanceName();
    },

    getStatus: function() {
        var $v_0 = this.getActiveProcess();
        return $v_0.getStatus();
    },

    setStatus: function(newStatus, callback) {
        this.$2_1.setStatus(newStatus, callback);
    },

    abandonProcess: function() {
        this.$2_1.abandonProcess();
    },

    completeProcess: function() {
        this.$2_1.completeProcess();
    },

    isLastStage: function() {
        return this.$2_1.isLastStage();
    },

    reactivateProcess: function() {
        this.$2_1.reactivateProcess();
    },

    canSetActiveStage: function() {
        return this.$2_1.canSetActiveStage();
    },

    $7u_1: function($p0, $p1) {
        this.$2_1.fireOnProcessChangeEvent();
        Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), Xrm.Page.data.entity.getId());
    },

    getEnabledProcesses: function(callback) {
        var $$t_4 = this, $$t_5 = this;
        Xrm.Internal.messages.retrieveFilteredProcesses(this.$2_1.$7_0.TypeName).then(function($p1_0) {
                var $v_0 = $p1_0;
                if ($v_0 && $v_0.processes.get_count() > 0) {
                    $$t_4.$38_1 = $v_0.processes;
                    var $v_1 = {};
                    if ($$t_4.$38_1) {
                        $v_1 = $$t_4.$n_1.businessProcessFlowListBuilder($$t_4.$38_1);
                    }
                    if (!IsNull(callback)) {
                        callback($v_1);
                    }
                }
            },
            function() {
                if (!IsNull(callback)) {
                    callback(null);
                }
            });
    },

    moveNext: function(callback) {
        this.$U_1.moveAdvance(callback);
    },

    movePrevious: function(callback) {
        this.$U_1.moveBack(callback);
    },

    setActiveProcess: function(processId, responseCallback) {
        if (isNullOrEmptyString(processId)) {
            if (!IsNull(responseCallback)) {
                responseCallback(Xrm.ProcessResponse.toString(1));
            }
        } else {
            processId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(processId);
            if (this.$2_1.get_processId() !== processId) {
                var $$t_3 = this;
                this.getEnabledProcesses(function($p1_0) {
                    if (!IsNull(responseCallback)) {
                        if ((!processId || !((processId) in $p1_0))) {
                            responseCallback(Xrm.ProcessResponse.toString(1));
                        } else {
                            responseCallback(Xrm.ProcessResponse.toString($$t_3.$2_1.setActiveProcess(processId)));
                        }
                    }
                });
            } else {
                if (!IsNull(responseCallback)) {
                    responseCallback(Xrm.ProcessResponse.toString(0));
                }
            }
        }
    },

    getProcessInstances: function(responseCallback) {
        if (IsNull(responseCallback)) {
            responseCallback(null);
        } else {
            this.$2_1.getProcessInstances(responseCallback);
        }
    },

    setActiveProcessInstance: function(processInstanceId, responseCallback) {
        if (isNullOrEmptyString(processInstanceId) || IsNull(responseCallback)) {
            responseCallback(Xrm.ProcessResponse.toString(1));
        } else {
            responseCallback(Xrm.ProcessResponse.toString(this.$2_1.setActiveProcessInstance(processInstanceId)));
        }
    },

    setActiveStage: function(stageId, callback) {
        if (!isNullOrEmptyString(stageId)) {
            this.$2_1.setActiveStage(stageId, callback, false);
            return;
        }
        if (!IsNull(callback)) {
            callback(Xrm.ProcessResponse.toString(1));
        }
    },

    addOnStageChange: function(handler, system) {
        this.$2_1.$6E_0(handler, !!system);
    },

    removeOnStageChange: function(handler) {
        this.$2_1.$8D_0(handler);
    },

    addOnProcessChange: function(handler, system) {
        this.$2_1.$6C_0(handler, !!system);
    },

    removeOnProcessChange: function(handler) {
        this.$2_1.$8B_0(handler);
    },

    addOnProcessStatusChange: function(handler) {
        this.$2_1.$6D_0(handler);
    },

    removeOnProcessStatusChange: function(handler) {
        this.$2_1.$8C_0(handler);
    },

    addOnStageSelected: function(handler, system) {
        this.$2_1.$6F_0(handler, !!system);
    },

    removeOnStageSelected: function(handler) {
        this.$2_1.$8E_0(handler);
    },

    getSelectedStage: function() {
        var $v_0 = this.$2_1.getSelectedStage();
        var $v_1 = this.$2_1.convertModelViewModel($v_0);
        var $v_2 = this.$n_1.processStageBuilder($v_0, $v_1, $v_1.entityLogicalName, 1);
        return $v_2;
    }
}


ProcessControl.Views.ProcessControlView.XrmProcessStages = function() {
    ProcessControl.Views.ProcessControlView.XrmProcessStages.initializeBase(this);
}


ProcessControl.Views.StagesView = function(viewModel) {
    this.$$d_$77_1 = Function.createDelegate(this, this.$77_1);
    this.$4L_1 = -1;
    this.$49_1 = -1;
    this.$3a_1 = {};
    ProcessControl.Views.StagesView.initializeBase(this, [viewModel]);
    this.$0_1 = viewModel;
    this.$3O_1 = $P_CRM('#processHeaderContainer');
    this.$3_1 = $P_CRM('#processStagesContainer');
    this.$F_1 = ProcessControl.Views.ProcessControlView.$F;
}
ProcessControl.Views.StagesView.prototype = {
    $1t_1: 27,
    $20_1: 0,
    $1O_1: 0,
    $1T_1: false,
    $37_1: false,
    $4y_1: 11,
    $3Y_1: 0,
    $48_1: 0,
    $0_1: null,
    $25_1: 0,
    $F_1: false,
    $3O_1: null,
    $4E_1: 0,
    $3_1: null,

    get_viewContainer: function() {
        return this.$3_1;
    },

    get_minWidth: function() {
        return this.$25_1;
    },

    $17_1: 0,

    get_currentActiveStageIndex: function() {
        return this.$17_1;
    },

    get_currentSelectedStageIndex: function() {
        return Array.indexOf(this.$0_1.get_stages(), this.$0_1.get_selectedStage());
    },

    $3H_1: null,
    $4J_1: null,

    get_$13_1: function() {
        if (!this.$3H_1) {
            this.$3H_1 = $P_CRM('#leftScrollButton', this.$3O_1);
        }
        return this.$3H_1;
    },

    $3U_1: null,

    get_$u_1: function() {
        if (!this.$3U_1) {
            this.$3U_1 = $P_CRM('#rightScrollButton', this.$3O_1);
        }
        return this.$3U_1;
    },

    $3I_1: null,

    get_$3t_1: function() {
        if (!this.$3I_1) {
            this.$3I_1 = $P_CRM('.globalActiveStageFlag', this.get_$13_1());
        }
        return this.$3I_1;
    },

    $3V_1: null,

    get_$3y_1: function() {
        if (!this.$3V_1) {
            this.$3V_1 = $P_CRM('.globalActiveStageFlag', this.get_$u_1());
        }
        return this.$3V_1;
    },

    get_$1Y_1: function() {
        return $P_CRM('.activeStage > .processStageTailContainer .stageIconHolder', this.$3_1);
    },

    $3X_1: null,

    get_$h_1: function() {
        if (!this.$3X_1) {
            this.$3X_1 = $P_CRM('#processStagesScrollRegion');
        }
        return this.$3X_1;
    },

    get_$3z_1: function() {
        return this.$1J_1(this.get_currentSelectedStageIndex());
    },

    get_$1u_1: function() {
        var $v_0 = (!this.$F_1) ? this.get_$h_1().css('margin-left') : this.get_$h_1().css('margin-right');
        return parseInt($v_0.substring(0, $v_0.length - 2));
    },

    get_$1q_1: function() {
        return (!this.$F_1) ? 'margin-left' : 'margin-right';
    },

    $5u_1: function() {
        this.$25_1 = 200;
        this.$3_1.css('min-width', this.$25_1 + 'px');
        var $v_0 = this.$0_1.get_stages().length;
        var $v_1 = $P_CRM('.processStageContainer').filter('.hideStage').length;
        this.$20_1 = ($v_0 - $v_1) * 145;
        this.get_$h_1().css('min-width', this.$20_1 + 'px');
    },

    setWidth: function(width) {
        this.$3_1.width(width);
    },

    $5z_1: function($p0, $p1) {
        var $v_0 = this.$0_1.$7U_0($p0.currentStageValue, $p1);
        var $v_1 = this.$1J_1($p0.stageIndex);
        var $v_2 = $P_CRM('#processSteps_' + $p0.stageIndex);
        if (!$v_0 === $p0.isVisible) {
            $p0.isVisible = $v_0;
            if ($v_0) {
                $v_1.removeClass('hideStage');
                $v_2.removeClass('hideStage');
            } else {
                $v_1.addClass('hideStage');
                $v_2.addClass('hideStage');
                if (this.$7W_1($p0)) {
                    this.$3j_1(this.$0_1.get_localActiveStage());
                }
            }
        }
        var $v_3 = ($p1.length > 0) ? $p1[$p1.length - 1] : null;
        if ($v_3 !== $p0.currentStageValue) {
            $v_1.addClass('hasNext');
            $v_2.addClass('hasNext');
        } else {
            $v_1.removeClass('hasNext');
            $v_2.removeClass('hasNext');
        }
    },

    $7W_1: function($p0) {
        return $p0 === this.$0_1.get_selectedStage();
    },

    resize: function(actionsContainerWidth, viewContainerWidth) {
        var $v_0 = this.get_renderedStages().length;
        var $v_1 = ($v_0 - 1) * 10;
        var $v_2 = (viewContainerWidth - $v_1) / $v_0;
        var $v_3 = {};
        $v_3['width'] = $v_2 + 'px';
        $v_3['min-width'] = 135 + 'px';
        var $v_4 = $P_CRM('.processStageContainer');
        $v_4.css($v_3);
        this.$48_1 = Math.max($v_2, 135);
        this.$6k_1(viewContainerWidth);
        if (this.$1T_1) {
            this.$8O_1(viewContainerWidth);
            this.$8X_1();
            this.$2C_1();
            if (this.$4E_1 !== actionsContainerWidth) {
                this.get_$u_1().css((!this.$F_1) ? 'right' : 'left', (actionsContainerWidth - 3) + 'px');
                this.$4E_1 = actionsContainerWidth;
            }
        }
    },

    $8O_1: function($p0) {
        this.$1O_1 = this.$20_1 - $p0 + this.$1t_1;
        if (this.get_$1u_1() < -this.$1O_1) {
            this.get_$h_1().css(this.get_$1q_1(), -this.$1O_1 + 'px');
        }
    },

    $8X_1: function() {
        if (!this.get_$3z_1().length) {
            this.get_$h_1().css(this.get_$1q_1(), this.$1t_1 + 'px');
            return;
        }
        var $v_0 = this.$3i_1(this.get_currentSelectedStageIndex());
        var $v_1 = $v_0 + this.$3_1.innerWidth() - this.get_$3z_1().outerWidth() - 2 * this.$1t_1;
        if (this.get_$1u_1() >= $v_0 && this.get_$1u_1() <= $v_1) {
            return;
        }
        this.get_$h_1().css(this.get_$1q_1(), Math.max($v_0, -this.$1O_1) + 'px');
        this.$4e_1($v_0);
    },

    $6k_1: function($p0) {
        if (!this.$1T_1 && this.$20_1 > $p0) {
            this.$1T_1 = true;
            this.get_$13_1().css('display', 'block');
            this.get_$u_1().css('display', 'block');
            this.$5L_1(this.$1t_1);
        } else if (this.$1T_1 && this.$20_1 < $p0) {
            this.$1T_1 = false;
            this.get_$13_1().css('display', 'none');
            this.get_$u_1().css('display', 'none');
            this.get_$h_1().css(this.get_$1q_1(), '0px');
            this.$2C_1();
        }
    },

    processLayout: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.StagesView.Layout');
        $v_0.start();
        Object.getType(this.get_$13_1());
        Object.getType(this.get_$u_1());
        Object.getType(this.get_$3t_1());
        Object.getType(this.get_$3y_1());
        Object.getType(this.get_$h_1());
        this.$8H_1();
        this.$8I_1();
        var $v_1 = this.$0_1.get_stages().length;
        var $v_2 = this.get_$h_1().children();
        for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
            var $v_4 = this.$0_1.get_stages()[$v_3];
            $v_4.isVisible = true;
            this.$83_1($v_4, $P_CRM($v_2[$v_3]));
        }
        $v_0.stop();
    },

    render: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.StagesView.Render');
        $v_0.start();
        this.$5u_1();
        this.$3_1.removeClass('hidden');
        var $v_1 = this.$0_1.get_stages().length;
        var $v_2 = this.$0_1.get_selectedStage().stageIndex;
        var $v_3 = this.$0_1.get_defaultPath();
        var $v_4 = this.get_$h_1().children();
        for (var $v_5 = 0; $v_5 < $v_1; $v_5++) {
            var $v_6 = this.$0_1.get_stages()[$v_5];
            var $v_7 = $v_2 === $v_6.stageIndex;
            this.$8J_1($v_6, $v_7, $v_3, $P_CRM($v_4[$v_5]));
        }
        $v_0.stop();
    },

    get_renderedStages: function() {
        if (IsNull(this.$4J_1)) {
            return this.$0_1.get_defaultPath();
        }
        return this.$4J_1;
    },

    $8H_1: function() {
        this.$5k_1(true);
    },

    $8I_1: function() {
        this.$5k_1(false);
    },

    $5k_1: function($p0) {
        var $v_0 = ($p0) ? 'leftScrollButton' : 'rightScrollButton';
        var $v_1 = $P_CRM('#' + $v_0);
        var $$t_4 = this;
        $v_1.find('.scrollArrow').click(function($p1_0) {
            $$t_4.$78_1(!$p0);
        });
        $v_1.find('.globalActiveStageFlag').click(this.$$d_$77_1);
    },

    $6y_1: function() {
        var $v_0 = this.get_$1u_1();
        for (var $v_1 = 0; $v_1 < this.get_renderedStages().length; $v_1++) {
            var $v_2 = this.$3i_1($v_1);
            if ($v_2 <= $v_0) {
                return $v_1;
            }
        }
        return 0;
    },

    $78_1: function($p0) {
        var $v_0 = this.$6y_1();
        if (this.$37_1 || (!$p0 && !$v_0) || ($p0 && $v_0 === this.get_renderedStages().length - 1)) {
            return;
        }
        var $v_1 = $v_0 + (($p0) ? 1 : -1);
        var $v_2 = this.$3i_1($v_1);
        if ($v_2 === this.get_$1u_1()) {
            return;
        }
        this.get_$h_1().css(this.get_$1q_1(), Math.max($v_2, -this.$1O_1) + 'px');
        this.$4e_1($v_2);
    },

    $4e_1: function($p0) {
        this.$5L_1($p0);
        this.$2C_1();
    },

    $2C_1: function() {
        if (!this.get_$1Y_1().length) {
            return;
        }
        if (this.$1T_1 && this.$8f_1()) {
            this.get_$3t_1().css('visibility', 'visible');
            this.get_$3y_1().css('visibility', 'hidden');
            this.get_$1Y_1().css('visibility', 'hidden');
        } else if (this.$1T_1 && this.$8g_1()) {
            this.get_$3y_1().css('visibility', 'visible');
            this.get_$3t_1().css('visibility', 'hidden');
            this.get_$1Y_1().css('visibility', 'hidden');
        } else {
            this.get_$3t_1().css('visibility', 'hidden');
            this.get_$3y_1().css('visibility', 'hidden');
            this.get_$1Y_1().css('visibility', '');
        }
    },

    $8f_1: function() {
        return ((!this.$F_1 && this.get_$1Y_1().offset().left < this.get_$13_1().offset().left) ||
            (this.$F_1 && this.get_$1Y_1().offset().left > this.get_$13_1().offset().left));
    },

    $8g_1: function() {
        return (!this.$F_1 && this.get_$1Y_1().offset().left > this.get_$u_1().offset().left) ||
            (this.$F_1 && this.get_$1Y_1().offset().left < this.get_$u_1().offset().left);
    },

    $3i_1: function($p0) {
        var $v_0 = ($p0 > 0) ? this.$4y_1 : 0;
        return -1 * (this.$48_1 - 5) * $p0 + this.$1t_1 - $v_0;
    },

    $5L_1: function($p0) {
        if ($p0 <= -this.$1O_1) {
            this.get_$13_1().removeClass('disabled');
            this.get_$u_1().addClass('disabled');
        } else if ($p0 >= this.$1t_1) {
            this.get_$13_1().addClass('disabled');
            this.get_$u_1().removeClass('disabled');
        } else {
            this.get_$13_1().removeClass('disabled');
            this.get_$u_1().removeClass('disabled');
        }
    },

    $77_1: function($p0) {
        var $v_0 = $P_CRM('.activeStage', this.$3_1);
        if (!$v_0.length) {
            return;
        }
        this.$37_1 = true;
        var $v_1 = this.$3i_1(this.$17_1);
        $v_1 = Math.max($v_1, -this.$1O_1);
        this.$3Y_1 = 1;
        var $$t_3 = this;
        this.$49_1 = window.setInterval(function() {
                $$t_3.$6s_1($v_1);
            },
            10);
        var $$t_4 = this;
        this.$4L_1 = window.setInterval(function() {
                $$t_4.$3Y_1 *= 2;
            },
            300);
    },

    $6s_1: function($p0) {
        var $v_0 = $p0 < this.get_$1u_1();
        var $v_1 = this.get_$1u_1() + (($v_0) ? -1 : 1) * this.$3Y_1;
        if (($v_0 && $v_1 < $p0) || (!$v_0 && $v_1 > $p0)) {
            window.clearInterval(this.$49_1);
            window.clearInterval(this.$4L_1);
            this.get_$h_1().css(this.get_$1q_1(), $p0 + 'px');
            this.$4e_1($p0);
            this.$37_1 = false;
            return;
        }
        this.get_$h_1().css(this.get_$1q_1(), $v_1 + 'px');
        this.$2C_1();
    },

    $83_1: function($p0, $p1) {
        Mscrm.CrmDebug.assert($p1.children().length >= 2, 'We want to set title to 2nd child of stageElement');
        $p1.children()[1].title = this.$4Y_1($p0, '');
        this.$6O_1($p0, $p1);
    },

    $8J_1: function($p0, $p1, $p2, $p3) {
        this.$8F_1($p3);
        $p3.addClass(this.$5U_1($p0, $p1));
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 3);
        var $v_1 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
        if ($v_1) {
            $p3.addClass('unselectedStage');
            $p3.removeClass('selectedStage');
            $p3.removeClass('activeStage');
            $p3.removeClass('disabled');
            $p3.addClass('completedStage');
        }
        if ($v_0) {
            $p3.addClass('abandonedStage');
            if ($p0.get_completed()) {
                $p3.addClass('disabled');
                $p3.addClass('completedStage');
            }
        }
        var $v_2 = this.$5V_1($p0);
        if (!isNullOrEmptyString($v_2)) {
            Mscrm.CrmDebug.assert($p3.children().length >= 2, 'We want to set title to 2nd child of stageElement');
            $p3.children()[1].title = this.$4Y_1($p0, $v_2);
        }
        var $v_3 = $p3.find('.stageNameContent');
        if (!IsNull($v_3)) {
            this.$5v_1($p0, $v_3);
        }
        var $v_4 = !$p0.get_edit();
        var $v_5 = $p0.get_edit() && $p0.get_completed();
        if ($v_1) {
            $v_4 = false;
            $v_5 = true;
        }
        if ($v_0) {
            if ($p0.get_completed()) {
                $v_4 = false;
                $v_5 = true;
            }
        }
        this.$5z_1($p0, $p2);
    },

    $8F_1: function($p0) {
        var $v_0 = new String();
        $v_0 += 'hasPrevious';
        $v_0 += ' hasNext';
        $v_0 += ' selectedStage';
        $v_0 += ' unselectedStage';
        $v_0 += ' activeStage';
        $v_0 += ' disabled';
        $v_0 += ' completedStage';
        $v_0 += ' completedStage';
        $v_0 += ' abandonedStage';
        $p0.removeClass($v_0);
    },

    $5U_1: function($p0, $p1) {
        var $v_0 = 'processStageContainer layer' + $p0.stageIndex;
        if ($p0.stageIndex) {
            $v_0 += ' hasPrevious';
        }
        if ($p0.stageIndex !== this.$0_1.get_stages().length - 1) {
            $v_0 += ' hasNext';
        }
        if ($p1) {
            $v_0 += ' selectedStage';
        } else {
            $v_0 += ' unselectedStage';
        }
        if ($p0.get_active()) {
            this.$17_1 = $p0.stageIndex;
            $v_0 += ' activeStage';
        }
        if (!$p0.get_edit()) {
            $v_0 += ' disabled';
        }
        if ($p0.get_completed()) {
            $v_0 += ' completedStage';
        }
        return $v_0;
    },

    $6O_1: function($p0, $p1) {
        var $v_0 = {};
        $v_0['stage'] = $p0;
        $p1.children().data($v_0);
        var $$t_7 = this;
        $p1.bind('click',
            $v_0,
            function($p1_0) {
                $$t_7.$5A_1($p1_0);
            });
        var $$t_8 = this;
        $p1.bind('keydown',
            $v_0,
            function($p1_0) {
                if ($$t_8.$1o_1($p1_0.which)) {
                    $$t_8.$5A_1($p1_0);
                }
                if ($$t_8.$7O_1($p1_0.which)) {
                    var $v_1 = $p1_0.data;
                    if (!(('stage') in $v_1)) {
                        return;
                    }
                    var $v_2 = $v_1['stage'];
                    $$t_8.$3_1.trigger(ProcessControl.Views.StagesView.keyDownOnStage, [$v_2.stageIndex]);
                    $p1_0.preventDefault();
                }
            });
    },

    actualDispose: function() {
        this.$43_1();
    },

    $43_1: function() {
        for (var $v_0 = 0; $v_0 < this.$0_1.get_stages().length; $v_0++) {
            var $v_1 = this.$0_1.get_stages()[$v_0];
            var $v_2 = this.$1J_1($v_1.stageIndex).children();
            var $v_3 = $v_2.parents('.processStageContainer').first();
            $v_3.unbind();
        }
        this.$61_1(this.get_$13_1());
        this.$61_1(this.get_$u_1());
    },

    $61_1: function($p0) {
        $p0.find('.scrollArrow').unbind();
        $p0.find('.globalActiveStageFlag').unbind();
    },

    $1o_1: function($p0) {
        return $p0 === 13;
    },

    $7O_1: function($p0) {
        return $p0 === 40;
    },

    updateStages: function() {
        this.$3j_1(this.$0_1.get_localActiveStage());
        this.$67_1();
        this.$66_1();
        for (var $$arr_0 = this.$0_1
                     .get_stages(),
            $$len_1 = $$arr_0.length,
            $$idx_2 = 0;
            $$idx_2 < $$len_1;
            ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            var $v_1 = this.$1J_1($v_0.stageIndex);
            var $v_2 = $v_0.get_edit() && $v_0.get_completed();
            var $v_3 = $v_0.get_active();
            var $v_4 = !$v_0.get_edit();
            if ($v_3) {
                this.$17_1 = $v_0.stageIndex;
                $v_1.addClass('activeStage');
            }
        }
        this.$2C_1();
    },

    $67_1: function() {
        for (var $v_0 = 0; $v_0 < this.$0_1.get_stages().length; $v_0++) {
            var $v_1 = this.$1J_1($v_0).children('.processStageTailContainer, .stageLabelMask');
            this.$8c_1(this.$0_1.get_stages()[$v_0], $v_1);
        }
    },

    $91_1: function() {
        for (var $v_0 = 0; $v_0 < this.$0_1.get_stages().length; $v_0++) {
            var $v_1 = $P_CRM('#stage_' + $v_0);
            var $v_2 = this.$0_1.get_stages()[$v_0];
            var $v_3 = this.$0_1.get_selectedStage().stageIndex;
            var $v_4 = $v_3 === $v_2.stageIndex;
            $v_1.addClass(this.$5U_1($v_2, $v_4));
        }
    },

    $65_1: function() {
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 3);
        for (var $v_1 = 0; $v_1 < this.$0_1.get_stages().length; $v_1++) {
            var $v_2 = $P_CRM('#stage_' + $v_1);
            var $v_3 = this.$0_1.get_stages()[$v_1];
            if (!isNullOrEmptyString($v_3.currentStageValue)) {
                var $v_4 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_3.currentStageValue);
                var $v_5 = $v_2.hasClass('disabled');
                var $v_6 = $v_2.hasClass('activeStage');
                var $v_7 = false;
                if (!IsNull(this.$0_1.get_globalActivePathAndStage().get_traversedPath()) &&
                    (this.$0_1.get_globalActivePathAndStage().get_traversedPath().get_path().indexOf($v_4) !== -1) &&
                    !$v_6) {
                    $v_7 = true;
                } else {
                    if (!$v_0 && $v_2.hasClass('completedStage')) {
                        $v_2.removeClass('completedStage');
                    }
                }
            }
        }
    },

    $66_1: function() {
        for (var $v_0 = 0; $v_0 < this.$0_1.get_stages().length; $v_0++) {
            var $v_1 = this.$1J_1($v_0);
            var $v_2 = $v_1.find('span');
            this.$5v_1(this.$0_1.get_stages()[$v_0], $v_2);
        }
    },

    $69_1: function($p0) {
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 3);
        if ($v_0 || isNullOrEmptyString(this.$0_1.get_activeStageActiveFor())) {
            return this.$4d_1($p0) + ' ' + this.$0_1.$8_0.active;
        } else {
            return this.$4d_1($p0) +
                String.format('<span style=\'text-transform: none\'> {0}</span>',
                    String.format(this.$0_1.$8_0.activeFor, this.$0_1.get_activeStageActiveFor()));
        }
    },

    $4d_1: function($p0) {
        return $p0.stageName;
    },

    $5v_1: function($p0, $p1) {
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
        if ($p0.get_active() && !$v_0) {
            $p1.html(this.$69_1($p0));
        } else {
            $p1.text(this.$4d_1($p0));
        }
    },

    $4Y_1: function($p0, $p1) {
        var $v_0 = String.format('{0}: {1}', this.$0_1.$8_0.entity, $p0.entityDisplayName);
        var $v_1 = String.format('{0}: {1}', this.$0_1.$8_0.stage, $p0.stageName);
        var $v_2 = '';
        if (isNullOrEmptyString($p1)) {
            $v_2 = String.format('{0}, {1}', $v_0, $v_1);
        } else {
            var $v_3 = String.format('{0}: {1}', this.$0_1.$8_0.status, $p1);
            var $v_4 = this.$0_1
                .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 3);
            var $v_5 = this.$0_1
                .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
            if (!$v_4 && !$v_5 && $p0.get_active() && !isNullOrEmptyString(this.$0_1.get_activeStageActiveFor())) {
                $v_2 = String.format('{0}, {1}, {2}, {3}', $v_0, $v_1, $v_3, this.$0_1.get_activeStageActiveFor());
            } else {
                $v_2 = String.format('{0}, {1}, {2}', $v_0, $v_1, $v_3);
            }
        }
        return $v_2;
    },

    $8c_1: function($p0, $p1) {
        var $v_0 = this.$5V_1($p0);
        var $v_1 = this.$4Y_1($p0, $v_0);
        $p1.attr('title', $v_1);
    },

    $5V_1: function($p0) {
        var $v_0;
        var $v_1 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 3);
        var $v_2 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
        if ($p0.get_completed() || $v_2) {
            $v_0 = this.$0_1.$8_0.completed;
        } else if ($p0.get_active()) {
            $v_0 = this.$0_1.$8_0.inProgress;
        } else if (!$p0.get_edit() || $v_1) {
            $v_0 = this.$0_1.$8_0.locked;
        } else {
            $v_0 = '';
        }
        return $v_0;
    },

    $5A_1: function($p0) {
        var $v_0 = $p0.data;
        if (!(('stage') in $v_0)) {
            return;
        }
        var $v_1 = $v_0['stage'];
        if ($v_1.get_edit() && this.$7b_1($v_1)) {
            this.$7w_1($v_1);
            return;
        }
        this.$3_1.trigger(ProcessControl.Views.CollapsibleView.expandEvent);
        if ($v_1.stageIndex === this.get_currentSelectedStageIndex()) {
            return;
        }
        var $v_2 = $v_1.stageIndex > this.get_currentSelectedStageIndex();
        if ($v_2) {
            Mscrm.Performance.PerformanceMarkerManager.get_instance()
                .addMarker('StartLoadingProcessStageAdvanceTimestamp');
        } else {
            Mscrm.Performance.PerformanceMarkerManager.get_instance()
                .addMarker('StartLoadingProcessStageBackTimestamp');
        }
        setPerfMarkerTimestamp('StartLoadingNewProcessStageTimestamp');
        Mscrm.MetricsReporting.instance().addMetric('Stage Change', $v_1.stageName);
        this.$3j_1($v_1);
        this.$65_1();
        $p0.preventDefault();
        if ($v_2) {
            Mscrm.Performance.PerformanceMarkerManager.get_instance()
                .addMarker('FinishLoadingProcessStageAdvanceTimestamp');
        } else {
            Mscrm.Performance.PerformanceMarkerManager.get_instance()
                .addMarker('FinishLoadingProcessStageBackTimestamp');
        }
        setPerfMarkerTimestamp('FinishLoadingNewProcessStageTimestamp');
        this.$0_1.selectStage($v_1);
    },

    $7b_1: function($p0) {
        return this.$0_1.needTransit($p0);
    },

    $7w_1: function($p0) {
        var $v_0 = this.$0_1.get_navigationEntitiesDictionary()[$p0.entityLogicalName];
        this.$0_1.set_selectedStage($p0);
        this.$0_1.navigateToEntity($v_0.EntityLogicalName, $v_0.Id);
    },

    changeStageCompleted: function(newActiveStage, advance) {
        this.$6W_1(newActiveStage, advance);
        this.$3j_1(newActiveStage);
        this.$67_1();
        this.$91_1();
        this.$65_1();
        this.$66_1();
        this.$2C_1();
    },

    $6W_1: function($p0, $p1) {
        if ($p0.stageIndex === this.$17_1) {
            return;
        }
        Mscrm.DeferredInlineEditOnDemandInitializerProxy.completeDeferredInitialization();
        var $v_0 = this.$1J_1(this.$17_1);
        $v_0.removeClass('activeStage');
        if ($p1) {
            $v_0.addClass('completedStage');
        }
        var $v_1 = $p0.stageIndex;
        this.$17_1 = $v_1;
        var $v_2 = this.$1J_1($v_1);
        $v_2.removeClass('completedStage');
        $v_2.addClass('activeStage');
    },

    $3j_1: function($p0) {
        if ($p0 === this.$0_1.get_selectedStage()) {
            this.$3_1.trigger(ProcessControl.Views.StagesView.stageChange,
                [this.$0_1.isSwitchAcrossCloseLoopEntity($p0)]);
            return;
        }
        var $v_0 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 3);
        var $v_1 = this.$0_1
            .checkBusinessProcessFlowInstanceStatus(this.$0_1.$1_0.get_businessProcessInstanceStatus(), 2);
        Mscrm.DeferredInlineEditOnDemandInitializerProxy.completeDeferredInitialization();
        var $v_2 = this.$0_1.get_selectedStage();
        var $v_3 = this.get_$3z_1();
        $v_3.removeClass('selectedStage');
        $v_3.addClass('unselectedStage');
        if ($v_0) {
            $v_3.addClass('abandonedStage');
        }
        if ($v_1) {
            $v_3.addClass('completedStage');
        }
        if (this.$0_1.get_selectedStage().get_completed() && !$v_0) {
            $v_3.addClass('completedStage');
        }
        var $v_4 = this.$0_1.isSwitchAcrossCloseLoopEntity($p0);
        this.$0_1.set_selectedStage($p0);
        var $v_5 = this.get_$3z_1();
        $v_5.removeClass('unselectedStage');
        $v_5.addClass('selectedStage');
        if ($v_0) {
            $v_5.addClass('abandonedStage');
        }
        this.$3_1.trigger(ProcessControl.Views.StagesView.stageChange, [$v_4]);
    },

    focusOnStage: function(stageIndex) {
        var $v_0 = this.$1J_1(stageIndex);
        var $v_1 = $v_0.find('[tabindex]');
        if ($v_1.length <= 0) {
            return;
        }
        $v_1[0].focus();
    },

    $6h_1: function() {
        for (var $v_0 = 0; $v_0 < this.$0_1.get_stages().length; $v_0++) {
            this.$5z_1(this.$0_1.get_stages()[$v_0], this.$0_1.get_defaultPath());
        }
        this.$5u_1();
    },

    $1J_1: function($p0) {
        var $v_0 = $p0.toString();
        if ((($v_0) in this.$3a_1)) {
            return this.$3a_1[$v_0];
        } else {
            var $v_1 = $P_CRM('#stage_' + $v_0);
            this.$3a_1[$v_0] = $v_1;
            return $v_1;
        }
    }
}


ProcessControl.Views.StepsView = function(viewModel) {
    this.$$d_$5d_1 = Function.createDelegate(this, this.$5d_1);
    this.$$d_$7i_1 = Function.createDelegate(this, this.$7i_1);
    this.$$d_$7h_1 = Function.createDelegate(this, this.$7h_1);
    this.$$d_$6X_1 = Function.createDelegate(this, this.$6X_1);
    this.$3c_1 = {};
    this.$3d_1 = {};
    ProcessControl.Views.StepsView.initializeBase(this, [viewModel]);
    this.$3_1 = $P_CRM('#processStepsContainer');
    this.$0_1 = viewModel;
    this.$1M_1 = false;
    this.$6P_1();
}
ProcessControl.Views.StepsView.$8v = function($p0) {
    var $v_0 = $p0.find('[tabindex]');
    $v_0.children().unbind('keyup');
    $p0.unbind('keyup');
}
ProcessControl.Views.StepsView.$70 = function($p0) {
    return $p0.find('[isDataUnboundControl]');
}
ProcessControl.Views.StepsView.prototype = {
    $q_1: null,
    $1M_1: false,
    $0_1: null,

    get_$5C_1: function() {
        if (window.UseTabletExperience) {
            return 370;
        }
        return 360;
    },

    $3_1: null,

    get_viewContainer: function() {
        return this.$3_1;
    },

    $D_1: 0,

    get_viewContainerWidth: function() {
        return this.$D_1;
    },

    $2P_1: null,

    get_businessRuleService: function() {
        if (IsNull(this.$2P_1)) {
            this.$2P_1 = new ProcessControl.Services.BusinessRuleService();
        }
        return this.$2P_1;
    },

    set_businessRuleService: function(value) {
        this.$2P_1 = value;
        return value;
    },

    actualDispose: function() {
        this.$32_1();
        this.$8y_1();
    },

    $8y_1: function() {
        for (var $v_0 = 0; $v_0 < this.$0_1.get_stages().length; $v_0++) {
            var $v_1 = this.$0_1.get_stages()[$v_0];
            var $v_2 = this.$1a_1($v_1.stageIndex);
            var $v_3 = this.getStageSteps($v_1.stageIndex);
            $v_3.unbind();
            ProcessControl.Views.StepsView.$8v($v_2);
            this.$8z_1($v_1.stageIndex);
            this.$90_1($v_1.stageIndex);
            this.$8w_1($v_2);
        }
    },

    $8w_1: function($p0) {
        var $v_0 = $p0.find('[isDataUnboundControl]');
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $P_CRM($v_2);
            $v_3.unbind('attribute-changed', this.$$d_$6X_1);
        }
    },

    $8z_1: function($p0) {
        var $v_0 = this.$3p_1($p0);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $P_CRM($v_2);
            $v_3.unbind('attribute-changed', this.$$d_$7h_1);
        }
    },

    $90_1: function($p0) {
        var $v_0 = this.$3p_1($p0);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $P_CRM($v_2);
            $v_3.unbind('focus', this.$$d_$7i_1);
        }
    },

    $32_1: function() {
        this.$0_1.remove_stageGatesVisibilityChanged(this.$$d_$5d_1);
    },

    $6P_1: function() {
        this.$0_1.add_stageGatesVisibilityChanged(this.$$d_$5d_1);
    },

    $5d_1: function($p0, $p1) {
        if (this.$0_1.$2h_0) {
            this.$q_1.removeClass('stageGatesHidden');
        } else {
            this.$q_1.addClass('stageGatesHidden');
        }
    },

    processLayout: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.StepsView.Layout');
        $v_0.start();
        for (var $v_1 = 0; $v_1 < this.$0_1.get_stages().length; $v_1++) {
            var $v_2 = this.$0_1.get_stages()[$v_1];
            var $v_3 = this.$1a_1($v_2.stageIndex);
            if (!$v_3.hasClass('hidden')) {
                $v_3.addClass('hidden');
            }
            this.$84_1($v_2.stageIndex);
        }
        $v_0.stop();
    },

    render: function() {
        var $v_0 = ProcessControl.StopwatchFactory.createStopwatch('ProcessControl.StepsView.Render');
        $v_0.start();
        for (var $v_1 = 0; $v_1 < this.$0_1.get_stages().length; $v_1++) {
            var $v_2 = this.$0_1.get_stages()[$v_1];
            var $v_3 = this.$1a_1($v_2.stageIndex);
            if (this.$5Z_1()) {
                var $v_4 = $v_3.find('[data-attributename]');
                for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                    var $v_6 = $v_4[$v_5];
                    var $v_7 = $v_6.getAttribute('data-attributename');
                    if (this.$7N_1($v_7)) {
                        var $v_8 = $P_CRM($v_6);
                        var $v_9 = Mscrm.InlineEditUtilitiesProxy.getLinkedDataObject($v_8);
                        if (($v_8.attr('data-disabled') === '1') &&
                            (!Mscrm.InlineEditUtilitiesProxy.isControlDisabled($v_8.attr('id'), $v_9))) {
                            $v_8.attr('data-disabled', '');
                            $v_8.trigger(ProcessControl.Views.StepsView.unlockControl);
                        }
                    }
                }
            }
            if ($v_2.stageIndex !== this.$0_1.get_selectedStage().stageIndex) {
                continue;
            }
            this.$5l_1($v_2);
        }
        $v_0.stop();
    },

    $84_1: function($p0) {
        var $v_0 = this.getStageSteps($p0);
        var $$t_8 = this;
        $v_0.unbind('stepControlWiden').bind('stepControlWiden',
            function($p1_0) {
                if (arguments.length < 2) {
                    return;
                }
                var $v_1 = arguments[1];
                var $v_2 = $$t_8.$3_1.width();
                $$t_8.$D_1 = $v_2 + $v_1;
                $$t_8.$3_1.width($$t_8.$D_1);
                var $v_3 = $P_CRM($p1_0.target);
                $$t_8.$5w_1($v_3);
            });
        var $$t_9 = this;
        $v_0.unbind('stepControlNarrow').bind('stepControlNarrow',
            function($p1_0) {
                var $v_4 = $$t_9.$q_1.find('[id^=processStepColumn_]');
                $$t_9.$D_1 = $v_4.length * $$t_9.get_$5C_1() + $v_4.length;
                $$t_9.$3_1.width($$t_9.$D_1);
                $$t_9.$3_1.trigger(ProcessControl.Views.StepsView.narrowSteps);
            });
    },

    $5l_1: function($p0) {
        var $v_0 = this.$1a_1($p0.stageIndex);
        var $v_1 = '';
        if ($p0.stageIndex === this.$0_1.get_selectedStage().stageIndex) {
            $v_0.removeClass('hidden');
            this.$q_1 = $v_0;
            this.$5p_1($p0);
        }
        if ($p0.get_completed()) {
            $v_1 += ' completedStage';
        }
        if (!$p0.get_edit() && !this.$0_1.$X_0) {
            $v_1 += ' disabled';
            var $v_2 = this.getStageSteps($p0.stageIndex);
            var $v_3 = $v_2.children();
            $v_3.attr('data-disabled', '1');
        }
        $v_0.addClass($v_1);
        this.$8G_1($v_0);
    },

    $5Z_1: function() {
        return this.$0_1.$7_0.TypeName === 'lead';
    },

    $7N_1: function($p0) {
        return ProcessControl.Constants.CriticalAttributes.isCriticalAttribute($p0) && this.$5Z_1();
    },

    $8G_1: function($p0) {
        var $v_0 = $p0.find('[isDataUnboundControl]');
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = Mscrm.FormControlInputBehavior.GetBehavior($v_2.id);
            if (IsNull($v_3)) {
                return;
            }
            var $v_4 = $v_3;
            if (IsNull($v_4)) {
                return;
            }
            $v_4.onRender();
        }
    },

    $5w_1: function($p0) {
        var $v_0 = $p0.offset();
        var $v_1 = $v_0.left + $p0.width();
        this.$3_1.trigger(ProcessControl.Views.StepsView.widenSteps, [$v_1]);
    },

    postRender: function() {
        var $v_0 = this.$0_1.get_selectedStage().stageIndex;
        for (var $v_1 = 0; $v_1 < this.$0_1.get_stages().length; $v_1++) {
            var $v_2 = this.$0_1.get_stages()[$v_1];
            if ($v_2.stageIndex !== $v_0) {
                continue;
            }
            this.$53_1($v_2.stageIndex);
            this.$6B_1($v_2.stageIndex);
        }
    },

    updateControlLocks: function() {
        for (var $$arr_0 = this.$0_1
                     .get_stages(),
            $$len_1 = $$arr_0.length,
            $$idx_2 = 0;
            $$idx_2 < $$len_1;
            ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            if ($v_0.get_edit() && !this.$0_1.$X_0) {
                var $v_1 = this.getStageSteps($v_0.stageIndex);
                $v_1.children(':first-child').removeAttr('data-disabled').trigger('unlock');
            }
        }
    },

    completeInitialization: function() {
        var $v_0 = this.$0_1.get_selectedStage().stageIndex;
        for (var $v_1 = 0; $v_1 < this.$0_1.get_stages().length; $v_1++) {
            var $v_2 = this.$0_1.get_stages()[$v_1];
            var $v_3 = this.$1a_1($v_2.stageIndex);
            if ($v_2.stageIndex !== $v_0) {
                this.$5l_1($v_2);
                this.$53_1($v_2.stageIndex);
            }
            this.$6Y_1($v_3);
            this.$6A_1($v_2, $v_3);
        }
    },

    focusOnSteps: function(stageIndex) {
        var $v_0 = this.$1a_1(stageIndex);
        var $v_1 = $v_0.find('[tabindex]');
        if ($v_1.length <= 0) {
            return;
        }
        $v_1[0].focus();
    },

    changeCurrentSteps: function() {
        if (IsNull(this.$q_1)) {
            return;
        }
        this.$q_1.addClass('hidden');
        this.$q_1 = this.$1a_1(this.$0_1.get_selectedStage().stageIndex);
        this.$q_1.removeClass('hidden');
        this.$8t_1(this.$0_1.get_selectedStage());
        this.$5p_1(this.$0_1.get_selectedStage());
    },

    $8t_1: function($p0) {
        if ($p0.controlsAreInitialized) {
            return;
        }
        $p0.controlsAreInitialized = true;
        if (!ProcessControl.Services.ProcessControlInitializer.$N) {
            var $v_0 = this.$q_1.find('div[' +
                Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
                '][' +
                'data-fdeid' +
                '=PrimaryEntity]');
            var $v_1 = this.$6n_1($v_0);
            var $v_2 = this.$6m_1($v_1);
            var $v_3 = Mscrm.ErrorDisplayContainerProviderFactory.createFormErrorDisplayContainerProvider();
            var $v_4 = Mscrm.InlineEditControlInitializersFactory
                .createDomElementInitializer($v_3, this.$0_1.$1e_0, $v_1.get(), false);
            var $v_5 = $v_4.initializeControlInChunks();
            this.get_businessRuleService().registerBusinessRulesOnAttributes($v_2);
        }
    },

    $6m_1: function($p0) {
        var $v_0 = new Array(0);
        for (var $$arr_2 = $p0.get(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            var $v_2 = $v_1.getAttribute(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName);
            if (isNullOrEmptyString($v_2)) {
                continue;
            }
            var $v_3 = String.format('Attribute_PrimaryEntity_{0}', $v_2);
            if (!IsNull($find($v_3))) {
                continue;
            }
            Array.add($v_0, $v_2);
        }
        return $v_0;
    },

    $6n_1: function($p0) {
        var $v_0 = {};
        var $$t_7 = this;
        this.$q_1.find('.ms-crm-LinkControl-content div[' +
            Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
            ']').each(function($p1_0, $p1_1) {
            $v_0[$p1_1.id] = $p1_1;
        });
        var $$t_8 = this;
        var $v_1 = $p0.filter(function($p1_0) {
            var $v_2 = $p0.get($p1_0);
            if ((($v_2.id) in $v_0)) {
                return false;
            }
            return true;
        });
        return $v_1;
    },

    $5b_1: function($p0) {
        return $p0 === 38;
    },

    $6A_1: function($p0, $p1) {
        if (this.$1M_1) {
            return;
        }
        var $v_0 = {};
        $v_0['stage'] = $p0;
        $p1.data($v_0);
        var $v_1 = $p1.find('[tabindex]');
        var $$t_8 = this;
        $v_1.children().bind('keyup',
            function($p1_0) {
                if ($$t_8.$5b_1($p1_0.which)) {
                    $p1_0.stopPropagation();
                }
            });
        var $$t_9 = this;
        $p1.bind('keyup',
            $v_0,
            function($p1_0) {
                if ($$t_9.$5b_1($p1_0.which)) {
                    var $v_2 = $p1_0.data;
                    if (!(('stage') in $v_2)) {
                        return;
                    }
                    var $v_3 = $v_2['stage'];
                    $$t_9.$3_1.trigger(ProcessControl.Views.StepsView.keyUpOnSteps, [$v_3.stageIndex]);
                    $p1_0.preventDefault();
                }
            });
        this.$1M_1 = true;
    },

    $5p_1: function($p0) {
        var $v_0 = Math.ceil($p0.stepCount / 3);
        this.$D_1 = $v_0 * this.get_$5C_1() + $v_0;
        this.$3_1.width(this.$D_1);
        this.$3_1.trigger(ProcessControl.Views.StepsView.resizeSteps);
    },

    $1a_1: function($p0) {
        var $v_0 = $p0.toString();
        if ((($v_0) in this.$3c_1)) {
            return this.$3c_1[$v_0];
        } else {
            var $v_1 = String.format('#processSteps_{0}', $p0);
            var $v_2 = $P_CRM($v_1);
            this.$3c_1[$v_0] = $v_2;
            return $v_2;
        }
    },

    $53_1: function($p0) {
        var $v_0 = this.$3p_1($p0);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $P_CRM($v_2);
            if (!ProcessControl.Services.ProcessControlInitializer.$N) {
                var $v_4 = $v_2.getAttribute('data-attributename');
                var $v_5 = this.$0_1.isInitialAttributeEmpty($v_4);
                var $v_6 = $v_3.parents('.processStep');
                this.$4s_1($v_6, $v_5, false);
                this.$4r_1($v_6);
            }
            $v_3.unbind('attribute-changed', this.$$d_$7h_1).bind('attribute-changed', this.$$d_$7h_1);
        }
    },

    $6B_1: function($p0) {
        var $v_0 = this.$3p_1($p0);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $P_CRM($v_2);
            $v_3.unbind('focus', this.$$d_$7i_1).bind('focus', this.$$d_$7i_1);
        }
    },

    $3p_1: function($p0) {
        return this.getStageSteps($p0).children('div:first-child').filter('[data-attributename]');
    },

    $7h_1: function($p0) {
        if (arguments.length < 2) {
            return;
        }
        var $v_0 = arguments[1];
        var $v_1 = isNullOrEmptyString($v_0);
        var $v_2 = $P_CRM($p0.target);
        var $v_3 = $v_2.parents('.processStep');
        this.$4s_1($v_3, $v_1, true);
        this.$4r_1($v_3);
        var $v_4 = $v_2.attr('data-attributename');
        var $v_5 = $v_2.parents('#processStepsContainer');
        var $v_6 = $v_5.find('.processStepValue > div:first-child').filter('[data-attributename]');
        for (var $v_7 = 0; $v_7 < $v_6.length; $v_7++) {
            var $v_8 = $v_6[$v_7];
            if ($v_4 === $v_8.getAttribute('data-attributename')) {
                var $v_9 = $P_CRM($v_8);
                var $v_A = $v_9.parents('.processStep');
                this.$4s_1($v_A, $v_1, false);
                this.$4r_1($v_3);
            }
        }
    },

    $7i_1: function($p0) {
        if (arguments.length < 1) {
            return;
        }
        var $v_0 = $P_CRM($p0.target);
        var $v_1 = $v_0.parents('.processStep');
        this.$5w_1($v_1);
    },

    $4s_1: function($p0, $p1, $p2) {
        var $v_0 = $p0.parents('.processStepsContent');
        if ($v_0.length > 0) {
            Mscrm.CrmDebug.assert($v_0.length === 1, 'Must have only one steps container');
            Mscrm.CrmDebug.assert($v_0[0].id.startsWith('processSteps_'), 'Steps container id format changed');
            var $v_1 = Number.parseInvariant($v_0[0].id.substr(13));
            var $v_2 = Number.parseInvariant($p0.attr('data-stepIndex'));
            this.$0_1.get_stages()[$v_1].completedSteps[$v_2] = !$p1;
            if ($p2 && this.$0_1.checkRequiredCompleted()) {
                this.$0_1.set_stageGatesVisible(false);
            }
        }
        if ($p1) {
            $p0.addClass('emptyValue');
        } else {
            $p0.removeClass('emptyValue');
        }
    },

    $4r_1: function($p0) {
        if (this.$0_1.isBusinessProcessAborted()) {
            $p0.addClass('abandonedProcessStep');
        } else {
            $p0.removeClass('abandonedProcessStep');
        }
    },

    $6Y_1: function($p0) {
        var $v_0 = ProcessControl.Views.StepsView.$70($p0);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = Mscrm.FormControlInputBehavior.GetBehavior($v_2.id);
            if (IsNull($v_3)) {
                return;
            }
            var $v_4 = $v_3;
            if (IsNull($v_4)) {
                return;
            }
            if ($v_4.get_isEligibleForMarkComplete()) {
                var $v_5 = $P_CRM($v_2);
                this.$52_1($v_5, $v_4);
                $v_5.unbind('attribute-changed', this.$$d_$6X_1).bind('attribute-changed', this.$$d_$6X_1);
            }
        }
    },

    $6X_1: function($p0) {
        if (IsNull($p0.target)) {
            return;
        }
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0.target.id);
        if (IsNull($v_0)) {
            return;
        }
        this.$52_1($P_CRM($p0.target), $v_0);
    },

    $52_1: function($p0, $p1) {
        var $v_0 = $p1.get_isAssociatedStepCompleted();
        var $v_1 = $p0.parents('.processStep');
        if (!$v_0) {
            $v_1.addClass('emptyValue');
        } else {
            $v_1.removeClass('emptyValue');
        }
    },

    getStageSteps: function(stageIndex) {
        var $v_0 = stageIndex.toString();
        if ((($v_0) in this.$3d_1)) {
            return this.$3d_1[$v_0];
        } else {
            var $v_1 = this.$1a_1(stageIndex);
            var $v_2 = $v_1.find('.processStepValue');
            this.$3d_1[$v_0] = $v_2;
            return $v_2;
        }
    }
}


ProcessControl.Views.WarningBarView = function($p0, $p1) {
    this.$$d_$7o_1 = Function.createDelegate(this, this.$7o_1);
    this.$$d_$5d_1 = Function.createDelegate(this, this.$5d_1);
    ProcessControl.Views.WarningBarView.initializeBase(this, [$p1]);
    this.$0_1 = $p1;
    this.$46_1 = $p0;
    this.$2l_1();
    if (!IsNull($p1) && !isNullOrEmptyString($p1.get_initialWarning())) {
        this.show($p1.get_initialWarning(), 0, false);
    }
}
ProcessControl.Views.WarningBarView.prototype = {
    $0_1: null,
    $3_1: null,
    $36_1: null,
    $3J_1: null,
    $3g_1: null,
    $39_1: null,
    $3N_1: null,
    $46_1: null,
    $4C_1: false,
    $22_1: 0,
    $4M_1: 0,

    get_viewContainer: function() {
        if (!this.$3_1) {
            this.$3_1 = this.$46_1.children('.processWarningBar');
        }
        return this.$3_1;
    },

    get_$5B_1: function() {
        if (!this.$36_1) {
            this.$36_1 = this.get_viewContainer().children('.processWarningBar-Close');
        }
        return this.$36_1;
    },

    get_$7Y_1: function() {
        if (!this.$3J_1) {
            this.$3J_1 = this.get_viewContainer().children('.processWarningBar-Text');
        }
        return this.$3J_1;
    },

    get_$68_1: function() {
        if (!this.$3g_1) {
            this.$3g_1 = this.get_viewContainer().children('.processBarWarningIcon');
        }
        return this.$3g_1;
    },

    get_$5N_1: function() {
        if (!this.$39_1) {
            this.$39_1 = this.get_viewContainer().children('.processBarErrorIcon');
        }
        return this.$39_1;
    },

    get_$5g_1: function() {
        if (!this.$3N_1) {
            this.$3N_1 = this.get_viewContainer().parents('tr').first();
        }
        return this.$3N_1;
    },

    showParentTR: function() {
        this.get_$5g_1().css('display', 'block');
    },

    hideParentTR: function() {
        this.get_$5g_1().css('display', 'none');
    },

    show: function($p0, $p1, $p2) {
        if ($p1 < 0) {
            throw Error.argumentOutOfRange('duration', $p1);
        }
        this.$8u_1();
        this.$8m_1($p2);
        this.$22_1++;
        this.get_$7Y_1().text($p0).attr('title', $p0);
        this.get_viewContainer().css('display', 'block');
        if ($p1 > 0) {
            this.$8W_1(this.$22_1, $p1);
        }
        return this.$22_1;
    },

    actualDispose: function() {
        this.$43_1();
    },

    $8m_1: function($p0) {
        if ($p0) {
            this.get_$5N_1().css('display', 'block');
            this.get_$68_1().css('display', 'none');
        } else {
            this.get_$5N_1().css('display', 'none');
            this.get_$68_1().css('display', 'block');
        }
    },

    $8u_1: function() {
        if (this.$4C_1) {
            return;
        }
        var $$t_1 = this;
        this.get_$5B_1().bind('click',
            function($p1_0) {
                $$t_1.get_viewContainer().css('display', 'none');
                $p1_0.preventDefault();
            });
        this.$4C_1 = true;
    },

    $8W_1: function($p0, $p1) {
        var $$t_2 = this;
        window.setTimeout(function() {
                if ($p0 !== $$t_2.$22_1) {
                    return;
                }
                $$t_2.get_viewContainer().css('display', 'none');
            },
            $p1);
    },

    $2l_1: function() {
        if (!IsNull(this.$0_1)) {
            this.$0_1.add_stageGatesVisibilityChanged(this.$$d_$5d_1);
            this.$0_1.add_notification(this.$$d_$7o_1);
        }
    },

    $43_1: function() {
        this.get_$5B_1().unbind();
        if (!IsNull(this.$0_1)) {
            this.$0_1.remove_stageGatesVisibilityChanged(this.$$d_$5d_1);
            this.$0_1.remove_notification(this.$$d_$7o_1);
        }
    },

    $7o_1: function($p0, $p1) {
        this.show($p1.message, 0, $p1.isError);
    },

    $5d_1: function($p0, $p1) {
        if (this.$0_1.$2h_0) {
            this.$4M_1 = this.show(this.$0_1.$8_0.fillRequiredWarning, 10000, false);
        } else {
            if (this.$4M_1 === this.$22_1) {
                this.get_viewContainer().css('display', 'none');
            }
        }
    }
}


Mscrm.ProcessControlClientApiUserHandler.registerClass('Mscrm.ProcessControlClientApiUserHandler',
    null,
    Mscrm.IProcessControlClientApiUserHandler);
Mscrm.DeferredInlineEditOnDemandInitializerProxy.registerClass('Mscrm.DeferredInlineEditOnDemandInitializerProxy');
Mscrm.ProcessControlShared.ObjectModels.AttributeValue
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.AttributeValue');
Mscrm.ProcessControlShared.ObjectModels.BusinessProcessInstance
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.BusinessProcessInstance');
Mscrm.ProcessControlShared.ObjectModels.ControlStages
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.ControlStages');
Mscrm.ProcessControlShared.ObjectModels.NavigationSource
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.NavigationSource');
Mscrm.ProcessControlShared.ObjectModels.TraversedPath
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.TraversedPath',
        null,
        Mscrm.ProcessControlShared.ObjectModels.ITraversedPath);
Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.PathAndStageInfo',
        null,
        Mscrm.ProcessControlShared.ObjectModels.IPathAndStageInfo);
Mscrm.ProcessControlShared.ObjectModels.EntityLink.registerClass('Mscrm.ProcessControlShared.ObjectModels.EntityLink');
Mscrm.ProcessControlShared.ObjectModels.EntityStage
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.EntityStage');
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData');
Mscrm.ProcessControlShared.ObjectModels.NavigationEntity
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.NavigationEntity');
Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData');
Mscrm.ProcessControlShared.ObjectModels.ProcessControlDataJsonWrapper
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.ProcessControlDataJsonWrapper');
Mscrm.ProcessControlShared.ObjectModels.Stage.registerClass('Mscrm.ProcessControlShared.ObjectModels.Stage');
Mscrm.ProcessControlShared.ObjectModels.StageCondition
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.StageCondition');
Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings
    .registerClass('Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings');
ProcessControl.FormDataUtility.registerClass('ProcessControl.FormDataUtility');
ProcessControl.StopwatchFactory.registerClass('ProcessControl.StopwatchFactory');
ProcessControl.ClientApi.BusinessProcessFlow.registerClass('ProcessControl.ClientApi.BusinessProcessFlow',
    Xrm.XrmBusinessProcessFlow);
ProcessControl.ClientApi.BusinessProcessFlow.XrmProcessStages
    .registerClass('ProcessControl.ClientApi.BusinessProcessFlow.XrmProcessStages',
        Xrm.XrmCollection$1.$$(Xrm.XrmProcessStage));
ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper',
        null,
        ProcessControl.ClientApi.ILightWeightAttributeWrapper);
ProcessControl.ClientApi.NumberLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.NumberLightWeightAttributeWrapper',
        ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper);
ProcessControl.ClientApi.ProcessStageCategory.registerClass('ProcessControl.ClientApi.ProcessStageCategory');
ProcessControl.ClientApi.CurrencyLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.CurrencyLightWeightAttributeWrapper',
        ProcessControl.ClientApi.NumberLightWeightAttributeWrapper);
ProcessControl.ClientApi.DateTimeLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.DateTimeLightWeightAttributeWrapper',
        ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper);
ProcessControl.ClientApi.ProcessObjectBuilder.registerClass('ProcessControl.ClientApi.ProcessObjectBuilder',
    null,
    ProcessControl.ClientApi.IProcessObjectBuilder);
ProcessControl.ClientApi.ProcessStage.registerClass('ProcessControl.ClientApi.ProcessStage',
    null,
    Xrm.IXrmCollectionItem);
ProcessControl.ClientApi.ProcessStage.XrmProcessSteps
    .registerClass('ProcessControl.ClientApi.ProcessStage.XrmProcessSteps', Xrm.XrmCollection$1.$$(Xrm.XrmProcessStep));
ProcessControl.ClientApi.ProcessStep.registerClass('ProcessControl.ClientApi.ProcessStep', Xrm.XrmProcessStep);
ProcessControl.ClientApi.LightWeightAttributeManager
    .registerClass('ProcessControl.ClientApi.LightWeightAttributeManager',
        null,
        ProcessControl.ClientApi.ILightWeightAttributeManager);
ProcessControl.ClientApi.LightWeightAttributeFactory
    .registerClass('ProcessControl.ClientApi.LightWeightAttributeFactory',
        null,
        ProcessControl.ClientApi.ILightWeightAttributeFactory);
ProcessControl.ClientApi.BooleanLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.BooleanLightWeightAttributeWrapper',
        ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper);
ProcessControl.ClientApi.EmptyLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.EmptyLightWeightAttributeWrapper',
        null,
        ProcessControl.ClientApi.ILightWeightAttributeWrapper);
ProcessControl.ClientApi.LookupLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.LookupLightWeightAttributeWrapper',
        ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper);
ProcessControl.ClientApi.OptionSetLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.OptionSetLightWeightAttributeWrapper',
        ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper);
ProcessControl.ClientApi.PartyListLightWeightAttributeWrapper
    .registerClass('ProcessControl.ClientApi.PartyListLightWeightAttributeWrapper',
        ProcessControl.ClientApi.DefaultLightWeightAttributeWrapper);
ProcessControl.Events.TaskCompletionEventArgs.registerClass('ProcessControl.Events.TaskCompletionEventArgs',
    Sys.EventArgs);
ProcessControl.Events.ProcessControlEventArgs.registerClass('ProcessControl.Events.ProcessControlEventArgs',
    ProcessControl.Events.TaskCompletionEventArgs);
ProcessControl.Events.NotificationEventArgs.registerClass('ProcessControl.Events.NotificationEventArgs', Sys.EventArgs);
ProcessControl.Constants.CriticalAttributes.registerClass('ProcessControl.Constants.CriticalAttributes');
ProcessControl.Constants.CssClasses.registerClass('ProcessControl.Constants.CssClasses');
ProcessControl.Constants.CssProperties.registerClass('ProcessControl.Constants.CssProperties');
ProcessControl.Constants.EventNames.registerClass('ProcessControl.Constants.EventNames');
ProcessControl.Constants.HtmlAttributes.registerClass('ProcessControl.Constants.HtmlAttributes');
ProcessControl.Constants.HtmlTags.registerClass('ProcessControl.Constants.HtmlTags');
ProcessControl.Constants.Platforms.registerClass('ProcessControl.Constants.Platforms');
ProcessControl.Constants.StopwatchNames.registerClass('ProcessControl.Constants.StopwatchNames');
ProcessControl.Reflow.NonTraversedDefaultPathCalculator
    .registerClass('ProcessControl.Reflow.NonTraversedDefaultPathCalculator',
        null,
        ProcessControl.Reflow.INonTraversedDefaultPathCalculator,
        ProcessControl.Reflow.IDefaultPathCalculator);
ProcessControl.Reflow.BusinessRuleStageCommand
    .registerClass('ProcessControl.Reflow.BusinessRuleStageCommand', null, ProcessControl.Reflow.IBusinessRuleCommand);
ProcessControl.Reflow.TraversedDefaultPathCalculator
    .registerClass('ProcessControl.Reflow.TraversedDefaultPathCalculator',
        null,
        ProcessControl.Reflow.ITraversedDefaultPathCalculator,
        ProcessControl.Reflow.IDefaultPathCalculator);
ProcessControl.Reflow.AfterLoadDefaultPathCalculator
    .registerClass('ProcessControl.Reflow.AfterLoadDefaultPathCalculator',
        null,
        ProcessControl.Reflow.IAfterLoadDefaultPathCalculator,
        ProcessControl.Reflow.IDefaultPathCalculator);
ProcessControl.Reflow.LoadTimeDefaultPathCalculator
    .registerClass('ProcessControl.Reflow.LoadTimeDefaultPathCalculator',
        null,
        ProcessControl.Reflow.ILoadTimeDefaultPathCalculator,
        ProcessControl.Reflow.IDefaultPathCalculator);
ProcessControl.Reflow.RuntimeDefaultPathCalculator
    .registerClass('ProcessControl.Reflow.RuntimeDefaultPathCalculator',
        null,
        ProcessControl.Reflow.IRuntimeDefaultPathCalculator,
        ProcessControl.Reflow.IDefaultPathCalculator);
ProcessControl.Reflow.StaticPathToDefaultPathCalculator
    .registerClass('ProcessControl.Reflow.StaticPathToDefaultPathCalculator',
        null,
        ProcessControl.Reflow.IStaticPathToDefaultPathCalculator,
        ProcessControl.Reflow.IDefaultPathCalculator);
ProcessControl.Reflow.BusinessRuleRelatedEntityStageCommand
    .registerClass('ProcessControl.Reflow.BusinessRuleRelatedEntityStageCommand',
        ProcessControl.Reflow.BusinessRuleStageCommand);
ProcessControl.Reflow.BusinessRulePrimaryEntityStageCommand
    .registerClass('ProcessControl.Reflow.BusinessRulePrimaryEntityStageCommand',
        ProcessControl.Reflow.BusinessRuleStageCommand);
ProcessControl.Reflow.BusinessRuleStageCommandFactory
    .registerClass('ProcessControl.Reflow.BusinessRuleStageCommandFactory',
        null,
        ProcessControl.Reflow.IBusinessRuleStageCommandFactory);
ProcessControl.Reflow.WebBusinessRuleCaller.registerClass('ProcessControl.Reflow.WebBusinessRuleCaller',
    null,
    ProcessControl.Reflow.IBusinessRuleCaller);
ProcessControl.Reflow.TraversedPathProvider.registerClass('ProcessControl.Reflow.TraversedPathProvider',
    null,
    ProcessControl.Reflow.ITraversedPathProvider);
ProcessControl.Reflow.DefaultPathChangeContext
    .registerClass('ProcessControl.Reflow.DefaultPathChangeContext',
        null,
        ProcessControl.Reflow.IDefaultPathChangeContext);
ProcessControl.Reflow.InvocationSourceConstants.registerClass('ProcessControl.Reflow.InvocationSourceConstants');
ProcessControl.Reflow.DefaultPathChangedEventArgs
    .registerClass('ProcessControl.Reflow.DefaultPathChangedEventArgs', Sys.EventArgs);
ProcessControl.Reflow.DefaultPathChangeHandler
    .registerClass('ProcessControl.Reflow.DefaultPathChangeHandler',
        null,
        ProcessControl.Reflow.IDefaultPathChangeHandler);
ProcessControl.Reflow.DefaultPathChangeListener
    .registerClass('ProcessControl.Reflow.DefaultPathChangeListener',
        null,
        ProcessControl.Reflow.IDefaultPathChangeListener);
ProcessControl.Reflow.DefaultPathManager.registerClass('ProcessControl.Reflow.DefaultPathManager',
    null,
    ProcessControl.Reflow.IDefaultPathManager);
ProcessControl.Reflow.StageLinkedListArray.registerClass('ProcessControl.Reflow.StageLinkedListArray',
    null,
    ProcessControl.Reflow.IStageLinkedListArray);
ProcessControl.Reflow.StageLinkedNode.registerClass('ProcessControl.Reflow.StageLinkedNode',
    ProcessControl.Reflow.LinkedNode$1.$$(String),
    ProcessControl.Reflow.IStageLinkedNode,
    ProcessControl.Reflow.ILinkedNode$1.$$(String));
ProcessControl.Reflow.XrmApiCode.registerClass('ProcessControl.Reflow.XrmApiCode');
ProcessControl.Services.ActionItem.registerClass('ProcessControl.Services.ActionItem');
ProcessControl.Services.ActionQueue.registerClass('ProcessControl.Services.ActionQueue');
ProcessControl.Services.ClosedLoopService.registerClass('ProcessControl.Services.ClosedLoopService',
    null,
    ProcessControl.Services.IClosedLoopService);
ProcessControl.Services.BusinessRuleService.registerClass('ProcessControl.Services.BusinessRuleService',
    null,
    ProcessControl.Services.IBusinessRuleService);
ProcessControl.Services.NavigationService.registerClass('ProcessControl.Services.NavigationService',
    null,
    ProcessControl.Services.INavigationService);
ProcessControl.Services.SaveStageService.registerClass('ProcessControl.Services.SaveStageService',
    null,
    ProcessControl.Services.ISaveStageService);
ProcessControl.Services.EmptySaveService.registerClass('ProcessControl.Services.EmptySaveService',
    ProcessControl.Services.SaveStageService);
ProcessControl.Services.LocalTraversedPathAndActiveStageService
    .registerClass('ProcessControl.Services.LocalTraversedPathAndActiveStageService',
        null,
        ProcessControl.Services.ILocalTraversedPathAndActiveStageService);
ProcessControl.Services.PlatformService.registerClass('ProcessControl.Services.PlatformService');
ProcessControl.Services.SaveActionArgument.registerClass('ProcessControl.Services.SaveActionArgument');
ProcessControl.Services.StageActionService.registerClass('ProcessControl.Services.StageActionService',
    null,
    ProcessControl.Services.IStageActionService,
    Sys.IDisposable);
ProcessControl.Services.ControlDataService.registerClass('ProcessControl.Services.ControlDataService',
    null,
    ProcessControl.Services.IControlDataService);
ProcessControl.Services.AttributeNames.registerClass('ProcessControl.Services.AttributeNames');
ProcessControl.Services.DebugService.registerClass('ProcessControl.Services.DebugService');
ProcessControl.Services.ImageStripService.registerClass('ProcessControl.Services.ImageStripService');
ProcessControl.Services.ProcessControlInitializer
    .registerClass('ProcessControl.Services.ProcessControlInitializer', null, Sys.IDisposable);
ProcessControl.Services.RefreshFormActionService
    .registerClass('ProcessControl.Services.RefreshFormActionService', ProcessControl.Services.StageActionService);
ProcessControl.Services.RefreshFormSaveService
    .registerClass('ProcessControl.Services.RefreshFormSaveService', ProcessControl.Services.SaveStageService);
ProcessControl.Services.SaveServiceFactory.registerClass('ProcessControl.Services.SaveServiceFactory');
ProcessControl.Services.StageActonFactory.registerClass('ProcessControl.Services.StageActonFactory');
ProcessControl.ViewModels.ProcessControlViewModel
    .registerClass('ProcessControl.ViewModels.ProcessControlViewModel', null, Sys.IDisposable);
ProcessControl.Views.BaseView.registerClass('ProcessControl.Views.BaseView', null, Sys.IDisposable);
ProcessControl.Views.ActionsView.registerClass('ProcessControl.Views.ActionsView', ProcessControl.Views.BaseView);
ProcessControl.Views.CollapsibleView.registerClass('ProcessControl.Views.CollapsibleView',
    ProcessControl.Views.BaseView);
ProcessControl.Views.ProcessControlView.registerClass('ProcessControl.Views.ProcessControlView',
    ProcessControl.Views.BaseView);
ProcessControl.Views.ProcessControlView.XrmProcessStages
    .registerClass('ProcessControl.Views.ProcessControlView.XrmProcessStages',
        Xrm.XrmCollection$1.$$(Xrm.XrmProcessStage));
ProcessControl.Views.StagesView.registerClass('ProcessControl.Views.StagesView', ProcessControl.Views.BaseView);
ProcessControl.Views.StepsView.registerClass('ProcessControl.Views.StepsView', ProcessControl.Views.BaseView);
ProcessControl.Views.WarningBarView.registerClass('ProcessControl.Views.WarningBarView', ProcessControl.Views.BaseView);
Mscrm.ProcessControlClientApiUserHandler.$3E = null;
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData
    .businessProcessFlowInstanceIdAttribute = 'businessprocessflowinstanceid';
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.processIdAttribute = 'processid';
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.businessProcessFlowInstanceNameAttribute = 'name';
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.businessProcessFlowInstanceStateAttribute = 'statecode';
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.businessProcessFlowInstanceStatusAttribute = 'statuscode';
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.maxEntitiesInProcess = 5;
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.processStageIdAttribute = 'processstageid';
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.traversedPathAttributeName = 'traversedpath';
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.selectedstageIdAttribute = 'selectedstageid';
ProcessControl.ClientApi.ProcessStageCategory.emptyValue = -1;
ProcessControl.ClientApi.LightWeightAttributeManager.$35 = null;
ProcessControl.Constants.CriticalAttributes.$5e = 'parentaccountid';
ProcessControl.Constants.CriticalAttributes.$5f = 'parentcontactid';
ProcessControl.Constants.CssClasses.hiddenClass = 'hidden';
ProcessControl.Constants.CssClasses.completedClass = 'completedStage';
ProcessControl.Constants.CssClasses.disabledClass = 'disabled';
ProcessControl.Constants.CssProperties.direction = 'direction';
ProcessControl.Constants.CssProperties.minWidth = 'min-width';
ProcessControl.Constants.CssProperties.height = 'height';
ProcessControl.Constants.CssProperties.width = 'width';
ProcessControl.Constants.CssProperties.marginLeft = 'margin-left';
ProcessControl.Constants.CssProperties.marginRight = 'margin-right';
ProcessControl.Constants.CssProperties.left = 'left';
ProcessControl.Constants.EventNames.beforeUnload = 'beforeunload';
ProcessControl.Constants.EventNames.resize = 'resize';
ProcessControl.Constants.EventNames.mouseEvents = 'MouseEvents';
ProcessControl.Constants.EventNames.attributeChanged = 'attribute-changed';
ProcessControl.Constants.EventNames.select = 'select';
ProcessControl.Constants.EventNames.blur = 'blur';
ProcessControl.Constants.EventNames.focus = 'focus';
ProcessControl.Constants.EventNames.click = 'click';
ProcessControl.Constants.EventNames.editValueChange = 'ms-crm-EditValueChange';
ProcessControl.Constants.EventNames.validateOnKeyDown = 'ms-crm-ValidateOnKeyDown';
ProcessControl.Constants.EventNames.propertyChange = 'ms-crm-PropertyChange';
ProcessControl.Constants.EventNames.keyUp = 'keyup';
ProcessControl.Constants.EventNames.keyDown = 'keydown';
ProcessControl.Constants.EventNames.keyPress = 'keypress';
ProcessControl.Constants.EventNames.inlineTabStateChange = 'InlineTabStateChange';
ProcessControl.Constants.EventNames.unlock = 'unlock';
ProcessControl.Constants.EventNames.mouseOver = 'mouseover';
ProcessControl.Constants.EventNames.mouseOut = 'mouseout';
ProcessControl.Constants.EventNames.mouseUp = 'mouseup';
ProcessControl.Constants.EventNames.mouseDown = 'mousedown';
ProcessControl.Constants.EventNames.mouseLeave = 'mouseleave';
ProcessControl.Constants.EventNames.mouseEnter = 'mouseenter';
ProcessControl.Constants.EventNames.change = 'change';
ProcessControl.Constants.EventNames.load = 'load';
ProcessControl.Constants.EventNames.focusIn = 'focusin';
ProcessControl.Constants.EventNames.focusOut = 'focusout';
ProcessControl.Constants.HtmlAttributes.srcAttribute = 'src';
ProcessControl.Constants.HtmlAttributes.titleAttribute = 'title';
ProcessControl.Constants.HtmlAttributes.altAttribute = 'alt';
ProcessControl.Constants.HtmlAttributes.tabIndexAttribute = 'tabindex';
ProcessControl.Constants.HtmlAttributes.classAttribute = 'class';
ProcessControl.Constants.HtmlTags.bodyTag = 'body';
ProcessControl.Constants.HtmlTags.imageTag = 'img';
ProcessControl.Constants.HtmlTags.aTag = 'a';
ProcessControl.Constants.HtmlTags.spanTag = 'span';
ProcessControl.Constants.Platforms.mac = 'mac';
ProcessControl.Constants.Platforms.win = 'win';
ProcessControl.Constants.Platforms.unknown = 'unknownPlatform';
ProcessControl.Constants.StopwatchNames.dataServiceUpdate = 'ProcessControl.DataService.Update';
ProcessControl.Constants.StopwatchNames.initializeViewModelFormData = 'ProcessControl.InitializeViewModel.FormData';
ProcessControl.Constants.StopwatchNames.viewModelInitDataServiceNew = 'ProcessControl.ViewModel.initDataServiceNew';
ProcessControl.Constants.StopwatchNames
    .viewModelInitDataServiceBuilding = 'ProcessControl.ViewModel.initDataService.Building';
ProcessControl.Constants.StopwatchNames
    .initializeWorkflowStep = 'ProcessControl.ControlDataService.InitializeWorkflowStep';
ProcessControl.Constants.StopwatchNames.initializeBpfVisitor = 'ProcessControl.ControlDataService.InitializeBpfVisitor';
ProcessControl.Constants.StopwatchNames
    .viewModelInitDataServiceReInit = 'ProcessControl.ViewModel.initDataServiceReInit';
ProcessControl.Constants.StopwatchNames.pathManagerInit = 'DefaultPathManagerInitialization';
ProcessControl.Constants.StopwatchNames.slideDown = 'ProcessControl.SlideDown';
ProcessControl.Constants.StopwatchNames.initializeView = 'ProcessControl.InitializeView';
ProcessControl.Constants.StopwatchNames.initializeSubView = 'ProcessControl.View.InitializeSubViews';
ProcessControl.Constants.StopwatchNames.initializeSlider = 'ProcessControl.View.InitializeSlider';
ProcessControl.Constants.StopwatchNames.viewResize = 'ProcessControl.View.Resize';
ProcessControl.Constants.StopwatchNames.viewAdjust = 'ProcessControl.View.Adjust';
ProcessControl.Constants.StopwatchNames.viewContainerWidth = 'ProcessControl.View.ContainerWidth';
ProcessControl.Constants.StopwatchNames.viewRender = 'ProcessControl.View.Render';
ProcessControl.Constants.StopwatchNames.stagesViewRender = 'ProcessControl.StagesView.Render';
ProcessControl.Constants.StopwatchNames.stepsViewRender = 'ProcessControl.StepsView.Render';
ProcessControl.Constants.StopwatchNames.actionsViewRender = 'ProcessControl.ActionsView.Render';
ProcessControl.Constants.StopwatchNames.processLayout = 'ProcessControl.ProcessLayout';
ProcessControl.Constants.StopwatchNames.viewLayout = 'ProcessControl.View.Layout';
ProcessControl.Constants.StopwatchNames.stagesViewLayout = 'ProcessControl.StagesView.Layout';
ProcessControl.Constants.StopwatchNames.stepsViewLayout = 'ProcessControl.StepsView.Layout';
ProcessControl.Constants.StopwatchNames.actionsViewLayout = 'ProcessControl.ActionsView.Layout';
ProcessControl.Reflow.InvocationSourceConstants.internal = 'internal';
ProcessControl.Reflow.DefaultPathManager.defaultPathChangedEventName = 'DefauiltPathChanged';
ProcessControl.Reflow.DefaultPathManager.defaultPathInitializedEventName = 'DefauiltPathInitialized';
ProcessControl.Services.PlatformService.$s = 0;
ProcessControl.Services.ControlDataService.stageEntityTypeCode = 4724;
ProcessControl.Services.ControlDataService.stageEntityName = 'processstage';
ProcessControl.Services.ControlDataService.invalidStageIndex = -1;
ProcessControl.Services.AttributeNames.processId = 'processid';
ProcessControl.Services.AttributeNames.stageId = 'stageid';
ProcessControl.Services.AttributeNames.traversedPath = 'traversedpath';
ProcessControl.Services.ProcessControlInitializer.$N = false;
ProcessControl.Services.SaveStageService.stageSetEventKey = 'SaveTaskCompleted';
ProcessControl.Views.ActionsView.actionCompleted = 'actionCompleted.processActions';
ProcessControl.Views.CollapsibleView.widthOfOtherElementsOnRow = 61;
ProcessControl.Views.CollapsibleView.collapsed = 'collapsed.processCollapsible';
ProcessControl.Views.CollapsibleView.expanded = 'expanded.processCollapsible';
ProcessControl.Views.CollapsibleView.expandEvent = 'expand.processCollapsible';
ProcessControl.Views.ProcessControlView.$F = false;
ProcessControl.Views.StagesView.stageDataKey = 'stage';
ProcessControl.Views.StagesView.keyDownOnStage = 'keydown.processStages';
ProcessControl.Views.StagesView.stageChange = 'stageChange.processStages';
ProcessControl.Views.StepsView.stageDataKey = 'stage';
ProcessControl.Views.StepsView.keyUpOnSteps = 'keyup.processSteps';
ProcessControl.Views.StepsView.resizeSteps = 'resize.processSteps';
ProcessControl.Views.StepsView.widenSteps = 'widen.processSteps';
ProcessControl.Views.StepsView.narrowSteps = 'narrow.processSteps';
ProcessControl.Views.StepsView.unlockControl = 'unlock';
ProcessControl.Views.WarningBarView.infiniteDuration = 0;
//@ sourceMappingURL=.srcmap