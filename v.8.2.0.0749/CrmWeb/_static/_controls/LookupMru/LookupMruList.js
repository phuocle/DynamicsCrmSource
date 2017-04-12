Type.registerNamespace("Mscrm");
Mscrm.LookupRecordField = function() {};
Mscrm.LookupRecordField.prototype = {
    objectId: 0,
    entityTypeCode: 1,
    entityTypeName: 2,
    displayName: 3,
    title: 4,
    lastAccessed: 5,
    deleted: 6,
    lastField: 7
};
Mscrm.LookupRecordField.registerEnum("Mscrm.LookupRecordField", false);
Mscrm.LookupMruItem = function(node) { !IsNull(node) && this.$1Z_0(node) };
Mscrm.LookupMruItem.get_dateFormat = function() { return "MM/dd/yyyy HH:mm:ss" };
Mscrm.LookupMruItem.find = function(items, searchItem) {
    if (IsNull(items)) return null;
    for (var $v_0 = 0; $v_0 < items.length; $v_0++) {
        var $v_1 = items[$v_0];
        if (Mscrm.LookupMruItem.equals($v_1, searchItem)) return $v_1
    }
    return null
};
Mscrm.LookupMruItem.findIndex = function(items, searchItem) {
    if (IsNull(items)) return -1;
    for (var $v_0 = 0; $v_0 < items.length; $v_0++) {
        var $v_1 = items[$v_0];
        if (Mscrm.LookupMruItem.equals($v_1, searchItem)) return $v_0
    }
    return -1
};
Mscrm.LookupMruItem.equals = function(first, second) {
    var $v_0 = false;
    if (!first.$3_0 && !second.$3_0) $v_0 = Mscrm.Utilities.compareGuids(first.$6_0, second.$6_0);
    return $v_0
};
Mscrm.LookupMruItem.compare = function(A, B) {
    var $v_0 = A, $v_1 = B;
    if ($v_0.$3_0 && $v_1.$3_0) return 0;
    if ($v_0.$3_0) return -1;
    if ($v_1.$3_0) return 1;
    return elapsedTime($v_0.$7_0, $v_1.$7_0)
};
Mscrm.LookupMruItem.createLookupMruItem = function(objectId, etc, etn, title, displayName) {
    var $v_0 = new Mscrm.LookupMruItem(null);
    $v_0.set_objectId(objectId);
    $v_0.set_entityTypeCode(etc);
    $v_0.set_entityTypeName(etn);
    $v_0.set_title(title);
    $v_0.set_displayName(displayName);
    $v_0.set_lastAccessed(new Date);
    return $v_0
};
Mscrm.LookupMruItem.prototype = {
    $8_0: false,
    $3_0: false,
    get_invalid: function() { return this.$3_0 },
    $5_0: 0,
    get_entityTypeCode: function() { return this.$5_0 },
    set_entityTypeCode: function(value) {
        this.$5_0 = value;
        this.$8_0 = true;
        return value
    },
    $C_0: null,
    get_entityTypeName: function() { return this.$C_0 },
    set_entityTypeName: function(value) {
        this.$C_0 = value;
        this.$8_0 = true;
        return value
    },
    $G_0: null,
    get_displayName: function() { return this.$G_0 },
    set_displayName: function(value) {
        this.$G_0 = value;
        this.$8_0 = true;
        return value
    },
    $6_0: null,
    get_objectId: function() { return this.$6_0 },
    set_objectId: function(value) {
        this.$6_0 = value;
        if (this.$6_0
            .length ===
            36 &&
            this.$6_0.charAt(0) !== "{" &&
            this.$6_0.charAt(35) !== "}") this.$6_0 = "{" + this.$6_0 + "}";
        this.$8_0 = true;
        return value
    },
    $4_0: null,
    get_title: function() { return this.$4_0 },
    set_title: function(value) {
        this.$4_0 = value;
        this.$8_0 = true;
        return value
    },
    $7_0: null,
    get_lastAccessed: function() { return this.$7_0 },
    set_lastAccessed: function(value) {
        var $v_0 = value;
        $v_0.setHours($v_0.getHours() + $v_0.getTimezoneOffset() / 60);
        this.$7_0 = $v_0;
        this.$8_0 = true;
        return value
    },
    $A_0: false,
    get_deleted: function() { return this.$A_0 },
    set_deleted: function(value) {
        this.$A_0 = value;
        this.$8_0 = true;
        return value
    },
    $1W_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "ObjectId", null);
        if ($v_0) this.$6_0 = XUI.Xml.GetText($v_0);
        if (isNullOrEmptyString(this.$6_0)) this.$3_0 = true
    },
    $1T_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "EntityTypeCode", null);
        if ($v_0) this.$5_0 = parseInt(XUI.Xml.GetText($v_0), 10);
        if (!!(isNaN(this.$5_0) | this.$5_0 <= 0)) this.$3_0 = true
    },
    $1U_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "EntityTypeName", null);
        if ($v_0) this.$C_0 = XUI.Xml.GetText($v_0)
    },
    $1S_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "DisplayName", null);
        if ($v_0) this.$G_0 = XUI.Xml.GetText($v_0)
    },
    $1X_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "Title", null);
        if ($v_0) this.$4_0 = XUI.Xml.GetText($v_0);
        if (!this.$4_0) this.$3_0 = true
    },
    $1V_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "LastAccessed", null);
        if ($v_0 && !isNullOrEmptyString(XUI.Xml.GetText($v_0)))
            try {
                this.$7_0 = new Date(XUI.Xml.GetText($v_0))
            } catch ($v_1) {
                this.$3_0 = true
            }
        else this.$3_0 = true
    },
    $1Z_0: function($p0) {
        this.$1W_0($p0);
        this.$1T_0($p0);
        this.$1U_0($p0);
        this.$1S_0($p0);
        this.$1X_0($p0);
        this.$1V_0($p0)
    },
    $1Y_0: function($p0) {
        var $v_0 = $p0.trim().split(";");
        if (IsNull($v_0) || $v_0.length - 1 !== 7) {
            this.$3_0 = true;
            return
        }
        this.$6_0 = CrmEncodeDecode.CrmUrlDecode($v_0[0]);
        this.$5_0 = parseInt($v_0[1], 10);
        this.$C_0 = CrmEncodeDecode.CrmUrlDecode($v_0[2]);
        this.$G_0 = CrmEncodeDecode.CrmUrlDecode($v_0[3]);
        this.$4_0 = CrmEncodeDecode.CrmUrlDecode($v_0[4]);
        this.$7_0 = new Date(CrmEncodeDecode.CrmUrlDecode($v_0[5]));
        this.$A_0 = $v_0[6] === "1"
    },
    $d_0: null,
    get_xml: function() {
        if (this.$8_0 || isNullOrEmptyString(this.$d_0)) {
            this.$d_0 = String
                .format("<LookupMruItem>\r\n\t\t\t\t\t\t<ObjectId>{0}</ObjectId>\r\n\t\t\t\t\t\t<EntityTypeCode>{1}</EntityTypeCode>\r\n\t\t\t\t\t\t<EntityTypeName>{2}</EntityTypeName>\r\n\t\t\t\t\t\t<DisplayName>{3}</DisplayName>\r\n\t\t\t\t\t\t<Title>{4}</Title>\r\n\t\t\t\t\t\t<LastAccessed>{5}</LastAccessed>\r\n\t\t\t\t\t\t<Deleted>{6}</Deleted>\r\n\t\t\t\t\t\t</LookupMruItem>", CrmEncodeDecode.CrmXmlEncode(this.$6_0), CrmEncodeDecode.CrmXmlEncode(this.$5_0.toString()), CrmEncodeDecode.CrmXmlEncode(this.$C_0), CrmEncodeDecode.CrmXmlEncode(this.$G_0), CrmEncodeDecode.CrmXmlEncode(this.$4_0), CrmEncodeDecode.CrmXmlEncode(this.$7_0.format(Mscrm.LookupMruItem.get_dateFormat())), this.$A_0 ? "true" : "false");
            this.$8_0 = false
        }
        return this.$d_0
    },
    $c_0: "",
    get_userDataString: function() {
        if (this.$8_0 || isNullOrEmptyString(this.$c_0)) {
            this.$c_0 = String.format("{0}{7}{1}{7}{2}{7}{3}{7}{4}{7}{5}{7}{6}{7}{8}",
                CrmEncodeDecode.CrmUrlEncode(this.$6_0),
                CrmEncodeDecode.CrmXmlEncode(this.$5_0.toString()),
                CrmEncodeDecode.CrmUrlEncode(this.$C_0),
                CrmEncodeDecode.CrmUrlEncode(this.$G_0),
                CrmEncodeDecode.CrmUrlEncode(this.$4_0),
                CrmEncodeDecode.CrmUrlEncode(this.$7_0.format(Mscrm.LookupMruItem.get_dateFormat())),
                this.$A_0 ? "1" : "0",
                ";",
                "\n");
            this.$8_0 = false
        }
        return this.$c_0
    },
    set_userDataString: function(value) {
        this.$1Y_0(value);
        return value
    },
    merge: function(item) {
        if (Mscrm.LookupMruItem.equals(this, item))
            if (elapsedTime(this.$7_0, item.$7_0) > 0) {
                this.$4_0 = item.$4_0;
                this.$7_0 = item.$7_0;
                this.$C_0 = item.$C_0;
                this.$A_0 = item.$A_0;
                this.$8_0 = true
            }
    }
};
Mscrm.LookupMruList = function($p0) {
    this.$$d_$1H_3 = Function.createDelegate(this, this.$1H_3);
    this.$$d_$1Q_3 = Function.createDelegate(this, this.$1Q_3);
    this.$$d_$1d_3 = Function.createDelegate(this, this.$1d_3);
    this.$$d_$1O_3 = Function.createDelegate(this, this.$1O_3);
    this.$$d_$18_3 = Function.createDelegate(this, this.$18_3);
    this.$R_3 = new Array(0);
    this.$o_3 = new RegExp("Timestamp:Loaded=([^,\x0a]+),Updated=([^,\x0a]+),Saved=([^,\x0a]*)\x0a([\\s\\S]*)");
    this.$L_3 = new Date(2010, 1, 1);
    Mscrm.LookupMruList.initializeBase(this, [$p0])
};
Mscrm.LookupMruList.prototype = {
    $P_3: false,
    userId: null,
    lookupMruDeleteTooltip: null,
    $N_3: "",
    get_maxRecordLength: function() { return 7 },
    $H_3: 250,
    get_maxItemCount: function() { return this.$H_3 },
    set_maxItemCount: function(value) {
        this.$H_3 = value;
        return value
    },
    $W_3: 0,
    $f_3: false,
    $J_3: null,
    $F_3: null,
    $s_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$N_3 = "LK" + this.userId;
        this.$1a_3();
        $addHandler(window, "unload", this.$$d_$18_3);
        this.$W_3 = window.setTimeout(this.$$d_$1O_3, 1.8e6)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(window, "unload", this.$$d_$18_3);
        window.clearTimeout(this.$W_3);
        this.$18_3(null);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $1a_3: function() {
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        if ($v_0.get_pageType() === "entityrecord") {
            var $$t_2 = this;
            this.$M_3(function($p1_0) { $$t_2.$1I_3(null, null) })
        }
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 63:
            return this.$1K_3(parameters);
        case 64:
            this.$1G_3(parameters);
            break;
        case 65:
            this.$1L_3(parameters);
            break;
        case 66:
            this.$1J_3(parameters);
            break;
        case 68:
            this.$1A_3();
            this.$l_3();
            this.$P_3 = true;
            break;
        case 75:
            this.$P_3 = false;
            break;
        default:
            break
        }
        return null
    },
    $1K_3: function($p0) {
        var $v_0 = $p0["etcList"];
        return this.retrieveLookupMruItemsByEtcList($v_0)
    },
    $1G_3: function($p0) {
        var $v_0 = $p0["lookupMruItems"];
        this.addRecords($v_0)
    },
    $1L_3: function($p0) {
        var $v_0 = $p0["lookupMruItems"];
        this.updateRecords($v_0)
    },
    $1J_3: function($p0) {
        var $v_0 = $p0["lookupMruItems"];
        this.removeRecords($v_0)
    },
    $1O_3: function() {
        if (Mscrm.Utilities.isRefreshForm()) return;
        this.$1A_3();
        this.$W_3 = window.setTimeout(this.$$d_$1O_3, 1.8e6)
    },
    $1A_3: function() {
        if (this.$17_3()) {
            this.$J_3 = new Date;
            var $$t_1 = this;
            this.$M_3(function($p1_0) { $$t_1.$1c_3($p1_0) })
        }
    },
    $1c_3: function($p0) { this.$1B_3($p0, true, this.$$d_$1d_3, -1, false) },
    $1d_3: function($p0, $p1) {
        if ($p0.Success) {
            this.$F_3 = new Date;
            var $v_0 = $p0.ReturnValue.toString();
            if (!isNullOrEmptyString($v_0)) {
                var $v_1 = this.$12_3($v_0);
                this.$g_3($v_1)
            }
        }
    },
    $18_3: function($p0) {
        if (this.get_isDisposed()) return;
        window.clearTimeout(this.$W_3);
        if (this.$P_3) return;
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        if (!IsNull($v_0.get_query()["signout"]) &&
            ($v_0.get_query()["signout"] === "1" || $v_0.get_query()["signout"] === "2")) return;
        if (Mscrm.Utilities.isRefreshForm()) return;
        var $v_1 = false;
        try {
            var $v_2 = window.self.masterWindow();
            if (!IsNull($v_2) && $v_2 !== window.self) {
                var $v_3 = $v_2.Sys.Application.findComponent("crmLookupMru");
                if (!IsNull($v_3)) $v_1 = true
            }
        } catch ($$e_5) {
        }
        if (!$v_1)
            if (this.$17_3()) {
                var $v_4 = this.$M_3(null);
                this.$1B_3($v_4, false, null, 500, true);
                this.$l_3()
            }
    },
    $17_3: function() {
        var $v_0 = true, $v_1 = {};
        if (this.$1N_3($v_1)) {
            var $v_2 = $v_1["savedTime"];
            if (!IsNull($v_2) && !isNaN($v_2)) {
                $v_0 = false;
                var $v_3 = false, $v_4 = $v_1["updatedTime"];
                if (!IsNull($v_4)) $v_3 = !!($v_3 | elapsedTime($v_2, $v_4) > 0);
                $v_0 = $v_3
            }
        }
        return $v_0
    },
    $1I_3: function($p0, $p1) {},
    addRecord: function(item) {
        var $v_0 = new Array(1);
        $v_0[0] = item;
        this.addRecords($v_0)
    },
    addRecords: function(items) {
        var $v_0 = this.$M_3(null);
        this.$1C_3($v_0, items)
    },
    $1C_3: function($p0, $p1) {
        for (var $v_0 = this.$S_3($p0), $v_1 = 0; $v_1 < $p1.length; $v_1++) {
            var $v_2 = $p1[$v_1];
            IsNull($v_2.$7_0) && $v_2.set_lastAccessed(new Date);
            var $v_3 = Mscrm.LookupMruItem.find($v_0, $v_2);
            if (!IsNull($v_3)) $v_3.merge($v_2);
            else $v_0[$v_0.length] = $v_2;
            if ($v_0.length > this.$H_3) {
                $v_0.sort(Mscrm.LookupMruItem.compare);
                $v_0.length = this.$H_3
            }
        }
        this.$w_3($v_0)
    },
    $w_3: function($p0) {
        this.$J_3 = new Date;
        var $v_0 = new Sys.StringBuilder;
        $v_0.append(String.format("Timestamp:Loaded={0},Updated={1},Saved={2}", this.$L_3, this.$J_3, this.$F_3));
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1];
            if (IsNull($v_2)) continue;
            $v_0.append(String.format("{0}{1}", "\n", $v_2.get_userDataString()))
        }
        this.$g_3($v_0.toString())
    },
    updateRecords: function(items) {
        var $v_0 = this.$M_3(null);
        this.$1b_3($v_0, items)
    },
    $1b_3: function($p0, $p1) {
        for (var $v_0 = false, $v_1 = this.$S_3($p0), $v_2 = 0; $v_2 < $p1.length; $v_2++) {
            var $v_3 = $p1[$v_2];
            if (!IsNull($v_3)) {
                var $v_4 = Mscrm.LookupMruItem.find($v_1, $v_3);
                if (!IsNull($v_4)) {
                    $v_4.set_title($v_3.$4_0);
                    $v_0 = true
                }
            }
        }
        $v_0 && this.$w_3($v_1)
    },
    removeRecord: function(item) {
        var $v_0 = new Array(0);
        $v_0[0] = item;
        this.removeRecords($v_0)
    },
    removeRecords: function(items) {
        var $v_0 = this.$M_3(null);
        this.$1P_3($v_0, items)
    },
    $1P_3: function($p0, $p1) {
        for (var $v_0 = false, $v_1 = this.$S_3($p0), $v_2 = 0; $v_2 < $p1.length; $v_2++) {
            var $v_3 = $p1[$v_2], $v_4 = Mscrm.LookupMruItem.findIndex($v_1, $v_3);
            if ($v_4 >= 0) {
                $v_1[$v_4].set_lastAccessed(new Date);
                $v_1[$v_4].set_deleted(true);
                $v_0 = true
            }
        }
        $v_0 && this.$w_3($v_1)
    },
    $1N_3: function($p0) {
        var $v_0 = false, $v_1 = this.$t_3();
        if (!isNullOrEmptyString($v_1)) {
            var $v_2 = $v_1.match(this.$o_3);
            if (!IsNull($v_2) && $v_2.length === 5) {
                if (IsNull($p0)) $p0 = {};
                $p0["syncedTime"] = isNullOrEmptyString($v_2[1]) ? null : new Date($v_2[1]);
                $p0["updatedTime"] = isNullOrEmptyString($v_2[2]) ? null : new Date($v_2[2]);
                $p0["savedTime"] = isNullOrEmptyString($v_2[3]) ? null : new Date($v_2[3]);
                $v_0 = true
            }
        }
        return $v_0
    },
    $t_3: function() {
        var $v_0 = null;
        try {
            $v_0 = Mscrm.CrmLocalStorage.getItem(this.$N_3)
        } catch ($v_1) {
        }
        return $v_0
    },
    $M_3: function($p0) {
        var $v_0 = this.$t_3(), $v_1 = false;
        if (!isNullOrEmptyString($v_0)) {
            var $v_2 = $v_0.match(this.$o_3);
            if (!IsNull($v_2) && $v_2.length === 5) {
                var $v_3 = new Date($v_2[1]), $v_4 = new Date;
                if (elapsedTime($v_3, $v_4) < 3.6e6) {
                    this.$L_3 = $v_3;
                    $v_0 = $v_2[4];
                    $v_1 = true
                }
            }
        }
        if ($v_1) {
            if (!IsNull($v_0)) $v_0 = this.$13_3($v_0);
            !IsNull($p0) && $p0($v_0)
        } else {
            this.$l_3();
            if (!IsNull($p0)) this.$R_3[this.$R_3.length] = $p0;
            $v_0 = this.$1M_3(!IsNull($p0))
        }
        return $v_0
    },
    $1M_3: function($p0) {
        var $v_0 = null;
        if (this.$P_3 || $p0 && this.$f_3) return $v_0;
        this.$s_3 = new Date;
        var $v_1 = new RemoteCommand("LookupMruWebService", "RetrieveLookupMruData", null);
        $v_1.ErrorHandler = this.$$d_$1Q_3;
        var $v_2 = null;
        if ($p0) $v_2 = this.$$d_$1H_3;
        var $v_3 = $v_1.Execute($v_2);
        if (!$p0) {
            if ($v_3.Success) {
                var $v_4 = $v_3.ReturnValue;
                $v_0 = this.$14_3($v_4)
            }
        } else this.$f_3 = true;
        return $v_0
    },
    $1Q_3: function($p0, $p1) {},
    $1H_3: function($p0, $p1) {
        var $v_0 = null;
        if ($p0.Success) {
            $v_0 = $p0.ReturnValue;
            this.$14_3($v_0)
        }
        this.$f_3 = false
    },
    $14_3: function($p0) {
        this.$L_3 = this.$s_3;
        var $v_0 = this.$12_3($p0);
        $v_0 = this.$13_3($v_0);
        this.$g_3($v_0);
        for (var $v_1 = 0; $v_1 < this.$R_3.length; $v_1++) {
            var $v_2 = this.$R_3[$v_1];
            $v_2($v_0)
        }
        this.$R_3 = new Array(0);
        return $v_0
    },
    $13_3: function($p0) {
        var $v_0 = false;
        $p0 = $p0.trim();
        var $v_1 = $p0.split("\n"), $v_2 = this.$S_3($p0);
        if ($v_2.length > this.$H_3) {
            for (var $v_3 = $v_2
                         .length -
                         this.$H_3,
                $v_4 = 0,
                $v_5 = 0;
                $v_5 < $v_2.length;
                $v_5++) if ($v_2[$v_5].$A_0) $v_4++;
            if ($v_3 > $v_4) {
                $v_2.sort(Mscrm.LookupMruItem.compare);
                $v_3 -= $v_4;
                for (var $v_6 = 0; $v_6 < this.$H_3 && $v_3 >= 0; $v_6++)
                    if (!$v_2[$v_6].$A_0) {
                        $v_2[$v_6].set_deleted(true);
                        $v_3--
                    }
                $v_0 = true
            }
        }
        if ($v_0) {
            var $v_7 = new Sys.StringBuilder;
            $v_7.append(String.format("Timestamp:Loaded={0},Updated={1},Saved={2}", this.$L_3, this.$J_3, this.$F_3));
            for (var $v_9 = 0; $v_9 < $v_2.length; $v_9++)
                !$v_2[$v_9].$A_0 && $v_7.append(String.format("{0}{1}", "\n", $v_2[$v_9].get_userDataString()));
            var $v_8 = $v_7.toString();
            this.$g_3($v_8);
            $p0 = $v_8
        }
        return $p0
    },
    $1B_3: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = null;
        if (this.$P_3) return $v_0;
        if (isNullOrEmptyString($p0)) return $v_0;
        for (var $v_1 = {}, $v_2 = this.$S_3($p0), $v_7 = 0; $v_7 < $v_2.length; $v_7++) {
            var $v_8 = $v_2[$v_7];
            if (!$v_8.$3_0) {
                var $v_9 = $v_1[$v_8.$5_0.toString()];
                if (IsNull($v_9)) {
                    $v_9 = new Array(0);
                    $v_1[$v_8.$5_0.toString()] = $v_9
                }
                $v_9[$v_9.length] = $v_8
            }
        }
        var $v_3 = new Sys.StringBuilder("<LookupMruData>"), $$dict_F = $v_1;
        for (var $$key_G in $$dict_F) {
            var $v_A = { key: $$key_G, value: $$dict_F[$$key_G] };
            $v_3.append(String.format("<LookupMruEntityData etc='{0}'>",
                CrmEncodeDecode.CrmXmlAttributeEncode($v_A.key)));
            for (var $v_B = $v_A.value, $v_C = 0; $v_C < $v_B.length; $v_C++) $v_3.append($v_B[$v_C].get_xml());
            $v_3.append("</LookupMruEntityData>")
        }
        $v_3.append("</LookupMruData>");
        var $v_4 = new RemoteCommand("LookupMruWebService", "UploadLookupMru", null);
        $v_4.ErrorHandler = this.$$d_$1Q_3;
        $v_4.SetParameter("lookupMruXml", $v_3.toString().trim());
        $v_4.SetParameter("retrieveAfterUpdated", $p1);
        var $v_5 = new Date, $v_6 = $p3 < 0 ? $v_4.Execute($p2) : $v_4.Execute($p2, $p3, $p4);
        if (IsNull($p2) && !IsNull($v_6) && $v_6.Success) {
            this.$F_3 = $v_5;
            if ($p1) $v_0 = $v_6.ReturnValue.toString()
        }
        return $v_0
    },
    $12_3: function($p0) {
        if (isNullOrEmptyString($p0)) return "";
        for (var $v_0 = new Array(0),
            $v_1 = new Sys.StringBuilder,
            $v_2 = XUI.Xml.LoadXml($p0),
            $v_3 = XUI.Xml.SelectNodes($v_2, "/LookupMruData/LookupMruEntityData", null),
            $v_4 = 0;
            $v_4 < $v_3.length;
            $v_4++) {
            var $v_5 = $v_3[$v_4];
            try {
                var $v_6 = 0, $v_7 = null, $v_8 = $v_5.attributes.getNamedItem("etn");
                if (!IsNull($v_8)) $v_7 = $v_8.nodeValue;
                if (isNullOrEmptyString($v_7)) $v_6 = parseInt($v_5.attributes.getNamedItem("etc").nodeValue, 10);
                if (isNullOrEmptyString($v_7) && $v_6 <= 0) continue;
                for (var $v_9 = XUI.Xml
                             .SelectNodes($v_5, "LookupMruItem", null),
                    $v_A = 0;
                    $v_A < $v_9.length;
                    $v_A++) {
                    var $v_B = $v_9[$v_A];
                    if ($v_6) {
                        var $v_D = XUI.Xml.SelectSingleNode($v_B, "EntityTypeCode", null);
                        if (IsNull($v_D)) {
                            $v_D = $v_2.createElement("EntityTypeCode");
                            $v_B.appendChild($v_D)
                        }
                        $v_D.text = $v_6.toString()
                    }
                    if (!isNullOrEmptyString($v_7)) {
                        $v_8 = XUI.Xml.SelectSingleNode($v_B, "EntityTypeName", null);
                        if (IsNull($v_8)) {
                            $v_8 = $v_2.createElement("EntityTypeName");
                            $v_B.appendChild($v_8)
                        }
                        $v_8.text = $v_7
                    }
                    var $v_C = new Mscrm.LookupMruItem($v_B);
                    !$v_C.$3_0 && $v_1.append($v_C.get_userDataString())
                }
            } catch ($v_E) {
            }
        }
        return $v_1.toString()
    },
    $l_3: function() {
        try {
            Mscrm.CrmLocalStorage.removeItem(this.$N_3)
        } catch ($$e_0) {
        }
    },
    $g_3: function($p0) {
        var $v_0 = null;
        try {
            $v_0 = this.$t_3();
            if (!IsNull($p0)) {
                var $v_1 = String.format("Timestamp:Loaded={0},Updated={1},Saved={2}{3}{4}",
                    this.$L_3.toString(),
                    !IsNull(this.$J_3) ? this.$J_3.toString() : (new Date).toString(),
                    !IsNull(this.$F_3) ? this.$F_3.toString() : "",
                    "\n",
                    $p0);
                Mscrm.CrmLocalStorage.setItem(this.$N_3, $v_1)
            }
        } catch ($$e_3) {
            if (!IsNull($v_0)) {
                var $v_2 = String.format("Timestamp:Loaded={0},Updated={1},Saved={2}{3}{4}",
                    this.$L_3.toString(),
                    this.$J_3.toString(),
                    !IsNull(this.$F_3) ? this.$F_3.toString() : "",
                    "\n",
                    $v_0);
                Mscrm.CrmLocalStorage.setItem(this.$N_3, $v_2)
            }
        }
    },
    retrieveLookupMruItems: function(etc) {
        var $v_0 = new Array(1);
        $v_0[0] = etc;
        return this.retrieveLookupMruItemsByEtcList($v_0)
    },
    retrieveLookupMruItemsByEtcList: function(etcList) {
        var $v_0 = this.$S_3(this.$M_3(null)), $v_1 = new Array(0);
        if ($v_0.length > 0)
            for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
                var $v_3 = $v_0[$v_2];
                if ($v_3.$A_0 || $v_3.$3_0) continue;
                for (var $v_4 = 0; $v_4 < etcList.length; $v_4++)
                    if (etcList[$v_4] === $v_3.$5_0) {
                        $v_1[$v_1.length] = $v_3;
                        break
                    }
            }
        return $v_1
    },
    $S_3: function($p0) {
        var $v_0 = new Array(0);
        if ($p0)
            for (var $v_1 = $p0.split("\n"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2], $v_4 = new Mscrm.LookupMruItem(null);
                $v_4.set_userDataString($v_3);
                if (!$v_4.$3_0) $v_0[$v_0.length] = $v_4
            }
        return $v_0
    }
};
Mscrm.LookupMruListUI = function(isInlineLookup, rootElement) {
    this.$$d_$1E_0 = Function.createDelegate(this, this.$1E_0);
    this.$$d_$1R_0 = Function.createDelegate(this, this.$1R_0);
    this.$$d_$1D_0 = Function.createDelegate(this, this.$1D_0);
    this.$X_0 = [];
    this.$1_0 = -1;
    this.$9_0 = isInlineLookup;
    this.$k_0 = rootElement;
    this.$15_0()
};
Mscrm.LookupMruListUI.get_mruList = function() { return Mscrm.LookupMruListUI.$E };
Mscrm.LookupMruListUI.prototype = {
    $9_0: false,
    $k_0: null,
    $Z_0: false,
    $a_0: null,
    $Q_0: 0,
    $O_0: 0,
    $B_0: 0,
    $D_0: 0,
    $T_0: true,
    $y_0: null,
    $p_0: null,
    $0_0: null,
    $I_0: null,
    $x_0: null,
    $j_0: false,
    $i_0: 0,
    $K_0: "",
    $h_0: "",
    $2_0: null,
    $Y_0: 0,
    $b_0: null,
    get_isInlineLookupMru: function() { return this.$9_0 },
    get_itemIndex: function() { return this.$1_0 },
    set_itemIndex: function(value) {
        this.$1_0 = value;
        return value
    },
    get_searchMoreCallback: function() { return this.$a_0 },
    set_searchMoreCallback: function(value) {
        this.$a_0 = value;
        return value
    },
    $U_0: null,
    get_onDeleteCallback: function() { return this.$U_0 },
    set_onDeleteCallback: function(value) {
        this.$U_0 = value;
        return value
    },
    get_isInlineSearchMenuOpening: function() { return this.$Z_0 },
    set_isInlineSearchMenuOpening: function(value) {
        this.$Z_0 = value;
        return value
    },
    $V_0: null,
    get_shouldDisplayMru: function() { return this.$V_0 },
    set_shouldDisplayMru: function(value) {
        this.$V_0 = value;
        return value
    },
    $15_0: function() {
        if (this.$j_0) return;
        this.$j_0 = true;
        try {
            Mscrm.LookupMruListUI.$E = window.top.Sys.Application.findComponent("crmLookupMru")
        } catch ($v_0) {
            Mscrm.LookupMruListUI.$E = null;
            throw $v_0
        }
        this.$y_0 = this.$z_0();
        this.$p_0 = this.$z_0();
        this.$0_0 = this.$y_0;
        this.$I_0 = this.$p_0;
        var $$t_2 = this;
        this.$x_0 = function($p1_0) { $$t_2.$I_0.hide() }
    },
    $e_0: function() {
        this.$K_0 = "";
        if (!IsNull(this.$0_0)) {
            this.$0_0.clear();
            this.$0_0.hide()
        }
        if (!IsNull(this.$I_0)) {
            this.$I_0.clear();
            this.$I_0.hide()
        }
    },
    $1D_0: function($p0, $p1) {
        var $v_0 = $p0, $v_1 = $p1;
        return $v_0.$4_0.localeCompare($v_1.$4_0)
    },
    $1F_0: function($p0, $p1, $p2, $p3) {
        if (!IsNull(this.$V_0) && !this.$V_0()) return;
        $p0.sort(this.$$d_$1D_0);
        if ($p3 < this.$Y_0) return;
        if (!this.$2_0.length) {
            this.$e_0();
            return
        }
        this.$0_0.clear();
        if (this.$2_0.length > 0 && this.$9_0) {
            this.$0_0.set_menuId(this.$k_0.id.replace("_lookupTable", "_i_IMRU"));
            var $v_0 = document.createElement("DIV");
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-IL-MRU-Header");
            XUI.Html.SetText($v_0, window.LOCID_INLINELOOKUP_MRU_HEADER);
            this.$0_0.set_header($v_0)
        }
        for (var $v_1 = 0; $v_1 < this.$2_0.length; $v_1++)
            if (this.$2_0[$v_1].$4_0.toLowerCase().startsWith($p1.toLowerCase())) {
                var $v_2 = Mscrm.MenuItem.createMenuItem(this.$2_0[$v_1].$4_0),
                    $v_3 = Mscrm.LookupMruListUI.$q[this.$2_0[$v_1].$5_0.toString()];
                if (IsNull($v_3)) {
                    var $v_4 = Mscrm.Utilities.getIconPath(this.$2_0[$v_1].$5_0);
                    Mscrm.LookupMruListUI.$q[this.$2_0[$v_1].$5_0.toString()] = $v_4;
                    $v_2.set_iconPath($v_4)
                } else $v_2.set_iconPath($v_3.toString());
                $v_2.set_auxIconPath(window.CDNURL + "/_imgs/smalllistdelete_16.png");
                $v_2.set_auxIconTooltip(Mscrm.LookupMruListUI.$E.lookupMruDeleteTooltip);
                $v_2.set_actionCallback(this.$$d_$1R_0);
                $v_2.set_auxActionCallback(this.$$d_$1E_0);
                $v_2.set_auxIconMatchesItem(true);
                $v_2.set_hideOnAuxAction(false);
                $v_2.set_tooltip(String.format("{0}: {1}", this.$2_0[$v_1].$G_0, this.$2_0[$v_1].$4_0));
                $v_2.set_reference($v_1);
                this.$0_0.addItem($v_2);
                if (this.$9_0 && this.$0_0.get_menuItems().length >= Mscrm.LookupMruListUI.$16) break
            }
        if (!this.$0_0.get_menuItems().length) {
            this.$e_0();
            return
        }
        if (this.$2_0.length > 0 && this.$9_0) {
            var $v_5 = Mscrm.InlineMenuItem.createInlineMenuItem(LOCID_INLINELOOKUP_MRUSEARCHMORE);
            $v_5.set_isSearchMore(true);
            $v_5.set_actionCallback(this.$a_0);
            this.$0_0.addItem($v_5)
        }
        this.$0_0.refresh();
        if ($p2 >= 0 && $p2 < this.$0_0.get_menuItems().length) this.$1_0 = $p2;
        this.$1_0 > -1 &&
            this.$1_0 < this.$0_0.get_menuItems().length &&
            this.$0_0.get_menuItems()[this.$1_0].displayHoverStyle();
        if (this.$Z_0) return;
        this.$0_0.show(this.$x_0)
    },
    $1R_0: function($p0) { !IsNull($p0) && !IsNull(this.$b_0) && this.$b_0(this.$2_0[$p0.get_reference()]) },
    $1E_0: function($p0) {
        var $v_0 = this.$11_0($p0);
        !IsNull(this.$U_0) && this.$U_0($v_0)
    },
    $11_0: function($p0) {
        var $v_0 = "";
        if (!IsNull($p0)) {
            for (var $v_1 = this.$1_0, $v_2 = this.$1_0, $v_5 = 0; $v_5 < this.$0_0.get_menuItems().length; $v_5++)
                if (this.$0_0.get_menuItems()[$v_5].get_menuItemId() === $p0.get_menuItemId()) {
                    $v_2 = $v_5;
                    break
                }
            if ($v_2 < $v_1 || $v_1 >= this.$0_0.get_menuItems().length - 1) $v_1--;
            var $v_3 = false;
            if ($v_2 === this.$1_0) {
                $v_3 = true;
                this.$1_0 = $v_1
            } else if (this.$0_0.get_menuItems().length === 1) this.$1_0 = -1;
            var $v_4 = -2;
            if ($v_3) {
                if (!$v_2 && this.$0_0.get_menuItems().length > 1) $v_4 = 0;
                else if ($v_2 === this.$0_0.get_menuItems().length - 1) $v_4 = this.$0_0.get_menuItems().length - 2;
                else $v_4 = $v_2;
                var $v_6 = $v_4 + 1;
                if ($v_6 >= this.$0_0.get_menuItems().length || $v_6 === $v_2) $v_6--;
                if ($v_6 >= 0 && $v_6 < this.$0_0.get_menuItems().length - 1
                ) $v_0 = this.$0_0.get_menuItems()[$v_6].get_title()
            } else {
                $v_0 = null;
                if ($v_2 > this.$1_0) $v_4 = this.$1_0;
                else $v_4 = this.$1_0 - 1
            }
            Mscrm.LookupMruListUI.$E.removeRecord(this.$2_0[$p0.get_reference()]);
            this.refreshLookupMruList(this.$K_0, true, $v_4)
        }
        return $v_0
    },
    $z_0: function() {
        var $v_0, $v_1 = $get("");
        $v_0 = Mscrm.Menu.createMenu($v_1);
        $v_0.set_stylePrefix(this.$9_0 ? "IL" : "LK");
        $v_0.set_activeItemIndex(-1);
        $v_0.set_neverGrabFocus(true);
        if (this.$9_0) $v_0.set_maxHeight(Mscrm.LookupMruListUI.$n);
        else $v_0.set_maxHeight(Mscrm.LookupMruListUI.$m);
        $v_0.set_width(Mscrm.LookupMruListUI.$10);
        return $v_0
    },
    isVisible: function() { return !!this.$0_0 && this.$0_0.get_isVisible() },
    isSelected: function() { return this.isVisible() && this.$0_0.get_menuItems().length > 0 && this.$1_0 !== -1 },
    showLookupMruItems: function(offsetLeft, offsetTop, lookupWidth, lookupHeight, etcList, text, selectCallBack) {
        this.$15_0();
        this.$1_0 = -1;
        if (this.$9_0 && lookupWidth < Mscrm.LookupMruListUI.$r) this.$B_0 = Mscrm.LookupMruListUI.$r;
        else if (!this.$9_0 && lookupWidth < Mscrm.LookupMruListUI.$v) this.$B_0 = Mscrm.LookupMruListUI.$v;
        else if (!this.$9_0 && lookupWidth > Mscrm.LookupMruListUI.$u) this.$B_0 = Mscrm.LookupMruListUI.$u;
        else this.$B_0 = lookupWidth;
        if (IsNull(etcList) || etcList === "" || IsNull(text)) {
            this.$e_0();
            return
        }
        this.$b_0 = selectCallBack;
        if (etcList !== this.$h_0) {
            this.$X_0 = [];
            for (var $v_1 = etcList
                         .split(","),
                $v_2 = 0;
                $v_2 < $v_1.length;
                $v_2++) this.$X_0[$v_2] = parseInt($v_1[$v_2], 10);
            this.$h_0 = etcList
        }
        this.$Q_0 = offsetTop + lookupHeight;
        if (this.$9_0) this.$D_0 = Mscrm.LookupMruListUI.$n;
        else this.$D_0 = Mscrm.LookupMruListUI.$m;
        this.$T_0 = true;
        var $v_0 = Math.min(this.$D_0, document.documentElement.scrollHeight);
        if (this.$Q_0 + this.$D_0 > document.documentElement.scrollHeight)
            if (offsetTop - this.$D_0 > 0) {
                this.$Q_0 = offsetTop;
                this.$T_0 = false
            } else if (document.documentElement
                .scrollHeight -
                (offsetTop + lookupHeight) >
                offsetTop) this.$D_0 = document.documentElement.scrollHeight - (offsetTop + lookupHeight);
            else {
                this.$Q_0 = offsetTop;
                this.$D_0 = offsetTop;
                this.$T_0 = false
            }
        this.$O_0 = offsetLeft;
        if (this.$9_0)
            if (Mscrm.Utilities.get_isLeftToRight()) {
                var $v_3 = window.document.documentElement.clientWidth;
                if (offsetLeft + this.$B_0 > $v_3) this.$O_0 -= this.$B_0 - lookupWidth + 1
            } else if (offsetLeft - this.$B_0 < 0) this.$O_0 += this.$B_0 + 1;
            else this.$O_0 += lookupWidth - 2;
        this.refreshLookupMruList(text, true, -1)
    },
    refreshLookupMruList: function(text, refreshMruList, hoverIndex) {
        if (IsNull(hoverIndex)) hoverIndex = -1;
        if (refreshMruList) this.$2_0 = Mscrm.LookupMruListUI.$E.retrieveLookupMruItemsByEtcList(this.$X_0);
        else if (this.$K_0 !== "" && this.$K_0 === text) return;
        this.$K_0 = text;
        var $v_0 = this.$0_0;
        this.$0_0 = this.$I_0;
        this.$I_0 = $v_0;
        this.$0_0.set_top(this.$Q_0);
        this.$0_0.set_left(this.$O_0);
        this.$0_0.set_width(this.$B_0);
        this.$0_0.set_maxHeight(this.$D_0);
        this.$0_0.set_launchesDown(this.$T_0);
        this.$Y_0++;
        var $v_1 = this.$Y_0;
        window.clearTimeout(this.$i_0);
        var $$t_5 = this;
        this.$i_0 = window.setTimeout(function() { $$t_5.$1F_0($$t_5.$2_0, $$t_5.$K_0, hoverIndex, $v_1) }, 100);
        this.$1_0 = hoverIndex
    },
    addLookupMruItems: function(items) { Mscrm.LookupMruListUI.$E.addRecords(items) },
    updateLookupMruItems: function(items) { Mscrm.LookupMruListUI.$E.updateRecords(items) },
    lookupMruSelectedItemTitle: function() {
        if (!this.isVisible() || this.$1_0 === -1 || !this.$0_0.get_menuItems().length) return null;
        return this.$0_0.get_menuItems()[this.$1_0].get_title()
    },
    lookupMruSelectedMruItem: function() {
        if (!this
            .isVisible() ||
            this.$1_0 === -1 ||
            !this.$0_0.get_menuItems().length ||
            !this.$2_0.length) return null;
        return this.$2_0[this.$0_0.get_menuItems()[this.$1_0].get_reference()]
    },
    deleteCurrLookupMruItem: function() {
        if (!this.isVisible() || this.$1_0 === -1 || !this.$0_0.get_menuItems().length) return null;
        return this.$11_0(this.$0_0.get_menuItems()[this.$1_0])
    },
    selectPreviousLookupMruItem: function() { return this.$19_0(false) },
    selectNextLookupMruItem: function() { return this.$19_0(true) },
    $19_0: function($p0) {
        var $v_0 = Mscrm.Utilities.selectMenuItemOnNavigation($p0, this.$0_0, this.$1_0, "MRUMenu");
        this.$1_0 = $v_0["itemindex"];
        if (IsNull($v_0["itemtitle"])) return "";
        else return $v_0["itemtitle"].toString()
    },
    hideLookupMruItems: function() { this.$e_0() }
};
Mscrm.LookupMruItem.registerClass("Mscrm.LookupMruItem");
Mscrm.LookupMruList.registerClass("Mscrm.LookupMruList", Mscrm.CrmUIControl);
Mscrm.LookupMruListUI.registerClass("Mscrm.LookupMruListUI");
Mscrm.LookupMruItem.recordSeparator = "\n";
Mscrm.LookupMruItem.fieldSeparator = ";";
Mscrm.LookupMruListUI.$E = null;
Mscrm.LookupMruListUI.$v = 150;
Mscrm.LookupMruListUI.$r = 250;
Mscrm.LookupMruListUI.$u = 400;
Mscrm.LookupMruListUI.$10 = 150;
Mscrm.LookupMruListUI.$m = 178;
Mscrm.LookupMruListUI.$n = 285;
Mscrm.LookupMruListUI.$16 = 10;
Mscrm.LookupMruListUI.$q = {}