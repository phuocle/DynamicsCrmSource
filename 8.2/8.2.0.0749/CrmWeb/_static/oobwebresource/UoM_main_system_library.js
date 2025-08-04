Type.registerNamespace("Mscrm");
Mscrm.baseuom_setadditionalparams = function(context) {
    var lookupBehavior = Mscrm.FormControlInputBehavior.GetBehavior("baseuom");
    lookupBehavior.AddParam("parentId", $get("uomscheduleid").value)
};
Mscrm.Form_onload = function() {
    if ($find("crmForm").get_formType() != Mscrm.SdkFormType.readOnlyForm &&
        $find("crmForm").get_formType() != Mscrm.SdkFormType.disabledForm &&
        IS_DEFAULT) {
        Mscrm.FormControlInputBehavior.GetElementBehavior($find("crmForm").GetControl("quantity")).set_disabled(true);
        Mscrm.FormControlInputBehavior.GetElementBehavior($find("crmForm").GetControl("baseuom")).set_disabled(true)
    }
}