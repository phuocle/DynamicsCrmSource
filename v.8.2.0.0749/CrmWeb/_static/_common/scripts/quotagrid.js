
function qOn(domEventObject) {
    if (_oPop && _oPop.isOpen)
        return;
    _oLastGlow &&
        off();
    _oLastGlow = domEventObject.target;
    while (_oLastGlow.tagName != "TR")
        _oLastGlow = _oLastGlow.parentNode;
    _oLastGlow.style.backgroundColor = "#c4ddff"
}

function qOff(domEventObject) {
    if (_oPop && _oPop.isOpen)
        return;
    if (_oLastGlow) {
        _oLastGlow.style.backgroundColor = "";
        _oLastGlow = null
    }
}

function qHandleClick(domEventObject) {
    var o = domEventObject.target,
        oTR = o,
        oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_addquota.aspx?iObjType=" + SystemUser + "&iTotal=1"),
        iX = 600,
        iY = 425,
        idparam = new Array(0);
    idparam[0] = _oId;
    while (oTR.tagName != "TR") {
        oTR = oTR.parentNode;
        if (oTR == null)
            return
    }
    oUrl.get_query()["id"] = oTR.getAttribute("oid");
    openStdDlg(oUrl, idparam, iX, iY) &&
        document.location.reload()
}