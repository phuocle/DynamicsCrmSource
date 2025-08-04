
var _oLastMenuItem = null,
    _iMenuLast = -1,
    _oPopup = null,
    _oATPopup = null,
    _maxRows;

function PopupMenu() {
    this.AddMenuItem = _addMenuItem;
    this.AddNotification = _addNotification;
    this.AddMoreLink = _addMoreLink;
    this.AddSeperator = _addSeperator;
    this.Show = _show;
    this.Hide = _hide;
    this.IsOpen = _isOpen;
    this.loadATMenu = _loadATMenu;
    this.notifyATMenuClose = _closeATMenu;
    this.clickedATMenuItem = _clickedATMenuItem;

    function MenuItem(menuid, fnCallback) {
        this.menuid = menuid;
        this.fnCallback = fnCallback
    }

    var _sMenuItemsHtml = "",
        _oMenuItems = [],
        _iMenuID = 0,
        _iMenuSeperator = 0;

    function _addNotification(sName, sIconUrl) {
        _addMenuGeneric(sName, null, "popupNotificationItem", sIconUrl, false, true)
    }

    function _addMoreLink(sName, fnCallback, bDisabled, sIconUrl) {
        var showLink = !IsNull(bDisabled) && bDisabled == true ? false : true,
            sTdClass = !showLink ? "popupMnuDisabledItem" : "popupMoreLinkItem";
        _addMenuGeneric(sName, fnCallback, sTdClass, sIconUrl, !bDisabled, true)
    }

    function _addMenuItem(sName, fnCallback, bDisabled, sIconUrl) {
        var showLink = !IsNull(bDisabled) && bDisabled == true ? false : true,
            sTdClass = !showLink ? "popupMnuDisabledItem" : "popupMnuItem";
        _addMenuGeneric(sName, fnCallback, sTdClass, sIconUrl, !bDisabled, false)
    }

    function _addMenuGeneric(sName, fnCallback, sTdClass, sIconUrl, bShowLink, bannerColumn) {
        _sMenuItemsHtml += '<tr class="popupMnuRow"><td class="popupMnuItem"';
        _sMenuItemsHtml += ' name="menuItem" menuID="' + _iMenuID + '"';
        if (typeof fnCallback == "string")
            _sMenuItemsHtml += ' onclick="' + CrmEncodeDecode.CrmHtmlAttributeEncode(fnCallback) + '"';
        _sMenuItemsHtml += ' id="mnu' + _iMenuID + '" nowrap><div class="' + sTdClass + '">';
        if (!bannerColumn || !IsNull(sIconUrl)) {
            if (!IsNull(sIconUrl))
                _sMenuItemsHtml += '<img alt="" class="popupMenuIcon" src="' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(sIconUrl) +
                    '"/>';
            else
                _sMenuItemsHtml += '<span class="popupMenuIcon">&nbsp;&nbsp;&nbsp;</span>';
            _sMenuItemsHtml += '<span class="popupMenuIconSpace">&nbsp;</span>'
        }
        _sMenuItemsHtml += '<span class="popupText">' + CrmEncodeDecode.CrmHtmlEncode(sName) + "</span>";
        if (bShowLink)
            _sMenuItemsHtml += "<a tabindex=-1 class='atLink' id='atmnu" +
                _iMenuID +
                "' onclick='return false;' href='javascript:onclick();' target='_self' title=\"" +
                CrmEncodeDecode.CrmHtmlAttributeEncode(sName) +
                '"></a>';
        _sMenuItemsHtml += "</div></td></tr>";
        var oMenuItem = new MenuItem(_iMenuID, fnCallback);
        _iMenuID++;
        _oMenuItems.push(oMenuItem)
    }

    function _addSeperator() {
        _sMenuItemsHtml += '<tr height=1></td><td name="menuItem" menuID="' +
            _iMenuID +
            '" id="mnu' +
            _iMenuID +
            '" class="seperator" nowrap></td></tr>';
        var oMenuItem = new MenuItem(_iMenuID);
        _iMenuID++;
        _iMenuSeperator++;
        _oMenuItems.push(oMenuItem)
    }

    function bodyInnerHtml(bAddCloseButton) {
        var s = '<table id="tblMenu" class="popupMenu" cellpadding="0" cellspacing="0">';
        s += _sMenuItemsHtml;
        if (bAddCloseButton) {
            s += '<tr><td><button onclick="closeWindow();" id="butClose" class="button">';
            s += CrmEncodeDecode.CrmHtmlEncode(LOCID_CLOSE_BUTTON_LABEL);
            s += "</button></td></tr>"
        }
        s += "</table>";
        return s
    }

    function _show(iX, iY, iWidth, iHeight, oElement, bIsAT) {
        if (bIsAT) {
            var atObject = {};
            atObject.menuHtc = this;
            atObject.atMenu = null;
            openStdDlg(Mscrm.CrmUri.create("/_controls/popupmenu/atpopup.aspx"), atObject, 60, 20, true, false, null);
            return
        }
        if (IsNull(iX) || IsNull(iY))
            return;
        _hide();
        if (IsNull(_oPopup)) {
            _oPopup = openPopup();
            var oXmlHttp;
            oXmlHttp = new XMLHttpRequest;
            oXmlHttp.open("Get", Mscrm.CrmUri.create("/_controls/popupmenu/popupmenu.css.aspx").toString(), false);
            oXmlHttp.send(null);
            var linkTag = _oPopup.document.createElement("link");
            linkTag.href = Mscrm.CrmUri.create("/_controls/popupmenu/popupmenu.css.aspx").toString();
            linkTag.rel = "stylesheet";
            var head = _oPopup.document.getElementsByTagName("head")[0];
            head.appendChild(linkTag);
            _oPopup.document.body.innerHTML = bodyInnerHtml(false);
            _oPopup.document.body.style.cursor = "hand";
            var oTable = _oPopup.document.body;
            $addHandler(oTable, "keydown", popupMenuKeyHandler);
            $addHandler(oTable, "keyup", popupMenuKeySwallower);
            var oTDs = _oPopup.document.getElementsByTagName("TD"),
                i = oTDs.length - 1;
            while (i >= 0) {
                if (oTDs[i].className.indexOf("Item") != -1)
                    if (oTDs[i].getAttribute("menuID")) {
                        var fnCallback = _oMenuItems[parseInt(oTDs[i].getAttribute("menuID"), 10)].fnCallback;
                        typeof fnCallback == "function" &&
                            $addHandler(oTDs[i], "click", fnCallback);
                        $addHandler(oTDs[i], "mouseover", popupMouseMoveHandler)
                    }
                i--
            }
        }
        _oPopup.show(0, 0, 0, 0);
        var borderWidth = 2;
        if (IsNull(iWidth))
            if (_oPopup.document.getElementById("tblMenu").rows.length > 0)
                iWidth = _oPopup.document.getElementById("tblMenu").rows[0].offsetWidth + borderWidth * 2;
            else
                iWidth = _oPopup.document.getElementById("tblMenu").offsetWidth;
        if (IsNull(iHeight))
            if (oTDs.length > 0) {
                var rowHeight = 25;
                iHeight = oTDs.length * rowHeight + borderWidth * 2
            } else
                iHeight = _oPopup.document.getElementById("tblMenu").offsetHeight;
        if (LOCID_UI_DIR == "RTL")
            iX = iX - iWidth + oElement.offsetWidth;
        _oPopup.show(iX, iY, iWidth, iHeight, oElement);
        _maxRows = _iMenuID;
        !IsNull(_oPopup) &&
            _oPopup.isOpen &&
            (iX != 0 || iY != 0) &&
            popupInit()
    }

    function _hide() {
        if (!IsNull(_oPopup)) {
            _oPopup.hide();
            _oPopup = null;
            _oLastMenuItem = null
        }
    }

    function _isOpen() {
        if (!IsNull(_oPopup))
            return _oPopup.isOpen;
        return false
    }

    function _loadATMenu(oPopup, atMenu) {
        _oATPopup = oPopup;
        oPopup.document.body.innerHTML = bodyInnerHtml(true);
        oPopup.document.title = CrmEncodeDecode.CrmHtmlEncode(formatString(LOCID_POPUP_MENU_LABEL, ""));
        oPopup.document._oMenu = XUI.Html.DomUtils.GetFirstChild(oPopup.document.body);
        var iW = Math.max(oPopup.document._oMenu.offsetWidth + 8, 400),
            iH = Math.min(oPopup.document._oMenu.offsetHeight + 20, window.screen.availHeight);
        oPopup.dialogHeight = iH.toString() + "px";
        oPopup.dialogWidth = iW.toString() + "px";
        iW = Math.max(oPopup.document._oMenu.offsetWidth + 8, 200);
        iH = Math.min(oPopup.document._oMenu.offsetHeight + 20, window.screen.availHeight);
        oPopup.dialogHeight = iH.toString() + "px";
        oPopup.dialogWidth = iW.toString() + "px";
        oPopup.dialogTop = "20px";
        oPopup.dialogLeft = "20px";
        oPopup.document.lastMenuItem = null
    }

    function _closeATMenu() {
        _oATPopup = null
    }

    function _clickedATMenuItem() {
        var o = _oATPopup.window.event.srcElement;
        while (o.tagName != "TABLE" && o.tagName != "TD")
            o = o.parentNode;
        if (o.tagName == "TABLE")
            return;
        for (var iMenuId = o.getAttribute("menuID"),
            i = 0;
            i < _oMenuItems.length;
            i++)
            if (_oMenuItems[i].menuid == iMenuId)
                if (!IsNull(_oMenuItems[i].fnCallback)) {
                    _oMenuItems[i].fnCallback();
                    _oATPopup.close();
                    _oATPopup = null;
                    break
                }
    }
}

