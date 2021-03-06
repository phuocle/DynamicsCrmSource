Type.registerNamespace("Mscrm");
Mscrm.ThemeMainSystemLibraryWebResource = function() {};
Mscrm.ThemeMainSystemLibraryWebResource.formOnLoad = function() {
    var $v_0 = [
        "navbarbackgroundcolor", "navbarshelfcolor", "headercolor", "globallinkcolor", "selectedlinkeffect",
        "hoverlinkeffect", "processcontrolcolor", "defaultentitycolor", "controlshade", "controlborder",
        "defaultcustomentitycolor", "backgroundcolor"
    ];
    if (Xrm.Page.ui.getFormType() === 1) return;
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1], $v_3 = Xrm.Page.data.entity.attributes.get($v_2), $v_4 = $v_3.getValue();
        Mscrm.ThemeMainSystemLibraryWebResource.$0($v_2, $v_4)
    }
};
Mscrm.ThemeMainSystemLibraryWebResource.colorValueChanged = function(context) {
    var $v_0 = context.getEventSource();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getName(), $v_2 = $v_0.getValue();
        if (!Mscrm.ThemeMainSystemLibraryWebResource.$1($v_1, $v_2)) return;
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1) &&
            Mscrm.ThemeMainSystemLibraryWebResource.$0($v_1, $v_2)
    }
};
Mscrm.ThemeMainSystemLibraryWebResource.$1 = function($p0, $p1) {
    var $v_0 = Xrm.Page.ui.controls.get($p0);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($p1)) {
        $v_0.clearNotifications();
        if ($p1.startsWith("#")) $p1 = $p1.substr(1);
        var $v_1 = new RegExp("^[0-9A-F]{6}$", "i"), $v_2 = $v_1.test($p1);
        if (!$v_2) {
            $v_0.setNotification(Xrm.Internal.getResourceString("LOCID_SYSCUST_INVALIDCOLORVALUE"));
            return false
        }
    }
    return true
};
Mscrm.ThemeMainSystemLibraryWebResource.$0 = function($p0, $p1) {
    var $v_0 = $get($p0 + "_i");
    $v_0.parentNode.className += " ms-crm-Inline-Edit-Theme-Margin";
    var $v_1 = $get($p0 + "_colord");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        $v_1 = document.createElement("div");
        $v_1.id = $p0 + "_colord";
        $v_1.className = "ms-crm-inline-colorvalue";
        var $v_2 = $get($p0);
        $v_2.appendChild($v_1);
        $v_2.className += " ms-crm-ColorValueDirection"
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1)) {
        $v_1.style.backgroundColor = $p1.startsWith("#") ? $p1 : "#" + $p1;
        $v_1.style.display = "block"
    } else $v_1.style.display = "none"
};
Mscrm.ThemeMainSystemLibraryWebResource.registerClass("Mscrm.ThemeMainSystemLibraryWebResource")