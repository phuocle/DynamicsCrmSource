Type.registerNamespace('Microsoft.Crm.Workflow');

Microsoft.Crm.Workflow.FormulaDisplayVisitor = function(useForReadMode,
    calculatedFieldLabelDescription,
    getAttributeLocalizedNameFunc) {
    this.$2_2 = new Sys.StringBuilder();
    Microsoft.Crm.Workflow.FormulaDisplayVisitor.initializeBase(this);
    this.$d_2 = useForReadMode;
    this.$1F_2 = calculatedFieldLabelDescription;
    this.$a_2 = getAttributeLocalizedNameFunc;
    this.$b_2 = this.$d_2 && !IsNull(this.$a_2);
}
Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString = function(expression) {
    var $v_0 = new Microsoft.Crm.Workflow.FormulaDisplayVisitor(false, '', null);
    expression.accept($v_0);
    return $v_0.get_outputString();
}
Microsoft.Crm.Workflow.FormulaDisplayVisitor.prototype = {
    $d_2: false,
    $b_2: false,
    $p_2: 0,
    $1F_2: null,
    $a_2: null,

    get_outputString: function() {
        return this.$2_2.toString();
    },

    visitConditionBranchStep: function(conditionBranchStep) {
        if (conditionBranchStep.get_conditionBranchDisplayMode() !== 2) {
            if (!conditionBranchStep.get_conditionBranchDisplayMode()) {
                this.$t_2('If');
            } else {
                this.$t_2('Else If');
            }
            if (conditionBranchStep.conditionExpression) {
                conditionBranchStep.conditionExpression.accept(this);
            }
        } else {
            this.$t_2('Else');
        }
        this.$1Y_2();
        this.$p_2 += 4;
        this.visitChildren(conditionBranchStep);
        this.$1Y_2();
        this.$p_2 -= 4;
    },

    visitSetAttributeValueStep: function(setAttributeValueStep) {
        if (!setAttributeValueStep.get_propertySpec()) {
            return;
        }
        var $v_0 = this.$H_2(setAttributeValueStep.get_propertySpec().propertyValueExpr);
        if ($v_0.startsWith('(') && $v_0.endsWith(')')) {
            $v_0 = $v_0.substring(1, $v_0.length - 1);
        }
        if (this.$d_2) {
            $v_0 = String.format(window.LOCID_BUSINESSRULE_SETATTRVALUE,
                String.format('<b>{0}</b>', CrmEncodeDecode.CrmHtmlEncode(this.$1F_2)),
                String.format('<b>{0}</b>', CrmEncodeDecode.CrmHtmlEncode($v_0)));
        }
        this.$t_2($v_0);
    },

    visitMethodCallExpression: function(expression) {
        var $v_0 = expression.getParameters();
        if (null !== $v_0 && $v_0.length > 0) {
            if (expression.method === 3) {
                var $v_1 = $v_0[0];
                switch ($v_1) {
                case 0:
                case 1:
                case 2:
                case 3:
                    var $v_2 = this.$H_2($v_0[1]);
                    var $v_3 = this.$H_2($v_0[2]);
                    this.$2_2.append('(');
                    if (!($v_2 === '0' && (!$v_1 || $v_1 === 1))) {
                        this.$2_2.append($v_2);
                    }
                    this.$2_2.append(' ');
                    this.$2_2.append(this.$1c_2($v_1));
                    this.$2_2.append(' ');
                    this.$2_2.append($v_3);
                    this.$2_2.append(')');
                    break;
                default:
                    this.$2_2.append(this.$1c_2($v_1));
                    this.$2_2.append('(');
                    for (var $v_4 = 1; $v_4 < $v_0.length - 1; $v_4++) {
                        this.$2_2.append(this.$H_2($v_0[$v_4]));
                        this.$2_2.append(', ');
                    }
                    if ($v_0.length > 1) {
                        this.$2_2.append(this.$H_2($v_0[$v_0.length - 1]));
                    }
                    this.$2_2.append(')');
                    break;
                }
            } else if (!expression.method) {
                ($v_0[0]).accept(this);
            }
        }
    },

    visitEntityAttributeExpression: function(expression) {
        if (Microsoft.Crm.Workflow.Expressions.RelatedEntity.isInstanceOfType(expression.entity)) {
            this.$2_2.append(this.$1p_2(expression));
        } else {
            this.$2_2.append(this.$1b_2(expression));
        }
    },

    visitUnaryExpression: function(expression) {
        this.$2_2.append(this.$1K_2(expression.conditionOperatoroperator));
        this.$2_2.append('(');
        this.$2_2.append(this.$H_2(expression.operand));
        this.$2_2.append(')');
    },

    visitPrimitiveExpression: function(expression) {
        var $v_0 = expression.primitiveValue.toString();
        if (expression.type === 14) {
            if (!this.$d_2) {
                var $v_1 = new RegExp('\\\\', 'g');
                var $v_2 = new RegExp('\"', 'g');
                $v_0 = $v_0.replace($v_1, '\\\\').replace($v_2, '\\\"');
            }
            $v_0 = '\"' + $v_0 + '\"';
        } else if (expression.type === 3) {
            if ($v_0.indexOf('.') < 0) {
                $v_0 += '.0';
            } else if ($v_0.lastIndexOf('.') === $v_0.length) {
                $v_0 += '0';
            }
        }
        this.$2_2.append($v_0);
    },

    visitBinaryExpression: function(expression) {
        switch (expression.conditionOperatoroperator) {
        case 2:
        case 3:
        case 6:
        case 7:
            var $v_0 = this.$H_2(expression.left);
            var $v_1 = this.$H_2(expression.right.get_item(0));
            this.$2_2.append('(');
            this.$2_2.append($v_0);
            this.$2_2.append(' ');
            this.$2_2.append(this.$1K_2(expression.conditionOperatoroperator));
            this.$2_2.append(' ');
            this.$2_2.append($v_1);
            this.$2_2.append(')');
            break;
        default:
            this.$2_2.append(this.$1K_2(expression.conditionOperatoroperator));
            this.$2_2.append('(');
            this.$2_2.append(this.$H_2(expression.left));
            this.$2_2.append(', ');
            for (var $v_2 = 1; $v_2 < expression.right.get_count(); $v_2++) {
                this.$2_2.append(', ');
                this.$2_2.append(this.$H_2(expression.right.get_item($v_2)));
            }
            this.$2_2.append(')');
            break;
        }
    },

    $1b_2: function($p0) {
        return (this.$b_2) ? this.$a_2($p0.entity.entityName, $p0.attributeName) : $p0.attributeName;
    },

    $1p_2: function($p0) {
        var $v_0 = $p0.entity;
        var $v_1 = this.$1b_2($p0);
        var $v_2 = (this.$b_2)
            ? this.$a_2($p0.$0_0.primaryEntityName, $v_0.get_relatedAttributeName())
            : $v_0.get_relatedAttributeName();
        return String.format(this.get_$1o_2(), $v_2, $v_1);
    },

    $1Y_2: function() {
        this.$2_2.append('<br />');
    },

    $t_2: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$p_2; $v_0++) {
            this.$2_2.append('&nbsp;');
        }
        this.$2_2.append($p0);
    },

    $H_2: function($p0) {
        var $v_0 = this.$2_2;
        this.$2_2 = new Sys.StringBuilder();
        $p0.accept(this);
        var $v_1 = this.$2_2.toString();
        this.$2_2 = $v_0;
        return $v_1;
    },

    get_$1o_2: function() {
        return (this.$b_2) ? '({0}) {1}' : '{0}.{1}';
    },

    $1c_2: function($p0) {
        switch ($p0) {
        case 0:
            return '+';
        case 1:
            return '-';
        case 2:
            return '*';
        case 3:
            return '/';
        case 22:
            return 'Concat';
        case 23:
            return 'TrimRight';
        case 24:
            return 'TrimLeft';
        case 27:
            return 'AddDays';
        case 25:
            return 'AddHours';
        case 31:
            return 'AddMonths';
        case 29:
            return 'AddWeeks';
        case 33:
            return 'AddYears';
        case 28:
            return 'SubtractDays';
        case 26:
            return 'SubtractHours';
        case 32:
            return 'SubtractMonths';
        case 30:
            return 'SubtractWeeks';
        case 34:
            return 'SubtractYears';
        case 48:
            return 'Now';
        case 42:
            return 'DiffInMinutes';
        case 43:
            return 'DiffInHours';
        case 44:
            return 'DiffInDays';
        case 45:
            return 'DiffInWeeks';
        case 46:
            return 'DiffInMonths';
        case 47:
            return 'DiffInYears';
        default:
            return Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString($p0);
        }
    },

    $1K_2: function($p0) {
        switch ($p0) {
        case 2:
            return 'And';
        case 3:
            return 'Or';
        case 6:
            return '=';
        case 7:
            return '<>';
        default:
            return Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator.toString($p0);
        }
    }
}


