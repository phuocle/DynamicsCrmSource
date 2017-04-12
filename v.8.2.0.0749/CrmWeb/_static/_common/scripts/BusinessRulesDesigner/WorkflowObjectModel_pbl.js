Type.registerNamespace('Microsoft.Crm.Workflow');

Microsoft.Crm.Workflow
    .FormulaDisplayVisitor = function
    Microsoft_Crm_Workflow_FormulaDisplayVisitor(useForReadMode,
        calculatedFieldLabelDescription,
        getAttributeLocalizedNameFunc) {
        this._builder$2 = new Sys.StringBuilder();
        Microsoft.Crm.Workflow.FormulaDisplayVisitor.initializeBase(this);
        this._useForReadMode$2 = useForReadMode;
        this._calculatedFieldLabelDescription$2 = calculatedFieldLabelDescription;
        this._getAttributeLocalizedNameFunc$2 = getAttributeLocalizedNameFunc;
        this._localizeEnabled$2 = this._useForReadMode$2 && !IsNull(this._getAttributeLocalizedNameFunc$2);
    }
Microsoft.Crm.Workflow.FormulaDisplayVisitor
    .expressionToString = function Microsoft_Crm_Workflow_FormulaDisplayVisitor$expressionToString(expression) {
        var visitor = new Microsoft.Crm.Workflow.FormulaDisplayVisitor(false, '', null);
        expression.accept(visitor);
        return visitor.get_outputString();
    }
Microsoft.Crm.Workflow.FormulaDisplayVisitor.prototype = {
    _useForReadMode$2: false,
    _localizeEnabled$2: false,
    _indent$2: 0,
    _calculatedFieldLabelDescription$2: null,
    _getAttributeLocalizedNameFunc$2: null,

    get_outputString: function Microsoft_Crm_Workflow_FormulaDisplayVisitor$get_outputString() {
        return this._builder$2.toString();
    },

    visitConditionBranchStep: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$visitConditionBranchStep(conditionBranchStep) {
            if (conditionBranchStep.get_conditionBranchDisplayMode() !== 2) {
                if (!conditionBranchStep.get_conditionBranchDisplayMode()) {
                    this._appendWithIndent$p$2('If');
                } else {
                    this._appendWithIndent$p$2('Else If');
                }
                if (conditionBranchStep.conditionExpression) {
                    conditionBranchStep.conditionExpression.accept(this);
                }
            } else {
                this._appendWithIndent$p$2('Else');
            }
            this._appendLine$p$2();
            this._indent$2 += 4;
            this.visitChildren(conditionBranchStep);
            this._appendLine$p$2();
            this._indent$2 -= 4;
        },

    visitSetAttributeValueStep: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$visitSetAttributeValueStep(setAttributeValueStep) {
            if (!setAttributeValueStep.get_propertySpec()) {
                return;
            }
            var formula = this
                ._generateExpressionString$p$2(setAttributeValueStep.get_propertySpec().propertyValueExpr);
            if (formula.startsWith('(') && formula.endsWith(')')) {
                formula = formula.substring(1, formula.length - 1);
            }
            if (this._useForReadMode$2) {
                formula = String.format(window.LOCID_BUSINESSRULE_SETATTRVALUE,
                    String.format('<b>{0}</b>', CrmEncodeDecode.CrmHtmlEncode(this._calculatedFieldLabelDescription$2)),
                    String.format('<b>{0}</b>', CrmEncodeDecode.CrmHtmlEncode(formula)));
            }
            this._appendWithIndent$p$2(formula);
        },

    visitMethodCallExpression: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$visitMethodCallExpression(expression) {
            var parameters = expression.getParameters();
            if (null !== parameters && parameters.length > 0) {
                if (expression.method === 3) {
                    var expressionOperator = parameters[0];
                    switch (expressionOperator) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        var leftOperand = this._generateExpressionString$p$2(parameters[1]);
                        var rightOperand = this._generateExpressionString$p$2(parameters[2]);
                        this._builder$2.append('(');
                        if (!(leftOperand === '0' && (!expressionOperator || expressionOperator === 1))) {
                            this._builder$2.append(leftOperand);
                        }
                        this._builder$2.append(' ');
                        this._builder$2.append(this._getExpressionOperatorString$p$2(expressionOperator));
                        this._builder$2.append(' ');
                        this._builder$2.append(rightOperand);
                        this._builder$2.append(')');
                        break;
                    default:
                        this._builder$2.append(this._getExpressionOperatorString$p$2(expressionOperator));
                        this._builder$2.append('(');
                        for (var i = 1; i < parameters.length - 1; i++) {
                            this._builder$2.append(this._generateExpressionString$p$2(parameters[i]));
                            this._builder$2.append(', ');
                        }
                        if (parameters.length > 1) {
                            this._builder$2.append(this
                                ._generateExpressionString$p$2(parameters[parameters.length - 1]));
                        }
                        this._builder$2.append(')');
                        break;
                    }
                } else if (!expression.method) {
                    (parameters[0]).accept(this);
                }
            }
        },

    visitEntityAttributeExpression: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$visitEntityAttributeExpression(expression) {
            if (Microsoft.Crm.Workflow.Expressions.RelatedEntity.isInstanceOfType(expression.entity)) {
                this._builder$2.append(this._generateRelatedEntityDisplayString$p$2(expression));
            } else {
                this._builder$2.append(this._generatePrimaryEntityDisplayString$p$2(expression));
            }
        },

    visitUnaryExpression: function Microsoft_Crm_Workflow_FormulaDisplayVisitor$visitUnaryExpression(expression) {
        this._builder$2.append(this._getConditionExpressionOperatorString$p$2(expression.conditionOperatoroperator));
        this._builder$2.append('(');
        this._builder$2.append(this._generateExpressionString$p$2(expression.operand));
        this._builder$2.append(')');
    },

    visitPrimitiveExpression: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$visitPrimitiveExpression(expression) {
            var primitiveExpressionString = expression.primitiveValue.toString();
            if (expression.type === 14) {
                if (!this._useForReadMode$2) {
                    var regexBackslash = new RegExp('\\\\', 'g');
                    var regexQuotation = new RegExp('\"', 'g');
                    primitiveExpressionString = primitiveExpressionString.replace(regexBackslash, '\\\\')
                        .replace(regexQuotation, '\\\"');
                }
                primitiveExpressionString = '\"' + primitiveExpressionString + '\"';
            } else if (expression.type === 3) {
                if (primitiveExpressionString.indexOf('.') < 0) {
                    primitiveExpressionString += '.0';
                } else if (primitiveExpressionString.lastIndexOf('.') === primitiveExpressionString.length) {
                    primitiveExpressionString += '0';
                }
            }
            this._builder$2.append(primitiveExpressionString);
        },

    visitBinaryExpression: function Microsoft_Crm_Workflow_FormulaDisplayVisitor$visitBinaryExpression(expression) {
        switch (expression.conditionOperatoroperator) {
        case 2:
        case 3:
        case 6:
        case 7:
            var leftOperand = this._generateExpressionString$p$2(expression.left);
            var rightOperand = this._generateExpressionString$p$2(expression.right.get_item(0));
            this._builder$2.append('(');
            this._builder$2.append(leftOperand);
            this._builder$2.append(' ');
            this._builder$2.append(this
                ._getConditionExpressionOperatorString$p$2(expression.conditionOperatoroperator));
            this._builder$2.append(' ');
            this._builder$2.append(rightOperand);
            this._builder$2.append(')');
            break;
        default:
            this._builder$2.append(this
                ._getConditionExpressionOperatorString$p$2(expression.conditionOperatoroperator));
            this._builder$2.append('(');
            this._builder$2.append(this._generateExpressionString$p$2(expression.left));
            this._builder$2.append(', ');
            for (var i = 1; i < expression.right.get_count(); i++) {
                this._builder$2.append(', ');
                this._builder$2.append(this._generateExpressionString$p$2(expression.right.get_item(i)));
            }
            this._builder$2.append(')');
            break;
        }
    },

    _generatePrimaryEntityDisplayString$p$2: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$_generatePrimaryEntityDisplayString$p$2(expression) {
            return (this._localizeEnabled$2)
                ? this._getAttributeLocalizedNameFunc$2(expression.entity.entityName, expression.attributeName)
                : expression.attributeName;
        },

    _generateRelatedEntityDisplayString$p$2: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$_generateRelatedEntityDisplayString$p$2(expression) {
            Mscrm.CrmDebug.assert(Microsoft.Crm.Workflow.Expressions.RelatedEntity.isInstanceOfType(expression.entity));
            var relatedEntity = expression.entity;
            var relatedString = this._generatePrimaryEntityDisplayString$p$2(expression);
            var primaryString = (this._localizeEnabled$2)
                ? this._getAttributeLocalizedNameFunc$2(expression._workflow$p$0.primaryEntityName,
                    relatedEntity.get_relatedAttributeName())
                : relatedEntity.get_relatedAttributeName();
            return String.format(this.get__entityAttributeExpressionTemplate$p$2(), primaryString, relatedString);
        },

    _appendLine$p$2: function Microsoft_Crm_Workflow_FormulaDisplayVisitor$_appendLine$p$2() {
        this._builder$2.append('<br />');
    },

    _appendWithIndent$p$2: function Microsoft_Crm_Workflow_FormulaDisplayVisitor$_appendWithIndent$p$2(content) {
        for (var i = 0; i < this._indent$2; i++) {
            this._builder$2.append('&nbsp;');
        }
        this._builder$2.append(content);
    },

    _generateExpressionString$p$2: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$_generateExpressionString$p$2(expression) {
            var originalBuilder = this._builder$2;
            this._builder$2 = new Sys.StringBuilder();
            expression.accept(this);
            var result = this._builder$2.toString();
            this._builder$2 = originalBuilder;
            return result;
        },

    get__entityAttributeExpressionTemplate$p$2: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$get__entityAttributeExpressionTemplate$p$2() {
            return (this._localizeEnabled$2) ? '({0}) {1}' : '{0}.{1}';
        },

    _getExpressionOperatorString$p$2: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$_getExpressionOperatorString$p$2(expressionOperator) {
            switch (expressionOperator) {
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
                return Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(expressionOperator);
            }
        },

    _getConditionExpressionOperatorString$p$2: function
        Microsoft_Crm_Workflow_FormulaDisplayVisitor$_getConditionExpressionOperatorString$p$2(conditionOperator) {
            switch (conditionOperator) {
            case 2:
                return 'And';
            case 3:
                return 'Or';
            case 6:
                return '=';
            case 7:
                return '<>';
            default:
                return Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator.toString(conditionOperator);
            }
        }
}


