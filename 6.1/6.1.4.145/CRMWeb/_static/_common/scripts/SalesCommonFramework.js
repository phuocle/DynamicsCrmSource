Type.registerNamespace('Mscrm');

Mscrm.IDeferredDataProcessingControl = function() {}
Mscrm.IDeferredDataProcessingControl.registerInterface('Mscrm.IDeferredDataProcessingControl');


Type.registerNamespace('Sales.Common.Framework');

Sales.Common.Framework.IList = function() {}
Sales.Common.Framework.IList.$$ = function Sales_Common_Framework_IList$$$(T) {
    var $$cn = 'IList' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Sales.Common.Framework[$$cn]) {
        var $$ccr = Sales.Common.Framework[$$cn] = function() {
        };
        $$ccr.registerInterface('Sales.Common.Framework.' + $$cn);
    }
    return Sales.Common.Framework[$$cn];
}
Sales.Common.Framework.IList.registerInterface('Sales.Common.Framework.IList');


Sales.Common.Framework.List = function Sales_Common_Framework_List(items) {
    this.$0_0 = items || new Array(0);
}
Sales.Common.Framework.List.$$ = function Sales_Common_Framework_List$$$(T) {
    var $$cn = 'List' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Sales.Common.Framework[$$cn]) {
        var $$ccr = Sales.Common.Framework[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Sales.Common.Framework.List'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Sales.Common.Framework.List.apply(this, $v_0);
        };
        $$ccr.registerClass('Sales.Common.Framework.' + $$cn, null, Sales.Common.Framework.IList.$$(T));
        var $$dict_5 = Sales.Common.Framework.List.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Sales.Common.Framework[$$cn];
}
Sales.Common.Framework.List.prototype = {
    $0_0: null,
    
    get_items: function Sales_Common_Framework_List$get_items() {
        return this.$0_0;
    },
    
    get_count: function Sales_Common_Framework_List$get_count() {
        return this.$0_0.length;
    },
    
    get_item: function Sales_Common_Framework_List$get_item(index) {
        return this.$0_0[index];
    },
    set_item: function Sales_Common_Framework_List$set_item(index, value) {
        this.$0_0[index] = value;
        return value;
    },
    
    add: function Sales_Common_Framework_List$add(item) {
        Array.add(this.$0_0, item);
    },
    
    addRange: function Sales_Common_Framework_List$addRange(items) {
        Array.addRange(this.$0_0, items);
    },
    
    clear: function Sales_Common_Framework_List$clear() {
        Array.clear(this.$0_0);
    },
    
    contains: function Sales_Common_Framework_List$contains(item) {
        return Array.contains(this.$0_0, item);
    },
    
    indexOf: function Sales_Common_Framework_List$indexOf(item, startIndex) {
        startIndex = startIndex || 0;
        return Array.indexOf(this.$0_0, item, startIndex);
    },
    
    insert: function Sales_Common_Framework_List$insert(index, item) {
        Array.insert(this.$0_0, index, item);
    },
    
    remove: function Sales_Common_Framework_List$remove(item) {
        Array.remove(this.$0_0, item);
    },
    
    removeAt: function Sales_Common_Framework_List$removeAt(index) {
        Array.removeAt(this.$0_0, index);
    },
    
    filter: function Sales_Common_Framework_List$filter(callback) {
        return new (Sales.Common.Framework.List.$$(this.$$gta['Sales.Common.Framework.List']['T']))(_Array.filter(this.$$gta['Sales.Common.Framework.List']['T'], this.$0_0, callback));
    },
    
    toArray: function Sales_Common_Framework_List$toArray() {
        var $v_0 = new Array(this.$0_0.length);
        for (var $v_1 = 0; $v_1 < this.$0_0.length; $v_1++) {
            $v_0[$v_1] = this.$0_0[$v_1];
        }
        return $v_0;
    },
    
    first: function Sales_Common_Framework_List$first() {
        if (!this.$0_0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this.$0_0[0];
    },
    
    last: function Sales_Common_Framework_List$last() {
        if (!this.$0_0.length) {
            throw Error.invalidOperation('List contains no elements.');
        }
        return this.$0_0[this.get_count() - 1];
    }
}


function parseQueryString(windowLocation) {
    if (IsNull(windowLocation) || isNullOrEmptyString(windowLocation.search)) {
        return {};
    }
    var $v_0 = windowLocation.search.substr(1);
    return parseQueryStringValue($v_0);
}
function parseQueryStringValue(queryStringValue) {
    if (IsNull(queryStringValue)) {
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
    var $$dict_2 = parameters;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        var $v_2 = $v_1.key;
        var $v_3 = CrmEncodeDecode.CrmUrlEncode($v_1.value);
        $v_0 += String.format('{0}={1}&', $v_2, $v_3);
    }
    return $v_0.substr(0, $v_0.length - 1);
}


function _Array() {
}
_Array.mapArray = function _Array$mapArray(T, array, callback) {
    if (IsNull(array)) {
        return new Array(0);
    }
    var $v_0 = new Array(array.length);
    for (var $v_1 = 0; $v_1 < array.length; $v_1++) {
        $v_0[$v_1] = callback(array[$v_1]);
    }
    return $v_0;
}
_Array.map = function _Array$map(T, array, callback) {
    return _Array.mapArray(T, array, callback);
}
_Array.each = function _Array$each(T, array, callback) {
    for (var $v_0 = 0; $v_0 < array.length; $v_0++) {
        callback($v_0, array[$v_0]);
    }
}
_Array.filterArray = function _Array$filterArray(array, callback) {
    if (IsNull(array)) {
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
_Array.filter = function _Array$filter(T, array, callback) {
    return _Array.filterArray(array, callback);
}
_Array.insertRange = function _Array$insertRange(array, index, arrayToInsert) {
    if (IsNull(array)) {
        throw Error.argumentNull('array');
    }
    if (IsNull(arrayToInsert)) {
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
_Array.removeDuplicatesFromArrayList = function _Array$removeDuplicatesFromArrayList(list) {
    return _Array.removeDuplicates(Object, list);
}
_Array.removeDuplicates = function _Array$removeDuplicates(T, objects) {
    if (IsNull(objects)) {
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
_Array.removeRangeFromArray = function _Array$removeRangeFromArray(array, index, count) {
    if (IsNull(array)) {
        return array;
    }
    return array.splice(index, count);
}
_Array.removeRange = function _Array$removeRange(T, objects, index, count) {
    return _Array.removeRangeFromArray(objects, index, count);
}


function _DateTime() {
}
_DateTime.get_now = function _DateTime$get_now() {
    return new Date();
}


function _Dictionary() {
}
_Dictionary.count = function _Dictionary$count(dictionary) {
    var $v_0 = 0;
    var $$dict_2 = dictionary;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        $v_0++;
    }
    return $v_0;
}
_Dictionary.keys = function _Dictionary$keys(dictionary) {
    var $v_0 = new Array(0);
    var $$dict_2 = dictionary;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        $v_0[$v_0.length] = $v_1.key;
    }
    return $v_0;
}
_Dictionary.toArray = function _Dictionary$toArray(T, dictionary) {
    var $v_0 = new Array(_Dictionary.count(dictionary));
    var $v_1 = 0;
    var $$dict_4 = dictionary;
    for (var $$key_5 in $$dict_4) {
        var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
        $v_0[$v_1] = $v_2.value;
        $v_1++;
    }
    return $v_0;
}


function _Event() {
}
_Event.fireEvent = function _Event$fireEvent(T, _events, eventName, sender, args) {
    if (!_events) {
        return;
    }
    var $v_0 = _events.getHandler(eventName);
    if ($v_0) {
        $v_0(sender, args);
    }
}


function _Nullable(value) {
    this.$3_0 = ((this.$$gta['_Nullable']['T'] === Number || Type.isEnum(this.$$gta['_Nullable']['T'])) ? 0 : (this.$$gta['_Nullable']['T'] === Boolean) ? false : null);
    this.$3_0 = value;
}
_Nullable.$$ = function _Nullable$$$(T) {
    var $$cn = '_Nullable' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!window[$$cn]) {
        var $$ccr = window[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['_Nullable'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            _Nullable.apply(this, $v_0);
        };
        $$ccr.registerClass($$cn);
        var $$dict_5 = _Nullable.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return window[$$cn];
}
_Nullable.prototype = {
    
    get_hasValue: function _Nullable$get_hasValue() {
        return IsNull(this.$3_0);
    },
    
    get_value: function _Nullable$get_value() {
        return this.$3_0;
    }
}


function _RegularExpression() {
}
_RegularExpression.parse = function _RegularExpression$parse(s) {
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
_String.isNullOrEmpty = function _String$isNullOrEmpty(value) {
    return (null === value) || _String.isUndefined(value) || value === '';
}
_String.isNullOrWhiteSpace = function _String$isNullOrWhiteSpace(value) {
    return _String.isNullOrEmpty(value) || value.trim() === '';
}
_String.hashCode = function _String$hashCode(value) {
    var $v_0 = 0;
    for (var $v_1 = 0; $v_1 < value.length; ++$v_1) {
        var $v_2 = value.charCodeAt($v_1);
        $v_0 = (($v_0 << 5) - $v_0) + $v_2;
        $v_0 = $v_0 & $v_0;
    }
    return $v_0;
}
_String.join = function _String$join(separator, values) {
    return values.join(separator);
}
_String.isUndefined = function _String$isUndefined(value) {
    return value === undefined;
}
_String.format = function _String$format(format, arg0, arg1, arg2, arg3, arg4, arg5) {
    if (_String.isUndefined(arg0) && _String.isUndefined(arg1) && _String.isUndefined(arg2) && _String.isUndefined(arg3) && _String.isUndefined(arg4) && _String.isUndefined(arg5)) {
        return format;
    }
    return String.format(format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_String.replaceNewlineWithEnding = function _String$replaceNewlineWithEnding(text, ending) {
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
_String.replaceAll = function _String$replaceAll(text, patternText, replaceText) {
    var $v_0 = text;
    while ($v_0.indexOf(patternText) >= 0) {
        $v_0 = $v_0.replace(patternText, replaceText);
    }
    return $v_0;
}
_String.replaceFirst = function _String$replaceFirst(text, patternText, replaceText) {
    var $v_0 = text;
    var $v_1 = text.indexOf(patternText);
    if ($v_1 >= 0) {
        $v_0 = _String.remove($v_0, $v_1, patternText.length);
        $v_0 = _String.insert($v_0, $v_1, replaceText);
    }
    return $v_0;
}
_String.remove = function _String$remove(text, index, count) {
    if (_String.isNullOrEmpty(text)) {
        return '';
    }
    if (IsNull(count) || index + count > text.length) {
        return text.substr(0, index);
    }
    return text.substr(0, index) + text.substr(index + count);
}
_String.indexOfAny = function _String$indexOfAny(text, chars, startIndex, count) {
    if (IsNull(text)) {
        return -1;
    }
    if (IsNull(chars)) {
        return -1;
    }
    var $v_0 = text.length;
    if ($v_0 <= 0) {
        return -1;
    }
    startIndex = (IsNull(startIndex)) ? 0 : startIndex;
    count = (IsNull(count)) ? 0 : count;
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
_String.insert = function _String$insert(text, index, value) {
    if (_String.isNullOrEmpty(value)) {
        return text;
    }
    if (IsNull(index)) {
        return value + text;
    }
    var $v_0 = text.substr(0, index);
    var $v_1 = text.substr(index);
    return $v_0 + value + $v_1;
}


function _Type() {
}
_Type.hasField = function _Type$hasField(instance, name) {
    return !IsNull(instance[name]);
}
_Type.getField = function _Type$getField(instance, name) {
    return instance[name];
}
_Type.hasMethod = function _Type$hasMethod(instance, name) {
    return typeof(instance[name]) === 'function';
}
_Type.hasProperty = function _Type$hasProperty(instance, name) {
    return !IsNull(instance['get_' + name]);
}


Type.registerNamespace('Sales.Common.Framework.Loaders');

Sales.Common.Framework.Loaders.ConcurrentContentLoaderData = function Sales_Common_Framework_Loaders_ConcurrentContentLoaderData() {
    this.loadContentCallbacks = new Array(0);
}
Sales.Common.Framework.Loaders.ConcurrentContentLoaderData.prototype = {
    loadContentInProgress: false,
    content: null
}


Sales.Common.Framework.Loaders.ConcurrentContentLoader = function Sales_Common_Framework_Loaders_ConcurrentContentLoader() {
    Sales.Common.Framework.Loaders.ConcurrentContentLoader.initializeBase(this);
}
Sales.Common.Framework.Loaders.ConcurrentContentLoader.prototype = {
    
    loadContent: function Sales_Common_Framework_Loaders_ConcurrentContentLoader$loadContent(uri, dataType, successCallback, errorCallback) {
        var $v_0;
        if (IsNull(Sales.Common.Framework.Loaders.ConcurrentContentLoader.$2[uri])) {
            $v_0 = new Sales.Common.Framework.Loaders.ConcurrentContentLoaderData();
            Sales.Common.Framework.Loaders.ConcurrentContentLoader.$2[uri] = $v_0;
        }
        else {
            $v_0 = Sales.Common.Framework.Loaders.ConcurrentContentLoader.$2[uri];
        }
        if (IsNull($v_0.content)) {
            if (!$v_0.loadContentInProgress) {
                $v_0.loadContentInProgress = true;
                var $$t_8 = this;
                Sales.Common.Framework.Loaders.ContentLoader.prototype.loadContent.call(this, uri, dataType, function($p1_0) {
                    $v_0.content = $p1_0;
                    successCallback($p1_0);
                    if (!IsNull($v_0.loadContentCallbacks)) {
                        _Array.each(Function, $v_0.loadContentCallbacks, function($p2_0, $p2_1) {
                            $p2_1($p1_0);
                        });
                        $v_0.loadContentCallbacks = new Array(0);
                    }
                }, errorCallback);
            }
            else {
                $v_0.loadContentCallbacks[$v_0.loadContentCallbacks.length] = successCallback;
            }
        }
        else {
            successCallback($v_0.content);
        }
        Sales.Common.Framework.Loaders.ConcurrentContentLoader.$2[uri] = $v_0;
    },
    
    dispose: function Sales_Common_Framework_Loaders_ConcurrentContentLoader$dispose() {
        Sales.Common.Framework.Loaders.ConcurrentContentLoader.$2 = null;
    }
}


Sales.Common.Framework.Loaders.ContentLoader = function Sales_Common_Framework_Loaders_ContentLoader() {
}
Sales.Common.Framework.Loaders.ContentLoader.prototype = {
    
    loadContent: function Sales_Common_Framework_Loaders_ContentLoader$loadContent(uri, dataType, successCallback, errorCallback) {
        var $v_0 = new jQueryAjaxOptions();
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
                throw Error.create('Unable to load requested file:' + uri);
            };
        }
        $P_CRM.ajax($v_0);
    }
}


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
Sales.Common.Framework.Loaders.ConcurrentContentLoader.$2 = {};