Microsoft.Crm.Workflow.SharedExpressionVisitor = function() {
    Microsoft.Crm.Workflow.SharedExpressionVisitor.initializeBase(this);
}
Microsoft.Crm.Workflow.SharedExpressionVisitor.prototype = {
    visitWorkflowStep: function(workflowStep) {
        this.visitChildren(workflowStep);
    },

    visitConditionStep: function(conditionStep) {
        this.visitChildren(conditionStep);
    },

    visitConditionBranchStep: function(conditionBranchStep) {
        conditionBranchStep.conditionExpression.accept(this);
        this.visitChildren(conditionBranchStep);
    },

    visitSetAttributeValueStep: function(setAttributeValueStep) {
        setAttributeValueStep.get_propertySpec().accept(this);
    },

    visitAssignStep: function(assignStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitChildWorkflowStep: function(childWorkflowStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSendEmailStep: function(sendEmailStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitCreateStep: function(createStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitUpdateStep: function(updateStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetStateStep: function(setStateStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitCustomActivityStep: function(customActivityStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitChildInteractiveWorkflowStep: function(childWorkflowStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitQueryStep: function(queryStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitAssignVariableStep: function(assignVariableStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitWaitBranchStep: function(waitBranchStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitWaitStep: function(waitStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitWaitTimeoutStep: function(waitTimeoutStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitStopWorkflowStep: function(stopWorkflowStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitStageStep: function(stageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitPageStep: function(pageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetVisibilityStep: function(setVisibilityStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetDefaultValueStep: function(setDefaultValueStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetDisplayModeStep: function(setDisplayModeStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitCustomJavascriptStep: function(customJSStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetMessageStep: function(setMessageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitEntityStep: function(entityStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitRelationshipCollectionStep: function(relationshipCollectionStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitRelationshipStep: function(relationshipStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitStepStep: function(stepStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitControlStep: function(controlStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitActionStep: function(actionStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetFieldRequiredLevelStep: function(setFieldRequiredLevelStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitRollupRuleStep: function(rollupRuleStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetNextStageStep: function(setNextStageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitInteractionStep: function(interactionStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitInteractionPageStep: function(interactionPageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitChildren: function(step) {
        for (var $v_0 = 0; $v_0 < step.steps.get_Count(); $v_0++) {
            var $v_1 = step.steps.get_item($v_0);
            $v_1.apply(this);
        }
    },

    visitBinaryExpression: function(expression) {
        expression.left.accept(this);
        for (var $v_0 = 0; $v_0 < expression.right.get_count(); $v_0++) {
            expression.right.get_item($v_0).accept(this);
        }
    },

    visitUnaryExpression: function(expression) {
        expression.operand.accept(this);
    },

    visitMethodCallExpression: function(expression) {
        var $v_0 = expression.getParameters();
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType($v_0[$v_1])) {
                ($v_0[$v_1]).accept(this);
            }
        }
    },

    visitPropertySpecification: function(propertySpecification) {
        if (null !== propertySpecification.propertyValueExpr) {
            propertySpecification.propertyValueExpr.accept(this);
        }
    },

    visitPrimitiveExpression: function(expression) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitEntityAttributeExpression: function(expression) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitTimeSpanExpression: function(expression) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitNullExpression: function(expression) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitLookupExpression: function(expression) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitEntitySpecification: function(entitySpecification) {
        entitySpecification.accept(this);
    }
}


Microsoft.Crm.Workflow.CrmTimeSpan = function(sourceYears, sourceMonths, sourceDays, sourceHours, sourceMinutes) {
    this.years = sourceYears;
    this.months = sourceMonths;
    this.days = sourceDays;
    this.hours = sourceHours;
    this.minutes = sourceMinutes;
}
Microsoft.Crm.Workflow.CrmTimeSpan.prototype = {
    equals: function(value) {
        return value.years === this.years &&
            value.months === this.months &&
            value.days === this.days &&
            value.hours === this.hours &&
            value.minutes === this.minutes;
    },

    add: function(value) {
        this.years += value.getFullYear();
        this.months += value.getMonth();
        this.days += value.getDay();
        this.hours += value.getHours();
        this.minutes += value.getMinutes();
        value.setFullYear(this.years);
        value.setMonth(this.months);
        value.setDate(this.days);
        value.setFullYear(this.minutes);
        var $v_0 = value;
        return $v_0;
    },

    subtract: function(value) {
        this.years -= value.getFullYear();
        this.months -= value.getMonth();
        this.days -= value.getDay();
        this.hours -= value.getHours();
        this.minutes -= value.getMinutes();
        value.setFullYear(this.years);
        value.setMonth(this.months);
        value.setDate(this.days);
        value.setFullYear(this.minutes);
        var $v_0 = value;
        return $v_0;
    },

    get_years: function() {
        return this.years;
    },

    set_years: function(value) {
        this.years = value;
        return value;
    },

    get_months: function() {
        return this.months;
    },

    set_months: function(value) {
        this.months = value;
        return value;
    },

    get_days: function() {
        return this.days;
    },

    set_days: function(value) {
        this.days = value;
        return value;
    },

    get_hours: function() {
        return this.hours;
    },

    set_hours: function(value) {
        this.hours = value;
        return value;
    },

    get_minutes: function() {
        return this.minutes;
    },

    set_minutes: function(value) {
        this.minutes = value;
        return value;
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.days = $v_0.days;
        }
    },

    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
}


Microsoft.Crm.Workflow.DataSourceCollection = function() {
    Microsoft.Crm.Workflow.DataSourceCollection.initializeBase(this);
}


Type.registerNamespace('Microsoft.Crm.Workflow.ObjectModel');

Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction = function() {}
Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction.prototype = {
    add: 0,
    remove: 1,
    move: 2
}
Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.CollectionChangedAction', false);


Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode = function() {}
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode.prototype = {
    IF: 0,
    elseIf: 1,
    ELSE: 2
}
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode', false);


Microsoft.Crm.Workflow.ObjectModel.IDataSource = function() {}
Microsoft.Crm.Workflow.ObjectModel.IDataSource.registerInterface('Microsoft.Crm.Workflow.ObjectModel.IDataSource');


Microsoft.Crm.Workflow.ObjectModel.DataSourceType = function() {}
Microsoft.Crm.Workflow.ObjectModel.DataSourceType.prototype = {
    primaryEntity: 0,
    relatedEntity: 1,
    entityCreatedByStep: 2,
    valuesCreatedByStep: 3,
    customOperationEntity: 4
}
Microsoft.Crm.Workflow.ObjectModel.DataSourceType
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.DataSourceType', false);


Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes = function() {}
Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes.prototype = {
    none: 0,
    required: 1,
    recommended: 2
}
Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.FieldRequiredLevelTypes', true);


Microsoft.Crm.Workflow.ObjectModel.InsertDirection = function() {}
Microsoft.Crm.Workflow.ObjectModel.InsertDirection.prototype = {
    before: 0,
    after: 1
}
Microsoft.Crm.Workflow.ObjectModel.InsertDirection
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.InsertDirection', false);


Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue = function() {}
Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue.prototype = {
    executionTime: 0,
    activityCount: 1,
    activityCountIncludingWorkflow: 2,
    waitTimeout: 3
}
Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.PredefinedDataValue', false);


Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue = function() {}
Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue.prototype = {
    recordCount: 0
}
Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.PredefinedQueryDataValue', false);


Microsoft.Crm.Workflow.ObjectModel.SendEmailType = function() {}
Microsoft.Crm.Workflow.ObjectModel.SendEmailType.prototype = {
    sendEmailWithoutTemplate: 0,
    sendEmailWithTemplate: 1
}
Microsoft.Crm.Workflow.ObjectModel.SendEmailType
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.SendEmailType', false);


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
Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerConditions
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerConditions', true);


Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes = function() {}
Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes.prototype = {
    automatic: 2,
    onDemand: 4,
    subprocess: 8
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.WorkflowTriggerTypes', true);


Microsoft.Crm.Workflow.ObjectModel.IMetadataProvider = function() {}
Microsoft.Crm.Workflow.ObjectModel.IMetadataProvider
    .registerInterface('Microsoft.Crm.Workflow.ObjectModel.IMetadataProvider');


Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection = function() {}
Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection.prototype = {
    input: 0,
    output: 1
}
Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection
    .registerEnum('Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection', false);


Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory = function() {
}
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep = function(className) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
    switch (className) {
    case 'ConditionStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.ConditionStep($v_0);
    case 'ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel':
        var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.ConditionStep($v_0);
        $v_1.set_workflow($v_0);
        return new Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep($v_1, null);
    case 'CustomJavascriptStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep($v_0);
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
    case 'SetDefaultValueStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep($v_0, null);
    case 'SetNextStageStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep($v_0);
    case 'ControlStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.ControlStep($v_0);
    case 'ActionStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.ActionStep($v_0);
    case 'EntityStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.EntityStep($v_0, 'dummy');
    case 'StageStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.StageStep($v_0, 'dummy');
    case 'PageStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.PageStep($v_0, 'dummy');
    case 'StepStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.StepStep($v_0, 'dummy');
    case 'RelationshipCollectionStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep($v_0);
    case 'RelationshipStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.RelationshipStep($v_0);
    case 'RollupRuleStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep($v_0);
    case 'CreateStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.CreateStep($v_0);
    case 'CustomActivityStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep($v_0);
    case 'UpdateStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.UpdateStep($v_0);
    case 'AssignStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.AssignStep($v_0);
    case 'ChildWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep($v_0);
    case 'SendEmailStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.SendEmailStep($v_0);
    case 'SetStateStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.SetStateStep($v_0);
    case 'StopWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep($v_0);
    case 'WaitBranchStep:#Microsoft.Crm.Workflow.ObjectModel':
        var $v_2 = new Microsoft.Crm.Workflow.ObjectModel.WaitStep($v_0);
        $v_2.set_workflow($v_0);
        return new Microsoft.Crm.Workflow.ObjectModel
            .WaitBranchStep($v_2, new Microsoft.Crm.Workflow.Expressions.NullExpression($v_0));
    case 'WaitStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.WaitStep($v_0);
    case 'WaitTimeoutStep:#Microsoft.Crm.Workflow.ObjectModel':
        var $v_3 = new Microsoft.Crm.Workflow.ObjectModel.WaitStep($v_0);
        $v_3.set_workflow($v_0);
        return new Microsoft.Crm.Workflow.ObjectModel
            .WaitTimeoutStep($v_3, new Microsoft.Crm.Workflow.Expressions.NullExpression($v_0));
    case 'InteractionStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.InteractionStep($v_0);
    case 'InteractionPageStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep($v_0);
    case 'ChildInteractiveWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep($v_0);
    case 'AssignVariableStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep($v_0);
    case 'QueryStep:#Microsoft.Crm.Workflow.ObjectModel':
        return new Microsoft.Crm.Workflow.ObjectModel.QueryStep($v_0);
    }
    return null;
}
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression = function(className) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
    switch (className) {
    case 'UnaryExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.UnaryExpression($v_0, 0, null);
    case 'PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression($v_0, null, 14);
    case 'BinaryExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions
            .BinaryExpression($v_0, 6, new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression($v_0, null, 14), []);
    case 'EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions
            .EntityAttributeExpression(new Microsoft.Crm.Workflow.Expressions
                .InvalidEntity($v_0, 'dummyParam'),
                'name');
    case 'MethodCallExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.MethodCallExpression($v_0, 0, null);
    case 'TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions
            .TimeSpanExpression($v_0, new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, 0, 0, 0));
    case 'LookupExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.LookupExpression($v_0, null, 6, '', '');
    case 'NullExpression:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.NullExpression($v_0);
    }
    return null;
}
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity = function(className) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
    switch (className) {
    case 'PrimaryEntity:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.PrimaryEntity($v_0);
    case 'RelatedEntity:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.RelatedEntity($v_0, 'dummyProperty', 'dummyEntity');
    case 'RelatedEntityLinked:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions
            .RelatedEntityLinked($v_0, 'dummyProperty', 'dummyEntity', 'dummyRelationshipName');
    case 'EntityCreatedByStep:#Microsoft.Crm.Workflow.Expressions':
        return new Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep($v_0, null, 'dummy', 'dummy', 'dummy', true);
    default:
        return null;
    }
}


Microsoft.Crm.Workflow.ObjectModel.AssignStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.AssignStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'AssignStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.AssignStep.prototype = {
    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_assignTo: function() {
        return this.assignTo;
    },

    set_assignTo: function(value) {
        this.assignTo = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitAssignStep(this);
    },

    assignTo: null,
    entity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.assignTo) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('assignTo', this.assignTo.toJson(), true));
        }
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.assignTo) {
            this.assignTo.fixInternalLinks(this.$0_0);
        }
        if (this.entity) {
            this.entity.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.assignTo) {
                this.assignTo = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.assignTo.__class);
                this.assignTo.initializeFromDynamic($v_0.assignTo);
            }
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'AssignVariableStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.prototype = {
    get_direction: function() {
        return this.direction;
    },

    set_direction: function(value) {
        this.direction = value;
        return value;
    },

    get_readOnly: function() {
        return this.readOnly;
    },

    set_readOnly: function(value) {
        this.readOnly = value;
        return value;
    },

    get_valueExpression: function() {
        return this.valueExpression;
    },

    set_valueExpression: function(value) {
        this.valueExpression = value;
        return value;
    },

    get_variableName: function() {
        return this.variableName;
    },

    set_variableName: function(value) {
        this.variableName = value;
        return value;
    },

    get_dataType: function() {
        return this.dataType;
    },

    set_dataType: function(value) {
        this.dataType = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitAssignVariableStep(this);
    },

    direction: 0,
    readOnly: false,
    valueExpression: null,
    variableName: null,
    dataType: 0,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('variableName', this.variableName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('readOnly', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.readOnly), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('direction',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.direction),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('dataType', this.$1r_1(this.dataType), true));
        if (this.valueExpression) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('valueExpression', this.valueExpression.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.variableName) {
                this.variableName = $v_0.variableName;
            }
            if ($v_0.readOnly) {
                this.readOnly = $v_0.readOnly;
            }
            if ($v_0.direction) {
                this.direction = ($v_0.direction);
            }
            if ($v_0.dataType) {
                this.dataType = ($v_0.dataType);
            }
            if ($v_0.valueExpression) {
                this.valueExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.valueExpression.__class);
                this.valueExpression.initializeFromDynamic($v_0.valueExpression);
            }
        }
    },

    $1r_1: function($p0) {
        return Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant($p0);
    }
}


Microsoft.Crm.Workflow.ObjectModel.ActionStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ActionStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'ActionStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
}
Microsoft.Crm.Workflow.ObjectModel.ActionStep.prototype = {
    get_actionControl: function() {
        return this.actionControl;
    },

    set_actionControl: function(value) {
        this.actionControl = value;
        return value;
    },

    get_actionId: function() {
        return this.actionId;
    },

    set_actionId: function(value) {
        this.actionId = value;
        return value;
    },

    get_actionType: function() {
        return this.actionType;
    },

    set_actionType: function(value) {
        this.actionType = value;
        return value;
    },

    get_processId: function() {
        return this.processId;
    },

    set_processId: function(value) {
        this.processId = value;
        return value;
    },

    get_uniqueName: function() {
        return this.uniqueName;
    },

    set_uniqueName: function(value) {
        this.uniqueName = value;
        return value;
    },

    get_triggerEvents: function() {
        return this.triggerEvents;
    },

    set_triggerEvents: function(value) {
        this.triggerEvents = value;
        return value;
    },

    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.isInstanceOfType(newStep)) ||
                (Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.isInstanceOfType(newStep)) ||
                (Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.isInstanceOfType(newStep)),
                'Can only insert AssignVariableStep, SetAttributeValueStep, or CustomJavascriptStep');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.isInstanceOfType(stepBase)) ||
                (Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.isInstanceOfType(stepBase)),
                'Can only insert AssignVariableStep or CustomJavascriptStep');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function(visitor) {
        visitor.visitActionStep(this);
    },

    addPeer: function(direction, newStep) {
    },

    $1Z_0: function($p0) {
    },

    actionControl: null,
    actionId: null,
    actionType: 0,
    processId: null,
    uniqueName: null,
    triggerEvents: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('actionId', this.actionId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('actionType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.actionType),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('processId', this.processId.toString(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('uniqueName', this.uniqueName, true));
        if (this.triggerEvents && this.triggerEvents.length > 0) {
            var $v_1 = new Sys.StringBuilder();
            var $v_2 = new Array(this.triggerEvents.length);
            for (var $v_3 = 0; $v_3 < this.triggerEvents.length; $v_3++) {
                $v_2[$v_3] = this.triggerEvents[$v_3].toJson();
            }
            $v_1.append('[' + Microsoft.Crm.Workflow.Utils.StringUtility.join(String, ',', $v_2) + ']');
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('triggerEvents', $v_1.toString(), true));
        }
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.actionControl)) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('actionControl', this.actionControl.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
        if (this.actionControl) {
            this.actionControl.set_parent(this);
            this.actionControl.$0_0.stepDictionary.set_item(this.actionControl.id, this.actionControl);
            this.actionControl.fixInternalLinks();
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            this.actionId = $v_0.actionId;
            this.actionType = ($v_0.actionType) ? JSON.parse($v_0.actionType) : 0;
            this.uniqueName = $v_0.uniqueName;
            if ($v_0.processId) {
                this.processId = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_0.processId.toString());
            }
            if ($v_0.triggerEvents) {
                var $v_1 = new Array($v_0.triggerEvents.length);
                for (var $v_2 = 0; $v_2 < $v_0.triggerEvents.length; $v_2++) {
                    var $v_3 = $v_0.triggerEvents[$v_2];
                    var $v_4 = new Microsoft.Crm.Workflow.ObjectModel.ProcessTriggerData();
                    $v_4.initializeFromDynamic($v_3);
                    $v_1[$v_2] = $v_4;
                }
                this.triggerEvents = $v_1;
            }
            if ($v_0.actionControl) {
                this.actionControl = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildStep($v_0.actionControl.__class);
                this.actionControl.initializeFromDynamic($v_0.actionControl);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.ProcessTriggerData = function() {
}
Microsoft.Crm.Workflow.ObjectModel.ProcessTriggerData.prototype = {
    get_Event: function() {
        return this.eventName;
    },

    set_Event: function(value) {
        this.eventName = value;
        return value;
    },

    get_FilterId: function() {
        return this.filterId;
    },

    set_FilterId: function(value) {
        this.filterId = value;
        return value;
    },

    get_PipelineStageId: function() {
        return this.pipelineStageId;
    },

    set_PipelineStageId: function(value) {
        this.pipelineStageId = value;
        return value;
    },

    eventName: null,
    filterId: null,
    pipelineStageId: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('eventName', this.eventName, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('filterId', this.filterId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('pipelineStageId', this.pipelineStageId, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        var $v_0 = deserialized;
        if ($v_0) {
            this.eventName = $v_0.eventName;
            this.pipelineStageId = $v_0.pipelineStageId;
            this.filterId = $v_0.filterId;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.ControlStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ControlStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'ControlStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
}
Microsoft.Crm.Workflow.ObjectModel.ControlStep.getControlStep = function(stepBase) {
    if (Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(stepBase)) {
        return stepBase;
    } else if (Microsoft.Crm.Workflow.ObjectModel.ActionStep.isInstanceOfType(stepBase)) {
        return (stepBase).actionControl;
    }
    return null;
}
Microsoft.Crm.Workflow.ObjectModel.ControlStep.prototype = {
    get_controlId: function() {
        return this.controlId;
    },

    set_controlId: function(value) {
        this.controlId = value;
        return value;
    },

    get_classId: function() {
        return this.classId;
    },

    set_classId: function(value) {
        this.classId = value;
        return value;
    },

    get_dataFieldName: function() {
        return this.dataFieldName;
    },

    set_dataFieldName: function(value) {
        this.dataFieldName = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        this.entity = value;
        return value;
    },

    get_systemStepType: function() {
        return this.systemStepType;
    },

    set_systemStepType: function(value) {
        this.systemStepType = value;
        return value;
    },

    get_isSystemControl: function() {
        return this.isSystemControl;
    },

    set_isSystemControl: function(value) {
        this.isSystemControl = value;
        return value;
    },

    get_parameters: function() {
        return this.parameters;
    },

    set_parameters: function(value) {
        this.parameters = value;
        return value;
    },

    get_controlDisplayName: function() {
        return this.controlDisplayName;
    },

    set_controlDisplayName: function(value) {
        this.controlDisplayName = value;
        return value;
    },

    get_isUnbound: function() {
        return this.isUnbound;
    },

    set_isUnbound: function(value) {
        this.isUnbound = value;
        return value;
    },

    get_controlType: function() {
        return this.controlType;
    },

    set_controlType: function(value) {
        this.controlType = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitControlStep(this);
    },

    addPeer: function(direction, newStep) {
    },

    $1Z_0: function($p0) {
    },

    controlId: null,
    classId: null,
    dataFieldName: null,
    entity: null,
    systemStepType: 0,
    isSystemControl: false,
    parameters: null,
    controlDisplayName: null,
    isUnbound: false,
    controlType: 0,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('classId', this.classId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('dataFieldName', this.dataFieldName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('systemStepType',
                Microsoft.Crm.Workflow.ObjectModel.SystemStep.toString(this.systemStepType),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isSystemControl',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isSystemControl),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('parameters', this.parameters, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlDisplayName', this.controlDisplayName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isUnbound', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isUnbound), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.controlType),
                true));
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.entity)) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
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
            this.isUnbound = $v_0.isUnbound;
            this.controlType = ($v_0.controlType) ? JSON.parse($v_0.controlType) : 0;
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.EntityStep = function(workflowStep, entityLogicalName) {
    Microsoft.Crm.Workflow.ObjectModel.EntityStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(entityLogicalName, 'entityLogicalName');
    this.__class = 'EntityStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
    this.set_EntityLogicalName(entityLogicalName);
}
Microsoft.Crm.Workflow.ObjectModel.EntityStep.prototype = {
    get_EntityLogicalName: function() {
        return this.description;
    },

    set_EntityLogicalName: function(value) {
        this.description = value;
        return value;
    },

    get_relationshipName: function() {
        return this.relationshipName;
    },

    set_relationshipName: function(value) {
        this.relationshipName = value;
        return value;
    },

    get_attributeName: function() {
        return this.attributeName;
    },

    set_attributeName: function(value) {
        this.attributeName = value;
        return value;
    },

    get_isClosedLoop: function() {
        return this.isClosedLoop;
    },

    set_isClosedLoop: function(value) {
        this.isClosedLoop = value;
        return value;
    },

    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep),
                'Cannot insert a non stage step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stepBase),
                'Cannot remove a non stage step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function(visitor) {
        visitor.visitEntityStep(this);
    },

    addPeer: function(direction, newStep) {
    },

    $1Z_0: function($p0) {
    },

    relationshipName: null,
    attributeName: null,
    isClosedLoop: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relationshipName', this.relationshipName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isClosedLoop',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isClosedLoop),
                true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            this.relationshipName = $v_0.relationshipName;
            this.attributeName = $v_0.attributeName;
            this.isClosedLoop = $v_0.isClosedLoop;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'RelationshipCollectionStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
}
Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep.prototype = {
    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.isInstanceOfType(newStep),
                'Cannot insert a non Relationship step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.isInstanceOfType(stepBase),
                'Cannot remove a non Relationship step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function(visitor) {
        visitor.visitRelationshipCollectionStep(this);
    },

    addPeer: function(direction, newStep) {
    },

    $1Z_0: function($p0) {
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append('}');
        return $v_0.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel.RelationshipStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'RelationshipStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
}
Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.prototype = {
    get_sourceStageId: function() {
        return this.sourceStageId;
    },

    set_sourceStageId: function(value) {
        this.sourceStageId = value;
        return value;
    },

    get_targetStageId: function() {
        return this.targetStageId;
    },

    set_targetStageId: function(value) {
        this.targetStageId = value;
        return value;
    },

    get_relationshipName: function() {
        return this.relationshipName;
    },

    set_relationshipName: function(value) {
        this.relationshipName = value;
        return value;
    },

    get_attributeName: function() {
        return this.attributeName;
    },

    set_attributeName: function(value) {
        this.attributeName = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitRelationshipStep(this);
    },

    addPeer: function(direction, newStep) {
    },

    $1Z_0: function($p0) {
    },

    relationshipName: null,
    attributeName: null,
    sourceStageId: null,
    targetStageId: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relationshipName', this.relationshipName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('sourceStageId', this.sourceStageId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('targetStageId', this.targetStageId, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.relationshipName = $v_0.relationshipName;
            this.attributeName = $v_0.attributeName;
            this.sourceStageId = $v_0.sourceStageId;
            this.targetStageId = $v_0.targetStageId;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepStep = function(workflowStep, stepName) {
    Microsoft.Crm.Workflow.ObjectModel.StepStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(stepName, 'stepName');
    this.__class = 'StepStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
    this.set_stepStepName(stepName);
}
Microsoft.Crm.Workflow.ObjectModel.StepStep.prototype = {
    get_stepStepId: function() {
        return this.stepStepId;
    },

    set_stepStepId: function(value) {
        this.stepStepId = value;
        return value;
    },

    get_stepStepName: function() {
        return this.description;
    },

    set_stepStepName: function(value) {
        this.description = value;
        return value;
    },

    get_isProcessRequired: function() {
        return this.isProcessRequired;
    },

    set_isProcessRequired: function(value) {
        this.isProcessRequired = value;
        return value;
    },

    get_isHidden: function() {
        return this.isHidden;
    },

    set_isHidden: function(value) {
        this.isHidden = value;
        return value;
    },

    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(newStep) ||
                Microsoft.Crm.Workflow.ObjectModel.ActionStep.isInstanceOfType(newStep),
                'Cannot insert a non Control/action Step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(stepBase) ||
                Microsoft.Crm.Workflow.ObjectModel.ActionStep.isInstanceOfType(stepBase),
                'Cannot remove a non Control/Action Step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function(visitor) {
        visitor.visitStepStep(this);
    },

    addPeer: function(direction, newStep) {
    },

    $1Z_0: function($p0) {
    },

    stepStepId: null,
    stepStepName: null,
    isProcessRequired: false,
    isHidden: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('stepStepId', this.stepStepId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.stepStepName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isProcessRequired',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isProcessRequired),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isHidden', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isHidden), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            this.stepStepId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.stepStepId);
            this.isProcessRequired = $v_0.isProcessRequired;
            this.isHidden = $v_0.isHidden;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'ChildWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep.prototype = {
    apply: function(visitor) {
        visitor.visitChildWorkflowStep(this);
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_childWorkflow: function() {
        return this.childWorkflow;
    },

    set_childWorkflow: function(value) {
        this.childWorkflow = value;
        return value;
    },

    entity: null,
    childWorkflow: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.childWorkflow) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('childWorkflow', this.childWorkflow.toJson(), true));
        }
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entity) {
            this.entity.fixInternalLinks(this.$0_0);
        }
        if (this.childWorkflow) {
            this.childWorkflow.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.childWorkflow) {
                this.childWorkflow = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.childWorkflow.__class);
                this.childWorkflow.initializeFromDynamic($v_0.childWorkflow);
            }
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase = function() {
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.initializeBase(this);
    this.steps = new Microsoft.Crm.Workflow.ObjectModel.StepCollection();
    this.__class = 'CompositeStepBase:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype = {
    get_Steps: function() {
        return this.steps;
    },

    appendStep: function(newStep) {
        if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert((Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.WorkflowStep) ||
                    (Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.EntityStep),
                    'StageStep can only be inserted as a child of WorkflowStep or EntityStep.');
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)),
                'WorkflowStep cannot be added as a child of any steps.');
        newStep.$1n_0();
        newStep.set_parent(this);
        this.steps.add(newStep);
        this.$0_0.stepDictionary.set_item(newStep.id, newStep);
    },

    remove: function(stepBase) {
        this.$0_0.stepDictionary.remove(stepBase.id);
        if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(stepBase)) {
            var $v_0 = stepBase;
            var $v_1 = $v_0.steps.get_Count();
            while ($v_1 > 0) {
                var $v_2 = $v_0.steps.get_item(0);
                $v_0.remove($v_2);
                $v_1 = $v_0.steps.get_Count();
            }
        }
        this.steps.remove(stepBase);
    },

    insert: function(peer, direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(peer.get_parent() === this, 'Peer step is not a child of current step.');
        newStep.set_parent(this);
        var $v_0 = this.steps.indexOf(peer);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert($v_0 >= 0, 'Peer index must be non-zero');
        if (!direction) {
            this.steps.insert($v_0, newStep);
            this.$0_0.stepDictionary.set_item(newStep.id, newStep);
        } else {
            this.steps.insert($v_0 + 1, newStep);
            this.$0_0.stepDictionary.set_item(newStep.id, newStep);
        }
    },

    get_lastStep: function() {
        if (this.steps.get_Count() > 0) {
            var $v_0 = this.steps.get_item(this.steps.get_Count() - 1);
            if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType($v_0)) {
                return ($v_0).get_lastStep();
            } else {
                return $v_0;
            }
        } else {
            return this;
        }
    },

    steps: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('steps', this.steps.toJson(), true));
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        for (var $v_0 = 0; $v_0 < this.steps.get_Count(); $v_0++) {
            var $v_1 = this.steps.get_item($v_0);
            $v_1.set_parent(this);
            $v_1.$0_0.stepDictionary.set_item($v_1.id, $v_1);
            $v_1.fixInternalLinks();
        }
    },

    initializeFromDynamic: function(deserialized) {
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


Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep = function(condition, conditionExpression) {
    Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(condition, 'condition');
    this.setNameAndId(condition.$0_0.$3_2());
    if (conditionExpression) {
        this.conditionExpression = conditionExpression;
    }
    this.__class = 'ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.prototype = {
    get_conditionBranchDisplayMode: function() {
        if (!this.conditionExpression) {
            return 2;
        } else {
            var $v_0 = this.get_parent();
            if (!$v_0) {
                Microsoft.Crm.Workflow.Utils.ExceptionUtility
                    .throwException('Condition branch needs to be added to a condition step in order to determine its display mode');
            }
            if (this === $v_0.steps.get_item(0)) {
                return 0;
            } else {
                return 1;
            }
        }
    },

    get_conditionExpression: function() {
        return this.conditionExpression;
    },

    set_conditionExpression: function(value) {
        this.conditionExpression = value;
        return value;
    },

    get_parent: function() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType(value))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('Only ConditionStep can include ConditionBranch as a child.');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)),
                'Cannot add a ConditionBranchStep to a ConditionBranchStep.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)),
                'Cannot add StageStep to ConditionBranchStep. It can only be added to a workflow step.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)),
                'Cannot add WorkflowStep to ConditionBranchStep.');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    addPeer: function(direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep),
                'Peer of a ConditionBranchStep can only be a ConditionBranchStep.');
        var $v_0 = newStep;
        if ((direction === 1) && (!this.conditionExpression)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('Cannot insert a condition branch with condition expression after a branch that does not.');
        }
        if ((!direction) && (this.conditionExpression) && (!$v_0.conditionExpression)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('Cannot insert a condition branch with no condition expression before a branch that does have one.');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.addPeer.call(this, direction, newStep);
    },

    apply: function(visitor) {
        visitor.visitConditionBranchStep(this);
    },

    conditionExpression: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        if (this.conditionExpression) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('conditionExpression', this.conditionExpression.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
        if (this.conditionExpression) {
            this.conditionExpression.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.conditionExpression) {
                this.conditionExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.conditionExpression.__class);
                this.conditionExpression.initializeFromDynamic($v_0.conditionExpression);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.ConditionStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ConditionStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.containsElsebranch = false;
    this.__class = 'ConditionStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.ConditionStep.prototype = {
    remove: function(stepBase) {
        if (Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(stepBase)) {
            var $v_0 = stepBase;
            if (!$v_0.conditionExpression) {
                this.containsElsebranch = false;
            }
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep),
                'Cannot add any other step other than ConditionBranchStep to ConditionStep.');
        var $v_0 = newStep;
        if (!$v_0.conditionExpression) {
            if (!this.containsElsebranch) {
                this.containsElsebranch = true;
            }
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    apply: function(visitor) {
        visitor.visitConditionStep(this);
    },

    findElseBranch: function() {
        var $v_0 = null;
        var $v_1 = this.steps.get_item(this.steps.get_Count() - 1);
        var $v_2 = $v_1;
        if ($v_2.get_conditionBranchDisplayMode() === 2) {
            $v_0 = $v_2;
        }
        return $v_0;
    },

    get_containsElseBranch: function() {
        return this.containsElsebranch;
    },

    set_containsElseBranch: function(value) {
        this.containsElsebranch = value;
        return value;
    },

    containsElsebranch: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('containsElsebranch',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.containsElsebranch),
                true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            this.containsElsebranch = $v_0.containsElsebranch;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.CreateStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.CreateStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'CreateStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CreateStep.prototype = {
    get_entityName: function() {
        if (this.entity) {
            return this.entity.entityName;
        } else {
            return null;
        }
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!value, 'Entity specification value cannot be set to null');
        this.entity = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitCreateStep(this);
    },

    get_output: function() {
        return this.output;
    },

    set_output: function(value) {
        this.output = value;
        return value;
    },

    entity: null,
    output: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        if (this.output) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('output', this.output.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entity) {
            this.entity.fixInternalLinks(this.$0_0);
        }
        if (this.output) {
            this.output.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.entity) {
                this.entity = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                this.entity.initializeFromDynamic($v_0.entity);
            }
            if ($v_0.output) {
                this.output = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                this.output.initializeFromDynamic($v_0.output);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo = function() {
    Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo.initializeBase(this);
}


Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfoBase = function() {
}
Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfoBase.prototype = {
    get_name: function() {
        return this.name;
    },

    set_name: function(value) {
        this.name = value;
        return value;
    },

    get_pluginTypeId: function() {
        return this.pluginTypeId;
    },

    set_pluginTypeId: function(value) {
        this.pluginTypeId = value;
        return value;
    },

    get_groupName: function() {
        return this.groupName;
    },

    set_groupName: function(value) {
        this.groupName = value;
        return value;
    },

    get_isNet4: function() {
        return this.isNet4;
    },

    set_isNet4: function(value) {
        this.isNet4 = value;
        return value;
    },

    get_typeName: function() {
        return this.typeName;
    },

    set_typeName: function(value) {
        this.typeName = value;
        return value;
    },

    get_assemblyName: function() {
        return this.assemblyName;
    },

    set_assemblyName: function(value) {
        this.assemblyName = value;
        return value;
    },

    get_publicKeyToken: function() {
        return this.publicKeyToken;
    },

    set_publicKeyToken: function(value) {
        this.publicKeyToken = value;
        return value;
    },

    get_culture: function() {
        return this.culture;
    },

    set_culture: function(value) {
        this.culture = value;
        return value;
    },

    get_assemblyVersion: function() {
        return this.assemblyVersion;
    },

    set_assemblyVersion: function(value) {
        this.assemblyVersion = value;
        return value;
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.name, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('groupName', this.groupName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('typeName', this.typeName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('pluginTypeId', this.pluginTypeId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('assemblyName', this.assemblyName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('publicKeyToken', this.publicKeyToken, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('culture', this.culture, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('assemblyVersion', this.assemblyVersion, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isNet4', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.get_isNet4()), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.name = $v_0.name;
            this.groupName = $v_0.groupName;
            this.typeName = $v_0.typeName;
            this.pluginTypeId = $v_0.pluginTypeId;
            this.assemblyName = $v_0.assemblyName;
            this.publicKeyToken = $v_0.publicKeyToken;
            this.culture = $v_0.culture;
            this.assemblyVersion = $v_0.assemblyVersion;
            this.isNet4 = $v_0.isNet4;
        }
    },

    pluginTypeId: null,
    groupName: null,
    typeName: null,
    assemblyName: null,
    publicKeyToken: null,
    culture: null,
    assemblyVersion: null,
    isNet4: false,
    name: null
}


Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo = function() {
    Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo.initializeBase(this);
}


Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase = function() {
}
Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase.prototype = {
    get_name: function() {
        return this.name;
    },

    set_name: function(value) {
        this.name = value;
        return value;
    },

    get_typeName: function() {
        return this.typeName;
    },

    set_typeName: function(value) {
        this.typeName = value;
        return value;
    },

    get_isInOutArgument: function() {
        return this.isInOutArgument;
    },

    set_isInOutArgument: function(value) {
        this.isInOutArgument = value;
        return value;
    },

    get_workflowAttributeType: function() {
        return this.workflowAttributeType;
    },

    set_workflowAttributeType: function(value) {
        this.workflowAttributeType = value;
        return value;
    },

    get_required: function() {
        return this.required;
    },

    set_required: function(value) {
        this.required = value;
        return value;
    },

    get_attributeName: function() {
        return this.attributeName;
    },

    set_attributeName: function(value) {
        this.attributeName = value;
        return value;
    },

    get_dependencyPropertyName: function() {
        return this.dependencyProperty;
    },

    set_dependencyPropertyName: function(value) {
        this.dependencyProperty = value;
        return value;
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('required', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.required), false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.name, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('typeName', this.typeName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('dependencyProperty', this.dependencyProperty, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('workflowAttributeType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.workflowAttributeType),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isInOutArgument',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isInOutArgument),
                true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.required = $v_0.required;
            this.name = $v_0.name;
            this.typeName = $v_0.typeName;
            this.attributeName = $v_0.attributeName;
            this.dependencyProperty = $v_0.dependencyProperty;
            this.workflowAttributeType = parseInt($v_0.workflowAttributeType);
            this.isInOutArgument = $v_0.isInOutArgument;
        }
    },

    required: false,
    name: null,
    typeName: null,
    attributeName: null,
    dependencyProperty: '',
    workflowAttributeType: 0,
    isInOutArgument: false
}


Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep.initializeBase(this, [workflowStep]);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'CustomActivityStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep.prototype = {
    apply: function(visitor) {
        visitor.visitCustomActivityStep(this);
    }
}


Microsoft.Crm.Workflow.ObjectModel.CustomStepBase = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.CustomStepBase.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.outputs = {};
    this.activityInfo = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo();
    this.__class = 'CustomStepBase:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CustomStepBase.prototype = {
    get_outputs: function() {
        return this.outputs;
    },

    set_outputs: function(value) {
        this.outputs = value;
        return value;
    },

    outputs: null,

    get_activityInfo: function() {
        return this.activityInfo;
    },

    set_activityInfo: function(value) {
        this.activityInfo = value;
        return value;
    },

    activityInfo: null,

    get_hasOutputs: function() {
        return this.hasOutputs;
    },

    set_hasOutputs: function(value) {
        this.hasOutputs = value;
        return value;
    },

    hasOutputs: false,

    get_isInvalid: function() {
        return this.isInvalid;
    },

    set_isInvalid: function(value) {
        this.isInvalid = value;
        return value;
    },

    isInvalid: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.activityInfo) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('activityInfo', (this.activityInfo).toJson(), true));
        }
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('hasOutputs',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this
                    .hasOutputs),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isInvalid', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isInvalid), true));
        $v_0.append(',');
        $v_0.append('\"outputs\":');
        var $$t_3 = this, $$t_4 = this;
        $v_0.append(Microsoft.Crm.Workflow.Utils.DictionaryUtility.toJson(String,
            Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase,
            this.outputs,
            function($p1_0) {
                return Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getQuotedString($p1_0);
            },
            function($p1_0) {
                return ($p1_0).toJson();
            }));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.activityInfo) {
                this.activityInfo = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo();
                this.activityInfo.initializeFromDynamic($v_0.activityInfo);
            }
            this.hasOutputs = $v_0.hasOutputs;
            this.isInvalid = $v_0.isInvalid;
            if ($v_0.outputs) {
                var $$t_5 = this, $$t_6 = this;
                this.outputs = Microsoft.Crm.Workflow.Utils.DictionaryUtility.fromJson(String,
                    Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo,
                    $v_0.outputs,
                    function($p1_0) {
                        return $p1_0;
                    },
                    function($p1_0) {
                        var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo();
                        $v_1.initializeFromDynamic($p1_0);
                        return $v_1;
                    });
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.DataValue = function(source, key, referenceData) {
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(source, 'source');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(key, 'key');
    this.$Z_0 = source;
    this.$L_0 = key;
    this.$1S_0 = referenceData;
}
Microsoft.Crm.Workflow.ObjectModel.DataValue.prototype = {
    get_source: function() {
        return this.$Z_0;
    },

    get_key: function() {
        return this.$L_0;
    },

    get_type: function() {
        return this.$1h_0;
    },

    get_referenceData: function() {
        return this.$1S_0;
    },

    getDisplayName: function(cultureInfo) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!this.$Z_0, 'Source should be non null in GetDisplayName');
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.$x_0)) {
            this.$x_0 = this.$Z_0.getLocalizedNameForDataValue(this, cultureInfo);
        }
        return this.$x_0;
    },

    get_name: function() {
        return this.$1d_0;
    },

    $1h_0: 0,
    $Z_0: null,
    $L_0: null,
    $x_0: null,
    $1d_0: null,
    $1S_0: null
}


Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess = function() {
}
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$$cctor = function() {
    Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
        .$X['!Process_Custom_Attribute_URL_'] = 'Dialog.CustomAttribute.URL.DisplayName';
    Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
        .$X['!Process_Custom_Attribute_PostURL_'] = 'ActivityFeeds.CustomAttribute.PostURL.DisplayName';
}
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.getAttribute = function(key) {
    return Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$X[key];
}
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.containsKey = function(key) {
    return ((key) in Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$X);
}
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.get_keys = function() {
    return _Dictionary.keys(Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$X);
}


Microsoft.Crm.Workflow.ObjectModel
    .EntityDataSource = function(entitySource, isRestrictiveAttributeListDefined, restrictiveAttributeList) {
        this.$6_0 = entitySource;
        this.$q_0 = isRestrictiveAttributeListDefined;
        if (this.$q_0 && (restrictiveAttributeList)) {
            this.$c_0 = new (Sales.Common.Framework.List$1.$$(String))();
            for (var $v_0 = 0; $v_0 < restrictiveAttributeList.length; $v_0++) {
                this.$c_0.add(restrictiveAttributeList[$v_0]);
            }
        }
    }
Microsoft.Crm.Workflow.ObjectModel.EntityDataSource.prototype = {
    getLocalizedName: function(cultureInfo) {
        return this.$6_0.getLocalizedName(cultureInfo);
    },

    getLocalizedNameForDataValue: function(value, cultureInfo) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(value.$Z_0 === this, 'Data value does not belong to this data source');
        var $v_0 = value.$L_0.split('.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert($v_0.length > 0, 'DataValue key expected');
        var $v_1 = $v_0[$v_0.length - 1];
        if (Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.containsKey($v_1)) {
            return this.$6_0.$0_0.$9_2.getResourceString(Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
                .getAttribute($v_1));
        }
        return this.$6_0.$0_0.$9_2.getAttributeLocalizedName(cultureInfo, this.$6_0.entityName, $v_1);
    },

    get_name: function() {
        return this.$6_0.entityName;
    },

    get_key: function() {
        return this.$6_0.get_uiXmlName();
    },

    getDataValues: function(valueType) {
        try {
            if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.$6_0.entityName)) {
                var $v_0 = this.$6_0.$0_0.$9_2.getAttributesByType(this.$6_0.entityName, valueType);
                var $v_1 = this.$1a_0(this.$1e_0($v_0));
                return this.$1k_0(valueType, $v_1);
            }
        } catch ($$e_3) {
        }
        return new Microsoft.Crm.Workflow.ObjectModel.DataValueCollection();
    },

    getLookupDataValues: function(objectTypeCode) {
        try {
            if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.$6_0.entityName)) {
                var $v_0 = this.$6_0.$0_0.$9_2.getLookupAttributes(this.$6_0.entityName, objectTypeCode);
                return this.$1a_0(this.$1e_0($v_0));
            }
        } catch ($$e_2) {
        }
        return new Microsoft.Crm.Workflow.ObjectModel.DataValueCollection();
    },

    get_entitySource: function() {
        return this.$6_0;
    },

    $1e_0: function($p0) {
        if (this.$q_0 && (this.$c_0)) {
            var $v_0 = new (Sales.Common.Framework.List$1.$$(String))();
            for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_2 = $$arr_2[$$idx_4];
                var $v_3 = $v_2.split(';');
                var $v_4 = $v_3[0];
                if (this.$c_0.contains($v_4)) {
                    $v_0.add($v_2);
                }
            }
            var $v_1 = new (Sales.Common.Framework.List$1.$$(String))();
            $v_1.addRange($v_0.toArray());
            return $v_1.toArray();
        }
        return $p0;
    },

    $1a_0: function($p0) {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.DataValueCollection();
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            var $v_2 = '';
            var $v_3 = $v_1.split(';');
            var $v_4 = $v_3[0];
            if ($v_3.length > 1) {
                $v_2 = $v_3[1];
            }
            $v_0.add(new Microsoft.Crm.Workflow.ObjectModel
                .DataValue(this, this.$6_0.get_uiXmlName() + '.' + $v_4, $v_2));
        }
        return $v_0;
    },

    $1k_0: function($p0, $p1) {
        if (14 === $p0) {
            for (var $$arr_2 = Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.get_keys(),
                $$len_3 = $$arr_2.length,
                $$idx_4 = 0;
                $$idx_4 < $$len_3;
                ++$$idx_4) {
                var $v_0 = $$arr_2[$$idx_4];
                $p1.add(new Microsoft.Crm.Workflow.ObjectModel
                    .DataValue(this, this.$6_0.get_uiXmlName() + '.' + $v_0, ''));
            }
        }
        return $p1;
    },

    $6_0: null,
    $q_0: false,
    $c_0: null
}


Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep = function(workflowStep) {
    this.inputs = new Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary();
    Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'ChildInteractiveWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep.$1y = function($p0, $p1) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('{');
    $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('key', $p0, false));
    $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('value', $p1, true));
    $v_0.append('}');
    return $v_0.toString();
}
Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep.$1x = function($p0, $p1) {
    var $v_0 = new Sys.StringBuilder();
    if (!$p1.length) {
        return $v_0.toString();
    }
    $v_0.append($p1[0]);
    for (var $v_1 = 1; $v_1 < $p1.length; $v_1++) {
        $v_0.append($p0);
        $v_0.append($p1[$v_1]);
    }
    return $v_0.toString();
}
Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep.prototype = {
    apply: function(visitor) {
        visitor.visitChildInteractiveWorkflowStep(this);
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_childWorkflow: function() {
        return this.childWorkflow;
    },

    set_childWorkflow: function(value) {
        this.childWorkflow = value;
        return value;
    },

    get_inputs: function() {
        return this.inputs;
    },

    entity: null,
    childWorkflow: null,
    $12_1: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        if (this.childWorkflow) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('childWorkflow', this.childWorkflow.toJson(), true));
        }
        if (this.inputs) {
            var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
            for (var $$arr_2 = this.inputs.get_keys(), $$len_3 = $$arr_2.length, $$idx_4 = 0;
                $$idx_4 < $$len_3;
                ++$$idx_4) {
                var $v_3 = $$arr_2[$$idx_4];
                $v_1.add(Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep
                    .$1y($v_3.toJson(), this.inputs.get_item($v_3).toJson()));
            }
            var $v_2 = '[' +
                Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep.$1x(',', $v_1.toArray()) +
                ']';
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('inputsSerialized', $v_2, true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (!deserialized) {
            return;
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
        var $v_0 = deserialized;
        if ($v_0.entity) {
            this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
            this.entity.initializeFromDynamic($v_0.entity);
        }
        if ($v_0.childWorkflow) {
            this.childWorkflow = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                .buildExpression($v_0.childWorkflow.__class);
            this.childWorkflow.initializeFromDynamic($v_0.childWorkflow);
        }
        if ($v_0.$12_1) {
            for (var $v_1 = 0; $v_1 < $v_0.$12_1.length; $v_1++) {
                var $v_2 = $v_0.$12_1[$v_1];
                var $v_3 = $v_2['value'];
                var $v_4 = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo();
                $v_4.initializeFromDynamic($v_2['key']);
                var $v_5 = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_3['__class']);
                $v_5.initializeFromDynamic($v_3);
                this.inputs.set_item($v_4, $v_5);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'InteractionPageStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep.prototype = {
    apply: function(visitor) {
        visitor.visitInteractionPageStep(this);
    },

    $s_2: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('allowBack', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.$s_2), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic.call(this, $v_0);
            this.$s_2 = $v_0.$s_2;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.InteractionStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.InteractionStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'InteractionStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.InteractionStep.prototype = {
    get_promptText: function() {
        return this.promptText;
    },

    set_promptText: function(value) {
        this.promptText = value;
        return value;
    },

    get_hintText: function() {
        return this.hintText;
    },

    set_hintText: function(value) {
        this.hintText = value;
        return value;
    },

    get_logResponse: function() {
        return this.logResponse;
    },

    set_logResponse: function(value) {
        this.logResponse = value;
        return value;
    },

    get_isResponseMetadataBound: function() {
        return this.isResponseMetadataBound;
    },

    set_isResponseMetadataBound: function(value) {
        this.isResponseMetadataBound = value;
        return value;
    },

    get_staticResponseValues: function() {
        return this.staticResponseValues;
    },

    set_staticResponseValues: function(value) {
        this.staticResponseValues = value;
        return value;
    },

    get_defaultResponseValue: function() {
        return this.defaultResponseValue;
    },

    set_defaultResponseValue: function(value) {
        this.defaultResponseValue = value;
        return value;
    },

    get_attributeList: function() {
        return this.attributeList;
    },

    set_attributeList: function(value) {
        this.attributeList = value;
        return value;
    },

    get_queryVariableName: function() {
        return this.queryVariableName;
    },

    set_queryVariableName: function(value) {
        this.queryVariableName = value;
        return value;
    },

    get_queryEntityName: function() {
        return this.queryEntityName;
    },

    set_queryEntityName: function(value) {
        this.queryEntityName = value;
        return value;
    },

    get_attributeDelimiter: function() {
        return this.attributeDelimiter;
    },

    set_attributeDelimiter: function(value) {
        this.attributeDelimiter = value;
        return value;
    },

    get_parent: function() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep.isInstanceOfType(value))) {
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    apply: function(visitor) {
        visitor.visitInteractionStep(this);
    },

    promptText: null,
    hintText: null,
    logResponse: false,
    responseContainerType: 0,
    responseMetadataType: 0,
    staticResponseValues: null,
    defaultResponseValue: null,
    attributeList: null,
    queryVariableName: null,
    queryEntityName: null,
    attributeDelimiter: null,
    isResponseMetadataBound: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.promptText) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('promptText', this.promptText.toJson(), true));
        }
        if (this.hintText) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('hintText', this.hintText.toJson(), true));
        }
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('logResponse',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.logResponse),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('responseContainerType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.responseContainerType),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('responseMetadataType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.responseMetadataType),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('staticResponseValues', this.staticResponseValues, true));
        if (this.defaultResponseValue) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('defaultResponseValue', this.defaultResponseValue.toJson(), true));
        }
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeList', this.attributeList, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('queryVariableName', this.queryVariableName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('queryEntityName', this.queryEntityName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeDelimiter', this.attributeDelimiter, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isResponseMetadataBound',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isResponseMetadataBound),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('InteractionResponsePostfix', '_interactionResponseValue', true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.promptText) {
                this.promptText = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.promptText.__class);
                this.promptText.initializeFromDynamic($v_0.promptText);
            }
            if ($v_0.hintText) {
                this.hintText = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.hintText.__class);
                this.hintText.initializeFromDynamic($v_0.hintText);
            }
            this.logResponse = $v_0.logResponse;
            this.responseContainerType = $v_0.responseContainerType;
            this.responseMetadataType = $v_0.responseMetadataType;
            this.staticResponseValues = Microsoft.Crm.Workflow.Utils.StringUtility
                .reduceToCanonicalForm($v_0.staticResponseValues);
            if ($v_0.defaultResponseValue) {
                this.defaultResponseValue = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.defaultResponseValue.__class);
                this.defaultResponseValue.initializeFromDynamic($v_0.defaultResponseValue);
            }
            this.attributeList = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.attributeList);
            this.queryVariableName = Microsoft.Crm.Workflow.Utils.StringUtility
                .reduceToCanonicalForm($v_0.queryVariableName);
            this.queryEntityName = Microsoft.Crm.Workflow.Utils.StringUtility
                .reduceToCanonicalForm($v_0.queryEntityName);
            this.attributeDelimiter = Microsoft.Crm.Workflow.Utils.StringUtility
                .reduceToCanonicalForm($v_0.attributeDelimiter);
            this.isResponseMetadataBound = $v_0.isResponseMetadataBound;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary = function() {
    this.$n_0 = {};
}
Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary.prototype = {
    get_item: function(key) {
        var $v_0 = key.toJson();
        if ((($v_0) in this.$n_0)) {
            return null;
        }
        return (this.$n_0[$v_0]).$o_0;
    },

    set_item: function(key, value) {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary.Wrapper();
        $v_0.$L_0 = key;
        $v_0.$o_0 = value;
        this.$n_0[key.toJson()] = $v_0;
        return value;
    },

    get_keys: function() {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo))();
        var $$dict_2 = this.$n_0;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0.add(($v_1.value).$L_0);
        }
        return $v_0.toArray();
    }
}


Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary.Wrapper = function() {
}
Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary.Wrapper.prototype = {
    $L_0: null,
    $o_0: null,

    get_key: function() {
        return this.$L_0;
    },

    set_key: function($p0) {
        this.$L_0 = $p0;
        return $p0;
    },

    get_value: function() {
        return this.$o_0;
    },

    set_value: function($p0) {
        this.$o_0 = $p0;
        return $p0;
    }
}


Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes = function() {
}


