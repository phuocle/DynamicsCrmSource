
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