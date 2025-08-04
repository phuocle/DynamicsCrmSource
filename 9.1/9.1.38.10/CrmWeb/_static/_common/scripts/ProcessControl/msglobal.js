
Microsoft.Crm.Client.Core.Framework2 = function Microsoft_Crm_Client_Core_Framework() { }

Microsoft.Crm.Client.Core.Framework2.IList$1 = function () { }
Microsoft.Crm.Client.Core.Framework2.IList$1.$$ = function Microsoft_Crm_Client_Core_Framework_IList$1$$$(T) {
	var $$cn = 'IList$1' + '$' + T.getName().replace(/\./g, '_');
	if (!Microsoft.Crm.Client.Core.Framework2[$$cn]) {
		var $$ccr = Microsoft.Crm.Client.Core.Framework2[$$cn] = function () {
		};
		$$ccr.registerInterface('Microsoft.Crm.Client.Core.Framework2.' + $$cn);
	}
	return Microsoft.Crm.Client.Core.Framework2[$$cn];
}
Microsoft.Crm.Client.Core.Framework2.IList$1.registerInterface('Microsoft.Crm.Client.Core.Framework2.IList$1');

Microsoft.Crm.Client.Core.Framework2.List$1 = function Microsoft_Crm_Client_Core_Framework_List$1(items)
{
    this._items$p$0 = items || new Array(0);
}
Microsoft.Crm.Client.Core.Framework2.List$1.$$ = function Microsoft_Crm_Client_Core_Framework_List$1$$$(T) {
    var $$cn = 'List$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Framework2[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Framework2[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Framework2.List$1'] = {'T': T};
            var newArgs = [];
            for (var i = 0; i < arguments.length; ++i) {
                newArgs[i] = arguments[i];
            }
            Microsoft.Crm.Client.Core.Framework2.List$1.apply(this, newArgs);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Framework2.' + $$cn, null, Microsoft.Crm.Client.Core.Framework2.IList$1.$$(T));
        var $$dict_5 = Microsoft.Crm.Client.Core.Framework2.List$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Framework2[$$cn];
}
Microsoft.Crm.Client.Core.Framework2.List$1.prototype = {
    _items$p$0: null,
    
    get_Items: function Microsoft_Crm_Client_Core_Framework_List$1$get_Items() {
        return this._items$p$0;
    },
    
    get_Count: function Microsoft_Crm_Client_Core_Framework_List$1$get_Count() {
        return this._items$p$0.length;
    },
    
    get_item: function Microsoft_Crm_Client_Core_Framework_List$1$get_item(index) {
        return this._items$p$0[index];
    },
    
    set_item: function Microsoft_Crm_Client_Core_Framework_List$1$set_item(index, value) {
        this._items$p$0[index] = value;
        return value;
    },
    
    add: function Microsoft_Crm_Client_Core_Framework_List$1$add(item) {
        Array.add(this._items$p$0, item);
    },
    
    addRange: function Microsoft_Crm_Client_Core_Framework_List$1$addRange(items) {
        Array.addRange(this._items$p$0, items);
    },
    
    clear: function Microsoft_Crm_Client_Core_Framework_List$1$clear() {
        Array.clear(this._items$p$0);
    },
    
    contains: function Microsoft_Crm_Client_Core_Framework_List$1$contains(item) {
        return Array.contains(this._items$p$0, item);
    },
    
    indexOf: function Microsoft_Crm_Client_Core_Framework_List$1$indexOf(item, startIndex) {
        startIndex = startIndex || 0;
        return Array.indexOf(this._items$p$0, item, startIndex);
    },
    
    insert: function Microsoft_Crm_Client_Core_Framework_List$1$insert(index, item) {
        Array.insert(this._items$p$0, index, item);
    },
    
    remove: function Microsoft_Crm_Client_Core_Framework_List$1$remove(item) {
        Array.remove(this._items$p$0, item);
    },
    
    removeAt: function Microsoft_Crm_Client_Core_Framework_List$1$removeAt(index) {
        Array.removeAt(this._items$p$0, index);
    },
    
    sort: function Microsoft_Crm_Client_Core_Framework_List$1$sort(compareCallback) {
        if (Microsoft.Crm.Client.Core.Framework2._Script.isNullOrUndefined(compareCallback)) {
            (this._items$p$0).sort();
        }
        else {
            (this._items$p$0).sort(compareCallback);
        }
    },
    
    toArray: function Microsoft_Crm_Client_Core_Framework_List$1$toArray() {
        var result = new Array(this.get_Count());
        for (var i = 0; i < this.get_Count(); i++) {
            result[i] = this.get_item(i);
        }
        return result;
    }
} 

