Type.registerNamespace("Mscrm");
Mscrm.managerid_setadditionalparams = function(context) {
    var sTerritoryId = $get("crmFormSubmit").crmFormSubmitId.value,
        lookupBehavior = Mscrm.FormControlInputBehavior.GetBehavior("managerid");
    lookupBehavior.AddParam("currentid", sTerritoryId);
    lookupBehavior.AddParam("currentObjectType", 2013)
}