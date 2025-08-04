Type.registerNamespace('Mscrm');

Mscrm.IDeferredDataProcessingControl = function() {}
Mscrm.IDeferredDataProcessingControl.registerInterface('Mscrm.IDeferredDataProcessingControl');


Type.registerNamespace('Sales.Common.Framework');

Sales.Common.Framework.IList$1 = function() {}
Sales.Common.Framework.IList$1.$$ = function(T) {
    var $$cn = 'IList$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Sales.Common.Framework[$$cn]) {
        var $$ccr = Sales.Common.Framework[$$cn] = function() {
        };
        $$ccr.registerInterface('Sales.Common.Framework.' + $$cn);
    }
    return Sales.Common.Framework[$$cn];
}
Sales.Common.Framework.IList$1.registerInterface('Sales.Common.Framework.IList$1');


Sales.Common.Framework.List$1 = function(items) {
    this.$0_0 = items || new Array(0);
}
Sales.Common.Framework.List$1.$$ = function(T) {
    var $$cn = 'List$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Sales.Common.Framework[$$cn]) {
        var $$ccr = Sales.Common.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Sales.Common.Framework.List$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Sales.Common.Framework.List$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Sales.Common.Framework.' + $$cn, null, Sales.Common.Framework.IList$1.$$(T));
        var $$dict_5 = Sales.Common.Framework.List$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Sales.Common.Framework[$$cn];
}
Sales.Common.Framework.List$1.prototype = {
    $0_0: null,
    
    get_items: function() {
        return this.$0_0;
    },
    
    get_count: function() {
        return this.$0_0.length;
    },
    
    get_item: function(index) {
        return this.$0_0[index];
    },
    
    set_item: function(index, value) {
        this.$0_0[index] = value;
        return value;
    },
    
    add: function(item) {
        Array.add(this.$0_0, item);
    },
    
    addRange: function(items) {
        Array.addRange(this.$0_0, items);
    },
    
    clear: function() {
        Array.clear(this.$0_0);
    },
    
    contains: function(item) {
        return Array.contains(this.$0_0, item);
    },
    
    indexOf: function(item, startIndex) {
        startIndex = startIndex || 0;
        return Array.indexOf(this.$0_0, item, startIndex);
    },
    
    insert: function(index, item) {
        Array.insert(this.$0_0, index, item);
    },
    
    remove: function(item) {
        Array.remove(this.$0_0, item);
    },
    
    removeAt: function(index) {
        Array.removeAt(this.$0_0, index);
    },
    
    filter: function(callback) {
        return new (Sales.Common.Framework.List$1.$$(this.$$gta['Sales.Common.Framework.List$1']['T']))(_Array.filter(this.$$gta['Sales.Common.Framework.List$1']['T'], this.$0_0, callback));
    },
    
    toArray: function() {
        var $v_0 = new Array(this.$0_0.length);
        for (var $v_1 = 0; $v_1 < this.$0_0.length; $v_1++) {
            $v_0[$v_1] = this.$0_0[$v_1];
        }
        return $v_0;
    },
    
    first: function() {
        if (!this.$0_0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this.$0_0[0];
    },
    
    last: function() {
        if (!this.$0_0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this.$0_0[this.get_count() - 1];
    }
}


Sales.Common.Framework.JsTypes = function() {
}
Sales.Common.Framework.JsTypes.isNull = function($p0) {
    return typeof($p0) === 'undefined' || typeof($p0) === 'unknown' || $p0 == null;
}


function parseQueryString(windowLocation) {
    if (Sales.Common.Framework.JsTypes.isNull(windowLocation) || Sales.Common.Framework.JsTypes.isNull(windowLocation.search) || !windowLocation.search.length) {
        return {};
    }
    var $v_0 = windowLocation.search.substr(1);
    return parseQueryStringValue($v_0);
}
function parseHashString(windowLocation) {
    if (Sales.Common.Framework.JsTypes.isNull(windowLocation)) {
        return {};
    }
    var $v_0 = Mscrm.CrmCrossBrowser.getHash(windowLocation);
    return parseQueryStringValue($v_0);
}
function parseQueryStringValue(queryStringValue) {
    if (Sales.Common.Framework.JsTypes.isNull(queryStringValue) || !queryStringValue.length) {
        return {};
    }
    var $v_0 = {};
    var $v_1 = queryStringValue.split('&');
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2].split('=');
        $v_0[$v_3[0].toLowerCase()] = CrmEncodeDecode.CrmUrlDecode($v_3[1]);
    }
    return $v_0;
}
function createEncodedQueryString(parameters) {
    var $v_0 = '';
    var $$dict_5 = parameters;
    for (var $$key_6 in $$dict_5) {
        var $v_1 = { key: $$key_6, value: $$dict_5[$$key_6] };
        var $v_2 = $v_1.key;
        var $v_3 = CrmEncodeDecode.CrmUrlEncode($v_1.value);
        $v_0 += String.format('{0}={1}&', $v_2, $v_3);
    }
    return $v_0.substr(0, $v_0.length - 1);
}