Microsoft.Crm.Workflow.SharedExpressionVisitor = function Microsoft_Crm_Workflow_SharedExpressionVisitor() {
    Microsoft.Crm.Workflow.SharedExpressionVisitor.initializeBase(this);
}
Microsoft.Crm.Workflow.SharedExpressionVisitor.prototype = {
    visitWorkflowStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitWorkflowStep(workflowStep) {
        this.visitChildren(workflowStep);
    },

    visitConditionStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitConditionStep(conditionStep) {
        this.visitChildren(conditionStep);
    },

    visitConditionBranchStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitConditionBranchStep(conditionBranchStep) {
            conditionBranchStep.conditionExpression.accept(this);
            this.visitChildren(conditionBranchStep);
        },

    visitSetAttributeValueStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetAttributeValueStep(setAttributeValueStep) {
            setAttributeValueStep.get_propertySpec().accept(this);
        },

    visitAssignStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitAssignStep(assignStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitChildWorkflowStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitChildWorkflowStep(childWorkflowStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitSendEmailStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSendEmailStep(sendEmailStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitCreateStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitCreateStep(createStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitUpdateStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitUpdateStep(updateStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetStateStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetStateStep(setStateStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitCustomActivityStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitCustomActivityStep(customActivityStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitChildInteractiveWorkflowStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitChildInteractiveWorkflowStep(childWorkflowStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitQueryStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitQueryStep(queryStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitAssignVariableStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitAssignVariableStep(assignVariableStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitWaitBranchStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitWaitBranchStep(waitBranchStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitWaitStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitWaitStep(waitStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitWaitTimeoutStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitWaitTimeoutStep(waitTimeoutStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitStopWorkflowStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitStopWorkflowStep(stopWorkflowStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitStageStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitStageStep(stageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitPageStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitPageStep(pageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetVisibilityStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetVisibilityStep(setVisibilityStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitSetDefaultValueStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetDefaultValueStep(setDefaultValueStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitSetDisplayModeStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetDisplayModeStep(setDisplayModeStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitCustomJavascriptStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitCustomJavascriptStep(customJSStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitSetMessageStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetMessageStep(setMessageStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitEntityStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitEntityStep(entityStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitRelationshipCollectionStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitRelationshipCollectionStep(relationshipCollectionStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitRelationshipStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitRelationshipStep(relationshipStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitStepStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitStepStep(stepStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitControlStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitControlStep(controlStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitActionStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitActionStep(actionStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetFieldRequiredLevelStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetFieldRequiredLevelStep(setFieldRequiredLevelStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitRollupRuleStep: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitRollupRuleStep(rollupRuleStep) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitSetNextStageStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitSetNextStageStep(setNextStageStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitInteractionStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitInteractionStep(interactionStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitInteractionPageStep: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitInteractionPageStep(interactionPageStep) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitChildren: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitChildren(step) {
        for (var i = 0; i < step.steps.get_Count(); i++) {
            var childStep = step.steps.get_item(i);
            childStep.apply(this);
        }
    },

    visitBinaryExpression: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitBinaryExpression(expression) {
        expression.left.accept(this);
        for (var i = 0; i < expression.right.get_count(); i++) {
            expression.right.get_item(i).accept(this);
        }
    },

    visitUnaryExpression: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitUnaryExpression(expression) {
        expression.operand.accept(this);
    },

    visitMethodCallExpression: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitMethodCallExpression(expression) {
            var parameters = expression.getParameters();
            for (var i = 0; i < parameters.length; i++) {
                if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType(parameters[i])) {
                    (parameters[i]).accept(this);
                }
            }
        },

    visitPropertySpecification: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitPropertySpecification(propertySpecification) {
            if (null !== propertySpecification.propertyValueExpr) {
                propertySpecification.propertyValueExpr.accept(this);
            }
        },

    visitPrimitiveExpression: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitPrimitiveExpression(expression) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitEntityAttributeExpression: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitEntityAttributeExpression(expression) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitTimeSpanExpression: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitTimeSpanExpression(expression) {
            Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
        },

    visitNullExpression: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitNullExpression(expression) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitLookupExpression: function Microsoft_Crm_Workflow_SharedExpressionVisitor$visitLookupExpression(expression) {
        Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(0);
    },

    visitEntitySpecification: function
        Microsoft_Crm_Workflow_SharedExpressionVisitor$visitEntitySpecification(entitySpecification) {
            entitySpecification.accept(this);
        }
}


Microsoft.Crm.Workflow
    .CrmTimeSpan = function
    Microsoft_Crm_Workflow_CrmTimeSpan(sourceYears, sourceMonths, sourceDays, sourceHours, sourceMinutes) {
        this.years = sourceYears;
        this.months = sourceMonths;
        this.days = sourceDays;
        this.hours = sourceHours;
        this.minutes = sourceMinutes;
    }
Microsoft.Crm.Workflow.CrmTimeSpan.prototype = {
    equals: function Microsoft_Crm_Workflow_CrmTimeSpan$equals(value) {
        return value.years === this.years &&
            value.months === this.months &&
            value.days === this.days &&
            value.hours === this.hours &&
            value.minutes === this.minutes;
    },

    add: function Microsoft_Crm_Workflow_CrmTimeSpan$add(value) {
        this.years += value.getFullYear();
        this.months += value.getMonth();
        this.days += value.getDay();
        this.hours += value.getHours();
        this.minutes += value.getMinutes();
        value.setFullYear(this.years);
        value.setMonth(this.months);
        value.setDate(this.days);
        value.setFullYear(this.minutes);
        var newValue = value;
        return newValue;
    },

    subtract: function Microsoft_Crm_Workflow_CrmTimeSpan$subtract(value) {
        this.years -= value.getFullYear();
        this.months -= value.getMonth();
        this.days -= value.getDay();
        this.hours -= value.getHours();
        this.minutes -= value.getMinutes();
        value.setFullYear(this.years);
        value.setMonth(this.months);
        value.setDate(this.days);
        value.setFullYear(this.minutes);
        var newValue = value;
        return newValue;
    },

    get_years: function Microsoft_Crm_Workflow_CrmTimeSpan$get_years() {
        return this.years;
    },

    set_years: function Microsoft_Crm_Workflow_CrmTimeSpan$set_years(value) {
        this.years = value;
        return value;
    },

    get_months: function Microsoft_Crm_Workflow_CrmTimeSpan$get_months() {
        return this.months;
    },

    set_months: function Microsoft_Crm_Workflow_CrmTimeSpan$set_months(value) {
        this.months = value;
        return value;
    },

    get_days: function Microsoft_Crm_Workflow_CrmTimeSpan$get_days() {
        return this.days;
    },

    set_days: function Microsoft_Crm_Workflow_CrmTimeSpan$set_days(value) {
        this.days = value;
        return value;
    },

    get_hours: function Microsoft_Crm_Workflow_CrmTimeSpan$get_hours() {
        return this.hours;
    },

    set_hours: function Microsoft_Crm_Workflow_CrmTimeSpan$set_hours(value) {
        this.hours = value;
        return value;
    },

    get_minutes: function Microsoft_Crm_Workflow_CrmTimeSpan$get_minutes() {
        return this.minutes;
    },

    set_minutes: function Microsoft_Crm_Workflow_CrmTimeSpan$set_minutes(value) {
        this.minutes = value;
        return value;
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_CrmTimeSpan$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var timeSpan = deserialized;
            this.days = timeSpan.days;
        }
    },

    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
}


Microsoft.Crm.Workflow.DataSourceCollection = function Microsoft_Crm_Workflow_DataSourceCollection() {
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


Microsoft.Crm.Workflow.ObjectModel
    .NullObjectsFactory = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory() {
    }
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
    .buildStep = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory$buildStep(className) {
        var dummy = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
        switch (className) {
        case 'ConditionStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.ConditionStep(dummy);
        case 'ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel':
            var condition = new Microsoft.Crm.Workflow.ObjectModel.ConditionStep(dummy);
            condition.set_workflow(dummy);
            return new Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep(condition, null);
        case 'CustomJavascriptStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep(dummy);
        case 'SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep(dummy);
        case 'SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep(dummy);
        case 'SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep(dummy, null);
        case 'SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep(dummy);
        case 'SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetMessageStep(dummy);
        case 'SetDefaultValueStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep(dummy, null);
        case 'SetNextStageStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep(dummy);
        case 'ControlStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.ControlStep(dummy);
        case 'ActionStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.ActionStep(dummy);
        case 'EntityStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.EntityStep(dummy, 'dummy');
        case 'StageStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.StageStep(dummy, 'dummy');
        case 'PageStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.PageStep(dummy, 'dummy');
        case 'StepStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.StepStep(dummy, 'dummy');
        case 'RelationshipCollectionStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep(dummy);
        case 'RelationshipStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.RelationshipStep(dummy);
        case 'RollupRuleStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep(dummy);
        case 'CreateStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.CreateStep(dummy);
        case 'CustomActivityStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep(dummy);
        case 'UpdateStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.UpdateStep(dummy);
        case 'AssignStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.AssignStep(dummy);
        case 'ChildWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep(dummy);
        case 'SendEmailStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SendEmailStep(dummy);
        case 'SetStateStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.SetStateStep(dummy);
        case 'StopWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep(dummy);
        case 'WaitBranchStep:#Microsoft.Crm.Workflow.ObjectModel':
            var waitBranchWaitStep = new Microsoft.Crm.Workflow.ObjectModel.WaitStep(dummy);
            waitBranchWaitStep.set_workflow(dummy);
            return new Microsoft.Crm.Workflow.ObjectModel
                .WaitBranchStep(waitBranchWaitStep, new Microsoft.Crm.Workflow.Expressions.NullExpression(dummy));
        case 'WaitStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.WaitStep(dummy);
        case 'WaitTimeoutStep:#Microsoft.Crm.Workflow.ObjectModel':
            var waitBranchTimeoutStep = new Microsoft.Crm.Workflow.ObjectModel.WaitStep(dummy);
            waitBranchTimeoutStep.set_workflow(dummy);
            return new Microsoft.Crm.Workflow.ObjectModel
                .WaitTimeoutStep(waitBranchTimeoutStep, new Microsoft.Crm.Workflow.Expressions.NullExpression(dummy));
        case 'InteractionStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.InteractionStep(dummy);
        case 'InteractionPageStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep(dummy);
        case 'ChildInteractiveWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep(dummy);
        case 'AssignVariableStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep(dummy);
        case 'QueryStep:#Microsoft.Crm.Workflow.ObjectModel':
            return new Microsoft.Crm.Workflow.ObjectModel.QueryStep(dummy);
        }
        return null;
    }
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
    .buildExpression = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory$buildExpression(className) {
        var dummy = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
        switch (className) {
        case 'UnaryExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.UnaryExpression(dummy, 0, null);
        case 'PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(dummy, null, 14);
        case 'BinaryExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions
                .BinaryExpression(dummy,
                    6,
                    new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(dummy, null, 14),
                    []);
        case 'EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions
                .EntityAttributeExpression(new Microsoft.Crm.Workflow.Expressions.InvalidEntity(dummy, 'dummyParam'),
                    'name');
        case 'MethodCallExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(dummy, 0, null);
        case 'TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions
                .TimeSpanExpression(dummy, new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, 0, 0, 0));
        case 'LookupExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.LookupExpression(dummy, null, 6, '', '');
        case 'NullExpression:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.NullExpression(dummy);
        }
        return null;
    }
Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
    .buildEntity = function Microsoft_Crm_Workflow_ObjectModel_NullObjectsFactory$buildEntity(className) {
        var dummy = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep('account', 0);
        switch (className) {
        case 'PrimaryEntity:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(dummy);
        case 'RelatedEntity:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions.RelatedEntity(dummy, 'dummyProperty', 'dummyEntity');
        case 'RelatedEntityLinked:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions
                .RelatedEntityLinked(dummy, 'dummyProperty', 'dummyEntity', 'dummyRelationshipName');
        case 'EntityCreatedByStep:#Microsoft.Crm.Workflow.Expressions':
            return new Microsoft.Crm.Workflow.Expressions
                .EntityCreatedByStep(dummy, null, 'dummy', 'dummy', 'dummy', true);
        default:
            return null;
        }
    }


Microsoft.Crm.Workflow.ObjectModel.AssignStep = function Microsoft_Crm_Workflow_ObjectModel_AssignStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.AssignStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep._getNextStepId$i$2());
    this.__class = 'AssignStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.AssignStep.prototype = {
    get_entity: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$set_entity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_assignTo: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$get_assignTo() {
        return this.assignTo;
    },

    set_assignTo: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$set_assignTo(value) {
        this.assignTo = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$apply(visitor) {
        visitor.visitAssignStep(this);
    },

    assignTo: null,
    entity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.assignTo) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('assignTo', this.assignTo.toJson(), true));
        }
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.assignTo) {
            this.assignTo.fixInternalLinks(this._workflow$p$0);
        }
        if (this.entity) {
            this.entity.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_AssignStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var sourceObject = deserialized;
            if (sourceObject.assignTo) {
                this.assignTo = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression(sourceObject.assignTo.__class);
                this.assignTo.initializeFromDynamic(sourceObject.assignTo);
            }
            if (sourceObject.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(sourceObject.entity.__class);
                this.entity.initializeFromDynamic(sourceObject.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .AssignVariableStep = function Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'AssignVariableStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.prototype = {
    get_valueExpression: function Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep$get_valueExpression() {
        return this.valueExpression;
    },

    set_valueExpression: function Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep$set_valueExpression(value) {
        this.valueExpression = value;
        return value;
    },

    get_variableName: function Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep$get_variableName() {
        return this.variableName;
    },

    set_variableName: function Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep$set_variableName(value) {
        this.variableName = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep$apply(visitor) {
        visitor.visitAssignVariableStep(this);
    },

    valueExpression: null,
    variableName: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('variableName', this.variableName, true));
        if (this.valueExpression) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('valueExpression', this.valueExpression.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_AssignVariableStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.variableName) {
                    this.variableName = sourceObject.variableName;
                }
                if (sourceObject.valueExpression) {
                    this.valueExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.valueExpression.__class);
                    this.valueExpression.initializeFromDynamic(sourceObject.valueExpression);
                }
            }
        }
}

Microsoft.Crm.Workflow.ObjectModel.ActionStep = function Microsoft_Crm_Workflow_ObjectModel_ActionStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ActionStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'ActionStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep._getNextStepId$i$2());
}

Microsoft.Crm.Workflow.ObjectModel.ActionStep.prototype = {
    get_actionControl: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$get_actionControl() {
        return this.actionControl;
    },

    set_actionControl: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$set_actionControl(value) {
        this.actionControl = value;
        return value;
    },

    get_actionId: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$get_actionId() {
        return this.actionId;
    },

    set_actionId: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$set_actionId(value) {
        this.actionId = value;
        return value;
    },

    get_actionType: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$get_actionType() {
        return this.actionType;
    },

    set_actionType: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$set_actionType(value) {
        this.actionType = value;
        return value;
    },

    get_processId: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$get_processId() {
        return this.processId;
    },

    set_processId: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$set_processId(value) {
        this.processId = value;
        return value;
    },

    get_uniqueName: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$get_uniqueName() {
        return this.uniqueName;
    },

    set_uniqueName: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$set_uniqueName(value) {
        this.uniqueName = value;
        return value;
    },

    get_triggerEvents: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$get_triggerEvents() {
        return this.triggerEvents;
    },

    set_triggerEvents: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$set_triggerEvents(value) {
        this.triggerEvents = value;
        return value;
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.isInstanceOfType(newStep)) ||
                (Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.isInstanceOfType(newStep)) ||
                (Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.isInstanceOfType(newStep)),
                'Can only insert AssignVariableStep, SetAttributeValueStep, or CustomJavascriptStep');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$remove(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((Microsoft.Crm.Workflow.ObjectModel.AssignVariableStep.isInstanceOfType(stepBase)) ||
                (Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.isInstanceOfType(stepBase)),
                'Can only insert AssignVariableStep or CustomJavascriptStep');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$apply(visitor) {
        visitor.visitActionStep(this);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$addPeer(direction, newStep) {
    },

    _createDataSources$i$0: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$_createDataSources$i$0(dataSources) {
    },

    actionControl: null,
    actionId: null,
    actionType: 0,
    processId: null,
    uniqueName: null,
    triggerEvents: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('actionId', this.actionId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('actionType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.actionType),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('processId', this.processId.toString(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('uniqueName', this.uniqueName, true));
        if (this.triggerEvents && this.triggerEvents.length > 0) {
            var sbTriggerEvents = new Sys.StringBuilder();
            var jsonTriggers = new Array(this.triggerEvents.length);
            for (var i = 0; i < this.triggerEvents.length; i++) {
                jsonTriggers[i] = this.triggerEvents[i].toJson();
            }
            sbTriggerEvents.append('[' +
                Microsoft.Crm.Workflow.Utils.StringUtility.join(String, ',', jsonTriggers) +
                ']');
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('triggerEvents', sbTriggerEvents.toString(), true));
        }
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.actionControl)) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('actionControl', this.actionControl.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
        if (this.actionControl) {
            this.actionControl.set_parent(this);
            this.actionControl._workflow$p$0.stepDictionary.set_item(this.actionControl.id, this.actionControl);
            this.actionControl.fixInternalLinks();
        }
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_ActionStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var sourceObject = deserialized;
            this.actionId = sourceObject.actionId;
            this.actionType = (sourceObject.actionType) ? JSON.parse(sourceObject.actionType) : 0;
            this.uniqueName = sourceObject.uniqueName;
            if (sourceObject.processId) {
                this.processId = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(sourceObject.processId.toString());
            }
            if (sourceObject.triggerEvents) {
                var triggerList = new Array(sourceObject.triggerEvents.length);
                for (var i = 0; i < sourceObject.triggerEvents.length; i++) {
                    var deserializedTriggerData = sourceObject.triggerEvents[i];
                    var processTriggerData = new Microsoft.Crm.Workflow.ObjectModel.ProcessTriggerData();
                    processTriggerData.initializeFromDynamic(deserializedTriggerData);
                    triggerList[i] = processTriggerData;
                }
                this.triggerEvents = triggerList;
            }
            if (sourceObject.actionControl) {
                this.actionControl = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildStep(sourceObject.actionControl.__class);
                this.actionControl.initializeFromDynamic(sourceObject.actionControl);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.ControlStep = function Microsoft_Crm_Workflow_ObjectModel_ControlStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.ControlStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.__class = 'ControlStep:#Microsoft.Crm.Workflow.ObjectModel';
    this.setNameAndId(workflowStep._getNextStepId$i$2());
}

Microsoft.Crm.Workflow.ObjectModel.ControlStep
    .getControlStep = function Microsoft_Crm_Workflow_ObjectModel_ControlStep$getControlStep(stepBase) {
        if (Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(stepBase)) {
            return stepBase;
        } else if (Microsoft.Crm.Workflow.ObjectModel.ActionStep.isInstanceOfType(stepBase)) {
            return (stepBase).actionControl;
        }
        return null;
    }

Microsoft.Crm.Workflow.ObjectModel.ControlStep.prototype = {
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_controlId() {
        return this.controlId;
    },

    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },

    get_classId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_classId() {
        return this.classId;
    },

    set_classId: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_classId(value) {
        this.classId = value;
        return value;
    },

    get_dataFieldName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_dataFieldName() {
        return this.dataFieldName;
    },

    set_dataFieldName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_dataFieldName(value) {
        this.dataFieldName = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_entity(value) {
        this.entity = value;
        return value;
    },

    get_systemStepType: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_systemStepType() {
        return this.systemStepType;
    },

    set_systemStepType: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_systemStepType(value) {
        this.systemStepType = value;
        return value;
    },

    get_isSystemControl: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_isSystemControl() {
        return this.isSystemControl;
    },

    set_isSystemControl: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_isSystemControl(value) {
        this.isSystemControl = value;
        return value;
    },

    get_parameters: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_parameters() {
        return this.parameters;
    },

    set_parameters: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_parameters(value) {
        this.parameters = value;
        return value;
    },

    get_controlDisplayName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_controlDisplayName() {
        return this.controlDisplayName;
    },

    set_controlDisplayName: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_controlDisplayName(value) {
        this.controlDisplayName = value;
        return value;
    },

    get_isUnbound: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_isUnbound() {
        return this.isUnbound;
    },

    set_isUnbound: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_isUnbound(value) {
        this.isUnbound = value;
        return value;
    },

    get_controlType: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$get_controlType() {
        return this.controlType;
    },

    set_controlType: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$set_controlType(value) {
        this.controlType = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$apply(visitor) {
        visitor.visitControlStep(this);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$addPeer(direction, newStep) {
    },

    _createDataSources$i$0: function
        Microsoft_Crm_Workflow_ObjectModel_ControlStep$_createDataSources$i$0(dataSources) {
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

    toJson: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('classId', this.classId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('dataFieldName', this.dataFieldName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('systemStepType', this.systemStepType.toString(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isSystemControl',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isSystemControl),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('parameters', this.parameters, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlDisplayName', this.controlDisplayName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isUnbound', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isUnbound), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.controlType),
                true));
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.entity)) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_ControlStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var sourceObject = deserialized;
            this.controlId = sourceObject.controlId;
            this.classId = sourceObject.classId;
            this.dataFieldName = sourceObject.dataFieldName;
            this.systemStepType = sourceObject.systemStepType;
            this.isSystemControl = sourceObject.isSystemControl;
            this.parameters = sourceObject.parameters;
            this.controlDisplayName = sourceObject.controlDisplayName;
            this.isUnbound = sourceObject.isUnbound;
            this.controlType = (sourceObject.controlType) ? JSON.parse(sourceObject.controlType) : 0;
            if (sourceObject.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(sourceObject.entity.__class);
                this.entity.initializeFromDynamic(sourceObject.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .EntityStep = function Microsoft_Crm_Workflow_ObjectModel_EntityStep(workflowStep, entityLogicalName) {
        Microsoft.Crm.Workflow.ObjectModel.EntityStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(entityLogicalName, 'entityLogicalName');
        this.__class = 'EntityStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.set_EntityLogicalName(entityLogicalName);
    }
Microsoft.Crm.Workflow.ObjectModel.EntityStep.prototype = {
    get_EntityLogicalName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_EntityLogicalName() {
        return this.description;
    },

    set_EntityLogicalName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_EntityLogicalName(value) {
        this.description = value;
        return value;
    },

    get_relationshipName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_relationshipName() {
        return this.relationshipName;
    },

    set_relationshipName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_relationshipName(value) {
        this.relationshipName = value;
        return value;
    },

    get_attributeName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_attributeName() {
        return this.attributeName;
    },

    set_attributeName: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_attributeName(value) {
        this.attributeName = value;
        return value;
    },

    get_isClosedLoop: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$get_isClosedLoop() {
        return this.isClosedLoop;
    },

    set_isClosedLoop: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$set_isClosedLoop(value) {
        this.isClosedLoop = value;
        return value;
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep),
                'Cannot insert a non stage step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$remove(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stepBase),
                'Cannot remove a non stage step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$apply(visitor) {
        visitor.visitEntityStep(this);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$addPeer(direction, newStep) {
    },

    _createDataSources$i$0: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$_createDataSources$i$0(dataSources) {
    },

    relationshipName: null,
    attributeName: null,
    isClosedLoop: false,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relationshipName', this.relationshipName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isClosedLoop',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isClosedLoop),
                true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_EntityStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var sourceObject = deserialized;
            this.relationshipName = sourceObject.relationshipName;
            this.attributeName = sourceObject.attributeName;
            this.isClosedLoop = sourceObject.isClosedLoop;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .RelationshipCollectionStep = function Microsoft_Crm_Workflow_ObjectModel_RelationshipCollectionStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.__class = 'RelationshipCollectionStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.setNameAndId(workflowStep._getNextStepId$i$2());
    }
Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep.prototype = {
    appendStep: function Microsoft_Crm_Workflow_ObjectModel_RelationshipCollectionStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.isInstanceOfType(newStep),
                'Cannot insert a non Relationship step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_RelationshipCollectionStep$remove(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.isInstanceOfType(stepBase),
                'Cannot remove a non Relationship step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_RelationshipCollectionStep$apply(visitor) {
        visitor.visitRelationshipCollectionStep(this);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_RelationshipCollectionStep$addPeer(direction, newStep) {
    },

    _createDataSources$i$0: function
        Microsoft_Crm_Workflow_ObjectModel_RelationshipCollectionStep$_createDataSources$i$0(dataSources) {
        },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_RelationshipCollectionStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append('}');
        return sb.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .RelationshipStep = function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.__class = 'RelationshipStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.setNameAndId(workflowStep._getNextStepId$i$2());
    }
Microsoft.Crm.Workflow.ObjectModel.RelationshipStep.prototype = {
    get_sourceStageId: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$get_sourceStageId() {
        return this.sourceStageId;
    },

    set_sourceStageId: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$set_sourceStageId(value) {
        this.sourceStageId = value;
        return value;
    },

    get_targetStageId: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$get_targetStageId() {
        return this.targetStageId;
    },

    set_targetStageId: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$set_targetStageId(value) {
        this.targetStageId = value;
        return value;
    },

    get_relationshipName: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$get_relationshipName() {
        return this.relationshipName;
    },

    set_relationshipName: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$set_relationshipName(value) {
        this.relationshipName = value;
        return value;
    },

    get_attributeName: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$get_attributeName() {
        return this.attributeName;
    },

    set_attributeName: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$set_attributeName(value) {
        this.attributeName = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$apply(visitor) {
        visitor.visitRelationshipStep(this);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$addPeer(direction, newStep) {
    },

    _createDataSources$i$0: function
        Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$_createDataSources$i$0(dataSources) {
        },

    relationshipName: null,
    attributeName: null,
    sourceStageId: null,
    targetStageId: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relationshipName', this.relationshipName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('sourceStageId', this.sourceStageId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('targetStageId', this.targetStageId, true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_RelationshipStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.relationshipName = sourceObject.relationshipName;
                this.attributeName = sourceObject.attributeName;
                this.sourceStageId = sourceObject.sourceStageId;
                this.targetStageId = sourceObject.targetStageId;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .StepStep = function Microsoft_Crm_Workflow_ObjectModel_StepStep(workflowStep, stepName) {
        Microsoft.Crm.Workflow.ObjectModel.StepStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(stepName, 'stepName');
        this.__class = 'StepStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.set_stepStepName(stepName);
    }
Microsoft.Crm.Workflow.ObjectModel.StepStep.prototype = {
    get_stepStepId: function Microsoft_Crm_Workflow_ObjectModel_StepStep$get_stepStepId() {
        return this.stepStepId;
    },

    set_stepStepId: function Microsoft_Crm_Workflow_ObjectModel_StepStep$set_stepStepId(value) {
        this.stepStepId = value;
        return value;
    },

    get_stepStepName: function Microsoft_Crm_Workflow_ObjectModel_StepStep$get_stepStepName() {
        return this.description;
    },

    set_stepStepName: function Microsoft_Crm_Workflow_ObjectModel_StepStep$set_stepStepName(value) {
        this.description = value;
        return value;
    },

    get_isProcessRequired: function Microsoft_Crm_Workflow_ObjectModel_StepStep$get_isProcessRequired() {
        return this.isProcessRequired;
    },

    set_isProcessRequired: function Microsoft_Crm_Workflow_ObjectModel_StepStep$set_isProcessRequired(value) {
        this.isProcessRequired = value;
        return value;
    },

    get_isHidden: function Microsoft_Crm_Workflow_ObjectModel_StepStep$get_isHidden() {
        return this.isHidden;
    },

    set_isHidden: function Microsoft_Crm_Workflow_ObjectModel_StepStep$set_isHidden(value) {
        this.isHidden = value;
        return value;
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_StepStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(newStep) ||
                Microsoft.Crm.Workflow.ObjectModel.ActionStep.isInstanceOfType(newStep),
                'Cannot insert a non Control/action Step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_StepStep$remove(stepBase) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ControlStep.isInstanceOfType(stepBase) ||
                Microsoft.Crm.Workflow.ObjectModel.ActionStep.isInstanceOfType(stepBase),
                'Cannot remove a non Control/Action Step');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_StepStep$apply(visitor) {
        visitor.visitStepStep(this);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_StepStep$addPeer(direction, newStep) {
    },

    _createDataSources$i$0: function Microsoft_Crm_Workflow_ObjectModel_StepStep$_createDataSources$i$0(dataSources) {
    },

    stepStepId: null,
    stepStepName: null,
    isProcessRequired: false,
    isHidden: false,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stepStepId', this.stepStepId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.stepStepName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isProcessRequired',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isProcessRequired),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isHidden', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isHidden), true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StepStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var sourceObject = deserialized;
            this.stepStepId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(sourceObject.stepStepId);
            this.isProcessRequired = sourceObject.isProcessRequired;
            this.isHidden = sourceObject.isHidden;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .ChildWorkflowStep = function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'ChildWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.ChildWorkflowStep.prototype = {
    apply: function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$apply(visitor) {
        visitor.visitChildWorkflowStep(this);
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$set_entity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_childWorkflow: function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$get_childWorkflow() {
        return this.childWorkflow;
    },

    set_childWorkflow: function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$set_childWorkflow(value) {
        this.childWorkflow = value;
        return value;
    },

    entity: null,
    childWorkflow: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.childWorkflow) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('childWorkflow', this.childWorkflow.toJson(), true));
        }
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entity) {
            this.entity.fixInternalLinks(this._workflow$p$0);
        }
        if (this.childWorkflow) {
            this.childWorkflow.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_ChildWorkflowStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.childWorkflow) {
                    this.childWorkflow = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.childWorkflow.__class);
                    this.childWorkflow.initializeFromDynamic(sourceObject.childWorkflow);
                }
                if (sourceObject.entity) {
                    this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.entity.__class);
                    this.entity.initializeFromDynamic(sourceObject.entity);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase = function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase() {
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.initializeBase(this);
    this.steps = new Microsoft.Crm.Workflow.ObjectModel.StepCollection();
    this.__class = 'CompositeStepBase:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype = {
    get_Steps: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$get_Steps() {
        return this.steps;
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$appendStep(newStep) {
        if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert((Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.WorkflowStep) ||
                    (Object.getType(this) === Microsoft.Crm.Workflow.ObjectModel.EntityStep),
                    'StageStep can only be inserted as a child of WorkflowStep or EntityStep.');
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)),
                'WorkflowStep cannot be added as a child of any steps.');
        newStep._detachFromWorkflow$i$0();
        newStep.set_parent(this);
        this.steps.add(newStep);
        this._workflow$p$0.stepDictionary.set_item(newStep.id, newStep);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$remove(stepBase) {
        this._workflow$p$0.stepDictionary.remove(stepBase.id);
        if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(stepBase)) {
            var stepAsParent = stepBase;
            var stepCount = stepAsParent.steps.get_Count();
            while (stepCount > 0) {
                var childStep = stepAsParent.steps.get_item(0);
                stepAsParent.remove(childStep);
                stepCount = stepAsParent.steps.get_Count();
            }
        }
        this.steps.remove(stepBase);
    },

    insert: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$insert(peer, direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(peer.get_parent() === this, 'Peer step is not a child of current step.');
        newStep.set_parent(this);
        var peerIndex = this.steps.indexOf(peer);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(peerIndex >= 0, 'Peer index must be non-zero');
        if (!direction) {
            this.steps.insert(peerIndex, newStep);
            this._workflow$p$0.stepDictionary.set_item(newStep.id, newStep);
        } else {
            this.steps.insert(peerIndex + 1, newStep);
            this._workflow$p$0.stepDictionary.set_item(newStep.id, newStep);
        }
    },

    get_lastStep: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$get_lastStep() {
        if (this.steps.get_Count() > 0) {
            var step = this.steps.get_item(this.steps.get_Count() - 1);
            if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(step)) {
                return (step).get_lastStep();
            } else {
                return step;
            }
        } else {
            return this;
        }
    },

    steps: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('steps', this.steps.toJson(), true));
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        for (var i = 0; i < this.steps.get_Count(); i++) {
            var s = this.steps.get_item(i);
            s.set_parent(this);
            s._workflow$p$0.stepDictionary.set_item(s.id, s);
            s.fixInternalLinks();
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_CompositeStepBase$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                for (var i = 0; i < sourceObject.steps.list.length; i++) {
                    var item = sourceObject.steps.list[i];
                    var step = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep(item.__class);
                    step.initializeFromDynamic(item);
                    this.steps.add(step);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .ConditionBranchStep = function
    Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep(condition, conditionExpression) {
        Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(condition, 'condition');
        this.setNameAndId(condition._workflow$p$0._getNextStepId$i$2());
        if (conditionExpression) {
            this.conditionExpression = conditionExpression;
        }
        this.__class = 'ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.prototype = {
    get_conditionBranchDisplayMode: function
        Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$get_conditionBranchDisplayMode() {
            if (!this.conditionExpression) {
                return 2;
            } else {
                var condition = this.get_parent();
                if (!condition) {
                    Microsoft.Crm.Workflow.Utils.ExceptionUtility
                        .throwException('Condition branch needs to be added to a condition step in order to determine its display mode');
                }
                if (this === condition.steps.get_item(0)) {
                    return 0;
                } else {
                    return 1;
                }
            }
        },

    get_conditionExpression: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$get_conditionExpression() {
        return this.conditionExpression;
    },

    set_conditionExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$set_conditionExpression(value) {
            this.conditionExpression = value;
            return value;
        },

    get_parent: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$get_parent() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$set_parent(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType(value))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('Only ConditionStep can include ConditionBranch as a child.');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$appendStep(newStep) {
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

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$addPeer(direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep),
                'Peer of a ConditionBranchStep can only be a ConditionBranchStep.');
        var newBranchStep = newStep;
        if ((direction === 1) && (!this.conditionExpression)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('Cannot insert a condition branch with condition expression after a branch that does not.');
        }
        if ((!direction) && (this.conditionExpression) && (!newBranchStep.conditionExpression)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('Cannot insert a condition branch with no condition expression before a branch that does have one.');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.addPeer.call(this, direction, newStep);
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$apply(visitor) {
        visitor.visitConditionBranchStep(this);
    },

    conditionExpression: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        if (this.conditionExpression) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('conditionExpression', this.conditionExpression.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
        if (this.conditionExpression) {
            this.conditionExpression.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_ConditionBranchStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.conditionExpression) {
                    this.conditionExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.conditionExpression.__class);
                    this.conditionExpression.initializeFromDynamic(sourceObject.conditionExpression);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .ConditionStep = function Microsoft_Crm_Workflow_ObjectModel_ConditionStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.ConditionStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.containsElsebranch = false;
        this.__class = 'ConditionStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.ConditionStep.prototype = {
    remove: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$remove(stepBase) {
        if (Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(stepBase)) {
            var conditionBranchStep = stepBase;
            if (!conditionBranchStep.conditionExpression) {
                this.containsElsebranch = false;
            }
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep),
                'Cannot add any other step other than ConditionBranchStep to ConditionStep.');
        var conditionBranchStep = newStep;
        if (!conditionBranchStep.conditionExpression) {
            if (this.containsElsebranch) {
                Microsoft.Crm.Workflow.Utils.ExceptionUtility
                    .throwException('Cannot add more than one condition branch with no condition expression to condition');
            } else {
                this.containsElsebranch = true;
            }
            if (!this.steps.get_Count()) {
                Microsoft.Crm.Workflow.Utils.ExceptionUtility
                    .throwException('The first branch added to a condition needs to have a condition expression');
            }
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$apply(visitor) {
        visitor.visitConditionStep(this);
    },

    findElseBranch: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$findElseBranch() {
        var elseBranch = null;
        Sys.Debug.assert(this.steps.get_Count() > 0,
            'Expected ConditionStep.Steps to contain at least 1 ConditionBranchStep.');
        var stepBase = this.steps.get_item(this.steps.get_Count() - 1);
        Sys.Debug.assert(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(stepBase),
            'Expected last child to be of type ConditionBranchStep.');
        var branchStep = stepBase;
        if (branchStep.get_conditionBranchDisplayMode() === 2) {
            elseBranch = branchStep;
        }
        return elseBranch;
    },

    get_containsElseBranch: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$get_containsElseBranch() {
        return this.containsElsebranch;
    },

    set_containsElseBranch: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$set_containsElseBranch(value) {
        this.containsElsebranch = value;
        return value;
    },

    containsElsebranch: false,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_ConditionStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('containsElsebranch',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.containsElsebranch),
                true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_ConditionStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                this.containsElsebranch = sourceObject.containsElsebranch;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.CreateStep = function Microsoft_Crm_Workflow_ObjectModel_CreateStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.CreateStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep._getNextStepId$i$2());
    this.__class = 'CreateStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.CreateStep.prototype = {
    get_entityName: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$get_entityName() {
        if (this.entity) {
            return this.entity.entityName;
        } else {
            return null;
        }
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$set_entity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!value, 'Entity specification value cannot be set to null');
        this.entity = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$apply(visitor) {
        visitor.visitCreateStep(this);
    },

    get_output: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$get_output() {
        return this.output;
    },

    set_output: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$set_output(value) {
        this.output = value;
        return value;
    },

    entity: null,
    output: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        if (this.output) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('output', this.output.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entity) {
            this.entity.fixInternalLinks(this._workflow$p$0);
        }
        if (this.output) {
            this.output.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_CreateStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var sourceObject = deserialized;
            if (sourceObject.entity) {
                this.entity = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                this.entity.initializeFromDynamic(sourceObject.entity);
            }
            if (sourceObject.output) {
                this.output = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                this.output.initializeFromDynamic(sourceObject.output);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .CustomActivityInfo = function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfo() {
        Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo.initializeBase(this);
    }


Microsoft.Crm.Workflow.ObjectModel
    .CustomActivityInfoBase = function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase() {
    }
Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfoBase.prototype = {
    get_name: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_name() {
        return this.name;
    },

    set_name: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_name(value) {
        this.name = value;
        return value;
    },

    get_pluginTypeId: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_pluginTypeId() {
        return this.pluginTypeId;
    },

    set_pluginTypeId: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_pluginTypeId(value) {
        this.pluginTypeId = value;
        return value;
    },

    get_groupName: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_groupName() {
        return this.groupName;
    },

    set_groupName: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_groupName(value) {
        this.groupName = value;
        return value;
    },

    get_isNet4: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_isNet4() {
        return this.isNet4;
    },

    set_isNet4: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_isNet4(value) {
        this.isNet4 = value;
        return value;
    },

    get_typeName: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_typeName() {
        return this.typeName;
    },

    set_typeName: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_typeName(value) {
        this.typeName = value;
        return value;
    },

    get_assemblyName: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_assemblyName() {
        return this.assemblyName;
    },

    set_assemblyName: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_assemblyName(value) {
        this.assemblyName = value;
        return value;
    },

    get_publicKeyToken: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_publicKeyToken() {
        return this.publicKeyToken;
    },

    set_publicKeyToken: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_publicKeyToken(value) {
        this.publicKeyToken = value;
        return value;
    },

    get_culture: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_culture() {
        return this.culture;
    },

    set_culture: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_culture(value) {
        this.culture = value;
        return value;
    },

    get_assemblyVersion: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$get_assemblyVersion() {
        return this.assemblyVersion;
    },

    set_assemblyVersion: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$set_assemblyVersion(value) {
        this.assemblyVersion = value;
        return value;
    },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.name, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('groupName', this.groupName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('typeName', this.typeName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('pluginTypeId', this.pluginTypeId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('assemblyName', this.assemblyName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('publicKeyToken', this.publicKeyToken, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('culture', this.culture, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('assemblyVersion', this.assemblyVersion, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isNet4', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.get_isNet4()), true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_CustomActivityInfoBase$initializeFromDynamic(deserialized) {
            if (deserialized) {
                var sourceObject = deserialized;
                this.name = sourceObject.name;
                this.groupName = sourceObject.groupName;
                this.typeName = sourceObject.typeName;
                this.pluginTypeId = sourceObject.pluginTypeId;
                this.assemblyName = sourceObject.assemblyName;
                this.publicKeyToken = sourceObject.publicKeyToken;
                this.culture = sourceObject.culture;
                this.assemblyVersion = sourceObject.assemblyVersion;
                this.isNet4 = sourceObject.isNet4;
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


Microsoft.Crm.Workflow.ObjectModel
    .CustomActivityParameterInfo = function Microsoft_Crm_Workflow_ObjectModel_CustomActivityParameterInfo() {
        Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo.initializeBase(this);
    }


Microsoft.Crm.Workflow.ObjectModel
    .CustomParameterInfoBase = function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase() {
    }
Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase.prototype = {
    get_name: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$get_name() {
        return this.name;
    },

    set_name: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$set_name(value) {
        this.name = value;
        return value;
    },

    get_typeName: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$get_typeName() {
        return this.typeName;
    },

    set_typeName: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$set_typeName(value) {
        this.typeName = value;
        return value;
    },

    get_isInOutArgument: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$get_isInOutArgument() {
        return this.isInOutArgument;
    },

    set_isInOutArgument: function
        Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$set_isInOutArgument(value) {
            this.isInOutArgument = value;
            return value;
        },

    get_workflowAttributeType: function
        Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$get_workflowAttributeType() {
            return this.workflowAttributeType;
        },

    set_workflowAttributeType: function
        Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$set_workflowAttributeType(value) {
            this.workflowAttributeType = value;
            return value;
        },

    get_required: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$get_required() {
        return this.required;
    },

    set_required: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$set_required(value) {
        this.required = value;
        return value;
    },

    get_attributeName: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$get_attributeName() {
        return this.attributeName;
    },

    set_attributeName: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$set_attributeName(value) {
        this.attributeName = value;
        return value;
    },

    get_dependencyPropertyName: function
        Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$get_dependencyPropertyName() {
            return this.dependencyProperty;
        },

    set_dependencyPropertyName: function
        Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$set_dependencyPropertyName(value) {
            this.dependencyProperty = value;
            return value;
        },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('required', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.required), false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.name, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('typeName', this.typeName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('dependencyProperty', this.dependencyProperty, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('workflowAttributeType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.workflowAttributeType),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isInOutArgument',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isInOutArgument),
                true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_CustomParameterInfoBase$initializeFromDynamic(deserialized) {
            if (deserialized) {
                var sourceObject = deserialized;
                this.required = sourceObject.required;
                this.name = sourceObject.name;
                this.typeName = sourceObject.typeName;
                this.attributeName = sourceObject.attributeName;
                this.dependencyProperty = sourceObject.dependencyProperty;
                this.workflowAttributeType = parseInt(sourceObject.workflowAttributeType);
                this.isInOutArgument = sourceObject.isInOutArgument;
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


Microsoft.Crm.Workflow.ObjectModel
    .CustomActivityStep = function Microsoft_Crm_Workflow_ObjectModel_CustomActivityStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep.initializeBase(this, [workflowStep]);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'CustomActivityStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep.prototype = {
    apply: function Microsoft_Crm_Workflow_ObjectModel_CustomActivityStep$apply(visitor) {
        visitor.visitCustomActivityStep(this);
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .CustomStepBase = function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.CustomStepBase.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.outputs = {};
        this.activityInfo = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo();
        this.__class = 'CustomStepBase:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.CustomStepBase.prototype = {
    get_outputs: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$get_outputs() {
        return this.outputs;
    },

    set_outputs: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$set_outputs(value) {
        this.outputs = value;
        return value;
    },

    outputs: null,

    get_activityInfo: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$get_activityInfo() {
        return this.activityInfo;
    },

    set_activityInfo: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$set_activityInfo(value) {
        this.activityInfo = value;
        return value;
    },

    activityInfo: null,

    get_hasOutputs: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$get_hasOutputs() {
        return this.hasOutputs;
    },

    set_hasOutputs: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$set_hasOutputs(value) {
        this.hasOutputs = value;
        return value;
    },

    hasOutputs: false,

    get_isInvalid: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$get_isInvalid() {
        return this.isInvalid;
    },

    set_isInvalid: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$set_isInvalid(value) {
        this.isInvalid = value;
        return value;
    },

    isInvalid: false,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.activityInfo) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('activityInfo', (this.activityInfo).toJson(), true));
        }
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('hasOutputs',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this
                    .hasOutputs),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isInvalid', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isInvalid), true));
        sb.append(',');
        sb.append('\"outputs\":');
        var $$t_3 = this, $$t_4 = this;
        sb.append(Microsoft.Crm.Workflow.Utils.DictionaryUtility.toJson(String,
            Microsoft.Crm.Workflow.ObjectModel.CustomParameterInfoBase,
            this.outputs,
            function(property) {
                return Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getQuotedString(property);
            },
            function(parameter) {
                return (parameter).toJson();
            }));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_CustomStepBase$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.activityInfo) {
                    this.activityInfo = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityInfo();
                    this.activityInfo.initializeFromDynamic(sourceObject.activityInfo);
                }
                this.hasOutputs = sourceObject.hasOutputs;
                this.isInvalid = sourceObject.isInvalid;
                if (sourceObject.outputs) {
                    var $$t_5 = this, $$t_6 = this;
                    this.outputs = Microsoft.Crm.Workflow.Utils.DictionaryUtility.fromJson(String,
                        Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo,
                        sourceObject.outputs,
                        function(property) {
                            return property;
                        },
                        function(parameterObject) {
                            var parameterInfo = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo();
                            parameterInfo.initializeFromDynamic(parameterObject);
                            return parameterInfo;
                        });
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .DataValue = function Microsoft_Crm_Workflow_ObjectModel_DataValue(source, key, referenceData) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(source, 'source');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(key, 'key');
        this._source$p$0 = source;
        this._key$p$0 = key;
        this._referenceData$p$0 = referenceData;
    }
Microsoft.Crm.Workflow.ObjectModel.DataValue.prototype = {
    get_source: function Microsoft_Crm_Workflow_ObjectModel_DataValue$get_source() {
        return this._source$p$0;
    },

    get_key: function Microsoft_Crm_Workflow_ObjectModel_DataValue$get_key() {
        return this._key$p$0;
    },

    get_type: function Microsoft_Crm_Workflow_ObjectModel_DataValue$get_type() {
        return this._type$p$0;
    },

    get_referenceData: function Microsoft_Crm_Workflow_ObjectModel_DataValue$get_referenceData() {
        return this._referenceData$p$0;
    },

    getDisplayName: function Microsoft_Crm_Workflow_ObjectModel_DataValue$getDisplayName(cultureInfo) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!this._source$p$0, 'Source should be non null in GetDisplayName');
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this._displayName$p$0)) {
            this._displayName$p$0 = this._source$p$0.getLocalizedNameForDataValue(this, cultureInfo);
        }
        return this._displayName$p$0;
    },

    get_name: function Microsoft_Crm_Workflow_ObjectModel_DataValue$get_name() {
        return this._name$p$0;
    },

    _type$p$0: 0,
    _source$p$0: null,
    _key$p$0: null,
    _displayName$p$0: null,
    _name$p$0: null,
    _referenceData$p$0: null
}


Microsoft.Crm.Workflow.ObjectModel
    .DynamicAttributesInProcess = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess() {
    }
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
    .$$cctor = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess$$$cctor() {
        Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
            ._dynamicAttributes$p['!Process_Custom_Attribute_URL_'] = 'Dialog.CustomAttribute.URL.DisplayName';
        Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
            ._dynamicAttributes$p['!Process_Custom_Attribute_PostURL_'] =
            'ActivityFeeds.CustomAttribute.PostURL.DisplayName';
    }
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
    .getAttribute = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess$getAttribute(key) {
        return Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess._dynamicAttributes$p[key];
    }
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
    .containsKey = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess$containsKey(key) {
        return ((key) in Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess._dynamicAttributes$p);
    }
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
    .get_keys = function Microsoft_Crm_Workflow_ObjectModel_DynamicAttributesInProcess$get_keys() {
        return _Dictionary.keys(Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess._dynamicAttributes$p);
    }


Microsoft.Crm.Workflow.ObjectModel
    .EntityDataSource = function
    Microsoft_Crm_Workflow_ObjectModel_EntityDataSource(entitySource,
        isRestrictiveAttributeListDefined,
        restrictiveAttributeList) {
        this._entitySource$0 = entitySource;
        this._isRestrictiveAttributeListDefined$0 = isRestrictiveAttributeListDefined;
        if (this._isRestrictiveAttributeListDefined$0 && (restrictiveAttributeList)) {
            this._restrictiveAttributeList$0 = new (Sales.Common.Framework.List$1.$$(String))();
            for (var i = 0; i < restrictiveAttributeList.length; i++) {
                this._restrictiveAttributeList$0.add(restrictiveAttributeList[i]);
            }
        }
    }
Microsoft.Crm.Workflow.ObjectModel.EntityDataSource.prototype = {
    getLocalizedName: function Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$getLocalizedName(cultureInfo) {
        return this._entitySource$0.getLocalizedName(cultureInfo);
    },

    getLocalizedNameForDataValue: function
        Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$getLocalizedNameForDataValue(value, cultureInfo) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(value._source$p$0 === this, 'Data value does not belong to this data source');
            var keyParts = value._key$p$0.split('.');
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(keyParts.length > 0, 'DataValue key expected');
            var attributeName = keyParts[keyParts.length - 1];
            if (Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.containsKey(attributeName)) {
                return this._entitySource$0._workflow$p$0._metadataProvider$p$2
                    .getResourceString(Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
                        .getAttribute(attributeName));
            }
            return this._entitySource$0._workflow$p$0._metadataProvider$p$2
                .getAttributeLocalizedName(cultureInfo, this._entitySource$0.entityName, attributeName);
        },

    get_name: function Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$get_name() {
        return this._entitySource$0.entityName;
    },

    get_key: function Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$get_key() {
        return this._entitySource$0.get_uiXmlName();
    },

    getDataValues: function Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$getDataValues(valueType) {
        try {
            if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this._entitySource$0.entityName)) {
                var attributes = this._entitySource$0._workflow$p$0._metadataProvider$p$2
                    .getAttributesByType(this._entitySource$0.entityName, valueType);
                var values = this._createDataValuesFromAttributes$p$0(this._prunedAttributeList$p$0(attributes));
                return this._addDynamicAttributesInDataValueCollection$p$0(valueType, values);
            }
        } catch ($$e_3) {
        }
        return new Microsoft.Crm.Workflow.ObjectModel.DataValueCollection();
    },

    getLookupDataValues: function
        Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$getLookupDataValues(objectTypeCode) {
            try {
                if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this._entitySource$0.entityName)) {
                    var attributes = this._entitySource$0._workflow$p$0._metadataProvider$p$2
                        .getLookupAttributes(this._entitySource$0.entityName, objectTypeCode);
                    return this._createDataValuesFromAttributes$p$0(this._prunedAttributeList$p$0(attributes));
                }
            } catch ($$e_2) {
            }
            return new Microsoft.Crm.Workflow.ObjectModel.DataValueCollection();
        },

    get_entitySource: function Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$get_entitySource() {
        return this._entitySource$0;
    },

    _prunedAttributeList$p$0: function
        Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$_prunedAttributeList$p$0(attributes) {
            if (this._isRestrictiveAttributeListDefined$0 && (this._restrictiveAttributeList$0)) {
                var prunedList = new (Sales.Common.Framework.List$1.$$(String))();
                for (var $$arr_2 = attributes, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                    var attributeEntry = $$arr_2[$$idx_4];
                    var parts = attributeEntry.split(';');
                    var attribute = parts[0];
                    if (this._restrictiveAttributeList$0.contains(attribute)) {
                        prunedList.add(attributeEntry);
                    }
                }
                var finalList = new (Sales.Common.Framework.List$1.$$(String))();
                finalList.addRange(prunedList.toArray());
                return finalList.toArray();
            }
            return attributes;
        },

    _createDataValuesFromAttributes$p$0: function
        Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$_createDataValuesFromAttributes$p$0(attributes) {
            var values = new Microsoft.Crm.Workflow.ObjectModel.DataValueCollection();
            for (var $$arr_2 = attributes, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var attributeEntry = $$arr_2[$$idx_4];
                var referenceData = '';
                var parts = attributeEntry.split(';');
                var attribute = parts[0];
                if (parts.length > 1) {
                    referenceData = parts[1];
                }
                values.add(new Microsoft.Crm.Workflow.ObjectModel
                    .DataValue(this, this._entitySource$0.get_uiXmlName() + '.' + attribute, referenceData));
            }
            return values;
        },

    _addDynamicAttributesInDataValueCollection$p$0: function
        Microsoft_Crm_Workflow_ObjectModel_EntityDataSource$_addDynamicAttributesInDataValueCollection$p$0(valueType,
            valueCollection) {
            if (14 === valueType) {
                for (var $$arr_2 = Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.get_keys(),
                    $$len_3 = $$arr_2.length,
                    $$idx_4 = 0;
                    $$idx_4 < $$len_3;
                    ++$$idx_4) {
                    var attribute = $$arr_2[$$idx_4];
                    valueCollection.add(new Microsoft.Crm.Workflow.ObjectModel
                        .DataValue(this, this._entitySource$0.get_uiXmlName() + '.' + attribute, ''));
                }
            }
            return valueCollection;
        },

    _entitySource$0: null,
    _isRestrictiveAttributeListDefined$0: false,
    _restrictiveAttributeList$0: null
}


Microsoft.Crm.Workflow.ObjectModel
    .ChildInteractiveWorkflowStep = function
    Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep(workflowStep) {
        this.inputs = new Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary();
        Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'ChildInteractiveWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep
    ._jsonForKeyValuePair$p = function
    Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$_jsonForKeyValuePair$p(key, value) {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('key', key, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('value', value, true));
        sb.append('}');
        return sb.toString();
    }
Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep
    ._joinString$p = function
    Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$_joinString$p(connector, items) {
        var sb = new Sys.StringBuilder();
        if (!items.length) {
            return sb.toString();
        }
        sb.append(items[0]);
        for (var i = 1; i < items.length; i++) {
            sb.append(connector);
            sb.append(items[i]);
        }
        return sb.toString();
    }
Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep.prototype = {
    apply: function Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$apply(visitor) {
        visitor.visitChildInteractiveWorkflowStep(this);
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$set_entity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_childWorkflow: function Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$get_childWorkflow() {
        return this.childWorkflow;
    },

    set_childWorkflow: function
        Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$set_childWorkflow(value) {
            this.childWorkflow = value;
            return value;
        },

    get_inputs: function Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$get_inputs() {
        return this.inputs;
    },

    entity: null,
    childWorkflow: null,
    _inputsSerialized$p$1: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        if (this.childWorkflow) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('childWorkflow', this.childWorkflow.toJson(), true));
        }
        if (this.inputs) {
            var inputsJsonList = new (Microsoft.Crm.Client.Core.Framework2.List$1.$$(String))();
            for (var $$arr_2 = this.inputs.get_keys(), $$len_3 = $$arr_2.length, $$idx_4 = 0;
                $$idx_4 < $$len_3;
                ++$$idx_4) {
                var key = $$arr_2[$$idx_4];
                inputsJsonList.add(Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep
                    ._jsonForKeyValuePair$p(key.toJson(), this.inputs.get_item(key).toJson()));
            }
            var inputsJsonString = '[' +
                Microsoft.Crm.Workflow.ObjectModel.ChildInteractiveWorkflowStep
                ._joinString$p(',', inputsJsonList.toArray()) +
                ']';
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('inputsSerialized', inputsJsonString, true));
        }
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_ChildInteractiveWorkflowStep$initializeFromDynamic(deserialized) {
            if (!deserialized) {
                return;
            }
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var stepDeserialized = deserialized;
            if (stepDeserialized.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(stepDeserialized.entity.__class);
                this.entity.initializeFromDynamic(stepDeserialized.entity);
            }
            if (stepDeserialized.childWorkflow) {
                this.childWorkflow = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression(stepDeserialized.childWorkflow.__class);
                this.childWorkflow.initializeFromDynamic(stepDeserialized.childWorkflow);
            }
            if (stepDeserialized._inputsSerialized$p$1) {
                for (var i = 0; i < stepDeserialized._inputsSerialized$p$1.length; i++) {
                    var inputDynamic = stepDeserialized._inputsSerialized$p$1[i];
                    var valueDynamic = inputDynamic['value'];
                    var key = new Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo();
                    key.initializeFromDynamic(inputDynamic['key']);
                    var value = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(valueDynamic['__class']);
                    value.initializeFromDynamic(valueDynamic);
                    this.inputs.set_item(key, value);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .InteractionPageStep = function Microsoft_Crm_Workflow_ObjectModel_InteractionPageStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'InteractionPageStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep.prototype = {
    apply: function Microsoft_Crm_Workflow_ObjectModel_InteractionPageStep$apply(visitor) {
        visitor.visitInteractionPageStep(this);
    },

    _allowBack$p$2: false,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_InteractionPageStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('allowBack',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this._allowBack$p$2),
                true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_InteractionPageStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                var sourceObject = deserialized;
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                    .call(this, sourceObject);
                this._allowBack$p$2 = sourceObject._allowBack$p$2;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .InteractionStep = function Microsoft_Crm_Workflow_ObjectModel_InteractionStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.InteractionStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'InteractionStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.InteractionStep.prototype = {
    get_promptText: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_promptText() {
        return this.promptText;
    },

    set_promptText: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_promptText(value) {
        this.promptText = value;
        return value;
    },

    get_hintText: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_hintText() {
        return this.hintText;
    },

    set_hintText: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_hintText(value) {
        this.hintText = value;
        return value;
    },

    get_logResponse: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_logResponse() {
        return this.logResponse;
    },

    set_logResponse: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_logResponse(value) {
        this.logResponse = value;
        return value;
    },

    get_isResponseMetadataBound: function
        Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_isResponseMetadataBound() {
            return this.isResponseMetadataBound;
        },

    set_isResponseMetadataBound: function
        Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_isResponseMetadataBound(value) {
            this.isResponseMetadataBound = value;
            return value;
        },

    get_staticResponseValues: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_staticResponseValues() {
        return this.staticResponseValues;
    },

    set_staticResponseValues: function
        Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_staticResponseValues(value) {
            this.staticResponseValues = value;
            return value;
        },

    get_defaultResponseValue: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_defaultResponseValue() {
        return this.defaultResponseValue;
    },

    set_defaultResponseValue: function
        Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_defaultResponseValue(value) {
            this.defaultResponseValue = value;
            return value;
        },

    get_attributeList: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_attributeList() {
        return this.attributeList;
    },

    set_attributeList: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_attributeList(value) {
        this.attributeList = value;
        return value;
    },

    get_queryVariableName: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_queryVariableName() {
        return this.queryVariableName;
    },

    set_queryVariableName: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_queryVariableName(value) {
        this.queryVariableName = value;
        return value;
    },

    get_queryEntityName: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_queryEntityName() {
        return this.queryEntityName;
    },

    set_queryEntityName: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_queryEntityName(value) {
        this.queryEntityName = value;
        return value;
    },

    get_attributeDelimiter: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_attributeDelimiter() {
        return this.attributeDelimiter;
    },

    set_attributeDelimiter: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_attributeDelimiter(value) {
        this.attributeDelimiter = value;
        return value;
    },

    get_parent: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$get_parent() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$set_parent(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.InteractionPageStep.isInstanceOfType(value))) {
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$apply(visitor) {
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

    toJson: function Microsoft_Crm_Workflow_ObjectModel_InteractionStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.promptText) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('promptText', this.promptText.toJson(), true));
        }
        if (this.hintText) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('hintText', this.hintText.toJson(), true));
        }
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('logResponse',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.logResponse),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('responseContainerType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.responseContainerType),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('responseMetadataType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.responseMetadataType),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('staticResponseValues', this.staticResponseValues, true));
        if (this.defaultResponseValue) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('defaultResponseValue', this.defaultResponseValue.toJson(), true));
        }
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeList', this.attributeList, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('queryVariableName', this.queryVariableName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('queryEntityName', this.queryEntityName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeDelimiter', this.attributeDelimiter, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isResponseMetadataBound',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isResponseMetadataBound),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('InteractionResponsePostfix', '_interactionResponseValue', true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_InteractionStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.promptText) {
                    this.promptText = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.promptText.__class);
                    this.promptText.initializeFromDynamic(sourceObject.promptText);
                }
                if (sourceObject.hintText) {
                    this.hintText = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.hintText.__class);
                    this.hintText.initializeFromDynamic(sourceObject.hintText);
                }
                this.logResponse = sourceObject.logResponse;
                this.responseContainerType = sourceObject.responseContainerType;
                this.responseMetadataType = sourceObject.responseMetadataType;
                this.staticResponseValues = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(sourceObject.staticResponseValues);
                if (sourceObject.defaultResponseValue) {
                    this.defaultResponseValue = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.defaultResponseValue.__class);
                    this.defaultResponseValue.initializeFromDynamic(sourceObject.defaultResponseValue);
                }
                this.attributeList = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(sourceObject.attributeList);
                this.queryVariableName = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(sourceObject.queryVariableName);
                this.queryEntityName = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(sourceObject.queryEntityName);
                this.attributeDelimiter = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(sourceObject.attributeDelimiter);
                this.isResponseMetadataBound = sourceObject.isResponseMetadataBound;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .InteractiveWorkflowInputDictionary = function
    Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary() {
        this._wrapperDictionary$p$0 = {};
    }
Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary.prototype = {
    get_item: function Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary$get_item(key) {
        var json = key.toJson();
        if (((json) in this._wrapperDictionary$p$0)) {
            return null;
        }
        return (this._wrapperDictionary$p$0[json])._wrapperValue$p$0;
    },

    set_item: function Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary$set_item(key, value) {
        var wrapper = new Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary._wrapper();
        wrapper._key$p$0 = key;
        wrapper._wrapperValue$p$0 = value;
        this._wrapperDictionary$p$0[key.toJson()] = wrapper;
        return value;
    },

    get_keys: function Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary$get_keys() {
        var keys = new (Microsoft.Crm.Client.Core.Framework2.List$1
            .$$(Microsoft.Crm.Workflow.ObjectModel.CustomActivityParameterInfo))();
        var $$dict_2 = this._wrapperDictionary$p$0;
        for (var $$key_3 in $$dict_2) {
            var entry = { key: $$key_3, value: $$dict_2[$$key_3] };
            keys.add((entry.value)._key$p$0);
        }
        return keys.toArray();
    }
}


Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary
    ._wrapper = function Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary__wrapper() {
    }
Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary._wrapper.prototype = {
    _key$p$0: null,
    _wrapperValue$p$0: null,

    get_key: function Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary__wrapper$get_key() {
        return this._key$p$0;
    },

    set_key: function Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary__wrapper$set_key(value) {
        this._key$p$0 = value;
        return value;
    },

    get_value: function Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary__wrapper$get_value() {
        return this._wrapperValue$p$0;
    },

    set_value: function
        Microsoft_Crm_Workflow_ObjectModel_InteractiveWorkflowInputDictionary__wrapper$set_value(value) {
            this._wrapperValue$p$0 = value;
            return value;
        }
}


Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes = function Microsoft_Crm_Workflow_ObjectModel_UpdateAttributes() {
}


Microsoft.Crm.Workflow.ObjectModel.BaseDictionary = function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary() {
    this.dict = {};
}
Microsoft.Crm.Workflow.ObjectModel.BaseDictionary.prototype = {
    get_count: function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary$get_count() {
        var i = 0;
        var $$enum_2 = this.dict.getEnumerator();
        while ($$enum_2.moveNext()) {
            var o = $$enum_2.get_current();
            i++;
        }
        return i;
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary$remove(entry) {
        delete this.dict[entry];
    },

    containsKey: function Microsoft_Crm_Workflow_ObjectModel_BaseDictionary$containsKey(id) {
        return ((id) in this.dict);
    }
}


Microsoft.Crm.Workflow.ObjectModel.JsonBuilder = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder() {
}
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
    .getPropertyJson = function
    Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getPropertyJson(propertyName, propertyValue, prependComma) {
        var value = JSON.stringify(propertyValue);
        return ((prependComma) ? ',' : '') +
            Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getQuotedString(propertyName) +
            ':' +
            value;
    }
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
    .getQuotedString = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getQuotedString(propertyName) {
        return '\"' + propertyName + '\"';
    }
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
    .getObjectJson = function
    Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getObjectJson(propertyName, propertyValueJson, prependComma) {
        return ((prependComma) ? ',' : '') +
            Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getQuotedString(propertyName) +
            ':' +
            propertyValueJson;
    }
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
    .getListJson = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getListJson(json) {
        return '{\"list\":[' + json + ']}';
    }
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
    .getJson = function Microsoft_Crm_Workflow_ObjectModel_JsonBuilder$getJson(value) {
        return (value) ? 'true' : 'false';
    }


Microsoft.Crm.Workflow.ObjectModel
    ._publicationParametersFactory = function Microsoft_Crm_Workflow_ObjectModel__publicationParametersFactory() {
    }
Microsoft.Crm.Workflow.ObjectModel._publicationParametersFactory
    ._create$i = function
    Microsoft_Crm_Workflow_ObjectModel__publicationParametersFactory$_create$i(workflowCategory, workflowMode) {
        switch (workflowCategory) {
        default:
            return new Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters(workflowCategory);
        }
    }


Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase = function Microsoft_Crm_Workflow_ObjectModel_StepVisitorBase() {
}


Microsoft.Crm.Workflow.ObjectModel
    .VariablesDictionary = function Microsoft_Crm_Workflow_ObjectModel_VariablesDictionary() {
        Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary.initializeBase(this);
    }
Microsoft.Crm.Workflow.ObjectModel.VariablesDictionary.prototype = {
    get_item: function Microsoft_Crm_Workflow_ObjectModel_VariablesDictionary$get_item(id) {
        return this.dict[id];
    },

    set_item: function Microsoft_Crm_Workflow_ObjectModel_VariablesDictionary$set_item(id, value) {
        this.dict[id] = value;
        return value;
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .WorkflowPublicationParameters = function
    Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters(workflowCategory) {
        this._isTemplate$p$0 = false;
        this._allAttrSelected$p$0 = false;
        this.resetTriggers();
        this.resetTriggerConditions();
        this._scope$p$0 = 4;
        this._category$p$0 = workflowCategory;
        this._mode$p$0 = 0;
    }
Microsoft.Crm.Workflow.ObjectModel.WorkflowPublicationParameters.prototype = {
    get_allAttributesSelected: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_allAttributesSelected() {
            return this._allAttrSelected$p$0;
        },

    set_allAttributesSelected: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_allAttributesSelected(value) {
            this._allAttrSelected$p$0 = value;
            return value;
        },

    get_isTemplate: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isTemplate() {
        return this._isTemplate$p$0;
    },

    set_isTemplate: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_isTemplate(value) {
        this._isTemplate$p$0 = value;
        return value;
    },

    get_triggers: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_triggers() {
        return this._triggers$p$0;
    },

    set_triggers: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_triggers(value) {
        this._triggers$p$0 = value;
        return value;
    },

    get_isCrmUIWorkflow: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isCrmUIWorkflow() {
            return this._isCrmUIWorkflow$p$0;
        },

    set_isCrmUIWorkflow: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_isCrmUIWorkflow(value) {
            this._isCrmUIWorkflow$p$0 = value;
            return value;
        },

    get_triggerConditions: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_triggerConditions() {
            return this._triggerConditions$p$0;
        },

    set_triggerConditions: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_triggerConditions(value) {
            this._triggerConditions$p$0 = value;
            return value;
        },

    get_scope: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_scope() {
        return this._scope$p$0;
    },

    set_scope: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_scope(value) {
        this._scope$p$0 = value;
        return value;
    },

    get_workflowCategory: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_workflowCategory() {
            return this._category$p$0;
        },

    set_workflowCategory: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_workflowCategory(value) {
            this._category$p$0 = value;
            return value;
        },

    get_workflowMode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_workflowMode() {
        return this._mode$p$0;
    },

    set_workflowMode: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_workflowMode(value) {
            this._mode$p$0 = value;
            return value;
        },

    get_workflowRendererObjectTypeCode: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_workflowRendererObjectTypeCode() {
            return this._rendererObjectTypeCode$p$0;
        },

    set_workflowRendererObjectTypeCode: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_workflowRendererObjectTypeCode(value) {
            this._rendererObjectTypeCode$p$0 = value;
            return value;
        },

    get_asyncAutoDelete: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_asyncAutoDelete() {
            return this._asyncAutoDelete$p$0;
        },

    set_asyncAutoDelete: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_asyncAutoDelete(value) {
            this._asyncAutoDelete$p$0 = value;
            return value;
        },

    get_syncWorkflowLogOnFailure: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_syncWorkflowLogOnFailure() {
            return this._syncWorkflowLogOnFailure$p$0;
        },

    set_syncWorkflowLogOnFailure: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_syncWorkflowLogOnFailure(value) {
            this._syncWorkflowLogOnFailure$p$0 = value;
            return value;
        },

    get_updateAttributeList: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_updateAttributeList() {
            return this._updateAttributeList$p$0;
        },

    set_updateAttributeList: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$set_updateAttributeList(value) {
            if (!value) {
                value = '';
            }
            this._updateAttributeList$p$0 = value;
            return value;
        },

    get_updateAttributeListForSdk: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_updateAttributeListForSdk() {
            if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this._updateAttributeList$p$0)) {
                return this._updateAttributeList$p$0;
            }
            var regex = new RegExp(';', 'g');
            return this._updateAttributeList$p$0.replace(regex, ',');
        },

    get_isAsyncWorkflow: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isAsyncWorkflow() {
            if (0 === this._category$p$0 && 0 === this._mode$p$0) {
                return true;
            }
            return false;
        },

    get_isSyncWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isSyncWorkflow() {
        if (0 === this._category$p$0 && 1 === this._mode$p$0) {
            return true;
        }
        return false;
    },

    get_isCustomOperation: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$get_isCustomOperation() {
            if (3 === this._category$p$0) {
                return true;
            }
            return false;
        },

    addTrigger: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$addTrigger(trigger) {
        this._triggers$p$0 |= trigger;
    },

    addTriggerCondition: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$addTriggerCondition(condition) {
            this._triggerConditions$p$0 |= condition;
        },

    resetTriggers: function Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$resetTriggers() {
        this._triggers$p$0 = 0;
    },

    resetTriggerConditions: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$resetTriggerConditions() {
            this._triggerConditions$p$0 = 0;
            this.set_updateAttributeList('');
        },

    containsTrigger: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$containsTrigger(trigger) {
            return (this._triggers$p$0 & trigger) === trigger;
        },

    containsTriggerCondition: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$containsTriggerCondition(condition) {
            return (this._triggerConditions$p$0 & condition) === condition;
        },

    setDefaultParameters: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$setDefaultParameters() {
            this._isTemplate$p$0 = false;
            this._triggers$p$0 = 2;
            this._triggerConditions$p$0 = 2;
        },

    containsUpdateTriggerCondition: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$containsUpdateTriggerCondition() {
            var returnValue;
            if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this._updateAttributeList$p$0)) {
                returnValue = false;
            } else if (Microsoft.Crm.Workflow.Utils.StringUtility
                .areEqual(this._updateAttributeList$p$0, 'statecode') ||
                Microsoft.Crm.Workflow.Utils.StringUtility.areEqual(this._updateAttributeList$p$0, 'ownerid') ||
                Microsoft.Crm.Workflow.Utils.StringUtility
                .areEqual(this._updateAttributeList$p$0, 'statecode;ownerid') ||
                Microsoft.Crm.Workflow.Utils.StringUtility
                .areEqual(this._updateAttributeList$p$0, 'ownerid;statecode')) {
                returnValue = false;
            } else {
                returnValue = true;
            }
            return returnValue;
        },

    removeTriggerCondition: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowPublicationParameters$removeTriggerCondition(condition) {
            this._triggerConditions$p$0 &= ~condition;
        },

    _isTemplate$p$0: false,
    _isCrmUIWorkflow$p$0: false,
    _triggers$p$0: 0,
    _triggerConditions$p$0: 0,
    _updateAttributeList$p$0: null,
    _allAttrSelected$p$0: false,
    _asyncAutoDelete$p$0: false,
    _syncWorkflowLogOnFailure$p$0: false,
    _scope$p$0: 0,
    _category$p$0: 0,
    _mode$p$0: 0,
    _rendererObjectTypeCode$p$0: null
}


Microsoft.Crm.Workflow.ObjectModel
    .CustomJavascriptStep = function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'CustomJavascriptStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep.prototype = {
    javascript: null,

    get_javascript: function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$get_javascript() {
        return this.javascript;
    },

    set_javascript: function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$set_javascript(value) {
        this.javascript = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$apply(visitor) {
        visitor.visitCustomJavascriptStep(this);
    },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('javascript', this.javascript, true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_CustomJavascriptStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.javascript = sourceObject.javascript;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetAttributeValueStep = function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep(workflowStep, propSpec) {
        Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.initializeBase(this);
        this.__class = 'SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel';
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.set_propertySpec(propSpec);
    }
Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep.prototype = {
    get_propertySpec: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$get_propertySpec() {
        return this.specification;
    },

    set_propertySpec: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$set_propertySpec(value) {
        this.specification = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$set_entity(value) {
        this.entity = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$apply(visitor) {
        visitor.visitSetAttributeValueStep(this);
    },

    specification: null,
    entity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.specification) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('specification', this.specification.toJson(), true));
        }
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.specification) {
            this.specification._fixInternalLinks$i$0(this._workflow$p$0);
        }
        this.entity.fixInternalLinks(this._workflow$p$0);
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetAttributeValueStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(sourceObject.entity.__class);
                this.get_entity().initializeFromDynamic(sourceObject.entity);
                this.specification = new Microsoft.Crm.Workflow.Expressions.PropertySpecification('', null);
                this.specification.initializeFromDynamic(sourceObject.specification);
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetDefaultValueStep = function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep(workflowStep, propSpec) {
        Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SetDefaultValueStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.set_propertySpec(propSpec);
    }
Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep.prototype = {
    get_propertySpec: function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$get_propertySpec() {
        return this.specification;
    },

    set_propertySpec: function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$set_propertySpec(value) {
        this.specification = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$set_entity(value) {
        this.entity = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$apply(visitor) {
        visitor.visitSetDefaultValueStep(this);
    },

    specification: null,
    entity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('specification', this.specification.toJson(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        this.specification._fixInternalLinks$i$0(this._workflow$p$0);
        this.entity.fixInternalLinks(this._workflow$p$0);
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetDefaultValueStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(sourceObject.entity.__class);
                this.get_entity().initializeFromDynamic(sourceObject.entity);
                this.specification = new Microsoft.Crm.Workflow.Expressions.PropertySpecification('', null);
                this.specification.initializeFromDynamic(sourceObject.specification);
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetDisplayModeStep = function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep.prototype = {
    get_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$get_controlType() {
        return this.controlType;
    },

    set_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$set_controlType(value) {
        this.controlType = value;
        return value;
    },

    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$get_controlId() {
        return this.controlId;
    },

    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },

    get_isReadOnly: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$get_isReadOnly() {
        return this.isReadOnly;
    },

    set_isReadOnly: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$set_isReadOnly(value) {
        this.isReadOnly = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$set_entity(value) {
        this.entity = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$apply(visitor) {
        visitor.visitSetDisplayModeStep(this);
    },

    controlId: null,
    controlType: null,
    isReadOnly: false,
    entity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType', this.controlType, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isReadOnly',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this
                    .isReadOnly),
                true));
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetDisplayModeStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.controlId = sourceObject.controlId;
                this.controlType = sourceObject.controlType;
                this.isReadOnly = sourceObject.isReadOnly;
                if (sourceObject.entity) {
                    this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.entity.__class);
                    this.entity.initializeFromDynamic(sourceObject.entity);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetVisibilityStep = function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep.prototype = {
    get_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$get_controlType() {
        return this.controlType;
    },

    set_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$set_controlType(value) {
        this.controlType = value;
        return value;
    },

    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$get_controlId() {
        return this.controlId;
    },

    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },

    get_isVisible: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$get_isVisible() {
        return this.isVisible;
    },

    set_isVisible: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$set_isVisible(value) {
        this.isVisible = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$set_entity(value) {
        this.entity = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$apply(visitor) {
        visitor.visitSetVisibilityStep(this);
    },

    controlId: null,
    controlType: null,
    isVisible: false,
    entity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType', this.controlType, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isVisible', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isVisible), true));
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetVisibilityStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.controlId = sourceObject.controlId;
                this.controlType = sourceObject.controlType;
                this.isVisible = sourceObject.isVisible;
                if (sourceObject.entity) {
                    this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.entity.__class);
                    this.entity.initializeFromDynamic(sourceObject.entity);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetMessageStep = function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.SetMessageStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.actionSteps = new Microsoft.Crm.Workflow.ObjectModel.StepCollection();
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.SetMessageStep.prototype = {
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$get_controlId() {
        return this.controlId;
    },

    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$set_entity(value) {
        this.entity = value;
        return value;
    },

    get_level: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$get_level() {
        return this.level;
    },

    set_level: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$set_level(value) {
        this.level = value;
        return value;
    },

    get_ActionSteps: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$get_ActionSteps() {
        return this.actionSteps;
    },

    set_ActionSteps: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$set_ActionSteps(value) {
        this.actionSteps = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$apply(visitor) {
        visitor.visitSetMessageStep(this);
    },

    controlId: null,
    entity: null,
    level: null,
    actionSteps: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('actionSteps', this.actionSteps.toJson(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('level', this.level, true));
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.actionSteps) {
            for (var i = 0; i < this.actionSteps.get_Count(); i++) {
                var s = this.actionSteps.get_item(i);
                s.set_parent(this);
                s._workflow$p$0.stepDictionary.set_item(s.id, s);
                s.fixInternalLinks();
            }
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetMessageStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.actionSteps) {
                    for (var i = 0; i < sourceObject.actionSteps.list.length; i++) {
                        var item = sourceObject.actionSteps.list[i];
                        var step = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep(item.__class);
                        step.initializeFromDynamic(item);
                        this.actionSteps.add(step);
                    }
                }
                this.controlId = sourceObject.controlId;
                if (sourceObject.entity) {
                    this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.entity.__class);
                    this.entity.initializeFromDynamic(sourceObject.entity);
                }
                this.level = sourceObject.level;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetNextStageStep = function Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SetNextStageStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep.prototype = {
    get_parentStageId: function Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep$get_parentStageId() {
        return this.parentStageId;
    },

    set_parentStageId: function Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep$set_parentStageId(value) {
        this.parentStageId = value;
        return value;
    },

    get_stageId: function Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep$get_stageId() {
        return this.stageId;
    },

    set_stageId: function Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep$set_stageId(value) {
        this.stageId = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep$apply(visitor) {
        visitor.visitSetNextStageStep(this);
    },

    stageId: null,
    parentStageId: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stageId', this.stageId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('parentStageId', this.parentStageId, true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetNextStageStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.stageId = sourceObject.stageId;
                this.parentStageId = sourceObject.parentStageId;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetFieldRequiredLevelStep = function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep.prototype = {
    get_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_controlId() {
        return this.controlId;
    },

    set_controlId: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_controlId(value) {
        this.controlId = value;
        return value;
    },

    get_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_controlType() {
        return this.controlType;
    },

    set_controlType: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_controlType(value) {
        this.controlType = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_entity(value) {
        this.entity = value;
        return value;
    },

    get_requiredLevel: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$get_requiredLevel() {
        return this.requiredLevel;
    },

    set_requiredLevel: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$set_requiredLevel(value) {
        this.requiredLevel = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$apply(visitor) {
        visitor.visitSetFieldRequiredLevelStep(this);
    },

    controlId: null,
    controlType: null,
    requiredLevel: 0,
    entity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('controlId', this.controlId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('controlType', this.controlType, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('requiredLevel',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.requiredLevel),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetFieldRequiredLevelStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.requiredLevel = sourceObject.requiredLevel;
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(sourceObject.entity.__class);
                this.entity.initializeFromDynamic(sourceObject.entity);
                this.controlId = sourceObject.controlId;
                this.controlType = sourceObject.controlType;
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.QueryStep = function Microsoft_Crm_Workflow_ObjectModel_QueryStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.QueryStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep._getNextStepId$i$2());
    this.__class = 'QueryStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.QueryStep.prototype = {
    get_fetchExpression: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$get_fetchExpression() {
        return this.fetchExpression;
    },

    set_fetchExpression: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$set_fetchExpression(value) {
        this.fetchExpression = value;
        return value;
    },

    get_fetchCount: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$get_fetchCount() {
        return this.fetchCount;
    },

    set_fetchCount: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$set_fetchCount(value) {
        this.fetchCount = value;
        return value;
    },

    get_attributeList: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$get_attributeList() {
        return this.attributeList;
    },

    set_attributeList: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$set_attributeList(value) {
        this.attributeList = value;
        return value;
    },

    get_originalFetchXml: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$get_originalFetchXml() {
        return this.originalFetchXml;
    },

    set_originalFetchXml: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$set_originalFetchXml(value) {
        this.originalFetchXml = value;
        return value;
    },

    get_originalLayoutXml: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$get_originalLayoutXml() {
        return this.originalLayoutXml;
    },

    set_originalLayoutXml: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$set_originalLayoutXml(value) {
        this.originalLayoutXml = value;
        return value;
    },

    get_entityName: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$get_entityName() {
        return this.entityName;
    },

    set_entityName: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$set_entityName(value) {
        this.entityName = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$apply(visitor) {
        visitor.visitQueryStep(this);
    },

    fetchExpression: null,
    fetchCount: 0,
    attributeList: null,
    entityName: null,
    originalFetchXml: '',
    originalLayoutXml: '',

    toJson: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.fetchExpression) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('fetchExpression', this.fetchExpression.toJson(), true));
        }
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('fetchCount', this.fetchCount + '', true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeList', this.attributeList, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('entityName', this.entityName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('originalFetchXml', this.originalFetchXml, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('originalLayoutXml', this.originalLayoutXml, true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_QueryStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var sourceObject = deserialized;
            if (sourceObject.fetchExpression) {
                this.fetchExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression(sourceObject.fetchExpression.__class);
                this.fetchExpression.initializeFromDynamic(sourceObject.fetchExpression);
            }
            if (sourceObject.fetchCount) {
                this.fetchCount = Number.parseInvariant((deserialized)['fetchCount']);
            }
            if (sourceObject.attributeList) {
                this.attributeList = sourceObject.attributeList;
            }
            if (sourceObject.entityName) {
                this.entityName = sourceObject.entityName;
            }
            if (sourceObject.originalFetchXml) {
                this.originalFetchXml = sourceObject.originalFetchXml;
            }
            if (sourceObject.originalLayoutXml) {
                this.originalLayoutXml = sourceObject.originalLayoutXml;
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .RollupRuleStep = function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.__class = 'RollupRuleStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.setNameAndId(workflowStep._getNextStepId$i$2());
    }
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.prototype = {
    get_sourceFilter: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_sourceFilter() {
        return this.sourceFilter;
    },

    set_sourceFilter: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$set_sourceFilter(value) {
        this.sourceFilter = value;
        return value;
    },

    get_hierarchicalRelationshipName: function
        Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_hierarchicalRelationshipName() {
            return this.hierarchicalRelationshipName;
        },

    set_hierarchicalRelationshipName: function
        Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$set_hierarchicalRelationshipName(value) {
            this.hierarchicalRelationshipName = value;
            return value;
        },

    get_isHierarchical: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_isHierarchical() {
        return !!this.hierarchicalRelationshipName && !!this.hierarchicalRelationshipName.length;
    },

    get_targetFilter: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_targetFilter() {
        return this.targetFilter;
    },

    set_targetFilter: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$set_targetFilter(value) {
        this.targetFilter = value;
        return value;
    },

    get_targetLinkedFilter: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_targetLinkedFilter() {
        return this.targetLinkedFilter;
    },

    set_targetLinkedFilter: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$set_targetLinkedFilter(value) {
        this.targetLinkedFilter = value;
        return value;
    },

    get_targetRelationship: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_targetRelationship() {
        return this.targetRelationship;
    },

    set_targetRelationship: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$set_targetRelationship(value) {
        this.targetRelationship = value;
        return value;
    },

    get_targetRelationshipLinked: function
        Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_targetRelationshipLinked() {
            return this.targetRelationshipLinked;
        },

    set_targetRelationshipLinked: function
        Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$set_targetRelationshipLinked(value) {
            this.targetRelationshipLinked = value;
            return value;
        },

    get_aggregate: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$get_aggregate() {
        return this.aggregate;
    },

    set_aggregate: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$set_aggregate(value) {
        this.aggregate = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$apply(visitor) {
        visitor.visitRollupRuleStep(this);
    },

    hierarchicalRelationshipName: null,
    sourceFilter: null,
    targetRelationship: null,
    targetRelationshipLinked: null,
    targetFilter: null,
    targetLinkedFilter: null,
    aggregate: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.sourceFilter) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('sourceFilter', this.sourceFilter.toJson(), true));
        }
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('hierarchicalRelationshipName', this.hierarchicalRelationshipName, true));
        if (this.targetFilter) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetFilter', this.targetFilter.toJson(), true));
        }
        if (this.targetRelationship) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetRelationship', this.targetRelationship.toJson(), true));
        }
        if (this.targetLinkedFilter) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetLinkedFilter', this.targetLinkedFilter.toJson(), true));
        }
        if (this.targetRelationshipLinked) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('targetRelationshipLinked', this.targetRelationshipLinked.toJson(), true));
        }
        if (this.aggregate) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('aggregate', this.aggregate.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.sourceFilter) {
            this.sourceFilter.fixInternalLinks(this._workflow$p$0);
        }
        if (this.targetFilter) {
            this.targetFilter.fixInternalLinks(this._workflow$p$0);
        }
        if (this.targetRelationship) {
            this.targetRelationship.fixInternalLinks(this._workflow$p$0);
        }
        if (this.targetLinkedFilter) {
            this.targetLinkedFilter.fixInternalLinks(this._workflow$p$0);
        }
        if (this.targetRelationshipLinked) {
            this.targetRelationshipLinked.fixInternalLinks(this._workflow$p$0);
        }
        if (this.aggregate) {
            this.aggregate.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_RollupRuleStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.hierarchicalRelationshipName = sourceObject.hierarchicalRelationshipName;
                if (sourceObject.sourceFilter) {
                    this.sourceFilter = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.sourceFilter.__class);
                    this.sourceFilter.initializeFromDynamic(sourceObject.sourceFilter);
                }
                if (sourceObject.targetRelationship) {
                    this.targetRelationship = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.targetRelationship.__class);
                    this.targetRelationship.initializeFromDynamic(sourceObject.targetRelationship);
                }
                if (sourceObject.targetFilter) {
                    this.targetFilter = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.targetFilter.__class);
                    this.targetFilter.initializeFromDynamic(sourceObject.targetFilter);
                }
                if (sourceObject.targetRelationshipLinked) {
                    this.targetRelationshipLinked = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.targetRelationshipLinked.__class);
                    this.targetRelationshipLinked.initializeFromDynamic(sourceObject.targetRelationshipLinked);
                }
                if (sourceObject.targetLinkedFilter) {
                    this.targetLinkedFilter = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.targetLinkedFilter.__class);
                    this.targetLinkedFilter.initializeFromDynamic(sourceObject.targetLinkedFilter);
                }
                if (sourceObject.aggregate) {
                    this.aggregate = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.aggregate.__class);
                    this.aggregate.initializeFromDynamic(sourceObject.aggregate);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase = function Microsoft_Crm_Workflow_ObjectModel_SetValueStepBase() {
    Microsoft.Crm.Workflow.ObjectModel.SetValueStepBase.initializeBase(this);
}


Microsoft.Crm.Workflow.ObjectModel
    .SendEmailStep = function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.SendEmailStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SendEmailStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.SendEmailStep.prototype = {
    apply: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$apply(visitor) {
        visitor.visitSendEmailStep(this);
    },

    get_regardingEntity: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$get_regardingEntity() {
        return this.regardingEntity;
    },

    set_regardingEntity: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$set_regardingEntity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.regardingEntity = value;
        return value;
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$set_entity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!value, 'Entity specification value cannot be set to null');
        this.entity = value;
        return value;
    },

    get_sendEmailStepType: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$get_sendEmailStepType() {
        return this.sendEmailType;
    },

    set_sendEmailStepType: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$set_sendEmailStepType(value) {
        this.sendEmailType = value;
        return value;
    },

    get_emailTemplateId: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$get_emailTemplateId() {
        return this.emailTemplateId;
    },

    set_emailTemplateId: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$set_emailTemplateId(value) {
        this.emailTemplateId = value;
        return value;
    },

    sendEmailType: 0,
    entity: null,
    emailTemplateId: null,
    regardingEntity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('sendEmailType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.sendEmailType),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('emailTemplateId', this.emailTemplateId.toString(), true));
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        if (this.regardingEntity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('regardingEntity', this.regardingEntity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.regardingEntity) {
            this.regardingEntity.fixInternalLinks(this._workflow$p$0);
        }
        if (this.entity) {
            this.entity.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SendEmailStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.emailTemplateId = sourceObject.emailTemplateId;
                this.sendEmailType = parseInt(sourceObject.sendEmailType);
                if (sourceObject.entity) {
                    this.entity = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                    this.entity.initializeFromDynamic(sourceObject.entity);
                }
                if (sourceObject.regardingEntity) {
                    this.regardingEntity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.regardingEntity.__class);
                    this.regardingEntity.initializeFromDynamic(sourceObject.regardingEntity);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .SetStateStep = function Microsoft_Crm_Workflow_ObjectModel_SetStateStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.SetStateStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.__class = 'SetStateStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.SetStateStep.prototype = {
    get_entity: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$set_entity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_state: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$get_state() {
        return this.state;
    },

    set_state: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$set_state(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'State');
        this.state = value;
        return value;
    },

    get_status: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$get_status() {
        return this.status;
    },

    set_status: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$set_status(value) {
        this.status = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$apply(visitor) {
        visitor.visitSetStateStep(this);
    },

    entity: null,
    state: null,
    status: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.state) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('state', this.state.toJson(), true));
        }
        if (this.status) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('status', this.status.toJson(), true));
        }
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_SetStateStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entity) {
            this.entity.fixInternalLinks(this._workflow$p$0);
        }
        if (this.state) {
            this.state.fixInternalLinks(this._workflow$p$0);
        }
        if (this.status) {
            this.status.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_SetStateStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.status) {
                    this.status = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.status.__class);
                    this.status.initializeFromDynamic(sourceObject.status);
                }
                if (sourceObject.state) {
                    this.state = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.state.__class);
                    this.state.initializeFromDynamic(sourceObject.state);
                }
                if (sourceObject.entity) {
                    this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildEntity(sourceObject.entity.__class);
                    this.entity.initializeFromDynamic(sourceObject.entity);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .StageStep = function Microsoft_Crm_Workflow_ObjectModel_StageStep(workflowStep, stageName) {
        Microsoft.Crm.Workflow.ObjectModel.StageStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(stageName, 'stageName');
        this.__class = 'StageStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.set_stageName(stageName);
    }
Microsoft.Crm.Workflow.ObjectModel.StageStep.prototype = {
    get_stageName: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_stageName() {
        return this.description;
    },

    set_stageName: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_stageName(value) {
        this.description = value;
        return value;
    },

    get_nextStageId: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_nextStageId() {
        return this.nextStageId;
    },

    set_nextStageId: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_nextStageId(value) {
        this.nextStageId = value;
        return value;
    },

    get_stageId: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_stageId() {
        return this.stageId;
    },

    set_stageId: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_stageId(value) {
        this.stageId = value;
        return value;
    },

    get_stageCategory: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_stageCategory() {
        return this.stageCategory;
    },

    set_stageCategory: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_stageCategory(value) {
        this.stageCategory = value;
        return value;
    },

    get_clientProperties: function Microsoft_Crm_Workflow_ObjectModel_StageStep$get_clientProperties() {
        return this.clientProperties;
    },

    set_clientProperties: function Microsoft_Crm_Workflow_ObjectModel_StageStep$set_clientProperties(value) {
        this.clientProperties = value;
        return value;
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_StageStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)),
                'Cannot add ConditionBranchStep directly to StageStep. It should be first added to ConditionStep.');
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_StageStep$apply(visitor) {
        visitor.visitStageStep(this);
    },

    getStageStepWithStageId: function Microsoft_Crm_Workflow_ObjectModel_StageStep$getStageStepWithStageId(id) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(id)) {
            return null;
        }
        if (id === this.stageId) {
            return this;
        }
        for (var i = 0; i < this._workflow$p$0.steps.getArrayList().length; i++) {
            var entityStep = this._workflow$p$0.steps.getArrayList()[i];
            if (entityStep) {
                var stageStep = entityStep.steps.get_item(0);
                if (stageStep && stageStep.stageId === id) {
                    return stageStep;
                }
            }
        }
        return null;
    },

    stageId: null,
    nextStageId: null,
    stageCategory: null,
    clientProperties: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_StageStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        this.appendToJson(sb);
        sb.append('}');
        return sb.toString();
    },

    appendToJson: function Microsoft_Crm_Workflow_ObjectModel_StageStep$appendToJson(sb) {
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('stageId', this.stageId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('nextStageId', this.nextStageId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('stageCategory', this.stageCategory, true));
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StageStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                .call(this, deserialized);
            var sourceObject = deserialized;
            this.stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(sourceObject.stageId);
            this.nextStageId = Microsoft.Crm.Workflow.Utils.StringUtility
                .reduceToCanonicalForm(sourceObject.nextStageId);
            this.stageCategory = sourceObject.stageCategory;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepBase = function Microsoft_Crm_Workflow_ObjectModel_StepBase() {
    this.stepLabels = new Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection();
}
Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype = {
    get_Id: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_Id() {
        return this.id;
    },

    set_Id: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_Id(value) {
        this.id = value;
        return value;
    },

    get_Name: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_Name() {
        return this.name;
    },

    set_Name: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_Name(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Name');
        this.name = value;
        return value;
    },

    get_Description: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_Description() {
        return this.description;
    },

    set_Description: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_Description(value) {
        this.description = value;
        return value;
    },

    get_parent: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_parent() {
        return this._parent$p$0;
    },

    set_parent: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_parent(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        this._parent$p$0 = value;
        this.set_workflow(this.get_parent()._workflow$p$0);
        return value;
    },

    get_workflow: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_workflow() {
        return this._workflow$p$0;
    },

    set_workflow: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_workflow(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Workflow');
        if ((this._workflow$p$0) && (this._workflow$p$0 !== value)) {
            return value;
        }
        this._workflow$p$0 = value;
        return value;
    },

    get_extensionObj: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_extensionObj() {
        return this._extensionObj$p$0;
    },

    set_extensionObj: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_extensionObj(value) {
        this._extensionObj$p$0 = value;
        return value;
    },

    get_stepLabels: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_stepLabels() {
        return this.stepLabels;
    },

    addLabel: function Microsoft_Crm_Workflow_ObjectModel_StepBase$addLabel(stepLabel) {
        this.stepLabels.add(stepLabel);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_StepBase$addPeer(direction, newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(newStep, 'newStep');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!this.get_parent(), 'Parent step is null');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(this.get_parent()),
                'Parent step is not a Composite Step');
        var compositeParent = this.get_parent();
        compositeParent.insert(this, direction, newStep);
    },

    get_typeName: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_typeName() {
        return this.__class.substr(0, this.__class.indexOf(':#'));
    },

    _detachFromWorkflow$i$0: function Microsoft_Crm_Workflow_ObjectModel_StepBase$_detachFromWorkflow$i$0() {
        if (this._workflow$p$0) {
            this._workflow$p$0 = null;
        }
    },

    setNameAndId: function Microsoft_Crm_Workflow_ObjectModel_StepBase$setNameAndId(stepId) {
        var objectNamespaces = Object.getType(this).getName().split(".");
        var type = objectNamespaces[objectNamespaces.length - 1];
        this.id = type + stepId;
        this.name = 'Step_' + stepId;
    },

    setJQueryFriendlyNameAndId: function
        Microsoft_Crm_Workflow_ObjectModel_StepBase$setJQueryFriendlyNameAndId(stepId) {
            var typeName = Object.getType(this).getName();
            var lastDot = typeName.lastIndexOf('.');
            typeName = typeName.substring(lastDot + 1, typeName.length);
            this.id = typeName + stepId;
            this.name = 'Step_' + stepId;
        },

    _createDataSources$i$0: function Microsoft_Crm_Workflow_ObjectModel_StepBase$_createDataSources$i$0(dataSources) {
    },

    collectDataSourcesRecursive: function
        Microsoft_Crm_Workflow_ObjectModel_StepBase$collectDataSourcesRecursive(step,
            referenceStep,
            includeReferenceStep,
            dataSources) {
            if (step.id !== referenceStep.id || includeReferenceStep) {
                if ((!step._dataSourcesCreatedByStep$p$0) || step._isDataSourceDirty$p$0) {
                    step._dataSourcesCreatedByStep$p$0 = new Microsoft.Crm.Workflow.DataSourceCollection();
                    step._createDataSources$i$0(step._dataSourcesCreatedByStep$p$0);
                    step._isDataSourceDirty$p$0 = false;
                }
            }
            var isSiblingInteractions = false;
            if (step.id !== referenceStep.id && !isSiblingInteractions) {
                dataSources.append(step._dataSourcesCreatedByStep$p$0);
                if (Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(step)) {
                    var compositeStep = step;
                    for (var i = 0; i < compositeStep.steps.get_Count(); i++) {
                        var childStep = compositeStep.steps.get_item(i);
                        if (!this
                            .collectDataSourcesRecursive(childStep, referenceStep, includeReferenceStep, dataSources)) {
                            return false;
                        }
                    }
                }
                return true;
            } else {
                if (includeReferenceStep) {
                    dataSources.append(step._dataSourcesCreatedByStep$p$0);
                }
                return false;
            }
        },

    get_dataSources: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_dataSources() {
        if (!this._dataSourcesCreatedByStep$p$0) {
            this._dataSourcesCreatedByStep$p$0 = new Microsoft.Crm.Workflow.DataSourceCollection();
            this._createDataSources$i$0(this._dataSourcesCreatedByStep$p$0);
        }
        return this._dataSourcesCreatedByStep$p$0;
    },

    get_isDataSourceDirty: function Microsoft_Crm_Workflow_ObjectModel_StepBase$get_isDataSourceDirty() {
        return this._isDataSourceDirty$p$0;
    },

    set_isDataSourceDirty: function Microsoft_Crm_Workflow_ObjectModel_StepBase$set_isDataSourceDirty(value) {
        this._isDataSourceDirty$p$0 = value;
        return value;
    },

    description: null,
    id: null,
    name: null,
    stepLabels: null,
    _dataSourcesCreatedByStep$p$0: null,
    _isDataSourceDirty$p$0: false,
    _parent$p$0: null,
    _workflow$p$0: null,
    _extensionObj$p$0: null,
    __class: 'StepBase:#Microsoft.Crm.Workflow.ObjectModel',

    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepBase$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('id', this.id.toString(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('description', this.description, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('name', this.name, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('stepLabels', this.stepLabels.toJson(), true));
        return sb.toString();
    },

    fixLinks: function Microsoft_Crm_Workflow_ObjectModel_StepBase$fixLinks() {
        this.fixInternalLinks();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_StepBase$fixInternalLinks() {
        this.set_workflow(this.get_parent()._workflow$p$0);
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StepBase$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var sourceObject = deserialized;
            this.id = sourceObject.id;
            this.description = sourceObject.description;
            this.name = sourceObject.name;
            for (var i = 0; i < sourceObject.stepLabels.list.length; i++) {
                var item = sourceObject.stepLabels.list[i];
                var label = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
                label.initializeFromDynamic(item);
                this.stepLabels.add(label);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepCollection = function Microsoft_Crm_Workflow_ObjectModel_StepCollection() {
    this._eventHandlers$p$0 = new Sys.EventHandlerList();
    this.list = [];
}
Microsoft.Crm.Workflow.ObjectModel.StepCollection.prototype = {
    stepCollectionChangedEventHandler: null,

    add_stepCollectionChanged: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollection$add_stepCollectionChanged(value) {
            this._eventHandlers$p$0.addHandler('StepCollectionChanged', value);
        },

    remove_stepCollectionChanged: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollection$remove_stepCollectionChanged(value) {
            this._eventHandlers$p$0.removeHandler('StepCollectionChanged', value);
        },

    _raiseEvent$p$0: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$_raiseEvent$p$0(args) {
        if (!this._eventHandlers$p$0) {
            return;
        }
        var handler = this._eventHandlers$p$0.getHandler('StepCollectionChanged');
        if (handler) {
            handler(this, args);
        }
    },

    _getAddRemoveCollectionChangedArgs$p$0: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollection$_getAddRemoveCollectionChangedArgs$p$0(action, step) {
            var args = new (Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1
                .$$(Microsoft.Crm.Workflow.ObjectModel.StepBase))();
            args.set_action(action);
            args.set_step(step);
            args.set_newItems(step);
            return args;
        },

    add: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$add(newStep) {
        Array.add(this.list, newStep);
        this._raiseEvent$p$0(this._getAddRemoveCollectionChangedArgs$p$0(0, newStep));
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$remove(step) {
        var oldIndex = Array.indexOf(this.list, step);
        this._removeWithoutRaisingEvent$p$0(step);
        var args = this._getAddRemoveCollectionChangedArgs$p$0(1, step);
        args.set_oldStartingIndex(oldIndex);
        this._raiseEvent$p$0(args);
    },

    _removeWithoutRaisingEvent$p$0: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollection$_removeWithoutRaisingEvent$p$0(stepBase) {
            Array.remove(this.list, stepBase);
        },

    get_Count: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$get_Count() {
        return this.list.length;
    },

    get_item: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$get_item(index) {
        return this.getStep(index);
    },

    getStep: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$getStep(index) {
        return this.list[index];
    },

    indexOf: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$indexOf(peer) {
        return Array.indexOf(this.list, peer);
    },

    insert: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$insert(peerIndex, newStep) {
        Array.insert(this.list, peerIndex, newStep);
        var eventArgs = this._getAddRemoveCollectionChangedArgs$p$0(0, newStep);
        eventArgs.set_newStartingIndex(peerIndex);
        this._raiseEvent$p$0(eventArgs);
    },

    move: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$move(newIndex, stepBase) {
        var oldIndex = Array.indexOf(this.list, stepBase);
        this._removeWithoutRaisingEvent$p$0(stepBase);
        Array.insert(this.list, newIndex, stepBase);
        var eventArgs = this._getAddRemoveCollectionChangedArgs$p$0(2, stepBase);
        eventArgs.set_newStartingIndex(newIndex);
        eventArgs.set_oldStartingIndex(oldIndex);
        this._raiseEvent$p$0(eventArgs);
    },

    contains: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$contains(stepBase) {
        return Array.contains(this.list, stepBase);
    },

    getArrayList: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$getArrayList() {
        return this.list;
    },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepCollection$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{\"list\":[');
        if (this.get_Count() > 0) {
            sb.append(this.get_item(0).toJson());
            for (var i = 1; i < this.get_Count(); i++) {
                sb.append(',');
                sb.append(this.get_item(i).toJson());
            }
        }
        sb.append(']}');
        return sb.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .StepCollectionChangedEventArgs$1 = function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1() {
        Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1
            .$$(this.$$gta['Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1']['TViewModel'])
            .initializeBase(this);
    }
Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1
    .$$ = function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$$$(TViewModel) {
        var $$cn = 'StepCollectionChangedEventArgs$1' + '$' + TViewModel.getName().replace(/\./g, '_');
        if (!Microsoft.Crm.Workflow.ObjectModel[$$cn]) {
            var $$ccr = Microsoft.Crm.Workflow.ObjectModel[$$cn] = function() {
                (this.$$gta = this
                        .$$gta ||
                        {})['Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1'] =
                    { 'TViewModel': TViewModel };
                var newArgs = [];
                for (var i = 0; i < arguments.length; ++i) {
                    newArgs[i] = arguments[i];
                }
                Microsoft.Crm.Workflow.ObjectModel.StepCollectionChangedEventArgs$1.apply(this, newArgs);
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
    _action$p$1: 0,

    get_action: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$get_action() {
        return this._action$p$1;
    },

    set_action: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$set_action(value) {
        this._action$p$1 = value;
        return value;
    },

    _step$p$1: null,

    get_step: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$get_step() {
        return this._step$p$1;
    },

    set_step: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$set_step(value) {
        this._step$p$1 = value;
        return value;
    },

    get_oldItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$get_oldItems() {
        return this._oldItems$p$1;
    },

    set_oldItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$set_oldItems(value) {
        this._oldItems$p$1 = value;
        return value;
    },

    get_newItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$get_newItems() {
        return this._newItems$p$1;
    },

    set_newItems: function Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$set_newItems(value) {
        this._newItems$p$1 = value;
        return value;
    },

    get_oldStartingIndex: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$get_oldStartingIndex() {
            return this._oldStartingIndex$p$1;
        },

    set_oldStartingIndex: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$set_oldStartingIndex(value) {
            this._oldStartingIndex$p$1 = value;
            return value;
        },

    get_newStartingIndex: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$get_newStartingIndex() {
            return this._newStartingIndex$p$1;
        },

    set_newStartingIndex: function
        Microsoft_Crm_Workflow_ObjectModel_StepCollectionChangedEventArgs$1$set_newStartingIndex(value) {
            this._newStartingIndex$p$1 = value;
            return value;
        },

    _oldItems$p$1: null,
    _newItems$p$1: null,
    _oldStartingIndex$p$1: 0,
    _newStartingIndex$p$1: 0
}


Microsoft.Crm.Workflow.ObjectModel.StepDictionary = function Microsoft_Crm_Workflow_ObjectModel_StepDictionary() {
    Microsoft.Crm.Workflow.ObjectModel.StepDictionary.initializeBase(this);
}
Microsoft.Crm.Workflow.ObjectModel.StepDictionary.prototype = {
    get_item: function Microsoft_Crm_Workflow_ObjectModel_StepDictionary$get_item(id) {
        return this.dict[id];
    },

    set_item: function Microsoft_Crm_Workflow_ObjectModel_StepDictionary$set_item(id, value) {
        this.dict[id] = value;
        return value;
    }
}


Microsoft.Crm.Workflow.ObjectModel.StepLabel = function Microsoft_Crm_Workflow_ObjectModel_StepLabel() {
}
Microsoft.Crm.Workflow.ObjectModel.StepLabel.prototype = {
    get_labelId: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$get_labelId() {
        return this.labelId;
    },

    set_labelId: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$set_labelId(value) {
        this.labelId = value;
        return value;
    },

    get_languageCode: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$get_languageCode() {
        return this.languageCode;
    },

    set_languageCode: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$set_languageCode(value) {
        this.languageCode = value;
        return value;
    },

    get_description: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$get_description() {
        return this.description;
    },

    set_description: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$set_description(value) {
        this.description = value;
        return value;
    },

    labelId: null,
    languageCode: 0,
    description: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('labelId', this.labelId, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('languageCode',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.languageCode),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('description', this.description, true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_StepLabel$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var sourceObject = deserialized;
            this.labelId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(sourceObject.labelId);
            this.description = sourceObject.description;
            this.languageCode = sourceObject.languageCode;
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .StepLabelCollection = function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection() {
        this.list = [];
    }
Microsoft.Crm.Workflow.ObjectModel.StepLabelCollection.prototype = {
    add: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$add(newStepLabel) {
        Array.add(this.list, newStepLabel);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$remove(stepLabel) {
        Array.remove(this.list, stepLabel);
    },

    get_count: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$get_count() {
        return this.list.length;
    },

    get_item: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$get_item(index) {
        return this.list[index];
    },

    indexOf: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$indexOf(peer) {
        return Array.indexOf(this.list, peer);
    },

    insert: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$insert(peerIndex, newStepLabel) {
        Array.insert(this.list, peerIndex, newStepLabel);
    },

    contains: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$contains(stepLabel) {
        return Array.contains(this.list, stepLabel);
    },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_StepLabelCollection$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{\"list\":[');
        if (this.get_count() > 0) {
            sb.append(this.get_item(0).toJson());
            for (var i = 1; i < this.get_count(); i++) {
                sb.append(',');
                sb.append(this.get_item(i).toJson());
            }
        }
        sb.append(']}');
        return sb.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .StopWorkflowStep = function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep(workflowStep) {
        Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
        this.setNameAndId(workflowStep._getNextStepId$i$2());
        this.status = 0;
        this.message = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, '', 14);
        this.__class = 'StopWorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.StopWorkflowStep.prototype = {
    get_status: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$get_status() {
        return this.status;
    },

    set_status: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$set_status(value) {
        this.status = value;
        return value;
    },

    get_statusMessage: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$get_statusMessage() {
        return this.message;
    },

    set_statusMessage: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$set_statusMessage(value) {
        this.message = value;
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$apply(visitor) {
        visitor.visitStopWorkflowStep(this);
    },

    status: 0,
    message: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('status',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this
                    .status),
                true));
        if (this.message) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('message', this.message.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.message) {
            this.message.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_StopWorkflowStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.status = parseInt(sourceObject.status);
                if (sourceObject.message) {
                    this.message = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.message.__class);
                    this.message.initializeFromDynamic(sourceObject.message);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel
    .PageStep = function Microsoft_Crm_Workflow_ObjectModel_PageStep(workflowStep, stageName) {
        Microsoft.Crm.Workflow.ObjectModel.PageStep.initializeBase(this, [workflowStep, stageName]);
        this.__class = 'PageStep:#Microsoft.Crm.Workflow.ObjectModel';
        this.pageUniqueName = this.name;
    }
Microsoft.Crm.Workflow.ObjectModel.PageStep.prototype = {
    get_pageLayoutId: function Microsoft_Crm_Workflow_ObjectModel_PageStep$get_pageLayoutId() {
        return this.pageLayoutId;
    },

    set_pageLayoutId: function Microsoft_Crm_Workflow_ObjectModel_PageStep$set_pageLayoutId(value) {
        this.pageLayoutId = value;
        return value;
    },

    get_pageUniqueName: function Microsoft_Crm_Workflow_ObjectModel_PageStep$get_pageUniqueName() {
        return this.pageUniqueName;
    },

    set_pageUniqueName: function Microsoft_Crm_Workflow_ObjectModel_PageStep$set_pageUniqueName(value) {
        this.pageUniqueName = value;
        return value;
    },

    get_defaultNextPageLayoutId: function Microsoft_Crm_Workflow_ObjectModel_PageStep$get_defaultNextPageLayoutId() {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.defaultNextPageLayoutId)) {
            this._setDefaultNextPageLayoutId$p$3();
        }
        return this.defaultNextPageLayoutId;
    },

    set_defaultNextPageLayoutId: function
        Microsoft_Crm_Workflow_ObjectModel_PageStep$set_defaultNextPageLayoutId(value) {
            this.defaultNextPageLayoutId = value;
            return value;
        },

    apply: function Microsoft_Crm_Workflow_ObjectModel_PageStep$apply(visitor) {
        visitor.visitPageStep(this);
    },

    pageLayoutId: null,
    pageUniqueName: null,
    defaultNextPageLayoutId: null,

    appendToJson: function Microsoft_Crm_Workflow_ObjectModel_PageStep$appendToJson(sb) {
        Microsoft.Crm.Workflow.ObjectModel.StageStep.prototype.appendToJson.call(this, sb);
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('pageLayoutId', this.pageLayoutId, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('pageUniqueName', this.pageUniqueName, true));
    },

    _setDefaultNextPageLayoutId$p$3: function
        Microsoft_Crm_Workflow_ObjectModel_PageStep$_setDefaultNextPageLayoutId$p$3() {
            if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.nextStageId)) {
                var pageStep = this.getStageStepWithStageId(this.nextStageId);
                if (pageStep) {
                    this.defaultNextPageLayoutId = pageStep.pageLayoutId;
                }
            }
        },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_PageStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StageStep.prototype.initializeFromDynamic.call(this, deserialized);
            var sourceObject = deserialized;
            this.pageLayoutId = Microsoft.Crm.Workflow.Utils.StringUtility
                .reduceToCanonicalForm(sourceObject.pageLayoutId);
            if (sourceObject.pageUniqueName) {
                this.pageUniqueName = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(sourceObject.pageUniqueName);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel.UpdateStep = function Microsoft_Crm_Workflow_ObjectModel_UpdateStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.UpdateStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep._getNextStepId$i$2());
    this.__class = 'UpdateStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.UpdateStep.prototype = {
    apply: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$apply(visitor) {
        visitor.visitUpdateStep(this);
    },

    get_entity: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$get_entity() {
        return this.entity;
    },

    set_entity: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$set_entity(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Entity');
        this.entity = value;
        return value;
    },

    get_entitySpec: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$get_entitySpec() {
        return this.entitySpec;
    },

    set_entitySpec: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$set_entitySpec(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!!value, 'Entity specification value cannot be set to null');
        this.entitySpec = value;
        return value;
    },

    entitySpec: null,
    entity: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.toJson.call(this));
        if (this.entitySpec) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entitySpec', this.entitySpec.toJson(), true));
        }
        if (this.entity) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('entity', this.entity.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$fixInternalLinks() {
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.fixInternalLinks.call(this);
        if (this.entitySpec) {
            this.entitySpec.fixInternalLinks(this._workflow$p$0);
        }
        if (this.entity) {
            this.entity.fixInternalLinks(this._workflow$p$0);
        }
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_ObjectModel_UpdateStep$initializeFromDynamic(deserialized) {
        if (deserialized) {
            Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.initializeFromDynamic.call(this, deserialized);
            var sourceObject = deserialized;
            if (sourceObject.entitySpec) {
                this.entitySpec = new Microsoft.Crm.Workflow.Expressions.EntitySpecification('');
                this.entitySpec.initializeFromDynamic(sourceObject.entitySpec);
            }
            if (sourceObject.entity) {
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(sourceObject.entity.__class);
                this.entity.initializeFromDynamic(sourceObject.entity);
            }
        }
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .WaitBranchStep = function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep(waitStep, conditionExpression) {
        Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(waitStep, 'waitStep');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(conditionExpression, 'conditionExpression');
        this.setNameAndId(waitStep._workflow$p$0._getNextStepId$i$2());
        this.conditionExpression = conditionExpression;
        this.__class = 'WaitBranchStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.prototype = {
    get_conditionExpression: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$get_conditionExpression() {
        return this.conditionExpression;
    },

    set_conditionExpression: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$set_conditionExpression(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'ConditionExpression');
        this.conditionExpression = value;
        return value;
    },

    get_parent: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$get_parent() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$set_parent(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.WaitStep.isInstanceOfType(value))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Parent must be of type WaitStep.', 'Parent');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$apply(visitor) {
        visitor.visitWaitBranchStep(this);
    },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$addPeer(direction, newStep) {
        var branch = null;
        var timeout = null;
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            branch = newStep;
        } else if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(newStep)) {
            timeout = newStep;
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((!!branch) ||
                (!!timeout
                ),
                'A child of WaitStep must be of type WaitBranchStep or WaitTimeoutStep.');
        if (branch) {
            (this.get_parent()).insert(this, direction, branch);
        } else {
            if (!(this.get_parent())._tailOfWaitBranchStep$i$2()) {
                (this.get_parent()).append(timeout);
            } else {
                (this.get_parent()).insert((this.get_parent())._tailOfWaitBranchStep$i$2(), direction, timeout);
            }
        }
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$remove(stepBase) {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        if (!(this.get_parent()).steps.get_Count()) {
            (this.get_parent()).remove(this.get_parent());
        }
    },

    conditionExpression: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        if (this.conditionExpression) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('conditionExpression', this.conditionExpression.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_WaitBranchStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.conditionExpression) {
                    this.conditionExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.conditionExpression.__class);
                    this.conditionExpression.initializeFromDynamic(sourceObject.conditionExpression);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.WaitStep = function Microsoft_Crm_Workflow_ObjectModel_WaitStep(workflowStep) {
    Microsoft.Crm.Workflow.ObjectModel.WaitStep.initializeBase(this);
    Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(workflowStep, 'workflowStep');
    this.setNameAndId(workflowStep._getNextStepId$i$2());
    this.__class = 'WaitStep:#Microsoft.Crm.Workflow.ObjectModel';
}
Microsoft.Crm.Workflow.ObjectModel.WaitStep.prototype = {
    apply: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$apply(visitor) {
        visitor.visitWaitStep(this);
    },

    _headOfWaitBranchStep$i$2: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$_headOfWaitBranchStep$i$2() {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(this.steps.get_Count() > 0, 'There must be a least one step in steps collection.');
        return (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(this.steps.get_item(0)))
            ? this.steps.get_item(0)
            : null;
    },

    _tailOfWaitBranchStep$i$2: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$_tailOfWaitBranchStep$i$2() {
        if (this.steps.get_Count() <= 0) {
            return null;
        }
        var i;
        for (i = 1; i < this.steps.get_Count(); i++) {
            if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(this.steps.get_item(i))) {
                break;
            }
        }
        return (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(this.steps.get_item(i - 1)))
            ? this.steps.get_item(i - 1)
            : null;
    },

    _headOfWaitTimeoutStep$i$2: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$_headOfWaitTimeoutStep$i$2() {
        if (this.steps.get_Count() <= 0) {
            return null;
        }
        for (var i = 0; i < this.steps.get_Count(); i++) {
            if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(this.steps.get_item(i))) {
                return this.steps.get_item(i);
            }
        }
        return null;
    },

    isHeader: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$isHeader(newStep) {
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            return (this._headOfWaitBranchStep$i$2() === newStep);
        } else {
            return (this._headOfWaitTimeoutStep$i$2() === newStep);
        }
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$appendStep(newStep) {
        this.append(newStep);
    },

    append: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$append(newStep) {
        var branch = null;
        var timeout = null;
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            branch = newStep;
        } else if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(newStep)) {
            timeout = newStep;
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((!!branch) ||
                (!!timeout
                ),
                'A child of WaitStep must be of type WaitBranchStep or WaitTimeoutStep.');
        if (branch) {
            if (!this._tailOfWaitBranchStep$i$2()) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, branch);
            } else {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.insert
                    .call(this, this._tailOfWaitBranchStep$i$2(), 1, branch);
            }
        } else {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, timeout);
        }
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$remove(stepBase) {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        if (!this.steps.get_Count()) {
            (this.get_parent()).remove(this);
        }
    },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_WaitStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append('}');
        return sb.toString();
    }
}


Microsoft.Crm.Workflow.ObjectModel
    .WaitTimeoutStep = function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep(waitStep, timeoutExpression) {
        Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.initializeBase(this);
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(waitStep, 'waitStep');
        this._validateTimeoutExpression$p$2(timeoutExpression);
        this.setNameAndId(waitStep._workflow$p$0._getNextStepId$i$2());
        this.timeoutExpression = timeoutExpression;
        this.__class = 'WaitTimeoutStep:#Microsoft.Crm.Workflow.ObjectModel';
    }
Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.prototype = {
    get_timeoutExpression: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$get_timeoutExpression() {
        return this.timeoutExpression;
    },

    set_timeoutExpression: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$set_timeoutExpression(value) {
        this._validateTimeoutExpression$p$2(value);
        this.timeoutExpression = value;
        return value;
    },

    get_parent: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$get_parent() {
        return Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.get_parent.call(this);
    },

    set_parent: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$set_parent(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(value, 'Parent');
        if (!(Microsoft.Crm.Workflow.ObjectModel.WaitStep.isInstanceOfType(value))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Parent must be of type WaitStep.', 'Parent');
        }
        Microsoft.Crm.Workflow.ObjectModel.StepBase.prototype.set_parent.call(this, value);
        return value;
    },

    apply: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$apply(visitor) {
        visitor.visitWaitTimeoutStep(this);
    },

    _validateTimeoutExpression$p$2: function
        Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$_validateTimeoutExpression$p$2(expression) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'TimeoutExpression');
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(Microsoft.Crm.Workflow.Expressions.NullExpression.isInstanceOfType(expression) ||
                    Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.isInstanceOfType(expression) ||
                    expression.type === 2 ||
                    expression.type === 14 ||
                    Microsoft.Crm.Workflow.Expressions.MethodCallExpression.isInstanceOfType(expression),
                    'Type of TimeoutExpression must be DateTime, TimeSpan or MethodCallExpression');
        },

    addPeer: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$addPeer(direction, newStep) {
        var branch = null;
        var timeout = null;
        if (Microsoft.Crm.Workflow.ObjectModel.WaitBranchStep.isInstanceOfType(newStep)) {
            branch = newStep;
        } else if (Microsoft.Crm.Workflow.ObjectModel.WaitTimeoutStep.isInstanceOfType(newStep)) {
            timeout = newStep;
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert((!!branch) ||
                (!!timeout
                ),
                'A child of WaitStep must be of type WaitBranchStep or WaitTimeoutStep.');
        if (branch) {
            if (!(this.get_parent())._headOfWaitTimeoutStep$i$2()) {
                (this.get_parent()).append(branch);
            } else {
                (this.get_parent()).insert((this.get_parent())._headOfWaitTimeoutStep$i$2(), 0, branch);
            }
        } else {
            (this.get_parent()).insert(this, direction, timeout);
        }
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$remove(stepBase) {
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        if (!(this.get_parent()).steps.get_Count()) {
            (this.get_parent()).remove(this.get_parent());
        }
    },

    timeoutExpression: null,

    toJson: function Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        if (this.timeoutExpression) {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getObjectJson('timeoutExpression', this.timeoutExpression.toJson(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_WaitTimeoutStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                if (sourceObject.timeoutExpression) {
                    this.timeoutExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.timeoutExpression.__class);
                    this.timeoutExpression.initializeFromDynamic(sourceObject.timeoutExpression);
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument = function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument() {
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

    get_argumentTypeCode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_argumentTypeCode() {
        return this._argumentTypeCode;
    },

    set_argumentTypeCode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_argumentTypeCode(value) {
        this._argumentTypeCode = value;
        return value;
    },

    get_argumentTypeDisplay: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_argumentTypeDisplay() {
        return this._argumentTypeDisplay;
    },

    set_argumentTypeDisplay: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_argumentTypeDisplay(value) {
            this._argumentTypeDisplay = value;
            return value;
        },

    get_direction: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_direction() {
        return this._argumentDirection;
    },

    set_direction: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_direction(value) {
        this._argumentDirection = value;
        return value;
    },

    get_required: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_required() {
        return this._required;
    },

    set_required: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_required(value) {
        this._required = value;
        return value;
    },

    get_description: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_description() {
        return this._description;
    },

    set_description: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_description(value) {
        this._description = value;
        return value;
    },

    get_name: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_name() {
        return this._name;
    },

    set_name: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_name(value) {
        this._name = value;
        return value;
    },

    get_value: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_value() {
        return this._value;
    },

    set_value: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_value(value) {
        this._value = value;
        return value;
    },

    get_target: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_target() {
        return this._target;
    },

    set_target: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_target(value) {
        this._target = value;
        return value;
    },

    get_entityName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$get_entityName() {
        return this._entityName;
    },

    set_entityName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$set_entityName(value) {
        this._entityName = value;
        return value;
    },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_description', this._description, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_entityName', this._entityName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('_name', this._name, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_required',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this
                    ._required),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_target', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this._target), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_argumentTypeCode', this._argumentTypeCode.toString(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_argumentTypeDisplay', this._argumentTypeDisplay, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('_argumentDirection', this._argumentDirection.toString(), true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowArgument$initializeFromDynamic(deserialized) {
            var sourceArgument = deserialized;
            this._description = sourceArgument._description;
            this._entityName = sourceArgument._entityName;
            this._name = sourceArgument._name;
            this._required = sourceArgument._required;
            this._target = sourceArgument._target;
            this._argumentTypeCode = Number.parseInvariant(sourceArgument._argumentTypeCode.toString());
            this._argumentTypeDisplay = sourceArgument._argumentTypeDisplay;
            var argumentDirection = Number.parseInvariant(sourceArgument._argumentDirection.toString());
            if (!argumentDirection) {
                if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(0)) {
                    this._argumentDirection = 0;
                }
            } else {
                if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(1)) {
                    this._argumentDirection = 1;
                }
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection = function Microsoft_Crm_Workflow_ObjectModel_ArgumentDirection() {
}


Microsoft.Crm.Workflow.ObjectModel
    .WorkflowStep = function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep(primaryEntityName, category) {
        this._arguments = new (Microsoft.Crm.Client.Core.Framework2.List$1
            .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
        this.stepDictionary = new Microsoft.Crm.Workflow.ObjectModel.StepDictionary();
        this._workflowStepVariables$p$2 = new (Microsoft.Crm.Client.Core.Framework2.List$1
            .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
        this._workflowStepInputs$p$2 = new (Microsoft.Crm.Client.Core.Framework2.List$1
            .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
        this.workflowEntityId = "00000000-0000-0000-0000-000000000000";
        Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.initializeBase(this);
        this._initializeWorkflowStep$p$2(primaryEntityName, category, 0, 0);
    }
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep
    .initializeFrom = function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$initializeFrom(deserialized) {
        var result = new Microsoft.Crm.Workflow.ObjectModel
            .WorkflowStep(deserialized.primaryEntityName, deserialized.category);
        result.initializeFromDynamic(deserialized);
        return result;
    }
Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.prototype = {
    initializeBusinessProcess: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$initializeBusinessProcess(businessProcessType, formId) {
            this.businessProcessType = businessProcessType;
            this.formId = formId;
        },

    get_arguments: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_arguments() {
        return this._arguments;
    },

    argumentsArray: null,

    _initializeWorkflowStep$p$2: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$_initializeWorkflowStep$p$2(sourcePrimaryEntityName,
            sourceCategory,
            sourceMode,
            sourceBpType) {
            this.__class = 'WorkflowStep:#Microsoft.Crm.Workflow.ObjectModel';
            this.primaryEntityName = sourcePrimaryEntityName;
            this.nextStepIndex = 0;
            this.category = sourceCategory;
            this.businessProcessType = sourceBpType;
            this.mode = sourceMode;
            this.title = '';
            this.description = '';
            this.setNameAndId(this._getNextStepId$i$2());
            this.set_workflow(this);
            this.publicationParameters = Microsoft.Crm.Workflow.ObjectModel._publicationParametersFactory
                ._create$i(sourceCategory, sourceMode);
            if (!sourceCategory && !sourceMode) {
                this.publicationParameters.setDefaultParameters();
            }
        },

    get_title: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_title() {
        return this.title;
    },

    set_title: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_title(value) {
        this.title = value;
        return value;
    },

    get_uniqueName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_uniqueName() {
        return this._uniqueName$p$2;
    },

    set_uniqueName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_uniqueName(value) {
        this._uniqueName$p$2 = value;
        return value;
    },

    get_solutionPrefix: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_solutionPrefix() {
        return this._solutionPrefix$p$2;
    },

    set_solutionPrefix: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_solutionPrefix(value) {
        this._solutionPrefix$p$2 = value;
        return value;
    },

    getStepWithId: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$getStepWithId(id) {
        if ((!this.stepDictionary.get_count()) ||
            Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(id) ||
            id === this.id) {
            return this;
        }
        if (!this.stepDictionary.containsKey(id)) {
            var errorMessage = 'Workflow does not contain a step with ID: ' + id;
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException(errorMessage);
        }
        return this.stepDictionary.get_item(id);
    },

    deleteStep: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$deleteStep(step) {
        if (step === this) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwException('Cannot remove workflow step');
        }
        if ((step._workflow$p$0 !== this) ||
            !(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.isInstanceOfType(step.get_parent()))) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('This step cannot be deleted. It is not part of this workflow');
        }
        var parentStep = step.get_parent();
        if (!parentStep.steps.contains(step)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwException('This step cannot be deleted. It is not part of this workflow');
        }
        parentStep.remove(step);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$remove(stepBase) {
        if (!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stepBase))) {
            Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.remove.call(this, stepBase);
        } else {
            var stageStep = stepBase;
            this._removeStageStep$p$2(stageStep);
        }
    },

    _removeStageStep$p$2: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$_removeStageStep$p$2(stageStep) {
        var peerStageStep = null;
        for (var i = 0; i < this.steps.get_Count(); i++) {
            var childStep = this.steps.get_item(i);
            if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(childStep)) {
                var childStageStep = childStep;
                if (childStageStep === stageStep) {
                    break;
                } else {
                    peerStageStep = childStageStep;
                }
            }
        }
        var childStepCount = stageStep.steps.get_Count();
        while (childStepCount > 0) {
            var childStep = stageStep.steps.get_item(0);
            stageStep.steps.remove(childStep);
            this._workflow$p$0.stepDictionary.remove(childStep.id);
            if (peerStageStep) {
                peerStageStep.appendStep(childStep);
            } else {
                this.insert(stageStep, 0, childStep);
            }
            childStepCount = stageStep.steps.get_Count();
        }
        this.steps.remove(stageStep);
        this._workflow$p$0.stepDictionary.remove(stageStep.id);
    },

    get_primaryEntityName: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_primaryEntityName() {
        return this.primaryEntityName;
    },

    appendStep: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$appendStep(newStep) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep.isInstanceOfType(newStep)),
                'Cannot add a ConditionBranchStep to a WorkflowStep. It can only be added to a Condition Step.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(newStep)),
                'Cannot add WorkflowStep to WorkflowStep.');
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(newStep)),
                'Cannot add StageStep to WorkflowStep using this function. Please use InsertStageStep function');
        for (var i = 0; i < this.steps.get_Count(); i++) {
            var childStep = this.steps.get_item(i);
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(!(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(childStep)),
                    'Cannot add a step to workflow with workflowStep as a parent step since there exist at least one Stage step.');
        }
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
    },

    insertStageStepWithChildPeer: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$insertStageStepWithChildPeer(stageStep,
            childPeerStep,
            direction) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stageStep),
                    'Only StageStep can be added to WorkflowStep using this function');
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(!!childPeerStep, 'The peer child step cannot be null.');
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(childPeerStep.get_parent()),
                    'The peer child step need to be a child of a stage step.');
            var peerStageStep = childPeerStep.get_parent();
            peerStageStep.addPeer(1, stageStep);
            var firstChildIndex = 0;
            if (direction === 1) {
                firstChildIndex = peerStageStep.steps.indexOf(childPeerStep) + 1;
            } else {
                firstChildIndex = peerStageStep.steps.indexOf(childPeerStep);
            }
            while (peerStageStep.steps.get_Count() > firstChildIndex) {
                var childStep = peerStageStep.steps.get_item(firstChildIndex);
                if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(childStep)) {
                    break;
                }
                peerStageStep.steps.remove(childStep);
                this._workflow$p$0.stepDictionary.remove(childStep.id);
                stageStep.appendStep(childStep);
            }
        },

    insertStageStep: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$insertStageStep(stageStep, peerStep, direction) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(stageStep),
                    'Only StageStep can be added to WorkflowStep using this function');
            if (!peerStep) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.appendStep.call(this, stageStep);
            } else {
                peerStep.addPeer(direction, stageStep);
                var firstChildIndex = this.steps.indexOf(stageStep) + 1;
                while (this.steps.get_Count() > firstChildIndex) {
                    var childStep = this.steps.get_item(firstChildIndex);
                    if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(childStep)) {
                        break;
                    }
                    this.steps.remove(childStep);
                    this._workflow$p$0.stepDictionary.remove(childStep.id);
                    stageStep.appendStep(childStep);
                }
            }
        },

    apply: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$apply(visitor) {
        visitor.visitWorkflowStep(this);
    },

    get_metadataProvider: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_metadataProvider() {
        return this._metadataProvider$p$2;
    },

    set_metadataProvider: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_metadataProvider(value) {
        this._metadataProvider$p$2 = value;
        return value;
    },

    get_nextStepIndex: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_nextStepIndex() {
        return this.nextStepIndex;
    },

    set_nextStepIndex: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_nextStepIndex(value) {
        this.nextStepIndex = value;
        return value;
    },

    get_isCrmUIWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_isCrmUIWorkflow() {
        return this.isCrmUIWorkflow;
    },

    set_isCrmUIWorkflow: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$set_isCrmUIWorkflow(value) {
        this.isCrmUIWorkflow = value;
        return value;
    },

    get_workflowCategory: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowCategory() {
        return this.category;
    },

    get_workflowBusinessProcessType: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowBusinessProcessType() {
            return this.businessProcessType;
        },

    get_workflowMode: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowMode() {
        return this.mode;
    },

    get_publicationParameters: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_publicationParameters() {
        return this.publicationParameters;
    },

    get_formId: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_formId() {
        return this.formId;
    },

    getDataSourceForStep: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$getDataSourceForStep(referenceStep) {
        var dataSources = new Microsoft.Crm.Workflow.DataSourceCollection();
        var includeReferenceStep = false;
        if (referenceStep === this) {
            includeReferenceStep = true;
        }
        this.collectDataSourcesRecursive(this, referenceStep, includeReferenceStep, dataSources);
        dataSources.set_isReadOnly(true);
        return dataSources;
    },

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

    _getNextStepId$i$2: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$_getNextStepId$i$2() {
        return Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant('{0}', this.nextStepIndex++);
    },

    get_currentStepId: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_currentStepId() {
        return Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant('{0}', this.nextStepIndex);
    },

    get_stepDictionary: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_stepDictionary() {
        return this.stepDictionary;
    },

    get_workflowEntityId: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowEntityId() {
        return this.workflowEntityId;
    },

    getIdentifierDisplayName: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$getIdentifierDisplayName(variableName) {
            if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrWhiteSpace(variableName)) {
                Microsoft.Crm.Workflow.Utils.ExceptionUtility
                    .throwArgumentException('Variable name cannot be null or empty', 'variableName');
            }
            var split = Microsoft.Crm.Workflow.Utils.StringUtility.split(variableName, '_', 4);
            if (split.length === 1 && this.category === 3) {
                return split[0];
            }
            Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert((4 === split.length), 'Invalid variable name format');
            return split[3];
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
    _uniqueName$p$2: null,
    _solutionPrefix$p$2: null,
    _metadataProvider$p$2: null,

    get_workflowStepVariables: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowStepVariables() {
        return this._workflowStepVariables$p$2;
    },

    get_workflowStepInputs: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$get_workflowStepInputs() {
        return this._workflowStepInputs$p$2;
    },

    toJson: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('primaryEntityName', this.primaryEntityName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('nextStepIndex',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.nextStepIndex),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isCrmUIWorkflow',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isCrmUIWorkflow),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('category',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.category),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('businessProcessType',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.businessProcessType),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('mode', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.mode), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('title', this.title, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('description', this.description, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('workflowEntityId', this.workflowEntityId.toString(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('formId', this.formId, true));
        this.argumentsArray = this._arguments.toArray();
        var argumentJsonList = new (Microsoft.Crm.Client.Core.Framework2.List$1.$$(String))();
        for (var i = 0; i < this.argumentsArray.length; i++) {
            argumentJsonList.add(this.argumentsArray[i].toJson());
        }
        var argumentJsonString = '[' + this._joinString$p$2(',', argumentJsonList.toArray()) + ']';
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('argumentsArray', argumentJsonString, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('variables', this._serializeWorkflowVariables$p$2(false), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('inputs', this._serializeWorkflowVariables$p$2(true), true));
        sb.append('}');
        return sb.toString();
    },

    _serializeWorkflowVariables$p$2: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$_serializeWorkflowVariables$p$2(isInputParameter) {
            var argumentsList = (isInputParameter) ? this._workflowStepInputs$p$2 : this._workflowStepVariables$p$2;
            if (!argumentsList) {
                return null;
            }
            var serializedList = new (Microsoft.Crm.Client.Core.Framework2.List$1.$$(String))();
            for (var i = 0; i < argumentsList.get_Count(); ++i) {
                var argument = argumentsList.get_item(i);
                var sb = new Sys.StringBuilder();
                sb.append('{');
                sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                    .getPropertyJson('name', argument._name, false));
                sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                    .getPropertyJson('type', argument._argumentTypeDisplay, true));
                sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                    .getPropertyJson('type_code', argument._argumentTypeCode.toString(), true));
                sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                    .getObjectJson('value', (argument._value).toJson(), true));
                sb.append('}');
                serializedList.add(sb.toString());
            }
            return '[' + this._joinString$p$2(',', serializedList.toArray()) + ']';
        },

    _joinString$p$2: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$_joinString$p$2(connector, items) {
        var sb = new Sys.StringBuilder();
        if (!items.length) {
            return sb.toString();
        }
        sb.append(items[0]);
        for (var i = 1; i < items.length; i++) {
            sb.append(connector);
            sb.append(items[i]);
        }
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$fixInternalLinks() {
        this.set_workflow(this);
        this.set_parent(this);
        Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.fixInternalLinks.call(this);
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_ObjectModel_WorkflowStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                this.primaryEntityName = sourceObject.primaryEntityName;
                this.nextStepIndex = (sourceObject.nextStepIndex) ? JSON.parse(sourceObject.nextStepIndex) : 0;
                this.isCrmUIWorkflow = sourceObject.isCrmUIWorkflow;
                this.category = (sourceObject.category) ? JSON.parse(sourceObject.category) : 0;
                this.businessProcessType = (sourceObject.businessProcessType)
                    ? JSON.parse(sourceObject.businessProcessType)
                    : 0;
                this.mode = (sourceObject.mode) ? JSON.parse(sourceObject.mode) : 0;
                this.title = sourceObject.title;
                this.formId = sourceObject.formId;
                if (sourceObject.workflowEntityId) {
                    this.workflowEntityId = "00000000-0000-0000-0000-000000000000";
                }
                this._arguments = new (Microsoft.Crm.Client.Core.Framework2.List$1
                    .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))();
                var sourceArgumentArray = new (Microsoft.Crm.Client.Core.Framework2.List$1
                    .$$(Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument))(sourceObject.argumentsArray);
                for (var i = 0; i < sourceArgumentArray.get_Count(); i++) {
                    var argument = new Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument();
                    argument.initializeFromDynamic(sourceArgumentArray.get_item(i));
                    this._arguments.add(argument);
                }
                var variables = (deserialized)['variables'];
                if (variables) {
                    for (var i = 0; i < variables.length; ++i) {
                        var variableDict = variables[i];
                        var variable = new Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument();
                        variable._name = variableDict['name'];
                        var valueDeserialized = variableDict['value'];
                        var value = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                            .buildExpression(valueDeserialized['__class']);
                        value.initializeFromDynamic(valueDeserialized);
                        variable._value = value;
                        variable._argumentTypeCode = Number.parseInvariant(variableDict['type_code']);
                        variable._argumentTypeDisplay = variableDict['type'];
                        this._workflowStepVariables$p$2.add(variable);
                    }
                }
                var inputs = (deserialized)['inputs'];
                if (inputs) {
                    for (var i = 0; i < inputs.length; ++i) {
                        var inputDict = inputs[i];
                        var input = new Microsoft.Crm.Workflow.ObjectModel.WorkflowArgument();
                        input._name = inputDict['name'];
                        var valueDeserialized = inputDict['value'];
                        var value = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                            .buildExpression(valueDeserialized['__class']);
                        value.initializeFromDynamic(valueDeserialized);
                        input._value = value;
                        input._argumentTypeCode = Number.parseInvariant(inputDict['type_code']);
                        input._argumentTypeDisplay = inputDict['type'];
                        this._workflowStepInputs$p$2.add(input);
                    }
                }
                this.fixInternalLinks();
            }
        }
}


Microsoft.Crm.Workflow.ObjectModel.DataCollection$1 = function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1() {
    this.get_Count = this.get_count;
    this.get_Items = this.get_items;
}
Microsoft.Crm.Workflow.ObjectModel.DataCollection$1
    .$$ = function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$$$(T) {
        var $$cn = 'DataCollection$1' + '$' + T.getName().replace(/\./g, '_');
        if (!Microsoft.Crm.Workflow.ObjectModel[$$cn]) {
            var $$ccr = Microsoft.Crm.Workflow.ObjectModel[$$cn] = function() {
                (this.$$gta = this.$$gta || {})['Microsoft.Crm.Workflow.ObjectModel.DataCollection$1'] = { 'T': T };
                var newArgs = [];
                for (var i = 0; i < arguments.length; ++i) {
                    newArgs[i] = arguments[i];
                }
                Microsoft.Crm.Workflow.ObjectModel.DataCollection$1.apply(this, newArgs);
            };
            $$ccr.registerClass('Microsoft.Crm.Workflow.ObjectModel.' + $$cn,
                null,
                Microsoft.Crm.Client.Core.Framework2.IList$1.$$(T));
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
    _items$p$0: null,

    get_item: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$get_item(index) {
        return this._items$p$0[index];
    },

    set_item: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$set_item(index, value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!this._readOnly$p$0, 'Cannot modify value in a readonly data value collection');
        this._items$p$0[index] = value;
        return value;
    },

    get_isReadOnly: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$get_isReadOnly() {
        return this._readOnly$p$0;
    },

    set_isReadOnly: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$set_isReadOnly(value) {
        this._readOnly$p$0 = value;
        return value;
    },

    indexOf: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$indexOf(item, startIndex) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        startIndex = startIndex || 0;
        return Array.indexOf(this._items$p$0, item, startIndex);
    },

    insert: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$insert(index, item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        Array.insert(this._items$p$0, index, item);
    },

    remove: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$remove(item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        Array.remove(this._items$p$0, item);
    },

    contains: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$contains(item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        return Array.contains(this._items$p$0, item);
    },

    add: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$add(item) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(item, 'item');
        Array.add(this._items$p$0, item);
    },

    addRange: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$addRange(collection) {
        Array.addRange(this._items$p$0, collection);
    },

    append: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$append(collection) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(collection, 'collection');
        for (var $$arr_1 = collection
                     .get_items(),
            $$len_2 = $$arr_1.length,
            $$idx_3 = 0;
            $$idx_3 < $$len_2;
            ++$$idx_3) {
            var ds = $$arr_1[$$idx_3];
            this.add(ds);
        }
    },

    clear: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$clear() {
        Array.clear(this._items$p$0);
    },

    get_count: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$get_count() {
        return this._items$p$0.length;
    },

    first: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$first() {
        if (!this._items$p$0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this._items$p$0[0];
    },

    get_items: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$get_items() {
        return this._items$p$0;
    },

    last: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$last() {
        if (!this._items$p$0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this._items$p$0[this.get_count() - 1];
    },

    removeAt: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$removeAt(index) {
        Array.removeAt(this._items$p$0, index);
    },

    toArray: function Microsoft_Crm_Workflow_ObjectModel_DataCollection$1$toArray() {
        var copy = new Array(this._items$p$0.length);
        for (var i = 0; i < this._items$p$0.length; i++) {
            copy[i] = this._items$p$0[i];
        }
        return copy;
    },

    _readOnly$p$0: false
}


Microsoft.Crm.Workflow.ObjectModel
    .DataValueCollection = function Microsoft_Crm_Workflow_ObjectModel_DataValueCollection() {
        Microsoft.Crm.Workflow.ObjectModel.DataValueCollection.initializeBase(this);
    }

Microsoft.Crm.Workflow.ObjectModel
    .ProcessDefinitionVisitorBase = function Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase() {
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.initializeBase(this);
    }
Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype = {
    visitAssignStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitAssignStep(assignStep) {
            if (!this._isNull$p$1(assignStep.assignTo)) {
                assignStep.assignTo.accept(this);
            }
        },

    visitChildWorkflowStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitChildWorkflowStep(childWorkflowStep) {
            if (!this._isNull$p$1(childWorkflowStep.childWorkflow)) {
                childWorkflowStep.childWorkflow.accept(this);
            }
        },

    visitConditionBranchStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitConditionBranchStep(conditionBranchStep) {
            if (!this._isNull$p$1(conditionBranchStep.conditionExpression)) {
                conditionBranchStep.conditionExpression.accept(this);
            }
            this._visitChildren$p$1(conditionBranchStep);
        },

    visitConditionStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitConditionStep(conditionStep) {
            this._visitChildren$p$1(conditionStep);
        },

    visitCreateStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitCreateStep(createStep) {
            if (!this._isNull$p$1(createStep.entity)) {
                createStep.entity.accept(this);
            }
        },

    visitEntityStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitEntityStep(entityStep) {
            this._visitChildren$p$1(entityStep);
        },

    visitSendEmailStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSendEmailStep(sendEmailStep) {
            if (!this._isNull$p$1(sendEmailStep.entity)) {
                sendEmailStep.entity.accept(this);
            }
        },

    visitSetAttributeValueStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetAttributeValueStep(setAttributeValueStep) {
            if (!this._isNull$p$1(setAttributeValueStep.get_propertySpec())) {
                setAttributeValueStep.get_propertySpec().accept(this);
            }
        },

    visitSetStateStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetStateStep(setStateStep) {
            if (!this._isNull$p$1(setStateStep.state)) {
                setStateStep.state.accept(this);
            }
            if (!this._isNull$p$1(setStateStep.status)) {
                setStateStep.status.accept(this);
            }
        },

    visitStageStep: function Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitStageStep(stageStep) {
        this._visitChildren$p$1(stageStep);
    },

    visitPageStep: function Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitPageStep(pageStep) {
        this.visitStageStep(pageStep);
    },

    visitStepStep: function Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitStepStep(stepStep) {
        this._visitChildren$p$1(stepStep);
    },

    visitUpdateStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitUpdateStep(updateStep) {
            if (!this._isNull$p$1(updateStep.entitySpec)) {
                updateStep.entitySpec.accept(this);
            }
        },

    visitWaitBranchStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitWaitBranchStep(waitBranchStep) {
            if (!this._isNull$p$1(waitBranchStep.conditionExpression)) {
                waitBranchStep.conditionExpression.accept(this);
            }
            this._visitChildren$p$1(waitBranchStep);
        },

    visitWaitStep: function Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitWaitStep(waitStep) {
        this._visitChildren$p$1(waitStep);
    },

    visitWaitTimeoutStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitWaitTimeoutStep(waitTimeoutStep) {
            if (!this._isNull$p$1(waitTimeoutStep.timeoutExpression)) {
                waitTimeoutStep.timeoutExpression.accept(this);
            }
            this._visitChildren$p$1(waitTimeoutStep);
        },

    visitCustomActivityStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitCustomActivityStep(customActivityStep) {
        },

    visitCustomJavascriptStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitCustomJavascriptStep(customJSStep) {
        },

    visitWorkflowStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitWorkflowStep(workflowStep) {
            this._visitChildren$p$1(workflowStep);
        },

    visitStopWorkflowStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitStopWorkflowStep(stopWorkflowStep) {
        },

    visitSetVisibilityStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetVisibilityStep(setVisibilityStep) {
        },

    visitSetDisplayModeStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetDisplayModeStep(setDisplayModeStep) {
        },

    visitSetFieldRequiredLevelStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetFieldRequiredLevelStep(setFieldRequiredLevelStep) {
        },

    visitSetMessageStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetMessageStep(setMessageStep) {
        },

    visitControlStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitControlStep(controlStep) {
        },

    visitActionStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitActionStep(actionStep) {
        },

    visitRollupRuleStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitRollupRuleStep(rollupRuleStep) {
        },

    visitSetDefaultValueStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetDefaultValueStep(setDefaultValueStep) {
        },

    visitSetNextStageStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitSetNextStageStep(setNextStageStep) {
        },

    visitAssignVariableStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitAssignVariableStep(assignVariableStep) {
        },

    visitChildInteractiveWorkflowStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitChildInteractiveWorkflowStep(childWorkflowStep) {
        },

    visitInteractionPageStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitInteractionPageStep(interactionPageStep) {
        },

    visitInteractionStep: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitInteractionStep(interactionStep) {
        },

    visitQueryStep: function Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitQueryStep(queryStep) {
    },

    visitBinaryExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitBinaryExpression(expression) {
            expression.left.accept(this);
            if (expression.right.get_count() > 0) {
                expression.right.get_item(0).accept(this);
            }
        },

    visitUnaryExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitUnaryExpression(expression) {
            expression.operand.accept(this);
        },

    visitPropertySpecification: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitPropertySpecification(propertySpecification) {
            var propertyValue = propertySpecification.propertyValueExpr;
            if (!this._isNull$p$1(propertyValue)) {
                propertyValue.accept(this);
            }
        },

    visitEntitySpecification: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitEntitySpecification(entitySpecification) {
            if (this._isNull$p$1(entitySpecification.properties)) {
                return;
            }
            for (var i = 0; i < entitySpecification.properties.get_count(); i++) {
                entitySpecification.properties.get_item(i).accept(this);
            }
        },

    visitMethodCallExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitMethodCallExpression(expression) {
            var properties = expression.getParameters();
            for (var i = 0; i < properties.length; i++) {
                if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType(properties[i])) {
                    var innerExpression = properties[i];
                    innerExpression.accept(this);
                }
            }
        },

    visitLookupExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitLookupExpression(expression) {
            if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType(expression.staticValue)) {
                var paramExpression = expression.staticValue;
                paramExpression.accept(this);
            }
        },

    visitPrimitiveExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitPrimitiveExpression(expression) {
            if (!this._isNull$p$1(expression.primitiveValue) && expression.type === 9) {
                var entitySpecifications = expression.primitiveValue;
                for (var $$arr_2 = entitySpecifications, $$len_3 = $$arr_2.length, $$idx_4 = 0;
                    $$idx_4 < $$len_3;
                    ++$$idx_4) {
                    var entitySpecification = $$arr_2[$$idx_4];
                    var propertySpecification = entitySpecification.properties.get_item(0);
                    propertySpecification.propertyValueExpr.accept(this);
                }
            }
        },

    visitEntityAttributeExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitEntityAttributeExpression(expression) {
        },

    visitTimeSpanExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitTimeSpanExpression(expression) {
        },

    visitNullExpression: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$visitNullExpression(expression) {
        },

    _visitChildren$p$1: function
        Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$_visitChildren$p$1(step) {
            for (var i = 0; i < step.steps.get_Count(); i++) {
                var childStep = step.steps.get_item(i);
                childStep.apply(this);
            }
        },

    _isNull$p$1: function Microsoft_Crm_Workflow_ObjectModel_ProcessDefinitionVisitorBase$_isNull$p$1(value) {
        return null === value || value === undefined;
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


Microsoft.Crm.Workflow.Utils.ArrayUtility = function Microsoft_Crm_Workflow_Utils_ArrayUtility() {
}
Microsoft.Crm.Workflow.Utils.ArrayUtility.getList = function Microsoft_Crm_Workflow_Utils_ArrayUtility$getList(T) {
    return new (Sales.Common.Framework.List$1.$$(T))();
}
Microsoft.Crm.Workflow.Utils.ArrayUtility
    .toJson = function Microsoft_Crm_Workflow_Utils_ArrayUtility$toJson(T, items, jsonConverter) {
        var arrayItems = items.toArray();
        return Microsoft.Crm.Workflow.Utils.ArrayUtility.arrayToJson(T, arrayItems, jsonConverter);
    }
Microsoft.Crm.Workflow.Utils.ArrayUtility
    .arrayToJson = function Microsoft_Crm_Workflow_Utils_ArrayUtility$arrayToJson(T, arrayItems, jsonConverter) {
        var sb = new Sys.StringBuilder();
        sb.append('[');
        if (arrayItems.length > 0) {
            sb.append(jsonConverter(arrayItems[0]));
            for (var i = 1; i < arrayItems.length; i++) {
                sb.append(',');
                sb.append(jsonConverter(arrayItems[i]));
            }
        }
        sb.append(']');
        return sb;
    }


Microsoft.Crm.Workflow.Utils.DictionaryUtility = function Microsoft_Crm_Workflow_Utils_DictionaryUtility() {
}
Microsoft.Crm.Workflow.Utils.DictionaryUtility
    .toJson = function
    Microsoft_Crm_Workflow_Utils_DictionaryUtility$toJson(TKey, TValue, items, keyJsonConverter, valueJsonConverter) {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append('\"keys\":');
        sb.append(Microsoft.Crm.Workflow.Utils.ArrayUtility.arrayToJson(TKey, _Dictionary.keys(items), keyJsonConverter)
            .toString());
        sb.append(',');
        sb.append('\"values\":');
        sb.append(Microsoft.Crm.Workflow.Utils.ArrayUtility
            .arrayToJson(TValue, _Dictionary.toArray(TValue, items), valueJsonConverter).toString());
        sb.append('}');
        return sb.toString();
    }
Microsoft.Crm.Workflow.Utils.DictionaryUtility
    .fromJson = function
    Microsoft_Crm_Workflow_Utils_DictionaryUtility$fromJson(TKey,
        TValue,
        deserializedObject,
        keyJsonConverter,
        valueJsonConverter) {
        var dynamicDeserializedObject = deserializedObject;
        var dictionary = {};
        var transientKeys = dynamicDeserializedObject['keys'];
        var transientValues = dynamicDeserializedObject['values'];
        for (var i = 0; i < transientKeys.length; i++) {
            dictionary[keyJsonConverter(transientKeys[i])] = valueJsonConverter(transientValues[i]);
        }
        return dictionary;
    }


Microsoft.Crm.Workflow.Utils.SharedUtility = function Microsoft_Crm_Workflow_Utils_SharedUtility() {
}
Microsoft.Crm.Workflow.Utils.SharedUtility.getList = function Microsoft_Crm_Workflow_Utils_SharedUtility$getList(T) {
    var listTemp = new (Sales.Common.Framework.List$1.$$(T))();
    return listTemp;
}
Microsoft.Crm.Workflow.Utils.SharedUtility
    .dictionaryAdd = function
    Microsoft_Crm_Workflow_Utils_SharedUtility$dictionaryAdd(TKey, TValue, dictionary, key, value) {
        dictionary[key.toString()] = value;
    }
Microsoft.Crm.Workflow.Utils.SharedUtility
    .dictionaryContainKey = function
    Microsoft_Crm_Workflow_Utils_SharedUtility$dictionaryContainKey(TKey, TValue, dictionary, key) {
        return ((key.toString()) in dictionary);
    }
Microsoft.Crm.Workflow.Utils.SharedUtility
    .dictionaryGetValue = function
    Microsoft_Crm_Workflow_Utils_SharedUtility$dictionaryGetValue(TKey, TValue, dictionary, key) {
        return dictionary[key.toString()];
    }
Microsoft.Crm.Workflow.Utils.SharedUtility
    .dictionaryGetKeys = function
    Microsoft_Crm_Workflow_Utils_SharedUtility$dictionaryGetKeys(TKey, TValue, dictionary) {
        var listTemp = new (Sales.Common.Framework.List$1.$$(String))();
        var $$dict_5 = dictionary;
        for (var $$key_6 in $$dict_5) {
            var entry = { key: $$key_6, value: $$dict_5[$$key_6] };
            listTemp.add(entry.key);
        }
        return listTemp;
    }
Microsoft.Crm.Workflow.Utils.SharedUtility
    .throwException = function Microsoft_Crm_Workflow_Utils_SharedUtility$throwException(code) {
        var args = [];
        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            args[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var errorStringTemplate;
        switch (code) {
        case -2147089368:
            errorStringTemplate = window.LOCID_CF_ERR_NONEXISTINGFIELD;
            break;
        case -2147089373:
            errorStringTemplate = window.LOCID_CF_ERR_INVALIDREFERENCE;
            break;
        case -2147089362:
            errorStringTemplate = window.LOCID_CF_ERR_INVALIDREFERENCES;
            break;
        case -2147089369:
            errorStringTemplate = window.LOCID_CF_ERR_NONEXISTINGFUNCTION;
            break;
        case -2147089370:
            errorStringTemplate = window.LOCID_CF_ERR_TYPEMISMATCH;
            break;
        case -2147089364:
            errorStringTemplate = window.LOCID_CF_ERR_FUNTYPEMISMATCH;
            break;
        case -2147089365:
            errorStringTemplate = window.LOCID_CF_ERR_ASSIGNMENTMISMATCH;
            break;
        case -2147089350:
            errorStringTemplate = window.LOCID_CF_ERR_DATEONLYMISMATCH;
            break;
        case -2147089349:
            errorStringTemplate = window.LOCID_CF_ERR_TIMEINVMISMATCH;
            break;
        case -2147089348:
            errorStringTemplate = window.LOCID_CF_ERR_USERLOCMISMATCH;
            break;
        case -2147089371:
            errorStringTemplate = window.LOCID_CF_ERR_NONCFFORMULA;
            break;
        case -2147089366:
            errorStringTemplate = window.LOCID_CF_ERR_OVERFLOW;
            break;
        case -2147089363:
            errorStringTemplate = window.LOCID_CF_ERR_DIVIDEBYZERO;
            break;
        case -2147089360:
            errorStringTemplate = window.LOCID_CF_ERR_INVALIDVALUES;
            break;
        case -2147089361:
            errorStringTemplate = window.LOCID_CF_ERR_INVALIDVALUE;
            break;
        case -2147089367:
        case -2147089372:
        case 0:
        default:
            errorStringTemplate = window.LOCID_CF_ERR_GENERIC;
            break;
        }
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .throwException(Microsoft.Crm.Workflow.Utils.StringUtility.formatInvariant
                .apply(null, [errorStringTemplate].concat(args)));
    }


Microsoft.Crm.Workflow.Utils.TraceConstants = function Microsoft_Crm_Workflow_Utils_TraceConstants() {
}


Microsoft.Crm.Workflow.Utils.StringUtility = function Microsoft_Crm_Workflow_Utils_StringUtility() {
}
Microsoft.Crm.Workflow.Utils.StringUtility
    .format = function Microsoft_Crm_Workflow_Utils_StringUtility$format(cultureInfo, message) {
        var parameters = [];
        for (var $$pai_3 = 2; $$pai_3 < arguments.length; ++$$pai_3) {
            parameters[$$pai_3 - 2] = arguments[$$pai_3];
        }
        return String.format.apply(null, [message].concat(parameters));
    }
Microsoft.Crm.Workflow.Utils.StringUtility
    .formatInvariant = function Microsoft_Crm_Workflow_Utils_StringUtility$formatInvariant(message) {
        var parameters = [];
        for (var $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2) {
            parameters[$$pai_2 - 1] = arguments[$$pai_2];
        }
        return String.format.apply(null, [message].concat(parameters));
    }
Microsoft.Crm.Workflow.Utils.StringUtility
    .toStringInvariant = function Microsoft_Crm_Workflow_Utils_StringUtility$toStringInvariant(value) {
        return value.toString();
    }
Microsoft.Crm.Workflow.Utils.StringUtility
    .areEqual = function Microsoft_Crm_Workflow_Utils_StringUtility$areEqual(left, right) {
        return left === right;
    }
Microsoft.Crm.Workflow.Utils.StringUtility
    .isNullOrEmpty = function Microsoft_Crm_Workflow_Utils_StringUtility$isNullOrEmpty(value) {
        return null === value || value === undefined || value === '';
    }
Microsoft.Crm.Workflow.Utils.StringUtility.isNull = function Microsoft_Crm_Workflow_Utils_StringUtility$isNull(value) {
    return null === value || value === undefined;
}
Microsoft.Crm.Workflow.Utils.StringUtility
    .reduceToCanonicalForm = function Microsoft_Crm_Workflow_Utils_StringUtility$reduceToCanonicalForm(value) {
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(value)) {
            return null;
        }
        if (value.startsWith('{') && value.endsWith('}')) {
            value = value.substring(1, value.length - 1);
        }
        return value.toLowerCase();
    }
Microsoft.Crm.Workflow.Utils.StringUtility
    .isNullOrWhiteSpace = function Microsoft_Crm_Workflow_Utils_StringUtility$isNullOrWhiteSpace(value) {
        return Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(value) ||
            Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(value.trim());
    }
Microsoft.Crm.Workflow.Utils.StringUtility
    .split = function Microsoft_Crm_Workflow_Utils_StringUtility$split(value, character, limit) {
        return value.split(character, limit);
    }


Microsoft.Crm.Workflow.Utils.ExceptionUtility = function Microsoft_Crm_Workflow_Utils_ExceptionUtility() {
}
Microsoft.Crm.Workflow.Utils.ExceptionUtility
    .throwIfNull = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwIfNull(expression, message) {
        if (!expression) {
            throw Error.create(message);
        }
    }
Microsoft.Crm.Workflow.Utils.ExceptionUtility
    .throwNotSupportedException = function
    Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwNotSupportedException(message) {
        throw Error.create('NotSupportedException: ' + message);
    }
Microsoft.Crm.Workflow.Utils.ExceptionUtility
    .throwInvalidOperationException = function
    Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwInvalidOperationException(message) {
        throw Error.create('InvalidOperationException: ' + message);
    }
Microsoft.Crm.Workflow.Utils.ExceptionUtility
    .throwArgumentException = function
    Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwArgumentException(message, parameterName) {
        throw Error.create('ArgumentException for ' + parameterName + ': ' + message);
    }
Microsoft.Crm.Workflow.Utils.ExceptionUtility
    .throwException = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$throwException(message) {
        throw Error.create(message);
    }
Microsoft.Crm.Workflow.Utils.ExceptionUtility
    .assert = function Microsoft_Crm_Workflow_Utils_ExceptionUtility$assert(condition, message) {
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


Microsoft.Crm.Workflow.Expressions
    .BinaryExpression = function
    Microsoft_Crm_Workflow_Expressions_BinaryExpression(workflow, binaryOperator, leftOperand, rightOperands) {
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
            var rightOperand = rightOperands[0];
            if (rightOperand.type) {
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
    get_operator: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$get_operator() {
        return this.conditionOperatoroperator;
    },

    set_operator: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$set_operator(value) {
        this.conditionOperatoroperator = value;
        return value;
    },

    get_leftOperand: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$get_leftOperand() {
        return this.left;
    },

    set_leftOperand: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$set_leftOperand(value) {
        this.left = value;
        return value;
    },

    get_rightOperands: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$get_rightOperands() {
        return this.right;
    },

    accept: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$accept(visitor) {
        visitor.visitBinaryExpression(this);
    },

    conditionOperatoroperator: 6,
    left: null,
    right: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('conditionOperatoroperator',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.conditionOperatoroperator),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('left', this.left.toJson(), true));
        sb.append(',');
        sb.append('\"right\":[');
        if (this.right.get_count() > 0) {
            sb.append(this.right.get_item(0).toJson());
            for (var i = 1; i < this.right.get_count(); i++) {
                sb.append(',');
                sb.append(this.right.get_item(i).toJson());
            }
        }
        sb.append(']');
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_BinaryExpression$fixInternalLinks(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.left.fixInternalLinks(workflowStep);
        if (this.right.get_count() > 0) {
            for (var i = 0; i < this.right.get_count(); i++) {
                this.right.get_item(i).fixInternalLinks(workflowStep);
            }
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_BinaryExpression$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                this.conditionOperatoroperator = Number.parseInvariant(sourceObject.conditionOperatoroperator);
                if (sourceObject.left) {
                    this.left = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceObject.left.__class);
                    this.left.initializeFromDynamic(sourceObject.left);
                }
                if (sourceObject.right) {
                    this.right = new Microsoft.Crm.Workflow.Expressions
                        .ExpressionCollection([], sourceObject.right._readOnly$i$0);
                    var rightExpressions = sourceObject.right;
                    for (var i = 0; i < rightExpressions.length; i++) {
                        var sourceExpression = rightExpressions[i];
                        var targetExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                            .buildExpression(sourceExpression.__class);
                        targetExpression.initializeFromDynamic(sourceExpression);
                        this.right.add(targetExpression);
                    }
                }
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .EntityAttributeExpression = function
    Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression(sourceEntity, sourceAttributeName) {
        Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.initializeBase(this, [sourceEntity._workflow$p$0]);
        this.entity = sourceEntity;
        this.attributeName = sourceAttributeName;
        this.__class = 'EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.prototype = {
    get_entity: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$get_entity() {
        return this.entity;
    },

    get_attributeName: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$get_attributeName() {
        return this.attributeName;
    },

    set_attributeName: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$set_attributeName(value) {
        this.attributeName = value;
        return value;
    },

    getDisplayText: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$getDisplayText(cultureInfo) {
        var entityName = this.entity.getLocalizedName(cultureInfo);
        var attrName;
        if (Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.containsKey(this.attributeName)) {
            attrName = this._workflow$p$0._metadataProvider$p$2
                .getResourceString(Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
                    .getAttribute(this.attributeName));
        } else {
            attrName = this._workflow$p$0._metadataProvider$p$2
                .getAttributeLocalizedName(cultureInfo, this.entity.entityName, this.attributeName);
        }
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(entityName)) {
            return String.format('{0}:{1}', entityName, attrName);
        } else {
            return attrName;
        }
    },

    accept: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$accept(visitor) {
        visitor.visitEntityAttributeExpression(this);
    },

    entity: null,
    attributeName: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('entity', this.entity.toJson(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('attributeName', this.attributeName, true));
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function
        Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$fixInternalLinks(workflowStep) {
            Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
            this.entity.fixInternalLinks(workflowStep);
        },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_EntityAttributeExpression$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                this.entity = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildEntity(sourceObject.entity.__class);
                this.entity.initializeFromDynamic(sourceObject.entity);
                this.attributeName = sourceObject.attributeName;
                this.behavior = sourceObject.behavior;
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .RelatedEntity = function
    Microsoft_Crm_Workflow_Expressions_RelatedEntity(workflow, relatedAttributeName, relatedEntity) {
        Microsoft.Crm.Workflow.Expressions.RelatedEntity
            .initializeBase(this, [workflow, 'related' + '_' + relatedAttributeName + '_' + relatedEntity]);
        this.relatedAttributeName = relatedAttributeName;
        this.set_entityName(relatedEntity);
        this.__class = 'RelatedEntity:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.RelatedEntity.prototype = {
    get_relatedAttributeName: function Microsoft_Crm_Workflow_Expressions_RelatedEntity$get_relatedAttributeName() {
        return this.relatedAttributeName;
    },

    set_relatedAttributeName: function
        Microsoft_Crm_Workflow_Expressions_RelatedEntity$set_relatedAttributeName(value) {
            this.relatedAttributeName = value;
            return value;
        },

    getLocalizedName: function Microsoft_Crm_Workflow_Expressions_RelatedEntity$getLocalizedName(cultureInfo) {
        return Microsoft.Crm.Workflow.Utils.StringUtility
            .formatInvariant('{0} ({1})',
                this._workflow$p$0._metadataProvider$p$2
                .getAttributeLocalizedName(cultureInfo,
                    this._workflow$p$0.primaryEntityName,
                    this.get_relatedAttributeName()),
                this._workflow$p$0._metadataProvider$p$2.getEntityLocalizedName(cultureInfo, this.entityName));
    },

    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_RelatedEntity$get_uiXmlName() {
        return this.entityName + '.' + this.get_relatedAttributeName();
    },

    get_xamlKey: function Microsoft_Crm_Workflow_Expressions_RelatedEntity$get_xamlKey() {
        return 'related_' + this.get_relatedAttributeName() + '#' + this.entityName;
    },

    appendToJson: function Microsoft_Crm_Workflow_Expressions_RelatedEntity$appendToJson(sb) {
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relatedAttributeName', this.get_relatedAttributeName(), true));
    },

    relatedAttributeName: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_RelatedEntity$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.toJson.call(this));
        this.appendToJson(sb);
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_RelatedEntity$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.set_relatedAttributeName(sourceObject.relatedAttributeName);
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .RelatedEntityLinked = function
    Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked(workflow,
        relatedAttributeName,
        relatedEntity,
        relationshipName) {
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
    get_relatedAttributeName: function
        Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$get_relatedAttributeName() {
            return this.relatedAttributeName;
        },

    set_relatedAttributeName: function
        Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$set_relatedAttributeName(value) {
            this.relatedAttributeName = value;
            return value;
        },

    get_relationshipName: function Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$get_relationshipName() {
        return this.relationshipName;
    },

    set_relationshipName: function Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$set_relationshipName(value) {
        this.relationshipName = value;
        return value;
    },

    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$get_uiXmlName() {
        return this.entityName + '.' + this.get_relatedAttributeName() + '.' + this.relationshipName;
    },

    get_xamlKey: function Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$get_xamlKey() {
        return 'relatedlinked' +
            '_' +
            this.relationshipName +
            '#' +
            this.get_relatedAttributeName() +
            '#' +
            this.entityName;
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.RelatedEntity.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                this.relationshipName = sourceObject.relationshipName;
            }
        },

    appendToJson: function Microsoft_Crm_Workflow_Expressions_RelatedEntityLinked$appendToJson(sb) {
        Microsoft.Crm.Workflow.Expressions.RelatedEntity.prototype.appendToJson.call(this, sb);
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('relationshipName', this.relationshipName, true));
    },

    relatedAttributeName: null,
    relationshipName: null
}


Microsoft.Crm.Workflow.Expressions
    .EntityCreatedByStep = function
    Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep(workflow,
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
    get_step: function Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$get_step() {
        return this.step;
    },

    get_isCustomOperationArgument: function
        Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$get_isCustomOperationArgument() {
            return this.isCustomOperationArgument;
        },

    set_isCustomOperationArgument: function
        Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$set_isCustomOperationArgument(value) {
            this.isCustomOperationArgument = value;
            return value;
        },

    get_entityIdentifier: function Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$get_entityIdentifier() {
        return this.entityIdentifier;
    },

    getLocalizedName: function Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$getLocalizedName(cultureInfo) {
        var localizedName;
        var stepDisplayString;
        var entityName = this._workflow$p$0._metadataProvider$p$2.getEntityLocalizedName(cultureInfo, this.entityName);
        var entityIdentifierText = this.entityIdentifier;
        if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.entityIdentifier)) {
            if (Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(this.step)) {
                stepDisplayString = this._workflow$p$0.getIdentifierDisplayName(this.identifierName);
            } else if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.step.description)) {
                stepDisplayString = this.step.description;
            } else {
                stepDisplayString = this.step._workflow$p$0._metadataProvider$p$2
                    .getResourceString('Web.SFA.Workflow.StepName.' + this.step.get_typeName());
                if (Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(stepDisplayString)) {
                    stepDisplayString = this.step.get_typeName();
                }
            }
            localizedName = Microsoft.Crm.Workflow.Utils.StringUtility
                .format(cultureInfo, '{0} ({1})', stepDisplayString, entityName);
        } else {
            if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNullOrEmpty(this.step.description)) {
                stepDisplayString = this.step.description;
            } else {
                if (Microsoft.Crm.Workflow.ObjectModel.CustomActivityStep.isInstanceOfType(this.step)) {
                    var customStep = this.step;
                    stepDisplayString = customStep.activityInfo.name;
                    if (((this.entityIdentifier) in customStep.outputs)) {
                        entityIdentifierText = (customStep.outputs[this.entityIdentifier]).name;
                    }
                } else {
                    stepDisplayString = this.step.get_typeName();
                }
            }
            localizedName = Microsoft.Crm.Workflow.Utils.StringUtility
                .format(cultureInfo, '{0}:{2} ({1})', stepDisplayString, entityName, entityIdentifierText);
        }
        return localizedName;
    },

    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$get_uiXmlName() {
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

    toJson: function Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('step', this.step.toJson(), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('entityIdentifier', this.entityIdentifier, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('identifierName', this.identifierName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('isCustomOperationArgument',
                Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.isCustomOperationArgument),
                true));
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$fixInternalLinks(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.fixInternalLinks.call(this, workflowStep);
        if (!Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.step)) {
            this.step.set_workflow(workflowStep);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_EntityCreatedByStep$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.initializeFromDynamic.call(this, deserialized);
                var sourceObject = deserialized;
                this.step = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep(sourceObject.step.__class);
                this.step.initializeFromDynamic(sourceObject.step);
                this.entityIdentifier = sourceObject.entityIdentifier;
                this.isCustomOperationArgument = sourceObject.isCustomOperationArgument;
                this.identifierName = sourceObject.identifierName;
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .EntitySpecification = function Microsoft_Crm_Workflow_Expressions_EntitySpecification(entityName) {
        this.entityName = entityName;
        this.properties = Microsoft.Crm.Workflow.Utils.ArrayUtility
            .getList(Microsoft.Crm.Workflow.Expressions.PropertySpecification);
    }
Microsoft.Crm.Workflow.Expressions.EntitySpecification.prototype = {
    get_entityName: function Microsoft_Crm_Workflow_Expressions_EntitySpecification$get_entityName() {
        return this.entityName;
    },

    get_properties: function Microsoft_Crm_Workflow_Expressions_EntitySpecification$get_properties() {
        return this.properties;
    },

    addProperty: function
        Microsoft_Crm_Workflow_Expressions_EntitySpecification$addProperty(propertyName, propertyExpression) {
            var property = new Microsoft.Crm.Workflow.Expressions
                .PropertySpecification(propertyName, propertyExpression);
            this.properties.add(property);
        },

    accept: function Microsoft_Crm_Workflow_Expressions_EntitySpecification$accept(visitor) {
        visitor.visitEntitySpecification(this);
    },

    entityName: null,
    properties: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_EntitySpecification$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('entityName', this.entityName, false));
        sb.append(',');
        sb.append('\"properties\":');
        var $$t_2 = this;
        sb.append(Microsoft.Crm.Workflow.Utils.ArrayUtility.toJson(Microsoft.Crm.Workflow.Expressions
            .PropertySpecification,
            this.properties,
            function(property) {
                return property.toJson();
            }).toString());
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_EntitySpecification$fixInternalLinks(workflowStep) {
        if (!this.properties) {
            return;
        }
        for (var i = 0; i < this.properties.get_count(); i++) {
            this.properties.get_item(i)._fixInternalLinks$i$0(workflowStep);
        }
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_EntitySpecification$initializeFromDynamic(deserialized) {
            if (deserialized) {
                var sourceObject = deserialized;
                this.entityName = sourceObject.entityName;
                if (sourceObject.properties) {
                    this.properties = Microsoft.Crm.Workflow.Utils.ArrayUtility
                        .getList(Microsoft.Crm.Workflow.Expressions.PropertySpecification);
                    var transientProperties = sourceObject.properties;
                    for (var i = 0; i < transientProperties.length; i++) {
                        var property = new Microsoft.Crm.Workflow.Expressions.PropertySpecification('', null);
                        property.initializeFromDynamic(transientProperties[i]);
                        this.properties.add(property);
                    }
                }
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .TimeSpanExpression = function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression(workflow, sourceValue) {
        Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.initializeBase(this, [workflow]);
        this.value = sourceValue;
        this.__class = 'TimeSpanExpression:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.TimeSpanExpression.prototype = {
    get_value: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$get_value() {
        return this.value;
    },

    accept: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$accept(visitor) {
        visitor.visitTimeSpanExpression(this);
    },

    get_displayText: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$get_displayText() {
        throw Error.create('should not be here');
    },

    value: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('days',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.days),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('hours',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.hours),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('minutes',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.minutes),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('months',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.months),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('years',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.value.years),
                true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_TimeSpanExpression$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                this.value.initializeFromDynamic(deserialized);
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .EntityBase = function Microsoft_Crm_Workflow_Expressions_EntityBase(sourceWorkflow, sourceParameterName) {
        this._workflow$p$0 = sourceWorkflow;
        this.parameterName = sourceParameterName;
    }
Microsoft.Crm.Workflow.Expressions.EntityBase.prototype = {
    get_workflow: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_workflow() {
        return this._workflow$p$0;
    },

    set_workflow: function Microsoft_Crm_Workflow_Expressions_EntityBase$set_workflow(value) {
        this._workflow$p$0 = value;
        return value;
    },

    get_entityName: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_entityName() {
        return this.entityName;
    },

    set_entityName: function Microsoft_Crm_Workflow_Expressions_EntityBase$set_entityName(value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.assert(!!value, 'Entity name cannot be set to null');
        this.entityName = value;
        return value;
    },

    get_parameterName: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_parameterName() {
        return this.parameterName;
    },

    set_parameterName: function Microsoft_Crm_Workflow_Expressions_EntityBase$set_parameterName(value) {
        this.parameterName = value;
        return value;
    },

    get_xamlKey: function Microsoft_Crm_Workflow_Expressions_EntityBase$get_xamlKey() {
        return this.parameterName;
    },

    __class: 'EntityBase:#Microsoft.Crm.Workflow.Expressions',
    parameterName: null,
    entityName: null,
    _workflow$p$0: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_EntityBase$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('parameterName', this.parameterName, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('entityName', this.entityName, true));
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_EntityBase$fixInternalLinks(workflowStep) {
        this._workflow$p$0 = workflowStep;
    },

    initializeFromDynamic: function Microsoft_Crm_Workflow_Expressions_EntityBase$initializeFromDynamic(deserialized) {
        if (deserialized) {
            var sourceObject = deserialized;
            this.entityName = sourceObject.entityName;
            this.parameterName = sourceObject.parameterName;
        }
    }
}


Microsoft.Crm.Workflow.Expressions
    .MethodCallExpression = function
    Microsoft_Crm_Workflow_Expressions_MethodCallExpression(workflow, method, parameters) {
        Microsoft.Crm.Workflow.Expressions.MethodCallExpression.initializeBase(this, [workflow]);
        this._methodCallExpressionIntialization$p$1(method, parameters);
    }
Microsoft.Crm.Workflow.Expressions.MethodCallExpression
    .extractSelectFirstNull = function
    Microsoft_Crm_Workflow_Expressions_MethodCallExpression$extractSelectFirstNull(methodExpression) {
        if (!methodExpression || methodExpression.method) {
            return methodExpression;
        }
        var p1 = methodExpression.getParameters()[0];
        while (true) {
            if (p1) {
                var m1 = null;
                if (Microsoft.Crm.Workflow.Expressions.MethodCallExpression.isInstanceOfType(p1)) {
                    m1 = p1;
                }
                if (m1 && !m1.method) {
                    p1 = m1.getParameters()[0];
                } else {
                    return p1;
                }
            } else {
                return p1;
            }
        }
    }
Microsoft.Crm.Workflow.Expressions.MethodCallExpression.prototype = {
    _methodCallExpressionIntialization$p$1: function
        Microsoft_Crm_Workflow_Expressions_MethodCallExpression$_methodCallExpressionIntialization$p$1(sourceMethod,
            sourceParameters) {
            this.method = sourceMethod;
            this.parameters = sourceParameters;
            this.__class = 'MethodCallExpression:#Microsoft.Crm.Workflow.Expressions';
        },

    get_method: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$get_method() {
        return this.method;
    },

    getParameters: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$getParameters() {
        return this.parameters;
    },

    accept: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$accept(visitor) {
        visitor.visitMethodCallExpression(this);
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$fixInternalLinks(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        for (var $$arr_1 = this.parameters, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var parameter = $$arr_1[$$idx_3];
            if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType(parameter)) {
                var expression = parameter;
                expression.fixInternalLinks(workflowStep);
            }
        }
    },

    method: 0,
    parameters: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_MethodCallExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('method',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this
                    .method),
                true));
        sb.append(',');
        sb.append('\"parameters\":[');
        if (this.parameters.length > 0) {
            for (var i = 0; i < this.parameters.length; i++) {
                if (i > 0) {
                    sb.append(',');
                }
                var parameter = this.parameters[i];
                if (Microsoft.Crm.Workflow.Expressions.ExpressionBase.isInstanceOfType(parameter)) {
                    sb.append((parameter).toJson());
                } else {
                    sb.append(Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(parameter));
                }
            }
        }
        sb.append(']');
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_MethodCallExpression$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                this.method = parseInt(sourceObject.method);
                this.parameters = sourceObject.parameters;
                for (var i = 0; i < sourceObject.parameters.length; i++) {
                    var parameter1 = sourceObject.parameters[i];
                    var isObject = typeof (parameter1) == 'object';
                    if (isObject) {
                        var targetExpression = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                            .buildExpression((parameter1).__class);
                        targetExpression.initializeFromDynamic(parameter1);
                        this.parameters[i] = targetExpression;
                    } else {
                        this.parameters[i] = parameter1;
                    }
                }
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .InvalidEntity = function Microsoft_Crm_Workflow_Expressions_InvalidEntity(workflow, parameterName) {
        Microsoft.Crm.Workflow.Expressions.InvalidEntity.initializeBase(this, [workflow, parameterName]);
        this.set_entityName('#' + parameterName);
    }
Microsoft.Crm.Workflow.Expressions.InvalidEntity.prototype = {
    getLocalizedName: function Microsoft_Crm_Workflow_Expressions_InvalidEntity$getLocalizedName(cultureInfo) {
        return 'Error';
    },

    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_InvalidEntity$get_uiXmlName() {
        return this.parameterName;
    }
}


Microsoft.Crm.Workflow.Expressions.PrimaryEntity = function Microsoft_Crm_Workflow_Expressions_PrimaryEntity(workflow) {
    Microsoft.Crm.Workflow.Expressions.PrimaryEntity.initializeBase(this, [workflow, 'primaryEntity']);
    this.set_entityName(workflow.primaryEntityName);
    this.__class = 'PrimaryEntity:#Microsoft.Crm.Workflow.Expressions';
}
Microsoft.Crm.Workflow.Expressions.PrimaryEntity.prototype = {
    getLocalizedName: function Microsoft_Crm_Workflow_Expressions_PrimaryEntity$getLocalizedName(cultureInfo) {
        return this._workflow$p$0._metadataProvider$p$2.getEntityLocalizedName(cultureInfo, this.entityName);
    },

    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_PrimaryEntity$get_uiXmlName() {
        return this.entityName;
    },

    toJson: function Microsoft_Crm_Workflow_Expressions_PrimaryEntity$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.EntityBase.prototype.toJson.call(this));
        sb.append('}');
        return sb.toString();
    }
}


Microsoft.Crm.Workflow.Expressions
    .ExpressionBase = function Microsoft_Crm_Workflow_Expressions_ExpressionBase(workflow) {
        this._workflow$p$0 = workflow;
        this.typeSet = false;
        this.__class = 'ExpressionBase:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype = {
    get_workflow: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$get_workflow() {
        return this._workflow$p$0;
    },

    get_type: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$get_type() {
        return this.type;
    },

    set_type: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$set_type(value) {
        if (this.typeSet) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Cannot change the type after it was set', '_type');
        }
        this.type = value;
        return value;
    },

    get_behavior: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$get_behavior() {
        return this.behavior;
    },

    set_behavior: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$set_behavior(value) {
        this.behavior = value;
        return value;
    },

    __class: null,
    _workflow$p$0: null,
    type: 0,
    behavior: 0,
    typeSet: false,

    toJson: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('__class', this.__class, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('type', Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.type), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('typeSet', Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getJson(this.typeSet), true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('behavior',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.behavior),
                true));
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_ExpressionBase$fixInternalLinks(workflowStep) {
        this._workflow$p$0 = workflowStep;
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_ExpressionBase$initializeFromDynamic(deserialized) {
            if (deserialized) {
                var sourceObject = deserialized;
                this.type = parseInt(sourceObject.type);
                this.behavior = parseInt(sourceObject.behavior);
                this.typeSet = sourceObject.typeSet;
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .ExpressionCollection = function
    Microsoft_Crm_Workflow_Expressions_ExpressionCollection(initializeFromArray, sourceReadOnly) {
        this._list$p$0 = [];
        if (initializeFromArray) {
            for (var $$arr_2 = initializeFromArray, $$len_3 = $$arr_2.length, $$idx_4 = 0;
                $$idx_4 < $$len_3;
                ++$$idx_4
            ) {
                var expression = $$arr_2[$$idx_4];
                Array.add(this._list$p$0, expression);
            }
        }
        this._readOnly$i$0 = sourceReadOnly;
    }
Microsoft.Crm.Workflow.Expressions.ExpressionCollection.prototype = {
    get_item: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$get_item(index) {
        return this._list$p$0[index];
    },

    set_item: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$set_item(index, value) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility
            .assert(!this._readOnly$i$0, 'Cannot modify value in a readonly expression collection');
        this._list$p$0[index] = value;
        return value;
    },

    get_isReadOnly: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$get_isReadOnly() {
        return this._readOnly$i$0;
    },

    indexOf: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$indexOf(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        return Array.indexOf(this._list$p$0, expression);
    },

    insert: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$insert(index, expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.insert(this._list$p$0, index, expression);
    },

    remove: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$remove(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.remove(this._list$p$0, expression);
        return true;
    },

    contains: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$contains(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        return Array.contains(this._list$p$0, expression);
    },

    add: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$add(expression) {
        Microsoft.Crm.Workflow.Utils.ExceptionUtility.throwIfNull(expression, 'expression');
        Array.add(this._list$p$0, expression);
    },

    get_count: function Microsoft_Crm_Workflow_Expressions_ExpressionCollection$get_count() {
        return this._list$p$0.length;
    },

    _readOnly$i$0: false
}


Microsoft.Crm.Workflow.Expressions
    .LookupExpression = function
    Microsoft_Crm_Workflow_Expressions_LookupExpression(workflow, value, type, entityType, label) {
        Microsoft.Crm.Workflow.Expressions.LookupExpression.initializeBase(this, [workflow]);
        this.entityType = entityType;
        this.set_type(type);
        this.staticValue = value;
        this.label = label;
        this.__class = 'LookupExpression:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.LookupExpression.prototype = {
    get_entityType: function Microsoft_Crm_Workflow_Expressions_LookupExpression$get_entityType() {
        return this.entityType;
    },

    set_entityType: function Microsoft_Crm_Workflow_Expressions_LookupExpression$set_entityType(value) {
        this.entityType = value;
        return value;
    },

    get_label: function Microsoft_Crm_Workflow_Expressions_LookupExpression$get_label() {
        return this.label;
    },

    set_label: function Microsoft_Crm_Workflow_Expressions_LookupExpression$set_label(value) {
        this.label = value;
        return value;
    },

    get_value: function Microsoft_Crm_Workflow_Expressions_LookupExpression$get_value() {
        return this.staticValue;
    },

    set_value: function Microsoft_Crm_Workflow_Expressions_LookupExpression$set_value(value) {
        this.staticValue = value;
        return value;
    },

    accept: function Microsoft_Crm_Workflow_Expressions_LookupExpression$accept(visitor) {
        visitor.visitLookupExpression(this);
    },

    entityType: null,
    label: null,
    staticValue: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_LookupExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('entityType', this.entityType, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getPropertyJson('label', this.label, true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('staticValue', (this.staticValue).toJson(), true));
        sb.append('}');
        return sb.toString();
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_LookupExpression$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var expression = deserialized;
                this.entityType = expression.entityType;
                this.label = expression.label;
                if (expression.staticValue) {
                    this.staticValue = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression((expression.staticValue).__class);
                    (this.staticValue).initializeFromDynamic(expression.staticValue);
                }
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .PropertySpecification = function
    Microsoft_Crm_Workflow_Expressions_PropertySpecification(sourcePropertyName, propertyValueExpression) {
        this.propertyName = sourcePropertyName;
        this.propertyValueExpr = propertyValueExpression;
    }
Microsoft.Crm.Workflow.Expressions.PropertySpecification.prototype = {
    get_name: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$get_name() {
        return this.propertyName;
    },

    set_name: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$set_name(value) {
        this.propertyName = value;
        return value;
    },

    get_value: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$get_value() {
        return this.propertyValueExpr;
    },

    set_value: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$set_value(value) {
        this.propertyValueExpr = value;
        return value;
    },

    accept: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$accept(visitor) {
        visitor.visitPropertySpecification(this);
    },

    propertyName: null,
    propertyValueExpr: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_PropertySpecification$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('propertyName', this.propertyName, false));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getObjectJson('propertyValueExpr', this.propertyValueExpr.toJson(), true));
        sb.append('}');
        return sb.toString();
    },

    _fixInternalLinks$i$0: function
        Microsoft_Crm_Workflow_Expressions_PropertySpecification$_fixInternalLinks$i$0(workflowStep) {
            this.propertyValueExpr.fixInternalLinks(workflowStep);
        },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_PropertySpecification$initializeFromDynamic(deserialized) {
            if (deserialized) {
                var sourceObject = deserialized;
                this.propertyName = sourceObject.propertyName;
                this.propertyValueExpr = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                    .buildExpression(sourceObject.propertyValueExpr.__class);
                this.propertyValueExpr.initializeFromDynamic(sourceObject.propertyValueExpr);
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .NullExpression = function Microsoft_Crm_Workflow_Expressions_NullExpression(workflow) {
        Microsoft.Crm.Workflow.Expressions.NullExpression.initializeBase(this, [workflow]);
        this.__class = 'NullExpression:#Microsoft.Crm.Workflow.Expressions';
    }
Microsoft.Crm.Workflow.Expressions.NullExpression.prototype = {
    accept: function Microsoft_Crm_Workflow_Expressions_NullExpression$accept(visitor) {
        visitor.visitNullExpression(this);
    },

    toJson: function Microsoft_Crm_Workflow_Expressions_NullExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        sb.append('}');
        return sb.toString();
    }
}


Microsoft.Crm.Workflow.Expressions
    .OperatorClassifier = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier() {
    }
Microsoft.Crm.Workflow.Expressions.OperatorClassifier
    .$$cctor = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$$$cctor() {
        if (!Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p) {
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p = new Array(30);
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[0] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[1] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[2] |= 2;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[3] |= 2;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[24] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[25] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[26] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[27] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[28] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[29] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[30] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[31] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[32] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[33] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[34] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[35] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[36] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[37] |= 1;
            Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[38] |= 1;
        }
    }
Microsoft.Crm.Workflow.Expressions.OperatorClassifier
    .isGroupingOperator = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$isGroupingOperator(op) {
        return (Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[op] & 2) === 2;
    }
Microsoft.Crm.Workflow.Expressions.OperatorClassifier
    .isBinaryOperator = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$isBinaryOperator(op) {
        return !Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isUnaryOperator(op);
    }
Microsoft.Crm.Workflow.Expressions.OperatorClassifier
    .isUnaryOperator = function Microsoft_Crm_Workflow_Expressions_OperatorClassifier$isUnaryOperator(op) {
        return (Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p[op] & 1) === 1;
    }


Microsoft.Crm.Workflow.Expressions
    .PrimitiveExpression = function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression(workflow, value, type) {
        Microsoft.Crm.Workflow.Expressions.PrimitiveExpression.initializeBase(this, [workflow]);
        this.__class = 'PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions';
        this.primitiveValue = value;
        this.set_type(type);
    }
Microsoft.Crm.Workflow.Expressions.PrimitiveExpression.prototype = {
    get_value: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$get_value() {
        return this.primitiveValue;
    },

    set_value: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$set_value(value) {
        this.primitiveValue = value;
        return value;
    },

    accept: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$accept(visitor) {
        visitor.visitPrimitiveExpression(this);
    },

    primitiveValue: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        if (this.type === 9) {
            sb.append(this._getSerializedActivityParty$p$1());
        } else {
            sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
                .getPropertyJson('primitiveValue', this._getValueForSerialization$p$1(), true));
        }
        sb.append('}');
        return sb.toString();
    },

    _getSerializedActivityParty$p$1: function
        Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$_getSerializedActivityParty$p$1() {
            if (!this.primitiveValue) {
                return null;
            }
            var sb = new Sys.StringBuilder();
            var primitiveEntities = this.primitiveValue;
            sb.append(',');
            sb.append('\"primitiveValue\":[');
            if (primitiveEntities.length > 0) {
                sb.append(primitiveEntities[0].toJson());
                for (var i = 1; i < primitiveEntities.length; i++) {
                    sb.append(',');
                    sb.append(primitiveEntities[i].toJson());
                }
            }
            sb.append(']');
            return sb.toString();
        },

    _getValueForSerialization$p$1: function
        Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$_getValueForSerialization$p$1() {
            return (Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this.primitiveValue))
                ? null
                : this.primitiveValue.toString();
        },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_PrimitiveExpression$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                if (this.type === 9) {
                    if (sourceObject.primitiveValue) {
                        this.primitiveValue = new Array(0);
                        var primitiveEntities = sourceObject.primitiveValue;
                        for (var i = 0; i < primitiveEntities.length; i++) {
                            var sourceEntity = primitiveEntities[i];
                            var targetEntity = new Microsoft.Crm.Workflow.Expressions
                                .EntitySpecification(sourceEntity.entityName);
                            targetEntity.initializeFromDynamic(sourceEntity);
                            Array.add(this.primitiveValue, targetEntity);
                        }
                    }
                } else {
                    this.primitiveValue = sourceObject.primitiveValue;
                }
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .UnaryExpression = function Microsoft_Crm_Workflow_Expressions_UnaryExpression(workflow, unaryOperator, operand) {
        Microsoft.Crm.Workflow.Expressions.UnaryExpression.initializeBase(this, [workflow]);
        this.__class = 'UnaryExpression:#Microsoft.Crm.Workflow.Expressions';
        if (Microsoft.Crm.Workflow.Expressions.OperatorClassifier.isGroupingOperator(unaryOperator)) {
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .throwArgumentException('Operator in a unary expression cannot be a grouping operator',
                    'unaryOperator');
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
    get_operand: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$get_operand() {
        return this.operand;
    },

    get_operator: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$get_operator() {
        return this.conditionOperatoroperator;
    },

    accept: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$accept(visitor) {
        visitor.visitUnaryExpression(this);
    },

    conditionOperatoroperator: 0,
    operand: null,

    toJson: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$toJson() {
        var sb = new Sys.StringBuilder();
        sb.append('{');
        sb.append(Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.toJson.call(this));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder
            .getPropertyJson('conditionOperatoroperator',
                Microsoft.Crm.Workflow.Utils.StringUtility.toStringInvariant(this.conditionOperatoroperator),
                true));
        sb.append(Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.getObjectJson('operand', this.operand.toJson(), true));
        sb.append('}');
        return sb.toString();
    },

    fixInternalLinks: function Microsoft_Crm_Workflow_Expressions_UnaryExpression$fixInternalLinks(workflowStep) {
        Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.fixInternalLinks.call(this, workflowStep);
        this.operand.fixInternalLinks(workflowStep);
    },

    initializeFromDynamic: function
        Microsoft_Crm_Workflow_Expressions_UnaryExpression$initializeFromDynamic(deserialized) {
            if (deserialized) {
                Microsoft.Crm.Workflow.Expressions.ExpressionBase.prototype.initializeFromDynamic
                    .call(this, deserialized);
                var sourceObject = deserialized;
                this.conditionOperatoroperator = Number.parseInvariant(sourceObject.conditionOperatoroperator);
                if (sourceObject.operand) {
                    var sourceOperand = sourceObject.operand;
                    this.operand = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory
                        .buildExpression(sourceOperand.__class);
                    this.operand.initializeFromDynamic(sourceOperand);
                }
            }
        }
}


Microsoft.Crm.Workflow.Expressions
    .EntityCreatedByStepDecorator = function
    Microsoft_Crm_Workflow_Expressions_EntityCreatedByStepDecorator(entity, metadataProvider) {
        Microsoft.Crm.Workflow.Expressions.EntityCreatedByStepDecorator
            .initializeBase(this, [entity, metadataProvider]);
    }


Microsoft.Crm.Workflow.Expressions
    .EntityBaseDecorator$1 = function
    Microsoft_Crm_Workflow_Expressions_EntityBaseDecorator$1(entity, metadataProvider) {
        Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1
            .$$(this.$$gta['Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1']['TEntity'])
            .initializeBase(this, [entity._workflow$p$0, entity.parameterName]);
        this._entitySource$1 = entity;
        entity._workflow$p$0._metadataProvider$p$2 = metadataProvider;
    }
Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1
    .$$ = function Microsoft_Crm_Workflow_Expressions_EntityBaseDecorator$1$$$(TEntity) {
        var $$cn = 'EntityBaseDecorator$1' + '$' + TEntity.getName().replace(/\./g, '_');
        if (!Microsoft.Crm.Workflow.Expressions[$$cn]) {
            var $$ccr = Microsoft.Crm.Workflow.Expressions[$$cn] = function() {
                (this.$$gta = this
                    .$$gta ||
                    {})['Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1'] = { 'TEntity': TEntity };
                var newArgs = [];
                for (var i = 0; i < arguments.length; ++i) {
                    newArgs[i] = arguments[i];
                }
                Microsoft.Crm.Workflow.Expressions.EntityBaseDecorator$1.apply(this, newArgs);
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
    get_displayName: function Microsoft_Crm_Workflow_Expressions_EntityBaseDecorator$1$get_displayName() {
        return this._entitySource$1.getLocalizedName(null);
    },

    getLocalizedName: function Microsoft_Crm_Workflow_Expressions_EntityBaseDecorator$1$getLocalizedName(cultureInfo) {
        return this._entitySource$1.getLocalizedName(cultureInfo);
    },

    get_uiXmlName: function Microsoft_Crm_Workflow_Expressions_EntityBaseDecorator$1$get_uiXmlName() {
        return this._entitySource$1.get_uiXmlName();
    },

    get_entitySource: function Microsoft_Crm_Workflow_Expressions_EntityBaseDecorator$1$get_entitySource() {
        return this._entitySource$1;
    },

    _entitySource$1: null
}


Microsoft.Crm.Workflow.Expressions
    .EntityDecoratorFactory = function Microsoft_Crm_Workflow_Expressions_EntityDecoratorFactory() {
    }
Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory
    .getDecorator = function
    Microsoft_Crm_Workflow_Expressions_EntityDecoratorFactory$getDecorator(entity, metadataProvider) {
        if (Microsoft.Crm.Workflow.Expressions.PrimaryEntity.isInstanceOfType(entity)) {
            return new Microsoft.Crm.Workflow.Expressions.PrimaryEntityDecorator(entity, metadataProvider);
        } else if (Microsoft.Crm.Workflow.Expressions.RelatedEntity.isInstanceOfType(entity)) {
            return new Microsoft.Crm.Workflow.Expressions.RelatedEntityDecorator(entity, metadataProvider);
        } else if (Microsoft.Crm.Workflow.Expressions.EntityCreatedByStep.isInstanceOfType(entity)) {
            return new Microsoft.Crm.Workflow.Expressions.EntityCreatedByStepDecorator(entity, metadataProvider);
        }
        return new Microsoft.Crm.Workflow.Expressions.InvalidEntityDecorator(entity, metadataProvider);
    }


Microsoft.Crm.Workflow.Expressions
    .InvalidEntityDecorator = function
    Microsoft_Crm_Workflow_Expressions_InvalidEntityDecorator(entity, metadataProvider) {
        Microsoft.Crm.Workflow.Expressions.InvalidEntityDecorator.initializeBase(this, [entity, metadataProvider]);
    }


Microsoft.Crm.Workflow.Expressions
    .PrimaryEntityDecorator = function
    Microsoft_Crm_Workflow_Expressions_PrimaryEntityDecorator(entity, metadataProvider) {
        Microsoft.Crm.Workflow.Expressions.PrimaryEntityDecorator.initializeBase(this, [entity, metadataProvider]);
    }


Microsoft.Crm.Workflow.Expressions
    .RelatedEntityDecorator = function
    Microsoft_Crm_Workflow_Expressions_RelatedEntityDecorator(entity, metadataProvider) {
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


Microsoft.Crm.Workflow.Validators
    .BaseValidatorContext = function Microsoft_Crm_Workflow_Validators_BaseValidatorContext() {
    }
Microsoft.Crm.Workflow.Validators.BaseValidatorContext.prototype = {
    trace: function Microsoft_Crm_Workflow_Validators_BaseValidatorContext$trace(traceTemplate) {
        var args = [];
        for (var $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2) {
            args[$$pai_2 - 1] = arguments[$$pai_2];
        }
    },

    _attributeLogicalName$0: null,

    get_attributeLogicalName: function
        Microsoft_Crm_Workflow_Validators_BaseValidatorContext$get_attributeLogicalName() {
            return this._attributeLogicalName$0;
        },

    set_attributeLogicalName: function
        Microsoft_Crm_Workflow_Validators_BaseValidatorContext$set_attributeLogicalName(value) {
            this._attributeLogicalName$0 = value;
            return value;
        }
}


Microsoft.Crm.Workflow.Validators
    .CalculatedFieldValidatorContext = function Microsoft_Crm_Workflow_Validators_CalculatedFieldValidatorContext() {
        Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext.initializeBase(this);
    }


Microsoft.Crm.Workflow.Validators
    .ExpressionValidator = function Microsoft_Crm_Workflow_Validators_ExpressionValidator() {
    }
Microsoft.Crm.Workflow.Validators.ExpressionValidator.prototype = {
    get_context: function Microsoft_Crm_Workflow_Validators_ExpressionValidator$get_context() {
        return this._context$0;
    },

    set_context: function Microsoft_Crm_Workflow_Validators_ExpressionValidator$set_context(value) {
        this._context$0 = value;
        return value;
    },

    _context$0: null
}


Microsoft.Crm.Workflow.Validators
    .UnaryExpressionValidator = function Microsoft_Crm_Workflow_Validators_UnaryExpressionValidator(expression) {
        Microsoft.Crm.Workflow.Validators.UnaryExpressionValidator.initializeBase(this);
        if (expression) {
            this._expression$1 = expression;
            this._expression$1.set_type(0);
        }
        this.applicableOperatorsDictionary = {};
        var listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator);
        listItem.add(0);
        listItem.add(1);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                0,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                11,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                1,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                8,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                2,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                5,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                3,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                14,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                7,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                4,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                10,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                12,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator),
                this.applicableOperatorsDictionary,
                13,
                listItem);
    }
Microsoft.Crm.Workflow.Validators.UnaryExpressionValidator.prototype = {
    applicableOperatorsDictionary: null,
    _expression$1: null,

    validate: function Microsoft_Crm_Workflow_Validators_UnaryExpressionValidator$validate() {
    }
}


Microsoft.Crm.Workflow.Validators
    .BinaryExpressionValidator = function Microsoft_Crm_Workflow_Validators_BinaryExpressionValidator(expression) {
        Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.initializeBase(this);
        if (expression) {
            this._expression$1 = expression;
            this._expression$1.set_type(0);
        }
        this.applicableOperatorsDictionary = {};
        this._numericDictionary$p$1 = {};
        this._dateTimeDictionary$p$1 = {};
        this._booleanDictionary$p$1 = {};
        this._picklistDictionary$p$1 = {};
        this._stringDictionary$p$1 = {};
        this._statusDictionary$p$1 = {};
        this._statusReasonDictionary$p$1 = {};
        Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator._twoOptionOperator$p = Microsoft.Crm.Workflow.Utils
            .SharedUtility.getList(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator);
        Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator._twoOptionOperator$p.add(6);
        Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator._twoOptionOperator$p.add(7);
        var listItem = null;
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(5);
        listItem.add(3);
        listItem.add(7);
        listItem.add(4);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._numericDictionary$p$1,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._numericDictionary$p$1,
                7,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._numericDictionary$p$1,
                14,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._numericDictionary$p$1,
                16,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._numericDictionary$p$1,
                15,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._numericDictionary$p$1,
                17,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(2);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._dateTimeDictionary$p$1,
                16,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._dateTimeDictionary$p$1,
                17,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._dateTimeDictionary$p$1,
                14,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._dateTimeDictionary$p$1,
                15,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._dateTimeDictionary$p$1,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._dateTimeDictionary$p$1,
                7,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(0);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._booleanDictionary$p$1,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._booleanDictionary$p$1,
                7,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._booleanDictionary$p$1,
                2,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._booleanDictionary$p$1,
                3,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(10);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._picklistDictionary$p$1,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._picklistDictionary$p$1,
                7,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(12);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._statusDictionary$p$1,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._statusDictionary$p$1,
                7,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(13);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._statusReasonDictionary$p$1,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._statusReasonDictionary$p$1,
                7,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(14);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                6,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                7,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                8,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                9,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                10,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                11,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                12,
                listItem);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowConditionOperator,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._stringDictionary$p$1,
                13,
                listItem);
    }
Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator.prototype = {
    applicableOperatorsDictionary: null,
    _numericDictionary$p$1: null,
    _dateTimeDictionary$p$1: null,
    _booleanDictionary$p$1: null,
    _picklistDictionary$p$1: null,
    _stringDictionary$p$1: null,
    _statusDictionary$p$1: null,
    _statusReasonDictionary$p$1: null,
    _expression$1: null,

    validate: function Microsoft_Crm_Workflow_Validators_BinaryExpressionValidator$validate() {
    },

    getTypeDictionary: function
        Microsoft_Crm_Workflow_Validators_BinaryExpressionValidator$getTypeDictionary(expressionType) {
            switch (expressionType) {
            case 5:
            case 3:
            case 7:
            case 4:
                return this._numericDictionary$p$1;
            case 14:
                return this._stringDictionary$p$1;
            case 0:
                return this._booleanDictionary$p$1;
            case 10:
                return this._picklistDictionary$p$1;
            case 2:
                return this._dateTimeDictionary$p$1;
            case 12:
                return this._statusDictionary$p$1;
            case 13:
                return this._statusReasonDictionary$p$1;
            default:
                return null;
            }
        }
}


Microsoft.Crm.Workflow.Validators
    ._methodCallArithmeticEvaluateExpressionValidator = function
    Microsoft_Crm_Workflow_Validators__methodCallArithmeticEvaluateExpressionValidator(operands,
        expressionOperator,
        context) {
        Microsoft.Crm.Workflow.Validators._methodCallArithmeticEvaluateExpressionValidator
            .initializeBase(this, [operands, expressionOperator, context]);
        if (!this._operands$0) {
            this._context$0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this._context$0.get_attributeLogicalName());
        }
        if (this._operands$0.length !== 2) {
            this._context$0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                this._operands$0.length,
                2);
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this._context$0.get_attributeLogicalName());
        }
        this._validWorkflowAttributeTypeWithRankings$p$1 = {};
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Number,
                this._validWorkflowAttributeTypeWithRankings$p$1,
                5,
                1);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Number,
                this._validWorkflowAttributeTypeWithRankings$p$1,
                3,
                2);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Number,
                this._validWorkflowAttributeTypeWithRankings$p$1,
                7,
                3);
    }
Microsoft.Crm.Workflow.Validators._methodCallArithmeticEvaluateExpressionValidator.prototype = {
    _validWorkflowAttributeTypeWithRankings$p$1: null,

    validate: function Microsoft_Crm_Workflow_Validators__methodCallArithmeticEvaluateExpressionValidator$validate() {
        this._validateArithmeticOperandCompatibility$p$1();
        this._type$0 = Microsoft.Crm.Workflow.Validators.TypeUtility
            .methodCallExpressionSetTypeFromRank(this._validWorkflowAttributeTypeWithRankings$p$1, this._operands$0);
        if (this._operator$0 === 3) {
            this._validateDivisor$p$1();
        }
    },

    _validateDivisor$p$1: function
        Microsoft_Crm_Workflow_Validators__methodCallArithmeticEvaluateExpressionValidator$_validateDivisor$p$1() {
            for (var i = 1; i < this._operands$0.length; i++) {
                var divisor = Microsoft.Crm.Workflow.Expressions.MethodCallExpression
                    .extractSelectFirstNull(this._operands$0[i]);
                if (Object.getType(divisor) !== Microsoft.Crm.Workflow.Expressions.PrimitiveExpression) {
                    continue;
                }
                var primitiveDivisor = divisor;
                if (primitiveDivisor.primitiveValue !== '0' && primitiveDivisor.primitiveValue !== 0) {
                    continue;
                }
                this._context$0.trace('Attempted to divide by zero in sub-formula {0} in {1}',
                    i,
                    primitiveDivisor.primitiveValue.toString(),
                    Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089363, primitiveDivisor.primitiveValue.toString());
            }
        },

    _validateArithmeticOperandCompatibility$p$1: function
        Microsoft_Crm_Workflow_Validators__methodCallArithmeticEvaluateExpressionValidator$_validateArithmeticOperandCompatibility$p$1() {
            var leftexpression = this._operands$0[0];
            var left = leftexpression.type;
            if (!Microsoft.Crm.Workflow.Utils.SharedUtility
                .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                    Number,
                    this._validWorkflowAttributeTypeWithRankings$p$1,
                    left)) {
                this._context$0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    0,
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(left),
                    Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089370,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(leftexpression),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(left));
            }
            for (var i = 1; i < this._operands$0.length; i++) {
                var expression = this._operands$0[i];
                var right = expression.type;
                if (!Microsoft.Crm.Workflow.Utils.SharedUtility
                    .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                        Number,
                        this._validWorkflowAttributeTypeWithRankings$p$1,
                        right)) {
                    this._context$0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                        i,
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(right),
                        Object.getType(this).getName());
                    Microsoft.Crm.Workflow.Utils.SharedUtility
                        .throwException(-2147089370,
                            Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(expression),
                            Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(right));
                }
            }
        }
}


