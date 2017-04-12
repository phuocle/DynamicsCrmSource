Type.registerNamespace("Mscrm");
Mscrm.Popup = function(clickHandler) {
    this.$$d_$C_0 = Function.createDelegate(this, this.$C_0);
    this.$$d_$N_0 = Function.createDelegate(this, this.$N_0);
    this.$$d_$J_0 = Function.createDelegate(this, this.$J_0);
    this.$$d_$K_0 = Function.createDelegate(this, this.$K_0);
    this.$$d_$H_0 = Function.createDelegate(this, this.$H_0);
    this.$6_0 = clickHandler;
    this.$9_0 = {}
};
Mscrm.Popup.prototype = {
    $6_0: null,
    $8_0: true,
    $2_0: null,
    $3_0: null,
    $9_0: null,
    $0_0: null,
    dispose: function() {
        if (!IsNull(this.$0_0)) {
            this.$0_0.dispose();
            this.$0_0 = null
        }
        if (!IsNull(this.$2_0)) {
            this.$2_0.dispose();
            this.$2_0 = null
        }
        Mscrm.Utilities.destroyObject(this)
    },
    get_showOkCancelButtons: function() { return this.$8_0 },
    set_showOkCancelButtons: function(value) {
        this.$8_0 = value;
        return value
    },
    get_menuXml: function() { return this.$3_0 },
    set_menuXml: function(value) {
        this.$3_0 = value;
        return value
    },
    get_currentMenu: function() { return this.$0_0 },
    set_currentMenu: function(value) {
        this.$0_0 = value;
        return value
    },
    setAttributeUtil: function(node, attr, value) {
        !IsNull(node.attributes.getNamedItem(attr)) && node.attributes.removeNamedItem(attr);
        var $v_0 = this.$3_0.createAttribute(attr);
        $v_0.value = value;
        node.attributes.setNamedItem($v_0);
        return node
    },
    populateFilterMenu: function(filterxml) {
        !IsNull(this.$0_0) && this.$0_0.clear();
        this.$3_0 = XUI.Xml.LoadXml(filterxml);
        var $v_0 = this.$3_0.getElementsByTagName("Menu")[0];
        !IsNull($v_0) && $v_0.childNodes.length > 0 && this.$I_0(this.$0_0, $v_0)
    },
    $E_0: function($p0, $p1) {
        var $v_0 = null;
        if (IsNull($p0.get_body()))
            if (!IsNull($p1))
                for (var $v_1 = 0; $v_1 < $p1.childNodes.length; $v_1++) {
                    $v_0 = Mscrm.CheckBoxMenuItem
                        .createCheckBoxMenuItem(XUI.Xml
                            .GetText($p1.childNodes[$v_1].attributes.getNamedItem("display")));
                    $v_0.set_menuItemId(XUI.Xml.GetText($p1.childNodes[$v_1].attributes.getNamedItem("id")));
                    $v_0.get_itemContents().id = XUI.Xml.GetText($p1.childNodes[$v_1].attributes.getNamedItem("id"));
                    if (XUI.Xml.GetText($p1.childNodes[$v_1].attributes
                            .getNamedItem("ischecked")) ===
                        "true") $v_0.get_itemContents().getElementsByTagName("input")[0].checked = true;
                    $v_0.set_hideOnAction(false);
                    $v_0.set_stylePrefix("VS");
                    $v_0.set_hideParentOnContextItemAction(false);
                    $v_0.set_actionCallback(this.$$d_$H_0);
                    $p0.addItem($v_0)
                }
        $p0.get_isLoading() && $p0.set_isLoading(false)
    },
    $I_0: function($p0, $p1) {
        var $v_0 = XUI.Xml.SelectNodes($p1, "//Menu/MenuItem", null), $v_1 = 0;
        while ($v_1 < $v_0.length) {
            var $v_2 = null, $v_3 = XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("type"));
            switch ($v_3) {
            case "header":
                $v_2 = Mscrm.MenuItem.createMenuItem(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("display")));
                $v_2.set_stylePrefix("VS-header");
                $v_2.set_hideParentOnContextItemAction(false);
                $v_0[$v_1].attributes.getNamedItem("iconPath") &&
                    $v_2.set_iconPath(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("iconPath")));
                $p0.addItem($v_2);
                break;
            case "MessageArea":
                $v_2 = Mscrm.ContainerMenuItem
                    .createContainerMenuItem(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("display")));
                $v_2.set_stylePrefix("VS-header");
                for (var $v_4 = $v_2.get_itemContents().getElementsByTagName("span"), $v_7 = 0;
                    $v_7 < $v_4.length;
                    $v_7++)
                    if ($v_4[$v_7].getAttribute("id")
                        .toString() ===
                        "ContainerMenuItem") $v_4[$v_7].style.border = "1px solid";
                $v_2.set_containerHeight("100%");
                $v_2.get_itemContents().disabled = true;
                $v_2.get_itemContents().style.whiteSpace = "normal";
                $p0.addItem($v_2);
                break;
            case "notification":
                $v_2 = Mscrm.MenuItem.createMenuItem(window.LOCID_GF_COMPLEXMESSAGE);
                $v_2.set_stylePrefix("Ntfc");
                $v_2.set_iconPath(window.CDNURL + "/_imgs/error/notif_icn_info16.png");
                $v_2.set_menuItemId("ComplexNotification");
                $v_2.get_itemContents().id = "ComplexNotification";
                $v_2.set_hideParentOnContextItemAction(false);
                $p0.addItem($v_2);
                break;
            case "space":
                $v_2 = Mscrm.MenuItemSeparator.createSeparator(false);
                $v_2.set_stylePrefix("VS");
                $p0.addItem($v_2);
                break;
            case "submenu":
                var $v_5 = XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("id")), $v_6 = this.$9_0[$v_5];
                if (!$v_6) {
                    $v_6 = Mscrm.Menu.createMenu();
                    $v_6.set_title(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("display")));
                    $v_6.set_id($v_5);
                    $v_6.set_menuItemId($v_5);
                    $v_6.set_stylePrefix("AVS");
                    $v_6.set_isLoading(true);
                    $v_6.set_width(284);
                    $v_6.set_propagateStyle(false);
                    $v_0[$v_1].attributes.getNamedItem("iconPath") &&
                        $v_6.set_iconPath(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("iconPath")));
                    this.$9_0[$v_5] = $v_6
                } else $v_6.clear();
                this.$E_0($v_6, $v_0[$v_1]);
                $p0.addItem($v_6);
                !IsNull($v_6.get_inlineItem()) && $v_6.get_inlineItem().set_stylePrefix("AVS");
                break;
            case "SelectionArea":
                this.$D_0($p0);
                break;
            case "footer":
                if (this.$8_0) {
                    this.$2_0 = Mscrm.MenuItem.createMenuItem("");
                    this.$2_0.set_menuItemId(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("type")));
                    this.$2_0.get_itemContents().id = XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("type"));
                    var $v_8 = XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("footerType"));
                    $p0.set_footer(this.$G_0(this.$2_0,
                        $v_8,
                        XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("OkButtonId")),
                        XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("CancelButtonId"))));
                    this.$2_0.set_parentMenu($p0)
                } else {
                    if (!IsNull($p0.get_footer())) $p0.get_footer().innerHTML = null;
                    $p0.set_footer(null)
                }
                break;
            default:
                $v_2 = Mscrm.MenuItem.createMenuItem(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("display")));
                !IsNull($v_0[$v_1].attributes.getNamedItem("tooltip")) &&
                    $v_2.set_tooltip(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("tooltip")));
                $v_0[$v_1].attributes.getNamedItem("iconPath") &&
                    $v_2.set_iconPath(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("iconPath")));
                if ($v_0[$v_1].attributes.getNamedItem("isenabled") &&
                    !Mscrm.Utilities.parseBoolean(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("isenabled")))) {
                    $v_2.set_disabled(true);
                    $v_2.get_itemContents().disabled = true
                } else $v_2.set_actionCallback(this.$$d_$H_0);
                $v_2.set_stylePrefix("VS");
                $v_2.get_itemContents().id = XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("id"));
                $v_2.set_menuItemId(XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("id")));
                $p0.addItem($v_2);
                break
            }
            $v_1++
        }
    },
    $G_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = document.createElement("DIV");
        $v_0.style.backgroundColor = "#ffffff";
        $v_0.style.textAlign = "right";
        $v_0.style.paddingTop = "4px";
        $v_0.style.paddingBottom = "4px";
        if (window.LOCID_UI_DIR === "RTL") {
            $v_0.style.borderRight = "1px solid #a1a5aa ";
            $v_0.style.textAlign = "left";
            $v_0.style.paddingLeft = "10px"
        } else {
            $v_0.style.borderLeft = "1px solid #a1a5aa ";
            $v_0.style.textAlign = "right";
            $v_0.style.paddingRight = "10px"
        }
        switch ($p1) {
        case "0":
            var $v_1 = document.createElement("button");
            $v_1.innerHTML = Mscrm.Utilities.decorateAccessKey(window.LOCID_CTRL_MULTIS_BTN_OK);
            $v_1.id = $p2;
            $v_1.accessKey = Mscrm.Utilities.getAccessKey(window.LOCID_CTRL_MULTIS_BTN_OK);
            $v_1.className = "ms-crm-Button";
            $v_1.tabIndex = 0;
            $addHandler($v_1, "click", this.$$d_$K_0);
            $v_0.appendChild($v_1);
            var $v_2 = document.createElement("span");
            $v_2.style.display = "inline-block";
            $v_2.style.width = "7px";
            $v_2.style.borderColor = "#ffffff";
            $v_2.style.backgroundColor = "#ffffff";
            $v_0.appendChild($v_2);
            var $v_3 = document.createElement("button");
            $v_3.innerHTML = Mscrm.Utilities.decorateAccessKey(window.LOCID_CTRL_MULTIS_BTN_CANCEL);
            $v_3.accessKey = Mscrm.Utilities.getAccessKey(window.LOCID_CTRL_MULTIS_BTN_CANCEL);
            $v_3.tabIndex = 0;
            $v_3.id = $p3;
            $v_3.className = "ms-crm-Button";
            $addHandler($v_3, "click", this.$$d_$J_0);
            $v_0.appendChild($v_3);
            break
        }
        return $v_0
    },
    $K_0: function($p0) {
        var $v_0 = {};
        $v_0["menuitem"] = this.$2_0;
        this.$2_0.set_hideOnAction(true);
        this.$2_0.set_hideParentOnContextItemAction(true);
        this.$6_0(1, $v_0);
        this.$2_0.get_parentMenu().hideAll(true)
    },
    $J_0: function($p0) {
        var $v_0 = {};
        $v_0["menuitem"] = this.$2_0;
        this.$6_0(2, $v_0);
        this.$2_0.get_parentMenu().hideAll(true)
    },
    $N_0: function($p0) {
        var $v_0 = $p0.get_itemContents().parentNode.getElementsByTagName("input"),
            $v_1 = XUI.Xml.SelectNodes(this.$3_0, "//option", null);
        if (!$p0.get_itemContents().getElementsByTagName("input")[0].checked)
            for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
                $v_0[$v_2].checked = false;
                $v_2 !== $v_0.length - 1 && this.setAttributeUtil($v_1[$v_2], "ischecked", "false")
            }
        else
            for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
                $v_0[$v_3].checked = true;
                $v_3 !== $v_0.length - 1 && this.setAttributeUtil($v_1[$v_3], "ischecked", "true")
            }
    },
    $C_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode(this.$3_0, "//option[@id='" + $p0.get_menuItemId() + "']", null);
        if ($p0.get_itemContents().getElementsByTagName("input")[0]
            .checked) $v_0 = this.setAttributeUtil($v_0, "ischecked", "true");
        else $v_0 = this.setAttributeUtil($v_0, "ischecked", "false");
        for (var $v_1 = $p0.get_itemContents().parentNode.getElementsByTagName("input"),
            $v_2 = 0,
            $v_3 = $v_1[0],
            $v_4 = 1;
            $v_4 < $v_1.length;
            $v_4++)
            if (!$v_1[$v_4].checked) $v_3.checked = false;
            else $v_2++;
        if ($v_2 === $v_1.length - 1) $v_3.checked = true;
        else $v_3.checked = false
    },
    $B_0: function() {
        for (var $v_0 = XUI.Xml.SelectNodes(this.$3_0, "//option", null), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
            if (IsNull($v_0[$v_1].attributes.getNamedItem("ischecked"))) return false;
            else if (XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("ischecked")) === "false") return false;
        return true
    },
    $H_0: function($p0) {
        var $v_0 = {};
        $v_0["menuitem"] = $p0;
        this.$6_0(0, $v_0)
    },
    $D_0: function($p0) {
        var $v_0 = XUI.Xml.SelectNodes(this.$3_0, "//option", null),
            $v_1 = XUI.Xml.SelectSingleNode(this.$3_0, "//MenuItem[@id='SelectionArea']", null);
        if (!IsNull($v_0)) {
            var $v_2 = null, $v_3 = 0;
            if (!$v_3 && $v_0.length) {
                $v_2 = Mscrm.CheckBoxMenuItem.createCheckBoxMenuItem(window.LOCID_GF_SELECTALL);
                !IsNull($v_1.attributes.getNamedItem("iconPath")) &&
                    $v_2.set_iconPath(XUI.Xml.GetText($v_1.attributes.getNamedItem("iconPath")));
                $v_2.set_actionCallback(this.$$d_$N_0);
                $v_2.set_menuItemId("selectall");
                $v_2.set_hideOnAction(false);
                $v_2.set_stylePrefix("VS");
                $v_2.set_hideParentOnContextItemAction(false);
                $v_2.get_itemContents().id = "selectall";
                $p0.addItem($v_2);
                $v_2.set_reference(Object.getType($p0.get_menuItems()));
                $v_3++;
                var $v_4 = this.$B_0();
                if ($v_4) $v_2.get_itemContents().getElementsByTagName("input")[0].checked = true
            }
            for (var $v_5 = 0; $v_5 < $v_0.length; $v_5++) {
                var $v_6 = $v_0[$v_5];
                if ($v_5 === $v_0.length - 1) {
                    $v_2 = Mscrm.CheckBoxMenuItem.createCheckBoxMenuItem(XUI.Xml.GetText($v_6));
                    !IsNull($v_6.attributes.getNamedItem("value")) &&
                        $v_2.get_itemContents()
                        .setAttribute("value", XUI.Xml.GetText($v_6.attributes.getNamedItem("value")));
                    $v_2.set_menuItemId(XUI.Xml.GetText($v_6.attributes.getNamedItem("id")));
                    $v_2.get_itemContents().id = XUI.Xml.GetText($v_6.attributes.getNamedItem("id"));
                    this.$A_0($v_2);
                    !IsNull($v_6.attributes.getNamedItem("imagePath")) &&
                        $v_2.set_imagePath(XUI.Xml.GetText($v_6.attributes.getNamedItem("imagePath")));
                    $v_2.set_hideOnAction(false);
                    $v_2.set_stylePrefix("VS");
                    if (!IsNull($v_0[$v_5].attributes
                        .getNamedItem("ischecked")))
                        if (XUI.Xml.GetText($v_0[$v_5].attributes
                                .getNamedItem("ischecked")) ===
                            "true") $v_2.get_itemContents().getElementsByTagName("input")[0].checked = true;
                    $v_2.set_hideParentOnContextItemAction(false);
                    $v_2.set_actionCallback(this.$$d_$C_0)
                } else {
                    $v_2 = Mscrm.CheckBoxMenuItem.createCheckBoxMenuItem(XUI.Xml.GetText($v_6));
                    !IsNull($v_6.attributes.getNamedItem("value")) &&
                        $v_2.get_itemContents()
                        .setAttribute("value", XUI.Xml.GetText($v_6.attributes.getNamedItem("value")));
                    $v_2.set_menuItemId(XUI.Xml.GetText($v_6.attributes.getNamedItem("id")));
                    $v_2.get_itemContents().id = XUI.Xml.GetText($v_6.attributes.getNamedItem("id"));
                    !IsNull($v_6.attributes.getNamedItem("imagePath")) &&
                        $v_2.set_imagePath(XUI.Xml.GetText($v_6.attributes.getNamedItem("imagePath")));
                    this.$A_0($v_2);
                    $v_2.set_actionCallback(this.$$d_$C_0);
                    $v_2.set_hideOnAction(false);
                    $v_2.set_stylePrefix("VS");
                    if (!IsNull($v_0[$v_5].attributes
                        .getNamedItem("ischecked")))
                        if (XUI.Xml.GetText($v_0[$v_5].attributes
                                .getNamedItem("ischecked")) ===
                            "true") $v_2.get_itemContents().getElementsByTagName("input")[0].checked = true;
                    $v_2.set_hideParentOnContextItemAction(false)
                }
                $p0.addItem($v_2);
                $v_2.set_reference(Object.getType($p0.get_menuItems()))
            }
        }
    },
    $A_0: function($p0) {
        if (window.LOCID_UI_DIR === "RTL")
            $p0.get_itemContents().getElementsByTagName("input")[0].style.marginRight = "25px";
        else $p0.get_itemContents().getElementsByTagName("input")[0].style.marginLeft = "25px"
    }
};
Mscrm.FooterType = function() {};
Mscrm.MenuTypes = function() {};
Mscrm.CustomMenuItem = function() { Mscrm.CustomMenuItem.initializeBase(this) };
Mscrm.ContainerMenuItem = function() { Mscrm.ContainerMenuItem.initializeBase(this) };
Mscrm.ContainerMenuItem.createContainerMenuItem = function(title) {
    var $v_0 = $create(Mscrm.ContainerMenuItem);
    $v_0.set_title(title);
    return $v_0
};
Mscrm.ContainerMenuItem.prototype = {
    _height: null,
    get_containerHeight: function() { return this._height },
    set_containerHeight: function(value) {
        this._height = value;
        if (!IsNull(this._itemContents)) {
            this._anchor.setAttribute("height", value);
            this._separator.setAttribute("height", value);
            this._icon.setAttribute("height", value);
            this._iconSpan.setAttribute("height", value);
            this._text.setAttribute("height", value)
        }
        return value
    },
    createElements: function() {
        this._itemContents = document.createElement("li");
        this._itemContents.setAttribute("id", this.get_menuItemId());
        if (!IsNull(this.get_actionCallback())) this._itemContents.tabIndex = 0;
        !IsNull(this.get_contextMenu()) &&
            $addHandler(this._itemContents,
                "contextmenu",
                this.$$d_onContextMenu || (this.$$d_onContextMenu = Function.createDelegate(this, this.onContextMenu)));
        this._auxAnchor = document.createElement("a");
        this._auxAnchor.setAttribute("href", "#");
        if (this
            ._renderFormat ===
            Mscrm.MenuItem.formaT_AUX_IMAGE_SEP_TITLE)
            this._auxAnchor.style.styleFloat = Mscrm.Utilities.get_isLeftToRight() ? "left" : "right";
        else this._auxAnchor.style.styleFloat = Mscrm.Utilities.get_isLeftToRight() ? "right" : "left";
        if (!IsNull(this._auxActionCallback)) this._auxAnchor.tabIndex = 0;
        if (this._auxIconPath === "") this._auxAnchor.style.display = "none";
        this._auxIcon = document.createElement("img");
        this._auxIcon.setAttribute("alt", IsNull(this._auxIconTooltip) ? "" : this._auxIconTooltip);
        !isNullOrEmptyString(this._auxIconPath) && this._auxIcon.setAttribute("src", this._auxIconPath);
        this._anchor = document.createElement("a");
        this._anchor.setAttribute("title", this.get_tooltip());
        if (IsNull(this._actionCallback)) this._anchor.style.cursor = "default";
        this._icon = document.createElement("img");
        this._icon.setAttribute("src", this._iconPath);
        this._icon.setAttribute("alt", "");
        this._iconSpan = document.createElement("span");
        this._iconSpan.appendChild(this._icon);
        this._separator = document.createElement("span");
        this._separator.style.height = "100%";
        this._text = document.createElement("span");
        this._text.setAttribute("id", "ContainerMenuItem");
        this._text.style.textAlign = "center";
        var $v_0 = document.createElement("span");
        this._text.appendChild($v_0);
        if (!isNullOrEmptyString(this._title)) XUI.Html.SetText($v_0, this._title);
        else $v_0.innerHTML = "&nbsp;";
        this._itemContents.appendChild(this._auxAnchor);
        this._auxAnchor.appendChild(document.createElement("span"));
        XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).appendChild(this._auxIcon);
        this._itemContents.appendChild(this._anchor);
        this._anchor.appendChild(document.createElement("span"));
        XUI.Html.DomUtils.GetFirstChild(this._anchor).appendChild(this._iconSpan);
        XUI.Html.DomUtils.GetFirstChild(this._anchor).appendChild(this._separator);
        XUI.Html.DomUtils.GetFirstChild(this._anchor).appendChild(this._text);
        if (this._selected) this.displaySelectedStyle();
        else this.displayRestStyle()
    }
};
Mscrm.CheckBoxMenuItem = function() {
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$$d_onKeyDown = Function.createDelegate(this, this.onKeyDown);
    this._imgPath = window.CDNURL + "/_imgs/imagestrips/transparent_spacer.gif";
    Mscrm.CheckBoxMenuItem.initializeBase(this)
};
Mscrm.CheckBoxMenuItem.createCheckBoxMenuItem = function(title) {
    var $v_0 = $create(Mscrm.CheckBoxMenuItem);
    $v_0.set_title(title);
    return $v_0
};
Mscrm.CheckBoxMenuItem.prototype = {
    _checkBox: null,
    _img: null,
    _label: null,
    onKeyDown: function(e) {
        switch (e.keyCode) {
        case 13:
        case 32:
            if (Mscrm.Utilities.isFirefox()) {
                e.stopPropagation();
                e.preventDefault();
                if (e.target === this._itemContents || e.keyCode === 13) {
                    if (e
                        .keyCode ===
                        13 &&
                        e.target.tagName === "INPUT") this._checkBox.checked = !this._checkBox.checked;
                    this.onClick(e)
                }
            } else if (e.target === this._itemContents || e.keyCode === 13) {
                e.stopPropagation();
                e.preventDefault();
                if (e.keyCode === 13 && e.target.tagName === "INPUT") this._checkBox.checked = !this._checkBox.checked;
                this.onClick(e)
            }
            break
        }
    },
    onClick: function(e) {
        if (e.target.tagName !== "INPUT") {
            this._checkBox.checked = !this._checkBox.checked;
            e.preventDefault()
        }
        e.stopPropagation();
        Mscrm.MenuItem.prototype.onClick.call(this, e)
    },
    get_imagePath: function() { return this._imgPath },
    set_imagePath: function(value) {
        this._imgPath = value;
        !IsNull(this._itemContents) && this._img.setAttribute("src", value);
        return value
    },
    get_isCheckboxChecked: function() { return this._checkBox.checked },
    createElements: function() {
        this._itemContents = document.createElement("li");
        this._itemContents.setAttribute("id", this.get_menuItemId());
        $addHandler(this._itemContents,
            "focus",
            this.$$d_onFocus || (this.$$d_onFocus = Function.createDelegate(this, this.onFocus)));
        $addHandler(this._itemContents,
            "blur",
            this.$$d_onBlur || (this.$$d_onBlur = Function.createDelegate(this, this.onBlur)));
        $addHandler(this._itemContents, "keydown", this.$$d_onKeyDown);
        $addHandler(this._itemContents, "click", this.$$d_onClick);
        if (!IsNull(this.get_actionCallback())) this._itemContents.tabIndex = 0;
        !IsNull(this.get_contextMenu()) &&
            $addHandler(this._itemContents,
                "contextmenu",
                this.$$d_onContextMenu || (this.$$d_onContextMenu = Function.createDelegate(this, this.onContextMenu)));
        this._auxAnchor = document.createElement("a");
        this._auxAnchor.setAttribute("href", "#");
        if (this
            ._renderFormat ===
            Mscrm.MenuItem.formaT_AUX_IMAGE_SEP_TITLE)
            this._auxAnchor.style.styleFloat = Mscrm.Utilities.get_isLeftToRight() ? "left" : "right";
        else this._auxAnchor.style.styleFloat = Mscrm.Utilities.get_isLeftToRight() ? "right" : "left";
        $addHandler(this._auxAnchor,
            "click",
            this.$$d_onAuxClick || (this.$$d_onAuxClick = Function.createDelegate(this, this.onAuxClick)));
        $addHandler(this._auxAnchor,
            "mouseover",
            this.$$d_onAuxMouseOver || (this.$$d_onAuxMouseOver = Function.createDelegate(this, this.onAuxMouseOver)));
        $addHandler(this._auxAnchor,
            "mouseout",
            this.$$d_onAuxMouseOut || (this.$$d_onAuxMouseOut = Function.createDelegate(this, this.onAuxMouseOut)));
        $addHandler(this._auxAnchor,
            "focus",
            this.$$d_onAuxMouseOver || (this.$$d_onAuxMouseOver = Function.createDelegate(this, this.onAuxMouseOver)));
        $addHandler(this._auxAnchor,
            "blur",
            this.$$d_onAuxMouseOut || (this.$$d_onAuxMouseOut = Function.createDelegate(this, this.onAuxMouseOut)));
        $addHandler(this._auxAnchor, "keydown", this.$$d_onKeyDown);
        if (!IsNull(this._auxActionCallback)) this._auxAnchor.tabIndex = 0;
        if (this._auxIconPath === "") this._auxAnchor.style.display = "none";
        this._auxIcon = document.createElement("img");
        this._auxIcon.setAttribute("alt", IsNull(this._auxIconTooltip) ? "" : this._auxIconTooltip);
        !isNullOrEmptyString(this._auxIconPath) && this._auxIcon.setAttribute("src", this._auxIconPath);
        this._anchor = document.createElement("a");
        this._anchor.setAttribute("title", this.get_tooltip());
        $addHandler(this._anchor,
            "mouseover",
            this.$$d_onMouseOver || (this.$$d_onMouseOver = Function.createDelegate(this, this.onMouseOver)));
        $addHandler(this._anchor,
            "mouseout",
            this.$$d_onMouseOut || (this.$$d_onMouseOut = Function.createDelegate(this, this.onMouseOut)));
        if (IsNull(this._actionCallback)) this._anchor.style.cursor = "default";
        this._icon = document.createElement("img");
        this._icon.setAttribute("src", this._iconPath);
        this._icon.setAttribute("alt", "");
        this._iconSpan = document.createElement("span");
        this._iconSpan.appendChild(this._icon);
        this._separator = document.createElement("span");
        this._text = document.createElement("nobr");
        this._checkBox = document.createElement("input");
        var $v_0 = "_input" + this._menuItemId;
        this._checkBox.setAttribute("id", $v_0);
        this._checkBox.setAttribute("type", "checkbox");
        this._checkBox.style.width = "16px";
        this._checkBox.tabIndex = 0;
        this._img = document.createElement("img");
        this._img.setAttribute("alt", "");
        if (window.LOCID_UI_DIR === "RTL") this._img.style.marginLeft = "8px";
        else this._img.style.marginRight = "8px";
        this._img.style.width = "8%";
        this._img.style.height = "15px";
        this._img.setAttribute("align", "center");
        this._img.setAttribute("border", "0px");
        this._img.setAttribute("src", this._imgPath);
        this._img.setAttribute("class", "ms-crm-MenuItem-ImageCheckBox");
        this._text.appendChild(this._checkBox);
        this._text.appendChild(this._img);
        this._label = document.createElement("label");
        this._label.setAttribute("for", $v_0);
        this._text.appendChild(this._label);
        if (!isNullOrEmptyString(this._title)) XUI.Html.SetText(this._label, this._title);
        else this._label.innerHTML = "&nbsp;";
        this._itemContents.appendChild(this._auxAnchor);
        this._auxAnchor.appendChild(document.createElement("span"));
        XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).appendChild(this._auxIcon);
        this._itemContents.appendChild(this._anchor);
        this._anchor.appendChild(document.createElement("span"));
        XUI.Html.DomUtils.GetFirstChild(this._anchor).appendChild(this._iconSpan);
        XUI.Html.DomUtils.GetFirstChild(this._anchor).appendChild(this._separator);
        XUI.Html.DomUtils.GetFirstChild(this._anchor).appendChild(this._text);
        if (this._selected) this.displaySelectedStyle();
        else this.displayRestStyle()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this._itemContents)) {
            $removeHandler(this._itemContents,
                "focus",
                this.$$d_onFocus || (this.$$d_onFocus = Function.createDelegate(this, this.onFocus)));
            $removeHandler(this._itemContents,
                "blur",
                this.$$d_onBlur || (this.$$d_onBlur = Function.createDelegate(this, this.onBlur)));
            $removeHandler(this._itemContents, "keydown", this.$$d_onKeyDown);
            $removeHandler(this._itemContents, "click", this.$$d_onClick);
            !IsNull(this.get_contextMenu()) &&
                $removeHandler(this._itemContents,
                    "contextmenu",
                    this.$$d_onContextMenu ||
                    (this.$$d_onContextMenu = Function.createDelegate(this, this.onContextMenu)))
        }
        if (!IsNull(this._auxAnchor)) {
            $removeHandler(this._auxAnchor,
                "click",
                this.$$d_onAuxClick || (this.$$d_onAuxClick = Function.createDelegate(this, this.onAuxClick)));
            $removeHandler(this._auxAnchor,
                "mouseover",
                this.$$d_onAuxMouseOver ||
                (this.$$d_onAuxMouseOver = Function.createDelegate(this, this.onAuxMouseOver)));
            $removeHandler(this._auxAnchor,
                "mouseout",
                this.$$d_onAuxMouseOut || (this.$$d_onAuxMouseOut = Function.createDelegate(this, this.onAuxMouseOut)));
            $removeHandler(this._auxAnchor,
                "focus",
                this.$$d_onAuxMouseOver ||
                (this.$$d_onAuxMouseOver = Function.createDelegate(this, this.onAuxMouseOver)));
            $removeHandler(this._auxAnchor,
                "blur",
                this.$$d_onAuxMouseOut || (this.$$d_onAuxMouseOut = Function.createDelegate(this, this.onAuxMouseOut)));
            $removeHandler(this._auxAnchor, "keydown", this.$$d_onKeyDown)
        }
        if (!IsNull(this._anchor)) {
            $removeHandler(this._anchor,
                "mouseover",
                this.$$d_onMouseOver || (this.$$d_onMouseOver = Function.createDelegate(this, this.onMouseOver)));
            $removeHandler(this._anchor,
                "mouseout",
                this.$$d_onMouseOut || (this.$$d_onMouseOut = Function.createDelegate(this, this.onMouseOut)))
        }
        Mscrm.MenuItem.prototype.dispose.call(this)
    }
};
Mscrm.SelectorUtil = function(menuLink, popup, menuxmlstring) {
    this.$$d_$L_0 = Function.createDelegate(this, this.$L_0);
    this.$4_0 = menuLink;
    this.$1_0 = popup;
    this.$7_0 = menuxmlstring
};
Mscrm.SelectorUtil.prototype = {
    $4_0: null,
    $1_0: null,
    $7_0: "",
    $5_0: null,
    selectorClicked: function(src) {
        this.$4_0.className = this.$4_0.getAttribute("cssClass") + "-select";
        var $v_0 = this.$4_0.parentNode.parentNode,
            $v_1 = Mscrm.Utilities.getXYPos($v_0, window.LOCID_UI_DIR === "RTL", $get("crmContentPanel")),
            $v_2 = $v_1["y"] + $v_0.offsetHeight,
            $v_3 = $v_1["x"];
        if (window.LOCID_UI_DIR === "RTL") $v_3 = $v_3 + $v_0.offsetWidth;
        this.$O_0(src, $v_3, $v_2)
    },
    $O_0: function($p0, $p1, $p2) {
        this.$4_0.className = this.$4_0.getAttribute("cssClass") + "-select";
        if (IsNull(this.$1_0.$0_0)) {
            this.$1_0.$0_0 = this.$F_0();
            this.$1_0.populateFilterMenu(this.$7_0)
        } else {
            this.$1_0.$0_0.clear();
            this.$1_0.populateFilterMenu(this.$7_0)
        }
        this.$M_0($p0);
        this.$1_0.$0_0.set_left($p1);
        this.$1_0.$0_0.set_top($p2);
        this.$1_0.$0_0.show()
    },
    $F_0: function() {
        var $v_0 = Mscrm.Menu.createMenu();
        $v_0.set_stylePrefix("VS");
        $v_0.set_propagateStyle(false);
        $v_0.set_width(284);
        $v_0.set_shiftVertical(false);
        $v_0.set_hideCallback(this.$$d_$L_0);
        return $v_0
    },
    $L_0: function($p0) { this.$4_0.className = this.$4_0.getAttribute("cssClass") },
    $M_0: function($p0) {
        if (!IsNull(this.$5_0)) {
            this.$5_0.set_isSelected(false);
            this.$1_0.$0_0.set_focusElementOnShow(null);
            this.$5_0 = null
        }
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$4_0), $v_1 = "";
        if (!IsNull($v_0.attributes
            .getNamedItem("CurrentItem"))) $v_1 = $v_0.attributes.getNamedItem("CurrentItem").value;
        if (!IsNull($v_1))
            for (var $v_2 = null, $v_3 = 0; $v_3 < this.$1_0.$0_0.get_menuItems().length; $v_3++) {
                $v_2 = this.$1_0.$0_0.get_menuItems()[$v_3];
                if ($v_2.get_menuItemId() === $v_1) {
                    this.$5_0 = $v_2;
                    this.$5_0.set_isSelected(true);
                    this.$1_0.$0_0.set_focusElementOnShow(this.$1_0.$0_0.get_menuItems()[$v_3].get_itemContents());
                    break
                }
            }
    }
};
Mscrm.Popup.registerClass("Mscrm.Popup");
Mscrm.FooterType.registerClass("Mscrm.FooterType");
Mscrm.MenuTypes.registerClass("Mscrm.MenuTypes");
Mscrm.CustomMenuItem.registerClass("Mscrm.CustomMenuItem", Mscrm.MenuItem);
Mscrm.ContainerMenuItem.registerClass("Mscrm.ContainerMenuItem", Mscrm.CustomMenuItem);
Mscrm.CheckBoxMenuItem.registerClass("Mscrm.CheckBoxMenuItem", Mscrm.CustomMenuItem);
Mscrm.SelectorUtil.registerClass("Mscrm.SelectorUtil");
Mscrm.FooterType.okCancel = "0";
Mscrm.MenuTypes.NOTIFICATION = "notification";
Mscrm.MenuTypes.HEADER = "header";
Mscrm.MenuTypes.SPACER = "space";
Mscrm.MenuTypes.SUBMENU = "submenu";
Mscrm.MenuTypes.SELECTIONAREA = "SelectionArea";
Mscrm.MenuTypes.FOOTER = "footer";
Mscrm.MenuTypes.MESSAGEAREA = "MessageArea"