Microsoft.Crm.Client.Core.Framework2.Guid = function(guidValue) {
    this._getObjectData$i = this.getObjectData;
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (88,3)
    this._rawGuid$p = Microsoft.Crm.Client.Core.Framework.Guid._getParsedString$p(guidValue);
    if (Microsoft.Crm.Client.Core.Framework._String._isNullOrEmpty$i(this._rawGuid$p)) {
        throw Error.argumentOutOfRange(String.format('\'{0}\' is not a valid Guid value.', guidValue));
    }
}
Microsoft.Crm.Client.Core.Framework2.Guid._getParsedString$p = function(guidValue) {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (102,3)
    if (Microsoft.Crm.Client.Core.Framework._String._isNullOrEmpty$i(guidValue)) {
        return null;
    }
    guidValue = guidValue.toLowerCase();
    if (Microsoft.Crm.Client.Core.Framework.Guid.get__hyphenGuidVerifierPattern$p().test(guidValue) || Microsoft.Crm.Client.Core.Framework.Guid.get__braceAndHyphenGuidVerifierPattern$p().test(guidValue)) {
        return guidValue.replace(Microsoft.Crm.Client.Core.Framework.Guid.get__guidStripperPattern$p(), '');
    }
    else if (Microsoft.Crm.Client.Core.Framework.Guid.get__contiguousGuidVerifierPattern$p().test(guidValue)) {
        return guidValue;
    }
    return null;
}
Microsoft.Crm.Client.Core.Framework2.Guid.get_empty = function() {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (130,4)
    return Microsoft.Crm.Client.Core.Framework.Guid._empty$p || (Microsoft.Crm.Client.Core.Framework.Guid._empty$p = new Microsoft.Crm.Client.Core.Framework.Guid('00000000-0000-0000-0000-000000000000'));
}
Microsoft.Crm.Client.Core.Framework2.Guid.get__guidStripperPattern$p = function() {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (138,4)
    return Microsoft.Crm.Client.Core.Framework.Guid._guidStripperPattern$p || (Microsoft.Crm.Client.Core.Framework.Guid._guidStripperPattern$p = new RegExp('{|}|-', 'g'));
}
Microsoft.Crm.Client.Core.Framework2.Guid.get__hyphenGuidVerifierPattern$p = function() {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (146,4)
    return Microsoft.Crm.Client.Core.Framework.Guid._hyphenGuidVerifierPattern$p || (Microsoft.Crm.Client.Core.Framework.Guid._hyphenGuidVerifierPattern$p = new RegExp('^(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}$'));
}
Microsoft.Crm.Client.Core.Framework2.Guid.get__braceAndHyphenGuidVerifierPattern$p = function() {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (154,4)
    return Microsoft.Crm.Client.Core.Framework.Guid._braceAndHyphenGuidVerifierPattern$p || (Microsoft.Crm.Client.Core.Framework.Guid._braceAndHyphenGuidVerifierPattern$p = new RegExp('^{(\\d|[a-f]){8}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){4}-(\\d|[a-f]){12}}$'));
}
Microsoft.Crm.Client.Core.Framework2.Guid.get__contiguousGuidVerifierPattern$p = function() {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (162,4)
    return Microsoft.Crm.Client.Core.Framework.Guid._contiguousGuidVerifierPattern$p || (Microsoft.Crm.Client.Core.Framework.Guid._contiguousGuidVerifierPattern$p = new RegExp('^(\\d|[a-f]){32}$'));
}
Microsoft.Crm.Client.Core.Framework2.Guid.createFromObjectData = function(data) {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (170,3)
    var rawguid = data['rawguid'];
    return new Microsoft.Crm.Client.Core.Framework.Guid(rawguid);
}
Microsoft.Crm.Client.Core.Framework2.Guid.tryCreate = function(guidValue) {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (184,3)
    var rawGuid = Microsoft.Crm.Client.Core.Framework.Guid._getParsedString$p(guidValue);
    if (!Microsoft.Crm.Client.Core.Framework._String._isNullOrEmpty$i(rawGuid)) {
        return new Microsoft.Crm.Client.Core.Framework.Guid(rawGuid);
    }
    return Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
}
Microsoft.Crm.Client.Core.Framework2.Guid.formatToUpper = function(sourceGuid) {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (206,3)
    if (_Script._isNullOrUndefined$i(sourceGuid)) {
        return sourceGuid;
    }
    sourceGuid = sourceGuid.toLowerCase();
    if (Microsoft.Crm.Client.Core.Framework.Guid.get__braceAndHyphenGuidVerifierPattern$p().test(sourceGuid)) {
        return sourceGuid.toUpperCase();
    }
    else {
        return String.format('{{{0}}}', sourceGuid.toUpperCase());
    }
}
Microsoft.Crm.Client.Core.Framework2.Guid.removeBrackets = function(sourceGuid) {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (232,3)
    if (_Script._isNullOrUndefined$i(sourceGuid)) {
        return sourceGuid;
    }
    return sourceGuid.replace('{', '').replace('}', '').trim();
}
Microsoft.Crm.Client.Core.Framework2.Guid._isNullOrEmpty$i = function(guid) {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (248,3)
    if (_Script._isNullOrUndefined$i(guid) || !guid.length) {
        return true;
    }
    if (new Microsoft.Crm.Client.Core.Framework.Guid(guid).equals(Microsoft.Crm.Client.Core.Framework.Guid._empty$p)) {
        return true;
    }
    return false;
}
Microsoft.Crm.Client.Core.Framework2.Guid.newGuid = function() {
    // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (373,3)
    var HexChars = '0123456789abcdef';
    var GuidSize = 36;
    var sGuid = new Sys.StringBuilder();
    for (var i = 0; i < GuidSize; i++) {
        if (i === 14) {
            sGuid.append('4');
            continue;
        }
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            sGuid.append('-');
            continue;
        }
        if (i === 19) {
            var n = Math.floor(Math.random() * 16);
            HexChars.substr(n & 3 | 8, 1);
        }
        sGuid.append(HexChars.substr(Math.floor(Math.random() * 16), 1));
    }
    return new Microsoft.Crm.Client.Core.Framework.Guid(sGuid.toString());
}