Microsoft.Crm.Workflow.Validators
    ._methodCallDateMathEvaluateExpressionValidator = function
    Microsoft_Crm_Workflow_Validators__methodCallDateMathEvaluateExpressionValidator(expressions,
        expressionOperator,
        context) {
        Microsoft.Crm.Workflow.Validators._methodCallDateMathEvaluateExpressionValidator
            .initializeBase(this, [expressions, expressionOperator, context]);
        switch (expressionOperator) {
        case 42:
        case 47:
        case 43:
        case 44:
        case 45:
        case 46:
            this._type$0 = 5;
            break;
        default:
            this._type$0 = 2;
            break;
        }
    }
Microsoft.Crm.Workflow.Validators._methodCallDateMathEvaluateExpressionValidator.prototype = {
    validate: function Microsoft_Crm_Workflow_Validators__methodCallDateMathEvaluateExpressionValidator$validate() {
        if (!this._operands$0) {
            this._context$0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this._context$0.get_attributeLogicalName());
        }
        if (!this._operands$0.length) {
            return;
        }
        if (this._operands$0.length !== 2) {
            this._context$0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                Object.getType(this).getName(),
                2,
                this._operands$0.length);
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this._context$0.get_attributeLogicalName());
        }
        var operand0 = this._operands$0[0];
        var operand1 = this._operands$0[1];
        if (!operand0 || !operand1) {
            this._context$0
                .trace('One or more null operands have been passed into {0}', Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this._context$0.get_attributeLogicalName());
        }
        if (this._type$0 === 2 && !this._behaviorType$0) {
            if (operand0.behavior === operand1.behavior) {
                this._behaviorType$0 = operand1.behavior;
            } else {
                this._behaviorType$0 = ((!operand1.behavior) ? operand0.behavior : operand1.behavior);
            }
        }
        switch (this._operator$0) {
        case 42:
        case 47:
        case 43:
        case 44:
        case 45:
        case 46:
            if (operand0.type !== 2) {
                this._context$0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    0,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(5),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand0.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(operand0),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand0.type));
            }
            if (operand1.type !== 2) {
                this._context$0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(operand1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
            }
            if (operand0.behavior !== operand1.behavior) {
                this._context$0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(operand1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
            }
            if ((this._operator$0 === 42 || this._operator$0 === 43) && operand0.behavior === 2) {
                this._context$0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089370,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(operand1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
            }
            break;
        default:
            if (operand0.type !== 5) {
                this._context$0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    0,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(5),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand0.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(operand0),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand0.type));
            }
            if (operand1.type !== 2) {
                this._context$0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(operand1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
            }
            if ((this._operator$0 === 25 || this._operator$0 === 26) && operand1.behavior === 2) {
                this._context$0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(2),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(operand1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(operand1.type));
            }
            break;
        }
    }
}


