
function SetLookupTypes() {
    var customerLookup = Mscrm.FormControlInputBehavior.GetBehavior("customerid"),
        partnerLookup = Mscrm.FormControlInputBehavior.GetBehavior("partnerid");
    filterLookupBy(customerLookup, partnerLookup);
    filterLookupBy(partnerLookup, customerLookup)
}

function filterLookupBy(oLookup, oFilter) {
    if (IsNull(oLookup))
        return;
    var oaLookupItems = null;
    if (!IsNull(oFilter))
        oaLookupItems = oFilter.Items();
    if (!IsNull(oaLookupItems) && oaLookupItems.length == 1)
        oLookup.AddParam("customerid", oaLookupItems[0].id);
    else
        oLookup.AddParam("customerid", "")
}

function addColumnHeader(oRow, sText) {
    var oCell = oRow.insertCell(-1);
    oCell.colSpan = 2;
    if (sText == LOCID_PARTY_TWO_COLUMN_HEADER)
        oCell.className = "FormSection_CellPadding";
    XUI.Html.SetText(oCell, sText)
}