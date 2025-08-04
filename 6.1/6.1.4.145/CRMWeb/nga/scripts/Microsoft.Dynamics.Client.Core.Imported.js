Type.registerNamespace('Mscrm.BusinessRules');

Mscrm.BusinessRules.IErrorHandler = function() {}
Mscrm.BusinessRules.IErrorHandler.registerInterface('Mscrm.BusinessRules.IErrorHandler');


Mscrm.BusinessRules.ArithmeticErrorHandler = function Mscrm_BusinessRules_ArithmeticErrorHandler(exception) {
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\ArithmeticErrorHandler.cs (26,3)
    Mscrm.BusinessRules.ArithmeticErrorHandler.initializeBase(this, [ exception ]);
}
Mscrm.BusinessRules.ArithmeticErrorHandler.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\ArithmeticErrorHandler.cs (34,3)
    handleError: function Mscrm_BusinessRules_ArithmeticErrorHandler$handleError() {
    }
}


Mscrm.BusinessRules.ErrorHandlerFactory = function Mscrm_BusinessRules_ErrorHandlerFactory() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\ErrorHandlerFactory.cs (28,3)
Mscrm.BusinessRules.ErrorHandlerFactory.getHandler = function Mscrm_BusinessRules_ErrorHandlerFactory$getHandler(e, caller) {
    if (e.message.indexOf(String.format('BusinessRuleError:{0}', '1000')) !== -1) {
        return new Mscrm.BusinessRules.ArithmeticErrorHandler(e);
    }
    return new Mscrm.BusinessRules.ReportToWatsonErrorHandler(e, caller);
}


Mscrm.BusinessRules.ErrorHandler = function Mscrm_BusinessRules_ErrorHandler(exception) {
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\IErrorHandler.cs (36,3)
    this.$0_0 = exception;
}
Mscrm.BusinessRules.ErrorHandler.prototype = {
    $0_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\IErrorHandler.cs (56,4)
    get_exception: function Mscrm_BusinessRules_ErrorHandler$get_exception() {
        return this.$0_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\IErrorHandler.cs (57,4)
    set_exception: function Mscrm_BusinessRules_ErrorHandler$set_exception(value) {
        this.$0_0 = value;
        return value;
    }
}


Mscrm.BusinessRules.ReportToWatsonErrorHandler = function Mscrm_BusinessRules_ReportToWatsonErrorHandler(exception, caller) {
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\ReportToWatsonErrorHandler.cs (53,3)
    Mscrm.BusinessRules.ReportToWatsonErrorHandler.initializeBase(this, [ exception ]);
    this.$1_1 = caller;
}
Mscrm.BusinessRules.ReportToWatsonErrorHandler.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\ReportToWatsonErrorHandler.cs (62,3)
    handleError: function Mscrm_BusinessRules_ReportToWatsonErrorHandler$handleError() {
        if (this.$3_1(this.$1_1)) {
            return;
        }
        Xrm.Internal.reportToWatson(this.$0_0.message, 'BusinessRuleScriptPage', 0, true, this.$1_1, this.$0_0.number, true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\businessrules\runtime\exception\ReportToWatsonErrorHandler.cs (77,3)
    $3_1: function Mscrm_BusinessRules_ReportToWatsonErrorHandler$$3_1($p0) {
        return !Mscrm.InternalUtilities._Script.isNullOrUndefined(Mscrm.BusinessRulesScript) && Mscrm.BusinessRulesScript.DraftRuleMethods.indexOf($p0) >= 0;;
    },
    
    $1_1: null
}


Mscrm.BusinessRules.JsErrorCodes = function Mscrm_BusinessRules_JsErrorCodes() {
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


Microsoft.Dynamics.Client.Core.Imported.jQueryDeferredFactory = function Microsoft_Dynamics_Client_Core_Imported_jQueryDeferredFactory() {
}
// file://c:\bt\160165\src\client\application\DynamicsSrc\Core\Imported\jQuery\jQueryDeferredFactory.cs (47,3)
Microsoft.Dynamics.Client.Core.Imported.jQueryDeferredFactory.Deferred = function Microsoft_Dynamics_Client_Core_Imported_jQueryDeferredFactory$Deferred(TData, TError, initializer) {
    if (initializer === undefined || !initializer) {
        return jQuery.Deferred();
    }
    else {
        return jQuery.Deferred(initializer);
    }
}


// file://c:\bt\160165\src\client\application\DynamicsSrc\Core\Imported\JsTypes.cs (23,3)
function IsNull(value) {
    return typeof(value) === 'undefined' || typeof(value) === 'unknown' || value == null;
}


Mscrm.BusinessRules.ErrorHandler.registerClass('Mscrm.BusinessRules.ErrorHandler', null, Mscrm.BusinessRules.IErrorHandler);
Mscrm.BusinessRules.ArithmeticErrorHandler.registerClass('Mscrm.BusinessRules.ArithmeticErrorHandler', Mscrm.BusinessRules.ErrorHandler);
Mscrm.BusinessRules.ErrorHandlerFactory.registerClass('Mscrm.BusinessRules.ErrorHandlerFactory');
Mscrm.BusinessRules.ReportToWatsonErrorHandler.registerClass('Mscrm.BusinessRules.ReportToWatsonErrorHandler', Mscrm.BusinessRules.ErrorHandler);
Mscrm.BusinessRules.JsErrorCodes.registerClass('Mscrm.BusinessRules.JsErrorCodes');
Microsoft.Dynamics.Client.Core.Imported.jQueryDeferredFactory.registerClass('Microsoft.Dynamics.Client.Core.Imported.jQueryDeferredFactory');
Mscrm.BusinessRules.ErrorHandlerFactory.businessErrorFormat = 'BusinessRuleError:{0}';
Mscrm.BusinessRules.JsErrorCodes.arithmeticOperationNotValid = '1000';