Microsoft.Crm.Workflow.ObjectModel.BaseDictionary = function() {
    this.dict = {};
}
Microsoft.Crm.Workflow.ObjectModel.BaseDictionary.prototype = {
    get_count: function() {
        var $v_0 = 0;
        var $$enum_2 = this.dict.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            $v_0++;
        }
        return $v_0;
    },

    remove: function(entry) {
        delete this.dict[entry];
    },

    containsKey: function(id) {
        return ((id) in this.dict);
    }
}


Microsoft.Crm.Workflow.ObjectModel.JsonBuilder = function() {
}
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson = function(propertyName, propertyValue, prependComma) {
    var $v_0 = JSON.stringify(propertyValue);
    return ((prependComma) ? ',' : '') +
        Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getQuotedString(propertyName) +
        ':' +
        $v_0;
}
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getQuotedString = function(propertyName) {
    return '\"' + propertyName + '\"';
}
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson = function(propertyName, propertyValueJson, prependComma) {
    return ((prependComma) ? ',' : '') +
        Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getQuotedString(propertyName) +
        ':' +
        propertyValueJson;
}
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getListJson = function(json) {
    return '{\"list\":[' + json + ']}';
}
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson = function(value) {
    return (value) ? 'true' : 'false';
}


Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory = function() {
}
Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory.$1m = function($p0, $p1) {
    switch ($p0) {
    default:
        return new Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters($p0);
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase = function() {
}


Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary = function() {
    Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary.initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary.prototype = {
    get_item: function(id) {
        return this.dict[id];
    },

    set_item: function(id, value) {
        this.dict[id] = value;
        return value;
    }
}


Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters = function(workflowCategory) {
    this.$h_0 = false;
    this.$r_0 = false;
    this.resetTriggers();
    this.resetTriggerConditions();
    this.$17_0 = 4;
    this.$T_0 = workflowCategory;
    this.$Y_0 = 0;
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters.prototype = {
    get_allAttributesSelected: function() {
        return this.$r_0;
    },

    set_allAttributesSelected: function(value) {
        this.$r_0 = value;
        return value;
    },

    get_isTemplate: function() {
        return this.$h_0;
    },

    set_isTemplate: function(value) {
        this.$h_0 = value;
        return value;
    },

    get_triggers: function() {
        return this.$W_0;
    },

    set_triggers: function(value) {
        this.$W_0 = value;
        return value;
    },

    get_isCrmUIWorkflow: function() {
        return this.$1M_0;
    },

    set_isCrmUIWorkflow: function(value) {
        this.$1M_0 = value;
        return value;
    },

    get_triggerConditions: function() {
        return this.$P_0;
    },

    set_triggerConditions: function(value) {
        this.$P_0 = value;
        return value;
    },

    get_scope: function() {
        return this.$17_0;
    },

    set_scope: function(value) {
        this.$17_0 = value;
        return value;
    },

    get_workflowCategory: function() {
        return this.$T_0;
    },

    set_workflowCategory: function(value) {
        this.$T_0 = value;
        return value;
    },

    get_workflowMode: function() {
        return this.$Y_0;
    },

    set_workflowMode: function(value) {
        this.$Y_0 = value;
        return value;
    },

    get_workflowRendererObjectTypeCode: function() {
        return this.$1T_0;
    },

    set_workflowRendererObjectTypeCode: function(value) {
        this.$1T_0 = value;
        return value;
    },

    get_asyncAutoDelete: function() {
        return this.$1H_0;
    },

    set_asyncAutoDelete: function(value) {
        this.$1H_0 = value;
        return value;
    },

    get_syncWorkflowLogOnFailure: function() {
        return this.$1W_0;
    },

    set_syncWorkflowLogOnFailure: function(value) {
        this.$1W_0 = value;
        return value;
    },

    get_updateAttributeList: function() {
        return this.$D_0;
    },

    set_updateAttributeList: function(value) {
        if (!value) {
            value = '';
        }
        this.$D_0 = value;
        return value;
    },

    get_updateAttributeListForSdk: function() {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.$D_0)) {
            return this.$D_0;
        }
        var $v_0 = new RegExp(';', 'g');
        return this.$D_0.replace($v_0, ',');
    },

    get_isAsyncWorkflow: function() {
        if (0 === this.$T_0 && 0 === this.$Y_0) {
            return true;
        }
        return false;
    },

    get_isSyncWorkflow: function() {
        if (0 === this.$T_0 && 1 === this.$Y_0) {
            return true;
        }
        return false;
    },

    get_isCustomOperation: function() {
        if (3 === this.$T_0) {
            return true;
        }
        return false;
    },

    addTrigger: function(trigger) {
        this.$W_0 |= trigger;
    },

    addTriggerCondition: function(condition) {
        this.$P_0 |= condition;
    },

    resetTriggers: function() {
        this.$W_0 = 0;
    },

    resetTriggerConditions: function() {
        this.$P_0 = 0;
        this.set_updateAttributeList('');
    },

    containsTrigger: function(trigger) {
        return (this.$W_0 & trigger) === trigger;
    },

    containsTriggerCondition: function(condition) {
        return (this.$P_0 & condition) === condition;
    },

    setDefaultParameters: function() {
        this.$h_0 = false;
        this.$W_0 = 2;
        this.$P_0 = 2;
    },

    containsUpdateTriggerCondition: function() {
        var $v_0;
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.$D_0)) {
            $v_0 = false;
        } else if (Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.$D_0, 'statecode') ||
            Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.$D_0, 'ownerid') ||
            Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.$D_0, 'statecode;ownerid') ||
            Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this.$D_0, 'ownerid;statecode')) {
            $v_0 = false;
        } else {
            $v_0 = true;
        }
        return $v_0;
    },

    removeTriggerCondition: function(condition) {
        this.$P_0 &= ~condition;
    },

    $h_0: false,
    $1M_0: false,
    $W_0: 0,
    $P_0: 0,
    $D_0: null,
    $r_0: false,
    $1H_0: false,
    $1W_0: false,
    $17_0: 0,
    $T_0: 0,
    $Y_0: 0,
    $1T_0: null
}


Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'CustomJavascriptStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.prototype = {
    javascript: null,

    get_javascript: function() {
        return this.javascript;
    },

    set_javascript: function(value) {
        this.javascript = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitCustomJavascriptStep(this);
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('javascript', this.javascript, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.javascript = $v_0.javascript;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep = function(workflowStep, propSpec) {
    Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.initializeBase(this);
    this.__class = 'SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel';
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.set_propertySpec(propSpec);
}
Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.prototype = {
    get_propertySpec: function() {
        return this.specification;
    },

    set_propertySpec: function(value) {
        this.specification = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        this.entity = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetAttributeValueStep(this);
    },

    specification: null,
    entity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.specification) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('specification', this.specification.toJson(), true));
        }
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.specification) {
            this.specification.$1J_0(this.$0_0);
        }
        this.entity.fixInternalLinks(this.$0_0);
    },

    initializeFromDynamic: function(deserialized) {
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


Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep = function(workflowStep, propSpec) {
    Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SetDefaultValueStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.set_propertySpec(propSpec);
}
Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep.prototype = {
    get_propertySpec: function() {
        return this.specification;
    },

    set_propertySpec: function(value) {
        this.specification = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        this.entity = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetDefaultValueStep(this);
    },

    specification: null,
    entity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('specification', this.specification.toJson(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        this.specification.$1J_0(this.$0_0);
        this.entity.fixInternalLinks(this.$0_0);
    },

    initializeFromDynamic: function(deserialized) {
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


Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep.prototype = {
    get_controlType: function() {
        return this.controlType;
    },

    set_controlType: function(value) {
        this.controlType = value;
        return value;
    },

    get_controlId: function() {
        return this.controlId;
    },

    set_controlId: function(value) {
        this.controlId = value;
        return value;
    },

    get_isReadOnly: function() {
        return this.isReadOnly;
    },

    set_isReadOnly: function(value) {
        this.isReadOnly = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        this.entity = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetDisplayModeStep(this);
    },

    controlId: null,
    controlType: null,
    isReadOnly: false,
    entity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType', this.controlType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isReadOnly',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this
                    .isReadOnly),
                true));
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.controlId = $v_0.controlId;
            this.controlType = $v_0.controlType;
            this.isReadOnly = $v_0.isReadOnly;
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep.prototype = {
    get_controlType: function() {
        return this.controlType;
    },

    set_controlType: function(value) {
        this.controlType = value;
        return value;
    },

    get_controlId: function() {
        return this.controlId;
    },

    set_controlId: function(value) {
        this.controlId = value;
        return value;
    },

    get_isVisible: function() {
        return this.isVisible;
    },

    set_isVisible: function(value) {
        this.isVisible = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        this.entity = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetVisibilityStep(this);
    },

    controlId: null,
    controlType: null,
    isVisible: false,
    entity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType', this.controlType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isVisible', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isVisible), true));
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.controlId = $v_0.controlId;
            this.controlType = $v_0.controlType;
            this.isVisible = $v_0.isVisible;
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetMessageStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetMessageStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.actionSteps = new Microsoft.Crm.Workflow.ObjectModel.StepCollection();
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetMessageStep.prototype = {
    get_controlId: function() {
        return this.controlId;
    },

    set_controlId: function(value) {
        this.controlId = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        this.entity = value;
        return value;
    },

    get_level: function() {
        return this.level;
    },

    set_level: function(value) {
        this.level = value;
        return value;
    },

    get_ActionSteps: function() {
        return this.actionSteps;
    },

    set_ActionSteps: function(value) {
        this.actionSteps = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetMessageStep(this);
    },

    controlId: null,
    entity: null,
    level: null,
    actionSteps: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('actionSteps', this.actionSteps.toJson(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('level', this.level, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.actionSteps) {
            for (var $v_0 = 0; $v_0 < this.actionSteps.get_Count(); $v_0++) {
                var $v_1 = this.actionSteps.get_item($v_0);
                $v_1.set_parent(this);
                $v_1.$0_0.stepDictionary.set_item($v_1.id, $v_1);
                $v_1.fixInternalLinks();
            }
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.actionSteps) {
                for (var $v_1 = 0; $v_1 < $v_0.actionSteps.list.length; $v_1++) {
                    var $v_2 = $v_0.actionSteps.list[$v_1];
                    var $v_3 = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep($v_2.__class);
                    $v_3.initializeFromDynamic($v_2);
                    this.actionSteps.add($v_3);
                }
            }
            this.controlId = $v_0.controlId;
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
            this.level = $v_0.level;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SetNextStageStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep.prototype = {
    get_parentStageId: function() {
        return this.parentStageId;
    },

    set_parentStageId: function(value) {
        this.parentStageId = value;
        return value;
    },

    get_stageId: function() {
        return this.stageId;
    },

    set_stageId: function(value) {
        this.stageId = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetNextStageStep(this);
    },

    stageId: null,
    parentStageId: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stageId', this.stageId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('parentStageId', this.parentStageId, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.stageId = $v_0.stageId;
            this.parentStageId = $v_0.parentStageId;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep.prototype = {
    get_controlId: function() {
        return this.controlId;
    },

    set_controlId: function(value) {
        this.controlId = value;
        return value;
    },

    get_controlType: function() {
        return this.controlType;
    },

    set_controlType: function(value) {
        this.controlType = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        this.entity = value;
        return value;
    },

    get_requiredLevel: function() {
        return this.requiredLevel;
    },

    set_requiredLevel: function(value) {
        this.requiredLevel = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetFieldRequiredLevelStep(this);
    },

    controlId: null,
    controlType: null,
    requiredLevel: 0,
    entity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType', this.controlType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('requiredLevel',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.requiredLevel),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
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


Microsoft.Crm.Workflow.ObjectModel.QueryStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.QueryStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'QueryStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.QueryStep.prototype = {
    get_fetchExpression: function() {
        return this.fetchExpression;
    },

    set_fetchExpression: function(value) {
        this.fetchExpression = value;
        return value;
    },

    get_fetchCount: function() {
        return this.fetchCount;
    },

    set_fetchCount: function(value) {
        this.fetchCount = value;
        return value;
    },

    get_attributeList: function() {
        return this.attributeList;
    },

    set_attributeList: function(value) {
        this.attributeList = value;
        return value;
    },

    get_originalFetchXml: function() {
        return this.originalFetchXml;
    },

    set_originalFetchXml: function(value) {
        this.originalFetchXml = value;
        return value;
    },

    get_originalLayoutXml: function() {
        return this.originalLayoutXml;
    },

    set_originalLayoutXml: function(value) {
        this.originalLayoutXml = value;
        return value;
    },

    get_entityName: function() {
        return this.entityName;
    },

    set_entityName: function(value) {
        this.entityName = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitQueryStep(this);
    },

    fetchExpression: null,
    fetchCount: 0,
    attributeList: null,
    entityName: null,
    originalFetchXml: '',
    originalLayoutXml: '',

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.fetchExpression) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('fetchExpression', this.fetchExpression.toJson(), true));
        }
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('fetchCount', this.fetchCount + '', true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeList', this.attributeList, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('entityName', this.entityName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('originalFetchXml', this.originalFetchXml, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('originalLayoutXml', this.originalLayoutXml, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.fetchExpression) {
                this.fetchExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.fetchExpression.__class);
                this.fetchExpression.initializeFromDynamic($v_0.fetchExpression);
            }
            if ($v_0.fetchCount) {
                this.fetchCount = Number.parseInvariant((deserialized)['fetchCount']);
            }
            if ($v_0.attributeList) {
                this.attributeList = $v_0.attributeList;
            }
            if ($v_0.entityName) {
                this.entityName = $v_0.entityName;
            }
            if ($v_0.originalFetchXml) {
                this.originalFetchXml = $v_0.originalFetchXml;
            }
            if ($v_0.originalLayoutXml) {
                this.originalLayoutXml = $v_0.originalLayoutXml;
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'RollupRuleStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
}
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.prototype = {
    get_sourceFilter: function() {
        return this.sourceFilter;
    },

    set_sourceFilter: function(value) {
        this.sourceFilter = value;
        return value;
    },

    get_hierarchicalRelationshipName: function() {
        return this.hierarchicalRelationshipName;
    },

    set_hierarchicalRelationshipName: function(value) {
        this.hierarchicalRelationshipName = value;
        return value;
    },

    get_isHierarchical: function() {
        return !!this.hierarchicalRelationshipName && !!this.hierarchicalRelationshipName.length;
    },

    get_targetFilter: function() {
        return this.targetFilter;
    },

    set_targetFilter: function(value) {
        this.targetFilter = value;
        return value;
    },

    get_targetLinkedFilter: function() {
        return this.targetLinkedFilter;
    },

    set_targetLinkedFilter: function(value) {
        this.targetLinkedFilter = value;
        return value;
    },

    get_targetRelationship: function() {
        return this.targetRelationship;
    },

    set_targetRelationship: function(value) {
        this.targetRelationship = value;
        return value;
    },

    get_targetRelationshipLinked: function() {
        return this.targetRelationshipLinked;
    },

    set_targetRelationshipLinked: function(value) {
        this.targetRelationshipLinked = value;
        return value;
    },

    get_aggregate: function() {
        return this.aggregate;
    },

    set_aggregate: function(value) {
        this.aggregate = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitRollupRuleStep(this);
    },

    hierarchicalRelationshipName: null,
    sourceFilter: null,
    targetRelationship: null,
    targetRelationshipLinked: null,
    targetFilter: null,
    targetLinkedFilter: null,
    aggregate: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.sourceFilter) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('sourceFilter', this.sourceFilter.toJson(), true));
        }
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('hierarchicalRelationshipName', this.hierarchicalRelationshipName, true));
        if (this.targetFilter) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetFilter', this.targetFilter.toJson(), true));
        }
        if (this.targetRelationship) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetRelationship', this.targetRelationship.toJson(), true));
        }
        if (this.targetLinkedFilter) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetLinkedFilter', this.targetLinkedFilter.toJson(), true));
        }
        if (this.targetRelationshipLinked) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetRelationshipLinked', this.targetRelationshipLinked.toJson(), true));
        }
        if (this.aggregate) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('aggregate', this.aggregate.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.sourceFilter) {
            this.sourceFilter.fixInternalLinks(this.$0_0);
        }
        if (this.targetFilter) {
            this.targetFilter.fixInternalLinks(this.$0_0);
        }
        if (this.targetRelationship) {
            this.targetRelationship.fixInternalLinks(this.$0_0);
        }
        if (this.targetLinkedFilter) {
            this.targetLinkedFilter.fixInternalLinks(this.$0_0);
        }
        if (this.targetRelationshipLinked) {
            this.targetRelationshipLinked.fixInternalLinks(this.$0_0);
        }
        if (this.aggregate) {
            this.aggregate.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.hierarchicalRelationshipName = $v_0.hierarchicalRelationshipName;
            if ($v_0.sourceFilter) {
                this.sourceFilter = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.sourceFilter.__class);
                this.sourceFilter.initializeFromDynamic($v_0.sourceFilter);
            }
            if ($v_0.targetRelationship) {
                this.targetRelationship = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity($v_0.targetRelationship.__class);
                this.targetRelationship.initializeFromDynamic($v_0.targetRelationship);
            }
            if ($v_0.targetFilter) {
                this.targetFilter = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.targetFilter.__class);
                this.targetFilter.initializeFromDynamic($v_0.targetFilter);
            }
            if ($v_0.targetRelationshipLinked) {
                this.targetRelationshipLinked = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity($v_0.targetRelationshipLinked.__class);
                this.targetRelationshipLinked.initializeFromDynamic($v_0.targetRelationshipLinked);
            }
            if ($v_0.targetLinkedFilter) {
                this.targetLinkedFilter = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.targetLinkedFilter.__class);
                this.targetLinkedFilter.initializeFromDynamic($v_0.targetLinkedFilter);
            }
            if ($v_0.aggregate) {
                this.aggregate = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.aggregate.__class);
                this.aggregate.initializeFromDynamic($v_0.aggregate);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase = function() {
    Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase.initializeBase(this);
}