Microsoft.Crm.Workflow.Validators
    ._methodCallEvaluateExpressionValidatorBase = function
    Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase(operands,
        expressionOperator,
        context) {
        this._operator$0 = expressionOperator;
        this._operands$0 = operands;
        this._context$0 = context;
    }
Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorBase.prototype = {
    _operands$0: null,

    get_operands: function Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$get_operands() {
        return this._operands$0;
    },

    set_operands: function
        Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$set_operands(value) {
            this._operands$0 = value;
            return value;
        },

    _type$0: 0,

    get_type: function Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$get_type() {
        return this._type$0;
    },

    set_type: function Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$set_type(value) {
        this._type$0 = value;
        return value;
    },

    _behaviorType$0: 0,

    get_behaviorType: function
        Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$get_behaviorType() {
            return this._behaviorType$0;
        },

    set_behaviorType: function
        Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$set_behaviorType(value) {
            this._behaviorType$0 = value;
            return value;
        },

    _context$0: null,

    get_context: function Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$get_context() {
        return this._context$0;
    },

    set_context: function
        Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$set_context(value) {
            this._context$0 = value;
            return value;
        },

    _operator$0: 0,

    get_operator: function Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$get_operator() {
        return this._operator$0;
    },

    set_operator: function
        Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorBase$set_operator(value) {
            this._operator$0 = value;
            return value;
        }
}


