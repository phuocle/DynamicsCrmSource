Type.registerNamespace("Mscrm");
Mscrm.DocumentLocationSelector = function($p0) {
    this.$$d_$D_3 = Function.createDelegate(this, this.$D_3);
    this.$$d_$C_3 = Function.createDelegate(this, this.$C_3);
    this.$$d_locationSelectorHidden = Function.createDelegate(this, this.locationSelectorHidden);
    this.$$d_$E_3 = Function.createDelegate(this, this.$E_3);
    this.$$d_$H_3 = Function.createDelegate(this, this.$H_3);
    this.$$d_$F_3 = Function.createDelegate(this, this.$F_3);
    this.$$d_$I_3 = Function.createDelegate(this, this.$I_3);
    this.$$d_$G_3 = Function.createDelegate(this, this.$G_3);
    Mscrm.DocumentLocationSelector.initializeBase(this, [$p0]);
    this.$2_3 = $p0
};
Mscrm.DocumentLocationSelector.prototype = {
    $2_3: null,
    $1_3: null,
    $0_3: null,
    $3_3: null,
    $6_3: false,
    documentLocationsXml: null,
    $5_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = this.$2_3.parentNode;
        this.$1_3 = this.$2_3;
        this.$2_3 = XUI.Html.DomUtils.GetFirstChild($v_0).getElementsByTagName("SPAN")[0];
        if (this.$2_3) {
            $addHandler(this.$1_3, "mouseover", this.$$d_$G_3);
            $addHandler(this.$1_3, "mouseout", this.$$d_$I_3);
            $addHandler(this.$1_3, "focus", this.$$d_$F_3);
            $addHandler(this.$1_3, "blur", this.$$d_$I_3);
            $addHandler(this.$1_3, "keydown", this.$$d_$H_3);
            $addHandler(this.$1_3, "click", this.$$d_$E_3)
        }
        this.$5_3 = XUI.Xml.LoadXml(this.documentLocationsXml);
        if (IsNull(this.$0_3)) {
            this.$0_3 = this.$7_3();
            this.$9_3(this.$0_3)
        }
    },
    $4_3: false,
    get_disabled: function() { return this.$4_3 },
    set_disabled: function(value) {
        this.$4_3 = value;
        this.$4_3 && this.$1_3 && $clearHandlers(this.$1_3);
        return value
    },
    $L_3: function($p0) { this.$1_3.className = "ms-crm-View-Name-hover ms-crm-View-Name-View-Lite-hover" },
    $B_3: function($p0) { this.$1_3.className = "ms-crm-View-Name-select ms-crm-View-Name-View-Lite-select" },
    $A_3: function($p0) { this.$1_3.className = "ms-crm-View-Name ms-crm-View-Name-View-Lite" },
    $G_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "NOBR");
        this.$L_3($v_0)
    },
    $I_3: function($p0) {
        if (!this.$6_3) {
            var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "NOBR");
            this.$A_3($v_0)
        }
    },
    $F_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "NOBR");
        this.$B_3($v_0)
    },
    $H_3: function($p0) {
        switch ($p0.keyCode) {
        case 13:
        case 32:
            $p0.stopPropagation();
            $p0.preventDefault();
            var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "NOBR");
            this.$8_3($v_0);
            break
        }
    },
    $E_3: function($p0) {
        $p0.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "NOBR");
        this.$8_3($v_0)
    },
    $8_3: function($p0) {
        this.$B_3($p0);
        var $v_0 = Mscrm.Utilities.getXYPos(this.$1_3, window.LOCID_UI_DIR === "RTL"),
            $v_1 = $v_0["y"] + this.$1_3.offsetHeight,
            $v_2 = $v_0["x"];
        if (window.LOCID_UI_DIR === "RTL") $v_2 = $v_2 + this.$1_3.offsetWidth;
        this.$K_3($p0, $v_2, $v_1)
    },
    $K_3: function($p0, $p1, $p2) {
        if (IsNull(this.$0_3)) {
            this.$0_3 = this.$7_3();
            this.$9_3(this.$0_3)
        }
        this.$0_3.set_left($p1);
        this.$0_3.set_top($p2);
        this.$0_3.show();
        this.$6_3 = true
    },
    $7_3: function() {
        var $v_0 = Mscrm.Menu.createMenu();
        $v_0.set_stylePrefix("VS");
        $v_0.set_propagateStyle(false);
        $v_0.set_width(284);
        $v_0.set_hideCallback(this.$$d_locationSelectorHidden);
        $v_0.set_shiftVertical(false);
        return $v_0
    },
    locationSelectorHidden: function(menu) {
        this.$6_3 = false;
        var $v_0 = this.$2_3.parentNode.parentNode;
        this.$A_3($v_0)
    },
    $9_3: function($p0) {
        if (IsNull($p0)) return;
        this.$J_3($p0)
    },
    $J_3: function($p0) {
        var $v_0 = Mscrm.MenuItem.createMenuItem(window.LOCID_ASSOCIATE_LOCATION);
        $v_0.set_actionCallback(this.$$d_$C_3);
        $v_0.set_stylePrefix("VS");
        $v_0.set_menuItemId("associatelocation");
        $p0.addItem($v_0);
        var $v_1 = XUI.Xml.SelectNodes(this.$5_3, "/sharepointdocumentlocations/sharepointdocumentlocation", null);
        if (!$v_1.length)
            $v_1 = XUI.Xml.SelectNodes(this.$5_3, "/sharePointdocumentlocations/sharepointdocumentlocation", null);
        var $v_2 = 0;
        while ($v_2 < $v_1.length) {
            var $v_3 = XUI.Xml.GetText(XUI.Xml.SelectNodes($v_1[$v_2], "name", null)[0]),
                $v_4 = Mscrm.MenuItem.createMenuItem($v_3),
                $v_5 = XUI.Xml.GetText(XUI.Xml.SelectNodes($v_1[$v_2], "sharepointdocumentlocationid", null)[0]),
                $v_6 = {};
            $v_6["locationid"] = $v_5;
            $v_6["locationName"] = $v_3;
            $v_4.set_reference($v_6);
            $v_4.set_actionCallback(this.$$d_$D_3);
            $v_4.set_stylePrefix("VS");
            $v_4.set_menuItemId($v_5);
            $p0.addItem($v_4);
            $v_2++
        }
    },
    $C_3: function($p0) { Mscrm.DocumentLocationHelper.addLocation() },
    $D_3: function($p0, $p1) {
        var $v_0 = $p0.get_reference(), $v_1 = "", $v_2 = "";
        if ($p1 || IsNull($v_0["siteCollectionUrl"]) && IsNull($v_0["selectedLocationUrl"])) {
            var $v_3 = new RemoteCommand("DocumentManagementWebService", "RetrieveAbsoluteAndSiteCollectionUrl");
            $v_3.SetParameter("logicalName", "sharepointdocumentlocation");
            $v_3.SetParameter("entityId", $v_0["locationid"]);
            var $v_4 = $v_3.Execute(), $v_5 = $v_4.ReturnValue.string;
            if ($v_5) {
                if (Object.getType($v_5[0]) === String) {
                    $v_0["siteCollectionUrl"] = $v_5[0];
                    $v_1 = $v_5[0]
                }
                $v_0["selectedLocationUrl"] = $v_5[1];
                $v_2 = $v_5[1]
            }
        } else {
            $v_1 = $v_0["siteCollectionUrl"];
            $v_2 = $v_0["selectedLocationUrl"]
        }
        !IsNull(this.$3_3) && this.$3_3.set_isSelected(false);
        $p0.set_isSelected(true);
        $p0.get_parentMenu().set_focusElementOnShow($p0.get_itemContents());
        this.$3_3 = $p0;
        XUI.Html.SetText(this.$2_3, $v_0["locationName"]);
        Mscrm.DocumentLocationHelper.showGrid($v_1,
            $v_2,
            $v_0["locationName"].toString(),
            $v_0["locationid"].toString())
    },
    addLocationItemInMenu: function(locationId, locationName) {
        var $v_0 = locationName, $v_1 = Mscrm.MenuItem.createMenuItem($v_0), $v_2 = {};
        $v_2["locationid"] = locationId;
        $v_2["locationName"] = $v_0;
        $v_1.set_reference($v_2);
        $v_1.set_actionCallback(this.$$d_$D_3);
        $v_1.set_stylePrefix("VS");
        $v_1.set_menuItemId(locationId);
        this.$0_3.addItem($v_1);
        this.$0_3.refresh()
    },
    updateLocationNameInMenu: function(locationId, locationName) {
        for (var $v_0 = null, $v_1 = 0; $v_1 < this.$0_3.get_menuItems().length; $v_1++) {
            $v_0 = this.$0_3.get_menuItems()[$v_1];
            if (!isNullOrEmptyString($v_0.get_menuItemId()))
                if ($v_0.get_menuItemId() === locationId) {
                    $v_0.set_title(locationName);
                    var $v_2 = $v_0.get_reference();
                    $v_2["locationName"] = locationName;
                    this.$0_3.refresh();
                    break
                }
        }
    },
    getSelectedLocationId: function() { return this.$3_3.get_menuItemId() },
    setSelectedLocationItemInMenu: function(locationId, loadLocation) {
        for (var $v_0 = null, $v_1 = 0; $v_1 < this.$0_3.get_menuItems().length; $v_1++) {
            $v_0 = this.$0_3.get_menuItems()[$v_1];
            if (!isNullOrEmptyString($v_0.get_menuItemId()))
                if ($v_0.get_menuItemId() === locationId) {
                    this.$D_3($v_0, loadLocation);
                    break
                }
        }
    }
};
Mscrm.DocumentLocationSelector.registerClass("Mscrm.DocumentLocationSelector", Mscrm.CrmUIControl)