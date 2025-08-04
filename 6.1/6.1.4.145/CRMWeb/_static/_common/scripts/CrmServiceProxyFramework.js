Type.registerNamespace('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework');

Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.IList = function() {}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.IList.$$ = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_IList$$$(T) {
    var $$cn = 'IList' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework[$$cn] = function() {
        };
        $$ccr.registerInterface('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.' + $$cn);
    }
    return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework[$$cn];
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.IList.registerInterface('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.IList');


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.TraceComponent = function() {}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.TraceComponent.prototype = {
    undefined: -1, 
    actionQueue: 0, 
    actions: 1, 
    addTrustedSenderResponseProcessor: 2, 
    animations: 3, 
    app: 4, 
    appCache: 5, 
    applyConversationAction: 6, 
    applyConversationActionResponseProcessor: 7, 
    attachmentsCleanupManager: 8, 
    attachmentViewModel: 9, 
    autodiscover: 10, 
    baseJsonResponseAction: 11, 
    binding: 12, 
    calendar: 13, 
    calendarActionsErrorHandling: 14, 
    calendarItems: 15, 
    calendarServiceCommandHelper: 16, 
    calendarShareMessageViewModel: 17, 
    calendarSharingInfoProviderViewModel: 18, 
    chat: 19, 
    chromeWebApp: 20, 
    clearConversationNextPredictedActionResponseProcessor: 21, 
    clearNextPredictedActionResponseProcessor: 22, 
    clientStore: 23, 
    conductor: 24, 
    connectionManager: 25, 
    controls: 26, 
    conversationItems: 27, 
    conversationListVM: 28, 
    conversations: 29, 
    core: 30, 
    createAttachmentAction: 31, 
    createAttachmentResponseProcessor: 32, 
    createAttachmentServiceCommand: 33, 
    createItemResponseProcessor: 34, 
    createItemServiceCommand: 35, 
    createPersonaResponseProcessor: 36, 
    deleteAttachmentResponseProcessor: 37, 
    deleteAttachmentServiceCommand: 38, 
    deleteFolderResponseProcessor: 39, 
    deleteItemResponseProcessor: 40, 
    deleteItemServiceCommand: 41, 
    deletePersonaResponseProcessor: 42, 
    discovery: 43, 
    droppableControl: 44, 
    emptyFolderResponseProcessor: 45, 
    errorHandler: 46, 
    extensibility: 47, 
    findConversationServiceCommand: 48, 
    findFolderServiceCommand: 49, 
    folders: 50, 
    framework: 51, 
    getCalendarFoldersServiceCommand: 52, 
    getConversationItemsServiceCommand: 53, 
    getFavoriteFolders: 54, 
    getFolderServiceCommand: 55, 
    getItemServiceCommand: 56, 
    grouping: 57, 
    hiddenAttachmentUpload: 58, 
    identityCorrelationTable: 59, 
    indexedDb: 60, 
    instrumentation: 61, 
    itemSynchronizer: 62, 
    listView: 63, 
    logDatapointResponseProcessor: 64, 
    mailBaseLVM: 65, 
    mailboxDataContext: 66, 
    mailCompose: 67, 
    mailComposeUpgrade: 68, 
    mailFolderItems: 69, 
    markAsJunkResponseProcessor: 70, 
    media: 71, 
    multiSelectListView: 72, 
    notifications: 73, 
    offlineMailboxDataContext: 74, 
    offlineManager: 75, 
    offlineNotifications: 76, 
    onlineProxy: 77, 
    openPALAttachment: 78, 
    owaResponseProcessors: 79, 
    pageListVM: 80, 
    PAL: 81, 
    palAttachmentDownloadManager: 82, 
    palAttachmentRenderer: 83, 
    performance: 84, 
    performReminderActionResponseProcessor: 85, 
    personaItems: 86, 
    placeItems: 87, 
    popOut: 88, 
    popOutMailboxDataContext: 89, 
    pushNotification: 90, 
    readingPane: 91, 
    reminders: 92, 
    requestQueueProcessor: 93, 
    responseProcessors: 94, 
    responseQueueProcessor: 95, 
    scheduling: 96, 
    securityPolicy: 97, 
    serviceCommand_CreatePersona: 98, 
    serviceCommand_FindItem: 99, 
    serviceCommand_GetOwaUserConfiguration: 100, 
    serviceCommand_GetReminders: 101, 
    serviceCommand_PerformReminderAction: 102, 
    serviceCommand_UpdateViewStateConfiguration: 103, 
    serviceCommands: 104, 
    shell: 105, 
    simpleVLV: 106, 
    singleDoc: 107, 
    speech: 108, 
    sql: 109, 
    sqlBatch: 110, 
    sqlDbTransactionAdapter: 111, 
    stackPanel: 112, 
    storage_CalendarItem: 113, 
    storage_Item: 114, 
    syncChangeUpdater: 115, 
    syncFolderSettingProcessor: 116, 
    syncManager: 117, 
    taskItems: 118, 
    taskRunner: 119, 
    timeZoneConverter: 120, 
    unitTest: 121, 
    updateCalendarItemServiceCommand: 122, 
    updateFolderResponseProcessor: 123, 
    updateItemResponseProcessor: 124, 
    updateItemServiceCommand: 125, 
    updatePersonaResponseProcessor: 126, 
    updateUserConfigurationResponseProcessor: 127, 
    views: 128, 
    viewStateConfiguration: 129, 
    virtualScrollbar: 130, 
    virtualScrollRegion: 131, 
    VLV: 132, 
    watson: 133, 
    webpart: 134, 
    webServices: 135, 
    mailModule: 136, 
    peopleModule: 137, 
    tasksModule: 138, 
    applicationBar: 139, 
    diagnosticsModule: 140, 
    location: 141, 
    mailTips: 142, 
    retentionPolicy: 143, 
    search: 144, 
    explicitLogon: 145, 
    optionsModule: 146, 
    findRecipient: 147, 
    linkPersona: 148, 
    personaCard: 149, 
    meCard: 150, 
    recipientWell: 151, 
    peoplePicker: 152, 
    playOnPhone: 153, 
    datePicker: 154, 
    timePicker: 155, 
    infoBar: 156, 
    dateTimePicker: 157, 
    managePassword: 158, 
    authentication: 159, 
    scriptErrorHandlerDialog: 160, 
    rootViewModel: 161, 
    section: 1001, 
    workspace: 1002, 
    list: 1003, 
    application: 1004, 
    storage: 1005, 
    xmlNodeFactory: 1006, 
    dataSource: 1007, 
    localDataSource: 1008, 
    crmServerDataSource: 1009, 
    viewModelFactory: 1010, 
    listComponentViewModel: 1011, 
    openRecordCommand: 1012, 
    quickCreateForm: 1013, 
    pinnedTiles: 1014, 
    userPersonalization: 1015, 
    clientApi: 1016, 
    crmTileViewModel: 1017, 
    gridViewModel: 1018, 
    messageDialog: 1019, 
    userInput: 1020, 
    recordCollectionModel: 1021, 
    crmChartDrilldown: 1022, 
    basicMessageBar: 1023, 
    crmChartViewModel: 1024, 
    scheduler: 1025, 
    mruCache: 1026, 
    dataSourceTests: 1101
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.TraceComponent.registerEnum('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.TraceComponent', false);


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Dictionary = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Dictionary() {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Dictionary.containsKey = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Dictionary$containsKey(obj, keyName) {
    return (Object.isInstanceOfType(obj)) ? keyName in obj : false;
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Dictionary.count = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Dictionary$count(obj) {
    var $v_0 = 0;
    var $$dict_2 = obj;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        $v_0++;
    }
    return $v_0;
}


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Enum() {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parse = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Enum$parse(T, enumKey) {
    return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parseType(T, enumKey);
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parseType = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Enum$parseType(enumType, enumKey) {
    var $v_0 = enumKey.charCodeAt(0);
    if ($v_0 <= 57 && $v_0 >= 0) {
        var $v_1 = parseInt(enumKey);
        if (isFinite($v_1) && $v_1 >= 0) {
            return $v_1;
        }
    }
    try {
        return enumType.parse(enumKey, true);
    }
    catch ($v_2) {
        var $v_3 = parseInt(enumKey);
        if (isFinite($v_3) && $v_3 >= 0) {
            return $v_3;
        }
        throw $v_2;
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.toString = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Enum$toString(enumType, value) {
    return enumType.toString(value);
}


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Trace() {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Trace$logError(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logWarning = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Trace$logWarning(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logInfo = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Trace$logInfo(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
}


function _Math() {
}
_Math.modulo = function _Math$modulo(value, modulo) {
    return ((value % modulo) + modulo) % modulo;
}
_Math.randomBetween = function _Math$randomBetween(lo, hi) {
    return Math.floor((Math.random() * (hi - lo + 1)) + lo);
}


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Script() {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNull = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Script$isNull(value) {
    return null === value;
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Script$isNullOrUndefined(value) {
    return null === value || value === undefined;
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Script$isUndefined(value) {
    return value === undefined;
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.assertWireType = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__Script$assertWireType(dataType, data) {
    if (data) {
        var $v_0 = data.__type;
        if ($v_0) {
            var $v_1 = new dataType().__type;
        }
    }
}


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__String() {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__String$isNullOrEmpty(value) {
    return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(value) || value === '';
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrWhiteSpace = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__String$isNullOrWhiteSpace(value) {
    return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(value) || value.trim() === '';
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.hashCode = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__String$hashCode(value) {
    var $v_0 = 0;
    for (var $v_1 = 0; $v_1 < value.length; ++$v_1) {
        var $v_2 = value.charCodeAt($v_1);
        $v_0 = (($v_0 << 5) - $v_0) + $v_2;
        $v_0 = $v_0 & $v_0;
    }
    return $v_0;
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.format = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__String$format(format, arg0, arg1, arg2, arg3, arg4, arg5) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined(arg0) && Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined(arg1) && Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined(arg2) && Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined(arg3) && Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined(arg4) && Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined(arg5)) {
        return format;
    }
    return String.format(format, arg0, arg1, arg2, arg3, arg4, arg5);
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.replaceNewlineWithEnding = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework__String$replaceNewlineWithEnding(text, ending) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(text)) {
        return '';
    }
    else {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = text.split(Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.$4w);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrWhiteSpace($v_1[$v_2])) {
                $v_0.append($v_1[$v_2]);
                $v_0.append(ending);
            }
        }
        return $v_0.toString();
    }
}


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List(items) {
    this.$2_0 = items || new Array(0);
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$ = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$$$(T) {
    var $$cn = 'List' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.' + $$cn, null, Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.IList.$$(T));
        var $$dict_5 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework[$$cn];
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.prototype = {
    $2_0: null,
    
    get_items: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$get_items() {
        return this.$2_0;
    },
    
    get_count: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$get_count() {
        return this.$2_0.length;
    },
    
    get_item: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$get_item(index) {
        return this.$2_0[index];
    },
    set_item: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$set_item(index, value) {
        this.$2_0[index] = value;
        return value;
    },
    
    add: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$add(item) {
        Array.add(this.$2_0, item);
    },
    
    addRange: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$addRange(items) {
        Array.addRange(this.$2_0, items);
    },
    
    clear: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$clear() {
        Array.clear(this.$2_0);
    },
    
    contains: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$contains(item) {
        return Array.contains(this.$2_0, item);
    },
    
    indexOf: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$indexOf(item, startIndex) {
        startIndex = startIndex || 0;
        return Array.indexOf(this.$2_0, item, startIndex);
    },
    
    insert: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$insert(index, item) {
        Array.insert(this.$2_0, index, item);
    },
    
    remove: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$remove(item) {
        Array.remove(this.$2_0, item);
    },
    
    removeAt: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$removeAt(index) {
        Array.removeAt(this.$2_0, index);
    },
    
    sort: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$sort(compareCallback) {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(compareCallback)) {
            (this.$2_0).sort();
        }
        else {
            (this.$2_0).sort(compareCallback);
        }
    },
    
    toArray: function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_List$toArray() {
        var $v_0 = new Array(this.get_count());
        for (var $v_1 = 0; $v_1 < this.get_count(); $v_1++) {
            $v_0[$v_1] = this.get_item($v_1);
        }
        return $v_0;
    }
}


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Debug = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Debug() {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Debug.$$cctor = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Debug$$$cctor() {
    Sys.Browser.hasDebuggerStatement = true;
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Debug.assert = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Debug$assert(condition, message) {
    if (!condition) {
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Debug.fail = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Debug$fail(message) {
}


function OptionalParameter() {
}
OptionalParameter.getValue = function OptionalParameter$getValue(T, value) {
    return OptionalParameter.getValueByType(T, value);
}
OptionalParameter.getValueByType = function OptionalParameter$getValueByType(type, value) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(value)) {
        if (type === Number || Type.isEnum(type)) {
            return 0;
        }
        else if (type === Boolean) {
            return false;
        }
        else {
            return null;
        }
    }
    else {
        return value;
    }
}


Type.registerNamespace('Microsoft.Dynamics.Client.Core.Framework');

Microsoft.Dynamics.Client.Core.Framework.PerformanceMarkerType = function() {}
Microsoft.Dynamics.Client.Core.Framework.PerformanceMarkerType.prototype = {
    undefined: 0, 
    majorEvent: 1, 
    localStore: 2
}
Microsoft.Dynamics.Client.Core.Framework.PerformanceMarkerType.registerEnum('Microsoft.Dynamics.Client.Core.Framework.PerformanceMarkerType', false);


Microsoft.Dynamics.Client.Core.Framework.IAlias = function() {}
Microsoft.Dynamics.Client.Core.Framework.IAlias.registerInterface('Microsoft.Dynamics.Client.Core.Framework.IAlias');


Microsoft.Dynamics.Client.Core.Framework.ICollection = function() {}
Microsoft.Dynamics.Client.Core.Framework.ICollection.registerInterface('Microsoft.Dynamics.Client.Core.Framework.ICollection');


Microsoft.Dynamics.Client.Core.Framework.IPicklistItem = function() {}
Microsoft.Dynamics.Client.Core.Framework.IPicklistItem.registerInterface('Microsoft.Dynamics.Client.Core.Framework.IPicklistItem');


Microsoft.Dynamics.Client.Core.Framework.IUserContext = function() {}
Microsoft.Dynamics.Client.Core.Framework.IUserContext.registerInterface('Microsoft.Dynamics.Client.Core.Framework.IUserContext');


Microsoft.Dynamics.Client.Core.Framework.PrivilegeDepth = function() {}
Microsoft.Dynamics.Client.Core.Framework.PrivilegeDepth.prototype = {
    none: -1, 
    basic: 0, 
    local: 1, 
    deep: 2, 
    global: 3
}
Microsoft.Dynamics.Client.Core.Framework.PrivilegeDepth.registerEnum('Microsoft.Dynamics.Client.Core.Framework.PrivilegeDepth', false);


Microsoft.Dynamics.Client.Core.Framework.IReference = function() {}
Microsoft.Dynamics.Client.Core.Framework.IReference.registerInterface('Microsoft.Dynamics.Client.Core.Framework.IReference');


Microsoft.Dynamics.Client.Core.Framework.ISerializable = function() {}
Microsoft.Dynamics.Client.Core.Framework.ISerializable.registerInterface('Microsoft.Dynamics.Client.Core.Framework.ISerializable');


Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace = function Microsoft_Dynamics_Client_Core_Framework_DynamicsTrace() {
}
Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace.logInfo = function Microsoft_Dynamics_Client_Core_Framework_DynamicsTrace$logInfo(key, area, parameter) {
}


Microsoft.Dynamics.Client.Core.Framework.PerformanceMarker = function Microsoft_Dynamics_Client_Core_Framework_PerformanceMarker() {
}
Microsoft.Dynamics.Client.Core.Framework.PerformanceMarker.prototype = {
    name: null,
    timestamp: 0,
    parameter: null,
    id: null,
    type: 0,
    data: null
}


Microsoft.Dynamics.Client.Core.Framework.PerformanceStopwatch = function Microsoft_Dynamics_Client_Core_Framework_PerformanceStopwatch(name) {
}
Microsoft.Dynamics.Client.Core.Framework.PerformanceStopwatch.prototype = {
    name: null,
    startMarker: null,
    stopMarker: null,
    
    start: function Microsoft_Dynamics_Client_Core_Framework_PerformanceStopwatch$start() {
    },
    
    stop: function Microsoft_Dynamics_Client_Core_Framework_PerformanceStopwatch$stop() {
    },
    
    setParameter: function Microsoft_Dynamics_Client_Core_Framework_PerformanceStopwatch$setParameter(parameter) {
    }
}


Microsoft.Dynamics.Client.Core.Framework.FieldFormat = function Microsoft_Dynamics_Client_Core_Framework_FieldFormat() {
}
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b = function Microsoft_Dynamics_Client_Core_Framework_FieldFormat$$b($p0) {
    return '!' + Microsoft.Dynamics.Client.Core.Framework.FieldFormat.FieldFormatValue.toString($p0);
}


Microsoft.Dynamics.Client.Core.Framework.FieldFormat.FieldFormatValue = function() {}
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.FieldFormatValue.prototype = {
    Raw: 0, 
    Numeric: 1, 
    Label: 2, 
    Value: 3, 
    State: 4, 
    Id: 5, 
    Name: 6, 
    LogicalName: 7, 
    AllowedStatusTransitions: 8
}
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.FieldFormatValue.registerEnum('Microsoft.Dynamics.Client.Core.Framework.FieldFormat.FieldFormatValue', false);


Microsoft.Dynamics.Client.Core.Framework.TypedDictionary = function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary(items) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(items)) {
        this.$2_0 = items;
    }
    else {
        this.$2_0 = {};
    }
}
Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$ = function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$$$(T) {
    var $$cn = 'TypedDictionary' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Dynamics.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Dynamics.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Dynamics.Client.Core.Framework.TypedDictionary'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Dynamics.Client.Core.Framework.' + $$cn);
        var $$dict_5 = Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Dynamics.Client.Core.Framework[$$cn];
}
Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.prototype = {
    $2_0: null,
    
    get_item: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$get_item(index) {
        return this.$2_0[index];
    },
    set_item: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$set_item(index, value) {
        this.$2_0[index] = value;
        return value;
    },
    
    remove: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$remove(index) {
        delete this.$2_0[index];
    },
    
    clear: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$clear() {
        this.$2_0 = {};
    },
    
    contains: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$contains(item) {
        var $$dict_1 = this.$2_0;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if (($v_0.value == item)) {
                return true;
            }
        }
        return false;
    },
    
    containsKey: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$containsKey(key) {
        return ((key) in this.$2_0);
    },
    
    indexOf: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$indexOf(item) {
        var $$dict_1 = this.$2_0;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if (($v_0.value == item)) {
                return $v_0.key;
            }
        }
        return null;
    },
    
    count: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$count() {
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Dictionary.count(this.$2_0);
    },
    
    toArray: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$toArray() {
        var $v_0 = new Array(this.count());
        var $v_1 = 0;
        var $$dict_2 = this.$2_0;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0[$v_1] = $v_2.value;
            $v_1++;
        }
        return $v_0;
    },
    
    toDictionary: function Microsoft_Dynamics_Client_Core_Framework_TypedDictionary$toDictionary() {
        return this.$2_0;
    }
}


Microsoft.Dynamics.Client.Core.Framework.CallbackSafeArray = function Microsoft_Dynamics_Client_Core_Framework_CallbackSafeArray(argument) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(argument)) {
        this.$m_0 = new Array(0);
    }
    else if ($P_CRM.isArray(argument)) {
        this.$m_0 = argument;
    }
    else {
        this.$m_0 = new Array(argument);
    }
}
Microsoft.Dynamics.Client.Core.Framework.CallbackSafeArray.$$ = function Microsoft_Dynamics_Client_Core_Framework_CallbackSafeArray$$$(T) {
    var $$cn = 'CallbackSafeArray' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Dynamics.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Dynamics.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Dynamics.Client.Core.Framework.CallbackSafeArray'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Dynamics.Client.Core.Framework.CallbackSafeArray.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Dynamics.Client.Core.Framework.' + $$cn);
        var $$dict_5 = Microsoft.Dynamics.Client.Core.Framework.CallbackSafeArray.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Dynamics.Client.Core.Framework[$$cn];
}
Microsoft.Dynamics.Client.Core.Framework.CallbackSafeArray.prototype = {
    $m_0: null,
    
    get_length: function Microsoft_Dynamics_Client_Core_Framework_CallbackSafeArray$get_length() {
        return this.$m_0.length;
    },
    
    get_item: function Microsoft_Dynamics_Client_Core_Framework_CallbackSafeArray$get_item(index) {
        return this.$m_0[index];
    },
    set_item: function Microsoft_Dynamics_Client_Core_Framework_CallbackSafeArray$set_item(index, value) {
        this.$m_0[index] = value;
        return value;
    },
    
    add: function Microsoft_Dynamics_Client_Core_Framework_CallbackSafeArray$add(item) {
        Array.add(this.$m_0, item);
    },
    
    toArray: function Microsoft_Dynamics_Client_Core_Framework_CallbackSafeArray$toArray() {
        return this.$m_0;
    }
}


Microsoft.Dynamics.Client.Core.Framework.Guid = function Microsoft_Dynamics_Client_Core_Framework_Guid(guidValue) {
    this.$G_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.$4n(guidValue);
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(this.$G_0)) {
        throw Error.argumentOutOfRange(String.format('\'{0}\' is not a valid Guid value.', guidValue));
    }
}
Microsoft.Dynamics.Client.Core.Framework.Guid.$4n = function Microsoft_Dynamics_Client_Core_Framework_Guid$$4n($p0) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p0)) {
        return null;
    }
    $p0 = $p0.toLowerCase();
    if (Microsoft.Dynamics.Client.Core.Framework.Guid.get_$5B().test($p0) || Microsoft.Dynamics.Client.Core.Framework.Guid.get_$4g().test($p0)) {
        return $p0.replace(Microsoft.Dynamics.Client.Core.Framework.Guid.get_$5A(), '');
    }
    else if (Microsoft.Dynamics.Client.Core.Framework.Guid.get_$55().test($p0)) {
        return $p0;
    }
    return null;
}
Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty = function Microsoft_Dynamics_Client_Core_Framework_Guid$get_empty() {
    return Microsoft.Dynamics.Client.Core.Framework.Guid.$12 || (Microsoft.Dynamics.Client.Core.Framework.Guid.$12 = new Microsoft.Dynamics.Client.Core.Framework.Guid('00000000-0000-0000-0000-000000000000'));
}
Microsoft.Dynamics.Client.Core.Framework.Guid.get_$5A = function Microsoft_Dynamics_Client_Core_Framework_Guid$get_$5A() {
    return Microsoft.Dynamics.Client.Core.Framework.Guid.$31 || (Microsoft.Dynamics.Client.Core.Framework.Guid.$31 = new RegExp('{|}|-', 'g'));
}
Microsoft.Dynamics.Client.Core.Framework.Guid.get_$5B = function Microsoft_Dynamics_Client_Core_Framework_Guid$get_$5B() {
    return Microsoft.Dynamics.Client.Core.Framework.Guid.$33 || (Microsoft.Dynamics.Client.Core.Framework.Guid.$33 = new RegExp('^(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}$'));
}
Microsoft.Dynamics.Client.Core.Framework.Guid.get_$4g = function Microsoft_Dynamics_Client_Core_Framework_Guid$get_$4g() {
    return Microsoft.Dynamics.Client.Core.Framework.Guid.$2O || (Microsoft.Dynamics.Client.Core.Framework.Guid.$2O = new RegExp('^{(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}}$'));
}
Microsoft.Dynamics.Client.Core.Framework.Guid.get_$55 = function Microsoft_Dynamics_Client_Core_Framework_Guid$get_$55() {
    return Microsoft.Dynamics.Client.Core.Framework.Guid.$2U || (Microsoft.Dynamics.Client.Core.Framework.Guid.$2U = new RegExp('^(\\d|[a-f]){32}$'));
}
Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData = function Microsoft_Dynamics_Client_Core_Framework_Guid$createFromObjectData(data) {
    var $v_0 = data['rawguid'];
    return new Microsoft.Dynamics.Client.Core.Framework.Guid($v_0);
}
Microsoft.Dynamics.Client.Core.Framework.Guid.tryCreate = function Microsoft_Dynamics_Client_Core_Framework_Guid$tryCreate(guidValue) {
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.$4n(guidValue);
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_0)) {
        return new Microsoft.Dynamics.Client.Core.Framework.Guid($v_0);
    }
    return Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
}
Microsoft.Dynamics.Client.Core.Framework.Guid.formatToUpper = function Microsoft_Dynamics_Client_Core_Framework_Guid$formatToUpper(sourceGuid) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(sourceGuid)) {
        return sourceGuid;
    }
    if (Microsoft.Dynamics.Client.Core.Framework.Guid.get_$4g().test(sourceGuid)) {
        return sourceGuid.toUpperCase();
    }
    else {
        return String.format('{{{0}}}', sourceGuid.toUpperCase());
    }
}
Microsoft.Dynamics.Client.Core.Framework.Guid.prototype = {
    $G_0: null,
    $30_0: null,
    
    getObjectData: function Microsoft_Dynamics_Client_Core_Framework_Guid$getObjectData() {
        var $v_0 = {};
        $v_0['rawguid'] = this.$G_0;
        return $v_0;
    },
    
    equals: function Microsoft_Dynamics_Client_Core_Framework_Guid$equals(other) {
        if (Microsoft.Dynamics.Client.Core.Framework.Guid.isInstanceOfType(other)) {
            return (other).$G_0 === this.$G_0;
        }
        if (String.isInstanceOfType(other)) {
            try {
                var $v_0 = new Microsoft.Dynamics.Client.Core.Framework.Guid(other);
                return $v_0.$G_0 === this.$G_0;
            }
            catch ($$e_2) {
                return false;
            }
        }
        return false;
    },
    
    getHashCode: function Microsoft_Dynamics_Client_Core_Framework_Guid$getHashCode() {
        return (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(this.$G_0)) ? Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.hashCode(this.$G_0) : 0;
    },
    
    toString: function Microsoft_Dynamics_Client_Core_Framework_Guid$toString() {
        if (!this.$30_0) {
            this.$30_0 = this.$G_0.substring(0, 8) + '-' + this.$G_0.substring(8, 12) + '-' + this.$G_0.substring(12, 16) + '-' + this.$G_0.substring(16, 20) + '-' + this.$G_0.substring(20, 32);
        }
        return this.$30_0;
    }
}


Microsoft.Dynamics.Client.Core.Framework.KeyValuePair = function Microsoft_Dynamics_Client_Core_Framework_KeyValuePair(key, value) {
    this.$16_0 = ((this.$$gta['Microsoft.Dynamics.Client.Core.Framework.KeyValuePair']['TKey'] === Number || Type.isEnum(this.$$gta['Microsoft.Dynamics.Client.Core.Framework.KeyValuePair']['TKey'])) ? 0 : (this.$$gta['Microsoft.Dynamics.Client.Core.Framework.KeyValuePair']['TKey'] === Boolean) ? false : null);
    this.$4f_0 = ((this.$$gta['Microsoft.Dynamics.Client.Core.Framework.KeyValuePair']['TValue'] === Number || Type.isEnum(this.$$gta['Microsoft.Dynamics.Client.Core.Framework.KeyValuePair']['TValue'])) ? 0 : (this.$$gta['Microsoft.Dynamics.Client.Core.Framework.KeyValuePair']['TValue'] === Boolean) ? false : null);
    this.$16_0 = key;
    this.$4f_0 = value;
}
Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$ = function Microsoft_Dynamics_Client_Core_Framework_KeyValuePair$$$(TKey, TValue) {
    var $$cn = 'KeyValuePair' + '$2' + '$' + TKey.getName().replace(/\./g, '_') + '$' + TValue.getName().replace(/\./g, '_');
    if (!Microsoft.Dynamics.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Dynamics.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Dynamics.Client.Core.Framework.KeyValuePair'] = {'TKey': TKey, 'TValue': TValue};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Dynamics.Client.Core.Framework.' + $$cn);
        var $$dict_6 = Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.prototype;
        for (var $$key_7 in $$dict_6) {
            var $$entry_8 = { key: $$key_7, value: $$dict_6[$$key_7] };
            if ('constructor' !== $$entry_8.key) {
                $$ccr.prototype[$$entry_8.key] = $$entry_8.value;
            }
        }
    }
    return Microsoft.Dynamics.Client.Core.Framework[$$cn];
}
Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.prototype = {
    
    get_key: function Microsoft_Dynamics_Client_Core_Framework_KeyValuePair$get_key() {
        return this.$16_0;
    },
    
    get_value: function Microsoft_Dynamics_Client_Core_Framework_KeyValuePair$get_value() {
        return this.$4f_0;
    }
}