Microsoft.Crm.Client.Core.Framework2.Guid.prototype = {
    _rawGuid$p: null,
    _formattedGuid$p: null,
    
    getObjectData: function() {
        // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (271,3)
        var data = {};
        data['rawguid'] = this._rawGuid$p;
        return data;
    },
    
    equals: function(obj) {
        // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (290,3)
        if (Microsoft.Crm.Client.Core.Framework.Guid.isInstanceOfType(obj)) {
            return (obj)._rawGuid$p === this._rawGuid$p;
        }
        if (String.isInstanceOfType(obj)) {
            try {
                var otherGuid = new Microsoft.Crm.Client.Core.Framework.Guid(obj);
                return otherGuid._rawGuid$p === this._rawGuid$p;
            }
            catch ($$e_2) {
                return false;
            }
        }
        return false;
    },
    
    getHashCode: function() {
        // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (320,3)
        return (!Microsoft.Crm.Client.Core.Framework._String._isNullOrEmpty$i(this._rawGuid$p)) ? Microsoft.Crm.Client.Core.Framework._String._hashCode$i(this._rawGuid$p) : 0;
    },
    
    toString: function() {
        // file:///d:/crm2/crm/src/client/application/crmsrc/core/framework/utils/guid.cs (336,3)
        if (!this._formattedGuid$p) {
            this._formattedGuid$p = this._rawGuid$p.substring(0, 8) + '-' + this._rawGuid$p.substring(8, 12) + '-' + this._rawGuid$p.substring(12, 16) + '-' + this._rawGuid$p.substring(16, 20) + '-' + this._rawGuid$p.substring(20, 32);
        }
        return this._formattedGuid$p;
    }
}