Microsoft.Crm.Workflow.ObjectModel.SendEmailStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SendEmailStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SendEmailStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SendEmailStep.prototype = {
    apply: function(visitor) {
        visitor.visitSendEmailStep(this);
    },

    get_regardingEntity: function() {
        return this.regardingEntity;
    },

    set_regardingEntity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.regardingEntity = value;
        return value;
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!value, 'Entity specification value cannot be set to null');
        this.entity = value;
        return value;
    },

    get_sendEmailStepType: function() {
        return this.sendEmailType;
    },

    set_sendEmailStepType: function(value) {
        this.sendEmailType = value;
        return value;
    },

    get_emailTemplateId: function() {
        return this.emailTemplateId;
    },

    set_emailTemplateId: function(value) {
        this.emailTemplateId = value;
        return value;
    },

    sendEmailType: 0,
    entity: null,
    emailTemplateId: null,
    regardingEntity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('sendEmailType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.sendEmailType),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('emailTemplateId', this.emailTemplateId.toString(), true));
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        if (this.regardingEntity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('regardingEntity', this.regardingEntity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.regardingEntity) {
            this.regardingEntity.fixInternalLinks(this.$0_0);
        }
        if (this.entity) {
            this.entity.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.emailTemplateId = $v_0.emailTemplateId;
            this.sendEmailType = parseInt($v_0.sendEmailType);
            if ($v_0.entity) {
                this.entity = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                this.entity.initializeFromDynamic($v_0.entity);
            }
            if ($v_0.regardingEntity) {
                this.regardingEntity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity($v_0.regardingEntity.__class);
                this.regardingEntity.initializeFromDynamic($v_0.regardingEntity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.SetStateStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.SetStateStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'SetStateStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.SetStateStep.prototype = {
    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_state: function() {
        return this.state;
    },

    set_state: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'State');
        this.state = value;
        return value;
    },

    get_status: function() {
        return this.status;
    },

    set_status: function(value) {
        this.status = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitSetStateStep(this);
    },

    entity: null,
    state: null,
    status: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.state) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('state', this.state.toJson(), true));
        }
        if (this.status) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('status', this.status.toJson(), true));
        }
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entity) {
            this.entity.fixInternalLinks(this.$0_0);
        }
        if (this.state) {
            this.state.fixInternalLinks(this.$0_0);
        }
        if (this.status) {
            this.status.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.status) {
                this.status = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.status.__class);
                this.status.initializeFromDynamic($v_0.status);
            }
            if ($v_0.state) {
                this.state = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_0.state.__class);
                this.state.initializeFromDynamic($v_0.state);
            }
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StageStep = function(workflowStep, stageName) {
    Microsoft.Crm.Workflow.ObjectModel.StageStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(stageName, 'stageName');
    this.__class = 'StageStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep.$3_2());
    this.set_stageName(stageName);
}
Microsoft.Crm.Workflow.ObjectModel.StageStep.prototype = {
    get_stageName: function() {
        return this.description;
    },

    set_stageName: function(value) {
        this.description = value;
        return value;
    },

    get_nextStageId: function() {
        return this.nextStageId;
    },

    set_nextStageId: function(value) {
        this.nextStageId = value;
        return value;
    },

    get_stageId: function() {
        return this.stageId;
    },

    set_stageId: function(value) {
        this.stageId = value;
        return value;
    },

    get_stageCategory: function() {
        return this.stageCategory;
    },

    set_stageCategory: function(value) {
        this.stageCategory = value;
        return value;
    },

    get_clientProperties: function() {
        return this.clientProperties;
    },

    set_clientProperties: function(value) {
        this.clientProperties = value;
        return value;
    },

    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)),
                'Cannot add ConditionBranchStep directly to StageStep. It should be first added to ConditionStep.');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    apply: function(visitor) {
        visitor.visitStageStep(this);
    },

    getStageStepWithStageId: function(id) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(id)) {
            return null;
        }
        if (id === this.stageId) {
            return this;
        }
        for (var $v_0 = 0; $v_0 < this.$0_0.steps.getArrayList().length; $v_0++) {
            var $v_1 = this.$0_0.steps.getArrayList()[$v_0];
            if ($v_1) {
                var $v_2 = $v_1.steps.get_item(0);
                if ($v_2 && $v_2.stageId === id) {
                    return $v_2;
                }
            }
        }
        return null;
    },

    stageId: null,
    nextStageId: null,
    stageCategory: null,
    clientProperties: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        this.appendToJson($v_0);
        $v_0.append('}');
        return $v_0.toString();
    },

    appendToJson: function(sb) {
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stageId', this.stageId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('nextStageId', this.nextStageId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('stageCategory', this.stageCategory, true));
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            this.stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.stageId);
            this.nextStageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.nextStageId);
            this.stageCategory = $v_0.stageCategory;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepBase = function() {
    this.stepLabels = new Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection();
}
Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype = {
    get_Id: function() {
        return this.id;
    },

    set_Id: function(value) {
        this.id = value;
        return value;
    },

    get_Name: function() {
        return this.name;
    },

    set_Name: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Name');
        this.name = value;
        return value;
    },

    get_Description: function() {
        return this.description;
    },

    set_Description: function(value) {
        this.description = value;
        return value;
    },

    get_parent: function() {
        return this.$1R_0;
    },

    set_parent: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        this.$1R_0 = value;
        this.set_workflow(this.get_parent().$0_0);
        return value;
    },

    get_workflow: function() {
        return this.$0_0;
    },

    set_workflow: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Workflow');
        if ((this.$0_0) && (this.$0_0 !== value)) {
            return value;
        }
        this.$0_0 = value;
        return value;
    },

    get_extensionObj: function() {
        return this.$1I_0;
    },

    set_extensionObj: function(value) {
        this.$1I_0 = value;
        return value;
    },

    get_stepLabels: function() {
        return this.stepLabels;
    },

    addLabel: function(stepLabel) {
        this.stepLabels.add(stepLabel);
    },

    addPeer: function(direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(newStep, 'newStep');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!this.get_parent(), 'Parent step is null');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(this.get_parent()),
                'Parent step is not a Composite Step');
        var $v_0 = this.get_parent();
        $v_0.insert(this, direction, newStep);
    },

    get_typeName: function() {
        return this.__class.substr(0, this.__class.indexOf(':#'));
    },

    $1n_0: function() {
        if (this.$0_0) {
            this.$0_0 = null;
        }
    },

    setNameAndId: function(stepId) {
        this.id = Object.getType(this).getName() + stepId;
        this.name = 'Step_' + stepId;
    },

    setJQueryFriendlyNameAndId: function(stepId) {
        var $v_0 = Object.getType(this).getName();
        var $v_1 = $v_0.lastIndexOf('.');
        $v_0 = $v_0.substring($v_1 + 1, $v_0.length);
        this.id = $v_0 + stepId;
        this.name = 'Step_' + stepId;
    },

    $1Z_0: function($p0) {
    },

    collectDataSourcesRecursive: function(step, referenceStep, includeReferenceStep, dataSources) {
        if (step.id !== referenceStep.id || includeReferenceStep) {
            if ((!step.$G_0) || step.$g_0) {
                step.$G_0 = new Microsoft.Crm.Workflow.DataSourceCollection();
                step.$1Z_0(step.$G_0);
                step.$g_0 = false;
            }
        }
        var $v_0 = false;
        if (step.id !== referenceStep.id && !$v_0) {
            dataSources.append(step.$G_0);
            if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(step)) {
                var $v_1 = step;
                for (var $v_2 = 0; $v_2 < $v_1.steps.get_Count(); $v_2++) {
                    var $v_3 = $v_1.steps.get_item($v_2);
                    if (!this.collectDataSourcesRecursive($v_3, referenceStep, includeReferenceStep, dataSources)) {
                        return false;
                    }
                }
            }
            return true;
        } else {
            if (includeReferenceStep) {
                dataSources.append(step.$G_0);
            }
            return false;
        }
    },

    get_dataSources: function() {
        if (!this.$G_0) {
            this.$G_0 = new Microsoft.Crm.Workflow.DataSourceCollection();
            this.$1Z_0(this.$G_0);
        }
        return this.$G_0;
    },

    get_isDataSourceDirty: function() {
        return this.$g_0;
    },

    set_isDataSourceDirty: function(value) {
        this.$g_0 = value;
        return value;
    },

    description: null,
    id: null,
    name: null,
    stepLabels: null,
    $G_0: null,
    $g_0: false,
    $1R_0: null,
    $0_0: null,
    $1I_0: null,
    __class: 'StepBase:#Microsoft.Crm.Workflow.ObjectModel',

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('id', this.id.toString(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('description', this.description, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.name, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('stepLabels', this.stepLabels.toJson(), true));
        return $v_0.toString();
    },

    fixLinks: function() {
        this.fixInternalLinks();
    },

    fixInternalLinks: function() {
        this.set_workflow(this.get_parent().$0_0);
    },

    initializeFromDynamic: function(deserialized) {
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


Microsoft.Crm.Workflow.ObjectModel.StepCollection = function() {
    this.$f_0 = new Sys.EventHandlerList();
    this.list = [];
}
Microsoft.Crm.Workflow.ObjectModel.StepCollection.prototype = {
    stepCollectionChangedEventHandler: null,

    add_stepCollectionChanged: function(value) {
        this.$f_0.addHandler('StepCollectionChanged', value);
    },

    remove_stepCollectionChanged: function(value) {
        this.$f_0.removeHandler('StepCollectionChanged', value);
    },

    $14_0: function($p0) {
        if (!this.$f_0) {
            return;
        }
        var $v_0 = this.$f_0.getHandler('StepCollectionChanged');
        if ($v_0) {
            $v_0(this, $p0);
        }
    },

    $11_0: function($p0, $p1) {
        var $v_0 = new (Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1
            .$$(Microsoft.Crm.Workflow.ObjectModel.StepBase))();
        $v_0.set_action($p0);
        $v_0.set_step($p1);
        $v_0.set_newItems($p1);
        return $v_0;
    },

    add: function(newStep) {
        Array.add(this.list, newStep);
        this.$14_0(this.$11_0(0, newStep));
    },

    remove: function(step) {
        var $v_0 = Array.indexOf(this.list, step);
        this.$1f_0(step);
        var $v_1 = this.$11_0(1, step);
        $v_1.set_oldStartingIndex($v_0);
        this.$14_0($v_1);
    },

    $1f_0: function($p0) {
        Array.remove(this.list, $p0);
    },

    get_Count: function() {
        return this.list.length;
    },

    get_item: function(index) {
        return this.getStep(index);
    },

    getStep: function(index) {
        return this.list[index];
    },

    indexOf: function(peer) {
        return Array.indexOf(this.list, peer);
    },

    insert: function(peerIndex, newStep) {
        Array.insert(this.list, peerIndex, newStep);
        var $v_0 = this.$11_0(0, newStep);
        $v_0.set_newStartingIndex(peerIndex);
        this.$14_0($v_0);
    },

    move: function(newIndex, stepBase) {
        var $v_0 = Array.indexOf(this.list, stepBase);
        this.$1f_0(stepBase);
        Array.insert(this.list, newIndex, stepBase);
        var $v_1 = this.$11_0(2, stepBase);
        $v_1.set_newStartingIndex(newIndex);
        $v_1.set_oldStartingIndex($v_0);
        this.$14_0($v_1);
    },

    contains: function(stepBase) {
        return Array.contains(this.list, stepBase);
    },

    getArrayList: function() {
        return this.list;
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{\"list\":[');
        if (this.get_Count() > 0) {
            $v_0.append(this.get_item(0).toJson());
            for (var $v_1 = 1; $v_1 < this.get_Count(); $v_1++) {
                $v_0.append(',');
                $v_0.append(this.get_item($v_1).toJson());
            }
        }
        $v_0.append(']}');
        return $v_0.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1 = function() {
    Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1
        .$$(this.$$gta['Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1']['TViewModel'])
        .initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1.$$ = function(TViewModel) {
    var $$cn = 'StepCollectionChangedEventArgs$1' + '$' + TViewModel.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Workflow.ObjectModel[$$cn]) {
        var $$ccr = Microsoft.Crm.Workflow.ObjectModel[$$cn] = function() {
            (this.$$gta = this
                    .$$gta ||
                    {})['Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1'] =
                { 'TViewModel': TViewModel };
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Workflow.ObjectModel.' + $$cn, Sys.EventArgs);
        var $$dict_5 = Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Workflow.ObjectModel[$$cn];
}
Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1.prototype = {
    $1G_1: 0,

    get_action: function() {
        return this.$1G_1;
    },

    set_action: function(value) {
        this.$1G_1 = value;
        return value;
    },

    $1V_1: null,

    get_step: function() {
        return this.$1V_1;
    },

    set_step: function(value) {
        this.$1V_1 = value;
        return value;
    },

    get_oldItems: function() {
        return this.$1P_1;
    },

    set_oldItems: function(value) {
        this.$1P_1 = value;
        return value;
    },

    get_newItems: function() {
        return this.$1N_1;
    },

    set_newItems: function(value) {
        this.$1N_1 = value;
        return value;
    },

    get_oldStartingIndex: function() {
        return this.$1Q_1;
    },

    set_oldStartingIndex: function(value) {
        this.$1Q_1 = value;
        return value;
    },

    get_newStartingIndex: function() {
        return this.$1O_1;
    },

    set_newStartingIndex: function(value) {
        this.$1O_1 = value;
        return value;
    },

    $1P_1: null,
    $1N_1: null,
    $1Q_1: 0,
    $1O_1: 0
}


Microsoft.Crm.Workflow.ObjectModel.StepDictionary = function() {
    Microsoft.Crm.Workflow.ObjectModel.StepDictionary.initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.StepDictionary.prototype = {
    get_item: function(id) {
        return this.dict[id];
    },

    set_item: function(id, value) {
        this.dict[id] = value;
        return value;
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepLabel = function() {
}
Microsoft.Crm.Workflow.ObjectModel.StepLabel.prototype = {
    get_labelId: function() {
        return this.labelId;
    },

    set_labelId: function(value) {
        this.labelId = value;
        return value;
    },

    get_languageCode: function() {
        return this.languageCode;
    },

    set_languageCode: function(value) {
        this.languageCode = value;
        return value;
    },

    get_description: function() {
        return this.description;
    },

    set_description: function(value) {
        this.description = value;
        return value;
    },

    labelId: null,
    languageCode: 0,
    description: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('labelId', this.labelId, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('languageCode',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.languageCode),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('description', this.description, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.labelId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.labelId);
            this.description = $v_0.description;
            this.languageCode = $v_0.languageCode;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection = function() {
    this.list = [];
}
Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection.prototype = {
    add: function(newStepLabel) {
        Array.add(this.list, newStepLabel);
    },

    remove: function(stepLabel) {
        Array.remove(this.list, stepLabel);
    },

    get_count: function() {
        return this.list.length;
    },

    get_item: function(index) {
        return this.list[index];
    },

    indexOf: function(peer) {
        return Array.indexOf(this.list, peer);
    },

    insert: function(peerIndex, newStepLabel) {
        Array.insert(this.list, peerIndex, newStepLabel);
    },

    contains: function(stepLabel) {
        return Array.contains(this.list, stepLabel);
    },

    toJson: function() {
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


Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.status = 0;
    this.message = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, '', 14);
    this.__class = 'StopWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep.prototype = {
    get_status: function() {
        return this.status;
    },

    set_status: function(value) {
        this.status = value;
        return value;
    },

    get_statusMessage: function() {
        return this.message;
    },

    set_statusMessage: function(value) {
        this.message = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitStopWorkflowStep(this);
    },

    status: 0,
    message: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('status',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this
                    .status),
                true));
        if (this.message) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('message', this.message.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.message) {
            this.message.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.status = parseInt($v_0.status);
            if ($v_0.message) {
                this.message = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.message.__class);
                this.message.initializeFromDynamic($v_0.message);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.PageStep = function(workflowStep, stageName) {
    Microsoft.Crm.Workflow.ObjectModel.PageStep.initializeBase(this, [workflowStep, stageName]);
    this.__class = 'PageStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.pageUniqueName = this.name;
}
Microsoft.Crm.Workflow.ObjectModel.PageStep.prototype = {
    get_pageLayoutId: function() {
        return this.pageLayoutId;
    },

    set_pageLayoutId: function(value) {
        this.pageLayoutId = value;
        return value;
    },

    get_pageUniqueName: function() {
        return this.pageUniqueName;
    },

    set_pageUniqueName: function(value) {
        this.pageUniqueName = value;
        return value;
    },

    get_defaultNextPageLayoutId: function() {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.defaultNextPageLayoutId)) {
            this.$21_3();
        }
        return this.defaultNextPageLayoutId;
    },

    set_defaultNextPageLayoutId: function(value) {
        this.defaultNextPageLayoutId = value;
        return value;
    },

    apply: function(visitor) {
        visitor.visitPageStep(this);
    },

    pageLayoutId: null,
    pageUniqueName: null,
    defaultNextPageLayoutId: null,

    appendToJson: function(sb) {
        Microsoft.Crm.Workflow.ObjectModel.StageStep.prototype.appendToJson.call(this, sb);
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('pageLayoutId', this.pageLayoutId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('pageUniqueName', this.pageUniqueName, true));
    },

    $21_3: function() {
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.nextStageId)) {
            var $v_0 = this.getStageStepWithStageId(this.nextStageId);
            if ($v_0) {
                this.defaultNextPageLayoutId = $v_0.pageLayoutId;
            }
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StageStep.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.pageLayoutId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.pageLayoutId);
            if ($v_0.pageUniqueName) {
                this.pageUniqueName = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm($v_0.pageUniqueName);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.UpdateStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.UpdateStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'UpdateStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.UpdateStep.prototype = {
    apply: function(visitor) {
        visitor.visitUpdateStep(this);
    },

    get_entity: function() {
        return this.entity;
    },

    set_entity: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_entitySpec: function() {
        return this.entitySpec;
    },

    set_entitySpec: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!value, 'Entity specification value cannot be set to null');
        this.entitySpec = value;
        return value;
    },

    entitySpec: null,
    entity: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.entitySpec) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entitySpec', this.entitySpec.toJson(), true));
        }
        if (this.entity) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entitySpec) {
            this.entitySpec.fixInternalLinks(this.$0_0);
        }
        if (this.entity) {
            this.entity.fixInternalLinks(this.$0_0);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.entitySpec) {
                this.entitySpec = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                this.entitySpec.initializeFromDynamic($v_0.entitySpec);
            }
            if ($v_0.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
                this.entity.initializeFromDynamic($v_0.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep = function(waitStep, conditionExpression) {
    Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(waitStep, 'waitStep');
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(conditionExpression, 'conditionExpression');
    this.setNameAndId(waitStep.$0_0.$3_2());
    this.conditionExpression = conditionExpression;
    this.__class = 'WaitBranchStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.prototype = {
    get_conditionExpression: function() {
        return this.conditionExpression;
    },

    set_conditionExpression: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'ConditionExpression');
        this.conditionExpression = value;
        return value;
    },

    get_parent: function() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.WaitStep.isInstanceOfType(value))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Parent must be of type WaitStep.', 'Parent');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    apply: function(visitor) {
        visitor.visitWaitBranchStep(this);
    },

    addPeer: function(direction, newStep) {
        var $v_0 = null;
        var $v_1 = null;
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            $v_0 = newStep;
        } else if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(newStep)) {
            $v_1 = newStep;
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((!!$v_0) || (!!$v_1), 'A child of WaitStep must be of type WaitBranchStep or WaitTimeoutStep.');
        if ($v_0) {
            (this.get_parent()).insert(this, direction, $v_0);
        } else {
            if (!(this.get_parent()).$1A_2()) {
                (this.get_parent()).append($v_1);
            } else {
                (this.get_parent()).insert((this.get_parent()).$1A_2(), direction, $v_1);
            }
        }
    },

    remove: function(stepBase) {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        if (!(this.get_parent()).steps.get_Count()) {
            (this.get_parent()).remove(this.get_parent());
        }
    },

    conditionExpression: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        if (this.conditionExpression) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('conditionExpression', this.conditionExpression.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.conditionExpression) {
                this.conditionExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.conditionExpression.__class);
                this.conditionExpression.initializeFromDynamic($v_0.conditionExpression);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.WaitStep = function(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.WaitStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep.$3_2());
    this.__class = 'WaitStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.WaitStep.prototype = {
    apply: function(visitor) {
        visitor.visitWaitStep(this);
    },

    $1v_2: function() {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(this.steps.get_Count() > 0, 'There must be a least one step in steps collection.');
        return (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(this.steps.get_item(0)))
            ? this.steps.get_item(0)
            : null;
    },

    $1A_2: function() {
        if (this.steps.get_Count() <= 0) {
            return null;
        }
        var $v_0;
        for ($v_0 = 1; $v_0 < this.steps.get_Count(); $v_0++) {
            if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(this.steps.get_item($v_0))) {
                break;
            }
        }
        return (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(this.steps.get_item($v_0 - 1)))
            ? this.steps.get_item($v_0 - 1)
            : null;
    },

    $1L_2: function() {
        if (this.steps.get_Count() <= 0) {
            return null;
        }
        for (var $v_0 = 0; $v_0 < this.steps.get_Count(); $v_0++) {
            if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(this.steps.get_item($v_0))) {
                return this.steps.get_item($v_0);
            }
        }
        return null;
    },

    isHeader: function(newStep) {
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            return (this.$1v_2() === newStep);
        } else {
            return (this.$1L_2() === newStep);
        }
    },

    appendStep: function(newStep) {
        this.append(newStep);
    },

    append: function(newStep) {
        var $v_0 = null;
        var $v_1 = null;
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            $v_0 = newStep;
        } else if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(newStep)) {
            $v_1 = newStep;
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((!!$v_0) || (!!$v_1), 'A child of WaitStep must be of type WaitBranchStep or WaitTimeoutStep.');
        if ($v_0) {
            if (!this.$1A_2()) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, $v_0);
            } else {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.insert.call(this, this.$1A_2(), 1, $v_0);
            }
        } else {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, $v_1);
        }
    },

    remove: function(stepBase) {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        if (!this.steps.get_Count()) {
            (this.get_parent()).remove(this);
        }
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append('}');
        return $v_0.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep = function(waitStep, timeoutExpression) {
    Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(waitStep, 'waitStep');
    this.$1j_2(timeoutExpression);
    this.setNameAndId(waitStep.$0_0.$3_2());
    this.timeoutExpression = timeoutExpression;
    this.__class = 'WaitTimeoutStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.prototype = {
    get_timeoutExpression: function() {
        return this.timeoutExpression;
    },

    set_timeoutExpression: function(value) {
        this.$1j_2(value);
        this.timeoutExpression = value;
        return value;
    },

    get_parent: function() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.WaitStep.isInstanceOfType(value))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Parent must be of type WaitStep.', 'Parent');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    apply: function(visitor) {
        visitor.visitWaitTimeoutStep(this);
    },

    $1j_2: function($p0) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull($p0, 'TimeoutExpression');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.Expressions.NullExpression.isInstanceOfType($p0) ||
                Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.isInstanceOfType($p0) ||
                $p0.type === 2 ||
                $p0.type === 14 ||
                Microsoft.Crm.Workflow.Expressions.MethodCallExpression.isInstanceOfType($p0),
                'Type of TimeoutExpression must be DateTime, TimeSpan or MethodCallExpression');
    },

    addPeer: function(direction, newStep) {
        var $v_0 = null;
        var $v_1 = null;
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            $v_0 = newStep;
        } else if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(newStep)) {
            $v_1 = newStep;
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((!!$v_0) || (!!$v_1), 'A child of WaitStep must be of type WaitBranchStep or WaitTimeoutStep.');
        if ($v_0) {
            if (!(this.get_parent()).$1L_2()) {
                (this.get_parent()).append($v_0);
            } else {
                (this.get_parent()).insert((this.get_parent()).$1L_2(), 0, $v_0);
            }
        } else {
            (this.get_parent()).insert(this, direction, $v_1);
        }
    },

    remove: function(stepBase) {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        if (!(this.get_parent()).steps.get_Count()) {
            (this.get_parent()).remove(this.get_parent());
        }
    },

    timeoutExpression: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        if (this.timeoutExpression) {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('timeoutExpression', this.timeoutExpression.toJson(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            if ($v_0.timeoutExpression) {
                this.timeoutExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression($v_0.timeoutExpression.__class);
                this.timeoutExpression.initializeFromDynamic($v_0.timeoutExpression);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument = function() {
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument.prototype = {
    _argumentTypeCode: 0,
    _argumentTypeDisplay: null,
    _argumentDirection: 0,
    _required: false,
    _description: null,
    _name: null,
    _value: null,
    _target: false,
    _entityName: null,

    get_argumentTypeCode: function() {
        return this._argumentTypeCode;
    },

    set_argumentTypeCode: function(value) {
        this._argumentTypeCode = value;
        return value;
    },

    get_argumentTypeDisplay: function() {
        return this._argumentTypeDisplay;
    },

    set_argumentTypeDisplay: function(value) {
        this._argumentTypeDisplay = value;
        return value;
    },

    get_direction: function() {
        return this._argumentDirection;
    },

    set_direction: function(value) {
        this._argumentDirection = value;
        return value;
    },

    get_required: function() {
        return this._required;
    },

    set_required: function(value) {
        this._required = value;
        return value;
    },

    get_description: function() {
        return this._description;
    },

    set_description: function(value) {
        this._description = value;
        return value;
    },

    get_name: function() {
        return this._name;
    },

    set_name: function(value) {
        this._name = value;
        return value;
    },

    get_value: function() {
        return this._value;
    },

    set_value: function(value) {
        this._value = value;
        return value;
    },

    get_target: function() {
        return this._target;
    },

    set_target: function(value) {
        this._target = value;
        return value;
    },

    get_entityName: function() {
        return this._entityName;
    },

    set_entityName: function(value) {
        this._entityName = value;
        return value;
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_description', this._description, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_entityName', this._entityName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('_name', this._name, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_required',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this
                    ._required),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_target', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this._target), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_argumentTypeCode', this._argumentTypeCode.toString(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_argumentTypeDisplay', this._argumentTypeDisplay, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('_argumentDirection',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this._argumentDirection),
                true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        var $v_0 = deserialized;
        this._description = $v_0._description;
        this._entityName = $v_0._entityName;
        this._name = $v_0._name;
        this._required = $v_0._required;
        this._target = $v_0._target;
        this._argumentTypeCode = Number.parseInvariant($v_0._argumentTypeCode.toString());
        this._argumentTypeDisplay = $v_0._argumentTypeDisplay;
        this._argumentDirection = ($v_0._argumentDirection);
    }
}


Microsoft.Crm.Workflow.ObjectModel.WorkflowStep = function(primaryEntityName, category) {
    this._arguments = new (Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
    this.stepDictionary = new Microsoft.Crm.Workflow.ObjectModel.StepDictionary();
    this.$1D_2 = new (Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
    this.$1C_2 = new (Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
    this.workflowEntityId = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.initializeBase(this);
    this.$1w_2(primaryEntityName, category, 0, 0);
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.initializeFrom = function(deserialized) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel
        .WorkflowStep(deserialized.primaryEntityName, deserialized.category);
    $v_0.initializeFromDynamic(deserialized);
    return $v_0;
}
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.prototype = {
    initializeBusinessProcess: function(businessProcessType, formId) {
        this.businessProcessType = businessProcessType;
        this.formId = formId;
    },

    get_arguments: function() {
        return this._arguments;
    },

    argumentsArray: null,

    $1w_2: function($p0, $p1, $p2, $p3) {
        this.__class = 'WorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.primaryEntityName = $p0;
        this.nextStepIndex = 0;
        this.category = $p1;
        this.businessProcessType = $p3;
        this.mode = $p2;
        this.title = '';
        this.description = '';
        this.setNameAndId(this.$3_2());
        this.set_workflow(this);
        this.publicationParameters = Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory.$1m($p1, $p2);
        if (!$p1 && !$p2) {
            this.publicationParameters.setDefaultParameters();
        }
    },

    get_title: function() {
        return this.title;
    },

    set_title: function(value) {
        this.title = value;
        return value;
    },

    get_uniqueName: function() {
        return this.$1X_2;
    },

    set_uniqueName: function(value) {
        this.$1X_2 = value;
        return value;
    },

    get_solutionPrefix: function() {
        return this.$1U_2;
    },

    set_solutionPrefix: function(value) {
        this.$1U_2 = value;
        return value;
    },

    getStepWithId: function(id) {
        if ((!this.stepDictionary.get_count()) ||
            Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(id) ||
            id === this.id) {
            return this;
        }
        if (!this.stepDictionary.containsKey(id)) {
            var $v_0 = 'Workflow does not contain a step with ID: ' + id;
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException($v_0);
        }
        return this.stepDictionary.get_item(id);
    },

    deleteStep: function(step) {
        if (step === this) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Cannot remove workflow step');
        }
        if ((step.$0_0 !== this) ||
            !(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(step.get_parent()))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('This step cannot be deleted. It is not part of this workflow');
        }
        var $v_0 = step.get_parent();
        if (!$v_0.steps.contains(step)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('This step cannot be deleted. It is not part of this workflow');
        }
        $v_0.remove(step);
    },

    remove: function(stepBase) {
        if (!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stepBase))) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        } else {
            var $v_0 = stepBase;
            this.$20_2($v_0);
        }
    },

    $20_2: function($p0) {
        var $v_0 = null;
        for (var $v_2 = 0; $v_2 < this.steps.get_Count(); $v_2++) {
            var $v_3 = this.steps.get_item($v_2);
            if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_3)) {
                var $v_4 = $v_3;
                if ($v_4 === $p0) {
                    break;
                } else {
                    $v_0 = $v_4;
                }
            }
        }
        var $v_1 = $p0.steps.get_Count();
        while ($v_1 > 0) {
            var $v_5 = $p0.steps.get_item(0);
            $p0.steps.remove($v_5);
            this.$0_0.stepDictionary.remove($v_5.id);
            if ($v_0) {
                $v_0.appendStep($v_5);
            } else {
                this.insert($p0, 0, $v_5);
            }
            $v_1 = $p0.steps.get_Count();
        }
        this.steps.remove($p0);
        this.$0_0.stepDictionary.remove($p0.id);
    },

    get_primaryEntityName: function() {
        return this.primaryEntityName;
    },

    appendStep: function(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)),
                'Cannot add a ConditionBranchStep to a WorkflowStep. It can only be added to a Condition Step.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)),
                'Cannot add WorkflowStep to WorkflowStep.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)),
                'Cannot add StageStep to WorkflowStep using this function. Please use InsertStageStep function');
        for (var $v_0 = 0; $v_0 < this.steps.get_Count(); $v_0++) {
            var $v_1 = this.steps.get_item($v_0);
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_1)),
                    'Cannot add a step to workflow with workflowStep as a parent step since there exist at least one Stage step.');
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    insertStageStepWithChildPeer: function(stageStep, childPeerStep, direction) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stageStep),
                'Only StageStep can be added to WorkflowStep using this function');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!childPeerStep, 'The peer child step cannot be null.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(childPeerStep.get_parent()),
                'The peer child step need to be a child of a stage step.');
        var $v_0 = childPeerStep.get_parent();
        $v_0.addPeer(1, stageStep);
        var $v_1 = 0;
        if (direction === 1) {
            $v_1 = $v_0.steps.indexOf(childPeerStep) + 1;
        } else {
            $v_1 = $v_0.steps.indexOf(childPeerStep);
        }
        while ($v_0.steps.get_Count() > $v_1) {
            var $v_2 = $v_0.steps.get_item($v_1);
            if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_2)) {
                break;
            }
            $v_0.steps.remove($v_2);
            this.$0_0.stepDictionary.remove($v_2.id);
            stageStep.appendStep($v_2);
        }
    },

    insertStageStep: function(stageStep, peerStep, direction) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stageStep),
                'Only StageStep can be added to WorkflowStep using this function');
        if (!peerStep) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, stageStep);
        } else {
            peerStep.addPeer(direction, stageStep);
            var $v_0 = this.steps.indexOf(stageStep) + 1;
            while (this.steps.get_Count() > $v_0) {
                var $v_1 = this.steps.get_item($v_0);
                if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_1)) {
                    break;
                }
                this.steps.remove($v_1);
                this.$0_0.stepDictionary.remove($v_1.id);
                stageStep.appendStep($v_1);
            }
        }
    },

    apply: function(visitor) {
        visitor.visitWorkflowStep(this);
    },

    get_metadataProvider: function() {
        return this.$9_2;
    },

    set_metadataProvider: function(value) {
        this.$9_2 = value;
        return value;
    },

    get_nextStepIndex: function() {
        return this.nextStepIndex;
    },

    set_nextStepIndex: function(value) {
        this.nextStepIndex = value;
        return value;
    },

    get_isCrmUIWorkflow: function() {
        return this.isCrmUIWorkflow;
    },

    set_isCrmUIWorkflow: function(value) {
        this.isCrmUIWorkflow = value;
        return value;
    },

    get_workflowCategory: function() {
        return this.category;
    },

    get_workflowBusinessProcessType: function() {
        return this.businessProcessType;
    },

    get_workflowMode: function() {
        return this.mode;
    },

    get_publicationParameters: function() {
        return this.publicationParameters;
    },

    get_formId: function() {
        return this.formId;
    },

    getDataSourceForStep: function(referenceStep) {
        var $v_0 = new Microsoft.Crm.Workflow.DataSourceCollection();
        var $v_1 = false;
        if (referenceStep === this) {
            $v_1 = true;
        }
        this.collectDataSourcesRecursive(this, referenceStep, $v_1, $v_0);
        $v_0.set_isReadOnly(true);
        return $v_0;
    },

    getMetadataAttributeType: function(type) {
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
        case 17:
            return 'entity';
        case 22:
            return '';
        default:
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwNotSupportedException('Not a supported type: ' +
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(type));
            return '';
        }
    },

    $3_2: function() {
        return Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant('{0}', this.nextStepIndex++);
    },

    get_currentStepId: function() {
        return Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant('{0}', this.nextStepIndex);
    },

    get_stepDictionary: function() {
        return this.stepDictionary;
    },

    get_workflowEntityId: function() {
        return this.workflowEntityId;
    },

    getIdentifierDisplayName: function(variableName) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrWhiteSpace(variableName)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Variable name cannot be null or empty', 'variableName');
        }
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.split(variableName, '_', 4);
        if ($v_0.length === 1 && this.category === 3) {
            return $v_0[0];
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert((4 === $v_0.length), 'Invalid variable name format');
        return $v_0[3];
    },

    primaryEntityName: null,
    nextStepIndex: 0,
    publicationParameters: null,
    isCrmUIWorkflow: true,
    category: 0,
    businessProcessType: 0,
    mode: 0,
    title: null,
    formId: null,
    $1X_2: null,
    $1U_2: null,
    $9_2: null,

    get_workflowStepVariables: function() {
        return this.$1D_2;
    },

    get_workflowStepInputs: function() {
        return this.$1C_2;
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('primaryEntityName', this.primaryEntityName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('nextStepIndex',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.nextStepIndex),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isCrmUIWorkflow',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isCrmUIWorkflow),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('category',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.category),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('businessProcessType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.businessProcessType),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('mode', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.mode), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('title', this.title, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('description', this.description, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('workflowEntityId', this.workflowEntityId.toString(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('formId', this.formId, true));
        this.argumentsArray = this._arguments.toArray();
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
        for (var $v_3 = 0; $v_3 < this.argumentsArray.length; $v_3++) {
            $v_1.add(this.argumentsArray[$v_3].toJson());
        }
        var $v_2 = '[' + Microsoft.Crm.Workflow.Utils.StringUtility.join(String, ',', $v_1.toArray()) + ']';
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('argumentsArray', $v_2, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('variables', this.$1g_2(false), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('inputs', this.$1g_2(true), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    $1g_2: function($p0) {
        var $v_0 = ($p0) ? this.$1C_2 : this.$1D_2;
        if (!$v_0) {
            return null;
        }
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
        for (var $v_2 = 0; $v_2 < $v_0.get_Count(); ++$v_2) {
            var $v_3 = $v_0.get_item($v_2);
            var $v_4 = new Sys.StringBuilder();
            $v_4.append('{');
            $v_4.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', $v_3._name, false));
            $v_4.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getPropertyJson('type', $v_3._argumentTypeDisplay, true));
            $v_4.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getPropertyJson('type_code', $v_3._argumentTypeCode.toString(), true));
            $v_4.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('value', ($v_3._value).toJson(), true));
            $v_4.append('}');
            $v_1.add($v_4.toString());
        }
        return '[' + Microsoft.Crm.Workflow.Utils.StringUtility.join(String, ',', $v_1.toArray()) + ']';
    },

    fixInternalLinks: function() {
        this.set_workflow(this);
        this.set_parent(this);
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var $v_0 = deserialized;
            this.primaryEntityName = $v_0.primaryEntityName;
            this.nextStepIndex = ($v_0.nextStepIndex) ? JSON.parse($v_0.nextStepIndex) : 0;
            this.isCrmUIWorkflow = $v_0.isCrmUIWorkflow;
            this.category = ($v_0.category) ? JSON.parse($v_0.category) : 0;
            this.businessProcessType = ($v_0.businessProcessType) ? JSON.parse($v_0.businessProcessType) : 0;
            this.mode = ($v_0.mode) ? JSON.parse($v_0.mode) : 0;
            this.title = $v_0.title;
            this.formId = $v_0.formId;
            if ($v_0.workflowEntityId) {
                this.workflowEntityId = Microsoft.Crm.Client.Core.Framework.Guid
                    .tryCreate($v_0.workflowEntityId.toString());
            }
            this._arguments = new (Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
            var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))($v_0.argumentsArray);
            for (var $v_4 = 0; $v_4 < $v_1.get_Count(); $v_4++) {
                var $v_5 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument();
                $v_5.initializeFromDynamic($v_1.get_item($v_4));
                this._arguments.add($v_5);
            }
            var $v_2 = (deserialized)['variables'];
            if ($v_2) {
                for (var $v_6 = 0; $v_6 < $v_2.length; ++$v_6) {
                    var $v_7 = $v_2[$v_6];
                    var $v_8 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument();
                    $v_8._name = $v_7['name'];
                    var $v_9 = $v_7['value'];
                    var $v_A = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_9['__class']);
                    $v_A.initializeFromDynamic($v_9);
                    $v_8._value = $v_A;
                    $v_8._argumentTypeCode = Number.parseInvariant($v_7['type_code']);
                    $v_8._argumentTypeDisplay = $v_7['type'];
                    this.$1D_2.add($v_8);
                }
            }
            var $v_3 = (deserialized)['inputs'];
            if ($v_3) {
                for (var $v_B = 0; $v_B < $v_3.length; ++$v_B) {
                    var $v_C = $v_3[$v_B];
                    var $v_D = new Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument();
                    $v_D._name = $v_C['name'];
                    var $v_E = $v_C['value'];
                    var $v_F = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_E['__class']);
                    $v_F.initializeFromDynamic($v_E);
                    $v_D._value = $v_F;
                    $v_D._argumentTypeCode = Number.parseInvariant($v_C['type_code']);
                    $v_D._argumentTypeDisplay = $v_C['type'];
                    this.$1C_2.add($v_D);
                }
            }
            this.fixInternalLinks();
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.DataCollection$1 = function() {
    this.get_Count = this.get_count;
    this.get_Items = this.get_items;
}
Microsoft.Crm.Workflow.ObjectModel.DataCollection$1.$$ = function(T) {
    var $$cn = 'DataCollection$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Workflow.ObjectModel[$$cn]) {
        var $$ccr = Microsoft.Crm.Workflow.ObjectModel[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Workflow.ObjectModel.DataCollection$1'] = { 'T': T };
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Workflow.ObjectModel.DataCollection$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Workflow.ObjectModel.' + $$cn,
            null,
            Microsoft.Crm.Client.Core.Framework.IList$1.$$(T));
        var $$dict_5 = Microsoft.Crm.Workflow.ObjectModel.DataCollection$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Workflow.ObjectModel[$$cn];
}
Microsoft.Crm.Workflow.ObjectModel.DataCollection$1.prototype = {
    $8_0: null,

    get_item: function(index) {
        return this.$8_0[index];
    },

    set_item: function(index, value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!this.$15_0, 'Cannot modify value in a readonly data value collection');
        this.$8_0[index] = value;
        return value;
    },

    get_isReadOnly: function() {
        return this.$15_0;
    },

    set_isReadOnly: function(value) {
        this.$15_0 = value;
        return value;
    },

    indexOf: function(item, startIndex) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        startIndex = startIndex || 0;
        return Array.indexOf(this.$8_0, item, startIndex);
    },

    insert: function(index, item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        Array.insert(this.$8_0, index, item);
    },

    remove: function(item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        Array.remove(this.$8_0, item);
    },

    contains: function(item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        return Array.contains(this.$8_0, item);
    },

    add: function(item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        Array.add(this.$8_0, item);
    },

    addRange: function(collection) {
        Array.addRange(this.$8_0, collection);
    },

    append: function(collection) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(collection, 'collection');
        for (var $$arr_1 = collection
                     .get_items(),
            $$len_2 = $$arr_1.length,
            $$idx_3 = 0;
            $$idx_3 < $$len_2;
            ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            this.add($v_0);
        }
    },

    clear: function() {
        Array.clear(this.$8_0);
    },

    get_count: function() {
        return this.$8_0.length;
    },

    first: function() {
        if (!this.$8_0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this.$8_0[0];
    },

    get_items: function() {
        return this.$8_0;
    },

    last: function() {
        if (!this.$8_0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this.$8_0[this.get_count() - 1];
    },

    removeAt: function(index) {
        Array.removeAt(this.$8_0, index);
    },

    toArray: function() {
        var $v_0 = new Array(this.$8_0.length);
        for (var $v_1 = 0; $v_1 < this.$8_0.length; $v_1++) {
            $v_0[$v_1] = this.$8_0[$v_1];
        }
        return $v_0;
    },

    $15_0: false
}


Microsoft.Crm.Workflow.ObjectModel.DataValueCollection = function() {
    Microsoft.Crm.Workflow.ObjectModel.DataValueCollection.initializeBase(this);
}


Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase = function() {
    Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype = {
    visitAssignStep: function(assignStep) {
        if (!this.$A_1(assignStep.assignTo)) {
            assignStep.assignTo.accept(this);
        }
    },

    visitChildWorkflowStep: function(childWorkflowStep) {
        if (!this.$A_1(childWorkflowStep.childWorkflow)) {
            childWorkflowStep.childWorkflow.accept(this);
        }
    },

    visitConditionBranchStep: function(conditionBranchStep) {
        if (!this.$A_1(conditionBranchStep.conditionExpression)) {
            conditionBranchStep.conditionExpression.accept(this);
        }
        this.$N_1(conditionBranchStep);
    },

    visitConditionStep: function(conditionStep) {
        this.$N_1(conditionStep);
    },

    visitCreateStep: function(createStep) {
        if (!this.$A_1(createStep.entity)) {
            createStep.entity.accept(this);
        }
    },

    visitEntityStep: function(entityStep) {
        this.$N_1(entityStep);
    },

    visitSendEmailStep: function(sendEmailStep) {
        if (!this.$A_1(sendEmailStep.entity)) {
            sendEmailStep.entity.accept(this);
        }
    },

    visitSetAttributeValueStep: function(setAttributeValueStep) {
        if (!this.$A_1(setAttributeValueStep.get_propertySpec())) {
            setAttributeValueStep.get_propertySpec().accept(this);
        }
    },

    visitSetStateStep: function(setStateStep) {
        if (!this.$A_1(setStateStep.state)) {
            setStateStep.state.accept(this);
        }
        if (!this.$A_1(setStateStep.status)) {
            setStateStep.status.accept(this);
        }
    },

    visitStageStep: function(stageStep) {
        this.$N_1(stageStep);
    },

    visitPageStep: function(pageStep) {
        this.visitStageStep(pageStep);
    },

    visitStepStep: function(stepStep) {
        this.$N_1(stepStep);
    },

    visitUpdateStep: function(updateStep) {
        if (!this.$A_1(updateStep.entitySpec)) {
            updateStep.entitySpec.accept(this);
        }
    },

    visitWaitBranchStep: function(waitBranchStep) {
        if (!this.$A_1(waitBranchStep.conditionExpression)) {
            waitBranchStep.conditionExpression.accept(this);
        }
        this.$N_1(waitBranchStep);
    },

    visitWaitStep: function(waitStep) {
        this.$N_1(waitStep);
    },

    visitWaitTimeoutStep: function(waitTimeoutStep) {
        if (!this.$A_1(waitTimeoutStep.timeoutExpression)) {
            waitTimeoutStep.timeoutExpression.accept(this);
        }
        this.$N_1(waitTimeoutStep);
    },

    visitCustomActivityStep: function(customActivityStep) {
    },

    visitCustomJavascriptStep: function(customJSStep) {
    },

    visitWorkflowStep: function(workflowStep) {
        this.$N_1(workflowStep);
    },

    visitStopWorkflowStep: function(stopWorkflowStep) {
    },

    visitSetVisibilityStep: function(setVisibilityStep) {
    },

    visitSetDisplayModeStep: function(setDisplayModeStep) {
    },

    visitSetFieldRequiredLevelStep: function(setFieldRequiredLevelStep) {
    },

    visitSetMessageStep: function(setMessageStep) {
    },

    visitControlStep: function(controlStep) {
    },

    visitActionStep: function(actionStep) {
    },

    visitRollupRuleStep: function(rollupRuleStep) {
    },

    visitSetDefaultValueStep: function(setDefaultValueStep) {
    },

    visitSetNextStageStep: function(setNextStageStep) {
    },

    visitAssignVariableStep: function(assignVariableStep) {
    },

    visitChildInteractiveWorkflowStep: function(childWorkflowStep) {
    },

    visitInteractionPageStep: function(interactionPageStep) {
    },

    visitInteractionStep: function(interactionStep) {
    },

    visitQueryStep: function(queryStep) {
    },

    visitBinaryExpression: function(expression) {
        expression.left.accept(this);
        if (expression.right.get_count() > 0) {
            expression.right.get_item(0).accept(this);
        }
    },

    visitUnaryExpression: function(expression) {
        expression.operand.accept(this);
    },

    visitPropertySpecification: function(propertySpecification) {
        var $v_0 = propertySpecification.propertyValueExpr;
        if (!this.$A_1($v_0)) {
            $v_0.accept(this);
        }
    },

    visitEntitySpecification: function(entitySpecification) {
        if (this.$A_1(entitySpecification.properties)) {
            return;
        }
        for (var $v_0 = 0; $v_0 < entitySpecification.properties.get_count(); $v_0++) {
            entitySpecification.properties.get_item($v_0).accept(this);
        }
    },

    visitMethodCallExpression: function(expression) {
        var $v_0 = expression.getParameters();
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType($v_0[$v_1])) {
                var $v_2 = $v_0[$v_1];
                $v_2.accept(this);
            }
        }
    },

    visitLookupExpression: function(expression) {
        if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType(expression.staticValue)) {
            var $v_0 = expression.staticValue;
            $v_0.accept(this);
        }
    },

    visitPrimitiveExpression: function(expression) {
        if (!this.$A_1(expression.primitiveValue) && expression.type === 9) {
            var $v_0 = expression.primitiveValue;
            for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_1 = $$arr_2[$$idx_4];
                var $v_2 = $v_1.properties.get_item(0);
                $v_2.propertyValueExpr.accept(this);
            }
        }
    },

    visitEntityAttributeExpression: function(expression) {
    },

    visitTimeSpanExpression: function(expression) {
    },

    visitNullExpression: function(expression) {
    },

    $N_1: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.steps.get_Count(); $v_0++) {
            var $v_1 = $p0.steps.get_item($v_0);
            $v_1.apply(this);
        }
    },

    $A_1: function($p0) {
        return null === $p0 || $p0 === undefined;
    }
}