Microsoft.Dynamics.Client.Core.Framework.ObjectComparer = function Microsoft_Dynamics_Client_Core_Framework_ObjectComparer() {
}
Microsoft.Dynamics.Client.Core.Framework.ObjectComparer.areValuesEqual = function Microsoft_Dynamics_Client_Core_Framework_ObjectComparer$areValuesEqual(value1, value2) {
    if (Microsoft.Dynamics.Client.Core.Framework.Guid.isInstanceOfType(value1) && Microsoft.Dynamics.Client.Core.Framework.Guid.isInstanceOfType(value2)) {
        return (value1).equals(value2);
    }
    if (Microsoft.Dynamics.Client.Core.Framework.IReference.isInstanceOfType(value1) && Microsoft.Dynamics.Client.Core.Framework.IReference.isInstanceOfType(value2)) {
        return (value1).equals(value2);
    }
    if (Microsoft.Dynamics.Client.Core.Framework.IPicklistItem.isInstanceOfType(value1) && Microsoft.Dynamics.Client.Core.Framework.IPicklistItem.isInstanceOfType(value2)) {
        return (value1).get_valueString() === (value2).get_valueString() && (value1).get_label() === (value2).get_label();
    }
    if (Microsoft.Dynamics.Client.Core.Framework.IAlias.isInstanceOfType(value1) && Microsoft.Dynamics.Client.Core.Framework.IAlias.isInstanceOfType(value2)) {
        return Microsoft.Dynamics.Client.Core.Framework.ObjectComparer.areValuesEqual((value1).get_value(), (value2).get_value());
    }
    if (Date.isInstanceOfType(value1) && Date.isInstanceOfType(value2)) {
        value1 = value1.valueOf();
        value2 = value2.valueOf();
    }
    return value1 === value2;
}


