Type.registerNamespace('Mscrm.BusinessRules');

Mscrm.BusinessRules.IErrorHandler = function() {}
Mscrm.BusinessRules.IErrorHandler.registerInterface('Mscrm.BusinessRules.IErrorHandler');


Mscrm.BusinessRules.JsErrorCodes = function Mscrm_BusinessRules_JsErrorCodes() {
}


Mscrm.BusinessRules.ArithmeticErrorHandler = function Mscrm_BusinessRules_ArithmeticErrorHandler(exception) {
    Mscrm.BusinessRules.ArithmeticErrorHandler.initializeBase(this, [ exception ]);
}
Mscrm.BusinessRules.ArithmeticErrorHandler.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Exception\ArithmeticErrorHandler.cs (34,3)
    handleError: function Mscrm_BusinessRules_ArithmeticErrorHandler$handleError() {
    }
}


Mscrm.BusinessRules.ErrorHandlerFactory = function Mscrm_BusinessRules_ErrorHandlerFactory() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Exception\ErrorHandlerFactory.cs (28,3)
Mscrm.BusinessRules.ErrorHandlerFactory.getHandler = function Mscrm_BusinessRules_ErrorHandlerFactory$getHandler(e, caller) {
    if (e.message.indexOf(String.format('BusinessRuleError:{0}', '1000')) !== -1) {
        return new Mscrm.BusinessRules.ArithmeticErrorHandler(e);
    }
    return new Mscrm.BusinessRules.ReportToWatsonErrorHandler(e, caller);
}


Mscrm.BusinessRules.ErrorHandler = function Mscrm_BusinessRules_ErrorHandler(exception) {
    this.$0_0 = exception;
}
Mscrm.BusinessRules.ErrorHandler.prototype = {
    $0_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Exception\IErrorHandler.cs (56,4)
    get_exception: function Mscrm_BusinessRules_ErrorHandler$get_exception() {
        return this.$0_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Exception\IErrorHandler.cs (57,4)
    set_exception: function Mscrm_BusinessRules_ErrorHandler$set_exception(value) {
        this.$0_0 = value;
        return value;
    }
}


Mscrm.BusinessRules.ReportToWatsonErrorHandler = function Mscrm_BusinessRules_ReportToWatsonErrorHandler(exception, caller) {
    Mscrm.BusinessRules.ReportToWatsonErrorHandler.initializeBase(this, [ exception ]);
    this.$1_1 = caller;
}
Mscrm.BusinessRules.ReportToWatsonErrorHandler.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Exception\ReportToWatsonErrorHandler.cs (62,3)
    handleError: function Mscrm_BusinessRules_ReportToWatsonErrorHandler$handleError() {
        if (this.$2_1(this.$1_1)) {
            return;
        }
        Xrm.Internal.reportToWatson(this.$0_0.message, 'BusinessRuleScriptPage', 0, true, this.$1_1, this.$0_0.number, true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Exception\ReportToWatsonErrorHandler.cs (77,3)
    $2_1: function Mscrm_BusinessRules_ReportToWatsonErrorHandler$$2_1($p0) {
        return !Mscrm.InternalUtilities._Script.isNullOrUndefined(Mscrm.BusinessRulesScript) && Mscrm.BusinessRulesScript.DraftRuleMethods.indexOf($p0) >= 0;;
    },
    
    $1_1: null
}


Mscrm.BusinessRules.Utility = function Mscrm_BusinessRules_Utility() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Utility.cs (22,3)
Mscrm.BusinessRules.Utility.sanitizeGuid = function Mscrm_BusinessRules_Utility$sanitizeGuid(guid) {
    if (Mscrm.BusinessRules.Utility.isNull(guid)) {
        return guid;
    }
    return guid.replace('{', '').replace('}', '').toUpperCase();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\Utility.cs (36,3)
Mscrm.BusinessRules.Utility.isNull = function Mscrm_BusinessRules_Utility$isNull(value) {
    return (typeof(value) === 'undefined' || !value);
}


Mscrm.BusinessRules.JsErrorCodes.registerClass('Mscrm.BusinessRules.JsErrorCodes');
Mscrm.BusinessRules.ErrorHandler.registerClass('Mscrm.BusinessRules.ErrorHandler', null, Mscrm.BusinessRules.IErrorHandler);
Mscrm.BusinessRules.ArithmeticErrorHandler.registerClass('Mscrm.BusinessRules.ArithmeticErrorHandler', Mscrm.BusinessRules.ErrorHandler);
Mscrm.BusinessRules.ErrorHandlerFactory.registerClass('Mscrm.BusinessRules.ErrorHandlerFactory');
Mscrm.BusinessRules.ReportToWatsonErrorHandler.registerClass('Mscrm.BusinessRules.ReportToWatsonErrorHandler', Mscrm.BusinessRules.ErrorHandler);
Mscrm.BusinessRules.Utility.registerClass('Mscrm.BusinessRules.Utility');
Mscrm.BusinessRules.JsErrorCodes.arithmeticOperationNotValid = '1000';
Mscrm.BusinessRules.ErrorHandlerFactory.businessErrorFormat = 'BusinessRuleError:{0}';
