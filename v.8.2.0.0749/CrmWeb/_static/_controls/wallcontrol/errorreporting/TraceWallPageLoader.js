Type.registerNamespace("ErrorReporting.UI");
ErrorReporting.UI.TraceWallPageLoader = function() {};
ErrorReporting.UI.TraceWallPageLoader.loadTracePage = function(ele) {
    var $v_0 = $get("crmFormSubmit"), $v_1 = Mscrm.CrmUri.create("/_root/tracewall.aspx");
    $v_1.get_query()["id"] = $v_0.crmFormSubmitId.value;
    $v_1.get_query()["etc"] = $v_0.crmFormSubmitObjectType.value;
    Mscrm.Details.loadArea(ele, "areaTraces", "", $v_1, false, false)
};
ErrorReporting.UI.TraceWallPageLoader.registerClass("ErrorReporting.UI.TraceWallPageLoader")