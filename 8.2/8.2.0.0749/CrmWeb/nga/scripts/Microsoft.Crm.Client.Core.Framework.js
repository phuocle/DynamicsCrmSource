function $1Y() {}

function $1W() {}

function $3x() {}

function $3i() {}

function $0() {}

function OfflineDiagnostics() {}

function $4m() {}

function Position() {}

Type.registerNamespace("Microsoft.Crm.Client.Core.Framework");
Microsoft.Crm.Client.Core.Framework.$Hb = function() {};
Microsoft.Crm.Client.Core.Framework.$Hb.registerInterface("Microsoft.Crm.Client.Core.Framework.$Hb");
Microsoft.Crm.Client.Core.Framework.$HZ = function() {};
Microsoft.Crm.Client.Core.Framework.$HZ.registerInterface("Microsoft.Crm.Client.Core.Framework.$HZ");
Microsoft.Crm.Client.Core.Framework.$CZ = function() {};
Microsoft.Crm.Client.Core.Framework.$CZ.prototype = { created: 0, submitted: 1, executing: 2, completed: 3 };
Microsoft.Crm.Client.Core.Framework.$CZ.registerEnum("Microsoft.Crm.Client.Core.Framework.$CZ", !1);
Microsoft.Crm.Client.Core.Framework.$Af = function() {};
Microsoft.Crm.Client.Core.Framework.$Af.$$ = function(n) {
    var t = "$Af$" + n.getName().replace(/\./g, "_"), i;
    return Microsoft.Crm.Client.Core.Framework[t] ||
    (i = Microsoft.Crm.Client.Core.Framework[t] = function() {}, i
        .registerInterface("Microsoft.Crm.Client.Core.Framework." + t)), Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$Af.registerInterface("Microsoft.Crm.Client.Core.Framework.$Af");
Microsoft.Crm.Client.Core.Framework.$E3 = function() {};
Microsoft.Crm.Client.Core.Framework.$E3.registerInterface("Microsoft.Crm.Client.Core.Framework.$E3");
Microsoft.Crm.Client.Core.Framework.$E4 = function() {};
Microsoft.Crm.Client.Core.Framework.$E4.registerInterface("Microsoft.Crm.Client.Core.Framework.$E4");
Microsoft.Crm.Client.Core.Framework.$Hc = function() {};
Microsoft.Crm.Client.Core.Framework.$Hc.$$ = function(n) {
    var t = "$Hc$" + n.getName().replace(/\./g, "_"), i;
    return Microsoft.Crm.Client.Core.Framework[t] ||
    (i = Microsoft.Crm.Client.Core.Framework[t] = function() {}, i
        .registerInterface("Microsoft.Crm.Client.Core.Framework." + t)), Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$Hc.registerInterface("Microsoft.Crm.Client.Core.Framework.$Hc");
Microsoft.Crm.Client.Core.Framework.$FB = function() {};
Microsoft.Crm.Client.Core.Framework.$FB.prototype = {
    text: 1,
    tel: 2,
    url: 3,
    email: 4,
    search: 5,
    password: 6,
    number: 7,
    interactionCentricLookup: 8
};
Microsoft.Crm.Client.Core.Framework.$FB.registerEnum("Microsoft.Crm.Client.Core.Framework.$FB", !1);
Microsoft.Crm.Client.Core.Framework.$HY = function() {};
Microsoft.Crm.Client.Core.Framework.$HY.registerInterface("Microsoft.Crm.Client.Core.Framework.$HY");
Microsoft.Crm.Client.Core.Framework.$E2 = function() {};
Microsoft.Crm.Client.Core.Framework.$E2.registerInterface("Microsoft.Crm.Client.Core.Framework.$E2");
Microsoft.Crm.Client.Core.Framework.$Di = function() {};
Microsoft.Crm.Client.Core.Framework.$Di.registerInterface("Microsoft.Crm.Client.Core.Framework.$Di");
Microsoft.Crm.Client.Core.Framework.$HW = function() {};
Microsoft.Crm.Client.Core.Framework.$HW.registerInterface("Microsoft.Crm.Client.Core.Framework.$HW");
Microsoft.Crm.Client.Core.Framework.$HV = function() {};
Microsoft.Crm.Client.Core.Framework.$HV.registerInterface("Microsoft.Crm.Client.Core.Framework.$HV");
Microsoft.Crm.Client.Core.Framework.$7E = function() {};
Microsoft.Crm.Client.Core.Framework.$7E.prototype = { updated: 1, deleted: 2 };
Microsoft.Crm.Client.Core.Framework.$7E.registerEnum("Microsoft.Crm.Client.Core.Framework.$7E", !1);
Microsoft.Crm.Client.Core.Framework.$HX = function() {};
Microsoft.Crm.Client.Core.Framework.$HX.registerInterface("Microsoft.Crm.Client.Core.Framework.$HX");
Microsoft.Crm.Client.Core.Framework.$D3 = function() {};
Microsoft.Crm.Client.Core.Framework.$D3.prototype = { unknown: 0, portrait: 1, landscape: 2 };
Microsoft.Crm.Client.Core.Framework.$D3.registerEnum("Microsoft.Crm.Client.Core.Framework.$D3", !1);
Microsoft.Crm.Client.Core.Framework.$AQ = function() {};
Microsoft.Crm.Client.Core.Framework.$AQ.registerInterface("Microsoft.Crm.Client.Core.Framework.$AQ");
Microsoft.Crm.Client.Core.Framework.$Ad = function() {};
Microsoft.Crm.Client.Core.Framework.$Ad.registerInterface("Microsoft.Crm.Client.Core.Framework.$Ad");
Microsoft.Crm.Client.Core.Framework.TraceComponent = function() {};
Microsoft.Crm.Client.Core.Framework.TraceComponent
    .prototype = {
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
        unknown: 1e3,
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
    };
Microsoft.Crm.Client.Core.Framework.TraceComponent
    .registerEnum("Microsoft.Crm.Client.Core.Framework.TraceComponent", !1);
Microsoft.Crm.Client.Core.Framework.$NP = function(n, t, i, r) {
    this.instance = n;
    this.property = t;
    this.oldValue = i;
    this.newValue = r
};
Microsoft.Crm.Client.Core.Framework.$Ab = function() {};
Microsoft.Crm.Client.Core.Framework.$Ab.registerInterface("Microsoft.Crm.Client.Core.Framework.$Ab");
Microsoft.Crm.Client.Core.Framework.$Dv = function() {};
Microsoft.Crm.Client.Core.Framework.$Dv.registerInterface("Microsoft.Crm.Client.Core.Framework.$Dv");
Microsoft.Crm.Client.Core.Framework.$He = function() {};
Microsoft.Crm.Client.Core.Framework.$He.registerInterface("Microsoft.Crm.Client.Core.Framework.$He");
Microsoft.Crm.Client.Core.Framework.$5h = function() {};
Microsoft.Crm.Client.Core.Framework.$5h.prototype = { off: 0, error: 1, warning: 2, perf: 3, info: 4, verbose: 5 };
Microsoft.Crm.Client.Core.Framework.$5h.registerEnum("Microsoft.Crm.Client.Core.Framework.$5h", !1);
Microsoft.Crm.Client.Core.Framework.$Hd = function() {};
Microsoft.Crm.Client.Core.Framework.$Hd.prototype = { normal: 0, error: 1 };
Microsoft.Crm.Client.Core.Framework.$Hd.registerEnum("Microsoft.Crm.Client.Core.Framework.$Hd", !1);
Microsoft.Crm.Client.Core.Framework.$65 = function() {};
Microsoft.Crm.Client.Core.Framework.$65.prototype = { none: 0, slate: 1, phone: 2, desktop: 3, mailApp: 4 };
Microsoft.Crm.Client.Core.Framework.$65.registerEnum("Microsoft.Crm.Client.Core.Framework.$65", !1);
Microsoft.Crm.Client.Core.Framework.$EM = function() {};
Microsoft.Crm.Client.Core.Framework.$EM.prototype = {
    unknown: 0,
    readDesktop: 1,
    readTablet: 2,
    readPhone: 3,
    composeDesktop: 4,
    composeTablet: 5,
    composePhone: 6
};
Microsoft.Crm.Client.Core.Framework.$EM.registerEnum("Microsoft.Crm.Client.Core.Framework.$EM", !1);
Microsoft.Crm.Client.Core.Framework.$3n = function() {};
Microsoft.Crm.Client.Core.Framework.$3n.prototype = { none: 0, userLocal: 1, dateOnly: 2, timeZoneIndependent: 3 };
Microsoft.Crm.Client.Core.Framework.$3n.registerEnum("Microsoft.Crm.Client.Core.Framework.$3n", !1);
Microsoft.Crm.Client.Core.Framework.$Ao = function() {};
Microsoft.Crm.Client.Core.Framework.$Ao.registerInterface("Microsoft.Crm.Client.Core.Framework.$Ao");
Microsoft.Crm.Client.Core.Framework.$E5 = function() {};
Microsoft.Crm.Client.Core.Framework.$E5.registerInterface("Microsoft.Crm.Client.Core.Framework.$E5");
Microsoft.Crm.Client.Core.Framework.$AU = function() {};
Microsoft.Crm.Client.Core.Framework.$AU.registerInterface("Microsoft.Crm.Client.Core.Framework.$AU");
Microsoft.Crm.Client.Core.Framework.$HG = function() {};
Microsoft.Crm.Client.Core.Framework.$HG.registerInterface("Microsoft.Crm.Client.Core.Framework.$HG");
Microsoft.Crm.Client.Core.Framework.$HH = function() {};
Microsoft.Crm.Client.Core.Framework.$HH.registerInterface("Microsoft.Crm.Client.Core.Framework.$HH");
Microsoft.Crm.Client.Core.Framework.NavigationType = function() {};
Microsoft.Crm.Client.Core.Framework.NavigationType
    .prototype = { none: -1, back: 0, open: 1, popup: 2, inlinePopup: 3, dialogPopup: 4, replaceTop: 5 };
Microsoft.Crm.Client.Core.Framework.NavigationType
    .registerEnum("Microsoft.Crm.Client.Core.Framework.NavigationType", !1);
Microsoft.Crm.Client.Core.Framework.$3g = function() {};
Microsoft.Crm.Client.Core.Framework.$3g.registerInterface("Microsoft.Crm.Client.Core.Framework.$3g");
Microsoft.Crm.Client.Core.Framework.$HI = function() {};
Microsoft.Crm.Client.Core.Framework.$HI.registerInterface("Microsoft.Crm.Client.Core.Framework.$HI");
Microsoft.Crm.Client.Core.Framework.$HJ = function() {};
Microsoft.Crm.Client.Core.Framework.$HJ.registerInterface("Microsoft.Crm.Client.Core.Framework.$HJ");
Microsoft.Crm.Client.Core.Framework.$Ax = function() {};
Microsoft.Crm.Client.Core.Framework.$Ax.registerInterface("Microsoft.Crm.Client.Core.Framework.$Ax");
Microsoft.Crm.Client.Core.Framework.$Ei = function() {};
Microsoft.Crm.Client.Core.Framework.$Ei.prototype = { none: -1, basic: 0, local: 1, deep: 2, global: 3 };
Microsoft.Crm.Client.Core.Framework.$Ei.registerEnum("Microsoft.Crm.Client.Core.Framework.$Ei", !1);
Microsoft.Crm.Client.Core.Framework.$4y = function() {};
Microsoft.Crm.Client.Core.Framework.$4y.prototype = {
    unknown: -1,
    create: 0,
    read: 1,
    update: 2,
    Delete: 3,
    append: 4,
    appendTo: 5,
    share: 6,
    assign: 7
};
Microsoft.Crm.Client.Core.Framework.$4y.registerEnum("Microsoft.Crm.Client.Core.Framework.$4y", !1);
Microsoft.Crm.Client.Core.Framework.$As = function() {};
Microsoft.Crm.Client.Core.Framework.$As.registerInterface("Microsoft.Crm.Client.Core.Framework.$As");
Microsoft.Crm.Client.Core.Framework.$HF = function() {};
Microsoft.Crm.Client.Core.Framework.$HF.registerInterface("Microsoft.Crm.Client.Core.Framework.$HF");
Microsoft.Crm.Client.Core.Framework.$5R = function() {};
Microsoft.Crm.Client.Core.Framework.$5R.registerInterface("Microsoft.Crm.Client.Core.Framework.$5R");
Microsoft.Crm.Client.Core.Framework.$HD = function() {};
Microsoft.Crm.Client.Core.Framework.$HD.registerInterface("Microsoft.Crm.Client.Core.Framework.$HD");
Microsoft.Crm.Client.Core.Framework.$HC = function() {};
Microsoft.Crm.Client.Core.Framework.$HC.registerInterface("Microsoft.Crm.Client.Core.Framework.$HC");
Microsoft.Crm.Client.Core.Framework.$3U = function() {};
Microsoft.Crm.Client.Core.Framework.$3U.prototype = {
    unknown: -1,
    none: 0,
    systemRequired: 1,
    applicationRequired: 2,
    recommended: 3
};
Microsoft.Crm.Client.Core.Framework.$3U.registerEnum("Microsoft.Crm.Client.Core.Framework.$3U", !1);
Microsoft.Crm.Client.Core.Framework.$4J = function() {};
Microsoft.Crm.Client.Core.Framework.$4J.registerInterface("Microsoft.Crm.Client.Core.Framework.$4J");
Microsoft.Crm.Client.Core.Framework.$6y = function() {};
Microsoft.Crm.Client.Core.Framework.$6y.registerInterface("Microsoft.Crm.Client.Core.Framework.$6y");
Microsoft.Crm.Client.Core.Framework.$1 = function() {};
Microsoft.Crm.Client.Core.Framework.$1.prototype = {
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
};
Microsoft.Crm.Client.Core.Framework.$1.registerEnum("Microsoft.Crm.Client.Core.Framework.$1", !1);
Microsoft.Crm.Client.Core.Framework.$HE = function() {};
Microsoft.Crm.Client.Core.Framework.$HE.prototype = {
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
};
Microsoft.Crm.Client.Core.Framework.$HE.registerEnum("Microsoft.Crm.Client.Core.Framework.$HE", !1);
Microsoft.Crm.Client.Core.Framework.$NC = function(n) {
    this.Description = n;
    this.ObjectCounts = {}
};
Microsoft.Crm.Client.Core.Framework.$4V = function() {};
Microsoft.Crm.Client.Core.Framework.$4V.prototype = { undefined: 0, majorEvent: 1, localStore: 2, react: 3 };
Microsoft.Crm.Client.Core.Framework.$4V.registerEnum("Microsoft.Crm.Client.Core.Framework.$4V", !1);
Microsoft.Crm.Client.Core.Framework.$HP = function() {};
Microsoft.Crm.Client.Core.Framework.$HP.registerInterface("Microsoft.Crm.Client.Core.Framework.$HP");
Microsoft.Crm.Client.Core.Framework.$AR = function() {};
Microsoft.Crm.Client.Core.Framework.$AR.registerInterface("Microsoft.Crm.Client.Core.Framework.$AR");
Microsoft.Crm.Client.Core.Framework.$3h = function() {};
Microsoft.Crm.Client.Core.Framework.$3h.registerInterface("Microsoft.Crm.Client.Core.Framework.$3h");
Microsoft.Crm.Client.Core.Framework.ISerializable = function() {};
Microsoft.Crm.Client.Core.Framework.ISerializable
    .registerInterface("Microsoft.Crm.Client.Core.Framework.ISerializable");
Microsoft.Crm.Client.Core.Framework.$HQ = function() {};
Microsoft.Crm.Client.Core.Framework.$HQ.registerInterface("Microsoft.Crm.Client.Core.Framework.$HQ");
Microsoft.Crm.Client.Core.Framework.$HS = function() {};
Microsoft.Crm.Client.Core.Framework.$HS.registerInterface("Microsoft.Crm.Client.Core.Framework.$HS");
Microsoft.Crm.Client.Core.Framework.$6A = function() {};
Microsoft.Crm.Client.Core.Framework.$6A.prototype = {
    $1ZV: function(n, t) { return n[t.$I] },
    $1Jt: function(n, t, i) { (!Number.isInstanceOfType(i) || isFinite(i)) && (n[t.$I] = i) }
};
Microsoft.Crm.Client.Core.Framework.$3y = function() {
    this.$aY = Microsoft.Crm.Client.Core.Framework.$3y.$Ql++;
    Microsoft.Crm.Client.Core.Framework.$3y.initializeBase(this);
    this.$yX = Object.getType(this).getName();
    this.$I = this.$yX + " " + this.$aY
};
Microsoft.Crm.Client.Core.Framework.$3y.$3OP = function(n) {
    throw Error.invalidOperation(n + " cannot try to call the completion callback twice.");
};
Microsoft.Crm.Client.Core.Framework.$3y.prototype = {
    $I: null,
    $yX: null,
    $19y: null,
    $C7: null,
    add_$89: function(n) { this.$2F("ActionCompleted", n) },
    remove_$89: function(n) { this.$4I("ActionCompleted", n) },
    add_$RE: function(n) { this.$2F("ActionSuccess", n) },
    add_$O3: function(n) { this.$2F("ActionFailure", n) },
    get_$CS: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$3y.$20X) },
    set_$CS: function(n) { return this.$m(Microsoft.Crm.Client.Core.Framework.$3y.$20X, n), n },
    get_$2Lu: function() { return!1 },
    get_$36N: function() { return"" },
    $36c: function() {
        this.set_$CS(1);
        this.$2PY()
    },
    $2Kd: function(n) {
        var i = null, r = 0;
        try {
            this.$19y = n;
            this.set_$CS(2);
            this.$2Ka(2);
            r = this.$2t()
        } catch (t) {
            Microsoft.Crm.Client.Core.Framework.Trace.logError(1, "Action execution failed. Error: {0}", t);
            i = t;
            throw t;
        } finally {
            r || this.get_$CS() === 3 || this.$6j(i)
        }
    },
    $6j: function(n) {
        try {
            try {
                this.$C7 = n;
                this.$3L8()
            } finally {
                this.$3Kw()
            }
        } finally {
            this.$2Ka(n ? 4 : 3);
            this.$36i()
        }
    },
    $2PY: function() {},
    $1FX: function() {},
    $2Ka: function(n) {
        Microsoft.Crm.Client.Core.Framework.Trace.logPerf(1,
            "Excuting action,name={0},id={1},state={2},context={3}",
            this.$yX,
            this.$aY,
            n,
            this.get_$36N())
    },
    $36i: function() {
        try {
            this.$19y && this.$19y()
        } finally {
            var n = this;
            this.$19y = function() { Microsoft.Crm.Client.Core.Framework.$3y.$3OP(n.$I) }
        }
    },
    $3L8: function() { this.$C7 ? this.$3L2() : this.$Bn("ActionSuccess", this) },
    $3L2: function() {
        try {
            this.$1FX()
        } finally {
            this.$Bn("ActionFailure", this)
        }
    },
    $3Kw: function() {
        try {
            this.set_$CS(3)
        } finally {
            this.$Bn("ActionCompleted", this)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.$6o = function() {};
Microsoft.Crm.Client.Core.Framework.$6o.$1p4 = function(n) {
    var t = new Microsoft.Crm.Client.Core.Framework.$6o;
    return t.$30M(n)
};
Microsoft.Crm.Client.Core.Framework.$6o.prototype = {
    $30M: function(n) {
        switch (n.toLowerCase()) {
        case"boolean":
        case"picklist":
        case"optionset":
        case"twooptions":
            return this.$31C();
        case"string":
        case"singleline":
            return this.$32n();
        case"memo":
        case"multiple":
            return this.$30f();
        case"decimal":
        case"double":
        case"money":
        case"currency":
        case"fp":
        case"float":
            return this.$310();
        case"integer":
        case"bigint":
        case"whole":
            return this.$33K();
        case"lookup":
        case"owner":
        case"partylist":
        case"customer":
            return this.$30a();
        case"datetime":
        case"dateandtime":
            return this.$2yp();
        default:
            return this.$sm()
        }
    },
    $sm: function() { return["displayName", "name", "requiredLevel", "isSecured", "type", "sourcetype"] },
    $2GL: function() {
        var n;
        return(n = this.$sm()).concat.call(n,
            "minValue",
            "maxValue",
            "imeMode",
            "lastUpdatedField",
            "lastUpdatedValue",
            "rollupStateField",
            "rollupStateValue",
            "recalculate",
            "rollupValid",
            "calculatedFieldValid")
    },
    $2yp: function() {
        var n;
        return(n = this.$sm()).concat.call(n,
            "behavior",
            "format",
            "imeMode",
            "lastUpdatedField",
            "lastUpdatedValue",
            "rollupStateField",
            "rollupStateValue",
            "recalculate",
            "rollupValid",
            "calculatedFieldValid")
    },
    $30a: function() {
        var n;
        return(n = this.$sm()).concat.call(n, "targets")
    },
    $33K: function() {
        var n;
        return(n = this.$2GL()).concat.call(n, "format")
    },
    $310: function() {
        var n;
        return(n = this.$2GL()).concat.call(n, "precision")
    },
    $32n: function() {
        var n;
        return(n = this.$sm()).concat.call(n, "maxLength", "format", "imeMode")
    },
    $30f: function() {
        var n;
        return(n = this.$sm()).concat.call(n, "maxLength", "imeMode")
    },
    $31C: function() {
        var n;
        return(n = this.$sm()).concat.call(n, "options", "defaultValue")
    }
};
Microsoft.Crm.Client.Core.Framework.CustomControlErrorStatus = function(n) {
    this.message = n.$E;
    this.errorSource = n.$NA
};
Microsoft.Crm.Client.Core.Framework.CustomControlErrorStatus.prototype = { message: null, errorSource: 0 };
Microsoft.Crm.Client.Core.Framework.$2P = function() {};
Microsoft.Crm.Client.Core.Framework.$2P.$3M7 = function(n, t) {
    if (!Microsoft.Crm.Client.Core.Framework.$3.$A(n))
        switch (n) {
        case"boolean":
            return"TwoOptions";
        case"customer":
            return"Lookup.Customer";
        case"datetime":
            switch (t) {
            case"date":
                return"DateAndTime.DateOnly";
            case"datetime":
                return"DateAndTime.DateAndTime";
            default:
                return"DateAndTime.DateOnly"
            }
        case"decimal":
            return"Decimal";
        case"float":
            return"FP";
        case"integer":
            switch (t) {
            case"duration":
                return"Whole.Duration";
            case"language":
                return"Whole.Language";
            case"timezone":
                return"Whole.TimeZone";
            default:
                return"Whole.None"
            }
        case"lookup":
            switch (t) {
            case"regarding":
                return"Lookup.Regarding";
            default:
                return"Lookup.Simple"
            }
        case"memo":
            return"Multiple";
        case"money":
            return"Currency";
        case"owner":
            return"Lookup.Owner";
        case"partylist":
            return"Lookup.PartyList";
        case"picklist":
            return"OptionSet";
        case"text":
        case"string":
            switch (t) {
            case"email":
                return"SingleLine.Email";
            case"phone":
                return"SingleLine.Phone";
            case"text":
                return"SingleLine.Text";
            case"textarea":
                return"SingleLine.TextArea";
            case"tickersymbol":
                return"SingleLine.Ticker";
            case"url":
                return"SingleLine.URL";
            default:
                return"SingleLine.Text"
            }
        }
    return""
};
Microsoft.Crm.Client.Core.Framework.$2P.$1VM = function(n) {
    var t = n.get_$dZ().toLowerCase();
    return t === "optionset" || t === "twooptions" || t === "picklist" || t === "boolean"
};
Microsoft.Crm.Client.Core.Framework.$2P.$2HU = function(n, t) {
    if (!$0.$1(n) &&
        !Microsoft.Crm.Client.Core.Framework.$5R.isInstanceOfType(n) &&
        Microsoft.Crm.Client.Core.Framework.$2P.$1VM(t)) {
        var i;
        return i = Boolean.isInstanceOfType(n) ? n ? "1" : "0" : n.toString(), t.get_$3UJ().options.get_$3G1()[i]
    }
    return n
};
Microsoft.Crm.Client.Core.Framework.$2P.$2IH = function(n) {
    var i, t;
    return Microsoft.Crm.Client.Core.Framework.$E3
        .isInstanceOfType(n)
        ? (t = n, i = $0.$1(t) ? t : t.get_$2M())
        : i = n, i
};
Microsoft.Crm.Client.Core.Framework.$2P.$ms = function(n) { return n.indexOf(".") !== -1 };
Microsoft.Crm.Client.Core.Framework.$2P.$2Cy = function(n) {
    var r = {}, u = n, i, t;
    for (i in u)
        t = { key: i, value: u[i] }, r[t.key] = Microsoft.Crm.Client.Core.Framework.$E4.isInstanceOfType(t.value)
            ? t.value.$2ke()
            : t.value;
    return r
};
Microsoft.Crm.Client.Core.Framework.$2P.$2o1 = function(n, t) {
    var u = {}, f = n, r, i;
    for (r in f) i = { key: r, value: f[r] }, n[i.key] !== t[i.key] && (u[i.key] = i.value);
    return u
};
Microsoft.Crm.Client.Core.Framework.$2P.$2IW = function(n) {
    return n.endsWith("_base") ? n.replace("_base", "_date") : n + "_date"
};
Microsoft.Crm.Client.Core.Framework.$7C = function() {
    this.$$d_$3IR = Function.createDelegate(this, this.$3IR);
    this.$up = [];
    this.$aY = Microsoft.Crm.Client.Core.Framework.$7C.$Ql++;
    this.$I = "Action Manager " + this.$aY
};
Microsoft.Crm.Client.Core.Framework.$7C.prototype = {
    $11M: !1,
    $1V6: !1,
    $I: null,
    $1gx: null,
    $1FN: 0,
    get_$3H4: function() { return this.$up.length + this.$1FN },
    $2c: function(n) {
        var t = Microsoft.Crm.Client.Core.Framework.PAL.Core.$ET.isInstanceOfType(n) ? n : null;
        this.$ZV(t, "ActionManager.Submit.Start");
        this.$ZV(t, "ActionManager.InternalSubmit.Start");
        n.$36c();
        this.$ZV(t, "ActionManager.InternalSubmit.End");
        this.$1gx &&
        (this.$ZV(t, "ActionManager.actionSubmitted.Start"), this.$1gx(n), this
            .$ZV(t, "ActionManager.actionSubmitted.End"));
        Microsoft.Crm.Client.Core.Framework.$Ad.isInstanceOfType(n) || Microsoft.Crm.Client.Core.Framework.$10.$8F
            ? (this.$ZV(t, "ActionManager.ExecuteAction.Start"), Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(1, "Executing instant action {0}", n.$I), this.$Ke(n, !1), this
                .$ZV(t, "ActionManager.ExecuteAction.End"))
            : (this.$ZV(t, "ActionManager.ScheduleNextAction.Start"), Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(1, "{0} enqueued {1}", this.$I, n.$I), Array.enqueue(this.$up, n), this.$2U2(), this
                .$ZV(t, "ActionManager.ScheduleNextAction.End"));
        this.$ZV(t, "ActionManager.Submit.End")
    },
    $ZV: function(n, t) { n && n.get_$7w().$9O(t, (new Date).getTime()) },
    $Ke: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(1, "{0} is executing {1}", this.$I, n.$I);
        t || this.$1FN++;
        this.$2nf(n, t)
    },
    $2nf: function(n, t) {
        var i = this;
        n.$2Kd(function() {
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(1, "{0} finished executing {1}", i.$I, n.$I);
            i.$1V6 = !1;
            t ? i.$2U2() : (i.$1FN--, i.$269())
        })
    },
    $2U2: function() {
        if (!this.$11M && !this.$1V6) {
            if (!this.$up.length) {
                this.$269();
                return
            }
            var n = this.$up[0];
            n.get_$2Lu()
                ? (Microsoft.Crm.Client.Core.Framework.Trace
                        .logVerbose(1, "{0} scheduled {1} with timeout 0", this.$I, n.$I),
                    this.$11M || Microsoft.Crm.Client.Core.Framework.$2F.$1ZN(1, "Process" + n.$I, this.$$d_$3IR, 0))
                : (Microsoft.Crm.Client.Core.Framework.Trace
                        .logVerbose(1, "{0} scheduled {1} into action queue", this.$I, n.$I),
                    this.$11M ||
                        Microsoft.Crm.Client.Core.Framework.$2F.get_$5().$3Zp(1, "Process" + n.$I, this.$$d_$3IR));
            this.$11M = !0
        }
    },
    $3IR: function() {
        this.$11M = !1;
        var n = Array.dequeue(this.$up);
        this.$1V6 = n.get_$2Lu();
        this.$Ke(n, !0)
    },
    $269: function() {
        this.$up.length ||
            this.$1FN ||
            (Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(1, "{0} has no more actions to process.", this.$I), $(window)
                .triggerHandler("OnActionQueueEmpty"))
    }
};
Microsoft.Crm.Client.Core.Framework.$2U = function() {};
Microsoft.Crm.Client.Core.Framework.$2U.$3Ho = function(n) { Microsoft.Crm.Client.Core.Framework.$2U.$27J(n) };
Microsoft.Crm.Client.Core.Framework.$2U.$qr = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$2U.$27J(n), Microsoft.Crm.Client.Core.Framework.$3K.Instance = Microsoft
        .Crm.Client.Core.Framework.$2U.$Ps, Microsoft.Crm.Client.Core.Framework.$2U.$Ps
};
Microsoft.Crm.Client.Core.Framework.$2U.$27J = function(n) {
    var r;
    if ($0.$1(Microsoft.Crm.Client.Core.Framework.$2U.$Ps) &&
    (Microsoft.Crm.Client.Core.Framework.$2U.$Ps = new Microsoft.Crm.Client.Core.Framework
        .$3K), !$0.$1(n) && n.length > 0)
        for (var i = n, u = i.length, t = 0; t < u; ++t) r = i[t], r.$2h1(Microsoft.Crm.Client.Core.Framework.$2U.$Ps)
};
Microsoft.Crm.Client.Core.Framework.$9b = function(n) {
    if (n <= 0) throw Error.argumentOutOfRange("maxEntries");
    this.$1F0 = n;
    this.$17()
};
Microsoft.Crm.Client.Core.Framework.$9b.$$ = function(n) {
    var t = "$9b$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.$9b"] = { TEntry: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$9b.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$9b.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$9b.prototype = {
    $1F0: 0,
    $NW: null,
    $10J: 0,
    $1OE: 0,
    get_$l: function() { return this.$NW.length },
    get_$H: function(n) {
        if (n < 0 || n >= this.$NW.length) throw Error.argumentOutOfRange("index");
        return this.$NW[(this.$10J + n) % this.$1F0]
    },
    $2e: function(n) {
        if (!n) throw Error.argumentNull("entry");
        var t = this.$NW.length;
        t >= this.$1F0
            ? (this.$NW[this.$10J] = n, this.$10J = (this.$10J + 1) % this.$1F0, this.$1OE > 0 && this.$1OE--)
            : this.$NW[t] = n
    },
    $76: function() { this.$17() },
    $21O: function() {
        for (var t = new Array(this.get_$l()), n = 0; n < this.get_$l(); n++) t[n] = this.get_$H(n);
        return t
    },
    $17: function() {
        this.$NW = [];
        this.$10J = 0;
        this.$1OE = 0
    }
};
Microsoft.Crm.Client.Core.Framework.List$1 = function(n) {
    this.$S4 = this.addRange;
    this.$35G = this.indexOf;
    this.$mg = this.insert;
    this.$14W = this.removeAt;
    this.$2e = this.add;
    this.$76 = this.clear;
    this.$1A5 = this.contains;
    this.$DP = this.remove;
    this.$1C = n || new Array(0)
};
Microsoft.Crm.Client.Core.Framework.List$1.$$ = function(n) {
    var t = "List$1$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.List$1"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.List$1.apply(this, i)
        };
        r
            .registerClass("Microsoft.Crm.Client.Core.Framework." + t,
                null,
                Microsoft.Crm.Client.Core.Framework.$Af.$$(n));
        u = Microsoft.Crm.Client.Core.Framework.List$1.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.List$1.prototype = {
    $1C: null,
    get_Items: function() { return this.$1C },
    get_Count: function() { return this.$1C.length },
    get_$H: function(n) { return this.$1C[n] },
    set_$H: function(n, t) { return this.$1C[n] = t, t },
    add: function(n) { Array.add(this.$1C, n) },
    addRange: function(n) { Array.addRange(this.$1C, n) },
    clear: function() { Array.clear(this.$1C) },
    contains: function(n) { return Array.contains(this.$1C, n) },
    indexOf: function(n, t) { return t = t || 0, Array.indexOf(this.$1C, n, t) },
    insert: function(n, t) { Array.insert(this.$1C, n, t) },
    remove: function(n) { Array.remove(this.$1C, n) },
    removeAt: function(n) { Array.removeAt(this.$1C, n) },
    sort: function(n) { $0.$1(n) ? this.$1C.sort() : this.$1C.sort(n) },
    toArray: function() {
        for (var t = new Array(this.get_Count()), n = 0; n < this.get_Count(); n++) t[n] = this.get_$H(n);
        return t
    }
};
Microsoft.Crm.Client.Core.Framework.$1c = function() {};
Microsoft.Crm.Client.Core.Framework.$1c.set_$2Kv = function(n) {
    return n !== Microsoft.Crm.Client.Core.Framework.$1c.$16B &&
    (n
        ? Microsoft.Crm.Client.Core.Framework.Trace.$1Mn(Microsoft.Crm.Client.Core.Framework.$1c.$1Oc)
        : Microsoft.Crm.Client.Core.Framework.Trace.$1xf(Microsoft.Crm.Client.Core.Framework.$1c.$1Oc), Microsoft.Crm
        .Client.Core.Framework.$1c.$16B = n), n
};
Microsoft.Crm.Client.Core.Framework.$1c.get_$371 = function() { return typeof console != "undefined" };
Microsoft.Crm.Client.Core.Framework.$1c.$2gQ = function() { Microsoft.Crm.Client.Core.Framework.$1c.$1QH = {} };
Microsoft.Crm.Client.Core.Framework.$1c.$2cO = function(n) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "componentName");
    Microsoft.Crm.Client.Core.Framework.$1c.$1QH[n] = !0
};
Microsoft.Crm.Client.Core.Framework.$1c.$38e = function(n) {
    return!$0.$1(Microsoft.Crm.Client.Core.Framework.$1c.$1QH[n])
};
Microsoft.Crm.Client.Core.Framework.$1c.$3U6 = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$1c.$12d > 0 &&
        n.length > Microsoft.Crm.Client.Core.Framework.$1c.$12d &&
        (n = n.substr(0, Microsoft.Crm.Client.Core.Framework.$1c.$12d) + "..."), n
};
Microsoft.Crm.Client.Core.Framework.$1c.$1Oc = function(n, t, i) {
    if (Microsoft.Crm.Client.Core.Framework.$1c.$3S1(n, t)) {
        var r = i.get_$zP().get_$WH();
        r = Microsoft.Crm.Client.Core.Framework.$1c.$3U6(r);
        switch (t) {
        case 2:
            console.warn(r);
            break;
        case 1:
            console.error(r);
            break;
        case 3:
        case 4:
        case 5:
            console.info(r)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.$1c.$3S1 = function(n, t) {
    return Microsoft.Crm.Client.Core.Framework.$1c.get_$371()
        ? Microsoft.Crm.Client.Core.Framework.Trace.$LY < t
        ? !1
        : Microsoft.Crm.Client.Core.Framework.$1c.$1Bm &&
        !Microsoft.Crm.Client.Core.Framework.$1c.$38e(Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(n))
        ? !1
        : !0
        : !1
};
Microsoft.Crm.Client.Core.Framework.$NN = function() {};
Microsoft.Crm.Client.Core.Framework.$NN.prototype = {
    addHandler: function() {},
    getHandler: function() { return null },
    removeHandler: function() {}
};
Microsoft.Crm.Client.Core.Framework.$3D = function() {};
Microsoft.Crm.Client.Core.Framework.$3D.$2s3 = function() {
    var t, o, n;
    if (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1H3) {
        for (var r = Microsoft.Crm.Client.Core.Framework.$3D.get_$2QK(), s = r.length, i = 0; i < s; ++i) {
            var u = r[i],
                f = u.timing.navigationStart - window.performance.timing.navigationStart,
                e = u.getEntriesByType("resource");
            for (t = 0, o = e.length; t < o; t++)
                if (n = e[t], n.initiatorType in Microsoft.Crm.Client.Core.Framework.$3D.$1xy) {
                    var h = n.startTime + f,
                        c = n.responseEnd + f,
                        l = Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch
                            .createRetroactiveStopwatch(Microsoft.Crm.Client.Core.Framework.$3D.$1xy[n.initiatorType],
                                h,
                                c);
                    l.addParameter(n.name)
                }
        }
        Microsoft.Crm.Client.Core.Framework.$3D.$26R()
    }
};
Microsoft.Crm.Client.Core.Framework.$3D.$26R = function() {
    for (var t, i = Microsoft.Crm.Client.Core.Framework.$3D.get_$2QK(), r = i.length, n = 0; n < r; ++n) {
        if (t = i[n], !Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1H3) return;
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1xx
            ? t.webkitClearResourceTimings()
            : t.clearResourceTimings()
    }
};
Microsoft.Crm.Client.Core.Framework.$3D.get_$2QK = function() {
    var n = [window.performance],
        o = $get("PersistentScriptsIFrame"),
        r = Microsoft.Crm.Client.Core.Framework.$3D.$2HO(o),
        u,
        e,
        i;
    $0.$1(r) || n.push(r);
    u = $(".CustomScriptsIFrame").get();
    for (var f = u, s = f.length, t = 0; t < s; ++t)
        e = f[t], i = Microsoft.Crm.Client.Core.Framework.$3D.$2HO(e), $0.$1(i) || n.push(i);
    return n
};
Microsoft.Crm.Client.Core.Framework.$3D.$2HO = function(n) {
    if (!$0.$1(n))
        try {
            return n.contentWindow.performance
        } catch (t) {
            return null
        }
    return null
};
Microsoft.Crm.Client.Core.Framework.$NL = function() {};
Microsoft.Crm.Client.Core.Framework.$NL.prototype = {
    $QZ: 0,
    $Q8: null,
    $Q7: null,
    $qt: null,
    $vv: null,
    $C8: null,
    $1Vc: !1
};
Microsoft.Crm.Client.Core.Framework.$3B = function() {
    this.$$d_$3Zm = Function.createDelegate(this, this.$3Zm);
    this.$zy = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Kz
        ? new Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn
        : new Microsoft.Crm.Client.Core.Framework.ClientWatson.$37;
    this.$1Y4 = new(Microsoft.Crm.Client.Core.Framework.$9x.$$(Function))("onScriptErrorEvent")
};
Microsoft.Crm.Client.Core.Framework.$3B.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$3B.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$3B.$D = new Microsoft.Crm.Client.Core.Framework.$3B), Microsoft.Crm.Client
        .Core.Framework.$3B.$D
};
Microsoft.Crm.Client.Core.Framework.$3B.prototype = {
    $1Y4: null,
    $zy: null,
    add_$2PP: function(n) { this.$1Y4.$3aP(n) },
    $3Zm: function(n, t, i, r) {
        var u = null, f = this;
        return this.$1Y4.$3aQ(function() { return u || (u = f.$25Q(n, t, i, r)), u }), !0
    },
    $2ye: function() {
        var n, t, i;
        return i = this.$zy.$1px(3, t = { val: n }), n = t.val, i
    },
    $25Q: function(n, t, i, r) {
        var u;
        return this.$zy.$1Vc(n)
            ? (u = new Microsoft.Crm.Client.Core.Framework.$NL, u.$C8 = "Out of Memory!", u.$QZ = i, u.$Q8 = "", u
                .$Q7 = "", u.$1Vc = !0)
            : u = this.$2gg(n, t, i, r), u
    },
    $2gg: function(n, t, i) {
        var o,
            s,
            h,
            c = (h = this.$zy.$1px(3, s = { val: o }), o = s.val, h),
            r = new Microsoft.Crm.Client.Core.Framework.$NL,
            f,
            e,
            u;
        return r.$1Vc = !1, r.$QZ = i, r.$Q8 = Microsoft.Crm.Client.Core.Framework.ClientWatson.$37
            .$2HM(c), f = Microsoft.Crm.Client.Core.Framework.Net.Uri.create(t), $0.$1(f) || (r.$Q7 = f.$bx), e = window
            .navigator, u = e.language, $0.$1(u) && (u = e.browserLanguage), r.$qt = u, r.$vv = c, r.$C8 = n, r
    }
};
Microsoft.Crm.Client.Core.Framework.$NM = function() {};
Microsoft.Crm.Client.Core.Framework.$NM.prototype = { $Gp: null };
Microsoft.Crm.Client.Core.Framework.$46 = function() {};
Microsoft.Crm.Client.Core.Framework.$46.$$cctor = function() { Microsoft.Crm.Client.Core.Framework.$46.$1Zj = {} };
Microsoft.Crm.Client.Core.Framework.$46
    .$2Ro = function(n, t, i) { Microsoft.Crm.Client.Core.Framework.$46.$1Zj[t] = i };
Microsoft.Crm.Client.Core.Framework.$46.$2TL = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Framework.$46.$1Zj[t];
    return i()
};
Microsoft.Crm.Client.Core.Framework.$Bv = function() {
    this.$1H8 = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Framework.$Bw.$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$Bv"].T)))
};
Microsoft.Crm.Client.Core.Framework.$Bv.$$ = function(n) {
    var t = "$Bv$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$Bv"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$Bv.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$Bv.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$Bv.prototype = {
    $1H8: null,
    get_$3Ze: function() { return this.$1H8 },
    get_$l: function() { return this.$1H8.get_Count() },
    $2e: function(n) { this.$1H8.add(n) }
};
Microsoft.Crm.Client.Core.Framework.$8P = function() {
    this.$Ae = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Framework.$Bv.$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$8P"].T)))
};
Microsoft.Crm.Client.Core.Framework.$8P.$$ = function(n) {
    var t = "$8P$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$8P"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$8P.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$8P.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$8P.prototype = {
    $Ae: null,
    $1gh: 0,
    get_$3ZZ: function() { return this.$1gh },
    set_$3ZZ: function(n) { return this.$1gh = n, n },
    get_$3Zc: function() { return this.$Ae },
    $2e: function(n) { this.$Ae.add(n) }
};
Microsoft.Crm.Client.Core.Framework.$Bw = function() {
    this.$28 = this.$$gta["Microsoft.Crm.Client.Core.Framework.$Bw"].T === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.$Bw"].T)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.$Bw"].T === Boolean ? !1 : null
};
Microsoft.Crm.Client.Core.Framework.$Bw.$$ = function(n) {
    var t = "$Bw$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$Bw"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$Bw.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$Bw.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$Bw.prototype = {
    get_$dS: function() { return this.$28 },
    set_$dS: function(n) { return this.$28 = n, n }
};
Microsoft.Crm.Client.Core.Framework.$27 = function() {};
Microsoft.Crm.Client.Core.Framework.$27.get_$1TM = function() {
    return Microsoft.Crm.Client.Core.Framework.$27.$1q9
        ? Microsoft.Crm.Client.Core.Framework.$27.$1q9
        : Microsoft.Crm.Client.Core.Framework.$3o.get_$5()
};
Microsoft.Crm.Client.Core.Framework.$27.get_$33U = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$27.$1TN) &&
    (Microsoft.Crm.Client.Core.Framework.$27
        .$1TN = new Globalize(Microsoft.Crm.Client.Core.Framework.$27.get_$228())), Microsoft.Crm.Client.Core.Framework
        .$27.$1TN
};
Microsoft.Crm.Client.Core.Framework.$27.get_$228 = function() {
    if (!$0.$1(Microsoft.Crm.Client.Core.Framework.$27.$b9)) return Microsoft.Crm.Client.Core.Framework.$27.$b9;
    if (!$0.$1(Microsoft.Crm.Client.Core.Framework.$27.get_$1TM().get_$228())) {
        var n = Microsoft.Crm.Client.Core.Framework.$4p.$24J[Microsoft.Crm.Client.Core.Framework.$27.get_$1TM()
            .get_$228().toLowerCase()];
        if (!$0.$1(n))
            return Microsoft.Crm.Client.Core.Framework.$27.$b9 = n, Microsoft.Crm.Client.Core.Framework.$27.$b9
    }
    return Microsoft.Crm.Client.Core.Framework.$27.$b9 = Microsoft.Crm.Client.Core.Framework.$3o.get_$5().$b9, Microsoft
        .Crm.Client.Core.Framework.$27.$b9
};
Microsoft.Crm.Client.Core.Framework.$1r = function() {};
Microsoft.Crm.Client.Core.Framework.$1r.get_$UF = function() {
    return Microsoft.Crm.Client.Core.Framework.$1r.$1dV ||
    (Microsoft.Crm.Client.Core.Framework.$1r.$1dU = Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix()
        .$F4("GlobalObjectTracking.isEnabled") ===
        "1", Microsoft.Crm.Client.Core.Framework.$1r.$1dV = !0), Microsoft.Crm.Client.Core.Framework.$1r.$1dU
};
Microsoft.Crm.Client.Core.Framework.$1r.set_$UF = function(n) {
    return Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix()
        .$vn("GlobalObjectTracking.isEnabled", n ? "1" : "0"), Microsoft.Crm.Client.Core.Framework.$1r
        .$1dU = n, Microsoft.Crm.Client.Core.Framework.$1r.$1dV = !0, n
};
Microsoft.Crm.Client.Core.Framework.$3c = function(n) {
    Microsoft.Crm.Client.Core.Framework.$3c.initializeBase(this);
    this.$Si = n;
    Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() &&
        Array.add(Microsoft.Crm.Client.Core.Framework.$3c.get_$1hc(), this)
};
Microsoft.Crm.Client.Core.Framework.$3c.get_$1hc = function() {
    return Microsoft.Crm.Client.Core.Framework.$3c
        .$1Mu ||
        (Microsoft.Crm.Client.Core.Framework.$3c.$1Mu = []), Microsoft.Crm.Client.Core.Framework.$3c.$1Mu
};
Microsoft.Crm.Client.Core.Framework.$3c.prototype = {
    $23: null,
    $Si: null,
    get_$2na: function() { return this.$Si ? this.$Si : "" },
    get_$2nZ: function() { return this.$23 || (this.$23 = []), this.$23 },
    $2e: function(n) {
        this.$23 || (this.$23 = []);
        Array.add(this.$23, n)
    },
    $sN: function(n) { this.$23 && Array.forEach(this.$23, n) },
    $GN: function() {
        this.$23 = null;
        Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() &&
            Array.remove(Microsoft.Crm.Client.Core.Framework.$3c.get_$1hc(), this)
    }
};
Microsoft.Crm.Client.Core.Framework.$6t = function() { this.dispose = this.$69 };
Microsoft.Crm.Client.Core.Framework.$6t.prototype = {
    $3P: !1,
    $69: function() { this.$3P || (this.$GN(), this.$3P = !0) }
};
Microsoft.Crm.Client.Core.Framework.$Se = function(n) {
    Microsoft.Crm.Client.Core.Framework.$Se.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.$9x = function(n) {
    Microsoft.Crm.Client.Core.Framework.$9x.$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$9x"].T)
        .initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.$9x.$$ = function(n) {
    var t = "$9x$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$9x"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$9x.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t, Microsoft.Crm.Client.Core.Framework.$3c);
        u = Microsoft.Crm.Client.Core.Framework.$9x.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$9x.prototype = {
    $3aP: function(n) { this.$2e(n) },
    $3aQ: function(n) {
        var t = this;
        this.$sN(function(t) { t(n) })
    }
};
Microsoft.Crm.Client.Core.Framework.$5S = function() {};
Microsoft.Crm.Client.Core.Framework.$5S.$1u = function(n, t) {
    var r = null, u;
    try {
        r = Sys.Serialization.JavaScriptSerializer.deserialize(n)
    } catch (i) {
        if (Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(51, "JSON parse failed: {0}", i.message), u = Microsoft
            .Crm.Client.Core.Framework.$5S.$Px(n), u !== n) {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(51,
                    "JSON response needed to be encoded due to unescaped Unicode content. Will try to parse again.");
            n = u;
            try {
                r = Sys.Serialization.JavaScriptSerializer.deserialize(n);
                i = null
            } catch (f) {
                Microsoft.Crm.Client.Core.Framework.Trace.logInfo(51, "JSON parse failed again. Error: {0}.", f.message)
            }
        }
        i && t(i)
    }
    return r
};
Microsoft.Crm.Client.Core.Framework.$5S.$Px = function(n) {
    var t = new RegExp(Microsoft.Crm.Client.Core.Framework.$5S.$2Ak, "g");
    return t.test(n) ? n.replace(t, Microsoft.Crm.Client.Core.Framework.$5S.$2n1) : n
};
Microsoft.Crm.Client.Core.Framework.$5S.$2n1 = function(n) {
    var i = n.charCodeAt(0), t = i.toString(16);
    return"\\u0000".substring(0, 6 - t.length) + t
};
Microsoft.Crm.Client.Core.Framework.$BK = function(n) { this.$g9 = n };
Microsoft.Crm.Client.Core.Framework.$BK.$$ = function(n) {
    var t = "$BK$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$BK"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$BK.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t, null, Microsoft.Crm.Client.Core.Framework.$E2);
        u = Microsoft.Crm.Client.Core.Framework.$BK.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$BK.prototype = {
    $g9: null,
    get_$l: function() { return this.$g9.get_Count() },
    get_$H: function(n) { return this.$g9.get_$H(n) },
    set_$H: function(n, t) { return this.$g9.set_$H(n, t), t },
    $S4: function(n) { this.$g9.$S4(n) },
    $2KW: function(n, t) { this.$g9.$2KW(n, t) },
    $2NU: function(n, t, i) { this.$g9.$2NU(n, t, i) },
    $1Gr: function(n, t) { this.$g9.$1Gr(n, t) }
};
Microsoft.Crm.Client.Core.Framework.$4p = function() {};
Microsoft.Crm.Client.Core.Framework.$3o = function() {};
Microsoft.Crm.Client.Core.Framework.$3o.get_$5 = function() {
    return Microsoft.Crm.Client.Core.Framework.$3o.$D ||
        (Microsoft.Crm.Client.Core.Framework.$3o.$D = new Microsoft.Crm.Client.Core.Framework.$3o), Microsoft.Crm.Client
        .Core.Framework.$3o.$D
};
Microsoft.Crm.Client.Core.Framework.$3o.prototype = {
    $b9: "default",
    $22c: 0,
    get_$228: function() { return this.$b9 },
    get_$22d: function() { return this.$22c }
};
Microsoft.Crm.Client.Core.Framework.$NK = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "start");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "end");
    this.$21U = t.$1q4() - n.$1q4()
};
Microsoft.Crm.Client.Core.Framework.$NK.prototype = { $21U: 0, get_$3Tn: function() { return this.$21U / 864e5 } };
Microsoft.Crm.Client.Core.Framework.$BT = function(n, t, i, r) {
    this.$Nz = -1;
    this.$QS = -1;
    this.$Sj = -1;
    this.$I = n;
    this.$1rL = r;
    this.$13u = t;
    this.$1zF = i;
    $0.$1(t) || (this.$Bf = t.$Bf + 1);
    var u = new Date;
    this.$ao = u.getTime()
};
Microsoft.Crm.Client.Core.Framework.$BT.$32q = function(n) {
    for (var t = "", i = 0; i < n; i++) t = t + "  ";
    return t
};
Microsoft.Crm.Client.Core.Framework.$BT.prototype = {
    $I: null,
    $1rL: !1,
    $1zF: 0,
    $ao: 0,
    $G9: null,
    $13u: null,
    $Bf: 0,
    $1Vk: !1,
    $2at: function(n) {
        $0.$1(this.$G9) && (this.$G9 = []);
        this.$G9[this.$G9.length] = n
    },
    $7Q: function() {
        var n = new Date;
        this.$Nz = n.getTime();
        !$0.$1(this.$13u) && this.$13u.$Nz > 0 && this.$13u.$7Q()
    },
    $25k: function() {
        var n;
        if (!(this.$Sj >= 0)) {
            if (this.$Nz <= 0 && this.$7Q(), this.$QS = this.$Nz - this.$ao, $0.$1(this.$G9) || !this.$G9.length) {
                this.$Sj = this.$QS;
                return
            }
            var i = 0, t = null, r = !1;
            for (n = 0; n < this.$G9.length; n++)
                this.$G9[n].$25k(), r = !1, t &&
                (this.$G9[n].$ao >= t.$Nz
                    ? (i += this.$G9[n].$QS, t = null)
                    : this.$G9[n]
                    .$Nz >
                    t.$Nz &&
                    (i += this.$G9[n]
                        .$Nz -
                        t.$Nz, t = null), r = !0), this.$G9[n]
                    .$1rL &&
                    !t &&
                    (t = this.$G9[n]), r || (i += this.$G9[n].$QS);
            this.$Sj = this.$QS - i;
            this.$Sj < 0 && (this.$Sj = 0)
        }
    },
    $2Hn: function(n, t, i, r, u, f) {
        var s, e, l, h, o, c;
        if (this.$QS <= 0) return s = [], s[0] = n, s[1] = t, s;
        if (e = null, r[this.$I]
            ? e = r[this.$I]
            : (e = new Microsoft.Crm.Client.Core.Framework.$BT(this.$I, null, 1, !1), r[this.$I] = e, e.$QS = 0, e
                .$Sj = 0), e.$Bf = e.$Bf + 1, e.$QS = e.$QS + this.$QS, e
            .$Sj = e.$Sj + this.$Sj, l = i[this.$I] - 1, i[this
            .$I] = l, l ||
        (n = n +
            String.format("\r\n{0}{4}\r\n{0}total:{1} | exclusive:{2} | count:{3}",
                Microsoft.Crm.Client.Core.Framework.$BT.$32q(this.$Bf),
                e.$QS,
                e.$Sj,
                e.$Bf,
                this.$I)), t = t +
            String.format("\r\n{0},{1},{2},{3},{4},{5},{6},{7}",
                u,
                this.$I,
                this.$1Vk ? "scenario" : "dataPoint",
                this.$1zF,
                this.$ao - f,
                this.$Nz - f,
                this.$Sj,
                this.$QS), $0.$1(this.$G9) || !this.$G9.length) return h = [], h[0] = n, h[1] = t, h;
        for (o = null, c = 0; c < this.$G9.length; c++) o = this.$G9[c].$2Hn(n, t, i, r, u, f), n = o[0], t = o[1];
        return o
    }
};
Microsoft.Crm.Client.Core.Framework.$1F = function() {};
Microsoft.Crm.Client.Core.Framework.$1F.set_$38V = function(n) {
    return n && !Microsoft.Crm.Client.Core.Framework.$1F.$1EV
        ? (Microsoft.Crm.Client.Core.Framework.Trace.$1Mn(Microsoft.Crm.Client.Core.Framework.$1F.$1hV), Microsoft.Crm
            .Client.Core.Framework.$1F.$1EV = !0)
        : !n &&
        Microsoft.Crm.Client.Core.Framework.$1F.$1EV &&
        (Microsoft.Crm.Client.Core.Framework.Trace.$1xf(Microsoft.Crm.Client.Core.Framework.$1F.$1hV), Microsoft.Crm
            .Client.Core.Framework.$1F.$1EV = !1, Microsoft.Crm.Client.Core.Framework.$1F.$NW.$76()), n
};
Microsoft.Crm.Client.Core.Framework.$1F.set_$1l9 = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$1F.$dg = n, Microsoft.Crm.Client.Core.Framework.$1F.set_$38V(!!n), n
};
Microsoft.Crm.Client.Core.Framework.$1F.$3OL = function() {
    for (var t, i = Microsoft.Crm.Client.Core.Framework.$1F.$NW.get_$l(), n = 0;
        n < i;
        n++
    ) t = Microsoft.Crm.Client.Core.Framework.$1F.$NW.get_$H(n), Microsoft.Crm.Client.Core.Framework.$10.$1kz.$2e(t);
    Microsoft.Crm.Client.Core.Framework.$1F.$NW.$76()
};
Microsoft.Crm.Client.Core.Framework.$1F.$1hV = function(n, t, i) {
    if (Microsoft.Crm.Client.Core.Framework.$1F.$dg)
        if (t <= Microsoft.Crm.Client.Core.Framework.$1F.$dg
        ) Microsoft.Crm.Client.Core.Framework.$1F.$2UZ(i), t === 1 && Microsoft.Crm.Client.Core.Framework.$1F.$3OL();
        else {
            var r = Microsoft.Crm.Client.Core.Framework.$1F.$2yT(n);
            if (t <= r) Microsoft.Crm.Client.Core.Framework.$1F.$2UZ(i);
            else
                switch (t) {
                case 2:
                case 3:
                case 4:
                    Microsoft.Crm.Client.Core.Framework.$1F.$2dr(i)
                }
        }
};
Microsoft.Crm.Client.Core.Framework.$1F.$2yT = function(n) {
    var t = Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(n);
    return Microsoft.Crm.Client.Core.Framework.$1F.$2Xz[t] && Microsoft.Crm.Client.Core.Framework.$1F.$dg <= 2
        ? 2
        : Microsoft.Crm.Client.Core.Framework.$1F.$2Xx[t] && Microsoft.Crm.Client.Core.Framework.$1F.$dg <= 3
        ? 3
        : Microsoft.Crm.Client.Core.Framework.$1F.$2Xw[t] && Microsoft.Crm.Client.Core.Framework.$1F.$dg <= 4
        ? 4
        : Microsoft.Crm.Client.Core.Framework.$1F.$2Xy[t] && Microsoft.Crm.Client.Core.Framework.$1F.$dg <= 5
        ? 5
        : Microsoft.Crm.Client.Core.Framework.$1F.$dg
};
Microsoft.Crm.Client.Core.Framework.$1F.$2UZ = function(n) {
    Microsoft.Crm.Client.Core.Framework.$10.$1kz.$2e(n.get_$zP())
};
Microsoft.Crm.Client.Core.Framework.$1F.$2dr = function(n) {
    Microsoft.Crm.Client.Core.Framework.$1F.$NW.$2e(n.get_$zP())
};
Microsoft.Crm.Client.Core.Framework.$4g = function() { this.__type = undefined };
Microsoft.Crm.Client.Core.Framework.$4g.$88 = function(n, t) {
    var i, u, f, r;
    if (Date.isInstanceOfType(n)) return new Date(n.getTime());
    if (Array.isInstanceOfType(n)) i = [];
    else {
        if (Function.isInstanceOfType(n)) return n;
        if (Object.isInstanceOfType(n)) i = {};
        else return n
    }
    u = n;
    for (f in u)
        r = { key: f, value: u[f] }, (!t || n.hasOwnProperty(r.key)) &&
            (i[r.key] = Microsoft.Crm.Client.Core.Framework.$4g.$88(r.value, t));
    return i
};
Microsoft.Crm.Client.Core.Framework.$4g.$2gf = function(n, t) {
    var u = n, i, r;
    if (t.__type && (i = Microsoft.Crm.Client.Core.Framework.$4g.$29E[t.__type], i))
        if (i === n || i.inheritsFrom(n)) u = i;
        else throw Error.invalidOperation("Cannot transform " + t.__type + " into a " + n.getName());
    return r = new u, r.$1bx(t), r
};
Microsoft.Crm.Client.Core.Framework.$4g.$3Ra = function(n, t) {
    var r = Object.getType(n), i = r._dataContractName;
    i && (t.__type = i)
};
Microsoft.Crm.Client.Core.Framework.$DM = function() { this.$1Qb = new Sys.EventHandlerList };
Microsoft.Crm.Client.Core.Framework.$DM.prototype = {
    $A2: function(n, t) {
        var i = n.getName();
        this.$1Qb.addHandler(i, t)
    },
    $Ah: function(n, t) {
        var i = n.getName();
        this.$1Qb.removeHandler(i, t)
    },
    raiseEvent: function(n, t) {
        var r = n.getName(), i = this.$1Qb.getHandler(r);
        i && i(t)
    }
};
Microsoft.Crm.Client.Core.Framework.$9j = function(n) {
    this.$D = this.$$gta["Microsoft.Crm.Client.Core.Framework.$9j"].TService === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.$9j"].TService)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.$9j"].TService === Boolean ? !1 : null;
    this.$1Zm = n;
    this.$1Zm.$2XH(this.$$gta["Microsoft.Crm.Client.Core.Framework.$9j"].TService, this)
};
Microsoft.Crm.Client.Core.Framework.$9j.$$ = function(n) {
    var t = "$9j$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.$9j"] = { TService: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$9j.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$9j.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$9j.prototype = {
    $1Zm: null,
    $1sL: !1,
    $Sm: null,
    $1Qm: !1,
    $2OR: null,
    get_$5: function() { return this.$D },
    get_$3Zi: function() { return this.$2OR },
    $NS: function(n) {
        var t = n,
            i = this.$$gta["Microsoft.Crm.Client.Core.Framework.$9j"].TService,
            r = t.getName(),
            u = i.getName(),
            f = r === u,
            e = i.implementsInterface(t),
            o = i.inheritsFrom(t);
        if (!f && !e && !o)
            throw Error.argument("T",
                "Type '" + i.getName() + "' does not implement interface or derive from type '" + t.getName() + "'");
        return this.$1Zm.$2XH(n, this), this
    },
    $3Zk: function() { return this.$1sL = !0, this },
    $3Zl: function(n) { return this.$Sm = n, this },
    $B: function() { return this.$1sL ? ($0.$1(this.$D) && (this.$D = this.$1AK()), this.$D) : this.$1AK() },
    $1AK: function() {
        var n;
        if ($0.$1(this.$Sm)) n = new this.$$gta["Microsoft.Crm.Client.Core.Framework.$9j"].TService;
        else {
            if (this.$1Qm)
                throw Error.invalidOperation("Type '" +
                    this.$$gta["Microsoft.Crm.Client.Core.Framework.$9j"].TService.getName() +
                    "' contains a circular reference in the IoC container.  You will need to use OnCreate and property injection if this dependency is correct.");
            this.$1Qm = !0;
            n = this.$Sm();
            this.$1Qm = !1
        }
        return n
    }
};
Microsoft.Crm.Client.Core.Framework.$NR = function() { this.$1E = {} };
Microsoft.Crm.Client.Core.Framework.$NR.prototype = {
    $2XH: function(n, t) { this.$1E[n.getName()] = t },
    $3Ae: function(n) { return this.$1E[n.getName()] }
};
Microsoft.Crm.Client.Core.Framework.$3K = function() {
    this.$1xR = new Microsoft.Crm.Client.Core.Framework.$NR;
    this.$1Do = [];
    this.$17()
};
Microsoft.Crm.Client.Core.Framework.$3K.prototype = {
    $1TZ: !1,
    $Mq: function(n) { return new(Microsoft.Crm.Client.Core.Framework.$9j.$$(n))(this.$1xR) },
    $DQ: function(n) {
        var t = this.$1xR.$3Ae(n);
        if ($0.$1(t))
            throw Error.argument("T",
                "Type '" +
                n.getName() +
                "' is not registered in the IoC container.  Make sure you have registered the type in the application bootstrapper.");
        return this.$2hx(t)
    },
    $2hx: function(n) {
        var i = this.$1TZ, r, u, t;
        i && (this.$1TZ = !1);
        try {
            if (u = $0.$1(n.get_$5()) && !$0.$1(n.get_$3Zi()), r = n
                    .$B(), u && Array.add(this.$1Do, new Microsoft.Crm.Client.Core.Framework.$3K.$3Zo(r, n.get_$3Zi())),
                i
            ) for (t = 0; t < this.$1Do.length; t++) this.$1Do[t].$3Al()
        } finally {
            i && this.$17()
        }
        return r
    },
    $17: function() {
        this.$1TZ = !0;
        Array.clear(this.$1Do)
    }
};
Microsoft.Crm.Client.Core.Framework.$3K.$3Zo = function(n, t) {
    this.$D = n;
    this.$yd = t
};
Microsoft.Crm.Client.Core.Framework.$3K.$3Zo
    .prototype = { $D: null, $yd: null, $3Al: function() { this.$yd(this.$D) } };
Microsoft.Crm.Client.Core.Framework.$9c = function() {
    this.$mi = [];
    this.$2XO = this.$$gta["Microsoft.Crm.Client.Core.Framework.$9c"].T
        .implementsInterface(Microsoft.Crm.Client.Core.Framework.$Ab)
};
Microsoft.Crm.Client.Core.Framework.$9c.$$ = function(n) {
    var t = "$9c$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$9c"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$9c.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$9c.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$9c.prototype = {
    $2XO: !1,
    $mi: null,
    get_$l: function() { return this.$mi.length },
    get_$H: function(n) { return this.$mi[n] },
    set_$H: function(n, t) { return this.$mi[n] = t, t },
    $2e: function(n) { Array.add(this.$mi, n) },
    $76: function() { Array.clear(this.$mi) },
    $14W: function(n) { Array.removeAt(this.$mi, n) }
};
Microsoft.Crm.Client.Core.Framework.$7M = function(n) { this.$FV = n };
Microsoft.Crm.Client.Core.Framework.$7M.prototype = { $FV: null };
Microsoft.Crm.Client.Core.Framework.$5L = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "name");
    this.$FV = {};
    this.set_$2my(n);
    this.set_$WH(n + ": " + t)
};
Microsoft.Crm.Client.Core.Framework.$5L.$1EB = function(n, t) { return!$0.$1(n) && t === n.name };
Microsoft.Crm.Client.Core.Framework.$5L.$1Ra = function(n, t, i) {
    if (Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "ex"), Microsoft.Crm.Client.Core.Framework.$5L.$1EB(t, i)) {
        var r = new n;
        return r.$FV = t, r
    }
    throw Error.argument("ex", String.format("Exception must be of type '{0}' to successfully convert.", i));
};
Microsoft.Crm.Client.Core.Framework.$5L.prototype = {
    $FV: null,
    set_$2my: function(n) { return this.$FV.name = n, n },
    get_$WH: function() { return this.$FV.message },
    set_$WH: function(n) { return this.$FV.message = n, n },
    $21Q: function() { return Error.create(this.get_$WH(), this.$FV) }
};
Microsoft.Crm.Client.Core.Framework.ErrorConverter = function() {};
Microsoft.Crm.Client.Core.Framework.ErrorConverter.create = function(n) {
    var t;
    return Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(n, "errorInformation"), t = {}, t[Microsoft.Crm.Client.Core
        .Framework.ErrorConverter.$1Qe] = n[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1ls], t[Microsoft.Crm
        .Client.Core.Framework.ErrorConverter.$1BN] = n[Microsoft.Crm.Client.Core.Framework.ErrorConverter
        .$1lv], t[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1m3] = n[Microsoft.Crm.Client.Core.Framework
        .ErrorConverter.$1lu], t[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1m2] = n[Microsoft.Crm.Client.Core
        .Framework.ErrorConverter.$1lq], Error.create(t[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1Qe], t)
};
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$2gy = function(n) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(n, "exception");
    var i = n, t = {};
    return t[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1ls] = i[Microsoft.Crm.Client.Core.Framework
        .ErrorConverter.$1Qe], t[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1lv] = i[Microsoft.Crm.Client.Core
        .Framework.ErrorConverter.$1BN], t[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1lu] = i[Microsoft.Crm
        .Client.Core.Framework.ErrorConverter.$1m3], t[Microsoft.Crm.Client.Core.Framework.ErrorConverter
        .$1lq] = i[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1m2], t
};
Microsoft.Crm.Client.Core.Framework.$1h = function(n, t, i, r, u, f, e, o) {
    this.$lK = this.equals;
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(n, "year");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(t, "value");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(i, "day");
    r = $3i.$b(Number, r);
    u = $3i.$b(Number, u);
    f = $3i.$b(Number, f);
    e = $3i.$b(Number, e);
    this.$CH = new Date(Date.UTC(n, t, i, r, u, f, e));
    this.$XK = $0.$1(o) ? -this.$CH.getTimezoneOffset() : o;
    Microsoft.Crm.Client.Core.Framework.$1h.$21I(this);
    this.$3GG(this.$CH)
};
Microsoft.Crm.Client.Core.Framework.$1h.get_$1uO = function() {
    return Microsoft.Crm.Client.Core.Framework.$1h.$2D4(new Date)
};
Microsoft.Crm.Client.Core.Framework.$1h.get_$22H = function() {
    return Microsoft.Crm.Client.Core.Framework.$1h.get_$1uO().$3Tp()
};
Microsoft.Crm.Client.Core.Framework.$1h.get_$22d = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$27.get_$1TM().get_$22d())
        ? Microsoft.Crm.Client.Core.Framework.$3o.get_$5().$22c
        : Microsoft.Crm.Client.Core.Framework.$27.get_$1TM().get_$22d()
};
Microsoft.Crm.Client.Core.Framework.$1h.$2D4 = function(n) {
    return new Microsoft.Crm.Client.Core.Framework.$1h(n.getFullYear(),
        n.getMonth(),
        n.getDate(),
        n.getHours(),
        n.getMinutes(),
        n.getSeconds(),
        n.getMilliseconds())
};
Microsoft.Crm.Client.Core.Framework.$1h.$3Zn = function(n, t) {
    $0.$1(t) && (t = Microsoft.Crm.Client.Core.Framework.$1h.$2zt());
    var i = t - n.get_$2lW();
    return i > 0 && (i = i - 7), n.$Up(i)
};
Microsoft.Crm.Client.Core.Framework.$1h.$2s1 = function(n) { return n.$CH.format("yyyy-MM-ddTHH:mm:ss") };
Microsoft.Crm.Client.Core.Framework.$1h
    .$2s0 = function(n) { return n.$CH.format("yyyy-MM-ddTHH:mm:ss.fff") + n.$337() };
Microsoft.Crm.Client.Core.Framework.$1h.$2zt = function() { return Microsoft.Crm.Client.Core.Framework.$1h.get_$22d() };
Microsoft.Crm.Client.Core.Framework.$1h.$3GZ = function(n) {
    var o = new
            RegExp("^(\\d{4})-(\\d{2})-(\\d{2})(T(\\d{2}):(\\d{2}):(\\d{2})(.(\\d{3})){0,1}){0,1}(Z|(([-\\+])(\\d{2}):(\\d{2}))){0,1}$"),
        t = o.exec(n);
    if ($0.$1(t) || t.length !== 15) throw Error.invalidOperation("Unexpected datetime format.");
    var s = Number.parseInvariant(t[1]),
        h = Number.parseInvariant(t[2]),
        c = Number.parseInvariant(t[3]),
        r = 0,
        u = 0,
        f = 0,
        e = 0,
        i = 0;
    return $0.$9c(t[5]) ||
        $0.$9c(t[6]) ||
        $0.$9c(t[7]) ||
        Microsoft.Crm.Client.Core.Framework.$3.$A(t[5]) ||
        Microsoft.Crm.Client.Core.Framework.$3.$A(t[6]) ||
        Microsoft.Crm.Client.Core.Framework.$3.$A(t[7]) ||
        (r = Number.parseInvariant(t[5]), u = Number.parseInvariant(t[6]), f = Number
            .parseInvariant(t[7]), $0.$9c(t[9]) ||
            Microsoft.Crm.Client.Core.Framework.$3.$A(t[9]) ||
            (e = Number.parseInvariant(t[9]))), $0.$9c(t[10]) ||
        Microsoft.Crm.Client.Core.Framework.$3.$A(t[10]) ||
        t[10] !== "Z" &&
        t[10] !== "z" &&
        (i += 60 * Number.parseInvariant(t[13]), i += Number
            .parseInvariant(t[14]), t[12] === "-" && (i = -i)), new Microsoft.Crm.Client.Core.Framework
        .$1h(s, h - 1, c, r, u, f, e, i)
};
Microsoft.Crm.Client.Core.Framework.$1h.$38k = function(n) {
    return!$0.$1(n) && !isNaN(n.$CH.getTime()) && n.$CH.getTime() >= -864e13 && n.$CH.getTime() <= 864e13
};
Microsoft.Crm.Client.Core.Framework.$1h.$21I = function(n) {
    if (!Microsoft.Crm.Client.Core.Framework.$1h.$38k(n))
        throw Error.argumentOutOfRange("dateTime",
            n,
            "The resulting DateTime is less than MinValue or greater than MaxValue.");
};
Microsoft.Crm.Client.Core.Framework.$1h.$21J = function(n) {
    if (!Number.isInstanceOfType(n))
        throw Error.argumentType("argument", Object.getType(n), Number, "Argument must be an int.");
};
Microsoft.Crm.Client.Core.Framework.$1h.prototype = {
    $CH: null,
    $XK: 0,
    get_$3BA: function() { return this.$CH.getUTCMilliseconds() },
    get_$2UK: function() { return this.$CH.getUTCSeconds() },
    get_$3BD: function() { return this.$CH.getUTCMinutes() },
    get_$355: function() { return this.$CH.getUTCHours() },
    get_$1Pc: function() { return this.$CH.getUTCDate() },
    get_$2NS: function() { return this.$CH.getUTCMonth() },
    get_$2Zq: function() { return this.$CH.getUTCFullYear() },
    get_$2lW: function() { return this.$CH.getUTCDay() },
    get_$2LD: function() { return!this.$XK },
    $2bY: function(n) {
        Microsoft.Crm.Client.Core.Framework.$1h.$21J(n);
        var t = this.$88(), i = t.$CH.getTime() + n;
        return t.$CH.setTime(i), Microsoft.Crm.Client.Core.Framework.$1h.$21I(t), t
    },
    $2bZ: function(n) { return Microsoft.Crm.Client.Core.Framework.$1h.$21J(n), this.$2bY(n * 6e4) },
    $Up: function(n) {
        Microsoft.Crm.Client.Core.Framework.$1h.$21J(n);
        var t = this.$88();
        return t.$CH.setUTCDate(this.get_$1Pc() + n), Microsoft.Crm.Client.Core.Framework.$1h.$21I(t), t
    },
    $88: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.$1h(0, 0, 0);
        return n.$CH.setTime(this.$CH.getTime()), n.$XK = this.$XK, n
    },
    equals: function(n) {
        if (!n || !Microsoft.Crm.Client.Core.Framework.$1h.isInstanceOfType(n)) return!1;
        var t = n;
        return this.$CH.getTime() === t.$CH.getTime()
    },
    getHashCode: function() { return this.$CH.getTime().getHashCode() },
    $337: function() {
        if (this.get_$2LD()) return"Z";
        var n = Math.floor(Math.abs(this.$XK) / 60), t = Math.abs(this.$XK) % 60, i = this.$XK < 0 ? "-" : "+";
        return String.format("{0}{1:D2}:{2:D2}", i, n, t)
    },
    toString: function() { return Microsoft.Crm.Client.Core.Framework.$27.get_$33U().format(this.$CH, "F") },
    $sn: function() {
        return new Microsoft.Crm.Client.Core.Framework.$1h(this.get_$2Zq(), this.get_$2NS(), this.get_$1Pc())
    },
    $3Tp: function() {
        if (this.get_$2LD()) return this;
        var n = this.$2bZ(-this.$XK);
        return n.$XK = 0, n
    },
    $1q4: function() { return this.$CH.getTime() },
    $1pf: function() {
        return new Date(this.get_$2Zq(),
            this.get_$2NS(),
            this.get_$1Pc(),
            this.get_$355(),
            this.get_$3BD(),
            this.get_$2UK(),
            this.get_$3BA())
    },
    $3GG: function(n) {
        n.getFullYear = n.getUTCFullYear;
        n.getMonth = n.getUTCMonth;
        n.getDate = n.getUTCDate;
        n.getHours = n.getUTCHours;
        n.getMinutes = n.getUTCMinutes;
        n.getSeconds = n.getUTCSeconds;
        n.getMilliseconds = n.getUTCMilliseconds;
        n.getDay = n.getUTCDay
    }
};
Microsoft.Crm.Client.Core.Framework.$i = function() { Microsoft.Crm.Client.Core.Framework.$i.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.$i.prototype = {
    get_$1lK: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$29s) },
    get_$1lL: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$29v) },
    get_$dn: function() {
        return(Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$11g ||
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$fH ||
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$n0) &&
            this.$b(Microsoft.Crm.Client.Core.Framework.$i.$29u)
    },
    get_CameraAvailable: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$1ic) },
    get_$3B9: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2NJ) },
    get_$2sS: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2DX) },
    get_DeviceFeatureAvailable: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$29r) },
    get_$2m8: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$29t) },
    get_$2mr: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2Ad) },
    get_$2co: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$24U) },
    get_ExternalWindowScrollAmount: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2B1) },
    get_SupportsExternalWindowScrollAmount: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2XQ) },
    get_KeyboardVisible: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$1si) },
    get_KeyboardHeight: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2MB) },
    get_AppBarVisible: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$24Q) },
    get_$2le: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$29Z) },
    get_$2mW: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2AJ) },
    get_$3GM: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2Q3) },
    get_$27P: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$1jf) },
    get_$2C: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.$i.$2D0) }
};
Microsoft.Crm.Client.Core.Framework.$2F = function(n, t) {
    this.$$d_$2TZ = Function.createDelegate(this, this.$2TZ);
    this.$1Iy = [];
    this.$1x0 = n;
    this.$w8 = t
};
Microsoft.Crm.Client.Core.Framework.$2F.get_$5 = function() {
    return Microsoft.Crm.Client.Core.Framework.$2F.$D ||
        (Microsoft.Crm.Client.Core.Framework.$2F.$D = new Microsoft.Crm.Client.Core.Framework.$2F(50, 0)), Microsoft.Crm
        .Client.Core.Framework.$2F.$D
};
Microsoft.Crm.Client.Core.Framework.$2F.$1ZN = function(n, t, i, r) {
    return window.setTimeout(function() {
            Microsoft.Crm.Client.Core.Framework.$2F.$1mA(new Microsoft.Crm.Client.Core.Framework.$2F.$8P(n, t, i))
        },
        r)
};
Microsoft.Crm.Client.Core.Framework.$2F.$2ey = function(n) { return n && window.clearTimeout(n), 0 };
Microsoft.Crm.Client.Core.Framework.$2F.$3J0 = function(n, t, i, r) {
    return window.setInterval(function() {
            Microsoft.Crm.Client.Core.Framework.$2F.$1mA(new Microsoft.Crm.Client.Core.Framework.$2F.$8P(n, t, i))
        },
        r)
};
Microsoft.Crm.Client.Core.Framework.$2F.$2ex = function(n) { return n && window.clearInterval(n), 0 };
Microsoft.Crm.Client.Core.Framework.$2F.$1mA = function(n) {
    var i = new Date, t;
    Microsoft.Crm.Client.Core.Framework.ClientWatson.$CV.$3Aa(n.$1JG, n.$1IV, n.$1MT);
    t = new Date;
    n.$1IV !== "TaskRunner.RunForQuanta" &&
        t - i > 50 &&
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(n.$1JG,
            "Task {0} took too long ({1}ms) to complete",
            n.$1IV,
            t - i)
};
Microsoft.Crm.Client.Core.Framework.$2F.prototype = {
    $1x0: 0,
    $w8: 0,
    $1Nr: 0,
    $3Zp: function(n, t, i, r) {
        var u = new Microsoft.Crm.Client.Core.Framework.$2F.$8P(n, t, i);
        Array.enqueue(this.$1Iy, u);
        r || this.$2W4()
    },
    $2TZ: function() {
        var t, n, i;
        for (this
                .$1Nr = 0, t = new Date, n = 0;
            this.$1Iy.length > 0 && n < this.$1x0;
        ) i = Array.dequeue(this.$1Iy), Microsoft.Crm.Client.Core.Framework.$2F.$1mA(i), n = new Date - t;
        this.$1Iy.length > 0 && this.$2W4()
    },
    $2W4: function() {
        this.$1Nr ||
        (this.$w8 < 0
            ? this.$2TZ()
            : this.$1Nr = Microsoft.Crm.Client.Core.Framework.$2F
            .$1ZN(119, "TaskRunner.RunForQuanta", this.$$d_$2TZ, this.$w8))
    }
};
Microsoft.Crm.Client.Core.Framework.$2F.$8P = function(n, t, i) {
    this.$1IV = t;
    this.$1MT = i;
    this.$1JG = n
};
Microsoft.Crm.Client.Core.Framework.$Qj = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
    Microsoft.Crm.Client.Core.Framework.$Qj.initializeBase(this, [4, "Trace"]);
    this.$m("l", n);
    this.$m("s", Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(t));
    i && (this.$m("st", i), this.$m("h", r));
    u && this.$m("em", u);
    f && (this.$m("est", f), this.$m("eh", e));
    o && this.$m("ci", o);
    s && this.$m("f", s);
    var p = 2500;
    this.$15S("0", h, p);
    this.$15S("1", c, p);
    this.$15S("2", l, p);
    this.$15S("3", a, p);
    this.$15S("4", v, p);
    this.$15S("5", y, p)
};
Microsoft.Crm.Client.Core.Framework.$Qj.prototype = {
    $7C: null,
    get_$WH: function() {
        var n, t;
        return this.$7C ||
        (n = Microsoft.Crm.Client.Core.Framework.$3.$MD(this.$b("f"),
            this.$b("0"),
            this.$b("1"),
            this.$b("2"),
            this.$b("3"),
            this.$b("4"),
            this.$b("5")), $0.$1(this.$b("em")) ||
        (n += Microsoft.Crm.Client.Core.Framework.$3
            .$MD("{0}Exception message:{1}{0}Exception stack trace:{0}{2}Exception stack trace hash: {3}",
                "\r\n",
                this.$b("em"),
                this.$b("est"),
                this.$b("eh"))), t = this.$b("s"), this.$7C = t ? "[" + t + "] " + n : n), this.$7C
    },
    getMarkTimelineMessage: function(n) { n.val = "[Trace] " + this.get_$WH() },
    $15S: function(n, t, i) {
        var r = null;
        $0.$1(t) || (r = t.toString(), r && this.$m(n, r.length > i ? r.substr(0, i) : r))
    }
};
Microsoft.Crm.Client.Core.Framework.TraceInfo = function(n, t, i, r, u, f, e, o, s, h) {
    this.$rU = n;
    this.$rV = t;
    this.$kg = i;
    this.$zQ = r;
    this.$zJ = u;
    this.$zK = f;
    this.$zL = e;
    this.$zM = o;
    this.$zN = s;
    this.$zO = h
};
Microsoft.Crm.Client.Core.Framework.TraceInfo.prototype = {
    $rV: 0,
    $rU: 0,
    $kg: null,
    $zQ: null,
    $dO: null,
    $zJ: null,
    $zK: null,
    $zL: null,
    $zM: null,
    $zN: null,
    $zO: null,
    get_$zP: function() { return $0.$1(this.$dO) && (this.$dO = this.$3RY()), this.$dO },
    $3RY: function() {
        var h, c, l, i, r, u, a, v;
        if (!this.$dO) {
            var f = new Sys.StringBuilder, n = -1, e = null, t = -1, o = null, s = null;
            if (this.$rV === 1 && this.$rU !== 133) {
                h = 5;
                e = (l = Microsoft.Crm.Client.Core.Framework.$10.get_$25O().$1px(h, c = { val: n }), n = c.val, l);
                i = Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.get_$2gY();
                for (r in i)
                    u = { key: r, value: i[r] }, f.append(String.format("{0} = {1}{2}", u.key, u.value, "\r\n"))
            }
            $0.$1(this.$kg) ||
            (o = (v = Microsoft.Crm.Client.Core.Framework.$10.get_$25O().$2zV(this.$kg, a = { val: t }), t = a
                .val, v), s = this.$kg.message);
            this.$dO = new Microsoft.Crm.Client.Core.Framework
                .$Qj(this.$rV,
                    this.$rU,
                    e,
                    n,
                    s,
                    o,
                    t,
                    f.toString(),
                    this.$zQ,
                    this.$zJ,
                    this.$zK,
                    this.$zL,
                    this.$zM,
                    this.$zN,
                    this.$zO)
        }
        return this.$dO
    }
};
Microsoft.Crm.Client.Core.Framework.$NT = function(n) { this.$1Dn = n };
Microsoft.Crm.Client.Core.Framework.$NT.prototype = {
    $1Dn: null,
    $3Rr: function() { return this.$1Dn.shiftKey },
    $2lD: function() { return this.$1Dn.ctrlKey },
    $2ce: function() { return this.$1Dn.altKey }
};
Microsoft.Crm.Client.Core.Framework.UserAgent = function() {
    var n, t, r, i, u;
    Microsoft.Crm.Client.Core.Framework.UserAgent.initializeBase(this);
    this.$7l = window.navigator.userAgent;
    try {
        this.$13p = document.cookie.indexOf("PALEnabled") !== -1 || this.$7l.indexOf("MSAppHost") !== -1 ? !0 : !1
    } catch (f) {
        this.$13p = !1
    }
    this.$Gl = window.location.pathname.indexOf("mail.htm") !== -1;
    this.$xU = Microsoft.Crm.Client.Core.Framework.UserAgent.$30c();
    this.$1fn = Microsoft.Crm.Client.Core.Framework.UserAgent.$30d();
    this.$UX = window.location.pathname.toLowerCase().indexOf("engagementhub.aspx") !== -1;
    this.$Gl && window.self !== window.parent && (this.$13p = !0);
    this.$7l.indexOf("MSIE") > 0 && (this.$2Al = !0);
    this.$1JF = "ontouchstart" in window.document || window.navigator.msPointerEnabled;
    (Microsoft.Crm.Client.Core.Framework.Utils.$4q.$12w("WebKitAnimationEvent") ||
            Microsoft.Crm.Client.Core.Framework.Utils.$4q.$12w("AnimationEvent") ||
            Microsoft.Crm.Client.Core.Framework.Utils.$4q.$12w("MSAnimationEvent")) &&
        (this.$1hg = !0);
    this.$2Ml = Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().get_$37k();
    this.$2Jo = Microsoft.Crm.Client.Core.Framework.UserAgent.$37W();
    this.$Kz = this.$7l.indexOf("MSIE") !== -1 || this.$7l.indexOf("Trident") !== -1 ? !0 : !1;
    this.$11i = this.$7l.indexOf("Edge/") !== -1 ? !0 : !1;
    this.$ZE = this.$7l.indexOf("Chrome") !== -1 ? !0 : !1;
    this.$ZE && (this.$1Ul = this.$7l.indexOf("20.0") !== -1 || this.$7l.indexOf("27.0") !== -1);
    this.$mn = this.$7l.indexOf("Firefox") !== -1 ? !0 : !1;
    this.$7l.indexOf("Safari") !== -1 &&
        (this.$ZF = this.$7l.indexOf("Chrome") !== -1 || this.$7l.indexOf("Android") !== -1 ? !1 : !0);
    this.$fH = this.$7l.indexOf("iPhone") !== -1;
    this.$mr = this.$7l.indexOf("iPad") !== -1;
    this.$1ro = this.$7l.indexOf("iPod") !== -1;
    this.get_IsIOS() &&
    (this.$1rm = this.$1w6(this.$7l) === 8, this.$1rn = this.$7l.indexOf("8_4_1") !== -1, this
        .$1ED = this.$1w6(this.$7l) === 9, this.$1VH = this.$1w6(this.$7l) === 10);
    this.$fH && window.navigator.platform === "iPad" && (this.$1ED || this.$1VH) && (this.$fH = !1, this.$mr = !0);
    this.$5X = this.$7l.indexOf("Android") !== -1 && window.navigator.appVersion.indexOf("Win") === -1;
    this.$5X && (this.$1rI = this.$2fp(), this.$1rJ = this.$2fq(), this.$1rK = this.$2fr(), this.$1Uf = this.$2fs());
    this.$11g = this.$5X && this.$7l.indexOf("Mobile") !== -1;
    this.$2M1 = this.$7l.indexOf("WebKit") !== -1;
    this.get_$2pl() ? this.$24r = !0 : this.$24t = !0;
    this.$2CE = Microsoft.Crm.Client.Core.Framework.UserAgent.$37O();
    this.$2Jm = this.$37V();
    this.$2Jn = !0;
    this.$2Nv = !0;
    this.$1EF = window.navigator.appVersion.indexOf("Mac") !== -1;
    this.$EO = window.navigator.appVersion.indexOf("Win") !== -1 || window.navigator.appVersion.indexOf("NT") !== -1;
    this.$1Ea = window.navigator.appVersion.indexOf("Windows NT 6.2") !== -1;
    this.$1sb = this.$EO && window.navigator.appVersion.indexOf("NT") !== -1;
    this.$n0 = this.$EO && window.navigator.appVersion.indexOf("Phone") !== -1;
    this.$tX = window.navigator.appVersion.indexOf("Windows NT 6.3") !== -1;
    this.$n1 = window.navigator.appVersion.indexOf("Windows Phone 8.1") !== -1;
    this.$1Eb = window.navigator.appVersion.indexOf("Windows Phone 10.") !== -1;
    this.$1rg = this.$n0 && this.$7l.indexOf("HTC") !== -1;
    Microsoft.Crm.Client.Core.Framework.Utils.$4q.$12w("performance") &&
    (n = window.performance, $0.$1(n
            .timing) ||
        (this.$2Nh = !0), $0.$1(n.clearResourceTimings)
        ? $0.$1(n.webkitClearResourceTimings) || (this.$1H3 = !0, this.$1xx = !0)
        : this.$1H3 = !0);
    this.$UX &&
    (t = this.get_$1U7(), $0.$1(t)
        ? this.$t8 = !1
        : (r = "test", i = t.open(r), $0.$1(i) ? this.$t8 = !1 : (u = this, i.onerror = function() { u.$t8 = !1 })));
    this.$1kr = this.$2yg()
};
Microsoft.Crm.Client.Core.Framework.UserAgent.$30d = function() {
    if (!Microsoft.Crm.Client.Core.Framework.$3.$1S(window.location.search)) {
        var n = window.location.search.match(new RegExp("itemType=([a-zA-Z]+)"));
        if (!$0.$1(n) && n.length > 1) return n[1]
    }
    return null
};
Microsoft.Crm.Client.Core.Framework.UserAgent.$30c = function() {
    if (!Microsoft.Crm.Client.Core.Framework.$3.$1S(window.location.search)) {
        var n = window.location.search.match(new RegExp("mailAppMode=([a-zA-Z]+)"));
        if (!$0.$1(n) && n.length > 1)
            try {
                return $1W.$Cr(Microsoft.Crm.Client.Core.Framework.$EM, n[1])
            } catch (t) {
                return 0
            }
    }
    return 0
};
Microsoft.Crm.Client.Core.Framework.UserAgent
    .getInstance = function() {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.$D ||
        (Microsoft.Crm.Client.Core.Framework.UserAgent.$D = new Microsoft.Crm.Client.Core.Framework
            .UserAgent), Microsoft.Crm.Client.Core.Framework.UserAgent.$D
    };
Microsoft.Crm.Client.Core.Framework.UserAgent.$37O = function() {
    var n = window.document.createElement("input");
    return n.type = "file", n.type === "file" && !n.disabled
};
Microsoft.Crm.Client.Core.Framework.UserAgent.$37W = function() { return!$0.$1(navigator.geolocation) };
Microsoft.Crm.Client.Core.Framework.UserAgent.prototype = {
    $13p: !1,
    $1JF: !1,
    $1hg: !1,
    $2Ml: !1,
    $2Jm: !1,
    $2Jo: !1,
    $24r: !1,
    $24t: !1,
    $2Nv: !1,
    $Kz: !1,
    $11i: !1,
    $mn: !1,
    $ZE: !1,
    $1Ul: !1,
    $ZF: !1,
    $fH: !1,
    $mr: !1,
    $1ro: !1,
    $5X: !1,
    $1rI: !1,
    $1rJ: !1,
    $1rK: !1,
    $1Uf: !1,
    $11g: !1,
    $2M1: !1,
    $1EF: !1,
    $EO: !1,
    $1sb: !1,
    $tX: !1,
    $n1: !1,
    $1Ea: !1,
    $n0: !1,
    $1Eb: !1,
    $2Al: !1,
    $2Jn: !1,
    $2CE: !1,
    $2Nh: !1,
    $1H3: !1,
    $1xx: !1,
    $7l: null,
    $1rm: !1,
    $1rn: !1,
    $1ED: !1,
    $1VH: !1,
    $1rg: !1,
    $1kr: null,
    $24N: !0,
    $Jn: !1,
    $20D: !1,
    $1jN: null,
    $20p: !1,
    $t8: !0,
    $2yg: function() {
        var n = {};
        return n.isWin = this.$EO, n.isWinPhone10 = this.$1Eb, n.isAndroid = this.$5X, n.isAndroidModern = this.$5X, n
            .isIos = this.get_IsIOS(), n.isBrowserIE = this.$Kz, n.isBrowserEdge = this.$11i, n.isBrowserChrome = this
            .$ZE, n.isBrowserFirefox = this.$mn, n.isMobilePhone = this.get_IsMobilePhone(), n
    },
    $2GM: function() {
        return this.$ZE
            ? "Chrome"
            : this.$11i
            ? "Edge"
            : this.$mn ? "FireFox" : this.$Kz ? "Internet Explorer" : this.$ZF ? "Safari" : this.$7l
    },
    $1w6: function(n) {
        var i = new RegExp("OS (\\d+)_(\\d+)_?(\\d+)?"), t = n.match(i);
        return t.length > 1 ? parseInt(t[1]) : -1
    },
    $1pm: function() {
        var t, i, r, f, u, n;
        if (this.$EO) {
            if (t = this.$7l.indexOf("Windows"), t !== -1 &&
            (i = this.$7l.substring(t + 7, this.$7l.length), r = i
                .indexOf(";"), r !== -1)) return"Windows" + i.substring(0, r)
        } else if (this.get_IsIOS()) {
            if (f = new RegExp("OS (\\d+)_(\\d+)_?(\\d+)?"), u = this.$7l.match(f), u.length > 1) return"iOS" + u[0]
        } else if (this
            .$5X &&
            (n = this.$7l.indexOf("Android"), n !== -1)) return"Android" + this.$7l.substring(n + 7, n + 7 + 4);
        return""
    },
    get_IsIOS8: function() { return this.$1rm },
    get_IsIOS841: function() { return this.$1rn },
    get_IsIOS9: function() { return this.$1ED },
    get_IsIOS10: function() { return this.$1VH },
    get_PALEnabled: function() {
        return!Microsoft.Crm.Client.Core.Framework.$10.$24O &&
            (this.$13p || Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21)
    },
    get_TouchSupported: function() { return this.$1JF },
    get_animationsSupported: function() { return this.$1hg && this.$24N },
    get_$1tb: function() {
        return this.get_PALEnabled()
            ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$34h()
            : !1
    },
    get_$2Ze: function() { return Microsoft.Crm.Client.Core.Framework.Utils.$4q.$12w("openDatabase") },
    get_$1U7: function() {
        var n = window.self.indexedDB;
        return $0.$1(n) || $0.$1(n.deleteDatabase) ? null : n
    },
    get_$3T0: function() { return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.$21 },
    get_$2pl: function() { return!$0.$9c(typeof FileReader) && typeof FileReader != "undefined" },
    get_MutationObserverSupported: function() {
        return Microsoft.Crm.Client.Core.Framework.Utils.$4q.$12w("MutationObserver")
    },
    get_TabbingSupported: function() { return this.$UX || this.$Gl },
    get_IsBrowserIE: function() { return this.$Kz },
    get_IsBrowserEdge: function() { return this.$11i },
    get_IsBrowserFirefox: function() { return this.$mn },
    get_IsBrowserChrome: function() { return this.$ZE },
    get_IsBrowserChromeGauntletVersion: function() { return this.$1Ul },
    get_IsIPhone: function() { return this.$fH },
    get_IsIPad: function() { return this.$mr },
    get_IsIOS: function() { return this.$fH || this.$mr || this.$1ro },
    get_IsAndroid: function() { return this.$5X },
    get_IsAndroid5: function() { return this.$1rI },
    get_IsAndroid51: function() { return this.$1rJ },
    get_IsAndroidModern: function() { return this.$1Uf },
    get_IsAndroidPhone: function() { return this.$11g },
    get_IsHTCWindowsPhone: function() { return this.$1rg },
    get_IsWinPhone: function() { return this.$n0 },
    get_IsWinPhone10: function() { return this.$1Eb },
    get_IsMobilePhone: function() { return this.$n0 || this.$fH || this.$11g },
    get_PhoneURLParameter: function() { return this.$Jn },
    set_PhoneURLParameter: function(n) { return this.$Jn = n, n },
    $Gl: !1,
    get_IsMailApp: function() { return this.$Gl },
    set_IsMailApp: function(n) { return this.$Gl = n, n },
    $UX: !1,
    get_IsInteractionCentricDashboard: function() { return this.$UX },
    set_IsInteractionCentricDashboard: function(n) { return this.$UX = n, n },
    $xU: 0,
    $1fn: null,
    get_IsMailAppComposeMode: function() { return this.$xU === 4 || this.$xU === 6 || this.$xU === 5 },
    get_$2L0: function() {
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.get_MailState()
            .get_$1Wi() ===
            1
    },
    get_$37t: function() {
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.get_MailState()
            .get_$1Wi() ===
            3
    },
    get_$2LI: function() { return this.get_$2L0() && this.$1EF },
    get_IsMacSafari: function() { return this.$ZF && this.$1EF },
    get_IsMacIntosh: function() { return this.$1EF },
    get_IsWindows: function() { return this.$EO },
    get_IsWinDesktop: function() { return this.$1sb },
    get_IsWindows81: function() { return this.$tX },
    get_IsWindowsPhone81: function() { return this.$n1 },
    $2fs: function() {
        var n = this.$7l.indexOf("Android"), t, i;
        return n !== -1 ? (t = this.$7l.substring(n + 7 + 1, n + 7 + 4), i = t, i >= 4.4) : !1
    },
    $2fp: function() {
        var n = this.$7l.indexOf("Android"), t, i;
        return n !== -1 ? (t = this.$7l.substring(n + 7 + 1, n + 7 + 4), i = t, i >= 5 ? !0 : !1) : !1
    },
    $2fq: function() {
        var n = this.$7l.indexOf("Android"), t, i;
        return n !== -1 ? (t = this.$7l.substring(n + 7 + 1, n + 7 + 4), i = t, i === "5.1") : !1
    },
    $2fr: function() {
        var n = this.$7l.indexOf("Android"), t, i;
        return n !== -1 ? (t = this.$7l.substring(n + 7 + 1, n + 7 + 4), i = t, i >= 6 ? !0 : !1) : !1
    },
    $37V: function() {
        var n = !1, t;
        if (this.$5X) return!1;
        t = window.document.createElement("audio");
        try {
            t.canPlayType && (n = !Microsoft.Crm.Client.Core.Framework.$3.$A(t.canPlayType("audio/mpeg")))
        } catch (i) {
            n = !1
        }
        return n
    }
};
Microsoft.Crm.Client.Core.Framework.$7A = function() {};
Microsoft.Crm.Client.Core.Framework.$7A.$1sQ = function() { return!1 };
Microsoft.Crm.Client.Core.Framework.$A9 = function(n, t) {
    this.$10 = n;
    this.$1KO = $0.$1(t) ? "" : t
};
Microsoft.Crm.Client.Core.Framework.$A9.prototype = {
    $7C: null,
    $6U: null,
    $1LE: !1,
    $10: 0,
    get_$WH: function() {
        return $0.$1(this.$7C) &&
            Microsoft.Crm.Client.Core.Framework.Common.$2.$34c(this.$10) &&
            (this.$7C = Microsoft.Crm.Client.Core.Framework.Common.$2.$5I(this.$10)), this.$7C
    },
    get_$wA: function() {
        return $0.$1(this.$6U) &&
            Microsoft.Crm.Client.Core.Framework.Common.$2.$34d(this.$10) &&
            (this.$6U = Microsoft.Crm.Client.Core.Framework.Common.$2.$2H8(this.$10)), this.$6U
    },
    $1KO: null,
    $1M5: null,
    $NE: null,
    $Ra: null
};
Microsoft.Crm.Client.Core.Framework.$NS = function() {};
Microsoft.Crm.Client.Core.Framework.$NS.prototype = { $bT: null, $UT: null };
Microsoft.Crm.Client.Core.Framework.$5s = function() {};
Microsoft.Crm.Client.Core.Framework.$5s.$2AD = function(n, t, i) {
    for (var f = -1, o = t.get_Count(), r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(n)), u, e;
        ++
            f <
            o;
    ) u = t.get_$H(f), e = u, Microsoft.Crm.Client.Core.Framework.$5s.$2cz(n, r, e, i) || r.add(u);
    return r
};
Microsoft.Crm.Client.Core.Framework.$5s.$YX = function(n, t, i) {
    var r = new Array(0);
    return Array.forEach(t, function(n) { i(n) && Array.add(r, n) }), r
};
Microsoft.Crm.Client.Core.Framework.$5s.$2cz = function(n, t, i, r) {
    for (var u = -1, f = t.get_Count(); ++u < f;) if (r(i, t.get_$H(u))) return!0;
    return!1
};
Microsoft.Crm.Client.Core.Framework.$7n = function() { this.$1tZ = {} };
Microsoft.Crm.Client.Core.Framework.$7n.$308 = function(n) {
    var i = Microsoft.Crm.Client.Core.Framework.$7n.$309(n), t;
    try {
        return t = Type.parse(i), $0.$9c(t) ? null : t
    } catch (r) {
        return null
    }
};
Microsoft.Crm.Client.Core.Framework.$7n.$309 = function(n) {
    var t = n.lastIndexOf("."), i = n.substr(0, t + 1), r = n.substr(t + 2) + "Schema";
    return i + r
};
Microsoft.Crm.Client.Core.Framework.$7n.prototype = {
    get_$H: function(n) {
        var t, i;
        if (Type.isClass(n)) return n;
        if (t = n.getName(), Type.isInterface(n))
            return i = this.$1tZ[t], $0.$9c(i) &&
                (i = Microsoft.Crm.Client.Core.Framework.$7n.$308(t), this.$1tZ[t] = i), i;
        throw Error.invalidOperation(t + " cannot have schema.");
    }
};
Microsoft.Crm.Client.Core.Framework.$4G = function(n) {
    var t = n.getBaseType(), f, r, i, u, e;
    for (t ? (f = Microsoft.Crm.Client.Core.Framework.$4G.$2D5(t), this.$Hb = Array.clone(f.$Hb)) : this.$Hb = [], this
            .$2Jw(n), r = n.getInterfaces(), i = 0;
        i < r.length;
        i++) u = r[i], e = !!t && t.implementsInterface(u), e || this.$2Jw(u)
};
Microsoft.Crm.Client.Core.Framework.$4G.$2D5 = function(n) {
    var i = n.getName(), t = Microsoft.Crm.Client.Core.Framework.$4G.$1z2[i];
    return $0.$1(t) &&
        (t = new Microsoft.Crm.Client.Core.Framework.$4G(n), Microsoft.Crm.Client.Core.Framework.$4G.$1z2[i] = t), t
};
Microsoft.Crm.Client.Core.Framework.$4G.prototype = {
    $Hb: null,
    get_$l: function() { return this.$Hb.length },
    get_$H: function(n) { return this.$Hb[n] },
    $2Jw: function(n) {
        var u = Microsoft.Crm.Client.Core.Framework.$4G.$2U9.get_$H(n), t, i, r;
        if (u) {
            t = u;
            for (i in t)
                r = { key: i, value: t[i] }, Microsoft.Crm.Client.Core.Framework.$D1.isInstanceOfType(r.value) &&
                    Array.add(this.$Hb, r.value)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.$NO = function() {};
Microsoft.Crm.Client.Core.Framework.$NO.$$cctor = function() { Sys.Browser.hasDebuggerStatement = !0 };
$1Y.$Px = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) return n;
    var t = n.replace($1Y.$24M, "&amp;");
    return t = t.replace($1Y.$ZQ, "&lt;"), t = t.replace($1Y.$Z0, "&gt;"), t = t.replace($1Y.$24P, "&apos;"), t
        .replace($1Y.$2RK, "&quot;")
};
$1Y.$1l5 = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) return n;
    var t = n.replace($1Y.$2AW, '"');
    return t = t.replace($1Y.$2AT, "'"), t = t.replace($1Y.$2AU, ">"), t = t.replace($1Y.$2AV, "<"), t
        .replace($1Y.$2AS, "&")
};
Microsoft.Crm.Client.Core.Framework.$5J = function() {
    this.$ra = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Framework.$9b.$$(Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX)));
    this.$ra.set_$H(Microsoft.Crm.Client.Core.Framework.$5J.$1Cr(1),
        new(Microsoft.Crm.Client.Core.Framework.$9b.$$(Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX))(250));
    this.$ra.set_$H(Microsoft.Crm.Client.Core.Framework.$5J.$1Cr(2),
        new(Microsoft.Crm.Client.Core.Framework.$9b.$$(Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX))(250));
    this.$ra.set_$H(Microsoft.Crm.Client.Core.Framework.$5J.$1Cr(4),
        new(Microsoft.Crm.Client.Core.Framework.$9b.$$(Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX))(1e3));
    this.$ra.set_$H(Microsoft.Crm.Client.Core.Framework.$5J.$1Cr(8),
        new(Microsoft.Crm.Client.Core.Framework.$9b.$$(Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX))(50))
};
Microsoft.Crm.Client.Core.Framework.$5J.$1Cr = function(n) {
    if (1 & n) return 0;
    if (2 & n) return 1;
    if (8 & n) return 2;
    if (4 & n) return 3;
    throw Error.argumentOutOfRange("consumer", n);
};
Microsoft.Crm.Client.Core.Framework.$5J.prototype = {
    $ra: null,
    $HM: !0,
    $2e: function(n) {
        if (this.$HM) {
            var t = Microsoft.Crm.Client.Core.Framework.$5J.$1Cr(n.$1jg);
            this.$ra.get_$H(t).$2e(n)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.$Pl = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.$Pl.initializeBase(this);
    this.$1W3 = n;
    this.$1Ob = t || Microsoft.Crm.Client.Core.Framework.$6A.$1Pk;
    this.$11c = i
};
Microsoft.Crm.Client.Core.Framework.$Pl.prototype = {
    $1W3: null,
    $1Ob: null,
    $11c: null,
    $1ZV: function(n, t) {
        for (var f,
            e,
            o = new Microsoft.Crm.Client.Core.Framework.$D1(t.$I + ".Item", this.$1W3, t.$1Fq),
            u = new Microsoft.Crm.Client.Core.Framework.$9A,
            s = this.$1Ob.$1ZV(n, t),
            r = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2xi(s),
            i = 0;
            i < r.length;
            i++) f = this.$11c ? r[i][this.$11c] : r[i], e = o.$1jK(f), u.$2e(e);
        return u
    },
    $1Jt: function(n, t, i) {
        var r, f, e;
        if ($0.$1(i)) Microsoft.Crm.Client.Core.Framework.$6A.prototype.$1Jt.call(this, n, t, i);
        else {
            var u = [], o = i, s = new Microsoft.Crm.Client.Core.Framework.$D1(t.$I + ".Item", this.$1W3, t.$1Fq);
            for (r = 0; r < o.get_Count(); r++)
                f = s.$26x(o.get_$H(r)), this.$11c ? (e = {}, e[this.$11c] = f, u[r] = e) : u[r] = f;
            this.$1Ob.$1Jt(n, t, u)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.$10 = function() {};
Microsoft.Crm.Client.Core.Framework.$10.get_$25O = function() {
    return Microsoft.Crm.Client.Core.Framework.$10.$19M ||
    (Microsoft.Crm.Client.Core.Framework.$10.$19M = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
        .$Kz ||
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$ZF
        ? new Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn
        : new Microsoft.Crm.Client.Core.Framework.ClientWatson.$37), Microsoft.Crm.Client.Core.Framework.$10.$19M
};
$1W.$Cr = function(n, t) { return $1W.$1Fy(n, t) };
$1W.$1Fy = function(n, t) {
    var u = t.charCodeAt(0), i, r;
    if (u <= 57 && u >= 0 && (i = parseInt(t), isFinite(i) && i >= 0)) return i;
    try {
        return n.parse(t, !0)
    } catch (f) {
        if (r = parseInt(t), isFinite(r) && r >= 0) return r;
        throw f;
    }
};
$1W.$iP = function(n, t) {
    var r, u, i, f;
    if (Microsoft.Crm.Client.Core.Framework.$9A.isInstanceOfType(t)) {
        for (r = t, u = new Sys.StringBuilder, i = 0; i < r.get_Count(); i++) f = r.get_$H(i), u.append(n.toString(f));
        return u.toString(",")
    }
    return n.toString(t)
};
Microsoft.Crm.Client.Core.Framework.$1J = function() {};
Microsoft.Crm.Client.Core.Framework.$1J.$88 = function(n) { return Microsoft.Crm.Client.Core.Framework.$4g.$88(n, !0) };
Microsoft.Crm.Client.Core.Framework.$1J.$l = function(n) {
    var i = 0, r = n, t, u;
    for (t in r) u = { key: t, value: r[t] }, i++;
    return i
};
Microsoft.Crm.Client.Core.Framework.$1J.$11l = function(n) {
    var t, i, r;
    if ($0.$1(n)) throw Error.argumentNull("obj");
    t = n;
    for (i in t) return r = { key: i, value: t[i] }, !1;
    return!0
};
$3x.$2NR = function(n, t) { return(n % t + t) % t };
$3x.$14L = function(n, t) { return Math.floor(Math.random() * (t - n + 1) + n) };
Microsoft.Crm.Client.Core.Framework.$3 = function() {};
Microsoft.Crm.Client.Core.Framework.$3.$A = function(n) { return $0.$1(n) || n === "" };
Microsoft.Crm.Client.Core.Framework.$3.$1S = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$3.$A(n) || n.trim() === ""
};
Microsoft.Crm.Client.Core.Framework.$3.$1qL = function(n) {
    for (var r, t = 0, i = 0; i < n.length; ++i) r = n.charCodeAt(i), t = (t << 5) - t + r, t = t & t;
    return t
};
Microsoft.Crm.Client.Core.Framework.$3.$MD = function(n, t, i, r, u, f, e) {
    return $0.$9c(t) && $0.$9c(i) && $0.$9c(r) && $0.$9c(u) && $0.$9c(f) && $0.$9c(e)
        ? n
        : String.format(n, t, i, r, u, f, e)
};
Microsoft.Crm.Client.Core.Framework.$3.$3Kr = function(n, t) {
    var r, u, i;
    if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) return"";
    for (r = new Sys.StringBuilder, u = n.split(Microsoft.Crm.Client.Core.Framework.$3
            .$1XJ), i = 0;
        i < u.length;
        i++) Microsoft.Crm.Client.Core.Framework.$3.$1S(u[i]) || (r.append(u[i]), r.append(t));
    return r.toString()
};
$3i.$b = function(n, t) { return $3i.$1q5(n, t) };
$3i.$1q5 = function(n, t) { return $0.$1(t) ? n === Number || Type.isEnum(n) ? 0 : n === Boolean ? !1 : null : t };
Microsoft.Crm.Client.Core.Framework.$A5 = function() {};
Microsoft.Crm.Client.Core.Framework.$A5.prototype = {
    $1Pz: null,
    $11B: function() { return Microsoft.Crm.Client.Core.Framework.$4G.$2D5(Object.getType(this)) },
    $b: function(n) {
        var t = this[n.$I];
        return $0.$9c(t) ? n.$At : t
    },
    $m: function(n, t) {
        var r = this.$b(n), i;
        r !== t &&
        (i = new Microsoft.Crm.Client.Core.Framework.$NP(this, n, r, t), n.$3J4(i), this[n
            .$I] = t, this.$1Pz || (this.$1Pz = {}), this.$1Pz[n.$I] = !0, n.$3J3(i), this.$13V(i))
    },
    $1bx: function(n) { for (var i = this.$11B(), t = 0; t < i.get_$l(); t++) this.$3RP(n, i.get_$H(t)) },
    $33A: function() {
        for (var n = {}, i = this.$11B(), t = 0; t < i.get_$l(); t++) this.$2RD(n, i.get_$H(t));
        return Microsoft.Crm.Client.Core.Framework.$4g.$3Ra(this, n), n
    },
    $3RP: function(n, t) {
        var i = t.$n4.$1ZV(n, t), r = t.$1jK(i);
        this.$m(t, r)
    },
    $2RD: function(n, t) {
        var i = this.$b(t), r = t.$26x(i);
        t.$n4.$1Jt(n, t, r)
    },
    $13V: function() {}
};
Microsoft.Crm.Client.Core.Framework.$D1 = function(n, t, i, r, u, f, e) {
    this.$n4 = Microsoft.Crm.Client.Core.Framework.$6A.$1Pk;
    this.$I = n;
    this.$EY = t;
    this.$1Fq = i;
    this.$At = e ? r : $3i.$1q5(t, r);
    this.$1ZA = u;
    this.$1Z9 = f;
    this.$1Uv = this.$EY.inheritsFrom(Microsoft.Crm.Client.Core.Framework.$4g)
};
Microsoft.Crm.Client.Core.Framework.$D1.prototype = {
    $I: null,
    $EY: null,
    $1Fq: null,
    $At: null,
    $1Z9: null,
    $1ZA: null,
    $1Uv: !1,
    get_$2D6: function() { return this.$1Fq.getName() + "." + this.$I },
    set_$392: function(n) {
        if (this
            .$n4 !==
            Microsoft.Crm.Client.Core.Framework.$6A.$1Pk)
            throw Error.invalidOperation("Cannot set JsonConverter of a property twice.");
        return this.$n4 = n, n
    },
    $1jK: function(n) {
        var r, u, i, t, e, f;
        if ($0.$9c(n)) return this.$At;
        if ($0.$25(n)) return $3i.$1q5(this.$EY, n);
        if (this.$1Uv || this.$EY.isInstanceOfType(n) || Type.isEnum(this.$EY) && Number.isInstanceOfType(n)) return n;
        if (Date
            .isInstanceOfType(n) &&
            this
            .$EY ===
            Microsoft.Crm.Client.Core.Framework.$1h) return Microsoft.Crm.Client.Core.Framework.$1h.$2D4(n);
        if (String.isInstanceOfType(n)) {
            if (Type.isEnum(this.$EY)) return $1W.$1Fy(this.$EY, n);
            if (this
                .$EY ===
                Microsoft.Crm.Client.Core.Framework.$1h) return Microsoft.Crm.Client.Core.Framework.$1h.$3GZ(n);
            if (this.$EY === Number && (r = Number.parseInvariant(n), !isNaN(r) && isFinite(r))) return r;
            if (u = this.$EY.parse, !$0.$1(u)) {
                i = null;
                try {
                    i = u(n)
                } catch (o) {
                    i = JSON.parse(n)
                }
                if (!$0.$9c(i)) return i
            }
        }
        if (Object
            .isInstanceOfType(n) &&
            this.$EY === Error) return Microsoft.Crm.Client.Core.Framework.ErrorConverter.create(n);
        if (t = this.$EY.create, !$0.$1(t)) return t(n);
        if (Object
            .isInstanceOfType(n) &&
            this.$EY.inheritsFrom(Microsoft.Crm.Client.Core.Framework
                .$A5)) return Microsoft.Crm.Client.Core.Framework.$4g.$2gf(this.$EY, n);
        e = this.$EY.getName() + "Converter";
        try {
            if (f = Type.parse(e), !$0.$1(f) && (t = f.create, !$0.$1(t))) return t(n)
        } catch (s) {
        }
        throw Error.invalidOperation(this.get_$2D6() +
            " cannot safely coerce " +
            Object.getType(n).getName() +
            " to " +
            this.$EY.getName());
    },
    $26x: function(n) {
        return $0.$9c(n) ? this.$1OZ(this.$At) : $0.$25(n) ? null : Type.isEnum(this.$EY) ? n : this.$1OZ(n)
    },
    $3J3: function(n) { this.$1Z9 && this.$1Z9(n) },
    $3J4: function(n) { this.$1ZA && this.$1ZA(n) },
    $1OZ: function(n) {
        var r, h, u, f, i, e, o, t, a, s;
        if ($0.$25(n) ||
            String.isInstanceOfType(n) ||
            Number.isInstanceOfType(n) ||
            Boolean.isInstanceOfType(n) ||
            this.$1Uv) return n;
        if (r = Object.getType(n), Microsoft.Crm.Client.Core.Framework.$A5.isInstanceOfType(n)) return h = n, h.$33A();
        if (Microsoft.Crm.Client.Core.Framework.$1h
            .isInstanceOfType(n)) return Microsoft.Crm.Client.Core.Framework.$1h.$2s0(n);
        if (Array.isInstanceOfType(n)) {
            for (u = n, f = [], i = 0; i < u.length; i++) f[i] = this.$1OZ(u[i]);
            return f
        }
        if (Microsoft.Crm.Client.Core.Framework.$7M.isInstanceOfType(n)) {
            var v = n.$FV, c = {}, l = v;
            for (e in l) o = { key: e, value: l[e] }, c[o.key] = this.$1OZ(o.value);
            return c
        }
        if (t = r.condense, !$0.$1(t)) return t(n);
        if (Error.isInstanceOfType(n)) return Microsoft.Crm.Client.Core.Framework.ErrorConverter.$2gy(n);
        a = r.getName() + "Converter";
        try {
            if (s = Type.parse(a), !$0.$1(s) && (t = s.condense, !$0.$1(t))) return t(n)
        } catch (y) {
        }
        throw Error.invalidOperation(this.get_$2D6() + " cannot safely coerce " + this.$EY.getName() + " to JSON");
    }
};
$0.$25 = function(n) { return null === n };
$0.$1 = function(n) { return null === n || n === undefined };
$0.$3Sz = function(n) { return!$0.$1(n) && !$0.$1(n.equals) };
$0.$9c = function(n) { return n === undefined };
Microsoft.Crm.Client.Core.Framework.$7b = function() { Microsoft.Crm.Client.Core.Framework.$7b.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.$7b.prototype = {
    $1e8: null,
    get_ViewModelId: function() {
        return $0.$25(this.$1e8) && (this.$1e8 = (++Microsoft.Crm.Client.Core.Framework.$7b.$2ZY).toString()), this.$1e8
    },
    get_IsInteractionCentricEnabled: function() { return Microsoft.Crm.Client.Core.Framework.$6.get_$k() }
};
Microsoft.Crm.Client.Core.Framework.$5V = function() { Microsoft.Crm.Client.Core.Framework.$5V.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.$5V.$2D8 = function(n) {
    return"CacheOperationEvent." + Microsoft.Crm.Client.Core.Framework.$7E.toString(n)
};
Microsoft.Crm.Client.Core.Framework.$NQ = function(n, t, i, r, u) {
    this.$21R = -1;
    this.$26 = n;
    this.$Pk = t;
    this.$21R = u;
    switch (n) {
    case 0:
        this.$Oc = i;
        break;
    case 1:
        this.$Oc = i;
        this.$Zv = r;
        break;
    case 2:
        this.$Zv = r;
        break;
    case 3:
        this.$Oc = i;
        this.$Zv = r;
        break;
    case 4:
        this.$Pk = -1
    }
};
Microsoft.Crm.Client.Core.Framework.$NQ.prototype = { $26: 0, $Oc: null, $Zv: null, $Pk: 0 };
Microsoft.Crm.Client.Core.Framework.$BI = function() {
    this.$$d_$GN = Function.createDelegate(this, this.$GN);
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    Microsoft.Crm.Client.Core.Framework.$BI.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.$BI.prototype = {
    eventHandlers: null,
    $1DJ: 0,
    $fD: !1,
    $3P: !1,
    add_$6s: function(n) { this.AddPropertyChangedListener("$", n) },
    remove_$6s: function(n) { this.RemovePropertyChangedListener("$", n) },
    get_IsDisposed: function() { return this.$3P },
    get_IsDisposing: function() { return this.$fD },
    get_$2Kp: function() { return this.$1DJ > 0 },
    get_$38a: function() { return!0 },
    AddPropertyChangedListener: function(n, t) {
        this.eventHandlers || (this.eventHandlers = new Sys.EventHandlerList);
        this.$1DJ++;
        this.eventHandlers.addHandler(n, t)
    },
    RemovePropertyChangedListener: function(n, t) {
        this.eventHandlers && (this.$1DJ--, this.eventHandlers.removeHandler(n, t))
    },
    $2F: function(n, t) { this.AddPropertyChangedListener("~" + n, t) },
    $4I: function(n, t) { this.RemovePropertyChangedListener("~" + n, t) },
    $5d: function(n) { return this.eventHandlers ? this.eventHandlers.getHandler("~" + n) : null },
    dispose: function() {
        if (!this.$fD) {
            this.$fD = !0;
            var n = this.$$d_$GN;
            this.get_$38a()
                ? n()
                : Microsoft.Crm.Client.Core.Framework.$2F.get_$5()
                .$3Zp(30, "Dispose." + Object.getType(this).getName(), n);
            this.$3P = !0
        }
    },
    $8: function(n) {
        if (this.eventHandlers) {
            var t = this.eventHandlers.getHandler("$");
            this.$sJ(n, t)
        }
    },
    $GN: function() {
        this.$1DJ = 0;
        this.eventHandlers = null;
        this.eventHandlers = new Microsoft.Crm.Client.Core.Framework.$NN
    },
    $10H: function(n, t) {
        if (this.eventHandlers) {
            var i = this.eventHandlers.getHandler("$");
            this.$sJ(n, i);
            this.$sJ(t, i)
        }
    },
    $1RE: function(n, t, i) {
        if (this.eventHandlers) {
            var r = this.eventHandlers.getHandler("$");
            this.$sJ(n, r);
            this.$sJ(t, r);
            this.$sJ(i, r)
        }
    },
    $10I: function(n) {
        var i, t;
        if (this.eventHandlers) for (i = this.eventHandlers.getHandler("$"), t = 0; t < n.length; t++) this.$sJ(n[t], i)
    },
    $t0: function(n) {
        var t = this.$5d(n);
        $0.$1(t) || t()
    },
    $Bn: function(n, t) {
        var i = this.$5d(n);
        $0.$1(i) || i(t)
    },
    $1DH: function(n, t, i) {
        var r = this.$5d(n);
        $0.$1(r) || r(t, i)
    },
    $13V: function(n) {
        Microsoft.Crm.Client.Core.Framework.$A5.prototype.$13V.call(this, n);
        this.$8(n.property.$I)
    },
    $sJ: function(n, t) {
        var i = this.eventHandlers.getHandler(n);
        i && i(this, n);
        t && t(this, n)
    }
};
Microsoft.Crm.Client.Core.Framework.$9A = function() {
    this.$1C = [];
    this.get_$l = this.get_Count;
    Microsoft.Crm.Client.Core.Framework.$9A.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.$9A.prototype = {
    $k8: !1,
    add_CollectionChanged: function(n) { this.$2F("CollectionChanged", n) },
    remove_CollectionChanged: function(n) { this.$4I("CollectionChanged", n) },
    get_Count: function() { return this.$1C.length },
    getItem: function(n) { return this.get_$H(n) },
    get_$H: function(n) { return this.$1C[n] },
    set_$H: function(n, t) {
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E.$1dJ(n, 0, this.get_Count() - 1, "index"), this.$1C[n] !== t) {
            var i = this.$1C[n];
            this.$1C[n] = t;
            this.$HX(3, n, n, [t], [i])
        }
        return t
    },
    $1US: function(n, t) {
        this.$KP();
        Array.insert(this.$1C, n, t);
        this.$HX(0, n, n, [t], null);
        this.$8("Count")
    },
    $2KW: function(n, t) {
        if (t || Error.argumentNull("items"), (n > this.get_Count() || n < 0) && Error.argumentOutOfRange("index"), !
            this.get_Count()) {
            this.$S4(t);
            return
        }
        this.$KP();
        for (var i = 0; i < t.length; i++) Array.insert(this.$1C, n + i, t[i]);
        this.$HX(0, n, n, t, null);
        this.$8("Count")
    },
    $1A5: function(n) {
        var i, t;
        if (Microsoft.Crm.Client.Core.Framework.$Ab.isInstanceOfType(n)) {
            for (i = n, t = 0; t < this.$1C.length; ++t) if (i.$lK(this.$1C[t])) return!0;
            return!1
        }
        return Array.contains(this.$1C, n)
    },
    $sN: function(n) { Array.forEach(this.$1C, n) },
    $1WK: function(n) {
        for (var i, t = 0; t < this.get_Count(); ++t) if (i = this.get_$H(t), n(i)) return t;
        return this.get_Count()
    },
    $3UC: function(n, t) {
        var i = this.$1WK(n);
        return t.val = this.get_$H(i), i < this.get_Count()
    },
    $2e: function(n) { this.$2bS(n) },
    $S4: function(n) {
        this.$KP();
        Array.addRange(this.$1C, n);
        var t = this.get_Count() - n.length;
        this.$HX(0, t, t, n, null);
        this.$8("Count")
    },
    $76: function() {
        if (this.get_Count()) {
            this.$KP();
            var n = this.$1C;
            this.$1C = [];
            this.$HX(2, 0, 0, null, n);
            this.$8("Count")
        }
    },
    $DP: function(n) {
        var t = Array.indexOf(this.$1C, n);
        return t < 0 ? !1 : (this.$14W(t), !0)
    },
    $14W: function(n) {
        this.$KP();
        var t = this.$1C[n];
        Array.removeAt(this.$1C, n);
        this.$HX(2, n, n, null, [t]);
        this.$8("Count")
    },
    $2NU: function(n, t, i) {
        this.$KP();
        Array.removeAt(this.$1C, n);
        Array.insert(this.$1C, t, i);
        this.$HX(1, n, t, [i], [])
    },
    $1Gr: function(n, t) {
        var r, i;
        for ((t < 0 || t > this.get_Count()) && Error.argumentOutOfRange("count"),
            (n < 0 || n + t > this.get_Count()) && Error.argumentOutOfRange("index"), this
                .$KP(), r = new Array(t), i = t - 1;
            i >= 0;
            i--) r[i] = this.$1C[i + n], Array.removeAt(this.$1C, i + n);
        this.$HX(2, n, n, null, r);
        this.$8("Count")
    },
    $21O: function() {
        for (var t = new Array(this.get_Count()), n = 0; n < this.get_Count(); n++) t[n] = this.get_$H(n);
        return t
    },
    $33A: function() { return this },
    $2bS: function(n) {
        this.$KP();
        Array.add(this.$1C, n);
        var t = this.get_Count() - 1;
        this.$HX(0, t, t, [n], null);
        this.$8("Count")
    },
    $KP: function() { if (this.$k8) throw Error.invalidOperation(); },
    $HX: function(n, t, i, r, u) {
        var f = this.$5d("CollectionChanged"), e;
        if (f) {
            this.$k8 = !0;
            try {
                e = new Microsoft.Crm.Client.Core.Framework.$NQ(n, t, r, u, i);
                f(this, e)
            } finally {
                this.$k8 = !1
            }
        }
    }
};
Microsoft.Crm.Client.Core.Framework.$6C = function(n) {
    Microsoft.Crm.Client.Core.Framework.$6C.$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$6C"].T)
        .initializeBase(this);
    this.$2O1 = new(Microsoft.Crm.Client.Core.Framework.$BK
        .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$6C"].T))(this);
    this.$1C = this.$2ji(n)
};
Microsoft.Crm.Client.Core.Framework.$6C.$$ = function(n) {
    var i = "$6C$" + n.getName().replace(/\./g, "_"), t, u, f, r;
    if (!Microsoft.Crm.Client.Core.Framework[i]) {
        t = Microsoft.Crm.Client.Core.Framework[i] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$6C"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$6C.apply(this, i)
        };
        t.registerClass("Microsoft.Crm.Client.Core.Framework." + i,
            Microsoft.Crm.Client.Core.Framework.$BI,
            Microsoft.Crm.Client.Core.Framework.$Dv,
            Microsoft.Crm.Client.Core.Framework.$Di);
        u = Microsoft.Crm.Client.Core.Framework.$6C.prototype;
        for (f in u) r = { key: f, value: u[f] }, "constructor" !== r.key && (t.prototype[r.key] = r.value);
        t.$26y = "CollectionChanged";
        t.$27h = "Count"
    }
    return Microsoft.Crm.Client.Core.Framework[i]
};
Microsoft.Crm.Client.Core.Framework.$6C.prototype = {
    $k8: !1,
    $1C: null,
    $2O1: null,
    add_CollectionChanged: function(n) { this.$2F("CollectionChanged", n) },
    remove_CollectionChanged: function(n) { this.$4I("CollectionChanged", n) },
    get_Count: function() { return this.$1C.get_Count() },
    getItem: function(n) { return this.get_$H(n) },
    get_$H: function(n) { return this.$1C.get_$H(n) },
    set_$H: function(n, t) {
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E
            .$1dJ(n, 0, this.get_Count() - 1, "index"), this.$1C.get_$H(n) !== t) {
            var i = this.$1C.get_$H(n);
            this.$1C.set_$H(n, t);
            this.$HX(3, n, n, [t], [i])
        }
        return t
    },
    $1US: function(n, t) {
        this.$KP();
        this.$1C.$mg(n, t);
        this.$HX(0, n, n, [t], null);
        this.$8("Count")
    },
    $2KW: function(n, t) {
        if (t || Error.argumentNull("items"), (n > this.get_Count() || n < 0) && Error.argumentOutOfRange("index"), !
            this.get_Count()) {
            this.$S4(t);
            return
        }
        this.$KP();
        for (var i = 0; i < t.length; i++) this.$1C.$mg(n + i, t[i]);
        this.$HX(0, n, n, t, null);
        this.$8("Count")
    },
    $1A5: function(n) { return this.$1C.$1A5(n) },
    $35G: function(n) { return this.$1C.$35G(n, 0) },
    $2e: function(n) {
        this.$KP();
        this.$1C.$2e(n);
        var t = this.get_Count() - 1;
        this.$HX(0, t, t, [n], null);
        this.$8("Count")
    },
    $S4: function(n) {
        this.$KP();
        this.$1C.$S4(n);
        var t = this.get_Count() - n.length;
        this.$HX(0, t, t, n, null);
        this.$8("Count")
    },
    $76: function() {
        if (this.get_Count()) {
            this.$KP();
            var n = Array.clone(this.$1C.get_Items());
            this.$1C.$76();
            this.$HX(2, 0, 0, null, n);
            this.$8("Count")
        }
    },
    $DP: function(n) {
        var t = this.$1C.$35G(n, 0);
        return t < 0 ? !1 : (this.$14W(t), !0)
    },
    $14W: function(n) {
        this.$KP();
        var t = this.$1C.get_$H(n);
        this.$1C.$14W(n);
        this.$HX(2, n, n, null, [t]);
        this.$8("Count")
    },
    $2NU: function(n, t, i) {
        this.$KP();
        this.$1C.$14W(n);
        this.$1C.$mg(t, i);
        this.$HX(1, n, t, [i], [])
    },
    $1Gr: function(n, t) {
        var r, i;
        for ((t < 0 || t > this.get_Count()) && Error.argumentOutOfRange("count"),
            (n < 0 || n + t > this.get_Count()) && Error.argumentOutOfRange("index"), this
                .$KP(), r = new Array(t), i = t - 1;
            i >= 0;
            i--) r[i] = this.$1C.get_$H(i + n), this.$1C.$14W(i + n);
        this.$HX(2, n, n, null, r);
        this.$8("Count")
    },
    $7n: function(n) {
        var t = this.$1C.get_Count();
        this.$1C.$76();
        this.$1C.$S4(n);
        this.$HX(4, 0, t, null, null);
        this.$8("Count")
    },
    $21O: function() {
        for (var t = new Array(this.get_Count()), n = 0; n < this.get_Count(); n++) t[n] = this.get_$H(n);
        return t
    },
    $2ji: function(n) {
        return new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$6C"].T))(n)
    },
    $HX: function(n, t, i, r, u) {
        var f = this.$5d("CollectionChanged");
        if (f) {
            this.$k8 = !0;
            try {
                f(this, new Microsoft.Crm.Client.Core.Framework.$NQ(n, t, r, u, i))
            } finally {
                this.$k8 = !1
            }
        }
    },
    $KP: function() { if (this.$k8) throw Error.invalidOperation(); }
};
Microsoft.Crm.Client.Core.Framework.Trace = function() {};
Microsoft.Crm.Client.Core.Framework.Trace.$$cctor = function() {
    Microsoft.Crm.Client.Core.Framework.Trace.$p8 = [];
    Microsoft.Crm.Client.Core.Framework.$1c.set_$2Kv(!0);
    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
        Microsoft.Crm.Client.Core.Framework.$2Z.set_$38X(!0);
    Microsoft.Crm.Client.Core.Framework.$1F.set_$1l9(2)
};
Microsoft.Crm.Client.Core.Framework.Trace.set_$21V = function(n) {
    return Microsoft.Crm.Client.Core.Framework.Trace.$LY = n, Microsoft.Crm.Client.Core.Framework.Trace
        .$2Vt(Microsoft.Crm.Client.Core.Framework.Trace.$LY), n
};
Microsoft.Crm.Client.Core.Framework.Trace.set_$CG = function(n) {
    return Microsoft.Crm.Client.Core.Framework.Trace.$HM = n, Microsoft.Crm.Client.Core.Framework.Trace
        .$2Vt(n ? Microsoft.Crm.Client.Core.Framework.Trace.$LY : 0), n
};
Microsoft.Crm.Client.Core.Framework.Trace.logException = function(n, t, i, r, u, f, e, o, s) {
    Microsoft.Crm.Client.Core.Framework.Trace.$12W(n, 1, t, i, r, u, f, e, o, s)
};
Microsoft.Crm.Client.Core.Framework.Trace.logError = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.Trace.$12W(n, 1, null, t, i, r, u, f, e, o)
};
Microsoft.Crm.Client.Core.Framework.Trace.logWarning = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.Trace.$12W(n, 2, null, t, i, r, u, f, e, o)
};
Microsoft.Crm.Client.Core.Framework.Trace.logInfo = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.Trace.$12W(n, 4, null, t, i, r, u, f, e, o)
};
Microsoft.Crm.Client.Core.Framework.Trace.logPerf = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.Trace.$12W(n, 3, null, t, i, r, u, f, e, o)
};
Microsoft.Crm.Client.Core.Framework.Trace
    .startPerfTracing = function(n) {
        Microsoft.Crm.Client.Core.Framework.Trace.$ua
            ? Microsoft.Crm.Client.Core.Framework.Trace.$dK.$1Vk = !0
            : (Microsoft.Crm.Client.Core.Framework.Trace.$yU = {}, Microsoft.Crm.Client.Core.Framework.Trace
                .$142 = {}, Microsoft.Crm.Client.Core.Framework.Trace.$140 = 1, Microsoft.Crm.Client.Core.Framework
                .Trace.$74 = new Microsoft.Crm.Client.Core.Framework
                .$BT(n, null, Microsoft.Crm.Client.Core.Framework.Trace.$140, !1), Microsoft.Crm.Client.Core.Framework
                .Trace.$74.$1Vk = !0, Microsoft.Crm.Client.Core.Framework.Trace.$dK = Microsoft.Crm.Client.Core
                .Framework.Trace.$74, Microsoft.Crm.Client.Core.Framework.Trace.$ua = !0)
    };
Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceStart = function(n, t) {
    var r, i;
    Microsoft.Crm.Client.Core.Framework.Trace.$ua &&
        (!t || $0.$1(Microsoft.Crm.Client.Core.Framework.Trace.$yU[n])) &&
        (r = 0, Microsoft.Crm.Client.Core.Framework.Trace.$142[n] &&
                (r = Microsoft.Crm.Client.Core.Framework.Trace.$142[n]), Microsoft.Crm.Client.Core.Framework.Trace
                .$142[n] = r + 1, Microsoft.Crm.Client.Core.Framework.Trace
                .$140 = Microsoft.Crm.Client.Core.Framework.Trace.$140 + 1, i = new Microsoft.Crm.Client.Core.Framework
                .$BT(n,
                    Microsoft.Crm.Client.Core.Framework.Trace.$dK,
                    Microsoft.Crm.Client.Core.Framework.Trace.$140,
                    t),
            Microsoft.Crm.Client.Core.Framework.Trace.$dK
                .$2at(i), t
                ? Microsoft.Crm.Client.Core.Framework.Trace.$yU[n] = i
                : Microsoft.Crm.Client.Core.Framework.Trace.$dK = i)
};
Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceEnd = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.Trace.$ua) {
        var t = null;
        Microsoft.Crm.Client.Core.Framework.Trace.$yU[n]
            ? t = Microsoft.Crm.Client.Core.Framework.Trace.$yU[n]
            : Microsoft.Crm.Client.Core.Framework.Trace.$dK.$I === n &&
            (t = Microsoft.Crm.Client.Core.Framework.Trace.$dK, Microsoft.Crm.Client.Core.Framework.Trace.$dK = t.$13u);
        $0.$1(t) || t.$7Q()
    }
};
Microsoft.Crm.Client.Core.Framework.Trace.endPerfTracing = function(n, t, i) {
    if (Microsoft.Crm.Client.Core.Framework.Trace.$ua) {
        if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) n = Microsoft.Crm.Client.Core.Framework.Trace.$74.$I;
        else if (n !== Microsoft.Crm.Client.Core.Framework.Trace.$74.$I) return;
        Microsoft.Crm.Client.Core.Framework.Trace.$74.$7Q();
        Microsoft.Crm.Client.Core.Framework.Trace.$74.$25k();
        var r = Microsoft.Crm.Client.Core.Framework.Trace.$74
                .$2Hn("",
                    "",
                    Microsoft.Crm.Client.Core.Framework.Trace.$142,
                    {},
                    Microsoft.Crm.Client.Core.Framework.Trace.$74.$I,
                    Microsoft.Crm.Client.Core.Framework.Trace.$74.$ao),
            u = String.format("\r\n{0}\r\n\r\n{1}{2}\r\n\r\n",
                r[0],
                "Scenario,EventId,EventType,SequenceNumber,StartOffset,EndOffset,ExclusiveTime,InclusiveTime",
                r[1]);
        t && Microsoft.Crm.Client.Core.Framework.Trace.logPerf(84, u);
        i && console.info(u);
        Microsoft.Crm.Client.Core.Framework.Trace.$ua = !1
    }
};
Microsoft.Crm.Client.Core.Framework.Trace.logVerbose = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.Trace.$12W(n, 5, null, t, i, r, u, f, e, o)
};
Microsoft.Crm.Client.Core.Framework.Trace.$1Mn = function(n) {
    Array.contains(Microsoft.Crm.Client.Core.Framework.Trace.$p8, n) ||
        Array.add(Microsoft.Crm.Client.Core.Framework.Trace.$p8, n)
};
Microsoft.Crm.Client.Core.Framework.Trace.$1xf = function(n) {
    Array.contains(Microsoft.Crm.Client.Core.Framework.Trace.$p8, n) &&
        Array.remove(Microsoft.Crm.Client.Core.Framework.Trace.$p8, n)
};
Microsoft.Crm.Client.Core.Framework.Trace.emptyFunction = function() {};
Microsoft.Crm.Client.Core.Framework.Trace.$12W = function(n, t, i, r, u, f, e, o, s, h) {
    if (Microsoft.Crm.Client.Core.Framework.Trace.$3RZ(n, t, i, r, u, f, e, o, s, h), Microsoft.Crm.Client.Core
        .Framework.Trace.$HM) {
        var c = new Microsoft.Crm.Client.Core.Framework
            .TraceInfo(Microsoft.Crm.Client.Core.Framework.Trace.$rU,
                Microsoft.Crm.Client.Core.Framework.Trace.$rV,
                Microsoft.Crm.Client.Core.Framework.Trace.$kg,
                Microsoft.Crm.Client.Core.Framework.Trace.$zQ,
                Microsoft.Crm.Client.Core.Framework.Trace.$zJ,
                Microsoft.Crm.Client.Core.Framework.Trace.$zK,
                Microsoft.Crm.Client.Core.Framework.Trace.$zL,
                Microsoft.Crm.Client.Core.Framework.Trace.$zM,
                Microsoft.Crm.Client.Core.Framework.Trace.$zN,
                Microsoft.Crm.Client.Core.Framework.Trace.$zO);
        Microsoft.Crm.Client.Core.Framework.Trace.$36j(n, t, c)
    }
};
Microsoft.Crm.Client.Core.Framework.Trace.$3RZ = function(n, t, i, r, u, f, e, o, s, h) {
    Microsoft.Crm.Client.Core.Framework.Trace.$dO = null;
    Microsoft.Crm.Client.Core.Framework.Trace.$rU = n;
    Microsoft.Crm.Client.Core.Framework.Trace.$rV = t;
    Microsoft.Crm.Client.Core.Framework.Trace.$kg = i;
    Microsoft.Crm.Client.Core.Framework.Trace.$zQ = r;
    Microsoft.Crm.Client.Core.Framework.Trace.$zJ = u;
    Microsoft.Crm.Client.Core.Framework.Trace.$zK = f;
    Microsoft.Crm.Client.Core.Framework.Trace.$zL = e;
    Microsoft.Crm.Client.Core.Framework.Trace.$zM = o;
    Microsoft.Crm.Client.Core.Framework.Trace.$zN = s;
    Microsoft.Crm.Client.Core.Framework.Trace.$zO = h
};
Microsoft.Crm.Client.Core.Framework.Trace.$36j = function(n, t, i) {
    for (var u, r = 0;
        r < Microsoft.Crm.Client.Core.Framework.Trace.$p8.length;
        r++
    ) u = Microsoft.Crm.Client.Core.Framework.Trace.$p8[r], u(n, t, i)
};
Microsoft.Crm.Client.Core.Framework.Trace.$2da = function() {
    Microsoft.Crm.Client.Core.Framework.Trace.$1NU ||
    (Microsoft.Crm.Client.Core.Framework.Trace.$1NU = Microsoft.Crm.Client.Core.Framework.Trace.logError, Microsoft
        .Crm.Client.Core.Framework.Trace.$1i9 = Microsoft.Crm.Client.Core.Framework.Trace.logException, Microsoft.Crm
        .Client.Core.Framework.Trace.$1iD = Microsoft.Crm.Client.Core.Framework.Trace.logWarning, Microsoft.Crm.Client
        .Core.Framework.Trace.$1iB = Microsoft.Crm.Client.Core.Framework.Trace.logPerf, Microsoft.Crm.Client.Core
        .Framework.Trace.$1iA = Microsoft.Crm.Client.Core.Framework.Trace.logInfo, Microsoft.Crm.Client.Core.Framework
        .Trace.$1iC = Microsoft.Crm.Client.Core.Framework.Trace.logVerbose, Microsoft.Crm.Client.Core.Framework.Trace
        .$SA = Microsoft.Crm.Client.Core.Framework.Trace.emptyFunction, Microsoft.Crm.Client.Core.Framework.Trace
        .$1iE = Microsoft.Crm.Client.Core.Framework.Trace.startPerfTracing, Microsoft.Crm.Client.Core.Framework.Trace
        .$1i5 = Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceStart, Microsoft.Crm.Client.Core.Framework.Trace
        .$1i4 = Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceEnd, Microsoft.Crm.Client.Core.Framework.Trace
        .$1i8 = Microsoft.Crm.Client.Core.Framework.Trace.endPerfTracing)
};
Microsoft.Crm.Client.Core.Framework.Trace.$2Vt = function(n) {
    Microsoft.Crm.Client.Core.Framework.Trace.$2da();
    n < 1
        ? (Microsoft.Crm.Client.Core.Framework.Trace.logError = Microsoft.Crm.Client.Core.Framework.Trace.$SA, Microsoft
            .Crm.Client.Core.Framework.Trace.logException = Microsoft.Crm.Client.Core.Framework.Trace.$SA)
        : (Microsoft.Crm.Client.Core.Framework.Trace.logError = Microsoft.Crm.Client.Core.Framework.Trace
            .$1NU, Microsoft.Crm.Client.Core.Framework.Trace.logException = Microsoft.Crm.Client.Core.Framework.Trace
            .$1i9);
    Microsoft.Crm.Client.Core.Framework.Trace.logWarning = n < 2
        ? Microsoft.Crm.Client.Core.Framework.Trace.$SA
        : Microsoft.Crm.Client.Core.Framework.Trace.$1iD;
    Microsoft.Crm.Client.Core.Framework.Trace.logPerf = n < 3
        ? Microsoft.Crm.Client.Core.Framework.Trace.$SA
        : Microsoft.Crm.Client.Core.Framework.Trace.$1iB;
    Microsoft.Crm.Client.Core.Framework.Trace.logInfo = n < 4
        ? Microsoft.Crm.Client.Core.Framework.Trace.$SA
        : Microsoft.Crm.Client.Core.Framework.Trace.$1iA;
    n < 5
        ? (Microsoft.Crm.Client.Core.Framework.Trace.logVerbose = Microsoft.Crm.Client.Core.Framework.Trace
            .$SA, Microsoft.Crm.Client.Core.Framework.Trace.startPerfTracing = Microsoft.Crm.Client.Core.Framework.Trace
            .$SA, Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceStart = Microsoft.Crm.Client.Core.Framework
            .Trace.$SA, Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceEnd = Microsoft.Crm.Client.Core.Framework
            .Trace.$SA, Microsoft.Crm.Client.Core.Framework.Trace.endPerfTracing = Microsoft.Crm.Client.Core.Framework
            .Trace.$SA)
        : (Microsoft.Crm.Client.Core.Framework.Trace.logVerbose = Microsoft.Crm.Client.Core.Framework.Trace
            .$1iC, Microsoft.Crm.Client.Core.Framework.Trace.startPerfTracing = Microsoft.Crm.Client.Core.Framework
            .Trace.$1iE, Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceStart = Microsoft.Crm.Client.Core
            .Framework.Trace.$1i5, Microsoft.Crm.Client.Core.Framework.Trace.addPerfTraceEnd = Microsoft.Crm.Client.Core
            .Framework.Trace.$1i4, Microsoft.Crm.Client.Core.Framework.Trace.endPerfTracing = Microsoft.Crm.Client.Core
            .Framework.Trace.$1i8)
};
Microsoft.Crm.Client.Core.Framework.$5w = function() {};
Microsoft.Crm.Client.Core.Framework.$5w.$1U4 = function(n) {
    Microsoft.Crm.Client.Core.Framework.$10.$8F ? n() : window.setTimeout(n, 0)
};
Microsoft.Crm.Client.Core.Framework.$N7 = function() {};
Microsoft.Crm.Client.Core.Framework.$N7.prototype = {
    $e7: null,
    $YO: null,
    get_ErrorType: function() { return this.$e7 },
    set_ErrorType: function(n) { return this.$e7 = n, n },
    get_ErrorDescription: function() { return this.$YO },
    set_ErrorDescription: function(n) { return this.$YO = n, n }
};
Microsoft.Crm.Client.Core.Framework.$5k = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$5k.initializeBase(this, ["ChartError", t]);
    this.set_$wA(n);
    this.set_$1Ap(t)
};
Microsoft.Crm.Client.Core.Framework.$5k.$1EB = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$5L.$1EB(n, "ChartError")
};
Microsoft.Crm.Client.Core.Framework.$5k.prototype = {
    get_$wA: function() { return this.$FV.ErrorTitle },
    set_$wA: function(n) { return this.$FV.ErrorTitle = n, n },
    get_$1Ap: function() { return this.$FV.ErrorDescription },
    set_$1Ap: function(n) { return this.$FV.ErrorDescription = n, n }
};
Microsoft.Crm.Client.Core.Framework.$1o = function() {};
Microsoft.Crm.Client.Core.Framework.$1o.$7 = function() {
    var n, t, i;
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$1o.$rE)
        ? (Microsoft.Crm.Client.Core.Framework.$1o.$rE = MscrmComponents
                .DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), n = VERSION_NUMERIC_VALUE, t =
                {},
            t.v = n, Microsoft.Crm.Client.Core.Framework.$6.get_$k()
                ? Microsoft.Crm.Client.Core.Framework.$1o.$rE.resolve()
                : (Microsoft.Crm.Client.Core.Framework.$6.get_$5O() ||
                    Microsoft.Crm.Client.Core.Framework.$1o
                    .$1pB("resources/styles/Styles.uxrefresh.css", n), i =
                [
                    "scripts/Microsoft.Crm.Client.Core.Controls.js", "scripts/Microsoft.Crm.Client.Core.Views.js",
                    "scripts/Microsoft.Crm.Client.Application.ViewModels.js"
                ], Microsoft.Crm.Client.Core.Framework.$1o.$1D7(i, 0, t)
                    .always(function() { Microsoft.Crm.Client.Core.Framework.$1o.$rE.resolve() })), Microsoft.Crm.Client
                .Core.Framework.$1o.$rE.promise())
        : Microsoft.Crm.Client.Core.Framework.$1o.$rE.promise()
};
Microsoft.Crm.Client.Core.Framework.$1o.$1pB = function(n, t) {
    var r, u, i;
    n in Microsoft.Crm.Client.Core.Framework.$1o.$fc ||
    (Microsoft.Crm.Client.Core.Framework.$1o.$fc[n] = !0, r = new Microsoft.Crm.Client.Core.Framework
        .PerformanceStopwatch("CodeLoadManager.GetCss"), r
        .start(), $0.$1(t) && (t = VERSION_NUMERIC_VALUE), u = $(window.document.createElement("link")), $(document)
        .find("head").append(u), i = {}, i.rel = "stylesheet", i.type = "text/css", i.href = n + "?v=" + t, u.attr(i), r
        .stop(), r.addParameter(n))
};
Microsoft.Crm.Client.Core.Framework.$1o.$1D7 = function(n, t, i) {
    var u = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), r, s, f, o, e;
    if (t < 0 || t >= n.length) u.resolve();
    else {
        for (r = t; r < n.length && n[r] in Microsoft.Crm.Client.Core.Framework.$1o.$fc;) r++;
        if (r >= n.length) u.resolve();
        else {
            if (n[r] in Microsoft.Crm.Client.Core.Framework.$1o.$Wk
            ) return Microsoft.Crm.Client.Core.Framework.$1o.$Wk[n[r]];
            Microsoft.Crm.Client.Core.Framework.$1o.$Wk[n[r]] = u;
            u.always(function() { delete Microsoft.Crm.Client.Core.Framework.$1o.$Wk[n[r]] });
            t = r;
            $0.$1(i) && (s = VERSION_NUMERIC_VALUE, i = {}, i.v = s);
            f = {};
            f.dataType = "script";
            o = n[t];
            f.url = o;
            f.data = i;
            f.crossDomain = !0;
            f.cache = !0;
            e = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("CodeLoadManager.GetScript");
            e.start();
            $.ajax(f).then(function() {
                    e.stop();
                    e.addParameter(o);
                    Microsoft.Crm.Client.Core.Framework.$1o.$fc[n[t]] = !0;
                    t++;
                    t < n.length
                        ? Microsoft.Crm.Client.Core.Framework.$1o.$1D7(n, t, i).always(function() { u.resolve() })
                        : u.resolve()
                },
                function() { u.resolve() })
        }
    }
    return u.promise()
};
Microsoft.Crm.Client.Core.Framework.$6 = function() {};
Microsoft.Crm.Client.Core.Framework.$6.get_$2C = function() {
    return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$UX
        ? 3
        : Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl
        ? 4
        : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
        .get_$2C().toLowerCase() ===
        "phone" ||
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Jn
        ? 2
        : 1
};
Microsoft.Crm.Client.Core.Framework.$6.get_$1Vt = function() {
    return Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 1 ? !0 : !1
};
Microsoft.Crm.Client.Core.Framework.$6.get_$4R = function() {
    return Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2 ? !0 : !1
};
Microsoft.Crm.Client.Core.Framework.$6.get_$5O = function() {
    return Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 4
};
Microsoft.Crm.Client.Core.Framework.$6.get_$37o = function() {
    var n = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$xU;
    return!n || n === 1 || n === 2 || n === 5
};
Microsoft.Crm.Client.Core.Framework.$6.get_$k = function() {
    return Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 3
};
Microsoft.Crm.Client.Core.Framework.$6.get_IsPreview = function() { return Microsoft.Crm.Client.Core.Framework.$6.$w };
Microsoft.Crm.Client.Core.Framework.$6.set_IsPreview = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$6.$w = n, n
};
Microsoft.Crm.Client.Core.Framework.$a = function() {};
Microsoft.Crm.Client.Core.Framework.$a.$Uq = function(n) {
    return"!" + Microsoft.Crm.Client.Core.Framework.$a.$O4.toString(n)
};
Microsoft.Crm.Client.Core.Framework.$a.$O4 = function() {};
Microsoft.Crm.Client.Core.Framework.$a.$O4.prototype = {
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
};
Microsoft.Crm.Client.Core.Framework.$a.$O4.registerEnum("Microsoft.Crm.Client.Core.Framework.$a.$O4", !1);
Microsoft.Crm.Client.Core.Framework.$24 = function(n, t, i) {
    this.$Dr = n;
    this.$1Vf = t;
    this.$TG = i
};
Microsoft.Crm.Client.Core.Framework.$24.get_$13c = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$24.$1Y8) &&
    (Microsoft.Crm.Client.Core.Framework.$24.$1Y8 = new Microsoft.Crm.Client.Core.Framework
        .$24(!1, !0, !0)), Microsoft.Crm.Client.Core.Framework.$24.$1Y8
};
Microsoft.Crm.Client.Core.Framework.$24.get_$2RT = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$24.$1ZY) &&
    (Microsoft.Crm.Client.Core.Framework.$24.$1ZY = new Microsoft.Crm.Client.Core.Framework
        .$24(!1, !0, !1)), Microsoft.Crm.Client.Core.Framework.$24.$1ZY
};
Microsoft.Crm.Client.Core.Framework.$24.prototype = { $Dr: !1, $1Vf: !1, $TG: !1 };
Microsoft.Crm.Client.Core.Framework.$15 = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$15.initializeBase(this, [n, t])
};
Microsoft.Crm.Client.Core.Framework.$15.$5v = function(n, t) {
    return Microsoft.Crm.Client.Core.Framework.$6j.get_$CG() ? new Microsoft.Crm.Client.Core.Framework.$15(n, t) : null
};
Microsoft.Crm.Client.Core.Framework.$15.prototype = { toString: function() { return"[" + this.$19T + "]" } };
Microsoft.Crm.Client.Core.Framework.$4c = function() {
    Microsoft.Crm.Client.Core.Framework.$4c.initializeBase(this, ["unknown", "unknown"])
};
Microsoft.Crm.Client.Core.Framework.$4c.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4c.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4c.$D = new Microsoft.Crm.Client.Core.Framework.$4c), Microsoft.Crm.Client
        .Core.Framework.$4c.$D
};
Microsoft.Crm.Client.Core.Framework.$4c.prototype = { toString: function() { return"[unknown]" } };
Microsoft.Crm.Client.Core.Framework.$6j = function(n, t, i, r) {
    this.$25n = Microsoft.Crm.Client.Core.Framework.$3.$A(n) ? "unknown" : n;
    this.$19T = Microsoft.Crm.Client.Core.Framework.$3.$A(t) ? "unknown" : t;
    this.$ye = i;
    this.$161 = r
};
Microsoft.Crm.Client.Core.Framework.$6j.get_$CG = function() {
    return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.get_$CG() ||
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker.get_$2Lj() ||
        Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$tR
};
Microsoft.Crm.Client.Core.Framework.$6j.prototype = { $25n: null, $19T: null, $ye: 0, $161: null };
Microsoft.Crm.Client.Core.Framework.$9N = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.$9N.initializeBase(this, [n, t, i, r]);
    this.$1gv = Microsoft.Crm.Client.Core.Framework.$3.$A(u) ? "unknown" : u
};
Microsoft.Crm.Client.Core.Framework.$9N.$5v = function(n, t, i, r, u) {
    return Microsoft.Crm.Client.Core.Framework.$6j.get_$CG()
        ? new Microsoft.Crm.Client.Core.Framework.$9N(n, t, i, r, u)
        : null
};
Microsoft.Crm.Client.Core.Framework.$9N.prototype = {
    $1gv: null,
    toString: function() { return"[" + this.$19T + "]:[" + this.$1gv + "]" }
};
Microsoft.Crm.Client.Core.Framework.$EW = function() {};
Microsoft.Crm.Client.Core.Framework.$EW.prototype = { $nO: 0, $nM: null, $Oa: null, $AW: !1, $19: null };
Microsoft.Crm.Client.Core.Framework.$h = function() {};
Microsoft.Crm.Client.Core.Framework.$h.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$h.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$h.$D = new Microsoft.Crm.Client.Core.Framework.$h), Microsoft.Crm.Client
        .Core.Framework.$h.$D
};
Microsoft.Crm.Client.Core.Framework.$h.prototype = {
    $Qt: null,
    $LN: function(n) {
        if ($0.$1(this.$Qt)) {
            var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
            return t.resolve()
        }
        return this.$Qt.$X1(n)
    },
    $R7: function(n, t, i) {
        if (i = $0.$1(i) ? !0 : i, $0.$1(this.$Qt)) {
            var r = MscrmComponents.DeferredPromiseFactory(String, Microsoft.Crm.Client.Core.Framework.$4);
            return r.resolve()
        }
        return this.$Qt.$R7(n, t, i)
    },
    $1j6: function(n) {
        if ($0.$1(this.$Qt)) {
            var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
            return t.resolve()
        }
        return this.$Qt.$VH(n)
    }
};
Microsoft.Crm.Client.Core.Framework.$8X = function(n) { this.$1C = $0.$1(n) ? {} : n };
Microsoft.Crm.Client.Core.Framework.$8X.$$ = function(n) {
    var t = "$8X$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$8X"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$8X.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$8X.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$8X.prototype = {
    $1C: null,
    get_$H: function(n) { return this.$1C[n] },
    set_$H: function(n, t) { return this.$1C[n] = t, t },
    $DP: function(n) { delete this.$1C[n] },
    $76: function() { this.$1C = {} },
    $3ZW: function(n) { return n in this.$1C },
    $l: function() { return Microsoft.Crm.Client.Core.Framework.$1J.$l(this.$1C) },
    $21O: function() {
        var t = new Array(this.$l()), i = 0, r = this.$1C, n, u;
        for (n in r) u = { key: n, value: r[n] }, t[i] = u.value, i++;
        return t
    },
    $1dN: function() { return this.$1C },
    get_$396: function() {
        var t = new Array(this.$l()), i = 0, r = this.$1C, n, u;
        for (n in r) u = { key: n, value: r[n] }, t[i] = u.key, i++;
        return t
    }
};
Microsoft.Crm.Client.Core.Framework.$RX = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$RX.initializeBase(this);
    this.$1FK = n;
    this.$Qh = t
};
Microsoft.Crm.Client.Core.Framework.$RX.prototype = {
    $1FK: null,
    $Qh: -1,
    get_NavigationType: function() { return this.$Qh },
    set_NavigationType: function(n) { return this.$Qh = n, n }
};
Microsoft.Crm.Client.Core.Framework.$T1 = function() {
    Microsoft.Crm.Client.Core.Framework.$T1.initializeBase(this);
    var n = this;
    this.set_$2a(function() {})
};
Microsoft.Crm.Client.Core.Framework.CommandManager = function() {
    Microsoft.Crm.Client.Core.Framework.CommandManager.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker = function() {
    this.$B7 = new Array(0);
    this.$MU = {};
    this.$1Z = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Wl.toString();
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Wl++
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .get_IsSuspended = function() { return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$UY };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .set_IsSuspended = function(n) { return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$UY = n, n };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y = function(n, t, i) {
    if (!Microsoft.Crm.Client.Core.Framework.PerformanceMarker
        .$2WS(n)) return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$2Zd(n), null;
    var u = window.performance.now(), r = new Microsoft.Crm.Client.Core.Framework.PerformanceMarker;
    return r.$1b = n, r.$4o = u, i && r.addParameter(i), r.$ND = $0.$1(t) ? 0 : t, Microsoft.Crm.Client.Core.Framework
        .PerformanceMarker.$2XF(r), Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1tU(r), Microsoft.Crm.Client
        .Core.Framework.PerformanceMarker.$3U3(), r
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$2XF = function(n) {
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$tq[n.$1Z] = n;
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$12a++;
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5 = null
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1lY = function(n) {
    delete Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$tq[n];
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$12a--;
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5 = null
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$3U3 = function() {
    var t;
    if (Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1F2 >= 0 &&
        (t = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$12a -
            Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1F2, t >= Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$2N7)
    )
        for (var i = 0,
            r = 0,
            n = Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$1Wl;
            r < t && n >= 0;
        )
            n.toString() in Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$tq &&
            (i++, i > Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1F2 &&
                (Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1lY(n.toString()), r++)), n--
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .$3Qz = function(n) { Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1F2 = n };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .get_$CG = function() {
        return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1V3 ||
        (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$HM = Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().$F4("PerformanceMarker.isEnabled") ===
            "1", Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1V3 = !0), Microsoft.Crm.Client.Core.Framework
            .PerformanceMarker.$HM
    };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .set_$CG = function(n) {
        return Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix()
            .$vn("PerformanceMarker.isEnabled", n ? "1" : "0"), Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$HM = n, Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1V3 = !0, n
    };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .get_$2Lj = function() {
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.$21 &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.get_$2mF()
    };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .get_$1Dw = function() {
        return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Uu ||
        (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1Ut = Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix()
            .$F4("PerformanceMarker.isDatabaseTrackingEnabled") ===
            "1", Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Uu = !0), Microsoft.Crm.Client.Core.Framework
            .PerformanceMarker.$1Ut
    };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .set_$1Dw = function(n) {
        return Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix()
            .$vn("PerformanceMarker.isDatabaseTrackingEnabled", n ? "1" : "0"), Microsoft.Crm.Client.Core.Framework
            .PerformanceMarker.$1Ut = n, Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Uu = !0, Microsoft.Crm
            .Client.Core.Framework.PerformanceMarker.set_$CG(n), n
    };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Mk = function(n, t, i, r) {
    var u = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y(n, t, i);
    return u && (u.$4o = r, Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1tU(u)), u
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Mo = function(n, t, i, r) {
    var u, f;
    return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$2WS(n)
        ? (u = new Microsoft.Crm.Client.Core.Framework.PerformanceMarker, u.$1b = n, u
            .$ND = $0.$1(t) ? 0 : t, $0.$1(i) || u.addParameter(i), Microsoft.Crm.Client.Core.Framework
            .PerformanceMarker
            .$2XF(u), f = function() {
            u.$4o = window.performance.now();
            Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1tU(u);
            $0.$1(r) || r()
        }, window.setTimeout(f, 0), u)
        : (Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$2Zd(n), $0.$1(r) || window.setTimeout(r, 0), null)
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$2WS = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$tR)
        switch (n) {
        case"BeforeInitializeStart":
        case"LoadedInteractionReady":
        case"LoadedInitialData":
        case"RenderedInitialData":
        case"RenderedViewportInitialData":
        case"LoadedReadReady":
        case"RenderedReadReady":
        case"LoadedEditReady":
        case"RenderedEditReady":
        case"LoadedFull":
        case"RenderedFirstQueueWithData":
        case"DataSource_InitializeAfterUpdatesCheck":
        case"DataSource_SyncAllEntityAndAttributeMetadata":
        case"DataSource_SyncAllApplicationMetadata":
        case"DataSource_SyncEntityAttributeBatch":
        case"DataSource_SyncApplicationMetadataBatch":
        case"CrmSoapServiceCall":
            return!0
        }
    switch (n) {
    case"PageLoadStart":
    case"Shim Init":
    case"Style Init":
    case"JavaScript Init":
    case"RequireJs JavaScript Init":
    case"Delayed Assets Init":
    case"DataSource_CheckRemoteDataSourceUpdates":
        return!0
    }
    return n.startsWith("MailAppShim")
        ? !0
        : Microsoft.Crm.Client.Core.Framework.PerformanceMarker.get_$CG() &&
        !Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$UY
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1tU = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.PerformanceMarker.get_$2Lj() && n && n.$ND === 1) {
        var t = (++Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$Ql).toString();
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.$9O(t, "PerformanceMarker", "");
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.$9O(t, "CallId", t);
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.$9O(t, n.$1b, n.$4o);
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB
            .$9O(t,
                "SqlBatchCallId",
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.$30F());
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$BB.$2NV(t)
    }
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$QL = function() {
    var n, t, i;
    if (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
        .$c5) return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5;
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5 = new Array(0);
    n = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$tq;
    for (t in n) i = { key: t, value: n[t] }, Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5.push(i.value);
    return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$l = function() {
    return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$12a
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .$111 = function(n) { return Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$tq[n] };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1T6 = function(n, t) {
    for (var i, u = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$QL(), f = u.length, r = f - 1;
        r >= 0;
        r--
    ) if (i = u[r], i.$1b === n && i.$1RG() === t) return i;
    return null
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1ON = function() {
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$tq = {};
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$12a = 0;
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5 = null;
    Microsoft.Crm.Client.Core.Framework.$3D.$26R()
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1T7 = function(n) {
    var t;
    return!Microsoft.Crm.Client.Core.Framework.PerformanceMarker.get_$CG() ||
        Microsoft.Crm.Client.Core.Framework.$3.$A(n.$1Lo) ||
        $0.$1(Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Ko)
        ? (t = MscrmComponents.DeferredPromiseFactory(Object, Object), t.resolve())
        : ($0.$1(n.$1Cx) &&
        (n.$1Cx = MscrmComponents.DeferredPromiseFactory(Object, Object), Microsoft.Crm.Client.Core.Framework
            .PerformanceMarker.$1Ko(n.$1Lo).done(function(t) {
                var u = "", f = t, i, r;
                for (i in f) r = { key: i, value: f[i] }, u += r.key + ": " + r.value + " ";
                n.addParameter(u);
                n.$1Cx.resolve()
            })), t = n.$1Cx), t.promise()
};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .$2Zd = function(n) {
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$UY &&
        (n === "Scheduler.Run" ||
            n.startsWith("NavigationManager") ||
            n.indexOf("React") !== -1 ||
            $(window).triggerHandler("PerformanceMarkerWhileSuspended"))
    };
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.prototype = {
    $1Z: null,
    $dS: null,
    $12h: 0,
    $1Ie: null,
    $1AW: null,
    $1Cx: null,
    $1b: null,
    get_Name: function() { return this.$1b },
    set_Name: function(n) { return this.$1b = n, n },
    $4o: 0,
    get_Timestamp: function() { return this.$4o },
    set_Timestamp: function(n) { return this.$4o = n, n },
    get_$1lm: function() {
        return Math.round(Microsoft.Crm.Client.Core.Framework.$1u.$b("PageLoadStartTime") + this.$4o)
    },
    $ND: 0,
    get_MarkerType: function() { return this.$ND },
    set_MarkerType: function(n) { return this.$ND = n, n },
    $1Lo: null,
    toString: function() { return this.$2Xt(!1) },
    $2Xt: function(n) {
        var f, l, r, u, e, s, h;
        if (n && !$0.$1(this.$1AW)) return this.$1AW;
        if (!n && !$0.$1(this.$1Ie)) return this.$1Ie;
        var t = "", i = n ? "," : "      ", c = this.$3Ar().toFixed(2);
        for (t += n ? this.$12Z(c) : c, t += i, f = this.$2N2()
                .toFixed(2), t += n ? this.$12Z(f) : f, t += i,
            n && (l = Microsoft.Crm.Client.Core.Framework.$4V.toString(this.$ND), t += this.$12Z(l), t += i), r = this
                .$1b
                .split("."), t += n ? this.$12Z(r[0]) : r[0], u = 1;
            u < r.length;
            u++) e = r[u], t += i, t += n ? this.$12Z(e) : e;
        for (var a = this
                     .$B7,
            v = a.length,
            o = 0;
            o < v;
            ++o) s = a[o], h = Microsoft.Crm.Client.Core.Framework.$3.$A(s) ? "" : s, t += i, t += n ? this.$12Z(h) : h;
        return n ? this.$1AW = t : this.$1Ie = t, t
    },
    $12Z: function(n) {
        for (var i = '"', t = 0; t < n.length; t++) n.charAt(t) === '"' && (i += '"'), i += n.charAt(t);
        return i + '"'
    },
    addParameter: function(n) {
        this.$B7.push(n);
        this.$1AW = null;
        this.$1Ie = null
    },
    $1RG: function() { return $0.$1(this.$B7) ? "" : this.$B7[0] },
    $3Ar: function() {
        var t = this.$4o - this.$12h, n;
        return Microsoft.Crm.Client.Core.Framework.$1J.$l(this.$MU) >= 1
            ? (n = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$111(this.$MU.StartMarker), $0.$1(n))
            ? t
            : n.$4o - this.$12h
            : t
    },
    $2N2: function() {
        if (Microsoft.Crm.Client.Core.Framework.$1J.$l(this.$MU) >= 1) {
            var n = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$111(this.$MU.StartMarker);
            return $0.$1(n) ? 0 : this.$4o - n.$4o
        }
        return 0
    }
};
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch = function(n, t) {
    this.$5f = n;
    this.$1Ex = $0.$1(t) ? 0 : t;
    this.$1No = new Array(0)
};
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch
    .$2kk = function(n, t) { return new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch(n, t) };
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch.createRetroactiveStopwatch = function(n, t, i) {
    var r = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch(n);
    return r.start(), r.stop(), r.$LU && (r.$LU.$4o = t), r.stopMarker && (r.stopMarker.$4o = i), r
};
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch.prototype = {
    $5f: null,
    $LU: null,
    stopMarker: null,
    $1Ex: 0,
    $1No: null,
    start: function() {
        (this.$LU = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y(this.$5f, this.$1Ex), this.$LU) &&
            ($0.$1(window.msWriteProfilerMark) || window.msWriteProfilerMark(this.$5f + ",StartTM"))
    },
    stop: function() {
        var i;
        if (this.stopMarker = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y(this.$5f, this.$1Ex), this
            .stopMarker) {
            $0.$1(window.msWriteProfilerMark) || window.msWriteProfilerMark(this.$5f + ",StopTM");
            $0.$1(this.$LU) ||
                (this.stopMarker.$MU.StartMarker = this.$LU.$1Z, this.$LU.$MU.StopMarker = this.stopMarker.$1Z);
            for (var t = this.$1No, r = t.length, n = 0; n < r; ++n) i = t[n], this.addParameter(i);
            switch (this.$1Ex) {
            case 3:
                this.$2mV(Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch.$2RS)
            }
        }
    },
    addParameter: function(n) { this.stopMarker ? this.stopMarker.addParameter(n) : this.$1No.push(n) },
    get_$M7: function() { return this.$LU && this.stopMarker ? Math.round(this.stopMarker.$4o - this.$LU.$4o) : -1 },
    set_$3LC: function(n) { return this.stopMarker && (this.stopMarker.$1Lo = n), n },
    $2mV: function(n) {
        this.$LU &&
            this.stopMarker &&
            this.stopMarker.$4o - this.$LU.$4o < n &&
            (Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1lY(this.$LU.$1Z), Microsoft.Crm.Client.Core
                .Framework.PerformanceMarker.$1lY(this.stopMarker.$1Z), this.$LU = null, this.stopMarker = null)
    }
};
Microsoft.Crm.Client.Core.Framework.$N9 = function(n, t) {
    this.$Ml = n;
    this.$I = t;
    this.$1Po = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4)
};
Microsoft.Crm.Client.Core.Framework.$N9.prototype = {
    $I: null,
    $Ml: 0,
    $1Po: null,
    get_$2gv: function() { return this.$1Po.promise() },
    $6j: function() { this.$1Po.resolve() }
};
Microsoft.Crm.Client.Core.Framework.$N8 = function(n, t) {
    this.$1sg = t;
    this.$1Jv = null;
    this.$1Ju = 0;
    this.$208 = n;
    this.$1GO = !1
};
Microsoft.Crm.Client.Core.Framework.$N8.prototype = {
    $1sg: null,
    $1Jv: null,
    $1Ju: 0,
    $208: null,
    $1GO: !1,
    get_$tY: function() { return this.$1dH(), this.$1sg },
    get_$W8: function() { return!this.$1GO },
    $209: function() { return this.$1dH(), this.$208() },
    $1I8: function(n) {
        this.$1dH();
        this.$1Jv = n;
        this.$1Ju = 2
    },
    $15V: function(n) {
        this.$1dH();
        this.$1Jv = n;
        this.$1Ju = 1
    },
    $2mE: function() { this.$1GO = !0 },
    $1dH: function() { if (this.$1GO) throw Error.invalidOperation("Job info is no longer valid"); }
};
Microsoft.Crm.Client.Core.Framework.$81 = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.$81.initializeBase(this, [i, r]);
    this.$11 = n;
    this.$ip = t;
    this.$a3 = null;
    this.$hl(i);
    this.$Gb(u);
    Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(this, "job-scheduled", "info", null, null)
};
Microsoft.Crm.Client.Core.Framework.$81.prototype = {
    $11: 0,
    $16: null,
    $ip: null,
    $a3: null,
    get_$89: function() { return this.$16.$1Og },
    get_$LM: function() { return Microsoft.Crm.Client.Core.Framework.$N4.prototype.get_$LM.call(this) },
    set_$LM: function(n) {
        if (n !== Microsoft.Crm.Client.Core.Framework.$N4.prototype.get_$LM.call(this)) {
            var t = Microsoft.Crm.Client.Core.Framework.Scheduler.$1iu(n);
            this.$16.$hl(this, t)
        }
        return n
    },
    get_Owner: function() { return this.$a3 },
    set_Owner: function(n) {
        return this.$a3 !== n && (this.$a3 && this.$a3.$3KT(this), this.$a3 = n, this.$a3 && this.$a3.$2bT(this)), n
    },
    $Ux: function() { this.$16.$Ux(this) },
    $a5: function() { this.$16.$a5(this) },
    $vD: function() { this.$16.$vD(this) },
    $Gb: function(n, t, i) {
        $0.$1(this.$16) ||
            Microsoft.Crm.Client.Core.Framework.Trace
            .logInfo(1025, "Transitioning job({0}) from '{1}' to '{2}'", this.$11, this.$16.$I, n.$I);
        this.$16 = n;
        this.$16.$2mm(this, t, i)
    },
    $hl: function(n) {
        this.get_$LM() !== n &&
            Microsoft.Crm.Client.Core.Framework.Scheduler
            .$JV(this, "job-priority-changed", "info", this.get_$LM().toString(), n.toString());
        Microsoft.Crm.Client.Core.Framework.$N4.prototype.set_$LM.call(this, n)
    },
    $2B: function(n) { this.$16.$2B(this, n) },
    $2As: function(n) { return this.$16.$2As(this, n) },
    $1iI: function(n) { return this.$16.$1iI(this, n) }
};
Microsoft.Crm.Client.Core.Framework.$NB = function(n) {
    this.$I = n;
    this.$1Og = !1
};
Microsoft.Crm.Client.Core.Framework.$NB.prototype = {
    $I: null,
    $1Og: !1,
    $2mm: function(n) { this.$mV(n) },
    $2B: function(n) { this.$mV(n) },
    $2As: function(n) { return this.$mV(n), null },
    $1iI: function(n) { return this.$mV(n), null },
    $Ux: function(n) { this.$mV(n) },
    $a5: function(n) { this.$mV(n) },
    $vD: function(n) { this.$mV(n) },
    $hl: function(n) { this.$mV(n) },
    $mV: function(n) {
        throw Error.invalidOperation("Illegal call by job(" + n.$11.toString() + ") in state: " + this.$I);
    }
};
Microsoft.Crm.Client.Core.Framework.$4K = function() {
    Microsoft.Crm.Client.Core.Framework.$4K.initializeBase(this, ["state_blocked"])
};
Microsoft.Crm.Client.Core.Framework.$4K.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4K.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4K.$D = new Microsoft.Crm.Client.Core.Framework.$4K), Microsoft.Crm.Client
        .Core.Framework.$4K.$D
};
Microsoft.Crm.Client.Core.Framework.$4K.prototype = {
    $2mm: function(n, t, i) {
        var r, u, f, e;
        Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-blocked", "StartTM", null, null);
        r = t;
        u = i;
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$4N.get_$5());
        f = this;
        e = this;
        r.then(function(t) {
                Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-blocked", "StopTM", null, null);
                var i = n.$1iI(t);
                n.$Gb(i, t, u)
            },
            function() {
                Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-blocked", "StopTM", null, null);
                n.$Gb(Microsoft.Crm.Client.Core.Framework.$2w.get_$5())
            })
    }
};
Microsoft.Crm.Client.Core.Framework.$4L = function() {
    Microsoft.Crm.Client.Core.Framework.$4L.initializeBase(this, ["state_blocked_canceled"])
};
Microsoft.Crm.Client.Core.Framework.$4L.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4L.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4L.$D = new Microsoft.Crm.Client.Core.Framework.$4L), Microsoft.Crm.Client
        .Core.Framework.$4L.$D
};
Microsoft.Crm.Client.Core.Framework.$4L.prototype = {
    $2mm: function(n) { n.$ip = null },
    $1iI: function() { return Microsoft.Crm.Client.Core.Framework.$2w.get_$5() },
    $Ux: function() {},
    $a5: function() {},
    $vD: function() {},
    $hl: function() {}
};
Microsoft.Crm.Client.Core.Framework.$5B = function() {
    Microsoft.Crm.Client.Core.Framework.$5B.initializeBase(this, ["state_blocked_paused"])
};
Microsoft.Crm.Client.Core.Framework.$5B.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$5B.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$5B.$D = new Microsoft.Crm.Client.Core.Framework.$5B), Microsoft.Crm.Client
        .Core.Framework.$5B.$D
};
Microsoft.Crm.Client.Core.Framework.$5B.prototype = {
    $2mm: function(n, t, i) {
        var r, u, f, e;
        Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-blocked", "StartTM", null, null);
        r = t;
        u = i;
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$4M.get_$5());
        f = this;
        e = this;
        r.then(function(t) {
                Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-blocked", "StopTM", null, null);
                var i = n.$1iI(t);
                n.$Gb(i, t, u)
            },
            function() {
                Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-blocked", "StopTM", null, null);
                n.$Gb(Microsoft.Crm.Client.Core.Framework.$2w.get_$5())
            })
    }
};
Microsoft.Crm.Client.Core.Framework.$4M = function() {
    Microsoft.Crm.Client.Core.Framework.$4M.initializeBase(this, ["state_blocked_paused_waiting"])
};
Microsoft.Crm.Client.Core.Framework.$4M.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4M.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4M.$D = new Microsoft.Crm.Client.Core.Framework.$4M), Microsoft.Crm.Client
        .Core.Framework.$4M.$D
};
Microsoft.Crm.Client.Core.Framework.$4M.prototype = {
    $2mm: function() {},
    $1iI: function(n, t) {
        return $0.$1(t)
            ? Microsoft.Crm.Client.Core.Framework.$2x.get_$5()
            : Microsoft.Crm.Client.Core.Framework.$4O.get_$5()
    },
    $Ux: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$4L.get_$5()) },
    $a5: function() {},
    $vD: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$4N.get_$5()) },
    $hl: function(n, t) { n.$hl(t) }
};
Microsoft.Crm.Client.Core.Framework.$4N = function() {
    Microsoft.Crm.Client.Core.Framework.$4N.initializeBase(this, ["state_blocked_waiting"])
};
Microsoft.Crm.Client.Core.Framework.$4N.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4N.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4N.$D = new Microsoft.Crm.Client.Core.Framework.$4N), Microsoft.Crm.Client
        .Core.Framework.$4N.$D
};
Microsoft.Crm.Client.Core.Framework.$4N.prototype = {
    $2mm: function() {},
    $1iI: function(n, t) {
        return $0.$1(t)
            ? Microsoft.Crm.Client.Core.Framework.$2x.get_$5()
            : Microsoft.Crm.Client.Core.Framework.$3r.get_$5()
    },
    $Ux: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$4L.get_$5()) },
    $a5: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$4M.get_$5()) },
    $vD: function() {},
    $hl: function(n, t) { n.$hl(t) }
};
Microsoft.Crm.Client.Core.Framework.$2w = function() {
    Microsoft.Crm.Client.Core.Framework.$2w.initializeBase(this, ["state_canceled"])
};
Microsoft.Crm.Client.Core.Framework.$2w.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$2w.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$2w.$D = new Microsoft.Crm.Client.Core.Framework.$2w), Microsoft.Crm.Client
        .Core.Framework.$2w.$D
};
Microsoft.Crm.Client.Core.Framework.$2w.prototype = {
    $2mm: function(n) {
        Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-canceled", "info", null, null);
        n.$v7();
        n.$ip = null;
        n.set_Owner(null)
    },
    $Ux: function() {},
    $a5: function() {},
    $vD: function() {},
    $hl: function() {}
};
Microsoft.Crm.Client.Core.Framework.$2x = function() {
    Microsoft.Crm.Client.Core.Framework.$2x.initializeBase(this, ["state_completed"]);
    this.$1Og = !0
};
Microsoft.Crm.Client.Core.Framework.$2x.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$2x.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$2x.$D = new Microsoft.Crm.Client.Core.Framework.$2x), Microsoft.Crm.Client
        .Core.Framework.$2x.$D
};
Microsoft.Crm.Client.Core.Framework.$2x.prototype = {
    $2mm: function(n) {
        n.$ip = null;
        n.set_Owner(null);
        Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-completed", "info", null, null)
    },
    $Ux: function() {},
    $a5: function() {},
    $vD: function() {},
    $hl: function() {}
};
Microsoft.Crm.Client.Core.Framework.$3r = function() {
    Microsoft.Crm.Client.Core.Framework.$3r.initializeBase(this, ["state_cooperative_yield"])
};
Microsoft.Crm.Client.Core.Framework.$3r.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$3r.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$3r.$D = new Microsoft.Crm.Client.Core.Framework.$3r), Microsoft.Crm.Client
        .Core.Framework.$3r.$D
};
Microsoft.Crm.Client.Core.Framework.$3r.prototype = {
    $2mm: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-yielded", "info", null, null);
        var r = t, u = i;
        u === n.get_$LM()
            ? Microsoft.Crm.Client.Core.Framework.Scheduler.$2bU(n, n.get_$LM())
            : Microsoft.Crm.Client.Core.Framework.Scheduler.$1hL(n, n.get_$LM());
        n.$ip = r;
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$3t.get_$5())
    }
};
Microsoft.Crm.Client.Core.Framework.$4O = function() {
    Microsoft.Crm.Client.Core.Framework.$4O.initializeBase(this, ["state_cooperative_yield_paused"])
};
Microsoft.Crm.Client.Core.Framework.$4O.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4O.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4O.$D = new Microsoft.Crm.Client.Core.Framework.$4O), Microsoft.Crm.Client
        .Core.Framework.$4O.$D
};
Microsoft.Crm.Client.Core.Framework.$4O.prototype = {
    $2mm: function(n, t) {
        n.$ip = t;
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$4P.get_$5())
    }
};
Microsoft.Crm.Client.Core.Framework.$5C = function() {
    Microsoft.Crm.Client.Core.Framework.$5C.initializeBase(this, ["state_created"])
};
Microsoft.Crm.Client.Core.Framework.$5C.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$5C.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$5C.$D = new Microsoft.Crm.Client.Core.Framework.$5C), Microsoft.Crm.Client
        .Core.Framework.$5C.$D
};
Microsoft.Crm.Client.Core.Framework.$5C.prototype = {
    $2mm: function(n) {
        Microsoft.Crm.Client.Core.Framework.Scheduler.$1hL(n, n.get_$LM());
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$3t.get_$5())
    }
};
Microsoft.Crm.Client.Core.Framework.$4P = function() {
    Microsoft.Crm.Client.Core.Framework.$4P.initializeBase(this, ["state_paused"])
};
Microsoft.Crm.Client.Core.Framework.$4P.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4P.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4P.$D = new Microsoft.Crm.Client.Core.Framework.$4P), Microsoft.Crm.Client
        .Core.Framework.$4P.$D
};
Microsoft.Crm.Client.Core.Framework.$4P.prototype = {
    $2mm: function(n) {
        Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-paused", "info", null, null);
        n.$v7()
    },
    $Ux: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$2w.get_$5()) },
    $a5: function() {},
    $vD: function(n) {
        Microsoft.Crm.Client.Core.Framework.Scheduler.$JV(n, "job-resumed", "info", null, null);
        Microsoft.Crm.Client.Core.Framework.Scheduler.$1hL(n, n.get_$LM());
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$3t.get_$5())
    },
    $hl: function(n, t) { n.$hl(t) }
};
Microsoft.Crm.Client.Core.Framework.$5D = function() {
    Microsoft.Crm.Client.Core.Framework.$5D.initializeBase(this, ["state_running"])
};
Microsoft.Crm.Client.Core.Framework.$5D.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$5D.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$5D.$D = new Microsoft.Crm.Client.Core.Framework.$5D), Microsoft.Crm.Client
        .Core.Framework.$5D.$D
};
Microsoft.Crm.Client.Core.Framework.$5D.prototype = {
    $2mm: function(n, t) {
        var e = t, r, u, i, f;
        n.$v7();
        r = n.get_$LM();
        u = n.$ip;
        n.$ip = null;
        i = new Microsoft.Crm.Client.Core.Framework.$N8(e, n);
        try {
            u(i)
        } finally {
            i.$2mE()
        }
        f = n.$2As(i.$1Ju);
        n.$Gb(f, i.$1Jv, r)
    },
    $2As: function(n, t) {
        switch (t) {
        case 0:
            return Microsoft.Crm.Client.Core.Framework.$2x.get_$5();
        case 1:
            return Microsoft.Crm.Client.Core.Framework.$3r.get_$5();
        case 2:
        default:
            return Microsoft.Crm.Client.Core.Framework.$4K.get_$5()
        }
    },
    $Ux: function(n) {
        Microsoft.Crm.Client.Core.Framework.Scheduler.$ez = !0;
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$3s.get_$5())
    },
    $a5: function(n) {
        Microsoft.Crm.Client.Core.Framework.Scheduler.$ez = !0;
        n.$Gb(Microsoft.Crm.Client.Core.Framework.$4Q.get_$5())
    },
    $vD: function() {},
    $hl: function(n, t) { n.$hl(t) }
};
Microsoft.Crm.Client.Core.Framework.$3s = function() {
    Microsoft.Crm.Client.Core.Framework.$3s.initializeBase(this, ["state_running_canceled"])
};
Microsoft.Crm.Client.Core.Framework.$3s.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$3s.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$3s.$D = new Microsoft.Crm.Client.Core.Framework.$3s), Microsoft.Crm.Client
        .Core.Framework.$3s.$D
};
Microsoft.Crm.Client.Core.Framework.$3s.prototype = {
    $2mm: function() {},
    $2As: function(n, t) {
        switch (t) {
        case 0:
            return Microsoft.Crm.Client.Core.Framework.$2x.get_$5();
        case 1:
        case 2:
        default:
            return Microsoft.Crm.Client.Core.Framework.$2w.get_$5()
        }
    },
    $Ux: function() {},
    $a5: function() {},
    $vD: function() {},
    $hl: function() {}
};
Microsoft.Crm.Client.Core.Framework.$4Q = function() {
    Microsoft.Crm.Client.Core.Framework.$4Q.initializeBase(this, ["state_running_paused"])
};
Microsoft.Crm.Client.Core.Framework.$4Q.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$4Q.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$4Q.$D = new Microsoft.Crm.Client.Core.Framework.$4Q), Microsoft.Crm.Client
        .Core.Framework.$4Q.$D
};
Microsoft.Crm.Client.Core.Framework.$4Q.prototype = {
    $2mm: function() {},
    $2As: function(n, t) {
        switch (t) {
        case 0:
            return Microsoft.Crm.Client.Core.Framework.$2x.get_$5();
        case 1:
            return Microsoft.Crm.Client.Core.Framework.$4O.get_$5();
        case 2:
        default:
            return Microsoft.Crm.Client.Core.Framework.$5B.get_$5()
        }
    },
    $Ux: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$3s.get_$5()) },
    $a5: function() {},
    $vD: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$5E.get_$5()) },
    $hl: function(n, t) { n.$hl(t) }
};
Microsoft.Crm.Client.Core.Framework.$5E = function() {
    Microsoft.Crm.Client.Core.Framework.$5E.initializeBase(this, ["state_running_resumed"])
};
Microsoft.Crm.Client.Core.Framework.$5E.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$5E.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$5E.$D = new Microsoft.Crm.Client.Core.Framework.$5E), Microsoft.Crm.Client
        .Core.Framework.$5E.$D
};
Microsoft.Crm.Client.Core.Framework.$5E.prototype = {
    $2mm: function() {},
    $2As: function(n, t) {
        switch (t) {
        case 0:
            return Microsoft.Crm.Client.Core.Framework.$2x.get_$5();
        case 1:
            return Microsoft.Crm.Client.Core.Framework.$3r.get_$5();
        case 2:
        default:
            return Microsoft.Crm.Client.Core.Framework.$4K.get_$5()
        }
    },
    $Ux: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$3s.get_$5()) },
    $a5: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$4Q.get_$5()) },
    $vD: function() {},
    $hl: function(n, t) { n.$hl(t) }
};
Microsoft.Crm.Client.Core.Framework.$3t = function() {
    Microsoft.Crm.Client.Core.Framework.$3t.initializeBase(this, ["state_scheduled"])
};
Microsoft.Crm.Client.Core.Framework.$3t.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$3t.$D) &&
        (Microsoft.Crm.Client.Core.Framework.$3t.$D = new Microsoft.Crm.Client.Core.Framework.$3t), Microsoft.Crm.Client
        .Core.Framework.$3t.$D
};
Microsoft.Crm.Client.Core.Framework.$3t.prototype = {
    $2mm: function() { Microsoft.Crm.Client.Core.Framework.Scheduler.$1Ia(!1) },
    $2B: function(n, t) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$5D.get_$5(), t, null) },
    $Ux: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$2w.get_$5()) },
    $a5: function(n) { n.$Gb(Microsoft.Crm.Client.Core.Framework.$4P.get_$5()) },
    $vD: function() {},
    $hl: function(n, t) { n.get_$LM() !== t && (n.$hl(t), n.$a5(), n.$vD()) }
};
Microsoft.Crm.Client.Core.Framework.$OI = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$OI.initializeBase(this, [n, t])
};
Microsoft.Crm.Client.Core.Framework.$OI.prototype = {
    $1wY: null,
    $1FM: null,
    $36K: function(n) {
        var t = this.$1FM;
        return this.$1FM = n, n.$1FM = t, n.$1wY = this, $0.$1(t) || (t.$1wY = n), n
    }
};
Microsoft.Crm.Client.Core.Framework.$NA = function() { this.$12H = {} };
Microsoft.Crm.Client.Core.Framework.$NA.prototype = {
    $12H: null,
    cancelAll: function() {
        var i = this.$12H, n, t, r;
        this.$12H = {};
        n = i;
        for (t in n) r = { key: t, value: n[t] }, i[r.key].$Ux()
    },
    $2bT: function(n) { this.$12H[n.$11.toString()] = n },
    $3KT: function(n) { delete this.$12H[n.$11.toString()] }
};
Microsoft.Crm.Client.Core.Framework.Scheduler = function() {};
Microsoft.Crm.Client.Core.Framework.Scheduler.$$cctor = function() {
    Microsoft.Crm.Client.Core.Framework.Scheduler.$uC = !$0.$1(window.performance) && window.performance.now
        ? window.performance.now.bind(window.performance)
        : Date.now;
    $0.$1(window.msWriteProfilerMark) || (Microsoft.Crm.Client.Core.Framework.Scheduler.$1dy = !0);
    Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Framework.$N9));
    Microsoft.Crm.Client.Core.Framework.Scheduler.$gp = [
        new Microsoft.Crm.Client.Core.Framework.$OI(15, "max"), new Microsoft.Crm.Client.Core.Framework.$OI(14, "14"),
        new Microsoft.Crm.Client.Core.Framework.$OI(13, "high"), new Microsoft.Crm.Client.Core.Framework.$OI(12, "12"),
        new Microsoft.Crm.Client.Core.Framework.$OI(11, "11"), new Microsoft.Crm.Client.Core.Framework.$OI(10, "10"),
        new Microsoft.Crm.Client.Core.Framework.$OI(9, "aboveNormal"), new Microsoft.Crm.Client.Core.Framework
        .$OI(8, "8"), new Microsoft.Crm.Client.Core.Framework.$OI(7, "7"), new Microsoft.Crm.Client.Core.Framework
        .$OI(6, "6"), new Microsoft.Crm.Client.Core.Framework.$OI(5, "5"), new Microsoft.Crm.Client.Core.Framework
        .$OI(4, "4"), new Microsoft.Crm.Client.Core.Framework.$OI(3, "3"), new Microsoft.Crm.Client.Core.Framework
        .$OI(2, "2"), new Microsoft.Crm.Client.Core.Framework.$OI(1, "1"), new Microsoft.Crm.Client.Core.Framework
        .$OI(0, "normal"), new Microsoft.Crm.Client.Core.Framework.$OI(-1, "-1"), new Microsoft.Crm.Client.Core
        .Framework.$OI(-2, "-2"), new Microsoft.Crm.Client.Core.Framework.$OI(-3, "-3"), new Microsoft.Crm.Client.Core
        .Framework.$OI(-4, "-4"), new Microsoft.Crm.Client.Core.Framework.$OI(-5, "-5"), new Microsoft.Crm.Client.Core
        .Framework.$OI(-6, "-6"), new Microsoft.Crm.Client.Core.Framework.$OI(-7, "-7"), new Microsoft.Crm.Client.Core
        .Framework.$OI(-8, "-8"), new Microsoft.Crm.Client.Core.Framework.$OI(-9, "belowNormal"), new Microsoft.Crm
        .Client.Core.Framework.$OI(-10, "-10"), new Microsoft.Crm.Client.Core.Framework.$OI(-11, "-11"), new Microsoft
        .Crm.Client.Core.Framework.$OI(-12, "-12"), new Microsoft.Crm.Client.Core.Framework.$OI(-13, "idle"),
        new Microsoft.Crm.Client.Core.Framework.$OI(-14, "-14"), new Microsoft.Crm.Client.Core.Framework
        .$OI(-15, "min"), new Microsoft.Crm.Client.Core.Framework.$OI(-16, "<TAIL>")
    ];
    for (var n = 1;
        n < Microsoft.Crm.Client.Core.Framework.Scheduler.$gp.length;
        n++
    )
        Microsoft.Crm.Client.Core.Framework.Scheduler.$gp[n - 1]
            .$tE(Microsoft.Crm.Client.Core.Framework.Scheduler.$gp[n]), Microsoft.Crm.Client.Core.Framework.Scheduler
            .$gp[n - 1].$36K(Microsoft.Crm.Client.Core.Framework.Scheduler.$gp[n])
};
Microsoft.Crm.Client.Core.Framework.Scheduler.get_$299 = function() {
    return Microsoft.Crm.Client.Core.Framework.Scheduler.$14D ? Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm : -15
};
Microsoft.Crm.Client.Core.Framework.Scheduler
    .get_IsPaused = function() { return Microsoft.Crm.Client.Core.Framework.Scheduler.$mv };
Microsoft.Crm.Client.Core.Framework.Scheduler.get_$7P = function() {
    return Microsoft.Crm.Client.Core.Framework.$10.$8F || Microsoft.Crm.Client.Core.Framework.Scheduler.$I2
};
Microsoft.Crm.Client.Core.Framework.Scheduler.set_$1Mw = function(n) {
    return Microsoft.Crm.Client.Core.Framework.Scheduler
        .$qe = n, Microsoft.Crm.Client.Core.Framework.Scheduler.$qe &&
        Microsoft.Crm.Client.Core.Framework.Scheduler.$1Ia(!1), n
};
Microsoft.Crm.Client.Core.Framework.Scheduler
    .get_HighPriorityBrowserAsyncWorkCount = function() { return Microsoft.Crm.Client.Core.Framework.Scheduler.$MO };
Microsoft.Crm.Client.Core.Framework.Scheduler.set_HighPriorityBrowserAsyncWorkCount = function(n) {
    var t = Microsoft.Crm.Client.Core.Framework.Scheduler.$MO;
    return Microsoft.Crm.Client.Core.Framework.Scheduler.$MO = Math
        .max(n, 0), Microsoft.Crm.Client.Core.Framework.Scheduler.$MO
        ? Microsoft.Crm.Client.Core.Framework.Scheduler.$MO === 1 &&
        Microsoft.Crm.Client.Core.Framework.Scheduler.$2W2(!0)
        : Microsoft.Crm.Client.Core.Framework.Scheduler
        .$2W2(!1), Microsoft.Crm.Client.Core.Framework.Scheduler.$MO > t &&
        (Microsoft.Crm.Client.Core.Framework.Scheduler.$1sp = Microsoft.Crm.Client.Core.Framework.Scheduler.$uC()), n
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$2R4 = function(n) {
    var t;
    (t = Microsoft.Crm.Client.Core.Framework.Scheduler)
        .set_HighPriorityBrowserAsyncWorkCount(Microsoft.Crm.Client.Core.Framework.Scheduler.$MO + 1);
    n.always(function() {
        var n;
        (n = Microsoft.Crm.Client.Core.Framework.Scheduler)
            .set_HighPriorityBrowserAsyncWorkCount(Microsoft.Crm.Client.Core.Framework.Scheduler.$MO - 1)
    })
};
Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule = function(n, t, i) {
    var r = ++Microsoft.Crm.Client.Core.Framework.Scheduler.$2Iz;
    return t = Microsoft.Crm.Client.Core.Framework.Scheduler.$1iu(t), new Microsoft.Crm.Client.Core.Framework
        .$81(r, n, t, i, Microsoft.Crm.Client.Core.Framework.$5C.get_$5())
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$2U4 = function(n, t, i, r) {
    var u = MscrmComponents.DeferredPromiseFactory(n, Microsoft.Crm.Client.Core.Framework.$4);
    return t.then(function(n) {
            Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule(function() { u.resolve(n) }, i, r)
        },
        function(n) { Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule(function() { u.reject(n) }, i, r) }), u
        .promise()
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$rP = function() { return new Microsoft.Crm.Client.Core.Framework.$NA };
Microsoft.Crm.Client.Core.Framework.Scheduler.$2W2 = function(n) {
    !Microsoft.Crm.Client.Core.Framework.Scheduler.$mv &&
        n &&
        (Microsoft.Crm.Client.Core.Framework.Scheduler.$13y = new Microsoft.Crm.Client.Core.Framework
            .PerformanceStopwatch("Scheduler.Pause"), Microsoft.Crm.Client.Core.Framework.Scheduler.$13y
            .start(), Microsoft.Crm.Client.Core.Framework.Scheduler.$1YZ = Microsoft.Crm.Client.Core.Framework.Scheduler
            .get_$299(), Microsoft.Crm.Client.Core.Framework.Scheduler.$1G2 === -1 &&
        (Microsoft.Crm.Client.Core.Framework.Scheduler.$1G2 = window
            .setInterval(Microsoft.Crm.Client.Core.Framework.Scheduler.$3H3, 500)));
    Microsoft.Crm.Client.Core.Framework.Scheduler.$mv = n;
    Microsoft.Crm.Client.Core.Framework.Scheduler.$mv ||
    ($0.$1(Microsoft.Crm.Client.Core.Framework.Scheduler.$13y) ||
    (Microsoft.Crm.Client.Core.Framework.Scheduler.$13y.stop(), Microsoft.Crm.Client.Core.Framework.Scheduler
        .$13y = null), Microsoft.Crm.Client.Core.Framework.Scheduler.$1YZ = -16, Microsoft.Crm.Client.Core.Framework
        .Scheduler.$1Ia(!0))
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$3H3 = function() {
    var n = Microsoft.Crm.Client.Core.Framework.Scheduler.$uC() - Microsoft.Crm.Client.Core.Framework.Scheduler.$1sp;
    Microsoft.Crm.Client.Core.Framework.Scheduler.$mv
        ? n > 400 &&
        (Microsoft.Crm.Client.Core.Framework.Trace
            .logWarning(1025,
                "Scheduler pause exceeded maximum allowed duration, resuming pump. Count was {0}, paused for {1}.",
                Microsoft.Crm.Client.Core.Framework.Scheduler.$MO,
                n), Microsoft.Crm.Client.Core.Framework.Scheduler.set_HighPriorityBrowserAsyncWorkCount(0))
        : n > 2e3 &&
        (window.clearInterval(Microsoft.Crm.Client.Core.Framework.Scheduler.$1G2), Microsoft.Crm.Client.Core.Framework
            .Scheduler.$1G2 = -1)
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$1a8 = function(n, t) {
    var r = ++Microsoft.Crm.Client.Core.Framework.Scheduler.$2Iy, i;
    return Microsoft.Crm.Client.Core.Framework.$3
        .$A(t) &&
        (t = String.format("Drain request {0}", r)), $0.$1(n) && (n = -15), n = Microsoft.Crm.Client.Core.Framework
        .Scheduler.$1iu(n), i = new Microsoft.Crm.Client.Core.Framework.$N9(n, t), Microsoft.Crm.Client.Core.Framework
        .Scheduler.$Nx.add(i), Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_Count() === 1 &&
    (Microsoft.Crm.Client.Core.Framework.Scheduler.$oY("drain",
        "StartTM",
        t,
        Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(n)
        .$I), n > Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm &&
    (Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm = n, Microsoft.Crm.Client.Core.Framework.Scheduler
        .$ez = !0)), Microsoft.Crm.Client.Core.Framework.Scheduler.$14D ||
        Microsoft.Crm.Client.Core.Framework.Scheduler.$1Ia(!1), i.get_$2gv()
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$1kd = function() {
    return Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_Count() > 0
        ? Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_$H(0).$Ml
        : -16
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$3C9 = function() {
    if (Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_Count() > 0) {
        var n = Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_$H(0);
        Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.removeAt(0);
        Microsoft.Crm.Client.Core.Framework.Scheduler.$oY("drain",
            "StopTM",
            n.$I,
            Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(n.$Ml).$I);
        n.$6j()
    }
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$2Ns = function() {
    var t = !1, n;
    if (Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx
        .get_Count() >
        0)
        for (n = Microsoft.Crm.Client.Core.Framework.Scheduler.$1kd();
            n !== -16 && n > Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm;
        )
            Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm = n, Microsoft.Crm.Client.Core.Framework.Scheduler
                .$3C9(), t = !0, n = Microsoft.Crm.Client.Core.Framework.Scheduler.$1kd();
    return t
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$2WZ = function() {
    if (!Microsoft.Crm.Client.Core.Framework.Scheduler.get_$7P()) return!1;
    var n = Microsoft.Crm.Client.Core.Framework.Scheduler.$1kd();
    return n === -16 ? !1 : Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm >= n
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$2Qy = function(n, t, i) {
    return $0.$1(i)
        ? $0.$1(t) ? $0.$1(n) ? "" : "(" + n + ")" : "(" + n + ";" + t + ")"
        : "(" + n + ";" + t + ";" + i + ")"
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$oY = function(n, t, i, r) {
    var u = "MoCA.Scheduler:" + n + Microsoft.Crm.Client.Core.Framework.Scheduler.$2Qy(i, r, null) + "," + t;
    Microsoft.Crm.Client.Core.Framework.Scheduler.$1dy && window.msWriteProfilerMark(u);
    Microsoft.Crm.Client.Core.Framework.Trace.logInfo(1025, u)
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$JV = function(n, t, i, r, u) {
    var e = !Microsoft.Crm.Client.Core.Framework.$3.$A(n.$I) ||
            !Microsoft.Crm.Client.Core.Framework.$3.$A(r) ||
            !Microsoft.Crm.Client.Core.Framework.$3.$A(u),
        f = "MoCA.Scheduler:" +
            t +
            ":" +
            n.$11 +
            (e ? Microsoft.Crm.Client.Core.Framework.Scheduler.$2Qy(n.$I, r, u) : "") +
            "," +
            i;
    Microsoft.Crm.Client.Core.Framework.Scheduler.$1dy && window.msWriteProfilerMark(f);
    Microsoft.Crm.Client.Core.Framework.Trace.logInfo(1025, f)
};
Microsoft.Crm.Client.Core.Framework.Scheduler.resetScheduler = function() {
    for (var n = Microsoft.Crm.Client.Core.Framework.Scheduler
                 .$gp[0],
        t;
        !$0.$1(n) && n.get_$LM() > -16;
    ) t = n, n = n.$8L, Microsoft.Crm.Client.Core.Framework.$81.isInstanceOfType(t) && t.$Ux();
    Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm = -15;
    Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm = -16
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$BA = function() {
    var n = "Jobs:\n",
        i = Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm),
        r = 0,
        u,
        t;
    for (Microsoft.Crm.Client.Core.Framework.Scheduler.$U2 &&
        (n += Microsoft.Crm.Client.Core.Framework.Scheduler
            .$2Mr(Microsoft.Crm.Client.Core.Framework.Scheduler.$U2, !0), r++);
        i.get_$LM() >= -15;
    )
        Microsoft.Crm.Client.Core.Framework.$81.isInstanceOfType(i) &&
            (n += Microsoft.Crm.Client.Core.Framework.Scheduler.$2Mr(i, !1), r++), i = i.$8L;
    if (r || (n += "     None\n"), n += "Drain requests:\n", u = Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx
        .get_Count(), u > 0)
        for (t = 0; t < u; t++)
            n += "     " +
                (t ? " " : "*") +
                "priority: " +
                Microsoft.Crm.Client.Core.Framework.Scheduler
                .$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_$H(t).$Ml).$I +
                ", name: " +
                Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_$H(t).$I +
                "\n";
    else n += "     None\n";
    return n
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$2Mr = function(n, t) {
    return"    " +
        (t ? "*" : " ") +
        "id: " +
        n.$11 +
        ", priority: " +
        Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(n.get_$LM()).$I +
        (Microsoft.Crm.Client.Core.Framework.$3.$A(n.$I) ? ", name: " + n.$I : "") +
        "\n"
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$BU = function() {
    var u, s, r;
    Microsoft.Crm.Client.Core.Framework.Scheduler.$14D = !0;
    Microsoft.Crm.Client.Core.Framework.Scheduler.$oY("timeslice", "StartTM", null, null);
    var t = !1, f = !0, n = null, i = -17, h = !1, e = !1, o = !1;
    $0.$1(Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm).$8L) ||
    (Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm = Microsoft.Crm.Client.Core.Framework.Scheduler
        .$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm).$8L.get_$LM());
    Microsoft.Crm.Client.Core.Framework.Scheduler.$ez = !1;
    u = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("Scheduler.Run");
    try {
        u.start();
        for (var l = Microsoft.Crm.Client.Core.Framework.Scheduler.$uC(),
            a = l + 20,
            c = function() {
                return(h = !1, Microsoft.Crm.Client.Core.Framework.Scheduler.$ez)
                    ? !0
                    : e
                    ? !0
                    : !Microsoft.Crm.Client.Core.Framework.Scheduler.$qe &&
                    (o || Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm <= -13)
                    ? !0
                    : Microsoft.Crm.Client.Core.Framework.Scheduler.get_$7P() &&
                    !Microsoft.Crm.Client.Core.Framework.Scheduler.$2WZ()
                    ? !0
                    : Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx.get_Count() > 0
                    ? !1
                    : Microsoft.Crm.Client.Core.Framework.Scheduler.$uC() > a ? (h = !0, !0) : !1
            };
            Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm >= -15 && !c();
        ) {
            t = !1;
            n = Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm)
                .$8L;
            do
                Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm = n
                    .get_$LM(), Microsoft.Crm.Client.Core.Framework.$81.isInstanceOfType(n)
                    ? (i !== n.get_$LM() &&
                    (i !== -17 &&
                            Microsoft.Crm.Client.Core.Framework.Scheduler
                            .$oY("priority", "StopTM", Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(i).$I, null),
                        Microsoft.Crm.Client.Core.Framework.Scheduler
                            .$oY("priority",
                                "StartTM",
                                Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(n.get_$LM()).$I,
                                null), i = n.get_$LM()), t = !0, f = !1, Microsoft.Crm.Client.Core.Framework.Scheduler
                        .$U2 = n, Microsoft.Crm.Client.Core.Framework.Scheduler
                        .$JV(Microsoft.Crm.Client.Core.Framework.Scheduler.$U2,
                            "job-running",
                            "StartTM",
                            Microsoft.Crm.Client.Core.Framework.Scheduler
                            .$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm).$I,
                            null), Microsoft.Crm.Client.Core.Framework.Scheduler.$U2.$2B(c), Microsoft.Crm.Client.Core
                        .Framework.Scheduler.$JV(Microsoft.Crm.Client.Core.Framework.Scheduler.$U2,
                            "job-running",
                            "StopTM",
                            Microsoft.Crm.Client.Core.Framework.Scheduler
                            .$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm).$I,
                            null), Microsoft.Crm.Client.Core.Framework.Scheduler.$U2 = null, f = !0)
                    : (Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm = n
                        .get_$LM(), e = Microsoft.Crm.Client.Core.Framework.Scheduler.$mv &&
                        Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm <
                        Microsoft.Crm.Client.Core.Framework.Scheduler
                        .$1YZ, o = Microsoft.Crm.Client.Core.Framework.Scheduler
                        .$Dm ===
                        -13, t = Microsoft.Crm.Client.Core.Framework.Scheduler.$2Ns() ||
                        e ||
                        o && !Microsoft.Crm.Client.Core.Framework.Scheduler.$qe), n = n.$8L;
            while (n && !t);
            Microsoft.Crm.Client.Core.Framework.Scheduler.$ez = !1
        }
    } catch (v) {
    } finally {
        for (f ||
            (Microsoft.Crm.Client.Core.Framework.Scheduler
                .$JV(Microsoft.Crm.Client.Core.Framework.Scheduler.$U2, "job-error", "info", null, null), Microsoft.Crm
                .Client.Core.Framework.Scheduler.$JV(Microsoft.Crm.Client.Core.Framework.Scheduler.$U2,
                    "job-running",
                    "StopTM",
                    Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm)
                    .$I,
                    null), Microsoft.Crm.Client.Core.Framework.Scheduler.$U2.$Ux()), Microsoft.Crm.Client.Core.Framework
                .Scheduler.$U2 = null, i !== -17 &&
                Microsoft.Crm.Client.Core.Framework.Scheduler
                .$oY("priority", "StopTM", Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(i).$I, null), s = !1;
            Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm >= -15 && !s;
        ) {
            t = !1;
            n = Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm)
                .$8L;
            do
                Microsoft.Crm.Client.Core.Framework.$81.isInstanceOfType(n)
                    ? s = !0
                    : (Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm = n.get_$LM(), t = Microsoft.Crm.Client.Core
                        .Framework.Scheduler.$2Ns()), n = n.$8L;
            while (n && !t && !s)
        }
        r = "unknown";
        f
            ? h
            ? r = "timeslice exhausted"
            : Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm < -15
            ? r = "jobs exhausted"
            : e
            ? r = "pause requested"
            : !Microsoft.Crm.Client.Core.Framework.Scheduler.$qe &&
            (o || Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm <= -13) &&
            (r = "crossed idle boundary and idle priority tasks are not allowed")
            : r = "job error";
        u.stop();
        u.stopMarker && u.stopMarker.addParameter(i.toString());
        Microsoft.Crm.Client.Core.Framework.Scheduler.$14D = !1;
        (Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm > -13 ||
                Microsoft.Crm.Client.Core.Framework.Scheduler.$qe &&
                Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm >= -15) &&
            Microsoft.Crm.Client.Core.Framework.Scheduler.$1Ia(!1);
        Microsoft.Crm.Client.Core.Framework.Scheduler.$oY("yielding", "info", r, null);
        Microsoft.Crm.Client.Core.Framework.Scheduler.$oY("timeslice", "StopTM", null, null)
    }
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$1Ia = function(n) {
    if (!Microsoft.Crm.Client.Core.Framework.Scheduler.$14D && !Microsoft.Crm.Client.Core.Framework.Scheduler.$mv) {
        var i = Microsoft.Crm.Client.Core.Framework.Scheduler.$2WZ(),
            r = ++Microsoft.Crm.Client.Core.Framework.Scheduler.$1yz,
            t = function() {
                Microsoft.Crm.Client.Core.Framework.Scheduler.$1m6 < r &&
                (Microsoft.Crm.Client.Core.Framework.Scheduler.$1m6 = Microsoft.Crm.Client.Core.Framework.Scheduler
                    .$1yz, Microsoft.Crm.Client.Core.Framework.Scheduler.$BU())
            };
        i || n ? t() : window.setTimeout(t, 0)
    }
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$2bU = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(t);
    i.get_$LM() > Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm &&
    (Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm = i.get_$LM(), Microsoft.Crm.Client.Core.Framework.Scheduler
        .$ez = !0);
    i.$tE(n)
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$1hL = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb(t);
    i.get_$LM() > Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm &&
    (Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm = i.get_$LM(), Microsoft.Crm.Client.Core.Framework.Scheduler
        .$ez = !0);
    i.$1FM.$1UU(n)
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$Jb = function(n) {
    return Microsoft.Crm.Client.Core.Framework.Scheduler.$gp[-1 * (n - 15)]
};
Microsoft.Crm.Client.Core.Framework.Scheduler.$1iu = function(n) { return n = Math.max(n, -15), Math.min(n, 15) };
Microsoft.Crm.Client.Core.Framework.$N4 = function(n, t) {
    this.$Ml = n;
    this.$I = t
};
Microsoft.Crm.Client.Core.Framework.$N4.prototype = {
    $I: null,
    $Ml: 0,
    $BR: null,
    $8L: null,
    get_$LM: function() { return this.$Ml },
    set_$LM: function(n) { return this.$Ml = n, n },
    $v7: function() {
        var n = this.$BR, t = this.$8L;
        $0.$1(t) || (t.$BR = n);
        $0.$1(n) || (n.$8L = t);
        this.$BR = null;
        this.$8L = null
    },
    $1UU: function(n) {
        var t = this.$BR;
        return $0.$1(t) || (t.$8L = n), n.$8L = this, n.$BR = t, this.$BR = n, n
    },
    $tE: function(n) {
        var t = this.$8L;
        return this.$8L = n, n.$8L = t, n.$BR = this, $0.$1(t) || (t.$BR = n), n
    }
};
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities = function() {};
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
    .$$cctor = function() { Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$24l() };
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$24l = function() {
    var n = 13, t;
    return Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$22a = n, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1Hb = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .ConductorItemTransitionOut = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .ConductorItemTransitionIn = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1ps = n, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1yE = n, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$hB = n, n = Math.min(n,
            Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$hB +
            Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1WZ) -
        1, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$16M = n, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1yR = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .reactUpdates = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.scheduledReactUpdate = n, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1yY = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1aU = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yJ = n, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1yD = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yd = n, Microsoft.Crm
        .Client.Core.Framework.SchedulerPriorities.$1Yl = n, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$oS = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1HI = n, Microsoft.Crm
        .Client.Core.Framework.SchedulerPriorities.$1yM = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$14o = Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2
        ? n
        : Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$14o, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1qr = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$2K8 = n, n--, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1yG = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1yf = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1Pa = n, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1ac = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yj = n, Microsoft.Crm
        .Client.Core.Framework.SchedulerPriorities.$1yg = n, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1y3 = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1kq = n, Microsoft.Crm
        .Client.Core.Framework.SchedulerPriorities.$1ya = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1yZ = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .customScriptsContainer = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y2 = n, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1y7 = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1yU = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1HI = Microsoft.Crm.Client.Core.Framework.$6.get_$k()
        ? n
        : Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1HI, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$14o = Microsoft.Crm.Client.Core.Framework.$6.get_$2C() !== 2
        ? n
        : Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$14o, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$14l = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yH = n, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1y1 = n, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1Pa = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$2MM = n, n--, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$rb = n, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1O9 = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y6 = n, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1di = n, n--, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1jT = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$tD = n, n--, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1Df = n, n--, Microsoft.Crm.Client.Core
        .Framework.SchedulerPriorities.$1pD = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .customScriptsContainerDispose = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1JT = n, Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1yh = n, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .selectionExpandAppBar = n, n--, t = n, n <= -13 &&
        Microsoft.Crm.Client.Core.Framework.Trace
        .logError(1025, "Too many scheduler priority buckets specified."), n = -13, Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$SY = n, t
};
Microsoft.Crm.Client.Core.Framework.$N6 = function(n, t) {
    this.n = n;
    this.t = Microsoft.Crm.Client.Core.Framework.$1h.get_$22H().$1q4();
    this.rid = Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString();
    this.p = t;
    this.f = !1
};
Microsoft.Crm.Client.Core.Framework.$N6.prototype = { n: null, t: 0, rid: null, p: null, f: !1 };
Microsoft.Crm.Client.Core.Framework.$N5 = function(n, t, i, r, u) {
    this.n = n;
    this.v = t;
    this.t = i;
    this.rid = r.rid;
    this.p = u
};
Microsoft.Crm.Client.Core.Framework.$N5.prototype = { n: null, t: 0, rid: null, p: null, v: null };
Microsoft.Crm.Client.Core.Framework.$1C = function() {};
Microsoft.Crm.Client.Core.Framework.$1C.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Framework.$1C.$D)
        ? Microsoft.Crm.Client.Core.Framework.$1C.$D = new Microsoft.Crm.Client.Core.Framework.$1C
        : Microsoft.Crm.Client.Core.Framework.$1C.$D
};
Microsoft.Crm.Client.Core.Framework.$1C.prototype = {
    $2SU: null,
    $tR: !1,
    set_$3L3: function(n) { return this.$2SU = n, Dynamics.Telemetry.telemetryContext.ReportingEndpoint = n, n },
    set_$38L: function(n) { return this.$tR = n, Dynamics.Telemetry.telemetryContext.IsReportingEnabled = n, n },
    $hz: function(n) {
        this.$tR &&
        ($0.$1(n) ||
            n.rid === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() ||
            $0.$1(n.n) ||
            Dynamics.Telemetry.startActivity(n))
    },
    $1hH: function(n) {
        this.$tR &&
        ($0.$1(n) ||
            Microsoft.Crm.Client.Core.Framework.$3.$A(n.rid) ||
            n.rid === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() ||
            $0.$1(n.n) ||
            Dynamics.Telemetry.addDataPointToActivity(n))
    },
    $VZ: function(n) {
        if (this.$tR &&
            !$0.$1(n) &&
            !Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
            .equals(new Microsoft.Crm.Client.Core.Framework.Guid(n)))
            try {
                Dynamics.Telemetry.finishActivity(n)
            } catch (t) {
                Microsoft.Crm.Client.Core.Framework.Trace.logException(164, t, "Failed to finish telemetry activity")
            }
    }
};
Microsoft.Crm.Client.Core.Framework.$N3 = function(n, t) {
    this.$$d_$3Ir = Function.createDelegate(this, this.$3Ir);
    this.$1x3 = n;
    this.$1wf = t;
    this.$19S = [];
    this.$ur = null
};
Microsoft.Crm.Client.Core.Framework.$N3.prototype = {
    $1x3: null,
    $1wf: 0,
    $19S: null,
    $ur: null,
    $uq: function(n, t) {
        Array.enqueue(this.$19S, n);
        var i = 0;
        $0.$1(t) || $0.$1(t.$ye) || (i = Math.max(t.$ye + this.$1wf, -13));
        Microsoft.Crm.Client.Core.Framework.$10.$8F
            ? n()
            : $0.$1(this.$ur)
            ? this.$ur = Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule(this.$$d_$3Ir, i, this.$1x3)
            : this.$ur.get_$LM() < i && this.$ur.set_$LM(i)
    },
    $3Ir: function() {
        var n, r, t, i;
        for (this.$ur = null, n = this.$19S
                .length, r = new Array(n), t = 0;
            t < n;
            t++) r[t] = Array.dequeue(this.$19S);
        for (i = 0; i < n; i++) r[i]()
    }
};
Microsoft.Crm.Client.Core.Framework.$P = function(n) {
    this.$Xy = $0.$1(n) ? new Array(0) : $.isArray(n) ? n : new Array(n)
};
Microsoft.Crm.Client.Core.Framework.$P.$$ = function(n) {
    var t = "$P$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$P"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$P.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$P.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$P.prototype = {
    $Xy: null,
    get_$3XJ: function() { return this.$Xy.length },
    get_$H: function(n) { return this.$Xy[n] },
    set_$H: function(n, t) { return this.$Xy[n] = t, t },
    $2e: function(n) { Array.add(this.$Xy, n) },
    $S4: function(n) { Array.addRange(this.$Xy, n) },
    $21O: function() { return this.$Xy }
};
Microsoft.Crm.Client.Core.Framework.$1t = function() {};
Microsoft.Crm.Client.Core.Framework.$1t.get_$2nb = function() {
    return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()
        ? ["pointerup", "pointerdown", "click", "touchend", "mousedown"]
        : ["pointerup", "pointerdown", "click"]
};
Microsoft.Crm.Client.Core.Framework.$1t.get_$38j = function() {
    return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS() ||
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1Eb
};
Microsoft.Crm.Client.Core.Framework.$1t.get_$394 = function() {
    return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().$21
        ? Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X
        ? Microsoft.Crm.Client.Core.Framework.$1t.get_$3X5() - window.innerHeight
        : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
        .get_KeyboardHeight()
        : 0
};
Microsoft.Crm.Client.Core.Framework.$1t.get_$3X5 = function() {
    var n = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance();
    return n.$mr || n.$5X ? $(document.body).height() : window.innerHeight
};
Microsoft.Crm.Client.Core.Framework.$1t.get_ScrollBarWidth = function() {
    var n = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance();
    return n.$mr ? 15 : n.$Kz && n.$1JF ? 15 : 20
};
Microsoft.Crm.Client.Core.Framework.$1t.$2qd = function(n) {
    var t = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance();
    t.$1JF && t.$Kz
        ? window.setTimeout(function() { Microsoft.Crm.Client.Core.Framework.$1t.$2Ci(n) }, 0)
        : Microsoft.Crm.Client.Core.Framework.$1t.$2Ci(n)
};
Microsoft.Crm.Client.Core.Framework.$1t.$3RI = function(n, t) {
    var f, e;
    if (n.is("textarea")) {
        var r = null, i = null, u = null;
        r = n.first();
        f = r.parentsUntil(".scrollRegion");
        i = null;
        u = null;
        f.last().offsetParent().is(".scrollRegion") &&
        (i = f.last().offsetParent(), e = i
            .parentsUntil(".panoramaContainer"), e.last().offsetParent().is(".panoramaContainer") &&
            (u = e.last().offsetParent()), r &&
            i &&
            u &&
            (t
                ? (u.css("overflow", "hidden"), i.css("overflow", "hidden"), r.css("overflow", "auto"))
                : (u.css("overflow", "auto"), i.css("overflow", "auto"), r.css("overflow", "hidden"))))
    }
};
Microsoft.Crm.Client.Core.Framework.$1t.$2UF = function(n) {
    var i = n.first(), t = i.parents(".scrollRegion");
    t.length > 0 &&
        t.height() + t.offset().top - i.offsetParent().offset().top < i.offsetParent().height() &&
        t.scrollTop(t.scrollTop() + i.offsetParent().height())
};
Microsoft.Crm.Client.Core.Framework.$1t.$2Ci = function(n) {
    var t = n.filter("input, textarea, [tabindex]:not([tabindex='-1']), select")
            .add("input, textarea, [tabindex]:not([tabindex='-1']), select", n[0]),
        r,
        u,
        i,
        f;
    t.length > 0
        ? (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X &&
            Microsoft.Crm.Client.Core.Framework.$1t
            .$3RI(t, !0), !t.is("select") ||
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS() && $("option", t).length
            ? (!t.is("select") || $("option", t).length > 0) &&
            (r = t.first(), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl &&
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()
                ? r.click().focus()
                : r.focus(), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X &&
            (u = function() { r.focus() }, r.bind("blur", u), window
                .setTimeout(function() { r.unbind("blur", u) }, Microsoft.Crm.Client.Core.Framework.$1t.$1wW)))
            : window.setTimeout(function() {
                    if ($("option", t).length > 0) {
                        var n = t.first()[0];
                        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$EO
                            ? Microsoft.Crm.Client.Core.Framework.$1t.$1lQ(n, "click")
                            : (Microsoft.Crm.Client.Core.Framework.$1t.$1lQ(n, "mousedown"), Microsoft.Crm.Client.Core
                                .Framework.$1t.$1lQ(n, "mouseup"))
                    }
                },
                Microsoft.Crm.Client.Core.Framework.$1t.$2MC), i = t
            .first()[0], i.setSelectionRange &&
        (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl &&
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()
            ? i.setSelectionRange(i.value.length, i.value.length)
            : i.setSelectionRange(0, i.value.length)), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
            .get_IsIOS() &&
            window.setTimeout(function() {
                    Microsoft.Crm.Client.Core.Framework.$1t.$2UF(t);
                    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl || t.select()
                },
                200))
        : (f = "div", n.filter(f).add(f, n[0]).first().focus())
};
Microsoft.Crm.Client.Core.Framework.$1t.$1lQ = function(n, t) {
    var i = document.createEvent("MouseEvents");
    i.initMouseEvent(t, !0, !0, null, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    n.dispatchEvent(i)
};
Microsoft.Crm.Client.Core.Framework.$1t.$36T = function() {
    for (var i, t = Microsoft.Crm.Client.Core.Framework.$1t.get_$2nb(), r = t.length, n = 0;
        n < r;
        ++n
    ) i = t[n], Microsoft.Crm.Client.Core.Framework.$1t.$36U(i)
};
Microsoft.Crm.Client.Core.Framework.$1t.$36U = function(n) {
    var t = $(document.documentElement), i = n + ".EMSV";
    t.bind(i,
        function(n) {
            n.preventDefault();
            t.unbind(i)
        });
    window.setTimeout(function() { t.unbind(i) },
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl
        ? Microsoft.Crm.Client.Core.Framework.$1t.$2Qk
        : Microsoft.Crm.Client.Core.Framework.$1t.$1wW)
};
Microsoft.Crm.Client.Core.Framework.$5z = function() {};
Microsoft.Crm.Client.Core.Framework.$5z.$1VZ = function(n) { return n === -2147093997 || n === -2147093999 };
Microsoft.Crm.Client.Core.Framework.$7o = function() {};
Microsoft.Crm.Client.Core.Framework.$7o.$2Gl = function(n) {
    switch (n) {
    case"mht":
    case"doc":
    case"docm":
    case"docx":
    case"dot":
    case"dotm":
    case"dotx":
        return"wordFile";
    case"xla":
    case"xlam":
    case"xls":
    case"xlsb":
    case"xlsm":
    case"xlsx":
    case"xlt":
    case"xltx":
    case"xltm":
    case"odp":
    case"odt":
    case"ods":
    case"odc":
        return"excelFile";
    case"thmx":
    case"pot":
    case"potm":
    case"potx":
    case"ppa":
    case"ppam":
    case"ppt":
    case"pptm":
    case"pptx":
    case"pps":
    case"psdc":
    case"ppsm":
    case"ppsx":
        return"powerPointFile";
    case"onetoc2":
    case"onetoc":
    case"one":
        return"oneNoteFile";
    case"accdb":
    case"accde":
    case"accdr":
        return"accessFile";
    case"mpt":
    case"mpp":
        return"projectFile";
    case"vdw":
    case"vdx":
    case"vsd":
    case"vss":
    case"vst":
    case"vsx":
    case"vtx":
    case"vsdx":
    case"vsdm":
    case"vssm":
    case"vssx":
    case"vstm":
    case"vstx":
        return"visioFile";
    case"chm":
        return"helpFile";
    case"zip":
        return"zipFile";
    case"msp":
    case"msi":
        return"setupFile";
    case"exe":
        return"executableFile";
    case"pdf":
        return"pdfFile";
    case"htm":
    case"html":
    case"aspx":
    case"asp":
    case"php":
        return"webFile";
    case"txt":
        return"textFile";
    case"webm":
    case"mkv":
    case"flv":
    case"ogv":
    case"ogg":
    case"drc":
    case"avi":
    case"yuv":
    case"rm":
    case"rmvb":
    case"asf":
    case"mov":
    case"qt":
    case"mp4":
    case"m4p":
    case"m4v":
    case"mpg":
    case"mp2":
    case"mpeg":
    case"mpe":
    case"mpv":
    case"m2v":
    case"svi":
    case"3gp":
    case"3g2":
    case"roq":
    case"mxf":
    case"nsv":
    case"wm":
    case"wmd":
    case"wmo":
    case"wms":
    case"wmv":
    case"wmx":
    case"wmz":
        return"videoFile";
    case"jpg":
    case"jpeg":
    case"exiff":
    case"tiff":
    case"rif":
    case"gif":
    case"bmp":
    case"png":
    case"ppm":
    case"pgm":
    case"pbm":
    case"pnm":
    case"webp":
    case"hdr":
    case"bpg":
    case"psd":
        return"imageFile";
    case"act":
    case"aiff":
    case"aac":
    case"amr":
    case"au":
    case"awb":
    case"dct":
    case"dss":
    case"dvf":
    case"flac":
    case"gsm":
    case"iklax":
    case"ivs":
    case"m4a":
    case"mmf":
    case"mp3":
    case"mpc":
    case"msv":
    case"oga":
    case"opus":
    case"ra":
    case"raw":
    case"sln":
    case"tta":
    case"vox":
    case"wav":
    case"wma":
    case"wv":
        return"audioFile";
    default:
        return"genericFile"
    }
};
Microsoft.Crm.Client.Core.Framework.$D7 = function() {
    this.$BR = null;
    this.$8L = null
};
Microsoft.Crm.Client.Core.Framework.$D7.prototype = {
    $BR: null,
    $8L: null,
    $v7: function() {
        var n = this.$BR, t = this.$8L;
        $0.$1(t) || (t.$BR = n);
        $0.$1(n) || (n.$8L = t);
        this.$BR = null;
        this.$8L = null
    },
    $1UU: function(n) {
        var t = this.$BR;
        return $0.$1(t) || (t.$8L = n), n.$8L = this, n.$BR = t, this.$BR = n, n
    },
    $tE: function(n) {
        var t = this.$8L;
        return this.$8L = n, n.$8L = t, n.$BR = this, $0.$1(t) || (t.$BR = n), n
    }
};
Microsoft.Crm.Client.Core.Framework.$BC = function(n) {
    this.$OM = null;
    this.$iA = null;
    this.$SB = {};
    this.$1Wr = n
};
Microsoft.Crm.Client.Core.Framework.$BC.$$ = function(n) {
    var t = "$BC$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$BC"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$BC.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t);
        u = Microsoft.Crm.Client.Core.Framework.$BC.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$BC.prototype = {
    $1Wr: 0,
    $OM: null,
    $iA: null,
    $SB: null,
    $1AZ: 0,
    get_$3ZS: function() { return this.$1AZ },
    get_$l: function() {
        var t = 0, i = this.$SB, n, r;
        for (n in i) r = { key: n, value: i[n] }, t += r.value.get_$2M().get_$3XJ();
        return t
    },
    $19Q: function(n, t) {
        var i = new(Microsoft.Crm.Client.Core.Framework.$BD
                .$$(Microsoft.Crm.Client.Core.Framework.$P
                    .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$BC"].T)))(n, t),
            u = this.$2Hq(t),
            r;
        if (u < this.$1Wr) {
            for ((n in
            this.$SB)&&
            (r = this.$SB[n], this.$C(1026,
                "MRUCache_Cache : Removing existing item before adding new value - Key : {0}; callbackSafeArrayLength : {1}",
                r.get_$4u(),
                r.get_$2M().get_$3XJ().toString()), this.$1Qd(r));
            this.$1AZ + u > this.$1Wr && !$0.$1(this.$OM);)
this.$C(1026,
    "MRUCache_Cache : Removing least recently used object - Key : {0}; callbackSafeArrayLength : {1}",
    this.$OM.get_$4u(),
    this.$OM.get_$2M().get_$3XJ().toString()), this.$1Qd(this.$OM);
this.$C(1026,
    "MRUCache_Cache : Adding node - Key : {0}; callbackSafeArrayLength : {1}",
    i.get_$4u(),
    i.get_$2M().get_$3XJ().toString());
this.$2bf(i, u)}else
this.$C(1026,
    "MRUCache_Cache : Skipping from cache as the size of the object is bigger than the max limit of cache - Key : {0}; callbackSafeArrayLength : {1}",
    i.get_$4u(),
    i.get_$2M().get_$3XJ().toString())},
$16I:function(n) {
    if (!$0.$1(this.$SB[n])) {
        var t = this.$SB[n];
        this.$1Qd(t)
    }
},
$3ZU:function(n) {
    if (!$0.$1(this.$SB) && n in this.$SB) {
        var t = this.$SB[n];
        return this.$C(1026,
            "MRUCache_GetCachedObject - Key: {0}; callbackSafeArrayLength : {1}",
            n,
            t.get_$2M().get_$3XJ().toString()), this.$3Be(t), t.get_$2M()
    }
    return this.$C(1026, "MRUCache_GetCachedObject - Not found in Cache - Key: {0}", n), null
},
$3ZV:function() { while (this.$OM) this.$1Qd(this.$OM) },
$2bf:function(n, t) {
    this.$2cI(n, t);
    this.$248(n)
},
$1Qd:function(n) {
    this.$3KP(n);
    this.$2SF(n)
},
$2cI:function(n, t) {
    this.$SB[n.get_$4u()] = n;
    this.$1AZ += t
},
$3KP:function(n) {
    delete this.$SB[n.get_$4u()];
    this.$1AZ -= this.$2Hq(n.get_$2M())
},
$248:function(n) {
    $0.$1(this.$OM) ? (this.$OM = n, this.$iA = this.$OM) : (this.$iA.$tE(n), this.$iA = this.$iA.get_$3Zz())
},
$2SF:function(n) {
    this.$OM === n && (this.$OM = this.$OM.get_$3Zz());
    this.$iA === n && (this.$iA = this.$iA.get_$3a1());
    n.$v7()
},
$3Be:function(n) {
    this.$2SF(n);
    this.$248(n)
},
$2Hq:function(n) {
    for (var i = 0, t = 0; t < n.get_$3XJ(); t++) i += n.get_$H(t).$2ed();
    return i
},
$C:function(n, t, i, r) { Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(n, t, i, r) }};
Microsoft.Crm.Client.Core.Framework.$BD = function(n, t) {
    this.$1uH = this.$$gta["Microsoft.Crm.Client.Core.Framework.$BD"].T === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.$BD"].T)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.$BD"].T === Boolean ? !1 : null;
    Microsoft.Crm.Client.Core.Framework.$BD.$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.$BD"].T)
        .initializeBase(this);
    this.$2I = n;
    this.$1uH = t
};
Microsoft.Crm.Client.Core.Framework.$BD.$$ = function(n) {
    var t = "$BD$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework[t]) {
        r = Microsoft.Crm.Client.Core.Framework[t] = function() {
            var i, t;
            for ((this.$$gta = this.$$gta || {})["Microsoft.Crm.Client.Core.Framework.$BD"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.$BD.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework." + t, Microsoft.Crm.Client.Core.Framework.$D7);
        u = Microsoft.Crm.Client.Core.Framework.$BD.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework[t]
};
Microsoft.Crm.Client.Core.Framework.$BD.prototype = {
    $2I: null,
    get_$4u: function() { return this.$2I },
    get_$2M: function() { return this.$1uH },
    get_$3Zz: function() { return this.$8L },
    get_$3a1: function() { return this.$BR }
};
Microsoft.Crm.Client.Core.Framework.$2z = function() {};
Microsoft.Crm.Client.Core.Framework.$2z.$Pa = function(n, t) {
    return Microsoft.Crm.Client.Core.Framework.Guid.isInstanceOfType(n) &&
        Microsoft.Crm.Client.Core.Framework.Guid.isInstanceOfType(t)
        ? n.equals(t)
        : Microsoft.Crm.Client.Core.Framework.$3h.isInstanceOfType(n) &&
        Microsoft.Crm.Client.Core.Framework.$3h.isInstanceOfType(t)
        ? n.$lK(t)
        : Microsoft.Crm.Client.Core.Framework.$5R.isInstanceOfType(n) &&
        Microsoft.Crm.Client.Core.Framework.$5R.isInstanceOfType(t)
        ? n.get_ValueString() === t.get_ValueString() && n.get_Label() === t.get_Label()
        : Microsoft.Crm.Client.Core.Framework.$AR.isInstanceOfType(n) &&
        Microsoft.Crm.Client.Core.Framework.$AR.isInstanceOfType(t)
        ? Microsoft.Crm.Client.Core.Framework.$2z.$Pa(n.get_$2M(), t.get_$2M())
        : (Date.isInstanceOfType(n) && Date.isInstanceOfType(t) && (n = n.valueOf(), t = t.valueOf()), n === t)
};
Microsoft.Crm.Client.Core.Framework.$BJ = function() {};
Microsoft.Crm.Client.Core.Framework.$BJ.$35H = function(n) {
    if (!n) return"";
    var t = Object.getType(n).toString();
    return t = t.substr(t.indexOf("function ") >= 0 ? 9 : 0), t.substr(0, t.indexOf("("))
};
Microsoft.Crm.Client.Core.Framework.$2Z = function() {};
Microsoft.Crm.Client.Core.Framework.$2Z.set_$38X = function(n) {
    return n !== Microsoft.Crm.Client.Core.Framework.$2Z.$16B &&
    (n
        ? Microsoft.Crm.Client.Core.Framework.Trace.$1Mn(Microsoft.Crm.Client.Core.Framework.$2Z.$1Oc)
        : Microsoft.Crm.Client.Core.Framework.Trace.$1xf(Microsoft.Crm.Client.Core.Framework.$2Z.$1Oc), Microsoft.Crm
        .Client.Core.Framework.$2Z.$16B = n), n
};
Microsoft.Crm.Client.Core.Framework.$2Z.$1Oc = function(n, t, i) {
    t <= 1 &&
    (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Tx
        ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$ZT.$21 &&
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$ZT.$2Ms(t, i.get_$zP().get_$WH())
        : Microsoft.Crm.Client.Core.Framework.$2Z.$1G3 += String
        .format(Microsoft.Crm.Client.Core.Framework.$2Z.$2Mt, t, i.get_$zP().get_$WH()))
};
Microsoft.Crm.Client.Core.Framework.$2Z.$3AV = function() {
    Microsoft.Crm.Client.Core.Framework.$2Z.$1G3.length &&
    (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$ZT
        .$2Ms(4, Microsoft.Crm.Client.Core.Framework.$2Z.$1G3), Microsoft.Crm.Client.Core.Framework.$2Z.$1G3 = "")
};
Microsoft.Crm.Client.Core.Framework.$2Z.$1Wc = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$ZT.$21
        ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$ZT.$1Wc(n, t)
        : Microsoft.Crm.Client.Core.Framework.Trace.logPerf(30, t)
};
Microsoft.Crm.Client.Core.Framework.$2Z.$3AZ = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$ZT.$21 &&
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$ZT.$12Y(n)
};
Microsoft.Crm.Client.Core.Framework.$CB = function(n) { this.$5u = n };
Microsoft.Crm.Client.Core.Framework.$CB.$18 = function(n) {
    for (var u,
        f = n.sortorder,
        i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.Guid)),
        r = f,
        e = r.length,
        t = 0;
        t < e;
        ++t) u = r[t], i.add(Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(u));
    return new Microsoft.Crm.Client.Core.Framework.$CB(i.toArray())
};
Microsoft.Crm.Client.Core.Framework.$CB.prototype = {
    $5u: null,
    $1A: function() {
        for (var u,
            t = {},
            i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)),
            r = this.$5u,
            f = r.length,
            n = 0;
            n < f;
            ++n) u = r[n], i.add(u.getObjectData());
        return t.sortorder = i.toArray(), t
    }
};
Microsoft.Crm.Client.Core.Framework.$1b = function(n, t, i, r) {
    this.$3E = n;
    this.$4d = !$0.$1(t) && t;
    this.$53 = i;
    this.$64 = !$0.$1(r) && r
};
Microsoft.Crm.Client.Core.Framework.$1b.$18 = function(n) {
    var t = n.sortbyfield, i = n.sortdescending, r = n.secondarysortbyfield, u = n.secondarysortdescending;
    return new Microsoft.Crm.Client.Core.Framework.$1b(t, i, r, u)
};
Microsoft.Crm.Client.Core.Framework.$1b.$4y = function(n) {
    var t = n.getElementsByTagName("order"), i, r, u;
    if (t.length > 0 && (i = t[0].attributes.getNamedItem("attribute"), !$0.$1(i))) {
        var s = i.nodeValue,
            f = t[0].attributes.getNamedItem("descending"),
            h = !$0.$1(f) && f.nodeValue === "true",
            e = null,
            o = !1;
        return t.length > 1 &&
        (r = t[1].attributes
            .getNamedItem("attribute"), $0.$1(r) ||
        (e = r.nodeValue, u = t[1].attributes
            .getNamedItem("descending"), o = !$0.$1(u) && u.nodeValue === "true")), new Microsoft.Crm.Client.Core
            .Framework.$1b(s, h, e, o)
    }
    return null
};
Microsoft.Crm.Client.Core.Framework.$1b.prototype = {
    $3E: null,
    $4d: !1,
    $53: null,
    $64: !1,
    get_SortByField: function() { return this.$3E },
    set_SortByField: function(n) { return this.$3E = n, n },
    get_SortDescending: function() { return this.$4d },
    set_SortDescending: function(n) { return this.$4d = n, n },
    get_SecondarySortByField: function() { return this.$53 },
    set_SecondarySortByField: function(n) { return this.$53 = n, n },
    get_SecondarySortDescending: function() { return this.$64 },
    set_SecondarySortDescending: function(n) { return this.$64 = n, n },
    $1A: function() {
        var n = {};
        return n.sortbyfield = this.$3E, n.sortdescending = this.$4d, n.secondarysortbyfield = this.$53, n
            .secondarysortdescending = this.$64, n
    },
    $1lo: function(n) {
        return!$0.$1(n) && this.$3E === n.$3E && this.$4d === n.$4d && this.$53 === n.$53 && this.$64 === n.$64
    }
};
Microsoft.Crm.Client.Core.Framework.$45 = function() {};
Microsoft.Crm.Client.Core.Framework.$45.$$cctor = function() {
    Microsoft.Crm.Client.Core.Framework.$45.$35x(window.location.href)
};
Microsoft.Crm.Client.Core.Framework.$45.$35x = function(n) {
    var t, i, r;
    if (Microsoft.Crm.Client.Core.Framework.$45.$1x1 = {}, Microsoft.Crm.Client.Core.Framework.$3
        .$1S(n)) Microsoft.Crm.Client.Core.Framework.$45.$1ZT = {};
    else {
        Microsoft.Crm.Client.Core.Framework.$45.$1ZT = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$Dx(n);
        t = Microsoft.Crm.Client.Core.Framework.$45.$1ZT;
        for (i in t)
            r = { key: i, value: t[i] }, Microsoft.Crm.Client.Core.Framework.$45.$1x1[r.key.toLowerCase()] = r.value
                .toLowerCase()
    }
};
Microsoft.Crm.Client.Core.Framework.$4a = function() {};
Microsoft.Crm.Client.Core.Framework.$4a.$2Xr = function(n) {
    var t, i, r;
    if ($0.$1(n)) throw Error.argumentNull("strings");
    for (t = {}, i = 0; i < n.length; i++) r = n[i], t[r] = r in t ? t[r] + 1 : 1;
    return t
};
Microsoft.Crm.Client.Core.Framework.$4a.$257 = function(n, t) {
    var u, i;
    if (n === t || $0.$1(n) && $0.$1(t)) return!0;
    if ($0.$1(n) || $0.$1(t) || n.length !== t.length) return!1;
    var e = Microsoft.Crm.Client.Core.Framework.$4a.$2Xr(n), r = Microsoft.Crm.Client.Core.Framework.$4a.$2Xr(t), f = e;
    for (u in f) {
        if ((i = { key: u, value: f[u] }, !(i.key in r)) || r[i.key] !== i.value) return!1;
        delete r[i.key]
    }
    return Microsoft.Crm.Client.Core.Framework.$1J.$11l(r)
};
Microsoft.Crm.Client.Core.Framework.$4a.$2cy = function(n, t) {
    if (n === t || $0.$1(n) && $0.$1(t)) return!0;
    if ($0.$1(n) || $0.$1(t) || n.length !== t.length) return!1;
    for (var i = 0; i < n.length; i++) if (n[i] !== t[i]) return!1;
    return!0
};
Microsoft.Crm.Client.Core.Framework.$4a.$263 = function(n) {
    return $0.$1(n)
        ? null
        : n.substring(0, 1).toLocaleUpperCase() + (n.length > 1 ? n.substring(1, n.length).toLocaleLowerCase() : "")
};
Microsoft.Crm.Client.Core.Framework.$CD = function(n, t, i, r, u) {
    this.$1Pe = n;
    this.$1Pg = t;
    this.$KZ = i;
    this.$1Pj = r;
    this.$1Pi = u
};
Microsoft.Crm.Client.Core.Framework.$CD.$18 = function(n) {
    var t = Date.isInstanceOfType(n.datestart) ? n.datestart : new Date(Date.parse(n.datestart)),
        i = Date.isInstanceOfType(n.dateend) ? n.dateend : new Date(Date.parse(n.dateend)),
        r = n.delta,
        u = Microsoft.Crm.Client.Core.Framework.$8W.$18(n.daylightstart),
        f = Microsoft.Crm.Client.Core.Framework.$8W.$18(n.daylightend);
    return new Microsoft.Crm.Client.Core.Framework.$CD(i, t, r, u, f)
};
Microsoft.Crm.Client.Core.Framework.$CD.prototype = {
    $1Pe: null,
    $1Pg: null,
    $KZ: 0,
    $1Pj: null,
    $1Pi: null,
    $1A: function() {
        var n = {};
        return n.dateend = this.$1Pe, n.datestart = this.$1Pg, n.delta = this.$KZ, n.daylightstart = this.$1Pj.$1A(), n
            .daylightend = this.$1Pi.$1A(), n
    },
    $30O: function(n) {
        var r = n.getFullYear(), t = this.$1Pj.$2GV(r), i = this.$1Pi.$2GV(r);
        if (i < t) {
            if (n > t || n < i) return this.$KZ
        } else if (n > t && n < i) return this.$KZ;
        return 0
    }
};
Microsoft.Crm.Client.Core.Framework.$8W = function(n, t, i, r, u, f) {
    this.$1Ph = n;
    this.$zX = t;
    this.$tx = i;
    this.$1eH = r;
    this.$iL = u;
    this.$1VB = f
};
Microsoft.Crm.Client.Core.Framework.$8W.$18 = function(n) {
    var t = n.day,
        i = n.dayofweek,
        r = n.month,
        u = n.week,
        f = Date.isInstanceOfType(n.timeofday) ? n.timeofday : new Date(Date.parse(n.timeofday)),
        e = n.isfixeddaterule;
    return new Microsoft.Crm.Client.Core.Framework.$8W(t, i, r, u, f, e)
};
Microsoft.Crm.Client.Core.Framework.$8W.prototype = {
    $1Ph: 0,
    $zX: 0,
    $tx: 0,
    $1eH: 0,
    $iL: null,
    $1VB: !1,
    $2GV: function(n) {
        if (this.$1VB)
            return new Date(n, this.$tx, this.$1Ph, this.$iL.getHours(), this.$iL.getMinutes(), this.$iL.getSeconds());
        var r = this.$1eH * 7 - 6, i = new Date(n, this.$tx, 1).getDay(), t;
        return t = i > this.$zX ? r + (7 - i + this.$zX) : r + (this.$zX - i),
            t > Microsoft.Crm.Client.Core.Framework.$m.$2Gd(this.$tx, n) && (t -= 7), new
                Date(n, this.$tx, t, this.$iL.getHours(), this.$iL.getMinutes(), this.$iL.getSeconds())
    },
    $1A: function() {
        var n = {};
        return n.day = this.$1Ph, n.dayofweek = this.$zX, n.month = this.$tx, n.week = this.$1eH, n.timeofday = this
            .$iL, n.isfixeddaterule = this.$1VB, n
    }
};
Microsoft.Crm.Client.Core.Framework.$1D = function() {};
Microsoft.Crm.Client.Core.Framework.$3P = function(n, t) {
    this.$2I = this.$$gta["Microsoft.Crm.Client.Core.Framework.$3P"].TKey === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.$3P"].TKey)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.$3P"].TKey === Boolean ? !1 : null;
    this.$Ai = this.$$gta["Microsoft.Crm.Client.Core.Framework.$3P"].TValue === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.$3P"].TValue)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.$3P"].TValue === Boolean ? !1 : null;
    this.$2I = n;
    this.$Ai = t
};
Microsoft.Crm.Client.Core.Framework.$3P.$$ = function(n, t) {
    var i = "$3P$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_"), u, f, e, r;
    if (!Microsoft.Crm.Client.Core.Framework[i]) {
        u = Microsoft.Crm.Client.Core.Framework[i] = function() {
            var r, i;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.$3P"] = { TKey: n, TValue: t }, r = [], i = 0;
                i < arguments.length;
                ++i) r[i] = arguments[i];
            Microsoft.Crm.Client.Core.Framework.$3P.apply(this, r)
        };
        u.registerClass("Microsoft.Crm.Client.Core.Framework." + i);
        f = Microsoft.Crm.Client.Core.Framework.$3P.prototype;
        for (e in f) r = { key: e, value: f[e] }, "constructor" !== r.key && (u.prototype[r.key] = r.value)
    }
    return Microsoft.Crm.Client.Core.Framework[i]
};
Microsoft.Crm.Client.Core.Framework.$3P.prototype = {
    get_$4u: function() { return this.$2I },
    get_$2M: function() { return this.$Ai }
};
Microsoft.Crm.Client.Core.Framework.$OE = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$OE.initializeBase(this, [n]);
    this.$FW = t
};
Microsoft.Crm.Client.Core.Framework.$OE.prototype = { $FW: null };
Microsoft.Crm.Client.Core.Framework.$4 = function(n) {
    this.$E = n;
    this.$NA = 0;
    this.$N9 = new Array(0)
};
Microsoft.Crm.Client.Core.Framework.$4.$h = function(n) {
    for (var r, i = [], t = 1; t < arguments.length; ++t) i[t - 1] = arguments[t];
    return r = Microsoft.Crm.Client.Core.Framework.$3
        .$A(n)
        ? ""
        : String.format.apply(null, [n].concat(i)), new Microsoft.Crm.Client.Core.Framework.$4(r)
};
Microsoft.Crm.Client.Core.Framework.$4.$1Ra = function(n, t) {
    for (var r, u = [], i = 2; i < arguments.length; ++i) u[i - 2] = arguments[i];
    return Microsoft.Crm.Client.Core.Framework.$3.$A(t)
        ? r = new Microsoft.Crm.Client.Core.Framework.$4(n.message)
        : (t = String.format.apply(null, [t].concat(u)), r = new Microsoft.Crm.Client.Core.Framework.$4(t)), r
        .$178 = n, r
};
Microsoft.Crm.Client.Core.Framework.$4.$lh = function(n) {
    for (var i, r = [], t = 1; t < arguments.length; ++t) r[t - 1] = arguments[t];
    return Microsoft.Crm.Client.Core.Framework.Trace
            .logWarning(1005,
                "Encountered error {0} at {1}",
                n,
                Microsoft.Crm.Client.Core.Framework.$3B.get_$5().$2ye()),
        i = new Microsoft.Crm.Client.Core.Framework.$4(Microsoft.Crm.Client.Core.Framework.Common.$2.$5I(n, r)), i
            .$10 = n, i
};
Microsoft.Crm.Client.Core.Framework.$4.$St = function(n) {
    var t = new Microsoft.Crm.Client.Core.Framework.$4("");
    return t.$10 = n, t
};
Microsoft.Crm.Client.Core.Framework.$4.$3ZY = function(n, t, i) {
    for (var r, f = [], u = 3; u < arguments.length; ++u) f[u - 3] = arguments[u];
    return Microsoft.Crm.Client.Core.Framework.$3.$A(t)
        ? r = $0.$1(i)
        ? new Microsoft.Crm.Client.Core.Framework.$4("Unknown Error")
        : new Microsoft.Crm.Client.Core.Framework.$4(Microsoft.Crm.Client.Core.Framework.Common.$2.$5I(i))
        : (t = String.format.apply(null, [t].concat(f)), r = new Microsoft.Crm.Client.Core.Framework.$4(t)), r
        .$10 = $0.$1(i) ? n.$10 : i, r.$Xb = n, r
};
Microsoft.Crm.Client.Core.Framework.$4.$Kl = function(n) {
    var t = new Microsoft.Crm.Client.Core.Framework.$A9(0), u, i;
    if (Microsoft.Crm.Client.Core.Framework.$A9.isInstanceOfType(n) && !n.$1LE) t = n;
    else if (!$0.$1(n))
        for (var f = n, e = f.length, r = 0; r < e; ++r)
            if (u = f[r], !u.$1LE) {
                t = u;
                break
            }
    return i = new Microsoft.Crm.Client.Core.Framework.$4(t.get_$WH()), i.$5H = t.get_$wA(), i.$NE = t.$NE, i.$Ra = t
        .$Ra, i.$10 = t.$10, i.$N9 = Microsoft.Crm.Client.Core.Framework.$A9.isInstanceOfType(n) ? [t] : n, i
};
Microsoft.Crm.Client.Core.Framework.$4.$Yc = function(n, t) {
    for (var r, u = [], i = 2; i < arguments.length; ++i) u[i - 2] = arguments[i];
    return r = new Microsoft.Crm.Client.Core.Framework.$4(String.format.apply(null, [t].concat(u))), r.$NA = 2, r
        .$10 = n, r
};
Microsoft.Crm.Client.Core.Framework.$4.prototype = {
    $10: 0,
    $E: null,
    $5H: null,
    $NE: null,
    $Ra: null,
    $178: null,
    $Xb: null,
    $N8: null,
    $N9: null,
    $NA: 0,
    $265: function(n) {
        this.$E = this.$E + "\nInner Error Message:\n" + n.$E;
        this.$Xb = n
    },
    $GH: function() {
        var n = "", t;
        if (!$0.$1(this.$N9))
            for (var r = this
                         .$N9,
                u = r.length,
                i = 0;
                i < u;
                ++i)
                t = r[i], Microsoft.Crm.Client.Core.Framework.$3.$A(t.$1KO) ||
                (n += t.$1KO, Microsoft.Crm.Client.Core.Framework.$3
                    .$A(t.$1M5) ||
                    (n += "\nStackTrace:\n" + t.$1M5), n += "\n\n");
        return Microsoft.Crm.Client.Core.Framework.$3.$1S(n) &&
            (n = "Diagnostic message not found for error " + this.$10 + " with message: " + this.$E), n
    },
    $T7: function() {
        var n = this.$1A();
        return"innererror" in n && (n.innererror = n.innererror.$T7()), new Microsoft.Crm.Client.Core.Framework.$7M(n)
    },
    $1A: function() {
        var n = {};
        return n.errorcode = this.$10, n.message = this.$E, $0.$1(this.$Xb) || (n.innererror = this.$Xb.$1A()), n
    }
};
Microsoft.Crm.Client.Core.Framework.Guid = function(n) {
    if (this.$1A = this.getObjectData, this.$Mn = Microsoft.Crm.Client.Core.Framework.Guid.$2I3(n), Microsoft.Crm.Client
        .Core.Framework.$3.$A(this.$Mn))
        throw Error.argumentOutOfRange(String.format("'{0}' is not a valid Guid value.", n));
};
Microsoft.Crm.Client.Core.Framework.Guid.$2I3 = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$3.$A(n)
        ? null
        : (n = n.toLowerCase(), Microsoft.Crm.Client.Core.Framework.Guid.get_$357().test(n) ||
            Microsoft.Crm.Client.Core.Framework.Guid.get_$25N().test(n))
        ? n.replace(Microsoft.Crm.Client.Core.Framework.Guid.get_$33X(), "")
        : Microsoft.Crm.Client.Core.Framework.Guid.get_$2hN().test(n) ? n : null
};
Microsoft.Crm.Client.Core.Framework.Guid.get_empty = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$rs ||
    (Microsoft.Crm.Client.Core.Framework.Guid.$rs = new Microsoft.Crm.Client.Core.Framework
        .Guid("00000000-0000-0000-0000-000000000000"))
};
Microsoft.Crm.Client.Core.Framework.Guid.get_$33X = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$1qC ||
        (Microsoft.Crm.Client.Core.Framework.Guid.$1qC = new RegExp("{|}|-", "g"))
};
Microsoft.Crm.Client.Core.Framework.Guid.get_$357 = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$1qZ ||
    (Microsoft.Crm.Client.Core.Framework.Guid
        .$1qZ = new RegExp("^(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}$"))
};
Microsoft.Crm.Client.Core.Framework.Guid.get_$25N = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$1iM ||
    (Microsoft.Crm.Client.Core.Framework.Guid
        .$1iM = new RegExp("^{(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}}$"))
};
Microsoft.Crm.Client.Core.Framework.Guid.get_$2hN = function() {
    return Microsoft.Crm.Client.Core.Framework.Guid.$1jn ||
        (Microsoft.Crm.Client.Core.Framework.Guid.$1jn = new RegExp("^(\\d|[a-f]){32}$"))
};
Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData = function(n) {
    var t = n.rawguid;
    return new Microsoft.Crm.Client.Core.Framework.Guid(t)
};
Microsoft.Crm.Client.Core.Framework.Guid.tryCreate = function(n) {
    var t = Microsoft.Crm.Client.Core.Framework.Guid.$2I3(n);
    return Microsoft.Crm.Client.Core.Framework.$3.$A(t)
        ? Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
        : new Microsoft.Crm.Client.Core.Framework.Guid(t)
};
Microsoft.Crm.Client.Core.Framework.Guid.formatToUpper = function(n) {
    return $0.$1(n)
        ? n
        : (n = n.toLowerCase(), Microsoft.Crm.Client.Core.Framework.Guid.get_$25N().test(n)
            ? n.toUpperCase()
            : String.format("{{{0}}}", n.toUpperCase()))
};
Microsoft.Crm.Client.Core.Framework.Guid.removeBrackets = function(n) {
    return $0.$1(n) ? n : n.replace("{", "").replace("}", "").trim()
};
Microsoft.Crm.Client.Core.Framework.Guid.$A = function(n) {
    return $0.$1(n) || !n.length
        ? !0
        : new Microsoft.Crm.Client.Core.Framework.Guid(n).equals(Microsoft.Crm.Client.Core.Framework.Guid.$rs) ? !0 : !1
};
Microsoft.Crm.Client.Core.Framework.Guid.newGuid = function() {
    for (var r, i = "0123456789abcdef", t = new Sys.StringBuilder, n = 0; n < 36; n++) {
        if (n === 14) {
            t.append("4");
            continue
        }
        if (n === 8 || n === 13 || n === 18 || n === 23) {
            t.append("-");
            continue
        }
        n === 19 && (r = Math.floor(Math.random() * 16), i.substr(r & 3 | 8, 1));
        t.append(i.substr(Math.floor(Math.random() * 16), 1))
    }
    return new Microsoft.Crm.Client.Core.Framework.Guid(t.toString())
};
Microsoft.Crm.Client.Core.Framework.Guid.prototype = {
    $Mn: null,
    $1RW: null,
    getObjectData: function() {
        var n = {};
        return n.rawguid = this.$Mn, n
    },
    equals: function(n) {
        if (Microsoft.Crm.Client.Core.Framework.Guid.isInstanceOfType(n)) return n.$Mn === this.$Mn;
        if (String.isInstanceOfType(n))
            try {
                var t = new Microsoft.Crm.Client.Core.Framework.Guid(n);
                return t.$Mn === this.$Mn
            } catch (i) {
                return!1
            }
        return!1
    },
    getHashCode: function() {
        return Microsoft.Crm.Client.Core.Framework.$3.$A(this.$Mn)
            ? 0
            : Microsoft.Crm.Client.Core.Framework.$3.$1qL(this.$Mn)
    },
    toString: function() {
        return this.$1RW ||
        (this.$1RW = this.$Mn.substring(0, 8) +
            "-" +
            this.$Mn.substring(8, 12) +
            "-" +
            this.$Mn.substring(12, 16) +
            "-" +
            this.$Mn.substring(16, 20) +
            "-" +
            this.$Mn.substring(20, 32)), this.$1RW
    }
};
Microsoft.Crm.Client.Core.Framework.$NJ = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "targetServiceUri");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onSuccessHandler");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onErrorHandler");
    this.$1bP = n;
    this.$1NW = r;
    this.$1vY = t;
    this.$uE = i
};
Microsoft.Crm.Client.Core.Framework.$NJ.prototype = {
    $1bP: null,
    $1NW: null,
    $1vY: null,
    $uE: null,
    $25F: function(n, t, i, r) {
        var u = "";
        return $0.$1(i) || (u = JSON.stringify(i)), this.$25G(n, t, u, r)
    },
    $25G: function(n, t, i, r) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "requestType");
        var u = this.$2xW(n, t, i, r);
        return u.contentType = "application/json; charset=utf-8", u
            .dataType = "json", $0.$1(this.$1NW) || (u.beforeSend = this.$1NW), $.ajax(u)
    },
    $2xW: function(n, t, i, r) {
        var u = {};
        return u.type = n, u.data = i, u.url = this.$1bP + t, u.success = this.$1vY, u.error = this
            .$uE, $0.$1(r) ||
            (r < 0 && Microsoft.Crm.Client.Core.Framework.Utils.$E.$1dJ(r, 0, 99999, "timeout"), u.timeout = r), u
    }
};
Microsoft.Crm.Client.Core.Framework.$C = function() {};
Microsoft.Crm.Client.Core.Framework.$C.$OJ = function(n) {
    var t = n.getMilliseconds();
    return n.format("HH:mm:ss.") + (t < 100 ? "0" : "") + (t < 10 ? "0" : "") + t.toString()
};
Microsoft.Crm.Client.Core.Framework.$C.$12X = function(n, t, i) {
    var r = new Date;
    Microsoft.Crm.Client.Core.Framework.$3.$A(i)
        ? Microsoft.Crm.Client.Core.Framework.Trace.logInfo(t,
            "{0} -- {1}",
            n,
            Microsoft.Crm.Client.Core.Framework.$C.$OJ(r))
        : Microsoft.Crm.Client.Core.Framework.Trace.logInfo(t,
            "{0} -- {1} -- {2}",
            n,
            i,
            Microsoft.Crm.Client.Core.Framework.$C.$OJ(r));
    window[Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(t) + "_" + n] = r.getTime()
};
Microsoft.Crm.Client.Core.Framework.$C.$1d = function(n, t, i) {
    if (Microsoft.Crm.Client.Core.Framework.Trace.$LY >= 4) {
        var r = new Date;
        Microsoft.Crm.Client.Core.Framework.$3.$A(i)
            ? Microsoft.Crm.Client.Core.Framework.Trace
            .logInfo(t, "{0} -- {1}", n, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r))
            : Microsoft.Crm.Client.Core.Framework.Trace
            .logInfo(t, "{0} -- {1} -- {2}", n, i, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r));
        window[Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(t) + "_" + n] = r.getTime()
    }
};
Microsoft.Crm.Client.Core.Framework.$C.$1F = function(n, t, i) {
    var r = new Date;
    Microsoft.Crm.Client.Core.Framework.$3.$A(i)
        ? Microsoft.Crm.Client.Core.Framework.Trace
        .logWarning(t, "{0} -- {1}", n, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r))
        : Microsoft.Crm.Client.Core.Framework.Trace
        .logWarning(t, "{0} -- {1} -- {2}", n, i, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r));
    window[Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(t) + "_" + n] = r.getTime()
};
Microsoft.Crm.Client.Core.Framework.$C.$C = function(n, t, i) {
    if (Microsoft.Crm.Client.Core.Framework.Trace.$LY >= 5) {
        var r = new Date;
        Microsoft.Crm.Client.Core.Framework.$3.$A(i)
            ? Microsoft.Crm.Client.Core.Framework.Trace
            .logVerbose(t, "{0} -- {1}", n, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r))
            : Microsoft.Crm.Client.Core.Framework.Trace
            .logVerbose(t, "{0} -- {1} -- {2}", n, i, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r));
        window[Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(t) + "_" + n] = r.getTime()
    }
};
Microsoft.Crm.Client.Core.Framework.$C.$61 = function(n, t, i) {
    if (Microsoft.Crm.Client.Core.Framework.Trace.$LY >= 1) {
        var r = new Date;
        Microsoft.Crm.Client.Core.Framework.$3.$A(i)
            ? Microsoft.Crm.Client.Core.Framework.Trace
            .logError(t, "{0} -- {1}", n, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r))
            : Microsoft.Crm.Client.Core.Framework.Trace
            .logError(t, "{0} -- {1} -- {2}", n, i, Microsoft.Crm.Client.Core.Framework.$C.$OJ(r));
        window[Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(t) + "_" + n] = r.getTime()
    }
};
Microsoft.Crm.Client.Core.Framework.$C.$1tQ = function(n, t, i, r) {
    if (Microsoft.Crm.Client.Core.Framework.Trace.$LY >= 1) {
        var u = new Date;
        Microsoft.Crm.Client.Core.Framework.$3.$A(r)
            ? Microsoft.Crm.Client.Core.Framework.Trace
            .logException(t, i, "{0} -- {1}", n, Microsoft.Crm.Client.Core.Framework.$C.$OJ(u))
            : Microsoft.Crm.Client.Core.Framework.Trace
            .logException(t, i, "{0} -- {1} -- {2}", n, r, Microsoft.Crm.Client.Core.Framework.$C.$OJ(u));
        window[Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(t) + "_" + n] = u.getTime()
    }
};
Microsoft.Crm.Client.Core.Framework.$SX = function(n) {
    Microsoft.Crm.Client.Core.Framework.$SX.initializeBase(this);
    this.$2u = $0.$1(n) || !n ? 20 : n
};
Microsoft.Crm.Client.Core.Framework.$SX.prototype = {
    $2u: 0,
    $nn: 5,
    $Sr: 0,
    $JW: 0,
    $BQ: 1,
    $1FE: !0,
    $1X9: !1,
    get_MoreNextPage: function() { return this.$1FE },
    set_MoreNextPage: function(n) { return this.$1FE = n, this.$8("MoreNextPage"), n },
    get_MorePreviousPage: function() { return this.$1X9 },
    set_MorePreviousPage: function(n) { return this.$1X9 = n, this.$8("MorePreviousPage"), n },
    $FD: function() {
        this.set_MoreNextPage(!1);
        this.set_MorePreviousPage(!1);
        this.$Sr = 0;
        this.$JW = -1;
        this.$BQ = 0
    },
    $2qY: function() { return this.$JW !== -1 }
};
Microsoft.Crm.Client.Core.Framework.$6v = function(n, t) {
    this.$v = n;
    this.$M2 = t
};
Microsoft.Crm.Client.Core.Framework.$6v.$18 = function(n) {
    var t = Microsoft.Crm.Client.Core.Framework.$1b.$18(n.sortinginfo), i = n.columnsizes;
    return new Microsoft.Crm.Client.Core.Framework.$6v(t, i)
};
Microsoft.Crm.Client.Core.Framework.$6v.prototype = {
    $v: null,
    $M2: null,
    $1A: function() {
        var n = {};
        return n.sortinginfo = this.$v.$1A(), n.columnsizes = this.$M2, n
    }
};
Microsoft.Crm.Client.Core.Framework.$m = function() {};
Microsoft.Crm.Client.Core.Framework.$m.$27Y = function(n, t, i) {
    var r, u;
    return $0.$1(n)
        ? n
        : (r = t * 6e4, r += Microsoft.Crm.Client.Core.Framework.$m
            .$10x(n, i), u = n.getTimezoneOffset() * 6e4, new Date(n.getTime() + r + u))
};
Microsoft.Crm.Client.Core.Framework.$m.$2hS = function(n, t, i) {
    var r, u;
    return $0.$1(n)
        ? n
        : (r = t * 6e4, r += Microsoft.Crm.Client.Core.Framework.$m
            .$10x(n, i), u = n.getTimezoneOffset() * 6e4, new Date(n.getTime() - r - u))
};
Microsoft.Crm.Client.Core.Framework.$m.$1Sq = function(n, t) {
    return Microsoft.Crm.Client.Core.Framework.$m.$10x(n, t) / 6e4
};
Microsoft.Crm.Client.Core.Framework.$m.$10x = function(n, t) {
    var u, i, r, f, e;
    if ($0.$1(t)) return 0;
    for (u = null, i = new Date(n.getTime()), i.setHours(0), i.setMinutes(0), i.setSeconds(0), i
            .setMilliseconds(0), r = 0;
        r < t.length;
        r++)
        if (f = t[r].$1Pg, e = t[r].$1Pe, i >= f && i <= e) {
            u = t[r];
            break
        }
    return $0.$1(u) ? 0 : u.$30O(n)
};
Microsoft.Crm.Client.Core.Framework.$m
    .$2It = function(n) { return new Date(n.getTime() + n.getTimezoneOffset() * 6e4) };
Microsoft.Crm.Client.Core.Framework.$m
    .$2Hb = function(n) { return new Date(n.getTime() - n.getTimezoneOffset() * 6e4) };
Microsoft.Crm.Client.Core.Framework.$m.$Gt = function(n, t, i, r) {
    switch (i) {
    case 2:
    case 3:
        return Microsoft.Crm.Client.Core.Framework.$m.$2It(n);
    case 1:
        return Microsoft.Crm.Client.Core.Framework.$m.$27Y(n, t, r);
    default:
        return new Date(n.getTime())
    }
};
Microsoft.Crm.Client.Core.Framework.$m.$Pt = function(n, t, i, r) {
    switch (i) {
    case 2:
    case 3:
        return Microsoft.Crm.Client.Core.Framework.$m.$2Hb(n);
    case 1:
        return Microsoft.Crm.Client.Core.Framework.$m.$2hS(n, t, r);
    default:
        return new Date(n.getTime())
    }
};
Microsoft.Crm.Client.Core.Framework.$m.$2yr = function(n) {
    for (var r = n.getMonth(), i = 0, t = 0; t < r; t++)
        i += Microsoft.Crm.Client.Core.Framework.$m.$2Gd(t, n.getFullYear());
    return i + n.getDate()
};
Microsoft.Crm.Client.Core.Framework.$m.$2Gd = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Framework.$m.$2LH(t)
        ? Microsoft.Crm.Client.Core.Framework.$m.$29Q
        : Microsoft.Crm.Client.Core.Framework.$m.$29P;
    return n ? i[n] - i[n - 1] : i[n]
};
Microsoft.Crm.Client.Core.Framework.$m.$2LH = function(n) { return!(n % 4) && !!(n % 100) || !(n % 400) };
Microsoft.Crm.Client.Core.Framework.$m.$T9 = function(n, t, i) {
    var u = Microsoft.Crm.Client.Core.Framework.$m.$2yr(n) - 1, e = n.getDay() - u % 7, r = (t - e + 14) % 7, f, o;
    return r && r >= i && (r -= 7), f = u - r, f < 0 &&
    (o = n.getFullYear() - 1, u = Microsoft.Crm.Client.Core.Framework.$m
        .$2LH(o)
        ? 366
        : 365, e -= u % 7, r = (t - e + 14) % 7, r && r >= i && (r -= 7), f = u - r), Math.floor(f / 7 + 1)
};
Microsoft.Crm.Client.Core.Framework.$m.$1YW = function(n) {
    return new Date(parseInt(n.replace("/Date(", "").replace(")/", "")))
};
Microsoft.Crm.Client.Core.Framework.$1u = function() {};
Microsoft.Crm.Client.Core.Framework.$1u.$b = function(n) { return window[n] };
Microsoft.Crm.Client.Core.Framework.AuthenticationManager = function(n, t, i) {
    this.$$d_$3M3 = Function.createDelegate(this, this.$3M3);
    this.$$d_$3Go = Function.createDelegate(this, this.$3Go);
    this.$1H6 = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.$HQ));
    Microsoft.Crm.Client.Core.Framework.AuthenticationManager.initializeBase(this);
    this.$65 = "https://" + n;
    this.$1NP = t;
    this.$RO = -1;
    this.$1a9 = !0;
    this.$1AC = i
};
Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$T6 = function(n, t, i) {
    var r = t ? 2 : 1;
    return new Microsoft.Crm.Client.Core.Framework
        .AuthenticationManager(Microsoft.Crm.Client.Core.Framework.Utils.$1B.$31H(n), r, i)
};
Microsoft.Crm.Client.Core.Framework.AuthenticationManager
    .get_defaultInstance = function() { return Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D };
Microsoft.Crm.Client.Core.Framework.AuthenticationManager
    .set_defaultInstance = function(n) {
        return Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D
            ? Microsoft.Crm.Client.Core.Framework.Trace
            .logWarning(159, "Warning: Auth manager is being changed within a session")
            : Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D = n, n
    };
Microsoft.Crm.Client.Core.Framework.AuthenticationManager.prototype = {
    $1NP: 0,
    $65: null,
    $1EZ: !1,
    $1a9: !1,
    $ax: null,
    $1AY: null,
    $RO: 0,
    $1jw: 0,
    $12E: !1,
    $cO: !1,
    $1AC: !1,
    $1e0: null,
    $22I: null,
    get_$21S: function() {
        var n = this.$ax - new Date;
        return n - 6e4
    },
    get_$2Lr: function() { return this.get_$21S() < 0 },
    $1i2: function() {
        var i, r, n, t;
        if (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Starting"), this.$1NP !== 2) {
            if (Microsoft.Crm.Client.Core.Framework.$6.get_$5O()) {
                i = this;
                r = this;
                this.$7c(null).then(function() {
                        Microsoft.Crm.Client.Core.Framework.Trace
                            .logInfo(159, "Authentication: Authorization complete");
                        i.$1TT()
                    },
                    function(n) {
                        Microsoft.Crm.Client.Core.Framework.Trace
                            .logInfo(159, "Authentication: Authorization error: " + n.$10);
                        r.$sz(n)
                    });
                return
            }
            this.$1TT();
            return
        }
        if (Microsoft.Crm.Client.Core.Framework.$3.$A(this.get_$19G())) {
            try {
                n = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb("Authentication_Starting");
                n.$t("LastAuthenticationFailed", this.$cO);
                Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$aN(n)
            } catch (u) {
                Microsoft.Crm.Client.Core.Framework.Trace.logError(159, "Telemetry Failed: " + u.message)
            }
            t = !1;
            this.$cO && (this.$cO = !1, t = !0);
            this.$1HE(t)
        } else
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Starting authorization"), this
                .$251()
    },
    get_$19G: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$1NR) },
    set_$19G: function(n) { return this.$m(Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$1NR, n), n },
    get_LatteAuthToken: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$1NR) },
    add_$Tc: function(n) { this.$2F("OnAuthenticated", n) },
    remove_$Tc: function(n) { this.$4I("OnAuthenticated", n) },
    $2RZ: function() { this.$1HE(!0) },
    onCookieAvailable: function() {
        if (this.$12E = !1, window.clearTimeout(this.$1jw), !this.$1EZ)
            if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$11t()) {
                var n = this, t = this;
                this.$7c(this.$1AY.$152).then(function() {
                        Microsoft.Crm.Client.Core.Framework.Trace
                            .logInfo(159, "Authentication: [MAM_Provider1] Authorization complete");
                        Microsoft.Crm.Client.Core.Framework.Trace
                            .logInfo(159, "Authentication: [MAM_Provider1] Complete");
                        n.$1TT()
                    },
                    function(n) {
                        Microsoft.Crm.Client.Core.Framework.Trace
                            .logInfo(159, "Authentication: [MAM_Provider1] Authorization error: " + n.$10);
                        t.$sz(n)
                    })
            } else Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Complete"), this.$1TT()
    },
    $3Jm: function(n) { this.$1H6.contains(n) || this.$1H6.add(n) },
    $3M3: function() { this.$1HE(!1) },
    $1HE: function(n) {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$21 &&
        (this.$1EZ = !0, this.$12E = !0, this.$cO = !1, this
            .set_$19G(null), this.$RO !== -1 &&
        (n
            ? Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Starting re-authentication")
            : this.$1a9 = !1, window.clearTimeout(this.$RO), this.$RO = -1), this.$1AC = !!(this.$1AC | n), Microsoft
            .Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$3LE(n, this.$$d_$3Go))
    },
    $3Go: function(n) {
        var t, i, r;
        if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) {
            Microsoft.Crm.Client.Core.Framework.$2F.$1ZN(97,
                "AuthenticationProvider.RefreshAuthToken",
                this.$$d_$3M3,
                150);
            return
        }
        if (this.$1EZ = !1, this.$37L(n))
            if (Microsoft.Crm.Client.Core.Framework.Trace.logError(159, "Authentication: Failed"), this.$1a9) {
                this.$cO = !0;
                this.$sz(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999));
                try {
                    t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb("Authentication_Failed");
                    t.$t("Model",
                        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device()
                        .get_DeviceState().get_$1lL());
                    t.$t("Manufacturer",
                        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device()
                        .get_DeviceState().get_$1lK());
                    t.$t("OSTypeVersion", Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1pm());
                    Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$aN(t)
                } catch (u) {
                    Microsoft.Crm.Client.Core.Framework.Trace.logError(159, "Telemetry Failed: " + u.message)
                }
            } else this.$2RZ();
        else {
            i = Microsoft.Crm.Client.Core.Framework.$By.$B(n);
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Token received");
            try {
                r = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb("Authentication_Token_Received");
                r.$t("TokenExpiryTime", i.$ax);
                Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$aN(r)
            } catch (f) {
                Microsoft.Crm.Client.Core.Framework.Trace.logError(159, "Telemetry Failed: " + f.message)
            }
            this.$1AY = i;
            this.set_$19G(i.$k3);
            this.$ax = i.$ax;
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Starting authorization");
            this.$251()
        }
    },
    $37L: function(n) { return n === "AuthError" },
    $251: function() {
        var t, i, n, r;
        if (this.get_$2Lr()) {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(159,
                    "Authentication:Token Expired with Token Timeout value (" +
                    this.get_$21S() +
                    ") --- Retrieving new Auth Token from shim");
            this.$1HE(!0);
            return
        }
        if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$11t())
            t = this, i = this, this.$3HI().then(function() {
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logInfo(159,
                            "Authentication: [MAM_Provider1] Skipping authentication until cookie is received");
                    t.$1bu()
                },
                function() {
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logInfo(159, "Authentication: Authorization error: -2147093999");
                    i.$sz(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999))
                });
        else {
            try {
                Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
                    .$aN(new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                        .$Rb("Authentication_Starting_Authorization"))
            } catch (u) {
                Microsoft.Crm.Client.Core.Framework.Trace.logError(159, "Telemetry Failed: " + u.message)
            }
            n = this;
            r = this;
            this.$7c(this.$1AY.$152).then(function() {
                    Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Authorization complete");
                    try {
                        var t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                            .$Rb("Authentication_Authorization_Complete");
                        t.$t("UserId", n.$1e0.toString());
                        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$aN(t)
                    } catch (i) {
                        Microsoft.Crm.Client.Core.Framework.Trace.logError(159, "Telemetry Failed: " + i.message)
                    }
                    n.$1bu()
                },
                function(n) {
                    var i = $0.$1(n.$Xb) ? n.$10 : n.$Xb.$10, t;
                    Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Authentication: Authorization error: " + i);
                    try {
                        t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                            .$Rb("Authentication_Authorization_Error");
                        t.$t("ErrorCode", i);
                        t.$t("Model",
                            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device()
                            .get_DeviceState().get_$1lL());
                        t.$t("Manufacturer",
                            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device()
                            .get_DeviceState().get_$1lK());
                        t.$t("OSTypeVersion", Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1pm());
                        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$aN(t)
                    } catch (u) {
                        Microsoft.Crm.Client.Core.Framework.Trace.logError(159, "Telemetry Failed: " + u.message)
                    }
                    r.$sz(n)
                })
        }
    },
    $3HI: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4);
        return this.$2QS(n, 6, 0), n.promise()
    },
    $2QS: function(n, t, i) {
        var u = 500, r = this;
        window.setTimeout(function() {
                r.$uc().then(function() { n.resolve(!0) },
                    function() {
                        t > 0 ? r.$2QS(n, t - 1, u) : n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999))
                    })
            },
            i)
    },
    $7c: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            f = this.$1H6.get_Count(),
            r,
            i,
            u,
            e;
        if (f) {
            for (r = [], i = 0; i < f; i++) Array.add(r, this.$1H6.get_$H(i).$7c(n));
            u = this;
            e = this;
            Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(r).then(function(n) {
                    for (var i, f = n, e = f.length, r = 0; r < e; ++r)
                        if (i = f[r], Microsoft.Crm.Client.Core.Framework.$FI.isInstanceOfType(i)) {
                            u.$1e0 = i.$3G;
                            u.$22I = i.$DM;
                            break
                        }
                    t.resolve(!0)
                },
                function(n) { t.reject(n) })
        } else t.resolve(!0);
        return t.promise()
    },
    $1bu: function() {
        var n = this.get_$21S(), t;
        this.get_$2Lr() ? n = 0 : (this.$12E = !0, this.$cO = !1, this.$3Re());
        window.clearTimeout(this.$RO);
        t = this;
        this.$RO = window.setTimeout(function() { t.$1HE(!0) }, n)
    },
    $3Re: function() {
        var t, n;
        if (Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(159, "Authentication: Starting cookie setup"),
            !this.$1AC || Microsoft.Crm.Client.Core.Framework.$6.get_$5O()) {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(159, "Authentication: Cookie setup not needed, the token is still valid.");
            this.onCookieAvailable();
            return
        }
        $get("authToken").setAttribute("value", this.$1AY.$152);
        $get("wctx").setAttribute("value", "ru=" + CrmEncodeDecode.CrmUrlEncode(this.$65) + "/nga/main.aspx");
        t = $get("authForm");
        t.action = this.$65;
        n = this;
        this.$1jw = window.setTimeout(function() {
                if (n.$12E = !1, n.$cO = !0, Microsoft.Crm.Client.Core.Framework.Trace
                    .logInfo(159, "Authentication: Failed - cookie setup"), Microsoft.Crm.Client.Core.Framework.PAL.Core
                    .NativeBridge.get_Instance().$1T.get_$33().get_$11t()) {
                    var t = $get("authFrame"), i = t.contentDocument.head.innerHTML;
                    i.indexOf("window.parent.authenticatedPageLoaded()") === -1
                        ? (Microsoft.Crm.Client.Core.Framework.Trace
                            .logInfo(159, "Authentication: Failed - Authorization Error from Request for Cookie"), n
                            .$sz(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147094013)))
                        : Microsoft.Crm.Client.Core.Framework.Trace
                        .logInfo(159,
                            "Authentication: Found auth callback in response. Possible race condition which can be ignored")
                } else
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logInfo(159, "Authentication: Failed - Device is Offline"), n
                        .$sz(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999))
            },
            6e4);
        t.submit()
    },
    get_$Fq: function() { return this.$cO ? 2 : !this.$1EZ && !this.$12E ? 1 : 0 },
    $3VP: function(n) {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$11t() ||
            this.$1NP !== 2 ||
            n.setRequestHeader("Authorization", this.get_$19G())
    },
    $20G: function() {
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
            ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$20G()
            : this.$1zq()
    },
    $2RU: function() {
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
            ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$2RU()
            : this.$1zq()
    },
    $25s: function() {
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
            ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$25s()
            : this.$1zq()
    },
    $1zq: function() {
        var n = window.location.hostname,
            t = window.location.port,
            i = Microsoft.Crm.Client.Core.Framework.$3.$A(t)
                ? n
                : Microsoft.Crm.Client.Core.Framework.$3.$MD("{0}:{1}", n, t),
            r = window.location.protocol + "//" + i;
        window.location.href = r + "/main.aspx?signout=1"
    },
    $uc: function() {
        var n, t, i, r, u, f;
        return $.support.cors = !0, n = {}, n.cache = !1, n.type = "HEAD", n.url = "/nga/main.htm", t = MscrmComponents
            .DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), i = new Microsoft.Crm.Client.Core
            .Framework.PerformanceStopwatch("Ping"), i.start(), r = this, t
            .always(function() { i.stop() }), u = this, f = this, $.ajax(n).success(function() { t.resolve() })
            .error(function() { t.reject() }), t.promise()
    },
    $sz: function(n) {
        n.$NA = 1;
        this.$1DH("OnAuthenticated", this, new Microsoft.Crm.Client.Core.Framework.$O8(!0, n, null, null))
    },
    $1TT: function() {
        this.$1DH("OnAuthenticated", this, new Microsoft.Crm.Client.Core.Framework.$O8(!1, null, this.$1e0, this.$22I))
    }
};
Microsoft.Crm.Client.Core.Framework.$O8 = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.$O8.initializeBase(this);
    this.$L1 = n;
    this.$Sh = t;
    this.$3G = i;
    this.$DM = r
};
Microsoft.Crm.Client.Core.Framework.$O8.prototype = { $L1: !1, $Sh: null, $3G: null, $DM: null };
Microsoft.Crm.Client.Core.Framework.$OA = function(n) {
    Microsoft.Crm.Client.Core.Framework.$OA.initializeBase(this);
    this.$2QF(n)
};
Microsoft.Crm.Client.Core.Framework.$OA.prototype = {
    $2QF: function(n) {
        var f = !0, t, e, o, s, h, i, r, u;
        n.$3J("t", "http://schemas.xmlsoap.org/ws/2005/02/trust");
        n.$3J("wsu", "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd");
        n.$3J("xenc", "http://www.w3.org/2001/04/xmlenc#");
        n.$3J("wsp", "http://schemas.xmlsoap.org/ws/2004/09/policy");
        n.$3J("wsa", "http://www.w3.org/2005/08/addressing");
        t = n.$O("/t:RequestSecurityTokenResponse/wsp:AppliesTo/wsa:EndpointReference/wsa:Address");
        t && t.get_$r().indexOf("urn:") === -1
            ? this.$2Sh = new Microsoft.Crm.Client.Core.Framework.Net.Uri(t.get_$r())
            : f = !1;
        e = n.$O("/t:RequestSecurityTokenResponse");
        this.$152 = e.get_$7W();
        o = n.$O("/t:RequestSecurityTokenResponse/t:RequestedSecurityToken");
        this.$k3 = o.$Aq().get_$H(0).get_$7W();
        f
            ? (this.$ax = new Date, s = n
                    .$O("/t:RequestSecurityTokenResponse/t:Lifetime"),
                s &&
                (h = n.$O("/t:RequestSecurityTokenResponse/t:Lifetime/wsu:Expires"), i = h
                    .get_$r(), Microsoft.Crm.Client.Core.Framework.$3.$A(i) || (this.$ax = new Date(i))))
            : (n.$3J("saml", "urn:oasis:names:tc:SAML:1.0:assertion"), r = n
                    .$O("/t:RequestSecurityTokenResponse/t:RequestedSecurityToken/saml:Assertion/saml:Conditions"),
                r &&
                (u = r.$1Q("NotOnOrAfter").toString(), Microsoft.Crm.Client.Core.Framework.$3.$A(u) ||
                    (this.$ax = new Date(u))))
    }
};
Microsoft.Crm.Client.Core.Framework.$FI = function(n, t) {
    this.$3G = n;
    this.$DM = t
};
Microsoft.Crm.Client.Core.Framework.$FI.prototype = { $3G: null, $DM: null };
Microsoft.Crm.Client.Core.Framework.$OF = function(n) {
    Microsoft.Crm.Client.Core.Framework.$OF.initializeBase(this);
    this.$2QF(n)
};
Microsoft.Crm.Client.Core.Framework.$OF.prototype = {
    $2QF: function(n) {
        var t = n.$O("/RequestOAuthSecurityTokenResponse/AccessToken");
        this.$k3 = t.get_$r();
        var i = n.$O("/RequestOAuthSecurityTokenResponse/EncodedAccessToken"),
            r = i.get_$r(),
            u = n.$O("/RequestOAuthSecurityTokenResponse/ExpiresOn");
        this.$ax = new Date(u.get_$r());
        this.$152 = String
            .format('<t:RequestSecurityTokenResponse xmlns:t="http://schemas.xmlsoap.org/ws/2005/02/trust">\r\n\t<t:Lifetime>\r\n\t\t<wsu:Created xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">2013-05-21T00:58:40.544Z<\/wsu:Created>\r\n\t\t<wsu:Expires xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">2013-05-22T00:58:40.544Z<\/wsu:Expires>\r\n\t<\/t:Lifetime>\r\n\t<wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy">\r\n\t\t<EndpointReference xmlns="http://www.w3.org/2005/08/addressing">\r\n\t\t\t<Address>https://kevinwhi9852org2.crm.crmlivetoday.com/<\/Address>\r\n\t\t<\/EndpointReference>\r\n\t<\/wsp:AppliesTo>\r\n\t<t:RequestedSecurityToken>\r\n\t\t<wsse:BinarySecurityToken wsu:Id="_febfbc5a-99cf-4298-ae6f-7d752db4cb24-FECE4032DF73C0855F4B4BA9EAEB9E47" ValueType="urn:ietf:params:oauth:token-type:jwt" EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">{0}<\/wsse:BinarySecurityToken>\r\n\t<\/t:RequestedSecurityToken>\r\n\t<t:TokenType>urn:ietf:params:oauth:token-type:jwt<\/t:TokenType>\r\n\t<t:RequestType>http://schemas.xmlsoap.org/ws/2005/02/trust/Issue<\/t:RequestType>\r\n\t<t:KeyType>http://schemas.xmlsoap.org/ws/2005/05/identity/NoProofKey<\/t:KeyType>\r\n<\/t:RequestSecurityTokenResponse>', r)
    }
};
Microsoft.Crm.Client.Core.Framework.$By = function() {};
Microsoft.Crm.Client.Core.Framework.$By.$B = function(n) {
    n = Microsoft.Crm.Client.Core.Framework.$3.$3Kr(n, "");
    var i = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n),
        t = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(i),
        r = t.$O("/RequestOAuthSecurityTokenResponse/AccessToken");
    return r ? new Microsoft.Crm.Client.Core.Framework.$OF(t) : new Microsoft.Crm.Client.Core.Framework.$OA(t)
};
Microsoft.Crm.Client.Core.Framework.$By.prototype = { $152: null, $k3: null, $ax: null, $2Sh: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Binding");
Microsoft.Crm.Client.Core.Framework.Binding.$HR = function() {};
Microsoft.Crm.Client.Core.Framework.Binding.$HR.registerInterface("Microsoft.Crm.Client.Core.Framework.Binding.$HR");
Microsoft.Crm.Client.Core.Framework.Binding.$TM = function(n, t, i, r, u) {
    this.$$d_$2OJ = Function.createDelegate(this, this.$2OJ);
    Microsoft.Crm.Client.Core.Framework.Binding.$TM.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "executeCommand");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$164(t, -1, "traceComponent");
    this.$N1 = t;
    i
        ? (Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(r, "canExecuteProperty"), Microsoft.Crm.Client.Core
            .Framework.Utils.$E.$1W(u, "propertyGetter"), this.$JB = n, this.$15d = i, this.$oB = r, this.$1wt = u, this
            .$15d.apcl(this.$oB, this.$$d_$2OJ), this.$2OJ(this.$15d, this.$oB))
        : this.set_$2a(n)
};
Microsoft.Crm.Client.Core.Framework.Binding.$TM.prototype = {
    $JB: null,
    $15d: null,
    $oB: null,
    $1wt: null,
    $GN: function() {
        this.$15d && this.$15d.rpcl(this.$oB, this.$$d_$2OJ);
        Microsoft.Crm.Client.Core.Framework.Binding.$3Z.prototype.$GN.call(this)
    },
    $2OJ: function() {
        var n = this.$1wt();
        n ? this.set_$2a(this.$JB) : this.set_$2a(null)
    }
};
Microsoft.Crm.Client.Core.Framework.Binding.$3Z = function() {
    Microsoft.Crm.Client.Core.Framework.Binding.$3Z.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() &&
        Array.add(Microsoft.Crm.Client.Core.Framework.Binding.$3Z.get_$1hb(), this)
};
Microsoft.Crm.Client.Core.Framework.Binding.$3Z.get_$1hb = function() {
    return Microsoft.Crm.Client.Core.Framework.Binding.$3Z.$1Mt ||
        (Microsoft.Crm.Client.Core.Framework.Binding.$3Z.$1Mt = []), Microsoft.Crm.Client.Core.Framework.Binding.$3Z
        .$1Mt
};
Microsoft.Crm.Client.Core.Framework.Binding.$3Z.prototype = {
    $19c: !0,
    $JB_2: null,
    $N1: 0,
    add_$25w: function(n) { this.AddPropertyChangedListener("CanExecute", n) },
    remove_$25w: function(n) { this.RemovePropertyChangedListener("CanExecute", n) },
    $2f8: function() { return!0 },
    get_CanExecute: function() {
        return Microsoft.Crm.Client.Core.Framework.$6.$w ? this.$2f8() && this.$19c : this.$19c
    },
    set_CanExecute: function(n) { return this.$19c !== n && (this.$19c = n, this.$8("CanExecute")), n },
    set_$2a: function(n) { return this.$JB_2 = n, this.set_CanExecute(!!this.$JB_2), n },
    set_$1JG: function(n) { return this.$N1 = n, n },
    execute: function() {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1dI(this.get_CanExecute(),
            !0,
            "Can't raise command when canExecute is false.");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(this.$JB_2,
            "Can't raise command when no execute command is specified.");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1J2(this.$N1,
            "Can't raise command when TraceComponent is undefinded.");
        try {
            this.$JB_2()
        } catch (n) {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logException(this.$N1, n, "Unhandled exception while executing Command.");
            throw n;
        }
    },
    $GN: function() {
        Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() &&
            Array.remove(Microsoft.Crm.Client.Core.Framework.Binding.$3Z.get_$1hb(), this);
        Microsoft.Crm.Client.Core.Framework.$BI.prototype.$GN.call(this)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Common");
Microsoft.Crm.Client.Core.Framework.Common.$HL = function() {};
Microsoft.Crm.Client.Core.Framework.Common.$HL.registerInterface("Microsoft.Crm.Client.Core.Framework.Common.$HL");
Microsoft.Crm.Client.Core.Framework.Common.$Dt = function() {};
Microsoft.Crm.Client.Core.Framework.Common.$Dt.prototype = { auto: 0, inactive: 1, active: 2, disabled: 3 };
Microsoft.Crm.Client.Core.Framework.Common.$Dt.registerEnum("Microsoft.Crm.Client.Core.Framework.Common.$Dt", !1);
Microsoft.Crm.Client.Core.Framework.Common.$O4 = function() {
    this.$1B1 = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Function));
    Microsoft.Crm.Client.Core.Framework.Common.$O4.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.Common.$O4.prototype = {
    $1yy: function(n) {
        if ($0.$1(n)) throw Error.argumentNull("disposeAction");
        this.$1B1.add(n)
    },
    $1aw: function(n, t, i) {
        n.apcl(t, i);
        var r = this;
        this.$1yy(function() { n.rpcl(t, i) })
    },
    $GN: function() {
        for (var n = this.$1B1.get_Count() - 1; n >= 0; n--) this.$1B1.get_$H(n)();
        this.$1B1.clear()
    }
};
Microsoft.Crm.Client.Core.Framework.Common.$2 = function() {};
Microsoft.Crm.Client.Core.Framework.Common.$2.$$cctor = function() {
    Microsoft.Crm.Client.Core.Framework.Common.$2.$3Ur(Microsoft.Crm.Client.Core.Framework.$6.get_$37o())
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$3Ur = function(n) {
    Microsoft.Crm.Client.Core.Framework.Common.$2.$2LB = n
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$pF = function(n) {
    $0.$1(n) || (Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx = n)
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$1DQ = function(n) {
    return n in Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$6 = function(n) {
    return n in Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx
        ? Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx[n]
        : n
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$34d = function(n) {
    return"Error_Title_0x" + Microsoft.Crm.Client.Core.Framework.Common.$2.$sr(n) in
        Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$34c = function(n) {
    return"Error_Message_0x" + Microsoft.Crm.Client.Core.Framework.Common.$2.$sr(n) in
        Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$2H8 = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Framework.Common.$2.$2zT(n);
    return String.format.apply(null, [Microsoft.Crm.Client.Core.Framework.Common.$2.$6(i)].concat(t))
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$5I = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Framework.Common.$2.$2zS(n);
    return i in Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx
        ? $0.$1(t)
        ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6(i)
        : String.format.apply(null, [Microsoft.Crm.Client.Core.Framework.Common.$2.$6(i)].concat(t))
        : String.format.apply(null,
        [
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Error_Message_Generic_Mobile_Client"),
            "0x" + n.toString(16)
        ].concat(t))
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$10y = function(n) {
    return n.$10 !== -2147220891 || $0.$1(n.$E) ? Microsoft.Crm.Client.Core.Framework.Common.$2.$5I(n.$10) : n.$E
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$2zT = function(n) {
    if ($0.$1(n)) return"Error_Title_Generic";
    var t = "Error_Title_0x" + Microsoft.Crm.Client.Core.Framework.Common.$2.$sr(n);
    return t in Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx || (t = "Error_Title_Generic"), t
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$2zS = function(n) {
    return"Error_Message_0x" + Microsoft.Crm.Client.Core.Framework.Common.$2.$sr(n)
};
Microsoft.Crm.Client.Core.Framework.Common.$2.$sr = function(n) {
    var t = n;
    return t < 0 && (t = t + 4294967295 + 1), t.toString(16)
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.CustomControl");
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage = function() {};
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage.prototype = { bound: 0, input: 1, output: 2 };
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage
    .registerEnum("Microsoft.Crm.Client.Core.Framework.CustomControl.PropertyUsage", !1);
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord = function(n, t, i) {
    this.Usage = n;
    this.Type = t;
    this.Value = i;
    this.Static = !0;
    this.Primary = !1;
    this.IsRollupOrCalculatedFieldValid = !1
};
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord
    .prototype = { Usage: 0, Type: null, Value: null, Static: !1, Primary: !1, IsRollupOrCalculatedFieldValid: !1 };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Async");
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.ClientWatson");
Microsoft.Crm.Client.Core.Framework.ClientWatson.$AT = function() {};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$AT
    .registerInterface("Microsoft.Crm.Client.Core.Framework.ClientWatson.$AT");
Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn = function() {
    Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn.prototype = {
    handleNewWindowError: function(n) {
        var t = n.Number;
        if ($0.$1(t)) throw n;
        switch (t) {
        case-2147467262:
        case-2147467259:
        case-2147024882:
        case-2147024888:
            throw Error.create("143abf4577894d22ae34a054a6dce7fe");
        default:
            throw n;
        }
    },
    $1Vc: function(n) { return n === "143abf4577894d22ae34a054a6dce7fe" },
    $1px: function(n, t) {
        try {
            throw Error.create();
        } catch (i) {
            return Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1rA(i, n, t)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37 = function() {};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37
    .get_$2gY = function() {
        return Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1OT ||
        (Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1OT = Microsoft.Crm.Client.Core.Framework
            .ClientWatson.$37.$2yG()), Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1OT
    };
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1rA = function(n, t, i) {
    var f, e, o, r, u, s, h;
    if (i.val = 0, $0.$1(n))
        return"GenericBrowserErrorHandler.InternalGetStackTrace: Extended error information not available from this browser.";
    if (f = n.stack, $0.$1(f))
        return"GenericBrowserErrorHandler.InternalGetStackTrace: Exception stack trace not available from this browser.";
    for (e = f.split("\n"), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$ZE && (t += 1), i
            .val = 0, o = "", r = t;
        r < e.length;
        r++)
        (u = e[r], u !== "") &&
        (s = Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$2HM(u), h = Microsoft.Crm.Client.Core.Framework
            .$3.$1qL(s), i.val ^= h, o += u + "\r\n");
    return o
};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$2HM = function(n) {
    var s = "    at ", e, i, r, h, t, u, f, o;
    return(n
            .startsWith(s) &&
            (n = n.substr(s.length)), e = "Function.", n.startsWith(e) && (n = n.substr(e.length)), i = n
            .indexOf("("), r = n.indexOf(" "), i === -1 && r === -1)
        ? "anonymous"
        : (h = i > 0 && r > 0 ? Math.min(i, r) : Math.max(i, r), t = n.substring(0, h), u = t.indexOf("$", 0), u === -1)
        ? "anonymous"
        : (f = t.indexOf("$", u + 1), f === -1)
        ? t
        : (o = t.indexOf("$", f + 1), o === -1 ? t : t.substring(f + 1, o - u))
};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$2yG = function() {
    var n = window.navigator, t;
    try {
        t = document.cookie
    } catch (i) {
        t = ""
    }
    return{
        "CPU Class": n.cpuClass,
        Platform: window.navigator.platform,
        "Browser language": Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Kz
            ? n.browserLanguage
            : n.language,
        "Cookie enabled": window.navigator.cookieEnabled,
        "User agent": window.navigator.userAgent,
        "Document.Cookie": t
    }
};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.prototype = {
    $1Vc: function() { return!1 },
    $2zV: function(n, t) { return Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1rA(n, 0, t) },
    $1px: function(n, t) {
        var i = new Error;
        return Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1rA(i, n, t)
    }
};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$CV = function() {};
Microsoft.Crm.Client.Core.Framework.ClientWatson.$CV.$3Aa = function(n, t, i) {
    try {
        i()
    } catch (r) {
        Microsoft.Crm.Client.Core.Framework.Trace.logException(n, r, "Exception context: {0}", t)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.LocalStorage");
Microsoft.Crm.Client.Core.Framework.LocalStorage.$HN = function() {};
Microsoft.Crm.Client.Core.Framework.LocalStorage.$HN
    .registerInterface("Microsoft.Crm.Client.Core.Framework.LocalStorage.$HN");
Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e = function() {};
Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e
    .get_$Ix = function() {
        return $0.$1(Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.$1Mc) &&
        (Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.$1Mc = new Microsoft.Crm.Client.Core.Framework
            .LocalStorage.$P4), Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.$1Mc
    };
Microsoft.Crm.Client.Core.Framework.LocalStorage.$ND = function() { this.$2R0 = ["MoCASessionID"] };
Microsoft.Crm.Client.Core.Framework.LocalStorage.$ND.prototype = {
    $76: function() {
        for (var i, u, n = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(String)), f = this.$2R0, o = f.length, t = 0;
            t < o;
            ++t) i = f[t], n.set_$H(i, this.$F4(i));
        this.$36W();
        for (var e = n.get_$396(), s = e.length, r = 0; r < s; ++r) u = e[r], this.$vn(u, n.get_$H(u))
    }
};
Microsoft.Crm.Client.Core.Framework.LocalStorage.$P4 = function() {
    Microsoft.Crm.Client.Core.Framework.LocalStorage.$P4.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.LocalStorage.$P4.prototype = {
    $1VQ: !1,
    $1Tj: !1,
    get_$37k: function() {
        if (!this.$1Tj)
            try {
                localStorage.setItem("test", "test");
                localStorage.getItem("test");
                localStorage.removeItem("test");
                this.$1VQ = !0;
                this.$1Tj = !0
            } catch (n) {
                this.$1VQ = !1;
                this.$1Tj = !0
            }
        return this.$1VQ
    },
    $F4: function(n) { return localStorage.getItem(n) },
    $vn: function(n, t) {
        try {
            localStorage.setItem(n, t)
        } catch (i) {
        }
    },
    $oO: function(n) { localStorage.removeItem(n) },
    $36W: function() { localStorage.clear() }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.PAL.Core");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$NG = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hm = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hm.registerInterface("Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hm");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hv = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hv.registerInterface("Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hv");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hn = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hn.registerInterface("Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hn");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hk = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hk.registerInterface("Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hk");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UF = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$UF.initializeBase(this, [n, t, i, r, u, f, e, o])
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UF.prototype = {
    $2ep: function(n) {
        var t = window.self.appSharedObject;
        t.sendMessageToApp(n)
    },
    $2DM: function() {
        return{
            k: this.$2I,
            n: this.$tz,
            m: this.$nI,
            v: this.$6w,
            a: Sys.Serialization.JavaScriptSerializer.serialize(this.$Pb),
            c: Sys.Serialization.JavaScriptSerializer.serialize(this.$Lw)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UG = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$UG.initializeBase(this, [n, t, i, r, u, f, e, o])
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UG
    .prototype = {
        $2DM: function() { return{ k: this.$2I, n: this.$tz, m: this.$nI, v: this.$6w, a: this.$Pb, c: this.$Lw } }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UH = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$UH.initializeBase(this, [n, t, i, r, u, f, e, o])
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UH.prototype = { $2ep: function(n) { window.external.notify(n) } };
Microsoft.Crm.Client.Core.Framework.PAL.Core.$FK = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$FK.initializeBase(this);
    this.$13T = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$FK.prototype = { $13T: null, $25l: function() { this.$13T() } };
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D.initializeBase(this);
    this.$13a = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D.$$cctor = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D.$1kx
        .set_$392(new Microsoft.Crm.Client.Core.Framework.$Pl(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H))
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D
    .prototype = {
        $13a: null,
        get_$2lN: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D.$1kx) },
        $25l: function() { this.$13a(this.get_$2lN().$21O()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Core.$NE = function() {
    this.$$d_$3Hk = Function.createDelegate(this, this.$3Hk);
    this.$$d_$3X1 = Function.createDelegate(this, this.$3X1);
    this.$22b = this.$$d_$3X1;
    window.addEventListener("message", this.$$d_$3Hk, !1)
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$NE.prototype = {
    $22b: null,
    $3X1: function(n) { this.$2NB(n) },
    $3Hk: function(n) {
        var u = n, e = u.origin, t = e.toLowerCase(), i, r, f;
        if (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl) {
            if (i = window.location.port, r = window.location
                .protocol +
                "//" +
                window.location.hostname, $0.$1(i) || i === "" || (r += ":" + i), t !== r.toLowerCase()) return
        } else if (t !== "ms-appx://microsoft.microsoftdynamicscrm" &&
            t !== "ms-appx://microsoft.microsoftdynamicscrmforwindows8.1" &&
            t !== "ms-appx://microsoft.microsoftdynamicscrmforwindows10") return;
        f = n;
        f.stopImmediatePropagation();
        this.$2NB(u.data)
    },
    $2NB: function(n) {
        var i, r, t;
        try {
            i = JSON.parse(n)
        } catch (u) {
            Microsoft.Crm.Client.Core.Framework.Trace.logException(81, u, "Failed to parse message");
            return
        }
        if (i.target === "PALNativeBridge") {
            r = i.functionName;
            t = i.functionArguments;
            switch (r) {
            case"prepareStates":
                PALNativeBridge.prepareStates(Args[0]);
                return;
            case"clientReady":
                PALNativeBridge.clientReady(Args[0]);
                return;
            case"deviceReady":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().deviceReady(t[0], t[1]);
                return;
            case"deviceActive":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().deviceActive();
                return;
            case"deviceInactive":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().deviceInactive();
                return;
            case"deviceResume":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().deviceResume();
                return;
            case"devicePause":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().devicePause();
                return;
            case"deviceCallback":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
                    .deviceCallback(t[0], t[1], t[2]);
                return;
            case"deviceUnregisterCallback":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().deviceUnregisterCallback(t[0]);
                return;
            case"deviceEvent":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().deviceEvent(t[0], t[1], t[2]);
                return;
            case"devicePullArgs":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().devicePullArgs(t[0]);
                return;
            case"deviceSearch":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().deviceSearch(t[0]);
                return;
            case"voiceCommand":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().voiceCommand(t[0]);
                return;
            case"tileActivation":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$3Ta(t[0]);
                return;
            case"appLink":
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().appLink(t[0]);
                return;
            default:
                Microsoft.Crm.Client.Core.Framework.Trace.logError(81, "Attempting to call unknown method: {0}", r);
                return
            }
        }
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Tz = function(n, t, i, r, u, f, e, o) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$Tz.initializeBase(this, [n, t, i, r, u, f, o]);
    this.$1hn = e
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Tz.prototype = {
    $1hn: null,
    $25l: function() {
        this.get_$7w().$9O("WindowMessageNativeCall.Call.Start", (new Date).getTime());
        this.get_$7w().$9O(Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1c1, "");
        this.get_$7w().$CZ &&
            this.get_$7w().$CZ !== "" &&
            (this.$Pb[Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1Ax] = this.get_$7w().$CZ);
        var n = this.$2DM();
        this.$2ep(n);
        this.get_$7w().$9O("WindowMessageNativeCall.Call.End", (new Date).getTime())
    },
    $2ep: function(n) {
        var t = (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl ? "https://" : "ms-appx://") +
            this.$1hn.toLowerCase();
        window.parent.postMessage(n, t)
    },
    $2DM: function() {
        return String.format("http://pal/?k={0}&n={1}&m={2}&v={3}&a={4}&c={5}",
            encodeURIComponent(this.$2I),
            encodeURIComponent(this.$tz),
            encodeURIComponent(this.$nI),
            encodeURIComponent(this.$6w),
            encodeURIComponent(Sys.Serialization.JavaScriptSerializer.serialize(this.$Pb)),
            encodeURIComponent(Sys.Serialization.JavaScriptSerializer.serialize(this.$Lw)))
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h.initializeBase(this);
    this.$13T = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h
    .prototype = {
        $13T: null,
        get_$3NA: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h.$2TS) },
        $25l: function() { this.$13T(this.get_$3NA()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6E = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "callback");
    this.$yd = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M
    .prototype = {
        $yd: null,
        get_$2Ap: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M.$2Aq) },
        $25l: function() { $0.$1(this.get_$2Ap()) || this.$yd(this.get_$2Ap()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a = function(n, t, i, r, u, f, e) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.initializeBase(this, [n, t, i, r, {}, f, e]);
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(u, "args");
    this.$1ZH = this.$I;
    Microsoft.Crm.Client.Core.Framework.$3.$A(e.$CZ) ||
        (u[Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1Ax] = e.$CZ);
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.$1ZI[this.$1ZH] = u
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.$3In = function(n) {
    var i = Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.$1ZI[n], t;
    if (!i) {
        t = String.format("Couldn't find pull args matching id '{0}'", n);
        Microsoft.Crm.Client.Core.Framework.Trace.logError(81, t);
        throw Error.invalidOperation(t);
    }
    return delete Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.$1ZI[n], i
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.prototype = {
    $1ZH: null,
    $2DU: function() {
        var n = Microsoft.Crm.Client.Core.Framework.PAL.Core.$U5.prototype.$2DU.call(this);
        return String.format("{0}&p={1}", n, encodeURIComponent(this.$1ZH))
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d = function(n, t) {
    this.$CZ = n;
    this.$I1 = t
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d
    .prototype = { $CZ: null, $I1: null, $9O: function(n, t) { this.$I1 && this.$I1.$9O(this.$CZ, n, t) } };
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge = function(n) {
    this.$Lw = {};
    this.$zl = {};
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.initializeBase(this);
    this.$S2 = n;
    this.$uf = new Array(0);
    this.$1T = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN(this, this);
    this.$22g = new Microsoft.Crm.Client.Core.Framework.PAL.Core.$NE;
    this.$3Jh()
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge
    .$$cctor = function() { Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.$35a() };
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge
    .get_Instance = function() {
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.$D ||
        (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.$D = new Microsoft.Crm.Client.Core.Framework.PAL
            .Core.NativeBridge(new Microsoft.Crm.Client.Core.Framework.$7C)), Microsoft.Crm.Client.Core.Framework.PAL
            .Core.NativeBridge.$D
    };
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge
    .set_Instance = function(n) { return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.$D = n, n };
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.$35a = function() {
    window.PALNativeBridge = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance();
    window.PALWebViewMessageHandler = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$22g.$22b
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.prototype = {
    $Tx: !1,
    $1w9: !1,
    $2I: null,
    $S2: null,
    $1GP: !1,
    $1GQ: null,
    $uf: null,
    $Dc: null,
    $TW: null,
    $1T: null,
    $1lI: null,
    $39: null,
    $Ma: null,
    $14V: null,
    $yI: null,
    $6m: null,
    $BB: null,
    $VD: null,
    $il: null,
    $22Z: null,
    $UK: null,
    $ZT: null,
    $5Q: null,
    $22g: null,
    $z2: null,
    $SO: null,
    $at: null,
    add_$1Fc: function(n) { this.$Tx ? n() : this.$2F("OnReady", n) },
    add_$3CO: function(n) { this.$2F("OnActive", n) },
    add_$2PA: function(n) { this.$2F("OnPause", n) },
    add_$2PM: function(n) { this.$2F("OnResume", n) },
    add_$1vT: function(n) { this.$2F("OnSearch", n) },
    remove_$1vT: function(n) { this.$4I("OnSearch", n) },
    add_$2Pf: function(n) { this.$2F("OnVoiceCommand", n) },
    add_$3FG: function(n) { this.$2F("OnTileActivation", n) },
    add_$2OE: function(n) { this.$2F("OnAppLink", n) },
    get_$2N: function() { return this.$1T.get_$33() },
    get_$cd: function() { return this.$1T.get_$33() },
    get_device: function() { return this.$1lI },
    set_device: function(n) { return this.$1lI = n, n },
    get_Cordova: function() { return this.$z2 },
    set_Cordova: function(n) { return this.$z2 = n, n },
    get_CordovaMedia: function() { return this.$SO },
    set_CordovaMedia: function(n) { return this.$SO = n, n },
    get_Sync: function() { return this.$at },
    set_Sync: function(n) { return this.$at = n, n },
    $3aR: function(n) {
        var t, i, r, u, f, e, o;
        if (!this.$1T.$21) {
            if (t = $.cookie("PALStates"), i = null, t &&
            (t.length > 3e3 &&
                Microsoft.Crm.Client.Core.Framework.Trace
                .logWarning(81, "PALStates cookie length close to cookie limit, length {0}", t.length), $
                .cookie("PALStates", null, { path: "/" }), i = Sys.Serialization.JavaScriptSerializer
                .deserialize(t), !Object.isInstanceOfType(i))) {
                r = "Invalid JSON for states cookie, " + t;
                Microsoft.Crm.Client.Core.Framework.Trace.logError(81, r);
                throw Error.invalidOperation(r);
            }
            if (n = n || i, $0.$1(n)) {
                u = "State cache unavailable";
                Microsoft.Crm.Client.Core.Framework.Trace.logError(81, u);
                throw Error.invalidOperation(u);
            }
            if (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Preparing states"), f = n.jsonStates, e = Sys
                .Serialization.JavaScriptSerializer.deserialize(f), Object
                .isInstanceOfType(e)) this.$2I = n.key, this.$2Vh(e);
            else {
                o = "Invalid JSON for prepare states, " + f;
                Microsoft.Crm.Client.Core.Framework.Trace.logError(81, o);
                throw Error.invalidOperation(o);
            }
        }
    },
    $1OW: function(n) {
        $0.$1(n) && (n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f);
        this.$1T.$1OW(n)
    },
    deviceReady: function(n, t) {
        var i, r;
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "key"), Microsoft.Crm.Client.Core.Framework.Utils.$E
            .$4k(t, "jsonStates"), Microsoft.Crm.Client.Core.Framework.Trace
            .logInfo(81, "Ready, key {0} states {1}", n, t), i = Sys.Serialization.JavaScriptSerializer
            .deserialize(t), Object.isInstanceOfType(i)) this.$2mA(n, i);
        else {
            r = "Invalid JSON for ready states, " + t;
            Microsoft.Crm.Client.Core.Framework.Trace.logError(81, r);
            throw Error.invalidOperation(r);
        }
    },
    deviceActive: function() {
        this.$wK();
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Active");
        this.$29q()
    },
    deviceInactive: function() {
        this.$wK();
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Inactive");
        this.$t0("OnInactive")
    },
    deviceResume: function() {
        this.$wK();
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Resume");
        this.$29w()
    },
    devicePause: function() {
        this.$wK();
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Pause");
        this.$1w9 = !0;
        this.$t0("OnPause")
    },
    deviceCallback: function(n, t, i) {
        var r, u, f, e;
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "callbackID"), Microsoft.Crm.Client.Core.Framework.Utils
                .$E.$4k(t, "jsonArgs"), this.$wK(), Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(81, "Callback, Callback Id: {0}, Unregister: {1}", n, i), Microsoft.Crm.Client.Core
                .Framework
                .Trace
                .logVerbose(81, "Callback, JSONArgs: {0}", t), r = n in this.$Lw ? this.$Lw[n] : null,
            r && r.get_$7w().$9O("NativeBridge.DeviceCallback.Deserialize.Start", (new Date).getTime()), u = Microsoft
                .Crm
                .Client.Core.Framework.$5S.$1u(t, null), r &&
                r.get_$7w().$9O("NativeBridge.DeviceCallback.Deserialize.End", (new Date).getTime()), Object
                .isInstanceOfType(u))
            return f = this.$2m6(n, u, i), f ? Sys.Serialization.JavaScriptSerializer.serialize(f) : "";
        e = "Invalid JSON for callback args, " + t;
        Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, e);
        throw Error.invalidOperation(e);
    },
    deviceUnregisterCallback: function(n) {
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "callbackID"), this.$wK(), Microsoft.Crm.Client.Core
            .Framework.Trace.logVerbose(81, "Unregister, {0}", n), n in this.$Lw) delete this.$Lw[n];
        else {
            var t = "Attempting to unregister unknown callback, " + n;
            Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, t);
            throw Error.invalidOperation(t);
        }
    },
    deviceEvent: function(n, t, i) {
        var f, e, o, s, r, h, u, c;
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "namespaceName"), Microsoft.Crm.Client.Core.Framework
            .Utils.$E.$4k(t, "name"), Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(i, "value"), this
            .$wK(), Microsoft.Crm.Client.Core.Framework.Trace
            .logInfo(81, "Event, {0}, {1}, {2}", n, t, i), !(n in this.$zl)) {
            f = "Attempting to raise event in unknown namespace, " + n;
            Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, f);
            throw Error.invalidOperation(f);
        }
        if (e = this.$zl[n], o = Sys.Serialization.JavaScriptSerializer.deserialize(i), !Array.isInstanceOfType(o)) {
            s = "Event value is not an Array";
            Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, s);
            throw Error.invalidOperation(s);
        }
        if (r = o, r.length !== 1) {
            h = "Event value array should contain exactly one element. Actual length = " + r.length;
            Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, h);
            throw Error.invalidOperation(h);
        }
        if (u = r[0], $0.$9c(u)) {
            c = "Invalid or missing event value";
            Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, c);
            throw Error.invalidOperation(c);
        }
        e.changeState(t, u) || e.$1GR(t, u)
    },
    devicePullArgs: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "pullArgsId");
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "DevicePullArgs, {0}", n);
        var t = Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.$3In(n);
        return JSON.stringify(t)
    },
    deviceSearch: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "searchText");
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "DeviceSearch, {0}", n);
        this.$Bn("OnSearch", n)
    },
    voiceCommand: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "command");
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "VoiceCommand, {0}", n);
        this.$Bn("OnVoiceCommand", n)
    },
    $3Ta: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "urlArguments");
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "Tile Activation, {0}", n);
        this.$Bn("OnTileActivation", n)
    },
    appLink: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "urlArguments");
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "App Link, {0}", n);
        this.$Bn("OnAppLink", n)
    },
    $3K: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "Calling native method, {0}, {1}", t, i.get_$1F6());
        i.get_$7w().$9O("NativeBridge.CreateNativeCall.Start", (new Date).getTime());
        var r = this.$28Y(n, t, i);
        i.get_$7w().$9O("NativeBridge.CreateNativeCall.End", (new Date).getTime());
        r &&
        (this.$Tx
            ? (i.get_$7w().$9O("NativeBridge.SubmitNativeCallAction.Start", (new Date).getTime()), this.$S2.$2c(r), i
                .get_$7w().$9O("NativeBridge.SubmitNativeCallAction.End", (new Date).getTime()))
            : Array.add(this.$uf, r))
    },
    $25m: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "Calling native method, {0}, {1}", t, i.get_$1F6());
        var r = this.$28Y(n, t, i);
        this.$S2.$2c(r)
    },
    registerNativeCallback: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "call");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "callback");
        var i = n.get_$1F6() + t.$1ib;
        return Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(81, "Registering callback, {0}", i), this
            .$Lw[i] = t, i
    },
    forceReloadWebApplication: function() {
        this.$2qi();
        this.$1T.$3Jx()
    },
    $2qi: function() {
        this.$1T.$21 || this.$3aR();
        this.$Tx || this.$1OW(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f)
    },
    $3Jh: function() {
        this.$Ac(this.$1T);
        this.$Dc = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX(this);
        this.$Ac(this.$Dc);
        this.$yI = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T8(this);
        this.$Ac(this.$yI);
        this.$VD = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE(this);
        this.$Ac(this.$VD);
        this.set_device(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC(this));
        this.$Ac(this.get_device());
        this.$6m = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD(this);
        this.$Ac(this.$6m);
        this.$TW = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5(this);
        this.$Ac(this.$TW);
        this.$Ma = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI(this);
        this.$Ac(this.$Ma);
        this.$14V = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TG(this);
        this.$Ac(this.$14V);
        this.$BB = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O(this);
        this.$Ac(this.$BB);
        this.$il = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW(this);
        this.$Ac(this.$il);
        this.$22Z = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T2(this);
        this.$Ac(this.$22Z);
        this.$UK = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td(this);
        this.$Ac(this.$UK);
        this.$ZT = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY(this);
        this.$Ac(this.$ZT);
        this.$5Q = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb(this);
        this.$Ac(this.$5Q);
        this.$39 = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf(this);
        this.$Ac(this.$39);
        this.$z2 = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher(this);
        this.$Ac(this.$z2);
        this.$SO = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher(this);
        this.$Ac(this.$SO);
        this.$at = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta(this);
        this.$Ac(this.$at)
    },
    $Ac: function(n) { this.$zl[n.get_$WM()] = n },
    $2mA: function(n, t) {
        var f, i, r, o;
        if (this
            .$Tx &&
            (f = "Ready may happen only once", Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, f)), this
            .$2I = n, this.$2Vh(t), !this.get_$2N().get_$2Jf()) {
            i = "No supported version available";
            Microsoft.Crm.Client.Core.Framework.Trace.logError(81, i);
            throw Error.invalidOperation(i);
        }
        if (!this.get_$cd().get_$2Je()) {
            r = "No native call mechanism available";
            Microsoft.Crm.Client.Core.Framework.Trace.logError(81, r);
            throw Error.invalidOperation(r);
        }
        if (this.$Tx = !0, this.$t0("OnReady"), this.$29q(), this.$29w(), this.$uf) {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(81, "Ready with {0} pre-ready calls", 81, this.$uf.length);
            for (var e = this.$uf, s = e.length, u = 0; u < s; ++u) o = e[u], this.$S2.$2c(o);
            this.$uf = null
        }
    },
    $wK: function() {
        if (!this.$Tx) throw Error.invalidOperation("Trying to call native method before device is ready");
    },
    $29q: function() {
        this.$t0("OnActive");
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Active")
    },
    $29w: function() {
        this.$1w9 = !1;
        this.$t0("OnResume");
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Resume")
    },
    $2m6: function(n, t, i) {
        var u, f, r;
        if (n in this.$Lw)
            return u = this.$Lw[n], i && this.deviceUnregisterCallback(n), this.$1GQ = null, this.$1GP = !0, Microsoft
                .Crm.Client.Core.Framework.Trace.logVerbose(81, "Calling callback, {0}", n), u.$1Nq(t), this
                .$1GP = !1, f = this.$1GQ, this.$1GQ = null, f;
        r = "Attempting to call unknown callback, " + n;
        Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, r);
        throw Error.invalidOperation(r);
    },
    $28Y: function(n, t, i) {
        var r = i.get_$1F6(), u = i.$33A(), f = i.$2y8(this), e;
        return this.get_$cd().get_$3Io() && this.$1GP && !i.get_$1qI()
            ? (e = new Microsoft.Crm.Client.Core.Framework.PAL.Core.$NG, e.k = this.$2I, e.n = n.get_$WM(), e.m = r, e
                .v = t, e.a = u, e.c = f, this.$1GQ = e, this.$1GP = !1, null)
            : this.get_$cd().get_$2RA() && i.get_$1qI()
            ? new Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a(this.$2I, n.get_$WM(), t, r, u, f, i.get_$7w())
            : this.get_$cd().get_$2Zk()
            ? new Microsoft.Crm.Client.Core.Framework.PAL.Core.$U5(this.$2I, n.get_$WM(), t, r, u, f, i.get_$7w())
            : this.get_$cd().get_$2M6()
            ? new Microsoft.Crm.Client.Core.Framework.PAL.Core.$U4(this.$2I, n.get_$WM(), t, r, u, f, i.get_$7w())
            : this.get_$cd().get_$2Nx()
            ? new Microsoft.Crm.Client.Core.Framework.PAL.Core
            .$UF(this.$2I,
                n.get_$WM(),
                t,
                r,
                u,
                f,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1N6(),
                i.get_$7w())
            : this.get_$cd().get_$2UC()
            ? new Microsoft.Crm.Client.Core.Framework.PAL.Core
            .$UH(this.$2I,
                n.get_$WM(),
                t,
                r,
                u,
                f,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1N6(),
                i.get_$7w())
            : this.get_$cd().get_$2NF()
            ? new Microsoft.Crm.Client.Core.Framework.PAL.Core
            .$UG(this.$2I,
                n.get_$WM(),
                t,
                r,
                u,
                f,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1N6(),
                i.get_$7w())
            : this.get_$cd().get_$2NC()
            ? new Microsoft.Crm.Client.Core.Framework.PAL.Core
            .$Tz(this.$2I,
                n.get_$WM(),
                t,
                r,
                u,
                f,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1N6(),
                i.get_$7w())
            : null
    },
    $2Vh: function(n) {
        var u = n, i, t, f, r;
        for (i in u)
            if (t = { key: i, value: u[i] }, t.key in this.$zl)
                if (f = this.$zl[t.key], Microsoft.Crm.Client.Core.Framework.Trace
                    .logInfo(81, "Setting state, {0}", t.key), Object.isInstanceOfType(t.value)) f.$Gb(t.value);
                else {
                    r = "Invalid state JSON, " + t.value;
                    Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, r);
                    throw Error.invalidOperation(r);
                }
            else Microsoft.Crm.Client.Core.Framework.Trace.logWarning(81, "Unknown dispatcher state, {0}", t.key)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$U4 = function(n, t, i, r, u, f, e) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$U4.initializeBase(this, [n, t, i, r, u, f, e])
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$U4.prototype = {
    $25l: function() {
        this.get_$7w().$9O("JavaInterfaceNativeCallAction.Call.Start", (new Date).getTime());
        this.get_$7w().$9O(Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1c1, "");
        this.get_$7w().$CZ &&
            this.get_$7w().$CZ !== "" &&
            (this.$Pb[Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1Ax] = this.get_$7w().$CZ);
        PALJavaScriptInterface.callMethod(this.$2I,
            this.$tz,
            this.$nI,
            this.$6w,
            Sys.Serialization.JavaScriptSerializer.serialize(this.$Pb),
            Sys.Serialization.JavaScriptSerializer.serialize(this.$Lw));
        this.get_$7w().$9O("JavaInterfaceNativeCallAction.Call.End", (new Date).getTime())
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$ET = function(n, t, i, r, u, f, e) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$ET.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "key");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(t, "namespaceName");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(i, "version");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(r, "method");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(u, "args");
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(f, "callbacks");
    this.$2I = n;
    this.$tz = t;
    this.$6w = i;
    this.$nI = r;
    this.$Pb = u;
    this.$Lw = f;
    this.$Lx = e
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$ET
    .prototype = {
        $2I: null,
        $tz: null,
        $6w: null,
        $nI: null,
        $Pb: null,
        $Lw: null,
        $Lx: null,
        get_$7w: function() {
            return this.$Lx || (this.$Lx = new Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d(null, null)), this.$Lx
        },
        $2t: function() { return this.$25l(), 0 }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B = function() {
    this.$aY = Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B.$Ql++;
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B.initializeBase(this);
    this.$1ib = Object.getType(this).getName() + this.$aY
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B.prototype = {
    $1ib: null,
    $Lx: null,
    get_$7w: function() {
        return this.$Lx || (this.$Lx = new Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d(null, null)), this.$Lx
    },
    set_$7w: function(n) { return this.$Lx = n, n },
    $1Nq: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "args");
        this.$3WB(n) && this.$25l()
    },
    $3WB: function(n) { return this.$1bx(n), !0 }
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$U5 = function(n, t, i, r, u, f, e) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.$U5.initializeBase(this, [n, t, i, r, u, f, e]);
    Microsoft.Crm.Client.Core.Framework.$3.$A(e.$CZ) ||
        (this.$Pb[Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1Ax] = e.$CZ)
};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$U5.prototype = {
    get_$2Lu: function() { return!0 },
    get_$36N: function() { return this.$nI },
    $25l: function() {
        var n = this.$2DU();
        this.get_$7w().$9O("WindowLocationNativeCallAction.Call.Start", (new Date).getTime());
        this.get_$7w().$9O(Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1c1, "");
        this.$3AD(n);
        this.get_$7w().$9O("WindowLocationNativeCallAction.Call.End", (new Date).getTime())
    },
    $2DU: function() {
        return String.format("http://pal/?k={0}&n={1}&m={2}&v={3}&a={4}&c={5}",
            encodeURIComponent(this.$2I),
            encodeURIComponent(this.$tz),
            encodeURIComponent(this.$nI),
            encodeURIComponent(this.$6w),
            encodeURIComponent(Sys.Serialization.JavaScriptSerializer.serialize(this.$Pb)),
            encodeURIComponent(Sys.Serialization.JavaScriptSerializer.serialize(this.$Lw)))
    },
    $3AD: function(n) { window.location.href = n }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6Y = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6Y
    .prototype = { unknown: 0, outlook: 1, outlookWebApp: 2, outlookMobile: 3 };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6Y
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6Y", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NI = function(n, t, i, r) {
    this.Area = n;
    this.EventName = t;
    this.MemoryUsage = i;
    this.Timestamp = r
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ca = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ca.prototype = { none: 0, clientStore: 1, PAL: 2 };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ca
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ca", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$EZ = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$EZ
    .prototype = { none: 0, unableToFindAnActivity: 1, unableToFindTheDataID: 2, unableToFindUIActivity: 3 };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$EZ
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$EZ", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Fs = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Fs
    .registerInterface("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Fs");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GB = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GB
    .registerInterface("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GB");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GE = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GE
    .registerInterface("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GE");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$F2 = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$F2.prototype = { none: 0, reminderList: 1 };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$F2
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$F2", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers
    .CordovaDispatcher = function(n) {
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.initializeBase(this, [n])
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.prototype = {
    get_$WM: function() { return"Cordova" },
    exec: function(n, t, i, r, u) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(i, "serviceName");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(r, "actionName");
        var f = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4(n, t, i, r, u);
        this.$3K(this.get_$2N().get_$3A(), f)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4 = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$gM,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD(n));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$1FY,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD(t));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$2Uj, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$18a, r);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$197, u)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4
    .prototype = { get_$1F6: function() { return"exec" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD.initializeBase(this);
    this.$1Xx = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD
    .prototype = {
        $1Xx: null,
        get_$Wz: function() {
            return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD.$vC)
        },
        $25l: function() { this.$1Xx && this.$1Xx(this.get_$Wz()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers
    .CordovaMediaDispatcher = function(n) {
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.initializeBase(this, [n])
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.prototype = {
    get_$WM: function() { return"CordovaMedia" },
    exec: function(n, t, i, r, u) {
        var f = new(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e
            .$$(n))(t, i, r, [JSON.stringify(u)]);
        this.$3K(this.get_$2N().get_$3A(), f)
    },
    takePictureOnDevice: function(n, t, i, r) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(i, "actionName");
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X
            ? this.$2Kk(n, t, r)
            : Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()
            ? (r.destinationType = 0, this.$2Kk(n, t, r))
            : this.exec(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H, n, t, i, r)
    },
    $2Kk: function(n, t, i) {
        var u = window.navigator, r = this, f = this;
        u.camera.getPicture(function(u) {
                var e, f;
                if (!$0.$1(u)) {
                    if (e = r.$31N(u), r.$1rd(t, e, i.maxUploadFileSize)) return;
                    f = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H;
                    f.set_$JD(r.$31K(u));
                    f.set_$JE(r.$31M(u));
                    f.set_$MW(r.$31L(u));
                    f.set_$vr(e);
                    r.onPluginCallSuccess(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H, n, f)
                }
            },
            function(n) { f.onPluginCallFailure(t, 4, n.toString()) },
            i)
    },
    $31K: function(n) {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ? n[0].fileContents : n.toString()
    },
    $31M: function(n) {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X
            ? n[0].filename
            : (new Date).format("MMddyyyyhhmmss") + ".jpg"
    },
    $31L: function(n) {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ? n[0].mimeType : "image/JPEG"
    },
    $31N: function(n) { return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ? n[0].size : n.length },
    captureVideoFromDevice: function(n, t, i, r) {
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E
            .$4k(i, "actionName"), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ||
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()) {
            var f = window.navigator, u = this, e = this;
            f.capture.captureVideo(function(i) {
                    if ($0.$1(i)) u.onPluginCallFailure(t, 5, "Captured media item is empty");
                    else {
                        if (u.$1rd(t, i[0].size, r.maxUploadFileSize)) return;
                        u.callMediaDispatcherForBytes(n, t, "Video", i[0].fullPath, r, 5)
                    }
                },
                function(n) { e.onPluginCallFailure(t, 5, $0.$1(n.code) ? n.toString() : n.code.toString()) },
                r)
        } else this.exec(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H, n, t, i, r)
    },
    captureAudioFromDevice: function(n, t, i, r) {
        if (Microsoft.Crm.Client.Core.Framework.Utils.$E
            .$4k(i, "actionName"), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ||
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()) {
            var f = window.navigator, u = this, e = this;
            f.capture.captureAudio(function(i) {
                    if ($0.$1(i)) u.onPluginCallFailure(t, 6, "Captured media item is empty");
                    else {
                        if (u.$1rd(t, i[0].size, r.maxUploadFileSize)) return;
                        u.callMediaDispatcherForBytes(n, t, "Audio", i[0].fullPath, r, 6)
                    }
                },
                function(n) { e.onPluginCallFailure(t, 6, $0.$1(n.code) ? n.toString() : n.code.toString()) },
                r)
        } else this.exec(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H, n, t, i, r)
    },
    getCurrentPosition: function(n, t, i, r) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(i, "actionName");
        this.exec(String, n, t, i, r)
    },
    scanBarcode: function(n, t, i, r) {
        var f = window.navigator, u, e;
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(i, "actionName");
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ||
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()
            ? (r.preferFrontCamera = !1, r.showFlipCameraButton = !0, u = this, e = this, f.barcodeScanner
                .scan(function(i) {
                        if ($0.$1(i)) u.onPluginCallFailure(t, 7, "Scanned bar code value is empty");
                        else if (!i.cancelled) u.onPluginCallSuccess(String, n, i.text)
                    },
                    function(n) { t(7, n.toString()) },
                    r))
            : this.exec(String, n, t, i, r)
    },
    callMediaDispatcherForBytes: function(n, t, i, r, u, f) {
        var e = this, o = this;
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$TW
            .$30e(i,
                r,
                u.maxUploadFileSize,
                function(t) {
                    if (!$0.$1(t)) e.onPluginCallSuccess(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H, n, t)
                },
                function(n) { o.onPluginCallFailure(t, f, n.message) })
    },
    $1rd: function(n, t, i) {
        if (t > i) {
            this.onPluginCallFailure(n,
                2,
                Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$ED.toString(2));
            return!0
        }
        return!1
    },
    onPluginCallSuccess: function(n, t, i) {
        if (i) {
            var r = { result: i },
                u = new(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf.$$(n))(t);
            u.$1Nq(r)
        }
    },
    onPluginCallFailure: function(n, t, i) {
        if (i !== "no image selected" && i !== "3") {
            var u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td(n), r = {};
            r.errorMessage = i;
            r.errorCode = t;
            u.$1Nq(r)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$ED = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$ED
    .prototype = {
        pluginCancelled: 1,
        fileSizeBreached: 2,
        fileSizeCannotBeZero: 3,
        cameraPluginError: 4,
        videoCapturePluginError: 5,
        audioCapturePluginError: 6,
        barCodePluginError: 7,
        geoLocationPluginError: 8
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$ED
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$ED", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e
        .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e"].T)
        .initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e
        .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e"].T).$gM,
        new(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf
            .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e"].T))(n));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e
        .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e"].T).$1FY,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td(t));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e
        .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e"].T).$18a,
        i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e
        .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e"].T).$197,
        r)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e.$$ = function(n) {
    var i = "$7e$" + n.getName().replace(/\./g, "_"), t, u, f, r;
    if (!Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher[i]) {
        t = Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher[i] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e"] = { T: n },
                i =
                    [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e.apply(this, i)
        };
        t.registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher." + i,
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
        u = Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e.prototype;
        for (f in u) r = { key: f, value: u[f] }, "constructor" !== r.key && (t.prototype[r.key] = r.value);
        t.$5f = "exec";
        t.$gM = new Microsoft.Crm.Client.Core.Framework.$D1("onSuccess",
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf.$$(n),
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e.$$(n));
        t.$1FY = new Microsoft.Crm.Client.Core.Framework
            .$D1("onFailure",
                Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td,
                Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e.$$(n));
        t.$18a = new Microsoft.Crm.Client.Core.Framework
            .$D1("actionName",
                String,
                Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e.$$(n));
        t.$197 = new Microsoft.Crm.Client.Core.Framework
            .$D1("args", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e.$$(n))
    }
    return Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher[i]
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$7e
    .prototype = { get_$1F6: function() { return"exec" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf
        .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf"].T)
        .initializeBase(this);
    this.$1Xw = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf.$$ = function(n) {
    var t = "$Mf$" + n.getName().replace(/\./g, "_"), i, u, f, r;
    if (!Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher[t]) {
        i = Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher[t] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf"] = { T: n },
                i =
                    [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf.apply(this, i)
        };
        i.registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher." + t,
            Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
        u = Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf.prototype;
        for (f in u) r = { key: f, value: u[f] }, "constructor" !== r.key && (i.prototype[r.key] = r.value);
        i.$vC = new Microsoft.Crm.Client.Core.Framework.$D1("result",
            n,
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf.$$(n))
    }
    return Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher[t]
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf
    .prototype = {
        $1Xw: null,
        get_$Wz: function() {
            return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf
                .$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Mf"].T).$vC)
        },
        $25l: function() { this.$1Xw && this.$1Xw(this.get_$Wz()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td.initializeBase(this);
    this.$gF = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td
    .prototype = {
        $gF: null,
        get_$1BL: function() {
            return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td.$lL)
        },
        get_$C8: function() {
            return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td.$2Ai)
        },
        $25l: function() { this.$gF(this.get_$1BL(), this.get_$C8()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.prototype = {
    get_$WM: function() { return"CrmSync" },
    $3FC: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aH;
        this.$3K(this.get_$2N().get_$3A(), n)
    },
    $3F9: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aI;
        this.$3K(this.get_$2N().get_$3A(), n)
    },
    $3FB: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aJ;
        this.$3K(this.get_$2N().get_$3A(), n)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta
    .$3aH = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aH.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aH
    .prototype = { get_$1F6: function() { return"onSyncStart" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta
    .$3aI = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aI.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aI
    .prototype = { get_$1F6: function() { return"onSyncComplete" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta
    .$3aJ = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aJ.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aJ
    .prototype = { get_$1F6: function() { return"onSyncError" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$PE = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$PE.initializeBase(this);
    this.$UB = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$PE.prototype = { $UB: 0 };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb = function(n) {
    this.$2Mx = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.prototype = {
    get_$WM: function() { return"OfficeMail" },
    get_MailState: function() { return this.get_$CS() },
    get_$CS: function() { return this.$2Mx },
    $31t: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetRecipients");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2HQ: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetInitialSenderData");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2Gv: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetEntities");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2Gr: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "crmId");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onGetEmailLinks");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $1zy: function(n, t, i, r) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "pixelUrl");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "crmId");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(r, "onSetTrackingInfo");
        var u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb
            .$Gc(n, new Microsoft.Crm.Client.Core.Framework.$7M(t), i, r);
        this.$3K(this.get_$2N().get_$3A(), u)
    },
    $1a3: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "crmId");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onRemoveTrackingInfo");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $2z8: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onGetEmailItem");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $2Vc: function(n, t, i, r) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "updates");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "conflictResolutionType");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "itemType");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(r, "onSetCrmEmailProperties");
        var u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga(n, t, i, r);
        this.$3K(this.get_$2N().get_$3A(), u)
    },
    $2z6: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetEmailCustomProperties");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $3Uu: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "customPropertiesToUpdate");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onUpdateEmailCustomProperties");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb
            .$b5(new Microsoft.Crm.Client.Core.Framework.$7M(n), t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $2Le: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onIsSentFolder");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2Go: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetEmailAddress");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $1Sr: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetEmailDetails");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2xp: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetAttachmentDetails");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2yw: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onGetDeliverPromoteDetails");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $36M: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "str");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onInsertToStartOfBodyAsync");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $2Vj: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "subject");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onSetEmailSubject");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $2Gt: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetEmailSubject");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2bG: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "attachmentURL");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "attachmentName");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "onAddFileAttachmentAsync");
        var r = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq(n, t, i);
        this.$3K(this.get_$2N().get_$3A(), r)
    },
    $1OC: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onMetadataChanged");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $1xH: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$3aG;
        this.$3K(this.get_$2N().get_$3A(), n)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L.initializeBase(this);
    this.$1uy = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L
    .prototype = {
        $1uy: null,
        get_$2M: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L.$La) },
        $25l: function() { this.$1uy(this.get_$2M()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4.$2Ol,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4
    .prototype = { get_$1F6: function() { return"GetRecipients" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K.initializeBase(this);
    this.$1ux = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K
    .prototype = {
        $1ux: null,
        get_$2M: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K.$La) },
        $25l: function() { this.$1ux(this.get_$2M()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs.$2Ok,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs
    .prototype = { get_$1F6: function() { return"GetInitialSenderData" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J.initializeBase(this);
    this.$1uw = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J
    .prototype = {
        $1uw: null,
        get_$rv: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J.$2Gx) },
        $25l: function() { this.$1uw(this.get_$rv()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm.$2Gw,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm
    .prototype = { get_$1F6: function() { return"GetEntities" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H.initializeBase(this);
    this.$1ut = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H
    .prototype = {
        $1ut: null,
        get_$2hM: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H.$27U) },
        $25l: function() { this.$1ut(this.get_$2hM()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv.$2Oi,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H(t));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv.$2LZ, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv
    .prototype = { get_$1F6: function() { return"GetEmailItem" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$1ds, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$27O, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$2PR,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa(r));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$2M4, i)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga
    .prototype = { get_$1F6: function() { return"SetCrmEmailProperties" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa.initializeBase(this);
    this.$1vU = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa
    .prototype = {
        $1vU: null,
        get_$1BO: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa.$lO) },
        get_$Sf: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa.$Sg) },
        $25l: function() { this.$1vU(this.get_$1BO(), this.get_$Sf()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj.$2Og,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj
    .prototype = { get_$1F6: function() { return"GetEmailCustomProperties" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX.initializeBase(this);
    this.$1ur = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX
    .prototype = {
        $1ur: null,
        get_$2Si: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX.$1aF) },
        get_$Sf: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX.$Sg) },
        $25l: function() { this.$1ur(this.get_$2Si(), this.get_$Sf()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5 = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5.$1ds, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5.$2Pc,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5
    .prototype = { get_$1F6: function() { return"UpdateEmailCustomProperties" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc.initializeBase(this);
    this.$1va = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc
    .prototype = {
        $1va: null,
        get_$2Si: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc.$1aF) },
        get_$Sf: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc.$Sg) },
        $25l: function() { this.$1va(this.get_$2Si(), this.get_$Sf()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB.$2XI, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB.$2Oq,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB
    .prototype = { get_$1F6: function() { return"InsertToStartOfBodyAsync" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P.initializeBase(this);
    this.$1v2 = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P
    .prototype = {
        $1v2: null,
        get_$1BO: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P.$lO) },
        $25l: function() { this.$1v2(this.get_$1BO()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae.$2XJ, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae.$2PS,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae
    .prototype = { get_$1F6: function() { return"SetEmailSubject" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y.initializeBase(this);
    this.$1vV = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y
    .prototype = {
        $1vV: null,
        get_$1BO: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y.$lO) },
        $25l: function() { this.$1vV(this.get_$1BO()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I.initializeBase(this);
    this.$1uv = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I
    .prototype = {
        $1uv: null,
        get_$2zB: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I.$2Gu) },
        $25l: function() { this.$1uv(this.get_$2zB()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl.$2Oj,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl
    .prototype = { get_$1F6: function() { return"GetEmailSubject" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq.$24u, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq.$24s, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq.$23n,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132(i))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq
    .prototype = { get_$1F6: function() { return"AddFileAttachmentAsync" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132.initializeBase(this);
    this.$1uW = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132
    .prototype = {
        $1uW: null,
        get_$1BO: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132.$lO) },
        $25l: function() { this.$1uW(this.get_$1BO()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$2QV, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$2ML, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$zE, i.toString());
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$2PU,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb(r))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc
    .prototype = { get_$1F6: function() { return"SetTrackingInfo" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb.initializeBase(this);
    this.$1vW = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb
    .prototype = {
        $1vW: null,
        get_$Wz: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb.$vC) },
        get_$Sf: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb.$Sg) },
        $25l: function() { this.$1vW(this.get_$Wz(), this.get_$Sf()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q.initializeBase(this);
    this.$1v3 = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q
    .prototype = {
        $1v3: null,
        get_$2Le: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q.$2Lf) },
        $25l: function() { this.$1v3(this.get_$2Le()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES.$2Or,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES
    .prototype = { get_$1F6: function() { return"IsSentFolder" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F.initializeBase(this);
    this.$1uq = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F
    .prototype = {
        $1uq: null,
        get_$2z4: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F.$2Gp) },
        $25l: function() { this.$1uq(this.get_$2z4()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci.$2Of,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci
    .prototype = { get_$1F6: function() { return"GetEmailAddress" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G.initializeBase(this);
    this.$1us = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G
    .prototype = {
        $1us: null,
        get_$2z7: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G.$2Gq) },
        $25l: function() { this.$1us(this.get_$2z7()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck.$2Oh,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck
    .prototype = { get_$1F6: function() { return"GetEmailDetails" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D.initializeBase(this);
    this.$1un = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D
    .prototype = {
        $1un: null,
        get_$2xq: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D.$2GJ) },
        $25l: function() { this.$1un(this.get_$2xq()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW.$2Oc,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW
    .prototype = { get_$1F6: function() { return"GetAttachmentDetails" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E.initializeBase(this);
    this.$1up = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E
    .prototype = {
        $1up: null,
        get_$2yx: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E.$2Gh) },
        $25l: function() { this.$1up(this.get_$2yx()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu.$2Wo, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu.$2Oe,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu
    .prototype = { get_$1F6: function() { return"GetDeliverPromoteDetails" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw.$zE, n.toString());
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw.$2Gs,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw
    .prototype = { get_$1F6: function() { return"GetEmailLinks" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY.initializeBase(this);
    this.$1uu = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY
    .prototype = {
        $1uu: null,
        get_$39H: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY.$2AO) },
        get_$Sf: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY.$Sg) },
        $25l: function() { this.$1uu(this.get_$39H(), this.get_$Sf()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM.$zE, n.toString());
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM.$2SQ,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM
    .prototype = { get_$1F6: function() { return"RemoveTrackingInfo" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ.initializeBase(this);
    this.$1vN = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ
    .prototype = {
        $1vN: null,
        get_$Wz: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ.$1aG) },
        get_$Sf: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ.$2Sk) },
        $25l: function() { this.$1vN(this.get_$Wz(), this.get_$Sf()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g.$2OK,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g
    .prototype = { get_$1F6: function() { return"CheckMetadataChanged" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT.initializeBase(this);
    this.$1ua = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT
    .prototype = {
        $1ua: null,
        get_$1BO: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT.$1aG) },
        get_$Sf: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT.$Sg) },
        $25l: function() { this.$1ua(this.get_$1BO(), this.get_$Sf()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb
    .$3aG = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$3aG.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$3aG
    .prototype = { get_$1F6: function() { return"RefreshMetadata" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.prototype = {
    get_$1Wi: function() {
        switch (this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.$1qY)) {
        case"Outlook":
        case"Mac Outlook":
            return 1;
        case"OutlookWebApp":
            return 2;
        case"OutlookIOS":
            return 3;
        default:
            return 0
        }
    },
    get_$3Ai: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.$1qY) },
    get_$3Aj: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.$2Jl) },
    get_$3Ak: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.$2Q1) }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.prototype = {
    get_$WM: function() { return"Logging" },
    $2Ms: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "level");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(t, "message");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $1Wc: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "namespace");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(t, "data");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $12Y: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "telemetryData");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU.$2MJ, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU.$2NH, t)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU.prototype = { get_$1F6: function() { return"logMessage" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW.$2NZ, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW.$29H, t)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW
    .prototype = { get_$1F6: function() { return"logPerformanceData" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu.$2Xh, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu
    .prototype = { get_$1F6: function() { return"logTelemetryData" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf = function(n) {
    this.$Zk = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.prototype = {
    add_$3CW: function(n) { this.$2F("OnBackButtonPressed", n) },
    get_$WM: function() { return"Navigation" },
    get_NavigationState: function() { return this.get_$CS() },
    get_$CS: function() { return this.$Zk },
    updateBackBehavior: function() {
        var n = 0, t;
        (this.$Zk.get_$2RQ() ||
                this.$Zk.get_$29z() ||
                this.$Zk.get_$2Qa() ||
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
                .get_AppBarVisible() ||
                this.$Zk.get_$2Wk() ||
                this.$Zk.get_$2J1() ||
                this.$Zk.get_$25x() ||
                this.$Zk.get_$2RH() ||
                this.$Zk.get_$2Xe()) &&
            (n = 1);
        t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ.$25L, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ
    .prototype = { get_$1F6: function() { return"updateBackBehavior" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L
    .prototype = {
        get_$25x: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$19d) },
        get_$29z: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2A0) },
        get_$2Qa: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2Qb) },
        get_$2RH: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2RI) },
        get_$2Xe: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2Xf) },
        get_$2Wk: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2Wl) },
        get_$2J1: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2J2) },
        get_$2RQ: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2RP) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c.$16T, "clientsettings");
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c.$La, new Microsoft.Crm.Client.Core.Framework.$7M(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c
    .prototype = { get_$1F6: function() { return"setClientSettingsPackage" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH = function(n, t, i) {
    this.$1xC = n;
    this.$1qA = t;
    this.$1iJ = i
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH
    .prototype = {
        $1xC: 0,
        $1qA: 0,
        $1iJ: 0,
        $24K: 255,
        $b: function() {
            return new Microsoft.Crm.Client.Core.Framework
                .$7M({ r: this.$1xC, g: this.$1qA, b: this.$1iJ, a: this.$24K })
        }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.prototype = {
    get_$WM: function() { return"WinRT" },
    $2kb: function(n, t, i, r, u, f, e, o, s) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(s, "onCreateSecondaryTile");
        var h = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l(n, t, i, r, u, f, e, o, s);
        this.$3K(this.get_$2N().get_$3A(), h)
    },
    $3OO: function(n, t, i, r, u, f, e) {
        var o = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S(n, t, i, r, u, f, e);
        this.$3K(this.get_$2N().get_$3A(), o)
    },
    $2lv: function(n, t, i, r, u, f) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(f, "onDeleteSecondaryTile");
        var e = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au(n, t, i, r, u, f);
        this.$3K(this.get_$2N().get_$3A(), e)
    },
    $32O: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onGetSecondaryTiles");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2gB: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l = function(n, t, i, r, u, f, e, o, s) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$11T, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$24e, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$2NY, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$254, r.$b());
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1YQ, u);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1YR, f);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1Tr, e);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1eK, o);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$2OT,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV(s))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l
    .prototype = { get_$1F6: function() { return"createSecondaryTile" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV.initializeBase(this);
    this.$1uf = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV
    .prototype = {
        $1uf: null,
        get_$374: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV.$2Kw) },
        get_$2dn: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV.$1Ne) },
        $25l: function() { this.$1uf(this.get_$374(), this.get_$2dn()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S = function(n, t, i, r, u, f, e) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$11T, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Ww, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Wx, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Zi, r);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Zj, u);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Ju, f);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$1Ne, e)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S
    .prototype = { get_$1F6: function() { return"sendSecondaryTileNotification" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au = function(n, t, i, r, u, f) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$11T, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1YQ, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1YR, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1Tr, r);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1eK, u);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$2OW,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139(f))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au
    .prototype = { get_$1F6: function() { return"deleteSecondaryTile" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139.initializeBase(this);
    this.$1uj = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139
    .prototype = {
        $1uj: null,
        get_$379: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139.$2Kz) },
        $25l: function() { this.$1uj(this.get_$379()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9.$2Om,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9
    .prototype = { get_$1F6: function() { return"getSecondaryTiles" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M.initializeBase(this);
    this.$1uz = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M
    .prototype = {
        $1uz: null,
        get_$3Tb: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M.$2Xo) },
        $25l: function() { this.$1uz(this.get_$3Tb()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l.$2Jr, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l
    .prototype = { get_$1F6: function() { return"cleanUpUnpinnedSecondaryTileImages" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T2 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T2.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T2.prototype = { get_$WM: function() { return"WebScriptLog" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H.$26m, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H.prototype = { get_$1F6: function() { return"clientReady" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T8 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T8.initializeBase(this, [n]);
    this.$1hO = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$8f
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T8
    .prototype = { $1hO: null, get_$WM: function() { return"Addressbook" }, get_$CS: function() { return this.$1hO } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$8f = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$8f.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$296, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$12e, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$2Od,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK(i));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$1Xf,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M(r))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE = function(n) {
    this.$29J = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.prototype = {
    get_$WM: function() { return"Data" },
    get_DataState: function() { return this.get_$CS() },
    get_$CS: function() { return this.$29J },
    $1Hd: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "dataFile");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onSuccess");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "onError");
        var r = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms(n, t, i);
        this.$3K(this.get_$2N().get_$3A(), r)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$3Ng = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$3Ng.prototype = { outOfSpace: 1 };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$3Ng
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$3Ng", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms.$29G, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms.$gM,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x(t));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms.$1Xe,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w(i))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms
    .prototype = { get_$1F6: function() { return"saveDataFile" }, get_$1qI: function() { return!0 } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x.initializeBase(this);
    this.$13a = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x
    .prototype = {
        $13a: null,
        get_$kl: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x.$rY) },
        $25l: function() { this.$13a(this.get_$kl()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w.initializeBase(this);
    this.$gF = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w
    .prototype = {
        $gF: null,
        get_$1BL: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w.$lL) },
        $25l: function() { this.$gF(this.get_$1BL()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC = function(n) {
    this.$29x = new Microsoft.Crm.Client.Core.Framework.$i;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.prototype = {
    get_$WM: function() { return"Device" },
    get_DeviceState: function() { return this.get_$CS() },
    get_$CS: function() { return this.$29x },
    $3QY: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "commandBarJson");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onCommandBarButtonClicked");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "onCommandBarError");
        var r = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt(n, t, i);
        this.$3K(this.get_$2N().get_$3A(), r)
    },
    setMasthead: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "mastheadJson");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt.$26z, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt.$2ON,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135(t));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt.$2OO,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M(i))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt
    .prototype = { get_$1F6: function() { return"setCommandBar" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135.initializeBase(this);
    this.$1uc = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135
    .prototype = {
        $1uc: null,
        get_$2gk: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135.$270) },
        $25l: function() { this.$1uc(this.get_$2gk()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5.$2N4, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5
    .prototype = { get_$1F6: function() { return"setMasthead" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD = function(n) {
    this.$1Q5_3 = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.prototype = {
    get_$WM: function() { return"Document" },
    get_$2mO: function() { return this.get_$CS() },
    get_$CS: function() { return this.$1Q5_3 },
    $1Fh: function(n, t, i, r) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "dataID");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(r, "callback");
        var u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ(n, t, i, r);
        this.$3K(this.get_$2N().get_$3A(), u)
    },
    $Oh: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "url");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$rY, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$2CF, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$1F8, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$2P9,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U(r))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ
    .prototype = { get_$1F6: function() { return"openDocument" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U.initializeBase(this);
    this.$1vG = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U
    .prototype = {
        $1vG: null,
        get_$1BL: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U.$lL) },
        $25l: function() { this.$1vG(this.get_$1BL()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi.$La, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi.prototype = { get_$1F6: function() { return"launchURL" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N
    .prototype = {
        get_$34g: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N.$2JW) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK.initializeBase(this);
    this.$1uo = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK.prototype = {
    $1uo: null,
    $DN: null,
    $1bx: function(n) {
        this.$DN = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H;
        this.$DN.$1bx(n)
    },
    $25l: function() { this.$1uo(this.$DN) }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5 = function(n) {
    this.$2NW = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.prototype = {
    get_$WM: function() { return"Multimedia" },
    get_$2NX: function() { return this.get_$CS() },
    get_$CS: function() { return this.$2NW },
    $2I7: function(n, t, i, r) {
        var u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3aX(n, t, i, r);
        this.$3K(this.get_$2N().get_$3A(), u)
    },
    $3Fs: function(n, t, i, r, u, f) {
        var e = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5(n, t, i, r, u, f);
        this.$3K(this.get_$2N().get_$3A(), e)
    },
    $30e: function(n, t, i, r, u) {
        var f = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD(n, t, i, r, u);
        this.$3K(this.get_$2N().get_$3A(), f)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$Br = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$Br
    .prototype = {
        unableToOpenFile: 0,
        applicationInSnapView: 1,
        fileSizeBreached: 2,
        fileSizeCannotBeZero: 3,
        attachmentTypeBlocked: 4,
        filePickerCancelled: 5
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$Br
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$Br", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3HF = function() {};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3HF
    .prototype = {
        documentsLibrary: 0,
        computerFolder: 1,
        desktop: 2,
        downloads: 3,
        homeGroup: 4,
        musicLibrary: 5,
        picturesLibrary: 6,
        videosLibrary: 7
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3HF
    .registerEnum("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3HF", !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5
    .$3aX = function(n, t, i, r) {
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3aX.initializeBase(this, [n, t, i, r])
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3aX
    .prototype = { get_$1F6: function() { return"getPhotoFromGallery" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5 = function(n, t, i, r, u, f) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$2WR, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$2CD, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$2QQ, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$12e, r);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$gM,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D(u));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$1Xe,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g(f))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5
    .prototype = { get_$1F6: function() { return"openFilePicker" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g.initializeBase(this);
    this.$gF = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g
    .prototype = {
        $gF: null,
        get_$1BL: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g.$lL) },
        $25l: function() { this.$gF(this.get_$1BL()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$2SY, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$2Z6, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$12e, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$2Oy,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK(r));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$1Xf,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M(u))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD
    .prototype = { get_$1F6: function() { return"getMediaBytes" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F
    .prototype = {
        get_$34u: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F.$2Jg) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.initializeBase(this, [n]);
    this.$Wf = {};
    this.$uZ = {}
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$2ee = function(n, t) {
    for (var r = n.length, i = 0; i < t.length; ++i) String.isInstanceOfType(t[i]) && (r += t[i].length);
    return r
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.prototype = {
    get_$WM: function() { return"CrmSql" },
    get_$2mF: function() {
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$2mG()
    },
    $27t: function(n, t) { return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$hu(this, n, t) },
    $2yA: function() {
        var n = null;
        return this.get_$2mF() &&
            (n = (++Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$Ql).toString(), this.$Wf[n] = ""), n
    },
    $30F: function() { return Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$Ql.toString() },
    $2nn: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "batch");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9(n, t, this);
        i.get_$7w().$9O("SqlDispatcher.CallNativeMethod.Start", (new Date).getTime());
        this.$3K(this.get_$2N().get_$3A(), i);
        i.get_$7w().$9O("SqlDispatcher.CallNativeMethod.End", (new Date).getTime())
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$hu = function(n, t, i) {
    this.$I1 = n;
    this.$15g = new Array(0);
    this.$1cb = new Array(0);
    this.$1cw = new Array(0);
    this.$1QW = new Array(0);
    this.$1IR = 0;
    this.$CZ = this.$I1.$2yA();
    this.$I1.$9O(this.$CZ, String.format("{0}-{1}-{2}", this.$I1.get_$WM(), t, i ? "R" : "W"), "");
    this.$I1.$9O(this.$CZ, "CallId", this.$CZ);
    this.$I1.$9O(this.$CZ, "SqlBatch.Start", (new Date).getTime())
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$hu.prototype = {
    $CZ: null,
    $I1: null,
    $1IR: 0,
    $15g: null,
    $1cb: null,
    $1cw: null,
    $1QW: null,
    get_$2n2: function() { return this.$1IR },
    $2by: function(n, t, i, r) {
        Array.add(this.$15g, n);
        Array.add(this.$1cb, t);
        Array.add(this.$1cw, i);
        Array.add(this.$1QW, r);
        this.$1IR += Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$2ee(n, t)
    },
    $2B: function(n) {
        var i, r, t;
        for (this.$I1.$9O(this
                .$CZ,
                "SqlBatch.Execute.Start",
                (new Date).getTime()), i = 0;
            i < this.$15g.length;
            i++)
            r = this.$15g[i], Microsoft.Crm.Client.Core.Framework.Trace
                .logPerf(110, "ExecuteSqlBatch start, statement{0} = {1}", i, r);
        t = this;
        this.$I1.$2nn(this,
            function() {
                Microsoft.Crm.Client.Core.Framework.Trace.logPerf(110, "ExecuteSqlBatch end");
                t.$I1.$9O(t.$CZ, "SqlBatch.Execute.End", (new Date).getTime());
                t.$I1.$9O(t.$CZ, "SqlBatch.batchCompleteCallback.Start", (new Date).getTime());
                n();
                t.$I1.$9O(t.$CZ, "SqlBatch.batchCompleteCallback.End", (new Date).getTime());
                t.$I1.$9O(t.$CZ, "SqlBatch.End", (new Date).getTime());
                t.$I1.$2NV(t.$CZ)
            })
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9 = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9.initializeBase(this);
    this.set_$7w(new Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d(n.$CZ, i));
    this.get_$7w().$9O("SqlDispatcher.CallNativeMethod.Start", (new Date).getTime());
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9.$2XB, n.$15g);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9.$2Q4, n.$1cb);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9.$25B,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133(n, t, this.get_$7w()));
    this.$1qH = n.$1IR > 256;
    this.get_$7w().$9O("SqlDispatcher.CallNativeMethod.End", (new Date).getTime())
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9
    .prototype = {
        $1qH: !1,
        get_$1F6: function() { return"executeSqlBatch" },
        get_$1qI: function() { return this.$1qH }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133 = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133.initializeBase(this);
    this.$19K = n;
    this.$1uY = t;
    this.set_$7w(i)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133.prototype = {
    $19K: null,
    $1uY: null,
    get_$2dc: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133.$25C) },
    $25l: function() {
        var t, n, i, r;
        for (this.get_$7w().$9O("SqlDispatcher.OnBatchCompleteCallback.Call.Start", (new Date).getTime()), t = this
                .get_$2dc(), n = 0;
            n < t.length;
            ++n)
            this.$37M(t[n])
                ? (i = t[n], $0.$1(i.message) && (i = JSON.parse(t[n].toString())), this.$19K.$1QW[n](i))
                : (r = t[n], $0.$1(r.rows) && (r = JSON.parse(t[n].toString())), this.$19K.$1cw[n](r));
        this.get_$7w().$9O("SqlDispatcher.OnBatchCompleteCallback.Call.End", (new Date).getTime());
        this.$1uY();
        this.$19K = null
    },
    $37M: function(n) {
        var t = n;
        return!$0.$1(t.code)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i
    .prototype = {
        get_$2D9: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i.$2DA) },
        get_$3Bj: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i.$2Nc) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H
    .prototype = {
        get_$kl: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$rY) },
        set_$kl: function(n) { return this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$rY, n), n },
        set_$vr: function(n) { return this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$2Wm, n), n },
        get_$JE: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1mm) },
        set_$JE: function(n) { return this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1mm, n), n },
        get_$MW: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1F8) },
        set_$MW: function(n) { return this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1F8, n), n },
        get_$JD: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1ml) },
        set_$JD: function(n) { return this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1ml, n), n },
        get_$5f: function() { return this.get_$JE() }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.prototype = {
    get_$WM: function() { return"Watson" },
    $2xd: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "checkpointCallback");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2VX: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn.initializeBase(this), !n) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(81, "onCheckpointCallback cannot be null");
        return
    }
    this.$1ub = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn
    .prototype = {
        $1ub: null,
        get_$2fx: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn.$1OF) },
        $25l: function() { this.$1ub(this.get_$2fx()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU.$2OL,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU
    .prototype = { get_$1qI: function() { return!1 }, get_$1F6: function() { return"getApplicationCheckpoint" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3 = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3.$1OF, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3
    .prototype = { get_$1qI: function() { return!1 }, get_$1F6: function() { return"setApplicationCheckpoint" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.prototype = {
    add_$3F2: function(n) { this.$2F("Signout", n) },
    add_$3EZ: function(n) { this.$2F("Reconfigure", n) },
    add_$3EI: function(n) { this.$2F("OfflineOptin", n) },
    add_$3EJ: function(n) { this.$2F("OfflineOptOut", n) },
    get_$WM: function() { return"Account" },
    $19F: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $3LE: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    beginSecureSessionForResource: function(n, t, i, r) {
        var u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7(n, t, i, r);
        this.$3K(this.get_$2N().get_$3A(), u)
    },
    $2WA: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $20G: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aL;
        this.$3K(this.get_$2N().get_$3A(), n)
    },
    $2RU: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aM;
        this.$3K(this.get_$2N().get_$3A(), n)
    },
    $25s: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aK;
        this.$3K(this.get_$2N().get_$3A(), n)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO.$2Az, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO.$2PK,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO
    .prototype = { get_$1F6: function() { return"requestSecurityToken" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W.initializeBase(this);
    this.$1vO = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W
    .prototype = {
        $1vO: null,
        get_$3LF: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W.$2SW) },
        $25l: function() { this.$1vO(this.get_$3LF()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7 = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$2Sg, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$27g, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$27f, i);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$2OI,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS(r))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7
    .prototype = { get_$1F6: function() { return"beginSecureSessionForResource" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS.initializeBase(this);
    this.$1uZ = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS
    .prototype = {
        $1uZ: null,
        get_$2dg: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS.$25I) },
        get_$2df: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS.$25H) },
        $25l: function() { this.$1uZ(this.get_$2dg(), this.get_$2df()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0 = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0.$1Pv, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0.$1QX, t)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0
    .prototype = { get_$1F6: function() { return"authValidationError" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah.$2Uk, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah.$2Xi, t)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah
    .prototype = { get_$1F6: function() { return"setSessionID" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX
    .$3aL = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aL.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aL.prototype = { get_$1F6: function() { return"signOut" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX
    .$3aM = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aM.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aM
    .prototype = { get_$1F6: function() { return"reconfigure" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX
    .$3aK = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aK.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aK
    .prototype = { get_$1F6: function() { return"cancelSignIn" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI = function(n) {
    this.$2Nl = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.prototype = {
    get_$WM: function() { return"Network" },
    get_$3C2: function() { return this.get_$CS() },
    get_$CS: function() { return this.$2Nl },
    $1O0: function(n, t, i) {
        var r, u;
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "url");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onMethodReturn");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "onMethodException");
        r = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS() ||
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X;
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1dI(r, !0, "isSupported");
        u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly(n, t, i);
        this.$3K(this.get_$2N().get_$3A(), u)
    },
    $uK: function(n, t, i) {
        var r, u;
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "url");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onMethodReturn");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "onMethodException");
        r = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS() ||
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X;
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1dI(r, !0, "isSupported");
        u = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh(n, t, i);
        this.$3K(this.get_$2N().get_$3A(), u)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.$1dv, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.$1Xo,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h(t));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.$1Xn,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M(i))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.prototype = { get_$1F6: function() { return"canOpenUrl" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.$1dv, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.$1Xo,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$FK(t));
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.$1Xn,
        new Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M(i))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.prototype = { get_$1F6: function() { return"openUrl" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TG = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TG.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TG.prototype = { get_$WM: function() { return"Reminder" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN = function(n, t) {
    this.$qh = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.initializeBase(this, [n]);
    this.$1jD = t;
    var i = this;
    this.get_$33().add_$6s(function(n, t) {
        var r, u, f;
        if (t === Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1lM.$I
        )
            Microsoft.Crm.Client.Core.Framework.Trace
                    .logInfo(81, "DiagnosticsEnabled property has changed to: {0}", i.get_$33().get_$29y()),
                i.get_$33().get_$29y()
                    ? Microsoft.Crm.Client.Core.Framework.Trace
                    .set_$21V(Microsoft.Crm.Client.Core.Framework.PAL.Core.$6E.$1YS = 5)
                    : Microsoft.Crm.Client.Core.Framework.Trace
                    .set_$21V(Microsoft.Crm.Client.Core.Framework.PAL.Core.$6E.$1YS = 4), Microsoft.Crm.Client.Core
                    .Framework.Trace.set_$CG(!!Microsoft.Crm.Client.Core.Framework.Trace.$LY), Microsoft.Crm.Client.Core
                    .Framework.Trace.logInfo(81,
                        "Trace.TraceLevel set to: {0}, PALWebScriptLogProcessor.PALWebscriptLogLevel set to {1}",
                        Microsoft.Crm.Client.Core.Framework.Trace.$LY,
                        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6E.$1YS);
        else if (t === Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tP.$I) {
            if (r = i.get_$33().get_$3AP(), Microsoft.Crm.Client.Core.Framework.$1c
                .$1Bm = !!r && r.length > 0, Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(81,
                    "ConsoleTraceProcessor.FilterByTraceComponent was set to: {0}",
                    Microsoft.Crm.Client.Core.Framework.$1c.$1Bm), Microsoft.Crm.Client.Core.Framework.$1c
                .$1Bm)
                for (Microsoft.Crm.Client.Core.Framework.$1c
                        .$2gQ(), u = 0;
                    u < r.length;
                    u++)
                    f = r[u], Microsoft.Crm.Client.Core.Framework.Trace
                        .logVerbose(81, "Component Added: {0}", f), Microsoft.Crm.Client.Core.Framework.$1c.$2cO(f)
        } else
            t === Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tT.$I
                ? (Microsoft.Crm.Client.Core.Framework.$1c.$12d = i.get_$33().get_$3AT(), Microsoft.Crm.Client.Core
                    .Framework.Trace.logVerbose(81,
                        "ConsoleTraceProcessor.MaxTraceMessageLength was set to: {0}",
                        Microsoft.Crm.Client.Core.Framework.$1c.$12d))
                : t === Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tg.$I &&
                Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(81, "MemoryDiagnosticsEnabled property has changed to: {0}", i.get_$33().get_$1Ws())
    })
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.prototype = {
    $1jD: null,
    add_$3Dv: function(n) { this.$2F("OnLowMemory", n) },
    get_$WM: function() { return"Application" },
    get_$33: function() { return this.get_$CS() },
    get_$CS: function() { return this.$qh },
    $26j: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aO;
        this.$3K(this.get_$2N().get_$3A(), n)
    },
    $19q: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $3QN: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "argumentName");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $3RS: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "valueName");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "value");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $1pz: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "valueNames");
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(t, "onStringsResult");
        var i = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx(n, t);
        this.$3K(this.get_$2N().get_$3A(), i)
    },
    $30g: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onMetadataResult");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $1pd: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "onFloatResult");
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $2fG: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(i, "onFloatResult");
        var r = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz(n, t, i);
        this.$3K(this.get_$2N().get_$3A(), r)
    },
    $267: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    },
    $3Jx: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aN;
        this.$3K(this.get_$2N().get_$3A(), n)
    },
    $1OW: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H(n);
        this.$25m(this.get_$2N().get_$3A(), t)
    },
    $25m: function(n, t) {
        if (!this.$21)
            throw Error.invalidOperation("Trying to call native method " +
                t.get_$1F6() +
                " before dispatcher is available");
        this.$1jD.$25m(this, n, t)
    },
    $3Va: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq(n);
        this.$3K(this.get_$2N().get_$3A(), t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN
    .$3aO = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aO.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aO
    .prototype = { get_$1F6: function() { return"clientInitialized" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8 = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8.$1Pv, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8.$1QX, t)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8
    .prototype = { get_$1F6: function() { return"clientBootError" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac.$16T, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac.$La, t)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac
    .prototype = { get_$1F6: function() { return"setBoolValue" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai.$16T, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai.$La, t)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai
    .prototype = { get_$1F6: function() { return"setStringValue" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z.initializeBase(this);
    this.$1vX = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z
    .prototype = {
        $1vX: null,
        get_$1Jc: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z.$2ZR) },
        $25l: function() { this.$1vX(this.get_$1Jc()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx.$2ZQ, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx.$2PX,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z(t))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx
    .prototype = { get_$1F6: function() { return"getStringValueBundle" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S.initializeBase(this);
    this.$1v8 = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S
    .prototype = {
        $1v8: null,
        get_$2M: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S.$La) },
        $25l: function() { this.$1v8(this.get_$2M()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw.$2Oz,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw
    .prototype = { get_$1F6: function() { return"getMetadataBundle" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF.initializeBase(this);
    this.$1um = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF
    .prototype = {
        $1um: null,
        get_$2M: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF.$La) },
        $25l: function() { this.$1um(this.get_$2M()) }
    };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv.$1Xi,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF(n))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv
    .prototype = { get_$1F6: function() { return"getMemoryUsage" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz.$24b, n);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz.$2Ao, t);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz.$1Xi,
        new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF(i))
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz
    .prototype = { get_$1F6: function() { return"captureMemoryUsage" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f.$1Ws, n)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f
    .prototype = { get_$1F6: function() { return"changeMemoryDiagnosticsEnableState" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN
    .$3aN = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aN.initializeBase(this) };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aN
    .prototype = { get_$1F6: function() { return"reloadWebApplication" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq.initializeBase(this);
    this.$m(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq.$2Xa, n.$UB)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq
    .prototype = { get_$1F6: function() { return"syncProgressState" } };
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.prototype = {
    get_$3A: function() { return Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$29C },
    get_$2Jf: function() { return this.get_$3WJ() },
    get_$2ZV: function() {
        return!this.get_$2Jf() ||
            !this.get_$2Je() ||
            this.get_$2JV() && Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1kn > this.get_$14p() ||
            this.get_$1Dp() !== Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1rF.$At &&
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Uh > this.get_$1Dp() ||
            this.get_$1Jq() !== Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$22e.$At &&
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ui > this.get_$1Jq() ||
            this.get_$yQ() !== Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1hf.$At &&
            Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ue > this.get_$yQ()
            ? 1
            : this.get_$2JV() && Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1kn < this.get_$14p() ? 2 : 0
    },
    get_$1u9: function() {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()
            ? this.get_$1Dp()
            : Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ? this.get_$yQ() : this.get_$1Jq()
    },
    get_$2JV: function() {
        var n = this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2MG);
        return this.get_$3A() === n
    },
    get_$3WJ: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2ZU) },
    get_$2Je: function() {
        return this.get_$2Zk() ||
            this.get_$2M6() ||
            this.get_$2RA() ||
            this.get_$2NC() ||
            this.get_$2NF() ||
            this.get_$2UC() ||
            this.get_$2Nx()
    },
    get_$2Zk: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Zl) },
    get_$2RA: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2RB) },
    get_$3Io: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2R7) },
    get_$2M6: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2M7) },
    get_$2NC: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2ND) },
    get_$2NF: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2NG) },
    get_$2UC: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2UD) },
    get_$2Nx: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ny) },
    get_$2N: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$22P) },
    get_$Ao: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$25V) },
    get_$14p: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2TU) },
    get_$1Dp: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1rF) },
    get_$1Jq: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$22e) },
    get_$yQ: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1hf) },
    get_$1r4: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2KZ) },
    get_$1N6: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$24W) },
    get_$29y: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1lM) },
    get_$1Ws: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tg) },
    get_$2mG: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2A3) },
    get_$3AP: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tP) },
    get_$3AT: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tT) },
    get_$1Tp: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Jd) },
    get_$34o: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Jc) },
    get_$34m: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ja) },
    get_$1c2: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2WP) },
    get_$24Y: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$24Z) },
    get_$23O: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$23P) },
    get_$203: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2WO) },
    get_$11t: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2LJ) },
    get_$Zj: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Nb) },
    get_$34i: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2JY) },
    get_$34h: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2JX) },
    get_$3Rz: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2WY) },
    get_$34z: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ji) },
    get_$3Ih: function() { return this.$b(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1ww) }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4 = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4.prototype = {
    $Lx: null,
    get_$1qI: function() { return!1 },
    get_$7w: function() {
        return this.$Lx || (this.$Lx = new Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d(null, null)), this.$Lx
    },
    set_$7w: function(n) { return this.$Lx = n, n },
    $33A: function() {
        for (var t, i = {}, r = this.$11B(), n = 0;
            n < r.get_$l();
            n++
        ) t = r.get_$H(n), t.$EY.inheritsFrom(Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B) || this.$2RD(i, t);
        return i
    },
    $2y8: function(n) {
        var r, u, i, t, f, e;
        for (Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "bridge"), r = {}, u = this.$11B(), i = 0;
            i < u.get_$l();
            i++)
            t = u.get_$H(i), t.$EY.inheritsFrom(Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B) &&
            (Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(81, "Registering callback object for callback, {0}", t.$I), f = this.$b(t), e = n
                .registerNativeCallback(this, f), t.$n4.$1Jt(r, t, e));
        return r
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH = function(n) {
    this.$29S = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH.$3aF;
    Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "bridge");
    this.$1Nf = n
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH.prototype = {
    $1Nf: null,
    $21: !1,
    $Wf: null,
    $uZ: null,
    get_$2mF: function() { return!1 },
    get_IsAvailable: function() { return this.$21 },
    set_IsAvailable: function(n) { return this.$21 = n, n },
    get_$CS: function() { return this.$29S },
    get_$2N: function() { return this.$1Nf.get_$2N() },
    $Gb: function(n) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "state");
        this.$21 = !0;
        this.get_$CS().$1bx(n)
    },
    changeState: function(n, t) {
        var u, r, i, f, e, o;
        for (Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "name"), u = this.get_$CS().$11B(), r = 0;
            r < u.get_$l();
            r++)
            if (i = u.get_$H(r), i.$I === n)
                return f = {}, Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Changing state, {0}", n), f[i
                    .$I] = t, e = i.$n4.$1ZV(f, i), o = i.$1jK(e), this.get_$CS().$m(i, o), !0;
        return!1
    },
    $1GR: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "name");
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(81, "Raising event, {0}", n);
        this.$Bn(n, t)
    },
    $2NV: function(n) {
        this.$Wf && n in this.$Wf && (this.$uZ || (this.$uZ = {}), this.$uZ[n] = this.$Wf[n], delete this.$Wf[n])
    },
    $3It: function() { this.$uZ = null },
    $2zw: function(n, t) { return String.format(":{0}:{1}", n, t) },
    $9O: function(n, t, i) {
        if (this.get_$2mF() && n && n !== "" && t && t !== "" && this.$Wf) {
            var r = new Sys.StringBuilder;
            r.append(n in this.$Wf ? this.$Wf[n] : "");
            r.append(this.$2zw(t, i));
            this.$Wf[n] = r.toString()
        }
    },
    $3K: function(n, t) {
        if (!this.$21)
            throw Error.invalidOperation("Trying to call native method " +
                t.get_$1F6() +
                " before dispatcher is available");
        this.$1Nf.$3K(this, n, t)
    }
};
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH
    .$3aF = function() { Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH.$3aF.initializeBase(this) };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Storage");
Microsoft.Crm.Client.Core.Framework.Storage.$Ha = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$Ha.registerInterface("Microsoft.Crm.Client.Core.Framework.Storage.$Ha");
Microsoft.Crm.Client.Core.Framework.Storage.$GG = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$GG.registerInterface("Microsoft.Crm.Client.Core.Framework.Storage.$GG");
Microsoft.Crm.Client.Core.Framework.Storage.$GF = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$GF.registerInterface("Microsoft.Crm.Client.Core.Framework.Storage.$GF");
Microsoft.Crm.Client.Core.Framework.Storage.$GH = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$GH.registerInterface("Microsoft.Crm.Client.Core.Framework.Storage.$GH");
Microsoft.Crm.Client.Core.Framework.Storage.$GI = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$GI.registerInterface("Microsoft.Crm.Client.Core.Framework.Storage.$GI");
Microsoft.Crm.Client.Core.Framework.Storage.$G6 = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$G6.registerInterface("Microsoft.Crm.Client.Core.Framework.Storage.$G6");
Microsoft.Crm.Client.Core.Framework.Storage.$NF = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$NF.prototype = {
    $Ae: null,
    $yV: 0,
    $1NV: null,
    $1Jk: function(n) {
        this.$1NV = new(Microsoft.Crm.Client.Core.Framework.Storage.$CK.$$(Array));
        this.$yV = n.length;
        this.$Ae = new Array(this.$yV);
        for (var t = 0; t < this.$yV; t++) this.$3Tq(n[t], t);
        return this.$1NV
    },
    $3Tq: function(n, t) {
        var i = this;
        n.$3ZX(function(n) {
            i.$Ae[t] = n;
            i.$yV--;
            i.$yV || i.$1NV.$DQ(i.$Ae)
        })
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$CK = function() {
    this.$1Tc = [];
    this.$Ai = this.$$gta["Microsoft.Crm.Client.Core.Framework.Storage.$CK"].T === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.Storage.$CK"].T)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.Storage.$CK"].T === Boolean ? !1 : null
};
Microsoft.Crm.Client.Core.Framework.Storage.$CK.$$ = function(n) {
    var t = "$CK$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework.Storage[t]) {
        r = Microsoft.Crm.Client.Core.Framework.Storage[t] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.Storage.$CK"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.Storage.$CK.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework.Storage." + t);
        u = Microsoft.Crm.Client.Core.Framework.Storage.$CK.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework.Storage[t]
};
Microsoft.Crm.Client.Core.Framework.Storage.$CK.prototype = {
    $1Vg: !1,
    $DQ: function(n) {
        if (!this.$1Vg) {
            this.$Ai = n;
            this.$1Vg = !0;
            for (var t = 0; t < this.$1Tc.length; t++) this.$1Tc[t](this.$Ai)
        }
    },
    $3ZX: function(n) {
        if (this.$1Vg) {
            n(this.$Ai);
            return
        }
        Array.add(this.$1Tc, n)
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$4E = function(n, t) {
    this.$SK = n;
    this.$7C = Microsoft.Crm.Client.Core.Framework.Storage.$4E.$2DM(n, t)
};
Microsoft.Crm.Client.Core.Framework.Storage.$4E.$aw = function(n, t) {
    var i = new Microsoft.Crm.Client.Core.Framework.Storage.$4E(n, t);
    throw Error.create(i.$7C);
};
Microsoft.Crm.Client.Core.Framework.Storage.$4E.$2DM = function(n, t) {
    var i = "BrowserDbError: ";
    switch (n) {
    case 1:
        i += "ConstraintError. ";
        break;
    case 2:
        i += "NotFoundError. ";
        break;
    case 3:
        i += "QuotaError. ";
        break;
    case 4:
        i += "TimeoutError. ";
        break;
    default:
        i += "UnknownError. "
    }
    return i + t
};
Microsoft.Crm.Client.Core.Framework.Storage.$4E.prototype = { $7C: null, $SK: 0 };
Microsoft.Crm.Client.Core.Framework.Storage.$Ng = function(n, t) {
    this.$1D = n;
    this.$2R = t
};
Microsoft.Crm.Client.Core.Framework.Storage.$Ng.prototype = { $1D: null, $2R: 0 };
Microsoft.Crm.Client.Core.Framework.Storage.$4R = function(n) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "path");
    this.$1D = n
};
Microsoft.Crm.Client.Core.Framework.Storage.$4R.prototype = {
    $1D: null,
    $m7: function(n) {
        for (var r = this.$1D.split("."), t = n, i = 0; i < r.length && t; ++i) t = t[r[i]];
        return t
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Az = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$Az.$iP = function(n) {
    var t = "";
    if (!$0.$1(n))
        switch (n) {
        case 0:
            t = "TEXT";
            break;
        case 1:
            t = "INTEGER"
        }
    return t
};
Microsoft.Crm.Client.Core.Framework.Storage.$82 = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.Storage.$82.initializeBase(this, [[n]]);
    this.$Ee = t
};
Microsoft.Crm.Client.Core.Framework.Storage.$82.prototype = { $Ee: null, $2Xl: function(n) { return n === this.$Ee } };
Microsoft.Crm.Client.Core.Framework.Storage.$94 = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.Storage.$94.initializeBase(this, [[n]]);
    this.$WC = t;
    this.$X2 = i;
    this.$mj = r
};
Microsoft.Crm.Client.Core.Framework.Storage.$94.prototype = {
    $WC: null,
    $X2: null,
    $mj: 0,
    $2Xl: function(n) {
        var t = !1;
        if (!$0.$1(n))
            switch (this.$mj) {
            case 0:
                t = n >= this.$WC && n <= this.$X2;
                break;
            case 3:
                t = n > this.$WC && n < this.$X2;
                break;
            case 1:
                t = n > this.$WC && n <= this.$X2;
                break;
            case 2:
                t = n >= this.$WC && n < this.$X2
            }
        return t
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$95 = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.Storage.$95.initializeBase(this, [[n]]);
    this.$cU = t;
    this.$qs = i;
    this.$1Fk = r
};
Microsoft.Crm.Client.Core.Framework.Storage.$95.prototype = {
    $cU: null,
    $qs: 0,
    $1Fk: 0,
    $2Xl: function(n) {
        var t = !1;
        return $0.$1(n) ||
        (t = this.$1Fk
            ? this.$qs === 1 ? n <= this.$cU : n < this.$cU
            : this.$qs === 1 ? n >= this.$cU : n > this.$cU), t
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nh = function() {
    this.$1Ml = new Microsoft.Crm.Client.Core.Framework.Storage.$Nc;
    this.$1O6 = new Microsoft.Crm.Client.Core.Framework.Storage.$Nc;
    this.$1Pr = new Microsoft.Crm.Client.Core.Framework.Storage.$Nc
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nh.prototype = {
    $1Ml: null,
    $1O6: null,
    $1Pr: null,
    get_$34v: function() {
        return this.get_$2bD().length > 0 || this.get_$2fN().length > 0 || this.get_$2lk().length > 0
    },
    get_$2bD: function() { return this.$1Ml.get_$1m0() },
    get_$2fN: function() { return this.$1O6.get_$1m0() },
    get_$2lk: function() { return this.$1Pr.get_$1m0() },
    $3JM: function(n, t) {
        switch (t) {
        case 0:
            this.$1Ml.$1hI(n);
            break;
        case 1:
            this.$1O6.$1hI(n);
            break;
        case 2:
            this.$1Pr.$1hI(n)
        }
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nd = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "id");
    this.$11 = n;
    this.$TN = t
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nd.prototype = { $11: null, $TN: null };
Microsoft.Crm.Client.Core.Framework.Storage.$Nc = function() { this.$e9 = {} };
Microsoft.Crm.Client.Core.Framework.Storage.$Nc.prototype = {
    get_$1m0: function() {
        var t = [], i = this.$e9, n, r;
        for (n in i) r = { key: n, value: i[n] }, Array.add(t, r.value);
        return t
    },
    $1hI: function(n) { this.$e9[n.$11.toString()] = n }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nf = function(n) {
    var t, i, r;
    this.$$d_$3Iz = Function.createDelegate(this, this.$3Iz);
    this.$1cu = n;
    this.$12u = {};
    t = this.$1cu.$1ct;
    for (i in t) r = { key: i, value: t[i] }, this.$12u[r.key] = new Microsoft.Crm.Client.Core.Framework.Storage.$Nh
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nf.prototype = {
    $1cu: null,
    $12u: null,
    $3Iz: function(n, t, i, r) {
        var u = n.toLowerCase(), f;
        u in this.$12u && (f = this.$12u[u], f.$3JM(new Microsoft.Crm.Client.Core.Framework.Storage.$Nd(i, r), t))
    },
    $1ZG: function() {
        var u = this.$12u, t, n, i, r;
        for (t in u)
            n = { key: t, value: u[t] }, i = this.$1cu.$1ct[n.key], i && (r = n.value, r.get_$34v() && i(n.key, r))
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Ne = function(n) {
    this.$2Q7 = n;
    this.$1ct = {}
};
Microsoft.Crm.Client.Core.Framework.Storage.$Ne.prototype = { $1ct: null, $2Q7: null };
Microsoft.Crm.Client.Core.Framework.Storage.$Nn = function(n) {
    if (n) {
        var t = Object.getType(n);
        if (t !== String && t !== Number && t !== Number && t !== Date
        )
            throw Error.argumentType("keyValue",
                t,
                null,
                "keyValue must be a javascript primitive (string, int, float, Datetime (or null))");
    }
    this.$1W4 = n
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nn
    .prototype = {
        $1W4: null,
        toString: function() { return this.$1W4 ? "" + this.$Hj() : null },
        $Hj: function() { return this.$1W4 }
    };
Microsoft.Crm.Client.Core.Framework.Storage.$Nm = function(n, t) {
    this.$AL = n;
    this.$Mc = t;
    this.$1XU = {}
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nm.prototype = {
    $AL: null,
    $Mc: null,
    $1XU: null,
    $2OH: function(n, t, i) {
        this.$1is(t.$Hj());
        var r = this.$Mc.$1TB(n.get_$5f()), u = this;
        Array.forEach(r,
            function(r) {
                var f = r;
                f.$3Im(u.$AL, n, t, i)
            })
    },
    $2OG: function(n, t) {
        this.$1is(t.$Hj());
        var i = this.$Mc.$1TB(n.get_$5f()), r = this;
        Array.forEach(i,
            function(i) {
                var u = i;
                u.$3Il(r.$AL, n, t)
            })
    },
    $2OF: function(n) {
        this.$1is(n.get_$5f());
        var t = this.$Mc.$1TB(n.get_$5f()), i = this;
        Array.forEach(t,
            function(t) {
                var r = t;
                r.$3Ik(i.$AL, n)
            })
    },
    $1is: function(n) {
        if (n) {
            var i = n.toString(), r = this.$1XU[i], t = 1;
            if ($0.$1(r) || (t = r + 1), t > 64)
                throw Error.invalidOperation("loop detected in transaction observer for id " + n);
            this.$1XU[i] = t
        }
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$RY = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.Storage.$RY.initializeBase(this);
    this.$e9 = new Sys.EventHandlerList;
    this.$V2 = t;
    this.$LV = n
};
Microsoft.Crm.Client.Core.Framework.Storage.$RY.prototype = {
    $LV: null,
    $e9: null,
    $V2: null,
    $3Im: function(n, t, i, r) {
        var u = this.$e9.getHandler("OnPut"), f;
        u && (f = new Microsoft.Crm.Client.Core.Framework.Storage.$Ra(n, t, i, r), u(this, f))
    },
    $3Il: function(n, t, i) {
        var r = this.$e9.getHandler("OnDelete"), u;
        r &&
        (u = this, t.$F4(i,
            function(f) {
                if (f) {
                    var e = new Microsoft.Crm.Client.Core.Framework.Storage.$Ra(n, t, i, f);
                    r(u, e)
                }
            },
            null))
    },
    $3Ik: function(n, t) {
        var i = this.$e9.getHandler("OnClear"), r;
        i && (r = new Microsoft.Crm.Client.Core.Framework.Storage.$Ra(n, t, null, null), i(this, r))
    },
    $GN: function() {
        this.$e9 = null;
        this.$V2.$3KW(this)
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Np = function() { this.$Mc = {} };
Microsoft.Crm.Client.Core.Framework.Storage.$Np.prototype = {
    $Mc: null,
    $1TB: function(n) {
        var t = this.$Mc[n];
        return t || (t = [], this.$Mc[n] = t), t
    },
    $3KW: function(n) {
        for (var i = this.$1TB(n.$LV), t = 0; t < i.length; ++t)
            if (i[t] === n) {
                Array.removeAt(i, t);
                break
            }
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$No = function(n, t, i, r) {
    if (t && t.length > 2) throw Error.invalidOperation("SortBy can have at most 2 sort fields.");
    this.$1T1 = !1;
    this.$2J = n;
    this.$A0 = t;
    this.$F8 = $0.$1(i) ? 0 : i;
    this.$2u = $0.$1(i) ? -1 : r
};
Microsoft.Crm.Client.Core.Framework.Storage.$No.prototype = {
    $2J: null,
    $A0: null,
    $F8: 0,
    $2u: 0,
    $1T1: !1,
    toString: function() {
        if (!this.$2J) return"";
        var n = "";
        return Microsoft.Crm.Client.Core.Framework.Storage.$82.isInstanceOfType(this.$2J) &&
            (n = this.$2J.$Ee.toString()), Microsoft.Crm.Client.Core.Framework.$3
            .$MD("Query: '{0}'='{1}'", this.$2J.get_$Fb().$1D, n)
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nj = function(n) { this.$oa = n || [] };
Microsoft.Crm.Client.Core.Framework.Storage.$Nj.prototype = {
    $oa: null,
    get_$Fb: function() { return this.$oa[0] },
    $2La: function(n, t) {
        var i = this.get_$Fb().$1D === Microsoft.Crm.Client.Core.Framework.Storage.$4R.$11.$1D
            ? n
            : this.get_$Fb().$m7(t);
        return this.$2Xl(i)
    },
    $38Q: function(n) {
        var t = n[this.get_$Fb().$1D];
        return this.$2Xl(t)
    }
};
Microsoft.Crm.Client.Core.Framework.Storage.$Ni = function(n, t) {
    this.$11 = n;
    this.$TN = t
};
Microsoft.Crm.Client.Core.Framework.Storage.$Ni.prototype = { $11: null, $TN: null };
Microsoft.Crm.Client.Core.Framework.Storage.$Nl = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "sortField");
    this.$9T = n;
    this.$5u = t
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nl.prototype = { $9T: null, $5u: 0 };
Microsoft.Crm.Client.Core.Framework.Storage.$Ra = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.Storage.$Ra.initializeBase(this);
    this.$AL = n;
    this.$1FP = t;
    this.$11 = i;
    this.$28 = r
};
Microsoft.Crm.Client.Core.Framework.Storage.$Ra.prototype = { $AL: null, $1FP: null, $11: null, $28: null };
Microsoft.Crm.Client.Core.Framework.Storage.$Rc = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.Storage.$Rc.initializeBase(this);
    this.code = n;
    this.message = t
};
Microsoft.Crm.Client.Core.Framework.Storage.$Nk = function() {};
Microsoft.Crm.Client.Core.Framework.Storage.$Nk
    .prototype = { insertId: 0, rowsAffected: 0, columnNames: null, rows: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.TelemetryCore");
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Nb = function(n, t) {
    this.$1w2 = n;
    this.$Ai = t
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Nb.prototype = { $1w2: null, $Ai: null };
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb = function(n) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb.initializeBase(this, [null, n])
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.ClientActivityEvent = function(n, t, i) {
    var r, u, f;
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.ClientActivityEvent.initializeBase(this, [null, t]);
    this.$t("CorrelationId", n);
    r = i;
    for (u in r) f = { key: u, value: r[u] }, this.$t(f.key, f.value)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RP = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RP
        .initializeBase(this, [null, "DeviceIntegrationControlErrorEvent"]);
    this.$t("controlname", n);
    this.$t("controlmode", i);
    this.$t("primaryattributetype", r);
    this.$t("error", t)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RQ = function() {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RQ.initializeBase(this, [null, "InitialPage_Loaded"])
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RQ.prototype = {
    $2xg: function() {
        var n = 0;
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21 &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$24Y() !== -1 &&
            (n = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$24Y()), n
    },
    $2xU: function() {
        var n = 0;
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21 &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$23O() !== -1 &&
            (n = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$23O()), n
    },
    $2cE: function() {
        var n = (new Date).getTime() - this.$2xg() - this.$2xU();
        this.$t("TimeSinceSessionInit", n)
    }
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR = function(n) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR.initializeBase(this, [null, n])
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SI = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SI.initializeBase(this, ["ServiceHubPerf"]);
    this.$t("EventName", n);
    this.$t("Time", t.toString());
    this.$t("UTCTime", i.toString());
    this.$t("BrowserName", Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$2GM());
    this.$t("SessionID", Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().$F4("MoCASessionID"));
    this.$t("Type", $0.$1(r) ? "Undefined" : r);
    this.$t("Entity", $0.$1(u) ? "Undefined" : u)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SK = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SK.initializeBase(this, ["ServiceHubControlErrorEvent"]);
    this.$t("controlname", n);
    this.$t("controlmode", i);
    this.$t("primaryattributetype", r);
    this.$t("error", t)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SL = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SL.initializeBase(this, ["ServiceHubFilterEvent"]);
    this.$t("controlname", n);
    this.$t("filtertype", t);
    this.$t("filtereventtype", i);
    this.$t("filterexpression", r);
    this.$t("sourceid", u)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SM = function(n, t, i, r, u, f) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SM.initializeBase(this, ["ServiceHubUserTelemetryEvent"]);
    this.$t("BrowserType", n);
    this.$t("UserId", t);
    this.$t("OrganizationId", i);
    this.$t("OrganizationName", r);
    this.$t("LanguageId", u);
    this.$t("SessionId", f)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SJ = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SJ.initializeBase(this, ["ServiceHubEmailLinkEvent"]);
    this.$t("sessionid", n);
    this.$t("entityname", t);
    this.$t("operationname", i)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RW = function(n) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RW.initializeBase(this, [null, n])
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RW.prototype = {
    $2cB: function(n, t) {
        this.$t("synctime", n);
        this.$t("RequestCompleteSync", t)
    }
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RT = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RT.initializeBase(this, [null, "mocaccperf"]);
    this.$t("controlname", n);
    this.$t("controlmode", t);
    this.$t("primaryattributetype", i);
    this.$t("eventname", r);
    this.$t("time", u)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RU = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RU.initializeBase(this, [null, "mocacustomeventperf"]);
    this.$t("eventname", n);
    this.$t("time", t)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O6 = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O6.initializeBase(this, [n, t]);
    Microsoft.Crm.Client.Core.Framework.$3.$A(i) || this.$t("StartTime", i);
    Microsoft.Crm.Client.Core.Framework.$3.$A(r) || this.$t("EndTime", r);
    u >= 0 && this.$t("TotalTime", u);
    Microsoft.Crm.Client.Core.Framework.$3.$A(f) || this.$t("Status", f);
    Microsoft.Crm.Client.Core.Framework.$3.$A(e) || this.$t("ErrorInfo", e);
    o >= 0 && this.$t("Count", o);
    Microsoft.Crm.Client.Core.Framework.$3.$A(s) || this.$t("ActionType", s);
    Microsoft.Crm.Client.Core.Framework.$3.$A(h) || this.$t("FormMode", h);
    Microsoft.Crm.Client.Core.Framework.$3.$A(c) || this.$t("ComponentType", c);
    Microsoft.Crm.Client.Core.Framework.$3.$A(l) || this.$t("PrimaryModelName", l);
    a !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty() && this.$t("ClientId", a);
    v !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty() && this.$t("SessionId", v)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$OB = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$OB.initializeBase(this, [null, "appcrashdetection"]);
    this.$t("mashupdisabled", n);
    this.$t("mashupencounteredpreviousrun", t);
    this.$t("crashcount", i)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O7 = function(n, t, i, r, u, f, e, o, s, h, c) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O7.initializeBase(this, [n, t]);
    Microsoft.Crm.Client.Core.Framework.$3.$A(i) || this.$t("StartTime", i);
    Microsoft.Crm.Client.Core.Framework.$3.$A(r) || this.$t("EndTime", r);
    u && this.$t("TotalTime", u);
    Microsoft.Crm.Client.Core.Framework.$3.$A(f) || this.$t("Status", f);
    Microsoft.Crm.Client.Core.Framework.$3.$A(e) || this.$t("ErrorInfo", e);
    o !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty() && this.$t("ProfileId", o);
    Microsoft.Crm.Client.Core.Framework.$3.$A(s) || this.$t("Time", s);
    Microsoft.Crm.Client.Core.Framework.$3.$A(h) || this.$t("ProfileVersion", h);
    c && this.$t("PlaybackQueueTime", c)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U = function(n, t) {
    this.$PV = n;
    Microsoft.Crm.Client.Core.Framework.$3.$A(this.$PV) && (this.$PV = this.$2xR());
    this.$Si = t;
    this.$1Qc = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Nb));
    this.$2cE()
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U.prototype = {
    $PV: null,
    $Si: null,
    $1Qc: null,
    $t: function(n, t) { $0.$1(t) || this.$1Qc.add(new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Nb(n, t)) },
    toJSON: function() {
        var n = {}, t, r;
        n.ActivityId = this.$PV;
        n.EventName = this.$Si;
        t = {};
        for (var u = this.$1Qc.get_Items(), f = u.length, i = 0; i < f; ++i) r = u[i], t[r.$1w2] = r.$Ai;
        return n.EventValues = t, n
    },
    $2xR: function() {
        if (Microsoft.Crm.Client.Core.Framework.$3.$A(Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U.$18e)) {
            var n = Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().$F4("MoCASessionID");
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U
                .$18e = Microsoft.Crm.Client.Core.Framework.$3.$A(n)
                ? Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString()
                : n
        }
        return Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U.$18e
    },
    $32V: function() {
        var n = 0;
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21 &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1c2() !== -1 &&
            (n = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1c2()), n
    },
    $2cE: function() {
        var n = (new Date).getTime() - this.$32V();
        this.$t("TimeSinceSessionInit", n)
    }
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P3 = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P3.initializeBase(this, [null, "mocaccerror"]);
    this.$t("controlname", n);
    this.$t("controlmode", i);
    this.$t("primaryattributetype", r);
    this.$t("error", t)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P5 = function(n, t, i, r, u, f, e) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P5.initializeBase(this, [null, "mocascripterror"]);
    this.$t("filename", n);
    this.$t("functionname", t);
    this.$t("linenumber", i);
    this.$t("message", r);
    this.$t("callstack", u);
    Microsoft.Crm.Client.Core.Framework.$3.$A(f) || this.$2ax(f);
    $0.$25(e) || this.$qd(e)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P5.prototype = {
    $2ax: function(n) {
        this.$t("useragent", window.navigator.userAgent);
        this.$t("browserlanguage", n);
        this.$t("systemlanguage", window.navigator.systemLanguage);
        this.$t("userlanguage", window.navigator.userLanguage);
        this.$t("screenresolution", window.screen.width + "x" + window.screen.height);
        this.$t("clienttime", (new Date).localeFormat("s"))
    },
    $qd: function(n) {
        this.$t("orglanguage", n.get_$1sm());
        this.$t("orgculture", n.get_$1vo());
        this.$t("userlanguage", n.get_LanguageId());
        this.$t("userculture", n.get_$229());
        this.$t("orgid", n.get_$Jl());
        this.$t("orgname", n.get_$nl());
        this.$t("userid", n.get_$pH());
        this.$t("crmversion", n.get_$1zI())
    }
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P0 = function(n, t, i) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P0.initializeBase(this, [null, "ProductSuggestionsLoad"]);
    this.$t("EntityName", t);
    this.$t("Status", n);
    this.$t("Message", i)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P1 = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P1.initializeBase(this, [null, n]);
    Microsoft.Crm.Client.Core.Framework.$3.$A(t) || this.$t("OrganizationName", t);
    Microsoft.Crm.Client.Core.Framework.$3.$A(i) || this.$t("UserId", i);
    Microsoft.Crm.Client.Core.Framework.$3.$A(r) || this.$t("Message", r);
    u >= 0 && this.$t("Time", u)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P6 = function(n, t, i, r, u, f, e) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P6
        .initializeBase(this, [null, "mocatrace_" + Microsoft.Crm.Client.Core.Framework.$5h.toString(t)]);
    this.$t("tracecomponent", n);
    this.$t("message", i);
    this.$t("callstack", r);
    this.$t("exceptionmessage", u);
    this.$t("exceptioncallstack", f);
    this.$t("clientinfo", e)
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$PD = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.$PD.initializeBase(this);
    this.$I = n;
    this.$1la = t
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$PD.prototype = { $I: null, $1la: 0 };
Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter = function() {
    this.$$d_$3CX = Function.createDelegate(this, this.$3CX);
    this.$$d_$1FX = Function.createDelegate(this, this.$1FX);
    this.$$d_$nh = Function.createDelegate(this, this.$nh);
    this.$nw = [];
    this.$141 = [];
    this.$pm = !0;
    this.$j4 = !1
};
Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter
    .get_Instance = function() {
        return $0.$1(Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.$D) &&
        (Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.$D = new Microsoft.Crm.Client.Core
            .Framework.TelemetryCore.TelemetryReporter), Microsoft.Crm.Client.Core.Framework.TelemetryCore
            .TelemetryReporter.$D
    };
Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.prototype = {
    $1Gw: null,
    $nw: null,
    $141: null,
    $pm: !1,
    $j4: !1,
    get_$Ts: function() { return $0.$1(this.$nw) ? 0 : this.$nw.length },
    $3CX: function() { Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(164, "OnBeforeSend") },
    $1FX: function(n, t, i) {
        this.$2XD();
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(164, "OnError: {0}", i.toString())
    },
    $nh: function() {
        this.$2XD();
        Microsoft.Crm.Client.Core.Framework.Trace.logVerbose(164, "OnSuccess")
    },
    $2XD: function() { for (var t, i = this.$141.length, n = 0; n < i; n++) t = Array.dequeue(this.$141), t.stop() },
    InitializeRequestManager: function(n) {
        var t, i;
        if (this.$j4 = !0, Microsoft.Crm.Client.Core.Framework.$3.$A(n)) {
            for (this.$pm = !1, t = 0; t < this.get_$Ts(); t++) i = Array.dequeue(this.$nw), this.$1zE(i);
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().add_$1Fc(this.get_$3OM())
        } else
            this.$1Gw = new Microsoft.Crm.Client.Core.Framework
                    .$NJ(n, this.$$d_$nh, this.$$d_$1FX, this.$$d_$3CX),
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
                    .add_$1Fc(this.get_$2WA()), this
                    .$1xi();
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(164,
            "Session ID : " + Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().$F4("MoCASessionID"))
    },
    $1w: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("Telemetry.AddTelemetryEvent"), i;
        t.start();
        this.$pm
            ? (Array.enqueue(this.$nw, n), this.$j4 &&
            (i = this, Microsoft.Crm.Client.Core.Framework.Scheduler
                .Schedule(function() { i.$1xi() }, -13, "TelemetryReporter.SendTelemetryData")))
            : this.$1zE(n);
        t.stop();
        t.addParameter(this.$nw.length.toString())
    },
    $aN: function(n) {
        var t, i, r;
        this.$pm
            ? this.$j4
            ? (t = new Array(1), t[0] = n, i = new Microsoft.Crm.Client.Core.Framework
                    .PerformanceStopwatch("Telemetry.ReportImmediateEvent"), r = "",
                $0.$1(t) || (r = JSON.stringify(t), i.addParameter(r)), i.start(), Array.enqueue(this.$141, i), this
                    .$1Gw
                    .$25G("POST", "", r, 3e3))
            : this.$1w(n)
            : this.$1zE(n)
    },
    $1xi: function() {
        var r = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("Telemetry.ReportEvents"), t, i, n, u;
        for (r.start(), Array.enqueue(this.$141, r), t = this
                .get_$Ts() <
                50
                ? this.get_$Ts()
                : 50, i = new Array(t), n = 0;
            n < t;
            n++) u = Array.dequeue(this.$nw), i[n] = u;
        this.$1Gw.$25F("POST", "", i, 3e3)
    },
    $I8: function() { this.$j4 && this.$1xi() },
    $1zE: function(n) { Microsoft.Crm.Client.Core.Framework.$2Z.$3AZ(JSON.stringify(n)) },
    get_$2WA: function() {
        var n = this;
        return function() {
            if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$21) {
                var t = Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().$F4("MoCASessionID");
                Microsoft.Crm.Client.Core.Framework.Trace.logInfo(164, "Correlation ID: " + t);
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$2WA(t, n.$1Gw.$1bP)
            }
        }
    },
    get_$3OM: function() {
        var n = this;
        return function() {
            var t;
            if (0) {
                var r = new Microsoft.Crm.Client.Core.Framework
                        .$NJ("https://crminsights.cloudapp.net/api/crminsightseventdata",
                            n.$$d_$nh,
                            n.$$d_$1FX,
                            n.$$d_$3CX),
                    i = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb("EndPointUrl_Missing");
                i.$t("InstallID",
                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1r4());
                t = new Array(1);
                t[0] = i;
                r.$25F("POST", "", t, 3e3)
            }
        }
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.TelemetryCore.MailApp");
Microsoft.Crm.Client.Core.Framework.TelemetryCore.MailApp.$P8 = function(n, t) {
    var i, r, u;
    Microsoft.Crm.Client.Core.Framework.TelemetryCore.MailApp.$P8
        .initializeBase(this, [null, "MailAppSettingRegarding"]);
    i = !$0.$1(n);
    this.$t("IsRegardingSet", i);
    r = i ? n : "";
    this.$t("RegardingObjectType", r);
    u = $0.$1(t) ? "" : t;
    this.$t("Description", u)
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Instrumentation");
Microsoft.Crm.Client.Core.Framework.Instrumentation.CtqDatapointStage = function() {};
Microsoft.Crm.Client.Core.Framework.Instrumentation.CtqDatapointStage
    .prototype = { none: 0, start: 1, end: 2, abort: 3 };
Microsoft.Crm.Client.Core.Framework.Instrumentation.CtqDatapointStage
    .registerEnum("Microsoft.Crm.Client.Core.Framework.Instrumentation.CtqDatapointStage", !1);
Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX = function(n, t, i) {
    this.$28 = {};
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(t, "id");
    this.$1jg = n;
    this.$1Z = t;
    this.$2Xp = i || Microsoft.Crm.Client.Core.Framework.$1h.get_$22H()
};
Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX
    .prototype = {
        $1jg: 0,
        $1Z: null,
        $2Xp: null,
        $b: function(n) { return this.$28[n] },
        $m: function(n, t) { this.$28[n] = t }
    };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Diagnostics");
OfflineDiagnostics.prototype = { SyncInProgress: !1, SyncError: null, SyncType: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Net");
Microsoft.Crm.Client.Core.Framework.Net.Uri = function(n) {
    var t, i;
    if (Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(n, "uri"), !Microsoft.Crm.Client.Core.Framework.Net.Uri.$224
        .test(n)) throw Error.format("Input string is not a valid URI: " + n);
    if (t = Microsoft.Crm.Client.Core.Framework.Net.Uri.$224.exec(n), this.$1YK = n, this.$oZ = t[1], this
        .$qn = t[2], this.$bx = t[3], this.$1v = t[4], this.$sO = t[5], !Microsoft.Crm.Client.Core.Framework.$3
        .$A(this.$qn)) {
        if (!Microsoft.Crm.Client.Core.Framework.Net.Uri.$1i3
            .test(this.$qn)) throw Error.format("Input string is not a valid URI: " + n);
        i = Microsoft.Crm.Client.Core.Framework.Net.Uri.$1i3.exec(this.$qn);
        this.$2ZD = i[1];
        this.$eu = i[2];
        this.$ud = i[3]
    }
};
Microsoft.Crm.Client.Core.Framework.Net.Uri.condense = function(n) { return $0.$1(n) ? null : n.$1YK };
Microsoft.Crm.Client.Core.Framework.Net.Uri.create = function(n) {
    return Microsoft.Crm.Client.Core.Framework.Net.Uri.parse(n)
};
Microsoft.Crm.Client.Core.Framework.Net.Uri.parse = function(n) {
    return Microsoft.Crm.Client.Core.Framework.$3.$A(n) ? null : new Microsoft.Crm.Client.Core.Framework.Net.Uri(n)
};
Microsoft.Crm.Client.Core.Framework.Net.Uri.prototype = {
    $1YK: null,
    $oZ: null,
    $qn: null,
    $bx: null,
    $1v: null,
    $sO: null,
    $2ZD: null,
    $eu: null,
    $ud: null,
    toString: function() { return this.$1YK }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Storage.ClientStore");
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.IndexedDb");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$3f = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$3f
    .prototype = {
        UnknownError: 1,
        ConstraintError: 2,
        DataError: 3,
        TransactionInactiveError: 4,
        ReadOnlyError: 5,
        VersionError: 6,
        NotFoundError: 7,
        InvalidStateError: 8,
        InvalidAccessError: 9,
        AbortError: 10,
        TimeoutError: 11,
        QuotaExceededError: 12,
        SyntaxError: 13,
        DataCloneError: 14
    };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$3f.registerEnum("Microsoft.Crm.Client.Core.Framework.IndexedDb.$3f", !1);
Microsoft.Crm.Client.Core.Framework.IndexedDb.$67 = function() {
    this.$$d_$1rC = Function.createDelegate(this, this.$1rC);
    this.$$d_$2Kf = Function.createDelegate(this, this.$2Kf);
    var n = this;
    $0.$1(n["delete"]) && (n["delete"] = this.$$d_$2Kf);
    $0.$1(n["continue"]) && (n["continue"] = this.$$d_$1rC)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$67.$WP = function(n) {
    var t = n["continue"];
    t.call(n)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$67.$DP = function(n) {
    var t = n["delete"];
    return t.call(n)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$67
    .prototype = { direction: "next", key: null, primaryKey: null, source: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NW = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$PA = function() {
    Microsoft.Crm.Client.Core.Framework.IndexedDb.$PA.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$PA.prototype = { value: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NZ = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NZ.prototype = { name: null, version: 0, objectStoreNames: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.IDBDatabaseException = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.IDBDatabaseException.prototype = { name: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ = function() {
    this.target = this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ"].T === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ"].T)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ"].T === Boolean ? !1 : null
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ.$$ = function(n) {
    var t = "$AZ$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Client.Core.Framework.IndexedDb[t]) {
        r = Microsoft.Crm.Client.Core.Framework.IndexedDb[t] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ"] = { T: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb." + t);
        u = Microsoft.Crm.Client.Core.Framework.IndexedDb.$AZ.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Client.Core.Framework.IndexedDb[t]
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Na = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.get_$1BV = function() { return window.self.IDBKeyRange };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.$3Dx = function(n) {
    return Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.get_$1BV().only(n)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.$3Ag = function(n, t) {
    return Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.get_$1BV().lowerBound(n, t)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.$3Vk = function(n, t) {
    return Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.get_$1BV().upperBound(n, t)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.$yY = function(n, t, i, r) {
    return Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.get_$1BV().bound(n, t, i, r)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.$Uu = function() {
    return Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.get_$1BV().lowerBound(-Number.MAX_VALUE, !0)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w
    .prototype = { lower: null, upper: null, lowerOpen: !1, upperOpen: !1 };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$7s = function() {
    this.$$d_$2Kf = Function.createDelegate(this, this.$2Kf);
    Microsoft.Crm.Client.Core.Framework.IndexedDb.$7s.initializeBase(this);
    var n = this;
    $0.$1(n["delete"]) && (n["delete"] = this.$$d_$2Kf)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$7s.$DP = function(n, t) {
    var i = n["delete"];
    return i.call(n, t)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$7s.prototype = { name: null, indexNames: null, keyPath: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Dk = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Dk.prototype = { readyState: 0, errorCode: 0, transaction: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NY = function() {};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NY
    .prototype = { mode: "readonly", db: null, error: null, onabort: null, oncomplete: null, onerror: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa = function() {
    this.result = this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"].TResult === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"].TResult)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"].TResult === Boolean ? !1 : null;
    this.source = this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"].TSource === Number ||
        Type.isEnum(this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"].TSource)
        ? 0
        : this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"].TSource === Boolean ? !1 : null;
    Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa.$$(this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"]
        .TSource,
        this.$$gta["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"].TResult).initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa.$$ = function(n, t) {
    var i = "$Aa$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_"), u, f, e, r;
    if (!Microsoft.Crm.Client.Core.Framework.IndexedDb[i]) {
        u = Microsoft.Crm.Client.Core.Framework.IndexedDb[i] = function() {
            var r, i;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa"] = { TSource: n, TResult: t }, r = [], i =
                    0;
                i < arguments.length;
                ++i) r[i] = arguments[i];
            Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa.apply(this, r)
        };
        u.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb." + i,
            Microsoft.Crm.Client.Core.Framework.IndexedDb.$Dk);
        f = Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa.prototype;
        for (e in f) r = { key: e, value: f[e] }, "constructor" !== r.key && (u.prototype[r.key] = r.value)
    }
    return Microsoft.Crm.Client.Core.Framework.IndexedDb[i]
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa.prototype = { onsuccess: null, onerror: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$SG = function() {
    Microsoft.Crm.Client.Core.Framework.IndexedDb.$SG.initializeBase(this)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$SG.prototype = { onupgradeneeded: null };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x = function(n, t) {
    this.unique = n;
    this.multirow = t
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x.$1l7 = new Microsoft.Crm.Client.Core.Framework.IndexedDb
            .$6x(!1, !1)
    };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x.prototype = { unique: !1, multirow: !1 };
Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$3.$A(n) && (this.keypath = n);
    this.autoIncrement = t
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A.$2qh = function() {
    return new Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A(null, !0)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A.$2ql = function() {
    return new Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A(null, !1)
};
Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A.prototype = { keypath: null, autoIncrement: !1 };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.WebSql");
Microsoft.Crm.Client.Core.Framework.WebSql.$FX = function() {};
Microsoft.Crm.Client.Core.Framework.WebSql.$FX.registerInterface("Microsoft.Crm.Client.Core.Framework.WebSql.$FX");
Microsoft.Crm.Client.Core.Framework.WebSql.$FY = function() {};
Microsoft.Crm.Client.Core.Framework.WebSql.$FY.registerInterface("Microsoft.Crm.Client.Core.Framework.WebSql.$FY");
Microsoft.Crm.Client.Core.Framework.WebSql.$FZ = function() {};
Microsoft.Crm.Client.Core.Framework.WebSql.$FZ.registerInterface("Microsoft.Crm.Client.Core.Framework.WebSql.$FZ");
Microsoft.Crm.Client.Core.Framework.WebSql.$Nu = function() {};
Microsoft.Crm.Client.Core.Framework.WebSql.$Nu.prototype = { code: 0, message: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Utils");
Microsoft.Crm.Client.Core.Framework.Utils.$FO = function() {};
Microsoft.Crm.Client.Core.Framework.Utils.$FO.registerInterface("Microsoft.Crm.Client.Core.Framework.Utils.$FO");
Microsoft.Crm.Client.Core.Framework.Utils.$6m = function() {};
Microsoft.Crm.Client.Core.Framework.Utils.$6m.$2hU = function(n, t) {
    t.val = null;
    try {
        var i = $("<div>");
        return i.html(n), t.val = i.text(), !0
    } catch (r) {
        return Microsoft.Crm.Client.Core.Framework.Trace
            .logWarning(30, "ContentConversion has failed. Html:{0}, Exception:{1}", n, r), !1
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$6m.$2hV = function(n, t) {
    var i = n;
    return i = i.replace(new RegExp("\r", "gi"), ""), i = i.replace(new RegExp("\n", "gi"), ""), i = i
        .replace(new RegExp("<BR([^>]*)>", "gi"), "\n<BR>"), i = i
        .replace(new RegExp("<DIV([^>]*)>", "gi"), "<DIV>\n"), i = i
        .replace(new RegExp("<\/P>", "gi"), "\n<\/P>"), i = i.replace(new RegExp("<\/li>", "gi"), "<\/li>\n"), i = i
        .replace(new RegExp('<a.*href="(.*?)".*>(.*?)<\/a>', "gi"), "$2 ($1)"), i = i
        .replace(new RegExp("<(?:.|\\s)*?>", "g"), ""), Microsoft.Crm.Client.Core.Framework.Utils.$6m.$2hU(i, t)
};
Microsoft.Crm.Client.Core.Framework.Utils.$Nv = function(n, t, i, r, u, f) {
    this.$1Kj = n;
    this.$1Kl = t;
    this.$1Kk = i;
    this.$1Ki = r;
    this.$A5 = u;
    this.$1ev = f
};
Microsoft.Crm.Client.Core.Framework.Utils.$Nv.prototype = {
    $1Kj: null,
    $1Kl: null,
    $1Ki: 0,
    $1Kk: 0,
    $A5: 0,
    $1ev: null
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B = function() {};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$$cctor = function() {
    if ($0.$9c(window.JSON)) {
        var n = {};
        n.stringify = Sys.Serialization.JavaScriptSerializer.serialize;
        n.parse = Sys.Serialization.JavaScriptSerializer.deserialize;
        window.JSON = n
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2rF = function(n) {
    switch (n) {
    case 0:
        return 1;
    case 2:
        return 2;
    case 7:
        return 5
    }
    return 0
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$31H = function(n) {
    var t = Microsoft.Crm.Client.Core.Framework.Net.Uri.parse(n);
    return Microsoft.Crm.Client.Core.Framework.$3.$A(t.$ud)
        ? t.$eu
        : Microsoft.Crm.Client.Core.Framework.$3.$MD("{0}:{1}", t.$eu, t.$ud)
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$Dx = function(n) {
    var t = n.split("#"), i = "", r, e, u, f;
    if (t.length > 2) throw Error.argument("Can not parse the url");
    else t.length === 2 && (i = t[1]);
    if (t = t[0].split("?"), t.length > 2) throw Error.argument("Can not parse the url");
    else t.length === 2 && (i = Microsoft.Crm.Client.Core.Framework.$3.$1S(i) ? t[1] : t[1] + "&" + i);
    if (r = {}, Microsoft.Crm.Client.Core.Framework.$3.$1S(i)) return r;
    for (e = i.split("&"), u = 0; u < e.length; u++) {
        if (f = e[u].split("="), f.length !== 2) {
            if (Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2Jt) continue;
            throw Error.argument("Can not parse the parameter string");
        }
        r[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
    }
    return r
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.isCreateFormOpenViaUrl = function() {
    var n = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$Dx(window.location.href);
    return!$0.$1(n.pagetype) && n.pagetype === "create" ? !0 : !1
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$PY = function(n, t, i) {
    if ($0.$1(n) || $0.$1(t) || $0.$1(i)) throw Error.argument("Key and Value parameters should not be null");
    return $0.$1(Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2Iq(n, t)) &&
        (n += n.indexOf("?") >= 0 ? String.format("&{0}={1}", t, i) : String.format("?{0}={1}", t, i)), n
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2Iq = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$Dx(n);
    return!$0.$1(i) && t in i ? i[t].toString() : null
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$3Su = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) return null;
    var t = null;
    try {
        t = JSON.parse(n)
    } catch (i) {
    }
    return t
};
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2xi = function(n) {
    return $0.$1(n)
        ? []
        : "String" in n
        ? $.makeArray(n.String)
        : "values" in n && n.hasOwnProperty("values") ? $.makeArray(n.values) : $.makeArray(n)
};
Microsoft.Crm.Client.Core.Framework.Utils.$6S = function() {};
Microsoft.Crm.Client.Core.Framework.Utils.$6S.$1T2 = function(n) {
    for (var i = n.$Aq(), r = "", u = null, t = 0; t < i.get_$l(); t++) u = i.get_$H(t), r += u.get_$7W().toString();
    return r
};
$4m.$Px = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) return n;
    for (var o = "", r, u, f, s, h, e, i, t = 0;
        t <
            n
            .length;
    )
        r = n
                .charCodeAt(t++), u = t < n.length ? n.charCodeAt(t++) : 0, f = t < n.length ? n.charCodeAt(t++) : 0,
            s =
                r >> 2, h = (r & 3) << 4 | u >> 4, e = (u & 15) << 2 | f >> 6, i = f & 63,
            t === n.length &&
            ($3x.$2NR(n.length, 3) === 1 ? (e = 64, i = 64) : $3x.$2NR(n.length, 3) === 2 && (i = 64)
            ),
            o += $4m.$1Ee.charAt(s) + $4m.$1Ee.charAt(h) + $4m.$1Ee.charAt(e) + $4m.$1Ee.charAt(i);
    return o
};
Microsoft.Crm.Client.Core.Framework.Utils.$8Q = function() {};
Microsoft.Crm.Client.Core.Framework.Utils.$8Q.$2GN = function() {
    var n = window.VERSION_NUMERIC_VALUE;
    return $0.$1(n) && (n = "8.0.0000.0000"), String.format("{0}.{1}.{2}.{3}",
        n.substr(0, 1),
        n.substr(1, 1),
        n.substr(2, 4),
        n.substr(6))
};
Microsoft.Crm.Client.Core.Framework.Utils.$4q = function() {};
Microsoft.Crm.Client.Core.Framework.Utils.$4q.$12w = function(n) { return typeof window.self[n] != "undefined" };
Microsoft.Crm.Client.Core.Framework.Utils.$E = function() {};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W = function(n, t) {
    if ($0.$25(n)) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(51, "ExceptionHelpers.ThrowOnNullArgument({0}, {1})", n, t);
        throw Error.argumentNull(t, "Argument can't be null");
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$55 = function(n, t) {
    if ($0.$1(n)) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(51,
            "ExceptionHelpers.ThrowOnNullOrUndefinedArgument({0}, {1})",
            n,
            t);
        throw Error.argumentNull(t, "Argument can't be null or undefined");
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$1J2 = function(n, t) {
    if ($0.$9c(n)) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(51,
            "ExceptionHelpers.ThrowOnUndefinedArgument({0}, {1})",
            n,
            t);
        throw Error.argumentNull(t, "Argument can't be undefined");
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k = function(n, t) {
    if (!n || !n.length) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(51,
            "ExceptionHelpers.ThrowOnNullOrEmptyArgument({0}, {1})",
            n,
            t);
        throw Error.argumentNull(t, "Argument can't be null or empty");
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$164 = function(n, t, i) {
    if (n === t) {
        Microsoft.Crm.Client.Core.Framework.Trace
            .logError(51, "ExceptionHelpers.ThrowOnEquals({0}, {1}, {2})", n, t, i);
        throw Error.argument(i, "Argument value should not be equal to " + t.toString());
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$1dI = function(n, t, i) {
    if (n !== t) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(51,
            "ExceptionHelpers.ThrowOnNotEquals({0}, {1}, {2})",
            n,
            t,
            i);
        throw Error.argument(i, "Argument is " + n + "but should be equal to " + t);
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$1dJ = function(n, t, i, r) {
    if (n < t || n > i) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(51,
            "ExceptionHelpers.ThrowOnOutOfRange({0}, {1}, {2}, {3})",
            n,
            t,
            i,
            r);
        throw Error.argumentOutOfRange(r);
    }
};
Microsoft.Crm.Client.Core.Framework.Utils.$E.$21K = function(n, t) {
    if (!n) {
        Microsoft.Crm.Client.Core.Framework.Trace.logError(51, "ExceptionHelpers.ThrowOnAssert({0})", t);
        throw Error.create("ExceptionHelpers.ThrowOnAssert(" + t + ")");
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Framework.Offline");
Microsoft.Crm.Client.Core.Framework.Offline.$Nx = function(n, t) {
    this.$Mv = n;
    this.$RD = $0.$1(t) ? 0 : t
};
Microsoft.Crm.Client.Core.Framework.Offline.$Nx
    .prototype = {
        $Mv: 0,
        $RD: 0,
        $1BA: 0,
        $zj: 0,
        get_SyncStatus: function() { return this.$Mv },
        set_SyncStatus: function(n) { return this.$Mv = n, n },
        get_StatusReason: function() { return this.$RD },
        set_StatusReason: function(n) { return this.$RD = n, n },
        get_EnabledEntitiesCount: function() { return this.$1BA },
        set_EnabledEntitiesCount: function(n) { return this.$1BA = n, n },
        get_DisabledEntitiesCount: function() { return this.$zj },
        set_DisabledEntitiesCount: function(n) { return this.$zj = n, n }
    };
Type.registerNamespace("Microsoft.Crm.Client.Core.Storage.Common.Xml");
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ay = function() {};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ay.registerInterface("Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ay");
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ns = function(n) {
    this.$2r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow));
    for (var t = 0; t < n.length; t++) this.$2r.add(n[t])
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ns
    .prototype = {
        $2r: null,
        get_$l: function() { return this.$2r.get_Count() },
        get_$H: function(n) { return this.$2r.get_Items()[n] }
    };
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow = function(n, t) {
    Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow.initializeBase(this);
    this.$6L = n;
    this.$LA = $0.$1(t) ? {} : t
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow.prototype = {
    $6L: null,
    $LA: null,
    get_$r: function() { return this.$6L.hasChildNodes() ? this.$6L.firstChild.nodeValue : null },
    get_$7W: function() { return(new XMLSerializer).serializeToString(this.$6L) },
    get_$2KR: function() { return"" },
    get_$Fr: function() { return this.$6L.nodeName },
    get_$C6: function() { return this.$6L },
    $1Q: function(n) { return this.$6L.getAttribute(n) },
    $3J: function(n, t) { this.$LA[n] = t },
    $O: function(n) {
        var t = this.$2UM(n, !0);
        return t.get_$l() ? t.get_$H(0) : null
    },
    $5k: function(n) { return this.$2UM(n, !1) },
    $eg: function(n) {
        var u, t, i, e, f, r;
        for (u = $0.$1(this.$6L.ownerDocument)
                ? this.$6L.getElementsByTagName(n)
                : this.$6L.ownerDocument.getElementsByTagName(n), t = [], i = 0;
            i < u.length;
            i++) Array.add(t, u[i]);
        for (e = this.$2Gn(n), Array
                .addRange(t, e), f = [], r = 0;
            r < t.length;
            r++) Array.add(f, new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow(t[r], this.$LA));
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ns(f)
    },
    $Aq: function() {
        for (var t = [], n = 0, i = this.$6L.childNodes.length;
            n < i;
            n++
        ) Array.add(t, new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow(this.$6L.childNodes[n], this.$LA));
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ns(t)
    },
    $1Tk: function() { return this.$6L.hasChildNodes() },
    $2UM: function(n, t) {
        var i = [], a, v, r, f, h, o, u, y, e, c, w, s, p, l;
        if (n.startsWith("//") || n.startsWith(".//")) {
            for (a = 2, v = !1, n.startsWith(".") && (a++, v = !0), n = n.substr(a), r = n
                    .indexOf("/"), r < 0 ? (f = n, h = null) : (f = n.substr(0, r), h = n.substr(r + 1)), r = f
                    .indexOf("["), r < 0
                    ? (o = f, u = null)
                    : (o = f.substr(0, r), u = f.substr(r + 1), r = u.indexOf("]"), u = u
                        .substr(0, r)), y = v || $0.$1(this.$6L.ownerDocument)
                    ? this.$6L.getElementsByTagName(o)
                    : this.$6L.ownerDocument.getElementsByTagName(o), e = [], c = 0;
                c < y.length;
                c++) Array.add(e, y[c]);
            w = this.$2Gn(o);
            Array.addRange(e, w);
            s = e;
            e.length > 0 && null !== u && (s = this.$1mp(e, u));
            i = s.length && null !== h ? this.$1z4(s, h, t) : s
        } else
            n.startsWith("/")
                ? ($0.$1(this.$6L
                        .ownerDocument)
                    ? Array.add(i, this.$6L)
                    : Array.add(i, this.$6L.ownerDocument), i = this.$1z4(i, n.substr(1), t))
                : (Array.add(i, this.$6L), i = this.$1z4(i, n, t));
        for (p = [], l = 0; l < i.length; l++)
            Array.add(p, new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow(i[l], this.$LA));
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ns(p)
    },
    $1z4: function(n, t, i) { return i ? this.$3O7(n, t) : this.$2UG(n, t) },
    $3O7: function(n, t) {
        var r, i, u;
        if ($0.$1(t) || t.length < 1) return n;
        for (r = [], i = 0; i < n.length; i++)
            if (u = this.$2UI(n[i], t), !$0.$1(u)) {
                Array.add(r, u);
                break
            }
        return r
    },
    $2UI: function(n, t) {
        var i, u, s, c, r, f, e, l, h, o;
        if ($0.$1(t) || t.length < 1) return n;
        for (i = t.indexOf("/"), i < 0 ? (u = t, s = null) : (u = t.substr(0, i), s = t.substr(i + 1)), i = u
                .indexOf("["), i < 0
                ? (c = u, r = null)
                : (c = u.substr(0, i), r = u.substr(i + 1), i = r.indexOf("]"), r = r
                    .substr(0, i)), f = null, e = 0, l = n
                .childNodes.length;
            e < l;
            e++)
            if (this.$1rt(n.childNodes[e], c) &&
                (h = [], Array.add(h, n.childNodes[e]), o = h, null !== r && (o = this.$1mp(h, r)), o.length > 0))
                if (null === s) {
                    f = o[0];
                    break
                } else if (f = this.$2UI(o[0], s), f) break;
        return f
    },
    $2UG: function(n, t) {
        var r, e, u, i, o, f;
        if ($0.$1(t) || t.length < 1) return n;
        for (r = t.indexOf("/"), r < 0 ? (e = t, u = null) : (e = t.substr(0, r), u = t.substr(r + 1)), i = [], f = 0;
            f < n.length;
            f++) o = this.$3O6(n[f], e), o.length > 0 && Array.addRange(i, o);
        return!i.length || null === u ? i : this.$2UG(i, u)
    },
    $3O6: function(n, t) {
        var r = t.indexOf("["), e, i, u, f, s, o;
        for (r < 0
                ? (e = t, i = null)
                : (e = t.substr(0, r), i = t.substr(r + 1), r = i.indexOf("]"), i = i
                    .substr(0, r)), u = [], f = 0, s = n
                .childNodes.length;
            f < s;
            f++) this.$1rt(n.childNodes[f], e) && Array.add(u, n.childNodes[f]);
        return o = u, u.length > 0 && null !== i && (o = this.$1mp(u, i)), o
    },
    $1mp: function(n, t) {
        var s = t.startsWith("@"), u, f, i, e, o, r;
        for (s && (t = t.substr(1)), u = t.indexOf("="), u < 0
                ? (f = t, i = null)
                : (f = t.substr(0, u), i = t.substr(u + 1), i = i.substr(1), i = i
                    .substr(0, i.length - 1)), e = [], o = 0;
            o < n.length;
            o++) r = n[o], s && this.$2py(r, f, i) ? Array.add(e, r) : this.$2pz(r, f, i) && Array.add(e, r);
        return e
    },
    $2py: function(n, t, i) { return null === i ? n.hasAttribute(t) : i === n.getAttribute(t) },
    $2pz: function(n, t, i) {
        for (var r = 0, u = n.childNodes.length;
            r < u;
            r++
        ) if (this.$1rt(n.childNodes[r], t) && (null === i || n.childNodes[r].firstChild.nodeValue === i)) return!0;
        return!1
    },
    $2Gn: function(n) {
        var r = [], u = this.$2Hl(n), f, i, t;
        if ($0.$1(u) || u.length < 1) return r;
        for (f = this.$2Hg(n), i = $0.$1(this.$6L.ownerDocument)
                ? this.$6L.getElementsByTagName(f)
                : this.$6L.ownerDocument.getElementsByTagName(f), t = 0;
            t < i.length;
            t++) i[t].namespaceURI === u && Array.add(r, i[t]);
        return r
    },
    $2Hl: function(n) {
        var t = n.indexOf(":"), i, r;
        return t < 0 ? "" : (i = n.substr(0, t), r = this.$LA[i], r)
    },
    $2Hg: function(n) {
        var t = n.indexOf(":");
        return t < 0 ? n : n.substr(t + 1)
    },
    $1rt: function(n, t) {
        var i, r;
        return n.nodeName === t || "*" === t
            ? !0
            : (i = this.$2Hl(t), $0.$1(i) || i.length < 1)
            ? !1
            : (r = this.$2Hg(t), n.namespaceURI === i && n.localName === r)
    }
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nr = function(n, t, i) {
    var r, u, e, f;
    if (this.$2r = [], r = t, $0.$1(r.length))
        for (e = t, f = 0; f < e.snapshotLength; f++)
            Array.add(this.$2r, new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox(n, e.snapshotItem(f), i));
    else
        for (u = 0; u < r.length; u++)
            Array.add(this.$2r, new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox(n, r[u], i))
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nr
    .prototype = {
        $2r: null,
        get_$l: function() { return this.$2r.length },
        get_$H: function(n) { return this.$2r[n] }
    };
Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I = function(n, t, i) {
    var r, f, c, l, v;
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I.initializeBase(this), this.$iq = n, $0.$1(t)) {
        r = n.match(Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I.$1jq);
        f = r[1];
        r = n
            .match(new
                RegExp("xmlns:([\\w]+)=[\"']http://schemas.datacontract.org/2004/07/System.Collections.Generic[\"']"));
        c = r[1];
        r = n.match(new RegExp("xmlns:([\\w]+)=[\"']http://schemas.microsoft.com/xrm/2011/Metadata[\"']"));
        l = r[1];
        r = n.match(new RegExp("xmlns:([\\w]+)=[\"']http://www.w3.org/2001/XMLSchema-instance[\"']"));
        var y = r[1],
            s = Microsoft.Crm.Client.Core.Framework.$3.$MD("<{0}:EntityMetadata>", f),
            e = Microsoft.Crm.Client.Core.Framework.$3.$MD("<\/{0}:EntityMetadata>", f),
            o = n.indexOf(s),
            h = n.lastIndexOf(e);
        if (o < 0 || h < 0 || o >= h) throw Error.argument("Not a valid RetrieveMetadataChanges response XML");
        this.$MV = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B
            .$B(Microsoft.Crm.Client.Core.Storage.Common.Xml.$B
                .$Z(n.substring(0, o) + "<placeholder/>" + n.substring(h + e.length, n.length)));
        for (var p = String
                     .format("<{0}:EntityMetadata xmlns:{0}='{1}' xmlns:{2}='{3}' xmlns:{4}='{5}' xmlns:{6}='{7}'>",
                         f,
                         "http://schemas.microsoft.com/xrm/2011/Contracts",
                         c,
                         "http://schemas.datacontract.org/2004/07/System.Collections.Generic",
                         l,
                         "http://schemas.microsoft.com/xrm/2011/Metadata",
                         y,
                         "http://www.w3.org/2001/XMLSchema-instance"),
            u = o,
            a = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V));
            u > 0;
        )
            v = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B
                .$Z(p + n.substring(u + s.length, n.indexOf(e, u) + e.length)), a
                .add(Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(v).$Aq().get_$H(0)), u = n.indexOf(s, u + 1);
        this.$Qc = a.get_Items()
    } else this.$MV = t, this.$Qc = i;
    this.$1VT = Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I.$37s(this.$MV)
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I.$37s = function(n) {
    return!$0.$1(n.get_$Fr()) &&
        (n.get_$Fr().endsWith(":value") || n.get_$Fr() === "value") &&
        n.get_$C6().namespaceURI === "http://schemas.datacontract.org/2004/07/System.Collections.Generic" &&
        n.$1Tk() &&
        n.$Aq().get_$H(0).get_$Fr() === "placeholder"
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I.prototype = {
    $MV: null,
    $Qc: null,
    $1VT: !1,
    $iq: null,
    get_$C6: function() { return this.$MV.get_$C6() },
    get_$r: function() { return this.$MV.get_$r() },
    get_$7W: function() {
        var u;
        if ($0.$1(this.$iq) && (this.$iq = this.$MV.get_$7W(), this.$iq.indexOf("<placeholder/>") >= 0)) {
            for (var f = this.$iq.match(Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I.$1jq),
                i = f[1],
                n = new Sys.StringBuilder,
                r = this.$Qc,
                e = r.length,
                t = 0;
                t < e;
                ++t)
                u = r[t], n.append(Microsoft.Crm.Client.Core.Framework.$3.$MD("<{0}:EntityMetadata>", i)), n
                    .append(u.$Aq().get_$H(0).get_$7W()), n
                    .append(Microsoft.Crm.Client.Core.Framework.$3.$MD("<\/{0}:EntityMetadata>", i));
            this.$iq = this.$iq.replace("<placeholder/>", n.toString())
        }
        return this.$iq
    },
    get_$2KR: function() { return"" },
    get_$Fr: function() { return this.$MV.get_$Fr() },
    $3J: function(n, t) {
        var u;
        this.$MV.$3J(n, t);
        for (var r = this.$Qc, f = r.length, i = 0; i < f; ++i) u = r[i], u.$3J(n, t)
    },
    $O: function(n) {
        if (n.indexOf("a:EntityMetadata") >= 0)
            throw Error.argumentOutOfRange("expression",
                n,
                "This XmlNode implementation doesn't support queries for EntityMetadata");
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I(null, this.$MV.$O(n), this.$Qc)
    },
    $5k: function(n) {
        var f, i, o, u, t;
        if (n === ".//a:KeyValuePairOfstringanyType[b:key='EntityMetadata']/b:value/a:EntityMetadata"
        ) return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq(this.$Qc);
        if (n ===
            ".//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value[@i:type='a:EntityMetadataCollection']/a:EntityMetadata/c:Attributes/c:AttributeMetadata") {
            f = n.substring(n.indexOf("a:EntityMetadata/") + 17, n.length);
            i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V));
            for (var e = this
                         .$Qc,
                s = e.length,
                r = 0;
                r < s;
                ++r) for (o = e[r], u = o.$5k(f), t = 0; t < u.get_$l(); t++) i.add(u.get_$H(t));
            return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq(i.get_Items())
        }
        if (n.indexOf("a:EntityMetadata") >= 0)
            throw Error.argumentOutOfRange("expression",
                n,
                "This XmlNode implementation doesn't support arbitrary queries for EntityMetadata");
        else return this.$MV.$5k(n)
    },
    $1Q: function(n) { return this.$MV.$1Q(n) },
    $eg: function(n) {
        for (var o,
            i,
            r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V)),
            t = this.$MV.$eg(n),
            u = 0;
            u < t.get_$l();
            u++) r.add(new Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I(null, t.get_$H(u), this.$Qc));
        for (var e = this
                     .$Qc,
            s = e.length,
            f = 0;
            f < s;
            ++f) for (o = e[f], t = o.$eg(n), i = 0; i < t.get_$l(); i++) r.add(t.get_$H(i));
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq(r.get_Items())
    },
    $Aq: function() {
        var t, i, n;
        if (this.$1VT) return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq(this.$Qc);
        for (t = this.$MV.$Aq(), i = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V)), n = 0;
            n < t.get_$l();
            n++) i.add(new Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I(null, t.get_$H(n), this.$Qc));
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq(i.get_Items())
    },
    $1Tk: function() { return this.$1VT ? this.$Qc.length > 0 : this.$MV.$1Tk() }
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq = function(n) { this.$1XM = n };
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq
    .prototype = {
        $1XM: null,
        get_$l: function() { return this.$1XM.length },
        get_$H: function(n) { return this.$1XM[n] }
    };
Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V = function() {};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V.$9G = function(n, t, i) {
    var r = n.createAttribute(t);
    return r.value = i, r
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B = function() {};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B = function(n) {
    return $0.$1(n)
        ? null
        : (Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6 === -1 &&
            Microsoft.Crm.Client.Core.Storage.Common.Xml.$B
            .$2m4(n), Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6
            ? new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow(n)
            : new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox(n))
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z = function(n) {
    var t = null, i;
    return $0.$1(t) && (t = Sys.Net.XMLDOM(n)), $0.$1(t) ||
    (i = t.getElementsByTagName("parsererror"), !$0.$1(i) &&
        i.length > 0 &&
        (Microsoft.Crm.Client.Core.Framework.Trace
            .logWarning(1006,
                "XML Parsing failure in ParseXmlDocument: {0}",
                Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(t).get_$7W()), t = null)), t
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$2m4 = function(n) {
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$2dp()) {
        var t = new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox(n);
        try {
            t.$O("/root");
            Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6 = 0
        } catch (i) {
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(1006, "XPathEvaluator doesn't work on this browser.")
        }
    }
    Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6 === -1 &&
        Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$2do() &&
        (Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6 = 1);
    Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6 === -1 &&
        Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6,
            "PreferredXmlEvaluator")
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$2dp = function() {
    var n = document.evaluate;
    return!$0.$1(n)
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$2do = function() {
    var n = window.DOMParser;
    return!$0.$1(n)
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox = function(n, t, i) {
    this.$$d_$3Ll = Function.createDelegate(this, this.$3Ll);
    Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox.initializeBase(this);
    this.$lN = n;
    this.$6L = $0.$1(t) ? n : t;
    this.$LA = $0.$1(i) ? {} : i
};
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox.prototype = {
    $LA: null,
    $lN: null,
    $6L: null,
    get_$r: function() { return this.$6L.hasChildNodes() ? this.$6L.firstChild.nodeValue : null },
    get_$2KR: function() { return this.$6L.hasChildNodes() ? $1Y.$1l5(this.$6L.innerHTML) : null },
    get_$7W: function() { return(new XMLSerializer).serializeToString(this.$6L) },
    get_$Fr: function() { return this.$6L.tagName },
    get_$C6: function() { return this.$6L },
    $3J: function(n, t) { this.$LA[n] = t },
    $O: function(n) {
        var t = this.$lN.evaluate(n, this.$6L, this.$$d_$3Ll, 9, null);
        return $0.$1(t.singleNodeValue)
            ? null
            : new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox(this.$lN, t.singleNodeValue, this.$LA)
    },
    $5k: function(n) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml
            .$Nr(this.$lN, this.$lN.evaluate(n, this.$6L, this.$$d_$3Ll, 7, null), this.$LA)
    },
    $1Q: function(n) { return this.$6L.getAttribute(n) },
    $eg: function(n) {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml
            .$Nr(this.$lN, this.$6L.getElementsByTagName(n), this.$LA)
    },
    $Aq: function() {
        return new Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nr(this.$lN, this.$6L.childNodes, this.$LA)
    },
    $1Tk: function() { return this.$6L.hasChildNodes() },
    $3Ll: function(n) { return n in this.$LA ? this.$LA[n] : null }
};
Type.registerNamespace("Xrm");
Position.prototype = { coords: null, timestamp: null };
Microsoft.Crm.Client.Core.Framework.$NP.registerClass("Microsoft.Crm.Client.Core.Framework.$NP");
Microsoft.Crm.Client.Core.Framework.$NC.registerClass("Microsoft.Crm.Client.Core.Framework.$NC");
Microsoft.Crm.Client.Core.Framework.$6A.registerClass("Microsoft.Crm.Client.Core.Framework.$6A");
Microsoft.Crm.Client.Core.Framework.$A5.registerClass("Microsoft.Crm.Client.Core.Framework.$A5");
Microsoft.Crm.Client.Core.Framework.$BI.registerClass("Microsoft.Crm.Client.Core.Framework.$BI",
    Microsoft.Crm.Client.Core.Framework.$A5,
    Microsoft.Crm.Client.Core.Framework.$He,
    Sys.IDisposable);
Microsoft.Crm.Client.Core.Framework.$3y.registerClass("Microsoft.Crm.Client.Core.Framework.$3y",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.$6o.registerClass("Microsoft.Crm.Client.Core.Framework.$6o");
Microsoft.Crm.Client.Core.Framework.CustomControlErrorStatus
    .registerClass("Microsoft.Crm.Client.Core.Framework.CustomControlErrorStatus");
Microsoft.Crm.Client.Core.Framework.$2P.registerClass("Microsoft.Crm.Client.Core.Framework.$2P");
Microsoft.Crm.Client.Core.Framework.$7C.registerClass("Microsoft.Crm.Client.Core.Framework.$7C",
    null,
    Microsoft.Crm.Client.Core.Framework.$AQ);
Microsoft.Crm.Client.Core.Framework.$2U.registerClass("Microsoft.Crm.Client.Core.Framework.$2U");
Microsoft.Crm.Client.Core.Framework.$1c.registerClass("Microsoft.Crm.Client.Core.Framework.$1c");
Microsoft.Crm.Client.Core.Framework.$NN.registerClass("Microsoft.Crm.Client.Core.Framework.$NN");
Microsoft.Crm.Client.Core.Framework.$3D.registerClass("Microsoft.Crm.Client.Core.Framework.$3D");
Microsoft.Crm.Client.Core.Framework.$NL.registerClass("Microsoft.Crm.Client.Core.Framework.$NL");
Microsoft.Crm.Client.Core.Framework.$3B.registerClass("Microsoft.Crm.Client.Core.Framework.$3B");
Microsoft.Crm.Client.Core.Framework.$NM.registerClass("Microsoft.Crm.Client.Core.Framework.$NM");
Microsoft.Crm.Client.Core.Framework.$46.registerClass("Microsoft.Crm.Client.Core.Framework.$46");
Microsoft.Crm.Client.Core.Framework.$27.registerClass("Microsoft.Crm.Client.Core.Framework.$27");
Microsoft.Crm.Client.Core.Framework.$1r.registerClass("Microsoft.Crm.Client.Core.Framework.$1r");
Microsoft.Crm.Client.Core.Framework.$6t.registerClass("Microsoft.Crm.Client.Core.Framework.$6t", null, Sys.IDisposable);
Microsoft.Crm.Client.Core.Framework.$3c.registerClass("Microsoft.Crm.Client.Core.Framework.$3c",
    Microsoft.Crm.Client.Core.Framework.$6t);
Microsoft.Crm.Client.Core.Framework.$Se.registerClass("Microsoft.Crm.Client.Core.Framework.$Se",
    Microsoft.Crm.Client.Core.Framework.$3c);
Microsoft.Crm.Client.Core.Framework.$5S.registerClass("Microsoft.Crm.Client.Core.Framework.$5S");
Microsoft.Crm.Client.Core.Framework.$4p.registerClass("Microsoft.Crm.Client.Core.Framework.$4p");
Microsoft.Crm.Client.Core.Framework.$3o.registerClass("Microsoft.Crm.Client.Core.Framework.$3o",
    null,
    Microsoft.Crm.Client.Core.Framework.$HX);
Microsoft.Crm.Client.Core.Framework.$NK.registerClass("Microsoft.Crm.Client.Core.Framework.$NK");
Microsoft.Crm.Client.Core.Framework.$BT.registerClass("Microsoft.Crm.Client.Core.Framework.$BT");
Microsoft.Crm.Client.Core.Framework.$1F.registerClass("Microsoft.Crm.Client.Core.Framework.$1F");
Microsoft.Crm.Client.Core.Framework.$4g.registerClass("Microsoft.Crm.Client.Core.Framework.$4g");
Microsoft.Crm.Client.Core.Framework.$DM.registerClass("Microsoft.Crm.Client.Core.Framework.$DM");
Microsoft.Crm.Client.Core.Framework.$NR.registerClass("Microsoft.Crm.Client.Core.Framework.$NR");
Microsoft.Crm.Client.Core.Framework.$3K.registerClass("Microsoft.Crm.Client.Core.Framework.$3K",
    null,
    Microsoft.Crm.Client.Core.Framework.$HW);
Microsoft.Crm.Client.Core.Framework.$3K.$3Zo.registerClass("Microsoft.Crm.Client.Core.Framework.$3K.$3Zo");
Microsoft.Crm.Client.Core.Framework.$7M.registerClass("Microsoft.Crm.Client.Core.Framework.$7M");
Microsoft.Crm.Client.Core.Framework.$5L.registerClass("Microsoft.Crm.Client.Core.Framework.$5L");
Microsoft.Crm.Client.Core.Framework.ErrorConverter.registerClass("Microsoft.Crm.Client.Core.Framework.ErrorConverter");
Microsoft.Crm.Client.Core.Framework.$1h.registerClass("Microsoft.Crm.Client.Core.Framework.$1h",
    null,
    Microsoft.Crm.Client.Core.Framework.$Ab);
Microsoft.Crm.Client.Core.Framework.$i.registerClass("Microsoft.Crm.Client.Core.Framework.$i",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.$2F.registerClass("Microsoft.Crm.Client.Core.Framework.$2F");
Microsoft.Crm.Client.Core.Framework.$2F.$8P.registerClass("Microsoft.Crm.Client.Core.Framework.$2F.$8P");
Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX
    .registerClass("Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX");
Microsoft.Crm.Client.Core.Framework.$Qj.registerClass("Microsoft.Crm.Client.Core.Framework.$Qj",
    Microsoft.Crm.Client.Core.Framework.Instrumentation.$NX);
Microsoft.Crm.Client.Core.Framework.TraceInfo.registerClass("Microsoft.Crm.Client.Core.Framework.TraceInfo");
Microsoft.Crm.Client.Core.Framework.$NT.registerClass("Microsoft.Crm.Client.Core.Framework.$NT");
Microsoft.Crm.Client.Core.Framework.UserAgent.registerClass("Microsoft.Crm.Client.Core.Framework.UserAgent",
    Microsoft.Crm.Client.Core.Framework.$BI,
    Microsoft.Crm.Client.Core.Framework.Utils.$FO);
Microsoft.Crm.Client.Core.Framework.$7A.registerClass("Microsoft.Crm.Client.Core.Framework.$7A");
Microsoft.Crm.Client.Core.Framework.$A9.registerClass("Microsoft.Crm.Client.Core.Framework.$A9");
Microsoft.Crm.Client.Core.Framework.$NS.registerClass("Microsoft.Crm.Client.Core.Framework.$NS");
Microsoft.Crm.Client.Core.Framework.$5s.registerClass("Microsoft.Crm.Client.Core.Framework.$5s");
Microsoft.Crm.Client.Core.Framework.$7n.registerClass("Microsoft.Crm.Client.Core.Framework.$7n");
Microsoft.Crm.Client.Core.Framework.$4G.registerClass("Microsoft.Crm.Client.Core.Framework.$4G");
Microsoft.Crm.Client.Core.Framework.$NO.registerClass("Microsoft.Crm.Client.Core.Framework.$NO");
$1Y.registerClass("$1Y");
Microsoft.Crm.Client.Core.Framework.$5J.registerClass("Microsoft.Crm.Client.Core.Framework.$5J");
Microsoft.Crm.Client.Core.Framework.$Pl.registerClass("Microsoft.Crm.Client.Core.Framework.$Pl",
    Microsoft.Crm.Client.Core.Framework.$6A);
Microsoft.Crm.Client.Core.Framework.$10.registerClass("Microsoft.Crm.Client.Core.Framework.$10");
$1W.registerClass("$1W");
Microsoft.Crm.Client.Core.Framework.$1J.registerClass("Microsoft.Crm.Client.Core.Framework.$1J");
$3x.registerClass("$3x");
Microsoft.Crm.Client.Core.Framework.$3.registerClass("Microsoft.Crm.Client.Core.Framework.$3");
$3i.registerClass("$3i");
Microsoft.Crm.Client.Core.Framework.$D1.registerClass("Microsoft.Crm.Client.Core.Framework.$D1");
$0.registerClass("$0");
Microsoft.Crm.Client.Core.Framework.$7b.registerClass("Microsoft.Crm.Client.Core.Framework.$7b",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.$5V.registerClass("Microsoft.Crm.Client.Core.Framework.$5V",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.$NQ.registerClass("Microsoft.Crm.Client.Core.Framework.$NQ");
Microsoft.Crm.Client.Core.Framework.$9A.registerClass("Microsoft.Crm.Client.Core.Framework.$9A",
    Microsoft.Crm.Client.Core.Framework.$BI,
    Microsoft.Crm.Client.Core.Framework.$Dv,
    Microsoft.Crm.Client.Core.Framework.$E2);
Microsoft.Crm.Client.Core.Framework.Trace.registerClass("Microsoft.Crm.Client.Core.Framework.Trace");
Microsoft.Crm.Client.Core.Framework.$5w.registerClass("Microsoft.Crm.Client.Core.Framework.$5w");
Microsoft.Crm.Client.Core.Framework.$N7.registerClass("Microsoft.Crm.Client.Core.Framework.$N7");
Microsoft.Crm.Client.Core.Framework.$5k.registerClass("Microsoft.Crm.Client.Core.Framework.$5k",
    Microsoft.Crm.Client.Core.Framework.$5L);
Microsoft.Crm.Client.Core.Framework.$1o.registerClass("Microsoft.Crm.Client.Core.Framework.$1o");
Microsoft.Crm.Client.Core.Framework.$6.registerClass("Microsoft.Crm.Client.Core.Framework.$6");
Microsoft.Crm.Client.Core.Framework.$a.registerClass("Microsoft.Crm.Client.Core.Framework.$a");
Microsoft.Crm.Client.Core.Framework.$24.registerClass("Microsoft.Crm.Client.Core.Framework.$24");
Microsoft.Crm.Client.Core.Framework.$6j.registerClass("Microsoft.Crm.Client.Core.Framework.$6j");
Microsoft.Crm.Client.Core.Framework.$15.registerClass("Microsoft.Crm.Client.Core.Framework.$15",
    Microsoft.Crm.Client.Core.Framework.$6j);
Microsoft.Crm.Client.Core.Framework.$4c.registerClass("Microsoft.Crm.Client.Core.Framework.$4c",
    Microsoft.Crm.Client.Core.Framework.$6j);
Microsoft.Crm.Client.Core.Framework.$9N.registerClass("Microsoft.Crm.Client.Core.Framework.$9N",
    Microsoft.Crm.Client.Core.Framework.$6j);
Microsoft.Crm.Client.Core.Framework.$EW.registerClass("Microsoft.Crm.Client.Core.Framework.$EW");
Microsoft.Crm.Client.Core.Framework.$h.registerClass("Microsoft.Crm.Client.Core.Framework.$h");
Microsoft.Crm.Client.Core.Framework.$RX.registerClass("Microsoft.Crm.Client.Core.Framework.$RX", Sys.EventArgs);
Microsoft.Crm.Client.Core.Framework.Binding.$3Z
    .registerClass("Microsoft.Crm.Client.Core.Framework.Binding.$3Z",
        Microsoft.Crm.Client.Core.Framework.$BI,
        Microsoft.Crm.Client.Core.Framework.Binding.$HR);
Microsoft.Crm.Client.Core.Framework.$T1.registerClass("Microsoft.Crm.Client.Core.Framework.$T1",
    Microsoft.Crm.Client.Core.Framework.Binding.$3Z);
Microsoft.Crm.Client.Core.Framework.CommandManager
    .registerClass("Microsoft.Crm.Client.Core.Framework.CommandManager", Microsoft.Crm.Client.Core.Framework.$DM);
Microsoft.Crm.Client.Core.Framework.PerformanceMarker
    .registerClass("Microsoft.Crm.Client.Core.Framework.PerformanceMarker");
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch
    .registerClass("Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch");
Microsoft.Crm.Client.Core.Framework.$N9.registerClass("Microsoft.Crm.Client.Core.Framework.$N9");
Microsoft.Crm.Client.Core.Framework.$N8.registerClass("Microsoft.Crm.Client.Core.Framework.$N8");
Microsoft.Crm.Client.Core.Framework.$N4.registerClass("Microsoft.Crm.Client.Core.Framework.$N4");
Microsoft.Crm.Client.Core.Framework.$81.registerClass("Microsoft.Crm.Client.Core.Framework.$81",
    Microsoft.Crm.Client.Core.Framework.$N4);
Microsoft.Crm.Client.Core.Framework.$NB.registerClass("Microsoft.Crm.Client.Core.Framework.$NB");
Microsoft.Crm.Client.Core.Framework.$4K.registerClass("Microsoft.Crm.Client.Core.Framework.$4K",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$4L.registerClass("Microsoft.Crm.Client.Core.Framework.$4L",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$5B.registerClass("Microsoft.Crm.Client.Core.Framework.$5B",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$4M.registerClass("Microsoft.Crm.Client.Core.Framework.$4M",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$4N.registerClass("Microsoft.Crm.Client.Core.Framework.$4N",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$2w.registerClass("Microsoft.Crm.Client.Core.Framework.$2w",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$2x.registerClass("Microsoft.Crm.Client.Core.Framework.$2x",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$3r.registerClass("Microsoft.Crm.Client.Core.Framework.$3r",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$4O.registerClass("Microsoft.Crm.Client.Core.Framework.$4O",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$5C.registerClass("Microsoft.Crm.Client.Core.Framework.$5C",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$4P.registerClass("Microsoft.Crm.Client.Core.Framework.$4P",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$5D.registerClass("Microsoft.Crm.Client.Core.Framework.$5D",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$3s.registerClass("Microsoft.Crm.Client.Core.Framework.$3s",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$4Q.registerClass("Microsoft.Crm.Client.Core.Framework.$4Q",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$5E.registerClass("Microsoft.Crm.Client.Core.Framework.$5E",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$3t.registerClass("Microsoft.Crm.Client.Core.Framework.$3t",
    Microsoft.Crm.Client.Core.Framework.$NB);
Microsoft.Crm.Client.Core.Framework.$OI.registerClass("Microsoft.Crm.Client.Core.Framework.$OI",
    Microsoft.Crm.Client.Core.Framework.$N4);
Microsoft.Crm.Client.Core.Framework.$NA.registerClass("Microsoft.Crm.Client.Core.Framework.$NA");
Microsoft.Crm.Client.Core.Framework.Scheduler.registerClass("Microsoft.Crm.Client.Core.Framework.Scheduler");
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
    .registerClass("Microsoft.Crm.Client.Core.Framework.SchedulerPriorities");
Microsoft.Crm.Client.Core.Framework.$N6.registerClass("Microsoft.Crm.Client.Core.Framework.$N6");
Microsoft.Crm.Client.Core.Framework.$N5.registerClass("Microsoft.Crm.Client.Core.Framework.$N5");
Microsoft.Crm.Client.Core.Framework.$1C.registerClass("Microsoft.Crm.Client.Core.Framework.$1C");
Microsoft.Crm.Client.Core.Framework.$N3.registerClass("Microsoft.Crm.Client.Core.Framework.$N3");
Microsoft.Crm.Client.Core.Framework.$1t.registerClass("Microsoft.Crm.Client.Core.Framework.$1t");
Microsoft.Crm.Client.Core.Framework.$5z.registerClass("Microsoft.Crm.Client.Core.Framework.$5z");
Microsoft.Crm.Client.Core.Framework.$7o.registerClass("Microsoft.Crm.Client.Core.Framework.$7o");
Microsoft.Crm.Client.Core.Framework.$D7.registerClass("Microsoft.Crm.Client.Core.Framework.$D7");
Microsoft.Crm.Client.Core.Framework.$2z.registerClass("Microsoft.Crm.Client.Core.Framework.$2z");
Microsoft.Crm.Client.Core.Framework.$BJ.registerClass("Microsoft.Crm.Client.Core.Framework.$BJ");
Microsoft.Crm.Client.Core.Framework.$2Z.registerClass("Microsoft.Crm.Client.Core.Framework.$2Z");
Microsoft.Crm.Client.Core.Framework.$CB.registerClass("Microsoft.Crm.Client.Core.Framework.$CB",
    null,
    Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.$1b.registerClass("Microsoft.Crm.Client.Core.Framework.$1b",
    null,
    Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.$45.registerClass("Microsoft.Crm.Client.Core.Framework.$45");
Microsoft.Crm.Client.Core.Framework.$4a.registerClass("Microsoft.Crm.Client.Core.Framework.$4a");
Microsoft.Crm.Client.Core.Framework.$CD.registerClass("Microsoft.Crm.Client.Core.Framework.$CD",
    null,
    Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.$8W.registerClass("Microsoft.Crm.Client.Core.Framework.$8W",
    null,
    Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.$1D.registerClass("Microsoft.Crm.Client.Core.Framework.$1D");
Microsoft.Crm.Client.Core.Framework.$4.registerClass("Microsoft.Crm.Client.Core.Framework.$4",
    null,
    Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.$OE.registerClass("Microsoft.Crm.Client.Core.Framework.$OE",
    Microsoft.Crm.Client.Core.Framework.$4);
Microsoft.Crm.Client.Core.Framework.Guid.registerClass("Microsoft.Crm.Client.Core.Framework.Guid",
    null,
    Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.$NJ.registerClass("Microsoft.Crm.Client.Core.Framework.$NJ");
Microsoft.Crm.Client.Core.Framework.$C.registerClass("Microsoft.Crm.Client.Core.Framework.$C");
Microsoft.Crm.Client.Core.Framework.$SX.registerClass("Microsoft.Crm.Client.Core.Framework.$SX",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.$6v.registerClass("Microsoft.Crm.Client.Core.Framework.$6v",
    null,
    Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Framework.$m.registerClass("Microsoft.Crm.Client.Core.Framework.$m");
Microsoft.Crm.Client.Core.Framework.$1u.registerClass("Microsoft.Crm.Client.Core.Framework.$1u");
Microsoft.Crm.Client.Core.Framework.AuthenticationManager
    .registerClass("Microsoft.Crm.Client.Core.Framework.AuthenticationManager",
        Microsoft.Crm.Client.Core.Framework.$BI,
        Microsoft.Crm.Client.Core.Framework.$HS);
Microsoft.Crm.Client.Core.Framework.$O8.registerClass("Microsoft.Crm.Client.Core.Framework.$O8", Sys.EventArgs);
Microsoft.Crm.Client.Core.Framework.$By.registerClass("Microsoft.Crm.Client.Core.Framework.$By");
Microsoft.Crm.Client.Core.Framework.$OA.registerClass("Microsoft.Crm.Client.Core.Framework.$OA",
    Microsoft.Crm.Client.Core.Framework.$By);
Microsoft.Crm.Client.Core.Framework.$FI.registerClass("Microsoft.Crm.Client.Core.Framework.$FI");
Microsoft.Crm.Client.Core.Framework.$OF.registerClass("Microsoft.Crm.Client.Core.Framework.$OF",
    Microsoft.Crm.Client.Core.Framework.$By);
Microsoft.Crm.Client.Core.Framework.Binding.$TM
    .registerClass("Microsoft.Crm.Client.Core.Framework.Binding.$TM", Microsoft.Crm.Client.Core.Framework.Binding.$3Z);
Microsoft.Crm.Client.Core.Framework.Common.$O4
    .registerClass("Microsoft.Crm.Client.Core.Framework.Common.$O4", Microsoft.Crm.Client.Core.Framework.$6t);
Microsoft.Crm.Client.Core.Framework.Common.$2.registerClass("Microsoft.Crm.Client.Core.Framework.Common.$2");
Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord
    .registerClass("Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord");
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37
    .registerClass("Microsoft.Crm.Client.Core.Framework.ClientWatson.$37",
        null,
        Microsoft.Crm.Client.Core.Framework.ClientWatson.$AT);
Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn
    .registerClass("Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn",
        Microsoft.Crm.Client.Core.Framework.ClientWatson.$37);
Microsoft.Crm.Client.Core.Framework.ClientWatson.$CV
    .registerClass("Microsoft.Crm.Client.Core.Framework.ClientWatson.$CV");
Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e
    .registerClass("Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e");
Microsoft.Crm.Client.Core.Framework.LocalStorage.$ND
    .registerClass("Microsoft.Crm.Client.Core.Framework.LocalStorage.$ND",
        null,
        Microsoft.Crm.Client.Core.Framework.LocalStorage.$HN);
Microsoft.Crm.Client.Core.Framework.LocalStorage.$P4
    .registerClass("Microsoft.Crm.Client.Core.Framework.LocalStorage.$P4",
        Microsoft.Crm.Client.Core.Framework.LocalStorage.$ND);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$NG.registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$NG");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$ET
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$ET", Microsoft.Crm.Client.Core.Framework.$3y);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$Tz
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$Tz",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$ET);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UF
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$UF",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$Tz);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UG
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$UG",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$Tz);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$UH
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$UH",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$Tz);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B", Microsoft.Crm.Client.Core.Framework.$A5);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$FK
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$FK",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$NE.registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$NE");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6E.registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$6E");
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$U5
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$U5",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$ET);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$U5);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d");
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge",
        Microsoft.Crm.Client.Core.Framework.$BI,
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hn,
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hk);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$U4
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Core.$U4",
        Microsoft.Crm.Client.Core.Framework.PAL.Core
        .$ET);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NI
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NI");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH", Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4", Microsoft.Crm.Client.Core.Framework.$A5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aH
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aH",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aI
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aI",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aJ
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ta.$3aJ",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$PE
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$PE", Microsoft.Crm.Client.Core.Framework.$A5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$3aG
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$3aG",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v", Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L", Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T2
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T2",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f", Microsoft.Crm.Client.Core.Framework.$A5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T8
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T8",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$8f
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$8f", Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r", Microsoft.Crm.Client.Core.Framework.$A5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N", Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3aX
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3aX",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F", Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GE);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$hu
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$hu",
        null,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$GB);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i", Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H", Microsoft.Crm.Client.Core.Framework.$A5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Fs);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aL
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aL",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aM
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aM",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aK
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$3aK",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TG
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TG",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aO
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aO",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aN
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$3aN",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R",
        Microsoft.Crm.Client.Core.Framework.$BI,
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hm,
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$Hv);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH.$3aF
    .registerClass("Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$SH.$3aF",
        Microsoft.Crm.Client.Core.Framework.$A5);
Microsoft.Crm.Client.Core.Framework.Storage.$NF.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$NF");
Microsoft.Crm.Client.Core.Framework.Storage.$4E.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$4E");
Microsoft.Crm.Client.Core.Framework.Storage.$Ng.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Ng");
Microsoft.Crm.Client.Core.Framework.Storage.$4R.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$4R");
Microsoft.Crm.Client.Core.Framework.Storage.$Az.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Az");
Microsoft.Crm.Client.Core.Framework.Storage.$Nj.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nj");
Microsoft.Crm.Client.Core.Framework.Storage.$82
    .registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$82", Microsoft.Crm.Client.Core.Framework.Storage.$Nj);
Microsoft.Crm.Client.Core.Framework.Storage.$94
    .registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$94", Microsoft.Crm.Client.Core.Framework.Storage.$Nj);
Microsoft.Crm.Client.Core.Framework.Storage.$95
    .registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$95", Microsoft.Crm.Client.Core.Framework.Storage.$Nj);
Microsoft.Crm.Client.Core.Framework.Storage.$Nh.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nh");
Microsoft.Crm.Client.Core.Framework.Storage.$Nd.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nd");
Microsoft.Crm.Client.Core.Framework.Storage.$Nc.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nc");
Microsoft.Crm.Client.Core.Framework.Storage.$Nf.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nf");
Microsoft.Crm.Client.Core.Framework.Storage.$Ne.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Ne");
Microsoft.Crm.Client.Core.Framework.Storage.$Nn.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nn");
Microsoft.Crm.Client.Core.Framework.Storage.$Nm.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nm");
Microsoft.Crm.Client.Core.Framework.Storage.$RY
    .registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$RY", Microsoft.Crm.Client.Core.Framework.$6t);
Microsoft.Crm.Client.Core.Framework.Storage.$Np.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Np");
Microsoft.Crm.Client.Core.Framework.Storage.$No.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$No");
Microsoft.Crm.Client.Core.Framework.Storage.$Ni.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Ni");
Microsoft.Crm.Client.Core.Framework.Storage.$Nl.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nl");
Microsoft.Crm.Client.Core.Framework.Storage.$Ra
    .registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Ra", Sys.EventArgs);
Microsoft.Crm.Client.Core.Framework.WebSql.$Nu.registerClass("Microsoft.Crm.Client.Core.Framework.WebSql.$Nu");
Microsoft.Crm.Client.Core.Framework.Storage.$Rc
    .registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Rc", Microsoft.Crm.Client.Core.Framework.WebSql.$Nu);
Microsoft.Crm.Client.Core.Framework.Storage.$Nk.registerClass("Microsoft.Crm.Client.Core.Framework.Storage.$Nk");
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Nb
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Nb");
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U");
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$Rb",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.ClientActivityEvent
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.ClientActivityEvent",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RP
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RP",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RQ
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RQ",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SI
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SI",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SK
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SK",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SL
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SL",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SM
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SM",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SJ
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$SJ",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RW
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RW",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RT
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RT",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RU
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RU",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O6
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O6",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$OB
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$OB",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O7
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$O7",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P3
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P3",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P5
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P5",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P0
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P0",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P1
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P1",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P6
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P6",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$PD
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.$PD", Sys.EventArgs);
Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter");
Microsoft.Crm.Client.Core.Framework.TelemetryCore.MailApp.$P8
    .registerClass("Microsoft.Crm.Client.Core.Framework.TelemetryCore.MailApp.$P8",
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U);
OfflineDiagnostics.registerClass("OfflineDiagnostics");
Microsoft.Crm.Client.Core.Framework.Net.Uri.registerClass("Microsoft.Crm.Client.Core.Framework.Net.Uri");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$67.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$67");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NW.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$NW");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$PA
    .registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$PA",
        Microsoft.Crm.Client.Core.Framework.IndexedDb.$67);
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NZ.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$NZ");
Microsoft.Crm.Client.Core.Framework.IndexedDb.IDBDatabaseException
    .registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.IDBDatabaseException");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Na.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$Na");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$1w");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$7s
    .registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$7s",
        Microsoft.Crm.Client.Core.Framework.IndexedDb.$NW);
Microsoft.Crm.Client.Core.Framework.IndexedDb.$Dk.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$Dk");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$NY.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$NY");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$SG
    .registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$SG",
        Microsoft.Crm.Client.Core.Framework.IndexedDb.$Aa
        .$$(Object, Microsoft.Crm.Client.Core.Framework.IndexedDb.$NZ));
Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x");
Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A.registerClass("Microsoft.Crm.Client.Core.Framework.IndexedDb.$8A");
Microsoft.Crm.Client.Core.Framework.Utils.$6m.registerClass("Microsoft.Crm.Client.Core.Framework.Utils.$6m");
Microsoft.Crm.Client.Core.Framework.Utils.$Nv.registerClass("Microsoft.Crm.Client.Core.Framework.Utils.$Nv");
Microsoft.Crm.Client.Core.Framework.Utils.$1B.registerClass("Microsoft.Crm.Client.Core.Framework.Utils.$1B");
Microsoft.Crm.Client.Core.Framework.Utils.$6S.registerClass("Microsoft.Crm.Client.Core.Framework.Utils.$6S");
$4m.registerClass("$4m");
Microsoft.Crm.Client.Core.Framework.Utils.$8Q.registerClass("Microsoft.Crm.Client.Core.Framework.Utils.$8Q");
Microsoft.Crm.Client.Core.Framework.Utils.$4q.registerClass("Microsoft.Crm.Client.Core.Framework.Utils.$4q");
Microsoft.Crm.Client.Core.Framework.Utils.$E.registerClass("Microsoft.Crm.Client.Core.Framework.Utils.$E");
Microsoft.Crm.Client.Core.Framework.Offline.$Nx.registerClass("Microsoft.Crm.Client.Core.Framework.Offline.$Nx");
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ns
    .registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ns",
        null,
        Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ay);
Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V.registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$1V");
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow
    .registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ow",
        Microsoft.Crm.Client.Core.Storage.Common.Xml
        .$1V);
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nr
    .registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nr",
        null,
        Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ay);
Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I
    .registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I",
        Microsoft.Crm.Client.Core.Storage.Common.Xml
        .$1V);
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq
    .registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$Nq",
        null,
        Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ay);
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$B");
Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox
    .registerClass("Microsoft.Crm.Client.Core.Storage.Common.Xml.$Ox",
        Microsoft.Crm.Client.Core.Storage.Common.Xml
        .$1V);
Position.registerClass("Position");
Microsoft.Crm.Client.Core.Framework.$6A.$1Pk = new Microsoft.Crm.Client.Core.Framework.$6A;
Microsoft.Crm.Client.Core.Framework.$3y.$20X = new Microsoft.Crm.Client.Core.Framework
    .$D1("State", Microsoft.Crm.Client.Core.Framework.$CZ, Microsoft.Crm.Client.Core.Framework.$3y, 0);
Microsoft.Crm.Client.Core.Framework.$3y.$Ql = 0;
Microsoft.Crm.Client.Core.Framework.$7C.$Ql = 0;
Microsoft.Crm.Client.Core.Framework.$2U.$Ps = null;
Microsoft.Crm.Client.Core.Framework.$1c.$12d = 0;
Microsoft.Crm.Client.Core.Framework.$1c.$16B = !1;
Microsoft.Crm.Client.Core.Framework.$1c.$1QH = {};
Microsoft.Crm.Client.Core.Framework.$1c.$1Bm = !1;
Microsoft.Crm.Client.Core.Framework.$3D.$1xy = {
    xmlhttprequest: "XMLHttpRequest",
    script: "AssetLoad.Script",
    link: "AssetLoad.Stylesheet",
    css: "AssetLoad.CssUrl",
    img: "AssetLoad.Image"
};
Microsoft.Crm.Client.Core.Framework.$3B.$D = null;
Microsoft.Crm.Client.Core.Framework.$46.$1Zj = null;
Microsoft.Crm.Client.Core.Framework.$46.$$cctor();
Microsoft.Crm.Client.Core.Framework.$27.$1q9 = null;
Microsoft.Crm.Client.Core.Framework.$27.$1TN = null;
Microsoft.Crm.Client.Core.Framework.$27.$b9 = null;
Microsoft.Crm.Client.Core.Framework.$1r.$1dU = !1;
Microsoft.Crm.Client.Core.Framework.$1r.$1dV = !1;
Microsoft.Crm.Client.Core.Framework.$3c.$1Mu = null;
Microsoft.Crm.Client.Core.Framework.$5S.$2Ak = "[­-؀-؄܏឴឵‌-‏\u2028- ⁠-⁯ ￰-￿]";
Microsoft.Crm.Client.Core.Framework.$4p.$24J = {
    "default": "default",
    "am-et": "am-ET",
    "ar-ae": "ar-AE",
    "ar-bh": "ar-BH",
    "ar-dz": "ar-DZ",
    "ar-eg": "ar-EG",
    "ar-iq": "ar-IQ",
    "ar-jo": "ar-JO",
    "ar-kw": "ar-KW",
    "ar-lb": "ar-LB",
    "ar-ly": "ar-LY",
    "ar-ma": "ar-MA",
    "ar-om": "ar-OM",
    "ar-qa": "ar-QA",
    "ar-sa": "ar-SA",
    "ar-sy": "ar-SY",
    "ar-tn": "ar-TN",
    "ar-ye": "ar-YE",
    "bg-bg": "bg-BG",
    "bn-bd": "bn-BD",
    "bn-in": "bn-IN",
    "ca-es": "ca-ES",
    "cs-cz": "cs-CZ",
    "cy-gb": "cy-GB",
    "da-dk": "da-DK",
    "de-at": "de-AT",
    "de-ch": "de-CH",
    "de-de": "de-DE",
    "de-li": "de-LI",
    "de-lu": "de-LU",
    "el-gr": "el-GR",
    "en-029": "en-029",
    "en-au": "en-AU",
    "en-bz": "en-BZ",
    "en-ca": "en-CA",
    "en-gb": "en-GB",
    "en-ie": "en-IE",
    "en-in": "en-IN",
    "en-jm": "en-JM",
    "en-my": "en-MY",
    "en-nz": "en-NZ",
    "en-ph": "en-PH",
    "en-sg": "en-SG",
    "en-tt": "en-TT",
    "en-us": "en-US",
    "en-za": "en-ZA",
    "en-zw": "en-ZW",
    "es-ar": "es-AR",
    "es-bo": "es-BO",
    "es-cl": "es-CL",
    "es-co": "es-CO",
    "es-cr": "es-CR",
    "es-do": "es-DO",
    "es-ec": "es-EC",
    "es-es": "es-ES",
    "es-gt": "es-GT",
    "es-hn": "es-HN",
    "es-mx": "es-MX",
    "es-ni": "es-NI",
    "es-pa": "es-PA",
    "es-pe": "es-PE",
    "es-pr": "es-PR",
    "es-py": "es-PY",
    "es-sv": "es-SV",
    "es-us": "es-US",
    "es-uy": "es-UY",
    "es-ve": "es-VE",
    "et-ee": "et-EE",
    "eu-es": "eu-ES",
    "fa-ir": "fa-IR",
    "fi-fi": "fi-FI",
    "fil-ph": "fil-PH",
    "fr-be": "fr-BE",
    "fr-ca": "fr-CA",
    "fr-ch": "fr-CH",
    "fr-fr": "fr-FR",
    "fr-lu": "fr-LU",
    "fr-mc": "fr-MC",
    "gl-es": "gl-ES",
    "gu-in": "gu-IN",
    "he-il": "he-IL",
    "hi-in": "hi-IN",
    "hr-ba": "hr-BA",
    "hr-hr": "hr-HR",
    "hu-hu": "hu-HU",
    "id-id": "id-ID",
    "is-is": "is-IS",
    "it-ch": "it-CH",
    "it-it": "it-IT",
    "ja-jp": "ja-JP",
    "kk-kz": "kk-KZ",
    "kn-in": "kn-IN",
    "ko-kr": "ko-KR",
    "lt-lt": "lt-LT",
    "lv-lv": "lv-LV",
    "ml-in": "ml-IN",
    "mr-in": "mr-IN",
    "ms-bn": "ms-BN",
    "ms-my": "ms-MY",
    "nb-no": "nb-NO",
    "nl-be": "nl-BE",
    "nl-nl": "nl-NL",
    "or-in": "or-IN",
    "pl-pl": "pl-PL",
    "pt-br": "pt-BR",
    "pt-pt": "pt-PT",
    "ro-ro": "ro-RO",
    "ru-ru": "ru-RU",
    "sk-sk": "sk-SK",
    "sl-si": "sl-SI",
    "sr-cyrl-ba": "sr-Cyrl-BA",
    "sr-cyrl-cs": "sr-Cyrl-CS",
    "sr-cyrl-me": "sr-Cyrl-ME",
    "sr-cyrl-rs": "sr-Cyrl-RS",
    "sr-latn-rs": "sr-Latn-RS",
    "sv-fi": "sv-FI",
    "sv-se": "sv-SE",
    "sw-ke": "sw-KE",
    "ta-in": "ta-IN",
    "te-in": "te-IN",
    "th-th": "th-TH",
    "tr-tr": "tr-TR",
    "uk-ua": "uk-UA",
    "ur-pk": "ur-PK",
    "vi-vn": "vi-VN",
    "zh-cn": "zh-CN",
    "zh-hk": "zh-HK",
    "zh-mo": "zh-MO",
    "zh-sg": "zh-SG",
    "zh-tw": "zh-TW"
};
Microsoft.Crm.Client.Core.Framework.$4p.$3T1 = {
    "default": !0,
    en: !0,
    "am-ET": !0,
    "bg-BG": !0,
    "bn-IN": !0,
    "ca-ES": !0,
    "cz-CZ": !0,
    "cy-GB": !0,
    "da-DK": !0,
    "de-DE": !0,
    "el-GR": !0,
    "en-029": !0,
    "en-AU": !0,
    "en-BZ": !0,
    "en-CA": !0,
    "en-GB": !0,
    "en-IE": !0,
    "en-IN": !0,
    "en-JM": !0,
    "en-MY": !0,
    "en-NZ": !0,
    "en-PH": !0,
    "en-SG": !0,
    "en-TT": !0,
    "en-US": !0,
    "en-ZA": !0,
    "en-ZW": !0,
    "es-ES": !0,
    "es-MX": !0,
    "et-EE": !0,
    "eu-ES": !0,
    "fi-FI": !0,
    "fil-PH": !0,
    "fr-BE": !0,
    "fr-CA": !0,
    "fr-CH": !0,
    "fr-FR": !0,
    "fr-LU": !0,
    "fr-MC": !0,
    "gl-ES": !0,
    "gu-IN": !0,
    "hi-IN": !0,
    "hr-HR": !0,
    "hu-HU": !0,
    "id-ID": !0,
    "is-IS": !0,
    "it-IT": !0,
    "kk-KZ": !0,
    "kn-IN": !0,
    "lt-LT": !0,
    "lv-LV": !0,
    "ml-IN": !0,
    "ms-MY": !0,
    "nb-NO": !0,
    "nl-NL": !0,
    "or-IN": !0,
    "pl-PL": !0,
    "pt-BR": !0,
    "pt-PT": !0,
    "ro-RO": !0,
    "ru-RU": !0,
    "sk-SK": !0,
    "sl-SI": !0,
    "sr-Cyrl-CS": !0,
    "sr-Latn-CS": !0,
    "sv-SE": !0,
    "sw-KE": !0,
    "ta-IN": !0,
    "te-IN": !0,
    "th-TH": !0,
    "tr-TR": !0,
    "uk-UA": !0,
    "vi-VN": !0
};
Microsoft.Crm.Client.Core.Framework.$4p.$3T3 = { "ar-SA": !0, "fa-IR": !0, "he-IL": !0, "ur-PK": !0 };
Microsoft.Crm.Client.Core.Framework.$4p.$3T2 = {
    "ja-JP": !0,
    "ko-KR": !0,
    "mr-IN": !0,
    "zh-CN": !0,
    "zh-HK": !0,
    "zh-TW": !0
};
Microsoft.Crm.Client.Core.Framework.$4p.$3SZ = { "ja-JP": !0, "ko-KR": !0, "tr-TR": !0 };
Microsoft.Crm.Client.Core.Framework.$3o.$D = null;
Microsoft.Crm.Client.Core.Framework.$1F.$NW = new(Microsoft.Crm.Client.Core.Framework.$9b
    .$$(Microsoft.Crm.Client.Core.Framework.$Qj))(100);
Microsoft.Crm.Client.Core.Framework.$1F.$1EV = !1;
Microsoft.Crm.Client.Core.Framework.$1F.$2Xw = {};
Microsoft.Crm.Client.Core.Framework.$1F.$2Xx = {};
Microsoft.Crm.Client.Core.Framework.$1F.$2Xy = {};
Microsoft.Crm.Client.Core.Framework.$1F.$2Xz = {};
Microsoft.Crm.Client.Core.Framework.$1F.$dg = 0;
Microsoft.Crm.Client.Core.Framework.$4g.$29E = {};
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1ls = "errorMessage";
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1lv = "errorType";
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1lu = "errorString";
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1lq = "errorCause";
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1BN = "name";
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1Qe = "message";
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1m3 = "exceptionString";
Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1m2 = "innerException";
Microsoft.Crm.Client.Core.Framework.$1h.$Zg = new Microsoft.Crm.Client.Core.Framework.$1h(-271821, 3, 20);
Microsoft.Crm.Client.Core.Framework.$1h.$Za = new Microsoft.Crm.Client.Core.Framework.$1h(275760, 8, 13);
Microsoft.Crm.Client.Core.Framework.$i.$2m9 = new Microsoft.Crm.Client.Core.Framework
    .$D1("DeviceName", String, Microsoft.Crm.Client.Core.Framework.$i, "");
Microsoft.Crm.Client.Core.Framework.$i.$29s = new Microsoft.Crm.Client.Core.Framework
    .$D1("DeviceManufacturer", String, Microsoft.Crm.Client.Core.Framework.$i, "");
Microsoft.Crm.Client.Core.Framework.$i.$29v = new Microsoft.Crm.Client.Core.Framework
    .$D1("DeviceModel", String, Microsoft.Crm.Client.Core.Framework.$i, "");
Microsoft.Crm.Client.Core.Framework.$i.$29u = new Microsoft.Crm.Client.Core.Framework
    .$D1("DeviceMemoryRestricted", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$29t = new Microsoft.Crm.Client.Core.Framework
    .$D1("DeviceMaxBatchSize", Number, Microsoft.Crm.Client.Core.Framework.$i, 25);
Microsoft.Crm.Client.Core.Framework.$i.$2Ad = new Microsoft.Crm.Client.Core.Framework
    .$D1("EntityMetadataSyncBatchSize", Number, Microsoft.Crm.Client.Core.Framework.$i, 3);
Microsoft.Crm.Client.Core.Framework.$i.$24U = new Microsoft.Crm.Client.Core.Framework
    .$D1("ApplicationMetadataSyncBatchSize", Number, Microsoft.Crm.Client.Core.Framework.$i, 4194304);
Microsoft.Crm.Client.Core.Framework.$i.$3O2 = new Microsoft.Crm.Client.Core.Framework
    .$D1("ScreenHeight", Number, Microsoft.Crm.Client.Core.Framework.$i, -1);
Microsoft.Crm.Client.Core.Framework.$i.$3O4 = new Microsoft.Crm.Client.Core.Framework
    .$D1("ScreenWidth", Number, Microsoft.Crm.Client.Core.Framework.$i, -1);
Microsoft.Crm.Client.Core.Framework.$i.$2B1 = new Microsoft.Crm.Client.Core.Framework
    .$D1("ExternalWindowScrollAmount", Number, Microsoft.Crm.Client.Core.Framework.$i, 0);
Microsoft.Crm.Client.Core.Framework.$i.$2XQ = new Microsoft.Crm.Client.Core.Framework
    .$D1("SupportsExternalWindowScrollAmount", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$1si = new Microsoft.Crm.Client.Core.Framework
    .$D1("KeyboardVisible", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$2MB = new Microsoft.Crm.Client.Core.Framework
    .$D1("KeyboardHeight", Number, Microsoft.Crm.Client.Core.Framework.$i, 0);
Microsoft.Crm.Client.Core.Framework.$i.$24Q = new Microsoft.Crm.Client.Core.Framework
    .$D1("AppBarVisible", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$29Z = new Microsoft.Crm.Client.Core.Framework
    .$D1("DelayedPanoramaRenderingEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$2m7 = new Microsoft.Crm.Client.Core.Framework
    .$D1("DeviceLayout", String, Microsoft.Crm.Client.Core.Framework.$i, "wide");
Microsoft.Crm.Client.Core.Framework.$i.$2AJ = new Microsoft.Crm.Client.Core.Framework
    .$D1("DuplicateDetectionEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !0);
Microsoft.Crm.Client.Core.Framework.$i.$3Te = new Microsoft.Crm.Client.Core.Framework
    .$D1("TimeZone", String, Microsoft.Crm.Client.Core.Framework.$i, "");
Microsoft.Crm.Client.Core.Framework.$i.$3O3 = new Microsoft.Crm.Client.Core.Framework
    .$D1("ScreenOrientation", Microsoft.Crm.Client.Core.Framework.$D3, Microsoft.Crm.Client.Core.Framework.$i, 0);
Microsoft.Crm.Client.Core.Framework.$i.$2Q3 = new Microsoft.Crm.Client.Core.Framework
    .$D1("PaneScrollIndicatorEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$3H0 = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordPresent", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gz = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordLength", Number, Microsoft.Crm.Client.Core.Framework.$i, -1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gy = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordIsSimple", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !0);
Microsoft.Crm.Client.Core.Framework.$i.$3Gu = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordHasNumber", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gs = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordHasLetter", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gw = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordHasUpperCase", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gt = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordHasLowerCase", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gv = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordHasSpecialCharacter", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gx = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordHistory", Number, Microsoft.Crm.Client.Core.Framework.$i, -1);
Microsoft.Crm.Client.Core.Framework.$i.$3Gr = new Microsoft.Crm.Client.Core.Framework
    .$D1("PasswordExpirationTime", Number, Microsoft.Crm.Client.Core.Framework.$i, -1);
Microsoft.Crm.Client.Core.Framework.$i.$3Au = new Microsoft.Crm.Client.Core.Framework
    .$D1("MaxFailedAttempts", Number, Microsoft.Crm.Client.Core.Framework.$i, -1);
Microsoft.Crm.Client.Core.Framework.$i.$3Av = new Microsoft.Crm.Client.Core.Framework
    .$D1("MaxInactivityTime", Number, Microsoft.Crm.Client.Core.Framework.$i, -1);
Microsoft.Crm.Client.Core.Framework.$i.$1jf = new Microsoft.Crm.Client.Core.Framework
    .$D1("ConnectionAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !0);
Microsoft.Crm.Client.Core.Framework.$i.$2D0 = new Microsoft.Crm.Client.Core.Framework
    .$D1("FormFactor", String, Microsoft.Crm.Client.Core.Framework.$i, "slate");
Microsoft.Crm.Client.Core.Framework.$i.$1ic = new Microsoft.Crm.Client.Core.Framework
    .$D1("CameraAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$2NJ = new Microsoft.Crm.Client.Core.Framework
    .$D1("MicrophoneAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$2DX = new Microsoft.Crm.Client.Core.Framework
    .$D1("GeolocationAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$i.$29r = new Microsoft.Crm.Client.Core.Framework
    .$D1("DeviceFeatureAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.$i, !1);
Microsoft.Crm.Client.Core.Framework.$2F.$D = null;
Microsoft.Crm.Client.Core.Framework.UserAgent.$D = null;
Microsoft.Crm.Client.Core.Framework.$4G.$1z2 = {};
Microsoft.Crm.Client.Core.Framework.$4G.$2U9 = new Microsoft.Crm.Client.Core.Framework.$7n;
Microsoft.Crm.Client.Core.Framework.$NO.$$cctor();
$1Y.$24M = new RegExp("&", "g");
$1Y.$ZQ = new RegExp("<", "g");
$1Y.$Z0 = new RegExp(">", "g");
$1Y.$24P = new RegExp("'", "g");
$1Y.$2RK = new RegExp('"', "g");
$1Y.$2AS = new RegExp("&amp;", "g");
$1Y.$2AV = new RegExp("&lt;", "g");
$1Y.$2AU = new RegExp("&gt;", "g");
$1Y.$2AT = new RegExp("&apos;", "g");
$1Y.$2AW = new RegExp("&quot;", "g");
Microsoft.Crm.Client.Core.Framework.$10.$3Sl = new Microsoft.Crm.Client.Core.Framework.$Se("startedEvent");
Microsoft.Crm.Client.Core.Framework.$10.$8F = !1;
Microsoft.Crm.Client.Core.Framework.$10.$2a4 = new Microsoft.Crm.Client.Core.Framework.$7C;
Microsoft.Crm.Client.Core.Framework.$10.$1kz = new Microsoft.Crm.Client.Core.Framework.$5J;
Microsoft.Crm.Client.Core.Framework.$10.$19M = null;
Microsoft.Crm.Client.Core.Framework.$10.$24O = !1;
Microsoft.Crm.Client.Core.Framework.$3.$1XJ = new RegExp("[\n\r]+");
Microsoft.Crm.Client.Core.Framework.$7b.$2ZY = 0;
Microsoft.Crm.Client.Core.Framework.$5V.$3Ua = Microsoft.Crm.Client.Core.Framework.$5V.$2D8(1);
Microsoft.Crm.Client.Core.Framework.$5V.$2lh = Microsoft.Crm.Client.Core.Framework.$5V.$2D8(2);
Microsoft.Crm.Client.Core.Framework.$5V.$3C6 = new Array(0);
Microsoft.Crm.Client.Core.Framework.Trace.$LY = 2;
Microsoft.Crm.Client.Core.Framework.Trace.$HM = !0;
Microsoft.Crm.Client.Core.Framework.Trace.$1iD = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1iA = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1iC = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1NU = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1i9 = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1iB = null;
Microsoft.Crm.Client.Core.Framework.Trace.$SA = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1iE = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1i5 = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1i4 = null;
Microsoft.Crm.Client.Core.Framework.Trace.$1i8 = null;
Microsoft.Crm.Client.Core.Framework.Trace.$p8 = null;
Microsoft.Crm.Client.Core.Framework.Trace.$rV = 0;
Microsoft.Crm.Client.Core.Framework.Trace.$rU = 0;
Microsoft.Crm.Client.Core.Framework.Trace.$dO = null;
Microsoft.Crm.Client.Core.Framework.Trace.$kg = null;
Microsoft.Crm.Client.Core.Framework.Trace.$zQ = null;
Microsoft.Crm.Client.Core.Framework.Trace.$zJ = null;
Microsoft.Crm.Client.Core.Framework.Trace.$zK = null;
Microsoft.Crm.Client.Core.Framework.Trace.$zL = null;
Microsoft.Crm.Client.Core.Framework.Trace.$zM = null;
Microsoft.Crm.Client.Core.Framework.Trace.$zN = null;
Microsoft.Crm.Client.Core.Framework.Trace.$zO = null;
Microsoft.Crm.Client.Core.Framework.Trace.$74 = null;
Microsoft.Crm.Client.Core.Framework.Trace.$dK = null;
Microsoft.Crm.Client.Core.Framework.Trace.$yU = null;
Microsoft.Crm.Client.Core.Framework.Trace.$142 = null;
Microsoft.Crm.Client.Core.Framework.Trace.$ua = !1;
Microsoft.Crm.Client.Core.Framework.Trace.$140 = 0;
Microsoft.Crm.Client.Core.Framework.Trace.$$cctor();
Microsoft.Crm.Client.Core.Framework.$1o.$fc = {};
Microsoft.Crm.Client.Core.Framework.$1o.$Wk = {};
Microsoft.Crm.Client.Core.Framework.$1o.$rE = null;
this.$w = !1;
Microsoft.Crm.Client.Core.Framework.$a.$6f = Microsoft.Crm.Client.Core.Framework.$a.$Uq(0);
Microsoft.Crm.Client.Core.Framework.$a.$12v = Microsoft.Crm.Client.Core.Framework.$a.$Uq(1);
Microsoft.Crm.Client.Core.Framework.$a.$DH = Microsoft.Crm.Client.Core.Framework.$a.$Uq(2);
Microsoft.Crm.Client.Core.Framework.$a.$2M = Microsoft.Crm.Client.Core.Framework.$a.$Uq(3);
Microsoft.Crm.Client.Core.Framework.$a.$CS = Microsoft.Crm.Client.Core.Framework.$a.$Uq(4);
Microsoft.Crm.Client.Core.Framework.$a.$1Z = Microsoft.Crm.Client.Core.Framework.$a.$Uq(5);
Microsoft.Crm.Client.Core.Framework.$a.$5f = Microsoft.Crm.Client.Core.Framework.$a.$Uq(6);
Microsoft.Crm.Client.Core.Framework.$a.$1l = Microsoft.Crm.Client.Core.Framework.$a.$Uq(7);
Microsoft.Crm.Client.Core.Framework.$a.$29W = Microsoft.Crm.Client.Core.Framework.$a.$Uq(9);
Microsoft.Crm.Client.Core.Framework.$a.$24H = Microsoft.Crm.Client.Core.Framework.$a.$Uq(8);
Microsoft.Crm.Client.Core.Framework.$a.$1jO = Microsoft.Crm.Client.Core.Framework.$a.$Uq(10);
Microsoft.Crm.Client.Core.Framework.$24.$1Y8 = null;
Microsoft.Crm.Client.Core.Framework.$24.$1ZY = null;
Microsoft.Crm.Client.Core.Framework.$4c.$D = null;
Microsoft.Crm.Client.Core.Framework.$h.$D = null;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$Ql = 1e5;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Wl = 0;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1F2 = 3e3;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$2N7 = 50;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$HM = !1;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1V3 = !1;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Ut = !1;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Uu = !1;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$tq = {};
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$12a = 0;
Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$c5 = null;
this.$UY = !1;
this.$1Ko = null;
Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch.$2RS = 1.5;
Microsoft.Crm.Client.Core.Framework.$4K.$D = null;
Microsoft.Crm.Client.Core.Framework.$4L.$D = null;
Microsoft.Crm.Client.Core.Framework.$5B.$D = null;
Microsoft.Crm.Client.Core.Framework.$4M.$D = null;
Microsoft.Crm.Client.Core.Framework.$4N.$D = null;
Microsoft.Crm.Client.Core.Framework.$2w.$D = null;
Microsoft.Crm.Client.Core.Framework.$2x.$D = null;
Microsoft.Crm.Client.Core.Framework.$3r.$D = null;
Microsoft.Crm.Client.Core.Framework.$4O.$D = null;
Microsoft.Crm.Client.Core.Framework.$5C.$D = null;
Microsoft.Crm.Client.Core.Framework.$4P.$D = null;
Microsoft.Crm.Client.Core.Framework.$5D.$D = null;
Microsoft.Crm.Client.Core.Framework.$3s.$D = null;
Microsoft.Crm.Client.Core.Framework.$4Q.$D = null;
Microsoft.Crm.Client.Core.Framework.$5E.$D = null;
Microsoft.Crm.Client.Core.Framework.$3t.$D = null;
Microsoft.Crm.Client.Core.Framework.Scheduler.$I2 = !1;
Microsoft.Crm.Client.Core.Framework.Scheduler.$14D = !1;
Microsoft.Crm.Client.Core.Framework.Scheduler.$Wm = -16;
Microsoft.Crm.Client.Core.Framework.Scheduler.$U2 = null;
Microsoft.Crm.Client.Core.Framework.Scheduler.$ez = !1;
Microsoft.Crm.Client.Core.Framework.Scheduler.$gp = null;
Microsoft.Crm.Client.Core.Framework.Scheduler.$2Iz = 0;
Microsoft.Crm.Client.Core.Framework.Scheduler.$2Iy = 0;
Microsoft.Crm.Client.Core.Framework.Scheduler.$1yz = 0;
Microsoft.Crm.Client.Core.Framework.Scheduler.$1m6 = 0;
Microsoft.Crm.Client.Core.Framework.Scheduler.$Dm = -15;
Microsoft.Crm.Client.Core.Framework.Scheduler.$uC = null;
Microsoft.Crm.Client.Core.Framework.Scheduler.$Nx = null;
Microsoft.Crm.Client.Core.Framework.Scheduler.$1dy = !1;
Microsoft.Crm.Client.Core.Framework.Scheduler.$mv = !1;
Microsoft.Crm.Client.Core.Framework.Scheduler.$1YZ = -16;
Microsoft.Crm.Client.Core.Framework.Scheduler.$1G2 = -1;
Microsoft.Crm.Client.Core.Framework.Scheduler.$1sp = -1;
Microsoft.Crm.Client.Core.Framework.Scheduler.$MO = 0;
Microsoft.Crm.Client.Core.Framework.Scheduler.$qe = !0;
Microsoft.Crm.Client.Core.Framework.Scheduler.$13y = null;
Microsoft.Crm.Client.Core.Framework.Scheduler.$$cctor();
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$rb = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1ps = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$2K8 = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$hB = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yJ = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$oS = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yG = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$14l = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1ac = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yH = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yM = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yY = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yZ = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1ya = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yd = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1Yl = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1di = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y1 = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y3 = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1O9 = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y6 = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$14o = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1HI = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yj = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y2 = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y7 = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yU = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yD = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yE = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1aU = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yh = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yR = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1pD = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yf = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yg = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$22a = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1Pa = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$SY = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1JT = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$2Rw = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1WZ = -2;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.reactUpdates = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.scheduledReactUpdate = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1Hb = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.customScriptsContainer = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.customScriptsContainerDispose = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1kq = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$2MM = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1jT = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$tD = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1Df = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$2Zc = -12;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$16M = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.selectionExpandAppBar = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1qr = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.ConductorItemTransitionOut = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.ConductorItemTransitionIn = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.ConductorItemLazyCreation = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.ConductorItemLazyDestruction = 0;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1GT = -13;
Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$$cctor();
Microsoft.Crm.Client.Core.Framework.$1C.$D = null;
Microsoft.Crm.Client.Core.Framework.$1t.$1wW = 400;
Microsoft.Crm.Client.Core.Framework.$1t.$2Qk = 5e3;
Microsoft.Crm.Client.Core.Framework.$1t.$2MC = 400;
Microsoft.Crm.Client.Core.Framework.$2Z.$1G3 = "Pending Log messages...";
Microsoft.Crm.Client.Core.Framework.$2Z.$2Mt = "\nLogging level : {0}, Message : {1}";
Microsoft.Crm.Client.Core.Framework.$2Z.$16B = !1;
Microsoft.Crm.Client.Core.Framework.$45.$1x1 = null;
Microsoft.Crm.Client.Core.Framework.$45.$1ZT = null;
Microsoft.Crm.Client.Core.Framework.$45.$$cctor();
Microsoft.Crm.Client.Core.Framework.$1D.$19L = undefined;
Microsoft.Crm.Client.Core.Framework.$1D.$mh = undefined;
Microsoft.Crm.Client.Core.Framework.$1D.$1lX = undefined;
Microsoft.Crm.Client.Core.Framework.$1D.$Cy = undefined;
Microsoft.Crm.Client.Core.Framework.$1D.$2O0 = undefined;
Microsoft.Crm.Client.Core.Framework.Guid.$rs = null;
Microsoft.Crm.Client.Core.Framework.Guid.$1qC = null;
Microsoft.Crm.Client.Core.Framework.Guid.$1qZ = null;
Microsoft.Crm.Client.Core.Framework.Guid.$1iM = null;
Microsoft.Crm.Client.Core.Framework.Guid.$1jn = null;
Microsoft.Crm.Client.Core.Framework.$m.$29P = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
Microsoft.Crm.Client.Core.Framework.$m.$29Q = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$1NR = new Microsoft.Crm.Client.Core.Framework
    .$D1("AuthToken", String, Microsoft.Crm.Client.Core.Framework.AuthenticationManager, "", null, null);
Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D = null;
Microsoft.Crm.Client.Core.Framework.Binding.$3Z.$1Mt = null;
Microsoft.Crm.Client.Core.Framework.Common.$2.$Cx = {};
Microsoft.Crm.Client.Core.Framework.Common.$2.$2LB = !0;
Microsoft.Crm.Client.Core.Framework.Common.$2.$$cctor();
Microsoft.Crm.Client.Core.Framework.ClientWatson.$37.$1OT = null;
Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.$1Mc = null;
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D.$1kx = new Microsoft.Crm.Client.Core.Framework
    .$D1("dataFiles", Microsoft.Crm.Client.Core.Framework.$9A, Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D.$$cctor();
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h.$2TS = new Microsoft.Crm.Client.Core.Framework
    .$D1("returnValue", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h, null);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6E.$1YS = 4;
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M.$2Aq = new Microsoft.Crm.Client.Core.Framework
    .$D1("errorInformation", Error, Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M, null);
Microsoft.Crm.Client.Core.Framework.PAL.Core.$5a.$1ZI = {};
Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1Ax = "dispatcherCallId";
Microsoft.Crm.Client.Core.Framework.PAL.Core.$3d.$1c1 = "ShimPerfDataPlaceHolder";
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.$D = null;
Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.$$cctor();
Microsoft.Crm.Client.Core.Framework.PAL.Core.$6B.$Ql = 0;
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$gM = new Microsoft.Crm.Client.Core.Framework
    .$D1("onSuccess",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$1FY = new Microsoft.Crm.Client.Core.Framework
    .$D1("onFailure",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$2Uj = new Microsoft.Crm.Client.Core.Framework
    .$D1("serviceName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$18a = new Microsoft.Crm.Client.Core.Framework
    .$D1("actionName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4.$197 = new Microsoft.Crm.Client.Core.Framework
    .$D1("args", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD.$vC = new Microsoft.Crm.Client.Core.Framework
    .$D1("result", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaDispatcher.$uD);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td.$lL = new Microsoft.Crm.Client.Core
    .Framework.$D1("errorCode",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$ED,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td.$2Ai = new Microsoft.Crm.Client.Core
    .Framework.$D1("errorMessage",
        String,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.CordovaMediaDispatcher.$Td);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("value", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4.$2Ol = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetRecipients",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13L,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1D4);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("value", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs.$2Ok = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetInitialSenderData",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13K,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cs);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J.$2Gx = new Microsoft.Crm.Client.Core.Framework
    .$D1("entities", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm.$2Gw = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetEntities",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13J,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cm);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H.$27U = new Microsoft.Crm.Client.Core.Framework
    .$D1("ContextRetrieveResult", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv.$2LZ = new Microsoft.Crm.Client.Core.Framework
    .$D1("IsRetry", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv.$2Oi = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetEmailItem",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13H,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yv);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$1ds = new Microsoft.Crm.Client.Core.Framework
    .$D1("Updates", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$27O = new Microsoft.Crm.Client.Core.Framework
    .$D1("ConflictResolutionType", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$2PR = new Microsoft.Crm.Client.Core.Framework
    .$D1("onSetCrmEmailProperties",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga.$2M4 = new Microsoft.Crm.Client.Core.Framework
    .$D1("ItemType", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Ga);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa.$lO = new Microsoft.Crm.Client.Core.Framework
    .$D1("ExchangeResponse", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa.$Sg = new Microsoft.Crm.Client.Core.Framework
    .$D1("Error", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wa);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj.$2Og = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetEmailCustomProperties",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cj);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX.$1aF = new Microsoft.Crm.Client.Core.Framework
    .$D1("Response", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX.$Sg = new Microsoft.Crm.Client.Core.Framework
    .$D1("Error", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WX);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5.$1ds = new Microsoft.Crm.Client.Core.Framework
    .$D1("CustomPropertiesToUpdate",
        Microsoft.Crm.Client.Core.Framework.$7M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5.$2Pc = new Microsoft.Crm.Client.Core.Framework
    .$D1("onUpdateEmailCustomProperties",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$b5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc.$1aF = new Microsoft.Crm.Client.Core.Framework
    .$D1("Response", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc.$Sg = new Microsoft.Crm.Client.Core.Framework
    .$D1("Error", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wc);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB.$2XI = new Microsoft.Crm.Client.Core.Framework
    .$D1("str", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB.$2Oq = new Microsoft.Crm.Client.Core.Framework
    .$D1("onInsertToStartOfBodyAsync",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ZB);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P.$lO = new Microsoft.Crm.Client.Core.Framework
    .$D1("ExchangeResponse", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13P);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae.$2XJ = new Microsoft.Crm.Client.Core.Framework
    .$D1("subject", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae.$2PS = new Microsoft.Crm.Client.Core.Framework
    .$D1("onSetEmailSubject",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$ae);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y.$lO = new Microsoft.Crm.Client.Core.Framework
    .$D1("ExchangeResponse", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Y);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I.$2Gu = new Microsoft.Crm.Client.Core.Framework
    .$D1("GetEmailSubjectResult", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl.$2Oj = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetEmailSubject",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13I,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Cl);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq.$24u = new Microsoft.Crm.Client.Core.Framework
    .$D1("attachmentURL", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq.$24s = new Microsoft.Crm.Client.Core.Framework
    .$D1("attachmentName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq.$23n = new Microsoft.Crm.Client.Core.Framework
    .$D1("onAddFileAttachmentAsync",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Lq);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132.$lO = new Microsoft.Crm.Client.Core.Framework
    .$D1("ExchangeResponse", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$132);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$2QV = new Microsoft.Crm.Client.Core.Framework
    .$D1("pixelUrl", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$2ML = new Microsoft.Crm.Client.Core.Framework
    .$D1("linkPairs",
        Microsoft.Crm.Client.Core.Framework.$7M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$zE = new Microsoft.Crm.Client.Core.Framework
    .$D1("crmId", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc.$2PU = new Microsoft.Crm.Client.Core.Framework
    .$D1("onSetTrackingInfo",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Gc);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb.$vC = new Microsoft.Crm.Client.Core.Framework
    .$D1("result", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb.$Sg = new Microsoft.Crm.Client.Core.Framework
    .$D1("error", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Wb);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q.$2Lf = new Microsoft.Crm.Client.Core.Framework
    .$D1("IsSentFolder", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES.$2Or = new Microsoft.Crm.Client.Core.Framework
    .$D1("onIsSentFolder",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13Q,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1ES);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F.$2Gp = new Microsoft.Crm.Client.Core.Framework
    .$D1("GetEmailAddressResult", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci.$2Of = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetEmailAddress",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13F,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ci);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G.$2Gq = new Microsoft.Crm.Client.Core.Framework
    .$D1("GetEmailDetailsResult", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck.$2Oh = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetEmailDetails",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13G,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1Ck);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D.$2GJ = new Microsoft.Crm.Client.Core.Framework
    .$D1("GetAttachmentDetailsResult", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW.$2Oc = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetAttachmentDetails",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13D,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$1CW);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E.$2Gh = new Microsoft.Crm.Client.Core.Framework
    .$D1("GetDeliverPromoteDetailsResult", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu.$2Wo = new Microsoft.Crm.Client.Core.Framework
    .$D1("SoapRequestBody", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu.$2Oe = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetDeliverPromoteDetails",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$13E,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yu);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw.$zE = new Microsoft.Crm.Client.Core.Framework
    .$D1("crmId", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw.$2Gs = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetEmailLinks",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$Yw);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY.$2AO = new Microsoft.Crm.Client.Core.Framework
    .$D1("emailLinks", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY.$Sg = new Microsoft.Crm.Client.Core.Framework
    .$D1("error", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WY);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM.$zE = new Microsoft.Crm.Client.Core.Framework
    .$D1("crmId", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM.$2SQ = new Microsoft.Crm.Client.Core.Framework
    .$D1("onRemoveTrackingInfo",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$aM);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ.$1aG = new Microsoft.Crm.Client.Core.Framework
    .$D1("result", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ.$2Sk = new Microsoft.Crm.Client.Core.Framework
    .$D1("error", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WZ);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g.$2OK = new Microsoft.Crm.Client.Core.Framework
    .$D1("onCheckMetadataChanged",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$19g);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT.$1aG = new Microsoft.Crm.Client.Core.Framework
    .$D1("result", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT.$Sg = new Microsoft.Crm.Client.Core.Framework
    .$D1("error", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tb.$WT);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.$1qY = new Microsoft.Crm.Client.Core.Framework
    .$D1("HostName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.$2Jl = new Microsoft.Crm.Client.Core.Framework
    .$D1("HostVersion", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v.$2Q1 = new Microsoft.Crm.Client.Core.Framework
    .$D1("OWAView", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3v, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU.$2NH = new Microsoft.Crm.Client.Core.Framework
    .$D1("message", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU.$2MJ = new Microsoft.Crm.Client.Core.Framework
    .$D1("level", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZU);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW.$2NZ = new Microsoft.Crm.Client.Core.Framework
    .$D1("namespace", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW.$29H = new Microsoft.Crm.Client.Core.Framework
    .$D1("data", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$ZW);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu.$2Xh = new Microsoft.Crm.Client.Core.Framework
    .$D1("telemetryData", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TY.$1Eu);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ.$25L = new Microsoft.Crm.Client.Core.Framework
    .$D1("behavior", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Tf.$1JQ);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$19d = new Microsoft.Crm.Client.Core.Framework
    .$D1("CanGoBack", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2A0 = new Microsoft.Crm.Client.Core.Framework
    .$D1("DialogPresent", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2Qb = new Microsoft.Crm.Client.Core.Framework
    .$D1("PopupPresent", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2RI = new Microsoft.Crm.Client.Core.Framework
    .$D1("QuickCreateFormPresent", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2Xf = new Microsoft.Crm.Client.Core.Framework
    .$D1("TaskBasedFlowFormPresent", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2Wl = new Microsoft.Crm.Client.Core.Framework
    .$D1("SiteMapVisible", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2J2 = new Microsoft.Crm.Client.Core.Framework
    .$D1("GlobalMenuVisible", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L.$2RP = new Microsoft.Crm.Client.Core.Framework
    .$D1("ReactFieldPopover", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2L, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c.$16T = new Microsoft.Crm.Client.Core.Framework
    .$D1("valueName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("value", Microsoft.Crm.Client.Core.Framework.$7M, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$11T = new Microsoft.Crm.Client.Core.Framework
    .$D1("ID", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$2NY = new Microsoft.Crm.Client.Core.Framework
    .$D1("Name", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$24e = new Microsoft.Crm.Client.Core.Framework
    .$D1("Args", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1YQ = new Microsoft.Crm.Client.Core.Framework
    .$D1("PageX", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1YR = new Microsoft.Crm.Client.Core.Framework
    .$D1("PageY", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1Tr = new Microsoft.Crm.Client.Core.Framework
    .$D1("Height", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$1eK = new Microsoft.Crm.Client.Core.Framework
    .$D1("Width", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$254 = new Microsoft.Crm.Client.Core.Framework
    .$D1("BackgroundColor",
        Microsoft.Crm.Client.Core.Framework.$7M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l.$2OT = new Microsoft.Crm.Client.Core.Framework
    .$D1("onCreateSecondaryTile",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$6l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV.$2Kw = new Microsoft.Crm.Client.Core.Framework
    .$D1("IsCreated", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV.$1Ne = new Microsoft.Crm.Client.Core.Framework
    .$D1("BrandingName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$WV);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$11T = new Microsoft.Crm.Client.Core.Framework
    .$D1("ID", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Ww = new Microsoft.Crm.Client.Core.Framework
    .$D1("SquareTemplate", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Wx = new Microsoft.Crm.Client.Core.Framework
    .$D1("SquareText", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Zi = new Microsoft.Crm.Client.Core.Framework
    .$D1("WideTemplate", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Zj = new Microsoft.Crm.Client.Core.Framework
    .$D1("WideText", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$2Ju = new Microsoft.Crm.Client.Core.Framework
    .$D1("Image", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S.$1Ne = new Microsoft.Crm.Client.Core.Framework
    .$D1("BrandingName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$9S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$11T = new Microsoft.Crm.Client.Core.Framework
    .$D1("ID", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$2OW = new Microsoft.Crm.Client.Core.Framework
    .$D1("onDeleteSecondaryTile",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1YQ = new Microsoft.Crm.Client.Core.Framework
    .$D1("PageX", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1YR = new Microsoft.Crm.Client.Core.Framework
    .$D1("PageY", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1Tr = new Microsoft.Crm.Client.Core.Framework
    .$D1("Height", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au.$1eK = new Microsoft.Crm.Client.Core.Framework
    .$D1("Width", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$Au);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139.$2Kz = new Microsoft.Crm.Client.Core.Framework
    .$D1("IsDeleted", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$139);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9.$2Om = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetSecondaryTiles",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$1D9);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M.$2Xo = new Microsoft.Crm.Client.Core.Framework
    .$D1("Tiles", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$13M);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l.$2Jr = new Microsoft.Crm.Client.Core.Framework
    .$D1("IDs", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Td.$19l);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f.$22P = new Microsoft.Crm.Client.Core.Framework
    .$D1("Version", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H.$26m = new Microsoft.Crm.Client.Core.Framework
    .$D1("clientState",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7f,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7H);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$8f.$2c2 = new Microsoft.Crm.Client.Core.Framework
    .$D1("AddressbookObserverType",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$Ca,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$8f,
        0);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$296 = new Microsoft.Crm.Client.Core.Framework
    .$D1("crop", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$12e = new Microsoft.Crm.Client.Core.Framework
    .$D1("maxUploadFileSize", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$2Od = new Microsoft.Crm.Client.Core.Framework
    .$D1("onGetDataSuccess",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M.$1Xf = new Microsoft.Crm.Client.Core.Framework
    .$D1("onError",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$3M);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms.$29G = new Microsoft.Crm.Client.Core.Framework
    .$D1("dataFile",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms.$gM = new Microsoft.Crm.Client.Core.Framework
    .$D1("onSuccessCallback",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms.$1Xe = new Microsoft.Crm.Client.Core.Framework
    .$D1("onErrorCallback",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$Ms);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x.$rY = new Microsoft.Crm.Client.Core.Framework
    .$D1("dataID", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14x);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w.$lL = new Microsoft.Crm.Client.Core.Framework
    .$D1("errorCode",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$3Ng,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TE.$14w);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r.$3AK = new Microsoft.Crm.Client.Core.Framework
    .$D1("LocalStorageState", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r, null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r.$37l = new Microsoft.Crm.Client.Core.Framework
    .$D1("IsLocalStorageAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6r, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt.$26z = new Microsoft.Crm.Client.Core.Framework
    .$D1("commandBarJson", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt.$2ON = new Microsoft.Crm.Client.Core.Framework
    .$D1("onCommandBarButtonClicked",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt.$2OO = new Microsoft.Crm.Client.Core.Framework
    .$D1("onCommandBarError",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$Mt);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135.$270 = new Microsoft.Crm.Client.Core.Framework
    .$D1("commandDescriptor", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$135);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5.$2N4 = new Microsoft.Crm.Client.Core.Framework
    .$D1("mastheadJson", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TC.$1I5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$rY = new Microsoft.Crm.Client.Core.Framework
    .$D1("dataID", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$2CF = new Microsoft.Crm.Client.Core.Framework
    .$D1("fileName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$1F8 = new Microsoft.Crm.Client.Core.Framework
    .$D1("mimeType", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ.$2P9 = new Microsoft.Crm.Client.Core.Framework
    .$D1("onOpenDocumentComplete",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$GQ);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U.$lL = new Microsoft.Crm.Client.Core.Framework
    .$D1("errorCode",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$EZ,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$13U);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("url", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TD.$1Fi);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N.$2JW = new Microsoft.Crm.Client.Core.Framework
    .$D1("HasMapsUrlProtocolSupport", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$7N, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$2WR = new Microsoft.Crm.Client.Core.Framework
    .$D1("shouldPickMultipleFiles", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$2CD = new Microsoft.Crm.Client.Core.Framework
    .$D1("fileFilter", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$2QQ = new Microsoft.Crm.Client.Core.Framework
    .$D1("pickerLocation",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$3HF,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$12e = new Microsoft.Crm.Client.Core.Framework
    .$D1("maxUploadFileSize", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$gM = new Microsoft.Crm.Client.Core.Framework
    .$D1("onSuccessCallback",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6D,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5.$1Xe = new Microsoft.Crm.Client.Core.Framework
    .$D1("onErrorCallback",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$B5);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g.$lL = new Microsoft.Crm.Client.Core.Framework
    .$D1("errorCode",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$Br,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$13g);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$2SY = new Microsoft.Crm.Client.Core.Framework
    .$D1("requestType", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$2Z6 = new Microsoft.Crm.Client.Core.Framework
    .$D1("uriPath", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$12e = new Microsoft.Crm.Client.Core.Framework
    .$D1("maxUploadFileSize", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$2Oy = new Microsoft.Crm.Client.Core.Framework
    .$D1("onMediaGetSuccess",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$AK,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD.$1Xf = new Microsoft.Crm.Client.Core.Framework
    .$D1("onError",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$T5.$DD);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F.$1jf = new Microsoft.Crm.Client.Core.Framework
    .$D1("ConnectionAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F, !0);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F.$2hB = new Microsoft.Crm.Client.Core.Framework
    .$D1("ConnectionIsWifi", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F.$2Jg = new Microsoft.Crm.Client.Core.Framework
    .$D1("HasUrlProtocolSupport", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5F, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$Ql = 0;
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9.$2XB = new Microsoft.Crm.Client.Core.Framework
    .$D1("statementBatch", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9.$2Q4 = new Microsoft.Crm.Client.Core.Framework
    .$D1("parameterBatch", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9.$25B = new Microsoft.Crm.Client.Core.Framework
    .$D1("onBatchComplete",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$M9);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133.$25C = new Microsoft.Crm.Client.Core.Framework
    .$D1("sqlBatchResult", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$6O.$133);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i.$1ic = new Microsoft.Crm.Client.Core.Framework
    .$D1("CameraAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i.$2DA = new Microsoft.Crm.Client.Core.Framework
    .$D1("GalleryAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i.$2Nc = new Microsoft.Crm.Client.Core.Framework
    .$D1("NativeFilePickerAvailable", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$4i, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$rY = new Microsoft.Crm.Client.Core.Framework
    .$D1("dataID", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$2Wm = new Microsoft.Crm.Client.Core.Framework
    .$D1("size", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1mm = new Microsoft.Crm.Client.Core.Framework
    .$D1("filename", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1F8 = new Microsoft.Crm.Client.Core.Framework
    .$D1("mimeType", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H.$1ml = new Microsoft.Crm.Client.Core.Framework
    .$D1("fileContents", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn.$1OF = new Microsoft.Crm.Client.Core.Framework
    .$D1("checkpoint", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU.$2OL = new Microsoft.Crm.Client.Core.Framework
    .$D1("checkpointCallback",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$yn,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1CU);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3.$1OF = new Microsoft.Crm.Client.Core.Framework
    .$D1("checkpoint", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TW.$1I3);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO.$2Az = new Microsoft.Crm.Client.Core.Framework
    .$D1("refreshToken", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO.$2PK = new Microsoft.Crm.Client.Core.Framework
    .$D1("onRequestSecurityTokenResponse",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$aO);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W.$2SW = new Microsoft.Crm.Client.Core.Framework
    .$D1("requestSecurityTokenResponse", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$13W);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$2Sg = new Microsoft.Crm.Client.Core.Framework
    .$D1("resource", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$27g = new Microsoft.Crm.Client.Core.Framework
    .$D1("cookieName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$27f = new Microsoft.Crm.Client.Core.Framework
    .$D1("cookieDomain", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7.$2OI = new Microsoft.Crm.Client.Core.Framework
    .$D1("onBeginSecureSessionForResourceResponse",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$G7);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS.$25I = new Microsoft.Crm.Client.Core.Framework
    .$D1("responseCode", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS.$25H = new Microsoft.Crm.Client.Core.Framework
    .$D1("expiresOn", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$WS);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0.$1Pv = new Microsoft.Crm.Client.Core.Framework
    .$D1("deviceErrorAction", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0.$1QX = new Microsoft.Crm.Client.Core.Framework
    .$D1("errorDetails", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$Y0);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah.$2Uk = new Microsoft.Crm.Client.Core.Framework
    .$D1("sessionID", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah.$2Xi = new Microsoft.Crm.Client.Core.Framework
    .$D1("telemetryEndPointUrl", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TX.$ah);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.$1Xn = new Microsoft.Crm.Client.Core.Framework
    .$D1("onMethodException",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly,
        null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.$1Xo = new Microsoft.Crm.Client.Core.Framework
    .$D1("onMethodReturn",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$6h,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly,
        null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly.$1dv = new Microsoft.Crm.Client.Core.Framework
    .$D1("url", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Ly, null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.$1Xn = new Microsoft.Crm.Client.Core.Framework
    .$D1("onMethodException",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$5M,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh,
        null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.$1Xo = new Microsoft.Crm.Client.Core.Framework
    .$D1("onMethodReturn",
        Microsoft.Crm.Client.Core.Framework.PAL.Core.$FK,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh,
        null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh.$1dv = new Microsoft.Crm.Client.Core.Framework
    .$D1("url", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TI.$Mh, null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8.$1Pv = new Microsoft.Crm.Client.Core.Framework
    .$D1("deviceErrorAction", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8.$1QX = new Microsoft.Crm.Client.Core.Framework
    .$D1("errorDetails", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Y8);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac.$16T = new Microsoft.Crm.Client.Core.Framework
    .$D1("valueName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("value", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ac);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai.$16T = new Microsoft.Crm.Client.Core.Framework
    .$D1("valueName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("value", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$ai);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z.$2ZR = new Microsoft.Crm.Client.Core.Framework
    .$D1("values", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx.$2ZQ = new Microsoft.Crm.Client.Core.Framework
    .$D1("valueNames", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx.$2PX = new Microsoft.Crm.Client.Core.Framework
    .$D1("onStringsResult",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13Z,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Yx);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("value", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw.$2Oz = new Microsoft.Crm.Client.Core.Framework
    .$D1("onMetadataResult",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$13S,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cw);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF.$La = new Microsoft.Crm.Client.Core.Framework
    .$D1("value", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv.$1Xi = new Microsoft.Crm.Client.Core.Framework
    .$D1("onFloatResult",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Cv);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz.$24b = new Microsoft.Crm.Client.Core.Framework
    .$D1("area", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz.$2Ao = new Microsoft.Crm.Client.Core.Framework
    .$D1("eventName", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz.$1Xi = new Microsoft.Crm.Client.Core.Framework
    .$D1("onFloatResult",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$uF,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$Lz);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f.$1Ws = new Microsoft.Crm.Client.Core.Framework
    .$D1("memoryDiagnosticsEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$19f);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq.$2Xa = new Microsoft.Crm.Client.Core.Framework
    .$D1("syncStage", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$TN.$1Iq);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2ZU = new Microsoft.Crm.Client.Core.Framework
    .$D1("Version1", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2MG = new Microsoft.Crm.Client.Core.Framework
    .$D1("LastPALVersion", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Zl = new Microsoft.Crm.Client.Core.Framework
    .$D1("WindowLocation", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2RB = new Microsoft.Crm.Client.Core.Framework
    .$D1("PushToPull", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2R7 = new Microsoft.Crm.Client.Core.Framework
    .$D1("Pullback", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2M7 = new Microsoft.Crm.Client.Core.Framework
    .$D1("JavaInterface", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2ND = new Microsoft.Crm.Client.Core.Framework
    .$D1("MessageInterface", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2NG = new Microsoft.Crm.Client.Core.Framework
    .$D1("MessageObjectInterface", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2UD = new Microsoft.Crm.Client.Core.Framework
    .$D1("ScriptNotifyInterface", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ny = new Microsoft.Crm.Client.Core.Framework
    .$D1("ObjectShareInterface", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$3G6 = new Microsoft.Crm.Client.Core.Framework
    .$D1("OSVersion", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$399 = new Microsoft.Crm.Client.Core.Framework
    .$D1("Language", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$22P = new Microsoft.Crm.Client.Core.Framework
    .$D1("Version", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$25V = new Microsoft.Crm.Client.Core.Framework
    .$D1("Build", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2TU = new Microsoft.Crm.Client.Core.Framework
    .$D1("Revision", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1rF = new Microsoft.Crm.Client.Core.Framework
    .$D1("iOSUpdateRevision", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$22e = new Microsoft.Crm.Client.Core.Framework
    .$D1("Win8UpdateRevision", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1hf = new Microsoft.Crm.Client.Core.Framework
    .$D1("AndroidUpdateRevision", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2KZ = new Microsoft.Crm.Client.Core.Framework
    .$D1("InstallationId", String, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, "");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$24W = new Microsoft.Crm.Client.Core.Framework
    .$D1("ApplicationName",
        String,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R,
        "microsoft.microsoftdynamicscrm");
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1lM = new Microsoft.Crm.Client.Core.Framework
    .$D1("DiagnosticsEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tg = new Microsoft.Crm.Client.Core.Framework
    .$D1("MemoryDiagnosticsEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2A3 = new Microsoft.Crm.Client.Core.Framework
    .$D1("DispatcherPerfLoggingEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$3AS = new Microsoft.Crm.Client.Core.Framework
    .$D1("loggingEnabled", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tP = new Microsoft.Crm.Client.Core.Framework
    .$D1("LogComponents", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1tT = new Microsoft.Crm.Client.Core.Framework
    .$D1("LogMessageMaxLength", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, 0);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$3Sn = new Microsoft.Crm.Client.Core.Framework
    .$D1("StartPage",
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$F2,
        Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R,
        0);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Jd = new Microsoft.Crm.Client.Core.Framework
    .$D1("HasReconfigureSupport", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Jc = new Microsoft.Crm.Client.Core.Framework
    .$D1("HasOneNoteSupport", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ja = new Microsoft.Crm.Client.Core.Framework
    .$D1("HasOfficeDocumentsSupport", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2WP = new Microsoft.Crm.Client.Core.Framework
    .$D1("ShimStartTime", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$24Z = new Microsoft.Crm.Client.Core.Framework
    .$D1("AppStartTime", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$23P = new Microsoft.Crm.Client.Core.Framework
    .$D1("ADALTime", Number, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, -1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2WO = new Microsoft.Crm.Client.Core.Framework
    .$D1("ShimPerformanceMetrics", Array, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2LJ = new Microsoft.Crm.Client.Core.Framework
    .$D1("IsManaged", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2JY = new Microsoft.Crm.Client.Core.Framework
    .$D1("HasMashupSupport", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2JX = new Microsoft.Crm.Client.Core.Framework
    .$D1("HasMashupDiagnosticsSupport", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Nb = new Microsoft.Crm.Client.Core.Framework
    .$D1("NativeFCBContext", Object, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, null);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2WY = new Microsoft.Crm.Client.Core.Framework
    .$D1("ShouldSkipTransfer", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ji = new Microsoft.Crm.Client.Core.Framework
    .$D1("HideCommandBar", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1ww = new Microsoft.Crm.Client.Core.Framework
    .$D1("ProxyMetadataSyncEventsToShim", Boolean, Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R, !1);
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$29C = "Version1";
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1kn = 1;
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Uh = 1;
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ui = 1;
Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$2Ue = 1;
Microsoft.Crm.Client.Core.Framework.Storage.$4R.$11 = new Microsoft.Crm.Client.Core.Framework.Storage.$4R("id");
Microsoft.Crm.Client.Core.Framework.TelemetryCore.$5U.$18e = "";
Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.$D = null;
Microsoft.Crm.Client.Core.Framework.Net.Uri.$2Kn = String
    .format("{0}.{0}.{0}.{0}", "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])");
Microsoft.Crm.Client.Core.Framework.Net.Uri.$2Rp = String
    .format("(?:{0}|{1}|{2})*", "[A-Za-z0-9-\\._~]", "%[A-Fa-f0-9][A-Fa-f0-9]", "[!\\$&'\\(\\)\\*\\+,;=]");
Microsoft.Crm.Client.Core.Framework.Net.Uri.$2Jk = String
    .format("({0}|{1})",
        Microsoft.Crm.Client.Core.Framework.Net.Uri.$2Kn,
        Microsoft.Crm.Client.Core.Framework.Net.Uri.$2Rp);
Microsoft.Crm.Client.Core.Framework.Net.Uri.$2ZE = String
    .format("((?:{0}|{1}|{2}|:)*)", "[A-Za-z0-9-\\._~]", "%[A-Fa-f0-9][A-Fa-f0-9]", "[!\\$&'\\(\\)\\*\\+,;=]");
Microsoft.Crm.Client.Core.Framework.Net.Uri.$250 = String
    .format("^(?:{0}@)?{1}(?::([0-9]*))?$",
        Microsoft.Crm.Client.Core.Framework.Net.Uri.$2ZE,
        Microsoft.Crm.Client.Core.Framework.Net.Uri.$2Jk);
Microsoft.Crm.Client.Core.Framework.Net.Uri
    .$224 = new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$");
Microsoft.Crm.Client.Core.Framework.Net.Uri.$1i3 = new RegExp(Microsoft.Crm.Client.Core.Framework.Net.Uri.$250);
Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x.$1l7 = null;
Microsoft.Crm.Client.Core.Framework.IndexedDb.$6x.$$cctor();
Microsoft.Crm.Client.Core.Framework.Utils.$6m.$3HN = new RegExp("\n", "g");
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2Jt = !1;
Microsoft.Crm.Client.Core.Framework.Utils.$1B.$$cctor();
$4m.$1Ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
Microsoft.Crm.Client.Core.Storage.Common.Xml.$6I
    .$1jq = new RegExp("xmlns:([\\w]+)=[\"']http://schemas.microsoft.com/xrm/2011/Contracts[\"']");
Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$o6 = -1
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Core.Framework.js.srcmap