Microsoft.Crm.Workflow.Validators
    ._methodCallEvaluateExpressionValidatorFactory = function
    Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorFactory() {
    }
Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorFactory
    ._getValidator$i = function
    Microsoft_Crm_Workflow_Validators__methodCallEvaluateExpressionValidatorFactory$_getValidator$i(expressionOperator,
        expressions,
        context) {
        var evaluateExpressionSqlGenerator = null;
        switch (expressionOperator) {
        case 0:
        case 1:
        case 2:
        case 3:
            evaluateExpressionSqlGenerator = new Microsoft.Crm.Workflow.Validators
                ._methodCallArithmeticEvaluateExpressionValidator(expressions, expressionOperator, context);
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
            evaluateExpressionSqlGenerator = new Microsoft.Crm.Workflow.Validators
                ._methodCallDateMathEvaluateExpressionValidator(expressions, expressionOperator, context);
            break;
        case 22:
        case 24:
        case 23:
            evaluateExpressionSqlGenerator = new Microsoft.Crm.Workflow.Validators
                ._methodCallStringEvaluateExpressionValidator(expressions, expressionOperator, context);
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
                Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorFactory.getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089369,
                    Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(expressionOperator));
            break;
        }
        return evaluateExpressionSqlGenerator;
    }


Microsoft.Crm.Workflow.Validators
    ._methodCallStringEvaluateExpressionValidator = function
    Microsoft_Crm_Workflow_Validators__methodCallStringEvaluateExpressionValidator(operands,
        expressionOperator,
        context) {
        Microsoft.Crm.Workflow.Validators._methodCallStringEvaluateExpressionValidator
            .initializeBase(this, [operands, expressionOperator, context]);
        this._type$0 = 14;
    }
