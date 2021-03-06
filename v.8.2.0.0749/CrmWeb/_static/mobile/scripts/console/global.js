
var _oRow = null,
    _oRowWithoutShift = null,
    _bEntityConfig = false,
    ENTER_KEY = 13,
    SPACE_KEY = 32,
    DELETE_KEY = 46,
    TAB_KEY = 9,
    LEFT_KEY = 37,
    UP_KEY = 38,
    RIGHT_KEY = 39,
    DOWN_KEY = 40,
    MOUSE_LEFT_BUTTON = 0,
    MOUSE_RIGHT_BUTTON = 1,
    MOUSE_MIDDLE_BUTTON = 2,
    RowStyle = "ms-crm-Dialog-ListItem",
    SelectedRowStyle = "ms-crm-Dialog-ListItem ms-crm-me-SelectOn",
    ReadonlyFieldStyle = "ms-crm-me-ReadOnly",
    GlowOnStyle = "ms-crm-me-GlowOn";

function GetListName() {
    return _oRow.parentElement.parentElement.id
}

function GetList(listName) {
    return XUI.Html.DomUtils.GetFirstChild($get(listName))
}

function GetRowCheckbox(oRow) {
    return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oRow))
}

function SelectInterval(oList, startIndex, endIndex) {
    if (startIndex > endIndex) {
        SelectInterval(oList, endIndex, startIndex);
        return
    }
    for (var i = startIndex; i <= endIndex; i++) {
        var checkbox = GetRowCheckbox(oList.childNodes[i]);
        if (!checkbox.checked) {
            checkbox.checked = true;
            oList.childNodes[i].className = SelectedRowStyle
        }
    }
}

function SelectedRowsCount(oList) {
    if (IsNull(oList))
        return 0;
    for (var selectedCount = 0,
        i = oList.childNodes.length - 1;
        i >= 0;
        i--)
        if (GetRowCheckbox(oList.childNodes[i]).checked)
            selectedCount++;
    return selectedCount
}

function SelectedNotRequiredRowsCount(oList) {
    if (IsNull(oList))
        return 0;
    for (var selectedCount = 0,
        i = oList.childNodes.length - 1;
        i >= 0;
        i--) {
        var oRow = oList.childNodes[i],
            req = oRow.attributes.getNamedItem("req").nodeValue;
        if ((req != SYSTEM_REQUIRED && req != BUSINESS_REQUIRED || DuplicateRowsCount(oList, oRow) > 0) &&
            GetRowCheckbox(oRow).checked)
            selectedCount++
    }
    return selectedCount
}

function RequiredRowsCount(oList) {
    if (IsNull(oList))
        return 0;
    for (var requiredCount = 0,
        i = oList.childNodes.length - 1;
        i >= 0;
        i--) {
        var req = oList.childNodes[i].attributes.getNamedItem("req").nodeValue;
        if (req == SYSTEM_REQUIRED || req == BUSINESS_REQUIRED)
            requiredCount++
    }
    return requiredCount
}

function GetSelectedRow(oList) {
    if (IsNull(oList))
        return null;
    for (var i = oList.childNodes.length - 1; i >= 0; i--)
        if (GetRowCheckbox(oList.childNodes[i]).checked)
            return oList.childNodes[i];
    return null
}

function DuplicateRowsCount(oList, oRow) {
    if (IsNull(oList) || IsNull(oRow))
        return -1;
    for (var duplicateRowCount = -1,
        rowCount = oList.childNodes.length,
        rowLogicalName = oRow.attributes.getNamedItem("name").nodeValue,
        i = 0;
        i < rowCount;
        i++)
        if (oList.childNodes[i].attributes.getNamedItem("name").nodeValue == rowLogicalName)
            duplicateRowCount++;
    return duplicateRowCount
}

function GetRowIndex(oList, oRow) {
    if (IsNull(oList) || IsNull(oRow))
        return -1;
    for (var i = oList.childNodes.length - 1; i >= 0; i--)
        if (oList.childNodes[i].id == oRow.id)
            return i;
    return -1
}

function UnselectRows(oList) {
    if (IsNull(oList))
        return;
    for (var i = oList.childNodes.length - 1; i >= 0; i--) {
        oList.childNodes[i].className = RowStyle;
        GetRowCheckbox(oList.childNodes[i]).checked = false
    }
}

function GetRowPositionForScrollingToDown(oList, oRow) {
    if (IsNull(oList) || IsNull(oRow))
        return 0;
    var position = oRow.offsetTop + oRow.offsetHeight,
        nextRow = XUI.Html.DomUtils.GetNextSibling(oRow);
    if (!IsNull(nextRow))
        position = nextRow.offsetTop + nextRow.offsetHeight;
    return position
}

function GetRowPositionForScrollingToUp(oList, oRow) {
    if (IsNull(oList) || IsNull(oRow))
        return 0;
    var position = oRow.offsetTop,
        prevRow = XUI.Html.DomUtils.GetPrevSibling(oRow);
    if (!IsNull(prevRow))
        position = prevRow.offsetTop - 2;
    return position
}

function ScrollVerticalListUp(oList, rowIndex, rowHeight) {
    var position = GetRowPositionForScrollingToUp(oList, _oRow);
    if (oList.scrollTop > position)
        oList.scrollTop = position
}

function ScrollVerticalListDown(oList, rowIndex, rowHeight) {
    var position = GetRowPositionForScrollingToDown(oList, _oRow),
        listHeight = oList.offsetHeight;
    if (oList.scrollTop < position - listHeight + 4)
        oList.scrollTop = position - listHeight + 4
}

function OnFocus(event) {
    var oRow = event.target;
    while (oRow.tagName != "LI") {
        oRow = oRow.parentElement;
        if (IsNull(oRow))
            return
    }
    if (!GetRowCheckbox(oRow).checked)
        if (oRow.className.indexOf(GlowOnStyle) < 0)
            oRow.className += " " + GlowOnStyle
}

function OnBlur(event) {
    var oRow = event.target;
    while (oRow.tagName != "LI") {
        oRow = oRow.parentElement;
        if (IsNull(oRow))
            return
    }
    if (!GetRowCheckbox(oRow).checked)
        oRow.className = oRow.className.replace(" " + GlowOnStyle, "")
}