Type.registerNamespace('Microsoft.Crm.Workflow.Utils');

Microsoft.Crm.Workflow.Utils.ErrorCode = function() {}
Microsoft.Crm.Workflow.Utils.ErrorCode.prototype = {
    none: 0,
    calculatedFieldsInvalidSourceTypeMask: -2147089352,
    calculatedFieldsEntitiesExceeded: -2147089357,
    calculatedFieldsDepthExceeded: -2147089358,
    calculatedFieldsCyclicReference: -2147089359,
    calculatedFieldsInvalidValues: -2147089360,
    calculatedFieldsInvalidValue: -2147089361,
    calculatedFieldsInvalidAttributes: -2147089362,
    calculatedFieldsDivideByZero: -2147089363,
    calculatedFieldsFunTypeMismatch: -2147089364,
    calculatedFieldsAssignmentTypeMismatch: -2147089365,
    calculatedFieldsOverflow: -2147089366,
    tooManyCalculatedFieldsInQuery: -2147089367,
    calculatedFieldsInvalidAttribute: -2147089368,
    calculatedFieldsInvalidFunction: -2147089369,
    calculatedFieldsTypeMismatch: -2147089370,
    calculatedFieldsInvalidSetAttributeAssignment: -2147089371,
    calculatedFieldsGeneric: -2147089372,
    calculatedFieldsInvalidReference: -2147089373,
    calculatedFieldsFeatureNotEnabled: -2147089374,
    calculatedFieldsDateOnlyBehaviorTypeMismatch: -2147089350,
    calculatedFieldsTimeInvBehaviorTypeMismatch: -2147089349,
    calculatedFieldsUserLocBehaviorTypeMismatch: -2147089348,
    rollupFieldsGeneric: -2147089093,
    rollupFieldsTargetSameAsSourceEntity: -2147089071,
    rollupFieldsTargetRelationshipNull: -2147089101,
    rollupFieldsTargetRelationshipNotPartOfOneToNRelationship: -2147089100,
    rollupFieldsSourceEntityNotHierarchical: -2147089099,
    rollupFieldsAggregateNotDefined: -2147089098,
    rollupFieldsAggregateFieldNotPartOfEntity: -2147089097,
    rollupFieldsSourceFilterConditionInvalid: -2147089096,
    rollupFieldsTargetFilterConditionInvalid: -2147089095,
    rollupFieldsAggregateFunctionTypeMismatch: -2147089094,
    rollupFieldsAggregateOnRollupFieldOrComplexCalcFieldNotAllowed: -2147089092,
    rollupFieldsAggregateFieldDataTypeNotAllowedSimilarRollupFieldDataType: -2147089091,
    rollupFieldsDataTypeNotValid: -2147089090,
    rollupFieldsAggregateFieldNotBelongToSourceEntity: -2147089089,
    rollupFieldsAggregateFieldNotBelongToRelatedEntity: -2147089088,
    rollupFieldAndAggregateFieldDataTypeFormatMismatch: -2147089084,
    rollupFieldAggregateFunctionNotAllowed: -2147089082,
    rollupFieldAggregateFunctionNotAllowedForRollupFieldDataType: -2147089083,
    rollupFieldSourceFilterFieldNotAllowed: -2147089080,
    rollupFieldTargetFilterFieldNotAllowed: -2147089079,
    calculatedFieldUsedByRollupFieldCannotBeComplex: -2147089072,
    rollupFieldsTargetEntityNotValid: -2147089070,
    attributeCannotBeUsedInAggregate: -2147089063,
    rollupTargetLinkedEntityOnlySupportedForActivityEntities: -2147089054,
    rollupTargetLinkedEntityCanOnlyUsedForActivityPartyEntities: -2147089053,
    rollupInvalidAttributeForFilterCondition: -2147089052,
    rollupFieldsV2FeatureNotEnabled: -2147089051,
    rollupTargetLinkedRelationshipNotValid: -2147089050
}
Microsoft.Crm.Workflow.Utils.ErrorCode.registerEnum('Microsoft.Crm.Workflow.Utils.ErrorCode', false);


Microsoft.Crm.Workflow.Utils.ArrayUtility = function() {
}
Microsoft.Crm.Workflow.Utils.ArrayUtility.getList = function(T) {
    return new (Sales.Common.Framework.List$1.$$(T))();
}
Microsoft.Crm.Workflow.Utils.ArrayUtility.toJson = function(T, items, jsonConverter) {
    var $v_0 = items.toArray();
    return Microsoft.Crm.Workflow.Utils.ArrayUtility.arrayToJson(T, $v_0, jsonConverter);
}
Microsoft.Crm.Workflow.Utils.ArrayUtility.arrayToJson = function(T, arrayItems, jsonConverter) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('[');
    if (arrayItems.length > 0) {
        $v_0.append(jsonConverter(arrayItems[0]));
        for (var $v_1 = 1; $v_1 < arrayItems.length; $v_1++) {
            $v_0.append(',');
            $v_0.append(jsonConverter(arrayItems[$v_1]));
        }
    }
    $v_0.append(']');
    return $v_0;
}


Microsoft.Crm.Workflow.Utils.DictionaryUtility = function() {
}
Microsoft.Crm.Workflow.Utils.DictionaryUtility
    .toJson = function(TKey, TValue, items, keyJsonConverter, valueJsonConverter) {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append('\"keys\":');
        $v_0.append(Microsoft.Crm.Workflow.Utils.ArrayUtility
            .arrayToJson(TKey, _Dictionary.keys(items), keyJsonConverter).toString());
        $v_0.append(',');
        $v_0.append('\"values\":');
        $v_0.append(Microsoft.Crm.Workflow.Utils.ArrayUtility
            .arrayToJson(TValue, _Dictionary.toArray(TValue, items), valueJsonConverter).toString());
        $v_0.append('}');
        return $v_0.toString();
    }
Microsoft.Crm.Workflow.Utils.DictionaryUtility
    .fromJson = function(TKey, TValue, deserializedObject, keyJsonConverter, valueJsonConverter) {
        var $v_0 = deserializedObject;
        var $v_1 = {};
        var $v_2 = $v_0['keys'];
        var $v_3 = $v_0['values'];
        for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
            $v_1[keyJsonConverter($v_2[$v_4])] = valueJsonConverter($v_3[$v_4]);
        }
        return $v_1;
    }


Microsoft.Crm.Workflow.Utils.SharedUtility = function() {
}
Microsoft.Crm.Workflow.Utils.SharedUtility.getList = function(T) {
    var $v_0 = new (Sales.Common.Framework.List$1.$$(T))();
    return $v_0;
}
Microsoft.Crm.Workflow.Utils.SharedUtility.dictionaryAdd = function(TKey, TValue, dictionary, key, value) {
    dictionary[key.toString()] = value;
}
Microsoft.Crm.Workflow.Utils.SharedUtility.dictionaryContainKey = function(TKey, TValue, dictionary, key) {
    return ((key.toString()) in dictionary);
}
Microsoft.Crm.Workflow.Utils.SharedUtility.dictionaryGetValue = function(TKey, TValue, dictionary, key) {
    return dictionary[key.toString()];
}
Microsoft.Crm.Workflow.Utils.SharedUtility.dictionaryGetKeys = function(TKey, TValue, dictionary) {
    var $v_0 = new (Sales.Common.Framework.List$1.$$(String))();
    var $$dict_5 = dictionary;
    for (var $$key_6 in $$dict_5) {
        var $v_1 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_0.add($v_1.key);
    }
    return $v_0;
}
Microsoft.Crm.Workflow.Utils.SharedUtility.throwException = function(code) {
    var args = [];
    for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
        args[$$pai_3 - 1] = arguments[$$pai_3];
    }
    var $v_0;
    switch (code) {
    case -2147089368:
        $v_0 = window.LOCID_CF_ERR_NONEXISTINGFIELD;
        break;
    case -2147089373:
        $v_0 = window.LOCID_CF_ERR_INVALIDREFERENCE;
        break;
    case -2147089362:
        $v_0 = window.LOCID_CF_ERR_INVALIDREFERENCES;
        break;
    case -2147089369:
        $v_0 = window.LOCID_CF_ERR_NONEXISTINGFUNCTION;
        break;
    case -2147089370:
        $v_0 = window.LOCID_CF_ERR_TYPEMISMATCH;
        break;
    case -2147089364:
        $v_0 = window.LOCID_CF_ERR_FUNTYPEMISMATCH;
        break;
    case -2147089365:
        $v_0 = window.LOCID_CF_ERR_ASSIGNMENTMISMATCH;
        break;
    case -2147089350:
        $v_0 = window.LOCID_CF_ERR_DATEONLYMISMATCH;
        break;
    case -2147089349:
        $v_0 = window.LOCID_CF_ERR_TIMEINVMISMATCH;
        break;
    case -2147089348:
        $v_0 = window.LOCID_CF_ERR_USERLOCMISMATCH;
        break;
    case -2147089371:
        $v_0 = window.LOCID_CF_ERR_NONCFFORMULA;
        break;
    case -2147089366:
        $v_0 = window.LOCID_CF_ERR_OVERFLOW;
        break;
    case -2147089363:
        $v_0 = window.LOCID_CF_ERR_DIVIDEBYZERO;
        break;
    case -2147089360:
        $v_0 = window.LOCID_CF_ERR_INVALIDVALUES;
        break;
    case -2147089361:
        $v_0 = window.LOCID_CF_ERR_INVALIDVALUE;
        break;
    case -2147089367:
    case -2147089372:
    case 0:
    default:
        $v_0 = window.LOCID_CF_ERR_GENERIC;
        break;
    }
    Microsoft.Crm.Workflow.Utils.ExceptionUtility
        .throwException(Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant.apply(null, [$v_0].concat(args)));
}


Microsoft.Crm.Workflow.Utils.TraceConstants = function() {
}


