
var _iNavHeight;

function Init(o) {
    try {
        top.bottom.setActive(o)
    } catch (e) {
    }
    _iNavHeight = crmNavBar.children.length * 26;
    Resize();
    window.attachEvent("onresize", Resize)
}

function Resize() {
    trQC.style.display = document.body.clientHeight - _iNavHeight < 130 ? "none" : "inline"
}

function loadUDE(o) {
    top.stage.location.href = Mscrm.CrmUri.create("/userdefined/home_ude.aspx?etc=" + o.id.substr(4, o.id.length))
        .toString()
}