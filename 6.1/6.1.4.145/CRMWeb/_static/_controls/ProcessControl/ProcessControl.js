Type.registerNamespace('Mscrm');

Type.registerNamespace('Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web');

Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning = function() {}
Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning.prototype = {
    none: 0, 
    insufficientPrivilegesToViewProcess: 1, 
    processNotAvailable: 2, 
    processIsNotActive: 3
}
Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning.registerEnum('Microsoft.Crm.Application.Components.Sdk.ReadFormControls.Web.ProcessControlWarning', false);


Type.registerNamespace('Sales.Common.Framework');

// file://c:\bt\160165\src\core\application\web\scriptsharp\_Common\Scripts\Framework\QueryStringUtils.js.cs (19,3)
function parseQueryString(windowLocation) {
    if (IsNull(windowLocation) || isNullOrEmptyString(windowLocation.search)) {
        return {};
    }
    var $v_0 = windowLocation.search.substr(1);
    return parseQueryStringValue($v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_Common\Scripts\Framework\QueryStringUtils.js.cs (34,3)
function parseQueryStringValue(queryStringValue) {
    if (IsNull(queryStringValue)) {
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
// file://c:\bt\160165\src\core\application\web\scriptsharp\_Common\Scripts\Framework\QueryStringUtils.js.cs (56,3)
function createEncodedQueryString(parameters) {
    var $v_0 = '';
    var $$dict_2 = parameters;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        var $v_2 = $v_1.key;
        var $v_3 = CrmEncodeDecode.CrmUrlEncode($v_1.value);
        $v_0 += String.format('{0}={1}&', $v_2, $v_3);
    }
    return $v_0.substr(0, $v_0.length - 1);
}


Type.registerNamespace('ProcessControl.Constants');

ProcessControl.Constants.Platform = function() {}
ProcessControl.Constants.Platform.prototype = {
    test: 0, 
    refreshForm: 1
}
ProcessControl.Constants.Platform.registerEnum('ProcessControl.Constants.Platform', false);


ProcessControl.Constants.CriticalAttributes = function ProcessControl_Constants_CriticalAttributes() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Constants\CriticalAttributes.js.cs (11,3)
ProcessControl.Constants.CriticalAttributes.isCriticalAttribute = function ProcessControl_Constants_CriticalAttributes$isCriticalAttribute(attributeName) {
    return (attributeName === ProcessControl.Constants.CriticalAttributes.$30 || attributeName === ProcessControl.Constants.CriticalAttributes.$31);
}


ProcessControl.Constants.CssClasses = function ProcessControl_Constants_CssClasses() {
}


ProcessControl.Constants.CssProperties = function ProcessControl_Constants_CssProperties() {
}


ProcessControl.Constants.EntityLogicalNames = function ProcessControl_Constants_EntityLogicalNames() {
}


ProcessControl.Constants.EventNames = function ProcessControl_Constants_EventNames() {
}


ProcessControl.Constants.HtmlAttributes = function ProcessControl_Constants_HtmlAttributes() {
}


ProcessControl.Constants.HtmlTags = function ProcessControl_Constants_HtmlTags() {
}


ProcessControl.Constants.Platforms = function ProcessControl_Constants_Platforms() {
}


Type.registerNamespace('ProcessControl.Errors');

ProcessControl.Errors.ErrorCode = function() {}
ProcessControl.Errors.ErrorCode.prototype = {
    none: 0, 
    generic: 1, 
    advanceStageFailure: 2, 
    backStageFailure: 3, 
    saveStageFailure: 4
}
ProcessControl.Errors.ErrorCode.registerEnum('ProcessControl.Errors.ErrorCode', false);


Type.registerNamespace('ProcessControl.Events');

ProcessControl.Events.NotificationEventArgs = function ProcessControl_Events_NotificationEventArgs() {
    ProcessControl.Events.NotificationEventArgs.initializeBase(this);
}
ProcessControl.Events.NotificationEventArgs.prototype = {
    message: null,
    isError: false
}


ProcessControl.Events.TaskCompletionEventArgs = function ProcessControl_Events_TaskCompletionEventArgs() {
    ProcessControl.Events.TaskCompletionEventArgs.initializeBase(this);
}
ProcessControl.Events.TaskCompletionEventArgs.prototype = {
    results: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Events\TaskCompletionEventArgs.js.cs (35,4)
    get_isError: function ProcessControl_Events_TaskCompletionEventArgs$get_isError() {
        return !!this.error;
    },
    
    error: 0,
    errorMessage: null
}


Type.registerNamespace('Mscrm.ProcessControlShared.ObjectModels');

Mscrm.ProcessControlShared.ObjectModels.ConditionOperator = function() {}
Mscrm.ProcessControlShared.ObjectModels.ConditionOperator.prototype = {
    nullOperator: 12, 
    notNullOperator: 13
}
Mscrm.ProcessControlShared.ObjectModels.ConditionOperator.registerEnum('Mscrm.ProcessControlShared.ObjectModels.ConditionOperator', false);


Mscrm.ProcessControlShared.ObjectModels.AttributeValue = function Mscrm_ProcessControlShared_ObjectModels_AttributeValue() {
}
Mscrm.ProcessControlShared.ObjectModels.AttributeValue.prototype = {
    value: null,
    raw: null
}


Mscrm.ProcessControlShared.ObjectModels.ControlStages = function Mscrm_ProcessControlShared_ObjectModels_ControlStages() {
}
Mscrm.ProcessControlShared.ObjectModels.ControlStages.prototype = {
    stages: null,
    previousConditions: null,
    nextConditions: null
}


Mscrm.ProcessControlShared.ObjectModels.EntityLink = function Mscrm_ProcessControlShared_ObjectModels_EntityLink() {
}
Mscrm.ProcessControlShared.ObjectModels.EntityLink.prototype = {
    targetEntityLogicalName: null,
    linkAttributeName: null
}


Mscrm.ProcessControlShared.ObjectModels.EntityStage = function Mscrm_ProcessControlShared_ObjectModels_EntityStage() {
}
Mscrm.ProcessControlShared.ObjectModels.EntityStage.prototype = {
    currentStage: 0,
    disabled: false,
    entityLogicalName: null,
    entityTypeCode: 0,
    id: null
}


Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData = function Mscrm_ProcessControlShared_ObjectModels_GlobalNavigationData() {
}
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.prototype = {
    activeStageId: null,
    navigationEntities: null
}


Mscrm.ProcessControlShared.ObjectModels.NavigationEntity = function Mscrm_ProcessControlShared_ObjectModels_NavigationEntity() {
}
Mscrm.ProcessControlShared.ObjectModels.NavigationEntity.prototype = {
    Id: null,
    PrimaryField: null,
    EntityTypeCode: 0,
    EntityLogicalName: null,
    PrimaryKeyName: null
}


Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData = function Mscrm_ProcessControlShared_ObjectModels_NavigationEntitiesData() {
}
Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData.prototype = {
    EntityDisplayName: null,
    EntityLogicalName: null,
    EntityTypeCode: 0,
    ShowCreate: false,
    NavigationEntities: null,
    Success: false
}


Mscrm.ProcessControlShared.ObjectModels.ProcessControlData = function Mscrm_ProcessControlShared_ObjectModels_ProcessControlData() {
}
Mscrm.ProcessControlShared.ObjectModels.ProcessControlData.prototype = {
    _processStages: null,
    _globalNavigationData: null,
    _processControlStrings: null,
    _processId: null,
    _warning: null,
    _warningCode: 0
}


Mscrm.ProcessControlShared.ObjectModels.Stage = function Mscrm_ProcessControlShared_ObjectModels_Stage() {
}
Mscrm.ProcessControlShared.ObjectModels.Stage.prototype = {
    stageName: null,
    entityLogicalName: null,
    entityDisplayName: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (51,4)
    get_completed: function Mscrm_ProcessControlShared_ObjectModels_Stage$get_completed() {
        return this.$1_0.isCompleted(this.$10_0);
    },
    
    stepCount: 0,
    displayIndex: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (75,4)
    get_advance: function Mscrm_ProcessControlShared_ObjectModels_Stage$get_advance() {
        return this.$1_0.canAdvance(this.$10_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (83,4)
    get_back: function Mscrm_ProcessControlShared_ObjectModels_Stage$get_back() {
        return this.$1_0.canGoBack(this.$10_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (91,4)
    get_navigate: function Mscrm_ProcessControlShared_ObjectModels_Stage$get_navigate() {
        return this.$1_0.canNavigate(this.$10_0);
    },
    
    completedSteps: null,
    nextStageValue: null,
    currentStageValue: null,
    previousStageValue: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (131,4)
    get_edit: function Mscrm_ProcessControlShared_ObjectModels_Stage$get_edit() {
        return this.$1_0.isEditable(this.$10_0);
    },
    
    controlsAreInitialized: false,
    $25_0: null,
    $10_0: null,
    $1_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (154,4)
    get_active: function Mscrm_ProcessControlShared_ObjectModels_Stage$get_active() {
        return this.$25_0.isActive(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (159,4)
    get_localActive: function Mscrm_ProcessControlShared_ObjectModels_Stage$get_localActive() {
        return this.$25_0.isLocalActive(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ObjectModels\Stage.js.cs (165,3)
    $1H_0: function Mscrm_ProcessControlShared_ObjectModels_Stage$$1H_0($p0, $p1, $p2) {
        this.$10_0 = $p1;
        this.$1_0 = $p0;
        this.currentStageValue = $p1.get_stageId();
        var $v_0 = $p0.stageIndex($p1);
        this.displayIndex = $v_0;
        this.entityDisplayName = $p2.get_name();
        this.entityLogicalName = $p2.get_entityLogicalName();
        this.completedSteps = new Array($p1.get_steps().get_count());
        var $v_1 = $p0.getStageByIndex($v_0 + 1);
        this.nextStageValue = (!$v_1) ? null : $v_1.get_stageId();
        var $v_2 = $p0.getStageByIndex($v_0 - 1);
        this.previousStageValue = (!$v_2) ? null : $v_2.get_stageId();
        this.stageName = $p1.get_stageName();
        this.stepCount = $p1.get_steps().get_count();
    }
}


Mscrm.ProcessControlShared.ObjectModels.StageCondition = function Mscrm_ProcessControlShared_ObjectModels_StageCondition() {
}
Mscrm.ProcessControlShared.ObjectModels.StageCondition.prototype = {
    enabled: false,
    entity: null,
    attribute: null,
    operator: 0
}


Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings = function Mscrm_ProcessControlShared_ObjectModels_LocalizedStrings() {
}
Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings.prototype = {
    locked: null,
    completed: null,
    inProgress: null,
    error: null,
    advance: null,
    back: null,
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
    createNew: null
}


Type.registerNamespace('ProcessControl.Services');

ProcessControl.Services.ISaveStageService = function() {}
ProcessControl.Services.ISaveStageService.registerInterface('ProcessControl.Services.ISaveStageService');


ProcessControl.Services.IStageActionSerive = function() {}
ProcessControl.Services.IStageActionSerive.registerInterface('ProcessControl.Services.IStageActionSerive');


ProcessControl.Services.ActionItem = function ProcessControl_Services_ActionItem() {
}
ProcessControl.Services.ActionItem.prototype = {
    action: null,
    condition: null
}


ProcessControl.Services.ActionQueue = function ProcessControl_Services_ActionQueue() {
    this.$$d_$57_0 = Function.createDelegate(this, this.$57_0);
    this.$1Q_0 = new Array(0);
}
ProcessControl.Services.ActionQueue.prototype = {
    $1Q_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ActionQueue.js.cs (30,3)
    push: function ProcessControl_Services_ActionQueue$push(action, condition) {
        if (condition()) {
            action();
            return;
        }
        var $v_0 = new ProcessControl.Services.ActionItem();
        $v_0.action = action;
        $v_0.condition = condition;
        this.$1Q_0.push($v_0);
        window.setTimeout(this.$$d_$57_0, 100);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ActionQueue.js.cs (48,3)
    $57_0: function ProcessControl_Services_ActionQueue$$57_0() {
        if (!this.$1Q_0.length) {
            return;
        }
        var $v_0 = this.$1Q_0.shift();
        this.push($v_0.action, $v_0.condition);
    }
}


ProcessControl.Services.EmptySaveService = function ProcessControl_Services_EmptySaveService(entityLogicalName) {
    ProcessControl.Services.EmptySaveService.initializeBase(this, [ entityLogicalName ]);
}
ProcessControl.Services.EmptySaveService.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\EmptySaveService.js.cs (14,3)
    setStageWithoutSaving: function ProcessControl_Services_EmptySaveService$setStageWithoutSaving(stageValue, argument) {
        this.setStageCompleted(0, argument);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\EmptySaveService.js.cs (19,3)
    setStageAndSave: function ProcessControl_Services_EmptySaveService$setStageAndSave(stageValue, argument) {
        this.setStageCompleted(0, argument);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\EmptySaveService.js.cs (24,3)
    setProcessWithoutSaving: function ProcessControl_Services_EmptySaveService$setProcessWithoutSaving(stageValue) {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\EmptySaveService.js.cs (28,3)
    setProcessAndSave: function ProcessControl_Services_EmptySaveService$setProcessAndSave(processId, stageId) {
        this.setStageCompleted(0, null);
    }
}


ProcessControl.Services.PlatformService = function ProcessControl_Services_PlatformService() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\PlatformService.js.cs (17,4)
ProcessControl.Services.PlatformService.get_platform = function ProcessControl_Services_PlatformService$get_platform() {
    return ProcessControl.Services.PlatformService.$W;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\PlatformService.js.cs (18,4)
ProcessControl.Services.PlatformService.set_platform = function ProcessControl_Services_PlatformService$set_platform(value) {
    ProcessControl.Services.PlatformService.$W = value;
    return value;
}


ProcessControl.Services.SaveActionArgument = function ProcessControl_Services_SaveActionArgument() {
}
ProcessControl.Services.SaveActionArgument.prototype = {
    advance: false,
    displayIndex: 0
}


ProcessControl.Services.StageActionService = function ProcessControl_Services_StageActionService(controlDataService) {
    this.$$d_$3Y_0 = Function.createDelegate(this, this.$3Y_0);
    this.$$d_$3V_0 = Function.createDelegate(this, this.$3V_0);
    this.$$d_$4W_0 = Function.createDelegate(this, this.$4W_0);
    this.$7_0 = new Sys.EventHandlerList();
    this.$1_0 = controlDataService;
    this.$15_0 = new ProcessControl.Services.ActionQueue();
    this.$12_0 = ProcessControl.Services.SaveServiceFactory.getService(this.$1_0.$6_0.get_entityLogicalName());
}
ProcessControl.Services.StageActionService.prototype = {
    $15_0: null,
    $12_0: null,
    $1_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (32,4)
    add_advanceStageTaskCompleted: function ProcessControl_Services_StageActionService$add_advanceStageTaskCompleted(value) {
        this.$7_0.addHandler('AdvanceStageTaskCompleted', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (33,4)
    remove_advanceStageTaskCompleted: function ProcessControl_Services_StageActionService$remove_advanceStageTaskCompleted(value) {
        this.$7_0.removeHandler('AdvanceStageTaskCompleted', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (38,4)
    add_backStageTaskCompleted: function ProcessControl_Services_StageActionService$add_backStageTaskCompleted(value) {
        this.$7_0.addHandler('BackStageTaskCompleted', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (39,4)
    remove_backStageTaskCompleted: function ProcessControl_Services_StageActionService$remove_backStageTaskCompleted(value) {
        this.$7_0.removeHandler('BackStageTaskCompleted', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (47,3)
    $s_0: function ProcessControl_Services_StageActionService$$s_0($p0, $p1) {
        if (!this.$7_0) {
            return;
        }
        var $v_0 = this.$7_0.getHandler($p0);
        if ($v_0) {
            $v_0(this, $p1);
        }
    },
    
    _disposed: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (76,3)
    dispose: function ProcessControl_Services_StageActionService$dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this.$12_0.remove_stageSet(this.$$d_$4W_0);
        Mscrm.Utilities.destroyObject(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (90,3)
    preAdvanceAction: function ProcessControl_Services_StageActionService$preAdvanceAction() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (97,3)
    advanceStage: function ProcessControl_Services_StageActionService$advanceStage(condition) {
        this.$15_0.push(this.$$d_$3V_0, condition);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (102,3)
    postAdvanceAction: function ProcessControl_Services_StageActionService$postAdvanceAction() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (106,3)
    preBackAction: function ProcessControl_Services_StageActionService$preBackAction() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (113,3)
    backStage: function ProcessControl_Services_StageActionService$backStage(condition) {
        this.$15_0.push(this.$$d_$3Y_0, condition);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (118,3)
    postBackAction: function ProcessControl_Services_StageActionService$postBackAction() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (122,3)
    setActiveStage: function ProcessControl_Services_StageActionService$setActiveStage(canSet, stageValue, displayIndex, advance, save) {
        if (this.$1_0.$J_0 || (this.$1_0.$C_0 && save) || !canSet) {
            var $v_2 = (advance) ? 'AdvanceStageTaskCompleted' : 'BackStageTaskCompleted';
            this.$3H_0($v_2, 0);
            return;
        }
        var $v_0 = new ProcessControl.Services.SaveActionArgument();
        $v_0.advance = advance;
        $v_0.displayIndex = displayIndex;
        this.$12_0.add_stageSet(this.$$d_$4W_0);
        var $v_1 = stageValue.toLowerCase();
        if (save) {
            this.$12_0.setStageAndSave($v_1, $v_0);
        }
        else {
            this.$12_0.setStageWithoutSaving($v_1, $v_0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (156,3)
    $3V_0: function ProcessControl_Services_StageActionService$$3V_0() {
        this.preAdvanceAction();
        var $v_0 = this.$1_0.$A_0;
        var $v_1 = this.$1_0.getStageByIndex(this.$1_0.stageIndex($v_0) + 1);
        ProcessControl.Services.DebugService.assert(!!$v_1, 'Can\'t advance after the last stage');
        this.setActiveStage(this.$1_0.canAdvance($v_0), $v_1.get_stageId(), this.$1_0.stageIndex($v_1), true, true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (170,3)
    $3Y_0: function ProcessControl_Services_StageActionService$$3Y_0() {
        this.preBackAction();
        var $v_0 = this.$1_0.$A_0;
        var $v_1 = this.$1_0.getStageByIndex(this.$1_0.stageIndex($v_0) - 1);
        ProcessControl.Services.DebugService.assert(!!$v_1, 'Can\'t go back from the first stage');
        this.setActiveStage(this.$1_0.canGoBack($v_0), $v_1.get_stageId(), this.$1_0.stageIndex($v_1), false, true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (184,3)
    $4W_0: function ProcessControl_Services_StageActionService$$4W_0($p0, $p1) {
        this.$12_0.remove_stageSet(this.$$d_$4W_0);
        ProcessControl.Services.DebugService.assert(!IsNull($p1.results), 'the result from save action cannot be null');
        var $v_0 = $p1.results;
        var $v_1 = ($v_0.advance) ? 'AdvanceStageTaskCompleted' : 'BackStageTaskCompleted';
        if ($p1.get_isError()) {
            this.$3H_0($v_1, $p1.error);
        }
        else {
            this.$5I_0($v_1, $v_0.displayIndex);
        }
        if ($v_0.advance) {
            this.postAdvanceAction();
        }
        else {
            this.postBackAction();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (214,3)
    $5I_0: function ProcessControl_Services_StageActionService$$5I_0($p0, $p1) {
        if (!IsNull(this.$1_0.$o_0)) {
            this.$1_0.$o_0 = null;
        }
        this.$1_0.$A_0 = this.$1_0.getStageByIndex($p1);
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = this.$1_0.$A_0;
        $v_0.error = 0;
        this.$s_0($p0, $v_0);
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActionService.js.cs (232,3)
    $3H_0: function ProcessControl_Services_StageActionService$$3H_0($p0, $p1) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = null;
        $v_0.error = $p1;
        this.$s_0($p0, $v_0);
        return false;
    }
}


ProcessControl.Services.ControlDataService = function ProcessControl_Services_ControlDataService(builder) {
    this.$V_0 = {};
    var $v_0 = builder.$a_0;
    this.$2I_0 = $v_0._globalNavigationData.activeStageId;
    this.$Z_0 = $v_0._globalNavigationData.navigationEntities;
    this.$3m_0(this.$Z_0);
    this.$h_0 = $v_0._processId;
    this.$4w_0(builder.$R_0);
    this.$C_0 = builder.$C_0;
    this.$J_0 = builder.$J_0;
    this.$5_0 = Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.initializeFrom($v_0._processStages);
    this.$6_0 = ProcessControl.Services.ControlDataService.$3t(this.$5_0, builder.$1e_0);
    this.$1b_0 = builder.$R_0._entity.Id;
    this.$17_0 = builder.$R_0._entity.TypeName;
    this.$4B_0(builder.$R_0);
    this.$4D_0();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (315,3)
ProcessControl.Services.ControlDataService.getActiveStageValue = function ProcessControl_Services_ControlDataService$getActiveStageValue(formData, hasActiveStage) {
    hasActiveStage.val = false;
    var $v_0 = formData[ProcessControl.Services.AttributeNames.stageId];
    if (IsNull($v_0) || IsNull($v_0['value'])) {
        return null;
    }
    var $v_1 = ProcessControl.Services.ControlDataService.reduceToCanonicalForm($v_0['value']);
    hasActiveStage.val = true;
    return $v_1;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (328,3)
ProcessControl.Services.ControlDataService.reduceToCanonicalForm = function ProcessControl_Services_ControlDataService$reduceToCanonicalForm(stageID) {
    if (IsNull(stageID)) {
        return null;
    }
    if (stageID.startsWith('{') && stageID.endsWith('}')) {
        stageID = stageID.substring(1, stageID.length - 1);
    }
    return stageID.toLowerCase();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (741,3)
ProcessControl.Services.ControlDataService.$3t = function ProcessControl_Services_ControlDataService$$3t($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.get_steps().get_count(); $v_0++) {
        var $v_1 = $p0.get_steps().get_item($v_0);
        if ($v_1.get_entityLogicalName() === $p1) {
            return $v_1;
        }
    }
    ProcessControl.Services.DebugService.assert(false, 'Can\'t find specified entity in the process: ' + $p1);
    return $p0.get_steps().get_item(0);
}
ProcessControl.Services.ControlDataService.prototype = {
    $1b_0: null,
    $17_0: null,
    $2I_0: null,
    $b_0: null,
    $K_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (46,4)
    get_globalActiveStage: function ProcessControl_Services_ControlDataService$get_globalActiveStage() {
        return this.$K_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (47,4)
    set_globalActiveStage: function ProcessControl_Services_ControlDataService$set_globalActiveStage(value) {
        this.$K_0 = value;
        this.$b_0.resolve(this.$K_0);
        this.adjustLocalActiveStage(this.$K_0);
        this.$1h_0 = this.$6_0 === this.findStageEntity(this.$K_0);
        return value;
    },
    
    $Z_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (61,4)
    get_navigationEntitiesDictionary: function ProcessControl_Services_ControlDataService$get_navigationEntitiesDictionary() {
        return this.$V_0;
    },
    
    $1O_0: 0,
    $1h_0: false,
    $6_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (70,4)
    get_currentEntity: function ProcessControl_Services_ControlDataService$get_currentEntity() {
        return this.$6_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (78,4)
    get_closeLoopStep: function ProcessControl_Services_ControlDataService$get_closeLoopStep() {
        if (this.$5_0.get_steps().get_count() < 2) {
            return null;
        }
        var $v_0 = this.$5_0.get_steps().get_item(this.$5_0.get_steps().get_count() - 1);
        var $v_1 = this.$5_0.get_steps().get_item(this.$5_0.get_steps().get_count() - 2);
        return ($v_1.get_isClosedLoop()) ? $v_0 : null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (93,3)
    findCloseLoopEntity: function ProcessControl_Services_ControlDataService$findCloseLoopEntity() {
        var $v_0 = this.get_closeLoopStep();
        if (IsNull($v_0) || IsNull(this.$Z_0)) {
            return null;
        }
        for (var $v_1 = 0; $v_1 < this.$Z_0.length; $v_1++) {
            var $v_2 = this.$Z_0[$v_1];
            if ($v_2.EntityLogicalName === $v_0.get_entityLogicalName()) {
                return $v_2;
            }
        }
        return null;
    },
    
    $2M_0: false,
    $19_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (126,4)
    get_hasLocalActiveStage: function ProcessControl_Services_ControlDataService$get_hasLocalActiveStage() {
        return this.$19_0;
    },
    
    $z_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (135,4)
    get_initialSelectedStage: function ProcessControl_Services_ControlDataService$get_initialSelectedStage() {
        return this.$z_0;
    },
    
    $o_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (146,4)
    get_pendingActiveStage: function ProcessControl_Services_ControlDataService$get_pendingActiveStage() {
        return this.$o_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (147,4)
    set_pendingActiveStage: function ProcessControl_Services_ControlDataService$set_pendingActiveStage(value) {
        this.$o_0 = value;
        return value;
    },
    
    $A_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (156,4)
    get_localActiveStage: function ProcessControl_Services_ControlDataService$get_localActiveStage() {
        return this.$A_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (157,4)
    set_localActiveStage: function ProcessControl_Services_ControlDataService$set_localActiveStage(value) {
        this.$A_0 = value;
        return value;
    },
    
    $5_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (166,4)
    get_process: function ProcessControl_Services_ControlDataService$get_process() {
        return this.$5_0;
    },
    
    $h_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (175,4)
    get_processId: function ProcessControl_Services_ControlDataService$get_processId() {
        return this.$h_0;
    },
    
    $J_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (187,4)
    get_readOnly: function ProcessControl_Services_ControlDataService$get_readOnly() {
        return this.$J_0;
    },
    
    $C_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (196,4)
    get_isNew: function ProcessControl_Services_ControlDataService$get_isNew() {
        return this.$C_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (197,4)
    set_isNew: function ProcessControl_Services_ControlDataService$set_isNew(value) {
        this.$C_0 = value;
        return value;
    },
    
    $1P_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (206,4)
    get_processIdReset: function ProcessControl_Services_ControlDataService$get_processIdReset() {
        return this.$1P_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (235,3)
    completeInitialization: function ProcessControl_Services_ControlDataService$completeInitialization() {
        if (!this.$1S_0()) {
            this.$3v_0();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (243,3)
    $4B_0: function ProcessControl_Services_ControlDataService$$4B_0($p0) {
        this.$A_0 = this.$2p_0($p0);
        if (!this.$A_0) {
            this.$37_0($p0);
        }
        else {
            this.$3h_0($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (261,3)
    update: function ProcessControl_Services_ControlDataService$update(formData) {
        var $v_0 = this.$2p_0(formData);
        if (!IsNull($v_0)) {
            if (this.$A_0 === this.$K_0) {
                this.$K_0 = $v_0;
            }
            this.$A_0 = $v_0;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (276,3)
    $3h_0: function ProcessControl_Services_ControlDataService$$3h_0($p0) {
        var $v_0 = this.findStageEntity(this.$A_0);
        if (this.$6_0 === this.get_closeLoopStep()) {
            if ($v_0 !== this.$6_0) {
                this.$37_0($p0);
            }
        }
        else if ($v_0 !== this.$6_0 && $v_0 === this.get_closeLoopStep()) {
            this.$6_0 = this.get_closeLoopStep();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (294,3)
    $4D_0: function ProcessControl_Services_ControlDataService$$4D_0() {
        this.$z_0 = this.$3u_0();
        if (!this.$z_0) {
            this.$z_0 = this.$4t_0();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (304,3)
    $3m_0: function ProcessControl_Services_ControlDataService$$3m_0($p0) {
        var $v_0 = 0;
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            this.$V_0[$v_1.EntityLogicalName] = $v_1;
            $v_0++;
        }
        this.$1O_0 = $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (337,3)
    $4w_0: function ProcessControl_Services_ControlDataService$$4w_0($p0) {
        var $v_0 = $p0[ProcessControl.Services.AttributeNames.processId];
        if (!this.$4T_0($v_0)) {
            this.$1P_0 = false;
            return;
        }
        if (IsNull($v_0)) {
            var $v_1 = {};
            $v_1['value'] = '';
            $p0[ProcessControl.Services.AttributeNames.processId] = $v_1;
        }
        this.$1P_0 = true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (356,3)
    $4T_0: function ProcessControl_Services_ControlDataService$$4T_0($p0) {
        return IsNull($p0) || IsNull($p0['value']) || $p0['value'] !== this.$h_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (363,3)
    $3u_0: function ProcessControl_Services_ControlDataService$$3u_0() {
        if (this.$C_0) {
            return this.$6_0.get_steps().get_item(0);
        }
        if (!IsNull(this.$A_0)) {
            return this.$A_0;
        }
        if (!IsNull(this.$K_0) && this.findStageEntity(this.$K_0) === this.$6_0) {
            return this.$K_0;
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (377,3)
    $4t_0: function ProcessControl_Services_ControlDataService$$4t_0() {
        return this.$6_0.get_steps().get_item(0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (382,3)
    $2p_0: function ProcessControl_Services_ControlDataService$$2p_0($p0) {
        var $$t_3, $$t_4;
        var $v_0 = (($$t_4 = ProcessControl.Services.ControlDataService.getActiveStageValue($p0, ($$t_3 = {'val': this.$19_0}))), this.$19_0 = $$t_3.val, $$t_4);
        if (!this.$19_0) {
            return null;
        }
        var $v_1 = this.getStageByValue($v_0);
        if (IsNull($v_1)) {
            $v_1 = this.$6_0.get_steps().getArrayList()[0];
        }
        else {
            this.$2M_0 = true;
        }
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (406,3)
    findGlobalActiveStage: function ProcessControl_Services_ControlDataService$findGlobalActiveStage() {
        if (!IsNull(this.$b_0)) {
            return this.$b_0;
        }
        this.$b_0 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Workflow.ObjectModel.StageStep, Microsoft.Crm.Workflow.ObjectModel.StageStep);
        if (this.$3b_0()) {
            return this.$b_0;
        }
        if (this.$Z_0.length > 0 && this.$Z_0[this.$Z_0.length - 1].EntityLogicalName !== this.$17_0) {
            return this.$b_0;
        }
        if (!this.$2M_0) {
            this.$V_0 = {};
        }
        if (!((this.$17_0) in this.$V_0)) {
            this.$V_0[this.$17_0] = this.$1b_0;
            this.$1O_0++;
        }
        this.set_globalActiveStage(this.$A_0);
        return this.$b_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (448,3)
    adjustLocalActiveStage: function ProcessControl_Services_ControlDataService$adjustLocalActiveStage(globalActiveStage) {
        if (this.$J_0 || this.$C_0) {
            return;
        }
        if (IsNull(globalActiveStage)) {
            return;
        }
        var $v_0 = this.isCompleted(this.$A_0);
        if (!$v_0) {
            return;
        }
        this.$A_0 = this.$z_0 = this.$6_0.get_steps().get_item(this.$6_0.get_steps().get_count() - 1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (471,3)
    $3b_0: function ProcessControl_Services_ControlDataService$$3b_0() {
        var $v_0 = this.getStageByValue(this.$2I_0);
        if (!IsNull($v_0)) {
            this.set_globalActiveStage($v_0);
            return true;
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (485,3)
    $3v_0: function ProcessControl_Services_ControlDataService$$3v_0() {
        var $v_0 = this.$Z_0[this.$Z_0.length - 1];
        var $v_1 = $v_0.Id;
        var $v_2 = $v_0.EntityLogicalName;
        var $v_3 = $v_0.PrimaryKeyName;
        var $v_4 = new Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase(Xrm.Page.context.getClientUrl());
        var $$t_8 = this, $$t_9 = this;
        $v_4.retrieveMultiple(String.format('<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\">\r\n\t\t\t\t<entity name=\"{0}\">\r\n\t\t\t\t<attribute name=\"stageid\" />\r\n\t\t\t\t<filter type=\"and\">\r\n\t\t\t\t\t<condition attribute=\"{1}\" operator=\"eq\" value=\"{2}\" />\r\n\t\t\t\t</filter>\r\n\t\t\t\t</entity>\r\n\t\t\t</fetch>', $v_2, $v_3, $v_1)).then(function($p1_0) {
            var $v_5 = null;
            if ($p1_0.entities.length && (('stageid') in $p1_0.entities[0].attributes)) {
                $v_5 = $$t_8.getStageByValue($p1_0.entities[0].attributes['stageid'].toString());
            }
            if (IsNull($v_5)) {
                $$t_8.$V_0 = {};
                $$t_8.$V_0[$$t_8.$17_0] = $$t_8.$1b_0;
                $$t_8.$1O_0 = 1;
                $$t_8.set_globalActiveStage($$t_8.$A_0);
            }
            else {
                $$t_8.set_globalActiveStage($v_5);
            }
        }, function($p1_0) {
            $$t_9.$b_0.reject(null);
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (522,3)
    $37_0: function ProcessControl_Services_ControlDataService$$37_0($p0) {
        this.$A_0 = this.$o_0 = this.$6_0.get_steps().get_item(0);
        this.$3R_0($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (528,3)
    isCompleted: function ProcessControl_Services_ControlDataService$isCompleted(currentStage) {
        if (!this.$1S_0()) {
            var $v_0 = this.findStageEntity(currentStage);
            if ($v_0 !== this.$6_0) {
                return false;
            }
        }
        for (var $v_1 = 0; $v_1 < this.$5_0.get_steps().get_count(); $v_1++) {
            var $v_2 = this.$5_0.get_steps().get_item($v_1);
            for (var $v_3 = 0; $v_3 < $v_2.get_steps().get_count(); $v_3++) {
                var $v_4 = $v_2.get_steps().get_item($v_3);
                if (!IsNull(this.$K_0) && $v_4.get_stageId().toLowerCase() === this.$K_0.get_stageId().toLowerCase()) {
                    return false;
                }
                if ($v_4.get_stageId().toLowerCase() === currentStage.get_stageId().toLowerCase()) {
                    return true;
                }
            }
        }
        ProcessControl.Services.DebugService.assert(false, 'IsCompleted should have found either the current stage or the global active stage. It should not reach this point.');
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (558,3)
    isEditable: function ProcessControl_Services_ControlDataService$isEditable(stage) {
        return !this.$4O_0(stage);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (563,3)
    getEntityStepByStageIndex: function ProcessControl_Services_ControlDataService$getEntityStepByStageIndex(stageIndex) {
        var $v_0 = this.getStageByIndex(stageIndex);
        if (IsNull($v_0)) {
            return null;
        }
        return this.findStageEntity($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (572,3)
    getStageByIndex: function ProcessControl_Services_ControlDataService$getStageByIndex(stageIndex) {
        if (stageIndex < 0) {
            return null;
        }
        var $v_0 = 0;
        for (var $v_1 = 0; $v_1 < this.$5_0.get_steps().get_count(); $v_1++) {
            var $v_2 = this.$5_0.get_steps().get_item($v_1);
            var $v_3 = stageIndex - $v_0;
            if ($v_3 < $v_2.get_steps().get_count()) {
                return $v_2.get_steps().get_item($v_3);
            }
            $v_0 += $v_2.get_steps().get_count();
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (588,3)
    getStageByValue: function ProcessControl_Services_ControlDataService$getStageByValue(stageValue) {
        if (!IsNull(stageValue)) {
            stageValue = ProcessControl.Services.ControlDataService.reduceToCanonicalForm(stageValue);
        }
        for (var $v_0 = 0; $v_0 < this.$5_0.get_steps().get_count(); $v_0++) {
            var $v_1 = this.$5_0.get_steps().get_item($v_0);
            for (var $v_2 = 0; $v_2 < $v_1.get_steps().get_count(); $v_2++) {
                var $v_3 = $v_1.get_steps().get_item($v_2);
                var $v_4 = ProcessControl.Services.ControlDataService.reduceToCanonicalForm($v_3.get_stageId());
                if ($v_4 === stageValue) {
                    return $v_3;
                }
            }
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (609,3)
    stageIndex: function ProcessControl_Services_ControlDataService$stageIndex(stage) {
        ProcessControl.Services.DebugService.assert(!IsNull(stage), 'Stage can not be null');
        var $v_0 = 0;
        for (var $v_1 = 0; $v_1 < this.$5_0.get_steps().get_count(); $v_1++) {
            var $v_2 = this.$5_0.get_steps().get_item($v_1);
            for (var $v_3 = 0; $v_3 < $v_2.get_steps().get_count(); $v_3++) {
                if (stage === $v_2.get_steps().get_item($v_3)) {
                    return $v_0;
                }
                $v_0++;
            }
        }
        ProcessControl.Services.DebugService.assert(false, 'Stage is not a part of the current process');
        return 0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (628,3)
    canAdvance: function ProcessControl_Services_ControlDataService$canAdvance(stage) {
        if (!this.$1h_0) {
            return false;
        }
        var $v_0 = this.findStageEntity(stage);
        var $v_1 = $v_0 === this.$6_0;
        var $v_2 = $v_0.get_steps().indexOf(stage) === $v_0.get_steps().get_count() - 1;
        return $v_1 && !$v_2;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (640,3)
    canGoBack: function ProcessControl_Services_ControlDataService$canGoBack(stage) {
        if (!this.$1h_0) {
            return false;
        }
        var $v_0 = this.findStageEntity(stage);
        var $v_1 = $v_0 === this.$6_0;
        var $v_2 = $v_0.get_steps().get_item(0) === stage;
        return $v_1 && !$v_2;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (652,3)
    canNavigate: function ProcessControl_Services_ControlDataService$canNavigate(stage) {
        if (!this.$1S_0()) {
            return false;
        }
        if (this.$1O_0 <= 1 && this.$6_0 !== this.$5_0.get_steps().get_item(0)) {
            return false;
        }
        var $v_0 = this.findStageEntity(stage);
        var $v_1 = $v_0.get_steps().indexOf(stage) === $v_0.get_steps().get_count() - 1;
        var $v_2 = $v_0.get_entityLogicalName() === this.$6_0.get_entityLogicalName();
        var $v_3 = this.$5_0.get_steps().indexOf($v_0) > this.$5_0.get_steps().indexOf(this.$6_0);
        var $v_4 = this.$5_0.get_steps().indexOf($v_0) === this.$5_0.get_steps().get_count() - 1;
        return $v_1 && $v_2 && !$v_3 && !$v_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (675,3)
    getCloseLoopLinks: function ProcessControl_Services_ControlDataService$getCloseLoopLinks() {
        if (!this.$6_0.get_isClosedLoop()) {
            return null;
        }
        var $v_0 = this.get_closeLoopStep();
        if (!$v_0) {
            return null;
        }
        var $v_1 = new Array(0);
        for (var $v_2 = this.$5_0.get_steps().indexOf(this.$6_0) - 1; $v_2 >= 0; $v_2--) {
            var $v_3 = this.$5_0.get_steps().get_item($v_2);
            var $v_4 = new Mscrm.ProcessControlShared.ObjectModels.EntityLink();
            $v_4.linkAttributeName = $v_3.get_attributeName();
            $v_4.targetEntityLogicalName = $v_3.get_entityLogicalName();
            $v_1[$v_1.length] = $v_4;
            if ($v_3.get_entityLogicalName() === $v_0.get_entityLogicalName()) {
                return $v_1;
            }
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (706,3)
    $4O_0: function ProcessControl_Services_ControlDataService$$4O_0($p0) {
        var $v_0 = this.findStageEntity($p0);
        if (!this.$1S_0()) {
            return $v_0 !== this.$6_0;
        }
        var $v_1 = !IsNull(this.$K_0) && this.get_closeLoopStep() === this.findStageEntity(this.$K_0);
        var $v_2 = $v_0 === this.get_closeLoopStep() && this.get_closeLoopStep() !== this.$6_0;
        if ($v_2 && !$v_1) {
            return true;
        }
        var $v_3 = $v_0 === this.$6_0;
        var $v_4 = !$v_3 && (($v_0.get_entityLogicalName()) in this.$V_0);
        var $v_5 = this.$J_0;
        return !$v_4 && (!$v_3 || $v_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (724,3)
    $1S_0: function ProcessControl_Services_ControlDataService$$1S_0() {
        return this.$b_0.state() === 'resolved';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (729,3)
    $3R_0: function ProcessControl_Services_ControlDataService$$3R_0($p0) {
        var $v_0 = $p0[ProcessControl.Services.AttributeNames.stageId];
        if (!IsNull($v_0)) {
            return;
        }
        $v_0 = {};
        $v_0['value'] = '';
        $p0[ProcessControl.Services.AttributeNames.stageId] = $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (756,3)
    findStageEntity: function ProcessControl_Services_ControlDataService$findStageEntity(stage) {
        for (var $v_0 = 0; $v_0 < this.$5_0.get_steps().get_count(); $v_0++) {
            var $v_1 = this.$5_0.get_steps().get_item($v_0);
            for (var $v_2 = 0; $v_2 < $v_1.get_steps().get_count(); $v_2++) {
                if (stage === $v_1.get_steps().get_item($v_2)) {
                    return $v_1;
                }
            }
        }
        ProcessControl.Services.DebugService.assert(false, 'Can\'t find stage parent entity');
        return this.$5_0.get_steps().get_item(0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataService.js.cs (780,3)
    findNextEntity: function ProcessControl_Services_ControlDataService$findNextEntity(currentEntityStep) {
        var $v_0 = false;
        var $v_1 = null;
        for (var $v_2 = 0; $v_2 < this.$5_0.get_steps().get_count(); $v_2++) {
            if ($v_0) {
                $v_1 = this.$5_0.get_steps().get_item($v_2);
                break;
            }
            $v_0 = (this.$5_0.get_steps().get_item($v_2)) === currentEntityStep;
        }
        return $v_1;
    }
}


ProcessControl.Services.AttributeNames = function ProcessControl_Services_AttributeNames() {
}


ProcessControl.Services.ControlDataServiceBuilder = function ProcessControl_Services_ControlDataServiceBuilder(controlData, formData) {
    this.$a_0 = controlData;
    this.$R_0 = formData;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (44,3)
ProcessControl.Services.ControlDataServiceBuilder.getBuilder = function ProcessControl_Services_ControlDataServiceBuilder$getBuilder(controlData, formData) {
    return new ProcessControl.Services.ControlDataServiceBuilder(controlData, formData);
}
ProcessControl.Services.ControlDataServiceBuilder.prototype = {
    $a_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (11,4)
    get_controlData: function ProcessControl_Services_ControlDataServiceBuilder$get_controlData() {
        return this.$a_0;
    },
    
    $R_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (17,4)
    get_formData: function ProcessControl_Services_ControlDataServiceBuilder$get_formData() {
        return this.$R_0;
    },
    
    $J_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (26,4)
    get_readOnly: function ProcessControl_Services_ControlDataServiceBuilder$get_readOnly() {
        return this.$J_0;
    },
    
    $C_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (35,4)
    get_isNew: function ProcessControl_Services_ControlDataServiceBuilder$get_isNew() {
        return this.$C_0;
    },
    
    $1e_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (41,4)
    get_entityLogicalName: function ProcessControl_Services_ControlDataServiceBuilder$get_entityLogicalName() {
        return this.$1e_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (55,3)
    setReadOnly: function ProcessControl_Services_ControlDataServiceBuilder$setReadOnly(readOnly) {
        this.$J_0 = readOnly;
        return this;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (61,3)
    setNew: function ProcessControl_Services_ControlDataServiceBuilder$setNew(isNew) {
        this.$C_0 = isNew;
        return this;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (67,3)
    setEntityLogicalName: function ProcessControl_Services_ControlDataServiceBuilder$setEntityLogicalName(entityLogicalName) {
        this.$1e_0 = entityLogicalName;
        return this;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ControlDataServiceBuilder.js.cs (73,3)
    build: function ProcessControl_Services_ControlDataServiceBuilder$build() {
        var $v_0 = new ProcessControl.Services.ControlDataService(this);
        return $v_0;
    }
}


ProcessControl.Services.DebugService = function ProcessControl_Services_DebugService() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\DebugService.js.cs (8,3)
ProcessControl.Services.DebugService.assert = function ProcessControl_Services_DebugService$assert(condition, message) {
    if (Sys.Res === undefined) {
    }
    else {
    }
}


ProcessControl.Services.ImageStripService = function ProcessControl_Services_ImageStripService() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\ImageStripService.js.cs (10,3)
ProcessControl.Services.ImageStripService.setStripIcon = function ProcessControl_Services_ImageStripService$setStripIcon(imageElement, iconPath, altString) {
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


ProcessControl.Services.ProcessControlInitializer = function ProcessControl_Services_ProcessControlInitializer() {
    this.$$d_$4M_0 = Function.createDelegate(this, this.$4M_0);
    this.$$d_$4k_0 = Function.createDelegate(this, this.$4k_0);
    this.$15_0 = new ProcessControl.Services.ActionQueue();
}
ProcessControl.Services.ProcessControlInitializer.prototype = {
    $1N_0: false,
    $0_0: null,
    $i_0: null,
    $r_0: null,
    $2P_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (42,4)
    get_view: function ProcessControl_Services_ProcessControlInitializer$get_view() {
        return this.$i_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (43,4)
    set_view: function ProcessControl_Services_ProcessControlInitializer$set_view(value) {
        this.$i_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (50,3)
    initialize: function ProcessControl_Services_ProcessControlInitializer$initialize(formData) {
        if (this.$1N_0) {
            return;
        }
        ProcessControl.Services.PlatformService.$W = 1;
        if (IsNull(formData._processControlDataKey)) {
            return;
        }
        if (IsNull(formData._processControlDataKey._processStages)) {
            this.$4G_0(formData);
            this.$1N_0 = true;
            return;
        }
        this.$2v_0(formData);
        this.$1N_0 = true;
        window.IsBusinessProcessPresent = this.$1N_0;
        refreshRibbon();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (77,3)
    $4G_0: function ProcessControl_Services_ProcessControlInitializer$$4G_0($p0) {
        var $v_0 = $get('header_process_d');
        if (!IsNull($v_0) && !isNullOrEmptyString($p0._processControlDataKey._warning)) {
            this.$r_0 = new ProcessControl.Views.WarningBarView($P_CRM($v_0), null);
            this.$r_0.show($p0._processControlDataKey._warning, 0, false);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (88,3)
    $2v_0: function ProcessControl_Services_ProcessControlInitializer$$2v_0($p0) {
        this.$0_0 = new ProcessControl.ViewModels.ProcessControlViewModel($p0);
        this.$i_0 = new ProcessControl.Views.ProcessControlView(this.$0_0);
        this.$i_0.render();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (100,3)
    postInitialize: function ProcessControl_Services_ProcessControlInitializer$postInitialize(entityMetadata) {
        this.$2P_0 = entityMetadata;
        this.$15_0.push(this.$$d_$4k_0, this.$$d_$4M_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (106,3)
    $4k_0: function ProcessControl_Services_ProcessControlInitializer$$4k_0() {
        if (this.$0_0.get_noAvailableStages()) {
            return;
        }
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartPostInitializeProcessControl);
        this.$0_0.postInitialize(this.$2P_0);
        this.$i_0.postRender();
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishPostInitializeProcessControl);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (117,3)
    $4M_0: function ProcessControl_Services_ProcessControlInitializer$$4M_0() {
        return !IsNull(this.$0_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (126,3)
    completeInitialization: function ProcessControl_Services_ProcessControlInitializer$completeInitialization() {
        if (this.$0_0.get_noAvailableStages()) {
            return;
        }
        this.$0_0.completeInitialization();
        this.$i_0.completeInitialization();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (139,3)
    reinitializeView: function ProcessControl_Services_ProcessControlInitializer$reinitializeView(formData) {
        if (this.$0_0) {
            this.$0_0.unBindEvents();
        }
        this.$2v_0(formData);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\Initializer.js.cs (149,3)
    dispose: function ProcessControl_Services_ProcessControlInitializer$dispose() {
        Mscrm.Utilities.safeDispose(this.$i_0);
        this.$i_0 = null;
        Mscrm.Utilities.safeDispose(this.$r_0);
        this.$r_0 = null;
        Mscrm.Utilities.safeDispose(this.$0_0);
        this.$0_0 = null;
    }
}


ProcessControl.Services.RefreshFormActionService = function ProcessControl_Services_RefreshFormActionService(dataService) {
    ProcessControl.Services.RefreshFormActionService.initializeBase(this, [ dataService ]);
    ProcessControl.Services.DebugService.assert(ProcessControl.Services.PlatformService.$W === 1, 'This service is only supported in RefreshForm platform');
}
ProcessControl.Services.RefreshFormActionService.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormActionService.js.cs (14,3)
    preAdvanceAction: function ProcessControl_Services_RefreshFormActionService$preAdvanceAction() {
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartLoadingProcessStageAdvance);
        ProcessControl.Services.StageActionService.prototype.preAdvanceAction.call(this);
        this.$2g_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormActionService.js.cs (21,3)
    postAdvanceAction: function ProcessControl_Services_RefreshFormActionService$postAdvanceAction() {
        ProcessControl.Services.StageActionService.prototype.postAdvanceAction.call(this);
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishLoadingProcessStageAdvance);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormActionService.js.cs (27,3)
    preBackAction: function ProcessControl_Services_RefreshFormActionService$preBackAction() {
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartLoadingProcessStageBack);
        ProcessControl.Services.StageActionService.prototype.preBackAction.call(this);
        this.$2g_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormActionService.js.cs (34,3)
    postBackAction: function ProcessControl_Services_RefreshFormActionService$postBackAction() {
        ProcessControl.Services.StageActionService.prototype.postBackAction.call(this);
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishLoadingProcessStageBack);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormActionService.js.cs (43,3)
    $2g_1: function ProcessControl_Services_RefreshFormActionService$$2g_1() {
        Mscrm.InlineEditUtilities.tryCommitActiveControl(false);
    }
}


ProcessControl.Services.RefreshFormSaveService = function ProcessControl_Services_RefreshFormSaveService(entityLogicalName) {
    ProcessControl.Services.RefreshFormSaveService.initializeBase(this, [ entityLogicalName ]);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (94,3)
ProcessControl.Services.RefreshFormSaveService.$20 = function ProcessControl_Services_RefreshFormSaveService$$20($p0, $p1) {
    var $v_0 = ProcessControl.Services.ControlDataService.reduceToCanonicalForm($p0.getValue());
    $p1 = ProcessControl.Services.ControlDataService.reduceToCanonicalForm($p1);
    return $p1 === $v_0;
}
ProcessControl.Services.RefreshFormSaveService.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (13,4)
    get_$M_1: function ProcessControl_Services_RefreshFormSaveService$get_$M_1() {
        return Xrm.Page.getAttribute(this.get_stageAttributeName());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (21,4)
    get_$1T_1: function ProcessControl_Services_RefreshFormSaveService$get_$1T_1() {
        return Xrm.Page.getAttribute(this.get_processIdAttributeName());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (32,3)
    setStageWithoutSaving: function ProcessControl_Services_RefreshFormSaveService$setStageWithoutSaving(stageValue, argument) {
        stageValue = ProcessControl.Services.ControlDataService.reduceToCanonicalForm(stageValue);
        this.get_$M_1().resetInitialValue(stageValue);
        this.get_$M_1().setValue(stageValue);
        this.setStageCompleted(0, argument);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (44,3)
    setStageAndSave: function ProcessControl_Services_RefreshFormSaveService$setStageAndSave(stageValue, argument) {
        stageValue = ProcessControl.Services.ControlDataService.reduceToCanonicalForm(stageValue);
        if (ProcessControl.Services.RefreshFormSaveService.$20(this.get_$M_1(), stageValue)) {
            this.setStageCompleted(0, argument);
            return;
        }
        this.get_$M_1().setValue(stageValue);
        this.$3C_1(argument);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (61,3)
    $3C_1: function ProcessControl_Services_RefreshFormSaveService$$3C_1($p0) {
        var $v_0 = Mscrm.InlineEditDataService.get_performDuplicateCheck();
        try {
            Mscrm.InlineEditDataService.set_performDuplicateCheck(false);
            var $$t_3 = this, $$t_4 = this;
            var $v_1 = Mscrm.InlineEditDataService.save(Xrm.SaveMode.save, function() {
                return $$t_3.setStageCompleted(0, $p0);
            }, function() {
                return $$t_4.setStageCompleted(4, $p0);
            });
            if ($v_1.get_code() !== Mscrm.SaveResponseCode.saveSuccessfullyInitiated) {
                this.setStageCompleted(4, $p0);
            }
        }
        finally {
            Mscrm.InlineEditDataService.set_performDuplicateCheck($v_0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (101,3)
    setProcessWithoutSaving: function ProcessControl_Services_RefreshFormSaveService$setProcessWithoutSaving(processId) {
        processId = ProcessControl.Services.ControlDataService.reduceToCanonicalForm(processId);
        this.get_$1T_1().resetInitialValue(processId);
        this.get_$1T_1().setValue(processId);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\RefreshFormSaveService.js.cs (112,3)
    setProcessAndSave: function ProcessControl_Services_RefreshFormSaveService$setProcessAndSave(processId, stageId) {
        processId = ProcessControl.Services.ControlDataService.reduceToCanonicalForm(processId);
        stageId = ProcessControl.Services.ControlDataService.reduceToCanonicalForm(stageId);
        var $v_0 = ProcessControl.Services.RefreshFormSaveService.$20(this.get_$M_1(), stageId);
        var $v_1 = ProcessControl.Services.RefreshFormSaveService.$20(this.get_$1T_1(), processId);
        if (!$v_0) {
            this.get_$M_1().setValue(stageId);
        }
        if (!$v_1) {
            this.get_$1T_1().setValue(processId);
        }
        if ($v_0 && $v_1) {
            this.setStageCompleted(0, null);
            return;
        }
        this.$3C_1(null);
    }
}


ProcessControl.Services.SaveServiceFactory = function ProcessControl_Services_SaveServiceFactory() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\SaveServiceFactory.js.cs (7,3)
ProcessControl.Services.SaveServiceFactory.getService = function ProcessControl_Services_SaveServiceFactory$getService(entityLogicalName) {
    if (ProcessControl.Services.PlatformService.$W === 1) {
        return new ProcessControl.Services.RefreshFormSaveService(entityLogicalName);
    }
    if (!ProcessControl.Services.PlatformService.$W) {
        return new ProcessControl.Services.EmptySaveService(entityLogicalName);
    }
    ProcessControl.Services.DebugService.assert(false, 'Unknown platform: ' + ProcessControl.Services.PlatformService.$W);
    return null;
}


ProcessControl.Services.SaveStageService = function ProcessControl_Services_SaveStageService(entityLogicalName) {
    this.$7_0 = new Sys.EventHandlerList();
}
ProcessControl.Services.SaveStageService.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\SaveStageService.js.cs (16,4)
    get_stageAttributeName: function ProcessControl_Services_SaveStageService$get_stageAttributeName() {
        return ProcessControl.Services.AttributeNames.stageId;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\SaveStageService.js.cs (24,4)
    get_processIdAttributeName: function ProcessControl_Services_SaveStageService$get_processIdAttributeName() {
        return ProcessControl.Services.AttributeNames.processId;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\SaveStageService.js.cs (44,4)
    add_stageSet: function ProcessControl_Services_SaveStageService$add_stageSet(value) {
        this.$7_0.addHandler('SaveTaskCompleted', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\SaveStageService.js.cs (45,4)
    remove_stageSet: function ProcessControl_Services_SaveStageService$remove_stageSet(value) {
        this.$7_0.removeHandler('SaveTaskCompleted', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\SaveStageService.js.cs (53,3)
    fireEventHandler: function ProcessControl_Services_SaveStageService$fireEventHandler(eventName, args) {
        if (!this.$7_0) {
            return;
        }
        var $v_0 = this.$7_0.getHandler(eventName);
        if ($v_0) {
            $v_0(this, args);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\SaveStageService.js.cs (79,3)
    setStageCompleted: function ProcessControl_Services_SaveStageService$setStageCompleted(errorCode, argument) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = null;
        $v_0.error = errorCode;
        $v_0.results = argument;
        this.fireEventHandler('SaveTaskCompleted', $v_0);
        return false;
    }
}


ProcessControl.Services.StageActonFactory = function ProcessControl_Services_StageActonFactory() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Services\StageActonFactory.js.cs (7,3)
ProcessControl.Services.StageActonFactory.getService = function ProcessControl_Services_StageActonFactory$getService(dataService) {
    if (ProcessControl.Services.PlatformService.$W === 1) {
        return new ProcessControl.Services.RefreshFormActionService(dataService);
    }
    if (!ProcessControl.Services.PlatformService.$W) {
        return new ProcessControl.Services.StageActionService(dataService);
    }
    ProcessControl.Services.DebugService.assert(false, 'Unknown platform: ' + ProcessControl.Services.PlatformService.$W);
    return null;
}


Type.registerNamespace('ProcessControl.ViewModels');

ProcessControl.ViewModels.ProcessControlViewModel = function ProcessControl_ViewModels_ProcessControlViewModel(formData) {
    this.$$d_$4a_0 = Function.createDelegate(this, this.$4a_0);
    this.$$d_$4c_0 = Function.createDelegate(this, this.$4c_0);
    this.$$d_$4e_0 = Function.createDelegate(this, this.$4e_0);
    this.$$d_$4Z_0 = Function.createDelegate(this, this.$4Z_0);
    this.$$d_isActionable = Function.createDelegate(this, this.isActionable);
    this.$$d_$4X_0 = Function.createDelegate(this, this.$4X_0);
    this.$7_0 = new Sys.EventHandlerList();
    this.$a_0 = formData._processControlDataKey;
    ProcessControl.Services.DebugService.assert(!IsNull(this.$a_0), 'the initial data cannot be null');
    this.$9_0 = this.$a_0._processControlStrings;
    this.$1H_0(formData);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (963,3)
ProcessControl.ViewModels.ProcessControlViewModel.navigateToEntity = function ProcessControl_ViewModels_ProcessControlViewModel$navigateToEntity(navigationEntityLogicalName, navigateToEntityId) {
    Xrm.Utility.openEntityForm(navigationEntityLogicalName, navigateToEntityId, null);
}
ProcessControl.ViewModels.ProcessControlViewModel.prototype = {
    $a_0: null,
    $R_0: null,
    $1g_0: null,
    $1Z_0: null,
    $1_0: null,
    $X_0: null,
    $1C_0: null,
    $2W_0: false,
    $p_0: null,
    $1j_0: false,
    $2Q_0: false,
    _disposed: false,
    $B_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (80,4)
    get_entity: function ProcessControl_ViewModels_ProcessControlViewModel$get_entity() {
        return this.$B_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (85,4)
    get_$3F_0: function ProcessControl_ViewModels_ProcessControlViewModel$get_$3F_0() {
        return ProcessControl.Services.AttributeNames.stageId;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (93,4)
    get_$M_0: function ProcessControl_ViewModels_ProcessControlViewModel$get_$M_0() {
        return Xrm.Page.getAttribute(this.get_$3F_0());
    },
    
    $1d_0: null,
    $4_0: null,
    $18_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (111,4)
    get_processId: function ProcessControl_ViewModels_ProcessControlViewModel$get_processId() {
        return this.$1_0.$h_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (119,4)
    get_entitiesMetadata: function ProcessControl_ViewModels_ProcessControlViewModel$get_entitiesMetadata() {
        return this.$1d_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (127,4)
    get_stages: function ProcessControl_ViewModels_ProcessControlViewModel$get_stages() {
        return this.$4_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (135,4)
    get_warning: function ProcessControl_ViewModels_ProcessControlViewModel$get_warning() {
        return this.$a_0._warningCode;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (143,4)
    get_initialWarning: function ProcessControl_ViewModels_ProcessControlViewModel$get_initialWarning() {
        return this.$a_0._warning;
    },
    
    $9_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (152,4)
    get_localizedText: function ProcessControl_ViewModels_ProcessControlViewModel$get_localizedText() {
        return this.$9_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (160,4)
    get_localActiveStage: function ProcessControl_ViewModels_ProcessControlViewModel$get_localActiveStage() {
        var $v_0 = this.$1_0.stageIndex(this.$1_0.$A_0);
        return this.$4_0[$v_0];
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (172,4)
    get_globalActiveStage: function ProcessControl_ViewModels_ProcessControlViewModel$get_globalActiveStage() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.ProcessControlShared.ObjectModels.Stage, Mscrm.ProcessControlShared.ObjectModels.Stage);
        var $$t_2 = this, $$t_3 = this;
        this.$1_0.findGlobalActiveStage().then(function($p1_0) {
            $$t_2.$18_0 = true;
            $v_0.resolve($$t_2.$4_0[$$t_2.$1_0.stageIndex($p1_0)]);
        }, function() {
            $v_0.reject(null);
        });
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (195,4)
    get_globalActiveStageHandled: function ProcessControl_ViewModels_ProcessControlViewModel$get_globalActiveStageHandled() {
        return this.$18_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (203,4)
    get_selectedStage: function ProcessControl_ViewModels_ProcessControlViewModel$get_selectedStage() {
        this.$1C_0 = this.$1C_0 || this.get_initialSelectedStage();
        return this.$1C_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (208,4)
    set_selectedStage: function ProcessControl_ViewModels_ProcessControlViewModel$set_selectedStage(value) {
        ProcessControl.Services.DebugService.assert(!IsNull(value), 'Selected stage cannot be empty');
        ProcessControl.Services.DebugService.assert(Array.indexOf(this.$4_0, value) >= 0, 'Selected stage must be one of existing stages');
        this.$1C_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (221,4)
    get_initialSelectedStage: function ProcessControl_ViewModels_ProcessControlViewModel$get_initialSelectedStage() {
        var $v_0 = this.$1_0.stageIndex(this.$1_0.$z_0);
        return this.$4_0[$v_0];
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (233,4)
    get_noAvailableStages: function ProcessControl_ViewModels_ProcessControlViewModel$get_noAvailableStages() {
        return IsNull(this.get_initialSelectedStage());
    },
    
    $J_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (242,4)
    get_readOnly: function ProcessControl_ViewModels_ProcessControlViewModel$get_readOnly() {
        return this.$J_0;
    },
    
    $C_0: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (251,4)
    get_isNew: function ProcessControl_ViewModels_ProcessControlViewModel$get_isNew() {
        return this.$C_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (259,4)
    get_navigationEntitiesDictionary: function ProcessControl_ViewModels_ProcessControlViewModel$get_navigationEntitiesDictionary() {
        return this.$1_0.$V_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (267,4)
    get_isSaveStagePending: function ProcessControl_ViewModels_ProcessControlViewModel$get_isSaveStagePending() {
        return !IsNull(this.$1_0.$o_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (293,4)
    add_notification: function ProcessControl_ViewModels_ProcessControlViewModel$add_notification(value) {
        this.$7_0.addHandler('NotificationEvent', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (294,4)
    remove_notification: function ProcessControl_ViewModels_ProcessControlViewModel$remove_notification(value) {
        this.$7_0.removeHandler('NotificationEvent', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (302,4)
    add_stageGatesVisibilityChanged: function ProcessControl_ViewModels_ProcessControlViewModel$add_stageGatesVisibilityChanged(value) {
        this.$7_0.addHandler('StageGatesVisibilityChangedEvent', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (303,4)
    remove_stageGatesVisibilityChanged: function ProcessControl_ViewModels_ProcessControlViewModel$remove_stageGatesVisibilityChanged(value) {
        this.$7_0.removeHandler('StageGatesVisibilityChangedEvent', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (311,4)
    add_advanceStageTaskCompleted: function ProcessControl_ViewModels_ProcessControlViewModel$add_advanceStageTaskCompleted(value) {
        this.$7_0.addHandler('AdvanceStageTaskCompleted', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (312,4)
    remove_advanceStageTaskCompleted: function ProcessControl_ViewModels_ProcessControlViewModel$remove_advanceStageTaskCompleted(value) {
        this.$7_0.removeHandler('AdvanceStageTaskCompleted', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (320,4)
    add_backStageTaskCompleted: function ProcessControl_ViewModels_ProcessControlViewModel$add_backStageTaskCompleted(value) {
        this.$7_0.addHandler('BackStageTaskCompleted', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (321,4)
    remove_backStageTaskCompleted: function ProcessControl_ViewModels_ProcessControlViewModel$remove_backStageTaskCompleted(value) {
        this.$7_0.removeHandler('BackStageTaskCompleted', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (329,4)
    add_stageAttributeRefreshed: function ProcessControl_ViewModels_ProcessControlViewModel$add_stageAttributeRefreshed(value) {
        this.$7_0.addHandler('StageAttributeRefreshedEvent', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (330,4)
    remove_stageAttributeRefreshed: function ProcessControl_ViewModels_ProcessControlViewModel$remove_stageAttributeRefreshed(value) {
        this.$7_0.removeHandler('StageAttributeRefreshedEvent', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (338,4)
    add_newEntitySaved: function ProcessControl_ViewModels_ProcessControlViewModel$add_newEntitySaved(value) {
        this.$7_0.addHandler('NewEntitySaved', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (339,4)
    remove_newEntitySaved: function ProcessControl_ViewModels_ProcessControlViewModel$remove_newEntitySaved(value) {
        this.$7_0.removeHandler('NewEntitySaved', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (347,3)
    $s_0: function ProcessControl_ViewModels_ProcessControlViewModel$$s_0($p0, $p1) {
        if (!this.$7_0) {
            return;
        }
        var $v_0 = this.$7_0.getHandler($p0);
        if ($v_0) {
            $v_0(this, $p1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (373,3)
    $1H_0: function ProcessControl_ViewModels_ProcessControlViewModel$$1H_0($p0) {
        this.$R_0 = $p0;
        this.$B_0 = $p0._entity;
        this.$1g_0 = $p0._formId;
        this.$C_0 = isNullOrEmptyString(this.$B_0.Id);
        this.$J_0 = this.$3z_0(this.$R_0);
        if (!this.$1_0) {
            var $v_0 = ProcessControl.Services.ControlDataServiceBuilder.getBuilder(this.$a_0, this.$R_0);
            this.$1_0 = $v_0.setEntityLogicalName(this.$B_0.TypeName).setNew(this.$C_0).setReadOnly(this.$J_0).build();
            this.$X_0 = ProcessControl.Services.StageActonFactory.getService(this.$1_0);
            this.$18_0 = (this.$1_0.findGlobalActiveStage().state() === 'resolved');
            this.$p_0 = ProcessControl.Services.SaveServiceFactory.getService(this.$B_0.TypeName);
            this.$4F_0();
        }
        else {
            this.$1_0.$C_0 = this.$C_0;
            this.$1_0.update(this.$R_0);
        }
        if (!IsNull(this.get_$22_0()) && !isNullOrEmptyString(this.$B_0.Id)) {
            this.$2h_0(this.get_$22_0());
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (409,3)
    $4F_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4F_0() {
        this.$2n_0();
        this.$4_0 = new Array(0);
        this.$1C_0 = null;
        var $v_0 = this.$1_0;
        for (var $v_1 = 0; $v_1 < this.$1_0.$5_0.get_steps().get_count(); $v_1++) {
            var $v_2 = this.$1_0.$5_0.get_steps().get_item($v_1);
            for (var $v_3 = 0; $v_3 < $v_2.get_steps().get_count(); $v_3++) {
                var $v_4 = $v_2.get_steps().get_item($v_3);
                var $v_5 = new Mscrm.ProcessControlShared.ObjectModels.Stage();
                $v_5.$1H_0($v_0, $v_4, $v_2);
                $v_5.$25_0 = this;
                this.$4_0[this.$4_0.length] = $v_5;
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (433,3)
    $2n_0: function ProcessControl_ViewModels_ProcessControlViewModel$$2n_0() {
        if (IsNull(this.$4_0)) {
            return;
        }
        for (var $v_0 = 0; $v_0 < this.$4_0.length; $v_0++) {
            Mscrm.Utilities.destroyObject(this.$4_0[$v_0]);
        }
        this.$4_0 = null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (446,3)
    $3z_0: function ProcessControl_ViewModels_ProcessControlViewModel$$3z_0($p0) {
        var $v_0 = $p0._entitydisabled;
        if (isNullOrEmptyString($v_0)) {
            return false;
        }
        return $v_0 === '1';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (457,3)
    $2r_0: function ProcessControl_ViewModels_ProcessControlViewModel$$2r_0($p0) {
        var $v_0 = Array.indexOf(this.$4_0, $p0);
        return this.$1_0.getStageByIndex($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (469,3)
    isInitialAttributeEmpty: function ProcessControl_ViewModels_ProcessControlViewModel$isInitialAttributeEmpty(attributeName) {
        var $v_0 = this.$R_0[attributeName];
        if (IsNull($v_0)) {
            return true;
        }
        if (!(('value') in $v_0)) {
            return true;
        }
        if (this.$4H_0(attributeName)) {
            return $v_0['raw'] === '0';
        }
        if (this.$4L_0(attributeName)) {
            return parseInt($v_0['raw']) < 0;
        }
        if (((Mscrm.InlineEditConstants.SecuredRead) in $v_0) && $v_0[Mscrm.InlineEditConstants.SecuredRead] === Mscrm.InlineEditConstants.NoFlsPermission) {
            return true;
        }
        return isNullOrEmptyString($v_0['value']);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (498,3)
    setAttributeMetadata: function ProcessControl_ViewModels_ProcessControlViewModel$setAttributeMetadata(entityMetadata) {
        this.$1d_0 = entityMetadata;
        this.$1Z_0 = ((this.$1g_0) in entityMetadata) ? entityMetadata[this.$1g_0] : ((('PrimaryEntity') in entityMetadata) ? entityMetadata['PrimaryEntity'] : {});
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (506,3)
    $4H_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4H_0($p0) {
        var $v_0 = this.$1Z_0[$p0];
        if (IsNull($v_0)) {
            return false;
        }
        return $v_0.AttributeType === 'bit';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (517,3)
    $4L_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4L_0($p0) {
        var $v_0 = this.$1Z_0[$p0];
        if (IsNull($v_0)) {
            return false;
        }
        return $v_0.AttributeType === 'picklist';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (537,4)
    get_stageGatesVisible: function ProcessControl_ViewModels_ProcessControlViewModel$get_stageGatesVisible() {
        return this.$2W_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (538,4)
    set_stageGatesVisible: function ProcessControl_ViewModels_ProcessControlViewModel$set_stageGatesVisible(value) {
        this.$2W_0 = value;
        this.$s_0('StageGatesVisibilityChangedEvent', new ProcessControl.Events.TaskCompletionEventArgs());
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (547,3)
    checkRequiredCompleted: function ProcessControl_ViewModels_ProcessControlViewModel$checkRequiredCompleted() {
        for (var $v_0 = 0; $v_0 < this.$1_0.$A_0.get_steps().get_count(); $v_0++) {
            var $v_1 = this.$1_0.$A_0.get_steps().get_item($v_0);
            if (!$v_1.get_isProcessRequired()) {
                continue;
            }
            if (!this.get_localActiveStage().completedSteps[$v_0]) {
                return false;
            }
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (565,3)
    isActionable: function ProcessControl_ViewModels_ProcessControlViewModel$isActionable() {
        return !!this.get_$M_0() && this.$1j_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (573,3)
    isActive: function ProcessControl_ViewModels_ProcessControlViewModel$isActive(stage) {
        var $v_0 = Array.indexOf(this.$4_0, stage);
        var $v_1 = this.$1_0.getStageByIndex($v_0);
        return this.$18_0 && $v_1 === this.$1_0.get_globalActiveStage();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (586,3)
    isLocalActive: function ProcessControl_ViewModels_ProcessControlViewModel$isLocalActive(stage) {
        var $v_0 = this.$2r_0(stage);
        return $v_0 === this.$1_0.$A_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (595,3)
    advanceStage: function ProcessControl_ViewModels_ProcessControlViewModel$advanceStage() {
        this.$X_0.add_advanceStageTaskCompleted(this.$$d_$4X_0);
        this.$X_0.advanceStage(this.$$d_isActionable);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (604,3)
    backStage: function ProcessControl_ViewModels_ProcessControlViewModel$backStage() {
        this.$X_0.add_backStageTaskCompleted(this.$$d_$4Z_0);
        this.$X_0.backStage(this.$$d_isActionable);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (610,3)
    $4X_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4X_0($p0, $p1) {
        this.$X_0.remove_advanceStageTaskCompleted(this.$$d_$4X_0);
        this.$3J_0($p1);
        var $v_0 = this.$2j_0($p1);
        this.$s_0('AdvanceStageTaskCompleted', $v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (618,3)
    $4Z_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4Z_0($p0, $p1) {
        this.$X_0.remove_backStageTaskCompleted(this.$$d_$4Z_0);
        this.$3J_0($p1);
        var $v_0 = this.$2j_0($p1);
        this.$s_0('BackStageTaskCompleted', $v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (626,3)
    $3J_0: function ProcessControl_ViewModels_ProcessControlViewModel$$3J_0($p0) {
        if ($p0.get_isError()) {
            return;
        }
        var $v_0 = $p0.results;
        this.$1_0.set_globalActiveStage($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (635,3)
    $2j_0: function ProcessControl_ViewModels_ProcessControlViewModel$$2j_0($p0) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.error = $p0.error;
        var $v_1 = $p0.results;
        $v_0.results = this.$3j_0($v_1);
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (644,3)
    $3j_0: function ProcessControl_ViewModels_ProcessControlViewModel$$3j_0($p0) {
        if (!$p0) {
            return null;
        }
        var $v_0 = this.$1_0.stageIndex($p0);
        return this.$4_0[$v_0];
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (655,3)
    postInitialize: function ProcessControl_ViewModels_ProcessControlViewModel$postInitialize(entityMetadata) {
        this.setAttributeMetadata(entityMetadata);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (660,3)
    $3W_0: function ProcessControl_ViewModels_ProcessControlViewModel$$3W_0() {
        this.$1j_0 = true;
        if (this.$1_0.$1P_0) {
            if (this.$C_0) {
                this.$p_0.setProcessWithoutSaving(this.$1_0.$h_0);
            }
            else {
                this.$p_0.add_stageSet(this.$$d_$4e_0);
                this.$p_0.setProcessAndSave(this.$1_0.$h_0, this.$1_0.getStageByIndex(0).get_stageId());
                return;
            }
        }
        var $v_0 = this.$1_0.$o_0;
        if (IsNull($v_0)) {
            return;
        }
        var $v_1 = $v_0.get_stageId();
        var $v_2 = this.$3d_0($v_1);
        if ($v_2) {
            this.$X_0.setActiveStage(true, $v_0.get_stageId(), this.$1_0.stageIndex($v_0), true, this.$1_0.$19_0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (699,3)
    $4e_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4e_0($p0, $p1) {
        this.$p_0.remove_stageSet(this.$$d_$4e_0);
        if ($p1.get_isError()) {
            return;
        }
        this.$1j_0 = true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (710,3)
    $3d_0: function ProcessControl_ViewModels_ProcessControlViewModel$$3d_0($p0) {
        var $v_0 = this.$R_0[this.get_$3F_0()];
        ProcessControl.Services.DebugService.assert(!IsNull($v_0), 'the stage attribute cannot be null');
        var $v_1 = $v_0['defaultvalue'];
        return $v_1 !== $p0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (721,3)
    $4E_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4E_0() {
        if (IsNull(this.get_$M_0())) {
            return;
        }
        var $v_0 = this.get_$M_0().getValue();
        if (!IsNull($v_0)) {
            return;
        }
        this.get_$M_0().setValue(null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (733,3)
    $1F_0: function ProcessControl_ViewModels_ProcessControlViewModel$$1F_0() {
        if (IsNull(this.get_$M_0())) {
            return;
        }
        Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(this.$$d_$4c_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (742,3)
    unBindEvents: function ProcessControl_ViewModels_ProcessControlViewModel$unBindEvents() {
        if (IsNull(this.get_$M_0())) {
            return;
        }
        if (!Mscrm.InlineEditDataService.get_dataService().get_isDisposed()) {
            Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(this.$$d_$4c_0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (758,3)
    dispose: function ProcessControl_ViewModels_ProcessControlViewModel$dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this.$X_0.remove_advanceStageTaskCompleted(this.$$d_$4X_0);
        this.$X_0.remove_backStageTaskCompleted(this.$$d_$4Z_0);
        Mscrm.Utilities.safeDispose(this.$X_0);
        this.$p_0.remove_stageSet(this.$$d_$4e_0);
        if (!Mscrm.InlineEditDataService.get_dataService().get_isDisposed()) {
            Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(this.$$d_$4c_0);
        }
        this.$2n_0();
        Mscrm.Utilities.destroyObject(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (783,3)
    completeInitialization: function ProcessControl_ViewModels_ProcessControlViewModel$completeInitialization() {
        this.$1_0.completeInitialization();
        this.$4E_0();
        this.$3W_0();
        this.$1F_0();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (795,3)
    $2G_0: function ProcessControl_ViewModels_ProcessControlViewModel$$2G_0($p0) {
        var $v_0 = new ProcessControl.Events.TaskCompletionEventArgs();
        $v_0.results = null;
        $v_0.error = 0;
        this.$s_0($p0, $v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (804,3)
    $4c_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4c_0($p0, $p1) {
        if (isNullOrEmptyString($p1.get_entityReference().Id)) {
            return;
        }
        var $v_0 = this.$1_0.get_closeLoopStep() === this.$1_0.$6_0;
        if ($p1.get_command() === Mscrm.InlineCommands.Save) {
            if (!this.$C_0) {
                var $v_2;
                var $$t_8, $$t_9;
                var $v_3 = (($$t_9 = ProcessControl.Services.ControlDataService.getActiveStageValue($p1.get_jsonData(), ($$t_8 = {'val': $v_2}))), $v_2 = $$t_8.val, $$t_9);
                $v_3 = ProcessControl.Services.ControlDataService.reduceToCanonicalForm($v_3);
                var $v_4 = ProcessControl.Services.ControlDataService.reduceToCanonicalForm(this.$1_0.$A_0.get_stageId());
                if ($v_2 && $v_4 === $v_3) {
                    return;
                }
                this.$1H_0($p1.get_jsonData());
                this.$2G_0('StageAttributeRefreshedEvent');
                return;
            }
            this.$1H_0($p1.get_jsonData());
            var $v_1 = this.get_$22_0();
            if (!this.$2Q_0 && !IsNull($v_1)) {
                this.$2h_0($v_1);
                return;
            }
            this.$2G_0('NewEntitySaved');
        }
        else if ($p1.get_command() === Mscrm.InlineCommands.Retrieve) {
            var $v_5 = Xrm.Page.getAttribute(ProcessControl.Services.AttributeNames.processId);
            if (!IsNull(this.get_$M_0()) && !IsNull($v_5) && IsNull(this.get_$M_0().getValue()) && IsNull($v_5.getValue())) {
                this.$p_0.setProcessAndSave(this.$1_0.$h_0, this.$1_0.getStageByIndex(0).get_stageId());
            }
            this.$1H_0($p1.get_jsonData());
            this.$2G_0('StageAttributeRefreshedEvent');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (850,3)
    $2h_0: function ProcessControl_ViewModels_ProcessControlViewModel$$2h_0($p0) {
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartNavigateToEntity);
        var $v_0 = Xrm.Page.context;
        var $v_1 = new Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase($v_0.getClientUrl());
        var $$t_4 = this;
        $v_1.navigateToNextEntity($p0.Id, $p0.EntityLogicalName, this.$B_0.Id, this.$B_0.TypeName, this.get_processId()).then(function($p1_0) {
            setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishNavigateToEntity);
            Mscrm.InlineEditDataService.set_infraCallForBookOrReschedule(true);
            ProcessControl.ViewModels.ProcessControlViewModel.navigateToEntity($$t_4.$B_0.TypeName, $$t_4.$B_0.Id);
        }, this.$$d_$4a_0);
        this.$2Q_0 = true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (871,3)
    $4a_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4a_0($p0) {
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishNavigateToEntity);
        this.error($p0.get_debugErrorMessage());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (877,3)
    switchToOrFromCloseLoopEntity: function ProcessControl_ViewModels_ProcessControlViewModel$switchToOrFromCloseLoopEntity(newSelectedStage, toCloseLoop, fromCloseLoop) {
        toCloseLoop.val = false;
        fromCloseLoop.val = false;
        if (IsNull(this.$1_0.get_closeLoopStep())) {
            return;
        }
        if (IsNull(this.$1_0.get_globalActiveStage())) {
            return;
        }
        if (this.$1_0.findStageEntity(this.$1_0.get_globalActiveStage()) !== this.$1_0.get_closeLoopStep()) {
            return;
        }
        if (this.get_selectedStage().entityLogicalName !== newSelectedStage.entityLogicalName) {
            return;
        }
        var $v_0 = this.$1_0.getEntityStepByStageIndex(this.get_selectedStage().displayIndex);
        var $v_1 = this.$1_0.getEntityStepByStageIndex(newSelectedStage.displayIndex);
        var $v_2 = $v_0 !== $v_1;
        if ($v_2) {
            toCloseLoop.val = $v_1 === this.$1_0.get_closeLoopStep();
            fromCloseLoop.val = $v_0 === this.$1_0.get_closeLoopStep();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (913,3)
    findCloseLoopEntity: function ProcessControl_ViewModels_ProcessControlViewModel$findCloseLoopEntity() {
        if (!this.$1_0.$6_0.get_isClosedLoop()) {
            return null;
        }
        if (!this.$1_0.get_closeLoopStep()) {
            return null;
        }
        return this.$1_0.findCloseLoopEntity();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (927,3)
    getCloseLoopLinks: function ProcessControl_ViewModels_ProcessControlViewModel$getCloseLoopLinks() {
        if (!this.$1_0.$6_0.get_isClosedLoop()) {
            return null;
        }
        return this.$1_0.getCloseLoopLinks();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (939,3)
    needTransit: function ProcessControl_ViewModels_ProcessControlViewModel$needTransit(stage) {
        return stage.entityLogicalName !== this.$B_0.TypeName && ((stage.entityLogicalName) in this.$1_0.$V_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (945,3)
    getForwardNavigationRelationshipInfo: function ProcessControl_ViewModels_ProcessControlViewModel$getForwardNavigationRelationshipInfo(stage) {
        var $v_0 = this.$2r_0(stage);
        var $v_1 = this.$1_0.findStageEntity($v_0);
        var $v_2 = this.$1_0.findNextEntity($v_1);
        if (IsNull($v_2)) {
            return null;
        }
        var $v_3 = {};
        $v_3['referencedEntityLogicalName'] = $v_1.get_entityLogicalName();
        $v_3['referencingEntityLogicalName'] = $v_2.get_entityLogicalName();
        $v_3['referencingEntityAttributeName'] = $v_1.get_attributeName();
        return $v_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (968,3)
    navigateToCloseLoop: function ProcessControl_ViewModels_ProcessControlViewModel$navigateToCloseLoop() {
        var $v_0 = this.findCloseLoopEntity();
        var $v_1 = this.$1_0.get_closeLoopStep().get_steps().get_item(0);
        var $v_2 = new RemoteCommand('ProcessControl', 'ChangeProcessAndStage', null);
        $v_2.SetParameter('currentEntityId', $v_0.Id);
        $v_2.SetParameter('currentEntityTypeName', $v_0.EntityLogicalName);
        $v_2.SetParameter('newProcessId', this.$1_0.$h_0);
        $v_2.SetParameter('newStageId', $v_1.get_stageId());
        var $$t_5 = this;
        $v_2.Execute(function($p1_0, $p1_1) {
            ProcessControl.ViewModels.ProcessControlViewModel.navigateToEntity($v_0.EntityLogicalName, $v_0.Id);
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (990,4)
    get_$22_0: function ProcessControl_ViewModels_ProcessControlViewModel$get_$22_0() {
        var $v_0 = parseQueryString(window.location);
        var $v_1 = $v_0['_createfromid'];
        var $v_2 = $v_0['navsourcetype'];
        var $v_3 = $v_0['_createfromtype'];
        var $v_4 = $v_0['extraqs'];
        if (!isNullOrEmptyString($v_4)) {
            var $v_6 = parseQueryStringValue($v_4.substr(1));
            $v_1 = $v_1 || $v_6['_createfromid'];
            $v_2 = $v_6['navsourcetype'];
            $v_3 = $v_6['_createfromtype'];
        }
        if (IsNull($v_1) || IsNull($v_2) || IsNull($v_3)) {
            return null;
        }
        var $v_5 = new Mscrm.ProcessControlShared.ObjectModels.NavigationEntity();
        $v_5.Id = $v_1;
        $v_5.EntityLogicalName = $v_2;
        $v_5.EntityTypeCode = Number.parseInvariant($v_3);
        return $v_5;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (1017,3)
    error: function ProcessControl_ViewModels_ProcessControlViewModel$error(message) {
        this.$4V_0(message, true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\ViewModels\ProcessControlViewModel.js.cs (1022,3)
    $4V_0: function ProcessControl_ViewModels_ProcessControlViewModel$$4V_0($p0, $p1) {
        var $v_0 = new ProcessControl.Events.NotificationEventArgs();
        $v_0.message = $p0;
        $v_0.isError = $p1;
        this.$s_0('NotificationEvent', $v_0);
    }
}


Type.registerNamespace('ProcessControl.Views');

ProcessControl.Views.CollapsibleStatus = function() {}
ProcessControl.Views.CollapsibleStatus.prototype = {
    collapsed: 0, 
    expanded: 1
}
ProcessControl.Views.CollapsibleStatus.registerEnum('ProcessControl.Views.CollapsibleStatus', false);


ProcessControl.Views.ActionsView = function ProcessControl_Views_ActionsView(viewModel) {
    this.$$d_$4R_1 = Function.createDelegate(this, this.$4R_1);
    this.$$d_$46_1 = Function.createDelegate(this, this.$46_1);
    this.$$d_$2d_1 = Function.createDelegate(this, this.$2d_1);
    this.$$d_$2b_1 = Function.createDelegate(this, this.$2b_1);
    this.$$d_$2a_1 = Function.createDelegate(this, this.$2a_1);
    this.$$d_$4A_1 = Function.createDelegate(this, this.$4A_1);
    this.$$d_$3X_1 = Function.createDelegate(this, this.$3X_1);
    this.$$d_$3U_1 = Function.createDelegate(this, this.$3U_1);
    this.$2F_1 = -1;
    ProcessControl.Views.ActionsView.initializeBase(this, [ viewModel ]);
    this.$0_1 = viewModel;
    this.$2_1 = $P_CRM('#processActionsContainer');
    this.$F_1 = $P_CRM('#stageBackActionContainer');
    this.$I_1 = $P_CRM('#stageAdvanceActionContainer');
    this.$E_1 = $P_CRM('#stageNavigateActionContainer');
    this.$D_1 = $P_CRM('body').css('direction').toLowerCase() === 'rtl';
    this.$1F_1();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (734,3)
ProcessControl.Views.ActionsView.$3c = function ProcessControl_Views_ActionsView$$3c($p0, $p1, $p2) {
    var $v_0 = new Mscrm.ProcessControlShared.ObjectModels.NavigationEntity();
    $v_0.Id = $p2;
    $v_0.EntityLogicalName = $p0;
    $v_0.EntityTypeCode = $p1;
    return $v_0;
}
ProcessControl.Views.ActionsView.prototype = {
    $F_1: null,
    $I_1: null,
    $E_1: null,
    $g_1: null,
    $l_1: null,
    $D_1: false,
    $S_1: false,
    $0_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (75,4)
    get_$3n_1: function ProcessControl_Views_ActionsView$get_$3n_1() {
        return (this.$D_1) ? '/_imgs/ProcessControl/15_Back_arrow_icon.png' : '/_imgs/ProcessControl/15_Advance_arrow_icon.png';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (80,4)
    get_$3o_1: function ProcessControl_Views_ActionsView$get_$3o_1() {
        return (this.$D_1) ? '/_imgs/ProcessControl/15_Advance_arrow_icon.png' : '/_imgs/ProcessControl/15_Back_arrow_icon.png';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (85,4)
    get_$3O_1: function ProcessControl_Views_ActionsView$get_$3O_1() {
        return (this.$D_1) ? '/_imgs/ProcessControl/15_Back_arrow_icon.png' : '/_imgs/ProcessControl/15_Advance_arrow_icon.png';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (90,4)
    get_$3P_1: function ProcessControl_Views_ActionsView$get_$3P_1() {
        return (this.$D_1) ? '/_imgs/ProcessControl/15_Advance_arrow_icon.png' : '/_imgs/ProcessControl/15_Back_arrow_icon.png';
    },
    
    $2_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (106,4)
    get_viewContainer: function ProcessControl_Views_ActionsView$get_viewContainer() {
        return this.$2_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (114,4)
    get_dataContext: function ProcessControl_Views_ActionsView$get_dataContext() {
        return this.$0_1;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (118,4)
    set_dataContext: function ProcessControl_Views_ActionsView$set_dataContext(value) {
        if (!(ProcessControl.ViewModels.ProcessControlViewModel.isInstanceOfType(value))) {
            return value;
        }
        this.$1J_1();
        this.$0_1 = value;
        this.$0_1.add_advanceStageTaskCompleted(this.$$d_$3U_1);
        this.$0_1.add_backStageTaskCompleted(this.$$d_$3X_1);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (131,3)
    $1J_1: function ProcessControl_Views_ActionsView$$1J_1() {
        if (!IsNull(this.$0_1)) {
            this.$0_1.remove_advanceStageTaskCompleted(this.$$d_$3U_1);
            this.$0_1.remove_backStageTaskCompleted(this.$$d_$3X_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (142,4)
    get_containerWidth: function ProcessControl_Views_ActionsView$get_containerWidth() {
        if (this.$2_1.hasClass('hidden')) {
            return 0;
        }
        var $v_0 = 24;
        var $v_1 = 91;
        var $v_2 = 2;
        if (this.$I_1.hasClass('hidden') && this.$E_1.hasClass('hidden')) {
            return $v_0 + $v_2;
        }
        if (this.$F_1.hasClass('hidden')) {
            return $v_1 + $v_2;
        }
        return $v_0 + $v_1 + $v_2;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (182,3)
    render: function ProcessControl_Views_ActionsView$render() {
        this.$1W_1(this.$0_1.get_selectedStage());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (187,3)
    changeActionStatus: function ProcessControl_Views_ActionsView$changeActionStatus(switchToCloseLoop, switchFromCloseLoop) {
        if (switchToCloseLoop) {
            this.$l_1 = this.$0_1.get_localActiveStage();
            this.$1W_1(this.$0_1.get_localActiveStage());
        }
        if (switchFromCloseLoop) {
            var $v_0 = this.$0_1.get_selectedStage();
            for (var $v_1 = this.$0_1.get_selectedStage().displayIndex + 1; $v_1 < this.$0_1.$4_0.length; $v_1++) {
                var $v_2 = this.$0_1.$4_0[$v_1];
                if ($v_2.entityLogicalName !== $v_0.entityLogicalName) {
                    break;
                }
                $v_0 = $v_2;
            }
            this.$l_1 = $v_0;
            this.$1W_1($v_0);
        }
        this.$36_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (212,3)
    actualDispose: function ProcessControl_Views_ActionsView$actualDispose() {
        this.$5M_1();
        this.$1J_1();
        this.$2m_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (220,3)
    $5M_1: function ProcessControl_Views_ActionsView$$5M_1() {
        $P_CRM(window).unbind('resize', this.$$d_$4A_1);
        this.$I_1.unbind();
        this.$F_1.unbind();
        this.$E_1.unbind();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (229,3)
    $1F_1: function ProcessControl_Views_ActionsView$$1F_1() {
        this.$I_1.click(this.$$d_$2a_1);
        var $$t_3 = this;
        this.$I_1.keydown(function($p1_0) {
            if ($$t_3.$1I_1($p1_0.which)) {
                $$t_3.$2a_1($p1_0);
            }
        });
        this.$F_1.click(this.$$d_$2b_1);
        var $$t_4 = this;
        this.$F_1.keydown(function($p1_0) {
            if ($$t_4.$1I_1($p1_0.which)) {
                $$t_4.$2b_1($p1_0);
            }
        });
        this.$E_1.click(this.$$d_$2d_1);
        var $$t_5 = this;
        this.$E_1.keydown(function($p1_0) {
            if ($$t_5.$1I_1($p1_0.which)) {
                $$t_5.$2d_1($p1_0);
            }
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (262,3)
    $1I_1: function ProcessControl_Views_ActionsView$$1I_1($p0) {
        return $p0 === 13;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (267,3)
    $1z_1: function ProcessControl_Views_ActionsView$$1z_1($p0) {
        if (this.$S_1 || this.$c_1($p0)) {
            return false;
        }
        if ($p0 === 1) {
            return true;
        }
        Mscrm.InlineEditUtilities.tryCommitActiveControl(false);
        if (!this.$0_1.checkRequiredCompleted()) {
            this.$0_1.set_stageGatesVisible(true);
            window.clearTimeout(this.$2F_1);
            var $$t_1 = this;
            this.$2F_1 = window.setTimeout(function() {
                $$t_1.$0_1.set_stageGatesVisible(false);
            }, 10000);
            return false;
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (296,3)
    $2a_1: function ProcessControl_Views_ActionsView$$2a_1($p0) {
        if (!this.$1z_1(0)) {
            return;
        }
        this.$I_1.focus();
        this.$S_1 = true;
        this.$1Y_1(this.$I_1);
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Advance', 'advance button');
        this.$0_1.advanceStage();
        $p0.preventDefault();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (311,3)
    $2b_1: function ProcessControl_Views_ActionsView$$2b_1($p0) {
        if (!this.$1z_1(1)) {
            return;
        }
        this.$F_1.focus();
        this.$S_1 = true;
        this.$1Y_1(this.$F_1);
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Back', 'back button');
        this.$0_1.backStage();
        $p0.preventDefault();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (330,3)
    $2d_1: function ProcessControl_Views_ActionsView$$2d_1($p0) {
        if (!this.$1z_1(2) || !this.$0_1.isActionable()) {
            return;
        }
        this.$E_1.focus();
        this.$S_1 = true;
        this.$1Y_1(this.$E_1);
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Back', 'navigate button');
        this.$14_1(Mscrm.RefreshFormMarker.StartGetNavigateToEntities);
        var $v_0 = this.$0_1.findCloseLoopEntity();
        if (!IsNull($v_0)) {
            this.$0_1.navigateToCloseLoop();
            $p0.preventDefault();
            return;
        }
        var $v_1 = this.$0_1.getForwardNavigationRelationshipInfo(this.$0_1.get_selectedStage());
        if (IsNull($v_1)) {
            this.$S_1 = false;
            this.$2H_1(this.$E_1);
            $p0.preventDefault();
            return;
        }
        var $v_2 = new Mscrm.RemoteCommandJson('ProcessControl', 'GetForwardNavigationEntities');
        $v_2.setParameter('currentEntityId', this.$0_1.$B_0.Id);
        $v_2.setParameter('referencedEntityLogicalName', $v_1['referencedEntityLogicalName']);
        $v_2.setParameter('referencingEntityLogicalName', $v_1['referencingEntityLogicalName']);
        $v_2.setParameter('referencingEntityAttributeName', $v_1['referencingEntityAttributeName']);
        var $$t_6 = this, $$t_7 = this;
        $v_2.execute().then(function($p1_0) {
            $$t_6.$47_1($p1_0);
            $$t_6.$14_1(Mscrm.RefreshFormMarker.FinishGetNavigateToEntities);
        }, function($p1_0) {
            $$t_7.$14_1(Mscrm.RefreshFormMarker.FinishGetNavigateToEntities);
        });
        $p0.preventDefault();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (389,3)
    $47_1: function ProcessControl_Views_ActionsView$$47_1($p0) {
        this.$4C_1($p0);
        this.$g_1.show(this.$E_1);
        $P_CRM(window).resize(this.$$d_$4A_1);
        var $v_0 = this.$g_1.dialogChrome();
        $v_0.children('.ui-dialog-content').css('min-height', '0px');
        var $v_1 = $P_CRM('#processActionsContainer').offset().left;
        if (Mscrm.Utilities.get_isLeftToRight()) {
            var $v_2 = $v_0.css('left');
            var $v_3 = parseInt($v_2.substr(0, $v_2.length - 2), 10);
            $v_1 = $v_3 - 8 - 1;
        }
        $v_0.css('left', $v_1 + 'px');
        this.$S_1 = false;
        this.$2H_1(this.$E_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (416,3)
    $4C_1: function ProcessControl_Views_ActionsView$$4C_1($p0) {
        var $v_0;
        if (!IsNull($p0.NavigationEntities) && $p0.NavigationEntities.length >= 1) {
            $v_0 = this.$3l_1($p0.NavigationEntities, $p0.EntityDisplayName, $p0.EntityLogicalName, $p0.EntityTypeCode, $p0.ShowCreate);
        }
        else {
            $v_0 = this.$3k_1($p0.EntityDisplayName, $p0.EntityLogicalName, $p0.EntityTypeCode, $p0.ShowCreate);
        }
        this.$2m_1();
        this.$g_1 = Mscrm.FlyOutMenu.createFlyOut($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (441,3)
    $2m_1: function ProcessControl_Views_ActionsView$$2m_1() {
        if (IsNull(this.$g_1)) {
            return;
        }
        this.$g_1.dialogChrome().find('.navigateMenuItem, .navigateMenuCreate').unbind('click');
        this.$g_1.dispose();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (458,3)
    $4A_1: function ProcessControl_Views_ActionsView$$4A_1($p0) {
        this.$g_1.hide();
        $P_CRM('body').unbind('resize', this.$$d_$4A_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (473,3)
    $3k_1: function ProcessControl_Views_ActionsView$$3k_1($p0, $p1, $p2, $p3) {
        var $v_0 = new Mscrm.FlyOutMenuDescriptor();
        $v_0.cssClass = 'processNavigateMenu';
        $v_0.width = 200;
        var $v_1 = new Mscrm.MenuSectionDescriptor();
        $v_1.cssClass = 'navigateMenuSection';
        var $v_2 = new Mscrm.MenuListItemDescriptor();
        $v_2.cssClass = 'navigateMenuItem disabled';
        $v_2.displayName = this.$0_1.$9_0.noRecords;
        $v_2.title = this.$0_1.$9_0.noRecords;
        $v_1.menuListItems = [ $v_2 ];
        $v_0.menuSections = [ this.$2l_1($p0), $v_1, this.$2k_1(0, $p1, $p2, $p3) ];
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (508,3)
    $2l_1: function ProcessControl_Views_ActionsView$$2l_1($p0) {
        var $v_0 = new Mscrm.MenuSectionDescriptor();
        $v_0.id = 'navigateHeaderSection';
        $v_0.displayName = this.$0_1.$9_0.selectChild + ' ' + $p0;
        $v_0.cssClass = 'navigateHeaderSection';
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (525,3)
    $2k_1: function ProcessControl_Views_ActionsView$$2k_1($p0, $p1, $p2, $p3) {
        var $v_0 = new Mscrm.MenuSectionDescriptor();
        $v_0.cssClass = 'navigateFooterSection';
        $v_0.clickHandler = this.$$d_$46_1;
        var $v_1 = new Mscrm.MenuListItemDescriptor();
        var $v_2 = $p0 + ' ' + this.$0_1.$9_0.available;
        $v_1.displayName = $v_2;
        $v_1.title = $v_2;
        $v_1.cssClass = 'navigateAvailableCount';
        var $v_3 = new Mscrm.MenuListItemDescriptor();
        if ($p3 && this.$4I_1(this.$0_1.$B_0.TypeName, $p1)) {
            var $v_4 = $P_CRM(String.format('<div class=\'createText\'>{0}</div><div class=\'createImage\'><img/></div>', this.$0_1.$9_0.createNew));
            ProcessControl.Services.ImageStripService.setStripIcon($v_4.find('img'), '/_imgs/ProcessControl/create_icon.png', this.$0_1.$9_0.createNew);
            $v_3.content = $v_4;
            $v_3.title = this.$0_1.$9_0.createNew;
            $v_3.cssClass = 'navigateMenuCreate';
            $v_3.id = 'bpfNavigateCreate';
            $v_3.data = { Command: 'Create', targetEntityLogicalName: $p1, ETC: $p2 };
        }
        $v_0.menuListItems = [ $v_1, $v_3 ];
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (568,3)
    $4I_1: function ProcessControl_Views_ActionsView$$4I_1($p0, $p1) {
        if ($p0 === Mscrm.InternalUtilities.EntityNames.Quote && $p1 === Mscrm.InternalUtilities.EntityNames.SalesOrder) {
            return false;
        }
        if ($p0 === Mscrm.InternalUtilities.EntityNames.Lead && $p1 === Mscrm.InternalUtilities.EntityNames.Opportunity) {
            return false;
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (593,3)
    $3l_1: function ProcessControl_Views_ActionsView$$3l_1($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = new Mscrm.FlyOutMenuDescriptor();
        $v_0.cssClass = 'processNavigateMenu';
        $v_0.width = 200;
        var $v_1 = new Mscrm.MenuSectionDescriptor();
        $v_1.clickHandler = this.$$d_$46_1;
        $v_1.cssClass = 'navigateMenuSection';
        $v_1.menuListItems = new Array(0);
        var $v_2 = 0;
        for (var $$arr_8 = $p0, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
            var $v_3 = $$arr_8[$$idx_A];
            var $v_4 = new Mscrm.MenuListItemDescriptor();
            var $v_5 = $v_3.PrimaryField;
            var $v_6 = 'navigateMenuItem enabled';
            if (isNullOrEmptyString($v_5)) {
                $v_5 = this.$0_1.$9_0.untitled;
                $v_6 += ' emptyDisplayName';
            }
            $v_4.id = 'entity' + $v_2++;
            $v_4.displayName = $v_5;
            $v_4.title = $v_5;
            $v_4.cssClass = $v_6;
            $v_4.data = { Command: 'OpenEntity', Id: $v_3.Id, ETC: $v_3.EntityTypeCode, targetEntityLogicalName: $v_3.EntityLogicalName };
            $v_1.menuListItems[$v_1.menuListItems.length] = $v_4;
        }
        $v_0.menuSections = [ this.$2l_1($p1), $v_1, this.$2k_1($p0.length, $p2, $p3, $p4) ];
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (651,3)
    $46_1: function ProcessControl_Views_ActionsView$$46_1($p0) {
        var $v_0 = $p0.data;
        if (!this.$4P_1($v_0)) {
            return;
        }
        $p0.stopImmediatePropagation();
        this.$S_1 = true;
        this.$1Y_1(this.$E_1);
        this.$43_1($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (666,3)
    $43_1: function ProcessControl_Views_ActionsView$$43_1($p0) {
        switch ($p0['Command']) {
            case 'OpenEntity':
                this.$45_1($p0);
                break;
            case 'Create':
                this.$44_1($p0['targetEntityLogicalName']);
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (679,3)
    $45_1: function ProcessControl_Views_ActionsView$$45_1($p0) {
        var $v_0 = ProcessControl.Views.ActionsView.$3c($p0['targetEntityLogicalName'], $p0['ETC'], $p0['Id']);
        this.$4Q_1($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (686,3)
    $4P_1: function ProcessControl_Views_ActionsView$$4P_1($p0) {
        if (IsNull($p0) || !('Command' in $p0)) {
            return false;
        }
        var $v_0 = $p0['Command'];
        if ($v_0 !== 'OpenEntity' && $v_0 !== 'Create') {
            return false;
        }
        if (!('targetEntityLogicalName' in $p0)) {
            return false;
        }
        if ($v_0 === 'OpenEntity' && !(('Id') in $p0)) {
            return false;
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (720,3)
    $44_1: function ProcessControl_Views_ActionsView$$44_1($p0) {
        var $v_0 = this.$0_1.get_processId();
        if (!isNullOrEmptyString($p0)) {
            var $v_1 = {};
            $v_1['process'] = $v_0;
            $v_1['navsourcetype'] = this.$0_1.$B_0.TypeName;
            $v_1['_CreateFromId'] = this.$0_1.$B_0.Id;
            $v_1['_CreateFromType'] = this.$0_1.$B_0.TypeCode;
            Xrm.Utility.openEntityForm($p0, null, $v_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (748,3)
    $4Q_1: function ProcessControl_Views_ActionsView$$4Q_1($p0) {
        this.$14_1(Mscrm.RefreshFormMarker.StartNavigateToEntity);
        var $v_0 = Xrm.Page.context;
        var $v_1 = new Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase($v_0.getClientUrl());
        var $$t_4 = this;
        $v_1.navigateToNextEntity(this.$0_1.$B_0.Id, this.$0_1.$B_0.TypeName, $p0.Id, $p0.EntityLogicalName, this.$0_1.get_processId()).then(function($p1_0) {
            $$t_4.$14_1(Mscrm.RefreshFormMarker.FinishNavigateToEntity);
            ProcessControl.ViewModels.ProcessControlViewModel.navigateToEntity($p0.EntityLogicalName, $p0.Id);
        }, this.$$d_$4R_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (769,3)
    $14_1: function ProcessControl_Views_ActionsView$$14_1($p0) {
        setPerfMarkerTimestamp($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (778,3)
    $4R_1: function ProcessControl_Views_ActionsView$$4R_1($p0) {
        this.$g_1.hide();
        this.$14_1(Mscrm.RefreshFormMarker.FinishNavigateToEntity);
        this.$S_1 = false;
        this.$2H_1(this.$E_1);
        this.$0_1.error($p0.get_debugErrorMessage());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (788,3)
    $1V_1: function ProcessControl_Views_ActionsView$$1V_1($p0, $p1) {
        $p0.removeClass();
        $p0.attr('src', $p1);
    },
    
    $2S_1: null,
    $2R_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (797,3)
    $1Y_1: function ProcessControl_Views_ActionsView$$1Y_1($p0) {
        $p0.addClass('loading');
        var $v_0 = $p0.find('img');
        this.$2S_1 = $v_0.attr('src');
        this.$2R_1 = $v_0.attr('class');
        this.$1V_1($v_0, '/_imgs/ProcessControl/CircularPreloader_White_15x15.gif');
        $v_0.addClass('stageActionIcon');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (807,3)
    $2H_1: function ProcessControl_Views_ActionsView$$2H_1($p0) {
        $p0.removeClass('loading');
        var $v_0 = $p0.find('img');
        this.$1V_1($v_0, this.$2S_1);
        $v_0.attr('class', this.$2R_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (815,3)
    $c_1: function ProcessControl_Views_ActionsView$$c_1($p0) {
        var $v_0 = this.$0_1.get_warning() === 3;
        if ($v_0) {
            return true;
        }
        if (!IsNull(this.$l_1)) {
            var $v_2 = false;
            switch ($p0) {
                case 0:
                    $v_2 = !!($v_2 | !this.$l_1.get_advance());
                    break;
                case 1:
                    $v_2 = !!($v_2 | !this.$l_1.get_back());
                    break;
                case 2:
                    $v_2 = !!($v_2 | !this.$l_1.get_navigate());
                    break;
            }
            if ($v_2) {
                return true;
            }
        }
        var $v_1 = this.$0_1.get_selectedStage().displayIndex === this.$0_1.get_localActiveStage().displayIndex;
        if ($p0 === 2) {
            return this.$0_1.$C_0 || !this.$0_1.get_selectedStage().get_navigate();
        }
        else {
            return this.$0_1.$C_0 || this.$0_1.$J_0 || !$v_1;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (847,3)
    $2q_1: function ProcessControl_Views_ActionsView$$2q_1() {
        if (this.$c_1(0)) {
            return this.get_$3n_1();
        }
        return this.get_$3O_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (854,3)
    $3x_1: function ProcessControl_Views_ActionsView$$3x_1() {
        if (this.$c_1(1)) {
            return this.get_$3o_1();
        }
        return this.get_$3P_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (861,3)
    $27_1: function ProcessControl_Views_ActionsView$$27_1() {
        var $v_0 = this.$I_1.find('img');
        ProcessControl.Services.ImageStripService.setStripIcon($v_0, this.$2q_1(), this.$0_1.$9_0.advance);
        $v_0.addClass('stageActionIcon');
        this.$I_1.removeClass('loading');
        if (this.$c_1(0)) {
            this.$I_1.addClass('disabled');
            this.$I_1.attr('tabindex', '-1');
        }
        else {
            this.$I_1.removeClass('disabled');
            this.$I_1.attr('tabindex', '1000');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (880,3)
    $28_1: function ProcessControl_Views_ActionsView$$28_1() {
        var $v_0 = this.$F_1.find('img');
        ProcessControl.Services.ImageStripService.setStripIcon($v_0, this.$3x_1(), this.$0_1.$9_0.back);
        $v_0.addClass('stageActionIcon');
        this.$F_1.removeClass('loading');
        if (this.$c_1(1)) {
            this.$F_1.addClass('disabled');
            this.$F_1.attr('tabindex', '-1');
        }
        else {
            this.$F_1.removeClass('disabled');
            this.$F_1.attr('tabindex', '1000');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (899,3)
    $4v_1: function ProcessControl_Views_ActionsView$$4v_1() {
        var $v_0 = this.$E_1.find('img');
        ProcessControl.Services.ImageStripService.setStripIcon($v_0, this.$2q_1(), this.$0_1.$9_0.advance);
        $v_0.addClass('stageActionIcon');
        this.$E_1.removeClass('loading');
        if (this.$c_1(2)) {
            this.$E_1.addClass('disabled');
            this.$E_1.attr('tabindex', '-1');
        }
        else {
            this.$E_1.removeClass('disabled');
            this.$E_1.attr('tabindex', '1000');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (918,3)
    $36_1: function ProcessControl_Views_ActionsView$$36_1() {
        this.$27_1();
        this.$28_1();
        this.$4v_1();
        var $v_0 = this.$0_1.get_warning() === 3;
        var $v_1 = $v_0 || this.$c_1(0) && this.$c_1(1) && this.$c_1(2);
        if ($v_1) {
            this.$2_1.addClass('disabled');
        }
        else {
            this.$2_1.removeClass('disabled');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (935,3)
    $1W_1: function ProcessControl_Views_ActionsView$$1W_1($p0) {
        this.$l_1 = $p0;
        this.$5C_1($p0.get_advance());
        this.$5D_1($p0.get_back());
        this.$5F_1($p0.get_navigate());
        if ($p0.get_back() && ($p0.get_advance() || $p0.get_navigate())) {
            this.$F_1.addClass('multipleActions');
        }
        else {
            this.$F_1.removeClass('multipleActions');
        }
        if ($p0.get_advance() || $p0.get_back() || $p0.get_navigate()) {
            this.$2_1.removeClass('hidden');
        }
        else {
            this.$2_1.addClass('hidden');
        }
        this.$36_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (964,3)
    $5C_1: function ProcessControl_Views_ActionsView$$5C_1($p0) {
        if ($p0) {
            this.$I_1.removeClass('hidden');
        }
        else {
            this.$I_1.addClass('hidden');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (976,3)
    $5D_1: function ProcessControl_Views_ActionsView$$5D_1($p0) {
        if ($p0) {
            this.$F_1.removeClass('hidden');
        }
        else {
            this.$F_1.addClass('hidden');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (988,3)
    $5F_1: function ProcessControl_Views_ActionsView$$5F_1($p0) {
        if ($p0) {
            this.$E_1.removeClass('hidden');
        }
        else {
            this.$E_1.addClass('hidden');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (1000,3)
    $3U_1: function ProcessControl_Views_ActionsView$$3U_1($p0, $p1) {
        if ($p1.get_isError() || !$p1.results) {
            this.$27_1();
            this.$S_1 = false;
            return;
        }
        var $v_0 = $p1.results;
        this.$1x_1($v_0, true);
        this.$27_1();
        this.$S_1 = false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (1016,3)
    $3X_1: function ProcessControl_Views_ActionsView$$3X_1($p0, $p1) {
        if ($p1.get_isError() || !$p1.results) {
            this.$28_1();
            this.$S_1 = false;
            return;
        }
        var $v_0 = $p1.results;
        this.$1x_1($v_0, false);
        this.$28_1();
        this.$S_1 = false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ActionsView.js.cs (1032,3)
    $1x_1: function ProcessControl_Views_ActionsView$$1x_1($p0, $p1) {
        this.$0_1.set_stageGatesVisible(false);
        this.$1W_1($p0);
        this.$2_1.trigger(ProcessControl.Views.ActionsView.actionCompleted, [ $p0, $p1 ]);
    }
}


ProcessControl.Views.BaseView = function ProcessControl_Views_BaseView(viewModel) {
}
ProcessControl.Views.BaseView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\BaseView.js.cs (16,3)
    render: function ProcessControl_Views_BaseView$render() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\BaseView.js.cs (20,3)
    postRender: function ProcessControl_Views_BaseView$postRender() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\BaseView.js.cs (24,3)
    completeInitialization: function ProcessControl_Views_BaseView$completeInitialization() {
    },
    
    _disposed: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\BaseView.js.cs (35,3)
    dispose: function ProcessControl_Views_BaseView$dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this.actualDispose();
        Mscrm.Utilities.destroyObject(this);
    }
}


ProcessControl.Views.CollapsibleView = function ProcessControl_Views_CollapsibleView(viewModel) {
    this.$$d_$2c_1 = Function.createDelegate(this, this.$2c_1);
    ProcessControl.Views.CollapsibleView.initializeBase(this, [ viewModel ]);
    this.$0_1 = viewModel;
    this.$1m_1 = $P_CRM('#processStagesContainer');
    this.$2_1 = $P_CRM('#collapsibleView');
    this.$x_1 = $P_CRM('#processControlCollapseButtonContainer', this.$2_1);
    this.$m_1 = $P_CRM('#processName', this.$2_1);
    this.$L_1 = $P_CRM('#processNameText', this.$2_1);
    this.$2J_1 = $P_CRM('#processControlCollapseButton', this.$2_1);
    this.$1F_1();
    this.$51_1();
}
ProcessControl.Views.CollapsibleView.prototype = {
    $x_1: null,
    $m_1: null,
    $0_1: null,
    $1m_1: null,
    $2J_1: null,
    $L_1: null,
    $2L_1: false,
    $e_1: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (78,4)
    get_collapsibleStatus: function ProcessControl_Views_CollapsibleView$get_collapsibleStatus() {
        return this.$e_1;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (79,4)
    set_collapsibleStatus: function ProcessControl_Views_CollapsibleView$set_collapsibleStatus(value) {
        this.$e_1 = value;
        return value;
    },
    
    $2_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (85,4)
    get_viewContainer: function ProcessControl_Views_CollapsibleView$get_viewContainer() {
        return this.$2_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (90,4)
    get_openAsCollapsed: function ProcessControl_Views_CollapsibleView$get_openAsCollapsed() {
        return this.$2L_1 || this.$0_1.$C_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (116,3)
    render: function ProcessControl_Views_CollapsibleView$render() {
        this.$2J_1.empty().append('<img class=\"collapseButtonIcon\" />');
        this.$50_1();
        this.$53_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (123,3)
    actualDispose: function ProcessControl_Views_CollapsibleView$actualDispose() {
        this.$1X_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (128,3)
    $1X_1: function ProcessControl_Views_CollapsibleView$$1X_1() {
        this.$1m_1.unbind();
        this.$x_1.unbind();
        this.$m_1.unbind();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (135,3)
    $1F_1: function ProcessControl_Views_CollapsibleView$$1F_1() {
        var $$t_5 = this;
        this.$1m_1.bind(ProcessControl.Views.CollapsibleView.expandEvent, function() {
            $$t_5.$3r_1();
        });
        this.$x_1.click(this.$$d_$2c_1);
        var $$t_6 = this;
        this.$x_1.keydown(function($p1_0) {
            if ($$t_6.$1I_1($p1_0.which)) {
                $$t_6.$2c_1($p1_0);
            }
        });
        var $$t_7 = this;
        this.$m_1.mouseenter(function($p1_0) {
            $$t_7.$L_1.fadeIn(100);
        });
        var $$t_8 = this;
        (this.$m_1).focusin(function($p1_0) {
            $$t_8.$L_1.fadeIn(100);
        });
        var $$t_9 = this;
        this.$m_1.mouseleave(function($p1_0) {
            $$t_9.$L_1.fadeOut(100);
        });
        var $$t_A = this;
        (this.$m_1).focusout(function($p1_0) {
            $$t_A.$L_1.fadeOut(100);
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (180,3)
    resize: function ProcessControl_Views_CollapsibleView$resize(processWidth) {
        var $v_0 = this.$L_1.css('visibility');
        var $v_1 = this.$L_1.css('display');
        this.$L_1.css('max-width', '');
        this.$L_1.css('visibility', 'hidden');
        this.$L_1.css('display', 'inline-block');
        var $v_2 = this.$L_1.outerWidth(true);
        var $v_3 = Math.min(processWidth - 61, $v_2);
        this.$L_1.css('max-width', $v_3 + 'px');
        this.$L_1.css('visibility', $v_0);
        this.$L_1.css('display', $v_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (195,3)
    $1I_1: function ProcessControl_Views_CollapsibleView$$1I_1($p0) {
        return $p0 === 13;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (200,3)
    $2c_1: function ProcessControl_Views_CollapsibleView$$2c_1($p0) {
        if (!this.$0_1.isActionable()) {
            return;
        }
        this.$3i_1();
        $p0.preventDefault();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (210,3)
    $50_1: function ProcessControl_Views_CollapsibleView$$50_1() {
        this.$1V_1(this.$x_1, 'collapse', '/_imgs/ProcessControl/8x6_Collapse_Icon.png', 'collapseButtonIcon');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (215,3)
    $53_1: function ProcessControl_Views_CollapsibleView$$53_1() {
        this.$1V_1(this.$m_1, null, '/_imgs/ProcessControl/8_info_icon.png', null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (220,3)
    $1V_1: function ProcessControl_Views_CollapsibleView$$1V_1($p0, $p1, $p2, $p3) {
        var $v_0 = $p0.find('img');
        this.$x_1.addClass($p1);
        ProcessControl.Services.ImageStripService.setStripIcon($v_0, $p2, null);
        $v_0.addClass($p3);
        $v_0.show();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (231,3)
    $1y_1: function ProcessControl_Views_CollapsibleView$$1y_1() {
        return String.format('{0}_{1}_process_hidden', this.$0_1.$B_0.TypeName, this.$0_1.$B_0.Id);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (236,3)
    $3r_1: function ProcessControl_Views_CollapsibleView$$3r_1() {
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Expand', 'expand button');
        this.$4m_1();
        this.$e_1 = 1;
        this.$2_1.trigger(ProcessControl.Views.CollapsibleView.expanded);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (244,3)
    $4m_1: function ProcessControl_Views_CollapsibleView$$4m_1() {
        document.cookie = String.format('{0}=0; expires = Tue, 01-Jan-1900 00:00:00 GMT', this.$1y_1());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (249,3)
    $3i_1: function ProcessControl_Views_CollapsibleView$$3i_1() {
        Mscrm.MetricsReporting.instance().addMetric('Sales Process Collapse', 'collapse button');
        this.$4z_1();
        this.$e_1 = 0;
        this.$2_1.trigger(ProcessControl.Views.CollapsibleView.collapsed);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (257,3)
    $4z_1: function ProcessControl_Views_CollapsibleView$$4z_1() {
        var $v_0 = new Date();
        $v_0.setDate($v_0.getDate() + 7);
        document.cookie = String.format('{0}=1; expires = {1:ddd, dd-MMM}-{2} {3:hh:mm:ss} GMT', this.$1y_1(), $v_0, $v_0.getFullYear(), $v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\CollapsibleView.js.cs (265,3)
    $51_1: function ProcessControl_Views_CollapsibleView$$51_1() {
        var $v_0 = document.cookie.split(';');
        var $v_1 = this.$1y_1();
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2].substr(0, $v_0[$v_2].indexOf('='));
            $v_3 = $v_3.trimStart();
            if ($v_3 === $v_1) {
                this.$2L_1 = true;
                this.$e_1 = 0;
                break;
            }
        }
    }
}


ProcessControl.Views.ProcessControlView = function ProcessControl_Views_ProcessControlView(viewModel) {
    this.$$d_$2C_1 = Function.createDelegate(this, this.$2C_1);
    this.$$d_$4b_1 = Function.createDelegate(this, this.$4b_1);
    this.$$d_$4f_1 = Function.createDelegate(this, this.$4f_1);
    this.$$d_$4U_1 = Function.createDelegate(this, this.$4U_1);
    this.$$d_$5H_1 = Function.createDelegate(this, this.$5H_1);
    this.$Y_1 = new Mscrm.MetricsStopwatch('ProcessControl.SlideDown');
    ProcessControl.Views.ProcessControlView.initializeBase(this, [ viewModel ]);
    this.$y_1 = false;
    this.$H_1 = new ProcessControl.Views.StagesView(viewModel);
    this.$8_1 = new ProcessControl.Views.StepsView(viewModel);
    this.$O_1 = new ProcessControl.Views.ActionsView(viewModel);
    this.$P_1 = new ProcessControl.Views.CollapsibleView(viewModel);
    this.set_dataContext(viewModel);
    this.$2_1 = $P_CRM('#processControlContainer');
    this.$r_1 = new ProcessControl.Views.WarningBarView(this.$2_1, viewModel);
    this.$1L_1 = $P_CRM('#processControlCollapsibleArea');
    this.$2T_1 = $P_CRM('#processHeaderArea');
    this.$T_1 = $P_CRM('#processControlScrollPane');
    this.$1q_1 = $P_CRM('#processControlScrollbarContainer');
    this.$1A_1 = $P_CRM('#processScrollbarMask');
    this.$1n_1 = $P_CRM('#processStepsContainer');
    this.$N_1 = Mscrm.CrmBrowser.get_currentBrowser();
    this.$D_1 = $P_CRM('body').css('direction').toLowerCase() === 'rtl';
    this.$3T_1();
    if (this.get_$d_1()) {
        this.$G_1 = $P_CRM('#processControlScrollbar');
        this.$G_1.slider();
    }
    this.$1F_1();
}
ProcessControl.Views.ProcessControlView.prototype = {
    $1L_1: null,
    $2T_1: null,
    $T_1: null,
    $1q_1: null,
    $G_1: null,
    $1A_1: null,
    $1n_1: null,
    $N_1: null,
    $D_1: false,
    $2U_1: 0,
    $0_1: null,
    $1i_1: 0,
    $y_1: false,
    $H_1: null,
    $8_1: null,
    $O_1: null,
    $P_1: null,
    $r_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (97,4)
    get_$2E_1: function ProcessControl_Views_ProcessControlView$get_$2E_1() {
        return (this.$D_1) ? 'margin-right' : 'margin-left';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (102,4)
    get_$d_1: function ProcessControl_Views_ProcessControlView$get_$d_1() {
        return !this.$D_1 && !window.UseTabletExperience;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (107,4)
    get_$4g_1: function ProcessControl_Views_ProcessControlView$get_$4g_1() {
        var $v_0 = window.self.IS_OUTLOOK_CLIENT;
        return (IsNull($v_0)) ? false : $v_0;
    },
    
    $2_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (121,4)
    get_viewContainer: function ProcessControl_Views_ProcessControlView$get_viewContainer() {
        return this.$2_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (129,4)
    get_dataContext: function ProcessControl_Views_ProcessControlView$get_dataContext() {
        return this.$0_1;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (133,4)
    set_dataContext: function ProcessControl_Views_ProcessControlView$set_dataContext(value) {
        if (!(ProcessControl.ViewModels.ProcessControlViewModel.isInstanceOfType(value))) {
            return value;
        }
        this.$1J_1();
        this.$0_1 = value;
        this.$0_1.add_stageAttributeRefreshed(this.$$d_$5H_1);
        this.$0_1.add_newEntitySaved(this.$$d_$4U_1);
        this.$O_1.set_dataContext(this.$0_1);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (148,3)
    $1J_1: function ProcessControl_Views_ProcessControlView$$1J_1() {
        if (!IsNull(this.$0_1)) {
            this.$0_1.remove_stageAttributeRefreshed(this.$$d_$5H_1);
            this.$0_1.remove_newEntitySaved(this.$$d_$4U_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (201,3)
    $3T_1: function ProcessControl_Views_ProcessControlView$$3T_1() {
        var $v_0 = this.$N_1.get_name();
        if (this.$N_1.get_isIE7()) {
            $v_0 += ' ie7';
        }
        if (this.$N_1.get_isIE8()) {
            $v_0 += ' ie8';
        }
        if (this.$D_1) {
            $v_0 += ' rtl';
        }
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            $v_0 += ' highContrast';
        }
        if (this.get_$4g_1()) {
            $v_0 += ' outlook';
        }
        var $v_1 = window.navigator.platform.toLowerCase();
        if ($v_1.startsWith('mac')) {
            $v_0 += ' mac';
        }
        else if ($v_1.startsWith('win')) {
            $v_0 += ' win';
        }
        else {
            $v_0 += ' unknownPlatform';
        }
        this.$2_1.addClass($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (234,3)
    $1F_1: function ProcessControl_Views_ProcessControlView$$1F_1() {
        var $$t_2 = this;
        this.$8_1.get_viewContainer().bind(ProcessControl.Views.StepsView.narrowSteps, function($p1_0) {
            $$t_2.$29_1();
        });
        var $$t_3 = this;
        this.$H_1.get_viewContainer().bind(ProcessControl.Views.StagesView.stageChange, function($p1_0) {
            if (arguments.length < 3) {
                return;
            }
            $$t_3.$8_1.changeCurrentSteps();
            if ($$t_3.$0_1.get_localActiveStage()) {
                $$t_3.$O_1.changeActionStatus(arguments[1], arguments[2]);
            }
            $$t_3.$1E_1();
            $$t_3.$29_1();
            $$t_3.$39_1();
            $$t_3.$H_1.resize($$t_3.$O_1.get_containerWidth());
            $$t_3.$2C_1(null);
            if (window.UseTabletExperience && $$t_3.$D_1) {
                $$t_3.$3D_1();
            }
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (265,3)
    $2C_1: function ProcessControl_Views_ProcessControlView$$2C_1($p0) {
        window.clearTimeout(this.$2U_1);
        var $$t_1 = this;
        this.$2U_1 = window.setTimeout(function() {
            $$t_1.$2A_1();
        }, 50);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (275,3)
    $4i_1: function ProcessControl_Views_ProcessControlView$$4i_1($p0) {
        $p0.stopPropagation();
        this.$1A_1.hide();
        var $v_0 = document.createEvent('MouseEvents');
        var $v_1 = $p0;
        $v_0.initMouseEvent(Mscrm.EventNames.click, true, true, window.self, 1, $v_1.screenX, $v_1.screenY, $v_1.clientX, $v_1.clientY, false, false, false, false, 0, null);
        var $v_2 = $p0.pageX;
        var $v_3 = $p0.pageY;
        var $v_4 = document.elementFromPoint($v_2, $v_3);
        $v_4.dispatchEvent($v_0);
        this.$1A_1.show();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (301,3)
    $5G_1: function ProcessControl_Views_ProcessControlView$$5G_1($p0) {
        var $v_0 = this.$T_1.width();
        var $v_1 = this.$8_1.get_viewContainer().width();
        if ($v_1 > $v_0) {
            var $v_2 = $p0.value / 100 * ($v_0 - $v_1);
            this.$8_1.get_viewContainer().css('margin-left', $v_2 + 'px');
        }
        else {
            this.$8_1.get_viewContainer().css('margin-left', '0px');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (320,3)
    $2A_1: function ProcessControl_Views_ProcessControlView$$2A_1() {
        var $v_0 = this.$39_1();
        this.$38_1($v_0);
        this.$H_1.resize(this.$O_1.get_containerWidth());
        this.$3A_1();
        if (window.UseTabletExperience && this.$D_1) {
            this.$3D_1();
        }
        $P_CRM(window).trigger('resize-header');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (335,3)
    $39_1: function ProcessControl_Views_ProcessControlView$$39_1() {
        var $v_0 = this.$2_1.width();
        var $v_1 = Math.max($v_0 - this.$O_1.get_containerWidth(), this.$H_1.$1D_1);
        this.$H_1.setWidth($v_1);
        var $v_2 = ($v_0 < this.$1i_1) ? this.$1i_1 : $v_0;
        this.$2T_1[0].style.minWidth = $v_2 + 'px';
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (349,3)
    $38_1: function ProcessControl_Views_ProcessControlView$$38_1($p0) {
        if (IsNull($p0)) {
            $p0 = this.$2_1.width();
        }
        if (this.$N_1.get_agent() === 1) {
            this.$P_1.resize($p0 - 1);
        }
        else {
            this.$P_1.resize($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (360,3)
    $52_1: function ProcessControl_Views_ProcessControlView$$52_1() {
        this.$1i_1 = this.$H_1.$1D_1 + this.$O_1.get_containerWidth();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (365,3)
    $4f_1: function ProcessControl_Views_ProcessControlView$$4f_1() {
        $P_CRM(window).trigger('resize-header');
        this.$38_1();
        this.$8_1.onShow();
        this.$3A_1();
        if (this.$Y_1) {
            this.$Y_1.stop();
            this.$Y_1 = null;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (382,3)
    render: function ProcessControl_Views_ProcessControlView$render() {
        if (this.$0_1.get_noAvailableStages()) {
            this.$2_1.hide();
            this.$1E_1();
            return;
        }
        this.$2_1.show();
        this.$H_1.render();
        this.$8_1.render();
        this.$O_1.render();
        this.$P_1.render();
        this.$r_1.render();
        this.$3S_1();
        this.$1E_1();
        this.$52_1();
        this.$2A_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (408,3)
    $3E_1: function ProcessControl_Views_ProcessControlView$$3E_1($p0) {
        if (this.$Y_1) {
            this.$Y_1.start();
        }
        this.$P_1.$e_1 = 1;
        this.$1L_1.slideDown($p0, this.$$d_$4f_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (419,3)
    $1E_1: function ProcessControl_Views_ProcessControlView$$1E_1() {
        var $v_0 = this.$2_1.parent();
        $v_0.css('height', '');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (426,3)
    $5H_1: function ProcessControl_Views_ProcessControlView$$5H_1($p0, $p1) {
        this.$32_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (431,3)
    $4U_1: function ProcessControl_Views_ProcessControlView$$4U_1($p0, $p1) {
        this.$32_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (436,3)
    $32_1: function ProcessControl_Views_ProcessControlView$$32_1() {
        this.render();
        this.postRender();
        this.completeInitialization();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (443,3)
    $3S_1: function ProcessControl_Views_ProcessControlView$$3S_1() {
        if (this.$0_1.$C_0) {
            this.$2_1.addClass('newRecord');
        }
        if (this.$0_1.$J_0) {
            this.$2_1.addClass('readonly');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (455,3)
    postRender: function ProcessControl_Views_ProcessControlView$postRender() {
        this.$8_1.postRender();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (463,3)
    completeInitialization: function ProcessControl_Views_ProcessControlView$completeInitialization() {
        this.$1q_1.find('a').attr('title', this.$0_1.$9_0.slider);
        this.$8_1.completeInitialization();
        this.$4j_1();
        if (!this.$0_1.$18_0) {
            var $$t_0 = this, $$t_1 = this;
            this.$0_1.get_globalActiveStage().then(function() {
                $$t_0.$H_1.updateStages();
                $$t_0.$O_1.render();
                $$t_0.$2A_1();
                $$t_0.$8_1.updateControlLocks();
                $$t_0.$3E_1(500);
            }, function() {
            });
        }
        if (!this.$P_1.get_openAsCollapsed() && !this.$P_1.$e_1) {
            var $$t_2 = this;
            window.setTimeout(function() {
                $$t_2.$3E_1(1000);
            }, 100);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (501,3)
    actualDispose: function ProcessControl_Views_ProcessControlView$actualDispose() {
        if (this.get_$d_1()) {
            this.$G_1.slider('destroy');
        }
        this.$1J_1();
        this.$1X_1();
        this.$3p_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (513,3)
    $3p_1: function ProcessControl_Views_ProcessControlView$$3p_1() {
        Mscrm.Utilities.safeDispose(this.$H_1);
        Mscrm.Utilities.safeDispose(this.$8_1);
        Mscrm.Utilities.safeDispose(this.$O_1);
        Mscrm.Utilities.safeDispose(this.$P_1);
        Mscrm.Utilities.safeDispose(this.$r_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (522,3)
    $1X_1: function ProcessControl_Views_ProcessControlView$$1X_1() {
        $P_CRM(window).unbind(Mscrm.FormNavControl.toggleEvent, this.$$d_$4b_1);
        $P_CRM(window).unbind('resize', this.$$d_$2C_1);
        this.$8_1.get_viewContainer().unbind();
        this.$H_1.get_viewContainer().unbind();
        if (!IsNull(this.$G_1)) {
            this.$G_1.unbind('slide');
        }
        this.$O_1.get_viewContainer().unbind();
        this.$P_1.get_viewContainer().unbind();
        this.$1A_1.unbind();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (538,3)
    $4b_1: function ProcessControl_Views_ProcessControlView$$4b_1($p0) {
        this.$2C_1(null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (543,3)
    $4j_1: function ProcessControl_Views_ProcessControlView$$4j_1() {
        if (this.$y_1) {
            return;
        }
        ProcessControl.Services.DebugService.assert(!isNullOrEmptyString(Mscrm.FormNavControl.toggleEvent), 'the toggle event must be non-empty');
        $P_CRM(window).bind(Mscrm.FormNavControl.toggleEvent, this.$$d_$4b_1);
        if (this.get_$d_1()) {
            var $$t_F = this;
            this.$G_1.bind('slide', function($p1_0, $p1_1) {
                $$t_F.$5G_1($p1_1);
            });
        }
        $P_CRM(window).bind('resize', this.$$d_$2C_1);
        var $$t_G = this;
        this.$H_1.get_viewContainer().bind(ProcessControl.Views.StagesView.keyDownOnStage, function($p1_0) {
            if (arguments.length < 2) {
                return;
            }
            var $v_0 = arguments[1];
            $$t_G.$8_1.focusOnSteps($v_0);
        });
        var $$t_H = this;
        this.$8_1.get_viewContainer().bind(ProcessControl.Views.StepsView.keyUpOnSteps, function($p1_0) {
            if (arguments.length < 2) {
                return;
            }
            var $v_1 = arguments[1];
            $$t_H.$H_1.focusOnStage($v_1);
        });
        var $$t_I = this;
        this.$8_1.get_viewContainer().bind(ProcessControl.Views.StepsView.widenSteps, function($p1_0) {
            if (arguments.length < 2) {
                return;
            }
            var $v_2 = arguments[1];
            $$t_I.$59_1($v_2);
        });
        var $$t_J = this;
        this.$8_1.get_viewContainer().bind(ProcessControl.Views.StepsView.narrowSteps, function($p1_0) {
            $$t_J.$29_1();
        });
        var $$t_K = this;
        this.$O_1.get_viewContainer().bind(ProcessControl.Views.ActionsView.actionCompleted, function($p1_0) {
            if (arguments.length < 3) {
                return;
            }
            var $v_3 = arguments[1];
            var $v_4 = arguments[2];
            $$t_K.$1x_1($v_3, $v_4);
        });
        var $$t_L = this;
        this.$P_1.get_viewContainer().bind(ProcessControl.Views.CollapsibleView.expanded, function($p1_0) {
            if ($$t_L.$Y_1) {
                $$t_L.$Y_1.start();
                if (!$$t_L.$Y_1.properties) {
                    $$t_L.$Y_1.properties = {};
                }
                $$t_L.$Y_1.properties['UserTriggered'] = true;
            }
            $$t_L.$1L_1.slideDown(500, $$t_L.$$d_$4f_1);
            $$t_L.$1E_1();
        });
        var $$t_M = this;
        this.$P_1.get_viewContainer().bind(ProcessControl.Views.CollapsibleView.collapsed, function($p1_0) {
            $$t_M.$1L_1.slideUp(500, function() {
                $P_CRM(window).trigger('resize-header');
            });
            $$t_M.$1E_1();
        });
        if (this.$N_1.get_agent() === 1) {
            var $$t_N = this;
            this.$1A_1.bind(Mscrm.EventNames.click, function($p1_0) {
                $$t_N.$4i_1($p1_0);
            });
        }
        this.$y_1 = true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (651,3)
    $1x_1: function ProcessControl_Views_ProcessControlView$$1x_1($p0, $p1) {
        if ($p0.displayIndex === this.$H_1.$f_1) {
            return;
        }
        this.$H_1.changeStageCompleted($p0, $p1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (663,3)
    $59_1: function ProcessControl_Views_ProcessControlView$$59_1($p0) {
        var $v_0 = this.$T_1.offset();
        var $v_1 = $v_0.left + this.$T_1.width();
        var $v_2 = $p0 - $v_1 + 20;
        if ($v_2 <= 0) {
            return;
        }
        var $v_3 = this.$8_1.get_viewContainer().css('margin-left');
        var $v_4 = parseInt($v_3);
        var $v_5 = $v_4 - $v_2;
        this.$8_1.get_viewContainer().css('margin-left', $v_5 + 'px');
        if (!this.get_$d_1()) {
            return;
        }
        if (this.$G_1.hasClass('hidden')) {
            this.$26_1();
        }
        this.$G_1.find('a').css('left', '100%');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (685,3)
    $4N_1: function ProcessControl_Views_ProcessControlView$$4N_1() {
        return this.$G_1.is(':visible');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (690,3)
    $2x_1: function ProcessControl_Views_ProcessControlView$$2x_1() {
        if (!this.get_$d_1()) {
            return false;
        }
        if (!this.$P_1.$e_1) {
            return false;
        }
        return this.$8_1.get_viewContainer().width() > this.$T_1.width();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (703,3)
    $29_1: function ProcessControl_Views_ProcessControlView$$29_1() {
        this.$35_1();
        if (!this.$2x_1()) {
            this.$2u_1();
        }
        else {
            this.$26_1();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (717,3)
    $3A_1: function ProcessControl_Views_ProcessControlView$$3A_1() {
        if (!this.get_$d_1()) {
            return;
        }
        if (this.$N_1.get_isIE7()) {
            this.$T_1.width(this.$2_1.width());
        }
        if (!this.$2x_1()) {
            this.$2u_1();
        }
        else {
            this.$26_1();
            this.$4l_1();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (736,3)
    $35_1: function ProcessControl_Views_ProcessControlView$$35_1() {
        this.$8_1.get_viewContainer().css(this.get_$2E_1(), '0px');
        if (!this.get_$d_1()) {
            return;
        }
        this.$G_1.find('.ui-slider-handle').css('left', '0%');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (745,3)
    $4l_1: function ProcessControl_Views_ProcessControlView$$4l_1() {
        var $v_0 = this.$8_1.get_viewContainer().css(this.get_$2E_1());
        var $v_1 = parseInt($v_0);
        var $v_2 = this.$8_1.get_viewContainer().width() + $v_1;
        var $v_3 = this.$T_1.width() - $v_2;
        if ($v_3 > 0) {
            this.$8_1.get_viewContainer().css(this.get_$2E_1(), $v_1 + $v_3 + 'px');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (755,3)
    $2u_1: function ProcessControl_Views_ProcessControlView$$2u_1() {
        if (!this.get_$d_1()) {
            return;
        }
        if (!this.$4N_1()) {
            return;
        }
        if (!this.$G_1.hasClass('hidden')) {
            this.$G_1.addClass('hidden');
        }
        if (this.$N_1.get_isIE7()) {
            this.$G_1.hide();
        }
        this.$35_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (770,3)
    $26_1: function ProcessControl_Views_ProcessControlView$$26_1() {
        if (!this.get_$d_1()) {
            return;
        }
        this.$G_1.removeClass('hidden');
        if (this.$N_1.get_isIE7()) {
            this.$G_1.show();
        }
        var $v_0 = this.$T_1.width() / this.$8_1.get_viewContainer().width() * this.$T_1.width();
        $v_0 = Math.max($v_0, 100);
        var $v_1 = {};
        $v_1['width'] = $v_0 + 'px';
        $v_1['margin-left'] = -$v_0 / 2 + 'px';
        this.$G_1.find('.ui-slider-handle').css($v_1);
        var $v_2 = {};
        $v_2['margin-left'] = $v_0 / 2 + 'px';
        $v_2['margin-right'] = $v_0 / 2 + 'px';
        this.$1q_1.css($v_2);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (793,3)
    $3D_1: function ProcessControl_Views_ProcessControlView$$3D_1() {
        if (this.$T_1 && this.$1n_1) {
            var $v_0 = this.$1n_1.width();
            var $v_1 = this.$T_1.width();
            if ($v_0 > $v_1) {
                this.$T_1.scrollLeft($v_0 - $v_1);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\ProcessControlView.js.cs (821,4)
    get_selectedStageSteps: function ProcessControl_Views_ProcessControlView$get_selectedStageSteps() {
        return this.$8_1.getStageSteps(this.$H_1.get_currentSelectedStageIndex());
    }
}


ProcessControl.Views.StagesView = function ProcessControl_Views_StagesView(viewModel) {
    this.$$d_$48_1 = Function.createDelegate(this, this.$48_1);
    this.$1t_1 = -1;
    this.$1f_1 = -1;
    ProcessControl.Views.StagesView.initializeBase(this, [ viewModel ]);
    this.$0_1 = viewModel;
    this.$N_1 = Mscrm.CrmBrowser.get_currentBrowser();
    this.$11_1 = $P_CRM('#processHeaderContainer');
    this.$2_1 = $P_CRM('#processStagesContainer', this.$11_1);
    this.$54_1();
    this.$D_1 = $P_CRM('body').css('direction').toLowerCase() === 'rtl';
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (31,3)
ProcessControl.Views.StagesView.$4q = function ProcessControl_Views_StagesView$$4q($p0, $p1, $p2, $p3) {
    return String.format('<div id=\"{0}\" class=\"scrollButton {1}\">\r\n\t\t\t\t<div class=\"globalActiveStageFlag\">\r\n\t\t\t\t\t<img src=\"{2}\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"scrollArrowOuter\">\r\n\t\t\t\t\t<div class=\"scrollArrow\">\r\n\t\t\t\t\t\t<div class=\"scrollArrowInner\">\r\n\t\t\t\t\t\t\t<img src=\"{3}\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>', CrmEncodeDecode.CrmHtmlAttributeEncode($p0), CrmEncodeDecode.CrmHtmlAttributeEncode($p1), CrmEncodeDecode.CrmHtmlAttributeEncode($p2), CrmEncodeDecode.CrmHtmlAttributeEncode($p3));
}
ProcessControl.Views.StagesView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (65,3)
    $4s_1: function ProcessControl_Views_StagesView$$4s_1($p0, $p1, $p2, $p3) {
        return String.format('<div\r\n\t\t\t\tid=\'stage_{0}\'\r\n\t\t\t\tclass=\"{1}\"\r\n\t\t\t\ttabindex=\"1000\">\r\n\t\t\t\t<div class=\"globalActiveStageFlag\">\r\n\t\t\t\t\t<img src=\'{4}\' title=\'{5}\' />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"processStageTailContainer\" title=\'{2}\'>\r\n\t\t\t\t\t<div class=\"processStageHeadContainer\">\r\n\t\t\t\t\t\t<div class=\"stageContentArea\">\r\n\t\t\t\t\t\t\t<div class=\"stageContent\">\r\n\t\t\t\t\t\t\t\t<div class=\"stageIconHolder\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"stageIcon\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"stageNameContent\">{3}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"stageLabelMask\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"selectedStageExtensionUpper\"></div>\r\n\t\t\t\t<div class=\"selectedStageExtensionLower\"></div>\r\n\t\t\t</div>', $p0, CrmEncodeDecode.CrmHtmlAttributeEncode($p1), CrmEncodeDecode.CrmHtmlAttributeEncode($p2), CrmEncodeDecode.CrmHtmlEncode($p3), '/_imgs/ProcessControl/process_control_global_active_flag.png', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$0_1.$9_0.inProgress));
    },
    
    $13_1: 27,
    $16_1: 0,
    $n_1: 0,
    $q_1: false,
    $1c_1: false,
    $1K_1: 3,
    $3N_1: 11,
    $1s_1: 0,
    $2K_1: 0,
    $N_1: null,
    $0_1: null,
    $1D_1: 0,
    $D_1: false,
    $11_1: null,
    $2N_1: 0,
    $2_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (179,4)
    get_viewContainer: function ProcessControl_Views_StagesView$get_viewContainer() {
        return this.$2_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (184,4)
    get_minWidth: function ProcessControl_Views_StagesView$get_minWidth() {
        return this.$1D_1;
    },
    
    $f_1: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (190,4)
    get_currentActiveStageIndex: function ProcessControl_Views_StagesView$get_currentActiveStageIndex() {
        return this.$f_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (195,4)
    get_currentSelectedStageIndex: function ProcessControl_Views_StagesView$get_currentSelectedStageIndex() {
        return Array.indexOf(this.$0_1.$4_0, this.$0_1.get_selectedStage());
    },
    
    $1k_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (210,4)
    get_$u_1: function ProcessControl_Views_StagesView$get_$u_1() {
        if (!this.$1k_1) {
            this.$1k_1 = $P_CRM('#leftScrollButton', this.$11_1);
        }
        return this.$1k_1;
    },
    
    $1o_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (226,4)
    get_$k_1: function ProcessControl_Views_StagesView$get_$k_1() {
        if (!this.$1o_1) {
            this.$1o_1 = $P_CRM('#rightScrollButton', this.$11_1);
        }
        return this.$1o_1;
    },
    
    $1l_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (242,4)
    get_$21_1: function ProcessControl_Views_StagesView$get_$21_1() {
        if (!this.$1l_1) {
            this.$1l_1 = $P_CRM('.globalActiveStageFlag', this.get_$u_1());
        }
        return this.$1l_1;
    },
    
    $1p_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (258,4)
    get_$2B_1: function ProcessControl_Views_StagesView$get_$2B_1() {
        if (!this.$1p_1) {
            this.$1p_1 = $P_CRM('.globalActiveStageFlag', this.get_$k_1());
        }
        return this.$1p_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (272,4)
    get_$j_1: function ProcessControl_Views_StagesView$get_$j_1() {
        return $P_CRM('.activeStage > .globalActiveStageFlag', this.$2_1);
    },
    
    $1r_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (285,4)
    get_$U_1: function ProcessControl_Views_StagesView$get_$U_1() {
        if (!this.$1r_1) {
            this.$1r_1 = $P_CRM('#processStagesScrollRegion', this.$2_1);
        }
        return this.$1r_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (296,4)
    get_$1U_1: function ProcessControl_Views_StagesView$get_$1U_1() {
        return $P_CRM('#stage_' + this.get_currentSelectedStageIndex());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (304,4)
    get_$w_1: function ProcessControl_Views_StagesView$get_$w_1() {
        var $v_0 = (!this.$D_1) ? this.get_$U_1().css('margin-left') : this.get_$U_1().css('margin-right');
        return parseInt($v_0.substring(0, $v_0.length - 2));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (316,4)
    get_$v_1: function ProcessControl_Views_StagesView$get_$v_1() {
        return (!this.$D_1) ? 'margin-left' : 'margin-right';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (336,3)
    $54_1: function ProcessControl_Views_StagesView$$54_1() {
        this.$1D_1 = 200;
        this.$2_1.css('min-width', this.$1D_1 + 'px');
        var $v_0 = this.$0_1.$4_0.length;
        this.$16_1 = $v_0 * 135 - ($v_0 - 1) * 5;
        this.get_$U_1().css('min-width', this.$16_1 + 'px');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (350,3)
    setWidth: function ProcessControl_Views_StagesView$setWidth(width) {
        this.$2_1.width(width);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (355,3)
    resize: function ProcessControl_Views_StagesView$resize(actionsContainerWidth) {
        var $v_0 = this.$2_1.width();
        var $v_1 = this.$0_1.$4_0.length;
        var $v_2 = ($v_0 + ($v_1 - 1) * 5) / $v_1;
        var $v_3 = {};
        $v_3['width'] = $v_2 + 'px';
        $v_3['min-width'] = 135 + 'px';
        var $v_4 = $P_CRM('.processStageContainer');
        $v_4.css($v_3);
        if (this.$N_1.get_isIE7()) {
            var $v_5 = $v_4.find('.stageIconContainer').first().width();
            if ($v_5 > 0) {
                $v_4.find('a.stageNameContent').width($v_2 - 40);
            }
        }
        this.$2K_1 = Math.max($v_2, 135);
        this.$3q_1($v_0);
        if (this.$q_1) {
            this.$4u_1($v_0);
            this.$4y_1();
            this.$1G_1();
            if (this.$2N_1 !== actionsContainerWidth) {
                this.get_$k_1().css((!this.$D_1) ? 'right' : 'left', (actionsContainerWidth - 3) + 'px');
                this.$2N_1 = actionsContainerWidth;
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (394,3)
    $4u_1: function ProcessControl_Views_StagesView$$4u_1($p0) {
        this.$n_1 = this.$16_1 - $p0 + this.$13_1;
        if (this.get_$w_1() < -this.$n_1) {
            this.get_$U_1().css(this.get_$v_1(), -this.$n_1 + 'px');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (402,3)
    $4y_1: function ProcessControl_Views_StagesView$$4y_1() {
        if (!this.get_$1U_1().length) {
            this.get_$U_1().css(this.get_$v_1(), this.$13_1 + 'px');
            return;
        }
        var $v_0 = this.$1R_1(this.get_currentSelectedStageIndex());
        var $v_1 = $v_0 + this.$2_1.innerWidth() - this.get_$1U_1().outerWidth() - 2 * this.$13_1;
        if (this.get_$w_1() >= $v_0 && this.get_$w_1() <= $v_1) {
            return;
        }
        this.get_$U_1().css(this.get_$v_1(), Math.max($v_0, -this.$n_1) + 'px');
        this.$24_1($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (423,3)
    $3q_1: function ProcessControl_Views_StagesView$$3q_1($p0) {
        if (!this.$q_1 && this.$16_1 > $p0) {
            this.$q_1 = true;
            $P_CRM('.scrollButton', this.$11_1).show();
            this.$2o_1(this.$13_1);
        }
        else if (this.$q_1 && this.$16_1 < $p0) {
            this.$q_1 = false;
            $P_CRM('.scrollButton', this.$11_1).hide();
            this.get_$U_1().css(this.get_$v_1(), '0px');
            this.$1G_1();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (452,3)
    render: function ProcessControl_Views_StagesView$render() {
        this.get_$U_1().empty();
        this.$2_1.before(this.$4o_1());
        this.$2_1.after(this.$4p_1());
        var $v_0 = this.$0_1.$4_0.length;
        var $v_1 = this.$0_1.get_selectedStage().displayIndex;
        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = this.$0_1.$4_0[$v_2];
            var $v_4 = $v_1 === $v_3.displayIndex;
            this.$4r_1($v_3, $v_4);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (471,3)
    $4o_1: function ProcessControl_Views_StagesView$$4o_1() {
        return this.$33_1(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (476,3)
    $4p_1: function ProcessControl_Views_StagesView$$4p_1() {
        return this.$33_1(false);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (481,3)
    $33_1: function ProcessControl_Views_StagesView$$33_1($p0) {
        var $v_0 = ($p0) ? 'leftScrollButton' : 'rightScrollButton';
        var $v_1 = ($p0) ? 'left' : 'right';
        var $v_2 = ((!this.$D_1 && $p0) || (this.$D_1 && !$p0)) ? '/_imgs/ProcessControl/10_Stage_scroll_arrow_left.png' : '/_imgs/ProcessControl/10_Stage_scroll_arrow_right.png';
        var $v_3 = ProcessControl.Views.StagesView.$4q($v_0, $v_1, '/_imgs/ProcessControl/process_control_global_active_flag.png', $v_2);
        var $v_4 = $P_CRM($v_3);
        var $$t_7 = this;
        $v_4.find('.scrollArrow').click(function($p1_0) {
            $$t_7.$49_1(!$p0);
        });
        $v_4.find('.globalActiveStageFlag').click(this.$$d_$48_1);
        return $v_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (503,3)
    $3y_1: function ProcessControl_Views_StagesView$$3y_1() {
        var $v_0 = this.get_$w_1();
        for (var $v_1 = 0; $v_1 < this.$0_1.$4_0.length; $v_1++) {
            var $v_2 = this.$1R_1($v_1);
            if ($v_2 <= $v_0) {
                return $v_1;
            }
        }
        return 0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (519,3)
    $49_1: function ProcessControl_Views_StagesView$$49_1($p0) {
        var $v_0 = this.$3y_1();
        if (this.$1c_1 || (!$p0 && !$v_0) || ($p0 && $v_0 === this.$0_1.$4_0.length - 1)) {
            return;
        }
        var $v_1 = $v_0 + (($p0) ? 1 : -1);
        var $v_2 = this.$1R_1($v_1);
        if ($v_2 === this.get_$w_1()) {
            return;
        }
        this.get_$U_1().css(this.get_$v_1(), Math.max($v_2, -this.$n_1) + 'px');
        this.$24_1($v_2);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (539,3)
    $24_1: function ProcessControl_Views_StagesView$$24_1($p0) {
        this.$2o_1($p0);
        this.$1G_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (553,3)
    $1G_1: function ProcessControl_Views_StagesView$$1G_1() {
        if (!this.get_$j_1().length) {
            return;
        }
        if (this.$q_1 && this.$5A_1()) {
            this.get_$21_1().css('visibility', 'visible');
            this.get_$2B_1().css('visibility', 'hidden');
            this.get_$j_1().css('visibility', 'hidden');
        }
        else if (this.$q_1 && this.$5B_1()) {
            this.get_$2B_1().css('visibility', 'visible');
            this.get_$21_1().css('visibility', 'hidden');
            this.get_$j_1().css('visibility', 'hidden');
        }
        else {
            this.get_$21_1().css('visibility', 'hidden');
            this.get_$2B_1().css('visibility', 'hidden');
            this.get_$j_1().css('visibility', '');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (586,3)
    $5A_1: function ProcessControl_Views_StagesView$$5A_1() {
        return ((!this.$D_1 && this.get_$j_1().offset().left + this.$1K_1 < this.get_$u_1().offset().left) || (this.$D_1 && this.get_$j_1().offset().left - this.$1K_1 > this.get_$u_1().offset().left));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (596,3)
    $5B_1: function ProcessControl_Views_StagesView$$5B_1() {
        return (!this.$D_1 && this.get_$j_1().offset().left + this.$1K_1 > this.get_$k_1().offset().left) || (this.$D_1 && this.get_$j_1().offset().left - this.$1K_1 < this.get_$k_1().offset().left);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (607,3)
    $1R_1: function ProcessControl_Views_StagesView$$1R_1($p0) {
        var $v_0 = ($p0 > 0) ? this.$3N_1 : 0;
        return -1 * (this.$2K_1 - 5) * $p0 + this.$13_1 - $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (619,3)
    $2o_1: function ProcessControl_Views_StagesView$$2o_1($p0) {
        if ($p0 <= -this.$n_1) {
            this.get_$u_1().removeClass('disabled');
            this.get_$k_1().addClass('disabled');
        }
        else if ($p0 >= this.$13_1) {
            this.get_$u_1().addClass('disabled');
            this.get_$k_1().removeClass('disabled');
        }
        else {
            this.get_$u_1().removeClass('disabled');
            this.get_$k_1().removeClass('disabled');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (641,3)
    $48_1: function ProcessControl_Views_StagesView$$48_1($p0) {
        var $v_0 = $P_CRM('.activeStage', this.$2_1);
        if (!$v_0.length) {
            return;
        }
        this.$1c_1 = true;
        var $v_1 = this.$1R_1(this.$f_1);
        $v_1 = Math.max($v_1, -this.$n_1);
        this.$1s_1 = 1;
        var $$t_3 = this;
        this.$1f_1 = window.setInterval(function() {
            $$t_3.$3w_1($v_1);
        }, 10);
        var $$t_4 = this;
        this.$1t_1 = window.setInterval(function() {
            $$t_4.$1s_1 *= 2;
        }, 300);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (676,3)
    $3w_1: function ProcessControl_Views_StagesView$$3w_1($p0) {
        var $v_0 = $p0 < this.get_$w_1();
        var $v_1 = this.get_$w_1() + (($v_0) ? -1 : 1) * this.$1s_1;
        if (($v_0 && $v_1 < $p0) || (!$v_0 && $v_1 > $p0)) {
            window.clearInterval(this.$1f_1);
            window.clearInterval(this.$1t_1);
            this.get_$U_1().css(this.get_$v_1(), $p0 + 'px');
            this.$24_1($p0);
            this.$1c_1 = false;
            return;
        }
        this.get_$U_1().css(this.get_$v_1(), $v_1 + 'px');
        this.$1G_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (701,3)
    $4r_1: function ProcessControl_Views_StagesView$$4r_1($p0, $p1) {
        var $v_0 = this.$40_1($p0, $p1);
        var $v_1 = !$p0.get_edit();
        var $v_2 = $p0.get_edit() && $p0.get_completed();
        var $v_3 = this.$2s_1($p0);
        var $v_4 = ($p0.get_active()) ? this.$2X_1($p0) : this.$23_1($p0);
        var $v_5 = this.$4s_1($p0.displayIndex, $v_0, $v_3, $v_4);
        this.get_$U_1().append($v_5);
        var $v_6 = $P_CRM('#stage_' + $p0.displayIndex);
        this.$2D_1($v_6, $v_2, $v_1, false);
        this.$3Z_1($p0, $v_6);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (723,3)
    $40_1: function ProcessControl_Views_StagesView$$40_1($p0, $p1) {
        var $v_0 = 'processStageContainer layer' + $p0.displayIndex;
        if ($p0.displayIndex) {
            $v_0 += ' hasPrevious';
        }
        if ($p0.displayIndex !== this.$0_1.$4_0.length - 1) {
            $v_0 += ' hasNext';
        }
        if ($p1) {
            $v_0 += ' selectedStage';
        }
        else {
            $v_0 += ' unselectedStage';
        }
        if ($p0.get_active()) {
            this.$f_1 = $p0.displayIndex;
            $v_0 += ' activeStage';
        }
        if (!$p0.get_edit()) {
            $v_0 += ' disabled';
        }
        else if ($p0.get_completed()) {
            $v_0 += ' completedStage';
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (755,3)
    $3Z_1: function ProcessControl_Views_StagesView$$3Z_1($p0, $p1) {
        var $v_0 = {};
        $v_0['stage'] = $p0;
        $p1.children().data($v_0);
        var $$t_7 = this;
        $p1.bind(Mscrm.EventNames.click, $v_0, function($p1_0) {
            $$t_7.$2e_1($p1_0);
        });
        var $$t_8 = this;
        $p1.bind(Mscrm.EventNames.keyDown, $v_0, function($p1_0) {
            if ($$t_8.$1I_1($p1_0.which)) {
                $$t_8.$2e_1($p1_0);
            }
            if ($$t_8.$4K_1($p1_0.which)) {
                var $v_1 = $p1_0.data;
                if (!('stage' in $v_1)) {
                    return;
                }
                var $v_2 = $v_1['stage'];
                $$t_8.$2_1.trigger(ProcessControl.Views.StagesView.keyDownOnStage, [ $v_2.displayIndex ]);
                $p1_0.preventDefault();
            }
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (786,3)
    actualDispose: function ProcessControl_Views_StagesView$actualDispose() {
        this.$1X_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (791,3)
    $1X_1: function ProcessControl_Views_StagesView$$1X_1() {
        for (var $v_0 = 0; $v_0 < this.$0_1.$4_0.length; $v_0++) {
            var $v_1 = this.$0_1.$4_0[$v_0];
            var $v_2 = $P_CRM('#stage_' + $v_1.displayIndex).children();
            var $v_3 = $v_2.parents('.processStageContainer').first();
            $v_3.unbind();
        }
        this.$3I_1(this.get_$u_1());
        this.$3I_1(this.get_$k_1());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (805,3)
    $3I_1: function ProcessControl_Views_StagesView$$3I_1($p0) {
        $p0.find('.scrollArrow').unbind();
        $p0.find('.globalActiveStageFlag').unbind();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (811,3)
    $1I_1: function ProcessControl_Views_StagesView$$1I_1($p0) {
        return $p0 === 13;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (816,3)
    $4K_1: function ProcessControl_Views_StagesView$$4K_1($p0) {
        return $p0 === 40;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (824,3)
    updateStages: function ProcessControl_Views_StagesView$updateStages() {
        this.$1w_1(this.$0_1.get_localActiveStage());
        this.$3M_1();
        this.$3L_1();
        for (var $$arr_0 = this.$0_1.$4_0, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            var $v_1 = $P_CRM('#stage_' + $v_0.displayIndex);
            var $v_2 = $v_0.get_edit() && $v_0.get_completed();
            var $v_3 = $v_0.get_active();
            var $v_4 = !$v_0.get_edit();
            this.$2D_1($v_1, $v_2, $v_4, false);
            if ($v_3) {
                this.$f_1 = $v_0.displayIndex;
                $v_1.addClass('activeStage');
            }
        }
        this.$1G_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (850,3)
    $3M_1: function ProcessControl_Views_StagesView$$3M_1() {
        for (var $v_0 = 0; $v_0 < this.$0_1.$4_0.length; $v_0++) {
            var $v_1 = $P_CRM('#stage_' + $v_0).children('.processStageTailContainer, .stageLabelMask');
            this.$56_1(this.$0_1.$4_0[$v_0], $v_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (859,3)
    $3K_1: function ProcessControl_Views_StagesView$$3K_1() {
        for (var $v_0 = 0; $v_0 < this.$0_1.$4_0.length; $v_0++) {
            var $v_1 = $P_CRM('#stage_' + $v_0);
            var $v_2 = $v_1.hasClass('completedStage');
            var $v_3 = $v_1.hasClass('disabled');
            var $v_4 = $v_1.hasClass('activeStage');
            this.$2D_1($v_1, $v_2, $v_3, $v_4);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (873,3)
    $3L_1: function ProcessControl_Views_StagesView$$3L_1() {
        for (var $v_0 = 0; $v_0 < this.$0_1.$4_0.length; $v_0++) {
            var $v_1 = $P_CRM('#stage_' + $v_0);
            this.$55_1(this.$0_1.$4_0[$v_0], $v_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (882,3)
    $2X_1: function ProcessControl_Views_StagesView$$2X_1($p0) {
        return this.$23_1($p0) + ' ' + this.$0_1.$9_0.active;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (887,3)
    $23_1: function ProcessControl_Views_StagesView$$23_1($p0) {
        return $p0.stageName;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (892,3)
    $55_1: function ProcessControl_Views_StagesView$$55_1($p0, $p1) {
        var $v_0 = $p1.find('span');
        if ($p0.get_active()) {
            $v_0.text(this.$2X_1($p0));
        }
        else {
            $v_0.text(this.$23_1($p0));
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (901,3)
    $2D_1: function ProcessControl_Views_StagesView$$2D_1($p0, $p1, $p2, $p3) {
        var $v_0 = $p0.find('img.stageIcon');
        var $v_1 = $p0.find('.stageNameContent');
        var $v_2 = '';
        var $v_3 = '';
        if (!$p3) {
            if ($p1) {
                $v_2 = '/_imgs/ProcessControl/12_Stage_complete_icon.png';
                $v_3 = this.$0_1.$9_0.completed;
            }
            else if ($p2) {
                $v_2 = '/_imgs/ProcessControl/12_Stage_Lock_Icon.png';
                $v_3 = this.$0_1.$9_0.locked;
            }
        }
        if (isNullOrEmptyString($v_2)) {
            $v_0.addClass('hidden');
            $v_1.removeClass('hasIcon');
        }
        else {
            ProcessControl.Services.ImageStripService.setStripIcon($v_0, $v_2, $v_3);
            $v_0.addClass('stageIcon');
            $v_0.removeClass('hidden');
            $v_1.addClass('hasIcon');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (939,3)
    $2s_1: function ProcessControl_Views_StagesView$$2s_1($p0) {
        var $v_0 = String.format('{0}: {1}', this.$0_1.$9_0.entity, $p0.entityDisplayName);
        var $v_1 = String.format('{0}: {1}', this.$0_1.$9_0.stage, $p0.stageName);
        var $v_2 = this.$41_1($p0);
        var $v_3;
        if (isNullOrEmptyString($v_2)) {
            $v_3 = String.format('{0}, {1}', $v_0, $v_1);
        }
        else {
            var $v_4 = String.format('{0}: {1}', this.$0_1.$9_0.status, $v_2);
            $v_3 = String.format('{0}, {1}, {2}', $v_0, $v_1, $v_4);
        }
        return $v_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (968,3)
    $56_1: function ProcessControl_Views_StagesView$$56_1($p0, $p1) {
        var $v_0 = this.$2s_1($p0);
        $p1.attr('title', $v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (974,3)
    $41_1: function ProcessControl_Views_StagesView$$41_1($p0) {
        var $v_0;
        if ($p0.get_completed()) {
            $v_0 = this.$0_1.$9_0.completed;
        }
        else if ($p0.get_active()) {
            $v_0 = this.$0_1.$9_0.inProgress;
        }
        else if (!$p0.get_edit()) {
            $v_0 = this.$0_1.$9_0.locked;
        }
        else {
            $v_0 = '';
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (990,3)
    $2e_1: function ProcessControl_Views_StagesView$$2e_1($p0) {
        var $v_0 = $p0.data;
        if (!('stage' in $v_0)) {
            return;
        }
        var $v_1 = $v_0['stage'];
        if ($v_1.get_edit() && this.$4S_1($v_1)) {
            this.$4h_1($v_1);
            return;
        }
        this.$2_1.trigger(ProcessControl.Views.CollapsibleView.expandEvent);
        if ($v_1.displayIndex === this.get_currentSelectedStageIndex()) {
            return;
        }
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartLoadingNewProcessStage);
        Mscrm.MetricsReporting.instance().addMetric('Stage Change', $v_1.stageName);
        this.$1w_1($v_1);
        this.$3K_1();
        $p0.preventDefault();
        setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishLoadingNewProcessStage);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (1017,3)
    $4S_1: function ProcessControl_Views_StagesView$$4S_1($p0) {
        return this.$0_1.needTransit($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (1022,3)
    $4h_1: function ProcessControl_Views_StagesView$$4h_1($p0) {
        var $v_0 = this.$0_1.get_navigationEntitiesDictionary()[$p0.entityLogicalName];
        ProcessControl.ViewModels.ProcessControlViewModel.navigateToEntity($v_0.EntityLogicalName, $v_0.Id);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (1028,3)
    changeStageCompleted: function ProcessControl_Views_StagesView$changeStageCompleted(newActiveStage, advance) {
        this.$3e_1(newActiveStage, advance);
        this.$1w_1(newActiveStage);
        this.$3M_1();
        this.$3K_1();
        this.$3L_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (1037,3)
    $3e_1: function ProcessControl_Views_StagesView$$3e_1($p0, $p1) {
        if ($p0.displayIndex === this.$f_1) {
            return;
        }
        Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
        var $v_0 = $P_CRM('#stage_' + this.$f_1);
        $v_0.removeClass('activeStage');
        if ($p1) {
            $v_0.addClass('completedStage');
        }
        var $v_1 = $p0.displayIndex;
        this.$f_1 = $v_1;
        var $v_2 = $P_CRM('#stage_' + $v_1);
        $v_2.removeClass('completedStage');
        $v_2.addClass('activeStage');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (1057,3)
    $1w_1: function ProcessControl_Views_StagesView$$1w_1($p0) {
        if ($p0 === this.$0_1.get_selectedStage()) {
            return;
        }
        Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().completeDeferredInitialization();
        var $v_0 = this.get_$1U_1();
        $v_0.removeClass('selectedStage');
        $v_0.addClass('unselectedStage');
        var $v_1;
        var $v_2;
        var $$t_5, $$t_6;
        this.$0_1.switchToOrFromCloseLoopEntity($p0, ($$t_5 = {'val': $v_1}), ($$t_6 = {'val': $v_2})), $v_1 = $$t_5.val, $v_2 = $$t_6.val;
        this.$0_1.set_selectedStage($p0);
        var $v_3 = this.get_$1U_1();
        $v_3.removeClass('unselectedStage');
        $v_3.addClass('selectedStage');
        this.$2_1.trigger(ProcessControl.Views.StagesView.stageChange, [ $v_1, $v_2 ]);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StagesView.js.cs (1081,3)
    focusOnStage: function ProcessControl_Views_StagesView$focusOnStage(stageIndex) {
        var $v_0 = $P_CRM('#stage_' + stageIndex);
        var $v_1 = $v_0.find('[tabindex]');
        if ($v_1.length <= 0) {
            return;
        }
        $v_1[0].focus();
    }
}


ProcessControl.Views.StepsView = function ProcessControl_Views_StepsView(viewModel) {
    this.$$d_$2z_1 = Function.createDelegate(this, this.$2z_1);
    this.$$d_$4Y_1 = Function.createDelegate(this, this.$4Y_1);
    this.$$d_$3f_1 = Function.createDelegate(this, this.$3f_1);
    ProcessControl.Views.StepsView.initializeBase(this, [ viewModel ]);
    this.$2_1 = $P_CRM('#processStepsContainer');
    this.$0_1 = viewModel;
    this.$N_1 = Mscrm.CrmBrowser.get_currentBrowser();
    this.$y_1 = false;
    this.$3a_1();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (121,3)
ProcessControl.Views.StepsView.$5K = function ProcessControl_Views_StepsView$$5K($p0) {
    var $v_0 = $p0.find('[tabindex]');
    $v_0.children().unbind('keyup');
    $p0.unbind('keyup');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (538,3)
ProcessControl.Views.StepsView.$2t = function ProcessControl_Views_StepsView$$2t($p0) {
    return $p0.find('.processStepValue > div:first-child').filter('[data-attributename]');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (610,3)
ProcessControl.Views.StepsView.$42 = function ProcessControl_Views_StepsView$$42($p0) {
    return $p0.find('[isDataUnboundControl]');
}
ProcessControl.Views.StepsView.prototype = {
    $Q_1: null,
    $y_1: false,
    $0_1: null,
    $N_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (43,4)
    get_$2f_1: function ProcessControl_Views_StepsView$get_$2f_1() {
        if (this.$N_1.get_isIE7()) {
            return 385;
        }
        if (window.UseTabletExperience) {
            return 340;
        }
        return 330;
    },
    
    $2_1: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (70,4)
    get_viewContainer: function ProcessControl_Views_StepsView$get_viewContainer() {
        return this.$2_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (89,3)
    actualDispose: function ProcessControl_Views_StepsView$actualDispose() {
        this.$1J_1();
        this.$5N_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (95,3)
    $5N_1: function ProcessControl_Views_StepsView$$5N_1() {
        for (var $v_0 = 0; $v_0 < this.$0_1.$4_0.length; $v_0++) {
            var $v_1 = this.$0_1.$4_0[$v_0];
            var $v_2 = this.$t_1($v_1.displayIndex);
            var $v_3 = $v_2.find('.processStepValue');
            $v_3.unbind();
            ProcessControl.Views.StepsView.$5K($v_2);
            this.$5O_1($v_2);
            this.$5L_1($v_2);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (110,3)
    $5L_1: function ProcessControl_Views_StepsView$$5L_1($p0) {
        var $v_0 = $p0.find('[isDataUnboundControl]');
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $P_CRM($v_2);
            $v_3.unbind('attribute-changed', this.$$d_$3f_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (128,3)
    $5O_1: function ProcessControl_Views_StepsView$$5O_1($p0) {
        var $v_0 = ProcessControl.Views.StepsView.$2t($p0);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $P_CRM($v_2);
            $v_3.unbind('attribute-changed', this.$$d_$4Y_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (139,3)
    $1J_1: function ProcessControl_Views_StepsView$$1J_1() {
        this.$0_1.remove_stageGatesVisibilityChanged(this.$$d_$2z_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (145,3)
    $3a_1: function ProcessControl_Views_StepsView$$3a_1() {
        this.$0_1.add_stageGatesVisibilityChanged(this.$$d_$2z_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (150,3)
    $2z_1: function ProcessControl_Views_StepsView$$2z_1($p0, $p1) {
        if (this.$0_1.get_stageGatesVisible()) {
            this.$Q_1.removeClass('stageGatesHidden');
        }
        else {
            this.$Q_1.addClass('stageGatesHidden');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (162,3)
    render: function ProcessControl_Views_StepsView$render() {
        for (var $v_0 = 0; $v_0 < this.$0_1.$4_0.length; $v_0++) {
            var $v_1 = this.$0_1.$4_0[$v_0];
            var $v_2 = this.$t_1($v_1.displayIndex);
            if (!$v_2.hasClass('hidden')) {
                $v_2.addClass('hidden');
            }
            var $v_3 = $v_2.find('[data-attributename]');
            for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                var $v_5 = $v_3[$v_4];
                var $v_6 = $v_5.getAttribute('data-attributename');
                if (this.$4J_1($v_6)) {
                    var $v_7 = $P_CRM($v_5);
                    var $v_8 = Mscrm.InlineEditUtilities.getLinkedDataObject($v_7);
                    if (this.$0_1.$C_0) {
                        $v_7.attr('data-disabled', '1');
                    }
                    else if (($v_7.attr('data-disabled') === '1') && (!Mscrm.InlineEditUtilities.isControlDisabled($v_7.attr('id'), $v_8))) {
                        $v_7.attr('data-disabled', '');
                        $v_7.trigger(ProcessControl.Views.StepsView.unlockControl);
                    }
                }
            }
            if ($v_1.displayIndex !== this.$0_1.get_selectedStage().displayIndex) {
                continue;
            }
            this.$34_1($v_1, $v_2);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (205,3)
    $34_1: function ProcessControl_Views_StepsView$$34_1($p0, $p1) {
        var $v_0 = '';
        if ($p0.displayIndex === this.$0_1.get_selectedStage().displayIndex) {
            $p1.removeClass('hidden');
            this.$Q_1 = $p1;
            this.$3B_1($p0);
        }
        if ($p0.get_completed()) {
            $v_0 += ' completedStage';
        }
        if (!$p0.get_edit() && !this.$0_1.$J_0) {
            $v_0 += ' disabled';
            var $v_2 = $p1.find('.processStepValue');
            var $v_3 = $v_2.children();
            $v_3.attr('data-disabled', '1');
        }
        var $v_1 = $p1.find('.processStepValue');
        var $$t_C = this;
        $v_1.unbind('stepControlWiden').bind('stepControlWiden', function($p1_0) {
            if (arguments.length < 2) {
                return;
            }
            var $v_4 = arguments[1];
            var $v_5 = $$t_C.$2_1.width();
            $$t_C.$2_1.width($v_5 + $v_4);
            var $v_6 = $P_CRM($p1_0.target);
            $$t_C.$58_1($v_6);
        });
        var $$t_D = this;
        $v_1.unbind('stepControlNarrow').bind('stepControlNarrow', function($p1_0) {
            var $v_7 = $$t_D.$Q_1.find('[id^=processStepColumn_]');
            $$t_D.$2_1.width($v_7.length * $$t_D.get_$2f_1() + $v_7.length);
            $$t_D.$2_1.trigger(ProcessControl.Views.StepsView.narrowSteps);
        });
        $p1.addClass($v_0);
        this.$4n_1($p1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (255,3)
    $4J_1: function ProcessControl_Views_StepsView$$4J_1($p0) {
        return ProcessControl.Constants.CriticalAttributes.isCriticalAttribute($p0) && this.$0_1.$B_0.TypeName === 'lead';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (261,3)
    $4n_1: function ProcessControl_Views_StepsView$$4n_1($p0) {
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
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (281,3)
    $58_1: function ProcessControl_Views_StepsView$$58_1($p0) {
        var $v_0 = $p0.offset();
        var $v_1 = $v_0.left + $p0.width();
        this.$2_1.trigger(ProcessControl.Views.StepsView.widenSteps, [ $v_1 ]);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (289,3)
    postRender: function ProcessControl_Views_StepsView$postRender() {
        var $v_0 = this.$0_1.get_selectedStage().displayIndex;
        for (var $v_1 = 0; $v_1 < this.$0_1.$4_0.length; $v_1++) {
            var $v_2 = this.$0_1.$4_0[$v_1];
            if ($v_2.displayIndex !== $v_0) {
                continue;
            }
            var $v_3 = this.$t_1($v_2.displayIndex);
            this.$2Z_1($v_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (307,3)
    updateControlLocks: function ProcessControl_Views_StepsView$updateControlLocks() {
        for (var $$arr_0 = this.$0_1.$4_0, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            if ($v_0.get_edit() && !this.$0_1.$J_0) {
                var $v_1 = this.getStageSteps($v_0.displayIndex);
                $v_1.children(':first-child').removeAttr('data-disabled').trigger('unlock');
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (320,3)
    completeInitialization: function ProcessControl_Views_StepsView$completeInitialization() {
        var $v_0 = this.$0_1.get_selectedStage().displayIndex;
        for (var $v_1 = 0; $v_1 < this.$0_1.$4_0.length; $v_1++) {
            var $v_2 = this.$0_1.$4_0[$v_1];
            var $v_3 = this.$t_1($v_2.displayIndex);
            if ($v_2.displayIndex !== $v_0) {
                this.$34_1($v_2, $v_3);
                this.$2Z_1($v_3);
            }
            else {
                this.$1v_1(this.$Q_1);
            }
            this.$3g_1($v_3);
            this.$3Q_1($v_2, $v_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (348,3)
    focusOnSteps: function ProcessControl_Views_StepsView$focusOnSteps(stageIndex) {
        var $v_0 = this.$t_1(stageIndex);
        var $v_1 = $v_0.find('[tabindex]');
        if ($v_1.length <= 0) {
            return;
        }
        $v_1[0].focus();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (359,3)
    changeCurrentSteps: function ProcessControl_Views_StepsView$changeCurrentSteps() {
        this.$Q_1.addClass('hidden');
        this.$Q_1 = this.$t_1(this.$0_1.get_selectedStage().displayIndex);
        this.$Q_1.removeClass('hidden');
        this.$5J_1(this.$0_1.get_selectedStage());
        this.$3B_1(this.$0_1.get_selectedStage());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (371,3)
    $5J_1: function ProcessControl_Views_StepsView$$5J_1($p0) {
        if (!$p0.controlsAreInitialized) {
            $p0.controlsAreInitialized = true;
            var $v_0 = this.$Q_1.find('div[' + Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName + '][' + Mscrm.InlineEditConstants.HtmlAttributeForFormDataEntityId + '=PrimaryEntity]');
            var $v_1 = this.$3s_1($v_0);
            var $v_2 = Mscrm.ErrorDisplayContainerProviderFactory.createFormErrorDisplayContainerProvider();
            var $v_3 = Mscrm.InlineEditControlInitializersFactory.createDomElementInitializer($v_2, this.$0_1.$1d_0, $v_1.get(), false);
            this.$2i_1(this.$Q_1, $v_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (391,3)
    $2i_1: function ProcessControl_Views_StepsView$$2i_1($p0, $p1) {
        var $v_0 = $p1.initializeControlInChunks();
        if ($v_0 === Mscrm.InitializationState.executing) {
            var $$t_3 = this;
            window.setTimeout(function() {
                $$t_3.$2i_1($p0, $p1);
            }, 100);
            return;
        }
        this.$1v_1($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (403,3)
    $1v_1: function ProcessControl_Views_StepsView$$1v_1($p0) {
        var $v_0 = $p0.find('div.processRequiredStep div[data-initialized]');
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1].id;
            var $v_3 = Xrm.Page.getControl($v_2);
            if (!IsNull($v_3)) {
                $v_3.get_layout().setRequiredOrRecommendedLevel(Xrm.RequiredLevel.required);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (427,3)
    $3s_1: function ProcessControl_Views_StepsView$$3s_1($p0) {
        var $v_0 = {};
        var $$t_7 = this;
        this.$Q_1.find('.ms-crm-LinkControl-content div[' + Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName + ']').each(function($p1_0, $p1_1) {
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
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (453,3)
    $2w_1: function ProcessControl_Views_StepsView$$2w_1($p0) {
        return $p0 === 38;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (458,3)
    $3Q_1: function ProcessControl_Views_StepsView$$3Q_1($p0, $p1) {
        if (this.$y_1) {
            return;
        }
        var $v_0 = {};
        $v_0['stage'] = $p0;
        $p1.data($v_0);
        var $v_1 = $p1.find('[tabindex]');
        var $$t_8 = this;
        $v_1.children().bind('keyup', function($p1_0) {
            if ($$t_8.$2w_1($p1_0.which)) {
                $p1_0.stopPropagation();
            }
        });
        var $$t_9 = this;
        $p1.bind('keyup', $v_0, function($p1_0) {
            if ($$t_9.$2w_1($p1_0.which)) {
                var $v_2 = $p1_0.data;
                if (!('stage' in $v_2)) {
                    return;
                }
                var $v_3 = $v_2['stage'];
                $$t_9.$2_1.trigger(ProcessControl.Views.StepsView.keyUpOnSteps, [ $v_3.displayIndex ]);
                $p1_0.preventDefault();
            }
        });
        this.$y_1 = true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (496,3)
    onShow: function ProcessControl_Views_StepsView$onShow() {
        this.$1v_1(this.$Q_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (501,3)
    $3B_1: function ProcessControl_Views_StepsView$$3B_1($p0) {
        var $v_0 = Math.ceil($p0.stepCount / 3);
        this.$2_1.width($v_0 * this.get_$2f_1() + $v_0);
        this.$2_1.trigger(ProcessControl.Views.StepsView.resizeSteps);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (509,3)
    $t_1: function ProcessControl_Views_StepsView$$t_1($p0) {
        var $v_0 = String.format('#processSteps_{0}', $p0);
        var $v_1 = $P_CRM($v_0);
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (517,3)
    $2Z_1: function ProcessControl_Views_StepsView$$2Z_1($p0) {
        var $v_0 = ProcessControl.Views.StepsView.$2t($p0);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $v_2.getAttribute('data-attributename');
            var $v_4 = this.$0_1.isInitialAttributeEmpty($v_3);
            var $v_5 = $P_CRM($v_2);
            var $v_6 = $v_5.parents('.processStep');
            this.$3G_1($v_6, $v_4, false);
            $v_5.unbind('attribute-changed', this.$$d_$4Y_1).bind('attribute-changed', this.$$d_$4Y_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (543,3)
    $4Y_1: function ProcessControl_Views_StepsView$$4Y_1($p0) {
        if (arguments.length < 2) {
            return;
        }
        var $v_0 = arguments[1];
        var $v_1 = isNullOrEmptyString($v_0);
        var $v_2 = $P_CRM($p0.target);
        var $v_3 = $v_2.parents('.processStep');
        this.$3G_1($v_3, $v_1, true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (558,3)
    $3G_1: function ProcessControl_Views_StepsView$$3G_1($p0, $p1, $p2) {
        var $v_0 = $p0.parents('.processStepsContent');
        if ($v_0.length > 0) {
            var $v_1 = Number.parseInvariant($v_0[0].id.substr(13));
            var $v_2 = Number.parseInvariant($p0.attr('data-stepIndex'));
            this.$0_1.$4_0[$v_1].completedSteps[$v_2] = !$p1;
            if ($p2 && this.$0_1.checkRequiredCompleted()) {
                this.$0_1.set_stageGatesVisible(false);
            }
        }
        if ($p1) {
            $p0.addClass('emptyValue');
        }
        else {
            $p0.removeClass('emptyValue');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (582,3)
    $3g_1: function ProcessControl_Views_StepsView$$3g_1($p0) {
        var $v_0 = ProcessControl.Views.StepsView.$42($p0);
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
                this.$2Y_1($v_5, $v_4);
                $v_5.unbind('attribute-changed', this.$$d_$3f_1).bind('attribute-changed', this.$$d_$3f_1);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (615,3)
    $3f_1: function ProcessControl_Views_StepsView$$3f_1($p0) {
        if (IsNull($p0.target)) {
            return;
        }
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0.target.id);
        if (IsNull($v_0)) {
            return;
        }
        this.$2Y_1($P_CRM($p0.target), $v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (629,3)
    $2Y_1: function ProcessControl_Views_StepsView$$2Y_1($p0, $p1) {
        var $v_0 = $p1.get_isAssociatedStepCompleted();
        var $v_1 = $p0.parents('.processStep');
        if (!$v_0) {
            $v_1.addClass('emptyValue');
        }
        else {
            $v_1.removeClass('emptyValue');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\StepsView.js.cs (646,3)
    getStageSteps: function ProcessControl_Views_StepsView$getStageSteps(stageIndex) {
        var $v_0 = this.$t_1(stageIndex);
        return $v_0.find('.processStepValue');
    }
}


ProcessControl.Views.WarningBarView = function ProcessControl_Views_WarningBarView($p0, $p1) {
    this.$$d_$4d_1 = Function.createDelegate(this, this.$4d_1);
    this.$$d_$2z_1 = Function.createDelegate(this, this.$2z_1);
    ProcessControl.Views.WarningBarView.initializeBase(this, [ $p1 ]);
    this.$0_1 = $p1;
    this.$2_1 = $p0.children('.processWarningBar');
    this.$1a_1 = this.$2_1.find('.processWarningBar-Close');
    this.$2O_1 = this.$2_1.find('.processWarningBar-Text');
    this.$1u_1 = this.$2_1.find('.processBarWarningIcon');
    this.$1M_1 = this.$2_1.find('.processBarErrorIcon');
    this.$1M_1.hide();
    this.$1F_1();
    if (!IsNull($p1) && !isNullOrEmptyString($p1.get_initialWarning())) {
        this.show($p1.get_initialWarning(), 0, false);
    }
}
ProcessControl.Views.WarningBarView.prototype = {
    $0_1: null,
    $2_1: null,
    $1a_1: null,
    $2O_1: null,
    $1u_1: null,
    $1M_1: null,
    $1B_1: 0,
    $2V_1: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (52,4)
    get_viewContainer: function ProcessControl_Views_WarningBarView$get_viewContainer() {
        return this.$2_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (69,3)
    show: function ProcessControl_Views_WarningBarView$show($p0, $p1, $p2) {
        if ($p1 < 0) {
            throw Error.argumentOutOfRange('duration', $p1);
        }
        this.$5E_1($p2);
        this.$1B_1++;
        this.$2O_1.text($p0).attr('title', $p0);
        this.$2_1.show();
        if ($p1 > 0) {
            this.$4x_1(this.$1B_1, $p1);
        }
        return this.$1B_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (88,3)
    actualDispose: function ProcessControl_Views_WarningBarView$actualDispose() {
        this.$1X_1();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (93,3)
    $5E_1: function ProcessControl_Views_WarningBarView$$5E_1($p0) {
        if ($p0) {
            this.$1M_1.show();
            this.$1u_1.hide();
        }
        else {
            this.$1M_1.hide();
            this.$1u_1.show();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (107,3)
    $4x_1: function ProcessControl_Views_WarningBarView$$4x_1($p0, $p1) {
        var $$t_2 = this;
        window.setTimeout(function() {
            if ($p0 !== $$t_2.$1B_1) {
                return;
            }
            $$t_2.$2_1.hide();
        }, $p1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (119,3)
    $1F_1: function ProcessControl_Views_WarningBarView$$1F_1() {
        var $$t_1 = this;
        this.$1a_1.bind('click', function($p1_0) {
            $$t_1.$2_1.hide();
        });
        if (!IsNull(this.$0_1)) {
            this.$0_1.add_stageGatesVisibilityChanged(this.$$d_$2z_1);
            this.$0_1.add_notification(this.$$d_$4d_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (134,3)
    $1X_1: function ProcessControl_Views_WarningBarView$$1X_1() {
        this.$1a_1.unbind();
        if (!IsNull(this.$0_1)) {
            this.$0_1.remove_stageGatesVisibilityChanged(this.$$d_$2z_1);
            this.$0_1.remove_notification(this.$$d_$4d_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (145,3)
    $4d_1: function ProcessControl_Views_WarningBarView$$4d_1($p0, $p1) {
        this.show($p1.message, ProcessControl.Views.WarningBarView.$2y, $p1.isError);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\processcontrol\Views\WarningBarView.js.cs (150,3)
    $2z_1: function ProcessControl_Views_WarningBarView$$2z_1($p0, $p1) {
        if (this.$0_1.get_stageGatesVisible()) {
            this.$2V_1 = this.show(this.$0_1.$9_0.fillRequiredWarning, 10000, false);
        }
        else {
            if (this.$2V_1 === this.$1B_1) {
                this.$2_1.hide();
            }
        }
    }
}


ProcessControl.Constants.CriticalAttributes.registerClass('ProcessControl.Constants.CriticalAttributes');
ProcessControl.Constants.CssClasses.registerClass('ProcessControl.Constants.CssClasses');
ProcessControl.Constants.CssProperties.registerClass('ProcessControl.Constants.CssProperties');
ProcessControl.Constants.EntityLogicalNames.registerClass('ProcessControl.Constants.EntityLogicalNames');
ProcessControl.Constants.EventNames.registerClass('ProcessControl.Constants.EventNames');
ProcessControl.Constants.HtmlAttributes.registerClass('ProcessControl.Constants.HtmlAttributes');
ProcessControl.Constants.HtmlTags.registerClass('ProcessControl.Constants.HtmlTags');
ProcessControl.Constants.Platforms.registerClass('ProcessControl.Constants.Platforms');
ProcessControl.Events.NotificationEventArgs.registerClass('ProcessControl.Events.NotificationEventArgs', Sys.EventArgs);
ProcessControl.Events.TaskCompletionEventArgs.registerClass('ProcessControl.Events.TaskCompletionEventArgs', Sys.EventArgs);
Mscrm.ProcessControlShared.ObjectModels.AttributeValue.registerClass('Mscrm.ProcessControlShared.ObjectModels.AttributeValue');
Mscrm.ProcessControlShared.ObjectModels.ControlStages.registerClass('Mscrm.ProcessControlShared.ObjectModels.ControlStages');
Mscrm.ProcessControlShared.ObjectModels.EntityLink.registerClass('Mscrm.ProcessControlShared.ObjectModels.EntityLink');
Mscrm.ProcessControlShared.ObjectModels.EntityStage.registerClass('Mscrm.ProcessControlShared.ObjectModels.EntityStage');
Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData.registerClass('Mscrm.ProcessControlShared.ObjectModels.GlobalNavigationData');
Mscrm.ProcessControlShared.ObjectModels.NavigationEntity.registerClass('Mscrm.ProcessControlShared.ObjectModels.NavigationEntity');
Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData.registerClass('Mscrm.ProcessControlShared.ObjectModels.NavigationEntitiesData');
Mscrm.ProcessControlShared.ObjectModels.ProcessControlData.registerClass('Mscrm.ProcessControlShared.ObjectModels.ProcessControlData');
Mscrm.ProcessControlShared.ObjectModels.Stage.registerClass('Mscrm.ProcessControlShared.ObjectModels.Stage');
Mscrm.ProcessControlShared.ObjectModels.StageCondition.registerClass('Mscrm.ProcessControlShared.ObjectModels.StageCondition');
Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings.registerClass('Mscrm.ProcessControlShared.ObjectModels.LocalizedStrings');
ProcessControl.Services.ActionItem.registerClass('ProcessControl.Services.ActionItem');
ProcessControl.Services.ActionQueue.registerClass('ProcessControl.Services.ActionQueue');
ProcessControl.Services.SaveStageService.registerClass('ProcessControl.Services.SaveStageService', null, ProcessControl.Services.ISaveStageService);
ProcessControl.Services.EmptySaveService.registerClass('ProcessControl.Services.EmptySaveService', ProcessControl.Services.SaveStageService);
ProcessControl.Services.PlatformService.registerClass('ProcessControl.Services.PlatformService');
ProcessControl.Services.SaveActionArgument.registerClass('ProcessControl.Services.SaveActionArgument');
ProcessControl.Services.StageActionService.registerClass('ProcessControl.Services.StageActionService', null, ProcessControl.Services.IStageActionSerive, Sys.IDisposable);
ProcessControl.Services.ControlDataService.registerClass('ProcessControl.Services.ControlDataService');
ProcessControl.Services.AttributeNames.registerClass('ProcessControl.Services.AttributeNames');
ProcessControl.Services.ControlDataServiceBuilder.registerClass('ProcessControl.Services.ControlDataServiceBuilder');
ProcessControl.Services.DebugService.registerClass('ProcessControl.Services.DebugService');
ProcessControl.Services.ImageStripService.registerClass('ProcessControl.Services.ImageStripService');
ProcessControl.Services.ProcessControlInitializer.registerClass('ProcessControl.Services.ProcessControlInitializer', null, Sys.IDisposable);
ProcessControl.Services.RefreshFormActionService.registerClass('ProcessControl.Services.RefreshFormActionService', ProcessControl.Services.StageActionService);
ProcessControl.Services.RefreshFormSaveService.registerClass('ProcessControl.Services.RefreshFormSaveService', ProcessControl.Services.SaveStageService);
ProcessControl.Services.SaveServiceFactory.registerClass('ProcessControl.Services.SaveServiceFactory');
ProcessControl.Services.StageActonFactory.registerClass('ProcessControl.Services.StageActonFactory');
ProcessControl.ViewModels.ProcessControlViewModel.registerClass('ProcessControl.ViewModels.ProcessControlViewModel', null, Sys.IDisposable);
ProcessControl.Views.BaseView.registerClass('ProcessControl.Views.BaseView', null, Sys.IDisposable);
ProcessControl.Views.ActionsView.registerClass('ProcessControl.Views.ActionsView', ProcessControl.Views.BaseView);
ProcessControl.Views.CollapsibleView.registerClass('ProcessControl.Views.CollapsibleView', ProcessControl.Views.BaseView);
ProcessControl.Views.ProcessControlView.registerClass('ProcessControl.Views.ProcessControlView', ProcessControl.Views.BaseView);
ProcessControl.Views.StagesView.registerClass('ProcessControl.Views.StagesView', ProcessControl.Views.BaseView);
ProcessControl.Views.StepsView.registerClass('ProcessControl.Views.StepsView', ProcessControl.Views.BaseView);
ProcessControl.Views.WarningBarView.registerClass('ProcessControl.Views.WarningBarView', ProcessControl.Views.BaseView);
ProcessControl.Constants.CriticalAttributes.$30 = 'parentaccountid';
ProcessControl.Constants.CriticalAttributes.$31 = 'parentcontactid';
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
ProcessControl.Constants.EntityLogicalNames.incident = 'incident';
ProcessControl.Constants.EntityLogicalNames.lead = 'lead';
ProcessControl.Constants.EntityLogicalNames.opportunity = 'opportunity';
ProcessControl.Constants.EventNames.beforeUnload = 'beforeunload';
ProcessControl.Constants.EventNames.keyDownEvent = 'keydown';
ProcessControl.Constants.EventNames.keyUpEvent = 'keyup';
ProcessControl.Constants.EventNames.clickEvent = 'click';
ProcessControl.Constants.EventNames.resizeEvent = 'resize';
ProcessControl.Constants.EventNames.mouseEvents = 'MouseEvents';
ProcessControl.Constants.EventNames.attributeChanged = 'attribute-changed';
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
ProcessControl.Services.PlatformService.$W = 0;
ProcessControl.Services.ControlDataService.stageEntityTypeCode = 4724;
ProcessControl.Services.ControlDataService.stageEntityName = 'processstage';
ProcessControl.Services.ControlDataService.invalidStageIndex = -1;
ProcessControl.Services.AttributeNames.processId = 'processid';
ProcessControl.Services.AttributeNames.stageId = 'stageid';
ProcessControl.Views.ActionsView.actionCompleted = 'actionCompleted.processActions';
ProcessControl.Views.CollapsibleView.widthOfOtherElementsOnRow = 61;
ProcessControl.Views.CollapsibleView.collapsed = 'collapsed.processCollapsible';
ProcessControl.Views.CollapsibleView.expanded = 'expanded.processCollapsible';
ProcessControl.Views.CollapsibleView.expandEvent = 'expand.processCollapsible';
ProcessControl.Views.StagesView.stageDataKey = 'stage';
ProcessControl.Views.StagesView.keyDownOnStage = 'keydown.processStages';
ProcessControl.Views.StagesView.stageChange = 'stageChange.processStages';
ProcessControl.Views.StepsView.stageDataKey = 'stage';
ProcessControl.Views.StepsView.keyUpOnSteps = 'keyup.processSteps';
ProcessControl.Views.StepsView.resizeSteps = 'resize.processSteps';
ProcessControl.Views.StepsView.widenSteps = 'widen.processSteps';
ProcessControl.Views.StepsView.narrowSteps = 'narrow.processSteps';
ProcessControl.Views.StepsView.unlockControl = 'unlock';
ProcessControl.Views.WarningBarView.$2y = 0;
ProcessControl.Views.WarningBarView.infiniteDuration = 0;
