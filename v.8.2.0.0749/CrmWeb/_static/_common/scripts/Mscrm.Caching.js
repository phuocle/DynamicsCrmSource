Type.registerNamespace("Mscrm.Caching");
Mscrm.Caching.IKeyValueCache$2 = function() {};
Mscrm.Caching.IKeyValueCache$2.$$ = function(TKey, TValue) {
    var $$cn = "IKeyValueCache$2$" + TKey.getName().replace(/\./g, "_") + "$" + TValue.getName().replace(/\./g, "_");
    if (!Mscrm.Caching[$$cn]) {
        var $$ccr = Mscrm.Caching[$$cn] = function() {};
        $$ccr.registerInterface("Mscrm.Caching." + $$cn)
    }
    return Mscrm.Caching[$$cn]
};
Mscrm.Caching.IKeyValueCache$2.registerInterface("Mscrm.Caching.IKeyValueCache$2");
Mscrm.Caching.IStringCache = function() {};
Mscrm.Caching.IStringCache.registerInterface("Mscrm.Caching.IStringCache");
Mscrm.Caching.CacheWithExpiration = function(cache, expiration) {
    if (!cache) throw Error.argumentNull("cache");
    if (typeof expiration === "undefined" || !expiration) expiration = 3.6e6;
    this.$2_0 = cache;
    this.$1_0 = expiration
};
Mscrm.Caching.CacheWithExpiration.prototype = {
    $2_0: null,
    $1_0: 0,
    get_expiration: function() { return this.$1_0 },
    set_expiration: function(value) {
        this.$1_0 = value;
        return value
    },
    $0_0: 0,
    get_cacheMisses: function() { return this.$0_0 },
    set_cacheMisses: function(value) {
        this.$0_0 = value;
        return value
    },
    $3_0: 0,
    get_cacheHits: function() { return this.$3_0 },
    set_cacheHits: function(value) {
        this.$3_0 = value;
        return value
    },
    get_item: function(key) {
        var $v_0 = this.$2_0.get_item(key);
        if (!$v_0) {
            this.$0_0++;
            return null
        }
        var $v_1 = this.$9_0($v_0);
        !$v_1 && this.$2_0.set_item(key, null);
        return $v_1
    },
    set_item: function(key, value) {
        var $v_0 = (new Date).getTime(), $v_1 = $v_0 + this.$1_0, $v_2 = String.format("Exp:{0};{1}", $v_1, value);
        this.$2_0.set_item(key, $v_2);
        return value
    },
    $9_0: function($p0) {
        var $v_0 = $p0.indexOf(";"), $v_1 = $p0.substring(4, $v_0), $v_2 = Number.parseInvariant($v_1);
        if ($v_2 < (new Date).getTime()) {
            this.$0_0++;
            return null
        } else {
            this.$3_0++;
            return $p0.substr($v_0 + 1)
        }
    }
};
Mscrm.Caching.CompoundKeyCache$3 = function(keyTransformer, innerCache) {
    if (!keyTransformer) throw Error.argumentNull("keyTransformer");
    if (!innerCache) throw Error.argumentNull("innerCache");
    this.$5_0 = keyTransformer;
    this.$4_0 = innerCache
};
Mscrm.Caching.CompoundKeyCache$3.$$ = function(TKey, TInnerKey, TValue) {
    var $$cn = "CompoundKeyCache$3$" +
        TKey.getName().replace(/\./g, "_") +
        "$" +
        TInnerKey.getName().replace(/\./g, "_") +
        "$" +
        TValue.getName().replace(/\./g, "_");
    if (!Mscrm.Caching[$$cn]) {
        var $$ccr = Mscrm.Caching[$$cn] = function() {
            (this.$$gta = this
                .$$gta ||
                {})["Mscrm.Caching.CompoundKeyCache$3"] = { TKey: TKey, TInnerKey: TInnerKey, TValue: TValue };
            for (var $v_0 = [], $v_1 = 0; $v_1 < arguments.length; ++$v_1) $v_0[$v_1] = arguments[$v_1];
            Mscrm.Caching.CompoundKeyCache$3.apply(this, $v_0)
        };
        $$ccr.registerClass("Mscrm.Caching." + $$cn, null, Mscrm.Caching.IKeyValueCache$2.$$(TKey, TValue));
        var $$dict_7 = Mscrm.Caching.CompoundKeyCache$3.prototype;
        for (var $$key_8 in $$dict_7) {
            var $$entry_9 = { key: $$key_8, value: $$dict_7[$$key_8] };
            if ("constructor" !== $$entry_9.key) $$ccr.prototype[$$entry_9.key] = $$entry_9.value
        }
    }
    return Mscrm.Caching[$$cn]
};
Mscrm.Caching.CompoundKeyCache$3.prototype = {
    $5_0: null,
    $4_0: null,
    get_item: function(key) {
        var $v_0 = this.$5_0(key);
        return this.$4_0.get_item($v_0)
    },
    set_item: function(key, value) {
        var $v_0 = this.$5_0(key);
        this.$4_0.set_item($v_0, value);
        return value
    }
};
Mscrm.Caching.LocalCaches = function() {};
Mscrm.Caching.LocalStorageCache = function(cacheNamespace) {
    this.$7_0 = Mscrm.CrmCrossBrowser.getLocalStorage(window.self);
    if (!cacheNamespace || cacheNamespace === "") throw Error.argumentNull("cacheNamespace");
    this.$6_0 = "LocalStorageCache/" + cacheNamespace + "/"
};
Mscrm.Caching.LocalStorageCache.getEntityMetadataCache = function(entityLogicalName) {
    if (!entityLogicalName || entityLogicalName === "") throw Error.argumentNull("entityLogicalName");
    return new Mscrm.Caching.LocalStorageCache("Metadata/" + entityLogicalName)
};
Mscrm.Caching.LocalStorageCache.prototype = {
    $6_0: null,
    $8_0: function($p0) { return this.$6_0 + $p0 },
    get_item: function(key) { return this.$7_0.getItem(this.$8_0(key)) },
    set_item: function(key, value) {
        this.$7_0.setItem(this.$8_0(key), value);
        return value
    }
};
Mscrm.Caching.CacheWithExpiration.registerClass("Mscrm.Caching.CacheWithExpiration",
    null,
    Mscrm.Caching.IStringCache,
    Mscrm.Caching.IKeyValueCache$2.$$(String, String));
Mscrm.Caching.LocalCaches.registerClass("Mscrm.Caching.LocalCaches");
Mscrm.Caching.LocalStorageCache.registerClass("Mscrm.Caching.LocalStorageCache",
    null,
    Mscrm.Caching.IStringCache,
    Mscrm.Caching.IKeyValueCache$2.$$(String, String));
Mscrm.Caching.CacheWithExpiration.defaultExpirationTime = 3.6e6;
Mscrm.Caching.LocalCaches.sipIDs = new Mscrm.Caching
    .CacheWithExpiration(new Mscrm.Caching.LocalStorageCache("Presence/SipIDs"), 7.2e6);
Mscrm.Caching.LocalStorageCache.namespacePrefix = "LocalStorageCache/"