Microsoft.Crm.Workflow.Validators._methodCallStringEvaluateExpressionValidator.prototype = {
    validate: function Microsoft_Crm_Workflow_Validators__methodCallStringEvaluateExpressionValidator$validate() {
        switch (this._operator$0) {
        case 22:
            this.validateConcat();
            break;
        case 24:
        case 23:
            this.validateTrim();
            break;
        default:
            this._context$0.trace('Unexpected expression operator {0} in {1}',
                Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(this._operator$0),
                Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089369,
                    Microsoft.Crm.Workflow.Activities.ExpressionOperator.toString(this._operator$0));
            break;
        }
    },

    validateConcat: function
        Microsoft_Crm_Workflow_Validators__methodCallStringEvaluateExpressionValidator$validateConcat() {
            if (!this._operands$0) {
                this._context$0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            if (this._operands$0.length < 2) {
                this._context$0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                    Object.getType(this).getName(),
                    '>1',
                    this._operands$0.length);
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            var expression = null;
            for (var i = 0; i < this._operands$0.length; i++) {
                expression = this._operands$0[i];
                if (expression.type !== 14 && expression.type !== 5 && expression.type !== 7 && expression.type !== 3) {
                    this._context$0.trace('Invalid operand #{0} of WorkflowAttributeType {1} in {2}',
                        i,
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(expression.type),
                        Object.getType(this).getName());
                    Microsoft.Crm.Workflow.Utils.SharedUtility
                        .throwException(-2147089364,
                            Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(expression),
                            Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(expression.type));
                }
            }
        },

    validateTrim: function
        Microsoft_Crm_Workflow_Validators__methodCallStringEvaluateExpressionValidator$validateTrim() {
            if (!this._operands$0) {
                this._context$0.trace('Operand array passed into {0} is null', Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            if (this._operands$0.length !== 2) {
                this._context$0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                    Object.getType(this).getName(),
                    2,
                    this._operands$0.length);
                Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089372);
            }
            var expression1 = this._operands$0[0];
            var expression2 = this._operands$0[1];
            if (!expression1 || !expression2) {
                this._context$0.trace('One or more null operands have been passed into {0}',
                    Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            if (expression1.type !== 14) {
                this._context$0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    0,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(14),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(expression1.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(expression1),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(expression1.type));
            }
            if (expression2.type !== 5 && expression2.type !== 3) {
                this._context$0.trace('Unexpected operand #{0} in {1}: expected {2} actual {3}',
                    1,
                    Object.getType(this).getName(),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(5),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(expression2.type));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089364,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(expression2),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(expression2.type));
            }
        }
}


Microsoft.Crm.Workflow.Validators
    .MethodCallExpressionValidator = function
    Microsoft_Crm_Workflow_Validators_MethodCallExpressionValidator(expression) {
        Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator.initializeBase(this);
        this._context$0 = new Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext();
        this._expression$1 = expression;
    }
Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator.prototype = {
    _expression$1: null,

    validate: function Microsoft_Crm_Workflow_Validators_MethodCallExpressionValidator$validate() {
        switch (this._expression$1.method) {
        case 3:
            this._validateEvaluateExpression$p$1();
            break;
        case 0:
            this._validateSelectFirstNonNull$p$1();
            break;
        default:
            this._context$0.trace('Unexpected method call {0} in {1}',
                Microsoft.Crm.Workflow.Expressions.MethodCall.toString(this._expression$1.method),
                Object.getType(this).getName());
            Microsoft.Crm.Workflow.Utils.SharedUtility
                .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            break;
        }
    },

    _validateEvaluateExpression$p$1: function
        Microsoft_Crm_Workflow_Validators_MethodCallExpressionValidator$_validateEvaluateExpression$p$1() {
            var parameters = this._expression$1.getParameters();
            if (!parameters) {
                this._context$0.trace('Parameter array passed into {0} is null', Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            if (parameters.length < 1) {
                this._context$0.trace('Invalid number of parameters in {0}: expected {1} actual {2}',
                    Object.getType(this).getName(),
                    '>=1',
                    parameters.length);
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            var methodCallExpressions = new Array(parameters.length - 1);
            for (var i = 1; i < parameters.length; i++) {
                methodCallExpressions[i - 1] = parameters[i];
            }
            var expressionOperator = parameters[0];
            if (expressionOperator === 48) {
                this._expression$1.behavior = 1;
            }
            if (parameters.length !== methodCallExpressions.length + 1) {
                this._context$0.trace('Invalid number of operands in {0}: expected {1} actual {2}',
                    Object.getType(this).getName(),
                    parameters.length - 1,
                    methodCallExpressions.length);
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            var validator = Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorFactory
                ._getValidator$i(expressionOperator, methodCallExpressions, this._context$0);
            validator.validate();
            this._expression$1.set_type(validator._type$0);
            if (!this._expression$1.behavior && this._expression$1.type === 2) {
                this._expression$1.behavior = validator._behaviorType$0;
            }
        },

    _validateSelectFirstNonNull$p$1: function
        Microsoft_Crm_Workflow_Validators_MethodCallExpressionValidator$_validateSelectFirstNonNull$p$1() {
            var parameters = this._expression$1.getParameters();
            if (!parameters) {
                this._context$0.trace('Parameter array passed into {0} is null', Object.getType(this).getName());
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            if (parameters.length !== 1) {
                this._context$0.trace('Invalid number of parameters in {0}: expected {1} actual {2}',
                    Object.getType(this).getName(),
                    1,
                    parameters.length);
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            this._expression$1.set_type((parameters[0]).type);
            var expressionBaseParamObject = parameters[0];
            if ((Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression.isInstanceOfType(parameters[0]) ||
                    Microsoft.Crm.Workflow.Expressions.MethodCallExpression.isInstanceOfType(parameters[0])) &&
                this._expression$1.type === 2 &&
                !this._expression$1.behavior) {
                this._expression$1.behavior = expressionBaseParamObject.behavior;
            }
        }
}


Microsoft.Crm.Workflow.Validators
    .SetAttributeValueStepValidator = function Microsoft_Crm_Workflow_Validators_SetAttributeValueStepValidator() {
        this._validAssignmentMapping$p$0 = {};
        this._context$0 = new Microsoft.Crm.Workflow.Validators.CalculatedFieldValidatorContext();
        var listItem = null;
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(0);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._validAssignmentMapping$p$0,
                0,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(2);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._validAssignmentMapping$p$0,
                2,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(3);
        listItem.add(5);
        listItem.add(7);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._validAssignmentMapping$p$0,
                3,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(3);
        listItem.add(5);
        listItem.add(7);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._validAssignmentMapping$p$0,
                5,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(3);
        listItem.add(5);
        listItem.add(7);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._validAssignmentMapping$p$0,
                7,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(10);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._validAssignmentMapping$p$0,
                10,
                listItem);
        listItem = Microsoft.Crm.Workflow.Utils.SharedUtility
            .getList(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType);
        listItem.add(14);
        listItem.add(3);
        listItem.add(5);
        listItem.add(7);
        Microsoft.Crm.Workflow.Utils.SharedUtility
            .dictionaryAdd(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                this._validAssignmentMapping$p$0,
                14,
                listItem);
    }
Microsoft.Crm.Workflow.Validators.SetAttributeValueStepValidator.prototype = {
    _validAssignmentMapping$p$0: null,
    _context$0: null,

    validateAssignmentApplicability: function
        Microsoft_Crm_Workflow_Validators_SetAttributeValueStepValidator$validateAssignmentApplicability(attributeType,
            attributeBehaviorDateTimeType,
            expression) {
            var calculatedFieldAttribute = attributeType;
            var calculatedFieldAttributeBehaviorType = attributeBehaviorDateTimeType;
            var assignmentType = expression.type;
            var exprressionDateTimeBehaviorType = expression.behavior;
            if (!Microsoft.Crm.Workflow.Utils.SharedUtility
                .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                    Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                    this._validAssignmentMapping$p$0,
                    calculatedFieldAttribute)) {
                this._context$0.trace('Attribute {0} is not a valid calculated field',
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(assignmentType));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089372, this._context$0.get_attributeLogicalName());
            }
            if (!Microsoft.Crm.Workflow.Utils.SharedUtility
                .dictionaryGetValue(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                    Sales.Common.Framework.IList$1.$$(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType),
                    this._validAssignmentMapping$p$0,
                    calculatedFieldAttribute).contains(assignmentType)) {
                this._context$0.trace('Attribute type {0} is not a valid for set on {1} type calculated field',
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(assignmentType),
                    Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(calculatedFieldAttribute));
                Microsoft.Crm.Workflow.Utils.SharedUtility
                    .throwException(-2147089365,
                        Microsoft.Crm.Workflow.FormulaDisplayVisitor.expressionToString(expression),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(assignmentType),
                        Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType.toString(calculatedFieldAttribute));
            }
            if (calculatedFieldAttribute === 2 &&
                exprressionDateTimeBehaviorType !== calculatedFieldAttributeBehaviorType) {
                if (calculatedFieldAttributeBehaviorType === 2) {
                    this._context$0.trace('You can only use a Date Only type of field.');
                    Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089350);
                } else if (calculatedFieldAttributeBehaviorType === 3) {
                    this._context$0.trace('You can only use a Time-Zone Independent Date Time type of field.');
                    Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089349);
                } else if (calculatedFieldAttributeBehaviorType === 1) {
                    this._context$0.trace('You can only use a User Local Date Time type of field.');
                    Microsoft.Crm.Workflow.Utils.SharedUtility.throwException(-2147089348);
                }
            }
        }
}


Microsoft.Crm.Workflow.Validators.TypeUtility = function Microsoft_Crm_Workflow_Validators_TypeUtility() {
}
Microsoft.Crm.Workflow.Validators.TypeUtility
    .methodCallExpressionSetTypeFromRank = function
    Microsoft_Crm_Workflow_Validators_TypeUtility$methodCallExpressionSetTypeFromRank(rankDictionary, operands) {
        var maxRankType = 0;
        var isfirstExpression = true;
        for (var $$arr_4 = operands, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var operand = $$arr_4[$$idx_6];
            Microsoft.Crm.Workflow.Utils.ExceptionUtility
                .assert(Microsoft.Crm.Workflow.Utils.SharedUtility
                    .dictionaryContainKey(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                        Number,
                        rankDictionary,
                        operand.type),
                    'dictionary does not contain key');
            if (isfirstExpression) {
                maxRankType = operand.type;
                isfirstExpression = false;
                continue;
            }
            if (Microsoft.Crm.Workflow.Utils.SharedUtility
                .dictionaryGetValue(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                    Number,
                    rankDictionary,
                    operand.type) >
                Microsoft.Crm.Workflow.Utils.SharedUtility
                .dictionaryGetValue(Microsoft.Crm.Workflow.Expressions.WorkflowAttributeType,
                    Number,
                    rankDictionary,
                    maxRankType)) {
                maxRankType = operand.type;
            }
        }
        return maxRankType;
    }


Type.registerNamespace('ProcessObjectModel.Visitors');

ProcessObjectModel.Visitors._iStageStepVisitor = function() {}
ProcessObjectModel.Visitors._iStageStepVisitor.registerInterface('ProcessObjectModel.Visitors._iStageStepVisitor');


ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor = function() {}
ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor
    .registerInterface('ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor');


ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor = function() {}
ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor
    .registerInterface('ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor');


ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory = function() {}
ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory
    .registerInterface('ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory');


ProcessObjectModel.Visitors._conditionStepVisitor = function ProcessObjectModel_Visitors__conditionStepVisitor() {
    ProcessObjectModel.Visitors._conditionStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors._conditionStepVisitor.prototype = {
    visit: function ProcessObjectModel_Visitors__conditionStepVisitor$visit(step) {
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase.prototype.visit.call(this, step);
        Sys.Debug.assert(Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType(step),
            'Condition step should not be invalid');
        var conditionStep = step;
        this._businessProcessFlowVisitor$p$0.addCondition(conditionStep);
        this.visitChildren(conditionStep);
    }
}


ProcessObjectModel.Visitors
    ._relationshipCollectionStepVisitor = function ProcessObjectModel_Visitors__relationshipCollectionStepVisitor() {
        ProcessObjectModel.Visitors._relationshipCollectionStepVisitor.initializeBase(this);
    }
ProcessObjectModel.Visitors._relationshipCollectionStepVisitor.prototype = {
    visit: function ProcessObjectModel_Visitors__relationshipCollectionStepVisitor$visit(step) {
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase.prototype.visit.call(this, step);
        Sys.Debug.assert(Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep.isInstanceOfType(step),
            'RelationshipCollection step should not be invalid');
        var relationshipCollectionStep = step;
        for (var i = 0; i < relationshipCollectionStep.steps.get_Count(); i++) {
            var relationshipStep = relationshipCollectionStep.steps.get_item(i);
            this._businessProcessFlowVisitor$p$0.addRelationship(relationshipStep);
        }
    }
}


ProcessObjectModel.Visitors._entityStepVisitor = function ProcessObjectModel_Visitors__entityStepVisitor() {
    ProcessObjectModel.Visitors._entityStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors._entityStepVisitor.prototype = {
    visit: function ProcessObjectModel_Visitors__entityStepVisitor$visit(step) {
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase.prototype.visit.call(this, step);
        Sys.Debug.assert(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType(step),
            'Workflow step should not be invalid');
        var entityStep = step;
        this._businessProcessFlowVisitor$p$0.addEntity(entityStep);
        this.visitChildren(entityStep);
    },

    createStepVisitor: function
        ProcessObjectModel_Visitors__entityStepVisitor$createStepVisitor(parentStep, step, businessProcessVisitor) {
            var stepVisitor = this._stepVisitorFactory$p$0
                .createStepVisitor(step, this._businessProcessFlowVisitor$p$0);
            if (ProcessObjectModel.Visitors._iStageStepVisitor.isInstanceOfType(stepVisitor)) {
                var stageStepVisitor = stepVisitor;
                stageStepVisitor.set_parentStep(parentStep);
            }
            return stepVisitor;
        }
}


ProcessObjectModel.Visitors
    ._businessProcessFlowStepVisitorBase = function ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase() {
    }
ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase.prototype = {
    _businessProcessFlowVisitor$p$0: null,
    _stepVisitorFactory$p$0: null,

    get_stepVisitorFactory: function
        ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase$get_stepVisitorFactory() {
            return this._stepVisitorFactory$p$0;
        },

    set_stepVisitorFactory: function
        ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase$set_stepVisitorFactory(value) {
            this._stepVisitorFactory$p$0 = value;
            return value;
        },

    get_businessProcessFlowVisitor: function
        ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase$get_businessProcessFlowVisitor() {
            return this._businessProcessFlowVisitor$p$0;
        },

    set_businessProcessFlowVisitor: function
        ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase$set_businessProcessFlowVisitor(value) {
            this._businessProcessFlowVisitor$p$0 = value;
            return value;
        },

    visit: function ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase$visit(step) {
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(this._businessProcessFlowVisitor$p$0),
            'Business Process Flow visitor should not be null');
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(step), 'Workflow step should not be null');
    },

    visitChildren: function ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase$visitChildren(step) {
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(step),
            'Composite step should not be null while visiting its children');
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(this._stepVisitorFactory$p$0),
            'Step Visitor Factory should not be null');
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(this._businessProcessFlowVisitor$p$0),
            'Business Process Flow visitor should not be null');
        for (var i = 0; i < step.steps.get_Count(); i++) {
            var childStepBase = step.steps.get_item(i);
            var stepVisitor = this.createStepVisitor(step, childStepBase, this._businessProcessFlowVisitor$p$0);
            if (Mscrm.InternalUtilities.JSTypes.isNull(stepVisitor)) {
                continue;
            }
            stepVisitor.visit(childStepBase);
        }
    },

    createStepVisitor: function
        ProcessObjectModel_Visitors__businessProcessFlowStepVisitorBase$createStepVisitor(parentStep,
            step,
            businessProcessVisitor) {
            return this._stepVisitorFactory$p$0.createStepVisitor(step, this._businessProcessFlowVisitor$p$0);
        }
}


