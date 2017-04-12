function loadEmailTemplateRecommended(data) {
    var str = JSON.parse(data), isRecommended = str["isrecommended"], imgurl = "", tooltip = "";
    if (isRecommended == "Yes") {
        imgurl = "/_imgs/recommended_16.png";
        tooltip = Xrm.Internal.getResourceString("RecommendedTemplateIconTitle")
    }
    var resultarray = [imgurl, tooltip];
    return resultarray
}