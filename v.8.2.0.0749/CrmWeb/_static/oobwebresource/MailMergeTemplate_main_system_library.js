Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() {
    var crmForm = $find("crmForm");
    if ($find("crmForm")
        .get_formType() !=
        Mscrm.SdkFormType.createForm) document.getElementById("templatetypecode").disabled = true
};
Mscrm.Form_onsave = function(context) { !validate() && context.getEventArgs().preventDefault() }