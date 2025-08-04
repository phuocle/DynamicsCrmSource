Type.registerNamespace('Microsoft.Crm.Client.Core');

Microsoft.Crm.Client.Core.SharedScript = function() {
}
Microsoft.Crm.Client.Core.SharedScript.load = function(target, scriptUrl, importer) {
    var $v_0 = scriptUrl.toLowerCase();
    var $v_1 = function($p1_0, $p1_1) {
        return $p1_0.document.writeln('<script src=' + CrmEncodeDecode.CrmHtmlAttributeEncode(scriptUrl) + ' id=' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) + ' ></script>');
    };
    Microsoft.Crm.Client.Core.SharedScript.loadAsync(target, scriptUrl, importer, $v_1, null);
}
Microsoft.Crm.Client.Core.SharedScript.loadAsync = function(target, scriptUrl, importer, loader, onSuccess) {
    if (IsNull(scriptUrl)) {
        throw Error.argumentNull('scriptUrl');
    }
    if (IsNull(importer)) {
        throw Error.argumentNull('importer');
    }
    if (IsNull(loader)) {
        throw Error.argumentNull('loader');
    }
    var $v_0 = scriptUrl.toLowerCase();
    var $v_1 = [];
    if (Microsoft.Crm.Client.Core.SharedScript.$2D()) {
        $v_1.push(window.top);
        $v_1.push(window.parent);
    }
    else if (Microsoft.Crm.Client.Core.SharedScript.$2C()) {
        $v_1.push(window.parent);
    }
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2];
        if (!IsNull($v_3) && !IsNull($v_3.document) && $v_3 !== target.self) {
            var $v_4 = $v_3.document.getElementById($v_0);
            if (!IsNull($v_4)) {
                importer($v_3);
                if (!IsNull(onSuccess)) {
                    onSuccess();
                }
                return;
            }
        }
    }
    loader(target, onSuccess);
}
Microsoft.Crm.Client.Core.SharedScript.$2D = function() {
    try {
        return !!window.top.location && !!window.top.location.href;
    }
    catch ($$e_0) {
        return false;
    }
}
Microsoft.Crm.Client.Core.SharedScript.$2C = function() {
    try {
        return !!window.parent.location && !!window.parent.location.href;
    }
    catch ($$e_0) {
        return false;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Framework');

Microsoft.Crm.Client.Core.Framework.IRootModel = function() {}
Microsoft.Crm.Client.Core.Framework.IRootModel.registerInterface('Microsoft.Crm.Client.Core.Framework.IRootModel');


Microsoft.Crm.Client.Core.Framework.ICustomControlAttribute = function() {}
Microsoft.Crm.Client.Core.Framework.ICustomControlAttribute.registerInterface('Microsoft.Crm.Client.Core.Framework.ICustomControlAttribute');


Microsoft.Crm.Client.Core.Framework.IOptionMetadata = function() {}
Microsoft.Crm.Client.Core.Framework.IOptionMetadata.registerInterface('Microsoft.Crm.Client.Core.Framework.IOptionMetadata');


Microsoft.Crm.Client.Core.Framework.IOptionSetMetadata = function() {}
Microsoft.Crm.Client.Core.Framework.IOptionSetMetadata.registerInterface('Microsoft.Crm.Client.Core.Framework.IOptionSetMetadata');


Microsoft.Crm.Client.Core.Framework.INotifyPropertyChanged = function() {}
Microsoft.Crm.Client.Core.Framework.INotifyPropertyChanged.registerInterface('Microsoft.Crm.Client.Core.Framework.INotifyPropertyChanged');


Microsoft.Crm.Client.Core.Framework.DayOfWeek = function() {}
Microsoft.Crm.Client.Core.Framework.DayOfWeek.prototype = {
    Sunday: 0, 
    Monday: 1, 
    Tuesday: 2, 
    Wednesday: 3, 
    Thursday: 4, 
    Friday: 5, 
    Saturday: 6
}
Microsoft.Crm.Client.Core.Framework.DayOfWeek.registerEnum('Microsoft.Crm.Client.Core.Framework.DayOfWeek', false);


Microsoft.Crm.Client.Core.Framework.ICacheSize = function() {}
Microsoft.Crm.Client.Core.Framework.ICacheSize.registerInterface('Microsoft.Crm.Client.Core.Framework.ICacheSize');


Microsoft.Crm.Client.Core.Framework.PerformanceMarkerType = function() {}
Microsoft.Crm.Client.Core.Framework.PerformanceMarkerType.prototype = {
    undefined: 0, 
    majorEvent: 1, 
    localStore: 2
}
Microsoft.Crm.Client.Core.Framework.PerformanceMarkerType.registerEnum('Microsoft.Crm.Client.Core.Framework.PerformanceMarkerType', false);


Microsoft.Crm.Client.Core.Framework.IAuthenticationManager = function() {}
Microsoft.Crm.Client.Core.Framework.IAuthenticationManager.registerInterface('Microsoft.Crm.Client.Core.Framework.IAuthenticationManager');


Microsoft.Crm.Client.Core.Framework.AuthenticationState = function() {}
Microsoft.Crm.Client.Core.Framework.AuthenticationState.prototype = {
    initializing: 0, 
    ready: 1, 
    error: 2
}
Microsoft.Crm.Client.Core.Framework.AuthenticationState.registerEnum('Microsoft.Crm.Client.Core.Framework.AuthenticationState', false);


Microsoft.Crm.Client.Core.Framework.FormFactor = function() {}
Microsoft.Crm.Client.Core.Framework.FormFactor.prototype = {
    none: 0, 
    slate: 1, 
    phone: 2, 
    desktop: 3, 
    mailApp: 4
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


Microsoft.Crm.Client.Core.Framework.MailAppDisplayMode = function() {}
Microsoft.Crm.Client.Core.Framework.MailAppDisplayMode.prototype = {
    unknown: 0, 
    readDesktop: 1, 
    readTablet: 2, 
    readPhone: 3, 
    composeDesktop: 4, 
    composeTablet: 5, 
    composePhone: 6
}
Microsoft.Crm.Client.Core.Framework.MailAppDisplayMode.registerEnum('Microsoft.Crm.Client.Core.Framework.MailAppDisplayMode', false);


Microsoft.Crm.Client.Core.Framework.DateTimeFieldBehavior = function() {}
Microsoft.Crm.Client.Core.Framework.DateTimeFieldBehavior.prototype = {
    none: 0, 
    userLocal: 1, 
    dateOnly: 2, 
    timeZoneIndependent: 3
}
Microsoft.Crm.Client.Core.Framework.DateTimeFieldBehavior.registerEnum('Microsoft.Crm.Client.Core.Framework.DateTimeFieldBehavior', false);


Microsoft.Crm.Client.Core.Framework.MetadataType = function() {}
Microsoft.Crm.Client.Core.Framework.MetadataType.prototype = {
    none: 0, 
    workspace: 1, 
    form: 2, 
    component: 3, 
    entityCard: 4, 
    quickCreateForm: 5, 
    customization: 6, 
    listQuery: 7, 
    grid: 8, 
    command: 9, 
    siteMap: 10, 
    list: 11, 
    dialog: 12, 
    gridForm: 13, 
    inlineCreateForm: 14, 
    processControl: 15, 
    fetchXml: 16, 
    chartDrilldownForm: 17, 
    entity: 18, 
    attribute: 19, 
    webResource: 20, 
    applicationMetadata: 21, 
    quickEditForm: 22, 
    chart: 23, 
    uiStrings: 24, 
    businessLogic: 25, 
    searchPage: 26, 
    globalApplicationMetadata: 27, 
    applicationMetadataUserContext: 28, 
    staticJSFile: 29, 
    layoutXml: 30, 
    draftsPage: 31, 
    duplicateRecordsPage: 32, 
    applicationMetadataSettings: 33, 
    senderFormPage: 34, 
    setRegarding: 35, 
    senderCreateFormPage: 36, 
    interactionCentricWorkspace: 37, 
    taskBasedFlowGlobalMenu: 38, 
    taskBasedFlow: 39, 
    interactionCentricForm: 40, 
    cardForm: 41, 
    controlConfiguration: 42, 
    commandXaml: 43, 
    documentTemplate: 44, 
    processAction: 45, 
    recommendationModel: 46, 
    relevanceSearchPage: 47, 
    customControlTemplate: 48, 
    globalApplicationMetadataState: 49, 
    powerBIFullScreenPage: 50, 
    navigationProperty: 52, 
    followPage: 53, 
    emailTemplatesPage: 54, 
    subjectTreePage: 55, 
    unknownRecipientPage: 57, 
    entityNamesList: 58, 
    regardingObjectCard: 59
}
Microsoft.Crm.Client.Core.Framework.MetadataType.registerEnum('Microsoft.Crm.Client.Core.Framework.MetadataType', false);


Microsoft.Crm.Client.Core.Framework.ApplicationMetadataType = function() {}
Microsoft.Crm.Client.Core.Framework.ApplicationMetadataType.prototype = {
    all: 0, 
    systemApplicationMetadata: 1, 
    userApplicationMetadata: 2
}
Microsoft.Crm.Client.Core.Framework.ApplicationMetadataType.registerEnum('Microsoft.Crm.Client.Core.Framework.ApplicationMetadataType', false);


Microsoft.Crm.Client.Core.Framework.MetadataSubtype = function() {}
Microsoft.Crm.Client.Core.Framework.MetadataSubtype.prototype = {
    none: 0, 
    main: 1, 
    lookup: 2, 
    advancedFind: 3, 
    subGrid: 4, 
    jScript: 5, 
    css: 6, 
    png: 7, 
    jpg: 8, 
    gif: 9, 
    html: 10
}
Microsoft.Crm.Client.Core.Framework.MetadataSubtype.registerEnum('Microsoft.Crm.Client.Core.Framework.MetadataSubtype', false);


Microsoft.Crm.Client.Core.Framework.IAlias = function() {}
Microsoft.Crm.Client.Core.Framework.IAlias.registerInterface('Microsoft.Crm.Client.Core.Framework.IAlias');


Microsoft.Crm.Client.Core.Framework.IPicklistItem = function() {}
Microsoft.Crm.Client.Core.Framework.IPicklistItem.registerInterface('Microsoft.Crm.Client.Core.Framework.IPicklistItem');


Microsoft.Crm.Client.Core.Framework.IUserContext = function() {}
Microsoft.Crm.Client.Core.Framework.IUserContext.registerInterface('Microsoft.Crm.Client.Core.Framework.IUserContext');


Microsoft.Crm.Client.Core.Framework.OperationType = function() {}
Microsoft.Crm.Client.Core.Framework.OperationType.prototype = {
    unknown: -1, 
    create: 0, 
    read: 1, 
    update: 2, 
    Delete: 3, 
    append: 4, 
    appendTo: 5, 
    share: 6, 
    assign: 7
}
Microsoft.Crm.Client.Core.Framework.OperationType.registerEnum('Microsoft.Crm.Client.Core.Framework.OperationType', false);


Microsoft.Crm.Client.Core.Framework.ValueRequiredLevel = function() {}
Microsoft.Crm.Client.Core.Framework.ValueRequiredLevel.prototype = {
    unknown: -1, 
    none: 0, 
    systemRequired: 1, 
    applicationRequired: 2, 
    recommended: 3
}
Microsoft.Crm.Client.Core.Framework.ValueRequiredLevel.registerEnum('Microsoft.Crm.Client.Core.Framework.ValueRequiredLevel', false);


Microsoft.Crm.Client.Core.Framework.ErrorSource = function() {}
Microsoft.Crm.Client.Core.Framework.ErrorSource.prototype = {
    unknown: 0, 
    authentication: 1, 
    localStore: 2, 
    metadataSync: 3
}
Microsoft.Crm.Client.Core.Framework.ErrorSource.registerEnum('Microsoft.Crm.Client.Core.Framework.ErrorSource', false);


Microsoft.Crm.Client.Core.Framework.IReference = function() {}
Microsoft.Crm.Client.Core.Framework.IReference.registerInterface('Microsoft.Crm.Client.Core.Framework.IReference');


Microsoft.Crm.Client.Core.Framework.ISerializable = function() {}
Microsoft.Crm.Client.Core.Framework.ISerializable.registerInterface('Microsoft.Crm.Client.Core.Framework.ISerializable');


Microsoft.Crm.Client.Core.Framework.IList$1 = function() {}
Microsoft.Crm.Client.Core.Framework.IList$1.$$ = function(T) {
    var $$cn = 'IList$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework[$$cn] = function() {
        };
        $$ccr.registerInterface('Microsoft.Crm.Client.Core.Framework.' + $$cn);
    }
    return Microsoft.Crm.Client.Core.Framework[$$cn];
}
Microsoft.Crm.Client.Core.Framework.IList$1.registerInterface('Microsoft.Crm.Client.Core.Framework.IList$1');


Microsoft.Crm.Client.Core.Framework.IEquatable = function() {}
Microsoft.Crm.Client.Core.Framework.IEquatable.registerInterface('Microsoft.Crm.Client.Core.Framework.IEquatable');


Microsoft.Crm.Client.Core.Framework.TraceComponent = function() {}
Microsoft.Crm.Client.Core.Framework.TraceComponent.prototype = {
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
    draftsView: 162, 
    navigationCommand: 163, 
    telemetry: 164, 
    duplicateRecordsView: 165, 
    xrmInternals: 166, 
    performanceReport: 167, 
    landingPage: 168, 
    recentlyViewedItems: 169, 
    unknown: 1000, 
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
    mashup: 1027, 
    dialog: 1028, 
    activeItemContainerViewModel: 1029, 
    offlineSyncErrorLog: 1030, 
    offlineDataStore: 1031, 
    offlineMetadataSync: 1032, 
    clientSDK: 2010, 
    customControls: 1033, 
    taskBasedFlow: 1034, 
    offlineUpSync: 1035, 
    metadataSync: 1036, 
    webService: 1037, 
    formPreview: 1038, 
    userValidation: 1039, 
    interactionCentricDashboard: 2001, 
    interactionWall: 2002, 
    interactionWallEvent: 2003, 
    activityEntityInteractionWallSource: 2004, 
    noteEntityInteractionWallSource: 2005, 
    postEntityInteractionWallSource: 2006, 
    interactionCentricNavigationBar: 2007, 
    interactionCentricTimerControl: 2008, 
    lookupRelationshipFiltering: 2009, 
    powerBIViewModel: 2010
}
Microsoft.Crm.Client.Core.Framework.TraceComponent.registerEnum('Microsoft.Crm.Client.Core.Framework.TraceComponent', false);


Microsoft.Crm.Client.Core.Framework.DefaultContext = function($p0, $p1) {
    Microsoft.Crm.Client.Core.Framework.DefaultContext.initializeBase(this, [ $p0, $p1 ]);
}
Microsoft.Crm.Client.Core.Framework.DefaultContext.tryCreate = function(callerId, callerName) {
    if (Microsoft.Crm.Client.Core.Framework.CallingContext.get_isEnabled()) {
        return new Microsoft.Crm.Client.Core.Framework.DefaultContext(callerId, callerName);
    }
    return null;
}
Microsoft.Crm.Client.Core.Framework.DefaultContext.prototype = {
    
    toString: function() {
        return '[' + this.$i_0 + ']';
    }
}


Microsoft.Crm.Client.Core.Framework.CustomControlAttributeProperty = function() {
}
Microsoft.Crm.Client.Core.Framework.CustomControlAttributeProperty.getAttributeListByType = function(type) {
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.CustomControlAttributeProperty();
    return $v_0.getListByType(type);
}
Microsoft.Crm.Client.Core.Framework.CustomControlAttributeProperty.prototype = {
    
    getListByType: function(type) {
        switch (type.toLowerCase()) {
            case 'boolean':
            case 'picklist':
            case 'optionset':
            case 'multiselectpicklist':
            case 'twooptions':
                return this.$27_0();
            case 'string':
            case 'singleline':
                return this.$28_0();
            case 'memo':
            case 'multiple':
                return this.$25_0();
            case 'decimal':
            case 'double':
            case 'money':
            case 'currency':
            case 'fp':
            case 'float':
                return this.$26_0();
            case 'integer':
            case 'bigint':
            case 'whole':
                return this.$29_0();
            case 'lookup':
            case 'owner':
            case 'partylist':
            case 'customer':
                return this.$24_0();
            case 'datetime':
            case 'dateandtime':
                return this.$21_0();
            default:
                return this.$O_0();
        }
    },
    
    $O_0: function() {
        return [ 'displayName', 'name', 'requiredLevel', 'isSecured', 'type', 'sourcetype' ];
    },
    
    $1Z_0: function() {
        var $$t_0;
        return ($$t_0 = this.$O_0()).concat.call($$t_0, 'minValue', 'maxValue', 'imeMode', 'lastUpdatedField', 'lastUpdatedValue', 'rollupStateField', 'rollupStateValue', 'recalculate', 'rollupValid', 'calculatedFieldValid');
    },
    
    $21_0: function() {
        var $$t_0;
        return ($$t_0 = this.$O_0()).concat.call($$t_0, 'behavior', 'format', 'imeMode', 'lastUpdatedField', 'lastUpdatedValue', 'rollupStateField', 'rollupStateValue', 'recalculate', 'rollupValid', 'calculatedFieldValid');
    },
    
    $24_0: function() {
        var $$t_0;
        return ($$t_0 = this.$O_0()).concat.call($$t_0, 'targets');
    },
    
    $29_0: function() {
        var $$t_0;
        return ($$t_0 = this.$1Z_0()).concat.call($$t_0, 'format');
    },
    
    $26_0: function() {
        var $$t_0;
        return ($$t_0 = this.$1Z_0()).concat.call($$t_0, 'precision');
    },
    
    $28_0: function() {
        var $$t_0;
        return ($$t_0 = this.$O_0()).concat.call($$t_0, 'maxLength', 'format', 'imeMode');
    },
    
    $25_0: function() {
        var $$t_0;
        return ($$t_0 = this.$O_0()).concat.call($$t_0, 'maxLength', 'imeMode');
    },
    
    $27_0: function() {
        var $$t_0;
        return ($$t_0 = this.$O_0()).concat.call($$t_0, 'options', 'defaultValue', 'parentPicklistLogicalName', 'childPicklistLogicalNames');
    }
}


Microsoft.Crm.Client.Core.Framework.CustomControlConstants = function() {
}


Microsoft.Crm.Client.Core.Framework.CustomControlUtils = function() {
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.retrieveCorrespondingManifestType = function(sDataType, sDataTypeFormat) {
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(sDataType)) {
        switch (sDataType) {
            case 'boolean':
                return 'TwoOptions';
            case 'customer':
                return 'Lookup.Customer';
            case 'datetime':
                switch (sDataTypeFormat) {
                    case 'date':
                        return 'DateAndTime.DateOnly';
                    case 'datetime':
                        return 'DateAndTime.DateAndTime';
                    default:
                        return 'DateAndTime.DateOnly';
                }
            case 'decimal':
                return 'Decimal';
            case 'float':
                return 'FP';
            case 'integer':
                switch (sDataTypeFormat) {
                    case 'duration':
                        return 'Whole.Duration';
                    case 'language':
                        return 'Whole.Language';
                    case 'timezone':
                        return 'Whole.TimeZone';
                    default:
                        return 'Whole.None';
                }
            case 'lookup':
                switch (sDataTypeFormat) {
                    case 'regarding':
                        return 'Lookup.Regarding';
                    default:
                        return 'Lookup.Simple';
                }
            case 'memo':
                return 'Multiple';
            case 'money':
                return 'Currency';
            case 'owner':
                return 'Lookup.Owner';
            case 'partylist':
                return 'Lookup.PartyList';
            case 'picklist':
                return 'OptionSet';
            case 'multiselectpicklist':
                return 'MultiSelectOptionSet';
            case 'text':
            case 'string':
                switch (sDataTypeFormat) {
                    case 'email':
                        return 'SingleLine.Email';
                    case 'phone':
                        return 'SingleLine.Phone';
                    case 'text':
                        return 'SingleLine.Text';
                    case 'textarea':
                        return 'SingleLine.TextArea';
                    case 'tickersymbol':
                        return 'SingleLine.Ticker';
                    case 'unbound':
                        return 'Unbound';
                    case 'url':
                        return 'SingleLine.URL';
                    default:
                        return 'SingleLine.Text';
                }
        }
    }
    return '';
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedValueOptionMetadata = function(column) {
    var $v_0 = column.get_dataType().toLowerCase();
    return $v_0 === 'optionset' || $v_0 === 'twooptions' || $v_0 === 'picklist' || $v_0 === 'boolean';
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getInternalDataValue = function(publicValue, column) {
    if (!_Script.isNullOrUndefined(publicValue) && !(Microsoft.Crm.Client.Core.Framework.IPicklistItem.isInstanceOfType(publicValue)) && Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedValueOptionMetadata(column)) {
        var $v_0;
        if (Boolean.isInstanceOfType(publicValue)) {
            $v_0 = (publicValue) ? '1' : '0';
        }
        else {
            $v_0 = publicValue.toString();
        }
        return (column.get_unformattedAttributeData()['options']).get_options()[$v_0];
    }
    return publicValue;
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getPublicDataValue = function(internalRawValue, column) {
    var $v_0;
    if (Microsoft.Crm.Client.Core.Framework.IOptionMetadata.isInstanceOfType(internalRawValue)) {
        var $v_1 = internalRawValue;
        if (!_Script.isNullOrUndefined($v_1)) {
            $v_0 = $v_1.get_value();
        }
        else {
            $v_0 = $v_1;
        }
    }
    else {
        $v_0 = internalRawValue;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedEntityColumn = function(columnName) {
    return columnName.indexOf('.') !== -1;
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getLinkEntityAlias = function(columnName) {
    if (!Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedEntityColumn(columnName)) {
        return null;
    }
    return columnName.split('.')[0];
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getLinkEntityColumnName = function(columnName) {
    if (!Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedEntityColumn(columnName)) {
        return columnName;
    }
    return columnName.split('.')[1];
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.formatProperties = function(data) {
    var $v_0 = {};
    var $$dict_3 = data;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        if (Microsoft.Crm.Client.Core.Framework.IOptionSetMetadata.isInstanceOfType($v_1.value)) {
            $v_0[$v_1.key] = ($v_1.value).createSimpleForm();
        }
        else {
            $v_0[$v_1.key] = $v_1.value;
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.extractUnformattedAttributeData = function(original, formatted) {
    var $v_0 = {};
    var $$dict_4 = original;
    for (var $$key_5 in $$dict_4) {
        var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
        if (original[$v_1.key] !== formatted[$v_1.key]) {
            $v_0[$v_1.key] = $v_1.value;
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getRollupDateFieldName = function(attributeName) {
    var $v_0;
    if (attributeName.endsWith('_base')) {
        $v_0 = attributeName.replace('_base', '_date');
    }
    else {
        $v_0 = attributeName + '_date';
    }
    return $v_0;
}


Microsoft.Crm.Client.Core.Framework.Activity = function(name, properties) {
    this.n = name;
    this.t = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getUtcEquivalentFromLocal(new Date()).getMilliseconds();
    this.rid = Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString();
    this.p = properties;
    this.f = false;
}
Microsoft.Crm.Client.Core.Framework.Activity.prototype = {
    n: null,
    t: 0,
    rid: null,
    p: null,
    f: false
}


Microsoft.Crm.Client.Core.Framework.DoublyLinkedListNode = function() {
    this.$8_0 = null;
    this.$7_0 = null;
}
Microsoft.Crm.Client.Core.Framework.DoublyLinkedListNode.prototype = {
    $8_0: null,
    $7_0: null,
    
    get_previousNode: function() {
        return this.$8_0;
    },
    
    set_previousNode: function(value) {
        this.$8_0 = value;
        return value;
    },
    
    get_nextNode: function() {
        return this.$7_0;
    },
    
    set_nextNode: function(value) {
        this.$7_0 = value;
        return value;
    },
    
    removeNode: function() {
        var $v_0 = this.$8_0;
        var $v_1 = this.$7_0;
        if (!_Script.isNullOrUndefined($v_1)) {
            $v_1.$8_0 = $v_0;
        }
        if (!_Script.isNullOrUndefined($v_0)) {
            $v_0.$7_0 = $v_1;
        }
        this.$8_0 = null;
        this.$7_0 = null;
    },
    
    insertNodeBefore: function(node) {
        var $v_0 = this.$8_0;
        if (!_Script.isNullOrUndefined($v_0)) {
            $v_0.$7_0 = node;
        }
        node.$7_0 = this;
        node.$8_0 = $v_0;
        this.$8_0 = node;
        return node;
    },
    
    insertNodeAfter: function(node) {
        var $v_0 = this.$7_0;
        this.$7_0 = node;
        node.$7_0 = $v_0;
        node.$8_0 = this;
        if (!_Script.isNullOrUndefined($v_0)) {
            $v_0.$8_0 = node;
        }
        return node;
    }
}


Microsoft.Crm.Client.Core.Framework.ErrorData = function(errorCode, message) {
    this.$2_0 = errorCode;
    this.$V_0 = (!_Script.isNullOrUndefined(message)) ? message : '';
}
Microsoft.Crm.Client.Core.Framework.ErrorData.prototype = {
    $v_0: null,
    $y_0: null,
    $Z_0: false,
    
    get_isWarning: function() {
        return this.$Z_0;
    },
    
    set_isWarning: function(value) {
        this.$Z_0 = value;
        return value;
    },
    
    $2_0: 0,
    
    get_errorCode: function() {
        return this.$2_0;
    },
    
    set_errorCode: function(value) {
        this.$2_0 = value;
        return value;
    },
    
    get_message: function() {
        return this.$v_0;
    },
    
    set_message: function(value) {
        this.$v_0 = value;
        return value;
    },
    
    get_title: function() {
        return this.$y_0;
    },
    
    set_title: function(value) {
        this.$y_0 = value;
        return value;
    },
    
    $V_0: null,
    
    get_diagnosticMessage: function() {
        return this.$V_0;
    },
    
    set_diagnosticMessage: function(value) {
        this.$V_0 = value;
        return value;
    },
    
    $a_0: null,
    
    get_stackTrace: function() {
        return this.$a_0;
    },
    
    set_stackTrace: function(value) {
        this.$a_0 = value;
        return value;
    },
    
    $J_0: null,
    
    get_okButtonText: function() {
        return this.$J_0;
    },
    
    set_okButtonText: function(value) {
        this.$J_0 = value;
        return value;
    },
    
    $I_0: null,
    
    get_cancelButtonText: function() {
        return this.$I_0;
    },
    
    set_cancelButtonText: function(value) {
        this.$I_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Framework.MruCache$1 = function(maxSizeOfMruCache) {
    this.$6_0 = null;
    this.$G_0 = null;
    this.$9_0 = {};
    this.$u_0 = maxSizeOfMruCache;
}
Microsoft.Crm.Client.Core.Framework.MruCache$1.$$ = function(T) {
    var $$cn = 'MruCache$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Framework.MruCache$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Framework.MruCache$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Framework.' + $$cn);
        var $$dict_5 = Microsoft.Crm.Client.Core.Framework.MruCache$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Framework[$$cn];
}
Microsoft.Crm.Client.Core.Framework.MruCache$1.prototype = {
    $u_0: 0,
    $6_0: null,
    $G_0: null,
    $9_0: null,
    $b_0: 0,
    
    get_cacheStore: function() {
        return this.$9_0;
    },
    
    get_currentSizeOfMruCache: function() {
        return this.$b_0;
    },
    
    get_count: function() {
        var $v_0 = 0;
        var $$dict_2 = this.$9_0;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0 += ($v_1.value).get_value().get_length();
        }
        return $v_0;
    },
    
    cache: function(key, value) {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.MruCacheNode$1.$$(Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(this.$$gta['Microsoft.Crm.Client.Core.Framework.MruCache$1']['T'])))(key, value);
        var $v_1 = this.$1d_0(value);
        if ($v_1 < this.$u_0) {
            if (((key) in this.$9_0)) {
                var $v_2 = this.$9_0[key];
                this.$f_0(1026, 'MRUCache_Cache : Removing existing item before adding new value - Key : {0}; callbackSafeArrayLength : {1}', $v_2.get_key(), $v_2.get_value().get_length().toString());
                this.$q_0($v_2);
            }
            while (this.$b_0 + $v_1 > this.$u_0 && !_Script.isNullOrUndefined(this.$6_0)) {
                this.$f_0(1026, 'MRUCache_Cache : Removing least recently used object - Key : {0}; callbackSafeArrayLength : {1}', this.$6_0.get_key(), this.$6_0.get_value().get_length().toString());
                this.$q_0(this.$6_0);
            }
            this.$f_0(1026, 'MRUCache_Cache : Adding node - Key : {0}; callbackSafeArrayLength : {1}', $v_0.get_key(), $v_0.get_value().get_length().toString());
            this.$1o_0($v_0, $v_1);
        }
        else {
            this.$f_0(1026, 'MRUCache_Cache : Skipping from cache as the size of the object is bigger than the max limit of cache - Key : {0}; callbackSafeArrayLength : {1}', $v_0.get_key(), $v_0.get_value().get_length().toString());
        }
    },
    
    uncache: function(key) {
        if (!_Script.isNullOrUndefined(this.$9_0[key])) {
            var $v_0 = this.$9_0[key];
            this.$q_0($v_0);
        }
    },
    
    getCachedObject: function(key) {
        if (!_Script.isNullOrUndefined(this.$9_0) && ((key) in this.$9_0)) {
            var $v_0 = this.$9_0[key];
            this.$f_0(1026, 'MRUCache_GetCachedObject - Key: {0}; callbackSafeArrayLength : {1}', key, $v_0.get_value().get_length().toString());
            this.$2E_0($v_0);
            return $v_0.get_value();
        }
        this.$f_0(1026, 'MRUCache_GetCachedObject - Not found in Cache - Key: {0}', key);
        return null;
    },
    
    clearCache: function() {
        while (this.$6_0) {
            this.$q_0(this.$6_0);
        }
    },
    
    $1o_0: function($p0, $p1) {
        this.$1p_0($p0, $p1);
        this.$1N_0($p0);
    },
    
    $q_0: function($p0) {
        this.$2F_0($p0);
        this.$1k_0($p0);
    },
    
    $1p_0: function($p0, $p1) {
        this.$9_0[$p0.get_key()] = $p0;
        this.$b_0 += $p1;
    },
    
    $2F_0: function($p0) {
        delete this.$9_0[$p0.get_key()];
        this.$b_0 -= this.$1d_0($p0.get_value());
    },
    
    $1N_0: function($p0) {
        if (_Script.isNullOrUndefined(this.$6_0)) {
            this.$6_0 = $p0;
            this.$G_0 = this.$6_0;
        }
        else {
            this.$G_0.insertNodeAfter($p0);
            this.$G_0 = this.$G_0.get_nextNode();
        }
    },
    
    $1k_0: function($p0) {
        if (this.$6_0 === $p0) {
            this.$6_0 = this.$6_0.get_nextNode();
        }
        if (this.$G_0 === $p0) {
            this.$G_0 = this.$G_0.get_previousNode();
        }
        $p0.removeNode();
    },
    
    $2E_0: function($p0) {
        this.$1k_0($p0);
        this.$1N_0($p0);
    },
    
    $1d_0: function($p0) {
        var $v_0 = 0;
        for (var $v_1 = 0; $v_1 < $p0.get_length(); $v_1++) {
            $v_0 += $p0.get_item($v_1).cacheSize();
        }
        return $v_0;
    },
    
    $f_0: function($p0, $p1, $p2, $p3) {
    }
}


Microsoft.Crm.Client.Core.Framework.MruCacheNode$1 = function(key, value) {
    this.$1I_1 = ((this.$$gta['Microsoft.Crm.Client.Core.Framework.MruCacheNode$1']['T'] === Number || Type.isEnum(this.$$gta['Microsoft.Crm.Client.Core.Framework.MruCacheNode$1']['T'])) ? 0 : (this.$$gta['Microsoft.Crm.Client.Core.Framework.MruCacheNode$1']['T'] === Boolean) ? false : null);
    Microsoft.Crm.Client.Core.Framework.MruCacheNode$1.$$(this.$$gta['Microsoft.Crm.Client.Core.Framework.MruCacheNode$1']['T']).initializeBase(this);
    this.$X_1 = key;
    this.$1I_1 = value;
}
Microsoft.Crm.Client.Core.Framework.MruCacheNode$1.$$ = function(T) {
    var $$cn = 'MruCacheNode$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Framework.MruCacheNode$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Framework.MruCacheNode$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Framework.' + $$cn, Microsoft.Crm.Client.Core.Framework.DoublyLinkedListNode);
        var $$dict_5 = Microsoft.Crm.Client.Core.Framework.MruCacheNode$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Framework[$$cn];
}
Microsoft.Crm.Client.Core.Framework.MruCacheNode$1.prototype = {
    $X_1: null,
    
    get_key: function() {
        return this.$X_1;
    },
    
    get_value: function() {
        return this.$1I_1;
    },
    
    get_nextNode: function() {
        return this.$7_0;
    },
    
    set_nextNode: function(value) {
        this.$7_0 = value;
        return value;
    },
    
    get_previousNode: function() {
        return this.$8_0;
    },
    
    set_previousNode: function(value) {
        this.$8_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Framework.ObjectComparer = function() {
}
Microsoft.Crm.Client.Core.Framework.ObjectComparer.areValuesEqual = function(value1, value2) {
    if (Microsoft.Crm.Client.Core.Framework.Guid.isInstanceOfType(value1) && Microsoft.Crm.Client.Core.Framework.Guid.isInstanceOfType(value2)) {
        return (value1).equals(value2);
    }
    if (Microsoft.Crm.Client.Core.Framework.IReference.isInstanceOfType(value1) && Microsoft.Crm.Client.Core.Framework.IReference.isInstanceOfType(value2)) {
        return (value1).equals(value2);
    }
    if (Microsoft.Crm.Client.Core.Framework.IPicklistItem.isInstanceOfType(value1) && Microsoft.Crm.Client.Core.Framework.IPicklistItem.isInstanceOfType(value2)) {
        return (value1).get_ValueString() === (value2).get_ValueString() && (value1).get_Label() === (value2).get_Label();
    }
    if (Microsoft.Crm.Client.Core.Framework.IAlias.isInstanceOfType(value1) && Microsoft.Crm.Client.Core.Framework.IAlias.isInstanceOfType(value2)) {
        return Microsoft.Crm.Client.Core.Framework.ObjectComparer.areValuesEqual((value1).get_value(), (value2).get_value());
    }
    if (Date.isInstanceOfType(value1) && Date.isInstanceOfType(value2)) {
        value1 = value1.valueOf();
        value2 = value2.valueOf();
    }
    if (value1 && value2 && Object.getTypeName(value1) === 'Array' && Object.getTypeName(value2) === 'Array') {
        var $v_0 = value1;
        var $v_1 = value2;
        if ($v_0.length !== $v_1.length) {
            return false;
        }
        $v_0.sort();
        $v_1.sort();
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            if ($v_0[$v_2] !== $v_1[$v_2]) {
                return false;
            }
        }
        return true;
    }
    return value1 === value2;
}


Microsoft.Crm.Client.Core.Framework.SortingInfo = function(sortByField, sortDescending, secondarySortByField, secondarySortDescending) {
    this.$T_0 = sortByField;
    this.$U_0 = !_Script.isNullOrUndefined(sortDescending) && sortDescending;
    this.$R_0 = secondarySortByField;
    this.$S_0 = !_Script.isNullOrUndefined(secondarySortDescending) && secondarySortDescending;
}
Microsoft.Crm.Client.Core.Framework.SortingInfo.createFromObjectData = function(data) {
    var $v_0 = data['sortbyfield'];
    var $v_1 = data['sortdescending'];
    var $v_2 = data['secondarysortbyfield'];
    var $v_3 = data['secondarysortdescending'];
    return new Microsoft.Crm.Client.Core.Framework.SortingInfo($v_0, $v_1, $v_2, $v_3);
}
Microsoft.Crm.Client.Core.Framework.SortingInfo.createFromFetchXml = function(fetchXmlDoc) {
    var $v_0 = fetchXmlDoc.getElementsByTagName('order');
    if ($v_0.length > 0) {
        var $v_1 = $v_0[0].attributes.getNamedItem('attribute');
        if (!_Script.isNullOrUndefined($v_1)) {
            var $v_2 = $v_1.nodeValue;
            var $v_3 = $v_0[0].attributes.getNamedItem('descending');
            var $v_4 = !_Script.isNullOrUndefined($v_3) && $v_3.nodeValue === 'true';
            var $v_5 = null;
            var $v_6 = false;
            if ($v_0.length > 1) {
                var $v_7 = $v_0[1].attributes.getNamedItem('attribute');
                if (!_Script.isNullOrUndefined($v_7)) {
                    $v_5 = $v_7.nodeValue;
                    var $v_8 = $v_0[1].attributes.getNamedItem('descending');
                    $v_6 = !_Script.isNullOrUndefined($v_8) && $v_8.nodeValue === 'true';
                }
            }
            return new Microsoft.Crm.Client.Core.Framework.SortingInfo($v_2, $v_4, $v_5, $v_6);
        }
    }
    return null;
}
Microsoft.Crm.Client.Core.Framework.SortingInfo.prototype = {
    $T_0: null,
    $U_0: false,
    $R_0: null,
    $S_0: false,
    
    get_SortByField: function() {
        return this.$T_0;
    },
    
    set_SortByField: function(value) {
        this.$T_0 = value;
        return value;
    },
    
    get_SortDescending: function() {
        return this.$U_0;
    },
    
    set_SortDescending: function(value) {
        this.$U_0 = value;
        return value;
    },
    
    get_SecondarySortByField: function() {
        return this.$R_0;
    },
    
    set_SecondarySortByField: function(value) {
        this.$R_0 = value;
        return value;
    },
    
    get_SecondarySortDescending: function() {
        return this.$S_0;
    },
    
    set_SecondarySortDescending: function(value) {
        this.$S_0 = value;
        return value;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['sortbyfield'] = this.$T_0;
        $v_0['sortdescending'] = this.$U_0;
        $v_0['secondarysortbyfield'] = this.$R_0;
        $v_0['secondarysortdescending'] = this.$S_0;
        return $v_0;
    },
    
    equalTo: function(other) {
        return !_Script.isNullOrUndefined(other) && this.$T_0 === other.$T_0 && this.$U_0 === other.$U_0 && this.$R_0 === other.$R_0 && this.$S_0 === other.$S_0;
    }
}


Microsoft.Crm.Client.Core.Framework.UrlParameterConstants = function() {
}


Microsoft.Crm.Client.Core.Framework._Dictionary = function() {
}
Microsoft.Crm.Client.Core.Framework._Dictionary.count = function(obj) {
    var $v_0 = 0;
    var $$dict_3 = obj;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0++;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework._Dictionary.keys = function(obj) {
    var $v_0 = new Array(0);
    var $$dict_3 = obj;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0[$v_0.length] = $v_1.key;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework._Dictionary.toArray = function(T, obj) {
    var $v_0 = new Array(Microsoft.Crm.Client.Core.Framework._Dictionary.count(obj));
    var $v_1 = 0;
    var $$dict_5 = obj;
    for (var $$key_6 in $$dict_5) {
        var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_0[$v_1] = $v_2.value;
        $v_1++;
    }
    return $v_0;
}


Microsoft.Crm.Client.Core.Framework._Enum = function() {
}
Microsoft.Crm.Client.Core.Framework._Enum.parse = function(T, enumKey) {
    return Microsoft.Crm.Client.Core.Framework._Enum.parseType(T, enumKey);
}
Microsoft.Crm.Client.Core.Framework._Enum.parseType = function(enumType, enumKey) {
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
Microsoft.Crm.Client.Core.Framework._Enum.toString = function(enumType, value) {
    return enumType.toString(value);
}


Microsoft.Crm.Client.Core.Framework.DynamicsTrace = function() {
}
Microsoft.Crm.Client.Core.Framework.DynamicsTrace.logInfo = function(key, area, parameter) {
}


Microsoft.Crm.Client.Core.Framework.PerformanceMarker = function() {
    this.parameters = new Array(0);
}
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.prototype = {
    name: null,
    timestamp: 0,
    id: null,
    type: 0,
    data: null
}


Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch = function(name) {
}
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch.prototype = {
    name: null,
    startMarker: null,
    stopMarker: null,
    
    start: function() {
    },
    
    stop: function() {
    },
    
    addParameter: function(parameter) {
    }
}


Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames = function() {
}


Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames = function() {
}


Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames = function() {
}


Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames = function() {
}


Microsoft.Crm.Client.Core.Framework.DeviceConfiguration = function() {
}
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_formFactor = function() {
    return 0;
}
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_isTablet = function() {
    if (Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_formFactor() === 1) {
        return true;
    }
    return false;
}
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_isPhone = function() {
    if (Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_formFactor() === 2) {
        return true;
    }
    return false;
}
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_isMailApp = function() {
    return Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_formFactor() === 4;
}
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_isInteractionCentricDashboard = function() {
    return Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_formFactor() === 3;
}
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_IsPreview = function() {
    return Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.$12;
}
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.set_IsPreview = function(value) {
    Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.$12 = value;
    return value;
}


Microsoft.Crm.Client.Core.Framework.FieldFormat = function() {
}
Microsoft.Crm.Client.Core.Framework.FieldFormat.$C = function($p0) {
    var $v_0 = '!' || '!';
    return $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.FieldFormatValue.toString($p0);
}


Microsoft.Crm.Client.Core.Framework.FieldFormat.FieldFormatValue = function() {}
Microsoft.Crm.Client.Core.Framework.FieldFormat.FieldFormatValue.prototype = {
    Raw: 0, 
    Numeric: 1, 
    Label: 2, 
    Value: 3, 
    State: 4, 
    Id: 5, 
    Name: 6, 
    LogicalName: 7, 
    AllowedStatusTransitions: 8, 
    DefaultStatus: 9, 
    Color: 10
}
Microsoft.Crm.Client.Core.Framework.FieldFormat.FieldFormatValue.registerEnum('Microsoft.Crm.Client.Core.Framework.FieldFormat.FieldFormatValue', false);


Microsoft.Crm.Client.Core.Framework.MetadataTypeName = function() {
}


Microsoft.Crm.Client.Core.Framework.FieldLevelAccess = function(isSecured, isReadable, isEditable) {
    this.$1G_0 = isSecured;
    this.$1F_0 = isReadable;
    this.$1D_0 = isEditable;
}
Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.get_openAccess = function() {
    if (_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$w)) {
        Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$w = new Microsoft.Crm.Client.Core.Framework.FieldLevelAccess(false, true, true);
    }
    return Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$w;
}
Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.get_readOnlyAccess = function() {
    if (_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$x)) {
        Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$x = new Microsoft.Crm.Client.Core.Framework.FieldLevelAccess(false, true, false);
    }
    return Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$x;
}
Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.prototype = {
    $1G_0: false,
    $1F_0: false,
    $1D_0: false,
    
    get_isSecured: function() {
        return this.$1G_0;
    },
    
    get_isReadable: function() {
        return this.$1F_0;
    },
    
    get_isEditable: function() {
        return this.$1D_0;
    }
}


Microsoft.Crm.Client.Core.Framework.RolePrivilegeId = function() {
}


Microsoft.Crm.Client.Core.Framework.TypedDictionary$1 = function(items) {
    if (!_Script.isNullOrUndefined(items)) {
        this.$1_0 = items;
    }
    else {
        this.$1_0 = {};
    }
}
Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$ = function(T) {
    var $$cn = 'TypedDictionary$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Framework.TypedDictionary$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Framework.' + $$cn);
        var $$dict_5 = Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Framework[$$cn];
}
Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.prototype = {
    $1_0: null,
    
    get_item: function(index) {
        return this.$1_0[index];
    },
    
    set_item: function(index, value) {
        this.$1_0[index] = value;
        return value;
    },
    
    remove: function(index) {
        delete this.$1_0[index];
    },
    
    clear: function() {
        this.$1_0 = {};
    },
    
    contains: function(item) {
        var $$dict_2 = this.$1_0;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if (($v_0.value == item)) {
                return true;
            }
        }
        return false;
    },
    
    containsKey: function(key) {
        return ((key) in this.$1_0);
    },
    
    indexOf: function(item) {
        var $$dict_2 = this.$1_0;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if (($v_0.value == item)) {
                return $v_0.key;
            }
        }
        return null;
    },
    
    count: function() {
        return Microsoft.Crm.Client.Core.Framework._Dictionary.count(this.$1_0);
    },
    
    toArray: function() {
        var $v_0 = new Array(this.count());
        var $v_1 = 0;
        var $$dict_3 = this.$1_0;
        for (var $$key_4 in $$dict_3) {
            var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_0[$v_1] = $v_2.value;
            $v_1++;
        }
        return $v_0;
    },
    
    toDictionary: function() {
        return this.$1_0;
    },
    
    get_keys: function() {
        var $v_0 = new Array(this.count());
        var $v_1 = 0;
        var $$dict_3 = this.$1_0;
        for (var $$key_4 in $$dict_3) {
            var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_0[$v_1] = $v_2.key;
            $v_1++;
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Framework.CallingContext = function(callerId, callerName, callerPriority, telemetryActivity) {
    this.$15_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(callerId)) ? callerId : 'unknown';
    this.$i_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(callerName)) ? callerName : 'unknown';
    this.$16_0 = callerPriority;
    this.$1K_0 = telemetryActivity;
}
Microsoft.Crm.Client.Core.Framework.CallingContext.get_isEnabled = function() {
    return false;
}
Microsoft.Crm.Client.Core.Framework.CallingContext.prototype = {
    $15_0: null,
    $i_0: null,
    $16_0: 0,
    $1K_0: null,
    
    get_callerId: function() {
        return this.$15_0;
    },
    
    get_callerName: function() {
        return this.$i_0;
    },
    
    get_callerPriority: function() {
        return this.$16_0;
    },
    
    get_telemetryActivity: function() {
        return this.$1K_0;
    }
}


Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1 = function(argument) {
    if (_Script.isNullOrUndefined(argument)) {
        this.$F_0 = new Array(0);
    }
    else if ($P_CRM.isArray(argument)) {
        this.$F_0 = argument;
    }
    else {
        this.$F_0 = new Array(argument);
    }
}
Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$ = function(T) {
    var $$cn = 'CallbackSafeArray$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Framework.' + $$cn);
        var $$dict_5 = Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Framework[$$cn];
}
Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.prototype = {
    $F_0: null,
    
    get_length: function() {
        return this.$F_0.length;
    },
    
    get_item: function(index) {
        return this.$F_0[index];
    },
    
    set_item: function(index, value) {
        this.$F_0[index] = value;
        return value;
    },
    
    add: function(item) {
        Array.add(this.$F_0, item);
    },
    
    addRange: function(range) {
        Array.addRange(this.$F_0, range);
    },
    
    toArray: function() {
        return this.$F_0;
    }
}


Microsoft.Crm.Client.Core.Framework.CrmErrorCodes = function() {
}
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.isOfflineError = function(errorCode) {
    return errorCode === -2147093997 || errorCode === -2147093999;
}


Microsoft.Crm.Client.Core.Framework.ErrorStatus = function(message) {
    this.$B_0 = message;
    this.$Y_0 = 0;
    this.$M_0 = new Array(0);
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage = function(message) {
    var args = [];
    for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
        args[$$pai_3 - 1] = arguments[$$pai_3];
    }
    var $v_0 = (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(message)) ? '' : String.format.apply(null, [ message ].concat(args));
    return new Microsoft.Crm.Client.Core.Framework.ErrorStatus($v_0);
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromException = function(exception, message) {
    var args = [];
    for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
        args[$$pai_4 - 2] = arguments[$$pai_4];
    }
    var $v_0;
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(message)) {
        message = String.format.apply(null, [ message ].concat(args));
        $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus(message);
    }
    else {
        $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus(exception.message);
    }
    $v_0.$g_0 = exception;
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromErrorCode = function(errorCode) {
    var parameters = [];
    for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
        parameters[$$pai_3 - 1] = arguments[$$pai_3];
    }
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getErrorMessage(errorCode, parameters));
    $v_0.$2_0 = errorCode;
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromErrorCodeOnly = function(errorCode) {
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus('');
    $v_0.$2_0 = errorCode;
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromError = function(previousError, message, errorCode) {
    var args = [];
    for (var $$pai_5 = 3; $$pai_5 < arguments.length; ++$$pai_5) {
        args[$$pai_5 - 3] = arguments[$$pai_5];
    }
    var $v_0;
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(message)) {
        message = String.format.apply(null, [ message ].concat(args));
        $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus(message);
    }
    else if (!_Script.isNullOrUndefined(errorCode)) {
        $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getErrorMessage(errorCode));
    }
    else {
        $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus('Unknown Error');
    }
    $v_0.$2_0 = (!_Script.isNullOrUndefined(errorCode)) ? errorCode : previousError.$2_0;
    $v_0.$N_0 = previousError;
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromErrorData = function(errors) {
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorData(0);
    if (Microsoft.Crm.Client.Core.Framework.ErrorData.isInstanceOfType(errors) && !(errors).$Z_0) {
        $v_0 = errors;
    }
    else if (!_Script.isNullOrUndefined(errors)) {
        for (var $$arr_2 = errors, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            if (!$v_2.$Z_0) {
                $v_0 = $v_2;
                break;
            }
        }
    }
    var $v_1 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus($v_0.$v_0);
    $v_1.$h_0 = $v_0.$y_0;
    $v_1.$J_0 = $v_0.$J_0;
    $v_1.$I_0 = $v_0.$I_0;
    $v_1.$2_0 = $v_0.$2_0;
    $v_1.$M_0 = (Microsoft.Crm.Client.Core.Framework.ErrorData.isInstanceOfType(errors)) ? [ $v_0 ] : errors;
    return $v_1;
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromLocalStoreError = function(errorCode, message) {
    var args = [];
    for (var $$pai_4 = 2; $$pai_4 < arguments.length; ++$$pai_4) {
        args[$$pai_4 - 2] = arguments[$$pai_4];
    }
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.ErrorStatus(String.format.apply(null, [ message ].concat(args)));
    $v_0.$Y_0 = 2;
    $v_0.$2_0 = errorCode;
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.ErrorStatus.prototype = {
    $2_0: 0,
    
    get_errorCode: function() {
        return this.$2_0;
    },
    
    set_errorCode: function(value) {
        this.$2_0 = value;
        return value;
    },
    
    $B_0: null,
    
    get_message: function() {
        return this.$B_0;
    },
    
    set_message: function(value) {
        this.$B_0 = value;
        return value;
    },
    
    $h_0: null,
    
    get_title: function() {
        return this.$h_0;
    },
    
    set_title: function(value) {
        this.$h_0 = value;
        return value;
    },
    
    $J_0: null,
    
    get_okButtonText: function() {
        return this.$J_0;
    },
    
    set_okButtonText: function(value) {
        this.$J_0 = value;
        return value;
    },
    
    $I_0: null,
    
    get_cancelButtonText: function() {
        return this.$I_0;
    },
    
    set_cancelButtonText: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    $g_0: null,
    
    get_exception: function() {
        return this.$g_0;
    },
    
    set_exception: function(value) {
        this.$g_0 = value;
        return value;
    },
    
    $N_0: null,
    
    get_innerError: function() {
        return this.$N_0;
    },
    
    set_innerError: function(value) {
        this.$N_0 = value;
        return value;
    },
    
    $11_0: null,
    
    get_errorFault: function() {
        return this.$11_0;
    },
    
    set_errorFault: function(value) {
        this.$11_0 = value;
        return value;
    },
    
    $M_0: null,
    
    get_errors: function() {
        return this.$M_0;
    },
    
    set_errors: function(value) {
        this.$M_0 = value;
        return value;
    },
    
    $Y_0: 0,
    
    get_errorSource: function() {
        return this.$Y_0;
    },
    
    set_errorSource: function(value) {
        this.$Y_0 = value;
        return value;
    },
    
    chainError: function(previousError) {
        this.$B_0 = this.$B_0 + '\nInner Error Message:\n' + previousError.$B_0;
        this.$N_0 = previousError;
    },
    
    getDiagnostics: function() {
        var $v_0 = '';
        if (!_Script.isNullOrUndefined(this.$M_0)) {
            for (var $$arr_1 = this.$M_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
                var $v_1 = $$arr_1[$$idx_3];
                if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_1.$V_0)) {
                    $v_0 += $v_1.$V_0;
                    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_1.$a_0)) {
                        $v_0 += '\nStackTrace:\n' + $v_1.$a_0;
                    }
                    $v_0 += '\n\n';
                }
            }
        }
        if (Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_0)) {
            $v_0 = 'Diagnostic message not found for error ' + this.$2_0 + ' with message: ' + this.$B_0;
        }
        return $v_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['errorcode'] = this.$2_0;
        $v_0['message'] = this.$B_0;
        if (!_Script.isNullOrUndefined(this.$N_0)) {
            $v_0['innererror'] = this.$N_0.getObjectData();
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Framework.Guid = function(guidValue) {
    this.$4_0 = Microsoft.Crm.Client.Core.Framework.Guid.$1e(guidValue);
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.$4_0)) {
        throw Error.argumentOutOfRange(String.format('\'{0}\' is not a valid Guid value.', guidValue));
    }
}
Microsoft.Crm.Client.Core.Framework.Guid.$1e = function($p0) {
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0)) {
        return null;
    }
    $p0 = $p0.toLowerCase();
    if (Microsoft.Crm.Client.Core.Framework.Guid.get_$2B().test($p0) || Microsoft.Crm.Client.Core.Framework.Guid.get_$1Q().test($p0)) {
        return $p0.replace(Microsoft.Crm.Client.Core.Framework.Guid.get_$2A(), '');
    }
    else if (Microsoft.Crm.Client.Core.Framework.Guid.get_$1t().test($p0)) {
        return $p0;
    }
    return null;
}
Microsoft.Crm.Client.Core.Framework.Guid.get_empty = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$m || (Microsoft.Crm.Client.Core.Framework.Guid.$m = new Microsoft.Crm.Client.Core.Framework.Guid('00000000-0000-0000-0000-000000000000'));
}
Microsoft.Crm.Client.Core.Framework.Guid.get_$2A = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$1B || (Microsoft.Crm.Client.Core.Framework.Guid.$1B = new RegExp('{|}|-', 'g'));
}
Microsoft.Crm.Client.Core.Framework.Guid.get_$2B = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$1C || (Microsoft.Crm.Client.Core.Framework.Guid.$1C = new RegExp('^(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}$'));
}
Microsoft.Crm.Client.Core.Framework.Guid.get_$1Q = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$14 || (Microsoft.Crm.Client.Core.Framework.Guid.$14 = new RegExp('^{(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}}$'));
}
Microsoft.Crm.Client.Core.Framework.Guid.get_$1t = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$17 || (Microsoft.Crm.Client.Core.Framework.Guid.$17 = new RegExp('^(\\d|[a-f]){32}$'));
}
Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData = function(data) {
    var $v_0 = data['rawguid'];
    return new Microsoft.Crm.Client.Core.Framework.Guid($v_0);
}
Microsoft.Crm.Client.Core.Framework.Guid.tryCreate = function(guidValue) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.$1e(guidValue);
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0)) {
        return new Microsoft.Crm.Client.Core.Framework.Guid($v_0);
    }
    return Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
}
Microsoft.Crm.Client.Core.Framework.Guid.formatToUpper = function(sourceGuid) {
    if (_Script.isNullOrUndefined(sourceGuid)) {
        return sourceGuid;
    }
    sourceGuid = sourceGuid.toLowerCase();
    if (Microsoft.Crm.Client.Core.Framework.Guid.get_$1Q().test(sourceGuid)) {
        return sourceGuid.toUpperCase();
    }
    else {
        return String.format('{{{0}}}', sourceGuid.toUpperCase());
    }
}
Microsoft.Crm.Client.Core.Framework.Guid.removeBrackets = function(sourceGuid) {
    if (_Script.isNullOrUndefined(sourceGuid)) {
        return sourceGuid;
    }
    return sourceGuid.replace('{', '').replace('}', '').trim();
}
Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty = function(guid) {
    if (_Script.isNullOrUndefined(guid) || !guid.length) {
        return true;
    }
    if (new Microsoft.Crm.Client.Core.Framework.Guid(guid).equals(Microsoft.Crm.Client.Core.Framework.Guid.$m)) {
        return true;
    }
    return false;
}
Microsoft.Crm.Client.Core.Framework.Guid.newGuid = function() {
    var $v_0 = '0123456789abcdef';
    var $v_1 = 36;
    var $v_2 = new Sys.StringBuilder();
    for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
        if ($v_3 === 14) {
            $v_2.append('4');
            continue;
        }
        if ($v_3 === 8 || $v_3 === 13 || $v_3 === 18 || $v_3 === 23) {
            $v_2.append('-');
            continue;
        }
        if ($v_3 === 19) {
            var $v_4 = Math.floor(Math.random() * 16);
            $v_0.substr($v_4 & 3 | 8, 1);
        }
        $v_2.append($v_0.substr(Math.floor(Math.random() * 16), 1));
    }
    return new Microsoft.Crm.Client.Core.Framework.Guid($v_2.toString());
}
Microsoft.Crm.Client.Core.Framework.Guid.prototype = {
    $4_0: null,
    $r_0: null,
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['rawguid'] = this.$4_0;
        return $v_0;
    },
    
    equals: function(obj) {
        if (Microsoft.Crm.Client.Core.Framework.Guid.isInstanceOfType(obj)) {
            return (obj).$4_0 === this.$4_0;
        }
        if (String.isInstanceOfType(obj)) {
            try {
                var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(obj);
                return $v_0.$4_0 === this.$4_0;
            }
            catch ($$e_2) {
                return false;
            }
        }
        return false;
    },
    
    getHashCode: function() {
        return (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.$4_0)) ? Microsoft.Crm.Client.Core.Framework._String.hashCode(this.$4_0) : 0;
    },
    
    toString: function() {
        if (!this.$r_0) {
            this.$r_0 = this.$4_0.substring(0, 8) + '-' + this.$4_0.substring(8, 12) + '-' + this.$4_0.substring(12, 16) + '-' + this.$4_0.substring(16, 20) + '-' + this.$4_0.substring(20, 32);
        }
        return this.$r_0;
    }
}