function popupInit() {
    var popupDocument = _oPopup.document;
    popupResetGlow(_oLastMenuItem);
    popupGlow(popupDocument.getElementById("mnu0"));
    popupDocument.getElementById("mnu0").focus()
}

function popupMouseMoveHandler() {
    if (!IsNull(_oPopup)) {
        var o = _oPopup.document.parentWindow.event.srcElement;
        while (o.tagName != "TABLE" && o.tagName != "TD")
            o = o.parentNode;
        if (o === _oLastMenuItem || o.getAttribute("name") != "menuItem")
            return;
        popupResetGlow(_oLastMenuItem);
        popupGlow(o)
    }
}

function popupResetGlow(o) {
    if (!IsNull(o)) {
        var oFirstChild = XUI.Html.DomUtils.GetFirstChild(o);
        if (oFirstChild.className.indexOf("ItemSel") != -1)
            oFirstChild.className = oFirstChild.className.replace("ItemSel", "Item")
    }
}

function popupGlow(o) {
    var oFirstChild = XUI.Html.DomUtils.GetFirstChild(o);
    if (oFirstChild.className.indexOf("ItemSel") == -1)
        oFirstChild.className = oFirstChild.className.replace("Item", "ItemSel");
    _iMenuLast = parseInt(o.getAttribute("menuID"), 10);
    _oLastMenuItem = o
}

