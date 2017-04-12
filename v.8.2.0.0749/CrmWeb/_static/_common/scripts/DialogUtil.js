Type.registerNamespace("Mscrm");
Mscrm.DialogUtil = function() {};
Mscrm.DialogUtil.$$cctor = function() {
    window.LOCID_UI_DIR === "RTL" &&
        Sys.Browser.agent === Sys.Browser.InternetExplorer &&
        $addHandler(window, "load", Mscrm.DialogUtil.dialogOnLoad)
};
Mscrm.DialogUtil.dialogOnLoad = function(ev) {
    for (var $v_0 = document.activeElement,
        $v_1 = Mscrm.Utilities.getChildElementsByClassName(document.documentElement, "ms-crm-Button", false),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = $v_1[$v_2];
        $v_3.style.visibility = "hidden";
        $v_3.style.visibility = "visible";
        $v_3 === $v_0 && $v_3.focus()
    }
};
Mscrm.DialogUtil.registerClass("Mscrm.DialogUtil");
Mscrm.DialogUtil.$$cctor()