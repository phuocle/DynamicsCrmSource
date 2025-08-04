Type.registerNamespace('Microsoft.Crm.Workflow');

Microsoft.Crm.Workflow.CrmTimeSpan = function Microsoft_Crm_Workflow_CrmTimeSpan(sourceYears, sourceMonths, sourceDays, sourceHours, sourceMinutes) {
    this.years = sourceYears;
    this.months = sourceMonths;
    this.days = sourceDays;
    this.hours = sourceHours;
    this.minutes = sourceMinutes;
}
Microsoft.Crm.Workflow.CrmTimeSpan.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (47,3)
    equals: function Microsoft_Crm_Workflow_CrmTimeSpan$equals(value) {
        return value.years === this.years && value.months === this.months && value.days === this.days && value.hours === this.hours && value.minutes === this.minutes;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (61,3)
    add: function Microsoft_Crm_Workflow_CrmTimeSpan$add(value) {
        var $v_0 = null;
        this.years += value.getFullYear();
        this.months += value.getMonth();
        this.days += value.getDay();
        this.hours += value.getHours();
        this.minutes += value.getMinutes();
        value.setFullYear(this.years);
        value.setMonth(this.months);
        value.setDate(this.days);
        value.setFullYear(this.minutes);
        $v_0 = value;
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (87,3)
    subtract: function Microsoft_Crm_Workflow_CrmTimeSpan$subtract(value) {
        var $v_0 = null;
        this.years -= value.getFullYear();
        this.months -= value.getMonth();
        this.days -= value.getDay();
        this.hours -= value.getHours();
        this.minutes -= value.getMinutes();
        value.setFullYear(this.years);
        value.setMonth(this.months);
        value.setDate(this.days);
        value.setFullYear(this.minutes);
        $v_0 = value;
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (113,4)
    get_years: function Microsoft_Crm_Workflow_CrmTimeSpan$get_years() {
        return this.years;
    },
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (118,4)
    set_years: function Microsoft_Crm_Workflow_CrmTimeSpan$set_years(value) {
        this.years = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (129,4)
    get_months: function Microsoft_Crm_Workflow_CrmTimeSpan$get_months() {
        return this.months;
    },
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (134,4)
    set_months: function Microsoft_Crm_Workflow_CrmTimeSpan$set_months(value) {
        this.months = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (145,4)
    get_days: function Microsoft_Crm_Workflow_CrmTimeSpan$get_days() {
        return this.days;
    },
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (150,4)
    set_days: function Microsoft_Crm_Workflow_CrmTimeSpan$set_days(value) {
        this.days = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (161,4)
    get_hours: function Microsoft_Crm_Workflow_CrmTimeSpan$get_hours() {
        return this.hours;
    },
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (166,4)
    set_hours: function Microsoft_Crm_Workflow_CrmTimeSpan$set_hours(value) {
        this.hours = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (177,4)
    get_minutes: function Microsoft_Crm_Workflow_CrmTimeSpan$get_minutes() {
        return this.minutes;
    },
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (182,4)
    set_minutes: function Microsoft_Crm_Workflow_CrmTimeSpan$set_minutes(value) {
        this.minutes = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\ScriptSharp\_Common\Scripts\BusinessRules\ProcessObjectModel\Expressions\Misc\CrmTimeSpan.cs (192,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_CrmTimeSpan$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.days = $v_0._days;
        }
    },
    
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
}


Microsoft.Crm.Workflow.DataSourceCollection = function Microsoft_Crm_Workflow_DataSourceCollection() {
}
Microsoft.Crm.Workflow.DataSourceCollection.prototype = {
    isReadOnly: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\processobjectmodel\DataSourceCollection.cs (32,3)
    append: function Microsoft_Crm_Workflow_DataSourceCollection$append(dataSourceCollection) {
        throw Error.create('notimpl');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\processobjectmodel\DataSourceCollection.cs (45,3)
    add: function Microsoft_Crm_Workflow_DataSourceCollection$add(values) {
        throw Error.create('notimpl');
    }
}


Type.registerNamespace('Microsoft.Crm.Workflow.Expressions');

Microsoft.Crm.Workflow.Expressions.MethodCall = function() {}
Microsoft.Crm.Workflow.Expressions.MethodCall.prototype = {
    selectFirstNonNull: 0, 
    evaluateCondition: 1, 
    concatenateStrings: 2, 
    evaluateExpression: 3, 
    retrieveCurrentTime: 4, 
    retrieveActivityCount: 5, 
    timeoutExpression: 6, 
    crmBooleanToString: 7, 
    conditionOperator: 8, 
    responseLabel: 9, 
    responseValue: 10, 
    responseText: 11, 
    responsePicklist: 12, 
    globalVariables: 13, 
    inputArguments: 14, 
    queryRecords: 15, 
    getFormattedStringForDateTime: 16, 
    customOperationArguments: 17, 
    retrieveFormType: 18, 
    computeTimeTriggers: 19, 
    createOptionSet: 20
}
Microsoft.Crm.Workflow.Expressions.MethodCall.registerEnum('Microsoft.Crm.Workflow.Expressions.MethodCall', false);


Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType = function() {}
Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.prototype = {
    boolean: 0, 
    customer: 1, 
    dateTime: 2, 
    decimal: 3, 
    float: 4, 
    integer: 5, 
    lookup: 6, 
    money: 7, 
    owner: 8, 
    partyList: 9, 
    picklist: 10, 
    key: 11, 
    state: 12, 
    status: 13, 
    string: 14, 
    uniqueIdentifier: 15, 
    entityNameReference: 16, 
    entity: 17, 
    entityCollection: 18
}
Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.registerEnum('Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType', false);


Microsoft.Crm.Workflow.Expressions.IExpressionVisitor = function() {}
Microsoft.Crm.Workflow.Expressions.IExpressionVisitor.registerInterface('Microsoft.Crm.Workflow.Expressions.IExpressionVisitor');


Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator = function() {}
Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator.prototype = {
    isNull: 0, 
    notNull: 1, 
    logicalAnd: 2, 
    logicalOr: 3, 
    IN: 4, 
    notIn: 5, 
    equal: 6, 
    notEqual: 7, 
    contains: 8, 
    doesNotContain: 9, 
    beginsWith: 10, 
    doesNotBeginWith: 11, 
    endsWith: 12, 
    doesNotEndWith: 13, 
    greaterThan: 14, 
    greaterThanOrEqual: 15, 
    lessThan: 16, 
    lessThanOrEqual: 17, 
    equalUserId: 18, 
    notEqualUserId: 19, 
    on: 20, 
    notOn: 21, 
    onOrAfter: 22, 
    onOrBefore: 23, 
    yesterday: 24, 
    today: 25, 
    tomorrow: 26, 
    nextSevenDays: 27, 
    lastSevenDays: 28, 
    nextWeek: 29, 
    lastWeek: 30, 
    thisWeek: 31, 
    nextMonth: 32, 
    lastMonth: 33, 
    thisMonth: 34, 
    nextYear: 35, 
    lastYear: 36, 
    thisYear: 37, 
    anytime: 38, 
    lastXHours: 39, 
    nextXHours: 40, 
    lastXDays: 41, 
    nextXDays: 42, 
    lastXWeeks: 43, 
    nextXWeeks: 44, 
    lastXMonths: 45, 
    nextXMonths: 46, 
    lastXYears: 47, 
    nextXYears: 48
}
Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator.registerEnum('Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator', false);


Microsoft.Crm.Workflow.Expressions.BinaryExpression = function Microsoft_Crm_Workflow_Expressions_BinaryExpression(workflow, binaryOperator, leftOperand, rightOperands) {
    this.conditionOperatoroperator = 6;
    Microsoft.Crm.Workflow.Expressions.BinaryExpression.initializeBase(this, [ workflow ]);
    if (!Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isBinaryOperator(binaryOperator)) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException('Operator in a binary expression must be a binary operator', 'binaryOperator');
    }
    if (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isGroupingOperator(binaryOperator)) {
        if (leftOperand.get_type()) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException('Left operand in a grouping condition must be a logical expression', 'leftOperand');
        }
        if (rightOperands.length !== 1) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException('Exactly one right operand is expected in a grouping condition', 'rightOperand');
        }
        var $v_0 = rightOperands[0];
        if ($v_0.get_type()) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException('Right operand in a grouping condition must be a logical expression', 'rightOperand');
        }
    }
    this.set_type(0);
    this.conditionOperatoroperator = binaryOperator;
    this.left = leftOperand;
    this.right = new Microsoft.Crm.Workflow.Expressions.ExpressionCollection(rightOperands, true);
    this.__class = 'BinaryExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.BinaryExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (72,4)
    get_operator: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$get_operator() {
        return this.conditionOperatoroperator;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (74,4)
    set_operator: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$set_operator(value) {
        this.conditionOperatoroperator = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (83,4)
    get_leftOperand: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$get_leftOperand() {
        return this.left;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (85,4)
    set_leftOperand: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$set_leftOperand(value) {
        this.left = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (95,4)
    get_rightOperands: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$get_rightOperands() {
        return this.right;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (102,3)
    accept: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$accept(visitor) {
        visitor.visitBinaryExpression(this);
    },
    
    left: null,
    right: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (135,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('conditionOperatoroperator', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.conditionOperatoroperator), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('left', this.left.toJson(), true));
        $v_0.append(',');
        $v_0.append('\"right\":[');
        if (this.right.get_count() > 0) {
            $v_0.append(this.right.get_item(0).toJson());
            for (var $v_1 = 1; $v_1 < this.right.get_count(); $v_1++) {
                $v_0.append(',');
                $v_0.append(this.right.get_item($v_1).toJson());
            }
        }
        $v_0.append(']');
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (166,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$fixInternalLinks(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.left.fixInternalLinks(workflowStep);
        if (this.right.get_count() > 0) {
            for (var $v_0 = 0; $v_0 < this.right.get_count(); $v_0++) {
                this.right.get_item($v_0).fixInternalLinks(workflowStep);
            }
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\BinaryExpression.cs (185,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.conditionOperatoroperator = Number.parseInvariant($v_0.conditionOperatoroperator);
            if ($v_0.left) {
                this.left = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_0.left.__class);
                this.left.initializeFromDynamic($v_0.left);
            }
            if ($v_0.right) {
                this.right = new Microsoft.Crm.Workflow.Expressions.ExpressionCollection([], $v_0.right.$G_0);
                var $v_1 = $v_0.right;
                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                    var $v_3 = $v_1[$v_2];
                    var $v_4 = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_3.__class);
                    $v_4.initializeFromDynamic($v_3);
                    this.right.add($v_4);
                }
            }
        }
    }
}


Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression = function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression(sourceEntity, sourceAttributeName) {
    Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.initializeBase(this, [ sourceEntity.$1_0 ]);
    this.entity = sourceEntity;
    this.attributeName = sourceAttributeName;
    this.__class = 'EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (59,4)
    get_entity: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$get_entity() {
        return this.entity;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (70,4)
    get_attributeName: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$get_attributeName() {
        return this.attributeName;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (72,4)
    set_attributeName: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$set_attributeName(value) {
        this.attributeName = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (81,3)
    getDisplayText: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$getDisplayText(cultureInfo) {
        var $v_0 = this.entity.getLocalizedName(cultureInfo);
        var $v_1;
        if (Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.containsKey(this.attributeName)) {
            $v_1 = this.$1_0.$A_2.getResourceString(Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.getAttribute(this.attributeName));
        }
        else {
            $v_1 = this.$1_0.$A_2.getAttributeLocalizedName(cultureInfo, this.entity.get_entityName(), this.attributeName);
        }
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty($v_0)) {
            return String.format('{0}:{1}', $v_0, $v_1);
        }
        else {
            return $v_1;
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (114,3)
    accept: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$accept(visitor) {
        visitor.visitEntityAttributeExpression(this);
    },
    
    entity: null,
    attributeName: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (141,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('attributeName', this.attributeName, true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (158,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$fixInternalLinks(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.entity.fixInternalLinks(workflowStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntityAttributeExpression.cs (170,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
            this.entity.initializeFromDynamic($v_0.entity);
            this.attributeName = $v_0.attributeName;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.TimeSpanExpression = function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression(workflow, sourceValue) {
    Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.initializeBase(this, [ workflow ]);
    this.value = sourceValue;
    this.__class = 'TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\TimeSpanExpression.cs (45,4)
    get_value: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$get_value() {
        return this.value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\TimeSpanExpression.cs (55,3)
    accept: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$accept(visitor) {
        visitor.visitTimeSpanExpression(this);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\TimeSpanExpression.cs (66,4)
    get_displayText: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$get_displayText() {
        throw Error.create('should not be here');
    },
    
    value: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\TimeSpanExpression.cs (92,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('days', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.days), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('hours', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.hours), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('minutes', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.minutes), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('months', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.months), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('years', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.years), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\TimeSpanExpression.cs (113,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = (deserialized).value;
            this.value.initializeFromDynamic($v_0);
        }
    }
}


Microsoft.Crm.Workflow.Expressions.EntityBase = function Microsoft_Crm_Workflow_Expressions_EntityBase(sourceWorkflow, sourceParameterName) {
    this.$1_0 = sourceWorkflow;
    this.parameterName = sourceParameterName;
}
Microsoft.Crm.Workflow.Expressions.EntityBase.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (46,4)
    get_workflow: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_workflow() {
        return this.$1_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (47,4)
    set_workflow: function Microsoft_Crm_Workflow_Expressions_EntityBase$set_workflow(value) {
        this.$1_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (55,4)
    get_entityName: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_entityName() {
        return this.entityName;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (60,4)
    set_entityName: function Microsoft_Crm_Workflow_Expressions_EntityBase$set_entityName(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!value, 'Entity name cannot be set to null');
        this.entityName = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (88,4)
    get_parameterName: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_parameterName() {
        return this.parameterName;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (96,4)
    get_xamlKey: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_xamlKey() {
        return this.parameterName;
    },
    
    __class: 'EntityBase:#Microsoft.Crm.Workflow.Expressions',
    parameterName: null,
    entityName: null,
    $1_0: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (147,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_EntityBase$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('parameterName', this.parameterName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('entityName', this.entityName, true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (164,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_EntityBase$fixInternalLinks(workflowStep) {
        this.$1_0 = workflowStep;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\EntityBase.cs (174,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_EntityBase$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.entityName = $v_0.entityName;
            this.parameterName = $v_0.parameterName;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.MethodCallExpression = function Microsoft_Crm_Workflow_Expressions_MethodCallExpression(workflow, method, parameters) {
    Microsoft.Crm.Workflow.Expressions.MethodCallExpression.initializeBase(this, [ workflow ]);
    this.$k_1(method, parameters);
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\MethodCallExpression.cs (97,3)
Microsoft.Crm.Workflow.Expressions.MethodCallExpression.extractSelectFirstNull = function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$extractSelectFirstNull(methodExpression) {
    if (!methodExpression || methodExpression.method) {
        return methodExpression;
    }
    var $v_0 = methodExpression.getParameters()[0];
    while (true) {
        if ($v_0) {
            var $v_1 = null;
            if (Microsoft.Crm.Workflow.Expressions.MethodCallExpression.isInstanceOfType($v_0)) {
                $v_1 = $v_0;
            }
            if ($v_1 && !$v_1.method) {
                $v_0 = $v_1.getParameters()[0];
            }
            else {
                return $v_0;
            }
        }
        else {
            return $v_0;
        }
    }
}
Microsoft.Crm.Workflow.Expressions.MethodCallExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\MethodCallExpression.cs (56,3)
    $k_1: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$$k_1($p0, $p1) {
        this.method = $p0;
        this.parameters = $p1;
        this.__class = 'MethodCallExpression:#Microsoft.Crm.Workflow.Expressions';
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\MethodCallExpression.cs (68,4)
    get_method: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$get_method() {
        return this.method;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\MethodCallExpression.cs (78,3)
    getParameters: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$getParameters() {
        return this.parameters;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\MethodCallExpression.cs (87,3)
    accept: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$accept(visitor) {
        visitor.visitMethodCallExpression(this);
    },
    
    method: 0,
    parameters: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\MethodCallExpression.cs (158,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('method', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.method), true));
        $v_0.append(',');
        $v_0.append('\"parameters\":[');
        if (this.parameters.length > 0) {
            for (var $v_1 = 0; $v_1 < this.parameters.length; $v_1++) {
                if ($v_1 > 0) {
                    $v_0.append(',');
                }
                var $v_2 = this.parameters[$v_1];
                if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType($v_2)) {
                    $v_0.append(($v_2).toJson());
                }
                else {
                    $v_0.append(Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant($v_2));
                }
            }
        }
        $v_0.append(']');
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\MethodCallExpression.cs (215,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.method = parseInt($v_0.method);
            this.parameters = $v_0.parameters;
            for (var $v_1 = 0; $v_1 < $v_0.parameters.length; $v_1++) {
                var $v_2 = $v_0.parameters[$v_1];
                var $v_3 = typeof($v_2) == 'object';
                if ($v_3) {
                    var $v_4 = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression(($v_2).__class);
                    $v_4.initializeFromDynamic($v_2);
                    this.parameters[$v_1] = $v_4;
                }
                else {
                    this.parameters[$v_1] = $v_2;
                }
            }
        }
    }
}


Microsoft.Crm.Workflow.Expressions.InvalidEntity = function Microsoft_Crm_Workflow_Expressions_InvalidEntity(workflow, parameterName) {
    Microsoft.Crm.Workflow.Expressions.InvalidEntity.initializeBase(this, [ workflow, parameterName ]);
    this.set_entityName('#' + parameterName);
}
Microsoft.Crm.Workflow.Expressions.InvalidEntity.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\InvalidEntity.cs (41,3)
    getLocalizedName: function Microsoft_Crm_Workflow_Expressions_InvalidEntity$getLocalizedName(cultureInfo) {
        return 'Error';
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\InvalidEntity.cs (52,4)
    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_InvalidEntity$get_uiXmlName() {
        return this.parameterName;
    }
}


Microsoft.Crm.Workflow.Expressions.PrimaryEntity = function Microsoft_Crm_Workflow_Expressions_PrimaryEntity(workflow) {
    Microsoft.Crm.Workflow.Expressions.PrimaryEntity.initializeBase(this, [ workflow, 'primaryEntity' ]);
    this.set_entityName(workflow.primaryEntityName);
    this.__class = 'PrimaryEntity:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.PrimaryEntity.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\PrimaryEntity.cs (41,3)
    getLocalizedName: function Microsoft_Crm_Workflow_Expressions_PrimaryEntity$getLocalizedName(cultureInfo) {
        return this.$1_0.$A_2.getEntityLocalizedName(cultureInfo, this.get_entityName());
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\EntitySource\PrimaryEntity.cs (51,4)
    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_PrimaryEntity$get_uiXmlName() {
        return this.get_entityName();
    }
}


Microsoft.Crm.Workflow.Expressions.ExpressionBase = function Microsoft_Crm_Workflow_Expressions_ExpressionBase(workflow) {
    this.$1_0 = workflow;
    this.typeSet = false;
    this.__class = 'ExpressionBase:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionBase.cs (51,4)
    get_workflow: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$get_workflow() {
        return this.$1_0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionBase.cs (66,4)
    get_type: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$get_type() {
        return this.type;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionBase.cs (71,4)
    set_type: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$set_type(value) {
        if (this.typeSet) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException('Cannot change the type after it was set', '_type');
        }
        this.type = value;
        return value;
    },
    
    __class: null,
    $1_0: null,
    type: 0,
    typeSet: false,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionBase.cs (136,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('type', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.type), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('typeSet', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.typeSet), true));
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionBase.cs (151,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$fixInternalLinks(workflowStep) {
        this.$1_0 = workflowStep;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionBase.cs (161,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.type = parseInt($v_0.type);
            this.typeSet = $v_0.typeSet;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.ExpressionCollection = function Microsoft_Crm_Workflow_Expressions_ExpressionCollection(initializeFromArray, sourceReadOnly) {
    this.$3_0 = [];
    if (initializeFromArray) {
        for (var $$arr_2 = initializeFromArray, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4];
            Array.add(this.$3_0, $v_0);
        }
    }
    this.$G_0 = sourceReadOnly;
}
Microsoft.Crm.Workflow.Expressions.ExpressionCollection.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (67,4)
    get_item: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$get_item(index) {
        return this.$3_0[index];
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (72,4)
    set_item: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$set_item(index, value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!this.$G_0, 'Cannot modify value in a readonly expression collection');
        this.$3_0[index] = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (84,4)
    get_isReadOnly: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$get_isReadOnly() {
        return this.$G_0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (92,3)
    indexOf: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$indexOf(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        return Array.indexOf(this.$3_0, expression);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (103,3)
    insert: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$insert(index, expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.insert(this.$3_0, index, expression);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (115,3)
    remove: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$remove(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.remove(this.$3_0, expression);
        return true;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (127,3)
    contains: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$contains(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        return Array.contains(this.$3_0, expression);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (137,3)
    add: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$add(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.add(this.$3_0, expression);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\ExpressionCollections\ExpressionCollection.cs (148,4)
    get_count: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$get_count() {
        return this.$3_0.length;
    },
    
    $G_0: false
}


Microsoft.Crm.Workflow.Expressions.LookupExpression = function Microsoft_Crm_Workflow_Expressions_LookupExpression(workflow, value, type, entityType, label) {
    Microsoft.Crm.Workflow.Expressions.LookupExpression.initializeBase(this, [ workflow ]);
    this.entityType = entityType;
    this.set_type(type);
    this.staticValue = value;
    this.label = label;
    this.__class = 'LookupExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.LookupExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (48,4)
    get_entityType: function Microsoft_Crm_Workflow_Expressions_LookupExpression$get_entityType() {
        return this.entityType;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (50,4)
    set_entityType: function Microsoft_Crm_Workflow_Expressions_LookupExpression$set_entityType(value) {
        this.entityType = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (59,4)
    get_label: function Microsoft_Crm_Workflow_Expressions_LookupExpression$get_label() {
        return this.label;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (60,4)
    set_label: function Microsoft_Crm_Workflow_Expressions_LookupExpression$set_label(value) {
        this.label = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (68,4)
    get_value: function Microsoft_Crm_Workflow_Expressions_LookupExpression$get_value() {
        return this.staticValue;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (70,4)
    set_value: function Microsoft_Crm_Workflow_Expressions_LookupExpression$set_value(value) {
        this.staticValue = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (78,3)
    accept: function Microsoft_Crm_Workflow_Expressions_LookupExpression$accept(visitor) {
        visitor.visitLookupExpression(this);
    },
    
    entityType: null,
    label: null,
    staticValue: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (133,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_LookupExpression$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('entityType', this.entityType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('label', this.label, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('staticValue', (this.staticValue).toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\LookupExpression.cs (152,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_LookupExpression$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.entityType = $v_0.entityType;
            this.label = $v_0.label;
            if ($v_0.staticValue) {
                this.staticValue = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression(($v_0.staticValue).__class);
                (this.staticValue).initializeFromDynamic($v_0.staticValue);
            }
        }
    }
}


Microsoft.Crm.Workflow.Expressions.PropertySpecification = function Microsoft_Crm_Workflow_Expressions_PropertySpecification(sourcePropertyName, propertyValueExpression) {
    this.propertyName = sourcePropertyName;
    this.propertyValueExpr = propertyValueExpression;
}
Microsoft.Crm.Workflow.Expressions.PropertySpecification.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (40,4)
    get_name: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$get_name() {
        return this.propertyName;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (42,4)
    set_name: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$set_name(value) {
        this.propertyName = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (51,4)
    get_value: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$get_value() {
        return this.propertyValueExpr;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (53,4)
    set_value: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$set_value(value) {
        this.propertyValueExpr = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (61,3)
    accept: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$accept(visitor) {
        visitor.visitPropertySpecification(this);
    },
    
    propertyName: null,
    propertyValueExpr: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (82,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('propertyName', this.propertyName, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('propertyValueExpr', this.propertyValueExpr.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (98,3)
    $h_0: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$$h_0($p0) {
        this.propertyValueExpr.fixInternalLinks($p0);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Misc\PropertySpecification.cs (108,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.propertyName = $v_0.propertyName;
            this.propertyValueExpr = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_0.propertyValueExpr.__class);
            this.propertyValueExpr.initializeFromDynamic($v_0.propertyValueExpr);
        }
    }
}


Microsoft.Crm.Workflow.Expressions.NullExpression = function Microsoft_Crm_Workflow_Expressions_NullExpression(workflow) {
    Microsoft.Crm.Workflow.Expressions.NullExpression.initializeBase(this, [ workflow ]);
    this.__class = 'NullExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.NullExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\NullExpression.cs (35,3)
    accept: function Microsoft_Crm_Workflow_Expressions_NullExpression$accept(visitor) {
        visitor.visitNullExpression(this);
    }
}


Microsoft.Crm.Workflow.Expressions.OperatorClassifier = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier() {
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Operators\OperatorClassifier.cs (20,3)
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$$cctor = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$$$cctor() {
    if (!Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0) {
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0 = new Array(30);
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[0] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[1] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[2] |= 2;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[3] |= 2;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[24] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[25] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[26] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[27] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[28] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[29] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[30] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[31] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[32] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[33] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[34] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[35] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[36] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[37] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[38] |= 1;
    }
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Operators\OperatorClassifier.cs (69,3)
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isGroupingOperator = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$isGroupingOperator(op) {
    return (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[op] & 2) === 2;
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Operators\OperatorClassifier.cs (79,3)
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isBinaryOperator = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$isBinaryOperator(op) {
    return !Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isUnaryOperator(op);
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\Operators\OperatorClassifier.cs (89,3)
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isUnaryOperator = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$isUnaryOperator(op) {
    return (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0[op] & 1) === 1;
}


Microsoft.Crm.Workflow.Expressions.PrimitiveExpression = function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression(workflow, value, type) {
    Microsoft.Crm.Workflow.Expressions.PrimitiveExpression.initializeBase(this, [ workflow ]);
    this.__class = 'PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions';
    this.primitiveValue = value;
    this.set_type(type);
}
Microsoft.Crm.Workflow.Expressions.PrimitiveExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\PrimitiveExpression.cs (47,4)
    get_value: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$get_value() {
        return this.primitiveValue;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\PrimitiveExpression.cs (49,4)
    set_value: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$set_value(value) {
        this.primitiveValue = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\PrimitiveExpression.cs (57,3)
    accept: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$accept(visitor) {
        visitor.visitPrimitiveExpression(this);
    },
    
    primitiveValue: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\PrimitiveExpression.cs (72,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('primitiveValue', this.$i_1(), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\PrimitiveExpression.cs (89,3)
    $i_1: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$$i_1() {
        return this.primitiveValue.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\PrimitiveExpression.cs (116,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.primitiveValue = $v_0.primitiveValue;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.UnaryExpression = function Microsoft_Crm_Workflow_Expressions_UnaryExpression(workflow, unaryOperator, operand) {
    Microsoft.Crm.Workflow.Expressions.UnaryExpression.initializeBase(this, [ workflow ]);
    this.__class = 'UnaryExpression:#Microsoft.Crm.Workflow.Expressions';
    if (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isGroupingOperator(unaryOperator)) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException('Operator in a unary expression cannot be a grouping operator', 'unaryOperator');
    }
    if (!Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isUnaryOperator(unaryOperator)) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException('Operator in a unary expression must be unary operator', 'unaryOperator');
    }
    this.set_type(0);
    this.operand = operand;
    this.conditionOperatoroperator = unaryOperator;
}
Microsoft.Crm.Workflow.Expressions.UnaryExpression.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\UnaryExpression.cs (59,4)
    get_operand: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$get_operand() {
        return this.operand;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\UnaryExpression.cs (70,4)
    get_operator: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$get_operator() {
        return this.conditionOperatoroperator;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\UnaryExpression.cs (80,3)
    accept: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$accept(visitor) {
        visitor.visitUnaryExpression(this);
    },
    
    conditionOperatoroperator: 0,
    operand: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\UnaryExpression.cs (101,3)
    toJson: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('conditionOperatoroperator', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.conditionOperatoroperator), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('operand', this.operand.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\UnaryExpression.cs (118,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$fixInternalLinks(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.operand.fixInternalLinks(workflowStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Expressions\UnaryExpression.cs (130,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.conditionOperatoroperator = Number.parseInvariant($v_0.conditionOperatoroperator);
            if ($v_0.operand) {
                var $v_1 = $v_0.operand;
                this.operand = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_1.__class);
                this.operand.initializeFromDynamic($v_1);
            }
        }
    }
}


Type.registerNamespace('Microsoft.Crm.Workflow.Activities');

Microsoft.Crm.Workflow.Activities.ExpressionOperator = function() {}
Microsoft.Crm.Workflow.Activities.ExpressionOperator.prototype = {
    add: 0, 
    subtract: 1, 
    multiply: 2, 
    divide: 3, 
    selectFirstNonNull: 4, 
    retrieveCurrentTime: 5, 
    retrieveLastExecutionTime: 6, 
    retrieveActivityCount: 7, 
    createCrmType: 8, 
    responseLabel: 9, 
    responseValue: 10, 
    responseText: 11, 
    responsePicklist: 12, 
    globalVariables: 13, 
    inputArguments: 14, 
    queryRecords: 15, 
    selectFirstNonNullWithXmlEncode: 16, 
    getFormattedStringForDateTime: 17, 
    queryConcatenate: 18, 
    customOperationArguments: 19, 
    retrieveFormType: 20, 
    computeTimeTriggers: 21, 
    createOptionSet: 22
}
Microsoft.Crm.Workflow.Activities.ExpressionOperator.registerEnum('Microsoft.Crm.Workflow.Activities.ExpressionOperator', false);


Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus = function() {}
Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus.prototype = {
    succeeded: 0, 
    canceled: 1, 
    failed: 2, 
    retry: 3, 
    suspended: 4
}
Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus.registerEnum('Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus', false);


Type.registerNamespace('Microsoft.Crm.Workflow.ObjectModel');

Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction = function() {}
Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction.prototype = {
    add: 0, 
    remove: 1, 
    move: 2
}
Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction.registerEnum('Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction', false);


Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode = function() {}
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode.prototype = {
    IF: 0, 
    elseIf: 1, 
    ELSE: 2
}
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode.registerEnum('Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode', false);


Microsoft.Crm.Workflow.ObjectModel.DataSourceType = function() {}
Microsoft.Crm.Workflow.ObjectModel.DataSourceType.prototype = {
    primaryEntity: 0, 
    relatedEntity: 1, 
    entityCreatedByStep: 2, 
    valuesCreatedByStep: 3, 
    customOperationEntity: 4
}
Microsoft.Crm.Workflow.ObjectModel.DataSourceType.registerEnum('Microsoft.Crm.Workflow.ObjectModel.DataSourceType', false);


Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes = function() {}
Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes.prototype = {
    none: 0, 
    required: 1, 
    recommended: 2
}
Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes.registerEnum('Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes', true);


Microsoft.Crm.Workflow.ObjectModel.InsertDirection = function() {}
Microsoft.Crm.Workflow.ObjectModel.InsertDirection.prototype = {
    before: 0, 
    after: 1
}
Microsoft.Crm.Workflow.ObjectModel.InsertDirection.registerEnum('Microsoft.Crm.Workflow.ObjectModel.InsertDirection', false);


Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue = function() {}
Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue.prototype = {
    executionTime: 0, 
    activityCount: 1, 
    activityCountIncludingWorkflow: 2, 
    waitTimeout: 3
}
Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue.registerEnum('Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue', false);


Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue = function() {}
Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue.prototype = {
    recordCount: 0
}
Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue.registerEnum('Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue', false);


Microsoft.Crm.Workflow.ObjectModel.SendEmailType = function() {}
Microsoft.Crm.Workflow.ObjectModel.SendEmailType.prototype = {
    sendEmailWithoutTemplate: 0, 
    sendEmailWithTemplate: 1
}
Microsoft.Crm.Workflow.ObjectModel.SendEmailType.registerEnum('Microsoft.Crm.Workflow.ObjectModel.SendEmailType', false);


Microsoft.Crm.Workflow.ObjectModel.SystemStep = function() {}
Microsoft.Crm.Workflow.ObjectModel.SystemStep.prototype = {
    identifyContact: 0, 
    identifyAccount: 1, 
    identifyCustomer: 2, 
    identifyCase: 3, 
    solution: 4, 
    resolve: 5
}
Microsoft.Crm.Workflow.ObjectModel.SystemStep.registerEnum('Microsoft.Crm.Workflow.ObjectModel.SystemStep', false);


Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerConditions = function() {}
Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerConditions.prototype = {
    create: 2, 
    DELETE: 4
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerConditions.registerEnum('Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerConditions', true);


Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes = function() {}
Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes.prototype = {
    automatic: 2, 
    onDemand: 4, 
    subprocess: 8
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes.registerEnum('Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes', true);


Microsoft.Crm.Workflow.ObjectModel.IMetadataProvider = function() {}
Microsoft.Crm.Workflow.ObjectModel.IMetadataProvider.registerInterface('Microsoft.Crm.Workflow.ObjectModel.IMetadataProvider');


Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory() {
}
// file://c:\bt\160165\src\Shared\Server\Workflow\NullObjectsFactory.cs (24,3)
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory$buildStep(className) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
    switch (className) {
        case 'ConditionStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.ConditionStep($v_0);
        case 'ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel':
            var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.ConditionStep($v_0);
            $v_1.set_workflow($v_0);
            return new Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep($v_1, null);
        case 'SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep($v_0);
        case 'SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep($v_0);
        case 'SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep($v_0, null);
        case 'SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep($v_0);
        case 'SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetMessageStep($v_0);
        case 'ControlStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.ControlStep($v_0);
        case 'EntityStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.EntityStep($v_0, 'dummy');
        case 'StageStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.StageStep($v_0, 'dummy');
        case 'StepStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.StepStep($v_0, 'dummy');
    }
    return null;
}
// file://c:\bt\160165\src\Shared\Server\Workflow\NullObjectsFactory.cs (62,3)
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory$buildExpression(className) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
    switch (className) {
        case 'UnaryExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.UnaryExpression($v_0, 0, null);
        case 'PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression($v_0, null, 14);
        case 'BinaryExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.BinaryExpression($v_0, 6, new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression($v_0, null, 14), []);
        case 'EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(new Microsoft.Crm.Workflow.Expressions.InvalidEntity($v_0, 'dummyParam'), 'name');
        case 'MethodCallExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.MethodCallExpression($v_0, 0, null);
        case 'TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.TimeSpanExpression($v_0, new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, 0, 0, 0));
        case 'LookupExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.LookupExpression($v_0, null, 6, '', '');
    }
    return null;
}
// file://c:\bt\160165\src\Shared\Server\Workflow\NullObjectsFactory.cs (90,3)
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory$buildEntity(className) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
    switch (className) {
        case 'PrimaryEntity:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.PrimaryEntity($v_0);
        default:
            return null;
    }
}


Microsoft.Crm.Workflow.ObjectModel.ControlStep = function Microsoft_Crm_Workflow_ObjectModel_ControlStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ControlStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'ControlStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$2_2());
}
Microsoft.Crm.Workflow.ObjectModel.ControlStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (49,4)
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_controlId() {
        return this.controlId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (50,4)
    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (58,4)
    get_classId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_classId() {
        return this.classId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (59,4)
    set_classId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_classId(value) {
        this.classId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (67,4)
    get_dataFieldName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_dataFieldName() {
        return this.dataFieldName;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (68,4)
    set_dataFieldName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_dataFieldName(value) {
        this.dataFieldName = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (76,4)
    get_systemStepType: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_systemStepType() {
        return this.systemStepType;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (77,4)
    set_systemStepType: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_systemStepType(value) {
        this.systemStepType = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (85,4)
    get_isSystemControl: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_isSystemControl() {
        return this.isSystemControl;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (86,4)
    set_isSystemControl: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_isSystemControl(value) {
        this.isSystemControl = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (94,4)
    get_parameters: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_parameters() {
        return this.parameters;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (95,4)
    set_parameters: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_parameters(value) {
        this.parameters = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (103,4)
    get_controlDisplayName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_controlDisplayName() {
        return this.controlDisplayName;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (104,4)
    set_controlDisplayName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_controlDisplayName(value) {
        this.controlDisplayName = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (113,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$apply(visitor) {
        visitor.visitControlStep(this);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (125,3)
    addPeer: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$addPeer(direction, newStep) {
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (134,3)
    $N_0: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$$N_0($p0) {
    },
    
    controlId: null,
    classId: null,
    dataFieldName: null,
    systemStepType: 0,
    isSystemControl: false,
    parameters: null,
    controlDisplayName: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (192,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('classId', this.classId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('dataFieldName', this.dataFieldName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('systemStepType', Microsoft.Crm.Workflow.ObjectModel.SystemStep.toString(this.systemStepType), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('isSystemControl', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isSystemControl), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('parameters', this.parameters, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlDisplayName', this.controlDisplayName, true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\ControlStep.cs (215,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.controlId = $v_0.controlId;
            this.classId = $v_0.classId;
            this.dataFieldName = $v_0.dataFieldName;
            this.systemStepType = $v_0.systemStepType;
            this.isSystemControl = $v_0.isSystemControl;
            this.parameters = $v_0.parameters;
            this.controlDisplayName = $v_0.controlDisplayName;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.EntityStep = function Microsoft_Crm_Workflow_ObjectModel_EntityStep(workflowStep, entityLogicalName) {
    Microsoft.Crm.Workflow.ObjectModel.EntityStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(entityLogicalName, 'entityLogicalName');
    this.__class = 'EntityStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$2_2());
    this.set_entityLogicalName(entityLogicalName);
}
Microsoft.Crm.Workflow.ObjectModel.EntityStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (53,4)
    get_entityLogicalName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_entityLogicalName() {
        return this.description;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (54,4)
    set_entityLogicalName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_entityLogicalName(value) {
        this.description = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (63,4)
    get_relationshipName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_relationshipName() {
        return this.relationshipName;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (64,4)
    set_relationshipName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_relationshipName(value) {
        this.relationshipName = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (73,4)
    get_attributeName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_attributeName() {
        return this.attributeName;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (74,4)
    set_attributeName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_attributeName(value) {
        this.attributeName = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (83,4)
    get_isClosedLoop: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_isClosedLoop() {
        return this.isClosedLoop;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (84,4)
    set_isClosedLoop: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_isClosedLoop(value) {
        this.isClosedLoop = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (93,3)
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep), 'Cannot insert a non stage step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (103,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$remove(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stepBase), 'Cannot remove a non stage step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (113,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$apply(visitor) {
        visitor.visitEntityStep(this);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (125,3)
    addPeer: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$addPeer(direction, newStep) {
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (134,3)
    $N_0: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$$N_0($p0) {
    },
    
    relationshipName: null,
    attributeName: null,
    isClosedLoop: false,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (168,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('relationshipName', this.relationshipName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('attributeName', this.attributeName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('isClosedLoop', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isClosedLoop), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\EntityStep.cs (187,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.relationshipName = $v_0.relationshipName;
            this.attributeName = $v_0.attributeName;
            this.isClosedLoop = $v_0.isClosedLoop;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepStep = function Microsoft_Crm_Workflow_ObjectModel_StepStep(workflowStep, stepName) {
    Microsoft.Crm.Workflow.ObjectModel.StepStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(stepName, 'stepName');
    this.__class = 'StepStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$2_2());
    this.set_stepStepName(stepName);
}
Microsoft.Crm.Workflow.ObjectModel.StepStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (55,4)
    get_stepStepId: function Microsoft_Crm_Workflow_ObjectModel_StepStep$get_stepStepId() {
        return this.stepStepId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (60,4)
    set_stepStepId: function Microsoft_Crm_Workflow_ObjectModel_StepStep$set_stepStepId(value) {
        this.stepStepId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (71,4)
    get_stepStepName: function Microsoft_Crm_Workflow_ObjectModel_StepStep$get_stepStepName() {
        return this.description;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (76,4)
    set_stepStepName: function Microsoft_Crm_Workflow_ObjectModel_StepStep$set_stepStepName(value) {
        this.description = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (87,4)
    get_isProcessRequired: function Microsoft_Crm_Workflow_ObjectModel_StepStep$get_isProcessRequired() {
        return this.isProcessRequired;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (92,4)
    set_isProcessRequired: function Microsoft_Crm_Workflow_ObjectModel_StepStep$set_isProcessRequired(value) {
        this.isProcessRequired = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (104,3)
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_StepStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(newStep), 'Cannot insert a non ControlStep');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (114,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_StepStep$remove(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(stepBase), 'Cannot remove a non ControlStep');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (124,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_StepStep$apply(visitor) {
        visitor.visitStepStep(this);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (136,3)
    addPeer: function Microsoft_Crm_Workflow_ObjectModel_StepStep$addPeer(direction, newStep) {
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (145,3)
    $N_0: function Microsoft_Crm_Workflow_ObjectModel_StepStep$$N_0($p0) {
    },
    
    stepStepId: null,
    stepStepName: null,
    isProcessRequired: false,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (179,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stepStepId', this.stepStepId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.stepStepName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('isProcessRequired', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isProcessRequired), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\BusinessProcessFlow\StepStep.cs (198,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StepStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.stepStepId = $v_0.stepStepId;
            this.isProcessRequired = $v_0.isProcessRequired;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase = function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase() {
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.initializeBase(this);
    this.steps = new Microsoft.Crm.Workflow.ObjectModel.StepCollection();
    this.__class = 'CompositeStepBase:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (40,4)
    get_steps: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$get_steps() {
        return this.steps;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (47,3)
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$appendStep(newStep) {
        if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert((Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.WorkflowStep) || (Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.EntityStep), 'StageStep can only be inserted as a child of WorkflowStep or EntityStep.');
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)), 'WorkflowStep cannot be added as a child of any steps.');
        newStep.$g_0();
        newStep.set_parent(this);
        this.steps.add(newStep);
        this.get_workflow().stepDictionary.set_item(newStep.id, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (71,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$remove(stepBase) {
        this.get_workflow().stepDictionary.remove(stepBase.id);
        if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(stepBase)) {
            var $v_0 = stepBase;
            var $v_1 = $v_0.steps.get_count();
            while ($v_1 > 0) {
                var $v_2 = $v_0.steps.get_item(0);
                $v_0.remove($v_2);
                $v_1 = $v_0.steps.get_count();
            }
        }
        this.steps.remove(stepBase);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (98,3)
    insert: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$insert(peer, direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(peer.get_parent() === this, 'Peer step is not a child of current step.');
        newStep.set_parent(this);
        var $v_0 = this.steps.indexOf(peer);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert($v_0 >= 0, 'Peer index must be non-zero');
        if (!direction) {
            this.steps.insert($v_0, newStep);
            this.get_workflow().stepDictionary.set_item(newStep.id, newStep);
        }
        else {
            this.steps.insert($v_0 + 1, newStep);
            this.get_workflow().stepDictionary.set_item(newStep.id, newStep);
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (124,4)
    get_lastStep: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$get_lastStep() {
        if (this.steps.get_count() > 0) {
            var $v_0 = this.steps.get_item(this.steps.get_count() - 1);
            if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType($v_0)) {
                return ($v_0).get_lastStep();
            }
            else {
                return $v_0;
            }
        }
        else {
            return this;
        }
    },
    
    steps: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (161,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('steps', this.steps.toJson(), true));
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (174,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        for (var $v_0 = 0; $v_0 < this.steps.get_count(); $v_0++) {
            var $v_1 = this.steps.get_item($v_0);
            $v_1.set_parent(this);
            $v_1.get_workflow().stepDictionary.set_item($v_1.id, $v_1);
            $v_1.fixInternalLinks();
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\CompositeStepBase.cs (193,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            for (var $v_1 = 0; $v_1 < $v_0.steps.list.length; $v_1++) {
                var $v_2 = $v_0.steps.list[$v_1];
                var $v_3 = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep($v_2.__class);
                $v_3.initializeFromDynamic($v_2);
                this.steps.add($v_3);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep = function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep(condition, conditionExpression) {
    Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(condition, 'condition');
    this.setNameAndId(condition.get_workflow().$2_2());
    if (conditionExpression) {
        this.conditionExpression = conditionExpression;
    }
    this.__class = 'ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (51,4)
    get_conditionBranchDisplayMode: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$get_conditionBranchDisplayMode() {
        if (!this.get_conditionExpression()) {
            return 2;
        }
        else {
            var $v_0 = this.get_parent();
            if (!$v_0) {
                Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Condition branch needs to be added to a condition step in order to determine its display mode');
            }
            if (this === $v_0.steps.get_item(0)) {
                return 0;
            }
            else {
                return 1;
            }
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (85,4)
    get_conditionExpression: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$get_conditionExpression() {
        return this.conditionExpression;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (90,4)
    set_conditionExpression: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$set_conditionExpression(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert((!!this.conditionExpression), 'We can only change the condition expression if it had been set earlier.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert((!!value), 'Condition expression cannot be set to null');
        this.conditionExpression = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (104,4)
    get_parent: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$get_parent() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (109,4)
    set_parent: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$set_parent(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType(value))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Only ConditionStep can include ConditionBranch as a child.');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (127,3)
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)), 'Cannot add a ConditionBranchStep to a ConditionBranchStep.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)), 'Cannot add StageStep to ConditionBranchStep. It can only be added to a workflow step.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)), 'Cannot add WorkflowStep to ConditionBranchStep.');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (144,3)
    addPeer: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$addPeer(direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep), 'Peer of a ConditionBranchStep can only be a ConditionBranchStep.');
        var $v_0 = newStep;
        if ((direction === 1) && (!this.get_conditionExpression())) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Cannot insert a condition branch with condition expression after a branch that does not.');
        }
        if ((!direction) && (this.get_conditionExpression()) && (!$v_0.get_conditionExpression())) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Cannot insert a condition branch with no condition expression before a branch that does have one.');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.addPeer.call(this, direction, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (169,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$apply(visitor) {
        visitor.visitConditionBranchStep(this);
    },
    
    conditionExpression: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (190,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        if (this.conditionExpression) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('conditionExpression', this.conditionExpression.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (208,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
        if (this.conditionExpression) {
            this.conditionExpression.fixInternalLinks(this.get_workflow());
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionBranchStep.cs (223,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.conditionExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_0.conditionExpression.__class);
            this.conditionExpression.initializeFromDynamic($v_0.conditionExpression);
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.ConditionStep = function Microsoft_Crm_Workflow_ObjectModel_ConditionStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ConditionStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
    this.containsElsebranch = false;
    this.__class = 'ConditionStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.ConditionStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionStep.cs (48,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$remove(stepBase) {
        if (Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(stepBase)) {
            var $v_0 = stepBase;
            if (!$v_0.get_conditionExpression()) {
                this.containsElsebranch = false;
            }
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionStep.cs (67,3)
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep), 'Cannot add any other step other than ConditionBranchStep to ConditionStep.');
        var $v_0 = newStep;
        if (!$v_0.get_conditionExpression()) {
            if (this.containsElsebranch) {
                Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Cannot add more than one condition branch with no condition expression to condition');
            }
            else {
                this.containsElsebranch = true;
            }
            if (!this.steps.get_count()) {
                Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('The first branch added to a condition needs to have a condition expression');
            }
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionStep.cs (102,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$apply(visitor) {
        visitor.visitConditionStep(this);
    },
    
    containsElsebranch: false,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionStep.cs (123,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('containsElsebranch', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.containsElsebranch), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Conditions\ConditionStep.cs (140,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.containsElsebranch = $v_0.containsElsebranch;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess() {
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Data\DynamicAttributesInProcess.cs (40,3)
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$$cctor = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess$$$cctor() {
    Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$8['!Process_Custom_Attribute_URL_'] = 'Dialog.CustomAttribute.URL.DisplayName';
    Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$8['!Process_Custom_Attribute_PostURL_'] = 'ActivityFeeds.CustomAttribute.PostURL.DisplayName';
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Data\DynamicAttributesInProcess.cs (55,3)
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.getAttribute = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess$getAttribute(key) {
    return Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$8[key];
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Data\DynamicAttributesInProcess.cs (65,3)
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.containsKey = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess$containsKey(key) {
    return ((key) in Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$8);
}


Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes = function Microsoft_Crm_Workflow_ObjectModel_UpdateAttributes() {
}


Microsoft.Crm.Workflow.ObjectModel.BaseDictionary = function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary() {
    this.dict = {};
}
Microsoft.Crm.Workflow.ObjectModel.BaseDictionary.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\BaseDictionary.cs (41,4)
    get_count: function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary$get_count() {
        var $v_0 = 0;
        var $$enum_1 = this.dict.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_1 = $$enum_1.get_current();
            $v_0++;
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\BaseDictionary.cs (57,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary$remove(entry) {
        delete this.dict[entry];
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\BaseDictionary.cs (67,3)
    containsKey: function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary$containsKey(id) {
        return ((id) in this.dict);
    }
}


Microsoft.Crm.Workflow.ObjectModel.JsonBuilder = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder() {
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\JsonBuilder.cs (27,3)
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getPropertyJson(propertyName, propertyValue, prependComma) {
    var $v_0 = JSON.stringify(propertyValue);
    return ((prependComma) ? ',' : '') + Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.$P(propertyName) + ':' + $v_0;
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\JsonBuilder.cs (43,3)
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.$P = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$$P($p0) {
    return '\"' + $p0 + '\"';
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\JsonBuilder.cs (55,3)
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getObjectJson(propertyName, propertyValueJson, prependComma) {
    return ((prependComma) ? ',' : '') + Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.$P(propertyName) + ':' + propertyValueJson;
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\JsonBuilder.cs (68,3)
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getJson(value) {
    return (value) ? 'true' : 'false';
}


Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory = function Microsoft_Crm_Workflow_ObjectModel_PublicationParametersFactory() {
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\PublicationParametersFactory.cs (27,3)
Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory.$f = function Microsoft_Crm_Workflow_ObjectModel_PublicationParametersFactory$$f($p0, $p1) {
    switch ($p0) {
        default:
            return new Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters($p0);
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase = function Microsoft_Crm_Workflow_ObjectModel_StepVisitorBase() {
}


Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary = function Microsoft_Crm_Workflow_ObjectModel_VariablesDictionary() {
    Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary.initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\VariablesDictionary.cs (35,4)
    get_item: function Microsoft_Crm_Workflow_ObjectModel_VariablesDictionary$get_item(id) {
        return this.dict[id];
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\VariablesDictionary.cs (40,4)
    set_item: function Microsoft_Crm_Workflow_ObjectModel_VariablesDictionary$set_item(id, value) {
        this.dict[id] = value;
        return value;
    }
}


Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters = function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters(workflowCategory) {
    this.$E_0 = false;
    this.$H_0 = false;
    this.resetTriggers();
    this.resetTriggerConditions();
    this.$J_0 = 4;
    this.$6_0 = workflowCategory;
    this.$B_0 = 0;
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (62,4)
    get_allAttributesSelected: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_allAttributesSelected() {
        return this.$H_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (67,4)
    set_allAttributesSelected: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_allAttributesSelected(value) {
        this.$H_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (78,4)
    get_isTemplate: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isTemplate() {
        return this.$E_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (83,4)
    set_isTemplate: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_isTemplate(value) {
        this.$E_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (94,4)
    get_triggers: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_triggers() {
        return this.$7_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (99,4)
    set_triggers: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_triggers(value) {
        this.$7_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (110,4)
    get_isCrmUIWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isCrmUIWorkflow() {
        return this.$Q_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (115,4)
    set_isCrmUIWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_isCrmUIWorkflow(value) {
        this.$Q_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (126,4)
    get_triggerConditions: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_triggerConditions() {
        return this.$5_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (131,4)
    set_triggerConditions: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_triggerConditions(value) {
        this.$5_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (142,4)
    get_scope: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_scope() {
        return this.$J_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (147,4)
    set_scope: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_scope(value) {
        this.$J_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (158,4)
    get_workflowCategory: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_workflowCategory() {
        return this.$6_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (163,4)
    set_workflowCategory: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_workflowCategory(value) {
        this.$6_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (174,4)
    get_workflowMode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_workflowMode() {
        return this.$B_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (179,4)
    set_workflowMode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_workflowMode(value) {
        this.$B_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (190,4)
    get_workflowRendererObjectTypeCode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_workflowRendererObjectTypeCode() {
        return this.$Y_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (195,4)
    set_workflowRendererObjectTypeCode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_workflowRendererObjectTypeCode(value) {
        this.$Y_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (206,4)
    get_asyncAutoDelete: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_asyncAutoDelete() {
        return this.$M_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (211,4)
    set_asyncAutoDelete: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_asyncAutoDelete(value) {
        this.$M_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (222,4)
    get_syncWorkflowLogOnFailure: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_syncWorkflowLogOnFailure() {
        return this.$b_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (227,4)
    set_syncWorkflowLogOnFailure: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_syncWorkflowLogOnFailure(value) {
        this.$b_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (238,4)
    get_updateAttributeList: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_updateAttributeList() {
        return this.$d_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (243,4)
    set_updateAttributeList: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_updateAttributeList(value) {
        if (!value) {
            value = '';
        }
        this.$d_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (263,4)
    get_updateAttributeListForSdk: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_updateAttributeListForSdk() {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.get_updateAttributeList())) {
            return this.get_updateAttributeList();
        }
        return this.get_updateAttributeList().replace(';', ',');
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (279,4)
    get_isAsyncWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isAsyncWorkflow() {
        if (0 === this.$6_0 && 0 === this.$B_0) {
            return true;
        }
        return false;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (295,4)
    get_isSyncWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isSyncWorkflow() {
        if (0 === this.$6_0 && 1 === this.$B_0) {
            return true;
        }
        return false;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (311,4)
    get_isCustomOperation: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isCustomOperation() {
        if (3 === this.$6_0) {
            return true;
        }
        return false;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (325,3)
    addTrigger: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$addTrigger(trigger) {
        this.$7_0 |= trigger;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (334,3)
    addTriggerCondition: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$addTriggerCondition(condition) {
        this.$5_0 |= condition;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (342,3)
    resetTriggers: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$resetTriggers() {
        this.$7_0 = 0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (350,3)
    resetTriggerConditions: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$resetTriggerConditions() {
        this.$5_0 = 0;
        this.set_updateAttributeList('');
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (361,3)
    containsTrigger: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$containsTrigger(trigger) {
        return (this.$7_0 & trigger) === trigger;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (371,3)
    containsTriggerCondition: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$containsTriggerCondition(condition) {
        return (this.$5_0 & condition) === condition;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (379,3)
    setDefaultParameters: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$setDefaultParameters() {
        this.$E_0 = false;
        this.$7_0 = 2;
        this.$5_0 = 2;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (393,3)
    containsUpdateTriggerCondition: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$containsUpdateTriggerCondition() {
        var $v_0;
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.get_updateAttributeList())) {
            $v_0 = false;
        }
        else if (Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.get_updateAttributeList(), 'statecode') || Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.get_updateAttributeList(), 'ownerid') || Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.get_updateAttributeList(), 'statecode;ownerid') || Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.get_updateAttributeList(), 'ownerid;statecode')) {
            $v_0 = false;
        }
        else {
            $v_0 = true;
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Misc\WorkflowPublicationParameters.cs (521,3)
    removeTriggerCondition: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$removeTriggerCondition(condition) {
        this.$5_0 &= ~condition;
    },
    
    $E_0: false,
    $Q_0: false,
    $7_0: 0,
    $5_0: 0,
    $d_0: null,
    $H_0: false,
    $M_0: false,
    $b_0: false,
    $J_0: 0,
    $6_0: 0,
    $B_0: 0,
    $Y_0: null
}


Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep = function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
}
Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.prototype = {
    $R_1: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\CustomJavascriptStep.cs (56,4)
    get_javascript: function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$get_javascript() {
        return this.$R_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\CustomJavascriptStep.cs (57,4)
    set_javascript: function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$set_javascript(value) {
        this.$R_1 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\CustomJavascriptStep.cs (64,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$apply(visitor) {
        visitor.visitCustomJavascriptStep(this);
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep = function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep(workflowStep, propSpec) {
    Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.initializeBase(this);
    this.__class = 'SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel';
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
    this.set_propertySpec(propSpec);
}
Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (47,4)
    get_propertySpec: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$get_propertySpec() {
        return this.specification;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (48,4)
    set_propertySpec: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$set_propertySpec(value) {
        this.specification = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (56,4)
    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$get_entity() {
        return this.entity;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (57,4)
    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$set_entity(value) {
        this.entity = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (64,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$apply(visitor) {
        visitor.visitSetAttributeValueStep(this);
    },
    
    specification: null,
    entity: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (91,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('specification', this.specification.toJson(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (107,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        this.specification.$h_0(this.get_workflow());
        this.entity.fixInternalLinks(this.get_workflow());
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetAttributeValueStep.cs (120,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
            this.get_entity().initializeFromDynamic($v_0.entity);
            this.specification = new Microsoft.Crm.Workflow.Expressions.PropertySpecification('', null);
            this.specification.initializeFromDynamic($v_0.specification);
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep = function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
    this.__class = 'SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (45,4)
    get_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$get_controlType() {
        return this.controlType;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (46,4)
    set_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$set_controlType(value) {
        this.controlType = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (54,4)
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$get_controlId() {
        return this.controlId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (55,4)
    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (63,4)
    get_isReadOnly: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$get_isReadOnly() {
        return this.isReadOnly;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (64,4)
    set_isReadOnly: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$set_isReadOnly(value) {
        this.isReadOnly = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (71,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$apply(visitor) {
        visitor.visitSetDisplayModeStep(this);
    },
    
    controlId: null,
    controlType: null,
    isReadOnly: false,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (104,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlType', this.controlType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('isReadOnly', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isReadOnly), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetDisplayModeStep.cs (123,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.controlId = $v_0.controlId;
            this.controlType = $v_0.controlType;
            this.isReadOnly = $v_0.isReadOnly;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep = function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
    this.__class = 'SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (45,4)
    get_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$get_controlType() {
        return this.controlType;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (46,4)
    set_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$set_controlType(value) {
        this.controlType = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (54,4)
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$get_controlId() {
        return this.controlId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (55,4)
    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (63,4)
    get_isVisible: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$get_isVisible() {
        return this.isVisible;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (64,4)
    set_isVisible: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$set_isVisible(value) {
        this.isVisible = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (71,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$apply(visitor) {
        visitor.visitSetVisibilityStep(this);
    },
    
    controlId: null,
    controlType: null,
    isVisible: false,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (104,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlType', this.controlType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('isVisible', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isVisible), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\PBL\SetVisibilityStep.cs (123,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.controlId = $v_0.controlId;
            this.controlType = $v_0.controlType;
            this.isVisible = $v_0.isVisible;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetMessageStep = function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetMessageStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
    this.__class = 'SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetMessageStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetMessageStep.cs (51,4)
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$get_controlId() {
        return this.controlId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetMessageStep.cs (52,4)
    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetMessageStep.cs (59,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$apply(visitor) {
        visitor.visitSetMessageStep(this);
    },
    
    controlId: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetMessageStep.cs (80,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetMessageStep.cs (97,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.controlId = $v_0.controlId;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep = function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep(workflowStep) {
    this.requiredLevel = 0;
    Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
    this.__class = 'SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (45,4)
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_controlId() {
        return this.controlId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (46,4)
    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (54,4)
    get_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_controlType() {
        return this.controlType;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (55,4)
    set_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_controlType(value) {
        this.controlType = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (63,4)
    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_entity() {
        return this.entity;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (64,4)
    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_entity(value) {
        this.entity = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (72,4)
    get_requiredLevel: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_requiredLevel() {
        return this.requiredLevel;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (73,4)
    set_requiredLevel: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_requiredLevel(value) {
        this.requiredLevel = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (80,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$apply(visitor) {
        visitor.visitSetFieldRequiredLevelStep(this);
    },
    
    controlId: null,
    controlType: null,
    entity: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (119,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlType', this.controlType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('requiredLevel', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.requiredLevel), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\Pbl\SetFieldRequiredLevelStep.cs (139,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.requiredLevel = $v_0.requiredLevel;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
            this.entity.initializeFromDynamic($v_0.entity);
            this.controlId = $v_0.controlId;
            this.controlType = $v_0.controlType;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StageStep = function Microsoft_Crm_Workflow_ObjectModel_StageStep(workflowStep, stageName) {
    Microsoft.Crm.Workflow.ObjectModel.StageStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(stageName, 'stageName');
    this.__class = 'StageStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$2_2());
    this.set_stageName(stageName);
}
Microsoft.Crm.Workflow.ObjectModel.StageStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (54,4)
    get_stageName: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_stageName() {
        return this.description;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (59,4)
    set_stageName: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_stageName(value) {
        this.description = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (70,4)
    get_stageId: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_stageId() {
        return this.stageId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (75,4)
    set_stageId: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_stageId(value) {
        this.stageId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (88,4)
    get_stageCategory: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_stageCategory() {
        return this.stageCategory;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (93,4)
    set_stageCategory: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_stageCategory(value) {
        this.stageCategory = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (105,4)
    get_clientProperties: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_clientProperties() {
        return this.clientProperties;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (110,4)
    set_clientProperties: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_clientProperties(value) {
        this.clientProperties = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (126,3)
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_StageStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)), 'Cannot add ConditionBranchStep directly to StageStep. It should be first added to ConditionStep.');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (137,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_StageStep$apply(visitor) {
        visitor.visitStageStep(this);
    },
    
    stageId: null,
    stageCategory: null,
    clientProperties: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (173,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_StageStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stageId', this.stageId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stageCategory', this.stageCategory, true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StageStep.cs (191,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StageStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.stageId = $v_0.stageId;
            this.stageCategory = $v_0.stageCategory;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepBase = function Microsoft_Crm_Workflow_ObjectModel_StepBase() {
    this.stepLabels = new Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection();
}
Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (69,4)
    get_id: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_id() {
        return this.id;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (74,4)
    set_id: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_id(value) {
        this.id = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (85,4)
    get_name: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_name() {
        return this.name;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (90,4)
    set_name: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_name(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Name');
        this.name = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (102,4)
    get_description: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_description() {
        return this.description;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (107,4)
    set_description: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_description(value) {
        this.description = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (118,4)
    get_parent: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_parent() {
        return this.$W_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (123,4)
    set_parent: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_parent(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        this.$W_0 = value;
        this.set_workflow(this.get_parent().get_workflow());
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (137,4)
    get_workflow: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_workflow() {
        return this.$1_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (142,4)
    set_workflow: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_workflow(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Workflow');
        if ((this.$1_0) && (this.$1_0 !== value)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwInvalidOperationException('Cannot change the workflow after it was set');
        }
        this.$1_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (160,4)
    get_extensionObj: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_extensionObj() {
        return this.$O_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (165,4)
    set_extensionObj: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_extensionObj(value) {
        this.$O_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (176,4)
    get_stepLabels: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_stepLabels() {
        return this.stepLabels;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (186,3)
    addLabel: function Microsoft_Crm_Workflow_ObjectModel_StepBase$addLabel(stepLabel) {
        this.stepLabels.add(stepLabel);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (196,3)
    addPeer: function Microsoft_Crm_Workflow_ObjectModel_StepBase$addPeer(direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(newStep, 'newStep');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!this.get_parent(), 'Parent step is null');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(this.get_parent()), 'Parent step is not a Composite Step');
        var $v_0 = this.get_parent();
        $v_0.insert(this, direction, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (210,3)
    $g_0: function Microsoft_Crm_Workflow_ObjectModel_StepBase$$g_0() {
        if (this.$1_0) {
            this.$1_0 = null;
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (222,3)
    setNameAndId: function Microsoft_Crm_Workflow_ObjectModel_StepBase$setNameAndId(stepId) {
        this.id = Object.getType(this).getName() + stepId;
        this.name = 'Step_' + stepId;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (232,3)
    setJQueryFriendlyNameAndId: function Microsoft_Crm_Workflow_ObjectModel_StepBase$setJQueryFriendlyNameAndId(stepId) {
        var $v_0 = Object.getType(this).getName();
        var $v_1 = $v_0.lastIndexOf('.');
        $v_0 = $v_0.substring($v_1 + 1, $v_0.length);
        this.id = $v_0 + stepId;
        this.name = 'Step_' + stepId;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (246,3)
    $N_0: function Microsoft_Crm_Workflow_ObjectModel_StepBase$$N_0($p0) {
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (265,3)
    collectDataSourcesRecursive: function Microsoft_Crm_Workflow_ObjectModel_StepBase$collectDataSourcesRecursive(step, referenceStep, includeReferenceStep, dataSources) {
        if (step.id !== referenceStep.id || includeReferenceStep) {
            if ((!step.$4_0) || step.$D_0) {
                step.$4_0 = new Microsoft.Crm.Workflow.DataSourceCollection();
                step.$N_0(step.$4_0);
                step.$D_0 = false;
            }
        }
        var $v_0 = false;
        if (step.id !== referenceStep.id && !$v_0) {
            dataSources.append(step.$4_0);
            if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(step)) {
                var $v_1 = step;
                for (var $v_2 = 0; $v_2 < $v_1.steps.get_count(); $v_2++) {
                    var $v_3 = $v_1.steps.get_item($v_2);
                    if (!this.collectDataSourcesRecursive($v_3, referenceStep, includeReferenceStep, dataSources)) {
                        return false;
                    }
                }
            }
            return true;
        }
        else {
            if (includeReferenceStep) {
                dataSources.append(step.$4_0);
            }
            return false;
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (324,4)
    get_dataSources: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_dataSources() {
        if (!this.$4_0) {
            this.$4_0 = new Microsoft.Crm.Workflow.DataSourceCollection();
            this.$N_0(this.$4_0);
        }
        return this.$4_0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (340,4)
    get_isDataSourceDirty: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_isDataSourceDirty() {
        return this.$D_0;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (345,4)
    set_isDataSourceDirty: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_isDataSourceDirty(value) {
        this.$D_0 = value;
        return value;
    },
    
    description: null,
    id: null,
    name: null,
    stepLabels: null,
    $4_0: null,
    $D_0: false,
    $W_0: null,
    $1_0: null,
    $O_0: null,
    __class: 'StepBase:#Microsoft.Crm.Workflow.ObjectModel',
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (439,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepBase$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('id', this.id.toString(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('description', this.description, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.name, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('stepLabels', this.stepLabels.toJson(), true));
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (455,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_StepBase$fixInternalLinks() {
        this.set_workflow(this.get_parent().get_workflow());
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepBase.cs (465,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StepBase$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.id = $v_0.id;
            this.description = $v_0.description;
            this.name = $v_0.name;
            for (var $v_1 = 0; $v_1 < $v_0.stepLabels.list.length; $v_1++) {
                var $v_2 = $v_0.stepLabels.list[$v_1];
                var $v_3 = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
                $v_3.initializeFromDynamic($v_2);
                this.stepLabels.add($v_3);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase = function Microsoft_Crm_Workflow_ObjectModel_SetValueStepBase() {
    Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase.initializeBase(this);
}


Microsoft.Crm.Workflow.ObjectModel.StepCollection = function Microsoft_Crm_Workflow_ObjectModel_StepCollection() {
    this.$9_0 = new Sys.EventHandlerList();
    this.list = [];
}
Microsoft.Crm.Workflow.ObjectModel.StepCollection.prototype = {
    stepCollectionChangedEventHandler: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (144,4)
    add_stepCollectionChanged: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$add_stepCollectionChanged(value) {
        this.$9_0.addHandler('StepCollectionChanged', value);
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (145,4)
    remove_stepCollectionChanged: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$remove_stepCollectionChanged(value) {
        this.$9_0.removeHandler('StepCollectionChanged', value);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (161,3)
    $F_0: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$$F_0($p0) {
        if (!this.$9_0) {
            return;
        }
        var $v_0 = this.$9_0.getHandler('StepCollectionChanged');
        if ($v_0) {
            $v_0(this, $p0);
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (181,3)
    $C_0: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$$C_0($p0, $p1) {
        var $v_0 = new (Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs.$$(Microsoft.Crm.Workflow.ObjectModel.StepBase))();
        $v_0.set_action($p0);
        $v_0.set_step($p1);
        $v_0.set_newItems($p1);
        return $v_0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (194,3)
    add: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$add(newStep) {
        Array.add(this.list, newStep);
        this.$F_0(this.$C_0(0, newStep));
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (204,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$remove(step) {
        var $v_0 = Array.indexOf(this.list, step);
        this.$X_0(step);
        var $v_1 = this.$C_0(1, step);
        $v_1.set_oldStartingIndex($v_0);
        this.$F_0($v_1);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (217,3)
    $X_0: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$$X_0($p0) {
        Array.remove(this.list, $p0);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (227,4)
    get_count: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$get_count() {
        return this.list.length;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (240,4)
    get_item: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$get_item(index) {
        return this.list[index];
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (251,3)
    indexOf: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$indexOf(peer) {
        return Array.indexOf(this.list, peer);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (261,3)
    insert: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$insert(peerIndex, newStep) {
        Array.insert(this.list, peerIndex, newStep);
        var $v_0 = this.$C_0(0, newStep);
        $v_0.set_newStartingIndex(peerIndex);
        this.$F_0($v_0);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (275,3)
    move: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$move(newIndex, stepBase) {
        var $v_0 = Array.indexOf(this.list, stepBase);
        this.$X_0(stepBase);
        Array.insert(this.list, newIndex, stepBase);
        var $v_1 = this.$C_0(2, stepBase);
        $v_1.set_newStartingIndex(newIndex);
        $v_1.set_oldStartingIndex($v_0);
        this.$F_0($v_1);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (291,3)
    contains: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$contains(stepBase) {
        return Array.contains(this.list, stepBase);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (300,3)
    getArrayList: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$getArrayList() {
        return this.list;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollection.cs (310,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{\"list\":[');
        if (this.get_count() > 0) {
            $v_0.append(this.get_item(0).toJson());
            for (var $v_1 = 1; $v_1 < this.get_count(); $v_1++) {
                $v_0.append(',');
                $v_0.append(this.get_item($v_1).toJson());
            }
        }
        $v_0.append(']}');
        return $v_0.toString();
    }
}




Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs = function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs() {
    Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs.$$(this.$$gta['Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs']['TViewModel']).initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs.$$ = function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$$$(TViewModel) {
    var $$cn = 'StepCollectionChangedEventArgs' + '$1' + '$' + TViewModel.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Workflow.ObjectModel[$$cn]) {
        var $$ccr = Microsoft.Crm.Workflow.ObjectModel[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs'] = {'TViewModel': TViewModel};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Workflow.ObjectModel.' + $$cn, Sys.EventArgs);
        var $$dict_5 = Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Workflow.ObjectModel[$$cn];
}
Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs.prototype = {
    $L_1: 0,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (29,4)
    get_action: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$get_action() {
        return this.$L_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (30,4)
    set_action: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$set_action(value) {
        this.$L_1 = value;
        return value;
    },
    
    $a_1: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (43,4)
    get_step: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$get_step() {
        return this.$a_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (44,4)
    set_step: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$set_step(value) {
        this.$a_1 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (52,4)
    get_oldItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$get_oldItems() {
        return this.$U_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (53,4)
    set_oldItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$set_oldItems(value) {
        this.$U_1 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (61,4)
    get_newItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$get_newItems() {
        return this.$S_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (62,4)
    set_newItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$set_newItems(value) {
        this.$S_1 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (70,4)
    get_oldStartingIndex: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$get_oldStartingIndex() {
        return this.$V_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (71,4)
    set_oldStartingIndex: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$set_oldStartingIndex(value) {
        this.$V_1 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (79,4)
    get_newStartingIndex: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$get_newStartingIndex() {
        return this.$T_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepCollectionChangedEventArgs.cs (80,4)
    set_newStartingIndex: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$set_newStartingIndex(value) {
        this.$T_1 = value;
        return value;
    },
    
    $U_1: null,
    $S_1: null,
    $V_1: 0,
    $T_1: 0
}


Microsoft.Crm.Workflow.ObjectModel.StepDictionary = function Microsoft_Crm_Workflow_ObjectModel_StepDictionary() {
    Microsoft.Crm.Workflow.ObjectModel.StepDictionary.initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.StepDictionary.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepDictionary.cs (35,4)
    get_item: function Microsoft_Crm_Workflow_ObjectModel_StepDictionary$get_item(id) {
        return this.dict[id];
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepDictionary.cs (40,4)
    set_item: function Microsoft_Crm_Workflow_ObjectModel_StepDictionary$set_item(id, value) {
        this.dict[id] = value;
        return value;
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepLabel = function Microsoft_Crm_Workflow_ObjectModel_StepLabel() {
}
Microsoft.Crm.Workflow.ObjectModel.StepLabel.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (47,4)
    get_labelId: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$get_labelId() {
        return this.labelId;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (52,4)
    set_labelId: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$set_labelId(value) {
        this.labelId = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (63,4)
    get_languageCode: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$get_languageCode() {
        return this.languageCode;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (68,4)
    set_languageCode: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$set_languageCode(value) {
        this.languageCode = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (79,4)
    get_description: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$get_description() {
        return this.description;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (84,4)
    set_description: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$set_description(value) {
        this.description = value;
        return value;
    },
    
    labelId: null,
    languageCode: 0,
    description: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (119,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('labelId', this.labelId, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('languageCode', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.languageCode), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('description', this.description, true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabel.cs (137,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.labelId = $v_0.labelId;
            this.description = $v_0.description;
            this.languageCode = $v_0.languageCode;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection = function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection() {
    this.list = [];
}
Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (135,3)
    add: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$add(newStepLabel) {
        Array.add(this.list, newStepLabel);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (144,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$remove(stepLabel) {
        Array.remove(this.list, stepLabel);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (154,4)
    get_count: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$get_count() {
        return this.list.length;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (167,4)
    get_item: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$get_item(index) {
        return this.list[index];
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (178,3)
    indexOf: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$indexOf(peer) {
        return Array.indexOf(this.list, peer);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (188,3)
    insert: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$insert(peerIndex, newStepLabel) {
        Array.insert(this.list, peerIndex, newStepLabel);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (198,3)
    contains: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$contains(stepLabel) {
        return Array.contains(this.list, stepLabel);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StepLabelCollection.cs (214,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{\"list\":[');
        if (this.get_count() > 0) {
            $v_0.append(this.get_item(0).toJson());
            for (var $v_1 = 1; $v_1 < this.get_count(); $v_1++) {
                $v_0.append(',');
                $v_0.append(this.get_item($v_1).toJson());
            }
        }
        $v_0.append(']}');
        return $v_0.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep = function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$2_2());
    this.$K_1 = 0;
    this.$I_1 = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, '', 14);
}
Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StopWorkflowStep.cs (46,4)
    get_status: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$get_status() {
        return this.$K_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StopWorkflowStep.cs (51,4)
    set_status: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$set_status(value) {
        this.$K_1 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StopWorkflowStep.cs (62,4)
    get_statusMessage: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$get_statusMessage() {
        return this.$I_1;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StopWorkflowStep.cs (67,4)
    set_statusMessage: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$set_statusMessage(value) {
        this.$I_1 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\StopWorkflowStep.cs (77,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$apply(visitor) {
        visitor.visitStopWorkflowStep(this);
    },
    
    $K_1: 0,
    $I_1: null
}


Microsoft.Crm.Workflow.ObjectModel.WorkflowStep = function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep(primaryEntityName, category) {
    this.stepDictionary = new Microsoft.Crm.Workflow.ObjectModel.StepDictionary();
    Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.initializeBase(this);
    this.$j_2(primaryEntityName, category, 0);
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (1404,3)
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.initializeFrom = function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$initializeFrom(deserialized) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep(deserialized.primaryEntityName, deserialized.category);
    $v_0.initializeFromDynamic(deserialized);
    return $v_0;
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.prototype = {
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (424,3)
    $j_2: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$$j_2($p0, $p1, $p2) {
        this.__class = 'WorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.primaryEntityName = $p0;
        this.nextStepIndex = 0;
        this.category = $p1;
        this.mode = $p2;
        this.title = '';
        this.description = '';
        this.setNameAndId(this.$2_2());
        this.set_workflow(this);
        this.publicationParameters = Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory.$f($p1, $p2);
        if (!$p1 && !$p2) {
            this.publicationParameters.setDefaultParameters();
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (454,4)
    get_title: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_title() {
        return this.title;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (459,4)
    set_title: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_title(value) {
        this.title = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (470,4)
    get_uniqueName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_uniqueName() {
        return this.$c_2;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (475,4)
    set_uniqueName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_uniqueName(value) {
        this.$c_2 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (486,4)
    get_solutionPrefix: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_solutionPrefix() {
        return this.$Z_2;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (487,4)
    set_solutionPrefix: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_solutionPrefix(value) {
        this.$Z_2 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (497,3)
    getStepWithId: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$getStepWithId(id) {
        if ((!this.stepDictionary.get_count()) || Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(id) || id === this.id) {
            return this;
        }
        if (!this.stepDictionary.containsKey(id)) {
            var $v_0 = 'Workflow does not contain a step with ID: ' + id;
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException($v_0);
        }
        return this.stepDictionary.get_item(id);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (518,3)
    deleteStep: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$deleteStep(step) {
        if (step === this) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Cannot remove workflow step');
        }
        if ((step.get_workflow() !== this) || !(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(step.get_parent()))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('This step cannot be deleted. It is not part of this workflow');
        }
        var $v_0 = step.get_parent();
        if (!$v_0.steps.contains(step)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('This step cannot be deleted. It is not part of this workflow');
        }
        $v_0.remove(step);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (550,3)
    remove: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$remove(stepBase) {
        if (!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stepBase))) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        }
        else {
            var $v_0 = stepBase;
            this.$l_2($v_0);
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (567,3)
    $l_2: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$$l_2($p0) {
        var $v_0 = null;
        for (var $v_2 = 0; $v_2 < this.steps.get_count(); $v_2++) {
            var $v_3 = this.steps.get_item($v_2);
            if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_3)) {
                var $v_4 = $v_3;
                if ($v_4 === $p0) {
                    break;
                }
                else {
                    $v_0 = $v_4;
                }
            }
        }
        var $v_1 = $p0.steps.get_count();
        while ($v_1 > 0) {
            var $v_5 = $p0.steps.get_item(0);
            $p0.steps.remove($v_5);
            this.get_workflow().stepDictionary.remove($v_5.id);
            if ($v_0) {
                $v_0.appendStep($v_5);
            }
            else {
                this.insert($p0, 0, $v_5);
            }
            $v_1 = $p0.steps.get_count();
        }
        this.steps.remove($p0);
        this.get_workflow().stepDictionary.remove($p0.id);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (619,4)
    get_primaryEntityName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_primaryEntityName() {
        return this.primaryEntityName;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (628,3)
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)), 'Cannot add a ConditionBranchStep to a WorkflowStep. It can only be added to a Condition Step.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)), 'Cannot add WorkflowStep to WorkflowStep.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)), 'Cannot add StageStep to WorkflowStep using this function. Please use InsertStageStep function');
        for (var $v_0 = 0; $v_0 < this.steps.get_count(); $v_0++) {
            var $v_1 = this.steps.get_item($v_0);
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_1)), 'Cannot add a step to workflow with workflowStep as a parent step since there exist at least one Stage step.');
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (655,3)
    insertStageStepWithChildPeer: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$insertStageStepWithChildPeer(stageStep, childPeerStep, direction) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stageStep), 'Only StageStep can be added to WorkflowStep using this function');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!childPeerStep, 'The peer child step cannot be null.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(childPeerStep.get_parent()), 'The peer child step need to be a child of a stage step.');
        var $v_0 = childPeerStep.get_parent();
        $v_0.addPeer(1, stageStep);
        var $v_1 = 0;
        if (direction === 1) {
            $v_1 = $v_0.steps.indexOf(childPeerStep) + 1;
        }
        else {
            $v_1 = $v_0.steps.indexOf(childPeerStep);
        }
        while ($v_0.steps.get_count() > $v_1) {
            var $v_2 = $v_0.steps.get_item($v_1);
            if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_2)) {
                break;
            }
            $v_0.steps.remove($v_2);
            this.get_workflow().stepDictionary.remove($v_2.id);
            stageStep.appendStep($v_2);
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (701,3)
    insertStageStep: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$insertStageStep(stageStep, peerStep, direction) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stageStep), 'Only StageStep can be added to WorkflowStep using this function');
        if (!peerStep) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, stageStep);
        }
        else {
            peerStep.addPeer(direction, stageStep);
            var $v_0 = this.steps.indexOf(stageStep) + 1;
            while (this.steps.get_count() > $v_0) {
                var $v_1 = this.steps.get_item($v_0);
                if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_1)) {
                    break;
                }
                this.steps.remove($v_1);
                this.get_workflow().stepDictionary.remove($v_1.id);
                stageStep.appendStep($v_1);
            }
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (737,3)
    apply: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$apply(visitor) {
        visitor.visitWorkflowStep(this);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (747,4)
    get_metadataProvider: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_metadataProvider() {
        return this.$A_2;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (748,4)
    set_metadataProvider: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_metadataProvider(value) {
        this.$A_2 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (756,4)
    get_nextStepIndex: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_nextStepIndex() {
        return this.nextStepIndex;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (757,4)
    set_nextStepIndex: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_nextStepIndex(value) {
        this.nextStepIndex = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (765,4)
    get_isCrmUIWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_isCrmUIWorkflow() {
        return this.isCrmUIWorkflow;
    },
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (766,4)
    set_isCrmUIWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_isCrmUIWorkflow(value) {
        this.isCrmUIWorkflow = value;
        return value;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (774,4)
    get_workflowCategory: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowCategory() {
        return this.category;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (783,4)
    get_workflowMode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowMode() {
        return this.mode;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (794,4)
    get_publicationParameters: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_publicationParameters() {
        return this.publicationParameters;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (802,3)
    getDataSourceForStep: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$getDataSourceForStep(referenceStep) {
        var $v_0 = new Microsoft.Crm.Workflow.DataSourceCollection();
        var $v_1 = false;
        if (referenceStep === this) {
            $v_1 = true;
        }
        this.collectDataSourcesRecursive(this, referenceStep, $v_1, $v_0);
        $v_0.isReadOnly = true;
        return $v_0;
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (824,3)
    getMetadataAttributeType: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$getMetadataAttributeType(type) {
        switch (type) {
            case 0:
                return 'boolean';
            case 9:
                return 'partylist';
            case 1:
                return 'customer';
            case 2:
                return 'datetime';
            case 3:
                return 'decimal';
            case 4:
                return 'float';
            case 5:
                return 'int';
            case 6:
                return 'lookup';
            case 7:
                return 'money';
            case 8:
                return 'owner';
            case 16:
            case 10:
                return 'picklist';
            case 11:
                return 'key';
            case 13:
                return 'status';
            case 15:
                return 'uniqueueidentifier';
            case 14:
                return 'nvarchar';
            default:
                Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwNotSupportedException('Not a supported type: ' + Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(type));
                return '';
        }
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (914,3)
    $2_2: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$$2_2() {
        return Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant('{0}', this.nextStepIndex++);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (924,4)
    get_currentStepId: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_currentStepId() {
        return Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant('{0}', this.nextStepIndex);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (935,4)
    get_stepDictionary: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_stepDictionary() {
        return this.stepDictionary;
    },
    
    primaryEntityName: null,
    nextStepIndex: 0,
    publicationParameters: null,
    isCrmUIWorkflow: true,
    category: 0,
    mode: 0,
    title: null,
    $c_2: null,
    $Z_2: null,
    $A_2: null,
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (1416,3)
    toJson: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$toJson() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('primaryEntityName', this.primaryEntityName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('nextStepIndex', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.nextStepIndex), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('isCrmUIWorkflow', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isCrmUIWorkflow), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('category', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.category), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('mode', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.mode), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('title', this.title, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('description', this.description, true));
        $v_0.append('}');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (1437,3)
    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$fixInternalLinks() {
        this.set_workflow(this);
        this.set_parent(this);
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
    },
    
    // file://c:\bt\160165\src\Shared\Server\Workflow\Steps\WorkflowStep.cs (1449,3)
    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.primaryEntityName = $v_0.primaryEntityName;
            this.nextStepIndex = $v_0.nextStepIndex;
            this.isCrmUIWorkflow = $v_0.isCrmUIWorkflow;
            this.category = $v_0.category;
            this.mode = $v_0.mode;
            this.title = $v_0.title;
            this.fixInternalLinks();
        }
    }
}


Type.registerNamespace('Microsoft.Crm.Workflow.Utils');

Microsoft.Crm.Workflow.Utils.StringUtility = function Microsoft_Crm_Workflow_Utils_StringUtility() {
}
// file://c:\bt\160165\src\Shared\Server\Workflow\StringUtility.cs (41,3)
Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant = function Microsoft_Crm_Workflow_Utils_StringUtility$formatInvariant(message) {
    var parameters = [];
    for (var $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2) {
        parameters[$$pai_2 - 1] = arguments[$$pai_2];
    }
    return String.format.apply(null, [ message ].concat(parameters));
}
// file://c:\bt\160165\src\Shared\Server\Workflow\StringUtility.cs (51,3)
Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant = function Microsoft_Crm_Workflow_Utils_StringUtility$toStringInvariant(value) {
    return value.toString();
}
// file://c:\bt\160165\src\Shared\Server\Workflow\StringUtility.cs (62,3)
Microsoft.Crm.Workflow.Utils.StringUtility.areEqual = function Microsoft_Crm_Workflow_Utils_StringUtility$areEqual(left, right) {
    return left === right;
}
// file://c:\bt\160165\src\Shared\Server\Workflow\StringUtility.cs (78,3)
Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty = function Microsoft_Crm_Workflow_Utils_StringUtility$isNullOrEmpty(value) {
    return null === value || value === undefined || value === '';
}


Microsoft.Crm.Workflow.Utils.ExceptionUtility = function Microsoft_Crm_Workflow_Utils_ExceptionUtility() {
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Utils.cs (22,3)
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwIfNull(expression, message) {
    if (!expression) {
        throw Error.create(message);
    }
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Utils.cs (34,3)
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwNotSupportedException = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwNotSupportedException(message) {
    throw Error.create('NotSupportedException: ' + message);
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Utils.cs (43,3)
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwInvalidOperationException = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwInvalidOperationException(message) {
    throw Error.create('InvalidOperationException: ' + message);
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Utils.cs (53,3)
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwArgumentException(message, parameterName) {
    throw Error.create('ArgumentException for ' + parameterName + ': ' + message);
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Utils.cs (62,3)
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwException(message) {
    throw Error.create(message);
}
// file://c:\bt\160165\src\Shared\Server\Workflow\Utils.cs (72,3)
Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$assert(condition, message) {
    if (!condition) {
        throw Error.create(message);
    }
}


Type.registerNamespace('Microsoft.Crm.Sdk');

Microsoft.Crm.Sdk.WorkflowScope = function Microsoft_Crm_Sdk_WorkflowScope() {
}


Microsoft.Crm.Workflow.CrmTimeSpan.registerClass('Microsoft.Crm.Workflow.CrmTimeSpan');
Microsoft.Crm.Workflow.DataSourceCollection.registerClass('Microsoft.Crm.Workflow.DataSourceCollection');
Microsoft.Crm.Workflow.Expressions.ExpressionBase.registerClass('Microsoft.Crm.Workflow.Expressions.ExpressionBase');
Microsoft.Crm.Workflow.Expressions.BinaryExpression.registerClass('Microsoft.Crm.Workflow.Expressions.BinaryExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.registerClass('Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.registerClass('Microsoft.Crm.Workflow.Expressions.TimeSpanExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.EntityBase.registerClass('Microsoft.Crm.Workflow.Expressions.EntityBase');
Microsoft.Crm.Workflow.Expressions.MethodCallExpression.registerClass('Microsoft.Crm.Workflow.Expressions.MethodCallExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.InvalidEntity.registerClass('Microsoft.Crm.Workflow.Expressions.InvalidEntity', Microsoft.Crm.Workflow.Expressions.EntityBase);
Microsoft.Crm.Workflow.Expressions.PrimaryEntity.registerClass('Microsoft.Crm.Workflow.Expressions.PrimaryEntity', Microsoft.Crm.Workflow.Expressions.EntityBase);
Microsoft.Crm.Workflow.Expressions.ExpressionCollection.registerClass('Microsoft.Crm.Workflow.Expressions.ExpressionCollection');
Microsoft.Crm.Workflow.Expressions.LookupExpression.registerClass('Microsoft.Crm.Workflow.Expressions.LookupExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.PropertySpecification.registerClass('Microsoft.Crm.Workflow.Expressions.PropertySpecification');
Microsoft.Crm.Workflow.Expressions.NullExpression.registerClass('Microsoft.Crm.Workflow.Expressions.NullExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.registerClass('Microsoft.Crm.Workflow.Expressions.OperatorClassifier');
Microsoft.Crm.Workflow.Expressions.PrimitiveExpression.registerClass('Microsoft.Crm.Workflow.Expressions.PrimitiveExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.UnaryExpression.registerClass('Microsoft.Crm.Workflow.Expressions.UnaryExpression', Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.registerClass('Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory');
Microsoft.Crm.Workflow.ObjectModel.StepBase.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepBase');
Microsoft.Crm.Workflow.ObjectModel.ControlStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.ControlStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.registerClass('Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.EntityStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.EntityStep', Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.StepStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepStep', Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep', Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.ConditionStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.ConditionStep', Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.registerClass('Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess');
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes.registerClass('Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes');
Microsoft.Crm.Workflow.ObjectModel.BaseDictionary.registerClass('Microsoft.Crm.Workflow.ObjectModel.BaseDictionary');
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.registerClass('Microsoft.Crm.Workflow.ObjectModel.JsonBuilder');
Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory.registerClass('Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory');
Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase');
Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary.registerClass('Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary', Microsoft.Crm.Workflow.ObjectModel.BaseDictionary);
Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters.registerClass('Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters');
Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase.registerClass('Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep', Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase);
Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetMessageStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.SetMessageStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.StageStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.StageStep', Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.StepCollection.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepCollection');
Microsoft.Crm.Workflow.ObjectModel.StepDictionary.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepDictionary', Microsoft.Crm.Workflow.ObjectModel.BaseDictionary);
Microsoft.Crm.Workflow.ObjectModel.StepLabel.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepLabel');
Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection');
Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.WorkflowStep', Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.Utils.StringUtility.registerClass('Microsoft.Crm.Workflow.Utils.StringUtility');
Microsoft.Crm.Workflow.Utils.ExceptionUtility.registerClass('Microsoft.Crm.Workflow.Utils.ExceptionUtility');
Microsoft.Crm.Sdk.WorkflowScope.registerClass('Microsoft.Crm.Sdk.WorkflowScope');
Microsoft.Crm.Workflow.CrmTimeSpan.zero = new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, 0, 0, 0);
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$0 = null;
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$$cctor();
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.customAttributeUrl = '!Process_Custom_Attribute_URL_';
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.customAttributePostUrl = '!Process_Custom_Attribute_PostURL_';
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$8 = {};
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$$cctor();
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes.owner = 'ownerid';
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes.status = 'statecode';
Microsoft.Crm.Workflow.Utils.StringUtility.empty = '';
Microsoft.Crm.Sdk.WorkflowScope.businessUnit = 2;
Microsoft.Crm.Sdk.WorkflowScope.deep = 3;
Microsoft.Crm.Sdk.WorkflowScope.global = 4;
Microsoft.Crm.Sdk.WorkflowScope.user = 1;