Microsoft.Crm.Workflow.Utils.StringUtility = function() {
}
Microsoft.Crm.Workflow.Utils.StringUtility.format = function(cultureInfo, message) {
    var parameters = [];
    for (var $$pai_3 = 2; $$pai_3 < arguments.length; ++$$pai_3) {
        parameters[$$pai_3 - 2] = arguments[$$pai_3];
    }
    return String.format.apply(null, [message].concat(parameters));
}
Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant = function(message) {
    var parameters = [];
    for (var $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2) {
        parameters[$$pai_2 - 1] = arguments[$$pai_2];
    }
    return String.format.apply(null, [message].concat(parameters));
}
Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant = function(value) {
    return value.toString();
}
Microsoft.Crm.Workflow.Utils.StringUtility.areEqual = function(left, right) {
    return left === right;
}
Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty = function(value) {
    return null === value || value === undefined || value === '';
}
Microsoft.Crm.Workflow.Utils.StringUtility.isNull = function(value) {
    return null === value || value === undefined;
}
Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm = function(value) {
    if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(value)) {
        return null;
    }
    if (value.startsWith('{') && value.endsWith('}')) {
        value = value.substring(1, value.length - 1);
    }
    return value.toLowerCase();
}
Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrWhiteSpace = function(value) {
    return Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(value) ||
        Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(value.trim());
}
Microsoft.Crm.Workflow.Utils.StringUtility.split = function(value, character, limit) {
    return value.split(character, limit);
}
Microsoft.Crm.Workflow.Utils.StringUtility.join = function(T, connector, items) {
    var $v_0 = new Sys.StringBuilder();
    if (!items.length) {
        return $v_0.toString();
    }
    $v_0.append(items[0].toString());
    for (var $v_1 = 1; $v_1 < items.length; $v_1++) {
        $v_0.append(connector);
        $v_0.append(items[$v_1].toString());
    }
    return $v_0.toString();
}


Microsoft.Crm.Workflow.Utils.ExceptionUtility = function() {
}
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull = function(expression, message) {
    if (!expression) {
        throw Error.create(message);
    }
}
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwNotSupportedException = function(message) {
    throw Error.create('NotSupportedException: ' + message);
}
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwInvalidOperationException = function(message) {
    throw Error.create('InvalidOperationException: ' + message);
}
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwArgumentException = function(message, parameterName) {
    throw Error.create('ArgumentException for ' + parameterName + ': ' + message);
}
Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException = function(message) {
    throw Error.create(message);
}
Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert = function(condition, message) {
    if (!condition) {
        throw Error.create(message);
    }
}


Type.registerNamespace('Microsoft.Crm.Workflow.Expressions');

Microsoft.Crm.Workflow.Expressions.BpfAttributeType = function() {}
Microsoft.Crm.Workflow.Expressions.BpfAttributeType.prototype = {
    processId: 0,
    activeStage: 1,
    selectedStage: 2,
    selectedStageCategory: 3,
    activeStageCategory: 4
}
Microsoft.Crm.Workflow.Expressions.BpfAttributeType
    .registerEnum('Microsoft.Crm.Workflow.Expressions.BpfAttributeType', false);


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
    trim: 19,
    dateAdd: 20,
    computeTimeTriggers: 21,
    createOptionSet: 22,
    bpfAttribute: 23
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
    entityCollection: 18,
    bpfProcess: 19,
    bpfStageCategory: 20,
    bpfStage: 21,
    entityReferenceCollection: 22
}
Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType
    .registerEnum('Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType', false);


Microsoft.Crm.Workflow.Expressions.AttributeDateTimeBehavior = function() {}
Microsoft.Crm.Workflow.Expressions.AttributeDateTimeBehavior.prototype = {
    none: 0,
    dynamic: 1,
    dateOnly: 2,
    staticTimeZoneInvariant: 3,
    userLocal: 4
}
Microsoft.Crm.Workflow.Expressions.AttributeDateTimeBehavior
    .registerEnum('Microsoft.Crm.Workflow.Expressions.AttributeDateTimeBehavior', false);


Microsoft.Crm.Workflow.Expressions.IExpressionVisitor = function() {}
Microsoft.Crm.Workflow.Expressions.IExpressionVisitor
    .registerInterface('Microsoft.Crm.Workflow.Expressions.IExpressionVisitor');


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
    nextXYears: 48,
    under: 49,
    notUnder: 50
}
Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator
    .registerEnum('Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator', false);


Microsoft.Crm.Workflow.Expressions.IEntityBaseDecorator = function() {}
Microsoft.Crm.Workflow.Expressions.IEntityBaseDecorator
    .registerInterface('Microsoft.Crm.Workflow.Expressions.IEntityBaseDecorator');


Microsoft.Crm.Workflow.Expressions.BinaryExpression = function(workflow, binaryOperator, leftOperand, rightOperands) {
    Microsoft.Crm.Workflow.Expressions.BinaryExpression.initializeBase(this, [workflow]);
    if (!Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isBinaryOperator(binaryOperator)) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .throwArgumentException('Operator in a binary expression must be a binary operator', 'binaryOperator');
    }
    if (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isGroupingOperator(binaryOperator)) {
        if (leftOperand.type) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Left operand in a grouping condition must be a logical expression',
                    'leftOperand');
        }
        if (rightOperands.length !== 1) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Exactly one right operand is expected in a grouping condition',
                    'rightOperand');
        }
        var $v_0 = rightOperands[0];
        if ($v_0.type) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Right operand in a grouping condition must be a logical expression',
                    'rightOperand');
        }
    }
    this.set_type(0);
    this.conditionOperatoroperator = binaryOperator;
    this.left = leftOperand;
    this.right = new Microsoft.Crm.Workflow.Expressions.ExpressionCollection(rightOperands, true);
    this.__class = 'BinaryExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.BinaryExpression.prototype = {
    get_operator: function() {
        return this.conditionOperatoroperator;
    },

    set_operator: function(value) {
        this.conditionOperatoroperator = value;
        return value;
    },

    get_leftOperand: function() {
        return this.left;
    },

    set_leftOperand: function(value) {
        this.left = value;
        return value;
    },

    get_rightOperands: function() {
        return this.right;
    },

    accept: function(visitor) {
        visitor.visitBinaryExpression(this);
    },

    conditionOperatoroperator: 6,
    left: null,
    right: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('conditionOperatoroperator',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.conditionOperatoroperator),
                true));
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

    fixInternalLinks: function(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.left.fixInternalLinks(workflowStep);
        if (this.right.get_count() > 0) {
            for (var $v_0 = 0; $v_0 < this.right.get_count(); $v_0++) {
                this.right.get_item($v_0).fixInternalLinks(workflowStep);
            }
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.conditionOperatoroperator = Number.parseInvariant($v_0.conditionOperatoroperator);
            if ($v_0.left) {
                this.left = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_0.left.__class);
                this.left.initializeFromDynamic($v_0.left);
            }
            if ($v_0.right) {
                this.right = new Microsoft.Crm.Workflow.Expressions.ExpressionCollection([], $v_0.right.$j_0);
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


Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression = function(sourceEntity, sourceAttributeName) {
    Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.initializeBase(this, [sourceEntity.$0_0]);
    this.entity = sourceEntity;
    this.attributeName = sourceAttributeName;
    this.__class = 'EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.prototype = {
    get_entity: function() {
        return this.entity;
    },

    get_attributeName: function() {
        return this.attributeName;
    },

    set_attributeName: function(value) {
        this.attributeName = value;
        return value;
    },

    getDisplayText: function(cultureInfo) {
        var $v_0 = this.entity.getLocalizedName(cultureInfo);
        var $v_1;
        if (Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.containsKey(this.attributeName)) {
            $v_1 = this.$0_0.$9_2.getResourceString(Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
                .getAttribute(this.attributeName));
        } else {
            $v_1 = this.$0_0.$9_2.getAttributeLocalizedName(cultureInfo, this.entity.entityName, this.attributeName);
        }
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty($v_0)) {
            return String.format('{0}:{1}', $v_0, $v_1);
        } else {
            return $v_1;
        }
    },

    accept: function(visitor) {
        visitor.visitEntityAttributeExpression(this);
    },

    entity: null,
    attributeName: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.entity.fixInternalLinks(workflowStep);
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildEntity($v_0.entity.__class);
            this.entity.initializeFromDynamic($v_0.entity);
            this.attributeName = $v_0.attributeName;
            this.behavior = $v_0.behavior;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.RelatedEntity = function(workflow, relatedAttributeName, relatedEntity) {
    Microsoft.Crm.Workflow.Expressions.RelatedEntity
        .initializeBase(this, [workflow, 'related' + '_' + relatedAttributeName + '_' + relatedEntity]);
    this.relatedAttributeName = relatedAttributeName;
    this.set_entityName(relatedEntity);
    this.__class = 'RelatedEntity:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.RelatedEntity.prototype = {
    get_relatedAttributeName: function() {
        return this.relatedAttributeName;
    },

    set_relatedAttributeName: function(value) {
        this.relatedAttributeName = value;
        return value;
    },

    getLocalizedName: function(cultureInfo) {
        return Microsoft.Crm.Workflow.Utils.StringUtility
            .formatInvariant('{0} ({1})',
                this.$0_0.$9_2.getAttributeLocalizedName(cultureInfo,
                    this.$0_0.primaryEntityName,
                    this.get_relatedAttributeName()),
                this.$0_0.$9_2.getEntityLocalizedName(cultureInfo, this.entityName));
    },

    get_uiXmlName: function() {
        return this.entityName + '.' + this.get_relatedAttributeName();
    },

    get_xamlKey: function() {
        return 'related_' + this.get_relatedAttributeName() + '#' + this.entityName;
    },

    appendToJson: function(sb) {
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relatedAttributeName', this.get_relatedAttributeName(), true));
    },

    relatedAttributeName: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.toJson.call(this));
        this.appendToJson($v_0);
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.set_relatedAttributeName($v_0.relatedAttributeName);
        }
    }
}


Microsoft.Crm.Workflow.Expressions
    .RelatedEntityLinked = function(workflow, relatedAttributeName, relatedEntity, relationshipName) {
        Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked
            .initializeBase(this, [workflow, relatedAttributeName, relatedEntity]);
        this
            .parameterName =
            'relatedlinked' + '_' + relationshipName + '_' + relatedAttributeName + '_' + relatedEntity;
        this.relatedAttributeName = relatedAttributeName;
        this.relationshipName = relationshipName;
        this.__class = 'RelatedEntityLinked:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked.prototype = {
    get_relatedAttributeName: function() {
        return this.relatedAttributeName;
    },

    set_relatedAttributeName: function(value) {
        this.relatedAttributeName = value;
        return value;
    },

    get_relationshipName: function() {
        return this.relationshipName;
    },

    set_relationshipName: function(value) {
        this.relationshipName = value;
        return value;
    },

    get_uiXmlName: function() {
        return this.entityName + '.' + this.get_relatedAttributeName() + '.' + this.relationshipName;
    },

    get_xamlKey: function() {
        return 'relatedlinked' +
            '_' +
            this.relationshipName +
            '#' +
            this.get_relatedAttributeName() +
            '#' +
            this.entityName;
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.RelatedEntity.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.relationshipName = $v_0.relationshipName;
        }
    },

    appendToJson: function(sb) {
        Microsoft.Crm.Workflow.Expressions.RelatedEntity.prototype.appendToJson.call(this, sb);
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relationshipName', this.relationshipName, true));
    },

    relatedAttributeName: null,
    relationshipName: null
}


Microsoft.Crm.Workflow.Expressions
    .EntityCreatedByStep = function(workflow,
        step,
        entityName,
        entityIdentifier,
        parameterName,
        isCustomOperationArgument) {
        Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep.initializeBase(this, [workflow, parameterName]);
        this.step = step;
        this.set_entityName(entityName);
        this.entityIdentifier = entityIdentifier;
        this.isCustomOperationArgument = isCustomOperationArgument;
        this.__class = 'EntityCreatedByStep:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep.prototype = {
    get_step: function() {
        return this.step;
    },

    get_isCustomOperationArgument: function() {
        return this.isCustomOperationArgument;
    },

    set_isCustomOperationArgument: function(value) {
        this.isCustomOperationArgument = value;
        return value;
    },

    get_entityIdentifier: function() {
        return this.entityIdentifier;
    },

    getLocalizedName: function(cultureInfo) {
        var $v_0;
        var $v_1;
        var $v_2 = this.$0_0.$9_2.getEntityLocalizedName(cultureInfo, this.entityName);
        var $v_3 = this.entityIdentifier;
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.entityIdentifier)) {
            if (Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(this.step)) {
                $v_1 = this.$0_0.getIdentifierDisplayName(this.identifierName);
            } else if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.step.description)) {
                $v_1 = this.step.description;
            } else {
                $v_1 = this.step.$0_0.$9_2.getResourceString('Web.SFA.Workflow.StepName.' + this.step.get_typeName());
                if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty($v_1)) {
                    $v_1 = this.step.get_typeName();
                }
            }
            $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.format(cultureInfo, '{0} ({1})', $v_1, $v_2);
        } else {
            if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.step.description)) {
                $v_1 = this.step.description;
            } else {
                if (Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep.isInstanceOfType(this.step)) {
                    var $v_4 = this.step;
                    $v_1 = $v_4.activityInfo.name;
                    if (((this.entityIdentifier) in $v_4.outputs)) {
                        $v_3 = ($v_4.outputs[this.entityIdentifier]).name;
                    }
                } else {
                    $v_1 = this.step.get_typeName();
                }
            }
            $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.format(cultureInfo, '{0}:{2} ({1})', $v_1, $v_2, $v_3);
        }
        return $v_0;
    },

    get_uiXmlName: function() {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.entityIdentifier)) {
            if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.identifierName)) {
                return this.entityName + '.' + this.step.id + '.' + this.entityName;
            } else {
                return this.entityName + '.' + this.step.id + '.' + this.identifierName + '.' + this.entityName;
            }
        } else {
            return this.entityName + '.' + this.step.id + '.' + this.entityIdentifier;
        }
    },

    step: null,
    entityIdentifier: null,
    identifierName: null,
    isCustomOperationArgument: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('step', this.step.toJson(), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('entityIdentifier', this.entityIdentifier, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('identifierName', this.identifierName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isCustomOperationArgument',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isCustomOperationArgument),
                true));
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.fixInternalLinks.call(this, workflowStep);
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.step)) {
            this.step.set_workflow(workflowStep);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.step = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep($v_0.step.__class);
            this.step.initializeFromDynamic($v_0.step);
            this.entityIdentifier = $v_0.entityIdentifier;
            this.isCustomOperationArgument = $v_0.isCustomOperationArgument;
            this.identifierName = $v_0.identifierName;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.EntitySpecification = function(entityName) {
    this.entityName = entityName;
    this.properties = Microsoft.Crm.Workflow.Utils.ArrayUtility
        .getList(Microsoft.Crm.Workflow.Expressions.PropertySpecification);
}
Microsoft.Crm.Workflow.Expressions.EntitySpecification.prototype = {
    get_entityName: function() {
        return this.entityName;
    },

    get_properties: function() {
        return this.properties;
    },

    addProperty: function(propertyName, propertyExpression) {
        var $v_0 = new Microsoft.Crm.Workflow.Expressions.PropertySpecification(propertyName, propertyExpression);
        this.properties.add($v_0);
    },

    accept: function(visitor) {
        visitor.visitEntitySpecification(this);
    },

    entityName: null,
    properties: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('entityName', this.entityName, false));
        $v_0.append(',');
        $v_0.append('\"properties\":');
        var $$t_2 = this;
        $v_0.append(Microsoft.Crm.Workflow.Utils.ArrayUtility.toJson(Microsoft.Crm.Workflow.Expressions
            .PropertySpecification,
            this.properties,
            function($p1_0) {
                return $p1_0.toJson();
            }).toString());
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function(workflowStep) {
        if (!this.properties) {
            return;
        }
        for (var $v_0 = 0; $v_0 < this.properties.get_count(); $v_0++) {
            this.properties.get_item($v_0).$1J_0(workflowStep);
        }
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.entityName = $v_0.entityName;
            if ($v_0.properties) {
                this.properties = Microsoft.Crm.Workflow.Utils.ArrayUtility
                    .getList(Microsoft.Crm.Workflow.Expressions.PropertySpecification);
                var $v_1 = $v_0.properties;
                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                    var $v_3 = new Microsoft.Crm.Workflow.Expressions.PropertySpecification('', null);
                    $v_3.initializeFromDynamic($v_1[$v_2]);
                    this.properties.add($v_3);
                }
            }
        }
    }
}


Microsoft.Crm.Workflow.Expressions.TimeSpanExpression = function(workflow, sourceValue) {
    Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.initializeBase(this, [workflow]);
    this.value = sourceValue;
    this.__class = 'TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.prototype = {
    get_value: function() {
        return this.value;
    },

    accept: function(visitor) {
        visitor.visitTimeSpanExpression(this);
    },

    get_displayText: function() {
        throw Error.create('should not be here');
    },

    value: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('days',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.days),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('hours',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.hours),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('minutes',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.minutes),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('months',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.months),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('years',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.years),
                true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            this.value.initializeFromDynamic(deserialized);
        }
    }
}


Microsoft.Crm.Workflow.Expressions.EntityBase = function(sourceWorkflow, sourceParameterName) {
    this.$0_0 = sourceWorkflow;
    this.parameterName = sourceParameterName;
}
Microsoft.Crm.Workflow.Expressions.EntityBase.prototype = {
    get_workflow: function() {
        return this.$0_0;
    },

    set_workflow: function(value) {
        this.$0_0 = value;
        return value;
    },

    get_entityName: function() {
        return this.entityName;
    },

    set_entityName: function(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!value, 'Entity name cannot be set to null');
        this.entityName = value;
        return value;
    },

    get_parameterName: function() {
        return this.parameterName;
    },

    set_parameterName: function(value) {
        this.parameterName = value;
        return value;
    },

    get_xamlKey: function() {
        return this.parameterName;
    },

    __class: 'EntityBase:#Microsoft.Crm.Workflow.Expressions',
    parameterName: null,
    entityName: null,
    $0_0: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('parameterName', this.parameterName, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('entityName', this.entityName, true));
        return $v_0.toString();
    },

    fixInternalLinks: function(workflowStep) {
        this.$0_0 = workflowStep;
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.entityName = $v_0.entityName;
            this.parameterName = $v_0.parameterName;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.MethodCallExpression = function(workflow, method, parameters) {
    Microsoft.Crm.Workflow.Expressions.MethodCallExpression.initializeBase(this, [workflow]);
    this.$1z_1(method, parameters);
}
Microsoft.Crm.Workflow.Expressions.MethodCallExpression.extractSelectFirstNull = function(methodExpression) {
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
            } else {
                return $v_0;
            }
        } else {
            return $v_0;
        }
    }
}
Microsoft.Crm.Workflow.Expressions.MethodCallExpression.prototype = {
    $1z_1: function($p0, $p1) {
        this.method = $p0;
        this.parameters = $p1;
        this.__class = 'MethodCallExpression:#Microsoft.Crm.Workflow.Expressions';
    },

    get_method: function() {
        return this.method;
    },

    getParameters: function() {
        return this.parameters;
    },

    accept: function(visitor) {
        visitor.visitMethodCallExpression(this);
    },

    fixInternalLinks: function(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        for (var $$arr_1 = this.parameters, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType($v_0)) {
                var $v_1 = $v_0;
                $v_1.fixInternalLinks(workflowStep);
            }
        }
    },

    method: 0,
    parameters: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('method',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this
                    .method),
                true));
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
                } else {
                    $v_0.append(Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant($v_2));
                }
            }
        }
        $v_0.append(']');
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
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
                } else {
                    this.parameters[$v_1] = $v_2;
                }
            }
        }
    }
}


Microsoft.Crm.Workflow.Expressions.InvalidEntity = function(workflow, parameterName) {
    Microsoft.Crm.Workflow.Expressions.InvalidEntity.initializeBase(this, [workflow, parameterName]);
    this.set_entityName('#' + parameterName);
}
Microsoft.Crm.Workflow.Expressions.InvalidEntity.prototype = {
    getLocalizedName: function(cultureInfo) {
        return 'Error';
    },

    get_uiXmlName: function() {
        return this.parameterName;
    }
}


Microsoft.Crm.Workflow.Expressions.PrimaryEntity = function(workflow) {
    Microsoft.Crm.Workflow.Expressions.PrimaryEntity.initializeBase(this, [workflow, 'primaryEntity']);
    this.set_entityName(workflow.primaryEntityName);
    this.__class = 'PrimaryEntity:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.PrimaryEntity.prototype = {
    getLocalizedName: function(cultureInfo) {
        return this.$0_0.$9_2.getEntityLocalizedName(cultureInfo, this.entityName);
    },

    get_uiXmlName: function() {
        return this.entityName;
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.toJson.call(this));
        $v_0.append('}');
        return $v_0.toString();
    }
}


Microsoft.Crm.Workflow.Expressions.ExpressionBase = function(workflow) {
    this.$0_0 = workflow;
    this.typeSet = false;
    this.__class = 'ExpressionBase:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype = {
    get_workflow: function() {
        return this.$0_0;
    },

    get_type: function() {
        return this.type;
    },

    set_type: function(value) {
        if (this.typeSet) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Cannot change the type after it was set', '_type');
        }
        this.type = value;
        return value;
    },

    get_behavior: function() {
        return this.behavior;
    },

    set_behavior: function(value) {
        this.behavior = value;
        return value;
    },

    __class: null,
    $0_0: null,
    type: 0,
    behavior: 0,
    typeSet: false,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('type', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.type), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('typeSet', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.typeSet), true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('behavior',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.behavior),
                true));
        return $v_0.toString();
    },

    fixInternalLinks: function(workflowStep) {
        this.$0_0 = workflowStep;
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.type = parseInt($v_0.type);
            this.behavior = parseInt($v_0.behavior);
            this.typeSet = $v_0.typeSet;
        }
    }
}


Microsoft.Crm.Workflow.Expressions.ExpressionCollection = function(initializeFromArray, sourceReadOnly) {
    this.$I_0 = [];
    if (initializeFromArray) {
        for (var $$arr_2 = initializeFromArray, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4];
            Array.add(this.$I_0, $v_0);
        }
    }
    this.$j_0 = sourceReadOnly;
}
Microsoft.Crm.Workflow.Expressions.ExpressionCollection.prototype = {
    get_item: function(index) {
        return this.$I_0[index];
    },

    set_item: function(index, value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!this.$j_0, 'Cannot modify value in a readonly expression collection');
        this.$I_0[index] = value;
        return value;
    },

    get_isReadOnly: function() {
        return this.$j_0;
    },

    indexOf: function(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        return Array.indexOf(this.$I_0, expression);
    },

    insert: function(index, expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.insert(this.$I_0, index, expression);
    },

    remove: function(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.remove(this.$I_0, expression);
        return true;
    },

    contains: function(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        return Array.contains(this.$I_0, expression);
    },

    add: function(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.add(this.$I_0, expression);
    },

    get_count: function() {
        return this.$I_0.length;
    },

    $j_0: false
}


Microsoft.Crm.Workflow.Expressions.LookupExpression = function(workflow, value, type, entityType, label) {
    Microsoft.Crm.Workflow.Expressions.LookupExpression.initializeBase(this, [workflow]);
    this.entityType = entityType;
    this.set_type(type);
    this.staticValue = value;
    this.label = label;
    this.__class = 'LookupExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.LookupExpression.prototype = {
    get_entityType: function() {
        return this.entityType;
    },

    set_entityType: function(value) {
        this.entityType = value;
        return value;
    },

    get_label: function() {
        return this.label;
    },

    set_label: function(value) {
        this.label = value;
        return value;
    },

    get_value: function() {
        return this.staticValue;
    },

    set_value: function(value) {
        this.staticValue = value;
        return value;
    },

    accept: function(visitor) {
        visitor.visitLookupExpression(this);
    },

    entityType: null,
    label: null,
    staticValue: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('entityType', this.entityType, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('label', this.label, true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('staticValue', (this.staticValue).toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            this.entityType = $v_0.entityType;
            this.label = $v_0.label;
            if ($v_0.staticValue) {
                this.staticValue = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression(($v_0.staticValue).__class);
                (this.staticValue).initializeFromDynamic($v_0.staticValue);
            }
        }
    }
}


Microsoft.Crm.Workflow.Expressions.PropertySpecification = function(sourcePropertyName, propertyValueExpression) {
    this.propertyName = sourcePropertyName;
    this.propertyValueExpr = propertyValueExpression;
}
Microsoft.Crm.Workflow.Expressions.PropertySpecification.prototype = {
    get_name: function() {
        return this.propertyName;
    },

    set_name: function(value) {
        this.propertyName = value;
        return value;
    },

    get_value: function() {
        return this.propertyValueExpr;
    },

    set_value: function(value) {
        this.propertyValueExpr = value;
        return value;
    },

    accept: function(visitor) {
        visitor.visitPropertySpecification(this);
    },

    propertyName: null,
    propertyValueExpr: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('propertyName', this.propertyName, false));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('propertyValueExpr', this.propertyValueExpr.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    $1J_0: function($p0) {
        this.propertyValueExpr.fixInternalLinks($p0);
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            var $v_0 = deserialized;
            this.propertyName = $v_0.propertyName;
            this.propertyValueExpr = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                .buildExpression($v_0.propertyValueExpr.__class);
            this.propertyValueExpr.initializeFromDynamic($v_0.propertyValueExpr);
        }
    }
}


Microsoft.Crm.Workflow.Expressions.NullExpression = function(workflow) {
    Microsoft.Crm.Workflow.Expressions.NullExpression.initializeBase(this, [workflow]);
    this.__class = 'NullExpression:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.NullExpression.prototype = {
    accept: function(visitor) {
        visitor.visitNullExpression(this);
    },

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append('}');
        return $v_0.toString();
    }
}


Microsoft.Crm.Workflow.Expressions.OperatorClassifier = function() {
}
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$$cctor = function() {
    if (!Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5) {
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5 = new Array(30);
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[0] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[1] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[2] |= 2;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[3] |= 2;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[24] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[25] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[26] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[27] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[28] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[29] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[30] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[31] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[32] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[33] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[34] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[35] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[36] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[37] |= 1;
        Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[38] |= 1;
    }
}
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isGroupingOperator = function(op) {
    return (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[op] & 2) === 2;
}
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isBinaryOperator = function(op) {
    return !Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isUnaryOperator(op);
}
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isUnaryOperator = function(op) {
    return (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5[op] & 1) === 1;
}


Microsoft.Crm.Workflow.Expressions.PrimitiveExpression = function(workflow, value, type) {
    Microsoft.Crm.Workflow.Expressions.PrimitiveExpression.initializeBase(this, [workflow]);
    this.__class = 'PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions';
    this.primitiveValue = value;
    this.set_type(type);
}
Microsoft.Crm.Workflow.Expressions.PrimitiveExpression.prototype = {
    get_value: function() {
        return this.primitiveValue;
    },

    set_value: function(value) {
        this.primitiveValue = value;
        return value;
    },

    accept: function(visitor) {
        visitor.visitPrimitiveExpression(this);
    },

    primitiveValue: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        if (this.type === 9) {
            $v_0.append(this.$1t_1());
        } else {
            $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getPropertyJson('primitiveValue', this.$1u_1(), true));
        }
        $v_0.append('}');
        return $v_0.toString();
    },

    $1t_1: function() {
        if (!this.primitiveValue) {
            return null;
        }
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = this.primitiveValue;
        $v_0.append(',');
        $v_0.append('\"primitiveValue\":[');
        if ($v_1.length > 0) {
            $v_0.append($v_1[0].toJson());
            for (var $v_2 = 1; $v_2 < $v_1.length; $v_2++) {
                $v_0.append(',');
                $v_0.append($v_1[$v_2].toJson());
            }
        }
        $v_0.append(']');
        return $v_0.toString();
    },

    $1u_1: function() {
        return (Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.primitiveValue))
            ? null
            : this.primitiveValue.toString();
    },

    initializeFromDynamic: function(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic.call(this, deserialized);
            var $v_0 = deserialized;
            if (this.type === 9) {
                if ($v_0.primitiveValue) {
                    this.primitiveValue = new Array(0);
                    var $v_1 = $v_0.primitiveValue;
                    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                        var $v_3 = $v_1[$v_2];
                        var $v_4 = new Microsoft.Crm.Workflow.Expressions.EntitySpecification($v_3.entityName);
                        $v_4.initializeFromDynamic($v_3);
                        Array.add(this.primitiveValue, $v_4);
                    }
                }
            } else {
                this.primitiveValue = $v_0.primitiveValue;
            }
        }
    }
}