ProcessObjectModel.Visitors._stageStepVisitor = function ProcessObjectModel_Visitors__stageStepVisitor() {
    ProcessObjectModel.Visitors._stageStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors._stageStepVisitor.prototype = {
    visit: function ProcessObjectModel_Visitors__stageStepVisitor$visit(step) {
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase.prototype.visit.call(this, step);
        Sys.Debug.assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(step),
            'Workflow step should not be invalid');
        var stageStep = step;
        this._businessProcessFlowVisitor$p$0.addStage(this._entityStep$p$1, stageStep);
        this.visitChildren(stageStep);
    },

    get_parentStep: function ProcessObjectModel_Visitors__stageStepVisitor$get_parentStep() {
        return this._entityStep$p$1;
    },

    set_parentStep: function ProcessObjectModel_Visitors__stageStepVisitor$set_parentStep(value) {
        this._entityStep$p$1 = value;
        return value;
    },

    _entityStep$p$1: null
}


ProcessObjectModel.Visitors._stepVisitorFactory = function ProcessObjectModel_Visitors__stepVisitorFactory() {
}
ProcessObjectModel.Visitors._stepVisitorFactory.prototype = {
    createStepVisitor: function
        ProcessObjectModel_Visitors__stepVisitorFactory$createStepVisitor(step, businessProcessFlowVisitor) {
            var stepVisitor = null;
            if (Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(step)) {
                stepVisitor = new ProcessObjectModel.Visitors._workflowStepVisitor();
            }
            if (Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType(step)) {
                stepVisitor = new ProcessObjectModel.Visitors._entityStepVisitor();
            }
            if (Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(step)) {
                stepVisitor = new ProcessObjectModel.Visitors._stageStepVisitor();
            }
            if (Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType(step)) {
                stepVisitor = new ProcessObjectModel.Visitors._conditionStepVisitor();
            }
            if (Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep.isInstanceOfType(step)) {
                stepVisitor = new ProcessObjectModel.Visitors._relationshipCollectionStepVisitor();
            }
            if (!Mscrm.InternalUtilities.JSTypes.isNull(stepVisitor)) {
                stepVisitor.set_businessProcessFlowVisitor(businessProcessFlowVisitor);
                stepVisitor.set_stepVisitorFactory(this);
            }
            return stepVisitor;
        }
}