Microsoft.Dynamics.Client.Core.Framework.Undefined = function Microsoft_Dynamics_Client_Core_Framework_Undefined() {
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Framework');

Microsoft.Crm.Client.Core.Framework.FormFactor = function() {}
Microsoft.Crm.Client.Core.Framework.FormFactor.prototype = {
    none: 0, 
    slate: 1, 
    phone: 2, 
    desktop: 3
}
Microsoft.Crm.Client.Core.Framework.FormFactor.registerEnum('Microsoft.Crm.Client.Core.Framework.FormFactor', false);


Microsoft.Crm.Client.Core.Framework.Orientation = function() {}
Microsoft.Crm.Client.Core.Framework.Orientation.prototype = {
    none: 0, 
    portrait: 1, 
    landscape: 2
}
Microsoft.Crm.Client.Core.Framework.Orientation.registerEnum('Microsoft.Crm.Client.Core.Framework.Orientation', false);


Microsoft.Crm.Client.Core.Framework.ViewType = function() {}
Microsoft.Crm.Client.Core.Framework.ViewType.prototype = {
    none: 0, 
    multipleItem: 2, 
    singleItem: 3
}
Microsoft.Crm.Client.Core.Framework.ViewType.registerEnum('Microsoft.Crm.Client.Core.Framework.ViewType', false);


Microsoft.Crm.Client.Core.Framework.IAuthenticationManager = function() {}
Microsoft.Crm.Client.Core.Framework.IAuthenticationManager.registerInterface('Microsoft.Crm.Client.Core.Framework.IAuthenticationManager');


Microsoft.Crm.Client.Core.Framework.AuthenticationState = function() {}
Microsoft.Crm.Client.Core.Framework.AuthenticationState.prototype = {
    initializing: 0, 
    ready: 1, 
    error: 2
}
Microsoft.Crm.Client.Core.Framework.AuthenticationState.registerEnum('Microsoft.Crm.Client.Core.Framework.AuthenticationState', false);


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common');

Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata = function() {}
Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata');


Microsoft.Crm.Client.Core.Storage.Common.IColumnSet = function() {}
Microsoft.Crm.Client.Core.Storage.Common.IColumnSet.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.IColumnSet');


Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata = function() {}
Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata');


Microsoft.Crm.Client.Core.Storage.Common.AllColumns = function Microsoft_Crm_Client_Core_Storage_Common_AllColumns() {
}
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance = function Microsoft_Crm_Client_Core_Storage_Common_AllColumns$get_instance() {
    return Microsoft.Crm.Client.Core.Storage.Common.AllColumns.$37 || (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.$37 = new Microsoft.Crm.Client.Core.Storage.Common.AllColumns());
}
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.prototype = {
    
    get_isEmpty: function Microsoft_Crm_Client_Core_Storage_Common_AllColumns$get_isEmpty() {
        return false;
    },
    
    getDifference: function Microsoft_Crm_Client_Core_Storage_Common_AllColumns$getDifference(otherColumnSet) {
        return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(new Array(0));
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ColumnSet = function Microsoft_Crm_Client_Core_Storage_Common_ColumnSet(columnNames) {
    this.$V_0 = columnNames;
}
Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ColumnSet$createFromObjectData(data) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(data['columns']);
}
Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.prototype = {
    $V_0: null,
    
    get_columns: function Microsoft_Crm_Client_Core_Storage_Common_ColumnSet$get_columns() {
        return this.$V_0;
    },
    
    get_isEmpty: function Microsoft_Crm_Client_Core_Storage_Common_ColumnSet$get_isEmpty() {
        return !(this.$V_0.length > 0);
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ColumnSet$getObjectData() {
        var $v_0 = {};
        $v_0['columns'] = this.$V_0;
        return $v_0;
    },
    
    getDifference: function Microsoft_Crm_Client_Core_Storage_Common_ColumnSet$getDifference(otherColumnSet) {
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(otherColumnSet)) {
            return otherColumnSet;
        }
        var $v_0 = otherColumnSet;
        var $v_1 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
        for (var $$arr_3 = $v_0.$V_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if (!Array.contains(this.$V_0, $v_2)) {
                $v_1.add($v_2);
            }
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_1.toArray());
    }
}


Microsoft.Crm.Client.Core.Storage.Common.StorageConstants = function Microsoft_Crm_Client_Core_Storage_Common_StorageConstants() {
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common.Xml');

Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList = function() {}
Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList');


Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper = function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeListWrapper($p0) {
    this.$I_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper))();
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        this.$I_0.add($p0[$v_0]);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper.prototype = {
    $I_0: null,
    
    get_count: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeListWrapper$get_count() {
        return this.$I_0.get_count();
    },
    
    get_item: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeListWrapper$get_item($p0) {
        return this.$I_0.get_items()[$p0];
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper = function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper($p0, $p1) {
    Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper.initializeBase(this);
    this.$0_1 = $p0;
    this.$7_1 = (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1)) ? {} : $p1;
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper.prototype = {
    $0_1: null,
    $7_1: null,
    
    get_innerText: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$get_innerText() {
        return (this.$0_1.hasChildNodes()) ? this.$0_1.firstChild.nodeValue : null;
    },
    
    get_outerXml: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$get_outerXml() {
        return new XMLSerializer().serializeToString((this.$0_1));
    },
    
    get_tagName: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$get_tagName() {
        return this.$0_1.nodeName;
    },
    
    get_domParserElement: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$get_domParserElement() {
        return this.$0_1;
    },
    
    getAttribute: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$getAttribute($p0) {
        return this.$0_1.getAttribute($p0);
    },
    
    addNamespace: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$addNamespace($p0, $p1) {
        this.$7_1[$p0] = $p1;
    },
    
    selectSingleNode: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$selectSingleNode($p0) {
        var $v_0 = this.$52_1($p0, true);
        if (!$v_0.get_count()) {
            return null;
        }
        return $v_0.get_item(0);
    },
    
    selectNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$selectNodes($p0) {
        return this.$52_1($p0, false);
    },
    
    getElementsByTagName: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$getElementsByTagName($p0) {
        var $v_0;
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
            $v_0 = this.$0_1.getElementsByTagName($p0);
        }
        else {
            $v_0 = this.$0_1.ownerDocument.getElementsByTagName($p0);
        }
        var $v_1 = [];
        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            Array.add($v_1, $v_0[$v_4]);
        }
        var $v_2 = this.$4k_1($p0);
        Array.addRange($v_1, $v_2);
        var $v_3 = [];
        for (var $v_5 = 0; $v_5 < $v_1.length; $v_5++) {
            Array.add($v_3, new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper($v_1[$v_5], this.$7_1));
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper($v_3);
    },
    
    childNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$childNodes() {
        var $v_0 = [];
        for (var $v_1 = 0, $v_2 = this.$0_1.childNodes.length; $v_1 < $v_2; $v_1++) {
            Array.add($v_0, new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper(this.$0_1.childNodes[$v_1], this.$7_1));
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper($v_0);
    },
    
    hasChildNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$hasChildNodes() {
        return this.$0_1.hasChildNodes();
    },
    
    $52_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$52_1($p0, $p1) {
        var $v_0 = [];
        if ($p0.startsWith('//') || $p0.startsWith('.//')) {
            var $v_2 = 2;
            var $v_3 = false;
            if ($p0.startsWith('.')) {
                $v_2++;
                $v_3 = true;
            }
            $p0 = $p0.substr($v_2);
            var $v_4 = $p0.indexOf('/');
            var $v_5, $v_6;
            if ($v_4 < 0) {
                $v_5 = $p0;
                $v_6 = null;
            }
            else {
                $v_5 = $p0.substr(0, $v_4);
                $v_6 = $p0.substr($v_4 + 1);
            }
            $v_4 = $v_5.indexOf('[');
            var $v_7, $v_8;
            if ($v_4 < 0) {
                $v_7 = $v_5;
                $v_8 = null;
            }
            else {
                $v_7 = $v_5.substr(0, $v_4);
                $v_8 = $v_5.substr($v_4 + 1);
                $v_4 = $v_8.indexOf(']');
                $v_8 = $v_8.substr(0, $v_4);
            }
            var $v_9;
            if ($v_3 || Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
                $v_9 = this.$0_1.getElementsByTagName($v_7);
            }
            else {
                $v_9 = this.$0_1.ownerDocument.getElementsByTagName($v_7);
            }
            var $v_A = [];
            for (var $v_D = 0; $v_D < $v_9.length; $v_D++) {
                Array.add($v_A, $v_9[$v_D]);
            }
            var $v_B = this.$4k_1($v_7);
            Array.addRange($v_A, $v_B);
            var $v_C = $v_A;
            if ($v_A.length > 0 && null !== $v_8) {
                $v_C = this.$2v_1($v_A, $v_8);
            }
            if (!$v_C.length || null === $v_6) {
                $v_0 = $v_C;
            }
            else {
                $v_0 = this.$4C_1($v_C, $v_6, $p1);
            }
        }
        else if ($p0.startsWith('/')) {
            if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
                Array.add($v_0, this.$0_1);
            }
            else {
                Array.add($v_0, this.$0_1.ownerDocument);
            }
            $v_0 = this.$4C_1($v_0, $p0.substr(1), $p1);
        }
        else {
            Array.add($v_0, this.$0_1);
            $v_0 = this.$4C_1($v_0, $p0, $p1);
        }
        var $v_1 = [];
        for (var $v_E = 0; $v_E < $v_0.length; $v_E++) {
            Array.add($v_1, new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper($v_0[$v_E], this.$7_1));
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper($v_1);
    },
    
    $4C_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$4C_1($p0, $p1, $p2) {
        if ($p2) {
            return this.$5E_1($p0, $p1);
        }
        return this.$50_1($p0, $p1);
    },
    
    $5E_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$5E_1($p0, $p1) {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1) || $p1.length < 1) {
            return $p0;
        }
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = this.$51_1($p0[$v_1], $p1);
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
                Array.add($v_0, $v_2);
                break;
            }
        }
        return $v_0;
    },
    
    $51_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$51_1($p0, $p1) {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1) || $p1.length < 1) {
            return $p0;
        }
        var $v_0 = $p1.indexOf('/');
        var $v_1, $v_2;
        if ($v_0 < 0) {
            $v_1 = $p1;
            $v_2 = null;
        }
        else {
            $v_1 = $p1.substr(0, $v_0);
            $v_2 = $p1.substr($v_0 + 1);
        }
        $v_0 = $v_1.indexOf('[');
        var $v_3, $v_4;
        if ($v_0 < 0) {
            $v_3 = $v_1;
            $v_4 = null;
        }
        else {
            $v_3 = $v_1.substr(0, $v_0);
            $v_4 = $v_1.substr($v_0 + 1);
            $v_0 = $v_4.indexOf(']');
            $v_4 = $v_4.substr(0, $v_0);
        }
        var $v_5 = null;
        for (var $v_6 = 0, $v_7 = $p0.childNodes.length; $v_6 < $v_7; $v_6++) {
            if (this.$3Q_1($p0.childNodes[$v_6], $v_3)) {
                var $v_8 = [];
                Array.add($v_8, $p0.childNodes[$v_6]);
                var $v_9 = $v_8;
                if (null !== $v_4) {
                    $v_9 = this.$2v_1($v_8, $v_4);
                }
                if ($v_9.length > 0) {
                    if (null === $v_2) {
                        $v_5 = $v_9[0];
                        break;
                    }
                    else {
                        $v_5 = this.$51_1($v_9[0], $v_2);
                        if ($v_5) {
                            break;
                        }
                    }
                }
            }
        }
        return $v_5;
    },
    
    $50_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$50_1($p0, $p1) {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1) || $p1.length < 1) {
            return $p0;
        }
        var $v_0 = $p1.indexOf('/');
        var $v_1, $v_2;
        if ($v_0 < 0) {
            $v_1 = $p1;
            $v_2 = null;
        }
        else {
            $v_1 = $p1.substr(0, $v_0);
            $v_2 = $p1.substr($v_0 + 1);
        }
        var $v_3 = [];
        var $v_4;
        for (var $v_5 = 0; $v_5 < $p0.length; $v_5++) {
            $v_4 = this.$5D_1($p0[$v_5], $v_1);
            if ($v_4.length > 0) {
                Array.addRange($v_3, $v_4);
            }
        }
        if (!$v_3.length || null === $v_2) {
            return $v_3;
        }
        return this.$50_1($v_3, $v_2);
    },
    
    $5D_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$5D_1($p0, $p1) {
        var $v_0 = $p1.indexOf('[');
        var $v_1, $v_2;
        if ($v_0 < 0) {
            $v_1 = $p1;
            $v_2 = null;
        }
        else {
            $v_1 = $p1.substr(0, $v_0);
            $v_2 = $p1.substr($v_0 + 1);
            $v_0 = $v_2.indexOf(']');
            $v_2 = $v_2.substr(0, $v_0);
        }
        var $v_3 = [];
        for (var $v_5 = 0, $v_6 = $p0.childNodes.length; $v_5 < $v_6; $v_5++) {
            if (this.$3Q_1($p0.childNodes[$v_5], $v_1)) {
                Array.add($v_3, $p0.childNodes[$v_5]);
            }
        }
        var $v_4 = $v_3;
        if ($v_3.length > 0 && null !== $v_2) {
            $v_4 = this.$2v_1($v_3, $v_2);
        }
        return $v_4;
    },
    
    $2v_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$2v_1($p0, $p1) {
        var $v_0 = $p1.startsWith('@');
        if ($v_0) {
            $p1 = $p1.substr(1);
        }
        var $v_1 = $p1.indexOf('=');
        var $v_2, $v_3;
        if ($v_1 < 0) {
            $v_2 = $p1;
            $v_3 = null;
        }
        else {
            $v_2 = $p1.substr(0, $v_1);
            $v_3 = $p1.substr($v_1 + 1);
            $v_3 = $v_3.substr(1);
            $v_3 = $v_3.substr(0, $v_3.length - 1);
        }
        var $v_4 = [];
        for (var $v_5 = 0; $v_5 < $p0.length; $v_5++) {
            var $v_6 = $p0[$v_5];
            if ($v_0 && this.$57_1($v_6, $v_2, $v_3)) {
                Array.add($v_4, $v_6);
            }
            else if (this.$58_1($v_6, $v_2, $v_3)) {
                Array.add($v_4, $v_6);
            }
        }
        return $v_4;
    },
    
    $57_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$57_1($p0, $p1, $p2) {
        if (null === $p2) {
            return $p0.hasAttribute($p1);
        }
        return $p2 === $p0.getAttribute($p1);
    },
    
    $58_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$58_1($p0, $p1, $p2) {
        for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
            if (this.$3Q_1($p0.childNodes[$v_0], $p1)) {
                if (null === $p2) {
                    return true;
                }
                else if ($p0.childNodes[$v_0].firstChild.nodeValue === $p2) {
                    return true;
                }
            }
        }
        return false;
    },
    
    $4k_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$4k_1($p0) {
        var $v_0 = [];
        var $v_1 = this.$4m_1($p0);
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1) || $v_1.length < 1) {
            return $v_0;
        }
        var $v_2 = this.$4l_1($p0);
        var $v_3;
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
            $v_3 = this.$0_1.getElementsByTagName($v_2);
        }
        else {
            $v_3 = this.$0_1.ownerDocument.getElementsByTagName($v_2);
        }
        for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            if ($v_3[$v_4].namespaceURI === $v_1) {
                Array.add($v_0, $v_3[$v_4]);
            }
        }
        return $v_0;
    },
    
    $4m_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$4m_1($p0) {
        var $v_0 = $p0.indexOf(':');
        if ($v_0 < 0) {
            return '';
        }
        var $v_1 = $p0.substr(0, $v_0);
        var $v_2 = this.$7_1[$v_1];
        return $v_2;
    },
    
    $4l_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$4l_1($p0) {
        var $v_0 = $p0.indexOf(':');
        if ($v_0 < 0) {
            return $p0;
        }
        return $p0.substr($v_0 + 1);
    },
    
    $3Q_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_DOMParserNodeWrapper$$3Q_1($p0, $p1) {
        if ($p0.nodeName === $p1 || '*' === $p1) {
            return true;
        }
        var $v_0 = this.$4m_1($p1);
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0) || $v_0.length < 1) {
            return false;
        }
        var $v_1 = this.$4l_1($p1);
        return $p0.namespaceURI === $v_0 && $p0.localName === $v_1;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper = function Microsoft_Crm_Client_Core_Storage_Common_Xml_NodeSnapshotWrapper($p0, $p1, $p2) {
    this.$I_0 = [];
    var $v_0 = $p1;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0.length)) {
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            Array.add(this.$I_0, new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper($p0, $v_0[$v_1], $p2));
        }
    }
    else {
        var $v_2 = $p1;
        for (var $v_3 = 0; $v_3 < $v_2.snapshotLength; $v_3++) {
            Array.add(this.$I_0, new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper($p0, $v_2.snapshotItem($v_3), $p2));
        }
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper.prototype = {
    $I_0: null,
    
    get_count: function Microsoft_Crm_Client_Core_Storage_Common_Xml_NodeSnapshotWrapper$get_count() {
        return this.$I_0.length;
    },
    
    get_item: function Microsoft_Crm_Client_Core_Storage_Common_Xml_NodeSnapshotWrapper$get_item($p0) {
        return this.$I_0[$p0];
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNode() {
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNode$createAttribute(doc, name, value) {
    var $v_0 = doc.createAttribute(name);
    $v_0.value = value;
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeFactory() {
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeFactory$create(node) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(node)) {
        return null;
    }
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4u()) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper(node);
    }
    else if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4t() || Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4Z) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper(node);
    }
    else {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper(node);
        if (!Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4V) {
            try {
                Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4V = true;
                $v_0.selectSingleNode('/root');
            }
            catch ($$e_2) {
                $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper(node);
                Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4Z = true;
                Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logInfo(1006, 'XPathEvaluator doesn\'t work on this browser, use DOMParserNodeWrapper instead.');
            }
        }
        return $v_0;
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeFactory$parseXmlDocument(xml) {
    var $v_0 = null;
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4u()) {
        var $v_1 = [ 'Microsoft.XMLDOM', 'Msxml2.DOMDocument.3.0', 'Msxml2.DOMDocument' ];
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            $v_0 = new ActiveXObject($v_1[$v_2]);
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
                $v_0.async = false;
                $v_0.loadXML(xml);
                ($v_0).setProperty('SelectionLanguage', 'XPath');
                ($v_0).setProperty('SelectionNamespaces', 'xmlns:d=\'http://schemas.microsoft.com/xrm/2011/Contracts/Services\' xmlns:a=\'http://schemas.microsoft.com/xrm/2011/Contracts\' xmlns:b=\'http://schemas.datacontract.org/2004/07/System.Collections.Generic\' xmlns:i=\'http://www.w3.org/2001/XMLSchema-instance\'');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_0.text)) {
                    break;
                }
            }
        }
    }
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
        $v_0 = Sys.Net.XMLDOM(xml);
    }
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
        var $v_3 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0);
        var $v_4 = $v_3.selectSingleNode('/parsererror');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4) && $v_4.get_tagName() === 'parsererror') {
            Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logWarning(1006, 'XML Parsing failure in ParseXmlDocument: {0}', Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0).get_outerXml());
            $v_0 = null;
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4u = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeFactory$$4u() {
    if (!Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4t()) {
        return false;
    }
    var $v_0 = window.DOMParser;
    var $v_1 = true;
    var $v_2 = false;
    var $v_3 = window.Xrm;
    var $v_4 = $v_3.Page;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        var $v_5 = $v_4.context;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) {
            $v_2 = $v_5.isOutlookClient();
        }
    }
    if ($v_2) {
        $v_1 = Mscrm.Utilities.get_ieBrowserVersion() < 10;
    }
    else {
        $v_1 = Number.parseInvariant($P_CRM.browser.version) < 10;
    }
    return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0) || $v_1;
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4t = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeFactory$$4t() {
    var $v_0 = window.navigator.userAgent;
    return $v_0.indexOf('MSIE') !== -1 || $v_0.indexOf('Trident') !== -1;
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeListWrapper = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeListWrapper($p0) {
    var $v_0 = $p0;
    this.$I_0 = [];
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        Array.add(this.$I_0, new Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper($v_2, true));
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeListWrapper.prototype = {
    $I_0: null,
    
    get_count: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeListWrapper$get_count() {
        return this.$I_0.length;
    },
    
    get_item: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeListWrapper$get_item($p0) {
        return this.$I_0[$p0];
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper($p0, $p1) {
    Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper.initializeBase(this);
    this.$X_1 = $p0;
    this.$1O_1 = (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1)) ? false : $p1;
    this.$7_1 = (this.$1O_1) ? null : {};
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper.prototype = {
    $X_1: null,
    $7_1: null,
    $1O_1: false,
    
    get_xmlElement: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$get_xmlElement() {
        return this.$X_1;
    },
    
    get_domParserElement: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$get_domParserElement() {
        return this.$X_1;
    },
    
    get_domElement: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$get_domElement() {
        return this.$X_1;
    },
    
    get_innerText: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$get_innerText() {
        return (this.$X_1.hasChildNodes()) ? this.$X_1.firstChild.nodeValue : null;
    },
    
    get_outerXml: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$get_outerXml() {
        return this.$X_1.xml;
    },
    
    get_tagName: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$get_tagName() {
        return this.get_domElement().tagName;
    },
    
    addNamespace: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$addNamespace($p0, $p1) {
        if (!this.$1O_1) {
            this.$7_1[$p0] = $p1;
        }
    },
    
    selectSingleNode: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$selectSingleNode($p0) {
        this.$4q_1();
        var $v_0 = this.$X_1.selectSingleNode($p0);
        return (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? null : new Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper($v_0, true);
    },
    
    selectNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$selectNodes($p0) {
        this.$4q_1();
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeListWrapper(this.$X_1.selectNodes($p0));
    },
    
    getAttribute: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$getAttribute($p0) {
        return this.get_xmlElement().getAttribute($p0);
    },
    
    getElementsByTagName: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$getElementsByTagName($p0) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeListWrapper(this.get_domElement().getElementsByTagName($p0));
    },
    
    childNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$childNodes() {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeListWrapper(this.get_domElement().childNodes);
    },
    
    hasChildNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$hasChildNodes() {
        return this.$X_1.hasChildNodes();
    },
    
    $4q_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XmlNodeWrapper$$4q_1() {
        if (!this.$1O_1) {
            var $v_0 = new Sys.StringBuilder();
            var $v_1 = '';
            var $$dict_2 = this.$7_1;
            for (var $$key_3 in $$dict_2) {
                var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
                $v_0.append(String.format('{0}xmlns:{1}=\'{2}\'', $v_1, $v_2.key, $v_2.value));
                $v_1 = ' ';
            }
            this.get_xmlElement().setProperty('SelectionLanguage', 'XPath');
            this.get_xmlElement().setProperty('SelectionNamespaces', $v_0.toString());
            this.$1O_1 = true;
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper = function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper($p0, $p1, $p2) {
    this.$$d_$5C_1 = Function.createDelegate(this, this.$5C_1);
    Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper.initializeBase(this);
    this.$q_1 = $p0;
    this.$0_1 = (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1)) ? $p0 : $p1;
    this.$7_1 = (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p2)) ? {} : $p2;
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper.prototype = {
    $7_1: null,
    $q_1: null,
    $0_1: null,
    
    get_innerText: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$get_innerText() {
        return (this.$0_1.hasChildNodes()) ? this.$0_1.firstChild.nodeValue : null;
    },
    
    get_outerXml: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$get_outerXml() {
        return new XMLSerializer().serializeToString(this.$0_1);
    },
    
    get_tagName: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$get_tagName() {
        return this.$0_1.tagName;
    },
    
    get_domParserElement: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$get_domParserElement() {
        return this.$0_1;
    },
    
    addNamespace: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$addNamespace($p0, $p1) {
        this.$7_1[$p0] = $p1;
    },
    
    selectSingleNode: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$selectSingleNode($p0) {
        var $v_0 = this.$q_1.evaluate($p0, this.$0_1, this.$$d_$5C_1, 9, null);
        return (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0.singleNodeValue)) ? null : new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper(this.$q_1, $v_0.singleNodeValue, this.$7_1);
    },
    
    selectNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$selectNodes($p0) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper(this.$q_1, this.$q_1.evaluate($p0, this.$0_1, this.$$d_$5C_1, 7, null), this.$7_1);
    },
    
    getAttribute: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$getAttribute($p0) {
        return this.$0_1.getAttribute($p0);
    },
    
    getElementsByTagName: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$getElementsByTagName($p0) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper(this.$q_1, this.$0_1.getElementsByTagName($p0), this.$7_1);
    },
    
    childNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$childNodes() {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper(this.$q_1, this.$0_1.childNodes, this.$7_1);
    },
    
    hasChildNodes: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$hasChildNodes() {
        return this.$0_1.hasChildNodes();
    },
    
    $5C_1: function Microsoft_Crm_Client_Core_Storage_Common_Xml_XPathEvaluatorWrapper$$5C_1($p0) {
        if ((($p0) in this.$7_1)) {
            return this.$7_1[$p0];
        }
        else {
            return null;
        }
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel');

Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AccessRights = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AccessRights.prototype = {
    none: 0, 
    readAccess: 1, 
    writeAccess: 2, 
    appendAccess: 4, 
    appendToAccess: 16, 
    createAccess: 32, 
    deleteAccess: 65536, 
    shareAccess: 262144, 
    assignAccess: 524288
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AccessRights.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AccessRights', true);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights.prototype = {
    none: 0, 
    canCreate: 1, 
    canRead: 2, 
    canUpdate: 4
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights', true);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeType.prototype = {
    unknown: -1, 
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
    uniqueIdentifier: 15, 
    calendarRules: 16, 
    virtual: 17, 
    bigInt: 18, 
    managedProperty: 19, 
    entityName: 20, 
    aliasedValue: 21
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameterType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameterType.prototype = {
    none: 0, 
    string: 1, 
    attribute: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameterType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameterType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationSeverity = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationSeverity.prototype = {
    none: 0, 
    error: 1, 
    warning: 2, 
    information: 3, 
    userDefined: 4
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationSeverity.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationSeverity', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority.prototype = {
    workspace: 0, 
    medium: 1, 
    notCached: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy.prototype = {
    local: 0, 
    remote: 1, 
    localAndRemote: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks.prototype = {
    none: 0, 
    communicationActivity: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks', true);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes.prototype = {
    none: 0, 
    userOwned: 1, 
    teamOwned: 2, 
    businessOwned: 4, 
    organizationOwned: 8, 
    businessParented: 16
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes', true);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey');


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource.prototype = {
    attribute: 0, 
    organization: 1, 
    currency: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption.prototype = {
    currencySymbol: 0, 
    currencyCode: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrivilegeType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrivilegeType.prototype = {
    none: 0, 
    create: 1, 
    read: 2, 
    write: 3, 
    Delete: 4, 
    assign: 5, 
    share: 6, 
    append: 7, 
    appendTo: 8
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrivilegeType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrivilegeType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole.prototype = {
    unknown: -1, 
    referenced: 0, 
    referencing: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference.prototype = {
    None: 0, 
    PromptBeforeReport: 1, 
    AutoReport: 2, 
    NeverReport: 3
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel.prototype = {
    unknown: -1, 
    none: 0, 
    systemRequired: 1, 
    applicationRequired: 2, 
    recommended: 3
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RollupType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RollupType.prototype = {
    none: 0, 
    related: 1, 
    extended: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RollupType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RollupType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TargetFieldType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TargetFieldType.prototype = {
    all: 0, 
    validForCreate: 1, 
    validForUpdate: 2, 
    validForRead: 3
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TargetFieldType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TargetFieldType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.WebServiceCallRetryPolicy = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_WebServiceCallRetryPolicy() {}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue(entityLogicalName, attributeLogicalName, attributeType) {
    this.$9_0 = entityLogicalName;
    this.$2K_0 = attributeLogicalName;
    this.$1g_0 = attributeType;
    this.$15_0 = null;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue$createFromObjectData(data) {
    var $v_0 = data['attributeLogicalName'];
    var $v_1 = data['entityLogicalName'];
    var $v_2 = data['attributeType'];
    var $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue($v_1, $v_0, $v_2);
    $v_3.$15_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$38(data['value'], $v_2);
    return $v_3;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.prototype = {
    $9_0: null,
    $2K_0: null,
    $1g_0: 0,
    $15_0: null,
    
    get_entityLogicalName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue$get_entityLogicalName() {
        return this.$9_0;
    },
    
    get_attributeLogicalName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue$get_attributeLogicalName() {
        return this.$2K_0;
    },
    
    get_attributeType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue$get_attributeType() {
        return this.$1g_0;
    },
    
    get_value: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue$get_value() {
        return this.$15_0;
    },
    set_value: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue$set_value(value) {
        this.$15_0 = value;
        return value;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AliasedValue$getObjectData() {
        var $v_0 = {};
        $v_0['entityLogicalName'] = this.$9_0;
        $v_0['attributeLogicalName'] = this.$2K_0;
        $v_0['attributeType'] = this.$1g_0;
        $v_0['value'] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$4r(this.$15_0, this.$1g_0);
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata(logicalName, id, entityLogicalName, type, displayName, isSecured, isValidForCreate, isValidForRead, isValidForUpdate, requiredLevel, maxLength, minValue, maxValue, precision, precisionSource, format, defaultFormValue, defaultValue, optionSet, isBaseCurrency, targets, attributeOf) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(logicalName, 'logicalName');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(id, 'id');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(entityLogicalName, 'entityLogicalName');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(type, 'type');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(requiredLevel, 'isSecured');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(requiredLevel, 'isValidForCreate');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(requiredLevel, 'isValidForRead');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(requiredLevel, 'isValidForUpdate');
    this.$J_0 = logicalName;
    this.$B_0 = id;
    this.$9_0 = entityLogicalName;
    this.$4W_0 = type;
    this.$L_0 = displayName;
    this.$s_0 = isSecured;
    this.$3U_0 = isValidForCreate;
    this.$3V_0 = isValidForRead;
    this.$3W_0 = isValidForUpdate;
    this.$43_0 = requiredLevel;
    this.$3a_0 = maxLength;
    this.$3d_0 = minValue;
    this.$3b_0 = maxValue;
    this.$3q_0 = precision;
    this.$3r_0 = precisionSource;
    this.$2y_0 = format;
    this.$2g_0 = defaultFormValue;
    this.$2h_0 = defaultValue;
    this.$1z_0 = optionSet;
    this.$2B_0 = targets;
    this.$3E_0 = isBaseCurrency;
    this.$2L_0 = attributeOf;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.extractKey = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$extractKey(data) {
    return Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData((data)['id']).toString();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$createFromObjectData(data) {
    var $v_0 = data['logicalname'];
    var $v_1 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['id']);
    var $v_2 = data['entitylogicalname'];
    var $v_3 = data['type'];
    var $v_4 = data['displayname'];
    var $v_5 = data['requiredlevel'];
    var $v_6 = data['issecured'];
    var $v_7 = data['isvalidforcreate'];
    var $v_8 = data['isvalidforupdate'];
    var $v_9 = data['isvalidforread'];
    var $v_A = data['maxlength'];
    var $v_B = data['minvalue'];
    var $v_C = data['maxvalue'];
    var $v_D = data['precision'];
    var $v_E = data['precisionsource'];
    var $v_F = data['format'];
    var $v_G = data['defaultformvalue'];
    var $v_H = data['defaultvalue'];
    var $v_I = data['isbasecurrency'];
    var $v_J = data['attributeof'];
    var $v_K = null;
    var $v_L = data['optionset'];
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_L)) {
        $v_K = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.createFromObjectData($v_L);
    }
    var $v_M = data['targets'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata($v_0, $v_1, $v_2, $v_3, $v_4, $v_6, $v_7, $v_9, $v_8, $v_5, $v_A, $v_B, $v_C, $v_D, $v_E, $v_F, $v_G, $v_H, $v_K, $v_I, $v_M, $v_J);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.prototype = {
    $B_0: null,
    $J_0: null,
    $9_0: null,
    $4W_0: 0,
    $L_0: null,
    $s_0: false,
    $3U_0: false,
    $3V_0: false,
    $3W_0: false,
    $43_0: 0,
    $3a_0: 0,
    $3d_0: 0,
    $3b_0: 0,
    $3q_0: 0,
    $3r_0: 0,
    $2y_0: null,
    $2g_0: 0,
    $2h_0: false,
    $3E_0: false,
    $1z_0: null,
    $2B_0: null,
    $2L_0: null,
    
    get_id: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_id() {
        return this.$B_0;
    },
    
    get_logicalName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_logicalName() {
        return this.$J_0;
    },
    
    get_entityLogicalName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_entityLogicalName() {
        return this.$9_0;
    },
    
    get_type: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_type() {
        return this.$4W_0;
    },
    
    get_displayName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_displayName() {
        return this.$L_0;
    },
    
    get_isValidForCreate: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_isValidForCreate() {
        return this.$3U_0;
    },
    
    get_isSecured: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_isSecured() {
        return this.$s_0;
    },
    
    get_isValidForUpdate: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_isValidForUpdate() {
        return this.$3W_0;
    },
    
    get_isValidForRead: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_isValidForRead() {
        return this.$3V_0;
    },
    
    get_requiredLevel: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_requiredLevel() {
        return this.$43_0;
    },
    
    get_maxLength: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_maxLength() {
        return this.$3a_0;
    },
    
    get_minValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_minValue() {
        return this.$3d_0;
    },
    
    get_maxValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_maxValue() {
        return this.$3b_0;
    },
    
    get_precision: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_precision() {
        return this.$3q_0;
    },
    
    get_precisionSource: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_precisionSource() {
        return this.$3r_0;
    },
    
    get_format: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_format() {
        return this.$2y_0;
    },
    
    get_isBaseCurrency: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_isBaseCurrency() {
        return this.$3E_0;
    },
    
    get_defaultFormValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_defaultFormValue() {
        return this.$2g_0;
    },
    
    get_defaultValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_defaultValue() {
        return this.$2h_0;
    },
    
    get_optionSet: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_optionSet() {
        return this.$1z_0;
    },
    
    get_targets: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_targets() {
        return this.$2B_0;
    },
    
    get_attributeOf: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$get_attributeOf() {
        return this.$2L_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributeMetadata$getObjectData() {
        var $v_0 = {};
        $v_0['logicalname'] = this.$J_0;
        $v_0['id'] = this.$B_0.getObjectData();
        $v_0['entitylogicalname'] = this.$9_0;
        $v_0['entitylogicalname_logicalname'] = this.$9_0 + '_' + this.$J_0;
        $v_0['type'] = this.$4W_0;
        $v_0['displayname'] = this.$L_0;
        $v_0['issecured'] = this.$s_0;
        $v_0['isvalidforcreate'] = this.$3U_0;
        $v_0['isvalidforupdate'] = this.$3W_0;
        $v_0['isvalidforread'] = this.$3V_0;
        $v_0['requiredlevel'] = this.$43_0;
        $v_0['maxlength'] = this.$3a_0;
        $v_0['minvalue'] = this.$3d_0;
        $v_0['maxvalue'] = this.$3b_0;
        $v_0['precision'] = this.$3q_0;
        $v_0['precisionsource'] = this.$3r_0;
        $v_0['defaultformvalue'] = this.$2g_0;
        $v_0['defaultvalue'] = this.$2h_0;
        $v_0['format'] = this.$2y_0;
        $v_0['isbasecurrency'] = this.$3E_0;
        $v_0['attributeof'] = this.$2L_0;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$1z_0)) {
            $v_0['optionset'] = this.$1z_0.getObjectData();
        }
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$2B_0)) {
            $v_0['targets'] = this.$2B_0;
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege(attributeId, canCreate, canRead, canUpdate) {
    this.$1f_0 = attributeId;
    this.$1i_0 = canCreate;
    this.$1j_0 = canRead;
    this.$1k_0 = canUpdate;
    this.$N_0 = 0;
    this.$N_0 = (this.$1i_0) ? this.$N_0 | 1 : this.$N_0;
    this.$N_0 = (this.$1j_0) ? this.$N_0 | 2 : this.$N_0;
    this.$N_0 = (this.$1k_0) ? this.$N_0 | 4 : this.$N_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege$createFromObjectData(data) {
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['attributeid']);
    var $v_1 = data['cancreate'];
    var $v_2 = data['canread'];
    var $v_3 = data['canupdate'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege($v_0, $v_1, $v_2, $v_3);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.prototype = {
    $1f_0: null,
    $1i_0: false,
    $1j_0: false,
    $1k_0: false,
    $N_0: 0,
    
    get_attributeId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege$get_attributeId() {
        return this.$1f_0;
    },
    
    get_canCreate: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege$get_canCreate() {
        return this.$1i_0;
    },
    
    get_canRead: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege$get_canRead() {
        return this.$1j_0;
    },
    
    get_canUpdate: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege$get_canUpdate() {
        return this.$1k_0;
    },
    
    get_accessRightsMask: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege$get_accessRightsMask() {
        return this.$N_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_AttributePrivilege$getObjectData() {
        var $v_0 = {};
        $v_0['attributeid'] = this.$1f_0.getObjectData();
        $v_0['cancreate'] = this.$1i_0;
        $v_0['canread'] = this.$1j_0;
        $v_0['canupdate'] = this.$1k_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotification = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotification(severity, message, parameters) {
    this.$4G_0 = severity;
    this.$3c_0 = message;
    this.$3m_0 = parameters;
    this.IsBusinessNotification = true;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotification.prototype = {
    $4G_0: 0,
    $3c_0: null,
    $3m_0: null,
    IsBusinessNotification: false,
    
    get_severity: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotification$get_severity() {
        return this.$4G_0;
    },
    set_severity: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotification$set_severity(value) {
        this.$4G_0 = value;
        return value;
    },
    
    get_message: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotification$get_message() {
        return this.$3c_0;
    },
    set_message: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotification$set_message(value) {
        this.$3c_0 = value;
        return value;
    },
    
    get_parameters: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotification$get_parameters() {
        return this.$3m_0;
    },
    set_parameters: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotification$set_parameters(value) {
        this.$3m_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameter = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotificationParameter(parameterType, data) {
    this.$3n_0 = parameterType;
    this.$1L_0 = data;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameter.prototype = {
    $3n_0: 0,
    $1L_0: null,
    
    get_parameterType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotificationParameter$get_parameterType() {
        return this.$3n_0;
    },
    set_parameterType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotificationParameter$set_parameterType(value) {
        this.$3n_0 = value;
        return value;
    },
    
    get_data: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotificationParameter$get_data() {
        return this.$1L_0;
    },
    set_data: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_BusinessNotificationParameter$set_data(value) {
        this.$1L_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions(cachePriority, retrievalStrategy, timestamp) {
    this.$c_0 = cachePriority;
    this.$49_0 = retrievalStrategy;
    this.$x_0 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(timestamp)) ? timestamp : new Date();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.shouldBeCached = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$shouldBeCached(options) {
    return !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(options) && options.$c_0 !== 2;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.getSortableString = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$getSortableString(timestamp) {
    return timestamp.format('s');
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.priorityTimestampKey = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$priorityTimestampKey(priority, timestamp) {
    return priority + '|' + Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.getSortableString(timestamp);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$createFromObjectData(data) {
    var $v_0 = Date.parseInvariant(data['timestamp']);
    var $v_1 = data['priority_timestamp'];
    var $v_2 = Number.parseInvariant($v_1.substr(0, 1));
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions($v_2, 2, $v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.prototype = {
    $x_0: null,
    $c_0: 0,
    $49_0: 0,
    
    get_timestamp: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$get_timestamp() {
        return this.$x_0;
    },
    set_timestamp: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$set_timestamp(value) {
        this.$x_0 = value;
        return value;
    },
    
    get_cachePriority: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$get_cachePriority() {
        return this.$c_0;
    },
    set_cachePriority: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$set_cachePriority(value) {
        this.$c_0 = value;
        return value;
    },
    
    get_retrievalStrategy: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$get_retrievalStrategy() {
        return this.$49_0;
    },
    set_retrievalStrategy: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$set_retrievalStrategy(value) {
        this.$49_0 = value;
        return value;
    },
    
    get_sortableTimestamp: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$get_sortableTimestamp() {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.getSortableString(this.$x_0);
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$getObjectData() {
        var $v_0 = {};
        $v_0['timestamp'] = this.get_sortableTimestamp();
        $v_0['priority_timestamp'] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.priorityTimestampKey(this.$c_0, this.$x_0);
        return $v_0;
    },
    
    update: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ClientRetrieveOptions$update(updated) {
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(updated)) {
            this.$x_0 = updated.$x_0;
            if (updated.$c_0 < this.$c_0) {
                this.$c_0 = updated.$c_0;
            }
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection(entities, moreRecords, totalRecordCount, totalRecordCountLimitExceeded, query, clientRetrieveOptions) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(entities, 'entities');
    this.$1y_0 = moreRecords;
    this.$4S_0 = totalRecordCount;
    this.$1W_0 = (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(query)) ? 1 : query.get_pageNumber();
    this.$4T_0 = totalRecordCountLimitExceeded;
    this.$M_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord))(entities);
    this.$Y_0 = query;
    this.set_clientRetrieveOptions((Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(clientRetrieveOptions)) ? ((this.$M_0.get_count() > 0) ? this.$M_0.get_item(0).get_clientRetrieveOptions() : null) : clientRetrieveOptions);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$createEmpty() {
    return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities(new Array(0));
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$createFromEntities(entities) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection(entities, false, 0, false);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$createFromObjectData(data) {
    var $v_0 = new Array(0);
    var $v_1 = data['entities'];
    for (var $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
        $v_0[$v_7] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData($v_1[$v_7]);
    }
    var $v_2 = data['morerecords'];
    var $v_3 = data['totalrecordcount'];
    var $v_4 = (('totalRecordCountLimitExceeded') in data) ? data['totalRecordCountLimitExceeded'] : false;
    var $v_5 = (('clientretrieveoptions') in data) ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.createFromObjectData(data['clientretrieveoptions']) : null;
    var $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection($v_0, $v_2, $v_3, $v_4, null, $v_5);
    return $v_6;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.prototype = {
    $M_0: null,
    $1y_0: false,
    $4S_0: 0,
    $4T_0: false,
    $1W_0: 0,
    $Y_0: null,
    $4_0: null,
    
    get_entities: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_entities() {
        return this.$M_0.get_items();
    },
    
    get_moreRecords: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_moreRecords() {
        return this.$1y_0;
    },
    
    get_totalRecordCountLimitExceeded: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_totalRecordCountLimitExceeded() {
        return this.$4T_0;
    },
    
    get_isLastPage: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_isLastPage() {
        return !this.$1y_0;
    },
    
    get_totalRecordCount: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_totalRecordCount() {
        return this.$4S_0;
    },
    
    get_currentPageIndex: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_currentPageIndex() {
        return this.$1W_0 - 1;
    },
    
    get_currentPageNumber: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_currentPageNumber() {
        return this.$1W_0;
    },
    
    get_count: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_count() {
        return this.get_entities().length;
    },
    
    get_query: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_query() {
        return this.$Y_0;
    },
    set_query: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$set_query(value) {
        this.$Y_0 = value;
        return value;
    },
    
    get_key: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_key() {
        return (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$Y_0) && (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey.isInstanceOfType(this.$Y_0))) ? (this.$Y_0).get_key() : '';
    },
    
    get_clientRetrieveOptions: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_clientRetrieveOptions() {
        return this.$4_0;
    },
    set_clientRetrieveOptions: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$set_clientRetrieveOptions(value) {
        this.$4_0 = value;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$4_0)) {
            for (var $v_0 = 0; $v_0 < this.$M_0.get_count(); $v_0++) {
                if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$M_0.get_item($v_0).get_clientRetrieveOptions())) {
                    this.$M_0.get_item($v_0).set_clientRetrieveOptions(this.$4_0);
                }
            }
        }
        return value;
    },
    
    get_item: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$get_item(index) {
        return this.get_entities()[index];
    },
    set_item: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$set_item(index, value) {
        this.get_entities()[index] = value;
        return value;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$getObjectData() {
        var $v_0 = {};
        var $v_1 = new Array(this.get_entities().length);
        for (var $v_2 = 0; $v_2 < this.get_entities().length; $v_2++) {
            $v_1[$v_2] = this.get_entities()[$v_2].getObjectData();
        }
        $v_0['entities'] = $v_1;
        $v_0['morerecords'] = this.$1y_0;
        $v_0['totalrecordcount'] = this.$4S_0;
        $v_0['totalRecordCountLimitExceeded'] = this.$4T_0;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$4_0)) {
            $v_0['clientretrieveoptions'] = this.$4_0.getObjectData();
        }
        return $v_0;
    },
    
    add: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$add(record) {
        this.$M_0.add(record);
    },
    
    remove: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityCollection$remove(record) {
        this.$M_0.remove(record);
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata(id, logicalName, displayName, pluralName, objectTypeCode, primaryIdAttribute, primaryNameAttribute, privileges, attributes, isReadOnlyForMobileClient, isVisibleInMobileClient, hasChanged, isActivity, isChildEntity, parentEntityLogicalName, parentEntityReferencingAttribute, isValidForAdvancedFind, isMailMergeEnabled, isConnectionsEnabled, isCustomizable, isActivityParty, isImportable, isEnabledForCharts, isCustomEntity, isStateModelAware, enforceStateTransitions, isCollaboration, activityTypeMask, ownershipType) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(id, 'id');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(logicalName, 'logicalName');
    this.$B_0 = id;
    this.$J_0 = logicalName;
    this.$L_0 = displayName;
    this.$1B_0 = pluralName;
    this.$3g_0 = objectTypeCode;
    this.$3t_0 = primaryIdAttribute;
    this.$3u_0 = primaryNameAttribute;
    this.$1P_0 = isReadOnlyForMobileClient;
    this.$3X_0 = isVisibleInMobileClient;
    this.$32_0 = hasChanged;
    this.$3A_0 = isActivity;
    this.$1s_0 = isChildEntity;
    this.$19_0 = parentEntityLogicalName;
    this.$1A_0 = parentEntityReferencingAttribute;
    this.$3T_0 = isValidForAdvancedFind;
    this.$3P_0 = isMailMergeEnabled;
    this.$3G_0 = isConnectionsEnabled;
    this.$3J_0 = isCustomizable;
    this.$3B_0 = isActivityParty;
    this.$3O_0 = isImportable;
    this.$3K_0 = isEnabledForCharts;
    this.$3I_0 = isCustomEntity;
    this.$3S_0 = isStateModelAware;
    this.$2o_0 = enforceStateTransitions;
    this.$3F_0 = isCollaboration;
    this.$2H_0 = activityTypeMask;
    this.$3l_0 = ownershipType;
    this.$25_0 = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata))();
    for (var $$arr_T = privileges, $$len_U = $$arr_T.length, $$idx_V = 0; $$idx_V < $$len_U; ++$$idx_V) {
        var $v_0 = $$arr_T[$$idx_V];
        this.$25_0.set_item($v_0.get_privilegeTypeKey(), $v_0);
    }
    this.mergeAttributeMetadata(attributes, false);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.extractKey = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$extractKey(data) {
    return Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData((data)['id']).toString();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$createFromObjectData(data) {
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['id']);
    var $v_1 = data['logicalname'];
    var $v_2 = data['displayname'];
    var $v_3 = data['pluralname'];
    var $v_4 = data['objecttypecode'];
    var $v_5 = data['primaryidattribute'];
    var $v_6 = data['primarynameattribute'];
    var $v_7 = data['isreadonlyformobileclient'];
    var $v_8 = data['isvisibleinmobileclient'];
    var $v_9 = data['haschanged'];
    var $v_A = data['isactivity'];
    var $v_B = data['ischildentity'];
    var $v_C = data['parententitylogicalname'];
    var $v_D = data['parententityreferencingattribute'];
    var $v_E = data['isvalidforadvancedfind'];
    var $v_F = data['ismailmergeenabled'];
    var $v_G = data['isconnectionsenabled'];
    var $v_H = data['iscustomizable'];
    var $v_I = data['isactivityparty'];
    var $v_J = data['isimportable'];
    var $v_K = data['isenabledforcharts'];
    var $v_L = data['iscustomentity'];
    var $v_M = data['isstatemodelaware'];
    var $v_N = data['enforcestatetransitions'];
    var $v_O = data['iscollaboration'];
    var $v_P = data['activitytypemask'];
    var $v_Q = data['ownershiptype'];
    var $v_R = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata))();
    for (var $$arr_T = data['privileges'], $$len_U = $$arr_T.length, $$idx_V = 0; $$idx_V < $$len_U; ++$$idx_V) {
        var $v_S = $$arr_T[$$idx_V];
        $v_R.add(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.createFromObjectData($v_S));
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_R.toArray(), null, $v_7, $v_8, $v_9, $v_A, $v_B, $v_C, $v_D, $v_E, $v_F, $v_G, $v_H, $v_I, $v_J, $v_K, $v_L, $v_M, $v_N, $v_O, $v_P, $v_Q);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.prototype = {
    $B_0: null,
    $J_0: null,
    $3g_0: 0,
    $3t_0: null,
    $3u_0: null,
    $25_0: null,
    $32_0: false,
    $3A_0: false,
    $1P_0: false,
    $3X_0: false,
    $1s_0: false,
    $19_0: null,
    $1A_0: null,
    $L_0: null,
    $1B_0: null,
    $U_0: null,
    $T_0: null,
    $1e_0: false,
    $3T_0: false,
    $3P_0: false,
    $3G_0: false,
    $3J_0: false,
    $3B_0: false,
    $3O_0: false,
    $3K_0: false,
    $3I_0: false,
    $3S_0: false,
    $2o_0: false,
    $2H_0: 0,
    $3l_0: 0,
    $3F_0: false,
    
    get_id: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_id() {
        return this.$B_0;
    },
    
    get_logicalName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_logicalName() {
        return this.$J_0;
    },
    
    get_displayName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_displayName() {
        return this.$L_0;
    },
    
    get_pluralName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_pluralName() {
        return this.$1B_0;
    },
    
    get_objectTypeCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_objectTypeCode() {
        return this.$3g_0;
    },
    
    get_primaryIdAttribute: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_primaryIdAttribute() {
        return this.$3t_0;
    },
    
    get_primaryNameAttribute: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_primaryNameAttribute() {
        return this.$3u_0;
    },
    
    get_attributes: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_attributes() {
        return this.$T_0;
    },
    
    get_attributesByName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_attributesByName() {
        return this.$U_0;
    },
    
    get_isReadOnlyForMobileClient: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isReadOnlyForMobileClient() {
        return this.$1P_0;
    },
    
    get_isVisibleInMobileClient: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isVisibleInMobileClient() {
        return this.$3X_0;
    },
    
    get_hasChanged: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_hasChanged() {
        return this.$32_0;
    },
    
    get_isActivity: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isActivity() {
        switch (this.$J_0) {
            case 'phonecall':
            case 'email':
            case 'task':
            case 'appointment':
            case 'activitypointer':
                return true;
            default:
                return this.$3A_0;
        }
    },
    
    get_isChildEntity: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isChildEntity() {
        return this.$1s_0;
    },
    
    get_parentEntityLogicalName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_parentEntityLogicalName() {
        return this.$19_0;
    },
    
    get_parentEntityReferencingAttribute: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_parentEntityReferencingAttribute() {
        return this.$1A_0;
    },
    
    get_allAttributes: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_allAttributes() {
        return this.$1e_0;
    },
    
    get_privilegesByType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_privilegesByType() {
        return this.$25_0;
    },
    
    get_isValidForAdvancedFind: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isValidForAdvancedFind() {
        return this.$3T_0;
    },
    
    get_isMailMergeEnabled: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isMailMergeEnabled() {
        return this.$3P_0;
    },
    
    get_isConnectionsEnabled: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isConnectionsEnabled() {
        return this.$3G_0;
    },
    
    get_isCustomizable: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isCustomizable() {
        return this.$3J_0;
    },
    
    get_isActivityParty: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isActivityParty() {
        return this.$3B_0;
    },
    
    get_isImportable: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isImportable() {
        return this.$3O_0;
    },
    
    get_isEnabledForCharts: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isEnabledForCharts() {
        return this.$3K_0;
    },
    
    get_isCustomEntity: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isCustomEntity() {
        return this.$3I_0;
    },
    
    get_isStateModelAware: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isStateModelAware() {
        return this.$3S_0;
    },
    
    get_enforceStateTransitions: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_enforceStateTransitions() {
        return this.$2o_0;
    },
    
    get_activityTypeMask: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_activityTypeMask() {
        return this.$2H_0;
    },
    
    get_ownershipType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_ownershipType() {
        return this.$3l_0;
    },
    
    get_isCollaboration: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_isCollaboration() {
        return this.$3F_0;
    },
    
    get_hasStateCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$get_hasStateCode() {
        return !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$U_0) && this.$U_0.containsKey('statecode');
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$getObjectData() {
        var $v_0 = {};
        $v_0['id'] = this.$B_0.getObjectData();
        $v_0['logicalname'] = this.$J_0;
        $v_0['displayname'] = this.$L_0;
        $v_0['pluralname'] = this.$1B_0;
        $v_0['objecttypecode'] = this.$3g_0;
        $v_0['primaryidattribute'] = this.$3t_0;
        $v_0['primarynameattribute'] = this.$3u_0;
        $v_0['isreadonlyformobileclient'] = this.$1P_0;
        $v_0['isvisibleinmobileclient'] = this.$3X_0;
        $v_0['haschanged'] = this.$32_0.toString();
        $v_0['isactivity'] = this.$3A_0;
        $v_0['ischildentity'] = this.$1s_0;
        $v_0['parententitylogicalname'] = this.$19_0;
        $v_0['parententityreferencingattribute'] = this.$1A_0;
        $v_0['isvalidforadvancedfind'] = this.$3T_0;
        $v_0['ismailmergeenabled'] = this.$3P_0;
        $v_0['isconnectionsenabled'] = this.$3G_0;
        $v_0['iscustomizable'] = this.$3J_0;
        $v_0['isactivityparty'] = this.$3B_0;
        $v_0['isimportable'] = this.$3O_0;
        $v_0['isenabledforcharts'] = this.$3K_0;
        $v_0['iscustomentity'] = this.$3I_0;
        $v_0['isstatemodelaware'] = this.$3S_0;
        $v_0['enforcestatetransitions'] = this.$2o_0;
        $v_0['iscollaboration'] = this.$3F_0;
        $v_0['activitytypemask'] = this.$2H_0;
        $v_0['ownershiptype'] = this.$3l_0;
        var $v_1 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Object))();
        for (var $$arr_2 = this.$25_0.toArray(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            $v_1.add($v_2.getObjectData());
        }
        $v_0['privileges'] = $v_1.toArray();
        return $v_0;
    },
    
    mergeAttributeMetadata: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$mergeAttributeMetadata(attributesMetadata, isAllAttributes) {
        this.$1e_0 = this.$1e_0 || isAllAttributes;
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(attributesMetadata)) {
            return;
        }
        var $v_0 = false;
        if (!this.$T_0 || !this.$T_0.length || isAllAttributes) {
            this.$T_0 = attributesMetadata;
            this.$U_0 = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
            $v_0 = true;
        }
        if (!this.$U_0) {
            this.$U_0 = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
        }
        for (var $v_1 = 0; $v_1 < attributesMetadata.length; $v_1++) {
            var $v_2 = attributesMetadata[$v_1];
            if (!$v_0) {
                if (!this.$U_0.containsKey($v_2.$J_0)) {
                    this.$T_0[this.$T_0.length] = $v_2;
                }
                else {
                    for (var $v_3 = 0; $v_3 < this.$T_0.length; $v_3++) {
                        if (this.$T_0[$v_3].$J_0 === $v_2.$J_0) {
                            this.$T_0[$v_3] = $v_2;
                        }
                    }
                }
                this.$U_0.set_item($v_2.$J_0, $v_2);
            }
            else {
                this.$U_0.set_item($v_2.$J_0, $v_2);
            }
        }
    },
    
    hasMobileClientAccessForPrivilegeType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$hasMobileClientAccessForPrivilegeType(privilegeType) {
        if (this.$1P_0) {
            return privilegeType === 2;
        }
        return true;
    },
    
    hasMobileClientAccessForAccessRights: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$hasMobileClientAccessForAccessRights(accessRights) {
        if (this.$1P_0) {
            return accessRights === 1;
        }
        return true;
    },
    
    populateFromCache: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$populateFromCache(cachedEntityMetadata) {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$L_0)) {
            this.$L_0 = cachedEntityMetadata.$L_0;
        }
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$1B_0)) {
            this.$1B_0 = cachedEntityMetadata.$1B_0;
        }
        if (this.$1s_0 && (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$19_0) || Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$1A_0))) {
            this.$19_0 = cachedEntityMetadata.$19_0;
            this.$1A_0 = cachedEntityMetadata.$1A_0;
        }
    },
    
    removeAttributes: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadata$removeAttributes() {
        this.$T_0 = new Array(0);
        this.$U_0 = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
        this.$1e_0 = false;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadataCollection(entityMetadata, serverVersionStamp, deletedAttributeMetadataIds) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(serverVersionStamp, 'serverVersionStamp');
    this.$1M_0 = entityMetadata;
    this.$53_0 = serverVersionStamp;
    this.$4h_0 = deletedAttributeMetadataIds;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection.prototype = {
    $1M_0: null,
    $53_0: null,
    $4h_0: null,
    
    get_entities: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadataCollection$get_entities() {
        return this.$1M_0;
    },
    
    get_serverVersionStamp: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadataCollection$get_serverVersionStamp() {
        return this.$53_0;
    },
    
    get_deletedAttributeMetadataIds: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadataCollection$get_deletedAttributeMetadataIds() {
        return this.$4h_0;
    },
    
    get_count: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadataCollection$get_count() {
        return this.$1M_0.length;
    },
    
    get_item: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadataCollection$get_item(index) {
        return this.$1M_0[index];
    },
    set_item: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityMetadataCollection$set_item(index, value) {
        this.$1M_0[index] = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord(data, fields, fieldTypes, formattedValues, numericFormattedValues, relatedEntities, columnSet, clientRetrieveOptions) {
    if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.isInstanceOfType(data)) {
        fields = (data).$A_0;
        fieldTypes = (data).$6_0;
        formattedValues = (data).$P_0;
        numericFormattedValues = (data).$1V_0;
        relatedEntities = (data).$Q_0;
        clientRetrieveOptions = (data).$4_0;
        this.$W_0 = (data).$W_0;
    }
    else {
        this.$W_0 = data;
    }
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(this.$W_0, 'identifier');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(fields, 'fields');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(fieldTypes, 'fieldTypes');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(formattedValues, 'formattedValues');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(numericFormattedValues, 'numericFormattedValues');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(relatedEntities, 'relatedEntities');
    this.$A_0 = fields;
    this.$6_0 = fieldTypes;
    this.$P_0 = formattedValues;
    this.$1V_0 = numericFormattedValues;
    this.$Q_0 = relatedEntities;
    this.$3_0 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(columnSet)) ? columnSet : new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(new Array(0));
    this.updateColumnSet(this.get_fieldNames());
    this.$1K_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
    this.$1l_0 = {};
    this.$4_0 = clientRetrieveOptions;
    this.$S_0 = 0;
    var $v_0 = this.getValue('activitytypecode');
    if (this.$W_0.LogicalName === 'activitypointer' && $v_0) {
        this.$2F_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference($v_0, this.$W_0.Id);
    }
    else {
        this.$2F_0 = this.$W_0;
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$createFromObjectData(data) {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.createFromObjectData(data['identifier']);
    var $v_1 = data['fieldtypes'];
    var $v_2 = data['fields'];
    var $v_3 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFieldsFromObjectData($v_2, $v_1);
    var $v_4 = data['formattedfields'];
    var $v_5 = data['numericformattedfields'];
    var $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0));
    var $v_7;
    if ((('allcolumns') in data)) {
        $v_7 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
    }
    else {
        $v_7 = Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.createFromObjectData(data['columnset']);
    }
    var $v_8 = (('clientretrieveoptions') in data) ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.createFromObjectData(data['clientretrieveoptions']) : null;
    var $v_9 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord($v_0, $v_3, $v_1, $v_4, $v_5, $v_6, $v_7, $v_8);
    $v_9.$S_0 = data['accessrights'];
    return $v_9;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFieldsFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$createFieldsFromObjectData(fieldData, fieldTypes) {
    var $v_0 = {};
    var $$dict_3 = fieldData;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0[$v_1.key] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$38($v_1.value, fieldTypes[$v_1.key]);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$38 = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$$38($p0, $p1) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0)) {
        return null;
    }
    else {
        switch ($p1) {
            case 21:
                return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.createFromObjectData($p0);
            case 1:
            case 6:
            case 9:
                return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.createFromObjectData($p0);
            case 15:
                return Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData($p0);
            case 2:
                return new Date(Date.parse($p0));
            case 13:
            case 12:
            case 0:
            case 11:
                return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromObjectData($p0);
            case 10:
                return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData($p0);
            default:
                return $p0;
        }
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$4r = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$$4r($p0, $p1) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0)) {
        return null;
    }
    else {
        switch ($p1) {
            case 21:
                return ($p0).getObjectData();
            case 1:
            case 6:
            case 9:
                return ($p0).getObjectData();
            case 15:
                return ($p0).getObjectData();
            case 2:
                return $p0.toString();
            case 13:
            case 12:
            case 0:
            case 11:
                return ($p0).getObjectData();
            case 10:
                return ($p0).getObjectData();
            default:
                return $p0;
        }
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.prototype = {
    $W_0: null,
    $2F_0: null,
    $A_0: null,
    $P_0: null,
    $1V_0: null,
    $Q_0: null,
    $1K_0: null,
    $1l_0: null,
    $6_0: null,
    $3_0: null,
    $4_0: null,
    $S_0: 0,
    
    get_identifier: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_identifier() {
        return this.$W_0;
    },
    
    get_actionableIdentifier: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_actionableIdentifier() {
        return this.$2F_0;
    },
    
    get_fieldTypes: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_fieldTypes() {
        return this.$6_0;
    },
    
    get_formattedValues: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_formattedValues() {
        return this.$P_0;
    },
    
    get_numericFormattedValues: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_numericFormattedValues() {
        return this.$1V_0;
    },
    
    get_relatedEntities: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_relatedEntities() {
        return this.$Q_0;
    },
    
    get_fieldNames: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_fieldNames() {
        var $v_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
        var $$dict_1 = this.$A_0;
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            $v_0.add($v_1.key);
        }
        return $v_0.toArray();
    },
    
    get_changedFieldNames: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_changedFieldNames() {
        return this.$1K_0;
    },
    
    get_cleanFields: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_cleanFields() {
        return this.$1l_0;
    },
    
    get_columnSet: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_columnSet() {
        return this.$3_0;
    },
    
    get_directColumnSet: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_directColumnSet() {
        if (this.$3_0 === Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance()) {
            return this.$3_0;
        }
        else {
            var $v_0 = this.$3_0;
            var $v_1 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
            for (var $$arr_2 = $v_0.$V_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_2 = $$arr_2[$$idx_4];
                if (this.$6_0[$v_2] !== 21) {
                    $v_1.add($v_2);
                }
            }
            return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_1.toArray());
        }
    },
    
    get_key: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_key() {
        return this.$W_0.get_key();
    },
    
    get_clientRetrieveOptions: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_clientRetrieveOptions() {
        return this.$4_0;
    },
    set_clientRetrieveOptions: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$set_clientRetrieveOptions(value) {
        this.$4_0 = value;
        for (var $$arr_1 = this.$Q_0.$O_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            $v_0.get_value().set_clientRetrieveOptions(value);
        }
        return value;
    },
    
    get_accessRights: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$get_accessRights() {
        return this.$S_0;
    },
    set_accessRights: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$set_accessRights(value) {
        this.$S_0 = value;
        return value;
    },
    
    createFieldFromObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$createFieldFromObjectData(fieldName, fieldValue) {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$38(fieldValue, this.$6_0[fieldName]);
    },
    
    clone: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$clone() {
        var $v_0 = this.getObjectData();
        var $v_1 = $v_0['formattedfields'];
        var $v_2 = {};
        var $$dict_3 = $v_1;
        for (var $$key_4 in $$dict_3) {
            var $v_5 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_2[$v_5.key] = $v_5.value;
        }
        var $v_3 = $v_0['numericformattedfields'];
        var $v_4 = {};
        var $$dict_8 = $v_3;
        for (var $$key_9 in $$dict_8) {
            var $v_6 = { key: $$key_9, value: $$dict_8[$$key_9] };
            $v_4[$v_6.key] = $v_6.value;
        }
        $v_0['formattedfields'] = $v_2;
        $v_0['numericformattedfields'] = $v_4;
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData($v_0);
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$getObjectData() {
        var $v_0 = {};
        $v_0['identifier'] = this.$W_0.getObjectData();
        $v_0['fields'] = this.$59_0();
        $v_0['fieldtypes'] = this.$6_0;
        $v_0['formattedfields'] = this.$P_0;
        $v_0['numericformattedfields'] = this.$1V_0;
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(this.$3_0)) {
            $v_0['allcolumns'] = true;
        }
        else {
            $v_0['columnset'] = (this.$3_0).getObjectData();
        }
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$4_0)) {
            $v_0['clientretrieveoptions'] = this.$4_0.getObjectData();
        }
        $v_0['accessrights'] = this.$S_0;
        return $v_0;
    },
    
    $59_0: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$$59_0() {
        var $v_0 = {};
        var $$dict_1 = this.$A_0;
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            $v_0[$v_1.key] = this.getFieldObjectData($v_1.key);
        }
        return $v_0;
    },
    
    getFieldObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$getFieldObjectData(fieldName) {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$4r(this.getValue(fieldName), this.$6_0[fieldName]);
    },
    
    hasValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$hasValue(fieldName) {
        return ((fieldName) in this.$A_0);
    },
    
    hasField: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$hasField(fieldName) {
        return ((fieldName) in this.$6_0);
    },
    
    hasFieldType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$hasFieldType(fieldType) {
        var $$dict_1 = this.$6_0;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if ($v_0.value === fieldType) {
                return true;
            }
        }
        return false;
    },
    
    getValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$getValue(fieldName) {
        return this.$A_0[fieldName];
    },
    
    getFormattedValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$getFormattedValue(fieldName) {
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$P_0[fieldName])) {
            return this.$P_0[fieldName];
        }
        if (this.$6_0[fieldName] === 21) {
            return (this.getValue(fieldName)).$15_0;
        }
        else {
            return this.getValue(fieldName);
        }
    },
    
    getNumericFormattedValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$getNumericFormattedValue(fieldName) {
        return this.$1V_0[fieldName] || this.getFormattedValue(fieldName);
    },
    
    setValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$setValue(fieldName, value) {
        if (!((fieldName) in this.$6_0)) {
            throw Error.argumentOutOfRange(fieldName);
        }
        if (Microsoft.Dynamics.Client.Core.Framework.IPicklistItem.isInstanceOfType(value)) {
            this.$A_0[fieldName] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromPicklistItem(value);
        }
        else {
            this.$A_0[fieldName] = value;
        }
        this.updateColumnSet([ fieldName ]);
    },
    
    markFieldChanged: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$markFieldChanged(fieldName) {
        if (!this.$1K_0.contains(fieldName)) {
            this.$1l_0[fieldName] = this.$A_0[fieldName];
            this.$1K_0.add(fieldName);
        }
    },
    
    resetChanges: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$resetChanges() {
        this.$1K_0.clear();
        this.$1l_0 = {};
    },
    
    mergeChanges: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$mergeChanges(changes) {
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$4_0)) {
            this.$4_0.update(changes.$4_0);
        }
        else {
            this.$4_0 = changes.$4_0;
        }
        this.$S_0 = changes.$S_0;
        var $$dict_1 = changes.$A_0;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if ((($v_0.key) in this.$A_0)) {
                if (!Microsoft.Dynamics.Client.Core.Framework.ObjectComparer.areValuesEqual(this.$A_0[$v_0.key], $v_0.value)) {
                    this.$A_0[$v_0.key] = $v_0.value;
                }
            }
            else {
                this.$A_0[$v_0.key] = $v_0.value;
            }
        }
        var $$dict_4 = changes.$6_0;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
            if (!(($v_1.key) in this.$6_0)) {
                this.$6_0[$v_1.key] = changes.$6_0[$v_1.key];
            }
        }
        var $$dict_7 = changes.$P_0;
        for (var $$key_8 in $$dict_7) {
            var $v_2 = { key: $$key_8, value: $$dict_7[$$key_8] };
            if ((($v_2.key) in this.$P_0)) {
                if (!Microsoft.Dynamics.Client.Core.Framework.ObjectComparer.areValuesEqual(this.$P_0[$v_2.key], $v_2.value)) {
                    this.$P_0[$v_2.key] = $v_2.value;
                }
            }
            else {
                this.$P_0[$v_2.key] = $v_2.value;
            }
        }
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(changes.$3_0)) {
            this.updateColumnSet(changes.$3_0);
        }
        else {
            this.updateColumnSet(this.get_fieldNames());
        }
    },
    
    initializeValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$initializeValue(fieldName, value, attributeType) {
        this.$A_0[fieldName] = value;
        if (!((fieldName) in this.$6_0)) {
            this.$6_0[fieldName] = attributeType;
        }
        this.updateColumnSet([ fieldName ]);
    },
    
    resetMetadata: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$resetMetadata(updatedFieldTypes) {
        var $$dict_1 = this.$6_0;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if ($v_0.value === 21 || !(($v_0.key) in updatedFieldTypes)) {
                updatedFieldTypes[$v_0.key] = $v_0.value;
            }
        }
        this.$6_0 = updatedFieldTypes;
    },
    
    updateColumnSet: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityRecord$updateColumnSet(arg, relatedEntityQueries) {
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(this.$3_0)) {
            return;
        }
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(arg)) {
            this.$3_0 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
        }
        else {
            var $v_0;
            if (Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.isInstanceOfType(arg)) {
                $v_0 = (arg).$V_0;
            }
            else {
                $v_0 = arg;
            }
            var $v_1 = this.$3_0;
            for (var $$arr_4 = $v_0, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_2 = $$arr_4[$$idx_6];
                if (!Array.contains($v_1.$V_0, $v_2)) {
                    Array.add($v_1.$V_0, $v_2);
                }
            }
        }
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(relatedEntityQueries)) {
            for (var $$arr_8 = relatedEntityQueries, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
                var $v_3 = $$arr_8[$$idx_A];
                var $v_4 = this.$Q_0.getByRelationship($v_3.$Z_2);
                for (var $$arr_D = $v_4.get_entities(), $$len_E = $$arr_D.length, $$idx_F = 0; $$idx_F < $$len_E; ++$$idx_F) {
                    var $v_5 = $$arr_D[$$idx_F];
                    $v_5.updateColumnSet($v_3.$3_0);
                }
            }
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference(logicalName, id, name) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(logicalName, 'logicalName');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(id, 'id');
    this.LogicalName = logicalName;
    this.Id = id;
    this.Name = OptionalParameter.getValue(String, name);
    this.TypeName = logicalName;
    this.TypeDisplayName = logicalName;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.get_empty = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$get_empty() {
    return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.$12 || (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.$12 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference('', Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty(), ''));
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$createFromObjectData(data) {
    var $v_0 = data['logicalname'];
    var $v_1 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['id']);
    var $v_2 = data['name'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference($v_0, $v_1, $v_2);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.$54 = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$$54($p0) {
    return $p0.substr(0, 1).toUpperCase() + $p0.substr(1);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.prototype = {
    Id: null,
    LogicalName: null,
    Name: null,
    TypeCode: 0,
    TypeDisplayName: null,
    TypeName: null,
    
    get_key: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$get_key() {
        return this.Id.toString();
    },
    
    get_identifier: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$get_identifier() {
        return this.Id.toString();
    },
    
    get_modelType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$get_modelType() {
        return this.LogicalName;
    },
    
    get_displayName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$get_displayName() {
        return this.Name;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$getObjectData() {
        var $v_0 = {};
        $v_0['logicalname'] = this.LogicalName;
        $v_0['id'] = this.Id.getObjectData();
        $v_0['name'] = this.Name;
        return $v_0;
    },
    
    equals: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$equals(other) {
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.isInstanceOfType(other)) {
            var $v_0 = other;
            return $v_0.LogicalName === this.LogicalName && this.Id.equals($v_0.Id) && this.Name === $v_0.Name;
        }
        return false;
    },
    
    getHashCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$getHashCode() {
        return (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(this.LogicalName)) ? Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.hashCode(this.LogicalName) ^ this.Id.getHashCode() : 0;
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$toString() {
        return String.format('{0}:{1}', this.LogicalName, this.Id.toString());
    },
    
    getValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$getValue(fieldName) {
        return this[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.$54(fieldName)];
    },
    
    setValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_EntityReference$setValue(fieldName, value) {
        this[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.$54(fieldName)] = value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ErrorInfo = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ErrorInfo(resourceList, errorCode) {
    this.$44_0 = resourceList;
    this.$H_0 = errorCode;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ErrorInfo.prototype = {
    $44_0: null,
    $H_0: null,
    
    get_resourceList: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ErrorInfo$get_resourceList() {
        return this.$44_0;
    },
    set_resourceList: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ErrorInfo$set_resourceList(value) {
        this.$44_0 = value;
        return value;
    },
    
    get_errorCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ErrorInfo$get_errorCode() {
        return this.$H_0;
    },
    set_errorCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ErrorInfo$set_errorCode(value) {
        this.$H_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleResponseItem = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleResponseItem(fault, requestIndex, response) {
    this.$2u_0 = fault;
    this.$41_0 = requestIndex;
    this.$45_0 = response;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleResponseItem.prototype = {
    $2u_0: null,
    $41_0: 0,
    $45_0: null,
    
    get_fault: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleResponseItem$get_fault() {
        return this.$2u_0;
    },
    set_fault: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleResponseItem$set_fault(value) {
        this.$2u_0 = value;
        return value;
    },
    
    get_requestIndex: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleResponseItem$get_requestIndex() {
        return this.$41_0;
    },
    set_requestIndex: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleResponseItem$set_requestIndex(value) {
        this.$41_0 = value;
        return value;
    },
    
    get_response: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleResponseItem$get_response() {
        return this.$45_0;
    },
    set_response: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleResponseItem$set_response(value) {
        this.$45_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleSettings = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleSettings(continueOnError, returnResponses) {
    this.$2V_0 = continueOnError;
    this.$4A_0 = returnResponses;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleSettings.prototype = {
    $2V_0: false,
    $4A_0: false,
    
    get_continueOnError: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleSettings$get_continueOnError() {
        return this.$2V_0;
    },
    set_continueOnError: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleSettings$set_continueOnError(value) {
        this.$2V_0 = value;
        return value;
    },
    
    get_returnResponses: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleSettings$get_returnResponses() {
        return this.$4A_0;
    },
    set_returnResponses: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ExecuteMultipleSettings$set_returnResponses(value) {
        this.$4A_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata(label, value, state, allowedStatusTransition) {
    this.$1Q_0 = label;
    this.$l_0 = value;
    this.$j_0 = state;
    this.$1I_0 = allowedStatusTransition;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromPicklistItem = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$createFromPicklistItem(item) {
    if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.isInstanceOfType(item)) {
        return item;
    }
    else {
        var $v_0 = item.get_label();
        var $v_1 = Number.parseInvariant(item.get_valueString());
        var $v_2 = -1;
        var $v_3 = null;
        return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata($v_0, $v_1, $v_2, $v_3);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$createFromObjectData(data) {
    var $v_0 = data['label'];
    var $v_1 = data['value'];
    var $v_2 = (('state') in data) ? data['state'] : -1;
    var $v_3 = (('allowedstatustransitions') in data) ? data['allowedstatustransitions'] : null;
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata($v_0, $v_1, $v_2, $v_3);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.prototype = {
    $1Q_0: null,
    $l_0: 0,
    $j_0: 0,
    $1I_0: null,
    
    get_label: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$get_label() {
        return this.$1Q_0;
    },
    set_label: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$set_label(value) {
        this.$1Q_0 = value;
        return value;
    },
    
    get_valueString: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$get_valueString() {
        return this.$l_0.toString();
    },
    set_valueString: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$set_valueString(value) {
        this.$l_0 = Number.parseInvariant(value);
        return value;
    },
    
    get_allowedStatusTransitions: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$get_allowedStatusTransitions() {
        return this.$1I_0;
    },
    set_allowedStatusTransitions: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$set_allowedStatusTransitions(value) {
        this.$1I_0 = value;
        return value;
    },
    
    get_value: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$get_value() {
        return this.$l_0;
    },
    set_value: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$set_value(value) {
        this.$l_0 = value;
        return value;
    },
    
    get_state: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$get_state() {
        return this.$j_0;
    },
    set_state: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$set_state(value) {
        this.$j_0 = value;
        return value;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$getObjectData() {
        var $v_0 = {};
        $v_0['label'] = this.$1Q_0;
        $v_0['value'] = this.$l_0;
        $v_0['state'] = this.$j_0;
        $v_0['allowedstatustransitions'] = this.$1I_0;
        return $v_0;
    },
    
    getValue: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$getValue(fieldName) {
        if (fieldName === Microsoft.Dynamics.Client.Core.Framework.FieldFormat.label || fieldName === 'label') {
            return this.$1Q_0;
        }
        else if (fieldName === Microsoft.Dynamics.Client.Core.Framework.FieldFormat.value || fieldName === 'value') {
            return this.$l_0;
        }
        else if (fieldName === Microsoft.Dynamics.Client.Core.Framework.FieldFormat.state || fieldName === 'state') {
            return this.$j_0;
        }
        else if (fieldName === Microsoft.Dynamics.Client.Core.Framework.FieldFormat.allowedStatusTransitions || fieldName === 'allowedstatustransitions') {
            return this.$1I_0;
        }
        else {
            throw Error.argumentOutOfRange('fieldName', fieldName);
        }
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionMetadata$toString() {
        return this.$j_0.toString();
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionSetMetadata(options) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(options, 'options');
    this.$20_0 = options;
    this.$4x_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.$56(options);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionSetMetadata$createFromObjectData(data) {
    var $v_0 = {};
    var $$dict_2 = data['optionsindisplayorder'];
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        var $v_2 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromObjectData($v_1.value);
        $v_0[$v_1.key] = $v_2;
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata($v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.$56 = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionSetMetadata$$56($p0) {
    var $v_0 = {};
    var $$dict_2 = $p0;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        var $v_2 = $v_1.value;
        $v_0[$v_2.get_valueString()] = $v_2;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.prototype = {
    $4x_0: null,
    $20_0: null,
    
    get_options: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionSetMetadata$get_options() {
        return this.$4x_0;
    },
    
    get_optionsInDisplayOrder: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionSetMetadata$get_optionsInDisplayOrder() {
        return this.$20_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OptionSetMetadata$getObjectData() {
        var $v_0 = {};
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$20_0)) {
            var $v_1 = {};
            var $$dict_2 = this.$20_0;
            for (var $$key_3 in $$dict_2) {
                var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
                var $v_3 = $v_2.value;
                $v_1[$v_2.key] = $v_3.getObjectData();
            }
            $v_0['optionsindisplayorder'] = $v_1;
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings(organizationId, organizationName, languageCode, enabledLanguages, currencyDisplayOption, blockedAttachments, maxUploadFileSize, reportScriptErrors, isAutoSaveEnabled, isDuplicateDetectionEnabled, isDuplicateDetectionEnabledForOnlineCreateUpdate, orgCultureInfoLcid, fiscalCalendarStart, isSOPIntegrationEnabled, baseCurrencyId, organizationUniqueName, useSkypeProtocol, defaultCountryCode, pricingDecimalPrecision) {
    this.$1S_0 = 5242880;
    this.$1q_0 = new Date(0, 0, 1);
    this.$t_0 = organizationId;
    this.$21_0 = organizationName;
    this.$1w_0 = languageCode;
    this.$2n_0 = enabledLanguages;
    this.$2b_0 = currencyDisplayOption;
    this.$1h_0 = blockedAttachments;
    this.$1S_0 = maxUploadFileSize;
    this.$o_0 = reportScriptErrors;
    this.$22_0 = orgCultureInfoLcid;
    this.$1q_0 = fiscalCalendarStart;
    this.$3D_0 = isAutoSaveEnabled;
    this.$1t_0 = isDuplicateDetectionEnabled;
    this.$1u_0 = isDuplicateDetectionEnabledForOnlineCreateUpdate;
    this.$3R_0 = isSOPIntegrationEnabled;
    this.$2M_0 = baseCurrencyId;
    this.$3j_0 = organizationUniqueName;
    this.$4b_0 = useSkypeProtocol;
    this.$2f_0 = defaultCountryCode;
    this.$3s_0 = pricingDecimalPrecision;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.createInstance = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$createInstance(organizationId, entity) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings(organizationId, entity.getValue('name'), entity.getValue('languagecode'), entity.getValue('enabledlanguages'), (entity.getValue('currencydisplayoption')).$l_0, entity.getValue('blockedattachments'), entity.getValue('maxuploadfilesize'), (entity.getValue('reportscripterrors')).$l_0, entity.getValue('isautosaveenabled'), entity.getValue('isDuplicateDetectionEnabled'), entity.getValue('isDuplicateDetectionEnabledForOnlineCreateUpdate'), entity.getValue('orgcultureinfolcid'), entity.getValue('fiscalcalendarstart'), entity.getValue('issopintegrationenabled'), entity.getValue('basecurrencyid'), entity.getValue('organizationuniquename'), entity.getValue('useskypeprotocol'), entity.getValue('defaultcountrycode'), entity.getValue('pricingdecimalprecision'));
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$createFromObjectData(data) {
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['organizationid']);
    var $v_1 = data['organizationname'];
    var $v_2 = data['fiscalcalendarstart'];
    var $v_3 = data['issopintegrationenabled'];
    var $v_4 = data['languagecode'];
    var $v_5 = data['enabledlanguages'];
    var $v_6 = data['currencydisplayoption'];
    var $v_7 = data['blockedattachments'];
    var $v_8 = data['maxuploadfilesize'];
    var $v_9 = data['reportscripterrors'];
    var $v_A = data['isAutoSaveEnabled'];
    var $v_B = data['isDuplicateDetectionEnabled'];
    var $v_C = data['isDuplicateDetectionEnabledForOnlineCreateUpdate'];
    var $v_D = data['orgcultureinfolcid'];
    var $v_E = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['basecurrencyid']);
    var $v_F = data['organizationuniquename'];
    var $v_G = data['useskypeprotocol'];
    var $v_H = data['defaultcountrycode'];
    var $v_I = data['pricingdecimalprecision'];
    var $v_J = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings($v_0, $v_1, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A, $v_B, $v_C, $v_D, $v_2, $v_3, $v_E, $v_F, $v_G, $v_H, $v_I);
    $v_J.$y_0 = data['webservicecallretrypolicies'];
    return $v_J;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.prototype = {
    $t_0: null,
    $21_0: null,
    $3j_0: null,
    $1w_0: 0,
    $2n_0: null,
    $2b_0: 0,
    $1h_0: null,
    $o_0: 0,
    $22_0: 0,
    $3D_0: true,
    $1t_0: false,
    $1u_0: false,
    $3R_0: false,
    $2M_0: null,
    $4b_0: false,
    $2f_0: null,
    $3s_0: 0,
    $y_0: null,
    
    get_organizationId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_organizationId() {
        return this.$t_0;
    },
    
    get_organizationName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_organizationName() {
        return this.$21_0;
    },
    
    get_organizationUniqueName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_organizationUniqueName() {
        return this.$3j_0;
    },
    
    get_languageCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_languageCode() {
        return this.$1w_0;
    },
    
    get_enabledLanguages: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_enabledLanguages() {
        return this.$2n_0;
    },
    
    get_currencyDisplayOption: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_currencyDisplayOption() {
        return this.$2b_0;
    },
    
    get_blockedAttachments: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_blockedAttachments() {
        return this.$1h_0;
    },
    
    get_maxUploadFileSize: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_maxUploadFileSize() {
        return this.$1S_0;
    },
    
    get_reportScriptErrors: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_reportScriptErrors() {
        return this.$o_0;
    },
    
    get_orgCultureInfoLcid: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_orgCultureInfoLcid() {
        return this.$22_0;
    },
    
    get_fiscalCalendarStart: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_fiscalCalendarStart() {
        return this.$1q_0;
    },
    
    get_isAutoSaveEnabled: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_isAutoSaveEnabled() {
        return this.$3D_0;
    },
    
    get_isDuplicateDetectionEnabled: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_isDuplicateDetectionEnabled() {
        return this.$1t_0;
    },
    
    get_isDuplicateDetectionEnabledForOnlineCreateUpdate: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_isDuplicateDetectionEnabledForOnlineCreateUpdate() {
        return this.$1u_0;
    },
    
    get_isSOPIntegrationEnabled: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_isSOPIntegrationEnabled() {
        return this.$3R_0;
    },
    
    get_baseCurrencyId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_baseCurrencyId() {
        return this.$2M_0;
    },
    
    get_defaultCountryCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_defaultCountryCode() {
        return this.$2f_0;
    },
    
    get_useSkypeProtocol: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_useSkypeProtocol() {
        return this.$4b_0;
    },
    
    get_pricingDecimalPrecision: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_pricingDecimalPrecision() {
        return this.$3s_0;
    },
    
    get_webServiceCallRetryPolicies: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$get_webServiceCallRetryPolicies() {
        return this.$y_0;
    },
    set_webServiceCallRetryPolicies: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$set_webServiceCallRetryPolicies(value) {
        this.$y_0 = value;
        return value;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$getObjectData() {
        var $v_0 = {};
        $v_0['organizationid'] = this.$t_0.getObjectData();
        $v_0['organizationname'] = this.$21_0;
        $v_0['languagecode'] = this.$1w_0;
        $v_0['enabledlanguages'] = this.$2n_0;
        $v_0['currencydisplayoption'] = this.$2b_0;
        $v_0['blockedattachments'] = this.$1h_0;
        $v_0['maxuploadfilesize'] = this.$1S_0;
        $v_0['reportscripterrors'] = this.$o_0;
        $v_0['orgcultureinfolcid'] = this.$22_0;
        $v_0['fiscalcalendarstart'] = this.$1q_0;
        $v_0['issopintegrationenabled'] = this.$3R_0;
        $v_0['basecurrencyid'] = this.$2M_0.getObjectData();
        $v_0['webservicecallretrypolicies'] = this.$y_0;
        $v_0['isAutoSaveEnabled'] = this.$3D_0;
        $v_0['isDuplicateDetectionEnabled'] = this.$1t_0;
        $v_0['isDuplicateDetectionEnabledForOnlineCreateUpdate'] = this.$1u_0;
        $v_0['organizationuniquename'] = this.$3j_0;
        $v_0['useskypeprotocol'] = this.$4b_0;
        $v_0['defaultcountrycode'] = this.$2f_0;
        $v_0['pricingdecimalprecision'] = this.$3s_0;
        return $v_0;
    },
    
    getWebServiceCallRetryPolicy: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_OrganizationSettings$getWebServiceCallRetryPolicy(webServiceUrl) {
        if (!this.$y_0) {
            return null;
        }
        for (var $v_0 = 0; $v_0 < this.$y_0.length; $v_0++) {
            var $v_1 = this.$y_0[$v_0];
            if (webServiceUrl.toLowerCase().indexOf($v_1.WebServiceUrl.toLowerCase()) >= 0) {
                return $v_1;
            }
        }
        return null;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResult = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResult(entityName, data, errorCode) {
    this.$9_0 = entityName;
    this.$1L_0 = data;
    this.$H_0 = errorCode;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResult.prototype = {
    $1L_0: null,
    $9_0: null,
    $H_0: 0,
    
    get_entityLogicalName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResult$get_entityLogicalName() {
        return this.$9_0;
    },
    
    get_errorCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResult$get_errorCode() {
        return this.$H_0;
    },
    
    get_data: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResult$get_data() {
        return this.$1L_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResultCollection(entities) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(entities, 'entities');
    this.$3w_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResult))(entities);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection.createFromEntities = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResultCollection$createFromEntities(entities) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection(entities);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection.prototype = {
    $3w_0: null,
    
    get_quickFindResults: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResultCollection$get_quickFindResults() {
        return this.$3w_0;
    },
    
    get_count: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_QuickFindResultCollection$get_count() {
        return this.$3w_0.get_count();
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection(entityCollections) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(entityCollections, 'entityCollections');
    this.$O_0 = entityCollections;
    var $v_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery))();
    for (var $$arr_2 = this.$O_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.add(($v_1.get_value()).$Y_0);
    }
    this.$4z_0 = $v_0.toArray();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection$createFromObjectData(data) {
    var $v_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection)))();
    var $v_1 = data['entitycollections'];
    for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        var $v_3 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.createFromObjectData($v_2['key']);
        var $v_4 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData($v_2['value']);
        $v_0.add(new (Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))($v_3, $v_4));
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection($v_0.toArray());
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection.prototype = {
    $O_0: null,
    $4z_0: null,
    
    get_entityCollections: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection$get_entityCollections() {
        return this.$O_0;
    },
    
    get_relatedEntityQueries: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection$get_relatedEntityQueries() {
        return this.$4z_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection$getObjectData() {
        var $v_0 = {};
        var $v_1 = [];
        for (var $$arr_2 = this.$O_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            var $v_3 = {};
            $v_3['key'] = $v_2.get_key().getObjectData();
            $v_3['value'] = $v_2.get_value().getObjectData();
            Array.add($v_1, $v_3);
        }
        $v_0['entitycollections'] = $v_1;
        return $v_0;
    },
    
    getByRelationship: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection$getByRelationship(index) {
        for (var $$arr_1 = this.$O_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.get_key().equals(index)) {
                return $v_0.get_value();
            }
        }
        return null;
    },
    
    getByRelationshipName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection$getByRelationshipName(relationshipName) {
        for (var $$arr_1 = this.$O_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.get_key().$1a_0 === relationshipName) {
                return $v_0.get_value();
            }
        }
        return null;
    },
    
    addRelationship: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RelatedEntityCollection$addRelationship(index, value) {
        for (var $v_0 = 0; $v_0 < this.$O_0.length; $v_0++) {
            if (this.$O_0[$v_0].get_key().equals(index)) {
                this.$O_0[$v_0] = new (Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))(index, value);
                return;
            }
        }
        Array.add(this.$O_0, new (Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))(index, value));
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship(schemaName, primaryEntityRole) {
    this.$1a_0 = schemaName;
    this.$1X_0 = (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(primaryEntityRole)) ? -1 : primaryEntityRole;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship$createFromObjectData(data) {
    var $v_0 = data['role'];
    var $v_1 = data['schemaname'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship($v_1, $v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.prototype = {
    $1a_0: null,
    $1X_0: 0,
    
    get_schemaName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship$get_schemaName() {
        return this.$1a_0;
    },
    
    get_primaryEntityRole: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship$get_primaryEntityRole() {
        return this.$1X_0;
    },
    set_primaryEntityRole: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship$set_primaryEntityRole(value) {
        this.$1X_0 = value;
        return value;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship$getObjectData() {
        var $v_0 = {};
        $v_0['schemaname'] = this.$1a_0;
        $v_0['role'] = this.$1X_0;
        return $v_0;
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship$toString() {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole.toString(this.$1X_0) + ',' + this.$1a_0;
    },
    
    equals: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_Relationship$equals(other) {
        return !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(other) && other.toString() === this.toString();
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ResourceInfo = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ResourceInfo(id, displayName, entityName) {
    this.$B_0 = id;
    this.$L_0 = displayName;
    this.$2r_0 = entityName;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ResourceInfo.prototype = {
    $B_0: null,
    $L_0: null,
    $2r_0: null,
    
    get_id: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ResourceInfo$get_id() {
        return this.$B_0;
    },
    set_id: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ResourceInfo$set_id(value) {
        this.$B_0 = value;
        return value;
    },
    
    get_displayName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ResourceInfo$get_displayName() {
        return this.$L_0;
    },
    set_displayName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ResourceInfo$set_displayName(value) {
        this.$L_0 = value;
        return value;
    },
    
    get_entityName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ResourceInfo$get_entityName() {
        return this.$2r_0;
    },
    set_entityName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ResourceInfo$set_entityName(value) {
        this.$2r_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RolePrivilege(privilegeId, businessUnitId, depth) {
    this.$2i_0 = depth;
    this.$u_0 = privilegeId;
    this.$10_0 = businessUnitId;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RolePrivilege$createFromObjectData(data) {
    var $v_0 = data['depth'];
    var $v_1 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['privilegeid']);
    var $v_2 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['businessunitid']);
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege($v_1, $v_2, $v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.prototype = {
    $2i_0: 0,
    $u_0: null,
    $10_0: null,
    
    get_depth: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RolePrivilege$get_depth() {
        return this.$2i_0;
    },
    
    get_privilegeId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RolePrivilege$get_privilegeId() {
        return this.$u_0;
    },
    
    get_businessUnitId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RolePrivilege$get_businessUnitId() {
        return this.$10_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_RolePrivilege$getObjectData() {
        var $v_0 = {};
        $v_0['depth'] = this.$2i_0;
        $v_0['privilegeid'] = this.$u_0.getObjectData();
        $v_0['businessunitid'] = this.$10_0.getObjectData();
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata(name, privilegeId, privilegeType, canBeBasic, canBeLocal, canBeDeep, canBeGlobal) {
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(name, 'name');
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(privilegeId, 'privilegeId');
    this.$1U_0 = name;
    this.$u_0 = privilegeId;
    this.$26_0 = privilegeType;
    this.$2P_0 = canBeBasic;
    this.$2S_0 = canBeLocal;
    this.$2Q_0 = canBeDeep;
    this.$2R_0 = canBeGlobal;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.getPrivilegeTypeKey = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$getPrivilegeTypeKey(privilegeType) {
    return (privilegeType).toString();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$createFromObjectData(data) {
    var $v_0 = data['name'];
    var $v_1 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['privilegeid']);
    var $v_2 = data['privilegetype'];
    var $v_3 = data['canbebasic'];
    var $v_4 = data['canbelocal'];
    var $v_5 = data['canbedeep'];
    var $v_6 = data['canbeglobal'];
    var $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6);
    return $v_7;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.prototype = {
    $1U_0: null,
    $u_0: null,
    $26_0: 0,
    $2P_0: false,
    $2S_0: false,
    $2Q_0: false,
    $2R_0: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_name() {
        return this.$1U_0;
    },
    
    get_privilegeId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_privilegeId() {
        return this.$u_0;
    },
    
    get_privilegeType: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_privilegeType() {
        return this.$26_0;
    },
    
    get_privilegeTypeKey: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_privilegeTypeKey() {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.getPrivilegeTypeKey(this.$26_0);
    },
    
    get_canBeBasic: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_canBeBasic() {
        return this.$2P_0;
    },
    
    get_canBeLocal: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_canBeLocal() {
        return this.$2S_0;
    },
    
    get_canBeDeep: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_canBeDeep() {
        return this.$2Q_0;
    },
    
    get_canBeGlobal: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$get_canBeGlobal() {
        return this.$2R_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SecurityPrivilegeMetadata$getObjectData() {
        var $v_0 = {};
        $v_0['name'] = this.$1U_0;
        $v_0['privilegeid'] = this.$u_0.getObjectData();
        $v_0['privilegetype'] = this.$26_0;
        $v_0['canbebasic'] = this.$2P_0;
        $v_0['canbelocal'] = this.$2S_0;
        $v_0['canbedeep'] = this.$2Q_0;
        $v_0['canbeglobal'] = this.$2R_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ServerContext(serverVersion, databaseVersion) {
    this.$2A_0 = serverVersion;
    this.$1o_0 = databaseVersion;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ServerContext$createFromObjectData(data) {
    var $v_0 = data['serverversion'];
    var $v_1 = data['databaseversion'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext($v_0, $v_1);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.prototype = {
    $2A_0: null,
    $1o_0: null,
    
    get_serverVersion: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ServerContext$get_serverVersion() {
        return this.$2A_0;
    },
    
    get_databaseVersion: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ServerContext$get_databaseVersion() {
        return this.$1o_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ServerContext$getObjectData() {
        var $v_0 = {};
        $v_0['serverversion'] = this.$2A_0;
        $v_0['databaseversion'] = this.$1o_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SessionStateRecord(key, stateData) {
    this.$16_0 = key;
    this.$4N_0 = stateData;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SessionStateRecord$createFromObjectData(data) {
    var $v_0 = data['statekey'];
    var $v_1 = data['statedata'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord($v_0, $v_1);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.prototype = {
    $16_0: null,
    $4N_0: null,
    
    get_stateData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SessionStateRecord$get_stateData() {
        return this.$4N_0;
    },
    
    get_key: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SessionStateRecord$get_key() {
        return this.$16_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_SessionStateRecord$getObjectData() {
        var $v_0 = {};
        $v_0['statekey'] = this.$16_0;
        $v_0['statedata'] = this.$4N_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TimeZoneDefinition(bias, timeZoneCode, userInterfaceName) {
    this.$2N_0 = bias;
    this.$4Q_0 = timeZoneCode;
    this.$4a_0 = userInterfaceName;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TimeZoneDefinition$createFromObjectData(data) {
    var $v_0 = data['bias'];
    var $v_1 = data['timezonecode'];
    var $v_2 = data['userinterfacename'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition($v_0, $v_1, $v_2);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.prototype = {
    $2N_0: 0,
    $4Q_0: 0,
    $4a_0: null,
    
    get_bias: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TimeZoneDefinition$get_bias() {
        return this.$2N_0;
    },
    
    get_timeZoneCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TimeZoneDefinition$get_timeZoneCode() {
        return this.$4Q_0;
    },
    
    get_userInterfaceName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TimeZoneDefinition$get_userInterfaceName() {
        return this.$4a_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TimeZoneDefinition$getObjectData() {
        var $v_0 = {};
        $v_0['bias'] = this.$2N_0;
        $v_0['timezonecode'] = this.$4Q_0;
        $v_0['userinterfacename'] = this.$4a_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TraceInfo = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TraceInfo(errorInfoList) {
    this.$2t_0 = errorInfoList;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TraceInfo.prototype = {
    $2t_0: null,
    
    get_errorInfoList: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TraceInfo$get_errorInfoList() {
        return this.$2t_0;
    },
    set_errorInfoList: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TraceInfo$set_errorInfoList(value) {
        this.$2t_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency(transactionCurrencyId, currencyName, currencySymbol, currencyCode, currencyPrecision) {
    this.$p_0 = transactionCurrencyId;
    this.$2c_0 = currencyName;
    this.$1n_0 = currencySymbol;
    this.$1m_0 = currencyCode;
    this.$2d_0 = currencyPrecision;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$createFromObjectData(data) {
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['transactioncurrencyid']);
    var $v_1 = data['currencyname'];
    var $v_2 = data['currencysymbol'];
    var $v_3 = data['currencycode'];
    var $v_4 = data['currencyprecision'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency($v_0, $v_1, $v_2, $v_3, $v_4);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.prototype = {
    $p_0: null,
    $2c_0: null,
    $1n_0: null,
    $1m_0: null,
    $2d_0: 0,
    
    get_transactionCurrencyId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$get_transactionCurrencyId() {
        return this.$p_0;
    },
    
    get_currencyName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$get_currencyName() {
        return this.$2c_0;
    },
    
    get_currencySymbol: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$get_currencySymbol() {
        return this.$1n_0;
    },
    
    get_currencyCode: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$get_currencyCode() {
        return this.$1m_0;
    },
    
    get_currencyPrecision: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$get_currencyPrecision() {
        return this.$2d_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$getObjectData() {
        var $v_0 = {};
        $v_0['transactioncurrencyid'] = this.$p_0.getObjectData();
        $v_0['currencyname'] = this.$2c_0;
        $v_0['currencysymbol'] = this.$1n_0;
        $v_0['currencycode'] = this.$1m_0;
        $v_0['currencyprecision'] = this.$2d_0;
        return $v_0;
    },
    
    getCurrencyDisplaySymbol: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_TransactionCurrency$getCurrencyDisplaySymbol(currencyDisplayOption) {
        return (currencyDisplayOption === 1) ? this.$1m_0 : this.$1n_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings(languageId, userCultureLcid, formatInfoCultureName, numberFormatInfo, dateTimeFormatInfo, timeZoneUtcOffsetMinutes, recordsPerPage, reportScriptErrors) {
    this.$1R_0 = -1;
    this.$1b_0 = -1;
    this.$27_0 = -1;
    this.$1R_0 = languageId;
    this.$1b_0 = userCultureLcid;
    this.$3M_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.$4j.contains(userCultureLcid);
    this.$2z_0 = formatInfoCultureName;
    this.$3f_0 = numberFormatInfo;
    this.$2e_0 = dateTimeFormatInfo;
    this.$2C_0 = timeZoneUtcOffsetMinutes;
    this.$27_0 = recordsPerPage;
    this.$o_0 = reportScriptErrors;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$createFromObjectData(data) {
    var $v_0 = data['languageid'];
    var $v_1 = data['userculturelcid'];
    var $v_2 = data['formatinfoculturename'];
    var $v_3 = data['numberformatinfo'];
    var $v_4 = data['datetimeformatinfo'];
    var $v_5 = data['timezoneutcoffsetminutes'];
    var $v_6 = data['recordsperpage'];
    var $v_7 = data['reportscripterrors'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.prototype = {
    $3M_0: false,
    $2z_0: null,
    $3f_0: null,
    $2e_0: null,
    $o_0: 0,
    $2C_0: 0,
    
    get_languageId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_languageId() {
        return this.$1R_0;
    },
    
    get_userCultureLcid: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_userCultureLcid() {
        return this.$1b_0;
    },
    
    get_isFarEastLanguage: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_isFarEastLanguage() {
        return this.$3M_0;
    },
    
    get_formatInfoCultureName: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_formatInfoCultureName() {
        return this.$2z_0;
    },
    
    get_numberFormatInfo: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_numberFormatInfo() {
        return this.$3f_0;
    },
    
    get_dateTimeFormatInfo: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_dateTimeFormatInfo() {
        return this.$2e_0;
    },
    
    get_timeZoneUtcOffsetMinutes: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_timeZoneUtcOffsetMinutes() {
        return this.$2C_0;
    },
    
    get_recordsPerPage: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_recordsPerPage() {
        return this.$27_0;
    },
    
    get_reportScriptErrors: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$get_reportScriptErrors() {
        return this.$o_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_UserSettings$getObjectData() {
        var $v_0 = {};
        $v_0['languageid'] = this.$1R_0;
        $v_0['userculturelcid'] = this.$1b_0;
        $v_0['formatinfoculturename'] = this.$2z_0;
        $v_0['numberformatinfo'] = this.$3f_0;
        $v_0['datetimeformatinfo'] = this.$2e_0;
        $v_0['timezoneutcoffsetminutes'] = this.$2C_0;
        $v_0['recordsperpage'] = this.$27_0;
        $v_0['reportscripterrors'] = this.$o_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ValidationResult = function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ValidationResult(validationSuccess, traceInfo, activityId) {
    this.$4e_0 = validationSuccess;
    this.$4U_0 = traceInfo;
    this.$z_0 = activityId;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ValidationResult.prototype = {
    $4e_0: false,
    $4U_0: null,
    $z_0: null,
    
    get_validationSuccess: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ValidationResult$get_validationSuccess() {
        return this.$4e_0;
    },
    set_validationSuccess: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ValidationResult$set_validationSuccess(value) {
        this.$4e_0 = value;
        return value;
    },
    
    get_traceInfo: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ValidationResult$get_traceInfo() {
        return this.$4U_0;
    },
    set_traceInfo: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ValidationResult$set_traceInfo(value) {
        this.$4U_0 = value;
        return value;
    },
    
    get_activityId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ValidationResult$get_activityId() {
        return this.$z_0;
    },
    set_activityId: function Microsoft_Crm_Client_Core_Storage_Common_ObjectModel_ValidationResult$set_activityId(value) {
        this.$z_0 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$multilineHtmlEncode(value, replaceNewLineForHtml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(value)) {
        return '';
    }
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(replaceNewLineForHtml)) {
        replaceNewLineForHtml = false;
    }
    var $v_0 = value.replace('\r\n', '\n').replace('\r', '\n').split('\n');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        $v_0[$v_1] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode($v_0[$v_1]);
    }
    if (replaceNewLineForHtml) {
        return $v_0.join('<br />');
    }
    else {
        return $v_0.join('\r\n');
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlAttributeEncode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$xmlAttributeEncode(value) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmXmlAttributeEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.javaScriptEncode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$javaScriptEncode(value) {
    return CrmEncodeDecode.CrmJavaScriptEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$htmlAttributeEncode(value) {
    return CrmEncodeDecode.CrmHtmlAttributeEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$htmlEncode(value) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmHtmlEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlDecode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$htmlDecode(value) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmHtmlDecode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$xmlEncode(value) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmXmlEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$urlEncode(value) {
    return CrmEncodeDecode.CrmUrlEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlDecode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$urlDecode(value) {
    return CrmEncodeDecode.CrmUrlDecode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.isValidHref = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_EncodeDecode$isValidHref(value) {
    return !Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.$4s.test(value);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_WallFormatter() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.formatTextForRendering = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_WallFormatter$formatTextForRendering(text) {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.formatMentions(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.htmlEncodeAndFormatHyperlinks(text));
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.formatMentions = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_WallFormatter$formatMentions(encodedHtml) {
    var $v_0 = encodedHtml;
    var $v_1;
    while (($v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$4v.exec(encodedHtml))) {
        var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlDecode($v_1[3]);
        var $v_3 = $v_1[2];
        var $v_4 = $v_1[1];
        var $v_5 = isNaN(parseInt($v_4));
        var $v_6;
        if ($v_5) {
            $v_6 = String.format('<a href=# onclick=\"{4}(\'onClick fired from {0}:{1}\')\" title=\"{2}\" alt=\"{2}\" >{3}</a>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.javaScriptEncode($v_4), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode($v_3), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_2), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode($v_2), 'console.log');
        }
        else {
            $v_6 = String.format('<a href=# onclick=\"{4}(\'onClick fired from {0}:{1}\')\" title=\"{2}\" alt=\"{2}\" >{3}</a>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode($v_4), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode($v_3), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_2), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode($v_2), 'console.log');
        }
        $v_0 = $v_0.replace($v_1[0], $v_6);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.htmlEncodeAndFormatHyperlinks = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_WallFormatter$htmlEncodeAndFormatHyperlinks(text) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(text)) {
        return '';
    }
    var $v_0 = text.match(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$4o) || new Array(0);
    text = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode(text, true);
    var $v_1 = {};
    for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        var $v_3 = ($v_2.toLowerCase().startsWith('www')) ? 'http://' + $v_2 : $v_2;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined($v_1[$v_3])) {
            continue;
        }
        $v_1[$v_3] = $v_2;
        if (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.isValidHref($v_3)) {
            var $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$4p.exec($v_3);
            if ($v_4) {
                var $v_5 = $v_4[1];
                var $v_6 = $v_4[3];
                var $v_7 = $v_5 + $v_6;
                text = text.replace(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode($v_2), String.format('<a href=\'{0}\' target=\'_blank\' title=\'{1}\'>{2}</a>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_7), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_2), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode($v_2)));
            }
        }
    }
    return text;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault() {
    this.$f_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$parseFromXml(responseXml) {
    var $v_0 = '/a:ErrorCode';
    var $v_1 = '/a:InnerFault[not(@i:nil)]';
    var $v_2 = './/a:KeyValuePairOfstringanyType[b:key=\'DuplicateEntity\']/b:value';
    var $v_3 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(responseXml)) {
        return $v_3;
    }
    responseXml.addNamespace('d', 'http://schemas.microsoft.com/xrm/2011/Contracts/Services');
    responseXml.addNamespace('a', 'http://schemas.microsoft.com/xrm/2011/Contracts');
    responseXml.addNamespace('b', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
    responseXml.addNamespace('c', 'http://schemas.microsoft.com/xrm/2012/Contracts');
    responseXml.addNamespace('i', 'http://www.w3.org/2001/XMLSchema-instance');
    $v_3.$47_0 = responseXml;
    var $v_4 = './/a:OrganizationServiceFault';
    var $v_5 = responseXml.selectSingleNode($v_4);
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5) && responseXml.get_tagName() === 'c:Fault') {
        $v_4 = './';
    }
    var $v_6 = responseXml.selectSingleNode($v_4 + $v_0);
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
        $v_3.$H_0 = Number.parseInvariant($v_6.get_innerText());
    }
    var $v_7 = responseXml.selectSingleNode($v_4 + $v_1);
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_7)) {
        $v_3.$36_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$4y($v_7);
    }
    var $v_8 = responseXml.getElementsByTagName('Message');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8) && $v_8.get_count()) {
        for (var $v_9 = 0; $v_9 < $v_8.get_count(); $v_9++) {
            $v_3.$f_0.add($v_8.get_item($v_9).get_innerText());
        }
    }
    else {
        $v_3.$f_0.add(responseXml.get_outerXml());
    }
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) {
        var $v_A = $v_5.selectSingleNode($v_2);
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_A)) {
            $v_3.$4i_0 = $v_A.get_innerText();
        }
    }
    return $v_3;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$4y = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$$4y($p0) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0)) {
        return $v_0;
    }
    var $v_1 = $p0.getElementsByTagName('ErrorCode').get_item(0).get_innerText();
    $v_0.$H_0 = Number.parseInvariant($v_1);
    $v_0.$f_0.add($p0.getElementsByTagName('Message').get_item(0).get_innerText());
    var $v_2 = $p0.getElementsByTagName('InnerFault');
    if ($v_2.get_count() > 0) {
        var $v_3 = $v_2.get_item(0);
        if ($v_3.hasChildNodes()) {
            $v_0.$36_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$4y($v_3);
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromHtml = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$parseFromHtml(responseHtml) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(responseHtml)) {
        return $v_0;
    }
    var $v_1 = $P_CRM(responseHtml);
    $v_0.$f_0.add($P_CRM('#errDescription', $v_1).text());
    var $v_2 = parseInt($P_CRM('#errNumber', $v_1).text(), 16);
    var $v_3 = (!($v_2 & 2147483648)) ? 1 : -1;
    $v_0.$H_0 = $v_3 * (~$v_2 + 1);
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.fromErrorCode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$fromErrorCode(errorCode) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    $v_0.$H_0 = errorCode;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.prototype = {
    $47_0: null,
    $H_0: 0,
    $36_0: null,
    $4i_0: null,
    
    get_innerFault: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$get_innerFault() {
        return this.$36_0;
    },
    
    get_errorCode: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$get_errorCode() {
        return this.$H_0;
    },
    
    get_message: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$get_message() {
        if (this.$f_0 && this.$f_0.get_count()) {
            return this.$f_0.get_item(0);
        }
        else {
            return null;
        }
    },
    
    get_messages: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$get_messages() {
        return this.$f_0;
    },
    
    get_responseXml: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$get_responseXml() {
        return this.$47_0;
    },
    
    get_responseOuterXml: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$get_responseOuterXml() {
        return this.$47_0.get_outerXml();
    },
    
    get_duplicateEntityXml: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Faults_OrganizationServiceFault$get_duplicateEntityXml() {
        return this.$4i_0;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.DataApi');

Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery = function Microsoft_Crm_Client_Core_Storage_DataApi_AggregateQuery(outerQuery, subQueries) {
    Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery.initializeBase(this, [ outerQuery.get_fetchXml() ]);
    this.$w_1 = subQueries;
}
Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery.prototype = {
    $w_1: null,
    
    get_outerQuery: function Microsoft_Crm_Client_Core_Storage_DataApi_AggregateQuery$get_outerQuery() {
        return this;
    },
    
    get_subQueries: function Microsoft_Crm_Client_Core_Storage_DataApi_AggregateQuery$get_subQueries() {
        return this.$w_1;
    },
    
    get_id: function Microsoft_Crm_Client_Core_Storage_DataApi_AggregateQuery$get_id() {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.get_id.call(this);
        var $$dict_1 = this.$w_1.toDictionary();
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            $v_0 += ',' + $v_1.key + ':' + ($v_1.value).get_id();
        }
        return $v_0;
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_DataApi_AggregateQuery$toString() {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.toString.call(this);
        var $$dict_1 = this.$w_1.toDictionary();
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            $v_0 += ',' + $v_1.key + ':' + ($v_1.value).toString();
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery = function Microsoft_Crm_Client_Core_Storage_DataApi_AttributeMetadataQuery(entityLogicalName, attributeNames) {
    this.$9_0 = entityLogicalName;
    this.$n_0 = attributeNames;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$n_0)) {
        for (var $v_0 = 0; $v_0 < this.$n_0.length; $v_0++) {
            var $v_1 = this.get_validAttributeRegExp().test(this.$n_0[$v_0]);
            if (!$v_1) {
                throw Error.argument(this.$n_0[$v_0], 'Invalid attribute name');
            }
        }
    }
}
Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.prototype = {
    $9_0: null,
    $n_0: null,
    
    get_entityLogicalName: function Microsoft_Crm_Client_Core_Storage_DataApi_AttributeMetadataQuery$get_entityLogicalName() {
        return this.$9_0;
    },
    
    get_validAttributeRegExp: function Microsoft_Crm_Client_Core_Storage_DataApi_AttributeMetadataQuery$get_validAttributeRegExp() {
        if (!Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$2D) {
            Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$2D = new RegExp('^[A-Za-z]+[A-Za-z0-9_]*$');
        }
        return Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$2D;
    },
    
    get_attributeNames: function Microsoft_Crm_Client_Core_Storage_DataApi_AttributeMetadataQuery$get_attributeNames() {
        return this.$n_0;
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_DataApi_AttributeMetadataQuery$toString() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(this.$9_0);
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$n_0)) {
            $v_0.append(' : ');
            $v_0.append(this.$n_0.join(', '));
        }
        return $v_0.toString();
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery = function Microsoft_Crm_Client_Core_Storage_DataApi_KeyQuery(fetchXml, sourceId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.initializeBase(this, [ fetchXml ]);
    this.$4M_1 = sourceId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.get_empty = function Microsoft_Crm_Client_Core_Storage_DataApi_KeyQuery$get_empty() {
    return new Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery('', '');
}
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.prototype = {
    $4M_1: null,
    
    get_key: function Microsoft_Crm_Client_Core_Storage_DataApi_KeyQuery$get_key() {
        var $v_0;
        var $v_1 = Microsoft.Dynamics.Client.Core.Framework.Guid.tryCreate(this.$4M_1);
        if (!$v_1.equals(Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty())) {
            $v_0 = $v_1.toString();
        }
        else {
            $v_0 = this.$4M_1;
        }
        return this.$9_0 + ',' + $v_0 + ',' + this.$4B_0;
    },
    
    get_id: function Microsoft_Crm_Client_Core_Storage_DataApi_KeyQuery$get_id() {
        return this.get_key();
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Query = function Microsoft_Crm_Client_Core_Storage_DataApi_Query(fetchXml) {
    this.$24_0 = '';
    this.set_fetchXml(fetchXml);
}
Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty = function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_empty() {
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Query('');
}
Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype = {
    $3_0: null,
    $K_0: null,
    $3e_0: false,
    $1W_0: 1,
    $23_0: 1,
    $9_0: null,
    $4B_0: false,
    
    get_columnSet: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_columnSet() {
        return this.$3_0;
    },
    set_columnSet: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_columnSet(value) {
        this.$3_0 = value;
        return value;
    },
    
    get_fetchXml: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_fetchXml() {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(this.$K_0) || this.$K_0.substr(0, 1) !== '<') {
            return this.$K_0;
        }
        var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(this.$K_0);
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0) || Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0.firstChild) || $v_0.firstChild.nodeName !== 'fetch') {
            return this.$K_0;
        }
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0.firstChild.attributes.getNamedItem('returntotalrecordcount'))) {
            $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'returntotalrecordcount', 'true'));
        }
        $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'page', this.get_pageNumber().toString()));
        $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'count', this.$23_0.toString()));
        $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'no-lock', this.$3e_0.toString()));
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(this.get_pagingCookie())) {
            $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'paging-cookie', this.get_pagingCookie()));
        }
        return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0).get_outerXml();
    },
    set_fetchXml: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_fetchXml(value) {
        this.$K_0 = value;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(this.$K_0) && this.$K_0.substr(0, 1) === '<') {
            var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(this.$K_0);
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
                var $v_1 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0);
                var $v_2 = $v_1.selectSingleNode('/fetch');
                var $v_3 = $v_2.getAttribute('page');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) {
                    this.set_pageNumber(Number.parseInvariant($v_3));
                }
                $v_3 = $v_2.getAttribute('count');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) {
                    this.$23_0 = Number.parseInvariant($v_3);
                }
                $v_3 = $v_2.getAttribute('paging-cookie');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) {
                    this.set_pagingCookie($v_3);
                }
                var $v_4 = $v_1.selectSingleNode('/fetch/entity');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
                    this.$9_0 = $v_4.getAttribute('name');
                }
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1.selectSingleNode('/fetch/entity/all-attributes'))) {
                    this.$3_0 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
                }
                else {
                    var $v_6 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
                    var $v_7 = $v_1.selectNodes('/fetch/entity/attribute');
                    for (var $v_8 = 0; $v_8 < $v_7.get_count(); $v_8++) {
                        $v_6.add($v_7.get_item($v_8).getAttribute('name'));
                    }
                    this.$3_0 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_6.toArray());
                }
                var $v_5 = $v_0.firstChild.attributes.getNamedItem('returntotalrecordcount');
                this.$4B_0 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) ? Boolean.parse($v_5.nodeValue) : true;
            }
        }
        else {
            this.$3_0 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(new Array(0));
        }
        return value;
    },
    
    get_pageNumber: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_pageNumber() {
        return this.$1W_0;
    },
    set_pageNumber: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_pageNumber(value) {
        if (value < 1) {
            throw Error.argumentOutOfRange('value', value, 'PageNumber cannot be less than 1');
        }
        this.$1W_0 = value;
        return value;
    },
    
    get_noLock: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_noLock() {
        return this.$3e_0;
    },
    set_noLock: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_noLock(value) {
        this.$3e_0 = value;
        return value;
    },
    
    get_pageSize: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_pageSize() {
        return this.$23_0;
    },
    set_pageSize: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_pageSize(value) {
        this.$23_0 = value;
        return value;
    },
    
    get_pagingCookie: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_pagingCookie() {
        return this.$24_0;
    },
    set_pagingCookie: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_pagingCookie(value) {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(value)) {
            this.$24_0 = '';
        }
        this.$24_0 = value;
        return value;
    },
    
    get_entityLogicalName: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_entityLogicalName() {
        return this.$9_0;
    },
    set_entityLogicalName: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_entityLogicalName(value) {
        this.$9_0 = value;
        return value;
    },
    
    get_returnTotalRecordCount: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_returnTotalRecordCount() {
        return this.$4B_0;
    },
    
    get_id: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_id() {
        return this.$K_0;
    },
    
    get_rawFetchXml: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$get_rawFetchXml() {
        return this.$K_0;
    },
    set_rawFetchXml: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$set_rawFetchXml(value) {
        this.$K_0 = value;
        return value;
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_DataApi_Query$toString() {
        return String.format('Query: {0}', this.$K_0);
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery = function Microsoft_Crm_Client_Core_Storage_DataApi_RelatedEntityQuery(relationship, entity, fetchXml) {
    Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery.initializeBase(this, [ fetchXml, entity.get_identifier() + '_' + relationship.toString() ]);
    this.$5_2 = entity;
    this.$Z_2 = relationship;
}
Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery.prototype = {
    $Z_2: null,
    $5_2: null,
    
    get_relationship: function Microsoft_Crm_Client_Core_Storage_DataApi_RelatedEntityQuery$get_relationship() {
        return this.$Z_2;
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_DataApi_RelatedEntityQuery$toString() {
        return 'RelatedEntityQuery: ' + this.$5_2.get_identifier() + ',' + this.$Z_2.toString() + ',' + Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.toString.call(this);
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Request = function Microsoft_Crm_Client_Core_Storage_DataApi_Request() {
}
Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype = {
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Request$get_name() {
        return 'Request';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Request$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/crm/2011/Contracts';
    },
    
    toString: function Microsoft_Crm_Client_Core_Storage_DataApi_Request$toString() {
        return this.get_name() + 'Request';
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Response = function Microsoft_Crm_Client_Core_Storage_DataApi_Response(name) {
    this.$1U_0 = name;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Response.prototype = {
    $1U_0: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Response$get_name() {
        return this.$1U_0;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.UserContext = function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext(userId, userName, userRoles, organizationSettings, userSettings, rolePrivileges, attributePrivileges, serverContext, roleNames, metadataLastModifiedTime, transactionCurrencyId, fullServerVersion, externalContext) {
    this.$R_0 = userId;
    this.$1G_0 = userName;
    this.$1c_0 = userRoles;
    this.$F_0 = organizationSettings;
    this.$a_0 = userSettings;
    this.$1Z_0 = rolePrivileges;
    this.$1J_0 = attributePrivileges;
    this.$v_0 = serverContext;
    this.$1Y_0 = roleNames;
    this.$1T_0 = metadataLastModifiedTime;
    this.$p_0 = transactionCurrencyId;
    this.$1N_0 = fullServerVersion;
    this.$e_0 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(externalContext)) ? externalContext : {};
    this.$1v_0 = !!userRoles;
    this.$s_0 = false;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createErrorContext = function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$createErrorContext(userContext, errorCode) {
    var $v_0 = (!userContext) ? new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty(), '', null, null, null, null, null, null, null, null, Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty(), null, null) : new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(userContext.$R_0, userContext.$1G_0, userContext.$1c_0, userContext.$F_0, userContext.$a_0, userContext.$1Z_0, userContext.$1J_0, userContext.$v_0, userContext.$1Y_0, userContext.$1T_0, userContext.$p_0, userContext.$1N_0, userContext.$e_0);
    $v_0.$3L_0 = true;
    $v_0.$H_0 = errorCode;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createSecureContext = function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$createSecureContext(userContext) {
    var $v_0 = (!userContext) ? new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty(), '', null, null, null, null, null, null, null, null, Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty(), null, null) : new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(userContext.$R_0, userContext.$1G_0, userContext.$1c_0, userContext.$F_0, userContext.$a_0, userContext.$1Z_0, userContext.$1J_0, userContext.$v_0, userContext.$1Y_0, userContext.$1T_0, userContext.$p_0, userContext.$1N_0, userContext.$e_0);
    $v_0.$1G_0 = '';
    $v_0.$s_0 = true;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createFromObjectData = function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$createFromObjectData(data) {
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['userid']);
    var $v_1 = data['username'];
    var $v_2 = data['iserrorcontext'];
    var $v_3 = data['errorcode'];
    var $v_4 = data['isvalid'];
    var $v_5 = data['issecured'];
    if (!$v_4) {
        return Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createErrorContext(null, $v_3);
    }
    var $v_6 = data['rolenames'];
    var $v_7 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Dynamics.Client.Core.Framework.Guid))();
    for (var $$arr_9 = data['userroles'], $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B) {
        var $v_L = $$arr_9[$$idx_B];
        var $v_M = Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData($v_L);
        $v_7.add($v_M);
    }
    var $v_8 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.createFromObjectData(data['organizationsettings']);
    var $v_9 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.createFromObjectData(data['usersettings']);
    var $v_A = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.createFromObjectData(data['servercontext']);
    var $v_B = data['fullserverversion'];
    var $v_C = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege))();
    for (var $$arr_J = data['roleprivileges'], $$len_K = $$arr_J.length, $$idx_L = 0; $$idx_L < $$len_K; ++$$idx_L) {
        var $v_N = $$arr_J[$$idx_L];
        var $v_O = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.createFromObjectData($v_N);
        $v_C.set_item($v_O.$u_0.toString(), $v_O);
    }
    var $v_D = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege))();
    for (var $$arr_P = data['attributeprivileges'], $$len_Q = $$arr_P.length, $$idx_R = 0; $$idx_R < $$len_Q; ++$$idx_R) {
        var $v_P = $$arr_P[$$idx_R];
        var $v_Q = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.createFromObjectData($v_P);
        $v_D.set_item($v_Q.$1f_0.toString(), $v_Q);
    }
    var $v_E = data['metadatalastmodifiedtime'];
    var $v_F = (('transactioncurrencyid') in data) ? Microsoft.Dynamics.Client.Core.Framework.Guid.createFromObjectData(data['transactioncurrencyid']) : Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
    var $v_G = data['externalcontext'];
    var $v_H = {};
    var $v_I = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency))();
    var $$dict_Z = $v_G['transactioncurrencybyid'];
    for (var $$key_a in $$dict_Z) {
        var $v_R = { key: $$key_a, value: $$dict_Z[$$key_a] };
        $v_I.set_item($v_R.key, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.createFromObjectData($v_R.value));
    }
    $v_H['transactioncurrencybyid'] = $v_I;
    var $v_J = new (Microsoft.Dynamics.Client.Core.Framework.TypedDictionary.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition))();
    var $$dict_d = $v_G['timezonedefinitionbycode'];
    for (var $$key_e in $$dict_d) {
        var $v_S = { key: $$key_e, value: $$dict_d[$$key_e] };
        $v_J.set_item($v_S.key, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.createFromObjectData($v_S.value));
    }
    $v_H['timezonedefinitionbycode'] = $v_J;
    $v_H['islive'] = data['islive'];
    $v_H['isosdporganization'] = data['isosdporganization'];
    $v_H['usepathbasedurls'] = $v_G['usepathbasedurls'];
    var $v_K = new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext($v_0, $v_1, $v_7.toArray(), $v_8, $v_9, $v_C, $v_D, $v_A, $v_6, $v_E, $v_F, $v_B, $v_H);
    if ($v_2) {
        $v_K = Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createErrorContext($v_K, $v_3);
    }
    if ($v_5) {
        $v_K = Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createSecureContext($v_K);
    }
    return $v_K;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.prototype = {
    $R_0: null,
    $1c_0: null,
    $1Y_0: null,
    $F_0: null,
    $a_0: null,
    $1Z_0: null,
    $1J_0: null,
    $v_0: null,
    $1N_0: null,
    $e_0: null,
    $1T_0: null,
    $p_0: null,
    $1G_0: null,
    $3L_0: false,
    $H_0: 0,
    $1v_0: false,
    $s_0: false,
    
    get_userId: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_userId() {
        return this.$R_0;
    },
    
    get_transactionCurrencyId: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_transactionCurrencyId() {
        return this.$p_0;
    },
    
    get_userName: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_userName() {
        return this.$1G_0;
    },
    
    get_userRoles: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_userRoles() {
        return this.$1c_0;
    },
    
    get_roleNames: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_roleNames() {
        return this.$1Y_0;
    },
    
    get_organizationSettings: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_organizationSettings() {
        return this.$F_0;
    },
    
    get_userSettings: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_userSettings() {
        return this.$a_0;
    },
    
    get_rolePrivileges: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_rolePrivileges() {
        return this.$1Z_0;
    },
    
    get_attributePrivileges: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_attributePrivileges() {
        return this.$1J_0;
    },
    
    get_serverContext: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_serverContext() {
        return this.$v_0;
    },
    
    get_externalContext: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_externalContext() {
        return this.$e_0;
    },
    
    get_metadataLastModifiedTime: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_metadataLastModifiedTime() {
        return this.$1T_0;
    },
    
    get_isErrorContext: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_isErrorContext() {
        return this.$3L_0;
    },
    
    get_errorCode: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_errorCode() {
        return this.$H_0;
    },
    
    get_isValid: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_isValid() {
        return this.$1v_0;
    },
    
    get_isSecured: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_isSecured() {
        return this.$s_0;
    },
    
    getObjectData: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$getObjectData() {
        var $v_0 = {};
        $v_0['userid'] = this.$R_0.getObjectData();
        $v_0['username'] = this.$1G_0;
        $v_0['iserrorcontext'] = this.$3L_0;
        $v_0['errorcode'] = this.$H_0;
        $v_0['isvalid'] = this.$1v_0;
        $v_0['issecured'] = this.$s_0;
        if (!this.$1v_0) {
            return $v_0;
        }
        $v_0['rolenames'] = this.$1Y_0;
        var $v_1 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Object))();
        for (var $$arr_2 = this.$1c_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_9 = $$arr_2[$$idx_4];
            $v_1.add($v_9.getObjectData());
        }
        $v_0['userroles'] = $v_1.toArray();
        $v_0['organizationsettings'] = this.$F_0.getObjectData();
        $v_0['usersettings'] = this.$a_0.getObjectData();
        $v_0['servercontext'] = this.$v_0.getObjectData();
        $v_0['fullserverversion'] = this.$1N_0;
        $v_0['metadatalastmodifiedtime'] = this.$1T_0;
        $v_0['transactioncurrencyid'] = this.$p_0.getObjectData();
        var $v_2 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Object))();
        for (var $$arr_7 = this.$1Z_0.toArray(), $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_A = $$arr_7[$$idx_9];
            $v_2.add($v_A.getObjectData());
        }
        $v_0['roleprivileges'] = $v_2.toArray();
        var $v_3 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Object))();
        for (var $$arr_C = this.$1J_0.toArray(), $$len_D = $$arr_C.length, $$idx_E = 0; $$idx_E < $$len_D; ++$$idx_E) {
            var $v_B = $$arr_C[$$idx_E];
            $v_3.add($v_B.getObjectData());
        }
        $v_0['attributeprivileges'] = $v_3.toArray();
        var $v_4 = {};
        var $v_5 = {};
        var $v_6 = this.$e_0['transactioncurrencybyid'];
        var $$dict_J = $v_6.toDictionary();
        for (var $$key_K in $$dict_J) {
            var $v_C = { key: $$key_K, value: $$dict_J[$$key_K] };
            $v_5[$v_C.key] = ($v_C.value).getObjectData();
        }
        $v_4['transactioncurrencybyid'] = $v_5;
        var $v_7 = {};
        var $v_8 = this.$e_0['timezonedefinitionbycode'];
        var $$dict_O = $v_8.toDictionary();
        for (var $$key_P in $$dict_O) {
            var $v_D = { key: $$key_P, value: $$dict_O[$$key_P] };
            $v_7[$v_D.key] = ($v_D.value).getObjectData();
        }
        $v_4['timezonedefinitionbycode'] = $v_7;
        $v_4['islive'] = this.$e_0['islive'];
        $v_4['isosdporganization'] = this.$e_0['isosdporganization'];
        $v_4['usepathbasedurls'] = this.$e_0['usepathbasedurls'];
        $v_0['externalcontext'] = $v_4;
        return $v_0;
    },
    
    get_languageId: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_languageId() {
        return this.$a_0.$1R_0;
    },
    
    get_userCultureLcid: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_userCultureLcid() {
        return this.$a_0.$1b_0;
    },
    
    get_isFarEastLanguage: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_isFarEastLanguage() {
        return this.$a_0.$3M_0;
    },
    
    get_timeZoneUtcOffsetMinutes: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_timeZoneUtcOffsetMinutes() {
        return this.$a_0.$2C_0;
    },
    
    get_userReportScriptErrors: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_userReportScriptErrors() {
        return this.$a_0.$o_0;
    },
    
    get_languageCode: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_languageCode() {
        return this.$F_0.$1w_0;
    },
    
    get_orgCultureInfoLcid: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_orgCultureInfoLcid() {
        return this.$F_0.$22_0;
    },
    
    get_organizationId: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_organizationId() {
        return this.$F_0.$t_0;
    },
    
    get_organizationName: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_organizationName() {
        return this.$F_0.$21_0;
    },
    
    get_blockedAttachments: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_blockedAttachments() {
        return this.$F_0.$1h_0;
    },
    
    get_maxUploadFileSize: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_maxUploadFileSize() {
        return this.$F_0.$1S_0;
    },
    
    get_organizationReportScriptErrors: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_organizationReportScriptErrors() {
        return this.$F_0.$o_0;
    },
    
    get_isDuplicateDetectionEnabled: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_isDuplicateDetectionEnabled() {
        return this.$F_0.$1t_0;
    },
    
    get_isDuplicateDetectionEnabledForOnlineCreateUpdate: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_isDuplicateDetectionEnabledForOnlineCreateUpdate() {
        return this.$F_0.$1u_0;
    },
    
    get_serverVersion: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_serverVersion() {
        return this.$v_0.$2A_0;
    },
    
    get_serverDatabaseVersion: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_serverDatabaseVersion() {
        return this.$v_0.$1o_0;
    },
    
    get_fullServerVersion: function Microsoft_Crm_Client_Core_Storage_DataApi_UserContext$get_fullServerVersion() {
        return this.$1N_0;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.DataApi.Requests');

Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddRecurrenceRequest(target, appointmentId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest.initializeBase(this);
    this.$1_1 = target;
    this.$2I_1 = appointmentId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest.prototype = {
    $1_1: null,
    $2I_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddRecurrenceRequest$get_name() {
        return 'AddRecurrence';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddRecurrenceRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddRecurrenceRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_appointmentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddRecurrenceRequest$get_appointmentId() {
        return this.$2I_1;
    },
    set_appointmentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddRecurrenceRequest$set_appointmentId(value) {
        this.$2I_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssignRequest(target, assignee) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest.initializeBase(this);
    this.$1_1 = target;
    this.$2J_1 = assignee;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest.prototype = {
    $1_1: null,
    $2J_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssignRequest$get_name() {
        return 'Assign';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssignRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssignRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_assignee: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssignRequest$get_assignee() {
        return this.$2J_1;
    },
    set_assignee: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssignRequest$set_assignee(value) {
        this.$2J_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest(target, relationship, relatedEntities) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest.initializeBase(this);
    this.$1_1 = target;
    this.$Z_1 = relationship;
    this.$Q_1 = relatedEntities;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest.prototype = {
    $1_1: null,
    $Z_1: null,
    $Q_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$get_name() {
        return 'Associate';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_relationship: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$get_relationship() {
        return this.$Z_1;
    },
    set_relationship: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$set_relationship(value) {
        this.$Z_1 = value;
        return value;
    },
    
    get_relatedEntities: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$get_relatedEntities() {
        return this.$Q_1;
    },
    set_relatedEntities: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AssociateRequest$set_relatedEntities(value) {
        this.$Q_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest(locationName, absUrl, regardingObjectId, relativePath, regardingObjType, parentType, parentId, isAddOrEditMode, isCreateFolder, documentId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest.initializeBase(this);
    this.$3Z_1 = locationName;
    this.$2E_1 = absUrl;
    this.$D_1 = regardingObjectId;
    this.$40_1 = relativePath;
    this.$1D_1 = regardingObjType;
    this.$3p_1 = parentType;
    this.$3o_1 = parentId;
    this.$3C_1 = isAddOrEditMode;
    this.$3H_1 = isCreateFolder;
    this.$d_1 = documentId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest.prototype = {
    $3Z_1: null,
    $2E_1: null,
    $D_1: null,
    $40_1: null,
    $1D_1: 0,
    $3p_1: 0,
    $3o_1: null,
    $3C_1: false,
    $3H_1: false,
    $d_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_name() {
        return 'AddOrEditLocation';
    },
    
    get_locationName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_locationName() {
        return this.$3Z_1;
    },
    set_locationName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_locationName(value) {
        this.$3Z_1 = value;
        return value;
    },
    
    get_absUrl: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_absUrl() {
        return this.$2E_1;
    },
    set_absUrl: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_absUrl(value) {
        this.$2E_1 = value;
        return value;
    },
    
    get_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_regardingObjectId() {
        return this.$D_1;
    },
    set_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_regardingObjectId(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_relativePath: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_relativePath() {
        return this.$40_1;
    },
    set_relativePath: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_relativePath(value) {
        this.$40_1 = value;
        return value;
    },
    
    get_regardingObjType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_regardingObjType() {
        return this.$1D_1;
    },
    set_regardingObjType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_regardingObjType(value) {
        this.$1D_1 = value;
        return value;
    },
    
    get_parentType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_parentType() {
        return this.$3p_1;
    },
    set_parentType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_parentType(value) {
        this.$3p_1 = value;
        return value;
    },
    
    get_parentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_parentId() {
        return this.$3o_1;
    },
    set_parentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_parentId(value) {
        this.$3o_1 = value;
        return value;
    },
    
    get_isAddOrEditMode: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_isAddOrEditMode() {
        return this.$3C_1;
    },
    set_isAddOrEditMode: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_isAddOrEditMode(value) {
        this.$3C_1 = value;
        return value;
    },
    
    get_isCreateFolder: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_isCreateFolder() {
        return this.$3H_1;
    },
    set_isCreateFolder: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_isCreateFolder(value) {
        this.$3H_1 = value;
        return value;
    },
    
    get_documentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$get_documentId() {
        return this.$d_1;
    },
    set_documentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_AddOrEditLocationRequest$set_documentId(value) {
        this.$d_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest(documentId, regardingObjectId, regardingObjType) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest.initializeBase(this);
    this.$d_1 = documentId;
    this.$D_1 = regardingObjectId;
    this.$1D_1 = regardingObjType;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest.prototype = {
    $d_1: null,
    $D_1: null,
    $1D_1: 0,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest$get_name() {
        return 'FetchSiteUrl';
    },
    
    get_documentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest$get_documentId() {
        return this.$d_1;
    },
    set_documentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest$set_documentId(value) {
        this.$d_1 = value;
        return value;
    },
    
    get_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest$get_regardingObjectId() {
        return this.$D_1;
    },
    set_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest$set_regardingObjectId(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_regardingObjType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest$get_regardingObjType() {
        return this.$1D_1;
    },
    set_regardingObjType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_FetchSiteUrlRequest$set_regardingObjType(value) {
        this.$1D_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest(target, maintainLegacyAppServerBehavior, returnNotifications) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest.initializeBase(this);
    this.$1_1 = target;
    this.$C_1 = maintainLegacyAppServerBehavior;
    this.$h_1 = returnNotifications;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest.prototype = {
    $1_1: null,
    $C_1: false,
    $h_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest$get_name() {
        return 'Book';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest$get_maintainLegacyAppServerBehavior() {
        return this.$C_1;
    },
    set_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest$set_maintainLegacyAppServerBehavior(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_returnNotifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest$get_returnNotifications() {
        return this.$h_1;
    },
    set_returnNotifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_BookRequest$set_returnNotifications(value) {
        this.$h_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest(entity, checkInComments, retainCheckout) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest.initializeBase(this);
    this.$5_1 = entity;
    this.$2T_1 = checkInComments;
    this.$48_1 = retainCheckout;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest.prototype = {
    $5_1: null,
    $2T_1: null,
    $48_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest$get_name() {
        return 'CheckInDocument';
    },
    
    get_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest$get_entity() {
        return this.$5_1;
    },
    set_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest$set_entity(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_checkInComments: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest$get_checkInComments() {
        return this.$2T_1;
    },
    set_checkInComments: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest$set_checkInComments(value) {
        this.$2T_1 = value;
        return value;
    },
    
    get_retainCheckout: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest$get_retainCheckout() {
        return this.$48_1;
    },
    set_retainCheckout: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckInDocumentRequest$set_retainCheckout(value) {
        this.$48_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckoutDocumentRequest(entity) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest.initializeBase(this);
    this.$5_1 = entity;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest.prototype = {
    $5_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckoutDocumentRequest$get_name() {
        return 'CheckoutDocument';
    },
    
    get_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckoutDocumentRequest$get_entity() {
        return this.$5_1;
    },
    set_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CheckoutDocumentRequest$set_entity(value) {
        this.$5_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest(fileName, regardingObjectId, regardingObjectTypeCode, locationId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest.initializeBase(this);
    this.$r_1 = fileName;
    this.$D_1 = regardingObjectId;
    this.$3y_1 = regardingObjectTypeCode;
    this.$17_1 = locationId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest.prototype = {
    $r_1: null,
    $D_1: null,
    $3y_1: null,
    $17_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$get_name() {
        return 'NewDocument';
    },
    
    get_fileName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$get_fileName() {
        return this.$r_1;
    },
    set_fileName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$set_fileName(value) {
        this.$r_1 = value;
        return value;
    },
    
    get_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$get_regardingObjectId() {
        return this.$D_1;
    },
    set_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$set_regardingObjectId(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_regardingObjectTypeCode: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$get_regardingObjectTypeCode() {
        return this.$3y_1;
    },
    set_regardingObjectTypeCode: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$set_regardingObjectTypeCode(value) {
        this.$3y_1 = value;
        return value;
    },
    
    get_locationId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$get_locationId() {
        return this.$17_1;
    },
    set_locationId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_NewDocumentRequest$set_locationId(value) {
        this.$17_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CloseIncidentRequest(incidentResolution, status) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest.initializeBase(this);
    this.$35_1 = incidentResolution;
    this.$E_1 = status;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest.prototype = {
    $35_1: null,
    $E_1: 0,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CloseIncidentRequest$get_name() {
        return 'CloseIncident';
    },
    
    get_incidentResolution: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CloseIncidentRequest$get_incidentResolution() {
        return this.$35_1;
    },
    set_incidentResolution: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CloseIncidentRequest$set_incidentResolution(value) {
        this.$35_1 = value;
        return value;
    },
    
    get_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CloseIncidentRequest$get_status() {
        return this.$E_1;
    },
    set_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CloseIncidentRequest$set_status(value) {
        this.$E_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest(activityId, activityEntityName, targetEntity, targetEntityName, createCampaignResponse) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest.initializeBase(this);
    this.$z_1 = activityId;
    this.$2G_1 = activityEntityName;
    this.$4O_1 = targetEntity;
    this.$1F_1 = targetEntityName;
    this.$2X_1 = createCampaignResponse;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest.prototype = {
    $z_1: null,
    $2G_1: null,
    $4O_1: null,
    $1F_1: null,
    $2X_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$get_name() {
        return 'ConvertActivity';
    },
    
    get_activityId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$get_activityId() {
        return this.$z_1;
    },
    set_activityId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$set_activityId(value) {
        this.$z_1 = value;
        return value;
    },
    
    get_activityEntityName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$get_activityEntityName() {
        return this.$2G_1;
    },
    set_activityEntityName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$set_activityEntityName(value) {
        this.$2G_1 = value;
        return value;
    },
    
    get_targetEntity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$get_targetEntity() {
        return this.$4O_1;
    },
    set_targetEntity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$set_targetEntity(value) {
        this.$4O_1 = value;
        return value;
    },
    
    get_targetEntityName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$get_targetEntityName() {
        return this.$1F_1;
    },
    set_targetEntityName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$set_targetEntityName(value) {
        this.$1F_1 = value;
        return value;
    },
    
    get_createCampaignResponse: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$get_createCampaignResponse() {
        return this.$2X_1;
    },
    set_createCampaignResponse: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ConvertActivityRequest$set_createCampaignResponse(value) {
        this.$2X_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest(folderName, regardingObjectType, regardingObjectId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest.initializeBase(this);
    this.$2w_1 = folderName;
    this.$1C_1 = regardingObjectType;
    this.$D_1 = regardingObjectId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest.prototype = {
    $2w_1: null,
    $1C_1: 0,
    $D_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest$get_name() {
        return 'CreateFolder';
    },
    
    get_folderName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest$get_folderName() {
        return this.$2w_1;
    },
    set_folderName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest$set_folderName(value) {
        this.$2w_1 = value;
        return value;
    },
    
    get_regardingObjectType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest$get_regardingObjectType() {
        return this.$1C_1;
    },
    set_regardingObjectType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest$set_regardingObjectType(value) {
        this.$1C_1 = value;
        return value;
    },
    
    get_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest$get_regardingObjectId() {
        return this.$D_1;
    },
    set_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateFolderRequest$set_regardingObjectId(value) {
        this.$D_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest(regardingObjectType, regardingObjectId, documentId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest.initializeBase(this);
    this.$1C_1 = regardingObjectType;
    this.$D_1 = regardingObjectId;
    this.$d_1 = documentId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest.prototype = {
    $1C_1: 0,
    $D_1: null,
    $d_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest$get_name() {
        return 'SearchDocument';
    },
    
    get_regardingObjectType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest$get_regardingObjectType() {
        return this.$1C_1;
    },
    set_regardingObjectType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest$set_regardingObjectType(value) {
        this.$1C_1 = value;
        return value;
    },
    
    get_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest$get_regardingObjectId() {
        return this.$D_1;
    },
    set_regardingObjectId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest$set_regardingObjectId(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_documentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest$get_documentId() {
        return this.$d_1;
    },
    set_documentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SearchDocumentRequest$set_documentId(value) {
        this.$d_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateDocumentLibrariesRequest(documentLibraryNames, url) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest.initializeBase(this);
    this.$2j_1 = documentLibraryNames;
    this.$4X_1 = url;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest.prototype = {
    $2j_1: null,
    $4X_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateDocumentLibrariesRequest$get_name() {
        return 'CreateDocumentLibraries';
    },
    
    get_documentLibraryNames: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateDocumentLibrariesRequest$get_documentLibraryNames() {
        return this.$2j_1;
    },
    set_documentLibraryNames: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateDocumentLibrariesRequest$set_documentLibraryNames(value) {
        this.$2j_1 = value;
        return value;
    },
    
    get_url: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateDocumentLibrariesRequest$get_url() {
        return this.$4X_1;
    },
    set_url: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateDocumentLibrariesRequest$set_url(value) {
        this.$4X_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest(siteCollection, folderStructureEntity, entityDocMgmtXml, validateStatus, validateStatusReason) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest.initializeBase(this);
    this.$4J_1 = siteCollection;
    this.$2x_1 = folderStructureEntity;
    this.$2p_1 = entityDocMgmtXml;
    this.$4c_1 = validateStatus;
    this.$4d_1 = validateStatusReason;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest.prototype = {
    $4J_1: null,
    $2x_1: 0,
    $2p_1: null,
    $4c_1: 0,
    $4d_1: 0,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$get_name() {
        return 'UpdateDocumentManagementSettings';
    },
    
    get_siteCollection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$get_siteCollection() {
        return this.$4J_1;
    },
    set_siteCollection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$set_siteCollection(value) {
        this.$4J_1 = value;
        return value;
    },
    
    get_folderStructureEntity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$get_folderStructureEntity() {
        return this.$2x_1;
    },
    set_folderStructureEntity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$set_folderStructureEntity(value) {
        this.$2x_1 = value;
        return value;
    },
    
    get_entityDocMgmtXml: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$get_entityDocMgmtXml() {
        return this.$2p_1;
    },
    set_entityDocMgmtXml: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$set_entityDocMgmtXml(value) {
        this.$2p_1 = value;
        return value;
    },
    
    get_validateStatus: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$get_validateStatus() {
        return this.$4c_1;
    },
    set_validateStatus: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$set_validateStatus(value) {
        this.$4c_1 = value;
        return value;
    },
    
    get_validateStatusReason: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$get_validateStatusReason() {
        return this.$4d_1;
    },
    set_validateStatusReason: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateDocumentManagementSettingsRequest$set_validateStatusReason(value) {
        this.$4d_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_MigrateToS2SRequest(siteUrl) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest.initializeBase(this);
    this.$4K_1 = siteUrl;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest.prototype = {
    $4K_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_MigrateToS2SRequest$get_name() {
        return 'MigrateToS2S';
    },
    
    get_siteUrl: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_MigrateToS2SRequest$get_siteUrl() {
        return this.$4K_1;
    },
    set_siteUrl: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_MigrateToS2SRequest$set_siteUrl(value) {
        this.$4K_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpgradeToS2SRequest() {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest.initializeBase(this);
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest.prototype = {
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpgradeToS2SRequest$get_name() {
        return 'UpgradeToS2S';
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ValidateUrlRequest(sharePointUrls) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest.initializeBase(this);
    this.$4H_1 = sharePointUrls;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest.prototype = {
    $4H_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ValidateUrlRequest$get_name() {
        return 'ValidateUrl';
    },
    
    get_sharePointUrls: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ValidateUrlRequest$get_sharePointUrls() {
        return this.$4H_1;
    },
    set_sharePointUrls: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ValidateUrlRequest$set_sharePointUrls(value) {
        this.$4H_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest(target, suppressDuplicateDetection, calculateMatchCodeSynchronously, solutionUniqueName, maintainLegacyAppServerBehavior) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest.initializeBase(this);
    this.$1_1 = target;
    this.$k_1 = suppressDuplicateDetection;
    this.$11_1 = calculateMatchCodeSynchronously;
    this.$i_1 = solutionUniqueName;
    this.$C_1 = maintainLegacyAppServerBehavior;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest.prototype = {
    $1_1: null,
    $k_1: false,
    $11_1: false,
    $i_1: null,
    $C_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$get_name() {
        return 'Create';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_suppressDuplicateDetection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$get_suppressDuplicateDetection() {
        return this.$k_1;
    },
    set_suppressDuplicateDetection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$set_suppressDuplicateDetection(value) {
        this.$k_1 = value;
        return value;
    },
    
    get_calculateMatchCodeSynchronously: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$get_calculateMatchCodeSynchronously() {
        return this.$11_1;
    },
    set_calculateMatchCodeSynchronously: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$set_calculateMatchCodeSynchronously(value) {
        this.$11_1 = value;
        return value;
    },
    
    get_solutionUniqueName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$get_solutionUniqueName() {
        return this.$i_1;
    },
    set_solutionUniqueName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$set_solutionUniqueName(value) {
        this.$i_1 = value;
        return value;
    },
    
    get_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$get_maintainLegacyAppServerBehavior() {
        return this.$C_1;
    },
    set_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_CreateRequest$set_maintainLegacyAppServerBehavior(value) {
        this.$C_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteDocumentRequest(entities) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest.initializeBase(this);
    this.$M_1 = entities;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest.prototype = {
    $M_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteDocumentRequest$get_name() {
        return 'DeleteDocument';
    },
    
    get_entities: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteDocumentRequest$get_entities() {
        return this.$M_1;
    },
    set_entities: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteDocumentRequest$set_entities(value) {
        this.$M_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteRequest(target, solutionUniqueName) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest.initializeBase(this);
    this.$1_1 = target;
    this.$i_1 = solutionUniqueName;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest.prototype = {
    $1_1: null,
    $i_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteRequest$get_name() {
        return 'Delete';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_solutionUniqueName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteRequest$get_solutionUniqueName() {
        return this.$i_1;
    },
    set_solutionUniqueName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DeleteRequest$set_solutionUniqueName(value) {
        this.$i_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest(target, relationship, relatedEntities) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest.initializeBase(this);
    this.$1_1 = target;
    this.$Z_1 = relationship;
    this.$Q_1 = relatedEntities;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest.prototype = {
    $1_1: null,
    $Z_1: null,
    $Q_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$get_name() {
        return 'Disassociate';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_relationship: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$get_relationship() {
        return this.$Z_1;
    },
    set_relationship: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$set_relationship(value) {
        this.$Z_1 = value;
        return value;
    },
    
    get_relatedEntities: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$get_relatedEntities() {
        return this.$Q_1;
    },
    set_relatedEntities: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DisassociateRequest$set_relatedEntities(value) {
        this.$Q_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DiscardDocumentCheckoutRequest(entity) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest.initializeBase(this);
    this.$5_1 = entity;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest.prototype = {
    $5_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DiscardDocumentCheckoutRequest$get_name() {
        return 'DiscardDocumentCheckout';
    },
    
    get_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DiscardDocumentCheckoutRequest$get_entity() {
        return this.$5_1;
    },
    set_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_DiscardDocumentCheckoutRequest$set_entity(value) {
        this.$5_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_EditDocumentPropertiesRequest(entity) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest.initializeBase(this);
    this.$5_1 = entity;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest.prototype = {
    $5_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_EditDocumentPropertiesRequest$get_name() {
        return 'EditDocumentProperties';
    },
    
    get_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_EditDocumentPropertiesRequest$get_entity() {
        return this.$5_1;
    },
    set_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_EditDocumentPropertiesRequest$set_entity(value) {
        this.$5_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteMultipleRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteMultipleRequest(requests, settings) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteMultipleRequest.initializeBase(this);
    this.$42_1 = requests;
    this.$4F_1 = settings;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteMultipleRequest.prototype = {
    $42_1: null,
    $4F_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteMultipleRequest$get_name() {
        return 'ExecuteMultiple';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteMultipleRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_requests: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteMultipleRequest$get_requests() {
        return this.$42_1;
    },
    set_requests: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteMultipleRequest$set_requests(value) {
        this.$42_1 = value;
        return value;
    },
    
    get_settings: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteMultipleRequest$get_settings() {
        return this.$4F_1;
    },
    set_settings: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteMultipleRequest$set_settings(value) {
        this.$4F_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest(searchText, entityGroupName, entityNames) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest.initializeBase(this);
    this.$4E_1 = searchText;
    this.$2q_1 = entityGroupName;
    this.$2s_1 = entityNames;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest.prototype = {
    $4E_1: null,
    $2q_1: null,
    $2s_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest$get_name() {
        return 'ExecuteQuickFind';
    },
    
    get_searchText: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest$get_searchText() {
        return this.$4E_1;
    },
    set_searchText: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest$set_searchText(value) {
        this.$4E_1 = value;
        return value;
    },
    
    get_entityGroupName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest$get_entityGroupName() {
        return this.$2q_1;
    },
    set_entityGroupName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest$set_entityGroupName(value) {
        this.$2q_1 = value;
        return value;
    },
    
    get_entityNames: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest$get_entityNames() {
        return this.$2s_1;
    },
    set_entityNames: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ExecuteQuickFindRequest$set_entityNames(value) {
        this.$2s_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_GetValidStatusTransitionRequest(incidentId, toStateCode) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest.initializeBase(this);
    this.$34_1 = incidentId;
    this.$4R_1 = toStateCode;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest.prototype = {
    $34_1: null,
    $4R_1: 0,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_GetValidStatusTransitionRequest$get_name() {
        return 'GetValidStatusTransition';
    },
    
    get_incidentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_GetValidStatusTransitionRequest$get_incidentId() {
        return this.$34_1;
    },
    set_incidentId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_GetValidStatusTransitionRequest$set_incidentId(value) {
        this.$34_1 = value;
        return value;
    },
    
    get_toStateCode: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_GetValidStatusTransitionRequest$get_toStateCode() {
        return this.$4R_1;
    },
    set_toStateCode: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_GetValidStatusTransitionRequest$set_toStateCode(value) {
        this.$4R_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest(entityMoniker, targetEntityName, targetFieldType) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest.initializeBase(this);
    this.$14_1 = entityMoniker;
    this.$1F_1 = targetEntityName;
    this.$4P_1 = targetFieldType;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest.prototype = {
    $14_1: null,
    $1F_1: null,
    $4P_1: 0,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest$get_name() {
        return 'InitializeFrom';
    },
    
    get_entityMoniker: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest$get_entityMoniker() {
        return this.$14_1;
    },
    set_entityMoniker: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest$set_entityMoniker(value) {
        this.$14_1 = value;
        return value;
    },
    
    get_targetEntityName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest$get_targetEntityName() {
        return this.$1F_1;
    },
    set_targetEntityName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest$set_targetEntityName(value) {
        this.$1F_1 = value;
        return value;
    },
    
    get_targetFieldType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest$get_targetFieldType() {
        return this.$4P_1;
    },
    set_targetFieldType: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InitializeFromRequest$set_targetFieldType(value) {
        this.$4P_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InviteUserRequest(userId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest.initializeBase(this);
    this.$R_1 = userId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest.prototype = {
    $R_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InviteUserRequest$get_name() {
        return 'InviteUser';
    },
    
    get_userId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InviteUserRequest$get_userId() {
        return this.$R_1;
    },
    set_userId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_InviteUserRequest$set_userId(value) {
        this.$R_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_LoseOpportunityRequest(opportunityClose, status) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest.initializeBase(this);
    this.$18_1 = opportunityClose;
    this.$E_1 = status;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest.prototype = {
    $18_1: null,
    $E_1: 0,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_LoseOpportunityRequest$get_name() {
        return 'LoseOpportunity';
    },
    
    get_opportunityClose: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_LoseOpportunityRequest$get_opportunityClose() {
        return this.$18_1;
    },
    set_opportunityClose: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_LoseOpportunityRequest$set_opportunityClose(value) {
        this.$18_1 = value;
        return value;
    },
    
    get_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_LoseOpportunityRequest$get_status() {
        return this.$E_1;
    },
    set_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_LoseOpportunityRequest$set_status(value) {
        this.$E_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest(leadId, createAccount, createContact, createOpportunity, opportunityCurrencyId, opportunityCustomerId, sourceCampaignId, status, suppressDuplicateDetection) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest.initializeBase(this);
    this.$3Y_1 = leadId;
    this.$2W_1 = createAccount;
    this.$2Y_1 = createContact;
    this.$2a_1 = createOpportunity;
    this.$3h_1 = opportunityCurrencyId;
    this.$3i_1 = opportunityCustomerId;
    this.$4L_1 = sourceCampaignId;
    this.$E_1 = status;
    this.$k_1 = suppressDuplicateDetection;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest.prototype = {
    $3Y_1: null,
    $2W_1: false,
    $2Y_1: false,
    $2a_1: false,
    $3h_1: null,
    $3i_1: null,
    $4L_1: null,
    $E_1: 0,
    $k_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_name() {
        return 'QualifyLead';
    },
    
    get_leadId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_leadId() {
        return this.$3Y_1;
    },
    set_leadId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_leadId(value) {
        this.$3Y_1 = value;
        return value;
    },
    
    get_createAccount: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_createAccount() {
        return this.$2W_1;
    },
    set_createAccount: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_createAccount(value) {
        this.$2W_1 = value;
        return value;
    },
    
    get_createContact: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_createContact() {
        return this.$2Y_1;
    },
    set_createContact: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_createContact(value) {
        this.$2Y_1 = value;
        return value;
    },
    
    get_createOpportunity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_createOpportunity() {
        return this.$2a_1;
    },
    set_createOpportunity: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_createOpportunity(value) {
        this.$2a_1 = value;
        return value;
    },
    
    get_opportunityCurrencyId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_opportunityCurrencyId() {
        return this.$3h_1;
    },
    set_opportunityCurrencyId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_opportunityCurrencyId(value) {
        this.$3h_1 = value;
        return value;
    },
    
    get_opportunityCustomerId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_opportunityCustomerId() {
        return this.$3i_1;
    },
    set_opportunityCustomerId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_opportunityCustomerId(value) {
        this.$3i_1 = value;
        return value;
    },
    
    get_sourceCampaignId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_sourceCampaignId() {
        return this.$4L_1;
    },
    set_sourceCampaignId: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_sourceCampaignId(value) {
        this.$4L_1 = value;
        return value;
    },
    
    get_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_status() {
        return this.$E_1;
    },
    set_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_status(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_suppressDuplicateDetection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$get_suppressDuplicateDetection() {
        return this.$k_1;
    },
    set_suppressDuplicateDetection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_QualifyLeadRequest$set_suppressDuplicateDetection(value) {
        this.$k_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest(target, maintainLegacyAppServerBehavior, returnNotifications) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest.initializeBase(this);
    this.$1_1 = target;
    this.$C_1 = maintainLegacyAppServerBehavior;
    this.$h_1 = returnNotifications;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest.prototype = {
    $1_1: null,
    $C_1: false,
    $h_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest$get_name() {
        return 'Reschedule';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest$get_maintainLegacyAppServerBehavior() {
        return this.$C_1;
    },
    set_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest$set_maintainLegacyAppServerBehavior(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_returnNotifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest$get_returnNotifications() {
        return this.$h_1;
    },
    set_returnNotifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RescheduleRequest$set_returnNotifications(value) {
        this.$h_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntitiesForAggregateQueryRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveEntitiesForAggregateQueryRequest(outerQuery, subQueries) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntitiesForAggregateQueryRequest.initializeBase(this);
    this.$3k_1 = outerQuery;
    this.$w_1 = subQueries;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntitiesForAggregateQueryRequest.prototype = {
    $3k_1: null,
    $w_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveEntitiesForAggregateQueryRequest$get_name() {
        return 'RetrieveEntitiesForAggregateQuery';
    },
    
    get_outerQuery: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveEntitiesForAggregateQueryRequest$get_outerQuery() {
        return this.$3k_1;
    },
    set_outerQuery: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveEntitiesForAggregateQueryRequest$set_outerQuery(value) {
        this.$3k_1 = value;
        return value;
    },
    
    get_subQueries: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveEntitiesForAggregateQueryRequest$get_subQueries() {
        return this.$w_1;
    },
    set_subQueries: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveEntitiesForAggregateQueryRequest$set_subQueries(value) {
        this.$w_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveMultipleRequest(query) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest.initializeBase(this);
    this.$Y_1 = query;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest.prototype = {
    $Y_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveMultipleRequest$get_name() {
        return 'RetrieveMultiple';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveMultipleRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_query: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveMultipleRequest$get_query() {
        return this.$Y_1;
    },
    set_query: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveMultipleRequest$set_query(value) {
        this.$Y_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrievePrincipalAccessRequest(target, principal) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest.initializeBase(this);
    this.$1_1 = target;
    this.$3v_1 = principal;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest.prototype = {
    $1_1: null,
    $3v_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrievePrincipalAccessRequest$get_name() {
        return 'RetrievePrincipalAccess';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrievePrincipalAccessRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrievePrincipalAccessRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_principal: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrievePrincipalAccessRequest$get_principal() {
        return this.$3v_1;
    },
    set_principal: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrievePrincipalAccessRequest$set_principal(value) {
        this.$3v_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest(target, columnSet, relatedEntitiesQuery, returnNotifications, clientRetrieveOptions) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest.initializeBase(this);
    this.$1_1 = target;
    this.$3_1 = columnSet;
    this.$3z_1 = relatedEntitiesQuery;
    this.$h_1 = returnNotifications;
    this.$4_1 = clientRetrieveOptions;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest.prototype = {
    $1_1: null,
    $3_1: null,
    $3z_1: null,
    $h_1: false,
    $4_1: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$get_name() {
        return 'Retrieve';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_columnSet: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$get_columnSet() {
        return this.$3_1;
    },
    set_columnSet: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$set_columnSet(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_relatedEntitiesQuery: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$get_relatedEntitiesQuery() {
        return this.$3z_1;
    },
    set_relatedEntitiesQuery: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$set_relatedEntitiesQuery(value) {
        this.$3z_1 = value;
        return value;
    },
    
    get_returnNotifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$get_returnNotifications() {
        return this.$h_1;
    },
    set_returnNotifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$set_returnNotifications(value) {
        this.$h_1 = value;
        return value;
    },
    
    get_clientRetrieveOptions: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$get_clientRetrieveOptions() {
        return this.$4_1;
    },
    set_clientRetrieveOptions: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_RetrieveRequest$set_clientRetrieveOptions(value) {
        this.$4_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest(lineNumber, func, fileName, report, reportToWatson, errorReportingPreference, addServerInformation) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.initializeBase(this);
    this.$1x_1 = lineNumber;
    this.$1r_1 = func;
    this.$r_1 = fileName;
    this.$28_1 = report;
    this.$29_1 = reportToWatson;
    this.$1p_1 = errorReportingPreference;
    this.$1d_1 = addServerInformation;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.prototype = {
    $1x_1: 0,
    $1r_1: null,
    $r_1: null,
    $28_1: null,
    $29_1: false,
    $1p_1: 0,
    $1d_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_name() {
        return 'ScriptError';
    },
    
    get_lineNumber: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_lineNumber() {
        return this.$1x_1;
    },
    set_lineNumber: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$set_lineNumber(value) {
        this.$1x_1 = value;
        return value;
    },
    
    get_func: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_func() {
        return this.$1r_1;
    },
    set_func: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$set_func(value) {
        this.$1r_1 = value;
        return value;
    },
    
    get_fileName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_fileName() {
        return this.$r_1;
    },
    set_fileName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$set_fileName(value) {
        this.$r_1 = value;
        return value;
    },
    
    get_report: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_report() {
        return this.$28_1;
    },
    set_report: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$set_report(value) {
        this.$28_1 = value;
        return value;
    },
    
    get_reportToWatson: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_reportToWatson() {
        return this.$29_1;
    },
    set_reportToWatson: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$set_reportToWatson(value) {
        this.$29_1 = value;
        return value;
    },
    
    get_errorReportingPreference: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_errorReportingPreference() {
        return this.$1p_1;
    },
    set_errorReportingPreference: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$set_errorReportingPreference(value) {
        this.$1p_1 = value;
        return value;
    },
    
    get_addServerInformation: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$get_addServerInformation() {
        return this.$1d_1;
    },
    set_addServerInformation: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$set_addServerInformation(value) {
        this.$1d_1 = value;
        return value;
    },
    
    requestBody: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_ScriptErrorRequest$requestBody() {
        return String.format('<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><SendScriptErrorReport xmlns=\"http://schemas.microsoft.com/crm/2009/WebServices\"><fileName>{0}</fileName><lineNumber>{1}</lineNumber><function>{2}</function><errorReport>{3}</errorReport><addServerInformation>{4}</addServerInformation><errorReportingPreference>{5}</errorReportingPreference><reportToWatson>{6}</reportToWatson></SendScriptErrorReport></soap:Body></soap:Envelope>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(this.$r_1), this.$1x_1, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(this.$1r_1), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(this.$28_1), this.$1d_1, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference.toString(this.$1p_1), this.$29_1);
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest(entityMoniker, state, status, maintainLegacyAppServerBehavior) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest.initializeBase(this);
    this.$14_1 = entityMoniker;
    this.$j_1 = state;
    this.$E_1 = status;
    this.$C_1 = maintainLegacyAppServerBehavior;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest.prototype = {
    $14_1: null,
    $j_1: 0,
    $E_1: 0,
    $C_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$get_name() {
        return 'SetState';
    },
    
    get_entityMoniker: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$get_entityMoniker() {
        return this.$14_1;
    },
    set_entityMoniker: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$set_entityMoniker(value) {
        this.$14_1 = value;
        return value;
    },
    
    get_state: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$get_state() {
        return this.$j_1;
    },
    set_state: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$set_state(value) {
        this.$j_1 = value;
        return value;
    },
    
    get_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$get_status() {
        return this.$E_1;
    },
    set_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$set_status(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$get_maintainLegacyAppServerBehavior() {
        return this.$C_1;
    },
    set_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_SetStateRequest$set_maintainLegacyAppServerBehavior(value) {
        this.$C_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest(target, suppressDuplicateDetection, calculateMatchCodeSynchronously, solutionUniqueName, maintainLegacyAppServerBehavior) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest.initializeBase(this);
    this.$1_1 = target;
    this.$k_1 = suppressDuplicateDetection;
    this.$11_1 = calculateMatchCodeSynchronously;
    this.$i_1 = solutionUniqueName;
    this.$C_1 = maintainLegacyAppServerBehavior;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest.prototype = {
    $1_1: null,
    $k_1: false,
    $11_1: false,
    $i_1: null,
    $C_1: false,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$get_name() {
        return 'Update';
    },
    
    get_xmlNamespace: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$get_xmlNamespace() {
        return 'http://schemas.microsoft.com/xrm/2011/Contracts';
    },
    
    get_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$get_target() {
        return this.$1_1;
    },
    set_target: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$set_target(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_suppressDuplicateDetection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$get_suppressDuplicateDetection() {
        return this.$k_1;
    },
    set_suppressDuplicateDetection: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$set_suppressDuplicateDetection(value) {
        this.$k_1 = value;
        return value;
    },
    
    get_calculateMatchCodeSynchronously: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$get_calculateMatchCodeSynchronously() {
        return this.$11_1;
    },
    set_calculateMatchCodeSynchronously: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$set_calculateMatchCodeSynchronously(value) {
        this.$11_1 = value;
        return value;
    },
    
    get_solutionUniqueName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$get_solutionUniqueName() {
        return this.$i_1;
    },
    set_solutionUniqueName: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$set_solutionUniqueName(value) {
        this.$i_1 = value;
        return value;
    },
    
    get_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$get_maintainLegacyAppServerBehavior() {
        return this.$C_1;
    },
    set_maintainLegacyAppServerBehavior: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_UpdateRequest$set_maintainLegacyAppServerBehavior(value) {
        this.$C_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WhoAmIRequest() {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest.initializeBase(this);
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest.prototype = {
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WhoAmIRequest$get_name() {
        return 'WhoAmI';
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest = function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WinOpportunityRequest(opportunityClose, status) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest.initializeBase(this);
    this.$18_1 = opportunityClose;
    this.$E_1 = status;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest.prototype = {
    $18_1: null,
    $E_1: 0,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WinOpportunityRequest$get_name() {
        return 'WinOpportunity';
    },
    
    get_opportunityClose: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WinOpportunityRequest$get_opportunityClose() {
        return this.$18_1;
    },
    set_opportunityClose: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WinOpportunityRequest$set_opportunityClose(value) {
        this.$18_1 = value;
        return value;
    },
    
    get_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WinOpportunityRequest$get_status() {
        return this.$E_1;
    },
    set_status: function Microsoft_Crm_Client_Core_Storage_DataApi_Requests_WinOpportunityRequest$set_status(value) {
        this.$E_1 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.DataApi.Responses');

Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddRecurrenceResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_AddRecurrenceResponse(id) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddRecurrenceResponse.initializeBase(this, [ 'AddRecurrence' ]);
    this.$B_1 = id;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddRecurrenceResponse.prototype = {
    $B_1: null,
    
    get_id: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_AddRecurrenceResponse$get_id() {
        return this.$B_1;
    },
    set_id: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_AddRecurrenceResponse$set_id(value) {
        this.$B_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.BookResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_BookResponse(validationResult, notifications) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.BookResponse.initializeBase(this, [ 'Book' ]);
    this.$1H_1 = validationResult;
    this.$g_1 = notifications;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.BookResponse.prototype = {
    $1H_1: null,
    $g_1: null,
    
    get_validationResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_BookResponse$get_validationResult() {
        return this.$1H_1;
    },
    set_validationResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_BookResponse$set_validationResult(value) {
        this.$1H_1 = value;
        return value;
    },
    
    get_notifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_BookResponse$get_notifications() {
        return this.$g_1;
    },
    set_notifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_BookResponse$set_notifications(value) {
        this.$g_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.SearchDocumentResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_SearchDocumentResponse(searchLocation, documentLocation) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.SearchDocumentResponse.initializeBase(this, [ 'SearchDocument' ]);
    this.$4D_1 = searchLocation;
    this.$2l_1 = documentLocation;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.SearchDocumentResponse.prototype = {
    $4D_1: null,
    $2l_1: null,
    
    get_searchLocation: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_SearchDocumentResponse$get_searchLocation() {
        return this.$4D_1;
    },
    set_searchLocation: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_SearchDocumentResponse$set_searchLocation(value) {
        this.$4D_1 = value;
        return value;
    },
    
    get_documentLocation: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_SearchDocumentResponse$get_documentLocation() {
        return this.$2l_1;
    },
    set_documentLocation: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_SearchDocumentResponse$set_documentLocation(value) {
        this.$2l_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.NewDocumentResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_NewDocumentResponse(editLink) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.NewDocumentResponse.initializeBase(this, [ 'NewDocument' ]);
    this.$2m_1 = editLink;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.NewDocumentResponse.prototype = {
    $2m_1: null,
    
    get_editLink: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_NewDocumentResponse$get_editLink() {
        return this.$2m_1;
    },
    set_editLink: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_NewDocumentResponse$set_editLink(value) {
        this.$2m_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateDocumentLibrariesResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_CreateDocumentLibrariesResponse(documentLibraryResult) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateDocumentLibrariesResponse.initializeBase(this, [ 'CreateDocumentLibraries' ]);
    this.$2k_1 = documentLibraryResult;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateDocumentLibrariesResponse.prototype = {
    $2k_1: null,
    
    get_documentLibraryResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_CreateDocumentLibrariesResponse$get_documentLibraryResult() {
        return this.$2k_1;
    },
    set_documentLibraryResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_CreateDocumentLibrariesResponse$set_documentLibraryResult(value) {
        this.$2k_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ValidateUrlResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ValidateUrlResponse(urlValidationResult) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ValidateUrlResponse.initializeBase(this, [ 'ValidateUrl' ]);
    this.$4Y_1 = urlValidationResult;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ValidateUrlResponse.prototype = {
    $4Y_1: null,
    
    get_urlValidationResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ValidateUrlResponse$get_urlValidationResult() {
        return this.$4Y_1;
    },
    set_urlValidationResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ValidateUrlResponse$set_urlValidationResult(value) {
        this.$4Y_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ConvertActivityResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ConvertActivityResponse(recordId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ConvertActivityResponse.initializeBase(this, [ 'ConvertActivity' ]);
    this.$3x_1 = recordId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ConvertActivityResponse.prototype = {
    $3x_1: null,
    
    get_recordId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ConvertActivityResponse$get_recordId() {
        return this.$3x_1;
    },
    set_recordId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ConvertActivityResponse$set_recordId(value) {
        this.$3x_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_CreateResponse(id) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateResponse.initializeBase(this, [ 'Create' ]);
    this.$B_1 = id;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateResponse.prototype = {
    $B_1: null,
    
    get_id: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_CreateResponse$get_id() {
        return this.$B_1;
    },
    set_id: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_CreateResponse$set_id(value) {
        this.$B_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteMultipleResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteMultipleResponse(isFaulted, responses) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteMultipleResponse.initializeBase(this, [ 'ExecuteMultiple' ]);
    this.$3N_1 = isFaulted;
    this.$46_1 = responses;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteMultipleResponse.prototype = {
    $3N_1: false,
    $46_1: null,
    
    get_isFaulted: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteMultipleResponse$get_isFaulted() {
        return this.$3N_1;
    },
    set_isFaulted: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteMultipleResponse$set_isFaulted(value) {
        this.$3N_1 = value;
        return value;
    },
    
    get_responses: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteMultipleResponse$get_responses() {
        return this.$46_1;
    },
    set_responses: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteMultipleResponse$set_responses(value) {
        this.$46_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteQuickFindResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteQuickFindResponse(result) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteQuickFindResponse.initializeBase(this, [ 'ExecuteQuickFind' ]);
    this.$1E_1 = result;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteQuickFindResponse.prototype = {
    $1E_1: null,
    
    get_result: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteQuickFindResponse$get_result() {
        return this.$1E_1;
    },
    set_result: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_ExecuteQuickFindResponse$set_result(value) {
        this.$1E_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.GetValidStatusTransitionResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_GetValidStatusTransitionResponse(result) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.GetValidStatusTransitionResponse.initializeBase(this, [ 'GetValidStatusTransition' ]);
    this.$1E_1 = result;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.GetValidStatusTransitionResponse.prototype = {
    $1E_1: 0,
    
    get_result: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_GetValidStatusTransitionResponse$get_result() {
        return this.$1E_1;
    },
    set_result: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_GetValidStatusTransitionResponse$set_result(value) {
        this.$1E_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InitializeFromResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_InitializeFromResponse(entity) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InitializeFromResponse.initializeBase(this, [ 'InitializeFrom' ]);
    this.$5_1 = entity;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InitializeFromResponse.prototype = {
    $5_1: null,
    
    get_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_InitializeFromResponse$get_entity() {
        return this.$5_1;
    },
    set_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_InitializeFromResponse$set_entity(value) {
        this.$5_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InviteUserResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_InviteUserResponse(invitationToken) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InviteUserResponse.initializeBase(this, [ 'InviteUser' ]);
    this.$39_1 = invitationToken;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InviteUserResponse.prototype = {
    $39_1: null,
    
    get_invitationToken: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_InviteUserResponse$get_invitationToken() {
        return this.$39_1;
    },
    set_invitationToken: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_InviteUserResponse$set_invitationToken(value) {
        this.$39_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.FetchSiteUrlResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_FetchSiteUrlResponse(siteAndLocationUrl) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.FetchSiteUrlResponse.initializeBase(this, [ 'FetchSiteUrl' ]);
    this.$4I_1 = siteAndLocationUrl;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.FetchSiteUrlResponse.prototype = {
    $4I_1: null,
    
    get_siteAndLocationUrl: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_FetchSiteUrlResponse$get_siteAndLocationUrl() {
        return this.$4I_1;
    },
    set_siteAndLocationUrl: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_FetchSiteUrlResponse$set_siteAndLocationUrl(value) {
        this.$4I_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddOrEditLocationResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_AddOrEditLocationResponse(locationId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddOrEditLocationResponse.initializeBase(this, [ 'AddOrEditLocation' ]);
    this.$17_1 = locationId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddOrEditLocationResponse.prototype = {
    $17_1: null,
    
    get_locationId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_AddOrEditLocationResponse$get_locationId() {
        return this.$17_1;
    },
    set_locationId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_AddOrEditLocationResponse$set_locationId(value) {
        this.$17_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.QualifyLeadResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_QualifyLeadResponse(createdEntities) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.QualifyLeadResponse.initializeBase(this, [ 'QualifyLead' ]);
    this.$2Z_1 = createdEntities;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.QualifyLeadResponse.prototype = {
    $2Z_1: null,
    
    get_createdEntities: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_QualifyLeadResponse$get_createdEntities() {
        return this.$2Z_1;
    },
    set_createdEntities: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_QualifyLeadResponse$set_createdEntities(value) {
        this.$2Z_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RescheduleResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RescheduleResponse(validationResult, notifications) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RescheduleResponse.initializeBase(this, [ 'Reschedule' ]);
    this.$1H_1 = validationResult;
    this.$g_1 = notifications;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RescheduleResponse.prototype = {
    $1H_1: null,
    $g_1: null,
    
    get_validationResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RescheduleResponse$get_validationResult() {
        return this.$1H_1;
    },
    set_validationResult: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RescheduleResponse$set_validationResult(value) {
        this.$1H_1 = value;
        return value;
    },
    
    get_notifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RescheduleResponse$get_notifications() {
        return this.$g_1;
    },
    set_notifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RescheduleResponse$set_notifications(value) {
        this.$g_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveEntitiesForAggregateQueryResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveEntitiesForAggregateQueryResponse(entityCollection) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveEntitiesForAggregateQueryResponse.initializeBase(this, [ 'RetrieveEntitiesForAggregateQuery' ]);
    this.$13_1 = entityCollection;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveEntitiesForAggregateQueryResponse.prototype = {
    $13_1: null,
    
    get_entityCollection: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveEntitiesForAggregateQueryResponse$get_entityCollection() {
        return this.$13_1;
    },
    set_entityCollection: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveEntitiesForAggregateQueryResponse$set_entityCollection(value) {
        this.$13_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveMultipleResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveMultipleResponse(entityCollection) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveMultipleResponse.initializeBase(this, [ 'RetrieveMultiple' ]);
    this.$13_1 = entityCollection;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveMultipleResponse.prototype = {
    $13_1: null,
    
    get_entityCollection: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveMultipleResponse$get_entityCollection() {
        return this.$13_1;
    },
    set_entityCollection: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveMultipleResponse$set_entityCollection(value) {
        this.$13_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrievePrincipalAccessResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrievePrincipalAccessResponse(accessRights) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrievePrincipalAccessResponse.initializeBase(this, [ 'RetrievePrincipalAccess' ]);
    this.$S_1 = accessRights;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrievePrincipalAccessResponse.prototype = {
    $S_1: 0,
    
    get_accessRights: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrievePrincipalAccessResponse$get_accessRights() {
        return this.$S_1;
    },
    set_accessRights: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrievePrincipalAccessResponse$set_accessRights(value) {
        this.$S_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveResponse(entity, notifications) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveResponse.initializeBase(this, [ 'Retrieve' ]);
    this.$5_1 = entity;
    this.$g_1 = notifications;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveResponse.prototype = {
    $5_1: null,
    $g_1: null,
    
    get_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveResponse$get_entity() {
        return this.$5_1;
    },
    set_entity: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveResponse$set_entity(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_notifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveResponse$get_notifications() {
        return this.$g_1;
    },
    set_notifications: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_RetrieveResponse$set_notifications(value) {
        this.$g_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Responses.WhoAmIResponse = function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_WhoAmIResponse(userId, businessUnitId, organizationId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.Responses.WhoAmIResponse.initializeBase(this, [ 'WhoAmI' ]);
    this.$R_1 = userId;
    this.$10_1 = businessUnitId;
    this.$t_1 = organizationId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.WhoAmIResponse.prototype = {
    $R_1: null,
    $10_1: null,
    $t_1: null,
    
    get_userId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_WhoAmIResponse$get_userId() {
        return this.$R_1;
    },
    set_userId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_WhoAmIResponse$set_userId(value) {
        this.$R_1 = value;
        return value;
    },
    
    get_businessUnitId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_WhoAmIResponse$get_businessUnitId() {
        return this.$10_1;
    },
    set_businessUnitId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_WhoAmIResponse$set_businessUnitId(value) {
        this.$10_1 = value;
        return value;
    },
    
    get_organizationId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_WhoAmIResponse$get_organizationId() {
        return this.$t_1;
    },
    set_organizationId: function Microsoft_Crm_Client_Core_Storage_DataApi_Responses_WhoAmIResponse$set_organizationId(value) {
        this.$t_1 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Dynamics.Client.Core.Imported');

Microsoft.Dynamics.Client.Core.Imported.XPathResultType = function() {}
Microsoft.Dynamics.Client.Core.Imported.XPathResultType.prototype = {
    ANY_TYPE: 0, 
    NUMBER_TYPE: 1, 
    STRING_TYPE: 2, 
    BOOLEAN_TYPE: 3, 
    UNORDERED_NODE_ITERATOR_TYPE: 4, 
    ORDERED_NODE_ITERATOR_TYPE: 5, 
    UNORDERED_NODE_SNAPSHOT_TYPE: 6, 
    ORDERED_NODE_SNAPSHOT_TYPE: 7, 
    ANY_UNORDERED_NODE_TYPE: 8, 
    FIRST_ORDERED_NODE_TYPE: 9
}
Microsoft.Dynamics.Client.Core.Imported.XPathResultType.registerEnum('Microsoft.Dynamics.Client.Core.Imported.XPathResultType', false);


function IsNull(value) {
    return typeof(value) === 'undefined' || typeof(value) === 'unknown' || value == null;
}


Type.registerNamespace('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils');

Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers() {
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullArgument = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnNullArgument(argument, argumentName) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNull(argument)) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnNullArgument({0}, {1})', argument, argumentName);
        throw Error.argumentNull(argumentName, 'Argument can\'t be null');
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnNullOrUndefinedArgument(argument, argumentName) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(argument)) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnNullOrUndefinedArgument({0}, {1})', argument, argumentName);
        throw Error.argumentNull(argumentName, 'Argument can\'t be null or undefined');
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnUndefinedArgument = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnUndefinedArgument(argument, argumentName) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isUndefined(argument)) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnUndefinedArgument({0}, {1})', argument, argumentName);
        throw Error.argumentNull(argumentName, 'Argument can\'t be undefined');
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrEmptyArgument = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnNullOrEmptyArgument(str, argumentName) {
    if (!str || !str.length) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnNullOrEmptyArgument({0}, {1})', str, argumentName);
        throw Error.argumentNull(argumentName, 'Argument can\'t be null or empty');
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrEmptyArrayArgument = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnNullOrEmptyArrayArgument(array, argumentName) {
    if (!array || !array.length) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnNullOrEmptyArrayArgument({0}, {1})', array, argumentName);
        throw Error.argumentNull(argumentName, 'Argument can\'t be null or empty');
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnEquals = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnEquals(argument, unexpectedValue, argumentName) {
    if (argument === unexpectedValue) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnEquals({0}, {1}, {2})', argument, unexpectedValue, argumentName);
        throw Error.argument(argumentName, 'Argument value should not be equal to ' + unexpectedValue.toString());
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNotEquals = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnNotEquals(argument, expectedValue, argumentName) {
    if (argument !== expectedValue) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnNotEquals({0}, {1}, {2})', argument, expectedValue, argumentName);
        throw Error.argument(argumentName, 'Argument is ' + argument + 'but should be equal to ' + expectedValue);
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnOutOfRange = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnOutOfRange(value, minValue, maxValue, argumentName) {
    if (value < minValue || value > maxValue) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnOutOfRange({0}, {1}, {2}, {3})', value, minValue, maxValue, argumentName);
        throw Error.argumentOutOfRange(argumentName);
    }
}
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnAssert = function Microsoft_Exchange_Clients_Owa2_Client_Core_Framework_Utils_ExceptionHelpers$throwOnAssert(condition, message) {
    if (!condition) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(51, 'ExceptionHelpers.ThrowOnAssert({0})', message);
        throw Error.create('ExceptionHelpers.ThrowOnAssert(' + message + ')');
    }
}


Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Dictionary.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Dictionary');
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum');
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace');
_Math.registerClass('_Math');
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script');
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String');
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Debug.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Debug');
OptionalParameter.registerClass('OptionalParameter');
Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace.registerClass('Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace');
Microsoft.Dynamics.Client.Core.Framework.PerformanceMarker.registerClass('Microsoft.Dynamics.Client.Core.Framework.PerformanceMarker');
Microsoft.Dynamics.Client.Core.Framework.PerformanceStopwatch.registerClass('Microsoft.Dynamics.Client.Core.Framework.PerformanceStopwatch');
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.registerClass('Microsoft.Dynamics.Client.Core.Framework.FieldFormat');
Microsoft.Dynamics.Client.Core.Framework.Guid.registerClass('Microsoft.Dynamics.Client.Core.Framework.Guid', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Dynamics.Client.Core.Framework.ObjectComparer.registerClass('Microsoft.Dynamics.Client.Core.Framework.ObjectComparer');
Microsoft.Dynamics.Client.Core.Framework.Undefined.registerClass('Microsoft.Dynamics.Client.Core.Framework.Undefined');
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.registerClass('Microsoft.Crm.Client.Core.Storage.Common.AllColumns', null, Microsoft.Crm.Client.Core.Storage.Common.IColumnSet);
Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ColumnSet', null, Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.StorageConstants.registerClass('Microsoft.Crm.Client.Core.Storage.Common.StorageConstants');
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper', null, Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList);
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode');
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper', Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode);
Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper', null, Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList);
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory');
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeListWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeListWrapper', null, Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList);
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeWrapper', Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode);
Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper', Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.WebServiceCallRetryPolicy.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.WebServiceCallRetryPolicy');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue', null, Microsoft.Dynamics.Client.Core.Framework.IAlias, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata', null, Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotification.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotification');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameter.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameter');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey, Microsoft.Dynamics.Client.Core.Framework.ICollection);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata', null, Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference', null, Microsoft.Dynamics.Client.Core.Framework.IReference, Microsoft.Dynamics.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ErrorInfo.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ErrorInfo');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleResponseItem.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleResponseItem');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleSettings.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleSettings');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable, Microsoft.Dynamics.Client.Core.Framework.IPicklistItem);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResult.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResult');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ResourceInfo.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ResourceInfo');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TraceInfo.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TraceInfo');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings', null, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ValidationResult.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ValidationResult');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault');
Microsoft.Crm.Client.Core.Storage.DataApi.Query.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Query');
Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery', Microsoft.Crm.Client.Core.Storage.DataApi.Query);
Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery');
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery', Microsoft.Crm.Client.Core.Storage.DataApi.Query, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey);
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery', Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery);
Microsoft.Crm.Client.Core.Storage.DataApi.Request.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Request');
Microsoft.Crm.Client.Core.Storage.DataApi.Response.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Response');
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.UserContext', null, Microsoft.Dynamics.Client.Core.Framework.IUserContext, Microsoft.Dynamics.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteMultipleRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteMultipleRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteMultipleRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntitiesForAggregateQueryRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntitiesForAggregateQueryRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntitiesForAggregateQueryRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest', Microsoft.Crm.Client.Core.Storage.DataApi.Request);
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Request.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddRecurrenceResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddRecurrenceResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.BookResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.BookResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.SearchDocumentResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.SearchDocumentResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.NewDocumentResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.NewDocumentResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateDocumentLibrariesResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateDocumentLibrariesResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ValidateUrlResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ValidateUrlResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ConvertActivityResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ConvertActivityResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteMultipleResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteMultipleResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteQuickFindResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteQuickFindResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.GetValidStatusTransitionResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.GetValidStatusTransitionResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InitializeFromResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InitializeFromResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InviteUserResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InviteUserResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.FetchSiteUrlResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.FetchSiteUrlResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddOrEditLocationResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddOrEditLocationResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.QualifyLeadResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.QualifyLeadResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RescheduleResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RescheduleResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveEntitiesForAggregateQueryResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveEntitiesForAggregateQueryResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveMultipleResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveMultipleResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrievePrincipalAccessResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrievePrincipalAccessResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Crm.Client.Core.Storage.DataApi.Responses.WhoAmIResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Responses.WhoAmIResponse', Microsoft.Crm.Client.Core.Storage.DataApi.Response);
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.registerClass('Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers');
_Math.maxSignedInt32 = 2147483647;
_Math.minSignedInt32 = -2147483648;
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty = '';
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.$4w = new RegExp('[\n\r]+');
Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Debug.$$cctor();
Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace.storage = 1005;
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.raw = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(0);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.numeric = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(1);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.label = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(2);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.value = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(3);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.state = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(4);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.id = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(5);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.name = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(6);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.logicalName = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(7);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.allowedStatusTransitions = Microsoft.Dynamics.Client.Core.Framework.FieldFormat.$b(8);
Microsoft.Dynamics.Client.Core.Framework.FieldFormat.delimiter = '!';
Microsoft.Dynamics.Client.Core.Framework.Guid.$12 = null;
Microsoft.Dynamics.Client.Core.Framework.Guid.$31 = null;
Microsoft.Dynamics.Client.Core.Framework.Guid.$33 = null;
Microsoft.Dynamics.Client.Core.Framework.Guid.$2O = null;
Microsoft.Dynamics.Client.Core.Framework.Guid.$2U = null;
Microsoft.Dynamics.Client.Core.Framework.Undefined.undefinedKeyword = 'undefined';
Microsoft.Dynamics.Client.Core.Framework.Undefined.booleanValue = undefined;
Microsoft.Dynamics.Client.Core.Framework.Undefined.int32Value = undefined;
Microsoft.Dynamics.Client.Core.Framework.Undefined.doubleValue = undefined;
Microsoft.Dynamics.Client.Core.Framework.Undefined.stringValue = undefined;
Microsoft.Dynamics.Client.Core.Framework.Undefined.objectValue = undefined;
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.$37 = null;
Microsoft.Crm.Client.Core.Storage.Common.StorageConstants.compositeIndexDelimiter = '_';
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4Z = false;
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$4V = false;
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.idPath = 'id';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.entityLogicalNamePath = 'entitylogicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.logicalNamePath = 'logicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.entityAttributeLogicalNamesPath = 'entitylogicalname_logicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.timestampPath = 'timestamp';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.embeddedPriorityTimestampPath = 'clientretrieveoptions.priority_timestamp';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.idPath = 'id';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.logicalNamePath = 'logicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.$12 = null;
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.logicalName = 'organization';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.defaultMaxUploadFileSize = 5242880;
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.columns = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet([ 'name', 'languagecode', 'enabledlanguages', 'currencydisplayoption', 'reportscripterrors', 'issopintegrationenabled', 'fiscalcalendarstart', 'isautosaveenabled', 'orgcultureinfolcid', 'basecurrencyid', 'pricingdecimalprecision', 'isduplicatedetectionenabled', 'isduplicatedetectionenabledforonlinecreateupdate' ]);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.keyPath = 'statekey';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.logicalName = 'transactioncurrency';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.logicalName = 'usersettings';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.$4j = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Number))([ 1041, 2052, 1028 ]);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.$4s = new RegExp('(<|>|\\\\|\"|\\r|\\n)', 'i');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$4v = new RegExp('\\&\\#64;\\&\\#91;([a-z0-9_]{1,50}),(\\{{0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\\}{0,1}),\\&\\#34;(.*?)\\&\\#34;\\&\\#93;', 'gm');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$4o = new RegExp('(((www\\.)|((http|https|ftp|ftps|onenote|tel|mailto|gopher)://))[\\S]*[a-zA-Z0-9+&@#/%=~_|$])', 'igm');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$4p = new RegExp('^((http|https|ftp|ftps|onenote|tel|mailto|gopher)://)(.*)$', 'i');
Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$2D = null;
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.transactionCurrencyByIdExternalContextField = 'transactioncurrencybyid';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.timeZoneDefinitionByCodeExternalContextField = 'timezonedefinitionbycode';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.isLiveExternalContextField = 'islive';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.isOsdpOrganizationExternalContextField = 'isosdporganization';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.usePathBasedUrlsExternalContextField = 'usepathbasedurls';
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.scriptErrorRelativeWebEndpointUrl = '/AppWebServices/ScriptError.asmx';
Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.scriptErrorSendReportSoapAction = 'http://schemas.microsoft.com/crm/2009/WebServices/SendScriptErrorReport';
