Type.registerNamespace("Mscrm");
Mscrm.RecommendationModelMainSystemLibraryWebResource = function() {};
Mscrm.RecommendationModelMainSystemLibraryWebResource
    .formOnload = function() { Mscrm.RecommendationModelMainSystemLibraryWebResource.$1() };
Mscrm.RecommendationModelMainSystemLibraryWebResource.$1 = function() {
    Mscrm.RecommendationModelMainSystemLibraryWebResource.$0 = window.setInterval(function() {
            var $v_0 = Xrm.Page.getControl("basketEntities");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
                window.clearInterval(Mscrm.RecommendationModelMainSystemLibraryWebResource.$0);
                var $v_1 = function($p2_0) {
                    var $v_2 = Xrm.Page.getControl("recommendationEntities");
                    $v_2.refresh()
                };
                $v_0.addOnLoad($v_1)
            }
        },
        200)
};
Mscrm.RecommendationModelMainSystemLibraryWebResource
    .registerClass("Mscrm.RecommendationModelMainSystemLibraryWebResource");
Mscrm.RecommendationModelMainSystemLibraryWebResource.$0 = 0;
Type.registerNamespace("Mscrm");
Mscrm.Form_Onload = Mscrm.RecommendationModelMainSystemLibraryWebResource.formOnload