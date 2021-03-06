Type.registerNamespace("Mscrm.BusinessRules");
Mscrm.BusinessRules.IErrorHandler = function() {};
Mscrm.BusinessRules.IErrorHandler.registerInterface("Mscrm.BusinessRules.IErrorHandler");
Mscrm.BusinessRules.JsErrorCodes = function() {};
Mscrm.BusinessRules.ArithmeticErrorHandler = function(exception) {
    Mscrm.BusinessRules.ArithmeticErrorHandler.initializeBase(this, [exception])
};
Mscrm.BusinessRules.ArithmeticErrorHandler.prototype = { handleError: function() {} };
Mscrm.BusinessRules.ErrorHandlerFactory = function() {};
Mscrm.BusinessRules.ErrorHandlerFactory.getHandler = function(e, caller) {
    if (e.message.indexOf(String
            .format("BusinessRuleError:{0}", "1000")) !==
        -1) return new Mscrm.BusinessRules.ArithmeticErrorHandler(e);
    return new Mscrm.BusinessRules.ReportToWatsonErrorHandler(e, caller)
};
Mscrm.BusinessRules.ErrorHandler = function(exception) { this.$0_0 = exception };
Mscrm.BusinessRules.ErrorHandler.prototype = {
    $0_0: null,
    get_exception: function() { return this.$0_0 },
    set_exception: function(value) {
        this.$0_0 = value;
        return value
    }
};
Mscrm.BusinessRules.ReportToWatsonErrorHandler = function(exception, caller) {
    Mscrm.BusinessRules.ReportToWatsonErrorHandler.initializeBase(this, [exception]);
    this.$1_1 = caller
};
Mscrm.BusinessRules.ReportToWatsonErrorHandler.prototype = {
    handleError: function() {
        if (this.$2_1(this.$1_1)) return;
        Xrm.Internal.reportToWatson(this.$0_0.message,
            "BusinessRuleScriptPage",
            0,
            true,
            this.$1_1,
            this.$0_0.number,
            true)
    },
    $2_1: function($p0) {
        return !Mscrm.InternalUtilities._Script.isNullOrUndefined(Mscrm.BusinessRulesScript) &&
            Mscrm.BusinessRulesScript.DraftRuleMethods.indexOf($p0) >= 0
    },
    $1_1: null
};
Mscrm.BusinessRules.Utility = function() {};
Mscrm.BusinessRules.Utility.sanitizeGuid = function(guid) {
    if (Mscrm.BusinessRules.Utility.isNull(guid)) return guid;
    return guid.replace("{", "").replace("}", "").toUpperCase()
};
Mscrm.BusinessRules.Utility.filterInputArguments = function(inputArguments) {
    if (!Mscrm.BusinessRules.Utility.isNull(inputArguments) &&
        Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants.mddLastButtonClickedId in inputArguments &&
        inputArguments[Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants.mddLastButtonClickedId] ===
        Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants.mddOkButtonId) {
        var $v_0 = "ProcessUnification_Arguments_", $$dict_5 = inputArguments;
        for (var $$key_6 in $$dict_5) {
            var $v_1 = { key: $$key_6, value: $$dict_5[$$key_6] }, $v_2 = $v_1.key.toString();
            if ($v_2.startsWith($v_0)) {
                var $v_3 = $v_2.substring($v_0.length, $v_2.length);
                inputArguments[$v_3] = $v_1.value
            }
            delete inputArguments[$v_2]
        }
        return true
    }
    return false
};
Mscrm.BusinessRules.Utility.isNull = function(value) { return typeof value === "undefined" || !value };
Type.registerNamespace("Microsoft.Crm.Application.SharedObjects");
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants = function() {};
Mscrm.BusinessRules.JsErrorCodes.registerClass("Mscrm.BusinessRules.JsErrorCodes");
Mscrm.BusinessRules.ErrorHandler.registerClass("Mscrm.BusinessRules.ErrorHandler",
    null,
    Mscrm.BusinessRules.IErrorHandler);
Mscrm.BusinessRules.ArithmeticErrorHandler.registerClass("Mscrm.BusinessRules.ArithmeticErrorHandler",
    Mscrm.BusinessRules.ErrorHandler);
Mscrm.BusinessRules.ErrorHandlerFactory.registerClass("Mscrm.BusinessRules.ErrorHandlerFactory");
Mscrm.BusinessRules.ReportToWatsonErrorHandler
    .registerClass("Mscrm.BusinessRules.ReportToWatsonErrorHandler", Mscrm.BusinessRules.ErrorHandler);
Mscrm.BusinessRules.Utility.registerClass("Mscrm.BusinessRules.Utility");
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants
    .registerClass("Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants");
Mscrm.BusinessRules.JsErrorCodes.arithmeticOperationNotValid = "1000";
Mscrm.BusinessRules.ErrorHandlerFactory.businessErrorFormat = "BusinessRuleError:{0}";
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants
    .returnRawValueFlag = "ProcessUnification_ReturnRawValue";
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants.readOnlyFlagPrefix = "ProcessUnification_ReadOnly_";
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants.hiddenFlagPrefix = "ProcessUnification_Hidden_";
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants
    .processActionArgumentsPrefix = "ProcessUnification_Arguments_";
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants.mddOkButtonId = "ok_id";
Microsoft.Crm.Application.SharedObjects.ProcessUnificationConstants.mddLastButtonClickedId = "lastButtonClicked"