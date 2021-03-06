Type.registerNamespace("Mscrm");
Mscrm.SolutionsMarketplace = function() {};
Mscrm.SolutionsMarketplace.initializePage = function() {
    if (!Mscrm.SolutionsMarketplace.$C()) return;
    Mscrm.SolutionsMarketplace.$0 = $get("popularSolutionsContainer");
    Mscrm.SolutionsMarketplace.$3 = $get("newestSolutionsContainer");
    Mscrm.SolutionsMarketplace.$6 = $get("staffPicksSolutionsContainer");
    Mscrm.SolutionsMarketplace.$8 = $get("popularSolutionsList");
    Mscrm.SolutionsMarketplace.$1 = $get("newestSolutionsList");
    Mscrm.SolutionsMarketplace.$4 = $get("staffPicksSolutionsList");
    Mscrm.SolutionsMarketplace.$9 = $get("popularSolutionsMoreContainer");
    Mscrm.SolutionsMarketplace.$2 = $get("newestSolutionsMoreContainer");
    Mscrm.SolutionsMarketplace.$5 = $get("staffPicksSolutionsMoreContainer");
    Mscrm.SolutionsMarketplace.$B();
    Mscrm.SolutionsMarketplace.$0.style.backgroundColor = "#ffffff";
    Mscrm.SolutionsMarketplace.$1.style.display = "none";
    Mscrm.SolutionsMarketplace.$4.style.display = "none";
    Mscrm.SolutionsMarketplace.$2.style.display = "none";
    Mscrm.SolutionsMarketplace.$5.style.display = "none"
};
Mscrm.SolutionsMarketplace.$C = function() {
    if (typeof MARKETPLACE_DATA_NOT_AVAILABLE !== "undefined") {
        $get("warningDiv").style.display = "";
        var $v_0 = $get("borderdiv"), $v_1 = $v_0.parentNode;
        $v_1.removeChild($v_0);
        return false
    } else return true
};
Mscrm.SolutionsMarketplace.$B = function() {
    $addHandler(Mscrm.SolutionsMarketplace.$0, "click", Mscrm.SolutionsMarketplace.$E);
    $addHandler(Mscrm.SolutionsMarketplace.$3, "click", Mscrm.SolutionsMarketplace.$D);
    $addHandler(Mscrm.SolutionsMarketplace.$6, "click", Mscrm.SolutionsMarketplace.$F)
};
Mscrm.SolutionsMarketplace.$E = function($p0) {
    Mscrm.SolutionsMarketplace.$A(Mscrm.SolutionsMarketplace.$0,
        Mscrm.SolutionsMarketplace.$8,
        Mscrm.SolutionsMarketplace.$9);
    Mscrm.SolutionsMarketplace.$7(Mscrm.SolutionsMarketplace.$3,
        Mscrm.SolutionsMarketplace.$1,
        Mscrm.SolutionsMarketplace.$2);
    Mscrm.SolutionsMarketplace.$7(Mscrm.SolutionsMarketplace.$6,
        Mscrm.SolutionsMarketplace.$4,
        Mscrm.SolutionsMarketplace.$5)
};
Mscrm.SolutionsMarketplace.$D = function($p0) {
    Mscrm.SolutionsMarketplace.$7(Mscrm.SolutionsMarketplace.$0,
        Mscrm.SolutionsMarketplace.$8,
        Mscrm.SolutionsMarketplace.$9);
    Mscrm.SolutionsMarketplace.$A(Mscrm.SolutionsMarketplace.$3,
        Mscrm.SolutionsMarketplace.$1,
        Mscrm.SolutionsMarketplace.$2);
    Mscrm.SolutionsMarketplace.$7(Mscrm.SolutionsMarketplace.$6,
        Mscrm.SolutionsMarketplace.$4,
        Mscrm.SolutionsMarketplace.$5)
};
Mscrm.SolutionsMarketplace.$F = function($p0) {
    Mscrm.SolutionsMarketplace.$7(Mscrm.SolutionsMarketplace.$0,
        Mscrm.SolutionsMarketplace.$8,
        Mscrm.SolutionsMarketplace.$9);
    Mscrm.SolutionsMarketplace.$7(Mscrm.SolutionsMarketplace.$3,
        Mscrm.SolutionsMarketplace.$1,
        Mscrm.SolutionsMarketplace.$2);
    Mscrm.SolutionsMarketplace.$A(Mscrm.SolutionsMarketplace.$6,
        Mscrm.SolutionsMarketplace.$4,
        Mscrm.SolutionsMarketplace.$5)
};
Mscrm.SolutionsMarketplace.$A = function($p0, $p1, $p2) {
    $p0.style.backgroundColor = "#ffffff";
    $p0.style.border = "solid";
    $p0.style.borderColor = "#C0C0C0";
    $p0.style.borderWidth = "1px 1px 1px 1px";
    $p0.style.borderBottomColor = "#FFFFFF";
    $p0.style.color = "#F7941D";
    $p1.style.display = "";
    $p2.style.display = ""
};
Mscrm.SolutionsMarketplace.$7 = function($p0, $p1, $p2) {
    $p0.style.backgroundColor = "#eff2f6";
    $p0.style.borderWidth = "0px 0px 0px 0px";
    $p0.style.color = "#000000";
    $p1.style.display = "none";
    $p2.style.display = "none"
};
Mscrm.SolutionsMarketplace.registerClass("Mscrm.SolutionsMarketplace");
Mscrm.SolutionsMarketplace.$0 = null;
Mscrm.SolutionsMarketplace.$3 = null;
Mscrm.SolutionsMarketplace.$6 = null;
Mscrm.SolutionsMarketplace.$8 = null;
Mscrm.SolutionsMarketplace.$1 = null;
Mscrm.SolutionsMarketplace.$4 = null;
Mscrm.SolutionsMarketplace.$9 = null;
Mscrm.SolutionsMarketplace.$2 = null;
Mscrm.SolutionsMarketplace.$5 = null