function _Array() {
}
_Array.mapArray = function(T, array, callback) {
    if (Sales.Common.Framework.JsTypes.isNull(array)) {
        return new Array(0);
    }
    var $v_0 = new Array(array.length);
    for (var $v_1 = 0; $v_1 < array.length; $v_1++) {
        $v_0[$v_1] = callback(array[$v_1]);
    }
    return $v_0;
}
_Array.map = function(T, array, callback) {
    return _Array.mapArray(T, array, callback);
}
_Array.each = function(T, array, callback) {
    for (var $v_0 = 0; $v_0 < array.length; $v_0++) {
        callback($v_0, array[$v_0]);
    }
}
_Array.filterArray = function(array, callback) {
    if (Sales.Common.Framework.JsTypes.isNull(array)) {
        return [];
    }
    var $v_0 = [];
    for (var $v_1 = 0; $v_1 < array.length; $v_1++) {
        if (callback(array[$v_1])) {
            $v_0[$v_0.length] = array[$v_1];
        }
    }
    return $v_0;
}
_Array.filter = function(T, array, callback) {
    return _Array.filterArray(array, callback);
}
_Array.insertRange = function(array, index, arrayToInsert) {
    if (Sales.Common.Framework.JsTypes.isNull(array)) {
        throw Error.argumentNull('array');
    }
    if (Sales.Common.Framework.JsTypes.isNull(arrayToInsert)) {
        return array;
    }
    if (!index) {
        array.unshift.apply(array, arrayToInsert);
    }
    else {
        for (var $v_0 = 0; $v_0 < array.length; $v_0++) {
            array.splice(index + $v_0, 0, arrayToInsert[$v_0]);
        }
    }
    return array;
}
_Array.removeDuplicatesFromArrayList = function(list) {
    return _Array.removeDuplicates(Object, list);
}
_Array.removeDuplicates = function(T, objects) {
    if (Sales.Common.Framework.JsTypes.isNull(objects)) {
        return new Array(0);
    }
    var $v_0 = [];
    for (var $v_1 = 0; $v_1 < objects.length; $v_1++) {
        if (!Array.contains($v_0, objects[$v_1])) {
            Array.add($v_0, objects[$v_1]);
        }
    }
    return $v_0;
}
_Array.removeRangeFromArray = function(array, index, count) {
    if (Sales.Common.Framework.JsTypes.isNull(array)) {
        return array;
    }
    return array.splice(index, count);
}
_Array.removeRange = function(T, objects, index, count) {
    return _Array.removeRangeFromArray(objects, index, count);
}


function _DateTime() {
}
_DateTime.get_now = function() {
    return new Date();
}


