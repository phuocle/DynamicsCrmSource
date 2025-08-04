Type.registerNamespace("Mscrm");
Mscrm.urloption_onchange = function() {
    var urloptionCtrl = Mscrm.FormControlInputBehavior.GetBehavior("urloption");
    if (IsNull(urloptionCtrl)) return;
    var parentsite = Mscrm.FormControlInputBehavior.GetBehavior("parentsite");
    if (!IsNull(parentsite) && !parentsite.IsValid()) {
        urloptionCtrl.set_dataValue(!urloptionCtrl.get_dataValue());
        return
    }
    $get("absoluteurl_c").style.display = "none";
    $get("absoluteurl_d").style.display = "none";
    $get("relativeurl_c").style.display = "none";
    $get("relativeurl_d").style.display = "none";
    $get("parentsite_c").style.display = "none";
    $get("parentsite_d").style.display = "none";
    if (urloptionCtrl.get_dataValue() == 0) {
        $get("absoluteurl_c").style.display = "";
        $get("absoluteurl_d").style.display = "";
        $find("crmForm").SetFieldReqLevel("parentsite", false);
        $find("crmForm").SetFieldReqLevel("relativeurl", false);
        $find("crmForm").SetFieldReqLevel("absoluteurl", true);
        if (!Mscrm.RibbonActions.isSharepointS2SConfigurationEnabled()) {
            $get("isgridpresent_c").style.display = "";
            $get("isgridpresent_d").style.display = ""
        }
    } else {
        $get("relativeurl_c").style.display = "";
        $get("relativeurl_d").style.display = "";
        $get("parentsite_c").style.display = "";
        $get("parentsite_d").style.display = "";
        $find("crmForm").SetFieldReqLevel("absoluteurl", false);
        $find("crmForm").SetFieldReqLevel("parentsite", true);
        $find("crmForm").SetFieldReqLevel("relativeurl", true);
        $get("isgridpresent_c").style.display = "none";
        $get("isgridpresent_d").style.display = "none"
    }
};
Mscrm.Form_onload = function() {
    var urloptionCtrl = Mscrm.FormControlInputBehavior.GetBehavior("urloption"),
        isS2Senabled = Mscrm.RibbonActions.isSharepointS2SConfigurationEnabled();
    if (IsNull(urloptionCtrl)) return;
    $get("absoluteurl_c").style.display = "none";
    $get("absoluteurl_d").style.display = "none";
    $get("relativeurl_c").style.display = "none";
    $get("relativeurl_d").style.display = "none";
    $get("parentsite_c").style.display = "none";
    $get("parentsite_d").style.display = "none";
    if (urloptionCtrl.get_dataValue() == 0) {
        $get("absoluteurl_c").style.display = "";
        $get("absoluteurl_d").style.display = "";
        $find("crmForm").SetFieldReqLevel("parentsite", false);
        $find("crmForm").SetFieldReqLevel("relativeurl", false);
        $find("crmForm").SetFieldReqLevel("absoluteurl", true);
        if (isS2Senabled) {
            $get("isgridpresent_c").style.display = "none";
            $get("isgridpresent_d").style.display = "none"
        }
    } else {
        $get("relativeurl_c").style.display = "";
        $get("relativeurl_d").style.display = "";
        $get("parentsite_c").style.display = "";
        $get("parentsite_d").style.display = "";
        $find("crmForm").SetFieldReqLevel("absoluteurl", false);
        $find("crmForm").SetFieldReqLevel("parentsite", true);
        $find("crmForm").SetFieldReqLevel("relativeurl", true);
        $get("isgridpresent_c").style.display = "none";
        $get("isgridpresent_d").style.display = "none"
    }
}