Microsoft.Crm.Client.Core.Framework.KeyValuePair$2 = function(key, value) {
    this.$X_0 = ((this.$$gta['Microsoft.Crm.Client.Core.Framework.KeyValuePair$2']['TKey'] === Number || Type.isEnum(this.$$gta['Microsoft.Crm.Client.Core.Framework.KeyValuePair$2']['TKey'])) ? 0 : (this.$$gta['Microsoft.Crm.Client.Core.Framework.KeyValuePair$2']['TKey'] === Boolean) ? false : null);
    this.$1L_0 = ((this.$$gta['Microsoft.Crm.Client.Core.Framework.KeyValuePair$2']['TValue'] === Number || Type.isEnum(this.$$gta['Microsoft.Crm.Client.Core.Framework.KeyValuePair$2']['TValue'])) ? 0 : (this.$$gta['Microsoft.Crm.Client.Core.Framework.KeyValuePair$2']['TValue'] === Boolean) ? false : null);
    this.$X_0 = key;
    this.$1L_0 = value;
}
Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$ = function(TKey, TValue) {
    var $$cn = 'KeyValuePair$2' + '$' + TKey.getName().replace(/\./g, '_') + '$' + TValue.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Framework.KeyValuePair$2'] = {'TKey': TKey, 'TValue': TValue};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Framework.' + $$cn);
        var $$dict_6 = Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.prototype;
        for (var $$key_7 in $$dict_6) {
            var $$entry_8 = { key: $$key_7, value: $$dict_6[$$key_7] };
            if ('constructor' !== $$entry_8.key) {
                $$ccr.prototype[$$entry_8.key] = $$entry_8.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Framework[$$cn];
}
Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.prototype = {
    
    get_key: function() {
        return this.$X_0;
    },
    
    get_value: function() {
        return this.$1L_0;
    }
}


Microsoft.Crm.Client.Core.Framework.ManifestType = function() {
}


Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster = function(end, start, delta, daylightStart, daylightEnd) {
    this.$c_0 = end;
    this.$d_0 = start;
    this.$e_0 = delta;
    this.$l_0 = daylightStart;
    this.$k_0 = daylightEnd;
}
Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster.createFromObjectData = function(data) {
    var $v_0 = (Date.isInstanceOfType(data['datestart'])) ? data['datestart'] : new Date(Date.parse(data['datestart']));
    var $v_1 = (Date.isInstanceOfType(data['dateend'])) ? data['dateend'] : new Date(Date.parse(data['dateend']));
    var $v_2 = data['delta'];
    var $v_3 = Microsoft.Crm.Client.Core.Framework.TransitionConstraint.createFromObjectData(data['daylightstart']);
    var $v_4 = Microsoft.Crm.Client.Core.Framework.TransitionConstraint.createFromObjectData(data['daylightend']);
    return new Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster($v_1, $v_0, $v_2, $v_3, $v_4);
}
Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster.prototype = {
    $c_0: null,
    $d_0: null,
    $e_0: 0,
    $l_0: null,
    $k_0: null,
    
    get_dateStart: function() {
        return this.$d_0;
    },
    
    get_dateEnd: function() {
        return this.$c_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['dateend'] = this.$c_0;
        $v_0['datestart'] = this.$d_0;
        $v_0['delta'] = this.$e_0;
        $v_0['daylightstart'] = this.$l_0.getObjectData();
        $v_0['daylightend'] = this.$k_0.getObjectData();
        return $v_0;
    },
    
    getLocalAdjustmentFromDate: function(time) {
        var $v_0 = time.getFullYear();
        var $v_1 = this.$l_0.getConstraintByYear($v_0);
        var $v_2 = this.$k_0.getConstraintByYear($v_0);
        if ($v_2 < $v_1) {
            if (time > $v_1 || time < $v_2) {
                return this.$e_0;
            }
        }
        else {
            if (time > $v_1 && time < $v_2) {
                return this.$e_0;
            }
        }
        return 0;
    }
}


Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils = function() {
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertDateTimeFromUtcToUserDisplay = function(time, userUtcOffsetMinutes, adjusters) {
    if (_Script.isNullOrUndefined(time)) {
        return time;
    }
    var $v_0 = userUtcOffsetMinutes * 60000;
    $v_0 += Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDSTAdjustment(time, adjusters);
    var $v_1 = time.getTimezoneOffset() * 60000;
    return new Date(time.getTime() + $v_0 + $v_1);
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.$1u = function($p0, $p1, $p2) {
    if (_Script.isNullOrUndefined($p0)) {
        return $p0;
    }
    var $v_0 = $p1 * 60000;
    $v_0 += Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDSTAdjustment($p0, $p2);
    var $v_1 = $p0.getTimezoneOffset() * 60000;
    return new Date($p0.getTime() - $v_0 - $v_1);
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDSTAdjustmentMinutes = function(time, adjusters) {
    return Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDSTAdjustment(time, adjusters) / 60000;
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDSTAdjustment = function(time, adjusters) {
    if (_Script.isNullOrUndefined(adjusters)) {
        return 0;
    }
    var $v_0 = null;
    var $v_1 = new Date(time.getTime());
    $v_1.setHours(0);
    $v_1.setMinutes(0);
    $v_1.setSeconds(0);
    $v_1.setMilliseconds(0);
    for (var $v_2 = 0; $v_2 < adjusters.length; $v_2++) {
        var $v_3 = adjusters[$v_2].$d_0;
        var $v_4 = adjusters[$v_2].$c_0;
        if ($v_1 >= $v_3 && $v_1 <= $v_4) {
            $v_0 = adjusters[$v_2];
            break;
        }
    }
    return (_Script.isNullOrUndefined($v_0)) ? 0 : $v_0.getLocalAdjustmentFromDate(time);
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getUtcEquivalentFromLocal = function(time) {
    return new Date(time.getTime() + (time.getTimezoneOffset() * 60000));
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getLocalEquivalentFromUtc = function(time) {
    return new Date(time.getTime() - (time.getTimezoneOffset() * 60000));
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay = function(time, userUtcOffsetMinutes, behavior, adjusters) {
    switch (behavior) {
        case 2:
        case 3:
            return Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getUtcEquivalentFromLocal(time);
        case 1:
            return Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertDateTimeFromUtcToUserDisplay(time, userUtcOffsetMinutes, adjusters);
        default:
            return new Date(time.getTime());
    }
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeFromBehaviorDisplay = function(time, userUtcOffsetMinutes, behavior, adjusters) {
    switch (behavior) {
        case 2:
        case 3:
            return Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getLocalEquivalentFromUtc(time);
        case 1:
            return Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.$1u(time, userUtcOffsetMinutes, adjusters);
        default:
            return new Date(time.getTime());
    }
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDayOfYear = function(date) {
    var $v_0 = date.getMonth();
    var $v_1 = 0;
    for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
        $v_1 += Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDaysInMonth($v_2, date.getFullYear());
    }
    $v_1 += date.getDate();
    return $v_1;
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDaysInMonth = function(month, year) {
    var $v_0 = (Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.isLeapYear(year)) ? Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.$1S : Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.$1R;
    if (!month) {
        return $v_0[month];
    }
    return $v_0[month] - $v_0[month - 1];
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.isLeapYear = function(year) {
    return (!(year % 4) && !!(year % 100)) || (!(year % 400));
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getWeekOfYearFullDays = function(date, firstDayOfWeek, numberOfFullDays) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDayOfYear(date) - 1;
    var $v_1 = (date.getDay()) - ($v_0 % 7);
    var $v_2 = ((firstDayOfWeek - $v_1) + 14) % 7;
    if (($v_2) && ($v_2 >= numberOfFullDays)) {
        $v_2 -= 7;
    }
    var $v_3 = $v_0 - $v_2;
    if ($v_3 < 0) {
        var $v_4 = date.getFullYear() - 1;
        $v_0 = (Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.isLeapYear($v_4)) ? 366 : 365;
        $v_1 -= $v_0 % 7;
        $v_2 = ((firstDayOfWeek - $v_1) + 14) % 7;
        if (($v_2) && ($v_2 >= numberOfFullDays)) {
            $v_2 -= 7;
        }
        $v_3 = $v_0 - $v_2;
    }
    return Math.floor(($v_3 / 7) + 1);
}
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.parseDateTimeFromJSONString = function(json) {
    return new Date(parseInt(json.replace('/Date(', '').replace(')/', '')));
}


Microsoft.Crm.Client.Core.Framework.TransitionConstraint = function(day, dow, month, week, timeOfDay, isFixed) {
    this.$j_0 = day;
    this.$W_0 = dow;
    this.$P_0 = month;
    this.$10_0 = week;
    this.$H_0 = timeOfDay;
    this.$s_0 = isFixed;
}
Microsoft.Crm.Client.Core.Framework.TransitionConstraint.createFromObjectData = function(data) {
    var $v_0 = data['day'];
    var $v_1 = data['dayofweek'];
    var $v_2 = data['month'];
    var $v_3 = data['week'];
    var $v_4 = (Date.isInstanceOfType(data['timeofday'])) ? data['timeofday'] : new Date(Date.parse(data['timeofday']));
    var $v_5 = data['isfixeddaterule'];
    return new Microsoft.Crm.Client.Core.Framework.TransitionConstraint($v_0, $v_1, $v_2, $v_3, $v_4, $v_5);
}
Microsoft.Crm.Client.Core.Framework.TransitionConstraint.prototype = {
    $j_0: 0,
    $W_0: 0,
    $P_0: 0,
    $10_0: 0,
    $H_0: null,
    $s_0: false,
    
    getConstraintByYear: function(year) {
        if (this.$s_0) {
            return new Date(year, this.$P_0, this.$j_0, this.$H_0.getHours(), this.$H_0.getMinutes(), this.$H_0.getSeconds());
        }
        var $v_0 = (this.$10_0 * 7) - 6;
        var $v_1 = (new Date(year, this.$P_0, 1)).getDay();
        var $v_2;
        if ($v_1 > this.$W_0) {
            $v_2 = $v_0 + (7 - $v_1 + this.$W_0);
        }
        else {
            $v_2 = $v_0 + (this.$W_0 - $v_1);
        }
        if ($v_2 > Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDaysInMonth(this.$P_0, year)) {
            $v_2 -= 7;
        }
        return new Date(year, this.$P_0, $v_2, this.$H_0.getHours(), this.$H_0.getMinutes(), this.$H_0.getSeconds());
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['day'] = this.$j_0;
        $v_0['dayofweek'] = this.$W_0;
        $v_0['month'] = this.$P_0;
        $v_0['week'] = this.$10_0;
        $v_0['timeofday'] = this.$H_0;
        $v_0['isfixeddaterule'] = this.$s_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Framework.Undefined = function() {
}


function _Math() {
}
_Math.modulo = function(value, modulo) {
    return ((value % modulo) + modulo) % modulo;
}
_Math.randomBetween = function(lo, hi) {
    return Math.floor((Math.random() * (hi - lo + 1)) + lo);
}


function _Script() {
}
_Script.isNull = function(value) {
    return null === value;
}
_Script.isNullOrUndefined = function(value) {
    return null === value || value === undefined;
}
_Script.supportsEquals = function(obj) {
    return !_Script.isNullOrUndefined(obj) && !_Script.isNullOrUndefined(obj.equals);
}
_Script.isUndefined = function(value) {
    return value === undefined;
}
_Script.assertWireType = function(dataType, data) {
    if (data) {
        var $v_0 = data.__type;
        if ($v_0) {
            var $v_1 = new (dataType)().__type;
        }
    }
}


Microsoft.Crm.Client.Core.Framework._String = function() {
}
Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty = function(value) {
    return _Script.isNullOrUndefined(value) || value === '';
}
Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace = function(value) {
    return Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(value) || value.trim() === '';
}
Microsoft.Crm.Client.Core.Framework._String.hashCode = function(value) {
    var $v_0 = 0;
    for (var $v_1 = 0; $v_1 < value.length; ++$v_1) {
        var $v_2 = value.charCodeAt($v_1);
        $v_0 = (($v_0 << 5) - $v_0) + $v_2;
        $v_0 = $v_0 & $v_0;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework._String.format = function(format, arg0, arg1, arg2, arg3, arg4, arg5) {
    if (_Script.isUndefined(arg0) && _Script.isUndefined(arg1) && _Script.isUndefined(arg2) && _Script.isUndefined(arg3) && _Script.isUndefined(arg4) && _Script.isUndefined(arg5)) {
        return format;
    }
    return String.format(format, arg0, arg1, arg2, arg3, arg4, arg5);
}
Microsoft.Crm.Client.Core.Framework._String.replaceNewlineWithEnding = function(text, ending) {
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(text)) {
        return '';
    }
    else {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = text.split(Microsoft.Crm.Client.Core.Framework._String.$1i);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_1[$v_2])) {
                $v_0.append($v_1[$v_2]);
                $v_0.append(ending);
            }
        }
        return $v_0.toString();
    }
}


Microsoft.Crm.Client.Core.Framework.List$1 = function(items) {
    this.$1_0 = items || new Array(0);
}
Microsoft.Crm.Client.Core.Framework.List$1.$$ = function(T) {
    var $$cn = 'List$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Framework.List$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Framework.List$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Framework.' + $$cn, null, Microsoft.Crm.Client.Core.Framework.IList$1.$$(T));
        var $$dict_5 = Microsoft.Crm.Client.Core.Framework.List$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Framework[$$cn];
}
Microsoft.Crm.Client.Core.Framework.List$1.prototype = {
    $1_0: null,
    
    get_Items: function() {
        return this.$1_0;
    },
    
    get_Count: function() {
        return this.$1_0.length;
    },
    
    get_item: function(index) {
        return this.$1_0[index];
    },
    
    set_item: function(index, value) {
        this.$1_0[index] = value;
        return value;
    },
    
    add: function(item) {
        Array.add(this.$1_0, item);
    },
    
    addRange: function(items) {
        Array.addRange(this.$1_0, items);
    },
    
    clear: function() {
        Array.clear(this.$1_0);
    },
    
    contains: function(item) {
        return Array.contains(this.$1_0, item);
    },
    
    indexOf: function(item, startIndex) {
        startIndex = startIndex || 0;
        return Array.indexOf(this.$1_0, item, startIndex);
    },
    
    insert: function(index, item) {
        Array.insert(this.$1_0, index, item);
    },
    
    remove: function(item) {
        Array.remove(this.$1_0, item);
    },
    
    removeAt: function(index) {
        Array.removeAt(this.$1_0, index);
    },
    
    sort: function(compareCallback) {
        if (_Script.isNullOrUndefined(compareCallback)) {
            (this.$1_0).sort();
        }
        else {
            (this.$1_0).sort(compareCallback);
        }
    },
    
    toArray: function() {
        var $v_0 = new Array(this.get_Count());
        for (var $v_1 = 0; $v_1 < this.get_Count(); $v_1++) {
            $v_0[$v_1] = this.get_item($v_1);
        }
        return $v_0;
    }
}


function HtmlEncoder() {
}
HtmlEncoder.encode = function(rawHtml) {
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(rawHtml)) {
        return rawHtml;
    }
    var $v_0 = rawHtml.replace(HtmlEncoder.$1O, '&amp;');
    $v_0 = $v_0.replace(HtmlEncoder.$1h, '&lt;');
    $v_0 = $v_0.replace(HtmlEncoder.$1f, '&gt;');
    $v_0 = $v_0.replace(HtmlEncoder.$1P, '&apos;');
    $v_0 = $v_0.replace(HtmlEncoder.$1j, '&quot;');
    return $v_0;
}
HtmlEncoder.decode = function(encodedHtml) {
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(encodedHtml)) {
        return encodedHtml;
    }
    var $v_0 = encodedHtml.replace(HtmlEncoder.$1X, '\"');
    $v_0 = $v_0.replace(HtmlEncoder.$1U, '\'');
    $v_0 = $v_0.replace(HtmlEncoder.$1V, '>');
    $v_0 = $v_0.replace(HtmlEncoder.$1W, '<');
    $v_0 = $v_0.replace(HtmlEncoder.$1T, '&');
    return $v_0;
}


Microsoft.Crm.Client.Core.Framework.Debug = function() {
}
Microsoft.Crm.Client.Core.Framework.Debug.$$cctor = function() {
    Sys.Browser.hasDebuggerStatement = true;
}
Microsoft.Crm.Client.Core.Framework.Debug.assert = function(condition, message) {
    if (!condition) {
    }
}
Microsoft.Crm.Client.Core.Framework.Debug.fail = function(message) {
}


function OptionalParameter() {
}
OptionalParameter.getValue = function(T, value) {
    return OptionalParameter.getValueByType(T, value);
}
OptionalParameter.getValueByType = function(type, value) {
    if (_Script.isNullOrUndefined(value)) {
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


Type.registerNamespace('Microsoft.Crm.Client.Core.Framework.Common');

Microsoft.Crm.Client.Core.Framework.Common.ImeMode = function() {}
Microsoft.Crm.Client.Core.Framework.Common.ImeMode.prototype = {
    auto: 0, 
    inactive: 1, 
    active: 2, 
    disabled: 3
}
Microsoft.Crm.Client.Core.Framework.Common.ImeMode.registerEnum('Microsoft.Crm.Client.Core.Framework.Common.ImeMode', false);


Microsoft.Crm.Client.Core.Framework.Common.ResourceManager = function() {
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$$cctor = function() {
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.updateDisplayMode = function(isHorizontal) {
    Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$1g = isHorizontal;
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.updateResources = function(updatedResources) {
    if (!_Script.isNullOrUndefined(updatedResources)) {
        Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$Q = updatedResources;
    }
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.hasLocalizedString = function(resourceId) {
    return ((resourceId) in Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$Q);
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString = function(resourceId, location) {
    var $v_0 = Xrm.Internal.getResourceString;
    return $v_0(resourceId, location);
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.hasErrorTitle = function(errorCode) {
    return (('Error_Title_0x' + Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getHexErrorCode(errorCode)) in Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$Q);
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.hasErrorMessage = function(errorCode) {
    return (('Error_Message_0x' + Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getHexErrorCode(errorCode)) in Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$Q);
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getErrorTitle = function(errorCode, parameters) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$23(errorCode);
    return String.format.apply(null, [ Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString($v_0) ].concat(parameters));
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getErrorMessage = function(errorCode, parameters) {
    var $v_0;
    var $v_1 = Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$22(errorCode);
    if (!(($v_1) in Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$Q)) {
        $v_0 = String.format.apply(null, [ Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString('Error_Message_Generic_Mobile_Client'), '0x' + errorCode.toString(16) ].concat(parameters));
    }
    else if (!_Script.isNullOrUndefined(parameters)) {
        $v_0 = String.format.apply(null, [ Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString($v_1) ].concat(parameters));
    }
    else {
        $v_0 = Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString($v_1);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getErrorMessageFromErrorStatus = function(errorStatus) {
    if (errorStatus.$2_0 === -2147220891 && !_Script.isNullOrUndefined(errorStatus.$B_0)) {
        return errorStatus.$B_0;
    }
    else {
        return Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getErrorMessage(errorStatus.$2_0);
    }
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$23 = function($p0) {
    if (_Script.isNullOrUndefined($p0)) {
        return 'Error_Title_Generic';
    }
    var $v_0 = 'Error_Title_0x' + Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getHexErrorCode($p0);
    if (!(($v_0) in Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$Q)) {
        $v_0 = 'Error_Title_Generic';
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$22 = function($p0) {
    var $v_0 = 'Error_Message_0x' + Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getHexErrorCode($p0);
    return $v_0;
}
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getHexErrorCode = function(errorCode) {
    var $v_0 = errorCode;
    if ($v_0 < 0) {
        $v_0 = ($v_0 + 4294967295 + 1);
    }
    return $v_0.toString(16);
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Framework.CustomControl');

Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnSpecificationRecord = function(name, displayName, alias, dataType, visualSizeFactor) {
    this.Name = name;
    this.DisplayName = displayName;
    this.Alias = alias;
    this.DataType = dataType;
    this.VisualSizeFactor = visualSizeFactor;
}


Microsoft.Crm.Client.Core.Framework.CustomControl.DataSetSpecificationRecord = function(name, viewId, columns, entityName, targetEntityType, contextFilter, extraCondition, enableViewPicker, filteredViewIds) {
    this.Name = name;
    this.ViewId = viewId;
    this.Columns = columns;
    this.EntityName = entityName;
    this.TargetEntityType = targetEntityType;
    this.ContextFilter = contextFilter;
    this.ExtraCondition = extraCondition;
    this.EnableViewPicker = enableViewPicker;
    this.FilteredViewIds = filteredViewIds;
}


Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage = function() {}
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage.prototype = {
    bound: 0, 
    input: 1, 
    output: 2
}
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage.registerEnum('Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage', false);


Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnDefinition = function(name, displayName, alias, dataType, visualSizeFactor) {
    this.$1H_0 = name;
    this.$19_0 = displayName;
    this.$13_0 = alias;
    this.$18_0 = dataType;
    this.$1M_0 = visualSizeFactor;
}
Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnDefinition.prototype = {
    $1H_0: null,
    $19_0: null,
    $13_0: null,
    $18_0: null,
    $1M_0: 0,
    
    get_name: function() {
        return this.$1H_0;
    },
    
    get_displayName: function() {
        return this.$19_0;
    },
    
    get_alias: function() {
        return this.$13_0;
    },
    
    get_dataType: function() {
        return this.$18_0;
    },
    
    get_visualSizeFactor: function() {
        return this.$1M_0;
    }
}


Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord = function(use, type, val) {
    this.Usage = use;
    this.Type = type;
    this.Value = val;
    this.Static = true;
    this.Primary = false;
    this.IsRollupOrCalculatedFieldValid = false;
}
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord.prototype = {
    Usage: 0,
    Type: null,
    Value: null,
    Static: false,
    Primary: false,
    IsRollupOrCalculatedFieldValid: false
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common.Xml');

Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList = function() {}
Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList');


Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlEvaluatorType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlEvaluatorType.prototype = {
    undefined: -1, 
    xPath: 0, 
    domParser: 1
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlEvaluatorType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlEvaluatorType', false);


Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper = function($p0) {
    this.$D_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper))();
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        this.$D_0.add($p0[$v_0]);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper.prototype = {
    $D_0: null,
    
    get_count: function() {
        return this.$D_0.get_Count();
    },
    
    get_item: function($p0) {
        return this.$D_0.get_Items()[$p0];
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper = function($p0, $p1) {
    Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper.initializeBase(this);
    this.$0_1 = $p0;
    this.$3_1 = (_Script.isNullOrUndefined($p1)) ? {} : $p1;
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper.prototype = {
    $0_1: null,
    $3_1: null,
    
    get_innerText: function() {
        return (this.$0_1.hasChildNodes()) ? this.$0_1.firstChild.nodeValue : null;
    },
    
    get_outerXml: function() {
        return new XMLSerializer().serializeToString((this.$0_1));
    },
    
    get_innerHtml: function() {
        return '';
    },
    
    get_tagName: function() {
        return this.$0_1.nodeName;
    },
    
    get_domParserElement: function() {
        return this.$0_1;
    },
    
    getAttribute: function($p0) {
        return this.$0_1.getAttribute($p0);
    },
    
    addNamespace: function($p0, $p1) {
        this.$3_1[$p0] = $p1;
    },
    
    selectSingleNode: function($p0) {
        var $v_0 = this.$1n_1($p0, true);
        if (!$v_0.get_count()) {
            return null;
        }
        return $v_0.get_item(0);
    },
    
    selectNodes: function($p0) {
        return this.$1n_1($p0, false);
    },
    
    getElementsByTagName: function($p0) {
        var $v_0;
        if (_Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
            $v_0 = this.$0_1.getElementsByTagName($p0);
        }
        else {
            $v_0 = this.$0_1.ownerDocument.getElementsByTagName($p0);
        }
        var $v_1 = [];
        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            Array.add($v_1, $v_0[$v_4]);
        }
        var $v_2 = this.$1a_1($p0);
        Array.addRange($v_1, $v_2);
        var $v_3 = [];
        for (var $v_5 = 0; $v_5 < $v_1.length; $v_5++) {
            Array.add($v_3, new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper($v_1[$v_5], this.$3_1));
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper($v_3);
    },
    
    childNodes: function() {
        var $v_0 = [];
        for (var $v_1 = 0, $v_2 = this.$0_1.childNodes.length; $v_1 < $v_2; $v_1++) {
            Array.add($v_0, new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper(this.$0_1.childNodes[$v_1], this.$3_1));
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper($v_0);
    },
    
    hasChildNodes: function() {
        return this.$0_1.hasChildNodes();
    },
    
    $1n_1: function($p0, $p1) {
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
            if ($v_3 || _Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
                $v_9 = this.$0_1.getElementsByTagName($v_7);
            }
            else {
                $v_9 = this.$0_1.ownerDocument.getElementsByTagName($v_7);
            }
            var $v_A = [];
            for (var $v_D = 0; $v_D < $v_9.length; $v_D++) {
                Array.add($v_A, $v_9[$v_D]);
            }
            var $v_B = this.$1a_1($v_7);
            Array.addRange($v_A, $v_B);
            var $v_C = $v_A;
            if ($v_A.length > 0 && null !== $v_8) {
                $v_C = this.$1A_1($v_A, $v_8);
            }
            if (!$v_C.length || null === $v_6) {
                $v_0 = $v_C;
            }
            else {
                $v_0 = this.$1J_1($v_C, $v_6, $p1);
            }
        }
        else if ($p0.startsWith('/')) {
            if (_Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
                Array.add($v_0, this.$0_1);
            }
            else {
                Array.add($v_0, this.$0_1.ownerDocument);
            }
            $v_0 = this.$1J_1($v_0, $p0.substr(1), $p1);
        }
        else {
            Array.add($v_0, this.$0_1);
            $v_0 = this.$1J_1($v_0, $p0, $p1);
        }
        var $v_1 = [];
        for (var $v_E = 0; $v_E < $v_0.length; $v_E++) {
            Array.add($v_1, new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper($v_0[$v_E], this.$3_1));
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper($v_1);
    },
    
    $1J_1: function($p0, $p1, $p2) {
        if ($p2) {
            return this.$2I_1($p0, $p1);
        }
        return this.$1l_1($p0, $p1);
    },
    
    $2I_1: function($p0, $p1) {
        if (_Script.isNullOrUndefined($p1) || $p1.length < 1) {
            return $p0;
        }
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = this.$1m_1($p0[$v_1], $p1);
            if (!_Script.isNullOrUndefined($v_2)) {
                Array.add($v_0, $v_2);
                break;
            }
        }
        return $v_0;
    },
    
    $1m_1: function($p0, $p1) {
        if (_Script.isNullOrUndefined($p1) || $p1.length < 1) {
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
            if (this.$1E_1($p0.childNodes[$v_6], $v_3)) {
                var $v_8 = [];
                Array.add($v_8, $p0.childNodes[$v_6]);
                var $v_9 = $v_8;
                if (null !== $v_4) {
                    $v_9 = this.$1A_1($v_8, $v_4);
                }
                if ($v_9.length > 0) {
                    if (null === $v_2) {
                        $v_5 = $v_9[0];
                        break;
                    }
                    else {
                        $v_5 = this.$1m_1($v_9[0], $v_2);
                        if ($v_5) {
                            break;
                        }
                    }
                }
            }
        }
        return $v_5;
    },
    
    $1l_1: function($p0, $p1) {
        if (_Script.isNullOrUndefined($p1) || $p1.length < 1) {
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
            $v_4 = this.$2H_1($p0[$v_5], $v_1);
            if ($v_4.length > 0) {
                Array.addRange($v_3, $v_4);
            }
        }
        if (!$v_3.length || null === $v_2) {
            return $v_3;
        }
        return this.$1l_1($v_3, $v_2);
    },
    
    $2H_1: function($p0, $p1) {
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
            if (this.$1E_1($p0.childNodes[$v_5], $v_1)) {
                Array.add($v_3, $p0.childNodes[$v_5]);
            }
        }
        var $v_4 = $v_3;
        if ($v_3.length > 0 && null !== $v_2) {
            $v_4 = this.$1A_1($v_3, $v_2);
        }
        return $v_4;
    },
    
    $1A_1: function($p0, $p1) {
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
            if ($v_0 && this.$1w_1($v_6, $v_2, $v_3)) {
                Array.add($v_4, $v_6);
            }
            else if (this.$1x_1($v_6, $v_2, $v_3)) {
                Array.add($v_4, $v_6);
            }
        }
        return $v_4;
    },
    
    $1w_1: function($p0, $p1, $p2) {
        if (null === $p2) {
            return $p0.hasAttribute($p1);
        }
        return $p2 === $p0.getAttribute($p1);
    },
    
    $1x_1: function($p0, $p1, $p2) {
        for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
            if (this.$1E_1($p0.childNodes[$v_0], $p1)) {
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
    
    $1a_1: function($p0) {
        var $v_0 = [];
        var $v_1 = this.$1c_1($p0);
        if (_Script.isNullOrUndefined($v_1) || $v_1.length < 1) {
            return $v_0;
        }
        var $v_2 = this.$1b_1($p0);
        var $v_3;
        if (_Script.isNullOrUndefined(this.$0_1.ownerDocument)) {
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
    
    $1c_1: function($p0) {
        var $v_0 = $p0.indexOf(':');
        if ($v_0 < 0) {
            return '';
        }
        var $v_1 = $p0.substr(0, $v_0);
        var $v_2 = this.$3_1[$v_1];
        return $v_2;
    },
    
    $1b_1: function($p0) {
        var $v_0 = $p0.indexOf(':');
        if ($v_0 < 0) {
            return $p0;
        }
        return $p0.substr($v_0 + 1);
    },
    
    $1E_1: function($p0, $p1) {
        if ($p0.nodeName === $p1 || '*' === $p1) {
            return true;
        }
        var $v_0 = this.$1c_1($p1);
        if (_Script.isNullOrUndefined($v_0) || $v_0.length < 1) {
            return false;
        }
        var $v_1 = this.$1b_1($p1);
        return $p0.namespaceURI === $v_0 && $p0.localName === $v_1;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper = function($p0, $p1, $p2) {
    this.$D_0 = [];
    var $v_0 = $p1;
    if (!_Script.isNullOrUndefined($v_0.length)) {
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            Array.add(this.$D_0, new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper($p0, $v_0[$v_1], $p2));
        }
    }
    else {
        var $v_2 = $p1;
        for (var $v_3 = 0; $v_3 < $v_2.snapshotLength; $v_3++) {
            Array.add(this.$D_0, new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper($p0, $v_2.snapshotItem($v_3), $p2));
        }
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper.prototype = {
    $D_0: null,
    
    get_count: function() {
        return this.$D_0.length;
    },
    
    get_item: function($p0) {
        return this.$D_0[$p0];
    }
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode = function() {
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute = function(doc, name, value) {
    var $v_0 = doc.createAttribute(name);
    $v_0.value = value;
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory = function() {
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create = function(node) {
    if (_Script.isNullOrUndefined(node)) {
        return null;
    }
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L === -1) {
        Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$1v(node);
    }
    if (!Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper(node);
    }
    else {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper(node);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument = function(xml) {
    var $v_0 = null;
    if (_Script.isNullOrUndefined($v_0)) {
        $v_0 = Sys.Net.XMLDOM(xml);
    }
    if (!_Script.isNullOrUndefined($v_0)) {
        var $v_1 = $v_0.getElementsByTagName('parsererror');
        if (!_Script.isNullOrUndefined($v_1) && $v_1.length > 0) {
            $v_0 = null;
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$1v = function($p0) {
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$1r()) {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper($p0);
        try {
            $v_0.selectSingleNode('/root');
            Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L = 0;
        }
        catch ($$e_2) {
        }
    }
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L === -1) {
        if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$1q()) {
            Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L = 1;
        }
    }
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L === -1) {
        Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L, 'PreferredXmlEvaluator');
    }
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$1r = function() {
    var $v_0 = document.evaluate;
    return !_Script.isNullOrUndefined($v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$1q = function() {
    var $v_0 = window.DOMParser;
    return !_Script.isNullOrUndefined($v_0);
}


Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper = function($p0, $p1, $p2) {
    this.$$d_$2G_1 = Function.createDelegate(this, this.$2G_1);
    Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper.initializeBase(this);
    this.$K_1 = $p0;
    this.$0_1 = (_Script.isNullOrUndefined($p1)) ? $p0 : $p1;
    this.$3_1 = (_Script.isNullOrUndefined($p2)) ? {} : $p2;
}
Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper.prototype = {
    $3_1: null,
    $K_1: null,
    $0_1: null,
    
    get_innerText: function() {
        return (this.$0_1.hasChildNodes()) ? this.$0_1.firstChild.nodeValue : null;
    },
    
    get_innerHtml: function() {
        return (this.$0_1.hasChildNodes()) ? HtmlEncoder.decode(this.$0_1.innerHTML) : null;
    },
    
    get_outerXml: function() {
        return new XMLSerializer().serializeToString(this.$0_1);
    },
    
    get_tagName: function() {
        return this.$0_1.tagName;
    },
    
    get_domParserElement: function() {
        return this.$0_1;
    },
    
    addNamespace: function($p0, $p1) {
        this.$3_1[$p0] = $p1;
    },
    
    selectSingleNode: function($p0) {
        var $v_0 = this.$K_1.evaluate($p0, this.$0_1, this.$$d_$2G_1, 9, null);
        return (_Script.isNullOrUndefined($v_0.singleNodeValue)) ? null : new Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper(this.$K_1, $v_0.singleNodeValue, this.$3_1);
    },
    
    selectNodes: function($p0) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper(this.$K_1, this.$K_1.evaluate($p0, this.$0_1, this.$$d_$2G_1, 7, null), this.$3_1);
    },
    
    getAttribute: function($p0) {
        return this.$0_1.getAttribute($p0);
    },
    
    getElementsByTagName: function($p0) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper(this.$K_1, this.$0_1.getElementsByTagName($p0), this.$3_1);
    },
    
    childNodes: function() {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper(this.$K_1, this.$0_1.childNodes, this.$3_1);
    },
    
    hasChildNodes: function() {
        return this.$0_1.hasChildNodes();
    },
    
    $2G_1: function($p0) {
        if ((($p0) in this.$3_1)) {
            return this.$3_1[$p0];
        }
        else {
            return null;
        }
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Models.Validation');

Microsoft.Crm.Client.Core.Models.Validation.ValidatorType = function() {}
Microsoft.Crm.Client.Core.Models.Validation.ValidatorType.prototype = {
    none: 0, 
    isRequired: 1, 
    integer: 2, 
    decimal: 3, 
    money: 4, 
    emailAddress: 5, 
    url: 6, 
    currency: 7, 
    dateTime: 8, 
    multiSelectPicklist: 9
}
Microsoft.Crm.Client.Core.Models.Validation.ValidatorType.registerEnum('Microsoft.Crm.Client.Core.Models.Validation.ValidatorType', false);


Microsoft.Crm.Client.Core.Models.Validation.IValidator = function() {}
Microsoft.Crm.Client.Core.Models.Validation.IValidator.registerInterface('Microsoft.Crm.Client.Core.Models.Validation.IValidator');


Microsoft.Crm.Client.Core.Models.Validation.CustomControlValidationHelper = function() {
}
Microsoft.Crm.Client.Core.Models.Validation.CustomControlValidationHelper.getValidatorType = function(type, format) {
    if (!_Script.isNullOrUndefined(format)) {
        format = format.toLowerCase();
    }
    switch (type.toLowerCase()) {
        case 'string':
        case 'singleline':
            switch (format) {
                case 'email':
                    return 5;
                case 'url':
                    return 6;
                default:
                    return 1;
            }
        case 'decimal':
        case 'double':
        case 'fp':
        case 'float':
            return 3;
        case 'money':
        case 'currency':
            return 4;
        case 'integer':
        case 'bigint':
        case 'whole':
            return 2;
        case 'date':
        case 'datetime':
        case 'dateandtime':
            return 8;
        case 'multiselectpicklist':
            return 9;
        default:
            return 1;
    }
}


Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult = function(isValueValid, validatedValue, errorMessage, errorId, errorMessageLevel) {
    this.$t_0 = isValueValid;
    this.$z_0 = validatedValue;
    this.$o_0 = errorMessage;
    this.$n_0 = errorId;
    this.$p_0 = errorMessageLevel;
}
Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult.prototype = {
    $t_0: false,
    $z_0: null,
    $o_0: null,
    $p_0: null,
    $n_0: null,
    
    get_isValueValid: function() {
        return this.$t_0;
    },
    
    set_isValueValid: function(value) {
        this.$t_0 = value;
        return value;
    },
    
    get_validatedValue: function() {
        return this.$z_0;
    },
    
    set_validatedValue: function(value) {
        this.$z_0 = value;
        return value;
    },
    
    get_errorMessage: function() {
        return this.$o_0;
    },
    
    set_errorMessage: function(value) {
        this.$o_0 = value;
        return value;
    },
    
    get_errorMessageLevel: function() {
        return this.$p_0;
    },
    
    set_errorMessageLevel: function(value) {
        this.$p_0 = value;
        return value;
    },
    
    get_errorId: function() {
        return this.$n_0;
    },
    
    set_errorId: function(value) {
        this.$n_0 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common.CustomControls');

Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression = function() {
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression.prototype = {
    attributeName: null,
    entityAliasName: null,
    conditionOperator: 0,
    value: null,
    values: null
}


Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression.ConditionOperator = function() {}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression.ConditionOperator.prototype = {
    none: -1, 
    equal: 0, 
    notEqual: 1, 
    greaterThan: 2, 
    lessThan: 3, 
    greaterEqual: 4, 
    lessEqual: 5, 
    like: 6, 
    yesterday: 14, 
    today: 15, 
    tomorrow: 16, 
    last7Days: 17, 
    next7Days: 18, 
    lastWeek: 19, 
    thisWeek: 20, 
    lastMonth: 22, 
    thisMonth: 23, 
    on: 25, 
    onOrBefore: 26, 
    onOrAfter: 27, 
    lastYear: 28, 
    thisYear: 29, 
    above: 75, 
    aboveOrEqual: 78, 
    under: 76, 
    underOrEqual: 79, 
    notUnder: 77, 
    containValues: 87, 
    nullValue: 12
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression.ConditionOperator.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression.ConditionOperator', false);


Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilterExpression = function() {
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilterExpression.prototype = {
    conditions: null,
    filterOperator: 0,
    filters: null
}


Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils = function() {
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.conditionOperatorToString = function(conditionOperator) {
    switch (conditionOperator) {
        case 0:
            return 'eq';
        case 1:
            return 'ne';
        case 4:
            return 'ge';
        case 2:
            return 'gt';
        case 5:
            return 'le';
        case 3:
            return 'lt';
        case 25:
            return 'on';
        case 26:
            return 'on-or-before';
        case 27:
            return 'on-or-after';
        case 6:
            return 'like';
        case 14:
            return 'yesterday';
        case 15:
            return 'today';
        case 16:
            return 'tomorrow';
        case 17:
            return 'last-seven-days';
        case 18:
            return 'next-seven-days';
        case 19:
            return 'last-week';
        case 20:
            return 'this-week';
        case 22:
            return 'last-month';
        case 23:
            return 'this-month';
        case 28:
            return 'last-year';
        case 29:
            return 'this-year';
        case 75:
            return 'above';
        case 78:
            return 'eq-or-above';
        case 76:
            return 'under';
        case 79:
            return 'eq-or-under';
        case 77:
            return 'not-under';
        case 87:
            return 'contain-values';
        case 12:
            return 'null';
    }
    return '';
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.$1s = function($p0) {
    switch ($p0) {
        case 'eq':
            return 0;
        case 'ne':
            return 1;
        case 'ge':
            return 4;
        case 'gt':
            return 2;
        case 'le':
            return 5;
        case 'lt':
            return 3;
        case 'on':
            return 25;
        case 'on-or-before':
            return 26;
        case 'on-or-after':
            return 27;
        case 'like':
            return 6;
        case 'yesterday':
            return 14;
        case 'today':
            return 15;
        case 'tomorrow':
            return 16;
        case 'last-seven-days':
            return 17;
        case 'next-seven-days':
            return 18;
        case 'last-week':
            return 19;
        case 'this-week':
            return 20;
        case 'last-month':
            return 22;
        case 'this-month':
            return 23;
        case 'last-year':
            return 28;
        case 'this-year':
            return 29;
        case 'above':
            return 75;
        case 'eq-or-above':
            return 78;
        case 'under':
            return 76;
        case 'eq-or-under':
            return 79;
        case 'not-under':
            return 77;
        case 'contain-values':
            return 87;
        case 'null':
            return 12;
    }
    return -1;
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.checkFilterOperatorIsValid = function(filterOperator) {
    switch (filterOperator) {
        case 'and':
        case 'or':
        case 'not':
            break;
        default:
            throw Error.create('Invalid filter operator' + filterOperator);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.checkConditionOperatorIsValid = function(conditionOperator) {
    switch (conditionOperator) {
        case 'eq':
        case 'ne':
        case 'ge':
        case 'gt':
        case 'le':
        case 'lt':
        case 'on':
        case 'on-or-before':
        case 'on-or-after':
        case 'like':
        case 'yesterday':
        case 'today':
        case 'tomorrow':
        case 'last-seven-days':
        case 'next-seven-days':
        case 'last-week':
        case 'this-week':
        case 'last-month':
        case 'this-month':
        case 'last-year':
        case 'this-year':
        case 'above':
        case 'eq-or-above':
        case 'under':
        case 'eq-or-under':
        case 'not-under':
        case 'contain-values':
        case 'null':
            break;
        default:
            throw Error.create('Invalid condition operator' + conditionOperator);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.checkIfConditionExpressionHasInvalidArguments = function(condition) {
    if (!_Script.isNullOrUndefined(condition.attributeName) && (!_Script.isNullOrUndefined(condition.value) || !_Script.isNullOrUndefined(condition.values)) && _Script.isNullOrUndefined(condition.conditionOperator)) {
        throw Error.argumentNull('Condition Operator in ConditionExpression is missing');
    }
    if (!_Script.isNullOrUndefined(condition.conditionOperator) && (!_Script.isNullOrUndefined(condition.value) || !_Script.isNullOrUndefined(condition.values)) && _Script.isNullOrUndefined(condition.attributeName)) {
        throw Error.argumentNull('AttributeName in ConditionExpression is missing');
    }
}
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.fetchXmlToFilterExpression = function(filterXml) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilterExpression();
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(filterXml)) {
        var $v_1 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(filterXml);
        var $v_2 = $v_1.getElementsByTagName('filter');
        if ($v_2.length > 0) {
            $v_0.conditions = [];
            $v_0.filters = [];
            var $v_3 = $v_2[0].attributes.getNamedItem('type');
            $v_0.filterOperator = ($v_3.nodeValue === Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.toString(0).toLowerCase()) ? 0 : 1;
            var $v_4 = $v_2[0].childNodes;
            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                var $v_6 = $v_4[$v_5];
                if ($v_6.nodeName.toLowerCase() === 'condition') {
                    var $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression();
                    $v_7.conditionOperator = Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.$1s($v_6.attributes.getNamedItem('operator').nodeValue);
                    $v_7.attributeName = $v_6.attributes.getNamedItem('attribute').nodeValue;
                    var $v_8 = $v_6.attributes.getNamedItem('value');
                    if (!_Script.isNullOrUndefined($v_8)) {
                        var $v_9 = $v_6.attributes.getNamedItem('value').nodeValue;
                        $v_7.value = $v_9;
                    }
                    $v_0.conditions.push($v_7);
                }
                else if ($v_6.nodeName.toLowerCase() === 'filter') {
                    var $v_A = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_6).get_outerXml();
                    $v_0.filters.push(Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.fetchXmlToFilterExpression($v_A));
                }
            }
        }
    }
    return $v_0;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common.FetchExpression');

Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator = function() {}
Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.prototype = {
    and: 0, 
    or: 1, 
    not: 2
}
Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator', false);


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel');

Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat = function() {
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Imported');

Microsoft.Crm.Client.Core.Imported.XPathResultType = function() {}
Microsoft.Crm.Client.Core.Imported.XPathResultType.prototype = {
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
Microsoft.Crm.Client.Core.Imported.XPathResultType.registerEnum('Microsoft.Crm.Client.Core.Imported.XPathResultType', false);


function MscrmComponents() {
}
MscrmComponents.DeferredPromiseFactory = function(TData, TError) {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(TData, TError);
    return new Microsoft.Crm.Client.Core.Imported.DeferredPromiseDecorator($v_0);
}


Microsoft.Crm.Client.Core.Imported.DeferredPromiseDecorator = function(actualPromise) {
    this.$A_0 = actualPromise;
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseDecorator.prototype = {
    $A_0: null,
    
    allArray: function(deferreds) {
        return $P_CRM.when.apply(null, deferreds);
    },
    
    always: function() {
        var alwaysCallbacks = [];
        for (var $$pai_2 = 0; $$pai_2 < arguments.length; ++$$pai_2) {
            alwaysCallbacks[$$pai_2] = arguments[$$pai_2];
        }
        var $$t_1;
        return ($$t_1 = this.$A_0).always.apply($$t_1, alwaysCallbacks);
    },
    
    done: function() {
        var doneCallbacks = [];
        for (var $$pai_2 = 0; $$pai_2 < arguments.length; ++$$pai_2) {
            doneCallbacks[$$pai_2] = arguments[$$pai_2];
        }
        var $$t_1;
        return ($$t_1 = this.$A_0).done.apply($$t_1, doneCallbacks);
    },
    
    fail: function() {
        var failCallbacks = [];
        for (var $$pai_2 = 0; $$pai_2 < arguments.length; ++$$pai_2) {
            failCallbacks[$$pai_2] = arguments[$$pai_2];
        }
        var $$t_1;
        return ($$t_1 = this.$A_0).fail.apply($$t_1, failCallbacks);
    },
    
    then: function(doneCallback, failCallback) {
        return this.$A_0.then(doneCallback, failCallback);
    },
    
    resolve: function(result) {
        return this.$A_0.resolve(result);
    },
    
    reject: function(error) {
        return this.$A_0.reject(error);
    },
    
    promise: function() {
        return this.$A_0.promise();
    },
    
    isRejected: function() {
        return this.$A_0.isRejected();
    },
    
    isResolved: function() {
        return this.$A_0.isResolved();
    },
    
    state: function() {
        return this.$A_0.state();
    }
}


Microsoft.Crm.Client.Core.Imported.MscrmComponents = function() {
}
Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory = function(TData, TError) {
    return jQueryApi.jQueryDeferredFactory.Deferred(TData, TError);
}
Microsoft.Crm.Client.Core.Imported.MscrmComponents.ObjectsEqual = function(objA, objB) {
    return Microsoft.Crm.Client.Core.Framework.ObjectComparer.areValuesEqual(objA, objB);
}


Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper = function() {
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when = function() {
    var deferreds = [];
    for (var $$pai_1 = 0; $$pai_1 < arguments.length; ++$$pai_1) {
        deferreds[$$pai_1] = arguments[$$pai_1];
    }
    return jQueryAjax.$P_CRM.when.apply.apply(null, [ null ].concat(deferreds));
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray = function(deferreds) {
    return $P_CRM.when.apply(null, deferreds);
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.isPending = function(TData, TError, deferred) {
    return deferred.state() === 'pending';
}


function IsNull(value) {
    return typeof(value) === 'undefined' || typeof(value) === 'unknown' || value == null;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Attributes');

Microsoft.Crm.Client.Core.Attributes.ExportToTypescriptAttribute = function() {
    Microsoft.Crm.Client.Core.Attributes.ExportToTypescriptAttribute.initializeBase(this);
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Framework.Utils');

Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers = function() {
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullArgument = function(argument, argumentName) {
    if (_Script.isNull(argument)) {
        throw Error.argumentNull(argumentName, 'Argument can\'t be null');
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument = function(argument, argumentName) {
    if (_Script.isNullOrUndefined(argument)) {
        throw Error.argumentNull(argumentName, 'Argument can\'t be null or undefined');
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnUndefinedArgument = function(argument, argumentName) {
    if (_Script.isUndefined(argument)) {
        throw Error.argumentNull(argumentName, 'Argument can\'t be undefined');
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrEmptyArgument = function(str, argumentName) {
    if (!str || !str.length) {
        throw Error.argumentNull(argumentName, 'Argument can\'t be null or empty');
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrEmptyArrayArgument = function(array, argumentName) {
    if (!array || !array.length) {
        throw Error.argumentNull(argumentName, 'Argument can\'t be null or empty');
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnEquals = function(argument, unexpectedValue, argumentName) {
    if (argument === unexpectedValue) {
        throw Error.argument(argumentName, 'Argument value should not be equal to ' + unexpectedValue.toString());
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNotEquals = function(argument, expectedValue, argumentName) {
    if (argument !== expectedValue) {
        throw Error.argument(argumentName, 'Argument is ' + argument + 'but should be equal to ' + expectedValue);
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnOutOfRange = function(value, minValue, maxValue, argumentName) {
    if (value < minValue || value > maxValue) {
        throw Error.argumentOutOfRange(argumentName);
    }
}
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnAssert = function(condition, message) {
    if (!condition) {
        throw Error.create('ExceptionHelpers.ThrowOnAssert(' + message + ')');
    }
}


Microsoft.Crm.Client.Core.SharedScript.registerClass('Microsoft.Crm.Client.Core.SharedScript');
Microsoft.Crm.Client.Core.Framework.CallingContext.registerClass('Microsoft.Crm.Client.Core.Framework.CallingContext');
Microsoft.Crm.Client.Core.Framework.DefaultContext.registerClass('Microsoft.Crm.Client.Core.Framework.DefaultContext', Microsoft.Crm.Client.Core.Framework.CallingContext);
Microsoft.Crm.Client.Core.Framework.CustomControlAttributeProperty.registerClass('Microsoft.Crm.Client.Core.Framework.CustomControlAttributeProperty');
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.registerClass('Microsoft.Crm.Client.Core.Framework.CustomControlConstants');
Microsoft.Crm.Client.Core.Framework.CustomControlUtils.registerClass('Microsoft.Crm.Client.Core.Framework.CustomControlUtils');
Microsoft.Crm.Client.Core.Framework.Activity.registerClass('Microsoft.Crm.Client.Core.Framework.Activity');
Microsoft.Crm.Client.Core.Framework.DoublyLinkedListNode.registerClass('Microsoft.Crm.Client.Core.Framework.DoublyLinkedListNode');
Microsoft.Crm.Client.Core.Framework.ErrorData.registerClass('Microsoft.Crm.Client.Core.Framework.ErrorData');
Microsoft.Crm.Client.Core.Framework.ObjectComparer.registerClass('Microsoft.Crm.Client.Core.Framework.ObjectComparer');
Microsoft.Crm.Client.Core.Framework.SortingInfo.registerClass('Microsoft.Crm.Client.Core.Framework.SortingInfo', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.registerClass('Microsoft.Crm.Client.Core.Framework.UrlParameterConstants');
Microsoft.Crm.Client.Core.Framework._Dictionary.registerClass('Microsoft.Crm.Client.Core.Framework._Dictionary');
Microsoft.Crm.Client.Core.Framework._Enum.registerClass('Microsoft.Crm.Client.Core.Framework._Enum');
Microsoft.Crm.Client.Core.Framework.DynamicsTrace.registerClass('Microsoft.Crm.Client.Core.Framework.DynamicsTrace');
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.registerClass('Microsoft.Crm.Client.Core.Framework.PerformanceMarker');
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch.registerClass('Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch');
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.registerClass('Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames');
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.registerClass('Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames');
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.registerClass('Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames');
Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames.registerClass('Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames');
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.registerClass('Microsoft.Crm.Client.Core.Framework.DeviceConfiguration');
Microsoft.Crm.Client.Core.Framework.FieldFormat.registerClass('Microsoft.Crm.Client.Core.Framework.FieldFormat');
Microsoft.Crm.Client.Core.Framework.MetadataTypeName.registerClass('Microsoft.Crm.Client.Core.Framework.MetadataTypeName');
Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.registerClass('Microsoft.Crm.Client.Core.Framework.FieldLevelAccess');
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.registerClass('Microsoft.Crm.Client.Core.Framework.RolePrivilegeId');
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.registerClass('Microsoft.Crm.Client.Core.Framework.CrmErrorCodes');
Microsoft.Crm.Client.Core.Framework.ErrorStatus.registerClass('Microsoft.Crm.Client.Core.Framework.ErrorStatus', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.Guid.registerClass('Microsoft.Crm.Client.Core.Framework.Guid', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.ManifestType.registerClass('Microsoft.Crm.Client.Core.Framework.ManifestType');
Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster.registerClass('Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.registerClass('Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils');
Microsoft.Crm.Client.Core.Framework.TransitionConstraint.registerClass('Microsoft.Crm.Client.Core.Framework.TransitionConstraint', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.Undefined.registerClass('Microsoft.Crm.Client.Core.Framework.Undefined');
_Math.registerClass('_Math');
_Script.registerClass('_Script');
Microsoft.Crm.Client.Core.Framework._String.registerClass('Microsoft.Crm.Client.Core.Framework._String');
HtmlEncoder.registerClass('HtmlEncoder');
Microsoft.Crm.Client.Core.Framework.Debug.registerClass('Microsoft.Crm.Client.Core.Framework.Debug');
OptionalParameter.registerClass('OptionalParameter');
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.registerClass('Microsoft.Crm.Client.Core.Framework.Common.ResourceManager');
Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnSpecificationRecord.registerClass('Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnSpecificationRecord');
Microsoft.Crm.Client.Core.Framework.CustomControl.DataSetSpecificationRecord.registerClass('Microsoft.Crm.Client.Core.Framework.CustomControl.DataSetSpecificationRecord');
Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnDefinition.registerClass('Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnDefinition');
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord.registerClass('Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord');
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeListWrapper', null, Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList);
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode');
Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.DOMParserNodeWrapper', Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode);
Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.NodeSnapshotWrapper', null, Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList);
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory');
Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper.registerClass('Microsoft.Crm.Client.Core.Storage.Common.Xml.XPathEvaluatorWrapper', Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode);
Microsoft.Crm.Client.Core.Models.Validation.CustomControlValidationHelper.registerClass('Microsoft.Crm.Client.Core.Models.Validation.CustomControlValidationHelper');
Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult.registerClass('Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult');
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression.registerClass('Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression');
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilterExpression.registerClass('Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilterExpression');
Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.registerClass('Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat');
MscrmComponents.registerClass('MscrmComponents');
Microsoft.Crm.Client.Core.Imported.DeferredPromiseDecorator.registerClass('Microsoft.Crm.Client.Core.Imported.DeferredPromiseDecorator');
Microsoft.Crm.Client.Core.Imported.MscrmComponents.registerClass('Microsoft.Crm.Client.Core.Imported.MscrmComponents');
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.registerClass('Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper');
Microsoft.Crm.Client.Core.Attributes.ExportToTypescriptAttribute.registerClass('Microsoft.Crm.Client.Core.Attributes.ExportToTypescriptAttribute', Sys.Attribute);
Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.registerClass('Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers');
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.lastUpdatedField = 'lastUpdatedField';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.lastUpdatedValue = 'lastUpdatedValue';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.rollupStateField = 'rollupStateField';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.rollupStateValue = 'rollupStateValue';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.recalculate = 'recalculate';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.rollupValid = 'rollupValid';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.calculatedFieldValid = 'calculatedFieldValid';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.partyList = 'lookup.partylist';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.lookupCheck = 'lookup.';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.formCard = 'Form.Card';
Microsoft.Crm.Client.Core.Framework.CustomControlConstants.formMain = 'Form.Main';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.layoutParameterName = 'layout';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.rightToLeftParameterName = 'rtl';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.traceLevelParameterName = 'tracelevel';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.showPerformanceParameterName = 'showperf';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.collectorServiceParameterName = 'collectorurl';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.viewCacheThresholdParameterName = 'viewcachethreshold';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.profileParameterName = 'profile';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.profileStartupValueName = 'startup';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.orgName = 'org';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.serverName = 'server';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.workspaceToLoadParameterName = 'workspace';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.navigationEntityTypeName = 'navetn';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.navigationId = 'navid';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.navigationPageType = 'navpagetype';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.navBarParameterName = 'navbar';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.commandBarParameterName = 'cmdbar';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.backButtonParameterName = 'backbtn';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.associatedGridRelationshipName = 'tabset';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.appLinkEntityTypeName = 'etn';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.appLinkId = 'id';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.appLinkPageType = 'pagetype';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.appLinkData = 'data';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.appLinkError = 'error';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.delayedPanoramaRenderingParameterName = 'panoramadelayedrender';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.paneScrollIndicatorParameterName = 'panescrollindicator';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.phoneParameterName = 'phone';
Microsoft.Crm.Client.Core.Framework.UrlParameterConstants.syncAppMetadataParameterName = 'syncappmeta';
Microsoft.Crm.Client.Core.Framework.DynamicsTrace.storage = 1005;
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.pageStart = 'BeforeInitializeStart';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.interactionReady = 'LoadedInteractionReady';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.loadedInitialUI = 'LoadedInitialUI';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.renderedInitialUI = 'RenderedInitialUI';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.loadedInitialData = 'LoadedInitialData';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.renderedInitialData = 'RenderedInitialData';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.loadedRefreshedData = 'RenderedRefreshedData';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.loadedReadReady = 'LoadedReadReady';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.renderedReadReady = 'RenderedReadReady';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.loadedEditReady = 'LoadedEditReady';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.renderedEditReady = 'RenderedEditReady';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.loadedViewportInitialUI = 'LoadedViewportInitialUI';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.renderedViewportInitialUI = 'RenderedViewportInitialUI';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.loadedViewportInitialData = 'LoadedViewportInitialData';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.renderedViewportInitialData = 'RenderedViewportInitialData';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.fullLoad = 'LoadedFull';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.firstQueueLoad = 'RenderedFirstQueueWithData';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.landingPageLoadStart = 'LandingPageLoadStart';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.landingPageInitialLoad = 'LandingPageInitialLoad';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.landingPageRecentItems = 'LandingPageRecentItems';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.landingPageQuickCommands = 'LandingPageQuickCommands';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.landingPageCardFeed = 'LandingPageCardFeed';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.initializingSearch = 'StartMarkerForSearch';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.finishingSearch = 'StopMarkerForSearch';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.initializingLookupSearch = 'StartMarkerForLookupSearch';
Microsoft.Crm.Client.Core.Framework.PageLoadPerformanceMarkerNames.finishingLookupSearch = 'StopMarkerForLookupSearch';
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.bootStart = 'PageLoadStart';
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.shimInit = 'Shim Init';
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.cssInit = 'Style Init';
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.jsInit = 'JavaScript Init';
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.requireJsInit = 'RequireJs JavaScript Init';
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.cordovaInit = 'Cordova Init';
Microsoft.Crm.Client.Core.Framework.AppBootPerformanceMarkerNames.delayedAssetsInit = 'Delayed Assets Init';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.crmSoapServiceCall = 'CrmSoapServiceCall';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.checkRemoteDataSourceUpdates = 'DataSource_CheckRemoteDataSourceUpdates';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.initializeAfterUpdatesCheck = 'DataSource_InitializeAfterUpdatesCheck';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.syncAllEntityAndAttributeMetadata = 'DataSource_SyncAllEntityAndAttributeMetadata';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.syncAllApplicationMetadata = 'DataSource_SyncAllApplicationMetadata';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.syncEntityAttributeBatch = 'DataSource_SyncEntityAttributeBatch';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.syncApplicationMetdataBatch = 'DataSource_SyncApplicationMetadataBatch';
Microsoft.Crm.Client.Core.Framework.DataLayerPerformanceMarkerNames.offlineSync = 'DataSource_OfflineSync';
Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames.offlineCreateRecord = 'OfflineDataStore_CreateRecord';
Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames.offlineRetrieveRecord = 'OfflineDataStore_RetrieveRecord';
Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames.offlineUpdateRecord = 'OfflineDataStore_UpdateRecord';
Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames.offlineDeleteRecord = 'OfflineDataStore_DeleteRecord';
Microsoft.Crm.Client.Core.Framework.OfflineDataStoreCRUDPerformanceMarkerNames.offlineRetrieveMultipleRecords = 'OfflineDataStore_RetrieveMultipleRecords';
Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.previewModePropertyName = 'PreviewModeProperty';
this.$12 = false;
Microsoft.Crm.Client.Core.Framework.FieldFormat.raw = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(0);
Microsoft.Crm.Client.Core.Framework.FieldFormat.numeric = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(1);
Microsoft.Crm.Client.Core.Framework.FieldFormat.label = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(2);
Microsoft.Crm.Client.Core.Framework.FieldFormat.value = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(3);
Microsoft.Crm.Client.Core.Framework.FieldFormat.state = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(4);
Microsoft.Crm.Client.Core.Framework.FieldFormat.id = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(5);
Microsoft.Crm.Client.Core.Framework.FieldFormat.name = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(6);
Microsoft.Crm.Client.Core.Framework.FieldFormat.logicalName = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(7);
Microsoft.Crm.Client.Core.Framework.FieldFormat.defaultStatus = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(9);
Microsoft.Crm.Client.Core.Framework.FieldFormat.allowedStatusTransitions = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(8);
Microsoft.Crm.Client.Core.Framework.FieldFormat.color = Microsoft.Crm.Client.Core.Framework.FieldFormat.$C(10);
Microsoft.Crm.Client.Core.Framework.FieldFormat.delimiter = '!';
Microsoft.Crm.Client.Core.Framework.MetadataTypeName.workspace = 'Workspace';
Microsoft.Crm.Client.Core.Framework.MetadataTypeName.interactionCentricWorkspace = 'InteractionCentricWorkspace';
Microsoft.Crm.Client.Core.Framework.MetadataTypeName.powerBIFullScreenPage = 'PowerBIFullScreenPage';
Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$w = null;
Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.$x = null;
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.readWebResources = '4156db68-93e2-4a83-8cbb-5bb344ebaf47';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.overridePriceEngineOpportunity = '0fe2f754-3531-4670-8a8d-b3d7eb49321e';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.overridePriceEngineQuote = '45c781da-db3e-439b-9efe-d1b5484b832f';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.overridePriceEngineInvoice = '748f74bf-055c-4fd3-835f-a9ecb7449315';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.overridePriceEngineOrder = '0186f903-2b6a-4230-9838-0b64080a7568';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.readUserQueryVisualizations = 'd68cb29d-2243-41d1-b5a8-ee24dc885140';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.readSavedQueryVisualizations = '575b9a8f-46da-4fb5-b014-51a689b003f0';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.readUserQuery = 'f3b782a2-e6d5-4b86-9b7d-33f627fe5c5d';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.publishKnowledgeArticle = '7c538e3d-8e82-4f73-922e-471472954c52';
Microsoft.Crm.Client.Core.Framework.RolePrivilegeId.approveKnowledgeArticle = 'bdf910f7-0c80-4e7b-8ac2-12e75790319f';
Microsoft.Crm.Client.Core.Framework.CallingContext.unknown = 'unknown';
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.emptyCommandOrEntity = -2146088111;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.commandNotSupported = -2146088110;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.operationFailedTryAgain = -2146088109;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.noUserPrivilege = -2146088112;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.xamlNotFound = -2146088113;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.genericError = 0;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.cameraDisabledInPrivacySettings = -2147094022;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.deviceSettingDisabled = -2147094021;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.getGeoLocationFailed = -2147094020;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.barCodeCaptureFailed = -2147094019;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.audioCaptureFailed = -2147094018;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.videoCaptureFailed = -2147094017;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.cameraCaptureFailed = -2147094016;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.mobileClientLanguageNotSupported = -2147094015;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.mobileClientVersionNotSupported = -2147094014;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.roleNotEnabledForTabletApp = -2147094013;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.filePickerErrorFileSizeCannotBeZero = -2147094010;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.filePickerErrorUnableToOpenFile = -2147094009;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.filePickerErrorApplicationInSnapView = -2147094009;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.getPhotoFromGalleryFailed = -2147094008;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.saveDataFileErrorOutOfSpace = -2147094007;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.openDocumentErrorCodeUnableToFindTheDataId = -2147094005;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.openDocumentErrorCodeUnableToFindAnActivity = -2147094004;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.openDocumentErrorCodeGeneric = -2147094004;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.viewHasBeenDeleted = -2147094003;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.dashboardHasBeenDeleted = -2147094011;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.mobileClientNotConfiguredForCurrentUser = -2147094002;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.noMinimumRequiredPrivilegesForTabletApp = -2147094001;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.dataSourceInitializeFailedErrorCode = -2147094000;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.dataSourceOfflineErrorCode = -2147093999;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.pingFailureErrorCode = -2147093998;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.retrieveRecordOfflineErrorCode = -2147093997;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.cannotSaveRecordInOfflineErrorCode = -2147093996;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.generalAuthorizationErrorCode = -2147093995;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.cannotGoOfflineErrorCode = -2147093994;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.signOutFailed = -2147093993;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.invalidPreviewModeOperation = -2147093991;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.taskFlowNotFound = -2147084512;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.viewHasBeenInactive = -2147084511;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.pageNotFound = -2147093990;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.viewNotAvailableForMobileOffline = -2147093989;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.notMobileWriteEnabled = -2147093988;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.dataStoreKeyNotFoundErrorCode = -2147093987;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.cantUpdateOnlineRecord = -2147093980;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.cannotDeleteOnlineRecord = -2147093944;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.entityMetadataSyncFailed = -2147093960;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.entityMetadataSyncFailedWithContinue = -2147093959;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.applicationMetadataSyncFailed = -2147093952;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.applicationMetadataSyncFailedWithContinue = -2147093951;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.applicationMetadataSyncTimeout = -2147093950;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.applicationMetadataSyncTimeoutWithContinue = -2147093949;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.applicationMetadataSyncAppLock = -2147093948;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.applicationMetadataSyncAppLockWithContinue = -2147093947;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.genericMetadataSyncFailed = -2147093946;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.genericMetadataSyncFailedWithContinue = -2147093945;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.concurrencyVersionMismatch = -2147088254;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.concurrencyVersionNotProvided = -2147088253;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.filePickerErrorFileSizeBreached = -2147205624;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.filePickerErrorAttachmentTypeBlocked = -2147205623;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.duplicateRecordDetected = -2147220685;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.objectDoesNotExist = -2147220969;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.privilegeDenied = -2147220960;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.unManagedIdsAccessDenied = -2147187962;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.userDisabled = -2147220955;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.duplicateRecord = -2147220937;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.isvAborted = -2147220891;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.businessUnitDisabled = -2147220692;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.metadataNoMapping = -2147217919;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.userWithoutRoles = -2147209463;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.userWithoutPrivileges = -2147209460;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.genericSqlError = -2147204784;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.notMobileEnabled = -2147093995;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.notMobileEnabledMetaData = -2147020759;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.fieldIsReadOnly = -2147088625;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.quickCreateInvalidEntityName = -2147088112;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.quickCreateDisabledOnEntity = -2147088111;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.refreshCanceled = -2147088110;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.crmSqlGovernorDatabaseRequestDenied = -2147180543;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.asyncOperationTypeThrottled = -2147088106;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.asyncOperationPostponedByExceptionCountThrottle = -2147088105;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.trackingIsNotSupported = -2147881479;
Microsoft.Crm.Client.Core.Framework.CrmErrorCodes.emailAddressMismatch = -2147085807;
Microsoft.Crm.Client.Core.Framework.Guid.$m = null;
Microsoft.Crm.Client.Core.Framework.Guid.$1B = null;
Microsoft.Crm.Client.Core.Framework.Guid.$1C = null;
Microsoft.Crm.Client.Core.Framework.Guid.$14 = null;
Microsoft.Crm.Client.Core.Framework.Guid.$17 = null;
Microsoft.Crm.Client.Core.Framework.ManifestType.twoOptions = 'TwoOptions';
Microsoft.Crm.Client.Core.Framework.ManifestType.dateAndTimeDateOnly = 'DateAndTime.DateOnly';
Microsoft.Crm.Client.Core.Framework.ManifestType.dateAndTimeDateAndTime = 'DateAndTime.DateAndTime';
Microsoft.Crm.Client.Core.Framework.ManifestType.decimal = 'Decimal';
Microsoft.Crm.Client.Core.Framework.ManifestType.FP = 'FP';
Microsoft.Crm.Client.Core.Framework.ManifestType.wholeNone = 'Whole.None';
Microsoft.Crm.Client.Core.Framework.ManifestType.wholeDuration = 'Whole.Duration';
Microsoft.Crm.Client.Core.Framework.ManifestType.wholeTimeZone = 'Whole.TimeZone';
Microsoft.Crm.Client.Core.Framework.ManifestType.wholeLanguage = 'Whole.Language';
Microsoft.Crm.Client.Core.Framework.ManifestType.lookupSimple = 'Lookup.Simple';
Microsoft.Crm.Client.Core.Framework.ManifestType.lookupCustomer = 'Lookup.Customer';
Microsoft.Crm.Client.Core.Framework.ManifestType.lookupOwner = 'Lookup.Owner';
Microsoft.Crm.Client.Core.Framework.ManifestType.lookupPartyList = 'Lookup.PartyList';
Microsoft.Crm.Client.Core.Framework.ManifestType.lookupRegarding = 'Lookup.Regarding';
Microsoft.Crm.Client.Core.Framework.ManifestType.multiple = 'Multiple';
Microsoft.Crm.Client.Core.Framework.ManifestType.currency = 'Currency';
Microsoft.Crm.Client.Core.Framework.ManifestType.optionSet = 'OptionSet';
Microsoft.Crm.Client.Core.Framework.ManifestType.multiSelectOptionSet = 'MultiSelectOptionSet';
Microsoft.Crm.Client.Core.Framework.ManifestType.enumType = 'Enum';
Microsoft.Crm.Client.Core.Framework.ManifestType.singleLineEmail = 'SingleLine.Email';
Microsoft.Crm.Client.Core.Framework.ManifestType.singleLineText = 'SingleLine.Text';
Microsoft.Crm.Client.Core.Framework.ManifestType.singleLineTextArea = 'SingleLine.TextArea';
Microsoft.Crm.Client.Core.Framework.ManifestType.singleLineURL = 'SingleLine.URL';
Microsoft.Crm.Client.Core.Framework.ManifestType.singleLineTickerSymbol = 'SingleLine.Ticker';
Microsoft.Crm.Client.Core.Framework.ManifestType.singleLinePhone = 'SingleLine.Phone';
Microsoft.Crm.Client.Core.Framework.ManifestType.grid = 'Grid';
Microsoft.Crm.Client.Core.Framework.ManifestType.formCard = 'Form.Card';
Microsoft.Crm.Client.Core.Framework.ManifestType.formMain = 'Form.Main';
Microsoft.Crm.Client.Core.Framework.ManifestType.businessProcessFlow = 'BusinessProcessFlow';
Microsoft.Crm.Client.Core.Framework.ManifestType.webResourceHtmlControl = 'WebResource.HTML';
Microsoft.Crm.Client.Core.Framework.ManifestType.timelineWall = 'TimelineWall';
Microsoft.Crm.Client.Core.Framework.ManifestType.quickForm = 'Form.QuickForm';
Microsoft.Crm.Client.Core.Framework.ManifestType.card = 'Card';
Microsoft.Crm.Client.Core.Framework.ManifestType.dashboard = 'Dashboard';
Microsoft.Crm.Client.Core.Framework.ManifestType.search = 'Search';
Microsoft.Crm.Client.Core.Framework.ManifestType.searchWidget = 'SearchWidget.SearchWidget';
Microsoft.Crm.Client.Core.Framework.ManifestType.powerBI = 'PowerBI';
Microsoft.Crm.Client.Core.Framework.ManifestType.unboundCustomControl = 'Unbound';
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.$1R = [ 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365 ];
Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.$1S = [ 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366 ];
Microsoft.Crm.Client.Core.Framework.Undefined.undefinedKeyword = 'undefined';
Microsoft.Crm.Client.Core.Framework.Undefined.booleanValue = undefined;
Microsoft.Crm.Client.Core.Framework.Undefined.int32Value = undefined;
Microsoft.Crm.Client.Core.Framework.Undefined.doubleValue = undefined;
Microsoft.Crm.Client.Core.Framework.Undefined.stringValue = undefined;
Microsoft.Crm.Client.Core.Framework.Undefined.objectValue = undefined;
_Math.maxSignedInt32 = 2147483647;
_Math.minSignedInt32 = -2147483648;
Microsoft.Crm.Client.Core.Framework._String.empty = '';
Microsoft.Crm.Client.Core.Framework._String.$1i = new RegExp('[\n\r]+');
HtmlEncoder.$1O = new RegExp('&', 'g');
HtmlEncoder.$1h = new RegExp('<', 'g');
HtmlEncoder.$1f = new RegExp('>', 'g');
HtmlEncoder.$1P = new RegExp('\'', 'g');
HtmlEncoder.$1j = new RegExp('\"', 'g');
HtmlEncoder.$1T = new RegExp('&amp;', 'g');
HtmlEncoder.$1W = new RegExp('&lt;', 'g');
HtmlEncoder.$1V = new RegExp('&gt;', 'g');
HtmlEncoder.$1U = new RegExp('&apos;', 'g');
HtmlEncoder.$1X = new RegExp('&quot;', 'g');
Microsoft.Crm.Client.Core.Framework.Debug.$$cctor();
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.defaultErrorTitleId = 'Error_Title_Generic';
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.defaultErrorMessageId = 'Error_Message_Generic_Mobile_Client';
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.errorTitleIdPrefix = 'Error_Title_0x';
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.errorMessageIdPrefix = 'Error_Message_0x';
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$Q = {};
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$1g = true;
Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.$$cctor();
Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.$L = -1;
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat.durationFormat = 'duration';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat.timeZoneFormat = 'timezone';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat.languageFormat = 'language';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat.dateAndTimeFormat = 'dateandtime';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat.dateOnlyFormat = 'dateonly';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeFormat.tickerSymbolFormat = 'tickersymbol';
