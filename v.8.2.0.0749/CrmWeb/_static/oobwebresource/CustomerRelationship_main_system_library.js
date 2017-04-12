Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() {
    var customerid = Mscrm.FormControlInputBehavior.GetBehavior("customerid"), data = customerid.get_dataValue();
    if (!IsNull(data) && data.length == 1) {
        var customerroleid = Mscrm.FormControlInputBehavior.GetBehavior("customerroleid"),
            partnerroleid = Mscrm.FormControlInputBehavior.GetBehavior("partnerroleid");
        customerroleid.set_primaryObjectTypeCode(data[0].type);
        partnerroleid.set_associatedObjectTypeCode(data[0].type);
        SetLookupTypes()
    }
    var oTable = $get("customerid_c");
    while (oTable.tagName != "TABLE") oTable = oTable.parentNode;
    var oRow = oTable.insertRow(0);
    addColumnHeader(oRow, LOCID_ONE_COLUMN_HEADER);
    addColumnHeader(oRow, LOCID_PARTY_TWO_COLUMN_HEADER)
};
Mscrm.customerid_onchange = function() {
    var customerid = Mscrm.FormControlInputBehavior.GetBehavior("customerid"),
        data = customerid.get_dataValue(),
        customerroleid = Mscrm.FormControlInputBehavior.GetBehavior("customerroleid"),
        partnerroleid = Mscrm.FormControlInputBehavior.GetBehavior("partnerroleid");
    if (!IsNull(data) && data.length == 1) {
        customerroleid.set_primaryObjectTypeCode(data[0].type);
        partnerroleid.set_associatedObjectTypeCode(data[0].type);
        SetLookupTypes()
    } else {
        customerroleid.set_primaryObjectTypeCode(null);
        partnerroleid.set_associatedObjectTypeCode(null)
    }
};
Mscrm.partnerid_onchange = function() {
    var partnerid = Mscrm.FormControlInputBehavior.GetBehavior("partnerid"),
        data = partnerid.get_dataValue(),
        customerroleid = Mscrm.FormControlInputBehavior.GetBehavior("customerroleid"),
        partnerroleid = Mscrm.FormControlInputBehavior.GetBehavior("partnerroleid");
    if (!IsNull(data) && data.length == 1) {
        partnerroleid.set_primaryObjectTypeCode(data[0].type);
        customerroleid.set_associatedObjectTypeCode(data[0].type);
        SetLookupTypes()
    } else {
        partnerroleid.set_primaryObjectTypeCode(null);
        customerroleid.set_associatedObjectTypeCode(null)
    }
}