function popupMenuKeyHandler() {
    var popupDocument = _oPopup.document;
    switch (popupDocument.parentWindow.event.keyCode) {
    case KEY_DOWN:
        if (_iMenuLast == -1)
            popupGlow(popupDocument.getElementById("mnu0"));
        else {
            popupResetGlow(popupDocument.getElementById("mnu" + _iMenuLast));
            _iMenuLast = ++_iMenuLast % _maxRows;
            popupGlow(popupDocument.getElementById("mnu" + _iMenuLast))
        }
        break;
    case KEY_UP:
        if (_iMenuLast == -1)
            popupGlow(popupDocument.getElementById("mnu0"));
        else {
            popupResetGlow(popupDocument.getElementById("mnu" + _iMenuLast));
            _iMenuLast = _iMenuLast == 0 ? _maxRows - 1 : --_iMenuLast;
            popupGlow(popupDocument.getElementById("mnu" + _iMenuLast))
        }
        break
    }
    popupDocument.parentWindow.event.cancelBubble = true;
    popupDocument.parentWindow.event.returnValue = false
}

function popupMenuKeySwallower() {
    var popupDocument = _oPopup.document;
    switch (popupDocument.parentWindow.event.keyCode) {
    case KEY_SPACE:
    case KEY_ENTER:
        Mscrm.Utilities.click(_oLastMenuItem);
        break;
    case KEY_ESC:
        _oPopup.isOpen &&
            _oPopup.hide();
        break
    }
    popupDocument.parentWindow.event.cancelBubble = true;
    popupDocument.parentWindow.event.returnValue = false
}