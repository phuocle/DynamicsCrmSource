Type.registerNamespace("Mscrm");

function Print() { Mscrm.PrintMethods.focusAndPrint() }

function Close() { Mscrm.PrintMethods.close() }

Mscrm.PrintMethods = function() {};
Mscrm.PrintMethods.$$cctor = function() {
    document.onkeydown = null;
    document.onkeypress = null;
    $addHandler(window, "load", Mscrm.PrintMethods.$1)
};
Mscrm.PrintMethods.focusAndPrint = function() {
    var $v_0 = Mscrm.PrintMethods.$0();
    $v_0.print()
};
Mscrm.PrintMethods.close = function() { closeWindow() };
Mscrm.PrintMethods.$1 = function($p0) { Mscrm.PrintMethods.$0() };
Mscrm.PrintMethods.$0 = function() {
    var $v_0 = $get("printMain"), $v_1 = window.self;
    if ($v_0) {
        $v_1 = $v_0.contentWindow;
        $v_1.focus()
    }
    return $v_1
};
Mscrm.PrintMethods.registerClass("Mscrm.PrintMethods");
Mscrm.PrintMethods.$$cctor()