Type.registerNamespace("Mscrm");
Mscrm.urloption_onchange = function() {
    var urloptionCtrl = Mscrm.FormControlInputBehavior.GetBehavior("urloption");
    if (IsNull(urloptionCtrl)) return;
    var parentsiteorlocation = Mscrm.FormControlInputBehavior.GetBehavior("parentsiteorlocation");
    if (!IsNull(parentsiteorlocation) && !parentsiteorlocation.IsValid()) {
        urloptionCtrl.set_dataValue(!urloptionCtrl.get_dataValue());
        return
    }
    $get("absoluteurl_c").style.display = "none";
    $get("absoluteurl_d").style.display = "none";
    $get("relativeurl_c").style.display = "none";
    $get("relativeurl_d").style.display = "none";
    $get("parentsiteorlocation_c").style.display = "none";
    $get("parentsiteorlocation_d").style.display = "none";
    if (urloptionCtrl.get_dataValue() == 0) {
        $get("absoluteurl_c").style.display = "";
        $get("absoluteurl_d").style.display = "";
        $find("crmForm").SetFieldReqLevel("parentsiteorlocation", false);
        $find("crmForm").SetFieldReqLevel("relativeurl", false);
        $find("crmForm").SetFieldReqLevel("absoluteurl", true)
    } else {
        $get("relativeurl_c").style.display = "";
        $get("relativeurl_d").style.display = "";
        $get("parentsiteorlocation_c").style.display = "";
        $get("parentsiteorlocation_d").style.display = "";
        $find("crmForm").SetFieldReqLevel("absoluteurl", false);
        $find("crmForm").SetFieldReqLevel("parentsiteorlocation", true);
        $find("crmForm").SetFieldReqLevel("relativeurl", true)
    }
};
Mscrm.Form_onload = function() {
    var urloptionCtrl = Mscrm.FormControlInputBehavior.GetBehavior("urloption"),
        sharepointS2S = Mscrm.RibbonActions.isSharepointS2SConfigurationEnabled();
    if (IsNull(urloptionCtrl) || IsNull(sharepointS2S)) return;
    $get("absoluteurl_c").style.display = "none";
    $get("absoluteurl_d").style.display = "none";
    $get("relativeurl_c").style.display = "none";
    $get("relativeurl_d").style.display = "none";
    $get("parentsiteorlocation_c").style.display = "none";
    $get("parentsiteorlocation_d").style.display = "none";
    $get("urloption_c").style.display = "none";
    $get("urloption_d").style.display = "none";
    if (!sharepointS2S) {
        $get("urloption_c").style.display = "";
        $get("urloption_d").style.display = "";
        if (urloptionCtrl.get_dataValue() == 0) {
            $get("absoluteurl_c").style.display = "";
            $get("absoluteurl_d").style.display = "";
            $find("crmForm").SetFieldReqLevel("parentsiteorlocation", false);
            $find("crmForm").SetFieldReqLevel("relativeurl", false);
            $find("crmForm").SetFieldReqLevel("absoluteurl", true)
        } else {
            $get("relativeurl_c").style.display = "";
            $get("relativeurl_d").style.display = "";
            $get("parentsiteorlocation_c").style.display = "";
            $get("parentsiteorlocation_d").style.display = "";
            $find("crmForm").SetFieldReqLevel("absoluteurl", false);
            $find("crmForm").SetFieldReqLevel("parentsiteorlocation", true);
            $find("crmForm").SetFieldReqLevel("relativeurl", true)
        }
    } else {
        urloptionCtrl.set_dataValue(true);
        $get("urloption_c").parentNode.parentNode.firstChild.style.display = "none";
        $get("relativeurl_c").style.display = "";
        $get("relativeurl_d").style.display = "";
        $get("parentsiteorlocation_c").style.display = "";
        $get("parentsiteorlocation_d").style.display = "";
        $find("crmForm").SetFieldReqLevel("absoluteurl", false);
        $find("crmForm").SetFieldReqLevel("parentsiteorlocation", true);
        $find("crmForm").SetFieldReqLevel("relativeurl", true)
    }
}