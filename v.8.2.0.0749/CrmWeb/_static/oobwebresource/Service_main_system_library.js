Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() {
    $find("crmForm").SetFieldReqLevel("displaygranularity", true);
    $find("crmForm").SetFieldReqLevel("initialstatuscode", true)
};
Mscrm.Form_onsave = function() { OnServiceSave() }