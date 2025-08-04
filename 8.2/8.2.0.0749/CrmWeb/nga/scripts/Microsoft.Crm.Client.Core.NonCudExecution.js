Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$9e = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$9e.$2a = function(n, t, i, r) {
    var u = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V),
            Microsoft.Crm.Client.Core.Framework.$4),
        f = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K(n, t, i, r);
    return f.$3IB().then(function(n) { u.resolve(n) }, function(n) { u.reject(n) }), u.promise()
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$M3 = function(n, t) {
    this.$we = n;
    this.$Rr = t
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$M3.prototype = { $we: null, $Rr: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MR = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MR.prototype = {
    $2B: function(n) {
        var i = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MQ,
            t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            r = i.$2yR(n.$Rq),
            u = this,
            f = this;
        return r.$3I6(n).then(function(n) { t.resolve(n) }, function(n) { t.reject(n) }), t.promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MQ = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MQ.prototype = {
    $kL: null,
    $2yR: function(n) {
        switch (n) {
        case"Create":
            this.$kL = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MM;
            break;
        case"Retrieve":
            this.$kL = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MO;
            break;
        case"Update":
            this.$kL = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MZ;
            break;
        case"Delete":
            this.$kL = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MP;
            break;
        case"SetValue":
            this.$kL = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MT;
            break;
        case"Condition":
            this.$kL = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MN
        }
        return this.$kL
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K = function(n, t, i, r) {
    this.$wd = n;
    this.$16r = t;
    this.$7d = i;
    this.$1gF = r
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.prototype = {
    $bO: null,
    $xd: 0,
    $1g1: null,
    $wd: null,
    $16r: null,
    $7d: null,
    $1gF: null,
    $1Z4: function(n, t, i) {
        var u, f, r;
        t.length <= i || !this.$xd && t.length > i
            ? this.$xd === 1 ? this.$2iB() : this.$bO.reject(this.$1g1)
            : (u = t[i], this.$2LU(u)
                ? (f = this, r = this, u.$2Zs(n).then(function() {
                        f.$xd = 1;
                        f.$1Z4(n, t, ++i)
                    },
                    function(u) {
                        r.$xd = 0;
                        r.$1g1 = u;
                        r.$1Z4(n, t, ++i)
                    }))
                : this.$1Z4(n, t, ++i))
    },
    $2iB: function() {
        var n = this, t = this;
        this.$27t(this.$wd.$Rr, this.$16r, this.$1gF).then(function(t) {
                ($0.$1(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K
                        .$e3) ||
                    $0.$1(t)) &&
                    n.$bO.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088109));
                var i = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$7k;
                i.$ny(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$e3, t, !1)
                    .then(function(t) {
                            t
                                ? n.$bO.resolve(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine
                                    .CommandProcessor.$1K
                                    .$e3)
                                : n.$bO.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088109))
                        },
                        function() { n.$bO.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088109)) })
                    .always(function() {
                        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0 = {};
                        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$WR = {}
                    })
            },
            function() { t.$bO.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088109)) })
    },
    $27t: function(n, t, i) {
        if (!n || !n.get_Items()) return null;
        var r = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V),
                Microsoft.Crm.Client.Core.Framework.$4),
            u = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V)),
            e,
            o = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$7k,
            f = this,
            s = this;
        return o.$10Q().then(function(s) {
                var c, h;
                e = s;
                c = Xrm.Soap.Serializer.$AZ(i);
                c = c + f.$2k1(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$WR);
                for (var a = new Microsoft.Crm.Client.Core.Offline.Upsync.Entities.$3Z(e, t, 1, c),
                    w = a.$1dN(),
                    b = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V(w, 1, "Command"),
                    v = [],
                    y = !1,
                    p = n.get_Items(),
                    k = p.length,
                    l = 0;
                    l < k;
                    ++l)
                    h = p[l], (h.$Rq.toLocaleLowerCase() ===
                            Microsoft.Crm.Client.Core.Offline.Upsync.Common.$26.toString(1).toLocaleLowerCase() ||
                            h.$Rq.toLocaleLowerCase() ===
                            Microsoft.Crm.Client.Core.Offline.Upsync.Common.$26.toString(3).toLocaleLowerCase() ||
                            h.$Rq.toLocaleLowerCase() ===
                            Microsoft.Crm.Client.Core.Offline.Upsync.Common.$26.toString(2).toLocaleLowerCase()) &&
                        f.$2LU(h) &&
                        (y = !0, Array.add(v, f.$2iv(o, a.$2Z, h)));
                y && u.add(b);
                Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(v).then(function(n) {
                        for (var f, e, i = n, o = i.length, t = 0; t < o; ++t) f = i[t], e = f, u.add(e);
                        r.resolve(u)
                    },
                    function(n) { r.reject(n) })
            },
            function(n) { r.reject(n) }), r.promise()
    },
    $2iv: function(n, t, i) {
        var r = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V,
                Microsoft.Crm.Client.Core.Framework.$4),
            u = this,
            f = this;
        return n.$10Q().then(function(n) {
                var u = new Microsoft.Crm.Client.Core.Offline.Upsync.Entities
                        .$I8(n, t, i.$7d, $1W.$Cr(Microsoft.Crm.Client.Core.Offline.Upsync.Common.$26, i.$Rq)),
                    f = u.$1dN(),
                    e = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V(f, 1, "CommandOperation");
                r.resolve(e)
            },
            function(n) { r.reject(n) }), r.promise()
    },
    $2k1: function(n) {
        var t = new Sys.StringBuilder, i, r, u;
        if (this.$16r.toLowerCase() === "QualifyLead".toLowerCase() ||
            this.$16r.toLowerCase() === "ConvertActivity".toLowerCase()) {
            t
                .append('<a:KeyValuePairOfstringanyType><b:key>OfflineData<\/b:key><b:value xmlns:c="http://schemas.microsoft.com/2003/10/Serialization/Arrays" i:type="c:ArrayOfKeyValueOfstringstring">');
            i = n;
            for (r in i)
                u = { key: r, value: i[r] }, t.append("<c:KeyValueOfstringstring>"), t
                    .append("<c:Key>" +
                        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.$b.$5w(u.key) +
                        "<\/c:Key>"), t.append("<c:Value>" +
                    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.$b.$5w(u.value.toString()) +
                    "<\/c:Value>"), t.append("<\/c:KeyValueOfstringstring>");
            t.append("<\/b:value><\/a:KeyValuePairOfstringanyType>")
        }
        return t.toString()
    },
    $3IB: function() {
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$e3.get_Count() > 0 &&
            Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$e3.clear();
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0 = {};
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$WR = {};
        this.$bO = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V),
            Microsoft.Crm.Client.Core.Framework.$4);
        var n = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MS;
        return Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0 = this.$wd
            .$we, this.$wd.$Rr.get_Items().length > 0 && (this.$xd = 1, this.$1Z4(n, this.$wd.$Rr.get_Items(), 0)), this
            .$bO.promise()
    },
    $2LU: function(n) {
        var u = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L4,
            t = n.$17V,
            i = !1,
            r = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$a4(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0, t);
        return $0.$1(r) || (t = r.toString()), Microsoft.Crm.Client.Core.Framework.$3.$A(t) || (i = u.$Hw(t, null)), i
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MS = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MS.prototype = {
    $RX: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            i = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MR,
            r = this,
            u = this;
        return i.$2B(n).then(function(n) { t.resolve(n) }, function(n) { t.reject(n) }), t.promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19 = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$a4 = function(n, t) {
    var i = null, u, r, f, e;
    if ($0.$1(t)) throw Error.argumentNull("paramValue", "Xml attribute param to parse must have a value provided.");
    return t === "@DateTime.Now"
        ? i = Xrm.Soap.CrmDateTimeSerializer.$1JD((new Date).toISOString())
        : t.startsWith("!@")
        ? (t = t.substr(1, t.length), u = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$1TC(t, n), $0.$1(u) ||
        (r = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$1TC(t, n), $0.$1(r) || (i = !Boolean.parse(r.toString()))))
        : t === "@opportunityClose.fields.actualend"
        ? (f = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$1TC(t, n), e = new Date(f.toString()), i = Xrm.Soap.CrmDateTimeSerializer.$1JD(e.toISOString()))
        : i = t.startsWith("@")
        ? Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1TC(t, n)
        : t === "null" ? null : t, $0.$1(i) ? null : i
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
    .$1Me = function(n, t, i) {
        for (var u, f = t.get_Items(), e = f.length, r = 0;
            r < e;
            ++r
        )
            u = f[r], n[u.$17E] = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$a4(i, u.$4w)
    };
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2b6 = function(n, t) {
    $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(t, "ownerid")) ||
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1zu("ownerid", n);
    $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(t, "createdby")) ||
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1zu("createdby", n);
    $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(t, "modifiedby")) ||
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1zu("modifiedby", n);
    $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(t, "createdon")) ||
        (n.createdon = new Date(Date.now()));
    $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(t, "modifiedon")) ||
        (n.modifiedon = new Date(Date.now()));
    $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(t, "statecode")) || (n.statecode = 0);
    $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(t, "statuscode")) || (n.statuscode = 1)
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1zu = function(n, t) {
    var i = Microsoft.Crm.Client.Core.Offline.$2d.$1Sk(n, 9);
    t[i[0]] = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.toString();
    t[i[1]] = "systemuser";
    t[i[2]] = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$AN
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1Su = function(n, t) {
    var i = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$a4(n, t);
    return $0.$1(i) ? "" : i.toString()
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
    .$2yV = function(n, t, i, r) {
        return Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2h0(n, t, i, r)
    };
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2GG = function(n, t) {
    for (var i,
        e,
        o,
        u = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Boolean)),
        s = 0,
        f = n.get_Items(),
        h = f.length,
        r = 0;
        r < h;
        ++r)
        i = f[r], Microsoft.Crm.Client.Core.Framework.$3.$A(i.$px) ||
            Microsoft.Crm.Client.Core.Framework.$3.$A(i.$qI) ||
            (e = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$a4(t, i.$px), o = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$a4(t, i.$qI), u.set_$H(s++,
                Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$2yV(e, i.$NF, o, i.$7v)));
    return u
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
    .$1rH = function(n) { return!n.contains(!1) };
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
    .$386 = function(n) { return n.contains(!0) };
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2j7 = function(n, t, i, r) {
    if ($0.$1(n) || $0.$1(t) || $0.$1(i) || $0.$1(r))
        throw Error.argumentNull("RetriveFilterCriteria", "Xml Condition node must have a value provided.");
    var e = 0, u = 0, f = null;
    return e = i === "And" ? 0 : 1, r === "Equal"
        ? u = 0
        : r === "GreaterThan"
        ? u = 4
        : r === "GreaterThanOrEqual"
        ? u = 5
        : r === "LessThan" ? u = 2 : r === "LessThanOrEqual" ? u = 3 : r === "NotEqual" && (u = 1), f = Microsoft.Crm
        .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
        .$a4(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K
            .$D0,
            t), $0.$1(f) || (f = f.toString()), new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$Hz(n, f, e, u)
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1TC = function(n, t) {
    var u = n.split("."), r = u[0], i;
    return r = r.substr(1, r.length), i = t[r], n.startsWith("@Result_Retrieve")
        ? $0.$1(i) ||
        (i = t[r].rows.item(0), i = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$2Hp(u, i))
        : $0.$1(i) ||
        (i = t[r], i = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2Hp(u, i)), i
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2Hp = function(n, t) {
    for (var i = 1; i < n.length; i++) t = t[n[i]];
    return t
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2h0 = function(n, t, i, r) {
    var rt, tt, it, ut, u, f, ft, e, o, et, s, h, ot, c, l, st, a, v, ht, y, p, ct, w, b, lt, k, d, at, g, nt;
    switch (r) {
    case"boolean":
        if (rt = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L4, i = rt.$Hw(i, null), tt = i, it = Microsoft
            .Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Boolean, n), t === "Equal") return it === tt;
        if (t === "NotEqual") return it !== tt;
        break;
    case"nullable":
        if (t === "Equal") return $0.$1(n);
        if (t === "NotEqual") return!$0.$1(n);
        break;
    case"integer":
        if (ut = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L5, i = ut.$cy(i, null), u = i, f = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Number, n), t === "GreaterThan") return f > u;
        if (t === "GreaterThanOrEqual") return f >= u;
        if (t === "LessThan") return f < u;
        if (t === "LessThanOrEqual") return f <= u;
        break;
    case"int64":
        if (ft = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L2, i = ft.$cy(i, null), e = i, o = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Number, n), t === "GreaterThan") return o > e;
        if (t === "GreaterThanOrEqual") return o >= e;
        if (t === "LessThan") return o < e;
        if (t === "LessThanOrEqual") return o <= e;
        break;
    case"float":
        if (et = new Microsoft.Crm.Client.Core.ViewModels.Converters.$Kw, i = et.$cy(i, null), s = i, h = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Number, n), t === "GreaterThan") return h > s;
        if (t === "GreaterThanOrEqual") return h >= s;
        if (t === "LessThan") return h < s;
        if (t === "LessThanOrEqual") return h <= s;
        break;
    case"time":
        if (ot = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L7, i = ot.$cy(i, null), c = i, l = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Number, n), t === "GreaterThan") return l > c;
        if (t === "GreaterThanOrEqual") return l >= c;
        if (t === "LessThan") return l < c;
        if (t === "LessThanOrEqual") return l <= c;
        break;
    case"shorttime":
        if (st = new Microsoft.Crm.Client.Core.ViewModels.Converters.$Kv, i = st.$cy(i, null), a = i, v = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Date, n), t === "GreaterThan") return v > a;
        if (t === "GreaterThanOrEqual") return v >= a;
        if (t === "LessThan") return v < a;
        if (t === "LessThanOrEqual") return v <= a;
        break;
    case"shortdate":
        if (ht = new Microsoft.Crm.Client.Core.ViewModels.Converters.$Ky, i = ht.$cy(i, null), y = i, p = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Date, n), t === "GreaterThan") return p > y;
        if (t === "GreaterThanOrEqual") return p >= y;
        if (t === "LessThan") return p < y;
        if (t === "LessThanOrEqual") return p <= y;
        break;
    case"datemonth":
        if (ct = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L0, i = ct.$cy(i, null), w = i, b = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Date, n), t === "GreaterThan") return b > w;
        if (t === "GreaterThanOrEqual") return b >= w;
        if (t === "LessThan") return b < w;
        if (t === "LessThanOrEqual") return b <= w;
        break;
    case"currency":
        if (lt = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L1, i = lt.$cy(i, null), k = i, d = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Number, n), t === "GreaterThan") return d > k;
        if (t === "GreaterThanOrEqual") return d >= k;
        if (t === "LessThan") return d < k;
        if (t === "LessThanOrEqual") return d <= k;
        break;
    case"decimal":
        if (at = new Microsoft.Crm.Client.Core.ViewModels.Converters.$Ku, i = at.$cy(i, null), g = i, nt = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$Y6(Number, n), t === "GreaterThan") return nt > g;
        if (t === "GreaterThanOrEqual") return nt >= g;
        if (t === "LessThan") return nt < g;
        if (t === "LessThanOrEqual") return nt <= g
    }
    return t === "Equal" ? n === i : t === "NotEqual" ? n !== i : !1
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$Y6 = function(n, t) {
    if (!n.isInstanceOfType(t))
        throw Error.invalidOperation("Condition must have a correct value added in left operand");
    return t
};
Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MN = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MN.prototype = {
    $3I6: function(n) {
        for (var u,
            o,
            t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Boolean)),
            i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Boolean)),
            r = !1,
            e = n.$bb.get_Items(),
            s = e.length,
            f = 0;
            f < s;
            ++f)
            u = e[f], u.$7v === "And"
                ? t = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$2GG(u.$Hl, Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0)
                : i = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$2GG(u.$Hl, Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0);
        return t.get_Count() > 0 && i.get_Count() > 0
            ? r = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$386(i) &&
            Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1rH(t)
            : t.get_Count() > 0
            ? r = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1rH(t)
            : i.get_Count() > 0 &&
            (r = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$1rH(i)), Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0[n.$Rv.$1b] = r, o = MscrmComponents
            .DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4), o.resolve(!0).promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MM = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MM.prototype = {
    $ws: null,
    $28D: function(n, t) {
        var r = {}, u = n.$PD.get_Items()[0], i, f, e;
        u.$4w === "@GUID" && (u.$4w = t.toString());
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19.$2b6(r, n.$7d);
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$1Me(r, n.$PD, Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0);
        i = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$1Su(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0, n.$7d);
        f = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL
            .$6V(r, $1W.$Cr(Microsoft.Crm.Client.Core.Offline.Upsync.Common.$26, n.$Rq), i);
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$e3.add(f);
        e = new Xrm.Objects.EntityReference(i,
            Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(r[i + "id"].toString()));
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0[n.$Rv.$1b] = e;
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$WR[i + "id"] = t;
        this.$ws.resolve(!0);
        this.$ws.promise()
    },
    $3I6: function(n) {
        this.$ws = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4);
        var t = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$7k, i = this, r = this;
        return t.$10Q().then(function(t) { i.$28D(n, t) }, function(n) { r.$ws.reject(n) }), this.$ws.promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MP = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MP.prototype = {
    $3I6: function(n) {
        var i = {}, t, r, u, f;
        return Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$1Me(i, n.$PD, Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0), t =
            Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$1Su(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K
                .$D0,
                n.$7d), r = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL
            .$6V(i, $1W.$Cr(Microsoft.Crm.Client.Core.Offline.Upsync.Common.$26, n.$Rq), t), Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$e3.add(r), u = new Xrm.Objects
            .EntityReference(t, Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(i[t + "id"].toString())), Microsoft
            .Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0[n.$Rv
                .$1b] = u, f = MscrmComponents
            .DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4), f.resolve(!0).promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MO = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MO.prototype = {
    $3I6: function(n) {
        for (var o, t, h, f = new Array(0), e = n.$bb.get_Items(), c = e.length, r = 0; r < c; ++r) {
            o = e[r];
            for (var s = o.$Hl
                         .get_Items(),
                l = s.length,
                u = 0;
                u < l;
                ++u)
                t = s[u], h = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                    .$2j7(t.$px, t.$qI, t.$7v, t.$NF), f.push(h)
        }
        var a = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$I0(f),
            v = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$7k,
            y = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$1Su(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0, n.$7d),
            i = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            p = this,
            w = this;
        return v.$6F(y, a).then(function(t) {
                Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0[n.$Rv.$1b] = t;
                i.resolve(!0)
            },
            function(t) {
                n.$7d.toLowerCase() === "incident".toLowerCase()
                    ? i.resolve(!0)
                    : n.$7d.toLowerCase() === "businessprocessflowinstance"
                    ? (Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0[n.$Rv
                        .$1b] = null, i.resolve(!0))
                    : i.reject(t)
            }), i.promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MT = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MT.prototype = {
    $3I6: function(n) {
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0[n.$Rv.$1b] = Microsoft.Crm
            .Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
            .$a4(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0, n.$Rv.$4w);
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4);
        return t.resolve(!0).promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MZ = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MZ.prototype = {
    $3I6: function(n) {
        var t = {},
            i = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$a4(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0, n.$7d)
                .toString(),
            e = n.$po.$1b,
            r,
            u,
            f,
            c,
            h,
            l,
            a;
        if (n.$17L) {
            var o = n.$po.$4w.split("."),
                v = o[0],
                s = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                    .$a4(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0, v);
            if (s)
                for (r = 0; r <= s.rows.length; r++) {
                    for (u = s.rows.item(r), f = 1; f < o.length; f++) u = u[o[f]];
                    t[e] = u;
                    Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                        .$1Me(t,
                            n.$PD,
                            Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0)
                }
        } else
            t[e] = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$a4(Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K
                    .$D0,
                    n.$po.$4w), Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
                .$1Me(t, n.$PD, Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0);
        return e in t &&
        (c = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL
            .$6V(t, $1W.$Cr(Microsoft.Crm.Client.Core.Offline.Upsync.Common.$26, n.$Rq), i), Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$e3.add(c), h = Microsoft.Crm.Client.Core.Storage
            .DataApi.DataSource.$3.get_$V().$i(i), !$0.$1(h) && h.get_$9N() && (i = "activity"), l = new Xrm.Objects
            .EntityReference(i, Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(t[i + "id"].toString())), Microsoft
            .Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0[n.$Rv
                .$1b] = l), a = MscrmComponents
            .DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4), a.resolve(!0).promise()
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35 = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$1pA = function(n) {
    switch (n) {
    case"QualifyLead":
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = new Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionWrapper.CommandRequests.$MU;
        break;
    case"ConvertActivity":
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = new Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionWrapper.CommandRequests.$Ma;
        break;
    case"LoseOpportunity":
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = new Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionWrapper.CommandRequests.$MY;
        break;
    case"WinOpportunity":
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = new Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionWrapper.CommandRequests.$MV;
        break;
    case"CloseIncident":
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = new Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionWrapper.CommandRequests.$MX;
        break;
    case"SetState":
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = new Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionWrapper.CommandRequests.$MW;
        break;
    case"CloseActivity":
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = new Microsoft.Crm.Client.Core
            .NonCudExecution.ExecutionWrapper.CommandRequests.$MW
    }
    return Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$Mb = function(n, t, i) {
    this.$7x = n;
    this.$1K = t;
    this.$1Gv = i
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$Mb.prototype = {
    $7x: null,
    $1K: null,
    $1Gv: null,
    $3IC: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V),
                Microsoft.Crm.Client.Core.Framework.$4),
            i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$1K),
            r,
            t,
            u;
        if ($0.$1(i)) n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088112));
        else if (r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$34r(i, 3), r) {
            if ($0.$1(this
                    .$7x) ||
                $0.$1(this.$1K) ||
                $0.$1(this.$1Gv)) return n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088111)), n.promise();
            t = this;
            u = this;
            this.$2yS(this.$7x, this.$1K, i.get_$9N() && i.$F5).then(function(i) {
                    $0.$1(i) && n.resolve(null);
                    var r = t.$3GR(i);
                    r && r.$Rr && r.$we
                        ? Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$9e.$2a(r, t.$7x, t.$1K, t.$1Gv)
                        .then(function(t) {
                                t.get_Count() <= 0 && n.resolve(null);
                                n.resolve(t)
                            },
                            function(t) { n.reject(t) })
                        : n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088109))
                },
                function() { n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088113)) })
        } else n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088112));
        return n.promise()
    },
    $2yS: function(n, t, i) {
        i && (t = "CustomActivity");
        var r = new Microsoft.Crm.Client.Core.Storage.DataApi
            .$O3(43, Microsoft.Crm.Client.Core.Framework.$6.get_$2C(), t, 0, !0, t + "_" + n);
        return this.$3N7(r)
    },
    $3GR: function(n) {
        var t = Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$1pA(this.$7x);
        return Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$28c(n, t.$1zv(this.$1Gv))
    },
    $3N7: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(String, Microsoft.Crm.Client.Core.Framework.$4),
            i = this,
            r = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$5c(n, Microsoft.Crm.Client.Core.Framework.$15.$5v("", "CommandXaml")).then(function(n) {
                    if ($0.$1(n.get_$H(0))) t.resolve("");
                    else {
                        var i = n.get_$H(0).get_$Gz();
                        $0.$1(i) ? t.resolve("") : t.resolve(i.toString())
                    }
                },
                function(n) { t.reject(n) }), t.promise()
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT
    .registerInterface("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT");
Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS
    .registerInterface("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FR = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FR
    .registerInterface("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FR");
Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$Ma = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$Ma.prototype = {
    $1zv: function(n) {
        var i = n, t = {};
        return t.activityId = i.activityId, t.activityEntityName = i.activityEntityName, t.targetEntity = i
            .targetEntity, t.targetEntityName = i.targetEntityName, t.createCampaignResponse = i
            .createCampaignResponse, t
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MY = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MY.prototype = {
    $1zv: function(n) {
        var i = n, t = {};
        return t.opportunityClose = i.opportunityClose, t.status = i.status, t
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MV = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MV.prototype = {
    $1zv: function(n) {
        var i = n, t = {};
        return t.opportunityClose = i.opportunityClose, t.status = i.status, t
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MU = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MU.prototype = {
    $1zv: function(n) {
        var i = n, t = {};
        return t.leadId = i.leadId, t.createAccount = i.createAccount, t.createContact = i.createContact, t
            .createOpportunity = i.createOpportunity, t.transactionCurrencyReference = i.opportunityCurrencyId, t
            .opportunityCustomer = i.opportunityCustomerId, t.sourceCampaignReference = i.sourceCampaignId, t
            .qualifyStatus = i.status, t.suppressDuplicateDetection = i.suppressDuplicateDetection, t.traversedPath = i
            .traversedPath, t.nextStageId = i.nextStageId, t
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MX = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MX.prototype = {
    $1zv: function(n) {
        var i = n, t = {};
        return t.resolveCaseRecord = i.incidentResolution, t.status = i.status, t
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MW = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MW.prototype = {
    $1zv: function(n) {
        var i = n, t = {};
        return t.entityName = i.entityMoniker.LogicalName, t.entityId = i.entityMoniker.Id, t.state = i.state, t
            .status = i.status, t
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser");
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MF = function() {
    this.$4w = "";
    this.$17E = ""
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MF.prototype = { $17E: null, $4w: null };
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$7J = function() {
    this.$px = "";
    this.$NF = "";
    this.$qI = "";
    this.$7v = ""
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$7J.prototype = { $px: null, $NF: null, $qI: null, $7v: null };
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MH = function() {
    this.$1b = "";
    this.$4w = ""
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MH.prototype = { $1b: null, $4w: null };
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MG = function() {
    this.$Hl = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$7J));
    this.$7v = ""
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MG.prototype = { $Hl: null, $7v: null };
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$ME = function() {
    this.$PD = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MF));
    this.$7d = "";
    this.$17L = !1;
    this.$po = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MH;
    this.$bb = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MG));
    this.$Rq = "";
    this.$Rv = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MD;
    this.$17V = ""
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$ME.prototype = {
    $17L: !1,
    $17V: null,
    $Rq: null,
    $7d: null,
    $po: null,
    $bb: null,
    $PD: null,
    $Rv: null,
    $2Zs: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            i = this,
            r = this;
        return n.$RX(this).then(function(n) { t.resolve(n) }, function(n) { t.reject(n) }), t.promise()
    }
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MD = function() {
    this.$1b = "";
    this.$4w = ""
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MD.prototype = { $1b: null, $4w: null };
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V = function() {};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$28c = function(n, t) {
    var i = null, r = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n), u, f;
    return r
        .hasChildNodes() &&
        (i = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(r).$Aq().get_$H(0)), u = Microsoft.Crm.Client.Core
        .NonCudExecution.XamlParser.$3V.$2yP(i, t), f = Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V
        .$2yO(i), new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$M3(u, f)
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$2yP = function(n, t) {
    for (var r, u, f = {}, e = n.$5k(".//Property"), i = 0; i < e.get_$l(); i++) {
        if (r = e.get_$H(i).get_$C6(), !r
            .hasAttribute("Name"))
            throw Error.argumentUndefined("CommandRequestData Node Attribute",
                "CommandRequestData node must have a Name attribute provided.");
        u = r.getAttribute("Name").toString();
        f[u] = t[u]
    }
    return f
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$2yO = function(n) {
    for (var u,
        i = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$ME)),
        r = n.$5k(".//Operation"),
        t = 0;
        t < r.get_$l();
        t++) u = Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$319(r.get_$H(t)), i.set_$H(t, u);
    return i
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$319 = function(n) {
    var i = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$ME, t = n.get_$C6(), r, u, f;
    if (!t
        .hasAttribute("OperationName") ||
        !t.hasAttribute("EntityName") ||
        !t.hasAttribute("IsExecutable"))
        throw Error.argumentUndefined("Operation Node Attributes",
            "Operation node must have a OperationName, EntityName and IsExecutable attributes provided.");
    for (i.$Rq = t.getAttribute("OperationName").toString(), i.$7d = t.getAttribute("EntityName").toString(), i.$17V = t
            .getAttribute("IsExecutable").toString(), t.hasAttribute("HasForEach") &&
            (i.$17L = Boolean.parse(t.getAttribute("HasForEach").toString())), r = 0, u = t.childNodes.length;
        r < u;
        r++) {
        f = t.childNodes[r];
        switch (f.nodeName) {
        case"Attributes":
            i.$PD = Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$1Sj(n);
            break;
        case"Conditions":
            i.$bb = Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$30j(n);
            break;
        case"Result":
            i.$Rv = Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$32D(n);
            break;
        case"Identifier":
            i.$po = Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$304(n)
        }
    }
    return i
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$304 = function(n) {
    var i = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MH, r = n.$O(".//Identifier"), t = r.get_$C6();
    if (!t
        .hasAttribute("Name") ||
        !t.hasAttribute("Value"))
        throw Error.argumentUndefined("Identifier Node Attributes",
            "Identifier node must have a Name and Value attributes provided.");
    return i.$1b = t.getAttribute("Name").toString(), i.$4w = t.getAttribute("Value").toString(), i
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$32D = function(n) {
    var i = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MD, r = n.$O(".//Result"), t = r.get_$C6();
    if (!t
        .hasAttribute("Name") ||
        !t.hasAttribute("Value"))
        throw Error.argumentUndefined("Result Node Attributes",
            "Result node must have a Name and Value attributes provided.");
    return i.$1b = t.getAttribute("Name").toString(), i.$4w = t.getAttribute("Value").toString(), i
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$30j = function(n) {
    for (var r = new(Microsoft.Crm.Client.Core.Framework.List$1
                 .$$(Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MG)),
        u = n.$5k(".//MultipleCheck"),
        t = 0;
        t < u.get_$l();
        t++) {
        var i = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MG, f = u.get_$H(t), e = f.get_$C6();
        if (!e.hasAttribute("Type"))
            throw Error.argumentUndefined("MultipleCheck Node Attribute",
                "MultipleCheck node must have a Type attribute provided.");
        i.$7v = e.getAttribute("Type").toString();
        i.$Hl = Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$2yW(f);
        r.add(i)
    }
    return r
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$2yW = function(n) {
    for (var i,
        t,
        u = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$7J)),
        f = n.$5k(".//Condition"),
        r = 0;
        r < f.get_$l();
        r++) {
        if (i = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$7J, t = f.get_$H(r)
            .get_$C6(), !t.hasAttribute("LeftOperand") ||
            !t.hasAttribute("RightOperand") ||
            !t.hasAttribute("Operator") ||
            !t.hasAttribute("Type"))
            throw Error.argumentUndefined("Condition Node Attribute",
                "Condition node must have a Left Operand, Right Operand, Operator and Type attribute provided.");
        i.$px = t.getAttribute("LeftOperand").toString();
        i.$qI = t.getAttribute("RightOperand").toString();
        i.$NF = t.getAttribute("Operator").toString();
        i.$7v = t.getAttribute("Type").toString();
        u.add(i)
    }
    return u
};
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V.$1Sj = function(n) {
    for (var t,
        i,
        u = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MF)),
        f = n.$5k(".//Attribute"),
        r = 0;
        r < f.get_$l();
        r++) {
        if (t = new Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MF, i = f.get_$H(r).get_$C6(), !i
            .hasAttribute("field"))
            throw Error.argumentUndefined("Attribute Node Attribute",
                "Attribute node must have a Field attribute provided.");
        t.$17E = i.getAttribute("field").toString();
        t.$4w = i.firstChild.nodeValue;
        u.add(t)
    }
    return u
};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$9e
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$9e");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$M3
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.$M3");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MR
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MR");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MQ
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MQ");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MS
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$MS",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FR);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$19");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MN
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MN",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MM
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MM",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MP
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MP",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MO
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MO",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MT
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MT",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MZ
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.CommandSteps.$MZ",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.Interfaces.$FS);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$Mb
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$Mb");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$Ma
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$Ma",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MY
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MY",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MV
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MV",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MU
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MU",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MX
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MX",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT);
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MW
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.CommandRequests.$MW",
        null,
        Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.Interfaces.$FT);
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MF
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MF");
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$7J
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$7J");
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MH
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MH");
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MG
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MG");
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$ME
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$ME");
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MD
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$MD");
Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V
    .registerClass("Microsoft.Crm.Client.Core.NonCudExecution.XamlParser.$3V");
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$WR = {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$D0 = {};
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionEngine.CommandProcessor.$1K.$e3 = new(Microsoft.Crm.Client.Core
    .Framework.List$1.$$(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V));
Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$35.$co = null
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Core.NonCudExecution.js.srcmap