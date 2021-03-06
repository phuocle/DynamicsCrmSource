
function caseWindowOnload() {
    HandleBackButtonIssues("cases")
}

window.onload = caseWindowOnload;

function ValidateAssign(oGrid) {
    var viewId = oGrid.GetParameter("viewid");
    if (viewId == "{00000000-0000-0000-00AA-000010001029}" || viewId == "{00000000-0000-0000-00AA-000010001034}") {
        alert(LOCID_MESSAGE_CANNOT_ASSIGN);
        return false
    } else if (viewId == "{00000000-0000-0000-00AA-000010001030}") {
        var oInnerGrid = oGrid.get_innerGrid(),
            oGridItems = oInnerGrid.get_selectedRecords(),
            iLength = oGridItems.length,
            iColIndex = oInnerGrid.FindColumnIndex("statecode");
        if (iColIndex >= 0)
            for (var i = 0; i < iLength; i++) {
                var sState = XUI.Html.DomUtils.GetFirstChild(oGridItems[i][3].cells[iColIndex]).innerHTML;
                if (sState != LOCID_CASE_STATE_OPEN) {
                    alert(LOCID_MESSAGE_CANNOT_ASSIGN);
                    return false
                }
            }
    }
    return true
}