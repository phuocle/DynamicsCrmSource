Type.registerNamespace("Mscrm");
Mscrm.customerid_onchange = function() {
    var data = Mscrm.FormControlInputBehavior.GetBehavior("customerid").get_dataValue();
    if (!IsNull(data) && data.length == 1) {
        var opportunityroleid = Mscrm.FormControlInputBehavior.GetBehavior("opportunityroleid");
        opportunityroleid.set_primaryObjectTypeCode(data[0].type);
        opportunityroleid.set_associatedObjectTypeCode(Opportunity)
    }
}