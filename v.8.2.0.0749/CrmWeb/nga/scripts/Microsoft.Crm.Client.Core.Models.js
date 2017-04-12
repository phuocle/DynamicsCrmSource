Type.registerNamespace("Microsoft.Crm.Client.Core.Framework");
Microsoft.Crm.Client.Core.Framework.$HT = function() {};
Microsoft.Crm.Client.Core.Framework.$HT.registerInterface("Microsoft.Crm.Client.Core.Framework.$HT");
Microsoft.Crm.Client.Core.Framework.$HU = function() {};
Microsoft.Crm.Client.Core.Framework.$HU.registerInterface("Microsoft.Crm.Client.Core.Framework.$HU");
Microsoft.Crm.Client.Core.Framework.$3q = function() {};
Microsoft.Crm.Client.Core.Framework.$3q.prototype = {
    load: 0,
    save: 1,
    change: 2,
    command: 3,
    preSearch: 4,
    stageChange: 5,
    stageSelected: 6,
    close: 7,
    click: 8,
    listLoad: 9,
    processChange: 10,
    processStatusChange: 11,
    dataSetRecordLoad: 12,
    dataSetRecordSave: 13
};
Microsoft.Crm.Client.Core.Framework.$3q.registerEnum("Microsoft.Crm.Client.Core.Framework.$3q", !1);
Type.registerNamespace("Mscrm.InternalUtilities");
Mscrm.InternalUtilities.Utilities = function() {};
Mscrm.InternalUtilities.Utilities.createAndFilterXmlString = function(n, t, i) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(n) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(t) &&
        !Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString(i))
        return String.format('<filter type="and"><condition attribute="{0}" operator="{1}" value="{2}" /><\/filter>',
            CrmEncodeDecode.CrmXmlAttributeEncode(n),
            CrmEncodeDecode.CrmXmlAttributeEncode(t),
            CrmEncodeDecode.CrmXmlAttributeEncode(i));
    return""
};
Mscrm.InternalUtilities.Utilities.isUserDefinedEntityObjectTypeCode = function(n) { return n >= 1e4 };
Mscrm.InternalUtilities.Utilities.$2GX = function(n) {
    var t;
    try {
        t = document.cookie
    } catch (f) {
        t = ""
    }
    var u = null, i = t.indexOf(n + "="), r = -1;
    return i !== -1 && (i += n.length + 1, r = t.indexOf(";", i), r === -1 && (r = t.length), u = t.substring(i, r)),
        CrmEncodeDecode.CrmNameValueDecode(u)
};
Mscrm.InternalUtilities.Utilities.isIosDevice = function() { return Xrm.Internal.isIosDevice() };
Mscrm.InternalUtilities.Utilities.isRefreshForm = function() {
    var n = window.self._IsRefreshForm;
    return!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(n) && "1" === n
};
Mscrm.InternalUtilities.Utilities.isTurboForm = function() {
    var n = window.self.IsTurboForm;
    return Mscrm.InternalUtilities.JSTypes.isNull(n) ? !1 : n
};
Mscrm.InternalUtilities.Utilities.$2LA = function() {
    var n = window.self._highContrastEnabled;
    return Mscrm.InternalUtilities.JSTypes.isNull(n) ? !1 : n
};
Mscrm.InternalUtilities.Utilities.enforceStateTransitions = function(n) {
    var r = Xrm.Page.context.client.getClient() == Xrm.ClientName.mobile, t = !1, i;
    return r
        ? t = Xrm.Utility.areStateTransitionsEnforced(n)
        : (i = window.self._EnforceStateTransitions, t = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(i) &&
            i === "1"), t
};
Mscrm.InternalUtilities.Utilities.isCurrentKMParature = function() {
    var n = window.self.IsCurrentKMParature;
    return Mscrm.InternalUtilities.JSTypes.isNull(n) ? !0 : n
};
Mscrm.InternalUtilities.Utilities.isParatureKnowledgebaseVisable = function() {
    var n = window.self.IsParatureKnowledgebaseVisable;
    return Mscrm.InternalUtilities.JSTypes.isNull(n) ? !0 : n
};
Type.registerNamespace("Microsoft.Crm.Workflow");
Microsoft.Crm.Workflow.$9q = function(n, t, i, r, u) {
    this.years = n;
    this.months = t;
    this.days = i;
    this.hours = r;
    this.minutes = u
};
Microsoft.Crm.Workflow.$9q.prototype = {
    $4H: function(n) {
        if (n) {
            var t = n;
            this.days = t.days
        }
    },
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
};
Type.registerNamespace("Microsoft.Crm.Workflow.ObjectModel");
Microsoft.Crm.Workflow.ObjectModel.$5r = function() {};
Microsoft.Crm.Workflow.ObjectModel.$5r.prototype = {
    identifyContact: 0,
    identifyAccount: 1,
    identifyCustomer: 2,
    identifyCase: 3,
    solution: 4,
    resolve: 5
};
Microsoft.Crm.Workflow.ObjectModel.$5r.registerEnum("Microsoft.Crm.Workflow.ObjectModel.$5r", !1);
Microsoft.Crm.Workflow.ObjectModel.$GA = function() {};
Microsoft.Crm.Workflow.ObjectModel.$GA.registerInterface("Microsoft.Crm.Workflow.ObjectModel.$GA");
Microsoft.Crm.Workflow.ObjectModel.$9O = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$9O.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.__class = "ActionStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$9O.prototype = {
    $jx: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$9T.isInstanceOfType(n) ||
            Microsoft.Crm.Workflow.ObjectModel.$9y.isInstanceOfType(n) ||
            Microsoft.Crm.Workflow.ObjectModel.$Ew.isInstanceOfType(n),
            "Can only insert AssignVariableStep, SetAttributeValueStep, or CustomJavascriptStep");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    $DP: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$9T.isInstanceOfType(n) ||
            Microsoft.Crm.Workflow.ObjectModel.$9y.isInstanceOfType(n),
            "Can only insert AssignVariableStep or CustomJavascriptStep");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$DP.call(this, n)
    },
    apply: function(n) { n.$3WO(this) },
    $2bq: function() {},
    createDataSources: function() {},
    actionControl: null,
    actionId: null,
    actionType: 0,
    processId: null,
    uniqueName: null,
    triggerEvents: null,
    $2Y: function() {
        var n = new Sys.StringBuilder, i, r, t;
        if (n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("actionId", this.actionId, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("actionType", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.actionType), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("processId", this.processId.toString(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("uniqueName", this.uniqueName, !0)), this.triggerEvents && this.triggerEvents.length > 0) {
            for (i = new Sys.StringBuilder, r = new Array(this.triggerEvents.length), t = 0;
                t < this.triggerEvents.length;
                t++) r[t] = this.triggerEvents[t].$2Y();
            i.append("[" + Microsoft.Crm.Workflow.Utils.$d.$1sh(String, ",", r) + "]");
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("triggerEvents", i.toString(), !0))
        }
        return Microsoft.Crm.Workflow.Utils.$d.$25(this.actionControl) ||
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("actionControl", this.actionControl.$2Y(), !0)), n
            .append("}"), n.toString()
    },
    $AD: function() {
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$AD.call(this);
        this.actionControl &&
        (this.actionControl.set_$HY(this), this.actionControl.$6x.stepDictionary
            .set_$H(this.actionControl.id, this.actionControl), this.actionControl.$AD())
    },
    $4H: function(n) {
        var t, r, i, f, u;
        if (n) {
            if (Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$4H.call(this, n), t = n, this.actionId = t
                .actionId, this.actionType = t.actionType ? JSON.parse(t.actionType) : 0, this.uniqueName = t
                .uniqueName, t.processId &&
                (this.processId = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(t.processId.toString())), t
                .triggerEvents) {
                for (r = new Array(t.triggerEvents
                        .length), i = 0;
                    i < t.triggerEvents.length;
                    i++) f = t.triggerEvents[i], u = new Microsoft.Crm.Workflow.ObjectModel.$JZ, u.$4H(f), r[i] = u;
                this.triggerEvents = r
            }
            t.actionControl &&
            (this.actionControl = Microsoft.Crm.Workflow.ObjectModel.$1T.$1Ni(t.actionControl.__class), this
                .actionControl.$4H(t.actionControl))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$JZ = function() {};
Microsoft.Crm.Workflow.ObjectModel.$JZ.prototype = {
    get_Event: function() { return this.eventName },
    set_Event: function(n) { return this.eventName = n, n },
    get_FilterId: function() { return this.filterId },
    set_FilterId: function(n) { return this.filterId = n, n },
    get_PipelineStageId: function() { return this.pipelineStageId },
    set_PipelineStageId: function(n) { return this.pipelineStageId = n, n },
    eventName: null,
    filterId: null,
    pipelineStageId: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("eventName", this.eventName, !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("filterId", this.filterId, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("pipelineStageId", this.pipelineStageId, !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        var t = n;
        t && (this.eventName = t.eventName, this.pipelineStageId = t.pipelineStageId, this.filterId = t.filterId)
    }
};
Microsoft.Crm.Workflow.ObjectModel.$T3 = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$T3.initializeBase(this, [n, t]);
    this.__class = "PageStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.pageUniqueName = this.name
};
Microsoft.Crm.Workflow.ObjectModel.$T3.prototype = {
    apply: function(n) { n.$3We(this) },
    pageLayoutId: null,
    pageUniqueName: null,
    $1N3: function(n) {
        Microsoft.Crm.Workflow.ObjectModel.$5q.prototype.$1N3.call(this, n);
        n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("pageLayoutId", this.pageLayoutId, !0));
        n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("pageUniqueName", this.pageUniqueName, !0))
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$5q.prototype.$4H.call(this, n);
            var t = n;
            this.pageLayoutId = Microsoft.Crm.Workflow.Utils.$d.$94(t.pageLayoutId);
            t.pageUniqueName && (this.pageUniqueName = Microsoft.Crm.Workflow.Utils.$d.$94(t.pageUniqueName))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$1T = function() {};
Microsoft.Crm.Workflow.ObjectModel.$1T.$1Ni = function(n) {
    var t = new Microsoft.Crm.Workflow.ObjectModel.$7B("account", 0), i, r, u;
    switch (n) {
    case"ConditionStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$9h(t);
    case"ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel":
        return i = new Microsoft.Crm.Workflow.ObjectModel.$9h(t), i.set_$bD(t), new Microsoft.Crm.Workflow.ObjectModel
            .$6l(i, null);
    case"CustomJavascriptStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$9y(t);
    case"SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Q4(t);
    case"SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Pz(t);
    case"SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Ew(t, null);
    case"SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Qz(t);
    case"SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Px(t);
    case"SetDefaultValueStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$SS(t, null);
    case"SetNextStageStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Q3(t);
    case"ControlStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$9l(t);
    case"ActionStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$9O(t);
    case"EntityStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$62(t, "dummy");
    case"StageStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$5q(t, "dummy");
    case"PageStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$T3(t, "dummy");
    case"StepStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Sv(t, "dummy");
    case"RelationshipCollectionStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Er(t);
    case"RelationshipStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Bl(t);
    case"RollupRuleStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Q2(t);
    case"CreateStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$MM(t);
    case"CustomActivityStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Ct(t);
    case"UpdateStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$MZ(t);
    case"AssignStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$QE(t);
    case"ChildWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Pe(t);
    case"SendEmailStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Po(t);
    case"SetStateStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Pq(t);
    case"StopWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$QG(t);
    case"WaitBranchStep:#Microsoft.Crm.Workflow.ObjectModel":
        return r = new Microsoft.Crm.Workflow.ObjectModel.$QJ(t), r.set_$bD(t), new Microsoft.Crm.Workflow.ObjectModel
            .$Pp(r, new Microsoft.Crm.Workflow.Expressions.$Q8(t));
    case"WaitStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$QJ(t);
    case"WaitTimeoutStep:#Microsoft.Crm.Workflow.ObjectModel":
        return u = new Microsoft.Crm.Workflow.ObjectModel.$QJ(t), u.set_$bD(t), new Microsoft.Crm.Workflow.ObjectModel
            .$Pm(u, new Microsoft.Crm.Workflow.Expressions.$Q8(t));
    case"InteractionStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$An(t);
    case"InteractionPageStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$E0(t);
    case"ChildInteractiveWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$7e(t);
    case"AssignVariableStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$9T(t);
    case"QueryStep:#Microsoft.Crm.Workflow.ObjectModel":
        return new Microsoft.Crm.Workflow.ObjectModel.$Q1(t)
    }
    return null
};
Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ = function(n) {
    var t = new Microsoft.Crm.Workflow.ObjectModel.$7B("account", 0);
    switch (n) {
    case"UnaryExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$QC(t, 0, null);
    case"PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Q6(t, null, 14);
    case"BinaryExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Pr(t,
            6,
            new Microsoft.Crm.Workflow.Expressions.$Q6(t, null, 14),
            []);
    case"EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Ps(new Microsoft.Crm.Workflow.Expressions.$Pw(t, "dummyParam"),
            "name");
    case"MethodCallExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Q7(t, 0, null);
    case"TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$QB(t, new Microsoft.Crm.Workflow.$9q(0, 0, 0, 0, 0));
    case"LookupExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$QI(t, null, 6, "", "");
    case"NullExpression:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Q8(t)
    }
    return null
};
Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw = function(n) {
    var t = new Microsoft.Crm.Workflow.ObjectModel.$7B("account", 0);
    switch (n) {
    case"PrimaryEntity:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Pu(t);
    case"RelatedEntity:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$QD(t, "dummyProperty", "dummyEntity");
    case"RelatedEntityLinked:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Sx(t, "dummyProperty", "dummyEntity", "dummyRelationshipName");
    case"EntityCreatedByStep:#Microsoft.Crm.Workflow.Expressions":
        return new Microsoft.Crm.Workflow.Expressions.$Pv(t, null, "dummy", "dummy", "dummy", !0);
    default:
        return null
    }
};
Microsoft.Crm.Workflow.ObjectModel.$9T = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$9T.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "AssignVariableStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$9T.prototype = {
    apply: function(n) { n.$3WP(this) },
    direction: 0,
    readOnly: !1,
    valueExpression: null,
    variableName: null,
    dataType: 0,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("variableName", this.variableName, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("readOnly", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.readOnly), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("direction", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.direction), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("dataType", this.$2yn(this.dataType), !0)),
            this.valueExpression &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("valueExpression", this.valueExpression.$2Y(), !0)), n
                .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            t.variableName && (this.variableName = t.variableName);
            t.readOnly && (this.readOnly = t.readOnly);
            t.direction && (this.direction = t.direction);
            t.dataType && (this.dataType = t.dataType);
            t.valueExpression &&
            (this.valueExpression = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.valueExpression.__class), this
                .valueExpression.$4H(t.valueExpression))
        }
    },
    $2yn: function(n) { return Microsoft.Crm.Workflow.Utils.$d.$Cz(n) }
};
Microsoft.Crm.Workflow.ObjectModel.$9l = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$9l.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.__class = "ControlStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$9l.prototype = {
    apply: function(n) { n.$3WU(this) },
    $2bq: function() {},
    createDataSources: function() {},
    controlId: null,
    classId: null,
    dataFieldName: null,
    entity: null,
    systemStepType: 0,
    isSystemControl: !1,
    parameters: null,
    controlDisplayName: null,
    isUnbound: !1,
    controlType: 0,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlId", this.controlId, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("classId", this.classId, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("dataFieldName", this.dataFieldName, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("systemStepType", Microsoft.Crm.Workflow.ObjectModel.$5r.toString(this.systemStepType), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("isSystemControl", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isSystemControl), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("parameters", this.parameters, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlDisplayName", this.controlDisplayName, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("isUnbound", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isUnbound), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("controlType", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.controlType), !0)),
            Microsoft.Crm.Workflow.Utils.$d.$25(this.entity) ||
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n.append("}"), n
                .toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.controlId = t.controlId;
            this.classId = t.classId;
            this.dataFieldName = t.dataFieldName;
            this.systemStepType = t.systemStepType;
            this.isSystemControl = t.isSystemControl;
            this.parameters = t.parameters;
            this.controlDisplayName = t.controlDisplayName;
            this.isUnbound = t.isUnbound;
            this.controlType = t.controlType ? JSON.parse(t.controlType) : 0;
            t.entity &&
                (this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class), this.entity.$4H(t.entity))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$62 = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$62.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    Microsoft.Crm.Workflow.Utils.$k.$7b(t, "entityLogicalName");
    this.__class = "EntityStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t());
    this.set_EntityLogicalName(t)
};
Microsoft.Crm.Workflow.ObjectModel.$62.prototype = {
    get_EntityLogicalName: function() { return this.description },
    set_EntityLogicalName: function(n) { return this.description = n, n },
    $jx: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(n),
            "Cannot insert a non stage step");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    $DP: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(n),
            "Cannot remove a non stage step");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$DP.call(this, n)
    },
    apply: function(n) { n.$3WY(this) },
    $2bq: function() {},
    createDataSources: function() {},
    relationshipName: null,
    attributeName: null,
    isClosedLoop: !1,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("relationshipName", this.relationshipName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("attributeName", this.attributeName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("isClosedLoop", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isClosedLoop), !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$4H.call(this, n);
            var t = n;
            this.relationshipName = t.relationshipName;
            this.attributeName = t.attributeName;
            this.isClosedLoop = t.isClosedLoop
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Er = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Er.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.__class = "RelationshipCollectionStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$Er.prototype = {
    $jx: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$Bl.isInstanceOfType(n),
            "Cannot insert a non Relationship step");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    $DP: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$Bl.isInstanceOfType(n),
            "Cannot remove a non Relationship step");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$DP.call(this, n)
    },
    apply: function(n) { n.$3Wh(this) },
    $2bq: function() {},
    createDataSources: function() {},
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), n
            .append("}"), n.toString()
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Bl = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Bl.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.__class = "RelationshipStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$Bl.prototype = {
    apply: function(n) { n.$3Wi(this) },
    $2bq: function() {},
    createDataSources: function() {},
    relationshipName: null,
    attributeName: null,
    sourceStageId: null,
    targetStageId: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("relationshipName", this.relationshipName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("attributeName", this.attributeName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("sourceStageId", this.sourceStageId, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("targetStageId", this.targetStageId, !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.relationshipName = t.relationshipName;
            this.attributeName = t.attributeName;
            this.sourceStageId = t.sourceStageId;
            this.targetStageId = t.targetStageId
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Sv = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$Sv.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    Microsoft.Crm.Workflow.Utils.$k.$7b(t, "stepName");
    this.__class = "StepStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t());
    this.set_$3Sq(t)
};
Microsoft.Crm.Workflow.ObjectModel.$Sv.prototype = {
    set_$3Sq: function(n) { return this.description = n, n },
    $jx: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$9l.isInstanceOfType(n) ||
            Microsoft.Crm.Workflow.ObjectModel.$9O.isInstanceOfType(n),
            "Cannot insert a non Control/action Step");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    $DP: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$9l.isInstanceOfType(n) ||
            Microsoft.Crm.Workflow.ObjectModel.$9O.isInstanceOfType(n),
            "Cannot remove a non Control/Action Step");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$DP.call(this, n)
    },
    apply: function(n) { n.$3Ws(this) },
    $2bq: function() {},
    createDataSources: function() {},
    stepStepId: null,
    stepStepName: null,
    isProcessRequired: !1,
    isHidden: !1,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("stepStepId", this.stepStepId, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("name", this.stepStepName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("isProcessRequired", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isProcessRequired), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("isHidden", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isHidden), !0)), n.append("}"), n
            .toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$4H.call(this, n);
            var t = n;
            this.stepStepId = Microsoft.Crm.Workflow.Utils.$d.$94(t.stepStepId);
            this.isProcessRequired = t.isProcessRequired;
            this.isHidden = t.isHidden
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$9g = function() {
    Microsoft.Crm.Workflow.ObjectModel.$9g.initializeBase(this);
    this.steps = new Microsoft.Crm.Workflow.ObjectModel.$JF;
    this.__class = "CompositeStepBase:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$9g.prototype = {
    get_Steps: function() { return this.steps },
    $jx: function(n) {
        Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(n) &&
            Microsoft.Crm.Workflow.Utils.$k.$C3(Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.$7B ||
                Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.$62,
                "StageStep can only be inserted as a child of WorkflowStep or EntityStep.");
        Microsoft.Crm.Workflow.Utils.$k.$C3(!Microsoft.Crm.Workflow.ObjectModel.$7B.isInstanceOfType(n),
            "WorkflowStep cannot be added as a child of any steps.");
        n.$2m2();
        n.set_$HY(this);
        this.steps.$2e(n);
        this.$6x.stepDictionary.set_$H(n.id, n)
    },
    $DP: function(n) {
        var t, i, r;
        if (this.$6x.stepDictionary.$DP(n.id), Microsoft.Crm.Workflow.ObjectModel.$9g
            .isInstanceOfType(n))
            for (t = n, i = t.steps.get_Count(); i > 0;) r = t.steps.get_$H(0), t.$DP(r), i = t.steps.get_Count();
        this.steps.$DP(n)
    },
    $mg: function(n, t, i) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(n.get_$HY() === this, "Peer step is not a child of current step.");
        i.set_$HY(this);
        var r = this.steps.$35G(n);
        Microsoft.Crm.Workflow.Utils.$k.$C3(r >= 0, "Peer index must be non-zero");
        t
            ? (this.steps.$mg(r + 1, i), this.$6x.stepDictionary.set_$H(i.id, i))
            : (this.steps.$mg(r, i), this.$6x.stepDictionary.set_$H(i.id, i))
    },
    steps: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("steps", this.steps.$2Y(), !0)), n.toString()
    },
    $AD: function() {
        var t, n;
        for (Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$AD
                .call(this), t = 0;
            t < this.steps.get_Count();
            t++) n = this.steps.get_$H(t), n.set_$HY(this), n.$6x.stepDictionary.set_$H(n.id, n), n.$AD()
    },
    $4H: function(n) {
        var i, t, r, u;
        if (n)
            for (Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n), i = n, t = 0;
                t < i.steps.list.length;
                t++)
                r = i.steps.list[t], u = Microsoft.Crm.Workflow.ObjectModel.$1T.$1Ni(r.__class), u.$4H(r), this.steps
                    .$2e(u)
    }
};
Microsoft.Crm.Workflow.ObjectModel.$6l = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$6l.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "condition");
    this.$9z(n.$6x.$9t());
    t && (this.conditionExpression = t);
    this.__class = "ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$6l.prototype = {
    get_$2gz: function() {
        if (this.conditionExpression) {
            var n = this.get_$HY();
            return n ||
                    Microsoft.Crm.Workflow.Utils.$k
                    .$aw("Condition branch needs to be added to a condition step in order to determine its display mode"),
                this === n.steps.get_$H(0) ? 0 : 1
        }
        return 2
    },
    get_$HY: function() { return Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.get_$HY.call(this) },
    set_$HY: function(n) {
        return Microsoft.Crm.Workflow.Utils.$k
            .$7b(n, "Parent"), Microsoft.Crm.Workflow.ObjectModel.$9h.isInstanceOfType(n) ||
            Microsoft.Crm.Workflow.Utils.$k.$aw("Only ConditionStep can include ConditionBranch as a child."), Microsoft
            .Crm.Workflow.ObjectModel.$JH.prototype.set_$HY.call(this, n), n
    },
    $jx: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(!Microsoft.Crm.Workflow.ObjectModel.$6l.isInstanceOfType(n),
            "Cannot add a ConditionBranchStep to a ConditionBranchStep.");
        Microsoft.Crm.Workflow.Utils.$k.$C3(!Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(n),
            "Cannot add StageStep to ConditionBranchStep. It can only be added to a workflow step.");
        Microsoft.Crm.Workflow.Utils.$k.$C3(!Microsoft.Crm.Workflow.ObjectModel.$7B.isInstanceOfType(n),
            "Cannot add WorkflowStep to ConditionBranchStep.");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    $2bq: function(n, t) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$6l.isInstanceOfType(t),
            "Peer of a ConditionBranchStep can only be a ConditionBranchStep.");
        var i = t;
        n !== 1 ||
            this.conditionExpression ||
            Microsoft.Crm.Workflow.Utils.$k
            .$aw("Cannot insert a condition branch with condition expression after a branch that does not.");
        n ||
            !this.conditionExpression ||
            i.conditionExpression ||
            Microsoft.Crm.Workflow.Utils.$k
            .$aw("Cannot insert a condition branch with no condition expression before a branch that does have one.");
        Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2bq.call(this, n, t)
    },
    apply: function(n) { n.$3WS(this) },
    conditionExpression: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y
            .call(this)), this.conditionExpression &&
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("conditionExpression", this.conditionExpression.$2Y(), !0)), n.append("}"), n.toString()
    },
    $AD: function() {
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$AD.call(this);
        this.conditionExpression && this.conditionExpression.$AD(this.$6x)
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$4H.call(this, n);
            var t = n;
            t.conditionExpression &&
            (this.conditionExpression = Microsoft.Crm.Workflow.ObjectModel.$1T
                .$FQ(t.conditionExpression.__class), this.conditionExpression.$4H(t.conditionExpression))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$9h = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$9h.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.containsElsebranch = !1;
    this.__class = "ConditionStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$9h.prototype = {
    $DP: function(n) {
        if (Microsoft.Crm.Workflow.ObjectModel.$6l.isInstanceOfType(n)) {
            var t = n;
            t.conditionExpression || (this.containsElsebranch = !1)
        }
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$DP.call(this, n)
    },
    $jx: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$6l.isInstanceOfType(n),
            "Cannot add any other step other than ConditionBranchStep to ConditionStep.");
        var t = n;
        t.conditionExpression || this.containsElsebranch || (this.containsElsebranch = !0);
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    apply: function(n) { n.$3WT(this) },
    $2q7: function() {
        var n = null, i = this.steps.get_$H(this.steps.get_Count() - 1), t = i;
        return t.get_$2gz() === 2 && (n = t), n
    },
    containsElsebranch: !1,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("containsElsebranch", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.containsElsebranch), !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$4H.call(this, n);
            var t = n;
            this.containsElsebranch = t.containsElsebranch
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Ja = function() {};
Microsoft.Crm.Workflow.ObjectModel.$Ja.prototype = { name: null };
Microsoft.Crm.Workflow.ObjectModel.$R7 = function() { Microsoft.Crm.Workflow.ObjectModel.$R7.initializeBase(this) };
Microsoft.Crm.Workflow.ObjectModel.$JU = function() {};
Microsoft.Crm.Workflow.ObjectModel.$JU.prototype = {
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$I
            .$4X("required", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.required), !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("name", this.name, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("typeName", this.typeName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("attributeName", this.attributeName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("dependencyProperty", this.dependencyProperty, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("workflowAttributeType", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.workflowAttributeType), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("isInOutArgument", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isInOutArgument), !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            var t = n;
            this.required = t.required;
            this.name = t.name;
            this.typeName = t.typeName;
            this.attributeName = t.attributeName;
            this.dependencyProperty = t.dependencyProperty;
            this.workflowAttributeType = parseInt(t.workflowAttributeType);
            this.isInOutArgument = t.isInOutArgument
        }
    },
    required: !1,
    name: null,
    typeName: null,
    attributeName: null,
    dependencyProperty: "",
    workflowAttributeType: 0,
    isInOutArgument: !1
};
Microsoft.Crm.Workflow.ObjectModel.$7e = function(n) {
    this.inputs = new Microsoft.Crm.Workflow.ObjectModel.$JT;
    Microsoft.Crm.Workflow.ObjectModel.$7e.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "ChildInteractiveWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$7e.$393 = function(n, t) {
    var i = new Sys.StringBuilder;
    return i.append("{"), i.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("key", n, !1)), i
        .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("value", t, !0)), i.append("}"), i.toString()
};
Microsoft.Crm.Workflow.ObjectModel.$7e.$390 = function(n, t) {
    var i = new Sys.StringBuilder, r;
    if (!t.length) return i.toString();
    for (i.append(t[0]), r = 1; r < t.length; r++) i.append(n), i.append(t[r]);
    return i.toString()
};
Microsoft.Crm.Workflow.ObjectModel.$7e.prototype = {
    apply: function(n) { n.$3WR(this) },
    entity: null,
    childWorkflow: null,
    $1UR: null,
    $2Y: function() {
        var n = new Sys.StringBuilder, t, r, f;
        if (n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y
            .call(this)), this.entity &&
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("entity", this.entity.$2Y(), !0)), this.childWorkflow &&
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("childWorkflow", this.childWorkflow.$2Y(), !0)), this
            .inputs) {
            t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
            for (var u = this.inputs
                         .get_$396(),
                e = u.length,
                i = 0;
                i < e;
                ++i) r = u[i], t.add(Microsoft.Crm.Workflow.ObjectModel.$7e.$393(r.$2Y(), this.inputs.get_$H(r).$2Y()));
            f = "[" + Microsoft.Crm.Workflow.ObjectModel.$7e.$390(",", t.toArray()) + "]";
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("inputsSerialized", f, !0))
        }
        return n.append("}"), n.toString()
    },
    $4H: function(n) {
        var t, i, r;
        if (n &&
        (Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H
            .call(this, n), t = n, t.entity &&
        (this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class), this.entity
            .$4H(t.entity)), t.childWorkflow &&
        (this.childWorkflow = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.childWorkflow.__class), this
            .childWorkflow.$4H(t.childWorkflow)), t.$1UR))
            for (i = 0; i < t.$1UR.length; i++) {
                var u = t.$1UR[i], f = u.value, e = new Microsoft.Crm.Workflow.ObjectModel.$R7;
                e.$4H(u.key);
                r = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(f.__class);
                r.$4H(f);
                this.inputs.set_$H(e, r)
            }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$E0 = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$E0.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "InteractionPageStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$E0.prototype = {
    apply: function(n) { n.$3WZ(this) },
    $24G: !1,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("allowBack", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.$24G), !0)), n.append("}"), n
            .toString()
    }
};
Microsoft.Crm.Workflow.ObjectModel.$An = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$An.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "InteractionStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$An.prototype = {
    get_$HY: function() { return Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.get_$HY.call(this) },
    set_$HY: function(n) {
        return Microsoft.Crm.Workflow.Utils.$k.$7b(n, "Parent"), !Microsoft.Crm.Workflow.ObjectModel.$E0
            .isInstanceOfType(n), Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.set_$HY.call(this, n), n
    },
    apply: function(n) { n.$3Wa(this) },
    promptText: null,
    hintText: null,
    logResponse: !1,
    responseContainerType: 0,
    responseMetadataType: 0,
    staticResponseValues: null,
    defaultResponseValue: null,
    attributeList: null,
    queryVariableName: null,
    queryEntityName: null,
    attributeDelimiter: null,
    isResponseMetadataBound: !1,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y
                .call(this)), this.promptText &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("promptText", this.promptText.$2Y(), !0)),
            this.hintText && n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("hintText", this.hintText.$2Y(), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("logResponse", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.logResponse), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("responseContainerType", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.responseContainerType), !0)),
            n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("responseMetadataType", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.responseMetadataType), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("staticResponseValues", this.staticResponseValues, !0)),
            this.defaultResponseValue &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("defaultResponseValue", this.defaultResponseValue.$2Y(), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("attributeList", this.attributeList, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("queryVariableName", this.queryVariableName, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("queryEntityName", this.queryEntityName, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("attributeDelimiter", this.attributeDelimiter, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("isResponseMetadataBound",
                        Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isResponseMetadataBound),
                        !0)), n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("InteractionResponsePostfix", "_interactionResponseValue", !0)), n.append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            t.promptText &&
            (this.promptText = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.promptText.__class), this.promptText
                .$4H(t.promptText));
            t.hintText &&
            (this.hintText = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.hintText.__class), this.hintText
                .$4H(t.hintText));
            this.logResponse = t.logResponse;
            this.responseContainerType = t.responseContainerType;
            this.responseMetadataType = t.responseMetadataType;
            this.staticResponseValues = Microsoft.Crm.Workflow.Utils.$d.$94(t.staticResponseValues);
            t.defaultResponseValue &&
            (this.defaultResponseValue = Microsoft.Crm.Workflow.ObjectModel.$1T
                .$FQ(t.defaultResponseValue.__class), this.defaultResponseValue.$4H(t.defaultResponseValue));
            this.attributeList = Microsoft.Crm.Workflow.Utils.$d.$94(t.attributeList);
            this.queryVariableName = Microsoft.Crm.Workflow.Utils.$d.$94(t.queryVariableName);
            this.queryEntityName = Microsoft.Crm.Workflow.Utils.$d.$94(t.queryEntityName);
            this.attributeDelimiter = Microsoft.Crm.Workflow.Utils.$d.$94(t.attributeDelimiter);
            this.isResponseMetadataBound = t.isResponseMetadataBound
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$JT = function() { this.$1Js = {} };
Microsoft.Crm.Workflow.ObjectModel.$JT.prototype = {
    get_$H: function(n) {
        var t = n.$2Y();
        return t in this.$1Js ? null : this.$1Js[t].$22n
    },
    set_$H: function(n, t) {
        var i = new Microsoft.Crm.Workflow.ObjectModel.$JT.$3Xp;
        return i.$2I = n, i.$22n = t, this.$1Js[n.$2Y()] = i, t
    },
    get_$396: function() {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Workflow.ObjectModel.$R7)),
            i = this.$1Js,
            n,
            r;
        for (n in i) r = { key: n, value: i[n] }, t.add(r.value.$2I);
        return t.toArray()
    }
};
Microsoft.Crm.Workflow.ObjectModel.$JT.$3Xp = function() {};
Microsoft.Crm.Workflow.ObjectModel.$JT.$3Xp.prototype = { $2I: null, $22n: null };
Microsoft.Crm.Workflow.ObjectModel.$JV = function() { this.dict = {} };
Microsoft.Crm.Workflow.ObjectModel.$JV.prototype = { $DP: function(n) { delete this.dict[n] } };
Microsoft.Crm.Workflow.ObjectModel.$I = function() {};
Microsoft.Crm.Workflow.ObjectModel.$I.$1g = function(n, t, i) {
    var r = JSON.stringify(t);
    return(i ? "," : "") + Microsoft.Crm.Workflow.ObjectModel.$I.$2IM(n) + ":" + r
};
Microsoft.Crm.Workflow.ObjectModel.$I.$2IM = function(n) { return'"' + n + '"' };
Microsoft.Crm.Workflow.ObjectModel.$I.$4X = function(n, t, i) {
    return(i ? "," : "") + Microsoft.Crm.Workflow.ObjectModel.$I.$2IM(n) + ":" + t
};
Microsoft.Crm.Workflow.ObjectModel.$I.$HE = function(n) { return n ? "true" : "false" };
Microsoft.Crm.Workflow.ObjectModel.$Bd = function() {};
Microsoft.Crm.Workflow.ObjectModel.$Bd.$B = function(n) {
    switch (n) {
    default:
        return new Microsoft.Crm.Workflow.ObjectModel.$JG(n)
    }
};
Microsoft.Crm.Workflow.ObjectModel.$JL = function() {};
Microsoft.Crm.Workflow.ObjectModel.$JG = function(n) {
    this.$1sP = !1;
    this.$24F = !1;
    this.$3Lg();
    this.$3Lf();
    this.$2UA = 4;
    this.$38 = n;
    this.$2NO = 0
};
Microsoft.Crm.Workflow.ObjectModel.$JG.prototype = {
    set_$3UX: function(n) { return n || (n = ""), this.$2YP = n, n },
    $3Lg: function() { this.$21Y = 0 },
    $3Lf: function() {
        this.$21X = 0;
        this.set_$3UX("")
    },
    $3Qi: function() {
        this.$1sP = !1;
        this.$21Y = 2;
        this.$21X = 2
    },
    $1sP: !1,
    $21Y: 0,
    $21X: 0,
    $2YP: null,
    $24F: !1,
    $2UA: 0,
    $38: 0,
    $2NO: 0
};
Microsoft.Crm.Workflow.ObjectModel.$9y = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$9y.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "CustomJavascriptStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$9y.prototype = {
    javascript: null,
    apply: function(n) { n.$3WV(this) },
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("javascript", this.javascript, !0)), n.append("}"), n
            .toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.javascript = t.javascript
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Ew = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$Ew.initializeBase(this);
    this.__class = "SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel";
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.set_propertySpec(t)
};
Microsoft.Crm.Workflow.ObjectModel.$Ew.prototype = {
    get_propertySpec: function() { return this.specification },
    set_propertySpec: function(n) { return this.specification = n, n },
    get_entity: function() { return this.entity },
    set_entity: function(n) { return this.entity = n, n },
    apply: function(n) { n.$3Wk(this) },
    specification: null,
    entity: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y
            .call(this)), this.specification &&
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("specification", this.specification.$2Y(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n.append("}"), n
            .toString()
    },
    $AD: function() {
        Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$AD.call(this);
        this.specification && this.specification.$AD(this.$6x);
        this.entity.$AD(this.$6x)
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class);
            this.get_entity().$4H(t.entity);
            this.specification = new Microsoft.Crm.Workflow.Expressions.$Jp("", null);
            this.specification.$4H(t.specification)
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$SS = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$SS.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "SetDefaultValueStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.set_propertySpec(t)
};
Microsoft.Crm.Workflow.ObjectModel.$SS.prototype = {
    get_propertySpec: function() { return this.specification },
    set_propertySpec: function(n) { return this.specification = n, n },
    get_entity: function() { return this.entity },
    set_entity: function(n) { return this.entity = n, n },
    apply: function(n) { n.$3Wl(this) },
    specification: null,
    entity: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("specification", this.specification.$2Y(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n.append("}"), n
            .toString()
    },
    $AD: function() {
        Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$AD.call(this);
        this.specification.$AD(this.$6x);
        this.entity.$AD(this.$6x)
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class);
            this.get_entity().$4H(t.entity);
            this.specification = new Microsoft.Crm.Workflow.Expressions.$Jp("", null);
            this.specification.$4H(t.specification)
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Qz = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Qz.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$Qz.prototype = {
    apply: function(n) { n.$3Wm(this) },
    controlId: null,
    controlType: null,
    isReadOnly: !1,
    entity: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlId", this.controlId, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlType", this.controlType, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("isReadOnly", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isReadOnly), !0)),
            this.entity && n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n
                .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.controlId = t.controlId;
            this.controlType = t.controlType;
            this.isReadOnly = t.isReadOnly;
            t.entity &&
                (this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class), this.entity.$4H(t.entity))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Pz = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Pz.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$Pz.prototype = {
    apply: function(n) { n.$3Wn(this) },
    controlId: null,
    controlType: null,
    requiredLevel: 0,
    entity: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlId", this.controlId, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlType", this.controlType, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("requiredLevel", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.requiredLevel), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n.append("}"), n
            .toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.requiredLevel = t.requiredLevel;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class);
            this.entity.$4H(t.entity);
            this.controlId = t.controlId;
            this.controlType = t.controlType
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Px = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Px.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.actionSteps = new Microsoft.Crm.Workflow.ObjectModel.$JF;
    this.$9z(n.$9t());
    this.__class = "SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$Px.prototype = {
    get_ActionSteps: function() { return this.actionSteps },
    set_ActionSteps: function(n) { return this.actionSteps = n, n },
    apply: function(n) { n.$3Wo(this) },
    controlId: null,
    entity: null,
    level: null,
    actionSteps: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("actionSteps", this.actionSteps.$2Y(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("controlId", this.controlId, !0)), this.entity &&
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("level", this.level, !0)), n.append("}"), n.toString()
    },
    $AD: function() {
        var t, n;
        if (Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$AD.call(this), this
            .actionSteps)
            for (t = 0;
                t < this.actionSteps.get_Count();
                t++
            ) n = this.actionSteps.get_$H(t), n.set_$HY(this), n.$6x.stepDictionary.set_$H(n.id, n), n.$AD()
    },
    $4H: function(n) {
        var t, i, r, u;
        if (n) {
            if (Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n), t = n, t
                .actionSteps)
                for (i = 0;
                    i < t.actionSteps.list.length;
                    i++
                )
                    r = t.actionSteps.list[i], u = Microsoft.Crm.Workflow.ObjectModel.$1T.$1Ni(r.__class), u
                        .$4H(r), this.actionSteps.$2e(u);
            this.controlId = t.controlId;
            t.entity &&
                (this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class), this.entity.$4H(t.entity));
            this.level = t.level
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Q3 = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Q3.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "SetNextStageStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$Q3.prototype = {
    apply: function(n) { n.$3Wp(this) },
    stageId: null,
    parentStageId: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("stageId", this.stageId, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("parentStageId", this.parentStageId, !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.stageId = t.stageId;
            this.parentStageId = t.parentStageId
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Q4 = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Q4.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$Q4.prototype = {
    apply: function(n) { n.$3Wq(this) },
    controlId: null,
    controlType: null,
    isVisible: !1,
    entity: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlId", this.controlId, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("controlType", this.controlType, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("isVisible", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isVisible), !0)),
            this.entity && n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n
                .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.controlId = t.controlId;
            this.controlType = t.controlType;
            this.isVisible = t.isVisible;
            t.entity &&
                (this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class), this.entity.$4H(t.entity))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Q1 = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Q1.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.__class = "QueryStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$Q1.prototype = {
    apply: function(n) { n.$3Wg(this) },
    fetchExpression: null,
    fetchCount: 0,
    attributeList: null,
    entityName: null,
    originalFetchXml: "",
    originalLayoutXml: "",
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y
            .call(this)), this.fetchExpression &&
            n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("fetchExpression", this.fetchExpression.$2Y(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("fetchCount", this.fetchCount + "", !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("attributeList", this.attributeList, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("entityName", this.entityName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("originalFetchXml", this.originalFetchXml, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("originalLayoutXml", this.originalLayoutXml, !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            t.fetchExpression &&
            (this.fetchExpression = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.fetchExpression.__class), this
                .fetchExpression.$4H(t.fetchExpression));
            t.fetchCount && (this.fetchCount = Number.parseInvariant(n.fetchCount));
            t.attributeList && (this.attributeList = t.attributeList);
            t.entityName && (this.entityName = t.entityName);
            t.originalFetchXml && (this.originalFetchXml = t.originalFetchXml);
            t.originalLayoutXml && (this.originalLayoutXml = t.originalLayoutXml)
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Q2 = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Q2.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.__class = "RollupRuleStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$Q2.prototype = {
    apply: function(n) { n.$3Wj(this) },
    hierarchicalRelationshipName: null,
    sourceFilter: null,
    targetRelationship: null,
    targetRelationshipLinked: null,
    targetFilter: null,
    targetLinkedFilter: null,
    aggregate: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y
                .call(this)), this.sourceFilter &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("sourceFilter", this.sourceFilter.$2Y(), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("hierarchicalRelationshipName", this.hierarchicalRelationshipName, !0)),
            this.targetFilter &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("targetFilter", this.targetFilter.$2Y(), !0)),
            this.targetRelationship &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("targetRelationship", this.targetRelationship.$2Y(), !0)),
            this.targetLinkedFilter &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("targetLinkedFilter", this.targetLinkedFilter.$2Y(), !0)),
            this.targetRelationshipLinked &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("targetRelationshipLinked", this.targetRelationshipLinked.$2Y(), !0)),
            this
                .aggregate &&
                n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("aggregate", this.aggregate.$2Y(), !0)), n
                .append("}"), n.toString()
    },
    $AD: function() {
        Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$AD.call(this);
        this.sourceFilter && this.sourceFilter.$AD(this.$6x);
        this.targetFilter && this.targetFilter.$AD(this.$6x);
        this.targetRelationship && this.targetRelationship.$AD(this.$6x);
        this.targetLinkedFilter && this.targetLinkedFilter.$AD(this.$6x);
        this.targetRelationshipLinked && this.targetRelationshipLinked.$AD(this.$6x);
        this.aggregate && this.aggregate.$AD(this.$6x)
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.hierarchicalRelationshipName = t.hierarchicalRelationshipName;
            t.sourceFilter &&
            (this.sourceFilter = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.sourceFilter.__class), this
                .sourceFilter.$4H(t.sourceFilter));
            t.targetRelationship &&
            (this.targetRelationship = Microsoft.Crm.Workflow.ObjectModel.$1T
                .$Uw(t.targetRelationship.__class), this.targetRelationship.$4H(t.targetRelationship));
            t.targetFilter &&
            (this.targetFilter = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.targetFilter.__class), this
                .targetFilter.$4H(t.targetFilter));
            t.targetRelationshipLinked &&
            (this.targetRelationshipLinked = Microsoft.Crm.Workflow.ObjectModel.$1T
                .$Uw(t.targetRelationshipLinked.__class), this.targetRelationshipLinked
                .$4H(t.targetRelationshipLinked));
            t.targetLinkedFilter &&
            (this.targetLinkedFilter = Microsoft.Crm.Workflow.ObjectModel.$1T
                .$FQ(t.targetLinkedFilter.__class), this.targetLinkedFilter.$4H(t.targetLinkedFilter));
            t.aggregate &&
            (this.aggregate = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.aggregate.__class), this.aggregate
                .$4H(t.aggregate))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$5q = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$5q.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    Microsoft.Crm.Workflow.Utils.$k.$7b(t, "stageName");
    this.__class = "StageStep:#Microsoft.Crm.Workflow.ObjectModel";
    this.$9z(n.$9t());
    this.set_$2X0(t)
};
Microsoft.Crm.Workflow.ObjectModel.$5q.prototype = {
    get_$2X0: function() { return this.description },
    set_$2X0: function(n) { return this.description = n, n },
    $jx: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$C3(!Microsoft.Crm.Workflow.ObjectModel.$6l.isInstanceOfType(n),
            "Cannot add ConditionBranchStep directly to StageStep. It should be first added to ConditionStep.");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    apply: function(n) { n.$3Wr(this) },
    stageId: null,
    nextStageId: null,
    stageCategory: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), this.$1N3(n), n
            .append("}"), n.toString()
    },
    $1N3: function(n) {
        n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("stageId", this.stageId, !0));
        n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("nextStageId", this.nextStageId, !0));
        n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("stageCategory", this.stageCategory, !0))
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$4H.call(this, n);
            var t = n;
            this.stageId = Microsoft.Crm.Workflow.Utils.$d.$94(t.stageId);
            this.nextStageId = Microsoft.Crm.Workflow.Utils.$d.$94(t.nextStageId);
            this.stageCategory = t.stageCategory
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$JH = function() { this.stepLabels = new Microsoft.Crm.Workflow.ObjectModel.$JE };
Microsoft.Crm.Workflow.ObjectModel.$JH.prototype = {
    get_Id: function() { return this.id },
    set_Id: function(n) { return this.id = n, n },
    get_Name: function() { return this.name },
    set_Name: function(n) { return Microsoft.Crm.Workflow.Utils.$k.$7b(n, "Name"), this.name = n, n },
    get_Description: function() { return this.description },
    set_Description: function(n) { return this.description = n, n },
    get_$HY: function() { return this.$62 },
    set_$HY: function(n) {
        return Microsoft.Crm.Workflow.Utils.$k.$7b(n, "Parent"), this.$62 = n, this.set_$bD(this.get_$HY().$6x), n
    },
    set_$bD: function(n) {
        return(Microsoft.Crm.Workflow.Utils.$k.$7b(n, "Workflow"), this.$6x && this.$6x !== n) ? n : (this.$6x = n, n)
    },
    $2bq: function(n, t) {
        Microsoft.Crm.Workflow.Utils.$k.$7b(t, "newStep");
        Microsoft.Crm.Workflow.Utils.$k.$C3(!!this.get_$HY(), "Parent step is null");
        Microsoft.Crm.Workflow.Utils.$k.$C3(Microsoft.Crm.Workflow.ObjectModel.$9g.isInstanceOfType(this.get_$HY()),
            "Parent step is not a Composite Step");
        var i = this.get_$HY();
        i.$mg(this, n, t)
    },
    get_$21a: function() { return this.__class.substr(0, this.__class.indexOf(":#")) },
    $2m2: function() { this.$6x && (this.$6x = null) },
    $9z: function(n) {
        this.id = Object.getType(this).getName() + n;
        this.name = "Step_" + n
    },
    description: null,
    id: null,
    name: null,
    stepLabels: null,
    $62: null,
    $6x: null,
    __class: "StepBase:#Microsoft.Crm.Workflow.ObjectModel",
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("__class", this.__class, !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("id", this.id.toString(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("description", this.description, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("name", this.name, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("stepLabels", this.stepLabels.$2Y(), !0)), n.toString()
    },
    $2qZ: function() { this.$AD() },
    $AD: function() { this.set_$bD(this.get_$HY().$6x) },
    $4H: function(n) {
        var t, i, u, r;
        if (n)
            for (t = n, this.id = t.id, this.description = t.description, this.name = t.name, i = 0;
                i < t.stepLabels.list.length;
                i++)
                u = t.stepLabels.list[i], r = new Microsoft.Crm.Workflow.ObjectModel.$JD, r.$4H(u), this.stepLabels
                    .$2e(r)
    }
};
Microsoft.Crm.Workflow.ObjectModel.$Pt = function() { Microsoft.Crm.Workflow.ObjectModel.$Pt.initializeBase(this) };
Microsoft.Crm.Workflow.ObjectModel.$JF = function() {
    this.$23 = new Sys.EventHandlerList;
    this.list = []
};
Microsoft.Crm.Workflow.ObjectModel.$JF.prototype = {
    $1GR: function(n) {
        if (this.$23) {
            var t = this.$23.getHandler("StepCollectionChanged");
            t && t(this, n)
        }
    },
    $1oy: function(n, t) {
        var i = new(Microsoft.Crm.Workflow.ObjectModel.$C6.$$(Microsoft.Crm.Workflow.ObjectModel.$JH));
        return i.set_$1MT(n), i.set_$3a4(t), i.set_$3a6(t), i
    },
    $2e: function(n) {
        Array.add(this.list, n);
        this.$1GR(this.$1oy(0, n))
    },
    $DP: function(n) {
        var i = Array.indexOf(this.list, n), t;
        this.$3Kl(n);
        t = this.$1oy(1, n);
        t.set_$3a8(i);
        this.$1GR(t)
    },
    $3Kl: function(n) { Array.remove(this.list, n) },
    get_Count: function() { return this.list.length },
    get_$H: function(n) { return this.getStep(n) },
    getStep: function(n) { return this.list[n] },
    $35G: function(n) { return Array.indexOf(this.list, n) },
    $mg: function(n, t) {
        Array.insert(this.list, n, t);
        var i = this.$1oy(0, t);
        i.set_$3aA(n);
        this.$1GR(i)
    },
    $2Y: function() {
        var n = new Sys.StringBuilder, t;
        if (n.append('{"list":['), this.get_Count() > 0)
            for (n.append(this.get_$H(0)
                    .$2Y()), t = 1;
                t < this.get_Count();
                t++) n.append(","), n.append(this.get_$H(t).$2Y());
        return n.append("]}"), n.toString()
    }
};
Microsoft.Crm.Workflow.ObjectModel.$C6 = function() {
    Microsoft.Crm.Workflow.ObjectModel.$C6.$$(this.$$gta["Microsoft.Crm.Workflow.ObjectModel.$C6"].TViewModel)
        .initializeBase(this)
};
Microsoft.Crm.Workflow.ObjectModel.$C6.$$ = function(n) {
    var t = "$C6$" + n.getName().replace(/\./g, "_"), r, u, f, i;
    if (!Microsoft.Crm.Workflow.ObjectModel[t]) {
        r = Microsoft.Crm.Workflow.ObjectModel[t] = function() {
            var i, t;
            for ((this.$$gta = this
                    .$$gta ||
                    {})["Microsoft.Crm.Workflow.ObjectModel.$C6"] = { TViewModel: n }, i = [], t = 0;
                t < arguments.length;
                ++t) i[t] = arguments[t];
            Microsoft.Crm.Workflow.ObjectModel.$C6.apply(this, i)
        };
        r.registerClass("Microsoft.Crm.Workflow.ObjectModel." + t, Sys.EventArgs);
        u = Microsoft.Crm.Workflow.ObjectModel.$C6.prototype;
        for (f in u) i = { key: f, value: u[f] }, "constructor" !== i.key && (r.prototype[i.key] = i.value)
    }
    return Microsoft.Crm.Workflow.ObjectModel[t]
};
Microsoft.Crm.Workflow.ObjectModel.$C6.prototype = {
    $26: 0,
    set_$1MT: function(n) { return this.$26 = n, n },
    $Bw: null,
    set_$3a4: function(n) { return this.$Bw = n, n },
    set_$3a6: function(n) { return this.$Oc = n, n },
    set_$3a8: function(n) { return this.$2OC = n, n },
    set_$3aA: function(n) { return this.$2Nm = n, n },
    $Oc: null,
    $2OC: 0,
    $2Nm: 0
};
Microsoft.Crm.Workflow.ObjectModel.$QF = function() { Microsoft.Crm.Workflow.ObjectModel.$QF.initializeBase(this) };
Microsoft.Crm.Workflow.ObjectModel.$QF.prototype = {
    get_$H: function(n) { return this.dict[n] },
    set_$H: function(n, t) { return this.dict[n] = t, t }
};
Microsoft.Crm.Workflow.ObjectModel.$JD = function() {};
Microsoft.Crm.Workflow.ObjectModel.$JD.prototype = {
    labelId: null,
    languageCode: 0,
    description: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("labelId", this.labelId, !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("languageCode", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.languageCode), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("description", this.description, !0)), n.append("}"), n
            .toString()
    },
    $4H: function(n) {
        if (n) {
            var t = n;
            this.labelId = Microsoft.Crm.Workflow.Utils.$d.$94(t.labelId);
            this.description = t.description;
            this.languageCode = t.languageCode
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$JE = function() { this.list = [] };
Microsoft.Crm.Workflow.ObjectModel.$JE.prototype = {
    $2e: function(n) { Array.add(this.list, n) },
    get_$l: function() { return this.list.length },
    get_$H: function(n) { return this.list[n] },
    $2Y: function() {
        var n = new Sys.StringBuilder, t;
        if (n.append('{"list":['), this.get_$l() > 0)
            for (n.append(this.get_$H(0)
                    .$2Y()), t = 1;
                t < this.get_$l();
                t++) n.append(","), n.append(this.get_$H(t).$2Y());
        return n.append("]}"), n.toString()
    }
};
Microsoft.Crm.Workflow.ObjectModel.$QG = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$QG.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "workflowStep");
    this.$9z(n.$9t());
    this.status = 0;
    this.message = new Microsoft.Crm.Workflow.Expressions.$Q6(n, "", 14);
    this.__class = "StopWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel"
};
Microsoft.Crm.Workflow.ObjectModel.$QG.prototype = {
    apply: function(n) { n.$3Wt(this) },
    status: 0,
    message: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$2Y.call(this)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("status", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.status), !0)),
            this.message && n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("message", this.message.$2Y(), !0)), n
                .append("}"), n.toString()
    },
    $AD: function() {
        Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$AD.call(this);
        this.message && this.message.$AD(this.$6x)
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.ObjectModel.$JH.prototype.$4H.call(this, n);
            var t = n;
            this.status = parseInt(t.status);
            t.message &&
            (this.message = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.message.__class), this.message
                .$4H(t.message))
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$JJ = function() {};
Microsoft.Crm.Workflow.ObjectModel.$JJ.prototype = {
    _argumentTypeCode: 0,
    _argumentTypeDisplay: null,
    _argumentDirection: 0,
    _required: !1,
    _description: null,
    _name: null,
    _value: null,
    _target: !1,
    _entityName: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$I
            .$1g("_description", this._description, !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("_entityName", this._entityName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("_name", this._name, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("_required", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this._required), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("_target", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this._target), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("_argumentTypeCode", this._argumentTypeCode.toString(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("_argumentTypeDisplay", this._argumentTypeDisplay, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("_argumentDirection", Microsoft.Crm.Workflow.Utils.$d.$Cz(this._argumentDirection), !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        var t = n;
        this._description = t._description;
        this._entityName = t._entityName;
        this._name = t._name;
        this._required = t._required;
        this._target = t._target;
        this._argumentTypeCode = Number.parseInvariant(t._argumentTypeCode.toString());
        this._argumentTypeDisplay = t._argumentTypeDisplay;
        this._argumentDirection = t._argumentDirection
    }
};
Microsoft.Crm.Workflow.ObjectModel.$7B = function(n, t) {
    this._arguments = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Workflow.ObjectModel.$JJ));
    this.stepDictionary = new Microsoft.Crm.Workflow.ObjectModel.$QF;
    this.$22l = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Workflow.ObjectModel.$JJ));
    this.$22k = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Workflow.ObjectModel.$JJ));
    this.workflowEntityId = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    Microsoft.Crm.Workflow.ObjectModel.$7B.initializeBase(this);
    this.$36E(n, t, 0, 0)
};
Microsoft.Crm.Workflow.ObjectModel.$7B.prototype = {
    argumentsArray: null,
    $36E: function(n, t, i, r) {
        this.__class = "WorkflowStep:#Microsoft.Crm.Workflow.ObjectModel";
        this.primaryEntityName = n;
        this.nextStepIndex = 0;
        this.category = t;
        this.businessProcessType = r;
        this.mode = i;
        this.title = "";
        this.description = "";
        this.$9z(this.$9t());
        this.set_$bD(this);
        this.publicationParameters = Microsoft.Crm.Workflow.ObjectModel.$Bd.$B(t, i);
        t || i || this.publicationParameters.$3Qi()
    },
    $DP: function(n) {
        if (Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(n)) {
            var t = n;
            this.$3Ki(t)
        } else Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$DP.call(this, n)
    },
    $3Ki: function(n) {
        for (var u, f, e, t, i = null, r = 0; r < this.steps.get_Count(); r++)
            if (u = this.steps.get_$H(r), Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(u))
                if (f = u, f === n) break;
                else i = f;
        for (e = n.steps.get_Count(); e > 0;)
            t = n.steps.get_$H(0), n.steps.$DP(t), this.$6x.stepDictionary
                .$DP(t.id), i ? i.$jx(t) : this.$mg(n, 0, t), e = n.steps.get_Count();
        this.steps.$DP(n);
        this.$6x.stepDictionary.$DP(n.id)
    },
    $jx: function(n) {
        var t, i;
        for (Microsoft.Crm.Workflow.Utils.$k.$C3(!Microsoft.Crm.Workflow.ObjectModel.$6l.isInstanceOfType(n),
                "Cannot add a ConditionBranchStep to a WorkflowStep. It can only be added to a Condition Step."),
            Microsoft
                .Crm.Workflow.Utils.$k.$C3(!Microsoft.Crm.Workflow.ObjectModel.$7B.isInstanceOfType(n),
                    "Cannot add WorkflowStep to WorkflowStep."), Microsoft.Crm.Workflow.Utils.$k
                .$C3(!Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(n),
                    "Cannot add StageStep to WorkflowStep using this function. Please use InsertStageStep function"),
            t = 0;
            t < this.steps.get_Count();
            t++)
            i = this.steps.get_$H(t), Microsoft.Crm.Workflow.Utils.$k
                .$C3(!Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(i),
                    "Cannot add a step to workflow with workflowStep as a parent step since there exist at least one Stage step.");
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$jx.call(this, n)
    },
    apply: function(n) { n.$3Ww(this) },
    $9t: function() { return Microsoft.Crm.Workflow.Utils.$d.$2Cv("{0}", this.nextStepIndex++) },
    $305: function(n) {
        Microsoft.Crm.Workflow.Utils.$d.$1S(n) &&
            Microsoft.Crm.Workflow.Utils.$k.$p3("Variable name cannot be null or empty", "variableName");
        var t = Microsoft.Crm.Workflow.Utils.$d.$3Sa(n, "_", 4);
        return t.length === 1 && this.category === 3
            ? t[0]
            : (Microsoft.Crm.Workflow.Utils.$k.$C3(4 === t.length, "Invalid variable name format"), t[3])
    },
    primaryEntityName: null,
    nextStepIndex: 0,
    publicationParameters: null,
    isCrmUIWorkflow: !0,
    category: 0,
    businessProcessType: 0,
    mode: 0,
    title: null,
    formId: null,
    $IR: null,
    $2Y: function() {
        var n = new Sys.StringBuilder, i, t, r;
        for (n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$2Y.call(this)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("primaryEntityName", this.primaryEntityName, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("nextStepIndex", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.nextStepIndex), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$4X("isCrmUIWorkflow", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isCrmUIWorkflow), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("category", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.category), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("businessProcessType", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.businessProcessType), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("mode", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.mode), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("title", this.title, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("description", this.description, !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I
                    .$1g("workflowEntityId", this.workflowEntityId.toString(), !0)), n
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("formId", this.formId, !0)), this
                .argumentsArray = this
                ._arguments.toArray(), i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), t = 0;
            t < this.argumentsArray.length;
            t++) i.add(this.argumentsArray[t].$2Y());
        return r = "[" + Microsoft.Crm.Workflow.Utils.$d.$1sh(String, ",", i.toArray()) + "]", n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("argumentsArray", r, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("variables", this.$2Ud(!1), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("inputs", this.$2Ud(!0), !0)), n.append("}"), n.toString()
    },
    $2Ud: function(n) {
        var u = n ? this.$22k : this.$22l, f, r, i, t;
        if (!u) return null;
        for (f = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(String)), r = 0;
            r < u.get_Count();
            ++r)
            i = u.get_$H(r), t = new Sys.StringBuilder, t.append("{"), t
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("name", i._name, !1)), t
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("type", i._argumentTypeDisplay, !0)), t
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("type_code", i._argumentTypeCode.toString(), !0)), t
                .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("value", i._value.$2Y(), !0)), t.append("}"), f
                .add(t.toString());
        return"[" + Microsoft.Crm.Workflow.Utils.$d.$1sh(String, ",", f.toArray()) + "]"
    },
    $AD: function() {
        this.set_$bD(this);
        this.set_$HY(this);
        Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$AD.call(this)
    },
    $4H: function(n) {
        var t, l, e, a, o, s, u, i, v, y, h, c, f, r, p, w;
        if (n) {
            for (Microsoft.Crm.Workflow.ObjectModel.$9g.prototype.$4H.call(this, n), t = n, this.primaryEntityName = t
                    .primaryEntityName, this.nextStepIndex = t.nextStepIndex ? JSON.parse(t.nextStepIndex) : 0, this
                    .isCrmUIWorkflow = t.isCrmUIWorkflow, this.category = t.category ? JSON.parse(t.category) : 0, this
                    .businessProcessType = t.businessProcessType ? JSON.parse(t.businessProcessType) : 0, this
                    .mode = t.mode ? JSON.parse(t.mode) : 0, this.title = t.title, this.formId = t
                    .formId, t.workflowEntityId &&
                (this.workflowEntityId = Microsoft.Crm.Client.Core.Framework.Guid
                    .tryCreate(t.workflowEntityId.toString())), this._arguments = new(Microsoft.Crm.Client.Core
                    .Framework
                    .List$1.$$(Microsoft.Crm.Workflow.ObjectModel.$JJ)), l = new(Microsoft.Crm.Client.Core.Framework
                    .List$1
                    .$$(Microsoft.Crm.Workflow.ObjectModel.$JJ))(t.argumentsArray), e = 0;
                e < l.get_Count();
                e++) a = new Microsoft.Crm.Workflow.ObjectModel.$JJ, a.$4H(l.get_$H(e)), this._arguments.add(a);
            if (o = n.variables, o)
                for (s = 0; s < o.length; ++s)
                    u = o[s], i = new Microsoft.Crm.Workflow.ObjectModel.$JJ, i._name = u.name, v = u
                        .value, y = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(v.__class), y.$4H(v), i._value = y, i
                        ._argumentTypeCode = Number.parseInvariant(u.type_code), i._argumentTypeDisplay = u.type, this
                        .$22l.add(i);
            if (h = n.inputs, h)
                for (c = 0; c < h.length; ++c)
                    f = h[c], r = new Microsoft.Crm.Workflow.ObjectModel.$JJ, r._name = f.name, p = f
                        .value, w = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(p.__class), w.$4H(p), r._value = w, r
                        ._argumentTypeCode = Number.parseInvariant(f.type_code), r._argumentTypeDisplay = f.type, this
                        .$22k.add(r);
            this.$AD()
        }
    }
};
Microsoft.Crm.Workflow.ObjectModel.$QE = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$QE.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$QE.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$QJ = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$QJ.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$QJ.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$Pe = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Pe.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$Pe.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$MZ = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$MZ.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$MZ.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$Po = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Po.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$Po.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$Pm = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$Pm.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "waitStep");
    Microsoft.Crm.Workflow.Utils.$k.$7b(t, "timeoutExpression")
};
Microsoft.Crm.Workflow.ObjectModel.$Pm.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$Pp = function(n, t) {
    Microsoft.Crm.Workflow.ObjectModel.$Pp.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.$k.$7b(n, "waitStep");
    Microsoft.Crm.Workflow.Utils.$k.$7b(t, "conditionExpression")
};
Microsoft.Crm.Workflow.ObjectModel.$Pp.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$Pq = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Pq.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$Pq.prototype = { apply: function() {} };
Microsoft.Crm.Workflow.ObjectModel.$Ct = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$Ct.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$Ct.prototype = { apply: function() {}, activityInfo: null, outputs: null };
Microsoft.Crm.Workflow.ObjectModel.$MM = function(n) {
    Microsoft.Crm.Workflow.ObjectModel.$MM.initializeBase(this);
    this.$9z(n.$9t())
};
Microsoft.Crm.Workflow.ObjectModel.$MM.prototype = { apply: function() {} };
Type.registerNamespace("Microsoft.Crm.Client.Core.Models");
Microsoft.Crm.Client.Core.Models.$JC = function() {
    this.Text = "";
    this.HorizontalAlignment = "center";
    this.VerticalAlignment = null
};
Microsoft.Crm.Client.Core.Models.$J8 = function() {
    this.Enabled = !1;
    this.X = 0;
    this.Y = 0;
    this.Align = "left";
    this.VerticalAlign = "middle";
    this.LabelFormatter = null
};
Microsoft.Crm.Client.Core.Models.$J9 = function() {
    this.Value = 0;
    this.FormattedValue = null;
    this.Aggregators = null
};
Microsoft.Crm.Client.Core.Models.$JA = function() {
    this.Enabled = !1;
    this.Floating = !1
};
Microsoft.Crm.Client.Core.Models.$JW = function() {
    this.DataPoints = null;
    this.$1PW = null;
    this.ChartType = "line";
    this.YAxisNumber = 0;
    this.XAxisNumber = 0;
    this.Title = "";
    this.Color = "";
    this.BorderColor = "";
    this.BorderWidth = 0;
    this.CustomProperties = null
};
Microsoft.Crm.Client.Core.Models.$JX = function() {
    this.Values = null;
    this.Title = ""
};
Microsoft.Crm.Client.Core.Models.$JY = function() { this.Title = "" };
Microsoft.Crm.Client.Core.Models.IFormModel = function() {};
Microsoft.Crm.Client.Core.Models.IFormModel.registerInterface("Microsoft.Crm.Client.Core.Models.IFormModel");
Microsoft.Crm.Client.Core.Models.IRecordModel = function() {};
Microsoft.Crm.Client.Core.Models.IRecordModel.registerInterface("Microsoft.Crm.Client.Core.Models.IRecordModel");
Microsoft.Crm.Client.Core.Models.$G3 = function() {};
Microsoft.Crm.Client.Core.Models.$G3.registerInterface("Microsoft.Crm.Client.Core.Models.$G3");
Microsoft.Crm.Client.Core.Models.$G5 = function() {};
Microsoft.Crm.Client.Core.Models.$G5.registerInterface("Microsoft.Crm.Client.Core.Models.$G5");
Microsoft.Crm.Client.Core.Models.$G4 = function() {};
Microsoft.Crm.Client.Core.Models.$G4.registerInterface("Microsoft.Crm.Client.Core.Models.$G4");
Microsoft.Crm.Client.Core.Models.$8z = function() {};
Microsoft.Crm.Client.Core.Models.$8z.registerInterface("Microsoft.Crm.Client.Core.Models.$8z");
Microsoft.Crm.Client.Core.Models.$Ag = function() {};
Microsoft.Crm.Client.Core.Models.$Ag.registerInterface("Microsoft.Crm.Client.Core.Models.$Ag");
Microsoft.Crm.Client.Core.Models.$G8 = function() {};
Microsoft.Crm.Client.Core.Models.$G8.registerInterface("Microsoft.Crm.Client.Core.Models.$G8");
Microsoft.Crm.Client.Core.Models.$G9 = function() {};
Microsoft.Crm.Client.Core.Models.$G9.registerInterface("Microsoft.Crm.Client.Core.Models.$G9");
Microsoft.Crm.Client.Core.Models.IModel = function() {};
Microsoft.Crm.Client.Core.Models.IModel.registerInterface("Microsoft.Crm.Client.Core.Models.IModel");
Microsoft.Crm.Client.Core.Models.IMultipleEntityAttributeFormModel = function() {};
Microsoft.Crm.Client.Core.Models.IMultipleEntityAttributeFormModel
    .registerInterface("Microsoft.Crm.Client.Core.Models.IMultipleEntityAttributeFormModel");
Microsoft.Crm.Client.Core.Models.ICloneableModel = function() {};
Microsoft.Crm.Client.Core.Models.ICloneableModel.registerInterface("Microsoft.Crm.Client.Core.Models.ICloneableModel");
Microsoft.Crm.Client.Core.Models.IReferenceModel = function() {};
Microsoft.Crm.Client.Core.Models.IReferenceModel.registerInterface("Microsoft.Crm.Client.Core.Models.IReferenceModel");
Microsoft.Crm.Client.Core.Models.$JM = function(n, t, i, r, u, f, e, o) {
    this.handlers = n;
    this.eventArgs = t;
    this.details = f;
    this.$1An = i;
    this.$1Ao = r;
    this.runCompleteCallback = e;
    this.preRunCallback = o;
    this.scriptsToLoad = $0.$1(u) ? new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)) : u
};
Microsoft.Crm.Client.Core.Models.$JN = function(n, t) {
    this.$1Td = n;
    this.$VW = t
};
Microsoft.Crm.Client.Core.Models.ResourceStringModel = function() {};
Microsoft.Crm.Client.Core.Models.$G7 = function() {};
Microsoft.Crm.Client.Core.Models.$G7.registerInterface("Microsoft.Crm.Client.Core.Models.$G7");
Microsoft.Crm.Client.Core.Models.$Aq = function() {};
Microsoft.Crm.Client.Core.Models.$Aq.registerInterface("Microsoft.Crm.Client.Core.Models.$Aq");
Microsoft.Crm.Client.Core.Models.$FW = function() {};
Microsoft.Crm.Client.Core.Models.$FW.registerInterface("Microsoft.Crm.Client.Core.Models.$FW");
Microsoft.Crm.Client.Core.Models.$FV = function() {};
Microsoft.Crm.Client.Core.Models.$FV.registerInterface("Microsoft.Crm.Client.Core.Models.$FV");
Microsoft.Crm.Client.Core.Models.$8k = function() { Microsoft.Crm.Client.Core.Models.$8k.initializeBase(this) };
Microsoft.Crm.Client.Core.Models.$8k.prototype = { FiscalType: null, Year: 0 };
Microsoft.Crm.Client.Core.Models.$8j = function() { Microsoft.Crm.Client.Core.Models.$8j.initializeBase(this) };
Microsoft.Crm.Client.Core.Models.$8j.prototype = { FiscalType: null, Year: 0, Period: 0 };
Microsoft.Crm.Client.Core.Models.$7l = function() { Microsoft.Crm.Client.Core.Models.$7l.initializeBase(this) };
Microsoft.Crm.Client.Core.Models.$7l.prototype = { MinDate: null, MaxDate: null };
Microsoft.Crm.Client.Core.Models.$JB = function() {};
Microsoft.Crm.Client.Core.Models.$JB.prototype = { FieldName: null };
Microsoft.Crm.Client.Core.Models.$8i = function() { Microsoft.Crm.Client.Core.Models.$8i.initializeBase(this) };
Microsoft.Crm.Client.Core.Models.$8i.prototype = { Value: null };
Microsoft.Crm.Client.Core.Models.$TV = function() {
    Microsoft.Crm.Client.Core.Models.$TV.resolveInheritance();
    this.apcl = this.$2bt;
    this.rpcl = this.$3Ke;
    Microsoft.Crm.Client.Core.Models.$TV.initializeBase(this)
};
Microsoft.Crm.Client.Core.Models.$TV.prototype = {
    $qW: 0,
    get_$18d: function() { return this.$1C.get_$H(this.$qW) },
    get_ActiveModelIndex: function() { return this.$qW },
    set_ActiveModelIndex: function(n) { return this.$qW !== n && (this.$1uM(), this.$qW = n, this.$1uL()), n },
    $1uM: function() {
        this.$2PC("ActiveModelIndex");
        this.$2PC("ActiveModel")
    },
    $1uL: function() {
        this.$13V("ActiveModelIndex");
        this.$13V("ActiveModel")
    }
};
Microsoft.Crm.Client.Core.Models.ModelCollection = function() {
    this.$1C = new(Microsoft.Crm.Client.Core.Framework.$6C.$$(Microsoft.Crm.Client.Core.Models.IModel));
    Microsoft.Crm.Client.Core.Models.ModelCollection.initializeBase(this)
};
Microsoft.Crm.Client.Core.Models.ModelCollection
    .prototype = { get_$Bp: function() { return this.$1C }, $GN: function() { this.$1C = null } };
Microsoft.Crm.Client.Core.Models.$Qm = function() {
    this.pcgh = {};
    this.pcdh = {};
    Microsoft.Crm.Client.Core.Models.$Qm.resolveInheritance();
    this.get_Id = this.get_$1Z;
    this.GetValue = this.$b;
    this.SetValue = this.$m;
    this.get_ModelName = this.get_$HS;
    this.apcl = this.$2bt;
    this.rpcl = this.$3Ke;
    this.dispose = this.$69;
    Microsoft.Crm.Client.Core.Models.$Qm.initializeBase(this)
};
Microsoft.Crm.Client.Core.Models.$Qm.prototype = {
    add_$2Ng: function(n) {
        this.$23 || (this.$23 = new Sys.EventHandlerList);
        this.$23.addHandler("NavigationPropertyChanging", n)
    },
    remove_$2Ng: function(n) { this.$23 && this.$23.removeHandler("NavigationPropertyChanging", n) },
    add_$2Nf: function(n) {
        this.$23 || (this.$23 = new Sys.EventHandlerList);
        this.$23.addHandler("NavigationPropertyChanged", n)
    },
    remove_$2Nf: function(n) { this.$23 && this.$23.removeHandler("NavigationPropertyChanged", n) },
    $Ku: function(n) {
        var i = Microsoft.Crm.Client.Core.Models.DynamicModel.prototype.$Ku.call(this, n), t, u, r;
        return $0.$1(i) &&
        (t = this.$1TA(n), $0.$1(t) ||
        (n in this.pcdh ||
            (this.$2bd(n, t), u = this, r = function(t, i) { u.$33Y(n, i) }, this.pcdh[n] = r, t.add_$6s(r)), i = t
            .get_$18d())), i
    },
    $69: function() {
        var f = this.pcgh, i, n, e, r, u, t, o;
        for (i in f) n = { key: i, value: f[i] }, e = this.$1TA(n.key), e.remove_$2R1(n.value), delete this.pcgh[n.key];
        r = this.pcdh;
        for (u in r) t = { key: u, value: r[u] }, o = this.$1TA(t.key), o.remove_$6s(t.value), delete this.pcdh[t.key]
    },
    $33Y: function(n, t) {
        if (t === "ActiveModelIndex" && this.$23) {
            var i = this.$23.getHandler("NavigationPropertyChanged");
            i && i(this, n)
        }
    },
    $2bd: function(n, t) {
        var r = this, i = function(t, i) { r.$33Z(n, i) };
        this.pcgh[n] = i;
        t.add_$2R1(i)
    },
    $33Z: function(n, t) {
        if (t === "ActiveModelIndex" && this.$23) {
            var i = this.$23.getHandler("NavigationPropertyChanging");
            i && i(this, n)
        }
    }
};
Microsoft.Crm.Client.Core.Models.DynamicModel = function() {
    this.$5x = {};
    this.$1X2 = {};
    this.$1u4 = {};
    this.get_Id = this.get_$1Z;
    this.GetValue = this.$b;
    this.SetValue = this.$m;
    this.get_ModelName = this.get_$HS;
    this.apcl = this.$2bt;
    this.rpcl = this.$3Ke
};
Microsoft.Crm.Client.Core.Models.DynamicModel.prototype = {
    $11: null,
    $MZ: null,
    $23: null,
    $1Ft: null,
    add_$6s: function(n) {
        this.$23 || (this.$23 = new Sys.EventHandlerList);
        this.$23.addHandler("PropertyChanged", n)
    },
    remove_$6s: function(n) { this.$23 && this.$23.removeHandler("PropertyChanged", n) },
    get_$VX: function() {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), i = this.$5x, n, r;
        for (n in i) r = { key: n, value: i[n] }, t.add(r.key);
        return t.toArray()
    },
    get_$3Bx: function() {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), i = this.$1X2, n, r;
        for (n in i) r = { key: n, value: i[n] }, t.add(r.key);
        return t.toArray()
    },
    get_$1Z: function() { return this.$11 },
    get_$HS: function() { return this.$MZ },
    get_$Go: function() { return this.$MZ },
    $2bt: function() {
        throw Error
            .notImplemented("DynamicModel  does not support adding listeners for individual properties, use the PropertyChanged event instead.");
    },
    $3Ke: function() {
        throw Error
            .notImplemented("DynamicModel does not support removing listeners for individual properties, use the PropertyChanged event instead.");
    },
    $b: function(n) { return this.$5x[n] },
    $m: function(n, t) { this.$5x[n] !== t && (this.$5x[n] = t, this.$13V(n)) },
    $13V: function(n) {
        if (this.$23) {
            var t = this.$23.getHandler("PropertyChanged");
            t && t(this, n)
        }
    },
    $Ku: function(n) {
        if (!Microsoft.Crm.Client.Core.Framework.$3.$A(this.$MZ) && this.$MZ === n) return this;
        var t = this.$1X2[n];
        return $0.$1(t) && !$0.$1(this.$1Ft) && (t = this.$1Ft.$Ku(n)), t
    },
    $2Vz: function(n, t) { this.$1X2[n] = t },
    $1TA: function(n) {
        var t = this.$1u4[n];
        return $0.$1(t) && !$0.$1(this.$1Ft) && (t = this.$1Ft.$1TA(n)), t
    },
    $2Vy: function(n, t) { this.$1u4[n] = t }
};
Microsoft.Crm.Client.Core.Models.$BF = function() {};
Microsoft.Crm.Client.Core.Models.$BF.$2zL = function(n) {
    var i = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord)),
        t;
    if (!$0.$1(n) && (i.set_$H("?primary?", n), !$0.$1(n.$6E)))
        for (t = 0; t < n.$6E.$7R.length; t++) {
            var r = n.$6E.$7R[t], f = r.get_$4u(), e = r.get_$2M(), u = e.get_$H(0);
            $0.$1(u) || i.set_$H(f.$97, u)
        }
    return i
};
Microsoft.Crm.Client.Core.Models.$Sd = function() {
    this.apcl = this.$2bt;
    this.rpcl = this.$3Ke;
    Microsoft.Crm.Client.Core.Models.$Sd.initializeBase(this)
};
Microsoft.Crm.Client.Core.Models.$Sd.prototype = {
    $298: 1,
    $2LF: !0,
    $23: null,
    add_$2R1: function(n) {
        this.$23 || (this.$23 = new Sys.EventHandlerList);
        this.$23.addHandler("PropertyChanging", n)
    },
    remove_$2R1: function(n) { this.$23 && this.$23.removeHandler("PropertyChanging", n) },
    add_$6s: function(n) {
        this.$23 || (this.$23 = new Sys.EventHandlerList);
        this.$23.addHandler("PropertyChanged", n)
    },
    remove_$6s: function(n) { this.$23 && this.$23.removeHandler("PropertyChanged", n) },
    get_$Gx: function() { return this.$298 },
    get_$W4: function() { return this.$2LF },
    $2bt: function() {
        throw Error
            .notImplemented("PagedModelCollection does not support adding listeners for individual properties, use the PropertyChanged event instead.");
    },
    $3Ke: function() {
        throw Error
            .notImplemented("PagedModelCollection does not support removing listeners for individual properties, use the PropertyChanged event instead.");
    },
    $2PC: function(n) {
        if (this.$23) {
            var t = this.$23.getHandler("PropertyChanging");
            t && t(this, n)
        }
    },
    $13V: function(n) {
        if (this.$23) {
            var t = this.$23.getHandler("PropertyChanged");
            t && t(this, n)
        }
    },
    $GN: function() {
        Microsoft.Crm.Client.Core.Models.ModelCollection.prototype.$GN.call(this);
        this.$23 = null
    }
};
Microsoft.Crm.Client.Core.Models.$JO = function() { this.__type = undefined };
Microsoft.Crm.Client.Core.Models.$8a = function(n) {
    Microsoft.Crm.Client.Core.Models.$8a.initializeBase(this);
    this.$7D = n
};
Microsoft.Crm.Client.Core.Models.$8a.$B = function(n) { return new Microsoft.Crm.Client.Core.Models.$8a(n) };
Microsoft.Crm.Client.Core.Models.$8a.prototype = { $7D: null };
Microsoft.Crm.Client.Core.Models.$A8 = function(n, t) {
    this.$wx = t;
    this.$wy = n
};
Microsoft.Crm.Client.Core.Models.$A8.prototype = {
    $wx: null,
    get_emailLinkTrackingUrlPairs: function() { return this.$wx },
    set_emailLinkTrackingUrlPairs: function(n) { return this.$wx = n, n },
    $wy: null,
    get_emailTrackingPixelUrl: function() { return this.$wy },
    set_emailTrackingPixelUrl: function(n) { return this.$wy = n, n }
};
Microsoft.Crm.Client.Core.Models.$3E = function(n, t, i) {
    Microsoft.Crm.Client.Core.Models.$3E.initializeBase(this);
    this.$11 = n;
    this.$1Pt = t;
    this.$134 = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
    this.$nf = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
    this.$dW = {};
    this.$LF = {};
    this.$Me = {};
    this.$Og = {};
    this.$WU = {};
    this.$Qo = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
    this.$Zx = {};
    this.$nc = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
    $0.$1(i) ||
    (this.$nf.add(new Microsoft.Crm.Client.Core.Models.Constants.$Iu("Mscrm.BusinessRulesScript.Initialize")), this
        .$Pi = i);
    $0.$1(t) ||
        $0.$1(t.Properties) ||
        (this.$JX = t.Properties.Files, this.$Gd = t.Properties.StaticLibraries, this.$14e = t.Properties
            .ResourceStrings);
    var r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Fa.EditableGridControlPbl;
    $0.$1(r) ||
        !r.$Ai ||
        $0.$1(i) ||
        ($0.$1(this.$Gd) && (this.$Gd = []), this.$Gd.push("/_static/_common/scripts/BusinessRulesExecution.js"))
};
Microsoft.Crm.Client.Core.Models.$3E.$VF = function(n) {
    var t = {}, i = n;
    for (var r in i) {
        var u = { key: r, value: i[r] },
            f = u.value,
            e = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(f)
                .toArray();
        t[u.key] = e
    }
    return t
};
Microsoft.Crm.Client.Core.Models.$3E.prototype = {
    $11: null,
    $JX: null,
    $Gd: null,
    $14e: null,
    $134: null,
    $nf: null,
    $dW: null,
    $1UB: null,
    $LF: null,
    $1Di: null,
    $Me: null,
    $1UL: null,
    $Og: null,
    $Qo: null,
    $gK: null,
    $gL: null,
    $gJ: null,
    $1vI: null,
    $1Dj: null,
    $WU: null,
    $Zx: null,
    $1UM: null,
    $Pi: null,
    $nc: null,
    $1Pt: null,
    $1x: !1,
    $3LU: function() {
        this.$dW = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$1UB);
        this.$LF = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$1Di);
        this.$Me = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$1UL);
        this.$Qo = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$1Dj.toArray());
        this.$Zx = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$1UM);
        this.$gK = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
        this.$gL = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
        this.$gJ = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
        this.$1vI = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
        this.$nc = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))
    },
    $FD: function() {
        this.$1x = !1;
        this.$134 = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
        this.$nf = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
        $0.$1(this.$Pi) ||
            this.$nf.add(new Microsoft.Crm.Client.Core.Models.Constants.$Iu("Mscrm.BusinessRulesScript.Initialize"));
        this.$dW = {};
        this.$LF = {};
        this.$Me = {};
        this.$Og = {};
        this.$Qo = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
        this.$WU = {};
        this.$nc = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        this.$Zx = {}
    },
    $2Hs: function() { return this.$134 },
    $1pj: function() { return this.$nf },
    $2yk: function(n) {
        return $0.$1(this.$dW)
            ? null
            : new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$dW[n])
    },
    $2yl: function(n) {
        return $0.$1(this.$LF)
            ? null
            : new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$LF[n])
    },
    $315: function(n) {
        return $0.$1(n) || $0.$1(this.$WU)
            ? new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))
            : new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$WU[n])
    },
    $23w: function(n, t) {
        var i, r;
        i = new Microsoft.Crm.Client.Core.Models.Constants.$Iu;
        i.method = t;
        i.passExecutionContext = !0;
        r = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$WU[n]);
        r.add(i);
        this.$WU[n] = r.toArray()
    },
    $3KX: function(n, t) {
        for (var i = new(Microsoft.Crm.Client.Core.Framework.List$1
                     .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$WU[n]),
            r = 0;
            r < i.get_Count();
            r++)
            if (i.get_$H(r).method === t) {
                i.remove(i.get_$H(r));
                break
            }
        this.$WU[n] = i.toArray()
    },
    $115: function(n) {
        return $0.$1(this.$Me)
            ? null
            : $0.$1(n)
            ? this.$Me
            : new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Me[n])
    },
    $2A1: function(n) { this.$nc.contains(n) || this.$nc.add(n) },
    $1ld: function(n) { this.$nc.remove(n) },
    $383: function(n) { return this.$nc.contains(n) },
    $18r: function(n, t) {
        var i, r;
        i = new Microsoft.Crm.Client.Core.Models.Constants.$Iu;
        i.method = t;
        i.passExecutionContext = !0;
        r = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Me[n]);
        r.add(i);
        this.$Me[n] = r.toArray()
    },
    $1xb: function(n, t) {
        for (var i = new(Microsoft.Crm.Client.Core.Framework.List$1
                     .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Me[n]),
            r = 0;
            r < i.get_Count();
            r++)
            if (i.get_$H(r).method === t) {
                i.remove(i.get_$H(r));
                break
            }
        this.$Me[n] = i.toArray()
    },
    $st: function() { return this.$Qo },
    $1Mi: function(n) {
        var t = new Microsoft.Crm.Client.Core.Models.Constants.$Iu;
        t.method = n;
        t.passExecutionContext = !0;
        this.$Qo.add(t)
    },
    $1xc: function(n) {
        for (var t = 0; t < this.$Qo.get_Count(); t++)
            if (this.$Qo.get_$H(t).method === n) {
                this.$Qo.remove(this.$Qo.get_$H(t));
                break
            }
    },
    $317: function(n) {
        return $0.$1(this.$Zx)
            ? null
            : $0.$1(n)
            ? this.$Zx
            : new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Zx[n])
    },
    $2Ht: function() { return this.$gK },
    $2bl: function(n) {
        var t = new Microsoft.Crm.Client.Core.Models.Constants.$Iu;
        t.method = n;
        t.passExecutionContext = !0;
        this.$gK.add(t)
    },
    $3Ka: function(n) {
        for (var t = 0; t < this.$gK.get_Count(); t++)
            if (this.$gK.get_$H(t).method === n) {
                this.$gK.remove(this.$gK.get_$H(t));
                break
            }
    },
    $2Hu: function() { return this.$gL },
    $2bm: function(n) {
        var t = new Microsoft.Crm.Client.Core.Models.Constants.$Iu;
        t.method = n;
        t.passExecutionContext = !0;
        this.$gL.add(t)
    },
    $3Kb: function(n) {
        for (var t = 0; t < this.$gL.get_Count(); t++)
            if (this.$gL.get_$H(t).method === n) {
                this.$gL.remove(this.$gL.get_$H(t));
                break
            }
    },
    $1pk: function() { return this.$gJ },
    $2bj: function(n) {
        var t = new Microsoft.Crm.Client.Core.Models.Constants.$Iu;
        t.method = n;
        t.passExecutionContext = !1;
        this.$gJ.add(t)
    },
    $3KZ: function(n) {
        for (var t = 0; t < this.$gJ.get_Count(); t++)
            if (this.$gJ.get_$H(t).method === n) {
                this.$gJ.remove(this.$gJ.get_$H(t));
                break
            }
    },
    $17: function(n) {
        if (!$0.$1(n) && !$0.$1(n.Properties)) {
            this.$134.addRange(n.Properties.OnCloseHandlerNames);
            this.$nf.addRange(n.Properties.OnLoadHandlerNames);
            this.$Me = n.Properties.OnChangeHandlerNames;
            this.$Qo.addRange(n.Properties.OnSaveHandlerNames);
            var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Fa.EditableGridControlJsEvents;
            !$0.$1(t) &&
                t.$Ai &&
                (this.$2bk(n.Properties.OnRecordSelectHandlerNames), this.$Zx = n.Properties.OnRecordSaveHandlerNames);
            this.$WU = Microsoft.Crm.Client.Core.Models.$3E.$VF(n.Properties.OnClickHandlerNames);
            this.$Og = Microsoft.Crm.Client.Core.Models.$3E.$VF(n.Properties.OnTabStateChangeHandlerNames);
            this.$gK = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
            this.$gL = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
            this.$gJ = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu));
            this.$1vI = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))
        }
        this.$1UL = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$Me);
        this.$1Dj = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Qo.toArray());
        this.$1UM = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$Zx);
        this.$1x = !0
    },
    $3Qe: function(n) {
        var i, r, u, e, t, f;
        if (!$0.$1(n)) {
            i = n;
            for (r in i)
                u = { key: r, value: i[r] }, e = u.value, t = new Microsoft.Crm.Client.Core.Models.Constants.$Iu, t
                    .method = e, t.passExecutionContext = !1, f = new(Microsoft.Crm.Client.Core.Framework.List$1
                    .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu)), f.add(t), this.$dW[u.key] = f.toArray();
            this.$1UB = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$dW)
        }
    },
    $3R6: function(n) {
        var r, u, t, e, i, f;
        if (!$0.$1(n)) {
            r = n;
            for (u in r)
                t = { key: u, value: r[u] }, e = t.value, i = new Microsoft.Crm.Client.Core.Models.Constants.$Iu, i
                    .method = e, i
                    .passExecutionContext = !0, f = t.key in this.$LF
                    ? new(Microsoft.Crm.Client.Core.Framework.List$1
                        .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$LF[t.key])
                    : new(Microsoft.Crm.Client.Core.Framework.List$1
                        .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu)), f.add(i), this.$LF[t.key] = f.toArray();
            this.$1Di = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$LF)
        }
    },
    $2bk: function(n) {
        var i, r, t, u;
        if (!$0.$1(n)) {
            i = n;
            for (r in i)
                t = { key: r, value: i[r] }, t.key in this.$LF
                    ? (u = new(Microsoft.Crm.Client.Core.Framework.List$1
                        .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$LF[t.key]), u.addRange(t.value), this
                        .$LF[t.key] = u)
                    : this.$LF[t.key] = t.value;
            this.$1Di = Microsoft.Crm.Client.Core.Models.$3E.$VF(this.$LF)
        }
    },
    $318: function(n) {
        return $0.$1(this.$Og)
            ? null
            : $0.$1(n)
            ? this.$Og
            : new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Og[n])
    },
    $2bn: function(n, t) {
        var i, r, u;
        i = new Microsoft.Crm.Client.Core.Models.Constants.$Iu;
        i.method = t;
        i.passExecutionContext = !0;
        this.$Og && n in this.$Og
            ? (r = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Og[n]), r.add(i), this.$Og[n] = r.toArray())
            : (u = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu)), u
                .add(i), this.$Og[n] = u.toArray())
    },
    $3Kc: function(n, t) {
        for (var i = new(Microsoft.Crm.Client.Core.Framework.List$1
                     .$$(Microsoft.Crm.Client.Core.Models.Constants.$Iu))(this.$Og[n]),
            r = 0;
            r < i.get_Count();
            r++)
            if (i.get_$H(r).method === t) {
                i.remove(i.get_$H(r));
                break
            }
        this.$Me[n] = i.toArray()
    },
    $GN: function() {
        this.$134.clear();
        this.$nf.clear();
        this.$Qo.clear();
        this.$dW = null;
        this.$1UB = null;
        this.$LF = null;
        this.$1Di = null;
        this.$WU = null;
        this.$Og = null;
        this.$Me = null;
        this.$1UL = null;
        this.$Zx = null;
        this.$1UM = null;
        $0.$1(this.$1Dj) || this.$1Dj.clear();
        Microsoft.Crm.Client.Core.Framework.$BI.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.Models.EntityCountForAttributeValue = function(n, t, i, r) {
    this.$3R = n;
    this.$zv = t;
    this.$1n5 = i;
    this.$1Mq = r
};
Microsoft.Crm.Client.Core.Models.EntityCountForAttributeValue
    .prototype = {
        $3R: null,
        $zv: null,
        $1n5: null,
        $1Mq: null,
        get_Attribute: function() { return this.$3R },
        get_EntityCount: function() { return this.$zv },
        get_FormattedEntityCount: function() { return this.$1n5 },
        get_Aggregators: function() { return this.$1Mq }
    };
Microsoft.Crm.Client.Core.Models.$JR = function(n, t, i) {
    this.$2Z = n;
    this.$1b = t;
    this.$1LL = i
};
Microsoft.Crm.Client.Core.Models.$JR.prototype = {
    $2Z: null,
    get_Id: function() { return this.$2Z },
    set_Id: function(n) { return this.$2Z = n, n },
    $1b: null,
    get_Name: function() { return this.$1b },
    set_Name: function(n) { return this.$1b = n, n },
    $1LL: null,
    get_ModelName: function() { return this.$1LL },
    set_ModelName: function(n) { return this.$1LL = n, n }
};
Microsoft.Crm.Client.Core.Models.$T9 = function(n, t) {
    Microsoft.Crm.Client.Core.Models.$T9.initializeBase(this);
    this.$20e = n;
    this.$50 = t
};
Microsoft.Crm.Client.Core.Models.$T9.prototype = { $20e: null, $50: null };
Microsoft.Crm.Client.Core.Models.$30 = function() { Microsoft.Crm.Client.Core.Models.$30.initializeBase(this) };
Microsoft.Crm.Client.Core.Models.$30.$1St = function(n) {
    var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$Bm(n);
    return $0.$1(t) ? "" : t.$d
};
Microsoft.Crm.Client.Core.Models.$30.$333 = function(n) {
    return Microsoft.Crm.Client.Core.Framework.Utils.$E
        .$55(n, "node"), $0.$25(n.$O("Type")) ? -1 : parseInt(n.$O("Type").get_$r())
};
Microsoft.Crm.Client.Core.Models.$30.$2rP = function(n) {
    var t = new Microsoft.Crm.Client.Core.Models.$30;
    return t.set_$1uP($0.$25(n.$O("ObjectId")) ? "" : n.$O("ObjectId").get_$r()), t
        .$17w = $0.$25(n.$O("ProcessInstanceId")) ? "" : n.$O("ProcessInstanceId").get_$r(), t
        .$17v = $0.$25(n.$O("ProcessId")) ? "" : n.$O("ProcessId").get_$r(), t
        .set_$1wI($0.$25(n.$O("PinStatus")) ? !1 : Boolean.parse(n.$O("PinStatus").get_$r())), t
        .$A5 = $0.$25(n.$O("EntityTypeCode")) ? 0 : parseInt(n.$O("EntityTypeCode").get_$r()), t.$7v = Microsoft.Crm
        .Client.Core.Models.$30.$333(n), t.$KA = $0.$25(n.$O("LastAccessed"))
        ? new Date(0)
        : Xrm.Soap.CrmDateTimeSerializer.loadFromCrmSoap(n.$O("LastAccessed").get_$C6()), t
        .$4Z = $0.$25(n.$O("DisplayName")) ? "" : CrmEncodeDecode.CrmXmlDecode(n.$O("DisplayName").get_$r()), t
        .$pL = $0.$25(n.$O("Action")) ? "" : CrmEncodeDecode.CrmXmlDecode(n.$O("Action").get_$r()), t
        .$pn = $0.$25(n.$O("IconPath")) ? "" : CrmEncodeDecode.CrmXmlDecode(n.$O("IconPath").get_$r()), t
        .$5H = $0.$25(n.$O("Title")) ? "" : CrmEncodeDecode.CrmXmlDecode(n.$O("Title").get_$r()), t
};
Microsoft.Crm.Client.Core.Models.$30.$1n8 = function(n) {
    var t = new Microsoft.Crm.Client.Core.Models.$30,
        i = n.$N,
        r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$Bm(i.TypeCode),
        u,
        f;
    return t.set_$1uP("{" + i.Id.toString() + "}"), t.$17w = null, t.$17v = null, t.$aA = !1, t.$A5 = i.TypeCode, t
        .$7v = 0, t.$KA = new Date, t.$4Z = r.$1P, t.$pL = null, t
        .$pn = null, u = null, n.hasField(r.$63) && (f = n.getValue(r.$63), $0.$1(f) || (u = f.toString())), t
        .$5H = u, t
};
Microsoft.Crm.Client.Core.Models.$30.$3Am = function(n, t, i, r) {
    var u = new Microsoft.Crm.Client.Core.Models.$30;
    return u.set_$1uP(n), u.$17w = null, u.$17v = null, u.$aA = !1, u.$A5 = t, u.$7v = 1, u.$KA = new Date, u.$4Z = i, u
        .$pL = "viewtype=1039&sitemappath=SFA%7cSFA%7cnav_dummy", u.$pn = null, u.$5H = r, u
};
Microsoft.Crm.Client.Core.Models.$30.$28X = function(n) {
    var t, u;
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$1J2(n, "entity");
    var f = n.getValue("recentlyviewedxml"),
        e = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(f)),
        i = e.$5k(".//RecentlyViewedItem"),
        r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.$30));
    for (t = 0; t < i.get_$l(); t++) u = i.get_$H(t), r.add(Microsoft.Crm.Client.Core.Models.$30.$2rP(u));
    return r.toArray()
};
Microsoft.Crm.Client.Core.Models.$30.$28j = function(n, t) {
    var r, i, u;
    for (Microsoft.Crm.Client.Core.Framework.Utils.$E.$1W(n, "models"), r = new(Microsoft.Crm.Client.Core.Framework
            .List$1.$$(String)), i = 0;
        i < n.get_Count();
        i++) u = n.get_$H(i), r.add(u.$3OQ());
    return String.format('<RecentlyViewedEntityData etc="{0}">{1}<\/RecentlyViewedEntityData>',
        t,
        r.toArray().join(" "))
};
Microsoft.Crm.Client.Core.Models.$30.prototype = {
    $aA: !1,
    $g7: null,
    set_$1uP: function(n) { return this.$g7 = Microsoft.Crm.Client.Core.Framework.Guid.formatToUpper(n), n },
    $4Z: null,
    $5H: null,
    $pn: null,
    $pL: null,
    set_$1wI: function(n) { return n !== this.$aA && (this.$aA = n, this.$8("PinStatus")), n },
    $7v: 0,
    $A5: 0,
    $KA: null,
    $17w: null,
    $17v: null,
    $3OQ: function() {
        var n = Microsoft.Crm.Client.Core.Framework.$m.$2It(this.$KA),
            t = Xrm.Soap.CrmDateTimeSerializer.$21P(n),
            i = Xrm.Soap.CrmDateTimeSerializer.$1JD(t);
        return String
            .format("<RecentlyViewedItem><Type>{0}<\/Type><ObjectId>{1}<\/ObjectId><EntityTypeCode>{2}<\/EntityTypeCode><DisplayName>{3}<\/DisplayName><Title>{4}<\/Title><Action>{5}<\/Action><IconPath>{6}<\/IconPath><PinStatus>{7}<\/PinStatus><ProcessInstanceId>{8}<\/ProcessInstanceId><ProcessId>{9}<\/ProcessId><LastAccessed>{10}<\/LastAccessed><\/RecentlyViewedItem>", this.$7v, this.$g7, this.$A5, CrmEncodeDecode.CrmXmlEncode(this.$4Z), CrmEncodeDecode.CrmXmlEncode(this.$5H), CrmEncodeDecode.CrmXmlEncode(this.$pL), CrmEncodeDecode.CrmXmlEncode(this.$pn), this.$aA, this.$17w, this.$17v, i)
    }
};
Microsoft.Crm.Client.Core.Models.$Qb = function(n, t, i) {
    Microsoft.Crm.Client.Core.Models.$Qb.initializeBase(this, [n, t, i]);
    this.$18V = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.$JR))
};
Microsoft.Crm.Client.Core.Models.$Qb.prototype = {
    $18V: null,
    get_TreeData: function() { return this.$18V },
    set_TreeData: function(n) { return this.$18V = n, n }
};
Microsoft.Crm.Client.Core.Models.$48 = function(n, t, i, r, u, f) {
    var e, s, h;
    this.get_Id = this.get_$1Z;
    this.get_ModelName = this.get_$HS;
    Microsoft.Crm.Client.Core.Models.$48.resolveInheritance();
    this.apcl = this.$2bt;
    this.rpcl = this.$3Ke;
    this.get_$Uo = this.get_ActionableIdentifier;
    this.get_$Qf = this.get_NamedReference;
    Microsoft.Crm.Client.Core.Models.$48.initializeBase(this, [t, r, u, {}]);
    this.$Ft = t;
    this.$J = i;
    this.$20z = n;
    this.$O5 = u;
    this.$Kd = f;
    this.$4c = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Models.$O));
    for (var c = f
                 .get_$396(),
        l = c.length,
        o = 0;
        o < l;
        ++o)
        e = c[o], s = f.get_$H(e), $0.$1(s) ||
        (h = Microsoft.Crm.Client.Core.Models.$22
            .$B(this, e, s), e === "?primary?" ? this.$3D = h : this.$4c.set_$H(e, h))
};
Microsoft.Crm.Client.Core.Models.$48.$tC = function(n, t, i, r, u) {
    return new Microsoft.Crm.Client.Core.Models.$48(n, t, i, r.get_$396(), r, u)
};
Microsoft.Crm.Client.Core.Models.$48.prototype = {
    $Ft: null,
    $J: null,
    $4c: null,
    $3D: null,
    $aj: 0,
    $GP: 0,
    $20z: null,
    isDirtySetByClient: 0,
    $mJ: !1,
    $O5: null,
    $Kd: null,
    get_$1Z: function() { return this.$3D.get_$1Z() },
    get_$VX: function() { return null },
    get_$HS: function() { return this.$Ft.toString() },
    get_$Go: function() { return this.$Ft.toString() },
    get_$1N: function() { return this.$3D },
    get_$3JO: function() { return this.$4c },
    get_isDirtySetByClient: function() { return this.isDirtySetByClient },
    set_isDirtySetByClient: function(n) { return this.isDirtySetByClient = n, n },
    get_ActionableIdentifier: function() { return this.$3D.get_$Uo() },
    get_NamedReference: function() { return this.$3D.get_$Qf() },
    get_$1DS: function() { return this.$mJ },
    set_$1DS: function(n) { return this.$mJ = n, n },
    GetValue: function(n) {
        var r = Microsoft.Crm.Client.Core.Models.$z.$6t(n), t = n.split(":"), i;
        if (t.length !== 2 || $0.$1(this.$4c.get_$H(t[0]))) {
            if (this.$HP(n)) return i = n.split("]"), this.$RS[i[1]];
            if (!$0.$1(this.$3D)) return this.$3D.GetValue(n)
        } else return this.$4c.get_$H(t[0]).GetValue(t[1]);
        return null
    },
    SetValue: function(n, t, i, r) {
        var u = n.split(":"), e = n.split("]"), f;
        this.$HP(n)
            ? this.$1zw(n, t, i, r)
            : u.length === 2
            ? $0.$1(this.$4c.get_$H(u[0])) || (f = u[0], this.$4c.get_$H(f).SetValue(u[1], t))
            : $0.$1(this.$3D) || this.$3D.SetValue(n, t, i, r)
    },
    $l1: function() {
        var r, t;
        if ($0.$1(this.$3D) || this.$3D.discardChanges(), !$0
            .$1(this.$4c))
            for (var i = this.$4c
                         .get_$396(),
                u = i.length,
                n = 0;
                n < u;
                ++n) r = i[n], t = this.$4c.get_$H(r), $0.$1(t) || t.discardChanges()
    },
    $F6: function() {
        var i;
        if (this.isDirtySetByClient) return this.isDirtySetByClient === 1 ? !0 : !1;
        if (this.get_$1ik().get_Count() > 0 || this.$3D.$F6()) return!0;
        for (var t = this.$4c
                     .get_$396(),
            r = t.length,
            n = 0;
            n < r;
            ++n) if (i = t[n], this.$4c.get_$H(i).$F6()) return!0;
        return!1
    },
    $3LJ: function() {
        var i;
        this.$3D.$M.resetChanges();
        for (var t = this.$4c
                     .get_$396(),
            r = t.length,
            n = 0;
            n < r;
            ++n) i = t[n], this.$4c.get_$H(i).$M.resetChanges()
    },
    $3JZ: function() {
        var i = this.$3D.$M, r, n, t;
        if (!$0.$1(i) && !$0.$1(i.$6E))
            for (r = 0; r < i.$6E.$7R.length; r++)
                n = i.$6E.$7R[r], t = n.get_$2M(), !$0.$1(t) &&
                    this.$4c.$3ZW(n.get_$4u().$97) &&
                    (t.get_count()
                        ? t.get_entities()[0] = this.$4c.get_$H(n.get_$4u().$97).$M
                        : t.add(this.$4c.get_$H(n.get_$4u().$97).$M));
        this.$3D.$M.$N.LogicalName === "appointment" && this.$3D.$M.markFieldChanged("subject")
    },
    $2zp: function(n, t, i) {
        var r = n.split(":"),
            f = n.split("]"),
            e = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Models.Validation.$7S,
                Microsoft.Crm.Client.Core.Framework.$4),
            u;
        if (this.$HP(n)) return Microsoft.Crm.Client.Core.Models.$6U.prototype.$2zp.call(this, f[1], t, i);
        if (r.length === 2) {
            if (!$0.$1(this.$4c.get_$H(r[0]))) return u = r[0], this.$4c.get_$H(u).$2zp(r[1], t, i)
        } else if (!$0.$1(this.$3D)) return this.$3D.$2zp(n, t, i);
        return e
    },
    $2HC: function(n) {
        var t = n.split(":"), r = n.split("]"), i;
        if (this.$HP(n)) Microsoft.Crm.Client.Core.Models.$6U.prototype.$2HC.call(this, r[1]);
        else if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).$2HC(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.$2HC(n);
        return 0
    },
    $2HE: function(n) {
        var t = n.split(":"), r = n.split("]"), i;
        if (this.$HP(n)) Microsoft.Crm.Client.Core.Models.$6U.prototype.$2HE.call(this, r[1]);
        else if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).$2HE(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.$2HE(n);
        return 0
    },
    $2HF: function(n) {
        var t = n.split(":"), r = n.split("]"), i;
        if (this.$HP(n)) Microsoft.Crm.Client.Core.Models.$6U.prototype.$2HF.call(this, r[1]);
        else if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).$2HF(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.$2HF(n);
        return 0
    },
    $3Rk: function(n, t) {
        var i = n.split(":"), u = n.split("]"), r;
        this.$HP(n)
            ? Microsoft.Crm.Client.Core.Models.$6U.prototype.$3Rk.call(this, u[1], t)
            : i.length === 2
            ? $0.$1(i[0]) || (r = i[0], this.$4c.get_$H(r).$3Rk(i[1], t))
            : $0.$1(this.$3D) || this.$3D.$3Rk(n, t)
    },
    $3Rh: function(n, t) {
        var i = n.split(":"), u = n.split("]"), r;
        this.$HP(n)
            ? Microsoft.Crm.Client.Core.Models.$6U.prototype.$3Rh.call(this, u[1], t)
            : i.length === 2
            ? $0.$1(i[0]) || (r = i[0], this.$4c.get_$H(r).$3Rh(i[1], t))
            : $0.$1(this.$3D) || this.$3D.$3Rh(n, t)
    },
    $3Rj: function(n, t) {
        var i = n.split(":"), u = n.split("]"), r;
        this.$HP(n)
            ? Microsoft.Crm.Client.Core.Models.$6U.prototype.$3Rj.call(this, u[1], t)
            : i.length === 2
            ? $0.$1(i[0]) || (r = i[0], this.$4c.get_$H(r).$3Rj(i[1], t))
            : $0.$1(this.$3D) || this.$3D.$3Rj(n, t)
    },
    $3Rg: function(n, t) {
        var i = n.split(":"), u = n.split("]"), r;
        this.$HP(n)
            ? Microsoft.Crm.Client.Core.Models.$6U.prototype.$3Rg.call(this, u[1], t)
            : i.length === 2
            ? $0.$1(i[0]) || (r = i[0], this.$4c.get_$H(r).$3Rg(i[1], t))
            : $0.$1(this.$3D) || this.$3D.$3Rg(n, t)
    },
    $3Ri: function(n, t) {
        var i = n.split(":"), u = n.split("]"), r;
        this.$HP(n)
            ? Microsoft.Crm.Client.Core.Models.$6U.prototype.$3Ri.call(this, u[1], t)
            : i.length === 2
            ? $0.$1(i[0]) || (r = i[0], this.$4c.get_$H(r).$3Ri(i[1], t))
            : $0.$1(this.$3D) || this.$3D.$3Ri(n, t)
    },
    $2zj: function(n) {
        var t = n.split(":"),
            r = n.split("]"),
            u = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.$3U,
                Microsoft.Crm.Client.Core.Framework.$4),
            i;
        if (this.$HP(n)) return Microsoft.Crm.Client.Core.Models.$6U.prototype.$2zj.call(this, r[1]);
        if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).$2zj(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.$2zj(n);
        return u
    },
    $2zh: function(n) {
        var t = n.split(":"),
            r = n.split("]"),
            u = MscrmComponents.DeferredPromiseFactory(Number, Microsoft.Crm.Client.Core.Framework.$4),
            i;
        if (this.$HP(n)) return Microsoft.Crm.Client.Core.Models.$6U.prototype.$2zh.call(this, r[1]);
        if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).$2zh(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.$2zh(n);
        return u
    },
    $1br: function() {
        this.$aj++;
        this.$GP = 1
    },
    $1Zt: function() {
        this.$aj = Math.max(this.$aj - 1, 0);
        this.$aj || (this.$GP = 0)
    },
    $1Si: function(n) {
        var t = n.split(":"), r = n.split("]"), i;
        if (this.$HP(n)) return Microsoft.Crm.Client.Core.Models.$6U.prototype.$1Si.call(this, r[1]);
        if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).$1Si(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.$1Si(n);
        return 0
    },
    $2xs: function(n) {
        var t = n.split(":"), r = n.split("]"), i;
        if (this.$HP(n)) return Microsoft.Crm.Client.Core.Models.$6U.prototype.$2xs.call(this, r[1]);
        if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).$2xs(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.$2xs(n);
        return""
    },
    getAttributeType: function(n) {
        var t = n.split(":"), r = n.split("]"), i;
        if (this.$HP(n)) return Microsoft.Crm.Client.Core.Models.$6U.prototype.getAttributeType.call(this, r[1]);
        if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i).getAttributeType(t[1])
        } else if (!$0.$1(this.$3D)) return this.$3D.getAttributeType(n);
        return-1
    },
    $1CV: function(n) {
        var t = n.split(":"), r = n.split("]"), i;
        if (this.$HP(n)) return null;
        if (t.length === 2) {
            if (!$0.$1(t[0])) return i = t[0], this.$4c.get_$H(i)
        } else if (!$0.$1(this.$3D)) return this.$3D;
        return null
    },
    $2GI: function(n) {
        var t = n.split(":"), i = n.split("]");
        return this.$HP(n) ? i[1] : t.length === 2 && !$0.$1(t[0]) ? t[1] : n
    },
    $sI: function(n) {
        var t = Microsoft.Crm.Client.Core.Models.$z.$6t(n), i = this.getAttributeType(t);
        this.$1ms(n, i)
    },
    $HP: function(n) {
        var t = n.split("]");
        return t.length > 1 && t[0] === "unbound" ? !0 : !1
    },
    $GN: function() {
        var r, n;
        if (!$0.$1(this.$4c)) {
            for (var i = this.$4c
                         .get_$396(),
                u = i.length,
                t = 0;
                t < u;
                ++t) r = i[t], n = this.$4c.get_$H(r), $0.$1(n) || (n.$69(), n = null);
            this.$4c = null
        }
        $0.$1(this.$3D) || (this.$3D.$69(), this.$3D = null);
        Microsoft.Crm.Client.Core.Models.$z.prototype.$GN.call(this)
    },
    $88: function() {
        return new Microsoft.Crm.Client.Core.Models.$48(this.$20z,
            this.$Ft,
            this.$J,
            this.get_$VX(),
            this.$O5,
            this.$Kd)
    }
};
Microsoft.Crm.Client.Core.Models.$22 = function(n, t, i) {
    Microsoft.Crm.Client.Core.Models.$22.initializeBase(this, [i]);
    this.$au = n;
    this.$5t = t
};
Microsoft.Crm.Client.Core.Models.$22.$B = function(n, t, i) {
    var r = new Microsoft.Crm.Client.Core.Models.$22(n, t, i);
    return r.$cH(), r
};
Microsoft.Crm.Client.Core.Models.$22.$1q3 = function(n, t) { return n + ":" + t };
Microsoft.Crm.Client.Core.Models.$22.$pD = function(n, t, i, r, u) {
    r
        ? (Microsoft.Crm.Client.Core.Models.$22
            .$26M(n, t, i, r), u && Microsoft.Crm.Client.Core.Models.$22.$1dr(n, t, u))
        : u && Microsoft.Crm.Client.Core.Models.$22.$1dr(n, t, u)
};
Microsoft.Crm.Client.Core.Models.$22.$26M = function(n, t, i, r) {
    var e = n.$4c.get_$H(t), u, f;
    if (!$0.$1(i)) {
        for (u = 0; u < i.length; u++)
            f = i[u], f in r.fields && r.setValue(f, null), n.$sI(Microsoft.Crm.Client.Core.Models.$22.$1q3(t, f));
        n.$4c.$DP(t);
        e.$69()
    }
};
Microsoft.Crm.Client.Core.Models.$22.$1dr = function(n, t, i) {
    var u = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord(i.$N, {}, i.$1X, {}, {}, i.$6E, i.$3S, i.$4U, i.$zp),
        r;
    n.$4c.set_$H(t, Microsoft.Crm.Client.Core.Models.$22.$B(n, t, u));
    n.$4c.get_$H(t).$7n(i);
    $0.$1(n.$3D.$M.$6E.getByRelationshipName(t)) &&
    (r = 1, n.$3D.$M.$6E.addRelationship(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .Relationship(t, 0),
        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection([i], !1, r, !1)))
};
Microsoft.Crm.Client.Core.Models.$22.$2IS = function(n, t) {
    if (!$0.$1(n) && !$0.$1(n.$6E)) {
        var i = n.$6E.getByRelationshipName(t);
        if (!$0.$1(i) && i.get_count() > 0) return i.get_$H(0)
    }
    return null
};
Microsoft.Crm.Client.Core.Models.$22.prototype = {
    $au: null,
    $5t: null,
    $sI: function(n, t) {
        var i = this.$5t === "?primary?" ? t : Microsoft.Crm.Client.Core.Models.$22.$1q3(this.$5t, t);
        this.$au.$sI(i);
        Microsoft.Crm.Client.Core.Models.$z.$6t(t) === "statecode" && this.$AC("RecordEnabledChanged", null)
    },
    $3Uw: function(n) {
        var r = n.get_$dS(), o = [], i, t, c, e;
        if (r.$6E.$7R)
            for (var s = r.$6E
                         .$7R,
                l = s.length,
                u = 0;
                u < l;
                ++u)
                if (i = s[u], i
                    .get_$2M() &&
                    i.get_$2M().get_entities())
                    for (var h = i.get_$2M()
                                 .get_entities(),
                        a = h.length,
                        f = 0;
                        f < a;
                        ++f)
                        t = h[f], t &&
                        (c = Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.isInstanceOfType(t.$3S)
                            ? t.$3S.$3O
                            : null, Array.add(o,
                            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$16Q(t, c)));
        e = this;
        MscrmComponents.DeferredPromiseFactory(Array, Object).allArray(o).done(function() {
            e.$21z(r);
            e.$AC("RecordUpdate", new Microsoft.Crm.Client.Core.Storage.DataApi.$Om(n.get_$BA(), n.get_$3aU()))
        })
    },
    $21z: function(n) {
        this.$5t === "?primary?" && this.$2Yr(this.$M, n);
        this.$7n(n)
    },
    $2Yr: function(n, t) {
        for (var u = this.$323(t), f = u.get_$396(), e = f.length, r = 0; r < e; ++r) {
            var i = f[r],
                o = Microsoft.Crm.Client.Core.Models.$22.$2IS(t, i),
                s = this.$au.$4c.$3ZW(i) ? $0.$1(this.$au.$4c.get_$H(i)) ? null : this.$au.$4c.get_$H(i).$M : null;
            Microsoft.Crm.Client.Core.Models.$22.$pD(this.$au, i, u.get_$H(i), s, o)
        }
    },
    $323: function(n) {
        for (var r, t, i = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Array)), e = n.$6E.$7R, s = e.length, u = 0;
            u < s;
            ++u)
            r = e[u], i.set_$H(r.get_$4u().$97,
                !$0.$1(r.get_$2M()) && r.get_$2M().get_count() > 0 ? r.get_$2M().get_$H(0).get_fieldNames() : null);
        for (var o = this.$au.$4c
                     .get_$396(),
            h = o.length,
            f = 0;
            f < h;
            ++f)
            t = o[f], i.$3ZW(t) &&
                $0.$1(i.get_$H(t)) &&
                !$0.$1(this.$au.$4c.get_$H(t).$M) &&
                i.set_$H(t, this.$au.$4c.get_$H(t).$M.get_fieldNames());
        return i
    },
    $GN: function() {
        this.$rm();
        Microsoft.Crm.Client.Core.Models.$O.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.Models.$JP = function(n, t, i) {
    this.$2Z = n;
    this.$5H = t;
    this.$1LX = i;
    this.$pT = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.$JP));
    this.$9n = 0
};
Microsoft.Crm.Client.Core.Models.$JP.prototype = {
    $2Z: null,
    get_Id: function() { return this.$2Z },
    set_Id: function(n) { return this.$2Z = n, n },
    $5H: null,
    get_Title: function() { return this.$5H },
    set_Title: function(n) { return this.$5H = n, n },
    $1LX: null,
    get_Parent: function() { return this.$1LX },
    set_Parent: function(n) { return this.$1LX = n, n },
    $pT: null,
    get_Children: function() { return this.$pT },
    set_Children: function(n) { return this.$pT = n, n },
    GetChildCount: function() { return this.$pT.get_Count() },
    $9n: 0,
    get_State: function() { return this.$9n },
    set_State: function(n) { return this.$9n = n, n }
};
Microsoft.Crm.Client.Core.Models.AssociatedViewItemData = function(n, t, i, r, u, f, e, o, s, h) {
    this.$5b = -1;
    this.$9y = -1;
    this.$bp = n;
    this.$wt = t;
    this.$jh = i;
    this.$xu = r;
    this.$4Z = u;
    this.$Ho = f;
    this.$5b = e;
    this.$qF = o;
    this.$qE = s;
    this.$9y = h
};
Microsoft.Crm.Client.Core.Models.AssociatedViewItemData
    .prototype = {
        $bp: null,
        get_ScreenGuid: function() { return this.$bp },
        set_ScreenGuid: function(n) { return this.$bp = n, n },
        $wt: null,
        get_DefintionGuid: function() { return this.$wt },
        set_DefintionGuid: function(n) { return this.$wt = n, n },
        $jh: null,
        get_TargetEntityName: function() { return this.$jh },
        set_TargetEntityName: function(n) { return this.$jh = n, n },
        $xu: null,
        get_TargetContextFilter: function() { return this.$xu },
        set_TargetContextFilter: function(n) { return this.$xu = n, n },
        $4Z: null,
        get_DisplayName: function() { return this.$4Z },
        set_DisplayName: function(n) { return this.$4Z = n, n },
        $Ho: null,
        get_RelationshipName: function() { return this.$Ho },
        set_RelationshipName: function(n) { return this.$Ho = n, n },
        get_RelationshipType: function() { return this.$5b },
        $qF: null,
        get_RelationshipExtraCondition: function() { return this.$qF },
        set_RelationshipExtraCondition: function(n) { return this.$qF = n, n },
        $qE: null,
        get_ReferencingName: function() { return this.$qE },
        set_ReferencingName: function(n) { return this.$qE = n, n },
        get_RelationshipRoleOrdinal: function() { return this.$9y }
    };
Microsoft.Crm.Client.Core.Models.$JQ = function(n) {
    this.$1m = n;
    $0.$1(this.$1m.$7M) || (this.$Mi = new Microsoft.Crm.Client.Core.Models.$Ix(this.$1m.$7M))
};
Microsoft.Crm.Client.Core.Models.$JQ.prototype = {
    $1m: null,
    $Mi: null,
    get_$1l: function() { return this.$1m.$d },
    get_$Tz: function() { return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$6G.toString(this.$1m.$9i) },
    get_$ql: function() { return this.$1m.$2R },
    get_$1F1: function() { return this.$1m.$L7 },
    get_$Zg: function() { return this.$1m.$CK },
    get_$Za: function() { return this.$1m.$CI },
    get_$MD: function() { return this.$1m.$BM },
    get_$1Ai: function() { return $0.$1(this.$1m.$D8) ? this.$1m.$At : this.$1m.$D8 },
    get_$1sS: function() { return this.$1m.$ZL },
    get_$1sU: function() { return this.$1m.$ZM }
};
Microsoft.Crm.Client.Core.Models.$7g = function() {};
Microsoft.Crm.Client.Core.Models.$7g.$3B4 = function(n, t, i, r, u, f) {
    var w, a, v, g;
    for ($0.$1(f) && (f = 51), u || (u = Microsoft.Crm.Client.Core.Models.$7g.$2UK), Microsoft.Crm.Client.Core.Framework
            .Trace.logInfo(f, "MergeRows: old rows: {0} new rows: {1}", n.get_$l(), t.length), w = {}, a = 0;
        a < t.length;
        a++) w[r(t[a])] = a;
    for (var o = [], h = -1, s = 0, y = !1, c = -1, e = 0, l = 0; l < t.length && e < n.get_$l();) {
        var b = n.get_$H(e), k = i(b), p = t[l], d = r(p), nt = d === k;
        if (nt || y) {
            s > 0 &&
            (Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(f, "MergeRows: removing {0} rows starting at index {1}", s, h), n
                .$1Gr(h, s), e -= s, c -= s, h = -1, s = 0);
            o.length > 0 &&
            (Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(f, "MergeRows: adding {0} rows starting at index {1}", o.length, e), n.$2KW(e, o), e += o
                .length, c += o.length, Array.clear(o));
            y
                ? (Microsoft.Crm.Client.Core.Framework.Trace
                    .logInfo(f, "MergeRows: moving row from index {0} to index {1}", c, l), n
                    .$2NU(c, l, n.get_$H(c)), y = !1)
                : (Microsoft.Crm.Client.Core.Framework.Trace
                    .logInfo(f, "MergeRows: replacing item at row index {0}", e), n.set_$H(e, u(b, p)));
            e++;
            l++;
            continue
        }
        if (!(k in w)) {
            h < 0 && (h = e);
            s++;
            e++;
            continue
        }
        for (c = -1, v = 0; v < n.get_$l(); ++v)
            if (i(n.get_$H(v)) === d) {
                c = v;
                break
            }
        if (c === -1) {
            Array.add(o, u(null, p));
            l++;
            continue
        }
        n.set_$H(c, u(n.get_$H(c), p));
        y = !0
    }
    for (; l < t.length; l++) g = t[l], Array.add(o, u(null, g));
    s += n.get_$l() - e;
    h < 0 && (h = e);
    h >= 0 &&
        s > 0 &&
        (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(f,
            "MergeRows: removing {0} rows starting at index {1}",
            s,
            h), n.$1Gr(h, s));
    o.length > 0 &&
    (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(f, "MergeRows: appending {0} new rows", o.length), n
        .$S4(o), e += o.length)
};
Microsoft.Crm.Client.Core.Models.$7g.$2UK = function(n, t) { return t };
Microsoft.Crm.Client.Core.Models.$A6 = function() { Microsoft.Crm.Client.Core.Models.$A6.initializeBase(this) };
Microsoft.Crm.Client.Core.Models.$A6.$B = function(n) {
    var t = new Microsoft.Crm.Client.Core.Models.$A6;
    return t.$2Vx(n), t.$cH(), t
};
Microsoft.Crm.Client.Core.Models.$A6.prototype = {
    $1Pq: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            i = n.$M,
            r = this,
            u = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1lB(i)
            .then(function(n) { t.resolve(n) }, function(n) { t.reject(n) }), t.promise()
    }
};
Microsoft.Crm.Client.Core.Models.$J0 = function(n, t, i) {
    this.$T = n;
    this.$6n = t;
    this.$1aK = i
};
Microsoft.Crm.Client.Core.Models.$J0.prototype = {
    $T: null,
    $1aK: 0,
    $6n: 0,
    $1P: null,
    get_EntityLogicalName: function() { return this.$T },
    get_ResultCount: function() { return this.$1aK },
    get_ErrorCode: function() { return this.$6n },
    get_DisplayName: function() { return this.$1P },
    set_DisplayName: function(n) { return this.$1P = n, n }
};
Microsoft.Crm.Client.Core.Models.$6U = function(n, t, i, r) {
    var u, s, e, o, f;
    if (this.get_Id = this.get_$1Z, this.get_ModelName = this.get_$HS, Microsoft.Crm.Client.Core.Models.$6U
        .resolveInheritance(), this.apcl = this.$2bt, this.rpcl = this.$3Ke, Microsoft.Crm.Client.Core.Models.$6U
        .initializeBase(this), this.$1il = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), this
        .$1JO = {}, this.$1dd = {}, this.$H0 = n, this.$21d = t, this.$RR = i, this.$1dc = new Microsoft.Crm.Client.Core
        .Models.Formatters.$QA(this), this.$RS = {}, !$0
        .$1(t)) for (u = 0; u < t.length; u++) s = t[u], this.$RS[s] = null;
    e = r;
    for (o in e) f = { key: o, value: e[o] }, this.$RS[f.key] = f.value, this.$Fm(f.key)
};
Microsoft.Crm.Client.Core.Models.$6U.$tC = function(n, t, i, r) {
    return new Microsoft.Crm.Client.Core.Models.$6U(n, t, i, r)
};
Microsoft.Crm.Client.Core.Models.$6U.prototype = {
    $H0: null,
    $21d: null,
    $RS: null,
    $1JO: null,
    $1dd: null,
    $1il: null,
    $RR: null,
    $1dc: null,
    get_$1Z: function() { return this.$H0 },
    get_$VX: function() { return this.$21d },
    get_$HS: function() { return this.$H0 },
    get_$Go: function() { return this.$H0 },
    get_$1ik: function() { return this.$1il },
    get_$2Y1: function() {
        var n = null, t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$so();
        return $0.$1(t) || (n = t.$9U.toString()), n
    },
    GetValue: function(n) { return this.$wJ(n) },
    SetValue: function(n, t, i, r) { this.$1zw(n, t, i, r) },
    $F6: function() { return this.get_$1ik().get_Count() > 0 },
    $2zp: function(n, t) {
        var u, i, f, r, e;
        return n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), u = MscrmComponents
            .DeferredPromiseFactory(Microsoft.Crm.Client.Core.Models.Validation.$7S,
                Microsoft.Crm.Client.Core.Framework.$4), i = this.$11F(n, t), i
            ? u.resolve(i)
            : (f = this.$2V(n), $0.$1(f)
                ? u.reject(Microsoft.Crm.Client.Core.Framework.$4
                    .$h(String.format("No attribute metadata found for field : {0}", n)))
                : (r = this, e = this, this.$2zj(n).then(function(e) {
                        var o = e === 2 || e === 1, s = !0;
                        switch (t) {
                        case 2:
                            i = new Microsoft.Crm.Client.Core.Models.Validation
                                .IntegerValidator(o, s, Math.floor(f.$CK), Math.floor(f.$CI));
                            break;
                        case 3:
                            i = new Microsoft.Crm.Client.Core.Models.Validation
                                .DecimalValidator(o,
                                    s,
                                    r.GetEffectiveMinValue(n),
                                    r.GetEffectiveMaxValue(n),
                                    r.GetEffectivePrecisionValue(n));
                            break;
                        case 4:
                            i = new Microsoft.Crm.Client.Core.Models.Validation
                                .MoneyValidator(o,
                                    s,
                                    r.GetEffectiveMinValue(n),
                                    r.GetEffectiveMaxValue(n),
                                    r.GetEffectivePrecisionValue(n),
                                    !1);
                            break;
                        case 5:
                            i = new Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator(o, s);
                            break;
                        case 6:
                            i = new Microsoft.Crm.Client.Core.Models.Validation.UrlValidator(o, s);
                            break;
                        case 7:
                            i = new Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator(o, s, !1);
                            break;
                        case 8:
                            i = new Microsoft.Crm.Client.Core.Models.Validation
                                .DateTimeValidator(o, s, r.$1Si(n), r.GetMinDate(n));
                            break;
                        default:
                            i = new Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator(o, s)
                        }
                        r.$2WM(n, t, i);
                        u.resolve(i)
                    },
                    function(n) { u.reject(n) }))), u.promise()
    },
    $2HC: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = this.$2V(n);
        return this.$1p6(t)
    },
    $2HE: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = this.$2V(n);
        return t.$CI
    },
    $2HF: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = this.$2V(n);
        return t.$CK
    },
    $3Rk: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$p9.set_$H(n, t);
        this.$Fm(n)
    },
    $3Rh: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$pA.set_$H(n, t);
        this.$Fm(n)
    },
    $3Rj: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$pC.set_$H(n, t);
        this.$Fm(n)
    },
    $3Rg: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$iT.set_$H(n, t);
        this.$Fm(n)
    },
    $3Ri: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$pB.set_$H(n, t);
        this.$Fm(n)
    },
    $2zj: function(n) {
        var t, i;
        return n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), t = MscrmComponents
            .DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework
                .$3U,
                Microsoft.Crm.Client.Core.Framework.$4), this.$RR.$3ZW(n)
            ? (i = this.$RR.get_$H(n), t.resolve(i.$9i))
            : t.reject(Microsoft.Crm.Client.Core.Framework.$4
                .$h(String.format("No attribute metadata found for field : {0}", n))), t.promise()
    },
    $2zh: function(n) {
        var t, i;
        return n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), t = MscrmComponents
                .DeferredPromiseFactory(Number, Microsoft.Crm.Client.Core.Framework.$4),
            this.$RR.$3ZW(n)
                ? (i = this.$RR.get_$H(n), i.$L7 > 0 ? t.resolve(i.$L7) : t.reject())
                : t.reject(Microsoft.Crm.Client.Core.Framework.$4
                    .$h(String.format("No attribute metadata found for field : {0}", n))), t.promise()
    },
    $1br: function() {},
    $1Zt: function() {},
    $2xs: function(n) {
        if (this.$RR.$3ZW(n)) {
            var t = this.$RR.get_$H(n);
            if (!$0.$1(t.$BM)) return t.$BM.toLowerCase()
        }
        return""
    },
    $1Si: function(n) {
        if (n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), this.$RR.$3ZW(n)) {
            var t = this.$RR.get_$H(n);
            if (!$0.$1(t.$BZ)) return t.$BZ
        }
        return 1
    },
    $2V: function(n) { return n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), this.$RR.get_$H(n) },
    getAttributeType: function(n) {
        if (this.$RR.$3ZW(n)) {
            var t = this.$RR.get_$H(n);
            return t.$2R
        }
        return-1
    },
    $wJ: function(n) {
        if (this.$1Tq(n)) return this.$mB(n, null);
        var t = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        return this.$1Tq(t) ? this.$mB(t, Microsoft.Crm.Client.Core.Models.$z.$10z(n)) : null
    },
    $1Tq: function(n) { return n in this.$RS },
    $mB: function(n, t) {
        var e = !$0.$1(t),
            u = t === Microsoft.Crm.Client.Core.Framework.$a.$6f,
            f = t === Microsoft.Crm.Client.Core.Framework.$a.$12v,
            o = e && !u && !f,
            r = null,
            i = this.$RS[n];
        if (!$0.$1(i)) {
            var s = this.$110(n), h = this.$311(n), c = this.getAttributeType(n);
            switch (c) {
            case 13:
            case 12:
            case 11:
            case 0:
                r = o ? i.getValue(t) : i;
                break;
            default:
                r = u ? i : f ? h : s
            }
        }
        return r
    },
    $110: function(n) { return $0.$1(this.$1JO[n]) ? this.$RS[n] : this.$1JO[n] },
    $311: function(n) { return this.$1dd[n] || this.$110(n) },
    $1zw: function(n, t, i, r) {
        var u = Microsoft.Crm.Client.Core.Models.$z.$6t(n),
            f = Microsoft.Crm.Client.Core.Models.$z.$10z(n),
            s = f !== Microsoft.Crm.Client.Core.Framework.$a.$6f,
            h = f !== Microsoft.Crm.Client.Core.Framework.$a.$12v,
            c = s && h,
            e,
            o;
        (f = c ? f : null, e = this.$wJ(n), !$0.$1(e) || this.$1Tq(u)) &&
        (o = $0
            .$1(f)
            ? this.$wJ(u + Microsoft.Crm.Client.Core.Framework.$a.$6f)
            : e, Microsoft.Crm.Client.Core.Framework.$2z.$Pa(e, t) ||
            Microsoft.Crm.Client.Core.Framework.$2z.$Pa(o, t) ||
            ($0.$9c(i) && (i = this.$2Cq(u, t)), $0.$9c(r) && (r = this.$2Cx(u, t)), this.$1ta(u), this
                .$201(u, f, t, i, r), this.$sI_2(n)))
    },
    $201: function(n, t, i, r, u) { $0.$1(t) && (this.$3Qn(n, i), this.$15O(n, r, u)) },
    $3Qn: function(n, t) {
        if (!(n in this.$RS)) throw Error.argumentOutOfRange(n);
        this.$RS[n] = Microsoft.Crm.Client.Core.Framework.$5R.isInstanceOfType(t)
            ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N.$kY(t)
            : t
    },
    $15O: function(n, t, i) {
        this.$1JO[n] = t;
        this.$1dd[n] = i
    },
    $1ta: function(n) { this.get_$1ik().contains(n) || this.get_$1ik().add(n) },
    $2Cq: function(n, t) {
        var i = this.getAttributeType(n);
        return this.$1dc.$Vc(i, n, t)
    },
    $2Cx: function(n, t) {
        var i = this.getAttributeType(n);
        return this.$1dc.$lg(i, n, t)
    },
    $Fm: function(n) {
        if (this.$1Tq(n)) {
            var t = this.$mB(n, Microsoft.Crm.Client.Core.Framework.$a.$6f), i = this.$2Cq(n, t), r = this.$2Cx(n, t);
            this.$15O(n, i, r);
            this.$sI_2(n)
        }
    },
    $sI_2: function(n) {
        var t = Microsoft.Crm.Client.Core.Models.$z.$6t(n), i = this.getAttributeType(t);
        this.$1ms(n, i)
    },
    $31D: function(n) {
        var t = this.$2V(n);
        return t.$7M.$Tj
    },
    $2Gg: function(n) {
        var t = this.$2V(n);
        return t.$D8
    },
    $30Z: function(n) {
        var t = this.$2V(n);
        return t.$RI
    }
};
Microsoft.Crm.Client.Core.Models.$z = function() {
    this.$1pG = this.GetEffectivePrecisionValue;
    this.$2z2 = this.GetEffectiveMaxValue;
    this.$2z3 = this.GetEffectiveMinValue;
    this.$1Cg = this.GetEffectiveAttributeFormat;
    this.$2Hj = this.GetMinDate;
    this.$2gG = this.ClearCustomAttributes;
    this.apcl = this.$2bt;
    this.rpcl = this.$3Ke;
    Microsoft.Crm.Client.Core.Models.$z.initializeBase(this);
    this.eventHandlers = new Sys.EventHandlerList;
    this.$1Bj = new(Microsoft.Crm.Client.Core.Framework.$8X
        .$$(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Models.Validation.$7S)));
    this.ClearCustomAttributes()
};
Microsoft.Crm.Client.Core.Models.$z.$10z = function(n) {
    var t = n.indexOf("!");
    return t < 0 ? null : n.substr(t)
};
Microsoft.Crm.Client.Core.Models.$z.$6t = function(n) { return n.split("!")[0] };
Microsoft.Crm.Client.Core.Models.$z.prototype = {
    eventHandlers: null,
    $1Bj: null,
    $p9: null,
    $pA: null,
    $pC: null,
    $iT: null,
    $pB: null,
    $1br: function() {},
    $1Zt: function() {},
    get_EventHandlers: function() { return this.eventHandlers },
    set_EventHandlers: function(n) { return this.eventHandlers = n, n },
    get_$2Y1: function() { return null },
    get_$1ik: function() { return null },
    get_$2ZB: function() {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Q.transactioncurrencybyid,
            n = t.get_$H(this.get_$2Y1());
        return n
            ? n.$dJ
            : Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$2L.$IS.CurrencyDecimalDigits
    },
    add_$6s: function(n) { this.eventHandlers && this.eventHandlers.addHandler("PropertyChanged", n) },
    remove_$6s: function(n) { this.eventHandlers && this.eventHandlers.removeHandler("PropertyChanged", n) },
    $2bt: function() {
        throw Error
            .notImplemented("EntityRecord does not support adding listeners for individual properties, use the PropertyChanged event instead.");
    },
    $3Ke: function() {
        throw Error
            .notImplemented("EntityRecord does not support removing listeners for individual properties, use the PropertyChanged event instead.");
    },
    $1ms: function(n, t) {
        var r = Microsoft.Crm.Client.Core.Models.$z.$6t(n), i;
        if (this.eventHandlers && (i = this.eventHandlers.getHandler("PropertyChanged"), i)) {
            n !== r && i(this, n);
            i(this, r);
            i(this, r + Microsoft.Crm.Client.Core.Framework.$a.$6f);
            i(this, r + Microsoft.Crm.Client.Core.Framework.$a.$12v);
            switch (t) {
            case 6:
            case 1:
            case 9:
                i(this, r + Microsoft.Crm.Client.Core.Framework.$a.$1Z);
                i(this, r + Microsoft.Crm.Client.Core.Framework.$a.$1l);
                i(this, r + Microsoft.Crm.Client.Core.Framework.$a.$5f);
                break;
            case 0:
            case 11:
            case 12:
            case 13:
                i(this, r + Microsoft.Crm.Client.Core.Framework.$a.$2M);
                i(this, r + Microsoft.Crm.Client.Core.Framework.$a.$DH)
            }
        }
    },
    $11F: function(n, t) {
        var i = this.$1Bj.get_$H(n);
        return i ? i.get_$H(Microsoft.Crm.Client.Core.Models.Validation.$38.toString(t)) : null
    },
    $2WM: function(n, t, i) {
        var r = this.$1Bj.get_$H(n);
        r ||
        (r = this.$1Bj.set_$H(n,
            new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Models.Validation.$7S))));
        r.set_$H(Microsoft.Crm.Client.Core.Models.Validation.$38.toString(t), i)
    },
    $1p6: function(n) {
        switch (n.$2R) {
        case 8:
            switch (n.$o3) {
            case 0:
                return n.$LL;
            case 1:
                return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$1O.$o9;
            default:
                return this.get_$2ZB()
            }
        default:
            return n.$LL
        }
    },
    GetEffectivePrecisionValue: function(n) {
        var t, i;
        return(n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), t = this
                .$2HC(n), !$0.$1(this.$p9) && this.$p9.$3ZW(n) && (i = this.$p9.get_$H(n), i < t))
            ? i
            : t
    },
    GetEffectiveMaxValue: function(n) {
        return(n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), !$0.$1(this.$pA) && this.$pA.$3ZW(n))
            ? this.$pA.get_$H(n)
            : this.$2HE(n)
    },
    GetEffectiveMinValue: function(n) {
        return(n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), !$0.$1(this.$pC) && this.$pC.$3ZW(n))
            ? this.$pC.get_$H(n)
            : this.$2HF(n)
    },
    GetEffectiveAttributeFormat: function(n) {
        if (n = Microsoft.Crm.Client.Core.Models.$z
            .$6t(n), $0.$1(this.$iT) ||
            !this.$iT.$3ZW(n) ||
            Microsoft.Crm.Client.Core.Framework.$3.$1S(this.$iT.get_$H(n))) {
            var t = this.$2xs(n);
            if (!Microsoft.Crm.Client.Core.Framework.$3.$1S(t)) return t
        } else return this.$iT.get_$H(n);
        return""
    },
    GetMinDate: function(n) {
        return n = Microsoft.Crm.Client.Core.Models.$z
            .$6t(n), !$0.$1(this.$pB) && this.$pB.$3ZW(n) ? this.$pB.get_$H(n) : new Date(1753, 0, 1)
    },
    ClearCustomAttributes: function() {
        this.$p9 = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Number));
        this.$pC = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Number));
        this.$pA = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Number));
        this.$iT = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(String));
        this.$pB = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Date))
    },
    $2zp: function() { return null },
    $2zj: function() { return null },
    $2zh: function() { return null },
    $2HC: function() { return 0 },
    $2HE: function() { return 0 },
    $2HF: function() { return 0 },
    $3Rk: function() {},
    $3Rh: function() {},
    $3Rj: function() {},
    $3Rg: function() {},
    $3Ri: function() {},
    $F6: function() { return!1 },
    $2xs: function() { return null },
    $1Si: function() { return 0 },
    $GN: function() {
        this.$p9 = null;
        this.$pA = null;
        this.$pC = null;
        this.$iT = null;
        this.$pB = null;
        this.eventHandlers = null
    }
};
Microsoft.Crm.Client.Core.Models.$Iz = function() {};
Microsoft.Crm.Client.Core.Models.$Iz.prototype = {
    $1yy: function(n, t, i) { return Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule(n, t, i) }
};
Microsoft.Crm.Client.Core.Models.$J2 = function(n) {
    this.$6n = n;
    this.$LR = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.$J0))
};
Microsoft.Crm.Client.Core.Models.$J2.prototype = {
    $LR: null,
    $6n: 0,
    get_SearchResults: function() { return this.$LR },
    get_ErrorCode: function() { return this.$6n },
    get_ErrorMessage: function() { return Microsoft.Crm.Client.Core.Framework.Common.$2.$5I(this.$6n) }
};
Microsoft.Crm.Client.Core.Models.$2g = function() {};
Microsoft.Crm.Client.Core.Models.$2g.$2jn = function(n, t, i, r, u) {
    $0.$1(t) && (t = !1);
    $0.$1(r) && (r = !0);
    var f = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor));
    return f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Required", t)), f
            .add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ValuePropertyDescriptor("LookupModelName", n)), f
            .add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ActionProviderPropertyDescriptor("DefaultLookupViewActionProvider",
                    "ActionProvider",
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("RetrieveLookupViewQueryFromId", null))),
        $0.$1(i) || !i
            ? f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ActionProviderPropertyDescriptor("InitialLookupViewActionProvider",
                    "ActionProvider",
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("RetrieveLookupViewQueryFromEntityType", null)))
            : f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ActionProviderPropertyDescriptor("InitialLookupViewActionProvider",
                    "ActionProvider",
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("RetrieveLookupViewQueryFromId", null))), f
            .add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ValuePropertyDescriptor("NewButtonVisibility", r)),
        $0.$1(u) ||
            f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ValuePropertyDescriptor("NewButtonEntityLogicalName", u)), f
};
Microsoft.Crm.Client.Core.Models.$2g.$3Xd = function(n, t, i, r, u, f) {
    var e = Microsoft.Crm.Client.Core.Models.$2g.$2jn(n, t, !1, u, f);
    return e.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ValuePropertyDescriptor("BindingField", i)), e.add(new Microsoft.Crm.Client.Core.Models.Descriptors
            .ViewModel
            .ActionProviderPropertyDescriptor("LookupViewActionProvider",
                "ActionProvider",
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor("RetrieveLookupViewQueryFromEntityType", null))),
        $0.$1(r) ||
            e.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ValuePropertyDescriptor("MetadataQueryDescriptor", r)), e
};
Microsoft.Crm.Client.Core.Models.$2g.$z3 = function(n, t) {
    return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor("AttachmentsControl",
            "AttachmentsControl",
            "AttachmentsControlViewModel",
            null,
            null,
            [
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("AttachmentItem",
                    "AttachmentItem",
                    "AttachmentItemViewModel",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ActionProviderPropertyDescriptor("RetrieveAttachmentContentsActionProvider",
                            "ActionProvider",
                            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                            .QueryDescriptor("RetrieveAttachmentContents", null)), new Microsoft.Crm.Client.Core.Models
                        .Descriptors.ViewModel.ValuePropertyDescriptor("CanDeleteAttachment", t)
                    ],
                    null), new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("AddAttachment",
                    "AddAttachment",
                    "AddAttachmentViewModel",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("CanAddAttachment", n)
                    ],
                    null)
            ])
};
Microsoft.Crm.Client.Core.Models.$2g.$2kR = function(n, t, i, r, u) {
    var e = "Label",
        o = "DefaultValueLabel",
        f = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor));
    switch (n) {
    case"lookup":
    case"owner":
    case"customer":
        e = "NavigationButton";
        o = "FieldButton";
        f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("AllowNavigate", r));
        break;
    case"partyList":
        e = "PartyListRead";
        o = "PartyListRead";
        f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("AllowNavigate", r));
        f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("SingleLineMode", u))
    }
    return f.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ReferencePropertyDescriptor("Data", Microsoft.Crm.Client.Core.Models.$2g.$31s(n, t))), Microsoft.Crm.Client
        .Core.Models.Descriptors.$U.$3Xb(e, o, i, null, null, f.toArray(), null, null)
};
Microsoft.Crm.Client.Core.Models.$2g.$31s = function(n, t) {
    switch (n) {
    case"status":
    case"picklist":
    case"boolean":
    case"state":
        return t + Microsoft.Crm.Client.Core.Framework.$a.$DH;
    default:
        return t
    }
};
Microsoft.Crm.Client.Core.Models.$87 = function(n, t, i, r) {
    this.$11 = n;
    this.$2Q = $0.$1(t) ? new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X : t;
    this.$TQ = i;
    this.$BJ = r
};
Microsoft.Crm.Client.Core.Models.$87.$287 = function(n) {
    var t = Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
        i = new Microsoft.Crm.Client.Core.Storage.DataApi.$Ny(n),
        r = i.$2e6();
    return new Microsoft.Crm.Client.Core.Models.$87(t, r, '<grid name="resultset"/>', n)
};
Microsoft.Crm.Client.Core.Models.$87.prototype = {
    $11: null,
    $2Q: null,
    $TQ: null,
    $BJ: null,
    get_$1H: function() { return this.$2Q.$AM(1) },
    set_$1H: function(n) { return this.$2Q.$Eh(1, n), n }
};
Microsoft.Crm.Client.Core.Models.$J1 = function(n) { this.$nj = n };
Microsoft.Crm.Client.Core.Models.$J1.prototype = {
    $nj: null,
    get_$DH: function() { return $0.$1(this.$nj) ? null : this.$nj.$1B },
    get_$2M: function() { return $0.$1(this.$nj) ? -1 : this.$nj.$1f },
    get_$2Kj: function() { return $0.$1(this.$nj) ? null : this.$nj.$f8 }
};
Microsoft.Crm.Client.Core.Models.$Ix = function(n) {
    var t, i, r;
    this.$2f = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Models.$J1));
    t = n.$2f;
    for (i in t) r = { key: i, value: t[i] }, this.$2f.set_$H(r.key, new Microsoft.Crm.Client.Core.Models.$J1(r.value))
};
Microsoft.Crm.Client.Core.Models.$Ix.prototype = {
    $2f: null,
    $18s: function(n, t) {
        this.$2f.set_$H(t.toString(),
            new Microsoft.Crm.Client.Core.Models.$J1(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .$1N(n, t, -1, -1, null, null, null)))
    },
    $1Gq: function(n) {
        var t = n.toString();
        this.$2f.$3ZW(t) && this.$2f.$DP(t)
    },
    $19p: function() {
        this.$2f = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Models.$J1))
    }
};
Microsoft.Crm.Client.Core.Models.$6Z = function() {
    this.$$d_$1vK = Function.createDelegate(this, this.$1vK);
    this.$$d_$1vL = Function.createDelegate(this, this.$1vL);
    Microsoft.Crm.Client.Core.Models.$6Z.initializeBase(this);
    this.$N0 = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.$3S))
};
Microsoft.Crm.Client.Core.Models.$6Z.$B = function(n) {
    var t = new Microsoft.Crm.Client.Core.Models.$6Z;
    return t.$2Vx(n), t.$cH(), t
};
Microsoft.Crm.Client.Core.Models.$6Z.prototype = {
    $N0: null,
    get_$1J4: function() { return this.get_EntityCollection() },
    $1Pq: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            i = n.get_$2h(),
            r = this,
            u = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$ky(i)
            .then(function(n) { t.resolve(n) }, function(n) { t.reject(n) }), t.promise()
    },
    $2WU: function(n) {
        var r, i, t;
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$3F.isInstanceOfType(n)) {
            if (r = n.$E2, i = this.$N0, r.length !== i.get_Count()) return!0;
            for (t = 0; t < i.get_Count(); t++) if (!i.get_$H(t).get_TargetGuid().equals(r[t].$Af)) return!0;
            return!1
        }
        return Microsoft.Crm.Client.Core.Models.$1E.prototype.$2WU.call(this, n)
    },
    $3HW: function() {
        var n, t, i;
        for (this
                .$26d(), n = 0;
            n < this.get_$1J4().$E2.length;
            n++) t = this.get_$1J4().$E2[n], i = Microsoft.Crm.Client.Core.Models.$3S.$B(t), this.$N0.add(i)
    },
    $26d: function() {
        for (var n = 0; n < this.$N0.get_Count(); n++) this.$N0.get_$H(n).dispose();
        this.$N0.clear()
    },
    $1vL: function() {},
    $1vK: function(n, t) {
        if (t.get_$BA() !== 1)
            throw Error.create(String
                .format("OnRecordsChanged has failed in PinnedTileCollectionModel, EventArgs.RetrieveState not Success. EventArgs.RetrieveState is {0}", Microsoft.Crm.Client.Core.Storage.DataApi.$2T.toString(t.get_$BA())));
        this.$rm();
        this.$2Vx(t.get_$dS());
        this.$cH()
    },
    $cH: function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$AP(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$3F,
                this.get_$1J4().get_key(),
                this.$$d_$1vL,
                this.$$d_$1vK)
    },
    $rm: function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1a2(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$3F,
                this.get_$1J4().get_key(),
                this.$$d_$1vL,
                this.$$d_$1vK)
    },
    $GN: function() {
        this.$26d();
        Microsoft.Crm.Client.Core.Models.$1E.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.Models.$3S = function(n) {
    this.$15x_3 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
    this.get_$1d8 = this.get_TargetGuid;
    Microsoft.Crm.Client.Core.Models.$3S.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(n, "tile");
    this.$1wG = n
};
Microsoft.Crm.Client.Core.Models.$3S.$B = function(n) { return new Microsoft.Crm.Client.Core.Models.$3S(n) };
Microsoft.Crm.Client.Core.Models.$3S.$V7 = function(n, t) {
    var i = new Microsoft.Crm.Client.Core.Models.$3S(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .$1p(n, t.$2n.LogicalName, t.$2n.Id, 0, ""));
    return i.set_$Fs(t), i
};
Microsoft.Crm.Client.Core.Models.$3S.prototype = {
    $1wG: null,
    $1Yg: null,
    $hP: null,
    get_$2h: function() { return this.$1wG },
    $Ln: null,
    get_$Fs: function() { return this.$Ln },
    set_$Fs: function(n) { return this.$Ln = n, n },
    get_$iC: function() { return this.get_$2h().$AJ },
    $bu: null,
    get_$Mw: function() { return this.$bu },
    set_$Mw: function(n) { return this.$bu = n, n },
    get_$UC: function() { return this.get_$2h().$82 },
    $Xs: null,
    get_$LW: function() { return this.$Xs },
    set_$LW: function(n) { return this.$Xs = n, n },
    get_$2Mw: function() { return this.get_$2h().$nA },
    get_$3Js: function() { return this.get_$2h().$oJ },
    get_$e_3: function() {
        return Microsoft.Crm.Client.Core.Framework.$15.$5v("", "PinnedTileModel:" + this.get_$2h().$82)
    },
    $26D: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            t = this,
            i = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$vI(this.get_$2h().get_$4u())
            .then(function(t) { n.resolve(!$0.$1(t)) }, function(t) { n.reject(t) }), n.promise()
    },
    $2TD: function() {
        var n = new Array(0);
        return Array.add(n, this.$1wM()), n
    },
    get_$1Iw: function() { return this.$15x_3 },
    set_$1Iw: function(n) { return this.$15x_3 = n, n },
    get_$3HJ: function() { return this.$1Yg || (this.$1Yg = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3) },
    get_$k9: function() { return this.get_$2h().$CV },
    $1wM: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), r, i, t;
        return $0.$1(this.get_$Mw())
            ? (this.get_$2h().$82 === "Workspace".toUpperCase()
                ? (r = new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(1,
                        Microsoft.Crm.Client.Core.Framework.$6.get_$2C(),
                        "Workspace".toUpperCase(),
                        0,
                        !0,
                        this.get_$2h().$Af.toString(),
                        0), i = this, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(r, this.get_$e_3())
                    .done(function(t) {
                        $0.$1(t.get_$H(0)) || (i.set_$Mw(t.get_$H(0).$1P), i.set_$LW(t.get_$H(0).$1P));
                        n.resolve(null)
                    }))
                : this.get_$2h().$82 === "PowerBIFullScreenPage".toUpperCase()
                ? (this.set_$Mw(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Power_BI_Tile")), this
                    .set_$LW(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Power_BI_Tile")), n.resolve(null))
                : (t = this, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$73(this.get_$2h().$82, this.get_$e_3())
                    .done(function(i) {
                        t.set_$Mw(t.get_$2h().$AJ ? i.get_$146() : i.get_$AB());
                        t.set_$LW(i.get_$GU());
                        n.resolve(null)
                    })), n.promise())
            : n.resolve(null).promise()
    },
    $qw: function(n) {
        if (this.$2eY(n)) {
            this.get_$2h().$CV = n;
            var t = this;
            this.get_$2U7().$1yy(function() { t.get_$3HJ().$ka(t.get_$2h()) },
                Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$SY,
                "CacheTileData")
        }
    },
    get_$2U7: function() { return this.$hP || (this.$hP = new Microsoft.Crm.Client.Core.Models.$Iz) },
    get_$J6: function() { return this.get_$2h().get_$J6() },
    get_$3Jv: function() { return this.get_$2h().$aK },
    get_$3O1: function() { return this.get_$2h().$GZ },
    $3Vd: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), t = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$ka(this.get_$2h())
            .done(function(t) { n.resolve(t) }), n.promise()
    },
    get_TargetGuid: function() {
        return $0.$1(this.get_$2h()) ? Microsoft.Crm.Client.Core.Framework.Guid.get_empty() : this.get_$2h().$Af
    },
    $2eY: function(n) {
        var i, r, t;
        if ($0.$1(this.get_$k9())) return!0;
        i = n;
        for (r in i)
            if (t = { key: r, value: i[r] }, !(t.key in this.get_$k9()) || this.get_$k9()[t.key] !== t.value) return!0;
        return!1
    }
};
Microsoft.Crm.Client.Core.Models.$1E = function() {
    this.$$d_$1vK = Function.createDelegate(this, this.$1vK);
    this.$$d_$1vL = Function.createDelegate(this, this.$1vL);
    Microsoft.Crm.Client.Core.Models.$1E.resolveInheritance();
    this.dispose = this.$69;
    Microsoft.Crm.Client.Core.Models.$1E.initializeBase(this);
    this.$HT = new Microsoft.Crm.Client.Core.Framework.$9A;
    this.$GP = 0;
    this.$eq = !1;
    Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() &&
        Array.add(Microsoft.Crm.Client.Core.Models.$1E.get_$1Mz(), this)
};
Microsoft.Crm.Client.Core.Models.$1E.get_$1Mz = function() {
    return Microsoft.Crm.Client.Core.Models.$1E.$1My || (Microsoft.Crm.Client.Core.Models.$1E.$1My = []), Microsoft.Crm
        .Client.Core.Models.$1E.$1My
};
Microsoft.Crm.Client.Core.Models.$1E.$B = function(n) {
    var t = new Microsoft.Crm.Client.Core.Models.$1E;
    return t.$2Vx(n), t.$cH(), t
};
Microsoft.Crm.Client.Core.Models.$1E.$Hx = function() {
    return Microsoft.Crm.Client.Core.Models.$1E.$B(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection
        .createEmpty())
};
Microsoft.Crm.Client.Core.Models.$1E.prototype = {
    $HT: null,
    $23: null,
    $1C: null,
    $50: null,
    $GP: 0,
    $uH: null,
    $eq: !1,
    $1vr: 0,
    add_$1sy: function(n) {
        this.$23 || (this.$23 = new Sys.EventHandlerList);
        this.$23.addHandler("ListDataChanged", n)
    },
    remove_$1sy: function(n) { this.$23 && this.$23.removeHandler("ListDataChanged", n) },
    add_$3Bd: function(n) {
        this.$23 || (this.$23 = new Sys.EventHandlerList);
        this.$23.addHandler("MoreRecordsChanged", n)
    },
    get_$B4: function() { return this.$HT },
    get_$Bp: function() { return this.$1C },
    get_EntityCollection: function() { return this.$50 },
    get_$W4: function() { return this.get_EntityCollection().get_isLastPage() },
    get_$Gx: function() { return this.get_EntityCollection().get_currentPageIndex() },
    get_$l: function() { return this.$1C.get_Count() },
    set_$34Z: function(n) { return this.$eq = n, n },
    get_$e: function() {
        return Microsoft.Crm.Client.Core.Framework.$15.$5v(this.get_EntityCollection().get_key(),
            this.get_EntityCollection().get_key())
    },
    $GN: function() {
        this.$1Pu();
        this.$26P();
        this.$2gE();
        this.$uH = null;
        Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() &&
            Array.remove(Microsoft.Crm.Client.Core.Models.$1E.get_$1Mz(), this)
    },
    $1Pu: function() {
        this.$rm();
        this.$23 = null
    },
    $26P: function() {
        for (var n = 0; n < this.$1C.get_Count(); n++)
            !$0.$1(this.$1C.get_$H(n)) &&
                Sys.IDisposable.isInstanceOfType(this.$1C.get_$H(n)) &&
                this.$1C.get_$H(n).$69();
        this.$1C.$76()
    },
    $2gE: function() {
        for (var t, n = 0; n < this.$HT.get_Count(); n++)
            t = this.$HT.get_$H(n), !$0.$1(t) && Sys.IDisposable.isInstanceOfType(t) && t.dispose();
        this.$HT.$76()
    },
    $1OQ: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
        if (!this.$HT.get_Count()) return n.resolve().promise();
        var r = this, t = function(t, i) { i.$26 === 2 && n.resolve() }, i = this;
        return n.done(function() { i.$HT.remove_CollectionChanged(t) }), this.$HT.add_CollectionChanged(t), this.$HT
            .$76(), n.promise()
    },
    $1Pq: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            i = n.get_$Uo(),
            r = this,
            u = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.Delete(i, this.get_$e())
            .then(function(n) { t.resolve(n) }, function(n) { t.reject(n) }), t.promise()
    },
    $1vL: function() {},
    $1vK: function(n, t) {
        if (t.get_$BA() !== 1)
            if ($0.$1(this.$uH))
                throw Error.create(String
                    .format("OnRecordsChanged has failed in RecordCollectionModel, EventArgs.RetrieveState not Success. EventArgs.RetrieveState is {0}", Microsoft.Crm.Client.Core.Storage.DataApi.$2T.toString(t.get_$BA())));
            else {
                var i = $0.$1(t.get_$102()) ? Microsoft.Crm.Client.Core.Framework.$4.$lh(0) : t.get_$102();
                this.$uH(i);
                return
            }
        this.$GP !== 1 &&
            this.get_EntityCollection() !== t.get_$dS() &&
            (this.$rm(), this.$2Vx(t.get_$dS(),
                this.$eq && this.$50.get_currentPageIndex() === t.get_$dS().get_currentPageIndex()), this.$cH())
    },
    $2Vx: function(n, t) {
        var i = !1;
        $0.$1(this.$50) ? this.$1vr = n.get_currentPageIndex() : i = this.$50.$Co !== n.$Co;
        this.$50 = n;
        this.$1C ||
            (this.$1C = new(Microsoft.Crm.Client.Core.Framework.$6C.$$(Microsoft.Crm.Client.Core.Models.IModel)));
        t
            ? (this.$3Az(n), i && this.$Bj("MoreRecordsChanged"))
            : this.get_$Gx() === this.$1vr && this.$2WU(n) && (this.$26P(), this.$3HW(), this.$Bj("ListDataChanged"))
    },
    $2WU: function() { return!0 },
    $3HW: function() {
        for (var t, n = 0;
            n < this.get_EntityCollection().get_count();
            n++
        ) t = Microsoft.Crm.Client.Core.Models.$O.$B(this.get_EntityCollection().get_$H(n)), t.$mJ = !0, this.$1C.$2e(t)
    },
    $cH: function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$AP(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                this.get_EntityCollection().get_key(),
                this.$$d_$1vL,
                this.$$d_$1vK)
    },
    $rm: function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1a2(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                this.get_EntityCollection().get_key(),
                this.$$d_$1vL,
                this.$$d_$1vK)
    },
    $Bj: function(n) {
        if (this.$23) {
            var t = this.$23.getHandler(n);
            t && t(this, Sys.EventArgs.Empty)
        }
    },
    $3Az: function(n) {
        var t = [];
        Array.addRange(t, n.get_entities());
        var i = this, r = this, u = this;
        Microsoft.Crm.Client.Core.Models.$7g.$3B4(this.$HT,
            t,
            function(n) {
                if (!Microsoft.Crm.Client.Core.Models.$O
                    .isInstanceOfType(n)) throw Error.invalidOperation("Item should be RecordModel");
                return n.$M.$N.get_key()
            },
            function(n) {
                if (!Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord
                    .isInstanceOfType(n)) throw Error.invalidOperation("Item should be EntityRecord");
                return n.$N.get_key()
            },
            function(n, t) {
                var i = n;
                return $0.$1(i) ? (i = Microsoft.Crm.Client.Core.Models.$O.$B(t), i.$mJ = !0) : i.$7n(t), i
            },
            1021)
    }
};
Microsoft.Crm.Client.Core.Models.$O = function(n, t) {
    this.$$d_$3Ed = Function.createDelegate(this, this.$3Ed);
    this.$$d_$2PE = Function.createDelegate(this, this.$2PE);
    this.$$d_$3Eb = Function.createDelegate(this, this.$3Eb);
    this.$5i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3;
    this.$aq = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(String));
    this.$18x = {};
    this.$m = this.SetValue;
    this.get_Id = this.get_$1Z;
    this.get_ModelName = this.get_$HS;
    Microsoft.Crm.Client.Core.Models.$O.resolveInheritance();
    this.apcl = this.$2bt;
    this.rpcl = this.$3Ke;
    Microsoft.Crm.Client.Core.Models.$O.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(n, "record");
    this.$qk = {};
    this.$M = n;
    this.$lU = new Microsoft.Crm.Client.Core.Models.Formatters.$Ph(this);
    this.$3V1(this.$M);
    this.$5S = null;
    this.$GP = 0;
    this.$3VC(this.$M);
    this.$lU.$2rD();
    this.$lU.$2qx();
    this.$lU.$2r0();
    t = $0.$1(t) ? !1 : t;
    this.$1xw(this.$M, t);
    Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() && Array.add(Microsoft.Crm.Client.Core.Models.$O.get_$yP(), this)
};
Microsoft.Crm.Client.Core.Models.$O.get_$yP = function() {
    return Microsoft.Crm.Client.Core.Models.$O.$1N0 || (Microsoft.Crm.Client.Core.Models.$O.$1N0 = []), Microsoft.Crm
        .Client.Core.Models.$O.$1N0
};
Microsoft.Crm.Client.Core.Models.$O.$B = function(n) {
    var t = new Microsoft.Crm.Client.Core.Models.$O(n);
    return t.$cH(), t
};
Microsoft.Crm.Client.Core.Models.$O.$2l7 = function(n) { return new Microsoft.Crm.Client.Core.Models.$O(n) };
Microsoft.Crm.Client.Core.Models.$O.$Hx = function(n, t) {
    var i = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Models.$O,
        Microsoft.Crm.Client.Core.Framework.$4);
    return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$rL(n, t).then(function(n) {
            var t = new Microsoft.Crm.Client.Core.Models.$O(n);
            i.resolve(t)
        },
        function(n) { i.reject(n) }), i.promise()
};
Microsoft.Crm.Client.Core.Models.$O.$2KD = function(n, t, i) {
    var u = n,
        f = u.get_$52(),
        r = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Models.$O,
            Microsoft.Crm.Client.Core.Framework.$4);
    return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$rL(t, i).then(function(n) {
            var i = new Microsoft.Crm.Client.Core.Models.$O(n, !0);
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$2B(new Xrm.Gen.InitializeFromRequest(f, t, 0), u.get_$e()).then(function(n) {
                        for (var t,
                            f = new Microsoft.Crm.Client.Core.Models.$O(n.entity),
                            e = f.$M.get_fieldNames(),
                            o = e.length,
                            u = 0;
                            u < o;
                            ++u) t = e[u], t in i.$M.$1X && i.SetValue(t, f.$M.getValue(t));
                        r.resolve(i)
                    },
                    function(n) { n.$10 === -2147217919 ? r.resolve(i) : r.reject(n) })
        },
        function(n) { r.reject(n) }), r.promise()
};
Microsoft.Crm.Client.Core.Models.$O.$tC = function(n, t, i) {
    var r = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Models.$O,
            Microsoft.Crm.Client.Core.Framework.$4),
        u = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$rL(n, i);
    return u.then(function(i) {
            var h = new Microsoft.Crm.Client.Core.Models.$O(i, !0),
                f = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
                o = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
                s = t,
                e,
                u;
            for (e in s)
                u = { key: e, value: s[e] }, i.hasField(u.key)
                    ? f.add(u.key)
                    : t[u.key + "createattribute"] && (f.add(u.key), o.add(u.key));
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(n, f.toArray()),
                    Microsoft.Crm.Client.Core.Framework.$15.$5v("", "RecordModel.InitializeFromDefaultValueList:" + n))
                .then(function(n) {
                        for (var f, u = 0; u < n.get_$3XJ(); u++)
                            f = n.get_$H(u), o.contains(f.get_$1l()) &&
                                i.initializeValue(f.get_$1l(), null, f.get_$5M());
                        r.resolve(Microsoft.Crm.Client.Core.Models.$O.$35f(n, h, t))
                    },
                    function(n) { r.reject(n) })
        },
        function(n) { r.reject(n) }), r.promise()
};
Microsoft.Crm.Client.Core.Models.$O.$35f = function(n, t, i) {
    for (var o, e, u = 0; u < n.get_$3XJ(); u++) {
        var r = n.get_$H(u).get_$1l(), s = Microsoft.Crm.Client.Core.Models.$z.$6t(r), f = null;
        if (n.get_$H(u).get_$1sS() && s in t.$M.$1X) {
            switch (n.get_$H(u).get_$5M()) {
            case 9:
            case 1:
                f = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(i[r]);
                e = f !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
                    ? new Xrm.Objects.EntityReference(i[r + "type"], f, i[r + "name"])
                    : null;
                break;
            case 6:
                o = i[r + "target"];
                o = $0.$1(o) ? n.get_$H(u).get_$My()[0] : o;
                f = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(i[r]);
                e = f !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
                    ? new Xrm.Objects.EntityReference(o, f, i[r + "name"])
                    : null;
                break;
            case 0:
            case 11:
            case 13:
                e = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N.isInstanceOfType(i[r])
                    ? i[r]
                    : n.get_$H(u).get_$Bs().$2f[i[r]];
                break;
            default:
                e = i[r]
            }
            t.SetValue(r, e)
        }
    }
    return t
};
Microsoft.Crm.Client.Core.Models.$O.prototype = {
    $M: null,
    $Qe: null,
    $18g: null,
    $5S: null,
    $lU: null,
    $GP: 0,
    $ZS: 0,
    $Oq: 0,
    isDirtySetByClient: 0,
    $uG: null,
    $mJ: !1,
    $aj: 0,
    $qk: null,
    $1yO: !1,
    add_$9g: function(n) { this.eventHandlers && this.eventHandlers.addHandler("RecordUpdate", n) },
    remove_$9g: function(n) { this.eventHandlers && this.eventHandlers.removeHandler("RecordUpdate", n) },
    add_$1Zd: function(n) { this.eventHandlers && this.eventHandlers.addHandler("RecordUpdating", n) },
    remove_$1Zd: function(n) { this.eventHandlers && this.eventHandlers.removeHandler("RecordUpdating", n) },
    add_$uu: function(n) { this.eventHandlers && this.eventHandlers.addHandler("RecordEnabledChanged", n) },
    remove_$uu: function(n) { this.eventHandlers && this.eventHandlers.removeHandler("RecordEnabledChanged", n) },
    get_isDirtySetByClient: function() { return this.isDirtySetByClient },
    set_isDirtySetByClient: function(n) { return this.isDirtySetByClient = n, n },
    get_$Qf: function() {
        if ($0.$1(this.$Qe) && (this.$Qe = this.$M.$2n, $0.$1(this.$Qe.Name))) {
            var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$Qe.LogicalName);
            $0.$1(n) || (this.$Qe.Name = this.$M.getValue(n.$63))
        }
        return this.$Qe
    },
    get_$2a8: function() {
        var n;
        if ($0.$1(this.$18g)) {
            $0.$1(this.$Qe) &&
            (this.$Qe = this.$M.$2n, $0.$1(this.$Qe.Name) &&
            (n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
                .$i(this.$Qe.LogicalName), $0.$1(n) || (this.$Qe.Name = this.$M.getValue(n.$63))));
            var t = { partyid: this.$Qe },
                i = new Xrm.Objects.EntityReference("activityparty",
                    Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
            this.$18g = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord(i,
                    t,
                    { partyid: 6 },
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            this.$18g.$4P.add("partyid")
        }
        return this.$18g
    },
    get_$52: function() { return this.$M.$N },
    get_$Uo: function() { return this.$M.$2n },
    get_$1Z: function() { return this.$M.$N.Id.toString() },
    get_$HS: function() { return this.$M.$N.LogicalName },
    get_$Go: function() { return this.$M.$2n.LogicalName },
    get_$VX: function() { return this.$M.get_fieldNames() },
    get_$1ik: function() { return this.$M.$4P },
    $1Kz: !1,
    get_$fC: function() {
        var t = this.GetValue("statecode"), n, i;
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N.isInstanceOfType(t)
            ? (n = t.$1f, this.$M.$2n.LogicalName === "knowledgearticle")
            ? !$0.$1(this.$M.fields.majorversionnumber) &&
            !$0.$1(this.$M.fields.minorversionnumber) &&
            !this.$M.fields.majorversionnumber &&
            !this.$M.fields.minorversionnumber
            ? !0
            : n === 2 || n === 3
            ? (i = this.$5i.get_$K().$Eb, !i.$3ZW("7c538e3d-8e82-4f73-922e-471472954c52"))
            : n === 5 || n === 6
            : this.$M.$2n.LogicalName === "appointment" ? !(!n || n === 3) : !!n
            : !!t
    },
    get_$1DS: function() { return this.$mJ },
    set_$1DS: function(n) { return this.$mJ = n, n },
    get_$4u: function() { return this.$M.get_key() },
    get_$2Y1: function() {
        var n = null, t = this.$M.getValue("transactioncurrencyid");
        return $0.$1(t) || (n = t.Id.toString()), n
    },
    get_$e: function() {
        return Microsoft.Crm.Client.Core.Framework.$15.$5v(this.get_$Uo().toString(),
            "RecordModel:" + this.get_$Uo().toString())
    },
    $7n: function(n) {
        var u, f, i = null, e = null, p = !0, s, h, c, t, r, o, b, k, d, nt, v, y;
        if (n) {
            if (n.$N.LogicalName !== this.$M.$N.LogicalName
                ? $0.$1(this.$5S)
                ? (n = n.clone(), this.$5S = this.$M, this.$M = n, this.$1xw(this.$M, !1), u = !0, f = !1, e = this.$5S)
                : (u = !1, f = !1, i = this.$5S, e = this.$M)
                : $0.$1(this
                    .$5S)
                ? (u = !1, f = !0, i = this.$M)
                : (u = !1, f = !0, i = this.$M, e = this.$5S, p = !1), !$0.$1(i)) {
                s = n.$1X;
                for (h in s) c = { key: h, value: s[h] }, i.$1X[c.key] = c.value;
                $0.$1(n.$JA) || (i.$JA = n.$JA);
                $0.$1(n.$DE) || (i.$DE = n.$DE)
            }
            for (var w = n
                         .get_fieldNames(),
                tt = w.length,
                l = 0;
                l < tt;
                ++l)
                t = w[l], r = n.getValue(t), $0
                        .$1(r) ||
                        n.$1X[t] !== 21 ||
                        (r = r.$GM), o = this
                        .$Vc(n, t, r) ||
                        n.$4e[t], $0.$1(e) ||
                    (t in e.$1X
                        ? this.$1zw(e, t, r, o)
                        : (b = this.$lg(n, t, r), this
                            .$15O(n, t, o, b), p && this.$sI(n, t))),
                    $0.$1(i) || (i.$1X[t] = n.$1X[t], this.$1zw(i, t, r, o));
            k = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(n.get_fieldNames());
            d = k.$1pF(n.$3S);
            for (var g = d.$3O, it = g.length, a = 0; a < it; ++a) nt = g[a], this.SetValue(nt, null);
            u && this.$M.$FM !== this.$5S.$FM
                ? (v = this.eventHandlers.getHandler("PropertyChanged"), v && v(this, "accessrights"))
                : this.$3UT(n, i, f);
            u && !MscrmComponents.ObjectsEqual(this.$M.$RU, this.$5S.$RU)
                ? (y = this.eventHandlers.getHandler("PropertyChanged"), y && y(this, "usersharedattributeprivileges"))
                : this.$3Ve(n, i, f);
            this.$M.resetChanges()
        }
    },
    $3Ve: function(n, t, i) {
        if (!$0.$1(t) && !MscrmComponents.ObjectsEqual(t.$RU, n.$RU) && (t.$RU = n.$RU, i)) {
            var r = this.eventHandlers.getHandler("PropertyChanged");
            r && r(this, "usersharedattributeprivileges")
        }
    },
    $3UT: function(n, t, i) {
        var u, o;
        if (!$0.$1(t)) {
            t.$FM !== n.$FM &&
            (t.$FM = n.$FM, i &&
                (u = this.eventHandlers.getHandler("PropertyChanged"), u && u(this, "accessrights")));
            for (var s = n.$6E.$7R, c = s.length, f = 0; f < c; ++f) {
                var r = s[f],
                    e = r.get_$2M(),
                    h = t.$6E.getByRelationship(r.get_$4u()),
                    l = $0.$1(h) || h.get_count() <= 0,
                    a = $0.$1(e) || e.get_count() <= 0;
                l && a ||
                (t.$6E.addRelationship(r
                    .get_$4u(),
                    e), i && (o = this.eventHandlers.getHandler("PropertyChanged"), o && o(this, r.get_$4u().$97)))
            }
        }
    },
    $2VW: function(n, t) { this.$Fm(this.$M, n, t) },
    $3Qf: function(n, t) {
        var i, r, u;
        this.$M.hasValue(n) &&
        (i = this.$mB(this.$M, n, Microsoft.Crm.Client.Core.Framework.$a.$6f), this.$3Rg(n, t), r = this
            .$Vc(this.$M, n, i), u = this.$lg(this.$M, n, i), this.$15O(this.$M, n, r, u))
    },
    $2fv: function() {
        for (var t, i, r = this.$M.get_fieldNames(), u = r.length, n = 0;
            n < u;
            ++n
        )
            if (t = r[n], this.$M.$1X[t] === 8 &&
            (i = this.$M.getValue(t), !$0
                .$1(i) &&
                !Microsoft.Crm.Client.Core.Framework.$3.$1S(i.toString()))) return!0;
        return!1
    },
    $26C: function() {
        if (this.$M.hasField("transactioncurrencyid")) {
            if (this.$M.hasValue("transactioncurrencyid")) {
                var n = this.$M.getValue("transactioncurrencyid");
                return $0.$1(n)
            }
            return!0
        }
        return!1
    },
    $38g: function(n) {
        var t = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        return t === "transactioncurrencyid"
    },
    $88: function() {
        var n = new Microsoft.Crm.Client.Core.Models.$O(this.$M.clone()), t = $0.$1(this.$5S) ? null : this.$5S.clone();
        return n.$5S = t, n.$cH(), n
    },
    GetValue: function(n) {
        var t;
        return Array.indexOf(["opportunityproduct", "invoicedetail", "quotedetail", "salesorderdetail"],
                this.$M.$2n.LogicalName.toLowerCase()) >
            -1 &&
            Array.indexOf(["productid!name", "productidname"], n.toLowerCase()) > -1
            ? (t = this.$1q6("productid"), t && Xrm.Objects.EntityReference.isInstanceOfType(t)
                ? t.Name
                : this.$1q6("productdescription"))
            : this.$1q6(n)
    },
    $1q6: function(n) {
        var t = this.$wJ(this.$M, n);
        return $0.$1(t) && !$0.$1(this.$5S) ? this.$wJ(this.$5S, n) : t
    },
    SetValue: function(n, t, i, r) {
        $0.$1(this.$5S) || this.$1zw(this.$5S, n, t, i, r, !0, !1);
        this.$1zw(this.$M, n, t, i, r)
    },
    $1zw: function(n, t, i, r, u, f, e) {
        var h, c;
        $0.$1(f) && (f = !1);
        $0.$1(e) && (e = !0);
        var o = Microsoft.Crm.Client.Core.Models.$z.$6t(t),
            s = Microsoft.Crm.Client.Core.Models.$z.$10z(t),
            l = s !== Microsoft.Crm.Client.Core.Framework.$a.$6f,
            a = s !== Microsoft.Crm.Client.Core.Framework.$a.$12v,
            v = l && a;
        (s = v ? s : null, h = this.$wJ(n, t), $0.$1(h) && !n.hasValue(o) && f) ||
        (c = $0
            .$1(s)
            ? this.$wJ(n, o + Microsoft.Crm.Client.Core.Framework.$a.$6f)
            : h, Microsoft.Crm.Client.Core.Framework.$6
            .get_$k() &&
            t === "processid" &&
            (c = null), Microsoft.Crm.Client.Core.Framework.$2z.$Pa(h, i) ||
            Microsoft.Crm.Client.Core.Framework.$2z.$Pa(c, i) ||
            ($0.$9c(r) && (r = this.$Vc(n, o, i)), $0.$9c(u) && (u = this.$lg(n, o, i)), this.$1ta(o), this
                    .$201(n, o, s, i, r, u), o === "transactioncurrencyid" && (this.$1xw(n, !1), this.$3VA(n)),
                e && this.$sI(n, t)))
    },
    $3Rk: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$p9.set_$H(n, t);
        this.$Fm(this.$M, n);
        $0.$1(this.$5S) || this.$Fm(this.$5S, n)
    },
    $3Rh: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$pA.set_$H(n, t);
        this.$Fm(this.$M, n);
        $0.$1(this.$5S) || this.$Fm(this.$5S, n)
    },
    $3Rj: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$pC.set_$H(n, t);
        this.$Fm(this.$M, n);
        $0.$1(this.$5S) || this.$Fm(this.$5S, n)
    },
    $3Rg: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$iT.set_$H(n, t);
        this.$Fm(this.$M, n);
        $0.$1(this.$5S) || this.$Fm(this.$5S, n)
    },
    $3Ri: function(n, t) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        this.$pB.set_$H(n, t);
        this.$Fm(this.$M, n);
        $0.$1(this.$5S) || this.$Fm(this.$5S, n)
    },
    $Fm: function(n, t, i) {
        if ($0.$9c(i) || Microsoft.Crm.Client.Core.Framework.$3.$1S(t) || (this.$18x[t] = i ? !0 : !1), n.hasValue(t)) {
            var r = this.$mB(n, t, Microsoft.Crm.Client.Core.Framework.$a.$6f),
                u = this.$Vc(n, t, r),
                f = this.$lg(n, t, r);
            this.$15O(n, t, u, f)
        }
    },
    $2zp: function(n, t, i) {
        var f, r, u, e;
        return n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), f = MscrmComponents
            .DeferredPromiseFactory(Microsoft.Crm.Client.Core.Models.Validation.$7S,
                Microsoft.Crm.Client.Core.Framework.$4), r = this.$11F(n, t), r
            ? f.resolve(r)
            : (u = this, e = this, this.$1Sz(n).then(function(e) {
                    u.$2zj(n).then(function(o) {
                            if (u.$3P) {
                                f.resolve(null);
                                return
                            }
                            if (r = u.$11F(n, t), !r) {
                                var s = o === 2 || o === 1, h = !0;
                                s &&
                                    e.get_$mx() &&
                                    (h = i ||
                                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K()
                                        .$t1(e, 2, u.$M));
                                switch (t) {
                                case 2:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation
                                        .IntegerValidator(s, h, Math.floor(e.get_$Zg()), Math.floor(e.get_$Za()));
                                    break;
                                case 3:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation
                                        .DecimalValidator(s,
                                            h,
                                            u.GetEffectiveMinValue(n),
                                            u.GetEffectiveMaxValue(n),
                                            u.GetEffectivePrecisionValue(n));
                                    break;
                                case 4:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation
                                        .MoneyValidator(s,
                                            h,
                                            u.GetEffectiveMinValue(n),
                                            u.GetEffectiveMaxValue(n),
                                            u.GetEffectivePrecisionValue(n),
                                            !1);
                                    break;
                                case 5:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator(s, h);
                                    break;
                                case 6:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation.UrlValidator(s, h);
                                    break;
                                case 7:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator(s, h, !1);
                                    break;
                                case 8:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation
                                        .DateTimeValidator(s, h, u.$1Si(n), u.GetMinDate(n));
                                    break;
                                default:
                                    r = new Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator(s, h)
                                }
                                u.$2WM(n, t, r)
                            }
                            f.resolve(r)
                        },
                        function(n) { f.reject(n) })
                },
                function(n) { f.reject(n) })), f.promise()
    },
    $2zh: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = MscrmComponents.DeferredPromiseFactory(Number, Microsoft.Crm.Client.Core.Framework.$4),
            i = this,
            r = this;
        return this.$1Sz(n).then(function(n) { n.get_$1F1() > 0 ? t.resolve(n.get_$1F1()) : t.reject() },
            function(n) { t.reject(n) }), t.promise()
    },
    $2zj: function(n) {
        var t, i, r;
        return n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), t = MscrmComponents
            .DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework
                .$3U,
                Microsoft.Crm.Client.Core.Framework.$4), n === "subject" && this.get_$HS() === "annotation"
            ? t.resolve(0)
            : (i = this, r = this, this.$1Sz(n).then(function(n) { t.resolve(n.get_$Tz()) },
                function(n) { t.reject(n) })), t.promise()
    },
    $F6: function() { return this.isDirtySetByClient ? this.isDirtySetByClient === 1 ? !0 : !1 : this.$M.$F6() },
    $2JU: function(n) { return this.$M.hasField(n) ? !0 : $0.$1(this.$5S) ? !1 : this.$5S.hasField(n) },
    $1br: function() {
        this.$aj++;
        this.$GP = 1
    },
    $1Zt: function() {
        this.$aj = Math.max(this.$aj - 1, 0);
        this.$aj || (this.$GP = 0)
    },
    $GN: function() {
        Microsoft.Crm.Client.Core.Models.$z.prototype.$GN.call(this);
        this.$rm();
        this.$uG = null;
        this.$lU = null;
        this.$qk = null;
        Microsoft.Crm.Client.Core.Framework.$1r.get_$UF() &&
            Array.remove(Microsoft.Crm.Client.Core.Models.$O.get_$yP(), this)
    },
    $3Eb: function() {
        this.$ZS = 0;
        this.$Oq = 0;
        this.$AC("RecordUpdating", null);
        return
    },
    $2PE: function(n, t) {
        var i, r;
        if (!t.get_$b7() && !t.get_$3aU()) {
            this.$ZS = t.get_$BA();
            this.$AC("RecordUpdate", new Microsoft.Crm.Client.Core.Storage.DataApi.$Om(t.get_$BA(), t.get_$3aU()));
            return
        }
        if (t.get_$BA() === 2) {
            this.$1Kz = !0;
            this.$Oq = 2;
            this.$AC("RecordUpdate", new Microsoft.Crm.Client.Core.Storage.DataApi.$Om(t.get_$BA(), t.get_$3aU()));
            $0.$1(this.$uG) ||
                (i = $0.$1(t.get_$102()) ? Microsoft.Crm.Client.Core.Framework.$4.$lh(0) : t.get_$102(), this.$uG(i));
            this.$69();
            return
        }
        if (t.get_$BA() !== 1)
            if (this.$Oq = 3, $0.$1(this.$uG))
                throw Error.create(String
                    .format("OnRecordsChanged has failed in RecordModel, EventArgs.RetrieveState not Success. EventArgs.RetrieveState is {0}", Microsoft.Crm.Client.Core.Storage.DataApi.$2T.toString(t.get_$BA())));
            else {
                r = $0.$1(t.get_$102()) ? Microsoft.Crm.Client.Core.Framework.$4.$lh(0) : t.get_$102();
                this.$uG(r);
                return
            }
        if (this.$GP !== 1 ||
            Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
            window.location.href &&
            window.location.href.toString().indexOf("pagetype") > -1) {
            if (t
                .get_$3aU() ===
                1
                ? this.$Oq = t.get_$BA()
                : t.get_$3aU() || (this.$ZS = t.get_$BA()), this.$M === t.get_$dS()) {
                this.$AC("RecordUpdate", new Microsoft.Crm.Client.Core.Storage.DataApi.$Om(t.get_$BA(), t.get_$3aU()));
                return
            }
            this.$3Uw(t)
        }
    },
    $3Uw: function(n) {
        var t = n.get_$dS();
        this.$7n(t);
        this.$AC("RecordUpdate", new Microsoft.Crm.Client.Core.Storage.DataApi.$Om(n.get_$BA(), n.get_$3aU()))
    },
    $3Ed: function() {
        this.$1Kz = !0;
        this.$Oq = 2;
        this.$69()
    },
    $cH: function() {
        this.$5i.get_$6M().$AP(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            this.$M.get_key(),
            this.$$d_$3Eb,
            this.$$d_$2PE);
        this.$5i.get_$6M().$2b8(this.$M.get_key(), this.$$d_$3Ed)
    },
    $rm: function() {
        this.$5i &&
        (this.$5i.get_$6M().$1a2(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            this.$M.get_key(),
            this.$$d_$3Eb,
            this.$$d_$2PE), this.$5i.get_$6M().$3KL(this.$M.get_key(), this.$$d_$3Ed))
    },
    $1ta: function(n) { this.$aq.$3ZW(n) && this.$aq.get_$H(n) === "never" || this.$M.markFieldChanged(n) },
    $3VC: function(n) {
        for (var t, u, r = n.get_fieldNames(), f = r.length, i = 0; i < f; ++i) {
            t = r[i];
            switch (n.$1X[t]) {
            case 18:
            case 5:
            case 4:
            case 3:
                n.$Jf[t] = n.$4e[t];
                break;
            case 8:
                u = this.$lg(n, t, n.getValue(t));
                n.$Jf[t] = u
            }
        }
    },
    $3V1: function(n) {
        var t;
        if (Microsoft.Crm.Client.Core.Storage.Common.$1U.$Bo(n.$N.LogicalName))
            for (var r = n.get_fieldNames(), u = r.length, i = 0; i < u; ++i) {
                t = r[i];
                switch (n.$1X[t]) {
                case 18:
                case 5:
                case 4:
                case 3:
                case 8:
                case 2:
                    $0.$1(n.$4e[t]) && (n.$4e[t] = this.$Vc(n, t, n.getValue(t)))
                }
            }
        else
            $0.$1(n.getValue("scheduledstart")) ||
                (n.$4e.scheduledstart = this
                    .$Vc(n, "scheduledstart", n.getValue("scheduledstart"))),
                $0.$1(n.getValue("scheduledend")) ||
                (n.$4e.scheduledend = this
                    .$Vc(n, "scheduledend", n.getValue("scheduledend"))),
                $0.$1(n.getValue("actualdurationminutes")) ||
                (n.$4e.actualdurationminutes = this
                    .$Vc(n, "actualdurationminutes", n.getValue("actualdurationminutes")))
    },
    $3VA: function(n) {
        for (var t, r, u = n.get_fieldNames(), f = u.length, i = 0;
            i < f;
            ++i
        )
            t = u[i], n.$1X[t] === 8 &&
                (r = n.getValue(t), n.$4e[t] = this.$Vc(n, t, r), n.$Jf[t] = this.$lg(n, t, r), this.$sI(n, t))
    },
    $wJ: function(n, t) {
        var i, r;
        return Microsoft.Crm.Client.Core.Framework.Utils.$E.$4k(t, "fieldName"), i = n.$6E
            .getByRelationshipName(t), $0.$1(i)
            ? n.hasValue(t)
            ? this.$mB(n, t, null)
            : (r = Microsoft.Crm.Client.Core.Models.$z.$6t(t), !n.hasValue(r))
            ? null
            : this.$mB(n, r, Microsoft.Crm.Client.Core.Models.$z.$10z(t))
            : i.get_$H(0)
    },
    $mB: function(n, t, i) {
        var l = !$0.$1(i),
            e = i === Microsoft.Crm.Client.Core.Framework.$a.$6f,
            o = i === Microsoft.Crm.Client.Core.Framework.$a.$12v,
            s = l && !e && !o,
            u = null,
            r = n.getValue(t),
            c;
        if (!$0.$1(r)) {
            var h = n.getFormattedValue(t), a = n.getNumericFormattedValue(t), f = n.$1X[t];
            f === 21 && (f = r.$k2, r = r.$GM);
            c = this.GetEffectiveAttributeFormat(t);
            c === "tickersymbol" && (r = h);
            switch (f) {
            case 1:
            case 6:
            case 9:
                !$0.$1(i) && i.startsWith("!") && (i = i.substr(1));
                u = s ? r.getValue(i) : r;
                break;
            case 13:
            case 12:
            case 0:
            case 11:
                u = s ? r.getValue(i) : r;
                break;
            default:
                u = e ? r : o ? a : h
            }
        }
        return u
    },
    $201: function(n, t, i, r, u, f) {
        var e, o;
        $0.$1(i)
            ? (n.setValue(t, r), this.$15O(n, t, u, f))
            : (e = n.getValue(t), Xrm.Objects.EntityReference.isInstanceOfType(e) && (o = e, o.setValue(i, r)))
    },
    $15O: function(n, t, i, r) {
        n.$4e[t] = i;
        n.$Jf[t] = r
    },
    $2xs: function(n) {
        var t = this.$5i.get_$V().$2V(this.$M.$2n.LogicalName, n);
        return t && t.$BM ? t.$BM.toLowerCase() : ""
    },
    $1Si: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = this.$5i.get_$V().$2V(this.$M.$2n.LogicalName, n);
        return t && t.$BZ ? t.$BZ : 1
    },
    getAttributeType: function(n) { return n = Microsoft.Crm.Client.Core.Models.$z.$6t(n), this.$M.$1X[n] },
    $Vc: function(n, t, i) {
        var r = n.$1X[t];
        return this.$lU.$Vc(r, t, i)
    },
    $lg: function(n, t, i) {
        var r = n.$1X[t];
        return this.$lU.$lg(r, t, i)
    },
    discardChanges: function() {
        var i = this.$M.$yo, n, t;
        for (n in i) t = { key: n, value: i[n] }, this.SetValue(t.key.toString(), t.value);
        this.$M.resetChanges()
    },
    $28L: function(n, t) {
        var i = this.$2Ae(n);
        return $0.$1(i) ? null : i.$28L(n, t)
    },
    $2HG: function(n) {
        var t = this.$2Ae(n);
        return $0.$1(t) ? null : t.getFieldObjectData(n)
    },
    $2Ae: function(n) { return this.$M.hasField(n) ? this.$M : this.$5S && this.$5S.hasField(n) ? this.$5S : null },
    $2HC: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = this.$5i.get_$V().$2V(this.$M.$2n.LogicalName, n);
        return $0.$1(t) ? this.$31y(n) : this.$1p6(t)
    },
    $2HE: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = this.$5i.get_$V().$2V(this.$M.$2n.LogicalName, n);
        return $0.$1(t) ? this.$31z() : t.$CI
    },
    $2HF: function(n) {
        n = Microsoft.Crm.Client.Core.Models.$z.$6t(n);
        var t = this.$5i.get_$V().$2V(this.$M.$2n.LogicalName, n);
        return $0.$1(t) ? this.$320() : t.$CK
    },
    $2HA: function(n, t) {
        var i = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            r = this,
            u = this;
        return this.$1Sz(n).then(function(n) {
                for (var f = {}, u = 0; u < t.length; u++) f[t[u]] = r.$2zg(t[u], n);
                i.resolve(f)
            },
            function(n) { i.reject(n) }), i.promise()
    },
    $2zg: function(n, t) {
        var i = null;
        if ($0.$1(t)) return i;
        switch (n.toLowerCase()) {
        case"displayname":
            i = t.get_$AB();
            break;
        case"logicalname":
        case"name":
            i = t.get_$1l();
            break;
        case"issecured":
            i = t.get_$mx();
            break;
        case"type":
            i = $0.$1(t.get_$5M()) ? "unknown" : Xrm.Objects.AttributeType.toString(t.get_$5M()).toLowerCase();
            break;
        case"format":
            i = t.get_$MD();
            break;
        case"behavior":
            i = t.get_$1NX();
            break;
        case"minvalue":
            i = t.get_$Zg();
            break;
        case"maxvalue":
            i = t.get_$Za();
            break;
        case"maxlength":
            i = t.get_$1F1();
            break;
        case"optionset":
        case"options":
            i = t.get_$Bs();
            break;
        case"defaultvalue":
            i = $0.$1(t.get_$1Ai()) ? t.get_$1Pl() : t.get_$1Ai();
            break;
        case"precision":
            i = this.$1p6(t);
            break;
        case"targets":
            i = t.get_$My();
            break;
        case"imemode":
            i = t.get_$2Jv();
            break;
        case"requiredlevel":
            i = t.get_$Tz();
            break;
        case"sourcetype":
            i = t.get_$2Wu();
            break;
        case"lastupdatedfield":
            i = Microsoft.Crm.Client.Core.Framework.$2P.$2IW(t.get_$1l())
        }
        return i
    },
    $31z: function() { return Number.MAX_VALUE },
    $320: function() { return Number.MIN_VALUE },
    $31y: function(n) {
        var t = null, i;
        if (this.$M.hasField(n) ? t = this.$M : this.$5S && this.$5S.hasField(n) && (t = this.$5S), t) {
            i = this.$M.$1X[n];
            switch (i) {
            case 3:
            case 4:
                return this.$5i.get_$K().$2L.$IS.NumberDecimalDigits;
            case 8:
                return this.get_$2ZB()
            }
        }
        return 0
    },
    $1xw: function(n, t) {
        var i, r, u, e, f;
        this.$M.$N.LogicalName !== "transactioncurrency" &&
            (n.hasField("transactioncurrencyid") || n.$34e(8)) &&
            (i = this
                    .$mB(n, "transactioncurrencyid", null), $0.$1(i) &&
                    t &&
                    (r = this.$5i.get_$K().$so(), $0.$1(r) ||
                    (i = new Xrm.Objects.EntityReference("transactioncurrency", r.$9U, r.$Gv), n.$1X
                        .transactioncurrencyid = 6, this.$1ta("transactioncurrencyid"), this
                        .$201(n, "transactioncurrencyid", null, i, null, null))),
                $0.$1(i) ||
                    this.$M.$1X.transactioncurrencyid !== 6 ||
                    (u = i.getValue("currencysymbol"), $0
                        .$1(u) &&
                        (e = i.Id.toString(), u = this.$5i.get_$K().$1DA(e)), i
                        .setValue("currencysymbol", u)), this.eventHandlers &&
                (f = this.eventHandlers
                    .getHandler("PropertyChanged"), f && f(this, "transactioncurrencyid!currencysymbol")))
    },
    $AC: function(n, t) {
        var i = this.eventHandlers.getHandler(n);
        i && i(this, t)
    },
    $sI: function(n, t) {
        var i = Microsoft.Crm.Client.Core.Models.$z.$6t(t), r = n.$1X[i];
        this.$1ms(t, r);
        i === "statecode" && this.$AC("RecordEnabledChanged", null)
    },
    $1Sz: function(n) {
        var i = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.Common.$2M,
                Microsoft.Crm.Client.Core.Framework.$4),
            u = this.$M.$2n.LogicalName,
            e = this.$M.$1X[n],
            f;
        if (e === 21 && (f = this.$M.getValue(n), u = f.$T, n = f.$EA), this.$2YE(u, n, i)) return i.promise();
        var r = new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(u, [n]), o = this, t = this;
        return this.$5i.$4j(r, this.get_$e()).then(function(t) {
                o.$Gs(u, n, t.get_$H(0));
                i.resolve(t.get_$H(0))
            },
            function(u) {
                $0.$1(t.$5S)
                    ? t.$1yO && t.$M.$2n.LogicalName !== t.$M.$N.LogicalName
                    ? (r = new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(t.$M.$N.LogicalName, [n]), t.$5i
                        .$4j(r, t.get_$e()).then(function(n) { i.resolve(n.get_$H(0)) }, function(n) { i.reject(n) }))
                    : i.reject(u)
                    : (r = new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(t.$5S.$2n.LogicalName, [n]), t.$5i
                        .$4j(r, t.get_$e()).then(function(n) { i.resolve(n.get_$H(0)) }, function(n) { i.reject(n) }))
            }), i.promise()
    },
    $2YE: function(n, t, i) {
        if (n in this.$qk) {
            var r = this.$qk[n];
            if (t in r) return i.resolve(r[t]), !0
        } else this.$qk[n] = {};
        return!1
    },
    $Gs: function(n, t, i) {
        var r = this.$qk[n];
        r[t] = i
    }
};
Microsoft.Crm.Client.Core.Models.$Iv = function() {};
Microsoft.Crm.Client.Core.Models.$Iv.prototype = {
    $ZP: "",
    $R6: null,
    $Ij: "",
    $Jx: "",
    $Jy: "",
    $RK: "",
    $RL: "",
    $iI: "",
    $20O: 0,
    $1eJ: 0,
    $19J: null,
    $TD: null,
    get_LeftCornerText: function() { return this.$ZP },
    set_LeftCornerText: function(n) { return this.$ZP = n, n },
    get_RightCornerText: function() { return this.$R6 },
    set_RightCornerText: function(n) { return this.$R6 = n, n },
    get_Text1: function() { return this.$Ij },
    set_Text1: function(n) { return this.$Ij = n, n },
    get_Text2: function() { return this.$Jx },
    set_Text2: function(n) { return this.$Jx = n, n },
    get_Text3: function() { return this.$Jy },
    set_Text3: function(n) { return this.$Jy = n, n },
    get_Text4: function() { return this.$RK },
    set_Text4: function(n) { return this.$RK = n, n },
    get_Text5: function() { return this.$RL },
    set_Text5: function(n) { return this.$RL = n, n },
    get_Text6: function() { return this.$iI },
    set_Text6: function(n) { return this.$iI = n, n },
    get_$3Sd: function() { return this.$20O },
    get_$1Jp: function() { return this.$1eJ },
    set_$1Jp: function(n) { return this.$1eJ = n, n },
    get_$KJ: function() { return this.$19J },
    set_$KJ: function(n) { return this.$19J = n, n },
    get_$1U2: function() { return this.$TD },
    set_$1U2: function(n) { return this.$TD = n, n },
    get_$3Se: function() { return[this.$Ij] },
    get_$3X3: function() { return[this.$Ij, this.$Jx, this.$Jy, this.$RK, this.$RL, this.$iI] },
    $o2: function(n) {
        var t = !$0.$1(n);
        t &&
        ("Text1" in n && (this.$Ij = n.Text1), "Text2" in n && (this.$Jx = n.Text2),
            "Text3" in n && (this.$Jy = n.Text3), "Text4" in n && (this.$RK = n.Text4),
            "Text5" in n && (this.$RL = n.Text5), "Text6" in n && (this.$iI = n.Text6),
            "RightCornerText" in n && (this.$R6 = n.RightCornerText),
            "LeftCornerText" in n && (this.$ZP = n.LeftCornerText), "ImageSource" in n && (this.$TD = n.ImageSource))
    },
    $kT: function() {
        var n = {};
        return n.Text1 = this.$Ij, n.Text2 = this.$Jx, n.Text3 = this.$Jy, n.Text4 = this.$RK, n.Text5 = this.$RL, n
            .Text6 = this.$iI, n.RightCornerText = this.$R6, n.LeftCornerText = this.$ZP, n.ImageSource = this.$TD, n
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Constants");
Microsoft.Crm.Client.Core.Models.Constants.$Iu = function(n) {
    this.functionName = n;
    this.passExecutionContext = !1
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Descriptors");
Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet = function(n, t, i) {
    this.Id = n;
    this.Sequence = i;
    this.Controls = $0.$1(t) ? new Array(0) : t
};
Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor = function(n, t, i, r, u, f, e, o, s, h) {
    this.Id = n;
    this.ControlType = t;
    this.LabelText = r;
    this.Command = i;
    this.Sequence = u;
    this.CommandType = f;
    this.ImageId = e;
    this.ImageType = o;
    this.CommandParameters = $0.$1(s) ? {} : s;
    this.Children = new Array(0);
    this.AvailableOffline = h
};
Microsoft.Crm.Client.Core.Models.Descriptors.ComponentDefinitionDescriptor = function() {};
Microsoft.Crm.Client.Core.Models.Descriptors.$U = function() {};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2jT = function(n, t, i) {
    return Microsoft.Crm.Client.Core.Models.Descriptors.$U.$28S(n, n, t, i, "Profile Picture")
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2kx = function(n, t) {
    return Microsoft.Crm.Client.Core.Models.Descriptors.$U.$28S("entityimage", null, n, t, "Profile Picture")
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2jx = function(n, t, i) {
    var u = new Microsoft.Crm.Client.Core.Models.Descriptors.ComponentDefinitionDescriptor,
        f = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2jJ(null),
        r = {};
    return r.DashboardName = Microsoft.Crm.Client.Core.Models.Descriptors.$U
        .$2jK("DashboardName", "form_header_primaryfield no_dashboard", null, null), r.PageSearchHeader = Microsoft.Crm
        .Client.Core.Models.Descriptors.$U.$2ka(), f.ChildViewModels = r, u.ViewModelDescriptor = new Microsoft.Crm
        .Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor(Microsoft.Crm.Client.Core.Framework.$1.toString(1),
            "RootView",
            "Workspace",
            null,
            null,
            [
                f, Microsoft.Crm.Client.Core.Models.Descriptors.$U
                .$2k6([
                    Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2k8(n, i), Microsoft.Crm.Client.Core.Models
                    .Descriptors.$U.$2ja(t)
                ])
            ],
            null), u
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2k6 = function(n) {
    return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor("PanoramaContainer", "PanoramaContainer", "PaneContainer", null, null, n)
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2jK = function(n, t, i, r) {
    return Microsoft.Crm.Client.Core.Models.Descriptors.$U
        .$3Xb("Label", "label", n, i, null, null, { LabelCssClass: t }, r)
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2ka = function() {
    return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor("PageSearchHeaderViewModel",
            "PageSearchHeader",
            "PageSearchHeader",
            null,
            { Enabled: "true", Visible: "true" })
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2jJ = function(n) {
    return Microsoft.Crm.Client.Core.Models.Descriptors.$U
        .$3Xb("FormHeader", "FormHeader", "HeaderGroup", null, null, n, { CssClass: "form_header" }, null)
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2ja = function(n) {
    return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor("PanoramaItem",
            "PanoramaItem",
            "LabelPane",
            null,
            null,
            [
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("Label",
                    "label",
                    "label",
                    [new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Data", n)],
                    null,
                    null)
            ])
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2k8 = function(n, t) {
    return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor("PanoramaItem",
            "PanoramaItem",
            "PinnedTilesPane",
            [
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Label", t),
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Visible", n)
            ],
            { CssClass: "pinnedTilesPane", FixedWidth: !1 },
            [Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2eJ("PinnedTilesList", !0, n)])
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2eJ = function(n, t, i) {
    var r = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor)),
        f,
        u;
    return r.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ValuePropertyDescriptor("ListItemViewModelDescriptor",
            Microsoft.Crm.Client.Core.Models.Descriptors.$U
            .$2eI())), r.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ValuePropertyDescriptor("IsSortable", t)), r.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ValuePropertyDescriptor("ItemContextId", "pinnedtile")), r
        .add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ActionProviderPropertyDescriptor("ActionProvider",
                "ActionProvider",
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("PinnedTiles", null))), r
        .add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ValuePropertyDescriptor("Visible", i)), t &&
    (r.add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ActionProviderPropertyDescriptor("PersonalizationActionProvider",
            "ActionProvider",
            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrievePersonalization", null))), r
        .add(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ValuePropertyDescriptor("IsRelationshipPinnedTiles", !1))), f = new Microsoft.Crm.Client.Core.Models
        .Descriptors.ViewModel.ViewModelDescriptor("CrmTileContainerViewModel",
            "CrmTileContainer",
            n,
            r.toArray(),
            {},
            null), u = new Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor, f.ControlProperties
        .ListItemDescriptor = u, u.TypeName = "ListItem", u.ChildControlViewDescriptors = {}, u
        .ChildControlViewDescriptors.tile = Microsoft.Crm.Client.Core.Models.Descriptors.$U
        .$3Xa("CrmTile", "PinnedTile"), f
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2eI = function() {
    return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor("ListItem",
            null,
            "PinnedTileItem",
            null,
            null,
            [
                Microsoft.Crm.Client.Core.Models.Descriptors.$U
                .$3Xb("CrmTile", null, "PinnedTile", null, null, null, null, null)
            ],
            null)
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$3Xa = function(n, t, i) {
    var r = new Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor, u;
    return r.TypeName = n, r.BindingPath = t, u = null, $0
        .$1(i)
        ? n === "Money" && (u = "CurrencyToString")
        : u = i, $0.$1(u) || (r.Properties = {}, r.Properties.converter = u), r
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$1AE = function(n, t, i, r, u) {
    return Microsoft.Crm.Client.Core.Models.Descriptors.$U.$3Xb(n, null, t, i, r, u, null, null, null)
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$3Xb = function(n, t, i, r, u, f, e, o, s, h) {
    var c, l, a, v;
    return $0.$1(f) && (f = new Array(0)), $0.$1(h) && (h = 0), c = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .PropertyDescriptor))(f), $0.$9c(r) ||
        Microsoft.Crm.Client.Core.Framework.$3.$A(r) ||
        n === "SimpleButtonViewModel"
        ? $0.$9c(o) ||
        Microsoft.Crm.Client.Core.Framework.$3.$A(o) ||
        (a = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Data", o), c
            .add(a), Microsoft.Crm.Client.Core.Models.Descriptors.$U.$22M.contains(n) &&
        (a = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Value", o), c
            .add(a)))
        : (l = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ReferencePropertyDescriptor("Data", r, null, h), c
            .add(l), Microsoft.Crm.Client.Core.Models.Descriptors.$U.$22M.contains(n) &&
        (l = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ReferencePropertyDescriptor("Value", r, null, h), c
            .add(l))), $0.$1(u) ||
    (v = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Label", u), c
        .add(v)), new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor(n, t, i, c.toArray(), e, null, null, s)
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu = function(n) {
    var t = new Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor, r, u, f, i;
    t.BindingPath = n.Name;
    t.TypeName = n.ControlTypeName;
    t.Properties = $0.$1(n.ControlProperties) ? {} : n.ControlProperties;
    t.ChildControlViewDescriptors = {};
    r = n.ChildViewModels;
    for (u in r)
        f = { key: u, value: r[u] }, i = f.value, $0.$1(i) ||
            $0.$1(i.ControlTypeName) ||
            (t.ChildControlViewDescriptors[f.key] = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(i));
    return t
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2e1 = function(n, t, i, r, u) {
    return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
        .ViewModelDescriptor("Button",
            "Button",
            n,
            [
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Label", t),
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Text", t),
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Parameters", r),
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ValuePropertyDescriptor("AvailableOffline", $0.$1(u) ? !1 : u), new Microsoft.Crm.Client.Core.Models
                .Descriptors.ViewModel.ValuePropertyDescriptor("Command", i)
            ],
            { Enabled: "true", Visible: "true" })
};
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2ID = function(n, t) { return n + "_" + t + "_EditModeSection" };
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$31f = function(n, t) { return n + "_" + t + "_StageAction" };
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$28S = function(n, t, i, r, u) {
    return Microsoft.Crm.Client.Core.Models.Descriptors.$U
        .$3Xb("Image",
            null,
            n,
            t,
            null,
            [
                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ValuePropertyDescriptor("Width", $0.$1(i) ? "150px" : i), new Microsoft.Crm.Client.Core.Models
                .Descriptors.ViewModel.ValuePropertyDescriptor("Height", $0.$1(r) ? "150px" : r), new Microsoft.Crm
                .Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("AltText", u)
            ],
            null,
            null)
};
Microsoft.Crm.Client.Core.Models.Descriptors.SerializedValueDescriptor = function() {};
Microsoft.Crm.Client.Core.Models.Descriptors.SerializedValueDescriptor.prototype = { ValueTypeName: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.MailApp");
Microsoft.Crm.Client.Core.Models.MailApp.$Qe = function(n) {
    Microsoft.Crm.Client.Core.Models.MailApp.$Qe.initializeBase(this, [n]);
    switch (n.CalendarItemType) {
    case"Single":
        this.$PF = 0;
        break;
    case"Occurrence":
        this.$PF = 1;
        break;
    case"Exception":
        this.$PF = 2;
        break;
    case"SeriesMaster":
    case"RecurringMaster":
        this.$PF = 3
    }
    this.$188 = new Date(n.ScheduleStart);
    this.$qK = new Date(n.ScheduleEnd);
    this.$1Kx = n.IsAllDayEvent;
    this.$17f = n.Location;
    this.$xM = n.IsRecurring;
    this.$xj = n.RecurrencePatternDetails
};
Microsoft.Crm.Client.Core.Models.MailApp.$Qe.prototype = {
    $PF: 0,
    $188: null,
    $qK: null,
    $1Kx: !1,
    $17f: null,
    $xM: !1,
    $xj: null,
    $88: function() {
        var n = Microsoft.Crm.Client.Core.Models.MailApp.$J5.prototype.$88.call(this);
        return n.$PF = this.$PF, n.$188 = this.$188, n.$qK = this.$qK, n.$9n = this.$9n, n.$1Kx = this.$1Kx, n
            .$17f = this.$17f, n.$xM = this.$xM, n.$xj = this.$xj, n
    }
};
Microsoft.Crm.Client.Core.Models.MailApp.$Iw = function() {};
Microsoft.Crm.Client.Core.Models.MailApp.$Iw.prototype = { $Db: null, $XS: null, $q7: null, $wq: null };
Microsoft.Crm.Client.Core.Models.MailApp.$Ql = function(n) {
    Microsoft.Crm.Client.Core.Models.MailApp.$Ql.initializeBase(this);
    this.$1LV = n
};
Microsoft.Crm.Client.Core.Models.MailApp.$Ql.prototype = { $1LV: 0, $1g3: null };
Microsoft.Crm.Client.Core.Models.MailApp.$DF = function() {
    this.$38T = Microsoft.Crm.Client.Core.Framework.$1D.$19L;
    this.$Ja = new Microsoft.Crm.Client.Core.Models.MailApp.$Iw;
    Microsoft.Crm.Client.Core.Models.MailApp.$DF.initializeBase(this)
};
Microsoft.Crm.Client.Core.Models.MailApp.$DF.prototype = {
    $7z: null,
    $1hP: null,
    $1wD: null,
    $1H2: 0,
    $1QD: 0,
    set_$1xv: function(n) { return this.$1H2 !== n && (this.$1H2 = n, this.$8("ResolveRecipientsStatus")), n },
    set_$1QE: function(n) { return this.$1QD !== n && (this.$1QD = n, this.$8("EmailContextActionStatus")), n },
    set_$1lb: function(n) { return this.$7z !== n && (this.$7z = n, this.$8("EmailItem")), n },
    $ww: null,
    get_$DK: function() {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1fn === "appointment" ? 1 : 0
    },
    $1LK: null,
    $ja: null,
    $1MD: null,
    $1KC: null,
    $1K8: null,
    $bl: null,
    $be: null,
    $xf: null,
    set_$2c3: function(n) { return this.$1hP !== n && (this.$1hP = n, this.$8("Addresses")), n },
    set_$3HE: function(n) { return this.$1wD !== n && (this.$1wD = n, this.$8("PhoneNumbers")), n },
    $17c: !1
};
Microsoft.Crm.Client.Core.Models.MailApp.$J3 = function() {};
Microsoft.Crm.Client.Core.Models.MailApp.$J3.prototype = { SelectedRecipientEmailAddress: null };
Microsoft.Crm.Client.Core.Models.MailApp.$J5 = function(n) {
    this.$2Z = n.Id;
    this.$G2 = n.RegardingObjectId;
    this.$9n = n.State;
    this.$KC = n.RegardingObjectName;
    var t = parseInt(n.RegardingObjectType), i = parseInt(n.CrmIsFollowed);
    this.$Aj = n.CrmId;
    this.$Xc = n.InternetMessageId;
    this.$PK = n.ItemType;
    this.$pu = "ItemClass" in n ? n.ItemClass : "";
    this.$wm = n.CrmObjectTypeCode;
    isNaN(t) || (this.$Gn = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$Bm(t).$d);
    isNaN(i) || (this.$UQ = i ? !0 : !1)
};
Microsoft.Crm.Client.Core.Models.MailApp.$J5.prototype = {
    $2Z: null,
    get_id: function() { return this.$2Z },
    set_id: function(n) { return this.$2Z = n, n },
    $Xc: null,
    get_internetMessageId: function() { return this.$Xc },
    set_internetMessageId: function(n) { return this.$Xc = n, n },
    $G2: null,
    get_regardingObjectId: function() { return this.$G2 },
    set_regardingObjectId: function(n) { return this.$G2 = n, n },
    $9n: 0,
    get_state: function() { return this.$9n },
    set_state: function(n) { return this.$9n = n, n },
    $KC: null,
    get_regardingObjectName: function() { return this.$KC },
    set_regardingObjectName: function(n) { return this.$KC = n, n },
    $Gn: null,
    get_regardingObjectType: function() { return this.$Gn },
    set_regardingObjectType: function(n) { return this.$Gn = n, n },
    $Aj: null,
    get_crmId: function() { return this.$Aj },
    set_crmId: function(n) { return this.$Aj = n, n },
    $PK: null,
    get_itemType: function() { return this.$PK },
    set_itemType: function(n) { return this.$PK = n, n },
    $pu: null,
    get_itemClass: function() { return this.$pu },
    set_itemClass: function(n) { return this.$pu = n, n },
    $UQ: !1,
    get_crmIsFollowed: function() { return this.$UQ },
    set_crmIsFollowed: function(n) { return this.$UQ = n, n },
    $wm: 0,
    get_crmObjectTypeCode: function() { return this.$wm },
    set_crmObjectTypeCode: function(n) { return this.$wm = n, n },
    $88: function() {
        var n = new Microsoft.Crm.Client.Core.Models.MailApp.$J5({});
        return n.$2Z = this.$2Z, n.$Aj = this.$Aj, n.$UQ = this.$UQ, n.$G2 = this.$G2, n.$9n = this.$9n, n.$KC = this
            .$KC, n.$Xc = this.$Xc, n.$PK = this.$PK, n.$Gn = this.$Gn, n
    }
};
Microsoft.Crm.Client.Core.Models.MailApp.$Qi = function(n, t) {
    Microsoft.Crm.Client.Core.Models.MailApp.$Qi.initializeBase(this);
    this.$jt = n;
    $0.$1(t) ? this.$3AC(n) : this.$39W(t)
};
Microsoft.Crm.Client.Core.Models.MailApp.$Qi.prototype = {
    $jt: null,
    $Nl: null,
    $7a: null,
    $3AC: function(n) {
        var t = Microsoft.Crm.Client.Core.Framework.$3.$1S(n.$4Z) || n.$4Z === n.$Ak;
        this.$4Z = Microsoft.Crm.Client.Core.Framework.$3.$1S(n.$4Z) ? n.$Ak : n.$4Z;
        n.$182 !== 1 && this.set_InitialsText(n.$4Z === n.$Ak ? null : n.$4Z);
        this.set_Text(t ? this.$4Z.split("@")[0] : this.$4Z)
    },
    $39W: function(n) {
        this.$Nl = n;
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$Nl.$N.LogicalName);
        $0.$1(t) || (this.$4Z = this.$Nl.getValue(t.$63), this.set_Text(this.$4Z), this.set_InitialsText(this.$4Z))
    },
    get_$lA: function() { return this.$jt.$Ak },
    $4Z: null,
    get_$ZK: function() { return!!this.$Nl },
    get_ImageUrl: function() {
        if (this.get_$ZK()) {
            var n = this.$Nl.getValue("entityimage");
            return Microsoft.Crm.Client.Core.Framework.$3.$A(n)
                ? this.$Nl.getValue("entityimage_url")
                : Microsoft.Crm.Client.Core.Framework.$3.$MD("data:image;base64,{0}", n)
        }
        return null
    },
    get_SymbolClassName: function() {
        return this.get_$ZK() ? "contact" : this.$jt.$182 === 1 ? "DistributionList" : "UnknownRecipient"
    },
    get_IsEntityFontIcon: function() { return this.get_$ZK() },
    get_Tooltip: function() {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsMobilePhone() ? null : this.$4Z
    },
    get_Text: function() {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsMobilePhone() ? null : this.$7a
    },
    set_Text: function(n) { return this.$7a = n, n }
};
Microsoft.Crm.Client.Core.Models.MailApp.$9E = function(n, t, i) {
    this.$2Z = n;
    this.$7v = t;
    this.$1b = i
};
Microsoft.Crm.Client.Core.Models.MailApp.$9E.$1n8 = function(n) {
    if ($0.$1(n)) return null;
    var t = n.$N.LogicalName, i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(t);
    return $0.$1(i)
        ? null
        : new Microsoft.Crm.Client.Core.Models.MailApp.$9E(n.$N.get_identifier(), t, n.getValue(i.$63))
};
Microsoft.Crm.Client.Core.Models.MailApp.$9E.prototype = { $2Z: null, $1b: null, $7v: null };
Microsoft.Crm.Client.Core.Models.MailApp.$J6 = function() {};
Microsoft.Crm.Client.Core.Models.MailApp.$J6.prototype = {
    $ix: null,
    get_ClassName: function() { return this.$ix },
    set_ClassName: function(n) { return this.$ix = n, n },
    $1gc: null,
    get_Text: function() { return this.$1gc },
    set_Text: function(n) { return this.$1gc = n, n },
    $bv: null,
    get_Tooltip: function() { return this.$bv },
    set_Tooltip: function(n) { return this.$bv = n, n },
    $jB: null,
    get_ImageUrl: function() { return this.$jB },
    set_ImageUrl: function(n) { return this.$jB = n, n },
    $1fJ: null,
    get_InitialsText: function() { return this.$1fJ },
    set_InitialsText: function(n) { return this.$1fJ = n, n },
    $1ga: null,
    get_SymbolClassName: function() { return this.$1ga },
    set_SymbolClassName: function(n) { return this.$1ga = n, n },
    $1fQ: !1,
    get_IsEntityFontIcon: function() { return this.$1fQ },
    set_IsEntityFontIcon: function(n) { return this.$1fQ = n, n }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Validation");
Microsoft.Crm.Client.Core.Models.Validation.$Dh = function() {};
Microsoft.Crm.Client.Core.Models.Validation.$Dh.registerInterface("Microsoft.Crm.Client.Core.Models.Validation.$Dh");
Microsoft.Crm.Client.Core.Models.Validation.$FN = function() {};
Microsoft.Crm.Client.Core.Models.Validation.$FN.registerInterface("Microsoft.Crm.Client.Core.Models.Validation.$FN");
Microsoft.Crm.Client.Core.Models.Validation.$Dl = function() {};
Microsoft.Crm.Client.Core.Models.Validation.$Dl.registerInterface("Microsoft.Crm.Client.Core.Models.Validation.$Dl");
Microsoft.Crm.Client.Core.Models.Validation.$7S = function() {};
Microsoft.Crm.Client.Core.Models.Validation.$7S.registerInterface("Microsoft.Crm.Client.Core.Models.Validation.$7S");
Microsoft.Crm.Client.Core.Models.Validation.$38 = function() {};
Microsoft.Crm.Client.Core.Models.Validation.$38
    .prototype = {
        none: 0,
        isRequired: 1,
        integer: 2,
        decimal: 3,
        money: 4,
        emailAddress: 5,
        url: 6,
        currency: 7,
        dateTime: 8
    };
Microsoft.Crm.Client.Core.Models.Validation.$38.registerEnum("Microsoft.Crm.Client.Core.Models.Validation.$38", !1);
Microsoft.Crm.Client.Core.Models.Validation.$FM = function() {};
Microsoft.Crm.Client.Core.Models.Validation.$FM.registerInterface("Microsoft.Crm.Client.Core.Models.Validation.$FM");
Microsoft.Crm.Client.Core.Models.Validation.$Du = function() {};
Microsoft.Crm.Client.Core.Models.Validation.$Du.registerInterface("Microsoft.Crm.Client.Core.Models.Validation.$Du");
Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult = function(n, t, i, r, u) {
    this.$5r = n;
    this.$pJ = t;
    this.$4q = i;
    this.$1lr = r;
    this.$lM = u
};
Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult
    .prototype = { $5r: !1, $pJ: null, $4q: null, $lM: null, $1lr: null };
Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator = function(n, t, i) {
    Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator.initializeBase(this, [n, t]);
    this.$1DR = i
};
Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator.prototype = {
    $1DR: !1,
    set_$34j: function(n) { return this.$1DR = n, n },
    $2hh: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator(this.$QX, this.$Vz, this.$1DR)
    },
    $7c: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.$7c.call(this, n, !1, i);
        return t || i
            ? r
            : (r.$5r &&
                ($0.$1(n) || Microsoft.Crm.Client.Core.Framework.$3.$1S(n.toString())) &&
                (r.$5r = !this.$1DR, r.$4q = r.$5r ? null : this.$m8("Error_Message_0x80048cfb")), r)
    }
};
Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator = function(n, t, i, r, u, f) {
    Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator.initializeBase(this, [n, t, i, r, u]);
    this.$1DM = f
};
Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator.prototype = {
    $1DM: !1,
    set_$34b: function(n) { return this.$1DM = n, n },
    $2hh: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation
            .MoneyValidator(this.$QX, this.$Vz, this.$CK, this.$CI, this.$o4, this.$1DM)
    },
    $7c: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator.prototype.$7c.call(this, n, !1, i);
        return t || i
            ? r
            : (!r.$5r ||
                $0.$1(n) ||
                Microsoft.Crm.Client.Core.Framework.$3.$1S(n.toString()) ||
                (r.$5r = !this.$1DM, r.$4q = r.$5r ? null : this.$m8("Currency_Not_Specified")), r)
    }
};
Microsoft.Crm.Client.Core.Models.Validation.UrlValidator = function(n, t) {
    Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.initializeBase(this, [n, t])
};
Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.prototype = {
    $2hh: function() { return new Microsoft.Crm.Client.Core.Models.Validation.UrlValidator(this.$QX, this.$Vz) },
    $7c: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.$7c.call(this, n, !1, i);
        if (t || i) return r;
        if (r.$5r) {
            var u = !0, e = null, f = "", o = !Microsoft.Crm.Client.Core.Framework.$3.$A(n);
            o && (f = n.trim(), u = this.$38s(f), u || (e = this.$m8("L_Url_Error_Message_Text")));
            r.$5r = u;
            r.$pJ = o ? this.$2Qj(f) : "";
            r.$4q = e
        }
        return r
    },
    $38s: function(n) {
        if ("ABOUT:BLANK" === n.toUpperCase() || Microsoft.Crm.Client.Core.Framework.$3.$A(n)) return!0;
        var i = this.$2Qj(n), t = this.$3Gn(i);
        if (!Microsoft.Crm.Client.Core.Framework.$3.$A(t))
            switch (t) {
            case"http":
            case"https":
            case"ftp":
            case"ftps":
            case"onenote":
            case"tel":
                return!0
            }
        return!1
    },
    $2Qj: function(n) {
        return Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.$2X8.test(n) ? n : "http://" + n
    },
    $3Gn: function(n) {
        var r;
        if (Microsoft.Crm.Client.Core.Framework.$3.$A(n)) return"";
        var i = null, u = null, f = n.indexOf("?"), t = n.indexOf(":");
        if (t === -1 || t > f && f !== -1) return"";
        for (r = t + 1; n.charAt(r) === "/";) r++;
        if (i = n.substr(0, t).toLowerCase(), u = n.substr(t, r - t), !Microsoft.Crm.Client.Core.Framework.$3.$A(i))
            switch (i) {
            case"http":
            case"https":
            case"ftp":
            case"ftps":
                u !== "://" && (i = "")
            }
        return i
    }
};
Microsoft.Crm.Client.Core.Models.Validation
    .EmailAddressValidator = function(n, t) {
        Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.initializeBase(this, [n, t])
    };
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.prototype = {
    $2hh: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator(this.$QX, this.$Vz)
    },
    $7c: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.$7c.call(this, n, !1, i);
        if (t || i) return r;
        if (r.$5r) {
            var u = !0, f = null, e = !Microsoft.Crm.Client.Core.Framework.$3.$A(n);
            e && (u = this.$38l(n), u || (f = this.$m8("Web._forms.styles.INPUT.eml.htc_20")));
            r.$5r = u;
            r.$pJ = n;
            r.$4q = f
        }
        return r
    },
    $38l: function(n) {
        var t = n;
        return Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$22L.test(t) || this.$38m(t)
    },
    $38m: function(n) {
        var u = n.indexOf('"'), t = n.indexOf('"@', 1), i, r;
        return!u &&
            t !== -1 &&
            t > 1 &&
            (i = n.substring(1, t), r = n
                .replace('"' + i + '"', "abc"), !Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$255
                .test(i) &&
                Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$22L.test(r))
            ? !0
            : !1
    }
};
Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator.initializeBase(this, [n, t]);
    this.$MX = r;
    this.$wr = i
};
Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator.prototype = {
    $MX: null,
    set_$3BC: function(n) { return this.$MX = n, n },
    $wr: 0,
    get_$C8: function() {
        return String.format(this.$m8("L_Decimal_Error_Message_FormatString_Text"),
            Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$O8(this.$MX, this.$wr))
    },
    $2hh: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator(this.$QX, this.$Vz, this.$wr, this.$MX)
    },
    $7c: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.$7c.call(this, n, !1, i),
            u,
            f,
            e;
        return t || i
            ? r
            : (r.$5r &&
            (u = r.$5r, f = !Microsoft.Crm.Client.Core.Framework.$3.$A(n) &&
                Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$Fi(n) &&
                !isNaN(n.getTime()), f
                ? (e = Microsoft.Crm.Client.Core.Framework.$m.$Gt(n, 0, this.$wr, null), u = e >= this.$MX)
                : n = null, r.$5r = u, r.$pJ = n, r.$4q = u ? null : this.get_$C8()), r)
    }
};
Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator.initializeBase(this, [n, t]);
    this.$CK = i;
    this.$CI = r;
    this.$o4 = u
};
Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator.prototype = {
    $CK: 0,
    $CI: 0,
    $o4: 0,
    set_$Zg: function(n) { return this.$CK = n, n },
    get_$C8: function() {
        return String.format(this.$m8("L_Decimal_Error_Message_FormatString_Text"),
            Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$1RU(this.$CK, this.$o4),
            Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$1RU(this.$CI, this.$o4))
    },
    set_$Za: function(n) { return this.$CI = n, n },
    set_$3Hq: function(n) { return this.$o4 = n, n },
    $2hh: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation
            .DecimalValidator(this.$QX, this.$Vz, this.$CK, this.$CI, this.$o4)
    },
    $7c: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.$7c.call(this, n, !1, i),
            f,
            e,
            u,
            o;
        return t || i
            ? r
            : (r.$5r &&
            (f = r.$5r, e = !Microsoft.Crm.Client.Core.Framework.$3
                .$A(n), e
                ? (u = Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D
                    .$3GV(n.toString(), this.$o4), o = !$0
                    .$1(u) &&
                    !isNaN(u), f = o && u >= this.$CK && u <= this.$CI, n = f ? u : n)
                : n = null, r.$5r = f, r.$pJ = n, r.$4q = f ? null : this.get_$C8()), r)
    }
};
Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator.initializeBase(this, [n, t]);
    this.$CK = i;
    this.$CI = r;
    this.$4q = String.format(this.$m8("L_Integer_Error_Message_FormatString_Text"),
        Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$1RV(this.$CK),
        Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$1RV(this.$CI))
};
Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator.prototype = {
    $CK: 0,
    $CI: 0,
    $4q: null,
    $2hh: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator(this.$QX, this.$Vz, this.$CK, this.$CI)
    },
    $7c: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.$7c.call(this, n, !1, i),
            f,
            e,
            u,
            o;
        return t || i
            ? r
            : (r.$5r &&
            (f = r.$5r, e = !Microsoft.Crm.Client.Core.Framework.$3
                .$A(n), e
                ? (u = Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D
                    .$1Fx(n.toString()), o = !$0
                    .$1(u) &&
                    !isNaN(u), f = o && u >= this.$CK && u <= this.$CI, n = f ? u : n)
                : n = null, r.$5r = f, r.$pJ = n, r.$4q = f ? null : this.$4q), r)
    }
};
Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator = function(n, t) {
    this.$QX = n;
    this.$Vz = t
};
Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype = {
    $QX: !1,
    $Vz: !0,
    set_$126: function(n) { return this.$QX = n, n },
    $2hh: function() { return new Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator(this.$QX, this.$Vz) },
    $7c: function(n, t, i) {
        var r, u, f;
        return!$0.$1(i) && i
            ? r = !0
            : this.$QX && !this.$Vz
            ? r = !0
            : (u = Microsoft.Crm.Client.Core.Framework.$AU.isInstanceOfType(n)
                ? n.get_$l() > 0
                : !$0
                .$1(n) &&
                !Microsoft.Crm.Client.Core.Framework.$3.$1S(n
                    .toString()), r = !this
                .$QX ||
                u), f = r ? null : this.$m8("L_IsRequired_Error_Message_Text"), n = r ? n : null, new Microsoft.Crm
            .Client.Core.Models.Validation.ValidatorResult(r, n, f)
    },
    $m8: function(n) { return Microsoft.Crm.Client.Core.Framework.Common.$2.$6(n) }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel");
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor = function(n, t, i, r) {
    this.QueryType = n;
    this.QueryValue = t;
    this.ApplicationMetadataTypes = r;
    this.ContextBased = $0.$1(i) ? !1 : i
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ViewModelDescriptor = function(n, t, i, r, u, f, e, o, s) {
    var h;
    if (this.PrimaryModelName = undefined, this.Properties = undefined, this.ControlProperties = undefined, this
        .ChildViewModels = undefined, this.IsApiRegistered = !1, this.FieldMetadata = undefined, this.Name = i, this
        .TypeName = n, this.ControlTypeName = t, this.Properties = r, this.ControlProperties = $0.$1(u) ? {} : u, this
        .PrimaryModelName = e, $0.$1(o) || (this.ApiDescriptor = o, this.IsApiRegistered = !0), !$0.$1(f)) {
        this.ChildViewModels = {};
        for (var l = f, a = l.length, c = 0; c < a; ++c) h = l[c], $0.$1(h) || (this.ChildViewModels[h.Name] = h)
    }
    this.FieldMetadata = s
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiCustomControlDescriptor = function(n, t, i, r, u, f) {
    Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiCustomControlDescriptor
        .initializeBase(this, [n, t, i, r]);
    this.ParentIsCustomControl = u;
    this.ParentName = f
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiCustomControlDescriptor
    .prototype = { ParentIsCustomControl: !1, ParentName: null };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ActionProviderPropertyDescriptor = function(n, t, i) {
    Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ActionProviderPropertyDescriptor.initializeBase(this);
    this.__type = "ActionProvider";
    this.Name = n;
    this.ProviderTypeName = t;
    this.InitializationParameters = i
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ActionProviderPropertyDescriptor
    .prototype = { ProviderTypeName: null, InitializationParameters: null };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.$J4 = function(n, t) {
    this.$1ee = t;
    this.$1ei = n
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.$J4.prototype = { $1ei: null, $1ee: null };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.CommandDescriptor = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.CommandDescriptor.initializeBase(this);
    this.ValueTypeName = n;
    this.InitializationParameters = i;
    $0.$1(this.InitializationParameters) && (this.InitializationParameters = {});
    Microsoft.Crm.Client.Core.Framework.$3.$A(t) || (this.InitializationParameters.CommandName = t);
    this.ParameterBindings = r
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.CommandDescriptor
    .prototype = { InitializationParameters: null, ParameterBindings: null };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ReferencePropertyDescriptor = function(n, t, i, r) {
    this.ModelName = undefined;
    Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ReferencePropertyDescriptor.initializeBase(this);
    this.__type = "Reference";
    this.Name = n;
    this.ModelName = i;
    this.ModelFieldName = t;
    this.ValidatorType = r
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ReferencePropertyDescriptor
    .prototype = { ModelFieldName: null, ValidatorType: 0, Validator: null };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor = function(n, t) {
    this.Value = undefined;
    Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor.initializeBase(this);
    this.Name = n;
    this.Value = t
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
    .PropertyDescriptor = function() {
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor.initializeBase(this)
    };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor.prototype = { Name: null };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiControlDescriptor = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiControlDescriptor.initializeBase(this, [n, t, i]);
    this.EditMode = r
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiControlDescriptor.prototype = { EditMode: !1 };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiDescriptor = function(n, t, i) {
    this.ControlType = n;
    this.FieldName = t;
    this.ControlName = i
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiDescriptor
    .prototype = { ControlType: 0, FieldName: null, ControlName: null };
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiListDescriptor = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiListDescriptor.initializeBase(this, [n, t, i]);
    this.ChildListName = r
};
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiListDescriptor.prototype = { ChildListName: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Descriptors.Model");
Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelCollectionDescriptor = function(n, t, i, r, u, f) {
    if (this.CurrentPageIndex = 0, this.IsLastPage = !0, this.ActiveRecordIndex = 0, $0.$1(f)) {
        if (!$0.$1(n)) {
            this.Items = new Array(n.length);
            for (var e = 0; e < n.length; e++)
                this.Items[e] = new Microsoft.Crm.Client.Core.Models.Descriptors.Model
                    .ModelItemDescriptor(n[e].Id, n[e])
        }
    } else this.Items = f;
    this.CurrentPageIndex = t;
    this.IsLastPage = i;
    this.ActiveRecordIndex = r;
    this.Id = u
};
Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelDescriptor = function(n, t, i, r) {
    var f, o, h;
    if (this.Name = undefined, this.Properties = undefined, this.NavigationProperties = undefined, this
        .ChildModelCollections = undefined, this.Id = n, !$0.$1(t)) {
        this.Properties = {};
        for (var c = t, v = c.length, u = 0; u < v; ++u) f = c[u], this.Properties[f.get_$4u()] = f.get_$2M()
    }
    if (!$0.$1(i)) {
        this.ChildModelCollections = {};
        for (var l = i, y = l.length, e = 0; e < y; ++e) o = l[e], this.ChildModelCollections[o.get_$4u()] = o.get_$2M()
    }
    if (!$0.$1(r)) {
        this.NavigationProperties = {};
        for (var a = r, p = a.length, s = 0; s < p; ++s) h = a[s], this.NavigationProperties[h.get_$4u()] = h.get_$2M()
    }
};
Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelItemDescriptor = function(n, t) {
    this.Item = Microsoft.Crm.Client.Core.Framework.$1D.$2O0;
    this.Id = n;
    this.Item = t
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Descriptors.View");
Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor.initializeBase(this, [n, i, r]);
    this.BindingPath = t;
    this.__type = "Control"
};
Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor.prototype = { BindingPath: null };
Microsoft.Crm.Client.Core.Models.Descriptors.View.RootViewDescriptor = function(n, t, i) {
    Microsoft.Crm.Client.Core.Models.Descriptors.View.RootViewDescriptor.initializeBase(this, [n, i, null]);
    this.ViewModelName = t;
    this.__type = "Root"
};
Microsoft.Crm.Client.Core.Models.Descriptors.View.RootViewDescriptor.prototype = { ViewModelName: null };
Microsoft.Crm.Client.Core.Models.Descriptors.View.ViewDescriptor = function(n, t, i) {
    var u, e;
    if (this.Properties = undefined, this.ChildControlViewDescriptors = undefined, Microsoft.Crm.Client.Core.Models
        .Descriptors.View.ViewDescriptor.initializeBase(this), this.TypeName = n, this.Properties = {}, !$0
        .$1(i)) for (var o = i, h = o.length, r = 0; r < h; ++r) u = o[r], this.Properties[u.get_$4u()] = u.get_$2M();
    if (!$0.$1(t)) {
        this.ChildControlViewDescriptors = {};
        for (var s = t, c = s.length, f = 0; f < c; ++f)
            e = s[f], this.ChildControlViewDescriptors[e.get_$4u()] = e.get_$2M()
    }
};
Microsoft.Crm.Client.Core.Models.Descriptors.View.ViewDescriptor.prototype = { TypeName: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Form");
Microsoft.Crm.Client.Core.Models.Form.FormComponentDescriptor = function() { this.TypeName = undefined };
Microsoft.Crm.Client.Core.Models.Form.FormDescriptor = function() {
    this.Header = undefined;
    this.Body = undefined
};
Microsoft.Crm.Client.Core.Models.Form.LabelDescriptor = function() { this.Description = undefined };
Microsoft.Crm.Client.Core.Models.Form.SectionDescriptor = function() {
    this.Name = undefined;
    this.Id = undefined;
    this.BodyCssClass = undefined;
    this.CellLabelCssClass = undefined;
    this.SectionLabelCssClass = undefined;
    this.CellValueCssClass = undefined
};
Type.registerNamespace("Mscrm.ProcessControlShared.ObjectModels");
Mscrm.ProcessControlShared.ObjectModels.$FP = function() {};
Mscrm.ProcessControlShared.ObjectModels.$FP.registerInterface("Mscrm.ProcessControlShared.ObjectModels.$FP");
Mscrm.ProcessControlShared.ObjectModels.$FQ = function() {};
Mscrm.ProcessControlShared.ObjectModels.$FQ.registerInterface("Mscrm.ProcessControlShared.ObjectModels.$FQ");
Mscrm.ProcessControlShared.ObjectModels.$K4 = function() {};
Mscrm.ProcessControlShared.ObjectModels.$K4.prototype = {
    ProcessInstanceID: null,
    ProcessInstanceName: null,
    ProcessDefintionID: null,
    ProcessDefintionName: null,
    StatusCodeName: null,
    CreatedOn: null
};
Mscrm.ProcessControlShared.ObjectModels.$K2 = function() {};
Mscrm.ProcessControlShared.ObjectModels.$K2.prototype = {
    Title: null,
    ProcessInstanceId: null,
    ProcessDefinitionId: null,
    ProcessDefinitionName: null,
    CurrentProcessInstanceState: 0,
    CurrentProcessInstanceStatus: 0,
    CurrentActiveStageId: null,
    TraversedPath: null,
    StatusCodeName: null,
    CreatedOn: null,
    ModifiedOn: null,
    ModifiedByName: null,
    ModifiedOnBehalfByName: null
};
Mscrm.ProcessControlShared.ObjectModels.$K3 = function() {};
Mscrm.ProcessControlShared.ObjectModels.$K3.prototype = {
    $KF: null,
    $1Nj: null,
    $1iR: null,
    $1Nk: null,
    $1Nl: null,
    $Cp: null,
    $CU: null
};
Mscrm.ProcessControlShared.ObjectModels.$K0 = function() {};
Mscrm.ProcessControlShared.ObjectModels.$K0.prototype = {
    EntityDisplayName: null,
    EntityLogicalName: null,
    EntityTypeCode: 0,
    ShowCreate: !1,
    NavigationEntities: null,
    Success: !1
};
Mscrm.ProcessControlShared.ObjectModels.$K1 = function() {};
Mscrm.ProcessControlShared.ObjectModels.$K1.prototype = {
    Id: null,
    PrimaryField: null,
    EntityTypeCode: 0,
    EntityLogicalName: null,
    PrimaryKeyName: null
};
Mscrm.ProcessControlShared.ObjectModels.$2W = function(n) { this.set_$GS(n) };
Mscrm.ProcessControlShared.ObjectModels.$2W.$37X = function(n, t) {
    var i = Mscrm.ProcessControlShared.ObjectModels.$2W.$OH(n, t);
    return i ? !0 : !1
};
Mscrm.ProcessControlShared.ObjectModels.$2W.$OH = function(n, t) {
    var r, u, i;
    if (t = Microsoft.Crm.Workflow.Utils.$d.$94(t), r = !1, !n || !n.length) return null;
    for (u = new Sys.StringBuilder, i = 0; i < n.length; i++)
        if (u.append(n[i]), n[i] === t) {
            r = !0;
            break
        }
    return r ? u.toString(",") : null
};
Mscrm.ProcessControlShared.ObjectModels.$2W.$2GO = function(n, t) {
    var r, u, i, f;
    if (t = Microsoft.Crm.Workflow.Utils.$d.$94(t), r = !1, !n || !n.length) return null;
    for (u = new Sys.StringBuilder, i = 0; i < n.length; i++)
        if (f = Microsoft.Crm.Workflow.Utils.$d.$94(n[i].stageId), u.append(f), t === f) {
            r = !0;
            break
        }
    return r ? u.toString(",") : null
};
Mscrm.ProcessControlShared.ObjectModels.$2W.prototype = {
    get_$GS: function() { return this.$RJ },
    set_$GS: function(n) {
        for (this.$RJ = Microsoft.Crm.Workflow.Utils.$d
                .$94(n);
            this.$RJ && this.$RJ.indexOf("{") > 0;
        ) this.$RJ = Microsoft.Crm.Workflow.Utils.$d.$94(this.$RJ);
        return n
    },
    $37Z: function(n) {
        return!Microsoft.Crm.Workflow.Utils.$d.$A(n) &&
            !Microsoft.Crm.Workflow.Utils.$d.$A(this.$RJ) &&
            this.$RJ.indexOf(Microsoft.Crm.Workflow.Utils.$d.$94(n)) > -1
            ? !0
            : !1
    },
    $RJ: null
};
Mscrm.ProcessControlShared.ObjectModels.$K5 = function(n, t) {
    this.$RJ = n;
    this.$A1 = t
};
Mscrm.ProcessControlShared.ObjectModels.$K5.prototype = {
    get_$CU: function() { return this.$RJ },
    set_$CU: function(n) { return this.$RJ = n, n },
    get_$66: function() { return this.$A1 },
    set_$66: function(n) { return this.$A1 = n, n },
    $RJ: null,
    $A1: null
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.ProcessControl");
Microsoft.Crm.Client.Core.Models.ProcessControl.$Fc = function() {};
Microsoft.Crm.Client.Core.Models.ProcessControl.$Fc
    .registerInterface("Microsoft.Crm.Client.Core.Models.ProcessControl.$Fc");
Microsoft.Crm.Client.Core.Models.ProcessControl.$Ek = function() {};
Microsoft.Crm.Client.Core.Models.ProcessControl.$Ek.prototype = { active: 1, finished: 2, aborted: 3 };
Microsoft.Crm.Client.Core.Models.ProcessControl.$Ek
    .registerEnum("Microsoft.Crm.Client.Core.Models.ProcessControl.$Ek", !1);
Microsoft.Crm.Client.Core.Models.ProcessControl.$K7 = function(n, t) {
    var i, r;
    this.$WK = t;
    i = new Array(0);
    i.push.apply(i, this.$2QC(n, !1));
    i.push.apply(i, this.$3Gd(n));
    r = new Array(0);
    r.push.apply(r, this.$2QC(n, !0));
    this.$50 = this.$WK.$28E(i);
    this.$yS = this.$WK.$28E(r)
};
Microsoft.Crm.Client.Core.Models.ProcessControl.$K7.prototype = {
    $yS: null,
    $50: null,
    $WK: null,
    get_$24a: function() { return this.$yS },
    get_$2Aa: function() { return this.$50 },
    $30i: function(n) {
        return $0.$1(n.ModifiedByName) || n.ModifiedByName.toLowerCase() === "system".toLowerCase()
            ? $0.$1(n.ModifiedOnBehalfByName) || n.ModifiedOnBehalfByName.toLowerCase() === "system".toLowerCase()
            ? n.ModifiedByName
            : n.ModifiedOnBehalfByName
            : n.ModifiedByName
    },
    $3Gd: function(n) {
        for (var i = new Array(0),
            f = { type: "definition" },
            e = {},
            o = {},
            s = {},
            h = new Array(0),
            c = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(h),
            l = n.ProcessDefinitions,
            r = l,
            a = r.length,
            t = 0;
            t < a;
            ++t) {
            var u = r[t],
                v = u.DefinitionName,
                y = new Microsoft.Crm.Client.Core.Framework.Guid(u.DefinitionId),
                p = this.$WK.$1kH(v, y),
                w = this.$WK.$z6(p, f, e, o, s, c);
            i.push(w)
        }
        return i
    },
    $2QC: function(n, t) {
        for (var s,
            h,
            c,
            l,
            f = new Array(0),
            a = {},
            v = {},
            y = {},
            p = new Array(0),
            w = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(p),
            b = n.ProcessInstances,
            e = b,
            k = e.length,
            u = 0;
            u < k;
            ++u) {
            var i = e[u],
                d = i.CurrentProcessInstanceStatus,
                r = { type: "instance" },
                o = $1W.$Cr(Microsoft.Crm.Client.Core.Models.ProcessControl.$Ek, d.toString());
            (!t && o === 1 || t && o !== 1) &&
            (s = i.Title, h = new Microsoft.Crm.Client.Core.Framework.Guid(i.ProcessInstanceId), r.ModifiedOn = i
                .ModifiedOn, r.ModifiedByName = this.$30i(i), r.StatusCodeName = i.StatusCodeName, c = this.$WK
                .$1kH(s, h), r.ProcessDefinitionId = new Microsoft.Crm.Client.Core.Framework
                .Guid(i.ProcessDefinitionId), l = this.$WK.$z6(c, r, a, v, y, w), f.push(l))
        }
        return f
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.ProcessControl.Factories");
Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$Fa = function() {};
Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$Fa
    .registerInterface("Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$Fa");
Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$K8 = function() {};
Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$K8.prototype = {
    $28E: function(n) {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities(n)
    },
    $z6: function(n, t, i, r, u, f) {
        return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord(n, t, i, r, u, f)
    },
    $1kH: function(n, t) { return new Xrm.Objects.EntityReference(n, t) },
    $28Q: function(n, t) {
        if ($0.$1(n)) return null;
        var i = new Mscrm.ProcessControlShared.ObjectModels.$K3;
        return this.$3GQ(n, i, t), this.$3Ga(n, i), this.$3Gf(n, i), i
    },
    $28v: function(n) { return new Microsoft.Crm.Client.Core.Models.ProcessControl.$K7(n, this) },
    $3GQ: function(n, t, i) {
        if (n.hasValue("processstageid")) {
            t.$KF = n.getValue("processstageid").toString();
            var r = n.getValue("traversedpath");
            Microsoft.Crm.Client.Core.Framework.$3.$A(r) &&
                (r = Mscrm.ProcessControlShared.ObjectModels.$2W.$2GO(i.get_$ot(), t.$KF));
            t.$CU = r
        }
    },
    $3Ga: function(n, t) {
        var i, r;
        for (t.$Cp = new Array(0), i = 1; i <= 5; i++)
            if (r = "entity" + i + "id", n.hasValue(r)) {
                var f = "entity" + i + "objecttypecode",
                    e = n.getValue(r),
                    o = n.getValue(f),
                    u = new Mscrm.ProcessControlShared.ObjectModels.$K1;
                u.Id = e.toString();
                u.EntityLogicalName = o;
                t.$Cp[t.$Cp.length] = u
            }
    },
    $3Ge: function(n, t) {
        n.hasValue("businessprocessflowinstanceid") && (t.$1Nj = n.getValue("businessprocessflowinstanceid").toString())
    },
    $3Gf: function(n, t) {
        this.$3Ge(n, t);
        this.$3Gg(n, t);
        this.$3Gh(n, t);
        this.$3Gi(n, t)
    },
    $3Gg: function(n, t) { n.hasValue("name") && (t.$1iR = n.getValue("name")) },
    $3Gh: function(n, t) { n.hasValue("statecode") && (t.$1Nk = n.getValue("statecode").get_$XM()) },
    $3Gi: function(n, t) { n.hasValue("statuscode") && (t.$1Nl = n.getValue("statuscode").get_$XM()) }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Tiles");
Microsoft.Crm.Client.Core.Models.Tiles.$Fb = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.$Fb.registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.$Fb");
Microsoft.Crm.Client.Core.Models.Tiles.$3z = function(n, t) {
    if (this.$Ij = Microsoft.Crm.Client.Core.Models.Tiles.$3z.$11G(n, t, 0, ""), this.$TD = Microsoft.Crm.Client.Core
        .Models.Tiles.$3z.$11G(n, t, 1, ""), this.$l9 = Microsoft.Crm.Client.Core.Models.Tiles.$3z
        .$11G(n, t, 2, ""), this.$nz = Microsoft.Crm.Client.Core.Models.Tiles.$3z.$11G(n, t, 3, ""), this
        .$Jx = Microsoft.Crm.Client.Core.Models.Tiles.$3z.$11G(n, t, 4, ""), this.$Jy = Microsoft.Crm.Client.Core.Models
        .Tiles.$3z.$11G(n, t, 5, ""), Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Tiles.Decorators.$8u
        .isInstanceOfType(t.get_$2h())) {
        var i = t.get_$2h();
        this.$1tW = i.get_$2Mw()
    }
};
Microsoft.Crm.Client.Core.Models.Tiles.$3z.$11G = function(n, t, i, r) {
    var f = r, u, e, o;
    if (!$0.$1(t) && !$0.$1(t.get_$VX()) && !Microsoft.Crm.Client.Core.Framework.$3.$1S(t.get_$VX().get_$H(i)))
        if (u = t.get_$VX().get_$H(i), e = u.split(","), e.length > 1) {
            for (o = 0; o < e.length; o++)
                if (u = e[o], f = Microsoft.Crm.Client.Core.Models.Tiles.$3z.$uW(n, r, u), !Microsoft.Crm.Client.Core
                    .Framework.$3.$1S(f.toString())) break
        } else f = Microsoft.Crm.Client.Core.Models.Tiles.$3z.$uW(n, r, u);
    return f.toString()
};
Microsoft.Crm.Client.Core.Models.Tiles.$3z.$uW = function(n, t, i) {
    var r, u;
    return Xrm.Objects.EntityReference.isInstanceOfType(n.getValue(i))
        ? (u = n.getValue(i), r = u.Name || t)
        : (r = n.getNumericFormattedValue(i) || n.getValue(i), r = r || t), r
};
Microsoft.Crm.Client.Core.Models.Tiles.$3z.prototype = {
    $Ij: null,
    $Jx: null,
    $Jy: null,
    $TD: null,
    $nz: null,
    $l9: null,
    $1tW: null,
    get_$3TN: function() { return this.$Ij },
    get_$3TO: function() { return this.$Jx },
    get_$3TP: function() { return this.$Jy },
    get_$1U2: function() { return this.$TD },
    get_$lA: function() { return this.$l9 },
    get_$2QP: function() { return this.$nz },
    get_$3Ad: function() { return this.$1tW }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Tiles.Builders");
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fd = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fd
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fd");
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fg = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fg
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fg");
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fi = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fi
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fi");
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj");
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$K6 = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$K6
    .prototype = {
        $Ao: function(n, t) {
            return n.set_$1Jp(32), n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers
                .$NH(0, 134, 156)), n.set_Text1(t.get_$Mw()), n
        },
        $1TE: function() { return new Array(0) }
    };
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Ji = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Ji
    .prototype = {
        $Ao: function(n, t) {
            return n.set_$1Jp(32), n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers
                .$NH(0, 134, 156)), n.set_Text1(t.get_$Mw()), n
                .set_LeftCornerText(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Dashboards_Singular_Name")), n
        },
        $1TE: function() { return new Array(0) }
    };
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jl = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jl.prototype = {
    $Ao: function(n, t) {
        var i = t.get_$Fs();
        return n.set_Text1(Microsoft.Crm.Client.Core.Framework.$3.$MD("{0}", i.getValue(t.get_$LW()) || "")), n
            .set_Text2(t.get_$2Mw() || ""), n
    },
    $1TE: function(n) { return[n.get_$LW()] }
};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jj = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jj
    .prototype = { $6: function(n) { return Microsoft.Crm.Client.Core.Framework.Common.$2.$6(n) } };
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$7c = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$7c.prototype = {
    $Ao: function(n, t) {
        var r, i, u, f, e;
        return n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(206, 114, 0)), r = t
            .get_$Fs(), t.get_$J6() && $0.$1(r)
            ? n.$o2(t.get_$k9())
            : t.get_$J6() && (!t.get_$J6() || $0.$1(r)) ||
            (i = r.getValue("name"), n.set_Text1($0.$1(i) ? "" : i.toString()), i = r
                .getValue("address1_city"), u = $0.$1(i) ? "" : i.toString(), i = r
                .getValue("address1_stateorprovince"), f = $0.$1(i) ? "" : i.toString(), n
                .set_Text2(Microsoft.Crm.Client.Core.Framework.$3.$A(u) || Microsoft.Crm.Client.Core.Framework.$3.$A(f)
                    ? ""
                    : u + ", " + f), e = r.getValue("primarycontactid"), e && n.set_Text3(e.Name), i = r
                .getValue("telephone1"), n.set_Text4($0.$1(i) ? "" : i.toString()), t.$qw(n.$kT())), n
    },
    $1TE: function() { return Microsoft.Crm.Client.Core.Models.Tiles.Builders.$7c.$14a }
};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jk = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jk.prototype = {
    $rG: null,
    $Ao: function(n, t) {
        var r, i, u;
        if ($0.$1(t) || t.get_$UC() !== "systemuser"
            ? n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(0, 114, 198))
            : n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers
                .$NH(87, 136, 55)), $0.$1(t) ||
            !Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$AV.isInstanceOfType(t)) return n;
        if (r = t, i = r.get_$Fs(), t.get_$J6() && $0.$1(i)) n = this.get_$1Oe().$2iQ(n, t.get_$k9());
        else if (!t.get_$J6() || t.get_$J6() && !$0.$1(i)) {
            if ($0.$1(i)) return n;
            u = this.get_$1Oe().$2iO(i, r);
            n = this.get_$1Oe().$2iP(n, u);
            t.$qw(n.$kT())
        }
        return n
    },
    $1TE: function() { return new Array(0) },
    get_$1Oe: function() {
        return $0.$1(this.$rG) && (this.$rG = new Microsoft.Crm.Client.Core.Models.Tiles.Factories.$II), this.$rG
    },
    set_$1Oe: function(n) { return this.$rG = n, n }
};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$83 = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$83.prototype = {
    $Ao: function(n, t) {
        var r = t.get_$Fs(), i;
        return n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers
            .$NH(48, 82, 166)), t.get_$J6() && $0.$1(r)
            ? n.$o2(t.get_$k9())
            : t.get_$J6() && (!t.get_$J6() || $0.$1(r)) ||
            (i = r.getValue("subject"), n.set_Text1($0.$1(i) ? "" : i.toString()), i = r.getValue("fullname"), n
                .set_Text2($0.$1(i) ? "" : i.toString()), i = r.getValue("companyname"), n
                .set_Text3($0.$1(i) ? "" : i.toString()), i = r.getValue("telephone1"), n
                .set_Text4($0.$1(i) ? "" : i.toString()), t.$qw(n.$kT())), n
    },
    $1TE: function() { return Microsoft.Crm.Client.Core.Models.Tiles.Builders.$83.$14a }
};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$8C = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$8C.prototype = {
    $1aD: null,
    $Ao: function(n, t) {
        var r, i;
        if (n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(62, 114, 57)), n.set_$1Jp(14), r = t
            .get_$Fs(), t.get_$J6() && $0.$1(r)) n.$o2(t.get_$k9());
        else if (!t.get_$J6() || t.get_$J6() && !$0.$1(r)) {
            if ($0.$1(r)) return n;
            i = r.getValue("name");
            n.set_Text1($0.$1(i) ? "" : i.toString());
            i = r.getValue("customerid");
            n.set_Text2($0.$1(i) ? "" : i.Name);
            i = r.getFormattedValue("estimatedvalue");
            n.set_Text3($0.$1(i) ? "" : i.toString());
            i = r.getValue("closeprobability");
            $0.$1(i) || (n.set_Text5(i.toString()), n.set_Text6(this.get_$3Lq().$6("L_Tile_Probability_Text")));
            t.$qw(n.$kT())
        }
        return n
    },
    get_$3Lq: function() { return this.$1aD || (this.$1aD = new Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jj) },
    $1TE: function() { return Microsoft.Crm.Client.Core.Models.Tiles.Builders.$8C.$14a }
};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jh = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jh.prototype = {
    $Y2: null,
    $dY: null,
    $Ao: function(n, t) {
        var r = this.get_$zV().get_$V().$i(t.get_$UC()), u, i, f;
        return $0.$1(r) ||
        (r.get_$9N()
            ? n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(192, 23, 43))
            : r.$F5
            ? n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(0, 133, 106))
            : r.$d === "incident" &&
            n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(122, 39, 143))), u = this.get_$1Nh()[t
            .get_$UC()], i = t.get_$Fs(), $0.$1(i) ||
        (f = i.getValue(t.get_$LW()), n.set_Text1($0
            .$1(f)
            ? ""
            : f.toString())), $0.$1(u)
            ? t.get_$J6() && $0.$1(i) ? n.$o2(t.get_$k9()) : t.get_$J6() && (!t.get_$J6() || $0.$1(i)) || t.$qw(n.$kT())
            : n = u.$Ao(n, t), n
    },
    $1TE: function(n) {
        var i = this.get_$1Nh()[n.get_$2h().$82], t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        return t.add(n.get_$LW()), $0.$1(i) || t.addRange(i.$1TE(n)), t.toArray()
    },
    get_$zV: function() { return this.$dY || (this.$dY = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3) },
    get_$1Nh: function() {
        return $0.$1(this.$Y2) &&
        (this.$Y2 = {}, this.$Y2.contact = new Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jk, this.$Y2
            .systemuser = new Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jk, this.$Y2.account = new Microsoft.Crm
            .Client.Core.Models.Tiles.Builders.$7c, this.$Y2.opportunity = new Microsoft.Crm.Client.Core.Models.Tiles
            .Builders.$8C, this.$Y2.lead = new Microsoft.Crm.Client.Core.Models.Tiles.Builders.$83), this.$Y2
    },
    set_$1Nh: function(n) { return this.$Y2 = n, n }
};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Je = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Je
    .prototype = {
        $Ao: function(n, t) { return n.set_Text1(t.get_$3Js()), n },
        $1TE: function() { return new Array(0) }
    };
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jf = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jf.prototype = {
    $Ao: function(n, t) {
        var i, r;
        return n.set_$1Jp(32), i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
            .$i(t.get_$UC()), $0.$1(i) ||
        (i.$F5
            ? n.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(0, 133, 106))
            : n.set_$KJ(this.$32x(i.$d))), $0.$1(t.get_$Fs()) || (r = t.get_$Fs(), n.set_Text1(r.$1P)), n
    },
    $32x: function(n) {
        switch (n) {
        case"contact":
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(0, 114, 198);
        case"opportunity":
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(62, 114, 57);
        case"lead":
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(48, 82, 166);
        case"account":
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(206, 114, 0);
        case"activitypointer":
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(192, 23, 43);
        case"incident":
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(122, 39, 143);
        case"systemuser":
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(87, 136, 55);
        default:
            return new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(85, 85, 85)
        }
    },
    $1TE: function() { return new Array(0) }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Workspace");
Microsoft.Crm.Client.Core.Models.Workspace.BasePaneLayoutType = function() { this.Children = undefined };
Microsoft.Crm.Client.Core.Models.Workspace.BasePaneType = function() {};
Microsoft.Crm.Client.Core.Models.Workspace.BaseWorkspaceLayoutType = function() {};
Type.registerNamespace("ProcessObjectModel.Visitors");
ProcessObjectModel.Visitors.$EB = function() {};
ProcessObjectModel.Visitors.$EB.registerInterface("ProcessObjectModel.Visitors.$EB");
ProcessObjectModel.Visitors.$Gz = function() {};
ProcessObjectModel.Visitors.$Gz.registerInterface("ProcessObjectModel.Visitors.$Gz");
ProcessObjectModel.Visitors.$Gy = function() {};
ProcessObjectModel.Visitors.$Gy.registerInterface("ProcessObjectModel.Visitors.$Gy");
ProcessObjectModel.Visitors.$Gu = function() {};
ProcessObjectModel.Visitors.$Gu.registerInterface("ProcessObjectModel.Visitors.$Gu");
ProcessObjectModel.Visitors.$Q5 = function() { ProcessObjectModel.Visitors.$Q5.initializeBase(this) };
ProcessObjectModel.Visitors.$Q5.prototype = {
    $RX: function(n) {
        var i, t, r;
        for (ProcessObjectModel.Visitors.$Ju.prototype.$RX
                .call(this, n), i = n, t = 0;
            t < i.steps.get_Count();
            t++) r = i.steps.get_$H(t), this.$Lv.$243(r)
    }
};
ProcessObjectModel.Visitors.$Jz = function() {};
ProcessObjectModel.Visitors.$Jz.prototype = {
    $1Nd: null,
    $1QS: null,
    $1QM: null,
    $os: null,
    $lc: null,
    $1cf: null,
    $1YT: null,
    $1Ol: null,
    $1Om: !1,
    $1i7: !1,
    $1Zs: null,
    get_$ot: function() { return Mscrm.InternalUtilities.JSTypes.isNull(this.$os) && (this.$os = []), this.$os },
    get_$1Gj: function() { return Mscrm.InternalUtilities.JSTypes.isNull(this.$1Zs) && (this.$1Zs = {}), this.$1Zs },
    $2ef: function() {
        if (!this.$1Om) {
            this.$lc = this.get_$al();
            return
        }
        var n = this.get_$ot()[0];
        for (this.$lc = {}, this.$lc[n.stageId] = n;
            !Mscrm.InternalUtilities._String.isNullOrWhiteSpace(n.nextStageId);
        ) n = this.get_$al()[n.nextStageId], this.$lc[n.stageId] = n
    },
    get_$24c: function() { return this.$1Om },
    get_$rv: function() { return Mscrm.InternalUtilities.JSTypes.isNull(this.$1QS) && (this.$1QS = []), this.$1QS },
    get_$2AZ: function() { return Mscrm.InternalUtilities.JSTypes.isNull(this.$1QM) && (this.$1QM = {}), this.$1QM },
    get_$1jd: function() { return Mscrm.InternalUtilities.JSTypes.isNull(this.$1Ol) && (this.$1Ol = {}), this.$1Ol },
    get_$al: function() { return Mscrm.InternalUtilities.JSTypes.isNull(this.$1cf) && (this.$1cf = {}), this.$1cf },
    get_$2qX: function() { return Mscrm.InternalUtilities.JSTypes.isNull(this.$lc) && (this.$lc = {}), this.$lc },
    get_$nr: function() { return Microsoft.Crm.Workflow.Utils.$d.$25(this.$1YT) && (this.$1YT = {}), this.$1YT },
    $328: function(n, t) {
        var i;
        this.$1i7 || this.$3VM();
        var r = Microsoft.Crm.Workflow.Utils.$d.$94(n), u = Microsoft.Crm.Workflow.Utils.$d.$94(t), f = null;
        return u in this.get_$1Gj() && (i = this.get_$1Gj()[u], r in i && (f = i[r])), f
    },
    $3VM: function() {
        for (var n = 0; n < this.get_$rv().length - 1; n++) {
            var t = this.get_$rv()[n], f = this.get_$rv()[n + 1], r = t.relationshipName, u = t.attributeName;
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(r) &&
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(u)) {
                var e = t.steps.get_$H(t.steps.get_Count() - 1),
                    o = f.steps.get_$H(0),
                    i = new Microsoft.Crm.Workflow.ObjectModel.$Bl(t.$6x);
                i.relationshipName = r;
                i.attributeName = u;
                i.sourceStageId = Microsoft.Crm.Workflow.Utils.$d.$94(e.stageId);
                i.targetStageId = Microsoft.Crm.Workflow.Utils.$d.$94(o.stageId);
                this.$243(i)
            }
        }
        this.$1i7 = !0
    },
    $RX: function(n) {
        var t = this.get_$2eT().$1PG(n, this);
        (t.$RX(n), this.get_$ot().length) && this.$2ef()
    },
    get_$2eT: function() {
        return Mscrm.InternalUtilities.JSTypes.isNull(this
                .$1Nd) &&
            (this.$1Nd = new ProcessObjectModel.Visitors.$Jt), this.$1Nd
    },
    $2bC: function(n) {
        Array.add(this.get_$rv(), n);
        var t = this.get_$2AZ();
        n.get_EntityLogicalName() in t || (t[n.get_EntityLogicalName()] = new Array(0));
        Array.add(t[n.get_EntityLogicalName()], n)
    },
    $2c7: function(n, t) {
        var i = Microsoft.Crm.Workflow.Utils.$d.$94(t.stageId);
        Array.add(this.get_$ot(), t);
        this.get_$al()[i] = t;
        this.get_$nr()[i] = n
    },
    $9o: function(n) {
        var t = n.get_$HY(), i = Microsoft.Crm.Workflow.Utils.$d.$94(t.stageId);
        this.get_$1jd()[i] = n;
        this.$1Om = !0
    },
    $243: function(n) {
        var i, t, r;
        Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(n.sourceStageId) ||
            Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(n.targetStageId) ||
            (i = Microsoft.Crm.Workflow.Utils.$d.$94(n.sourceStageId), t = Microsoft.Crm.Workflow.Utils.$d
                .$94(n.targetStageId), t in this.get_$1Gj()
                ? this.get_$1Gj()[t][i] = n
                : (r = {}, r[i] = n, this.get_$1Gj()[t] = r))
    }
};
ProcessObjectModel.Visitors.$Jt = function() {};
ProcessObjectModel.Visitors.$Jt.prototype = {
    $1PG: function(n, t) {
        var i = null;
        return Microsoft.Crm.Workflow.ObjectModel.$7B
            .isInstanceOfType(n) &&
            (i = new ProcessObjectModel.Visitors.$RV), Microsoft.Crm.Workflow.ObjectModel.$62.isInstanceOfType(n) &&
            (i = new ProcessObjectModel.Visitors.$Rt), Microsoft.Crm.Workflow.ObjectModel.$5q.isInstanceOfType(n) &&
            (i = new ProcessObjectModel.Visitors.$Ru), Microsoft.Crm.Workflow.ObjectModel.$9h.isInstanceOfType(n) &&
            (i = new ProcessObjectModel.Visitors.$Q0), Microsoft.Crm.Workflow.ObjectModel.$Er.isInstanceOfType(n) &&
            (i = new ProcessObjectModel.Visitors.$Q5), Mscrm.InternalUtilities.JSTypes.isNull(i) ||
            (i.set_$9X(t), i.set_$3Sr(this)), i
    }
};
ProcessObjectModel.Visitors.$Rt = function() { ProcessObjectModel.Visitors.$Rt.initializeBase(this) };
ProcessObjectModel.Visitors.$Rt.prototype = {
    $RX: function(n) {
        ProcessObjectModel.Visitors.$Ju.prototype.$RX.call(this, n);
        var t = n;
        this.$Lv.$2bC(t);
        this.$1eF(t)
    },
    $1PG: function(n, t) {
        var i = this.$1cn.$1PG(t, this.$Lv), r;
        return ProcessObjectModel.Visitors.$EB.isInstanceOfType(i) && (r = i, r.set_$3GO(n)), i
    }
};
ProcessObjectModel.Visitors.$RV = function() { ProcessObjectModel.Visitors.$RV.initializeBase(this) };
ProcessObjectModel.Visitors.$RV.prototype = {
    $RX: function(n) {
        ProcessObjectModel.Visitors.$Ju.prototype.$RX.call(this, n);
        var t = n;
        this.$1eF(t)
    }
};
ProcessObjectModel.Visitors.$Ru = function() { ProcessObjectModel.Visitors.$Ru.initializeBase(this) };
ProcessObjectModel.Visitors.$Ru.prototype = {
    $RX: function(n) {
        ProcessObjectModel.Visitors.$Ju.prototype.$RX.call(this, n);
        var t = n;
        this.$Lv.$2c7(this.$1li, t);
        this.$1eF(t)
    },
    set_$3GO: function(n) { return this.$1li = n, n },
    $1li: null
};
ProcessObjectModel.Visitors.$Ju = function() {};
ProcessObjectModel.Visitors.$Ju.prototype = {
    $Lv: null,
    $1cn: null,
    set_$3Sr: function(n) { return this.$1cn = n, n },
    set_$9X: function(n) { return this.$Lv = n, n },
    $RX: function() {},
    $1eF: function(n) {
        for (var i, r, t = 0;
            t < n.steps.get_Count();
            t++
        ) (i = n.steps.get_$H(t), r = this.$1PG(n, i, this.$Lv), Mscrm.InternalUtilities.JSTypes.isNull(r)) || r.$RX(i)
    },
    $1PG: function(n, t) { return this.$1cn.$1PG(t, this.$Lv) }
};
ProcessObjectModel.Visitors.$Q0 = function() { ProcessObjectModel.Visitors.$Q0.initializeBase(this) };
ProcessObjectModel.Visitors.$Q0.prototype = {
    $RX: function(n) {
        ProcessObjectModel.Visitors.$Ju.prototype.$RX.call(this, n);
        var t = n;
        this.$Lv.$9o(t);
        this.$1eF(t)
    }
};
Type.registerNamespace("Microsoft.Crm.Workflow.Expressions");
Microsoft.Crm.Workflow.Expressions.$Gt = function() {};
Microsoft.Crm.Workflow.Expressions.$Gt.registerInterface("Microsoft.Crm.Workflow.Expressions.$Gt");
Microsoft.Crm.Workflow.Expressions.$Pr = function(n, t, i, r) {
    if (Microsoft.Crm.Workflow.Expressions.$Pr
        .initializeBase(this, [n]), Microsoft.Crm.Workflow.Expressions.$1f.$36v(t) ||
        Microsoft.Crm.Workflow.Utils.$k.$p3("Operator in a binary expression must be a binary operator",
            "binaryOperator"), Microsoft.Crm.Workflow.Expressions.$1f.$2L9(t)) {
        i.type &&
            Microsoft.Crm.Workflow.Utils.$k.$p3("Left operand in a grouping condition must be a logical expression",
                "leftOperand");
        r.length !== 1 &&
            Microsoft.Crm.Workflow.Utils.$k.$p3("Exactly one right operand is expected in a grouping condition",
                "rightOperand");
        var u = r[0];
        u.type &&
            Microsoft.Crm.Workflow.Utils.$k.$p3("Right operand in a grouping condition must be a logical expression",
                "rightOperand")
    }
    this.set_$5M(0);
    this.conditionOperatoroperator = t;
    this.left = i;
    this.right = new Microsoft.Crm.Workflow.Expressions.$Jo(r, !0);
    this.__class = "BinaryExpression:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$Pr.prototype = {
    accept: function(n) { n.$3WQ(this) },
    conditionOperatoroperator: 6,
    left: null,
    right: null,
    $2Y: function() {
        var n = new Sys.StringBuilder, t;
        if (n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("conditionOperatoroperator",
                    Microsoft.Crm.Workflow.Utils.$d.$Cz(this.conditionOperatoroperator),
                    !0)), n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("left", this.left.$2Y(), !0)), n
            .append(","), n.append('"right":['), this.right
            .get_$l() >
            0)
            for (n.append(this.right.get_$H(0)
                    .$2Y()), t = 1;
                t < this.right.get_$l();
                t++) n.append(","), n.append(this.right.get_$H(t).$2Y());
        return n.append("]"), n.append("}"), n.toString()
    },
    $AD: function(n) {
        if (Microsoft.Crm.Workflow.Expressions.$AB.prototype.$AD.call(this, n), this.left
            .$AD(n), this.right.get_$l() > 0) for (var t = 0; t < this.right.get_$l(); t++) this.right.get_$H(t).$AD(n)
    },
    $4H: function(n) {
        var t, r, i, u, f;
        if (n &&
        (Microsoft.Crm.Workflow.Expressions.$AB.prototype.$4H.call(this, n), t = n, this
            .conditionOperatoroperator = Number
            .parseInvariant(t.conditionOperatoroperator), t.left &&
            (this.left = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.left.__class), this.left.$4H(t.left)), t
            .right))
            for (this.right = new Microsoft.Crm.Workflow.Expressions.$Jo([], t.right.$1ZX), r = t.right, i = 0;
                i < r.length;
                i++) u = r[i], f = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(u.__class), f.$4H(u), this.right.$2e(f)
    }
};
Microsoft.Crm.Workflow.Expressions.$Ps = function(n, t) {
    Microsoft.Crm.Workflow.Expressions.$Ps.initializeBase(this, [n.$6x]);
    this.entity = n;
    this.attributeName = t;
    this.__class = "EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$Ps.prototype = {
    accept: function(n) { n.$3WW(this) },
    entity: null,
    attributeName: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("entity", this.entity.$2Y(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("attributeName", this.attributeName, !0)), n
            .append("}"), n.toString()
    },
    $AD: function(n) {
        Microsoft.Crm.Workflow.Expressions.$AB.prototype.$AD.call(this, n);
        this.entity.$AD(n)
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.Expressions.$AB.prototype.$4H.call(this, n);
            var t = n;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.$1T.$Uw(t.entity.__class);
            this.entity.$4H(t.entity);
            this.attributeName = t.attributeName;
            this.behavior = t.behavior
        }
    }
};
Microsoft.Crm.Workflow.Expressions.$Jv = function(n, t) {
    this.$6x = n;
    this.parameterName = t
};
Microsoft.Crm.Workflow.Expressions.$Jv.prototype = {
    set_$Av: function(n) {
        return Microsoft.Crm.Workflow.Utils.$k.$C3(!!n, "Entity name cannot be set to null"), this.entityName = n, n
    },
    __class: "EntityBase:#Microsoft.Crm.Workflow.Expressions",
    parameterName: null,
    entityName: null,
    $6x: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("__class", this.__class, !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("parameterName", this.parameterName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("entityName", this.entityName, !0)), n.toString()
    },
    $AD: function(n) { this.$6x = n },
    $4H: function(n) {
        if (n) {
            var t = n;
            this.entityName = t.entityName;
            this.parameterName = t.parameterName
        }
    }
};
Microsoft.Crm.Workflow.Expressions.$Pv = function(n, t, i, r, u, f) {
    Microsoft.Crm.Workflow.Expressions.$Pv.initializeBase(this, [n, u]);
    this.step = t;
    this.set_$Av(i);
    this.entityIdentifier = r;
    this.isCustomOperationArgument = f;
    this.__class = "EntityCreatedByStep:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$Pv.prototype = {
    getLocalizedName: function(n) {
        var r, t, u = this.$6x.$IR.$1pI(n, this.entityName), f = this.entityIdentifier, i;
        return Microsoft.Crm.Workflow.Utils.$d.$A(this.entityIdentifier)
            ? (Microsoft.Crm.Workflow.ObjectModel.$7B.isInstanceOfType(this.step)
                ? t = this.$6x.$305(this.identifierName)
                : Microsoft.Crm.Workflow.Utils.$d.$A(this.step.description)
                ? (t = this.step.$6x.$IR
                        .$32C("Web.SFA.Workflow.StepName." + this.step.get_$21a()),
                    Microsoft.Crm.Workflow.Utils.$d.$A(t) && (t = this.step.get_$21a()))
                : t = this.step.description, r = Microsoft.Crm.Workflow.Utils.$d.$MD(n, "{0} ({1})", t, u))
            : (Microsoft.Crm.Workflow.Utils.$d.$A(this.step.description)
                ? Microsoft.Crm.Workflow.ObjectModel.$Ct.isInstanceOfType(this.step)
                ? (i = this.step, t = i.activityInfo.name, this.entityIdentifier in i.outputs &&
                    (f = i.outputs[this.entityIdentifier].name))
                : t = this.step.get_$21a()
                : t = this.step.description, r = Microsoft.Crm.Workflow.Utils.$d.$MD(n, "{0}:{2} ({1})", t, u, f)), r
    },
    get_uiXmlName: function() {
        return Microsoft.Crm.Workflow.Utils.$d.$A(this.entityIdentifier)
            ? Microsoft.Crm.Workflow.Utils.$d.$A(this.identifierName)
            ? this.entityName + "." + this.step.id + "." + this.entityName
            : this.entityName + "." + this.step.id + "." + this.identifierName + "." + this.entityName
            : this.entityName + "." + this.step.id + "." + this.entityIdentifier
    },
    step: null,
    entityIdentifier: null,
    identifierName: null,
    isCustomOperationArgument: !1,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$Jv.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("step", this.step.$2Y(), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("entityIdentifier", this.entityIdentifier, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("identifierName", this.identifierName, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("isCustomOperationArgument",
                    Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.isCustomOperationArgument),
                    !0)), n.append("}"), n.toString()
    },
    $AD: function(n) {
        Microsoft.Crm.Workflow.Expressions.$Jv.prototype.$AD.call(this, n);
        Microsoft.Crm.Workflow.Utils.$d.$25(this.step) || this.step.set_$bD(n)
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.Expressions.$Jv.prototype.$4H.call(this, n);
            var t = n;
            this.step = Microsoft.Crm.Workflow.ObjectModel.$1T.$1Ni(t.step.__class);
            this.step.$4H(t.step);
            this.entityIdentifier = t.entityIdentifier;
            this.isCustomOperationArgument = t.isCustomOperationArgument;
            this.identifierName = t.identifierName
        }
    }
};
Microsoft.Crm.Workflow.Expressions.$Pw = function(n, t) {
    Microsoft.Crm.Workflow.Expressions.$Pw.initializeBase(this, [n, t]);
    this.set_$Av("#" + t)
};
Microsoft.Crm.Workflow.Expressions.$Pw.prototype = {
    getLocalizedName: function() { return"Error" },
    get_uiXmlName: function() { return this.parameterName }
};
Microsoft.Crm.Workflow.Expressions.$Pu = function(n) {
    Microsoft.Crm.Workflow.Expressions.$Pu.initializeBase(this, [n, "primaryEntity"]);
    this.set_$Av(n.primaryEntityName);
    this.__class = "PrimaryEntity:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$Pu.prototype = {
    getLocalizedName: function(n) { return this.$6x.$IR.$1pI(n, this.entityName) },
    get_uiXmlName: function() { return this.entityName },
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$Jv.prototype.$2Y.call(this)), n
            .append("}"), n.toString()
    }
};
Microsoft.Crm.Workflow.Expressions.$QD = function(n, t, i) {
    Microsoft.Crm.Workflow.Expressions.$QD.initializeBase(this, [n, "related_" + t + "_" + i]);
    this.relatedAttributeName = t;
    this.set_$Av(i);
    this.__class = "RelatedEntity:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$QD.prototype = {
    get_$1Gh: function() { return this.relatedAttributeName },
    set_$1Gh: function(n) { return this.relatedAttributeName = n, n },
    getLocalizedName: function(n) {
        return Microsoft.Crm.Workflow.Utils.$d.$2Cv("{0} ({1})",
            this.$6x.$IR.$2xt(n, this.$6x.primaryEntityName, this.get_$1Gh()),
            this.$6x.$IR.$1pI(n, this.entityName))
    },
    get_uiXmlName: function() { return this.entityName + "." + this.get_$1Gh() },
    get_xamlKey: function() { return"related_" + this.get_$1Gh() + "#" + this.entityName },
    $1N3: function(n) {
        n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("relatedAttributeName", this.get_$1Gh(), !0))
    },
    relatedAttributeName: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$Jv.prototype.$2Y.call(this)), this.$1N3(n), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.Expressions.$Jv.prototype.$4H.call(this, n);
            var t = n;
            this.set_$1Gh(t.relatedAttributeName)
        }
    }
};
Microsoft.Crm.Workflow.Expressions.$Sx = function(n, t, i, r) {
    Microsoft.Crm.Workflow.Expressions.$Sx.initializeBase(this, [n, t, i]);
    this.parameterName = "relatedlinked_" + r + "_" + t + "_" + i;
    this.relatedAttributeName = t;
    this.relationshipName = r;
    this.__class = "RelatedEntityLinked:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$Sx.prototype = {
    get_$1Gh: function() { return this.relatedAttributeName },
    set_$1Gh: function(n) { return this.relatedAttributeName = n, n },
    get_uiXmlName: function() { return this.entityName + "." + this.get_$1Gh() + "." + this.relationshipName },
    get_xamlKey: function() {
        return"relatedlinked_" + this.relationshipName + "#" + this.get_$1Gh() + "#" + this.entityName
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.Expressions.$QD.prototype.$4H.call(this, n);
            var t = n;
            this.relationshipName = t.relationshipName
        }
    },
    $1N3: function(n) {
        Microsoft.Crm.Workflow.Expressions.$QD.prototype.$1N3.call(this, n);
        n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("relationshipName", this.relationshipName, !0))
    },
    relatedAttributeName: null,
    relationshipName: null
};
Microsoft.Crm.Workflow.Expressions.$AB = function(n) {
    this.$6x = n;
    this.typeSet = !1;
    this.__class = "ExpressionBase:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$AB.prototype = {
    set_$5M: function(n) {
        return this
            .typeSet &&
            Microsoft.Crm.Workflow.Utils.$k.$p3("Cannot change the type after it was set", "_type"), this.type = n, n
    },
    __class: null,
    $6x: null,
    type: 0,
    behavior: 0,
    typeSet: !1,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("__class", this.__class, !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("type", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.type), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("typeSet", Microsoft.Crm.Workflow.ObjectModel.$I.$HE(this.typeSet), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$4X("behavior", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.behavior), !0)), n.toString()
    },
    $AD: function(n) { this.$6x = n },
    $4H: function(n) {
        if (n) {
            var t = n;
            this.type = parseInt(t.type);
            this.behavior = parseInt(t.behavior);
            this.typeSet = t.typeSet
        }
    }
};
Microsoft.Crm.Workflow.Expressions.$Jo = function(n, t) {
    var u;
    if (this.$2r = [], n) for (var r = n, f = r.length, i = 0; i < f; ++i) u = r[i], Array.add(this.$2r, u);
    this.$1ZX = t
};
Microsoft.Crm.Workflow.Expressions.$Jo.prototype = {
    get_$H: function(n) { return this.$2r[n] },
    set_$H: function(n, t) {
        return Microsoft.Crm.Workflow.Utils.$k.$C3(!this.$1ZX,
            "Cannot modify value in a readonly expression collection"), this.$2r[n] = t, t
    },
    $2e: function(n) {
        Microsoft.Crm.Workflow.Utils.$k.$7b(n, "expression");
        Array.add(this.$2r, n)
    },
    get_$l: function() { return this.$2r.length },
    $1ZX: !1
};
Microsoft.Crm.Workflow.Expressions.$QI = function(n, t, i, r, u) {
    Microsoft.Crm.Workflow.Expressions.$QI.initializeBase(this, [n]);
    this.entityType = r;
    this.set_$5M(i);
    this.staticValue = t;
    this.label = u;
    this.__class = "LookupExpression:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$QI.prototype = {
    accept: function(n) { n.$3Wb(this) },
    entityType: null,
    label: null,
    staticValue: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("entityType", this.entityType, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("label", this.label, !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("staticValue", this.staticValue.$2Y(), !0)), n
            .append("}"), n.toString()
    },
    $4H: function(n) {
        if (n) {
            Microsoft.Crm.Workflow.Expressions.$AB.prototype.$4H.call(this, n);
            var t = n;
            this.entityType = t.entityType;
            this.label = t.label;
            t.staticValue &&
            (this.staticValue = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.staticValue.__class), this.staticValue
                .$4H(t.staticValue))
        }
    }
};
Microsoft.Crm.Workflow.Expressions.$Q7 = function(n, t, i) {
    Microsoft.Crm.Workflow.Expressions.$Q7.initializeBase(this, [n]);
    this.$3B8(t, i)
};
Microsoft.Crm.Workflow.Expressions.$Q7.prototype = {
    $3B8: function(n, t) {
        this.method = n;
        this.parameters = t;
        this.__class = "MethodCallExpression:#Microsoft.Crm.Workflow.Expressions"
    },
    accept: function(n) { n.$3Wc(this) },
    $AD: function(n) {
        var i, u;
        Microsoft.Crm.Workflow.Expressions.$AB.prototype.$AD.call(this, n);
        for (var r = this
                     .parameters,
            f = r.length,
            t = 0;
            t < f;
            ++t) i = r[t], Microsoft.Crm.Workflow.Expressions.$AB.isInstanceOfType(i) && (u = i, u.$AD(n))
    },
    method: 0,
    parameters: null,
    $2Y: function() {
        var n = new Sys.StringBuilder, t, i;
        if (n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("method", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.method), !0)), n.append(","), n
            .append('"parameters":['), this.parameters
            .length >
            0)
            for (t = 0; t < this.parameters.length; t++)
                t > 0 && n.append(","), i = this
                    .parameters[t], Microsoft.Crm.Workflow.Expressions.$AB.isInstanceOfType(i)
                    ? n.append(i.$2Y())
                    : n.append(Microsoft.Crm.Workflow.Utils.$d.$Cz(i));
        return n.append("]"), n.append("}"), n.toString()
    },
    $4H: function(n) {
        var i, t, r, f, u;
        if (n)
            for (Microsoft.Crm.Workflow.Expressions.$AB.prototype.$4H.call(this, n), i = n, this
                    .method = parseInt(i.method), this.parameters = i.parameters, t = 0;
                t < i.parameters.length;
                t++)
                r = i
                        .parameters[t], f = typeof r == "object",
                    f
                        ? (u = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(r.__class), u.$4H(r), this.parameters[t] = u)
                        : this.parameters[t] = r
    }
};
Microsoft.Crm.Workflow.Expressions.$Jp = function(n, t) {
    this.propertyName = n;
    this.propertyValueExpr = t
};
Microsoft.Crm.Workflow.Expressions.$Jp.prototype = {
    propertyName: null,
    propertyValueExpr: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.ObjectModel.$I
            .$1g("propertyName", this.propertyName, !1)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("propertyValueExpr", this.propertyValueExpr.$2Y(), !0)), n
            .append("}"), n.toString()
    },
    $AD: function(n) { this.propertyValueExpr.$AD(n) },
    $4H: function(n) {
        if (n) {
            var t = n;
            this.propertyName = t.propertyName;
            this.propertyValueExpr = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(t.propertyValueExpr.__class);
            this.propertyValueExpr.$4H(t.propertyValueExpr)
        }
    }
};
Microsoft.Crm.Workflow.Expressions.$Q8 = function(n) {
    Microsoft.Crm.Workflow.Expressions.$Q8.initializeBase(this, [n]);
    this.__class = "NullExpression:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$Q8.prototype = {
    accept: function(n) { n.$3Wd(this) },
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y.call(this)), n
            .append("}"), n.toString()
    }
};
Microsoft.Crm.Workflow.Expressions.$1f = function() {};
Microsoft.Crm.Workflow.Expressions.$1f.$$cctor = function() {
    Microsoft.Crm.Workflow.Expressions.$1f.$Dv ||
    (Microsoft.Crm.Workflow.Expressions.$1f.$Dv = new Array(30), Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[0] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[1] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[2] |= 2, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[3] |= 2, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[24] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[25] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[26] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[27] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[28] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[29] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[30] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[31] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[32] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[33] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[34] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[35] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[36] |= 1, Microsoft.Crm.Workflow.Expressions.$1f.$Dv[37] |= 1, Microsoft.Crm.Workflow.Expressions.$1f
        .$Dv[38] |= 1)
};
Microsoft.Crm.Workflow.Expressions.$1f.$2L9 = function(n) {
    return(Microsoft.Crm.Workflow.Expressions.$1f.$Dv[n] & 2) == 2
};
Microsoft.Crm.Workflow.Expressions.$1f.$36v = function(n) { return!Microsoft.Crm.Workflow.Expressions.$1f.$2Ls(n) };
Microsoft.Crm.Workflow.Expressions.$1f.$2Ls = function(n) {
    return(Microsoft.Crm.Workflow.Expressions.$1f.$Dv[n] & 1) == 1
};
Microsoft.Crm.Workflow.Expressions.$Q6 = function(n, t, i) {
    Microsoft.Crm.Workflow.Expressions.$Q6.initializeBase(this, [n]);
    this.__class = "PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions";
    this.primitiveValue = t;
    this.set_$5M(i)
};
Microsoft.Crm.Workflow.Expressions.$Q6.prototype = {
    accept: function(n) { n.$3Wf(this) },
    primitiveValue: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y
            .call(this)), this.type === 9
            ? n.append(this.$32T())
            : n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$1g("primitiveValue", this.$339(), !0)), n.append("}"), n
            .toString()
    },
    $32T: function() {
        var n, t, i;
        if (!this.primitiveValue) return null;
        if (n = new Sys.StringBuilder, t = this.primitiveValue, n.append(","), n
            .append('"primitiveValue":['), t.length > 0)
            for (n.append(t[0].$2Y()), i = 1; i < t.length; i++) n.append(","), n.append(t[i].$2Y());
        return n.append("]"), n.toString()
    },
    $339: function() {
        return Microsoft.Crm.Workflow.Utils.$d.$25(this.primitiveValue) ? null : this.primitiveValue.toString()
    },
    $4H: function(n) {
        var t, r, i, u, f;
        if (n)
            if (Microsoft.Crm.Workflow.Expressions.$AB.prototype.$4H.call(this, n), t = n, this.type === 9) {
                if (t.primitiveValue)
                    for (this.primitiveValue = new Array(0), r = t
                            .primitiveValue, i = 0;
                        i < r.length;
                        i++)
                        u = r[i], f = new Microsoft.Crm.Workflow.Expressions.$Jn(u.get_$Av()), f.$4H(u), Array
                            .add(this.primitiveValue, f)
            } else this.primitiveValue = t.primitiveValue
    }
};
Microsoft.Crm.Workflow.Expressions.$QB = function(n, t) {
    Microsoft.Crm.Workflow.Expressions.$QB.initializeBase(this, [n]);
    this.value = t;
    this.__class = "TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions"
};
Microsoft.Crm.Workflow.Expressions.$QB.prototype = {
    accept: function(n) { n.$3Wu(this) },
    value: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("days", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.value.days), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("hours", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.value.hours), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("minutes", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.value.minutes), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("months", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.value.months), !0)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("years", Microsoft.Crm.Workflow.Utils.$d.$Cz(this.value.years), !0)), n.append("}"), n.toString()
    },
    $4H: function(n) { n && (Microsoft.Crm.Workflow.Expressions.$AB.prototype.$4H.call(this, n), this.value.$4H(n)) }
};
Microsoft.Crm.Workflow.Expressions.$QC = function(n, t, i) {
    Microsoft.Crm.Workflow.Expressions.$QC.initializeBase(this, [n]);
    this.__class = "UnaryExpression:#Microsoft.Crm.Workflow.Expressions";
    Microsoft.Crm.Workflow.Expressions.$1f.$2L9(t) &&
        Microsoft.Crm.Workflow.Utils.$k.$p3("Operator in a unary expression cannot be a grouping operator",
            "unaryOperator");
    Microsoft.Crm.Workflow.Expressions.$1f.$2Ls(t) ||
        Microsoft.Crm.Workflow.Utils.$k.$p3("Operator in a unary expression must be unary operator", "unaryOperator");
    this.set_$5M(0);
    this.operand = i;
    this.conditionOperatoroperator = t
};
Microsoft.Crm.Workflow.Expressions.$QC.prototype = {
    accept: function(n) { n.$3Wv(this) },
    conditionOperatoroperator: 0,
    operand: null,
    $2Y: function() {
        var n = new Sys.StringBuilder;
        return n.append("{"), n.append(Microsoft.Crm.Workflow.Expressions.$AB.prototype.$2Y.call(this)), n
            .append(Microsoft.Crm.Workflow.ObjectModel.$I
                .$1g("conditionOperatoroperator",
                    Microsoft.Crm.Workflow.Utils.$d.$Cz(this.conditionOperatoroperator),
                    !0)), n.append(Microsoft.Crm.Workflow.ObjectModel.$I.$4X("operand", this.operand.$2Y(), !0)), n
            .append("}"), n.toString()
    },
    $AD: function(n) {
        Microsoft.Crm.Workflow.Expressions.$AB.prototype.$AD.call(this, n);
        this.operand.$AD(n)
    },
    $4H: function(n) {
        var t, i;
        n &&
        (Microsoft.Crm.Workflow.Expressions.$AB.prototype.$4H.call(this, n), t = n, this
            .conditionOperatoroperator = Number
            .parseInvariant(t.conditionOperatoroperator), t.operand &&
            (i = t.operand, this.operand = Microsoft.Crm.Workflow.ObjectModel.$1T.$FQ(i.__class), this.operand.$4H(i)))
    }
};
Microsoft.Crm.Workflow.Expressions.$Jn = function() {};
Microsoft.Crm.Workflow.Expressions.$Jn.prototype = {
    $2Y: function() { return null },
    get_$Av: function() { return null },
    $4H: function() {}
};
Type.registerNamespace("Microsoft.Crm.Workflow.Utils");
Microsoft.Crm.Workflow.Utils.$d = function() {};
Microsoft.Crm.Workflow.Utils.$d.$MD = function(n, t) {
    for (var r = [], i = 2; i < arguments.length; ++i) r[i - 2] = arguments[i];
    return String.format.apply(null, [t].concat(r))
};
Microsoft.Crm.Workflow.Utils.$d.$2Cv = function(n) {
    for (var i = [], t = 1; t < arguments.length; ++t) i[t - 1] = arguments[t];
    return String.format.apply(null, [n].concat(i))
};
Microsoft.Crm.Workflow.Utils.$d.$Cz = function(n) { return n.toString() };
Microsoft.Crm.Workflow.Utils.$d.$A = function(n) { return null === n || n === undefined || n === "" };
Microsoft.Crm.Workflow.Utils.$d.$25 = function(n) { return null === n || n === undefined };
Microsoft.Crm.Workflow.Utils.$d.$94 = function(n) {
    return Microsoft.Crm.Workflow.Utils.$d.$A(n)
        ? null
        : (n.startsWith("{") && n.endsWith("}") && (n = n.substring(1, n.length - 1)), n.toLowerCase())
};
Microsoft.Crm.Workflow.Utils.$d.$1S = function(n) {
    return Microsoft.Crm.Workflow.Utils.$d.$A(n) || Microsoft.Crm.Workflow.Utils.$d.$A(n.trim())
};
Microsoft.Crm.Workflow.Utils.$d.$3Sa = function(n, t, i) { return n.split(t, i) };
Microsoft.Crm.Workflow.Utils.$d.$1sh = function(n, t, i) {
    var r = new Sys.StringBuilder, u;
    if (!i.length) return r.toString();
    for (r.append(i[0].toString()), u = 1; u < i.length; u++) r.append(t), r.append(i[u].toString());
    return r.toString()
};
Microsoft.Crm.Workflow.Utils.$k = function() {};
Microsoft.Crm.Workflow.Utils.$k.$7b = function(n, t) { if (!n) throw Error.create(t); };
Microsoft.Crm.Workflow.Utils.$k.$p3 = function(n, t) { throw Error.create("ArgumentException for " + t + ": " + n); };
Microsoft.Crm.Workflow.Utils.$k.$aw = function(n) { throw Error.create(n); };
Microsoft.Crm.Workflow.Utils.$k.$C3 = function(n, t) { if (!n) throw Error.create(t); };
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Formatters");
Microsoft.Crm.Client.Core.Models.Formatters.$QA = function(n) {
    Microsoft.Crm.Client.Core.Models.Formatters.$QA.initializeBase(this);
    this.$Kk = n
};
Microsoft.Crm.Client.Core.Models.Formatters.$QA.prototype = {
    $2qr: function(n, t) {
        var r = this.$Kk.$1Cg(n), i = this.$Kk.$1Si(n);
        switch (r) {
        case"dateandtime":
            return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$O8(t, i);
        default:
            return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$10M(t, i)
        }
    }
};
Microsoft.Crm.Client.Core.Models.Formatters.$Ph = function(n) {
    Microsoft.Crm.Client.Core.Models.Formatters.$Ph.initializeBase(this);
    this.$Kk = n
};
Microsoft.Crm.Client.Core.Models.Formatters.$Ph.prototype = {
    $2qr: function(n, t) {
        var i = this.$Kk, h = this.$Kk.$1Cg(n), r = this.$Kk.$1Si(n), e, u, f, o, s;
        Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$Fi(t) &&
            n in i.$18x &&
            (e = i.$18x[n], u = new Date(t.toString()), e && u.setDate(u.getDate() - 1), t = u);
        switch (h) {
        case"dateandtime":
            return $0.$1(i.$M)
                ? Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$O8(t, r)
                : i.$M.hasField("isalldayevent")
                ? (f = i.$M
                    .getValue("isalldayevent"), o = 1, $0.$1(f) || f.$1f !== o
                    ? Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$O8(t, r)
                    : Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$10M(t, r))
                : Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$O8(t, r);
        case"dateonly":
            return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$10M(t, r);
        default:
            return(s = Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D
                    .$O8(t, r), !$0.$1(i.$M) &&
                    !$0.$1(i.$M.$4e) &&
                    !Microsoft.Crm.Client.Core.Framework.$3.$1S(i.$M.$4e[n]) &&
                    i.$M.$4e[n] === s)
                ? i.$M.$4e[n]
                : Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$10M(t, r)
        }
    },
    $2rD: function() {
        for (var t, n = this.$Kk, r = n.get_$VX(), u = r.length, i = 0;
            i < u;
            ++i
        ) t = r[i], n.$M.$1X[t] === 5 && n.GetEffectiveAttributeFormat(t) === "timezone" && n.$Fm(n.$M, t)
    },
    $2qx: function() {
        for (var t, n = this.$Kk, r = n.get_$VX(), u = r.length, i = 0;
            i < u;
            ++i
        ) t = r[i], n.$M.$1X[t] === 5 && n.GetEffectiveAttributeFormat(t) === "duration" && n.$Fm(n.$M, t)
    },
    $2r0: function() {
        for (var t, n = this.$Kk, r = n.get_$VX(), u = r.length, i = 0;
            i < u;
            ++i
        ) t = r[i], n.$M.$1X[t] === 5 && n.GetEffectiveAttributeFormat(t) === "language" && n.$Fm(n.$M, t)
    }
};
Microsoft.Crm.Client.Core.Models.Formatters.$IP = function() {};
Microsoft.Crm.Client.Core.Models.Formatters.$IP.prototype = {
    $Kk: null,
    $Vc: function(n, t, i) {
        if ($0.$1(i)) return null;
        if (Microsoft.Crm.Client.Core.Framework.$5R.isInstanceOfType(i)) return i.get_Label();
        switch (n) {
        case 18:
        case 5:
            return this.$2Cu(t, i);
        case 4:
        case 3:
            return this.$2Cs(t, i);
        case 8:
            return this.$2r3(t, i);
        case 2:
            return this.$2qr(t, i);
        case 14:
            return this.$2rB(t, i);
        default:
            return null
        }
    },
    $lg: function(n, t, i) {
        if ($0.$1(i)) return null;
        switch (n) {
        case 18:
        case 5:
            return this.$2Cu(t, i);
        case 4:
        case 3:
        case 8:
            return this.$2Cs(t, i);
        default:
            return null
        }
    },
    $2Cu: function(n, t) {
        var i = this.$Kk.$1Cg(n);
        switch (i) {
        case"duration":
            return Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$D.$ME(t);
        case"language":
            return Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$D.$YZ(t);
        case"timezone":
            return Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$D.$10N(t);
        default:
            return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$1RV(t)
        }
    },
    $2Cs: function(n, t) {
        var i = this.$Kk.$1pG(n);
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$1RU(t, i)
    },
    $2r3: function(n, t) {
        var i = this.$Kk.$1pG(n), r = this.$31x();
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$2Cn(t, r, i)
    },
    $2rB: function(n, t) {
        if (Microsoft.Crm.Client.Core.Framework.$3.$1S(t.toString())) return null;
        var i = this.$Kk.$1Cg(n);
        switch (i) {
        case"tickersymbol":
            return t.toString().toUpperCase();
        default:
            return t.toString()
        }
    },
    $31x: function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$1DA(this.$Kk.get_$2Y1())
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Chart");
Microsoft.Crm.Client.Core.Models.Chart.$IQ = function(n, t) {
    var r, i;
    for (this.$yk = t, this.$9P = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Models.Chart.$IO)), this.$1Yu = n.$1Q("alias"), this.$4n = null, r = n
            .$5k("measurecollection"), i = 0;
        i < r.get_$l();
        i++) this.$9P.add(new Microsoft.Crm.Client.Core.Models.Chart.$IO(r.get_$H(i), this.$yk, this))
};
Microsoft.Crm.Client.Core.Models.Chart.$IQ.prototype = { $1Yu: null, $4n: null, $9P: null, $yk: null };
Microsoft.Crm.Client.Core.Models.Chart.$IM = function() {
    this.$nF = {};
    this.$23 = new Sys.EventHandlerList;
    this.$Lr = {};
    this.$HI = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D));
    this.$18y = {};
    this.$Xv = {}
};
Microsoft.Crm.Client.Core.Models.Chart.$IM.prototype = {
    $1Ag: null,
    $38: null,
    $1rR: !1,
    $6z: null,
    $HI: null,
    $18y: null,
    $1qQ: !1,
    $1w7: null,
    $23: null,
    $Lr: null,
    $Xv: null,
    get_$1s0: function() {
        var t, n;
        if (this.$6z.$6S.length > 0) return!0;
        for (t = this.$6z.$DI, n = 0; n < t.length; n++) if (t[n].$6S.length > 0) return!0;
        return!1
    },
    get_$yj: function() {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D)),
            i,
            n,
            u,
            r;
        if (this.$38.$4n)
            for (this.$38.$4n.$3R.$I !== this.$38.$4n.$3R.$4z.$Qd.$2G.$4M && t.add(this.$38.$4n.$3R), r = 0;
                r < this.$38.$4n.$Bg.get_Count();
                r++) t.add(this.$38.$4n.$Bg.get_$H(r));
        else
            for (i = 0; i < this.$6z.$2x.length; i++)
                n = this.$6z.$2x[i], u = n.$2q ? n.$2q : n.$I, u in this.$18y || t.add(n);
        return t
    },
    get_$e: function() { return Microsoft.Crm.Client.Core.Framework.$15.$5v("", "ChartDataDefinitionDescription") },
    $Qs: function(n) {
        this.$1w7 = new Microsoft.Crm.Client.Core.Framework
            .PerformanceStopwatch("ChartDataDefinitionDescription:ParserDataDescription");
        this.$1w7.start();
        this.$1Ag = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n);
        this.$3Vv(this.$1Ag);
        this.$6z = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$DJ(null);
        var t = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(this.$1Ag)
            .$O("datadefinition/fetchcollection/fetch");
        this.$6z.$17(t);
        this.$25U(this.$6z)
    },
    $3Vv: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(n).$O("Error");
        if (t)
            throw new Microsoft.Crm.Client.Core.Framework
                .$5k(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_UnreadableDefinition_Title"),
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_UnreadableDefinition_Message")).$21Q();
    },
    $Ph: function() {
        this.$2dw();
        this.$1rR = this.$38.$9P.get_$H(0).$hW.get_Count() > 0
    },
    $3MF: function() {
        var i = [], r = this.$Lr, n, t;
        for (n in r) t = { key: n, value: r[n] }, t.key in this.$nF || Array.add(i, this.$73(t.key));
        return i
    },
    $P5: function(n) {
        var t, i;
        if (n)
            for (t = 0; t < n.length; t++)
                i = n[t], this.$nF[i.get_$1l()] = new Microsoft.Crm.Client.Core.Storage.Common
                    .$Nw(i, new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$My(i.get_$1l()));
        this.$2Vv(this.$6z, this.$nF)
    },
    $2Vv: function(n, t) {
        var r, i;
        if (n.$1K in t) n.$Qd = t[n.$1K];
        else throw Error.format("Entity metadata missed!");
        for (r = n.$DI, i = 0; i < r.length; i++) this.$2Vv(r[i], t)
    },
    $2Sp: function() {
        var r = [], u = this.$Lr, t, i, o;
        for (t in u) {
            var f = { key: t, value: u[t] }, n = new Array(0), s = f.value, e = s;
            for (i in e) o = { key: i, value: e[i] }, n[n.length] = o.value.$I;
            n.length > 0 && Array.add(r, this.$Ot(f.key, n))
        }
        return r
    },
    $73: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.Common.$1m,
                Microsoft.Crm.Client.Core.Framework.$4),
            i = this,
            r = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(n, this.get_$e())
            .then(function(n) { t.resolve(n) }, function(n) { t.reject(n) }), t.promise()
    },
    $Ot: function(n, t) {
        var i = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
                Microsoft.Crm.Client.Core.Framework.$4),
            r = this,
            u = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(n, t), this.get_$e())
            .then(function(n) { i.resolve(n) }, function(n) { i.reject(n) }), i.promise()
    },
    $25U: function(n) {
        var f = n.$1K, i, e, r, t, o, u;
        for ((f in
        this.$Lr)?
        i = this.$Lr[f]:
        (i = {}, this.$Lr[f] = i), e = n.$2x, r = 0;
        r < e.length;
        r++)
        t = e[r], i[t.$I] = t, o = t.$2q ? t.$2q : t.$I, this
            .$Xv[o] = t, t.$t2
            ? this.$HI.add(t)
            : this.$18y[this.$2xX(t)] = new Microsoft.Crm.Client.Core.Models.Chart.$ID(t, this.$HI);
        for (u = 0; u < n.$DI.length; u++) this.$25U(n.$DI[u]);
        this.$1qQ = this.$1qQ || n.$6S.length > 0
    },
    $2xX: function(n) { return n.$2q ? n.$2q : n.$I },
    $2dw: function() {
        var n = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(this.$1Ag)
            .$O("datadefinition/categorycollection/category");
        this.$38 = new Microsoft.Crm.Client.Core.Models.Chart.$IQ(n, this)
    }
};
Microsoft.Crm.Client.Core.Models.Chart.$IN = function(n, t) {
    if (this.$Bd = new Microsoft.Crm.Client.Core.Models.Chart.$IM, this.$Bd.$Qs(n), !$0.$1(t)) {
        this.$16U = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$DJ(null);
        var i = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(t),
            r = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(i).$O("fetch");
        this.$16U.$17(r)
    }
};
Microsoft.Crm.Client.Core.Models.Chart.$IN.prototype = {
    $Bd: null,
    $16U: null,
    get_$1H: function() { return this.$Bd.$6z.get_$1H() },
    get_$2ZZ: function() { return $0.$1(this.$16U) ? null : this.$16U.get_$1H() },
    $2WI: function() {
        var i, t, n, r, u;
        if (this.$Bd.$Ph(), i = this.$16U, !this.$Bd.get_$1s0() && i.$6S.length > 0)
            if (t = i.$6S[0], n = this.$Bd.$6z, n.$Z4) {
                for (r = 0; r < n.$AG.length; r++)
                    if (u = n.$AG[r], u.$I === t.$I) {
                        n.$1UV(new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D(u.$I, u.$2q, n),
                            !0,
                            t.$EF,
                            -1);
                        break
                    }
            } else
                n.$1UV(new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D(t.$I, t.$2q, n), !1, t.$EF, -1);
        i.$2SA()
    },
    $2zH: function(n) {
        for (var h,
            c,
            ut,
            ft,
            a,
            v,
            y,
            r,
            u,
            f,
            e,
            o,
            w,
            b,
            k,
            st = this.$Bd.$6z.get_$1H(),
            t = "",
            d = "",
            g = "",
            nt = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(st),
            ht = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(nt).$O("fetch"),
            tt = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(nt).$O("fetch/entity"),
            it = tt.$Aq(),
            i = null,
            ct = Microsoft.Crm.Client.Core.Storage.Common.$2c.$1pO(),
            rt = ct,
            lt = rt.length,
            s = 0;
            s < lt;
            ++s) h = rt[s], c = ht.$1Q(h), $0.$1(c) || (d += String.format(' {0}="{1}"', h, c));
        ut = Microsoft.Crm.Client.Core.Storage.Common.$2c.$1pM();
        ft = Microsoft.Crm.Client.Core.Storage.Common.$2c.$1pY();
        for (var et = ut, at = et.length, l = 0;
            l < at;
            ++l
        ) a = et[l], v = tt.$1Q(a), $0.$1(v) || (g += String.format(' {0}="{1}"', a, v));
        for (t += "<fetch" + d + ">", t += "<entity" + g + ">", y = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(String)), r = 0;
            r < it.get_$l();
            r++)
            if (i = it.get_$H(r), i.get_$Fr() === "link-entity") {
                u = "";
                f = "";
                for (var ot = ft, vt = ot.length, p = 0;
                    p < vt;
                    ++p
                )
                    e = ot[p], o = i.$1Q(e), $0.$1(o) ||
                        (u += String.format(' {0}="{1}"', e, o), e === "name" && (f = o, y.add(f)));
                u += String.format(' {0}="{1}__alias"', "alias", f);
                t += "<link-entity" + u + ">";
                t += Microsoft.Crm.Client.Core.Framework.Utils.$6S.$1T2(i) + "<\/link-entity>"
            } else t += i.get_$7W();
        w = n;
        for (b in w) k = { key: b, value: w[b] }, y.contains(k.key) || (t += k.value);
        return t + "<\/entity><\/fetch>"
    }
};
Microsoft.Crm.Client.Core.Models.Chart.$IO = function(n, t, i) {
    this.$Cm = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.Chart.$IG));
    this.$yk = t;
    this.$Cm.add(new Microsoft.Crm.Client.Core.Models.Chart.$IG(n.$O("measure"), this.$yk, this, i))
};
Microsoft.Crm.Client.Core.Models.Chart.$IO.prototype = { $Cm: null, $yk: null, $hW: null };
Microsoft.Crm.Client.Core.Models.Chart.$IG = function(n, t, i, r) {
    var f = n.$1Q("alias"), u = t.$18y[f];
    this.$L8 = u.$1NJ;
    this.$1Fv = i;
    this.$LJ = r;
    this.$35h(u, t)
};
Microsoft.Crm.Client.Core.Models.Chart.$IG.prototype = {
    $L8: null,
    $1Fv: null,
    $LJ: null,
    $35h: function(n, t) {
        var i, u, r, f;
        if (null === this.$LJ.$4n)
            if (null === n.$HI || n.$HI.get_Count() <= 0)
                this.$LJ.$4n = Microsoft.Crm.Client.Core.Models.Chart.$9a.$2jI(n.$1NJ.$4z, t);
            else if (this.$LJ.$1Yu) {
                for (i = 0; i < n.$HI.get_Count(); i++)
                    if (u = n.$HI.get_$H(i), u.$2q === this.$LJ.$1Yu) {
                        this.$LJ.$4n = new Microsoft.Crm.Client.Core.Models.Chart.$9a(u, t);
                        break
                    }
            } else this.$LJ.$4n = new Microsoft.Crm.Client.Core.Models.Chart.$9a(n.$HI.get_$H(0), t);
        if (null === this.$1Fv.$hW &&
            (this.$1Fv.$hW = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Chart
                    .$9a)), null !== n.$HI && n.$HI.get_Count() > 1)
        )
            for (r = 0; r < n.$HI.get_Count(); ++r)
                f = n.$HI.get_$H(r), f !== this.$LJ.$4n.$3R &&
                    this.$1Fv.$hW.add(new Microsoft.Crm.Client.Core.Models.Chart.$9a(f, t))
    }
};
Microsoft.Crm.Client.Core.Models.Chart.$9a = function(n, t) {
    this.$3R = n;
    this.$Bg = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D));
    this.$1OA = t;
    this.$2bE();
    this.$35v()
};
Microsoft.Crm.Client.Core.Models.Chart.$9a.$2jI = function(n, t) {
    var i;
    return n.$Z4
        ? null
        : (i = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D(n.$Qd.$2G.$4M, null, n), n
            .$1UT(i.$I, null), n.$2x[n.$2x.length] = i, n.$AQ[i
            .$I] = i, n.$1K in t.$Lr && (t.$Lr[n.$1K][i.$I] = i), new Microsoft.Crm.Client.Core.Models.Chart.$9a(i, t))
};
Microsoft.Crm.Client.Core.Models.Chart.$9a.prototype = {
    $3R: null,
    $1OA: null,
    $1Tm: !1,
    $EF: !1,
    $Bg: null,
    $35v: function() {
        for (var t, i = this.$3R.$4z.$6S, n = 0; n < i.length; ++n)
            if (t = i[n], t.$2q === this.$3R.$2q) {
                this.$1Tm = !0;
                this.$EF = t.$EF;
                return
            }
    },
    $2bE: function() {
        this.$2bs();
        this.$2b4()
    },
    $2b4: function() {
        var n, t, i, r;
        if (null !== this.$3R.$D7) {
            for (n = -1, t = this.$3R.$4z.$6S, i = 0; i < t.length; ++i)
                if (r = t[i], r.$2q === this.$3R.$2q) {
                    n = i;
                    this.$1Tm = !0;
                    this.$EF = r.$EF;
                    break
                }
            n === -1 &&
            (this.$3R.$4z.$1UV(this.$3R, !0, !1, t.length), n = t.length - 1, this.$1Tm = !0, this.$EF = !1
            );
            switch (this.$3R.$D7.$HJ) {
            case 6:
            case 5:
            case 4:
                return;
            case 1:
            case 2:
            case 3:
                this.$1hJ(4, this.$EF, n);
                break;
            case 0:
                this.$1hJ(2, this.$EF, n);
                this.$1hJ(4, this.$EF, n)
            }
        }
    },
    $2bs: function() {
        var n = this.$3R.$4z, t, i, r;
        if (this.$3R.$I === n.$Qd.$2G.$4M && n.$Qd.$2G.$63) {
            if (t = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                .$4D(n.$Qd.$2G.$63,
                    Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D.$2DS(n.$1K, n.$Qd.$2G.$63),
                    n), this.$3R.$t2) {
                for (i = 0; i < n.$AG.length; i++)
                    if (r = n.$AG[i], r.$I === n.$Qd.$2G.$63) {
                        this.$Bg.add(r);
                        return
                    }
                t.$t2 = !0;
                n.$1UT(t.$I, t.$2q, "true", null, null, null);
                n.$AG[n.$AG.length] = t
            } else n.$1UT(t.$I, t.$2q, null, null, null, null);
            n.$2x[n.$2x.length] = t;
            n.$AQ[t.$2q] = t;
            n.$1K in this.$1OA.$Lr && (this.$1OA.$Lr[n.$1K][t.$I] = t);
            this.$Bg.add(t)
        }
    },
    $1hJ: function(n, t, i) {
        var r = this.$3R.$4z,
            u = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                .$4D(this.$3R.$I,
                    Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$4D.$2DS(r.$1K, this.$3R.$I),
                    r,
                    new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$6s(n));
        u.$t2 = !0;
        r.$AG[r.$AG.length] = u;
        r.$2x[r.$2x.length] = u;
        r.$AQ[u.$2q] = u;
        r.$1UV(u, !0, t, i);
        r.$1UT(u.$I, u.$2q, "true", null, Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$6s.$2D3(n), "true");
        this.$Bg.add(u)
    }
};
Microsoft.Crm.Client.Core.Models.Chart.$ID = function(n, t) {
    this.$1NJ = n;
    this.$HI = t
};
Microsoft.Crm.Client.Core.Models.Chart.$ID.prototype = { $HI: null, $1NJ: null };
Microsoft.Crm.Client.Core.Models.Chart.$IE = function() {};
Microsoft.Crm.Client.Core.Models.Chart.$IE.prototype = {
    $6U: null,
    $L4: null,
    $N6: null,
    $wR: null,
    $Ec: null,
    $ar: null,
    $Eq: null,
    $J7: 0,
    $Dg: null,
    $Sb: !0,
    get_SubTitle: function() { return this.$ar },
    set_SubTitle: function(n) { return this.$ar = n, n },
    get_Title: function() { return this.$6U },
    set_Title: function(n) { return this.$6U = n, n },
    get_Legend: function() { return this.$L4 },
    set_Legend: function(n) { return this.$L4 = n, n },
    get_XAxes: function() { return this.$N6 },
    set_XAxes: function(n) { return this.$N6 = n, n },
    get_YAxes: function() { return this.$wR },
    set_YAxes: function(n) { return this.$wR = n, n },
    get_SeriesList: function() { return this.$Ec },
    set_SeriesList: function(n) { return this.$Ec = n, n },
    get_Colors: function() { return this.$Eq },
    set_Colors: function(n) { return this.$Eq = n, n }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Tiles.Decorators");
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$AV = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$AV
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$AV");
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$8v = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$8v
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$8v");
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Pf = function(n) {
    Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Pf.initializeBase(this);
    this.$iK = n
};
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Pf.prototype = {
    $iK: null,
    $Ak: null,
    $jT: null,
    $3Hh: function(n) {
        this.$19J = this.$iK.set_$KJ(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$NH(66, 155, 189));
        this.$Ij = this.$iK.set_Text1(n.get_$3TN() || "");
        this.$Jx = this.$iK.set_Text2(n.get_$3TO() || "");
        this.$Jy = this.$iK.set_Text3(n.get_$3TP() || "");
        this.$TD = this.$iK.set_$1U2(n.get_$1U2() || "");
        this.$Ak = n.get_$lA() || "";
        this.$jT = n.get_$2QP() || "";
        this.$R6 = this.$iK.set_RightCornerText(n.get_$2QP() || "");
        this.$ZP = n.get_$3Ad() || this.$iK.get_LeftCornerText()
    },
    $o2: function(n) {
        Microsoft.Crm.Client.Core.Models.$Iv.prototype.$o2.call(this, n);
        "EmailAddress" in n && (this.$Ak = n.EmailAddress);
        "PhoneNumber" in n && (this.$jT = n.PhoneNumber)
    },
    $kT: function() {
        var n = Microsoft.Crm.Client.Core.Models.$Iv.prototype.$kT.call(this);
        return n.EmailAddress = this.$Ak, n.PhoneNumber = this.$jT, n
    }
};
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Ts = function(n) {
    Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Ts.resolveInheritance();
    this.get_$1d8 = this.get_TargetGuid;
    Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Ts.initializeBase(this, [n.get_$2h()]);
    this.$7j = n
};
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Ts.prototype = {
    $7j: null,
    $I6: null,
    $15x: null,
    get_$e: function() {
        return Microsoft.Crm.Client.Core.Framework.$15.$5v("", "CommunicationCardPinnedTileModel:" + this.get_$2h().$82)
    },
    $3Mt: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            t = new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(5, Microsoft.Crm.Client.Core.Framework.$6.get_$2C(), this.get_$2h().$82, 1, !0),
            i = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(t, this.get_$e()).done(function(t) {
            i.$3J1(t);
            n.resolve(null)
        }), n.promise()
    },
    $3J1: function(n) {
        var f, i, t, r, e;
        if (n.get_$3XJ() > 0) {
            var u = n.get_$H(0), o = u.$6h, s = new Microsoft.Crm.Client.Core.Models.Tiles.Validators.$IZ, h = s.$7c(o);
            if (h.$5r)
                for (f = u.get_$5Z(), i = f.ViewModelDescriptor, t = 0; t < i.Properties.length; t++)
                    if (r = i.Properties[t], r.Name === "FieldNames") {
                        e = r.Value;
                        this.set_$VX(new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(e));
                        break
                    }
        }
    },
    $3RV: function() {
        for (var r, t, n, u = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), i = 0;
            i < this.$I6.get_Count();
            i++)
            if (r = this.$I6.get_$H(i), !Microsoft.Crm.Client.Core.Framework.$3
                .$1S(r))
                for (t = r
                        .split(","), n = 0;
                    n < t.length;
                    n++) Microsoft.Crm.Client.Core.Framework.$3.$1S(t[n]) || u.$2e(t[n]);
        this.$15x = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(u.get_Items())
    },
    get_$VX: function() { return this.$I6 },
    set_$VX: function(n) { return this.$I6 = n, this.$3RV(), n },
    $2TD: function() {
        var t = new Array(0), i, n;
        for (Array.add(t, this.$3Mt()), i = Microsoft.Crm.Client.Core.Models.$3S.prototype.$2TD.call(this), n = 0;
            n < i.length;
            n++) Array.add(t, i[n]);
        return t
    },
    get_$Mw: function() { return this.$7j.get_$Mw() },
    set_$Mw: function(n) { return this.$7j.set_$Mw(n), n },
    get_$LW: function() { return this.$7j.get_$LW() },
    set_$LW: function(n) { return this.$7j.set_$LW(n), n },
    get_$Fs: function() { return this.$7j.get_$Fs() },
    set_$Fs: function(n) { return this.$7j.set_$Fs(n), n },
    get_$2h: function() { return this.$7j.get_$2h() },
    get_$1Iw: function() { return this.$15x || Microsoft.Crm.Client.Core.Models.$3S.prototype.get_$1Iw.call(this) }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Tiles.Factories");
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$H7 = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$H7
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Factories.$H7");
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$HB = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$HB
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Factories.$HB");
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$II = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$II.prototype = {
    $2iO: function(n, t) { return new Microsoft.Crm.Client.Core.Models.Tiles.$3z(n, t) },
    $2iP: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Pf(n);
        return i.$3Hh(t), i
    },
    $2iQ: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Pf(n);
        return i.$o2(t), i
    }
};
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$IY = function() {
    this.$Y3 = {};
    this.$Y3[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(0)] = new Microsoft.Crm.Client.Core
        .Models.Tiles.Builders.$Jh;
    this.$Y3[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(2)] = new Microsoft.Crm.Client.Core
        .Models.Tiles.Builders.$Je;
    this.$Y3[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(1)] = new Microsoft.Crm.Client.Core
        .Models.Tiles.Builders.$Jf;
    this.$Y3[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(4)] = new Microsoft.Crm.Client.Core
        .Models.Tiles.Builders.$Ji;
    this.$Y3[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(3)] = new Microsoft.Crm.Client.Core
        .Models.Tiles.Builders.$Jl;
    this.$Y3[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(5)] = new Microsoft.Crm.Client.Core
        .Models.Tiles.Builders.$K6
};
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$IY.prototype = {
    $Y3: null,
    $28z: function(n) {
        var i = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(n.get_$iC()),
            r = this.$Y3[i],
            t = new Microsoft.Crm.Client.Core.Models.$Iv;
        return t.$20O = 5, t.$1eJ = 31, t.$19J = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers
            .$NH(85, 85, 85), t.$ZP = n.get_$Mw(), r.$Ao(t, n)
    },
    $1TE: function(n) {
        var t = this.$Y3[Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1I.toString(n.get_$2h().$AJ)];
        return t.$1TE(n)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Models.Tiles.Validators");
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$HA = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$HA
    .registerInterface("Microsoft.Crm.Client.Core.Models.Tiles.Validators.$HA");
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$IZ = function() {
    this.$20h = { CONTACT: "CONTACT", SYSTEMUSER: "SYSTEMUSER" }
};
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$IZ.prototype = {
    $20h: null,
    $7c: function(n) {
        var t = new Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult(!0, n, ""), i = n;
        return Microsoft.Crm.Client.Core.Framework.$3.$1S(i)
            ? (t.$4q = Microsoft.Crm.Client.Core.Framework.$3.$MD("Expected value to be string, but was {0}.", n), t
                .$5r = !1, t)
            : (i.toUpperCase() in this.$20h)
            ? t
            : (t.$4q = Microsoft.Crm.Client.Core.Framework.$3.$MD("Entity {0} is not supported.", n), t.$5r = !1, t)
    }
};
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$Ia = function() {};
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$Ia.prototype = {
    $1Gi: null,
    $7c: function(n) {
        var t = new Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult(!0, n, ""), i = n;
        if (Microsoft.Crm.Client.Core.Framework.$3.$1S(i))
            return t.$5r = !1, t.$4q = "Expected keyName to be not null or whitespace.", t;
        if (!(i in this.$1Gi))
            return t.$5r = !1, t.$4q = Microsoft.Crm.Client.Core.Framework.$3
                .$MD("Expected RelationshipData to contain the key {0}.", i), t;
        switch (i) {
        case"CommunicationCardFieldNames":
            return this.$3Vz();
        case"FieldName":
            return this.$3W2()
        }
        return t
    },
    $3Vz: function() {
        var n = new Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult(!0, "CommunicationCardFieldNames", ""),
            t = this.$1Gi.CommunicationCardFieldNames;
        return $0.$1(t)
            ? (n.$5r = !1, n.$4q = "Expected fieldNames to be not null.", n)
            : t.length ? n : (n.$5r = !1, n.$4q = "Expected fieldNames to have length greater than 0.", n)
    },
    $3W2: function() {
        var n = new Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult(!0, "FieldName", ""),
            t = this.$1Gi.FieldName;
        return Microsoft.Crm.Client.Core.Framework.$3.$1S(t)
            ? (n.$5r = !1, n.$4q = "Expected lookupFieldName to be not null or whitespace.", n)
            : n
    },
    set_$3Jr: function(n) { return this.$1Gi = n, n }
};
Mscrm.InternalUtilities.Utilities.registerClass("Mscrm.InternalUtilities.Utilities");
Microsoft.Crm.Workflow.$9q.registerClass("Microsoft.Crm.Workflow.$9q");
Microsoft.Crm.Workflow.ObjectModel.$JH.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JH");
Microsoft.Crm.Workflow.ObjectModel.$9g.registerClass("Microsoft.Crm.Workflow.ObjectModel.$9g",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$9O.registerClass("Microsoft.Crm.Workflow.ObjectModel.$9O",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$JZ.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JZ");
Microsoft.Crm.Workflow.ObjectModel.$5q.registerClass("Microsoft.Crm.Workflow.ObjectModel.$5q",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$T3.registerClass("Microsoft.Crm.Workflow.ObjectModel.$T3",
    Microsoft.Crm.Workflow.ObjectModel.$5q);
Microsoft.Crm.Workflow.ObjectModel.$1T.registerClass("Microsoft.Crm.Workflow.ObjectModel.$1T");
Microsoft.Crm.Workflow.ObjectModel.$9T.registerClass("Microsoft.Crm.Workflow.ObjectModel.$9T",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$9l.registerClass("Microsoft.Crm.Workflow.ObjectModel.$9l",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$62.registerClass("Microsoft.Crm.Workflow.ObjectModel.$62",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$Er.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Er",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$Bl.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Bl",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Sv.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Sv",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$6l.registerClass("Microsoft.Crm.Workflow.ObjectModel.$6l",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$9h.registerClass("Microsoft.Crm.Workflow.ObjectModel.$9h",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$Ja.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Ja");
Microsoft.Crm.Workflow.ObjectModel.$JU.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JU");
Microsoft.Crm.Workflow.ObjectModel.$R7.registerClass("Microsoft.Crm.Workflow.ObjectModel.$R7",
    Microsoft.Crm.Workflow.ObjectModel.$JU);
Microsoft.Crm.Workflow.ObjectModel.$7e.registerClass("Microsoft.Crm.Workflow.ObjectModel.$7e",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$E0.registerClass("Microsoft.Crm.Workflow.ObjectModel.$E0",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$An.registerClass("Microsoft.Crm.Workflow.ObjectModel.$An",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$JT.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JT");
Microsoft.Crm.Workflow.ObjectModel.$JT.$3Xp.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JT.$3Xp");
Microsoft.Crm.Workflow.ObjectModel.$JV.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JV");
Microsoft.Crm.Workflow.ObjectModel.$I.registerClass("Microsoft.Crm.Workflow.ObjectModel.$I");
Microsoft.Crm.Workflow.ObjectModel.$Bd.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Bd");
Microsoft.Crm.Workflow.ObjectModel.$JL.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JL");
Microsoft.Crm.Workflow.ObjectModel.$JG.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JG");
Microsoft.Crm.Workflow.ObjectModel.$9y.registerClass("Microsoft.Crm.Workflow.ObjectModel.$9y",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Pt.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Pt",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Ew.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Ew",
    Microsoft.Crm.Workflow.ObjectModel.$Pt);
Microsoft.Crm.Workflow.ObjectModel.$SS.registerClass("Microsoft.Crm.Workflow.ObjectModel.$SS",
    Microsoft.Crm.Workflow.ObjectModel.$Pt);
Microsoft.Crm.Workflow.ObjectModel.$Qz.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Qz",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Pz.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Pz",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Px.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Px",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Q3.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Q3",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Q4.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Q4",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Q1.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Q1",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Q2.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Q2",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$JF.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JF");
Microsoft.Crm.Workflow.ObjectModel.$QF.registerClass("Microsoft.Crm.Workflow.ObjectModel.$QF",
    Microsoft.Crm.Workflow.ObjectModel.$JV);
Microsoft.Crm.Workflow.ObjectModel.$JD.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JD");
Microsoft.Crm.Workflow.ObjectModel.$JE.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JE");
Microsoft.Crm.Workflow.ObjectModel.$QG.registerClass("Microsoft.Crm.Workflow.ObjectModel.$QG",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$JJ.registerClass("Microsoft.Crm.Workflow.ObjectModel.$JJ");
Microsoft.Crm.Workflow.ObjectModel.$7B.registerClass("Microsoft.Crm.Workflow.ObjectModel.$7B",
    Microsoft.Crm.Workflow.ObjectModel.$9g);
Microsoft.Crm.Workflow.ObjectModel.$QE.registerClass("Microsoft.Crm.Workflow.ObjectModel.$QE",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$QJ.registerClass("Microsoft.Crm.Workflow.ObjectModel.$QJ",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Pe.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Pe",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$MZ.registerClass("Microsoft.Crm.Workflow.ObjectModel.$MZ",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Po.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Po",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Pm.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Pm",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Pp.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Pp",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Pq.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Pq",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$Ct.registerClass("Microsoft.Crm.Workflow.ObjectModel.$Ct",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Workflow.ObjectModel.$MM.registerClass("Microsoft.Crm.Workflow.ObjectModel.$MM",
    Microsoft.Crm.Workflow.ObjectModel.$JH);
Microsoft.Crm.Client.Core.Models.$JC.registerClass("Microsoft.Crm.Client.Core.Models.$JC");
Microsoft.Crm.Client.Core.Models.$J8.registerClass("Microsoft.Crm.Client.Core.Models.$J8");
Microsoft.Crm.Client.Core.Models.$J9.registerClass("Microsoft.Crm.Client.Core.Models.$J9");
Microsoft.Crm.Client.Core.Models.$JA.registerClass("Microsoft.Crm.Client.Core.Models.$JA");
Microsoft.Crm.Client.Core.Models.$JW.registerClass("Microsoft.Crm.Client.Core.Models.$JW");
Microsoft.Crm.Client.Core.Models.$JX.registerClass("Microsoft.Crm.Client.Core.Models.$JX");
Microsoft.Crm.Client.Core.Models.$JY.registerClass("Microsoft.Crm.Client.Core.Models.$JY");
Microsoft.Crm.Client.Core.Models.$JM.registerClass("Microsoft.Crm.Client.Core.Models.$JM");
Microsoft.Crm.Client.Core.Models.$JN.registerClass("Microsoft.Crm.Client.Core.Models.$JN");
Microsoft.Crm.Client.Core.Models.ResourceStringModel
    .registerClass("Microsoft.Crm.Client.Core.Models.ResourceStringModel");
Microsoft.Crm.Client.Core.Models.$JB.registerClass("Microsoft.Crm.Client.Core.Models.$JB");
Microsoft.Crm.Client.Core.Models.$8k.registerClass("Microsoft.Crm.Client.Core.Models.$8k",
    Microsoft.Crm.Client.Core.Models.$JB);
Microsoft.Crm.Client.Core.Models.$8j.registerClass("Microsoft.Crm.Client.Core.Models.$8j",
    Microsoft.Crm.Client.Core.Models.$JB);
Microsoft.Crm.Client.Core.Models.$7l.registerClass("Microsoft.Crm.Client.Core.Models.$7l",
    Microsoft.Crm.Client.Core.Models.$JB);
Microsoft.Crm.Client.Core.Models.$8i.registerClass("Microsoft.Crm.Client.Core.Models.$8i",
    Microsoft.Crm.Client.Core.Models.$JB);
Microsoft.Crm.Client.Core.Models.ModelCollection
    .registerClass("Microsoft.Crm.Client.Core.Models.ModelCollection",
        Microsoft.Crm.Client.Core.Framework.$6t,
        Microsoft.Crm.Client.Core.Models.$G9);
Microsoft.Crm.Client.Core.Models.$Sd.registerClass("Microsoft.Crm.Client.Core.Models.$Sd",
    Microsoft.Crm.Client.Core.Models.ModelCollection,
    Microsoft.Crm.Client.Core.Models.$G8,
    Microsoft.Crm.Client.Core.Models.$G9,
    Microsoft.Crm.Client.Core.Framework.$He);
Microsoft.Crm.Client.Core.Models.$TV.registerClass("Microsoft.Crm.Client.Core.Models.$TV",
    Microsoft.Crm.Client.Core.Models.$Sd,
    Microsoft.Crm.Client.Core.Models.$G5,
    Microsoft.Crm.Client.Core.Models.$G8,
    Microsoft.Crm.Client.Core.Models.$G9,
    Microsoft.Crm.Client.Core.Framework.$He,
    Microsoft.Crm.Client.Core.Framework.$HD);
Microsoft.Crm.Client.Core.Models.DynamicModel.registerClass("Microsoft.Crm.Client.Core.Models.DynamicModel",
    null,
    Microsoft.Crm.Client.Core.Models.$8z,
    Microsoft.Crm.Client.Core.Models.IModel,
    Microsoft.Crm.Client.Core.Framework.$HJ,
    Microsoft.Crm.Client.Core.Framework.$He);
Microsoft.Crm.Client.Core.Models.$Qm.registerClass("Microsoft.Crm.Client.Core.Models.$Qm",
    Microsoft.Crm.Client.Core.Models.DynamicModel,
    Microsoft.Crm.Client.Core.Models.$Ag,
    Microsoft.Crm.Client.Core.Models.$8z,
    Microsoft.Crm.Client.Core.Models.IModel,
    Microsoft.Crm.Client.Core.Framework.$HJ,
    Microsoft.Crm.Client.Core.Framework.$He,
    Microsoft.Crm.Client.Core.Framework.$HT,
    Microsoft.Crm.Client.Core.Framework.$HU,
    Sys.IDisposable);
Microsoft.Crm.Client.Core.Models.$BF.registerClass("Microsoft.Crm.Client.Core.Models.$BF");
Microsoft.Crm.Client.Core.Models.$JO.registerClass("Microsoft.Crm.Client.Core.Models.$JO");
Microsoft.Crm.Client.Core.Models.$8a.registerClass("Microsoft.Crm.Client.Core.Models.$8a",
    Microsoft.Crm.Client.Core.Framework.$5V);
Microsoft.Crm.Client.Core.Models.$A8.registerClass("Microsoft.Crm.Client.Core.Models.$A8");
Microsoft.Crm.Client.Core.Models.$3E.registerClass("Microsoft.Crm.Client.Core.Models.$3E",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Models.EntityCountForAttributeValue
    .registerClass("Microsoft.Crm.Client.Core.Models.EntityCountForAttributeValue");
Microsoft.Crm.Client.Core.Models.$JR.registerClass("Microsoft.Crm.Client.Core.Models.$JR");
Microsoft.Crm.Client.Core.Models.$T9.registerClass("Microsoft.Crm.Client.Core.Models.$T9",
    Microsoft.Crm.Client.Core.Framework.$5V);
Microsoft.Crm.Client.Core.Models.$30.registerClass("Microsoft.Crm.Client.Core.Models.$30",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Models.$JP.registerClass("Microsoft.Crm.Client.Core.Models.$JP");
Microsoft.Crm.Client.Core.Models.$Qb.registerClass("Microsoft.Crm.Client.Core.Models.$Qb",
    Microsoft.Crm.Client.Core.Models.$JP);
Microsoft.Crm.Client.Core.Models.$z.registerClass("Microsoft.Crm.Client.Core.Models.$z",
    Microsoft.Crm.Client.Core.Framework.$6t,
    Microsoft.Crm.Client.Core.Models.IFormModel,
    Microsoft.Crm.Client.Core.Framework.$He);
Microsoft.Crm.Client.Core.Models.$6U.registerClass("Microsoft.Crm.Client.Core.Models.$6U",
    Microsoft.Crm.Client.Core.Models.$z,
    Microsoft.Crm.Client.Core.Models.IModel,
    Microsoft.Crm.Client.Core.Framework.$HJ,
    Microsoft.Crm.Client.Core.Framework.$He);
Microsoft.Crm.Client.Core.Models.$48.registerClass("Microsoft.Crm.Client.Core.Models.$48",
    Microsoft.Crm.Client.Core.Models.$6U,
    Microsoft.Crm.Client.Core.Models.IMultipleEntityAttributeFormModel,
    Microsoft.Crm.Client.Core.Models.IModel,
    Microsoft.Crm.Client.Core.Framework.$HJ,
    Microsoft.Crm.Client.Core.Framework.$He,
    Microsoft.Crm.Client.Core.Models.ICloneableModel,
    Microsoft.Crm.Client.Core.Models.IReferenceModel);
Microsoft.Crm.Client.Core.Models.$O.registerClass("Microsoft.Crm.Client.Core.Models.$O",
    Microsoft.Crm.Client.Core.Models.$z,
    Microsoft.Crm.Client.Core.Models.IRecordModel,
    Microsoft.Crm.Client.Core.Models.ICloneableModel,
    Microsoft.Crm.Client.Core.Models.IModel,
    Microsoft.Crm.Client.Core.Framework.$HJ,
    Microsoft.Crm.Client.Core.Framework.$He,
    Microsoft.Crm.Client.Core.Models.IReferenceModel);
Microsoft.Crm.Client.Core.Models.$22.registerClass("Microsoft.Crm.Client.Core.Models.$22",
    Microsoft.Crm.Client.Core.Models.$O);
Microsoft.Crm.Client.Core.Models.AssociatedViewItemData
    .registerClass("Microsoft.Crm.Client.Core.Models.AssociatedViewItemData");
Microsoft.Crm.Client.Core.Models.$JQ.registerClass("Microsoft.Crm.Client.Core.Models.$JQ");
Microsoft.Crm.Client.Core.Models.$7g.registerClass("Microsoft.Crm.Client.Core.Models.$7g");
Microsoft.Crm.Client.Core.Models.$1E.registerClass("Microsoft.Crm.Client.Core.Models.$1E",
    Microsoft.Crm.Client.Core.Framework.$6t,
    Microsoft.Crm.Client.Core.Models.$G7,
    Microsoft.Crm.Client.Core.Models.$G8,
    Microsoft.Crm.Client.Core.Models.$G9,
    Sys.IDisposable);
Microsoft.Crm.Client.Core.Models.$A6.registerClass("Microsoft.Crm.Client.Core.Models.$A6",
    Microsoft.Crm.Client.Core.Models.$1E);
Microsoft.Crm.Client.Core.Models.$J0.registerClass("Microsoft.Crm.Client.Core.Models.$J0");
Microsoft.Crm.Client.Core.Models.$Iz.registerClass("Microsoft.Crm.Client.Core.Models.$Iz",
    null,
    Microsoft.Crm.Client.Core.Models.$FW);
Microsoft.Crm.Client.Core.Models.$J2.registerClass("Microsoft.Crm.Client.Core.Models.$J2");
Microsoft.Crm.Client.Core.Models.$2g.registerClass("Microsoft.Crm.Client.Core.Models.$2g");
Microsoft.Crm.Client.Core.Models.$87.registerClass("Microsoft.Crm.Client.Core.Models.$87");
Microsoft.Crm.Client.Core.Models.$J1.registerClass("Microsoft.Crm.Client.Core.Models.$J1");
Microsoft.Crm.Client.Core.Models.$Ix.registerClass("Microsoft.Crm.Client.Core.Models.$Ix");
Microsoft.Crm.Client.Core.Models.$6Z.registerClass("Microsoft.Crm.Client.Core.Models.$6Z",
    Microsoft.Crm.Client.Core.Models.$1E);
Microsoft.Crm.Client.Core.Models.$3S.registerClass("Microsoft.Crm.Client.Core.Models.$3S",
    Microsoft.Crm.Client.Core.Framework.$5V,
    Microsoft.Crm.Client.Core.Models.$Aq);
Microsoft.Crm.Client.Core.Models.$Iv.registerClass("Microsoft.Crm.Client.Core.Models.$Iv",
    null,
    Microsoft.Crm.Client.Core.Models.$FV);
Microsoft.Crm.Client.Core.Models.Constants.$Iu.registerClass("Microsoft.Crm.Client.Core.Models.Constants.$Iu");
Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet");
Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.ComponentDefinitionDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ComponentDefinitionDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.$U.registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.$U");
Microsoft.Crm.Client.Core.Models.Descriptors.SerializedValueDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.SerializedValueDescriptor");
Microsoft.Crm.Client.Core.Models.MailApp.$J5.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$J5");
Microsoft.Crm.Client.Core.Models.MailApp.$Qe.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$Qe",
    Microsoft.Crm.Client.Core.Models.MailApp.$J5);
Microsoft.Crm.Client.Core.Models.MailApp.$Iw.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$Iw");
Microsoft.Crm.Client.Core.Models.MailApp.$J6.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$J6");
Microsoft.Crm.Client.Core.Models.MailApp.$Ql.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$Ql",
    Microsoft.Crm.Client.Core.Models.MailApp.$J6);
Microsoft.Crm.Client.Core.Models.MailApp.$DF.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$DF",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Core.Models.MailApp.$J3.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$J3");
Microsoft.Crm.Client.Core.Models.MailApp.$Qi.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$Qi",
    Microsoft.Crm.Client.Core.Models.MailApp.$J6);
Microsoft.Crm.Client.Core.Models.MailApp.$9E.registerClass("Microsoft.Crm.Client.Core.Models.MailApp.$9E");
Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult");
Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator",
        null,
        Microsoft.Crm.Client.Core.Models.Validation.$7S,
        Microsoft.Crm.Client.Core.Models.Validation.$FM);
Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator",
        Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator,
        Microsoft.Crm.Client.Core.Models.Validation.$Dh,
        Microsoft.Crm.Client.Core.Models.Validation.$FM);
Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator",
        Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator,
        Microsoft.Crm.Client.Core.Models.Validation.$Dl,
        Microsoft.Crm.Client.Core.Models.Validation.$FM);
Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator",
        Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator,
        Microsoft.Crm.Client.Core.Models.Validation.$Du,
        Microsoft.Crm.Client.Core.Models.Validation.$FM);
Microsoft.Crm.Client.Core.Models.Validation.UrlValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.UrlValidator",
        Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator);
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator",
        Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator);
Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator",
        Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator,
        Microsoft.Crm.Client.Core.Models.Validation.$FN,
        Microsoft.Crm.Client.Core.Models.Validation.$FM);
Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator
    .registerClass("Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator",
        Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ViewModelDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ViewModelDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiControlDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiControlDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiCustomControlDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiCustomControlDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiControlDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor",
        Microsoft.Crm.Client.Core.Models.$JO);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ActionProviderPropertyDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ActionProviderPropertyDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.$J4
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.$J4");
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.CommandDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.CommandDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.SerializedValueDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ReferencePropertyDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ReferencePropertyDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.PropertyDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiListDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiListDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ClientApiDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelCollectionDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelCollectionDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelItemDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.Model.ModelItemDescriptor");
Microsoft.Crm.Client.Core.Models.Descriptors.View.ViewDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.View.ViewDescriptor",
        Microsoft.Crm.Client.Core.Models.$JO);
Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.View.ControlViewDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.View.ViewDescriptor);
Microsoft.Crm.Client.Core.Models.Descriptors.View.RootViewDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Descriptors.View.RootViewDescriptor",
        Microsoft.Crm.Client.Core.Models.Descriptors.View.ViewDescriptor);
Microsoft.Crm.Client.Core.Models.Form.FormComponentDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Form.FormComponentDescriptor");
Microsoft.Crm.Client.Core.Models.Form.FormDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Form.FormDescriptor");
Microsoft.Crm.Client.Core.Models.Form.LabelDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Form.LabelDescriptor");
Microsoft.Crm.Client.Core.Models.Form.SectionDescriptor
    .registerClass("Microsoft.Crm.Client.Core.Models.Form.SectionDescriptor");
Mscrm.ProcessControlShared.ObjectModels.$K4.registerClass("Mscrm.ProcessControlShared.ObjectModels.$K4");
Mscrm.ProcessControlShared.ObjectModels.$K2.registerClass("Mscrm.ProcessControlShared.ObjectModels.$K2");
Mscrm.ProcessControlShared.ObjectModels.$K3.registerClass("Mscrm.ProcessControlShared.ObjectModels.$K3");
Mscrm.ProcessControlShared.ObjectModels.$K0.registerClass("Mscrm.ProcessControlShared.ObjectModels.$K0");
Mscrm.ProcessControlShared.ObjectModels.$K1.registerClass("Mscrm.ProcessControlShared.ObjectModels.$K1");
Mscrm.ProcessControlShared.ObjectModels.$2W.registerClass("Mscrm.ProcessControlShared.ObjectModels.$2W",
    null,
    Mscrm.ProcessControlShared.ObjectModels.$FP);
Mscrm.ProcessControlShared.ObjectModels.$K5.registerClass("Mscrm.ProcessControlShared.ObjectModels.$K5",
    null,
    Mscrm.ProcessControlShared.ObjectModels.$FQ);
Microsoft.Crm.Client.Core.Models.ProcessControl.$K7
    .registerClass("Microsoft.Crm.Client.Core.Models.ProcessControl.$K7",
        null,
        Microsoft.Crm.Client.Core.Models.ProcessControl.$Fc);
Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$K8
    .registerClass("Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$K8",
        null,
        Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$Fa);
Microsoft.Crm.Client.Core.Models.Tiles.$3z.registerClass("Microsoft.Crm.Client.Core.Models.Tiles.$3z",
    null,
    Microsoft.Crm.Client.Core.Models.Tiles.$Fb);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$K6
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$K6",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Ji
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Ji",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jl
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jl",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jj
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jj",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fi);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$7c
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$7c",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jk
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jk",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fd,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$83
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$83",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$8C
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$8C",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jh
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jh",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Fg,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Je
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Je",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jf
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Jf",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Builders.$Gj);
Microsoft.Crm.Client.Core.Models.Workspace.BasePaneLayoutType
    .registerClass("Microsoft.Crm.Client.Core.Models.Workspace.BasePaneLayoutType");
Microsoft.Crm.Client.Core.Models.Workspace.BasePaneType
    .registerClass("Microsoft.Crm.Client.Core.Models.Workspace.BasePaneType");
Microsoft.Crm.Client.Core.Models.Workspace.BaseWorkspaceLayoutType
    .registerClass("Microsoft.Crm.Client.Core.Models.Workspace.BaseWorkspaceLayoutType");
ProcessObjectModel.Visitors.$Ju.registerClass("ProcessObjectModel.Visitors.$Ju");
ProcessObjectModel.Visitors.$Q5.registerClass("ProcessObjectModel.Visitors.$Q5",
    ProcessObjectModel.Visitors.$Ju,
    ProcessObjectModel.Visitors.$Gu);
ProcessObjectModel.Visitors.$Jz.registerClass("ProcessObjectModel.Visitors.$Jz", null, ProcessObjectModel.Visitors.$Gz);
ProcessObjectModel.Visitors.$Jt.registerClass("ProcessObjectModel.Visitors.$Jt", null, ProcessObjectModel.Visitors.$Gy);
ProcessObjectModel.Visitors.$Rt.registerClass("ProcessObjectModel.Visitors.$Rt",
    ProcessObjectModel.Visitors.$Ju,
    ProcessObjectModel.Visitors.$Gu);
ProcessObjectModel.Visitors.$RV.registerClass("ProcessObjectModel.Visitors.$RV",
    ProcessObjectModel.Visitors.$Ju,
    ProcessObjectModel.Visitors.$Gu);
ProcessObjectModel.Visitors.$Ru.registerClass("ProcessObjectModel.Visitors.$Ru",
    ProcessObjectModel.Visitors.$Ju,
    ProcessObjectModel.Visitors.$EB,
    ProcessObjectModel.Visitors.$Gu);
ProcessObjectModel.Visitors.$Q0.registerClass("ProcessObjectModel.Visitors.$Q0",
    ProcessObjectModel.Visitors.$Ju,
    ProcessObjectModel.Visitors.$Gu);
Microsoft.Crm.Workflow.Expressions.$AB.registerClass("Microsoft.Crm.Workflow.Expressions.$AB");
Microsoft.Crm.Workflow.Expressions.$Pr.registerClass("Microsoft.Crm.Workflow.Expressions.$Pr",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$Ps.registerClass("Microsoft.Crm.Workflow.Expressions.$Ps",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$Jv.registerClass("Microsoft.Crm.Workflow.Expressions.$Jv");
Microsoft.Crm.Workflow.Expressions.$Pv.registerClass("Microsoft.Crm.Workflow.Expressions.$Pv",
    Microsoft.Crm.Workflow.Expressions.$Jv);
Microsoft.Crm.Workflow.Expressions.$Pw.registerClass("Microsoft.Crm.Workflow.Expressions.$Pw",
    Microsoft.Crm.Workflow.Expressions.$Jv);
Microsoft.Crm.Workflow.Expressions.$Pu.registerClass("Microsoft.Crm.Workflow.Expressions.$Pu",
    Microsoft.Crm.Workflow.Expressions.$Jv);
Microsoft.Crm.Workflow.Expressions.$QD.registerClass("Microsoft.Crm.Workflow.Expressions.$QD",
    Microsoft.Crm.Workflow.Expressions.$Jv);
Microsoft.Crm.Workflow.Expressions.$Sx.registerClass("Microsoft.Crm.Workflow.Expressions.$Sx",
    Microsoft.Crm.Workflow.Expressions.$QD);
Microsoft.Crm.Workflow.Expressions.$Jo.registerClass("Microsoft.Crm.Workflow.Expressions.$Jo");
Microsoft.Crm.Workflow.Expressions.$QI.registerClass("Microsoft.Crm.Workflow.Expressions.$QI",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$Q7.registerClass("Microsoft.Crm.Workflow.Expressions.$Q7",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$Jp.registerClass("Microsoft.Crm.Workflow.Expressions.$Jp");
Microsoft.Crm.Workflow.Expressions.$Q8.registerClass("Microsoft.Crm.Workflow.Expressions.$Q8",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$1f.registerClass("Microsoft.Crm.Workflow.Expressions.$1f");
Microsoft.Crm.Workflow.Expressions.$Q6.registerClass("Microsoft.Crm.Workflow.Expressions.$Q6",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$QB.registerClass("Microsoft.Crm.Workflow.Expressions.$QB",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$QC.registerClass("Microsoft.Crm.Workflow.Expressions.$QC",
    Microsoft.Crm.Workflow.Expressions.$AB);
Microsoft.Crm.Workflow.Expressions.$Jn.registerClass("Microsoft.Crm.Workflow.Expressions.$Jn");
Microsoft.Crm.Workflow.Utils.$d.registerClass("Microsoft.Crm.Workflow.Utils.$d");
Microsoft.Crm.Workflow.Utils.$k.registerClass("Microsoft.Crm.Workflow.Utils.$k");
Microsoft.Crm.Client.Core.Models.Formatters.$IP.registerClass("Microsoft.Crm.Client.Core.Models.Formatters.$IP");
Microsoft.Crm.Client.Core.Models.Formatters.$QA
    .registerClass("Microsoft.Crm.Client.Core.Models.Formatters.$QA", Microsoft.Crm.Client.Core.Models.Formatters.$IP);
Microsoft.Crm.Client.Core.Models.Formatters.$Ph
    .registerClass("Microsoft.Crm.Client.Core.Models.Formatters.$Ph", Microsoft.Crm.Client.Core.Models.Formatters.$IP);
Microsoft.Crm.Client.Core.Models.Chart.$IQ.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$IQ");
Microsoft.Crm.Client.Core.Models.Chart.$IM.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$IM");
Microsoft.Crm.Client.Core.Models.Chart.$IN.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$IN");
Microsoft.Crm.Client.Core.Models.Chart.$IO.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$IO");
Microsoft.Crm.Client.Core.Models.Chart.$IG.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$IG");
Microsoft.Crm.Client.Core.Models.Chart.$9a.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$9a");
Microsoft.Crm.Client.Core.Models.Chart.$ID.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$ID");
Microsoft.Crm.Client.Core.Models.Chart.$IE.registerClass("Microsoft.Crm.Client.Core.Models.Chart.$IE");
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Pf
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Pf",
        Microsoft.Crm.Client.Core.Models.$Iv,
        Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$8v,
        Microsoft.Crm.Client.Core.Models.$FV);
Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Ts
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$Ts",
        Microsoft.Crm.Client.Core.Models.$3S,
        Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$AV,
        Microsoft.Crm.Client.Core.Models.$Aq);
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$II
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Factories.$II",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Factories.$H7);
Microsoft.Crm.Client.Core.Models.Tiles.Factories.$IY
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Factories.$IY",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Factories.$HB);
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$IZ
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Validators.$IZ",
        null,
        Microsoft.Crm.Client.Core.Models.Validation.$FM);
Microsoft.Crm.Client.Core.Models.Tiles.Validators.$Ia
    .registerClass("Microsoft.Crm.Client.Core.Models.Tiles.Validators.$Ia",
        null,
        Microsoft.Crm.Client.Core.Models.Tiles.Validators.$HA,
        Microsoft.Crm.Client.Core.Models.Validation.$FM);
Microsoft.Crm.Workflow.$9q.$3XA = new Microsoft.Crm.Workflow.$9q(0, 0, 0, 0, 0);
Microsoft.Crm.Workflow.ObjectModel.$An.InteractionResponsePostfix = "_interactionResponseValue";
Microsoft.Crm.Client.Core.Models.$1E.$1My = null;
Microsoft.Crm.Client.Core.Models.$O.$1N0 = null;
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$22M = new(Microsoft.Crm.Client.Core.Framework.List$1
    .$$(String))(["String", "Integer", "Real", "Money", "Decimal"]);
Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2ZI = new(Microsoft.Crm.Client.Core.Framework.List$1
    .$$(String))(["city", "country", "county", "line1", "line2", "line3", "postalcode", "stateorprovince"]);
Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.$2X8 = new RegExp("^\\w+:");
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator
    .$22L = new RegExp('^[^@\\s\\"<>)(\\[\\]:;,]+@[^@\\s\\"<>)(\\[\\]:;,]+$');
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$255 = new RegExp('[\\\\"]');
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$7c.$14a = [
    "address1_city", "address1_stateorprovince", "primarycontactid", "telephone1", "entityimage_url"
];
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$83.$14a = ["subject", "companyname", "telephone1"];
Microsoft.Crm.Client.Core.Models.Tiles.Builders.$8C.$14a = ["customerid", "estimatedvalue", "closeprobability"];
Microsoft.Crm.Workflow.Expressions.$1f.$Dv = null;
Microsoft.Crm.Workflow.Expressions.$1f.$$cctor()
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Core.Models.js.srcmap