ProcessObjectModel.Visitors
    .BusinessProcessFlowVisitor = function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor() {
    }
ProcessObjectModel.Visitors.BusinessProcessFlowVisitor.prototype = {
    _bpfStepVisitorFactory$p$0: null,
    _entitySteps$p$0: null,
    _entitiesByEntityName$p$0: null,
    _stages$p$0: null,
    _firstLevelStages$p$0: null,
    _stagesById$p$0: null,
    _parentEntityStepByStageId$p$0: null,
    _conditionsByParentStageId$p$0: null,
    _conditionsPresent$p$0: false,
    _backCompatRelationsHandled$p$0: false,
    _relationshipsMapping$p$0: null,

    get_stages: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_stages() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this._stages$p$0)) {
            this._stages$p$0 = [];
        }
        return this._stages$p$0;
    },

    get__relationshipsMapping$p$0: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get__relationshipsMapping$p$0() {
            if (Mscrm.InternalUtilities.JSTypes.isNull(this._relationshipsMapping$p$0)) {
                this._relationshipsMapping$p$0 = {};
            }
            return this._relationshipsMapping$p$0;
        },

    _calculateFirstLevelStages$p$0: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$_calculateFirstLevelStages$p$0() {
            if (!this._conditionsPresent$p$0) {
                this._firstLevelStages$p$0 = this.get_stagesById();
                return;
            }
            var nextStageStep = this.get_stages()[0];
            this._firstLevelStages$p$0 = {};
            this._firstLevelStages$p$0[nextStageStep.stageId] = nextStageStep;
            while (!Mscrm.InternalUtilities._String.isNullOrWhiteSpace(nextStageStep.nextStageId)) {
                Sys.Debug.assert(((nextStageStep.nextStageId) in this.get_stagesById()),
                    'Next stage id should not be invalid');
                nextStageStep = this.get_stagesById()[nextStageStep.nextStageId];
                this._firstLevelStages$p$0[nextStageStep.stageId] = nextStageStep;
            }
        },

    get_areConditionsPresent: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_areConditionsPresent() {
            return this._conditionsPresent$p$0;
        },

    get_entities: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_entities() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this._entitySteps$p$0)) {
            this._entitySteps$p$0 = [];
        }
        return this._entitySteps$p$0;
    },

    get_entitiesByEntityName: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_entitiesByEntityName() {
            if (Mscrm.InternalUtilities.JSTypes.isNull(this._entitiesByEntityName$p$0)) {
                this._entitiesByEntityName$p$0 = {};
            }
            return this._entitiesByEntityName$p$0;
        },

    get_conditionsByParentStageId: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_conditionsByParentStageId() {
            if (Mscrm.InternalUtilities.JSTypes.isNull(this._conditionsByParentStageId$p$0)) {
                this._conditionsByParentStageId$p$0 = {};
            }
            return this._conditionsByParentStageId$p$0;
        },

    get_stagesById: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_stagesById() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this._stagesById$p$0)) {
            this._stagesById$p$0 = {};
        }
        return this._stagesById$p$0;
    },

    get_firstLevelStages: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_firstLevelStages() {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this._firstLevelStages$p$0)) {
            this._firstLevelStages$p$0 = {};
        }
        return this._firstLevelStages$p$0;
    },

    get_parentEntityStepByStageId: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_parentEntityStepByStageId() {
            if (Microsoft.Crm.Workflow.Utils.StringUtility.isNull(this._parentEntityStepByStageId$p$0)) {
                this._parentEntityStepByStageId$p$0 = {};
            }
            return this._parentEntityStepByStageId$p$0;
        },

    getRelationshipStep: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$getRelationshipStep(sourceStageId, targetStageId) {
            if (!this._backCompatRelationsHandled$p$0) {
                this._updateRelationshipsMappingForBackCompatible$p$0();
            }
            var sourceStageIdKey = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(sourceStageId);
            var targetStageIdKey = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(targetStageId);
            var relationshipStep = null;
            if (((targetStageIdKey) in this.get__relationshipsMapping$p$0())) {
                var sourceRelationships = this.get__relationshipsMapping$p$0()[targetStageIdKey];
                if (((sourceStageIdKey) in sourceRelationships)) {
                    relationshipStep = sourceRelationships[sourceStageIdKey];
                }
            }
            return relationshipStep;
        },

    getRelationshipStepsByTargetStage: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$getRelationshipStepsByTargetStage(targetStageId) {
            Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(targetStageId),
                'Expected targetStageId to be not empty and a valid guid.');
            if (!this._backCompatRelationsHandled$p$0) {
                this._updateRelationshipsMappingForBackCompatible$p$0();
            }
            var targetStageIdKey = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(targetStageId);
            if (!((targetStageIdKey) in this.get__relationshipsMapping$p$0())) {
                return null;
            }
            return this.get__relationshipsMapping$p$0()[targetStageIdKey];
        },

    _updateRelationshipsMappingForBackCompatible$p$0: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$_updateRelationshipsMappingForBackCompatible$p$0() {
            for (var i = 0; i < this.get_entities().length - 1; i++) {
                var currentEntityStep = this.get_entities()[i];
                var nextEntityStep = this.get_entities()[i + 1];
                var relationshipName = currentEntityStep.relationshipName;
                var attributeName = currentEntityStep.attributeName;
                if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(relationshipName) ||
                    Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(attributeName)) {
                    continue;
                }
                var lastStageInCurrentEntity = currentEntityStep.steps
                    .get_item(currentEntityStep.steps.get_Count() - 1);
                var firstStageInNextEntity = nextEntityStep.steps.get_item(0);
                var newRelationshipStep = new Microsoft.Crm.Workflow.ObjectModel
                    .RelationshipStep(currentEntityStep._workflow$p$0);
                newRelationshipStep.relationshipName = relationshipName;
                newRelationshipStep.attributeName = attributeName;
                newRelationshipStep.sourceStageId = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(lastStageInCurrentEntity.stageId);
                newRelationshipStep.targetStageId = Microsoft.Crm.Workflow.Utils.StringUtility
                    .reduceToCanonicalForm(firstStageInNextEntity.stageId);
                this.addRelationship(newRelationshipStep);
            }
            this._backCompatRelationsHandled$p$0 = true;
        },

    visit: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$visit(workflowStep) {
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(workflowStep),
            'Workflow step should not be null while visiting it');
        var stepVisitor = this.get_businessProcessFlowStepVisitorFactory().createStepVisitor(workflowStep, this);
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(stepVisitor), 'Step visitor should not be null');
        stepVisitor.visit(workflowStep);
        if (!this.get_stages().length) {
            return;
        }
        this._calculateFirstLevelStages$p$0();
    },

    get_businessProcessFlowStepVisitorFactory: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$get_businessProcessFlowStepVisitorFactory() {
            if (Mscrm.InternalUtilities.JSTypes.isNull(this._bpfStepVisitorFactory$p$0)) {
                this._bpfStepVisitorFactory$p$0 = new ProcessObjectModel.Visitors._stepVisitorFactory();
            }
            return this._bpfStepVisitorFactory$p$0;
        },

    set_businessProcessFlowStepVisitorFactory: function
        ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$set_businessProcessFlowStepVisitorFactory(value) {
            this._bpfStepVisitorFactory$p$0 = value;
            return value;
        },

    addEntity: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$addEntity(entityStep) {
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(entityStep),
            'Entity step should not be null while adding it');
        Array.add(this.get_entities(), entityStep);
        var entitiesDictionary = this.get_entitiesByEntityName();
        if (!((entityStep.get_EntityLogicalName()) in entitiesDictionary)) {
            entitiesDictionary[entityStep.get_EntityLogicalName()] = new Array(0);
        }
        Array.add(entitiesDictionary[entityStep.get_EntityLogicalName()], entityStep);
    },

    addStage: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$addStage(entityStep, stageStep) {
        var stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(stageStep.stageId);
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(stageStep),
            'Stage step should not be null while adding it to the collection');
        Sys.Debug.assert(!((stageId) in this.get_stagesById()), 'Stage id should not be invalid');
        Sys.Debug.assert(!((stageId) in this.get_parentEntityStepByStageId()), 'StageId not present');
        Array.add(this.get_stages(), stageStep);
        this.get_stagesById()[stageId] = stageStep;
        this.get_parentEntityStepByStageId()[stageId] = entityStep;
    },

    addCondition: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$addCondition(condition) {
        Sys.Debug.assert(!Mscrm.InternalUtilities.JSTypes.isNull(condition),
            'Condition step should not be null while adding it to collection');
        Sys.Debug.assert(Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType(condition.get_parent()),
            'Condition step parent should not be null');
        var parentStage = condition.get_parent();
        var stageId = Microsoft.Crm.Workflow.Utils.StringUtility.reduceToCanonicalForm(parentStage.stageId);
        Sys.Debug.assert(!((stageId) in this.get_conditionsByParentStageId()),
            'Condition step\'s parent stage id should not be invalid');
        this.get_conditionsByParentStageId()[stageId] = condition;
        this._conditionsPresent$p$0 = true;
    },

    addRelationship: function ProcessObjectModel_Visitors_BusinessProcessFlowVisitor$addRelationship(relationship) {
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(relationship.sourceStageId) ||
            Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(relationship.targetStageId)) {
            return;
        }
        var sourceStageIdKey = Microsoft.Crm.Workflow.Utils.StringUtility
            .reduceToCanonicalForm(relationship.sourceStageId);
        var targetStageIdKey = Microsoft.Crm.Workflow.Utils.StringUtility
            .reduceToCanonicalForm(relationship.targetStageId);
        if (((targetStageIdKey) in this.get__relationshipsMapping$p$0())) {
            (this.get__relationshipsMapping$p$0()[targetStageIdKey])[sourceStageIdKey] = relationship;
        } else {
            var sourceRelationships = {};
            sourceRelationships[sourceStageIdKey] = relationship;
            this.get__relationshipsMapping$p$0()[targetStageIdKey] = sourceRelationships;
        }
    }
}


ProcessObjectModel.Visitors._workflowStepVisitor = function ProcessObjectModel_Visitors__workflowStepVisitor() {
    ProcessObjectModel.Visitors._workflowStepVisitor.initializeBase(this);
}
ProcessObjectModel.Visitors._workflowStepVisitor.prototype = {
    visit: function ProcessObjectModel_Visitors__workflowStepVisitor$visit(step) {
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase.prototype.visit.call(this, step);
        Sys.Debug.assert(Microsoft.Crm.Workflow.ObjectModel.WorkflowStep.isInstanceOfType(step),
            'Workflow step should not be valid');
        var workflowStep = step;
        this.visitChildren(workflowStep);
    }
}


Type.registerNamespace('Microsoft.Crm.Sdk');

Microsoft.Crm.Sdk.WorkflowScope = function Microsoft_Crm_Sdk_WorkflowScope() {
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
Microsoft.Crm.Workflow.ObjectModel.ControlStep
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ControlStep', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase', Microsoft.Crm.Workflow.ObjectModel.StepBase);
Microsoft.Crm.Workflow.ObjectModel.ActionStep.registerClass('Microsoft.Crm.Workflow.ObjectModel.ActionStep',
    Microsoft.Crm.Workflow.ObjectModel.CompositeStepBase);
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
Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary._wrapper
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.InteractiveWorkflowInputDictionary._wrapper');
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes');
Microsoft.Crm.Workflow.ObjectModel.BaseDictionary.registerClass('Microsoft.Crm.Workflow.ObjectModel.BaseDictionary');
Microsoft.Crm.Workflow.ObjectModel.JsonBuilder.registerClass('Microsoft.Crm.Workflow.ObjectModel.JsonBuilder');
Microsoft.Crm.Workflow.ObjectModel._publicationParametersFactory
    .registerClass('Microsoft.Crm.Workflow.ObjectModel._publicationParametersFactory');
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
Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection
    .registerClass('Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection');
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
Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorBase
    .registerClass('Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorBase');
Microsoft.Crm.Workflow.Validators._methodCallArithmeticEvaluateExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators._methodCallArithmeticEvaluateExpressionValidator',
        Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorBase);
Microsoft.Crm.Workflow.Validators._methodCallDateMathEvaluateExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators._methodCallDateMathEvaluateExpressionValidator',
        Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorBase);
Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorFactory
    .registerClass('Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorFactory');
Microsoft.Crm.Workflow.Validators._methodCallStringEvaluateExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators._methodCallStringEvaluateExpressionValidator',
        Microsoft.Crm.Workflow.Validators._methodCallEvaluateExpressionValidatorBase);
Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.MethodCallExpressionValidator',
        Microsoft.Crm.Workflow.Validators.ExpressionValidator);
Microsoft.Crm.Workflow.Validators.SetAttributeValueStepValidator
    .registerClass('Microsoft.Crm.Workflow.Validators.SetAttributeValueStepValidator');
Microsoft.Crm.Workflow.Validators.TypeUtility.registerClass('Microsoft.Crm.Workflow.Validators.TypeUtility');
ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase
    .registerClass('ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase');
ProcessObjectModel.Visitors._conditionStepVisitor
    .registerClass('ProcessObjectModel.Visitors._conditionStepVisitor',
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors._relationshipCollectionStepVisitor
    .registerClass('ProcessObjectModel.Visitors._relationshipCollectionStepVisitor',
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors._entityStepVisitor
    .registerClass('ProcessObjectModel.Visitors._entityStepVisitor',
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors._stageStepVisitor.registerClass('ProcessObjectModel.Visitors._stageStepVisitor',
    ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase,
    ProcessObjectModel.Visitors._iStageStepVisitor,
    ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
ProcessObjectModel.Visitors._stepVisitorFactory
    .registerClass('ProcessObjectModel.Visitors._stepVisitorFactory',
        null,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitorFactory);
ProcessObjectModel.Visitors.BusinessProcessFlowVisitor
    .registerClass('ProcessObjectModel.Visitors.BusinessProcessFlowVisitor',
        null,
        ProcessObjectModel.Visitors.IBusinessProcessFlowVisitor);
ProcessObjectModel.Visitors._workflowStepVisitor
    .registerClass('ProcessObjectModel.Visitors._workflowStepVisitor',
        ProcessObjectModel.Visitors._businessProcessFlowStepVisitorBase,
        ProcessObjectModel.Visitors.IBusinessProcessFlowStepVisitor);
Microsoft.Crm.Sdk.WorkflowScope.registerClass('Microsoft.Crm.Sdk.WorkflowScope');
Microsoft.Crm.Workflow.CrmTimeSpan.zero = new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, 0, 0, 0);
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.customAttributeUrl = '!Process_Custom_Attribute_URL_';
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess
    .customAttributePostUrl = '!Process_Custom_Attribute_PostURL_';
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess._dynamicAttributes$p = {};
Microsoft.Crm.Workflow.ObjectModel.DynamicAttributesInProcess.$$cctor();
Microsoft.Crm.Workflow.ObjectModel.InteractionStep.InteractionResponsePostfix = '_interactionResponseValue';
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes.owner = 'ownerid';
Microsoft.Crm.Workflow.ObjectModel.UpdateAttributes.status = 'statecode';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.hierarchicalRelationshipNameVariable = 'HierarchicalRelationshipName';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.sourceSequenceName = 'Source';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.targetSequenceName = 'Target';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.aggregateSequenceName = 'Aggregate';
Microsoft.Crm.Workflow.ObjectModel.RollupRuleStep.targetLinkedSequenceName = 'TargetLinked';
Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection.input = 0;
Microsoft.Crm.Workflow.ObjectModel.ArgumentDirection.output = 1;
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
Microsoft.Crm.Workflow.Expressions.OperatorClassifier._operatorTypes$p = null;
Microsoft.Crm.Workflow.Expressions.OperatorClassifier.$$cctor();
Microsoft.Crm.Workflow.Validators.BinaryExpressionValidator._twoOptionOperator$p = null;
Microsoft.Crm.Sdk.WorkflowScope.businessUnit = 2;
Microsoft.Crm.Sdk.WorkflowScope.deep = 3;
Microsoft.Crm.Sdk.WorkflowScope.global = 4;
Microsoft.Crm.Sdk.WorkflowScope.user = 1;