Microsoft.Crm.Workflow.Expressions.UnaryExpression = function(workflow, unaryOperator, operand) {
    Microsoft.Crm.Workflow.Expressions.UnaryExpression.initializeBase(this, [workflow]);
    this.__class = 'UnaryExpression:#Microsoft.Crm.Workflow.Expressions';
    if (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isGroupingOperator(unaryOperator)) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .throwArgumentException('Operator in a unary expression cannot be a grouping operator', 'unaryOperator');
    }
    if (!Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isUnaryOperator(unaryOperator)) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .throwArgumentException('Operator in a unary expression must be unary operator', 'unaryOperator');
    }
    this.set_type(0);
    this.operand = operand;
    this.conditionOperatoroperator = unaryOperator;
}
Microsoft.Crm.Workflow.Expressions.UnaryExpression.prototype = {
    get_operand: function() {
        return this.operand;
    },

    get_operator: function() {
        return this.conditionOperatoroperator;
    },

    accept: function(visitor) {
        visitor.visitUnaryExpression(this);
    },

    conditionOperatoroperator: 0,
    operand: null,

    toJson: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('{');
        $v_0.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('conditionOperatoroperator',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.conditionOperatoroperator),
                true));
        $v_0.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('operand', this.operand.toJson(), true));
        $v_0.append('}');
        return $v_0.toString();
    },

    fixInternalLinks: function(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.operand.fixInternalLinks(workflowStep);
    },

    initializeFromDynamic: function(deserialized) {
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


Microsoft.Crm.Workflow.Expressions.EntityCreatedByStepDecorator = function(entity, metadataProvider) {
    Microsoft.Crm.Workflow.Expressions.EntityCreatedByStepDecorator.initializeBase(this, [entity, metadataProvider]);
}


Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1 = function(entity, metadataProvider) {
    Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1
        .$$(this.$$gta['Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1']['TEntity'])
        .initializeBase(this, [entity.$0_0, entity.parameterName]);
    this.$6_1 = entity;
    entity.$0_0.$9_2 = metadataProvider;
}
Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.$$ = function(TEntity) {
    var $$cn = 'EntityBaseDecorator$1' + '$' + TEntity.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Workflow.Expressions[$$cn]) {
        var $$ccr = Microsoft.Crm.Workflow.Expressions[$$cn] = function() {
            (this.$$gta = this
                .$$gta ||
                {})['Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1'] = { 'TEntity': TEntity };
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Workflow.Expressions.' + $$cn,
            Microsoft.Crm.Workflow.Expressions.EntityBase,
            Microsoft.Crm.Workflow.Expressions.IEntityBaseDecorator);
        var $$dict_5 = Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Workflow.Expressions[$$cn];
}
Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.prototype = {
    get_displayName: function() {
        return this.$6_1.getLocalizedName(null);
    },

    getLocalizedName: function(cultureInfo) {
        return this.$6_1.getLocalizedName(cultureInfo);
    },

    get_uiXmlName: function() {
        return this.$6_1.get_uiXmlName();
    },

    get_entitySource: function() {
        return this.$6_1;
    },

    $6_1: null
}


Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory = function() {
}
Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory.getDecorator = function(entity, metadataProvider) {
    if (Microsoft.Crm.Workflow.Expressions.PrimaryEntity.isInstanceOfType(entity)) {
        return new Microsoft.Crm.Workflow.Expressions.PrimaryEntityDecorator(entity, metadataProvider);
    } else if (Microsoft.Crm.Workflow.Expressions.RelatedEntity.isInstanceOfType(entity)) {
        return new Microsoft.Crm.Workflow.Expressions.RelatedEntityDecorator(entity, metadataProvider);
    } else if (Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep.isInstanceOfType(entity)) {
        return new Microsoft.Crm.Workflow.Expressions.EntityCreatedByStepDecorator(entity, metadataProvider);
    }
    return new Microsoft.Crm.Workflow.Expressions.InvalidEntityDecorator(entity, metadataProvider);
}


Microsoft.Crm.Workflow.Expressions.InvalidEntityDecorator = function(entity, metadataProvider) {
    Microsoft.Crm.Workflow.Expressions.InvalidEntityDecorator.initializeBase(this, [entity, metadataProvider]);
}


Microsoft.Crm.Workflow.Expressions.PrimaryEntityDecorator = function(entity, metadataProvider) {
    Microsoft.Crm.Workflow.Expressions.PrimaryEntityDecorator.initializeBase(this, [entity, metadataProvider]);
}


Microsoft.Crm.Workflow.Expressions.RelatedEntityDecorator = function(entity, metadataProvider) {
    Microsoft.Crm.Workflow.Expressions.RelatedEntityDecorator.initializeBase(this, [entity, metadataProvider]);
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
    concat: 22,
    trimRight: 23,
    trimLeft: 24,
    addHours: 25,
    subtractHours: 26,
    addDays: 27,
    subtractDays: 28,
    addWeeks: 29,
    subtractWeeks: 30,
    addMonths: 31,
    subtractMonths: 32,
    addYears: 33,
    subtractYears: 34,
    diffInMinutes: 42,
    diffInHours: 43,
    diffInDays: 44,
    diffInWeeks: 45,
    diffInMonths: 46,
    diffInYears: 47,
    now: 48,
    sum: 35,
    count: 36,
    average: 37,
    minimum: 38,
    maximum: 39,
    createOptionSet: 40,
    bpfAttribute: 41
}
Microsoft.Crm.Workflow.Activities.ExpressionOperator
    .registerEnum('Microsoft.Crm.Workflow.Activities.ExpressionOperator', false);


Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus = function() {}
Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus.prototype = {
    succeeded: 0,
    canceled: 1,
    failed: 2,
    retry: 3,
    suspended: 4
}
Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus
    .registerEnum('Microsoft.Crm.Workflow.Activities.WorkflowCompletionStatus', false);


Type.registerNamespace('Microsoft.Crm.Workflow.Validators');

Microsoft.Crm.Workflow.Validators.IExpressionValidator = function() {}
Microsoft.Crm.Workflow.Validators.IExpressionValidator
    .registerInterface('Microsoft.Crm.Workflow.Validators.IExpressionValidator');


Microsoft.Crm.Workflow.Validators.ICalculatedFieldValidatorContext = function() {}
Microsoft.Crm.Workflow.Validators.ICalculatedFieldValidatorContext
    .registerInterface('Microsoft.Crm.Workflow.Validators.ICalculatedFieldValidatorContext');


Microsoft.Crm.Workflow.Validators.IValidatorContext = function() {}
Microsoft.Crm.Workflow.Validators.IValidatorContext
    .registerInterface('Microsoft.Crm.Workflow.Validators.IValidatorContext');


Microsoft.Crm.Workflow.Validators.BaseValidatorContext = function() {
}
Microsoft.Crm.Workflow.Validators.BaseValidatorContext.prototype = {
    trace: function(traceTemplate) {
        var args = [];
        for (var $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2) {
            args[$$pai_2 - 1] = arguments[$$pai_2];
        }
    },

    $1E_0: null,

    get_attributeLogicalName: function() {
        return this.$1E_0;
    },

    set_attributeLogicalName: function(value) {
        this.$1E_0 = value;
        return value;
    }
}


Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext = function() {
    Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext.initializeBase(this);
}


Microsoft.Crm.Workflow.Validators.ExpressionValidator = function() {
}
Microsoft.Crm.Workflow.Validators.ExpressionValidator.prototype = {
    get_context: function() {
        return this.$1_0;
    },

    set_context: function(value) {
        this.$1_0 = value;
        return value;
    },

    $1_0: null
}


Microsoft.Crm.Workflow.Validators.UnaryExpressionValidator = function(expression) {
    Microsoft.Crm.Workflow.Validators.UnaryExpressionValidator.initializeBase(this);
    if (expression) {
        this.$7_1 = expression;
        this.$7_1.set_type(0);
    }
    this.applicableOperatorsDictionary = {};
    var $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility
        .getList(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator);
    $v_0.add(0);
    $v_0.add(1);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            0,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            11,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            1,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            8,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            2,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            5,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            3,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            14,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            7,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            4,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            10,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            12,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
            this.applicableOperatorsDictionary,
            13,
            $v_0);
}
Microsoft.Crm.Workflow.Validators.UnaryExpressionValidator.prototype = {
    applicableOperatorsDictionary: null,
    $7_1: null,

    validate: function() {
    }
}


Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator = function(expression) {
    Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.initializeBase(this);
    if (expression) {
        this.$7_1 = expression;
        this.$7_1.set_type(0);
    }
    this.applicableOperatorsDictionary = {};
    this.$M_1 = {};
    this.$K_1 = {};
    this.$S_1 = {};
    this.$i_1 = {};
    this.$C_1 = {};
    this.$k_1 = {};
    this.$l_1 = {};
    Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.$1B = Microsoft.Crm.Workflow.Utils.SharedUtility
        .getList(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator);
    Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.$1B.add(6);
    Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.$1B.add(7);
    var $v_0 = null;
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(5);
    $v_0.add(3);
    $v_0.add(7);
    $v_0.add(4);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$M_1,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$M_1,
            7,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$M_1,
            14,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$M_1,
            16,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$M_1,
            15,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$M_1,
            17,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(2);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$K_1,
            16,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$K_1,
            17,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$K_1,
            14,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$K_1,
            15,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$K_1,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$K_1,
            7,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$S_1,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$S_1,
            7,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$S_1,
            2,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$S_1,
            3,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(10);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$i_1,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$i_1,
            7,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(12);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$k_1,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$k_1,
            7,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(13);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$l_1,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$l_1,
            7,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(14);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            6,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            7,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            8,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            9,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            10,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            11,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            12,
            $v_0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$C_1,
            13,
            $v_0);
}
Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.prototype = {
    applicableOperatorsDictionary: null,
    $M_1: null,
    $K_1: null,
    $S_1: null,
    $i_1: null,
    $C_1: null,
    $k_1: null,
    $l_1: null,
    $7_1: null,

    validate: function() {
    },

    getTypeDictionary: function(expressionType) {
        switch (expressionType) {
        case 5:
        case 3:
        case 7:
        case 4:
            return this.$M_1;
        case 14:
            return this.$C_1;
        case 0:
            return this.$S_1;
        case 10:
            return this.$i_1;
        case 2:
            return this.$K_1;
        case 12:
            return this.$k_1;
        case 13:
            return this.$l_1;
        default:
            return null;
        }
    }
}


Microsoft.Crm.Workflow.Validators.MethodCallArithmeticEvaluateExpressionValidator = function($p0, $p1, $p2) {
    Microsoft.Crm.Workflow.Validators.MethodCallArithmeticEvaluateExpressionValidator
        .initializeBase(this, [$p0, $p1, $p2]);
    if (!this.$4_0) {
        this.$1_0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089372, this.$1_0.get_attributeLogicalName());
    }
    if (this.$4_0.length !== 2) {
        this.$1_0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
            Object.getType(this).getName(),
            this.$4_0.length,
            2);
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089372, this.$1_0.get_attributeLogicalName());
    }
    this.$Q_1 = {};
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType, Number, this.$Q_1, 5, 1);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType, Number, this.$Q_1, 3, 2);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType, Number, this.$Q_1, 7, 3);
}
Microsoft.Crm.Workflow.Validators.MethodCallArithmeticEvaluateExpressionValidator.prototype = {
    $Q_1: null,

    validate: function() {
        this.$22_1();
        this.$J_0 = Microsoft.Crm.Workflow.Validators.TypeUtility
            .methodCallExpressionSetTypeFromRank(this.$Q_1, this.$4_0);
        if (this.$B_0 === 3) {
            this.$23_1();
        }
    },

    $23_1: function() {
        for (var $v_0 = 1; $v_0 < this.$4_0.length; $v_0++) {
            var $v_1 = Microsoft.Crm.Workflow.Expressions.MethodCallExpression.extractSelectFirstNull(this.$4_0[$v_0]);
            if (Object.getType($v_1) !== Microsoft.Crm.Workflow.Expressions.PrimitiveExpression) {
                continue;
            }
            var $v_2 = $v_1;
            if ($v_2.primitiveValue !== '0' && $v_2.primitiveValue !== 0) {
                continue;
            }
            this.$1_0.trace('Attempted to divide by zero in sub-formula {0} in {1}',
                $v_0,
                $v_2.primitiveValue.toString(),
                Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089363, $v_2.primitiveValue.toString());
        }
    },

    $22_1: function() {
        var $v_0 = this.$4_0[0];
        var $v_1 = $v_0.type;
        if (!Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType, Number, this.$Q_1, $v_1)) {
            this.$1_0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                0,
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1),
                Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089370,
                    Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_0),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1));
        }
        for (var $v_2 = 1; $v_2 < this.$4_0.length; $v_2++) {
            var $v_3 = this.$4_0[$v_2];
            var $v_4 = $v_3.type;
            if (!Microsoft.Crm.Workflow.Utils.SharedUtility
                .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions
                    .WorkflowAttributeType,
                    Number,
                    this.$Q_1,
                    $v_4)) {
                this.$1_0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    $v_2,
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_4),
                    Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089370,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_3),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_4));
            }
        }
    }
}


Microsoft.Crm.Workflow.Validators.MethodCallDateMathEvaluateExpressionValidator = function($p0, $p1, $p2) {
    Microsoft.Crm.Workflow.Validators.MethodCallDateMathEvaluateExpressionValidator
        .initializeBase(this, [$p0, $p1, $p2]);
    switch ($p1) {
    case 42:
    case 47:
    case 43:
    case 44:
    case 45:
    case 46:
        this.$J_0 = 5;
        break;
    default:
        this.$J_0 = 2;
        break;
    }
}
Microsoft.Crm.Workflow.Validators.MethodCallDateMathEvaluateExpressionValidator.prototype = {
    validate: function() {
        if (!this.$4_0) {
            this.$1_0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if (!this.$4_0.length) {
            return;
        }
        if (this.$4_0.length !== 2) {
            this.$1_0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                2,
                this.$4_0.length);
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        var $v_0 = this.$4_0[0];
        var $v_1 = this.$4_0[1];
        if (!$v_0 || !$v_1) {
            this.$1_0.trace('One or more null operands have been passed into {0}', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if (this.$J_0 === 2 && !this.$R_0) {
            if ($v_0.behavior === $v_1.behavior) {
                this.$R_0 = $v_1.behavior;
            } else {
                this.$R_0 = ((!$v_1.behavior) ? $v_0.behavior : $v_1.behavior);
            }
        }
        switch (this.$B_0) {
        case 42:
        case 47:
        case 43:
        case 44:
        case 45:
        case 46:
            if ($v_0.type !== 2) {
                this.$1_0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    0,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(5),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_0),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type));
            }
            if ($v_1.type !== 2) {
                this.$1_0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
            }
            if ($v_0.behavior !== $v_1.behavior) {
                this.$1_0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
            }
            if ((this.$B_0 === 42 || this.$B_0 === 43) && $v_0.behavior === 2) {
                this.$1_0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089370,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
            }
            break;
        default:
            if ($v_0.type !== 5) {
                this.$1_0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    0,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(5),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_0),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type));
            }
            if ($v_1.type !== 2) {
                this.$1_0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
            }
            if ((this.$B_0 === 25 || this.$B_0 === 26) && $v_1.behavior === 2) {
                this.$1_0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
            }
            break;
        }
    }
}


Microsoft.Crm.Workflow.Validators
    .MethodCallEvaluateExpressionValidatorBase = function(operands, expressionOperator, context) {
        this.$B_0 = expressionOperator;
        this.$4_0 = operands;
        this.$1_0 = context;
    }
Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorBase.prototype = {
    $4_0: null,

    get_operands: function() {
        return this.$4_0;
    },

    set_operands: function(value) {
        this.$4_0 = value;
        return value;
    },

    $J_0: 0,

    get_type: function() {
        return this.$J_0;
    },

    set_type: function(value) {
        this.$J_0 = value;
        return value;
    },

    $R_0: 0,

    get_behaviorType: function() {
        return this.$R_0;
    },

    set_behaviorType: function(value) {
        this.$R_0 = value;
        return value;
    },

    $1_0: null,

    get_context: function() {
        return this.$1_0;
    },

    set_context: function(value) {
        this.$1_0 = value;
        return value;
    },

    $B_0: 0,

    get_operator: function() {
        return this.$B_0;
    },

    set_operator: function(value) {
        this.$B_0 = value;
        return value;
    }
}


Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorFactory = function() {
}
Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorFactory
    .getValidator = function(expressionOperator, expressions, context) {
        var $v_0 = null;
        switch (expressionOperator) {
        case 0:
        case 1:
        case 2:
        case 3:
            $v_0 = new Microsoft.Crm.Workflow.Validators
                .MethodCallArithmeticEvaluateExpressionValidator(expressions, expressionOperator, context);
            break;
        case 25:
        case 27:
        case 29:
        case 31:
        case 33:
        case 26:
        case 28:
        case 30:
        case 32:
        case 34:
        case 48:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
            $v_0 = new Microsoft.Crm.Workflow.Validators
                .MethodCallDateMathEvaluateExpressionValidator(expressions, expressionOperator, context);
            break;
        case 22:
        case 24:
        case 23:
            $v_0 = new Microsoft.Crm.Workflow.Validators
                .MethodCallStringEvaluateExpressionValidator(expressions, expressionOperator, context);
            break;
        case 35:
        case 37:
        case 39:
        case 38:
        case 36:
            break;
        default:
            context.trace('Unexpected expression operator {0} in {1}',
                Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(expressionOperator),
                Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorFactory.getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089369,
                    Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(expressionOperator));
            break;
        }
        return $v_0;
    }


Microsoft.Crm.Workflow.Validators.MethodCallStringEvaluateExpressionValidator = function($p0, $p1, $p2) {
    Microsoft.Crm.Workflow.Validators.MethodCallStringEvaluateExpressionValidator.initializeBase(this, [$p0, $p1, $p2]);
    this.$J_0 = 14;
}
Microsoft.Crm.Workflow.Validators.MethodCallStringEvaluateExpressionValidator.prototype = {
    validate: function() {
        switch (this.$B_0) {
        case 22:
            this.validateConcat();
            break;
        case 24:
        case 23:
            this.validateTrim();
            break;
        default:
            this.$1_0.trace('Unexpected expression operator {0} in {1}',
                Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(this.$B_0),
                Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089369, Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(this.$B_0));
            break;
        }
    },

    validateConcat: function() {
        if (!this.$4_0) {
            this.$1_0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if (this.$4_0.length < 2) {
            this.$1_0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                '>1',
                this.$4_0.length);
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < this.$4_0.length; $v_1++) {
            $v_0 = this.$4_0[$v_1];
            if ($v_0.type !== 14 && $v_0.type !== 5 && $v_0.type !== 7 && $v_0.type !== 3) {
                this.$1_0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    $v_1,
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type),
                    Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_0),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type));
            }
        }
    },

    validateTrim: function() {
        if (!this.$4_0) {
            this.$1_0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if (this.$4_0.length !== 2) {
            this.$1_0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                2,
                this.$4_0.length);
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089372);
        }
        var $v_0 = this.$4_0[0];
        var $v_1 = this.$4_0[1];
        if (!$v_0 || !$v_1) {
            this.$1_0.trace('One or more null operands have been passed into {0}', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if ($v_0.type !== 14) {
            this.$1_0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                0,
                Object.getType(this).getName(),
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(14),
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type));
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089364,
                    Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_0),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0.type));
        }
        if ($v_1.type !== 5 && $v_1.type !== 3) {
            this.$1_0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                1,
                Object.getType(this).getName(),
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(5),
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089364,
                    Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString($v_1),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_1.type));
        }
    }
}


Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator = function(expression) {
    Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator.initializeBase(this);
    this.$1_0 = new Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext();
    this.$7_1 = expression;
}
Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator.prototype = {
    $7_1: null,

    validate: function() {
        switch (this.$7_1.method) {
        case 3:
            this.$24_1();
            break;
        case 0:
            this.$25_1();
            break;
        default:
            this.$1_0.trace('Unexpected method call {0} in {1}',
                Microsoft.Crm.Workflow.Expressions.MethodCall.toString(this.$7_1.method),
                Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
            break;
        }
    },

    $24_1: function() {
        var $v_0 = this.$7_1.getParameters();
        if (!$v_0) {
            this.$1_0.trace('Parameter array passed into {0} is null', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if ($v_0.length < 1) {
            this.$1_0.trace('Invalid number of parameters in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                '>=1',
                $v_0.length);
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        var $v_1 = new Array($v_0.length - 1);
        for (var $v_4 = 1; $v_4 < $v_0.length; $v_4++) {
            $v_1[$v_4 - 1] = $v_0[$v_4];
        }
        var $v_2 = $v_0[0];
        if ($v_2 === 48) {
            this.$7_1.behavior = 1;
        }
        if ($v_0.length !== $v_1.length + 1) {
            this.$1_0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                $v_0.length - 1,
                $v_1.length);
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        var $v_3 = Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorFactory
            .getValidator($v_2, $v_1, this.$1_0);
        $v_3.validate();
        this.$7_1.set_type($v_3.$J_0);
        if (!this.$7_1.behavior && this.$7_1.type === 2) {
            this.$7_1.behavior = $v_3.$R_0;
        }
    },

    $25_1: function() {
        var $v_0 = this.$7_1.getParameters();
        if (!$v_0) {
            this.$1_0.trace('Parameter array passed into {0} is null', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if ($v_0.length !== 1) {
            this.$1_0.trace('Invalid number of parameters in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                1,
                $v_0.length);
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        this.$7_1.set_type(($v_0[0]).type);
        var $v_1 = $v_0[0];
        if ((Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.isInstanceOfType($v_0[0]) ||
                Microsoft.Crm.Workflow.Expressions.MethodCallExpression.isInstanceOfType($v_0[0])) &&
            this.$7_1.type === 2 &&
            !this.$7_1.behavior) {
            this.$7_1.behavior = $v_1.behavior;
        }
    }
}


Microsoft.Crm.Workflow.Validators.SetAttributeValueStepValidator = function() {
    this.$E_0 = {};
    this.$1_0 = new Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext();
    var $v_0 = null;
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(0);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$E_0,
            0,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(2);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$E_0,
            2,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(3);
    $v_0.add(5);
    $v_0.add(7);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$E_0,
            3,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(3);
    $v_0.add(5);
    $v_0.add(7);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$E_0,
            5,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(3);
    $v_0.add(5);
    $v_0.add(7);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$E_0,
            7,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(10);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$E_0,
            10,
            $v_0);
    $v_0 = Microsoft.Crm.Workflow.Utils.SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
    $v_0.add(14);
    $v_0.add(3);
    $v_0.add(5);
    $v_0.add(7);
    Microsoft.Crm.Workflow.Utils.SharedUtility
        .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
            Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
            this.$E_0,
            14,
            $v_0);
}
Microsoft.Crm.Workflow.Validators.SetAttributeValueStepValidator.prototype = {
    $E_0: null,
    $1_0: null,

    validateAssignmentApplicability: function(attributeType, attributeBehaviorDateTimeType, expression) {
        var $v_0 = attributeType;
        var $v_1 = attributeBehaviorDateTimeType;
        var $v_2 = expression.type;
        var $v_3 = expression.behavior;
        if (!Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this.$E_0,
                $v_0)) {
            this.$1_0.trace('Attribute {0} is not a valid calculated field',
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_2));
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this.$1_0.get_attributeLogicalName());
        }
        if (!Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryGetValue(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this.$E_0,
                $v_0).contains($v_2)) {
            this.$1_0.trace('Attribute type {0} is not a valid for set on {1} type calculated field',
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_2),
                Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0));
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089365,
                    Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(expression),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString($v_0));
        }
        if ($v_0 === 2 && $v_3 !== $v_1) {
            if ($v_1 === 2) {
                this.$1_0.trace('You can only use a Date Only type of field.');
                Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089350);
            } else if ($v_1 === 3) {
                this.$1_0.trace('You can only use a Time-Zone Independent Date Time type of field.');
                Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089349);
            } else if ($v_1 === 1) {
                this.$1_0.trace('You can only use a User Local Date Time type of field.');
                Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089348);
            }
        }
    }
}


Microsoft.Crm.Workflow.Validators.TypeUtility = function() {
}
Microsoft.Crm.Workflow.Validators.TypeUtility.methodCallExpressionSetTypeFromRank = function(rankDictionary, operands) {
    var $v_0 = 0;
    var $v_1 = true;
    for (var $$arr_4 = operands, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_2 = $$arr_4[$$idx_6];
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.Utils.SharedUtility
                .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                    Number,
                    rankDictionary,
                    $v_2.type),
                'dictionary does not contain key');
        if ($v_1) {
            $v_0 = $v_2.type;
            $v_1 = false;
            continue;
        }
        if (Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryGetValue(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Number,
                rankDictionary,
                $v_2.type) >
            Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryGetValue(Microsoft.Crm.Workflow.Expressions
                .WorkflowAttributeType,
                Number,
                rankDictionary,
                $v_0)) {
            $v_0 = $v_2.type;
        }
    }
    return $v_0;
}


Type.registerNamespace('ProcessObjectModel.Visitors');

ProcessObjectModel.Visitors.IStageStepVisitor = function() {}
ProcessObjectModel.Visitors.IStageStepVisitor.registerInterface('ProcessObjectModel.Visitors.IStageStepVisitor');


ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor = function() {}
ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor
    .registerInterface('ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor');


ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor = function() {}
ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor
    .registerInterface('ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor');


ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory = function() {}
ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory
    .registerInterface('ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory');


ProcessObjectModel.Visitors.ConditionStepVisitor = function() {
    ProcessObjectModel.Visitors.ConditionStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors.ConditionStepVisitor.prototype = {
    visit: function($p0) {
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase.prototype.visit.call(this, $p0);
        var $v_0 = $p0;
        this.$F_0.addCondition($v_0);
        this.visitChildren($v_0);
    }
}


ProcessObjectModel.Visitors.RelationshipCollectionStepVisitor = function() {
    ProcessObjectModel.Visitors.RelationshipCollectionStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors.RelationshipCollectionStepVisitor.prototype = {
    visit: function($p0) {
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase.prototype.visit.call(this, $p0);
        var $v_0 = $p0;
        for (var $v_1 = 0; $v_1 < $v_0.steps.get_Count(); $v_1++) {
            var $v_2 = $v_0.steps.get_item($v_1);
            this.$F_0.addRelationship($v_2);
        }
    }
}


ProcessObjectModel.Visitors.EntityStepVisitor = function() {
    ProcessObjectModel.Visitors.EntityStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors.EntityStepVisitor.prototype = {
    visit: function($p0) {
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase.prototype.visit.call(this, $p0);
        var $v_0 = $p0;
        this.$F_0.addEntity($v_0);
        this.visitChildren($v_0);
    },

    createStepVisitor: function($p0, $p1, $p2) {
        var $v_0 = this.$m_0.createStepVisitor($p1, this.$F_0);
        if (ProcessObjectModel.Visitors.IStageStepVisitor.isInstanceOfType($v_0)) {
            var $v_1 = $v_0;
            $v_1.set_parentStep($p0);
        }
        return $v_0;
    }
}


ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase = function() {
}
ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase.prototype = {
    $F_0: null,
    $m_0: null,

    get_stepVisitorFactory: function() {
        return this.$m_0;
    },

    set_stepVisitorFactory: function($p0) {
        this.$m_0 = $p0;
        return $p0;
    },

    get_businessProcessFlowVisitor: function() {
        return this.$F_0;
    },

    set_businessProcessFlowVisitor: function($p0) {
        this.$F_0 = $p0;
        return $p0;
    },

    visit: function($p0) {
    },

    visitChildren: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.steps.get_Count(); $v_0++) {
            var $v_1 = $p0.steps.get_item($v_0);
            var $v_2 = this.createStepVisitor($p0, $v_1, this.$F_0);
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                continue;
            }
            $v_2.visit($v_1);
        }
    },

    createStepVisitor: function($p0, $p1, $p2) {
        return this.$m_0.createStepVisitor($p1, this.$F_0);
    }
}