function _Dictionary() {
}
_Dictionary.count = function(dictionary) {
    var $v_0 = 0;
    var $$dict_3 = dictionary;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0++;
    }
    return $v_0;
}
_Dictionary.keys = function(dictionary) {
    var $v_0 = new Array(0);
    var $$dict_3 = dictionary;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0[$v_0.length] = $v_1.key;
    }
    return $v_0;
}
_Dictionary.toArray = function(T, dictionary) {
    var $v_0 = new Array(_Dictionary.count(dictionary));
    var $v_1 = 0;
    var $$dict_5 = dictionary;
    for (var $$key_6 in $$dict_5) {
        var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_0[$v_1] = $v_2.value;
        $v_1++;
    }
    return $v_0;
}


function _Event() {
}
_Event.fireEvent = function(T, _events, eventName, sender, args) {
    if (!_events) {
        return;
    }
    var $v_0 = _events.getHandler(eventName);
    if ($v_0) {
        $v_0(sender, args);
    }
}


function _Nullable$1(value) {
    this.$2_0 = ((this.$$gta['_Nullable$1']['T'] === Number || Type.isEnum(this.$$gta['_Nullable$1']['T'])) ? 0 : (this.$$gta['_Nullable$1']['T'] === Boolean) ? false : null);
    this.$2_0 = value;
}
_Nullable$1.$$ = function(T) {
    var $$cn = '_Nullable$1' + '$' + T.getName().replace(/\./g, '_');
    if (!window[$$cn]) {
        var $$ccr = window[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['_Nullable$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            _Nullable$1.apply(this, $v_0);
        };
        $$ccr.registerClass($$cn);
        var $$dict_5 = _Nullable$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return window[$$cn];
}
_Nullable$1.prototype = {
    
    get_hasValue: function() {
        return Sales.Common.Framework.JsTypes.isNull(this.$2_0);
    },
    
    get_value: function() {
        return this.$2_0;
    }
}


function _RegularExpression() {
}
_RegularExpression.parse = function(s) {
    if (s.startsWith('/')) {
        var $v_0 = s.lastIndexOf('/');
        if ($v_0 > 1) {
            var $v_1 = s.substring(1, $v_0);
            var $v_2 = s.substr($v_0 + 1);
            return new RegExp($v_1, $v_2);
        }
    }
    return null;
}


function _String() {
}
_String.isNullOrEmpty = function(value) {
    return (null === value) || _String.isUndefined(value) || value === '';
}
_String.isNullOrWhiteSpace = function(value) {
    return _String.isNullOrEmpty(value) || value.trim() === '';
}
_String.hashCode = function(value) {
    var $v_0 = 0;
    for (var $v_1 = 0; $v_1 < value.length; ++$v_1) {
        var $v_2 = value.charCodeAt($v_1);
        $v_0 = (($v_0 << 5) - $v_0) + $v_2;
        $v_0 = $v_0 & $v_0;
    }
    return $v_0;
}
_String.join = function(separator, values) {
    return values.join(separator);
}
_String.isUndefined = function(value) {
    return value === undefined;
}
_String.format = function(format, arg0, arg1, arg2, arg3, arg4, arg5) {
    if (_String.isUndefined(arg0) && _String.isUndefined(arg1) && _String.isUndefined(arg2) && _String.isUndefined(arg3) && _String.isUndefined(arg4) && _String.isUndefined(arg5)) {
        return format;
    }
    return String.format(format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_String.replaceNewlineWithEnding = function(text, ending) {
    if (_String.isNullOrEmpty(text)) {
        return '';
    }
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = text.split(_String.$4);
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        if (!_String.isNullOrWhiteSpace($v_1[$v_2])) {
            $v_0.append($v_1[$v_2]);
            $v_0.append(ending);
        }
    }
    return $v_0.toString();
}
_String.normalizeNewLine = function(text, ending) {
    if (_String.isNullOrEmpty(text)) {
        return '';
    }
    var $v_0 = _String.$7(_String.$5, text, ending);
    return _String.$7(_String.$6, $v_0, ending);
}
_String.$7 = function($p0, $p1, $p2) {
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = $p1.split($p0);
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        $v_0.append($v_1[$v_2]);
        if ($v_2 !== $v_1.length - 1) {
            $v_0.append($p2);
        }
    }
    return $v_0.toString();
}
_String.replaceAll = function(text, patternText, replaceText) {
    var $v_0 = text;
    while ($v_0.indexOf(patternText) >= 0) {
        $v_0 = $v_0.replace(patternText, replaceText);
    }
    return $v_0;
}
_String.replaceFirst = function(text, patternText, replaceText) {
    var $v_0 = text;
    var $v_1 = text.indexOf(patternText);
    if ($v_1 >= 0) {
        $v_0 = _String.remove($v_0, $v_1, patternText.length);
        $v_0 = _String.insert($v_0, $v_1, replaceText);
    }
    return $v_0;
}
_String.remove = function(text, index, count) {
    if (_String.isNullOrEmpty(text)) {
        return '';
    }
    if (Sales.Common.Framework.JsTypes.isNull(count) || index + count > text.length) {
        return text.substr(0, index);
    }
    return text.substr(0, index) + text.substr(index + count);
}
_String.indexOfAny = function(text, chars, startIndex, count) {
    if (Sales.Common.Framework.JsTypes.isNull(text)) {
        return -1;
    }
    if (Sales.Common.Framework.JsTypes.isNull(chars)) {
        return -1;
    }
    var $v_0 = text.length;
    if ($v_0 <= 0) {
        return -1;
    }
    startIndex = (Sales.Common.Framework.JsTypes.isNull(startIndex)) ? 0 : startIndex;
    count = (Sales.Common.Framework.JsTypes.isNull(count)) ? 0 : count;
    var $v_1 = startIndex + count - 1;
    if ($v_1 >= $v_0) {
        $v_1 = $v_0 - 1;
    }
    for (var $v_2 = startIndex; $v_2 <= $v_1; $v_2++) {
        if (chars.indexOf(text.charAt($v_2)) >= 0) {
            return $v_2;
        }
    }
    return -1;
}
_String.insert = function(text, index, value) {
    if (_String.isNullOrEmpty(value)) {
        return text;
    }
    if (Sales.Common.Framework.JsTypes.isNull(index)) {
        return value + text;
    }
    var $v_0 = text.substr(0, index);
    var $v_1 = text.substr(index);
    return $v_0 + value + $v_1;
}


function _Type() {
}
_Type.hasField = function(instance, name) {
    return !Sales.Common.Framework.JsTypes.isNull(instance[name]);
}
_Type.getField = function(instance, name) {
    return instance[name];
}
_Type.hasMethod = function(instance, name) {
    return typeof(instance[name]) === 'function';
}
_Type.hasProperty = function(instance, name) {
    return !Sales.Common.Framework.JsTypes.isNull(instance['get_' + name]);
}


Type.registerNamespace('Sales.Common.Framework.Loaders');

Sales.Common.Framework.Loaders.ConcurrentContentLoaderData = function() {
    this.$$d_setError = Function.createDelegate(this, this.setError);
    this.$$d_setResult = Function.createDelegate(this, this.setResult);
    this.loadContentCallbacks = new Array(0);
    this.errorCallbacks = new Array(0);
}
Sales.Common.Framework.Loaders.ConcurrentContentLoaderData.prototype = {
    loadContentInProgress: false,
    error: false,
    content: null,
    
    setResult: function($p0) {
        if (!this.loadContentInProgress) {
            throw Error.invalidOperation('Invalid request state');
        }
        this.loadContentInProgress = false;
        this.content = $p0;
        var $$t_3 = this;
        _Array.each(Function, this.loadContentCallbacks, function($p1_0, $p1_1) {
            $p1_1($p0);
        });
        this.$3_0();
    },
    
    setError: function($p0, $p1, $p2) {
        if (!this.loadContentInProgress) {
            throw Error.invalidOperation('Invalid request state');
        }
        this.loadContentInProgress = false;
        this.error = true;
        var $$t_7 = this;
        _Array.each(Function, this.errorCallbacks, function($p1_0, $p1_1) {
            return $p1_1($p0, $p1, $p2);
        });
        this.$3_0();
    },
    
    $3_0: function() {
        this.loadContentCallbacks = null;
        this.errorCallbacks = null;
    },
    
    addCallbacks: function($p0, $p1) {
        if (!Sales.Common.Framework.JsTypes.isNull($p0)) {
            this.loadContentCallbacks[this.loadContentCallbacks.length] = $p0;
        }
        if (!Sales.Common.Framework.JsTypes.isNull($p1)) {
            this.errorCallbacks[this.errorCallbacks.length] = $p1;
        }
    }
}


Sales.Common.Framework.Loaders.ConcurrentContentLoader = function() {
    this.$1_1 = {};
    Sales.Common.Framework.Loaders.ConcurrentContentLoader.initializeBase(this);
}
Sales.Common.Framework.Loaders.ConcurrentContentLoader.prototype = {
    
    loadContent: function(uri, dataType, successCallback, errorCallback) {
        if (Sales.Common.Framework.JsTypes.isNull(uri)) {
            throw Error.argumentNull('uri');
        }
        var $v_0 = this.$1_1[uri];
        if (Sales.Common.Framework.JsTypes.isNull($v_0) || $v_0.error) {
            $v_0 = new Sales.Common.Framework.Loaders.ConcurrentContentLoaderData();
            $v_0.addCallbacks(successCallback, errorCallback);
            this.$8_1($v_0, uri, dataType);
            this.$1_1[uri] = $v_0;
        }
        else if ($v_0.loadContentInProgress) {
            $v_0.addCallbacks(successCallback, errorCallback);
        }
        else {
            if (!Sales.Common.Framework.JsTypes.isNull(successCallback)) {
                successCallback($v_0.content);
            }
        }
    },
    
    $8_1: function($p0, $p1, $p2) {
        $p0.loadContentInProgress = true;
        Sales.Common.Framework.Loaders.ContentLoader.prototype.loadContent.call(this, $p1, $p2, $p0.$$d_setResult, $p0.$$d_setError);
    },
    
    dispose: function() {
        this.$1_1 = null;
    }
}


Sales.Common.Framework.Loaders.ContentLoader = function() {
}
Sales.Common.Framework.Loaders.ContentLoader.prototype = {
    
    loadContent: function(uri, dataType, successCallback, errorCallback) {
        var $v_0 = new jQueryAjaxOptions();
        $v_0.async = true;
        $v_0.type = 'GET';
        $v_0.url = uri;
        $v_0.dataType = dataType;
        var $$t_B = this;
        $v_0.success = function($p1_0, $p1_1, $p1_2) {
            successCallback($p1_0);
        };
        if (errorCallback) {
            $v_0.error = errorCallback;
        }
        else {
            var $$t_C = this;
            $v_0.error = function($p1_0, $p1_1, $p1_2) {
                if (!$p1_0.status) {
                    return;
                }
                throw Error.create('Unable to load requested file: ' + uri);
            };
        }
        $P_CRM.ajax($v_0);
    }
}


Sales.Common.Framework.JsTypes.registerClass('Sales.Common.Framework.JsTypes');
_Array.registerClass('_Array');
_DateTime.registerClass('_DateTime');
_Dictionary.registerClass('_Dictionary');
_Event.registerClass('_Event');
_RegularExpression.registerClass('_RegularExpression');
_String.registerClass('_String');
_Type.registerClass('_Type');
Sales.Common.Framework.Loaders.ConcurrentContentLoaderData.registerClass('Sales.Common.Framework.Loaders.ConcurrentContentLoaderData');
Sales.Common.Framework.Loaders.ContentLoader.registerClass('Sales.Common.Framework.Loaders.ContentLoader');
Sales.Common.Framework.Loaders.ConcurrentContentLoader.registerClass('Sales.Common.Framework.Loaders.ConcurrentContentLoader', Sales.Common.Framework.Loaders.ContentLoader, Sys.IDisposable);
_DateTime.empty = null;
_String.empty = '';
_String.$4 = new RegExp('[\n\r]+');
_String.$5 = new RegExp('\r\n|\n\r');
_String.$6 = new RegExp('\n|\r');
