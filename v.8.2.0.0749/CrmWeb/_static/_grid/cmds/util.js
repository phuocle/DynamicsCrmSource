
var _oActMsgDom = null,
    _oActMsgPopup = null;

function DisplayActionMsg(sMsg, iWidth, iHeight) {
    if (IsNull(_oActMsgPopup) || IsNull(XUI.Html.DomUtils.GetFirstChild(_oActMsgDom))) {
        _oActMsgDom = window.document.createElement("DIV");
        window.document.body.appendChild(_oActMsgDom);
        _oActMsgDom.className = "actionMsgBox";
        _oActMsgDom
            .innerHTML =
            "<table width=100% height=100%><tr><td style='font-weight: bold; font-size: 15px;text-align: center; vertical-align: middle; cursor: wait; color: #000099'> </td></tr></table>";
        var oActMsgDomStyle = _oActMsgDom.style;
        oActMsgDomStyle.width = "100%";
        oActMsgDomStyle.height = "100%";
        oActMsgDomStyle.backgroundColor = "#ffffee";
        oActMsgDomStyle.border = "2px solid #000000";
        oActMsgDomStyle.overflow = "hidden";
        oActMsgDomStyle.className = _oActMsgDom.className + " ms-crm-Error-Header";
        _oActMsgPopup = Mscrm.Menu.createMenu(_oActMsgDom);
        _oActMsgPopup.set_stylePrefix(Mscrm.MenuStyles.popupStylePrefix);
        _oActMsgPopup.set_width(iWidth);
        _oActMsgPopup.set_height(iHeight);
        var oActMsg = Mscrm.MenuItem.createMenuItem();
        _oActMsgPopup.addItem(oActMsg)
    }
    if (!IsNull(sMsg)) {
        var table = XUI.Html.DomUtils.GetFirstChild(_oActMsgDom);
        table.rows[0].cells[0].innerHTML = CrmEncodeDecode.CrmHtmlEncode(sMsg) + "<br><br>"
    }
    _oActMsgPopup.set_left((window.document.body.clientWidth + (LOCID_UI_DIR == "RTL" ? iWidth : -iWidth)) / 2);
    _oActMsgPopup.set_top((window.document.body.clientHeight - iHeight) / 2);
    _oActMsgPopup.show()
}

function HideActionMsg() {
    !IsNull(_oActMsgPopup) &&
        _oActMsgPopup.hide()
}

function HideActionMessage() {
    !IsNull(_oActMsgPopup) &&
        _oActMsgPopup.hide()
}