ProcessObjectModel.Visitors.StageStepVisitor = function() {
    ProcessObjectModel.Visitors.StageStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors.StageStepVisitor.prototype = {
    visit: function($p0) {
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase.prototype.visit.call(this, $p0);
        var $v_0 = $p0;
        this.$F_0.addStage(this.$z_1, $v_0);
        this.visitChildren($v_0);
    },

    get_parentStep: function() {
        return this.$z_1;
    },

    set_parentStep: function($p0) {
        this.$z_1 = $p0;
        return $p0;
    },

    $z_1: null
}


ProcessObjectModel.Visitors.StepVisitorFactory = function() {
}
ProcessObjectModel.Visitors.StepVisitorFactory.prototype = {
    createStepVisitor: function($p0, $p1) {
        var $v_0 = null;
        if (Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType($p0)) {
            $v_0 = new ProcessObjectModel.Visitors.WorkflowStepVisitor();
        }
        if (Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($p0)) {
            $v_0 = new ProcessObjectModel.Visitors.EntityStepVisitor();
        }
        if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($p0)) {
            $v_0 = new ProcessObjectModel.Visitors.StageStepVisitor();
        }
        if (Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType($p0)) {
            $v_0 = new ProcessObjectModel.Visitors.ConditionStepVisitor();
        }
        if (Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep.isInstanceOfType($p0)) {
            $v_0 = new ProcessObjectModel.Visitors.RelationshipCollectionStepVisitor();
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            $v_0.set_businessProcessFlowVisitor($p1);
            $v_0.set_stepVisitorFactory(this);
        }
        return $v_0;
    }
}


ProcessObjectModel.Visitors.BusinessProcessFlowVisitor = function() {
}
ProcessObjectModel.Visitors.BusinessProcessFlowVisitor.prototype = {
    $e_0: null,
    $10_0: null,
    $y_0: null,
    $18_0: null,
    $O_0: null,
    $19_0: null,
    $13_0: null,
    $v_0: null,
    $w_0: false,
    $u_0: false,
    $16_0: null,

    get_stages: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$18_0)) {
            this.$18_0 = [];
        }
        return this.$18_0;
    },

    get_$V_0: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$16_0)) {
            this.$16_0 = {};
        }
        return this.$16_0;
    },

    $1l_0: function() {
        if (!this.$w_0) {
            this.$O_0 = this.get_stagesById();
            return;
        }
        var $v_0 = this.get_stages()[0];
        this.$O_0 = {};
        this.$O_0[$v_0.stageId] = $v_0;
        while (!Mscrm.InternalUtilities._String.isNullOrWhiteSpace($v_0.nextStageId)) {
            $v_0 = this.get_stagesById()[$v_0.nextStageId];
            this.$O_0[$v_0.stageId] = $v_0;
        }
    },

    get_areConditionsPresent: function() {
        return this.$w_0;
    },

    get_entities: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$10_0)) {
            this.$10_0 = [];
        }
        return this.$10_0;
    },

    get_entitiesByEntityName: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$y_0)) {
            this.$y_0 = {};
        }
        return this.$y_0;
    },

    get_conditionsByParentStageId: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$v_0)) {
            this.$v_0 = {};
        }
        return this.$v_0;
    },

    get_stagesById: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$19_0)) {
            this.$19_0 = {};
        }
        return this.$19_0;
    },

    get_firstLevelStages: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$O_0)) {
            this.$O_0 = {};
        }
        return this.$O_0;
    },

    get_parentEntityStepByStageId: function() {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.$13_0)) {
            this.$13_0 = {};
        }
        return this.$13_0;
    },

    getRelationshipStep: function(sourceStageId, targetStageId) {
        if (!this.$u_0) {
            this.$1i_0();
        }
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(sourceStageId);
        var $v_1 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(targetStageId);
        var $v_2 = null;
        if ((($v_1) in this.get_$V_0())) {
            var $v_3 = this.get_$V_0()[$v_1];
            if ((($v_0) in $v_3)) {
                $v_2 = $v_3[$v_0];
            }
        }
        return $v_2;
    },

    getRelationshipStepsByTargetStage: function(targetStageId) {
        if (!this.$u_0) {
            this.$1i_0();
        }
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(targetStageId);
        if (!(($v_0) in this.get_$V_0())) {
            return null;
        }
        return this.get_$V_0()[$v_0];
    },

    $1i_0: function() {
        for (var $v_0 = 0; $v_0 < this.get_entities().length - 1; $v_0++) {
            var $v_1 = this.get_entities()[$v_0];
            var $v_2 = this.get_entities()[$v_0 + 1];
            var $v_3 = $v_1.relationshipName;
            var $v_4 = $v_1.attributeName;
            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3) ||
                Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4)) {
                continue;
            }
            var $v_5 = $v_1.steps.get_item($v_1.steps.get_Count() - 1);
            var $v_6 = $v_2.steps.get_item(0);
            var $v_7 = new Microsoft.Crm.Workflow.ObjectModel.RelationshipStep($v_1.$0_0);
            $v_7.relationshipName = $v_3;
            $v_7.attributeName = $v_4;
            $v_7.sourceStageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_5.stageId);
            $v_7.targetStageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_6.stageId);
            this.addRelationship($v_7);
        }
        this.$u_0 = true;
    },

    visit: function(workflowStep) {
        var $v_0 = this.get_businessProcessFlowStepVisitorFactory().createStepVisitor(workflowStep, this);
        $v_0.visit(workflowStep);
        if (!this.get_stages().length) {
            return;
        }
        this.$1l_0();
    },

    get_businessProcessFlowStepVisitorFactory: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$e_0)) {
            this.$e_0 = new ProcessObjectModel.Visitors.StepVisitorFactory();
        }
        return this.$e_0;
    },

    set_businessProcessFlowStepVisitorFactory: function(value) {
        this.$e_0 = value;
        return value;
    },

    addEntity: function(entityStep) {
        Array.add(this.get_entities(), entityStep);
        var $v_0 = this.get_entitiesByEntityName();
        if (!((entityStep.get_EntityLogicalName()) in $v_0)) {
            $v_0[entityStep.get_EntityLogicalName()] = new Array(0);
        }
        Array.add($v_0[entityStep.get_EntityLogicalName()], entityStep);
    },

    addStage: function(entityStep, stageStep) {
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageStep.stageId);
        Array.add(this.get_stages(), stageStep);
        this.get_stagesById()[$v_0] = stageStep;
        this.get_parentEntityStepByStageId()[$v_0] = entityStep;
    },

    addCondition: function(condition) {
        var $v_0 = condition.get_parent();
        var $v_1 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm($v_0.stageId);
        this.get_conditionsByParentStageId()[$v_1] = condition;
        this.$w_0 = true;
    },

    addRelationship: function(relationship) {
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(relationship.sourceStageId) ||
            Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(relationship.targetStageId)) {
            return;
        }
        var $v_0 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(relationship.sourceStageId);
        var $v_1 = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(relationship.targetStageId);
        if ((($v_1) in this.get_$V_0())) {
            (this.get_$V_0()[$v_1])[$v_0] = relationship;
        } else {
            var $v_2 = {};
            $v_2[$v_0] = relationship;
            this.get_$V_0()[$v_1] = $v_2;
        }
    }
}


ProcessObjectModel.Visitors.WorkflowStepVisitor = function() {
    ProcessObjectModel.Visitors.WorkflowStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors.WorkflowStepVisitor.prototype = {
    visit: function($p0) {
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase.prototype.visit.call(this, $p0);
        var $v_0 = $p0;
        this.visitChildren($v_0);
    }
}


Type.registerNamespace('Microsoft.Crm.Sdk');

Microsoft.Crm.Sdk.WorkflowScope = function() {
}


Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase');
Microsoft.Crm.Workflow.SharedExpressionVisitor
    .registerClass('Microsoft.Crm.Workflow.SharedExpressionVisitor',
        Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase,
        Microsoft.Crm.Workflow.Expressions.IExpressionVisitor);
Microsoft.Crm.Workflow.FormulaDisplayVisitor.registerClass('Microsoft.Crm.Workflow.FormulaDisplayVisitor',
    Microsoft.Crm.Workflow.SharedExpressionVisitor);
Microsoft.Crm.Workflow.CrmTimeSpan.registerClass('Microsoft.Crm.Workflow.CrmTimeSpan');
Microsoft.Crm.Workflow.DataSourceCollection.registerClass('Microsoft.Crm.Workflow.DataSourceCollection',
    Microsoft.Crm.Workflow.ObjectModel.DataCollection$1.$$(Microsoft.Crm.Workflow.ObjectModel.IDataSource));
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory');
Microsoft.Crm.Workflow.ObjectModel.StepBase.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepBase');
Microsoft.Crm.Workflow.ObjectModel.AssignStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.AssignStep',
    Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep',
        Microsoft.Crm.Workflow.ObjectModel
        .StepBase);
Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.ActionStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.ActionStep',
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.ProcessTriggerData
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ProcessTriggerData');
Microsoft.Crm.Workflow.ObjectModel.ControlStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ControlStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.EntityStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.EntityStep',
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep',
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.RelationshipStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.RelationshipStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.StepStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepStep',
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep',
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.ConditionStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ConditionStep',
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.CreateStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.CreateStep',
    Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfoBase
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfoBase');
Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo',
        Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfoBase);
Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase');
Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo',
        Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase);
Microsoft.Crm.Workflow.ObjectModel.CustomStepBase
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomStepBase', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep',
        Microsoft.Crm.Workflow.ObjectModel.CustomStepBase);
Microsoft.Crm.Workflow.ObjectModel.DataValue.registerClass('Microsoft.Crm.Workflow.ObjectModel.DataValue');
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess');
Microsoft.Crm.Workflow.ObjectModel.EntityDataSource
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.EntityDataSource',
        null,
        Microsoft.Crm.Workflow.ObjectModel.IDataSource);
Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep',
        Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep',
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.InteractionStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.InteractionStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary');
Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary.Wrapper
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary.Wrapper');
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes');
Microsoft.Crm.Workflow.ObjectModel.BaseDictionary.registerClass('Microsoft.Crm.Workflow.ObjectModel.BaseDictionary');
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.registerClass('Microsoft.Crm.Workflow.ObjectModel.JsonBuilder');
Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.PublicationParametersFactory');
Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary',
        Microsoft.Crm.Workflow.ObjectModel.BaseDictionary);
Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters');
Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep',
        Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep',
        Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase);
Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep',
        Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase);
Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep',
        Microsoft.Crm.Workflow.ObjectModel
        .StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetMessageStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetMessageStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep',
        Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.QueryStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.QueryStep',
    Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SendEmailStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SendEmailStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.SetStateStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.SetStateStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.StageStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.StageStep',
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.StepCollection.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepCollection');
Microsoft.Crm.Workflow.ObjectModel.StepDictionary
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.StepDictionary',
        Microsoft.Crm.Workflow.ObjectModel.BaseDictionary);
Microsoft.Crm.Workflow.ObjectModel.StepLabel.registerClass('Microsoft.Crm.Workflow.ObjectModel.StepLabel');
Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection');
Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.PageStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.PageStep',
    Microsoft.Crm.Workflow.ObjectModel.StageStep);
Microsoft.Crm.Workflow.ObjectModel.UpdateStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.UpdateStep',
    Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep',
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.WaitStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.WaitStep',
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep',
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument');
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.WorkflowStep',
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
Microsoft.Crm.Workflow.ObjectModel.DataValueCollection
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.DataValueCollection',
        Microsoft.Crm.Workflow.ObjectModel.DataCollection$1.$$(Microsoft.Crm.Workflow.ObjectModel.DataValue));
Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase',
        Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase,
        Microsoft.Crm.Workflow.Expressions.IExpressionVisitor);
Microsoft.Crm.Workflow.Utils.ArrayUtility.registerClass('Microsoft.Crm.Workflow.Utils.ArrayUtility');
Microsoft.Crm.Workflow.Utils.DictionaryUtility.registerClass('Microsoft.Crm.Workflow.Utils.DictionaryUtility');
Microsoft.Crm.Workflow.Utils.SharedUtility.registerClass('Microsoft.Crm.Workflow.Utils.SharedUtility');
Microsoft.Crm.Workflow.Utils.TraceConstants.registerClass('Microsoft.Crm.Workflow.Utils.TraceConstants');
Microsoft.Crm.Workflow.Utils.StringUtility.registerClass('Microsoft.Crm.Workflow.Utils.StringUtility');
Microsoft.Crm.Workflow.Utils.ExceptionUtility.registerClass('Microsoft.Crm.Workflow.Utils.ExceptionUtility');
Microsoft.Crm.Workflow.Expressions.ExpressionBase.registerClass('Microsoft.Crm.Workflow.Expressions.ExpressionBase');
Microsoft.Crm.Workflow.Expressions.BinaryExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.BinaryExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.EntityBase.registerClass('Microsoft.Crm.Workflow.Expressions.EntityBase');
Microsoft.Crm.Workflow.Expressions.RelatedEntity
    .registerClass('Microsoft.Crm.Workflow.Expressions.RelatedEntity', Microsoft.Crm.Workflow.Expressions.EntityBase);
Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked
    .registerClass('Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked',
        Microsoft.Crm.Workflow.Expressions.RelatedEntity);
Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep
    .registerClass('Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep',
        Microsoft.Crm.Workflow.Expressions.EntityBase);
Microsoft.Crm.Workflow.Expressions.EntitySpecification
    .registerClass('Microsoft.Crm.Workflow.Expressions.EntitySpecification');
Microsoft.Crm.Workflow.Expressions.TimeSpanExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.TimeSpanExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.MethodCallExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.MethodCallExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.InvalidEntity
    .registerClass('Microsoft.Crm.Workflow.Expressions.InvalidEntity', Microsoft.Crm.Workflow.Expressions.EntityBase);
Microsoft.Crm.Workflow.Expressions.PrimaryEntity
    .registerClass('Microsoft.Crm.Workflow.Expressions.PrimaryEntity', Microsoft.Crm.Workflow.Expressions.EntityBase);
Microsoft.Crm.Workflow.Expressions.ExpressionCollection
    .registerClass('Microsoft.Crm.Workflow.Expressions.ExpressionCollection');
Microsoft.Crm.Workflow.Expressions.LookupExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.LookupExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.PropertySpecification
    .registerClass('Microsoft.Crm.Workflow.Expressions.PropertySpecification');
Microsoft.Crm.Workflow.Expressions.NullExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.NullExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.OperatorClassifier
    .registerClass('Microsoft.Crm.Workflow.Expressions.OperatorClassifier');
Microsoft.Crm.Workflow.Expressions.PrimitiveExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.PrimitiveExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.UnaryExpression
    .registerClass('Microsoft.Crm.Workflow.Expressions.UnaryExpression',
        Microsoft.Crm.Workflow.Expressions.ExpressionBase);
Microsoft.Crm.Workflow.Expressions.EntityCreatedByStepDecorator
    .registerClass('Microsoft.Crm.Workflow.Expressions.EntityCreatedByStepDecorator',
        Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1
        .$$(Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep));
Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory
    .registerClass('Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory');
Microsoft.Crm.Workflow.Expressions.InvalidEntityDecorator
    .registerClass('Microsoft.Crm.Workflow.Expressions.InvalidEntityDecorator',
        Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.$$(Microsoft.Crm.Workflow.Expressions.InvalidEntity));
Microsoft.Crm.Workflow.Expressions.PrimaryEntityDecorator
    .registerClass('Microsoft.Crm.Workflow.Expressions.PrimaryEntityDecorator',
        Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.$$(Microsoft.Crm.Workflow.Expressions.PrimaryEntity));
Microsoft.Crm.Workflow.Expressions.RelatedEntityDecorator
    .registerClass('Microsoft.Crm.Workflow.Expressions.RelatedEntityDecorator',
        Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.$$(Microsoft.Crm.Workflow.Expressions.RelatedEntity));
Microsoft.Crm.Workflow.Validators.BaseValidatorContext
    .registerClass('Microsoft.Crm.Workflow.Validators.BaseValidatorContext',
        null,
        Microsoft.Crm.Workflow.Validators.IValidatorContext);
Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext
    .registerClass('Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext',
        Microsoft.Crm.Workflow.Validators.BaseValidatorContext,
        Microsoft.Crm.Workflow.Validators.ICalculatedFieldValidatorContext,
        Microsoft.Crm.Workflow.Validators.IValidatorContext);
Microsoft.Crm.Workflow.Validators.ExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.ExpressionValidator',
        null,
        Microsoft.Crm.Workflow.Validators.IExpressionValidator);
Microsoft.Crm.Workflow.Validators.UnaryExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.UnaryExpressionValidator',
        Microsoft.Crm.Workflow.Validators.ExpressionValidator);
Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator',
        Microsoft.Crm.Workflow.Validators.ExpressionValidator);
Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorBase
    .registerClass('Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorBase');
Microsoft.Crm.Workflow.Validators.MethodCallArithmeticEvaluateExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.MethodCallArithmeticEvaluateExpressionValidator',
        Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorBase);
Microsoft.Crm.Workflow.Validators.MethodCallDateMathEvaluateExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.MethodCallDateMathEvaluateExpressionValidator',
        Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorBase);
Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorFactory
    .registerClass('Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorFactory');
Microsoft.Crm.Workflow.Validators.MethodCallStringEvaluateExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.MethodCallStringEvaluateExpressionValidator',
        Microsoft.Crm.Workflow.Validators.MethodCallEvaluateExpressionValidatorBase);
Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator',
        Microsoft.Crm.Workflow.Validators.ExpressionValidator);
Microsoft.Crm.Workflow.Validators.SetAttributeValueStepValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.SetAttributeValueStepValidator');
Microsoft.Crm.Workflow.Validators.TypeUtility.registerClass('Microsoft.Crm.Workflow.Validators.TypeUtility');
ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase
    .registerClass('ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase');
ProcessObjectModel.Visitors.ConditionStepVisitor
    .registerClass('ProcessObjectModel.Visitors.ConditionStepVisitor',
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors.RelationshipCollectionStepVisitor
    .registerClass('ProcessObjectModel.Visitors.RelationshipCollectionStepVisitor',
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors.EntityStepVisitor.registerClass('ProcessObjectModel.Visitors.EntityStepVisitor',
    ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase,
    ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors.StageStepVisitor.registerClass('ProcessObjectModel.Visitors.StageStepVisitor',
    ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase,
    ProcessObjectModel.Visitors.IStageStepVisitor,
    ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors.StepVisitorFactory
    .registerClass('ProcessObjectModel.Visitors.StepVisitorFactory',
        null,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory);
ProcessObjectModel.Visitors.BusinessProcessFlowVisitor
    .registerClass('ProcessObjectModel.Visitors.BusinessProcessFlowVisitor',
        null,
        ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor);
ProcessObjectModel.Visitors.WorkflowStepVisitor
    .registerClass('ProcessObjectModel.Visitors.WorkflowStepVisitor',
        ProcessObjectModel.Visitors.BusinessProcessFlowStepVisitorBase,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
Microsoft.Crm.Sdk.WorkflowScope.registerClass('Microsoft.Crm.Sdk.WorkflowScope');
Microsoft.Crm.Workflow.CrmTimeSpan.zero = new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, 0, 0, 0);
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.customAttributeUrl = '!Process_Custom_Attribute_URL_';
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
    .customAttributePostUrl = '!Process_Custom_Attribute_PostURL_';
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$X = {};
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$$cctor();
Microsoft.Crm.Workflow.ObjectModel.InteractionStep.InteractionResponsePostfix = '_interactionResponseValue';
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes.owner = 'ownerid';
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes.status = 'statecode';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.hierarchicalRelationshipNameVariable = 'HierarchicalRelationshipName';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.sourceSequenceName = 'Source';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.targetSequenceName = 'Target';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.aggregateSequenceName = 'Aggregate';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.targetLinkedSequenceName = 'TargetLinked';
Microsoft.Crm.Workflow.Utils.TraceConstants.nullOperandArray = 'Operand array passed into {0} is null';
Microsoft.Crm.Workflow.Utils.TraceConstants.nullParameterArray = 'Parameter array passed into {0} is null';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidParameterCount = 'Invalid number of parameters in {0}: expected {1} actual {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants.nullOperands = 'One or more null operands have been passed into {0}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidOperandCount = 'Invalid number of operands in {0}: expected {1} actual {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidOperandType = 'Invalid operand #{0} of WorkflowAttributeType {1} in {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .incompatibleOperator = 'Operator {0} is not compatible with operand type {1} in {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .incompatibleOperand = 'Operand {0} is not compatible with operand type {1} and operator {2} in {3}';
Microsoft.Crm.Workflow.Utils.TraceConstants.invalidExpressionType = 'Invalid expression #{0} of type {1} in {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .unexpectedOperandType = 'Unexpected operand #{0} in {1}: expected {2} actual {3}';
Microsoft.Crm.Workflow.Utils.TraceConstants.expectedExpressionOperator = 'Expected an expression operator in {0}';
Microsoft.Crm.Workflow.Utils.TraceConstants.unexpectedExpressionOperator = 'Unexpected expression operator {0} in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants.unexpectedMethodCall = 'Unexpected method call {0} in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants.nullEntityMetadata = 'Metadata is null attempting to get {0} entity in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .nullAttributeMetadata = 'Metadata is null attempting to get {0} attribute in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidAttribute = 'Attribute {0} from entity {1} in {2} is not valid for calculated field';
Microsoft.Crm.Workflow.Utils.TraceConstants.invalidSetAttribute = 'Attribute {0} is not a valid calculated field';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidTypeAssignment = 'Attribute type {0} is not a valid for set on {1} type calculated field';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupInvalidTypeAssignment = 'Attribute type {0} is not a valid for set on {1} type rollup field';
Microsoft.Crm.Workflow.Utils.TraceConstants.primitiveOverflow = 'Could not parse {0} into a {1} type in {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants.divideByZero = 'Attempted to divide by zero in sub-formula {0} in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidDateOnlyBehaviorAssignment = 'You can only use a Date Only type of field.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidTimeInvBehaviorAssignment = 'You can only use a Time-Zone Independent Date Time type of field.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidUserLocBehaviorAssignment = 'You can only use a User Local Date Time type of field.';
Microsoft.Crm.Workflow.Utils.TraceConstants.nullStep = 'Step is null in {0}, expected {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants.nullChildArray = 'Child steps array is null for {0} in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidChildStepCount = 'Invalid child step count for {0} type in {1}: expected {2} actual {3}';
Microsoft.Crm.Workflow.Utils.TraceConstants.typeNotSupported = '{0} type is not supported in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .childStepTypeNotSupported = 'Child {0} type is not supported for {1} in {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidFieldToSet = 'Can\'t set field in {0}: attempted to set {1}, expected to set {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants.invalidIfLocation = 'If condition must be first and only first in {0}';
Microsoft.Crm.Workflow.Utils.TraceConstants.invalidElseLocation = 'Else condition must be last and only last in {0}';
Microsoft.Crm.Workflow.Utils.TraceConstants.invalidAndOrOr = 'Conditions must be all ANDed or ORed together in {0}';
Microsoft.Crm.Workflow.Utils.TraceConstants.invalidRelatedAttribute = 'LookUp Attribute {0} is not a valid one';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .invalidNumberOfRollupSteps = 'There can be only one rollup step within the workflow';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupTargetRelationshipNotGiven = 'When hierarchy is not specified, then target relationship should be specified';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupSourceFilterGiven = 'When source filter is given, then hierarchy should be specified on the rollup';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .targetEntityNotPartOfOneToNRelationship = 'Target entity {0} is not part of the 1:N relationship with entity {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .targetEntitySameAsSourceEntity = 'Self referential 1:N relationships are not allowed for the rollup field';
Microsoft.Crm.Workflow.Utils.TraceConstants.fieldNotPartOfEntity = 'The attribute {0} is not part of entity {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants.rollupAggregateNotDefined = 'Aggregate is not defined for rollup';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .filterCanOnlyContainPersistentFields =
    'Rollup filter conditions can only filter based on persistent fields. Field {0} is not a persistent field';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .sourceEntityShouldBeHierarchical = 'When hierarchy is specified, source entity {0} should be hierarchical';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .attributeNotSupportedForAggregate = 'Attribute data type {0} is not supported for aggregate operator {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .aggregateOnRollupFieldOrComplexCalcFieldNotAllowed =
    'Aggregated field must be either a Simple field or a basic Calculated field';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupFieldAggregateFunctionNotAllowed = 'The aggregate function {0} isn\u2019t allowed.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupFieldAggregateFunctionNotAllowedForRollupFieldDataType =
    'The aggregate function {0} isn\u2019t allowed when the rollup field is a {1} data type.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .attributeCannotBeUsedInAggregate =
    'The {0} attribute cannot be used with an aggregation function in a rollup formula.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .sourceFilterAttributeNotExistInSourceEntity = 'Source filter attribute {0} does not exist in source entity {1}.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .targetFilterAttributeNotExistInTargetEntity = 'Target filter attribute {0} does not exist in target entity {1}.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .aggregateFieldNotExistInSourceOrTargetEntity = 'Aggregate field {0} does not exist in {1} entity {2}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .aggregateFieldTypeNotSupportedForRollupFieldType =
    'Aggregare field {0} not supported for rollup field of type {1}';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupFieldDataTypeInvalid = 'The {0} data type isn\u2019t valid for the rollup field.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .sourceTypeMaskInvalid = 'The attribute {0} in entity {1} has an invalid sourceTypeMask in {2}.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupTargetLinkedEntityOnlySupportedForActivityEntities =
    'Target related entity is only supported for rollup over {0} type entities.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupTargetLinkedEntityCanOnlyUsedForActivityPartyEntities =
    'Target related entity can only be used for {0} entity for rollup over {1} type entities.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupInvalidAttributeForFilterCondition = 'The {0} attribute is not allowed for filter condition.';
Microsoft.Crm.Workflow.Utils.TraceConstants
    .rollupTargetLinkedRelationshipNotValid = 'Target Linked Relationship {0} is not valid.';
Microsoft.Crm.Workflow.Utils.StringUtility.empty = '';
Microsoft.Crm.Workflow.Expressions.RelatedEntity.relatedEntitySeparator = '_';
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$5 = null;
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$$cctor();
Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.$1B = null;
Microsoft.Crm.Sdk.WorkflowScope.businessUnit = 2;
Microsoft.Crm.Sdk.WorkflowScope.deep = 3;
Microsoft.Crm.Sdk.WorkflowScope.global = 4;
Microsoft.Crm.Sdk.WorkflowScope.user = 1;
//@ sourceMappingURL=.srcmap